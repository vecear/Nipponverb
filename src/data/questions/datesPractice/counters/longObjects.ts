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
        stem: '「一本」的正確讀音是？',
        stem_zh: '「一本」的正確讀音是？',
        options: [
            { text: 'いっぽん', isCorrect: true, reason: '正確{せいかく}！「一本{いっぽん}」發生{はっせい}促音化{そくおんか}+半濁音化{はんだくおんか}，讀作{どくさ}「いっぽん」。' },
            { text: 'いちほん', isCorrect: false, reason: '陷阱{かんけい}！「ほ」在促音{そくおん}「っ」後必須{ひっす}變為{へんい}半濁音{はんだくおん}「ぽ」。' },
            { text: 'いちぼん', isCorrect: false, reason: '1本{いっぽん}使用{しよう}半濁音{はんだくおん}「ぽ」，不是濁音{だくおん}「ぼ」。' },
            { text: 'いっほん', isCorrect: false, reason: '促音{そくおん}後不能{ふのう}接「ほ」，必須{ひっす}變為{へんい}「ぽ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一本{いっぽん}」讀作{どくさ}「いっぽん」。「一{いち}」的「ち」變為{へんい}促音{そくおん}「っ」，「本{ほん}」的「ほ」變為{へんい}半濁音{はんだくおん}「ぽ」。',
            trapExplanation: '這是陷阱題{かんけいだい}。h-p轉換{てんかん}規律{きそく}：促音{そくおん}後的「h」音{おん}必須{ひっす}轉為{てんい}爆破音{ばくはつおん}「p」。',
            relatedRules: ['h-p轉換{てんかん}規律{きそく}', '促音化{そくおんか}規則{きそく}', '1/6/8/10的特殊{とくしゅ}音變{おんへん}']
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
            { text: 'いちほん', isCorrect: false, reason: '陷阱{かんけい}！1本{いっぽん}需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'いっぽん', isCorrect: true, reason: '正確{せいかく}！「ペンを一本{いっぽん}ください」表示{ひょうじ}「請給我{ください}一支{いっぽん}筆{ペン}」。' },
            { text: 'いっぼん', isCorrect: false, reason: '1本{いっぽん}使用{しよう}半濁音{はんだくおん}「ぽ」，不是濁音{だくおん}「ぼ」。' },
            { text: 'ひとほん', isCorrect: false, reason: '量詞{りょうし}「本{ほん}」使用{しよう}音讀{おんどく}，不用{もちいず}訓讀{くんどく}「ひと」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ペンを一本{いっぽん}ください」是購買{こうばい}或借用{しゃくよう}筆{ペン}時的常用{じょうよう}表達{ひょうたつ}。',
            trapExplanation: '量詞{りょうし}「本{ほん}」搭配{たいはい}數字{すうじ}1時{とき}必須{ひっす}使用{しよう}「いっぽん」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}', '購物{こうぶつ}表達{ひょうたつ}']
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
            { text: 'いちほん', isCorrect: false, reason: '1本{いっぽん}需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'いっぽん', isCorrect: true, reason: '正確{せいかく}！有一把{いっぽん}傘{かさ}。' },
            { text: 'ひとつ', isCorrect: false, reason: '傘{かさ}是細長物{ほそながもの}，應使用{しよう}「本{ほん}」而非{いがい}「つ」。' },
            { text: 'いっぼん', isCorrect: false, reason: '1本{いっぽん}使用{しよう}半濁音{はんだくおん}「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「傘{かさ}」是細長物{ほそながもの}，使用{しよう}量詞{りょうし}「本{ほん}」來計數{けいすう}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}', '何本{なんぼん}の質問{しつもん}與回答{かいとう}']
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
        stem: '「二本」的正確讀音是？',
        stem_zh: '「二本」的正確讀音是？',
        options: [
            { text: 'にほん', isCorrect: true, reason: '正確{せいかく}！「二本{にほん}」無音變{むおんへん}，讀作{どくさ}「にほん」。' },
            { text: 'にぽん', isCorrect: false, reason: '2本{にほん}不發生{ふはっせい}音變{おんへん}，保持{ほじ}「ほ」。' },
            { text: 'にぼん', isCorrect: false, reason: '2本{にほん}不發生{ふはっせい}濁音化{だくおんか}。' },
            { text: 'ふたほん', isCorrect: false, reason: '量詞{りょうし}「本{ほん}」使用{しよう}音讀{おんどく}數字{すうじ}，不用{もちいず}訓讀{くんどく}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二本{にほん}」讀作{どくさ}「にほん」，無音變{むおんへん}。數字{すうじ}2不觸發{しょうはつ}任何{なんの}音變{おんへん}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の音變{おんへん}規則{きそく}', '無音變{むおんへん}の數字{すうじ}']
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
            { text: 'にぽん', isCorrect: false, reason: '2本{にほん}無音變{むおんへん}，保持{ほじ}「ほ」。' },
            { text: 'にほん', isCorrect: true, reason: '正確{せいかく}！「木{き}が二本{にほん}」表示{ひょうじ}「有兩棵{にほん}樹{き}」。' },
            { text: 'ふたほん', isCorrect: false, reason: '量詞{りょうし}「本{ほん}」用{もちいる}音讀{おんどく}數字{すうじ}。' },
            { text: 'にぼん', isCorrect: false, reason: '2本{にほん}無濁音化{むだくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「木{き}」是細長{ほそなが}的，使用{しよう}量詞{りょうし}「本{ほん}」來計數{けいすう}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}', '樹木{じゅもく}の計數{けいすう}']
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
            { text: 'にぽん', isCorrect: false, reason: '2本{にほん}無音變{むおんへん}。' },
            { text: 'にほん', isCorrect: true, reason: '正確{せいかく}！喝了{のみました}兩瓶{にほん}啤酒{ビール}。' },
            { text: 'ふたつ', isCorrect: false, reason: '瓶裝{びんづめ}飲料{いんりょう}用{もちいる}「本{ほん}」計數{けいすう}。' },
            { text: 'にぼん', isCorrect: false, reason: '2本{にほん}無濁音化{むだくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '瓶裝{びんづめ}飲料{いんりょう}（ビール、ジュース等{など}）使用{しよう}量詞{りょうし}「本{ほん}」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}', '飲料{いんりょう}の計數{けいすう}']
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
        stem: '「三本」的正確讀音是？',
        stem_zh: '「三本」的正確讀音是？',
        options: [
            { text: 'さんぼん', isCorrect: true, reason: '正確{せいかく}！「三本{さんぼん}」發生{はっせい}濁音化{だくおんか}，讀作{どくさ}「さんぼん」。' },
            { text: 'さんほん', isCorrect: false, reason: '陷阱{かんけい}！撥音{はつおん}「ん」後的「ほ」變為{へんい}濁音{だくおん}「ぼ」。' },
            { text: 'さんぽん', isCorrect: false, reason: '3本{さんぼん}使用{しよう}濁音{だくおん}「ぼ」，不是半濁音{はんだくおん}「ぽ」。' },
            { text: 'みっぽん', isCorrect: false, reason: '量詞{りょうし}「本{ほん}」用{もちいる}音讀{おんどく}「さん」，不用{もちいず}訓讀{くんどく}「み」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三本{さんぼん}」讀作{どくさ}「さんぼん」。撥音{はつおん}「ん」後的「h」音{おん}變為{へんい}濁音{だくおん}「b」。',
            trapExplanation: '這是陷阱題{かんけいだい}。h-b轉換{てんかん}規律{きそく}：撥音{はつおん}「ん」後的「h」音{おん}轉為{てんい}濁音{だくおん}「b」。',
            relatedRules: ['h-b轉換{てんかん}規律{きそく}', '濁音化{だくおんか}規則{きそく}', '3的特殊{とくしゅ}音變{おんへん}']
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
            { text: 'さんほん', isCorrect: false, reason: '陷阱{かんけい}！3本{さんぼん}需要{じゅよう}濁音化{だくおんか}。' },
            { text: 'さんぼん', isCorrect: true, reason: '正確{せいかく}！「鉛筆{えんぴつ}を三本{さんぼん}」表示{ひょうじ}「三支{さんぼん}鉛筆{えんぴつ}」。' },
            { text: 'さんぽん', isCorrect: false, reason: '3本{さんぼん}使用{しよう}濁音{だくおん}「ぼ」，不是半濁音{はんだくおん}「ぽ」。' },
            { text: 'みっつ', isCorrect: false, reason: '鉛筆{えんぴつ}是細長物{ほそながもの}，應使用{しよう}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「鉛筆{えんぴつ}を三本{さんぼん}買{か}いました」表示{ひょうじ}「買了{かいました}三支{さんぼん}鉛筆{えんぴつ}」。',
            trapExplanation: '3本{さんぼん}固定{こてい}讀む{よむ}「さんぼん」，撥音{はつおん}後必須{ひっす}濁音化{だくおんか}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}', '文具{ぶんぐ}の計數{けいすう}']
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
            { text: 'さんほん', isCorrect: false, reason: '3本{さんぼん}需要{じゅよう}濁音化{だくおんか}。' },
            { text: 'さんぼん', isCorrect: true, reason: '正確{せいかく}！有三根{さんぼん}香蕉{バナナ}。' },
            { text: 'さんぽん', isCorrect: false, reason: '3本{さんぼん}使用{しよう}濁音{だくおん}「ぼ」。' },
            { text: 'みっつ', isCorrect: false, reason: '香蕉{バナナ}是細長{ほそなが}的，用{もちいる}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「バナナ」是細長形{ほそながけい}，使用{しよう}量詞{りょうし}「本{ほん}」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}', '食物{しょくもつ}の計數{けいすう}']
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
        stem: '「四本」的正確讀音是？',
        stem_zh: '「四本」的正確讀音是？',
        options: [
            { text: 'よんほん', isCorrect: true, reason: '正確{せいかく}！「四本{よんほん}」無音變{むおんへん}，讀作{どくさ}「よんほん」。' },
            { text: 'しほん', isCorrect: false, reason: '量詞{りょうし}「本{ほん}」搭配{たいはい}4時{とき}使用{しよう}「よん」，不用{もちいず}「し」。' },
            { text: 'よんぼん', isCorrect: false, reason: '4本{よんほん}無濁音化{むだくおんか}。' },
            { text: 'よんぽん', isCorrect: false, reason: '4本{よんほん}無半濁音化{むはんだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四本{よんほん}」讀作{どくさ}「よんほん」。數字{すうじ}4使用{しよう}「よん」，不發生{ふはっせい}音變{おんへん}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の音變{おんへん}規則{きそく}', '4的讀法{よみかた}選擇{せんたく}']
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
            { text: 'しほん', isCorrect: false, reason: '量詞{りょうし}「本{ほん}」用{もちいる}「よん」不用{もちいず}「し」。' },
            { text: 'よんほん', isCorrect: true, reason: '正確{せいかく}！「色鉛筆{いろえんぴつ}を四本{よんほん}」表示{ひょうじ}「四支{よんほん}色鉛筆{いろえんぴつ}」。' },
            { text: 'よんぼん', isCorrect: false, reason: '4本{よんほん}無音變{むおんへん}。' },
            { text: 'よっぽん', isCorrect: false, reason: '4本{よんほん}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「色鉛筆{いろえんぴつ}を四本{よんほん}使{つか}います」表示{ひょうじ}「用{もちいる}四支{よんほん}色鉛筆{いろえんぴつ}」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}', '繪畫{かいが}道具{どうぐ}']
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
            { text: 'しほん', isCorrect: false, reason: '4本{よんほん}使用{しよう}「よん」。' },
            { text: 'よんほん', isCorrect: true, reason: '正確{せいかく}！有四條{よんほん}領帶{ネクタイ}。' },
            { text: 'よんぼん', isCorrect: false, reason: '4本{よんほん}無音變{むおんへん}。' },
            { text: 'よっつ', isCorrect: false, reason: '領帶{ネクタイ}是細長{ほそなが}的，用{もちいる}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ネクタイ」是細長形{ほそながけい}，使用{しよう}量詞{りょうし}「本{ほん}」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}', '服飾{ふくしょく}の計數{けいすう}']
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
        stem: '「六本」的正確讀音是？',
        stem_zh: '「六本」的正確讀音是？',
        options: [
            { text: 'ろっぽん', isCorrect: true, reason: '正確{せいかく}！「六本{ろっぽん}」發生{はっせい}促音化{そくおんか}+半濁音化{はんだくおんか}，讀作{どくさ}「ろっぽん」。' },
            { text: 'ろくほん', isCorrect: false, reason: '陷阱{かんけい}！6本{ろっぽん}需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'ろくぼん', isCorrect: false, reason: '6本{ろっぽん}使用{しよう}促音{そくおん}+半濁音{はんだくおん}，不是單純{たんじゅん}濁音{だくおん}。' },
            { text: 'ろっほん', isCorrect: false, reason: '促音{そくおん}後不能{ふのう}接「ほ」，必須{ひっす}變為{へんい}「ぽ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六本{ろっぽん}」讀作{どくさ}「ろっぽん」。「六{ろく}」的「く」變為{へんい}促音{そくおん}「っ」，「本{ほん}」的「ほ」變為{へんい}半濁音{はんだくおん}「ぽ」。',
            trapExplanation: '這是陷阱題{かんけいだい}。1/6/8/10搭配{たいはい}「本{ほん}」時{とき}都發生{はっせい}相同{おなじ}的音變{おんへん}模式{もしき}。',
            relatedRules: ['h-p轉換{てんかん}規律{きそく}', '促音化{そくおんか}規則{きそく}', '六本木{ろっぽんぎ}的讀法{よみかた}']
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
            { text: 'ろくほん', isCorrect: false, reason: '陷阱{かんけい}！6本{ろっぽん}需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'ろっぽん', isCorrect: true, reason: '正確{せいかく}！「ビールを六本{ろっぽん}」表示{ひょうじ}「六瓶{ろっぽん}啤酒{ビール}」。' },
            { text: 'ろくぼん', isCorrect: false, reason: '6本{ろっぽん}使用{しよう}促音{そくおん}+半濁音{はんだくおん}。' },
            { text: 'むっぽん', isCorrect: false, reason: '量詞{りょうし}「本{ほん}」用{もちいる}音讀{おんどく}「ろく」，不用{もちいず}訓讀{くんどく}「む」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ビールを六本{ろっぽん}注文{ちゅうもん}しました」表示{ひょうじ}「點了{ちゅうもん}六瓶{ろっぽん}啤酒{ビール}」。',
            trapExplanation: '6本{ろっぽん}固定{こてい}讀む{よむ}「ろっぽん」。「六本木{ろっぽんぎ}」（東京{とうきょう}地名{ちめい}）也是相同{おなじ}讀法{よみかた}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}', '點餐{てんさい}表達{ひょうたつ}']
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
            { text: 'ろくほん', isCorrect: false, reason: '6本{ろっぽん}需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'ろっぽん', isCorrect: true, reason: '正確{せいかく}！有六條{ろっぽん}電車{でんしゃ}路線{ろせん}。' },
            { text: 'ろくぼん', isCorrect: false, reason: '6本{ろっぽん}使用{しよう}促音{そくおん}+半濁音{はんだくおん}。' },
            { text: 'むっつ', isCorrect: false, reason: '路線{ろせん}是線狀{せんじょう}的，用{もちいる}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「路線{ろせん}」是線狀{せんじょう}的，使用{しよう}量詞{りょうし}「本{ほん}」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}', '交通{こうつう}路線{ろせん}の計數{けいすう}']
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
        stem: '「八本」的正確讀音是？',
        stem_zh: '「八本」的正確讀音是？',
        options: [
            { text: 'はっぽん', isCorrect: true, reason: '正確{せいかく}！「八本{はっぽん}」發生{はっせい}促音化{そくおんか}+半濁音化{はんだくおんか}，讀作{どくさ}「はっぽん」。' },
            { text: 'はちほん', isCorrect: false, reason: '陷阱{かんけい}！8本{はっぽん}需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'はちぼん', isCorrect: false, reason: '8本{はっぽん}使用{しよう}促音{そくおん}+半濁音{はんだくおん}，不是濁音{だくおん}。' },
            { text: 'はっほん', isCorrect: false, reason: '促音{そくおん}後不能{ふのう}接「ほ」，必須{ひっす}變為{へんい}「ぽ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八本{はっぽん}」讀作{どくさ}「はっぽん」。「八{はち}」的「ち」變為{へんい}促音{そくおん}「っ」，「本{ほん}」的「ほ」變為{へんい}半濁音{はんだくおん}「ぽ」。',
            trapExplanation: '這是陷阱題{かんけいだい}。數字{すうじ}8搭配{たいはい}h行{ぎょう}量詞{りょうし}時{とき}必定{かならず}發生{はっせい}促音化{そくおんか}+半濁音化{はんだくおんか}。',
            relatedRules: ['h-p轉換{てんかん}規律{きそく}', '促音化{そくおんか}規則{きそく}', '8的音變{おんへん}模式{もしき}']
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
            { text: 'はちほん', isCorrect: false, reason: '陷阱{かんけい}！8本{はっぽん}需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'はっぽん', isCorrect: true, reason: '正確{せいかく}！「タコには足{あし}が八本{はっぽん}」表示{ひょうじ}「章魚{タコ}有八條{はっぽん}腳{あし}」。' },
            { text: 'はちぼん', isCorrect: false, reason: '8本{はっぽん}使用{しよう}促音{そくおん}+半濁音{はんだくおん}。' },
            { text: 'やっぽん', isCorrect: false, reason: '量詞{りょうし}「本{ほん}」用{もちいる}音讀{おんどく}「はち」，不用{もちいず}訓讀{くんどく}「や」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '章魚{タコ}的腳{あし}是細長{ほそなが}的，使用{しよう}量詞{りょうし}「本{ほん}」。',
            trapExplanation: '8本{はっぽん}固定{こてい}讀む{よむ}「はっぽん」，音變{おんへん}規則{きそく}與1/6/10相同{おなじ}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}', '動物{どうぶつ}部位{ぶい}の計數{けいすう}']
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
            { text: 'はちほん', isCorrect: false, reason: '8本{はっぽん}需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'はっぽん', isCorrect: true, reason: '正確{せいかく}！八根{はっぽん}蠟燭{ろうそく}。' },
            { text: 'はちぼん', isCorrect: false, reason: '8本{はっぽん}使用{しよう}促音{そくおん}+半濁音{はんだくおん}。' },
            { text: 'やっつ', isCorrect: false, reason: '蠟燭{ろうそく}是細長{ほそなが}的，用{もちいる}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ろうそく」（蠟燭{ろうそく}）是細長形{ほそながけい}，使用{しよう}量詞{りょうし}「本{ほん}」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}', '生日{たんじょうび}派對{パーティー}']
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
        stem: '「十本」的正確讀音是？',
        stem_zh: '「十本」的正確讀音是？',
        options: [
            { text: 'じゅっぽん', isCorrect: true, reason: '正確{せいかく}！「十本{じゅっぽん}」發生{はっせい}促音化{そくおんか}+半濁音化{はんだくおんか}，讀作{どくさ}「じゅっぽん」。' },
            { text: 'じゅうほん', isCorrect: false, reason: '陷阱{かんけい}！10本{じゅっぽん}需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'じゅうぼん', isCorrect: false, reason: '10本{じゅっぽん}使用{しよう}促音{そくおん}+半濁音{はんだくおん}，不是濁音{だくおん}。' },
            { text: 'とおほん', isCorrect: false, reason: '量詞{りょうし}「本{ほん}」用{もちいる}音讀{おんどく}「じゅう」，不用{もちいず}訓讀{くんどく}「とお」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十本{じゅっぽん}」讀作{どくさ}「じゅっぽん」。「十{じゅう}」的「う」變為{へんい}促音{そくおん}「っ」，「本{ほん}」的「ほ」變為{へんい}半濁音{はんだくおん}「ぽ」。',
            trapExplanation: '這是陷阱題{かんけいだい}。數字{すうじ}10搭配{たいはい}h行{ぎょう}量詞{りょうし}時{とき}必定{かならず}發生{はっせい}促音化{そくおんか}+半濁音化{はんだくおんか}。',
            relatedRules: ['h-p轉換{てんかん}規律{きそく}', '促音化{そくおんか}規則{きそく}', '10的音變{おんへん}模式{もしき}']
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
            { text: 'じゅうほん', isCorrect: false, reason: '陷阱{かんけい}！10本{じゅっぽん}需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'じゅっぽん', isCorrect: true, reason: '正確{せいかく}！「手{て}には指{ゆび}が十本{じゅっぽん}」表示{ひょうじ}「手上{てうえ}有十根{じゅっぽん}手指{ゆび}」。' },
            { text: 'じゅうぼん', isCorrect: false, reason: '10本{じゅっぽん}使用{しよう}促音{そくおん}+半濁音{はんだくおん}。' },
            { text: 'とお', isCorrect: false, reason: '手指{ゆび}是細長{ほそなが}的，應使用{しよう}「本{ほん}」而非{いがい}「つ」系統{けいとう}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '手指{ゆび}是細長形{ほそながけい}，使用{しよう}量詞{りょうし}「本{ほん}」。',
            trapExplanation: '10本{じゅっぽん}固定{こてい}讀む{よむ}「じゅっぽん」，音變{おんへん}規則{きそく}與1/6/8相同{おなじ}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}', '身體{からだ}部位{ぶい}の計數{けいすう}']
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
            { text: 'じゅうほん', isCorrect: false, reason: '10本{じゅっぽん}需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'じゅっぽん', isCorrect: true, reason: '正確{せいかく}！保齡球{ボウリング}有十根{じゅっぽん}球瓶{ピン}。' },
            { text: 'じゅうぼん', isCorrect: false, reason: '10本{じゅっぽん}使用{しよう}促音{そくおん}+半濁音{はんだくおん}。' },
            { text: 'とお', isCorrect: false, reason: '球瓶{ピン}是細長{ほそなが}的，用{もちいる}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '保齡球{ボウリング}的「ピン」是細長形{ほそながけい}，使用{しよう}量詞{りょうし}「本{ほん}」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}', '運動{うんどう}用品{ようひん}']
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
        stem: '「五本」的正確讀音是？',
        stem_zh: '「五本」的正確讀音是？',
        options: [
            { text: 'ごほん', isCorrect: true, reason: '正確{せいかく}！「五本{ごほん}」無音變{むおんへん}，讀作{どくさ}「ごほん」。' },
            { text: 'ごぽん', isCorrect: false, reason: '5本{ごほん}不發生{ふはっせい}半濁音化{はんだくおんか}。' },
            { text: 'ごぼん', isCorrect: false, reason: '5本{ごほん}不發生{ふはっせい}濁音化{だくおんか}。' },
            { text: 'いつほん', isCorrect: false, reason: '量詞{りょうし}「本{ほん}」用{もちいる}音讀{おんどく}「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五本{ごほん}」讀作{どくさ}「ごほん」。數字{すうじ}5不觸發{しょうはつ}音變{おんへん}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の音變{おんへん}規則{きそく}']
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
            { text: 'ごぽん', isCorrect: false, reason: '5本{ごほん}無音變{むおんへん}。' },
            { text: 'ごほん', isCorrect: true, reason: '正確{せいかく}！買了{かいました}五支{ごほん}麥克筆{マーカー}。' },
            { text: 'いつほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「ご」。' },
            { text: 'ごぼん', isCorrect: false, reason: '5本{ごほん}無濁音化{むだくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「マーカーを五本{ごほん}」表示{ひょうじ}「五支{ごほん}麥克筆{マーカー}」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
            { text: 'いつほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「ご」。' },
            { text: 'ごほん', isCorrect: true, reason: '正確{せいかく}！需要{ひつよう}五把{ごほん}傘{かさ}。' },
            { text: 'ごぽん', isCorrect: false, reason: '5本{ごほん}無音變{むおんへん}。' },
            { text: 'いつつ', isCorrect: false, reason: '傘{かさ}用{もちいる}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「傘{かさ}が五本{ごほん}必要{ひつよう}」表示{ひょうじ}「需要{ひつよう}五把{ごほん}傘{かさ}」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
        stem: '「七本」的正確讀音是？',
        stem_zh: '「七本」的正確讀音是？',
        options: [
            { text: 'ななほん', isCorrect: true, reason: '正確{せいかく}！「七本{ななほん}」通常{つうじょう}讀作{どくさ}「ななほん」。' },
            { text: 'しちぽん', isCorrect: false, reason: '7本{ななほん}不發生{ふはっせい}半濁音化{はんだくおんか}。' },
            { text: 'なのほん', isCorrect: false, reason: '「なの」是日期{にっき}讀法{よみかた}。' },
            { text: 'しちぼん', isCorrect: false, reason: '7本{ななほん}不發生{ふはっせい}濁音化{だくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七本{ななほん}」通常{つうじょう}讀作{どくさ}「ななほん」，也可{かのう}讀作{どくさ}「しちほん」。',
            relatedRules: ['七{しち}の讀法{よみかた}選擇{せんたく}']
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
            { text: 'しちぽん', isCorrect: false, reason: '7本{ななほん}無音變{むおんへん}。' },
            { text: 'ななほん', isCorrect: true, reason: '正確{せいかく}！喝了{のみました}七瓶{ななほん}果汁{ジュース}。' },
            { text: 'なのほん', isCorrect: false, reason: '「なの」是日期{にっき}讀法{よみかた}。' },
            { text: 'ななつ', isCorrect: false, reason: '瓶裝{びんづめ}飲料{いんりょう}用{もちいる}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ジュースを七本{ななほん}」表示{ひょうじ}「七瓶{ななほん}果汁{ジュース}」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
            { text: 'しちぽん', isCorrect: false, reason: '7本{ななほん}無半濁音化{むはんだくおんか}。' },
            { text: 'ななほん', isCorrect: true, reason: '正確{せいかく}！有七支{ななほん}鉛筆{えんぴつ}。' },
            { text: 'なのほん', isCorrect: false, reason: '「なの」不用於{もちいず}量詞{りょうし}。' },
            { text: 'ななつ', isCorrect: false, reason: '鉛筆{えんぴつ}用{もちいる}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「鉛筆{えんぴつ}が七本{ななほん}」表示{ひょうじ}「七支{ななほん}鉛筆{えんぴつ}」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
        stem: '「九本」的正確讀音是？',
        stem_zh: '「九本」的正確讀音是？',
        options: [
            { text: 'きゅうほん', isCorrect: true, reason: '正確{せいかく}！「九本{きゅうほん}」無音變{むおんへん}，讀作{どくさ}「きゅうほん」。' },
            { text: 'くほん', isCorrect: false, reason: '量詞{りょうし}「本{ほん}」搭配{たいはい}9使用{しよう}「きゅう」。' },
            { text: 'きゅうぽん', isCorrect: false, reason: '9本{きゅうほん}無半濁音化{むはんだくおんか}。' },
            { text: 'きゅうぼん', isCorrect: false, reason: '9本{きゅうほん}無濁音化{むだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九本{きゅうほん}」讀作{どくさ}「きゅうほん」。數字{すうじ}9不觸發{しょうはつ}音變{おんへん}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の音變{おんへん}規則{きそく}']
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
            { text: 'くほん', isCorrect: false, reason: '使用{しよう}「きゅう」不是「く」。' },
            { text: 'きゅうほん', isCorrect: true, reason: '正確{せいかく}！花瓶{かびん}裡{なか}有九支{きゅうほん}花{はな}。' },
            { text: 'きゅうぽん', isCorrect: false, reason: '9本{きゅうほん}無音變{むおんへん}。' },
            { text: 'ここのつ', isCorrect: false, reason: '花{はな}（莖{くき}）用{もちいる}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「花{はな}が九本{きゅうほん}」表示{ひょうじ}「九支{きゅうほん}花{はな}」。花{はな}的莖{くき}是細長{ほそなが}的。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
            { text: 'くほん', isCorrect: false, reason: '使用{しよう}「きゅう」。' },
            { text: 'きゅうほん', isCorrect: true, reason: '正確{せいかく}！有九瓶{きゅうほん}紅酒{ワイン}。' },
            { text: 'きゅうぽん', isCorrect: false, reason: '9本{きゅうほん}無音變{むおんへん}。' },
            { text: 'ここのつ', isCorrect: false, reason: '瓶裝{びんづめ}用{もちいる}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ワインが九本{きゅうほん}」表示{ひょうじ}「九瓶{きゅうほん}紅酒{ワイン}」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
        stem: '「十一本」的正確讀音是？',
        stem_zh: '「十一本」的正確讀音是？',
        options: [
            { text: 'じゅういっぽん', isCorrect: true, reason: '正確{せいかく}！「十一本{じゅういっぽん}」讀作{どくさ}「じゅういっぽん」。' },
            { text: 'じゅういちほん', isCorrect: false, reason: '陷阱{かんけい}！「一本{いっぽん}」部分{ぶぶん}需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'じゅういちぼん', isCorrect: false, reason: '11本{じゅういっぽん}使用{しよう}半濁音{はんだくおん}「ぽ」。' },
            { text: 'といっぽん', isCorrect: false, reason: '十使用{しよう}「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十一本{じゅういっぽん}」讀作{どくさ}「じゅういっぽん」。尾數{びすう}是1時{とき}發生{はっせい}促音化{そくおんか}+半濁音化{はんだくおんか}。',
            trapExplanation: '尾數{びすう}決定{けってい}音變{おんへん}：11的尾數{びすう}是1，所以{だから}變成{へんせい}「いっぽん」。',
            relatedRules: ['複合{ふくごう}數字{すうじ}の音變{おんへん}']
        },
        sourceItem: { value: 11, kanji: '十一本', reading: 'じゅういっぽん' }
    },
    {
        id: 'long_13_pron',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十三本」的正確讀音是？',
        stem_zh: '「十三本」的正確讀音是？',
        options: [
            { text: 'じゅうさんぼん', isCorrect: true, reason: '正確{せいかく}！「十三本{じゅうさんぼん}」讀作{どくさ}「じゅうさんぼん」。' },
            { text: 'じゅうさんほん', isCorrect: false, reason: '陷阱{かんけい}！尾數{びすう}3時{とき}「ほ」變為{へんい}濁音{だくおん}「ぼ」。' },
            { text: 'じゅうさんぽん', isCorrect: false, reason: '13本{じゅうさんぼん}使用{しよう}濁音{だくおん}「ぼ」。' },
            { text: 'とみぼん', isCorrect: false, reason: '十三{じゅうさん}使用{しよう}音讀{おんどく}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十三本{じゅうさんぼん}」讀作{どくさ}「じゅうさんぼん」。尾數{びすう}是3時{とき}發生{はっせい}濁音化{だくおんか}。',
            trapExplanation: '尾數{びすう}3觸發{しょうはつ}濁音化{だくおんか}，與「三本{さんぼん}」相同{おなじ}。',
            relatedRules: ['複合{ふくごう}數字{すうじ}の音變{おんへん}']
        },
        sourceItem: { value: 13, kanji: '十三本', reading: 'じゅうさんぼん' }
    },
    {
        id: 'long_16_pron',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十六本」的正確讀音是？',
        stem_zh: '「十六本」的正確讀音是？',
        options: [
            { text: 'じゅうろっぽん', isCorrect: true, reason: '正確{せいかく}！「十六本{じゅうろっぽん}」讀作{どくさ}「じゅうろっぽん」。' },
            { text: 'じゅうろくほん', isCorrect: false, reason: '陷阱{かんけい}！尾數{びすう}6時{とき}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'じゅうろくぼん', isCorrect: false, reason: '16本{じゅうろっぽん}使用{しよう}半濁音{はんだくおん}「ぽ」。' },
            { text: 'とむっぽん', isCorrect: false, reason: '十六{じゅうろく}使用{しよう}音讀{おんどく}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十六本{じゅうろっぽん}」讀作{どくさ}「じゅうろっぽん」。尾數{びすう}是6時{とき}發生{はっせい}促音化{そくおんか}+半濁音化{はんだくおんか}。',
            trapExplanation: '尾數{びすう}6觸發{しょうはつ}促音化{そくおんか}+半濁音化{はんだくおんか}，與「六本{ろっぽん}」相同{おなじ}。',
            relatedRules: ['複合{ふくごう}數字{すうじ}の音變{おんへん}']
        },
        sourceItem: { value: 16, kanji: '十六本', reading: 'じゅうろっぽん' }
    },
    {
        id: 'long_18_pron',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十八本」的正確讀音是？',
        stem_zh: '「十八本」的正確讀音是？',
        options: [
            { text: 'じゅうはっぽん', isCorrect: true, reason: '正確{せいかく}！「十八本{じゅうはっぽん}」讀作{どくさ}「じゅうはっぽん」。' },
            { text: 'じゅうはちほん', isCorrect: false, reason: '陷阱{かんけい}！尾數{びすう}8時{とき}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'じゅうはちぼん', isCorrect: false, reason: '18本{じゅうはっぽん}使用{しよう}半濁音{はんだくおん}「ぽ」。' },
            { text: 'とやっぽん', isCorrect: false, reason: '十八{じゅうはち}使用{しよう}音讀{おんどく}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十八本{じゅうはっぽん}」讀作{どくさ}「じゅうはっぽん」。尾數{びすう}是8時{とき}發生{はっせい}促音化{そくおんか}+半濁音化{はんだくおんか}。',
            trapExplanation: '尾數{びすう}8觸發{しょうはつ}促音化{そくおんか}+半濁音化{はんだくおんか}，與「八本{はっぽん}」相同{おなじ}。',
            relatedRules: ['複合{ふくごう}數字{すうじ}の音變{おんへん}']
        },
        sourceItem: { value: 18, kanji: '十八本', reading: 'じゅうはっぽん' }
    },
    {
        id: 'long_20_pron',
        category: 'counters',
        subcategory: 'longObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「二十本」的正確讀音是？',
        stem_zh: '「二十本」的正確讀音是？',
        options: [
            { text: 'にじゅっぽん', isCorrect: true, reason: '正確{せいかく}！「二十本{にじゅっぽん}」讀作{どくさ}「にじゅっぽん」。' },
            { text: 'にじゅうほん', isCorrect: false, reason: '陷阱{かんけい}！尾數{びすう}0（十{じゅう}）時{とき}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'にじゅうぼん', isCorrect: false, reason: '20本{にじゅっぽん}使用{しよう}半濁音{はんだくおん}「ぽ」。' },
            { text: 'はたぽん', isCorrect: false, reason: '二十{にじゅう}使用{しよう}音讀{おんどく}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十本{にじゅっぽん}」讀作{どくさ}「にじゅっぽん」。整十{じゅう}數（10, 20, 30...）時{とき}發生{はっせい}促音化{そくおんか}+半濁音化{はんだくおんか}。',
            trapExplanation: '整十{じゅう}數觸發{しょうはつ}與10相同{おなじ}的音變{おんへん}。',
            relatedRules: ['複合{ふくごう}數字{すうじ}の音變{おんへん}']
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
        stem: '「何本」的正確讀音是？',
        stem_zh: '「何本」的正確讀音是？',
        options: [
            { text: 'なんぼん', isCorrect: true, reason: '正確{せいかく}！「何本{なんぼん}」發生{はっせい}濁音化{だくおんか}，讀作{どくさ}「なんぼん」。' },
            { text: 'なんほん', isCorrect: false, reason: '陷阱{かんけい}！「何{なん}」的撥音{はつおん}「ん」使{しめす}「ほ」變為{へんい}濁音{だくおん}「ぼ」。' },
            { text: 'なんぽん', isCorrect: false, reason: '「何本{なんぼん}」使用{しよう}濁音{だくおん}「ぼ」，不是半濁音{はんだくおん}「ぽ」。' },
            { text: 'なにほん', isCorrect: false, reason: '搭配{たいはい}量詞{りょうし}時{とき}，「何{なに}」讀作{どくさ}「なん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何本{なんぼん}」讀作{どくさ}「なんぼん」。疑問詞{ぎもんし}「何{なん}」的撥音{はつおん}「ん」引發{いんぱつ}濁音化{だくおんか}。',
            trapExplanation: '這是陷阱題{かんけいだい}。撥音{はつおん}「ん」後的「h」音{おん}變為{へんい}濁音{だくおん}「b」，與「3本{さんぼん}」規則{きそく}相同{おなじ}。',
            relatedRules: ['疑問詞{ぎもんし}の音變{おんへん}', '「何{なん}＋量詞{りょうし}」の讀法{よみかた}']
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
            { text: 'さんほん', isCorrect: false, reason: '陷阱{かんけい}！3本{さんぼん}需要{じゅよう}濁音化{だくおんか}。' },
            { text: 'さんぼん', isCorrect: true, reason: '正確{せいかく}！三支{さんぼん}原子筆{ボールペン}。' },
            { text: 'みっつ', isCorrect: false, reason: '筆{ペン}用{もちいる}「本{ほん}」。' },
            { text: 'さんぽん', isCorrect: false, reason: '3本{さんぼん}用{もちいる}濁音{だくおん}「ぼ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ボールペンを三本{さんぼん}」表示{ひょうじ}「三支{さんぼん}原子筆{ボールペン}」。',
            trapExplanation: '3本{さんぼん}固定{こてい}濁音化{だくおんか}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
            { text: 'にじゅうほん', isCorrect: false, reason: '20本{にじゅっぽん}需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'にじゅっぽん', isCorrect: true, reason: '正確{せいかく}！二十棵{にじゅっぽん}櫻花樹{さくらのき}。' },
            { text: 'にじゅうぼん', isCorrect: false, reason: '20本{にじゅっぽん}用{もちいる}半濁音{はんだくおん}「ぽ」。' },
            { text: 'はたぽん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「にじゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「桜{さくら}の木{き}が二十本{にじゅっぽん}」表示{ひょうじ}「二十棵{にじゅっぽん}櫻花樹{さくらのき}」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
            { text: 'よんぼん', isCorrect: false, reason: '4本{よんほん}無音變{むおんへん}。' },
            { text: 'よんほん', isCorrect: true, reason: '正確{せいかく}！看了{みました}四部{よんほん}電影{えいが}。' },
            { text: 'しほん', isCorrect: false, reason: '使用{しよう}「よん」不用{もちいず}「し」。' },
            { text: 'よっつ', isCorrect: false, reason: '電影{えいが}用{もちいる}「本{ほん}」計數{けいすう}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '電影{えいが}使用{しよう}「本{ほん}」來計數{けいすう}，因為{なぜなら}是「膠卷{フィルム}」的形狀{けいじょう}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}', '電影{えいが}の計數{けいすう}']
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
            { text: 'ろくほん', isCorrect: false, reason: '陷阱{かんけい}！6本{ろっぽん}需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'ろっぽん', isCorrect: true, reason: '正確{せいかく}！一小時{いちじかん}有六班{ろっぽん}電車{でんしゃ}。' },
            { text: 'むっぽん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「ろく」。' },
            { text: 'ろくぼん', isCorrect: false, reason: '6本{ろっぽん}用{もちいる}半濁音{はんだくおん}「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '電車{でんしゃ}班次{はんじ}也用{もちいる}「本{ほん}」計數{けいすう}，因為{なぜなら}是「路線{ろせん}」的概念{がいねん}。',
            trapExplanation: '6本{ろっぽん}固定{こてい}促音化{そくおんか}+半濁音化{はんだくおんか}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}', '交通{こうつう}用語{ようご}']
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
            { text: 'はちほん', isCorrect: false, reason: '陷阱{かんけい}！8本{はっぽん}需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'はっぽん', isCorrect: true, reason: '正確{せいかく}！有八通{はっぽん}電話{でんわ}。' },
            { text: 'やっぽん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「はち」。' },
            { text: 'はちぼん', isCorrect: false, reason: '8本{はっぽん}用{もちいる}半濁音{はんだくおん}「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '電話{でんわ}通話{つうわ}也用{もちいる}「本{ほん}」計數{けいすう}，因為{なぜなら}是「線{せん}」的概念{がいねん}。',
            trapExplanation: '8本{はっぽん}固定{こてい}促音化{そくおんか}+半濁音化{はんだくおんか}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}', '電話{でんわ}用語{ようご}']
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
            { text: 'ふたほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「に」。' },
            { text: 'にほん', isCorrect: true, reason: '正確{せいかく}！買{かいます}兩瓶{にほん}紅酒{ワイン}。' },
            { text: 'にぼん', isCorrect: false, reason: '2本{にほん}無音變{むおんへん}。' },
            { text: 'ふたつ', isCorrect: false, reason: '瓶裝{びんづめ}用{もちいる}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ワインを二本{にほん}」表示{ひょうじ}「兩瓶{にほん}紅酒{ワイン}」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
            { text: 'いつほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「ご」。' },
            { text: 'ごほん', isCorrect: true, reason: '正確{せいかく}！切了{きりました}五根{ごほん}胡蘿蔔{にんじん}。' },
            { text: 'ごぽん', isCorrect: false, reason: '5本{ごほん}無音變{むおんへん}。' },
            { text: 'いつつ', isCorrect: false, reason: '胡蘿蔔{にんじん}用{もちいる}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「にんじんを五本{ごほん}」表示{ひょうじ}「五根{ごほん}胡蘿蔔{にんじん}」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}', '蔬菜{やさい}の計數{けいすう}']
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
            { text: 'じゅうほん', isCorrect: false, reason: '陷阱{かんけい}！10本{じゅっぽん}需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'じゅっぽん', isCorrect: true, reason: '正確{せいかく}！踢了{うちました}十球{じゅっぽん}射門{シュート}。' },
            { text: 'とおほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「じゅう」。' },
            { text: 'じゅうぼん', isCorrect: false, reason: '10本{じゅっぽん}用{もちいる}半濁音{はんだくおん}「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '射門{シュート}用{もちいる}「本{ほん}」計數{けいすう}。',
            trapExplanation: '10本{じゅっぽん}固定{こてい}促音化{そくおんか}+半濁音化{はんだくおんか}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}', '運動{うんどう}用語{ようご}']
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
            { text: '1、6、8、10', isCorrect: true, reason: '正確{せいかく}！1/6/8/10搭配{たいはい}「本{ほん}」時{とき}發生{はっせい}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: '3、何', isCorrect: false, reason: '3和「何{なん}」發生{はっせい}濁音化{だくおんか}，變成{へんせい}「ぼん」。' },
            { text: '2、4、5、7、9', isCorrect: false, reason: '這些{これら}數字{すうじ}無音變{むおんへん}，保持{ほじ}「ほん」。' },
            { text: '所有數字', isCorrect: false, reason: '只有{ただ}特定{とくてい}數字{すうじ}會發生{はっせい}音變{おんへん}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '1/6/8/10搭配{たいはい}h行{ぎょう}量詞{りょうし}時{とき}：「っ」+「ぽん」（促音{そくおん}+半濁音{はんだくおん}）。',
            relatedRules: ['h-p轉換{てんかん}規律{きそく}', '促音化{そくおんか}規則{きそく}']
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
            { text: '3、何', isCorrect: true, reason: '正確{せいかく}！3和「何{なん}」的撥音{はつおん}「ん」觸發{しょうはつ}濁音化{だくおんか}。' },
            { text: '1、6、8、10', isCorrect: false, reason: '這些{これら}發生{はっせい}促音化{そくおんか}+半濁音化{はんだくおんか}，變成{へんせい}「っぽん」。' },
            { text: '2、4、5', isCorrect: false, reason: '這些{これら}無音變{むおんへん}，保持{ほじ}「ほん」。' },
            { text: '7、9', isCorrect: false, reason: '7、9無音變{むおんへん}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '撥音{はつおん}「ん」後的h行{ぎょう}量詞{りょうし}發生{はっせい}濁音化{だくおんか}：「ぼん」。',
            relatedRules: ['h-b轉換{てんかん}規律{きそく}', '濁音化{だくおんか}規則{きそく}']
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
            { text: '2、4、5、7、9', isCorrect: true, reason: '正確{せいかく}！這些{これら}數字{すうじ}搭配{たいはい}「本{ほん}」時{とき}保持{ほじ}原音{げんおん}「ほん」。' },
            { text: '1、3、6', isCorrect: false, reason: '1/6發生{はっせい}促音化{そくおんか}+半濁音化{はんだくおんか}，3發生{はっせい}濁音化{だくおんか}。' },
            { text: '8、10、何', isCorrect: false, reason: '8/10發生{はっせい}促音化{そくおんか}+半濁音化{はんだくおんか}，「何{なん}」發生{はっせい}濁音化{だくおんか}。' },
            { text: '所有數字', isCorrect: false, reason: '部分{ぶぶん}數字{すうじ}會發生{はっせい}音變{おんへん}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '2/4/5/7/9搭配{たいはい}「本{ほん}」時{とき}無音變{むおんへん}，保持{ほじ}「ほん」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の音變{おんへん}規則{きそく}']
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
            { text: '一本（いっぽん）', isCorrect: false, reason: '正確{せいかく}，1本{いっぽん}需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: '三本（さんほん）', isCorrect: true, reason: '錯誤{ごさ}！3本{さんぼん}需要{じゅよう}濁音化{だくおんか}，應為{べきい}「さんぼん」。' },
            { text: '六本（ろっぽん）', isCorrect: false, reason: '正確{せいかく}，6本{ろっぽん}需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: '二本（にほん）', isCorrect: false, reason: '正確{せいかく}，2本{にほん}無音變{むおんへん}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '3本{さんぼん}應該{べき}讀作{どくさ}「さんぼん」，撥音{はつおん}「ん」後需{じゅよう}濁音化{だくおんか}。',
            trapExplanation: '這是測試{テスト}「さんぼん」規則{きそく}的陷阱題{かんけいだい}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の音變{おんへん}規則{きそく}']
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
            { text: '八本（はっぽん）', isCorrect: false, reason: '正確{せいかく}，8本{はっぽん}需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: '十本（じゅっぽん）', isCorrect: false, reason: '正確{せいかく}，10本{じゅっぽん}需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: '何本（なんほん）', isCorrect: true, reason: '錯誤{ごさ}！「何本{なんぼん}」需要{じゅよう}濁音化{だくおんか}，應為{べきい}「なんぼん」。' },
            { text: '五本（ごほん）', isCorrect: false, reason: '正確{せいかく}，5本{ごほん}無音變{むおんへん}。' }
        ],
        correctIndex: 2,
        explanation: {
            correctRule: '「何本{なんぼん}」應該{べき}讀作{どくさ}「なんぼん」，撥音{はつおん}「ん」後需{じゅよう}濁音化{だくおんか}。',
            trapExplanation: '這是測試{テスト}「なんぼん」規則{きそく}的陷阱題{かんけいだい}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の音變{おんへん}規則{きそく}']
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
            { text: '筆、傘、樹、香蕉、電影', isCorrect: true, reason: '正確{せいかく}！這些{これら}都是細長形{ほそながけい}或線狀{せんじょう}的物品{ぶっぴん}。' },
            { text: '書、紙、衣服', isCorrect: false, reason: '書{ほん}用{もちいる}「冊{さつ}」，紙{かみ}和衣服{いふく}用{もちいる}「枚{まい}」。' },
            { text: '貓、狗、魚', isCorrect: false, reason: '動物{どうぶつ}用{もちいる}「匹{ひき}」。' },
            { text: '蘋果、橘子、球', isCorrect: false, reason: '圓形{まるがた}物品{ぶっぴん}用{もちいる}「個{こ}」或「つ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「本{ほん}」用於{もちいる}細長形{ほそながけい}或線狀{せんじょう}物品{ぶっぴん}：筆{ペン}、傘{かさ}、樹{き}、香蕉{バナナ}、電影{えいが}（膠卷{フィルム}）。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}範圍{はんい}']
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
            { text: '電話、電車班次、射門、全壘打', isCorrect: true, reason: '正確{せいかく}！這些{これら}都有「線{せん}」或「軌跡{きせき}」的概念{がいねん}。' },
            { text: '書、雜誌、報紙', isCorrect: false, reason: '書{ほん}用{もちいる}「冊{さつ}」，雜誌{ざっし}和報紙{しんぶん}用{もちいる}「部{ぶ}」。' },
            { text: '人、動物', isCorrect: false, reason: '人{ひと}用{もちいる}「人{にん}」，動物{どうぶつ}用{もちいる}「匹{ひき}」等{など}。' },
            { text: '房子、車', isCorrect: false, reason: '房子{いえ}用{もちいる}「軒{けん}」，車{くるま}用{もちいる}「台{だい}」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「本{ほん}」也用於{もちいる}有「線{せん}」或「軌跡{きせき}」概念{がいねん}的事物{じぶつ}：電話{でんわ}（線{せん}）、電車{でんしゃ}班次{はんじ}（路線{ろせん}）、射門{シュート}（軌跡{きせき}）。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の抽象{ちゅうしょう}使用{しよう}']
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
            { text: 'いちほん', isCorrect: false, reason: '陷阱{かんけい}！1本{いっぽん}需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'いっぽん', isCorrect: true, reason: '正確{せいかく}！有一支{いっぽん}球棒{バット}。' },
            { text: 'ひとほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「いち」。' },
            { text: 'いっぼん', isCorrect: false, reason: '1本{いっぽん}用{もちいる}半濁音{はんだくおん}「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「バットを一本{いっぽん}」表示{ひょうじ}「一支{いっぽん}球棒{バット}」。',
            trapExplanation: '1本{いっぽん}固定{こてい}讀む{よむ}「いっぽん」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
            { text: 'ふたほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「に」。' },
            { text: 'にほん', isCorrect: true, reason: '正確{せいかく}！釣了{つりました}兩條{にほん}魚{さかな}。' },
            { text: 'にぼん', isCorrect: false, reason: '2本{にほん}無音變{むおんへん}。' },
            { text: 'にひき', isCorrect: false, reason: '釣到{つれた}的魚{さかな}通常{つうじょう}用{もちいる}「本{ほん}」計數{けいすう}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '釣到{つれた}的魚{さかな}用{もちいる}「本{ほん}」計數{けいすう}，因為{なぜなら}是細長形{ほそながけい}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
            { text: 'さんほん', isCorrect: false, reason: '陷阱{かんけい}！3本{さんぼん}需要{じゅよう}濁音化{だくおんか}。' },
            { text: 'さんぼん', isCorrect: true, reason: '正確{せいかく}！買了{かいました}三根{さんぼん}蘿蔔{だいこん}。' },
            { text: 'みっつ', isCorrect: false, reason: '蘿蔔{だいこん}用{もちいる}「本{ほん}」。' },
            { text: 'さんぽん', isCorrect: false, reason: '3本{さんぼん}用{もちいる}濁音{だくおん}「ぼ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「大根{だいこん}を三本{さんぼん}」表示{ひょうじ}「三根{さんぼん}蘿蔔{だいこん}」。',
            trapExplanation: '3本{さんぼん}固定{こてい}濁音化{だくおんか}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
            { text: 'しほん', isCorrect: false, reason: '使用{しよう}「よん」不用{もちいず}「し」。' },
            { text: 'よんほん', isCorrect: true, reason: '正確{せいかく}！有四支{よんほん}牙刷{はブラシ}。' },
            { text: 'よんぼん', isCorrect: false, reason: '4本{よんほん}無音變{むおんへん}。' },
            { text: 'よっつ', isCorrect: false, reason: '牙刷{はブラシ}用{もちいる}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「歯{は}ブラシが四本{よんほん}」表示{ひょうじ}「四支{よんほん}牙刷{はブラシ}」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
            { text: 'ろくほん', isCorrect: false, reason: '陷阱{かんけい}！6本{ろっぽん}需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'ろっぽん', isCorrect: true, reason: '正確{せいかく}！換了{こうかん}六個{ろっぽん}輪胎{タイヤ}。' },
            { text: 'むっつ', isCorrect: false, reason: '輪胎{タイヤ}用{もちいる}「本{ほん}」計數{けいすう}。' },
            { text: 'ろくぼん', isCorrect: false, reason: '6本{ろっぽん}用{もちいる}半濁音{はんだくおん}「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '輪胎{タイヤ}用{もちいる}「本{ほん}」計數{けいすう}。',
            trapExplanation: '6本{ろっぽん}固定{こてい}促音化{そくおんか}+半濁音化{はんだくおんか}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
            { text: 'なのほん', isCorrect: false, reason: '「なの」是日期{にっき}讀法{よみかた}。' },
            { text: 'ななほん', isCorrect: true, reason: '正確{せいかく}！需要{ひつよう}七支{ななほん}吸管{ストロー}。' },
            { text: 'しちぽん', isCorrect: false, reason: '7本{ななほん}無半濁音化{むはんだくおんか}。' },
            { text: 'ななつ', isCorrect: false, reason: '吸管{ストロー}用{もちいる}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ストローが七本{ななほん}」表示{ひょうじ}「七支{ななほん}吸管{ストロー}」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
            { text: 'はちほん', isCorrect: false, reason: '陷阱{かんけい}！8本{はっぽん}需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'はっぽん', isCorrect: true, reason: '正確{せいかく}！立了{たてました}八根{はっぽん}蠟燭{ロウソク}。' },
            { text: 'やっつ', isCorrect: false, reason: '蠟燭{ロウソク}用{もちいる}「本{ほん}」。' },
            { text: 'はちぼん', isCorrect: false, reason: '8本{はっぽん}用{もちいる}半濁音{はんだくおん}「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ロウソクを八本{はっぽん}」表示{ひょうじ}「八根{はっぽん}蠟燭{ロウソク}」。',
            trapExplanation: '8本{はっぽん}固定{こてい}促音化{そくおんか}+半濁音化{はんだくおんか}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
            { text: 'くほん', isCorrect: false, reason: '使用{しよう}「きゅう」不是「く」。' },
            { text: 'きゅうほん', isCorrect: true, reason: '正確{せいかく}！用了{つかいました}九支{きゅうほん}螺絲{ネジ}。' },
            { text: 'きゅうぽん', isCorrect: false, reason: '9本{きゅうほん}無音變{むおんへん}。' },
            { text: 'ここのつ', isCorrect: false, reason: '螺絲{ネジ}用{もちいる}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ネジを九本{きゅうほん}」表示{ひょうじ}「九支{きゅうほん}螺絲{ネジ}」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
            { text: 'じゅうほん', isCorrect: false, reason: '陷阱{かんけい}！10本{じゅっぽん}需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'じゅっぽん', isCorrect: true, reason: '正確{せいかく}！排著{ならんでいます}十根{じゅっぽん}電線桿{でんちゅう}。' },
            { text: 'とおほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「じゅう」。' },
            { text: 'じゅうぼん', isCorrect: false, reason: '10本{じゅっぽん}用{もちいる}半濁音{はんだくおん}「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「電柱{でんちゅう}が十本{じゅっぽん}」表示{ひょうじ}「十根{じゅっぽん}電線桿{でんちゅう}」。',
            trapExplanation: '10本{じゅっぽん}固定{こてい}促音化{そくおんか}+半濁音化{はんだくおんか}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
            { text: 'じゅういちほん', isCorrect: false, reason: '陷阱{かんけい}！尾數{びすう}1時{とき}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'じゅういっぽん', isCorrect: true, reason: '正確{せいかく}！訂{ちゅうもん}十一瓶{じゅういっぽん}茶{おちゃ}。' },
            { text: 'といっぽん', isCorrect: false, reason: '十使用{しよう}「じゅう」。' },
            { text: 'じゅういちぼん', isCorrect: false, reason: '尾數{びすう}1用{もちいる}半濁音{はんだくおん}「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「お茶{ちゃ}を十一本{じゅういっぽん}」表示{ひょうじ}「十一瓶{じゅういっぽん}茶{おちゃ}」。',
            trapExplanation: '尾數{びすう}決定{けってい}音變{おんへん}，11的尾數{びすう}是1。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
            { text: 'じゅうふたほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「に」。' },
            { text: 'じゅうにほん', isCorrect: true, reason: '正確{せいかく}！長了{はえています}十二棵{じゅうにほん}竹子{たけ}。' },
            { text: 'じゅうにぼん', isCorrect: false, reason: '12本{じゅうにほん}無音變{むおんへん}。' },
            { text: 'とにほん', isCorrect: false, reason: '十使用{しよう}「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「竹{たけ}が十二本{じゅうにほん}」表示{ひょうじ}「十二棵{じゅうにほん}竹子{たけ}」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
            { text: 'じゅうさんほん', isCorrect: false, reason: '陷阱{かんけい}！尾數{びすう}3時{とき}濁音化{だくおんか}。' },
            { text: 'じゅうさんぼん', isCorrect: true, reason: '正確{せいかく}！買{かいます}十三根{じゅうさんぼん}小黃瓜{きゅうり}。' },
            { text: 'とみぼん', isCorrect: false, reason: '十三{じゅうさん}使用{しよう}音讀{おんどく}。' },
            { text: 'じゅうさんぽん', isCorrect: false, reason: '尾數{びすう}3用{もちいる}濁音{だくおん}「ぼ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「きゅうりを十三本{じゅうさんぼん}」表示{ひょうじ}「十三根{じゅうさんぼん}小黃瓜{きゅうり}」。',
            trapExplanation: '尾數{びすう}3觸發{しょうはつ}濁音化{だくおんか}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
            { text: 'じゅうしほん', isCorrect: false, reason: '使用{しよう}「よん」不用{もちいず}「し」。' },
            { text: 'じゅうよんほん', isCorrect: true, reason: '正確{せいかく}！準備{じゅんび}了十四條{じゅうよんほん}緞帶{リボン}。' },
            { text: 'じゅうよんぼん', isCorrect: false, reason: '14本{じゅうよんほん}無音變{むおんへん}。' },
            { text: 'といよんほん', isCorrect: false, reason: '十使用{しよう}「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「リボンを十四本{じゅうよんほん}」表示{ひょうじ}「十四條{じゅうよんほん}緞帶{リボン}」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
            { text: 'じゅういつほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「ご」。' },
            { text: 'じゅうごほん', isCorrect: true, reason: '正確{せいかく}！打了{うちました}十五支{じゅうごほん}安打{ヒット}。' },
            { text: 'じゅうごぽん', isCorrect: false, reason: '15本{じゅうごほん}無音變{むおんへん}。' },
            { text: 'とごほん', isCorrect: false, reason: '十使用{しよう}「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ヒットを十五本{じゅうごほん}」表示{ひょうじ}「十五支{じゅうごほん}安打{ヒット}」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}', '運動{うんどう}用語{ようご}']
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
            { text: 'じゅうろくほん', isCorrect: false, reason: '陷阱{かんけい}！尾數{びすう}6時{とき}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'じゅうろっぽん', isCorrect: true, reason: '正確{せいかく}！射了{いました}十六支{じゅうろっぽん}箭{や}。' },
            { text: 'じゅうむっぽん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「ろく」。' },
            { text: 'じゅうろくぼん', isCorrect: false, reason: '尾數{びすう}6用{もちいる}半濁音{はんだくおん}「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「矢{や}を十六本{じゅうろっぽん}」表示{ひょうじ}「十六支{じゅうろっぽん}箭{や}」。',
            trapExplanation: '尾數{びすう}6觸發{しょうはつ}促音化{そくおんか}+半濁音化{はんだくおんか}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
            { text: 'じゅうしちほん', isCorrect: false, reason: '雖然{すいぜん}可以{かのう}，但口語{こうご}常用{じょうよう}「なな」。' },
            { text: 'じゅうななほん', isCorrect: true, reason: '正確{せいかく}！準備{じゅんび}十七支{じゅうななほん}筷子{はし}。' },
            { text: 'じゅうなのほん', isCorrect: false, reason: '「なの」是日期{にっき}讀法{よみかた}。' },
            { text: 'じゅうななぽん', isCorrect: false, reason: '17本{じゅうななほん}無音變{むおんへん}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「お箸{はし}を十七本{じゅうななほん}」表示{ひょうじ}「十七支{じゅうななほん}筷子{はし}」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
            { text: 'じゅうはちほん', isCorrect: false, reason: '陷阱{かんけい}！尾數{びすう}8時{とき}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'じゅうはっぽん', isCorrect: true, reason: '正確{せいかく}！放入{いれました}了十八支{じゅうはっぽん}蠟筆{クレヨン}。' },
            { text: 'じゅうやっぽん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「はち」。' },
            { text: 'じゅうはちぼん', isCorrect: false, reason: '尾數{びすう}8用{もちいる}半濁音{はんだくおん}「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「クレヨンを十八本{じゅうはっぽん}」表示{ひょうじ}「十八支{じゅうはっぽん}蠟筆{クレヨン}」。',
            trapExplanation: '尾數{びすう}8觸發{しょうはつ}促音化{そくおんか}+半濁音化{はんだくおんか}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
            { text: 'じゅうくほん', isCorrect: false, reason: '使用{しよう}「きゅう」不是「く」。' },
            { text: 'じゅうきゅうほん', isCorrect: true, reason: '正確{せいかく}！有十九個{じゅうきゅうほん}氣球{ふうせん}。' },
            { text: 'じゅうきゅうぽん', isCorrect: false, reason: '19本{じゅうきゅうほん}無音變{むおんへん}。' },
            { text: 'とくほん', isCorrect: false, reason: '十九{じゅうきゅう}使用{しよう}音讀{おんどく}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「風船{ふうせん}が十九本{じゅうきゅうほん}」表示{ひょうじ}「十九個{じゅうきゅうほん}氣球{ふうせん}」。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}']
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
            { text: '1本(いっぽん)、3本(さんぼん)、6本(ろっぽん)', isCorrect: true, reason: '正確{せいかく}！這三個{みっつ}讀法{よみかた}都{すべて}正確{せいかく}。' },
            { text: '1本(いちほん)、3本(さんほん)、6本(ろくほん)', isCorrect: false, reason: '1/6需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}，3需要{じゅよう}濁音化{だくおんか}。' },
            { text: '1本(いっぽん)、3本(さんほん)、6本(ろっぽん)', isCorrect: false, reason: '3本{さんぼん}需要{じゅよう}濁音化{だくおんか}「さんぼん」。' },
            { text: '1本(いっぼん)、3本(さんぼん)、6本(ろっぼん)', isCorrect: false, reason: '1/6用{もちいる}半濁音{はんだくおん}「ぽ」不是濁音{だくおん}「ぼ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '1/6/8/10→促音{そくおん}+半濁音{はんだくおん}（っぽん），3/何{なん}→濁音{だくおん}（ぼん）。',
            trapExplanation: '這題測試{テスト}對「本{ほん}」所有{すべて}音變{おんへん}規則{きそく}的掌握{しょうあく}。',
            relatedRules: ['量詞{りょうし}「本{ほん}」の音變{おんへん}規則{きそく}']
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
            { text: 'ごぽん', isCorrect: false, reason: '5本{ごほん}無音變{むおんへん}。' },
            { text: 'ごほん', isCorrect: true, reason: '正確{せいかく}！五條{ごほん}魚{さかな}在游泳{およいでいます}。' },
            { text: 'いつほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「ご」。' },
            { text: 'ごひき', isCorrect: false, reason: '細長形{ほそながけい}的魚{さかな}可用{かのう}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '細長形{ほそながけい}的魚{さかな}可用{かのう}「本{ほん}」計數{けいすう}。', relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}'] },
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
            { text: 'いちほん', isCorrect: false, reason: '陷阱{かんけい}！1本{いっぽん}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'いっぽん', isCorrect: true, reason: '正確{せいかく}！一根{いっぽん}牛蒡{ごぼう}。' },
            { text: 'ひとほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「いち」。' },
            { text: 'いっぼん', isCorrect: false, reason: '1本{いっぽん}用{もちいる}半濁音{はんだくおん}「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ごぼうを一本{いっぽん}」。', trapExplanation: '1本{いっぽん}固定{こてい}促音化{そくおんか}+半濁音化{はんだくおんか}。', relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}'] },
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
            { text: 'にじゅうほん', isCorrect: false, reason: '20本{にじゅっぽん}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'にじゅっぽん', isCorrect: true, reason: '正確{せいかく}！二十瓶{にじゅっぽん}紅酒{ワイン}。' },
            { text: 'はたほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「にじゅう」。' },
            { text: 'にじゅうぼん', isCorrect: false, reason: '20本{にじゅっぽん}用{もちいる}半濁音{はんだくおん}「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '整十{じゅう}數觸發{しょうはつ}促音化{そくおんか}+半濁音化{はんだくおんか}。', relatedRules: ['量詞{りょうし}「本{ほん}」の音變{おんへん}規則{きそく}'] },
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
            { text: 'いちほん', isCorrect: false, reason: '陷阱{かんけい}！1本{いっぽん}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'いっぽん', isCorrect: true, reason: '正確{せいかく}！「一本{いっぽん}も打{う}てませんでした」表示{ひょうじ}「一個也沒打進」。' },
            { text: 'ひとほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「いち」。' },
            { text: 'いっぼん', isCorrect: false, reason: '1本{いっぽん}用{もちいる}半濁音{はんだくおん}「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「一本{いっぽん}も〜ない」表示{ひょうじ}「一個也沒有〜」。', trapExplanation: '1本{いっぽん}固定{こてい}促音化{そくおんか}+半濁音化{はんだくおんか}。', relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}'] },
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
            { text: 'しほん', isCorrect: false, reason: '使用{しよう}「よん」不用{もちいず}「し」。' },
            { text: 'よんほん', isCorrect: true, reason: '正確{せいかく}！需要{ひつよう}四根{よんほん}支柱{ポール}。' },
            { text: 'よんぼん', isCorrect: false, reason: '4本{よんほん}無音變{むおんへん}。' },
            { text: 'よっつ', isCorrect: false, reason: '支柱{ポール}用{もちいる}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ポールが四本{よんほん}」。', relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}'] },
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
            { text: 'さんじゅうほん', isCorrect: false, reason: '陷阱{かんけい}！整十{じゅう}數促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'さんじゅっぽん', isCorrect: true, reason: '正確{せいかく}！三十根{さんじゅっぽん}鐵管{てつパイプ}。' },
            { text: 'みそほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「さんじゅう」。' },
            { text: 'さんじゅうぼん', isCorrect: false, reason: '整十{じゅう}數用{もちいる}半濁音{はんだくおん}「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '整十{じゅう}數（10/20/30...）觸發{しょうはつ}促音化{そくおんか}+半濁音化{はんだくおんか}。', trapExplanation: '30本{さんじゅっぽん}同{おなじ}理{り}。', relatedRules: ['量詞{りょうし}「本{ほん}」の音變{おんへん}規則{きそく}'] },
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
            { text: 'しちぽん', isCorrect: false, reason: '7本{ななほん}無音變{むおんへん}。' },
            { text: 'ななほん', isCorrect: true, reason: '正確{せいかく}！七根{ななほん}電線桿{でんちゅう}。' },
            { text: 'なのほん', isCorrect: false, reason: '「なの」是日期{にっき}讀法{よみかた}。' },
            { text: 'ななぽん', isCorrect: false, reason: '7本{ななほん}保持{ほじ}「ほ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「電柱{でんちゅう}が七本{ななほん}」。', relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}'] },
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
            { text: 'くほん', isCorrect: false, reason: '使用{しよう}「きゅう」。' },
            { text: 'きゅうほん', isCorrect: true, reason: '正確{せいかく}！用了{つかいました}九球{きゅうほん}毛線{けいと}。' },
            { text: 'きゅうぽん', isCorrect: false, reason: '9本{きゅうほん}無音變{むおんへん}。' },
            { text: 'ここのほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「きゅう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「毛糸{けいと}を九本{きゅうほん}」。', relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}'] },
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
            { text: 'さんほん', isCorrect: false, reason: '陷阱{かんけい}！3本{さんぼん}濁音化{だくおんか}。' },
            { text: 'さんぼん', isCorrect: true, reason: '正確{せいかく}！打了{うちました}三支{さんぼん}全壘打{ホームラン}。' },
            { text: 'みっつ', isCorrect: false, reason: '全壘打{ホームラン}用{もちいる}「本{ほん}」。' },
            { text: 'さんぽん', isCorrect: false, reason: '3本{さんぼん}用{もちいる}濁音{だくおん}「ぼ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ホームランを三本{さんぼん}」。', trapExplanation: '3本{さんぼん}固定{こてい}濁音化{だくおんか}。', relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}'] },
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
            { text: 'ふたほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「に」。' },
            { text: 'にほん', isCorrect: true, reason: '正確{せいかく}！立{たてます}兩根{にほん}蠟燭{ろうそく}。' },
            { text: 'にぼん', isCorrect: false, reason: '2本{にほん}無音變{むおんへん}。' },
            { text: 'ふたつ', isCorrect: false, reason: '蠟燭{ろうそく}用{もちいる}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ろうそくを二本{にほん}」。', relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}'] },
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
            { text: 'ろくほん', isCorrect: false, reason: '陷阱{かんけい}！6本{ろっぽん}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'ろっぽん', isCorrect: true, reason: '正確{せいかく}！有六支{ろっぽん}口紅膠{スティックのり}。' },
            { text: 'むっつ', isCorrect: false, reason: '口紅膠{スティックのり}用{もちいる}「本{ほん}」。' },
            { text: 'ろくぼん', isCorrect: false, reason: '6本{ろっぽん}用{もちいる}半濁音{はんだくおん}「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「スティックのりを六本{ろっぽん}」。', trapExplanation: '6本{ろっぽん}固定{こてい}促音化{そくおんか}+半濁音化{はんだくおんか}。', relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}'] },
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
            { text: 'じゅういつほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「ご」。' },
            { text: 'じゅうごほん', isCorrect: true, reason: '正確{せいかく}！種了{うえました}十五個{じゅうごほん}球根{きゅうこん}。' },
            { text: 'じゅうごぽん', isCorrect: false, reason: '15本{じゅうごほん}無音變{むおんへん}。' },
            { text: 'とごほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「球根{きゅうこん}を十五本{じゅうごほん}」。', relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}'] },
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
            { text: 'はちほん', isCorrect: false, reason: '陷阱{かんけい}！8本{はっぽん}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'はっぽん', isCorrect: true, reason: '正確{せいかく}！立著{たっています}八根{はっぽん}天線{アンテナ}。' },
            { text: 'やっつ', isCorrect: false, reason: '天線{アンテナ}用{もちいる}「本{ほん}」。' },
            { text: 'はちぼん', isCorrect: false, reason: '8本{はっぽん}用{もちいる}半濁音{はんだくおん}「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「アンテナが八本{はっぽん}」。', trapExplanation: '8本{はっぽん}固定{こてい}促音化{そくおんか}+半濁音化{はんだくおんか}。', relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}'] },
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
            { text: 'しほん', isCorrect: false, reason: '使用{しよう}「よん」。' },
            { text: 'よんほん', isCorrect: true, reason: '正確{せいかく}！買{かいます}四支{よんほん}棒冰{アイスキャンディー}。' },
            { text: 'よんぼん', isCorrect: false, reason: '4本{よんほん}無音變{むおんへん}。' },
            { text: 'よっつ', isCorrect: false, reason: '棒冰{アイスキャンディー}用{もちいる}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「アイスキャンディーを四本{よんほん}」。', relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}'] },
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
            { text: 'じゅうほん', isCorrect: false, reason: '陷阱{かんけい}！10本{じゅっぽん}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'じゅっぽん', isCorrect: true, reason: '正確{せいかく}！拍了{さつえいしました}十支{じゅっぽん}廣告{CM}。' },
            { text: 'とおほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「じゅう」。' },
            { text: 'じゅうぼん', isCorrect: false, reason: '10本{じゅっぽん}用{もちいる}半濁音{はんだくおん}「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '廣告{CM}（影片{えいが}）用{もちいる}「本{ほん}」計數{けいすう}。', trapExplanation: '10本{じゅっぽん}固定{こてい}促音化{そくおんか}+半濁音化{はんだくおんか}。', relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}'] },
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
            { text: 'さんほん', isCorrect: false, reason: '陷阱{かんけい}！3本{さんぼん}濁音化{だくおんか}。' },
            { text: 'さんぼん', isCorrect: true, reason: '正確{せいかく}！發表{はっぴょう}了三篇{さんぼん}論文{ろんぶん}。' },
            { text: 'みっつ', isCorrect: false, reason: '論文{ろんぶん}可用{かのう}「本{ほん}」計數{けいすう}。' },
            { text: 'さんぽん', isCorrect: false, reason: '3本{さんぼん}用{もちいる}濁音{だくおん}「ぼ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '論文{ろんぶん}可用{かのう}「本{ほん}」計數{けいすう}。', trapExplanation: '3本{さんぼん}固定{こてい}濁音化{だくおんか}。', relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}'] },
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
            { text: 'しちぽん', isCorrect: false, reason: '7本{ななほん}無音變{むおんへん}。' },
            { text: 'ななほん', isCorrect: true, reason: '正確{せいかく}！需要{ひつよう}七條{ななほん}電線{ケーブル}。' },
            { text: 'なのほん', isCorrect: false, reason: '「なの」是日期{にっき}讀法{よみかた}。' },
            { text: 'ななつ', isCorrect: false, reason: '電線{ケーブル}用{もちいる}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ケーブルが七本{ななほん}」。', relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}'] },
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
            { text: 'ふたほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「に」。' },
            { text: 'にほん', isCorrect: true, reason: '正確{せいかく}！只有{だけ}兩根{にほん}骨頭{ほね}骨折{こっせつ}。' },
            { text: 'にぼん', isCorrect: false, reason: '2本{にほん}無音變{むおんへん}。' },
            { text: 'ふたつ', isCorrect: false, reason: '骨頭{ほね}用{もちいる}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「骨{ほね}が二本{にほん}」。', relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}'] },
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
            { text: 'ろくほん', isCorrect: false, reason: '陷阱{かんけい}！6本{ろっぽん}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'ろっぽん', isCorrect: true, reason: '正確{せいかく}！放入{いれました}了六顆{ろっぽん}電池{でんち}。' },
            { text: 'むっつ', isCorrect: false, reason: '圓筒形{えんとうがた}電池{でんち}用{もちいる}「本{ほん}」。' },
            { text: 'ろくぼん', isCorrect: false, reason: '6本{ろっぽん}用{もちいる}半濁音{はんだくおん}「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '圓筒形{えんとうがた}電池{でんち}用{もちいる}「本{ほん}」計數{けいすう}。', trapExplanation: '6本{ろっぽん}固定{こてい}促音化{そくおんか}+半濁音化{はんだくおんか}。', relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}'] },
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
            { text: 'いつほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「ご」。' },
            { text: 'ごほん', isCorrect: true, reason: '正確{せいかく}！用了{つかいました}五支{ごほん}棉花棒{めんぼう}。' },
            { text: 'ごぽん', isCorrect: false, reason: '5本{ごほん}無音變{むおんへん}。' },
            { text: 'いつつ', isCorrect: false, reason: '棉花棒{めんぼう}用{もちいる}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「綿棒{めんぼう}を五本{ごほん}」。', relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}'] },
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
            { text: 'はちほん', isCorrect: false, reason: '陷阱{かんけい}！8本{はっぽん}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'はっぽん', isCorrect: true, reason: '正確{せいかく}！看了{みました}八部{はっぽん}電視劇{ドラマ}。' },
            { text: 'やっつ', isCorrect: false, reason: '電視劇{ドラマ}用{もちいる}「本{ほん}」。' },
            { text: 'はちぼん', isCorrect: false, reason: '8本{はっぽん}用{もちいる}半濁音{はんだくおん}「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '電視劇{ドラマ}（影片{えいが}）用{もちいる}「本{ほん}」計數{けいすう}。', trapExplanation: '8本{はっぽん}固定{こてい}促音化{そくおんか}+半濁音化{はんだくおんか}。', relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}'] },
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
            { text: 'くほん', isCorrect: false, reason: '使用{しよう}「きゅう」。' },
            { text: 'きゅうほん', isCorrect: true, reason: '正確{せいかく}！打了{うちました}九支{きゅうほん}釘子{くぎ}。' },
            { text: 'きゅうぽん', isCorrect: false, reason: '9本{きゅうほん}無音變{むおんへん}。' },
            { text: 'ここのつ', isCorrect: false, reason: '釘子{くぎ}用{もちいる}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「釘{くぎ}を九本{きゅうほん}」。', relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}'] },
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
            { text: 'いちほん', isCorrect: false, reason: '陷阱{かんけい}！1本{いっぽん}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'いっぽん', isCorrect: true, reason: '正確{せいかく}！打了{うちました}一針{いっぽん}。' },
            { text: 'ひとつ', isCorrect: false, reason: '注射{ちゅうしゃ}用{もちいる}「本{ほん}」。' },
            { text: 'いっぼん', isCorrect: false, reason: '1本{いっぽん}用{もちいる}半濁音{はんだくおん}「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「注射{ちゅうしゃ}を一本{いっぽん}」。', trapExplanation: '1本{いっぽん}固定{こてい}促音化{そくおんか}+半濁音化{はんだくおんか}。', relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}'] },
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
            { text: 'じゅうふたほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「に」。' },
            { text: 'じゅうにほん', isCorrect: true, reason: '正確{せいかく}！有十二支{じゅうにほん}口紅{くちべに}。' },
            { text: 'じゅうにぼん', isCorrect: false, reason: '12本{じゅうにほん}無音變{むおんへん}。' },
            { text: 'とにほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「口紅{くちべに}を十二本{じゅうにほん}」。', relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}'] },
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
            { text: 'にじゅうさんほん', isCorrect: false, reason: '陷阱{かんけい}！尾數{びすう}3濁音化{だくおんか}。' },
            { text: 'にじゅうさんぼん', isCorrect: true, reason: '正確{せいかく}！排著{ならんでいます}二十三盞{にじゅうさんぼん}路燈{がいとう}。' },
            { text: 'にじゅうみっつ', isCorrect: false, reason: '路燈{がいとう}用{もちいる}「本{ほん}」。' },
            { text: 'にじゅうさんぽん', isCorrect: false, reason: '尾數{びすう}3用{もちいる}濁音{だくおん}「ぼ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '尾數{びすう}3觸發{しょうはつ}濁音化{だくおんか}。', trapExplanation: '23本{にじゅうさんぼん}同{おなじ}理{り}。', relatedRules: ['量詞{りょうし}「本{ほん}」の音變{おんへん}規則{きそく}'] },
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
            { text: 'しじゅうほん', isCorrect: false, reason: '使用{しよう}「よんじゅう」。' },
            { text: 'よんじゅっぽん', isCorrect: true, reason: '正確{せいかく}！收集了{あつめています}四十條{よんじゅっぽん}領帶{ネクタイ}。' },
            { text: 'よんじゅうほん', isCorrect: false, reason: '整十{じゅう}數促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'よんじゅうぼん', isCorrect: false, reason: '整十{じゅう}數用{もちいる}半濁音{はんだくおん}「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '整十{じゅう}數（40）觸發{しょうはつ}促音化{そくおんか}+半濁音化{はんだくおんか}。', relatedRules: ['量詞{りょうし}「本{ほん}」の音變{おんへん}規則{きそく}'] },
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
            { text: 'いつほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「ご」。' },
            { text: 'ごほん', isCorrect: true, reason: '正確{せいかく}！有五條{ごほん}公車{バス}路線{ろせん}。' },
            { text: 'ごぽん', isCorrect: false, reason: '5本{ごほん}無音變{むおんへん}。' },
            { text: 'いつつ', isCorrect: false, reason: '路線{ろせん}用{もちいる}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「バスの路線{ろせん}が五本{ごほん}」。', relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}'] },
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
            { text: 'ろくほん', isCorrect: false, reason: '陷阱{かんけい}！6本{ろっぽん}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'ろっぽん', isCorrect: true, reason: '正確{せいかく}！有六支{ろっぽん}滑雪板{スキーいた}。' },
            { text: 'むっつ', isCorrect: false, reason: '滑雪板{スキーいた}用{もちいる}「本{ほん}」。' },
            { text: 'ろくぼん', isCorrect: false, reason: '6本{ろっぽん}用{もちいる}半濁音{はんだくおん}「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「スキー板{いた}が六本{ろっぽん}」。', trapExplanation: '6本{ろっぽん}固定{こてい}促音化{そくおんか}+半濁音化{はんだくおんか}。', relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}'] },
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
            { text: 'はちぽん', isCorrect: false, reason: '8本{はっぽん}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'はっぽん', isCorrect: true, reason: '正確{せいかく}！桌上{テーブル}有八支{はっぽん}筷子{はし}。' },
            { text: 'はちほん', isCorrect: false, reason: '8本{はっぽん}需要{じゅよう}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'やっつ', isCorrect: false, reason: '筷子{はし}用{もちいる}「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「箸{はし}が八本{はっぽん}」。', relatedRules: ['量詞{りょうし}「本{ほん}」の使用{しよう}'] },
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
            { text: 'ひゃくほん', isCorrect: false, reason: '陷阱{かんけい}！100本{ひゃっぽん}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'ひゃっぽん', isCorrect: true, reason: '正確{せいかく}！有一百支{ひゃっぽん}筆{ペン}。' },
            { text: 'ももほん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「ひゃく」。' },
            { text: 'ひゃくぼん', isCorrect: false, reason: '100本{ひゃっぽん}用{もちいる}半濁音{はんだくおん}「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '百{ひゃく}的「く」促音化{そくおんか}為「っ」。', trapExplanation: '100本{ひゃっぽん}同{おなじ}1/6/8/10的規則{きそく}。', relatedRules: ['量詞{りょうし}「本{ほん}」の音變{おんへん}規則{きそく}'] },
        sourceItem: { value: 100, kanji: '百本', reading: 'ひゃっぽん' }
    }
];
