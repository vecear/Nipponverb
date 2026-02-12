/**
 * Third cleanup pass: Final remaining Chinese context words with wrong furigana.
 *
 * Usage: node scripts/cleanDatesPass3.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const MORE_REPLACEMENTS = [
  // Remaining Chinese context words from pass 2 report
  ['常用於{じょうようもちい}', '常用於'],
  ['後面接{せつ}', '後面接'],
  ['應該{おうがい}', '應該'],
  ['應該{べき}', '應該'],
  ['應為{べきい}', '應為'],
  ['應{べき}', '應'],
  ['但因{たんいん}', '但因'],
  ['為了{ために}', '為了'],
  ['所誤導{しょごどう}', '所誤導'],
  ['固定搭配{とうはい}', '固定搭配'],
  ['搭配{とうはい}', '搭配'],
  ['類比{るいひ}', '類比'],
  ['用{もち}', '用'],
  ['用{もちいる}', '用'],
  ['不用{もちいず}', '不用'],
  ['可讀{かどく}', '可讀'],
  ['這種{このしゅ}', '這種'],
  ['硬幣{こうか}', '硬幣'],
  ['更常見{こうじょうけん}', '更常見'],
  ['稱呼{しょうこ}', '稱呼'],
  ['稱為{しょうい}', '稱為'],
  ['非常{ひじょう}', '非常'],
  ['等於{ひとしい}', '等於'],
  ['場合{ばあい}', '場合'],
  ['不讀{ふよむ}', '不讀'],
  ['誤讀{ごどく}', '誤讀'],
  ['學習者會誤讀{ごどく}', '學習者會誤讀'],
  ['總結{そうけつ}', '總結'],
  ['讀法因場合{ばあい}', '讀法因場合'],
  ['而異{ことなる}', '而異'],
  ['不同場合{ばあい}', '不同場合'],
  ['特定{とくてい}', '特定'],
  ['錯誤{ごさ}', '錯誤'],
  ['後需{じゅよう}', '後需'],
  ['混淆點{てん}', '混淆點'],
  ['及{およ}', '及'],
  ['起{き}', '起'],
  ['一部分{いちぶぶん}', '一部分'],
  ['相關{かんけい}', '相關'],
  ['行音{ぎょうおん}', '行音'],
  ['月間{さんかげつかん}', '月間'],
  ['半年{はんとし}', '半年'],
  ['年度{ねんど}', '年度'],
  ['年度末{ねんどまつ}', '年度末'],
  ['不是年度末{ねんどまつ}', '不是年度末'],
  ['舉行{きょうこう}', '舉行'],
  ['強調{きょうちょう}', '強調'],
  ['原名{げんめい}', '原名'],
  ['不是開學{かいがく}', '不是開學'],
  ['暑假{なつやすみ}', '暑假'],
  ['寒假{ふゆやすみ}', '寒假'],
  ['也不常用{ふつうよう}', '也不常用'],
  ['常見{よくある}', '常見'],
  ['常說{じょうよういう}', '常說'],
  ['不存在{そんざいしない}', '不存在'],
  ['不存在{ふそんざい}', '不存在'],
  ['觸發後續{こうぞく}', '觸發後續'],
  ['不是原音{げんおん}', '不是原音'],
  ['記憶口訣{くけつ}', '記憶口訣'],
  ['的說法{いいかた}', '的說法'],
  ['正確說法{いいかた}', '正確說法'],
  ['的問法{といかた}', '的問法'],
  ['問法{といかた}', '問法'],
  ['準確{じゅんかく}', '準確'],
  ['更準確{じゅんかく}', '更準確'],
  ['杯數{はいすう}', '杯數'],
  ['杯裝{はいそう}', '杯裝'],
  ['樓層{かいすう}', '樓層'],
  ['有時{ときには}', '有時'],
  ['注意不要{ない}', '注意不要'],
  ['的高度{たかさ}', '的高度'],
  ['高度{こうど}', '高度'],
  ['面積{めんせき}', '面積'],
  ['例子{れいじ}', '例子'],
  ['是另一{もういち}', '是另一'],
  ['是另一種{べつの}', '是另一種'],
  ['一般物品用', '一般物品用'],
  ['死人{しにん}', '死人'],
  ['屍體{したい}', '屍體'],
  ['聽起來{きこえ}', '聽起來'],
  ['最容易{さいようい}', '最容易'],
  ['是最特殊{さいとくしゅ}', '是最特殊'],
  ['最特殊{さいとくしゅ}', '最特殊'],
  ['最基本{さいきほん}', '最基本'],
  ['始終{しじゅう}', '始終'],
  ['正式{せいしき}', '正式'],
  ['收集{あつめた}', '收集'],
  ['這個詞{ことば}', '這個詞'],
  ['這三個{さんこ}', '這三個'],
  ['這三個{みっつ}', '這三個'],
  ['這是測試{テスト}', '這是測試'],
  ['這題測試{テスト}', '這題測試'],
  ['測試{テスト}', '測試'],
  ['則{ならば}', '則'],
  ['同{おなじ}', '同'],
  ['理{り}', '理'],
  ['日期對{つい}', '日期對'],
  ['約{やく}', '約'],
  ['只用於{つかう}', '只用於'],
  ['如{たとえば}', '如'],
  ['例{れい}', '例'],
  ['主要{しゅよう}', '主要'],
  ['意味{いみ}', '意味'],
  ['或{また}', '或'],
  ['方{つかいかた}', '方'],
  ['以{い}', '以'],
  ['很多{おおく}', '很多'],
  ['讀法都可以{できます}', '讀法都可以'],
  ['只有兩種{にしゅ}', '只有兩種'],
  ['兩種{にしゅ}', '兩種'],
  ['問{とう}', '問'],
  ['可以{できます}', '可以'],
  ['可以{できる}', '可以'],
  ['下個月{らいげつ}', '下個月'],
  ['上個月{せんげつ}', '上個月'],
  ['這個月{こんげつ}', '這個月'],
  ['下下個月{さらいげつ}', '下下個月'],
  ['上上個月{せんせんげつ}', '上上個月'],
  ['每個月{まいつき}', '每個月'],
  ['一個月{いっかげつ}', '一個月'],
  ['一個月{ひとつきかん}', '一個月'],
  ['三個月{さんかげつ}', '三個月'],
  ['個星期一{げつようび}', '個星期一'],
  ['新年第一天{だいいちにち}', '新年第一天'],
  ['是一年{いちねん}', '是一年'],
  ['一年{いちねん}', '一年'],
  ['表示一年{いちねん}', '表示一年'],
  ['是夏天{なつ}', '是夏天'],
  ['和夏天{なつ}', '和夏天'],
  ['是颱風{たいふう}', '是颱風'],
  ['颱風{たいふう}', '颱風'],
  ['季節主要{しゅよう}', '季節主要'],
  ['無{ない}', '無'],
  ['苦{く}', '苦'],
  ['死{し}', '死'],
  ['桃{もも}', '桃'],
  ['裡{なか}', '裡'],
  ['還有{あと}', '還有'],
  ['後{ご}', '後'],
  ['到{つきます}', '到'],
  ['到{まで}', '到'],
  ['到{きます}', '到'],
  ['内{うち}', '内'],
  ['吧{しましょう}', '吧'],
  ['如果{もし}', '如果'],
  ['不音變{むおんへん}', '不音變'],
  ['走路{あるいて}', '走路'],
  ['等待{まつ}', '等待'],
  ['結束{おわります}', '結束'],
  ['待{まっ}', '待'],
  ['待{ま}', '待'],
  ['請{おねがい}', '請'],
  ['等{まって}', '等'],
  ['錢{かね}', '錢'],
  ['不{ない}', '不'],
]

const REGEX_FIXES = [
  // 讀まない → 不讀 (leftover Japanese)
  [/讀まない/g, '不讀'],
  // は particle in Chinese context
  [/は特殊讀法/g, '是特殊讀法'],
  [/は日語/g, '是日語'],
  [/は需要/g, '需要'],
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
    for (const [from, to] of MORE_REPLACEMENTS) {
      const count = content.split(from).length - 1
      if (count > 0) {
        content = content.replaceAll(from, to)
        fileReplacements += count
      }
    }
    for (const [regex, replacement] of REGEX_FIXES) {
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

// Quick remaining count
let remainingCount = 0
for (const subdir of subdirs) {
  const dir = resolve(datesPracticeDir, subdir)
  let files
  try { files = readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts') } catch { continue }
  for (const file of files) {
    const content = readFileSync(resolve(dir, file), 'utf-8')
    for (const line of content.split('\n')) {
      if (line.includes('reason:') || line.includes('correctRule:') ||
          line.includes('trapExplanation:') || line.includes('relatedRules:')) {
        const matches = [...line.matchAll(/([\u4e00-\u9fff\u3400-\u4dbf\u3005\u3007]+)\{([^{}]+)\}/g)]
        remainingCount += matches.length
      }
    }
  }
}
console.log(`\nRemaining furigana annotations in explanation fields: ${remainingCount}`)
