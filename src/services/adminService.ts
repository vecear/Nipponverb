/**
 * 管理員服務
 * Admin Service
 */

import { doc, getDoc, setDoc, collection, getDocs, arrayUnion, arrayRemove } from 'firebase/firestore'
import { db } from '../config/firebase'
import { EXP_REWARDS } from '../types/progression'

// 預設管理員（作為後備，確保至少有一個管理員）
const DEFAULT_ADMIN_EMAIL = 'vecear@gmail.com'

// 管理員列表快取
let adminEmailsCache: string[] | null = null

// 遊戲配置類型
export interface GameConfig {
  progression: {
    baseExp: number           // 基礎經驗值
    growthFactor: number      // 成長係數
    maxLevel: number          // 最高等級
    jobChangeLevel: number    // 轉職等級
  }
  expRewards: {
    correctAnswer: number     // 答對練習題
    practiceComplete: number  // 完成一次練習
    simulationMin: number     // 模擬考試最低獎勵
    simulationMax: number     // 模擬考試最高獎勵
    stageComplete: number     // 完成情境關卡
    grammarLessonComplete: number // 完成文法課程隨堂測驗
  }
  updatedAt: Date
  updatedBy: string
}

// 預設遊戲配置
export const DEFAULT_GAME_CONFIG: GameConfig = {
  progression: {
    baseExp: 100,
    growthFactor: 0.15,
    maxLevel: 99,
    jobChangeLevel: 5,
  },
  expRewards: {
    correctAnswer: EXP_REWARDS.CORRECT_ANSWER,
    practiceComplete: EXP_REWARDS.PRACTICE_COMPLETE,
    simulationMin: EXP_REWARDS.SIMULATION_MIN,
    simulationMax: EXP_REWARDS.SIMULATION_MAX,
    stageComplete: EXP_REWARDS.STAGE_COMPLETE,
    grammarLessonComplete: EXP_REWARDS.GRAMMAR_LESSON_COMPLETE,
  },
  updatedAt: new Date(),
  updatedBy: 'system',
}

/**
 * 取得管理員列表
 */
export const getAdminList = async (): Promise<string[]> => {
  // 如果有快取，直接返回
  if (adminEmailsCache !== null) {
    return adminEmailsCache
  }

  try {
    const adminRef = doc(db, 'config', 'admins')
    const adminSnap = await getDoc(adminRef)

    if (adminSnap.exists()) {
      const data = adminSnap.data()
      const emails = (data.emails || []).map((e: string) => e.toLowerCase())
      // 確保預設管理員總是在列表中
      if (!emails.includes(DEFAULT_ADMIN_EMAIL)) {
        emails.push(DEFAULT_ADMIN_EMAIL)
      }
      adminEmailsCache = emails
      return emails
    }

    // 如果不存在，建立預設管理員配置
    const defaultEmails = [DEFAULT_ADMIN_EMAIL]
    try {
      await setDoc(adminRef, {
        emails: defaultEmails,
        updatedAt: new Date(),
      })
    } catch (writeError) {
      // 寫入失敗時靜默處理（可能是權限問題）
    }
    adminEmailsCache = defaultEmails
    return defaultEmails
  } catch (error) {
    console.error('Error getting admin list:', error)
    // 發生錯誤時返回預設管理員並設置快取
    const defaultEmails = [DEFAULT_ADMIN_EMAIL]
    adminEmailsCache = defaultEmails
    return defaultEmails
  }
}

/**
 * 清除管理員列表快取（用於更新後刷新）
 */
export const clearAdminCache = (): void => {
  adminEmailsCache = null
}

/**
 * 檢查是否為管理員（同步版本，使用快取）
 */
export const isAdmin = (email: string | null | undefined): boolean => {
  if (!email) return false
  // 如果快取存在，使用快取
  if (adminEmailsCache !== null) {
    return adminEmailsCache.includes(email.toLowerCase())
  }
  // 快取不存在時，檢查是否為預設管理員
  return email.toLowerCase() === DEFAULT_ADMIN_EMAIL
}

/**
 * 檢查是否為管理員（非同步版本，確保從資料庫讀取）
 */
export const isAdminAsync = async (email: string | null | undefined): Promise<boolean> => {
  if (!email) return false
  const admins = await getAdminList()
  return admins.includes(email.toLowerCase())
}

/**
 * 新增管理員
 */
