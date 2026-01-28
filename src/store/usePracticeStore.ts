import { create } from 'zustand'
import { Question } from '../types'
import {
  loadUserPracticeData,
  saveUserPracticeHistory,
  saveUserQuestionStats,
} from '../services/practiceService'

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

// 級別統計資訊
export interface LevelStats {
  totalAttempted: number  // 總共做過幾題（不重複）
  totalCorrect: number    // 答對幾題（不重複）
  totalWrong: number      // 答錯幾題（最近一次答錯的）
  accuracy: number        // 正確率
  wrongQuestionIds: string[]  // 答錯的題目 ID 列表
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
  currentUserId: string | null
  isLoading: boolean

  setCurrentUserId: (userId: string | null) => Promise<void>
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
  getLevelStats: (category: string, level: string) => LevelStats
  getWrongQuestionIds: (category: string, level: string) => string[]
  clearPracticeData: () => void
}

export const usePracticeStore = create<PracticeStore>((set, get) => ({
  currentQuestion: null,
  questions: [],
  currentIndex: 0,
  score: 0,
  totalAttempts: 0,
  answerRecords: [],
  practiceHistory: [],
  questionStats: {},
  currentUserId: null,
  isLoading: false,

  // 設定當前使用者 ID，並從 Firestore 載入該使用者的練習資料
  setCurrentUserId: async (userId: string | null) => {
    set({ currentUserId: userId, isLoading: true })

    if (userId) {
      try {
        const data = await loadUserPracticeData(userId)
        if (data) {
          set({
            practiceHistory: data.practiceHistory || [],
            questionStats: data.questionStats || {},
            isLoading: false,
          })
        } else {
          // 新使用者，沒有練習資料
          set({
            practiceHistory: [],
            questionStats: {},
            isLoading: false,
          })
        }
      } catch (error) {
        console.error('Failed to load practice data:', error)
        set({
          practiceHistory: [],
          questionStats: {},
          isLoading: false,
        })
      }
    } else {
      // 登出時清除資料
      set({
        practiceHistory: [],
        questionStats: {},
        isLoading: false,
      })
    }
  },

  // 清除練習資料（登出時使用）
  clearPracticeData: () => {
    set({
      currentUserId: null,
      practiceHistory: [],
      questionStats: {},
      currentQuestion: null,
      questions: [],
      currentIndex: 0,
      score: 0,
      totalAttempts: 0,
      answerRecords: [],
    })
  },

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
    const { currentQuestion, questionStats, currentUserId } = get()
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

    // 儲存到 Firestore（非同步，不阻塞）
    if (currentUserId) {
      saveUserQuestionStats(currentUserId, updatedStats).catch((error) => {
        console.error('Failed to save question stats to cloud:', error)
      })
    }

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
    const { score, answerRecords, questions, currentUserId, practiceHistory } = get()
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

    const newHistory = [entry, ...practiceHistory]

    // 儲存到 Firestore（非同步，不阻塞）
    if (currentUserId) {
      saveUserPracticeHistory(currentUserId, newHistory).catch((error) => {
        console.error('Failed to save practice history to cloud:', error)
      })
    }

    set({ practiceHistory: newHistory })
  },

  loadPracticeHistory: () => {
    // 這個方法現在主要由 setCurrentUserId 處理
    // 保留此方法以維持 API 相容性
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

  // 取得答錯的題目 ID（最近一次作答答錯的）
  getWrongQuestionIds: (category: string, level: string) => {
    const { questionStats, practiceHistory } = get()
    const wrongIds: string[] = []

    // 從歷史記錄中找出該類別和級別的題目
    const relevantHistory = practiceHistory.filter(
      (h) => h.category === category && h.level === level
    )

    // 收集所有做過的題目 ID
    const allQuestionIds = new Set<string>()
    relevantHistory.forEach((entry) => {
      entry.questions.forEach((q) => allQuestionIds.add(q.id))
    })

    // 檢查每個題目的統計，找出答錯比答對多的題目（或從未答對的）
    // 邏輯與 getLevelStats 保持一致
    allQuestionIds.forEach((qid) => {
      const stats = questionStats[qid]
      if (stats) {
        // 與 getLevelStats 相同邏輯：correct > 0 且 correct >= wrong 才算答對
        const isCorrect = stats.correct > 0 && stats.correct >= stats.attempts - stats.correct
        if (!isCorrect) {
          wrongIds.push(qid)
        }
      }
    })

    return wrongIds
  },

  // 取得級別的完整統計資訊
  getLevelStats: (category: string, level: string) => {
    const { questionStats, practiceHistory } = get()

    // 從歷史記錄中找出該類別和級別的題目
    const relevantHistory = practiceHistory.filter(
      (h) => h.category === category && h.level === level
    )

    // 收集所有做過的題目 ID
    const allQuestionIds = new Set<string>()
    relevantHistory.forEach((entry) => {
      entry.questions.forEach((q) => allQuestionIds.add(q.id))
    })

    let totalCorrect = 0
    let totalWrong = 0
    const wrongQuestionIds: string[] = []

    // 統計每個題目
    allQuestionIds.forEach((qid) => {
      const stats = questionStats[qid]
      if (stats) {
        if (stats.correct > 0 && stats.correct >= stats.attempts - stats.correct) {
          // 答對次數 >= 答錯次數，算答對
          totalCorrect++
        } else {
          // 答錯次數 > 答對次數，算答錯
          totalWrong++
          wrongQuestionIds.push(qid)
        }
      }
    })

    const totalAttempted = allQuestionIds.size
    const accuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0

    return {
      totalAttempted,
      totalCorrect,
      totalWrong,
      accuracy,
      wrongQuestionIds,
    }
  },
}))
