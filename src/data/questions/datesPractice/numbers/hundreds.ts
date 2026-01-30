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
        stem: '「百」的正確讀音是？',
        stem_zh: '「百」的正確讀音是？',
        options: [
            { text: 'ひゃく', isCorrect: true, reason: '正確{せいかく}！「百{ひゃく}」讀作{どくさ}「ひゃく」。' },
            { text: 'もも', isCorrect: false, reason: '「もも」是「桃{もも}」の讀法{よみかた}，不是數字{すうじ}。' },
            { text: 'びゃく', isCorrect: false, reason: '「百{ひゃく}」單獨{たんどく}使用{しよう}時{とき}不濁音化{ふだくおんか}。' },
            { text: 'ぴゃく', isCorrect: false, reason: '「百{ひゃく}」單獨{たんどく}使用{しよう}時{とき}不半濁音化{ふはんだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「百{ひゃく}」讀作{どくさ}「ひゃく」，是標準{ひょうじゅん}音讀{おんどく}。',
            relatedRules: ['百{ひゃく}の基本{きほん}讀法{よみかた}', '百位數{ひゃくいすう}の發音{はつおん}']
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
            { text: 'ひゃくえん', isCorrect: true, reason: '正確{せいかく}！「百円{ひゃくえん}」讀作{どくさ}「ひゃくえん」。' },
            { text: 'いちひゃくえん', isCorrect: false, reason: '通常{つうじょう}省略{しょうりゃく}「いち」，直接{ちょくせつ}說{いう}「ひゃく」。' },
            { text: 'びゃくえん', isCorrect: false, reason: '「百{ひゃく}」不濁音化{ふだくおんか}。' },
            { text: 'もえん', isCorrect: false, reason: '「もも」不是數字{すうじ}の讀法{よみかた}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「百円{ひゃくえん}」通常{つうじょう}省略{しょうりゃく}「一{いち}」，直接{ちょくせつ}說{いう}「ひゃく」。',
            relatedRules: ['金額{きんがく}の表達{ひょうたつ}', '百{ひゃく}の省略{しょうりゃく}規則{きそく}']
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
            { text: 'ひゃくえん', isCorrect: true, reason: '正確{せいかく}！「百円{ひゃくえん}」讀作{どくさ}「ひゃくえん」。' },
            { text: 'いっひゃくえん', isCorrect: false, reason: '「一百{いちひゃく}」不促音化{ふそくおんか}，且通常{つうじょう}省略{しょうりゃく}「いち」。' },
            { text: 'ひゃっえん', isCorrect: false, reason: '「百{ひゃく}」不促音化{ふそくおんか}。' },
            { text: 'いちひゃっえん', isCorrect: false, reason: '「百{ひゃく}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「百円{ひゃくえん}」是最{もっと}常見{じょうけん}の金額{きんがく}表達{ひょうたつ}之一{のいち}。',
            relatedRules: ['金額{きんがく}の表達{ひょうたつ}', '百{ひゃく}の使用{しよう}']
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
        stem: '「二百」的正確讀音是？',
        stem_zh: '「二百」的正確讀音是？',
        options: [
            { text: 'にひゃく', isCorrect: true, reason: '正確{せいかく}！「二百{にひゃく}」讀作{どくさ}「にひゃく」。' },
            { text: 'ふたひゃく', isCorrect: false, reason: '組合{くみあわせ}數字{すうじ}使用{しよう}する音讀{おんどく}「に」。' },
            { text: 'にびゃく', isCorrect: false, reason: '「二百{にひゃく}」不濁音化{ふだくおんか}。' },
            { text: 'にぴゃく', isCorrect: false, reason: '「二百{にひゃく}」不半濁音化{ふはんだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二百{にひゃく}」讀作{どくさ}「にひゃく」，無{ない}音變{おんへん}。',
            relatedRules: ['百位數{ひゃくいすう}の讀法{よみかた}', '200の發音{はつおん}']
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
            { text: 'にひゃくえん', isCorrect: true, reason: '正確{せいかく}！「二百円{にひゃくえん}」讀作{どくさ}「にひゃくえん」。' },
            { text: 'ふたひゃくえん', isCorrect: false, reason: '金額{きんがく}使用{しよう}する音讀{おんどく}「に」。' },
            { text: 'にびゃくえん', isCorrect: false, reason: '「二百{にひゃく}」不濁音化{ふだくおんか}。' },
            { text: 'にぴゃくえん', isCorrect: false, reason: '「二百{にひゃく}」不半濁音化{ふはんだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二百円{にひゃくえん}」讀作{どくさ}「にひゃくえん」，無{ない}音變{おんへん}。',
            relatedRules: ['金額{きんがく}の表達{ひょうたつ}', '200の發音{はつおん}']
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
            { text: 'にひゃくえん', isCorrect: true, reason: '正確{せいかく}！「二百円{にひゃくえん}」讀作{どくさ}「にひゃくえん」。' },
            { text: 'ふたひゃくえん', isCorrect: false, reason: '金額{きんがく}使用{しよう}する音讀{おんどく}「に」。' },
            { text: 'にびゃくえん', isCorrect: false, reason: '「二百{にひゃく}」不濁音化{ふだくおんか}。' },
            { text: 'にっひゃくえん', isCorrect: false, reason: '「二{に}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二百円{にひゃくえん}」讀作{どくさ}「にひゃくえん」。',
            relatedRules: ['金額{きんがく}の表達{ひょうたつ}', '200の發音{はつおん}']
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
        stem: '「三百」的正確讀音是？',
        stem_zh: '「三百」的正確讀音是？',
        options: [
            { text: 'さんひゃく', isCorrect: false, reason: '陷阱{かんけい}！「三百{さんびゃく}」會濁音化{だくおんか}，讀む{よむ}「さんびゃく」。' },
            { text: 'さんびゃく', isCorrect: true, reason: '正確{せいかく}！「三{さん}」の撥音{はつおん}「ん」後面{うしろ}，「ひゃく」濁音化{だくおんか}為「びゃく」。' },
            { text: 'さんぴゃく', isCorrect: false, reason: '應{おう}是濁音{だくおん}「び」，不是半濁音{はんだくおん}「ぴ」。' },
            { text: 'みひゃく', isCorrect: false, reason: '組合{くみあわせ}數字{すうじ}使用{しよう}する音讀{おんどく}「さん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三百{さんびゃく}」中，撥音{はつおん}「ん」後面{うしろ}の「ひゃく」會濁音化{だくおんか}為「びゃく」。這是h-p轉換{てんかん}規律{きりつ}の一部分{いちぶぶん}。',
            trapExplanation: '這是重要{じゅうよう}陷阱題{かんけいだい}，測試{そくし}「三{さん}」引發{いんはつ}の濁音化{だくおんか}規則{きそく}。',
            relatedRules: ['三{さん}引發{いんはつ}の濁音化{だくおんか}', 'h-p轉換{てんかん}規律{きりつ}', '撥音{はつおん}後{あと}の音變{おんへん}']
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
            { text: 'さんひゃくえん', isCorrect: false, reason: '陷阱{かんけい}！「三百{さんびゃく}」會濁音化{だくおんか}。' },
            { text: 'さんびゃくえん', isCorrect: true, reason: '正確{せいかく}！「三百円{さんびゃくえん}」讀作{どくさ}「さんびゃくえん」。' },
            { text: 'さんぴゃくえん', isCorrect: false, reason: '應{おう}是濁音{だくおん}「び」。' },
            { text: 'みびゃくえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「さん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三百円{さんびゃくえん}」讀作{どくさ}「さんびゃくえん」，「ひゃく」濁音化{だくおんか}為「びゃく」。',
            trapExplanation: '學習者{がくしゅうしゃ}容易{ようい}忽略{こりゃく}濁音化{だくおんか}規則{きそく}。',
            relatedRules: ['金額{きんがく}の表達{ひょうたつ}', '300の濁音化{だくおんか}']
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
            { text: 'さんひゃくえん', isCorrect: false, reason: '陷阱{かんけい}！「三百{さんびゃく}」必須{ひっす}濁音化{だくおんか}。' },
            { text: 'さんびゃくえん', isCorrect: true, reason: '正確{せいかく}！「三百円{さんびゃくえん}」讀作{どくさ}「さんびゃくえん」。' },
            { text: 'さんぴゃくえん', isCorrect: false, reason: '應{おう}是濁音{だくおん}「び」，不是半濁音{はんだくおん}「ぴ」。' },
            { text: 'みっぴゃくえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「さん」，且應{おう}是濁音{だくおん}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三百円{さんびゃくえん}」讀作{どくさ}「さんびゃくえん」。',
            trapExplanation: '這是常見{じょうけん}の陷阱{かんけい}，「三{さん}」後面{うしろ}の「ひゃく」必須{ひっす}濁音化{だくおんか}。',
            relatedRules: ['300の濁音化{だくおんか}', '金額{きんがく}の發音{はつおん}']
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
        stem: '「六百」的正確讀音是？',
        stem_zh: '「六百」的正確讀音是？',
        options: [
            { text: 'ろくひゃく', isCorrect: false, reason: '陷阱{かんけい}！「六百{ろっぴゃく}」會促音化{そくおんか}＋半濁音化{はんだくおんか}。' },
            { text: 'ろっぴゃく', isCorrect: true, reason: '正確{せいかく}！「六{ろく}」變成{へんせい}「ろっ」，「ひゃく」變成{へんせい}「ぴゃく」。' },
            { text: 'ろくびゃく', isCorrect: false, reason: '應{おう}是促音{そくおん}＋半濁音{はんだくおん}，不是只有{だけ}濁音{だくおん}。' },
            { text: 'むっぴゃく', isCorrect: false, reason: '組合{くみあわせ}數字{すうじ}使用{しよう}する音讀{おんどく}「ろく」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「六百{ろっぴゃく}」中，「六{ろく}」促音化{そくおんか}為「ろっ」，「ひゃく」半濁音化{はんだくおんか}為「ぴゃく」。',
            trapExplanation: '這是重要{じゅうよう}陷阱題{かんけいだい}，測試{そくし}「六{ろく}」引發{いんはつ}の促音{そくおん}＋半濁音{はんだくおん}規則{きそく}。',
            relatedRules: ['六{ろく}引發{いんはつ}の促音{そくおん}＋半濁音{はんだくおん}', 'h-p轉換{てんかん}規律{きりつ}']
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
            { text: 'ろくひゃくえん', isCorrect: false, reason: '陷阱{かんけい}！「六百{ろっぴゃく}」會促音化{そくおんか}＋半濁音化{はんだくおんか}。' },
            { text: 'ろっぴゃくえん', isCorrect: true, reason: '正確{せいかく}！「六百円{ろっぴゃくえん}」讀作{どくさ}「ろっぴゃくえん」。' },
            { text: 'ろくびゃくえん', isCorrect: false, reason: '應{おう}是促音{そくおん}＋半濁音{はんだくおん}。' },
            { text: 'ろっびゃくえん', isCorrect: false, reason: '應{おう}是半濁音{はんだくおん}「ぴ」，不是濁音{だくおん}「び」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「六百円{ろっぴゃくえん}」讀作{どくさ}「ろっぴゃくえん」。',
            trapExplanation: '學習者{がくしゅうしゃ}容易{ようい}忽略{こりゃく}促音{そくおん}＋半濁音{はんだくおん}規則{きそく}。',
            relatedRules: ['金額{きんがく}の表達{ひょうたつ}', '600の音變{おんへん}']
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
            { text: 'ろくひゃくえん', isCorrect: false, reason: '陷阱{かんけい}！必須{ひっす}促音{そくおん}＋半濁音{はんだくおん}。' },
            { text: 'ろっぴゃくえん', isCorrect: true, reason: '正確{せいかく}！「六百円{ろっぴゃくえん}」。' },
            { text: 'むっぴゃくえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「ろく」→「ろっ」。' },
            { text: 'ろっびゃくえん', isCorrect: false, reason: '應{おう}是半濁音{はんだくおん}「ぴ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「六百円{ろっぴゃくえん}」讀作{どくさ}「ろっぴゃくえん」。',
            trapExplanation: '這是常見{じょうけん}の陷阱{かんけい}。',
            relatedRules: ['600の音變{おんへん}', '金額{きんがく}の發音{はつおん}']
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
        stem: '「八百」的正確讀音是？',
        stem_zh: '「八百」的正確讀音是？',
        options: [
            { text: 'はちひゃく', isCorrect: false, reason: '陷阱{かんけい}！「八百{はっぴゃく}」會促音化{そくおんか}＋半濁音化{はんだくおんか}。' },
            { text: 'はっぴゃく', isCorrect: true, reason: '正確{せいかく}！「八{はち}」變成{へんせい}「はっ」，「ひゃく」變成{へんせい}「ぴゃく」。' },
            { text: 'はちびゃく', isCorrect: false, reason: '應{おう}是促音{そくおん}＋半濁音{はんだくおん}。' },
            { text: 'やっぴゃく', isCorrect: false, reason: '組合{くみあわせ}數字{すうじ}使用{しよう}する音讀{おんどく}「はち」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八百{はっぴゃく}」中，「八{はち}」促音化{そくおんか}為「はっ」，「ひゃく」半濁音化{はんだくおんか}為「ぴゃく」。',
            trapExplanation: '這是重要{じゅうよう}陷阱題{かんけいだい}，測試{そくし}「八{はち}」引發{いんはつ}の促音{そくおん}＋半濁音{はんだくおん}規則{きそく}。',
            relatedRules: ['八{はち}引發{いんはつ}の促音{そくおん}＋半濁音{はんだくおん}', 'h-p轉換{てんかん}規律{きりつ}']
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
            { text: 'はちひゃくえん', isCorrect: false, reason: '陷阱{かんけい}！「八百{はっぴゃく}」會促音化{そくおんか}＋半濁音化{はんだくおんか}。' },
            { text: 'はっぴゃくえん', isCorrect: true, reason: '正確{せいかく}！「八百円{はっぴゃくえん}」讀作{どくさ}「はっぴゃくえん」。' },
            { text: 'はちびゃくえん', isCorrect: false, reason: '應{おう}是促音{そくおん}＋半濁音{はんだくおん}。' },
            { text: 'はっびゃくえん', isCorrect: false, reason: '應{おう}是半濁音{はんだくおん}「ぴ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八百円{はっぴゃくえん}」讀作{どくさ}「はっぴゃくえん」。',
            trapExplanation: '學習者{がくしゅうしゃ}容易{ようい}忽略{こりゃく}促音{そくおん}＋半濁音{はんだくおん}規則{きそく}。',
            relatedRules: ['金額{きんがく}の表達{ひょうたつ}', '800の音變{おんへん}']
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
            { text: 'はちひゃくえん', isCorrect: false, reason: '陷阱{かんけい}！必須{ひっす}促音{そくおん}＋半濁音{はんだくおん}。' },
            { text: 'はっぴゃくえん', isCorrect: true, reason: '正確{せいかく}！「八百円{はっぴゃくえん}」。' },
            { text: 'やっぴゃくえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「はち」→「はっ」。' },
            { text: 'はっびゃくえん', isCorrect: false, reason: '應{おう}是半濁音{はんだくおん}「ぴ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八百円{はっぴゃくえん}」讀作{どくさ}「はっぴゃくえん」。',
            trapExplanation: '這是常見{じょうけん}の陷阱{かんけい}。',
            relatedRules: ['800の音變{おんへん}', '金額{きんがく}の發音{はつおん}']
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
        stem: '「四百」的正確讀音是？',
        stem_zh: '「四百」的正確讀音是？',
        options: [
            { text: 'よんひゃく', isCorrect: true, reason: '正確{せいかく}！「四百{よんひゃく}」讀作{どくさ}「よんひゃく」，無{ない}音變{おんへん}。' },
            { text: 'しひゃく', isCorrect: false, reason: '為{ため}避諱{ひき}「死{し}」，多用{おおくもちい}「よん」。' },
            { text: 'よんびゃく', isCorrect: false, reason: '「四百{よんひゃく}」不濁音化{ふだくおんか}。' },
            { text: 'よっぴゃく', isCorrect: false, reason: '「四{よん}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四百{よんひゃく}」讀作{どくさ}「よんひゃく」，使用{しよう}「よん」避諱{ひき}，無{ない}音變{おんへん}。',
            relatedRules: ['四{よん}の避諱{ひき}讀法{よみかた}', '400の發音{はつおん}']
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
            { text: 'よんひゃくえん', isCorrect: true, reason: '正確{せいかく}！「四百円{よんひゃくえん}」讀作{どくさ}「よんひゃくえん」。' },
            { text: 'しひゃくえん', isCorrect: false, reason: '為{ため}避諱{ひき}「死{し}」，多用{おおくもちい}「よん」。' },
            { text: 'よんびゃくえん', isCorrect: false, reason: '「四百{よんひゃく}」不濁音化{ふだくおんか}。' },
            { text: 'よっぴゃくえん', isCorrect: false, reason: '「四{よん}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四百円{よんひゃくえん}」讀作{どくさ}「よんひゃくえん」。',
            relatedRules: ['金額{きんがく}の表達{ひょうたつ}', '400の發音{はつおん}']
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
            { text: 'よんひゃくえん', isCorrect: true, reason: '正確{せいかく}！「四百円{よんひゃくえん}」。' },
            { text: 'しひゃくえん', isCorrect: false, reason: '為{ため}避諱{ひき}多用{おおくもちい}「よん」。' },
            { text: 'よんびゃくえん', isCorrect: false, reason: '不濁音化{ふだくおんか}。' },
            { text: 'よっぴゃくえん', isCorrect: false, reason: '不促音{ふそくおん}＋半濁音{はんだくおん}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四百円{よんひゃくえん}」讀作{どくさ}「よんひゃくえん」。',
            relatedRules: ['400の發音{はつおん}', '金額{きんがく}表達{ひょうたつ}']
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
        stem: '「五百」的正確讀音是？',
        stem_zh: '「五百」的正確讀音是？',
        options: [
            { text: 'ごひゃく', isCorrect: true, reason: '正確{せいかく}！「五百{ごひゃく}」讀作{どくさ}「ごひゃく」，無{ない}音變{おんへん}。' },
            { text: 'いつひゃく', isCorrect: false, reason: '組合{くみあわせ}數字{すうじ}使用{しよう}する音讀{おんどく}「ご」。' },
            { text: 'ごびゃく', isCorrect: false, reason: '「五百{ごひゃく}」不濁音化{ふだくおんか}。' },
            { text: 'ごぴゃく', isCorrect: false, reason: '「五百{ごひゃく}」不半濁音化{ふはんだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五百{ごひゃく}」讀作{どくさ}「ごひゃく」，無{ない}音變{おんへん}。',
            relatedRules: ['百位數{ひゃくいすう}の讀法{よみかた}', '500の發音{はつおん}']
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
            { text: 'ごひゃくえん', isCorrect: true, reason: '正確{せいかく}！「五百円{ごひゃくえん}」讀作{どくさ}「ごひゃくえん」。' },
            { text: 'いつひゃくえん', isCorrect: false, reason: '金額{きんがく}使用{しよう}する音讀{おんどく}「ご」。' },
            { text: 'ごびゃくえん', isCorrect: false, reason: '「五百{ごひゃく}」不濁音化{ふだくおんか}。' },
            { text: 'ごぴゃくえん', isCorrect: false, reason: '「五百{ごひゃく}」不半濁音化{ふはんだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五百円{ごひゃくえん}」讀作{どくさ}「ごひゃくえん」。',
            relatedRules: ['金額{きんがく}の表達{ひょうたつ}', '500の發音{はつおん}']
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
            { text: 'ごひゃくえん', isCorrect: true, reason: '正確{せいかく}！「五百円{ごひゃくえん}」。' },
            { text: 'いつひゃくえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「ご」。' },
            { text: 'ごびゃくえん', isCorrect: false, reason: '不濁音化{ふだくおんか}。' },
            { text: 'ごっぴゃくえん', isCorrect: false, reason: '不促音{ふそくおん}＋半濁音{はんだくおん}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五百円{ごひゃくえん}」是常見{じょうけん}の硬幣{こうか}金額{きんがく}。',
            relatedRules: ['500の發音{はつおん}', '金額{きんがく}表達{ひょうたつ}']
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
        stem: '「七百」的正確讀音是？',
        stem_zh: '「七百」的正確讀音是？',
        options: [
            { text: 'ななひゃく', isCorrect: true, reason: '正確{せいかく}！「七百{ななひゃく}」讀作{どくさ}「ななひゃく」。' },
            { text: 'しちひゃく', isCorrect: false, reason: '為{ため}避免{ひめん}混淆{こんこう}，多用{おおくもちい}「なな」。' },
            { text: 'ななびゃく', isCorrect: false, reason: '「七百{ななひゃく}」不濁音化{ふだくおんか}。' },
            { text: 'ななぴゃく', isCorrect: false, reason: '「七百{ななひゃく}」不半濁音化{ふはんだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七百{ななひゃく}」讀作{どくさ}「ななひゃく」，使用{しよう}「なな」避免{ひめん}混淆{こんこう}，無{ない}音變{おんへん}。',
            relatedRules: ['七{なな}の避免{ひめん}混淆{こんこう}讀法{よみかた}', '700の發音{はつおん}']
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
            { text: 'ななひゃくえん', isCorrect: true, reason: '正確{せいかく}！「七百円{ななひゃくえん}」讀作{どくさ}「ななひゃくえん」。' },
            { text: 'しちひゃくえん', isCorrect: false, reason: '為{ため}避免{ひめん}混淆{こんこう}，多用{おおくもちい}「なな」。' },
            { text: 'ななびゃくえん', isCorrect: false, reason: '「七百{ななひゃく}」不濁音化{ふだくおんか}。' },
            { text: 'ななぴゃくえん', isCorrect: false, reason: '「七百{ななひゃく}」不半濁音化{ふはんだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七百円{ななひゃくえん}」讀作{どくさ}「ななひゃくえん」。',
            relatedRules: ['金額{きんがく}の表達{ひょうたつ}', '700の發音{はつおん}']
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
            { text: 'ななひゃくえん', isCorrect: true, reason: '正確{せいかく}！「七百円{ななひゃくえん}」。' },
            { text: 'しちひゃくえん', isCorrect: false, reason: '為{ため}避免{ひめん}混淆{こんこう}多用{おおくもちい}「なな」。' },
            { text: 'ななびゃくえん', isCorrect: false, reason: '不濁音化{ふだくおんか}。' },
            { text: 'なっぴゃくえん', isCorrect: false, reason: '「七{なな}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七百円{ななひゃくえん}」讀作{どくさ}「ななひゃくえん」。',
            relatedRules: ['700の發音{はつおん}', '金額{きんがく}表達{ひょうたつ}']
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
        stem: '「九百」的正確讀音是？',
        stem_zh: '「九百」的正確讀音是？',
        options: [
            { text: 'きゅうひゃく', isCorrect: true, reason: '正確{せいかく}！「九百{きゅうひゃく}」讀作{どくさ}「きゅうひゃく」。' },
            { text: 'くひゃく', isCorrect: false, reason: '為{ため}避諱{ひき}「苦{く}」，多用{おおくもちい}「きゅう」。' },
            { text: 'きゅうびゃく', isCorrect: false, reason: '「九百{きゅうひゃく}」不濁音化{ふだくおんか}。' },
            { text: 'きゅうぴゃく', isCorrect: false, reason: '「九百{きゅうひゃく}」不半濁音化{ふはんだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九百{きゅうひゃく}」讀作{どくさ}「きゅうひゃく」，使用{しよう}「きゅう」避諱{ひき}，無{ない}音變{おんへん}。',
            relatedRules: ['九{きゅう}の避諱{ひき}讀法{よみかた}', '900の發音{はつおん}']
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
            { text: 'きゅうひゃくえん', isCorrect: true, reason: '正確{せいかく}！「九百円{きゅうひゃくえん}」讀作{どくさ}「きゅうひゃくえん」。' },
            { text: 'くひゃくえん', isCorrect: false, reason: '為{ため}避諱{ひき}「苦{く}」，多用{おおくもちい}「きゅう」。' },
            { text: 'きゅうびゃくえん', isCorrect: false, reason: '「九百{きゅうひゃく}」不濁音化{ふだくおんか}。' },
            { text: 'きゅうぴゃくえん', isCorrect: false, reason: '「九百{きゅうひゃく}」不半濁音化{ふはんだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九百円{きゅうひゃくえん}」讀作{どくさ}「きゅうひゃくえん」。',
            relatedRules: ['金額{きんがく}の表達{ひょうたつ}', '900の發音{はつおん}']
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
            { text: 'きゅうひゃくえん', isCorrect: true, reason: '正確{せいかく}！「九百円{きゅうひゃくえん}」。' },
            { text: 'くひゃくえん', isCorrect: false, reason: '為{ため}避諱{ひき}多用{おおくもちい}「きゅう」。' },
            { text: 'きゅうびゃくえん', isCorrect: false, reason: '不濁音化{ふだくおんか}。' },
            { text: 'きゅっぴゃくえん', isCorrect: false, reason: '「九{きゅう}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九百円{きゅうひゃくえん}」讀作{どくさ}「きゅうひゃくえん」。',
            relatedRules: ['900の發音{はつおん}', '金額{きんがく}表達{ひょうたつ}']
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
        explanation: { correctRule: '300濁音化，600/800促音+半濁音化。', trapExplanation: '這是陷阱題，測試百位數音變規則。', relatedRules: ['百の音變規則'] },
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
        explanation: { correctRule: '「百五十円」讀「ひゃくごじゅうえん」。', relatedRules: ['金額の讀法'] },
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
        explanation: { correctRule: '「二百人」讀「にひゃくにん」。', relatedRules: ['人數の讀法'] },
        sourceItem: { value: 200, kanji: '二百人', reading: 'にひゃくにん' }
    },
    {
        id: 'num_hundreds_extra_4', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「三百五十」的正確讀音是？', stem_zh: '「三百五十」的正確讀音是？',
        options: [
            { text: 'さんひゃくごじゅう', isCorrect: false, reason: '陷阱！「三百」濁音化。' },
            { text: 'さんびゃくごじゅう', isCorrect: true, reason: '正確！「三百五十」讀「さんびゃくごじゅう」。' },
            { text: 'さんぴゃくごじゅう', isCorrect: false, reason: '應是濁音「び」。' },
            { text: 'みひゃくごじゅう', isCorrect: false, reason: '組合數字使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三百」濁音化為「さんびゃく」。', trapExplanation: '這是陷阱題。', relatedRules: ['三百の音變'] },
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
        explanation: { correctRule: '「四百ページ」讀「よんひゃくページ」。', relatedRules: ['頁數の讀法'] },
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
        explanation: { correctRule: '「五百メートル」讀「ごひゃくメートル」。', relatedRules: ['距離の讀法'] },
        sourceItem: { value: 500, kanji: '五百', reading: 'ごひゃく' }
    },
    {
        id: 'num_hundreds_extra_7', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「六百三十」的正確讀音是？', stem_zh: '「六百三十」的正確讀音是？',
        options: [
            { text: 'ろくひゃくさんじゅう', isCorrect: false, reason: '陷阱！「六百」促音+半濁音化。' },
            { text: 'ろっぴゃくさんじゅう', isCorrect: true, reason: '正確！「六百三十」讀「ろっぴゃくさんじゅう」。' },
            { text: 'ろくびゃくさんじゅう', isCorrect: false, reason: '應是促音+半濁音。' },
            { text: 'むっぴゃくさんじゅう', isCorrect: false, reason: '組合數字使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「六百」促音+半濁音化。', trapExplanation: '這是陷阱題。', relatedRules: ['六百の音變'] },
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
        explanation: { correctRule: '「七百万円」讀「ななひゃくまんえん」。', relatedRules: ['金額の讀法'] },
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
        explanation: { correctRule: '「八百」促音+半濁音化。', trapExplanation: '這是陷阱題。', relatedRules: ['八百の音變'] },
        sourceItem: { value: 899, kanji: '八百九十九円', reading: 'はっぴゃくきゅうじゅうきゅうえん' }
    },
    {
        id: 'num_hundreds_extra_10', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「九百九十九」的正確讀音是？', stem_zh: '「九百九十九」的正確讀音是？',
        options: [
            { text: 'きゅうひゃくきゅうじゅうきゅう', isCorrect: true, reason: '正確！「九百九十九」讀「きゅうひゃくきゅうじゅうきゅう」。' },
            { text: 'くひゃくくじゅうく', isCorrect: false, reason: '為避諱「苦」，多用「きゅう」。' },
            { text: 'きゅうびゃくきゅうじゅうきゅう', isCorrect: false, reason: '「九百」不濁音化。' },
            { text: 'きゅうぴゃくきゅうじゅうきゅう', isCorrect: false, reason: '「九百」不半濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九百九十九」讀「きゅうひゃくきゅうじゅうきゅう」。', relatedRules: ['數字組合の讀法'] },
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
        explanation: { correctRule: '「百二十」讀「ひゃくにじゅう」。', relatedRules: ['距離の讀法'] },
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
        explanation: { correctRule: '「二百四十分」讀「にひゃくよんじゅっぷん」。', relatedRules: ['分の讀法'] },
        sourceItem: { value: 240, kanji: '二百四十分', reading: 'にひゃくよんじゅっぷん' }
    },
    {
        id: 'num_hundreds_extra_13', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「三百六十五」的正確讀音是？', stem_zh: '「三百六十五」的正確讀音是？',
        options: [
            { text: 'さんひゃくろくじゅうご', isCorrect: false, reason: '陷阱！「三百」濁音化。' },
            { text: 'さんびゃくろくじゅうご', isCorrect: true, reason: '正確！「三百六十五」讀「さんびゃくろくじゅうご」。' },
            { text: 'みひゃくむじゅういつ', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'さんぴゃくろくじゅうご', isCorrect: false, reason: '應是濁音「び」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三百」濁音化為「さんびゃく」。', trapExplanation: '365是一年的天數。', relatedRules: ['三百の音變'] },
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
        explanation: { correctRule: '「四百二十一号室」讀「よんひゃくにじゅういちごうしつ」。', relatedRules: ['房號の讀法'] },
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
        explanation: { correctRule: '「五百人」讀「ごひゃくにん」。', relatedRules: ['人數の讀法'] },
        sourceItem: { value: 500, kanji: '五百人', reading: 'ごひゃくにん' }
    },
    {
        id: 'num_hundreds_extra_16', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「六百六十六」的正確讀音是？', stem_zh: '「六百六十六」的正確讀音是？',
        options: [
            { text: 'ろくひゃくろくじゅうろく', isCorrect: false, reason: '陷阱！「六百」促音+半濁音化。' },
            { text: 'ろっぴゃくろくじゅうろく', isCorrect: true, reason: '正確！「六百六十六」讀「ろっぴゃくろくじゅうろく」。' },
            { text: 'むひゃくむじゅうむ', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'ろくびゃくろくじゅうろく', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「六百」促音+半濁音化。', trapExplanation: '666的讀法。', relatedRules: ['六百の音變'] },
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
        explanation: { correctRule: '電話號碼逐個數字讀出。', relatedRules: ['電話番号の讀法'] },
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
        explanation: { correctRule: '「八百」促音+半濁音化。', trapExplanation: '這是陷阱題。', relatedRules: ['八百の音變'] },
        sourceItem: { value: 850, kanji: '八百五十円', reading: 'はっぴゃくごじゅうえん' }
    },
    {
        id: 'num_hundreds_extra_19', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「百八」的正確讀音是？', stem_zh: '「百八」的正確讀音是？',
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
        explanation: { correctRule: '「百点満点」讀「ひゃくてんまんてん」。', relatedRules: ['分數の讀法'] },
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
        explanation: { correctRule: '「二百五十ページ」讀「にひゃくごじゅうページ」。', relatedRules: ['頁數の讀法'] },
        sourceItem: { value: 250, kanji: '二百五十', reading: 'にひゃくごじゅう' }
    },
    {
        id: 'num_hundreds_extra_22', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「三百三」的正確讀音是？', stem_zh: '「三百三」的正確讀音是？',
        options: [
            { text: 'さんひゃくさん', isCorrect: false, reason: '陷阱！「三百」濁音化。' },
            { text: 'さんびゃくさん', isCorrect: true, reason: '正確！「三百三」讀「さんびゃくさん」。' },
            { text: 'みひゃくみ', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'さんぴゃくさん', isCorrect: false, reason: '應是濁音「び」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三百」濁音化為「さんびゃく」。', trapExplanation: '這是陷阱題。', relatedRules: ['三百の音變'] },
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
        explanation: { correctRule: '馬拉松距離「四十二キロ」。', relatedRules: ['距離の讀法'] },
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
        explanation: { correctRule: '「四百八十円」讀「よんひゃくはちじゅうえん」。', relatedRules: ['金額の讀法'] },
        sourceItem: { value: 480, kanji: '四百八十円', reading: 'よんひゃくはちじゅうえん' }
    },
    {
        id: 'num_hundreds_extra_25', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「五百五十五」的正確讀音是？', stem_zh: '「五百五十五」的正確讀音是？',
        options: [
            { text: 'ごひゃくごじゅうご', isCorrect: true, reason: '正確！「五百五十五」讀「ごひゃくごじゅうご」。' },
            { text: 'いつひゃくいつじゅういつ', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'ごびゃくごじゅうご', isCorrect: false, reason: '「五百」不濁音化。' },
            { text: 'ごっぴゃくごじゅうご', isCorrect: false, reason: '「五」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五百五十五」讀「ごひゃくごじゅうご」。', relatedRules: ['數字組合の讀法'] },
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
        explanation: { correctRule: '「六百」促音+半濁音化。', trapExplanation: '這是陷阱題。', relatedRules: ['六百の音變'] },
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
        explanation: { correctRule: '「七十キロ」讀「ななじゅうキロ」。', relatedRules: ['距離の讀法'] },
        sourceItem: { value: 70, kanji: '七十キロ', reading: 'ななじゅうキロ' }
    },
    {
        id: 'num_hundreds_extra_28', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「七百七十七」的正確讀音是？', stem_zh: '「七百七十七」的正確讀音是？',
        options: [
            { text: 'ななひゃくななじゅうなな', isCorrect: true, reason: '正確！「七百七十七」讀「ななひゃくななじゅうなな」。' },
            { text: 'しちひゃくしちじゅうしち', isCorrect: false, reason: '為避免混淆，多用「なな」。' },
            { text: 'ななびゃくななじゅうなな', isCorrect: false, reason: '「七百」不濁音化。' },
            { text: 'ななぴゃくななじゅうなな', isCorrect: false, reason: '「七百」不半濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七百七十七」讀「ななひゃくななじゅうなな」。', relatedRules: ['數字組合の讀法'] },
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
        explanation: { correctRule: '「八百」促音+半濁音化。', trapExplanation: '這是陷阱題。', relatedRules: ['八百の音變'] },
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
        explanation: { correctRule: '「八百」促音+半濁音化。', relatedRules: ['八百の音變', '人數の讀法'] },
        sourceItem: { value: 888, kanji: '八百八十八人', reading: 'はっぴゃくはちじゅうはちにん' }
    },
    {
        id: 'num_hundreds_extra_31', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「九百九十」的正確讀音是？', stem_zh: '「九百九十」的正確讀音是？',
        options: [
            { text: 'きゅうひゃくきゅうじゅう', isCorrect: true, reason: '正確！「九百九十」讀「きゅうひゃくきゅうじゅう」。' },
            { text: 'くひゃくくじゅう', isCorrect: false, reason: '為避諱「苦」，多用「きゅう」。' },
            { text: 'きゅうびゃくきゅうじゅう', isCorrect: false, reason: '「九百」不濁音化。' },
            { text: 'ここひゃくここじゅう', isCorrect: false, reason: '「ここ」不是「九」的讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九百九十」讀「きゅうひゃくきゅうじゅう」。', relatedRules: ['數字組合の讀法'] },
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
        explanation: { correctRule: '300濁音化，600/800促音+半濁音化。', trapExplanation: '這是陷阱題，測試百位數音變規則。', relatedRules: ['百の音變規則'] },
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
        explanation: { correctRule: '「三」的撥音「ん」後「ひ」濁音化為「び」。', trapExplanation: '這是陷阱題。', relatedRules: ['三引發の濁音化'] },
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
        explanation: { correctRule: '600讀「ろっぴゃく」，有促音+半濁音化。', relatedRules: ['六百の音變'] },
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
        explanation: { correctRule: '百位數使用音讀組合，300/600/800有音變。', relatedRules: ['百位數の基本規則'] },
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
        explanation: { correctRule: '「百円」通常省略「いち」。', relatedRules: ['金額の讀法'] },
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
        explanation: { correctRule: '「八十四円」讀「はちじゅうよんえん」。', relatedRules: ['金額の讀法'] },
        sourceItem: { value: 84, kanji: '八十四円', reading: 'はちじゅうよんえん' }
    },
    {
        id: 'num_hundreds_extra_34', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「百十」的正確讀音是？', stem_zh: '「百十」的正確讀音是？',
        options: [
            { text: 'ひゃくじゅう', isCorrect: true, reason: '正確！「百十」讀「ひゃくじゅう」。' },
            { text: 'いちひゃくじゅう', isCorrect: false, reason: '通常省略「いち」。' },
            { text: 'ひゃくとお', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'もじゅう', isCorrect: false, reason: '「百」不讀「も」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「百十」讀「ひゃくじゅう」。', relatedRules: ['數字組合の讀法'] },
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
        explanation: { correctRule: '「六十五キロ」讀「ろくじゅうごキロ」。', relatedRules: ['重量の讀法'] },
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
        explanation: { correctRule: '「三百」濁音化為「さんびゃく」。', trapExplanation: '這是陷阱題。', relatedRules: ['三百の音變'] },
        sourceItem: { value: 380, kanji: '三百八十円', reading: 'さんびゃくはちじゅうえん' }
    },
    {
        id: 'num_hundreds_extra_37', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「二百二十二」的正確讀音是？', stem_zh: '「二百二十二」的正確讀音是？',
        options: [
            { text: 'にひゃくにじゅうに', isCorrect: true, reason: '正確！「二百二十二」讀「にひゃくにじゅうに」。' },
            { text: 'ふたひゃくふたじゅうふた', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'にびゃくにじゅうに', isCorrect: false, reason: '「二百」不濁音化。' },
            { text: 'にっぴゃくにじゅうに', isCorrect: false, reason: '「二」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二百二十二」讀「にひゃくにじゅうに」。', relatedRules: ['數字組合の讀法'] },
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
        explanation: { correctRule: '「九十分」讀「きゅうじゅっぷん」。', relatedRules: ['分の讀法'] },
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
        explanation: { correctRule: '「三十五人」讀「さんじゅうごにん」。', relatedRules: ['人數の讀法'] },
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
        explanation: { correctRule: '身高「百七十五センチ」讀「ひゃくななじゅうごセンチ」。', relatedRules: ['身高の讀法'] },
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
        explanation: { correctRule: '「六百」促音+半濁音化。', trapExplanation: '這是陷阱題。', relatedRules: ['六百の音變'] },
        sourceItem: { value: 650, kanji: '六百五十円', reading: 'ろっぴゃくごじゅうえん' }
    },
    {
        id: 'num_hundreds_extra_43', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「四百四十四」的正確讀音是？', stem_zh: '「四百四十四」的正確讀音是？',
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
        explanation: { correctRule: '「百九十八円」讀「ひゃくきゅうじゅうはちえん」。', relatedRules: ['金額の讀法'] },
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
        explanation: { correctRule: '「二百ページ」讀「にひゃくページ」。', relatedRules: ['頁數の讀法'] },
        sourceItem: { value: 200, kanji: '二百', reading: 'にひゃく' }
    },
    {
        id: 'num_hundreds_extra_46', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「八百八十」的正確讀音是？', stem_zh: '「八百八十」的正確讀音是？',
        options: [
            { text: 'はちひゃくはちじゅう', isCorrect: false, reason: '陷阱！「八百」促音+半濁音化。' },
            { text: 'はっぴゃくはちじゅう', isCorrect: true, reason: '正確！「八百八十」讀「はっぴゃくはちじゅう」。' },
            { text: 'やっぴゃくやじゅう', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'はちびゃくはちじゅう', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八百」促音+半濁音化。', trapExplanation: '這是陷阱題。', relatedRules: ['八百の音變'] },
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
        explanation: { correctRule: '「五百台分」讀「ごひゃくだいぶん」。', relatedRules: ['數量の讀法'] },
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
        explanation: { correctRule: '「二百三十円」讀「にひゃくさんじゅうえん」。', relatedRules: ['金額の讀法'] },
        sourceItem: { value: 230, kanji: '二百三十円', reading: 'にひゃくさんじゅうえん' }
    },
    {
        id: 'num_hundreds_extra_49', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「三百三十三」的正確讀音是？', stem_zh: '「三百三十三」的正確讀音是？',
        options: [
            { text: 'さんひゃくさんじゅうさん', isCorrect: false, reason: '陷阱！「三百」濁音化。' },
            { text: 'さんびゃくさんじゅうさん', isCorrect: true, reason: '正確！「三百三十三」讀「さんびゃくさんじゅうさん」。' },
            { text: 'みひゃくみじゅうみ', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'さんぴゃくさんじゅうさん', isCorrect: false, reason: '應是濁音「び」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三百」濁音化為「さんびゃく」。', trapExplanation: '這是陷阱題。', relatedRules: ['三百の音變'] },
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
        explanation: { correctRule: '「百八十分」讀「ひゃくはちじゅっぷん」。', relatedRules: ['分の讀法'] },
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
        explanation: { correctRule: '「三百」濁音化為「さんびゃく」。', trapExplanation: '這是陷阱題。', relatedRules: ['三百の音變'] },
        sourceItem: { value: 300, kanji: '三百人', reading: 'さんびゃくにん' }
    },
    {
        id: 'num_hundreds_extra_52', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「七百五十」的正確讀音是？', stem_zh: '「七百五十」的正確讀音是？',
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
        explanation: { correctRule: '「四百メートル」讀「よんひゃくメートル」。', relatedRules: ['距離の讀法'] },
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
        explanation: { correctRule: '「九百五十円」讀「きゅうひゃくごじゅうえん」。', relatedRules: ['金額の讀法'] },
        sourceItem: { value: 950, kanji: '九百五十円', reading: 'きゅうひゃくごじゅうえん' }
    },
    {
        id: 'num_hundreds_extra_55', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「六百六」的正確讀音是？', stem_zh: '「六百六」的正確讀音是？',
        options: [
            { text: 'ろくひゃくろく', isCorrect: false, reason: '陷阱！「六百」促音+半濁音化。' },
            { text: 'ろっぴゃくろく', isCorrect: true, reason: '正確！「六百六」讀「ろっぴゃくろく」。' },
            { text: 'むひゃくむ', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'ろくびゃくろく', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「六百」促音+半濁音化。', trapExplanation: '這是陷阱題。', relatedRules: ['六百の音變'] },
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
        explanation: { correctRule: '「五十二キロ」讀「ごじゅうにキロ」。', relatedRules: ['重量の讀法'] },
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
        explanation: { correctRule: '「八百」促音+半濁音化。', trapExplanation: '這是陷阱題。', relatedRules: ['八百の音變'] },
        sourceItem: { value: 800, kanji: '八百円', reading: 'はっぴゃくえん' }
    },
    {
        id: 'num_hundreds_extra_58', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「百一」的正確讀音是？', stem_zh: '「百一」的正確讀音是？',
        options: [
            { text: 'ひゃくいち', isCorrect: true, reason: '正確！「百一」讀「ひゃくいち」。' },
            { text: 'いちひゃくいち', isCorrect: false, reason: '通常省略「いち」。' },
            { text: 'ひゃくひと', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'もいち', isCorrect: false, reason: '「百」不讀「も」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「百一」讀「ひゃくいち」。', relatedRules: ['數字組合の讀法'] },
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
        explanation: { correctRule: '「百メートル」讀「ひゃくメートル」。', relatedRules: ['距離の讀法'] },
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
        explanation: { correctRule: '「百冊」讀「ひゃくさつ」。', relatedRules: ['冊の讀法'] },
        sourceItem: { value: 100, kanji: '百冊', reading: 'ひゃくさつ' }
    },
    {
        id: 'num_hundreds_extra_61', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: false,
        stem: '「九百一」的正確讀音是？', stem_zh: '「九百一」的正確讀音是？',
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
        explanation: { correctRule: '「六百」促音+半濁音化。', trapExplanation: '這是陷阱題。', relatedRules: ['六百の音變'] },
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
        explanation: { correctRule: '「四百九十八円」讀「よんひゃくきゅうじゅうはちえん」。', relatedRules: ['金額の讀法'] },
        sourceItem: { value: 498, kanji: '四百九十八円', reading: 'よんひゃくきゅうじゅうはちえん' }
    },
    {
        id: 'num_hundreds_extra_64', category: 'numbers', subcategory: 'hundreds', type: 'pronunciation', isTrap: true,
        stem: '「八百一」的正確讀音是？', stem_zh: '「八百一」的正確讀音是？',
        options: [
            { text: 'はちひゃくいち', isCorrect: false, reason: '陷阱！「八百」促音+半濁音化。' },
            { text: 'はっぴゃくいち', isCorrect: true, reason: '正確！「八百一」讀「はっぴゃくいち」。' },
            { text: 'やひゃくひと', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'はちびゃくいち', isCorrect: false, reason: '應是促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八百」促音+半濁音化。', trapExplanation: '這是陷阱題。', relatedRules: ['八百の音變'] },
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
        explanation: { correctRule: '「二百九十九円」讀「にひゃくきゅうじゅうきゅうえん」。', relatedRules: ['金額の讀法'] },
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
        explanation: { correctRule: '「三百」濁音化為「さんびゃく」。', trapExplanation: '這是陷阱題。', relatedRules: ['三百の音變'] },
        sourceItem: { value: 300, kanji: '三百キロ', reading: 'さんびゃくキロ' }
    }
];