export const addAdmin = async (
  newAdminEmail: string,
  currentAdminEmail: string
): Promise<void> => {
  const isCurrentAdmin = await isAdminAsync(currentAdminEmail)
  if (!isCurrentAdmin) {
    throw new Error('Unauthorized: Only admins can add new admins')
  }

  const adminRef = doc(db, 'config', 'admins')
  const admins = await getAdminList()
  const normalizedEmail = newAdminEmail.toLowerCase().trim()

  if (admins.includes(normalizedEmail)) {
    throw new Error('This email is already an admin')
  }

  await setDoc(adminRef, {
    emails: arrayUnion(normalizedEmail),
    updatedAt: new Date(),
    updatedBy: currentAdminEmail,
  }, { merge: true })

  // 清除快取
  clearAdminCache()
}

/**
 * 移除管理員
 */
export const removeAdmin = async (
  targetEmail: string,
  currentAdminEmail: string
): Promise<void> => {
  const isCurrentAdmin = await isAdminAsync(currentAdminEmail)
  if (!isCurrentAdmin) {
    throw new Error('Unauthorized: Only admins can remove admins')
  }

  const normalizedTarget = targetEmail.toLowerCase().trim()

  // 不能移除預設管理員
  if (normalizedTarget === DEFAULT_ADMIN_EMAIL) {
    throw new Error('Cannot remove the default admin')
  }

  // 不能移除自己
  if (normalizedTarget === currentAdminEmail.toLowerCase()) {
    throw new Error('Cannot remove yourself')
  }

  const adminRef = doc(db, 'config', 'admins')
  await setDoc(adminRef, {
    emails: arrayRemove(normalizedTarget),
    updatedAt: new Date(),
    updatedBy: currentAdminEmail,
  }, { merge: true })

  // 清除快取
  clearAdminCache()
}

/**
 * 取得遊戲配置
 */
export const getGameConfig = async (): Promise<GameConfig> => {
  try {
    const configRef = doc(db, 'config', 'game')
    const configSnap = await getDoc(configRef)

    if (configSnap.exists()) {
      const data = configSnap.data()
      return {
        ...data,
        updatedAt: data.updatedAt?.toDate() || new Date(),
      } as GameConfig
    }

    // 如果不存在，建立預設配置
    await setDoc(configRef, {
      ...DEFAULT_GAME_CONFIG,
      updatedAt: new Date(),
    })
    return DEFAULT_GAME_CONFIG
  } catch (error) {
    console.error('Error getting game config:', error)
    return DEFAULT_GAME_CONFIG
  }
}

/**
 * 更新遊戲配置
 */
export const updateGameConfig = async (
  config: Partial<GameConfig>,
  adminEmail: string
): Promise<void> => {
  if (!isAdmin(adminEmail)) {
    throw new Error('Unauthorized: Only admins can update game config')
  }

  const configRef = doc(db, 'config', 'game')
  const currentConfig = await getGameConfig()

  await setDoc(configRef, {
    ...currentConfig,
    ...config,
    updatedAt: new Date(),
    updatedBy: adminEmail,
  })
}

/**
 * 取得所有使用者統計
 */
export const getAllUsersStats = async (): Promise<{
  totalUsers: number
  levelDistribution: Record<number, number>
  jobDistribution: Record<string, number>
}> => {
  const usersRef = collection(db, 'users')
  const usersSnap = await getDocs(usersRef)

  const levelDistribution: Record<number, number> = {}
  const jobDistribution: Record<string, number> = {}
  let totalUsers = 0

  usersSnap.forEach((doc) => {
    totalUsers++
    const data = doc.data()
    const level = data.progression?.level || 0
    const jobId = data.progression?.jobId || 'none'

    levelDistribution[level] = (levelDistribution[level] || 0) + 1
    jobDistribution[jobId] = (jobDistribution[jobId] || 0) + 1
  })

  return {
    totalUsers,
    levelDistribution,
    jobDistribution,
  }
}

/**
 * 取得使用者列表（分頁）
 */
export const getUsersList = async (
  limit: number = 50
): Promise<Array<{
  uid: string
  email: string
  displayName: string
  level: number
  jobId: string | null
  createdAt: Date
}>> => {
  const usersRef = collection(db, 'users')
  const usersSnap = await getDocs(usersRef)

  const users: Array<{
    uid: string
    email: string
    displayName: string
    level: number
    jobId: string | null
    createdAt: Date
  }> = []

  usersSnap.forEach((doc) => {
    const data = doc.data()
    users.push({
      uid: doc.id,
      email: data.email || '',
      displayName: data.displayName || '',
      level: data.progression?.level || 0,
      jobId: data.progression?.jobId || null,
      createdAt: data.createdAt?.toDate() || new Date(),
    })
  })

  // 按建立時間排序
  users.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())

  return users.slice(0, limit)
}
