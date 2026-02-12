/**
 * Difficulty Progression Module
 *
 * 根據用戶的歷史表現動態調整出題難度分布
 */

export type DifficultyTier = 'easy' | 'medium' | 'hard'

/**
 * 根據個人統計估算題目難度
 */
export function estimateDifficulty(
  stats: { attempts?: number; correct?: number } | undefined,
): DifficultyTier {
  if (!stats || !stats.attempts || stats.attempts === 0) {
    return 'medium'  // 沒有資料預設中等
  }

  const accuracy = stats.correct! / stats.attempts
  if (accuracy >= 0.8) return 'easy'
  if (accuracy >= 0.5) return 'medium'
  return 'hard'
}

/**
 * 根據用戶整體正確率決定各難度的出題比例
 *
 * - 低表現 (<60%): 多出簡單題，建立信心
 * - 中表現 (60-80%): 平衡分布
 * - 高表現 (>80%): 多出困難題，持續挑戰
 */
export function getDifficultyDistribution(
  overallAccuracy: number
): { easy: number; medium: number; hard: number } {
  if (overallAccuracy < 0.6) {
    return { easy: 0.50, medium: 0.35, hard: 0.15 }
  } else if (overallAccuracy < 0.8) {
    return { easy: 0.25, medium: 0.45, hard: 0.30 }
  } else {
    return { easy: 0.10, medium: 0.35, hard: 0.55 }
  }
}
