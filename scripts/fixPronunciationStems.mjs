/**
 * Fix dates pronunciation question stems from Chinese to Japanese.
 *
 * Before: stem: '「一」的正確讀音是？'
 * After:  stem: '「一」の正{ただ}しい読{よ}み方{かた}はどれですか。'
 *
 * stem_zh keeps the Chinese version.
 *
 * Usage: node scripts/fixPronunciationStems.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

// Context translations: Chinese → Japanese
const CONTEXT_MAP = {
  '日期': '日付{ひづけ}',
  '萬能量詞系統': '万能{ばんのう}の数{かぞ}え方{かた}',
  '幾點': '何時{なんじ}',
  '幾號/幾天': '何日{なんにち}',
  '詢問人數': '人数{にんずう}を聞{き}く',
  '1點鐘': '1時{じ}',
  '期間': '期間{きかん}',
  '計數': '数{かぞ}える',
}

const datesPracticeDir = resolve(root, 'src/data/questions/datesPractice')
const subdirs = ['numbers', 'timeDate', 'counters']
let totalFiles = 0
let totalReplacements = 0

// Pattern: 「X」的正確讀音是？ or 「X」的正確讀法是？
// With optional (context) in between
const STEM_PATTERN = /stem: '(「[^」]+」)(?:（([^）]+)）)?的正確[讀読][音法]是？'/g

for (const subdir of subdirs) {
  const dir = resolve(datesPracticeDir, subdir)
  let files
  try {
    files = readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts')
  } catch (e) {
    console.log(`Skipping ${subdir}: ${e.message}`)
    continue
  }

  for (const file of files) {
    const filePath = resolve(dir, file)
    let content = readFileSync(filePath, 'utf-8')
    const original = content
    let fileReplacements = 0

    // Replace stem: patterns (NOT stem_zh:)
    content = content.replace(
      /( +)stem: '(「[^」]+」)(?:（([^）]+)）)?的正確[讀読][音法]是？'(,?\s*stem_zh:)/g,
      (match, indent, word, context, suffix) => {
        fileReplacements++
        const jpContext = context ? CONTEXT_MAP[context] || context : ''
        const jpContextStr = jpContext ? `（${jpContext}）` : ''
        return `${indent}stem: '${word}${jpContextStr}の正{ただ}しい読{よ}み方{かた}はどれですか。'${suffix}`
      }
    )

    // Handle stem: lines WITHOUT stem_zh on the same line
    // (stem_zh appears on the next line or is absent)
    content = content.replace(
      /( +)stem: '(「[^」]+」)(?:（([^）]+)）)?的正確[讀読][音法]是？',\n/g,
      (match, indent, word, context) => {
        fileReplacements++
        const jpContext = context ? CONTEXT_MAP[context] || context : ''
        const jpContextStr = jpContext ? `（${jpContext}）` : ''
        return `${indent}stem: '${word}${jpContextStr}の正{ただ}しい読{よ}み方{かた}はどれですか。',\n`
      }
    )

    if (content !== original) {
      writeFileSync(filePath, content, 'utf-8')
      console.log(`  ✓ ${subdir}/${file}: ${fileReplacements} stems fixed`)
      totalReplacements += fileReplacements
      totalFiles++
    } else {
      console.log(`  - ${subdir}/${file}: no changes needed`)
    }
  }
}

console.log(`\nDone: ${totalReplacements} pronunciation stems fixed across ${totalFiles} files.`)

// Verify: check for any remaining Chinese pronunciation stems
let remaining = 0
for (const subdir of subdirs) {
  const dir = resolve(datesPracticeDir, subdir)
  let files
  try { files = readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts') } catch { continue }
  for (const file of files) {
    const content = readFileSync(resolve(dir, file), 'utf-8')
    const matches = content.match(/stem: '[^']*的正確[讀読][音法]是/g)
    if (matches) {
      remaining += matches.length
      console.log(`  ⚠ ${subdir}/${file}: ${matches.length} remaining Chinese stems`)
    }
  }
}
if (remaining === 0) {
  console.log('\n✓ All pronunciation stems converted to Japanese.')
}
