/**
 * One-time cleanup script: Strip incorrect Japanese furigana from
 * Chinese context words in datesPractice explanation fields.
 *
 * Usage: node scripts/cleanDatesExplanations.mjs
 */
import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { globSync } from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

// ─── Chinese context words with wrong Japanese furigana ───
// These are explanatory Chinese text, NOT Japanese vocabulary.
const CHINESE_CONTEXT_REPLACEMENTS = [
  // Most common words
  ['正確{せいかく}', '正確'],
  ['使用{しよう}', '使用'],
  ['音讀{おんどく}', '音讀'],
  ['訓讀{くんどく}', '訓讀'],
  ['陷阱{かんけい}', '陷阱'],
  ['必須{ひっす}', '必須'],
  ['讀作{どくさ}', '讀作'],
  ['數字{すうじ}', '數字'],
  ['發音{はつおん}', '發音'],
  ['讀法{よみかた}', '讀法'],
  ['月份{げっぷん}', '月份'],
  ['編號{ばんごう}', '編號'],
  ['量詞{りょうし}', '量詞'],
  ['人數{にんずう}', '人數'],
  ['計數{けいすう}', '計數'],
  ['規則{きそく}', '規則'],
  ['特殊{とくしゅ}', '特殊'],
  ['固定{こてい}', '固定'],
  ['標準{ひょうじゅん}', '標準'],
  ['不能{ふのう}', '不能'],
  ['表示{ひょうじ}', '表示'],
  ['促音化{そくおんか}', '促音化'],
  ['不促音{ふそくおん}', '不促音'],
  ['促音{そくおん}', '促音'],
  ['濁音化{だくおんか}', '濁音化'],
  ['不濁音化{ふだくおんか}', '不濁音化'],
  ['濁音{だくおん}', '濁音'],
  ['半濁音化{はんだくおんか}', '半濁音化'],
  ['不半濁音化{ふはんだくおんか}', '不半濁音化'],
  ['半濁音{はんだくおん}', '半濁音'],
  ['混合{こんごう}', '混合'],
  ['不混合{ふこんごう}', '不混合'],
  ['回答{かいとう}', '回答'],
  ['質問{しつもん}', '質問'],
  ['現代{げんだい}', '現代'],
  ['源自{げんじ}', '源自'],
  ['古代{こだい}', '古代'],
  ['中國{ちゅうごく}', '中國'],
  ['讀音{どくおん}', '讀音'],
  ['組合{くみあわせ}', '組合'],
  ['以上{いじょう}', '以上'],
  ['之一{のいち}', '之一'],
  ['電話{でんわ}', '電話'],
  ['號碼{ばんごう}', '號碼'],
  ['數學{すうがく}', '數學'],
  ['計算{けいさん}', '計算'],
  ['日語{にほんご}', '日語'],
  ['常用{じょうよう}', '常用'],
  ['常見{じょうけん}', '常見'],
  ['一般{いっぱん}', '一般'],
  ['物品{ぶっぴん}', '物品'],
  ['獨立{どくりつ}', '獨立'],
  ['完整{かんせい}', '完整'],
  ['單純{たんじゅん}', '單純'],
  ['音變{おんへん}', '音變'],
  ['無音變{むおんへん}', '無音變'],
  ['不發生{ふはっせい}', '不發生'],
  ['發生{はっせい}', '發生'],
  ['變為{へんい}', '變為'],
  ['需要{じゅよう}', '需要'],
  ['轉換{てんかん}', '轉換'],
  ['規律{きそく}', '規律'],
  ['規律{きりつ}', '規律'],
  ['後面{あとめ}', '後面'],
  ['後面{うしろ}', '後面'],
  ['後接{こうせつ}', '後接'],
  ['搭配{たいはい}', '搭配'],
  ['清瘦型{せいそうがた}', '清瘦型'],
  ['順序{じゅんじょ}', '順序'],
  ['序列{じょれつ}', '序列'],
  ['一律{いちりつ}', '一律'],
  ['地址{じゅうしょ}', '地址'],
  ['禁止{きんし}', '禁止'],
  ['日常{にちじょう}', '日常'],
  ['重要{じゅうよう}', '重要'],
  ['避諱{ひき}', '避諱'],
  ['避諱{いひき}', '避諱'],
  ['情境{じょうきょう}', '情境'],
  ['情況{じょうきょう}', '情況'],
  ['場景{ばめん}', '場景'],
  ['不可{ふか}', '不可'],
  ['利用{りよう}', '利用'],
  ['學習者{がくしゅうしゃ}', '學習者'],
  ['學習{がくしゅう}', '學習'],
  ['容易{ようい}', '容易'],
  ['混淆{こんこう}', '混淆'],
  ['記憶{きおく}', '記憶'],
  ['例外{れいがい}', '例外'],
  ['特點{とくてん}', '特點'],
  ['清晰{せいせき}', '清晰'],
  ['簡短{かんたん}', '簡短'],
  ['系統{けいとう}', '系統'],
  ['切換{きりかえ}', '切換'],
  ['切換點{きりかえてん}', '切換點'],
  ['出生{しゅっせい}', '出生'],
  ['日期{にっき}', '日期'],
  ['方式{ほうしき}', '方式'],
  ['期間{きかん}', '期間'],
  ['星期{ようび}', '星期'],
  ['細長物{ほそながもの}', '細長物'],
  ['細長形{ほそながけい}', '細長形'],
  ['扁平物{へんぺいぶつ}', '扁平物'],
  ['成冊{せいさつ}', '成冊'],
  ['書籍{しょせき}', '書籍'],
  ['出版物{しゅっぱんぶつ}', '出版物'],
  ['禁忌{きんき}', '禁忌'],
  ['開頭{あたま}', '開頭'],
  ['開頭{かいとう}', '開頭'],
  ['保持{ほじ}', '保持'],
  ['保留{ほりゅう}', '保留'],
  ['觸發{しょうはつ}', '觸發'],
  ['影響{えいきょう}', '影響'],
  ['相同{おなじ}', '相同'],
  ['相同{どうよう}', '相同'],
  ['不同{ちがい}', '不同'],
  ['不同{ちがう}', '不同'],
  ['不同{ふどう}', '不同'],
  ['區別{くべつ}', '區別'],
  ['區分{くぶん}', '區分'],
  ['比較{ひかく}', '比較'],
  ['差異{さい}', '差異'],
  ['共通點{きょうつうてん}', '共通點'],
  ['萬能{ばんのう}', '萬能'],
  ['表達{ひょうたつ}', '表達'],
  ['基本{きほん}', '基本'],
  ['形式{けいしき}', '形式'],
  ['古語{こご}', '古語'],
  ['雙重{そうじゅう}', '雙重'],
  ['雙重{にじゅう}', '雙重'],
  ['種類{しゅるい}', '種類'],
  ['部分{ぶぶん}', '部分'],
  ['其他{たの}', '其他'],
  ['其他{そのた}', '其他'],
  ['雖然{すいぜん}', '雖然'],
  ['用於{もちい}', '用於'],
  ['用於{もちいる}', '用於'],
  ['不用於{もちいず}', '不用於'],
  ['適用於{てきようする}', '適用於'],
  ['陷阱題{かんけいだい}', '陷阱題'],
  ['反陷阱題{はんかんけいだい}', '反陷阱題'],
  ['比較題{ひかくだい}', '比較題'],
  ['一道{いちどう}', '一道'],
  ['正確{せいかく}', '正確'],
  ['沒有{ない}', '沒有'],
  ['這個{この}', '這個'],
  ['單獨{たんどく}', '單獨'],
  ['預約{よやく}', '預約'],
  ['一個人{ひとり}', '一個人'],
  ['做某事{なにか}', '做某事'],
  ['新年{しんねん}', '新年'],
  ['假期{かき}', '假期'],
  ['時間{じかん}', '時間'],
  ['注意{ちゅうい}', '注意'],
  ['完全{かんぜん}', '完全'],
  ['正常{せいじょう}', '正常'],
  ['仍需{なおひつよう}', '仍需'],
  ['仍讀作{なおどくさ}', '仍讀作'],
  ['不發生{ふはっせい}', '不發生'],
  ['不促音化{ふそくおんか}', '不促音化'],
  ['不使用{しよう}', '不使用'],
  ['讀{よ}', '讀'],
  ['讀む{よむ}', '讀'],
  ['多く{おおく}', '多'],
  // Single-char context words with wrong furigana
  ['行{ぎょう}', '行'],
  ['音{おん}', '音'],
]

