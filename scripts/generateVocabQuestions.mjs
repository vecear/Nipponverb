/**
 * Vocabulary Question Generator
 * Generates 3 JLPT-style questions per word for N5-N2 vocabulary
 *
 * Question Types:
 *   Type 1 (Reading): 漢字読み — ask the reading of a kanji word
 *   Type 2 (Context): 文脈規定 — fill in the blank
 *   Type 3 (Usage):   用法 — meaning/paraphrase question
 *
 * Usage: node scripts/generateVocabQuestions.mjs
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const RAW_DIR = path.join(ROOT, 'src/data/raw')
const OUT_DIR = path.join(ROOT, 'src/data/questions/vocabulary')

// ─── Parse vocabulary from TS files ───

function parseVocabFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8')
    const entries = []
    const regex = /\{\s*word:\s*'([^']*)',\s*reading:\s*'([^']*)',\s*meaning:\s*'([^']*)',\s*meaning_zh:\s*'([^']*)',\s*level:\s*'([^']*)'/g
    let match
    while ((match = regex.exec(content)) !== null) {
        entries.push({
            word: match[1],
            reading: match[2],
            meaning: match[3],
            meaning_zh: match[4],
            level: match[5],
        })
    }
    return entries
}

// ─── Helper utilities ───

function hasKanji(str) {
    return /[\u4e00-\u9faf\u3400-\u4dbf]/.test(str)
}

function isKatakana(str) {
    return /^[\u30a0-\u30ff\u30fc\uff66-\uff9f]+$/.test(str)
}

function isHiraganaOnly(str) {
    return /^[\u3040-\u309f\u30fc]+$/.test(str)
}

function isRomaji(str) {
    return /^[a-zA-Z]+$/.test(str)
}

// Seeded pseudo-random for reproducibility
let seed = 42
function seededRandom() {
    seed = (seed * 16807 + 0) % 2147483647
    return (seed - 1) / 2147483646
}

function shuffle(arr) {
    const a = [...arr]
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(seededRandom() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]]
    }
    return a
}

function pickN(arr, n, exclude = []) {
    const excSet = new Set(exclude)
    const candidates = arr.filter(x => !excSet.has(x))
    const shuffled = shuffle(candidates)
    return shuffled.slice(0, n)
}

// ─── Distractor Generation ───

/** Generate plausible wrong readings for a word */
function generateReadingDistractors(word, correctReading, allWords) {
    // Strategy: pick readings of similar length from same level
    const readingLen = correctReading.length
    const candidates = allWords
        .filter(w => w.reading !== correctReading && w.word !== word)
        .map(w => w.reading)

    // Prefer readings of similar length
    const similar = candidates.filter(r => Math.abs(r.length - readingLen) <= 2)
    const pool = similar.length >= 10 ? similar : candidates

    const unique = [...new Set(pool)]
    return pickN(unique, 3, [correctReading])
}

/** Generate wrong word options for context questions */
function generateContextDistractors(targetWord, allWords) {
    const targetIsVerb = targetWord.meaning.startsWith('to ')
    const targetIsAdj = targetWord.meaning_zh.endsWith('的') || targetWord.meaning.includes('adjective')

    let candidates = allWords.filter(w => w.word !== targetWord.word)

    // Try to pick same word class
    if (targetIsVerb) {
        const verbCandidates = candidates.filter(w => w.meaning.startsWith('to '))
        if (verbCandidates.length >= 5) candidates = verbCandidates
    } else if (targetIsAdj) {
        const adjCandidates = candidates.filter(w =>
            w.meaning_zh.endsWith('的') || w.word.endsWith('い') || w.word.endsWith('な'))
        if (adjCandidates.length >= 5) candidates = adjCandidates
    } else {
        // Nouns - pick other nouns (not verbs, not adjectives)
        const nounCandidates = candidates.filter(w =>
            !w.meaning.startsWith('to ') && !w.meaning_zh.endsWith('的'))
        if (nounCandidates.length >= 5) candidates = nounCandidates
    }

    return pickN(candidates, 3).map(w => ({
        word: w.word,
        reading: w.reading,
        meaning_zh: w.meaning_zh
    }))
}

