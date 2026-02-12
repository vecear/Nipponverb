/**
 * SRS Engine - Modified SM-2 (Anki-inspired)
 *
 * 間隔重複引擎：根據作答結果自動調整複習間隔
 * - interval: 複習間隔天數
 * - easeFactor: 間隔成長倍率 (最小 1.3)
 * - phase: new → learning → review；答錯時 review → relearning → review
 */

export interface SRSState {
  interval: number       // 天數
  easeFactor: number     // 倍率 (最小 1.3)
  phase: 'new' | 'learning' | 'review' | 'relearning'
  dueDate: string        // ISO 日期字串
}

export const DEFAULT_SRS: SRSState = {
  interval: 1,
  easeFactor: 2.5,
  phase: 'new',
  dueDate: new Date().toISOString(),
}

/**
 * 根據作答結果評分 (SM-2 品質分 0-5)
 *
 * 5 = 快速且連續正確；4 = 正確，速度正常；3 = 正確但偏慢
 * 1 = 答錯
 */
export function rateAnswer(
  isCorrect: boolean,
  responseTimeMs: number | undefined,
  avgResponseTimeMs: number | undefined,
  consecutiveCorrect: number,
): number {
  if (!isCorrect) return 1

  if (!responseTimeMs) return 4  // 沒有時間資料，給予正常分

  const avgTime = avgResponseTimeMs ?? 15000
  const ratio = responseTimeMs / avgTime

  if (ratio < 0.6 && consecutiveCorrect >= 2) return 5  // 快速 + 連續正確
  if (ratio < 1.0) return 4  // 比平均快
  if (ratio < 1.5) return 3  // 正常偏慢
  return 3  // 慢但正確
}

/**
 * 根據評分更新 SRS 狀態
 */
export function updateSRS(
  current: SRSState,
  quality: number,  // 0-5
  now: Date = new Date()
): SRSState {
  const { interval, easeFactor, phase } = current

  if (quality >= 3) {
    // 答對：增加間隔
    let newInterval: number
    if (phase === 'new' || phase === 'relearning') {
      newInterval = 1  // 首次正確：1 天
    } else if (interval <= 1) {
      newInterval = 3  // 第二次正確：3 天
    } else {
      newInterval = Math.round(interval * easeFactor)
    }

    // 間隔上限 365 天
    newInterval = Math.min(newInterval, 365)

    // SM-2 公式更新 easeFactor
    const newEase = Math.max(
      1.3,
      easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
    )

    const dueDate = new Date(now)
    dueDate.setDate(dueDate.getDate() + newInterval)

    return {
      interval: newInterval,
      easeFactor: newEase,
      phase: 'review',
      dueDate: dueDate.toISOString(),
    }
  } else {
    // 答錯：重設間隔
    return {
      interval: 1,
      easeFactor: Math.max(1.3, easeFactor - 0.2),
      phase: 'relearning',
      dueDate: now.toISOString(),  // 立即到期
    }
  }
}

/**
 * 計算題目的優先級分數（越高越應該優先出現）
 */
export function calculatePriority(
  stats: {
    srsPhase?: string
    srsDueDate?: string
    srsInterval?: number
    consecutiveErrors?: number
    attempts?: number
    correct?: number
  } | undefined,
  now: Date = new Date()
): number {
  if (!stats || !stats.srsDueDate) {
    // 新題目 / 從未作答：高優先
    return 100
  }

  const dueDate = new Date(stats.srsDueDate)
  const daysOverdue = (now.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24)

  let priority = 0

  // 逾期題目最高優先
  if (daysOverdue > 0) {
    priority += 50 + Math.min(daysOverdue * 10, 50)  // 50-100
  } else {
    // 未到期：優先級遞減
    priority += Math.max(0, 20 - Math.abs(daysOverdue) * 5)  // 0-20
  }

  // Phase 加成
  if (stats.srsPhase === 'relearning') priority += 30
  if (stats.srsPhase === 'learning') priority += 20
  if (stats.srsPhase === 'new') priority += 15

  // 連續答錯加成
  const errors = stats.consecutiveErrors ?? 0
  priority += errors * 15

  // 低正確率加成
  if (stats.attempts && stats.attempts > 0) {
    const accuracy = (stats.correct ?? 0) / stats.attempts
    if (accuracy < 0.5) priority += 25
    else if (accuracy < 0.7) priority += 10
  }

  return priority
}
