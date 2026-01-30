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
        stem: '「一時」的正確讀音是？',
        stem_zh: '「一時」的正確讀音是？',
        options: [
            { text: 'いちじ', isCorrect: true, reason: '正確{せいかく}！「一時{いちじ}」讀作{どくさ}「いちじ」。' },
            { text: 'ひとじ', isCorrect: false, reason: '時間{じかん}使用{しよう}音讀{おんどく}「いち」不是訓讀{くんどく}。' },
            { text: 'いっじ', isCorrect: false, reason: '不促音化{ふそくおんか}，是「いちじ」。' },
            { text: 'いちとき', isCorrect: false, reason: '「とき」是「時間{じかん}/時候{じこう}」的訓讀{くんどく}，小時{じかん}讀む{よむ}「じ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一時{いちじ}」讀作{どくさ}「いちじ」，使用{しよう}音讀{おんどく}。',
            relatedRules: ['小時{じかん}の讀法{よみかた}', '「じ」の使用{しよう}']
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
            { text: 'ひとじ', isCorrect: false, reason: '小時{じかん}使用{しよう}音讀{おんどく}。' },
            { text: 'いちじ', isCorrect: true, reason: '正確{せいかく}！會議{かいぎ}在一時{いちじ}開始{はじめ}。' },
            { text: 'いっとき', isCorrect: false, reason: '「いっとき」是「暫時{ざんじ}」の意思{いし}。' },
            { text: 'ひとつじ', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「一時{いちじ}に」表示{ひょうじ}在一點{いちじ}時{とき}。',
            relatedRules: ['時間{じかん}表達{ひょうたつ}', '「〜に」の使用{しよう}']
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
            { text: 'ひとじ', isCorrect: false, reason: '小時{じかん}使用{しよう}音讀{おんどく}。' },
            { text: 'いちじ', isCorrect: true, reason: '正確{せいかく}！現在{いま}是一點{いちじ}。' },
            { text: 'いっとき', isCorrect: false, reason: '這不是時間{じかん}讀法{よみかた}。' },
            { text: 'いちとき', isCorrect: false, reason: '小時{じかん}讀む{よむ}「じ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '回答{かいとう}「何時{なんじ}」時{とき}，一點{いちじ}讀作{どくさ}「いちじ」。',
            relatedRules: ['時間{じかん}の質問{しつもん}與回答{かいとう}', '「何時{なんじ}」の使用{しよう}']
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
        stem: '「四時」的正確讀音是？',
        stem_zh: '「四時」的正確讀音是？',
        options: [
            { text: 'よじ', isCorrect: true, reason: '正確{せいかく}！「四時{よじ}」讀作{どくさ}「よじ」，固定{こてい}讀法{よみかた}。' },
            { text: 'よんじ', isCorrect: false, reason: '陷阱{かんけい}！四時{よじ}固定{こてい}讀む{よむ}「よじ」，禁止{きんし}讀む{よむ}「よんじ」。' },
            { text: 'しじ', isCorrect: false, reason: '陷阱{かんけい}！雖然{すいぜん}四月{しがつ}讀む{よむ}「しがつ」，但四時{よじ}讀む{よむ}「よじ」。' },
            { text: 'よっじ', isCorrect: false, reason: '不需要{じゅようなく}促音{そくおん}，是「よじ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四時{よじ}」固定{こてい}讀作{どくさ}「よじ」，禁止{きんし}使用{しよう}「よんじ」或「しじ」。',
            trapExplanation: '這是陷阱題{かんけいだい}。注意{ちゅうい}四月{しがつ}讀む{よむ}「しがつ」，但四時{よじ}讀む{よむ}「よじ」，規則{きそく}不同{ふどう}！',
            relatedRules: ['四時{よじ}の特殊{とくしゅ}讀法{よみかた}', '四月{しがつ}vs四時{よじ}の區別{くべつ}']
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
            { text: 'よんじ', isCorrect: false, reason: '陷阱{かんけい}！四時{よじ}讀む{よむ}「よじ」，不是「よんじ」。' },
            { text: 'よじ', isCorrect: true, reason: '正確{せいかく}！課堂{じゅぎょう}在四時{よじ}結束{おわり}。' },
            { text: 'しじ', isCorrect: false, reason: '四時{よじ}讀む{よむ}「よ」不是「し」。' },
            { text: 'よっじ', isCorrect: false, reason: '不需要{じゅようなく}促音{そくおん}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「四時{よじ}に」表示{ひょうじ}在四點{よじ}時{とき}。',
            trapExplanation: '四時{よじ}是固定{こてい}讀法{よみかた}「よじ」，這是需要{じゅよう}特別{とくべつ}記憶{きおく}の例外{れいがい}。',
            relatedRules: ['四時{よじ}の讀法{よみかた}', '時間{じかん}表達{ひょうたつ}']
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
            { text: 'よんじ', isCorrect: false, reason: '陷阱{かんけい}！四時{よじ}固定{こてい}讀む{よむ}「よじ」。' },
            { text: 'よじ', isCorrect: true, reason: '正確{せいかく}！電影{えいが}從{から}四時{よじ}開始{はじめ}。' },
            { text: 'しじ', isCorrect: false, reason: '四時{よじ}讀む{よむ}「よ」。' },
            { text: 'よっじ', isCorrect: false, reason: '不需要{じゅようなく}促音{そくおん}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「四時{よじ}から」表示{ひょうじ}從{から}四點{よじ}開始{はじめ}。',
            trapExplanation: '無論{むろん}什麼{なに}情境{じょうきょう}，四時{よじ}都{すべて}固定{こてい}讀む{よむ}「よじ」。',
            relatedRules: ['四時{よじ}の固定{こてい}讀法{よみかた}', '「〜から」の使用{しよう}']
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
        stem: '「七時」的正確讀音是？',
        stem_zh: '「七時」的正確讀音是？',
        options: [
            { text: 'しちじ', isCorrect: true, reason: '正確{せいかく}！「七時{しちじ}」讀作{どくさ}「しちじ」。' },
            { text: 'ななじ', isCorrect: false, reason: '陷阱{かんけい}！七時{しちじ}讀む{よむ}「しちじ」，很少{ほとんど}使用{しよう}「ななじ」。' },
            { text: 'なのじ', isCorrect: false, reason: '「なの」是日期{にっき}七日{なのか}的讀法{よみかた}。' },
            { text: 'しつじ', isCorrect: false, reason: '是「しちじ」不是「しつじ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七時{しちじ}」讀作{どくさ}「しちじ」，這是標準{ひょうじゅん}讀法{よみかた}。',
            trapExplanation: '這是陷阱題{かんけいだい}。雖然{すいぜん}日常{にちじょう}數字{すうじ}常用{じょうよう}「なな」，但時間{じかん}慣用{かんよう}「しちじ」。注意{ちゅうい}與「一時{いちじ}」の發音{はつおん}區別{くべつ}。',
            relatedRules: ['七時{しちじ}の讀法{よみかた}', '「しち」vs「なな」の使用{しよう}場景{ばめん}']
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
            { text: 'ななじ', isCorrect: false, reason: '陷阱{かんけい}！七時{しちじ}慣用{かんよう}「しちじ」。' },
            { text: 'しちじ', isCorrect: true, reason: '正確{せいかく}！早上{あさ}七時{しちじ}起床{おきます}。' },
            { text: 'なのじ', isCorrect: false, reason: '「なの」是日期{にっき}讀法{よみかた}。' },
            { text: 'しつじ', isCorrect: false, reason: '是「しちじ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「朝{あさ}七時{しちじ}に」表示{ひょうじ}早上{あさ}七點{しちじ}。',
            trapExplanation: '時間{じかん}表達{ひょうたつ}慣用{かんよう}「しちじ」而非{もはや}「ななじ」。',
            relatedRules: ['七時{しちじ}の讀法{よみかた}', '日常{にちじょう}時間{じかん}表達{ひょうたつ}']
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
            { text: 'ななじ', isCorrect: false, reason: '七時{しちじ}慣用{かんよう}「しちじ」。' },
            { text: 'しちじ', isCorrect: true, reason: '正確{せいかく}！七點{しちじ}下班{しゅうりょう}。' },
            { text: 'なのじ', isCorrect: false, reason: '「なの」用於{もちいる}日期{にっき}。' },
            { text: 'しつじ', isCorrect: false, reason: '是「しちじ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '回答{かいとう}下班{しゅうりょう}時間{じかん}，七時{しちじ}讀作{どくさ}「しちじ」。',
            relatedRules: ['七時{しちじ}の讀法{よみかた}', '工作{しごと}時間{じかん}表達{ひょうたつ}']
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
        stem: '「九時」的正確讀音是？',
        stem_zh: '「九時」的正確讀音是？',
        options: [
            { text: 'くじ', isCorrect: true, reason: '正確{せいかく}！「九時{くじ}」讀作{どくさ}「くじ」，固定{こてい}讀法{よみかた}。' },
            { text: 'きゅうじ', isCorrect: false, reason: '陷阱{かんけい}！九時{くじ}固定{こてい}讀む{よむ}「くじ」，禁止{きんし}讀む{よむ}「きゅうじ」。' },
            { text: 'ここのじ', isCorrect: false, reason: '「ここの」是日期{にっき}九日{ここのか}的讀法{よみかた}。' },
            { text: 'きゅじ', isCorrect: false, reason: '是「くじ」不是「きゅじ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九時{くじ}」固定{こてい}讀作{どくさ}「くじ」，與九月{くがつ}「くがつ」一樣{いちよう}使用{しよう}「く」。',
            trapExplanation: '這是陷阱題{かんけいだい}。雖然{すいぜん}日常{にちじょう}數字{すうじ}多く{おおく}讀む{よむ}「きゅう」以避諱{いひき}「苦{く}」，但時間{じかん}固定{こてい}使用{しよう}「くじ」。',
            relatedRules: ['九時{くじ}の特殊{とくしゅ}讀法{よみかた}', '九月{くがつ}與九時{くじ}の共通點{きょうつうてん}']
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
            { text: 'きゅうじ', isCorrect: false, reason: '陷阱{かんけい}！九時{くじ}固定{こてい}讀む{よむ}「くじ」。' },
            { text: 'くじ', isCorrect: true, reason: '正確{せいかく}！工作{しごと}在九時{くじ}開始{はじめ}。' },
            { text: 'ここのじ', isCorrect: false, reason: '「ここの」是日期{にっき}讀法{よみかた}。' },
            { text: 'きゅじ', isCorrect: false, reason: '是「くじ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「九時{くじ}に」表示{ひょうじ}在九點{くじ}時{とき}。',
            trapExplanation: '九時{くじ}是固定{こてい}讀法{よみかた}「くじ」，這是需要{じゅよう}特別{とくべつ}記憶{きおく}の例外{れいがい}。',
            relatedRules: ['九時{くじ}の讀法{よみかた}', '工作{しごと}時間{じかん}表達{ひょうたつ}']
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
            { text: 'きゅうじ', isCorrect: false, reason: '陷阱{かんけい}！九時{くじ}固定{こてい}讀む{よむ}「くじ」。' },
            { text: 'くじ', isCorrect: true, reason: '正確{せいかく}！明天{あした}九點{くじ}去。' },
            { text: 'ここのじ', isCorrect: false, reason: '「ここの」用於{もちいる}日期{にっき}。' },
            { text: 'きゅじ', isCorrect: false, reason: '是「くじ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「九時{くじ}に」表示{ひょうじ}在九點{くじ}時{とき}去。',
            trapExplanation: '無論{むろん}什麼{なに}情境{じょうきょう}，九時{くじ}都{すべて}固定{こてい}讀む{よむ}「くじ」。',
            relatedRules: ['九時{くじ}の固定{こてい}讀法{よみかた}', '約定{やくそく}時間{じかん}の表達{ひょうたつ}']
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
        stem: '「二時」的正確讀音是？',
        stem_zh: '「二時」的正確讀音是？',
        options: [
            { text: 'にじ', isCorrect: true, reason: '正確{せいかく}！「二時{にじ}」讀作{どくさ}「にじ」。' },
            { text: 'ふたじ', isCorrect: false, reason: '時間{じかん}使用{しよう}音讀{おんどく}「に」不是訓讀{くんどく}。' },
            { text: 'につじ', isCorrect: false, reason: '是「にじ」。' },
            { text: 'にとき', isCorrect: false, reason: '小時{じかん}讀む{よむ}「じ」不是「とき」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二時{にじ}」讀作{どくさ}「にじ」，使用{しよう}音讀{おんどく}。',
            relatedRules: ['小時{じかん}の讀法{よみかた}', '「じ」の使用{しよう}']
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
            { text: 'ふたじ', isCorrect: false, reason: '時間{じかん}使用{しよう}音讀{おんどく}。' },
            { text: 'にじ', isCorrect: true, reason: '正確{せいかく}！下午{ごご}兩點{にじ}午睡{ひるね}。' },
            { text: 'にいじ', isCorrect: false, reason: '是「にじ」。' },
            { text: 'ふたつじ', isCorrect: false, reason: '時間{じかん}不使用{しよう}「ふたつ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「午後{ごご}二時{にじ}」表示{ひょうじ}下午{ごご}兩點{にじ}。',
            relatedRules: ['時間{じかん}表達{ひょうたつ}', '「午後{ごご}」の使用{しよう}']
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
            { text: 'ふたじ', isCorrect: false, reason: '時間{じかん}使用{しよう}音讀{おんどく}。' },
            { text: 'にじ', isCorrect: true, reason: '正確{せいかく}！午休{ひるやすみ}到兩點{にじ}。' },
            { text: 'にいじ', isCorrect: false, reason: '是「にじ」。' },
            { text: 'ふたつじ', isCorrect: false, reason: '時間{じかん}使用{しよう}「にじ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「二時{にじ}まで」表示{ひょうじ}到兩點{にじ}為止{まで}。',
            relatedRules: ['時間{じかん}表達{ひょうたつ}', '「〜まで」の使用{しよう}']
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
        stem: '「三時」的正確讀音是？',
        stem_zh: '「三時」的正確讀音是？',
        options: [
            { text: 'さんじ', isCorrect: true, reason: '正確{せいかく}！「三時{さんじ}」讀作{どくさ}「さんじ」。' },
            { text: 'みじ', isCorrect: false, reason: '時間{じかん}使用{しよう}音讀{おんどく}「さん」不是「み」。' },
            { text: 'さんとき', isCorrect: false, reason: '小時{じかん}讀む{よむ}「じ」不是「とき」。' },
            { text: 'みっじ', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三時{さんじ}」讀作{どくさ}「さんじ」，使用{しよう}音讀{おんどく}。',
            relatedRules: ['小時{じかん}の讀法{よみかた}', '「じ」の使用{しよう}']
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
            { text: 'みじ', isCorrect: false, reason: '時間{じかん}使用{しよう}音讀{おんどく}。' },
            { text: 'さんじ', isCorrect: true, reason: '正確{せいかく}！點心{おやつ}在三時{さんじ}吃{たべます}。日本{にほん}の「三時{さんじ}のおやつ」是有名{ゆうめい}の習慣{しゅうかん}。' },
            { text: 'みっとき', isCorrect: false, reason: '小時{じかん}讀む{よむ}「じ」。' },
            { text: 'さんとき', isCorrect: false, reason: '小時{じかん}讀む{よむ}「じ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三時{さんじ}のおやつ」是日本{にほん}の習慣{しゅうかん}，下午{ごご}三點{さんじ}吃點心{おやつ}。',
            relatedRules: ['時間{じかん}表達{ひょうたつ}', '日本{にほん}の食{しょく}文化{ぶんか}']
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
            { text: 'みじ', isCorrect: false, reason: '時間{じかん}使用{しよう}音讀{おんどく}。' },
            { text: 'さんじ', isCorrect: true, reason: '正確{せいかく}！三點{さんじ}到了{なったら}就吃{たべましょう}。' },
            { text: 'みっじ', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' },
            { text: 'さんとき', isCorrect: false, reason: '小時{じかん}讀む{よむ}「じ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三時{さんじ}になったら」表示{ひょうじ}「等{まち}到三點{さんじ}的話{ばあい}」。',
            relatedRules: ['時間{じかん}表達{ひょうたつ}', '「〜になったら」の用法{ようほう}']
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
        stem: '「六時」的正確讀音是？',
        stem_zh: '「六時」的正確讀音是？',
        options: [
            { text: 'ろくじ', isCorrect: true, reason: '正確{せいかく}！「六時{ろくじ}」讀作{どくさ}「ろくじ」。' },
            { text: 'むじ', isCorrect: false, reason: '時間{じかん}使用{しよう}音讀{おんどく}「ろく」不是「む」。' },
            { text: 'ろっじ', isCorrect: false, reason: '六時{ろくじ}不促音化{ふそくおんか}，是「ろくじ」。' },
            { text: 'むいじ', isCorrect: false, reason: '「むい」是日期{にっき}六日{むいか}的讀法{よみかた}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六時{ろくじ}」讀作{どくさ}「ろくじ」，不促音化{ふそくおんか}。',
            relatedRules: ['小時{じかん}の讀法{よみかた}', '「ろく」不促音化{ふそくおんか}']
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
            { text: 'むじ', isCorrect: false, reason: '時間{じかん}使用{しよう}音讀{おんどく}「ろく」。' },
            { text: 'ろくじ', isCorrect: true, reason: '正確{せいかく}！每天{まいあさ}早上{あさ}六時{ろくじ}起床{おきます}。' },
            { text: 'ろっじ', isCorrect: false, reason: '六時{ろくじ}不促音化{ふそくおんか}。' },
            { text: 'むいじ', isCorrect: false, reason: '「むい」用於{もちいる}日期{にっき}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「毎朝{まいあさ}六時{ろくじ}に」表示{ひょうじ}每天{まいにち}早上{あさ}六點{ろくじ}。',
            relatedRules: ['時間{じかん}表達{ひょうたつ}', '日常{にちじょう}習慣{しゅうかん}']
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
            { text: 'むじ', isCorrect: false, reason: '時間{じかん}使用{しよう}音讀{おんどく}「ろく」。' },
            { text: 'ろくじ', isCorrect: true, reason: '正確{せいかく}！晚餐{ばんごはん}在六點{ろくじ}左右{ごろ}吃{たべます}。' },
            { text: 'ろっじ', isCorrect: false, reason: '六時{ろくじ}不促音化{ふそくおんか}。' },
            { text: 'りくじ', isCorrect: false, reason: '是「ろくじ」不是「りくじ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「六時{ろくじ}ごろ」表示{ひょうじ}六點{ろくじ}左右{ごろ}。',
            relatedRules: ['時間{じかん}表達{ひょうたつ}', '「〜ごろ」の使用{しよう}']
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
        stem: '「十時」的正確讀音是？',
        stem_zh: '「十時」的正確讀音是？',
        options: [
            { text: 'じゅうじ', isCorrect: true, reason: '正確{せいかく}！「十時{じゅうじ}」讀作{どくさ}「じゅうじ」。' },
            { text: 'とおじ', isCorrect: false, reason: '時間{じかん}使用{しよう}音讀{おんどく}「じゅう」不是訓讀{くんどく}「とお」。' },
            { text: 'じゅっじ', isCorrect: false, reason: '十時{じゅうじ}不促音化{ふそくおんか}，是「じゅうじ」。' },
            { text: 'じゅじ', isCorrect: false, reason: '需要{じゅよう}「う」，是「じゅうじ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十時{じゅうじ}」讀作{どくさ}「じゅうじ」，不促音化{ふそくおんか}。',
            relatedRules: ['小時{じかん}の讀法{よみかた}', '「じゅう」の發音{はつおん}']
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
            { text: 'とおじ', isCorrect: false, reason: '時間{じかん}使用{しよう}音讀{おんどく}「じゅう」。' },
            { text: 'じゅうじ', isCorrect: true, reason: '正確{せいかく}！公司{かいしゃ}在十時{じゅうじ}關門{しまります}。' },
            { text: 'じゅっじ', isCorrect: false, reason: '十時{じゅうじ}不促音化{ふそくおんか}。' },
            { text: 'じゅじ', isCorrect: false, reason: '需要{じゅよう}「う」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十時{じゅうじ}に」表示{ひょうじ}在十點{じゅうじ}時{とき}。',
            relatedRules: ['時間{じかん}表達{ひょうたつ}', '營業{えいぎょう}時間{じかん}']
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
            { text: 'とおじ', isCorrect: false, reason: '時間{じかん}使用{しよう}音讀{おんどく}「じゅう」。' },
            { text: 'じゅうじ', isCorrect: true, reason: '正確{せいかく}！十點{じゅうじ}左右{ごろ}睡覺{ねます}。' },
            { text: 'じゅっじ', isCorrect: false, reason: '十時{じゅうじ}不促音化{ふそくおんか}。' },
            { text: 'じゅじ', isCorrect: false, reason: '需要{じゅよう}「う」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十時{じゅうじ}ごろに寝{ね}ます」表示{ひょうじ}十點{じゅうじ}左右{ごろ}睡覺{ねます}。',
            relatedRules: ['時間{じかん}表達{ひょうたつ}', '日常{にちじょう}習慣{しゅうかん}']
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
        stem: '「十二時」的正確讀音是？',
        stem_zh: '「十二時」的正確讀音是？',
        options: [
            { text: 'じゅうにじ', isCorrect: true, reason: '正確{せいかく}！「十二時{じゅうにじ}」讀作{どくさ}「じゅうにじ」。' },
            { text: 'じゅうふたじ', isCorrect: false, reason: '時間{じかん}使用{しよう}音讀{おんどく}「に」不是「ふた」。' },
            { text: 'じゅにじ', isCorrect: false, reason: '需要{じゅよう}「う」，是「じゅうにじ」。' },
            { text: 'とおにじ', isCorrect: false, reason: '「十{じゅう}」使用{しよう}音讀{おんどく}「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十二時{じゅうにじ}」讀作{どくさ}「じゅうにじ」，是正午{しょうご}或午夜{ごや}。',
            relatedRules: ['小時{じかん}の讀法{よみかた}', '正午{しょうご}與午夜{ごや}']
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
            { text: 'じゅうふたじ', isCorrect: false, reason: '時間{じかん}使用{しよう}音讀{おんどく}。' },
            { text: 'じゅうにじ', isCorrect: true, reason: '正確{せいかく}！午餐{ひるごはん}在十二時{じゅうにじ}吃{たべます}。' },
            { text: 'じゅにじ', isCorrect: false, reason: '需要{じゅよう}「う」。' },
            { text: 'じゅうにとき', isCorrect: false, reason: '小時{じかん}讀む{よむ}「じ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十二時{じゅうにじ}に」是午餐{ひるごはん}時間{じかん}，即正午{しょうご}。',
            relatedRules: ['時間{じかん}表達{ひょうたつ}', '用餐{しょくじ}時間{じかん}']
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
            { text: 'じゅうふたじ', isCorrect: false, reason: '時間{じかん}使用{しよう}音讀{おんどく}。' },
            { text: 'じゅうにじ', isCorrect: true, reason: '正確{せいかく}！從{から}十二點{じゅうにじ}開始{はじめ}午休{ひるやすみ}。' },
            { text: 'じゅにじ', isCorrect: false, reason: '需要{じゅよう}「う」。' },
            { text: 'とおにじ', isCorrect: false, reason: '「十{じゅう}」使用{しよう}「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十二時{じゅうにじ}から」表示{ひょうじ}從{から}十二點{じゅうにじ}開始{はじめ}。',
            relatedRules: ['時間{じかん}表達{ひょうたつ}', '午休{ひるやすみ}時間{じかん}']
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
            relatedRules: ['小時の讀法', '日常作息']
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
            relatedRules: ['小時の讀法', '娛樂日程']
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
            relatedRules: ['四時の特殊讀法', '航班時間']
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
            relatedRules: ['七時の讀法', '用餐時間']
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
            relatedRules: ['九時の讀法', '營業時間']
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
            relatedRules: ['小時の讀法', '課程時間']
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
            relatedRules: ['小時の讀法', '上班時間']
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
            relatedRules: ['小時の讀法', '營業時間']
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
            relatedRules: ['四の讀法', '月份vs時間']
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
            relatedRules: ['七の讀法', '月份vs時間']
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
            relatedRules: ['九の讀法', '月份vs時間']
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
        stem: '「何時」的正確讀法是？',
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
            relatedRules: ['何時の讀法', '疑問詞の使用']
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
            relatedRules: ['小時の讀法', '何時の回答']
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
            relatedRules: ['四時の讀法', '約會時間']
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
            relatedRules: ['午前の讀法', 'AM/PM']
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
            relatedRules: ['午後の讀法', 'AM/PM']
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
            relatedRules: ['午前/午後の使用', '會議時間']
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
            relatedRules: ['小時の讀法', '營業時間']
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
            relatedRules: ['七時の讀法', 'テレビ番組']
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
            relatedRules: ['小時の讀法', '終電時間']
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
            relatedRules: ['九時の讀法', '交通時間']
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
            relatedRules: ['小時の讀法', 'お茶の時間']
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
            relatedRules: ['小時の讀法', '始発時間']
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
            relatedRules: ['七時の讀法', '約束時間']
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
            relatedRules: ['時間期間の讀法', '24時間營業']
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
            relatedRules: ['時間期間の讀法', '工作時間']
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
            relatedRules: ['時間期間の讀法', '電影時長']
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
            relatedRules: ['時間期間の讀法', '會議時間']
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
            relatedRules: ['九の讀法', '飛行時間']
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
            relatedRules: ['七の讀法', '睡眠時間']
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
            relatedRules: ['四の讀法', '等待時間']
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
            relatedRules: ['七時の讀法', '早餐時間']
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
            relatedRules: ['小時の讀法', '通勤時間']
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
            relatedRules: ['小時の讀法', '帰宅時間']
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
            relatedRules: ['小時の讀法', '就寢時間']
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
            relatedRules: ['時の讀法', '音讀vs訓讀']
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
            relatedRules: ['何の讀法', '疑問詞']
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
            relatedRules: ['正午の讀法', '時間表達']
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
            relatedRules: ['真夜中の讀法', '時間表達']
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
            relatedRules: ['時間表達', '半の使用']
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
            relatedRules: ['小時の讀法', '約束時間']
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
            relatedRules: ['小時の讀法', '午休時間']
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
            relatedRules: ['四時の讀法', '診察時間']
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
            relatedRules: ['九時の讀法', 'テレビ番組']
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
            relatedRules: ['小時の讀法', '空閒時間']
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
            relatedRules: ['小時の讀法', '閉店時間']
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
            relatedRules: ['小時の讀法', '用餐時間']
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
            relatedRules: ['小時の讀法', '開店時間']
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
            relatedRules: ['時の讀法', '小時表達']
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
            relatedRules: ['小時の讀法', '用餐時間']
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
            relatedRules: ['小時の讀法', '起床時間']
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
            relatedRules: ['小時の讀法', '活動時間']
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
            relatedRules: ['小時の讀法', '交通時間']
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
            relatedRules: ['四時の讀法', '面談時間']
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
            relatedRules: ['小時の讀法', '出發時間']
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
            relatedRules: ['七時の讀法', '會議時間']
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
            relatedRules: ['小時の讀法', '退社時間']
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
            relatedRules: ['九時の讀法', 'テレビ番組']
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
            relatedRules: ['小時の讀法', '就寢時間']
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
            relatedRules: ['小時の讀法', 'ホテル']
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
            relatedRules: ['小時の讀法', 'ランチタイム']
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
            relatedRules: ['小時の讀法', '預約時間']
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
            relatedRules: ['小時の讀法', '授業時間']
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
            relatedRules: ['九時の讀法', '上班時間']
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
            relatedRules: ['小時の讀法', '退社時間']
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
            relatedRules: ['七時の讀法', '待ち合わせ']
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
            relatedRules: ['四時の讀法', '面接時間']
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
            relatedRules: ['時間の讀法', '期間表達']
        },
        sourceItem: { value: 'duration', kanji: '〜時間', reading: '〜じかん' }
    }
];