/** Generate wrong meaning options */
function generateMeaningDistractors(targetWord, allWords) {
    const candidates = allWords
        .filter(w => w.word !== targetWord.word && w.meaning_zh !== targetWord.meaning_zh)
    return pickN(candidates, 3).map(w => w.meaning_zh)
}

// ─── Furigana utilities ───

/** Add furigana markup to a word: 漢字 → 漢字{かんじ} */
function withFurigana(word, reading) {
    if (word === reading || !hasKanji(word) || isRomaji(reading)) return word
    return `${word}{${reading}}`
}

// ─── Question Generators ───

function generateReadingQuestion(entry, idx, allWords, level) {
    const id = `v_${level.toLowerCase()}_${String(idx).padStart(3, '0')}_r`

    if (!hasKanji(entry.word) || isRomaji(entry.reading)) {
        // For non-kanji words: ask meaning → correct written form
        const distractorWords = pickN(
            allWords.filter(w => w.word !== entry.word).map(w => w.word),
            3, [entry.word]
        )
        const options = [
            { text: entry.word, reason: `正確！「${entry.word}」意思是「${entry.meaning_zh}」。` },
            ...distractorWords.map(w => {
                const found = allWords.find(x => x.word === w)
                return { text: w, reason: `錯誤。「${w}」的意思是「${found?.meaning_zh || ''}」。` }
            })
        ]
        const shuffled = shuffle(options)
        const correctIndex = shuffled.findIndex(o => o.text === entry.word)

        return {
            id, category: 'vocabulary', level, tags: ['vocab_reading'],
            stem: `「${entry.meaning_zh}」を表{あらわ}す言葉{ことば}はどれですか。`,
            stemZh: `表示「${entry.meaning_zh}」的詞是哪個？`,
            options: shuffled,
            correctIndex,
            explanation: {
                keyPoint: `「${entry.word}」的意思`,
                analysis: `「${entry.word}」（讀作「${entry.reading}」）的意思是「${entry.meaning_zh}」。`,
            }
        }
    }

    // For kanji words: ask reading
    const distractors = generateReadingDistractors(entry.word, entry.reading, allWords)
    const options = [
        { text: entry.reading, reason: `正確！「${entry.word}」讀作「${entry.reading}」，意思是「${entry.meaning_zh}」。` },
        ...distractors.map(d => ({ text: d, reason: `錯誤。「${entry.word}」的正確讀音是「${entry.reading}」。` }))
    ]
    const shuffled = shuffle(options)
    const correctIndex = shuffled.findIndex(o => o.text === entry.reading)

    return {
        id, category: 'vocabulary', level, tags: ['vocab_reading'],
        stem: `「${entry.word}」の読{よ}み方{かた}はどれですか。`,
        stemZh: `「${entry.word}」的讀法是哪個？`,
        options: shuffled,
        correctIndex,
        explanation: {
            keyPoint: `漢字「${entry.word}」的讀音`,
            analysis: `「${withFurigana(entry.word, entry.reading)}」的意思是「${entry.meaning_zh}」。`,
            comparisons: findSimilarReadings(entry, allWords),
        }
    }
}

function findSimilarReadings(entry, allWords) {
    // Find words with similar readings or same kanji
    const similar = allWords.filter(w =>
        w.word !== entry.word && (
            w.reading === entry.reading || // same reading, different word (homophone)
            (hasKanji(entry.word) && hasKanji(w.word) &&
             [...entry.word].some(c => hasKanji(c) && w.word.includes(c))) // shared kanji
        )
    ).slice(0, 2)

    if (similar.length === 0) return undefined
    return similar.map(w => `${withFurigana(w.word, w.reading)}：${w.meaning_zh}`)
}

