export interface UserStats {
  verbs: {
    accuracy: number
    learned: number
  }
  kanji: {
    accuracy: number
    learned: number
  }
  grammar: {
    accuracy: number
    learned: number
  }
  stages_cleared: string[]
  // 學習時間追蹤 (分鐘)
  totalStudyTime?: number
  // 連續天數追蹤
  streak?: {
    current: number       // 當前連續天數
    lastStudyDate: string // 最後學習日期 (YYYY-MM-DD)
  }
}

export interface UserProfile {
  uid: string
  displayName: string
  email: string
  photoURL: string
  currentLevel: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'
  stats: UserStats
  createdAt: Date
  // 積分系統欄位
  gender?: 'male' | 'female'
  progression?: {
    level: number           // 當前等級 (0-99)
    exp: number             // 當前經驗值
    totalExp: number        // 累計總經驗值
    jobId: string | null    // 職業 ID (等級 5 前為 null)
    jobChangedAt: Date | null // 轉職時間
  }
}

export interface DistractorExplanation {
  text: string
  reason: string
}

export type { StructuredExplanation } from '../data/questions/types'

export interface DetailedExplanation {
  correctRule: string
  distractors: DistractorExplanation[]
  structured?: import('../data/questions/types').StructuredExplanation
}


export interface MatchingPair {
  char: string
  romaji: string
  row?: string
}

export interface Question {
  id: string
  type?: 'multiple-choice' | 'matching'
  stem?: string
  correct?: string
  options?: string[]
  pairs?: MatchingPair[]
  instruction?: string
  explanation?: string
  detailedExplanation?: DetailedExplanation
  source?: string
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'
  meaning?: string // Chinese translation of the stem
}

export interface DrillCategory {
  id: string
  name: string
  description: string
  icon: string
  color: string
}

export interface Stage {
  id: string
  title: string
  description: string
  dialogue: {
    speaker: string
    text: string
  }[]
  questions: Question[]
  locked: boolean
}

export interface ExamSection {
  type: 'vocab' | 'grammar' | 'reading' | 'listening'
  questions: Question[]
}

export interface Exam {
  id: string
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'
  sections: ExamSection[]
  timeLimit: number
}
