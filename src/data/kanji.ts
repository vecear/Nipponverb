// Kanji practice data
// Sample kanji with readings and meanings

export interface KanjiData {
    kanji: string
    meanings: string[]
    meanings_zh: string[] // Traditional Chinese meanings
    onYomi: string[] // 音読み (Chinese reading)
    kunYomi: string[] // 訓読み (Japanese reading)
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'
    examples: {
        word: string
        reading: string
        meaning: string
        meaning_zh: string // Traditional Chinese meaning
    }[]
}

export const kanjiData: KanjiData[] = [
    // N5 Kanji
    {
        kanji: '日',
        meanings: ['sun', 'day'],
        meanings_zh: ['日', '天'],
        onYomi: ['ニチ', 'ジツ'],
        kunYomi: ['ひ', 'か'],
        level: 'N5',
        examples: [
            { word: '日本', reading: 'にほん', meaning: 'Japan', meaning_zh: '日本' },
            { word: '毎日', reading: 'まいにち', meaning: 'every day', meaning_zh: '每天' },
            { word: '今日', reading: 'きょう', meaning: 'today', meaning_zh: '今天' },
        ],
    },
    {
        kanji: '本',
        meanings: ['book', 'origin'],
        meanings_zh: ['書', '根源'],
        onYomi: ['ホン'],
        kunYomi: ['もと'],
        level: 'N5',
        examples: [
            { word: '本', reading: 'ほん', meaning: 'book', meaning_zh: '書' },
            { word: '日本', reading: 'にほん', meaning: 'Japan', meaning_zh: '日本' },
            { word: '本当', reading: 'ほんとう', meaning: 'truth', meaning_zh: '真的' },
        ],
    },
    {
        kanji: '人',
        meanings: ['person', 'people'],
        meanings_zh: ['人', '人們'],
        onYomi: ['ジン', 'ニン'],
        kunYomi: ['ひと'],
        level: 'N5',
        examples: [
            { word: '人', reading: 'ひと', meaning: 'person', meaning_zh: '人' },
            { word: '日本人', reading: 'にほんじん', meaning: 'Japanese person', meaning_zh: '日本人' },
            { word: '外国人', reading: 'がいこくじん', meaning: 'foreigner', meaning_zh: '外國人' },
        ],
    },
    {
        kanji: '学',
        meanings: ['study', 'learning'],
        meanings_zh: ['學習', '學問'],
        onYomi: ['ガク'],
        kunYomi: ['まな(ぶ)'],
        level: 'N5',
        examples: [
            { word: '学校', reading: 'がっこう', meaning: 'school', meaning_zh: '學校' },
            { word: '大学', reading: 'だいがく', meaning: 'university', meaning_zh: '大學' },
            { word: '学生', reading: 'がくせい', meaning: 'student', meaning_zh: '學生' },
        ],
    },
    {
        kanji: '校',
        meanings: ['school'],
        meanings_zh: ['學校'],
        onYomi: ['コウ'],
        kunYomi: [],
        level: 'N5',
        examples: [
            { word: '学校', reading: 'がっこう', meaning: 'school', meaning_zh: '學校' },
            { word: '高校', reading: 'こうこう', meaning: 'high school', meaning_zh: '高中' },
        ],
    },
    {
        kanji: '生',
        meanings: ['life', 'birth', 'student'],
        meanings_zh: ['生命', '出生', '學生'],
        onYomi: ['セイ', 'ショウ'],
        kunYomi: ['い(きる)', 'う(まれる)', 'なま'],
        level: 'N5',
        examples: [
            { word: '学生', reading: 'がくせい', meaning: 'student', meaning_zh: '學生' },
            { word: '先生', reading: 'せんせい', meaning: 'teacher', meaning_zh: '老師' },
            { word: '生活', reading: 'せいかつ', meaning: 'life', meaning_zh: '生活' },
        ],
    },
    {
        kanji: '食',
        meanings: ['eat', 'food'],
        meanings_zh: ['吃', '食物'],
        onYomi: ['ショク'],
        kunYomi: ['た(べる)', 'く(う)'],
        level: 'N5',
        examples: [
            { word: '食べる', reading: 'たべる', meaning: 'to eat', meaning_zh: '吃' },
            { word: '食事', reading: 'しょくじ', meaning: 'meal', meaning_zh: '用餐' },
            { word: '夕食', reading: 'ゆうしょく', meaning: 'dinner', meaning_zh: '晚餐' },
        ],
    },
    {
        kanji: '行',
        meanings: ['go', 'conduct'],
        meanings_zh: ['去', '舉行'],
        onYomi: ['コウ', 'ギョウ'],
        kunYomi: ['い(く)', 'おこな(う)'],
        level: 'N5',
        examples: [
            { word: '行く', reading: 'いく', meaning: 'to go', meaning_zh: '去' },
            { word: '旅行', reading: 'りょこう', meaning: 'travel', meaning_zh: '旅行' },
            { word: '銀行', reading: 'ぎんこう', meaning: 'bank', meaning_zh: '銀行' },
        ],
    },
    {
        kanji: '来',
        meanings: ['come'],
        meanings_zh: ['來'],
        onYomi: ['ライ'],
        kunYomi: ['く(る)', 'き(たる)'],
        level: 'N5',
        examples: [
            { word: '来る', reading: 'くる', meaning: 'to come', meaning_zh: '來' },
            { word: '来年', reading: 'らいねん', meaning: 'next year', meaning_zh: '明年' },
            { word: '未来', reading: 'みらい', meaning: 'future', meaning_zh: '未來' },
        ],
    },
    {
        kanji: '見',
        meanings: ['see', 'look'],
        meanings_zh: ['看', '見'],
        onYomi: ['ケン'],
        kunYomi: ['み(る)'],
        level: 'N5',
        examples: [
            { word: '見る', reading: 'みる', meaning: 'to see', meaning_zh: '看' },
            { word: '意見', reading: 'いけん', meaning: 'opinion', meaning_zh: '意見' },
            { word: '見学', reading: 'けんがく', meaning: 'field trip', meaning_zh: '參觀' },
        ],
    },
    // N4 Kanji
    {
        kanji: '考',
        meanings: ['think', 'consider'],
        meanings_zh: ['思考', '考慮'],
        onYomi: ['コウ'],
        kunYomi: ['かんが(える)'],
        level: 'N4',
        examples: [
            { word: '考える', reading: 'かんがえる', meaning: 'to think', meaning_zh: '思考' },
            { word: '参考', reading: 'さんこう', meaning: 'reference', meaning_zh: '參考' },
        ],
    },
    {
        kanji: '教',
        meanings: ['teach', 'religion'],
        meanings_zh: ['教', '宗教'],
        onYomi: ['キョウ'],
        kunYomi: ['おし(える)', 'おそ(わる)'],
        level: 'N4',
        examples: [
            { word: '教える', reading: 'おしえる', meaning: 'to teach', meaning_zh: '教' },
            { word: '教室', reading: 'きょうしつ', meaning: 'classroom', meaning_zh: '教室' },
            { word: '宗教', reading: 'しゅうきょう', meaning: 'religion', meaning_zh: '宗教' },
        ],
    },
]

