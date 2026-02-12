/**
 * Question Adapters
 *
 * Convert static question bank formats (StaticQuestion, DatesPracticeQuestion)
 * into the unified runtime Question interface used by Practice.tsx and QuestionCard.
 */

import { Question } from '../types'
import { StaticQuestion } from '../data/questions/types'
import { DatesPracticeQuestion } from '../data/questions/datesPractice/types'

/**
 * Convert a StaticQuestion (vocab/verbs banks) to the runtime Question format.
 */
export function staticToQuestion(q: StaticQuestion, level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'): Question {
  return {
    id: q.id,
    type: 'multiple-choice',
    stem: q.prob,
    meaning: q.prob_zh,
    options: q.options.map(o => o.text),
    correct: q.options[q.correctIndex].text,
    explanation: q.options
      .map(o => o.reason ? `${o.text}: ${o.reason}` : '')
      .filter(Boolean)
      .join('\n'),
    detailedExplanation: {
      correctRule: q.correctRule || '正解です。',
      distractors: q.options.map(o => ({
        text: o.text,
        reason: o.reason || '正解',
      })),
    },
    level,
  }
}

/**
 * Convert a DatesPracticeQuestion to the runtime Question format.
 */
export function datesToQuestion(q: DatesPracticeQuestion): Question {
  return {
    id: q.id,
    type: 'multiple-choice',
    stem: q.stem,
    meaning: q.stem_zh,
    options: q.options.map(o => o.text),
    correct: q.options[q.correctIndex].text,
    explanation: q.options
      .map(o => o.reason ? `${o.text}: ${o.reason}` : '')
      .filter(Boolean)
      .join('\n'),
    detailedExplanation: {
      correctRule: q.explanation.correctRule,
      distractors: q.options.map(o => ({
        text: o.text,
        reason: o.reason,
      })),
    },
    level: 'N5', // Dates content is beginner-level
  }
}
