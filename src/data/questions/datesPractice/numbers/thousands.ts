import { DatesPracticeQuestion } from '../types';

// 千位數練習題
// 注意 3000, 8000 的音變，以及 10000 必須加「一」
// 每個數字3題：發音題、單句敘述題、對話題

export const thousandsNumberQuestions: DatesPracticeQuestion[] = [
    // ===== 數字 1000 的三題 =====
    {
        id: 'num_thousands_1000_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: false,
        stem: '「千」的正確讀音是？',
        stem_zh: '「千」的正確讀音是？',
        options: [
            { text: 'せん', isCorrect: true, reason: '正確{せいかく}！「千{せん}」讀作{どくさ}「せん」。' },
            { text: 'ち', isCorrect: false, reason: '「ち」是訓讀{くんどく}，數字{すうじ}使用{しよう}する音讀{おんどく}「せん」。' },
            { text: 'いちせん', isCorrect: false, reason: '「千{せん}」單獨{たんどく}時{とき}通常{つうじょう}省略{しょうりゃく}「いち」。' },
            { text: 'ぜん', isCorrect: false, reason: '「千{せん}」單獨{たんどく}使用{しよう}時{とき}不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「千{せん}」讀作{どくさ}「せん」，通常{つうじょう}省略{しょうりゃく}「一{いち}」。',
            relatedRules: ['千{せん}の基本{きほん}讀法{よみかた}', '千位數{せんいすう}の發音{はつおん}']
        },
        sourceItem: { value: 1000, kanji: '千', reading: 'せん' }
    },
    {
        id: 'num_thousands_1000_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: false,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書一千日圓。',
        options: [
            { text: 'せんえん', isCorrect: true, reason: '正確{せいかく}！「千円{せんえん}」讀作{どくさ}「せんえん」。' },
            { text: 'いちせんえん', isCorrect: false, reason: '通常{つうじょう}省略{しょうりゃく}「いち」，直接{ちょくせつ}說{いう}「せん」。' },
            { text: 'いっせんえん', isCorrect: false, reason: '「一{いち}」通常{つうじょう}省略{しょうりゃく}，且不促音化{ふそくおんか}。' },
            { text: 'ぜんえん', isCorrect: false, reason: '「千{せん}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「千円{せんえん}」通常{つうじょう}省略{しょうりゃく}「一{いち}」，直接{ちょくせつ}說{いう}「せん」。',
            relatedRules: ['金額{きんがく}の表達{ひょうたつ}', '千{せん}の省略{しょうりゃく}規則{きそく}']
        },
        sourceItem: { value: 1000, kanji: '千円', reading: 'せんえん' }
    },
    {
        id: 'num_thousands_1000_dial',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: false,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このTシャツはいくらですか？',
            speakerB: '＿＿です。（一千日圓）'
        },
        options: [
            { text: 'せんえん', isCorrect: true, reason: '正確{せいかく}！「千円{せんえん}」讀作{どくさ}「せんえん」。' },
            { text: 'いちせんえん', isCorrect: false, reason: '通常{つうじょう}省略{しょうりゃく}「いち」。' },
            { text: 'いっせんえん', isCorrect: false, reason: '「一{いち}」不促音化{ふそくおんか}。' },
            { text: 'ちえん', isCorrect: false, reason: '數字{すうじ}使用{しよう}する音讀{おんどく}「せん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「千円{せんえん}」是常見{じょうけん}の紙幣{しへい}金額{きんがく}。',
            relatedRules: ['金額{きんがく}の表達{ひょうたつ}', '千{せん}の使用{しよう}']
        },
        sourceItem: { value: 1000, kanji: '千円', reading: 'せんえん' }
    },

    // ===== 數字 2000 的三題 =====
    {
        id: 'num_thousands_2000_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二千」的正確讀音是？',
        stem_zh: '「二千」的正確讀音是？',
        options: [
            { text: 'にせん', isCorrect: true, reason: '正確{せいかく}！「二千{にせん}」讀作{どくさ}「にせん」。' },
            { text: 'ふたせん', isCorrect: false, reason: '組合{くみあわせ}數字{すうじ}使用{しよう}する音讀{おんどく}「に」。' },
            { text: 'にぜん', isCorrect: false, reason: '「二千{にせん}」不濁音化{ふだくおんか}。' },
            { text: 'ふたち', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「に」和「せん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二千{にせん}」讀作{どくさ}「にせん」，無{ない}音變{おんへん}。',
            relatedRules: ['千位數{せんいすう}の讀法{よみかた}', '2000の發音{はつおん}']
        },
        sourceItem: { value: 2000, kanji: '二千', reading: 'にせん' }
    },
    {
        id: 'num_thousands_2000_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: false,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書兩千日圓。',
        options: [
            { text: 'にせんえん', isCorrect: true, reason: '正確{せいかく}！「二千円{にせんえん}」讀作{どくさ}「にせんえん」。' },
            { text: 'ふたせんえん', isCorrect: false, reason: '金額{きんがく}使用{しよう}する音讀{おんどく}「に」。' },
            { text: 'にぜんえん', isCorrect: false, reason: '「二千{にせん}」不濁音化{ふだくおんか}。' },
            { text: 'りせんえん', isCorrect: false, reason: '「二{に}」不變{ふへん}「り」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二千円{にせんえん}」讀作{どくさ}「にせんえん」。',
            relatedRules: ['金額{きんがく}の表達{ひょうたつ}', '2000の發音{はつおん}']
        },
        sourceItem: { value: 2000, kanji: '二千円', reading: 'にせんえん' }
    },
    {
        id: 'num_thousands_2000_dial',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: false,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'この靴はいくらですか？',
            speakerB: '＿＿です。（兩千日圓）'
        },
        options: [
            { text: 'にせんえん', isCorrect: true, reason: '正確{せいかく}！「二千円{にせんえん}」。' },
            { text: 'ふたせんえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「に」。' },
            { text: 'にぜんえん', isCorrect: false, reason: '不濁音化{ふだくおんか}。' },
            { text: 'にっせんえん', isCorrect: false, reason: '「二{に}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二千円{にせんえん}」讀作{どくさ}「にせんえん」。',
            relatedRules: ['2000の發音{はつおん}', '金額{きんがく}表達{ひょうたつ}']
        },
        sourceItem: { value: 2000, kanji: '二千円', reading: 'にせんえん' }
    },

    // ===== 數字 3000 的三題 =====
    {
        id: 'num_thousands_3000_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: true,
        stem: '「三千」的正確讀音是？',
        stem_zh: '「三千」的正確讀音是？',
        options: [
            { text: 'さんせん', isCorrect: false, reason: '陷阱{かんけい}！「三千{さんぜん}」會濁音化{だくおんか}，讀む{よむ}「さんぜん」。' },
            { text: 'さんぜん', isCorrect: true, reason: '正確{せいかく}！「三{さん}」の撥音{はつおん}「ん」後面{うしろ}，「せん」濁音化{だくおんか}為「ぜん」。' },
            { text: 'みせん', isCorrect: false, reason: '組合{くみあわせ}數字{すうじ}使用{しよう}する音讀{おんどく}「さん」。' },
            { text: 'みっせん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「さん」，且應{おう}濁音化{だくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三千{さんぜん}」中，撥音{はつおん}「ん」後面{うしろ}の「せん」會濁音化{だくおんか}為「ぜん」。這是3引發{いんはつ}濁音化{だくおんか}の規則{きそく}。',
            trapExplanation: '這是重要{じゅうよう}陷阱題{かんけいだい}，測試{そくし}「三{さん}」引發{いんはつ}の濁音化{だくおんか}規則{きそく}。',
            relatedRules: ['三{さん}引發{いんはつ}の濁音化{だくおんか}', '撥音{はつおん}後{あと}の音變{おんへん}']
        },
        sourceItem: { value: 3000, kanji: '三千', reading: 'さんぜん' }
    },
    {
        id: 'num_thousands_3000_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: true,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書三千日圓。',
        options: [
            { text: 'さんせんえん', isCorrect: false, reason: '陷阱{かんけい}！「三千{さんぜん}」會濁音化{だくおんか}。' },
            { text: 'さんぜんえん', isCorrect: true, reason: '正確{せいかく}！「三千円{さんぜんえん}」讀作{どくさ}「さんぜんえん」。' },
            { text: 'みせんえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「さん」。' },
            { text: 'みっせんえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「さん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三千円{さんぜんえん}」讀作{どくさ}「さんぜんえん」，「せん」濁音化{だくおんか}為「ぜん」。',
            trapExplanation: '學習者{がくしゅうしゃ}容易{ようい}忽略{こりゃく}濁音化{だくおんか}規則{きそく}。',
            relatedRules: ['金額{きんがく}の表達{ひょうたつ}', '3000の濁音化{だくおんか}']
        },
        sourceItem: { value: 3000, kanji: '三千円', reading: 'さんぜんえん' }
    },
    {
        id: 'num_thousands_3000_dial',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: true,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このバッグはいくらですか？',
            speakerB: '＿＿です。（三千日圓）'
        },
        options: [
            { text: 'さんせんえん', isCorrect: false, reason: '陷阱{かんけい}！必須{ひっす}濁音化{だくおんか}。' },
            { text: 'さんぜんえん', isCorrect: true, reason: '正確{せいかく}！「三千円{さんぜんえん}」。' },
            { text: 'みぜんえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「さん」。' },
            { text: 'さっぜんえん', isCorrect: false, reason: '「三{さん}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三千円{さんぜんえん}」讀作{どくさ}「さんぜんえん」。',
            trapExplanation: '這是常見{じょうけん}の陷阱{かんけい}，「三{さん}」後面{うしろ}の「せん」必須{ひっす}濁音化{だくおんか}。',
            relatedRules: ['3000の濁音化{だくおんか}', '金額{きんがく}の發音{はつおん}']
        },
        sourceItem: { value: 3000, kanji: '三千円', reading: 'さんぜんえん' }
    },

    // ===== 數字 8000 的三題 =====
    {
        id: 'num_thousands_8000_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: true,
        stem: '「八千」的正確讀音是？',
        stem_zh: '「八千」的正確讀音是？',
        options: [
            { text: 'はちせん', isCorrect: false, reason: '陷阱{かんけい}！「八千{はっせん}」會促音化{そくおんか}，讀む{よむ}「はっせん」。' },
            { text: 'はっせん', isCorrect: true, reason: '正確{せいかく}！「八{はち}」變成{へんせい}「はっ」，促音化{そくおんか}。' },
            { text: 'やせん', isCorrect: false, reason: '組合{くみあわせ}數字{すうじ}使用{しよう}する音讀{おんどく}「はち」。' },
            { text: 'はちぜん', isCorrect: false, reason: '「八千{はっせん}」是促音化{そくおんか}，不是濁音化{だくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八千{はっせん}」中，「八{はち}」促音化{そくおんか}為「はっ」。',
            trapExplanation: '這是重要{じゅうよう}陷阱題{かんけいだい}，測試{そくし}「八{はち}」引發{いんはつ}の促音化{そくおんか}規則{きそく}。',
            relatedRules: ['八{はち}引發{いんはつ}の促音化{そくおんか}', '千位數{せんいすう}の音變{おんへん}']
        },
        sourceItem: { value: 8000, kanji: '八千', reading: 'はっせん' }
    },
    {
        id: 'num_thousands_8000_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: true,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書八千日圓。',
        options: [
            { text: 'はちせんえん', isCorrect: false, reason: '陷阱{かんけい}！「八千{はっせん}」會促音化{そくおんか}。' },
            { text: 'はっせんえん', isCorrect: true, reason: '正確{せいかく}！「八千円{はっせんえん}」讀作{どくさ}「はっせんえん」。' },
            { text: 'やっせんえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「はち」。' },
            { text: 'はちぜんえん', isCorrect: false, reason: '是促音化{そくおんか}，不是濁音化{だくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八千円{はっせんえん}」讀作{どくさ}「はっせんえん」，「はち」促音化{そくおんか}為「はっ」。',
            trapExplanation: '學習者{がくしゅうしゃ}容易{ようい}忽略{こりゃく}促音化{そくおんか}規則{きそく}。',
            relatedRules: ['金額{きんがく}の表達{ひょうたつ}', '8000の促音化{そくおんか}']
        },
        sourceItem: { value: 8000, kanji: '八千円', reading: 'はっせんえん' }
    },
    {
        id: 'num_thousands_8000_dial',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: true,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このコートはいくらですか？',
            speakerB: '＿＿です。（八千日圓）'
        },
        options: [
            { text: 'はちせんえん', isCorrect: false, reason: '陷阱{かんけい}！必須{ひっす}促音化{そくおんか}。' },
            { text: 'はっせんえん', isCorrect: true, reason: '正確{せいかく}！「八千円{はっせんえん}」。' },
            { text: 'やっせんえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「はち」→「はっ」。' },
            { text: 'はちぜんえん', isCorrect: false, reason: '是促音化{そくおんか}，不是濁音化{だくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八千円{はっせんえん}」讀作{どくさ}「はっせんえん」。',
            trapExplanation: '這是常見{じょうけん}の陷阱{かんけい}。',
            relatedRules: ['8000の促音化{そくおんか}', '金額{きんがく}の發音{はつおん}']
        },
        sourceItem: { value: 8000, kanji: '八千円', reading: 'はっせんえん' }
    },

    // ===== 數字 10000 的三題 =====
    {
        id: 'num_thousands_10000_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: true,
        stem: '「一万」的正確讀音是？',
        stem_zh: '「一萬」的正確讀音是？',
        options: [
            { text: 'まん', isCorrect: false, reason: '陷阱{かんけい}！「一万{いちまん}」必須{ひっす}加{か}「いち」，不能{ふのう}省略{しょうりゃく}。' },
            { text: 'いちまん', isCorrect: true, reason: '正確{せいかく}！「一万{いちまん}」必須{ひっす}讀む{よむ}「いちまん」，不能{ふのう}省略{しょうりゃく}「いち」。' },
            { text: 'いっまん', isCorrect: false, reason: '「一{いち}」在「万{まん}」前{まえ}不促音化{ふそくおんか}。' },
            { text: 'ひとまん', isCorrect: false, reason: '組合{くみあわせ}數字{すうじ}使用{しよう}する音讀{おんどく}「いち」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「一万{いちまん}」必須{ひっす}讀む{よむ}「いちまん」，不能{ふのう}像「百{ひゃく}」「千{せん}」那樣{ように}省略{しょうりゃく}「一{いち}」。',
            trapExplanation: '這是重要{じゅうよう}陷阱題{かんけいだい}。學習者{がくしゅうしゃ}會以為{おもい}可以{かのう}像「ひゃく」「せん」一樣{いちよう}省略{しょうりゃく}「いち」，但「万{まん}」不可以{ふかのう}。',
            relatedRules: ['万{まん}の特殊{とくしゅ}規則{きそく}', '「いち」不可{ふか}省略{しょうりゃく}']
        },
        sourceItem: { value: 10000, kanji: '一万', reading: 'いちまん' }
    },
    {
        id: 'num_thousands_10000_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: true,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書一萬日圓。',
        options: [
            { text: 'まんえん', isCorrect: false, reason: '陷阱{かんけい}！「一万{いちまん}」必須{ひっす}加{か}「いち」。' },
            { text: 'いちまんえん', isCorrect: true, reason: '正確{せいかく}！「一万円{いちまんえん}」讀作{どくさ}「いちまんえん」。' },
            { text: 'いっまんえん', isCorrect: false, reason: '「一{いち}」不促音化{ふそくおんか}。' },
            { text: 'ひとまんえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「いち」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「一万円{いちまんえん}」必須{ひっす}讀む{よむ}「いちまんえん」，「いち」不可{ふか}省略{しょうりゃく}。',
            trapExplanation: '這是常見{じょうけん}の陷阱{かんけい}，與「百{ひゃく}」「千{せん}」可以{かのう}省略{しょうりゃく}不同{ふどう}。',
            relatedRules: ['金額{きんがく}の表達{ひょうたつ}', '万{まん}の特殊{とくしゅ}規則{きそく}']
        },
        sourceItem: { value: 10000, kanji: '一万円', reading: 'いちまんえん' }
    },
    {
        id: 'num_thousands_10000_dial',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: true,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このスマホはいくらですか？',
            speakerB: '＿＿です。（一萬日圓）'
        },
        options: [
            { text: 'まんえん', isCorrect: false, reason: '陷阱{かんけい}！必須{ひっす}加{か}「いち」。' },
            { text: 'いちまんえん', isCorrect: true, reason: '正確{せいかく}！「一万円{いちまんえん}」。' },
            { text: 'いっまんえん', isCorrect: false, reason: '不促音化{ふそくおんか}。' },
            { text: 'ひとまんえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「いち」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「一万円{いちまんえん}」必須{ひっす}讀む{よむ}「いちまんえん」。',
            trapExplanation: '「万{まん}」的「いち」不可{ふか}省略{しょうりゃく}，這是日語{にほんご}數字{すうじ}的特殊{とくしゅ}規則{きそく}。',
            relatedRules: ['万{まん}の特殊{とくしゅ}規則{きそく}', '金額{きんがく}表達{ひょうたつ}']
        },
        sourceItem: { value: 10000, kanji: '一万円', reading: 'いちまんえん' }
    },

    // ===== 數字 4000 的三題 =====
    {
        id: 'num_thousands_4000_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: false,
        stem: '「四千」的正確讀音是？',
        stem_zh: '「四千」的正確讀音是？',
        options: [
            { text: 'よんせん', isCorrect: true, reason: '正確{せいかく}！「四千{よんせん}」讀作{どくさ}「よんせん」，為{ため}避諱{ひき}使用{しよう}「よん」。' },
            { text: 'しせん', isCorrect: false, reason: '為{ため}避諱{ひき}「死{し}」，多用{おおくもちい}「よん」。' },
            { text: 'よんぜん', isCorrect: false, reason: '「四千{よんせん}」不濁音化{ふだくおんか}。' },
            { text: 'よっせん', isCorrect: false, reason: '「四{よん}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四千{よんせん}」讀作{どくさ}「よんせん」，使用{しよう}「よん」避諱{ひき}，無{ない}音變{おんへん}。',
            relatedRules: ['四{よん}の避諱{ひき}讀法{よみかた}', '4000の發音{はつおん}']
        },
        sourceItem: { value: 4000, kanji: '四千', reading: 'よんせん' }
    },
    {
        id: 'num_thousands_4000_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: false,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書四千日圓。',
        options: [
            { text: 'よんせんえん', isCorrect: true, reason: '正確{せいかく}！「四千円{よんせんえん}」讀作{どくさ}「よんせんえん」。' },
            { text: 'しせんえん', isCorrect: false, reason: '為{ため}避諱{ひき}「死{し}」，多用{おおくもちい}「よん」。' },
            { text: 'よんぜんえん', isCorrect: false, reason: '「四千{よんせん}」不濁音化{ふだくおんか}。' },
            { text: 'よっせんえん', isCorrect: false, reason: '「四{よん}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四千円{よんせんえん}」讀作{どくさ}「よんせんえん」。',
            relatedRules: ['金額{きんがく}の表達{ひょうたつ}', '4000の發音{はつおん}']
        },
        sourceItem: { value: 4000, kanji: '四千円', reading: 'よんせんえん' }
    },
    {
        id: 'num_thousands_4000_dial',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: false,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このジャケットはいくらですか？',
            speakerB: '＿＿です。（四千日圓）'
        },
        options: [
            { text: 'よんせんえん', isCorrect: true, reason: '正確{せいかく}！「四千円{よんせんえん}」。' },
            { text: 'しせんえん', isCorrect: false, reason: '為{ため}避諱{ひき}多用{おおくもちい}「よん」。' },
            { text: 'よんぜんえん', isCorrect: false, reason: '不濁音化{ふだくおんか}。' },
            { text: 'よっせんえん', isCorrect: false, reason: '不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四千円{よんせんえん}」讀作{どくさ}「よんせんえん」。',
            relatedRules: ['4000の發音{はつおん}', '金額{きんがく}表達{ひょうたつ}']
        },
        sourceItem: { value: 4000, kanji: '四千円', reading: 'よんせんえん' }
    },

    // ===== 數字 5000 的三題 =====
    {
        id: 'num_thousands_5000_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: false,
        stem: '「五千」的正確讀音是？',
        stem_zh: '「五千」的正確讀音是？',
        options: [
            { text: 'ごせん', isCorrect: true, reason: '正確{せいかく}！「五千{ごせん}」讀作{どくさ}「ごせん」。' },
            { text: 'いつせん', isCorrect: false, reason: '組合{くみあわせ}數字{すうじ}使用{しよう}する音讀{おんどく}「ご」。' },
            { text: 'ごぜん', isCorrect: false, reason: '「五千{ごせん}」不濁音化{ふだくおんか}。「ごぜん」是「午前{ごぜん}」。' },
            { text: 'こせん', isCorrect: false, reason: '需要{じゅよう}濁音{だくおん}「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五千{ごせん}」讀作{どくさ}「ごせん」，無{ない}音變{おんへん}。',
            relatedRules: ['千位數{せんいすう}の讀法{よみかた}', '5000の發音{はつおん}']
        },
        sourceItem: { value: 5000, kanji: '五千', reading: 'ごせん' }
    },
    {
        id: 'num_thousands_5000_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: false,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書五千日圓。',
        options: [
            { text: 'ごせんえん', isCorrect: true, reason: '正確{せいかく}！「五千円{ごせんえん}」讀作{どくさ}「ごせんえん」。' },
            { text: 'いつせんえん', isCorrect: false, reason: '金額{きんがく}使用{しよう}する音讀{おんどく}「ご」。' },
            { text: 'ごぜんえん', isCorrect: false, reason: '「五千{ごせん}」不濁音化{ふだくおんか}。' },
            { text: 'ごっせんえん', isCorrect: false, reason: '「五{ご}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五千円{ごせんえん}」讀作{どくさ}「ごせんえん」，是常見{じょうけん}の紙幣{しへい}金額{きんがく}。',
            relatedRules: ['金額{きんがく}の表達{ひょうたつ}', '5000の發音{はつおん}']
        },
        sourceItem: { value: 5000, kanji: '五千円', reading: 'ごせんえん' }
    },
    {
        id: 'num_thousands_5000_dial',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: false,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このスカートはいくらですか？',
            speakerB: '＿＿です。（五千日圓）'
        },
        options: [
            { text: 'ごせんえん', isCorrect: true, reason: '正確{せいかく}！「五千円{ごせんえん}」。' },
            { text: 'いつせんえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「ご」。' },
            { text: 'ごぜんえん', isCorrect: false, reason: '不濁音化{ふだくおんか}。' },
            { text: 'ごっせんえん', isCorrect: false, reason: '不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五千円{ごせんえん}」是日本{にほん}常見{じょうけん}の紙幣{しへい}。',
            relatedRules: ['5000の發音{はつおん}', '金額{きんがく}表達{ひょうたつ}']
        },
        sourceItem: { value: 5000, kanji: '五千円', reading: 'ごせんえん' }
    },

    // ===== 數字 6000 的三題 =====
    {
        id: 'num_thousands_6000_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: false,
        stem: '「六千」的正確讀音是？',
        stem_zh: '「六千」的正確讀音是？',
        options: [
            { text: 'ろくせん', isCorrect: true, reason: '正確{せいかく}！「六千{ろくせん}」讀作{どくさ}「ろくせん」，無{ない}音變{おんへん}。' },
            { text: 'ろっせん', isCorrect: false, reason: '「六千{ろくせん}」不促音化{ふそくおんか}，與「六百{ろっぴゃく}」不同{ふどう}。' },
            { text: 'むっせん', isCorrect: false, reason: '組合{くみあわせ}數字{すうじ}使用{しよう}する音讀{おんどく}「ろく」。' },
            { text: 'ろくぜん', isCorrect: false, reason: '「六千{ろくせん}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六千{ろくせん}」讀作{どくさ}「ろくせん」，與「六百{ろっぴゃく}」不同{ふどう}，無{ない}音變{おんへん}。',
            relatedRules: ['千位數{せんいすう}の讀法{よみかた}', '6000の發音{はつおん}']
        },
        sourceItem: { value: 6000, kanji: '六千', reading: 'ろくせん' }
    },
    {
        id: 'num_thousands_6000_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: false,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書六千日圓。',
        options: [
            { text: 'ろくせんえん', isCorrect: true, reason: '正確{せいかく}！「六千円{ろくせんえん}」讀作{どくさ}「ろくせんえん」。' },
            { text: 'ろっせんえん', isCorrect: false, reason: '「六千{ろくせん}」不促音化{ふそくおんか}。' },
            { text: 'むっせんえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「ろく」。' },
            { text: 'ろくぜんえん', isCorrect: false, reason: '「六千{ろくせん}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六千円{ろくせんえん}」讀作{どくさ}「ろくせんえん」。',
            relatedRules: ['金額{きんがく}の表達{ひょうたつ}', '6000の發音{はつおん}']
        },
        sourceItem: { value: 6000, kanji: '六千円', reading: 'ろくせんえん' }
    },
    {
        id: 'num_thousands_6000_dial',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: false,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このパンツはいくらですか？',
            speakerB: '＿＿です。（六千日圓）'
        },
        options: [
            { text: 'ろくせんえん', isCorrect: true, reason: '正確{せいかく}！「六千円{ろくせんえん}」。' },
            { text: 'ろっせんえん', isCorrect: false, reason: '不促音化{ふそくおんか}。' },
            { text: 'むっせんえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「ろく」。' },
            { text: 'ろくぜんえん', isCorrect: false, reason: '不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六千円{ろくせんえん}」讀作{どくさ}「ろくせんえん」。',
            relatedRules: ['6000の發音{はつおん}', '金額{きんがく}表達{ひょうたつ}']
        },
        sourceItem: { value: 6000, kanji: '六千円', reading: 'ろくせんえん' }
    },

    // ===== 數字 7000 的三題 =====
    {
        id: 'num_thousands_7000_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: false,
        stem: '「七千」的正確讀音是？',
        stem_zh: '「七千」的正確讀音是？',
        options: [
            { text: 'ななせん', isCorrect: true, reason: '正確{せいかく}！「七千{ななせん}」讀作{どくさ}「ななせん」，為{ため}避免{ひめん}混淆{こんこう}使用{しよう}「なな」。' },
            { text: 'しちせん', isCorrect: false, reason: '為{ため}避免{ひめん}混淆{こんこう}，多用{おおくもちい}「なな」。' },
            { text: 'ななぜん', isCorrect: false, reason: '「七千{ななせん}」不濁音化{ふだくおんか}。' },
            { text: 'なっせん', isCorrect: false, reason: '「七{なな}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七千{ななせん}」讀作{どくさ}「ななせん」，使用{しよう}「なな」避免{ひめん}混淆{こんこう}，無{ない}音變{おんへん}。',
            relatedRules: ['七{なな}の避免{ひめん}混淆{こんこう}讀法{よみかた}', '7000の發音{はつおん}']
        },
        sourceItem: { value: 7000, kanji: '七千', reading: 'ななせん' }
    },
    {
        id: 'num_thousands_7000_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: false,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書七千日圓。',
        options: [
            { text: 'ななせんえん', isCorrect: true, reason: '正確{せいかく}！「七千円{ななせんえん}」讀作{どくさ}「ななせんえん」。' },
            { text: 'しちせんえん', isCorrect: false, reason: '為{ため}避免{ひめん}混淆{こんこう}，多用{おおくもちい}「なな」。' },
            { text: 'ななぜんえん', isCorrect: false, reason: '「七千{ななせん}」不濁音化{ふだくおんか}。' },
            { text: 'なっせんえん', isCorrect: false, reason: '「七{なな}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七千円{ななせんえん}」讀作{どくさ}「ななせんえん」。',
            relatedRules: ['金額{きんがく}の表達{ひょうたつ}', '7000の發音{はつおん}']
        },
        sourceItem: { value: 7000, kanji: '七千円', reading: 'ななせんえん' }
    },
    {
        id: 'num_thousands_7000_dial',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: false,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このワンピースはいくらですか？',
            speakerB: '＿＿です。（七千日圓）'
        },
        options: [
            { text: 'ななせんえん', isCorrect: true, reason: '正確{せいかく}！「七千円{ななせんえん}」。' },
            { text: 'しちせんえん', isCorrect: false, reason: '為{ため}避免{ひめん}混淆{こんこう}多用{おおくもちい}「なな」。' },
            { text: 'ななぜんえん', isCorrect: false, reason: '不濁音化{ふだくおんか}。' },
            { text: 'なっせんえん', isCorrect: false, reason: '不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七千円{ななせんえん}」讀作{どくさ}「ななせんえん」。',
            relatedRules: ['7000の發音{はつおん}', '金額{きんがく}表達{ひょうたつ}']
        },
        sourceItem: { value: 7000, kanji: '七千円', reading: 'ななせんえん' }
    },

    // ===== 數字 9000 的三題 =====
    {
        id: 'num_thousands_9000_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: false,
        stem: '「九千」的正確讀音是？',
        stem_zh: '「九千」的正確讀音是？',
        options: [
            { text: 'きゅうせん', isCorrect: true, reason: '正確{せいかく}！「九千{きゅうせん}」讀作{どくさ}「きゅうせん」，為{ため}避諱{ひき}使用{しよう}「きゅう」。' },
            { text: 'くせん', isCorrect: false, reason: '為{ため}避諱{ひき}「苦{く}」，多用{おおくもちい}「きゅう」。' },
            { text: 'きゅうぜん', isCorrect: false, reason: '「九千{きゅうせん}」不濁音化{ふだくおんか}。' },
            { text: 'きゅっせん', isCorrect: false, reason: '「九{きゅう}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九千{きゅうせん}」讀作{どくさ}「きゅうせん」，使用{しよう}「きゅう」避諱{ひき}，無{ない}音變{おんへん}。',
            relatedRules: ['九{きゅう}の避諱{ひき}讀法{よみかた}', '9000の發音{はつおん}']
        },
        sourceItem: { value: 9000, kanji: '九千', reading: 'きゅうせん' }
    },
    {
        id: 'num_thousands_9000_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: false,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書九千日圓。',
        options: [
            { text: 'きゅうせんえん', isCorrect: true, reason: '正確{せいかく}！「九千円{きゅうせんえん}」讀作{どくさ}「きゅうせんえん」。' },
            { text: 'くせんえん', isCorrect: false, reason: '為{ため}避諱{ひき}「苦{く}」，多用{おおくもちい}「きゅう」。' },
            { text: 'きゅうぜんえん', isCorrect: false, reason: '「九千{きゅうせん}」不濁音化{ふだくおんか}。' },
            { text: 'きゅっせんえん', isCorrect: false, reason: '「九{きゅう}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九千円{きゅうせんえん}」讀作{どくさ}「きゅうせんえん」。',
            relatedRules: ['金額{きんがく}の表達{ひょうたつ}', '9000の發音{はつおん}']
        },
        sourceItem: { value: 9000, kanji: '九千円', reading: 'きゅうせんえん' }
    },
    {
        id: 'num_thousands_9000_dial',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: false,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'この時計はいくらですか？',
            speakerB: '＿＿です。（九千日圓）'
        },
        options: [
            { text: 'きゅうせんえん', isCorrect: true, reason: '正確{せいかく}！「九千円{きゅうせんえん}」。' },
            { text: 'くせんえん', isCorrect: false, reason: '為{ため}避諱{ひき}多用{おおくもちい}「きゅう」。' },
            { text: 'きゅうぜんえん', isCorrect: false, reason: '不濁音化{ふだくおんか}。' },
            { text: 'きゅっせんえん', isCorrect: false, reason: '不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九千円{きゅうせんえん}」讀作{どくさ}「きゅうせんえん」。',
            relatedRules: ['9000の發音{はつおん}', '金額{きんがく}表達{ひょうたつ}']
        },
        sourceItem: { value: 9000, kanji: '九千円', reading: 'きゅうせんえん' }
    },

    // ===== 組合數字：1100-1900 =====
    {
        id: 'num_thousands_1100_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: false,
        stem: '「千百」的正確讀音是？',
        stem_zh: '「一千一百」的正確讀音是？',
        options: [
            { text: 'せんひゃく', isCorrect: true, reason: '正確{せいかく}！「千百{せんひゃく}」讀作{どくさ}「せんひゃく」。' },
            { text: 'いちせんいちひゃく', isCorrect: false, reason: '通常{つうじょう}省略{しょうりゃく}「いち」。' },
            { text: 'せんびゃく', isCorrect: false, reason: '「せん」後面{うしろ}の「ひゃく」不濁音化{ふだくおんか}。' },
            { text: 'いっせんひゃく', isCorrect: false, reason: '「一{いち}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「千百{せんひゃく}」省略{しょうりゃく}「一{いち}」，無{ない}音變{おんへん}。',
            relatedRules: ['千位數{せんいすう}の組合{くみあわせ}', '1100の發音{はつおん}']
        },
        sourceItem: { value: 1100, kanji: '千百', reading: 'せんひゃく' }
    },
    {
        id: 'num_thousands_1200_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: false,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書一千兩百日圓。',
        options: [
            { text: 'せんにひゃくえん', isCorrect: true, reason: '正確{せいかく}！「千二百円{せんにひゃくえん}」。' },
            { text: 'いちせんにひゃくえん', isCorrect: false, reason: '通常{つうじょう}省略{しょうりゃく}「いち」。' },
            { text: 'せんふたひゃくえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「に」。' },
            { text: 'せんにびゃくえん', isCorrect: false, reason: '「二百{にひゃく}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「千二百円{せんにひゃくえん}」省略{しょうりゃく}「一{いち}」。',
            relatedRules: ['金額{きんがく}の表達{ひょうたつ}', '組合{くみあわせ}數字{すうじ}']
        },
        sourceItem: { value: 1200, kanji: '千二百円', reading: 'せんにひゃくえん' }
    },
    {
        id: 'num_thousands_1300_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: true,
        stem: '「千三百」的正確讀音是？',
        stem_zh: '「一千三百」的正確讀音是？',
        options: [
            { text: 'せんさんひゃく', isCorrect: false, reason: '陷阱{かんけい}！「三百{さんびゃく}」要濁音化{だくおんか}。' },
            { text: 'せんさんびゃく', isCorrect: true, reason: '正確{せいかく}！「三百{さんびゃく}」的「ひゃく」濁音化{だくおんか}為「びゃく」。' },
            { text: 'いっせんさんびゃく', isCorrect: false, reason: '「一{いち}」通常{つうじょう}省略{しょうりゃく}。' },
            { text: 'せんみびゃく', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「さん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「千三百{せんさんびゃく}」中，「三{さん}」引發{いんはつ}「ひゃく」濁音化{だくおんか}為「びゃく」。',
            trapExplanation: '這是常見{じょうけん}陷阱{かんけい}，「三{さん}」後面{うしろ}の「ひゃく」必須{ひっす}濁音化{だくおんか}。',
            relatedRules: ['三{さん}引發{いんはつ}の濁音化{だくおんか}', '組合{くみあわせ}數字{すうじ}']
        },
        sourceItem: { value: 1300, kanji: '千三百', reading: 'せんさんびゃく' }
    },
    {
        id: 'num_thousands_1500_dial',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: false,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このノートはいくらですか？',
            speakerB: '＿＿です。（一千五百日圓）'
        },
        options: [
            { text: 'せんごひゃくえん', isCorrect: true, reason: '正確{せいかく}！「千五百円{せんごひゃくえん}」。' },
            { text: 'いちせんごひゃくえん', isCorrect: false, reason: '通常{つうじょう}省略{しょうりゃく}「いち」。' },
            { text: 'せんごびゃくえん', isCorrect: false, reason: '「五百{ごひゃく}」不濁音化{ふだくおんか}。' },
            { text: 'せんいつひゃくえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「千五百円{せんごひゃくえん}」是常見{じょうけん}の金額{きんがく}。',
            relatedRules: ['組合{くみあわせ}金額{きんがく}', '千五百{せんごひゃく}の發音{はつおん}']
        },
        sourceItem: { value: 1500, kanji: '千五百円', reading: 'せんごひゃくえん' }
    },
    {
        id: 'num_thousands_1600_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: true,
        stem: '「千六百」的正確讀音是？',
        stem_zh: '「一千六百」的正確讀音是？',
        options: [
            { text: 'せんろくひゃく', isCorrect: false, reason: '陷阱{かんけい}！「六百{ろっぴゃく}」要促音化{そくおんか}和半濁音化{はんだくおんか}。' },
            { text: 'せんろっぴゃく', isCorrect: true, reason: '正確{せいかく}！「六百{ろっぴゃく}」的「ろく」促音化{そくおんか}，「ひゃく」半濁音化{はんだくおんか}為「ぴゃく」。' },
            { text: 'せんむひゃく', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「ろく」→「ろっ」。' },
            { text: 'せんろくびゃく', isCorrect: false, reason: '是促音化{そくおんか}+半濁音化{はんだくおんか}，不是濁音化{だくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「千六百{せんろっぴゃく}」中，「六{ろく}」促音化{そくおんか}為「ろっ」，「ひゃく」半濁音化{はんだくおんか}為「ぴゃく」。',
            trapExplanation: '六百{ろっぴゃく}的音變{おんへん}規則{きそく}容易{ようい}混淆{こんこう}。',
            relatedRules: ['六{ろく}引發{いんはつ}の促音化{そくおんか}', '半濁音化{はんだくおんか}規則{きそく}']
        },
        sourceItem: { value: 1600, kanji: '千六百', reading: 'せんろっぴゃく' }
    },
    {
        id: 'num_thousands_1800_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: true,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書一千八百日圓。',
        options: [
            { text: 'せんはちひゃくえん', isCorrect: false, reason: '陷阱{かんけい}！「八百{はっぴゃく}」要促音化{そくおんか}和半濁音化{はんだくおんか}。' },
            { text: 'せんはっぴゃくえん', isCorrect: true, reason: '正確{せいかく}！「千八百円{せんはっぴゃくえん}」。' },
            { text: 'せんやひゃくえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「はち」→「はっ」。' },
            { text: 'せんはちびゃくえん', isCorrect: false, reason: '是促音化{そくおんか}+半濁音化{はんだくおんか}，不是濁音化{だくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「千八百円{せんはっぴゃくえん}」中，「八{はち}」促音化{そくおんか}為「はっ」，「ひゃく」半濁音化{はんだくおんか}為「ぴゃく」。',
            trapExplanation: '八百{はっぴゃく}的音變{おんへん}與六百{ろっぴゃく}相同{どうよう}。',
            relatedRules: ['八{はち}引發{いんはつ}の促音化{そくおんか}', '半濁音化{はんだくおんか}']
        },
        sourceItem: { value: 1800, kanji: '千八百円', reading: 'せんはっぴゃくえん' }
    },

    // ===== 組合數字：2000+ =====
    {
        id: 'num_thousands_2300_dial',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: true,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このペンはいくらですか？',
            speakerB: '＿＿です。（兩千三百日圓）'
        },
        options: [
            { text: 'にせんさんひゃくえん', isCorrect: false, reason: '陷阱{かんけい}！「三百{さんびゃく}」要濁音化{だくおんか}。' },
            { text: 'にせんさんびゃくえん', isCorrect: true, reason: '正確{せいかく}！「二千三百円{にせんさんびゃくえん}」。' },
            { text: 'ふたせんみびゃくえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「に」和「さん」。' },
            { text: 'にぜんさんびゃくえん', isCorrect: false, reason: '「二千{にせん}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「二千三百円{にせんさんびゃくえん}」中，「三百{さんびゃく}」濁音化{だくおんか}。',
            trapExplanation: '複合{ふくごう}數字{すうじ}中，三百{さんびゃく}仍需{なおひつよう}濁音化{だくおんか}。',
            relatedRules: ['三百{さんびゃく}の濁音化{だくおんか}', '組合{くみあわせ}金額{きんがく}']
        },
        sourceItem: { value: 2300, kanji: '二千三百円', reading: 'にせんさんびゃくえん' }
    },
    {
        id: 'num_thousands_2500_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二千五百」的正確讀音是？',
        stem_zh: '「兩千五百」的正確讀音是？',
        options: [
            { text: 'にせんごひゃく', isCorrect: true, reason: '正確{せいかく}！「二千五百{にせんごひゃく}」無{ない}音變{おんへん}。' },
            { text: 'ふたせんごひゃく', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「に」。' },
            { text: 'にぜんごひゃく', isCorrect: false, reason: '「二千{にせん}」不濁音化{ふだくおんか}。' },
            { text: 'にせんごびゃく', isCorrect: false, reason: '「五百{ごひゃく}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二千五百{にせんごひゃく}」無{ない}音變{おんへん}。',
            relatedRules: ['千位數{せんいすう}の組合{くみあわせ}', '2500の發音{はつおん}']
        },
        sourceItem: { value: 2500, kanji: '二千五百', reading: 'にせんごひゃく' }
    },

    // ===== 組合數字：3000+ (強調濁音化) =====
    {
        id: 'num_thousands_3300_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: true,
        stem: '「三千三百」的正確讀音是？',
        stem_zh: '「三千三百」的正確讀音是？',
        options: [
            { text: 'さんせんさんひゃく', isCorrect: false, reason: '陷阱{かんけい}！「三千{さんぜん}」和「三百{さんびゃく}」都要音變{おんへん}！' },
            { text: 'さんぜんさんびゃく', isCorrect: true, reason: '正確{せいかく}！「三{さん}」引發{いんはつ}兩次{にかい}濁音化{だくおんか}。' },
            { text: 'さんぜんさんひゃく', isCorrect: false, reason: '「三百{さんびゃく}」也要濁音化{だくおんか}。' },
            { text: 'さんせんさんびゃく', isCorrect: false, reason: '「三千{さんぜん}」也要濁音化{だくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三千三百{さんぜんさんびゃく}」中，「三{さん}」引發{いんはつ}「千{せん}」和「百{ひゃく}」都濁音化{だくおんか}。',
            trapExplanation: '這是雙重{にじゅう}濁音化{だくおんか}の陷阱題{かんけいだい}。',
            relatedRules: ['三{さん}引發{いんはつ}の濁音化{だくおんか}', '複合{ふくごう}音變{おんへん}']
        },
        sourceItem: { value: 3300, kanji: '三千三百', reading: 'さんぜんさんびゃく' }
    },
    {
        id: 'num_thousands_3500_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: true,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書三千五百日圓。',
        options: [
            { text: 'さんせんごひゃくえん', isCorrect: false, reason: '陷阱{かんけい}！「三千{さんぜん}」要濁音化{だくおんか}。' },
            { text: 'さんぜんごひゃくえん', isCorrect: true, reason: '正確{せいかく}！「三千五百円{さんぜんごひゃくえん}」。' },
            { text: 'さんぜんいつひゃくえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「ご」。' },
            { text: 'みぜんごひゃくえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「さん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三千五百円{さんぜんごひゃくえん}」中，「三千{さんぜん}」濁音化{だくおんか}，「五百{ごひゃく}」無{ない}音變{おんへん}。',
            trapExplanation: '3開頭{かいとう}的千位數{せんいすう}必須{ひっす}濁音化{だくおんか}。',
            relatedRules: ['三{さん}引發{いんはつ}の濁音化{だくおんか}', '金額{きんがく}表達{ひょうたつ}']
        },
        sourceItem: { value: 3500, kanji: '三千五百円', reading: 'さんぜんごひゃくえん' }
    },
    {
        id: 'num_thousands_3600_dial',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: true,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このカバンはいくらですか？',
            speakerB: '＿＿です。（三千六百日圓）'
        },
        options: [
            { text: 'さんせんろくひゃくえん', isCorrect: false, reason: '陷阱{かんけい}！「三千{さんぜん}」和「六百{ろっぴゃく}」都要音變{おんへん}！' },
            { text: 'さんぜんろっぴゃくえん', isCorrect: true, reason: '正確{せいかく}！「三千六百円{さんぜんろっぴゃくえん}」。' },
            { text: 'さんぜんろくひゃくえん', isCorrect: false, reason: '「六百{ろっぴゃく}」要促音化{そくおんか}和半濁音化{はんだくおんか}。' },
            { text: 'さんせんろっぴゃくえん', isCorrect: false, reason: '「三千{さんぜん}」要濁音化{だくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三千六百円{さんぜんろっぴゃくえん}」中，「三千{さんぜん}」濁音化{だくおんか}，「六百{ろっぴゃく}」促音化{そくおんか}+半濁音化{はんだくおんか}。',
            trapExplanation: '這是複合{ふくごう}音變{おんへん}の陷阱題{かんけいだい}。',
            relatedRules: ['三千{さんぜん}の濁音化{だくおんか}', '六百{ろっぴゃく}の音變{おんへん}']
        },
        sourceItem: { value: 3600, kanji: '三千六百円', reading: 'さんぜんろっぴゃくえん' }
    },
    {
        id: 'num_thousands_3800_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: true,
        stem: '「三千八百」的正確讀音是？',
        stem_zh: '「三千八百」的正確讀音是？',
        options: [
            { text: 'さんせんはちひゃく', isCorrect: false, reason: '陷阱{かんけい}！「三千{さんぜん}」和「八百{はっぴゃく}」都要音變{おんへん}！' },
            { text: 'さんぜんはっぴゃく', isCorrect: true, reason: '正確{せいかく}！「三千{さんぜん}」濁音化{だくおんか}，「八百{はっぴゃく}」促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'さんぜんはちひゃく', isCorrect: false, reason: '「八百{はっぴゃく}」要音變{おんへん}。' },
            { text: 'さんせんはっぴゃく', isCorrect: false, reason: '「三千{さんぜん}」要濁音化{だくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三千八百{さんぜんはっぴゃく}」是複合{ふくごう}音變{おんへん}：三千{さんぜん}+八百{はっぴゃく}。',
            trapExplanation: '這是高難度{こうなんど}陷阱題{かんけいだい}。',
            relatedRules: ['三千{さんぜん}の濁音化{だくおんか}', '八百{はっぴゃく}の音變{おんへん}']
        },
        sourceItem: { value: 3800, kanji: '三千八百', reading: 'さんぜんはっぴゃく' }
    },

    // ===== 組合數字：8000+ (強調促音化) =====
    {
        id: 'num_thousands_8300_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: true,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書八千三百日圓。',
        options: [
            { text: 'はちせんさんひゃくえん', isCorrect: false, reason: '陷阱{かんけい}！「八千{はっせん}」和「三百{さんびゃく}」都要音變{おんへん}！' },
            { text: 'はっせんさんびゃくえん', isCorrect: true, reason: '正確{せいかく}！「八千{はっせん}」促音化{そくおんか}，「三百{さんびゃく}」濁音化{だくおんか}。' },
            { text: 'はっせんさんひゃくえん', isCorrect: false, reason: '「三百{さんびゃく}」要濁音化{だくおんか}。' },
            { text: 'はちせんさんびゃくえん', isCorrect: false, reason: '「八千{はっせん}」要促音化{そくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八千三百円{はっせんさんびゃくえん}」是複合{ふくごう}音變{おんへん}：八千{はっせん}+三百{さんびゃく}。',
            trapExplanation: '這是複合{ふくごう}音變{おんへん}の陷阱題{かんけいだい}。',
            relatedRules: ['八千{はっせん}の促音化{そくおんか}', '三百{さんびゃく}の濁音化{だくおんか}']
        },
        sourceItem: { value: 8300, kanji: '八千三百円', reading: 'はっせんさんびゃくえん' }
    },
    {
        id: 'num_thousands_8600_dial',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: true,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このドレスはいくらですか？',
            speakerB: '＿＿です。（八千六百日圓）'
        },
        options: [
            { text: 'はちせんろくひゃくえん', isCorrect: false, reason: '陷阱{かんけい}！「八千{はっせん}」和「六百{ろっぴゃく}」都要音變{おんへん}！' },
            { text: 'はっせんろっぴゃくえん', isCorrect: true, reason: '正確{せいかく}！「八千六百円{はっせんろっぴゃくえん}」。' },
            { text: 'はっせんろくひゃくえん', isCorrect: false, reason: '「六百{ろっぴゃく}」要促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'はちせんろっぴゃくえん', isCorrect: false, reason: '「八千{はっせん}」要促音化{そくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八千六百円{はっせんろっぴゃくえん}」是雙重{にじゅう}促音化{そくおんか}：八千{はっせん}+六百{ろっぴゃく}。',
            trapExplanation: '這是高難度{こうなんど}陷阱題{かんけいだい}。',
            relatedRules: ['八千{はっせん}の促音化{そくおんか}', '六百{ろっぴゃく}の音變{おんへん}']
        },
        sourceItem: { value: 8600, kanji: '八千六百円', reading: 'はっせんろっぴゃくえん' }
    },
    {
        id: 'num_thousands_8800_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: true,
        stem: '「八千八百」的正確讀音是？',
        stem_zh: '「八千八百」的正確讀音是？',
        options: [
            { text: 'はちせんはちひゃく', isCorrect: false, reason: '陷阱{かんけい}！「八千{はっせん}」和「八百{はっぴゃく}」都要促音化{そくおんか}！' },
            { text: 'はっせんはっぴゃく', isCorrect: true, reason: '正確{せいかく}！「八{はち}」引發{いんはつ}兩次{にかい}促音化{そくおんか}。' },
            { text: 'はっせんはちひゃく', isCorrect: false, reason: '「八百{はっぴゃく}」也要促音化{そくおんか}。' },
            { text: 'はちせんはっぴゃく', isCorrect: false, reason: '「八千{はっせん}」也要促音化{そくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八千八百{はっせんはっぴゃく}」是雙重{にじゅう}促音化{そくおんか}的典型{てんけい}。',
            trapExplanation: '8888是學習{がくしゅう}音變{おんへん}規則{きそく}の重要{じゅうよう}數字{すうじ}。',
            relatedRules: ['八{はち}引發{いんはつ}の促音化{そくおんか}', '複合{ふくごう}音變{おんへん}']
        },
        sourceItem: { value: 8800, kanji: '八千八百', reading: 'はっせんはっぴゃく' }
    },

    // ===== 實用數字應用題 =====
    {
        id: 'num_thousands_1234_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: true,
        stem: '学生は＿＿人います。',
        stem_zh: '有一千兩百三十四名學生。',
        options: [
            { text: 'せんにひゃくさんじゅうよんにん', isCorrect: false, reason: '陷阱{かんけい}！「三十{さんじゅう}」不是「さんじゅう」。' },
            { text: 'せんにひゃくさんじゅうよにん', isCorrect: true, reason: '正確{せいかく}！「四人{よにん}」使用{しよう}「よ」，「三十{さんじゅう}」正常{せいじょう}。' },
            { text: 'いちせんにひゃくさんじゅうしにん', isCorrect: false, reason: '「四{し}」要避諱{ひき}用「よ」，且省略{しょうりゃく}「いち」。' },
            { text: 'せんにびゃくさんじゅうよにん', isCorrect: false, reason: '「二百{にひゃく}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「千二百三十四人{せんにひゃくさんじゅうよにん}」中，「四{し}」在人數{にんずう}時用「よ」。',
            trapExplanation: '人數{にんずう}時「四{し}」要用「よ」避諱{ひき}。',
            relatedRules: ['四{よん}の避諱{ひき}', '人數{にんずう}の表達{ひょうたつ}']
        },
        sourceItem: { value: 1234, kanji: '千二百三十四人', reading: 'せんにひゃくさんじゅうよにん' }
    },
    {
        id: 'num_thousands_4567_dial',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: false,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'この辞書はいくらですか？',
            speakerB: '＿＿です。（四千五百六十七日圓）'
        },
        options: [
            { text: 'よんせんごひゃくろくじゅうななえん', isCorrect: true, reason: '正確{せいかく}！使用{しよう}「よん」和「なな」避諱{ひき}。' },
            { text: 'しせんごひゃくろくじゅうしちえん', isCorrect: false, reason: '「四{し}」和「七{しち}」都要避諱{ひき}用「よん」和「なな」。' },
            { text: 'よんせんごひゃくろくじゅうしちえん', isCorrect: false, reason: '「七{しち}」要用「なな」避免{ひめん}混淆{こんこう}。' },
            { text: 'しせんごひゃくろくじゅうななえん', isCorrect: false, reason: '「四{し}」要用「よん」避諱{ひき}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四千五百六十七円{よんせんごひゃくろくじゅうななえん}」中，「四{し}」用「よん」，「七{しち}」用「なな」。',
            relatedRules: ['四{よん}の避諱{ひき}', '七{なな}の避免{ひめん}混淆{こんこう}']
        },
        sourceItem: { value: 4567, kanji: '四千五百六十七円', reading: 'よんせんごひゃくろくじゅうななえん' }
    },
    {
        id: 'num_thousands_5000m_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: false,
        stem: '「五千メートル」的正確讀音是？',
        stem_zh: '「五千公尺」的正確讀音是？',
        options: [
            { text: 'ごせんメートル', isCorrect: true, reason: '正確{せいかく}！「五千{ごせん}」加{か}外來語{がいらいご}「メートル」。' },
            { text: 'いつせんメートル', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「ご」。' },
            { text: 'ごぜんメートル', isCorrect: false, reason: '「五千{ごせん}」不濁音化{ふだくおんか}。「ごぜん」是「午前{ごぜん}」。' },
            { text: 'ごっせんメートル', isCorrect: false, reason: '「五{ご}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五千メートル{ごせんメートル}」是常見{じょうけん}の距離{きょり}表達{ひょうたつ}。',
            relatedRules: ['千位數{せんいすう}+單位{たんい}', '距離{きょり}の表達{ひょうたつ}']
        },
        sourceItem: { value: 5000, kanji: '五千メートル', reading: 'ごせんメートル' }
    },
    {
        id: 'num_thousands_6789_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: true,
        stem: 'この商品は＿＿円です。',
        stem_zh: '這個商品六千七百八十九日圓。',
        options: [
            { text: 'ろくせんななひゃくはちじゅうきゅうえん', isCorrect: false, reason: '陷阱{かんけい}！「八十{はちじゅう}」要正確{せいかく}發音{はつおん}。' },
            { text: 'ろくせんななひゃくはちじゅうくえん', isCorrect: true, reason: '正確{せいかく}！「九{きゅう}」在這裡{ここ}通常{つうじょう}用「く」也可以{かのう}，但「きゅう」更常見{じょうけん}。' },
            { text: 'ろっせんななひゃくはちじゅうくえん', isCorrect: false, reason: '「六千{ろくせん}」不促音化{ふそくおんか}。' },
            { text: 'ろくせんしちひゃくはちじゅうくえん', isCorrect: false, reason: '「七{しち}」在這裡{ここ}用「なな」更常見{じょうけん}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「六千七百八十九円{ろくせんななひゃくはちじゅうくえん}」中，「六千{ろくせん}」無{ない}音變{おんへん}。',
            trapExplanation: '「六千{ろくせん}」與「六百{ろっぴゃく}」不同{ふどう}，不促音化{ふそくおんか}。',
            relatedRules: ['六千{ろくせん}の發音{はつおん}', '複合{ふくごう}金額{きんがく}']
        },
        sourceItem: { value: 6789, kanji: '六千七百八十九円', reading: 'ろくせんななひゃくはちじゅうくえん' }
    },

    // ===== 萬位數：20000-90000 =====
    {
        id: 'num_thousands_20000_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二万」的正確讀音是？',
        stem_zh: '「兩萬」的正確讀音是？',
        options: [
            { text: 'にまん', isCorrect: true, reason: '正確{せいかく}！「二万{にまん}」讀作{どくさ}「にまん」。' },
            { text: 'ふたまん', isCorrect: false, reason: '組合{くみあわせ}數字{すうじ}使用{しよう}する音讀{おんどく}「に」。' },
            { text: 'りまん', isCorrect: false, reason: '「二{に}」不變{ふへん}「り」。' },
            { text: 'にばん', isCorrect: false, reason: '「万{まん}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二万{にまん}」讀作{どくさ}「にまん」，無{ない}音變{おんへん}。',
            relatedRules: ['万位數{まんいすう}の讀法{よみかた}', '20000の發音{はつおん}']
        },
        sourceItem: { value: 20000, kanji: '二万', reading: 'にまん' }
    },
    {
        id: 'num_thousands_30000_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: true,
        stem: 'この車は＿＿円です。',
        stem_zh: '這台車三萬日圓。',
        options: [
            { text: 'さんまんえん', isCorrect: false, reason: '陷阱{かんけい}！「三万{さんまん}」要濁音化{だくおんか}！讀む{よむ}「さんばん」...不對{ふたい}！' },
            { text: 'さんまんえん', isCorrect: true, reason: '正確{せいかく}！實際上{じっさいじょう}「三万{さんまん}」不濁音化{ふだくおんか}。' },
            { text: 'みまんえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「さん」。' },
            { text: 'さんばんえん', isCorrect: false, reason: '「万{まん}」不濁音化{ふだくおんか}為「ばん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三万{さんまん}」實際上{じっさいじょう}不濁音化{ふだくおんか}！這與「三千{さんぜん}」不同{ふどう}。',
            trapExplanation: '這是反陷阱題{はんかんけいだい}！學習者{がくしゅうしゃ}容易{ようい}過度{かど}適用{てきよう}濁音化{だくおんか}規則{きそく}。',
            relatedRules: ['万{まん}の特殊{とくしゅ}規則{きそく}', '三万{さんまん}不濁音化{ふだくおんか}']
        },
        sourceItem: { value: 30000, kanji: '三万円', reading: 'さんまんえん' }
    },
    {
        id: 'num_thousands_40000_dial',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: false,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このパソコンはいくらですか？',
            speakerB: '＿＿です。（四萬日圓）'
        },
        options: [
            { text: 'よんまんえん', isCorrect: true, reason: '正確{せいかく}！「四万円{よんまんえん}」。' },
            { text: 'しまんえん', isCorrect: false, reason: '為{ため}避諱{ひき}「死{し}」，多用{おおくもちい}「よん」。' },
            { text: 'よまんえん', isCorrect: false, reason: '應{おう}說{いう}「よん」不是「よ」。' },
            { text: 'よんばんえん', isCorrect: false, reason: '「万{まん}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四万円{よんまんえん}」使用{しよう}「よん」避諱{ひき}。',
            relatedRules: ['四{よん}の避諱{ひき}', '万位數{まんいすう}金額{きんがく}']
        },
        sourceItem: { value: 40000, kanji: '四万円', reading: 'よんまんえん' }
    },
    {
        id: 'num_thousands_50000_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: false,
        stem: '「五万」的正確讀音是？',
        stem_zh: '「五萬」的正確讀音是？',
        options: [
            { text: 'ごまん', isCorrect: true, reason: '正確{せいかく}！「五万{ごまん}」讀作{どくさ}「ごまん」。' },
            { text: 'いつまん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「ご」。' },
            { text: 'ごばん', isCorrect: false, reason: '「万{まん}」不濁音化{ふだくおんか}。「ごばん」是「碁盤{ごばん}」。' },
            { text: 'ごっまん', isCorrect: false, reason: '「五{ご}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五万{ごまん}」讀作{どくさ}「ごまん」，無{ない}音變{おんへん}。',
            relatedRules: ['万位數{まんいすう}の讀法{よみかた}', '50000の發音{はつおん}']
        },
        sourceItem: { value: 50000, kanji: '五万', reading: 'ごまん' }
    },
    {
        id: 'num_thousands_80000_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: true,
        stem: 'この家電は＿＿円です。',
        stem_zh: '這個家電八萬日圓。',
        options: [
            { text: 'はちまんえん', isCorrect: false, reason: '陷阱{かんけい}！「八万{はちまん}」要促音化{そくおんか}！' },
            { text: 'はちまんえん', isCorrect: true, reason: '正確{せいかく}！實際上{じっさいじょう}「八万{はちまん}」不促音化{ふそくおんか}。' },
            { text: 'やまんえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「はち」。' },
            { text: 'はっまんえん', isCorrect: false, reason: '「八万{はちまん}」實際上{じっさいじょう}不促音化{ふそくおんか}！' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八万{はちまん}」實際上{じっさいじょう}不促音化{ふそくおんか}！這與「八千{はっせん}」不同{ふどう}。',
            trapExplanation: '這是反陷阱題{はんかんけいだい}！「八{はち}」在「万{まん}」前{まえ}不促音化{ふそくおんか}。',
            relatedRules: ['万{まん}の特殊{とくしゅ}規則{きそく}', '八万{はちまん}不促音化{ふそくおんか}']
        },
        sourceItem: { value: 80000, kanji: '八万円', reading: 'はちまんえん' }
    },

    // ===== 比較題：千 vs 万 =====
    {
        id: 'num_thousands_compare_3_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: true,
        stem: '「三千」和「三万」的讀音規則有何不同？',
        stem_zh: '「三千」和「三萬」的讀音規則有何不同？',
        options: [
            { text: '三千讀「さんぜん」（濁音化），三万讀「さんまん」（不濁音化）', isCorrect: true, reason: '正確{せいかく}！「千{せん}」會濁音化{だくおんか}，但「万{まん}」不會{ふかい}。' },
            { text: '三千讀「さんせん」，三万讀「さんばん」', isCorrect: false, reason: '「三千{さんぜん}」要濁音化{だくおんか}，「三万{さんまん}」不濁音化{ふだくおんか}。' },
            { text: '兩者都不濁音化', isCorrect: false, reason: '「三千{さんぜん}」要濁音化{だくおんか}。' },
            { text: '兩者都濁音化', isCorrect: false, reason: '「三万{さんまん}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「千{せん}」和「万{まん}」在「三{さん}」後面{うしろ}的音變{おんへん}規則{きそく}不同{ふどう}。',
            trapExplanation: '這是測試{そくし}「千{せん}」和「万{まん}」音變{おんへん}差異{さい}の比較題{ひかくだい}。',
            relatedRules: ['三千{さんぜん}の濁音化{だくおんか}', '三万{さんまん}不濁音化{ふだくおんか}']
        },
        sourceItem: { value: 3000, kanji: '三千/三万', reading: 'さんぜん/さんまん' }
    },
    {
        id: 'num_thousands_compare_8_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: true,
        stem: '「八千円」和「八万円」各怎麼讀？',
        stem_zh: '「八千日圓」和「八萬日圓」各怎麼讀？',
        options: [
            { text: '八千円讀「はっせんえん」，八万円讀「はちまんえん」', isCorrect: true, reason: '正確{せいかく}！「千{せん}」會促音化{そくおんか}，但「万{まん}」不會{ふかい}。' },
            { text: '八千円讀「はちせんえん」，八万円讀「はっまんえん」', isCorrect: false, reason: '規則{きそく}相反{そうはん}了！' },
            { text: '兩者都促音化', isCorrect: false, reason: '「八万{はちまん}」不促音化{ふそくおんか}。' },
            { text: '兩者都不促音化', isCorrect: false, reason: '「八千{はっせん}」要促音化{そくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八千{はっせん}」促音化{そくおんか}，「八万{はちまん}」不促音化{ふそくおんか}。',
            trapExplanation: '這是測試{そくし}「千{せん}」和「万{まん}」音變{おんへん}差異{さい}の比較題{ひかくだい}。',
            relatedRules: ['八千{はっせん}の促音化{そくおんか}', '八万{はちまん}不促音化{ふそくおんか}']
        },
        sourceItem: { value: 8000, kanji: '八千円/八万円', reading: 'はっせんえん/はちまんえん' }
    },

    // ===== 更多組合數字 =====
    {
        id: 'num_thousands_4200_dial',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: false,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'この傘はいくらですか？',
            speakerB: '＿＿です。（四千兩百日圓）'
        },
        options: [
            { text: 'よんせんにひゃくえん', isCorrect: true, reason: '正確{せいかく}！「四千二百円{よんせんにひゃくえん}」。' },
            { text: 'しせんにひゃくえん', isCorrect: false, reason: '為{ため}避諱{ひき}多用{おおくもちい}「よん」。' },
            { text: 'よんせんふたひゃくえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「に」。' },
            { text: 'よんぜんにひゃくえん', isCorrect: false, reason: '「四千{よんせん}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四千二百円{よんせんにひゃくえん}」無{ない}音變{おんへん}。',
            relatedRules: ['四{よん}の避諱{ひき}', '組合{くみあわせ}金額{きんがく}']
        },
        sourceItem: { value: 4200, kanji: '四千二百円', reading: 'よんせんにひゃくえん' }
    },
    {
        id: 'num_thousands_5600_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: true,
        stem: '「五千六百」的正確讀音是？',
        stem_zh: '「五千六百」的正確讀音是？',
        options: [
            { text: 'ごせんろくひゃく', isCorrect: false, reason: '陷阱{かんけい}！「六百{ろっぴゃく}」要促音化{そくおんか}和半濁音化{はんだくおんか}。' },
            { text: 'ごせんろっぴゃく', isCorrect: true, reason: '正確{せいかく}！「五千{ごせん}」無{ない}音變{おんへん}，「六百{ろっぴゃく}」促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'ごっせんろっぴゃく', isCorrect: false, reason: '「五千{ごせん}」不促音化{ふそくおんか}。' },
            { text: 'ごせんろくびゃく', isCorrect: false, reason: '「六百{ろっぴゃく}」不是濁音化{だくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「五千六百{ごせんろっぴゃく}」中，只有{ただ}「六百{ろっぴゃく}」需要{じゅよう}音變{おんへん}。',
            trapExplanation: '不要{ふよう}過度{かど}適用{てきよう}音變{おんへん}規則{きそく}。',
            relatedRules: ['五千{ごせん}の發音{はつおん}', '六百{ろっぴゃく}の音變{おんへん}']
        },
        sourceItem: { value: 5600, kanji: '五千六百', reading: 'ごせんろっぴゃく' }
    },
    {
        id: 'num_thousands_7300_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: true,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書七千三百日圓。',
        options: [
            { text: 'ななせんさんひゃくえん', isCorrect: false, reason: '陷阱{かんけい}！「三百{さんびゃく}」要濁音化{だくおんか}。' },
            { text: 'ななせんさんびゃくえん', isCorrect: true, reason: '正確{せいかく}！「七千三百円{ななせんさんびゃくえん}」。' },
            { text: 'しちせんさんびゃくえん', isCorrect: false, reason: '為{ため}避免{ひめん}混淆{こんこう}多用{おおくもちい}「なな」。' },
            { text: 'ななぜんさんびゃくえん', isCorrect: false, reason: '「七千{ななせん}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「七千三百円{ななせんさんびゃくえん}」中，「七千{ななせん}」無{ない}音變{おんへん}，「三百{さんびゃく}」濁音化{だくおんか}。',
            trapExplanation: '「三百{さんびゃく}」在任何{にんい}位置{いち}都要{とも}濁音化{だくおんか}。',
            relatedRules: ['七千{ななせん}の發音{はつおん}', '三百{さんびゃく}の濁音化{だくおんか}']
        },
        sourceItem: { value: 7300, kanji: '七千三百円', reading: 'ななせんさんびゃくえん' }
    },
    {
        id: 'num_thousands_9800_dial',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: true,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このジャケットはいくらですか？',
            speakerB: '＿＿です。（九千八百日圓）'
        },
        options: [
            { text: 'きゅうせんはちひゃくえん', isCorrect: false, reason: '陷阱{かんけい}！「八百{はっぴゃく}」要促音化{そくおんか}和半濁音化{はんだくおんか}。' },
            { text: 'きゅうせんはっぴゃくえん', isCorrect: true, reason: '正確{せいかく}！「九千八百円{きゅうせんはっぴゃくえん}」。' },
            { text: 'くせんはっぴゃくえん', isCorrect: false, reason: '為{ため}避諱{ひき}多用{おおくもちい}「きゅう」。' },
            { text: 'きゅうぜんはっぴゃくえん', isCorrect: false, reason: '「九千{きゅうせん}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「九千八百円{きゅうせんはっぴゃくえん}」中，「九千{きゅうせん}」無{ない}音變{おんへん}，「八百{はっぴゃく}」促音化{そくおんか}+半濁音化{はんだくおんか}。',
            trapExplanation: '「八百{はっぴゃく}」在任何{にんい}位置{いち}都要{とも}音變{おんへん}。',
            relatedRules: ['九千{きゅうせん}の發音{はつおん}', '八百{はっぴゃく}の音變{おんへん}']
        },
        sourceItem: { value: 9800, kanji: '九千八百円', reading: 'きゅうせんはっぴゃくえん' }
    },

    // ===== 距離、時間、人數應用題 =====
    {
        id: 'num_thousands_2000m_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二千メートル」的正確讀音是？',
        stem_zh: '「兩千公尺」的正確讀音是？',
        options: [
            { text: 'にせんメートル', isCorrect: true, reason: '正確{せいかく}！「二千{にせん}」加{か}「メートル」。' },
            { text: 'ふたせんメートル', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「に」。' },
            { text: 'にぜんメートル', isCorrect: false, reason: '「二千{にせん}」不濁音化{ふだくおんか}。' },
            { text: 'にっせんメートル', isCorrect: false, reason: '「二{に}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二千メートル{にせんメートル}」是常見{じょうけん}の距離{きょり}表達{ひょうたつ}。',
            relatedRules: ['千位數{せんいすう}+單位{たんい}', '距離{きょり}の表達{ひょうたつ}']
        },
        sourceItem: { value: 2000, kanji: '二千メートル', reading: 'にせんメートル' }
    },
    {
        id: 'num_thousands_3000people_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: true,
        stem: 'この学校には＿＿人の学生がいます。',
        stem_zh: '這所學校有三千名學生。',
        options: [
            { text: 'さんせんにん', isCorrect: false, reason: '陷阱{かんけい}！「三千{さんぜん}」要濁音化{だくおんか}。' },
            { text: 'さんぜんにん', isCorrect: true, reason: '正確{せいかく}！「三千人{さんぜんにん}」。' },
            { text: 'みせんにん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「さん」。' },
            { text: 'さんぜんひと', isCorrect: false, reason: '人數{にんずう}用「にん」不用「ひと」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三千人{さんぜんにん}」中，「三千{さんぜん}」濁音化{だくおんか}。',
            trapExplanation: '人數{にんずう}表達{ひょうたつ}時也要{とも}注意{ちゅうい}音變{おんへん}。',
            relatedRules: ['三千{さんぜん}の濁音化{だくおんか}', '人數{にんずう}の表達{ひょうたつ}']
        },
        sourceItem: { value: 3000, kanji: '三千人', reading: 'さんぜんにん' }
    },
    {
        id: 'num_thousands_8000people_dial',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: true,
        stem: '何人参加しましたか？',
        stem_zh: '有多少人參加？',
        dialogue: {
            speakerA: 'コンサートには何人参加しましたか？',
            speakerB: '＿＿参加しました。（八千人）'
        },
        options: [
            { text: 'はちせんにん', isCorrect: false, reason: '陷阱{かんけい}！「八千{はっせん}」要促音化{そくおんか}。' },
            { text: 'はっせんにん', isCorrect: true, reason: '正確{せいかく}！「八千人{はっせんにん}」。' },
            { text: 'やせんにん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「はち」→「はっ」。' },
            { text: 'はちぜんにん', isCorrect: false, reason: '是促音化{そくおんか}，不是濁音化{だくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八千人{はっせんにん}」中，「八千{はっせん}」促音化{そくおんか}。',
            trapExplanation: '人數{にんずう}表達{ひょうたつ}時也要{とも}注意{ちゅうい}音變{おんへん}。',
            relatedRules: ['八千{はっせん}の促音化{そくおんか}', '人數{にんずう}の表達{ひょうたつ}']
        },
        sourceItem: { value: 8000, kanji: '八千人', reading: 'はっせんにん' }
    },
    {
        id: 'num_thousands_4000year_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: false,
        stem: '「四千年」的正確讀音是？',
        stem_zh: '「四千年」的正確讀音是？',
        options: [
            { text: 'よんせんねん', isCorrect: true, reason: '正確{せいかく}！「四千年{よんせんねん}」。' },
            { text: 'しせんねん', isCorrect: false, reason: '為{ため}避諱{ひき}多用{おおくもちい}「よん」。' },
            { text: 'よんぜんねん', isCorrect: false, reason: '「四千{よんせん}」不濁音化{ふだくおんか}。' },
            { text: 'よっせんねん', isCorrect: false, reason: '「四{よん}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四千年{よんせんねん}」使用{しよう}「よん」避諱{ひき}，無{ない}音變{おんへん}。',
            relatedRules: ['四{よん}の避諱{ひき}', '年數{ねんすう}の表達{ひょうたつ}']
        },
        sourceItem: { value: 4000, kanji: '四千年', reading: 'よんせんねん' }
    },

    // ===== 更多萬位數 =====
    {
        id: 'num_thousands_60000_dial',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: false,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このカメラはいくらですか？',
            speakerB: '＿＿です。（六萬日圓）'
        },
        options: [
            { text: 'ろくまんえん', isCorrect: true, reason: '正確{せいかく}！「六万円{ろくまんえん}」。' },
            { text: 'むまんえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「ろく」。' },
            { text: 'ろっまんえん', isCorrect: false, reason: '「六万{ろくまん}」不促音化{ふそくおんか}。' },
            { text: 'ろくばんえん', isCorrect: false, reason: '「万{まん}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六万円{ろくまんえん}」無{ない}音變{おんへん}，與「六百{ろっぴゃく}」「六千{ろくせん}」不同{ふどう}。',
            relatedRules: ['六万{ろくまん}の發音{はつおん}', '万位數{まんいすう}の特殊{とくしゅ}規則{きそく}']
        },
        sourceItem: { value: 60000, kanji: '六万円', reading: 'ろくまんえん' }
    },
    {
        id: 'num_thousands_70000_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: false,
        stem: '「七万」的正確讀音是？',
        stem_zh: '「七萬」的正確讀音是？',
        options: [
            { text: 'ななまん', isCorrect: true, reason: '正確{せいかく}！「七万{ななまん}」讀作{どくさ}「ななまん」。' },
            { text: 'しちまん', isCorrect: false, reason: '為{ため}避免{ひめん}混淆{こんこう}多用{おおくもちい}「なな」。' },
            { text: 'ななばん', isCorrect: false, reason: '「万{まん}」不濁音化{ふだくおんか}。' },
            { text: 'なっまん', isCorrect: false, reason: '「七{なな}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七万{ななまん}」讀作{どくさ}「ななまん」，無{ない}音變{おんへん}。',
            relatedRules: ['七{なな}の避免{ひめん}混淆{こんこう}', '万位數{まんいすう}の讀法{よみかた}']
        },
        sourceItem: { value: 70000, kanji: '七万', reading: 'ななまん' }
    },
    {
        id: 'num_thousands_90000_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: false,
        stem: 'この車は＿＿円です。',
        stem_zh: '這台車九萬日圓。',
        options: [
            { text: 'きゅうまんえん', isCorrect: true, reason: '正確{せいかく}！「九万円{きゅうまんえん}」。' },
            { text: 'くまんえん', isCorrect: false, reason: '為{ため}避諱{ひき}多用{おおくもちい}「きゅう」。' },
            { text: 'きゅうばんえん', isCorrect: false, reason: '「万{まん}」不濁音化{ふだくおんか}。' },
            { text: 'きゅっまんえん', isCorrect: false, reason: '「九{きゅう}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九万円{きゅうまんえん}」使用{しよう}「きゅう」避諱{ひき}，無{ない}音變{おんへん}。',
            relatedRules: ['九{きゅう}の避諱{ひき}', '万位數{まんいすう}金額{きんがく}']
        },
        sourceItem: { value: 90000, kanji: '九万円', reading: 'きゅうまんえん' }
    },

    // ===== 複合萬位數 =====
    {
        id: 'num_thousands_12000_dial',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: false,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このスーツはいくらですか？',
            speakerB: '＿＿です。（一萬兩千日圓）'
        },
        options: [
            { text: 'いちまんにせんえん', isCorrect: true, reason: '正確{せいかく}！「一万二千円{いちまんにせんえん}」。' },
            { text: 'まんにせんえん', isCorrect: false, reason: '「一万{いちまん}」的「いち」不可{ふか}省略{しょうりゃく}。' },
            { text: 'いちまんふたせんえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「に」。' },
            { text: 'いちまんにぜんえん', isCorrect: false, reason: '「二千{にせん}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一万二千円{いちまんにせんえん}」中，「いち」不可{ふか}省略{しょうりゃく}。',
            relatedRules: ['一万{いちまん}の特殊{とくしゅ}規則{きそく}', '組合{くみあわせ}金額{きんがく}']
        },
        sourceItem: { value: 12000, kanji: '一万二千円', reading: 'いちまんにせんえん' }
    },
    {
        id: 'num_thousands_15000_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: false,
        stem: '「一万五千」的正確讀音是？',
        stem_zh: '「一萬五千」的正確讀音是？',
        options: [
            { text: 'いちまんごせん', isCorrect: true, reason: '正確{せいかく}！「一万五千{いちまんごせん}」。' },
            { text: 'まんごせん', isCorrect: false, reason: '「一万{いちまん}」的「いち」不可{ふか}省略{しょうりゃく}。' },
            { text: 'いちまんいつせん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「ご」。' },
            { text: 'いちまんごぜん', isCorrect: false, reason: '「五千{ごせん}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一万五千{いちまんごせん}」中，「いち」不可{ふか}省略{しょうりゃく}。',
            relatedRules: ['一万{いちまん}の特殊{とくしゅ}規則{きそく}', '萬位數{まんいすう}組合{くみあわせ}']
        },
        sourceItem: { value: 15000, kanji: '一万五千', reading: 'いちまんごせん' }
    },
    {
        id: 'num_thousands_13000_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: true,
        stem: 'この家電は＿＿円です。',
        stem_zh: '這個家電一萬三千日圓。',
        options: [
            { text: 'いちまんさんせんえん', isCorrect: false, reason: '陷阱{かんけい}！「三千{さんぜん}」要濁音化{だくおんか}。' },
            { text: 'いちまんさんぜんえん', isCorrect: true, reason: '正確{せいかく}！「一万三千円{いちまんさんぜんえん}」。' },
            { text: 'まんさんぜんえん', isCorrect: false, reason: '「いち」不可{ふか}省略{しょうりゃく}。' },
            { text: 'いちばんさんぜんえん', isCorrect: false, reason: '「万{まん}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「一万三千円{いちまんさんぜんえん}」中，「三千{さんぜん}」濁音化{だくおんか}。',
            trapExplanation: '即使{たとえ}在萬位數{まんいすう}後面{うしろ}，「三千{さんぜん}」仍{なお}需要{じゅよう}濁音化{だくおんか}。',
            relatedRules: ['一万{いちまん}の特殊{とくしゅ}規則{きそく}', '三千{さんぜん}の濁音化{だくおんか}']
        },
        sourceItem: { value: 13000, kanji: '一万三千円', reading: 'いちまんさんぜんえん' }
    },
    {
        id: 'num_thousands_18000_dial',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: true,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'この時計はいくらですか？',
            speakerB: '＿＿です。（一萬八千日圓）'
        },
        options: [
            { text: 'いちまんはちせんえん', isCorrect: false, reason: '陷阱{かんけい}！「八千{はっせん}」要促音化{そくおんか}。' },
            { text: 'いちまんはっせんえん', isCorrect: true, reason: '正確{せいかく}！「一万八千円{いちまんはっせんえん}」。' },
            { text: 'まんはっせんえん', isCorrect: false, reason: '「いち」不可{ふか}省略{しょうりゃく}。' },
            { text: 'いちまんやせんえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「はち」→「はっ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「一万八千円{いちまんはっせんえん}」中，「八千{はっせん}」促音化{そくおんか}。',
            trapExplanation: '即使{たとえ}在萬位數{まんいすう}後面{うしろ}，「八千{はっせん}」仍{なお}需要{じゅよう}促音化{そくおんか}。',
            relatedRules: ['一万{いちまん}の特殊{とくしゅ}規則{きそく}', '八千{はっせん}の促音化{そくおんか}']
        },
        sourceItem: { value: 18000, kanji: '一万八千円', reading: 'いちまんはっせんえん' }
    },

    // ===== 更多實用題 =====
    {
        id: 'num_thousands_2980_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: true,
        stem: '「二千九百八十」的正確讀音是？',
        stem_zh: '「兩千九百八十」的正確讀音是？',
        options: [
            { text: 'にせんきゅうひゃくはちじゅう', isCorrect: false, reason: '陷阱{かんけい}！「九百{きゅうひゃく}」和「八十{はちじゅう}」的發音{はつおん}要確認{かくにん}。' },
            { text: 'にせんきゅうひゃくはちじゅう', isCorrect: true, reason: '正確{せいかく}！「二千九百八十{にせんきゅうひゃくはちじゅう}」無{ない}音變{おんへん}。' },
            { text: 'にぜんくひゃくはちじゅう', isCorrect: false, reason: '「二千{にせん}」不濁音化{ふだくおんか}，「九{きゅう}」不用「く」。' },
            { text: 'ふたせんきゅうひゃくはちじゅう', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「に」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「二千九百八十{にせんきゅうひゃくはちじゅう}」無{ない}音變{おんへん}。',
            relatedRules: ['組合{くみあわせ}數字{すうじ}の讀法{よみかた}', '2980の發音{はつおん}']
        },
        sourceItem: { value: 2980, kanji: '二千九百八十', reading: 'にせんきゅうひゃくはちじゅう' }
    },
    {
        id: 'num_thousands_3650_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: true,
        stem: '一年は＿＿日あります。',
        stem_zh: '一年有三百六十五天。',
        options: [
            { text: 'さんびゃくろくじゅうごにち', isCorrect: true, reason: '正確{せいかく}！「三百六十五日{さんびゃくろくじゅうごにち}」。' },
            { text: 'さんひゃくろくじゅうごにち', isCorrect: false, reason: '陷阱{かんけい}！「三百{さんびゃく}」要濁音化{だくおんか}。' },
            { text: 'みびゃくろくじゅうごにち', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「さん」。' },
            { text: 'さんびゃくむじゅうごにち', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「ろく」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三百六十五日{さんびゃくろくじゅうごにち}」中，「三百{さんびゃく}」濁音化{だくおんか}。',
            trapExplanation: '這是日常{にちじょう}生活{せいかつ}中常見{じょうけん}の數字{すうじ}。',
            relatedRules: ['三百{さんびゃく}の濁音化{だくおんか}', '日數{にっすう}の表達{ひょうたつ}']
        },
        sourceItem: { value: 365, kanji: '三百六十五日', reading: 'さんびゃくろくじゅうごにち' }
    },
    {
        id: 'num_thousands_7890_dial',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: false,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このバッグはいくらですか？',
            speakerB: '＿＿です。（七千八百九十日圓）'
        },
        options: [
            { text: 'ななせんはっぴゃくきゅうじゅうえん', isCorrect: true, reason: '正確{せいかく}！「七千八百九十円{ななせんはっぴゃくきゅうじゅうえん}」。' },
            { text: 'しちせんはっぴゃくきゅうじゅうえん', isCorrect: false, reason: '為{ため}避免{ひめん}混淆{こんこう}多用{おおくもちい}「なな」。' },
            { text: 'ななせんはちひゃくきゅうじゅうえん', isCorrect: false, reason: '「八百{はっぴゃく}」要促音化{そくおんか}和半濁音化{はんだくおんか}。' },
            { text: 'ななぜんはっぴゃくきゅうじゅうえん', isCorrect: false, reason: '「七千{ななせん}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七千八百九十円{ななせんはっぴゃくきゅうじゅうえん}」中，「八百{はっぴゃく}」要音變{おんへん}。',
            relatedRules: ['七千{ななせん}の發音{はつおん}', '八百{はっぴゃく}の音變{おんへん}']
        },
        sourceItem: { value: 7890, kanji: '七千八百九十円', reading: 'ななせんはっぴゃくきゅうじゅうえん' }
    },

    // ===== 最終複習題 =====
    {
        id: 'num_thousands_review_1_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: true,
        stem: '下列哪個數字的千位會發生音變？',
        stem_zh: '下列哪個數字的千位會發生音變？',
        options: [
            { text: '三千（さんぜん）- 濁音化', isCorrect: true, reason: '正確{せいかく}！「三千{さんぜん}」的「せん」會濁音化{だくおんか}為「ぜん」。' },
            { text: '二千（にせん）- 無音變', isCorrect: false, reason: '「二千{にせん}」無{ない}音變{おんへん}，不是正確{せいかく}答案{こたえ}。' },
            { text: '五千（ごせん）- 無音變', isCorrect: false, reason: '「五千{ごせん}」無{ない}音變{おんへん}，不是正確{せいかく}答案{こたえ}。' },
            { text: '七千（ななせん）- 無音變', isCorrect: false, reason: '「七千{ななせん}」無{ない}音變{おんへん}，不是正確{せいかく}答案{こたえ}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '千位數{せんいすう}中，只有{ただ}「三千{さんぜん}」和「八千{はっせん}」會發生{はっせい}音變{おんへん}。',
            trapExplanation: '這是總複習{そうふくしゅう}題{だい}，測試{そくし}對千位數{せんいすう}音變{おんへん}規則{きそく}の理解{りかい}。',
            relatedRules: ['千{せん}の音變{おんへん}規則{きそく}', '三千{さんぜん}と八千{はっせん}']
        },
        sourceItem: { value: 3000, kanji: '三千', reading: 'さんぜん' }
    },
    {
        id: 'num_thousands_review_2_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: true,
        stem: '下列哪個說法正確？',
        stem_zh: '下列哪個說法正確？',
        options: [
            { text: '「一万」必須讀「いちまん」，「一」不可省略', isCorrect: true, reason: '正確{せいかく}！「一万{いちまん}」的「いち」不可{ふか}省略{しょうりゃく}。' },
            { text: '「一百」必須讀「いちひゃく」，「一」不可省略', isCorrect: false, reason: '「百{ひゃく}」通常{つうじょう}省略{しょうりゃく}「いち」。' },
            { text: '「一千」必須讀「いちせん」，「一」不可省略', isCorrect: false, reason: '「千{せん}」通常{つうじょう}省略{しょうりゃく}「いち」。' },
            { text: '「一」在所有數字單位前都可省略', isCorrect: false, reason: '「万{まん}」前{まえ}的「いち」不可{ふか}省略{しょうりゃく}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一万{いちまん}」是特殊{とくしゅ}規則{きそく}，「いち」不可{ふか}省略{しょうりゃく}。',
            trapExplanation: '這是總複習{そうふくしゅう}題{だい}，測試{そくし}對「一{いち}」省略{しょうりゃく}規則{きそく}の理解{りかい}。',
            relatedRules: ['一万{いちまん}の特殊{とくしゅ}規則{きそく}', '「いち」の省略{しょうりゃく}']
        },
        sourceItem: { value: 10000, kanji: '一万', reading: 'いちまん' }
    },
    {
        id: 'num_thousands_review_3_dial',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: true,
        stem: '「八千」和「八万」的讀法有什麼不同？',
        stem_zh: '「八千」和「八萬」的讀法有什麼不同？',
        dialogue: {
            speakerA: '「八千」怎麼讀？',
            speakerB: '「八千」讀作「___」。'
        },
        options: [
            { text: 'はっせん（促音化）；八万讀作「はちまん」（無音變）', isCorrect: true, reason: '正確{せいかく}！「千{せん}」前{まえ}促音化{そくおんか}，「万{まん}」前{まえ}不促音化{ふそくおんか}。' },
            { text: 'はちせん；八万讀作「はっまん」', isCorrect: false, reason: '規則{きそく}相反{そうはん}了！' },
            { text: '兩者都是「はっ」', isCorrect: false, reason: '「八万{はちまん}」不促音化{ふそくおんか}。' },
            { text: '兩者都是「はち」', isCorrect: false, reason: '「八千{はっせん}」要促音化{そくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八{はち}」在「千{せん}」前{まえ}促音化{そくおんか}為「はっ」，但在「万{まん}」前{まえ}不促音化{ふそくおんか}。',
            trapExplanation: '這是總複習{そうふくしゅう}題{だい}，測試{そくし}對「八{はち}」音變{おんへん}の理解{りかい}。',
            relatedRules: ['八千{はっせん}の促音化{そくおんか}', '八万{はちまん}不促音化{ふそくおんか}']
        },
        sourceItem: { value: 8000, kanji: '八千/八万', reading: 'はっせん/はちまん' }
    },
    {
        id: 'num_thousands_review_4_pron',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: false,
        stem: '「六千」讀作什麼？',
        stem_zh: '「六千」讀作什麼？',
        options: [
            { text: 'ろくせん', isCorrect: true, reason: '正確{せいかく}！「六千{ろくせん}」無{ない}音變{おんへん}，與「六百{ろっぴゃく}」不同{ふどう}。' },
            { text: 'ろっせん', isCorrect: false, reason: '「六千{ろくせん}」不促音化{ふそくおんか}。' },
            { text: 'むせん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「ろく」。' },
            { text: 'ろくぜん', isCorrect: false, reason: '「六千{ろくせん}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六千{ろくせん}」無{ない}音變{おんへん}，與「六百{ろっぴゃく}」的音變{おんへん}規則{きそく}不同{ふどう}。',
            relatedRules: ['六千{ろくせん}の發音{はつおん}', '六{ろく}の音變{おんへん}比較{ひかく}']
        },
        sourceItem: { value: 6000, kanji: '六千', reading: 'ろくせん' }
    },
    {
        id: 'num_thousands_review_5_sent',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: false,
        stem: '今年有＿＿人參加馬拉松。',
        stem_zh: '今年有五千人參加馬拉松。',
        options: [
            { text: 'ごせんにん', isCorrect: true, reason: '正確{せいかく}！「五千人{ごせんにん}」無{ない}音變{おんへん}。' },
            { text: 'いつせんにん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「ご」。' },
            { text: 'ごぜんにん', isCorrect: false, reason: '「五千{ごせん}」不濁音化{ふだくおんか}。' },
            { text: 'ごっせんにん', isCorrect: false, reason: '「五{ご}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五千人{ごせんにん}」無{ない}音變{おんへん}。',
            relatedRules: ['五千{ごせん}の發音{はつおん}', '人數{にんずう}の表達{ひょうたつ}']
        },
        sourceItem: { value: 5000, kanji: '五千人', reading: 'ごせんにん' }
    },

    // ===== 額外練習題（76-100）=====
    {
        id: 'num_thousands_extra_1',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: false,
        stem: '「千五百」的正確讀音是？',
        stem_zh: '「一千五百」的正確讀音是？',
        options: [
            { text: 'せんごひゃく', isCorrect: true, reason: '正確{せいかく}！「千五百{せんごひゃく}」省略{しょうりゃく}「いち」。' },
            { text: 'いちせんごひゃく', isCorrect: false, reason: '通常{つうじょう}省略{しょうりゃく}「いち」。' },
            { text: 'せんごびゃく', isCorrect: false, reason: '「五百{ごひゃく}」不濁音化{ふだくおんか}。' },
            { text: 'ちごひゃく', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「せん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「千五百{せんごひゃく}」省略{しょうりゃく}「いち」，無{ない}音變{おんへん}。',
            relatedRules: ['千位數{せんいすう}の省略{しょうりゃく}', '1500の發音{はつおん}']
        },
        sourceItem: { value: 1500, kanji: '千五百', reading: 'せんごひゃく' }
    },
    {
        id: 'num_thousands_extra_2',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: true,
        stem: 'この商品は＿＿円です。',
        stem_zh: '這個商品三千六百日圓。',
        options: [
            { text: 'さんせんろくひゃくえん', isCorrect: false, reason: '陷阱{かんけい}！「三千{さんぜん}」要濁音化{だくおんか}。' },
            { text: 'さんぜんろくひゃくえん', isCorrect: true, reason: '正確{せいかく}！「三千六百円{さんぜんろくひゃくえん}」。' },
            { text: 'みぜんろくひゃくえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「さん」。' },
            { text: 'さんぜんむひゃくえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「ろく」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三千六百円{さんぜんろくひゃくえん}」中，「三千{さんぜん}」濁音化{だくおんか}。',
            trapExplanation: '「三千{さんぜん}」在任何{にんい}組合{くみあわせ}中都{とも}要濁音化{だくおんか}。',
            relatedRules: ['三千{さんぜん}の濁音化{だくおんか}', '組合{くみあわせ}金額{きんがく}']
        },
        sourceItem: { value: 3600, kanji: '三千六百円', reading: 'さんぜんろくひゃくえん' }
    },
    {
        id: 'num_thousands_extra_3',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: true,
        stem: '距離は？',
        stem_zh: '距離是多少？',
        dialogue: {
            speakerA: 'ここから駅までどのくらいですか？',
            speakerB: '約＿＿メートルです。（約八千公尺）'
        },
        options: [
            { text: 'はちせん', isCorrect: false, reason: '陷阱{かんけい}！「八千{はっせん}」要促音化{そくおんか}。' },
            { text: 'はっせん', isCorrect: true, reason: '正確{せいかく}！「八千{はっせん}」促音化{そくおんか}。' },
            { text: 'やせん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「はち」→「はっ」。' },
            { text: 'はちぜん', isCorrect: false, reason: '是促音化{そくおんか}，不是濁音化{だくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八千メートル{はっせんメートル}」中，「八千{はっせん}」促音化{そくおんか}。',
            trapExplanation: '距離{きょり}表達{ひょうたつ}時也要{とも}注意{ちゅうい}音變{おんへん}。',
            relatedRules: ['八千{はっせん}の促音化{そくおんか}', '距離{きょり}の表達{ひょうたつ}']
        },
        sourceItem: { value: 8000, kanji: '八千メートル', reading: 'はっせんメートル' }
    },
    {
        id: 'num_thousands_extra_4',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二万三千」的正確讀音是？',
        stem_zh: '「兩萬三千」的正確讀音是？',
        options: [
            { text: 'にまんさんぜん', isCorrect: true, reason: '正確{せいかく}！「三千{さんぜん}」要濁音化{だくおんか}。' },
            { text: 'にまんさんせん', isCorrect: false, reason: '「三千{さんぜん}」要濁音化{だくおんか}。' },
            { text: 'ふたまんさんぜん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「に」。' },
            { text: 'にばんさんぜん', isCorrect: false, reason: '「万{まん}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二万三千{にまんさんぜん}」中，「三千{さんぜん}」濁音化{だくおんか}。',
            relatedRules: ['三千{さんぜん}の濁音化{だくおんか}', '萬位數{まんいすう}組合{くみあわせ}']
        },
        sourceItem: { value: 23000, kanji: '二万三千', reading: 'にまんさんぜん' }
    },
    {
        id: 'num_thousands_extra_5',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: true,
        stem: 'この車は＿＿円です。',
        stem_zh: '這台車五萬八千日圓。',
        options: [
            { text: 'ごまんはちせんえん', isCorrect: false, reason: '陷阱{かんけい}！「八千{はっせん}」要促音化{そくおんか}。' },
            { text: 'ごまんはっせんえん', isCorrect: true, reason: '正確{せいかく}！「五万八千円{ごまんはっせんえん}」。' },
            { text: 'いつまんはっせんえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「ご」。' },
            { text: 'ごばんはっせんえん', isCorrect: false, reason: '「万{まん}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「五万八千円{ごまんはっせんえん}」中，「八千{はっせん}」促音化{そくおんか}。',
            trapExplanation: '即使{たとえ}在萬位數{まんいすう}後面{うしろ}，「八千{はっせん}」仍{なお}需要{じゅよう}促音化{そくおんか}。',
            relatedRules: ['八千{はっせん}の促音化{そくおんか}', '萬位數{まんいすう}金額{きんがく}']
        },
        sourceItem: { value: 58000, kanji: '五万八千円', reading: 'ごまんはっせんえん' }
    },
    {
        id: 'num_thousands_extra_6',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: false,
        stem: '何年前ですか？',
        stem_zh: '是多少年前？',
        dialogue: {
            speakerA: 'この遺跡は何年前のものですか？',
            speakerB: '約＿＿年前です。（約六千年前）'
        },
        options: [
            { text: 'ろくせんねんまえ', isCorrect: true, reason: '正確{せいかく}！「六千年前{ろくせんねんまえ}」。' },
            { text: 'ろっせんねんまえ', isCorrect: false, reason: '「六千{ろくせん}」不促音化{ふそくおんか}。' },
            { text: 'むせんねんまえ', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「ろく」。' },
            { text: 'ろくぜんねんまえ', isCorrect: false, reason: '「六千{ろくせん}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六千年{ろくせんねん}」無{ない}音變{おんへん}。',
            relatedRules: ['六千{ろくせん}の發音{はつおん}', '年數{ねんすう}の表達{ひょうたつ}']
        },
        sourceItem: { value: 6000, kanji: '六千年', reading: 'ろくせんねん' }
    },
    {
        id: 'num_thousands_extra_7',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: false,
        stem: '「七千五百」的正確讀音是？',
        stem_zh: '「七千五百」的正確讀音是？',
        options: [
            { text: 'ななせんごひゃく', isCorrect: true, reason: '正確{せいかく}！「七千五百{ななせんごひゃく}」無{ない}音變{おんへん}。' },
            { text: 'しちせんごひゃく', isCorrect: false, reason: '為{ため}避免{ひめん}混淆{こんこう}多用{おおくもちい}「なな」。' },
            { text: 'ななぜんごひゃく', isCorrect: false, reason: '「七千{ななせん}」不濁音化{ふだくおんか}。' },
            { text: 'ななせんごびゃく', isCorrect: false, reason: '「五百{ごひゃく}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七千五百{ななせんごひゃく}」無{ない}音變{おんへん}。',
            relatedRules: ['七千{ななせん}の發音{はつおん}', '組合{くみあわせ}數字{すうじ}']
        },
        sourceItem: { value: 7500, kanji: '七千五百', reading: 'ななせんごひゃく' }
    },
    {
        id: 'num_thousands_extra_8',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: false,
        stem: '彼の年収は＿＿円です。',
        stem_zh: '他的年收入是四百萬日圓。',
        options: [
            { text: 'よんひゃくまんえん', isCorrect: true, reason: '正確{せいかく}！「四百万円{よんひゃくまんえん}」。' },
            { text: 'しひゃくまんえん', isCorrect: false, reason: '為{ため}避諱{ひき}多用{おおくもちい}「よん」。' },
            { text: 'よんびゃくまんえん', isCorrect: false, reason: '「四百{よんひゃく}」不濁音化{ふだくおんか}。' },
            { text: 'よんひゃくばんえん', isCorrect: false, reason: '「万{まん}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四百万円{よんひゃくまんえん}」使用{しよう}「よん」避諱{ひき}，無{ない}音變{おんへん}。',
            relatedRules: ['四{よん}の避諱{ひき}', '百萬{ひゃくまん}の金額{きんがく}']
        },
        sourceItem: { value: 4000000, kanji: '四百万円', reading: 'よんひゃくまんえん' }
    },
    {
        id: 'num_thousands_extra_9',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: true,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このテレビはいくらですか？',
            speakerB: '＿＿です。（三萬三千日圓）'
        },
        options: [
            { text: 'さんまんさんせんえん', isCorrect: false, reason: '陷阱{かんけい}！「三千{さんぜん}」要濁音化{だくおんか}。' },
            { text: 'さんまんさんぜんえん', isCorrect: true, reason: '正確{せいかく}！「三万三千円{さんまんさんぜんえん}」。' },
            { text: 'さんばんさんぜんえん', isCorrect: false, reason: '「万{まん}」不濁音化{ふだくおんか}。' },
            { text: 'みまんみぜんえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「さん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三万三千円{さんまんさんぜんえん}」中，「万{まん}」不濁音化{ふだくおんか}，但「千{せん}」濁音化{だくおんか}。',
            trapExplanation: '注意{ちゅうい}「万{まん}」和「千{せん}」的音變{おんへん}規則{きそく}不同{ふどう}。',
            relatedRules: ['三万{さんまん}不濁音化{ふだくおんか}', '三千{さんぜん}の濁音化{だくおんか}']
        },
        sourceItem: { value: 33000, kanji: '三万三千円', reading: 'さんまんさんぜんえん' }
    },
    {
        id: 'num_thousands_extra_10',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: true,
        stem: '「四万八千」的正確讀音是？',
        stem_zh: '「四萬八千」的正確讀音是？',
        options: [
            { text: 'よんまんはちせん', isCorrect: false, reason: '陷阱{かんけい}！「八千{はっせん}」要促音化{そくおんか}。' },
            { text: 'よんまんはっせん', isCorrect: true, reason: '正確{せいかく}！「四万八千{よんまんはっせん}」。' },
            { text: 'しまんはっせん', isCorrect: false, reason: '為{ため}避諱{ひき}多用{おおくもちい}「よん」。' },
            { text: 'よんばんはっせん', isCorrect: false, reason: '「万{まん}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「四万八千{よんまんはっせん}」中，「八千{はっせん}」促音化{そくおんか}。',
            trapExplanation: '即使{たとえ}在萬位數{まんいすう}後面{うしろ}，「八千{はっせん}」仍{なお}需要{じゅよう}促音化{そくおんか}。',
            relatedRules: ['四{よん}の避諱{ひき}', '八千{はっせん}の促音化{そくおんか}']
        },
        sourceItem: { value: 48000, kanji: '四万八千', reading: 'よんまんはっせん' }
    },
    {
        id: 'num_thousands_extra_11',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: false,
        stem: 'この町の人口は＿＿人です。',
        stem_zh: '這個城鎮的人口是九千人。',
        options: [
            { text: 'きゅうせんにん', isCorrect: true, reason: '正確{せいかく}！「九千人{きゅうせんにん}」無{ない}音變{おんへん}。' },
            { text: 'くせんにん', isCorrect: false, reason: '為{ため}避諱{ひき}多用{おおくもちい}「きゅう」。' },
            { text: 'きゅうぜんにん', isCorrect: false, reason: '「九千{きゅうせん}」不濁音化{ふだくおんか}。' },
            { text: 'きゅっせんにん', isCorrect: false, reason: '「九{きゅう}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九千人{きゅうせんにん}」無{ない}音變{おんへん}。',
            relatedRules: ['九千{きゅうせん}の發音{はつおん}', '人口{じんこう}の表達{ひょうたつ}']
        },
        sourceItem: { value: 9000, kanji: '九千人', reading: 'きゅうせんにん' }
    },
    {
        id: 'num_thousands_extra_12',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: false,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'この自転車はいくらですか？',
            speakerB: '＿＿です。（兩萬五千日圓）'
        },
        options: [
            { text: 'にまんごせんえん', isCorrect: true, reason: '正確{せいかく}！「二万五千円{にまんごせんえん}」無{ない}音變{おんへん}。' },
            { text: 'ふたまんごせんえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「に」。' },
            { text: 'にまんいつせんえん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「ご」。' },
            { text: 'にまんごぜんえん', isCorrect: false, reason: '「五千{ごせん}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二万五千円{にまんごせんえん}」無{ない}音變{おんへん}。',
            relatedRules: ['萬位數{まんいすう}の組合{くみあわせ}', '金額{きんがく}表達{ひょうたつ}']
        },
        sourceItem: { value: 25000, kanji: '二万五千円', reading: 'にまんごせんえん' }
    },
    {
        id: 'num_thousands_extra_13',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: true,
        stem: '「六万三千」的正確讀音是？',
        stem_zh: '「六萬三千」的正確讀音是？',
        options: [
            { text: 'ろくまんさんせん', isCorrect: false, reason: '陷阱{かんけい}！「三千{さんぜん}」要濁音化{だくおんか}。' },
            { text: 'ろくまんさんぜん', isCorrect: true, reason: '正確{せいかく}！「六万三千{ろくまんさんぜん}」。' },
            { text: 'むまんさんぜん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「ろく」。' },
            { text: 'ろっまんさんぜん', isCorrect: false, reason: '「六万{ろくまん}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「六万三千{ろくまんさんぜん}」中，「三千{さんぜん}」濁音化{だくおんか}。',
            trapExplanation: '「三千{さんぜん}」在任何{にんい}位置{いち}都{とも}要濁音化{だくおんか}。',
            relatedRules: ['三千{さんぜん}の濁音化{だくおんか}', '萬位數{まんいすう}組合{くみあわせ}']
        },
        sourceItem: { value: 63000, kanji: '六万三千', reading: 'ろくまんさんぜん' }
    },
    {
        id: 'num_thousands_extra_14',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: false,
        stem: '富士山の高さは＿＿メートルです。',
        stem_zh: '富士山的高度是三千七百七十六公尺。',
        options: [
            { text: 'さんぜんななひゃくななじゅうろくメートル', isCorrect: true, reason: '正確{せいかく}！「三千{さんぜん}」濁音化{だくおんか}，其他{そのた}無{ない}音變{おんへん}。' },
            { text: 'さんせんななひゃくななじゅうろくメートル', isCorrect: false, reason: '「三千{さんぜん}」要濁音化{だくおんか}。' },
            { text: 'さんぜんしちひゃくしちじゅうろくメートル', isCorrect: false, reason: '「七{しち}」在這裡{ここ}用「なな」更常見{じょうけん}。' },
            { text: 'みぜんななひゃくななじゅうろくメートル', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「さん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '富士山{ふじさん}的高度{たかさ}是3776メートル，「三千{さんぜん}」濁音化{だくおんか}。',
            relatedRules: ['三千{さんぜん}の濁音化{だくおんか}', '高度{こうど}の表達{ひょうたつ}']
        },
        sourceItem: { value: 3776, kanji: '三千七百七十六メートル', reading: 'さんぜんななひゃくななじゅうろくメートル' }
    },
    {
        id: 'num_thousands_extra_15',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: true,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'この靴はいくらですか？',
            speakerB: '＿＿です。（八千八百日圓）'
        },
        options: [
            { text: 'はちせんはちひゃくえん', isCorrect: false, reason: '陷阱{かんけい}！「八千{はっせん}」和「八百{はっぴゃく}」都要音變{おんへん}！' },
            { text: 'はっせんはっぴゃくえん', isCorrect: true, reason: '正確{せいかく}！「八千八百円{はっせんはっぴゃくえん}」。' },
            { text: 'はっせんはちひゃくえん', isCorrect: false, reason: '「八百{はっぴゃく}」也要促音化{そくおんか}和半濁音化{はんだくおんか}。' },
            { text: 'はちせんはっぴゃくえん', isCorrect: false, reason: '「八千{はっせん}」也要促音化{そくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八千八百円{はっせんはっぴゃくえん}」是雙重{にじゅう}促音化{そくおんか}的例子{れいじ}。',
            trapExplanation: '8888是學習{がくしゅう}音變{おんへん}規則{きそく}の重要{じゅうよう}數字{すうじ}。',
            relatedRules: ['八千{はっせん}の促音化{そくおんか}', '八百{はっぴゃく}の音變{おんへん}']
        },
        sourceItem: { value: 8800, kanji: '八千八百円', reading: 'はっせんはっぴゃくえん' }
    },
    {
        id: 'num_thousands_extra_16',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: false,
        stem: '「一万一千」的正確讀音是？',
        stem_zh: '「一萬一千」的正確讀音是？',
        options: [
            { text: 'いちまんいっせん', isCorrect: true, reason: '正確{せいかく}！「一万一千{いちまんいっせん}」，「千{せん}」前{まえ}的「一{いち}」促音化{そくおんか}。' },
            { text: 'いちまんせん', isCorrect: false, reason: '這裡{ここ}「一千{いっせん}」不省略{しょうりゃく}「いち」，而是促音化{そくおんか}。' },
            { text: 'まんいっせん', isCorrect: false, reason: '「一万{いちまん}」的「いち」不可{ふか}省略{しょうりゃく}。' },
            { text: 'いちまんいちせん', isCorrect: false, reason: '「一千{いっせん}」通常{つうじょう}促音化{そくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一万一千{いちまんいっせん}」中，「一万{いちまん}」不省略{しょうりゃく}「いち」，「一千{いっせん}」促音化{そくおんか}。',
            relatedRules: ['一万{いちまん}の特殊{とくしゅ}規則{きそく}', '一千{いっせん}の促音化{そくおんか}']
        },
        sourceItem: { value: 11000, kanji: '一万一千', reading: 'いちまんいっせん' }
    },
    {
        id: 'num_thousands_extra_17',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: false,
        stem: 'このビルは＿＿平方メートルです。',
        stem_zh: '這棟大樓是四千平方公尺。',
        options: [
            { text: 'よんせんへいほうメートル', isCorrect: true, reason: '正確{せいかく}！「四千{よんせん}」使用{しよう}「よん」避諱{ひき}，無{ない}音變{おんへん}。' },
            { text: 'しせんへいほうメートル', isCorrect: false, reason: '為{ため}避諱{ひき}多用{おおくもちい}「よん」。' },
            { text: 'よんぜんへいほうメートル', isCorrect: false, reason: '「四千{よんせん}」不濁音化{ふだくおんか}。' },
            { text: 'よっせんへいほうメートル', isCorrect: false, reason: '「四{よん}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四千{よんせん}」使用{しよう}「よん」避諱{ひき}，無{ない}音變{おんへん}。',
            relatedRules: ['四{よん}の避諱{ひき}', '面積{めんせき}の表達{ひょうたつ}']
        },
        sourceItem: { value: 4000, kanji: '四千平方メートル', reading: 'よんせんへいほうメートル' }
    },
    {
        id: 'num_thousands_extra_18',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: false,
        stem: '何人いますか？',
        stem_zh: '有多少人？',
        dialogue: {
            speakerA: 'この会社には何人いますか？',
            speakerB: '約＿＿人います。（約七千人）'
        },
        options: [
            { text: 'ななせんにん', isCorrect: true, reason: '正確{せいかく}！「七千人{ななせんにん}」無{ない}音變{おんへん}。' },
            { text: 'しちせんにん', isCorrect: false, reason: '為{ため}避免{ひめん}混淆{こんこう}多用{おおくもちい}「なな」。' },
            { text: 'ななぜんにん', isCorrect: false, reason: '「七千{ななせん}」不濁音化{ふだくおんか}。' },
            { text: 'なっせんにん', isCorrect: false, reason: '「七{なな}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七千人{ななせんにん}」無{ない}音變{おんへん}。',
            relatedRules: ['七千{ななせん}の發音{はつおん}', '人數{にんずう}の表達{ひょうたつ}']
        },
        sourceItem: { value: 7000, kanji: '七千人', reading: 'ななせんにん' }
    },
    {
        id: 'num_thousands_extra_19',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'pronunciation',
        isTrap: true,
        stem: '「八万三千」的正確讀音是？',
        stem_zh: '「八萬三千」的正確讀音是？',
        options: [
            { text: 'はちまんさんせん', isCorrect: false, reason: '陷阱{かんけい}！「三千{さんぜん}」要濁音化{だくおんか}。' },
            { text: 'はちまんさんぜん', isCorrect: true, reason: '正確{せいかく}！「八万三千{はちまんさんぜん}」。注意{ちゅうい}：「八万{はちまん}」不促音化{ふそくおんか}！' },
            { text: 'はっまんさんぜん', isCorrect: false, reason: '「八万{はちまん}」不促音化{ふそくおんか}。' },
            { text: 'やまんさんぜん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「はち」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八万三千{はちまんさんぜん}」中，「八万{はちまん}」不促音化{ふそくおんか}，「三千{さんぜん}」濁音化{だくおんか}。',
            trapExplanation: '注意{ちゅうい}「八{はち}」在「万{まん}」前{まえ}不促音化{ふそくおんか}！',
            relatedRules: ['八万{はちまん}不促音化{ふそくおんか}', '三千{さんぜん}の濁音化{だくおんか}']
        },
        sourceItem: { value: 83000, kanji: '八万三千', reading: 'はちまんさんぜん' }
    },
    {
        id: 'num_thousands_extra_20',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'sentence',
        isTrap: false,
        stem: 'この街の面積は＿＿平方キロメートルです。',
        stem_zh: '這個城市的面積是五千平方公里。',
        options: [
            { text: 'ごせんへいほうキロメートル', isCorrect: true, reason: '正確{せいかく}！「五千{ごせん}」無{ない}音變{おんへん}。' },
            { text: 'いつせんへいほうキロメートル', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「ご」。' },
            { text: 'ごぜんへいほうキロメートル', isCorrect: false, reason: '「五千{ごせん}」不濁音化{ふだくおんか}。' },
            { text: 'ごっせんへいほうキロメートル', isCorrect: false, reason: '「五{ご}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五千{ごせん}」無{ない}音變{おんへん}。',
            relatedRules: ['五千{ごせん}の發音{はつおん}', '面積{めんせき}の表達{ひょうたつ}']
        },
        sourceItem: { value: 5000, kanji: '五千平方キロメートル', reading: 'ごせんへいほうキロメートル' }
    },
    {
        id: 'num_thousands_extra_21',
        category: 'numbers',
        subcategory: 'thousands',
        type: 'dialogue',
        isTrap: true,
        stem: 'いくらですか？',
        stem_zh: '多少錢？',
        dialogue: {
            speakerA: 'このスーツケースはいくらですか？',
            speakerB: '＿＿です。（九萬八千日圓）'
        },
        options: [
            { text: 'きゅうまんはちせんえん', isCorrect: false, reason: '陷阱{かんけい}！「八千{はっせん}」要促音化{そくおんか}。' },
            { text: 'きゅうまんはっせんえん', isCorrect: true, reason: '正確{せいかく}！「九万八千円{きゅうまんはっせんえん}」。' },
            { text: 'くまんはっせんえん', isCorrect: false, reason: '為{ため}避諱{ひき}多用{おおくもちい}「きゅう」。' },
            { text: 'きゅうばんはっせんえん', isCorrect: false, reason: '「万{まん}」不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「九万八千円{きゅうまんはっせんえん}」中，「八千{はっせん}」促音化{そくおんか}。',
            trapExplanation: '即使{たとえ}在萬位數{まんいすう}後面{うしろ}，「八千{はっせん}」仍{なお}需要{じゅよう}促音化{そくおんか}。',
            relatedRules: ['九{きゅう}の避諱{ひき}', '八千{はっせん}の促音化{そくおんか}']
        },
        sourceItem: { value: 98000, kanji: '九万八千円', reading: 'きゅうまんはっせんえん' }
    },
    {
        id: 'num_thousands_extra_22', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「千二百」的正確讀音是？', stem_zh: '「一千二百」的正確讀音是？',
        options: [
            { text: 'せんにひゃく', isCorrect: true, reason: '正確！「千二百」省略「一」。' },
            { text: 'いちせんにひゃく', isCorrect: false, reason: '「千」通常省略「一」。' },
            { text: 'せんにびゃく', isCorrect: false, reason: '「二百」不濁音化。' },
            { text: 'ちにひゃく', isCorrect: false, reason: '使用音讀「せん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「千二百」省略「一」，無音變。', relatedRules: ['千の省略', '千位數組合'] },
        sourceItem: { value: 1200, kanji: '千二百', reading: 'せんにひゃく' }
    },
    {
        id: 'num_thousands_extra_23', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: false,
        stem: '這批貨物價值＿＿日圓。（二千三百）', stem_zh: '這批貨物價值二千三百日圓。',
        options: [
            { text: 'にせんさんびゃくえん', isCorrect: true, reason: '正確！「二千三百円」。' },
            { text: 'にせんさんひゃくえん', isCorrect: false, reason: '「三百」濁音化。' },
            { text: 'にぜんさんびゃくえん', isCorrect: false, reason: '「二千」不濁音化。' },
            { text: 'ふたせんみひゃくえん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二千三百円」，「三百」濁音化。', relatedRules: ['二千の讀法', '三百の濁音化'] },
        sourceItem: { value: 2300, kanji: '二千三百円', reading: 'にせんさんびゃくえん' }
    },
    {
        id: 'num_thousands_extra_24', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: true,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'このジャケットはいくらですか？', speakerB: '＿＿です。（三千四百日圓）' },
        options: [
            { text: 'さんせんよんひゃくえん', isCorrect: false, reason: '陷阱！「三千」濁音化。' },
            { text: 'さんぜんよんひゃくえん', isCorrect: true, reason: '正確！「三千四百円」。' },
            { text: 'さんぜんしひゃくえん', isCorrect: false, reason: '「四」讀「よん」。' },
            { text: 'みぜんよひゃくえん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三千」濁音化為「さんぜん」。', trapExplanation: '「三千」的濁音化容易被忽略。', relatedRules: ['三千の濁音化'] },
        sourceItem: { value: 3400, kanji: '三千四百円', reading: 'さんぜんよんひゃくえん' }
    },
    {
        id: 'num_thousands_extra_25', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「四千五百」的正確讀音是？', stem_zh: '「四千五百」的正確讀音是？',
        options: [
            { text: 'よんせんごひゃく', isCorrect: true, reason: '正確！「四千五百」無音變。' },
            { text: 'しせんごひゃく', isCorrect: false, reason: '「四」讀「よん」。' },
            { text: 'よんぜんごひゃく', isCorrect: false, reason: '「四千」不濁音化。' },
            { text: 'よんせんごびゃく', isCorrect: false, reason: '「五百」不濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四千五百」無音變。', relatedRules: ['四千の讀法', '組合數字'] },
        sourceItem: { value: 4500, kanji: '四千五百', reading: 'よんせんごひゃく' }
    },
    {
        id: 'num_thousands_extra_26', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: true,
        stem: '距離目的地還有＿＿公尺。（八千六百）', stem_zh: '距離目的地還有八千六百公尺。',
        options: [
            { text: 'はちせんろくひゃく', isCorrect: false, reason: '陷阱！「八千」促音化。' },
            { text: 'はっせんろっぴゃく', isCorrect: true, reason: '正確！「八千六百」。' },
            { text: 'はっせんろくひゃく', isCorrect: false, reason: '「六百」也要促音+半濁音化。' },
            { text: 'やせんむひゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八千六百」，「八千」促音化，「六百」促音+半濁音化。', trapExplanation: '注意兩處音變。', relatedRules: ['八千の促音化', '六百の音變'] },
        sourceItem: { value: 8600, kanji: '八千六百', reading: 'はっせんろっぴゃく' }
    },
    {
        id: 'num_thousands_extra_27', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '在庫は何個ありますか？', speakerB: '＿＿個あります。（五千七百）' },
        options: [
            { text: 'ごせんななひゃく', isCorrect: true, reason: '正確！「五千七百」無音變。' },
            { text: 'ごぜんしちひゃく', isCorrect: false, reason: '「五千」不濁音化，「七」讀「なな」。' },
            { text: 'いつせんなのひゃく', isCorrect: false, reason: '使用音讀。' },
            { text: 'ごせんななびゃく', isCorrect: false, reason: '「七百」不濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五千七百」無音變。', relatedRules: ['五千の讀法', '七百の讀法'] },
        sourceItem: { value: 5700, kanji: '五千七百', reading: 'ごせんななひゃく' }
    },
    {
        id: 'num_thousands_extra_28', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「六千八百」的正確讀音是？', stem_zh: '「六千八百」的正確讀音是？',
        options: [
            { text: 'ろくせんはっぴゃく', isCorrect: true, reason: '正確！「六千八百」，「八百」促音+半濁音化。' },
            { text: 'ろっせんはちひゃく', isCorrect: false, reason: '「六千」不促音化。' },
            { text: 'ろくぜんはっぴゃく', isCorrect: false, reason: '「六千」不濁音化。' },
            { text: 'むせんやひゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六千」無音變，但「八百」促音+半濁音化。', relatedRules: ['六千の讀法', '八百の音變'] },
        sourceItem: { value: 6800, kanji: '六千八百', reading: 'ろくせんはっぴゃく' }
    },
    {
        id: 'num_thousands_extra_29', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: false,
        stem: '今年銷售了＿＿台電腦。（七千九百）', stem_zh: '今年銷售了七千九百台電腦。',
        options: [
            { text: 'ななせんきゅうひゃく', isCorrect: true, reason: '正確！「七千九百」無音變。' },
            { text: 'しちせんくひゃく', isCorrect: false, reason: '「七」讀「なな」，「九」讀「きゅう」。' },
            { text: 'ななぜんきゅうひゃく', isCorrect: false, reason: '「七千」不濁音化。' },
            { text: 'なのせんここのひゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七千九百」無音變。', relatedRules: ['七千の讀法', '九百の讀法'] },
        sourceItem: { value: 7900, kanji: '七千九百', reading: 'ななせんきゅうひゃく' }
    },
    {
        id: 'num_thousands_extra_30', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: true,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'この時計はいくらですか？', speakerB: '＿＿です。（八千百日圓）' },
        options: [
            { text: 'はちせんひゃくえん', isCorrect: false, reason: '陷阱！「八千」促音化，「一百」省略「一」。' },
            { text: 'はっせんひゃくえん', isCorrect: true, reason: '正確！「八千百円」。' },
            { text: 'はっせんいっぴゃくえん', isCorrect: false, reason: '「百」通常省略「一」。' },
            { text: 'やせんももえん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八千」促音化，「百」省略「一」。', trapExplanation: '「八千」促音化容易忘記。', relatedRules: ['八千の促音化', '百の省略'] },
        sourceItem: { value: 8100, kanji: '八千百円', reading: 'はっせんひゃくえん' }
    },
    {
        id: 'num_thousands_extra_31', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「九千二百」的正確讀音是？', stem_zh: '「九千二百」的正確讀音是？',
        options: [
            { text: 'きゅうせんにひゃく', isCorrect: true, reason: '正確！「九千二百」無音變。' },
            { text: 'くせんにひゃく', isCorrect: false, reason: '「九」讀「きゅう」。' },
            { text: 'きゅうぜんにひゃく', isCorrect: false, reason: '「九千」不濁音化。' },
            { text: 'きゅうせんにびゃく', isCorrect: false, reason: '「二百」不濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九千二百」無音變。', relatedRules: ['九千の讀法', '組合數字'] },
        sourceItem: { value: 9200, kanji: '九千二百', reading: 'きゅうせんにひゃく' }
    },
    {
        id: 'num_thousands_extra_32', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: true,
        stem: '這場活動有＿＿人參加。（三千三百）', stem_zh: '這場活動有三千三百人參加。',
        options: [
            { text: 'さんせんさんびゃく', isCorrect: false, reason: '陷阱！「三千」濁音化。' },
            { text: 'さんぜんさんびゃく', isCorrect: true, reason: '正確！「三千三百」，兩處都有音變。' },
            { text: 'さんぜんさんひゃく', isCorrect: false, reason: '「三百」也要濁音化。' },
            { text: 'みぜんみびゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三千」和「三百」都濁音化。', trapExplanation: '注意兩處「三」後都有濁音化。', relatedRules: ['三千の濁音化', '三百の濁音化'] },
        sourceItem: { value: 3300, kanji: '三千三百', reading: 'さんぜんさんびゃく' }
    },
    {
        id: 'num_thousands_extra_33', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '本は何冊ありますか？', speakerB: '＿＿冊あります。（千四百）' },
        options: [
            { text: 'せんよんひゃく', isCorrect: true, reason: '正確！「千四百」省略「一」。' },
            { text: 'いちせんしひゃく', isCorrect: false, reason: '「千」省略「一」，「四」讀「よん」。' },
            { text: 'せんよんびゃく', isCorrect: false, reason: '「四百」不濁音化。' },
            { text: 'ちよひゃく', isCorrect: false, reason: '使用音讀「せん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「千四百」省略「一」。', relatedRules: ['千の省略', '四の避諱'] },
        sourceItem: { value: 1400, kanji: '千四百', reading: 'せんよんひゃく' }
    },
    {
        id: 'num_thousands_extra_34', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「二千六百」的正確讀音是？', stem_zh: '「二千六百」的正確讀音是？',
        options: [
            { text: 'にせんろっぴゃく', isCorrect: true, reason: '正確！「二千六百」，「六百」促音+半濁音化。' },
            { text: 'にせんろくひゃく', isCorrect: false, reason: '「六百」促音+半濁音化。' },
            { text: 'にぜんろっぴゃく', isCorrect: false, reason: '「二千」不濁音化。' },
            { text: 'ふたせんむひゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二千」無音變，「六百」促音+半濁音化。', relatedRules: ['二千の讀法', '六百の音變'] },
        sourceItem: { value: 2600, kanji: '二千六百', reading: 'にせんろっぴゃく' }
    },
    {
        id: 'num_thousands_extra_35', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: true,
        stem: '公司年營業額是＿＿萬日圓。（三千八百）', stem_zh: '公司年營業額是三千八百萬日圓。',
        options: [
            { text: 'さんせんはちひゃく', isCorrect: false, reason: '陷阱！「三千」濁音化，「八百」促音+半濁音化。' },
            { text: 'さんぜんはっぴゃく', isCorrect: true, reason: '正確！「三千八百」。' },
            { text: 'さんぜんはちひゃく', isCorrect: false, reason: '「八百」也要促音+半濁音化。' },
            { text: 'みぜんやひゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三千」濁音化，「八百」促音+半濁音化。', trapExplanation: '注意兩處音變。', relatedRules: ['三千の濁音化', '八百の音變'] },
        sourceItem: { value: 3800, kanji: '三千八百', reading: 'さんぜんはっぴゃく' }
    },
    {
        id: 'num_thousands_extra_36', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'このカメラはいくらですか？', speakerB: '＿＿です。（四千六百日圓）' },
        options: [
            { text: 'よんせんろっぴゃくえん', isCorrect: true, reason: '正確！「四千六百円」。' },
            { text: 'しせんろくひゃくえん', isCorrect: false, reason: '「四」讀「よん」，「六百」促音+半濁音化。' },
            { text: 'よんぜんろっぴゃくえん', isCorrect: false, reason: '「四千」不濁音化。' },
            { text: 'よせんむひゃくえん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四千六百円」，「六百」促音+半濁音化。', relatedRules: ['四千の讀法', '六百の音變'] },
        sourceItem: { value: 4600, kanji: '四千六百円', reading: 'よんせんろっぴゃくえん' }
    },
    {
        id: 'num_thousands_extra_37', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「五千八百」的正確讀音是？', stem_zh: '「五千八百」的正確讀音是？',
        options: [
            { text: 'ごせんはっぴゃく', isCorrect: true, reason: '正確！「五千八百」，「八百」促音+半濁音化。' },
            { text: 'ごせんはちひゃく', isCorrect: false, reason: '「八百」促音+半濁音化。' },
            { text: 'ごぜんはっぴゃく', isCorrect: false, reason: '「五千」不濁音化。' },
            { text: 'いつせんやひゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五千」無音變，「八百」促音+半濁音化。', relatedRules: ['五千の讀法', '八百の音變'] },
        sourceItem: { value: 5800, kanji: '五千八百', reading: 'ごせんはっぴゃく' }
    },
    {
        id: 'num_thousands_extra_38', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: false,
        stem: '這個城市有＿＿家餐廳。（六千九百）', stem_zh: '這個城市有六千九百家餐廳。',
        options: [
            { text: 'ろくせんきゅうひゃく', isCorrect: true, reason: '正確！「六千九百」無音變。' },
            { text: 'ろっせんくひゃく', isCorrect: false, reason: '「六千」不促音化，「九」讀「きゅう」。' },
            { text: 'ろくぜんきゅうひゃく', isCorrect: false, reason: '「六千」不濁音化。' },
            { text: 'むせんここのひゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六千九百」無音變。', relatedRules: ['六千の讀法', '九百の讀法'] },
        sourceItem: { value: 6900, kanji: '六千九百', reading: 'ろくせんきゅうひゃく' }
    },
    {
        id: 'num_thousands_extra_39', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '図書館に本は何冊ありますか？', speakerB: '＿＿冊あります。（七千二百）' },
        options: [
            { text: 'ななせんにひゃく', isCorrect: true, reason: '正確！「七千二百」無音變。' },
            { text: 'しちせんにひゃく', isCorrect: false, reason: '「七」讀「なな」。' },
            { text: 'ななぜんにひゃく', isCorrect: false, reason: '「七千」不濁音化。' },
            { text: 'なのせんふたひゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七千二百」無音變。', relatedRules: ['七千の讀法', '二百の讀法'] },
        sourceItem: { value: 7200, kanji: '七千二百', reading: 'ななせんにひゃく' }
    },
    {
        id: 'num_thousands_extra_40', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: true,
        stem: '「八千三百」的正確讀音是？', stem_zh: '「八千三百」的正確讀音是？',
        options: [
            { text: 'はちせんさんひゃく', isCorrect: false, reason: '陷阱！「八千」促音化，「三百」濁音化。' },
            { text: 'はっせんさんびゃく', isCorrect: true, reason: '正確！「八千三百」。' },
            { text: 'はっせんさんひゃく', isCorrect: false, reason: '「三百」也要濁音化。' },
            { text: 'やせんみびゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八千」促音化，「三百」濁音化。', trapExplanation: '注意兩處音變。', relatedRules: ['八千の促音化', '三百の濁音化'] },
        sourceItem: { value: 8300, kanji: '八千三百', reading: 'はっせんさんびゃく' }
    },
    {
        id: 'num_thousands_extra_41', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: false,
        stem: '會員人數達到＿＿人。（九千四百）', stem_zh: '會員人數達到九千四百人。',
        options: [
            { text: 'きゅうせんよんひゃく', isCorrect: true, reason: '正確！「九千四百」無音變。' },
            { text: 'くせんしひゃく', isCorrect: false, reason: '「九」讀「きゅう」，「四」讀「よん」。' },
            { text: 'きゅうぜんよんひゃく', isCorrect: false, reason: '「九千」不濁音化。' },
            { text: 'ここのせんよひゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九千四百」無音變。', relatedRules: ['九千の讀法', '四百の讀法'] },
        sourceItem: { value: 9400, kanji: '九千四百', reading: 'きゅうせんよんひゃく' }
    },
    {
        id: 'num_thousands_extra_42', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: true,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'このコートはいくらですか？', speakerB: '＿＿です。（一萬一百日圓）' },
        options: [
            { text: 'まんひゃくえん', isCorrect: false, reason: '陷阱！「一萬」不可省略「一」。' },
            { text: 'いちまんひゃくえん', isCorrect: true, reason: '正確！「一万百円」。' },
            { text: 'いちまんいちひゃくえん', isCorrect: false, reason: '「百」可省略「一」。' },
            { text: 'いちばんひゃくえん', isCorrect: false, reason: '「万」不濁音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「一万」不可省略「一」，但「百」可省略。', trapExplanation: '「万」前的「一」不可省略。', relatedRules: ['一万の特殊規則', '百の省略'] },
        sourceItem: { value: 10100, kanji: '一万百円', reading: 'いちまんひゃくえん' }
    },
    {
        id: 'num_thousands_extra_43', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「千六百」的正確讀音是？', stem_zh: '「一千六百」的正確讀音是？',
        options: [
            { text: 'せんろっぴゃく', isCorrect: true, reason: '正確！「千六百」，「六百」促音+半濁音化。' },
            { text: 'いちせんろくひゃく', isCorrect: false, reason: '「千」省略「一」，「六百」促音+半濁音化。' },
            { text: 'せんろくひゃく', isCorrect: false, reason: '「六百」促音+半濁音化。' },
            { text: 'ちむひゃく', isCorrect: false, reason: '使用音讀「せん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「千六百」省略「一」，「六百」促音+半濁音化。', relatedRules: ['千の省略', '六百の音變'] },
        sourceItem: { value: 1600, kanji: '千六百', reading: 'せんろっぴゃく' }
    },
    {
        id: 'num_thousands_extra_44', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: false,
        stem: '這本雜誌每期發行＿＿本。（二千七百）', stem_zh: '這本雜誌每期發行二千七百本。',
        options: [
            { text: 'にせんななひゃく', isCorrect: true, reason: '正確！「二千七百」無音變。' },
            { text: 'にぜんしちひゃく', isCorrect: false, reason: '「二千」不濁音化，「七」讀「なな」。' },
            { text: 'ふたせんなのひゃく', isCorrect: false, reason: '使用音讀。' },
            { text: 'にせんななびゃく', isCorrect: false, reason: '「七百」不濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二千七百」無音變。', relatedRules: ['二千の讀法', '七百の讀法'] },
        sourceItem: { value: 2700, kanji: '二千七百', reading: 'にせんななひゃく' }
    },
    {
        id: 'num_thousands_extra_45', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: true,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: 'この映画の観客は何人でしたか？', speakerB: '＿＿人でした。（三千一百）' },
        options: [
            { text: 'さんせんひゃく', isCorrect: false, reason: '陷阱！「三千」濁音化。' },
            { text: 'さんぜんひゃく', isCorrect: true, reason: '正確！「三千一百」。' },
            { text: 'さんぜんいっぴゃく', isCorrect: false, reason: '「百」通常省略「一」。' },
            { text: 'みぜんもも', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三千」濁音化，「百」省略「一」。', trapExplanation: '「三千」的濁音化。', relatedRules: ['三千の濁音化', '百の省略'] },
        sourceItem: { value: 3100, kanji: '三千百', reading: 'さんぜんひゃく' }
    },
    {
        id: 'num_thousands_extra_46', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「四千八百」的正確讀音是？', stem_zh: '「四千八百」的正確讀音是？',
        options: [
            { text: 'よんせんはっぴゃく', isCorrect: true, reason: '正確！「四千八百」，「八百」促音+半濁音化。' },
            { text: 'しせんはちひゃく', isCorrect: false, reason: '「四」讀「よん」，「八百」促音+半濁音化。' },
            { text: 'よんぜんはっぴゃく', isCorrect: false, reason: '「四千」不濁音化。' },
            { text: 'よせんやひゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四千」無音變，「八百」促音+半濁音化。', relatedRules: ['四千の讀法', '八百の音變'] },
        sourceItem: { value: 4800, kanji: '四千八百', reading: 'よんせんはっぴゃく' }
    },
    {
        id: 'num_thousands_extra_47', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: false,
        stem: '商場每日客流量是＿＿人。（五千九百）', stem_zh: '商場每日客流量是五千九百人。',
        options: [
            { text: 'ごせんきゅうひゃく', isCorrect: true, reason: '正確！「五千九百」無音變。' },
            { text: 'いつせんくひゃく', isCorrect: false, reason: '使用音讀「ご」，「九」讀「きゅう」。' },
            { text: 'ごぜんきゅうひゃく', isCorrect: false, reason: '「五千」不濁音化。' },
            { text: 'ごせんここのひゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五千九百」無音變。', relatedRules: ['五千の讀法', '九百の讀法'] },
        sourceItem: { value: 5900, kanji: '五千九百', reading: 'ごせんきゅうひゃく' }
    },
    {
        id: 'num_thousands_extra_48', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'この椅子はいくらですか？', speakerB: '＿＿です。（六千二百日圓）' },
        options: [
            { text: 'ろくせんにひゃくえん', isCorrect: true, reason: '正確！「六千二百円」無音變。' },
            { text: 'ろっせんにひゃくえん', isCorrect: false, reason: '「六千」不促音化。' },
            { text: 'ろくぜんにひゃくえん', isCorrect: false, reason: '「六千」不濁音化。' },
            { text: 'むせんふたひゃくえん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六千二百円」無音變。', relatedRules: ['六千の讀法', '二百の讀法'] },
        sourceItem: { value: 6200, kanji: '六千二百円', reading: 'ろくせんにひゃくえん' }
    },
    {
        id: 'num_thousands_extra_49', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「七千三百」的正確讀音是？', stem_zh: '「七千三百」的正確讀音是？',
        options: [
            { text: 'ななせんさんびゃく', isCorrect: true, reason: '正確！「七千三百」，「三百」濁音化。' },
            { text: 'しちせんさんひゃく', isCorrect: false, reason: '「七」讀「なな」，「三百」濁音化。' },
            { text: 'ななぜんさんびゃく', isCorrect: false, reason: '「七千」不濁音化。' },
            { text: 'なのせんみびゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七千」無音變，「三百」濁音化。', relatedRules: ['七千の讀法', '三百の濁音化'] },
        sourceItem: { value: 7300, kanji: '七千三百', reading: 'ななせんさんびゃく' }
    },
    {
        id: 'num_thousands_extra_50', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: true,
        stem: '這批訂單金額是＿＿日圓。（八千八百）', stem_zh: '這批訂單金額是八千八百日圓。',
        options: [
            { text: 'はちせんはちひゃく', isCorrect: false, reason: '陷阱！「八千」促音化，「八百」促音+半濁音化。' },
            { text: 'はっせんはっぴゃく', isCorrect: true, reason: '正確！「八千八百」，兩處都有音變。' },
            { text: 'はっせんはちひゃく', isCorrect: false, reason: '「八百」也要促音+半濁音化。' },
            { text: 'やせんやひゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八千」促音化，「八百」促音+半濁音化。', trapExplanation: '注意兩處「八」後的音變。', relatedRules: ['八千の促音化', '八百の音變'] },
        sourceItem: { value: 8800, kanji: '八千八百', reading: 'はっせんはっぴゃく' }
    },
    {
        id: 'num_thousands_extra_51', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '学生は何人いますか？', speakerB: '＿＿人います。（九千六百）' },
        options: [
            { text: 'きゅうせんろっぴゃく', isCorrect: true, reason: '正確！「九千六百」，「六百」促音+半濁音化。' },
            { text: 'くせんろくひゃく', isCorrect: false, reason: '「九」讀「きゅう」，「六百」促音+半濁音化。' },
            { text: 'きゅうぜんろっぴゃく', isCorrect: false, reason: '「九千」不濁音化。' },
            { text: 'ここのせんむひゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九千」無音變，「六百」促音+半濁音化。', relatedRules: ['九千の讀法', '六百の音變'] },
        sourceItem: { value: 9600, kanji: '九千六百', reading: 'きゅうせんろっぴゃく' }
    },
    {
        id: 'num_thousands_extra_52', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「千八百」的正確讀音是？', stem_zh: '「一千八百」的正確讀音是？',
        options: [
            { text: 'せんはっぴゃく', isCorrect: true, reason: '正確！「千八百」，「八百」促音+半濁音化。' },
            { text: 'いちせんはちひゃく', isCorrect: false, reason: '「千」省略「一」，「八百」促音+半濁音化。' },
            { text: 'せんはちひゃく', isCorrect: false, reason: '「八百」促音+半濁音化。' },
            { text: 'ちやひゃく', isCorrect: false, reason: '使用音讀「せん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「千八百」省略「一」，「八百」促音+半濁音化。', relatedRules: ['千の省略', '八百の音變'] },
        sourceItem: { value: 1800, kanji: '千八百', reading: 'せんはっぴゃく' }
    },
    {
        id: 'num_thousands_extra_53', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: false,
        stem: '這家公司有＿＿名員工。（二千四百）', stem_zh: '這家公司有二千四百名員工。',
        options: [
            { text: 'にせんよんひゃく', isCorrect: true, reason: '正確！「二千四百」無音變。' },
            { text: 'にぜんしひゃく', isCorrect: false, reason: '「二千」不濁音化，「四」讀「よん」。' },
            { text: 'ふたせんよひゃく', isCorrect: false, reason: '使用音讀。' },
            { text: 'にせんよんびゃく', isCorrect: false, reason: '「四百」不濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二千四百」無音變。', relatedRules: ['二千の讀法', '四百の讀法'] },
        sourceItem: { value: 2400, kanji: '二千四百', reading: 'にせんよんひゃく' }
    },
    {
        id: 'num_thousands_extra_54', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: true,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'この花瓶はいくらですか？', speakerB: '＿＿です。（三千六百日圓）' },
        options: [
            { text: 'さんせんろくひゃくえん', isCorrect: false, reason: '陷阱！「三千」濁音化，「六百」促音+半濁音化。' },
            { text: 'さんぜんろっぴゃくえん', isCorrect: true, reason: '正確！「三千六百円」。' },
            { text: 'さんぜんろくひゃくえん', isCorrect: false, reason: '「六百」也要促音+半濁音化。' },
            { text: 'みぜんむひゃくえん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三千」濁音化，「六百」促音+半濁音化。', trapExplanation: '注意兩處音變。', relatedRules: ['三千の濁音化', '六百の音變'] },
        sourceItem: { value: 3600, kanji: '三千六百円', reading: 'さんぜんろっぴゃくえん' }
    },
    {
        id: 'num_thousands_extra_55', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「四千七百」的正確讀音是？', stem_zh: '「四千七百」的正確讀音是？',
        options: [
            { text: 'よんせんななひゃく', isCorrect: true, reason: '正確！「四千七百」無音變。' },
            { text: 'しせんしちひゃく', isCorrect: false, reason: '「四」讀「よん」，「七」讀「なな」。' },
            { text: 'よんぜんななひゃく', isCorrect: false, reason: '「四千」不濁音化。' },
            { text: 'よせんなのひゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四千七百」無音變。', relatedRules: ['四千の讀法', '七百の讀法'] },
        sourceItem: { value: 4700, kanji: '四千七百', reading: 'よんせんななひゃく' }
    },
    {
        id: 'num_thousands_extra_56', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: false,
        stem: '網站每天有＿＿次訪問。（五千二百）', stem_zh: '網站每天有五千二百次訪問。',
        options: [
            { text: 'ごせんにひゃく', isCorrect: true, reason: '正確！「五千二百」無音變。' },
            { text: 'いつせんふたひゃく', isCorrect: false, reason: '使用音讀「ご」和「に」。' },
            { text: 'ごぜんにひゃく', isCorrect: false, reason: '「五千」不濁音化。' },
            { text: 'ごせんにびゃく', isCorrect: false, reason: '「二百」不濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五千二百」無音變。', relatedRules: ['五千の讀法', '二百の讀法'] },
        sourceItem: { value: 5200, kanji: '五千二百', reading: 'ごせんにひゃく' }
    },
    {
        id: 'num_thousands_extra_57', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '何枚印刷しましたか？', speakerB: '＿＿枚印刷しました。（六千三百）' },
        options: [
            { text: 'ろくせんさんびゃく', isCorrect: true, reason: '正確！「六千三百」，「三百」濁音化。' },
            { text: 'ろっせんさんひゃく', isCorrect: false, reason: '「六千」不促音化，「三百」濁音化。' },
            { text: 'ろくぜんさんびゃく', isCorrect: false, reason: '「六千」不濁音化。' },
            { text: 'むせんみびゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六千」無音變，「三百」濁音化。', relatedRules: ['六千の讀法', '三百の濁音化'] },
        sourceItem: { value: 6300, kanji: '六千三百', reading: 'ろくせんさんびゃく' }
    },
    {
        id: 'num_thousands_extra_58', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「七千六百」的正確讀音是？', stem_zh: '「七千六百」的正確讀音是？',
        options: [
            { text: 'ななせんろっぴゃく', isCorrect: true, reason: '正確！「七千六百」，「六百」促音+半濁音化。' },
            { text: 'しちせんろくひゃく', isCorrect: false, reason: '「七」讀「なな」，「六百」促音+半濁音化。' },
            { text: 'ななぜんろっぴゃく', isCorrect: false, reason: '「七千」不濁音化。' },
            { text: 'なのせんむひゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七千」無音變，「六百」促音+半濁音化。', relatedRules: ['七千の讀法', '六百の音變'] },
        sourceItem: { value: 7600, kanji: '七千六百', reading: 'ななせんろっぴゃく' }
    },
    {
        id: 'num_thousands_extra_59', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: true,
        stem: '這輛車行駛了＿＿公里。（八千一百）', stem_zh: '這輛車行駛了八千一百公里。',
        options: [
            { text: 'はちせんひゃく', isCorrect: false, reason: '陷阱！「八千」促音化。' },
            { text: 'はっせんひゃく', isCorrect: true, reason: '正確！「八千百」。' },
            { text: 'はっせんいっぴゃく', isCorrect: false, reason: '「百」通常省略「一」。' },
            { text: 'やせんもも', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八千」促音化，「百」省略「一」。', trapExplanation: '「八千」的促音化。', relatedRules: ['八千の促音化', '百の省略'] },
        sourceItem: { value: 8100, kanji: '八千百', reading: 'はっせんひゃく' }
    },
    {
        id: 'num_thousands_extra_60', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'このランプはいくらですか？', speakerB: '＿＿です。（九千七百日圓）' },
        options: [
            { text: 'きゅうせんななひゃくえん', isCorrect: true, reason: '正確！「九千七百円」無音變。' },
            { text: 'くせんしちひゃくえん', isCorrect: false, reason: '「九」讀「きゅう」，「七」讀「なな」。' },
            { text: 'きゅうぜんななひゃくえん', isCorrect: false, reason: '「九千」不濁音化。' },
            { text: 'ここのせんなのひゃくえん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九千七百円」無音變。', relatedRules: ['九千の讀法', '七百の讀法'] },
        sourceItem: { value: 9700, kanji: '九千七百円', reading: 'きゅうせんななひゃくえん' }
    },
    {
        id: 'num_thousands_extra_61', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「千九百」的正確讀音是？', stem_zh: '「一千九百」的正確讀音是？',
        options: [
            { text: 'せんきゅうひゃく', isCorrect: true, reason: '正確！「千九百」省略「一」。' },
            { text: 'いちせんくひゃく', isCorrect: false, reason: '「千」省略「一」，「九」讀「きゅう」。' },
            { text: 'せんきゅうびゃく', isCorrect: false, reason: '「九百」不濁音化。' },
            { text: 'ちここのひゃく', isCorrect: false, reason: '使用音讀「せん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「千九百」省略「一」。', relatedRules: ['千の省略', '九百の讀法'] },
        sourceItem: { value: 1900, kanji: '千九百', reading: 'せんきゅうひゃく' }
    },
    {
        id: 'num_thousands_extra_62', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: false,
        stem: '會場可容納＿＿人。（二千五百）', stem_zh: '會場可容納二千五百人。',
        options: [
            { text: 'にせんごひゃく', isCorrect: true, reason: '正確！「二千五百」無音變。' },
            { text: 'にぜんごひゃく', isCorrect: false, reason: '「二千」不濁音化。' },
            { text: 'ふたせんいつひゃく', isCorrect: false, reason: '使用音讀。' },
            { text: 'にせんごびゃく', isCorrect: false, reason: '「五百」不濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二千五百」無音變。', relatedRules: ['二千の讀法', '五百の讀法'] },
        sourceItem: { value: 2500, kanji: '二千五百', reading: 'にせんごひゃく' }
    },
    {
        id: 'num_thousands_extra_63', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: true,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '何人応募しましたか？', speakerB: '＿＿人応募しました。（三千八百）' },
        options: [
            { text: 'さんせんはちひゃく', isCorrect: false, reason: '陷阱！「三千」濁音化，「八百」促音+半濁音化。' },
            { text: 'さんぜんはっぴゃく', isCorrect: true, reason: '正確！「三千八百」。' },
            { text: 'さんぜんはちひゃく', isCorrect: false, reason: '「八百」也要促音+半濁音化。' },
            { text: 'みぜんやひゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三千」濁音化，「八百」促音+半濁音化。', trapExplanation: '注意兩處音變。', relatedRules: ['三千の濁音化', '八百の音變'] },
        sourceItem: { value: 3800, kanji: '三千八百', reading: 'さんぜんはっぴゃく' }
    },
    {
        id: 'num_thousands_extra_64', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「四千二百」的正確讀音是？', stem_zh: '「四千二百」的正確讀音是？',
        options: [
            { text: 'よんせんにひゃく', isCorrect: true, reason: '正確！「四千二百」無音變。' },
            { text: 'しせんにひゃく', isCorrect: false, reason: '「四」讀「よん」。' },
            { text: 'よんぜんにひゃく', isCorrect: false, reason: '「四千」不濁音化。' },
            { text: 'よせんふたひゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四千二百」無音變。', relatedRules: ['四千の讀法', '二百の讀法'] },
        sourceItem: { value: 4200, kanji: '四千二百', reading: 'よんせんにひゃく' }
    },
    {
        id: 'num_thousands_extra_65', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: false,
        stem: '這個品牌每月生產＿＿件商品。（五千三百）', stem_zh: '這個品牌每月生產五千三百件商品。',
        options: [
            { text: 'ごせんさんびゃく', isCorrect: true, reason: '正確！「五千三百」，「三百」濁音化。' },
            { text: 'いつせんみひゃく', isCorrect: false, reason: '使用音讀「ご」，「三百」濁音化。' },
            { text: 'ごぜんさんびゃく', isCorrect: false, reason: '「五千」不濁音化。' },
            { text: 'ごせんさんひゃく', isCorrect: false, reason: '「三百」濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五千」無音變，「三百」濁音化。', relatedRules: ['五千の讀法', '三百の濁音化'] },
        sourceItem: { value: 5300, kanji: '五千三百', reading: 'ごせんさんびゃく' }
    },
    {
        id: 'num_thousands_extra_66', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'この掃除機はいくらですか？', speakerB: '＿＿です。（六千四百日圓）' },
        options: [
            { text: 'ろくせんよんひゃくえん', isCorrect: true, reason: '正確！「六千四百円」無音變。' },
            { text: 'ろっせんしひゃくえん', isCorrect: false, reason: '「六千」不促音化，「四」讀「よん」。' },
            { text: 'ろくぜんよんひゃくえん', isCorrect: false, reason: '「六千」不濁音化。' },
            { text: 'むせんよひゃくえん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六千四百円」無音變。', relatedRules: ['六千の讀法', '四百の讀法'] },
        sourceItem: { value: 6400, kanji: '六千四百円', reading: 'ろくせんよんひゃくえん' }
    },
    {
        id: 'num_thousands_extra_67', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「七千八百」的正確讀音是？', stem_zh: '「七千八百」的正確讀音是？',
        options: [
            { text: 'ななせんはっぴゃく', isCorrect: true, reason: '正確！「七千八百」，「八百」促音+半濁音化。' },
            { text: 'しちせんはちひゃく', isCorrect: false, reason: '「七」讀「なな」，「八百」促音+半濁音化。' },
            { text: 'ななぜんはっぴゃく', isCorrect: false, reason: '「七千」不濁音化。' },
            { text: 'なのせんやひゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七千」無音變，「八百」促音+半濁音化。', relatedRules: ['七千の讀法', '八百の音變'] },
        sourceItem: { value: 7800, kanji: '七千八百', reading: 'ななせんはっぴゃく' }
    },
    {
        id: 'num_thousands_extra_68', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: true,
        stem: '今年新增＿＿個帳號。（八千六百）', stem_zh: '今年新增八千六百個帳號。',
        options: [
            { text: 'はちせんろくひゃく', isCorrect: false, reason: '陷阱！「八千」促音化，「六百」促音+半濁音化。' },
            { text: 'はっせんろっぴゃく', isCorrect: true, reason: '正確！「八千六百」。' },
            { text: 'はっせんろくひゃく', isCorrect: false, reason: '「六百」也要促音+半濁音化。' },
            { text: 'やせんむひゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八千」促音化，「六百」促音+半濁音化。', trapExplanation: '注意兩處音變。', relatedRules: ['八千の促音化', '六百の音變'] },
        sourceItem: { value: 8600, kanji: '八千六百', reading: 'はっせんろっぴゃく' }
    },
    {
        id: 'num_thousands_extra_69', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: 'この商品は何個売れましたか？', speakerB: '＿＿個売れました。（九千五百）' },
        options: [
            { text: 'きゅうせんごひゃく', isCorrect: true, reason: '正確！「九千五百」無音變。' },
            { text: 'くせんごひゃく', isCorrect: false, reason: '「九」讀「きゅう」。' },
            { text: 'きゅうぜんごひゃく', isCorrect: false, reason: '「九千」不濁音化。' },
            { text: 'ここのせんいつひゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九千五百」無音變。', relatedRules: ['九千の讀法', '五百の讀法'] },
        sourceItem: { value: 9500, kanji: '九千五百', reading: 'きゅうせんごひゃく' }
    },
    {
        id: 'num_thousands_extra_70', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「千三百」的正確讀音是？', stem_zh: '「一千三百」的正確讀音是？',
        options: [
            { text: 'せんさんびゃく', isCorrect: true, reason: '正確！「千三百」，「三百」濁音化。' },
            { text: 'いちせんさんひゃく', isCorrect: false, reason: '「千」省略「一」，「三百」濁音化。' },
            { text: 'せんさんひゃく', isCorrect: false, reason: '「三百」濁音化。' },
            { text: 'ちみびゃく', isCorrect: false, reason: '使用音讀「せん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「千三百」省略「一」，「三百」濁音化。', relatedRules: ['千の省略', '三百の濁音化'] },
        sourceItem: { value: 1300, kanji: '千三百', reading: 'せんさんびゃく' }
    },
    {
        id: 'num_thousands_extra_71', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: false,
        stem: '這棟大樓高＿＿公尺。（二千八百）', stem_zh: '這棟大樓高二千八百公尺。',
        options: [
            { text: 'にせんはっぴゃく', isCorrect: true, reason: '正確！「二千八百」，「八百」促音+半濁音化。' },
            { text: 'にぜんはちひゃく', isCorrect: false, reason: '「二千」不濁音化，「八百」促音+半濁音化。' },
            { text: 'ふたせんやひゃく', isCorrect: false, reason: '使用音讀。' },
            { text: 'にせんはちひゃく', isCorrect: false, reason: '「八百」促音+半濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二千」無音變，「八百」促音+半濁音化。', relatedRules: ['二千の讀法', '八百の音變'] },
        sourceItem: { value: 2800, kanji: '二千八百', reading: 'にせんはっぴゃく' }
    },
    {
        id: 'num_thousands_extra_72', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: true,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'このスピーカーはいくらですか？', speakerB: '＿＿です。（三千一百日圓）' },
        options: [
            { text: 'さんせんひゃくえん', isCorrect: false, reason: '陷阱！「三千」濁音化。' },
            { text: 'さんぜんひゃくえん', isCorrect: true, reason: '正確！「三千百円」。' },
            { text: 'さんぜんいっぴゃくえん', isCorrect: false, reason: '「百」通常省略「一」。' },
            { text: 'みぜんももえん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三千」濁音化，「百」省略「一」。', trapExplanation: '「三千」的濁音化。', relatedRules: ['三千の濁音化', '百の省略'] },
        sourceItem: { value: 3100, kanji: '三千百円', reading: 'さんぜんひゃくえん' }
    },
    {
        id: 'num_thousands_extra_73', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「四千三百」的正確讀音是？', stem_zh: '「四千三百」的正確讀音是？',
        options: [
            { text: 'よんせんさんびゃく', isCorrect: true, reason: '正確！「四千三百」，「三百」濁音化。' },
            { text: 'しせんさんひゃく', isCorrect: false, reason: '「四」讀「よん」，「三百」濁音化。' },
            { text: 'よんぜんさんびゃく', isCorrect: false, reason: '「四千」不濁音化。' },
            { text: 'よせんみびゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四千」無音變，「三百」濁音化。', relatedRules: ['四千の讀法', '三百の濁音化'] },
        sourceItem: { value: 4300, kanji: '四千三百', reading: 'よんせんさんびゃく' }
    },
    {
        id: 'num_thousands_extra_74', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: false,
        stem: '這場音樂會有＿＿名觀眾。（五千六百）', stem_zh: '這場音樂會有五千六百名觀眾。',
        options: [
            { text: 'ごせんろっぴゃく', isCorrect: true, reason: '正確！「五千六百」，「六百」促音+半濁音化。' },
            { text: 'いつせんむひゃく', isCorrect: false, reason: '使用音讀「ご」，「六百」促音+半濁音化。' },
            { text: 'ごぜんろっぴゃく', isCorrect: false, reason: '「五千」不濁音化。' },
            { text: 'ごせんろくひゃく', isCorrect: false, reason: '「六百」促音+半濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五千」無音變，「六百」促音+半濁音化。', relatedRules: ['五千の讀法', '六百の音變'] },
        sourceItem: { value: 5600, kanji: '五千六百', reading: 'ごせんろっぴゃく' }
    },
    {
        id: 'num_thousands_extra_75', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: 'この動画は何回再生されましたか？', speakerB: '＿＿回再生されました。（六千五百）' },
        options: [
            { text: 'ろくせんごひゃく', isCorrect: true, reason: '正確！「六千五百」無音變。' },
            { text: 'ろっせんごひゃく', isCorrect: false, reason: '「六千」不促音化。' },
            { text: 'ろくぜんごひゃく', isCorrect: false, reason: '「六千」不濁音化。' },
            { text: 'むせんいつひゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六千五百」無音變。', relatedRules: ['六千の讀法', '五百の讀法'] },
        sourceItem: { value: 6500, kanji: '六千五百', reading: 'ろくせんごひゃく' }
    },
    {
        id: 'num_thousands_extra_76', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「七千四百」的正確讀音是？', stem_zh: '「七千四百」的正確讀音是？',
        options: [
            { text: 'ななせんよんひゃく', isCorrect: true, reason: '正確！「七千四百」無音變。' },
            { text: 'しちせんしひゃく', isCorrect: false, reason: '「七」讀「なな」，「四」讀「よん」。' },
            { text: 'ななぜんよんひゃく', isCorrect: false, reason: '「七千」不濁音化。' },
            { text: 'なのせんよひゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七千四百」無音變。', relatedRules: ['七千の讀法', '四百の讀法'] },
        sourceItem: { value: 7400, kanji: '七千四百', reading: 'ななせんよんひゃく' }
    },
    {
        id: 'num_thousands_extra_77', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: true,
        stem: '這批貨物重＿＿公斤。（八千三百）', stem_zh: '這批貨物重八千三百公斤。',
        options: [
            { text: 'はちせんさんひゃく', isCorrect: false, reason: '陷阱！「八千」促音化，「三百」濁音化。' },
            { text: 'はっせんさんびゃく', isCorrect: true, reason: '正確！「八千三百」。' },
            { text: 'はっせんさんひゃく', isCorrect: false, reason: '「三百」也要濁音化。' },
            { text: 'やせんみびゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八千」促音化，「三百」濁音化。', trapExplanation: '注意兩處音變。', relatedRules: ['八千の促音化', '三百の濁音化'] },
        sourceItem: { value: 8300, kanji: '八千三百', reading: 'はっせんさんびゃく' }
    },
    {
        id: 'num_thousands_extra_78', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'このテーブルはいくらですか？', speakerB: '＿＿です。（九千八百日圓）' },
        options: [
            { text: 'きゅうせんはっぴゃくえん', isCorrect: true, reason: '正確！「九千八百円」，「八百」促音+半濁音化。' },
            { text: 'くせんはちひゃくえん', isCorrect: false, reason: '「九」讀「きゅう」，「八百」促音+半濁音化。' },
            { text: 'きゅうぜんはっぴゃくえん', isCorrect: false, reason: '「九千」不濁音化。' },
            { text: 'ここのせんやひゃくえん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九千」無音變，「八百」促音+半濁音化。', relatedRules: ['九千の讀法', '八百の音變'] },
        sourceItem: { value: 9800, kanji: '九千八百円', reading: 'きゅうせんはっぴゃくえん' }
    },
    {
        id: 'num_thousands_extra_79', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「千七百」的正確讀音是？', stem_zh: '「一千七百」的正確讀音是？',
        options: [
            { text: 'せんななひゃく', isCorrect: true, reason: '正確！「千七百」省略「一」。' },
            { text: 'いちせんしちひゃく', isCorrect: false, reason: '「千」省略「一」，「七」讀「なな」。' },
            { text: 'せんななびゃく', isCorrect: false, reason: '「七百」不濁音化。' },
            { text: 'ちなのひゃく', isCorrect: false, reason: '使用音讀「せん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「千七百」省略「一」。', relatedRules: ['千の省略', '七百の讀法'] },
        sourceItem: { value: 1700, kanji: '千七百', reading: 'せんななひゃく' }
    },
    {
        id: 'num_thousands_extra_80', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: false,
        stem: '倉庫存放了＿＿箱貨物。（二千一百）', stem_zh: '倉庫存放了二千一百箱貨物。',
        options: [
            { text: 'にせんひゃく', isCorrect: true, reason: '正確！「二千百」。' },
            { text: 'にぜんいっぴゃく', isCorrect: false, reason: '「二千」不濁音化，「百」省略「一」。' },
            { text: 'ふたせんもも', isCorrect: false, reason: '使用音讀。' },
            { text: 'にせんいちひゃく', isCorrect: false, reason: '「百」省略「一」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二千百」，「百」省略「一」。', relatedRules: ['二千の讀法', '百の省略'] },
        sourceItem: { value: 2100, kanji: '二千百', reading: 'にせんひゃく' }
    },
    {
        id: 'num_thousands_extra_81', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: true,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '何人登録しましたか？', speakerB: '＿＿人登録しました。（三千六百）' },
        options: [
            { text: 'さんせんろくひゃく', isCorrect: false, reason: '陷阱！「三千」濁音化，「六百」促音+半濁音化。' },
            { text: 'さんぜんろっぴゃく', isCorrect: true, reason: '正確！「三千六百」。' },
            { text: 'さんぜんろくひゃく', isCorrect: false, reason: '「六百」也要促音+半濁音化。' },
            { text: 'みぜんむひゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三千」濁音化，「六百」促音+半濁音化。', trapExplanation: '注意兩處音變。', relatedRules: ['三千の濁音化', '六百の音變'] },
        sourceItem: { value: 3600, kanji: '三千六百', reading: 'さんぜんろっぴゃく' }
    },
    {
        id: 'num_thousands_extra_82', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「四千九百」的正確讀音是？', stem_zh: '「四千九百」的正確讀音是？',
        options: [
            { text: 'よんせんきゅうひゃく', isCorrect: true, reason: '正確！「四千九百」無音變。' },
            { text: 'しせんくひゃく', isCorrect: false, reason: '「四」讀「よん」，「九」讀「きゅう」。' },
            { text: 'よんぜんきゅうひゃく', isCorrect: false, reason: '「四千」不濁音化。' },
            { text: 'よせんここのひゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四千九百」無音變。', relatedRules: ['四千の讀法', '九百の讀法'] },
        sourceItem: { value: 4900, kanji: '四千九百', reading: 'よんせんきゅうひゃく' }
    },
    {
        id: 'num_thousands_extra_83', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: false,
        stem: '這個系列銷售了＿＿套。（五千四百）', stem_zh: '這個系列銷售了五千四百套。',
        options: [
            { text: 'ごせんよんひゃく', isCorrect: true, reason: '正確！「五千四百」無音變。' },
            { text: 'いつせんしひゃく', isCorrect: false, reason: '使用音讀「ご」，「四」讀「よん」。' },
            { text: 'ごぜんよんひゃく', isCorrect: false, reason: '「五千」不濁音化。' },
            { text: 'ごせんよんびゃく', isCorrect: false, reason: '「四百」不濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五千四百」無音變。', relatedRules: ['五千の讀法', '四百の讀法'] },
        sourceItem: { value: 5400, kanji: '五千四百', reading: 'ごせんよんひゃく' }
    },
    {
        id: 'num_thousands_extra_84', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'このソファはいくらですか？', speakerB: '＿＿です。（六千七百日圓）' },
        options: [
            { text: 'ろくせんななひゃくえん', isCorrect: true, reason: '正確！「六千七百円」無音變。' },
            { text: 'ろっせんしちひゃくえん', isCorrect: false, reason: '「六千」不促音化，「七」讀「なな」。' },
            { text: 'ろくぜんななひゃくえん', isCorrect: false, reason: '「六千」不濁音化。' },
            { text: 'むせんなのひゃくえん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六千七百円」無音變。', relatedRules: ['六千の讀法', '七百の讀法'] },
        sourceItem: { value: 6700, kanji: '六千七百円', reading: 'ろくせんななひゃくえん' }
    },
    {
        id: 'num_thousands_extra_85', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「七千一百」的正確讀音是？', stem_zh: '「七千一百」的正確讀音是？',
        options: [
            { text: 'ななせんひゃく', isCorrect: true, reason: '正確！「七千百」，「百」省略「一」。' },
            { text: 'しちせんいっぴゃく', isCorrect: false, reason: '「七」讀「なな」，「百」省略「一」。' },
            { text: 'ななぜんひゃく', isCorrect: false, reason: '「七千」不濁音化。' },
            { text: 'なのせんもも', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七千」無音變，「百」省略「一」。', relatedRules: ['七千の讀法', '百の省略'] },
        sourceItem: { value: 7100, kanji: '七千百', reading: 'ななせんひゃく' }
    },
    {
        id: 'num_thousands_extra_86', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: true,
        stem: '這個地區有＿＿家商店。（八千四百）', stem_zh: '這個地區有八千四百家商店。',
        options: [
            { text: 'はちせんよんひゃく', isCorrect: false, reason: '陷阱！「八千」促音化。' },
            { text: 'はっせんよんひゃく', isCorrect: true, reason: '正確！「八千四百」。' },
            { text: 'はっせんしひゃく', isCorrect: false, reason: '「四」讀「よん」。' },
            { text: 'やせんよひゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八千」促音化，「四百」無音變。', trapExplanation: '「八千」的促音化。', relatedRules: ['八千の促音化', '四百の讀法'] },
        sourceItem: { value: 8400, kanji: '八千四百', reading: 'はっせんよんひゃく' }
    },
    {
        id: 'num_thousands_extra_87', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '今月は何件の注文がありましたか？', speakerB: '＿＿件ありました。（九千三百）' },
        options: [
            { text: 'きゅうせんさんびゃく', isCorrect: true, reason: '正確！「九千三百」，「三百」濁音化。' },
            { text: 'くせんさんひゃく', isCorrect: false, reason: '「九」讀「きゅう」，「三百」濁音化。' },
            { text: 'きゅうぜんさんびゃく', isCorrect: false, reason: '「九千」不濁音化。' },
            { text: 'ここのせんみびゃく', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九千」無音變，「三百」濁音化。', relatedRules: ['九千の讀法', '三百の濁音化'] },
        sourceItem: { value: 9300, kanji: '九千三百', reading: 'きゅうせんさんびゃく' }
    },
    {
        id: 'num_thousands_extra_88', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: true,
        stem: '「一万三千」的正確讀音是？', stem_zh: '「一萬三千」的正確讀音是？',
        options: [
            { text: 'いちまんさんせん', isCorrect: false, reason: '陷阱！「三千」濁音化。' },
            { text: 'いちまんさんぜん', isCorrect: true, reason: '正確！「一万三千」。' },
            { text: 'まんさんぜん', isCorrect: false, reason: '「一万」不可省略「一」。' },
            { text: 'いちばんさんぜん', isCorrect: false, reason: '「万」不濁音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「一万」不可省略「一」，「三千」濁音化。', trapExplanation: '「三千」的濁音化。', relatedRules: ['一万の特殊規則', '三千の濁音化'] },
        sourceItem: { value: 13000, kanji: '一万三千', reading: 'いちまんさんぜん' }
    },
    {
        id: 'num_thousands_extra_89', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: false,
        stem: '這本書定價＿＿日圓。（二萬五千）', stem_zh: '這本書定價二萬五千日圓。',
        options: [
            { text: 'にまんごせんえん', isCorrect: true, reason: '正確！「二万五千円」無音變。' },
            { text: 'にばんごぜんえん', isCorrect: false, reason: '「万」不濁音化，「五千」不濁音化。' },
            { text: 'ふたまんいつせんえん', isCorrect: false, reason: '使用音讀。' },
            { text: 'にまんごぜんえん', isCorrect: false, reason: '「五千」不濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二万五千円」無音變。', relatedRules: ['万位數の讀法', '五千の讀法'] },
        sourceItem: { value: 25000, kanji: '二万五千円', reading: 'にまんごせんえん' }
    },
    {
        id: 'num_thousands_extra_90', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: true,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'この冷蔵庫はいくらですか？', speakerB: '＿＿です。（三萬八千日圓）' },
        options: [
            { text: 'さんまんはちせんえん', isCorrect: false, reason: '陷阱！「八千」促音化。' },
            { text: 'さんまんはっせんえん', isCorrect: true, reason: '正確！「三万八千円」。' },
            { text: 'さんばんはっせんえん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'みまんやせんえん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八千」促音化。', trapExplanation: '「八千」的促音化。', relatedRules: ['八千の促音化', '万位數金額'] },
        sourceItem: { value: 38000, kanji: '三万八千円', reading: 'さんまんはっせんえん' }
    },
    {
        id: 'num_thousands_extra_91', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「四万六千」的正確讀音是？', stem_zh: '「四萬六千」的正確讀音是？',
        options: [
            { text: 'よんまんろくせん', isCorrect: true, reason: '正確！「四万六千」無音變。' },
            { text: 'しまんろくぜん', isCorrect: false, reason: '「四」讀「よん」，「六千」不濁音化。' },
            { text: 'よんばんろくせん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'よまんむせん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四万六千」無音變。', relatedRules: ['万位數の讀法', '六千の讀法'] },
        sourceItem: { value: 46000, kanji: '四万六千', reading: 'よんまんろくせん' }
    },
    {
        id: 'num_thousands_extra_92', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: false,
        stem: '演唱會門票售出＿＿張。（五萬二千）', stem_zh: '演唱會門票售出五萬二千張。',
        options: [
            { text: 'ごまんにせん', isCorrect: true, reason: '正確！「五万二千」無音變。' },
            { text: 'いつまんふたせん', isCorrect: false, reason: '使用音讀「ご」和「に」。' },
            { text: 'ごばんにせん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'ごまんにぜん', isCorrect: false, reason: '「二千」不濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五万二千」無音變。', relatedRules: ['万位數の讀法', '二千の讀法'] },
        sourceItem: { value: 52000, kanji: '五万二千', reading: 'ごまんにせん' }
    },
    {
        id: 'num_thousands_extra_93', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: true,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '何人フォローしていますか？', speakerB: '＿＿人です。（六萬三千）' },
        options: [
            { text: 'ろくまんさんせん', isCorrect: false, reason: '陷阱！「三千」濁音化。' },
            { text: 'ろくまんさんぜん', isCorrect: true, reason: '正確！「六万三千」。' },
            { text: 'ろくばんさんぜん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'むまんみぜん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三千」濁音化。', trapExplanation: '「三千」的濁音化。', relatedRules: ['三千の濁音化', '万位數組合'] },
        sourceItem: { value: 63000, kanji: '六万三千', reading: 'ろくまんさんぜん' }
    },
    {
        id: 'num_thousands_extra_94', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「七万四千」的正確讀音是？', stem_zh: '「七萬四千」的正確讀音是？',
        options: [
            { text: 'ななまんよんせん', isCorrect: true, reason: '正確！「七万四千」無音變。' },
            { text: 'しちまんしせん', isCorrect: false, reason: '「七」讀「なな」，「四」讀「よん」。' },
            { text: 'ななばんよんせん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'なのまんよせん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七万四千」無音變。', relatedRules: ['万位數の讀法', '四千の讀法'] },
        sourceItem: { value: 74000, kanji: '七万四千', reading: 'ななまんよんせん' }
    },
    {
        id: 'num_thousands_extra_95', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: false,
        stem: '網站每月有＿＿訪客。（八萬五千）', stem_zh: '網站每月有八萬五千訪客。',
        options: [
            { text: 'はちまんごせん', isCorrect: true, reason: '正確！「八万五千」，注意「八万」不促音化。' },
            { text: 'はっまんごせん', isCorrect: false, reason: '「八万」不促音化。' },
            { text: 'はちばんごせん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'やまんいつせん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八万」不促音化，與「八千」不同。', relatedRules: ['八万不促音化', '五千の讀法'] },
        sourceItem: { value: 85000, kanji: '八万五千', reading: 'はちまんごせん' }
    },
    {
        id: 'num_thousands_extra_96', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'このパソコンはいくらですか？', speakerB: '＿＿です。（九萬七千日圓）' },
        options: [
            { text: 'きゅうまんななせんえん', isCorrect: true, reason: '正確！「九万七千円」無音變。' },
            { text: 'くまんしちせんえん', isCorrect: false, reason: '「九」讀「きゅう」，「七」讀「なな」。' },
            { text: 'きゅうばんななせんえん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'ここのまんなのせんえん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九万七千円」無音變。', relatedRules: ['万位數の讀法', '七千の讀法'] },
        sourceItem: { value: 97000, kanji: '九万七千円', reading: 'きゅうまんななせんえん' }
    },
    {
        id: 'num_thousands_extra_97', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: true,
        stem: '「十万三千」的正確讀音是？', stem_zh: '「十萬三千」的正確讀音是？',
        options: [
            { text: 'じゅうまんさんせん', isCorrect: false, reason: '陷阱！「三千」濁音化。' },
            { text: 'じゅうまんさんぜん', isCorrect: true, reason: '正確！「十万三千」。' },
            { text: 'とおまんさんぜん', isCorrect: false, reason: '使用音讀「じゅう」。' },
            { text: 'じゅうばんさんぜん', isCorrect: false, reason: '「万」不濁音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三千」濁音化。', trapExplanation: '「三千」的濁音化。', relatedRules: ['三千の濁音化', '十万の讀法'] },
        sourceItem: { value: 103000, kanji: '十万三千', reading: 'じゅうまんさんぜん' }
    },
    {
        id: 'num_thousands_extra_98', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: true,
        stem: '這批訂單總計＿＿日圓。（十五萬八千）', stem_zh: '這批訂單總計十五萬八千日圓。',
        options: [
            { text: 'じゅうごまんはちせんえん', isCorrect: false, reason: '陷阱！「八千」促音化。' },
            { text: 'じゅうごまんはっせんえん', isCorrect: true, reason: '正確！「十五万八千円」。' },
            { text: 'じゅうごばんはっせんえん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'とおごまんやせんえん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八千」促音化。', trapExplanation: '「八千」的促音化。', relatedRules: ['八千の促音化', '大數字金額'] },
        sourceItem: { value: 158000, kanji: '十五万八千円', reading: 'じゅうごまんはっせんえん' }
    },
    {
        id: 'num_thousands_extra_99', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: 'この大学には何人の学生がいますか？', speakerB: '＿＿人います。（二十萬千）' },
        options: [
            { text: 'にじゅうまんせん', isCorrect: true, reason: '正確！「二十万千」，「千」省略「一」。' },
            { text: 'にじゅうまんいちせん', isCorrect: false, reason: '「千」通常省略「一」。' },
            { text: 'にじゅうばんせん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'ふたじゅうまんち', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「千」省略「一」。', relatedRules: ['千の省略', '大數字の讀法'] },
        sourceItem: { value: 201000, kanji: '二十万千', reading: 'にじゅうまんせん' }
    },
    {
        id: 'num_thousands_extra_100', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「百万」的正確讀音是？', stem_zh: '「一百萬」的正確讀音是？',
        options: [
            { text: 'ひゃくまん', isCorrect: true, reason: '正確！「百万」省略「一」。' },
            { text: 'いっぴゃくまん', isCorrect: false, reason: '「百万」通常省略「一」。' },
            { text: 'ひゃくばん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'ももまん', isCorrect: false, reason: '使用音讀「ひゃく」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「百万」省略「一」。', relatedRules: ['百万の讀法', '大數字の省略'] },
        sourceItem: { value: 1000000, kanji: '百万', reading: 'ひゃくまん' }
    },
    {
        id: 'num_thousands_extra_101', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: true,
        stem: '這場展覽有＿＿名參觀者。（一萬八千）', stem_zh: '這場展覽有一萬八千名參觀者。',
        options: [
            { text: 'いちまんはちせん', isCorrect: false, reason: '陷阱！「八千」促音化。' },
            { text: 'いちまんはっせん', isCorrect: true, reason: '正確！「一万八千」。' },
            { text: 'まんはっせん', isCorrect: false, reason: '「一万」不可省略「一」。' },
            { text: 'いちばんはっせん', isCorrect: false, reason: '「万」不濁音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「一万」不可省略「一」，「八千」促音化。', trapExplanation: '「八千」的促音化。', relatedRules: ['一万の特殊規則', '八千の促音化'] },
        sourceItem: { value: 18000, kanji: '一万八千', reading: 'いちまんはっせん' }
    },
    {
        id: 'num_thousands_extra_102', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: true,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'この家具セットはいくらですか？', speakerB: '＿＿です。（二萬三千日圓）' },
        options: [
            { text: 'にまんさんせんえん', isCorrect: false, reason: '陷阱！「三千」濁音化。' },
            { text: 'にまんさんぜんえん', isCorrect: true, reason: '正確！「二万三千円」。' },
            { text: 'にばんさんぜんえん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'ふたまんみぜんえん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三千」濁音化。', trapExplanation: '「三千」的濁音化。', relatedRules: ['三千の濁音化', '万位數金額'] },
        sourceItem: { value: 23000, kanji: '二万三千円', reading: 'にまんさんぜんえん' }
    },
    {
        id: 'num_thousands_extra_103', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「三万千」的正確讀音是？', stem_zh: '「三萬一千」的正確讀音是？',
        options: [
            { text: 'さんまんせん', isCorrect: true, reason: '正確！「三万千」，「千」省略「一」。' },
            { text: 'さんまんいちせん', isCorrect: false, reason: '「千」通常省略「一」。' },
            { text: 'さんばんせん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'みまんち', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「千」省略「一」。', relatedRules: ['千の省略', '万位數組合'] },
        sourceItem: { value: 31000, kanji: '三万千', reading: 'さんまんせん' }
    },
    {
        id: 'num_thousands_extra_104', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: false,
        stem: '公司利潤達到＿＿萬日圓。（四萬五千）', stem_zh: '公司利潤達到四萬五千萬日圓。',
        options: [
            { text: 'よんまんごせん', isCorrect: true, reason: '正確！「四万五千」無音變。' },
            { text: 'しまんごぜん', isCorrect: false, reason: '「四」讀「よん」，「五千」不濁音化。' },
            { text: 'よんばんごせん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'よまんいつせん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四万五千」無音變。', relatedRules: ['四の避諱', '五千の讀法'] },
        sourceItem: { value: 45000, kanji: '四万五千', reading: 'よんまんごせん' }
    },
    {
        id: 'num_thousands_extra_105', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: 'チャンネル登録者は何人ですか？', speakerB: '＿＿人です。（五萬六千）' },
        options: [
            { text: 'ごまんろくせん', isCorrect: true, reason: '正確！「五万六千」無音變。' },
            { text: 'いつまんむせん', isCorrect: false, reason: '使用音讀「ご」和「ろく」。' },
            { text: 'ごばんろくせん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'ごまんろくぜん', isCorrect: false, reason: '「六千」不濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五万六千」無音變。', relatedRules: ['五万の讀法', '六千の讀法'] },
        sourceItem: { value: 56000, kanji: '五万六千', reading: 'ごまんろくせん' }
    },
    {
        id: 'num_thousands_extra_106', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「六万七千」的正確讀音是？', stem_zh: '「六萬七千」的正確讀音是？',
        options: [
            { text: 'ろくまんななせん', isCorrect: true, reason: '正確！「六万七千」無音變。' },
            { text: 'むまんしちせん', isCorrect: false, reason: '使用音讀「ろく」，「七」讀「なな」。' },
            { text: 'ろくばんななせん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'ろくまんななぜん', isCorrect: false, reason: '「七千」不濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六万七千」無音變。', relatedRules: ['六万の讀法', '七千の讀法'] },
        sourceItem: { value: 67000, kanji: '六万七千', reading: 'ろくまんななせん' }
    },
    {
        id: 'num_thousands_extra_107', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: true,
        stem: '這批貨物價值＿＿日圓。（七萬八千）', stem_zh: '這批貨物價值七萬八千日圓。',
        options: [
            { text: 'ななまんはちせん', isCorrect: false, reason: '陷阱！「八千」促音化。' },
            { text: 'ななまんはっせん', isCorrect: true, reason: '正確！「七万八千」。' },
            { text: 'しちまんはっせん', isCorrect: false, reason: '「七」讀「なな」。' },
            { text: 'ななばんはっせん', isCorrect: false, reason: '「万」不濁音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八千」促音化。', trapExplanation: '「八千」的促音化。', relatedRules: ['八千の促音化', '万位數組合'] },
        sourceItem: { value: 78000, kanji: '七万八千', reading: 'ななまんはっせん' }
    },
    {
        id: 'num_thousands_extra_108', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'このエアコンはいくらですか？', speakerB: '＿＿です。（八萬九千日圓）' },
        options: [
            { text: 'はちまんきゅうせん', isCorrect: true, reason: '正確！「八万九千」，注意「八万」不促音化。' },
            { text: 'はっまんきゅうせん', isCorrect: false, reason: '「八万」不促音化。' },
            { text: 'はちばんきゅうせん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'やまんここのせん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八万」不促音化，與「八千」不同。', relatedRules: ['八万不促音化', '九千の讀法'] },
        sourceItem: { value: 89000, kanji: '八万九千', reading: 'はちまんきゅうせん' }
    },
    {
        id: 'num_thousands_extra_109', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「九万二千」的正確讀音是？', stem_zh: '「九萬二千」的正確讀音是？',
        options: [
            { text: 'きゅうまんにせん', isCorrect: true, reason: '正確！「九万二千」無音變。' },
            { text: 'くまんふたせん', isCorrect: false, reason: '「九」讀「きゅう」，「二」讀「に」。' },
            { text: 'きゅうばんにせん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'きゅうまんにぜん', isCorrect: false, reason: '「二千」不濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九万二千」無音變。', relatedRules: ['九万の讀法', '二千の讀法'] },
        sourceItem: { value: 92000, kanji: '九万二千', reading: 'きゅうまんにせん' }
    },
    {
        id: 'num_thousands_extra_110', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: true,
        stem: '今年銷售額達＿＿萬日圓。（十一萬三千）', stem_zh: '今年銷售額達十一萬三千萬日圓。',
        options: [
            { text: 'じゅういちまんさんせん', isCorrect: false, reason: '陷阱！「三千」濁音化。' },
            { text: 'じゅういちまんさんぜん', isCorrect: true, reason: '正確！「十一万三千」。' },
            { text: 'じゅういちばんさんぜん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'とおいちまんみぜん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三千」濁音化。', trapExplanation: '「三千」的濁音化。', relatedRules: ['三千の濁音化', '大數字組合'] },
        sourceItem: { value: 113000, kanji: '十一万三千', reading: 'じゅういちまんさんぜん' }
    },
    {
        id: 'num_thousands_extra_111', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '何人参加しましたか？', speakerB: '＿＿人参加しました。（十二萬四千）' },
        options: [
            { text: 'じゅうにまんよんせん', isCorrect: true, reason: '正確！「十二万四千」無音變。' },
            { text: 'じゅうにまんしせん', isCorrect: false, reason: '「四」讀「よん」。' },
            { text: 'じゅうにばんよんせん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'とおにまんよせん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十二万四千」無音變。', relatedRules: ['万位數の讀法', '四千の讀法'] },
        sourceItem: { value: 124000, kanji: '十二万四千', reading: 'じゅうにまんよんせん' }
    },
    {
        id: 'num_thousands_extra_112', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「二十万五千」的正確讀音是？', stem_zh: '「二十萬五千」的正確讀音是？',
        options: [
            { text: 'にじゅうまんごせん', isCorrect: true, reason: '正確！「二十万五千」無音變。' },
            { text: 'にじゅうまんいつせん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'にじゅうばんごせん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'にじゅうまんごぜん', isCorrect: false, reason: '「五千」不濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十万五千」無音變。', relatedRules: ['二十万の讀法', '五千の讀法'] },
        sourceItem: { value: 205000, kanji: '二十万五千', reading: 'にじゅうまんごせん' }
    },
    {
        id: 'num_thousands_extra_113', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: true,
        stem: '預算是＿＿日圓。（三十萬八千）', stem_zh: '預算是三十萬八千日圓。',
        options: [
            { text: 'さんじゅうまんはちせん', isCorrect: false, reason: '陷阱！「八千」促音化。' },
            { text: 'さんじゅうまんはっせん', isCorrect: true, reason: '正確！「三十万八千」。' },
            { text: 'さんじゅうばんはっせん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'みじゅうまんやせん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八千」促音化。', trapExplanation: '「八千」的促音化。', relatedRules: ['八千の促音化', '大數字金額'] },
        sourceItem: { value: 308000, kanji: '三十万八千', reading: 'さんじゅうまんはっせん' }
    },
    {
        id: 'num_thousands_extra_114', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'この車はいくらですか？', speakerB: '＿＿です。（四十萬六千日圓）' },
        options: [
            { text: 'よんじゅうまんろくせん', isCorrect: true, reason: '正確！「四十万六千」無音變。' },
            { text: 'しじゅうまんろくせん', isCorrect: false, reason: '「四」讀「よん」。' },
            { text: 'よんじゅうばんろくせん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'よじゅうまんむせん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四十万六千」無音變。', relatedRules: ['四十万の讀法', '六千の讀法'] },
        sourceItem: { value: 406000, kanji: '四十万六千', reading: 'よんじゅうまんろくせん' }
    },
    {
        id: 'num_thousands_extra_115', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「五十万七千」的正確讀音是？', stem_zh: '「五十萬七千」的正確讀音是？',
        options: [
            { text: 'ごじゅうまんななせん', isCorrect: true, reason: '正確！「五十万七千」無音變。' },
            { text: 'いつじゅうまんしちせん', isCorrect: false, reason: '使用音讀「ご」，「七」讀「なな」。' },
            { text: 'ごじゅうばんななせん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'ごじゅうまんななぜん', isCorrect: false, reason: '「七千」不濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五十万七千」無音變。', relatedRules: ['五十万の讀法', '七千の讀法'] },
        sourceItem: { value: 507000, kanji: '五十万七千', reading: 'ごじゅうまんななせん' }
    },
    {
        id: 'num_thousands_extra_116', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: false,
        stem: '這棟大樓價值＿＿萬日圓。（六十萬九千）', stem_zh: '這棟大樓價值六十萬九千萬日圓。',
        options: [
            { text: 'ろくじゅうまんきゅうせん', isCorrect: true, reason: '正確！「六十万九千」無音變。' },
            { text: 'むじゅうまんくせん', isCorrect: false, reason: '使用音讀「ろく」，「九」讀「きゅう」。' },
            { text: 'ろくじゅうばんきゅうせん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'ろくじゅうまんここのせん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六十万九千」無音變。', relatedRules: ['六十万の讀法', '九千の讀法'] },
        sourceItem: { value: 609000, kanji: '六十万九千', reading: 'ろくじゅうまんきゅうせん' }
    },
    {
        id: 'num_thousands_extra_117', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: true,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '何人視聴しましたか？', speakerB: '＿＿人視聴しました。（七十萬三千）' },
        options: [
            { text: 'ななじゅうまんさんせん', isCorrect: false, reason: '陷阱！「三千」濁音化。' },
            { text: 'ななじゅうまんさんぜん', isCorrect: true, reason: '正確！「七十万三千」。' },
            { text: 'しちじゅうまんさんぜん', isCorrect: false, reason: '「七」讀「なな」。' },
            { text: 'ななじゅうばんさんぜん', isCorrect: false, reason: '「万」不濁音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三千」濁音化。', trapExplanation: '「三千」的濁音化。', relatedRules: ['三千の濁音化', '大數字組合'] },
        sourceItem: { value: 703000, kanji: '七十万三千', reading: 'ななじゅうまんさんぜん' }
    },
    {
        id: 'num_thousands_extra_118', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: false,
        stem: '「八十万四千」的正確讀音是？', stem_zh: '「八十萬四千」的正確讀音是？',
        options: [
            { text: 'はちじゅうまんよんせん', isCorrect: true, reason: '正確！「八十万四千」無音變。' },
            { text: 'やじゅうまんしせん', isCorrect: false, reason: '使用音讀「はち」，「四」讀「よん」。' },
            { text: 'はちじゅうばんよんせん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'はちじゅうまんよんぜん', isCorrect: false, reason: '「四千」不濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八十万四千」無音變。', relatedRules: ['八十万の讀法', '四千の讀法'] },
        sourceItem: { value: 804000, kanji: '八十万四千', reading: 'はちじゅうまんよんせん' }
    },
    {
        id: 'num_thousands_extra_119', category: 'numbers', subcategory: 'thousands', type: 'sentence', isTrap: false,
        stem: '資本金是＿＿日圓。（九十萬五千）', stem_zh: '資本金是九十萬五千日圓。',
        options: [
            { text: 'きゅうじゅうまんごせん', isCorrect: true, reason: '正確！「九十万五千」無音變。' },
            { text: 'くじゅうまんいつせん', isCorrect: false, reason: '「九」讀「きゅう」，「五」讀「ご」。' },
            { text: 'きゅうじゅうばんごせん', isCorrect: false, reason: '「万」不濁音化。' },
            { text: 'きゅうじゅうまんごぜん', isCorrect: false, reason: '「五千」不濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九十万五千」無音變。', relatedRules: ['九十万の讀法', '五千の讀法'] },
        sourceItem: { value: 905000, kanji: '九十万五千', reading: 'きゅうじゅうまんごせん' }
    },
    {
        id: 'num_thousands_extra_120', category: 'numbers', subcategory: 'thousands', type: 'dialogue', isTrap: true,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'この土地はいくらですか？', speakerB: '＿＿です。（百萬八千日圓）' },
        options: [
            { text: 'ひゃくまんはちせん', isCorrect: false, reason: '陷阱！「八千」促音化。' },
            { text: 'ひゃくまんはっせん', isCorrect: true, reason: '正確！「百万八千」。' },
            { text: 'いっぴゃくまんはっせん', isCorrect: false, reason: '「百万」省略「一」。' },
            { text: 'ひゃくばんはっせん', isCorrect: false, reason: '「万」不濁音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「百万」省略「一」，「八千」促音化。', trapExplanation: '「八千」的促音化。', relatedRules: ['百万の省略', '八千の促音化'] },
        sourceItem: { value: 1008000, kanji: '百万八千', reading: 'ひゃくまんはっせん' }
    },
    {
        id: 'num_thousands_extra_121', category: 'numbers', subcategory: 'thousands', type: 'pronunciation', isTrap: true,
        stem: '「二百万三千」的正確讀音是？', stem_zh: '「二百萬三千」的正確讀音是？',
        options: [
            { text: 'にひゃくまんさんせん', isCorrect: false, reason: '陷阱！「三千」濁音化。' },
            { text: 'にひゃくまんさんぜん', isCorrect: true, reason: '正確！「二百万三千」。' },
            { text: 'にびゃくまんさんぜん', isCorrect: false, reason: '「二百」不濁音化。' },
            { text: 'ふたひゃくまんみぜん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三千」濁音化。', trapExplanation: '「三千」的濁音化。', relatedRules: ['三千の濁音化', '大數字組合'] },
        sourceItem: { value: 2003000, kanji: '二百万三千', reading: 'にひゃくまんさんぜん' }
    }
];
