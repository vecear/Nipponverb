/**
 * 結構化課程系統類型定義
 * Structured Course System Type Definitions
 */

import type { UnifiedQuestion } from '../data/questions/types'

export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1'

// ─── 課程定義（靜態資料）───

/** 課程定義（一個 JLPT 等級 = 一門課程） */
export interface CourseDefinition {
  id: string                   // e.g., 'jlpt_n5'
  level: JLPTLevel
  titleJp: string              // e.g., 'JLPT N5 コース'
  titleZh: string              // e.g., 'JLPT N5 課程'
  description: string          // 中文描述
  units: UnitDefinition[]
  totalVocab: number
  totalGrammar: number
  totalLessons: number
}

/** 單元定義 */
export interface UnitDefinition {
  id: string                   // e.g., 'n5_u1'
  order: number                // 1-based
  titleJp: string
  titleZh: string
  description: string
  lessons: LessonDefinition[]
}

/** 課堂定義 */
export interface LessonDefinition {
  id: string                   // e.g., 'n5_u1_l1'
  unitId: string
  order: number                // 1-based within unit
  titleJp: string
  titleZh: string
  objectives: string[]         // 學習目標（中文）

  // 教學內容
  vocabulary: LessonVocab[]    // 直接嵌入，每課 ~25 個
  grammarIds: string[]         // 引用 grammarList 的 id（如 'n5_wa'）
  grammarSummaries: LessonGrammarSummary[]
  dialogue: DialogueLine[]     // 情境對話

  // 測驗
  quizQuestions: UnifiedQuestion[]  // 最少 10 題
}

/** 課堂單字項目 */
export interface LessonVocab {
  word: string                 // 日文（含漢字）
  reading: string              // 平假名
  meaning: string              // 繁體中文（與 meaning_zh 相同）
  meaning_zh: string           // 繁體中文
  exampleJp?: string           // 例句（日文含振假名）
  exampleZh?: string           // 例句（中文）
}

/** 課堂文法摘要 */
export interface LessonGrammarSummary {
  grammarId: string            // 對應 grammarList 的 id
  pattern: string              // 文法句型
  meaning: string              // 中文意思
  quickExample: string         // 一個日文例句
  quickExampleZh: string       // 中文翻譯
}

/** 對話行 */
export interface DialogueLine {
  speaker: string              // 說話者名稱
  japanese: string             // 日文（含振假名標記 漢字{かんじ}）
  chinese: string              // 繁體中文翻譯
}

// ─── 進度追蹤（動態使用者狀態）───

/** 單堂課進度 */
export interface LessonProgress {
  completedAt?: string         // ISO date
  quizScore: number
  quizTotal: number
  attempts: number
  bestAccuracy: number         // 0-100
}

/** 課程進度 */
export interface CourseProgress {
  courseId: string
  lessonProgress: Record<string, LessonProgress>  // lessonId → progress
  currentLessonId?: string     // 上次學習的課堂
  startedAt: string            // ISO date
  completedAt?: string         // ISO date
}
