import { create } from 'zustand'
import { UserProfile, UserStats } from '../types'

interface UserStore {
  profile: UserProfile | null
  setProfile: (profile: UserProfile | null) => void
  updateStats: (stats: Partial<UserStats>) => void
  updateProfile: (data: Partial<UserProfile>) => void
  clearProfile: () => void
}

export const useUserStore = create<UserStore>((set) => ({
  profile: null,

  setProfile: (profile) => set({ profile }),

  updateStats: (stats) =>
    set((state) => ({
      profile: state.profile
        ? {
          ...state.profile,
          stats: { ...state.profile.stats, ...stats },
        }
        : null,
    })),

  updateProfile: (data) =>
    set((state) => ({
      profile: state.profile ? { ...state.profile, ...data } : null,
    })),

  clearProfile: () => set({ profile: null }),
}))
