import { DatesPracticeQuestion } from '../types';

// 分鐘練習題 (1分〜10分)
// 每個重要分鐘3題：發音題、單句敘述題、對話題
// 特別注意：分鐘是最複雜的音變規則
// 1/6/8/10 → 促音+半濁音（っ+ぷん）
// 3/4 → 半濁音（ぷん）
// 2/5/7/9 → 無音變（ふん）

export const minuteQuestions: DatesPracticeQuestion[] = [
    // ===== 1分 的三題（促音+半濁音：いっぷん） =====
    {
        id: 'minute_1_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「一分」的正確讀音是？',
        stem_zh: '「一分」的正確讀音是？',
        options: [
            { text: 'いっぷん', isCorrect: true, reason: '正確{せいかく}！「一分{いっぷん}」讀作{どくさ}「いっぷん」，促音{そくおん}+半濁音{はんだくおん}。' },
            { text: 'いちふん', isCorrect: false, reason: '陷阱{かんけい}！一分{いっぷん}發生{はっせい}促音化{そくおんか}+半濁音化{はんだくおんか}，不是「いちふん」。' },
            { text: 'いちぶん', isCorrect: false, reason: '「ぶん」是「部分{ぶぶん}」の讀法{よみかた}，分鐘{ふん}讀む{よむ}「ぷん/ふん」。' },
            { text: 'いっふん', isCorrect: false, reason: '促音{そくおん}後應{おう}變{へんか}半濁音{はんだくおん}「ぷん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一分{いっぷん}」讀作{どくさ}「いっぷん」。「いち」的最後{さいご}音{おん}變成{なる}促音{そくおん}「っ」，「ふん」變成{なる}半濁音{はんだくおん}「ぷん」。',
            trapExplanation: '這是陷阱題{かんけいだい}。分鐘{ふん}是音變{おんへん}最複雜{さいふくざつ}の量詞{りょうし}。1、6、8、10 分{ふん}都{すべて}發生{はっせい}促音化{そくおんか}+半濁音化{はんだくおんか}。',
            relatedRules: ['分鐘{ふん}の音變{おんへん}規則{きそく}', '促音化{そくおんか}+半濁音化{はんだくおんか}']
        },
        sourceItem: { value: 1, kanji: '一分', reading: 'いっぷん' }
    },
    {
        id: 'minute_1_sent',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '電車は＿＿で来ます。',
        stem_zh: '電車一分鐘後到。',
        options: [
            { text: 'いちふん', isCorrect: false, reason: '陷阱{かんけい}！一分{いっぷん}發生{はっせい}音變{おんへん}，是「いっぷん」。' },
            { text: 'いっぷん', isCorrect: true, reason: '正確{せいかく}！電車{でんしゃ}一分鐘{いっぷん}後{ご}到{つきます}。' },
            { text: 'いちぶん', isCorrect: false, reason: '分鐘{ふん}讀む{よむ}「ぷん」不是「ぶん」。' },
            { text: 'いっふん', isCorrect: false, reason: '促音{そくおん}後應{おう}變{へんか}「ぷん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「一分{いっぷん}で」表示{ひょうじ}「一分鐘{いっぷん}内{うち}」。',
            trapExplanation: '一分{いっぷん}是「いっぷん」，促音{そくおん}+半濁音{はんだくおん}。',
            relatedRules: ['分鐘{ふん}の音變{おんへん}', '時間{じかん}表達{ひょうたつ}']
        },
        sourceItem: { value: 1, kanji: '一分', reading: 'いっぷん' }
    },
    {
        id: 'minute_1_dial',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: 'あとどのくらいですか？',
        stem_zh: '還要多久？',
        dialogue: {
            speakerA: 'あとどのくらいですか？',
            speakerB: 'あと＿＿です。（一分鐘）'
        },
        options: [
            { text: 'いちふん', isCorrect: false, reason: '一分{いっぷん}發生{はっせい}音變{おんへん}。' },
            { text: 'いっぷん', isCorrect: true, reason: '正確{せいかく}！還有{あと}一分鐘{いっぷん}。' },
            { text: 'いちぶん', isCorrect: false, reason: '分鐘{ふん}讀む{よむ}「ぷん」。' },
            { text: 'いっふん', isCorrect: false, reason: '應{おう}變{へんか}「ぷん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「あと一分{いっぷん}」表示{ひょうじ}「還有{あと}一分鐘{いっぷん}」。',
            relatedRules: ['分鐘{ふん}の讀法{よみかた}', '「あと」の使用{しよう}']
        },
        sourceItem: { value: 1, kanji: '一分', reading: 'いっぷん' }
    },

    // ===== 3分 的三題（半濁音：さんぷん） =====
    {
        id: 'minute_3_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「三分」的正確讀音是？',
        stem_zh: '「三分」的正確讀音是？',
        options: [
            { text: 'さんぷん', isCorrect: true, reason: '正確{せいかく}！「三分{さんぷん}」讀作{どくさ}「さんぷん」，半濁音化{はんだくおんか}。' },
            { text: 'さんふん', isCorrect: false, reason: '陷阱{かんけい}！三分{さんぷん}發生{はっせい}半濁音化{はんだくおんか}，是「さんぷん」不是「さんふん」。' },
            { text: 'さんぶん', isCorrect: false, reason: '分鐘{ふん}讀む{よむ}「ぷん」不是「ぶん」。' },
            { text: 'さっぷん', isCorrect: false, reason: '三分{さんぷん}不促音化{ふそくおんか}，是「さんぷん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三分{さんぷん}」讀作{どくさ}「さんぷん」。撥音{はつおん}「ん」後{あと}「ふん」變成{なる}半濁音{はんだくおん}「ぷん」。',
            trapExplanation: '這是陷阱題{かんけいだい}。3分{さんぷん}和4分{よんぷん}發生{はっせい}半濁音化{はんだくおんか}（ぷん），但不促音化{ふそくおんか}。',
            relatedRules: ['分鐘{ふん}の音變{おんへん}規則{きそく}', '撥音{はつおん}後の半濁音化{はんだくおんか}']
        },
        sourceItem: { value: 3, kanji: '三分', reading: 'さんぷん' }
    },
    {
        id: 'minute_3_sent',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: 'ラーメンは＿＿待ってください。',
        stem_zh: '拉麵請等三分鐘。',
        options: [
            { text: 'さんふん', isCorrect: false, reason: '陷阱{かんけい}！三分{さんぷん}發生{はっせい}半濁音化{はんだくおんか}。' },
            { text: 'さんぷん', isCorrect: true, reason: '正確{せいかく}！拉麵{ラーメン}請{おねがい}等{まって}三分鐘{さんぷん}。' },
            { text: 'みっぷん', isCorrect: false, reason: '三分{さんぷん}使用{しよう}音讀{おんどく}「さん」。' },
            { text: 'さっぷん', isCorrect: false, reason: '三分{さんぷん}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三分{さんぷん}待{まっ}ってください」表示{ひょうじ}「請{おねがい}等{まって}三分鐘{さんぷん}」。',
            trapExplanation: '三分{さんぷん}是「さんぷん」，半濁音化{はんだくおんか}但不促音化{ふそくおんか}。',
            relatedRules: ['分鐘{ふん}の音變{おんへん}', '等待{まつ}表達{ひょうたつ}']
        },
        sourceItem: { value: 3, kanji: '三分', reading: 'さんぷん' }
    },
    {
        id: 'minute_3_dial',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: 'どのくらいかかりますか？',
        stem_zh: '要多久？',
        dialogue: {
            speakerA: '駅までどのくらいかかりますか？',
            speakerB: '歩いて＿＿くらいです。（三分鐘）'
        },
        options: [
            { text: 'さんふん', isCorrect: false, reason: '三分{さんぷん}發生{はっせい}半濁音化{はんだくおんか}。' },
            { text: 'さんぷん', isCorrect: true, reason: '正確{せいかく}！走路{あるいて}三分鐘{さんぷん}左右{くらい}。' },
            { text: 'みっぷん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「さん」。' },
            { text: 'さんぶん', isCorrect: false, reason: '分鐘{ふん}讀む{よむ}「ぷん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「歩{ある}いて三分{さんぷん}くらい」表示{ひょうじ}「走路{あるいて}約{やく}三分鐘{さんぷん}」。',
            relatedRules: ['分鐘{ふん}の讀法{よみかた}', '距離{きょり}時間{じかん}表達{ひょうたつ}']
        },
        sourceItem: { value: 3, kanji: '三分', reading: 'さんぷん' }
    },

    // ===== 4分 的三題（半濁音：よんぷん） =====
    {
        id: 'minute_4_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「四分」的正確讀音是？',
        stem_zh: '「四分」的正確讀音是？',
        options: [
            { text: 'よんぷん', isCorrect: true, reason: '正確{せいかく}！「四分{よんぷん}」讀作{どくさ}「よんぷん」，半濁音化{はんだくおんか}。' },
            { text: 'よんふん', isCorrect: false, reason: '陷阱{かんけい}！四分{よんぷん}發生{はっせい}半濁音化{はんだくおんか}，是「よんぷん」。' },
            { text: 'しふん', isCorrect: false, reason: '分鐘{ふん}中四{よん}讀む{よむ}「よん」不是「し」。' },
            { text: 'よっぷん', isCorrect: false, reason: '四分{よんぷん}不促音化{ふそくおんか}，是「よんぷん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四分{よんぷん}」讀作{どくさ}「よんぷん」。撥音{はつおん}「ん」後{あと}發生{はっせい}半濁音化{はんだくおんか}。',
            trapExplanation: '這是陷阱題{かんけいだい}。四分{よんぷん}與三分{さんぷん}同樣{どうよう}，發生{はっせい}半濁音化{はんだくおんか}但不促音化{ふそくおんか}。',
            relatedRules: ['分鐘{ふん}の音變{おんへん}規則{きそく}', '「よん」後の半濁音化{はんだくおんか}']
        },
        sourceItem: { value: 4, kanji: '四分', reading: 'よんぷん' }
    },
    {
        id: 'minute_4_sent',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '今＿＿遅れています。',
        stem_zh: '現在遲到四分鐘。',
        options: [
            { text: 'よんふん', isCorrect: false, reason: '陷阱{かんけい}！四分{よんぷん}發生{はっせい}半濁音化{はんだくおんか}。' },
            { text: 'よんぷん', isCorrect: true, reason: '正確{せいかく}！現在{いま}遲到{おくれています}四分鐘{よんぷん}。' },
            { text: 'しぷん', isCorrect: false, reason: '分鐘{ふん}中四{よん}讀む{よむ}「よん」。' },
            { text: 'よっぷん', isCorrect: false, reason: '四分{よんぷん}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「四分{よんぷん}遅{おく}れています」表示{ひょうじ}「遲到{おくれています}四分鐘{よんぷん}」。',
            trapExplanation: '四分{よんぷん}是「よんぷん」，半濁音化{はんだくおんか}但不促音化{ふそくおんか}。',
            relatedRules: ['分鐘{ふん}の音變{おんへん}', '遲到{おくれる}表達{ひょうたつ}']
        },
        sourceItem: { value: 4, kanji: '四分', reading: 'よんぷん' }
    },
    {
        id: 'minute_4_dial',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: 'あとどのくらいですか？',
        stem_zh: '還要多久？',
        dialogue: {
            speakerA: '電車はあとどのくらいですか？',
            speakerB: 'あと＿＿です。（四分鐘）'
        },
        options: [
            { text: 'よんふん', isCorrect: false, reason: '四分{よんぷん}發生{はっせい}半濁音化{はんだくおんか}。' },
            { text: 'よんぷん', isCorrect: true, reason: '正確{せいかく}！還有{あと}四分鐘{よんぷん}。' },
            { text: 'しぷん', isCorrect: false, reason: '分鐘{ふん}中四{よん}讀む{よむ}「よん」。' },
            { text: 'よっぷん', isCorrect: false, reason: '四分{よんぷん}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「あと四分{よんぷん}」表示{ひょうじ}「還有{あと}四分鐘{よんぷん}」。',
            relatedRules: ['分鐘{ふん}の讀法{よみかた}', '「あと」の使用{しよう}']
        },
        sourceItem: { value: 4, kanji: '四分', reading: 'よんぷん' }
    },

    // ===== 5分 的三題（無音變：ごふん） =====
    {
        id: 'minute_5_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「五分」的正確讀音是？',
        stem_zh: '「五分」的正確讀音是？',
        options: [
            { text: 'ごふん', isCorrect: true, reason: '正確{せいかく}！「五分{ごふん}」讀作{どくさ}「ごふん」，無音變{むおんへん}。' },
            { text: 'ごぷん', isCorrect: false, reason: '五分{ごふん}不發生{ふはっせい}半濁音化{はんだくおんか}，是「ごふん」。' },
            { text: 'いつふん', isCorrect: false, reason: '分鐘{ふん}使用{しよう}音讀{おんどく}「ご」不是訓讀{くんどく}「いつ」。' },
            { text: 'ごっぷん', isCorrect: false, reason: '五分{ごふん}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五分{ごふん}」讀作{どくさ}「ごふん」。2、5、7、9 分{ふん}不發生{ふはっせい}音變{おんへん}，直接{ちょくせつ}讀む{よむ}「ふん」。',
            relatedRules: ['分鐘{ふん}の無音變{むおんへん}組{くみ}', '「ふん」の直接{ちょくせつ}使用{しよう}']
        },
        sourceItem: { value: 5, kanji: '五分', reading: 'ごふん' }
    },
    {
        id: 'minute_5_sent',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿休憩しましょう。',
        stem_zh: '休息五分鐘吧。',
        options: [
            { text: 'ごぷん', isCorrect: false, reason: '五分{ごふん}不發生{ふはっせい}半濁音化{はんだくおんか}。' },
            { text: 'ごふん', isCorrect: true, reason: '正確{せいかく}！休息{きゅうけい}五分鐘{ごふん}吧{しましょう}。' },
            { text: 'いつふん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「ご」。' },
            { text: 'ごっぷん', isCorrect: false, reason: '五分{ごふん}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「五分{ごふん}休憩{きゅうけい}しましょう」表示{ひょうじ}「休息{きゅうけい}五分鐘{ごふん}吧{しましょう}」。',
            relatedRules: ['分鐘{ふん}の讀法{よみかた}', '休息{きゅうけい}表達{ひょうたつ}']
        },
        sourceItem: { value: 5, kanji: '五分', reading: 'ごふん' }
    },
    {
        id: 'minute_5_dial',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '今何時何分ですか？',
        stem_zh: '現在幾點幾分？',
        dialogue: {
            speakerA: '今何時何分ですか？',
            speakerB: '三時＿＿です。（五分）'
        },
        options: [
            { text: 'ごぷん', isCorrect: false, reason: '五分{ごふん}不發生{ふはっせい}半濁音化{はんだくおんか}。' },
            { text: 'ごふん', isCorrect: true, reason: '正確{せいかく}！三時{さんじ}五分{ごふん}。' },
            { text: 'いつふん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「ご」。' },
            { text: 'ごっぷん', isCorrect: false, reason: '五分{ごふん}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三時{さんじ}五分{ごふん}」表示{ひょうじ}三點五分{さんじごふん}。',
            relatedRules: ['分鐘{ふん}の讀法{よみかた}', '時間{じかん}表達{ひょうたつ}']
        },
        sourceItem: { value: 5, kanji: '五分', reading: 'ごふん' }
    },

    // ===== 6分 的三題（促音+半濁音：ろっぷん） =====
    {
        id: 'minute_6_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「六分」的正確讀音是？',
        stem_zh: '「六分」的正確讀音是？',
        options: [
            { text: 'ろっぷん', isCorrect: true, reason: '正確{せいかく}！「六分{ろっぷん}」讀作{どくさ}「ろっぷん」，促音{そくおん}+半濁音{はんだくおん}。' },
            { text: 'ろくふん', isCorrect: false, reason: '陷阱{かんけい}！六分{ろっぷん}發生{はっせい}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'ろくぷん', isCorrect: false, reason: '需要{じゅよう}促音化{そくおんか}，是「ろっぷん」。' },
            { text: 'むっぷん', isCorrect: false, reason: '分鐘{ふん}使用{しよう}音讀{おんどく}「ろく」不是「む」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六分{ろっぷん}」讀作{どくさ}「ろっぷん」。「ろく」變成{なる}促音{そくおん}「ろっ」，「ふん」變成{なる}半濁音{はんだくおん}「ぷん」。',
            trapExplanation: '這是陷阱題{かんけいだい}。六分{ろっぷん}與一分{いっぷん}、十分{じゅっぷん}同樣{どうよう}發生{はっせい}促音化{そくおんか}+半濁音化{はんだくおんか}。',
            relatedRules: ['分鐘{ふん}の音變{おんへん}規則{きそく}', '「ろく」の促音化{そくおんか}']
        },
        sourceItem: { value: 6, kanji: '六分', reading: 'ろっぷん' }
    },
    {
        id: 'minute_6_sent',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '家から駅まで＿＿です。',
        stem_zh: '從家到車站六分鐘。',
        options: [
            { text: 'ろくふん', isCorrect: false, reason: '陷阱{かんけい}！六分{ろっぷん}發生{はっせい}音變{おんへん}。' },
            { text: 'ろっぷん', isCorrect: true, reason: '正確{せいかく}！從{から}家{いえ}到{まで}車站{えき}六分鐘{ろっぷん}。' },
            { text: 'ろくぷん', isCorrect: false, reason: '需要{じゅよう}促音化{そくおんか}。' },
            { text: 'むいふん', isCorrect: false, reason: '「むい」是日期{にっき}讀法{よみかた}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「六分{ろっぷん}」表示{ひょうじ}距離{きょり}的時間{じかん}。',
            trapExplanation: '六分{ろっぷん}是「ろっぷん」，促音{そくおん}+半濁音{はんだくおん}。',
            relatedRules: ['分鐘{ふん}の音變{おんへん}', '距離{きょり}時間{じかん}表達{ひょうたつ}']
        },
        sourceItem: { value: 6, kanji: '六分', reading: 'ろっぷん' }
    },
    {
        id: 'minute_6_dial',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '今何時ですか？',
        stem_zh: '現在幾點？',
        dialogue: {
            speakerA: '今何時ですか？',
            speakerB: '十時＿＿です。（六分）'
        },
        options: [
            { text: 'ろくふん', isCorrect: false, reason: '六分{ろっぷん}發生{はっせい}音變{おんへん}。' },
            { text: 'ろっぷん', isCorrect: true, reason: '正確{せいかく}！十時{じゅうじ}六分{ろっぷん}。' },
            { text: 'ろくぷん', isCorrect: false, reason: '需要{じゅよう}促音化{そくおんか}。' },
            { text: 'むっぷん', isCorrect: false, reason: '使用{しよう}「ろく」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十時{じゅうじ}六分{ろっぷん}」表示{ひょうじ}十點六分{じゅうじろっぷん}。',
            relatedRules: ['分鐘{ふん}の讀法{よみかた}', '時間{じかん}表達{ひょうたつ}']
        },
        sourceItem: { value: 6, kanji: '六分', reading: 'ろっぷん' }
    },

    // ===== 8分 的三題（促音+半濁音 或 無音變：はっぷん/はちふん） =====
    {
        id: 'minute_8_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「八分」的正確讀音是？',
        stem_zh: '「八分」的正確讀音是？',
        options: [
            { text: 'はっぷん', isCorrect: true, reason: '正確{せいかく}！「八分{はっぷん}」最常{さいじょう}讀作{どくさ}「はっぷん」。（「はちふん」也可{かのう}）' },
            { text: 'はちふん', isCorrect: false, reason: '「はちふん」也是正確{せいかく}讀法{よみかた}，但「はっぷん」更常用{じょうよう}。' },
            { text: 'やっぷん', isCorrect: false, reason: '分鐘{ふん}使用{しよう}音讀{おんどく}「はち」不是「や」。' },
            { text: 'はちぷん', isCorrect: false, reason: '如果{もし}音變{おんへん}，應{おう}變{へんか}「はっぷん」；如果{もし}不音變{むおんへん}，應{おう}是「はちふん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八分{はっぷん}」最常{さいじょう}讀作{どくさ}「はっぷん」（促音{そくおん}+半濁音{はんだくおん}）。「はちふん」（無音變{むおんへん}）也可接受{うけいれ}。',
            trapExplanation: '八分{はっぷん}是特殊{とくしゅ}案例{あんれい}，「はっぷん」和「はちふん」兩種{ふたしゅ}讀法{よみかた}都{すべて}存在{そんざい}，但「はっぷん」更常見{じょうけん}。',
            relatedRules: ['八分{はっぷん}の雙重{そうじゅう}讀法{よみかた}', '促音化{そくおんか}の選擇性{せんたくせい}']
        },
        sourceItem: { value: 8, kanji: '八分', reading: 'はっぷん / はちふん' }
    },
    {
        id: 'minute_8_sent',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: 'バスは＿＿後に来ます。',
        stem_zh: '巴士八分鐘後到。',
        options: [
            { text: 'はちふん', isCorrect: false, reason: '「はちふん」可以{かのう}，但「はっぷん」更常用{じょうよう}。' },
            { text: 'はっぷん', isCorrect: true, reason: '正確{せいかく}！巴士{バス}八分鐘{はっぷん}後{ご}到{きます}。' },
            { text: 'やっぷん', isCorrect: false, reason: '使用{しよう}「はち」不是「や」。' },
            { text: 'はちぷん', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八分{はっぷん}後{ご}」表示{ひょうじ}「八分鐘{はっぷん}後{ご}」。',
            relatedRules: ['分鐘{ふん}の讀法{よみかた}', '時間{じかん}表達{ひょうたつ}']
        },
        sourceItem: { value: 8, kanji: '八分', reading: 'はっぷん / はちふん' }
    },
    {
        id: 'minute_8_dial',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '次の電車まであとどのくらいですか？',
        stem_zh: '下一班電車還有多久？',
        dialogue: {
            speakerA: '次の電車まであとどのくらいですか？',
            speakerB: 'あと＿＿くらいです。（八分鐘）'
        },
        options: [
            { text: 'はちふん', isCorrect: false, reason: '「はっぷん」更常用{じょうよう}。' },
            { text: 'はっぷん', isCorrect: true, reason: '正確{せいかく}！還有{あと}八分鐘{はっぷん}左右{くらい}。' },
            { text: 'やっぷん', isCorrect: false, reason: '使用{しよう}「はち」。' },
            { text: 'はちぷん', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「あと八分{はっぷん}くらい」表示{ひょうじ}「還有{あと}約{やく}八分鐘{はっぷん}」。',
            relatedRules: ['分鐘{ふん}の讀法{よみかた}', '「あと〜くらい」の使用{しよう}']
        },
        sourceItem: { value: 8, kanji: '八分', reading: 'はっぷん / はちふん' }
    },

    // ===== 10分 的三題（促音+半濁音：じゅっぷん） =====
    {
        id: 'minute_10_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十分」的正確讀音是？',
        stem_zh: '「十分」的正確讀音是？',
        options: [
            { text: 'じゅっぷん', isCorrect: true, reason: '正確{せいかく}！「十分{じゅっぷん}」讀作{どくさ}「じゅっぷん」，促音{そくおん}+半濁音{はんだくおん}。' },
            { text: 'じゅうふん', isCorrect: false, reason: '陷阱{かんけい}！十分{じゅっぷん}發生{はっせい}促音化{そくおんか}+半濁音化{はんだくおんか}。' },
            { text: 'とおふん', isCorrect: false, reason: '分鐘{ふん}使用{しよう}音讀{おんどく}「じゅう」不是訓讀{くんどく}「とお」。' },
            { text: 'じゅうぷん', isCorrect: false, reason: '需要{じゅよう}促音化{そくおんか}，是「じゅっぷん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十分{じゅっぷん}」讀作{どくさ}「じゅっぷん」。「じゅう」變成{なる}促音{そくおん}「じゅっ」，「ふん」變成{なる}半濁音{はんだくおん}「ぷん」。',
            trapExplanation: '這是陷阱題{かんけいだい}。十分{じゅっぷん}的音變{おんへん}與一分{いっぷん}、六分{ろっぷん}相同{どうよう}，都{すべて}發生{はっせい}促音化{そくおんか}+半濁音化{はんだくおんか}。',
            relatedRules: ['分鐘{ふん}の音變{おんへん}規則{きそく}', '「じゅう」の促音化{そくおんか}']
        },
        sourceItem: { value: 10, kanji: '十分', reading: 'じゅっぷん' }
    },
    {
        id: 'minute_10_sent',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '会議まであと＿＿です。',
        stem_zh: '距離會議還有十分鐘。',
        options: [
            { text: 'じゅうふん', isCorrect: false, reason: '陷阱{かんけい}！十分{じゅっぷん}發生{はっせい}音變{おんへん}。' },
            { text: 'じゅっぷん', isCorrect: true, reason: '正確{せいかく}！距離{きょり}會議{かいぎ}還有{あと}十分鐘{じゅっぷん}。' },
            { text: 'とおふん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「じゅう」。' },
            { text: 'じゅうぷん', isCorrect: false, reason: '需要{じゅよう}促音化{そくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「あと十分{じゅっぷん}」表示{ひょうじ}「還有{あと}十分鐘{じゅっぷん}」。',
            trapExplanation: '十分{じゅっぷん}是「じゅっぷん」，促音{そくおん}+半濁音{はんだくおん}。',
            relatedRules: ['分鐘{ふん}の音變{おんへん}', '剩餘{のこり}時間{じかん}表達{ひょうたつ}']
        },
        sourceItem: { value: 10, kanji: '十分', reading: 'じゅっぷん' }
    },
    {
        id: 'minute_10_dial',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: 'どのくらいかかりますか？',
        stem_zh: '要多久？',
        dialogue: {
            speakerA: '駅までどのくらいかかりますか？',
            speakerB: '約＿＿です。（十分鐘）'
        },
        options: [
            { text: 'じゅうふん', isCorrect: false, reason: '十分{じゅっぷん}發生{はっせい}音變{おんへん}。' },
            { text: 'じゅっぷん', isCorrect: true, reason: '正確{せいかく}！約{やく}十分鐘{じゅっぷん}。' },
            { text: 'とおふん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「じゅう」。' },
            { text: 'じゅうぷん', isCorrect: false, reason: '需要{じゅよう}促音化{そくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「約{やく}十分{じゅっぷん}」表示{ひょうじ}「約{やく}十分鐘{じゅっぷん}」。',
            relatedRules: ['分鐘{ふん}の讀法{よみかた}', '距離{きょり}時間{じかん}表達{ひょうたつ}']
        },
        sourceItem: { value: 10, kanji: '十分', reading: 'じゅっぷん' }
    },

    // ===== 2分 的三題（無音變：にふん） =====
    {
        id: 'minute_2_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二分」的正確讀音是？',
        stem_zh: '「二分」的正確讀音是？',
        options: [
            { text: 'にふん', isCorrect: true, reason: '正確{せいかく}！「二分{にふん}」讀作{どくさ}「にふん」，無音變{むおんへん}。' },
            { text: 'にぷん', isCorrect: false, reason: '二分{にふん}不發生{ふはっせい}半濁音化{はんだくおんか}。' },
            { text: 'ふたふん', isCorrect: false, reason: '分鐘{ふん}使用{しよう}音讀{おんどく}「に」不是訓讀{くんどく}「ふた」。' },
            { text: 'にっぷん', isCorrect: false, reason: '二分{にふん}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二分{にふん}」讀作{どくさ}「にふん」。2、5、7、9 分{ふん}不發生{ふはっせい}音變{おんへん}，直接{ちょくせつ}讀む{よむ}「ふん」。',
            relatedRules: ['分鐘{ふん}の無音變{むおんへん}組{くみ}', '「ふん」の直接{ちょくせつ}使用{しよう}']
        },
        sourceItem: { value: 2, kanji: '二分', reading: 'にふん' }
    },
    {
        id: 'minute_2_sent',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: 'カップラーメンは＿＿で出来ます。',
        stem_zh: '泡麵兩分鐘就好。',
        options: [
            { text: 'にぷん', isCorrect: false, reason: '二分{にふん}不發生{ふはっせい}半濁音化{はんだくおんか}。' },
            { text: 'にふん', isCorrect: true, reason: '正確{せいかく}！泡麵{カップラーメン}兩分鐘{にふん}就好{できます}。' },
            { text: 'ふたふん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「に」。' },
            { text: 'にっぷん', isCorrect: false, reason: '二分{にふん}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「二分{にふん}で」表示{ひょうじ}「兩分鐘{にふん}内{うち}」。',
            relatedRules: ['分鐘{ふん}の讀法{よみかた}', '所需{しょよう}時間{じかん}表達{ひょうたつ}']
        },
        sourceItem: { value: 2, kanji: '二分', reading: 'にふん' }
    },
    {
        id: 'minute_2_dial',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '今何時何分ですか？',
        stem_zh: '現在幾點幾分？',
        dialogue: {
            speakerA: '今何時何分ですか？',
            speakerB: '九時＿＿です。（二分）'
        },
        options: [
            { text: 'にぷん', isCorrect: false, reason: '二分{にふん}不發生{ふはっせい}半濁音化{はんだくおんか}。' },
            { text: 'にふん', isCorrect: true, reason: '正確{せいかく}！九時{くじ}二分{にふん}。' },
            { text: 'ふたふん', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「に」。' },
            { text: 'にっぷん', isCorrect: false, reason: '二分{にふん}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「九時{くじ}二分{にふん}」表示{ひょうじ}九點兩分{くじにふん}。',
            relatedRules: ['分鐘{ふん}の讀法{よみかた}', '時間{じかん}表達{ひょうたつ}']
        },
        sourceItem: { value: 2, kanji: '二分', reading: 'にふん' }
    },

    // ===== 7分 的三題（無音變：ななふん） =====
    {
        id: 'minute_7_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「七分」的正確讀音是？',
        stem_zh: '「七分」的正確讀音是？',
        options: [
            { text: 'ななふん', isCorrect: true, reason: '正確{せいかく}！「七分{ななふん}」讀作{どくさ}「ななふん」，無音變{むおんへん}。' },
            { text: 'しちふん', isCorrect: false, reason: '分鐘{ふん}中七{なな}使用{しよう}「なな」，不是「しち」。' },
            { text: 'ななぷん', isCorrect: false, reason: '七分{ななふん}不發生{ふはっせい}半濁音化{はんだくおんか}。' },
            { text: 'なのふん', isCorrect: false, reason: '「なの」是日期{にっき}讀法{よみかた}，分鐘{ふん}使用{しよう}「なな」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七分{ななふん}」讀作{どくさ}「ななふん」。分鐘{ふん}中七{なな}使用{しよう}「なな」而非{もはや}「しち」，且不發生{ふはっせい}音變{おんへん}。',
            relatedRules: ['分鐘{ふん}の無音變{むおんへん}組{くみ}', '「なな」の使用{しよう}']
        },
        sourceItem: { value: 7, kanji: '七分', reading: 'ななふん' }
    },
    {
        id: 'minute_7_sent',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '授業はあと＿＿で終わります。',
        stem_zh: '課堂還有七分鐘結束。',
        options: [
            { text: 'しちふん', isCorrect: false, reason: '分鐘{ふん}中七{なな}使用{しよう}「なな」。' },
            { text: 'ななふん', isCorrect: true, reason: '正確{せいかく}！課堂{じゅぎょう}還有{あと}七分鐘{ななふん}結束{おわります}。' },
            { text: 'ななぷん', isCorrect: false, reason: '七分{ななふん}不發生{ふはっせい}半濁音化{はんだくおんか}。' },
            { text: 'なのふん', isCorrect: false, reason: '使用{しよう}「なな」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「あと七分{ななふん}」表示{ひょうじ}「還有{あと}七分鐘{ななふん}」。',
            relatedRules: ['分鐘{ふん}の讀法{よみかた}', '剩餘{のこり}時間{じかん}表達{ひょうたつ}']
        },
        sourceItem: { value: 7, kanji: '七分', reading: 'ななふん' }
    },
    {
        id: 'minute_7_dial',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '今何時何分ですか？',
        stem_zh: '現在幾點幾分？',
        dialogue: {
            speakerA: '今何時何分ですか？',
            speakerB: '八時＿＿です。（七分）'
        },
        options: [
            { text: 'しちふん', isCorrect: false, reason: '分鐘{ふん}中七{なな}使用{しよう}「なな」。' },
            { text: 'ななふん', isCorrect: true, reason: '正確{せいかく}！八時{はちじ}七分{ななふん}。' },
            { text: 'ななぷん', isCorrect: false, reason: '七分{ななふん}不發生{ふはっせい}半濁音化{はんだくおんか}。' },
            { text: 'なのふん', isCorrect: false, reason: '使用{しよう}「なな」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八時{はちじ}七分{ななふん}」表示{ひょうじ}八點七分{はちじななふん}。',
            relatedRules: ['分鐘{ふん}の讀法{よみかた}', '時間{じかん}表達{ひょうたつ}']
        },
        sourceItem: { value: 7, kanji: '七分', reading: 'ななふん' }
    },

    // ===== 追加練習題：分鐘應用情境 =====
    {
        id: 'minute_app_01',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '電車は＿＿遅れています。',
        stem_zh: '電車遲到八分鐘。',
        options: [
            { text: 'はっぷん', isCorrect: true, reason: '正確！八分讀「はっぷん」。' },
            { text: 'はちふん', isCorrect: false, reason: '陷阱！八分發生促音化+半濁音化。' },
            { text: 'はちぷん', isCorrect: false, reason: '需要促音「っ」。' },
            { text: 'はっふん', isCorrect: false, reason: '促音後應變「ぷん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八分」讀「はっぷん」，促音+半濁音。',
            trapExplanation: '8是促音+半濁音組，要記住。',
            relatedRules: ['分鐘の音變', '8分の讀法']
        },
        sourceItem: { value: 8, kanji: '八分', reading: 'はっぷん' }
    },
    {
        id: 'minute_app_02',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '待ち時間は？',
        stem_zh: '等待時間是？',
        dialogue: {
            speakerA: '待ち時間はどのくらいですか？',
            speakerB: '約＿＿です。（五分鐘）'
        },
        options: [
            { text: 'ごふん', isCorrect: true, reason: '正確！五分讀「ごふん」。' },
            { text: 'ごぷん', isCorrect: false, reason: '五分不發生半濁音化。' },
            { text: 'いつふん', isCorrect: false, reason: '分鐘用音讀「ご」。' },
            { text: 'ごっぷん', isCorrect: false, reason: '五分不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五分」讀「ごふん」，無音變。',
            relatedRules: ['分鐘の無音變組', '5分の讀法']
        },
        sourceItem: { value: 5, kanji: '五分', reading: 'ごふん' }
    },
    {
        id: 'minute_app_03',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '料理は＿＿でできます。',
        stem_zh: '料理十分鐘完成。',
        options: [
            { text: 'じゅっぷん', isCorrect: true, reason: '正確！十分讀「じゅっぷん」。' },
            { text: 'じゅうふん', isCorrect: false, reason: '陷阱！十分發生促音化+半濁音化。' },
            { text: 'じっぷん', isCorrect: true, reason: '「じっぷん」也正確。' },
            { text: 'じゅうぷん', isCorrect: false, reason: '需要促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十分」讀「じゅっぷん」或「じっぷん」，促音+半濁音。',
            trapExplanation: '10是促音+半濁音組。',
            relatedRules: ['分鐘の音變', '10分の讀法']
        },
        sourceItem: { value: 10, kanji: '十分', reading: 'じゅっぷん' }
    },
    {
        id: 'minute_app_04',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '歩いて何分ですか？',
        stem_zh: '走路幾分鐘？',
        dialogue: {
            speakerA: '駅まで歩いて何分ですか？',
            speakerB: '約＿＿です。（九分鐘）'
        },
        options: [
            { text: 'きゅうふん', isCorrect: true, reason: '正確！九分讀「きゅうふん」。' },
            { text: 'きゅうぷん', isCorrect: false, reason: '九分不發生半濁音化。' },
            { text: 'くふん', isCorrect: false, reason: '分鐘的9讀「きゅう」不是「く」。' },
            { text: 'きゅっぷん', isCorrect: false, reason: '九分不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九分」讀「きゅうふん」，無音變。',
            relatedRules: ['分鐘の無音變組', '9分の讀法']
        },
        sourceItem: { value: 9, kanji: '九分', reading: 'きゅうふん' }
    },
    {
        id: 'minute_app_05',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: 'あと＿＿で始まります。',
        stem_zh: '還有三分鐘開始。',
        options: [
            { text: 'さんぷん', isCorrect: true, reason: '正確！三分讀「さんぷん」。' },
            { text: 'さんふん', isCorrect: false, reason: '陷阱！三分發生半濁音化。' },
            { text: 'みふん', isCorrect: false, reason: '分鐘用音讀「さん」。' },
            { text: 'さんっぷん', isCorrect: false, reason: '三分不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三分」讀「さんぷん」，只有半濁音化。',
            trapExplanation: '3和4是只有半濁音化的組。',
            relatedRules: ['分鐘の音變', '3分の讀法']
        },
        sourceItem: { value: 3, kanji: '三分', reading: 'さんぷん' }
    },
    {
        id: 'minute_app_06',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '準備時間は？',
        stem_zh: '準備時間是？',
        dialogue: {
            speakerA: '準備に何分かかりますか？',
            speakerB: '約＿＿です。（四分鐘）'
        },
        options: [
            { text: 'よんぷん', isCorrect: true, reason: '正確！四分讀「よんぷん」。' },
            { text: 'よんふん', isCorrect: false, reason: '陷阱！四分發生半濁音化。' },
            { text: 'しふん', isCorrect: false, reason: '分鐘的4讀「よん」不是「し」。' },
            { text: 'よっぷん', isCorrect: false, reason: '四分不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四分」讀「よんぷん」，只有半濁音化。',
            trapExplanation: '3和4是只有半濁音化的組。',
            relatedRules: ['分鐘の音變', '4分の讀法']
        },
        sourceItem: { value: 4, kanji: '四分', reading: 'よんぷん' }
    },
    {
        id: 'minute_app_07',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '休憩は＿＿です。',
        stem_zh: '休息六分鐘。',
        options: [
            { text: 'ろっぷん', isCorrect: true, reason: '正確！六分讀「ろっぷん」。' },
            { text: 'ろくふん', isCorrect: false, reason: '陷阱！六分發生促音化+半濁音化。' },
            { text: 'ろくぷん', isCorrect: false, reason: '需要促音「っ」。' },
            { text: 'むふん', isCorrect: false, reason: '分鐘用音讀「ろく」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六分」讀「ろっぷん」，促音+半濁音。',
            trapExplanation: '6是促音+半濁音組。',
            relatedRules: ['分鐘の音變', '6分の讀法']
        },
        sourceItem: { value: 6, kanji: '六分', reading: 'ろっぷん' }
    },
    {
        id: 'minute_app_08',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '遅刻は何分？',
        stem_zh: '遲到幾分鐘？',
        dialogue: {
            speakerA: '何分遅刻しましたか？',
            speakerB: '＿＿遅刻しました。（二分鐘）'
        },
        options: [
            { text: 'にふん', isCorrect: true, reason: '正確！二分讀「にふん」。' },
            { text: 'にぷん', isCorrect: false, reason: '二分不發生半濁音化。' },
            { text: 'ふたふん', isCorrect: false, reason: '分鐘用音讀「に」。' },
            { text: 'にっぷん', isCorrect: false, reason: '二分不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二分」讀「にふん」，無音變。',
            relatedRules: ['分鐘の無音變組', '2分の讀法']
        },
        sourceItem: { value: 2, kanji: '二分', reading: 'にふん' }
    },

    // ===== 分鐘音變規則辨析 =====
    {
        id: 'minute_rule_01',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '下列哪些分鐘發生「促音+半濁音」？',
        stem_zh: '下列哪些分鐘發生「促音+半濁音」？',
        options: [
            { text: '1、6、8、10分', isCorrect: true, reason: '正確！いっぷん、ろっぷん、はっぷん、じゅっぷん。' },
            { text: '3、4分', isCorrect: false, reason: '3、4只有半濁音化。' },
            { text: '2、5、7、9分', isCorrect: false, reason: '這些無音變。' },
            { text: '5、10分', isCorrect: false, reason: '5分無音變。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '1、6、8、10分發生促音化+半濁音化。',
            trapExplanation: '這是分鐘音變的核心規則。',
            relatedRules: ['分鐘の音變規則', '促音+半濁音組']
        },
        sourceItem: { value: 'rule', kanji: '分の音變', reading: 'っぷん' }
    },
    {
        id: 'minute_rule_02',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '下列哪些分鐘只發生「半濁音化」？',
        stem_zh: '下列哪些分鐘只發生「半濁音化」？',
        options: [
            { text: '3、4分', isCorrect: true, reason: '正確！さんぷん、よんぷん。' },
            { text: '1、6分', isCorrect: false, reason: '1、6還發生促音化。' },
            { text: '2、5分', isCorrect: false, reason: '2、5無音變。' },
            { text: '7、9分', isCorrect: false, reason: '7、9無音變。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '3、4分只發生半濁音化，不促音化。',
            trapExplanation: '要區分只半濁音和促音+半濁音。',
            relatedRules: ['分鐘の音變規則', '只半濁音組']
        },
        sourceItem: { value: 'rule', kanji: '分の音變', reading: 'ぷん' }
    },
    {
        id: 'minute_rule_03',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '下列哪些分鐘無音變（讀「ふん」）？',
        stem_zh: '下列哪些分鐘無音變（讀「ふん」）？',
        options: [
            { text: '2、5、7、9分', isCorrect: true, reason: '正確！にふん、ごふん、ななふん、きゅうふん。' },
            { text: '3、4分', isCorrect: false, reason: '3、4發生半濁音化。' },
            { text: '1、6分', isCorrect: false, reason: '1、6發生促音+半濁音化。' },
            { text: '8、10分', isCorrect: false, reason: '8、10發生促音+半濁音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '2、5、7、9分無音變，讀「ふん」。',
            trapExplanation: '這四個是「無音變組」。',
            relatedRules: ['分鐘の音變規則', '無音變組']
        },
        sourceItem: { value: 'rule', kanji: '分の音變', reading: 'ふん' }
    },
    {
        id: 'minute_rule_04',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '分鐘中「七」讀作？',
        stem_zh: '分鐘中「七」讀作？',
        options: [
            { text: 'なな', isCorrect: true, reason: '正確！七分讀「ななふん」。' },
            { text: 'しち', isCorrect: false, reason: '陷阱！分鐘的7用「なな」不是「しち」。' },
            { text: 'なの', isCorrect: false, reason: '「なの」是日期（七日）。' },
            { text: 'ひち', isCorrect: false, reason: '不存在這個讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '分鐘的「七」讀「なな」，不是「しち」。',
            trapExplanation: '注意：七時讀「しちじ」，但七分讀「ななふん」。',
            relatedRules: ['七の讀法', '分鐘vs小時']
        },
        sourceItem: { value: 7, kanji: '七分', reading: 'ななふん' }
    },
    {
        id: 'minute_rule_05',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '分鐘中「四」讀作？',
        stem_zh: '分鐘中「四」讀作？',
        options: [
            { text: 'よん', isCorrect: true, reason: '正確！四分讀「よんぷん」。' },
            { text: 'し', isCorrect: false, reason: '陷阱！分鐘的4用「よん」不是「し」。' },
            { text: 'よ', isCorrect: false, reason: '「よ」用於四時「よじ」。' },
            { text: 'よっ', isCorrect: false, reason: '四分不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '分鐘的「四」讀「よん」，變成「よんぷん」。',
            trapExplanation: '注意：四時讀「よじ」，但四分讀「よんぷん」。',
            relatedRules: ['四の讀法', '分鐘vs小時']
        },
        sourceItem: { value: 4, kanji: '四分', reading: 'よんぷん' }
    },
    {
        id: 'minute_rule_06',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '分鐘中「九」讀作？',
        stem_zh: '分鐘中「九」讀作？',
        options: [
            { text: 'きゅう', isCorrect: true, reason: '正確！九分讀「きゅうふん」。' },
            { text: 'く', isCorrect: false, reason: '陷阱！分鐘的9用「きゅう」不是「く」。' },
            { text: 'ここの', isCorrect: false, reason: '「ここの」是日期（九日）。' },
            { text: 'きゅっ', isCorrect: false, reason: '九分不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '分鐘的「九」讀「きゅう」，變成「きゅうふん」。',
            trapExplanation: '注意：九時讀「くじ」，但九分讀「きゅうふん」。',
            relatedRules: ['九の讀法', '分鐘vs小時']
        },
        sourceItem: { value: 9, kanji: '九分', reading: 'きゅうふん' }
    },

    // ===== 何分疑問詞題 =====
    {
        id: 'minute_question_01',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「何分」的正確讀法是？',
        stem_zh: '「何分」的正確讀法是？',
        options: [
            { text: 'なんぷん', isCorrect: true, reason: '正確！何分讀「なんぷん」。' },
            { text: 'なにふん', isCorrect: false, reason: '「何」在此讀「なん」。' },
            { text: 'なんふん', isCorrect: false, reason: '「何分」發生半濁音化。' },
            { text: 'いくふん', isCorrect: false, reason: '不用「いく」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何分」讀「なんぷん」，用於詢問分鐘。',
            relatedRules: ['何分の讀法', '疑問詞の使用']
        },
        sourceItem: { value: 'question', kanji: '何分', reading: 'なんぷん' }
    },
    {
        id: 'minute_question_02',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '今何時何分ですか？',
        stem_zh: '現在幾點幾分？',
        dialogue: {
            speakerA: '今何時何分ですか？',
            speakerB: '三時＿＿です。（十五分）'
        },
        options: [
            { text: 'じゅうごふん', isCorrect: true, reason: '正確！十五分讀「じゅうごふん」。' },
            { text: 'じゅうごぷん', isCorrect: false, reason: '15分不發生半濁音化。' },
            { text: 'じゅごふん', isCorrect: false, reason: '需要「う」。' },
            { text: 'とおごふん', isCorrect: false, reason: '十使用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十五分」讀「じゅうごふん」，5無音變。',
            relatedRules: ['分鐘の讀法', '時間表達']
        },
        sourceItem: { value: 15, kanji: '十五分', reading: 'じゅうごふん' }
    },

    // ===== 更多分鐘應用題 =====
    {
        id: 'minute_scene_01',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '会議は＿＿遅れます。',
        stem_zh: '會議延遲十五分鐘。',
        options: [
            { text: 'じゅうごふん', isCorrect: true, reason: '正確！十五分讀「じゅうごふん」。' },
            { text: 'じゅうごぷん', isCorrect: false, reason: '5無音變，讀「ふん」。' },
            { text: 'じゅごふん', isCorrect: false, reason: '需要「う」。' },
            { text: 'とおごふん', isCorrect: false, reason: '十使用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十五分」讀「じゅうごふん」。',
            relatedRules: ['分鐘の讀法', '會議時間']
        },
        sourceItem: { value: 15, kanji: '十五分', reading: 'じゅうごふん' }
    },
    {
        id: 'minute_scene_02',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '料理にかかる時間は？',
        stem_zh: '做菜需要多少時間？',
        dialogue: {
            speakerA: '料理に何分かかりますか？',
            speakerB: '約＿＿です。（二十分鐘）'
        },
        options: [
            { text: 'にじゅっぷん', isCorrect: true, reason: '正確！二十分讀「にじゅっぷん」。' },
            { text: 'にじゅうふん', isCorrect: false, reason: '陷阱！20的0發生促音+半濁音化。' },
            { text: 'にじっぷん', isCorrect: true, reason: '「にじっぷん」也正確。' },
            { text: 'にじゅうぷん', isCorrect: false, reason: '需要促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十分」讀「にじゅっぷん」。',
            trapExplanation: '20分的「十」發生促音+半濁音化。',
            relatedRules: ['分鐘の讀法', '20分の讀法']
        },
        sourceItem: { value: 20, kanji: '二十分', reading: 'にじゅっぷん' }
    },
    {
        id: 'minute_scene_03',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: 'バスは＿＿ごとに来ます。',
        stem_zh: '公車每三十分鐘一班。',
        options: [
            { text: 'さんじゅっぷん', isCorrect: true, reason: '正確！三十分讀「さんじゅっぷん」。' },
            { text: 'さんじゅうふん', isCorrect: false, reason: '30的「十」發生促音+半濁音化。' },
            { text: 'さんじっぷん', isCorrect: true, reason: '「さんじっぷん」也正確。' },
            { text: 'みそふん', isCorrect: false, reason: '分鐘用音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十分」讀「さんじゅっぷん」。',
            relatedRules: ['分鐘の讀法', '30分の讀法']
        },
        sourceItem: { value: 30, kanji: '三十分', reading: 'さんじゅっぷん' }
    },
    {
        id: 'minute_scene_04',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '映画は何分ですか？',
        stem_zh: '電影幾分鐘？',
        dialogue: {
            speakerA: '映画は何分ですか？',
            speakerB: '＿＿です。（九十分鐘）'
        },
        options: [
            { text: 'きゅうじゅっぷん', isCorrect: true, reason: '正確！九十分讀「きゅうじゅっぷん」。' },
            { text: 'きゅうじゅうふん', isCorrect: false, reason: '90的「十」促音+半濁音化。' },
            { text: 'くじゅっぷん', isCorrect: false, reason: '分鐘的9讀「きゅう」。' },
            { text: 'きゅうじっぷん', isCorrect: true, reason: '也正確。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九十分」讀「きゅうじゅっぷん」。',
            relatedRules: ['分鐘の讀法', '90分の讀法']
        },
        sourceItem: { value: 90, kanji: '九十分', reading: 'きゅうじゅっぷん' }
    },
    {
        id: 'minute_scene_05',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '昼休みは＿＿です。',
        stem_zh: '午休六十分鐘。',
        options: [
            { text: 'ろくじゅっぷん', isCorrect: true, reason: '正確！六十分讀「ろくじゅっぷん」。' },
            { text: 'ろくじゅうふん', isCorrect: false, reason: '陷阱！60的「十」促音+半濁音化。' },
            { text: 'ろくじっぷん', isCorrect: true, reason: '也正確。' },
            { text: 'むじゅっぷん', isCorrect: false, reason: '分鐘用「ろく」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六十分」讀「ろくじゅっぷん」。',
            trapExplanation: '60分的「十」發生促音+半濁音化。',
            relatedRules: ['分鐘の讀法', '60分の讀法']
        },
        sourceItem: { value: 60, kanji: '六十分', reading: 'ろくじゅっぷん' }
    },
    {
        id: 'minute_scene_06',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '授業は何分ですか？',
        stem_zh: '課幾分鐘？',
        dialogue: {
            speakerA: '授業は何分ですか？',
            speakerB: '＿＿です。（四十五分）'
        },
        options: [
            { text: 'よんじゅうごふん', isCorrect: true, reason: '正確！四十五分讀「よんじゅうごふん」。' },
            { text: 'よんじゅうごぷん', isCorrect: false, reason: '5無音變，讀「ふん」。' },
            { text: 'しじゅうごふん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'よんじゅごふん', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十五分」讀「よんじゅうごふん」。',
            relatedRules: ['分鐘の讀法', '45分の讀法']
        },
        sourceItem: { value: 45, kanji: '四十五分', reading: 'よんじゅうごふん' }
    },
    {
        id: 'minute_scene_07',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '待ち時間は＿＿です。',
        stem_zh: '等待時間是二十一分鐘。',
        options: [
            { text: 'にじゅういっぷん', isCorrect: true, reason: '正確！二十一分讀「にじゅういっぷん」。' },
            { text: 'にじゅういちふん', isCorrect: false, reason: '陷阱！1發生促音+半濁音化。' },
            { text: 'にじゅうひとふん', isCorrect: false, reason: '分鐘用音讀「いち」。' },
            { text: 'にじゅいっぷん', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十一分」讀「にじゅういっぷん」。',
            trapExplanation: '21分的1發生促音+半濁音化。',
            relatedRules: ['分鐘の讀法', '21分の讀法']
        },
        sourceItem: { value: 21, kanji: '二十一分', reading: 'にじゅういっぷん' }
    },
    {
        id: 'minute_scene_08',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '歩いて何分ですか？',
        stem_zh: '走路幾分鐘？',
        dialogue: {
            speakerA: '駅まで歩いて何分ですか？',
            speakerB: '約＿＿です。（十八分鐘）'
        },
        options: [
            { text: 'じゅうはっぷん', isCorrect: true, reason: '正確！十八分讀「じゅうはっぷん」。' },
            { text: 'じゅうはちふん', isCorrect: false, reason: '陷阱！8發生促音+半濁音化。' },
            { text: 'じゅはっぷん', isCorrect: false, reason: '需要「う」。' },
            { text: 'じゅうはちぷん', isCorrect: false, reason: '需要促音。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十八分」讀「じゅうはっぷん」。',
            trapExplanation: '18分的8發生促音+半濁音化。',
            relatedRules: ['分鐘の讀法', '18分の讀法']
        },
        sourceItem: { value: 18, kanji: '十八分', reading: 'じゅうはっぷん' }
    },

    // ===== 十位分鐘練習（11-19分） =====
    {
        id: 'minute_11_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十一分」的正確讀音是？',
        stem_zh: '「十一分」的正確讀音是？',
        options: [
            { text: 'じゅういっぷん', isCorrect: true, reason: '正確！十一分讀「じゅういっぷん」。' },
            { text: 'じゅういちふん', isCorrect: false, reason: '陷阱！1發生促音+半濁音化。' },
            { text: 'じゅういちぷん', isCorrect: false, reason: '1需要促音化。' },
            { text: 'といっぷん', isCorrect: false, reason: '使用音讀「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十一分」讀「じゅういっぷん」，1發生促音+半濁音化。',
            trapExplanation: '1是促音+半濁音組。',
            relatedRules: ['分鐘の音變', '11分の讀法']
        },
        sourceItem: { value: 11, kanji: '十一分', reading: 'じゅういっぷん' }
    },
    {
        id: 'minute_12_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十二分」的正確讀音是？',
        stem_zh: '「十二分」的正確讀音是？',
        options: [
            { text: 'じゅうにふん', isCorrect: true, reason: '正確！十二分讀「じゅうにふん」。' },
            { text: 'じゅうにぷん', isCorrect: false, reason: '2無音變。' },
            { text: 'じゅうにっぷん', isCorrect: false, reason: '2不促音化。' },
            { text: 'とおにふん', isCorrect: false, reason: '使用音讀「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十二分」讀「じゅうにふん」，2無音變。',
            relatedRules: ['分鐘の無音變組', '12分の讀法']
        },
        sourceItem: { value: 12, kanji: '十二分', reading: 'じゅうにふん' }
    },
    {
        id: 'minute_13_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十三分」的正確讀音是？',
        stem_zh: '「十三分」的正確讀音是？',
        options: [
            { text: 'じゅうさんぷん', isCorrect: true, reason: '正確！十三分讀「じゅうさんぷん」。' },
            { text: 'じゅうさんふん', isCorrect: false, reason: '陷阱！3發生半濁音化。' },
            { text: 'じゅうさんっぷん', isCorrect: false, reason: '3不促音化。' },
            { text: 'とおさんぷん', isCorrect: false, reason: '使用音讀「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十三分」讀「じゅうさんぷん」，3只半濁音化。',
            trapExplanation: '3是只半濁音組。',
            relatedRules: ['分鐘の音變', '13分の讀法']
        },
        sourceItem: { value: 13, kanji: '十三分', reading: 'じゅうさんぷん' }
    },
    {
        id: 'minute_14_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十四分」的正確讀音是？',
        stem_zh: '「十四分」的正確讀音是？',
        options: [
            { text: 'じゅうよんぷん', isCorrect: true, reason: '正確！十四分讀「じゅうよんぷん」。' },
            { text: 'じゅうよんふん', isCorrect: false, reason: '陷阱！4發生半濁音化。' },
            { text: 'じゅうしふん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'じゅうよっぷん', isCorrect: false, reason: '4不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十四分」讀「じゅうよんぷん」，4只半濁音化。',
            trapExplanation: '4是只半濁音組。',
            relatedRules: ['分鐘の音變', '14分の讀法']
        },
        sourceItem: { value: 14, kanji: '十四分', reading: 'じゅうよんぷん' }
    },
    {
        id: 'minute_16_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十六分」的正確讀音是？',
        stem_zh: '「十六分」的正確讀音是？',
        options: [
            { text: 'じゅうろっぷん', isCorrect: true, reason: '正確！十六分讀「じゅうろっぷん」。' },
            { text: 'じゅうろくふん', isCorrect: false, reason: '陷阱！6發生促音+半濁音化。' },
            { text: 'じゅうろくぷん', isCorrect: false, reason: '需要促音。' },
            { text: 'とおろっぷん', isCorrect: false, reason: '使用音讀「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十六分」讀「じゅうろっぷん」，6發生促音+半濁音化。',
            trapExplanation: '6是促音+半濁音組。',
            relatedRules: ['分鐘の音變', '16分の讀法']
        },
        sourceItem: { value: 16, kanji: '十六分', reading: 'じゅうろっぷん' }
    },
    {
        id: 'minute_17_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十七分」的正確讀音是？',
        stem_zh: '「十七分」的正確讀音是？',
        options: [
            { text: 'じゅうななふん', isCorrect: true, reason: '正確！十七分讀「じゅうななふん」。' },
            { text: 'じゅうしちふん', isCorrect: false, reason: '分鐘的7讀「なな」。' },
            { text: 'じゅうななぷん', isCorrect: false, reason: '7無音變。' },
            { text: 'とおななふん', isCorrect: false, reason: '使用音讀「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十七分」讀「じゅうななふん」，7無音變。',
            relatedRules: ['分鐘の無音變組', '17分の讀法']
        },
        sourceItem: { value: 17, kanji: '十七分', reading: 'じゅうななふん' }
    },
    {
        id: 'minute_19_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十九分」的正確讀音是？',
        stem_zh: '「十九分」的正確讀音是？',
        options: [
            { text: 'じゅうきゅうふん', isCorrect: true, reason: '正確！十九分讀「じゅうきゅうふん」。' },
            { text: 'じゅうくふん', isCorrect: false, reason: '分鐘的9讀「きゅう」。' },
            { text: 'じゅうきゅうぷん', isCorrect: false, reason: '9無音變。' },
            { text: 'じゅうきゅっぷん', isCorrect: false, reason: '9不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十九分」讀「じゅうきゅうふん」，9無音變。',
            relatedRules: ['分鐘の無音變組', '19分の讀法']
        },
        sourceItem: { value: 19, kanji: '十九分', reading: 'じゅうきゅうふん' }
    },

    // ===== 二十位分鐘練習（22-29分） =====
    {
        id: 'minute_22_sent',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '電車は＿＿後に来ます。',
        stem_zh: '電車二十二分鐘後來。',
        options: [
            { text: 'にじゅうにふん', isCorrect: true, reason: '正確！二十二分讀「にじゅうにふん」。' },
            { text: 'にじゅうにぷん', isCorrect: false, reason: '2無音變。' },
            { text: 'にじゅっにふん', isCorrect: false, reason: '20後不需再促音化。' },
            { text: 'にじゅうふたふん', isCorrect: false, reason: '使用音讀「に」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十二分」讀「にじゅうにふん」。',
            relatedRules: ['分鐘の讀法', '22分の讀法']
        },
        sourceItem: { value: 22, kanji: '二十二分', reading: 'にじゅうにふん' }
    },
    {
        id: 'minute_23_sent',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '會議還有＿＿開始。',
        stem_zh: '會議還有二十三分鐘開始。',
        options: [
            { text: 'にじゅうさんぷん', isCorrect: true, reason: '正確！二十三分讀「にじゅうさんぷん」。' },
            { text: 'にじゅうさんふん', isCorrect: false, reason: '陷阱！3發生半濁音化。' },
            { text: 'にじゅっさんぷん', isCorrect: false, reason: '20後不需再促音化。' },
            { text: 'にじゅうみぷん', isCorrect: false, reason: '使用音讀「さん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十三分」讀「にじゅうさんぷん」。',
            trapExplanation: '3是只半濁音組。',
            relatedRules: ['分鐘の音變', '23分の讀法']
        },
        sourceItem: { value: 23, kanji: '二十三分', reading: 'にじゅうさんぷん' }
    },
    {
        id: 'minute_24_dial',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '準備時間是？',
        stem_zh: '準備時間是？',
        dialogue: {
            speakerA: '準備に何分かかりますか？',
            speakerB: '約＿＿です。（二十四分）'
        },
        options: [
            { text: 'にじゅうよんぷん', isCorrect: true, reason: '正確！二十四分讀「にじゅうよんぷん」。' },
            { text: 'にじゅうよんふん', isCorrect: false, reason: '陷阱！4發生半濁音化。' },
            { text: 'にじゅうしふん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'にじゅうよっぷん', isCorrect: false, reason: '4不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十四分」讀「にじゅうよんぷん」。',
            trapExplanation: '4是只半濁音組。',
            relatedRules: ['分鐘の音變', '24分の讀法']
        },
        sourceItem: { value: 24, kanji: '二十四分', reading: 'にじゅうよんぷん' }
    },
    {
        id: 'minute_25_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二十五分」的正確讀音是？',
        stem_zh: '「二十五分」的正確讀音是？',
        options: [
            { text: 'にじゅうごふん', isCorrect: true, reason: '正確！二十五分讀「にじゅうごふん」。' },
            { text: 'にじゅうごぷん', isCorrect: false, reason: '5無音變。' },
            { text: 'にじゅういつふん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'にじゅうごっぷん', isCorrect: false, reason: '5不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十五分」讀「にじゅうごふん」。',
            relatedRules: ['分鐘の無音變組', '25分の讀法']
        },
        sourceItem: { value: 25, kanji: '二十五分', reading: 'にじゅうごふん' }
    },
    {
        id: 'minute_26_sent',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '走路到車站需要＿＿。',
        stem_zh: '走路到車站需要二十六分鐘。',
        options: [
            { text: 'にじゅうろっぷん', isCorrect: true, reason: '正確！二十六分讀「にじゅうろっぷん」。' },
            { text: 'にじゅうろくふん', isCorrect: false, reason: '陷阱！6發生促音+半濁音化。' },
            { text: 'にじゅうろくぷん', isCorrect: false, reason: '需要促音。' },
            { text: 'にじゅうむふん', isCorrect: false, reason: '使用音讀「ろく」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十六分」讀「にじゅうろっぷん」。',
            trapExplanation: '6是促音+半濁音組。',
            relatedRules: ['分鐘の音變', '26分の讀法']
        },
        sourceItem: { value: 26, kanji: '二十六分', reading: 'にじゅうろっぷん' }
    },
    {
        id: 'minute_27_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二十七分」的正確讀音是？',
        stem_zh: '「二十七分」的正確讀音是？',
        options: [
            { text: 'にじゅうななふん', isCorrect: true, reason: '正確！二十七分讀「にじゅうななふん」。' },
            { text: 'にじゅうしちふん', isCorrect: false, reason: '分鐘的7讀「なな」。' },
            { text: 'にじゅうななぷん', isCorrect: false, reason: '7無音變。' },
            { text: 'にじゅうなのふん', isCorrect: false, reason: '「なの」是日期讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十七分」讀「にじゅうななふん」。',
            relatedRules: ['分鐘の無音變組', '27分の讀法']
        },
        sourceItem: { value: 27, kanji: '二十七分', reading: 'にじゅうななふん' }
    },
    {
        id: 'minute_28_dial',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '電影還有多久結束？',
        stem_zh: '電影還有多久結束？',
        dialogue: {
            speakerA: '映画はあと何分ですか？',
            speakerB: 'あと＿＿です。（二十八分）'
        },
        options: [
            { text: 'にじゅうはっぷん', isCorrect: true, reason: '正確！二十八分讀「にじゅうはっぷん」。' },
            { text: 'にじゅうはちふん', isCorrect: false, reason: '陷阱！8發生促音+半濁音化。' },
            { text: 'にじゅうはちぷん', isCorrect: false, reason: '需要促音。' },
            { text: 'にじゅうやっぷん', isCorrect: false, reason: '分鐘用「はち」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十八分」讀「にじゅうはっぷん」。',
            trapExplanation: '8是促音+半濁音組。',
            relatedRules: ['分鐘の音變', '28分の讀法']
        },
        sourceItem: { value: 28, kanji: '二十八分', reading: 'にじゅうはっぷん' }
    },
    {
        id: 'minute_29_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二十九分」的正確讀音是？',
        stem_zh: '「二十九分」的正確讀音是？',
        options: [
            { text: 'にじゅうきゅうふん', isCorrect: true, reason: '正確！二十九分讀「にじゅうきゅうふん」。' },
            { text: 'にじゅうくふん', isCorrect: false, reason: '分鐘的9讀「きゅう」。' },
            { text: 'にじゅうきゅうぷん', isCorrect: false, reason: '9無音變。' },
            { text: 'にじゅうここのふん', isCorrect: false, reason: '「ここの」是日期讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十九分」讀「にじゅうきゅうふん」。',
            relatedRules: ['分鐘の無音變組', '29分の讀法']
        },
        sourceItem: { value: 29, kanji: '二十九分', reading: 'にじゅうきゅうふん' }
    },

    // ===== 三十位分鐘練習 =====
    {
        id: 'minute_31_sent',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '料理は＿＿でできます。',
        stem_zh: '料理三十一分鐘完成。',
        options: [
            { text: 'さんじゅういっぷん', isCorrect: true, reason: '正確！三十一分讀「さんじゅういっぷん」。' },
            { text: 'さんじゅういちふん', isCorrect: false, reason: '陷阱！1發生促音+半濁音化。' },
            { text: 'さんじゅっいっぷん', isCorrect: false, reason: '30後不需再促音化。' },
            { text: 'さんじゅうひとふん', isCorrect: false, reason: '使用音讀「いち」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十一分」讀「さんじゅういっぷん」。',
            trapExplanation: '1是促音+半濁音組。',
            relatedRules: ['分鐘の音變', '31分の讀法']
        },
        sourceItem: { value: 31, kanji: '三十一分', reading: 'さんじゅういっぷん' }
    },
    {
        id: 'minute_33_dial',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '休息時間是？',
        stem_zh: '休息時間是？',
        dialogue: {
            speakerA: '休憩時間は何分ですか？',
            speakerB: '＿＿です。（三十三分）'
        },
        options: [
            { text: 'さんじゅうさんぷん', isCorrect: true, reason: '正確！三十三分讀「さんじゅうさんぷん」。' },
            { text: 'さんじゅうさんふん', isCorrect: false, reason: '陷阱！3發生半濁音化。' },
            { text: 'さんじゅうみふん', isCorrect: false, reason: '使用音讀「さん」。' },
            { text: 'さんじゅうさんっぷん', isCorrect: false, reason: '3不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十三分」讀「さんじゅうさんぷん」。',
            trapExplanation: '3是只半濁音組。',
            relatedRules: ['分鐘の音變', '33分の讀法']
        },
        sourceItem: { value: 33, kanji: '三十三分', reading: 'さんじゅうさんぷん' }
    },
    {
        id: 'minute_35_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「三十五分」的正確讀音是？',
        stem_zh: '「三十五分」的正確讀音是？',
        options: [
            { text: 'さんじゅうごふん', isCorrect: true, reason: '正確！三十五分讀「さんじゅうごふん」。' },
            { text: 'さんじゅうごぷん', isCorrect: false, reason: '5無音變。' },
            { text: 'さんじゅういつふん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'みそごふん', isCorrect: false, reason: '分鐘用音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十五分」讀「さんじゅうごふん」。',
            relatedRules: ['分鐘の無音變組', '35分の讀法']
        },
        sourceItem: { value: 35, kanji: '三十五分', reading: 'さんじゅうごふん' }
    },
    {
        id: 'minute_36_sent',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '電車需要＿＿到達。',
        stem_zh: '電車需要三十六分鐘到達。',
        options: [
            { text: 'さんじゅうろっぷん', isCorrect: true, reason: '正確！三十六分讀「さんじゅうろっぷん」。' },
            { text: 'さんじゅうろくふん', isCorrect: false, reason: '陷阱！6發生促音+半濁音化。' },
            { text: 'さんじゅうろくぷん', isCorrect: false, reason: '需要促音。' },
            { text: 'さんじゅうむふん', isCorrect: false, reason: '使用音讀「ろく」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十六分」讀「さんじゅうろっぷん」。',
            trapExplanation: '6是促音+半濁音組。',
            relatedRules: ['分鐘の音變', '36分の讀法']
        },
        sourceItem: { value: 36, kanji: '三十六分', reading: 'さんじゅうろっぷん' }
    },
    {
        id: 'minute_38_dial',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '到機場需要多久？',
        stem_zh: '到機場需要多久？',
        dialogue: {
            speakerA: '空港まで何分かかりますか？',
            speakerB: '約＿＿です。（三十八分）'
        },
        options: [
            { text: 'さんじゅうはっぷん', isCorrect: true, reason: '正確！三十八分讀「さんじゅうはっぷん」。' },
            { text: 'さんじゅうはちふん', isCorrect: false, reason: '陷阱！8發生促音+半濁音化。' },
            { text: 'さんじゅうはちぷん', isCorrect: false, reason: '需要促音。' },
            { text: 'さんじゅうやっぷん', isCorrect: false, reason: '分鐘用「はち」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十八分」讀「さんじゅうはっぷん」。',
            trapExplanation: '8是促音+半濁音組。',
            relatedRules: ['分鐘の音變', '38分の讀法']
        },
        sourceItem: { value: 38, kanji: '三十八分', reading: 'さんじゅうはっぷん' }
    },

    // ===== 四十位分鐘練習 =====
    {
        id: 'minute_40_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「四十分」的正確讀音是？',
        stem_zh: '「四十分」的正確讀音是？',
        options: [
            { text: 'よんじゅっぷん', isCorrect: true, reason: '正確！四十分讀「よんじゅっぷん」。' },
            { text: 'よんじゅうふん', isCorrect: false, reason: '陷阱！40的「十」促音+半濁音化。' },
            { text: 'しじゅっぷん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'よんじっぷん', isCorrect: true, reason: '也正確。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十分」讀「よんじゅっぷん」。',
            trapExplanation: '40分的「十」發生促音+半濁音化。',
            relatedRules: ['分鐘の音變', '40分の讀法']
        },
        sourceItem: { value: 40, kanji: '四十分', reading: 'よんじゅっぷん' }
    },
    {
        id: 'minute_41_sent',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '講座需要＿＿。',
        stem_zh: '講座需要四十一分鐘。',
        options: [
            { text: 'よんじゅういっぷん', isCorrect: true, reason: '正確！四十一分讀「よんじゅういっぷん」。' },
            { text: 'よんじゅういちふん', isCorrect: false, reason: '陷阱！1發生促音+半濁音化。' },
            { text: 'しじゅういっぷん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'よんじゅうひとふん', isCorrect: false, reason: '使用音讀「いち」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十一分」讀「よんじゅういっぷん」。',
            trapExplanation: '1是促音+半濁音組。',
            relatedRules: ['分鐘の音變', '41分の讀法']
        },
        sourceItem: { value: 41, kanji: '四十一分', reading: 'よんじゅういっぷん' }
    },

    // ===== 五十位分鐘練習 =====
    {
        id: 'minute_50_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「五十分」的正確讀音是？',
        stem_zh: '「五十分」的正確讀音是？',
        options: [
            { text: 'ごじゅっぷん', isCorrect: true, reason: '正確！五十分讀「ごじゅっぷん」。' },
            { text: 'ごじゅうふん', isCorrect: false, reason: '陷阱！50的「十」促音+半濁音化。' },
            { text: 'いつじゅっぷん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'ごじっぷん', isCorrect: true, reason: '也正確。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十分」讀「ごじゅっぷん」。',
            trapExplanation: '50分的「十」發生促音+半濁音化。',
            relatedRules: ['分鐘の音變', '50分の讀法']
        },
        sourceItem: { value: 50, kanji: '五十分', reading: 'ごじゅっぷん' }
    },
    {
        id: 'minute_51_sent',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '考試時間是＿＿。',
        stem_zh: '考試時間是五十一分鐘。',
        options: [
            { text: 'ごじゅういっぷん', isCorrect: true, reason: '正確！五十一分讀「ごじゅういっぷん」。' },
            { text: 'ごじゅういちふん', isCorrect: false, reason: '陷阱！1發生促音+半濁音化。' },
            { text: 'ごじゅうひとふん', isCorrect: false, reason: '使用音讀「いち」。' },
            { text: 'いつじゅういっぷん', isCorrect: false, reason: '使用音讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十一分」讀「ごじゅういっぷん」。',
            trapExplanation: '1是促音+半濁音組。',
            relatedRules: ['分鐘の音變', '51分の讀法']
        },
        sourceItem: { value: 51, kanji: '五十一分', reading: 'ごじゅういっぷん' }
    },
    {
        id: 'minute_55_dial',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '節目長度是？',
        stem_zh: '節目長度是？',
        dialogue: {
            speakerA: '番組は何分ですか？',
            speakerB: '＿＿です。（五十五分）'
        },
        options: [
            { text: 'ごじゅうごふん', isCorrect: true, reason: '正確！五十五分讀「ごじゅうごふん」。' },
            { text: 'ごじゅうごぷん', isCorrect: false, reason: '5無音變。' },
            { text: 'ごじゅっごふん', isCorrect: false, reason: '50後不需再促音化。' },
            { text: 'いつじゅういつふん', isCorrect: false, reason: '使用音讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十五分」讀「ごじゅうごふん」。',
            relatedRules: ['分鐘の無音變組', '55分の讀法']
        },
        sourceItem: { value: 55, kanji: '五十五分', reading: 'ごじゅうごふん' }
    },
    {
        id: 'minute_56_sent',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '演講還有＿＿結束。',
        stem_zh: '演講還有五十六分鐘結束。',
        options: [
            { text: 'ごじゅうろっぷん', isCorrect: true, reason: '正確！五十六分讀「ごじゅうろっぷん」。' },
            { text: 'ごじゅうろくふん', isCorrect: false, reason: '陷阱！6發生促音+半濁音化。' },
            { text: 'ごじゅうろくぷん', isCorrect: false, reason: '需要促音。' },
            { text: 'ごじゅうむふん', isCorrect: false, reason: '使用音讀「ろく」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十六分」讀「ごじゅうろっぷん」。',
            trapExplanation: '6是促音+半濁音組。',
            relatedRules: ['分鐘の音變', '56分の讀法']
        },
        sourceItem: { value: 56, kanji: '五十六分', reading: 'ごじゅうろっぷん' }
    },
    {
        id: 'minute_58_dial',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '音樂會還有多久開始？',
        stem_zh: '音樂會還有多久開始？',
        dialogue: {
            speakerA: 'コンサートはあと何分で始まりますか？',
            speakerB: 'あと＿＿です。（五十八分）'
        },
        options: [
            { text: 'ごじゅうはっぷん', isCorrect: true, reason: '正確！五十八分讀「ごじゅうはっぷん」。' },
            { text: 'ごじゅうはちふん', isCorrect: false, reason: '陷阱！8發生促音+半濁音化。' },
            { text: 'ごじゅうはちぷん', isCorrect: false, reason: '需要促音。' },
            { text: 'ごじゅうやっぷん', isCorrect: false, reason: '分鐘用「はち」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十八分」讀「ごじゅうはっぷん」。',
            trapExplanation: '8是促音+半濁音組。',
            relatedRules: ['分鐘の音變', '58分の讀法']
        },
        sourceItem: { value: 58, kanji: '五十八分', reading: 'ごじゅうはっぷん' }
    },

    // ===== 分鐘比較題：時vs分的讀法差異 =====
    {
        id: 'minute_compare_01',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「四」在小時和分鐘的讀法不同，「四分」讀作？',
        stem_zh: '「四」在小時和分鐘的讀法不同，「四分」讀作？',
        options: [
            { text: 'よんぷん', isCorrect: true, reason: '正確！四分讀「よんぷん」。' },
            { text: 'よじ', isCorrect: false, reason: '陷阱！「よじ」是四時的讀法。' },
            { text: 'しふん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'よふん', isCorrect: false, reason: '需要「ん」：「よんぷん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '四分讀「よんぷん」，四時讀「よじ」。',
            trapExplanation: '時和分的數字讀法可能不同。',
            relatedRules: ['時間の讀法比較', '4の使い分け']
        },
        sourceItem: { value: 4, kanji: '四分', reading: 'よんぷん' }
    },
    {
        id: 'minute_compare_02',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「七」在小時和分鐘的讀法不同，「七分」讀作？',
        stem_zh: '「七」在小時和分鐘的讀法不同，「七分」讀作？',
        options: [
            { text: 'ななふん', isCorrect: true, reason: '正確！七分讀「ななふん」。' },
            { text: 'しちじ', isCorrect: false, reason: '陷阱！「しちじ」是七時的讀法。' },
            { text: 'しちふん', isCorrect: false, reason: '分鐘的7讀「なな」。' },
            { text: 'なのふん', isCorrect: false, reason: '「なの」是日期讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '七分讀「ななふん」，七時讀「しちじ」。',
            trapExplanation: '時和分的數字讀法可能不同。',
            relatedRules: ['時間の讀法比較', '7の使い分け']
        },
        sourceItem: { value: 7, kanji: '七分', reading: 'ななふん' }
    },
    {
        id: 'minute_compare_03',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「九」在小時和分鐘的讀法不同，「九分」讀作？',
        stem_zh: '「九」在小時和分鐘的讀法不同，「九分」讀作？',
        options: [
            { text: 'きゅうふん', isCorrect: true, reason: '正確！九分讀「きゅうふん」。' },
            { text: 'くじ', isCorrect: false, reason: '陷阱！「くじ」是九時的讀法。' },
            { text: 'くふん', isCorrect: false, reason: '分鐘的9讀「きゅう」。' },
            { text: 'ここのふん', isCorrect: false, reason: '「ここの」是日期讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '九分讀「きゅうふん」，九時讀「くじ」。',
            trapExplanation: '時和分的數字讀法可能不同。',
            relatedRules: ['時間の讀法比較', '9の使い分け']
        },
        sourceItem: { value: 9, kanji: '九分', reading: 'きゅうふん' }
    },

    // ===== 更多應用場景題 =====
    {
        id: 'minute_app_09',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '遲刻＿＿すみません。',
        stem_zh: '遲到一分鐘，對不起。',
        options: [
            { text: 'いっぷん', isCorrect: true, reason: '正確！一分讀「いっぷん」。' },
            { text: 'いちふん', isCorrect: false, reason: '陷阱！1發生促音+半濁音化。' },
            { text: 'ひとふん', isCorrect: false, reason: '使用音讀「いち」。' },
            { text: 'いちぷん', isCorrect: false, reason: '需要促音。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一分」讀「いっぷん」。',
            trapExplanation: '1是促音+半濁音組。',
            relatedRules: ['分鐘の音變', '1分の讀法']
        },
        sourceItem: { value: 1, kanji: '一分', reading: 'いっぷん' }
    },
    {
        id: 'minute_app_10',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '到超市要多久？',
        stem_zh: '到超市要多久？',
        dialogue: {
            speakerA: 'スーパーまで何分ですか？',
            speakerB: '歩いて＿＿です。（五分）'
        },
        options: [
            { text: 'ごふん', isCorrect: true, reason: '正確！五分讀「ごふん」。' },
            { text: 'ごぷん', isCorrect: false, reason: '5無音變。' },
            { text: 'いつふん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'ごっぷん', isCorrect: false, reason: '5不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五分」讀「ごふん」。',
            relatedRules: ['分鐘の無音變組', '5分の讀法']
        },
        sourceItem: { value: 5, kanji: '五分', reading: 'ごふん' }
    },
    {
        id: 'minute_app_11',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '新幹線は＿＿で到着します。',
        stem_zh: '新幹線四分鐘後到達。',
        options: [
            { text: 'よんぷん', isCorrect: true, reason: '正確！四分讀「よんぷん」。' },
            { text: 'よんふん', isCorrect: false, reason: '陷阱！4發生半濁音化。' },
            { text: 'しふん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'よっぷん', isCorrect: false, reason: '4不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四分」讀「よんぷん」。',
            trapExplanation: '4是只半濁音組。',
            relatedRules: ['分鐘の音變', '4分の讀法']
        },
        sourceItem: { value: 4, kanji: '四分', reading: 'よんぷん' }
    },
    {
        id: 'minute_app_12',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '微波爐加熱多久？',
        stem_zh: '微波爐加熱多久？',
        dialogue: {
            speakerA: 'レンジで何分温めますか？',
            speakerB: '＿＿お願いします。（三分）'
        },
        options: [
            { text: 'さんぷん', isCorrect: true, reason: '正確！三分讀「さんぷん」。' },
            { text: 'さんふん', isCorrect: false, reason: '陷阱！3發生半濁音化。' },
            { text: 'みふん', isCorrect: false, reason: '使用音讀「さん」。' },
            { text: 'さんっぷん', isCorrect: false, reason: '3不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三分」讀「さんぷん」。',
            trapExplanation: '3是只半濁音組。',
            relatedRules: ['分鐘の音變', '3分の讀法']
        },
        sourceItem: { value: 3, kanji: '三分', reading: 'さんぷん' }
    },
    {
        id: 'minute_app_13',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: 'パスタは＿＿茹でます。',
        stem_zh: '義大利麵煮七分鐘。',
        options: [
            { text: 'ななふん', isCorrect: true, reason: '正確！七分讀「ななふん」。' },
            { text: 'しちふん', isCorrect: false, reason: '分鐘的7讀「なな」。' },
            { text: 'ななぷん', isCorrect: false, reason: '7無音變。' },
            { text: 'なのふん', isCorrect: false, reason: '「なの」是日期讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七分」讀「ななふん」。',
            relatedRules: ['分鐘の無音變組', '7分の讀法']
        },
        sourceItem: { value: 7, kanji: '七分', reading: 'ななふん' }
    },
    {
        id: 'minute_app_14',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '喝茶需要泡多久？',
        stem_zh: '喝茶需要泡多久？',
        dialogue: {
            speakerA: 'お茶は何分蒸らしますか？',
            speakerB: '＿＿です。（二分）'
        },
        options: [
            { text: 'にふん', isCorrect: true, reason: '正確！二分讀「にふん」。' },
            { text: 'にぷん', isCorrect: false, reason: '2無音變。' },
            { text: 'ふたふん', isCorrect: false, reason: '使用音讀「に」。' },
            { text: 'にっぷん', isCorrect: false, reason: '2不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二分」讀「にふん」。',
            relatedRules: ['分鐘の無音變組', '2分の讀法']
        },
        sourceItem: { value: 2, kanji: '二分', reading: 'にふん' }
    },
    {
        id: 'minute_app_15',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '信号は＿＿後に変わります。',
        stem_zh: '信號九分鐘後變。',
        options: [
            { text: 'きゅうふん', isCorrect: true, reason: '正確！九分讀「きゅうふん」。' },
            { text: 'くふん', isCorrect: false, reason: '分鐘的9讀「きゅう」。' },
            { text: 'きゅうぷん', isCorrect: false, reason: '9無音變。' },
            { text: 'ここのふん', isCorrect: false, reason: '「ここの」是日期讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九分」讀「きゅうふん」。',
            relatedRules: ['分鐘の無音變組', '9分の讀法']
        },
        sourceItem: { value: 9, kanji: '九分', reading: 'きゅうふん' }
    },

    // ===== 分與分間的綜合題 =====
    {
        id: 'minute_mix_01',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '会議はあと＿＿で終わります。',
        stem_zh: '會議還有四十六分鐘結束。',
        options: [
            { text: 'よんじゅうろっぷん', isCorrect: true, reason: '正確！四十六分讀「よんじゅうろっぷん」。' },
            { text: 'よんじゅうろくふん', isCorrect: false, reason: '陷阱！6發生促音+半濁音化。' },
            { text: 'しじゅうろっぷん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'よんじゅうろくぷん', isCorrect: false, reason: '需要促音。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十六分」讀「よんじゅうろっぷん」。',
            trapExplanation: '6是促音+半濁音組。',
            relatedRules: ['分鐘の音變', '46分の讀法']
        },
        sourceItem: { value: 46, kanji: '四十六分', reading: 'よんじゅうろっぷん' }
    },
    {
        id: 'minute_mix_02',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '飛行時間是？',
        stem_zh: '飛行時間是？',
        dialogue: {
            speakerA: 'フライト時間は何分ですか？',
            speakerB: '＿＿です。（三十四分）'
        },
        options: [
            { text: 'さんじゅうよんぷん', isCorrect: true, reason: '正確！三十四分讀「さんじゅうよんぷん」。' },
            { text: 'さんじゅうよんふん', isCorrect: false, reason: '陷阱！4發生半濁音化。' },
            { text: 'さんじゅうしふん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'さんじゅうよっぷん', isCorrect: false, reason: '4不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十四分」讀「さんじゅうよんぷん」。',
            trapExplanation: '4是只半濁音組。',
            relatedRules: ['分鐘の音變', '34分の讀法']
        },
        sourceItem: { value: 34, kanji: '三十四分', reading: 'さんじゅうよんぷん' }
    },
    {
        id: 'minute_mix_03',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: 'ジョギングは＿＿しました。',
        stem_zh: '慢跑二十七分鐘。',
        options: [
            { text: 'にじゅうななふん', isCorrect: true, reason: '正確！二十七分讀「にじゅうななふん」。' },
            { text: 'にじゅうしちふん', isCorrect: false, reason: '分鐘的7讀「なな」。' },
            { text: 'にじゅうななぷん', isCorrect: false, reason: '7無音變。' },
            { text: 'にじゅうなのふん', isCorrect: false, reason: '「なの」是日期讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十七分」讀「にじゅうななふん」。',
            relatedRules: ['分鐘の無音變組', '27分の讀法']
        },
        sourceItem: { value: 27, kanji: '二十七分', reading: 'にじゅうななふん' }
    },
    {
        id: 'minute_mix_04',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '午餐休息多久？',
        stem_zh: '午餐休息多久？',
        dialogue: {
            speakerA: '昼休みは何分ですか？',
            speakerB: '＿＿です。（四十五分）'
        },
        options: [
            { text: 'よんじゅうごふん', isCorrect: true, reason: '正確！四十五分讀「よんじゅうごふん」。' },
            { text: 'よんじゅうごぷん', isCorrect: false, reason: '5無音變。' },
            { text: 'しじゅうごふん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'よんじゅういつふん', isCorrect: false, reason: '使用音讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十五分」讀「よんじゅうごふん」。',
            relatedRules: ['分鐘の無音變組', '45分の讀法']
        },
        sourceItem: { value: 45, kanji: '四十五分', reading: 'よんじゅうごふん' }
    },
    {
        id: 'minute_mix_05',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '洗濯は＿＿かかります。',
        stem_zh: '洗衣需要三十九分鐘。',
        options: [
            { text: 'さんじゅうきゅうふん', isCorrect: true, reason: '正確！三十九分讀「さんじゅうきゅうふん」。' },
            { text: 'さんじゅうくふん', isCorrect: false, reason: '分鐘的9讀「きゅう」。' },
            { text: 'さんじゅうきゅうぷん', isCorrect: false, reason: '9無音變。' },
            { text: 'さんじゅうここのふん', isCorrect: false, reason: '「ここの」是日期讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十九分」讀「さんじゅうきゅうふん」。',
            relatedRules: ['分鐘の無音變組', '39分の讀法']
        },
        sourceItem: { value: 39, kanji: '三十九分', reading: 'さんじゅうきゅうふん' }
    },
    {
        id: 'minute_mix_06',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '電池需要充多久？',
        stem_zh: '電池需要充多久？',
        dialogue: {
            speakerA: '充電は何分かかりますか？',
            speakerB: '約＿＿です。（五十三分）'
        },
        options: [
            { text: 'ごじゅうさんぷん', isCorrect: true, reason: '正確！五十三分讀「ごじゅうさんぷん」。' },
            { text: 'ごじゅうさんふん', isCorrect: false, reason: '陷阱！3發生半濁音化。' },
            { text: 'ごじゅうみふん', isCorrect: false, reason: '使用音讀「さん」。' },
            { text: 'いつじゅうさんぷん', isCorrect: false, reason: '使用音讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十三分」讀「ごじゅうさんぷん」。',
            trapExplanation: '3是只半濁音組。',
            relatedRules: ['分鐘の音變', '53分の讀法']
        },
        sourceItem: { value: 53, kanji: '五十三分', reading: 'ごじゅうさんぷん' }
    },
    {
        id: 'minute_mix_07',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: 'ピアノの練習は＿＿です。',
        stem_zh: '鋼琴練習三十二分鐘。',
        options: [
            { text: 'さんじゅうにふん', isCorrect: true, reason: '正確！三十二分讀「さんじゅうにふん」。' },
            { text: 'さんじゅうにぷん', isCorrect: false, reason: '2無音變。' },
            { text: 'さんじゅうふたふん', isCorrect: false, reason: '使用音讀「に」。' },
            { text: 'さんじゅうにっぷん', isCorrect: false, reason: '2不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十二分」讀「さんじゅうにふん」。',
            relatedRules: ['分鐘の無音變組', '32分の讀法']
        },
        sourceItem: { value: 32, kanji: '三十二分', reading: 'さんじゅうにふん' }
    },

    // ===== 最終綜合練習 =====
    {
        id: 'minute_final_01',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '搭公車需要多久？',
        stem_zh: '搭公車需要多久？',
        dialogue: {
            speakerA: 'バスで何分かかりますか？',
            speakerB: '約＿＿です。（四十八分）'
        },
        options: [
            { text: 'よんじゅうはっぷん', isCorrect: true, reason: '正確！四十八分讀「よんじゅうはっぷん」。' },
            { text: 'よんじゅうはちふん', isCorrect: false, reason: '陷阱！8發生促音+半濁音化。' },
            { text: 'しじゅうはっぷん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'よんじゅうはちぷん', isCorrect: false, reason: '需要促音。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十八分」讀「よんじゅうはっぷん」。',
            trapExplanation: '8是促音+半濁音組。',
            relatedRules: ['分鐘の音變', '48分の讀法']
        },
        sourceItem: { value: 48, kanji: '四十八分', reading: 'よんじゅうはっぷん' }
    },
    {
        id: 'minute_final_02',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '映画は＿＿後に始まります。',
        stem_zh: '電影五十六分鐘後開始。',
        options: [
            { text: 'ごじゅうろっぷん', isCorrect: true, reason: '正確！五十六分讀「ごじゅうろっぷん」。' },
            { text: 'ごじゅうろくふん', isCorrect: false, reason: '陷阱！6發生促音+半濁音化。' },
            { text: 'いつじゅうろっぷん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'ごじゅうろくぷん', isCorrect: false, reason: '需要促音。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十六分」讀「ごじゅうろっぷん」。',
            trapExplanation: '6是促音+半濁音組。',
            relatedRules: ['分鐘の音變', '56分の讀法']
        },
        sourceItem: { value: 56, kanji: '五十六分', reading: 'ごじゅうろっぷん' }
    },
    {
        id: 'minute_final_03',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「二十六分」的正確讀音是？',
        stem_zh: '「二十六分」的正確讀音是？',
        options: [
            { text: 'にじゅうろっぷん', isCorrect: true, reason: '正確！二十六分讀「にじゅうろっぷん」。' },
            { text: 'にじゅうろくふん', isCorrect: false, reason: '陷阱！6發生促音+半濁音化。' },
            { text: 'にじゅうろくぷん', isCorrect: false, reason: '需要促音。' },
            { text: 'にじゅうむふん', isCorrect: false, reason: '使用音讀「ろく」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十六分」讀「にじゅうろっぷん」。',
            trapExplanation: '6是促音+半濁音組。',
            relatedRules: ['分鐘の音變', '26分の讀法']
        },
        sourceItem: { value: 26, kanji: '二十六分', reading: 'にじゅうろっぷん' }
    },
    {
        id: 'minute_final_04',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '休息需要多久？',
        stem_zh: '休息需要多久？',
        dialogue: {
            speakerA: '休憩は何分ですか？',
            speakerB: '＿＿です。（十五分）'
        },
        options: [
            { text: 'じゅうごふん', isCorrect: true, reason: '正確！十五分讀「じゅうごふん」。' },
            { text: 'じゅうごぷん', isCorrect: false, reason: '5無音變。' },
            { text: 'とおごふん', isCorrect: false, reason: '使用音讀「じゅう」。' },
            { text: 'じゅういつふん', isCorrect: false, reason: '使用音讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十五分」讀「じゅうごふん」。',
            relatedRules: ['分鐘の無音變組', '15分の讀法']
        },
        sourceItem: { value: 15, kanji: '十五分', reading: 'じゅうごふん' }
    },
    {
        id: 'minute_final_05',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '試験まであと＿＿です。',
        stem_zh: '距離考試還有三十一分鐘。',
        options: [
            { text: 'さんじゅういっぷん', isCorrect: true, reason: '正確！三十一分讀「さんじゅういっぷん」。' },
            { text: 'さんじゅういちふん', isCorrect: false, reason: '陷阱！1發生促音+半濁音化。' },
            { text: 'さんじゅうひとふん', isCorrect: false, reason: '使用音讀「いち」。' },
            { text: 'みそいっぷん', isCorrect: false, reason: '分鐘用音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十一分」讀「さんじゅういっぷん」。',
            trapExplanation: '1是促音+半濁音組。',
            relatedRules: ['分鐘の音變', '31分の讀法']
        },
        sourceItem: { value: 31, kanji: '三十一分', reading: 'さんじゅういっぷん' }
    }
];
