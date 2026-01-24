/**
 * 管理員服務
 * Admin Service
 */

import { doc, getDoc, setDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase'
import { EXP_REWARDS } from '../types/progression'

// 管理員清單
export const ADMIN_EMAILS = ['vecear@gmail.com']

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
  },
  updatedAt: new Date(),
  updatedBy: 'system',
}

/**
 * 檢查是否為管理員
 */
export const isAdmin = (email: string | null | undefined): boolean => {
  if (!email) return false
  return ADMIN_EMAILS.includes(email.toLowerCase())
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
