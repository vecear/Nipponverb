import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import { UserProfile, UserStats } from '../types'
import { DEFAULT_PROGRESSION } from '../types/progression'

export const createUserProfile = async (
  uid: string,
  data: Partial<UserProfile>
): Promise<void> => {
  const userRef = doc(db, 'users', uid)

  const defaultStats: UserStats = {
    verbs: { accuracy: 0, learned: 0 },
    kanji: { accuracy: 0, learned: 0 },
    grammar: { accuracy: 0, learned: 0 },
    stages_cleared: [],
  }

  const userProfile: UserProfile = {
    uid,
    displayName: data.displayName || 'Student',
    email: data.email || '',
    photoURL: data.photoURL || '',
    currentLevel: data.currentLevel || 'N5',
    stats: data.stats || defaultStats,
    createdAt: new Date(),
    gender: data.gender || 'male',
    progression: data.progression || DEFAULT_PROGRESSION,
  }

  await setDoc(userRef, userProfile)
}

export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
  const userRef = doc(db, 'users', uid)
  const userSnap = await getDoc(userRef)

  if (userSnap.exists()) {
    return userSnap.data() as UserProfile
  }

  return null
}

export const updateUserProfile = async (
  uid: string,
  data: Partial<UserProfile>
): Promise<void> => {
  const userRef = doc(db, 'users', uid)
  await updateDoc(userRef, data)
}

export const updateUserStats = async (
  uid: string,
  stats: Partial<UserStats>
): Promise<void> => {
  const userRef = doc(db, 'users', uid)
  await updateDoc(userRef, { stats })
}
