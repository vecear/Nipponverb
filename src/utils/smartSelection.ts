/**
 * Smart Question Selection Algorithm v2
 *
 * 結合三大機制：
 * 1. SRS 優先級（逾期複習最優先）
 * 2. 難度分布（依用戶表現自動調整簡單/中等/困難比例）
 * 3. 弱點加強（連續錯誤、低正確率題目加權）
 * 4. 新鮮感（保留 15% 給未作答的新題目）
 */

import { QuestionStatsEntry } from '../store/usePracticeStore'
import { calculatePriority } from './srsEngine'
import { estimateDifficulty, getDifficultyDistribution, DifficultyTier } from './difficultyProgression'

export interface SmartSelectionParams<T> {
  bank: T[]
  getId: (item: T) => string
  count: number
  questionStats: Record<string, QuestionStatsEntry>
  overallAccuracy: number  // 0-1

  // 保留向後相容（舊呼叫方式仍可使用）
  attemptedIds?: Set<string>
  wrongIds?: string[]
}

export function selectQuestionsSmartly<T>(params: SmartSelectionParams<T>): T[] {
  const { bank, getId, count, questionStats, overallAccuracy } = params

  if (bank.length <= count) {
    return [...bank].sort(() => Math.random() - 0.5)
  }

  const now = new Date()

  // 為每個題目計算優先級和難度
  const scored = bank.map(item => {
    const id = getId(item)
    const stats = questionStats[id]
    const priority = calculatePriority(stats, now)
    const difficulty = estimateDifficulty(stats)
    return { item, id, priority, difficulty, stats }
  })

  // 計算目標難度分布
  const distribution = getDifficultyDistribution(overallAccuracy)

  // 新題目名額 (15%，至少 2 題)
  const noveltySlots = Math.max(2, Math.round(count * 0.15))

  // 按難度分組
  const byDifficulty: Record<DifficultyTier, typeof scored> = {
    easy: scored.filter(s => s.difficulty === 'easy'),
    medium: scored.filter(s => s.difficulty === 'medium'),
    hard: scored.filter(s => s.difficulty === 'hard'),
  }

  // 每組按優先級排序（高優先在前）
  for (const tier of Object.values(byDifficulty)) {
    tier.sort((a, b) => b.priority - a.priority)
  }

  const selected = new Set<string>()
  const result: T[] = []

  // 第一階段：選取未作答的新題目（保持新鮮感）
  const unattempted = scored
    .filter(s => !s.stats || s.stats.attempts === 0)
    .sort(() => Math.random() - 0.5)
  for (const entry of unattempted.slice(0, noveltySlots)) {
    if (result.length >= count) break
    selected.add(entry.id)
    result.push(entry.item)
  }

  // 第二階段：按難度分布從各等級中選取（高優先級優先）
  const remaining = count - result.length
  const easySlots = Math.round(remaining * distribution.easy)
  const mediumSlots = Math.round(remaining * distribution.medium)
  const hardSlots = remaining - easySlots - mediumSlots

  const pickFromTier = (tier: typeof scored, limit: number) => {
    let picked = 0
    for (const entry of tier) {
      if (picked >= limit || result.length >= count) break
      if (selected.has(entry.id)) continue
      selected.add(entry.id)
      result.push(entry.item)
      picked++
    }
  }

  // 困難題優先填入，確保弱點不被跳過
  pickFromTier(byDifficulty.hard, hardSlots)
  pickFromTier(byDifficulty.medium, mediumSlots)
  pickFromTier(byDifficulty.easy, easySlots)

  // 第三階段：如果仍不足，從最高優先級剩餘題目補齊
  if (result.length < count) {
    const leftover = scored
      .filter(s => !selected.has(s.id))
      .sort((a, b) => b.priority - a.priority)
    for (const entry of leftover) {
      if (result.length >= count) break
      selected.add(entry.id)
      result.push(entry.item)
    }
  }

  // 最終打亂順序
  return result.sort(() => Math.random() - 0.5)
}
