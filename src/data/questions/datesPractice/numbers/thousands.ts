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
    }
];
