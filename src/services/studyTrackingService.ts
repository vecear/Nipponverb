import { doc, updateDoc, getDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import { UserStats } from '../types'

/**
 * 取得今天的日期字串 (YYYY-MM-DD)
 */
export const getTodayDateString = (): string => {
  const today = new Date()
  return today.toISOString().split('T')[0]
}

/**
 * 取得昨天的日期字串 (YYYY-MM-DD)
 */
export const getYesterdayDateString = (): string => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.toISOString().split('T')[0]
}

/**
 * 計算連續天數
 * - 如果上次學習是今天，不變
 * - 如果上次學習是昨天，+1
 * - 如果超過一天沒學習，重置為 1
 */
export const calculateStreak = (
  lastStudyDate: string | undefined,
  currentStreak: number
): { current: number; lastStudyDate: string } => {
  const today = getTodayDateString()
  const yesterday = getYesterdayDateString()

  if (!lastStudyDate) {
    // 首次學習
    return { current: 1, lastStudyDate: today }
  }

  if (lastStudyDate === today) {
    // 今天已經學習過，維持現有連續天數
    return { current: currentStreak, lastStudyDate: today }
  }

  if (lastStudyDate === yesterday) {
    // 昨天有學習，連續天數 +1
    return { current: currentStreak + 1, lastStudyDate: today }
  }

  // 超過一天沒學習，重置為 1
  return { current: 1, lastStudyDate: today }
}

/**
 * 格式化學習時間顯示
 * @param minutes 總分鐘數
 * @returns 格式化後的時間字串
 */
export const formatStudyTime = (minutes: number | undefined): string => {
  if (!minutes || minutes === 0) return '0 分鐘'

  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60

  if (hours === 0) {
    return `${mins} 分鐘`
  }

  if (mins === 0) {
    return `${hours} 小時`
  }

  return `${hours} 小時 ${mins} 分鐘`
}

/**
 * 更新學習時間和連續天數
 * @param uid 使用者 ID
 * @param studyMinutes 本次學習時間（分鐘）
 */
export const updateStudyTracking = async (
  uid: string,
  studyMinutes: number
): Promise<{ totalStudyTime: number; streak: { current: number; lastStudyDate: string } }> => {
  const userRef = doc(db, 'users', uid)
  const userSnap = await getDoc(userRef)

  if (!userSnap.exists()) {
    throw new Error('User not found')
  }

  const userData = userSnap.data()
  const currentStats: UserStats = userData.stats || {}

  // 計算新的學習時間
  const newTotalStudyTime = (currentStats.totalStudyTime || 0) + studyMinutes

  // 計算新的連續天數
  const currentStreak = currentStats.streak?.current || 0
  const lastStudyDate = currentStats.streak?.lastStudyDate
  const newStreak = calculateStreak(lastStudyDate, currentStreak)

  // 更新 Firestore
  await updateDoc(userRef, {
    'stats.totalStudyTime': newTotalStudyTime,
    'stats.streak': newStreak,
  })

  return {
    totalStudyTime: newTotalStudyTime,
    streak: newStreak,
  }
}

/**
 * 僅更新連續天數（用於登入時檢查）
 * @param uid 使用者 ID
 */
export const checkAndUpdateStreak = async (
  uid: string
): Promise<{ current: number; lastStudyDate: string } | null> => {
  const userRef = doc(db, 'users', uid)
  const userSnap = await getDoc(userRef)

  if (!userSnap.exists()) {
    return null
  }

  const userData = userSnap.data()
  const currentStats: UserStats = userData.stats || {}

  const lastStudyDate = currentStats.streak?.lastStudyDate

  if (!lastStudyDate) {
    // 沒有學習記錄，不更新
    return null
  }

  const today = getTodayDateString()
  const yesterday = getYesterdayDateString()

  // 檢查是否需要重置連續天數（超過一天沒學習）
  if (lastStudyDate !== today && lastStudyDate !== yesterday) {
    // 連續天數已中斷，重置為 0（下次學習時會設為 1）
    const resetStreak = { current: 0, lastStudyDate: lastStudyDate }
    await updateDoc(userRef, {
      'stats.streak': resetStreak,
    })
    return resetStreak
  }

  return currentStats.streak || null
}
