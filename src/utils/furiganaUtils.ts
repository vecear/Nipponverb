/**
 * Furigana utilities for stem/explanation text processing.
 */

const FURIGANA_RE = /([\u4e00-\u9fff\u3400-\u4dbf\u3005\u3007]+)\{([^{}]+)\}/g

/**
 * Strip furigana annotations from question stems (JLPT-style: no readings shown).
 *
 * - 漢字{かんじ}  → 漢字   (stripped)
 * - 漢字{!かんじ} → 漢字{かんじ} (forced: kept, ! prefix removed)
 *
 * Use {!reading} in data files for special words that must show furigana in stems.
 */
export function stripStemFurigana(text: string): string {
  return text.replace(FURIGANA_RE, (_match, kanji: string, reading: string) => {
    if (reading.startsWith('!')) {
      return `${kanji}{${reading.slice(1)}}`
    }
    return kanji
  })
}
