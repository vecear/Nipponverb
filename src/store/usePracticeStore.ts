import { create } from 'zustand'
import { Question } from '../types'

interface PracticeStore {
  currentQuestion: Question | null
  questions: Question[]
  currentIndex: number
  score: number
  totalAttempts: number

  setQuestions: (questions: Question[]) => void
  nextQuestion: () => void
  checkAnswer: (answer: string) => boolean
  resetPractice: () => void
}

export const usePracticeStore = create<PracticeStore>((set, get) => ({
  currentQuestion: null,
  questions: [],
  currentIndex: 0,
  score: 0,
  totalAttempts: 0,

  setQuestions: (questions) =>
    set({
      questions,
      currentQuestion: questions[0] || null,
      currentIndex: 0,
      score: 0,
      totalAttempts: 0,
    }),

  nextQuestion: () =>
    set((state) => {
      const nextIndex = state.currentIndex + 1
      return {
        currentIndex: nextIndex,
        currentQuestion: state.questions[nextIndex] || null,
      }
    }),

  checkAnswer: (answer: string) => {
    const { currentQuestion } = get()
    if (!currentQuestion) return false

    const isCorrect = answer === currentQuestion.correct

    set((state) => ({
      score: isCorrect ? state.score + 1 : state.score,
      totalAttempts: state.totalAttempts + 1,
    }))

    return isCorrect
  },

  resetPractice: () =>
    set({
      currentQuestion: null,
      questions: [],
      currentIndex: 0,
      score: 0,
      totalAttempts: 0,
    }),
}))
