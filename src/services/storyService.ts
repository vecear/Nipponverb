/**
 * 角色故事服務
 * Character Story Service
 * 管理角色故事的讀取和儲存
 */

import { doc, getDoc, setDoc, collection, getDocs } from 'firebase/firestore'
import { db, auth } from '../config/firebase'
import {
  NOVICE_STORIES,
  JOB_STORIES,
  CharacterStories,
  StageStory
} from '../data/characterStories'

/**
 * 等待 Firebase Auth 準備好
 */
const waitForAuth = (): Promise<void> => {
  return new Promise((resolve) => {
    if (auth.currentUser) {
      resolve()
      return
    }
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe()
      resolve()
    })
  })
}

// 故事資料結構
export interface StoryData {
  jobId: string  // 'novice' 或職業 ID
  gender: 'male' | 'female'
  stories: StageStory[]
  updatedAt: Date
  updatedBy: string
}

// 快取
let storiesCache: Map<string, StageStory[]> | null = null
let lastFetchTime: number = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 分鐘快取

/**
 * 取得快取鍵值
 */
const getCacheKey = (jobId: string, gender: 'male' | 'female'): string => {
  return `${jobId}_${gender}`
}

/**
 * 從 Firebase 載入所有故事
 */
export const loadAllStoriesFromFirebase = async (): Promise<Map<string, StageStory[]>> => {
  const now = Date.now()

  // 檢查快取
  if (storiesCache && (now - lastFetchTime) < CACHE_DURATION) {
    return storiesCache
  }

  const newCache = new Map<string, StageStory[]>()

  try {
    // 等待 Auth 準備好
    await waitForAuth()

    const storiesRef = collection(db, 'characterStories')
    const snapshot = await getDocs(storiesRef)

    snapshot.forEach((doc) => {
      const data = doc.data() as StoryData
      const key = getCacheKey(data.jobId, data.gender)
      newCache.set(key, data.stories)
    })

    storiesCache = newCache
    lastFetchTime = now
  } catch (error) {
    console.error('Error loading stories from Firebase:', error)
    // 發生錯誤時使用預設故事
  }

  return newCache
}

/**
 * 取得特定職業和性別的故事
 * 優先從 Firebase 讀取，如果沒有則使用預設值
 */
export const getStories = async (
  jobId: string,
  gender: 'male' | 'female'
): Promise<StageStory[]> => {
  // 嘗試從 Firebase 載入
  const cache = await loadAllStoriesFromFirebase()
  const key = getCacheKey(jobId, gender)

  if (cache.has(key)) {
    return cache.get(key)!
  }

  // 使用預設故事
  if (jobId === 'novice') {
    return NOVICE_STORIES[gender]
  }

  const jobStories = JOB_STORIES[jobId]
  if (jobStories) {
    return jobStories[gender]
  }

  return []
}

/**
 * 儲存故事到 Firebase
 */
export const saveStories = async (
  jobId: string,
  gender: 'male' | 'female',
  stories: StageStory[],
  updatedBy: string
): Promise<void> => {
  // 等待 Auth 準備好
  await waitForAuth()

  const docId = getCacheKey(jobId, gender)
  const storyRef = doc(db, 'characterStories', docId)

  const storyData: StoryData = {
    jobId,
    gender,
    stories,
    updatedAt: new Date(),
    updatedBy,
  }

  await setDoc(storyRef, storyData)

  // 更新快取
  if (storiesCache) {
    storiesCache.set(docId, stories)
  }
}

/**
 * 取得單一故事（同步版本，用於即時顯示）
 * 如果快取中沒有，返回預設故事
 */
export const getStoriesSync = (
  jobId: string,
  gender: 'male' | 'female'
): StageStory[] => {
  const key = getCacheKey(jobId, gender)

  if (storiesCache && storiesCache.has(key)) {
    return storiesCache.get(key)!
  }

  // 使用預設故事
  if (jobId === 'novice') {
    return NOVICE_STORIES[gender]
  }

  const jobStories = JOB_STORIES[jobId]
  if (jobStories) {
    return jobStories[gender]
  }

  return []
}

/**
 * 重置快取
 */
export const resetStoriesCache = (): void => {
  storiesCache = null
  lastFetchTime = 0
}

/**
 * 取得所有預設故事（用於初始化）
 */
export const getAllDefaultStories = (): { jobId: string; gender: 'male' | 'female'; stories: StageStory[] }[] => {
  const result: { jobId: string; gender: 'male' | 'female'; stories: StageStory[] }[] = []

  // 初心者故事
  result.push({ jobId: 'novice', gender: 'male', stories: NOVICE_STORIES.male })
  result.push({ jobId: 'novice', gender: 'female', stories: NOVICE_STORIES.female })

  // 職業故事
  for (const [jobId, stories] of Object.entries(JOB_STORIES)) {
    result.push({ jobId, gender: 'male', stories: stories.male })
    result.push({ jobId, gender: 'female', stories: stories.female })
  }

  return result
}

/**
 * 初始化 Firebase 故事資料（將預設故事寫入 Firebase）
 */
export const initializeStoriesInFirebase = async (updatedBy: string): Promise<void> => {
  const allStories = getAllDefaultStories()

  for (const { jobId, gender, stories } of allStories) {
    await saveStories(jobId, gender, stories, updatedBy)
  }

  // 重置快取以重新載入
  resetStoriesCache()
}

/**
 * 檢查 Firebase 中是否已有故事資料
 */
export const hasStoriesInFirebase = async (): Promise<boolean> => {
  try {
    // 等待 Auth 準備好
    await waitForAuth()

    const storiesRef = collection(db, 'characterStories')
    const snapshot = await getDocs(storiesRef)
    return !snapshot.empty
  } catch (error) {
    console.error('Error checking stories in Firebase:', error)
    return false
  }
}
