import { DatesPracticeQuestion } from '../types';

// 細長物量詞練習題 (〜本)
// 每個重要數字3題：發音題、單句敘述題、對話題
// 音變規則：1/6/8/10 促音+半濁音(っぽん), 3 濁音(ぼん)
// 用於：筆、瓶子、雨傘、樹木、電線桿等細長物體

export const longObjectQuestions: DatesPracticeQuestion[] = [
    // ===== 1本 的三題（促音+半濁音：いっぽん） =====
    {
        id: 'long_1_pron',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「一本」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「一本」的正確讀音是？',
        options: [
            { text: 'いっぽん', isCorrect: true, reason: '正確！「一本{いっぽん}」發生促音化+半濁音化，讀作「いっぽん」。' },
            { text: 'いちほん', isCorrect: false, reason: '陷阱！「ほ」在促音「っ」後必須變為半濁音「ぽ」。' },
            { text: 'いちぼん', isCorrect: false, reason: '一本{いっぽん}使用半濁音「ぽ」，不是濁音「ぼ」。' },
            { text: 'いっほん', isCorrect: false, reason: '促音後不能接「ほ」，必須變為「ぽ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一本{いっぽん}」讀作「いっぽん」。「一」的「ち」變為促音「っ」，「本{ほん}」的「ほ」變為半濁音「ぽ」。',
            trapExplanation: '這是陷阱題。h-p轉換規律：促音後的「h」音必須轉為爆破音「p」。',
            relatedRules: ['h-p轉換規律', '促音化規則', '1/6/8/10的特殊音變']
        },
        sourceItem: { value: 1, kanji: '一本', reading: 'いっぽん' }
    },
    {
        id: 'long_1_sent',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: 'ペンを＿＿ください。',
        stem_zh: '請給我一支筆。',
        options: [
            { text: 'いちほん', isCorrect: false, reason: '陷阱！一本{いっぽん}需要促音化+半濁音化。' },
            { text: 'いっぽん', isCorrect: true, reason: '正確！「ペンを一本{いっぽん}ください」表示「請給我一支筆」。' },
            { text: 'いっぼん', isCorrect: false, reason: '一本{いっぽん}使用半濁音「ぽ」，不是濁音「ぼ」。' },
            { text: 'ひとほん', isCorrect: false, reason: '量詞「本{ほん}」使用音讀，不用訓讀「ひと」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ペンを一本{いっぽん}ください」是購買或借用筆時的常用表達。',
            trapExplanation: '量詞「本{ほん}」搭配數字1時必須使用「いっぽん」。',
            relatedRules: ['量詞「本{ほん}」的使用', '購物表達']
        },
        sourceItem: { value: 1, kanji: '一本', reading: 'いっぽん' }
    },
    {
        id: 'long_1_dial',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '傘は何本ありますか？',
        stem_zh: '有幾把傘？',
        dialogue: {
            speakerA: '傘は何本ありますか？',
            speakerB: '＿＿あります。（一把）'
        },
        options: [
            { text: 'いちほん', isCorrect: false, reason: '一本{いっぽん}需要促音化+半濁音化。' },
            { text: 'いっぽん', isCorrect: true, reason: '正確！有一把傘。' },
            { text: 'ひとつ', isCorrect: false, reason: '傘是細長物，應使用「本{ほん}」而非「つ」。' },
            { text: 'いっぼん', isCorrect: false, reason: '一本{いっぽん}使用半濁音「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「傘」是細長物，使用量詞「本{ほん}」來計數。',
            relatedRules: ['量詞「本{ほん}」的使用', '何本{なんぼん}的質問與回答']
        },
        sourceItem: { value: 1, kanji: '一本', reading: 'いっぽん' }
    },

    // ===== 2本 的三題（無音變：にほん） =====
    {
        id: 'long_2_pron',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二本」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「二本」的正確讀音是？',
        options: [
            { text: 'にほん', isCorrect: true, reason: '正確！「二本{にほん}」無音變，讀作「にほん」。' },
            { text: 'にぽん', isCorrect: false, reason: '二本{にほん}不發生音變，保持「ほ」。' },
            { text: 'にぼん', isCorrect: false, reason: '二本{にほん}不發生濁音化。' },
            { text: 'ふたほん', isCorrect: false, reason: '量詞「本{ほん}」使用音讀數字，不用訓讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二本{にほん}」讀作「にほん」，無音變。數字2不觸發任何音變。',
            relatedRules: ['量詞「本{ほん}」的音變規則', '無音變の數字']
        },
        sourceItem: { value: 2, kanji: '二本', reading: 'にほん' }
    },
    {
        id: 'long_2_sent',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: false,
        stem: '木が＿＿立っています。',
        stem_zh: '有兩棵樹站著。',
        options: [
            { text: 'にぽん', isCorrect: false, reason: '二本{にほん}無音變，保持「ほ」。' },
            { text: 'にほん', isCorrect: true, reason: '正確！「木が二本{にほん}」表示「有兩棵樹」。' },
            { text: 'ふたほん', isCorrect: false, reason: '量詞「本{ほん}」用音讀數字。' },
            { text: 'にぼん', isCorrect: false, reason: '二本{にほん}無濁音化。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「木」是細長的，使用量詞「本{ほん}」來計數。',
            relatedRules: ['量詞「本{ほん}」的使用', '樹木の計數']
        },
        sourceItem: { value: 2, kanji: '二本', reading: 'にほん' }
    },
    {
        id: 'long_2_dial',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: 'ビールは何本飲みましたか？',
        stem_zh: '你喝了幾瓶啤酒？',
        dialogue: {
            speakerA: 'ビールは何本飲みましたか？',
            speakerB: '＿＿飲みました。（兩瓶）'
        },
        options: [
            { text: 'にぽん', isCorrect: false, reason: '二本{にほん}無音變。' },
            { text: 'にほん', isCorrect: true, reason: '正確！喝了兩瓶{にほん}啤酒。' },
            { text: 'ふたつ', isCorrect: false, reason: '瓶裝飲料用「本{ほん}」計數。' },
            { text: 'にぼん', isCorrect: false, reason: '二本{にほん}無濁音化。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '瓶裝飲料（ビール、ジュース等）使用量詞「本{ほん}」。',
            relatedRules: ['量詞「本{ほん}」的使用', '飲料の計數']
        },
        sourceItem: { value: 2, kanji: '二本', reading: 'にほん' }
    },

    // ===== 3本 的三題（濁音化：さんぼん） =====
    {
        id: 'long_3_pron',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「三本」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「三本」的正確讀音是？',
        options: [
            { text: 'さんぼん', isCorrect: true, reason: '正確！「三本{さんぼん}」發生濁音化，讀作「さんぼん」。' },
            { text: 'さんほん', isCorrect: false, reason: '陷阱！撥音「ん」後的「ほ」變為濁音「ぼ」。' },
            { text: 'さんぽん', isCorrect: false, reason: '三本{さんぼん}使用濁音「ぼ」，不是半濁音「ぽ」。' },
            { text: 'みっぽん', isCorrect: false, reason: '量詞「本{ほん}」用音讀「さん」，不用訓讀「み」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三本{さんぼん}」讀作「さんぼん」。撥音「ん」後的「h」音變為濁音「b」。',
            trapExplanation: '這是陷阱題。h-b轉換規律：撥音「ん」後的「h」音轉為濁音「b」。',
            relatedRules: ['h-b轉換規律', '濁音化規則', '3的特殊音變']
        },
        sourceItem: { value: 3, kanji: '三本', reading: 'さんぼん' }
    },
    {
        id: 'long_3_sent',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: '鉛筆を＿＿買いました。',
        stem_zh: '我買了三支鉛筆。',
        options: [
            { text: 'さんほん', isCorrect: false, reason: '陷阱！三本{さんぼん}需要濁音化。' },
            { text: 'さんぼん', isCorrect: true, reason: '正確！「鉛筆を三本{さんぼん}」表示「三支鉛筆」。' },
            { text: 'さんぽん', isCorrect: false, reason: '三本{さんぼん}使用濁音「ぼ」，不是半濁音「ぽ」。' },
            { text: 'みっつ', isCorrect: false, reason: '鉛筆是細長物，應使用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「鉛筆を三本{さんぼん}買いました」表示「買了三支鉛筆」。',
            trapExplanation: '三本{さんぼん}固定讀「さんぼん」，撥音後必須濁音化。',
            relatedRules: ['量詞「本{ほん}」的使用', '文具の計數']
        },
        sourceItem: { value: 3, kanji: '三本', reading: 'さんぼん' }
    },
    {
        id: 'long_3_dial',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: 'バナナは何本ありますか？',
        stem_zh: '有幾根香蕉？',
        dialogue: {
            speakerA: 'バナナは何本ありますか？',
            speakerB: '＿＿あります。（三根）'
        },
        options: [
            { text: 'さんほん', isCorrect: false, reason: '三本{さんぼん}需要濁音化。' },
            { text: 'さんぼん', isCorrect: true, reason: '正確！有三根香蕉。' },
            { text: 'さんぽん', isCorrect: false, reason: '三本{さんぼん}使用濁音「ぼ」。' },
            { text: 'みっつ', isCorrect: false, reason: '香蕉是細長的，用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「バナナ」是細長形，使用量詞「本{ほん}」。',
            relatedRules: ['量詞「本{ほん}」的使用', '食物の計數']
        },
        sourceItem: { value: 3, kanji: '三本', reading: 'さんぼん' }
    },

    // ===== 4本 的三題（無音變：よんほん） =====
    {
        id: 'long_4_pron',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: false,
        stem: '「四本」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「四本」的正確讀音是？',
        options: [
            { text: 'よんほん', isCorrect: true, reason: '正確！「四本{よんほん}」無音變，讀作「よんほん」。' },
            { text: 'しほん', isCorrect: false, reason: '量詞「本{ほん}」搭配4時使用「よん」，不用「し」。' },
            { text: 'よんぼん', isCorrect: false, reason: '四本{よんほん}無濁音化。' },
            { text: 'よんぽん', isCorrect: false, reason: '四本{よんほん}無半濁音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四本{よんほん}」讀作「よんほん」。數字4使用「よん」，不發生音變。',
            relatedRules: ['量詞「本{ほん}」的音變規則', '4的讀法選擇']
        },
        sourceItem: { value: 4, kanji: '四本', reading: 'よんほん' }
    },
    {
        id: 'long_4_sent',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: false,
        stem: '色鉛筆を＿＿使います。',
        stem_zh: '我會用四支色鉛筆。',
        options: [
            { text: 'しほん', isCorrect: false, reason: '量詞「本{ほん}」用「よん」不用「し」。' },
            { text: 'よんほん', isCorrect: true, reason: '正確！「色鉛筆を四本{よんほん}」表示「四支色鉛筆」。' },
            { text: 'よんぼん', isCorrect: false, reason: '四本{よんほん}無音變。' },
            { text: 'よっぽん', isCorrect: false, reason: '四本{よんほん}不促音化。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「色鉛筆を四本{よんほん}使います」表示「用四支色鉛筆」。',
            relatedRules: ['量詞「本{ほん}」的使用', '繪畫道具']
        },
        sourceItem: { value: 4, kanji: '四本', reading: 'よんほん' }
    },
    {
        id: 'long_4_dial',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: 'ネクタイは何本持っていますか？',
        stem_zh: '你有幾條領帶？',
        dialogue: {
            speakerA: 'ネクタイは何本持っていますか？',
            speakerB: '＿＿持っています。（四條）'
        },
        options: [
            { text: 'しほん', isCorrect: false, reason: '四本{よんほん}使用「よん」。' },
            { text: 'よんほん', isCorrect: true, reason: '正確！有四條領帶。' },
            { text: 'よんぼん', isCorrect: false, reason: '四本{よんほん}無音變。' },
            { text: 'よっつ', isCorrect: false, reason: '領帶是細長的，用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ネクタイ」是細長形，使用量詞「本{ほん}」。',
            relatedRules: ['量詞「本{ほん}」的使用', '服飾の計數']
        },
        sourceItem: { value: 4, kanji: '四本', reading: 'よんほん' }
    },

    // ===== 6本 的三題（促音+半濁音：ろっぽん） =====
    {
        id: 'long_6_pron',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「六本」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「六本」的正確讀音是？',
        options: [
            { text: 'ろっぽん', isCorrect: true, reason: '正確！「六本{ろっぽん}」發生促音化+半濁音化，讀作「ろっぽん」。' },
            { text: 'ろくほん', isCorrect: false, reason: '陷阱！六本{ろっぽん}需要促音化+半濁音化。' },
            { text: 'ろくぼん', isCorrect: false, reason: '六本{ろっぽん}使用促音+半濁音，不是單純濁音。' },
            { text: 'ろっほん', isCorrect: false, reason: '促音後不能接「ほ」，必須變為「ぽ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六本{ろっぽん}」讀作「ろっぽん」。「六」的「く」變為促音「っ」，「本{ほん}」的「ほ」變為半濁音「ぽ」。',
            trapExplanation: '這是陷阱題。1/6/8/10搭配「本{ほん}」時都發生相同的音變模式。',
            relatedRules: ['h-p轉換規律', '促音化規則', '六本木的讀法']
        },
        sourceItem: { value: 6, kanji: '六本', reading: 'ろっぽん' }
    },
    {
        id: 'long_6_sent',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: 'ビールを＿＿注文しました。',
        stem_zh: '我點了六瓶啤酒。',
        options: [
            { text: 'ろくほん', isCorrect: false, reason: '陷阱！六本{ろっぽん}需要促音化+半濁音化。' },
            { text: 'ろっぽん', isCorrect: true, reason: '正確！「ビールを六本{ろっぽん}」表示「六瓶啤酒」。' },
            { text: 'ろくぼん', isCorrect: false, reason: '六本{ろっぽん}使用促音+半濁音。' },
            { text: 'むっぽん', isCorrect: false, reason: '量詞「本{ほん}」用音讀「ろく」，不用訓讀「む」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ビールを六本{ろっぽん}注文しました」表示「點了六瓶啤酒」。',
            trapExplanation: '六本{ろっぽん}固定讀「ろっぽん」。「六本木」（東京地名）也是相同讀法。',
            relatedRules: ['量詞「本{ほん}」的使用', '點餐表達']
        },
        sourceItem: { value: 6, kanji: '六本', reading: 'ろっぽん' }
    },
    {
        id: 'long_6_dial',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '映画のチケットは何本取りましたか？',
        stem_zh: '你拿了幾張電影票？',
        dialogue: {
            speakerA: '電車の路線は何本ありますか？',
            speakerB: '＿＿あります。（六條）'
        },
        options: [
            { text: 'ろくほん', isCorrect: false, reason: '六本{ろっぽん}需要促音化+半濁音化。' },
            { text: 'ろっぽん', isCorrect: true, reason: '正確！有六條電車路線。' },
            { text: 'ろくぼん', isCorrect: false, reason: '六本{ろっぽん}使用促音+半濁音。' },
            { text: 'むっつ', isCorrect: false, reason: '路線是線狀的，用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「路線」是線狀的，使用量詞「本{ほん}」。',
            relatedRules: ['量詞「本{ほん}」的使用', '交通路線の計數']
        },
        sourceItem: { value: 6, kanji: '六本', reading: 'ろっぽん' }
    },

    // ===== 8本 的三題（促音+半濁音：はっぽん） =====
    {
        id: 'long_8_pron',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「八本」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「八本」的正確讀音是？',
        options: [
            { text: 'はっぽん', isCorrect: true, reason: '正確！「八本{はっぽん}」發生促音化+半濁音化，讀作「はっぽん」。' },
            { text: 'はちほん', isCorrect: false, reason: '陷阱！八本{はっぽん}需要促音化+半濁音化。' },
            { text: 'はちぼん', isCorrect: false, reason: '八本{はっぽん}使用促音+半濁音，不是濁音。' },
            { text: 'はっほん', isCorrect: false, reason: '促音後不能接「ほ」，必須變為「ぽ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八本{はっぽん}」讀作「はっぽん」。「八」的「ち」變為促音「っ」，「本{ほん}」的「ほ」變為半濁音「ぽ」。',
            trapExplanation: '這是陷阱題。數字8搭配h行量詞時必定發生促音化+半濁音化。',
            relatedRules: ['h-p轉換規律', '促音化規則', '8的音變模式']
        },
        sourceItem: { value: 8, kanji: '八本', reading: 'はっぽん' }
    },
    {
        id: 'long_8_sent',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: 'タコには足が＿＿あります。',
        stem_zh: '章魚有八條腳。',
        options: [
            { text: 'はちほん', isCorrect: false, reason: '陷阱！八本{はっぽん}需要促音化+半濁音化。' },
            { text: 'はっぽん', isCorrect: true, reason: '正確！「タコには足が八本{はっぽん}」表示「章魚有八條腳」。' },
            { text: 'はちぼん', isCorrect: false, reason: '八本{はっぽん}使用促音+半濁音。' },
            { text: 'やっぽん', isCorrect: false, reason: '量詞「本{ほん}」用音讀「はち」，不用訓讀「や」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '章魚的腳是細長的，使用量詞「本{ほん}」。',
            trapExplanation: '八本{はっぽん}固定讀「はっぽん」，音變規則與1/6/10相同。',
            relatedRules: ['量詞「本{ほん}」的使用', '動物部位の計數']
        },
        sourceItem: { value: 8, kanji: '八本', reading: 'はっぽん' }
    },
    {
        id: 'long_8_dial',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: 'ケーキのろうそくは何本？',
        stem_zh: '蛋糕上有幾根蠟燭？',
        dialogue: {
            speakerA: 'ケーキのろうそくは何本ですか？',
            speakerB: '＿＿です。（八根）'
        },
        options: [
            { text: 'はちほん', isCorrect: false, reason: '八本{はっぽん}需要促音化+半濁音化。' },
            { text: 'はっぽん', isCorrect: true, reason: '正確！八根蠟燭。' },
            { text: 'はちぼん', isCorrect: false, reason: '八本{はっぽん}使用促音+半濁音。' },
            { text: 'やっつ', isCorrect: false, reason: '蠟燭是細長的，用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ろうそく」（蠟燭）是細長形，使用量詞「本{ほん}」。',
            relatedRules: ['量詞「本{ほん}」的使用', '生日派對']
        },
        sourceItem: { value: 8, kanji: '八本', reading: 'はっぽん' }
    },

    // ===== 10本 的三題（促音+半濁音：じゅっぽん） =====
    {
        id: 'long_10_pron',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十本」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十本」的正確讀音是？',
        options: [
            { text: 'じゅっぽん', isCorrect: true, reason: '正確！「十本{じゅっぽん}」發生促音化+半濁音化，讀作「じゅっぽん」。' },
            { text: 'じゅうほん', isCorrect: false, reason: '陷阱！十本{じゅっぽん}需要促音化+半濁音化。' },
            { text: 'じゅうぼん', isCorrect: false, reason: '十本{じゅっぽん}使用促音+半濁音，不是濁音。' },
            { text: 'とおほん', isCorrect: false, reason: '量詞「本{ほん}」用音讀「じゅう」，不用訓讀「とお」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十本{じゅっぽん}」讀作「じゅっぽん」。「十」的「う」變為促音「っ」，「本{ほん}」的「ほ」變為半濁音「ぽ」。',
            trapExplanation: '這是陷阱題。數字10搭配h行量詞時必定發生促音化+半濁音化。',
            relatedRules: ['h-p轉換規律', '促音化規則', '10的音變模式']
        },
        sourceItem: { value: 10, kanji: '十本', reading: 'じゅっぽん' }
    },
    {
        id: 'long_10_sent',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: '手には指が＿＿あります。',
        stem_zh: '手上有十根手指。',
        options: [
            { text: 'じゅうほん', isCorrect: false, reason: '陷阱！十本{じゅっぽん}需要促音化+半濁音化。' },
            { text: 'じゅっぽん', isCorrect: true, reason: '正確！「手には指が十本{じゅっぽん}」表示「手上有十根手指」。' },
            { text: 'じゅうぼん', isCorrect: false, reason: '十本{じゅっぽん}使用促音+半濁音。' },
            { text: 'とお', isCorrect: false, reason: '手指是細長的，應使用「本{ほん}」而非「つ」系統。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '手指是細長形，使用量詞「本{ほん}」。',
            trapExplanation: '十本{じゅっぽん}固定讀「じゅっぽん」，音變規則與1/6/8相同。',
            relatedRules: ['量詞「本{ほん}」的使用', '身體部位の計數']
        },
        sourceItem: { value: 10, kanji: '十本', reading: 'じゅっぽん' }
    },
    {
        id: 'long_10_dial',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: 'ボウリングのピンは何本？',
        stem_zh: '保齡球有幾根球瓶？',
        dialogue: {
            speakerA: 'ボウリングのピンは何本ですか？',
            speakerB: '＿＿です。（十根）'
        },
        options: [
            { text: 'じゅうほん', isCorrect: false, reason: '十本{じゅっぽん}需要促音化+半濁音化。' },
            { text: 'じゅっぽん', isCorrect: true, reason: '正確！保齡球有十根球瓶。' },
            { text: 'じゅうぼん', isCorrect: false, reason: '十本{じゅっぽん}使用促音+半濁音。' },
            { text: 'とお', isCorrect: false, reason: '球瓶是細長的，用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '保齡球的「ピン」是細長形，使用量詞「本{ほん}」。',
            relatedRules: ['量詞「本{ほん}」的使用', '運動用品']
        },
        sourceItem: { value: 10, kanji: '十本', reading: 'じゅっぽん' }
    },

    // ===== 5本 的三題（無音變：ごほん） =====
    {
        id: 'long_5_pron',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: false,
        stem: '「五本」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「五本」的正確讀音是？',
        options: [
            { text: 'ごほん', isCorrect: true, reason: '正確！「五本{ごほん}」無音變，讀作「ごほん」。' },
            { text: 'ごぽん', isCorrect: false, reason: '五本{ごほん}不發生半濁音化。' },
            { text: 'ごぼん', isCorrect: false, reason: '五本{ごほん}不發生濁音化。' },
            { text: 'いつほん', isCorrect: false, reason: '量詞「本{ほん}」用音讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五本{ごほん}」讀作「ごほん」。數字5不觸發音變。',
            relatedRules: ['量詞「本{ほん}」的音變規則']
        },
        sourceItem: { value: 5, kanji: '五本', reading: 'ごほん' }
    },
    {
        id: 'long_5_sent',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: false,
        stem: 'マーカーを＿＿買いました。',
        stem_zh: '我買了五支麥克筆。',
        options: [
            { text: 'ごぽん', isCorrect: false, reason: '五本{ごほん}無音變。' },
            { text: 'ごほん', isCorrect: true, reason: '正確！買了五支麥克筆。' },
            { text: 'いつほん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'ごぼん', isCorrect: false, reason: '五本{ごほん}無濁音化。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「マーカーを五本{ごほん}」表示「五支麥克筆」。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 5, kanji: '五本', reading: 'ごほん' }
    },
    {
        id: 'long_5_dial',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '傘何本必要？',
        stem_zh: '需要幾把傘？',
        dialogue: {
            speakerA: '傘は何本必要ですか？',
            speakerB: '＿＿必要です。（五把）'
        },
        options: [
            { text: 'いつほん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'ごほん', isCorrect: true, reason: '正確！需要五把傘。' },
            { text: 'ごぽん', isCorrect: false, reason: '五本{ごほん}無音變。' },
            { text: 'いつつ', isCorrect: false, reason: '傘用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「傘が五本{ごほん}必要」表示「需要五把傘」。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 5, kanji: '五本', reading: 'ごほん' }
    },

    // ===== 7本 的三題（無音變：ななほん/しちほん） =====
    {
        id: 'long_7_pron',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: false,
        stem: '「七本」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「七本」的正確讀音是？',
        options: [
            { text: 'ななほん', isCorrect: true, reason: '正確！「七本{ななほん}」通常讀作「ななほん」。' },
            { text: 'しちぽん', isCorrect: false, reason: '七本{ななほん}不發生半濁音化。' },
            { text: 'なのほん', isCorrect: false, reason: '「なの」是日期讀法。' },
            { text: 'しちぼん', isCorrect: false, reason: '七本{ななほん}不發生濁音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七本{ななほん}」通常讀作「ななほん」，也可讀作「しちほん」。',
            relatedRules: ['七的讀法選擇']
        },
        sourceItem: { value: 7, kanji: '七本', reading: 'ななほん' }
    },
    {
        id: 'long_7_sent',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: false,
        stem: 'ジュースを＿＿飲みました。',
        stem_zh: '我喝了七瓶果汁。',
        options: [
            { text: 'しちぽん', isCorrect: false, reason: '七本{ななほん}無音變。' },
            { text: 'ななほん', isCorrect: true, reason: '正確！喝了七瓶果汁。' },
            { text: 'なのほん', isCorrect: false, reason: '「なの」是日期讀法。' },
            { text: 'ななつ', isCorrect: false, reason: '瓶裝飲料用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ジュースを七本{ななほん}」表示「七瓶果汁」。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 7, kanji: '七本', reading: 'ななほん' }
    },
    {
        id: 'long_7_dial',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '鉛筆何本ある？',
        stem_zh: '有幾支鉛筆？',
        dialogue: {
            speakerA: '鉛筆は何本ありますか？',
            speakerB: '＿＿あります。（七支）'
        },
        options: [
            { text: 'しちぽん', isCorrect: false, reason: '七本{ななほん}無半濁音化。' },
            { text: 'ななほん', isCorrect: true, reason: '正確！有七支鉛筆。' },
            { text: 'なのほん', isCorrect: false, reason: '「なの」不用於量詞。' },
            { text: 'ななつ', isCorrect: false, reason: '鉛筆用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「鉛筆が七本{ななほん}」表示「七支鉛筆」。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 7, kanji: '七本', reading: 'ななほん' }
    },

    // ===== 9本 的三題（無音變：きゅうほん） =====
    {
        id: 'long_9_pron',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: false,
        stem: '「九本」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「九本」的正確讀音是？',
        options: [
            { text: 'きゅうほん', isCorrect: true, reason: '正確！「九本{きゅうほん}」無音變，讀作「きゅうほん」。' },
            { text: 'くほん', isCorrect: false, reason: '量詞「本{ほん}」搭配9使用「きゅう」。' },
            { text: 'きゅうぽん', isCorrect: false, reason: '九本{きゅうほん}無半濁音化。' },
            { text: 'きゅうぼん', isCorrect: false, reason: '九本{きゅうほん}無濁音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九本{きゅうほん}」讀作「きゅうほん」。數字9不觸發音變。',
            relatedRules: ['量詞「本{ほん}」的音變規則']
        },
        sourceItem: { value: 9, kanji: '九本', reading: 'きゅうほん' }
    },
    {
        id: 'long_9_sent',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: false,
        stem: '花瓶に花が＿＿あります。',
        stem_zh: '花瓶裡有九支花。',
        options: [
            { text: 'くほん', isCorrect: false, reason: '使用「きゅう」不是「く」。' },
            { text: 'きゅうほん', isCorrect: true, reason: '正確！花瓶裡有九支花。' },
            { text: 'きゅうぽん', isCorrect: false, reason: '九本{きゅうほん}無音變。' },
            { text: 'ここのつ', isCorrect: false, reason: '花（莖）用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「花が九本{きゅうほん}」表示「九支花」。花的莖是細長的。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 9, kanji: '九本', reading: 'きゅうほん' }
    },
    {
        id: 'long_9_dial',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: 'ワイン何本？',
        stem_zh: '有幾瓶紅酒？',
        dialogue: {
            speakerA: 'ワインは何本ありますか？',
            speakerB: '＿＿あります。（九瓶）'
        },
        options: [
            { text: 'くほん', isCorrect: false, reason: '使用「きゅう」。' },
            { text: 'きゅうほん', isCorrect: true, reason: '正確！有九瓶紅酒。' },
            { text: 'きゅうぽん', isCorrect: false, reason: '九本{きゅうほん}無音變。' },
            { text: 'ここのつ', isCorrect: false, reason: '瓶裝用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ワインが九本{きゅうほん}」表示「九瓶紅酒」。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 9, kanji: '九本', reading: 'きゅうほん' }
    },

    // ===== 11-20本 =====
    {
        id: 'long_11_pron',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十一本」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十一本」的正確讀音是？',
        options: [
            { text: 'じゅういっぽん', isCorrect: true, reason: '正確！「十一本{じゅういっぽん}」讀作「じゅういっぽん」。' },
            { text: 'じゅういちほん', isCorrect: false, reason: '陷阱！「一本{いっぽん}」部分需要促音化+半濁音化。' },
            { text: 'じゅういちぼん', isCorrect: false, reason: '十一本{じゅういっぽん}使用半濁音「ぽ」。' },
            { text: 'といっぽん', isCorrect: false, reason: '十使用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十一本{じゅういっぽん}」讀作「じゅういっぽん」。尾數是1時發生促音化+半濁音化。',
            trapExplanation: '尾數決定音變：11的尾數是1，所以變成「いっぽん」。',
            relatedRules: ['複合數字的音變']
        },
        sourceItem: { value: 11, kanji: '十一本', reading: 'じゅういっぽん' }
    },
    {
        id: 'long_13_pron',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十三本」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十三本」的正確讀音是？',
        options: [
            { text: 'じゅうさんぼん', isCorrect: true, reason: '正確！「十三本{じゅうさんぼん}」讀作「じゅうさんぼん」。' },
            { text: 'じゅうさんほん', isCorrect: false, reason: '陷阱！尾數3時「ほ」變為濁音「ぼ」。' },
            { text: 'じゅうさんぽん', isCorrect: false, reason: '十三本{じゅうさんぼん}使用濁音「ぼ」。' },
            { text: 'とみぼん', isCorrect: false, reason: '十三使用音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十三本{じゅうさんぼん}」讀作「じゅうさんぼん」。尾數是3時發生濁音化。',
            trapExplanation: '尾數3觸發濁音化，與「三本{さんぼん}」相同。',
            relatedRules: ['複合數字的音變']
        },
        sourceItem: { value: 13, kanji: '十三本', reading: 'じゅうさんぼん' }
    },
    {
        id: 'long_16_pron',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十六本」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十六本」的正確讀音是？',
        options: [
            { text: 'じゅうろっぽん', isCorrect: true, reason: '正確！「十六本{じゅうろっぽん}」讀作「じゅうろっぽん」。' },
            { text: 'じゅうろくほん', isCorrect: false, reason: '陷阱！尾數6時促音化+半濁音化。' },
            { text: 'じゅうろくぼん', isCorrect: false, reason: '十六本{じゅうろっぽん}使用半濁音「ぽ」。' },
            { text: 'とむっぽん', isCorrect: false, reason: '十六使用音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十六本{じゅうろっぽん}」讀作「じゅうろっぽん」。尾數是6時發生促音化+半濁音化。',
            trapExplanation: '尾數6觸發促音化+半濁音化，與「六本{ろっぽん}」相同。',
            relatedRules: ['複合數字的音變']
        },
        sourceItem: { value: 16, kanji: '十六本', reading: 'じゅうろっぽん' }
    },
    {
        id: 'long_18_pron',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十八本」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十八本」的正確讀音是？',
        options: [
            { text: 'じゅうはっぽん', isCorrect: true, reason: '正確！「十八本{じゅうはっぽん}」讀作「じゅうはっぽん」。' },
            { text: 'じゅうはちほん', isCorrect: false, reason: '陷阱！尾數8時促音化+半濁音化。' },
            { text: 'じゅうはちぼん', isCorrect: false, reason: '十八本{じゅうはっぽん}使用半濁音「ぽ」。' },
            { text: 'とやっぽん', isCorrect: false, reason: '十八使用音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十八本{じゅうはっぽん}」讀作「じゅうはっぽん」。尾數是8時發生促音化+半濁音化。',
            trapExplanation: '尾數8觸發促音化+半濁音化，與「八本{はっぽん}」相同。',
            relatedRules: ['複合數字的音變']
        },
        sourceItem: { value: 18, kanji: '十八本', reading: 'じゅうはっぽん' }
    },
    {
        id: 'long_20_pron',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「二十本」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「二十本」的正確讀音是？',
        options: [
            { text: 'にじゅっぽん', isCorrect: true, reason: '正確！「二十本{にじゅっぽん}」讀作「にじゅっぽん」。' },
            { text: 'にじゅうほん', isCorrect: false, reason: '陷阱！尾數0（十）時促音化+半濁音化。' },
            { text: 'にじゅうぼん', isCorrect: false, reason: '二十本{にじゅっぽん}使用半濁音「ぽ」。' },
            { text: 'はたぽん', isCorrect: false, reason: '二十使用音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十本{にじゅっぽん}」讀作「にじゅっぽん」。整十數（10, 20, 30...）時發生促音化+半濁音化。',
            trapExplanation: '整十數觸發與10相同的音變。',
            relatedRules: ['複合數字的音變']
        },
        sourceItem: { value: 20, kanji: '二十本', reading: 'にじゅっぽん' }
    },

    // ===== 補充：疑問詞「何本」的題目 =====
    {
        id: 'long_nan_pron',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「何本」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「何本」的正確讀音是？',
        options: [
            { text: 'なんぼん', isCorrect: true, reason: '正確！「何本{なんぼん}」發生濁音化，讀作「なんぼん」。' },
            { text: 'なんほん', isCorrect: false, reason: '陷阱！「何」的撥音「ん」使「ほ」變為濁音「ぼ」。' },
            { text: 'なんぽん', isCorrect: false, reason: '「何本{なんぼん}」使用濁音「ぼ」，不是半濁音「ぽ」。' },
            { text: 'なにほん', isCorrect: false, reason: '搭配量詞時，「何」讀作「なん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何本{なんぼん}」讀作「なんぼん」。疑問詞「何」的撥音「ん」引發濁音化。',
            trapExplanation: '這是陷阱題。撥音「ん」後的「h」音變為濁音「b」，與「三本{さんぼん}」規則相同。',
            relatedRules: ['疑問詞的音變', '「何＋量詞」的讀法']
        },
        sourceItem: { value: '?', kanji: '何本', reading: 'なんぼん' }
    },

    // ===== 更多情境題 =====
    {
        id: 'long_context_pen',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: true,
        stem: '文具店購物',
        stem_zh: '文具店購物',
        dialogue: {
            speakerA: 'ボールペンを何本お求めですか？',
            speakerB: '＿＿お願いします。（三支）'
        },
        options: [
            { text: 'さんほん', isCorrect: false, reason: '陷阱！三本{さんぼん}需要濁音化。' },
            { text: 'さんぼん', isCorrect: true, reason: '正確！三支原子筆。' },
            { text: 'みっつ', isCorrect: false, reason: '筆用「本{ほん}」。' },
            { text: 'さんぽん', isCorrect: false, reason: '三本{さんぼん}用濁音「ぼ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ボールペンを三本{さんぼん}」表示「三支原子筆」。',
            trapExplanation: '三本{さんぼん}固定濁音化。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 3, kanji: '三本', reading: 'さんぼん' }
    },
    {
        id: 'long_context_tree',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: false,
        stem: '公園に桜の木が＿＿植えられています。',
        stem_zh: '公園裡種了二十棵櫻花樹。',
        options: [
            { text: 'にじゅうほん', isCorrect: false, reason: '二十本{にじゅっぽん}需要促音化+半濁音化。' },
            { text: 'にじゅっぽん', isCorrect: true, reason: '正確！二十棵櫻花樹。' },
            { text: 'にじゅうぼん', isCorrect: false, reason: '二十本{にじゅっぽん}用半濁音「ぽ」。' },
            { text: 'はたぽん', isCorrect: false, reason: '使用音讀「にじゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「桜の木が二十本{にじゅっぽん}」表示「二十棵櫻花樹」。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 20, kanji: '二十本', reading: 'にじゅっぽん' }
    },
    {
        id: 'long_context_movie',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: false,
        stem: '今月は映画を＿＿見ました。',
        stem_zh: '這個月看了四部電影。',
        options: [
            { text: 'よんぼん', isCorrect: false, reason: '四本{よんほん}無音變。' },
            { text: 'よんほん', isCorrect: true, reason: '正確！看了四部電影。' },
            { text: 'しほん', isCorrect: false, reason: '使用「よん」不用「し」。' },
            { text: 'よっつ', isCorrect: false, reason: '電影用「本{ほん}」計數。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '電影使用「本{ほん}」來計數，因為是「膠卷」的形狀。',
            relatedRules: ['量詞「本{ほん}」的使用', '電影の計數']
        },
        sourceItem: { value: 4, kanji: '四本', reading: 'よんほん' }
    },
    {
        id: 'long_context_train',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: true,
        stem: '電車班次',
        stem_zh: '電車班次',
        dialogue: {
            speakerA: '一時間に電車は何本ありますか？',
            speakerB: '＿＿あります。（六班）'
        },
        options: [
            { text: 'ろくほん', isCorrect: false, reason: '陷阱！六本{ろっぽん}需要促音化+半濁音化。' },
            { text: 'ろっぽん', isCorrect: true, reason: '正確！一小時有六班電車。' },
            { text: 'むっぽん', isCorrect: false, reason: '使用音讀「ろく」。' },
            { text: 'ろくぼん', isCorrect: false, reason: '六本{ろっぽん}用半濁音「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '電車班次也用「本{ほん}」計數，因為是「路線」的概念。',
            trapExplanation: '六本{ろっぽん}固定促音化+半濁音化。',
            relatedRules: ['量詞「本{ほん}」的使用', '交通用語']
        },
        sourceItem: { value: 6, kanji: '六本', reading: 'ろっぽん' }
    },
    {
        id: 'long_context_phone',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: '今日は電話が＿＿ありました。',
        stem_zh: '今天有八通電話。',
        options: [
            { text: 'はちほん', isCorrect: false, reason: '陷阱！八本{はっぽん}需要促音化+半濁音化。' },
            { text: 'はっぽん', isCorrect: true, reason: '正確！有八通電話。' },
            { text: 'やっぽん', isCorrect: false, reason: '使用音讀「はち」。' },
            { text: 'はちぼん', isCorrect: false, reason: '八本{はっぽん}用半濁音「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '電話通話也用「本{ほん}」計數，因為是「線」的概念。',
            trapExplanation: '八本{はっぽん}固定促音化+半濁音化。',
            relatedRules: ['量詞「本{ほん}」的使用', '電話用語']
        },
        sourceItem: { value: 8, kanji: '八本', reading: 'はっぽん' }
    },
    {
        id: 'long_context_wine',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '紅酒選購',
        stem_zh: '紅酒選購',
        dialogue: {
            speakerA: 'ワインを何本買いますか？',
            speakerB: '＿＿買います。（兩瓶）'
        },
        options: [
            { text: 'ふたほん', isCorrect: false, reason: '使用音讀「に」。' },
            { text: 'にほん', isCorrect: true, reason: '正確！買兩瓶紅酒。' },
            { text: 'にぼん', isCorrect: false, reason: '二本{にほん}無音變。' },
            { text: 'ふたつ', isCorrect: false, reason: '瓶裝用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ワインを二本{にほん}」表示「兩瓶紅酒」。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 2, kanji: '二本', reading: 'にほん' }
    },
    {
        id: 'long_context_carrot',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: false,
        stem: 'にんじんを＿＿切りました。',
        stem_zh: '切了五根胡蘿蔔。',
        options: [
            { text: 'いつほん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'ごほん', isCorrect: true, reason: '正確！切了五根胡蘿蔔。' },
            { text: 'ごぽん', isCorrect: false, reason: '五本{ごほん}無音變。' },
            { text: 'いつつ', isCorrect: false, reason: '胡蘿蔔用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「にんじんを五本{ごほん}」表示「五根胡蘿蔔」。',
            relatedRules: ['量詞「本{ほん}」的使用', '蔬菜の計數']
        },
        sourceItem: { value: 5, kanji: '五本', reading: 'ごほん' }
    },
    {
        id: 'long_context_goal',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: true,
        stem: '足球比賽',
        stem_zh: '足球比賽',
        dialogue: {
            speakerA: '今日のサッカーで何本シュートを打ちましたか？',
            speakerB: '＿＿打ちました。（十球）'
        },
        options: [
            { text: 'じゅうほん', isCorrect: false, reason: '陷阱！十本{じゅっぽん}需要促音化+半濁音化。' },
            { text: 'じゅっぽん', isCorrect: true, reason: '正確！踢了十球射門。' },
            { text: 'とおほん', isCorrect: false, reason: '使用音讀「じゅう」。' },
            { text: 'じゅうぼん', isCorrect: false, reason: '十本{じゅっぽん}用半濁音「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '射門用「本{ほん}」計數。',
            trapExplanation: '十本{じゅっぽん}固定促音化+半濁音化。',
            relatedRules: ['量詞「本{ほん}」的使用', '運動用語']
        },
        sourceItem: { value: 10, kanji: '十本', reading: 'じゅっぽん' }
    },

    // ===== 比較規則題 =====
    {
        id: 'long_rule_168_10',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: false,
        stem: '以下哪些數字搭配「本」會發生「促音+半濁音」變化？',
        stem_zh: '以下哪些數字搭配「本」會發生「促音+半濁音」變化？',
        options: [
            { text: '1、6、8、10', isCorrect: true, reason: '正確！1/6/8/10搭配「本{ほん}」時發生促音化+半濁音化。' },
            { text: '3、何', isCorrect: false, reason: '3和「何{なん}」發生濁音化，變成「ぼん」。' },
            { text: '2、4、5、7、9', isCorrect: false, reason: '這些數字無音變，保持「ほん」。' },
            { text: '所有數字', isCorrect: false, reason: '只有特定數字會發生音變。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '1/6/8/10搭配h行量詞時：「っ」+「ぽん」（促音+半濁音）。',
            relatedRules: ['h-p轉換規律', '促音化規則']
        },
        sourceItem: { value: 0, kanji: '音變規則', reading: '促音+半濁音' }
    },
    {
        id: 'long_rule_3_nan',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: false,
        stem: '以下哪些搭配「本」會發生「濁音化」變化？',
        stem_zh: '以下哪些搭配「本」會發生「濁音化」變化？',
        options: [
            { text: '3、何', isCorrect: true, reason: '正確！3和「何{なん}」的撥音「ん」觸發濁音化。' },
            { text: '1、6、8、10', isCorrect: false, reason: '這些發生促音化+半濁音化，變成「っぽん」。' },
            { text: '2、4、5', isCorrect: false, reason: '這些無音變，保持「ほん」。' },
            { text: '7、9', isCorrect: false, reason: '7、9無音變。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '撥音「ん」後的h行量詞發生濁音化：「ぼん」。',
            relatedRules: ['h-b轉換規律', '濁音化規則']
        },
        sourceItem: { value: 0, kanji: '音變規則', reading: '濁音化' }
    },
    {
        id: 'long_rule_no_change',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: false,
        stem: '以下哪些數字搭配「本」時無音變？',
        stem_zh: '以下哪些數字搭配「本」時無音變？',
        options: [
            { text: '2、4、5、7、9', isCorrect: true, reason: '正確！這些數字搭配「本{ほん}」時保持原音「ほん」。' },
            { text: '1、3、6', isCorrect: false, reason: '1/6發生促音化+半濁音化，3發生濁音化。' },
            { text: '8、10、何', isCorrect: false, reason: '8/10發生促音化+半濁音化，「何{なん}」發生濁音化。' },
            { text: '所有數字', isCorrect: false, reason: '部分數字會發生音變。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '2/4/5/7/9搭配「本{ほん}」時無音變，保持「ほん」。',
            relatedRules: ['量詞「本{ほん}」的音變規則']
        },
        sourceItem: { value: 0, kanji: '音變規則', reading: '無變化' }
    },

    // ===== 錯誤辨識題 =====
    {
        id: 'long_error_1',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: '以下哪個讀法有錯誤？',
        stem_zh: '以下哪個讀法有錯誤？',
        options: [
            { text: '一本（いっぽん）', isCorrect: false, reason: '正確，1本{いっぽん}需要促音化+半濁音化。' },
            { text: '三本（さんほん）', isCorrect: true, reason: '錯誤！3本{さんぼん}需要濁音化，應為「さんぼん」。' },
            { text: '六本（ろっぽん）', isCorrect: false, reason: '正確，6本{ろっぽん}需要促音化+半濁音化。' },
            { text: '二本（にほん）', isCorrect: false, reason: '正確，2本{にほん}無音變。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '3本{さんぼん}應該讀作「さんぼん」，撥音「ん」後需濁音化。',
            trapExplanation: '這是測試「さんぼん」規則的陷阱題。',
            relatedRules: ['量詞「本{ほん}」的音變規則']
        },
        sourceItem: { value: 3, kanji: '三本', reading: 'さんぼん' }
    },
    {
        id: 'long_error_2',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: '以下哪個讀法有錯誤？',
        stem_zh: '以下哪個讀法有錯誤？',
        options: [
            { text: '八本（はっぽん）', isCorrect: false, reason: '正確，8本{はっぽん}需要促音化+半濁音化。' },
            { text: '十本（じゅっぽん）', isCorrect: false, reason: '正確，10本{じゅっぽん}需要促音化+半濁音化。' },
            { text: '何本（なんほん）', isCorrect: true, reason: '錯誤！「何本{なんぼん}」需要濁音化，應為「なんぼん」。' },
            { text: '五本（ごほん）', isCorrect: false, reason: '正確，5本{ごほん}無音變。' }
        ],
        correctIndex: 2,
        explanation: {
            correctRule: '「何本{なんぼん}」應該讀作「なんぼん」，撥音「ん」後需濁音化。',
            trapExplanation: '這是測試「なんぼん」規則的陷阱題。',
            relatedRules: ['量詞「本{ほん}」的音變規則']
        },
        sourceItem: { value: '?', kanji: '何本', reading: 'なんぼん' }
    },

    // ===== 適用物品題 =====
    {
        id: 'long_object_type_1',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: false,
        stem: '以下哪些物品使用量詞「本」？',
        stem_zh: '以下哪些物品使用量詞「本」？',
        options: [
            { text: '筆、傘、樹、香蕉、電影', isCorrect: true, reason: '正確！這些都是細長形或線狀的物品。' },
            { text: '書、紙、衣服', isCorrect: false, reason: '書用「冊」，紙和衣服用「枚」。' },
            { text: '貓、狗、魚', isCorrect: false, reason: '動物用「匹」。' },
            { text: '蘋果、橘子、球', isCorrect: false, reason: '圓形物品用「個」或「つ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「本{ほん}」用於細長形或線狀物品：筆、傘、樹、香蕉、電影（膠卷）。',
            relatedRules: ['量詞「本{ほん}」的使用範圍']
        },
        sourceItem: { value: 0, kanji: '本の適用', reading: '細長物' }
    },
    {
        id: 'long_object_type_2',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: false,
        stem: '「本」還能用於計數哪些抽象事物？',
        stem_zh: '「本」還能用於計數哪些抽象事物？',
        options: [
            { text: '電話、電車班次、射門、全壘打', isCorrect: true, reason: '正確！這些都有「線」或「軌跡」的概念。' },
            { text: '書、雜誌、報紙', isCorrect: false, reason: '書用「冊」，雜誌和報紙用「部」。' },
            { text: '人、動物', isCorrect: false, reason: '人用「人」，動物用「匹」等。' },
            { text: '房子、車', isCorrect: false, reason: '房子用「軒」，車用「台」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「本{ほん}」也用於有「線」或「軌跡」概念的事物：電話（線）、電車班次（路線）、射門（軌跡）。',
            relatedRules: ['量詞「本{ほん}」の抽象使用']
        },
        sourceItem: { value: 0, kanji: '本の抽象使用', reading: '線・軌跡' }
    },

    // ===== 補充更多情境題達到100題 =====
    {
        id: 'long_extra_1',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: 'バットを＿＿持っています。',
        stem_zh: '我有一支球棒。',
        options: [
            { text: 'いちほん', isCorrect: false, reason: '陷阱！1本{いっぽん}需要促音化+半濁音化。' },
            { text: 'いっぽん', isCorrect: true, reason: '正確！有一本{いっぽん}球棒。' },
            { text: 'ひとほん', isCorrect: false, reason: '使用音讀「いち」。' },
            { text: 'いっぼん', isCorrect: false, reason: '1本{いっぽん}用半濁音「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「バットを一本{いっぽん}」表示「一本{いっぽん}球棒」。',
            trapExplanation: '1本{いっぽん}固定讀「いっぽん」。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 1, kanji: '一本', reading: 'いっぽん' }
    },
    {
        id: 'long_extra_2',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '釣魚成果',
        stem_zh: '釣魚成果',
        dialogue: {
            speakerA: '今日は魚を何本釣りましたか？',
            speakerB: '＿＿釣りました。（兩條）'
        },
        options: [
            { text: 'ふたほん', isCorrect: false, reason: '使用音讀「に」。' },
            { text: 'にほん', isCorrect: true, reason: '正確！釣了兩本{にほん}魚。' },
            { text: 'にぼん', isCorrect: false, reason: '2本{にほん}無音變。' },
            { text: 'にひき', isCorrect: false, reason: '釣到{つれた}的魚通常用「本{ほん}」計數。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '釣到{つれた}的魚用「本{ほん}」計數，因為是細長形。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 2, kanji: '二本', reading: 'にほん' }
    },
    {
        id: 'long_extra_3',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: '大根を＿＿買いました。',
        stem_zh: '我買了三根蘿蔔。',
        options: [
            { text: 'さんほん', isCorrect: false, reason: '陷阱！3本{さんぼん}需要濁音化。' },
            { text: 'さんぼん', isCorrect: true, reason: '正確！買了三本{さんぼん}蘿蔔。' },
            { text: 'みっつ', isCorrect: false, reason: '蘿蔔用「本{ほん}」。' },
            { text: 'さんぽん', isCorrect: false, reason: '3本{さんぼん}用濁音「ぼ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「大根{だいこん}を三本{さんぼん}」表示「三本{さんぼん}蘿蔔」。',
            trapExplanation: '3本{さんぼん}固定濁音化。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 3, kanji: '三本', reading: 'さんぼん' }
    },
    {
        id: 'long_extra_4',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '牙刷數量',
        stem_zh: '牙刷數量',
        dialogue: {
            speakerA: '歯ブラシは何本ありますか？',
            speakerB: '＿＿あります。（四支）'
        },
        options: [
            { text: 'しほん', isCorrect: false, reason: '使用「よん」不用「し」。' },
            { text: 'よんほん', isCorrect: true, reason: '正確！有四本{よんほん}牙刷。' },
            { text: 'よんぼん', isCorrect: false, reason: '4本{よんほん}無音變。' },
            { text: 'よっつ', isCorrect: false, reason: '牙刷用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「歯{は}ブラシが四本{よんほん}」表示「四本{よんほん}牙刷」。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 4, kanji: '四本', reading: 'よんほん' }
    },
    {
        id: 'long_extra_5',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: 'タイヤを＿＿交換しました。',
        stem_zh: '換了六個輪胎。',
        options: [
            { text: 'ろくほん', isCorrect: false, reason: '陷阱！6本{ろっぽん}需要促音化+半濁音化。' },
            { text: 'ろっぽん', isCorrect: true, reason: '正確！換了{こうかん}六個{ろっぽん}輪胎。' },
            { text: 'むっつ', isCorrect: false, reason: '輪胎用「本{ほん}」計數。' },
            { text: 'ろくぼん', isCorrect: false, reason: '6本{ろっぽん}用半濁音「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '輪胎用「本{ほん}」計數。',
            trapExplanation: '6本{ろっぽん}固定促音化+半濁音化。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 6, kanji: '六本', reading: 'ろっぽん' }
    },
    {
        id: 'long_extra_6',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '吸管數量',
        stem_zh: '吸管數量',
        dialogue: {
            speakerA: 'ストローは何本必要ですか？',
            speakerB: '＿＿お願いします。（七支）'
        },
        options: [
            { text: 'なのほん', isCorrect: false, reason: '「なの」是日期讀法。' },
            { text: 'ななほん', isCorrect: true, reason: '正確！需要七本{ななほん}吸管。' },
            { text: 'しちぽん', isCorrect: false, reason: '7本{ななほん}無半濁音化。' },
            { text: 'ななつ', isCorrect: false, reason: '吸管用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ストローが七本{ななほん}」表示「七本{ななほん}吸管」。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 7, kanji: '七本', reading: 'ななほん' }
    },
    {
        id: 'long_extra_7',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: 'ロウソクを＿＿立てました。',
        stem_zh: '立了八根蠟燭。',
        options: [
            { text: 'はちほん', isCorrect: false, reason: '陷阱！8本{はっぽん}需要促音化+半濁音化。' },
            { text: 'はっぽん', isCorrect: true, reason: '正確！立了八本{はっぽん}蠟燭。' },
            { text: 'やっつ', isCorrect: false, reason: '蠟燭用「本{ほん}」。' },
            { text: 'はちぼん', isCorrect: false, reason: '8本{はっぽん}用半濁音「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ロウソクを八本{はっぽん}」表示「八本{はっぽん}蠟燭」。',
            trapExplanation: '8本{はっぽん}固定促音化+半濁音化。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 8, kanji: '八本', reading: 'はっぽん' }
    },
    {
        id: 'long_extra_8',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '螺絲數量',
        stem_zh: '螺絲數量',
        dialogue: {
            speakerA: 'ネジは何本使いましたか？',
            speakerB: '＿＿使いました。（九支）'
        },
        options: [
            { text: 'くほん', isCorrect: false, reason: '使用「きゅう」不是「く」。' },
            { text: 'きゅうほん', isCorrect: true, reason: '正確！用了九本{きゅうほん}螺絲。' },
            { text: 'きゅうぽん', isCorrect: false, reason: '9本{きゅうほん}無音變。' },
            { text: 'ここのつ', isCorrect: false, reason: '螺絲用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ネジを九本{きゅうほん}」表示「九本{きゅうほん}螺絲」。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 9, kanji: '九本', reading: 'きゅうほん' }
    },
    {
        id: 'long_extra_9',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: '道路に電柱が＿＿並んでいます。',
        stem_zh: '路上排著十根電線桿。',
        options: [
            { text: 'じゅうほん', isCorrect: false, reason: '陷阱！10本{じゅっぽん}需要促音化+半濁音化。' },
            { text: 'じゅっぽん', isCorrect: true, reason: '正確！排著十本{じゅっぽん}電線桿。' },
            { text: 'とおほん', isCorrect: false, reason: '使用音讀「じゅう」。' },
            { text: 'じゅうぼん', isCorrect: false, reason: '10本{じゅっぽん}用半濁音「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「電柱{でんちゅう}が十本{じゅっぽん}」表示「十本{じゅっぽん}電線桿」。',
            trapExplanation: '10本{じゅっぽん}固定促音化+半濁音化。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 10, kanji: '十本', reading: 'じゅっぽん' }
    },
    {
        id: 'long_extra_10',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: true,
        stem: '訂購飲料',
        stem_zh: '訂購飲料',
        dialogue: {
            speakerA: 'お茶を何本注文しますか？',
            speakerB: '＿＿お願いします。（十一瓶）'
        },
        options: [
            { text: 'じゅういちほん', isCorrect: false, reason: '陷阱！尾數1時促音化+半濁音化。' },
            { text: 'じゅういっぽん', isCorrect: true, reason: '正確！訂{ちゅうもん}十一瓶{じゅういっぽん}茶{おちゃ}。' },
            { text: 'といっぽん', isCorrect: false, reason: '十使用「じゅう」。' },
            { text: 'じゅういちぼん', isCorrect: false, reason: '尾數1用半濁音「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「お茶{ちゃ}を十一本{じゅういっぽん}」表示「十一瓶{じゅういっぽん}茶{おちゃ}」。',
            trapExplanation: '尾數決定音變，11的尾數是1。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 11, kanji: '十一本', reading: 'じゅういっぽん' }
    },
    {
        id: 'long_extra_11',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: false,
        stem: '庭に竹が＿＿生えています。',
        stem_zh: '庭院裡長了十二棵竹子。',
        options: [
            { text: 'じゅうふたほん', isCorrect: false, reason: '使用音讀「に」。' },
            { text: 'じゅうにほん', isCorrect: true, reason: '正確！長了{はえています}十二棵{じゅうにほん}竹子{たけ}。' },
            { text: 'じゅうにぼん', isCorrect: false, reason: '12本{じゅうにほん}無音變。' },
            { text: 'とにほん', isCorrect: false, reason: '十使用「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「竹{たけ}が十二本{じゅうにほん}」表示「十二棵{じゅうにほん}竹子{たけ}」。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 12, kanji: '十二本', reading: 'じゅうにほん' }
    },
    {
        id: 'long_extra_12',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: true,
        stem: '購買蔬菜',
        stem_zh: '購買蔬菜',
        dialogue: {
            speakerA: 'きゅうりは何本買いますか？',
            speakerB: '＿＿買います。（十三根）'
        },
        options: [
            { text: 'じゅうさんほん', isCorrect: false, reason: '陷阱！尾數3時濁音化。' },
            { text: 'じゅうさんぼん', isCorrect: true, reason: '正確！買十三本{じゅうさんぼん}小黃瓜。' },
            { text: 'とみぼん', isCorrect: false, reason: '十三{じゅうさん}使用音讀。' },
            { text: 'じゅうさんぽん', isCorrect: false, reason: '尾數3用濁音「ぼ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「きゅうりを十三本{じゅうさんぼん}」表示「十三本{じゅうさんぼん}小黃瓜」。',
            trapExplanation: '尾數3觸發濁音化。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 13, kanji: '十三本', reading: 'じゅうさんぼん' }
    },
    {
        id: 'long_extra_13',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: false,
        stem: 'リボンを＿＿用意しました。',
        stem_zh: '準備了十四條緞帶。',
        options: [
            { text: 'じゅうしほん', isCorrect: false, reason: '使用「よん」不用「し」。' },
            { text: 'じゅうよんほん', isCorrect: true, reason: '正確！準備了十四本{じゅうよんほん}緞帶。' },
            { text: 'じゅうよんぼん', isCorrect: false, reason: '14本{じゅうよんほん}無音變。' },
            { text: 'といよんほん', isCorrect: false, reason: '十使用「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「リボンを十四本{じゅうよんほん}」表示「十四本{じゅうよんほん}緞帶」。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 14, kanji: '十四本', reading: 'じゅうよんほん' }
    },
    {
        id: 'long_extra_14',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '棒球練習',
        stem_zh: '棒球練習',
        dialogue: {
            speakerA: '今日は何本ヒットを打ちましたか？',
            speakerB: '＿＿打ちました。（十五支）'
        },
        options: [
            { text: 'じゅういつほん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'じゅうごほん', isCorrect: true, reason: '正確！打了十五本{じゅうごほん}安打。' },
            { text: 'じゅうごぽん', isCorrect: false, reason: '15本{じゅうごほん}無音變。' },
            { text: 'とごほん', isCorrect: false, reason: '十使用「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ヒットを十五本{じゅうごほん}」表示「十五本{じゅうごほん}安打」。',
            relatedRules: ['量詞「本{ほん}」的使用', '運動用語']
        },
        sourceItem: { value: 15, kanji: '十五本', reading: 'じゅうごほん' }
    },
    {
        id: 'long_extra_15',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: '弓道で矢を＿＿射ました。',
        stem_zh: '弓道射了十六支箭。',
        options: [
            { text: 'じゅうろくほん', isCorrect: false, reason: '陷阱！尾數6時促音化+半濁音化。' },
            { text: 'じゅうろっぽん', isCorrect: true, reason: '正確！射了十六本{じゅうろっぽん}箭。' },
            { text: 'じゅうむっぽん', isCorrect: false, reason: '使用音讀「ろく」。' },
            { text: 'じゅうろくぼん', isCorrect: false, reason: '尾數6用半濁音「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「矢{や}を十六本{じゅうろっぽん}」表示「十六本{じゅうろっぽん}箭」。',
            trapExplanation: '尾數6觸發促音化+半濁音化。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 16, kanji: '十六本', reading: 'じゅうろっぽん' }
    },
    {
        id: 'long_extra_16',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '準備筷子',
        stem_zh: '準備筷子',
        dialogue: {
            speakerA: 'お箸は何本用意しますか？',
            speakerB: '＿＿用意します。（十七雙，即三十四支）'
        },
        options: [
            { text: 'じゅうしちほん', isCorrect: false, reason: '雖然可以，但口語常用「なな」。' },
            { text: 'じゅうななほん', isCorrect: true, reason: '正確！準備十七本{じゅうななほん}筷子。' },
            { text: 'じゅうなのほん', isCorrect: false, reason: '「なの」是日期讀法。' },
            { text: 'じゅうななぽん', isCorrect: false, reason: '17本{じゅうななほん}無音變。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「お箸{はし}を十七本{じゅうななほん}」表示「十七本{じゅうななほん}筷子」。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 17, kanji: '十七本', reading: 'じゅうななほん' }
    },
    {
        id: 'long_extra_17',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: 'クレヨンを＿＿入れました。',
        stem_zh: '放入了十八支蠟筆。',
        options: [
            { text: 'じゅうはちほん', isCorrect: false, reason: '陷阱！尾數8時促音化+半濁音化。' },
            { text: 'じゅうはっぽん', isCorrect: true, reason: '正確！放入了十八本{じゅうはっぽん}蠟筆。' },
            { text: 'じゅうやっぽん', isCorrect: false, reason: '使用音讀「はち」。' },
            { text: 'じゅうはちぼん', isCorrect: false, reason: '尾數8用半濁音「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「クレヨンを十八本{じゅうはっぽん}」表示「十八本{じゅうはっぽん}蠟筆」。',
            trapExplanation: '尾數8觸發促音化+半濁音化。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 18, kanji: '十八本', reading: 'じゅうはっぽん' }
    },
    {
        id: 'long_extra_18',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '氣球數量',
        stem_zh: '氣球數量',
        dialogue: {
            speakerA: '風船は何本ありますか？',
            speakerB: '＿＿あります。（十九個）'
        },
        options: [
            { text: 'じゅうくほん', isCorrect: false, reason: '使用「きゅう」不是「く」。' },
            { text: 'じゅうきゅうほん', isCorrect: true, reason: '正確！有十九個{じゅうきゅうほん}氣球{ふうせん}。' },
            { text: 'じゅうきゅうぽん', isCorrect: false, reason: '19本{じゅうきゅうほん}無音變。' },
            { text: 'とくほん', isCorrect: false, reason: '十九{じゅうきゅう}使用音讀。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「風船{ふうせん}が十九本{じゅうきゅうほん}」表示「十九個{じゅうきゅうほん}氣球{ふうせん}」。',
            relatedRules: ['量詞「本{ほん}」的使用']
        },
        sourceItem: { value: 19, kanji: '十九本', reading: 'じゅうきゅうほん' }
    },
    {
        id: 'long_extra_final',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '以下哪組數字+本的讀法都正確？',
        stem_zh: '以下哪組數字+本的讀法都正確？',
        options: [
            { text: '1本(いっぽん)、3本(さんぼん)、6本(ろっぽん)', isCorrect: true, reason: '正確！這三個讀法都正確。' },
            { text: '1本(いちほん)、3本(さんほん)、6本(ろくほん)', isCorrect: false, reason: '1/6需要促音化+半濁音化，3需要濁音化。' },
            { text: '1本(いっぽん)、3本(さんほん)、6本(ろっぽん)', isCorrect: false, reason: '3本{さんぼん}需要濁音化「さんぼん」。' },
            { text: '1本(いっぼん)、3本(さんぼん)、6本(ろっぼん)', isCorrect: false, reason: '1/6用半濁音「ぽ」不是濁音「ぼ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '1/6/8/10→促音+半濁音（っぽん），3/何{なん}→濁音（ぼん）。',
            trapExplanation: '這題測試對「本{ほん}」所有音變規則的掌握。',
            relatedRules: ['量詞「本{ほん}」的音變規則']
        },
        sourceItem: { value: 0, kanji: '音變總複習', reading: '各種' }
    },

    // ===== 補充30題達到100題 =====
    {
        id: 'long_100_1',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: false,
        stem: '水族館で魚が＿＿泳いでいます。',
        stem_zh: '水族館裡有五條魚在游。',
        options: [
            { text: 'ごぽん', isCorrect: false, reason: '5本{ごほん}無音變。' },
            { text: 'ごほん', isCorrect: true, reason: '正確！五本{ごほん}魚在游泳。' },
            { text: 'いつほん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'ごひき', isCorrect: false, reason: '細長形的魚可用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '細長形的魚可用「本{ほん}」計數。', relatedRules: ['量詞「本{ほん}」的使用'] },
        sourceItem: { value: 5, kanji: '五本', reading: 'ごほん' }
    },
    {
        id: 'long_100_2',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: true,
        stem: '超市購物',
        stem_zh: '超市購物',
        dialogue: { speakerA: 'ごぼうを何本買いますか？', speakerB: '＿＿買います。（一根）' },
        options: [
            { text: 'いちほん', isCorrect: false, reason: '陷阱！1本{いっぽん}促音化+半濁音化。' },
            { text: 'いっぽん', isCorrect: true, reason: '正確！一本{いっぽん}牛蒡。' },
            { text: 'ひとほん', isCorrect: false, reason: '使用音讀「いち」。' },
            { text: 'いっぼん', isCorrect: false, reason: '1本{いっぽん}用半濁音「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ごぼうを一本{いっぽん}」。', trapExplanation: '1本{いっぽん}固定促音化+半濁音化。', relatedRules: ['量詞「本{ほん}」的使用'] },
        sourceItem: { value: 1, kanji: '一本', reading: 'いっぽん' }
    },
    {
        id: 'long_100_3',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: false,
        stem: '棚にワインが＿＿並んでいます。',
        stem_zh: '架子上排著二十瓶紅酒。',
        options: [
            { text: 'にじゅうほん', isCorrect: false, reason: '20本{にじゅっぽん}促音化+半濁音化。' },
            { text: 'にじゅっぽん', isCorrect: true, reason: '正確！二十瓶{にじゅっぽん}紅酒。' },
            { text: 'はたほん', isCorrect: false, reason: '使用音讀「にじゅう」。' },
            { text: 'にじゅうぼん', isCorrect: false, reason: '20本{にじゅっぽん}用半濁音「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '整十{じゅう}數觸發促音化+半濁音化。', relatedRules: ['量詞「本{ほん}」的音變規則'] },
        sourceItem: { value: 20, kanji: '二十本', reading: 'にじゅっぽん' }
    },
    {
        id: 'long_100_4',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: true,
        stem: '高爾夫球',
        stem_zh: '高爾夫球',
        dialogue: { speakerA: '今日は何本ホールインワンを打ちましたか？', speakerB: '残念、＿＿も打てませんでした。（一個也沒有）' },
        options: [
            { text: 'いちほん', isCorrect: false, reason: '陷阱！1本{いっぽん}促音化+半濁音化。' },
            { text: 'いっぽん', isCorrect: true, reason: '正確！「一本{いっぽん}も打{う}てませんでした」表示「一個也沒打進」。' },
            { text: 'ひとほん', isCorrect: false, reason: '使用音讀「いち」。' },
            { text: 'いっぼん', isCorrect: false, reason: '1本{いっぽん}用半濁音「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「一本{いっぽん}も〜ない」表示「一個也沒有〜」。', trapExplanation: '1本{いっぽん}固定促音化+半濁音化。', relatedRules: ['量詞「本{ほん}」的使用'] },
        sourceItem: { value: 1, kanji: '一本', reading: 'いっぽん' }
    },
    {
        id: 'long_100_5',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: false,
        stem: 'テントのポールが＿＿必要です。',
        stem_zh: '帳篷需要四根支柱。',
        options: [
            { text: 'しほん', isCorrect: false, reason: '使用「よん」不用「し」。' },
            { text: 'よんほん', isCorrect: true, reason: '正確！需要四本{よんほん}支柱。' },
            { text: 'よんぼん', isCorrect: false, reason: '4本{よんほん}無音變。' },
            { text: 'よっつ', isCorrect: false, reason: '支柱用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ポールが四本{よんほん}」。', relatedRules: ['量詞「本{ほん}」的使用'] },
        sourceItem: { value: 4, kanji: '四本', reading: 'よんほん' }
    },
    {
        id: 'long_100_6',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: true,
        stem: '工地材料',
        stem_zh: '工地材料',
        dialogue: { speakerA: '鉄パイプは何本ありますか？', speakerB: '＿＿あります。（三十根）' },
        options: [
            { text: 'さんじゅうほん', isCorrect: false, reason: '陷阱！整十{じゅう}數促音化+半濁音化。' },
            { text: 'さんじゅっぽん', isCorrect: true, reason: '正確！三十本{さんじゅっぽん}鐵管。' },
            { text: 'みそほん', isCorrect: false, reason: '使用音讀「さんじゅう」。' },
            { text: 'さんじゅうぼん', isCorrect: false, reason: '整十{じゅう}數用半濁音「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '整十{じゅう}數（10/20/30...）觸發促音化+半濁音化。', trapExplanation: '30本{さんじゅっぽん}同理。', relatedRules: ['量詞「本{ほん}」的音變規則'] },
        sourceItem: { value: 30, kanji: '三十本', reading: 'さんじゅっぽん' }
    },
    {
        id: 'long_100_7',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: false,
        stem: '駐車場には電柱が＿＿立っています。',
        stem_zh: '停車場有七根電線桿。',
        options: [
            { text: 'しちぽん', isCorrect: false, reason: '7本{ななほん}無音變。' },
            { text: 'ななほん', isCorrect: true, reason: '正確！七本{ななほん}電線桿。' },
            { text: 'なのほん', isCorrect: false, reason: '「なの」是日期讀法。' },
            { text: 'ななぽん', isCorrect: false, reason: '7本{ななほん}保持「ほ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「電柱{でんちゅう}が七本{ななほん}」。', relatedRules: ['量詞「本{ほん}」的使用'] },
        sourceItem: { value: 7, kanji: '七本', reading: 'ななほん' }
    },
    {
        id: 'long_100_8',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '毛線數量',
        stem_zh: '毛線數量',
        dialogue: { speakerA: '毛糸は何本使いましたか？', speakerB: '＿＿使いました。（九球）' },
        options: [
            { text: 'くほん', isCorrect: false, reason: '使用「きゅう」。' },
            { text: 'きゅうほん', isCorrect: true, reason: '正確！用了九球{きゅうほん}毛線{けいと}。' },
            { text: 'きゅうぽん', isCorrect: false, reason: '9本{きゅうほん}無音變。' },
            { text: 'ここのほん', isCorrect: false, reason: '使用音讀「きゅう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「毛糸{けいと}を九本{きゅうほん}」。', relatedRules: ['量詞「本{ほん}」的使用'] },
        sourceItem: { value: 9, kanji: '九本', reading: 'きゅうほん' }
    },
    {
        id: 'long_100_9',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: 'ホームランを＿＿打ちました。',
        stem_zh: '打了三支全壘打。',
        options: [
            { text: 'さんほん', isCorrect: false, reason: '陷阱！3本{さんぼん}濁音化。' },
            { text: 'さんぼん', isCorrect: true, reason: '正確！打了三本{さんぼん}全壘打。' },
            { text: 'みっつ', isCorrect: false, reason: '全壘打用「本{ほん}」。' },
            { text: 'さんぽん', isCorrect: false, reason: '3本{さんぼん}用濁音「ぼ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ホームランを三本{さんぼん}」。', trapExplanation: '3本{さんぼん}固定濁音化。', relatedRules: ['量詞「本{ほん}」的使用'] },
        sourceItem: { value: 3, kanji: '三本', reading: 'さんぼん' }
    },
    {
        id: 'long_100_10',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '蠟燭準備',
        stem_zh: '蠟燭準備',
        dialogue: { speakerA: 'ろうそくは何本立てますか？', speakerB: '＿＿立てます。（兩根）' },
        options: [
            { text: 'ふたほん', isCorrect: false, reason: '使用音讀「に」。' },
            { text: 'にほん', isCorrect: true, reason: '正確！立兩本{にほん}蠟燭。' },
            { text: 'にぼん', isCorrect: false, reason: '2本{にほん}無音變。' },
            { text: 'ふたつ', isCorrect: false, reason: '蠟燭用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ろうそくを二本{にほん}」。', relatedRules: ['量詞「本{ほん}」的使用'] },
        sourceItem: { value: 2, kanji: '二本', reading: 'にほん' }
    },
    {
        id: 'long_100_11',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: 'スティックのりを＿＿持っています。',
        stem_zh: '我有六支口紅膠。',
        options: [
            { text: 'ろくほん', isCorrect: false, reason: '陷阱！6本{ろっぽん}促音化+半濁音化。' },
            { text: 'ろっぽん', isCorrect: true, reason: '正確！有六本{ろっぽん}口紅膠。' },
            { text: 'むっつ', isCorrect: false, reason: '口紅膠用「本{ほん}」。' },
            { text: 'ろくぼん', isCorrect: false, reason: '6本{ろっぽん}用半濁音「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「スティックのりを六本{ろっぽん}」。', trapExplanation: '6本{ろっぽん}固定促音化+半濁音化。', relatedRules: ['量詞「本{ほん}」的使用'] },
        sourceItem: { value: 6, kanji: '六本', reading: 'ろっぽん' }
    },
    {
        id: 'long_100_12',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '植物栽培',
        stem_zh: '植物栽培',
        dialogue: { speakerA: 'チューリップの球根は何本植えましたか？', speakerB: '＿＿植えました。（十五個）' },
        options: [
            { text: 'じゅういつほん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'じゅうごほん', isCorrect: true, reason: '正確！種了{うえました}十五個{じゅうごほん}球根。' },
            { text: 'じゅうごぽん', isCorrect: false, reason: '15本{じゅうごほん}無音變。' },
            { text: 'とごほん', isCorrect: false, reason: '使用音讀「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「球根を十五本{じゅうごほん}」。', relatedRules: ['量詞「本{ほん}」的使用'] },
        sourceItem: { value: 15, kanji: '十五本', reading: 'じゅうごほん' }
    },
    {
        id: 'long_100_13',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: 'アンテナが＿＿立っています。',
        stem_zh: '立著八根天線。',
        options: [
            { text: 'はちほん', isCorrect: false, reason: '陷阱！8本{はっぽん}促音化+半濁音化。' },
            { text: 'はっぽん', isCorrect: true, reason: '正確！立著八本{はっぽん}天線。' },
            { text: 'やっつ', isCorrect: false, reason: '天線用「本{ほん}」。' },
            { text: 'はちぼん', isCorrect: false, reason: '8本{はっぽん}用半濁音「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「アンテナが八本{はっぽん}」。', trapExplanation: '8本{はっぽん}固定促音化+半濁音化。', relatedRules: ['量詞「本{ほん}」的使用'] },
        sourceItem: { value: 8, kanji: '八本', reading: 'はっぽん' }
    },
    {
        id: 'long_100_14',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '棒冰數量',
        stem_zh: '棒冰數量',
        dialogue: { speakerA: 'アイスキャンディーは何本買いますか？', speakerB: '＿＿買います。（四支）' },
        options: [
            { text: 'しほん', isCorrect: false, reason: '使用「よん」。' },
            { text: 'よんほん', isCorrect: true, reason: '正確！買四本{よんほん}棒冰。' },
            { text: 'よんぼん', isCorrect: false, reason: '4本{よんほん}無音變。' },
            { text: 'よっつ', isCorrect: false, reason: '棒冰用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「アイスキャンディーを四本{よんほん}」。', relatedRules: ['量詞「本{ほん}」的使用'] },
        sourceItem: { value: 4, kanji: '四本', reading: 'よんほん' }
    },
    {
        id: 'long_100_15',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: 'CMを＿＿撮影しました。',
        stem_zh: '拍了十支廣告。',
        options: [
            { text: 'じゅうほん', isCorrect: false, reason: '陷阱！10本{じゅっぽん}促音化+半濁音化。' },
            { text: 'じゅっぽん', isCorrect: true, reason: '正確！拍了十本{じゅっぽん}廣告。' },
            { text: 'とおほん', isCorrect: false, reason: '使用音讀「じゅう」。' },
            { text: 'じゅうぼん', isCorrect: false, reason: '10本{じゅっぽん}用半濁音「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '廣告（影片{えいが}）用「本{ほん}」計數。', trapExplanation: '10本{じゅっぽん}固定促音化+半濁音化。', relatedRules: ['量詞「本{ほん}」的使用'] },
        sourceItem: { value: 10, kanji: '十本', reading: 'じゅっぽん' }
    },
    {
        id: 'long_100_16',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: true,
        stem: '論文數量',
        stem_zh: '論文數量',
        dialogue: { speakerA: '今年は論文を何本発表しましたか？', speakerB: '＿＿発表しました。（三篇）' },
        options: [
            { text: 'さんほん', isCorrect: false, reason: '陷阱！3本{さんぼん}濁音化。' },
            { text: 'さんぼん', isCorrect: true, reason: '正確！發表{はっぴょう}了三篇{さんぼん}論文{ろんぶん}。' },
            { text: 'みっつ', isCorrect: false, reason: '論文{ろんぶん}可用「本{ほん}」計數。' },
            { text: 'さんぽん', isCorrect: false, reason: '3本{さんぼん}用濁音「ぼ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '論文{ろんぶん}可用「本{ほん}」計數。', trapExplanation: '3本{さんぼん}固定濁音化。', relatedRules: ['量詞「本{ほん}」的使用'] },
        sourceItem: { value: 3, kanji: '三本', reading: 'さんぼん' }
    },
    {
        id: 'long_100_17',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: false,
        stem: 'ケーブルが＿＿必要です。',
        stem_zh: '需要七條電線。',
        options: [
            { text: 'しちぽん', isCorrect: false, reason: '7本{ななほん}無音變。' },
            { text: 'ななほん', isCorrect: true, reason: '正確！需要七本{ななほん}電線。' },
            { text: 'なのほん', isCorrect: false, reason: '「なの」是日期讀法。' },
            { text: 'ななつ', isCorrect: false, reason: '電線用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ケーブルが七本{ななほん}」。', relatedRules: ['量詞「本{ほん}」的使用'] },
        sourceItem: { value: 7, kanji: '七本', reading: 'ななほん' }
    },
    {
        id: 'long_100_18',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '骨折情況',
        stem_zh: '骨折情況',
        dialogue: { speakerA: '骨は何本折れましたか？', speakerB: '幸い＿＿だけです。（兩根）' },
        options: [
            { text: 'ふたほん', isCorrect: false, reason: '使用音讀「に」。' },
            { text: 'にほん', isCorrect: true, reason: '正確！只有兩本{にほん}骨頭骨折。' },
            { text: 'にぼん', isCorrect: false, reason: '2本{にほん}無音變。' },
            { text: 'ふたつ', isCorrect: false, reason: '骨頭用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「骨{ほね}が二本{にほん}」。', relatedRules: ['量詞「本{ほん}」的使用'] },
        sourceItem: { value: 2, kanji: '二本', reading: 'にほん' }
    },
    {
        id: 'long_100_19',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: '電池を＿＿入れました。',
        stem_zh: '放入了六顆電池。',
        options: [
            { text: 'ろくほん', isCorrect: false, reason: '陷阱！6本{ろっぽん}促音化+半濁音化。' },
            { text: 'ろっぽん', isCorrect: true, reason: '正確！放入了六顆{ろっぽん}電池{でんち}。' },
            { text: 'むっつ', isCorrect: false, reason: '圓筒形{えんとうがた}電池{でんち}用「本{ほん}」。' },
            { text: 'ろくぼん', isCorrect: false, reason: '6本{ろっぽん}用半濁音「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '圓筒形{えんとうがた}電池{でんち}用「本{ほん}」計數。', trapExplanation: '6本{ろっぽん}固定促音化+半濁音化。', relatedRules: ['量詞「本{ほん}」的使用'] },
        sourceItem: { value: 6, kanji: '六本', reading: 'ろっぽん' }
    },
    {
        id: 'long_100_20',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '棉花棒',
        stem_zh: '棉花棒',
        dialogue: { speakerA: '綿棒は何本使いましたか？', speakerB: '＿＿使いました。（五支）' },
        options: [
            { text: 'いつほん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'ごほん', isCorrect: true, reason: '正確！用了五本{ごほん}棉花棒。' },
            { text: 'ごぽん', isCorrect: false, reason: '5本{ごほん}無音變。' },
            { text: 'いつつ', isCorrect: false, reason: '棉花棒用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「綿棒{めんぼう}を五本{ごほん}」。', relatedRules: ['量詞「本{ほん}」的使用'] },
        sourceItem: { value: 5, kanji: '五本', reading: 'ごほん' }
    },
    {
        id: 'long_100_21',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: 'ドラマを＿＿見ました。',
        stem_zh: '看了八部電視劇。',
        options: [
            { text: 'はちほん', isCorrect: false, reason: '陷阱！8本{はっぽん}促音化+半濁音化。' },
            { text: 'はっぽん', isCorrect: true, reason: '正確！看了{みました}八部{はっぽん}電視劇。' },
            { text: 'やっつ', isCorrect: false, reason: '電視劇用「本{ほん}」。' },
            { text: 'はちぼん', isCorrect: false, reason: '8本{はっぽん}用半濁音「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '電視劇（影片{えいが}）用「本{ほん}」計數。', trapExplanation: '8本{はっぽん}固定促音化+半濁音化。', relatedRules: ['量詞「本{ほん}」的使用'] },
        sourceItem: { value: 8, kanji: '八本', reading: 'はっぽん' }
    },
    {
        id: 'long_100_22',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '釘子數量',
        stem_zh: '釘子數量',
        dialogue: { speakerA: '釘は何本打ちましたか？', speakerB: '＿＿打ちました。（九支）' },
        options: [
            { text: 'くほん', isCorrect: false, reason: '使用「きゅう」。' },
            { text: 'きゅうほん', isCorrect: true, reason: '正確！打了九本{きゅうほん}釘子。' },
            { text: 'きゅうぽん', isCorrect: false, reason: '9本{きゅうほん}無音變。' },
            { text: 'ここのつ', isCorrect: false, reason: '釘子用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「釘{くぎ}を九本{きゅうほん}」。', relatedRules: ['量詞「本{ほん}」的使用'] },
        sourceItem: { value: 9, kanji: '九本', reading: 'きゅうほん' }
    },
    {
        id: 'long_100_23',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: '注射を＿＿打ちました。',
        stem_zh: '打了一針。',
        options: [
            { text: 'いちほん', isCorrect: false, reason: '陷阱！1本{いっぽん}促音化+半濁音化。' },
            { text: 'いっぽん', isCorrect: true, reason: '正確！打了一針{いっぽん}。' },
            { text: 'ひとつ', isCorrect: false, reason: '注射{ちゅうしゃ}用「本{ほん}」。' },
            { text: 'いっぼん', isCorrect: false, reason: '1本{いっぽん}用半濁音「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「注射{ちゅうしゃ}を一本{いっぽん}」。', trapExplanation: '1本{いっぽん}固定促音化+半濁音化。', relatedRules: ['量詞「本{ほん}」的使用'] },
        sourceItem: { value: 1, kanji: '一本', reading: 'いっぽん' }
    },
    {
        id: 'long_100_24',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '口紅數量',
        stem_zh: '口紅數量',
        dialogue: { speakerA: '口紅は何本持っていますか？', speakerB: '＿＿持っています。（十二支）' },
        options: [
            { text: 'じゅうふたほん', isCorrect: false, reason: '使用音讀「に」。' },
            { text: 'じゅうにほん', isCorrect: true, reason: '正確！有十二本{じゅうにほん}口紅。' },
            { text: 'じゅうにぼん', isCorrect: false, reason: '12本{じゅうにほん}無音變。' },
            { text: 'とにほん', isCorrect: false, reason: '使用音讀「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「口紅を十二本{じゅうにほん}」。', relatedRules: ['量詞「本{ほん}」的使用'] },
        sourceItem: { value: 12, kanji: '十二本', reading: 'じゅうにほん' }
    },
    {
        id: 'long_100_25',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: '道に街灯が＿＿並んでいます。',
        stem_zh: '路上排著二十三盞路燈。',
        options: [
            { text: 'にじゅうさんほん', isCorrect: false, reason: '陷阱！尾數3濁音化。' },
            { text: 'にじゅうさんぼん', isCorrect: true, reason: '正確！排著二十三盞{にじゅうさんぼん}路燈{がいとう}。' },
            { text: 'にじゅうみっつ', isCorrect: false, reason: '路燈{がいとう}用「本{ほん}」。' },
            { text: 'にじゅうさんぽん', isCorrect: false, reason: '尾數3用濁音「ぼ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '尾數3觸發濁音化。', trapExplanation: '23本{にじゅうさんぼん}同理。', relatedRules: ['量詞「本{ほん}」的音變規則'] },
        sourceItem: { value: 23, kanji: '二十三本', reading: 'にじゅうさんぼん' }
    },
    {
        id: 'long_100_26',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '領帶收藏',
        stem_zh: '領帶收藏',
        dialogue: { speakerA: 'ネクタイは何本集めていますか？', speakerB: '＿＿集めています。（四十條）' },
        options: [
            { text: 'しじゅうほん', isCorrect: false, reason: '使用「よんじゅう」。' },
            { text: 'よんじゅっぽん', isCorrect: true, reason: '正確！收集了四十本{よんじゅっぽん}領帶。' },
            { text: 'よんじゅうほん', isCorrect: false, reason: '整十{じゅう}數促音化+半濁音化。' },
            { text: 'よんじゅうぼん', isCorrect: false, reason: '整十{じゅう}數用半濁音「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '整十{じゅう}數（40）觸發促音化+半濁音化。', relatedRules: ['量詞「本{ほん}」的音變規則'] },
        sourceItem: { value: 40, kanji: '四十本', reading: 'よんじゅっぽん' }
    },
    {
        id: 'long_100_27',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: false,
        stem: 'バスの路線が＿＿あります。',
        stem_zh: '有五條公車路線。',
        options: [
            { text: 'いつほん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'ごほん', isCorrect: true, reason: '正確！有五本{ごほん}公車路線。' },
            { text: 'ごぽん', isCorrect: false, reason: '5本{ごほん}無音變。' },
            { text: 'いつつ', isCorrect: false, reason: '路線用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「バスの路線が五本{ごほん}」。', relatedRules: ['量詞「本{ほん}」的使用'] },
        sourceItem: { value: 5, kanji: '五本', reading: 'ごほん' }
    },
    {
        id: 'long_100_28',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: true,
        stem: '滑雪板',
        stem_zh: '滑雪板',
        dialogue: { speakerA: 'スキー板は何本ありますか？', speakerB: '＿＿あります。（六支）' },
        options: [
            { text: 'ろくほん', isCorrect: false, reason: '陷阱！6本{ろっぽん}促音化+半濁音化。' },
            { text: 'ろっぽん', isCorrect: true, reason: '正確！有六本{ろっぽん}滑雪板。' },
            { text: 'むっつ', isCorrect: false, reason: '滑雪板用「本{ほん}」。' },
            { text: 'ろくぼん', isCorrect: false, reason: '6本{ろっぽん}用半濁音「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「スキー板{いた}が六本{ろっぽん}」。', trapExplanation: '6本{ろっぽん}固定促音化+半濁音化。', relatedRules: ['量詞「本{ほん}」的使用'] },
        sourceItem: { value: 6, kanji: '六本', reading: 'ろっぽん' }
    },
    {
        id: 'long_100_29',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: false,
        stem: 'テーブルに箸が＿＿あります。',
        stem_zh: '桌上有四雙筷子（八支）。',
        options: [
            { text: 'はちぽん', isCorrect: false, reason: '8本{はっぽん}促音化+半濁音化。' },
            { text: 'はっぽん', isCorrect: true, reason: '正確！桌上有八本{はっぽん}筷子。' },
            { text: 'はちほん', isCorrect: false, reason: '8本{はっぽん}需要促音化+半濁音化。' },
            { text: 'やっつ', isCorrect: false, reason: '筷子用「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「箸{はし}が八本{はっぽん}」。', relatedRules: ['量詞「本{ほん}」的使用'] },
        sourceItem: { value: 8, kanji: '八本', reading: 'はっぽん' }
    },
    {
        id: 'long_100_30',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: true,
        stem: '總複習',
        stem_zh: '總複習',
        dialogue: { speakerA: '何本のペンを持っていますか？', speakerB: '＿＿です。（一百支）' },
        options: [
            { text: 'ひゃくほん', isCorrect: false, reason: '陷阱！100本{ひゃっぽん}促音化+半濁音化。' },
            { text: 'ひゃっぽん', isCorrect: true, reason: '正確！有一百本{ひゃっぽん}筆。' },
            { text: 'ももほん', isCorrect: false, reason: '使用音讀「ひゃく」。' },
            { text: 'ひゃくぼん', isCorrect: false, reason: '100本{ひゃっぽん}用半濁音「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '百{ひゃく}的「く」促音化為「っ」。', trapExplanation: '100本{ひゃっぽん}同1/6/8/10的規則。', relatedRules: ['量詞「本{ほん}」的音變規則'] },
        sourceItem: { value: 100, kanji: '百本', reading: 'ひゃっぽん' }
    },

    // ===== 擴充題庫 (101-135) =====
    {
        id: 'long_ext_01',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十一本」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十一本」的正確讀音是？',
        options: [
            { text: 'じゅういっぽん', isCorrect: true, reason: '正確！「十一本」讀作「じゅういっぽん」。' },
            { text: 'じゅういちほん', isCorrect: false, reason: '陷阱！1本促音化+半濁音化。' },
            { text: 'とおいっぽん', isCorrect: false, reason: '使用音讀「じゅう」。' },
            { text: 'じゅういちぼん', isCorrect: false, reason: '1本用半濁音「ぽ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十一本」讀作「じゅういっぽん」，1本促音+半濁音化。',
            trapExplanation: '個位1保持促音+半濁音規則。',
            relatedRules: ['量詞「本」的音變', '11本的讀法']
        },
        sourceItem: { value: 11, kanji: '十一本', reading: 'じゅういっぽん' }
    },
    {
        id: 'long_ext_02',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: false,
        stem: '花瓶に花が＿＿挿してあります。',
        stem_zh: '花瓶裡插著十二支花。',
        options: [
            { text: 'じゅうにほん', isCorrect: true, reason: '正確！「十二本」讀作「じゅうにほん」。' },
            { text: 'じゅうにぽん', isCorrect: false, reason: '2本無音變。' },
            { text: 'とおにほん', isCorrect: false, reason: '使用音讀「じゅう」。' },
            { text: 'じゅうにぼん', isCorrect: false, reason: '2本用清音「ほ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十二本」讀作「じゅうにほん」，2本無音變。',
            relatedRules: ['量詞「本」的音變', '12本的讀法']
        },
        sourceItem: { value: 12, kanji: '十二本', reading: 'じゅうにほん' }
    },
    {
        id: 'long_ext_03',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: true,
        stem: '鉛筆有幾支？',
        stem_zh: '鉛筆有幾支？',
        dialogue: {
            speakerA: '鉛筆は何本ありますか？',
            speakerB: '＿＿あります。（十三支）'
        },
        options: [
            { text: 'じゅうさんぼん', isCorrect: true, reason: '正確！「十三本」讀作「じゅうさんぼん」。' },
            { text: 'じゅうさんほん', isCorrect: false, reason: '陷阱！3本濁音化。' },
            { text: 'とおさんぼん', isCorrect: false, reason: '使用音讀「じゅう」。' },
            { text: 'じゅうさんぽん', isCorrect: false, reason: '3本用濁音「ぼ」，不是半濁音。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十三本」讀作「じゅうさんぼん」，3本濁音化。',
            trapExplanation: '3本的「ほ」變成濁音「ぼ」。',
            relatedRules: ['量詞「本」的音變', '13本的讀法']
        },
        sourceItem: { value: 13, kanji: '十三本', reading: 'じゅうさんぼん' }
    },
    {
        id: 'long_ext_04',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十四本」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十四本」的正確讀音是？',
        options: [
            { text: 'じゅうよんほん', isCorrect: true, reason: '正確！「十四本」讀作「じゅうよんほん」。' },
            { text: 'じゅうしほん', isCorrect: false, reason: '「本」的4用「よん」。' },
            { text: 'じゅうよんぽん', isCorrect: false, reason: '4本無音變。' },
            { text: 'じゅうよほん', isCorrect: false, reason: '「本」的4讀「よん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十四本」讀作「じゅうよんほん」，4本無音變。',
            relatedRules: ['量詞「本」的音變', '14本的讀法']
        },
        sourceItem: { value: 14, kanji: '十四本', reading: 'じゅうよんほん' }
    },
    {
        id: 'long_ext_05',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: false,
        stem: '棚に傘が＿＿置いてあります。',
        stem_zh: '架子上放著十五支傘。',
        options: [
            { text: 'じゅうごほん', isCorrect: true, reason: '正確！「十五本」讀作「じゅうごほん」。' },
            { text: 'じゅうごぽん', isCorrect: false, reason: '5本無音變。' },
            { text: 'とおごほん', isCorrect: false, reason: '使用音讀「じゅう」。' },
            { text: 'じゅうごぼん', isCorrect: false, reason: '5本用清音「ほ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十五本」讀作「じゅうごほん」，5本無音變。',
            relatedRules: ['量詞「本」的音變', '15本的讀法']
        },
        sourceItem: { value: 15, kanji: '十五本', reading: 'じゅうごほん' }
    },
    {
        id: 'long_ext_06',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: true,
        stem: '蠟燭有幾支？',
        stem_zh: '蠟燭有幾支？',
        dialogue: {
            speakerA: 'ろうそくは何本ありますか？',
            speakerB: '＿＿あります。（十六支）'
        },
        options: [
            { text: 'じゅうろっぽん', isCorrect: true, reason: '正確！「十六本」讀作「じゅうろっぽん」。' },
            { text: 'じゅうろくほん', isCorrect: false, reason: '陷阱！6本促音+半濁音化。' },
            { text: 'とおろっぽん', isCorrect: false, reason: '使用音讀「じゅう」。' },
            { text: 'じゅうろくぼん', isCorrect: false, reason: '6本用半濁音「ぽ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十六本」讀作「じゅうろっぽん」，6本促音+半濁音化。',
            trapExplanation: '6本的「ろく」變「ろっ」，「ほ」變「ぽ」。',
            relatedRules: ['量詞「本」的音變', '16本的讀法']
        },
        sourceItem: { value: 16, kanji: '十六本', reading: 'じゅうろっぽん' }
    },
    {
        id: 'long_ext_07',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十七本」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十七本」的正確讀音是？',
        options: [
            { text: 'じゅうななほん / じゅうしちほん', isCorrect: true, reason: '正確！「十七本」可讀兩種。' },
            { text: 'じゅうななぽん', isCorrect: false, reason: '7本無音變。' },
            { text: 'とおななほん', isCorrect: false, reason: '使用音讀「じゅう」。' },
            { text: 'じゅうななぼん', isCorrect: false, reason: '7本用清音「ほ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十七本」可讀「じゅうななほん」或「じゅうしちほん」。',
            relatedRules: ['量詞「本」的音變', '17本的讀法']
        },
        sourceItem: { value: 17, kanji: '十七本', reading: 'じゅうななほん' }
    },
    {
        id: 'long_ext_08',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: '倉庫に竹が＿＿保管されています。',
        stem_zh: '倉庫保管著十八根竹子。',
        options: [
            { text: 'じゅうはっぽん', isCorrect: true, reason: '正確！「十八本」讀作「じゅうはっぽん」。' },
            { text: 'じゅうはちほん', isCorrect: false, reason: '陷阱！8本促音+半濁音化。' },
            { text: 'とおはっぽん', isCorrect: false, reason: '使用音讀「じゅう」。' },
            { text: 'じゅうはちぼん', isCorrect: false, reason: '8本用半濁音「ぽ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十八本」讀作「じゅうはっぽん」，8本促音+半濁音化。',
            trapExplanation: '8本的「はち」變「はっ」，「ほ」變「ぽ」。',
            relatedRules: ['量詞「本」的音變', '18本的讀法']
        },
        sourceItem: { value: 18, kanji: '十八本', reading: 'じゅうはっぽん' }
    },
    {
        id: 'long_ext_09',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '樹有幾棵？',
        stem_zh: '樹有幾棵？',
        dialogue: {
            speakerA: '木は何本ありますか？',
            speakerB: '＿＿あります。（十九棵）'
        },
        options: [
            { text: 'じゅうきゅうほん', isCorrect: true, reason: '正確！「十九本」讀作「じゅうきゅうほん」。' },
            { text: 'じゅうきゅうぽん', isCorrect: false, reason: '9本無音變。' },
            { text: 'とおきゅうほん', isCorrect: false, reason: '使用音讀「じゅう」。' },
            { text: 'じゅうくほん', isCorrect: false, reason: '「本」的9用「きゅう」較常見。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十九本」讀作「じゅうきゅうほん」，9本無音變。',
            relatedRules: ['量詞「本」的音變', '19本的讀法']
        },
        sourceItem: { value: 19, kanji: '十九本', reading: 'じゅうきゅうほん' }
    },
    {
        id: 'long_ext_10',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「二十本」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「二十本」的正確讀音是？',
        options: [
            { text: 'にじゅっぽん', isCorrect: true, reason: '正確！「二十本」讀作「にじゅっぽん」。' },
            { text: 'にじゅうほん', isCorrect: false, reason: '陷阱！10的規則，促音+半濁音化。' },
            { text: 'ふたじゅっぽん', isCorrect: false, reason: '使用音讀「に」。' },
            { text: 'にじっぽん', isCorrect: false, reason: '「二十」讀「にじゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十本」讀作「にじゅっぽん」，遵循10的規則。',
            trapExplanation: '10位數的本遵循促音+半濁音規則。',
            relatedRules: ['量詞「本」的音變', '20本的讀法']
        },
        sourceItem: { value: 20, kanji: '二十本', reading: 'にじゅっぽん' }
    },
    {
        id: 'long_ext_11',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: '棚に本が＿＿並んでいます。',
        stem_zh: '架子上排列著二十一本書。',
        options: [
            { text: 'にじゅういっぽん', isCorrect: true, reason: '正確！「二十一本」讀作「にじゅういっぽん」。' },
            { text: 'にじゅういちほん', isCorrect: false, reason: '陷阱！1本促音+半濁音化。' },
            { text: 'ふたじゅういっぽん', isCorrect: false, reason: '使用音讀「に」。' },
            { text: 'にじゅういちぼん', isCorrect: false, reason: '1本用半濁音「ぽ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十一本」讀作「にじゅういっぽん」。',
            trapExplanation: '個位1保持促音+半濁音規則。',
            relatedRules: ['量詞「本」的音變', '21本的讀法']
        },
        sourceItem: { value: 21, kanji: '二十一本', reading: 'にじゅういっぽん' }
    },
    {
        id: 'long_ext_12',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: true,
        stem: '釣竿有幾支？',
        stem_zh: '釣竿有幾支？',
        dialogue: {
            speakerA: '釣り竿は何本ありますか？',
            speakerB: '＿＿あります。（二十三支）'
        },
        options: [
            { text: 'にじゅうさんぼん', isCorrect: true, reason: '正確！「二十三本」讀作「にじゅうさんぼん」。' },
            { text: 'にじゅうさんほん', isCorrect: false, reason: '陷阱！3本濁音化。' },
            { text: 'ふたじゅうさんぼん', isCorrect: false, reason: '使用音讀「に」。' },
            { text: 'にじゅうさんぽん', isCorrect: false, reason: '3本用濁音「ぼ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十三本」讀作「にじゅうさんぼん」，3本濁音化。',
            trapExplanation: '個位3保持濁音規則。',
            relatedRules: ['量詞「本」的音變', '23本的讀法']
        },
        sourceItem: { value: 23, kanji: '二十三本', reading: 'にじゅうさんぼん' }
    },
    {
        id: 'long_ext_13',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「二十六本」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「二十六本」的正確讀音是？',
        options: [
            { text: 'にじゅうろっぽん', isCorrect: true, reason: '正確！「二十六本」讀作「にじゅうろっぽん」。' },
            { text: 'にじゅうろくほん', isCorrect: false, reason: '陷阱！6本促音+半濁音化。' },
            { text: 'ふたじゅうろっぽん', isCorrect: false, reason: '使用音讀「に」。' },
            { text: 'にじゅうろくぼん', isCorrect: false, reason: '6本用半濁音「ぽ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十六本」讀作「にじゅうろっぽん」，6本促音+半濁音化。',
            trapExplanation: '個位6保持促音+半濁音規則。',
            relatedRules: ['量詞「本」的音變', '26本的讀法']
        },
        sourceItem: { value: 26, kanji: '二十六本', reading: 'にじゅうろっぽん' }
    },
    {
        id: 'long_ext_14',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: '工場でパイプが＿＿製造されました。',
        stem_zh: '工廠製造了二十八根管子。',
        options: [
            { text: 'にじゅうはっぽん', isCorrect: true, reason: '正確！「二十八本」讀作「にじゅうはっぽん」。' },
            { text: 'にじゅうはちほん', isCorrect: false, reason: '陷阱！8本促音+半濁音化。' },
            { text: 'ふたじゅうはっぽん', isCorrect: false, reason: '使用音讀「に」。' },
            { text: 'にじゅうはちぼん', isCorrect: false, reason: '8本用半濁音「ぽ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十八本」讀作「にじゅうはっぽん」，8本促音+半濁音化。',
            trapExplanation: '個位8保持促音+半濁音規則。',
            relatedRules: ['量詞「本」的音變', '28本的讀法']
        },
        sourceItem: { value: 28, kanji: '二十八本', reading: 'にじゅうはっぽん' }
    },
    {
        id: 'long_ext_15',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: true,
        stem: '旗有幾面？',
        stem_zh: '旗有幾面？',
        dialogue: {
            speakerA: '旗は何本ありますか？',
            speakerB: '＿＿あります。（三十支）'
        },
        options: [
            { text: 'さんじゅっぽん', isCorrect: true, reason: '正確！「三十本」讀作「さんじゅっぽん」。' },
            { text: 'さんじゅうほん', isCorrect: false, reason: '陷阱！10的規則，促音+半濁音化。' },
            { text: 'みじゅっぽん', isCorrect: false, reason: '使用音讀「さん」。' },
            { text: 'さんじっぽん', isCorrect: false, reason: '「三十」讀「さんじゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十本」讀作「さんじゅっぽん」，遵循10的規則。',
            trapExplanation: '10位數的本遵循促音+半濁音規則。',
            relatedRules: ['量詞「本」的音變', '30本的讀法']
        },
        sourceItem: { value: 30, kanji: '三十本', reading: 'さんじゅっぽん' }
    },
    {
        id: 'long_ext_16',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「三十三本」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「三十三本」的正確讀音是？',
        options: [
            { text: 'さんじゅうさんぼん', isCorrect: true, reason: '正確！「三十三本」讀作「さんじゅうさんぼん」。' },
            { text: 'さんじゅうさんほん', isCorrect: false, reason: '陷阱！3本濁音化。' },
            { text: 'みじゅうさんぼん', isCorrect: false, reason: '使用音讀「さん」。' },
            { text: 'さんじゅうさんぽん', isCorrect: false, reason: '3本用濁音「ぼ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十三本」讀作「さんじゅうさんぼん」，3本濁音化。',
            trapExplanation: '個位3保持濁音規則。',
            relatedRules: ['量詞「本」的音變', '33本的讀法']
        },
        sourceItem: { value: 33, kanji: '三十三本', reading: 'さんじゅうさんぼん' }
    },
    {
        id: 'long_ext_17',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: false,
        stem: '花屋に薔薇が＿＿売っています。',
        stem_zh: '花店賣著三十五支玫瑰。',
        options: [
            { text: 'さんじゅうごほん', isCorrect: true, reason: '正確！「三十五本」讀作「さんじゅうごほん」。' },
            { text: 'さんじゅうごぽん', isCorrect: false, reason: '5本無音變。' },
            { text: 'みじゅうごほん', isCorrect: false, reason: '使用音讀「さん」。' },
            { text: 'さんじゅうごぼん', isCorrect: false, reason: '5本用清音「ほ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十五本」讀作「さんじゅうごほん」，5本無音變。',
            relatedRules: ['量詞「本」的音變', '35本的讀法']
        },
        sourceItem: { value: 35, kanji: '三十五本', reading: 'さんじゅうごほん' }
    },
    {
        id: 'long_ext_18',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: true,
        stem: '柱子有幾根？',
        stem_zh: '柱子有幾根？',
        dialogue: {
            speakerA: '柱は何本ありますか？',
            speakerB: '＿＿あります。（四十支）'
        },
        options: [
            { text: 'よんじゅっぽん', isCorrect: true, reason: '正確！「四十本」讀作「よんじゅっぽん」。' },
            { text: 'よんじゅうほん', isCorrect: false, reason: '陷阱！10的規則，促音+半濁音化。' },
            { text: 'しじゅっぽん', isCorrect: false, reason: '「四十」讀「よんじゅう」。' },
            { text: 'よんじっぽん', isCorrect: false, reason: '「四十」讀「よんじゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十本」讀作「よんじゅっぽん」，遵循10的規則。',
            trapExplanation: '10位數的本遵循促音+半濁音規則。',
            relatedRules: ['量詞「本」的音變', '40本的讀法']
        },
        sourceItem: { value: 40, kanji: '四十本', reading: 'よんじゅっぽん' }
    },
    {
        id: 'long_ext_19',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「五十本」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「五十本」的正確讀音是？',
        options: [
            { text: 'ごじゅっぽん', isCorrect: true, reason: '正確！「五十本」讀作「ごじゅっぽん」。' },
            { text: 'ごじゅうほん', isCorrect: false, reason: '陷阱！10的規則，促音+半濁音化。' },
            { text: 'いつじゅっぽん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'ごじっぽん', isCorrect: false, reason: '「五十」讀「ごじゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十本」讀作「ごじゅっぽん」，遵循10的規則。',
            trapExplanation: '10位數的本遵循促音+半濁音規則。',
            relatedRules: ['量詞「本」的音變', '50本的讀法']
        },
        sourceItem: { value: 50, kanji: '五十本', reading: 'ごじゅっぽん' }
    },
    {
        id: 'long_ext_20',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: '倉庫に竹刀が＿＿保管されています。',
        stem_zh: '倉庫保管著六十支竹刀。',
        options: [
            { text: 'ろくじゅっぽん', isCorrect: true, reason: '正確！「六十本」讀作「ろくじゅっぽん」。' },
            { text: 'ろくじゅうほん', isCorrect: false, reason: '陷阱！10的規則，促音+半濁音化。' },
            { text: 'むじゅっぽん', isCorrect: false, reason: '使用音讀「ろく」。' },
            { text: 'ろくじっぽん', isCorrect: false, reason: '「六十」讀「ろくじゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六十本」讀作「ろくじゅっぽん」，遵循10的規則。',
            trapExplanation: '10位數的本遵循促音+半濁音規則。',
            relatedRules: ['量詞「本」的音變', '60本的讀法']
        },
        sourceItem: { value: 60, kanji: '六十本', reading: 'ろくじゅっぽん' }
    },
    {
        id: 'long_ext_21',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '總復習：「本」的音變規則是什麼？',
        stem_zh: '總復習：「本」的音變規則是什麼？',
        dialogue: {
            speakerA: '「本」の音変化を教えてください。',
            speakerB: '＿＿です。'
        },
        options: [
            { text: '1/6/8/10促音+半濁音(っぽん)、3濁音(ぼん)、其他無音變(ほん)', isCorrect: true, reason: '正確！這是完整規則。' },
            { text: '全部促音+半濁音化', isCorrect: false, reason: '只有特定數字音變。' },
            { text: '全部濁音化', isCorrect: false, reason: '只有3濁音化。' },
            { text: '沒有音變', isCorrect: false, reason: '有明確音變規則。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '1/6/8/10→っぽん、3→ぼん、其他→ほん。',
            relatedRules: ['量詞「本」の完整規則', '音變總整理']
        },
        sourceItem: { value: 'review', kanji: '音變規則', reading: 'っぽん/ぼん/ほん' }
    },
    {
        id: 'long_ext_22',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: false,
        stem: '總復習：哪些數字會促音+半濁音化？',
        stem_zh: '總復習：哪些數字會促音+半濁音化？',
        options: [
            { text: '1、6、8、10 (いっぽん、ろっぽん、はっぽん、じゅっぽん)', isCorrect: true, reason: '正確！這四個促音+半濁音化。' },
            { text: '3', isCorrect: false, reason: '3是濁音化。' },
            { text: '2、5、7、9', isCorrect: false, reason: '這些無音變。' },
            { text: '全部', isCorrect: false, reason: '只有特定數字。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '1/6/8/10的「本」促音+半濁音化：いっぽん、ろっぽん、はっぽん、じゅっぽん。',
            relatedRules: ['量詞「本」の促音組', '1/6/8/10']
        },
        sourceItem: { value: 'review_ppon', kanji: '促音組', reading: '1/6/8/10' }
    },
    {
        id: 'long_ext_23',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: false,
        stem: '總復習：哪個數字會濁音化？',
        stem_zh: '總復習：哪個數字會濁音化？',
        options: [
            { text: '3 (さんぼん)', isCorrect: true, reason: '正確！只有3濁音化。' },
            { text: '1', isCorrect: false, reason: '1是促音+半濁音化。' },
            { text: '2、5、7、9', isCorrect: false, reason: '這些無音變。' },
            { text: '6、8', isCorrect: false, reason: '這些是促音+半濁音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '只有3的「本」濁音化：さんぼん。',
            relatedRules: ['量詞「本」の濁音組', '3']
        },
        sourceItem: { value: 'review_bon', kanji: '濁音組', reading: '3' }
    },
    {
        id: 'long_ext_24',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '總復習：哪些數字無音變？',
        stem_zh: '總復習：哪些數字無音變？',
        dialogue: {
            speakerA: '音変化しないのはどれですか？',
            speakerB: '＿＿です。'
        },
        options: [
            { text: '2、4、5、7、9 (にほん、よんほん、ごほん、ななほん、きゅうほん)', isCorrect: true, reason: '正確！這些無音變。' },
            { text: '1、6、8、10', isCorrect: false, reason: '這些促音+半濁音化。' },
            { text: '3', isCorrect: false, reason: '3濁音化。' },
            { text: '全部', isCorrect: false, reason: '有部分無音變。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '2/4/5/7/9的「本」保持「ほん」：にほん、よんほん、ごほん等。',
            relatedRules: ['量詞「本」の無音變組', '2/4/5/7/9']
        },
        sourceItem: { value: 'review_hon', kanji: '無音變組', reading: '2/4/5/7/9' }
    },
    {
        id: 'long_ext_25',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: false,
        stem: '「何本」讀作？',
        stem_zh: '「何本」讀作？',
        options: [
            { text: 'なんぼん', isCorrect: true, reason: '正確！「何本」讀作「なんぼん」。' },
            { text: 'なにほん', isCorrect: false, reason: '「何」+「本」讀「なんぼん」。' },
            { text: 'なんほん', isCorrect: false, reason: '「本」濁音化。' },
            { text: 'なにぽん', isCorrect: false, reason: '「何」讀「なん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何本」讀作「なんぼん」，「何」後「本」濁音化。',
            relatedRules: ['疑問詞', '何本的讀法']
        },
        sourceItem: { value: 'question', kanji: '何本', reading: 'なんぼん' }
    },
    {
        id: 'long_ext_26',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: false,
        stem: '「本」量詞用於什麼物品？',
        stem_zh: '「本」量詞用於什麼物品？',
        options: [
            { text: '細長物體（筆、傘、樹、瓶子等）', isCorrect: true, reason: '正確！用於細長物體。' },
            { text: '扁平物體', isCorrect: false, reason: '扁平物用「枚」。' },
            { text: '小動物', isCorrect: false, reason: '小動物用「匹」。' },
            { text: '書籍', isCorrect: false, reason: '書籍用「冊」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「本」用於細長物體：筆、傘、樹木、瓶子、電線桿等。',
            relatedRules: ['量詞「本」的使用', '適用物品']
        },
        sourceItem: { value: 'usage', kanji: '本', reading: '細長物體' }
    },
    {
        id: 'long_ext_27',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: true,
        stem: '網球拍有幾支？',
        stem_zh: '網球拍有幾支？',
        dialogue: {
            speakerA: 'テニスラケットは何本ありますか？',
            speakerB: '＿＿あります。（三支）'
        },
        options: [
            { text: 'さんぼん', isCorrect: true, reason: '正確！「三本」讀作「さんぼん」。' },
            { text: 'さんほん', isCorrect: false, reason: '陷阱！3本濁音化。' },
            { text: 'みほん', isCorrect: false, reason: '使用音讀「さん」。' },
            { text: 'さんぽん', isCorrect: false, reason: '3本用濁音「ぼ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三本」讀作「さんぼん」，3本濁音化。',
            trapExplanation: '3本的「ほ」變成濁音「ぼ」。',
            relatedRules: ['量詞「本」的音變', '3本的讀法']
        },
        sourceItem: { value: 3, kanji: '三本', reading: 'さんぼん' }
    },
    {
        id: 'long_ext_28',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: false,
        stem: '「四本」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「四本」的正確讀音是？',
        options: [
            { text: 'よんほん', isCorrect: true, reason: '正確！「四本」讀作「よんほん」。' },
            { text: 'しほん', isCorrect: false, reason: '「本」的4用「よん」。' },
            { text: 'よんぽん', isCorrect: false, reason: '4本無音變。' },
            { text: 'よほん', isCorrect: false, reason: '「本」的4讀「よん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四本」讀作「よんほん」，4本無音變。',
            relatedRules: ['量詞「本」的音變', '4本的讀法']
        },
        sourceItem: { value: 4, kanji: '四本', reading: 'よんほん' }
    },
    {
        id: 'long_ext_29',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: false,
        stem: '花瓶に百合が＿＿活けてあります。',
        stem_zh: '花瓶裡插著五支百合。',
        options: [
            { text: 'ごほん', isCorrect: true, reason: '正確！「五本」讀作「ごほん」。' },
            { text: 'ごぽん', isCorrect: false, reason: '5本無音變。' },
            { text: 'いつほん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'ごぼん', isCorrect: false, reason: '5本用清音「ほ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五本」讀作「ごほん」，5本無音變。',
            relatedRules: ['量詞「本」的音變', '5本的讀法']
        },
        sourceItem: { value: 5, kanji: '五本', reading: 'ごほん' }
    },
    {
        id: 'long_ext_30',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '吸管有幾支？',
        stem_zh: '吸管有幾支？',
        dialogue: {
            speakerA: 'ストローは何本ありますか？',
            speakerB: '＿＿あります。（七支）'
        },
        options: [
            { text: 'ななほん / しちほん', isCorrect: true, reason: '正確！「七本」可讀兩種。' },
            { text: 'ななぽん', isCorrect: false, reason: '7本無音變。' },
            { text: 'なのほん', isCorrect: false, reason: '「七」讀「なな」或「しち」。' },
            { text: 'ななぼん', isCorrect: false, reason: '7本用清音「ほ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七本」可讀「ななほん」或「しちほん」，7本無音變。',
            relatedRules: ['量詞「本」的音變', '7本的讀法']
        },
        sourceItem: { value: 7, kanji: '七本', reading: 'ななほん' }
    },
    {
        id: 'long_ext_31',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: false,
        stem: '「九本」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「九本」的正確讀音是？',
        options: [
            { text: 'きゅうほん', isCorrect: true, reason: '正確！「九本」讀作「きゅうほん」。' },
            { text: 'きゅうぽん', isCorrect: false, reason: '9本無音變。' },
            { text: 'くほん', isCorrect: false, reason: '「本」的9用「きゅう」較常見。' },
            { text: 'きゅうぼん', isCorrect: false, reason: '9本用清音「ほ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九本」讀作「きゅうほん」，9本無音變。',
            relatedRules: ['量詞「本」的音變', '9本的讀法']
        },
        sourceItem: { value: 9, kanji: '九本', reading: 'きゅうほん' }
    },
    {
        id: 'long_ext_32',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: '店に杖が＿＿展示されています。',
        stem_zh: '店裡展示著十支手杖。',
        options: [
            { text: 'じゅっぽん', isCorrect: true, reason: '正確！「十本」讀作「じゅっぽん」。' },
            { text: 'じゅうほん', isCorrect: false, reason: '陷阱！10本促音+半濁音化。' },
            { text: 'とおほん', isCorrect: false, reason: '使用音讀「じゅう」。' },
            { text: 'じっぽん', isCorrect: false, reason: '「十」讀「じゅう」促音為「じゅっ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十本」讀作「じゅっぽん」，10本促音+半濁音化。',
            trapExplanation: '10本的「じゅう」變「じゅっ」，「ほ」變「ぽ」。',
            relatedRules: ['量詞「本」的音變', '10本的讀法']
        },
        sourceItem: { value: 10, kanji: '十本', reading: 'じゅっぽん' }
    },
    {
        id: 'long_ext_33',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '香蕉有幾根？',
        stem_zh: '香蕉有幾根？',
        dialogue: {
            speakerA: 'バナナは何本ありますか？',
            speakerB: '＿＿あります。（二根）'
        },
        options: [
            { text: 'にほん', isCorrect: true, reason: '正確！「二本」讀作「にほん」。' },
            { text: 'にぽん', isCorrect: false, reason: '2本無音變。' },
            { text: 'ふたほん', isCorrect: false, reason: '使用音讀「に」。' },
            { text: 'にぼん', isCorrect: false, reason: '2本用清音「ほ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二本」讀作「にほん」，2本無音變。',
            relatedRules: ['量詞「本」的音變', '2本的讀法']
        },
        sourceItem: { value: 2, kanji: '二本', reading: 'にほん' }
    },
    {
        id: 'long_ext_34',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '以下哪組讀法全部正確？',
        stem_zh: '以下哪組讀法全部正確？',
        options: [
            { text: '1本(いっぽん)、3本(さんぼん)、5本(ごほん)', isCorrect: true, reason: '正確！這些讀法都正確。' },
            { text: '1本(いちほん)、3本(さんほん)、5本(ごほん)', isCorrect: false, reason: '1本和3本需要音變。' },
            { text: '1本(いっぽん)、3本(さんぽん)、5本(ごぽん)', isCorrect: false, reason: '3本用濁音，5本無音變。' },
            { text: '1本(いっぼん)、3本(さんぼん)、5本(ごほん)', isCorrect: false, reason: '1本用半濁音「ぽ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '1本(いっぽん)促音+半濁音、3本(さんぼん)濁音、5本(ごほん)無音變。',
            trapExplanation: '注意不同數字的不同音變規則。',
            relatedRules: ['量詞「本」的音變總整理', '複合規則']
        },
        sourceItem: { value: 'review_combo', kanji: '1本/3本/5本', reading: 'いっぽん/さんぼん/ごほん' }
    },
    {
        id: 'long_ext_35',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'sentence',
        isTrap: true,
        stem: '以下哪組讀法全部正確？',
        stem_zh: '以下哪組讀法全部正確？',
        options: [
            { text: '6本(ろっぽん)、8本(はっぽん)、10本(じゅっぽん)', isCorrect: true, reason: '正確！這些都促音+半濁音化。' },
            { text: '6本(ろくほん)、8本(はちほん)、10本(じゅうほん)', isCorrect: false, reason: '這三個都需要促音+半濁音化。' },
            { text: '6本(ろっぼん)、8本(はっぼん)、10本(じゅっぼん)', isCorrect: false, reason: '需要半濁音「ぽ」，不是濁音。' },
            { text: '6本(ろくぽん)、8本(はちぽん)、10本(じゅうぽん)', isCorrect: false, reason: '需要促音。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '6/8/10本都促音+半濁音化：ろっぽん、はっぽん、じゅっぽん。',
            trapExplanation: '注意這三個都遵循相同的促音+半濁音規則。',
            relatedRules: ['量詞「本」の促音組', '6/8/10']
        },
        sourceItem: { value: 'review_combo2', kanji: '6本/8本/10本', reading: 'ろっぽん/はっぽん/じゅっぽん' }
    }
];