// Generate kanji reading questions
export function generateKanjiQuestion(
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1' = 'N5',
    type: 'reading' | 'writing' | 'meaning' = 'reading',
    lang: 'en' | 'zh-TW' | string = 'en'
) {
    const levelKanji = kanjiData.filter(k => k.level === level)
    if (levelKanji.length === 0) {
        // Fallback to N5
        return generateKanjiQuestion('N5', type, lang)
    }

    const target = levelKanji[Math.floor(Math.random() * levelKanji.length)]
    const isZh = lang.startsWith('zh') || lang === 'zh-TW'

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
            stem: `「${example.word}」${isZh ? '的讀音是什麼？' : 'の読み方は何ですか。'}`,
            correct: example.reading,
            options: [example.reading, ...distractors].sort(() => Math.random() - 0.5),
            explanation: `「${example.word}」${isZh ? '的讀音是' : 'の読み方は'}「${example.reading}」${isZh ? '。' : 'です。'}`,
            level,
            source: 'kanji_reading',
        }
    } else if (type === 'writing') {
        // Writing question (Hiragana -> Kanji)
        const example = target.examples[Math.floor(Math.random() * target.examples.length)]

        const allWords = kanjiData
            .filter(k => k.kanji !== target.kanji)
            .flatMap(k => k.examples.map(e => e.word))

        const distractors = allWords
            .filter(w => w !== example.word)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)

        return {
            stem: `「${example.reading}」${isZh ? '的漢字怎麼寫？' : 'は漢字でどう書きますか。'}`,
            correct: example.word,
            options: [example.word, ...distractors].sort(() => Math.random() - 0.5),
            explanation: `「${example.reading}」${isZh ? '的漢字寫作' : 'は漢字で'}「${example.word}」${isZh ? '。' : 'とし書きます。'}`,
            level,
            source: 'kanji_writing',
        }
    } else {
        // Meaning question (Kanji -> Meaning)
        const example = target.examples[Math.floor(Math.random() * target.examples.length)]
        const correctMeaning = isZh ? example.meaning_zh : example.meaning

        const allMeanings = kanjiData
            .filter(k => k.kanji !== target.kanji)
            .flatMap(k => k.examples.map(e => isZh ? e.meaning_zh : e.meaning))

        const distractors = allMeanings
            .filter(m => m !== correctMeaning)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)

        return {
            stem: `「${example.word}」${isZh ? '的意思是什麼？' : 'の意味は何ですか。'}`,
            correct: correctMeaning,
            options: [correctMeaning, ...distractors].sort(() => Math.random() - 0.5),
            explanation: `「${example.word}」${isZh ? '的意思是' : 'の意味は'}「${correctMeaning}」${isZh ? '。' : 'です。'}`,
            level,
            source: 'kanji_meaning',
        }
    }
}
