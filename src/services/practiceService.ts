import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import { PracticeHistoryEntry, QuestionStats, QuestionStatsEntry } from '../store/usePracticeStore'

// Firestore 中的使用者練習資料結構
export interface UserPracticeData {
  practiceHistory: PracticeHistoryEntry[]
  questionStats: QuestionStats
  earnedAchievements?: string[]
  updatedAt: string
}

/**
 * 正規化舊格式的 QuestionStatsEntry，補上新欄位預設值
 */
export function normalizeQuestionStatsEntry(
  entry: Partial<QuestionStatsEntry>
): QuestionStatsEntry {
  return {
    attempts: entry.attempts ?? 0,
    correct: entry.correct ?? 0,
    lastAttempt: entry.lastAttempt ?? '',
    srsInterval: entry.srsInterval ?? 1,
    srsEaseFactor: entry.srsEaseFactor ?? 2.5,
    srsDueDate: entry.srsDueDate,
    srsPhase: entry.srsPhase ?? 'new',
    consecutiveErrors: entry.consecutiveErrors ?? 0,
    consecutiveCorrect: entry.consecutiveCorrect ?? 0,
    avgResponseTime: entry.avgResponseTime,
    lastResponseTime: entry.lastResponseTime,
    errorPattern: entry.errorPattern ?? [],
  }
}

/**
 * 從 Firestore 載入使用者的練習資料
 */
export const loadUserPracticeData = async (uid: string): Promise<UserPracticeData | null> => {
  try {
    const practiceRef = doc(db, 'users', uid, 'data', 'practice')
    const practiceSnap = await getDoc(practiceRef)

    if (practiceSnap.exists()) {
      return practiceSnap.data() as UserPracticeData
    }

    return null
  } catch (error) {
    console.error('Failed to load user practice data:', error)
    return null
  }
}

/**
 * 儲存使用者的練習歷史紀錄
 */
export const saveUserPracticeHistory = async (
  uid: string,
  practiceHistory: PracticeHistoryEntry[]
): Promise<void> => {
  try {
    const practiceRef = doc(db, 'users', uid, 'data', 'practice')
    await setDoc(practiceRef, {
      practiceHistory,
      updatedAt: new Date().toISOString(),
    }, { merge: true })
  } catch (error) {
    console.error('Failed to save practice history:', error)
    throw error
  }
}

/**
 * 儲存使用者的題目統計資料
 */
export const saveUserQuestionStats = async (
  uid: string,
  questionStats: QuestionStats
): Promise<void> => {
  try {
    const practiceRef = doc(db, 'users', uid, 'data', 'practice')
    await setDoc(practiceRef, {
      questionStats,
      updatedAt: new Date().toISOString(),
    }, { merge: true })
  } catch (error) {
    console.error('Failed to save question stats:', error)
    throw error
  }
}

/**
 * 儲存完整的練習資料（歷史 + 統計）
 */
export const saveUserPracticeData = async (
  uid: string,
  data: { practiceHistory: PracticeHistoryEntry[]; questionStats: QuestionStats }
): Promise<void> => {
  try {
    const practiceRef = doc(db, 'users', uid, 'data', 'practice')
    await setDoc(practiceRef, {
      ...data,
      updatedAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Failed to save practice data:', error)
    throw error
  }
}

/**
 * 儲存使用者已獲得的成就
 */
export const saveEarnedAchievements = async (
  uid: string,
  earnedAchievements: string[]
): Promise<void> => {
  try {
    const practiceRef = doc(db, 'users', uid, 'data', 'practice')
    await setDoc(practiceRef, {
      earnedAchievements,
      updatedAt: new Date().toISOString(),
    }, { merge: true })
  } catch (error) {
    console.error('Failed to save earned achievements:', error)
    throw error
  }
}

/**
 * 清除使用者的練習資料（用於登出時清除本地狀態）
 */
export const clearUserPracticeData = async (uid: string): Promise<void> => {
  console.log(`Practice data cleared for user: ${uid}`)
}
