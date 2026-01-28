import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import { PracticeHistoryEntry, QuestionStats } from '../store/usePracticeStore'

// Firestore 中的使用者練習資料結構
export interface UserPracticeData {
  practiceHistory: PracticeHistoryEntry[]
  questionStats: QuestionStats
  updatedAt: string
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
    const practiceSnap = await getDoc(practiceRef)

    if (practiceSnap.exists()) {
      await updateDoc(practiceRef, {
        practiceHistory,
        updatedAt: new Date().toISOString(),
      })
    } else {
      await setDoc(practiceRef, {
        practiceHistory,
        questionStats: {},
        updatedAt: new Date().toISOString(),
      })
    }
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
    const practiceSnap = await getDoc(practiceRef)

    if (practiceSnap.exists()) {
      await updateDoc(practiceRef, {
        questionStats,
        updatedAt: new Date().toISOString(),
      })
    } else {
      await setDoc(practiceRef, {
        practiceHistory: [],
        questionStats,
        updatedAt: new Date().toISOString(),
      })
    }
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
 * 清除使用者的練習資料（用於登出時清除本地狀態）
 */
export const clearUserPracticeData = async (uid: string): Promise<void> => {
  // 這個函數不會刪除雲端資料，只是提供一個清除的介面
  // 實際清除雲端資料需要更謹慎的處理
  console.log(`Practice data cleared for user: ${uid}`)
}
