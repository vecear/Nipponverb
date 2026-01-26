import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../config/firebase'

// 單個文法課程的完成記錄
export interface GrammarCompletionRecord {
  grammarId: string
  completedAt: Date
  answers: Record<string, number> // quizId -> selectedAnswerIndex
}

interface GrammarCompletionState {
  // 本地快取 (grammarId -> completion record)
  completions: Record<string, GrammarCompletionRecord>
  // 是否已從 Firebase 同步
  synced: boolean

  // 動作
  markCompleted: (grammarId: string, answers: Record<string, number>) => void
  isCompleted: (grammarId: string) => boolean
  getCompletionRecord: (grammarId: string) => GrammarCompletionRecord | null
  syncFromFirebase: (uid: string) => Promise<void>
  syncToFirebase: (uid: string) => Promise<void>
  clearLocal: () => void
}

export const useGrammarCompletionStore = create<GrammarCompletionState>()(
  persist(
    (set, get) => ({
      completions: {},
      synced: false,

      markCompleted: (grammarId: string, answers: Record<string, number>) => {
        set((state) => ({
          completions: {
            ...state.completions,
            [grammarId]: {
              grammarId,
              completedAt: new Date(),
              answers,
            },
          },
        }))
      },

      isCompleted: (grammarId: string) => {
        return !!get().completions[grammarId]
      },

      getCompletionRecord: (grammarId: string) => {
        return get().completions[grammarId] || null
      },

      syncFromFirebase: async (uid: string) => {
        try {
          const docRef = doc(db, 'users', uid)
          const docSnap = await getDoc(docRef)

          if (docSnap.exists()) {
            const data = docSnap.data()
            if (data.grammarCompletions) {
              // 將 Firebase 資料轉換成本地格式
              const completions: Record<string, GrammarCompletionRecord> = {}
              for (const [grammarId, record] of Object.entries(data.grammarCompletions)) {
                const r = record as { completedAt: { toDate: () => Date }, answers: Record<string, number> }
                completions[grammarId] = {
                  grammarId,
                  completedAt: r.completedAt?.toDate?.() || new Date(),
                  answers: r.answers || {},
                }
              }
              set({ completions, synced: true })
            }
          }
        } catch (error) {
          console.error('Failed to sync grammar completions from Firebase:', error)
        }
      },

      syncToFirebase: async (uid: string) => {
        try {
          const { completions } = get()
          const docRef = doc(db, 'users', uid)

          // 轉換為 Firebase 格式
          const firebaseData: Record<string, { completedAt: Date; answers: Record<string, number> }> = {}
          for (const [grammarId, record] of Object.entries(completions)) {
            firebaseData[grammarId] = {
              completedAt: record.completedAt,
              answers: record.answers,
            }
          }

          await setDoc(docRef, { grammarCompletions: firebaseData }, { merge: true })
        } catch (error) {
          console.error('Failed to sync grammar completions to Firebase:', error)
        }
      },

      clearLocal: () => {
        set({ completions: {}, synced: false })
      },
    }),
    {
      name: 'nipponverb_grammar_completions',
      partialize: (state) => ({ completions: state.completions }),
    }
  )
)
