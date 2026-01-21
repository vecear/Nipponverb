import { doc, updateDoc, arrayUnion } from 'firebase/firestore'
import { db } from '../config/firebase'

export const updateProgress = async (
  uid: string,
  category: 'verbs' | 'kanji' | 'grammar',
  correct: number,
  total: number
): Promise<void> => {
  const userRef = doc(db, 'users', uid)

  const accuracy = Math.round((correct / total) * 100)

  await updateDoc(userRef, {
    [`stats.${category}.accuracy`]: accuracy,
    [`stats.${category}.learned`]: total,
  })
}

export const completeStage = async (
  uid: string,
  stageId: string
): Promise<void> => {
  const userRef = doc(db, 'users', uid)

  await updateDoc(userRef, {
    'stats.stages_cleared': arrayUnion(stageId),
  })
}

export const updateStreak = async (uid: string): Promise<void> => {
  const userRef = doc(db, 'users', uid)
  const now = new Date()

  await updateDoc(userRef, {
    lastActive: now,
  })
}
