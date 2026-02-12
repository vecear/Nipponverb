/**
 * Question Bank Registry
 *
 * Centralizes access to static question banks by category and level,
 * eliminating the repetitive if/else chains in Practice.tsx.
 */

import { StaticQuestion } from '../data/questions/types'

// Verb banks
import { n5Questions } from '../data/questions/n5'
import { n4Questions } from '../data/questions/n4'
import { n3Questions } from '../data/questions/n3'
import { n2Questions } from '../data/questions/n2'
import { n1Questions } from '../data/questions/n1'

// Vocabulary banks
import { vocabN5, vocabN4, vocabN3, vocabN2, vocabN1 } from '../data/questions/vocab'

type Level = 'N5' | 'N4' | 'N3' | 'N2' | 'N1'

const verbBanks: Record<Level, StaticQuestion[]> = {
  N5: n5Questions,
  N4: n4Questions,
  N3: n3Questions,
  N2: n2Questions,
  N1: n1Questions,
}

const vocabBanks: Record<Level, StaticQuestion[]> = {
  N5: vocabN5,
  N4: vocabN4,
  N3: vocabN3,
  N2: vocabN2,
  N1: vocabN1,
}

/**
 * Get the static question bank for a given category and level.
 * Returns null for categories without static banks (gojuon, grammar, kanji).
 */
export function getStaticBank(
  category: string,
  level: Level
): StaticQuestion[] | null {
  if (category === 'verbs') return verbBanks[level]
  if (category === 'vocabulary') return vocabBanks[level]
  return null
}

/**
 * Get the total question count for a static bank category+level.
 * Returns null for categories that don't have static banks.
 */
export function getStaticBankCount(
  category: string,
  level: Level
): number | null {
  const bank = getStaticBank(category, level)
  return bank ? bank.length : null
}
