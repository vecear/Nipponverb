import { create } from 'zustand'
import { Question } from '../types'
import {
  loadUserPracticeData,
  saveUserPracticeHistory,
  saveUserQuestionStats,
} from '../services/practiceService'
import { rateAnswer, updateSRS } from '../utils/srsEngine'

export interface AnswerRecord {
  questionId: string
  selectedAnswer: string
  isCorrect: boolean
  responseTimeMs?: number
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
  durationMs?: number           // 整場練習時長 (ms)
  avgResponseTimeMs?: number    // 平均每題作答時間 (ms)
}

// 單題統計資料（含 SRS 和弱點追蹤）
export interface QuestionStatsEntry {
  // 基礎統計
  attempts: number
  correct: number
  lastAttempt: string

  // SRS 間隔重複
  srsInterval?: number       // 天數（預設 1）
  srsEaseFactor?: number     // 倍率（預設 2.5）
  srsDueDate?: string        // ISO 日期字串
  srsPhase?: 'new' | 'learning' | 'review' | 'relearning'

  // 弱點追蹤
  consecutiveErrors?: number   // 連續答錯次數（答對重設為 0）
  consecutiveCorrect?: number  // 連續答對次數（答錯重設為 0）
  avgResponseTime?: number     // 滾動平均作答時間 (ms)
  lastResponseTime?: number    // 上次作答時間 (ms)
  errorPattern?: string[]      // 最近 5 次答錯時選的答案
}

// 題目完成次數統計
export interface QuestionStats {
  [questionId: string]: QuestionStatsEntry
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
  questionStartTime: number | null  // 當前題目開始作答時間戳
  earnedAchievements: string[]      // 已獲得的成就 ID 列表

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
  questionStartTime: null,
  earnedAchievements: [],

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
            earnedAchievements: data.earnedAchievements || [],
            isLoading: false,
          })
        } else {
          // 新使用者，沒有練習資料
          set({
            practiceHistory: [],
            questionStats: {},
            earnedAchievements: [],
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
      earnedAchievements: [],
      currentQuestion: null,
      questions: [],
      currentIndex: 0,
      score: 0,
      totalAttempts: 0,
      answerRecords: [],
      questionStartTime: null,
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
      questionStartTime: Date.now(),
    }),

  nextQuestion: () =>
    set((state) => {
      const nextIndex = state.currentIndex + 1
      return {
        currentIndex: nextIndex,
        currentQuestion: state.questions[nextIndex] || null,
        questionStartTime: Date.now(),
      }
    }),

  checkAnswer: (answer: string) => {
    const { currentQuestion, questionStats, currentUserId, questionStartTime } = get()
    if (!currentQuestion) return false

    const isCorrect = answer === currentQuestion.correct
    const now = Date.now()
    const responseTimeMs = questionStartTime ? now - questionStartTime : undefined

    // 更新題目統計
    const updatedStats = { ...questionStats }
    const qid = currentQuestion.id
    if (!updatedStats[qid]) {
      updatedStats[qid] = { attempts: 0, correct: 0, lastAttempt: '' }
    }

    const prevEntry = updatedStats[qid]

    // 基礎統計
    updatedStats[qid] = {
      ...prevEntry,
      attempts: prevEntry.attempts + 1,
      correct: isCorrect ? prevEntry.correct + 1 : prevEntry.correct,
      lastAttempt: new Date().toISOString(),

      // SRS 更新
      ...(() => {
        const quality = rateAnswer(
          isCorrect,
          responseTimeMs,
          prevEntry.avgResponseTime,
          prevEntry.consecutiveCorrect ?? 0,
        )
        const currentSRS = {
          interval: prevEntry.srsInterval ?? 1,
          easeFactor: prevEntry.srsEaseFactor ?? 2.5,
          phase: (prevEntry.srsPhase ?? 'new') as 'new' | 'learning' | 'review' | 'relearning',
          dueDate: prevEntry.srsDueDate ?? new Date().toISOString(),
        }
        const newSRS = updateSRS(currentSRS, quality)
        return {
          srsInterval: newSRS.interval,
          srsEaseFactor: newSRS.easeFactor,
          srsDueDate: newSRS.dueDate,
          srsPhase: newSRS.phase,
        }
      })(),

      // 弱點追蹤
      consecutiveErrors: isCorrect ? 0 : (prevEntry.consecutiveErrors ?? 0) + 1,
      consecutiveCorrect: isCorrect ? (prevEntry.consecutiveCorrect ?? 0) + 1 : 0,
      lastResponseTime: responseTimeMs,
      avgResponseTime: responseTimeMs !== undefined
        ? prevEntry.avgResponseTime
          ? Math.round(prevEntry.avgResponseTime * 0.7 + responseTimeMs * 0.3)
          : responseTimeMs
        : prevEntry.avgResponseTime,
      errorPattern: !isCorrect
        ? [...(prevEntry.errorPattern ?? []).slice(-4), answer]
        : prevEntry.errorPattern,
    }

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
          responseTimeMs,
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
      questionStartTime: null,
    }),

  savePracticeResult: (category: string, level: string) => {
    const { score, answerRecords, questions, currentUserId, practiceHistory } = get()
    if (answerRecords.length === 0) return

    // 計算作答時間統計
    const responseTimes = answerRecords
      .map(r => r.responseTimeMs)
      .filter((t): t is number => t !== undefined)
    const avgResponseTimeMs = responseTimes.length > 0
      ? Math.round(responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length)
      : undefined

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
      avgResponseTimeMs,
    }

    // 限制最多保留 50 筆歷史記錄
    const newHistory = [entry, ...practiceHistory].slice(0, 50)

    // 儲存到 Firestore（非同步，不阻塞）
    // 精簡 questions：剝除 detailedExplanation 和 explanation 以減少存儲大小
    if (currentUserId) {
      const compactHistory = newHistory.map(h => ({
        ...h,
        questions: h.questions.map(q => {
          const { detailedExplanation, explanation, ...compact } = q
          return compact
        }),
      }))
      saveUserPracticeHistory(currentUserId, compactHistory as PracticeHistoryEntry[]).catch((error) => {
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
        entry.answerRecords.forEach((r) => {
          attemptedIds.add(r.questionId)
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

    // 收集所有做過的題目 ID（使用 answerRecords 而非 questions）
    const allQuestionIds = new Set<string>()
    relevantHistory.forEach((entry) => {
      entry.answerRecords.forEach((r) => allQuestionIds.add(r.questionId))
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

    // 收集所有實際作答過的題目 ID（使用 answerRecords 而非 questions）
    const allQuestionIds = new Set<string>()
    relevantHistory.forEach((entry) => {
      entry.answerRecords.forEach((record) => allQuestionIds.add(record.questionId))
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
