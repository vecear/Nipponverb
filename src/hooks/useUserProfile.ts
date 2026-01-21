import { useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useUserStore } from '../store/useUserStore'
import { getUserProfile, createUserProfile } from '../services/userService'

export const useUserProfile = () => {
  const { currentUser } = useAuth()
  const { profile, setProfile } = useUserStore()

  useEffect(() => {
    const loadProfile = async () => {
      if (!currentUser) {
        setProfile(null)
        return
      }

      const userProfile = await getUserProfile(currentUser.uid)

      if (userProfile) {
        setProfile(userProfile)
      } else {
        // Create new profile if it doesn't exist
        await createUserProfile(currentUser.uid, {
          displayName: currentUser.displayName || 'Student',
          email: currentUser.email || '',
          photoURL: currentUser.photoURL || '',
        })

        const newProfile = await getUserProfile(currentUser.uid)
        if (newProfile) {
          setProfile(newProfile)
        }
      }
    }

    loadProfile()
  }, [currentUser, setProfile])

  return profile
}
