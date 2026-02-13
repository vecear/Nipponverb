/**
 * 積分系統類型定義
 * Progression System Type Definitions
 */

// 性別類型
export type Gender = 'male' | 'female'

// 職業相關類型 (Job, JobStage) 請從 ../data/jobs 引入

// 使用者積分資料
export interface UserProgression {
  level: number           // 當前等級 (0-99)
  exp: number             // 當前經驗值
  totalExp: number        // 累計總經驗值
  jobId: string | null    // 職業 ID (等級 5 前為 null)
  jobChangedAt: Date | null // 轉職時間
}

// 經驗值獲取事件類型
export type ExpEventType =
  | 'correct_answer'      // 答對練習題 +10
  | 'practice_complete'   // 完成一次練習 +50
  | 'simulation_complete' // 模擬考試完成 +100~500
  | 'stage_complete'      // 完成情境關卡 +200
  | 'grammar_lesson_complete' // 完成文法課程隨堂測驗 +30
  | 'course_lesson_complete'  // 完成結構課程課堂測驗 +80
  | 'course_unit_complete'    // 完成結構課程單元 +200
  | 'course_complete'         // 完成整門結構課程 +1000

// 經驗值獲取事件
export interface ExpEvent {
  type: ExpEventType
  amount: number
  timestamp: Date
  metadata?: {
    accuracy?: number     // 模擬考試正確率
    level?: string        // JLPT 級別
    stageId?: string      // 關卡 ID
    category?: string     // 練習類別
  }
}

// 升級資訊
export interface LevelUpInfo {
  previousLevel: number
  newLevel: number
  expGained: number
  isJobChangeTriggered: boolean  // 是否觸發轉職 (等級達到 5)
  newTitle?: {
    nameJp: string
    nameReading: string
    nameTw: string
  }
}

// 經驗值計算常數
export const EXP_CONSTANTS = {
  BASE_EXP: 100,           // 基礎經驗值
  GROWTH_FACTOR: 0.15,     // 成長係數
  MAX_LEVEL: 99,           // 最高等級
  JOB_CHANGE_LEVEL: 5,     // 轉職等級
} as const

// 經驗值獎勵常數
export const EXP_REWARDS = {
  CORRECT_ANSWER: 10,      // 答對練習題
  PRACTICE_COMPLETE: 50,   // 完成一次練習
  SIMULATION_MIN: 100,     // 模擬考試最低獎勵
  SIMULATION_MAX: 500,     // 模擬考試最高獎勵
  STAGE_COMPLETE: 200,     // 完成情境關卡
  GRAMMAR_LESSON_COMPLETE: 30, // 完成文法課程隨堂測驗
  COURSE_LESSON_COMPLETE: 80,  // 完成結構課程課堂測驗
  COURSE_UNIT_COMPLETE: 200,   // 完成結構課程單元
  COURSE_COMPLETE: 1000,       // 完成整門結構課程
} as const

// 職業階段等級範圍
export const JOB_STAGE_LEVELS = [
  { stage: 1, minLevel: 5, maxLevel: 14 },
  { stage: 2, minLevel: 15, maxLevel: 24 },
  { stage: 3, minLevel: 25, maxLevel: 34 },
  { stage: 4, minLevel: 35, maxLevel: 44 },
  { stage: 5, minLevel: 45, maxLevel: 54 },
  { stage: 6, minLevel: 55, maxLevel: 64 },
  { stage: 7, minLevel: 65, maxLevel: 74 },
  { stage: 8, minLevel: 75, maxLevel: 84 },
  { stage: 9, minLevel: 85, maxLevel: 94 },
  { stage: 10, minLevel: 95, maxLevel: 99 },
] as const

// 初始積分資料
export const DEFAULT_PROGRESSION: UserProgression = {
  level: 0,
  exp: 0,
  totalExp: 0,
  jobId: null,
  jobChangedAt: null,
}
