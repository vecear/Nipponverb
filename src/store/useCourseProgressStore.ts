import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import type { CourseProgress, LessonProgress, CourseDefinition } from '../types/course'

interface CourseProgressState {
  courses: Record<string, CourseProgress>
  synced: boolean

  // 核心方法
  initCourse: (course: CourseDefinition) => void
  markLessonCompleted: (courseId: string, lessonId: string, score: number, total: number) => void
  getLessonProgress: (courseId: string, lessonId: string) => LessonProgress | null
  isLessonAvailable: (course: CourseDefinition, lessonId: string) => boolean
  getCourseCompletionPercent: (course: CourseDefinition) => number
  getCurrentLesson: (courseId: string) => string | null

  // Firebase
  syncFromFirebase: (uid: string) => Promise<void>
  syncToFirebase: (uid: string) => Promise<void>
  clearLocal: () => void
}

export const useCourseProgressStore = create<CourseProgressState>()(
  persist(
    (set, get) => ({
      courses: {},
      synced: false,

      initCourse: (course: CourseDefinition) => {
        const { courses } = get()
        if (courses[course.id]) return // 已初始化

        const lessonProgress: Record<string, LessonProgress> = {}
        for (const unit of course.units) {
          for (const lesson of unit.lessons) {
            lessonProgress[lesson.id] = {
              quizScore: 0,
              quizTotal: 0,
              attempts: 0,
              bestAccuracy: 0,
            }
          }
        }

        // 找出第一堂課作為當前課堂
        const firstLesson = course.units[0]?.lessons[0]

        set((state) => ({
          courses: {
            ...state.courses,
            [course.id]: {
              courseId: course.id,
              lessonProgress,
              currentLessonId: firstLesson?.id,
              startedAt: new Date().toISOString(),
            },
          },
        }))
      },

      markLessonCompleted: (courseId: string, lessonId: string, score: number, total: number) => {
        set((state) => {
          const courseProgress = state.courses[courseId]
          if (!courseProgress) return state

          const existing = courseProgress.lessonProgress[lessonId]
          const accuracy = total > 0 ? Math.round((score / total) * 100) : 0

          return {
            courses: {
              ...state.courses,
              [courseId]: {
                ...courseProgress,
                lessonProgress: {
                  ...courseProgress.lessonProgress,
                  [lessonId]: {
                    completedAt: new Date().toISOString(),
                    quizScore: score,
                    quizTotal: total,
                    attempts: (existing?.attempts ?? 0) + 1,
                    bestAccuracy: Math.max(existing?.bestAccuracy ?? 0, accuracy),
                  },
                },
              },
            },
          }
        })
      },

      getLessonProgress: (courseId: string, lessonId: string) => {
        const courseProgress = get().courses[courseId]
        if (!courseProgress) return null
        return courseProgress.lessonProgress[lessonId] || null
      },

      isLessonAvailable: (course: CourseDefinition, lessonId: string) => {
        const courseProgress = get().courses[course.id]

        // 找到目標課堂在課程結構中的位置
        for (const unit of course.units) {
          for (let i = 0; i < unit.lessons.length; i++) {
            if (unit.lessons[i].id !== lessonId) continue

            // 第一個單元的第一堂課永遠可用
            if (unit.order === 1 && i === 0) return true

            if (!courseProgress) return false

            // 單元內：前一堂完成即可
            if (i > 0) {
              const prevLesson = unit.lessons[i - 1]
              return !!courseProgress.lessonProgress[prevLesson.id]?.completedAt
            }

            // 單元第一堂課：前一單元最後一堂完成即可
            const prevUnitIdx = course.units.findIndex(u => u.id === unit.id) - 1
            if (prevUnitIdx >= 0) {
              const prevUnit = course.units[prevUnitIdx]
              const lastLesson = prevUnit.lessons[prevUnit.lessons.length - 1]
              return !!courseProgress.lessonProgress[lastLesson.id]?.completedAt
            }

            return true
          }
        }

        return false
      },

      getCourseCompletionPercent: (course: CourseDefinition) => {
        const courseProgress = get().courses[course.id]
        if (!courseProgress) return 0

        let completed = 0
        let total = 0
        for (const unit of course.units) {
          for (const lesson of unit.lessons) {
            total++
            if (courseProgress.lessonProgress[lesson.id]?.completedAt) {
              completed++
            }
          }
        }

        return total > 0 ? Math.round((completed / total) * 100) : 0
      },

      getCurrentLesson: (courseId: string) => {
        return get().courses[courseId]?.currentLessonId || null
      },

      syncFromFirebase: async (uid: string) => {
        try {
          const docRef = doc(db, 'users', uid)
          const docSnap = await getDoc(docRef)

          if (docSnap.exists()) {
            const data = docSnap.data()
            if (data.courseProgress) {
              set({ courses: data.courseProgress as Record<string, CourseProgress>, synced: true })
            }
          }
        } catch (error) {
          console.error('Failed to sync course progress from Firebase:', error)
        }
      },

      syncToFirebase: async (uid: string) => {
        try {
          const { courses } = get()
          const docRef = doc(db, 'users', uid)
          await setDoc(docRef, { courseProgress: courses }, { merge: true })
        } catch (error) {
          console.error('Failed to sync course progress to Firebase:', error)
        }
      },

      clearLocal: () => {
        set({ courses: {}, synced: false })
      },
    }),
    {
      name: 'nipponverb_course_progress',
      partialize: (state) => ({ courses: state.courses }),
    }
  )
)