// Context sentence templates
const NOUN_TEMPLATES = [
    { stem: (w, r) => `___を買{か}いました。`, stemZh: (zh) => `買了＿＿。` },
    { stem: (w, r) => `___はどこですか。`, stemZh: (zh) => `＿＿在哪裡？` },
    { stem: (w, r) => `___が好{す}きです。`, stemZh: (zh) => `喜歡＿＿。` },
    { stem: (w, r) => `___はいくらですか。`, stemZh: (zh) => `＿＿多少錢？` },
    { stem: (w, r) => `___を見{み}ました。`, stemZh: (zh) => `看了＿＿。` },
    { stem: (w, r) => `___がありますか。`, stemZh: (zh) => `有＿＿嗎？` },
]

const VERB_TEMPLATES = [
    { stem: (w, r) => `毎日{まいにち}___。`, stemZh: (zh) => `每天＿＿。` },
    { stem: (w, r) => `友達{ともだち}と___。`, stemZh: (zh) => `和朋友＿＿。` },
    { stem: (w, r) => `昨日{きのう}___。`, stemZh: (zh) => `昨天＿＿。` },
    { stem: (w, r) => `これから___つもりです。`, stemZh: (zh) => `打算＿＿。` },
]

const ADJ_TEMPLATES = [
    { stem: (w, r) => `この部屋{へや}は___です。`, stemZh: (zh) => `這個房間＿＿。` },
    { stem: (w, r) => `今日{きょう}は___ですね。`, stemZh: (zh) => `今天很＿＿呢。` },
    { stem: (w, r) => `あの人{ひと}は___です。`, stemZh: (zh) => `那個人很＿＿。` },
    { stem: (w, r) => `日本語{にほんご}は___です。`, stemZh: (zh) => `日語很＿＿。` },
]

function generateContextQuestion(entry, idx, allWords, level) {
    const id = `v_${level.toLowerCase()}_${String(idx).padStart(3, '0')}_c`

    const isVerb = entry.meaning.startsWith('to ')
    const isAdj = entry.word.endsWith('い') && hasKanji(entry.word) && !isVerb

    const templates = isVerb ? VERB_TEMPLATES : isAdj ? ADJ_TEMPLATES : NOUN_TEMPLATES
    const templateIdx = Math.floor(seededRandom() * templates.length)
    const template = templates[templateIdx]

    const distractors = generateContextDistractors(entry, allWords)

    const wordDisplay = hasKanji(entry.word) ? withFurigana(entry.word, entry.reading) : entry.word
    const options = [
        { text: wordDisplay, reason: `正確！「${entry.word}」的意思是「${entry.meaning_zh}」，在此句中最合適。` },
        ...distractors.map(d => {
            const display = hasKanji(d.word) ? withFurigana(d.word, d.reading) : d.word
            return { text: display, reason: `錯誤。「${d.word}」的意思是「${d.meaning_zh}」，不適合此處。` }
        })
    ]
    const shuffled = shuffle(options)
    const correctIndex = shuffled.findIndex(o => o.text === wordDisplay)

    return {
        id, category: 'vocabulary', level, tags: ['vocab_context'],
        stem: template.stem(entry.word, entry.reading),
        stemZh: template.stemZh(entry.meaning_zh),
        options: shuffled,
        correctIndex,
        explanation: {
            keyPoint: `詞彙「${entry.word}」的語境用法`,
            analysis: `「${withFurigana(entry.word, entry.reading)}」意思是「${entry.meaning_zh}」（${entry.meaning}）。`,
        }
    }
}