// Japanese grammar particles mixed into Chinese context
const GRAMMAR_FIXES = [
  // する/しない patterns (often after Chinese context words)
  [/使用する/g, '使用'],
  [/使用しない/g, '不使用'],
  [/使用する/g, '使用'],
  [/する音讀/g, '音讀'],
  [/する訓讀/g, '訓讀'],
  [/しない訓讀/g, '非訓讀'],
  [/しない促音/g, '不促音'],
  // の → 的 (when used as Chinese possessive)
  [/の讀法/g, '的讀法'],
  [/の區別/g, '的區別'],
  [/の使用/g, '的使用'],
  [/の讀音/g, '的讀音'],
  [/の規則/g, '的規則'],
  [/の特殊/g, '的特殊'],
  [/の形式/g, '的形式'],
  [/の音讀/g, '的音讀'],
  [/の訓讀/g, '的訓讀'],
  [/の質問/g, '的質問'],
  [/の讀作/g, '的讀作'],
  [/の表達/g, '的表達'],
  [/の意思/g, '的意思'],
  [/の促音化/g, '的促音化'],
  [/の濁音化/g, '的濁音化'],
  [/の半濁音化/g, '的半濁音化'],
  [/の音變/g, '的音變'],
  [/の發音/g, '的發音'],
  [/の組合/g, '的組合'],
  [/の重要/g, '的重要'],
  [/の基本/g, '的基本'],
  // は → remove (topic marker in Chinese context, often redundant)
  [/は「/g, '「'],  // careful: only when clearly Chinese context
]

