/**
 * 積分系統服務
 * Progression System Service
 */

import { doc, updateDoc, getDoc, Timestamp } from 'firebase/firestore'
import { db } from '../config/firebase'
import {
  UserProgression,
  ExpEventType,
  LevelUpInfo,
  EXP_CONSTANTS,
  EXP_REWARDS,
  DEFAULT_PROGRESSION,
  Gender,
} from '../types/progression'
import { getJobById, getCurrentTitle, NOVICE_TITLE } from '../data/jobs'

/**
 * 計算升級所需的經驗值
 * 公式: 基礎值 × (1 + 成長係數 × 等級)^2
 */
export function getExpRequiredForLevel(level: number): number {
  const { BASE_EXP, GROWTH_FACTOR } = EXP_CONSTANTS
  return Math.floor(BASE_EXP * Math.pow(1 + GROWTH_FACTOR * level, 2))
}

/**
 * 計算從 0 級到指定等級需要的總經驗值
 */
export function getTotalExpForLevel(level: number): number {
  let total = 0
  for (let i = 0; i < level; i++) {
    total += getExpRequiredForLevel(i)
  }
  return total
}

/**
 * 根據總經驗值計算等級
 */
export function getLevelFromTotalExp(totalExp: number): number {
  let level = 0
  let expNeeded = 0

  while (level < EXP_CONSTANTS.MAX_LEVEL) {
    const expForThisLevel = getExpRequiredForLevel(level)
    if (expNeeded + expForThisLevel > totalExp) {
      break
    }
    expNeeded += expForThisLevel
    level++
  }

  return level
}

/**
 * 計算當前等級的經驗值進度
 */
export function getCurrentLevelProgress(progression: UserProgression): {
  currentExp: number
  requiredExp: number
  percentage: number
} {
  const expForCurrentLevel = getTotalExpForLevel(progression.level)
  const currentExp = progression.totalExp - expForCurrentLevel
  const requiredExp = getExpRequiredForLevel(progression.level)
  const percentage = Math.min(100, Math.floor((currentExp / requiredExp) * 100))

  return {
    currentExp,
    requiredExp,
    percentage,
  }
}

/**
 * 根據事件類型計算經驗值
 */
export function calculateExpReward(
  eventType: ExpEventType,
  metadata?: { accuracy?: number }
): number {
  switch (eventType) {
    case 'correct_answer':
      return EXP_REWARDS.CORRECT_ANSWER

    case 'practice_complete':
      return EXP_REWARDS.PRACTICE_COMPLETE

    case 'simulation_complete':
      // 根據正確率計算 (100-500)
      const accuracy = metadata?.accuracy ?? 0
      const range = EXP_REWARDS.SIMULATION_MAX - EXP_REWARDS.SIMULATION_MIN
      return Math.floor(EXP_REWARDS.SIMULATION_MIN + (accuracy / 100) * range)

    case 'stage_complete':
      return EXP_REWARDS.STAGE_COMPLETE

    default:
      return 0
  }
}

/**
 * 增加經驗值並處理升級
 */
export function addExp(
  progression: UserProgression,
  expAmount: number,
  gender: Gender
): {
  newProgression: UserProgression
  levelUpInfo: LevelUpInfo | null
} {
  const previousLevel = progression.level
  const newTotalExp = progression.totalExp + expAmount

  // 計算新等級
  const newLevel = Math.min(
    getLevelFromTotalExp(newTotalExp),
    EXP_CONSTANTS.MAX_LEVEL
  )

  // 計算當前等級的經驗值
  const expForNewLevel = getTotalExpForLevel(newLevel)
  const newExp = newTotalExp - expForNewLevel

  const newProgression: UserProgression = {
    ...progression,
    level: newLevel,
    exp: newExp,
    totalExp: newTotalExp,
  }

  // 檢查是否升級
  let levelUpInfo: LevelUpInfo | null = null
  if (newLevel > previousLevel) {
    const isJobChangeTriggered =
      previousLevel < EXP_CONSTANTS.JOB_CHANGE_LEVEL &&
      newLevel >= EXP_CONSTANTS.JOB_CHANGE_LEVEL

    // 取得新稱號
    let newTitle: LevelUpInfo['newTitle'] | undefined
    if (progression.jobId) {
      const job = getJobById(progression.jobId)
      if (job) {
        const title = getCurrentTitle(job, newLevel, gender)
        if (title) {
          newTitle = title
        }
      }
    } else if (newLevel < EXP_CONSTANTS.JOB_CHANGE_LEVEL) {
      // 尚未轉職，使用見習稱號
      newTitle = NOVICE_TITLE
    }

    levelUpInfo = {
      previousLevel,
      newLevel,
      expGained: expAmount,
      isJobChangeTriggered,
      newTitle,
    }
  }

  return { newProgression, levelUpInfo }
}

