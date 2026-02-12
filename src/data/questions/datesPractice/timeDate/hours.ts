import { DatesPracticeQuestion } from '../types';

// 小時練習題 (1時〜12時)
// 每個重要小時3題：發音題、單句敘述題、對話題
// 特別注意：4時(よじ)、7時(しちじ)、9時(くじ)的特殊讀法

export const hourQuestions: DatesPracticeQuestion[] = [
    // ===== 1時 的三題 =====
    {
        id: 'hour_1_pron',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「一時」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「一時」的正確讀音是？',
        options: [
            { text: 'いちじ', isCorrect: true, reason: '正確！「一時{いちじ}」讀作「いちじ」。' },
            { text: 'ひとじ', isCorrect: false, reason: '時間使用音讀「いち」不是訓讀。' },
            { text: 'いっじ', isCorrect: false, reason: '不促音化，是「いちじ」。' },
            { text: 'いちとき', isCorrect: false, reason: '「とき」是「時間/時候」的訓讀，小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一時{いちじ}」讀作「いちじ」，使用音讀。',
            relatedRules: ['小時的讀法', '「じ」的使用']
        },
        sourceItem: { value: 1, kanji: '一時', reading: 'いちじ' }
    },
    {
        id: 'hour_1_sent',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '会議は＿＿に始まります。',
        stem_zh: '會議在一點開始。',
        options: [
            { text: 'ひとじ', isCorrect: false, reason: '小時使用音讀。' },
            { text: 'いちじ', isCorrect: true, reason: '正確！會議在一時{いちじ}開始。' },
            { text: 'いっとき', isCorrect: false, reason: '「いっとき」是「暫時」的意思。' },
            { text: 'ひとつじ', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「一時{いちじ}に」表示在一點時。',
            relatedRules: ['時間表達', '「〜に」的使用']
        },
        sourceItem: { value: 1, kanji: '一時', reading: 'いちじ' }
    },
    {
        id: 'hour_1_dial',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '今何時ですか？',
        stem_zh: '現在幾點？',
        dialogue: {
            speakerA: '今何時ですか？',
            speakerB: '＿＿です。（一點）'
        },
        options: [
            { text: 'ひとじ', isCorrect: false, reason: '小時使用音讀。' },
            { text: 'いちじ', isCorrect: true, reason: '正確！現在是一點。' },
            { text: 'いっとき', isCorrect: false, reason: '這不是時間讀法。' },
            { text: 'いちとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '回答「何時」時，一點讀作「いちじ」。',
            relatedRules: ['時間的質問與回答', '「何時」的使用']
        },
        sourceItem: { value: 1, kanji: '一時', reading: 'いちじ' }
    },

    // ===== 4時 的三題（特殊讀法：よじ） =====
    {
        id: 'hour_4_pron',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: true,
        stem: '「四時」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「四時」的正確讀音是？',
        options: [
            { text: 'よじ', isCorrect: true, reason: '正確！「四時{よじ}」讀作「よじ」，固定讀法。' },
            { text: 'よんじ', isCorrect: false, reason: '陷阱！四時{よじ}固定讀「よじ」，禁止讀「よんじ」。' },
            { text: 'しじ', isCorrect: false, reason: '陷阱！雖然四月讀「しがつ」，但四時{よじ}讀「よじ」。' },
            { text: 'よっじ', isCorrect: false, reason: '不需要促音，是「よじ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四時{よじ}」固定讀作「よじ」，禁止使用「よんじ」或「しじ」。',
            trapExplanation: '這是陷阱題。注意四月讀「しがつ」，但四時{よじ}讀「よじ」，規則不同！',
            relatedRules: ['四時{よじ}的特殊讀法', '四月vs四時{よじ}的區別']
        },
        sourceItem: { value: 4, kanji: '四時', reading: 'よじ' }
    },
    {
        id: 'hour_4_sent',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: true,
        stem: '授業は＿＿に終わります。',
        stem_zh: '課堂在四點結束。',
        options: [
            { text: 'よんじ', isCorrect: false, reason: '陷阱！四時{よじ}讀「よじ」，不是「よんじ」。' },
            { text: 'よじ', isCorrect: true, reason: '正確！課堂在四時{よじ}結束。' },
            { text: 'しじ', isCorrect: false, reason: '四時{よじ}讀「よ」不是「し」。' },
            { text: 'よっじ', isCorrect: false, reason: '不需要促音。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「四時{よじ}に」表示在四點時。',
            trapExplanation: '四時{よじ}是固定讀法「よじ」，這是需要特別記憶の例外。',
            relatedRules: ['四時{よじ}的讀法', '時間表達']
        },
        sourceItem: { value: 4, kanji: '四時', reading: 'よじ' }
    },
    {
        id: 'hour_4_dial',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: true,
        stem: '映画は何時からですか？',
        stem_zh: '電影幾點開始？',
        dialogue: {
            speakerA: '映画は何時からですか？',
            speakerB: '＿＿からです。（四點）'
        },
        options: [
            { text: 'よんじ', isCorrect: false, reason: '陷阱！四時{よじ}固定讀「よじ」。' },
            { text: 'よじ', isCorrect: true, reason: '正確！電影從四時{よじ}開始。' },
            { text: 'しじ', isCorrect: false, reason: '四時{よじ}讀「よ」。' },
            { text: 'よっじ', isCorrect: false, reason: '不需要促音。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「四時{よじ}から」表示從四點開始。',
            trapExplanation: '無論什麼情境，四時{よじ}都固定讀「よじ」。',
            relatedRules: ['四時{よじ}の固定讀法', '「〜から」的使用']
        },
        sourceItem: { value: 4, kanji: '四時', reading: 'よじ' }
    },

    // ===== 7時 的三題（特殊讀法：しちじ） =====
    {
        id: 'hour_7_pron',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: true,
        stem: '「七時」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「七時」的正確讀音是？',
        options: [
            { text: 'しちじ', isCorrect: true, reason: '正確！「七時{しちじ}」讀作「しちじ」。' },
            { text: 'ななじ', isCorrect: false, reason: '陷阱！七時{しちじ}讀「しちじ」，很少使用「ななじ」。' },
            { text: 'なのじ', isCorrect: false, reason: '「なの」是日期七日的讀法。' },
            { text: 'しつじ', isCorrect: false, reason: '是「しちじ」不是「しつじ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七時{しちじ}」讀作「しちじ」，這是標準讀法。',
            trapExplanation: '這是陷阱題。雖然日常數字常用「なな」，但時間慣用「しちじ」。注意與「一時」的發音區別。',
            relatedRules: ['七時{しちじ}的讀法', '「しち」vs「なな」的使用場景']
        },
        sourceItem: { value: 7, kanji: '七時', reading: 'しちじ' }
    },
    {
        id: 'hour_7_sent',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: true,
        stem: '朝＿＿に起きます。',
        stem_zh: '早上七點起床。',
        options: [
            { text: 'ななじ', isCorrect: false, reason: '陷阱！七時{しちじ}慣用「しちじ」。' },
            { text: 'しちじ', isCorrect: true, reason: '正確！早上七時{しちじ}起床。' },
            { text: 'なのじ', isCorrect: false, reason: '「なの」是日期讀法。' },
            { text: 'しつじ', isCorrect: false, reason: '是「しちじ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「朝七時{しちじ}に」表示早上七點。',
            trapExplanation: '時間表達慣用「しちじ」而非「ななじ」。',
            relatedRules: ['七時{しちじ}的讀法', '日常時間表達']
        },
        sourceItem: { value: 7, kanji: '七時', reading: 'しちじ' }
    },
    {
        id: 'hour_7_dial',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '何時に仕事が終わりますか？',
        stem_zh: '幾點下班？',
        dialogue: {
            speakerA: '何時に仕事が終わりますか？',
            speakerB: '＿＿です。（七點）'
        },
        options: [
            { text: 'ななじ', isCorrect: false, reason: '七時{しちじ}慣用「しちじ」。' },
            { text: 'しちじ', isCorrect: true, reason: '正確！七點下班。' },
            { text: 'なのじ', isCorrect: false, reason: '「なの」用於日期。' },
            { text: 'しつじ', isCorrect: false, reason: '是「しちじ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '回答下班時間，七時{しちじ}讀作「しちじ」。',
            relatedRules: ['七時{しちじ}的讀法', '工作時間表達']
        },
        sourceItem: { value: 7, kanji: '七時', reading: 'しちじ' }
    },

    // ===== 9時 的三題（特殊讀法：くじ） =====
    {
        id: 'hour_9_pron',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: true,
        stem: '「九時」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「九時」的正確讀音是？',
        options: [
            { text: 'くじ', isCorrect: true, reason: '正確！「九時{くじ}」讀作「くじ」，固定讀法。' },
            { text: 'きゅうじ', isCorrect: false, reason: '陷阱！九時{くじ}固定讀「くじ」，禁止讀「きゅうじ」。' },
            { text: 'ここのじ', isCorrect: false, reason: '「ここの」是日期九日的讀法。' },
            { text: 'きゅじ', isCorrect: false, reason: '是「くじ」不是「きゅじ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九時{くじ}」固定讀作「くじ」，與九月「くがつ」一樣使用「く」。',
            trapExplanation: '這是陷阱題。雖然日常數字多讀「きゅう」以避諱「苦」，但時間固定使用「くじ」。',
            relatedRules: ['九時{くじ}的特殊讀法', '九月與九時{くじ}の共通點']
        },
        sourceItem: { value: 9, kanji: '九時', reading: 'くじ' }
    },
    {
        id: 'hour_9_sent',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: true,
        stem: '仕事は＿＿に始まります。',
        stem_zh: '工作九點開始。',
        options: [
            { text: 'きゅうじ', isCorrect: false, reason: '陷阱！九時{くじ}固定讀「くじ」。' },
            { text: 'くじ', isCorrect: true, reason: '正確！工作在九時{くじ}開始。' },
            { text: 'ここのじ', isCorrect: false, reason: '「ここの」是日期讀法。' },
            { text: 'きゅじ', isCorrect: false, reason: '是「くじ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「九時{くじ}に」表示在九點時。',
            trapExplanation: '九時{くじ}是固定讀法「くじ」，這是需要特別記憶の例外。',
            relatedRules: ['九時{くじ}的讀法', '工作時間表達']
        },
        sourceItem: { value: 9, kanji: '九時', reading: 'くじ' }
    },
    {
        id: 'hour_9_dial',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: true,
        stem: '何時に来ますか？',
        stem_zh: '你幾點來？',
        dialogue: {
            speakerA: '明日何時に来ますか？',
            speakerB: '＿＿に行きます。（九點）'
        },
        options: [
            { text: 'きゅうじ', isCorrect: false, reason: '陷阱！九時{くじ}固定讀「くじ」。' },
            { text: 'くじ', isCorrect: true, reason: '正確！明天九點去。' },
            { text: 'ここのじ', isCorrect: false, reason: '「ここの」用於日期。' },
            { text: 'きゅじ', isCorrect: false, reason: '是「くじ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「九時{くじ}に」表示在九點時去。',
            trapExplanation: '無論什麼情境，九時{くじ}都固定讀「くじ」。',
            relatedRules: ['九時{くじ}の固定讀法', '約定時間的表達']
        },
        sourceItem: { value: 9, kanji: '九時', reading: 'くじ' }
    },

    // ===== 2時 的三題 =====
    {
        id: 'hour_2_pron',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二時」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「二時」的正確讀音是？',
        options: [
            { text: 'にじ', isCorrect: true, reason: '正確！「二時{にじ}」讀作「にじ」。' },
            { text: 'ふたじ', isCorrect: false, reason: '時間使用音讀「に」不是訓讀。' },
            { text: 'につじ', isCorrect: false, reason: '是「にじ」。' },
            { text: 'にとき', isCorrect: false, reason: '小時讀「じ」不是「とき」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二時{にじ}」讀作「にじ」，使用音讀。',
            relatedRules: ['小時的讀法', '「じ」的使用']
        },
        sourceItem: { value: 2, kanji: '二時', reading: 'にじ' }
    },
    {
        id: 'hour_2_sent',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '午後＿＿に昼寝をします。',
        stem_zh: '下午兩點午睡。',
        options: [
            { text: 'ふたじ', isCorrect: false, reason: '時間使用音讀。' },
            { text: 'にじ', isCorrect: true, reason: '正確！下午兩點午睡。' },
            { text: 'にいじ', isCorrect: false, reason: '是「にじ」。' },
            { text: 'ふたつじ', isCorrect: false, reason: '時間不使用「ふたつ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「午後二時{にじ}」表示下午兩點。',
            relatedRules: ['時間表達', '「午後」的使用']
        },
        sourceItem: { value: 2, kanji: '二時', reading: 'にじ' }
    },
    {
        id: 'hour_2_dial',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '昼休みは何時までですか？',
        stem_zh: '午休到幾點？',
        dialogue: {
            speakerA: '昼休みは何時までですか？',
            speakerB: '＿＿までです。（兩點）'
        },
        options: [
            { text: 'ふたじ', isCorrect: false, reason: '時間使用音讀。' },
            { text: 'にじ', isCorrect: true, reason: '正確！午休到兩點。' },
            { text: 'にいじ', isCorrect: false, reason: '是「にじ」。' },
            { text: 'ふたつじ', isCorrect: false, reason: '時間使用「にじ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「二時{にじ}まで」表示到兩點為止。',
            relatedRules: ['時間表達', '「〜まで」的使用']
        },
        sourceItem: { value: 2, kanji: '二時', reading: 'にじ' }
    },

    // ===== 3時 的三題 =====
    {
        id: 'hour_3_pron',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「三時」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「三時」的正確讀音是？',
        options: [
            { text: 'さんじ', isCorrect: true, reason: '正確！「三時{さんじ}」讀作「さんじ」。' },
            { text: 'みじ', isCorrect: false, reason: '時間使用音讀「さん」不是「み」。' },
            { text: 'さんとき', isCorrect: false, reason: '小時讀「じ」不是「とき」。' },
            { text: 'みっじ', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三時{さんじ}」讀作「さんじ」，使用音讀。',
            relatedRules: ['小時的讀法', '「じ」的使用']
        },
        sourceItem: { value: 3, kanji: '三時', reading: 'さんじ' }
    },
    {
        id: 'hour_3_sent',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: 'おやつは＿＿に食べます。',
        stem_zh: '點心在三點吃。',
        options: [
            { text: 'みじ', isCorrect: false, reason: '時間使用音讀。' },
            { text: 'さんじ', isCorrect: true, reason: '正確！點心在三時{さんじ}吃。日本の「三時{さんじ}のおやつ」是有名の習慣。' },
            { text: 'みっとき', isCorrect: false, reason: '小時讀「じ」。' },
            { text: 'さんとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三時{さんじ}のおやつ」是日本の習慣，下午三點吃點心。',
            relatedRules: ['時間表達', '日本の食文化']
        },
        sourceItem: { value: 3, kanji: '三時', reading: 'さんじ' }
    },
    {
        id: 'hour_3_dial',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: 'ケーキを食べましょうか？',
        stem_zh: '要不要吃蛋糕？',
        dialogue: {
            speakerA: 'ケーキを食べましょうか？',
            speakerB: 'はい、＿＿になったら食べましょう。（三點）'
        },
        options: [
            { text: 'みじ', isCorrect: false, reason: '時間使用音讀。' },
            { text: 'さんじ', isCorrect: true, reason: '正確！三點到了就吃。' },
            { text: 'みっじ', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'さんとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三時{さんじ}になったら」表示「等到三點的話」。',
            relatedRules: ['時間表達', '「〜になったら」の用法']
        },
        sourceItem: { value: 3, kanji: '三時', reading: 'さんじ' }
    },

    // ===== 6時 的三題 =====
    {
        id: 'hour_6_pron',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「六時」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「六時」的正確讀音是？',
        options: [
            { text: 'ろくじ', isCorrect: true, reason: '正確！「六時{ろくじ}」讀作「ろくじ」。' },
            { text: 'むじ', isCorrect: false, reason: '時間使用音讀「ろく」不是「む」。' },
            { text: 'ろっじ', isCorrect: false, reason: '六時{ろくじ}不促音化，是「ろくじ」。' },
            { text: 'むいじ', isCorrect: false, reason: '「むい」是日期六日的讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六時{ろくじ}」讀作「ろくじ」，不促音化。',
            relatedRules: ['小時的讀法', '「ろく」不促音化']
        },
        sourceItem: { value: 6, kanji: '六時', reading: 'ろくじ' }
    },
    {
        id: 'hour_6_sent',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '毎朝＿＿に起きます。',
        stem_zh: '每天早上六點起床。',
        options: [
            { text: 'むじ', isCorrect: false, reason: '時間使用音讀「ろく」。' },
            { text: 'ろくじ', isCorrect: true, reason: '正確！每天早上六時{ろくじ}起床。' },
            { text: 'ろっじ', isCorrect: false, reason: '六時{ろくじ}不促音化。' },
            { text: 'むいじ', isCorrect: false, reason: '「むい」用於日期。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「毎朝六時{ろくじ}に」表示每天早上六點。',
            relatedRules: ['時間表達', '日常習慣']
        },
        sourceItem: { value: 6, kanji: '六時', reading: 'ろくじ' }
    },
    {
        id: 'hour_6_dial',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '晩ご飯は何時に食べますか？',
        stem_zh: '晚餐幾點吃？',
        dialogue: {
            speakerA: '晩ご飯は何時に食べますか？',
            speakerB: '＿＿ごろに食べます。（六點）'
        },
        options: [
            { text: 'むじ', isCorrect: false, reason: '時間使用音讀「ろく」。' },
            { text: 'ろくじ', isCorrect: true, reason: '正確！晚餐在六點左右吃。' },
            { text: 'ろっじ', isCorrect: false, reason: '六時{ろくじ}不促音化。' },
            { text: 'りくじ', isCorrect: false, reason: '是「ろくじ」不是「りくじ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「六時{ろくじ}ごろ」表示六點左右。',
            relatedRules: ['時間表達', '「〜ごろ」的使用']
        },
        sourceItem: { value: 6, kanji: '六時', reading: 'ろくじ' }
    },

    // ===== 10時 的三題 =====
    {
        id: 'hour_10_pron',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十時」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十時」的正確讀音是？',
        options: [
            { text: 'じゅうじ', isCorrect: true, reason: '正確！「十時{じゅうじ}」讀作「じゅうじ」。' },
            { text: 'とおじ', isCorrect: false, reason: '時間使用音讀「じゅう」不是訓讀「とお」。' },
            { text: 'じゅっじ', isCorrect: false, reason: '十時{じゅうじ}不促音化，是「じゅうじ」。' },
            { text: 'じゅじ', isCorrect: false, reason: '需要「う」，是「じゅうじ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十時{じゅうじ}」讀作「じゅうじ」，不促音化。',
            relatedRules: ['小時的讀法', '「じゅう」的發音']
        },
        sourceItem: { value: 10, kanji: '十時', reading: 'じゅうじ' }
    },
    {
        id: 'hour_10_sent',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '会社は＿＿に閉まります。',
        stem_zh: '公司十點關門。',
        options: [
            { text: 'とおじ', isCorrect: false, reason: '時間使用音讀「じゅう」。' },
            { text: 'じゅうじ', isCorrect: true, reason: '正確！公司在十時{じゅうじ}關門。' },
            { text: 'じゅっじ', isCorrect: false, reason: '十時{じゅうじ}不促音化。' },
            { text: 'じゅじ', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十時{じゅうじ}に」表示在十點時。',
            relatedRules: ['時間表達', '營業時間']
        },
        sourceItem: { value: 10, kanji: '十時', reading: 'じゅうじ' }
    },
    {
        id: 'hour_10_dial',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '何時に寝ますか？',
        stem_zh: '你幾點睡覺？',
        dialogue: {
            speakerA: '何時に寝ますか？',
            speakerB: '＿＿ごろに寝ます。（十點）'
        },
        options: [
            { text: 'とおじ', isCorrect: false, reason: '時間使用音讀「じゅう」。' },
            { text: 'じゅうじ', isCorrect: true, reason: '正確！十點左右睡覺。' },
            { text: 'じゅっじ', isCorrect: false, reason: '十時{じゅうじ}不促音化。' },
            { text: 'じゅじ', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十時{じゅうじ}ごろに寝ます」表示十點左右睡覺。',
            relatedRules: ['時間表達', '日常習慣']
        },
        sourceItem: { value: 10, kanji: '十時', reading: 'じゅうじ' }
    },

    // ===== 12時 的三題 =====
    {
        id: 'hour_12_pron',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十二時」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十二時」的正確讀音是？',
        options: [
            { text: 'じゅうにじ', isCorrect: true, reason: '正確！「十二時{じゅうにじ}」讀作「じゅうにじ」。' },
            { text: 'じゅうふたじ', isCorrect: false, reason: '時間使用音讀「に」不是「ふた」。' },
            { text: 'じゅにじ', isCorrect: false, reason: '需要「う」，是「じゅうにじ」。' },
            { text: 'とおにじ', isCorrect: false, reason: '「十」使用音讀「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十二時{じゅうにじ}」讀作「じゅうにじ」，是正午{しょうご}或午夜。',
            relatedRules: ['小時的讀法', '正午{しょうご}與午夜{ごや}']
        },
        sourceItem: { value: 12, kanji: '十二時', reading: 'じゅうにじ' }
    },
    {
        id: 'hour_12_sent',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '昼ご飯は＿＿に食べます。',
        stem_zh: '午餐在十二點吃。',
        options: [
            { text: 'じゅうふたじ', isCorrect: false, reason: '時間使用音讀。' },
            { text: 'じゅうにじ', isCorrect: true, reason: '正確！午餐在十二時{じゅうにじ}吃。' },
            { text: 'じゅにじ', isCorrect: false, reason: '需要「う」。' },
            { text: 'じゅうにとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十二時{じゅうにじ}に」是午餐時間，即正午。',
            relatedRules: ['時間表達', '用餐時間']
        },
        sourceItem: { value: 12, kanji: '十二時', reading: 'じゅうにじ' }
    },
    {
        id: 'hour_12_dial',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '何時に昼休みですか？',
        stem_zh: '幾點午休？',
        dialogue: {
            speakerA: '何時に昼休みですか？',
            speakerB: '＿＿からです。（十二點）'
        },
        options: [
            { text: 'じゅうふたじ', isCorrect: false, reason: '時間使用音讀。' },
            { text: 'じゅうにじ', isCorrect: true, reason: '正確！從十二點開始午休。' },
            { text: 'じゅにじ', isCorrect: false, reason: '需要「う」。' },
            { text: 'とおにじ', isCorrect: false, reason: '「十」使用「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十二時{じゅうにじ}から」表示從十二點開始。',
            relatedRules: ['時間表達', '午休時間']
        },
        sourceItem: { value: 12, kanji: '十二時', reading: 'じゅうにじ' }
    },

    // ===== 追加練習題：時間應用情境 =====
    {
        id: 'hour_app_01',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '朝＿＿に起きます。',
        stem_zh: '早上六點起床。',
        options: [
            { text: 'ろくじ', isCorrect: true, reason: '正確！六時讀「ろくじ」。' },
            { text: 'むっつじ', isCorrect: false, reason: '時間使用音讀「ろく」。' },
            { text: 'ろっじ', isCorrect: false, reason: '六時不促音化。' },
            { text: 'むいか', isCorrect: false, reason: '「むいか」是日期，不是時間。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六時」讀「ろくじ」，使用音讀。',
            relatedRules: ['小時的讀法', '日常作息']
        },
        sourceItem: { value: 6, kanji: '六時', reading: 'ろくじ' }
    },
    {
        id: 'hour_app_02',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '映画は何時からですか？',
        stem_zh: '電影幾點開始？',
        dialogue: {
            speakerA: '映画は何時からですか？',
            speakerB: '＿＿からです。（三點）'
        },
        options: [
            { text: 'さんじ', isCorrect: true, reason: '正確！三時讀「さんじ」。' },
            { text: 'みっつじ', isCorrect: false, reason: '時間使用音讀「さん」。' },
            { text: 'みじ', isCorrect: false, reason: '不存在這個讀法。' },
            { text: 'さんとき', isCorrect: false, reason: '小時讀「じ」不是「とき」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三時」讀「さんじ」，電影開場時間。',
            relatedRules: ['小時的讀法', '娛樂日程']
        },
        sourceItem: { value: 3, kanji: '三時', reading: 'さんじ' }
    },
    {
        id: 'hour_app_03',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: true,
        stem: '飛行機は午後＿＿に出発します。',
        stem_zh: '飛機下午四點出發。',
        options: [
            { text: 'よじ', isCorrect: true, reason: '正確！四時固定讀「よじ」。' },
            { text: 'よんじ', isCorrect: false, reason: '陷阱！四時禁止讀「よんじ」。' },
            { text: 'しじ', isCorrect: false, reason: '四時讀「よじ」不是「しじ」。' },
            { text: 'よっじ', isCorrect: false, reason: '不需要促音。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四時」固定讀「よじ」，是特殊讀法。',
            trapExplanation: '四時禁止讀「よんじ」或「しじ」。',
            relatedRules: ['四時的特殊讀法', '航班時間']
        },
        sourceItem: { value: 4, kanji: '四時', reading: 'よじ' }
    },
    {
        id: 'hour_app_04',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '晩ご飯は何時ですか？',
        stem_zh: '晚餐幾點？',
        dialogue: {
            speakerA: '晩ご飯は何時に食べますか？',
            speakerB: '＿＿ごろです。（七點）'
        },
        options: [
            { text: 'しちじ', isCorrect: true, reason: '正確！七時讀「しちじ」。' },
            { text: 'ななじ', isCorrect: false, reason: '七時固定讀「しちじ」。' },
            { text: 'なのか', isCorrect: false, reason: '「なのか」是日期。' },
            { text: 'ひちじ', isCorrect: false, reason: '不存在這個讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七時」讀「しちじ」，是特殊讀法。',
            relatedRules: ['七時的讀法', '用餐時間']
        },
        sourceItem: { value: 7, kanji: '七時', reading: 'しちじ' }
    },
    {
        id: 'hour_app_05',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '銀行は＿＿に開きます。',
        stem_zh: '銀行九點開門。',
        options: [
            { text: 'くじ', isCorrect: true, reason: '正確！九時讀「くじ」。' },
            { text: 'きゅうじ', isCorrect: false, reason: '九時固定讀「くじ」。' },
            { text: 'ここのか', isCorrect: false, reason: '「ここのか」是日期。' },
            { text: 'きゅうとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九時」讀「くじ」，是特殊讀法。',
            relatedRules: ['九時的讀法', '營業時間']
        },
        sourceItem: { value: 9, kanji: '九時', reading: 'くじ' }
    },
    {
        id: 'hour_app_06',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '授業は何時に終わりますか？',
        stem_zh: '課幾點結束？',
        dialogue: {
            speakerA: '授業は何時に終わりますか？',
            speakerB: '＿＿に終わります。（五點）'
        },
        options: [
            { text: 'ごじ', isCorrect: true, reason: '正確！五時讀「ごじ」。' },
            { text: 'いつか', isCorrect: false, reason: '「いつか」是日期。' },
            { text: 'いつつじ', isCorrect: false, reason: '時間使用音讀。' },
            { text: 'ごとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五時」讀「ごじ」，使用音讀。',
            relatedRules: ['小時的讀法', '課程時間']
        },
        sourceItem: { value: 5, kanji: '五時', reading: 'ごじ' }
    },
    {
        id: 'hour_app_07',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '会社は＿＿に始まります。',
        stem_zh: '公司八點開始上班。',
        options: [
            { text: 'はちじ', isCorrect: true, reason: '正確！八時讀「はちじ」。' },
            { text: 'やっじ', isCorrect: false, reason: '八時不促音化。' },
            { text: 'ようか', isCorrect: false, reason: '「ようか」是日期。' },
            { text: 'はちとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八時」讀「はちじ」，使用音讀。',
            relatedRules: ['小時的讀法', '上班時間']
        },
        sourceItem: { value: 8, kanji: '八時', reading: 'はちじ' }
    },
    {
        id: 'hour_app_08',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '店は何時まで開いていますか？',
        stem_zh: '店開到幾點？',
        dialogue: {
            speakerA: '店は何時まで開いていますか？',
            speakerB: '＿＿までです。（十一點）'
        },
        options: [
            { text: 'じゅういちじ', isCorrect: true, reason: '正確！十一時讀「じゅういちじ」。' },
            { text: 'とおいちじ', isCorrect: false, reason: '十使用音讀「じゅう」。' },
            { text: 'じゅいちじ', isCorrect: false, reason: '需要「う」。' },
            { text: 'といちじ', isCorrect: false, reason: '讀法錯誤。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十一時」讀「じゅういちじ」。',
            relatedRules: ['小時的讀法', '營業時間']
        },
        sourceItem: { value: 11, kanji: '十一時', reading: 'じゅういちじ' }
    },

    // ===== 特殊小時辨析題 =====
    {
        id: 'hour_special_01',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: true,
        stem: '「四時」「七時」「九時」的共同點是？',
        stem_zh: '「四時」「七時」「九時」的共同點是？',
        options: [
            { text: '都是特殊讀法', isCorrect: true, reason: '正確！よじ、しちじ、くじ都是例外。' },
            { text: '都用音讀', isCorrect: false, reason: '這三個不用標準音讀。' },
            { text: '都促音化', isCorrect: false, reason: '它們沒有促音化。' },
            { text: '都用訓讀', isCorrect: false, reason: '它們不是訓讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '4時、7時、9時是小時讀法的三大例外。',
            trapExplanation: '記住：よじ、しちじ、くじ，避免錯誤讀法。',
            relatedRules: ['特殊小時讀法', '4・7・9の例外']
        },
        sourceItem: { value: 'special', kanji: '四時・七時・九時', reading: 'よじ・しちじ・くじ' }
    },
    {
        id: 'hour_special_02',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: true,
        stem: '「四月」和「四時」的「四」讀法相同嗎？',
        stem_zh: '「四月」和「四時」的「四」讀法相同嗎？',
        options: [
            { text: '不同：し vs よ', isCorrect: true, reason: '正確！四月讀「しがつ」，四時讀「よじ」。' },
            { text: '相同：都是し', isCorrect: false, reason: '四時讀「よ」不是「し」。' },
            { text: '相同：都是よ', isCorrect: false, reason: '四月讀「し」不是「よ」。' },
            { text: '相同：都是よん', isCorrect: false, reason: '兩者都不讀「よん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '四月讀「しがつ」，四時讀「よじ」，規則不同。',
            trapExplanation: '這是常見混淆點，需要分別記憶。',
            relatedRules: ['四的讀法', '月份vs時間']
        },
        sourceItem: { value: 4, kanji: '四月/四時', reading: 'しがつ/よじ' }
    },
    {
        id: 'hour_special_03',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: true,
        stem: '「七月」和「七時」的「七」讀法相同嗎？',
        stem_zh: '「七月」和「七時」的「七」讀法相同嗎？',
        options: [
            { text: '相同：都是しち', isCorrect: true, reason: '正確！七月「しちがつ」，七時「しちじ」。' },
            { text: '不同：なな vs しち', isCorrect: false, reason: '七月也讀「しち」。' },
            { text: '不同：しち vs なな', isCorrect: false, reason: '七時讀「しち」不是「なな」。' },
            { text: '相同：都是なな', isCorrect: false, reason: '兩者都讀「しち」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '七月和七時的「七」都讀「しち」。',
            trapExplanation: '與「四」不同，「七」在月份和時間都用「しち」。',
            relatedRules: ['七的讀法', '月份vs時間']
        },
        sourceItem: { value: 7, kanji: '七月/七時', reading: 'しちがつ/しちじ' }
    },
    {
        id: 'hour_special_04',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: true,
        stem: '「九月」和「九時」的「九」讀法相同嗎？',
        stem_zh: '「九月」和「九時」的「九」讀法相同嗎？',
        options: [
            { text: '相同：都是く', isCorrect: true, reason: '正確！九月「くがつ」，九時「くじ」。' },
            { text: '不同：きゅう vs く', isCorrect: false, reason: '九月也讀「く」。' },
            { text: '不同：く vs きゅう', isCorrect: false, reason: '九時讀「く」不是「きゅう」。' },
            { text: '相同：都是きゅう', isCorrect: false, reason: '兩者都讀「く」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '九月和九時的「九」都讀「く」。',
            trapExplanation: '與「四」不同，「九」在月份和時間都用「く」。',
            relatedRules: ['九的讀法', '月份vs時間']
        },
        sourceItem: { value: 9, kanji: '九月/九時', reading: 'くがつ/くじ' }
    },

    // ===== 何時疑問詞題 =====
    {
        id: 'hour_question_01',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「何時」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「何時」的正確讀法是？',
        options: [
            { text: 'なんじ', isCorrect: true, reason: '正確！何時讀「なんじ」。' },
            { text: 'なにじ', isCorrect: false, reason: '「何」在此讀「なん」。' },
            { text: 'なんとき', isCorrect: false, reason: '小時讀「じ」。' },
            { text: 'いつじ', isCorrect: false, reason: '「いつ」是「何時」的訓讀形式。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何時」讀「なんじ」，用於詢問時間。',
            relatedRules: ['何時的讀法', '疑問詞的使用']
        },
        sourceItem: { value: 'question', kanji: '何時', reading: 'なんじ' }
    },
    {
        id: 'hour_question_02',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '今何時ですか？',
        stem_zh: '現在幾點？',
        dialogue: {
            speakerA: '今何時ですか？',
            speakerB: '＿＿です。（二點）'
        },
        options: [
            { text: 'にじ', isCorrect: true, reason: '正確！二時讀「にじ」。' },
            { text: 'ふたじ', isCorrect: false, reason: '時間使用音讀「に」。' },
            { text: 'ふつか', isCorrect: false, reason: '「ふつか」是日期。' },
            { text: 'にとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二時」讀「にじ」，使用音讀。',
            relatedRules: ['小時的讀法', '何時の回答']
        },
        sourceItem: { value: 2, kanji: '二時', reading: 'にじ' }
    },
    {
        id: 'hour_question_03',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: true,
        stem: '待ち合わせは何時ですか？',
        stem_zh: '約幾點見面？',
        dialogue: {
            speakerA: '待ち合わせは何時ですか？',
            speakerB: '午後＿＿です。（四點）'
        },
        options: [
            { text: 'よじ', isCorrect: true, reason: '正確！四時讀「よじ」。' },
            { text: 'よんじ', isCorrect: false, reason: '陷阱！四時固定讀「よじ」。' },
            { text: 'しじ', isCorrect: false, reason: '四時讀「よじ」。' },
            { text: 'よっか', isCorrect: false, reason: '「よっか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四時」固定讀「よじ」。',
            trapExplanation: '記住：四時永遠讀「よじ」。',
            relatedRules: ['四時的讀法', '約會時間']
        },
        sourceItem: { value: 4, kanji: '四時', reading: 'よじ' }
    },

    // ===== 午前/午後題 =====
    {
        id: 'hour_ampm_01',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「午前」的讀法是？',
        stem_zh: '「午前」的讀法是？',
        options: [
            { text: 'ごぜん', isCorrect: true, reason: '正確！午前讀「ごぜん」。' },
            { text: 'うまえ', isCorrect: false, reason: '不存在這個讀法。' },
            { text: 'ごまえ', isCorrect: false, reason: '「前」讀「ぜん」。' },
            { text: 'ひるまえ', isCorrect: false, reason: '「午前」讀「ごぜん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「午前」讀「ごぜん」，表示上午。',
            relatedRules: ['午前的讀法', 'AM/PM']
        },
        sourceItem: { value: 'AM', kanji: '午前', reading: 'ごぜん' }
    },
    {
        id: 'hour_ampm_02',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「午後」的讀法是？',
        stem_zh: '「午後」的讀法是？',
        options: [
            { text: 'ごご', isCorrect: true, reason: '正確！午後讀「ごご」。' },
            { text: 'うまうしろ', isCorrect: false, reason: '不存在這個讀法。' },
            { text: 'ごあと', isCorrect: false, reason: '「後」讀「ご」。' },
            { text: 'ひるあと', isCorrect: false, reason: '「午後」讀「ごご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「午後」讀「ごご」，表示下午。',
            relatedRules: ['午後的讀法', 'AM/PM']
        },
        sourceItem: { value: 'PM', kanji: '午後', reading: 'ごご' }
    },
    {
        id: 'hour_ampm_03',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '会議は＿＿十時から＿＿二時までです。',
        stem_zh: '會議從上午十點到下午二點。',
        options: [
            { text: 'ごぜん・ごご', isCorrect: true, reason: '正確！午前十時到午後二時。' },
            { text: 'ごご・ごぜん', isCorrect: false, reason: '順序相反。' },
            { text: 'あさ・ひる', isCorrect: false, reason: '「あさ」「ひる」不是這個用法。' },
            { text: 'まえ・あと', isCorrect: false, reason: '應用「午前」「午後」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「午前」表示12點前，「午後」表示12點後。',
            relatedRules: ['午前/午後的使用', '會議時間']
        },
        sourceItem: { value: 'AM/PM', kanji: '午前/午後', reading: 'ごぜん/ごご' }
    },

    // ===== 時間區間題 =====
    {
        id: 'hour_range_01',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '營業時間是？',
        stem_zh: '營業時間是？',
        dialogue: {
            speakerA: '営業時間は何時から何時までですか？',
            speakerB: '＿＿から＿＿までです。（十時〜六時）'
        },
        options: [
            { text: 'じゅうじ・ろくじ', isCorrect: true, reason: '正確！10時到6時。' },
            { text: 'とおじ・むっつじ', isCorrect: false, reason: '時間使用音讀。' },
            { text: 'じゅうじ・むいか', isCorrect: false, reason: '「むいか」是日期。' },
            { text: 'とおか・ろくじ', isCorrect: false, reason: '「とおか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十時」讀「じゅうじ」，「六時」讀「ろくじ」。',
            relatedRules: ['小時的讀法', '營業時間']
        },
        sourceItem: { value: '10-18', kanji: '十時〜六時', reading: 'じゅうじ〜ろくじ' }
    },
    {
        id: 'hour_range_02',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: true,
        stem: '診察時間は＿＿から＿＿までです。（九時〜四時）',
        stem_zh: '看診時間從九點到四點。',
        options: [
            { text: 'くじ・よじ', isCorrect: true, reason: '正確！九時「くじ」、四時「よじ」。' },
            { text: 'きゅうじ・よんじ', isCorrect: false, reason: '陷阱！9時和4時都是特殊讀法。' },
            { text: 'くじ・しじ', isCorrect: false, reason: '四時讀「よじ」。' },
            { text: 'きゅうじ・よじ', isCorrect: false, reason: '九時讀「くじ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九時」讀「くじ」，「四時」讀「よじ」。',
            trapExplanation: '9和4都是特殊讀法，需要特別記憶。',
            relatedRules: ['特殊小時讀法', '診察時間']
        },
        sourceItem: { value: '9-16', kanji: '九時〜四時', reading: 'くじ〜よじ' }
    },

    // ===== 更多應用情境 =====
    {
        id: 'hour_scene_01',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: 'ニュースは毎朝＿＿からです。',
        stem_zh: '新聞每天早上七點開始。',
        options: [
            { text: 'しちじ', isCorrect: true, reason: '正確！七時讀「しちじ」。' },
            { text: 'ななじ', isCorrect: false, reason: '七時固定讀「しちじ」。' },
            { text: 'なのか', isCorrect: false, reason: '「なのか」是日期。' },
            { text: 'しちとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七時」讀「しちじ」，早間新聞常在7點播出。',
            relatedRules: ['七時的讀法', 'テレビ番組']
        },
        sourceItem: { value: 7, kanji: '七時', reading: 'しちじ' }
    },
    {
        id: 'hour_scene_02',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '終電は何時ですか？',
        stem_zh: '末班車幾點？',
        dialogue: {
            speakerA: '終電は何時ですか？',
            speakerB: '＿＿ごろです。（十二點）'
        },
        options: [
            { text: 'じゅうにじ', isCorrect: true, reason: '正確！十二時讀「じゅうにじ」。' },
            { text: 'じゅうふたじ', isCorrect: false, reason: '時間使用音讀「に」。' },
            { text: 'じゅにじ', isCorrect: false, reason: '需要「う」。' },
            { text: 'とおにじ', isCorrect: false, reason: '十使用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十二時」讀「じゅうにじ」，末班車通常在午夜前。',
            relatedRules: ['小時的讀法', '終電時間']
        },
        sourceItem: { value: 12, kanji: '十二時', reading: 'じゅうにじ' }
    },
    {
        id: 'hour_scene_03',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: true,
        stem: 'バスは＿＿発です。（九點）',
        stem_zh: '公車九點發車。',
        options: [
            { text: 'くじ', isCorrect: true, reason: '正確！九時讀「くじ」。' },
            { text: 'きゅうじ', isCorrect: false, reason: '陷阱！九時固定讀「くじ」。' },
            { text: 'ここのか', isCorrect: false, reason: '「ここのか」是日期。' },
            { text: 'くとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九時」讀「くじ」，是特殊讀法。',
            trapExplanation: '九時禁止讀「きゅうじ」。',
            relatedRules: ['九時的讀法', '交通時間']
        },
        sourceItem: { value: 9, kanji: '九時', reading: 'くじ' }
    },
    {
        id: 'hour_scene_04',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: 'お茶の時間は？',
        stem_zh: '下午茶時間是？',
        dialogue: {
            speakerA: 'お茶の時間は何時ですか？',
            speakerB: '午後＿＿です。（三點）'
        },
        options: [
            { text: 'さんじ', isCorrect: true, reason: '正確！三時讀「さんじ」。' },
            { text: 'みっつじ', isCorrect: false, reason: '時間使用音讀。' },
            { text: 'みっか', isCorrect: false, reason: '「みっか」是日期。' },
            { text: 'さんとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '下午三時是傳統下午茶時間。',
            relatedRules: ['小時的讀法', 'お茶の時間']
        },
        sourceItem: { value: 3, kanji: '三時', reading: 'さんじ' }
    },
    {
        id: 'hour_scene_05',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '始発電車は朝＿＿です。',
        stem_zh: '首班電車是早上五點。',
        options: [
            { text: 'ごじ', isCorrect: true, reason: '正確！五時讀「ごじ」。' },
            { text: 'いつか', isCorrect: false, reason: '「いつか」是日期。' },
            { text: 'いつつじ', isCorrect: false, reason: '時間使用音讀。' },
            { text: 'ごとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五時」讀「ごじ」，首班車通常很早。',
            relatedRules: ['小時的讀法', '始発時間']
        },
        sourceItem: { value: 5, kanji: '五時', reading: 'ごじ' }
    },
    {
        id: 'hour_scene_06',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: true,
        stem: '約束は何時でしたか？',
        stem_zh: '約定是幾點？',
        dialogue: {
            speakerA: '約束は何時でしたか？',
            speakerB: '＿＿でした。（七點）'
        },
        options: [
            { text: 'しちじ', isCorrect: true, reason: '正確！七時讀「しちじ」。' },
            { text: 'ななじ', isCorrect: false, reason: '陷阱！七時固定讀「しちじ」。' },
            { text: 'なのか', isCorrect: false, reason: '「なのか」是日期。' },
            { text: 'ひちじ', isCorrect: false, reason: '不存在這個讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七時」讀「しちじ」。',
            trapExplanation: '七時禁止讀「ななじ」。',
            relatedRules: ['七時的讀法', '約束時間']
        },
        sourceItem: { value: 7, kanji: '七時', reading: 'しちじ' }
    },

    // ===== 更多練習題 =====
    {
        id: 'hour_comp_01',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: 'コンビニは＿＿時間営業です。',
        stem_zh: '便利商店24小時營業。',
        options: [
            { text: 'にじゅうよじかん', isCorrect: true, reason: '正確！24時間讀「にじゅうよじかん」。' },
            { text: 'にじゅうしじかん', isCorrect: false, reason: '24的4讀「よ」。' },
            { text: 'にじゅうよんじかん', isCorrect: false, reason: '期間的4讀「よ」。' },
            { text: 'にじゅよじかん', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「24時間」讀「にじゅうよじかん」，期間的4讀「よ」。',
            relatedRules: ['時間期間的讀法', '24時間營業']
        },
        sourceItem: { value: 24, kanji: '二十四時間', reading: 'にじゅうよじかん' }
    },
    {
        id: 'hour_comp_02',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '仕事は何時間ですか？',
        stem_zh: '工作幾小時？',
        dialogue: {
            speakerA: '毎日何時間働きますか？',
            speakerB: '＿＿時間です。（八小時）'
        },
        options: [
            { text: 'はちじかん', isCorrect: true, reason: '正確！八時間讀「はちじかん」。' },
            { text: 'やじかん', isCorrect: false, reason: '時間使用音讀「はち」。' },
            { text: 'はっじかん', isCorrect: false, reason: '八時間不促音化。' },
            { text: 'ようかかん', isCorrect: false, reason: '「ようか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八時間」讀「はちじかん」，表示8小時。',
            relatedRules: ['時間期間的讀法', '工作時間']
        },
        sourceItem: { value: 8, kanji: '八時間', reading: 'はちじかん' }
    },
    {
        id: 'hour_comp_03',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: true,
        stem: '映画は＿＿時間でした。（兩小時）',
        stem_zh: '電影兩小時。',
        options: [
            { text: 'にじかん', isCorrect: true, reason: '正確！二時間讀「にじかん」。' },
            { text: 'ふたじかん', isCorrect: false, reason: '陷阱！期間也用音讀。' },
            { text: 'にときかん', isCorrect: false, reason: '時間讀「じ」。' },
            { text: 'ふつかかん', isCorrect: false, reason: '「ふつか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二時間」讀「にじかん」，期間使用音讀。',
            trapExplanation: '時間期間也用音讀，不用訓讀。',
            relatedRules: ['時間期間的讀法', '電影時長']
        },
        sourceItem: { value: 2, kanji: '二時間', reading: 'にじかん' }
    },
    {
        id: 'hour_comp_04',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '會議要多久？',
        stem_zh: '會議要多久？',
        dialogue: {
            speakerA: '会議は何時間かかりますか？',
            speakerB: '約＿＿時間です。（三小時）'
        },
        options: [
            { text: 'さんじかん', isCorrect: true, reason: '正確！三時間讀「さんじかん」。' },
            { text: 'みじかん', isCorrect: false, reason: '時間使用音讀「さん」。' },
            { text: 'みっかかん', isCorrect: false, reason: '「みっか」是日期。' },
            { text: 'さんときかん', isCorrect: false, reason: '時間讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三時間」讀「さんじかん」，表示3小時。',
            relatedRules: ['時間期間的讀法', '會議時間']
        },
        sourceItem: { value: 3, kanji: '三時間', reading: 'さんじかん' }
    },
    {
        id: 'hour_comp_05',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: true,
        stem: '飛行機で＿＿時間かかります。（九小時）',
        stem_zh: '搭飛機九小時。',
        options: [
            { text: 'くじかん', isCorrect: true, reason: '正確！九時間讀「くじかん」。' },
            { text: 'きゅうじかん', isCorrect: false, reason: '陷阱！期間的9也讀「く」。' },
            { text: 'ここのかかん', isCorrect: false, reason: '「ここのか」是日期。' },
            { text: 'くとき', isCorrect: false, reason: '時間讀「じ」加「かん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九時間」讀「くじかん」，期間的9也讀「く」。',
            trapExplanation: '9在時間和期間都讀「く」。',
            relatedRules: ['九的讀法', '飛行時間']
        },
        sourceItem: { value: 9, kanji: '九時間', reading: 'くじかん' }
    },
    {
        id: 'hour_comp_06',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: true,
        stem: '睡眠時間は？',
        stem_zh: '睡眠時間是？',
        dialogue: {
            speakerA: '毎日何時間寝ますか？',
            speakerB: '約＿＿時間です。（七小時）'
        },
        options: [
            { text: 'しちじかん', isCorrect: true, reason: '正確！七時間讀「しちじかん」。' },
            { text: 'ななじかん', isCorrect: false, reason: '陷阱！期間的7也讀「しち」。' },
            { text: 'なのかかん', isCorrect: false, reason: '「なのか」是日期。' },
            { text: 'ひちじかん', isCorrect: false, reason: '不存在這個讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七時間」讀「しちじかん」，期間的7也讀「しち」。',
            trapExplanation: '7在時間和期間都讀「しち」。',
            relatedRules: ['七的讀法', '睡眠時間']
        },
        sourceItem: { value: 7, kanji: '七時間', reading: 'しちじかん' }
    },
    {
        id: 'hour_comp_07',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: true,
        stem: '待ち時間は＿＿時間です。（四小時）',
        stem_zh: '等待時間是四小時。',
        options: [
            { text: 'よじかん', isCorrect: true, reason: '正確！四時間讀「よじかん」。' },
            { text: 'よんじかん', isCorrect: false, reason: '陷阱！期間的4也讀「よ」。' },
            { text: 'しじかん', isCorrect: false, reason: '四時間讀「よ」不是「し」。' },
            { text: 'よっかかん', isCorrect: false, reason: '「よっか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四時間」讀「よじかん」，期間的4也讀「よ」。',
            trapExplanation: '4在時間和期間都讀「よ」。',
            relatedRules: ['四的讀法', '等待時間']
        },
        sourceItem: { value: 4, kanji: '四時間', reading: 'よじかん' }
    },

    // ===== 日常作息題 =====
    {
        id: 'hour_daily_01',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '朝ごはんは＿＿に食べます。',
        stem_zh: '早餐七點吃。',
        options: [
            { text: 'しちじ', isCorrect: true, reason: '正確！七時讀「しちじ」。' },
            { text: 'ななじ', isCorrect: false, reason: '七時固定讀「しちじ」。' },
            { text: 'なのか', isCorrect: false, reason: '「なのか」是日期。' },
            { text: 'しちとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七時」讀「しちじ」，早餐時間。',
            relatedRules: ['七時的讀法', '早餐時間']
        },
        sourceItem: { value: 7, kanji: '七時', reading: 'しちじ' }
    },
    {
        id: 'hour_daily_02',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '何時に家を出ますか？',
        stem_zh: '幾點出門？',
        dialogue: {
            speakerA: '何時に家を出ますか？',
            speakerB: '＿＿に出ます。（八點）'
        },
        options: [
            { text: 'はちじ', isCorrect: true, reason: '正確！八時讀「はちじ」。' },
            { text: 'やじ', isCorrect: false, reason: '時間使用音讀「はち」。' },
            { text: 'ようか', isCorrect: false, reason: '「ようか」是日期。' },
            { text: 'はっじ', isCorrect: false, reason: '八時不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八時」讀「はちじ」，出門時間。',
            relatedRules: ['小時的讀法', '通勤時間']
        },
        sourceItem: { value: 8, kanji: '八時', reading: 'はちじ' }
    },
    {
        id: 'hour_daily_03',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '帰宅は夜＿＿ごろです。',
        stem_zh: '回家大約晚上十點。',
        options: [
            { text: 'じゅうじ', isCorrect: true, reason: '正確！十時讀「じゅうじ」。' },
            { text: 'とおじ', isCorrect: false, reason: '十使用音讀「じゅう」。' },
            { text: 'じゅっじ', isCorrect: false, reason: '十時不促音化。' },
            { text: 'とおか', isCorrect: false, reason: '「とおか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十時」讀「じゅうじ」，回家時間。',
            relatedRules: ['小時的讀法', '帰宅時間']
        },
        sourceItem: { value: 10, kanji: '十時', reading: 'じゅうじ' }
    },
    {
        id: 'hour_daily_04',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '何時に寝ますか？',
        stem_zh: '幾點睡覺？',
        dialogue: {
            speakerA: '何時に寝ますか？',
            speakerB: '＿＿ごろです。（十一點）'
        },
        options: [
            { text: 'じゅういちじ', isCorrect: true, reason: '正確！十一時讀「じゅういちじ」。' },
            { text: 'とおいちじ', isCorrect: false, reason: '十使用音讀「じゅう」。' },
            { text: 'じゅいちじ', isCorrect: false, reason: '需要「う」。' },
            { text: 'といちじ', isCorrect: false, reason: '讀法錯誤。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十一時」讀「じゅういちじ」，就寢時間。',
            relatedRules: ['小時的讀法', '就寢時間']
        },
        sourceItem: { value: 11, kanji: '十一時', reading: 'じゅういちじ' }
    },

    // ===== 更多陷阱題 =====
    {
        id: 'hour_trap_01',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: true,
        stem: '下列哪個時間讀法例外？',
        stem_zh: '下列哪個時間讀法例外？',
        options: [
            { text: '四時（よじ）', isCorrect: true, reason: '正確！四時是特殊讀法。' },
            { text: '二時（にじ）', isCorrect: false, reason: '二時是一般讀法。' },
            { text: '三時（さんじ）', isCorrect: false, reason: '三時是一般讀法。' },
            { text: '五時（ごじ）', isCorrect: false, reason: '五時是一般讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '4時、7時、9時是特殊讀法：よじ、しちじ、くじ。',
            trapExplanation: '大部分小時用音讀，但這三個例外。',
            relatedRules: ['特殊小時讀法', '4・7・9']
        },
        sourceItem: { value: 4, kanji: '四時', reading: 'よじ' }
    },
    {
        id: 'hour_trap_02',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: true,
        stem: '「時」在「一時」和「一時的」中讀法相同嗎？',
        stem_zh: '「時」在「一時」和「一時的」中讀法相同嗎？',
        options: [
            { text: '相同：都是じ', isCorrect: true, reason: '正確！一時(いちじ)和一時的(いちじてき)。' },
            { text: '不同：じ vs とき', isCorrect: false, reason: '兩者的「時」都讀「じ」。' },
            { text: '不同：とき vs じ', isCorrect: false, reason: '一時也讀「じ」。' },
            { text: '相同：都是とき', isCorrect: false, reason: '都讀「じ」不是「とき」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一時」(いちじ)和「一時的」(いちじてき)的「時」都讀「じ」。',
            trapExplanation: '注意：「時」讀「とき」時通常單獨使用。',
            relatedRules: ['時的讀法', '音讀vs訓讀']
        },
        sourceItem: { value: 1, kanji: '一時', reading: 'いちじ' }
    },
    {
        id: 'hour_trap_03',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: true,
        stem: '「何時」的「何」讀「なん」還是「なに」？',
        stem_zh: '「何時」的「何」讀「なん」還是「なに」？',
        options: [
            { text: 'なん', isCorrect: true, reason: '正確！何時讀「なんじ」。' },
            { text: 'なに', isCorrect: false, reason: '何時固定讀「なんじ」。' },
            { text: '兩者都對', isCorrect: false, reason: '何時只讀「なんじ」。' },
            { text: 'いつ', isCorrect: false, reason: '「いつ」是另一個詞。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何時」固定讀「なんじ」，「何」讀「なん」。',
            trapExplanation: '「なに」用於其他情況。',
            relatedRules: ['何的讀法', '疑問詞']
        },
        sourceItem: { value: 'question', kanji: '何時', reading: 'なんじ' }
    },

    // ===== 正午/午夜題 =====
    {
        id: 'hour_noon_01',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「正午」的讀法是？',
        stem_zh: '「正午」的讀法是？',
        options: [
            { text: 'しょうご', isCorrect: true, reason: '正確！正午讀「しょうご」。' },
            { text: 'せいご', isCorrect: false, reason: '「正」讀「しょう」。' },
            { text: 'まひる', isCorrect: false, reason: '「まひる」是另一個詞（真昼）。' },
            { text: 'ただうま', isCorrect: false, reason: '不存在這個讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「正午」讀「しょうご」，表示中午12點。',
            relatedRules: ['正午的讀法', '時間表達']
        },
        sourceItem: { value: 'noon', kanji: '正午', reading: 'しょうご' }
    },
    {
        id: 'hour_noon_02',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「真夜中」的讀法是？',
        stem_zh: '「真夜中」的讀法是？',
        options: [
            { text: 'まよなか', isCorrect: true, reason: '正確！真夜中讀「まよなか」。' },
            { text: 'しんやちゅう', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'まよるなか', isCorrect: false, reason: '「夜」讀「よ」不是「よる」。' },
            { text: 'まやなか', isCorrect: false, reason: '應為「まよなか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「真夜中」讀「まよなか」，表示深夜/午夜。',
            relatedRules: ['真夜中的讀法', '時間表達']
        },
        sourceItem: { value: 'midnight', kanji: '真夜中', reading: 'まよなか' }
    },

    // ===== 時刻表達補充 =====
    {
        id: 'hour_extra_01',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '約束は＿＿半です。（六點半）',
        stem_zh: '約定是六點半。',
        options: [
            { text: 'ろくじはん', isCorrect: true, reason: '正確！六時半讀「ろくじはん」。' },
            { text: 'むっつじはん', isCorrect: false, reason: '時間使用音讀「ろく」。' },
            { text: 'ろくじなかば', isCorrect: false, reason: '「半」讀「はん」。' },
            { text: 'ろっじはん', isCorrect: false, reason: '六時不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六時半」讀「ろくじはん」，表示6:30。',
            relatedRules: ['時間表達', '半的使用']
        },
        sourceItem: { value: '6:30', kanji: '六時半', reading: 'ろくじはん' }
    },
    {
        id: 'hour_extra_02',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '何時に会いましょうか？',
        stem_zh: '幾點見面？',
        dialogue: {
            speakerA: '何時に会いましょうか？',
            speakerB: '＿＿にしましょう。（一點）'
        },
        options: [
            { text: 'いちじ', isCorrect: true, reason: '正確！一時讀「いちじ」。' },
            { text: 'ひとじ', isCorrect: false, reason: '時間使用音讀「いち」。' },
            { text: 'いちとき', isCorrect: false, reason: '小時讀「じ」。' },
            { text: 'ついたち', isCorrect: false, reason: '「ついたち」是日期1號。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一時」讀「いちじ」，約定時間。',
            relatedRules: ['小時的讀法', '約束時間']
        },
        sourceItem: { value: 1, kanji: '一時', reading: 'いちじ' }
    },
    {
        id: 'hour_extra_03',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '昼休みは＿＿から＿＿までです。',
        stem_zh: '午休從十二點到一點。',
        options: [
            { text: 'じゅうにじ・いちじ', isCorrect: true, reason: '正確！12點到1點。' },
            { text: 'じゅうふたじ・ひとじ', isCorrect: false, reason: '時間使用音讀。' },
            { text: 'じゅにじ・いちじ', isCorrect: false, reason: '12需要「う」。' },
            { text: 'しょうご・いちじ', isCorrect: true, reason: '「正午」也可表示12點。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '午休時間從「十二時」到「一時」。',
            relatedRules: ['小時的讀法', '午休時間']
        },
        sourceItem: { value: '12-13', kanji: '十二時〜一時', reading: 'じゅうにじ〜いちじ' }
    },
    {
        id: 'hour_extra_04',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: true,
        stem: '診察は何時までですか？',
        stem_zh: '看診到幾點？',
        dialogue: {
            speakerA: '診察は何時までですか？',
            speakerB: '午後＿＿までです。（四點）'
        },
        options: [
            { text: 'よじ', isCorrect: true, reason: '正確！四時讀「よじ」。' },
            { text: 'よんじ', isCorrect: false, reason: '陷阱！四時固定讀「よじ」。' },
            { text: 'しじ', isCorrect: false, reason: '四時讀「よじ」。' },
            { text: 'よっか', isCorrect: false, reason: '「よっか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四時」固定讀「よじ」。',
            trapExplanation: '四時是特殊讀法，永遠讀「よじ」。',
            relatedRules: ['四時的讀法', '診察時間']
        },
        sourceItem: { value: 4, kanji: '四時', reading: 'よじ' }
    },
    {
        id: 'hour_extra_05',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: 'ドラマは毎週＿＿からです。',
        stem_zh: '連續劇每週九點開始。',
        options: [
            { text: 'くじ', isCorrect: true, reason: '正確！九時讀「くじ」。' },
            { text: 'きゅうじ', isCorrect: false, reason: '九時固定讀「くじ」。' },
            { text: 'ここのか', isCorrect: false, reason: '「ここのか」是日期。' },
            { text: 'くとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九時」讀「くじ」，黃金時段。',
            relatedRules: ['九時的讀法', 'テレビ番組']
        },
        sourceItem: { value: 9, kanji: '九時', reading: 'くじ' }
    },
    {
        id: 'hour_extra_06',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '何時から何時まで空いていますか？',
        stem_zh: '幾點到幾點有空？',
        dialogue: {
            speakerA: '何時から何時まで空いていますか？',
            speakerB: '＿＿から＿＿までです。（二點到五點）'
        },
        options: [
            { text: 'にじ・ごじ', isCorrect: true, reason: '正確！二時到五時。' },
            { text: 'ふたじ・いつじ', isCorrect: false, reason: '時間使用音讀。' },
            { text: 'にじ・いつか', isCorrect: false, reason: '「いつか」是日期。' },
            { text: 'ふつか・ごじ', isCorrect: false, reason: '「ふつか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二時」讀「にじ」，「五時」讀「ごじ」。',
            relatedRules: ['小時的讀法', '空閒時間']
        },
        sourceItem: { value: '14-17', kanji: '二時〜五時', reading: 'にじ〜ごじ' }
    },
    {
        id: 'hour_extra_07',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '閉店は＿＿です。',
        stem_zh: '打烊是十點。',
        options: [
            { text: 'じゅうじ', isCorrect: true, reason: '正確！十時讀「じゅうじ」。' },
            { text: 'とおじ', isCorrect: false, reason: '十使用音讀「じゅう」。' },
            { text: 'じゅっじ', isCorrect: false, reason: '十時不促音化。' },
            { text: 'とおか', isCorrect: false, reason: '「とおか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十時」讀「じゅうじ」，閉店時間。',
            relatedRules: ['小時的讀法', '閉店時間']
        },
        sourceItem: { value: 10, kanji: '十時', reading: 'じゅうじ' }
    },
    {
        id: 'hour_extra_08',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '夜ご飯は何時に食べますか？',
        stem_zh: '晚餐幾點吃？',
        dialogue: {
            speakerA: '夜ご飯は何時に食べますか？',
            speakerB: '＿＿ごろです。（六點）'
        },
        options: [
            { text: 'ろくじ', isCorrect: true, reason: '正確！六時讀「ろくじ」。' },
            { text: 'むっつじ', isCorrect: false, reason: '時間使用音讀「ろく」。' },
            { text: 'むいか', isCorrect: false, reason: '「むいか」是日期。' },
            { text: 'ろっじ', isCorrect: false, reason: '六時不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六時」讀「ろくじ」，晚餐時間。',
            relatedRules: ['小時的讀法', '用餐時間']
        },
        sourceItem: { value: 6, kanji: '六時', reading: 'ろくじ' }
    },
    {
        id: 'hour_extra_09',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '開店は毎朝＿＿です。',
        stem_zh: '每天早上十一點開店。',
        options: [
            { text: 'じゅういちじ', isCorrect: true, reason: '正確！十一時讀「じゅういちじ」。' },
            { text: 'とおいちじ', isCorrect: false, reason: '十使用音讀「じゅう」。' },
            { text: 'じゅいちじ', isCorrect: false, reason: '需要「う」。' },
            { text: 'といちじ', isCorrect: false, reason: '讀法錯誤。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十一時」讀「じゅういちじ」，開店時間。',
            relatedRules: ['小時的讀法', '開店時間']
        },
        sourceItem: { value: 11, kanji: '十一時', reading: 'じゅういちじ' }
    },
    {
        id: 'hour_extra_10',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「〜時」的「時」讀作？',
        stem_zh: '「〜時」的「時」讀作？',
        options: [
            { text: 'じ', isCorrect: true, reason: '正確！小時的「時」讀「じ」。' },
            { text: 'とき', isCorrect: false, reason: '「とき」用於「時間/時候」。' },
            { text: 'し', isCorrect: false, reason: '不存在這個讀法。' },
            { text: 'き', isCorrect: false, reason: '不存在這個讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '小時的「時」固定讀「じ」。',
            relatedRules: ['時的讀法', '小時表達']
        },
        sourceItem: { value: 'hour', kanji: '〜時', reading: '〜じ' }
    },

    // ===== 最後補充題 =====
    {
        id: 'hour_final_01',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '昼食は＿＿に終わります。',
        stem_zh: '午餐一點結束。',
        options: [
            { text: 'いちじ', isCorrect: true, reason: '正確！一時讀「いちじ」。' },
            { text: 'ひとじ', isCorrect: false, reason: '時間使用音讀「いち」。' },
            { text: 'いちとき', isCorrect: false, reason: '小時讀「じ」。' },
            { text: 'ついたち', isCorrect: false, reason: '「ついたち」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一時」讀「いちじ」，午餐結束時間。',
            relatedRules: ['小時的讀法', '用餐時間']
        },
        sourceItem: { value: 1, kanji: '一時', reading: 'いちじ' }
    },
    {
        id: 'hour_final_02',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '起床時間は？',
        stem_zh: '起床時間是？',
        dialogue: {
            speakerA: '何時に起きますか？',
            speakerB: '＿＿です。（五點）'
        },
        options: [
            { text: 'ごじ', isCorrect: true, reason: '正確！五時讀「ごじ」。' },
            { text: 'いつじ', isCorrect: false, reason: '時間使用音讀「ご」。' },
            { text: 'いつか', isCorrect: false, reason: '「いつか」是日期。' },
            { text: 'ごとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五時」讀「ごじ」，早起時間。',
            relatedRules: ['小時的讀法', '起床時間']
        },
        sourceItem: { value: 5, kanji: '五時', reading: 'ごじ' }
    },
    {
        id: 'hour_final_03',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '講演は＿＿からです。',
        stem_zh: '演講從二點開始。',
        options: [
            { text: 'にじ', isCorrect: true, reason: '正確！二時讀「にじ」。' },
            { text: 'ふたじ', isCorrect: false, reason: '時間使用音讀「に」。' },
            { text: 'ふつか', isCorrect: false, reason: '「ふつか」是日期。' },
            { text: 'にとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二時」讀「にじ」，演講開始時間。',
            relatedRules: ['小時的讀法', '活動時間']
        },
        sourceItem: { value: 2, kanji: '二時', reading: 'にじ' }
    },
    {
        id: 'hour_final_04',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '電車は何時発ですか？',
        stem_zh: '電車幾點發車？',
        dialogue: {
            speakerA: '電車は何時発ですか？',
            speakerB: '＿＿発です。（三點）'
        },
        options: [
            { text: 'さんじ', isCorrect: true, reason: '正確！三時讀「さんじ」。' },
            { text: 'みじ', isCorrect: false, reason: '時間使用音讀「さん」。' },
            { text: 'みっか', isCorrect: false, reason: '「みっか」是日期。' },
            { text: 'さんとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三時」讀「さんじ」，發車時間。',
            relatedRules: ['小時的讀法', '交通時間']
        },
        sourceItem: { value: 3, kanji: '三時', reading: 'さんじ' }
    },
    {
        id: 'hour_final_05',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: true,
        stem: '面談は午後＿＿からです。',
        stem_zh: '面談從下午四點開始。',
        options: [
            { text: 'よじ', isCorrect: true, reason: '正確！四時讀「よじ」。' },
            { text: 'よんじ', isCorrect: false, reason: '陷阱！四時固定讀「よじ」。' },
            { text: 'しじ', isCorrect: false, reason: '四時讀「よじ」。' },
            { text: 'よっか', isCorrect: false, reason: '「よっか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四時」固定讀「よじ」。',
            trapExplanation: '四時是特殊讀法。',
            relatedRules: ['四時的讀法', '面談時間']
        },
        sourceItem: { value: 4, kanji: '四時', reading: 'よじ' }
    },
    {
        id: 'hour_final_06',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '出発時間は？',
        stem_zh: '出發時間是？',
        dialogue: {
            speakerA: '出発は何時ですか？',
            speakerB: '朝＿＿です。（六點）'
        },
        options: [
            { text: 'ろくじ', isCorrect: true, reason: '正確！六時讀「ろくじ」。' },
            { text: 'むじ', isCorrect: false, reason: '時間使用音讀「ろく」。' },
            { text: 'むいか', isCorrect: false, reason: '「むいか」是日期。' },
            { text: 'ろっじ', isCorrect: false, reason: '六時不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六時」讀「ろくじ」，出發時間。',
            relatedRules: ['小時的讀法', '出發時間']
        },
        sourceItem: { value: 6, kanji: '六時', reading: 'ろくじ' }
    },
    {
        id: 'hour_final_07',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: true,
        stem: 'ミーティングは＿＿からです。',
        stem_zh: '會議從七點開始。',
        options: [
            { text: 'しちじ', isCorrect: true, reason: '正確！七時讀「しちじ」。' },
            { text: 'ななじ', isCorrect: false, reason: '陷阱！七時固定讀「しちじ」。' },
            { text: 'なのか', isCorrect: false, reason: '「なのか」是日期。' },
            { text: 'ひちじ', isCorrect: false, reason: '不存在這個讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七時」固定讀「しちじ」。',
            trapExplanation: '七時是特殊讀法。',
            relatedRules: ['七時的讀法', '會議時間']
        },
        sourceItem: { value: 7, kanji: '七時', reading: 'しちじ' }
    },
    {
        id: 'hour_final_08',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '退社は何時ですか？',
        stem_zh: '下班幾點？',
        dialogue: {
            speakerA: '退社は何時ですか？',
            speakerB: '＿＿です。（八點）'
        },
        options: [
            { text: 'はちじ', isCorrect: true, reason: '正確！八時讀「はちじ」。' },
            { text: 'やじ', isCorrect: false, reason: '時間使用音讀「はち」。' },
            { text: 'ようか', isCorrect: false, reason: '「ようか」是日期。' },
            { text: 'はっじ', isCorrect: false, reason: '八時不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八時」讀「はちじ」，下班時間。',
            relatedRules: ['小時的讀法', '退社時間']
        },
        sourceItem: { value: 8, kanji: '八時', reading: 'はちじ' }
    },
    {
        id: 'hour_final_09',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: true,
        stem: '番組は毎晩＿＿からです。',
        stem_zh: '節目每晚九點開始。',
        options: [
            { text: 'くじ', isCorrect: true, reason: '正確！九時讀「くじ」。' },
            { text: 'きゅうじ', isCorrect: false, reason: '陷阱！九時固定讀「くじ」。' },
            { text: 'ここのか', isCorrect: false, reason: '「ここのか」是日期。' },
            { text: 'くとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九時」固定讀「くじ」。',
            trapExplanation: '九時是特殊讀法。',
            relatedRules: ['九時的讀法', 'テレビ番組']
        },
        sourceItem: { value: 9, kanji: '九時', reading: 'くじ' }
    },
    {
        id: 'hour_final_10',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '消灯時間は？',
        stem_zh: '熄燈時間是？',
        dialogue: {
            speakerA: '消灯は何時ですか？',
            speakerB: '＿＿です。（十點）'
        },
        options: [
            { text: 'じゅうじ', isCorrect: true, reason: '正確！十時讀「じゅうじ」。' },
            { text: 'とおじ', isCorrect: false, reason: '十使用音讀「じゅう」。' },
            { text: 'とおか', isCorrect: false, reason: '「とおか」是日期。' },
            { text: 'じゅっじ', isCorrect: false, reason: '十時不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十時」讀「じゅうじ」，熄燈時間。',
            relatedRules: ['小時的讀法', '就寢時間']
        },
        sourceItem: { value: 10, kanji: '十時', reading: 'じゅうじ' }
    },
    {
        id: 'hour_final_11',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: 'チェックアウトは＿＿です。',
        stem_zh: '退房是十一點。',
        options: [
            { text: 'じゅういちじ', isCorrect: true, reason: '正確！十一時讀「じゅういちじ」。' },
            { text: 'とおいちじ', isCorrect: false, reason: '十使用音讀「じゅう」。' },
            { text: 'じゅいちじ', isCorrect: false, reason: '需要「う」。' },
            { text: 'といちじ', isCorrect: false, reason: '讀法錯誤。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十一時」讀「じゅういちじ」，退房時間。',
            relatedRules: ['小時的讀法', 'ホテル']
        },
        sourceItem: { value: 11, kanji: '十一時', reading: 'じゅういちじ' }
    },
    {
        id: 'hour_final_12',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: 'ランチタイムは？',
        stem_zh: '午餐時間是？',
        dialogue: {
            speakerA: 'ランチタイムは何時ですか？',
            speakerB: '＿＿からです。（十二點）'
        },
        options: [
            { text: 'じゅうにじ', isCorrect: true, reason: '正確！十二時讀「じゅうにじ」。' },
            { text: 'じゅうふたじ', isCorrect: false, reason: '時間使用音讀「に」。' },
            { text: 'じゅにじ', isCorrect: false, reason: '需要「う」。' },
            { text: 'とおにじ', isCorrect: false, reason: '十使用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十二時」讀「じゅうにじ」，午餐時間。',
            relatedRules: ['小時的讀法', 'ランチタイム']
        },
        sourceItem: { value: 12, kanji: '十二時', reading: 'じゅうにじ' }
    },
    {
        id: 'hour_final_13',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: true,
        stem: '下列哪組時間讀法都是特殊的？',
        stem_zh: '下列哪組時間讀法都是特殊的？',
        options: [
            { text: '4時・7時・9時', isCorrect: true, reason: '正確！よじ・しちじ・くじ都是例外。' },
            { text: '1時・2時・3時', isCorrect: false, reason: '這些是一般讀法。' },
            { text: '5時・6時・8時', isCorrect: false, reason: '這些是一般讀法。' },
            { text: '10時・11時・12時', isCorrect: false, reason: '這些是一般讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '4時(よじ)、7時(しちじ)、9時(くじ)是三大特殊讀法。',
            trapExplanation: '必須記住這三個例外。',
            relatedRules: ['特殊小時讀法', '4・7・9']
        },
        sourceItem: { value: 'special', kanji: '四時・七時・九時', reading: 'よじ・しちじ・くじ' }
    },
    {
        id: 'hour_final_14',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '歯医者の予約は＿＿です。',
        stem_zh: '牙醫預約是三點。',
        options: [
            { text: 'さんじ', isCorrect: true, reason: '正確！三時讀「さんじ」。' },
            { text: 'みじ', isCorrect: false, reason: '時間使用音讀「さん」。' },
            { text: 'みっか', isCorrect: false, reason: '「みっか」是日期。' },
            { text: 'さんとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三時」讀「さんじ」，預約時間。',
            relatedRules: ['小時的讀法', '預約時間']
        },
        sourceItem: { value: 3, kanji: '三時', reading: 'さんじ' }
    },
    {
        id: 'hour_final_15',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '何時から授業ですか？',
        stem_zh: '幾點上課？',
        dialogue: {
            speakerA: '何時から授業ですか？',
            speakerB: '＿＿からです。（一點）'
        },
        options: [
            { text: 'いちじ', isCorrect: true, reason: '正確！一時讀「いちじ」。' },
            { text: 'ひとじ', isCorrect: false, reason: '時間使用音讀「いち」。' },
            { text: 'ついたち', isCorrect: false, reason: '「ついたち」是日期。' },
            { text: 'いちとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一時」讀「いちじ」，下午課程時間。',
            relatedRules: ['小時的讀法', '授業時間']
        },
        sourceItem: { value: 1, kanji: '一時', reading: 'いちじ' }
    },
    {
        id: 'hour_final_16',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '夕食は＿＿ごろです。',
        stem_zh: '晚餐大約六點半。',
        options: [
            { text: 'ろくじはん', isCorrect: true, reason: '正確！六時半讀「ろくじはん」。' },
            { text: 'むじはん', isCorrect: false, reason: '時間使用音讀「ろく」。' },
            { text: 'ろっじはん', isCorrect: false, reason: '六時不促音化。' },
            { text: 'むいかはん', isCorrect: false, reason: '「むいか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六時半」讀「ろくじはん」。',
            relatedRules: ['時間表達', '用餐時間']
        },
        sourceItem: { value: '6:30', kanji: '六時半', reading: 'ろくじはん' }
    },
    {
        id: 'hour_final_17',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: true,
        stem: '仕事は何時からですか？',
        stem_zh: '工作幾點開始？',
        dialogue: {
            speakerA: '仕事は何時からですか？',
            speakerB: '＿＿からです。（九點）'
        },
        options: [
            { text: 'くじ', isCorrect: true, reason: '正確！九時讀「くじ」。' },
            { text: 'きゅうじ', isCorrect: false, reason: '陷阱！九時固定讀「くじ」。' },
            { text: 'ここのか', isCorrect: false, reason: '「ここのか」是日期。' },
            { text: 'きゅうとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九時」固定讀「くじ」。',
            trapExplanation: '九時是特殊讀法，禁止讀「きゅうじ」。',
            relatedRules: ['九時的讀法', '上班時間']
        },
        sourceItem: { value: 9, kanji: '九時', reading: 'くじ' }
    },
    {
        id: 'hour_final_18',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '定時退社は＿＿です。',
        stem_zh: '準時下班是五點。',
        options: [
            { text: 'ごじ', isCorrect: true, reason: '正確！五時讀「ごじ」。' },
            { text: 'いつか', isCorrect: false, reason: '「いつか」是日期。' },
            { text: 'いつじ', isCorrect: false, reason: '時間使用音讀「ご」。' },
            { text: 'ごとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五時」讀「ごじ」，定時下班時間。',
            relatedRules: ['小時的讀法', '退社時間']
        },
        sourceItem: { value: 5, kanji: '五時', reading: 'ごじ' }
    },
    {
        id: 'hour_final_19',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: true,
        stem: '何時に待ち合わせですか？',
        stem_zh: '幾點見面？',
        dialogue: {
            speakerA: '何時に待ち合わせですか？',
            speakerB: '＿＿です。（七點）'
        },
        options: [
            { text: 'しちじ', isCorrect: true, reason: '正確！七時讀「しちじ」。' },
            { text: 'ななじ', isCorrect: false, reason: '陷阱！七時固定讀「しちじ」。' },
            { text: 'なのか', isCorrect: false, reason: '「なのか」是日期。' },
            { text: 'しちとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七時」固定讀「しちじ」。',
            trapExplanation: '七時是特殊讀法，禁止讀「ななじ」。',
            relatedRules: ['七時的讀法', '待ち合わせ']
        },
        sourceItem: { value: 7, kanji: '七時', reading: 'しちじ' }
    },
    {
        id: 'hour_final_20',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: true,
        stem: '面接は午前＿＿です。',
        stem_zh: '面試是上午四點。',
        options: [
            { text: 'よじ', isCorrect: true, reason: '正確！四時讀「よじ」。' },
            { text: 'よんじ', isCorrect: false, reason: '陷阱！四時固定讀「よじ」。' },
            { text: 'しじ', isCorrect: false, reason: '四時讀「よじ」。' },
            { text: 'よっか', isCorrect: false, reason: '「よっか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四時」固定讀「よじ」。',
            trapExplanation: '四時是特殊讀法，禁止讀「よんじ」或「しじ」。',
            relatedRules: ['四時的讀法', '面接時間']
        },
        sourceItem: { value: 4, kanji: '四時', reading: 'よじ' }
    },
    {
        id: 'hour_final_21',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「〜時間」の「時間」讀作？',
        stem_zh: '「〜時間」的「時間」讀作？',
        options: [
            { text: 'じかん', isCorrect: true, reason: '正確！時間讀「じかん」。' },
            { text: 'ときかん', isCorrect: false, reason: '時間讀「じかん」。' },
            { text: 'しかん', isCorrect: false, reason: '不存在這個讀法。' },
            { text: 'ときあいだ', isCorrect: false, reason: '不存在這個讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「時間」讀「じかん」，表示時間長度。',
            relatedRules: ['時間的讀法', '期間表達']
        },
        sourceItem: { value: 'duration', kanji: '〜時間', reading: '〜じかん' }
    },
    // ===== 追加題目 22-71 =====
    {
        id: 'hour_extra_22',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「午前」的讀法是？',
        stem_zh: '「午前」的讀法是？',
        options: [
            { text: 'ごぜん', isCorrect: true, reason: '正確！午前讀「ごぜん」。' },
            { text: 'うまえ', isCorrect: false, reason: '「午」讀「ご」不是「うま」。' },
            { text: 'ひるまえ', isCorrect: false, reason: '這是「昼前」的意思。' },
            { text: 'ごまえ', isCorrect: false, reason: '「前」讀「ぜん」不是「まえ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「午前」讀「ごぜん」，意思是上午（AM）。',
            relatedRules: ['時間表達', '午前vs午後']
        },
        sourceItem: { value: 'AM', kanji: '午前', reading: 'ごぜん' }
    },
    {
        id: 'hour_extra_23',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '電車は午前＿＿に出発します。',
        stem_zh: '電車在上午十點出發。',
        options: [
            { text: 'じゅうじ', isCorrect: true, reason: '正確！十時讀「じゅうじ」。' },
            { text: 'とおじ', isCorrect: false, reason: '時間使用音讀「じゅう」。' },
            { text: 'じゅっじ', isCorrect: false, reason: '不是促音化。' },
            { text: 'とおか', isCorrect: false, reason: '「とおか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十時」讀「じゅうじ」。',
            relatedRules: ['小時的讀法', '電車時刻']
        },
        sourceItem: { value: 10, kanji: '十時', reading: 'じゅうじ' }
    },
    {
        id: 'hour_extra_24',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '銀行幾點開門？',
        stem_zh: '銀行幾點開門？',
        dialogue: {
            speakerA: '銀行は何時に開きますか？',
            speakerB: '＿＿に開きます。（九點）'
        },
        options: [
            { text: 'くじ', isCorrect: true, reason: '正確！九時讀「くじ」。' },
            { text: 'きゅうじ', isCorrect: false, reason: '九時固定讀「くじ」。' },
            { text: 'ここのじ', isCorrect: false, reason: '時間用音讀。' },
            { text: 'ここのか', isCorrect: false, reason: '「ここのか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九時」固定讀「くじ」。',
            relatedRules: ['九時的讀法', '銀行營業時間']
        },
        sourceItem: { value: 9, kanji: '九時', reading: 'くじ' }
    },
    {
        id: 'hour_extra_25',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「午後」的讀法是？',
        stem_zh: '「午後」的讀法是？',
        options: [
            { text: 'ごご', isCorrect: true, reason: '正確！午後讀「ごご」。' },
            { text: 'うまあと', isCorrect: false, reason: '「午」讀「ご」不是「うま」。' },
            { text: 'ひるあと', isCorrect: false, reason: '這是「昼後」的意思。' },
            { text: 'ごあと', isCorrect: false, reason: '「後」讀「ご」不是「あと」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「午後」讀「ごご」，意思是下午（PM）。',
            relatedRules: ['時間表達', '午前vs午後']
        },
        sourceItem: { value: 'PM', kanji: '午後', reading: 'ごご' }
    },
    {
        id: 'hour_extra_26',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: true,
        stem: '飛行機は午後＿＿に出発します。',
        stem_zh: '飛機在下午四點出發。',
        options: [
            { text: 'よじ', isCorrect: true, reason: '正確！四時讀「よじ」。' },
            { text: 'よんじ', isCorrect: false, reason: '陷阱！四時固定讀「よじ」。' },
            { text: 'しじ', isCorrect: false, reason: '四時讀「よじ」。' },
            { text: 'よっか', isCorrect: false, reason: '「よっか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四時」固定讀「よじ」。',
            trapExplanation: '四時是特殊讀法，禁止讀「よんじ」或「しじ」。',
            relatedRules: ['四時的讀法', '航班時刻']
        },
        sourceItem: { value: 4, kanji: '四時', reading: 'よじ' }
    },
    {
        id: 'hour_extra_27',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '電影幾點開始？',
        stem_zh: '電影幾點開始？',
        dialogue: {
            speakerA: '映画は何時からですか？',
            speakerB: '＿＿からです。（二點）'
        },
        options: [
            { text: 'にじ', isCorrect: true, reason: '正確！二時讀「にじ」。' },
            { text: 'ふたじ', isCorrect: false, reason: '時間使用音讀「に」。' },
            { text: 'ふつじ', isCorrect: false, reason: '不存在這個讀法。' },
            { text: 'ふつか', isCorrect: false, reason: '「ふつか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二時」讀「にじ」。',
            relatedRules: ['小時的讀法', '映画の時間']
        },
        sourceItem: { value: 2, kanji: '二時', reading: 'にじ' }
    },
    {
        id: 'hour_extra_28',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「正午」的讀法是？',
        stem_zh: '「正午」的讀法是？',
        options: [
            { text: 'しょうご', isCorrect: true, reason: '正確！正午讀「しょうご」。' },
            { text: 'せいご', isCorrect: false, reason: '「正」讀「しょう」不是「せい」。' },
            { text: 'まひる', isCorrect: false, reason: '「まひる」是「真昼」的讀法。' },
            { text: 'しょううま', isCorrect: false, reason: '「午」讀「ご」不是「うま」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「正午」讀「しょうご」，意思是中午12點。',
            relatedRules: ['時間表達', '正午=12時']
        },
        sourceItem: { value: 12, kanji: '正午', reading: 'しょうご' }
    },
    {
        id: 'hour_extra_29',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: 'ランチタイムは＿＿からです。',
        stem_zh: '午餐時間從十二點開始。',
        options: [
            { text: 'じゅうにじ', isCorrect: true, reason: '正確！十二時讀「じゅうにじ」。' },
            { text: 'じゅうふたじ', isCorrect: false, reason: '時間使用音讀「に」。' },
            { text: 'とおにじ', isCorrect: false, reason: '「十」讀「じゅう」。' },
            { text: 'じゅうににち', isCorrect: false, reason: '「にち」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十二時」讀「じゅうにじ」。',
            relatedRules: ['小時的讀法', 'ランチタイム']
        },
        sourceItem: { value: 12, kanji: '十二時', reading: 'じゅうにじ' }
    },
    {
        id: 'hour_extra_30',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: true,
        stem: '晚餐幾點吃？',
        stem_zh: '晚餐幾點吃？',
        dialogue: {
            speakerA: '夕食は何時に食べますか？',
            speakerB: '＿＿に食べます。（七點）'
        },
        options: [
            { text: 'しちじ', isCorrect: true, reason: '正確！七時讀「しちじ」。' },
            { text: 'ななじ', isCorrect: false, reason: '陷阱！七時固定讀「しちじ」。' },
            { text: 'なのか', isCorrect: false, reason: '「なのか」是日期。' },
            { text: 'ななとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七時」固定讀「しちじ」。',
            trapExplanation: '七時是特殊讀法，禁止讀「ななじ」。',
            relatedRules: ['七時的讀法', '夕食時間']
        },
        sourceItem: { value: 7, kanji: '七時', reading: 'しちじ' }
    },
    {
        id: 'hour_extra_31',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「何時」的讀法是？',
        stem_zh: '「何時」的讀法是？',
        options: [
            { text: 'なんじ', isCorrect: true, reason: '正確！何時讀「なんじ」。' },
            { text: 'なにじ', isCorrect: false, reason: '「何」在此讀「なん」。' },
            { text: 'いつ', isCorrect: false, reason: '「いつ」是「什麼時候」的意思。' },
            { text: 'かじ', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何時」讀「なんじ」，用來詢問時間。',
            relatedRules: ['疑問詞的讀法', '何時=なんじ']
        },
        sourceItem: { value: 'what time', kanji: '何時', reading: 'なんじ' }
    },
    {
        id: 'hour_extra_32',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '朝ごはんは＿＿に食べます。',
        stem_zh: '早餐在八點吃。',
        options: [
            { text: 'はちじ', isCorrect: true, reason: '正確！八時讀「はちじ」。' },
            { text: 'やじ', isCorrect: false, reason: '時間使用音讀「はち」。' },
            { text: 'はっじ', isCorrect: false, reason: '八時不促音化。' },
            { text: 'ようか', isCorrect: false, reason: '「ようか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八時」讀「はちじ」。',
            relatedRules: ['小時的讀法', '朝食時間']
        },
        sourceItem: { value: 8, kanji: '八時', reading: 'はちじ' }
    },
    {
        id: 'hour_extra_33',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '圖書館幾點關門？',
        stem_zh: '圖書館幾點關門？',
        dialogue: {
            speakerA: '図書館は何時に閉まりますか？',
            speakerB: '＿＿に閉まります。（五點）'
        },
        options: [
            { text: 'ごじ', isCorrect: true, reason: '正確！五時讀「ごじ」。' },
            { text: 'いつじ', isCorrect: false, reason: '時間使用音讀「ご」。' },
            { text: 'いつか', isCorrect: false, reason: '「いつか」是日期。' },
            { text: 'ごとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五時」讀「ごじ」。',
            relatedRules: ['小時的讀法', '図書館の閉館時間']
        },
        sourceItem: { value: 5, kanji: '五時', reading: 'ごじ' }
    },
    {
        id: 'hour_extra_34',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「深夜」的讀法是？',
        stem_zh: '「深夜」的讀法是？',
        options: [
            { text: 'しんや', isCorrect: true, reason: '正確！深夜讀「しんや」。' },
            { text: 'ふかよる', isCorrect: false, reason: '「深」讀「しん」，「夜」讀「や」。' },
            { text: 'しんよる', isCorrect: false, reason: '「夜」讀「や」不是「よる」。' },
            { text: 'ふかや', isCorrect: false, reason: '「深」讀「しん」不是「ふか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「深夜」讀「しんや」，意思是深夜。',
            relatedRules: ['時間表達', '深夜時段']
        },
        sourceItem: { value: 'late night', kanji: '深夜', reading: 'しんや' }
    },
    {
        id: 'hour_extra_35',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '会社は＿＿に終わります。',
        stem_zh: '公司在六點結束。',
        options: [
            { text: 'ろくじ', isCorrect: true, reason: '正確！六時讀「ろくじ」。' },
            { text: 'むじ', isCorrect: false, reason: '時間使用音讀「ろく」。' },
            { text: 'ろっじ', isCorrect: false, reason: '六時不促音化。' },
            { text: 'むいか', isCorrect: false, reason: '「むいか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六時」讀「ろくじ」。',
            relatedRules: ['小時的讀法', '退勤時間']
        },
        sourceItem: { value: 6, kanji: '六時', reading: 'ろくじ' }
    },
    {
        id: 'hour_extra_36',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '鬧鐘設幾點？',
        stem_zh: '鬧鐘設幾點？',
        dialogue: {
            speakerA: '目覚ましは何時にセットしますか？',
            speakerB: '＿＿にセットします。（六點半）'
        },
        options: [
            { text: 'ろくじはん', isCorrect: true, reason: '正確！六時半讀「ろくじはん」。' },
            { text: 'むじはん', isCorrect: false, reason: '時間使用音讀「ろく」。' },
            { text: 'ろくじなかば', isCorrect: false, reason: '「半」讀「はん」。' },
            { text: 'むいかはん', isCorrect: false, reason: '「むいか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六時半」讀「ろくじはん」。',
            relatedRules: ['時間表達', '目覚まし設定']
        },
        sourceItem: { value: '6:30', kanji: '六時半', reading: 'ろくじはん' }
    },
    {
        id: 'hour_extra_37',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「早朝」的讀法是？',
        stem_zh: '「早朝」的讀法是？',
        options: [
            { text: 'そうちょう', isCorrect: true, reason: '正確！早朝讀「そうちょう」。' },
            { text: 'はやあさ', isCorrect: false, reason: '「早」讀「そう」，「朝」讀「ちょう」。' },
            { text: 'さっちょう', isCorrect: false, reason: '「早」讀「そう」不是「さっ」。' },
            { text: 'はやちょう', isCorrect: false, reason: '「早」讀「そう」不是「はや」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「早朝」讀「そうちょう」，意思是清晨。',
            relatedRules: ['時間表達', '早朝時段']
        },
        sourceItem: { value: 'early morning', kanji: '早朝', reading: 'そうちょう' }
    },
    {
        id: 'hour_extra_38',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: true,
        stem: '電話は＿＿にかけてください。',
        stem_zh: '請在九點打電話。',
        options: [
            { text: 'くじ', isCorrect: true, reason: '正確！九時讀「くじ」。' },
            { text: 'きゅうじ', isCorrect: false, reason: '陷阱！九時固定讀「くじ」。' },
            { text: 'ここのじ', isCorrect: false, reason: '時間用音讀。' },
            { text: 'ここのか', isCorrect: false, reason: '「ここのか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九時」固定讀「くじ」。',
            trapExplanation: '九時是特殊讀法，禁止讀「きゅうじ」。',
            relatedRules: ['九時的讀法', '電話の時間']
        },
        sourceItem: { value: 9, kanji: '九時', reading: 'くじ' }
    },
    {
        id: 'hour_extra_39',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '午睡時間是幾點？',
        stem_zh: '午睡時間是幾點？',
        dialogue: {
            speakerA: 'お昼寝は何時からですか？',
            speakerB: '＿＿からです。（一點）'
        },
        options: [
            { text: 'いちじ', isCorrect: true, reason: '正確！一時讀「いちじ」。' },
            { text: 'ひとじ', isCorrect: false, reason: '時間使用音讀「いち」。' },
            { text: 'いっじ', isCorrect: false, reason: '不是促音化。' },
            { text: 'ついたち', isCorrect: false, reason: '「ついたち」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一時」讀「いちじ」。',
            relatedRules: ['小時的讀法', 'お昼寝時間']
        },
        sourceItem: { value: 1, kanji: '一時', reading: 'いちじ' }
    },
    {
        id: 'hour_extra_40',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「夕方」的讀法是？',
        stem_zh: '「夕方」的讀法是？',
        options: [
            { text: 'ゆうがた', isCorrect: true, reason: '正確！夕方讀「ゆうがた」。' },
            { text: 'せきほう', isCorrect: false, reason: '「夕方」讀「ゆうがた」。' },
            { text: 'ゆうほう', isCorrect: false, reason: '「方」讀「がた」不是「ほう」。' },
            { text: 'ゆうかた', isCorrect: false, reason: '「方」讀「がた」有濁音。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「夕方」讀「ゆうがた」，意思是傍晚。',
            relatedRules: ['時間表達', '夕方時段']
        },
        sourceItem: { value: 'evening', kanji: '夕方', reading: 'ゆうがた' }
    },
    {
        id: 'hour_extra_41',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: 'テレビのニュースは＿＿からです。',
        stem_zh: '電視新聞從十一點開始。',
        options: [
            { text: 'じゅういちじ', isCorrect: true, reason: '正確！十一時讀「じゅういちじ」。' },
            { text: 'とおいちじ', isCorrect: false, reason: '「十」讀「じゅう」。' },
            { text: 'じゅうひとじ', isCorrect: false, reason: '時間使用音讀「いち」。' },
            { text: 'じゅういちにち', isCorrect: false, reason: '「にち」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十一時」讀「じゅういちじ」。',
            relatedRules: ['小時的讀法', 'ニュースの時間']
        },
        sourceItem: { value: 11, kanji: '十一時', reading: 'じゅういちじ' }
    },
    {
        id: 'hour_extra_42',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: true,
        stem: '健身房幾點開？',
        stem_zh: '健身房幾點開？',
        dialogue: {
            speakerA: 'ジムは何時に開きますか？',
            speakerB: '＿＿に開きます。（七點）'
        },
        options: [
            { text: 'しちじ', isCorrect: true, reason: '正確！七時讀「しちじ」。' },
            { text: 'ななじ', isCorrect: false, reason: '陷阱！七時固定讀「しちじ」。' },
            { text: 'なのか', isCorrect: false, reason: '「なのか」是日期。' },
            { text: 'しちとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七時」固定讀「しちじ」。',
            trapExplanation: '七時是特殊讀法，禁止讀「ななじ」。',
            relatedRules: ['七時的讀法', 'ジムの営業時間']
        },
        sourceItem: { value: 7, kanji: '七時', reading: 'しちじ' }
    },
    {
        id: 'hour_extra_43',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「昼休み」的讀法是？',
        stem_zh: '「昼休み」的讀法是？',
        options: [
            { text: 'ひるやすみ', isCorrect: true, reason: '正確！昼休み讀「ひるやすみ」。' },
            { text: 'ちゅうきゅう', isCorrect: false, reason: '「昼休み」讀「ひるやすみ」。' },
            { text: 'ひるきゅうみ', isCorrect: false, reason: '「休み」讀「やすみ」。' },
            { text: 'ちゅうやすみ', isCorrect: false, reason: '「昼」讀「ひる」不是「ちゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「昼休み」讀「ひるやすみ」，意思是午休。',
            relatedRules: ['時間表達', '昼休み']
        },
        sourceItem: { value: 'lunch break', kanji: '昼休み', reading: 'ひるやすみ' }
    },
    {
        id: 'hour_extra_44',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: 'おやつは＿＿に食べます。',
        stem_zh: '點心在三點吃。',
        options: [
            { text: 'さんじ', isCorrect: true, reason: '正確！三時讀「さんじ」。' },
            { text: 'みじ', isCorrect: false, reason: '時間使用音讀「さん」。' },
            { text: 'さんとき', isCorrect: false, reason: '小時讀「じ」。' },
            { text: 'みっか', isCorrect: false, reason: '「みっか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三時」讀「さんじ」。日本傳統點心時間是下午三點。',
            relatedRules: ['小時的讀法', 'おやつの時間']
        },
        sourceItem: { value: 3, kanji: '三時', reading: 'さんじ' }
    },
    {
        id: 'hour_extra_45',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: true,
        stem: '最後一班電車是幾點？',
        stem_zh: '最後一班電車是幾點？',
        dialogue: {
            speakerA: '終電は何時ですか？',
            speakerB: '＿＿です。（零點）'
        },
        options: [
            { text: 'れいじ', isCorrect: true, reason: '正確！零時讀「れいじ」。' },
            { text: 'ぜろじ', isCorrect: false, reason: '「零」讀「れい」不是「ゼロ」。' },
            { text: 'まるじ', isCorrect: false, reason: '「零」讀「れい」不是「まる」。' },
            { text: 'なしじ', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「零時」讀「れいじ」，意思是午夜12點/0點。',
            trapExplanation: '日語正式用「零時」而非「ゼロ時」。',
            relatedRules: ['零時的讀法', '終電時間']
        },
        sourceItem: { value: 0, kanji: '零時', reading: 'れいじ' }
    },
    {
        id: 'hour_extra_46',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「朝」的讀法是？',
        stem_zh: '「朝」的讀法是？',
        options: [
            { text: 'あさ', isCorrect: true, reason: '正確！朝讀「あさ」。' },
            { text: 'ちょう', isCorrect: false, reason: '「ちょう」是音讀，單獨用訓讀「あさ」。' },
            { text: 'あした', isCorrect: false, reason: '「あした」是「明日」。' },
            { text: 'あさひ', isCorrect: false, reason: '「あさひ」是「朝日」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「朝」讀「あさ」，意思是早上。',
            relatedRules: ['時間表達', '朝的讀法']
        },
        sourceItem: { value: 'morning', kanji: '朝', reading: 'あさ' }
    },
    {
        id: 'hour_extra_47',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: true,
        stem: '授業は午後＿＿に始まります。',
        stem_zh: '課程在下午四點開始。',
        options: [
            { text: 'よじ', isCorrect: true, reason: '正確！四時讀「よじ」。' },
            { text: 'よんじ', isCorrect: false, reason: '陷阱！四時固定讀「よじ」。' },
            { text: 'しじ', isCorrect: false, reason: '四時讀「よじ」。' },
            { text: 'よっじ', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四時」固定讀「よじ」。',
            trapExplanation: '四時是特殊讀法，禁止讀「よんじ」或「しじ」。',
            relatedRules: ['四時的讀法', '授業時間']
        },
        sourceItem: { value: 4, kanji: '四時', reading: 'よじ' }
    },
    {
        id: 'hour_extra_48',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '飯店入住時間是幾點？',
        stem_zh: '飯店入住時間是幾點？',
        dialogue: {
            speakerA: 'チェックインは何時からですか？',
            speakerB: '＿＿からです。（三點）'
        },
        options: [
            { text: 'さんじ', isCorrect: true, reason: '正確！三時讀「さんじ」。' },
            { text: 'みじ', isCorrect: false, reason: '時間使用音讀「さん」。' },
            { text: 'さんとき', isCorrect: false, reason: '小時讀「じ」。' },
            { text: 'みっか', isCorrect: false, reason: '「みっか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三時」讀「さんじ」。',
            relatedRules: ['小時的讀法', 'チェックイン時間']
        },
        sourceItem: { value: 3, kanji: '三時', reading: 'さんじ' }
    },
    {
        id: 'hour_extra_49',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「夜」的讀法是？',
        stem_zh: '「夜」的讀法是？',
        options: [
            { text: 'よる', isCorrect: true, reason: '正確！夜讀「よる」。' },
            { text: 'や', isCorrect: false, reason: '「や」是音讀，單獨用訓讀「よる」。' },
            { text: 'よ', isCorrect: false, reason: '需要「る」。' },
            { text: 'やる', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「夜」讀「よる」，意思是晚上。',
            relatedRules: ['時間表達', '夜的讀法']
        },
        sourceItem: { value: 'night', kanji: '夜', reading: 'よる' }
    },
    {
        id: 'hour_extra_50',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: 'バスは＿＿に来ます。',
        stem_zh: '公車在十點來。',
        options: [
            { text: 'じゅうじ', isCorrect: true, reason: '正確！十時讀「じゅうじ」。' },
            { text: 'とおじ', isCorrect: false, reason: '時間使用音讀「じゅう」。' },
            { text: 'じゅっじ', isCorrect: false, reason: '不是促音化。' },
            { text: 'とおか', isCorrect: false, reason: '「とおか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十時」讀「じゅうじ」。',
            relatedRules: ['小時的讀法', 'バスの時間']
        },
        sourceItem: { value: 10, kanji: '十時', reading: 'じゅうじ' }
    },
    {
        id: 'hour_extra_51',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: true,
        stem: '會議結束是幾點？',
        stem_zh: '會議結束是幾點？',
        dialogue: {
            speakerA: '会議は何時に終わりますか？',
            speakerB: '＿＿に終わります。（四點）'
        },
        options: [
            { text: 'よじ', isCorrect: true, reason: '正確！四時讀「よじ」。' },
            { text: 'よんじ', isCorrect: false, reason: '陷阱！四時固定讀「よじ」。' },
            { text: 'しじ', isCorrect: false, reason: '四時讀「よじ」。' },
            { text: 'よっか', isCorrect: false, reason: '「よっか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四時」固定讀「よじ」。',
            trapExplanation: '四時是特殊讀法，禁止讀「よんじ」或「しじ」。',
            relatedRules: ['四時的讀法', '会議終了時間']
        },
        sourceItem: { value: 4, kanji: '四時', reading: 'よじ' }
    },
    // ===== 追加題目 52-121 =====
    {
        id: 'hour_extra_52',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「昼」的讀法是？',
        stem_zh: '「昼」的讀法是？',
        options: [
            { text: 'ひる', isCorrect: true, reason: '正確！昼讀「ひる」。' },
            { text: 'ちゅう', isCorrect: false, reason: '「ちゅう」是音讀，單獨用訓讀「ひる」。' },
            { text: 'ひ', isCorrect: false, reason: '需要「る」。' },
            { text: 'ちる', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「昼」讀「ひる」，意思是白天/中午。',
            relatedRules: ['時間表達', '昼的讀法']
        },
        sourceItem: { value: 'noon', kanji: '昼', reading: 'ひる' }
    },
    {
        id: 'hour_extra_53',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: 'スーパーは＿＿まで開いています。',
        stem_zh: '超市營業到十點。',
        options: [
            { text: 'じゅうじ', isCorrect: true, reason: '正確！十時讀「じゅうじ」。' },
            { text: 'とおじ', isCorrect: false, reason: '時間使用音讀「じゅう」。' },
            { text: 'じゅっじ', isCorrect: false, reason: '不是促音化。' },
            { text: 'とおか', isCorrect: false, reason: '「とおか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十時」讀「じゅうじ」。',
            relatedRules: ['小時的讀法', 'スーパーの営業時間']
        },
        sourceItem: { value: 10, kanji: '十時', reading: 'じゅうじ' }
    },
    {
        id: 'hour_extra_54',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: true,
        stem: '約會是幾點？',
        stem_zh: '約會是幾點？',
        dialogue: {
            speakerA: 'デートは何時ですか？',
            speakerB: '＿＿です。（七點半）'
        },
        options: [
            { text: 'しちじはん', isCorrect: true, reason: '正確！七時半讀「しちじはん」。' },
            { text: 'ななじはん', isCorrect: false, reason: '陷阱！七時固定讀「しちじ」。' },
            { text: 'なのかはん', isCorrect: false, reason: '「なのか」是日期。' },
            { text: 'しちとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七時半」讀「しちじはん」。',
            trapExplanation: '七時是特殊讀法，禁止讀「ななじ」。',
            relatedRules: ['七時的讀法', 'デートの時間']
        },
        sourceItem: { value: '7:30', kanji: '七時半', reading: 'しちじはん' }
    },
    {
        id: 'hour_extra_55',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「今朝」的讀法是？',
        stem_zh: '「今朝」的讀法是？',
        options: [
            { text: 'けさ', isCorrect: true, reason: '正確！今朝讀「けさ」。' },
            { text: 'いまあさ', isCorrect: false, reason: '「今朝」的特殊讀法是「けさ」。' },
            { text: 'こんちょう', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'きょうあさ', isCorrect: false, reason: '「今朝」的特殊讀法是「けさ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「今朝」讀「けさ」，意思是今天早上。',
            relatedRules: ['時間表達', '今朝=けさ']
        },
        sourceItem: { value: 'this morning', kanji: '今朝', reading: 'けさ' }
    },
    {
        id: 'hour_extra_56',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '薬は＿＿に飲んでください。',
        stem_zh: '請在八點吃藥。',
        options: [
            { text: 'はちじ', isCorrect: true, reason: '正確！八時讀「はちじ」。' },
            { text: 'やじ', isCorrect: false, reason: '時間使用音讀「はち」。' },
            { text: 'はっじ', isCorrect: false, reason: '八時不促音化。' },
            { text: 'ようか', isCorrect: false, reason: '「ようか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八時」讀「はちじ」。',
            relatedRules: ['小時的讀法', '服薬時間']
        },
        sourceItem: { value: 8, kanji: '八時', reading: 'はちじ' }
    },
    {
        id: 'hour_extra_57',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: true,
        stem: '醫生的診療時間是幾點？',
        stem_zh: '醫生的診療時間是幾點？',
        dialogue: {
            speakerA: '診察時間は何時からですか？',
            speakerB: '＿＿からです。（九點半）'
        },
        options: [
            { text: 'くじはん', isCorrect: true, reason: '正確！九時半讀「くじはん」。' },
            { text: 'きゅうじはん', isCorrect: false, reason: '陷阱！九時固定讀「くじ」。' },
            { text: 'ここのじはん', isCorrect: false, reason: '時間用音讀。' },
            { text: 'ここのかはん', isCorrect: false, reason: '「ここのか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九時半」讀「くじはん」。',
            trapExplanation: '九時是特殊讀法，禁止讀「きゅうじ」。',
            relatedRules: ['九時的讀法', '診察時間']
        },
        sourceItem: { value: '9:30', kanji: '九時半', reading: 'くじはん' }
    },
    {
        id: 'hour_extra_58',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「今夜」的讀法是？',
        stem_zh: '「今夜」的讀法是？',
        options: [
            { text: 'こんや', isCorrect: true, reason: '正確！今夜讀「こんや」。' },
            { text: 'いまよる', isCorrect: false, reason: '「今夜」讀「こんや」。' },
            { text: 'こんよる', isCorrect: false, reason: '「夜」讀「や」不是「よる」。' },
            { text: 'きょうよる', isCorrect: false, reason: '「今夜」讀「こんや」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「今夜」讀「こんや」，意思是今天晚上。',
            relatedRules: ['時間表達', '今夜=こんや']
        },
        sourceItem: { value: 'tonight', kanji: '今夜', reading: 'こんや' }
    },
    {
        id: 'hour_extra_59',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: 'カフェは＿＿から開いています。',
        stem_zh: '咖啡廳從十一點開始營業。',
        options: [
            { text: 'じゅういちじ', isCorrect: true, reason: '正確！十一時讀「じゅういちじ」。' },
            { text: 'とおいちじ', isCorrect: false, reason: '「十」讀「じゅう」。' },
            { text: 'じゅうひとじ', isCorrect: false, reason: '時間使用音讀「いち」。' },
            { text: 'じゅういちにち', isCorrect: false, reason: '「にち」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十一時」讀「じゅういちじ」。',
            relatedRules: ['小時的讀法', 'カフェの営業時間']
        },
        sourceItem: { value: 11, kanji: '十一時', reading: 'じゅういちじ' }
    },
    {
        id: 'hour_extra_60',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '郵局幾點關門？',
        stem_zh: '郵局幾點關門？',
        dialogue: {
            speakerA: '郵便局は何時に閉まりますか？',
            speakerB: '＿＿に閉まります。（五點）'
        },
        options: [
            { text: 'ごじ', isCorrect: true, reason: '正確！五時讀「ごじ」。' },
            { text: 'いつじ', isCorrect: false, reason: '時間使用音讀「ご」。' },
            { text: 'いつか', isCorrect: false, reason: '「いつか」是日期。' },
            { text: 'ごとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五時」讀「ごじ」。',
            relatedRules: ['小時的讀法', '郵便局の閉店時間']
        },
        sourceItem: { value: 5, kanji: '五時', reading: 'ごじ' }
    },
    {
        id: 'hour_extra_61',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「昨夜」的讀法是？',
        stem_zh: '「昨夜」的讀法是？',
        options: [
            { text: 'ゆうべ / さくや', isCorrect: true, reason: '正確！昨夜讀「ゆうべ」或「さくや」。' },
            { text: 'きのうよる', isCorrect: false, reason: '「昨夜」有特殊讀法。' },
            { text: 'さくよる', isCorrect: false, reason: '「夜」讀「や」不是「よる」。' },
            { text: 'きのうや', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「昨夜」讀「ゆうべ」或「さくや」，意思是昨天晚上。',
            relatedRules: ['時間表達', '昨夜的讀法']
        },
        sourceItem: { value: 'last night', kanji: '昨夜', reading: 'ゆうべ' }
    },
    {
        id: 'hour_extra_62',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: true,
        stem: '塾は＿＿に終わります。',
        stem_zh: '補習班在九點結束。',
        options: [
            { text: 'くじ', isCorrect: true, reason: '正確！九時讀「くじ」。' },
            { text: 'きゅうじ', isCorrect: false, reason: '陷阱！九時固定讀「くじ」。' },
            { text: 'ここのじ', isCorrect: false, reason: '時間用音讀。' },
            { text: 'ここのか', isCorrect: false, reason: '「ここのか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九時」固定讀「くじ」。',
            trapExplanation: '九時是特殊讀法，禁止讀「きゅうじ」。',
            relatedRules: ['九時的讀法', '塾の終了時間']
        },
        sourceItem: { value: 9, kanji: '九時', reading: 'くじ' }
    },
    {
        id: 'hour_extra_63',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '快遞幾點會到？',
        stem_zh: '快遞幾點會到？',
        dialogue: {
            speakerA: '宅配便は何時に届きますか？',
            speakerB: '＿＿頃届きます。（二點）'
        },
        options: [
            { text: 'にじ', isCorrect: true, reason: '正確！二時讀「にじ」。' },
            { text: 'ふたじ', isCorrect: false, reason: '時間使用音讀「に」。' },
            { text: 'ふつじ', isCorrect: false, reason: '不存在這個讀法。' },
            { text: 'ふつか', isCorrect: false, reason: '「ふつか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二時」讀「にじ」。',
            relatedRules: ['小時的讀法', '宅配便の時間']
        },
        sourceItem: { value: 2, kanji: '二時', reading: 'にじ' }
    },
    {
        id: 'hour_extra_64',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: true,
        stem: '總復習：哪些小時有特殊讀法？',
        stem_zh: '總復習：哪些小時有特殊讀法？',
        options: [
            { text: '4時（よじ）、7時（しちじ）、9時（くじ）', isCorrect: true, reason: '正確！這三個小時有特殊讀法。' },
            { text: '只有4時', isCorrect: false, reason: '4時、7時、9時都有特殊讀法。' },
            { text: '1-12時都是特殊讀法', isCorrect: false, reason: '只有4時、7時、9時是特殊讀法。' },
            { text: '沒有特殊讀法', isCorrect: false, reason: '4時、7時、9時有特殊讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '4時（よじ）、7時（しちじ）、9時（くじ）是三個特殊讀法。',
            trapExplanation: '這是總結性題目，掌握小時的特殊讀法。',
            relatedRules: ['小時的特殊讀法', '4/7/9時']
        },
        sourceItem: { value: 'special', kanji: '特殊小時', reading: '4/7/9時' }
    },
    {
        id: 'hour_extra_65',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: 'コンビニは＿＿時間営業です。',
        stem_zh: '便利商店24小時營業。',
        options: [
            { text: 'にじゅうよ', isCorrect: true, reason: '正確！二十四讀「にじゅうよ」。' },
            { text: 'にじゅうし', isCorrect: false, reason: '24時間的24讀「にじゅうよ」。' },
            { text: 'にじゅうよん', isCorrect: false, reason: '「24時間」的讀法是「にじゅうよじかん」。' },
            { text: 'にじゅうよっ', isCorrect: false, reason: '需要「よ」不是「よっ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「24時間」讀「にじゅうよじかん」，24的讀法是「にじゅうよ」。',
            relatedRules: ['時間表達', '24時間営業']
        },
        sourceItem: { value: 24, kanji: '二十四時間', reading: 'にじゅうよじかん' }
    },
    {
        id: 'hour_extra_66',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: true,
        stem: '演唱會幾點開始？',
        stem_zh: '演唱會幾點開始？',
        dialogue: {
            speakerA: 'コンサートは何時からですか？',
            speakerB: '＿＿からです。（七點）'
        },
        options: [
            { text: 'しちじ', isCorrect: true, reason: '正確！七時讀「しちじ」。' },
            { text: 'ななじ', isCorrect: false, reason: '陷阱！七時固定讀「しちじ」。' },
            { text: 'なのか', isCorrect: false, reason: '「なのか」是日期。' },
            { text: 'しちとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七時」固定讀「しちじ」。',
            trapExplanation: '七時是特殊讀法，禁止讀「ななじ」。',
            relatedRules: ['七時的讀法', 'コンサートの時間']
        },
        sourceItem: { value: 7, kanji: '七時', reading: 'しちじ' }
    },
    {
        id: 'hour_extra_67',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「明朝」的讀法是？',
        stem_zh: '「明朝」的讀法是？',
        options: [
            { text: 'みょうちょう', isCorrect: true, reason: '正確！明朝讀「みょうちょう」。' },
            { text: 'あしたあさ', isCorrect: false, reason: '「明朝」讀「みょうちょう」。' },
            { text: 'あすあさ', isCorrect: false, reason: '「明朝」讀「みょうちょう」。' },
            { text: 'めいちょう', isCorrect: false, reason: '「明」讀「みょう」不是「めい」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「明朝」讀「みょうちょう」，意思是明天早上。',
            relatedRules: ['時間表達', '明朝=みょうちょう']
        },
        sourceItem: { value: 'tomorrow morning', kanji: '明朝', reading: 'みょうちょう' }
    },
    {
        id: 'hour_extra_68',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '美容院の予約は＿＿です。',
        stem_zh: '美容院的預約是三點半。',
        options: [
            { text: 'さんじはん', isCorrect: true, reason: '正確！三時半讀「さんじはん」。' },
            { text: 'みじはん', isCorrect: false, reason: '時間使用音讀「さん」。' },
            { text: 'さんときはん', isCorrect: false, reason: '小時讀「じ」。' },
            { text: 'みっかはん', isCorrect: false, reason: '「みっか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三時半」讀「さんじはん」。',
            relatedRules: ['時間表達', '美容院の予約']
        },
        sourceItem: { value: '3:30', kanji: '三時半', reading: 'さんじはん' }
    },
    {
        id: 'hour_extra_69',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: true,
        stem: '瑜伽課幾點開始？',
        stem_zh: '瑜伽課幾點開始？',
        dialogue: {
            speakerA: 'ヨガのクラスは何時からですか？',
            speakerB: '＿＿からです。（四點）'
        },
        options: [
            { text: 'よじ', isCorrect: true, reason: '正確！四時讀「よじ」。' },
            { text: 'よんじ', isCorrect: false, reason: '陷阱！四時固定讀「よじ」。' },
            { text: 'しじ', isCorrect: false, reason: '四時讀「よじ」。' },
            { text: 'よっか', isCorrect: false, reason: '「よっか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四時」固定讀「よじ」。',
            trapExplanation: '四時是特殊讀法，禁止讀「よんじ」或「しじ」。',
            relatedRules: ['四時的讀法', 'ヨガの時間']
        },
        sourceItem: { value: 4, kanji: '四時', reading: 'よじ' }
    },
    {
        id: 'hour_extra_70',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「真夜中」的讀法是？',
        stem_zh: '「真夜中」的讀法是？',
        options: [
            { text: 'まよなか', isCorrect: true, reason: '正確！真夜中讀「まよなか」。' },
            { text: 'しんやちゅう', isCorrect: false, reason: '「真夜中」讀「まよなか」。' },
            { text: 'まよるなか', isCorrect: false, reason: '「夜」讀「よ」不是「よる」。' },
            { text: 'まやなか', isCorrect: false, reason: '需要「よ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「真夜中」讀「まよなか」，意思是半夜。',
            relatedRules: ['時間表達', '真夜中=まよなか']
        },
        sourceItem: { value: 'midnight', kanji: '真夜中', reading: 'まよなか' }
    },
    {
        id: 'hour_extra_71',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '電車は＿＿に出発します。',
        stem_zh: '電車在一點出發。',
        options: [
            { text: 'いちじ', isCorrect: true, reason: '正確！一時讀「いちじ」。' },
            { text: 'ひとじ', isCorrect: false, reason: '時間使用音讀「いち」。' },
            { text: 'いっじ', isCorrect: false, reason: '不是促音化。' },
            { text: 'ついたち', isCorrect: false, reason: '「ついたち」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一時」讀「いちじ」。',
            relatedRules: ['小時的讀法', '電車の出発時間']
        },
        sourceItem: { value: 1, kanji: '一時', reading: 'いちじ' }
    },
    {
        id: 'hour_extra_72',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '商店街幾點開門？',
        stem_zh: '商店街幾點開門？',
        dialogue: {
            speakerA: '商店街は何時に開きますか？',
            speakerB: '＿＿に開きます。（十點）'
        },
        options: [
            { text: 'じゅうじ', isCorrect: true, reason: '正確！十時讀「じゅうじ」。' },
            { text: 'とおじ', isCorrect: false, reason: '時間使用音讀「じゅう」。' },
            { text: 'じゅっじ', isCorrect: false, reason: '不是促音化。' },
            { text: 'とおか', isCorrect: false, reason: '「とおか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十時」讀「じゅうじ」。',
            relatedRules: ['小時的讀法', '商店街の開店時間']
        },
        sourceItem: { value: 10, kanji: '十時', reading: 'じゅうじ' }
    },
    {
        id: 'hour_extra_73',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「日中」的讀法是？',
        stem_zh: '「日中」的讀法是？',
        options: [
            { text: 'にっちゅう', isCorrect: true, reason: '正確！日中讀「にっちゅう」。' },
            { text: 'ひなか', isCorrect: false, reason: '「日中」讀「にっちゅう」。' },
            { text: 'ひるなか', isCorrect: false, reason: '「日中」讀「にっちゅう」。' },
            { text: 'にちじゅう', isCorrect: false, reason: '有促音「っ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「日中」讀「にっちゅう」，意思是白天。',
            relatedRules: ['時間表達', '日中=にっちゅう']
        },
        sourceItem: { value: 'daytime', kanji: '日中', reading: 'にっちゅう' }
    },
    {
        id: 'hour_extra_74',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: true,
        stem: '美術館は＿＿まで開いています。',
        stem_zh: '美術館營業到四點。',
        options: [
            { text: 'よじ', isCorrect: true, reason: '正確！四時讀「よじ」。' },
            { text: 'よんじ', isCorrect: false, reason: '陷阱！四時固定讀「よじ」。' },
            { text: 'しじ', isCorrect: false, reason: '四時讀「よじ」。' },
            { text: 'よっか', isCorrect: false, reason: '「よっか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四時」固定讀「よじ」。',
            trapExplanation: '四時是特殊讀法，禁止讀「よんじ」或「しじ」。',
            relatedRules: ['四時的讀法', '美術館の閉館時間']
        },
        sourceItem: { value: 4, kanji: '四時', reading: 'よじ' }
    },
    {
        id: 'hour_extra_75',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '網球練習是幾點？',
        stem_zh: '網球練習是幾點？',
        dialogue: {
            speakerA: 'テニスの練習は何時からですか？',
            speakerB: '＿＿からです。（六點）'
        },
        options: [
            { text: 'ろくじ', isCorrect: true, reason: '正確！六時讀「ろくじ」。' },
            { text: 'むじ', isCorrect: false, reason: '時間使用音讀「ろく」。' },
            { text: 'ろっじ', isCorrect: false, reason: '六時不促音化。' },
            { text: 'むいか', isCorrect: false, reason: '「むいか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六時」讀「ろくじ」。',
            relatedRules: ['小時的讀法', 'テニスの練習時間']
        },
        sourceItem: { value: 6, kanji: '六時', reading: 'ろくじ' }
    },
    {
        id: 'hour_extra_76',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: true,
        stem: '為什麼4時、7時、9時有特殊讀法？',
        stem_zh: '為什麼4時、7時、9時有特殊讀法？',
        options: [
            { text: '避免與「死」「質」等不吉字同音', isCorrect: true, reason: '正確！這是避諱讀法。' },
            { text: '沒有特別原因', isCorrect: false, reason: '有歷史和文化原因。' },
            { text: '這是外來語讀法', isCorrect: false, reason: '這是日本傳統的避諱讀法。' },
            { text: '發音比較好聽', isCorrect: false, reason: '主要是避諱不吉利的同音字。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '4時避免「しじ」（與「死」同音），7時、9時也是為了避免不吉利的同音。',
            trapExplanation: '了解這些讀法的文化背景。',
            relatedRules: ['小時的特殊讀法', '日本文化']
        },
        sourceItem: { value: 'cultural', kanji: '文化背景', reading: '避諱讀法' }
    },
    {
        id: 'hour_extra_77',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '映画は＿＿に終わります。',
        stem_zh: '電影在十二點結束。',
        options: [
            { text: 'じゅうにじ', isCorrect: true, reason: '正確！十二時讀「じゅうにじ」。' },
            { text: 'じゅうふたじ', isCorrect: false, reason: '時間使用音讀「に」。' },
            { text: 'とおにじ', isCorrect: false, reason: '「十」讀「じゅう」。' },
            { text: 'じゅうににち', isCorrect: false, reason: '「にち」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十二時」讀「じゅうにじ」。',
            relatedRules: ['小時的讀法', '映画の終了時間']
        },
        sourceItem: { value: 12, kanji: '十二時', reading: 'じゅうにじ' }
    },
    {
        id: 'hour_extra_78',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: true,
        stem: '夜間巴士幾點發車？',
        stem_zh: '夜間巴士幾點發車？',
        dialogue: {
            speakerA: '夜行バスは何時発ですか？',
            speakerB: '＿＿発です。（九點）'
        },
        options: [
            { text: 'くじ', isCorrect: true, reason: '正確！九時讀「くじ」。' },
            { text: 'きゅうじ', isCorrect: false, reason: '陷阱！九時固定讀「くじ」。' },
            { text: 'ここのじ', isCorrect: false, reason: '時間用音讀。' },
            { text: 'ここのか', isCorrect: false, reason: '「ここのか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九時」固定讀「くじ」。',
            trapExplanation: '九時是特殊讀法，禁止讀「きゅうじ」。',
            relatedRules: ['九時的讀法', '夜行バスの時間']
        },
        sourceItem: { value: 9, kanji: '九時', reading: 'くじ' }
    },
    {
        id: 'hour_extra_79',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「午前中」的讀法是？',
        stem_zh: '「午前中」的讀法是？',
        options: [
            { text: 'ごぜんちゅう', isCorrect: true, reason: '正確！午前中讀「ごぜんちゅう」。' },
            { text: 'ごぜんなか', isCorrect: false, reason: '「中」讀「ちゅう」不是「なか」。' },
            { text: 'うまえちゅう', isCorrect: false, reason: '「午前」讀「ごぜん」。' },
            { text: 'ごまえちゅう', isCorrect: false, reason: '「前」讀「ぜん」不是「まえ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「午前中」讀「ごぜんちゅう」，意思是上午期間。',
            relatedRules: ['時間表達', '午前中']
        },
        sourceItem: { value: 'in the morning', kanji: '午前中', reading: 'ごぜんちゅう' }
    },
    {
        id: 'hour_extra_80',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '起床は毎朝＿＿です。',
        stem_zh: '每天早上七點起床。',
        options: [
            { text: 'しちじ', isCorrect: true, reason: '正確！七時讀「しちじ」。' },
            { text: 'ななじ', isCorrect: false, reason: '七時固定讀「しちじ」。' },
            { text: 'なのか', isCorrect: false, reason: '「なのか」是日期。' },
            { text: 'しちとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七時」固定讀「しちじ」。',
            relatedRules: ['七時的讀法', '起床時間']
        },
        sourceItem: { value: 7, kanji: '七時', reading: 'しちじ' }
    },
    {
        id: 'hour_extra_81',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '烤肉店幾點結束營業？',
        stem_zh: '烤肉店幾點結束營業？',
        dialogue: {
            speakerA: '焼肉屋は何時までですか？',
            speakerB: '＿＿までです。（十一點）'
        },
        options: [
            { text: 'じゅういちじ', isCorrect: true, reason: '正確！十一時讀「じゅういちじ」。' },
            { text: 'とおいちじ', isCorrect: false, reason: '「十」讀「じゅう」。' },
            { text: 'じゅうひとじ', isCorrect: false, reason: '時間使用音讀「いち」。' },
            { text: 'じゅういちにち', isCorrect: false, reason: '「にち」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十一時」讀「じゅういちじ」。',
            relatedRules: ['小時的讀法', '焼肉屋の営業時間']
        },
        sourceItem: { value: 11, kanji: '十一時', reading: 'じゅういちじ' }
    },
    {
        id: 'hour_extra_82',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「夜中」的讀法是？',
        stem_zh: '「夜中」的讀法是？',
        options: [
            { text: 'よなか', isCorrect: true, reason: '正確！夜中讀「よなか」。' },
            { text: 'やちゅう', isCorrect: false, reason: '「夜中」讀「よなか」。' },
            { text: 'よるなか', isCorrect: false, reason: '「夜」讀「よ」不是「よる」。' },
            { text: 'やなか', isCorrect: false, reason: '需要「よ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「夜中」讀「よなか」，意思是半夜。',
            relatedRules: ['時間表達', '夜中=よなか']
        },
        sourceItem: { value: 'in the night', kanji: '夜中', reading: 'よなか' }
    },
    {
        id: 'hour_extra_83',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: true,
        stem: '飛行機は＿＿に到着します。',
        stem_zh: '飛機在九點到達。',
        options: [
            { text: 'くじ', isCorrect: true, reason: '正確！九時讀「くじ」。' },
            { text: 'きゅうじ', isCorrect: false, reason: '陷阱！九時固定讀「くじ」。' },
            { text: 'ここのじ', isCorrect: false, reason: '時間用音讀。' },
            { text: 'ここのか', isCorrect: false, reason: '「ここのか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九時」固定讀「くじ」。',
            trapExplanation: '九時是特殊讀法，禁止讀「きゅうじ」。',
            relatedRules: ['九時的讀法', '飛行機の到着時間']
        },
        sourceItem: { value: 9, kanji: '九時', reading: 'くじ' }
    },
    {
        id: 'hour_extra_84',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '睡覺時間是幾點？',
        stem_zh: '睡覺時間是幾點？',
        dialogue: {
            speakerA: '寝る時間は何時ですか？',
            speakerB: '＿＿に寝ます。（十點半）'
        },
        options: [
            { text: 'じゅうじはん', isCorrect: true, reason: '正確！十時半讀「じゅうじはん」。' },
            { text: 'とおじはん', isCorrect: false, reason: '時間使用音讀「じゅう」。' },
            { text: 'じゅっじはん', isCorrect: false, reason: '不是促音化。' },
            { text: 'とおかはん', isCorrect: false, reason: '「とおか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十時半」讀「じゅうじはん」。',
            relatedRules: ['時間表達', '就寝時間']
        },
        sourceItem: { value: '10:30', kanji: '十時半', reading: 'じゅうじはん' }
    },
    {
        id: 'hour_extra_85',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「今晩」的讀法是？',
        stem_zh: '「今晩」的讀法是？',
        options: [
            { text: 'こんばん', isCorrect: true, reason: '正確！今晩讀「こんばん」。' },
            { text: 'いまばん', isCorrect: false, reason: '「今」讀「こん」不是「いま」。' },
            { text: 'こんよる', isCorrect: false, reason: '「晩」讀「ばん」不是「よる」。' },
            { text: 'きょうばん', isCorrect: false, reason: '「今」讀「こん」不是「きょう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「今晩」讀「こんばん」，意思是今天晚上。',
            relatedRules: ['時間表達', '今晩=こんばん']
        },
        sourceItem: { value: 'this evening', kanji: '今晩', reading: 'こんばん' }
    },
    {
        id: 'hour_extra_86',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: true,
        stem: '幼稚園は＿＿までです。',
        stem_zh: '幼稚園到下午四點。',
        options: [
            { text: 'よじ', isCorrect: true, reason: '正確！四時讀「よじ」。' },
            { text: 'よんじ', isCorrect: false, reason: '陷阱！四時固定讀「よじ」。' },
            { text: 'しじ', isCorrect: false, reason: '四時讀「よじ」。' },
            { text: 'よっか', isCorrect: false, reason: '「よっか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四時」固定讀「よじ」。',
            trapExplanation: '四時是特殊讀法，禁止讀「よんじ」或「しじ」。',
            relatedRules: ['四時的讀法', '幼稚園の時間']
        },
        sourceItem: { value: 4, kanji: '四時', reading: 'よじ' }
    },
    {
        id: 'hour_extra_87',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '早餐到幾點？',
        stem_zh: '早餐到幾點？',
        dialogue: {
            speakerA: '朝食は何時までですか？',
            speakerB: '＿＿までです。（十點）'
        },
        options: [
            { text: 'じゅうじ', isCorrect: true, reason: '正確！十時讀「じゅうじ」。' },
            { text: 'とおじ', isCorrect: false, reason: '時間使用音讀「じゅう」。' },
            { text: 'じゅっじ', isCorrect: false, reason: '不是促音化。' },
            { text: 'とおか', isCorrect: false, reason: '「とおか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十時」讀「じゅうじ」。',
            relatedRules: ['小時的讀法', '朝食の時間']
        },
        sourceItem: { value: 10, kanji: '十時', reading: 'じゅうじ' }
    },
    {
        id: 'hour_extra_88',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「明晩」的讀法是？',
        stem_zh: '「明晩」的讀法是？',
        options: [
            { text: 'みょうばん', isCorrect: true, reason: '正確！明晩讀「みょうばん」。' },
            { text: 'あしたばん', isCorrect: false, reason: '「明」讀「みょう」不是「あした」。' },
            { text: 'あすばん', isCorrect: false, reason: '「明晩」讀「みょうばん」。' },
            { text: 'めいばん', isCorrect: false, reason: '「明」讀「みょう」不是「めい」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「明晩」讀「みょうばん」，意思是明天晚上。',
            relatedRules: ['時間表達', '明晩=みょうばん']
        },
        sourceItem: { value: 'tomorrow evening', kanji: '明晩', reading: 'みょうばん' }
    },
    {
        id: 'hour_extra_89',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '總復習：「1時」讀作？',
        stem_zh: '總復習：「1時」讀作？',
        options: [
            { text: 'いちじ', isCorrect: true, reason: '正確！一時讀「いちじ」。' },
            { text: 'ひとじ', isCorrect: false, reason: '時間使用音讀「いち」。' },
            { text: 'いっじ', isCorrect: false, reason: '不是促音化。' },
            { text: 'ついたち', isCorrect: false, reason: '「ついたち」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一時」讀「いちじ」，是一般讀法。',
            relatedRules: ['小時的讀法', '1時']
        },
        sourceItem: { value: 1, kanji: '一時', reading: 'いちじ' }
    },
    {
        id: 'hour_extra_90',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: true,
        stem: '晚會幾點開始？',
        stem_zh: '晚會幾點開始？',
        dialogue: {
            speakerA: 'パーティーは何時からですか？',
            speakerB: '＿＿からです。（七點半）'
        },
        options: [
            { text: 'しちじはん', isCorrect: true, reason: '正確！七時半讀「しちじはん」。' },
            { text: 'ななじはん', isCorrect: false, reason: '陷阱！七時固定讀「しちじ」。' },
            { text: 'なのかはん', isCorrect: false, reason: '「なのか」是日期。' },
            { text: 'しちとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七時半」讀「しちじはん」。',
            trapExplanation: '七時是特殊讀法，禁止讀「ななじ」。',
            relatedRules: ['七時的讀法', 'パーティーの時間']
        },
        sourceItem: { value: '7:30', kanji: '七時半', reading: 'しちじはん' }
    },
    {
        id: 'hour_extra_91',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: true,
        stem: '總復習：「4時」不能讀作？',
        stem_zh: '總復習：「4時」不能讀作？',
        options: [
            { text: 'しじ / よんじ', isCorrect: true, reason: '正確！4時只能讀「よじ」。' },
            { text: 'よじ', isCorrect: false, reason: '「よじ」是正確讀法。' },
            { text: 'よじ和しじ都可以', isCorrect: false, reason: '只能讀「よじ」。' },
            { text: '沒有限制', isCorrect: false, reason: '有限制，只能讀「よじ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「4時」只能讀「よじ」，「しじ」「よんじ」都是錯誤的。',
            trapExplanation: '掌握4時的正確讀法非常重要。',
            relatedRules: ['四時的讀法', '禁止讀法']
        },
        sourceItem: { value: 4, kanji: '四時', reading: 'よじ' }
    },
    // ===== 追加題目 92-121 =====
    {
        id: 'hour_extra_92',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '總復習：「2時」讀作？',
        stem_zh: '總復習：「2時」讀作？',
        options: [
            { text: 'にじ', isCorrect: true, reason: '正確！二時讀「にじ」。' },
            { text: 'ふたじ', isCorrect: false, reason: '時間使用音讀「に」。' },
            { text: 'ふつじ', isCorrect: false, reason: '不存在這個讀法。' },
            { text: 'ふつか', isCorrect: false, reason: '「ふつか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二時」讀「にじ」，是一般讀法。',
            relatedRules: ['小時的讀法', '2時']
        },
        sourceItem: { value: 2, kanji: '二時', reading: 'にじ' }
    },
    {
        id: 'hour_extra_93',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '學校幾點下課？',
        stem_zh: '學校幾點下課？',
        dialogue: {
            speakerA: '学校は何時に終わりますか？',
            speakerB: '＿＿に終わります。（三點）'
        },
        options: [
            { text: 'さんじ', isCorrect: true, reason: '正確！三時讀「さんじ」。' },
            { text: 'みじ', isCorrect: false, reason: '時間使用音讀「さん」。' },
            { text: 'さんとき', isCorrect: false, reason: '小時讀「じ」。' },
            { text: 'みっか', isCorrect: false, reason: '「みっか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三時」讀「さんじ」。',
            relatedRules: ['小時的讀法', '学校の終了時間']
        },
        sourceItem: { value: 3, kanji: '三時', reading: 'さんじ' }
    },
    {
        id: 'hour_extra_94',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: true,
        stem: '總復習：「7時」不能讀作？',
        stem_zh: '總復習：「7時」不能讀作？',
        options: [
            { text: 'ななじ', isCorrect: true, reason: '正確！7時只能讀「しちじ」。' },
            { text: 'しちじ', isCorrect: false, reason: '「しちじ」是正確讀法。' },
            { text: 'しちじ和ななじ都可以', isCorrect: false, reason: '只能讀「しちじ」。' },
            { text: '沒有限制', isCorrect: false, reason: '有限制，只能讀「しちじ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「7時」只能讀「しちじ」，「ななじ」是錯誤的。',
            trapExplanation: '掌握7時的正確讀法非常重要。',
            relatedRules: ['七時的讀法', '禁止讀法']
        },
        sourceItem: { value: 7, kanji: '七時', reading: 'しちじ' }
    },
    {
        id: 'hour_extra_95',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '總復習：「5時」讀作？',
        stem_zh: '總復習：「5時」讀作？',
        options: [
            { text: 'ごじ', isCorrect: true, reason: '正確！五時讀「ごじ」。' },
            { text: 'いつじ', isCorrect: false, reason: '時間使用音讀「ご」。' },
            { text: 'いつか', isCorrect: false, reason: '「いつか」是日期。' },
            { text: 'ごとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五時」讀「ごじ」，是一般讀法。',
            relatedRules: ['小時的讀法', '5時']
        },
        sourceItem: { value: 5, kanji: '五時', reading: 'ごじ' }
    },
    {
        id: 'hour_extra_96',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: true,
        stem: '火車到站是幾點？',
        stem_zh: '火車到站是幾點？',
        dialogue: {
            speakerA: '電車は何時に着きますか？',
            speakerB: '＿＿に着きます。（四點半）'
        },
        options: [
            { text: 'よじはん', isCorrect: true, reason: '正確！四時半讀「よじはん」。' },
            { text: 'よんじはん', isCorrect: false, reason: '陷阱！四時固定讀「よじ」。' },
            { text: 'しじはん', isCorrect: false, reason: '四時讀「よじ」。' },
            { text: 'よっかはん', isCorrect: false, reason: '「よっか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四時半」讀「よじはん」。',
            trapExplanation: '四時是特殊讀法，禁止讀「よんじ」或「しじ」。',
            relatedRules: ['四時的讀法', '電車の時間']
        },
        sourceItem: { value: '4:30', kanji: '四時半', reading: 'よじはん' }
    },
    {
        id: 'hour_extra_97',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: true,
        stem: '總復習：「9時」不能讀作？',
        stem_zh: '總復習：「9時」不能讀作？',
        options: [
            { text: 'きゅうじ', isCorrect: true, reason: '正確！9時只能讀「くじ」。' },
            { text: 'くじ', isCorrect: false, reason: '「くじ」是正確讀法。' },
            { text: 'くじ和きゅうじ都可以', isCorrect: false, reason: '只能讀「くじ」。' },
            { text: '沒有限制', isCorrect: false, reason: '有限制，只能讀「くじ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「9時」只能讀「くじ」，「きゅうじ」是錯誤的。',
            trapExplanation: '掌握9時的正確讀法非常重要。',
            relatedRules: ['九時的讀法', '禁止讀法']
        },
        sourceItem: { value: 9, kanji: '九時', reading: 'くじ' }
    },
    {
        id: 'hour_extra_98',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '總復習：「6時」讀作？',
        stem_zh: '總復習：「6時」讀作？',
        options: [
            { text: 'ろくじ', isCorrect: true, reason: '正確！六時讀「ろくじ」。' },
            { text: 'むじ', isCorrect: false, reason: '時間使用音讀「ろく」。' },
            { text: 'ろっじ', isCorrect: false, reason: '六時不促音化。' },
            { text: 'むいか', isCorrect: false, reason: '「むいか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六時」讀「ろくじ」，是一般讀法。',
            relatedRules: ['小時的讀法', '6時']
        },
        sourceItem: { value: 6, kanji: '六時', reading: 'ろくじ' }
    },
    {
        id: 'hour_extra_99',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '公車幾點來？',
        stem_zh: '公車幾點來？',
        dialogue: {
            speakerA: 'バスは何時に来ますか？',
            speakerB: '＿＿に来ます。（八點）'
        },
        options: [
            { text: 'はちじ', isCorrect: true, reason: '正確！八時讀「はちじ」。' },
            { text: 'やじ', isCorrect: false, reason: '時間使用音讀「はち」。' },
            { text: 'はっじ', isCorrect: false, reason: '八時不促音化。' },
            { text: 'ようか', isCorrect: false, reason: '「ようか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八時」讀「はちじ」。',
            relatedRules: ['小時的讀法', 'バスの時間']
        },
        sourceItem: { value: 8, kanji: '八時', reading: 'はちじ' }
    },
    {
        id: 'hour_extra_100',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '總復習：「10時」讀作？',
        stem_zh: '總復習：「10時」讀作？',
        options: [
            { text: 'じゅうじ', isCorrect: true, reason: '正確！十時讀「じゅうじ」。' },
            { text: 'とおじ', isCorrect: false, reason: '時間使用音讀「じゅう」。' },
            { text: 'じゅっじ', isCorrect: false, reason: '不是促音化。' },
            { text: 'とおか', isCorrect: false, reason: '「とおか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十時」讀「じゅうじ」，是一般讀法。',
            relatedRules: ['小時的讀法', '10時']
        },
        sourceItem: { value: 10, kanji: '十時', reading: 'じゅうじ' }
    },
    {
        id: 'hour_extra_101',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '總復習：「11時」讀作？',
        stem_zh: '總復習：「11時」讀作？',
        options: [
            { text: 'じゅういちじ', isCorrect: true, reason: '正確！十一時讀「じゅういちじ」。' },
            { text: 'とおいちじ', isCorrect: false, reason: '「十」讀「じゅう」。' },
            { text: 'じゅうひとじ', isCorrect: false, reason: '時間使用音讀「いち」。' },
            { text: 'じゅういちにち', isCorrect: false, reason: '「にち」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十一時」讀「じゅういちじ」，是一般讀法。',
            relatedRules: ['小時的讀法', '11時']
        },
        sourceItem: { value: 11, kanji: '十一時', reading: 'じゅういちじ' }
    },
    {
        id: 'hour_extra_102',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '總復習：正午是幾點？',
        stem_zh: '總復習：正午是幾點？',
        dialogue: {
            speakerA: '正午は何時ですか？',
            speakerB: '＿＿です。（十二點）'
        },
        options: [
            { text: 'じゅうにじ', isCorrect: true, reason: '正確！十二時讀「じゅうにじ」。' },
            { text: 'じゅうふたじ', isCorrect: false, reason: '時間使用音讀「に」。' },
            { text: 'とおにじ', isCorrect: false, reason: '「十」讀「じゅう」。' },
            { text: 'じゅうににち', isCorrect: false, reason: '「にち」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '正午是「十二時」，讀「じゅうにじ」。',
            relatedRules: ['小時的讀法', '正午=12時']
        },
        sourceItem: { value: 12, kanji: '十二時', reading: 'じゅうにじ' }
    },
    {
        id: 'hour_extra_103',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「〜時半」的「半」讀作？',
        stem_zh: '「〜時半」的「半」讀作？',
        options: [
            { text: 'はん', isCorrect: true, reason: '正確！半讀「はん」。' },
            { text: 'なかば', isCorrect: false, reason: '在時間表達中讀「はん」。' },
            { text: 'はんぶん', isCorrect: false, reason: '只有「はん」一個字。' },
            { text: 'ばん', isCorrect: false, reason: '不是濁音。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「〜時半」的「半」讀「はん」，表示30分。',
            relatedRules: ['時間表達', '〜時半']
        },
        sourceItem: { value: 'half', kanji: '半', reading: 'はん' }
    },
    {
        id: 'hour_extra_104',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: true,
        stem: '門診是＿＿開始。',
        stem_zh: '門診是九點半開始。',
        options: [
            { text: 'くじはん', isCorrect: true, reason: '正確！九時半讀「くじはん」。' },
            { text: 'きゅうじはん', isCorrect: false, reason: '陷阱！九時固定讀「くじ」。' },
            { text: 'ここのじはん', isCorrect: false, reason: '時間用音讀。' },
            { text: 'ここのかはん', isCorrect: false, reason: '「ここのか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九時半」讀「くじはん」。',
            trapExplanation: '九時是特殊讀法，禁止讀「きゅうじ」。',
            relatedRules: ['九時的讀法', '診療時間']
        },
        sourceItem: { value: '9:30', kanji: '九時半', reading: 'くじはん' }
    },
    {
        id: 'hour_extra_105',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '一天有幾小時？',
        stem_zh: '一天有幾小時？',
        dialogue: {
            speakerA: '一日は何時間ありますか？',
            speakerB: '＿＿あります。（二十四）'
        },
        options: [
            { text: 'にじゅうよじかん', isCorrect: true, reason: '正確！二十四時間讀「にじゅうよじかん」。' },
            { text: 'にじゅうしじかん', isCorrect: false, reason: '24時間的24讀「にじゅうよ」。' },
            { text: 'にじゅうよんじかん', isCorrect: false, reason: '「24時間」讀「にじゅうよじかん」。' },
            { text: 'はつかよじかん', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「24時間」讀「にじゅうよじかん」。',
            relatedRules: ['時間表達', '一日=24時間']
        },
        sourceItem: { value: 24, kanji: '二十四時間', reading: 'にじゅうよじかん' }
    },
    {
        id: 'hour_extra_106',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「〜時」的「時」讀作？',
        stem_zh: '「〜時」的「時」讀作？',
        options: [
            { text: 'じ', isCorrect: true, reason: '正確！時讀「じ」。' },
            { text: 'とき', isCorrect: false, reason: '「とき」是「時間/時候」的訓讀。' },
            { text: 'し', isCorrect: false, reason: '時間的「時」讀「じ」。' },
            { text: 'ちょう', isCorrect: false, reason: '這不是「時」的讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「〜時」的「時」讀「じ」，表示小時。',
            relatedRules: ['時間表達', '時=じ']
        },
        sourceItem: { value: 'hour', kanji: '時', reading: 'じ' }
    },
    {
        id: 'hour_extra_107',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: true,
        stem: '「四時」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '總復習：「四時」的正確讀法是？',
        options: [
            { text: 'よじ', isCorrect: true, reason: '正確！四時讀「よじ」。' },
            { text: 'しじ', isCorrect: false, reason: '陷阱！四時固定讀「よじ」。' },
            { text: 'よんじ', isCorrect: false, reason: '陷阱！四時固定讀「よじ」。' },
            { text: 'よっか', isCorrect: false, reason: '「よっか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四時」固定讀「よじ」，這是最重要的特殊讀法之一。',
            trapExplanation: '四時是特殊讀法，禁止讀「よんじ」或「しじ」。',
            relatedRules: ['四時的讀法', '特殊讀法']
        },
        sourceItem: { value: 4, kanji: '四時', reading: 'よじ' }
    },
    {
        id: 'hour_extra_108',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: true,
        stem: '「七時」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '總復習：「七時」的正確讀法是？',
        dialogue: {
            speakerA: '「七時」はどう読みますか？',
            speakerB: '＿＿と読みます。'
        },
        options: [
            { text: 'しちじ', isCorrect: true, reason: '正確！七時讀「しちじ」。' },
            { text: 'ななじ', isCorrect: false, reason: '陷阱！七時固定讀「しちじ」。' },
            { text: 'なのか', isCorrect: false, reason: '「なのか」是日期。' },
            { text: 'しちとき', isCorrect: false, reason: '小時讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七時」固定讀「しちじ」，這是最重要的特殊讀法之一。',
            trapExplanation: '七時是特殊讀法，禁止讀「ななじ」。',
            relatedRules: ['七時的讀法', '特殊讀法']
        },
        sourceItem: { value: 7, kanji: '七時', reading: 'しちじ' }
    },
    {
        id: 'hour_extra_109',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: true,
        stem: '「九時」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '總復習：「九時」的正確讀法是？',
        options: [
            { text: 'くじ', isCorrect: true, reason: '正確！九時讀「くじ」。' },
            { text: 'きゅうじ', isCorrect: false, reason: '陷阱！九時固定讀「くじ」。' },
            { text: 'ここのじ', isCorrect: false, reason: '時間用音讀。' },
            { text: 'ここのか', isCorrect: false, reason: '「ここのか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九時」固定讀「くじ」，這是最重要的特殊讀法之一。',
            trapExplanation: '九時是特殊讀法，禁止讀「きゅうじ」。',
            relatedRules: ['九時的讀法', '特殊讀法']
        },
        sourceItem: { value: 9, kanji: '九時', reading: 'くじ' }
    },
    {
        id: 'hour_extra_110',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '總復習：小時讀法有幾種模式？',
        stem_zh: '總復習：小時讀法有幾種模式？',
        options: [
            { text: '兩種：一般讀法和特殊讀法（4/7/9時）', isCorrect: true, reason: '正確！小時讀法分一般和特殊。' },
            { text: '只有一種', isCorrect: false, reason: '有一般讀法和特殊讀法。' },
            { text: '三種', isCorrect: false, reason: '主要分兩種模式。' },
            { text: '沒有固定模式', isCorrect: false, reason: '有明確的規則。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '小時讀法分兩種：一般讀法和特殊讀法（4時/7時/9時）。',
            relatedRules: ['小時的讀法總整理', '兩種模式']
        },
        sourceItem: { value: 'summary', kanji: '總復習', reading: '兩種模式' }
    },
    {
        id: 'hour_extra_111',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '「午前」是什麼意思？',
        stem_zh: '「午前」是什麼意思？',
        dialogue: {
            speakerA: '「午前」はどういう意味ですか？',
            speakerB: '＿＿という意味です。'
        },
        options: [
            { text: '上午', isCorrect: true, reason: '正確！午前是上午。' },
            { text: '下午', isCorrect: false, reason: '下午是「午後」。' },
            { text: '中午', isCorrect: false, reason: '中午是「正午」。' },
            { text: '半夜', isCorrect: false, reason: '半夜是「真夜中」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「午前」（ごぜん）表示上午，從0時到12時。',
            relatedRules: ['時間表達', '午前=AM']
        },
        sourceItem: { value: 'AM', kanji: '午前', reading: 'ごぜん' }
    },
    {
        id: 'hour_extra_112',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「午後」讀作？',
        stem_zh: '「午後」讀作？',
        options: [
            { text: 'ごご', isCorrect: true, reason: '正確！午後讀「ごご」。' },
            { text: 'ごこう', isCorrect: false, reason: '「後」讀「ご」。' },
            { text: 'うまあと', isCorrect: false, reason: '這是訓讀方式，不用於時間。' },
            { text: 'ごうご', isCorrect: false, reason: '不是長音。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「午後」讀「ごご」，表示下午（PM）。',
            relatedRules: ['時間表達', '午後=PM']
        },
        sourceItem: { value: 'PM', kanji: '午後', reading: 'ごご' }
    },
    {
        id: 'hour_extra_113',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: true,
        stem: '會議在＿＿召開。',
        stem_zh: '會議在下午四點召開。',
        options: [
            { text: 'ごごよじ', isCorrect: true, reason: '正確！午後四時讀「ごごよじ」。' },
            { text: 'ごごしじ', isCorrect: false, reason: '陷阱！四時固定讀「よじ」。' },
            { text: 'ごごよんじ', isCorrect: false, reason: '陷阱！四時固定讀「よじ」。' },
            { text: 'ひるよじ', isCorrect: false, reason: '下午用「午後」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「午後四時」讀「ごごよじ」。',
            trapExplanation: '四時是特殊讀法，即使加「午後」也讀「よじ」。',
            relatedRules: ['午後+時刻', '四時的讀法']
        },
        sourceItem: { value: 'PM4', kanji: '午後四時', reading: 'ごごよじ' }
    },
    {
        id: 'hour_extra_114',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: true,
        stem: '早餐時間是什麼時候？',
        stem_zh: '早餐時間是什麼時候？',
        dialogue: {
            speakerA: '朝ごはんは何時ですか？',
            speakerB: '＿＿です。（早上七點）'
        },
        options: [
            { text: 'ごぜんしちじ', isCorrect: true, reason: '正確！午前七時讀「ごぜんしちじ」。' },
            { text: 'ごぜんななじ', isCorrect: false, reason: '陷阱！七時固定讀「しちじ」。' },
            { text: 'あさしちじ', isCorrect: false, reason: '正式說法用「午前」。' },
            { text: 'ごぜんなのか', isCorrect: false, reason: '「なのか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「午前七時」讀「ごぜんしちじ」。',
            trapExplanation: '七時是特殊讀法，即使加「午前」也讀「しちじ」。',
            relatedRules: ['午前+時刻', '七時的讀法']
        },
        sourceItem: { value: 'AM7', kanji: '午前七時', reading: 'ごぜんしちじ' }
    },
    {
        id: 'hour_extra_115',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「正午」讀作？',
        stem_zh: '「正午」讀作？',
        options: [
            { text: 'しょうご', isCorrect: true, reason: '正確！正午讀「しょうご」。' },
            { text: 'せいご', isCorrect: false, reason: '「正」讀「しょう」。' },
            { text: 'ただひる', isCorrect: false, reason: '這是訓讀，不適用。' },
            { text: 'しょうごご', isCorrect: false, reason: '沒有重複的「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「正午」讀「しょうご」，表示中午12點整。',
            relatedRules: ['時間表達', '正午=12:00']
        },
        sourceItem: { value: 'noon', kanji: '正午', reading: 'しょうご' }
    },
    {
        id: 'hour_extra_116',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '深夜節目在＿＿播出。',
        stem_zh: '深夜節目在零時（午夜12點）播出。',
        options: [
            { text: 'れいじ', isCorrect: true, reason: '正確！零時讀「れいじ」。' },
            { text: 'ぜろじ', isCorrect: false, reason: '時間用「れいじ」。' },
            { text: 'まよなか', isCorrect: false, reason: '這是「真夜中」，不是小時讀法。' },
            { text: 'じゅうにじ', isCorrect: false, reason: '這是12時，不是0時。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「零時」讀「れいじ」，表示午夜0點。',
            relatedRules: ['時間表達', '零時=0:00']
        },
        sourceItem: { value: 0, kanji: '零時', reading: 'れいじ' }
    },
    {
        id: 'hour_extra_117',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: true,
        stem: '最後一班電車是什麼時候？',
        stem_zh: '最後一班電車是什麼時候？',
        dialogue: {
            speakerA: '終電は何時ですか？',
            speakerB: '＿＿です。（晚上九點）'
        },
        options: [
            { text: 'よるくじ', isCorrect: true, reason: '正確！夜九時讀「よるくじ」。' },
            { text: 'よるきゅうじ', isCorrect: false, reason: '陷阱！九時固定讀「くじ」。' },
            { text: 'ばんここのじ', isCorrect: false, reason: '時間用音讀。' },
            { text: 'ごごここのか', isCorrect: false, reason: '「ここのか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「夜九時」讀「よるくじ」。',
            trapExplanation: '九時是特殊讀法，禁止讀「きゅうじ」。',
            relatedRules: ['夜+時刻', '九時的讀法']
        },
        sourceItem: { value: 'night9', kanji: '夜九時', reading: 'よるくじ' }
    },
    {
        id: 'hour_extra_118',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'pronunciation',
        isTrap: false,
        stem: '「朝」讀作？（時間帶表達）',
        stem_zh: '「朝」讀作？（時間帶表達）',
        options: [
            { text: 'あさ', isCorrect: true, reason: '正確！朝讀「あさ」。' },
            { text: 'ちょう', isCorrect: false, reason: '這是音讀，用於複合詞。' },
            { text: 'あした', isCorrect: false, reason: '這是「明日」的讀法。' },
            { text: 'はやい', isCorrect: false, reason: '這是「早い」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「朝」讀「あさ」，表示早上的時間帶。',
            relatedRules: ['時間帶', '朝=morning']
        },
        sourceItem: { value: 'morning', kanji: '朝', reading: 'あさ' }
    },
    {
        id: 'hour_extra_119',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '從＿＿到五點開放。',
        stem_zh: '從一點到五點開放。',
        options: [
            { text: 'いちじからごじまで', isCorrect: true, reason: '正確！一時から五時まで。' },
            { text: 'ひとつからいつつ', isCorrect: false, reason: '時間用音讀。' },
            { text: 'いっじからごじ', isCorrect: false, reason: '一時沒有促音。' },
            { text: 'いちにちからごにち', isCorrect: false, reason: '「にち」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一時から五時まで」表示時間範圍，用「から〜まで」。',
            relatedRules: ['時間範圍', '〜から〜まで']
        },
        sourceItem: { value: '1-5', kanji: '一時から五時まで', reading: 'いちじからごじまで' }
    },
    {
        id: 'hour_extra_120',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'dialogue',
        isTrap: false,
        stem: '上班時間是多久？',
        stem_zh: '上班時間是多久？',
        dialogue: {
            speakerA: '勤務時間は何時間ですか？',
            speakerB: '＿＿です。（八小時）'
        },
        options: [
            { text: 'はちじかん', isCorrect: true, reason: '正確！八時間讀「はちじかん」。' },
            { text: 'やっじかん', isCorrect: false, reason: '時間長度用音讀「はち」。' },
            { text: 'はちじ', isCorrect: false, reason: '時間長度要加「間」。' },
            { text: 'はっじかん', isCorrect: false, reason: '八時間沒有促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八時間」讀「はちじかん」，表示8小時的時間長度。',
            relatedRules: ['時間長度', '〜時間']
        },
        sourceItem: { value: '8hours', kanji: '八時間', reading: 'はちじかん' }
    },
    {
        id: 'hour_extra_121',
        category: 'timeDate',
        subcategory: 'hours',
        type: 'sentence',
        isTrap: false,
        stem: '總復習：特殊讀法的小時有哪些？',
        stem_zh: '總復習：特殊讀法的小時有哪些？',
        options: [
            { text: '4時(よじ)、7時(しちじ)、9時(くじ)', isCorrect: true, reason: '正確！這三個有特殊讀法。' },
            { text: '1時、2時、3時', isCorrect: false, reason: '這些都是一般讀法。' },
            { text: '5時、6時、8時', isCorrect: false, reason: '這些都是一般讀法。' },
            { text: '10時、11時、12時', isCorrect: false, reason: '這些都是一般讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '4時(よじ)、7時(しちじ)、9時(くじ)是三個特殊讀法的小時。',
            relatedRules: ['小時的讀法總整理', '特殊讀法三個']
        },
        sourceItem: { value: 'summary_special', kanji: '特殊讀法', reading: '4/7/9時' }
    }
];
