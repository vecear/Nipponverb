/**
 * Achievement System - 成就/徽章系統
 */

import { AnswerRecord, PracticeHistoryEntry, QuestionStats } from '../store/usePracticeStore'

export interface Achievement {
  id: string
  titleZh: string
  descriptionZh: string
  icon: string
  condition: (context: AchievementContext) => boolean
  tier: 'bronze' | 'silver' | 'gold'
}

export interface AchievementContext {
  // 本次練習
  sessionScore: number
  sessionTotal: number
  sessionAccuracy: number
  sessionDurationMs: number
  answerRecords: AnswerRecord[]

  // 歷史資料
  totalPracticeSessions: number
  categoryHistory: PracticeHistoryEntry[]
  allHistory: PracticeHistoryEntry[]
  questionStats: QuestionStats

  // 類別資訊
  category: string
  level: string
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'perfect_session',
    titleZh: '完美練習',
    descriptionZh: '一次練習中全部答對（至少 10 題）',
    icon: '🌟',
    tier: 'gold',
    condition: (ctx) => ctx.sessionAccuracy === 100 && ctx.sessionTotal >= 10,
  },
  {
    id: 'streak_10',
    titleZh: '十連正解',
    descriptionZh: '單次練習中連續答對 10 題',
    icon: '🔥',
    tier: 'silver',
    condition: (ctx) => {
      let maxStreak = 0, streak = 0
      for (const r of ctx.answerRecords) {
        streak = r.isCorrect ? streak + 1 : 0
        maxStreak = Math.max(maxStreak, streak)
      }
      return maxStreak >= 10
    },
  },
  {
    id: 'speed_demon',
    titleZh: '閃電作答',
    descriptionZh: '平均每題回答時間少於 5 秒',
    icon: '⚡',
    tier: 'silver',
    condition: (ctx) => {
      const times = ctx.answerRecords
        .filter(r => r.responseTimeMs)
        .map(r => r.responseTimeMs!)
      if (times.length === 0) return false
      return (times.reduce((a, b) => a + b, 0) / times.length) < 5000
    },
  },
  {
    id: 'first_practice',
    titleZh: '初次練習',
    descriptionZh: '完成第一次練習',
    icon: '🎯',
    tier: 'bronze',
    condition: (ctx) => ctx.totalPracticeSessions <= 1,
  },
  {
    id: 'practice_10',
    titleZh: '勤學不倦',
    descriptionZh: '累計完成 10 次練習',
    icon: '📚',
    tier: 'bronze',
    condition: (ctx) => ctx.totalPracticeSessions >= 10,
  },
  {
    id: 'practice_50',
    titleZh: '學霸之路',
    descriptionZh: '累計完成 50 次練習',
    icon: '🏆',
    tier: 'gold',
    condition: (ctx) => ctx.totalPracticeSessions >= 50,
  },
  {
    id: 'comeback',
    titleZh: '逆轉勝',
    descriptionZh: '本次正確率比上次提高 20% 以上',
    icon: '📈',
    tier: 'silver',
    condition: (ctx) => {
      if (ctx.categoryHistory.length < 2) return false
      const prev = ctx.categoryHistory[1]  // 第二筆是上次（index 0 是本次）
      return ctx.sessionAccuracy - prev.accuracy >= 20
    },
  },
  {
    id: 'master_category',
    titleZh: '分類精通',
    descriptionZh: '某類別正確率達到 95% 以上（至少 50 題）',
    icon: '👑',
    tier: 'gold',
    condition: (ctx) => {
      const catRecords = ctx.categoryHistory
      const total = catRecords.reduce((s, h) => s + h.total, 0)
      const correct = catRecords.reduce((s, h) => s + h.score, 0)
      return total >= 50 && (correct / total) >= 0.95
    },
  },
  {
    id: 'night_owl',
    titleZh: '夜貓子',
    descriptionZh: '在深夜 (00:00-05:00) 完成練習',
    icon: '🦉',
    tier: 'bronze',
    condition: () => {
      const hour = new Date().getHours()
      return hour >= 0 && hour < 5
    },
  },
  {
    id: 'early_bird',
    titleZh: '早起鳥兒',
    descriptionZh: '在清晨 (05:00-07:00) 完成練習',
    icon: '🐦',
    tier: 'bronze',
    condition: () => {
      const hour = new Date().getHours()
      return hour >= 5 && hour < 7
    },
  },
]

/**
 * 評估本次練習獲得了哪些新成就
 */
export function evaluateAchievements(
  context: AchievementContext,
  previouslyEarned: string[]
): Achievement[] {
  const earnedSet = new Set(previouslyEarned)
  return ACHIEVEMENTS.filter(
    a => !earnedSet.has(a.id) && a.condition(context)
  )
}
