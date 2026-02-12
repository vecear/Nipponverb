import { DatesPracticeQuestion } from '../types';

// 百位數練習題
// 注意 300, 600, 800 的音變
// 每個數字3題：發音題、單句敘述題、對話題

export const hundredsNumberQuestions: DatesPracticeQuestion[] = [
    // ===== 數字 100 的三題 =====
    {
        id: 'num_hundreds_100_pron',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'pronunciation',
        isTrap: false,
        stem: '「百」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「百」的正確讀音是？',
        options: [
            { text: 'ひゃく', isCorrect: true, reason: '正確！「百{ひゃく}」讀作「ひゃく」。' },
            { text: 'もも', isCorrect: false, reason: '「もも」是「桃」的讀法，不是數字。' },
            { text: 'びゃく', isCorrect: false, reason: '「百{ひゃく}」單獨使用時不濁音化。' },
            { text: 'ぴゃく', isCorrect: false, reason: '「百{ひゃく}」單獨使用時不半濁音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「百{ひゃく}」讀作「ひゃく」，是標準音讀。',
            relatedRules: ['百的基本讀法', '百位數的發音']
        },
        sourceItem: { value: 100, kanji: '百', reading: 'ひゃく' }
    },
    {
        id: 'num_hundreds_100_sent',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'sentence',
        isTrap: false,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書一百日圓。',
        options: [
            { text: 'ひゃくえん', isCorrect: true, reason: '正確！「百円{ひゃくえん}」讀作「ひゃくえん」。' },
            { text: 'いちひゃくえん', isCorrect: false, reason: '通常省略「いち」，直接說「ひゃく」。' },
            { text: 'びゃくえん', isCorrect: false, reason: '「百{ひゃく}」不濁音化。' },
            { text: 'もえん', isCorrect: false, reason: '「もも」不是數字的讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「百円{ひゃくえん}」通常省略「一」，直接說「ひゃく」。',
            relatedRules: ['金額的表達', '百の省略規則']
        },
        sourceItem: { value: 100, kanji: '百円', reading: 'ひゃくえん' }
    },
    {
        id: 'num_hundreds_100_dial',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'dialogue',
        isTrap: false,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このペンはいくらですか？',
            speakerB: '＿＿です。（一百日圓）'
        },
        options: [
            { text: 'ひゃくえん', isCorrect: true, reason: '正確！「百円{ひゃくえん}」讀作「ひゃくえん」。' },
            { text: 'いっひゃくえん', isCorrect: false, reason: '「一百{いちひゃく}」不促音化，且通常省略「いち」。' },
            { text: 'ひゃっえん', isCorrect: false, reason: '「百{ひゃく}」不促音化。' },
            { text: 'いちひゃっえん', isCorrect: false, reason: '「百{ひゃく}」不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「百円{ひゃくえん}」是最常見の金額表達之一。',
            relatedRules: ['金額的表達', '百的使用']
        },
        sourceItem: { value: 100, kanji: '百円', reading: 'ひゃくえん' }
    },

    // ===== 數字 200 的三題 =====
    {
        id: 'num_hundreds_200_pron',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二百」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「二百」的正確讀音是？',
        options: [
            { text: 'にひゃく', isCorrect: true, reason: '正確！「二百{にひゃく}」讀作「にひゃく」。' },
            { text: 'ふたひゃく', isCorrect: false, reason: '組合數字使用音讀「に」。' },
            { text: 'にびゃく', isCorrect: false, reason: '「二百{にひゃく}」不濁音化。' },
            { text: 'にぴゃく', isCorrect: false, reason: '「二百{にひゃく}」不半濁音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二百{にひゃく}」讀作「にひゃく」，無音變。',
            relatedRules: ['百位數的讀法', '200的發音']
        },
        sourceItem: { value: 200, kanji: '二百', reading: 'にひゃく' }
    },
    {
        id: 'num_hundreds_200_sent',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'sentence',
        isTrap: false,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書兩百日圓。',
        options: [
            { text: 'にひゃくえん', isCorrect: true, reason: '正確！「二百円{にひゃくえん}」讀作「にひゃくえん」。' },
            { text: 'ふたひゃくえん', isCorrect: false, reason: '金額使用音讀「に」。' },
            { text: 'にびゃくえん', isCorrect: false, reason: '「二百{にひゃく}」不濁音化。' },
            { text: 'にぴゃくえん', isCorrect: false, reason: '「二百{にひゃく}」不半濁音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二百円{にひゃくえん}」讀作「にひゃくえん」，無音變。',
            relatedRules: ['金額的表達', '200的發音']
        },
        sourceItem: { value: 200, kanji: '二百円', reading: 'にひゃくえん' }
    },
    {
        id: 'num_hundreds_200_dial',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'dialogue',
        isTrap: false,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このノートはいくらですか？',
            speakerB: '＿＿です。（兩百日圓）'
        },
        options: [
            { text: 'にひゃくえん', isCorrect: true, reason: '正確！「二百円{にひゃくえん}」讀作「にひゃくえん」。' },
            { text: 'ふたひゃくえん', isCorrect: false, reason: '金額使用音讀「に」。' },
            { text: 'にびゃくえん', isCorrect: false, reason: '「二百{にひゃく}」不濁音化。' },
            { text: 'にっひゃくえん', isCorrect: false, reason: '「二{に}」不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二百円{にひゃくえん}」讀作「にひゃくえん」。',
            relatedRules: ['金額的表達', '200的發音']
        },
        sourceItem: { value: 200, kanji: '二百円', reading: 'にひゃくえん' }
    },

    // ===== 數字 300 的三題 =====
    {
        id: 'num_hundreds_300_pron',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'pronunciation',
        isTrap: true,
        stem: '「三百」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「三百」的正確讀音是？',
        options: [
            { text: 'さんひゃく', isCorrect: false, reason: '陷阱！「三百{さんびゃく}」會濁音化，讀「さんびゃく」。' },
            { text: 'さんびゃく', isCorrect: true, reason: '正確！「三{さん}」の撥音「ん」後面，「ひゃく」濁音化為「びゃく」。' },
            { text: 'さんぴゃく', isCorrect: false, reason: '應是濁音「び」，不是半濁音「ぴ」。' },
            { text: 'みひゃく', isCorrect: false, reason: '組合數字使用音讀「さん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三百{さんびゃく}」中，撥音「ん」後面の「ひゃく」會濁音化為「びゃく」。這是h-p轉換規律の一部分。',
            trapExplanation: '這是重要陷阱題，測試「三{さん}」引發的濁音化規則。',
            relatedRules: ['三引發的濁音化', 'h-p轉換規律', '撥音後的音變']
        },
        sourceItem: { value: 300, kanji: '三百', reading: 'さんびゃく' }
    },
    {
        id: 'num_hundreds_300_sent',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'sentence',
        isTrap: true,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書三百日圓。',
        options: [
            { text: 'さんひゃくえん', isCorrect: false, reason: '陷阱！「三百{さんびゃく}」會濁音化。' },
            { text: 'さんびゃくえん', isCorrect: true, reason: '正確！「三百円{さんびゃくえん}」讀作「さんびゃくえん」。' },
            { text: 'さんぴゃくえん', isCorrect: false, reason: '應是濁音「び」。' },
            { text: 'みびゃくえん', isCorrect: false, reason: '使用音讀「さん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三百円{さんびゃくえん}」讀作「さんびゃくえん」，「ひゃく」濁音化為「びゃく」。',
            trapExplanation: '學習者容易忽略濁音化規則。',
            relatedRules: ['金額的表達', '300的濁音化']
        },
        sourceItem: { value: 300, kanji: '三百円', reading: 'さんびゃくえん' }
    },
    {
        id: 'num_hundreds_300_dial',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'dialogue',
        isTrap: true,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このお菓子はいくらですか？',
            speakerB: '＿＿です。（三百日圓）'
        },
        options: [
            { text: 'さんひゃくえん', isCorrect: false, reason: '陷阱！「三百{さんびゃく}」必須濁音化。' },
            { text: 'さんびゃくえん', isCorrect: true, reason: '正確！「三百円{さんびゃくえん}」讀作「さんびゃくえん」。' },
            { text: 'さんぴゃくえん', isCorrect: false, reason: '應是濁音「び」，不是半濁音「ぴ」。' },
            { text: 'みっぴゃくえん', isCorrect: false, reason: '使用音讀「さん」，且應是濁音。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三百円{さんびゃくえん}」讀作「さんびゃくえん」。',
            trapExplanation: '這是常見の陷阱，「三{さん}」後面の「ひゃく」必須濁音化。',
            relatedRules: ['300的濁音化', '金額的發音']
        },
        sourceItem: { value: 300, kanji: '三百円', reading: 'さんびゃくえん' }
    },

    // ===== 數字 600 的三題 =====
    {
        id: 'num_hundreds_600_pron',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'pronunciation',
        isTrap: true,
        stem: '「六百」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「六百」的正確讀音是？',
        options: [
            { text: 'ろくひゃく', isCorrect: false, reason: '陷阱！「六百{ろっぴゃく}」會促音化＋半濁音化。' },
            { text: 'ろっぴゃく', isCorrect: true, reason: '正確！「六{ろく}」變成「ろっ」，「ひゃく」變成「ぴゃく」。' },
            { text: 'ろくびゃく', isCorrect: false, reason: '應是促音＋半濁音，不是只有濁音。' },
            { text: 'むっぴゃく', isCorrect: false, reason: '組合數字使用音讀「ろく」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「六百{ろっぴゃく}」中，「六{ろく}」促音化為「ろっ」，「ひゃく」半濁音化為「ぴゃく」。',
            trapExplanation: '這是重要陷阱題，測試「六{ろく}」引發の促音＋半濁音規則。',
            relatedRules: ['六引發の促音＋半濁音', 'h-p轉換規律']
        },
        sourceItem: { value: 600, kanji: '六百', reading: 'ろっぴゃく' }
    },
    {
        id: 'num_hundreds_600_sent',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'sentence',
        isTrap: true,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書六百日圓。',
        options: [
            { text: 'ろくひゃくえん', isCorrect: false, reason: '陷阱！「六百{ろっぴゃく}」會促音化＋半濁音化。' },
            { text: 'ろっぴゃくえん', isCorrect: true, reason: '正確！「六百円{ろっぴゃくえん}」讀作「ろっぴゃくえん」。' },
            { text: 'ろくびゃくえん', isCorrect: false, reason: '應是促音＋半濁音。' },
            { text: 'ろっびゃくえん', isCorrect: false, reason: '應是半濁音「ぴ」，不是濁音「び」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「六百円{ろっぴゃくえん}」讀作「ろっぴゃくえん」。',
            trapExplanation: '學習者容易忽略促音＋半濁音規則。',
            relatedRules: ['金額的表達', '600的音變']
        },
        sourceItem: { value: 600, kanji: '六百円', reading: 'ろっぴゃくえん' }
    },
    {
        id: 'num_hundreds_600_dial',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'dialogue',
        isTrap: true,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このお弁当はいくらですか？',
            speakerB: '＿＿です。（六百日圓）'
        },
        options: [
            { text: 'ろくひゃくえん', isCorrect: false, reason: '陷阱！必須促音＋半濁音。' },
            { text: 'ろっぴゃくえん', isCorrect: true, reason: '正確！「六百円{ろっぴゃくえん}」。' },
            { text: 'むっぴゃくえん', isCorrect: false, reason: '使用音讀「ろく」→「ろっ」。' },
            { text: 'ろっびゃくえん', isCorrect: false, reason: '應是半濁音「ぴ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「六百円{ろっぴゃくえん}」讀作「ろっぴゃくえん」。',
            trapExplanation: '這是常見の陷阱。',
            relatedRules: ['600的音變', '金額的發音']
        },
        sourceItem: { value: 600, kanji: '六百円', reading: 'ろっぴゃくえん' }
    },

    // ===== 數字 800 的三題 =====
    {
        id: 'num_hundreds_800_pron',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'pronunciation',
        isTrap: true,
        stem: '「八百」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「八百」的正確讀音是？',
        options: [
            { text: 'はちひゃく', isCorrect: false, reason: '陷阱！「八百{はっぴゃく}」會促音化＋半濁音化。' },
            { text: 'はっぴゃく', isCorrect: true, reason: '正確！「八{はち}」變成「はっ」，「ひゃく」變成「ぴゃく」。' },
            { text: 'はちびゃく', isCorrect: false, reason: '應是促音＋半濁音。' },
            { text: 'やっぴゃく', isCorrect: false, reason: '組合數字使用音讀「はち」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八百{はっぴゃく}」中，「八{はち}」促音化為「はっ」，「ひゃく」半濁音化為「ぴゃく」。',
            trapExplanation: '這是重要陷阱題，測試「八{はち}」引發の促音＋半濁音規則。',
            relatedRules: ['八引發の促音＋半濁音', 'h-p轉換規律']
        },
        sourceItem: { value: 800, kanji: '八百', reading: 'はっぴゃく' }
    },
    {
        id: 'num_hundreds_800_sent',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'sentence',
        isTrap: true,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書八百日圓。',
        options: [
            { text: 'はちひゃくえん', isCorrect: false, reason: '陷阱！「八百{はっぴゃく}」會促音化＋半濁音化。' },
            { text: 'はっぴゃくえん', isCorrect: true, reason: '正確！「八百円{はっぴゃくえん}」讀作「はっぴゃくえん」。' },
            { text: 'はちびゃくえん', isCorrect: false, reason: '應是促音＋半濁音。' },
            { text: 'はっびゃくえん', isCorrect: false, reason: '應是半濁音「ぴ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八百円{はっぴゃくえん}」讀作「はっぴゃくえん」。',
            trapExplanation: '學習者容易忽略促音＋半濁音規則。',
            relatedRules: ['金額的表達', '800的音變']
        },
        sourceItem: { value: 800, kanji: '八百円', reading: 'はっぴゃくえん' }
    },
    {
        id: 'num_hundreds_800_dial',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'dialogue',
        isTrap: true,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このラーメンはいくらですか？',
            speakerB: '＿＿です。（八百日圓）'
        },
        options: [
            { text: 'はちひゃくえん', isCorrect: false, reason: '陷阱！必須促音＋半濁音。' },
            { text: 'はっぴゃくえん', isCorrect: true, reason: '正確！「八百円{はっぴゃくえん}」。' },
            { text: 'やっぴゃくえん', isCorrect: false, reason: '使用音讀「はち」→「はっ」。' },
            { text: 'はっびゃくえん', isCorrect: false, reason: '應是半濁音「ぴ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八百円{はっぴゃくえん}」讀作「はっぴゃくえん」。',
            trapExplanation: '這是常見の陷阱。',
            relatedRules: ['800的音變', '金額的發音']
        },
        sourceItem: { value: 800, kanji: '八百円', reading: 'はっぴゃくえん' }
    },

    // ===== 數字 400 的三題 =====
    {
        id: 'num_hundreds_400_pron',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'pronunciation',
        isTrap: false,
        stem: '「四百」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「四百」的正確讀音是？',
        options: [
            { text: 'よんひゃく', isCorrect: true, reason: '正確！「四百{よんひゃく}」讀作「よんひゃく」，無音變。' },
            { text: 'しひゃく', isCorrect: false, reason: '為避諱「死」，多用「よん」。' },
            { text: 'よんびゃく', isCorrect: false, reason: '「四百{よんひゃく}」不濁音化。' },
            { text: 'よっぴゃく', isCorrect: false, reason: '「四{よん}」不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四百{よんひゃく}」讀作「よんひゃく」，使用「よん」避諱，無音變。',
            relatedRules: ['四の避諱讀法', '400的發音']
        },
        sourceItem: { value: 400, kanji: '四百', reading: 'よんひゃく' }
    },
    {
        id: 'num_hundreds_400_sent',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'sentence',
        isTrap: false,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書四百日圓。',
        options: [
            { text: 'よんひゃくえん', isCorrect: true, reason: '正確！「四百円{よんひゃくえん}」讀作「よんひゃくえん」。' },
            { text: 'しひゃくえん', isCorrect: false, reason: '為避諱「死」，多用「よん」。' },
            { text: 'よんびゃくえん', isCorrect: false, reason: '「四百{よんひゃく}」不濁音化。' },
            { text: 'よっぴゃくえん', isCorrect: false, reason: '「四{よん}」不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四百円{よんひゃくえん}」讀作「よんひゃくえん」。',
            relatedRules: ['金額的表達', '400的發音']
        },
        sourceItem: { value: 400, kanji: '四百円', reading: 'よんひゃくえん' }
    },
    {
        id: 'num_hundreds_400_dial',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'dialogue',
        isTrap: false,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このお茶はいくらですか？',
            speakerB: '＿＿です。（四百日圓）'
        },
        options: [
            { text: 'よんひゃくえん', isCorrect: true, reason: '正確！「四百円{よんひゃくえん}」。' },
            { text: 'しひゃくえん', isCorrect: false, reason: '為避諱多用「よん」。' },
            { text: 'よんびゃくえん', isCorrect: false, reason: '不濁音化。' },
            { text: 'よっぴゃくえん', isCorrect: false, reason: '不促音＋半濁音。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四百円{よんひゃくえん}」讀作「よんひゃくえん」。',
            relatedRules: ['400的發音', '金額表達']
        },
        sourceItem: { value: 400, kanji: '四百円', reading: 'よんひゃくえん' }
    },

    // ===== 數字 500 的三題 =====
    {
        id: 'num_hundreds_500_pron',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'pronunciation',
        isTrap: false,
        stem: '「五百」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「五百」的正確讀音是？',
        options: [
            { text: 'ごひゃく', isCorrect: true, reason: '正確！「五百{ごひゃく}」讀作「ごひゃく」，無音變。' },
            { text: 'いつひゃく', isCorrect: false, reason: '組合數字使用音讀「ご」。' },
            { text: 'ごびゃく', isCorrect: false, reason: '「五百{ごひゃく}」不濁音化。' },
            { text: 'ごぴゃく', isCorrect: false, reason: '「五百{ごひゃく}」不半濁音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五百{ごひゃく}」讀作「ごひゃく」，無音變。',
            relatedRules: ['百位數的讀法', '500的發音']
        },
        sourceItem: { value: 500, kanji: '五百', reading: 'ごひゃく' }
    },
    {
        id: 'num_hundreds_500_sent',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'sentence',
        isTrap: false,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書五百日圓。',
        options: [
            { text: 'ごひゃくえん', isCorrect: true, reason: '正確！「五百円{ごひゃくえん}」讀作「ごひゃくえん」。' },
            { text: 'いつひゃくえん', isCorrect: false, reason: '金額使用音讀「ご」。' },
            { text: 'ごびゃくえん', isCorrect: false, reason: '「五百{ごひゃく}」不濁音化。' },
            { text: 'ごぴゃくえん', isCorrect: false, reason: '「五百{ごひゃく}」不半濁音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五百円{ごひゃくえん}」讀作「ごひゃくえん」。',
            relatedRules: ['金額的表達', '500的發音']
        },
        sourceItem: { value: 500, kanji: '五百円', reading: 'ごひゃくえん' }
    },
    {
        id: 'num_hundreds_500_dial',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'dialogue',
        isTrap: false,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このコーヒーはいくらですか？',
            speakerB: '＿＿です。（五百日圓）'
        },
        options: [
            { text: 'ごひゃくえん', isCorrect: true, reason: '正確！「五百円{ごひゃくえん}」。' },
            { text: 'いつひゃくえん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'ごびゃくえん', isCorrect: false, reason: '不濁音化。' },
            { text: 'ごっぴゃくえん', isCorrect: false, reason: '不促音＋半濁音。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五百円{ごひゃくえん}」是常見の硬幣金額。',
            relatedRules: ['500的發音', '金額表達']
        },
        sourceItem: { value: 500, kanji: '五百円', reading: 'ごひゃくえん' }
    },

    // ===== 數字 700 的三題 =====
    {
        id: 'num_hundreds_700_pron',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'pronunciation',
        isTrap: false,
        stem: '「七百」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「七百」的正確讀音是？',
        options: [
            { text: 'ななひゃく', isCorrect: true, reason: '正確！「七百{ななひゃく}」讀作「ななひゃく」。' },
            { text: 'しちひゃく', isCorrect: false, reason: '為避免混淆，多用「なな」。' },
            { text: 'ななびゃく', isCorrect: false, reason: '「七百{ななひゃく}」不濁音化。' },
            { text: 'ななぴゃく', isCorrect: false, reason: '「七百{ななひゃく}」不半濁音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七百{ななひゃく}」讀作「ななひゃく」，使用「なな」避免混淆，無音變。',
            relatedRules: ['七の避免混淆讀法', '700的發音']
        },
        sourceItem: { value: 700, kanji: '七百', reading: 'ななひゃく' }
    },
    {
        id: 'num_hundreds_700_sent',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'sentence',
        isTrap: false,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書七百日圓。',
        options: [
            { text: 'ななひゃくえん', isCorrect: true, reason: '正確！「七百円{ななひゃくえん}」讀作「ななひゃくえん」。' },
            { text: 'しちひゃくえん', isCorrect: false, reason: '為避免混淆，多用「なな」。' },
            { text: 'ななびゃくえん', isCorrect: false, reason: '「七百{ななひゃく}」不濁音化。' },
            { text: 'ななぴゃくえん', isCorrect: false, reason: '「七百{ななひゃく}」不半濁音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七百円{ななひゃくえん}」讀作「ななひゃくえん」。',
            relatedRules: ['金額的表達', '700的發音']
        },
        sourceItem: { value: 700, kanji: '七百円', reading: 'ななひゃくえん' }
    },
    {
        id: 'num_hundreds_700_dial',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'dialogue',
        isTrap: false,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'この映画のチケットはいくらですか？',
            speakerB: '＿＿です。（七百日圓）'
        },
        options: [
            { text: 'ななひゃくえん', isCorrect: true, reason: '正確！「七百円{ななひゃくえん}」。' },
            { text: 'しちひゃくえん', isCorrect: false, reason: '為避免混淆多用「なな」。' },
            { text: 'ななびゃくえん', isCorrect: false, reason: '不濁音化。' },
            { text: 'なっぴゃくえん', isCorrect: false, reason: '「七{なな}」不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七百円{ななひゃくえん}」讀作「ななひゃくえん」。',
            relatedRules: ['700的發音', '金額表達']
        },
        sourceItem: { value: 700, kanji: '七百円', reading: 'ななひゃくえん' }
    },

    // ===== 數字 900 的三題 =====
    {
        id: 'num_hundreds_900_pron',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'pronunciation',
        isTrap: false,
        stem: '「九百」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「九百」的正確讀音是？',
        options: [
            { text: 'きゅうひゃく', isCorrect: true, reason: '正確！「九百{きゅうひゃく}」讀作「きゅうひゃく」。' },
            { text: 'くひゃく', isCorrect: false, reason: '為避諱「苦」，多用「きゅう」。' },
            { text: 'きゅうびゃく', isCorrect: false, reason: '「九百{きゅうひゃく}」不濁音化。' },
            { text: 'きゅうぴゃく', isCorrect: false, reason: '「九百{きゅうひゃく}」不半濁音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九百{きゅうひゃく}」讀作「きゅうひゃく」，使用「きゅう」避諱，無音變。',
            relatedRules: ['九の避諱讀法', '900的發音']
        },
        sourceItem: { value: 900, kanji: '九百', reading: 'きゅうひゃく' }
    },
    {
        id: 'num_hundreds_900_sent',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'sentence',
        isTrap: false,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書九百日圓。',
        options: [
            { text: 'きゅうひゃくえん', isCorrect: true, reason: '正確！「九百円{きゅうひゃくえん}」讀作「きゅうひゃくえん」。' },
            { text: 'くひゃくえん', isCorrect: false, reason: '為避諱「苦」，多用「きゅう」。' },
            { text: 'きゅうびゃくえん', isCorrect: false, reason: '「九百{きゅうひゃく}」不濁音化。' },
            { text: 'きゅうぴゃくえん', isCorrect: false, reason: '「九百{きゅうひゃく}」不半濁音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九百円{きゅうひゃくえん}」讀作「きゅうひゃくえん」。',
            relatedRules: ['金額的表達', '900的發音']
        },
        sourceItem: { value: 900, kanji: '九百円', reading: 'きゅうひゃくえん' }
    },
    {
        id: 'num_hundreds_900_dial',
        category: 'numbers',
        subcategory: 'hundreds',
        type: 'dialogue',
        isTrap: false,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'この雑誌はいくらですか？',
            speakerB: '＿＿です。（九百日圓）'
        },
        options: [
            { text: 'きゅうひゃくえん', isCorrect: true, reason: '正確！「九百円{きゅうひゃくえん}」。' },
            { text: 'くひゃくえん', isCorrect: false, reason: '為避諱多用「きゅう」。' },
            { text: 'きゅうびゃくえん', isCorrect: false, reason: '不濁音化。' },
            { text: 'きゅっぴゃくえん', isCorrect: false, reason: '「九{きゅう}」不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九百円{きゅうひゃくえん}」讀作「きゅうひゃくえん」。',
            relatedRules: ['900的發音', '金額表達']
        },
        sourceItem: { value: 900, kanji: '九百円', reading: 'きゅうひゃくえん' }
    },

    // ===== 擴充題目：更多百位數應用 =====
    {
        id: 'num_hundreds_extra_1', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '以下哪組百位數讀法正確？', stem_zh: '以下哪組百位數讀法正確？',
        options: [
            { text: '300(さんびゃく)、600(ろっぴゃく)、800(はっぴゃく)', isCorrect: true, reason: '正確！這些都有音變。' },
            { text: '300(さんひゃく)、600(ろくひゃく)、800(はちひゃく)', isCorrect: false, reason: '錯誤，這些都需要音變。' },
            { text: '300(さんぴゃく)、600(ろくびゃく)、800(はちびゃく)', isCorrect: false, reason: '錯誤，音變類型不對。' },
            { text: '全部不需要音變', isCorrect: false, reason: '錯誤，300/600/800有音變。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '300濁音化，600/800促音+半濁音化。', trapExplanation: '這是陷阱題，測試百位數音變規則。', relatedRules: ['百的音變規則'] },
        sourceItem: { value: 0, kanji: '百位數', reading: '音變規則' }
    },
    {
        id: 'num_hundreds_extra_2', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '電話代は＿＿円です。（一百五十圓）', stem_zh: '電話費是一百五十日圓。',
        options: [
            { text: 'ひゃくごじゅうえん', isCorrect: true, reason: '正確！「百五十円」讀「ひゃくごじゅうえん」。' },
            { text: 'いちひゃくごじゅうえん', isCorrect: false, reason: '通常省略「いち」。' },
            { text: 'ひゃくいつじゅうえん', isCorrect: false, reason: '「五十」讀「ごじゅう」。' },
            { text: 'もひゃくごじゅうえん', isCorrect: false, reason: '「百」不讀「もひゃく」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「百五十円」讀「ひゃくごじゅうえん」。', relatedRules: ['金額的讀法'] },
        sourceItem: { value: 150, kanji: '百五十円', reading: 'ひゃくごじゅうえん' }
    },
    {
        id: 'num_hundreds_extra_3', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '詢問人數', stem_zh: '詢問人數',
        dialogue: { speakerA: '参加者は何人ですか？', speakerB: '＿＿人です。（二百人）' },
        options: [
            { text: 'にひゃくにん', isCorrect: true, reason: '正確！「二百人」讀「にひゃくにん」。' },
            { text: 'ふたひゃくにん', isCorrect: false, reason: '人數使用音讀。' },
            { text: 'にびゃくにん', isCorrect: false, reason: '「二百」不濁音化。' },
            { text: 'にっぴゃくにん', isCorrect: false, reason: '「二」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二百人」讀「にひゃくにん」。', relatedRules: ['人數的讀法'] },
        sourceItem: { value: 200, kanji: '二百人', reading: 'にひゃくにん' }
    },
    {
        id: 'num_hundreds_extra_4', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「三百五十」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「三百五十」的正確讀音是？',
        options: [
            { text: 'さんひゃくごじゅう', isCorrect: false, reason: '陷阱！「三百」濁音化。' },
            { text: 'さんびゃくごじゅう', isCorrect: true, reason: '正確！「三百五十」讀「さんびゃくごじゅう」。' },
            { text: 'さんぴゃくごじゅう', isCorrect: false, reason: '應是濁音「び」。' },
            { text: 'みひゃくごじゅう', isCorrect: false, reason: '組合數字使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三百」濁音化為「さんびゃく」。', trapExplanation: '這是陷阱題。', relatedRules: ['三百的音變'] },
        sourceItem: { value: 350, kanji: '三百五十', reading: 'さんびゃくごじゅう' }
    },
    {
        id: 'num_hundreds_extra_5', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: 'この教科書は＿＿ページです。（四百頁）', stem_zh: '這本教科書有四百頁。',
        options: [
            { text: 'よんひゃくページ', isCorrect: true, reason: '正確！「四百ページ」讀「よんひゃくページ」。' },
            { text: 'しひゃくページ', isCorrect: false, reason: '避諱「死」，多用「よん」。' },
            { text: 'よんびゃくページ', isCorrect: false, reason: '「四百」不濁音化。' },
            { text: 'よっぴゃくページ', isCorrect: false, reason: '「四」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四百ページ」讀「よんひゃくページ」。', relatedRules: ['頁數的讀法'] },
        sourceItem: { value: 400, kanji: '四百', reading: 'よんひゃく' }
    },
    {
        id: 'num_hundreds_extra_6', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '詢問距離', stem_zh: '詢問距離',
        dialogue: { speakerA: '駅まで何メートルですか？', speakerB: '＿＿メートルです。（五百公尺）' },
        options: [
            { text: 'ごひゃく', isCorrect: true, reason: '正確！「五百」讀「ごひゃく」。' },
            { text: 'いつひゃく', isCorrect: false, reason: '距離使用音讀。' },
            { text: 'ごびゃく', isCorrect: false, reason: '「五百」不濁音化。' },
            { text: 'ごっぴゃく', isCorrect: false, reason: '「五」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五百メートル」讀「ごひゃくメートル」。', relatedRules: ['距離的讀法'] },
        sourceItem: { value: 500, kanji: '五百', reading: 'ごひゃく' }
    },
    {
        id: 'num_hundreds_extra_7', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「六百三十」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「六百三十」的正確讀音是？',
        options: [
            { text: 'ろくひゃくさんじゅう', isCorrect: false, reason: '陷阱！「六百」促音+半濁音化。' },
            { text: 'ろっぴゃくさんじゅう', isCorrect: true, reason: '正確！「六百三十」讀「ろっぴゃくさんじゅう」。' },
            { text: 'ろくびゃくさんじゅう', isCorrect: false, reason: '應是促音+半濁音。' },
            { text: 'むっぴゃくさんじゅう', isCorrect: false, reason: '組合數字使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「六百」促音+半濁音化。', trapExplanation: '這是陷阱題。', relatedRules: ['六百的音變'] },
        sourceItem: { value: 630, kanji: '六百三十', reading: 'ろっぴゃくさんじゅう' }
    },
    {
        id: 'num_hundreds_extra_8', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '彼の年収は＿＿万円です。（七百萬）', stem_zh: '他的年收入是七百萬日圓。',
        options: [
            { text: 'ななひゃくまんえん', isCorrect: true, reason: '正確！「七百万円」讀「ななひゃくまんえん」。' },
            { text: 'しちひゃくまんえん', isCorrect: false, reason: '為避免混淆，多用「なな」。' },
            { text: 'ななびゃくまんえん', isCorrect: false, reason: '「七百」不濁音化。' },
            { text: 'ななぴゃくまんえん', isCorrect: false, reason: '「七百」不半濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七百万円」讀「ななひゃくまんえん」。', relatedRules: ['金額的讀法'] },
        sourceItem: { value: 7000000, kanji: '七百万円', reading: 'ななひゃくまんえん' }
    },
    {
        id: 'num_hundreds_extra_9', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: true,
        stem: '詢問價格', stem_zh: '詢問價格',
        dialogue: { speakerA: 'このパソコンはいくらですか？', speakerB: '＿＿円です。（八百九十九圓）' },
        options: [
            { text: 'はちひゃくきゅうじゅうきゅうえん', isCorrect: false, reason: '陷阱！「八百」促音+半濁音化。' },
            { text: 'はっぴゃくきゅうじゅうきゅうえん', isCorrect: true, reason: '正確！「八百九十九円」。' },
            { text: 'はちびゃくきゅうじゅうきゅうえん', isCorrect: false, reason: '應是促音+半濁音。' },
            { text: 'やっぴゃくくじゅうくえん', isCorrect: false, reason: '使用音讀「はち」「きゅう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八百」促音+半濁音化。', trapExplanation: '這是陷阱題。', relatedRules: ['八百的音變'] },
        sourceItem: { value: 899, kanji: '八百九十九円', reading: 'はっぴゃくきゅうじゅうきゅうえん' }
    },
    {
        id: 'num_hundreds_extra_10', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「九百九十九」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「九百九十九」的正確讀音是？',
        options: [
            { text: 'きゅうひゃくきゅうじゅうきゅう', isCorrect: true, reason: '正確！「九百九十九」讀「きゅうひゃくきゅうじゅうきゅう」。' },
            { text: 'くひゃくくじゅうく', isCorrect: false, reason: '為避諱「苦」，多用「きゅう」。' },
            { text: 'きゅうびゃくきゅうじゅうきゅう', isCorrect: false, reason: '「九百」不濁音化。' },
            { text: 'きゅうぴゃくきゅうじゅうきゅう', isCorrect: false, reason: '「九百」不半濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九百九十九」讀「きゅうひゃくきゅうじゅうきゅう」。', relatedRules: ['數字組合的讀法'] },
        sourceItem: { value: 999, kanji: '九百九十九', reading: 'きゅうひゃくきゅうじゅうきゅう' }
    },
    {
        id: 'num_hundreds_extra_11', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '学校まで＿＿メートルです。（一百二十公尺）', stem_zh: '到學校一百二十公尺。',
        options: [
            { text: 'ひゃくにじゅう', isCorrect: true, reason: '正確！「百二十」讀「ひゃくにじゅう」。' },
            { text: 'いちひゃくにじゅう', isCorrect: false, reason: '通常省略「いち」。' },
            { text: 'ひゃくふたじゅう', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'もにじゅう', isCorrect: false, reason: '「百」不讀「も」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「百二十」讀「ひゃくにじゅう」。', relatedRules: ['距離的讀法'] },
        sourceItem: { value: 120, kanji: '百二十', reading: 'ひゃくにじゅう' }
    },
    {
        id: 'num_hundreds_extra_12', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '詢問時間', stem_zh: '詢問時間',
        dialogue: { speakerA: '何分かかりますか？', speakerB: '＿＿分です。（二百四十分鐘）' },
        options: [
            { text: 'にひゃくよんじゅっぷん', isCorrect: true, reason: '正確！「二百四十分」。' },
            { text: 'ふたひゃくよんじゅっぷん', isCorrect: false, reason: '分鐘使用音讀。' },
            { text: 'にびゃくよんじゅっぷん', isCorrect: false, reason: '「二百」不濁音化。' },
            { text: 'にひゃくしじゅっぷん', isCorrect: false, reason: '「四十」讀「よんじゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二百四十分」讀「にひゃくよんじゅっぷん」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 240, kanji: '二百四十分', reading: 'にひゃくよんじゅっぷん' }
    },
    {
        id: 'num_hundreds_extra_13', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「三百六十五」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「三百六十五」的正確讀音是？',
        options: [
            { text: 'さんひゃくろくじゅうご', isCorrect: false, reason: '陷阱！「三百」濁音化。' },
            { text: 'さんびゃくろくじゅうご', isCorrect: true, reason: '正確！「三百六十五」讀「さんびゃくろくじゅうご」。' },
            { text: 'みひゃくむじゅういつ', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'さんぴゃくろくじゅうご', isCorrect: false, reason: '應是濁音「び」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三百」濁音化為「さんびゃく」。', trapExplanation: '365是一年的天數。', relatedRules: ['三百的音變'] },
        sourceItem: { value: 365, kanji: '三百六十五', reading: 'さんびゃくろくじゅうご' }
    },
    {
        id: 'num_hundreds_extra_14', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '会議室は＿＿号室です。（四百二十一號房）', stem_zh: '會議室是421號房。',
        options: [
            { text: 'よんひゃくにじゅういちごうしつ', isCorrect: true, reason: '正確！「四百二十一号室」。' },
            { text: 'しひゃくにじゅういちごうしつ', isCorrect: false, reason: '避諱「死」，多用「よん」。' },
            { text: 'よんびゃくにじゅういちごうしつ', isCorrect: false, reason: '「四百」不濁音化。' },
            { text: 'よっぴゃくにじゅういちごうしつ', isCorrect: false, reason: '「四」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四百二十一号室」讀「よんひゃくにじゅういちごうしつ」。', relatedRules: ['房號的讀法'] },
        sourceItem: { value: 421, kanji: '四百二十一号室', reading: 'よんひゃくにじゅういちごうしつ' }
    },
    {
        id: 'num_hundreds_extra_15', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '詢問人數', stem_zh: '詢問人數',
        dialogue: { speakerA: '学生は何人いますか？', speakerB: '＿＿人です。（五百人）' },
        options: [
            { text: 'ごひゃくにん', isCorrect: true, reason: '正確！「五百人」讀「ごひゃくにん」。' },
            { text: 'いつひゃくにん', isCorrect: false, reason: '人數使用音讀。' },
            { text: 'ごびゃくにん', isCorrect: false, reason: '「五百」不濁音化。' },
            { text: 'ごっぴゃくにん', isCorrect: false, reason: '「五」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五百人」讀「ごひゃくにん」。', relatedRules: ['人數的讀法'] },
        sourceItem: { value: 500, kanji: '五百人', reading: 'ごひゃくにん' }
    },
    {
        id: 'num_hundreds_extra_16', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「六百六十六」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「六百六十六」的正確讀音是？',
        options: [
            { text: 'ろくひゃくろくじゅうろく', isCorrect: false, reason: '陷阱！「六百」促音+半濁音化。' },
            { text: 'ろっぴゃくろくじゅうろく', isCorrect: true, reason: '正確！「六百六十六」讀「ろっぴゃくろくじゅうろく」。' },
            { text: 'むひゃくむじゅうむ', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'ろくびゃくろくじゅうろく', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「六百」促音+半濁音化。', trapExplanation: '666的讀法。', relatedRules: ['六百的音變'] },
        sourceItem: { value: 666, kanji: '六百六十六', reading: 'ろっぴゃくろくじゅうろく' }
    },
    {
        id: 'num_hundreds_extra_17', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '電話番号は＿＿です。（7890）', stem_zh: '電話號碼是7890。',
        options: [
            { text: 'なな・はち・きゅう・ゼロ', isCorrect: true, reason: '正確！電話號碼逐字念出。' },
            { text: 'ななせんはっぴゃくきゅうじゅう', isCorrect: false, reason: '電話號碼不讀成整數。' },
            { text: 'しち・はち・く・れい', isCorrect: false, reason: '電話號碼多用「なな」「きゅう」「ゼロ」。' },
            { text: 'ななひゃくはちじゅうきゅう', isCorrect: false, reason: '電話號碼不讀成整數。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '電話號碼逐個數字讀出。', relatedRules: ['電話番号的讀法'] },
        sourceItem: { value: 7890, kanji: '七八九〇', reading: 'ななはちきゅうゼロ' }
    },
    {
        id: 'num_hundreds_extra_18', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: true,
        stem: '詢問金額', stem_zh: '詢問金額',
        dialogue: { speakerA: 'ランチはいくらですか？', speakerB: '＿＿円です。（八百五十圓）' },
        options: [
            { text: 'はちひゃくごじゅうえん', isCorrect: false, reason: '陷阱！「八百」促音+半濁音化。' },
            { text: 'はっぴゃくごじゅうえん', isCorrect: true, reason: '正確！「八百五十円」。' },
            { text: 'はちびゃくごじゅうえん', isCorrect: false, reason: '應是促音+半濁音。' },
            { text: 'やっぴゃくごじゅうえん', isCorrect: false, reason: '使用音讀「はち」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八百」促音+半濁音化。', trapExplanation: '這是陷阱題。', relatedRules: ['八百的音變'] },
        sourceItem: { value: 850, kanji: '八百五十円', reading: 'はっぴゃくごじゅうえん' }
    },
    {
        id: 'num_hundreds_extra_19', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「百八」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「百八」的正確讀音是？',
        options: [
            { text: 'ひゃくはち', isCorrect: true, reason: '正確！「百八」讀「ひゃくはち」。' },
            { text: 'いちひゃくはち', isCorrect: false, reason: '通常省略「いち」。' },
            { text: 'ひゃくや', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'もはち', isCorrect: false, reason: '「百」不讀「も」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「百八」讀「ひゃくはち」，佛教的煩惱數。', relatedRules: ['數字の文化意義'] },
        sourceItem: { value: 108, kanji: '百八', reading: 'ひゃくはち' }
    },
    {
        id: 'num_hundreds_extra_20', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '試験は＿＿点満点です。（一百分）', stem_zh: '考試滿分一百分。',
        options: [
            { text: 'ひゃくてんまんてん', isCorrect: true, reason: '正確！「百点満点」。' },
            { text: 'いちひゃくてんまんてん', isCorrect: false, reason: '通常省略「いち」。' },
            { text: 'ひゃっくてんまんてん', isCorrect: false, reason: '「百」不促音化。' },
            { text: 'もてんまんてん', isCorrect: false, reason: '「百」不讀「も」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「百点満点」讀「ひゃくてんまんてん」。', relatedRules: ['分數的讀法'] },
        sourceItem: { value: 100, kanji: '百点満点', reading: 'ひゃくてんまんてん' }
    },
    {
        id: 'num_hundreds_extra_21', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '詢問頁數', stem_zh: '詢問頁數',
        dialogue: { speakerA: 'この本は何ページですか？', speakerB: '＿＿ページです。（二百五十頁）' },
        options: [
            { text: 'にひゃくごじゅうページ', isCorrect: true, reason: '正確！「二百五十ページ」。' },
            { text: 'ふたひゃくごじゅうページ', isCorrect: false, reason: '頁數使用音讀。' },
            { text: 'にびゃくごじゅうページ', isCorrect: false, reason: '「二百」不濁音化。' },
            { text: 'にひゃくいつじゅうページ', isCorrect: false, reason: '「五十」讀「ごじゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二百五十ページ」讀「にひゃくごじゅうページ」。', relatedRules: ['頁數的讀法'] },
        sourceItem: { value: 250, kanji: '二百五十', reading: 'にひゃくごじゅう' }
    },
    {
        id: 'num_hundreds_extra_22', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「三百三」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「三百三」的正確讀音是？',
        options: [
            { text: 'さんひゃくさん', isCorrect: false, reason: '陷阱！「三百」濁音化。' },
            { text: 'さんびゃくさん', isCorrect: true, reason: '正確！「三百三」讀「さんびゃくさん」。' },
            { text: 'みひゃくみ', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'さんぴゃくさん', isCorrect: false, reason: '應是濁音「び」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三百」濁音化為「さんびゃく」。', trapExplanation: '這是陷阱題。', relatedRules: ['三百的音變'] },
        sourceItem: { value: 303, kanji: '三百三', reading: 'さんびゃくさん' }
    },
    {
        id: 'num_hundreds_extra_23', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: 'マラソンは＿＿キロです。（四十二公里）', stem_zh: '馬拉松是四十二公里。',
        options: [
            { text: 'よんじゅうにキロ', isCorrect: true, reason: '正確！「四十二キロ」讀「よんじゅうにキロ」。' },
            { text: 'しじゅうにキロ', isCorrect: false, reason: '避諱「死」，多用「よん」。' },
            { text: 'よっじゅうにキロ', isCorrect: false, reason: '「四十」讀「よんじゅう」。' },
            { text: 'よじゅうにキロ', isCorrect: false, reason: '缺少「ん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '馬拉松距離「四十二キロ」。', relatedRules: ['距離的讀法'] },
        sourceItem: { value: 42, kanji: '四十二キロ', reading: 'よんじゅうにキロ' }
    },
    {
        id: 'num_hundreds_extra_24', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '詢問金額', stem_zh: '詢問金額',
        dialogue: { speakerA: 'お会計はいくらですか？', speakerB: '＿＿円です。（四百八十圓）' },
        options: [
            { text: 'よんひゃくはちじゅうえん', isCorrect: true, reason: '正確！「四百八十円」。' },
            { text: 'しひゃくはちじゅうえん', isCorrect: false, reason: '避諱「死」，多用「よん」。' },
            { text: 'よんびゃくはちじゅうえん', isCorrect: false, reason: '「四百」不濁音化。' },
            { text: 'よんひゃくやじゅうえん', isCorrect: false, reason: '「八十」讀「はちじゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四百八十円」讀「よんひゃくはちじゅうえん」。', relatedRules: ['金額的讀法'] },
        sourceItem: { value: 480, kanji: '四百八十円', reading: 'よんひゃくはちじゅうえん' }
    },
    {
        id: 'num_hundreds_extra_25', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「五百五十五」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「五百五十五」的正確讀音是？',
        options: [
            { text: 'ごひゃくごじゅうご', isCorrect: true, reason: '正確！「五百五十五」讀「ごひゃくごじゅうご」。' },
            { text: 'いつひゃくいつじゅういつ', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'ごびゃくごじゅうご', isCorrect: false, reason: '「五百」不濁音化。' },
            { text: 'ごっぴゃくごじゅうご', isCorrect: false, reason: '「五」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五百五十五」讀「ごひゃくごじゅうご」。', relatedRules: ['數字組合的讀法'] },
        sourceItem: { value: 555, kanji: '五百五十五', reading: 'ごひゃくごじゅうご' }
    },
    {
        id: 'num_hundreds_extra_26', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: true,
        stem: '會場收容＿＿人。（六百人）', stem_zh: '會場容納六百人。',
        options: [
            { text: 'ろくひゃくにん', isCorrect: false, reason: '陷阱！「六百」促音+半濁音化。' },
            { text: 'ろっぴゃくにん', isCorrect: true, reason: '正確！「六百人」讀「ろっぴゃくにん」。' },
            { text: 'むっぴゃくにん', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'ろくびゃくにん', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「六百」促音+半濁音化。', trapExplanation: '這是陷阱題。', relatedRules: ['六百的音變'] },
        sourceItem: { value: 600, kanji: '六百人', reading: 'ろっぴゃくにん' }
    },
    {
        id: 'num_hundreds_extra_27', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '詢問距離', stem_zh: '詢問距離',
        dialogue: { speakerA: '空港まで何キロですか？', speakerB: '＿＿キロです。（七十公里）' },
        options: [
            { text: 'ななじゅうキロ', isCorrect: true, reason: '正確！「七十キロ」讀「ななじゅうキロ」。' },
            { text: 'しちじゅうキロ', isCorrect: false, reason: '為避免混淆，多用「なな」。' },
            { text: 'ななじゅっキロ', isCorrect: false, reason: '「キロ」前不促音化。' },
            { text: 'なのじゅうキロ', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七十キロ」讀「ななじゅうキロ」。', relatedRules: ['距離的讀法'] },
        sourceItem: { value: 70, kanji: '七十キロ', reading: 'ななじゅうキロ' }
    },
    {
        id: 'num_hundreds_extra_28', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「七百七十七」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「七百七十七」的正確讀音是？',
        options: [
            { text: 'ななひゃくななじゅうなな', isCorrect: true, reason: '正確！「七百七十七」讀「ななひゃくななじゅうなな」。' },
            { text: 'しちひゃくしちじゅうしち', isCorrect: false, reason: '為避免混淆，多用「なな」。' },
            { text: 'ななびゃくななじゅうなな', isCorrect: false, reason: '「七百」不濁音化。' },
            { text: 'ななぴゃくななじゅうなな', isCorrect: false, reason: '「七百」不半濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七百七十七」讀「ななひゃくななじゅうなな」。', relatedRules: ['數字組合的讀法'] },
        sourceItem: { value: 777, kanji: '七百七十七', reading: 'ななひゃくななじゅうなな' }
    },
    {
        id: 'num_hundreds_extra_29', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: true,
        stem: '書店有＿＿本書。（八百本）', stem_zh: '書店有八百本書。',
        options: [
            { text: 'はちひゃくさつ', isCorrect: false, reason: '陷阱！「八百」促音+半濁音化。' },
            { text: 'はっぴゃくさつ', isCorrect: true, reason: '正確！「八百冊」讀「はっぴゃくさつ」。' },
            { text: 'やっぴゃくさつ', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'はちびゃくさつ', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八百」促音+半濁音化。', trapExplanation: '這是陷阱題。', relatedRules: ['八百的音變'] },
        sourceItem: { value: 800, kanji: '八百冊', reading: 'はっぴゃくさつ' }
    },
    {
        id: 'num_hundreds_extra_30', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '詢問人數', stem_zh: '詢問人數',
        dialogue: { speakerA: '観客は何人ですか？', speakerB: '＿＿人です。（八百八十八人）' },
        options: [
            { text: 'はっぴゃくはちじゅうはちにん', isCorrect: true, reason: '正確！「八百八十八人」。' },
            { text: 'はちひゃくはちじゅうはちにん', isCorrect: false, reason: '「八百」促音+半濁音化。' },
            { text: 'やっぴゃくやじゅうやにん', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'はちびゃくはちじゅうはちにん', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八百」促音+半濁音化。', relatedRules: ['八百的音變', '人數的讀法'] },
        sourceItem: { value: 888, kanji: '八百八十八人', reading: 'はっぴゃくはちじゅうはちにん' }
    },
    {
        id: 'num_hundreds_extra_31', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「九百九十」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「九百九十」的正確讀音是？',
        options: [
            { text: 'きゅうひゃくきゅうじゅう', isCorrect: true, reason: '正確！「九百九十」讀「きゅうひゃくきゅうじゅう」。' },
            { text: 'くひゃくくじゅう', isCorrect: false, reason: '為避諱「苦」，多用「きゅう」。' },
            { text: 'きゅうびゃくきゅうじゅう', isCorrect: false, reason: '「九百」不濁音化。' },
            { text: 'ここひゃくここじゅう', isCorrect: false, reason: '「ここ」不是「九」的讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九百九十」讀「きゅうひゃくきゅうじゅう」。', relatedRules: ['數字組合的讀法'] },
        sourceItem: { value: 990, kanji: '九百九十', reading: 'きゅうひゃくきゅうじゅう' }
    },

    // ===== 比較題與陷阱題 =====
    {
        id: 'num_hundreds_compare_1', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '以下哪個說法正確？', stem_zh: '以下哪個說法正確？',
        options: [
            { text: '100-900中只有300、600、800有音變', isCorrect: true, reason: '正確！其他百位數無音變。' },
            { text: '所有百位數都有音變', isCorrect: false, reason: '錯誤，只有3個有音變。' },
            { text: '所有百位數都沒有音變', isCorrect: false, reason: '錯誤，300/600/800有音變。' },
            { text: '只有300有音變', isCorrect: false, reason: '錯誤，600/800也有音變。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '300濁音化，600/800促音+半濁音化。', trapExplanation: '這是陷阱題，測試百位數音變規則。', relatedRules: ['百的音變規則'] },
        sourceItem: { value: 0, kanji: '百位數', reading: '音變規則' }
    },
    {
        id: 'num_hundreds_compare_2', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '300的音變類型是？', stem_zh: '300的音變類型是？',
        options: [
            { text: '濁音化：ひゃく→びゃく', isCorrect: true, reason: '正確！「三」的撥音後濁音化。' },
            { text: '促音化：ひゃく→っひゃく', isCorrect: false, reason: '錯誤，300是濁音化。' },
            { text: '半濁音化：ひゃく→ぴゃく', isCorrect: false, reason: '錯誤，300是濁音化。' },
            { text: '沒有音變', isCorrect: false, reason: '錯誤，300有濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三」的撥音「ん」後「ひ」濁音化為「び」。', trapExplanation: '這是陷阱題。', relatedRules: ['三引發的濁音化'] },
        sourceItem: { value: 300, kanji: '三百', reading: 'さんびゃく' }
    },
    {
        id: 'num_hundreds_compare_3', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '600和800的音變類型是？', stem_zh: '600和800的音變類型是？',
        options: [
            { text: '促音+半濁音化：ろく→ろっ、ひゃく→ぴゃく', isCorrect: true, reason: '正確！「六」「八」促音化，「ひ」半濁音化。' },
            { text: '只有濁音化', isCorrect: false, reason: '錯誤，600/800是促音+半濁音化。' },
            { text: '只有促音化', isCorrect: false, reason: '錯誤，還有半濁音化。' },
            { text: '沒有音變', isCorrect: false, reason: '錯誤，600/800有音變。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六」「八」促音化，「ひ」半濁音化為「ぴ」。', trapExplanation: '這是陷阱題。', relatedRules: ['六/八引發の促音+半濁音'] },
        sourceItem: { value: 0, kanji: '六百/八百', reading: 'ろっぴゃく/はっぴゃく' }
    },
    {
        id: 'num_hundreds_compare_4', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '以下哪個百位數讀法錯誤？', stem_zh: '以下哪個百位數讀法錯誤？',
        options: [
            { text: '200(にひゃく)', isCorrect: false, reason: '這是正確的讀法。' },
            { text: '400(よんひゃく)', isCorrect: false, reason: '這是正確的讀法。' },
            { text: '600(ろくひゃく)', isCorrect: true, reason: '錯誤！應是「ろっぴゃく」。' },
            { text: '900(きゅうひゃく)', isCorrect: false, reason: '這是正確的讀法。' }
        ],
        correctIndex: 2,
        explanation: { correctRule: '600讀「ろっぴゃく」，有促音+半濁音化。', relatedRules: ['六百的音變'] },
        sourceItem: { value: 600, kanji: '六百', reading: 'ろっぴゃく' }
    },

    // ===== 綜合複習題 =====
    {
        id: 'num_hundreds_review_1', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '百位數的基本讀法是？', stem_zh: '百位數的基本讀法是？',
        options: [
            { text: '數字音讀+「ひゃく」，部分有音變', isCorrect: true, reason: '正確！這是百位數的基本規則。' },
            { text: '數字訓讀+「ひゃく」', isCorrect: false, reason: '錯誤，用音讀。' },
            { text: '全部無音變', isCorrect: false, reason: '錯誤，300/600/800有音變。' },
            { text: '全部有音變', isCorrect: false, reason: '錯誤，只有3個有音變。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '百位數使用音讀組合，300/600/800有音變。', relatedRules: ['百位數的基本規則'] },
        sourceItem: { value: 0, kanji: '百位數', reading: '基本規則' }
    },
    {
        id: 'num_hundreds_review_2', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「百」單獨使用時讀什麼？', stem_zh: '「百」單獨使用時讀什麼？',
        options: [
            { text: 'ひゃく（通常省略「いち」）', isCorrect: true, reason: '正確！100通常讀「ひゃく」。' },
            { text: '必須讀「いちひゃく」', isCorrect: false, reason: '錯誤，通常省略。' },
            { text: '讀「もも」', isCorrect: false, reason: '錯誤，「もも」是桃子。' },
            { text: '讀「びゃく」', isCorrect: false, reason: '錯誤，單獨使用不濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '100通常讀「ひゃく」，省略「いち」。', relatedRules: ['百の省略規則'] },
        sourceItem: { value: 100, kanji: '百', reading: 'ひゃく' }
    },
    {
        id: 'num_hundreds_review_3', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '以下哪個說法是正確的？', stem_zh: '以下哪個說法是正確的？',
        options: [
            { text: '百位數音變規則與十位數、千位數的規則相似', isCorrect: true, reason: '正確！都遵循促音/濁音/半濁音規則。' },
            { text: '百位數音變規則是獨特的', isCorrect: false, reason: '錯誤，規則有共通性。' },
            { text: '百位數沒有音變規則', isCorrect: false, reason: '錯誤，有音變規則。' },
            { text: '每個百位數都有不同的規則', isCorrect: false, reason: '錯誤，規則有規律可循。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '日語數字音變有共通規律：撥音後濁音化，促音後半濁音化。', relatedRules: ['數字音變の共通規則'] },
        sourceItem: { value: 0, kanji: '數字音變', reading: '共通規則' }
    },
    {
        id: 'num_hundreds_extra_32', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '入場料は＿＿円です。（一百圓）', stem_zh: '入場費是一百日圓。',
        options: [
            { text: 'ひゃくえん', isCorrect: true, reason: '正確！「百円」讀「ひゃくえん」。' },
            { text: 'いちひゃくえん', isCorrect: false, reason: '通常省略「いち」。' },
            { text: 'もえん', isCorrect: false, reason: '「百」不讀「も」。' },
            { text: 'ひゃっえん', isCorrect: false, reason: '「百」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「百円」通常省略「いち」。', relatedRules: ['金額的讀法'] },
        sourceItem: { value: 100, kanji: '百円', reading: 'ひゃくえん' }
    },
    {
        id: 'num_hundreds_extra_33', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '詢問價格', stem_zh: '詢問價格',
        dialogue: { speakerA: '切手はいくらですか？', speakerB: '＿＿円です。（八十四圓）' },
        options: [
            { text: 'はちじゅうよんえん', isCorrect: true, reason: '正確！「八十四円」讀「はちじゅうよんえん」。' },
            { text: 'はちじゅうしえん', isCorrect: false, reason: '避諱「死」，多用「よん」。' },
            { text: 'やじゅうよんえん', isCorrect: false, reason: '金額使用音讀。' },
            { text: 'はっじゅうよんえん', isCorrect: false, reason: '「八十」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八十四円」讀「はちじゅうよんえん」。', relatedRules: ['金額的讀法'] },
        sourceItem: { value: 84, kanji: '八十四円', reading: 'はちじゅうよんえん' }
    },
    {
        id: 'num_hundreds_extra_34', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「百十」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「百十」的正確讀音是？',
        options: [
            { text: 'ひゃくじゅう', isCorrect: true, reason: '正確！「百十」讀「ひゃくじゅう」。' },
            { text: 'いちひゃくじゅう', isCorrect: false, reason: '通常省略「いち」。' },
            { text: 'ひゃくとお', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'もじゅう', isCorrect: false, reason: '「百」不讀「も」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「百十」讀「ひゃくじゅう」。', relatedRules: ['數字組合的讀法'] },
        sourceItem: { value: 110, kanji: '百十', reading: 'ひゃくじゅう' }
    },
    {
        id: 'num_hundreds_extra_35', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '體重是＿＿キロです。（六十五公斤）', stem_zh: '體重是六十五公斤。',
        options: [
            { text: 'ろくじゅうごキロ', isCorrect: true, reason: '正確！「六十五キロ」讀「ろくじゅうごキロ」。' },
            { text: 'むじゅうごキロ', isCorrect: false, reason: '重量使用音讀。' },
            { text: 'ろくじゅっごキロ', isCorrect: false, reason: '「六十五」不促音化。' },
            { text: 'ろっじゅうごキロ', isCorrect: false, reason: '「六十」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六十五キロ」讀「ろくじゅうごキロ」。', relatedRules: ['重量的讀法'] },
        sourceItem: { value: 65, kanji: '六十五キロ', reading: 'ろくじゅうごキロ' }
    },
    {
        id: 'num_hundreds_extra_36', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: true,
        stem: '詢問金額', stem_zh: '詢問金額',
        dialogue: { speakerA: 'このケーキはいくらですか？', speakerB: '＿＿円です。（三百八十圓）' },
        options: [
            { text: 'さんひゃくはちじゅうえん', isCorrect: false, reason: '陷阱！「三百」濁音化。' },
            { text: 'さんびゃくはちじゅうえん', isCorrect: true, reason: '正確！「三百八十円」讀「さんびゃくはちじゅうえん」。' },
            { text: 'みひゃくやじゅうえん', isCorrect: false, reason: '金額使用音讀。' },
            { text: 'さんぴゃくはちじゅうえん', isCorrect: false, reason: '應是濁音「び」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三百」濁音化為「さんびゃく」。', trapExplanation: '這是陷阱題。', relatedRules: ['三百的音變'] },
        sourceItem: { value: 380, kanji: '三百八十円', reading: 'さんびゃくはちじゅうえん' }
    },
    {
        id: 'num_hundreds_extra_37', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「二百二十二」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「二百二十二」的正確讀音是？',
        options: [
            { text: 'にひゃくにじゅうに', isCorrect: true, reason: '正確！「二百二十二」讀「にひゃくにじゅうに」。' },
            { text: 'ふたひゃくふたじゅうふた', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'にびゃくにじゅうに', isCorrect: false, reason: '「二百」不濁音化。' },
            { text: 'にっぴゃくにじゅうに', isCorrect: false, reason: '「二」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二百二十二」讀「にひゃくにじゅうに」。', relatedRules: ['數字組合的讀法'] },
        sourceItem: { value: 222, kanji: '二百二十二', reading: 'にひゃくにじゅうに' }
    },
    {
        id: 'num_hundreds_extra_38', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '飛行時間是＿＿分です。（九十分鐘）', stem_zh: '飛行時間是九十分鐘。',
        options: [
            { text: 'きゅうじゅっぷん', isCorrect: true, reason: '正確！「九十分」讀「きゅうじゅっぷん」。' },
            { text: 'きゅうじゅうふん', isCorrect: false, reason: '「十」+「分」促音+半濁音化。' },
            { text: 'くじゅっぷん', isCorrect: false, reason: '為避諱「苦」，多用「きゅう」。' },
            { text: 'ここじゅっぷん', isCorrect: false, reason: '「ここ」不是「九」的讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九十分」讀「きゅうじゅっぷん」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 90, kanji: '九十分', reading: 'きゅうじゅっぷん' }
    },
    {
        id: 'num_hundreds_extra_39', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '詢問人數', stem_zh: '詢問人數',
        dialogue: { speakerA: 'クラスは何人ですか？', speakerB: '＿＿人です。（三十五人）' },
        options: [
            { text: 'さんじゅうごにん', isCorrect: true, reason: '正確！「三十五人」讀「さんじゅうごにん」。' },
            { text: 'みじゅうごにん', isCorrect: false, reason: '人數使用音讀。' },
            { text: 'さんじゅっごにん', isCorrect: false, reason: '「三十五」不促音化。' },
            { text: 'さんじゅういつにん', isCorrect: false, reason: '「五」讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三十五人」讀「さんじゅうごにん」。', relatedRules: ['人數的讀法'] },
        sourceItem: { value: 35, kanji: '三十五人', reading: 'さんじゅうごにん' }
    },
    {
        id: 'num_hundreds_extra_40', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '以下哪個說法正確？', stem_zh: '以下哪個說法正確？',
        options: [
            { text: '日語百位數遵循系統性的音變規則', isCorrect: true, reason: '正確！這是日語數字的特點。' },
            { text: '百位數音變是隨機的', isCorrect: false, reason: '錯誤，有規律可循。' },
            { text: '所有百位數讀法都一樣', isCorrect: false, reason: '錯誤，有音變差異。' },
            { text: '百位數不需要學習', isCorrect: false, reason: '錯誤，百位數很常用。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '日語數字有系統性的音變規則。', relatedRules: ['數字系統概述'] },
        sourceItem: { value: 0, kanji: '百位數系統', reading: '總結' }
    },

    // ===== 補充題目：達到100題 =====
    {
        id: 'num_hundreds_extra_41', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '彼の身長は＿＿センチです。（一百七十五公分）', stem_zh: '他的身高是一百七十五公分。',
        options: [
            { text: 'ひゃくななじゅうご', isCorrect: true, reason: '正確！「百七十五」讀「ひゃくななじゅうご」。' },
            { text: 'いちひゃくしちじゅうご', isCorrect: false, reason: '省略「いち」，且多用「なな」。' },
            { text: 'ひゃくなのじゅうご', isCorrect: false, reason: '「七十」讀「ななじゅう」。' },
            { text: 'もななじゅうご', isCorrect: false, reason: '「百」不讀「も」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '身高「百七十五センチ」讀「ひゃくななじゅうごセンチ」。', relatedRules: ['身高的讀法'] },
        sourceItem: { value: 175, kanji: '百七十五', reading: 'ひゃくななじゅうご' }
    },
    {
        id: 'num_hundreds_extra_42', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: true,
        stem: '詢問金額', stem_zh: '詢問金額',
        dialogue: { speakerA: 'この傘はいくらですか？', speakerB: '＿＿円です。（六百五十圓）' },
        options: [
            { text: 'ろくひゃくごじゅうえん', isCorrect: false, reason: '陷阱！「六百」促音+半濁音化。' },
            { text: 'ろっぴゃくごじゅうえん', isCorrect: true, reason: '正確！「六百五十円」。' },
            { text: 'むひゃくごじゅうえん', isCorrect: false, reason: '金額使用音讀。' },
            { text: 'ろくびゃくごじゅうえん', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「六百」促音+半濁音化。', trapExplanation: '這是陷阱題。', relatedRules: ['六百的音變'] },
        sourceItem: { value: 650, kanji: '六百五十円', reading: 'ろっぴゃくごじゅうえん' }
    },
    {
        id: 'num_hundreds_extra_43', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「四百四十四」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「四百四十四」的正確讀音是？',
        options: [
            { text: 'よんひゃくよんじゅうよん', isCorrect: true, reason: '正確！「四百四十四」讀「よんひゃくよんじゅうよん」。' },
            { text: 'しひゃくしじゅうし', isCorrect: false, reason: '避諱「死」，多用「よん」。' },
            { text: 'よんびゃくよんじゅうよん', isCorrect: false, reason: '「四百」不濁音化。' },
            { text: 'よっぴゃくよんじゅうよん', isCorrect: false, reason: '「四」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四百四十四」讀「よんひゃくよんじゅうよん」。', relatedRules: ['四の避諱讀法'] },
        sourceItem: { value: 444, kanji: '四百四十四', reading: 'よんひゃくよんじゅうよん' }
    },
    {
        id: 'num_hundreds_extra_44', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '合計は＿＿円です。（一百九十八圓）', stem_zh: '合計一百九十八日圓。',
        options: [
            { text: 'ひゃくきゅうじゅうはちえん', isCorrect: true, reason: '正確！「百九十八円」讀「ひゃくきゅうじゅうはちえん」。' },
            { text: 'いちひゃくくじゅうはちえん', isCorrect: false, reason: '省略「いち」，且「九」多用「きゅう」。' },
            { text: 'ひゃくここのじゅうやえん', isCorrect: false, reason: '金額使用音讀。' },
            { text: 'もきゅうじゅうはちえん', isCorrect: false, reason: '「百」不讀「も」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「百九十八円」讀「ひゃくきゅうじゅうはちえん」。', relatedRules: ['金額的讀法'] },
        sourceItem: { value: 198, kanji: '百九十八円', reading: 'ひゃくきゅうじゅうはちえん' }
    },
    {
        id: 'num_hundreds_extra_45', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '詢問數量', stem_zh: '詢問數量',
        dialogue: { speakerA: '何ページ読みましたか？', speakerB: '＿＿ページ読みました。（二百頁）' },
        options: [
            { text: 'にひゃくページ', isCorrect: true, reason: '正確！「二百ページ」讀「にひゃくページ」。' },
            { text: 'ふたひゃくページ', isCorrect: false, reason: '頁數使用音讀。' },
            { text: 'にびゃくページ', isCorrect: false, reason: '「二百」不濁音化。' },
            { text: 'にっぴゃくページ', isCorrect: false, reason: '「二」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二百ページ」讀「にひゃくページ」。', relatedRules: ['頁數的讀法'] },
        sourceItem: { value: 200, kanji: '二百', reading: 'にひゃく' }
    },
    {
        id: 'num_hundreds_extra_46', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「八百八十」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「八百八十」的正確讀音是？',
        options: [
            { text: 'はちひゃくはちじゅう', isCorrect: false, reason: '陷阱！「八百」促音+半濁音化。' },
            { text: 'はっぴゃくはちじゅう', isCorrect: true, reason: '正確！「八百八十」讀「はっぴゃくはちじゅう」。' },
            { text: 'やっぴゃくやじゅう', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'はちびゃくはちじゅう', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八百」促音+半濁音化。', trapExplanation: '這是陷阱題。', relatedRules: ['八百的音變'] },
        sourceItem: { value: 880, kanji: '八百八十', reading: 'はっぴゃくはちじゅう' }
    },
    {
        id: 'num_hundreds_extra_47', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '駐車場は＿＿台分です。（五百台）', stem_zh: '停車場有五百個車位。',
        options: [
            { text: 'ごひゃくだいぶん', isCorrect: true, reason: '正確！「五百台分」讀「ごひゃくだいぶん」。' },
            { text: 'いつひゃくだいぶん', isCorrect: false, reason: '數量使用音讀。' },
            { text: 'ごびゃくだいぶん', isCorrect: false, reason: '「五百」不濁音化。' },
            { text: 'ごっぴゃくだいぶん', isCorrect: false, reason: '「五」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五百台分」讀「ごひゃくだいぶん」。', relatedRules: ['數量的讀法'] },
        sourceItem: { value: 500, kanji: '五百台分', reading: 'ごひゃくだいぶん' }
    },
    {
        id: 'num_hundreds_extra_48', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '詢問金額', stem_zh: '詢問金額',
        dialogue: { speakerA: 'バス代はいくらですか？', speakerB: '＿＿円です。（二百三十圓）' },
        options: [
            { text: 'にひゃくさんじゅうえん', isCorrect: true, reason: '正確！「二百三十円」讀「にひゃくさんじゅうえん」。' },
            { text: 'ふたひゃくみじゅうえん', isCorrect: false, reason: '金額使用音讀。' },
            { text: 'にびゃくさんじゅうえん', isCorrect: false, reason: '「二百」不濁音化。' },
            { text: 'にっぴゃくさんじゅうえん', isCorrect: false, reason: '「二」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二百三十円」讀「にひゃくさんじゅうえん」。', relatedRules: ['金額的讀法'] },
        sourceItem: { value: 230, kanji: '二百三十円', reading: 'にひゃくさんじゅうえん' }
    },
    {
        id: 'num_hundreds_extra_49', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「三百三十三」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「三百三十三」的正確讀音是？',
        options: [
            { text: 'さんひゃくさんじゅうさん', isCorrect: false, reason: '陷阱！「三百」濁音化。' },
            { text: 'さんびゃくさんじゅうさん', isCorrect: true, reason: '正確！「三百三十三」讀「さんびゃくさんじゅうさん」。' },
            { text: 'みひゃくみじゅうみ', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'さんぴゃくさんじゅうさん', isCorrect: false, reason: '應是濁音「び」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三百」濁音化為「さんびゃく」。', trapExplanation: '這是陷阱題。', relatedRules: ['三百的音變'] },
        sourceItem: { value: 333, kanji: '三百三十三', reading: 'さんびゃくさんじゅうさん' }
    },
    {
        id: 'num_hundreds_extra_50', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '試験時間は＿＿分です。（一百八十分鐘）', stem_zh: '考試時間是一百八十分鐘。',
        options: [
            { text: 'ひゃくはちじゅっぷん', isCorrect: true, reason: '正確！「百八十分」讀「ひゃくはちじゅっぷん」。' },
            { text: 'いちひゃくはちじゅっぷん', isCorrect: false, reason: '通常省略「いち」。' },
            { text: 'ひゃくやじゅっぷん', isCorrect: false, reason: '分鐘使用音讀。' },
            { text: 'もはちじゅっぷん', isCorrect: false, reason: '「百」不讀「も」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「百八十分」讀「ひゃくはちじゅっぷん」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 180, kanji: '百八十分', reading: 'ひゃくはちじゅっぷん' }
    },
    {
        id: 'num_hundreds_extra_51', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: true,
        stem: '詢問人數', stem_zh: '詢問人數',
        dialogue: { speakerA: '社員は何人ですか？', speakerB: '＿＿人です。（三百人）' },
        options: [
            { text: 'さんひゃくにん', isCorrect: false, reason: '陷阱！「三百」濁音化。' },
            { text: 'さんびゃくにん', isCorrect: true, reason: '正確！「三百人」讀「さんびゃくにん」。' },
            { text: 'みひゃくにん', isCorrect: false, reason: '人數使用音讀。' },
            { text: 'さんぴゃくにん', isCorrect: false, reason: '應是濁音「び」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三百」濁音化為「さんびゃく」。', trapExplanation: '這是陷阱題。', relatedRules: ['三百的音變'] },
        sourceItem: { value: 300, kanji: '三百人', reading: 'さんびゃくにん' }
    },
    {
        id: 'num_hundreds_extra_52', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「七百五十」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「七百五十」的正確讀音是？',
        options: [
            { text: 'ななひゃくごじゅう', isCorrect: true, reason: '正確！「七百五十」讀「ななひゃくごじゅう」。' },
            { text: 'しちひゃくごじゅう', isCorrect: false, reason: '為避免混淆，多用「なな」。' },
            { text: 'ななびゃくごじゅう', isCorrect: false, reason: '「七百」不濁音化。' },
            { text: 'ななぴゃくごじゅう', isCorrect: false, reason: '「七百」不半濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七百五十」讀「ななひゃくごじゅう」。', relatedRules: ['七の避免混淆讀法'] },
        sourceItem: { value: 750, kanji: '七百五十', reading: 'ななひゃくごじゅう' }
    },
    {
        id: 'num_hundreds_extra_53', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '距離是＿＿メートルです。（四百公尺）', stem_zh: '距離是四百公尺。',
        options: [
            { text: 'よんひゃくメートル', isCorrect: true, reason: '正確！「四百メートル」讀「よんひゃくメートル」。' },
            { text: 'しひゃくメートル', isCorrect: false, reason: '避諱「死」，多用「よん」。' },
            { text: 'よんびゃくメートル', isCorrect: false, reason: '「四百」不濁音化。' },
            { text: 'よっぴゃくメートル', isCorrect: false, reason: '「四」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四百メートル」讀「よんひゃくメートル」。', relatedRules: ['距離的讀法'] },
        sourceItem: { value: 400, kanji: '四百', reading: 'よんひゃく' }
    },
    {
        id: 'num_hundreds_extra_54', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '詢問金額', stem_zh: '詢問金額',
        dialogue: { speakerA: 'タクシー代はいくらですか？', speakerB: '＿＿円です。（九百五十圓）' },
        options: [
            { text: 'きゅうひゃくごじゅうえん', isCorrect: true, reason: '正確！「九百五十円」讀「きゅうひゃくごじゅうえん」。' },
            { text: 'くひゃくごじゅうえん', isCorrect: false, reason: '為避諱「苦」，多用「きゅう」。' },
            { text: 'きゅうびゃくごじゅうえん', isCorrect: false, reason: '「九百」不濁音化。' },
            { text: 'きゅうぴゃくごじゅうえん', isCorrect: false, reason: '「九百」不半濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九百五十円」讀「きゅうひゃくごじゅうえん」。', relatedRules: ['金額的讀法'] },
        sourceItem: { value: 950, kanji: '九百五十円', reading: 'きゅうひゃくごじゅうえん' }
    },
    {
        id: 'num_hundreds_extra_55', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「六百六」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「六百六」的正確讀音是？',
        options: [
            { text: 'ろくひゃくろく', isCorrect: false, reason: '陷阱！「六百」促音+半濁音化。' },
            { text: 'ろっぴゃくろく', isCorrect: true, reason: '正確！「六百六」讀「ろっぴゃくろく」。' },
            { text: 'むひゃくむ', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'ろくびゃくろく', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「六百」促音+半濁音化。', trapExplanation: '這是陷阱題。', relatedRules: ['六百的音變'] },
        sourceItem: { value: 606, kanji: '六百六', reading: 'ろっぴゃくろく' }
    },
    {
        id: 'num_hundreds_extra_56', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '彼女の体重は＿＿キロです。（五十二公斤）', stem_zh: '她的體重是五十二公斤。',
        options: [
            { text: 'ごじゅうにキロ', isCorrect: true, reason: '正確！「五十二キロ」讀「ごじゅうにキロ」。' },
            { text: 'いつじゅうふたキロ', isCorrect: false, reason: '重量使用音讀。' },
            { text: 'ごじゅっにキロ', isCorrect: false, reason: '「五十二」不促音化。' },
            { text: 'こじゅうにキロ', isCorrect: false, reason: '「五」讀「ご」不是「こ」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五十二キロ」讀「ごじゅうにキロ」。', relatedRules: ['重量的讀法'] },
        sourceItem: { value: 52, kanji: '五十二キロ', reading: 'ごじゅうにキロ' }
    },
    {
        id: 'num_hundreds_extra_57', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: true,
        stem: '詢問金額', stem_zh: '詢問金額',
        dialogue: { speakerA: 'この靴はいくらですか？', speakerB: '＿＿円です。（八百圓）' },
        options: [
            { text: 'はちひゃくえん', isCorrect: false, reason: '陷阱！「八百」促音+半濁音化。' },
            { text: 'はっぴゃくえん', isCorrect: true, reason: '正確！「八百円」讀「はっぴゃくえん」。' },
            { text: 'やひゃくえん', isCorrect: false, reason: '金額使用音讀。' },
            { text: 'はちびゃくえん', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八百」促音+半濁音化。', trapExplanation: '這是陷阱題。', relatedRules: ['八百的音變'] },
        sourceItem: { value: 800, kanji: '八百円', reading: 'はっぴゃくえん' }
    },
    {
        id: 'num_hundreds_extra_58', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「百一」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「百一」的正確讀音是？',
        options: [
            { text: 'ひゃくいち', isCorrect: true, reason: '正確！「百一」讀「ひゃくいち」。' },
            { text: 'いちひゃくいち', isCorrect: false, reason: '通常省略「いち」。' },
            { text: 'ひゃくひと', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'もいち', isCorrect: false, reason: '「百」不讀「も」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「百一」讀「ひゃくいち」。', relatedRules: ['數字組合的讀法'] },
        sourceItem: { value: 101, kanji: '百一', reading: 'ひゃくいち' }
    },
    {
        id: 'num_hundreds_extra_59', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '高さは＿＿メートルです。（一百公尺）', stem_zh: '高度是一百公尺。',
        options: [
            { text: 'ひゃくメートル', isCorrect: true, reason: '正確！「百メートル」讀「ひゃくメートル」。' },
            { text: 'いちひゃくメートル', isCorrect: false, reason: '通常省略「いち」。' },
            { text: 'ひゃっくメートル', isCorrect: false, reason: '「百」不促音化。' },
            { text: 'もメートル', isCorrect: false, reason: '「百」不讀「も」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「百メートル」讀「ひゃくメートル」。', relatedRules: ['距離的讀法'] },
        sourceItem: { value: 100, kanji: '百', reading: 'ひゃく' }
    },
    {
        id: 'num_hundreds_extra_60', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '詢問數量', stem_zh: '詢問數量',
        dialogue: { speakerA: '何冊買いましたか？', speakerB: '＿＿冊です。（一百本）' },
        options: [
            { text: 'ひゃくさつ', isCorrect: true, reason: '正確！「百冊」讀「ひゃくさつ」。' },
            { text: 'いちひゃくさつ', isCorrect: false, reason: '通常省略「いち」。' },
            { text: 'ひゃっさつ', isCorrect: false, reason: '「百」不促音化。' },
            { text: 'もさつ', isCorrect: false, reason: '「百」不讀「も」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「百冊」讀「ひゃくさつ」。', relatedRules: ['冊的讀法'] },
        sourceItem: { value: 100, kanji: '百冊', reading: 'ひゃくさつ' }
    },
    {
        id: 'num_hundreds_extra_61', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「九百一」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「九百一」的正確讀音是？',
        options: [
            { text: 'きゅうひゃくいち', isCorrect: true, reason: '正確！「九百一」讀「きゅうひゃくいち」。' },
            { text: 'くひゃくいち', isCorrect: false, reason: '為避諱「苦」，多用「きゅう」。' },
            { text: 'きゅうびゃくいち', isCorrect: false, reason: '「九百」不濁音化。' },
            { text: 'ここひゃくひと', isCorrect: false, reason: '組合數字使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九百一」讀「きゅうひゃくいち」。', relatedRules: ['九の避諱讀法'] },
        sourceItem: { value: 901, kanji: '九百一', reading: 'きゅうひゃくいち' }
    },
    {
        id: 'num_hundreds_extra_62', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: true,
        stem: '生徒數是＿＿人です。（六百五十人）', stem_zh: '學生數是六百五十人。',
        options: [
            { text: 'ろくひゃくごじゅうにん', isCorrect: false, reason: '陷阱！「六百」促音+半濁音化。' },
            { text: 'ろっぴゃくごじゅうにん', isCorrect: true, reason: '正確！「六百五十人」。' },
            { text: 'むひゃくごじゅうにん', isCorrect: false, reason: '人數使用音讀。' },
            { text: 'ろくびゃくごじゅうにん', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「六百」促音+半濁音化。', trapExplanation: '這是陷阱題。', relatedRules: ['六百的音變'] },
        sourceItem: { value: 650, kanji: '六百五十人', reading: 'ろっぴゃくごじゅうにん' }
    },
    {
        id: 'num_hundreds_extra_63', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '詢問價格', stem_zh: '詢問價格',
        dialogue: { speakerA: 'このお弁当はいくらですか？', speakerB: '＿＿円です。（四百九十八圓）' },
        options: [
            { text: 'よんひゃくきゅうじゅうはちえん', isCorrect: true, reason: '正確！「四百九十八円」。' },
            { text: 'しひゃくくじゅうはちえん', isCorrect: false, reason: '避諱「死」「苦」，多用「よん」「きゅう」。' },
            { text: 'よんびゃくきゅうじゅうはちえん', isCorrect: false, reason: '「四百」不濁音化。' },
            { text: 'よっぴゃくきゅうじゅうはちえん', isCorrect: false, reason: '「四」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四百九十八円」讀「よんひゃくきゅうじゅうはちえん」。', relatedRules: ['金額的讀法'] },
        sourceItem: { value: 498, kanji: '四百九十八円', reading: 'よんひゃくきゅうじゅうはちえん' }
    },
    {
        id: 'num_hundreds_extra_64', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「八百一」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「八百一」的正確讀音是？',
        options: [
            { text: 'はちひゃくいち', isCorrect: false, reason: '陷阱！「八百」促音+半濁音化。' },
            { text: 'はっぴゃくいち', isCorrect: true, reason: '正確！「八百一」讀「はっぴゃくいち」。' },
            { text: 'やひゃくひと', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'はちびゃくいち', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八百」促音+半濁音化。', trapExplanation: '這是陷阱題。', relatedRules: ['八百的音變'] },
        sourceItem: { value: 801, kanji: '八百一', reading: 'はっぴゃくいち' }
    },
    {
        id: 'num_hundreds_extra_65', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '價格是＿＿円です。（二百九十九圓）', stem_zh: '價格是二百九十九日圓。',
        options: [
            { text: 'にひゃくきゅうじゅうきゅうえん', isCorrect: true, reason: '正確！「二百九十九円」。' },
            { text: 'ふたひゃくここのじゅうここのえん', isCorrect: false, reason: '金額使用音讀。' },
            { text: 'にびゃくきゅうじゅうきゅうえん', isCorrect: false, reason: '「二百」不濁音化。' },
            { text: 'にひゃくくじゅうくえん', isCorrect: false, reason: '為避諱「苦」，多用「きゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二百九十九円」讀「にひゃくきゅうじゅうきゅうえん」。', relatedRules: ['金額的讀法'] },
        sourceItem: { value: 299, kanji: '二百九十九円', reading: 'にひゃくきゅうじゅうきゅうえん' }
    },
    {
        id: 'num_hundreds_extra_66', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: true,
        stem: '詢問距離', stem_zh: '詢問距離',
        dialogue: { speakerA: '空港まで何キロですか？', speakerB: '＿＿キロです。（三百公里）' },
        options: [
            { text: 'さんひゃくキロ', isCorrect: false, reason: '陷阱！「三百」濁音化。' },
            { text: 'さんびゃくキロ', isCorrect: true, reason: '正確！「三百キロ」讀「さんびゃくキロ」。' },
            { text: 'みひゃくキロ', isCorrect: false, reason: '距離使用音讀。' },
            { text: 'さんぴゃくキロ', isCorrect: false, reason: '應是濁音「び」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三百」濁音化為「さんびゃく」。', trapExplanation: '這是陷阱題。', relatedRules: ['三百的音變'] },
        sourceItem: { value: 300, kanji: '三百キロ', reading: 'さんびゃくキロ' }
    },

    // ===== 追加100題（67-166）=====
    {
        id: 'num_hundreds_extra_67', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「四百」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「四百」的正確讀音是？',
        options: [
            { text: 'よんひゃく', isCorrect: true, reason: '正確！「四百」讀「よんひゃく」。' },
            { text: 'しひゃく', isCorrect: false, reason: '「四」避諱讀「よん」。' },
            { text: 'よんびゃく', isCorrect: false, reason: '「四百」不濁音化。' },
            { text: 'よんぴゃく', isCorrect: false, reason: '「四百」不半濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四百」讀「よんひゃく」，無音變。', relatedRules: ['四百的讀法'] },
        sourceItem: { value: 400, kanji: '四百', reading: 'よんひゃく' }
    },
    {
        id: 'num_hundreds_extra_68', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '書籍價格是＿＿円。（五百二十）', stem_zh: '書籍價格是五百二十日圓。',
        options: [
            { text: 'ごひゃくにじゅう', isCorrect: true, reason: '正確！「五百二十」讀「ごひゃくにじゅう」。' },
            { text: 'いつひゃくにじゅう', isCorrect: false, reason: '用音讀「ご」。' },
            { text: 'ごびゃくにじゅう', isCorrect: false, reason: '「五百」不濁音化。' },
            { text: 'ごひゃくふたじゅう', isCorrect: false, reason: '用音讀「に」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五百二十」讀「ごひゃくにじゅう」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 520, kanji: '五百二十', reading: 'ごひゃくにじゅう' }
    },
    {
        id: 'num_hundreds_extra_69', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: true,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'このペンはいくらですか？', speakerB: '＿＿円です。（六百）' },
        options: [
            { text: 'ろくひゃく', isCorrect: false, reason: '陷阱！「六百」促音+半濁音化。' },
            { text: 'ろっぴゃく', isCorrect: true, reason: '正確！「六百」讀「ろっぴゃく」。' },
            { text: 'むひゃく', isCorrect: false, reason: '用音讀「ろく」。' },
            { text: 'ろくびゃく', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「六百」讀「ろっぴゃく」。', trapExplanation: '「六」在「百」前促音+半濁音化。', relatedRules: ['六百的音變'] },
        sourceItem: { value: 600, kanji: '六百', reading: 'ろっぴゃく' }
    },
    {
        id: 'num_hundreds_extra_70', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「七百」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「七百」的正確讀音是？',
        options: [
            { text: 'ななひゃく', isCorrect: true, reason: '正確！「七百」讀「ななひゃく」。' },
            { text: 'しちひゃく', isCorrect: false, reason: '「七百」讀「ななひゃく」更常見。' },
            { text: 'ななびゃく', isCorrect: false, reason: '「七百」不濁音化。' },
            { text: 'ななぴゃく', isCorrect: false, reason: '「七百」不半濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七百」讀「ななひゃく」，無音變。', relatedRules: ['七百的讀法'] },
        sourceItem: { value: 700, kanji: '七百', reading: 'ななひゃく' }
    },
    {
        id: 'num_hundreds_extra_71', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: true,
        stem: '電腦價格是＿＿円。（八百五十）', stem_zh: '電腦價格是八百五十日圓。',
        options: [
            { text: 'はちひゃくごじゅう', isCorrect: false, reason: '陷阱！「八百」促音+半濁音化。' },
            { text: 'はっぴゃくごじゅう', isCorrect: true, reason: '正確！「八百五十」讀「はっぴゃくごじゅう」。' },
            { text: 'やひゃくごじゅう', isCorrect: false, reason: '用音讀「はち」。' },
            { text: 'はちびゃくごじゅう', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八百」讀「はっぴゃく」。', trapExplanation: '「八」在「百」前促音+半濁音化。', relatedRules: ['八百的音變'] },
        sourceItem: { value: 850, kanji: '八百五十', reading: 'はっぴゃくごじゅう' }
    },
    {
        id: 'num_hundreds_extra_72', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '参加者は何人ですか？', speakerB: '＿＿人です。（九百）' },
        options: [
            { text: 'きゅうひゃく', isCorrect: true, reason: '正確！「九百」讀「きゅうひゃく」。' },
            { text: 'くひゃく', isCorrect: false, reason: '「九」讀「きゅう」更常見。' },
            { text: 'きゅうびゃく', isCorrect: false, reason: '「九百」不濁音化。' },
            { text: 'きゅうぴゃく', isCorrect: false, reason: '「九百」不半濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九百」讀「きゅうひゃく」，無音變。', relatedRules: ['九百的讀法'] },
        sourceItem: { value: 900, kanji: '九百', reading: 'きゅうひゃく' }
    },
    {
        id: 'num_hundreds_extra_73', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「一百」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「一百」的正確讀音是？',
        options: [
            { text: 'いちひゃく', isCorrect: false, reason: '陷阱！「一百」促音+半濁音化。' },
            { text: 'いっぴゃく', isCorrect: true, reason: '正確！「一百」讀「いっぴゃく」。' },
            { text: 'ひとひゃく', isCorrect: false, reason: '用音讀。' },
            { text: 'いちびゃく', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「一百」讀「いっぴゃく」。', trapExplanation: '「一」在「百」前促音+半濁音化。', relatedRules: ['一百的音變'] },
        sourceItem: { value: 100, kanji: '一百', reading: 'いっぴゃく' }
    },
    {
        id: 'num_hundreds_extra_74', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '價格是＿＿円。（二百三十四）', stem_zh: '價格是二百三十四日圓。',
        options: [
            { text: 'にひゃくさんじゅうよん', isCorrect: true, reason: '正確！「二百三十四」。' },
            { text: 'にびゃくさんじゅうよん', isCorrect: false, reason: '「二百」不濁音化。' },
            { text: 'にひゃくさんじゅうし', isCorrect: false, reason: '「四」讀「よん」。' },
            { text: 'ふたひゃくみじゅうよん', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二百三十四」讀「にひゃくさんじゅうよん」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 234, kanji: '二百三十四', reading: 'にひゃくさんじゅうよん' }
    },
    {
        id: 'num_hundreds_extra_75', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: true,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'これはいくらですか？', speakerB: '＿＿円です。（三百四十五）' },
        options: [
            { text: 'さんひゃくよんじゅうご', isCorrect: false, reason: '陷阱！「三百」濁音化。' },
            { text: 'さんびゃくよんじゅうご', isCorrect: true, reason: '正確！「三百四十五」。' },
            { text: 'みひゃくよじゅういつ', isCorrect: false, reason: '用音讀。' },
            { text: 'さんぴゃくよんじゅうご', isCorrect: false, reason: '應是濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三百」濁音化為「さんびゃく」。', trapExplanation: '「三」後「百」濁音化。', relatedRules: ['三百的音變'] },
        sourceItem: { value: 345, kanji: '三百四十五', reading: 'さんびゃくよんじゅうご' }
    },
    {
        id: 'num_hundreds_extra_76', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「四百五十六」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「四百五十六」的正確讀音是？',
        options: [
            { text: 'よんひゃくごじゅうろく', isCorrect: true, reason: '正確！「四百五十六」。' },
            { text: 'しひゃくごじゅうろく', isCorrect: false, reason: '「四」讀「よん」。' },
            { text: 'よんびゃくごじゅうろく', isCorrect: false, reason: '「四百」不濁音化。' },
            { text: 'よひゃくいつじゅうむ', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四百五十六」讀「よんひゃくごじゅうろく」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 456, kanji: '四百五十六', reading: 'よんひゃくごじゅうろく' }
    },
    {
        id: 'num_hundreds_extra_77', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '人數是＿＿人。（五百六十七）', stem_zh: '人數是五百六十七人。',
        options: [
            { text: 'ごひゃくろくじゅうなな', isCorrect: true, reason: '正確！「五百六十七」。' },
            { text: 'ごびゃくろくじゅうなな', isCorrect: false, reason: '「五百」不濁音化。' },
            { text: 'いつひゃくむじゅうなの', isCorrect: false, reason: '用音讀。' },
            { text: 'ごひゃくろくじゅうしち', isCorrect: false, reason: '「七」讀「なな」更常見。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五百六十七」讀「ごひゃくろくじゅうなな」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 567, kanji: '五百六十七', reading: 'ごひゃくろくじゅうなな' }
    },
    {
        id: 'num_hundreds_extra_78', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: true,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'この本はいくらですか？', speakerB: '＿＿円です。（六百七十八）' },
        options: [
            { text: 'ろくひゃくななじゅうはち', isCorrect: false, reason: '陷阱！「六百」促音+半濁音化。' },
            { text: 'ろっぴゃくななじゅうはち', isCorrect: true, reason: '正確！「六百七十八」。' },
            { text: 'むひゃくななじゅうはち', isCorrect: false, reason: '用音讀「ろく」。' },
            { text: 'ろくびゃくななじゅうはち', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「六百」讀「ろっぴゃく」。', trapExplanation: '「六」促音+半濁音化。', relatedRules: ['六百的音變'] },
        sourceItem: { value: 678, kanji: '六百七十八', reading: 'ろっぴゃくななじゅうはち' }
    },
    {
        id: 'num_hundreds_extra_79', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「七百八十九」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「七百八十九」的正確讀音是？',
        options: [
            { text: 'ななひゃくはちじゅうきゅう', isCorrect: true, reason: '正確！「七百八十九」。' },
            { text: 'しちひゃくはちじゅうく', isCorrect: false, reason: '「七」讀「なな」，「九」讀「きゅう」。' },
            { text: 'ななびゃくはちじゅうきゅう', isCorrect: false, reason: '「七百」不濁音化。' },
            { text: 'なのひゃくやじゅうここの', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七百八十九」讀「ななひゃくはちじゅうきゅう」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 789, kanji: '七百八十九', reading: 'ななひゃくはちじゅうきゅう' }
    },
    {
        id: 'num_hundreds_extra_80', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: true,
        stem: '商品價格是＿＿円。（八百九十）', stem_zh: '商品價格是八百九十日圓。',
        options: [
            { text: 'はちひゃくきゅうじゅう', isCorrect: false, reason: '陷阱！「八百」促音+半濁音化。' },
            { text: 'はっぴゃくきゅうじゅう', isCorrect: true, reason: '正確！「八百九十」。' },
            { text: 'やひゃくきゅうじゅう', isCorrect: false, reason: '用音讀「はち」。' },
            { text: 'はちびゃくくじゅう', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八百」讀「はっぴゃく」。', trapExplanation: '「八」促音+半濁音化。', relatedRules: ['八百的音變'] },
        sourceItem: { value: 890, kanji: '八百九十', reading: 'はっぴゃくきゅうじゅう' }
    },
    {
        id: 'num_hundreds_extra_81', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '何人参加しましたか？', speakerB: '＿＿人です。（九百十二）' },
        options: [
            { text: 'きゅうひゃくじゅうに', isCorrect: true, reason: '正確！「九百十二」。' },
            { text: 'くひゃくじゅうに', isCorrect: false, reason: '「九」讀「きゅう」。' },
            { text: 'きゅうびゃくじゅうに', isCorrect: false, reason: '「九百」不濁音化。' },
            { text: 'ここのひゃくとおに', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九百十二」讀「きゅうひゃくじゅうに」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 912, kanji: '九百十二', reading: 'きゅうひゃくじゅうに' }
    },
    {
        id: 'num_hundreds_extra_82', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「一百二十三」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「一百二十三」的正確讀音是？',
        options: [
            { text: 'いちひゃくにじゅうさん', isCorrect: false, reason: '陷阱！「一百」促音+半濁音化。' },
            { text: 'いっぴゃくにじゅうさん', isCorrect: true, reason: '正確！「一百二十三」。' },
            { text: 'ひゃくにじゅうさん', isCorrect: true, reason: '「百」可省略「一」。' },
            { text: 'ひとひゃくふたじゅうみ', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「一百」讀「いっぴゃく」或直接「ひゃく」。', trapExplanation: '「一」促音+半濁音化。', relatedRules: ['一百的音變'] },
        sourceItem: { value: 123, kanji: '一百二十三', reading: 'いっぴゃくにじゅうさん' }
    },
    {
        id: 'num_hundreds_extra_83', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '距離是＿＿米。（二百四十五）', stem_zh: '距離是二百四十五公尺。',
        options: [
            { text: 'にひゃくよんじゅうご', isCorrect: true, reason: '正確！「二百四十五」。' },
            { text: 'にびゃくよんじゅうご', isCorrect: false, reason: '「二百」不濁音化。' },
            { text: 'にひゃくしじゅうご', isCorrect: false, reason: '「四」讀「よん」。' },
            { text: 'ふたひゃくよじゅういつ', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二百四十五」讀「にひゃくよんじゅうご」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 245, kanji: '二百四十五', reading: 'にひゃくよんじゅうご' }
    },
    {
        id: 'num_hundreds_extra_84', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: true,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'このお菓子はいくらですか？', speakerB: '＿＿円です。（三百五十六）' },
        options: [
            { text: 'さんひゃくごじゅうろく', isCorrect: false, reason: '陷阱！「三百」濁音化。' },
            { text: 'さんびゃくごじゅうろく', isCorrect: true, reason: '正確！「三百五十六」。' },
            { text: 'みひゃくいつじゅうむ', isCorrect: false, reason: '用音讀。' },
            { text: 'さんぴゃくごじゅうろく', isCorrect: false, reason: '應是濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三百」濁音化為「さんびゃく」。', trapExplanation: '「三」後「百」濁音化。', relatedRules: ['三百的音變'] },
        sourceItem: { value: 356, kanji: '三百五十六', reading: 'さんびゃくごじゅうろく' }
    },
    {
        id: 'num_hundreds_extra_85', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「四百六十七」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「四百六十七」的正確讀音是？',
        options: [
            { text: 'よんひゃくろくじゅうなな', isCorrect: true, reason: '正確！「四百六十七」。' },
            { text: 'しひゃくろくじゅうしち', isCorrect: false, reason: '「四」讀「よん」，「七」讀「なな」。' },
            { text: 'よんびゃくろくじゅうなな', isCorrect: false, reason: '「四百」不濁音化。' },
            { text: 'よひゃくむじゅうなの', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四百六十七」讀「よんひゃくろくじゅうなな」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 467, kanji: '四百六十七', reading: 'よんひゃくろくじゅうなな' }
    },
    {
        id: 'num_hundreds_extra_86', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '重量是＿＿克。（五百七十八）', stem_zh: '重量是五百七十八克。',
        options: [
            { text: 'ごひゃくななじゅうはち', isCorrect: true, reason: '正確！「五百七十八」。' },
            { text: 'ごびゃくしちじゅうはち', isCorrect: false, reason: '「五百」不濁音化，「七」讀「なな」。' },
            { text: 'いつひゃくなのじゅうや', isCorrect: false, reason: '用音讀。' },
            { text: 'ごひゃくしちじゅうはち', isCorrect: false, reason: '「七」讀「なな」更常見。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五百七十八」讀「ごひゃくななじゅうはち」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 578, kanji: '五百七十八', reading: 'ごひゃくななじゅうはち' }
    },
    {
        id: 'num_hundreds_extra_87', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: true,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '本は何冊ありますか？', speakerB: '＿＿冊です。（六百八十九）' },
        options: [
            { text: 'ろくひゃくはちじゅうきゅう', isCorrect: false, reason: '陷阱！「六百」促音+半濁音化。' },
            { text: 'ろっぴゃくはちじゅうきゅう', isCorrect: true, reason: '正確！「六百八十九」。' },
            { text: 'むひゃくやじゅうここの', isCorrect: false, reason: '用音讀。' },
            { text: 'ろくびゃくはちじゅうく', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「六百」讀「ろっぴゃく」。', trapExplanation: '「六」促音+半濁音化。', relatedRules: ['六百的音變'] },
        sourceItem: { value: 689, kanji: '六百八十九', reading: 'ろっぴゃくはちじゅうきゅう' }
    },
    {
        id: 'num_hundreds_extra_88', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「七百九十」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「七百九十」的正確讀音是？',
        options: [
            { text: 'ななひゃくきゅうじゅう', isCorrect: true, reason: '正確！「七百九十」。' },
            { text: 'しちひゃくくじゅう', isCorrect: false, reason: '「七」讀「なな」，「九」讀「きゅう」。' },
            { text: 'ななびゃくきゅうじゅう', isCorrect: false, reason: '「七百」不濁音化。' },
            { text: 'なのひゃくここのじゅう', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七百九十」讀「ななひゃくきゅうじゅう」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 790, kanji: '七百九十', reading: 'ななひゃくきゅうじゅう' }
    },
    {
        id: 'num_hundreds_extra_89', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: true,
        stem: '價格是＿＿円。（八百十一）', stem_zh: '價格是八百十一日圓。',
        options: [
            { text: 'はちひゃくじゅういち', isCorrect: false, reason: '陷阱！「八百」促音+半濁音化。' },
            { text: 'はっぴゃくじゅういち', isCorrect: true, reason: '正確！「八百十一」。' },
            { text: 'やひゃくとおいち', isCorrect: false, reason: '用音讀。' },
            { text: 'はちびゃくじゅういち', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八百」讀「はっぴゃく」。', trapExplanation: '「八」促音+半濁音化。', relatedRules: ['八百的音變'] },
        sourceItem: { value: 811, kanji: '八百十一', reading: 'はっぴゃくじゅういち' }
    },
    {
        id: 'num_hundreds_extra_90', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'このケーキはいくらですか？', speakerB: '＿＿円です。（九百二十二）' },
        options: [
            { text: 'きゅうひゃくにじゅうに', isCorrect: true, reason: '正確！「九百二十二」。' },
            { text: 'くひゃくにじゅうに', isCorrect: false, reason: '「九」讀「きゅう」。' },
            { text: 'きゅうびゃくにじゅうに', isCorrect: false, reason: '「九百」不濁音化。' },
            { text: 'ここのひゃくふたじゅうふた', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九百二十二」讀「きゅうひゃくにじゅうに」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 922, kanji: '九百二十二', reading: 'きゅうひゃくにじゅうに' }
    },
    {
        id: 'num_hundreds_extra_91', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '哪些數字在「百」前會促音+半濁音化？', stem_zh: '哪些數字在「百」前會促音+半濁音化？',
        options: [
            { text: '1、6、8', isCorrect: true, reason: '正確！いっぴゃく、ろっぴゃく、はっぴゃく。' },
            { text: '2、5、9', isCorrect: false, reason: '這些不發生音變。' },
            { text: '3、4、7', isCorrect: false, reason: '3濁音化，4和7無變化。' },
            { text: '所有數字', isCorrect: false, reason: '只有1、6、8會促音+半濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '1、6、8在「百」前促音+半濁音化。', relatedRules: ['百的音變規則'] },
        sourceItem: { value: 0, kanji: '音變規則', reading: '促音+半濁音' }
    },
    {
        id: 'num_hundreds_extra_92', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: true,
        stem: '哪個數字在「百」前會濁音化？', stem_zh: '哪個數字在「百」前會濁音化？',
        options: [
            { text: '3', isCorrect: true, reason: '正確！「三百」讀「さんびゃく」。' },
            { text: '1', isCorrect: false, reason: '1是促音+半濁音化。' },
            { text: '6', isCorrect: false, reason: '6是促音+半濁音化。' },
            { text: '8', isCorrect: false, reason: '8是促音+半濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '只有3在「百」前濁音化。', trapExplanation: '「三百」讀「さんびゃく」。', relatedRules: ['百的音變規則'] },
        sourceItem: { value: 3, kanji: '三百', reading: 'さんびゃく' }
    },
    {
        id: 'num_hundreds_extra_93', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '写真は何枚ありますか？', speakerB: '＿＿枚です。（百五十）' },
        options: [
            { text: 'ひゃくごじゅう', isCorrect: true, reason: '正確！「百五十」讀「ひゃくごじゅう」。' },
            { text: 'いっぴゃくごじゅう', isCorrect: true, reason: '也可以讀「いっぴゃくごじゅう」。' },
            { text: 'もももいつじゅう', isCorrect: false, reason: '用音讀。' },
            { text: 'ひゃくいつじゅう', isCorrect: false, reason: '「五」讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「百」可省略「一」，直接讀「ひゃく」。', relatedRules: ['一百の省略'] },
        sourceItem: { value: 150, kanji: '百五十', reading: 'ひゃくごじゅう' }
    },
    {
        id: 'num_hundreds_extra_94', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「二百」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「二百」的正確讀音是？',
        options: [
            { text: 'にひゃく', isCorrect: true, reason: '正確！「二百」讀「にひゃく」。' },
            { text: 'ふたひゃく', isCorrect: false, reason: '用音讀「に」。' },
            { text: 'にびゃく', isCorrect: false, reason: '「二百」不濁音化。' },
            { text: 'にっぴゃく', isCorrect: false, reason: '「二百」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二百」讀「にひゃく」，無音變。', relatedRules: ['二百的讀法'] },
        sourceItem: { value: 200, kanji: '二百', reading: 'にひゃく' }
    },
    {
        id: 'num_hundreds_extra_95', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '會議室容量是＿＿人。（三百）', stem_zh: '會議室容量是三百人。',
        options: [
            { text: 'さんびゃく', isCorrect: true, reason: '正確！「三百」讀「さんびゃく」。' },
            { text: 'さんひゃく', isCorrect: false, reason: '「三百」濁音化。' },
            { text: 'みひゃく', isCorrect: false, reason: '用音讀「さん」。' },
            { text: 'さんぴゃく', isCorrect: false, reason: '應是濁音。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三百」濁音化為「さんびゃく」。', relatedRules: ['三百的音變'] },
        sourceItem: { value: 300, kanji: '三百', reading: 'さんびゃく' }
    },
    {
        id: 'num_hundreds_extra_96', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'このコーヒーはいくらですか？', speakerB: '＿＿円です。（四百）' },
        options: [
            { text: 'よんひゃく', isCorrect: true, reason: '正確！「四百」讀「よんひゃく」。' },
            { text: 'しひゃく', isCorrect: false, reason: '「四」讀「よん」。' },
            { text: 'よんびゃく', isCorrect: false, reason: '「四百」不濁音化。' },
            { text: 'よひゃく', isCorrect: false, reason: '需要「よん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四百」讀「よんひゃく」，無音變。', relatedRules: ['四百的讀法'] },
        sourceItem: { value: 400, kanji: '四百', reading: 'よんひゃく' }
    },
    {
        id: 'num_hundreds_extra_97', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「五百」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「五百」的正確讀音是？',
        options: [
            { text: 'ごひゃく', isCorrect: true, reason: '正確！「五百」讀「ごひゃく」。' },
            { text: 'いつひゃく', isCorrect: false, reason: '用音讀「ご」。' },
            { text: 'ごびゃく', isCorrect: false, reason: '「五百」不濁音化。' },
            { text: 'ごっぴゃく', isCorrect: false, reason: '「五百」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五百」讀「ごひゃく」，無音變。', relatedRules: ['五百的讀法'] },
        sourceItem: { value: 500, kanji: '五百', reading: 'ごひゃく' }
    },
    {
        id: 'num_hundreds_extra_98', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: true,
        stem: '這本書有＿＿頁。（六百）', stem_zh: '這本書有六百頁。',
        options: [
            { text: 'ろくひゃく', isCorrect: false, reason: '陷阱！「六百」促音+半濁音化。' },
            { text: 'ろっぴゃく', isCorrect: true, reason: '正確！「六百」讀「ろっぴゃく」。' },
            { text: 'むひゃく', isCorrect: false, reason: '用音讀「ろく」。' },
            { text: 'ろくびゃく', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「六百」讀「ろっぴゃく」。', trapExplanation: '「六」促音+半濁音化。', relatedRules: ['六百的音變'] },
        sourceItem: { value: 600, kanji: '六百', reading: 'ろっぴゃく' }
    },
    {
        id: 'num_hundreds_extra_99', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '何人参加しましたか？', speakerB: '＿＿人です。（七百）' },
        options: [
            { text: 'ななひゃく', isCorrect: true, reason: '正確！「七百」讀「ななひゃく」。' },
            { text: 'しちひゃく', isCorrect: false, reason: '「七百」讀「ななひゃく」更常見。' },
            { text: 'ななびゃく', isCorrect: false, reason: '「七百」不濁音化。' },
            { text: 'なのひゃく', isCorrect: false, reason: '用「なな」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七百」讀「ななひゃく」，無音變。', relatedRules: ['七百的讀法'] },
        sourceItem: { value: 700, kanji: '七百', reading: 'ななひゃく' }
    },
    {
        id: 'num_hundreds_extra_100', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「八百」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「八百」的正確讀音是？',
        options: [
            { text: 'はちひゃく', isCorrect: false, reason: '陷阱！「八百」促音+半濁音化。' },
            { text: 'はっぴゃく', isCorrect: true, reason: '正確！「八百」讀「はっぴゃく」。' },
            { text: 'やひゃく', isCorrect: false, reason: '用音讀「はち」。' },
            { text: 'はちびゃく', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八百」讀「はっぴゃく」。', trapExplanation: '「八」促音+半濁音化。', relatedRules: ['八百的音變'] },
        sourceItem: { value: 800, kanji: '八百', reading: 'はっぴゃく' }
    },
    {
        id: 'num_hundreds_extra_101', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '這棟大樓有＿＿戶。（九百）', stem_zh: '這棟大樓有九百戶。',
        options: [
            { text: 'きゅうひゃく', isCorrect: true, reason: '正確！「九百」讀「きゅうひゃく」。' },
            { text: 'くひゃく', isCorrect: false, reason: '「九」讀「きゅう」。' },
            { text: 'きゅうびゃく', isCorrect: false, reason: '「九百」不濁音化。' },
            { text: 'ここのひゃく', isCorrect: false, reason: '用音讀「きゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九百」讀「きゅうひゃく」，無音變。', relatedRules: ['九百的讀法'] },
        sourceItem: { value: 900, kanji: '九百', reading: 'きゅうひゃく' }
    },
    {
        id: 'num_hundreds_extra_102', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: true,
        stem: '問距離', stem_zh: '問距離',
        dialogue: { speakerA: '駅まで何メートルですか？', speakerB: '＿＿メートルです。（百三十）' },
        options: [
            { text: 'いちひゃくさんじゅう', isCorrect: false, reason: '陷阱！「一百」促音+半濁音化。' },
            { text: 'ひゃくさんじゅう', isCorrect: true, reason: '正確！「百」可省略「一」。' },
            { text: 'いっぴゃくさんじゅう', isCorrect: true, reason: '也正確，完整讀法。' },
            { text: 'ももさんじゅう', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「百」可省略「一」，也可讀「いっぴゃく」。', relatedRules: ['一百の省略'] },
        sourceItem: { value: 130, kanji: '百三十', reading: 'ひゃくさんじゅう' }
    },
    {
        id: 'num_hundreds_extra_103', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「二百三十四」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「二百三十四」的正確讀音是？',
        options: [
            { text: 'にひゃくさんじゅうよん', isCorrect: true, reason: '正確！「二百三十四」。' },
            { text: 'にびゃくさんじゅうし', isCorrect: false, reason: '「二百」不濁音化，「四」讀「よん」。' },
            { text: 'ふたひゃくみじゅうよ', isCorrect: false, reason: '用音讀。' },
            { text: 'にひゃくさんじゅうし', isCorrect: false, reason: '「四」讀「よん」更常見。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二百三十四」讀「にひゃくさんじゅうよん」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 234, kanji: '二百三十四', reading: 'にひゃくさんじゅうよん' }
    },
    {
        id: 'num_hundreds_extra_104', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: true,
        stem: '會場有＿＿個座位。（三百四十五）', stem_zh: '會場有三百四十五個座位。',
        options: [
            { text: 'さんひゃくよんじゅうご', isCorrect: false, reason: '陷阱！「三百」濁音化。' },
            { text: 'さんびゃくよんじゅうご', isCorrect: true, reason: '正確！「三百四十五」。' },
            { text: 'みひゃくしじゅういつ', isCorrect: false, reason: '用音讀。' },
            { text: 'さんぴゃくよんじゅうご', isCorrect: false, reason: '應是濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三百」濁音化為「さんびゃく」。', trapExplanation: '「三」後「百」濁音化。', relatedRules: ['三百的音變'] },
        sourceItem: { value: 345, kanji: '三百四十五', reading: 'さんびゃくよんじゅうご' }
    },
    {
        id: 'num_hundreds_extra_105', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'このノートはいくらですか？', speakerB: '＿＿円です。（四百五十六）' },
        options: [
            { text: 'よんひゃくごじゅうろく', isCorrect: true, reason: '正確！「四百五十六」。' },
            { text: 'しひゃくごじゅうろく', isCorrect: false, reason: '「四」讀「よん」。' },
            { text: 'よんびゃくごじゅうろく', isCorrect: false, reason: '「四百」不濁音化。' },
            { text: 'よひゃくいつじゅうむ', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四百五十六」讀「よんひゃくごじゅうろく」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 456, kanji: '四百五十六', reading: 'よんひゃくごじゅうろく' }
    },
    {
        id: 'num_hundreds_extra_106', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「五百六十七」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「五百六十七」的正確讀音是？',
        options: [
            { text: 'ごひゃくろくじゅうなな', isCorrect: true, reason: '正確！「五百六十七」。' },
            { text: 'ごびゃくろくじゅうしち', isCorrect: false, reason: '「五百」不濁音化，「七」讀「なな」。' },
            { text: 'いつひゃくむじゅうなの', isCorrect: false, reason: '用音讀。' },
            { text: 'ごひゃくろくじゅうしち', isCorrect: false, reason: '「七」讀「なな」更常見。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五百六十七」讀「ごひゃくろくじゅうなな」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 567, kanji: '五百六十七', reading: 'ごひゃくろくじゅうなな' }
    },
    {
        id: 'num_hundreds_extra_107', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: true,
        stem: '商品編號是＿＿。（六百七十八）', stem_zh: '商品編號是六百七十八。',
        options: [
            { text: 'ろくひゃくななじゅうはち', isCorrect: false, reason: '陷阱！「六百」促音+半濁音化。' },
            { text: 'ろっぴゃくななじゅうはち', isCorrect: true, reason: '正確！「六百七十八」。' },
            { text: 'むひゃくなのじゅうや', isCorrect: false, reason: '用音讀。' },
            { text: 'ろくびゃくななじゅうはち', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「六百」讀「ろっぴゃく」。', trapExplanation: '「六」促音+半濁音化。', relatedRules: ['六百的音變'] },
        sourceItem: { value: 678, kanji: '六百七十八', reading: 'ろっぴゃくななじゅうはち' }
    },
    {
        id: 'num_hundreds_extra_108', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '何人いますか？', speakerB: '＿＿人です。（七百八十九）' },
        options: [
            { text: 'ななひゃくはちじゅうきゅう', isCorrect: true, reason: '正確！「七百八十九」。' },
            { text: 'しちひゃくはちじゅうく', isCorrect: false, reason: '「七」讀「なな」，「九」讀「きゅう」。' },
            { text: 'ななびゃくはちじゅうきゅう', isCorrect: false, reason: '「七百」不濁音化。' },
            { text: 'なのひゃくやじゅうここの', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七百八十九」讀「ななひゃくはちじゅうきゅう」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 789, kanji: '七百八十九', reading: 'ななひゃくはちじゅうきゅう' }
    },
    {
        id: 'num_hundreds_extra_109', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「八百九十」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「八百九十」的正確讀音是？',
        options: [
            { text: 'はちひゃくきゅうじゅう', isCorrect: false, reason: '陷阱！「八百」促音+半濁音化。' },
            { text: 'はっぴゃくきゅうじゅう', isCorrect: true, reason: '正確！「八百九十」。' },
            { text: 'やひゃくここのじゅう', isCorrect: false, reason: '用音讀。' },
            { text: 'はちびゃくきゅうじゅう', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八百」讀「はっぴゃく」。', trapExplanation: '「八」促音+半濁音化。', relatedRules: ['八百的音變'] },
        sourceItem: { value: 890, kanji: '八百九十', reading: 'はっぴゃくきゅうじゅう' }
    },
    {
        id: 'num_hundreds_extra_110', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '圖書館有＿＿本書。（九百一）', stem_zh: '圖書館有九百零一本書。',
        options: [
            { text: 'きゅうひゃくいち', isCorrect: true, reason: '正確！「九百一」。' },
            { text: 'くひゃくいち', isCorrect: false, reason: '「九」讀「きゅう」。' },
            { text: 'きゅうびゃくいち', isCorrect: false, reason: '「九百」不濁音化。' },
            { text: 'ここのひゃくひと', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九百一」讀「きゅうひゃくいち」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 901, kanji: '九百一', reading: 'きゅうひゃくいち' }
    },
    {
        id: 'num_hundreds_extra_111', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: true,
        stem: '問金額', stem_zh: '問金額',
        dialogue: { speakerA: '合計はいくらですか？', speakerB: '＿＿円です。（百十二）' },
        options: [
            { text: 'いちひゃくじゅうに', isCorrect: false, reason: '陷阱！「一百」促音+半濁音化或省略。' },
            { text: 'ひゃくじゅうに', isCorrect: true, reason: '正確！「百十二」可省略「一」。' },
            { text: 'ももとおに', isCorrect: false, reason: '用音讀。' },
            { text: 'いっぴゃくじゅうに', isCorrect: true, reason: '也正確，完整讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「百」可省略「一」。', relatedRules: ['一百の省略'] },
        sourceItem: { value: 112, kanji: '百十二', reading: 'ひゃくじゅうに' }
    },
    {
        id: 'num_hundreds_extra_112', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「二百二十三」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「二百二十三」的正確讀音是？',
        options: [
            { text: 'にひゃくにじゅうさん', isCorrect: true, reason: '正確！「二百二十三」。' },
            { text: 'にびゃくにじゅうさん', isCorrect: false, reason: '「二百」不濁音化。' },
            { text: 'ふたひゃくふたじゅうみ', isCorrect: false, reason: '用音讀。' },
            { text: 'にっぴゃくにじゅうさん', isCorrect: false, reason: '「二百」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二百二十三」讀「にひゃくにじゅうさん」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 223, kanji: '二百二十三', reading: 'にひゃくにじゅうさん' }
    },
    {
        id: 'num_hundreds_extra_113', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: true,
        stem: '演唱會有＿＿人。（三百三十四）', stem_zh: '演唱會有三百三十四人。',
        options: [
            { text: 'さんひゃくさんじゅうよん', isCorrect: false, reason: '陷阱！「三百」濁音化。' },
            { text: 'さんびゃくさんじゅうよん', isCorrect: true, reason: '正確！「三百三十四」。' },
            { text: 'みひゃくみじゅうよ', isCorrect: false, reason: '用音讀。' },
            { text: 'さんぴゃくさんじゅうよん', isCorrect: false, reason: '應是濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三百」濁音化為「さんびゃく」。', trapExplanation: '「三」後「百」濁音化。', relatedRules: ['三百的音變'] },
        sourceItem: { value: 334, kanji: '三百三十四', reading: 'さんびゃくさんじゅうよん' }
    },
    {
        id: 'num_hundreds_extra_114', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'このペンはいくらですか？', speakerB: '＿＿円です。（四百四十五）' },
        options: [
            { text: 'よんひゃくよんじゅうご', isCorrect: true, reason: '正確！「四百四十五」。' },
            { text: 'しひゃくしじゅうご', isCorrect: false, reason: '「四」讀「よん」。' },
            { text: 'よんびゃくよんじゅうご', isCorrect: false, reason: '「四百」不濁音化。' },
            { text: 'よひゃくよじゅういつ', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四百四十五」讀「よんひゃくよんじゅうご」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 445, kanji: '四百四十五', reading: 'よんひゃくよんじゅうご' }
    },
    {
        id: 'num_hundreds_extra_115', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「五百五十六」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「五百五十六」的正確讀音是？',
        options: [
            { text: 'ごひゃくごじゅうろく', isCorrect: true, reason: '正確！「五百五十六」。' },
            { text: 'ごびゃくごじゅうろく', isCorrect: false, reason: '「五百」不濁音化。' },
            { text: 'いつひゃくいつじゅうむ', isCorrect: false, reason: '用音讀。' },
            { text: 'ごっぴゃくごじゅうろく', isCorrect: false, reason: '「五百」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五百五十六」讀「ごひゃくごじゅうろく」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 556, kanji: '五百五十六', reading: 'ごひゃくごじゅうろく' }
    },
    {
        id: 'num_hundreds_extra_116', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: true,
        stem: '這個城市有＿＿條公車路線。（六百六十七）', stem_zh: '這個城市有六百六十七條公車路線。',
        options: [
            { text: 'ろくひゃくろくじゅうなな', isCorrect: false, reason: '陷阱！「六百」促音+半濁音化。' },
            { text: 'ろっぴゃくろくじゅうなな', isCorrect: true, reason: '正確！「六百六十七」。' },
            { text: 'むひゃくむじゅうなの', isCorrect: false, reason: '用音讀。' },
            { text: 'ろくびゃくろくじゅうなな', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「六百」讀「ろっぴゃく」。', trapExplanation: '「六」促音+半濁音化。', relatedRules: ['六百的音變'] },
        sourceItem: { value: 667, kanji: '六百六十七', reading: 'ろっぴゃくろくじゅうなな' }
    },
    {
        id: 'num_hundreds_extra_117', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '何枚ありますか？', speakerB: '＿＿枚です。（七百七十八）' },
        options: [
            { text: 'ななひゃくななじゅうはち', isCorrect: true, reason: '正確！「七百七十八」。' },
            { text: 'しちひゃくしちじゅうはち', isCorrect: false, reason: '「七」讀「なな」。' },
            { text: 'ななびゃくななじゅうはち', isCorrect: false, reason: '「七百」不濁音化。' },
            { text: 'なのひゃくなのじゅうや', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七百七十八」讀「ななひゃくななじゅうはち」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 778, kanji: '七百七十八', reading: 'ななひゃくななじゅうはち' }
    },
    {
        id: 'num_hundreds_extra_118', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「八百八十九」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「八百八十九」的正確讀音是？',
        options: [
            { text: 'はちひゃくはちじゅうきゅう', isCorrect: false, reason: '陷阱！「八百」促音+半濁音化。' },
            { text: 'はっぴゃくはちじゅうきゅう', isCorrect: true, reason: '正確！「八百八十九」。' },
            { text: 'やひゃくやじゅうここの', isCorrect: false, reason: '用音讀。' },
            { text: 'はちびゃくはちじゅうきゅう', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八百」讀「はっぴゃく」。', trapExplanation: '「八」促音+半濁音化。', relatedRules: ['八百的音變'] },
        sourceItem: { value: 889, kanji: '八百八十九', reading: 'はっぴゃくはちじゅうきゅう' }
    },
    {
        id: 'num_hundreds_extra_119', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '這件商品售價＿＿円。（九百九十）', stem_zh: '這件商品售價九百九十日圓。',
        options: [
            { text: 'きゅうひゃくきゅうじゅう', isCorrect: true, reason: '正確！「九百九十」。' },
            { text: 'くひゃくくじゅう', isCorrect: false, reason: '「九」讀「きゅう」。' },
            { text: 'きゅうびゃくきゅうじゅう', isCorrect: false, reason: '「九百」不濁音化。' },
            { text: 'ここのひゃくここのじゅう', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九百九十」讀「きゅうひゃくきゅうじゅう」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 990, kanji: '九百九十', reading: 'きゅうひゃくきゅうじゅう' }
    },
    {
        id: 'num_hundreds_extra_120', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: true,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'お菓子はいくらですか？', speakerB: '＿＿円です。（百一）' },
        options: [
            { text: 'いちひゃくいち', isCorrect: false, reason: '陷阱！「一百」促音+半濁音化或省略。' },
            { text: 'ひゃくいち', isCorrect: true, reason: '正確！「百」可省略「一」。' },
            { text: 'ももひと', isCorrect: false, reason: '用音讀。' },
            { text: 'いっぴゃくいち', isCorrect: true, reason: '也正確，完整讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「百」可省略「一」。', relatedRules: ['一百の省略'] },
        sourceItem: { value: 101, kanji: '百一', reading: 'ひゃくいち' }
    },
    {
        id: 'num_hundreds_extra_121', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「二百十五」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「二百十五」的正確讀音是？',
        options: [
            { text: 'にひゃくじゅうご', isCorrect: true, reason: '正確！「二百十五」。' },
            { text: 'にびゃくじゅうご', isCorrect: false, reason: '「二百」不濁音化。' },
            { text: 'ふたひゃくとおご', isCorrect: false, reason: '用音讀。' },
            { text: 'にっぴゃくじゅうご', isCorrect: false, reason: '「二百」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二百十五」讀「にひゃくじゅうご」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 215, kanji: '二百十五', reading: 'にひゃくじゅうご' }
    },
    {
        id: 'num_hundreds_extra_122', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: true,
        stem: '停車場有＿＿個車位。（三百二十六）', stem_zh: '停車場有三百二十六個車位。',
        options: [
            { text: 'さんひゃくにじゅうろく', isCorrect: false, reason: '陷阱！「三百」濁音化。' },
            { text: 'さんびゃくにじゅうろく', isCorrect: true, reason: '正確！「三百二十六」。' },
            { text: 'みひゃくふたじゅうむ', isCorrect: false, reason: '用音讀。' },
            { text: 'さんぴゃくにじゅうろく', isCorrect: false, reason: '應是濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三百」濁音化為「さんびゃく」。', trapExplanation: '「三」後「百」濁音化。', relatedRules: ['三百的音變'] },
        sourceItem: { value: 326, kanji: '三百二十六', reading: 'さんびゃくにじゅうろく' }
    },
    {
        id: 'num_hundreds_extra_123', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '問距離', stem_zh: '問距離',
        dialogue: { speakerA: 'ここから何キロですか？', speakerB: '＿＿キロです。（四百三十七）' },
        options: [
            { text: 'よんひゃくさんじゅうなな', isCorrect: true, reason: '正確！「四百三十七」。' },
            { text: 'しひゃくさんじゅうしち', isCorrect: false, reason: '「四」讀「よん」，「七」讀「なな」。' },
            { text: 'よんびゃくさんじゅうなな', isCorrect: false, reason: '「四百」不濁音化。' },
            { text: 'よひゃくみじゅうなの', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四百三十七」讀「よんひゃくさんじゅうなな」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 437, kanji: '四百三十七', reading: 'よんひゃくさんじゅうなな' }
    },
    {
        id: 'num_hundreds_extra_124', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「五百四十八」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「五百四十八」的正確讀音是？',
        options: [
            { text: 'ごひゃくよんじゅうはち', isCorrect: true, reason: '正確！「五百四十八」。' },
            { text: 'ごびゃくしじゅうはち', isCorrect: false, reason: '「五百」不濁音化，「四」讀「よん」。' },
            { text: 'いつひゃくよじゅうや', isCorrect: false, reason: '用音讀。' },
            { text: 'ごひゃくしじゅうはち', isCorrect: false, reason: '「四」讀「よん」更常見。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五百四十八」讀「ごひゃくよんじゅうはち」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 548, kanji: '五百四十八', reading: 'ごひゃくよんじゅうはち' }
    },
    {
        id: 'num_hundreds_extra_125', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: true,
        stem: '這個月銷售額是＿＿萬日圓。（六百五十九）', stem_zh: '這個月銷售額是六百五十九萬日圓。',
        options: [
            { text: 'ろくひゃくごじゅうきゅう', isCorrect: false, reason: '陷阱！「六百」促音+半濁音化。' },
            { text: 'ろっぴゃくごじゅうきゅう', isCorrect: true, reason: '正確！「六百五十九」。' },
            { text: 'むひゃくいつじゅうここの', isCorrect: false, reason: '用音讀。' },
            { text: 'ろくびゃくごじゅうきゅう', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「六百」讀「ろっぴゃく」。', trapExplanation: '「六」促音+半濁音化。', relatedRules: ['六百的音變'] },
        sourceItem: { value: 659, kanji: '六百五十九', reading: 'ろっぴゃくごじゅうきゅう' }
    },
    {
        id: 'num_hundreds_extra_126', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '何本ありますか？', speakerB: '＿＿本です。（七百六十）' },
        options: [
            { text: 'ななひゃくろくじゅう', isCorrect: true, reason: '正確！「七百六十」。' },
            { text: 'しちひゃくろくじゅう', isCorrect: false, reason: '「七」讀「なな」。' },
            { text: 'ななびゃくろくじゅう', isCorrect: false, reason: '「七百」不濁音化。' },
            { text: 'なのひゃくむじゅう', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七百六十」讀「ななひゃくろくじゅう」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 760, kanji: '七百六十', reading: 'ななひゃくろくじゅう' }
    },
    {
        id: 'num_hundreds_extra_127', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「八百七十一」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「八百七十一」的正確讀音是？',
        options: [
            { text: 'はちひゃくななじゅういち', isCorrect: false, reason: '陷阱！「八百」促音+半濁音化。' },
            { text: 'はっぴゃくななじゅういち', isCorrect: true, reason: '正確！「八百七十一」。' },
            { text: 'やひゃくなのじゅうひと', isCorrect: false, reason: '用音讀。' },
            { text: 'はちびゃくななじゅういち', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八百」讀「はっぴゃく」。', trapExplanation: '「八」促音+半濁音化。', relatedRules: ['八百的音變'] },
        sourceItem: { value: 871, kanji: '八百七十一', reading: 'はっぴゃくななじゅういち' }
    },
    {
        id: 'num_hundreds_extra_128', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '展覽會有＿＿件作品。（九百八十二）', stem_zh: '展覽會有九百八十二件作品。',
        options: [
            { text: 'きゅうひゃくはちじゅうに', isCorrect: true, reason: '正確！「九百八十二」。' },
            { text: 'くひゃくはちじゅうに', isCorrect: false, reason: '「九」讀「きゅう」。' },
            { text: 'きゅうびゃくはちじゅうに', isCorrect: false, reason: '「九百」不濁音化。' },
            { text: 'ここのひゃくやじゅうふた', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九百八十二」讀「きゅうひゃくはちじゅうに」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 982, kanji: '九百八十二', reading: 'きゅうひゃくはちじゅうに' }
    },
    {
        id: 'num_hundreds_extra_129', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: true,
        stem: '問房間號碼', stem_zh: '問房間號碼',
        dialogue: { speakerA: '部屋番号は？', speakerB: '＿＿号室です。（百九十三）' },
        options: [
            { text: 'いちひゃくきゅうじゅうさん', isCorrect: false, reason: '陷阱！「一百」促音+半濁音化或省略。' },
            { text: 'ひゃくきゅうじゅうさん', isCorrect: true, reason: '正確！「百」可省略「一」。' },
            { text: 'いっぴゃくきゅうじゅうさん', isCorrect: true, reason: '也正確，完整讀法。' },
            { text: 'ももここのじゅうみ', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「百」可省略「一」。', relatedRules: ['一百の省略'] },
        sourceItem: { value: 193, kanji: '百九十三', reading: 'ひゃくきゅうじゅうさん' }
    },
    {
        id: 'num_hundreds_extra_130', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「二百八十四」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「二百八十四」的正確讀音是？',
        options: [
            { text: 'にひゃくはちじゅうよん', isCorrect: true, reason: '正確！「二百八十四」。' },
            { text: 'にびゃくはちじゅうし', isCorrect: false, reason: '「二百」不濁音化，「四」讀「よん」。' },
            { text: 'ふたひゃくやじゅうよ', isCorrect: false, reason: '用音讀。' },
            { text: 'にひゃくはちじゅうし', isCorrect: false, reason: '「四」讀「よん」更常見。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二百八十四」讀「にひゃくはちじゅうよん」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 284, kanji: '二百八十四', reading: 'にひゃくはちじゅうよん' }
    },
    {
        id: 'num_hundreds_extra_131', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: true,
        stem: '這批貨物有＿＿箱。（三百七十五）', stem_zh: '這批貨物有三百七十五箱。',
        options: [
            { text: 'さんひゃくななじゅうご', isCorrect: false, reason: '陷阱！「三百」濁音化。' },
            { text: 'さんびゃくななじゅうご', isCorrect: true, reason: '正確！「三百七十五」。' },
            { text: 'みひゃくなのじゅういつ', isCorrect: false, reason: '用音讀。' },
            { text: 'さんぴゃくななじゅうご', isCorrect: false, reason: '應是濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三百」濁音化為「さんびゃく」。', trapExplanation: '「三」後「百」濁音化。', relatedRules: ['三百的音變'] },
        sourceItem: { value: 375, kanji: '三百七十五', reading: 'さんびゃくななじゅうご' }
    },
    {
        id: 'num_hundreds_extra_132', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'このお弁当はいくらですか？', speakerB: '＿＿円です。（四百六十六）' },
        options: [
            { text: 'よんひゃくろくじゅうろく', isCorrect: true, reason: '正確！「四百六十六」。' },
            { text: 'しひゃくろくじゅうろく', isCorrect: false, reason: '「四」讀「よん」。' },
            { text: 'よんびゃくろくじゅうろく', isCorrect: false, reason: '「四百」不濁音化。' },
            { text: 'よひゃくむじゅうむ', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四百六十六」讀「よんひゃくろくじゅうろく」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 466, kanji: '四百六十六', reading: 'よんひゃくろくじゅうろく' }
    },
    {
        id: 'num_hundreds_extra_133', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「五百七十七」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「五百七十七」的正確讀音是？',
        options: [
            { text: 'ごひゃくななじゅうなな', isCorrect: true, reason: '正確！「五百七十七」。' },
            { text: 'ごびゃくしちじゅうしち', isCorrect: false, reason: '「五百」不濁音化，「七」讀「なな」。' },
            { text: 'いつひゃくなのじゅうなの', isCorrect: false, reason: '用音讀。' },
            { text: 'ごひゃくしちじゅうしち', isCorrect: false, reason: '「七」讀「なな」更常見。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五百七十七」讀「ごひゃくななじゅうなな」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 577, kanji: '五百七十七', reading: 'ごひゃくななじゅうなな' }
    },
    {
        id: 'num_hundreds_extra_134', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: true,
        stem: '電影院有＿＿個座位。（六百八十八）', stem_zh: '電影院有六百八十八個座位。',
        options: [
            { text: 'ろくひゃくはちじゅうはち', isCorrect: false, reason: '陷阱！「六百」促音+半濁音化。' },
            { text: 'ろっぴゃくはちじゅうはち', isCorrect: true, reason: '正確！「六百八十八」。' },
            { text: 'むひゃくやじゅうや', isCorrect: false, reason: '用音讀。' },
            { text: 'ろくびゃくはちじゅうはち', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「六百」讀「ろっぴゃく」。', trapExplanation: '「六」促音+半濁音化。', relatedRules: ['六百的音變'] },
        sourceItem: { value: 688, kanji: '六百八十八', reading: 'ろっぴゃくはちじゅうはち' }
    },
    {
        id: 'num_hundreds_extra_135', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '商品は何個ですか？', speakerB: '＿＿個です。（七百九十九）' },
        options: [
            { text: 'ななひゃくきゅうじゅうきゅう', isCorrect: true, reason: '正確！「七百九十九」。' },
            { text: 'しちひゃくくじゅうく', isCorrect: false, reason: '「七」讀「なな」，「九」讀「きゅう」。' },
            { text: 'ななびゃくきゅうじゅうきゅう', isCorrect: false, reason: '「七百」不濁音化。' },
            { text: 'なのひゃくここのじゅうここの', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七百九十九」讀「ななひゃくきゅうじゅうきゅう」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 799, kanji: '七百九十九', reading: 'ななひゃくきゅうじゅうきゅう' }
    },
    {
        id: 'num_hundreds_extra_136', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「八百十」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「八百十」的正確讀音是？',
        options: [
            { text: 'はちひゃくじゅう', isCorrect: false, reason: '陷阱！「八百」促音+半濁音化。' },
            { text: 'はっぴゃくじゅう', isCorrect: true, reason: '正確！「八百十」。' },
            { text: 'やひゃくとお', isCorrect: false, reason: '用音讀。' },
            { text: 'はちびゃくじゅう', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八百」讀「はっぴゃく」。', trapExplanation: '「八」促音+半濁音化。', relatedRules: ['八百的音變'] },
        sourceItem: { value: 810, kanji: '八百十', reading: 'はっぴゃくじゅう' }
    },
    {
        id: 'num_hundreds_extra_137', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '公司有＿＿名員工。（九百二十一）', stem_zh: '公司有九百二十一名員工。',
        options: [
            { text: 'きゅうひゃくにじゅういち', isCorrect: true, reason: '正確！「九百二十一」。' },
            { text: 'くひゃくにじゅういち', isCorrect: false, reason: '「九」讀「きゅう」。' },
            { text: 'きゅうびゃくにじゅういち', isCorrect: false, reason: '「九百」不濁音化。' },
            { text: 'ここのひゃくふたじゅうひと', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九百二十一」讀「きゅうひゃくにじゅういち」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 921, kanji: '九百二十一', reading: 'きゅうひゃくにじゅういち' }
    },
    {
        id: 'num_hundreds_extra_138', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: true,
        stem: '問電話號碼', stem_zh: '問電話號碼',
        dialogue: { speakerA: '電話番号の下四桁は？', speakerB: '＿＿です。（百三十二）' },
        options: [
            { text: 'いちひゃくさんじゅうに', isCorrect: false, reason: '陷阱！「一百」促音+半濁音化或省略。' },
            { text: 'ひゃくさんじゅうに', isCorrect: true, reason: '正確！「百」可省略「一」。' },
            { text: 'いっぴゃくさんじゅうに', isCorrect: true, reason: '也正確，完整讀法。' },
            { text: 'ももみじゅうふた', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「百」可省略「一」。', relatedRules: ['一百の省略'] },
        sourceItem: { value: 132, kanji: '百三十二', reading: 'ひゃくさんじゅうに' }
    },
    {
        id: 'num_hundreds_extra_139', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「二百四十三」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「二百四十三」的正確讀音是？',
        options: [
            { text: 'にひゃくよんじゅうさん', isCorrect: true, reason: '正確！「二百四十三」。' },
            { text: 'にびゃくしじゅうさん', isCorrect: false, reason: '「二百」不濁音化，「四」讀「よん」。' },
            { text: 'ふたひゃくよじゅうみ', isCorrect: false, reason: '用音讀。' },
            { text: 'にひゃくしじゅうさん', isCorrect: false, reason: '「四」讀「よん」更常見。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二百四十三」讀「にひゃくよんじゅうさん」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 243, kanji: '二百四十三', reading: 'にひゃくよんじゅうさん' }
    },
    {
        id: 'num_hundreds_extra_140', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: true,
        stem: '這本字典有＿＿頁。（三百五十四）', stem_zh: '這本字典有三百五十四頁。',
        options: [
            { text: 'さんひゃくごじゅうよん', isCorrect: false, reason: '陷阱！「三百」濁音化。' },
            { text: 'さんびゃくごじゅうよん', isCorrect: true, reason: '正確！「三百五十四」。' },
            { text: 'みひゃくいつじゅうよ', isCorrect: false, reason: '用音讀。' },
            { text: 'さんぴゃくごじゅうよん', isCorrect: false, reason: '應是濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三百」濁音化為「さんびゃく」。', trapExplanation: '「三」後「百」濁音化。', relatedRules: ['三百的音變'] },
        sourceItem: { value: 354, kanji: '三百五十四', reading: 'さんびゃくごじゅうよん' }
    },
    {
        id: 'num_hundreds_extra_141', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '問容量', stem_zh: '問容量',
        dialogue: { speakerA: 'このボトルは何ミリリットルですか？', speakerB: '＿＿ミリリットルです。（四百六十五）' },
        options: [
            { text: 'よんひゃくろくじゅうご', isCorrect: true, reason: '正確！「四百六十五」。' },
            { text: 'しひゃくろくじゅうご', isCorrect: false, reason: '「四」讀「よん」。' },
            { text: 'よんびゃくろくじゅうご', isCorrect: false, reason: '「四百」不濁音化。' },
            { text: 'よひゃくむじゅういつ', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四百六十五」讀「よんひゃくろくじゅうご」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 465, kanji: '四百六十五', reading: 'よんひゃくろくじゅうご' }
    },
    {
        id: 'num_hundreds_extra_142', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「五百七十六」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「五百七十六」的正確讀音是？',
        options: [
            { text: 'ごひゃくななじゅうろく', isCorrect: true, reason: '正確！「五百七十六」。' },
            { text: 'ごびゃくしちじゅうろく', isCorrect: false, reason: '「五百」不濁音化，「七」讀「なな」。' },
            { text: 'いつひゃくなのじゅうむ', isCorrect: false, reason: '用音讀。' },
            { text: 'ごひゃくしちじゅうろく', isCorrect: false, reason: '「七」讀「なな」更常見。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五百七十六」讀「ごひゃくななじゅうろく」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 576, kanji: '五百七十六', reading: 'ごひゃくななじゅうろく' }
    },
    {
        id: 'num_hundreds_extra_143', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: true,
        stem: '這個月有＿＿筆訂單。（六百八十七）', stem_zh: '這個月有六百八十七筆訂單。',
        options: [
            { text: 'ろくひゃくはちじゅうなな', isCorrect: false, reason: '陷阱！「六百」促音+半濁音化。' },
            { text: 'ろっぴゃくはちじゅうなな', isCorrect: true, reason: '正確！「六百八十七」。' },
            { text: 'むひゃくやじゅうなの', isCorrect: false, reason: '用音讀。' },
            { text: 'ろくびゃくはちじゅうなな', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「六百」讀「ろっぴゃく」。', trapExplanation: '「六」促音+半濁音化。', relatedRules: ['六百的音變'] },
        sourceItem: { value: 687, kanji: '六百八十七', reading: 'ろっぴゃくはちじゅうなな' }
    },
    {
        id: 'num_hundreds_extra_144', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '何人来ましたか？', speakerB: '＿＿人です。（七百九十八）' },
        options: [
            { text: 'ななひゃくきゅうじゅうはち', isCorrect: true, reason: '正確！「七百九十八」。' },
            { text: 'しちひゃくくじゅうはち', isCorrect: false, reason: '「七」讀「なな」，「九」讀「きゅう」。' },
            { text: 'ななびゃくきゅうじゅうはち', isCorrect: false, reason: '「七百」不濁音化。' },
            { text: 'なのひゃくここのじゅうや', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七百九十八」讀「ななひゃくきゅうじゅうはち」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 798, kanji: '七百九十八', reading: 'ななひゃくきゅうじゅうはち' }
    },
    {
        id: 'num_hundreds_extra_145', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「八百九」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「八百零九」的正確讀音是？',
        options: [
            { text: 'はちひゃくきゅう', isCorrect: false, reason: '陷阱！「八百」促音+半濁音化。' },
            { text: 'はっぴゃくきゅう', isCorrect: true, reason: '正確！「八百九」。' },
            { text: 'やひゃくここの', isCorrect: false, reason: '用音讀。' },
            { text: 'はちびゃくく', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八百」讀「はっぴゃく」。', trapExplanation: '「八」促音+半濁音化。', relatedRules: ['八百的音變'] },
        sourceItem: { value: 809, kanji: '八百九', reading: 'はっぴゃくきゅう' }
    },
    {
        id: 'num_hundreds_extra_146', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '飛機航程是＿＿公里。（九百十）', stem_zh: '飛機航程是九百十公里。',
        options: [
            { text: 'きゅうひゃくじゅう', isCorrect: true, reason: '正確！「九百十」。' },
            { text: 'くひゃくじゅう', isCorrect: false, reason: '「九」讀「きゅう」。' },
            { text: 'きゅうびゃくじゅう', isCorrect: false, reason: '「九百」不濁音化。' },
            { text: 'ここのひゃくとお', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九百十」讀「きゅうひゃくじゅう」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 910, kanji: '九百十', reading: 'きゅうひゃくじゅう' }
    },
    {
        id: 'num_hundreds_extra_147', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: true,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'この本はいくらですか？', speakerB: '＿＿円です。（百二十一）' },
        options: [
            { text: 'いちひゃくにじゅういち', isCorrect: false, reason: '陷阱！「一百」促音+半濁音化或省略。' },
            { text: 'ひゃくにじゅういち', isCorrect: true, reason: '正確！「百」可省略「一」。' },
            { text: 'いっぴゃくにじゅういち', isCorrect: true, reason: '也正確，完整讀法。' },
            { text: 'ももふたじゅうひと', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「百」可省略「一」。', relatedRules: ['一百の省略'] },
        sourceItem: { value: 121, kanji: '百二十一', reading: 'ひゃくにじゅういち' }
    },
    {
        id: 'num_hundreds_extra_148', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「二百三十二」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「二百三十二」的正確讀音是？',
        options: [
            { text: 'にひゃくさんじゅうに', isCorrect: true, reason: '正確！「二百三十二」。' },
            { text: 'にびゃくさんじゅうに', isCorrect: false, reason: '「二百」不濁音化。' },
            { text: 'ふたひゃくみじゅうふた', isCorrect: false, reason: '用音讀。' },
            { text: 'にっぴゃくさんじゅうに', isCorrect: false, reason: '「二百」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二百三十二」讀「にひゃくさんじゅうに」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 232, kanji: '二百三十二', reading: 'にひゃくさんじゅうに' }
    },
    {
        id: 'num_hundreds_extra_149', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: true,
        stem: '比賽有＿＿名選手。（三百四十三）', stem_zh: '比賽有三百四十三名選手。',
        options: [
            { text: 'さんひゃくよんじゅうさん', isCorrect: false, reason: '陷阱！「三百」濁音化。' },
            { text: 'さんびゃくよんじゅうさん', isCorrect: true, reason: '正確！「三百四十三」。' },
            { text: 'みひゃくよじゅうみ', isCorrect: false, reason: '用音讀。' },
            { text: 'さんぴゃくよんじゅうさん', isCorrect: false, reason: '應是濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三百」濁音化為「さんびゃく」。', trapExplanation: '「三」後「百」濁音化。', relatedRules: ['三百的音變'] },
        sourceItem: { value: 343, kanji: '三百四十三', reading: 'さんびゃくよんじゅうさん' }
    },
    {
        id: 'num_hundreds_extra_150', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '問重量', stem_zh: '問重量',
        dialogue: { speakerA: 'この荷物は何グラムですか？', speakerB: '＿＿グラムです。（四百五十四）' },
        options: [
            { text: 'よんひゃくごじゅうよん', isCorrect: true, reason: '正確！「四百五十四」。' },
            { text: 'しひゃくごじゅうし', isCorrect: false, reason: '「四」讀「よん」。' },
            { text: 'よんびゃくごじゅうよん', isCorrect: false, reason: '「四百」不濁音化。' },
            { text: 'よひゃくいつじゅうよ', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四百五十四」讀「よんひゃくごじゅうよん」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 454, kanji: '四百五十四', reading: 'よんひゃくごじゅうよん' }
    },
    {
        id: 'num_hundreds_extra_151', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「五百六十五」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「五百六十五」的正確讀音是？',
        options: [
            { text: 'ごひゃくろくじゅうご', isCorrect: true, reason: '正確！「五百六十五」。' },
            { text: 'ごびゃくろくじゅうご', isCorrect: false, reason: '「五百」不濁音化。' },
            { text: 'いつひゃくむじゅういつ', isCorrect: false, reason: '用音讀。' },
            { text: 'ごっぴゃくろくじゅうご', isCorrect: false, reason: '「五百」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五百六十五」讀「ごひゃくろくじゅうご」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 565, kanji: '五百六十五', reading: 'ごひゃくろくじゅうご' }
    },
    {
        id: 'num_hundreds_extra_152', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: true,
        stem: '這棟公寓有＿＿戶。（六百七十六）', stem_zh: '這棟公寓有六百七十六戶。',
        options: [
            { text: 'ろくひゃくななじゅうろく', isCorrect: false, reason: '陷阱！「六百」促音+半濁音化。' },
            { text: 'ろっぴゃくななじゅうろく', isCorrect: true, reason: '正確！「六百七十六」。' },
            { text: 'むひゃくなのじゅうむ', isCorrect: false, reason: '用音讀。' },
            { text: 'ろくびゃくななじゅうろく', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「六百」讀「ろっぴゃく」。', trapExplanation: '「六」促音+半濁音化。', relatedRules: ['六百的音變'] },
        sourceItem: { value: 676, kanji: '六百七十六', reading: 'ろっぴゃくななじゅうろく' }
    },
    {
        id: 'num_hundreds_extra_153', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '何台ありますか？', speakerB: '＿＿台です。（七百八十七）' },
        options: [
            { text: 'ななひゃくはちじゅうなな', isCorrect: true, reason: '正確！「七百八十七」。' },
            { text: 'しちひゃくはちじゅうしち', isCorrect: false, reason: '「七」讀「なな」。' },
            { text: 'ななびゃくはちじゅうなな', isCorrect: false, reason: '「七百」不濁音化。' },
            { text: 'なのひゃくやじゅうなの', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七百八十七」讀「ななひゃくはちじゅうなな」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 787, kanji: '七百八十七', reading: 'ななひゃくはちじゅうなな' }
    },
    {
        id: 'num_hundreds_extra_154', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「八百九十八」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「八百九十八」的正確讀音是？',
        options: [
            { text: 'はちひゃくきゅうじゅうはち', isCorrect: false, reason: '陷阱！「八百」促音+半濁音化。' },
            { text: 'はっぴゃくきゅうじゅうはち', isCorrect: true, reason: '正確！「八百九十八」。' },
            { text: 'やひゃくここのじゅうや', isCorrect: false, reason: '用音讀。' },
            { text: 'はちびゃくきゅうじゅうはち', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八百」讀「はっぴゃく」。', trapExplanation: '「八」促音+半濁音化。', relatedRules: ['八百的音變'] },
        sourceItem: { value: 898, kanji: '八百九十八', reading: 'はっぴゃくきゅうじゅうはち' }
    },
    {
        id: 'num_hundreds_extra_155', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '網站有＿＿個會員。（九百九）', stem_zh: '網站有九百零九個會員。',
        options: [
            { text: 'きゅうひゃくきゅう', isCorrect: true, reason: '正確！「九百九」。' },
            { text: 'くひゃくく', isCorrect: false, reason: '「九」讀「きゅう」。' },
            { text: 'きゅうびゃくきゅう', isCorrect: false, reason: '「九百」不濁音化。' },
            { text: 'ここのひゃくここの', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九百九」讀「きゅうひゃくきゅう」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 909, kanji: '九百九', reading: 'きゅうひゃくきゅう' }
    },
    {
        id: 'num_hundreds_extra_156', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: true,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'このスカーフはいくらですか？', speakerB: '＿＿円です。（百十）' },
        options: [
            { text: 'いちひゃくじゅう', isCorrect: false, reason: '陷阱！「一百」促音+半濁音化或省略。' },
            { text: 'ひゃくじゅう', isCorrect: true, reason: '正確！「百」可省略「一」。' },
            { text: 'いっぴゃくじゅう', isCorrect: true, reason: '也正確，完整讀法。' },
            { text: 'ももとお', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「百」可省略「一」。', relatedRules: ['一百の省略'] },
        sourceItem: { value: 110, kanji: '百十', reading: 'ひゃくじゅう' }
    },
    {
        id: 'num_hundreds_extra_157', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「二百二十一」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「二百二十一」的正確讀音是？',
        options: [
            { text: 'にひゃくにじゅういち', isCorrect: true, reason: '正確！「二百二十一」。' },
            { text: 'にびゃくにじゅういち', isCorrect: false, reason: '「二百」不濁音化。' },
            { text: 'ふたひゃくふたじゅうひと', isCorrect: false, reason: '用音讀。' },
            { text: 'にっぴゃくにじゅういち', isCorrect: false, reason: '「二百」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二百二十一」讀「にひゃくにじゅういち」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 221, kanji: '二百二十一', reading: 'にひゃくにじゅういち' }
    },
    {
        id: 'num_hundreds_extra_158', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: true,
        stem: '這個花園有＿＿棵樹。（三百三十二）', stem_zh: '這個花園有三百三十二棵樹。',
        options: [
            { text: 'さんひゃくさんじゅうに', isCorrect: false, reason: '陷阱！「三百」濁音化。' },
            { text: 'さんびゃくさんじゅうに', isCorrect: true, reason: '正確！「三百三十二」。' },
            { text: 'みひゃくみじゅうふた', isCorrect: false, reason: '用音讀。' },
            { text: 'さんぴゃくさんじゅうに', isCorrect: false, reason: '應是濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三百」濁音化為「さんびゃく」。', trapExplanation: '「三」後「百」濁音化。', relatedRules: ['三百的音變'] },
        sourceItem: { value: 332, kanji: '三百三十二', reading: 'さんびゃくさんじゅうに' }
    },
    {
        id: 'num_hundreds_extra_159', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '学生は何人いますか？', speakerB: '＿＿人です。（四百四十三）' },
        options: [
            { text: 'よんひゃくよんじゅうさん', isCorrect: true, reason: '正確！「四百四十三」。' },
            { text: 'しひゃくしじゅうさん', isCorrect: false, reason: '「四」讀「よん」。' },
            { text: 'よんびゃくよんじゅうさん', isCorrect: false, reason: '「四百」不濁音化。' },
            { text: 'よひゃくよじゅうみ', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四百四十三」讀「よんひゃくよんじゅうさん」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 443, kanji: '四百四十三', reading: 'よんひゃくよんじゅうさん' }
    },
    {
        id: 'num_hundreds_extra_160', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「五百五十四」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「五百五十四」的正確讀音是？',
        options: [
            { text: 'ごひゃくごじゅうよん', isCorrect: true, reason: '正確！「五百五十四」。' },
            { text: 'ごびゃくごじゅうし', isCorrect: false, reason: '「五百」不濁音化，「四」讀「よん」。' },
            { text: 'いつひゃくいつじゅうよ', isCorrect: false, reason: '用音讀。' },
            { text: 'ごひゃくごじゅうし', isCorrect: false, reason: '「四」讀「よん」更常見。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五百五十四」讀「ごひゃくごじゅうよん」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 554, kanji: '五百五十四', reading: 'ごひゃくごじゅうよん' }
    },
    {
        id: 'num_hundreds_extra_161', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: true,
        stem: '圖書館藏書＿＿冊。（六百六十五）', stem_zh: '圖書館藏書六百六十五冊。',
        options: [
            { text: 'ろくひゃくろくじゅうご', isCorrect: false, reason: '陷阱！「六百」促音+半濁音化。' },
            { text: 'ろっぴゃくろくじゅうご', isCorrect: true, reason: '正確！「六百六十五」。' },
            { text: 'むひゃくむじゅういつ', isCorrect: false, reason: '用音讀。' },
            { text: 'ろくびゃくろくじゅうご', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「六百」讀「ろっぴゃく」。', trapExplanation: '「六」促音+半濁音化。', relatedRules: ['六百的音變'] },
        sourceItem: { value: 665, kanji: '六百六十五', reading: 'ろっぴゃくろくじゅうご' }
    },
    {
        id: 'num_hundreds_extra_162', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'この帽子はいくらですか？', speakerB: '＿＿円です。（七百七十六）' },
        options: [
            { text: 'ななひゃくななじゅうろく', isCorrect: true, reason: '正確！「七百七十六」。' },
            { text: 'しちひゃくしちじゅうろく', isCorrect: false, reason: '「七」讀「なな」。' },
            { text: 'ななびゃくななじゅうろく', isCorrect: false, reason: '「七百」不濁音化。' },
            { text: 'なのひゃくなのじゅうむ', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七百七十六」讀「ななひゃくななじゅうろく」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 776, kanji: '七百七十六', reading: 'ななひゃくななじゅうろく' }
    },
    {
        id: 'num_hundreds_extra_163', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「八百八十七」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「八百八十七」的正確讀音是？',
        options: [
            { text: 'はちひゃくはちじゅうなな', isCorrect: false, reason: '陷阱！「八百」促音+半濁音化。' },
            { text: 'はっぴゃくはちじゅうなな', isCorrect: true, reason: '正確！「八百八十七」。' },
            { text: 'やひゃくやじゅうなの', isCorrect: false, reason: '用音讀。' },
            { text: 'はちびゃくはちじゅうなな', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八百」讀「はっぴゃく」。', trapExplanation: '「八」促音+半濁音化。', relatedRules: ['八百的音變'] },
        sourceItem: { value: 887, kanji: '八百八十七', reading: 'はっぴゃくはちじゅうなな' }
    },
    {
        id: 'num_hundreds_extra_164', category: 'numbers', subcategory: 'hundreds', type: 'sentence', isTrap: false,
        stem: '今年營業額是＿＿萬。（九百九十八）', stem_zh: '今年營業額是九百九十八萬。',
        options: [
            { text: 'きゅうひゃくきゅうじゅうはち', isCorrect: true, reason: '正確！「九百九十八」。' },
            { text: 'くひゃくくじゅうはち', isCorrect: false, reason: '「九」讀「きゅう」。' },
            { text: 'きゅうびゃくきゅうじゅうはち', isCorrect: false, reason: '「九百」不濁音化。' },
            { text: 'ここのひゃくここのじゅうや', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九百九十八」讀「きゅうひゃくきゅうじゅうはち」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 998, kanji: '九百九十八', reading: 'きゅうひゃくきゅうじゅうはち' }
    },
    {
        id: 'num_hundreds_extra_165', category: 'numbers', subcategory: 'hundreds', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: 'このビルは何階建てですか？', speakerB: '＿＿メートルの高さです。（二百五十）' },
        options: [
            { text: 'にひゃくごじゅう', isCorrect: true, reason: '正確！「二百五十」。' },
            { text: 'にびゃくごじゅう', isCorrect: false, reason: '「二百」不濁音化。' },
            { text: 'ふたひゃくいつじゅう', isCorrect: false, reason: '用音讀。' },
            { text: 'にっぴゃくごじゅう', isCorrect: false, reason: '「二百」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二百五十」讀「にひゃくごじゅう」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 250, kanji: '二百五十', reading: 'にひゃくごじゅう' }
    },
    {
        id: 'num_hundreds_extra_166', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「九百九十九」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「九百九十九」的正確讀音是？',
        options: [
            { text: 'きゅうひゃくきゅうじゅうきゅう', isCorrect: true, reason: '正確！「九百九十九」。' },
            { text: 'くひゃくくじゅうく', isCorrect: false, reason: '「九」讀「きゅう」。' },
            { text: 'きゅうびゃくきゅうじゅうきゅう', isCorrect: false, reason: '「九百」不濁音化。' },
            { text: 'ここのひゃくここのじゅうここの', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九百九十九」讀「きゅうひゃくきゅうじゅうきゅう」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 999, kanji: '九百九十九', reading: 'きゅうひゃくきゅうじゅうきゅう' }
    }
];
