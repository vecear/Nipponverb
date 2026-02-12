/**
 * Question Adapters
 *
 * Convert question bank formats (StaticQuestion, DatesPracticeQuestion, UnifiedQuestion)
 * into the runtime Question interface used by Practice.tsx and QuestionCard.
 */

import { Question } from '../types'
import { StaticQuestion, UnifiedQuestion, StructuredExplanation } from '../data/questions/types'
import { DatesPracticeQuestion } from '../data/questions/datesPractice/types'
import { stripStemFurigana } from './furiganaUtils'

// ─── StructuredExplanation → 文字序列化 ───

/**
 * Serialize a StructuredExplanation into the standard 【考點】【解析】 text format.
 * Used as the `correctRule` fallback for components that don't render structured data.
 */
export function formatStructuredExplanation(e: StructuredExplanation): string {
  let text = `【考點】${e.keyPoint}\n【解析】${e.analysis}`
  if (e.comparisons?.length) {
    text += `\n【相關詞比較】\n${e.comparisons.map(c => `・${c}`).join('\n')}`
  }
  if (e.commonMistakes?.length) {
    text += `\n【易錯點】\n${e.commonMistakes.join('\n')}`
  }
  if (e.trapNote) {
    text += `\n【陷阱說明】${e.trapNote}`
  }
  return text
}

// ─── 文字 → StructuredExplanation 解析 ───

/**
 * Parse a correctRule string containing 【考點】【解析】 markers into StructuredExplanation.
 * Falls back to putting the entire string into `analysis` if no markers found.
 */
export function parseCorrectRule(correctRule: string): StructuredExplanation {
  const sectionRegex = /【(考點|解析|相關詞比較|易錯點|易{やさ}錯點|陷阱說明)】/g
  const markers = [...correctRule.matchAll(sectionRegex)]

  if (markers.length === 0) {
    return { keyPoint: '解說', analysis: correctRule }
  }

  const sections: Record<string, string> = {}
  for (let i = 0; i < markers.length; i++) {
    const key = markers[i][1].replace('{やさ}', '') // normalize furigana variant
    const start = markers[i].index! + markers[i][0].length
    const end = i + 1 < markers.length ? markers[i + 1].index! : correctRule.length
    sections[key] = correctRule.slice(start, end).trim()
  }

  const comparisons = sections['相關詞比較']
    ?.split('\n')
    .map(line => line.replace(/^・/, '').trim())
    .filter(Boolean)

  const commonMistakes = sections['易錯點']
    ?.split('\n')
    .map(line => line.trim())
    .filter(Boolean)

  return {
    keyPoint: sections['考點'] || '解說',
    analysis: sections['解析'] || '',
    comparisons: comparisons?.length ? comparisons : undefined,
    commonMistakes: commonMistakes?.length ? commonMistakes : undefined,
    trapNote: sections['陷阱說明'] || undefined,
  }
}

// ─── UnifiedQuestion → runtime Question ───

/**
 * Convert a UnifiedQuestion to the runtime Question format.
 */
export function unifiedToQuestion(q: UnifiedQuestion): Question {
  return {
    id: q.id,
    type: 'multiple-choice',
    stem: stripStemFurigana(q.stem),
    meaning: q.stemZh,
    options: q.options.map(o => o.text),
    correct: q.options[q.correctIndex].text,
    detailedExplanation: {
      correctRule: formatStructuredExplanation(q.explanation),
      distractors: q.options.map(o => ({ text: o.text, reason: o.reason })),
      structured: q.explanation,
    },
    level: q.level,
    source: q.source,
  }
}

// ─── Legacy adapters (kept for existing data files) ───

/**
 * Convert a StaticQuestion (vocab/verbs banks) to the runtime Question format.
 * Now also parses correctRule into structured explanation when markers exist.
 */
export function staticToQuestion(q: StaticQuestion, level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'): Question {
  const structured = q.correctRule ? parseCorrectRule(q.correctRule) : undefined

  return {
    id: q.id,
    type: 'multiple-choice',
    stem: stripStemFurigana(q.prob),
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
      structured,
    },
    level,
  }
}

/**
 * Convert a DatesPracticeQuestion to the runtime Question format.
 * Now maps the rich explanation object into structured explanation.
 */
export function datesToQuestion(q: DatesPracticeQuestion): Question {
  const structured: StructuredExplanation = {
    keyPoint: q.subcategory || q.category,
    analysis: q.explanation.correctRule,
    trapNote: q.explanation.trapExplanation || undefined,
    relatedRules: q.explanation.relatedRules?.length ? q.explanation.relatedRules : undefined,
    furiganaNote: q.explanation.furiganaNote || undefined,
  }

  return {
    id: q.id,
    type: 'multiple-choice',
    stem: stripStemFurigana(q.stem),
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
      structured,
    },
    level: 'N5',
  }
}