/**
 * 選擇職業
 */
export function selectJob(
  progression: UserProgression,
  jobId: string
): UserProgression {
  return {
    ...progression,
    jobId,
    jobChangedAt: new Date(),
  }
}

/**
 * 更新 Firestore 中的使用者積分資料
 */
export async function updateUserProgression(
  uid: string,
  progression: UserProgression
): Promise<void> {
  const userRef = doc(db, 'users', uid)
  await updateDoc(userRef, {
    progression: {
      ...progression,
      jobChangedAt: progression.jobChangedAt
        ? Timestamp.fromDate(progression.jobChangedAt)
        : null,
    },
  })
}

/**
 * 從 Firestore 取得使用者積分資料
 */
export async function getUserProgression(
  uid: string
): Promise<UserProgression | null> {
  const userRef = doc(db, 'users', uid)
  const userDoc = await getDoc(userRef)

  if (!userDoc.exists()) {
    return null
  }

  const data = userDoc.data()
  if (!data.progression) {
    return DEFAULT_PROGRESSION
  }

  return {
    ...data.progression,
    jobChangedAt: data.progression.jobChangedAt?.toDate() || null,
  }
}

/**
 * 初始化新使用者的積分資料
 */
export async function initializeUserProgression(
  uid: string,
  gender: Gender
): Promise<void> {
  const userRef = doc(db, 'users', uid)
  await updateDoc(userRef, {
    gender,
    progression: DEFAULT_PROGRESSION,
  })
}

/**
 * 處理答對題目事件
 */
export async function handleCorrectAnswer(
  uid: string,
  currentProgression: UserProgression,
  gender: Gender
): Promise<LevelUpInfo | null> {
  const expAmount = calculateExpReward('correct_answer')
  const { newProgression, levelUpInfo } = addExp(
    currentProgression,
    expAmount,
    gender
  )
  await updateUserProgression(uid, newProgression)
  return levelUpInfo
}

/**
 * 處理完成練習事件
 */
export async function handlePracticeComplete(
  uid: string,
  currentProgression: UserProgression,
  gender: Gender
): Promise<LevelUpInfo | null> {
  const expAmount = calculateExpReward('practice_complete')
  const { newProgression, levelUpInfo } = addExp(
    currentProgression,
    expAmount,
    gender
  )
  await updateUserProgression(uid, newProgression)
  return levelUpInfo
}

/**
 * 處理完成模擬考試事件
 */
export async function handleSimulationComplete(
  uid: string,
  currentProgression: UserProgression,
  gender: Gender,
  accuracy: number
): Promise<LevelUpInfo | null> {
  const expAmount = calculateExpReward('simulation_complete', { accuracy })
  const { newProgression, levelUpInfo } = addExp(
    currentProgression,
    expAmount,
    gender
  )
  await updateUserProgression(uid, newProgression)
  return levelUpInfo
}

/**
 * 處理完成情境關卡事件
 */
export async function handleStageComplete(
  uid: string,
  currentProgression: UserProgression,
  gender: Gender
): Promise<LevelUpInfo | null> {
  const expAmount = calculateExpReward('stage_complete')
  const { newProgression, levelUpInfo } = addExp(
    currentProgression,
    expAmount,
    gender
  )
  await updateUserProgression(uid, newProgression)
  return levelUpInfo
}

/**
 * 處理選擇職業事件
 */
export async function handleJobSelection(
  uid: string,
  currentProgression: UserProgression,
  jobId: string
): Promise<UserProgression> {
  const newProgression = selectJob(currentProgression, jobId)
  await updateUserProgression(uid, newProgression)
  return newProgression
}