function generateUsageQuestion(entry, idx, allWords, level) {
    const id = `v_${level.toLowerCase()}_${String(idx).padStart(3, '0')}_u`

    // Usage question: ask the meaning of the word
    const distractorMeanings = generateMeaningDistractors(entry, allWords)

    const options = [
        { text: entry.meaning_zh, reason: `正確！「${entry.word}」的意思是「${entry.meaning_zh}」。` },
        ...distractorMeanings.map(m => ({ text: m, reason: `錯誤。「${m}」不是「${entry.word}」的意思。` }))
    ]
    const shuffled = shuffle(options)
    const correctIndex = shuffled.findIndex(o => o.text === entry.meaning_zh)

    const wordDisplay = hasKanji(entry.word) ? withFurigana(entry.word, entry.reading) : entry.word

    return {
        id, category: 'vocabulary', level, tags: ['vocab_usage'],
        stem: `「${wordDisplay}」の意味{いみ}に最{もっと}も近{ちか}いものはどれですか。`,
        stemZh: `最接近「${entry.word}」意思的是哪個？`,
        options: shuffled,
        correctIndex,
        explanation: {
            keyPoint: `「${entry.word}」的意思理解`,
            analysis: `「${withFurigana(entry.word, entry.reading)}」的意思是「${entry.meaning_zh}」（英語：${entry.meaning}）。`,
            comparisons: findSimilarMeanings(entry, allWords),
        }
    }
}

function findSimilarMeanings(entry, allWords) {
    const similar = allWords.filter(w =>
        w.word !== entry.word &&
        (w.meaning_zh === entry.meaning_zh || w.meaning === entry.meaning)
    ).slice(0, 2)

    if (similar.length === 0) return undefined
    return similar.map(w => `${withFurigana(w.word, w.reading)}：也有「${w.meaning_zh}」的意思`)
}

// ─── File generation ───

