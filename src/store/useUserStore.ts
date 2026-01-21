import { create } from 'zustand'
import { UserProfile, UserStats } from '../types'

interface UserStore {
  profile: UserProfile | null
  setProfile: (profile: UserProfile | null) => void
  updateStats: (stats: Partial<UserStats>) => void
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

  clearProfile: () => set({ profile: null }),
}))
