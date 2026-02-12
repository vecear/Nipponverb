import { DatesPracticeQuestion } from '../types';

// 書籍量詞練習題 (〜冊)
// 每個重要數字3題：發音題、單句敘述題、對話題
// 音變規則：1/8/10 促音化（っ+さ行）
// 用於：書本、筆記本、雜誌等成冊的物體

export const bookQuestions: DatesPracticeQuestion[] = [
    // ===== 1冊 的三題（促音化：いっさつ） =====
    {
        id: 'book_1_pron',
        category: 'counters',
        subcategory: 'books',
        type: 'pronunciation',
        isTrap: true,
        stem: '「一冊」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「一冊」的正確讀音是？',
        options: [
            { text: 'いっさつ', isCorrect: true, reason: '正確！「一冊{いっさつ}」發生促音化，讀作「いっさつ」。' },
            { text: 'いちさつ', isCorrect: false, reason: '陷阱！「一{いち}」的「ち」在「さ行」前變為促音「っ」。' },
            { text: 'ひとさつ', isCorrect: false, reason: '量詞「冊{さつ}」使用音讀數字。' },
            { text: 'いちざつ', isCorrect: false, reason: '「冊{さつ}」讀作「さつ」，不發生濁音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一冊{いっさつ}」讀作「いっさつ」。「一{いち}」在「さ行」量詞前發生促音化。',
            trapExplanation: '這是陷阱題。數字1搭配「さ行」開頭的量詞時，「ち」變為促音「っ」。',
            relatedRules: ['促音化規則', '「さ行」量詞的音變']
        },
        sourceItem: { value: 1, kanji: '一冊', reading: 'いっさつ' }
    },
    {
        id: 'book_1_sent',
        category: 'counters',
        subcategory: 'books',
        type: 'sentence',
        isTrap: true,
        stem: '本を＿＿読みました。',
        stem_zh: '我讀了一本書。',
        options: [
            { text: 'いちさつ', isCorrect: false, reason: '陷阱！一冊{いっさつ}需要促音化。' },
            { text: 'いっさつ', isCorrect: true, reason: '正確！「本を一冊{いっさつ}読みました」表示「讀了一本書」。' },
            { text: 'ひとつ', isCorrect: false, reason: '書籍應使用「冊{さつ}」而非「つ」。' },
            { text: 'いっぽん', isCorrect: false, reason: '「本{ほん}」用於細長物，書籍用「冊{さつ}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「本」（書）使用量詞「冊{さつ}」來計數。',
            trapExplanation: '一冊{いっさつ}固定讀「いっさつ」，「さ行」量詞的促音化規則。',
            relatedRules: ['量詞「冊{さつ}」的使用', '讀書表達']
        },
        sourceItem: { value: 1, kanji: '一冊', reading: 'いっさつ' }
    },
    {
        id: 'book_1_dial',
        category: 'counters',
        subcategory: 'books',
        type: 'dialogue',
        isTrap: false,
        stem: '今月は何冊読みましたか？',
        stem_zh: '這個月讀了幾本書？',
        dialogue: {
            speakerA: '今月は何冊読みましたか？',
            speakerB: '＿＿だけです。（只有一本）'
        },
        options: [
            { text: 'いちさつ', isCorrect: false, reason: '一冊{いっさつ}需要促音化。' },
            { text: 'いっさつ', isCorrect: true, reason: '正確！只讀了一本書。' },
            { text: 'ひとつ', isCorrect: false, reason: '書籍用「冊{さつ}」。' },
            { text: 'いっぽん', isCorrect: false, reason: '書籍用「冊{さつ}」不是「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '回答「何冊{なんさつ}」時，使用「〜冊{さつ}」來回答。',
            relatedRules: ['量詞「冊{さつ}」的使用', '何冊{なんさつ}的質問與回答']
        },
        sourceItem: { value: 1, kanji: '一冊', reading: 'いっさつ' }
    },

    // ===== 2冊 的三題（無音變：にさつ） =====
    {
        id: 'book_2_pron',
        category: 'counters',
        subcategory: 'books',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二冊」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「二冊」的正確讀音是？',
        options: [
            { text: 'にさつ', isCorrect: true, reason: '正確！「二冊{にさつ}」無音變，讀作「にさつ」。' },
            { text: 'にっさつ', isCorrect: false, reason: '2冊{にさつ}不發生促音化。' },
            { text: 'ふたさつ', isCorrect: false, reason: '量詞「冊{さつ}」使用音讀數字「に」。' },
            { text: 'にざつ', isCorrect: false, reason: '「冊{さつ}」不發生濁音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二冊{にさつ}」讀作「にさつ」，無音變。數字2不觸發促音化。',
            relatedRules: ['量詞「冊{さつ}」的音變規則', '無音變の數字']
        },
        sourceItem: { value: 2, kanji: '二冊', reading: 'にさつ' }
    },
    {
        id: 'book_2_sent',
        category: 'counters',
        subcategory: 'books',
        type: 'sentence',
        isTrap: false,
        stem: 'ノートを＿＿買いました。',
        stem_zh: '我買了兩本筆記本。',
        options: [
            { text: 'にっさつ', isCorrect: false, reason: '2冊{にさつ}不促音化。' },
            { text: 'にさつ', isCorrect: true, reason: '正確！「ノートを二冊{にさつ}」表示「兩本筆記本」。' },
            { text: 'ふたつ', isCorrect: false, reason: '筆記本是成冊的，用「冊{さつ}」。' },
            { text: 'にまい', isCorrect: false, reason: '「枚{まい}」用於扁平物。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ノート」（筆記本）是成冊的，使用量詞「冊{さつ}」。',
            relatedRules: ['量詞「冊{さつ}」的使用', '文具の計數']
        },
        sourceItem: { value: 2, kanji: '二冊', reading: 'にさつ' }
    },
    {
        id: 'book_2_dial',
        category: 'counters',
        subcategory: 'books',
        type: 'dialogue',
        isTrap: false,
        stem: '教科書は何冊必要ですか？',
        stem_zh: '需要幾本教科書？',
        dialogue: {
            speakerA: '教科書は何冊必要ですか？',
            speakerB: '＿＿必要です。（兩本）'
        },
        options: [
            { text: 'にっさつ', isCorrect: false, reason: '2冊{にさつ}不促音化。' },
            { text: 'にさつ', isCorrect: true, reason: '正確！需要兩本教科書。' },
            { text: 'ふたつ', isCorrect: false, reason: '教科書用「冊{さつ}」。' },
            { text: 'にまい', isCorrect: false, reason: '教科書不是扁平物。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「教科書」使用量詞「冊{さつ}」。',
            relatedRules: ['量詞「冊{さつ}」的使用', '學校用品']
        },
        sourceItem: { value: 2, kanji: '二冊', reading: 'にさつ' }
    },

    // ===== 3冊 的三題 =====
    {
        id: 'book_3_pron',
        category: 'counters',
        subcategory: 'books',
        type: 'pronunciation',
        isTrap: false,
        stem: '「三冊」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「三冊」的正確讀音是？',
        options: [
            { text: 'さんさつ', isCorrect: true, reason: '正確！「三冊{さんさつ}」無音變，讀作「さんさつ」。' },
            { text: 'さんざつ', isCorrect: false, reason: '「冊{さつ}」不發生濁音化。' },
            { text: 'みさつ', isCorrect: false, reason: '量詞「冊{さつ}」使用音讀數字「さん」。' },
            { text: 'さっさつ', isCorrect: false, reason: '3冊{さんさつ}不發生促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三冊{さんさつ}」讀作「さんさつ」，無音變。注意與「三本{さんぼん}」不同，「冊{さつ}」不濁音化。',
            relatedRules: ['量詞「冊{さつ}」的音變規則', '「冊{さつ}」vs「本{ほん}」的音變差異']
        },
        sourceItem: { value: 3, kanji: '三冊', reading: 'さんさつ' }
    },
    {
        id: 'book_3_sent',
        category: 'counters',
        subcategory: 'books',
        type: 'sentence',
        isTrap: true,
        stem: '雑誌を＿＿持っています。',
        stem_zh: '我有三本雜誌。',
        options: [
            { text: 'さんぼん', isCorrect: false, reason: '陷阱！雜誌是成冊的，用「冊{さつ}」不是「本{ほん}」。' },
            { text: 'さんさつ', isCorrect: true, reason: '正確！「雑誌を三冊{さんさつ}」表示「三本雜誌」。' },
            { text: 'さんざつ', isCorrect: false, reason: '「冊{さつ}」不發生濁音化。' },
            { text: 'みっつ', isCorrect: false, reason: '雜誌是成冊的，應使用「冊{さつ}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「雑誌」（雜誌）是成冊的，使用量詞「冊{さつ}」。',
            trapExplanation: '即使數字3搭配「本{ほん}」會濁音化，「冊{さつ}」不受影響。',
            relatedRules: ['量詞「冊{さつ}」的使用', '出版物の計數']
        },
        sourceItem: { value: 3, kanji: '三冊', reading: 'さんさつ' }
    },
    {
        id: 'book_3_dial',
        category: 'counters',
        subcategory: 'books',
        type: 'dialogue',
        isTrap: false,
        stem: '漫画は何冊ありますか？',
        stem_zh: '有幾本漫畫？',
        dialogue: {
            speakerA: '漫画は何冊ありますか？',
            speakerB: '＿＿あります。（三本）'
        },
        options: [
            { text: 'さんぼん', isCorrect: false, reason: '漫畫用「冊{さつ}」。' },
            { text: 'さんさつ', isCorrect: true, reason: '正確！有三本漫畫。' },
            { text: 'さんざつ', isCorrect: false, reason: '「冊{さつ}」不濁音化。' },
            { text: 'みっつ', isCorrect: false, reason: '漫畫是成冊的，用「冊{さつ}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「漫画」（漫畫）是成冊的，使用量詞「冊{さつ}」。',
            relatedRules: ['量詞「冊{さつ}」的使用', '出版物の計數']
        },
        sourceItem: { value: 3, kanji: '三冊', reading: 'さんさつ' }
    },

    // ===== 5冊 的三題 =====
    {
        id: 'book_5_pron',
        category: 'counters',
        subcategory: 'books',
        type: 'pronunciation',
        isTrap: false,
        stem: '「五冊」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「五冊」的正確讀音是？',
        options: [
            { text: 'ごさつ', isCorrect: true, reason: '正確！「五冊{ごさつ}」無音變，讀作「ごさつ」。' },
            { text: 'ごっさつ', isCorrect: false, reason: '5冊{ごさつ}不發生促音化。' },
            { text: 'いつさつ', isCorrect: false, reason: '量詞「冊{さつ}」使用音讀數字「ご」。' },
            { text: 'ござつ', isCorrect: false, reason: '「冊{さつ}」不發生濁音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五冊{ごさつ}」讀作「ごさつ」，無音變。',
            relatedRules: ['量詞「冊{さつ}」的使用', '無音變の量詞']
        },
        sourceItem: { value: 5, kanji: '五冊', reading: 'ごさつ' }
    },
    {
        id: 'book_5_sent',
        category: 'counters',
        subcategory: 'books',
        type: 'sentence',
        isTrap: false,
        stem: '図書館で本を＿＿借りました。',
        stem_zh: '在圖書館借了五本書。',
        options: [
            { text: 'ごっさつ', isCorrect: false, reason: '5冊{ごさつ}不促音化。' },
            { text: 'ごさつ', isCorrect: true, reason: '正確！「本を五冊{ごさつ}借りました」表示「借了五本書」。' },
            { text: 'ごほん', isCorrect: false, reason: '書籍用「冊{さつ}」不是「本{ほん}」。' },
            { text: 'いつつ', isCorrect: false, reason: '書籍應使用「冊{さつ}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '在圖書館借書時使用量詞「冊{さつ}」。',
            relatedRules: ['量詞「冊{さつ}」的使用', '圖書館表達']
        },
        sourceItem: { value: 5, kanji: '五冊', reading: 'ごさつ' }
    },
    {
        id: 'book_5_dial',
        category: 'counters',
        subcategory: 'books',
        type: 'dialogue',
        isTrap: false,
        stem: '日本語の教科書は何冊持っていますか？',
        stem_zh: '你有幾本日語教科書？',
        dialogue: {
            speakerA: '日本語の教科書は何冊持っていますか？',
            speakerB: '＿＿持っています。（五本）'
        },
        options: [
            { text: 'ごっさつ', isCorrect: false, reason: '5冊{ごさつ}不促音化。' },
            { text: 'ごさつ', isCorrect: true, reason: '正確！有五本日語教科書。' },
            { text: 'ごほん', isCorrect: false, reason: '教科書用「冊{さつ}」。' },
            { text: 'いつつ', isCorrect: false, reason: '教科書是成冊的，用「冊{さつ}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「教科書」使用量詞「冊{さつ}」。',
            relatedRules: ['量詞「冊{さつ}」的使用', '學習用品']
        },
        sourceItem: { value: 5, kanji: '五冊', reading: 'ごさつ' }
    },

    // ===== 8冊 的三題（促音化：はっさつ） =====
    {
        id: 'book_8_pron',
        category: 'counters',
        subcategory: 'books',
        type: 'pronunciation',
        isTrap: true,
        stem: '「八冊」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「八冊」的正確讀音是？',
        options: [
            { text: 'はっさつ', isCorrect: true, reason: '正確！「八冊{はっさつ}」發生促音化，讀作「はっさつ」。' },
            { text: 'はちさつ', isCorrect: false, reason: '陷阱！「八{はち}」的「ち」在「さ行」前變為促音「っ」。' },
            { text: 'やさつ', isCorrect: false, reason: '量詞「冊{さつ}」使用音讀數字「はち」。' },
            { text: 'はちざつ', isCorrect: false, reason: '「冊{さつ}」不發生濁音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八冊{はっさつ}」讀作「はっさつ」。「八{はち}」在「さ行」量詞前發生促音化。',
            trapExplanation: '這是陷阱題。數字8搭配「さ行」開頭的量詞時，「ち」變為促音「っ」。',
            relatedRules: ['促音化規則', '「さ行」量詞的音變']
        },
        sourceItem: { value: 8, kanji: '八冊', reading: 'はっさつ' }
    },
    {
        id: 'book_8_sent',
        category: 'counters',
        subcategory: 'books',
        type: 'sentence',
        isTrap: true,
        stem: '小説を＿＿買いました。',
        stem_zh: '我買了八本小說。',
        options: [
            { text: 'はちさつ', isCorrect: false, reason: '陷阱！8冊{はっさつ}需要促音化。' },
            { text: 'はっさつ', isCorrect: true, reason: '正確！「小説を八冊{はっさつ}」表示「八本小說」。' },
            { text: 'やっつ', isCorrect: false, reason: '小說是成冊的，用「冊{さつ}」。' },
            { text: 'はっぽん', isCorrect: false, reason: '小說用「冊{さつ}」不是「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「小説」（小說）是成冊的，使用量詞「冊{さつ}」。',
            trapExplanation: '8冊{はっさつ}固定讀「はっさつ」，「さ行」量詞的促音化規則。',
            relatedRules: ['量詞「冊{さつ}」的使用', '出版物の計數']
        },
        sourceItem: { value: 8, kanji: '八冊', reading: 'はっさつ' }
    },
    {
        id: 'book_8_dial',
        category: 'counters',
        subcategory: 'books',
        type: 'dialogue',
        isTrap: false,
        stem: 'ハリー・ポッターは何冊ですか？',
        stem_zh: '哈利波特有幾本？',
        dialogue: {
            speakerA: 'ハリー・ポッターは全部で何冊ですか？',
            speakerB: '＿＿です。（八本）'
        },
        options: [
            { text: 'はちさつ', isCorrect: false, reason: '8冊{はっさつ}需要促音化。' },
            { text: 'はっさつ', isCorrect: true, reason: '正確！哈利波特系列共有八冊{はっさつ}（本傳七冊{ななさつ}+一冊{いっさつ}戲劇）。' },
            { text: 'やっつ', isCorrect: false, reason: '書籍用「冊{さつ}」。' },
            { text: 'はっぽん', isCorrect: false, reason: '書籍用「冊{さつ}」不是「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '書籍系列使用量詞「冊{さつ}」來計數。',
            relatedRules: ['量詞「冊{さつ}」的使用', '書籍系列']
        },
        sourceItem: { value: 8, kanji: '八冊', reading: 'はっさつ' }
    },

    // ===== 10冊 的三題（促音化：じゅっさつ） =====
    {
        id: 'book_10_pron',
        category: 'counters',
        subcategory: 'books',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十冊」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十冊」的正確讀音是？',
        options: [
            { text: 'じゅっさつ', isCorrect: true, reason: '正確！「十冊{じゅっさつ}」發生促音化，讀作「じゅっさつ」。' },
            { text: 'じゅうさつ', isCorrect: false, reason: '陷阱！10冊{じゅっさつ}需要促音化。' },
            { text: 'とおさつ', isCorrect: false, reason: '量詞「冊{さつ}」使用音讀「じゅう」。' },
            { text: 'じゅうざつ', isCorrect: false, reason: '「冊{さつ}」不發生濁音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十冊{じゅっさつ}」讀作「じゅっさつ」。「十{じゅう}」在「さ行」量詞前發生促音化。',
            trapExplanation: '這是陷阱題。數字10搭配「さ行」開頭的量詞時發生促音化。',
            relatedRules: ['促音化規則', '「さ行」量詞的音變']
        },
        sourceItem: { value: 10, kanji: '十冊', reading: 'じゅっさつ' }
    },
    {
        id: 'book_10_sent',
        category: 'counters',
        subcategory: 'books',
        type: 'sentence',
        isTrap: true,
        stem: '図書館から＿＿借りられます。',
        stem_zh: '可以從圖書館借十本書。',
        options: [
            { text: 'じゅうさつ', isCorrect: false, reason: '陷阱！10冊{じゅっさつ}需要促音化。' },
            { text: 'じゅっさつ', isCorrect: true, reason: '正確！「十冊{じゅっさつ}借りられます」表示「可以借十本」。' },
            { text: 'とお', isCorrect: false, reason: '書籍應使用「冊{さつ}」。' },
            { text: 'じゅっぽん', isCorrect: false, reason: '書籍用「冊{さつ}」不是「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '圖書館借書限制使用量詞「冊{さつ}」。',
            trapExplanation: '10冊{じゅっさつ}固定讀「じゅっさつ」，「さ行」量詞的促音化規則。',
            relatedRules: ['量詞「冊{さつ}」的使用', '圖書館規則']
        },
        sourceItem: { value: 10, kanji: '十冊', reading: 'じゅっさつ' }
    },
    {
        id: 'book_10_dial',
        category: 'counters',
        subcategory: 'books',
        type: 'dialogue',
        isTrap: false,
        stem: '今年何冊読む予定ですか？',
        stem_zh: '今年打算讀幾本書？',
        dialogue: {
            speakerA: '今年何冊読む予定ですか？',
            speakerB: '＿＿読みたいです。（十本）'
        },
        options: [
            { text: 'じゅうさつ', isCorrect: false, reason: '10冊{じゅっさつ}需要促音化。' },
            { text: 'じゅっさつ', isCorrect: true, reason: '正確！想讀十本書。' },
            { text: 'とお', isCorrect: false, reason: '書籍用「冊{さつ}」。' },
            { text: 'じゅっぽん', isCorrect: false, reason: '書籍用「冊{さつ}」不是「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '讀書計畫使用量詞「冊{さつ}」。',
            relatedRules: ['量詞「冊{さつ}」的使用', '讀書目標']
        },
        sourceItem: { value: 10, kanji: '十冊', reading: 'じゅっさつ' }
    },

    // ===== 4冊 的三題（無音變：よんさつ） =====
    {
        id: 'book_4_pron', category: 'counters', subcategory: 'books', type: 'pronunciation', isTrap: false,
        stem: '「四冊」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「四冊」的正確讀音是？',
        options: [
            { text: 'よんさつ', isCorrect: true, reason: '正確！「四冊」無音變，讀作「よんさつ」。' },
            { text: 'しさつ', isCorrect: false, reason: '「し」有死的意思，避諱，用「よん」。' },
            { text: 'よっさつ', isCorrect: false, reason: '4冊不發生促音化。' },
            { text: 'よんざつ', isCorrect: false, reason: '「冊」不發生濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四冊」讀作「よんさつ」，無音變。使用「よん」避免「し」的不吉利聯想。', relatedRules: ['量詞「冊」的音變規則', '數字4的讀法'] },
        sourceItem: { value: 4, kanji: '四冊', reading: 'よんさつ' }
    },
    {
        id: 'book_4_sent', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: false,
        stem: '週刊誌を＿＿買いました。', stem_zh: '我買了四本週刊雜誌。',
        options: [
            { text: 'しさつ', isCorrect: false, reason: '使用「よん」不是「し」。' },
            { text: 'よんさつ', isCorrect: true, reason: '正確！「週刊誌を四冊」表示「四本週刊」。' },
            { text: 'よっつ', isCorrect: false, reason: '週刊是成冊的，用「冊」。' },
            { text: 'よんまい', isCorrect: false, reason: '雜誌用「冊」不是「枚」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「週刊誌」是成冊的雜誌，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '出版物の計數'] },
        sourceItem: { value: 4, kanji: '四冊', reading: 'よんさつ' }
    },
    {
        id: 'book_4_dial', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: false,
        stem: '手帳購買', stem_zh: '手帳購買',
        dialogue: { speakerA: '手帳は何冊買いますか？', speakerB: '＿＿お願いします。（四本）' },
        options: [
            { text: 'しさつ', isCorrect: false, reason: '使用「よん」不是「し」。' },
            { text: 'よんさつ', isCorrect: true, reason: '正確！四本手帳。' },
            { text: 'よっつ', isCorrect: false, reason: '手帳是成冊的，用「冊」。' },
            { text: 'よんぽん', isCorrect: false, reason: '手帳用「冊」不是「本」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「手帳」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '文具の計數'] },
        sourceItem: { value: 4, kanji: '四冊', reading: 'よんさつ' }
    },

    // ===== 6冊 的三題（無音變：ろくさつ） =====
    {
        id: 'book_6_pron', category: 'counters', subcategory: 'books', type: 'pronunciation', isTrap: false,
        stem: '「六冊」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「六冊」的正確讀音是？',
        options: [
            { text: 'ろくさつ', isCorrect: true, reason: '正確！「六冊」無音變，讀作「ろくさつ」。' },
            { text: 'ろっさつ', isCorrect: false, reason: '6冊不發生促音化。' },
            { text: 'むさつ', isCorrect: false, reason: '量詞「冊」使用音讀數字「ろく」。' },
            { text: 'ろくざつ', isCorrect: false, reason: '「冊」不發生濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六冊」讀作「ろくさつ」，無音變。注意6搭配「本」會促音化（ろっぽん），但「冊」不會。', relatedRules: ['量詞「冊」的音變規則', '「冊」vs「本」の差異'] },
        sourceItem: { value: 6, kanji: '六冊', reading: 'ろくさつ' }
    },
    {
        id: 'book_6_sent', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: false,
        stem: '参考書を＿＿集めました。', stem_zh: '我收集了六本參考書。',
        options: [
            { text: 'ろっさつ', isCorrect: false, reason: '6冊不發生促音化。' },
            { text: 'ろくさつ', isCorrect: true, reason: '正確！「參考書を六冊」表示「六本參考書」。' },
            { text: 'むっつ', isCorrect: false, reason: '參考書是成冊的，用「冊」。' },
            { text: 'ろっぽん', isCorrect: false, reason: '參考書用「冊」不是「本」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「参考書」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '學習用品'] },
        sourceItem: { value: 6, kanji: '六冊', reading: 'ろくさつ' }
    },
    {
        id: 'book_6_dial', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: false,
        stem: '日記數量', stem_zh: '日記數量',
        dialogue: { speakerA: '日記は何冊ありますか？', speakerB: '＿＿あります。（六本）' },
        options: [
            { text: 'ろっさつ', isCorrect: false, reason: '6冊不發生促音化。' },
            { text: 'ろくさつ', isCorrect: true, reason: '正確！六本日記。' },
            { text: 'むっつ', isCorrect: false, reason: '日記是成冊的，用「冊」。' },
            { text: 'ろくぽん', isCorrect: false, reason: '日記用「冊」不是「本」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「日記」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '文具の計數'] },
        sourceItem: { value: 6, kanji: '六冊', reading: 'ろくさつ' }
    },

    // ===== 7冊 的三題（無音變：ななさつ） =====
    {
        id: 'book_7_pron', category: 'counters', subcategory: 'books', type: 'pronunciation', isTrap: false,
        stem: '「七冊」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「七冊」的正確讀音是？',
        options: [
            { text: 'ななさつ', isCorrect: true, reason: '正確！「七冊」無音變，讀作「ななさつ」。' },
            { text: 'しちさつ', isCorrect: false, reason: '「しち」較少使用，通常用「なな」。' },
            { text: 'なっさつ', isCorrect: false, reason: '7冊不發生促音化。' },
            { text: 'ななざつ', isCorrect: false, reason: '「冊」不發生濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七冊」讀作「ななさつ」，無音變。', relatedRules: ['量詞「冊」的音變規則', '數字7的讀法'] },
        sourceItem: { value: 7, kanji: '七冊', reading: 'ななさつ' }
    },
    {
        id: 'book_7_sent', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: false,
        stem: '図鑑を＿＿持っています。', stem_zh: '我有七本圖鑑。',
        options: [
            { text: 'しちさつ', isCorrect: false, reason: '通常用「なな」。' },
            { text: 'ななさつ', isCorrect: true, reason: '正確！「圖鑑を七冊」表示「七本圖鑑」。' },
            { text: 'ななつ', isCorrect: false, reason: '圖鑑是成冊的，用「冊」。' },
            { text: 'ななほん', isCorrect: false, reason: '圖鑑用「冊」不是「本」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「図鑑」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '出版物の計數'] },
        sourceItem: { value: 7, kanji: '七冊', reading: 'ななさつ' }
    },
    {
        id: 'book_7_dial', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: false,
        stem: '繪本數量', stem_zh: '繪本數量',
        dialogue: { speakerA: '絵本は何冊ありますか？', speakerB: '＿＿あります。（七本）' },
        options: [
            { text: 'しちさつ', isCorrect: false, reason: '通常用「なな」。' },
            { text: 'ななさつ', isCorrect: true, reason: '正確！七本繪本。' },
            { text: 'ななつ', isCorrect: false, reason: '繪本是成冊的，用「冊」。' },
            { text: 'ななぽん', isCorrect: false, reason: '繪本用「冊」不是「本」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「絵本」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '兒童書籍'] },
        sourceItem: { value: 7, kanji: '七冊', reading: 'ななさつ' }
    },

    // ===== 9冊 的三題（無音變：きゅうさつ） =====
    {
        id: 'book_9_pron', category: 'counters', subcategory: 'books', type: 'pronunciation', isTrap: false,
        stem: '「九冊」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「九冊」的正確讀音是？',
        options: [
            { text: 'きゅうさつ', isCorrect: true, reason: '正確！「九冊」無音變，讀作「きゅうさつ」。' },
            { text: 'くさつ', isCorrect: false, reason: '量詞「冊」使用音讀「きゅう」。' },
            { text: 'きゅっさつ', isCorrect: false, reason: '9冊不發生促音化。' },
            { text: 'きゅうざつ', isCorrect: false, reason: '「冊」不發生濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九冊」讀作「きゅうさつ」，無音變。', relatedRules: ['量詞「冊」的音變規則', '無音變の數字'] },
        sourceItem: { value: 9, kanji: '九冊', reading: 'きゅうさつ' }
    },
    {
        id: 'book_9_sent', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: false,
        stem: '料理本を＿＿持っています。', stem_zh: '我有九本食譜書。',
        options: [
            { text: 'くさつ', isCorrect: false, reason: '使用「きゅう」。' },
            { text: 'きゅうさつ', isCorrect: true, reason: '正確！「料理本を九冊」表示「九本食譜書」。' },
            { text: 'ここのつ', isCorrect: false, reason: '食譜是成冊的，用「冊」。' },
            { text: 'きゅうほん', isCorrect: false, reason: '書籍用「冊」不是「本」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「料理本」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '出版物の計數'] },
        sourceItem: { value: 9, kanji: '九冊', reading: 'きゅうさつ' }
    },
    {
        id: 'book_9_dial', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: false,
        stem: '字典數量', stem_zh: '字典數量',
        dialogue: { speakerA: '辞書は何冊持っていますか？', speakerB: '＿＿持っています。（九本）' },
        options: [
            { text: 'くさつ', isCorrect: false, reason: '使用「きゅう」。' },
            { text: 'きゅうさつ', isCorrect: true, reason: '正確！九本字典。' },
            { text: 'ここのつ', isCorrect: false, reason: '字典是成冊的，用「冊」。' },
            { text: 'きゅうほん', isCorrect: false, reason: '字典用「冊」不是「本」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「辞書」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '參考書籍'] },
        sourceItem: { value: 9, kanji: '九冊', reading: 'きゅうさつ' }
    },

    // ===== 補充：疑問詞「何冊」的題目 =====
    {
        id: 'book_nan_pron',
        category: 'counters',
        subcategory: 'books',
        type: 'pronunciation',
        isTrap: false,
        stem: '「何冊」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「何冊」的正確讀音是？',
        options: [
            { text: 'なんさつ', isCorrect: true, reason: '正確！「何冊{なんさつ}」無音變，讀作「なんさつ」。' },
            { text: 'なんざつ', isCorrect: false, reason: '「冊{さつ}」不發生濁音化。' },
            { text: 'なにさつ', isCorrect: false, reason: '搭配量詞時，「何」讀作「なん」。' },
            { text: 'なっさつ', isCorrect: false, reason: '疑問詞「何」不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何冊{なんさつ}」讀作「なんさつ」。量詞「冊{さつ}」不受撥音「ん」影響，不發生音變。',
            relatedRules: ['疑問詞的讀法', '「何{なん}＋量詞」的讀法']
        },
        sourceItem: { value: '?', kanji: '何冊', reading: 'なんさつ' }
    },

    // ===== 擴展數字題目 =====
    {
        id: 'book_11_sent', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: true,
        stem: '新書を＿＿購入しました。', stem_zh: '購買了十一本新書。',
        options: [
            { text: 'じゅういちさつ', isCorrect: false, reason: '陷阱！11冊需要促音化。' },
            { text: 'じゅういっさつ', isCorrect: true, reason: '正確！十一冊的「いち」促音化為「いっ」。' },
            { text: 'じゅういっぽん', isCorrect: false, reason: '書籍用「冊」不是「本」。' },
            { text: 'とういっさつ', isCorrect: false, reason: '使用「じゅう」不是「とう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '11冊讀作「じゅういっさつ」，個位數1觸發促音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 11, kanji: '十一冊', reading: 'じゅういっさつ' }
    },
    {
        id: 'book_12_dial', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: false,
        stem: '一年讀書量', stem_zh: '一年讀書量',
        dialogue: { speakerA: '年間何冊読みましたか？', speakerB: '＿＿読みました。（十二本）' },
        options: [
            { text: 'じゅうにっさつ', isCorrect: false, reason: '12冊不促音化。' },
            { text: 'じゅうにさつ', isCorrect: true, reason: '正確！十二本書。' },
            { text: 'じゅうにほん', isCorrect: false, reason: '書籍用「冊」。' },
            { text: 'とうにさつ', isCorrect: false, reason: '使用「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '12冊讀作「じゅうにさつ」，無音變。', relatedRules: ['量詞「冊」的使用', '複合數字'] },
        sourceItem: { value: 12, kanji: '十二冊', reading: 'じゅうにさつ' }
    },
    {
        id: 'book_15_sent', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: false,
        stem: '文庫本を＿＿読みました。', stem_zh: '讀了十五本文庫本。',
        options: [
            { text: 'じゅうごっさつ', isCorrect: false, reason: '15冊不促音化。' },
            { text: 'じゅうごさつ', isCorrect: true, reason: '正確！十五本文庫本。' },
            { text: 'じゅうごほん', isCorrect: false, reason: '書籍用「冊」。' },
            { text: 'いつさつ', isCorrect: false, reason: '這是15冊，不是5冊。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「文庫本」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '出版物の計數'] },
        sourceItem: { value: 15, kanji: '十五冊', reading: 'じゅうごさつ' }
    },
    {
        id: 'book_18_dial', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: true,
        stem: '專題報告', stem_zh: '專題報告',
        dialogue: { speakerA: '論文集は何冊ですか？', speakerB: '＿＿です。（十八本）' },
        options: [
            { text: 'じゅうはちさつ', isCorrect: false, reason: '陷阱！18冊需要促音化。' },
            { text: 'じゅうはっさつ', isCorrect: true, reason: '正確！十八本論文集。' },
            { text: 'じゅうはちほん', isCorrect: false, reason: '論文集用「冊」。' },
            { text: 'じゅうやさつ', isCorrect: false, reason: '使用「はち」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '18冊讀作「じゅうはっさつ」，個位數8觸發促音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 18, kanji: '十八冊', reading: 'じゅうはっさつ' }
    },
    {
        id: 'book_20_sent', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: true,
        stem: '電子書籍を＿＿ダウンロードしました。', stem_zh: '下載了二十本電子書。',
        options: [
            { text: 'にじゅうさつ', isCorrect: false, reason: '陷阱！20冊需要促音化。' },
            { text: 'にじゅっさつ', isCorrect: true, reason: '正確！二十本電子書。' },
            { text: 'にじゅっぽん', isCorrect: false, reason: '書籍用「冊」。' },
            { text: 'はたさつ', isCorrect: false, reason: '使用「にじゅう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '20冊讀作「にじゅっさつ」，十位數10觸發促音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 20, kanji: '二十冊', reading: 'にじゅっさつ' }
    },
    {
        id: 'book_21_dial', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: true,
        stem: '漫畫系列', stem_zh: '漫畫系列',
        dialogue: { speakerA: 'この漫画シリーズは全部で何冊ですか？', speakerB: '＿＿です。（二十一本）' },
        options: [
            { text: 'にじゅういちさつ', isCorrect: false, reason: '陷阱！21冊需要促音化。' },
            { text: 'にじゅういっさつ', isCorrect: true, reason: '正確！二十一本漫畫。' },
            { text: 'にじゅういっぽん', isCorrect: false, reason: '漫畫用「冊」。' },
            { text: 'にじゅうひとさつ', isCorrect: false, reason: '使用音讀「いち」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '21冊讀作「にじゅういっさつ」，個位數1觸發促音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 21, kanji: '二十一冊', reading: 'にじゅういっさつ' }
    },
    {
        id: 'book_30_sent', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: true,
        stem: '蔵書を＿＿処分しました。', stem_zh: '處理了三十本藏書。',
        options: [
            { text: 'さんじゅうさつ', isCorrect: false, reason: '陷阱！30冊需要促音化。' },
            { text: 'さんじゅっさつ', isCorrect: true, reason: '正確！三十本藏書。' },
            { text: 'さんじゅうほん', isCorrect: false, reason: '書籍用「冊」。' },
            { text: 'みそさつ', isCorrect: false, reason: '使用「さんじゅう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '30冊讀作「さんじゅっさつ」，十位數10觸發促音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 30, kanji: '三十冊', reading: 'さんじゅっさつ' }
    },
    {
        id: 'book_50_dial', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: true,
        stem: '捐書活動', stem_zh: '捐書活動',
        dialogue: { speakerA: '何冊寄付しましたか？', speakerB: '＿＿寄付しました。（五十本）' },
        options: [
            { text: 'ごじゅうさつ', isCorrect: false, reason: '陷阱！50冊需要促音化。' },
            { text: 'ごじゅっさつ', isCorrect: true, reason: '正確！捐了五十本書。' },
            { text: 'ごじゅっぽん', isCorrect: false, reason: '書籍用「冊」。' },
            { text: 'いそさつ', isCorrect: false, reason: '使用「ごじゅう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '50冊讀作「ごじゅっさつ」，十位數10觸發促音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 50, kanji: '五十冊', reading: 'ごじゅっさつ' }
    },
    {
        id: 'book_100_sent', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: true,
        stem: '図書館に＿＿以上の本があります。', stem_zh: '圖書館有超過一百本書。',
        options: [
            { text: 'ひゃくさつ', isCorrect: false, reason: '陷阱！100冊需要促音化。' },
            { text: 'ひゃっさつ', isCorrect: true, reason: '正確！「百」的「く」促音化。' },
            { text: 'ひゃっぽん', isCorrect: false, reason: '書籍用「冊」。' },
            { text: 'ももさつ', isCorrect: false, reason: '使用音讀「ひゃく」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '100冊讀作「ひゃっさつ」，「百」在「さ行」前促音化。', relatedRules: ['促音化規則', '百以上の數字'] },
        sourceItem: { value: 100, kanji: '百冊', reading: 'ひゃっさつ' }
    },

    // ===== 各種情境題目 =====
    {
        id: 'book_context_1', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: false,
        stem: 'アルバムを＿＿作りました。', stem_zh: '做了三本相簿。',
        options: [
            { text: 'さんぼん', isCorrect: false, reason: '相簿用「冊」。' },
            { text: 'さんさつ', isCorrect: true, reason: '正確！三本相簿。' },
            { text: 'みっつ', isCorrect: false, reason: '相簿是成冊的。' },
            { text: 'さんまい', isCorrect: false, reason: '「枚」用於扁平物。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「アルバム」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用'] },
        sourceItem: { value: 3, kanji: '三冊', reading: 'さんさつ' }
    },
    {
        id: 'book_context_2', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: false,
        stem: '寫真集購買', stem_zh: '寫真集購買',
        dialogue: { speakerA: '写真集は何冊買いますか？', speakerB: '＿＿お願いします。（兩本）' },
        options: [
            { text: 'にほん', isCorrect: false, reason: '寫真集用「冊」。' },
            { text: 'にさつ', isCorrect: true, reason: '正確！兩本寫真集。' },
            { text: 'ふたつ', isCorrect: false, reason: '寫真集是成冊的。' },
            { text: 'にまい', isCorrect: false, reason: '「枚」用於扁平物。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「写真集」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '出版物の計數'] },
        sourceItem: { value: 2, kanji: '二冊', reading: 'にさつ' }
    },
    {
        id: 'book_context_3', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: false,
        stem: 'スケジュール帳を＿＿使っています。', stem_zh: '正在使用四本行事曆。',
        options: [
            { text: 'よんほん', isCorrect: false, reason: '行事曆用「冊」。' },
            { text: 'よんさつ', isCorrect: true, reason: '正確！四本行事曆。' },
            { text: 'よっつ', isCorrect: false, reason: '行事曆是成冊的。' },
            { text: 'しさつ', isCorrect: false, reason: '使用「よん」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「スケジュール帳」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '文具の計數'] },
        sourceItem: { value: 4, kanji: '四冊', reading: 'よんさつ' }
    },
    {
        id: 'book_context_4', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: false,
        stem: '地圖冊數量', stem_zh: '地圖冊數量',
        dialogue: { speakerA: '地図帳は何冊ありますか？', speakerB: '＿＿あります。（五本）' },
        options: [
            { text: 'ごほん', isCorrect: false, reason: '地圖冊用「冊」。' },
            { text: 'ごさつ', isCorrect: true, reason: '正確！五本地圖冊。' },
            { text: 'いつつ', isCorrect: false, reason: '地圖冊是成冊的。' },
            { text: 'ごまい', isCorrect: false, reason: '「枚」用於扁平物。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「地図帳」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '參考書籍'] },
        sourceItem: { value: 5, kanji: '五冊', reading: 'ごさつ' }
    },
    {
        id: 'book_context_5', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: false,
        stem: 'カタログを＿＿集めました。', stem_zh: '收集了六本目錄。',
        options: [
            { text: 'ろっぽん', isCorrect: false, reason: '目錄用「冊」。' },
            { text: 'ろくさつ', isCorrect: true, reason: '正確！六本目錄。' },
            { text: 'むっつ', isCorrect: false, reason: '目錄是成冊的。' },
            { text: 'ろくまい', isCorrect: false, reason: '「枚」用於扁平物。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「カタログ」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '印刷物の計數'] },
        sourceItem: { value: 6, kanji: '六冊', reading: 'ろくさつ' }
    },
    {
        id: 'book_context_6', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: false,
        stem: '說明書數量', stem_zh: '說明書數量',
        dialogue: { speakerA: '取扱説明書は何冊ですか？', speakerB: '＿＿です。（七本）' },
        options: [
            { text: 'しちほん', isCorrect: false, reason: '說明書用「冊」。' },
            { text: 'ななさつ', isCorrect: true, reason: '正確！七本說明書。' },
            { text: 'ななつ', isCorrect: false, reason: '說明書是成冊的。' },
            { text: 'ななまい', isCorrect: false, reason: '「枚」用於扁平物。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「取扱説明書」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '說明書類'] },
        sourceItem: { value: 7, kanji: '七冊', reading: 'ななさつ' }
    },
    {
        id: 'book_context_7', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: true,
        stem: 'パンフレットを＿＿もらいました。', stem_zh: '拿到了八本小冊子。',
        options: [
            { text: 'はちさつ', isCorrect: false, reason: '陷阱！8冊需要促音化。' },
            { text: 'はっさつ', isCorrect: true, reason: '正確！八本小冊子。' },
            { text: 'やっつ', isCorrect: false, reason: '小冊子是成冊的。' },
            { text: 'はちまい', isCorrect: false, reason: '「枚」用於扁平物。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「パンフレット」是成冊的，使用量詞「冊」。8冊需要促音化。', relatedRules: ['量詞「冊」的使用', '促音化規則'] },
        sourceItem: { value: 8, kanji: '八冊', reading: 'はっさつ' }
    },
    {
        id: 'book_context_8', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: false,
        stem: '詩集收藏', stem_zh: '詩集收藏',
        dialogue: { speakerA: '詩集は何冊持っていますか？', speakerB: '＿＿持っています。（九本）' },
        options: [
            { text: 'くほん', isCorrect: false, reason: '詩集用「冊」，使用「きゅう」。' },
            { text: 'きゅうさつ', isCorrect: true, reason: '正確！九本詩集。' },
            { text: 'ここのつ', isCorrect: false, reason: '詩集是成冊的。' },
            { text: 'きゅうほん', isCorrect: false, reason: '詩集用「冊」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「詩集」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '出版物の計數'] },
        sourceItem: { value: 9, kanji: '九冊', reading: 'きゅうさつ' }
    },
    {
        id: 'book_context_9', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: true,
        stem: '報告書を＿＿提出しました。', stem_zh: '提交了十份報告書。',
        options: [
            { text: 'じゅうさつ', isCorrect: false, reason: '陷阱！10冊需要促音化。' },
            { text: 'じゅっさつ', isCorrect: true, reason: '正確！十份報告書。' },
            { text: 'とお', isCorrect: false, reason: '報告書是成冊的。' },
            { text: 'じゅっぽん', isCorrect: false, reason: '報告書用「冊」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「報告書」是成冊的，使用量詞「冊」。10冊需要促音化。', relatedRules: ['量詞「冊」的使用', '促音化規則'] },
        sourceItem: { value: 10, kanji: '十冊', reading: 'じゅっさつ' }
    },
    {
        id: 'book_context_10', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: false,
        stem: '繪本收集', stem_zh: '繪本收集',
        dialogue: { speakerA: 'お子さんの絵本は何冊ありますか？', speakerB: '＿＿あります。（二十五本）' },
        options: [
            { text: 'にじゅうごほん', isCorrect: false, reason: '繪本用「冊」。' },
            { text: 'にじゅうごさつ', isCorrect: true, reason: '正確！二十五本繪本。' },
            { text: 'にじゅうご', isCorrect: false, reason: '需要量詞「冊」。' },
            { text: 'はたごさつ', isCorrect: false, reason: '使用「にじゅうご」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「絵本」是成冊的，使用量詞「冊」。25不觸發促音化。', relatedRules: ['量詞「冊」的使用', '複合數字'] },
        sourceItem: { value: 25, kanji: '二十五冊', reading: 'にじゅうごさつ' }
    },
    {
        id: 'book_context_11', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: false,
        stem: 'ガイドブックを＿＿買いました。', stem_zh: '買了三本旅遊指南。',
        options: [
            { text: 'さんぼん', isCorrect: false, reason: '旅遊指南用「冊」。' },
            { text: 'さんさつ', isCorrect: true, reason: '正確！三本旅遊指南。' },
            { text: 'みっつ', isCorrect: false, reason: '旅遊指南是成冊的。' },
            { text: 'さんまい', isCorrect: false, reason: '「枚」用於扁平物。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ガイドブック」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '旅遊用品'] },
        sourceItem: { value: 3, kanji: '三冊', reading: 'さんさつ' }
    },
    {
        id: 'book_context_12', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: false,
        stem: '年鑑數量', stem_zh: '年鑑數量',
        dialogue: { speakerA: '年鑑は何冊保存していますか？', speakerB: '＿＿保存しています。（十五本）' },
        options: [
            { text: 'じゅうごほん', isCorrect: false, reason: '年鑑用「冊」。' },
            { text: 'じゅうごさつ', isCorrect: true, reason: '正確！十五本年鑑。' },
            { text: 'じゅうご', isCorrect: false, reason: '需要量詞「冊」。' },
            { text: 'じゅうごまい', isCorrect: false, reason: '「枚」用於扁平物。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「年鑑」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '出版物の計數'] },
        sourceItem: { value: 15, kanji: '十五冊', reading: 'じゅうごさつ' }
    },
    {
        id: 'book_context_13', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: false,
        stem: '楽譜を＿＿持っています。', stem_zh: '我有四本樂譜。',
        options: [
            { text: 'しさつ', isCorrect: false, reason: '使用「よん」。' },
            { text: 'よんさつ', isCorrect: true, reason: '正確！四本樂譜。' },
            { text: 'よっつ', isCorrect: false, reason: '樂譜是成冊的。' },
            { text: 'よんまい', isCorrect: false, reason: '「枚」用於扁平物。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「楽譜」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '音樂用品'] },
        sourceItem: { value: 4, kanji: '四冊', reading: 'よんさつ' }
    },
    {
        id: 'book_context_14', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: false,
        stem: '作文本數量', stem_zh: '作文本數量',
        dialogue: { speakerA: '作文ノートは何冊使いましたか？', speakerB: '＿＿使いました。（六本）' },
        options: [
            { text: 'ろっぽん', isCorrect: false, reason: '作文本用「冊」。' },
            { text: 'ろくさつ', isCorrect: true, reason: '正確！六本作文本。' },
            { text: 'むっつ', isCorrect: false, reason: '作文本是成冊的。' },
            { text: 'ろっさつ', isCorrect: false, reason: '6冊不促音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「作文ノート」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '文具の計數'] },
        sourceItem: { value: 6, kanji: '六冊', reading: 'ろくさつ' }
    },
    {
        id: 'book_context_15', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: false,
        stem: '単語帳を＿＿終わらせました。', stem_zh: '完成了七本單字簿。',
        options: [
            { text: 'しちさつ', isCorrect: false, reason: '通常用「なな」。' },
            { text: 'ななさつ', isCorrect: true, reason: '正確！七本單字簿。' },
            { text: 'ななつ', isCorrect: false, reason: '單字簿是成冊的。' },
            { text: 'ななほん', isCorrect: false, reason: '單字簿用「冊」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「単語帳」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '學習用品'] },
        sourceItem: { value: 7, kanji: '七冊', reading: 'ななさつ' }
    },
    {
        id: 'book_context_16', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: true,
        stem: '工作手冊', stem_zh: '工作手冊',
        dialogue: { speakerA: 'マニュアルは何冊ですか？', speakerB: '＿＿です。（八本）' },
        options: [
            { text: 'はちさつ', isCorrect: false, reason: '陷阱！8冊需要促音化。' },
            { text: 'はっさつ', isCorrect: true, reason: '正確！八本工作手冊。' },
            { text: 'やっつ', isCorrect: false, reason: '工作手冊是成冊的。' },
            { text: 'はっぽん', isCorrect: false, reason: '工作手冊用「冊」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「マニュアル」是成冊的，使用量詞「冊」。8冊需要促音化。', relatedRules: ['量詞「冊」的使用', '促音化規則'] },
        sourceItem: { value: 8, kanji: '八冊', reading: 'はっさつ' }
    },
    {
        id: 'book_context_17', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: false,
        stem: '自伝を＿＿読みました。', stem_zh: '讀了九本自傳。',
        options: [
            { text: 'くさつ', isCorrect: false, reason: '使用「きゅう」。' },
            { text: 'きゅうさつ', isCorrect: true, reason: '正確！九本自傳。' },
            { text: 'ここのつ', isCorrect: false, reason: '自傳是成冊的。' },
            { text: 'きゅうほん', isCorrect: false, reason: '自傳用「冊」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「自伝」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '出版物の計數'] },
        sourceItem: { value: 9, kanji: '九冊', reading: 'きゅうさつ' }
    },
    {
        id: 'book_context_18', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: true,
        stem: '畫集收藏', stem_zh: '畫集收藏',
        dialogue: { speakerA: '画集は何冊お持ちですか？', speakerB: '＿＿持っています。（十本）' },
        options: [
            { text: 'じゅうさつ', isCorrect: false, reason: '陷阱！10冊需要促音化。' },
            { text: 'じゅっさつ', isCorrect: true, reason: '正確！十本畫集。' },
            { text: 'とお', isCorrect: false, reason: '畫集是成冊的。' },
            { text: 'じゅっぽん', isCorrect: false, reason: '畫集用「冊」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「画集」是成冊的，使用量詞「冊」。10冊需要促音化。', relatedRules: ['量詞「冊」的使用', '促音化規則'] },
        sourceItem: { value: 10, kanji: '十冊', reading: 'じゅっさつ' }
    },
    {
        id: 'book_context_19', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: false,
        stem: 'ワークブックを＿＿やりました。', stem_zh: '完成了兩本練習冊。',
        options: [
            { text: 'にっさつ', isCorrect: false, reason: '2冊不促音化。' },
            { text: 'にさつ', isCorrect: true, reason: '正確！兩本練習冊。' },
            { text: 'ふたつ', isCorrect: false, reason: '練習冊是成冊的。' },
            { text: 'にほん', isCorrect: false, reason: '練習冊用「冊」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ワークブック」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '學習用品'] },
        sourceItem: { value: 2, kanji: '二冊', reading: 'にさつ' }
    },
    {
        id: 'book_context_20', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: false,
        stem: '百科全書', stem_zh: '百科全書',
        dialogue: { speakerA: '百科事典は何冊ですか？', speakerB: '＿＿です。（十二卷）' },
        options: [
            { text: 'じゅうにほん', isCorrect: false, reason: '百科全書用「冊」。' },
            { text: 'じゅうにさつ', isCorrect: true, reason: '正確！十二卷百科全書。' },
            { text: 'じゅうに', isCorrect: false, reason: '需要量詞「冊」。' },
            { text: 'じゅうにまい', isCorrect: false, reason: '「枚」用於扁平物。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「百科事典」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '參考書籍'] },
        sourceItem: { value: 12, kanji: '十二冊', reading: 'じゅうにさつ' }
    },

    // ===== 比較題與陷阱題 =====
    {
        id: 'book_compare_1', category: 'counters', subcategory: 'books', type: 'pronunciation', isTrap: true,
        stem: '以下哪個是「冊」的促音化讀法？', stem_zh: '以下哪個是「冊」的促音化讀法？',
        options: [
            { text: '一冊(いっさつ)、八冊(はっさつ)', isCorrect: true, reason: '正確！1、8、10在「さ行」前促音化。' },
            { text: '三冊(さんざつ)、何冊(なんざつ)', isCorrect: false, reason: '錯誤，「冊」不發生濁音化。' },
            { text: '六冊(ろっさつ)、七冊(なっさつ)', isCorrect: false, reason: '錯誤，6、7不觸發促音化。' },
            { text: '二冊(にっさつ)、五冊(ごっさつ)', isCorrect: false, reason: '錯誤，2、5不觸發促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「冊」的促音化只發生在1、8、10：いっさつ、はっさつ、じゅっさつ。', trapExplanation: '「冊」是「さ行」量詞，不發生濁音化。', relatedRules: ['促音化規則', '量詞「冊」の特徴'] },
        sourceItem: { value: 0, kanji: '冊比較', reading: '促音化規則' }
    },
    {
        id: 'book_compare_2', category: 'counters', subcategory: 'books', type: 'pronunciation', isTrap: true,
        stem: '「冊」與「本」的音變規則有何不同？', stem_zh: '「冊」與「本」的音變規則有何不同？',
        options: [
            { text: '三冊(さんさつ)不濁化，三本(さんぼん)要濁化', isCorrect: true, reason: '正確！「冊」不受濁音化影響，但「本」的「h」變「b」。' },
            { text: '兩者音變規則完全相同', isCorrect: false, reason: '錯誤，「本」有濁音化，「冊」沒有。' },
            { text: '三冊(さんざつ)要濁化，三本(さんほん)不濁化', isCorrect: false, reason: '錯誤，正好相反。' },
            { text: '兩者都不發生任何音變', isCorrect: false, reason: '錯誤，兩者都有促音化，「本」還有濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「冊」是「さ行」量詞，只有促音化；「本」是「は行」量詞，有促音化和濁音化。', trapExplanation: '記住：「冊」用於成冊物，「本」用於細長物。', relatedRules: ['量詞音變比較', '「冊」vs「本」'] },
        sourceItem: { value: 0, kanji: '冊本比較', reading: '音變差異' }
    },
    {
        id: 'book_error_1', category: 'counters', subcategory: 'books', type: 'pronunciation', isTrap: true,
        stem: '以下哪個讀法是錯誤的？', stem_zh: '以下哪個讀法是錯誤的？',
        options: [
            { text: '一冊(いちさつ)', isCorrect: true, reason: '這是錯誤的！應該是「いっさつ」，需要促音化。' },
            { text: '二冊(にさつ)', isCorrect: false, reason: '這是正確的，2冊無音變。' },
            { text: '三冊(さんさつ)', isCorrect: false, reason: '這是正確的，3冊無音變。' },
            { text: '五冊(ごさつ)', isCorrect: false, reason: '這是正確的，5冊無音變。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '1冊必須促音化為「いっさつ」，「いちさつ」是錯誤的。', trapExplanation: '這是陷阱題，1、8、10搭配「さ行」量詞需促音化。', relatedRules: ['促音化規則', '錯誤識別'] },
        sourceItem: { value: 1, kanji: '一冊', reading: 'いっさつ' }
    },
    {
        id: 'book_error_2', category: 'counters', subcategory: 'books', type: 'pronunciation', isTrap: true,
        stem: '以下哪個讀法是錯誤的？', stem_zh: '以下哪個讀法是錯誤的？',
        options: [
            { text: '八冊(はちさつ)', isCorrect: true, reason: '這是錯誤的！應該是「はっさつ」，需要促音化。' },
            { text: '六冊(ろくさつ)', isCorrect: false, reason: '這是正確的，6冊無音變。' },
            { text: '七冊(ななさつ)', isCorrect: false, reason: '這是正確的，7冊無音變。' },
            { text: '九冊(きゅうさつ)', isCorrect: false, reason: '這是正確的，9冊無音變。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '8冊必須促音化為「はっさつ」，「はちさつ」是錯誤的。', trapExplanation: '這是陷阱題，1、8、10搭配「さ行」量詞需促音化。', relatedRules: ['促音化規則', '錯誤識別'] },
        sourceItem: { value: 8, kanji: '八冊', reading: 'はっさつ' }
    },
    {
        id: 'book_error_3', category: 'counters', subcategory: 'books', type: 'pronunciation', isTrap: true,
        stem: '以下哪個讀法是錯誤的？', stem_zh: '以下哪個讀法是錯誤的？',
        options: [
            { text: '十冊(じゅうさつ)', isCorrect: true, reason: '這是錯誤的！應該是「じゅっさつ」，需要促音化。' },
            { text: '四冊(よんさつ)', isCorrect: false, reason: '這是正確的，4冊無音變。' },
            { text: '何冊(なんさつ)', isCorrect: false, reason: '這是正確的，何冊無音變。' },
            { text: '二冊(にさつ)', isCorrect: false, reason: '這是正確的，2冊無音變。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '10冊必須促音化為「じゅっさつ」，「じゅうさつ」是錯誤的。', trapExplanation: '這是陷阱題，1、8、10搭配「さ行」量詞需促音化。', relatedRules: ['促音化規則', '錯誤識別'] },
        sourceItem: { value: 10, kanji: '十冊', reading: 'じゅっさつ' }
    },

    // ===== 更多情境題目 =====
    {
        id: 'book_context_21', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: false,
        stem: 'レシピ本を＿＿集めています。', stem_zh: '正在收集食譜書。',
        options: [
            { text: 'じゅうごほん', isCorrect: false, reason: '食譜用「冊」。' },
            { text: 'じゅうごさつ', isCorrect: true, reason: '正確！十五本食譜。' },
            { text: 'じゅうごまい', isCorrect: false, reason: '「枚」用於扁平物。' },
            { text: 'じゅうご', isCorrect: false, reason: '需要量詞。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「レシピ本」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用'] },
        sourceItem: { value: 15, kanji: '十五冊', reading: 'じゅうごさつ' }
    },
    {
        id: 'book_context_22', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: true,
        stem: '漫畫購買', stem_zh: '漫畫購買',
        dialogue: { speakerA: '今日は漫画を何冊買いましたか？', speakerB: '＿＿買いました。（十一本）' },
        options: [
            { text: 'じゅういちさつ', isCorrect: false, reason: '陷阱！11冊需要促音化。' },
            { text: 'じゅういっさつ', isCorrect: true, reason: '正確！十一本漫畫。' },
            { text: 'じゅういちほん', isCorrect: false, reason: '漫畫用「冊」。' },
            { text: 'じゅういっぽん', isCorrect: false, reason: '漫畫用「冊」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '11冊讀作「じゅういっさつ」，個位數1觸發促音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 11, kanji: '十一冊', reading: 'じゅういっさつ' }
    },
    {
        id: 'book_context_23', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: false,
        stem: '問題集を＿＿終わらせました。', stem_zh: '完成了三本習題集。',
        options: [
            { text: 'さんぼん', isCorrect: false, reason: '習題集用「冊」。' },
            { text: 'さんさつ', isCorrect: true, reason: '正確！三本習題集。' },
            { text: 'みっつ', isCorrect: false, reason: '習題集是成冊的。' },
            { text: 'さんざつ', isCorrect: false, reason: '「冊」不濁音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「問題集」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '學習用品'] },
        sourceItem: { value: 3, kanji: '三冊', reading: 'さんさつ' }
    },
    {
        id: 'book_context_24', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: false,
        stem: '雜誌訂閱', stem_zh: '雜誌訂閱',
        dialogue: { speakerA: '雑誌は毎月何冊読みますか？', speakerB: '＿＿読みます。（四本）' },
        options: [
            { text: 'しさつ', isCorrect: false, reason: '使用「よん」。' },
            { text: 'よんさつ', isCorrect: true, reason: '正確！每月四本雜誌。' },
            { text: 'よっつ', isCorrect: false, reason: '雜誌是成冊的。' },
            { text: 'よんまい', isCorrect: false, reason: '雜誌用「冊」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「雑誌」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '出版物の計數'] },
        sourceItem: { value: 4, kanji: '四冊', reading: 'よんさつ' }
    },
    {
        id: 'book_context_25', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: false,
        stem: '英語の教材を＿＿持っています。', stem_zh: '我有五套英語教材。',
        options: [
            { text: 'ごほん', isCorrect: false, reason: '教材用「冊」。' },
            { text: 'ごさつ', isCorrect: true, reason: '正確！五套英語教材。' },
            { text: 'いつつ', isCorrect: false, reason: '教材是成冊的。' },
            { text: 'ごっさつ', isCorrect: false, reason: '5冊不促音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「教材」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '學習用品'] },
        sourceItem: { value: 5, kanji: '五冊', reading: 'ごさつ' }
    },
    {
        id: 'book_context_26', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: false,
        stem: '書架整理', stem_zh: '書架整理',
        dialogue: { speakerA: '本棚には何冊の本がありますか？', speakerB: '約＿＿あります。（五十本）' },
        options: [
            { text: 'ごじゅうほん', isCorrect: false, reason: '書用「冊」。' },
            { text: 'ごじゅっさつ', isCorrect: true, reason: '正確！約五十本書。' },
            { text: 'ごじゅう', isCorrect: false, reason: '需要量詞。' },
            { text: 'ごじゅうさつ', isCorrect: false, reason: '50冊需要促音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '50冊讀作「ごじゅっさつ」，十位數10觸發促音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 50, kanji: '五十冊', reading: 'ごじゅっさつ' }
    },
    {
        id: 'book_context_27', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: false,
        stem: 'テキストを＿＿注文しました。', stem_zh: '訂購了六本教科書。',
        options: [
            { text: 'ろっぽん', isCorrect: false, reason: '教科書用「冊」。' },
            { text: 'ろくさつ', isCorrect: true, reason: '正確！六本教科書。' },
            { text: 'むっつ', isCorrect: false, reason: '教科書是成冊的。' },
            { text: 'ろっさつ', isCorrect: false, reason: '6冊不促音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「テキスト」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '學習用品'] },
        sourceItem: { value: 6, kanji: '六冊', reading: 'ろくさつ' }
    },
    {
        id: 'book_context_28', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: false,
        stem: '童話書收藏', stem_zh: '童話書收藏',
        dialogue: { speakerA: '童話の本は何冊ありますか？', speakerB: '＿＿あります。（七本）' },
        options: [
            { text: 'しちさつ', isCorrect: false, reason: '通常用「なな」。' },
            { text: 'ななさつ', isCorrect: true, reason: '正確！七本童話書。' },
            { text: 'ななつ', isCorrect: false, reason: '童話書是成冊的。' },
            { text: 'ななほん', isCorrect: false, reason: '書用「冊」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「童話の本」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '兒童書籍'] },
        sourceItem: { value: 7, kanji: '七冊', reading: 'ななさつ' }
    },
    {
        id: 'book_context_29', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: true,
        stem: '歴史書を＿＿読みました。', stem_zh: '讀了八本歷史書。',
        options: [
            { text: 'はちさつ', isCorrect: false, reason: '陷阱！8冊需要促音化。' },
            { text: 'はっさつ', isCorrect: true, reason: '正確！八本歷史書。' },
            { text: 'やっつ', isCorrect: false, reason: '歷史書是成冊的。' },
            { text: 'はっぽん', isCorrect: false, reason: '書用「冊」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「歴史書」是成冊的，使用量詞「冊」。8冊需要促音化。', relatedRules: ['量詞「冊」的使用', '促音化規則'] },
        sourceItem: { value: 8, kanji: '八冊', reading: 'はっさつ' }
    },
    {
        id: 'book_context_30', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: false,
        stem: '學術論文', stem_zh: '學術論文',
        dialogue: { speakerA: '論文は何冊発表しましたか？', speakerB: '＿＿発表しました。（九本）' },
        options: [
            { text: 'くさつ', isCorrect: false, reason: '使用「きゅう」。' },
            { text: 'きゅうさつ', isCorrect: true, reason: '正確！九本論文。' },
            { text: 'ここのつ', isCorrect: false, reason: '論文是成冊的。' },
            { text: 'きゅうほん', isCorrect: false, reason: '論文用「冊」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '成冊的論文使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '學術出版物'] },
        sourceItem: { value: 9, kanji: '九冊', reading: 'きゅうさつ' }
    },
    {
        id: 'book_context_31', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: true,
        stem: '入門書を＿＿購入しました。', stem_zh: '購買了十本入門書。',
        options: [
            { text: 'じゅうさつ', isCorrect: false, reason: '陷阱！10冊需要促音化。' },
            { text: 'じゅっさつ', isCorrect: true, reason: '正確！十本入門書。' },
            { text: 'とお', isCorrect: false, reason: '入門書是成冊的。' },
            { text: 'じゅっぽん', isCorrect: false, reason: '書用「冊」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「入門書」是成冊的，使用量詞「冊」。10冊需要促音化。', relatedRules: ['量詞「冊」的使用', '促音化規則'] },
        sourceItem: { value: 10, kanji: '十冊', reading: 'じゅっさつ' }
    },
    {
        id: 'book_context_32', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: false,
        stem: '旅行回憶', stem_zh: '旅行回憶',
        dialogue: { speakerA: '旅行記は何冊書きましたか？', speakerB: '＿＿書きました。（二本）' },
        options: [
            { text: 'にほん', isCorrect: false, reason: '旅行記用「冊」。' },
            { text: 'にさつ', isCorrect: true, reason: '正確！兩本旅行記。' },
            { text: 'ふたつ', isCorrect: false, reason: '旅行記是成冊的。' },
            { text: 'にっさつ', isCorrect: false, reason: '2冊不促音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「旅行記」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '出版物の計數'] },
        sourceItem: { value: 2, kanji: '二冊', reading: 'にさつ' }
    },
    {
        id: 'book_context_33', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: true,
        stem: '絵日記を＿＿つけました。', stem_zh: '寫了二十一本繪畫日記。',
        options: [
            { text: 'にじゅういちさつ', isCorrect: false, reason: '陷阱！21冊需要促音化。' },
            { text: 'にじゅういっさつ', isCorrect: true, reason: '正確！二十一本繪畫日記。' },
            { text: 'にじゅういちほん', isCorrect: false, reason: '日記用「冊」。' },
            { text: 'にじゅうひとさつ', isCorrect: false, reason: '使用音讀「いち」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '21冊讀作「にじゅういっさつ」，個位數1觸發促音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 21, kanji: '二十一冊', reading: 'にじゅういっさつ' }
    },
    {
        id: 'book_context_34', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: false,
        stem: '推理小說', stem_zh: '推理小說',
        dialogue: { speakerA: '推理小説は何冊読みましたか？', speakerB: '＿＿読みました。（十三本）' },
        options: [
            { text: 'じゅうさんほん', isCorrect: false, reason: '小說用「冊」。' },
            { text: 'じゅうさんさつ', isCorrect: true, reason: '正確！十三本推理小說。' },
            { text: 'じゅうさん', isCorrect: false, reason: '需要量詞。' },
            { text: 'じゅうさんまい', isCorrect: false, reason: '「枚」用於扁平物。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「推理小説」是成冊的，使用量詞「冊」。13冊無音變。', relatedRules: ['量詞「冊」的使用', '出版物の計數'] },
        sourceItem: { value: 13, kanji: '十三冊', reading: 'じゅうさんさつ' }
    },
    {
        id: 'book_context_35', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: false,
        stem: '美術書を＿＿コレクションしています。', stem_zh: '收藏著十四本美術書。',
        options: [
            { text: 'じゅうよんほん', isCorrect: false, reason: '美術書用「冊」。' },
            { text: 'じゅうよんさつ', isCorrect: true, reason: '正確！十四本美術書。' },
            { text: 'じゅうよん', isCorrect: false, reason: '需要量詞。' },
            { text: 'じゅうしさつ', isCorrect: false, reason: '使用「よん」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「美術書」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '藝術書籍'] },
        sourceItem: { value: 14, kanji: '十四冊', reading: 'じゅうよんさつ' }
    },
    {
        id: 'book_context_36', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: false,
        stem: '科學雜誌', stem_zh: '科學雜誌',
        dialogue: { speakerA: '科学雑誌は何冊ありますか？', speakerB: '＿＿あります。（十六本）' },
        options: [
            { text: 'じゅうろくほん', isCorrect: false, reason: '雜誌用「冊」。' },
            { text: 'じゅうろくさつ', isCorrect: true, reason: '正確！十六本科學雜誌。' },
            { text: 'じゅうろく', isCorrect: false, reason: '需要量詞。' },
            { text: 'じゅうろくまい', isCorrect: false, reason: '雜誌用「冊」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「科学雑誌」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '出版物の計數'] },
        sourceItem: { value: 16, kanji: '十六冊', reading: 'じゅうろくさつ' }
    },
    {
        id: 'book_context_37', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: false,
        stem: '哲学書を＿＿研究しました。', stem_zh: '研究了十七本哲學書。',
        options: [
            { text: 'じゅうしちほん', isCorrect: false, reason: '哲學書用「冊」，用「なな」。' },
            { text: 'じゅうななさつ', isCorrect: true, reason: '正確！十七本哲學書。' },
            { text: 'じゅうなな', isCorrect: false, reason: '需要量詞。' },
            { text: 'じゅうななまい', isCorrect: false, reason: '「枚」用於扁平物。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「哲学書」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '學術書籍'] },
        sourceItem: { value: 17, kanji: '十七冊', reading: 'じゅうななさつ' }
    },
    {
        id: 'book_context_38', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: true,
        stem: '經濟學書', stem_zh: '經濟學書',
        dialogue: { speakerA: '経済学の本は何冊ですか？', speakerB: '＿＿です。（十八本）' },
        options: [
            { text: 'じゅうはちさつ', isCorrect: false, reason: '陷阱！18冊需要促音化。' },
            { text: 'じゅうはっさつ', isCorrect: true, reason: '正確！十八本經濟學書。' },
            { text: 'じゅうはちほん', isCorrect: false, reason: '書用「冊」。' },
            { text: 'じゅうはっぽん', isCorrect: false, reason: '書用「冊」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '18冊讀作「じゅうはっさつ」，個位數8觸發促音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 18, kanji: '十八冊', reading: 'じゅうはっさつ' }
    },
    {
        id: 'book_context_39', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: false,
        stem: '心理学の本を＿＿読んでいます。', stem_zh: '正在讀十九本心理學書。',
        options: [
            { text: 'じゅうきゅうほん', isCorrect: false, reason: '書用「冊」。' },
            { text: 'じゅうきゅうさつ', isCorrect: true, reason: '正確！十九本心理學書。' },
            { text: 'じゅうきゅう', isCorrect: false, reason: '需要量詞。' },
            { text: 'じゅうくさつ', isCorrect: false, reason: '使用「きゅう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「心理学の本」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '學術書籍'] },
        sourceItem: { value: 19, kanji: '十九冊', reading: 'じゅうきゅうさつ' }
    },
    {
        id: 'book_context_40', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: true,
        stem: '法律書', stem_zh: '法律書',
        dialogue: { speakerA: '法律書は何冊ありますか？', speakerB: '＿＿あります。（二十本）' },
        options: [
            { text: 'にじゅうさつ', isCorrect: false, reason: '陷阱！20冊需要促音化。' },
            { text: 'にじゅっさつ', isCorrect: true, reason: '正確！二十本法律書。' },
            { text: 'にじゅうほん', isCorrect: false, reason: '書用「冊」。' },
            { text: 'はたさつ', isCorrect: false, reason: '使用「にじゅう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '20冊讀作「にじゅっさつ」，十位數10觸發促音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 20, kanji: '二十冊', reading: 'にじゅっさつ' }
    },
    {
        id: 'book_context_41', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: false,
        stem: 'ファッション誌を＿＿集めました。', stem_zh: '收集了二十二本時尚雜誌。',
        options: [
            { text: 'にじゅうにほん', isCorrect: false, reason: '雜誌用「冊」。' },
            { text: 'にじゅうにさつ', isCorrect: true, reason: '正確！二十二本時尚雜誌。' },
            { text: 'にじゅうにまい', isCorrect: false, reason: '雜誌用「冊」。' },
            { text: 'にじゅうに', isCorrect: false, reason: '需要量詞。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ファッション誌」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '出版物の計數'] },
        sourceItem: { value: 22, kanji: '二十二冊', reading: 'にじゅうにさつ' }
    },
    {
        id: 'book_context_42', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: false,
        stem: '育兒書', stem_zh: '育兒書',
        dialogue: { speakerA: '育児書は何冊読みましたか？', speakerB: '＿＿読みました。（二十三本）' },
        options: [
            { text: 'にじゅうさんほん', isCorrect: false, reason: '育兒書用「冊」。' },
            { text: 'にじゅうさんさつ', isCorrect: true, reason: '正確！二十三本育兒書。' },
            { text: 'にじゅうさん', isCorrect: false, reason: '需要量詞。' },
            { text: 'にじゅうさんまい', isCorrect: false, reason: '書用「冊」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「育児書」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '出版物の計數'] },
        sourceItem: { value: 23, kanji: '二十三冊', reading: 'にじゅうさんさつ' }
    },
    {
        id: 'book_context_43', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: false,
        stem: 'ビジネス書を＿＿読破しました。', stem_zh: '讀完了二十四本商業書。',
        options: [
            { text: 'にじゅうよんほん', isCorrect: false, reason: '商業書用「冊」。' },
            { text: 'にじゅうよんさつ', isCorrect: true, reason: '正確！二十四本商業書。' },
            { text: 'にじゅうしさつ', isCorrect: false, reason: '使用「よん」。' },
            { text: 'にじゅうよん', isCorrect: false, reason: '需要量詞。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ビジネス書」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '出版物の計數'] },
        sourceItem: { value: 24, kanji: '二十四冊', reading: 'にじゅうよんさつ' }
    },
    {
        id: 'book_context_44', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: false,
        stem: '語言學習書', stem_zh: '語言學習書',
        dialogue: { speakerA: '語学の本は何冊持っていますか？', speakerB: '＿＿持っています。（二十六本）' },
        options: [
            { text: 'にじゅうろくほん', isCorrect: false, reason: '語言書用「冊」。' },
            { text: 'にじゅうろくさつ', isCorrect: true, reason: '正確！二十六本語言學習書。' },
            { text: 'にじゅうろく', isCorrect: false, reason: '需要量詞。' },
            { text: 'にじゅうろくまい', isCorrect: false, reason: '書用「冊」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「語学の本」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '學習用品'] },
        sourceItem: { value: 26, kanji: '二十六冊', reading: 'にじゅうろくさつ' }
    },
    {
        id: 'book_context_45', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: false,
        stem: '科学雑誌を＿＿購読しています。', stem_zh: '訂閱了二十七本科學雜誌。',
        options: [
            { text: 'にじゅうななほん', isCorrect: false, reason: '雜誌用「冊」。' },
            { text: 'にじゅうななさつ', isCorrect: true, reason: '正確！二十七本科學雜誌。' },
            { text: 'にじゅうしちさつ', isCorrect: false, reason: '通常用「なな」。' },
            { text: 'にじゅうなな', isCorrect: false, reason: '需要量詞。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「科学雑誌」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '出版物の計數'] },
        sourceItem: { value: 27, kanji: '二十七冊', reading: 'にじゅうななさつ' }
    },
    {
        id: 'book_context_46', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: true,
        stem: '醫學書籍', stem_zh: '醫學書籍',
        dialogue: { speakerA: '医学書は何冊ですか？', speakerB: '＿＿です。（二十八本）' },
        options: [
            { text: 'にじゅうはちさつ', isCorrect: false, reason: '陷阱！28冊需要促音化。' },
            { text: 'にじゅうはっさつ', isCorrect: true, reason: '正確！二十八本醫學書。' },
            { text: 'にじゅうはちほん', isCorrect: false, reason: '書用「冊」。' },
            { text: 'にじゅうはっぽん', isCorrect: false, reason: '書用「冊」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '28冊讀作「にじゅうはっさつ」，個位數8觸發促音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 28, kanji: '二十八冊', reading: 'にじゅうはっさつ' }
    },
    {
        id: 'book_context_47', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: false,
        stem: '自己啓発書を＿＿読みました。', stem_zh: '讀了二十九本自我啟發書。',
        options: [
            { text: 'にじゅうきゅうほん', isCorrect: false, reason: '書用「冊」。' },
            { text: 'にじゅうきゅうさつ', isCorrect: true, reason: '正確！二十九本自我啟發書。' },
            { text: 'にじゅうくさつ', isCorrect: false, reason: '使用「きゅう」。' },
            { text: 'にじゅうきゅう', isCorrect: false, reason: '需要量詞。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「自己啓発書」是成冊的，使用量詞「冊」。', relatedRules: ['量詞「冊」的使用', '出版物の計數'] },
        sourceItem: { value: 29, kanji: '二十九冊', reading: 'にじゅうきゅうさつ' }
    },
    {
        id: 'book_context_48', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: true,
        stem: '全集購買', stem_zh: '全集購買',
        dialogue: { speakerA: 'この全集は何冊ですか？', speakerB: '＿＿です。（三十本）' },
        options: [
            { text: 'さんじゅうさつ', isCorrect: false, reason: '陷阱！30冊需要促音化。' },
            { text: 'さんじゅっさつ', isCorrect: true, reason: '正確！三十本全集。' },
            { text: 'さんじゅうほん', isCorrect: false, reason: '書用「冊」。' },
            { text: 'みそさつ', isCorrect: false, reason: '使用「さんじゅう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '30冊讀作「さんじゅっさつ」，十位數10觸發促音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 30, kanji: '三十冊', reading: 'さんじゅっさつ' }
    },
    {
        id: 'book_context_49', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: true,
        stem: 'シリーズ物を＿＿読破しました。', stem_zh: '讀完了四十本系列小說。',
        options: [
            { text: 'よんじゅうさつ', isCorrect: false, reason: '陷阱！40冊需要促音化。' },
            { text: 'よんじゅっさつ', isCorrect: true, reason: '正確！四十本系列小說。' },
            { text: 'しじゅうさつ', isCorrect: false, reason: '使用「よん」。' },
            { text: 'よんじゅうほん', isCorrect: false, reason: '書用「冊」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '40冊讀作「よんじゅっさつ」，十位數10觸發促音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 40, kanji: '四十冊', reading: 'よんじゅっさつ' }
    },

    {
        id: 'book_context_50', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: true,
        stem: '藏書量', stem_zh: '藏書量',
        dialogue: { speakerA: '家に何冊の本がありますか？', speakerB: '約＿＿あります。（六十本）' },
        options: [
            { text: 'ろくじゅうさつ', isCorrect: false, reason: '陷阱！60冊需要促音化。' },
            { text: 'ろくじゅっさつ', isCorrect: true, reason: '正確！約六十本書。' },
            { text: 'ろくじゅうほん', isCorrect: false, reason: '書用「冊」。' },
            { text: 'むじゅうさつ', isCorrect: false, reason: '使用「ろくじゅう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '60冊讀作「ろくじゅっさつ」，十位數10觸發促音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 60, kanji: '六十冊', reading: 'ろくじゅっさつ' }
    },
    {
        id: 'book_context_51', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: true,
        stem: '雑誌のバックナンバーを＿＿保存しています。', stem_zh: '保存了七十本雜誌舊刊。',
        options: [
            { text: 'ななじゅうさつ', isCorrect: false, reason: '陷阱！70冊需要促音化。' },
            { text: 'ななじゅっさつ', isCorrect: true, reason: '正確！七十本雜誌舊刊。' },
            { text: 'しちじゅうさつ', isCorrect: false, reason: '通常用「なな」。' },
            { text: 'ななじゅうほん', isCorrect: false, reason: '雜誌用「冊」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '70冊讀作「ななじゅっさつ」，十位數10觸發促音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 70, kanji: '七十冊', reading: 'ななじゅっさつ' }
    },
    {
        id: 'book_context_52', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: true,
        stem: '圖書館捐贈', stem_zh: '圖書館捐贈',
        dialogue: { speakerA: '図書館に何冊寄贈しましたか？', speakerB: '＿＿寄贈しました。（八十本）' },
        options: [
            { text: 'はちじゅうさつ', isCorrect: false, reason: '陷阱！80冊需要促音化。' },
            { text: 'はちじゅっさつ', isCorrect: true, reason: '正確！捐贈了八十本書。' },
            { text: 'はちじゅうほん', isCorrect: false, reason: '書用「冊」。' },
            { text: 'やじゅうさつ', isCorrect: false, reason: '使用「はちじゅう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '80冊讀作「はちじゅっさつ」，十位數10觸發促音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 80, kanji: '八十冊', reading: 'はちじゅっさつ' }
    },
    {
        id: 'book_context_53', category: 'counters', subcategory: 'books', type: 'sentence', isTrap: true,
        stem: '学術論文を＿＿発表しました。', stem_zh: '發表了九十篇學術論文。',
        options: [
            { text: 'きゅうじゅうさつ', isCorrect: false, reason: '陷阱！90冊需要促音化。' },
            { text: 'きゅうじゅっさつ', isCorrect: true, reason: '正確！九十篇學術論文。' },
            { text: 'くじゅうさつ', isCorrect: false, reason: '使用「きゅう」。' },
            { text: 'きゅうじゅうほん', isCorrect: false, reason: '論文用「冊」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '90冊讀作「きゅうじゅっさつ」，十位數10觸發促音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 90, kanji: '九十冊', reading: 'きゅうじゅっさつ' }
    },
    {
        id: 'book_context_54', category: 'counters', subcategory: 'books', type: 'dialogue', isTrap: true,
        stem: '年度出版', stem_zh: '年度出版',
        dialogue: { speakerA: '今年は何冊出版されましたか？', speakerB: '約＿＿です。（百本）' },
        options: [
            { text: 'ひゃくさつ', isCorrect: false, reason: '陷阱！100冊需要促音化。' },
            { text: 'ひゃっさつ', isCorrect: true, reason: '正確！約一百本書。' },
            { text: 'ひゃくほん', isCorrect: false, reason: '書用「冊」。' },
            { text: 'ももさつ', isCorrect: false, reason: '使用音讀「ひゃく」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '100冊讀作「ひゃっさつ」，「百」在「さ行」前促音化。', relatedRules: ['促音化規則', '百以上の數字'] },
        sourceItem: { value: 100, kanji: '百冊', reading: 'ひゃっさつ' }
    },

    // ===== 綜合複習題 =====
    {
        id: 'book_final', category: 'counters', subcategory: 'books', type: 'pronunciation', isTrap: false,
        stem: '以下哪組「冊」的讀法都正確？', stem_zh: '以下哪組「冊」的讀法都正確？',
        options: [
            { text: '一冊(いっさつ)、八冊(はっさつ)、十冊(じゅっさつ)', isCorrect: true, reason: '正確！這三個都需要促音化，讀法正確。' },
            { text: '一冊(いちさつ)、八冊(はちさつ)、十冊(じゅうさつ)', isCorrect: false, reason: '錯誤，1、8、10需要促音化。' },
            { text: '三冊(さんざつ)、何冊(なんざつ)、六冊(ろくざつ)', isCorrect: false, reason: '錯誤，「冊」不發生濁音化。' },
            { text: '二冊(にっさつ)、五冊(ごっさつ)、九冊(きゅっさつ)', isCorrect: false, reason: '錯誤，2、5、9不觸發促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「冊」的促音化規則：1、8、10、100等在「さ行」前促音化。其他數字無音變。', relatedRules: ['量詞「冊」の総合規則'] },
        sourceItem: { value: 0, kanji: '冊總複習', reading: '促音化規則' }
    }
];
