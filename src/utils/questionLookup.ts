/**
 * Question Lookup Utility
 *
 * Builds a Map<questionId, Question> from question banks,
 * used to reconstruct detailedExplanation for compact history entries.
 */

import { Question } from '../types'
import { getStaticBank } from './questionBanks'
import { staticToQuestion, datesToQuestion } from './questionAdapters'
import { getGrammarQuestionBank } from '../data/grammar'
import { getKanjiQuestionBank } from '../data/kanji'
import { getGojuonQuestionBank } from '../data/gojuon'
import { getQuestionsBySubcategory } from '../data/questions/datesPractice'

type Level = 'N5' | 'N4' | 'N3' | 'N2' | 'N1'

/**
 * Build a lookup map of questionId → full Question (with detailedExplanation)
 * for a given category and level.
 */
export function buildQuestionLookup(category: string, level: string): Map<string, Question> {
  const map = new Map<string, Question>()

  let questions: Question[] = []

  if (category === 'verbs' || category === 'vocabulary') {
    const bank = getStaticBank(category, level as Level)
    if (bank) {
      questions = bank.map(q => staticToQuestion(q, level as Level))
    }
  } else if (category === 'grammar') {
    questions = getGrammarQuestionBank(level as Level) as Question[]
  } else if (category === 'kanji') {
    questions = getKanjiQuestionBank(level as Level) as Question[]
  } else if (category === 'gojuon') {
    questions = getGojuonQuestionBank(level as 'hiragana' | 'katakana') as Question[]
  } else if (category === 'dates') {
    // level format: "numbers_basic", "timeDate_months", etc.
    const parts = level.split('_')
    if (parts.length >= 2) {
      const [cat, ...subParts] = parts
      const sub = subParts.join('_')
      const datesBank = getQuestionsBySubcategory(cat, sub)
      questions = datesBank.map(q => datesToQuestion(q))
    }
  }

  for (const q of questions) {
    map.set(q.id, q)
  }

  return map
}
