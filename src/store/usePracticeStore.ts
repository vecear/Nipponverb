import { create } from 'zustand'
import { Question } from '../types'

interface AnswerRecord {
  questionId: string
  selectedAnswer: string
  isCorrect: boolean
}

export interface PracticeHistoryEntry {
  id: string
  category: string
  level: string
  score: number
  total: number
  accuracy: number
  date: string
  questions: Question[]
  answerRecords: AnswerRecord[]
}

// 題目完成次數統計
export interface QuestionStats {
  [questionId: string]: {
    attempts: number
    correct: number
    lastAttempt: string
  }
}

interface PracticeStore {
  currentQuestion: Question | null
  questions: Question[]
  currentIndex: number
  score: number
  totalAttempts: number
  answerRecords: AnswerRecord[]
  practiceHistory: PracticeHistoryEntry[]
  questionStats: QuestionStats

  setQuestions: (questions: Question[]) => void
  nextQuestion: () => void
  checkAnswer: (answer: string) => boolean
  resetPractice: () => void
  savePracticeResult: (category: string, level: string) => void
  loadPracticeHistory: () => void
  getHistoryByCategory: (category: string, level: string) => PracticeHistoryEntry[]
  getLastPractice: (category: string, level: string) => PracticeHistoryEntry | null
  getQuestionStats: (questionId: string) => QuestionStats[string] | null
  getCoverage: (category: string, level: string, totalQuestions: number) => { attempted: number; total: number; percentage: number }
  getAttemptedQuestions: (category: string, level: string) => Set<string>
}

const HISTORY_KEY = 'nipponverb_practice_history'
const STATS_KEY = 'nipponverb_question_stats'

const loadHistoryFromStorage = (): PracticeHistoryEntry[] => {
  try {
    const stored = localStorage.getItem(HISTORY_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

const saveHistoryToStorage = (history: PracticeHistoryEntry[]) => {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
  } catch {
    console.error('Failed to save practice history')
  }
}

const loadStatsFromStorage = (): QuestionStats => {
  try {
    const stored = localStorage.getItem(STATS_KEY)
    return stored ? JSON.parse(stored) : {}
  } catch {
    return {}
  }
}

const saveStatsToStorage = (stats: QuestionStats) => {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats))
  } catch {
    console.error('Failed to save question stats')
  }
}

export const usePracticeStore = create<PracticeStore>((set, get) => ({
  currentQuestion: null,
  questions: [],
  currentIndex: 0,
  score: 0,
  totalAttempts: 0,
  answerRecords: [],
  practiceHistory: loadHistoryFromStorage(),
  questionStats: loadStatsFromStorage(),

  setQuestions: (questions) =>
    set({
      questions,
      currentQuestion: questions[0] || null,
      currentIndex: 0,
      score: 0,
      totalAttempts: 0,
      answerRecords: [],
    }),

  nextQuestion: () =>
    set((state) => {
      const nextIndex = state.currentIndex + 1
      return {
        currentIndex: nextIndex,
        currentQuestion: state.questions[nextIndex] || null,
      }
    }),

  checkAnswer: (answer: string) => {
    const { currentQuestion, questionStats } = get()
    if (!currentQuestion) return false

    const isCorrect = answer === currentQuestion.correct

    // 更新題目統計
    const updatedStats = { ...questionStats }
    const qid = currentQuestion.id
    if (!updatedStats[qid]) {
      updatedStats[qid] = { attempts: 0, correct: 0, lastAttempt: '' }
    }
    updatedStats[qid].attempts++
    if (isCorrect) updatedStats[qid].correct++
    updatedStats[qid].lastAttempt = new Date().toISOString()

    saveStatsToStorage(updatedStats)

    set((state) => ({
      score: isCorrect ? state.score + 1 : state.score,
      totalAttempts: state.totalAttempts + 1,
      answerRecords: [
        ...state.answerRecords,
        {
          questionId: currentQuestion.id,
          selectedAnswer: answer,
          isCorrect,
        },
      ],
      questionStats: updatedStats,
    }))

    return isCorrect
  },

  resetPractice: () =>
    set({
      currentQuestion: null,
      questions: [],
      currentIndex: 0,
      score: 0,
      totalAttempts: 0,
      answerRecords: [],
    }),

  savePracticeResult: (category: string, level: string) => {
    const { score, answerRecords, questions } = get()
    if (answerRecords.length === 0) return

    const entry: PracticeHistoryEntry = {
      id: `${Date.now()}_${Math.random().toString(36).substring(2, 11)}`,
      category,
      level,
      score,
      total: answerRecords.length,
      accuracy: Math.round((score / answerRecords.length) * 100),
      date: new Date().toISOString(),
      questions,
      answerRecords,
    }

    set((state) => {
      const newHistory = [entry, ...state.practiceHistory]
      saveHistoryToStorage(newHistory)
      return { practiceHistory: newHistory }
    })
  },

  loadPracticeHistory: () => {
    set({ practiceHistory: loadHistoryFromStorage() })
  },

  getHistoryByCategory: (category: string, level: string) => {
    const { practiceHistory } = get()
    return practiceHistory
      .filter((h) => h.category === category && h.level === level)
      .slice(0, 10)
  },

  getLastPractice: (category: string, level: string) => {
    const { practiceHistory } = get()
    return practiceHistory.find((h) => h.category === category && h.level === level) || null
  },

  getQuestionStats: (questionId: string) => {
    const { questionStats } = get()
    return questionStats[questionId] || null
  },

  getAttemptedQuestions: (category: string, level: string) => {
    const { practiceHistory } = get()
    const attemptedIds = new Set<string>()

    practiceHistory
      .filter((h) => h.category === category && h.level === level)
      .forEach((entry) => {
        entry.questions.forEach((q) => {
          attemptedIds.add(q.id)
        })
      })

    return attemptedIds
  },

  getCoverage: (category: string, level: string, totalQuestions: number) => {
    const attemptedIds = get().getAttemptedQuestions(category, level)
    const attempted = attemptedIds.size
    const percentage = totalQuestions > 0 ? Math.round((attempted / totalQuestions) * 100) : 0

    return {
      attempted,
      total: totalQuestions,
      percentage,
    }
  },
}))

