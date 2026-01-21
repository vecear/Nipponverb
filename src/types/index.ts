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
}

export interface UserProfile {
  uid: string
  displayName: string
  email: string
  photoURL: string
  currentLevel: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'
  stats: UserStats
  createdAt: Date
}

export interface Question {
  id: string
  stem: string
  correct: string
  options: string[]
  explanation: string
  source?: string
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'
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
