// Kanji practice data
// Sample kanji with readings and meanings

export interface KanjiData {
    kanji: string
    meanings: string[]
    onYomi: string[] // 音読み (Chinese reading)
    kunYomi: string[] // 訓読み (Japanese reading)
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'
    examples: {
        word: string
        reading: string
        meaning: string
    }[]
}

export const kanjiData: KanjiData[] = [
    // N5 Kanji
    {
        kanji: '日',
        meanings: ['sun', 'day'],
        onYomi: ['ニチ', 'ジツ'],
        kunYomi: ['ひ', 'か'],
        level: 'N5',
        examples: [
            { word: '日本', reading: 'にほん', meaning: 'Japan' },
            { word: '毎日', reading: 'まいにち', meaning: 'every day' },
            { word: '今日', reading: 'きょう', meaning: 'today' },
        ],
    },
    {
        kanji: '本',
        meanings: ['book', 'origin'],
        onYomi: ['ホン'],
        kunYomi: ['もと'],
        level: 'N5',
        examples: [
            { word: '本', reading: 'ほん', meaning: 'book' },
            { word: '日本', reading: 'にほん', meaning: 'Japan' },
            { word: '本当', reading: 'ほんとう', meaning: 'truth' },
        ],
    },
    {
        kanji: '人',
        meanings: ['person', 'people'],
        onYomi: ['ジン', 'ニン'],
        kunYomi: ['ひと'],
        level: 'N5',
        examples: [
            { word: '人', reading: 'ひと', meaning: 'person' },
            { word: '日本人', reading: 'にほんじん', meaning: 'Japanese person' },
            { word: '外国人', reading: 'がいこくじん', meaning: 'foreigner' },
        ],
    },
    {
        kanji: '学',
        meanings: ['study', 'learning'],
        onYomi: ['ガク'],
        kunYomi: ['まな(ぶ)'],
        level: 'N5',
        examples: [
            { word: '学校', reading: 'がっこう', meaning: 'school' },
            { word: '大学', reading: 'だいがく', meaning: 'university' },
            { word: '学生', reading: 'がくせい', meaning: 'student' },
        ],
    },
    {
        kanji: '校',
        meanings: ['school'],
        onYomi: ['コウ'],
        kunYomi: [],
        level: 'N5',
        examples: [
            { word: '学校', reading: 'がっこう', meaning: 'school' },
            { word: '高校', reading: 'こうこう', meaning: 'high school' },
        ],
    },
    {
        kanji: '生',
        meanings: ['life', 'birth', 'student'],
        onYomi: ['セイ', 'ショウ'],
        kunYomi: ['い(きる)', 'う(まれる)', 'なま'],
        level: 'N5',
        examples: [
            { word: '学生', reading: 'がくせい', meaning: 'student' },
            { word: '先生', reading: 'せんせい', meaning: 'teacher' },
            { word: '生活', reading: 'せいかつ', meaning: 'life' },
        ],
    },
    {
        kanji: '食',
        meanings: ['eat', 'food'],
        onYomi: ['ショク'],
        kunYomi: ['た(べる)', 'く(う)'],
        level: 'N5',
        examples: [
            { word: '食べる', reading: 'たべる', meaning: 'to eat' },
            { word: '食事', reading: 'しょくじ', meaning: 'meal' },
            { word: '夕食', reading: 'ゆうしょく', meaning: 'dinner' },
        ],
    },
    {
        kanji: '行',
        meanings: ['go', 'conduct'],
        onYomi: ['コウ', 'ギョウ'],
        kunYomi: ['い(く)', 'おこな(う)'],
        level: 'N5',
        examples: [
            { word: '行く', reading: 'いく', meaning: 'to go' },
            { word: '旅行', reading: 'りょこう', meaning: 'travel' },
            { word: '銀行', reading: 'ぎんこう', meaning: 'bank' },
        ],
    },
    {
        kanji: '来',
        meanings: ['come'],
        onYomi: ['ライ'],
        kunYomi: ['く(る)', 'き(たる)'],
        level: 'N5',
        examples: [
            { word: '来る', reading: 'くる', meaning: 'to come' },
            { word: '来年', reading: 'らいねん', meaning: 'next year' },
            { word: '未来', reading: 'みらい', meaning: 'future' },
        ],
    },
    {
        kanji: '見',
        meanings: ['see', 'look'],
        onYomi: ['ケン'],
        kunYomi: ['み(る)'],
        level: 'N5',
        examples: [
            { word: '見る', reading: 'みる', meaning: 'to see' },
            { word: '意見', reading: 'いけん', meaning: 'opinion' },
            { word: '見学', reading: 'けんがく', meaning: 'field trip' },
        ],
    },

    // N4 Kanji
    {
        kanji: '考',
        meanings: ['think', 'consider'],
        onYomi: ['コウ'],
        kunYomi: ['かんが(える)'],
        level: 'N4',
        examples: [
            { word: '考える', reading: 'かんがえる', meaning: 'to think' },
            { word: '参考', reading: 'さんこう', meaning: 'reference' },
        ],
    },
    {
        kanji: '教',
        meanings: ['teach', 'religion'],
        onYomi: ['キョウ'],
        kunYomi: ['おし(える)', 'おそ(わる)'],
        level: 'N4',
        examples: [
            { word: '教える', reading: 'おしえる', meaning: 'to teach' },
            { word: '教室', reading: 'きょうしつ', meaning: 'classroom' },
            { word: '宗教', reading: 'しゅうきょう', meaning: 'religion' },
        ],
    },
]

// Generate kanji reading questions
export function generateKanjiQuestion(level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1' = 'N5', type: 'reading' | 'meaning' = 'reading') {
    const levelKanji = kanjiData.filter(k => k.level === level)
    if (levelKanji.length === 0) {
        // Fallback to N5
        return generateKanjiQuestion('N5', type)
    }

    const target = levelKanji[Math.floor(Math.random() * levelKanji.length)]

    if (type === 'reading') {
        // Pick a random example word
        const example = target.examples[Math.floor(Math.random() * target.examples.length)]

        // Generate distractors
        const allReadings = kanjiData
            .filter(k => k.kanji !== target.kanji)
            .flatMap(k => k.examples.map(e => e.reading))

        const distractors = allReadings
            .filter(r => r !== example.reading)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)

        return {
            stem: `What is the reading of "${example.word}"?`,
            correct: example.reading,
            options: [example.reading, ...distractors].sort(() => Math.random() - 0.5),
            explanation: `${example.word} is read as "${example.reading}" and means "${example.meaning}"`,
            level,
            source: 'kanji_reading',
        }
    } else {
        // Meaning question
        const example = target.examples[Math.floor(Math.random() * target.examples.length)]

        const allMeanings = kanjiData
            .filter(k => k.kanji !== target.kanji)
            .flatMap(k => k.examples.map(e => e.meaning))

        const distractors = allMeanings
            .filter(m => m !== example.meaning)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)

        return {
            stem: `What does "${example.word}" (${example.reading}) mean?`,
            correct: example.meaning,
            options: [example.meaning, ...distractors].sort(() => Math.random() - 0.5),
            explanation: `${example.word} (${example.reading}) means "${example.meaning}"`,
            level,
            source: 'kanji_meaning',
        }
    }
}
