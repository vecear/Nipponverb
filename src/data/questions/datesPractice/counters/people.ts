import { DatesPracticeQuestion } from '../types';

// 人數量詞練習題 (〜人)
// 每個重要數字3題：發音題、單句敘述題、對話題
// 特別注意：1人、2人使用訓讀，4人使用「よ」

export const peopleCounterQuestions: DatesPracticeQuestion[] = [
    // ===== 1人 的三題（特殊訓讀：ひとり） =====
    {
        id: 'people_1_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: true,
        stem: '「一人」的正確讀音是？',
        stem_zh: '「一人」的正確讀音是？',
        options: [
            { text: 'ひとり', isCorrect: true, reason: '正確{せいかく}！「一人{ひとり}」讀作{どくさ}「ひとり」，使用{しよう}訓讀{くんどく}。' },
            { text: 'いちにん', isCorrect: false, reason: '陷阱{かんけい}！一人{ひとり}使用{しよう}訓讀{くんどく}「ひとり」，不是音讀{おんどく}「いちにん」。' },
            { text: 'いちじん', isCorrect: false, reason: '「じん」是「〜人{じん}」（人種{じんしゅ}/國籍{こくせき}）の讀法{よみかた}，不是人數{にんずう}。' },
            { text: 'ひとにん', isCorrect: false, reason: '不能{ふのう}混合{こんごう}訓讀{くんどく}與音讀{おんどく}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一人{ひとり}」讀作{どくさ}「ひとり」，使用{しよう}訓讀{くんどく}。人數{にんずう}量詞{りょうし}「人{にん}」在1人{ひとり}和2人{ふたり}使用{しよう}訓讀{くんどく}系統{けいとう}。',
            trapExplanation: '這是陷阱題{かんけいだい}。雖然{すいぜん}其他{たの}人數{にんずう}使用{しよう}音讀{おんどく}「にん」，但1人{ひとり}固定{こてい}使用{しよう}訓讀{くんどく}「ひとり」。',
            relatedRules: ['人數{にんずう}の訓讀{くんどく}規則{きそく}', '1人{ひとり}、2人{ふたり}の特殊{とくしゅ}讀法{よみかた}']
        },
        sourceItem: { value: 1, kanji: '一人', reading: 'ひとり' }
    },
    {
        id: 'people_1_sent',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: true,
        stem: '私は＿＿で旅行します。',
        stem_zh: '我一個人旅行。',
        options: [
            { text: 'いちにん', isCorrect: false, reason: '陷阱{かんけい}！一人{ひとり}使用{しよう}訓讀{くんどく}「ひとり」。' },
            { text: 'ひとり', isCorrect: true, reason: '正確{せいかく}！「ひとりで」表示{ひょうじ}「一個人{ひとり}」做某事{なにか}。' },
            { text: 'いちじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'ひとにん', isCorrect: false, reason: '不混合{ふこんごう}訓讀{くんどく}與音讀{おんどく}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ひとりで」表示{ひょうじ}「一個人{ひとり}」做某事{なにか}，是常用{じょうよう}表達{ひょうたつ}。',
            trapExplanation: '一人{ひとり}固定{こてい}讀む{よむ}「ひとり」，這是需要{じゅよう}特別{とくべつ}記憶{きおく}の訓讀{くんどく}。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '「〜で」の使用{しよう}']
        },
        sourceItem: { value: 1, kanji: '一人', reading: 'ひとり' }
    },
    {
        id: 'people_1_dial',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '何人ですか？',
        stem_zh: '有幾個人？',
        dialogue: {
            speakerA: '今日の予約は何人ですか？',
            speakerB: '＿＿です。（一個人）'
        },
        options: [
            { text: 'いちにん', isCorrect: false, reason: '一人{ひとり}使用{しよう}訓讀{くんどく}。' },
            { text: 'ひとり', isCorrect: true, reason: '正確{せいかく}！預約{よやく}是一個人{ひとり}。' },
            { text: 'いちじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'ひとにん', isCorrect: false, reason: '不混合{ふこんごう}訓讀{くんどく}與音讀{おんどく}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '回答{かいとう}「何人{なんにん}」時{とき}，一人{ひとり}讀作{どくさ}「ひとり」。',
            relatedRules: ['人數{にんずう}の質問{しつもん}與回答{かいとう}', '「何人{なんにん}」の使用{しよう}']
        },
        sourceItem: { value: 1, kanji: '一人', reading: 'ひとり' }
    },

    // ===== 2人 的三題（特殊訓讀：ふたり） =====
    {
        id: 'people_2_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: true,
        stem: '「二人」的正確讀音是？',
        stem_zh: '「二人」的正確讀音是？',
        options: [
            { text: 'ふたり', isCorrect: true, reason: '正確{せいかく}！「二人{ふたり}」讀作{どくさ}「ふたり」，使用{しよう}訓讀{くんどく}。' },
            { text: 'ににん', isCorrect: false, reason: '陷阱{かんけい}！二人{ふたり}使用{しよう}訓讀{くんどく}「ふたり」，不是音讀{おんどく}「ににん」。' },
            { text: 'にじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'ふたにん', isCorrect: false, reason: '不能{ふのう}混合{こんごう}訓讀{くんどく}與音讀{おんどく}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二人{ふたり}」讀作{どくさ}「ふたり」，使用{しよう}訓讀{くんどく}。與一人{ひとり}一樣{いちよう}，是特殊{とくしゅ}讀法{よみかた}。',
            trapExplanation: '這是陷阱題{かんけいだい}。二人{ふたり}固定{こてい}使用{しよう}訓讀{くんどく}「ふたり」，從{から}三人{さんにん}開始{はじめ}才{はじめて}使用{しよう}音讀{おんどく}「にん」。',
            relatedRules: ['人數{にんずう}の訓讀{くんどく}規則{きそく}', '訓讀{くんどく}與音讀{おんどく}の切換{きりかえ}']
        },
        sourceItem: { value: 2, kanji: '二人', reading: 'ふたり' }
    },
    {
        id: 'people_2_sent',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: true,
        stem: '私たちは＿＿で行きます。',
        stem_zh: '我們兩個人去。',
        options: [
            { text: 'ににん', isCorrect: false, reason: '陷阱{かんけい}！二人{ふたり}使用{しよう}訓讀{くんどく}「ふたり」。' },
            { text: 'ふたり', isCorrect: true, reason: '正確{せいかく}！「ふたりで」表示{ひょうじ}「兩個人{ふたり}」一起{いっしょ}做某事{なにか}。' },
            { text: 'にじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'ふたにん', isCorrect: false, reason: '不混合{ふこんごう}訓讀{くんどく}與音讀{おんどく}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ふたりで」表示{ひょうじ}「兩個人{ふたり}」一起{いっしょ}做某事{なにか}。',
            trapExplanation: '二人{ふたり}固定{こてい}讀む{よむ}「ふたり」，這是需要{じゅよう}特別{とくべつ}記憶{きおく}の訓讀{くんどく}。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '「〜で」の使用{しよう}']
        },
        sourceItem: { value: 2, kanji: '二人', reading: 'ふたり' }
    },
    {
        id: 'people_2_dial',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '何人家族ですか？',
        stem_zh: '你家有幾個人？',
        dialogue: {
            speakerA: '何人家族ですか？',
            speakerB: '＿＿です。（兩個人）'
        },
        options: [
            { text: 'ににん', isCorrect: false, reason: '二人{ふたり}使用{しよう}訓讀{くんどく}。' },
            { text: 'ふたり', isCorrect: true, reason: '正確{せいかく}！家庭{かぞく}有兩個人{ふたり}。' },
            { text: 'にじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'ふたにん', isCorrect: false, reason: '不混合{ふこんごう}訓讀{くんどく}與音讀{おんどく}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ふたり」回答{かいとう}家庭{かぞく}人數{にんずう}。',
            relatedRules: ['人數{にんずう}の質問{しつもん}與回答{かいとう}', '家庭{かぞく}表達{ひょうたつ}']
        },
        sourceItem: { value: 2, kanji: '二人', reading: 'ふたり' }
    },

    // ===== 3人 的三題（音讀開始：さんにん） =====
    {
        id: 'people_3_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「三人」的正確讀音是？',
        stem_zh: '「三人」的正確讀音是？',
        options: [
            { text: 'さんにん', isCorrect: true, reason: '正確{せいかく}！「三人{さんにん}」讀作{どくさ}「さんにん」，從{から}三人{さんにん}開始{はじめ}使用{しよう}音讀{おんどく}。' },
            { text: 'みたり', isCorrect: false, reason: '「みたり」是古語{こご}，現代{げんだい}日語{にほんご}使用{しよう}「さんにん」。' },
            { text: 'さんじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}量詞{りょうし}。' },
            { text: 'みにん', isCorrect: false, reason: '不混合{ふこんごう}訓讀{くんどく}與音讀{おんどく}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三人{さんにん}」讀作{どくさ}「さんにん」。從{から}三人{さんにん}開始{はじめ}，人數{にんずう}量詞{りょうし}切換{きりかえ}為{に}音讀{おんどく}「〜にん」。',
            relatedRules: ['人數{にんずう}の音讀{おんどく}規則{きそく}', '訓讀{くんどく}→音讀{おんどく}の切換點{きりかえてん}']
        },
        sourceItem: { value: 3, kanji: '三人', reading: 'さんにん' }
    },
    {
        id: 'people_3_sent',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿で話し合いました。',
        stem_zh: '三個人討論了。',
        options: [
            { text: 'みたり', isCorrect: false, reason: '現代{げんだい}日語{にほんご}使用{しよう}「さんにん」。' },
            { text: 'さんにん', isCorrect: true, reason: '正確{せいかく}！三個人{さんにん}一起{いっしょ}討論{はなしあいました}。' },
            { text: 'さんじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'みにん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「さんにん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三人{さんにん}で」表示{ひょうじ}「三個人{さんにん}」一起{いっしょ}做某事{なにか}。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '「〜で」の使用{しよう}']
        },
        sourceItem: { value: 3, kanji: '三人', reading: 'さんにん' }
    },
    {
        id: 'people_3_dial',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '何人で行きますか？',
        stem_zh: '幾個人去？',
        dialogue: {
            speakerA: '旅行は何人で行きますか？',
            speakerB: '＿＿で行きます。（三個人）'
        },
        options: [
            { text: 'みたり', isCorrect: false, reason: '現代{げんだい}使用{しよう}「さんにん」。' },
            { text: 'さんにん', isCorrect: true, reason: '正確{せいかく}！三個人{さんにん}一起{いっしょ}去旅行{りょこう}。' },
            { text: 'さんじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'みっにん', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三人{さんにん}で行{い}きます」表示{ひょうじ}「三個人{さんにん}去」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '旅行{りょこう}計畫{けいかく}表達{ひょうたつ}']
        },
        sourceItem: { value: 3, kanji: '三人', reading: 'さんにん' }
    },

    // ===== 4人 的三題（特殊讀法：よにん） =====
    {
        id: 'people_4_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: true,
        stem: '「四人」的正確讀音是？',
        stem_zh: '「四人」的正確讀音是？',
        options: [
            { text: 'よにん', isCorrect: true, reason: '正確{せいかく}！「四人{よにん}」讀作{どくさ}「よにん」，使用{しよう}「よ」。' },
            { text: 'よんにん', isCorrect: false, reason: '陷阱{かんけい}！四人{よにん}使用{しよう}「よ」不是「よん」。' },
            { text: 'しにん', isCorrect: false, reason: '陷阱{かんけい}！「しにん」聽起來{きこえ}像「死人{しにん}」，禁止{きんし}使用{しよう}。' },
            { text: 'よったり', isCorrect: false, reason: '「よったり」是古語{こご}，現代{げんだい}使用{しよう}「よにん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四人{よにん}」讀作{どくさ}「よにん」，使用{しよう}「よ」不是「よん」或「し」。',
            trapExplanation: '這是陷阱題{かんけいだい}。「しにん」聽起來{きこえ}像「死人{しにん}」（屍體{したい}），是禁忌{きんき}讀法{よみかた}。「よんにん」也不常用{ふつうよう}。',
            relatedRules: ['四人{よにん}の特殊{とくしゅ}讀法{よみかた}', '避諱{いひき}規則{きそく}']
        },
        sourceItem: { value: 4, kanji: '四人', reading: 'よにん' }
    },
    {
        id: 'people_4_sent',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: true,
        stem: '家族は＿＿です。',
        stem_zh: '家裡有四個人。',
        options: [
            { text: 'よんにん', isCorrect: false, reason: '陷阱{かんけい}！四人{よにん}使用{しよう}「よ」不是「よん」。' },
            { text: 'よにん', isCorrect: true, reason: '正確{せいかく}！家庭{かぞく}有四個人{よにん}。' },
            { text: 'しにん', isCorrect: false, reason: '「しにん」是禁忌{きんき}讀法{よみかた}。' },
            { text: 'よったり', isCorrect: false, reason: '現代{げんだい}使用{しよう}「よにん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「家族{かぞく}は四人{よにん}です」表示{ひょうじ}「家庭{かぞく}有四個人{よにん}」。',
            trapExplanation: '四人{よにん}固定{こてい}讀む{よむ}「よにん」，避免{さける}「しにん」（死人{しにん}）の禁忌{きんき}。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '家庭{かぞく}表達{ひょうたつ}']
        },
        sourceItem: { value: 4, kanji: '四人', reading: 'よにん' }
    },
    {
        id: 'people_4_dial',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '予約は何人ですか？',
        stem_zh: '預約幾位？',
        dialogue: {
            speakerA: '何名様ですか？',
            speakerB: '＿＿です。（四位）'
        },
        options: [
            { text: 'よんにん', isCorrect: false, reason: '四人{よにん}使用{しよう}「よ」。' },
            { text: 'よにん', isCorrect: true, reason: '正確{せいかく}！預約{よやく}四位{よにん}。' },
            { text: 'しにん', isCorrect: false, reason: '「しにん」是禁忌{きんき}讀法{よみかた}。' },
            { text: 'よったり', isCorrect: false, reason: '現代{げんだい}使用{しよう}「よにん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「四人{よにん}」回答{かいとう}預約{よやく}人數{にんずう}。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '餐廳{れすとらん}預約{よやく}']
        },
        sourceItem: { value: 4, kanji: '四人', reading: 'よにん' }
    },

    // ===== 5人 的三題 =====
    {
        id: 'people_5_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「五人」的正確讀音是？',
        stem_zh: '「五人」的正確讀音是？',
        options: [
            { text: 'ごにん', isCorrect: true, reason: '正確{せいかく}！「五人{ごにん}」讀作{どくさ}「ごにん」。' },
            { text: 'いつにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「ご」不是訓讀{くんどく}「いつ」。' },
            { text: 'ごじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}量詞{りょうし}。' },
            { text: 'こにん', isCorrect: false, reason: '需要{じゅよう}濁音{だくおん}「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五人{ごにん}」讀作{どくさ}「ごにん」，使用{しよう}音讀{おんどく}。',
            relatedRules: ['人數{にんずう}の音讀{おんどく}規則{きそく}', '「ご」の讀法{よみかた}']
        },
        sourceItem: { value: 5, kanji: '五人', reading: 'ごにん' }
    },
    {
        id: 'people_5_sent',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: 'チームは＿＿です。',
        stem_zh: '團隊有五個人。',
        options: [
            { text: 'いつにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「ご」。' },
            { text: 'ごにん', isCorrect: true, reason: '正確{せいかく}！團隊{チーム}有五個人{ごにん}。' },
            { text: 'ごじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'いつたり', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「チームは五人{ごにん}です」表示{ひょうじ}「團隊{チーム}有五個人{ごにん}」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '團隊{チーム}表達{ひょうたつ}']
        },
        sourceItem: { value: 5, kanji: '五人', reading: 'ごにん' }
    },
    {
        id: 'people_5_dial',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '会議には何人来ますか？',
        stem_zh: '會議來幾個人？',
        dialogue: {
            speakerA: '会議には何人来ますか？',
            speakerB: '＿＿来ます。（五個人）'
        },
        options: [
            { text: 'いつにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「ご」。' },
            { text: 'ごにん', isCorrect: true, reason: '正確{せいかく}！五個人{ごにん}來{きます}會議{かいぎ}。' },
            { text: 'ごじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'こにん', isCorrect: false, reason: '需要{じゅよう}濁音{だくおん}「ご」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「五人{ごにん}来{き}ます」表示{ひょうじ}「五個人{ごにん}來」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '會議{かいぎ}出席{しゅっせき}']
        },
        sourceItem: { value: 5, kanji: '五人', reading: 'ごにん' }
    },

    // ===== 7人 的三題（しちにん/ななにん） =====
    {
        id: 'people_7_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「七人」的正確讀音是？',
        stem_zh: '「七人」的正確讀音是？',
        options: [
            { text: 'しちにん / ななにん', isCorrect: true, reason: '正確{せいかく}！「七人{しちにん}」可讀作{どくさ}「しちにん」或「ななにん」，兩者{りょうしゃ}都{すべて}正確{せいかく}。' },
            { text: 'なのにん', isCorrect: false, reason: '「なの」是日期{にっき}七日{なのか}的讀法{よみかた}。' },
            { text: 'しちじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}量詞{りょうし}。' },
            { text: 'ななたり', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七人{しちにん}」可讀作{どくさ}「しちにん」或「ななにん」，兩種{ふたしゅ}讀法{よみかた}都{すべて}正確{せいかく}。',
            relatedRules: ['七人{しちにん}の雙重{そうじゅう}讀法{よみかた}', '「しち」vs「なな」']
        },
        sourceItem: { value: 7, kanji: '七人', reading: 'しちにん / ななにん' }
    },
    {
        id: 'people_7_sent',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '七人の侍は有名な映画です。',
        stem_zh: '《七武士》是著名電影。',
        options: [
            { text: 'なのにん', isCorrect: false, reason: '「なの」是日期{にっき}讀法{よみかた}。' },
            { text: 'しちにん', isCorrect: true, reason: '正確{せいかく}！「七人{しちにん}の侍{さむらい}」是黑澤明{くろさわあきら}的著名{ゆうめい}電影{えいが}。' },
            { text: 'しちじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'ななたり', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「七人{しちにん}の侍{さむらい}」是黑澤明{くろさわあきら}的經典{けいてん}電影{えいが}。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '日本{にほん}電影{えいが}']
        },
        sourceItem: { value: 7, kanji: '七人', reading: 'しちにん / ななにん' }
    },
    {
        id: 'people_7_dial',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: 'グループは何人ですか？',
        stem_zh: '小組有幾個人？',
        dialogue: {
            speakerA: 'グループは何人ですか？',
            speakerB: '＿＿です。（七個人）'
        },
        options: [
            { text: 'なのにん', isCorrect: false, reason: '「なの」是日期{にっき}讀法{よみかた}。' },
            { text: 'ななにん', isCorrect: true, reason: '正確{せいかく}！小組{グループ}有七個人{ななにん}。' },
            { text: 'しちじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'ななたり', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「七人{ななにん}」回答{かいとう}小組{グループ}人數{にんずう}。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '團隊{チーム}表達{ひょうたつ}']
        },
        sourceItem: { value: 7, kanji: '七人', reading: 'しちにん / ななにん' }
    },

    // ===== 6人 的三題 =====
    {
        id: 'people_6_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「六人」的正確讀音是？',
        stem_zh: '「六人」的正確讀音是？',
        options: [
            { text: 'ろくにん', isCorrect: true, reason: '正確{せいかく}！「六人{ろくにん}」讀作{どくさ}「ろくにん」。' },
            { text: 'むにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「ろく」不是訓讀{くんどく}「む」。' },
            { text: 'ろくじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}量詞{りょうし}。' },
            { text: 'ろっにん', isCorrect: false, reason: '六人{ろくにん}不促音化{ふそくおんか}，是「ろくにん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六人{ろくにん}」讀作{どくさ}「ろくにん」，使用{しよう}音讀{おんどく}。',
            relatedRules: ['人數{にんずう}の音讀{おんどく}規則{きそく}', '「ろく」の讀法{よみかた}']
        },
        sourceItem: { value: 6, kanji: '六人', reading: 'ろくにん' }
    },
    {
        id: 'people_6_sent',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '部屋には＿＿泊まれます。',
        stem_zh: '房間可以住六個人。',
        options: [
            { text: 'むにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「ろく」。' },
            { text: 'ろくにん', isCorrect: true, reason: '正確{せいかく}！房間{へや}可以{できます}住{とまれます}六個人{ろくにん}。' },
            { text: 'ろくじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'ろっにん', isCorrect: false, reason: '六人{ろくにん}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「六人{ろくにん}泊{と}まれます」表示{ひょうじ}「可以{できます}住{とまる}六個人{ろくにん}」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '住宿{しゅくはく}表達{ひょうたつ}']
        },
        sourceItem: { value: 6, kanji: '六人', reading: 'ろくにん' }
    },
    {
        id: 'people_6_dial',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '何人でバーベキューしますか？',
        stem_zh: '幾個人烤肉？',
        dialogue: {
            speakerA: '週末のバーベキューは何人ですか？',
            speakerB: '＿＿です。（六個人）'
        },
        options: [
            { text: 'むにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「ろく」。' },
            { text: 'ろくにん', isCorrect: true, reason: '正確{せいかく}！六個人{ろくにん}一起{いっしょ}烤肉{バーベキュー}。' },
            { text: 'ろくじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'ろったり', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「六人{ろくにん}」回答{かいとう}活動{かつどう}人數{にんずう}。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '活動{かつどう}計畫{けいかく}']
        },
        sourceItem: { value: 6, kanji: '六人', reading: 'ろくにん' }
    },

    // ===== 8人 的三題 =====
    {
        id: 'people_8_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「八人」的正確讀音是？',
        stem_zh: '「八人」的正確讀音是？',
        options: [
            { text: 'はちにん', isCorrect: true, reason: '正確{せいかく}！「八人{はちにん}」讀作{どくさ}「はちにん」。' },
            { text: 'やにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「はち」不是訓讀{くんどく}「や」。' },
            { text: 'はちじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}量詞{りょうし}。' },
            { text: 'はっにん', isCorrect: false, reason: '八人{はちにん}不促音化{ふそくおんか}，是「はちにん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八人{はちにん}」讀作{どくさ}「はちにん」，使用{しよう}音讀{おんどく}。',
            relatedRules: ['人數{にんずう}の音讀{おんどく}規則{きそく}', '「はち」の讀法{よみかた}']
        },
        sourceItem: { value: 8, kanji: '八人', reading: 'はちにん' }
    },
    {
        id: 'people_8_sent',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: 'サッカーチームは＿＿足りません。',
        stem_zh: '足球隊還差八個人。',
        options: [
            { text: 'やにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「はち」。' },
            { text: 'はちにん', isCorrect: true, reason: '正確{せいかく}！還差{たりません}八個人{はちにん}。' },
            { text: 'はちじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'はっにん', isCorrect: false, reason: '八人{はちにん}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八人{はちにん}足{た}りません」表示{ひょうじ}「還差{たりない}八個人{はちにん}」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '不足{ふそく}表達{ひょうたつ}']
        },
        sourceItem: { value: 8, kanji: '八人', reading: 'はちにん' }
    },
    {
        id: 'people_8_dial',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '何人乗れますか？',
        stem_zh: '可以坐幾個人？',
        dialogue: {
            speakerA: 'この車は何人乗れますか？',
            speakerB: '＿＿乗れます。（八個人）'
        },
        options: [
            { text: 'やにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「はち」。' },
            { text: 'はちにん', isCorrect: true, reason: '正確{せいかく}！車{くるま}可以{できます}坐{のれます}八個人{はちにん}。' },
            { text: 'はちじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'やったり', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八人{はちにん}乗{の}れます」表示{ひょうじ}「可以{できます}坐{のる}八個人{はちにん}」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '乘車{じょうしゃ}表達{ひょうたつ}']
        },
        sourceItem: { value: 8, kanji: '八人', reading: 'はちにん' }
    },

    // ===== 9人 的三題 =====
    {
        id: 'people_9_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「九人」的正確讀音是？',
        stem_zh: '「九人」的正確讀音是？',
        options: [
            { text: 'きゅうにん', isCorrect: true, reason: '正確{せいかく}！「九人{きゅうにん}」讀作{どくさ}「きゅうにん」。' },
            { text: 'くにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}「きゅう」不是「く」。' },
            { text: 'きゅうじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}量詞{りょうし}。' },
            { text: 'ここのにん', isCorrect: false, reason: '「ここの」是訓讀{くんどく}，人數{にんずう}使用{しよう}音讀{おんどく}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九人{きゅうにん}」讀作{どくさ}「きゅうにん」，使用{しよう}音讀{おんどく}。',
            relatedRules: ['人數{にんずう}の音讀{おんどく}規則{きそく}', '「きゅう」の讀法{よみかた}']
        },
        sourceItem: { value: 9, kanji: '九人', reading: 'きゅうにん' }
    },
    {
        id: 'people_9_sent',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '野球チームは＿＿必要です。',
        stem_zh: '棒球隊需要九個人。',
        options: [
            { text: 'くにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}「きゅう」不是「く」。' },
            { text: 'きゅうにん', isCorrect: true, reason: '正確{せいかく}！棒球隊{やきゅうチーム}需要{ひつよう}九個人{きゅうにん}。' },
            { text: 'きゅうじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'ここのにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「きゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「九人{きゅうにん}必要{ひつよう}です」表示{ひょうじ}「需要{ひつよう}九個人{きゅうにん}」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '運動{うんどう}團隊{チーム}']
        },
        sourceItem: { value: 9, kanji: '九人', reading: 'きゅうにん' }
    },
    {
        id: 'people_9_dial',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '今日は何人出席しましたか？',
        stem_zh: '今天有幾個人出席？',
        dialogue: {
            speakerA: '今日の授業は何人出席しましたか？',
            speakerB: '＿＿出席しました。（九個人）'
        },
        options: [
            { text: 'くにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}「きゅう」不是「く」。' },
            { text: 'きゅうにん', isCorrect: true, reason: '正確{せいかく}！九個人{きゅうにん}出席{しゅっせき}了。' },
            { text: 'きゅうじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'ここのたり', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「九人{きゅうにん}出席{しゅっせき}しました」表示{ひょうじ}「九個人{きゅうにん}出席{しゅっせき}了」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '出席{しゅっせき}表達{ひょうたつ}']
        },
        sourceItem: { value: 9, kanji: '九人', reading: 'きゅうにん' }
    },

    // ===== 10人 的三題 =====
    {
        id: 'people_10_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十人」的正確讀音是？',
        stem_zh: '「十人」的正確讀音是？',
        options: [
            { text: 'じゅうにん', isCorrect: true, reason: '正確{せいかく}！「十人{じゅうにん}」讀作{どくさ}「じゅうにん」。' },
            { text: 'とおにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「じゅう」不是訓讀{くんどく}「とお」。' },
            { text: 'じゅうじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}量詞{りょうし}。' },
            { text: 'じゅっにん', isCorrect: false, reason: '十人{じゅうにん}不促音化{ふそくおんか}，是「じゅうにん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十人{じゅうにん}」讀作{どくさ}「じゅうにん」，使用{しよう}音讀{おんどく}。',
            relatedRules: ['人數{にんずう}の音讀{おんどく}規則{きそく}', '「じゅう」の讀法{よみかた}']
        },
        sourceItem: { value: 10, kanji: '十人', reading: 'じゅうにん' }
    },
    {
        id: 'people_10_sent',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: 'クラスは＿＿です。',
        stem_zh: '班級有十個人。',
        options: [
            { text: 'とおにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「じゅう」。' },
            { text: 'じゅうにん', isCorrect: true, reason: '正確{せいかく}！班級{クラス}有十個人{じゅうにん}。' },
            { text: 'じゅうじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'じゅっにん', isCorrect: false, reason: '十人{じゅうにん}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「クラスは十人{じゅうにん}です」表示{ひょうじ}「班級{クラス}有十個人{じゅうにん}」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '班級{クラス}表達{ひょうたつ}']
        },
        sourceItem: { value: 10, kanji: '十人', reading: 'じゅうにん' }
    },
    {
        id: 'people_10_dial',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '何人参加しますか？',
        stem_zh: '有幾個人參加？',
        dialogue: {
            speakerA: '何人参加しますか？',
            speakerB: '約＿＿です。（十個人）'
        },
        options: [
            { text: 'とおにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「じゅう」。' },
            { text: 'じゅうにん', isCorrect: true, reason: '正確{せいかく}！約{やく}十個人{じゅうにん}參加{さんか}。' },
            { text: 'じゅうじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'じゅっにん', isCorrect: false, reason: '十人{じゅうにん}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「約{やく}十人{じゅうにん}」表示{ひょうじ}「約{やく}十個人{じゅうにん}」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '參加{さんか}人數{にんずう}']
        },
        sourceItem: { value: 10, kanji: '十人', reading: 'じゅうにん' }
    },

    // ===== 11人～15人 =====
    {
        id: 'people_11_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十一人」的正確讀音是？',
        stem_zh: '「十一人」的正確讀音是？',
        options: [
            { text: 'じゅういちにん', isCorrect: true, reason: '正確{せいかく}！「十一人{じゅういちにん}」讀作{どくさ}「じゅういちにん」。' },
            { text: 'じゅうひとり', isCorrect: false, reason: '11以上{いじょう}全部{ぜんぶ}使用{しよう}音讀{おんどく}「にん」。' },
            { text: 'といちにん', isCorrect: false, reason: '十使用{しよう}音讀{おんどく}「じゅう」。' },
            { text: 'じゅういちじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十一人{じゅういちにん}」讀作{どくさ}「じゅういちにん」。11人{じゅういちにん}以上{いじょう}全部{ぜんぶ}使用{しよう}音讀{おんどく}。',
            relatedRules: ['人數{にんずう}の音讀{おんどく}規則{きそく}', '十一{じゅういち}以上{いじょう}']
        },
        sourceItem: { value: 11, kanji: '十一人', reading: 'じゅういちにん' }
    },
    {
        id: 'people_11_sent',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: 'サッカーチームは＿＿で試合をします。',
        stem_zh: '足球隊十一個人比賽。',
        options: [
            { text: 'じゅうひとり', isCorrect: false, reason: '11以上{いじょう}使用{しよう}音讀{おんどく}。' },
            { text: 'じゅういちにん', isCorrect: true, reason: '正確{せいかく}！足球隊{サッカーチーム}十一個人{じゅういちにん}比賽{しあい}。' },
            { text: 'といちにん', isCorrect: false, reason: '十使用{しよう}「じゅう」。' },
            { text: 'じゅういちじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '足球{サッカー}一隊{いちチーム}需要{ひつよう}十一人{じゅういちにん}。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '運動{うんどう}團隊{チーム}']
        },
        sourceItem: { value: 11, kanji: '十一人', reading: 'じゅういちにん' }
    },
    {
        id: 'people_12_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十二人」的正確讀音是？',
        stem_zh: '「十二人」的正確讀音是？',
        options: [
            { text: 'じゅうににん', isCorrect: true, reason: '正確{せいかく}！「十二人{じゅうににん}」讀作{どくさ}「じゅうににん」。' },
            { text: 'じゅうふたり', isCorrect: false, reason: '11以上{いじょう}全部{ぜんぶ}使用{しよう}音讀{おんどく}「にん」。' },
            { text: 'とにににん', isCorrect: false, reason: '十使用{しよう}音讀{おんどく}「じゅう」。' },
            { text: 'じゅうにじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十二人{じゅうににん}」讀作{どくさ}「じゅうににん」。',
            relatedRules: ['人數{にんずう}の音讀{おんどく}規則{きそく}', '十二{じゅうに}']
        },
        sourceItem: { value: 12, kanji: '十二人', reading: 'じゅうににん' }
    },
    {
        id: 'people_12_sent',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '陪審員は＿＿です。',
        stem_zh: '陪審員有十二個人。',
        options: [
            { text: 'じゅうふたり', isCorrect: false, reason: '11以上{いじょう}使用{しよう}音讀{おんどく}。' },
            { text: 'じゅうににん', isCorrect: true, reason: '正確{せいかく}！陪審員{ばいしんいん}有十二個人{じゅうににん}。' },
            { text: 'とににん', isCorrect: false, reason: '十使用{しよう}「じゅう」。' },
            { text: 'じゅうにじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '美國{アメリカ}陪審員{ばいしんいん}通常{つうじょう}十二人{じゅうににん}。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '制度{せいど}用語{ようご}']
        },
        sourceItem: { value: 12, kanji: '十二人', reading: 'じゅうににん' }
    },
    {
        id: 'people_14_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十四人」的正確讀音是？',
        stem_zh: '「十四人」的正確讀音是？',
        options: [
            { text: 'じゅうよにん', isCorrect: true, reason: '正確{せいかく}！「十四人{じゅうよにん}」讀作{どくさ}「じゅうよにん」，四{よ}使用{しよう}「よ」。' },
            { text: 'じゅうしにん', isCorrect: false, reason: '陷阱{かんけい}！「しにん」聽起來{きこえ}像「死人{しにん}」，避免{さける}使用{しよう}。' },
            { text: 'じゅうよんにん', isCorrect: false, reason: '十四人{じゅうよにん}使用{しよう}「よ」不是「よん」。' },
            { text: 'じゅうよじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十四人{じゅうよにん}」讀作{どくさ}「じゅうよにん」，與四人{よにん}一樣{いちよう}使用{しよう}「よ」。',
            trapExplanation: '避免{さける}「しにん」的禁忌{きんき}讀法{よみかた}。',
            relatedRules: ['四人{よにん}の特殊{とくしゅ}讀法{よみかた}', '避諱{いひき}規則{きそく}']
        },
        sourceItem: { value: 14, kanji: '十四人', reading: 'じゅうよにん' }
    },
    {
        id: 'people_14_sent',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: true,
        stem: '参加者は＿＿でした。',
        stem_zh: '參加者有十四個人。',
        options: [
            { text: 'じゅうしにん', isCorrect: false, reason: '陷阱{かんけい}！避免{さける}「しにん」的禁忌{きんき}。' },
            { text: 'じゅうよにん', isCorrect: true, reason: '正確{せいかく}！參加者{さんかしゃ}有十四個人{じゅうよにん}。' },
            { text: 'じゅうよんにん', isCorrect: false, reason: '使用{しよう}「よ」不是「よん」。' },
            { text: 'じゅうよじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十四人{じゅうよにん}」與四人{よにん}一樣{いちよう}使用{しよう}「よ」。',
            trapExplanation: '任何{いかなる}包含{ふくむ}「四{し}」的人數{にんずう}都{すべて}使用{しよう}「よ」避免{さける}「しにん」。',
            relatedRules: ['四人{よにん}の讀法{よみかた}', '避諱{いひき}規則{きそく}']
        },
        sourceItem: { value: 14, kanji: '十四人', reading: 'じゅうよにん' }
    },
    {
        id: 'people_15_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十五人」的正確讀音是？',
        stem_zh: '「十五人」的正確讀音是？',
        options: [
            { text: 'じゅうごにん', isCorrect: true, reason: '正確{せいかく}！「十五人{じゅうごにん}」讀作{どくさ}「じゅうごにん」。' },
            { text: 'じゅういつにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「ご」不是訓讀{くんどく}「いつ」。' },
            { text: 'とごにん', isCorrect: false, reason: '十使用{しよう}音讀{おんどく}「じゅう」。' },
            { text: 'じゅうごじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十五人{じゅうごにん}」讀作{どくさ}「じゅうごにん」。',
            relatedRules: ['人數{にんずう}の音讀{おんどく}規則{きそく}', '十五{じゅうご}']
        },
        sourceItem: { value: 15, kanji: '十五人', reading: 'じゅうごにん' }
    },
    {
        id: 'people_15_sent',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: 'ラグビーチームは＿＿で試合をします。',
        stem_zh: '橄欖球隊十五個人比賽。',
        options: [
            { text: 'じゅういつにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「ご」。' },
            { text: 'じゅうごにん', isCorrect: true, reason: '正確{せいかく}！橄欖球隊{ラグビーチーム}十五個人{じゅうごにん}比賽{しあい}。' },
            { text: 'とごにん', isCorrect: false, reason: '十使用{しよう}「じゅう」。' },
            { text: 'じゅうごじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '橄欖球{ラグビー}一隊{いちチーム}需要{ひつよう}十五人{じゅうごにん}。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '運動{うんどう}團隊{チーム}']
        },
        sourceItem: { value: 15, kanji: '十五人', reading: 'じゅうごにん' }
    },

    // ===== 20人、30人、50人、100人 =====
    {
        id: 'people_20_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二十人」的正確讀音是？',
        stem_zh: '「二十人」的正確讀音是？',
        options: [
            { text: 'にじゅうにん', isCorrect: true, reason: '正確{せいかく}！「二十人{にじゅうにん}」讀作{どくさ}「にじゅうにん」。' },
            { text: 'はたちにん', isCorrect: false, reason: '「はたち」只用於{つかう}年齡{ねんれい}20歲{さい}，不用於{もちいず}人數{にんずう}。' },
            { text: 'にじゅうじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'ふたじゅうにん', isCorrect: false, reason: '二十{にじゅう}使用{しよう}音讀{おんどく}「に」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十人{にじゅうにん}」讀作{どくさ}「にじゅうにん」。「はたち」只用於{つかう}年齡{ねんれい}。',
            relatedRules: ['人數{にんずう}の音讀{おんどく}規則{きそく}', '「はたち」vs「にじゅう」']
        },
        sourceItem: { value: 20, kanji: '二十人', reading: 'にじゅうにん' }
    },
    {
        id: 'people_20_sent',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: 'クラスには＿＿います。',
        stem_zh: '班級有二十個人。',
        options: [
            { text: 'はたちにん', isCorrect: false, reason: '「はたち」只用於{つかう}年齡{ねんれい}。' },
            { text: 'にじゅうにん', isCorrect: true, reason: '正確{せいかく}！班級{クラス}有二十個人{にじゅうにん}。' },
            { text: 'にじゅうじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'ふたじゅうにん', isCorrect: false, reason: '二十{にじゅう}使用{しよう}音讀{おんどく}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「クラスには二十人{にじゅうにん}います」表示{ひょうじ}「班級{クラス}有二十個人{にじゅうにん}」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '班級{クラス}表達{ひょうたつ}']
        },
        sourceItem: { value: 20, kanji: '二十人', reading: 'にじゅうにん' }
    },
    {
        id: 'people_24_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: true,
        stem: '「二十四人」的正確讀音是？',
        stem_zh: '「二十四人」的正確讀音是？',
        options: [
            { text: 'にじゅうよにん', isCorrect: true, reason: '正確{せいかく}！「二十四人{にじゅうよにん}」使用{しよう}「よ」。' },
            { text: 'にじゅうしにん', isCorrect: false, reason: '陷阱{かんけい}！避免{さける}「しにん」的禁忌{きんき}。' },
            { text: 'にじゅうよんにん', isCorrect: false, reason: '使用{しよう}「よ」不是「よん」。' },
            { text: 'にじゅうよじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十四人{にじゅうよにん}」讀作{どくさ}「にじゅうよにん」，包含{ふくむ}「四{し}」的人數{にんずう}都{すべて}使用{しよう}「よ」。',
            trapExplanation: '任何{いかなる}包含{ふくむ}「四{し}」的數字{すうじ}都{すべて}避免{さける}「し」讀法{よみかた}。',
            relatedRules: ['四人{よにん}の讀法{よみかた}', '避諱{いひき}規則{きそく}']
        },
        sourceItem: { value: 24, kanji: '二十四人', reading: 'にじゅうよにん' }
    },
    {
        id: 'people_30_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「三十人」的正確讀音是？',
        stem_zh: '「三十人」的正確讀音是？',
        options: [
            { text: 'さんじゅうにん', isCorrect: true, reason: '正確{せいかく}！「三十人{さんじゅうにん}」讀作{どくさ}「さんじゅうにん」。' },
            { text: 'みそにん', isCorrect: false, reason: '「みそ」是古語{こご}，現代{げんだい}使用{しよう}「さんじゅう」。' },
            { text: 'さんじゅうじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'みじゅうにん', isCorrect: false, reason: '三十{さんじゅう}使用{しよう}音讀{おんどく}「さん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十人{さんじゅうにん}」讀作{どくさ}「さんじゅうにん」。',
            relatedRules: ['人數{にんずう}の音讀{おんどく}規則{きそく}', '三十{さんじゅう}']
        },
        sourceItem: { value: 30, kanji: '三十人', reading: 'さんじゅうにん' }
    },
    {
        id: 'people_30_sent',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '会議室には＿＿入れます。',
        stem_zh: '會議室可以容納三十個人。',
        options: [
            { text: 'みそにん', isCorrect: false, reason: '現代{げんだい}使用{しよう}「さんじゅう」。' },
            { text: 'さんじゅうにん', isCorrect: true, reason: '正確{せいかく}！會議室{かいぎしつ}可以{できます}容納{いれます}三十個人{さんじゅうにん}。' },
            { text: 'さんじゅうじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'みじゅうにん', isCorrect: false, reason: '三十{さんじゅう}使用{しよう}「さん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三十人{さんじゅうにん}入{はい}れます」表示{ひょうじ}「可以{できます}容納{いれる}三十個人{さんじゅうにん}」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '容量{ようりょう}表達{ひょうたつ}']
        },
        sourceItem: { value: 30, kanji: '三十人', reading: 'さんじゅうにん' }
    },
    {
        id: 'people_50_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「五十人」的正確讀音是？',
        stem_zh: '「五十人」的正確讀音是？',
        options: [
            { text: 'ごじゅうにん', isCorrect: true, reason: '正確{せいかく}！「五十人{ごじゅうにん}」讀作{どくさ}「ごじゅうにん」。' },
            { text: 'いそにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「ご」。' },
            { text: 'ごじゅうじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'こじゅうにん', isCorrect: false, reason: '五使用{しよう}濁音{だくおん}「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十人{ごじゅうにん}」讀作{どくさ}「ごじゅうにん」。',
            relatedRules: ['人數{にんずう}の音讀{おんどく}規則{きそく}', '五十{ごじゅう}']
        },
        sourceItem: { value: 50, kanji: '五十人', reading: 'ごじゅうにん' }
    },
    {
        id: 'people_50_dial',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '何人参加しますか？',
        stem_zh: '有幾個人參加？',
        dialogue: {
            speakerA: 'パーティーには何人来ますか？',
            speakerB: '約＿＿です。（五十個人）'
        },
        options: [
            { text: 'いそにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「ご」。' },
            { text: 'ごじゅうにん', isCorrect: true, reason: '正確{せいかく}！約{やく}五十個人{ごじゅうにん}來{きます}派對{パーティー}。' },
            { text: 'ごじゅうじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'こじゅうにん', isCorrect: false, reason: '五使用{しよう}「ご」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「約{やく}五十人{ごじゅうにん}」表示{ひょうじ}「約{やく}五十個人{ごじゅうにん}」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '派對{パーティー}參加者{さんかしゃ}']
        },
        sourceItem: { value: 50, kanji: '五十人', reading: 'ごじゅうにん' }
    },
    {
        id: 'people_100_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「百人」的正確讀音是？',
        stem_zh: '「百人」的正確讀音是？',
        options: [
            { text: 'ひゃくにん', isCorrect: true, reason: '正確{せいかく}！「百人{ひゃくにん}」讀作{どくさ}「ひゃくにん」。' },
            { text: 'ももにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「ひゃく」不是訓讀{くんどく}「もも」。' },
            { text: 'ひゃくじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'びゃくにん', isCorrect: false, reason: '百使用{しよう}「ひゃく」不是濁音{だくおん}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「百人{ひゃくにん}」讀作{どくさ}「ひゃくにん」。',
            relatedRules: ['人數{にんずう}の音讀{おんどく}規則{きそく}', '百{ひゃく}の讀法{よみかた}']
        },
        sourceItem: { value: 100, kanji: '百人', reading: 'ひゃくにん' }
    },
    {
        id: 'people_100_sent',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '百人一首は＿＿の和歌を集めたものです。',
        stem_zh: '百人一首是收集一百個人的和歌。',
        options: [
            { text: 'ももにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「ひゃく」。' },
            { text: 'ひゃくにん', isCorrect: true, reason: '正確{せいかく}！百人一首{ひゃくにんいっしゅ}是收集{あつめた}一百個人{ひゃくにん}的和歌{わか}。' },
            { text: 'ひゃくじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'びゃくにん', isCorrect: false, reason: '百使用{しよう}「ひゃく」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「百人一首{ひゃくにんいっしゅ}」是日本{にほん}傳統{でんとう}紙牌{かるた}遊戲{ゲーム}。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '日本{にほん}文化{ぶんか}']
        },
        sourceItem: { value: 100, kanji: '百人', reading: 'ひゃくにん' }
    },

    // ===== 更多情境題 =====
    {
        id: 'people_context_restaurant',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '餐廳預約',
        stem_zh: '餐廳預約',
        dialogue: {
            speakerA: 'いらっしゃいませ。何名様ですか？',
            speakerB: '＿＿です。（五位）'
        },
        options: [
            { text: 'ごめい', isCorrect: false, reason: '雖然{すいぜん}「名{めい}」也可{かのう}用於{もちいる}人數{にんずう}，但答案{こたえ}應{べき}回答{かいとう}「ごにん」。' },
            { text: 'ごにん', isCorrect: true, reason: '正確{せいかく}！五位{ごにん}客人{きゃくさん}。' },
            { text: 'いつにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「ご」。' },
            { text: 'ごじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '餐廳{れすとらん}回答{かいとう}人數{にんずう}使用{しよう}「〜人{にん}」。',
            relatedRules: ['餐廳{れすとらん}用語{ようご}', '「何名様{なんめいさま}」の回答{かいとう}']
        },
        sourceItem: { value: 5, kanji: '五人', reading: 'ごにん' }
    },
    {
        id: 'people_context_family',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '家庭人數',
        stem_zh: '家庭人數',
        dialogue: {
            speakerA: '何人家族ですか？',
            speakerB: '私の家族は＿＿です。（三個人）'
        },
        options: [
            { text: 'みたり', isCorrect: false, reason: '現代{げんだい}使用{しよう}「さんにん」。' },
            { text: 'さんにん', isCorrect: true, reason: '正確{せいかく}！家庭{かぞく}有三個人{さんにん}。' },
            { text: 'さんじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'さんめい', isCorrect: false, reason: '家庭{かぞく}人數{にんずう}使用{しよう}「人{にん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「何人家族{なんにんかぞく}」的回答{かいとう}使用{しよう}「〜人{にん}」。',
            relatedRules: ['家庭{かぞく}表達{ひょうたつ}', '人數{にんずう}の讀法{よみかた}']
        },
        sourceItem: { value: 3, kanji: '三人', reading: 'さんにん' }
    },
    {
        id: 'people_context_meeting',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '會議出席',
        stem_zh: '會議出席',
        dialogue: {
            speakerA: '今日の会議には何人出席しましたか？',
            speakerB: '＿＿出席しました。（八個人）'
        },
        options: [
            { text: 'やにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「はち」。' },
            { text: 'はちにん', isCorrect: true, reason: '正確{せいかく}！八個人{はちにん}出席{しゅっせき}了會議{かいぎ}。' },
            { text: 'はちじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'はっにん', isCorrect: false, reason: '八人{はちにん}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八人{はちにん}出席{しゅっせき}しました」表示{ひょうじ}「八個人{はちにん}出席{しゅっせき}了」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '會議{かいぎ}用語{ようご}']
        },
        sourceItem: { value: 8, kanji: '八人', reading: 'はちにん' }
    },
    {
        id: 'people_context_travel',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: true,
        stem: '友達と＿＿で旅行に行きます。',
        stem_zh: '和朋友四個人去旅行。',
        options: [
            { text: 'よんにん', isCorrect: false, reason: '陷阱{かんけい}！四人{よにん}使用{しよう}「よ」不是「よん」。' },
            { text: 'よにん', isCorrect: true, reason: '正確{せいかく}！四個人{よにん}一起{いっしょ}去旅行{りょこう}。' },
            { text: 'しにん', isCorrect: false, reason: '「しにん」是禁忌{きんき}讀法{よみかた}。' },
            { text: 'よったり', isCorrect: false, reason: '現代{げんだい}使用{しよう}「よにん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「四人{よにん}で旅行{りょこう}に行{い}きます」表示{ひょうじ}「四個人{よにん}去旅行{りょこう}」。',
            trapExplanation: '四人{よにん}固定{こてい}使用{しよう}「よ」，避免{さける}「し」的禁忌{きんき}。',
            relatedRules: ['四人{よにん}の讀法{よみかた}', '旅行{りょこう}表達{ひょうたつ}']
        },
        sourceItem: { value: 4, kanji: '四人', reading: 'よにん' }
    },
    {
        id: 'people_context_party',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: 'パーティーには＿＿来ました。',
        stem_zh: '派對來了二十個人。',
        options: [
            { text: 'はたちにん', isCorrect: false, reason: '「はたち」只用於{つかう}年齡{ねんれい}20歲{さい}。' },
            { text: 'にじゅうにん', isCorrect: true, reason: '正確{せいかく}！派對{パーティー}來了{きました}二十個人{にじゅうにん}。' },
            { text: 'にじゅうじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'ふたじゅうにん', isCorrect: false, reason: '二十{にじゅう}使用{しよう}音讀{おんどく}「に」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「二十人{にじゅうにん}来{き}ました」表示{ひょうじ}「二十個人{にじゅうにん}來了」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '派對{パーティー}表達{ひょうたつ}']
        },
        sourceItem: { value: 20, kanji: '二十人', reading: 'にじゅうにん' }
    },

    // ===== 比較題與綜合題 =====
    {
        id: 'people_compare_1_2',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: true,
        stem: '以下哪個選項「都」使用訓讀？',
        stem_zh: '以下哪個選項「都」使用訓讀？',
        options: [
            { text: '一人、二人', isCorrect: true, reason: '正確{せいかく}！一人{ひとり}（ひとり）和二人{ふたり}（ふたり）都{すべて}使用{しよう}訓讀{くんどく}。' },
            { text: '一人、三人', isCorrect: false, reason: '三人{さんにん}使用{しよう}音讀{おんどく}「さんにん」。' },
            { text: '二人、四人', isCorrect: false, reason: '四人{よにん}使用{しよう}音讀{おんどく}「よにん」（雖然{すいぜん}四{よ}是特殊{とくしゅ}讀法{よみかた}）。' },
            { text: '一人、四人', isCorrect: false, reason: '四人{よにん}使用{しよう}音讀{おんどく}「よにん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '只有{ただ}一人{ひとり}（ひとり）和二人{ふたり}（ふたり）使用{しよう}完全{かんぜん}訓讀{くんどく}系統{けいとう}。',
            trapExplanation: '從{から}三人{さんにん}開始{はじめ}切換{きりかえ}為{に}音讀{おんどく}「〜にん」。',
            relatedRules: ['訓讀{くんどく}vs音讀{おんどく}', '人數{にんずう}の特殊{とくしゅ}規則{きそく}']
        },
        sourceItem: { value: 1, kanji: '一人・二人', reading: 'ひとり・ふたり' }
    },
    {
        id: 'people_compare_4_avoid',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: true,
        stem: '為什麼「四人」不讀作「しにん」？',
        stem_zh: '為什麼「四人」不讀作「しにん」？',
        options: [
            { text: '因為「しにん」聽起來像「死人」', isCorrect: true, reason: '正確{せいかく}！「しにん」與「死人{しにん}」（屍體{したい}）同音{どうおん}，是禁忌{きんき}。' },
            { text: '因為「し」是訓讀', isCorrect: false, reason: '「し」是音讀{おんどく}，但因禁忌{きんき}而避免{さける}使用{しよう}。' },
            { text: '因為文法規則', isCorrect: false, reason: '這是文化{ぶんか}禁忌{きんき}，不是文法{ぶんぽう}規則{きそく}。' },
            { text: '因為「し」太短', isCorrect: false, reason: '這不是原因{げんいん}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「しにん」與「死人{しにん}」（屍體{したい}、死者{ししゃ}）同音{どうおん}，日本人{にほんじん}避諱{いひき}使用{しよう}。',
            trapExplanation: '這是日本{にほん}文化{ぶんか}中{ちゅう}的避諱{いひき}習慣{しゅうかん}。',
            relatedRules: ['避諱{いひき}文化{ぶんか}', '四{し}の禁忌{きんき}']
        },
        sourceItem: { value: 4, kanji: '四人', reading: 'よにん' }
    },
    {
        id: 'people_rule_switch',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '人數量詞從幾人開始使用音讀「〜にん」？',
        stem_zh: '人數量詞從幾人開始使用音讀「〜にん」？',
        options: [
            { text: '三人から', isCorrect: true, reason: '正確{せいかく}！從{から}三人{さんにん}開始{はじめ}使用{しよう}音讀{おんどく}「〜にん」。' },
            { text: '一人から', isCorrect: false, reason: '一人{ひとり}使用{しよう}訓讀{くんどく}「ひとり」。' },
            { text: '二人から', isCorrect: false, reason: '二人{ふたり}使用{しよう}訓讀{くんどく}「ふたり」。' },
            { text: '四人から', isCorrect: false, reason: '三人{さんにん}已經{すでに}開始{はじめ}使用{しよう}音讀{おんどく}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '人數{にんずう}量詞{りょうし}：1人{ひとり}（ひとり）、2人{ふたり}（ふたり）使用{しよう}訓讀{くんどく}，從{から}3人{さんにん}開始{はじめ}切換{きりかえ}為{に}音讀{おんどく}「〜にん」。',
            relatedRules: ['訓讀{くんどく}→音讀{おんどく}の切換點{きりかえてん}', '人數{にんずう}の規則{きそく}']
        },
        sourceItem: { value: 3, kanji: '三人', reading: 'さんにん' }
    },
    {
        id: 'people_7_dual',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「七人」有幾種正確讀法？',
        stem_zh: '「七人」有幾種正確讀法？',
        options: [
            { text: '兩種：しちにん、ななにん', isCorrect: true, reason: '正確{せいかく}！「七人{しちにん}」可讀作{どくさ}「しちにん」或「ななにん」，兩者{りょうしゃ}都{すべて}正確{せいかく}。' },
            { text: '一種：しちにん', isCorrect: false, reason: '「ななにん」也正確{せいかく}。' },
            { text: '一種：ななにん', isCorrect: false, reason: '「しちにん」也正確{せいかく}。' },
            { text: '三種', isCorrect: false, reason: '只有{ただ}兩種{にしゅ}正確{せいかく}讀法{よみかた}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七人{しちにん}」可讀作{どくさ}「しちにん」或「ななにん」，兩種{にしゅ}讀法{よみかた}在現代{げんだい}日語{にほんご}中{ちゅう}都{すべて}使用{しよう}。',
            relatedRules: ['七{しち}の雙重{そうじゅう}讀法{よみかた}', '「しち」vs「なな」']
        },
        sourceItem: { value: 7, kanji: '七人', reading: 'しちにん / ななにん' }
    },

    // ===== 翻譯題 =====
    {
        id: 'people_trans_alone',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: true,
        stem: '「我一個人住」的日文是？',
        stem_zh: '「我一個人住」的日文是？',
        options: [
            { text: '私はいちにんで住んでいます', isCorrect: false, reason: '陷阱{かんけい}！一人{ひとり}使用{しよう}訓讀{くんどく}「ひとり」。' },
            { text: '私はひとりで住んでいます', isCorrect: true, reason: '正確{せいかく}！「ひとりで住{す}んでいます」表示{ひょうじ}「一個人{ひとり}住」。' },
            { text: '私はいちじんで住んでいます', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: '私は一つで住んでいます', isCorrect: false, reason: '「一{ひと}つ」不用於{もちいず}人數{にんずう}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ひとりで住{す}んでいます」是「一個人{ひとり}住」的正確{せいかく}表達{ひょうたつ}。',
            trapExplanation: '一人{ひとり}固定{こてい}使用{しよう}訓讀{くんどく}「ひとり」。',
            relatedRules: ['一人{ひとり}の讀法{よみかた}', '居住{きょじゅう}表達{ひょうたつ}']
        },
        sourceItem: { value: 1, kanji: '一人', reading: 'ひとり' }
    },
    {
        id: 'people_trans_couple',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: true,
        stem: '「我們兩個人是夫妻」的日文是？',
        stem_zh: '「我們兩個人是夫妻」的日文是？',
        options: [
            { text: '私たちににんは夫婦です', isCorrect: false, reason: '陷阱{かんけい}！二人{ふたり}使用{しよう}訓讀{くんどく}「ふたり」。' },
            { text: '私たちふたりは夫婦です', isCorrect: true, reason: '正確{せいかく}！「ふたりは夫婦{ふうふ}です」表示{ひょうじ}「兩個人{ふたり}是夫妻{ふうふ}」。' },
            { text: '私たちにじんは夫婦です', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: '私たち二つは夫婦です', isCorrect: false, reason: '「二{ふた}つ」不用於{もちいず}人數{にんずう}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ふたりは夫婦{ふうふ}です」是「兩個人{ふたり}是夫妻{ふうふ}」的正確{せいかく}表達{ひょうたつ}。',
            trapExplanation: '二人{ふたり}固定{こてい}使用{しよう}訓讀{くんどく}「ふたり」。',
            relatedRules: ['二人{ふたり}の讀法{よみかた}', '夫婦{ふうふ}表達{ひょうたつ}']
        },
        sourceItem: { value: 2, kanji: '二人', reading: 'ふたり' }
    },
    {
        id: 'people_trans_group',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '「六個人一組」的日文是？',
        stem_zh: '「六個人一組」的日文是？',
        options: [
            { text: 'むにんひとくみ', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「ろく」。' },
            { text: 'ろくにんひとくみ', isCorrect: true, reason: '正確{せいかく}！「六人{ろくにん}一組{ひとくみ}」表示{ひょうじ}「六個人{ろくにん}一組{ひとくみ}」。' },
            { text: 'ろくじんひとくみ', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'むったりひとくみ', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「六人{ろくにん}一組{ひとくみ}」是「六個人{ろくにん}一組{ひとくみ}」的正確{せいかく}表達{ひょうたつ}。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '分組{ぶんぐみ}表達{ひょうたつ}']
        },
        sourceItem: { value: 6, kanji: '六人', reading: 'ろくにん' }
    },

    // ===== 何人の問答題 =====
    {
        id: 'people_question_nannin',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「何人」的正確讀音是？',
        stem_zh: '「何人」的正確讀音是？',
        options: [
            { text: 'なんにん', isCorrect: true, reason: '正確{せいかく}！「何人{なんにん}」讀作{どくさ}「なんにん」，表示{ひょうじ}「幾個人{いくにん}」。' },
            { text: 'なにじん', isCorrect: false, reason: '「なにじん」是「什麼{なに}人{じん}」（國籍{こくせき}），不是人數{にんずう}。' },
            { text: 'なにひと', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' },
            { text: 'いくにん', isCorrect: false, reason: '人數{にんずう}疑問詞{ぎもんし}使用{しよう}「なんにん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何人{なんにん}」讀作{どくさ}「なんにん」，是詢問{たずねる}人數{にんずう}的疑問詞{ぎもんし}。注意{ちゅうい}「何人{なにじん}」（なにじん）是詢問{たずねる}國籍{こくせき}。',
            relatedRules: ['「なんにん」vs「なにじん」', '疑問詞{ぎもんし}の使{つか}い分{わ}け']
        },
        sourceItem: { value: 0, kanji: '何人', reading: 'なんにん' }
    },
    {
        id: 'people_question_dial',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '詢問人數',
        stem_zh: '詢問人數',
        dialogue: {
            speakerA: '今度の飲み会は＿＿来ますか？',
            speakerB: '多分十人ぐらいです。'
        },
        options: [
            { text: 'なにじん', isCorrect: false, reason: '「なにじん」是詢問{たずねる}國籍{こくせき}。' },
            { text: 'なんにん', isCorrect: true, reason: '正確{せいかく}！「何人{なんにん}」詢問{たずねる}人數{にんずう}。' },
            { text: 'いくにん', isCorrect: false, reason: '人數{にんずう}疑問詞{ぎもんし}使用{しよう}「なんにん」。' },
            { text: 'どのにん', isCorrect: false, reason: '這不是正確{せいかく}疑問詞{ぎもんし}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「何人{なんにん}来{き}ますか」詢問{たずねる}「幾個人{いくにん}來」。',
            relatedRules: ['人數{にんずう}の疑問詞{ぎもんし}', '「なんにん」の使用{しよう}']
        },
        sourceItem: { value: 0, kanji: '何人', reading: 'なんにん' }
    },

    // ===== 錯誤辨識題 =====
    {
        id: 'people_error_1',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: true,
        stem: '以下哪個句子有錯誤？',
        stem_zh: '以下哪個句子有錯誤？',
        options: [
            { text: '私はひとりで行きます', isCorrect: false, reason: '這是正確{せいかく}的，「ひとり」是一人{ひとり}的訓讀{くんどく}。' },
            { text: '私たちはふたりです', isCorrect: false, reason: '這是正確{せいかく}的，「ふたり」是二人{ふたり}的訓讀{くんどく}。' },
            { text: '私たちはしにんです', isCorrect: true, reason: '錯誤{ごさ}！「しにん」是禁忌{きんき}讀法{よみかた}，應{べき}該{べき}使用{しよう}「よにん」。' },
            { text: '私たちはさんにんです', isCorrect: false, reason: '這是正確{せいかく}的，「さんにん」是三人{さんにん}的音讀{おんどく}。' }
        ],
        correctIndex: 2,
        explanation: {
            correctRule: '「しにん」是錯誤{ごさ}的讀法{よみかた}，因為{なぜなら}與「死人{しにん}」同音{どうおん}。四人{よにん}應{べき}讀作{どくさ}「よにん」。',
            trapExplanation: '這是陷阱題{かんけいだい}，測試{テスト}對「四{し}」禁忌{きんき}的理解{りかい}。',
            relatedRules: ['四人{よにん}の禁忌{きんき}', '避諱{いひき}規則{きそく}']
        },
        sourceItem: { value: 4, kanji: '四人', reading: 'よにん' }
    },
    {
        id: 'people_error_2',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: true,
        stem: '以下哪個句子有錯誤？',
        stem_zh: '以下哪個句子有錯誤？',
        options: [
            { text: '三人で話し合いました', isCorrect: false, reason: '這是正確{せいかく}的。' },
            { text: '五人で旅行しました', isCorrect: false, reason: '這是正確{せいかく}的。' },
            { text: 'ににんで行きました', isCorrect: true, reason: '錯誤{ごさ}！二人{ふたり}應{べき}該{べき}使用{しよう}訓讀{くんどく}「ふたり」，不是音讀{おんどく}「ににん」。' },
            { text: '十人で会議をしました', isCorrect: false, reason: '這是正確{せいかく}的。' }
        ],
        correctIndex: 2,
        explanation: {
            correctRule: '二人{ふたり}固定{こてい}使用{しよう}訓讀{くんどく}「ふたり」，不能{ふのう}使用{しよう}音讀{おんどく}「ににん」。',
            trapExplanation: '一人{ひとり}和二人{ふたり}是特殊{とくしゅ}訓讀{くんどく}，需要{じゅよう}特別{とくべつ}記憶{きおく}。',
            relatedRules: ['二人{ふたり}の訓讀{くんどく}', '特殊{とくしゅ}讀法{よみかた}']
        },
        sourceItem: { value: 2, kanji: '二人', reading: 'ふたり' }
    },

    // ===== 16-19人 =====
    {
        id: 'people_16_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十六人」的正確讀音是？',
        stem_zh: '「十六人」的正確讀音是？',
        options: [
            { text: 'じゅうろくにん', isCorrect: true, reason: '正確{せいかく}！「十六人{じゅうろくにん}」讀作{どくさ}「じゅうろくにん」。' },
            { text: 'じゅうむにん', isCorrect: false, reason: '十六{じゅうろく}使用{しよう}音讀{おんどく}「ろく」。' },
            { text: 'じゅうろくじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'とろくにん', isCorrect: false, reason: '十使用{しよう}「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十六人{じゅうろくにん}」讀作{どくさ}「じゅうろくにん」。',
            relatedRules: ['人數{にんずう}の音讀{おんどく}規則{きそく}']
        },
        sourceItem: { value: 16, kanji: '十六人', reading: 'じゅうろくにん' }
    },
    {
        id: 'people_17_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十七人」的正確讀音是？',
        stem_zh: '「十七人」的正確讀音是？',
        options: [
            { text: 'じゅうしちにん / じゅうななにん', isCorrect: true, reason: '正確{せいかく}！兩種{にしゅ}讀法{よみかた}都{すべて}可以{できます}。' },
            { text: 'じゅうなのにん', isCorrect: false, reason: '「なの」是日期{にっき}讀法{よみかた}。' },
            { text: 'じゅうしちじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'とななにん', isCorrect: false, reason: '十使用{しよう}「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十七人{じゅうしちにん}」可讀作{どくさ}「じゅうしちにん」或「じゅうななにん」。',
            relatedRules: ['七{しち}の雙重{そうじゅう}讀法{よみかた}']
        },
        sourceItem: { value: 17, kanji: '十七人', reading: 'じゅうしちにん' }
    },
    {
        id: 'people_18_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十八人」的正確讀音是？',
        stem_zh: '「十八人」的正確讀音是？',
        options: [
            { text: 'じゅうはちにん', isCorrect: true, reason: '正確{せいかく}！「十八人{じゅうはちにん}」讀作{どくさ}「じゅうはちにん」。' },
            { text: 'じゅうやにん', isCorrect: false, reason: '十八{じゅうはち}使用{しよう}音讀{おんどく}「はち」。' },
            { text: 'じゅうはちじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'じゅうはっにん', isCorrect: false, reason: '十八人{じゅうはちにん}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十八人{じゅうはちにん}」讀作{どくさ}「じゅうはちにん」。',
            relatedRules: ['人數{にんずう}の音讀{おんどく}規則{きそく}']
        },
        sourceItem: { value: 18, kanji: '十八人', reading: 'じゅうはちにん' }
    },
    {
        id: 'people_19_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十九人」的正確讀音是？',
        stem_zh: '「十九人」的正確讀音是？',
        options: [
            { text: 'じゅうきゅうにん', isCorrect: true, reason: '正確{せいかく}！「十九人{じゅうきゅうにん}」讀作{どくさ}「じゅうきゅうにん」。' },
            { text: 'じゅうくにん', isCorrect: false, reason: '十九{じゅうきゅう}使用{しよう}「きゅう」不是「く」。' },
            { text: 'じゅうきゅうじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'とくにん', isCorrect: false, reason: '十使用{しよう}「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十九人{じゅうきゅうにん}」讀作{どくさ}「じゅうきゅうにん」。',
            relatedRules: ['人數{にんずう}の音讀{おんどく}規則{きそく}']
        },
        sourceItem: { value: 19, kanji: '十九人', reading: 'じゅうきゅうにん' }
    },

    // ===== 40人、60人、70人、80人、90人 =====
    {
        id: 'people_40_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: true,
        stem: '「四十人」的正確讀音是？',
        stem_zh: '「四十人」的正確讀音是？',
        options: [
            { text: 'よんじゅうにん', isCorrect: true, reason: '正確{せいかく}！「四十人{よんじゅうにん}」讀作{どくさ}「よんじゅうにん」。' },
            { text: 'しじゅうにん', isCorrect: false, reason: '陷阱{かんけい}！「しじゅう」聽起來{きこえ}像「始終{しじゅう}」，使用{しよう}「よんじゅう」。' },
            { text: 'よじゅうにん', isCorrect: false, reason: '四十{よんじゅう}使用{しよう}「よん」不是「よ」。' },
            { text: 'よんじゅうじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十人{よんじゅうにん}」讀作{どくさ}「よんじゅうにん」，四十{よんじゅう}使用{しよう}「よん」。',
            trapExplanation: '四十{よんじゅう}通常{つうじょう}使用{しよう}「よんじゅう」避免{さける}與「始終{しじゅう}」混淆{こんどう}。',
            relatedRules: ['四十{よんじゅう}の讀法{よみかた}']
        },
        sourceItem: { value: 40, kanji: '四十人', reading: 'よんじゅうにん' }
    },
    {
        id: 'people_60_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「六十人」的正確讀音是？',
        stem_zh: '「六十人」的正確讀音是？',
        options: [
            { text: 'ろくじゅうにん', isCorrect: true, reason: '正確{せいかく}！「六十人{ろくじゅうにん}」讀作{どくさ}「ろくじゅうにん」。' },
            { text: 'むじゅうにん', isCorrect: false, reason: '六十{ろくじゅう}使用{しよう}音讀{おんどく}「ろく」。' },
            { text: 'ろくじゅうじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'ろっじゅうにん', isCorrect: false, reason: '六十{ろくじゅう}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六十人{ろくじゅうにん}」讀作{どくさ}「ろくじゅうにん」。',
            relatedRules: ['人數{にんずう}の音讀{おんどく}規則{きそく}']
        },
        sourceItem: { value: 60, kanji: '六十人', reading: 'ろくじゅうにん' }
    },
    {
        id: 'people_70_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「七十人」的正確讀音是？',
        stem_zh: '「七十人」的正確讀音是？',
        options: [
            { text: 'しちじゅうにん / ななじゅうにん', isCorrect: true, reason: '正確{せいかく}！兩種{にしゅ}讀法{よみかた}都{すべて}可以{できます}。' },
            { text: 'なのじゅうにん', isCorrect: false, reason: '「なの」是日期{にっき}讀法{よみかた}。' },
            { text: 'しちじゅうじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'ななじゅうじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七十人{しちじゅうにん}」可讀作{どくさ}「しちじゅうにん」或「ななじゅうにん」。',
            relatedRules: ['七{しち}の雙重{そうじゅう}讀法{よみかた}']
        },
        sourceItem: { value: 70, kanji: '七十人', reading: 'しちじゅうにん' }
    },
    {
        id: 'people_80_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「八十人」的正確讀音是？',
        stem_zh: '「八十人」的正確讀音是？',
        options: [
            { text: 'はちじゅうにん', isCorrect: true, reason: '正確{せいかく}！「八十人{はちじゅうにん}」讀作{どくさ}「はちじゅうにん」。' },
            { text: 'やじゅうにん', isCorrect: false, reason: '八十{はちじゅう}使用{しよう}音讀{おんどく}「はち」。' },
            { text: 'はちじゅうじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'はっじゅうにん', isCorrect: false, reason: '八十{はちじゅう}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八十人{はちじゅうにん}」讀作{どくさ}「はちじゅうにん」。',
            relatedRules: ['人數{にんずう}の音讀{おんどく}規則{きそく}']
        },
        sourceItem: { value: 80, kanji: '八十人', reading: 'はちじゅうにん' }
    },
    {
        id: 'people_90_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「九十人」的正確讀音是？',
        stem_zh: '「九十人」的正確讀音是？',
        options: [
            { text: 'きゅうじゅうにん', isCorrect: true, reason: '正確{せいかく}！「九十人{きゅうじゅうにん}」讀作{どくさ}「きゅうじゅうにん」。' },
            { text: 'くじゅうにん', isCorrect: false, reason: '九十{きゅうじゅう}使用{しよう}「きゅう」不是「く」。' },
            { text: 'きゅうじゅうじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'ここのじゅうにん', isCorrect: false, reason: '九十{きゅうじゅう}使用{しよう}音讀{おんどく}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九十人{きゅうじゅうにん}」讀作{どくさ}「きゅうじゅうにん」。',
            relatedRules: ['人數{にんずう}の音讀{おんどく}規則{きそく}']
        },
        sourceItem: { value: 90, kanji: '九十人', reading: 'きゅうじゅうにん' }
    },

    // ===== 更多情境句子題 =====
    {
        id: 'people_sent_classroom',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: 'このクラスには＿＿の学生がいます。',
        stem_zh: '這個班級有二十五個學生。',
        options: [
            { text: 'にじゅうごじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'にじゅうごにん', isCorrect: true, reason: '正確{せいかく}！班級{クラス}有二十五個{にじゅうごにん}學生{がくせい}。' },
            { text: 'はたちごにん', isCorrect: false, reason: '「はたち」只用於{つかう}年齡{ねんれい}。' },
            { text: 'ふたじゅうごにん', isCorrect: false, reason: '二十{にじゅう}使用{しよう}音讀{おんどく}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「二十五人{にじゅうごにん}の学生{がくせい}」表示{ひょうじ}「二十五個{にじゅうごにん}學生{がくせい}」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '教室{きょうしつ}用語{ようご}']
        },
        sourceItem: { value: 25, kanji: '二十五人', reading: 'にじゅうごにん' }
    },
    {
        id: 'people_sent_elevator',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: 'このエレベーターは＿＿まで乗れます。',
        stem_zh: '這部電梯最多可以搭十個人。',
        options: [
            { text: 'とおにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「じゅう」。' },
            { text: 'じゅうにん', isCorrect: true, reason: '正確{せいかく}！電梯{エレベーター}最多{さいたか}可以{できます}搭{のれます}十個人{じゅうにん}。' },
            { text: 'じゅうじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'じゅっにん', isCorrect: false, reason: '十人{じゅうにん}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十人{じゅうにん}まで乗{の}れます」表示{ひょうじ}「最多{さいたか}可以{できます}搭{のる}十個人{じゅうにん}」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '電梯{エレベーター}標示{ひょうじ}']
        },
        sourceItem: { value: 10, kanji: '十人', reading: 'じゅうにん' }
    },
    {
        id: 'people_sent_queue',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '列に＿＿並んでいます。',
        stem_zh: '排隊排了十五個人。',
        options: [
            { text: 'じゅういつにん', isCorrect: false, reason: '十五{じゅうご}使用{しよう}音讀{おんどく}「ご」。' },
            { text: 'じゅうごにん', isCorrect: true, reason: '正確{せいかく}！十五個人{じゅうごにん}在排隊{ならぶ}。' },
            { text: 'じゅうごじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'とごにん', isCorrect: false, reason: '十使用{しよう}「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十五人{じゅうごにん}並{なら}んでいます」表示{ひょうじ}「十五個人{じゅうごにん}在排隊{ならぶ}」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '排隊{ならぶ}表達{ひょうたつ}']
        },
        sourceItem: { value: 15, kanji: '十五人', reading: 'じゅうごにん' }
    },
    {
        id: 'people_sent_company',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: 'この会社には＿＿の社員がいます。',
        stem_zh: '這家公司有五百個員工。',
        options: [
            { text: 'ごひゃくじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'ごひゃくにん', isCorrect: true, reason: '正確{せいかく}！公司{かいしゃ}有五百個{ごひゃくにん}員工{しゃいん}。' },
            { text: 'いつひゃくにん', isCorrect: false, reason: '五百{ごひゃく}使用{しよう}音讀{おんどく}「ご」。' },
            { text: 'ごびゃくにん', isCorrect: false, reason: '五百{ごひゃく}不濁音化{ふだくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「五百人{ごひゃくにん}の社員{しゃいん}」表示{ひょうじ}「五百個{ごひゃくにん}員工{しゃいん}」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '公司{かいしゃ}用語{ようご}']
        },
        sourceItem: { value: 500, kanji: '五百人', reading: 'ごひゃくにん' }
    },
    {
        id: 'people_sent_event',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: 'コンサートには約＿＿来ました。',
        stem_zh: '演唱會來了大約一千個人。',
        options: [
            { text: 'いっせんじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'せんにん', isCorrect: true, reason: '正確{せいかく}！演唱會{コンサート}來了{きました}約{やく}一千個人{せんにん}。' },
            { text: 'ちにん', isCorrect: false, reason: '千使用{しよう}音讀{おんどく}「せん」。' },
            { text: 'いっせんにん', isCorrect: false, reason: '一千{せん}在人數{にんずう}前{まえ}通常{つうじょう}省略{しょうりゃく}「いっ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「千人{せんにん}」或「一千人{いっせんにん}」表示{ひょうじ}「一千個人{せんにん}」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '大型{おおがた}活動{かつどう}']
        },
        sourceItem: { value: 1000, kanji: '千人', reading: 'せんにん' }
    },

    // ===== 對話情境題 =====
    {
        id: 'people_dial_hotel',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '飯店預約',
        stem_zh: '飯店預約',
        dialogue: {
            speakerA: 'ご予約は何名様ですか？',
            speakerB: '大人＿＿、子供＿＿です。（兩個大人、三個小孩）'
        },
        options: [
            { text: 'ににん、みたり', isCorrect: false, reason: '二人{ふたり}使用{しよう}訓讀{くんどく}、三人{さんにん}使用{しよう}音讀{おんどく}。' },
            { text: 'ふたり、さんにん', isCorrect: true, reason: '正確{せいかく}！兩個{ふたり}大人{おとな}、三個{さんにん}小孩{こども}。' },
            { text: 'にめい、さんめい', isCorrect: false, reason: '雖然{すいぜん}「名{めい}」也可{かのう}用，但答案{こたえ}應{べき}用「人{にん}」。' },
            { text: 'ふたり、みにん', isCorrect: false, reason: '三人{さんにん}使用{しよう}音讀{おんどく}「さんにん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「大人{おとな}二人{ふたり}、子供{こども}三人{さんにん}」是飯店{ホテル}預約{よやく}的常用{じょうよう}表達{ひょうたつ}。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '飯店{ホテル}用語{ようご}']
        },
        sourceItem: { value: 2, kanji: '二人・三人', reading: 'ふたり・さんにん' }
    },
    {
        id: 'people_dial_interview',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '面試人數',
        stem_zh: '面試人數',
        dialogue: {
            speakerA: '今日の面接は何人ですか？',
            speakerB: '＿＿の予定です。（七個人）'
        },
        options: [
            { text: 'なのにん', isCorrect: false, reason: '「なの」是日期{にっき}讀法{よみかた}。' },
            { text: 'しちにん / ななにん', isCorrect: true, reason: '正確{せいかく}！七個人{しちにん}面試{めんせつ}。' },
            { text: 'しちじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'ななたり', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「七人{しちにん}の予定{よてい}です」表示{ひょうじ}「預計{よてい}七個人{しちにん}」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '面試{めんせつ}用語{ようご}']
        },
        sourceItem: { value: 7, kanji: '七人', reading: 'しちにん' }
    },
    {
        id: 'people_dial_sports',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '運動隊伍',
        stem_zh: '運動隊伍',
        dialogue: {
            speakerA: 'バスケットボールは何人でプレーしますか？',
            speakerB: '＿＿です。（五個人）'
        },
        options: [
            { text: 'いつにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「ご」。' },
            { text: 'ごにん', isCorrect: true, reason: '正確{せいかく}！籃球{バスケットボール}一隊{いちチーム}五個人{ごにん}。' },
            { text: 'ごじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'こにん', isCorrect: false, reason: '五使用{しよう}濁音{だくおん}「ご」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '籃球{バスケットボール}一隊{いちチーム}需要{ひつよう}五人{ごにん}。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '運動{うんどう}團隊{チーム}']
        },
        sourceItem: { value: 5, kanji: '五人', reading: 'ごにん' }
    },
    {
        id: 'people_dial_party_plan',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: true,
        stem: '派對計畫',
        stem_zh: '派對計畫',
        dialogue: {
            speakerA: '誕生日パーティーには何人呼びますか？',
            speakerB: '＿＿ぐらいです。（十四個人左右）'
        },
        options: [
            { text: 'じゅうしにん', isCorrect: false, reason: '陷阱{かんけい}！避免{さける}「しにん」的讀法{よみかた}。' },
            { text: 'じゅうよにん', isCorrect: true, reason: '正確{せいかく}！約{やく}十四個人{じゅうよにん}參加{さんか}。' },
            { text: 'じゅうよんにん', isCorrect: false, reason: '十四人{じゅうよにん}使用{しよう}「よ」不是「よん」。' },
            { text: 'といよにん', isCorrect: false, reason: '十使用{しよう}「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十四人{じゅうよにん}ぐらい」表示{ひょうじ}「約{やく}十四個人{じゅうよにん}」。',
            trapExplanation: '包含{ふくむ}「四{し}」的數字{すうじ}都{すべて}使用{しよう}「よ」。',
            relatedRules: ['四{し}の避諱{いひき}', '派對{パーティー}計畫{けいかく}']
        },
        sourceItem: { value: 14, kanji: '十四人', reading: 'じゅうよにん' }
    },

    // ===== 綜合比較題 =====
    {
        id: 'people_compare_all_special',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: true,
        stem: '以下哪些人數有「特殊讀法」需要注意？',
        stem_zh: '以下哪些人數有「特殊讀法」需要注意？',
        options: [
            { text: '1人、2人、4人、7人', isCorrect: true, reason: '正確{せいかく}！1人{ひとり}（ひとり）、2人{ふたり}（ふたり）是訓讀{くんどく}；4人{よにん}（よにん）避諱{いひき}；7人{しちにん}（しちにん/ななにん）有雙重{そうじゅう}讀法{よみかた}。' },
            { text: '3人、5人、6人', isCorrect: false, reason: '這些{これら}都{すべて}是規則{きそく}的音讀{おんどく}。' },
            { text: '8人、9人、10人', isCorrect: false, reason: '這些{これら}都{すべて}是規則{きそく}的音讀{おんどく}。' },
            { text: '只有1人、2人', isCorrect: false, reason: '4人{よにん}和7人{しちにん}也有特殊{とくしゅ}注意{ちゅうい}事項{じこう}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '需要{じゅよう}特別{とくべつ}記憶{きおく}的人數{にんずう}：1人{ひとり}（訓讀{くんどく}）、2人{ふたり}（訓讀{くんどく}）、4人{よにん}（避諱{いひき}「し」）、7人{しちにん}（雙重{そうじゅう}讀法{よみかた}）。',
            trapExplanation: '這題測試{テスト}對所有{すべて}特殊{とくしゅ}讀法{よみかた}的理解{りかい}。',
            relatedRules: ['人數{にんずう}の特殊{とくしゅ}規則{きそく}', '訓讀{くんどく}vs音讀{おんどく}']
        },
        sourceItem: { value: 0, kanji: '特殊人數', reading: '各種' }
    },
    {
        id: 'people_compare_jin_nin',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: true,
        stem: '「人」什麼時候讀作「じん」？',
        stem_zh: '「人」什麼時候讀作「じん」？',
        options: [
            { text: '表示國籍或民族時（如：日本人、アメリカ人）', isCorrect: true, reason: '正確{せいかく}！「〜人{じん}」表示{ひょうじ}國籍{こくせき}或民族{みんぞく}（如{たとえば}：日本人{にほんじん}、アメリカ人{じん}）。' },
            { text: '表示人數時', isCorrect: false, reason: '人數{にんずう}使用{しよう}「〜人{にん}」（如{たとえば}：三人{さんにん}）。' },
            { text: '數字後面接人時', isCorrect: false, reason: '數字{すうじ}後面{あとめ}接{つなぐ}人{ひと}時{とき}使用{しよう}「にん」。' },
            { text: '任何時候都可以', isCorrect: false, reason: '「じん」和「にん」有明確{めいかく}的使{つか}い分{わ}け。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「〜人{じん}」表示{ひょうじ}國籍{こくせき}或民族{みんぞく}，「〜人{にん}」表示{ひょうじ}人數{にんずう}。例{れい}：「日本人{にほんじん}」vs「三人{さんにん}」。',
            trapExplanation: '這是常見{よくある}混淆{こんどう}點{てん}，需要{じゅよう}清楚{はっきり}區分{くぶん}。',
            relatedRules: ['「じん」vs「にん」', '人{ひと}の讀法{よみかた}分類{ぶんるい}']
        },
        sourceItem: { value: 0, kanji: '人', reading: 'じん/にん' }
    },

    // ===== 更多錯誤辨識題 =====
    {
        id: 'people_error_3',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: true,
        stem: '以下哪個句子有錯誤？',
        stem_zh: '以下哪個句子有錯誤？',
        options: [
            { text: '七人で旅行しました', isCorrect: false, reason: '這是正確{せいかく}的。' },
            { text: '八人で会議をしました', isCorrect: false, reason: '這是正確{せいかく}的。' },
            { text: 'いちにんで住んでいます', isCorrect: true, reason: '錯誤{ごさ}！一人{ひとり}應{べき}該{べき}使用{しよう}訓讀{くんどく}「ひとり」。' },
            { text: '九人で食事をしました', isCorrect: false, reason: '這是正確{せいかく}的。' }
        ],
        correctIndex: 2,
        explanation: {
            correctRule: '一人{ひとり}固定{こてい}使用{しよう}訓讀{くんどく}「ひとり」，不能{ふのう}使用{しよう}音讀{おんどく}「いちにん」。',
            trapExplanation: '一人{ひとり}和二人{ふたり}是特殊{とくしゅ}訓讀{くんどく}。',
            relatedRules: ['一人{ひとり}の訓讀{くんどく}', '特殊{とくしゅ}讀法{よみかた}']
        },
        sourceItem: { value: 1, kanji: '一人', reading: 'ひとり' }
    },
    {
        id: 'people_error_4',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: true,
        stem: '以下哪個讀法正確？',
        stem_zh: '以下哪個讀法正確？',
        options: [
            { text: '十四人（じゅうしにん）', isCorrect: false, reason: '錯誤{ごさ}！避免{さける}「しにん」。' },
            { text: '二十四人（にじゅうしにん）', isCorrect: false, reason: '錯誤{ごさ}！避免{さける}「しにん」。' },
            { text: '四十四人（よんじゅうよにん）', isCorrect: true, reason: '正確{せいかく}！四十四人{よんじゅうよにん}使用{しよう}「よん」和「よ」。' },
            { text: '四人（しにん）', isCorrect: false, reason: '錯誤{ごさ}！四人{よにん}讀作{どくさ}「よにん」。' }
        ],
        correctIndex: 2,
        explanation: {
            correctRule: '任何{いかなる}包含{ふくむ}「四{し}」的人數{にんずう}都{すべて}避免{さける}「し」讀法{よみかた}，使用{しよう}「よ」或「よん」。',
            trapExplanation: '這題測試{テスト}對「四{し}」避諱{いひき}規則{きそく}的全面{ぜんめん}理解{りかい}。',
            relatedRules: ['四{し}の避諱{いひき}', '人數{にんずう}の讀法{よみかた}']
        },
        sourceItem: { value: 44, kanji: '四十四人', reading: 'よんじゅうよにん' }
    },

    // ===== 應用題 =====
    {
        id: 'people_apply_booking',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '電話預約',
        stem_zh: '電話預約',
        dialogue: {
            speakerA: 'お電話ありがとうございます。何名様でしょうか？',
            speakerB: '大人＿＿でお願いします。（六位大人）'
        },
        options: [
            { text: 'むにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「ろく」。' },
            { text: 'ろくにん', isCorrect: true, reason: '正確{せいかく}！六位{ろくにん}大人{おとな}預約{よやく}。' },
            { text: 'ろくじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'ろくめい', isCorrect: false, reason: '雖然{すいぜん}「名{めい}」也可{かのう}用，但回答{かいとう}通常{つうじょう}用「人{にん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「大人{おとな}六人{ろくにん}」是預約{よやく}時{とき}的常用{じょうよう}表達{ひょうたつ}。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '預約{よやく}用語{ようご}']
        },
        sourceItem: { value: 6, kanji: '六人', reading: 'ろくにん' }
    },
    {
        id: 'people_apply_census',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '日本の人口は約＿＿です。',
        stem_zh: '日本人口約一億兩千萬人。',
        options: [
            { text: 'いちおくにせんまんじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'いちおくにせんまんにん', isCorrect: true, reason: '正確{せいかく}！日本{にほん}人口{じんこう}約{やく}一億兩千萬人{いちおくにせんまんにん}。' },
            { text: 'ひとおくにせんまんにん', isCorrect: false, reason: '「一億{いちおく}」使用{しよう}音讀{おんどく}「いち」。' },
            { text: 'いちおくふたせんまんにん', isCorrect: false, reason: '「二千{にせん}」使用{しよう}音讀{おんどく}「に」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '大數字{だいすうじ}的人數{にんずう}也使用{しよう}「〜人{にん}」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '人口{じんこう}統計{とうけい}']
        },
        sourceItem: { value: 120000000, kanji: '一億二千万人', reading: 'いちおくにせんまんにん' }
    },

    // ===== 補充題達到100題 =====
    {
        id: 'people_extra_13',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '私たちのグループは＿＿です。',
        stem_zh: '我們的小組有十三個人。',
        options: [
            { text: 'じゅうみにん', isCorrect: false, reason: '十三{じゅうさん}使用{しよう}音讀{おんどく}。' },
            { text: 'じゅうさんにん', isCorrect: true, reason: '正確{せいかく}！小組{グループ}有十三個人{じゅうさんにん}。' },
            { text: 'じゅうさんじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'とさんにん', isCorrect: false, reason: '十使用{しよう}「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十三人{じゅうさんにん}」讀作{どくさ}「じゅうさんにん」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}']
        },
        sourceItem: { value: 13, kanji: '十三人', reading: 'じゅうさんにん' }
    },
    {
        id: 'people_extra_alone_2',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: true,
        stem: '獨自用餐',
        stem_zh: '獨自用餐',
        dialogue: {
            speakerA: '何名様ですか？',
            speakerB: '＿＿です。（一個人）'
        },
        options: [
            { text: 'いちにん', isCorrect: false, reason: '陷阱{かんけい}！一人{ひとり}使用{しよう}訓讀{くんどく}「ひとり」。' },
            { text: 'ひとり', isCorrect: true, reason: '正確{せいかく}！一個人{ひとり}用餐{しょくじ}。' },
            { text: 'いちめい', isCorrect: false, reason: '雖然{すいぜん}「名{めい}」也可{かのう}用，但通常{つうじょう}回答{かいとう}「ひとり」。' },
            { text: 'ひとにん', isCorrect: false, reason: '不混合{ふこんごう}訓讀{くんどく}與音讀{おんどく}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '一人{ひとり}固定{こてい}使用{しよう}訓讀{くんどく}「ひとり」。',
            trapExplanation: '即使{たとえ}在正式{せいしき}場合{ばあい}，一人{ひとり}也讀作{どくさ}「ひとり」。',
            relatedRules: ['一人{ひとり}の讀法{よみかた}', '餐廳{れすとらん}用語{ようご}']
        },
        sourceItem: { value: 1, kanji: '一人', reading: 'ひとり' }
    },
    {
        id: 'people_extra_couple_date',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: true,
        stem: '私たち＿＿は結婚しました。',
        stem_zh: '我們兩個人結婚了。',
        options: [
            { text: 'ににん', isCorrect: false, reason: '陷阱{かんけい}！二人{ふたり}使用{しよう}訓讀{くんどく}「ふたり」。' },
            { text: 'ふたり', isCorrect: true, reason: '正確{せいかく}！兩個人{ふたり}結婚{けっこん}了。' },
            { text: 'にじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'ふたにん', isCorrect: false, reason: '不混合{ふこんごう}訓讀{くんどく}與音讀{おんどく}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「私{わたし}たち二人{ふたり}」是情侶{カップル}或夫婦{ふうふ}常用{じょうよう}表達{ひょうたつ}。',
            trapExplanation: '二人{ふたり}固定{こてい}使用{しよう}訓讀{くんどく}「ふたり」。',
            relatedRules: ['二人{ふたり}の讀法{よみかた}', '結婚{けっこん}表達{ひょうたつ}']
        },
        sourceItem: { value: 2, kanji: '二人', reading: 'ふたり' }
    },
    {
        id: 'people_extra_work_team',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: 'プロジェクトチームは＿＿で構成されています。',
        stem_zh: '專案團隊由十個人組成。',
        options: [
            { text: 'とおにん', isCorrect: false, reason: '人數{にんずう}使用{しよう}音讀{おんどく}「じゅう」。' },
            { text: 'じゅうにん', isCorrect: true, reason: '正確{せいかく}！專案{プロジェクト}團隊{チーム}由十個人{じゅうにん}組成{こうせい}。' },
            { text: 'じゅうじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'じゅっにん', isCorrect: false, reason: '十人{じゅうにん}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十人{じゅうにん}で構成{こうせい}されています」表示{ひょうじ}「由十個人{じゅうにん}組成{こうせい}」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '團隊{チーム}用語{ようご}']
        },
        sourceItem: { value: 10, kanji: '十人', reading: 'じゅうにん' }
    },
    {
        id: 'people_extra_waiting',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '等候人數',
        stem_zh: '等候人數',
        dialogue: {
            speakerA: '今、何人待っていますか？',
            speakerB: '＿＿待っています。（三個人）'
        },
        options: [
            { text: 'みたり', isCorrect: false, reason: '現代{げんだい}使用{しよう}「さんにん」。' },
            { text: 'さんにん', isCorrect: true, reason: '正確{せいかく}！三個人{さんにん}在等候{まつ}。' },
            { text: 'さんじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'みにん', isCorrect: false, reason: '三人{さんにん}使用{しよう}音讀{おんどく}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三人{さんにん}待{ま}っています」表示{ひょうじ}「三個人{さんにん}在等候{まつ}」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '等候{たいき}表達{ひょうたつ}']
        },
        sourceItem: { value: 3, kanji: '三人', reading: 'さんにん' }
    },
    {
        id: 'people_extra_movie',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: true,
        stem: '電影票',
        stem_zh: '電影票',
        dialogue: {
            speakerA: '映画のチケットを何枚ですか？',
            speakerB: '＿＿分お願いします。（四個人份）'
        },
        options: [
            { text: 'しにん', isCorrect: false, reason: '陷阱{かんけい}！「しにん」是禁忌{きんき}讀法{よみかた}。' },
            { text: 'よにん', isCorrect: true, reason: '正確{せいかく}！四個人{よにん}份的電影票{チケット}。' },
            { text: 'よんにん', isCorrect: false, reason: '四人{よにん}使用{しよう}「よ」不是「よん」。' },
            { text: 'よったり', isCorrect: false, reason: '現代{げんだい}使用{しよう}「よにん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「四人{よにん}分{ぶん}」表示{ひょうじ}「四個人{よにん}份」。',
            trapExplanation: '四人{よにん}固定{こてい}使用{しよう}「よ」，避免{さける}「し」。',
            relatedRules: ['四人{よにん}の讀法{よみかた}', '購票{こうひょう}用語{ようご}']
        },
        sourceItem: { value: 4, kanji: '四人', reading: 'よにん' }
    },
    {
        id: 'people_extra_bus',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: 'バスには＿＿乗っていました。',
        stem_zh: '巴士上坐了二十個人。',
        options: [
            { text: 'はたちにん', isCorrect: false, reason: '「はたち」只用於{つかう}年齡{ねんれい}。' },
            { text: 'にじゅうにん', isCorrect: true, reason: '正確{せいかく}！巴士{バス}上坐了{のっていました}二十個人{にじゅうにん}。' },
            { text: 'にじゅうじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'ふたじゅうにん', isCorrect: false, reason: '二十{にじゅう}使用{しよう}音讀{おんどく}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「二十人{にじゅうにん}乗{の}っていました」表示{ひょうじ}「二十個人{にじゅうにん}坐著{のっていた}」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '交通{こうつう}用語{ようご}']
        },
        sourceItem: { value: 20, kanji: '二十人', reading: 'にじゅうにん' }
    },
    {
        id: 'people_extra_birthday',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '誕生日会には＿＿来ました。',
        stem_zh: '生日會來了十二個人。',
        options: [
            { text: 'じゅうふたり', isCorrect: false, reason: '十二{じゅうに}使用{しよう}音讀{おんどく}。' },
            { text: 'じゅうににん', isCorrect: true, reason: '正確{せいかく}！生日會{たんじょうびかい}來了{きました}十二個人{じゅうににん}。' },
            { text: 'じゅうにじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'とにににん', isCorrect: false, reason: '十使用{しよう}「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十二人{じゅうににん}来{き}ました」表示{ひょうじ}「十二個人{じゅうににん}來了」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '派對{パーティー}用語{ようご}']
        },
        sourceItem: { value: 12, kanji: '十二人', reading: 'じゅうににん' }
    },
    {
        id: 'people_extra_volunteer',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: 'ボランティアは＿＿集まりました。',
        stem_zh: '志工集合了三十五個人。',
        options: [
            { text: 'さんじゅういつにん', isCorrect: false, reason: '五{ご}使用{しよう}音讀{おんどく}「ご」。' },
            { text: 'さんじゅうごにん', isCorrect: true, reason: '正確{せいかく}！志工{ボランティア}集合{あつまりました}了三十五個人{さんじゅうごにん}。' },
            { text: 'さんじゅうごじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'みじゅうごにん', isCorrect: false, reason: '三十{さんじゅう}使用{しよう}音讀{おんどく}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三十五人{さんじゅうごにん}集{あつ}まりました」表示{ひょうじ}「三十五個人{さんじゅうごにん}集合{あつまった}了」。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '志工{ボランティア}活動{かつどう}']
        },
        sourceItem: { value: 35, kanji: '三十五人', reading: 'さんじゅうごにん' }
    },
    {
        id: 'people_extra_interview_2',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '求職面試',
        stem_zh: '求職面試',
        dialogue: {
            speakerA: '今回の採用は何人ですか？',
            speakerB: '＿＿採用する予定です。（兩個人）'
        },
        options: [
            { text: 'ににん', isCorrect: false, reason: '二人{ふたり}使用{しよう}訓讀{くんどく}「ふたり」。' },
            { text: 'ふたり', isCorrect: true, reason: '正確{せいかく}！預計{よてい}錄取{さいよう}兩個人{ふたり}。' },
            { text: 'にじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'ふたにん', isCorrect: false, reason: '不混合{ふこんごう}訓讀{くんどく}與音讀{おんどく}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「二人{ふたり}採用{さいよう}する予定{よてい}です」表示{ひょうじ}「預計{よてい}錄取{さいよう}兩個人{ふたり}」。',
            relatedRules: ['二人{ふたり}の讀法{よみかた}', '求職{きゅうしょく}用語{ようご}']
        },
        sourceItem: { value: 2, kanji: '二人', reading: 'ふたり' }
    },
    {
        id: 'people_extra_school',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: 'この学校には＿＿の生徒がいます。',
        stem_zh: '這所學校有八百個學生。',
        options: [
            { text: 'はっぴゃくじん', isCorrect: false, reason: '「じん」不用於{もちいず}人數{にんずう}。' },
            { text: 'はっぴゃくにん', isCorrect: true, reason: '正確{せいかく}！學校{がっこう}有八百個{はっぴゃくにん}學生{せいと}。' },
            { text: 'やひゃくにん', isCorrect: false, reason: '八百{はっぴゃく}使用{しよう}音讀{おんどく}。' },
            { text: 'はちひゃくにん', isCorrect: false, reason: '八百{はっぴゃく}促音化{そくおんか}為「はっぴゃく」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八百人{はっぴゃくにん}」讀作{どくさ}「はっぴゃくにん」（八百{はっぴゃく}促音化{そくおんか}）。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '學校{がっこう}用語{ようご}']
        },
        sourceItem: { value: 800, kanji: '八百人', reading: 'はっぴゃくにん' }
    },
    {
        id: 'people_extra_compare_final',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: true,
        stem: '以下哪個組合的讀法都正確？',
        stem_zh: '以下哪個組合的讀法都正確？',
        options: [
            { text: '一人(ひとり)、二人(ふたり)、三人(さんにん)', isCorrect: true, reason: '正確{せいかく}！這三個{みっつ}讀法{よみかた}都{すべて}正確{せいかく}。' },
            { text: '一人(いちにん)、二人(ににん)、三人(さんにん)', isCorrect: false, reason: '一人{ひとり}、二人{ふたり}使用{しよう}訓讀{くんどく}。' },
            { text: '一人(ひとり)、二人(ににん)、三人(さんにん)', isCorrect: false, reason: '二人{ふたり}使用{しよう}訓讀{くんどく}「ふたり」。' },
            { text: '一人(いちにん)、二人(ふたり)、三人(みにん)', isCorrect: false, reason: '一人{ひとり}使用{しよう}訓讀{くんどく}，三人{さんにん}使用{しよう}音讀{おんどく}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '1人{ひとり}（ひとり）、2人{ふたり}（ふたり）使用{しよう}訓讀{くんどく}，3人{さんにん}開始{はじめ}使用{しよう}音讀{おんどく}（さんにん）。',
            trapExplanation: '這是人數{にんずう}量詞{りょうし}最基本{さいきほん}的規則{きそく}。',
            relatedRules: ['訓讀{くんどく}vs音讀{おんどく}', '人數{にんずう}の基本{きほん}規則{きそく}']
        },
        sourceItem: { value: 0, kanji: '一人・二人・三人', reading: 'ひとり・ふたり・さんにん' }
    },
    {
        id: 'people_extra_final_review',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「何人」（詢問人數）的正確讀法是？',
        stem_zh: '「何人」（詢問人數）的正確讀法是？',
        options: [
            { text: 'なんにん', isCorrect: true, reason: '正確{せいかく}！詢問{たずねる}人數{にんずう}時{とき}讀作{どくさ}「なんにん」。' },
            { text: 'なにじん', isCorrect: false, reason: '「なにじん」是詢問{たずねる}「什麼{なに}人{じん}」（國籍{こくせき}）。' },
            { text: 'いくにん', isCorrect: false, reason: '人數{にんずう}疑問詞{ぎもんし}使用{しよう}「なんにん」。' },
            { text: 'どのにん', isCorrect: false, reason: '這不是正確{せいかく}疑問詞{ぎもんし}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何人{なんにん}」（なんにん）詢問{たずねる}人數{にんずう}，「何人{なにじん}」（なにじん）詢問{たずねる}國籍{こくせき}。',
            relatedRules: ['「なんにん」vs「なにじん」', '疑問詞{ぎもんし}の使{つか}い分{わ}け']
        },
        sourceItem: { value: 0, kanji: '何人', reading: 'なんにん' }
    }
];
