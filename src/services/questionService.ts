import {
  collection,
  getDocs,
  query,
  where,
  limit,
  orderBy,
} from 'firebase/firestore'
import { db } from '../config/firebase'
import { Question } from '../types'

export const getQuestionsByCategory = async (
  category: string,
  level: string = 'N5',
  questionLimit: number = 10
): Promise<Question[]> => {
  try {
    const questionsRef = collection(db, 'drills', category, level)
    const q = query(questionsRef, limit(questionLimit))
    const querySnapshot = await getDocs(q)

    const questions: Question[] = []
    querySnapshot.forEach((doc) => {
      questions.push({ id: doc.id, ...doc.data() } as Question)
    })

    return shuffleArray(questions)
  } catch (error) {
    console.error('Error fetching questions:', error)
    return []
  }
}

export const getExamQuestions = async (
  level: string
): Promise<Question[]> => {
  try {
    const examRef = collection(db, 'exams', level, 'questions')
    const querySnapshot = await getDocs(examRef)

    const questions: Question[] = []
    querySnapshot.forEach((doc) => {
      questions.push({ id: doc.id, ...doc.data() } as Question)
    })

    return questions
  } catch (error) {
    console.error('Error fetching exam questions:', error)
    return []
  }
}

export const getStageQuestions = async (
  stageId: string
): Promise<Question[]> => {
  try {
    const stageRef = collection(db, 'stages', stageId, 'questions')
    const querySnapshot = await getDocs(stageRef)

    const questions: Question[] = []
    querySnapshot.forEach((doc) => {
      questions.push({ id: doc.id, ...doc.data() } as Question)
    })

    return questions
  } catch (error) {
    console.error('Error fetching stage questions:', error)
    return []
  }
}

// Utility function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}