function escapeForTS(str) {
    return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

function questionToTS(q, indent = '    ') {
    const lines = []
    lines.push(`${indent}{`)
    lines.push(`${indent}    id: '${escapeForTS(q.id)}',`)
    lines.push(`${indent}    category: '${q.category}' as const,`)
    lines.push(`${indent}    level: '${q.level}' as const,`)
    if (q.tags) lines.push(`${indent}    tags: [${q.tags.map(t => `'${t}'`).join(', ')}],`)
    lines.push(`${indent}    stem: '${escapeForTS(q.stem)}',`)
    lines.push(`${indent}    stemZh: '${escapeForTS(q.stemZh)}',`)
    lines.push(`${indent}    options: [`)
    for (const opt of q.options) {
        lines.push(`${indent}        { text: '${escapeForTS(opt.text)}', reason: '${escapeForTS(opt.reason)}' },`)
    }
    lines.push(`${indent}    ],`)
    lines.push(`${indent}    correctIndex: ${q.correctIndex},`)
    lines.push(`${indent}    explanation: {`)
    lines.push(`${indent}        keyPoint: '${escapeForTS(q.explanation.keyPoint)}',`)
    lines.push(`${indent}        analysis: '${escapeForTS(q.explanation.analysis)}',`)
    if (q.explanation.comparisons) {
        lines.push(`${indent}        comparisons: [${q.explanation.comparisons.map(c => `'${escapeForTS(c)}'`).join(', ')}],`)
    }
    if (q.explanation.commonMistakes) {
        lines.push(`${indent}        commonMistakes: [${q.explanation.commonMistakes.map(c => `'${escapeForTS(c)}'`).join(', ')}],`)
    }
    lines.push(`${indent}    },`)
    lines.push(`${indent}},`)
    return lines.join('\n')
}

function writeQuestionsFile(filePath, exportName, questions) {
    const lines = [
        `import { UnifiedQuestion } from '../types'`,
        ``,
        `export const ${exportName}: UnifiedQuestion[] = [`,
    ]
    for (const q of questions) {
        lines.push(questionToTS(q))
    }
    lines.push(`]`)
    lines.push(``)

    fs.mkdirSync(path.dirname(filePath), { recursive: true })
    fs.writeFileSync(filePath, lines.join('\n'), 'utf-8')
    console.log(`  Written: ${path.relative(ROOT, filePath)} (${questions.length} questions)`)
}

// ─── Main ───

function main() {
    console.log('=== Vocabulary Question Generator ===\n')

    // Load all vocabulary data
    const vocabFiles = {
        n5: [
            { file: 'n5_vocab_1.ts', startIdx: 1 },
            { file: 'n5_vocab_2.ts', startIdx: null }, // will be set after counting part1
            { file: 'n5_vocab_3.ts', startIdx: null },
        ],
        n4: [
            { file: 'n4_vocab_1.ts', startIdx: 1 },
            { file: 'n4_vocab_2.ts', startIdx: null },
            { file: 'n4_vocab_3.ts', startIdx: null },
        ],
        n3: [{ file: 'n3_vocab.ts', startIdx: 1 }],
        n2: [{ file: 'n2_vocab.ts', startIdx: 1 }],
    }

    const allVocab = {} // level -> VocabularyData[]

    for (const [level, files] of Object.entries(vocabFiles)) {
        const levelUpper = level.toUpperCase()
        allVocab[levelUpper] = []
        let runningIdx = 1

        for (const f of files) {
            f.startIdx = runningIdx
            const entries = parseVocabFile(path.join(RAW_DIR, f.file))
            f.entries = entries
            allVocab[levelUpper].push(...entries)
            runningIdx += entries.length
        }

        console.log(`${levelUpper}: ${allVocab[levelUpper].length} words`)
    }

    console.log(`\nTotal: ${Object.values(allVocab).reduce((sum, v) => sum + v.length, 0)} words`)
    console.log(`Target: ${Object.values(allVocab).reduce((sum, v) => sum + v.length * 3, 0)} questions\n`)

    // Generate questions for each level and part
    const outputFiles = []
    let totalGenerated = 0

    // N5 - 3 parts
    for (let partIdx = 0; partIdx < vocabFiles.n5.length; partIdx++) {
        const part = vocabFiles.n5[partIdx]
        const partNum = partIdx + 1
        const questions = []

        for (let i = 0; i < part.entries.length; i++) {
            const wordIdx = part.startIdx + i
            const entry = part.entries[i]
            seed = wordIdx * 1000 + 42 // Reset seed per word for reproducibility

            questions.push(generateReadingQuestion(entry, wordIdx, allVocab.N5, 'N5'))
            questions.push(generateContextQuestion(entry, wordIdx, allVocab.N5, 'N5'))
            questions.push(generateUsageQuestion(entry, wordIdx, allVocab.N5, 'N5'))
        }

        const fileName = `n5_part${partNum}.ts`
        const exportName = `vocabN5Part${partNum}`
        writeQuestionsFile(path.join(OUT_DIR, fileName), exportName, questions)
        outputFiles.push({ level: 'N5', fileName, exportName, count: questions.length })
        totalGenerated += questions.length
    }

    // N4 - 3 parts
    for (let partIdx = 0; partIdx < vocabFiles.n4.length; partIdx++) {
        const part = vocabFiles.n4[partIdx]
        const partNum = partIdx + 1
        const questions = []

        for (let i = 0; i < part.entries.length; i++) {
            const wordIdx = part.startIdx + i
            const entry = part.entries[i]
            seed = wordIdx * 1000 + 142

            questions.push(generateReadingQuestion(entry, wordIdx, allVocab.N4, 'N4'))
            questions.push(generateContextQuestion(entry, wordIdx, allVocab.N4, 'N4'))
            questions.push(generateUsageQuestion(entry, wordIdx, allVocab.N4, 'N4'))
        }

        const fileName = `n4_part${partNum}.ts`
        const exportName = `vocabN4Part${partNum}`
        writeQuestionsFile(path.join(OUT_DIR, fileName), exportName, questions)
        outputFiles.push({ level: 'N4', fileName, exportName, count: questions.length })
        totalGenerated += questions.length
    }

    // N3
    {
        const part = vocabFiles.n3[0]
        const questions = []
        for (let i = 0; i < part.entries.length; i++) {
            const wordIdx = part.startIdx + i
            const entry = part.entries[i]
            seed = wordIdx * 1000 + 242

            questions.push(generateReadingQuestion(entry, wordIdx, allVocab.N3, 'N3'))
            questions.push(generateContextQuestion(entry, wordIdx, allVocab.N3, 'N3'))
            questions.push(generateUsageQuestion(entry, wordIdx, allVocab.N3, 'N3'))
        }
        writeQuestionsFile(path.join(OUT_DIR, 'n3.ts'), 'vocabN3', questions)
        outputFiles.push({ level: 'N3', fileName: 'n3.ts', exportName: 'vocabN3', count: questions.length })
        totalGenerated += questions.length
    }

    // N2
    {
        const part = vocabFiles.n2[0]
        const questions = []
        for (let i = 0; i < part.entries.length; i++) {
            const wordIdx = part.startIdx + i
            const entry = part.entries[i]
            seed = wordIdx * 1000 + 342

            questions.push(generateReadingQuestion(entry, wordIdx, allVocab.N2, 'N2'))
            questions.push(generateContextQuestion(entry, wordIdx, allVocab.N2, 'N2'))
            questions.push(generateUsageQuestion(entry, wordIdx, allVocab.N2, 'N2'))
        }
        writeQuestionsFile(path.join(OUT_DIR, 'n2.ts'), 'vocabN2', questions)
        outputFiles.push({ level: 'N2', fileName: 'n2.ts', exportName: 'vocabN2', count: questions.length })
        totalGenerated += questions.length
    }

    // Generate index.ts
    const indexLines = [
        `import { UnifiedQuestion } from '../types'`,
        ``,
    ]

    // Imports
    for (const f of outputFiles) {
        indexLines.push(`import { ${f.exportName} } from './${f.fileName.replace('.ts', '')}'`)
    }

    indexLines.push(``)
    indexLines.push(`type Level = 'N5' | 'N4' | 'N3' | 'N2' | 'N1'`)
    indexLines.push(``)

    // Level exports
    indexLines.push(`export const vocabUnifiedN5: UnifiedQuestion[] = [...vocabN5Part1, ...vocabN5Part2, ...vocabN5Part3]`)
    indexLines.push(`export const vocabUnifiedN4: UnifiedQuestion[] = [...vocabN4Part1, ...vocabN4Part2, ...vocabN4Part3]`)
    indexLines.push(`export const vocabUnifiedN3: UnifiedQuestion[] = vocabN3`)
    indexLines.push(`export const vocabUnifiedN2: UnifiedQuestion[] = vocabN2`)
    indexLines.push(``)

    // All combined
    indexLines.push(`export const allVocabQuestions: UnifiedQuestion[] = [`)
    indexLines.push(`    ...vocabUnifiedN5,`)
    indexLines.push(`    ...vocabUnifiedN4,`)
    indexLines.push(`    ...vocabUnifiedN3,`)
    indexLines.push(`    ...vocabUnifiedN2,`)
    indexLines.push(`]`)
    indexLines.push(``)

    // Bank accessor
    indexLines.push(`const vocabBanks: Partial<Record<Level, UnifiedQuestion[]>> = {`)
    indexLines.push(`    N5: vocabUnifiedN5,`)
    indexLines.push(`    N4: vocabUnifiedN4,`)
    indexLines.push(`    N3: vocabUnifiedN3,`)
    indexLines.push(`    N2: vocabUnifiedN2,`)
    indexLines.push(`}`)
    indexLines.push(``)
    indexLines.push(`export function getVocabUnifiedBank(level: Level): UnifiedQuestion[] {`)
    indexLines.push(`    return vocabBanks[level] || []`)
    indexLines.push(`}`)
    indexLines.push(``)

    // Re-export individual parts
    for (const f of outputFiles) {
        indexLines.push(`export { ${f.exportName} } from './${f.fileName.replace('.ts', '')}'`)
    }
    indexLines.push(``)

    fs.writeFileSync(path.join(OUT_DIR, 'index.ts'), indexLines.join('\n'), 'utf-8')
    console.log(`\n  Written: src/data/questions/vocabulary/index.ts`)

    // Summary
    console.log(`\n=== Generation Complete ===`)
    console.log(`Total questions generated: ${totalGenerated}`)
    for (const f of outputFiles) {
        console.log(`  ${f.level} ${f.fileName}: ${f.count} questions`)
    }
}

main()
