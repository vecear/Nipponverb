import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import {
  User,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateEmail,
  updatePassword,
  linkWithPopup,
  GoogleAuthProvider,
  EmailAuthProvider,
  reauthenticateWithCredential,
  UserCredential,
} from 'firebase/auth'
import { auth, googleProvider } from '../config/firebase'
import { getUserProfile, createUserProfile } from '../services/userService'
import { useUserStore } from '../store/useUserStore'
import { useGrammarCompletionStore } from '../store/useGrammarCompletionStore'

interface AuthContextType {
  currentUser: User | null
  loading: boolean
  signInWithGoogle: () => Promise<UserCredential>
  signInWithEmail: (email: string, password: string) => Promise<UserCredential>
  signUpWithEmail: (email: string, password: string, displayName: string, gender?: 'male' | 'female') => Promise<UserCredential>
  logout: () => Promise<void>
  updateUserEmail: (email: string) => Promise<void>
  updateUserPassword: (password: string) => Promise<void>
  linkGoogleAccount: () => Promise<void>
  reauthenticate: (password?: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const signInWithGoogle = async () => {
    return await signInWithPopup(auth, googleProvider)
  }

  const signInWithEmail = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password)
  }

  const signUpWithEmail = async (email: string, password: string, displayName: string, gender: 'male' | 'female' = 'male') => {
    const credential = await createUserWithEmailAndPassword(auth, email, password)
    const { user } = credential
    // Initialize profile in Firestore
    await createUserProfile(user.uid, {
      email: user.email || '',
      displayName: displayName || 'Student',
      gender,
    })
    return credential
  }

  const logout = async () => {
    await signOut(auth)
    useUserStore.getState().clearProfile()
    useGrammarCompletionStore.getState().clearLocal()
  }

  const updateUserEmail = async (email: string) => {
    if (auth.currentUser) {
      await updateEmail(auth.currentUser, email)
    }
  }

  const updateUserPassword = async (password: string) => {
    if (auth.currentUser) {
      await updatePassword(auth.currentUser, password)
    }
  }

  const linkGoogleAccount = async () => {
    if (auth.currentUser) {
      const provider = new GoogleAuthProvider()
      await linkWithPopup(auth.currentUser, provider)
    }
  }

  const reauthenticate = async (password?: string) => {
    if (!auth.currentUser) return

    const providerId = auth.currentUser.providerData[0]?.providerId

    if (providerId === 'google.com') {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
    } else if (password) {
      const credential = EmailAuthProvider.credential(auth.currentUser.email!, password)
      await reauthenticateWithCredential(auth.currentUser, credential)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user)
      if (user) {
        try {
          let profile = await getUserProfile(user.uid)
          if (!profile) {
            // Handle edge case where profile might not exist (e.g. legacy user or failed initial creation)
            await createUserProfile(user.uid, {
              email: user.email || '',
              displayName: user.displayName || 'Student',
              photoURL: user.photoURL || '',
            })
            profile = await getUserProfile(user.uid)
          }
          if (profile) {
            useUserStore.getState().setProfile(profile)
          }
          // Sync grammar completions from Firebase
          await useGrammarCompletionStore.getState().syncFromFirebase(user.uid)
        } catch (error) {
          console.error('Error fetching user profile:', error)
        }
      } else {
        useUserStore.getState().clearProfile()
        useGrammarCompletionStore.getState().clearLocal()
      }
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    loading,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    logout,
    updateUserEmail,
    updateUserPassword,
    linkGoogleAccount,
    reauthenticate,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