// ─── Process files ───

const datesPracticeDir = resolve(root, 'src/data/questions/datesPractice')
const subdirs = ['numbers', 'timeDate', 'counters']

let totalFiles = 0
let totalReplacements = 0

for (const subdir of subdirs) {
  const dir = resolve(datesPracticeDir, subdir)
  let files
  try {
    const { readdirSync } = await import('fs')
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

    // Apply Chinese context word replacements
    for (const [from, to] of CHINESE_CONTEXT_REPLACEMENTS) {
      const count = content.split(from).length - 1
      if (count > 0) {
        content = content.replaceAll(from, to)
        fileReplacements += count
      }
    }

    // Apply grammar fixes (regex)
    for (const [regex, replacement] of GRAMMAR_FIXES) {
      const matches = content.match(regex)
      if (matches) {
        content = content.replace(regex, replacement)
        fileReplacements += matches.length
      }
    }

    if (content !== original) {
      writeFileSync(filePath, content, 'utf-8')
      console.log(`  ✓ ${subdir}/${file}: ${fileReplacements} replacements`)
      totalReplacements += fileReplacements
      totalFiles++
    } else {
      console.log(`  - ${subdir}/${file}: no changes needed`)
    }
  }
}

console.log(`\nDone: ${totalReplacements} replacements across ${totalFiles} files.`)

// ─── Report remaining furigana ───
// Find any remaining {reading} patterns that might need manual review
console.log('\n--- Remaining furigana patterns (may need manual review) ---')
for (const subdir of subdirs) {
  const dir = resolve(datesPracticeDir, subdir)
  let files
  try {
    const { readdirSync } = await import('fs')
    files = readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts')
  } catch (e) {
    continue
  }

  for (const file of files) {
    const filePath = resolve(dir, file)
    const content = readFileSync(filePath, 'utf-8')
    // Find all {reading} annotations in reason/explanation fields (not in stem/sourceItem)
    const lines = content.split('\n')
    const remaining = new Set()
    for (const line of lines) {
      // Only check explanation-related fields
      if (line.includes('reason:') || line.includes('correctRule:') ||
          line.includes('trapExplanation:') || line.includes('relatedRules:')) {
        const matches = line.matchAll(/([\u4e00-\u9fff\u3400-\u4dbf\u3005\u3007]+)\{([^{}]+)\}/g)
        for (const match of matches) {
          remaining.add(`${match[1]}{${match[2]}}`)
        }
      }
    }
    if (remaining.size > 0) {
      console.log(`  ${subdir}/${file}: ${[...remaining].join(', ')}`)
    }
  }
}
