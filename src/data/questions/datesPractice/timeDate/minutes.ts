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
        stem: '「一分」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「一分」的正確讀音是？',
        options: [
            { text: 'いっぷん', isCorrect: true, reason: '正確！「一分{いっぷん}」讀作「いっぷん」，促音+半濁音。' },
            { text: 'いちふん', isCorrect: false, reason: '陷阱！一分{いっぷん}發生促音化+半濁音化，不是「いちふん」。' },
            { text: 'いちぶん', isCorrect: false, reason: '「ぶん」是「部分」的讀法，分鐘讀「ぷん/ふん」。' },
            { text: 'いっふん', isCorrect: false, reason: '促音後應變半濁音「ぷん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一分{いっぷん}」讀作「いっぷん」。「いち」的最後音變成促音「っ」，「ふん」變成半濁音「ぷん」。',
            trapExplanation: '這是陷阱題。分鐘是音變最複雜の量詞。1、6、8、10 分{ふん}都發生促音化+半濁音化。',
            relatedRules: ['分鐘的音變規則', '促音化+半濁音化']
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
            { text: 'いちふん', isCorrect: false, reason: '陷阱！一分{いっぷん}發生音變，是「いっぷん」。' },
            { text: 'いっぷん', isCorrect: true, reason: '正確！電車一分鐘{いっぷん}後到。' },
            { text: 'いちぶん', isCorrect: false, reason: '分鐘讀「ぷん」不是「ぶん」。' },
            { text: 'いっふん', isCorrect: false, reason: '促音後應變「ぷん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「一分{いっぷん}で」表示「一分鐘{いっぷん}内」。',
            trapExplanation: '一分{いっぷん}是「いっぷん」，促音+半濁音。',
            relatedRules: ['分鐘的音變', '時間表達']
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
            { text: 'いちふん', isCorrect: false, reason: '一分{いっぷん}發生音變。' },
            { text: 'いっぷん', isCorrect: true, reason: '正確！還有一分鐘{いっぷん}。' },
            { text: 'いちぶん', isCorrect: false, reason: '分鐘讀「ぷん」。' },
            { text: 'いっふん', isCorrect: false, reason: '應變「ぷん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「あと一分{いっぷん}」表示「還有一分鐘{いっぷん}」。',
            relatedRules: ['分鐘的讀法', '「あと」的使用']
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
        stem: '「三分」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「三分」的正確讀音是？',
        options: [
            { text: 'さんぷん', isCorrect: true, reason: '正確！「三分{さんぷん}」讀作「さんぷん」，半濁音化。' },
            { text: 'さんふん', isCorrect: false, reason: '陷阱！三分{さんぷん}發生半濁音化，是「さんぷん」不是「さんふん」。' },
            { text: 'さんぶん', isCorrect: false, reason: '分鐘讀「ぷん」不是「ぶん」。' },
            { text: 'さっぷん', isCorrect: false, reason: '三分{さんぷん}不促音化，是「さんぷん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三分{さんぷん}」讀作「さんぷん」。撥音「ん」後「ふん」變成半濁音「ぷん」。',
            trapExplanation: '這是陷阱題。3分{さんぷん}和4分{よんぷん}發生半濁音化（ぷん），但不促音化。',
            relatedRules: ['分鐘的音變規則', '撥音後的半濁音化']
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
            { text: 'さんふん', isCorrect: false, reason: '陷阱！三分{さんぷん}發生半濁音化。' },
            { text: 'さんぷん', isCorrect: true, reason: '正確！拉麵請等三分鐘{さんぷん}。' },
            { text: 'みっぷん', isCorrect: false, reason: '三分{さんぷん}使用音讀「さん」。' },
            { text: 'さっぷん', isCorrect: false, reason: '三分{さんぷん}不促音化。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三分{さんぷん}待ってください」表示「請等三分鐘{さんぷん}」。',
            trapExplanation: '三分{さんぷん}是「さんぷん」，半濁音化但不促音化。',
            relatedRules: ['分鐘的音變', '等待表達']
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
            { text: 'さんふん', isCorrect: false, reason: '三分{さんぷん}發生半濁音化。' },
            { text: 'さんぷん', isCorrect: true, reason: '正確！走路三分鐘{さんぷん}左右。' },
            { text: 'みっぷん', isCorrect: false, reason: '使用音讀「さん」。' },
            { text: 'さんぶん', isCorrect: false, reason: '分鐘讀「ぷん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「歩いて三分{さんぷん}くらい」表示「走路約三分鐘{さんぷん}」。',
            relatedRules: ['分鐘的讀法', '距離時間表達']
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
        stem: '「四分」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「四分」的正確讀音是？',
        options: [
            { text: 'よんぷん', isCorrect: true, reason: '正確！「四分{よんぷん}」讀作「よんぷん」，半濁音化。' },
            { text: 'よんふん', isCorrect: false, reason: '陷阱！四分{よんぷん}發生半濁音化，是「よんぷん」。' },
            { text: 'しふん', isCorrect: false, reason: '分鐘中四{よん}讀「よん」不是「し」。' },
            { text: 'よっぷん', isCorrect: false, reason: '四分{よんぷん}不促音化，是「よんぷん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四分{よんぷん}」讀作「よんぷん」。撥音「ん」後發生半濁音化。',
            trapExplanation: '這是陷阱題。四分{よんぷん}與三分{さんぷん}同樣，發生半濁音化但不促音化。',
            relatedRules: ['分鐘的音變規則', '「よん」後的半濁音化']
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
            { text: 'よんふん', isCorrect: false, reason: '陷阱！四分{よんぷん}發生半濁音化。' },
            { text: 'よんぷん', isCorrect: true, reason: '正確！現在遲到四分鐘{よんぷん}。' },
            { text: 'しぷん', isCorrect: false, reason: '分鐘中四{よん}讀「よん」。' },
            { text: 'よっぷん', isCorrect: false, reason: '四分{よんぷん}不促音化。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「四分{よんぷん}遅れています」表示「遲到四分鐘{よんぷん}」。',
            trapExplanation: '四分{よんぷん}是「よんぷん」，半濁音化但不促音化。',
            relatedRules: ['分鐘的音變', '遲到表達']
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
            { text: 'よんふん', isCorrect: false, reason: '四分{よんぷん}發生半濁音化。' },
            { text: 'よんぷん', isCorrect: true, reason: '正確！還有四分鐘{よんぷん}。' },
            { text: 'しぷん', isCorrect: false, reason: '分鐘中四{よん}讀「よん」。' },
            { text: 'よっぷん', isCorrect: false, reason: '四分{よんぷん}不促音化。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「あと四分{よんぷん}」表示「還有四分鐘{よんぷん}」。',
            relatedRules: ['分鐘的讀法', '「あと」的使用']
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
        stem: '「五分」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「五分」的正確讀音是？',
        options: [
            { text: 'ごふん', isCorrect: true, reason: '正確！「五分{ごふん}」讀作「ごふん」，無音變。' },
            { text: 'ごぷん', isCorrect: false, reason: '五分{ごふん}不發生半濁音化，是「ごふん」。' },
            { text: 'いつふん', isCorrect: false, reason: '分鐘使用音讀「ご」不是訓讀「いつ」。' },
            { text: 'ごっぷん', isCorrect: false, reason: '五分{ごふん}不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五分{ごふん}」讀作「ごふん」。2、5、7、9 分{ふん}不發生音變，直接讀「ふん」。',
            relatedRules: ['分鐘の無音變組', '「ふん」の直接使用']
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
            { text: 'ごぷん', isCorrect: false, reason: '五分{ごふん}不發生半濁音化。' },
            { text: 'ごふん', isCorrect: true, reason: '正確！休息五分鐘{ごふん}吧。' },
            { text: 'いつふん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'ごっぷん', isCorrect: false, reason: '五分{ごふん}不促音化。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「五分{ごふん}休憩しましょう」表示「休息五分鐘{ごふん}吧」。',
            relatedRules: ['分鐘的讀法', '休息表達']
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
            { text: 'ごぷん', isCorrect: false, reason: '五分{ごふん}不發生半濁音化。' },
            { text: 'ごふん', isCorrect: true, reason: '正確！三時五分{ごふん}。' },
            { text: 'いつふん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'ごっぷん', isCorrect: false, reason: '五分{ごふん}不促音化。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三時五分{ごふん}」表示三點五分。',
            relatedRules: ['分鐘的讀法', '時間表達']
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
        stem: '「六分」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「六分」的正確讀音是？',
        options: [
            { text: 'ろっぷん', isCorrect: true, reason: '正確！「六分{ろっぷん}」讀作「ろっぷん」，促音+半濁音。' },
            { text: 'ろくふん', isCorrect: false, reason: '陷阱！六分{ろっぷん}發生促音化+半濁音化。' },
            { text: 'ろくぷん', isCorrect: false, reason: '需要促音化，是「ろっぷん」。' },
            { text: 'むっぷん', isCorrect: false, reason: '分鐘使用音讀「ろく」不是「む」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六分{ろっぷん}」讀作「ろっぷん」。「ろく」變成促音「ろっ」，「ふん」變成半濁音「ぷん」。',
            trapExplanation: '這是陷阱題。六分{ろっぷん}與一分{いっぷん}、十分{じゅっぷん}同樣發生促音化+半濁音化。',
            relatedRules: ['分鐘的音變規則', '「ろく」的促音化']
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
            { text: 'ろくふん', isCorrect: false, reason: '陷阱！六分{ろっぷん}發生音變。' },
            { text: 'ろっぷん', isCorrect: true, reason: '正確！從家到車站六分鐘{ろっぷん}。' },
            { text: 'ろくぷん', isCorrect: false, reason: '需要促音化。' },
            { text: 'むいふん', isCorrect: false, reason: '「むい」是日期讀法。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「六分{ろっぷん}」表示距離的時間。',
            trapExplanation: '六分{ろっぷん}是「ろっぷん」，促音+半濁音。',
            relatedRules: ['分鐘的音變', '距離時間表達']
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
            { text: 'ろくふん', isCorrect: false, reason: '六分{ろっぷん}發生音變。' },
            { text: 'ろっぷん', isCorrect: true, reason: '正確！十時六分{ろっぷん}。' },
            { text: 'ろくぷん', isCorrect: false, reason: '需要促音化。' },
            { text: 'むっぷん', isCorrect: false, reason: '使用「ろく」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十時六分{ろっぷん}」表示十點六分。',
            relatedRules: ['分鐘的讀法', '時間表達']
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
        stem: '「八分」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「八分」的正確讀音是？',
        options: [
            { text: 'はっぷん', isCorrect: true, reason: '正確！「八分{はっぷん}」最常讀作「はっぷん」。（「はちふん」也可）' },
            { text: 'はちふん', isCorrect: false, reason: '「はちふん」也是正確讀法，但「はっぷん」更常用。' },
            { text: 'やっぷん', isCorrect: false, reason: '分鐘使用音讀「はち」不是「や」。' },
            { text: 'はちぷん', isCorrect: false, reason: '如果音變，應變「はっぷん」；如果不音變，應是「はちふん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八分{はっぷん}」最常讀作「はっぷん」（促音+半濁音）。「はちふん」（無音變）也可接受。',
            trapExplanation: '八分{はっぷん}是特殊案例，「はっぷん」和「はちふん」兩種讀法都存在，但「はっぷん」更常見。',
            relatedRules: ['八分{はっぷん}の雙重讀法', '促音化の選擇性']
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
            { text: 'はちふん', isCorrect: false, reason: '「はちふん」可以，但「はっぷん」更常用。' },
            { text: 'はっぷん', isCorrect: true, reason: '正確！巴士八分鐘{はっぷん}後到。' },
            { text: 'やっぷん', isCorrect: false, reason: '使用「はち」不是「や」。' },
            { text: 'はちぷん', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八分{はっぷん}後」表示「八分鐘{はっぷん}後」。',
            relatedRules: ['分鐘的讀法', '時間表達']
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
            { text: 'はちふん', isCorrect: false, reason: '「はっぷん」更常用。' },
            { text: 'はっぷん', isCorrect: true, reason: '正確！還有八分鐘{はっぷん}左右。' },
            { text: 'やっぷん', isCorrect: false, reason: '使用「はち」。' },
            { text: 'はちぷん', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「あと八分{はっぷん}くらい」表示「還有約八分鐘{はっぷん}」。',
            relatedRules: ['分鐘的讀法', '「あと〜くらい」的使用']
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
        stem: '「十分」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十分」的正確讀音是？',
        options: [
            { text: 'じゅっぷん', isCorrect: true, reason: '正確！「十分{じゅっぷん}」讀作「じゅっぷん」，促音+半濁音。' },
            { text: 'じゅうふん', isCorrect: false, reason: '陷阱！十分{じゅっぷん}發生促音化+半濁音化。' },
            { text: 'とおふん', isCorrect: false, reason: '分鐘使用音讀「じゅう」不是訓讀「とお」。' },
            { text: 'じゅうぷん', isCorrect: false, reason: '需要促音化，是「じゅっぷん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十分{じゅっぷん}」讀作「じゅっぷん」。「じゅう」變成促音「じゅっ」，「ふん」變成半濁音「ぷん」。',
            trapExplanation: '這是陷阱題。十分{じゅっぷん}的音變與一分{いっぷん}、六分{ろっぷん}相同，都發生促音化+半濁音化。',
            relatedRules: ['分鐘的音變規則', '「じゅう」的促音化']
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
            { text: 'じゅうふん', isCorrect: false, reason: '陷阱！十分{じゅっぷん}發生音變。' },
            { text: 'じゅっぷん', isCorrect: true, reason: '正確！距離會議還有十分{じゅっぷん}鐘。' },
            { text: 'とおふん', isCorrect: false, reason: '使用音讀「じゅう」。' },
            { text: 'じゅうぷん', isCorrect: false, reason: '需要促音化。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「あと十分{じゅっぷん}」表示「還有十分鐘{じゅっぷん}」。',
            trapExplanation: '十分{じゅっぷん}是「じゅっぷん」，促音+半濁音。',
            relatedRules: ['分鐘的音變', '剩餘時間表達']
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
            { text: 'じゅうふん', isCorrect: false, reason: '十分{じゅっぷん}發生音變。' },
            { text: 'じゅっぷん', isCorrect: true, reason: '正確！約十分鐘{じゅっぷん}。' },
            { text: 'とおふん', isCorrect: false, reason: '使用音讀「じゅう」。' },
            { text: 'じゅうぷん', isCorrect: false, reason: '需要促音化。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「約十分{じゅっぷん}」表示「約十分鐘{じゅっぷん}」。',
            relatedRules: ['分鐘的讀法', '距離時間表達']
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
        stem: '「二分」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「二分」的正確讀音是？',
        options: [
            { text: 'にふん', isCorrect: true, reason: '正確！「二分{にふん}」讀作「にふん」，無音變。' },
            { text: 'にぷん', isCorrect: false, reason: '二分{にふん}不發生半濁音化。' },
            { text: 'ふたふん', isCorrect: false, reason: '分鐘使用音讀「に」不是訓讀「ふた」。' },
            { text: 'にっぷん', isCorrect: false, reason: '二分{にふん}不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二分{にふん}」讀作「にふん」。2、5、7、9 分{ふん}不發生音變，直接讀「ふん」。',
            relatedRules: ['分鐘の無音變組', '「ふん」の直接使用']
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
            { text: 'にぷん', isCorrect: false, reason: '二分{にふん}不發生半濁音化。' },
            { text: 'にふん', isCorrect: true, reason: '正確！泡麵兩分鐘就好。' },
            { text: 'ふたふん', isCorrect: false, reason: '使用音讀「に」。' },
            { text: 'にっぷん', isCorrect: false, reason: '二分{にふん}不促音化。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「二分{にふん}で」表示「兩分鐘内」。',
            relatedRules: ['分鐘的讀法', '所需時間表達']
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
            { text: 'にぷん', isCorrect: false, reason: '二分{にふん}不發生半濁音化。' },
            { text: 'にふん', isCorrect: true, reason: '正確！九時二分{にふん}。' },
            { text: 'ふたふん', isCorrect: false, reason: '使用音讀「に」。' },
            { text: 'にっぷん', isCorrect: false, reason: '二分{にふん}不促音化。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「九時二分{にふん}」表示九點兩分。',
            relatedRules: ['分鐘的讀法', '時間表達']
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
        stem: '「七分」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「七分」的正確讀音是？',
        options: [
            { text: 'ななふん', isCorrect: true, reason: '正確！「七分{ななふん}」讀作「ななふん」，無音變。' },
            { text: 'しちふん', isCorrect: false, reason: '分鐘中七{なな}使用「なな」，不是「しち」。' },
            { text: 'ななぷん', isCorrect: false, reason: '七分{ななふん}不發生半濁音化。' },
            { text: 'なのふん', isCorrect: false, reason: '「なの」是日期讀法，分鐘使用「なな」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七分{ななふん}」讀作「ななふん」。分鐘中七{なな}使用「なな」而非「しち」，且不發生音變。',
            relatedRules: ['分鐘の無音變組', '「なな」的使用']
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
            { text: 'しちふん', isCorrect: false, reason: '分鐘中七{なな}使用「なな」。' },
            { text: 'ななふん', isCorrect: true, reason: '正確！課堂還有七分鐘{ななふん}結束。' },
            { text: 'ななぷん', isCorrect: false, reason: '七分{ななふん}不發生半濁音化。' },
            { text: 'なのふん', isCorrect: false, reason: '使用「なな」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「あと七分{ななふん}」表示「還有七分鐘{ななふん}」。',
            relatedRules: ['分鐘的讀法', '剩餘時間表達']
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
            { text: 'しちふん', isCorrect: false, reason: '分鐘中七{なな}使用「なな」。' },
            { text: 'ななふん', isCorrect: true, reason: '正確！八時七分{ななふん}。' },
            { text: 'ななぷん', isCorrect: false, reason: '七分{ななふん}不發生半濁音化。' },
            { text: 'なのふん', isCorrect: false, reason: '使用「なな」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八時七分{ななふん}」表示八點七分。',
            relatedRules: ['分鐘的讀法', '時間表達']
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
            relatedRules: ['分鐘的音變', '8分的讀法']
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
            relatedRules: ['分鐘の無音變組', '5分的讀法']
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
            relatedRules: ['分鐘的音變', '10分的讀法']
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
            relatedRules: ['分鐘の無音變組', '9分的讀法']
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
            relatedRules: ['分鐘的音變', '3分的讀法']
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
            relatedRules: ['分鐘的音變', '4分的讀法']
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
            relatedRules: ['分鐘的音變', '6分的讀法']
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
            relatedRules: ['分鐘の無音變組', '2分的讀法']
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
            relatedRules: ['分鐘的音變規則', '促音+半濁音組']
        },
        sourceItem: { value: 'rule', kanji: '分的音變', reading: 'っぷん' }
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
            relatedRules: ['分鐘的音變規則', '只半濁音組']
        },
        sourceItem: { value: 'rule', kanji: '分的音變', reading: 'ぷん' }
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
            relatedRules: ['分鐘的音變規則', '無音變組']
        },
        sourceItem: { value: 'rule', kanji: '分的音變', reading: 'ふん' }
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
            relatedRules: ['七的讀法', '分鐘vs小時']
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
            relatedRules: ['四的讀法', '分鐘vs小時']
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
            relatedRules: ['九的讀法', '分鐘vs小時']
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
        stem: '「何分」の正{ただ}しい読{よ}み方{かた}はどれですか。',
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
            relatedRules: ['何分的讀法', '疑問詞的使用']
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
            relatedRules: ['分鐘的讀法', '時間表達']
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
            relatedRules: ['分鐘的讀法', '會議時間']
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
            relatedRules: ['分鐘的讀法', '20分的讀法']
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
            relatedRules: ['分鐘的讀法', '30分的讀法']
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
            relatedRules: ['分鐘的讀法', '90分的讀法']
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
            relatedRules: ['分鐘的讀法', '60分的讀法']
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
            relatedRules: ['分鐘的讀法', '45分的讀法']
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
            relatedRules: ['分鐘的讀法', '21分的讀法']
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
            relatedRules: ['分鐘的讀法', '18分的讀法']
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
        stem: '「十一分」の正{ただ}しい読{よ}み方{かた}はどれですか。',
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
            relatedRules: ['分鐘的音變', '11分的讀法']
        },
        sourceItem: { value: 11, kanji: '十一分', reading: 'じゅういっぷん' }
    },
    {
        id: 'minute_12_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十二分」の正{ただ}しい読{よ}み方{かた}はどれですか。',
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
            relatedRules: ['分鐘の無音變組', '12分的讀法']
        },
        sourceItem: { value: 12, kanji: '十二分', reading: 'じゅうにふん' }
    },
    {
        id: 'minute_13_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十三分」の正{ただ}しい読{よ}み方{かた}はどれですか。',
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
            relatedRules: ['分鐘的音變', '13分的讀法']
        },
        sourceItem: { value: 13, kanji: '十三分', reading: 'じゅうさんぷん' }
    },
    {
        id: 'minute_14_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十四分」の正{ただ}しい読{よ}み方{かた}はどれですか。',
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
            relatedRules: ['分鐘的音變', '14分的讀法']
        },
        sourceItem: { value: 14, kanji: '十四分', reading: 'じゅうよんぷん' }
    },
    {
        id: 'minute_16_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十六分」の正{ただ}しい読{よ}み方{かた}はどれですか。',
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
            relatedRules: ['分鐘的音變', '16分的讀法']
        },
        sourceItem: { value: 16, kanji: '十六分', reading: 'じゅうろっぷん' }
    },
    {
        id: 'minute_17_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十七分」の正{ただ}しい読{よ}み方{かた}はどれですか。',
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
            relatedRules: ['分鐘の無音變組', '17分的讀法']
        },
        sourceItem: { value: 17, kanji: '十七分', reading: 'じゅうななふん' }
    },
    {
        id: 'minute_19_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十九分」の正{ただ}しい読{よ}み方{かた}はどれですか。',
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
            relatedRules: ['分鐘の無音變組', '19分的讀法']
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
            relatedRules: ['分鐘的讀法', '22分的讀法']
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
            relatedRules: ['分鐘的音變', '23分的讀法']
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
            relatedRules: ['分鐘的音變', '24分的讀法']
        },
        sourceItem: { value: 24, kanji: '二十四分', reading: 'にじゅうよんぷん' }
    },
    {
        id: 'minute_25_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二十五分」の正{ただ}しい読{よ}み方{かた}はどれですか。',
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
            relatedRules: ['分鐘の無音變組', '25分的讀法']
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
            relatedRules: ['分鐘的音變', '26分的讀法']
        },
        sourceItem: { value: 26, kanji: '二十六分', reading: 'にじゅうろっぷん' }
    },
    {
        id: 'minute_27_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二十七分」の正{ただ}しい読{よ}み方{かた}はどれですか。',
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
            relatedRules: ['分鐘の無音變組', '27分的讀法']
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
            relatedRules: ['分鐘的音變', '28分的讀法']
        },
        sourceItem: { value: 28, kanji: '二十八分', reading: 'にじゅうはっぷん' }
    },
    {
        id: 'minute_29_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二十九分」の正{ただ}しい読{よ}み方{かた}はどれですか。',
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
            relatedRules: ['分鐘の無音變組', '29分的讀法']
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
            relatedRules: ['分鐘的音變', '31分的讀法']
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
            relatedRules: ['分鐘的音變', '33分的讀法']
        },
        sourceItem: { value: 33, kanji: '三十三分', reading: 'さんじゅうさんぷん' }
    },
    {
        id: 'minute_35_pron',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「三十五分」の正{ただ}しい読{よ}み方{かた}はどれですか。',
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
            relatedRules: ['分鐘の無音變組', '35分的讀法']
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
            relatedRules: ['分鐘的音變', '36分的讀法']
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
            relatedRules: ['分鐘的音變', '38分的讀法']
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
        stem: '「四十分」の正{ただ}しい読{よ}み方{かた}はどれですか。',
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
            relatedRules: ['分鐘的音變', '40分的讀法']
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
            relatedRules: ['分鐘的音變', '41分的讀法']
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
        stem: '「五十分」の正{ただ}しい読{よ}み方{かた}はどれですか。',
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
            relatedRules: ['分鐘的音變', '50分的讀法']
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
            relatedRules: ['分鐘的音變', '51分的讀法']
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
            relatedRules: ['分鐘の無音變組', '55分的讀法']
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
            relatedRules: ['分鐘的音變', '56分的讀法']
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
            relatedRules: ['分鐘的音變', '58分的讀法']
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
            relatedRules: ['時間的讀法比較', '4の使い分け']
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
            relatedRules: ['時間的讀法比較', '7の使い分け']
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
            relatedRules: ['時間的讀法比較', '9の使い分け']
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
            relatedRules: ['分鐘的音變', '1分的讀法']
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
            relatedRules: ['分鐘の無音變組', '5分的讀法']
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
            relatedRules: ['分鐘的音變', '4分的讀法']
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
            relatedRules: ['分鐘的音變', '3分的讀法']
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
            relatedRules: ['分鐘の無音變組', '7分的讀法']
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
            relatedRules: ['分鐘の無音變組', '2分的讀法']
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
            relatedRules: ['分鐘の無音變組', '9分的讀法']
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
            relatedRules: ['分鐘的音變', '46分的讀法']
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
            relatedRules: ['分鐘的音變', '34分的讀法']
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
            relatedRules: ['分鐘の無音變組', '27分的讀法']
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
            relatedRules: ['分鐘の無音變組', '45分的讀法']
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
            relatedRules: ['分鐘の無音變組', '39分的讀法']
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
            relatedRules: ['分鐘的音變', '53分的讀法']
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
            relatedRules: ['分鐘の無音變組', '32分的讀法']
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
            relatedRules: ['分鐘的音變', '48分的讀法']
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
            relatedRules: ['分鐘的音變', '56分的讀法']
        },
        sourceItem: { value: 56, kanji: '五十六分', reading: 'ごじゅうろっぷん' }
    },
    {
        id: 'minute_final_03',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「二十六分」の正{ただ}しい読{よ}み方{かた}はどれですか。',
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
            relatedRules: ['分鐘的音變', '26分的讀法']
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
            relatedRules: ['分鐘の無音變組', '15分的讀法']
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
            relatedRules: ['分鐘的音變', '31分的讀法']
        },
        sourceItem: { value: 31, kanji: '三十一分', reading: 'さんじゅういっぷん' }
    },

    // ===== 擴充題庫 (101-135) =====
    {
        id: 'minute_extra_01',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「四十一分」讀作？',
        stem_zh: '「四十一分」讀作？',
        options: [
            { text: 'よんじゅういっぷん', isCorrect: true, reason: '正確！四十一分讀「よんじゅういっぷん」。' },
            { text: 'よんじゅういちふん', isCorrect: false, reason: '陷阱！1發生促音+半濁音化。' },
            { text: 'しじゅういっぷん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'よんじゅうひとふん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十一分」讀「よんじゅういっぷん」，1促音+半濁音化。',
            trapExplanation: '1是促音+半濁音組(いっぷん)。',
            relatedRules: ['分鐘的音變', '41分的讀法']
        },
        sourceItem: { value: 41, kanji: '四十一分', reading: 'よんじゅういっぷん' }
    },
    {
        id: 'minute_extra_02',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '洗碗需要＿＿。',
        stem_zh: '洗碗需要七分鐘。',
        options: [
            { text: 'ななふん', isCorrect: true, reason: '正確！七分讀「ななふん」。' },
            { text: 'しちふん', isCorrect: false, reason: '分鐘用「なな」。' },
            { text: 'ななぷん', isCorrect: false, reason: '7無音變，保持「ふん」。' },
            { text: 'なのか', isCorrect: false, reason: '「なのか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七分」讀「ななふん」，7無音變。',
            relatedRules: ['分鐘の無音變組', '7分的讀法']
        },
        sourceItem: { value: 7, kanji: '七分', reading: 'ななふん' }
    },
    {
        id: 'minute_extra_03',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '散步多久了？',
        stem_zh: '散步多久了？',
        dialogue: {
            speakerA: '散歩はどれくらいですか？',
            speakerB: '＿＿です。（五十三分）'
        },
        options: [
            { text: 'ごじゅうさんぷん', isCorrect: true, reason: '正確！五十三分讀「ごじゅうさんぷん」。' },
            { text: 'ごじゅうさんふん', isCorrect: false, reason: '陷阱！3發生半濁音化。' },
            { text: 'いつじゅうさんぷん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'ごじゅうみふん', isCorrect: false, reason: '使用音讀「さん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十三分」讀「ごじゅうさんぷん」，3半濁音化。',
            trapExplanation: '3是半濁音組(さんぷん)。',
            relatedRules: ['分鐘的音變', '53分的讀法']
        },
        sourceItem: { value: 53, kanji: '五十三分', reading: 'ごじゅうさんぷん' }
    },
    {
        id: 'minute_extra_04',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十二分」讀作？',
        stem_zh: '「十二分」讀作？',
        options: [
            { text: 'じゅうにふん', isCorrect: true, reason: '正確！十二分讀「じゅうにふん」。' },
            { text: 'じゅうにぷん', isCorrect: false, reason: '2無音變。' },
            { text: 'とおにふん', isCorrect: false, reason: '使用音讀「じゅう」。' },
            { text: 'じゅうふたふん', isCorrect: false, reason: '使用音讀「に」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十二分」讀「じゅうにふん」，2無音變。',
            relatedRules: ['分鐘の無音變組', '12分的讀法']
        },
        sourceItem: { value: 12, kanji: '十二分', reading: 'じゅうにふん' }
    },
    {
        id: 'minute_extra_05',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '快遞在＿＿內送達。',
        stem_zh: '快遞在六十四分鐘內送達。',
        options: [
            { text: 'ろくじゅうよんぷん', isCorrect: true, reason: '正確！六十四分讀「ろくじゅうよんぷん」。' },
            { text: 'ろくじゅうよんふん', isCorrect: false, reason: '陷阱！4發生半濁音化。' },
            { text: 'ろくじゅうしふん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'むじゅうよんぷん', isCorrect: false, reason: '使用音讀「ろく」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六十四分」讀「ろくじゅうよんぷん」，4半濁音化。',
            trapExplanation: '4是半濁音組(よんぷん)。',
            relatedRules: ['分鐘的音變', '64分的讀法']
        },
        sourceItem: { value: 64, kanji: '六十四分', reading: 'ろくじゅうよんぷん' }
    },
    {
        id: 'minute_extra_06',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '會議還剩多少時間？',
        stem_zh: '會議還剩多少時間？',
        dialogue: {
            speakerA: '会議はあと何分ですか？',
            speakerB: '＿＿です。（二十五分）'
        },
        options: [
            { text: 'にじゅうごふん', isCorrect: true, reason: '正確！二十五分讀「にじゅうごふん」。' },
            { text: 'にじゅうごぷん', isCorrect: false, reason: '5無音變。' },
            { text: 'ふたじゅうごふん', isCorrect: false, reason: '使用音讀「に」。' },
            { text: 'にじゅういつふん', isCorrect: false, reason: '使用音讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十五分」讀「にじゅうごふん」，5無音變。',
            relatedRules: ['分鐘の無音變組', '25分的讀法']
        },
        sourceItem: { value: 25, kanji: '二十五分', reading: 'にじゅうごふん' }
    },
    {
        id: 'minute_extra_07',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「三十六分」讀作？',
        stem_zh: '「三十六分」讀作？',
        options: [
            { text: 'さんじゅうろっぷん', isCorrect: true, reason: '正確！三十六分讀「さんじゅうろっぷん」。' },
            { text: 'さんじゅうろくふん', isCorrect: false, reason: '陷阱！6發生促音+半濁音化。' },
            { text: 'さんじゅうろくぷん', isCorrect: false, reason: '需要促音。' },
            { text: 'みじゅうろっぷん', isCorrect: false, reason: '使用音讀「さん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十六分」讀「さんじゅうろっぷん」，6促音+半濁音化。',
            trapExplanation: '6是促音+半濁音組(ろっぷん)。',
            relatedRules: ['分鐘的音變', '36分的讀法']
        },
        sourceItem: { value: 36, kanji: '三十六分', reading: 'さんじゅうろっぷん' }
    },
    {
        id: 'minute_extra_08',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '瑜伽課是＿＿。',
        stem_zh: '瑜伽課是四十九分鐘。',
        options: [
            { text: 'よんじゅうきゅうふん', isCorrect: true, reason: '正確！四十九分讀「よんじゅうきゅうふん」。' },
            { text: 'よんじゅうきゅうぷん', isCorrect: false, reason: '9無音變。' },
            { text: 'しじゅうくふん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'よんじゅうここのふん', isCorrect: false, reason: '使用音讀「きゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十九分」讀「よんじゅうきゅうふん」，9無音變。',
            relatedRules: ['分鐘の無音變組', '49分的讀法']
        },
        sourceItem: { value: 49, kanji: '四十九分', reading: 'よんじゅうきゅうふん' }
    },
    {
        id: 'minute_extra_09',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '早餐準備時間？',
        stem_zh: '早餐準備時間？',
        dialogue: {
            speakerA: '朝ごはんの準備は何分ですか？',
            speakerB: '＿＿です。（十八分）'
        },
        options: [
            { text: 'じゅうはっぷん', isCorrect: true, reason: '正確！十八分讀「じゅうはっぷん」。' },
            { text: 'じゅうはちふん', isCorrect: false, reason: '陷阱！8發生促音+半濁音化。' },
            { text: 'じゅうはちぷん', isCorrect: false, reason: '需要促音。' },
            { text: 'とおはっぷん', isCorrect: false, reason: '使用音讀「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十八分」讀「じゅうはっぷん」，8促音+半濁音化。',
            trapExplanation: '8是促音+半濁音組(はっぷん)。',
            relatedRules: ['分鐘的音變', '18分的讀法']
        },
        sourceItem: { value: 18, kanji: '十八分', reading: 'じゅうはっぷん' }
    },
    {
        id: 'minute_extra_10',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「二十分」讀作？',
        stem_zh: '「二十分」讀作？',
        options: [
            { text: 'にじゅっぷん', isCorrect: true, reason: '正確！二十分讀「にじゅっぷん」。' },
            { text: 'にじゅうふん', isCorrect: false, reason: '陷阱！10發生促音+半濁音化。' },
            { text: 'にじっぷん', isCorrect: false, reason: '「二十」讀「にじゅう」。' },
            { text: 'はつかふん', isCorrect: false, reason: '分鐘用音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十分」讀「にじゅっぷん」，10促音+半濁音化。',
            trapExplanation: '10是促音+半濁音組(じゅっぷん)。',
            relatedRules: ['分鐘的音變', '20分的讀法']
        },
        sourceItem: { value: 20, kanji: '二十分', reading: 'にじゅっぷん' }
    },
    {
        id: 'minute_extra_11',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '沐浴需要＿＿。',
        stem_zh: '沐浴需要十七分鐘。',
        options: [
            { text: 'じゅうななふん', isCorrect: true, reason: '正確！十七分讀「じゅうななふん」。' },
            { text: 'じゅうしちふん', isCorrect: false, reason: '分鐘用「なな」。' },
            { text: 'じゅうななぷん', isCorrect: false, reason: '7無音變。' },
            { text: 'とおななふん', isCorrect: false, reason: '使用音讀「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十七分」讀「じゅうななふん」，7無音變。',
            relatedRules: ['分鐘の無音變組', '17分的讀法']
        },
        sourceItem: { value: 17, kanji: '十七分', reading: 'じゅうななふん' }
    },
    {
        id: 'minute_extra_12',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '通勤需要多久？',
        stem_zh: '通勤需要多久？',
        dialogue: {
            speakerA: '通勤時間は何分ですか？',
            speakerB: '＿＿です。（四十三分）'
        },
        options: [
            { text: 'よんじゅうさんぷん', isCorrect: true, reason: '正確！四十三分讀「よんじゅうさんぷん」。' },
            { text: 'よんじゅうさんふん', isCorrect: false, reason: '陷阱！3發生半濁音化。' },
            { text: 'しじゅうさんぷん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'よんじゅうみぷん', isCorrect: false, reason: '使用音讀「さん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十三分」讀「よんじゅうさんぷん」，3半濁音化。',
            trapExplanation: '3是半濁音組(さんぷん)。',
            relatedRules: ['分鐘的音變', '43分的讀法']
        },
        sourceItem: { value: 43, kanji: '四十三分', reading: 'よんじゅうさんぷん' }
    },
    {
        id: 'minute_extra_13',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「三十分」讀作？',
        stem_zh: '「三十分」讀作？',
        options: [
            { text: 'さんじゅっぷん', isCorrect: true, reason: '正確！三十分讀「さんじゅっぷん」。' },
            { text: 'さんじゅうふん', isCorrect: false, reason: '陷阱！10發生促音+半濁音化。' },
            { text: 'さんじっぷん', isCorrect: false, reason: '「三十」讀「さんじゅう」。' },
            { text: 'みそふん', isCorrect: false, reason: '分鐘用音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十分」讀「さんじゅっぷん」，10促音+半濁音化。',
            trapExplanation: '10是促音+半濁音組(じゅっぷん)。',
            relatedRules: ['分鐘的音變', '30分的讀法']
        },
        sourceItem: { value: 30, kanji: '三十分', reading: 'さんじゅっぷん' }
    },
    {
        id: 'minute_extra_14',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '午餐時間是＿＿。',
        stem_zh: '午餐時間是五十五分鐘。',
        options: [
            { text: 'ごじゅうごふん', isCorrect: true, reason: '正確！五十五分讀「ごじゅうごふん」。' },
            { text: 'ごじゅうごぷん', isCorrect: false, reason: '5無音變。' },
            { text: 'いつじゅうごふん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'ごじゅういつふん', isCorrect: false, reason: '使用音讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十五分」讀「ごじゅうごふん」，5無音變。',
            relatedRules: ['分鐘の無音變組', '55分的讀法']
        },
        sourceItem: { value: 55, kanji: '五十五分', reading: 'ごじゅうごふん' }
    },
    {
        id: 'minute_extra_15',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '等待時間是多久？',
        stem_zh: '等待時間是多久？',
        dialogue: {
            speakerA: '待ち時間は何分ですか？',
            speakerB: '＿＿です。（十四分）'
        },
        options: [
            { text: 'じゅうよんぷん', isCorrect: true, reason: '正確！十四分讀「じゅうよんぷん」。' },
            { text: 'じゅうよんふん', isCorrect: false, reason: '陷阱！4發生半濁音化。' },
            { text: 'じゅうしふん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'とおよんぷん', isCorrect: false, reason: '使用音讀「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十四分」讀「じゅうよんぷん」，4半濁音化。',
            trapExplanation: '4是半濁音組(よんぷん)。',
            relatedRules: ['分鐘的音變', '14分的讀法']
        },
        sourceItem: { value: 14, kanji: '十四分', reading: 'じゅうよんぷん' }
    },
    {
        id: 'minute_extra_16',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「四十分」讀作？',
        stem_zh: '「四十分」讀作？',
        options: [
            { text: 'よんじゅっぷん', isCorrect: true, reason: '正確！四十分讀「よんじゅっぷん」。' },
            { text: 'よんじゅうふん', isCorrect: false, reason: '陷阱！10發生促音+半濁音化。' },
            { text: 'しじゅっぷん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'よんじっぷん', isCorrect: false, reason: '「四十」讀「よんじゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十分」讀「よんじゅっぷん」，10促音+半濁音化。',
            trapExplanation: '10是促音+半濁音組(じゅっぷん)。',
            relatedRules: ['分鐘的音變', '40分的讀法']
        },
        sourceItem: { value: 40, kanji: '四十分', reading: 'よんじゅっぷん' }
    },
    {
        id: 'minute_extra_17',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '公園步行＿＿可達。',
        stem_zh: '公園步行二十二分鐘可達。',
        options: [
            { text: 'にじゅうにふん', isCorrect: true, reason: '正確！二十二分讀「にじゅうにふん」。' },
            { text: 'にじゅうにぷん', isCorrect: false, reason: '2無音變。' },
            { text: 'ふたじゅうにふん', isCorrect: false, reason: '使用音讀「に」。' },
            { text: 'にじゅうふたふん', isCorrect: false, reason: '使用音讀「に」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十二分」讀「にじゅうにふん」，2無音變。',
            relatedRules: ['分鐘の無音變組', '22分的讀法']
        },
        sourceItem: { value: 22, kanji: '二十二分', reading: 'にじゅうにふん' }
    },
    {
        id: 'minute_extra_18',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '烤麵包需要多久？',
        stem_zh: '烤麵包需要多久？',
        dialogue: {
            speakerA: 'パンを焼くのに何分かかりますか？',
            speakerB: '＿＿です。（二十一分）'
        },
        options: [
            { text: 'にじゅういっぷん', isCorrect: true, reason: '正確！二十一分讀「にじゅういっぷん」。' },
            { text: 'にじゅういちふん', isCorrect: false, reason: '陷阱！1發生促音+半濁音化。' },
            { text: 'にじゅうひとふん', isCorrect: false, reason: '使用音讀「いち」。' },
            { text: 'ふたじゅういっぷん', isCorrect: false, reason: '使用音讀「に」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十一分」讀「にじゅういっぷん」，1促音+半濁音化。',
            trapExplanation: '1是促音+半濁音組(いっぷん)。',
            relatedRules: ['分鐘的音變', '21分的讀法']
        },
        sourceItem: { value: 21, kanji: '二十一分', reading: 'にじゅういっぷん' }
    },
    {
        id: 'minute_extra_19',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「五十分」讀作？',
        stem_zh: '「五十分」讀作？',
        options: [
            { text: 'ごじゅっぷん', isCorrect: true, reason: '正確！五十分讀「ごじゅっぷん」。' },
            { text: 'ごじゅうふん', isCorrect: false, reason: '陷阱！10發生促音+半濁音化。' },
            { text: 'いつじゅっぷん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'ごじっぷん', isCorrect: false, reason: '「五十」讀「ごじゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十分」讀「ごじゅっぷん」，10促音+半濁音化。',
            trapExplanation: '10是促音+半濁音組(じゅっぷん)。',
            relatedRules: ['分鐘的音變', '50分的讀法']
        },
        sourceItem: { value: 50, kanji: '五十分', reading: 'ごじゅっぷん' }
    },
    {
        id: 'minute_extra_20',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '晚餐後休息＿＿。',
        stem_zh: '晚餐後休息三十七分鐘。',
        options: [
            { text: 'さんじゅうななふん', isCorrect: true, reason: '正確！三十七分讀「さんじゅうななふん」。' },
            { text: 'さんじゅうしちふん', isCorrect: false, reason: '分鐘用「なな」。' },
            { text: 'さんじゅうななぷん', isCorrect: false, reason: '7無音變。' },
            { text: 'みじゅうななふん', isCorrect: false, reason: '使用音讀「さん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十七分」讀「さんじゅうななふん」，7無音變。',
            relatedRules: ['分鐘の無音變組', '37分的讀法']
        },
        sourceItem: { value: 37, kanji: '三十七分', reading: 'さんじゅうななふん' }
    },
    {
        id: 'minute_extra_21',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '等公車多久了？',
        stem_zh: '等公車多久了？',
        dialogue: {
            speakerA: 'バスをどれくらい待ちましたか？',
            speakerB: '＿＿です。（五十八分）'
        },
        options: [
            { text: 'ごじゅうはっぷん', isCorrect: true, reason: '正確！五十八分讀「ごじゅうはっぷん」。' },
            { text: 'ごじゅうはちふん', isCorrect: false, reason: '陷阱！8發生促音+半濁音化。' },
            { text: 'ごじゅうはちぷん', isCorrect: false, reason: '需要促音。' },
            { text: 'いつじゅうはっぷん', isCorrect: false, reason: '使用音讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十八分」讀「ごじゅうはっぷん」，8促音+半濁音化。',
            trapExplanation: '8是促音+半濁音組(はっぷん)。',
            relatedRules: ['分鐘的音變', '58分的讀法']
        },
        sourceItem: { value: 58, kanji: '五十八分', reading: 'ごじゅうはっぷん' }
    },
    {
        id: 'minute_extra_22',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「六十分」讀作？',
        stem_zh: '「六十分」讀作？',
        options: [
            { text: 'ろくじゅっぷん', isCorrect: true, reason: '正確！六十分讀「ろくじゅっぷん」。' },
            { text: 'ろくじゅうふん', isCorrect: false, reason: '陷阱！10發生促音+半濁音化。' },
            { text: 'むじゅっぷん', isCorrect: false, reason: '使用音讀「ろく」。' },
            { text: 'ろくじっぷん', isCorrect: false, reason: '「六十」讀「ろくじゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六十分」讀「ろくじゅっぷん」，10促音+半濁音化。',
            trapExplanation: '10是促音+半濁音組(じゅっぷん)。',
            relatedRules: ['分鐘的音變', '60分的讀法']
        },
        sourceItem: { value: 60, kanji: '六十分', reading: 'ろくじゅっぷん' }
    },
    {
        id: 'minute_extra_23',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '運動時間是＿＿。',
        stem_zh: '運動時間是四十五分鐘。',
        options: [
            { text: 'よんじゅうごふん', isCorrect: true, reason: '正確！四十五分讀「よんじゅうごふん」。' },
            { text: 'よんじゅうごぷん', isCorrect: false, reason: '5無音變。' },
            { text: 'しじゅうごふん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'よんじゅういつふん', isCorrect: false, reason: '使用音讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十五分」讀「よんじゅうごふん」，5無音變。',
            relatedRules: ['分鐘の無音變組', '45分的讀法']
        },
        sourceItem: { value: 45, kanji: '四十五分', reading: 'よんじゅうごふん' }
    },
    {
        id: 'minute_extra_24',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '演講長度是多久？',
        stem_zh: '演講長度是多久？',
        dialogue: {
            speakerA: 'スピーチは何分ですか？',
            speakerB: '＿＿です。（二十三分）'
        },
        options: [
            { text: 'にじゅうさんぷん', isCorrect: true, reason: '正確！二十三分讀「にじゅうさんぷん」。' },
            { text: 'にじゅうさんふん', isCorrect: false, reason: '陷阱！3發生半濁音化。' },
            { text: 'ふたじゅうさんぷん', isCorrect: false, reason: '使用音讀「に」。' },
            { text: 'にじゅうみぷん', isCorrect: false, reason: '使用音讀「さん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十三分」讀「にじゅうさんぷん」，3半濁音化。',
            trapExplanation: '3是半濁音組(さんぷん)。',
            relatedRules: ['分鐘的音變', '23分的讀法']
        },
        sourceItem: { value: 23, kanji: '二十三分', reading: 'にじゅうさんぷん' }
    },
    {
        id: 'minute_extra_25',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十九分」讀作？',
        stem_zh: '「十九分」讀作？',
        options: [
            { text: 'じゅうきゅうふん', isCorrect: true, reason: '正確！十九分讀「じゅうきゅうふん」。' },
            { text: 'じゅうきゅうぷん', isCorrect: false, reason: '9無音變。' },
            { text: 'じゅうくふん', isCorrect: false, reason: '分鐘的9讀「きゅう」。' },
            { text: 'とおくふん', isCorrect: false, reason: '使用音讀「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十九分」讀「じゅうきゅうふん」，9無音變。',
            relatedRules: ['分鐘の無音變組', '19分的讀法']
        },
        sourceItem: { value: 19, kanji: '十九分', reading: 'じゅうきゅうふん' }
    },
    {
        id: 'minute_extra_26',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '熱身運動是＿＿。',
        stem_zh: '熱身運動是十六分鐘。',
        options: [
            { text: 'じゅうろっぷん', isCorrect: true, reason: '正確！十六分讀「じゅうろっぷん」。' },
            { text: 'じゅうろくふん', isCorrect: false, reason: '陷阱！6發生促音+半濁音化。' },
            { text: 'じゅうろくぷん', isCorrect: false, reason: '需要促音。' },
            { text: 'とおろっぷん', isCorrect: false, reason: '使用音讀「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十六分」讀「じゅうろっぷん」，6促音+半濁音化。',
            trapExplanation: '6是促音+半濁音組(ろっぷん)。',
            relatedRules: ['分鐘的音變', '16分的讀法']
        },
        sourceItem: { value: 16, kanji: '十六分', reading: 'じゅうろっぷん' }
    },
    {
        id: 'minute_extra_27',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '電車遲到多久？',
        stem_zh: '電車遲到多久？',
        dialogue: {
            speakerA: '電車は何分遅れましたか？',
            speakerB: '＿＿です。（二十四分）'
        },
        options: [
            { text: 'にじゅうよんぷん', isCorrect: true, reason: '正確！二十四分讀「にじゅうよんぷん」。' },
            { text: 'にじゅうよんふん', isCorrect: false, reason: '陷阱！4發生半濁音化。' },
            { text: 'にじゅうしふん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'ふたじゅうよんぷん', isCorrect: false, reason: '使用音讀「に」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十四分」讀「にじゅうよんぷん」，4半濁音化。',
            trapExplanation: '4是半濁音組(よんぷん)。',
            relatedRules: ['分鐘的音變', '24分的讀法']
        },
        sourceItem: { value: 24, kanji: '二十四分', reading: 'にじゅうよんぷん' }
    },
    {
        id: 'minute_extra_28',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「二十八分」讀作？',
        stem_zh: '「二十八分」讀作？',
        options: [
            { text: 'にじゅうはっぷん', isCorrect: true, reason: '正確！二十八分讀「にじゅうはっぷん」。' },
            { text: 'にじゅうはちふん', isCorrect: false, reason: '陷阱！8發生促音+半濁音化。' },
            { text: 'にじゅうはちぷん', isCorrect: false, reason: '需要促音。' },
            { text: 'ふたじゅうはっぷん', isCorrect: false, reason: '使用音讀「に」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十八分」讀「にじゅうはっぷん」，8促音+半濁音化。',
            trapExplanation: '8是促音+半濁音組(はっぷん)。',
            relatedRules: ['分鐘的音變', '28分的讀法']
        },
        sourceItem: { value: 28, kanji: '二十八分', reading: 'にじゅうはっぷん' }
    },
    {
        id: 'minute_extra_29',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '煮咖啡需要＿＿。',
        stem_zh: '煮咖啡需要二十七分鐘。',
        options: [
            { text: 'にじゅうななふん', isCorrect: true, reason: '正確！二十七分讀「にじゅうななふん」。' },
            { text: 'にじゅうしちふん', isCorrect: false, reason: '分鐘用「なな」。' },
            { text: 'にじゅうななぷん', isCorrect: false, reason: '7無音變。' },
            { text: 'ふたじゅうななふん', isCorrect: false, reason: '使用音讀「に」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十七分」讀「にじゅうななふん」，7無音變。',
            relatedRules: ['分鐘の無音變組', '27分的讀法']
        },
        sourceItem: { value: 27, kanji: '二十七分', reading: 'にじゅうななふん' }
    },
    {
        id: 'minute_extra_30',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '排隊買票要多久？',
        stem_zh: '排隊買票要多久？',
        dialogue: {
            speakerA: 'チケットを買うのに何分かかりますか？',
            speakerB: '＿＿です。（二十九分）'
        },
        options: [
            { text: 'にじゅうきゅうふん', isCorrect: true, reason: '正確！二十九分讀「にじゅうきゅうふん」。' },
            { text: 'にじゅうきゅうぷん', isCorrect: false, reason: '9無音變。' },
            { text: 'にじゅうくふん', isCorrect: false, reason: '分鐘的9讀「きゅう」。' },
            { text: 'ふたじゅうくふん', isCorrect: false, reason: '使用音讀「に」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十九分」讀「にじゅうきゅうふん」，9無音變。',
            relatedRules: ['分鐘の無音變組', '29分的讀法']
        },
        sourceItem: { value: 29, kanji: '二十九分', reading: 'にじゅうきゅうふん' }
    },
    {
        id: 'minute_extra_31',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「三十三分」讀作？',
        stem_zh: '「三十三分」讀作？',
        options: [
            { text: 'さんじゅうさんぷん', isCorrect: true, reason: '正確！三十三分讀「さんじゅうさんぷん」。' },
            { text: 'さんじゅうさんふん', isCorrect: false, reason: '陷阱！3發生半濁音化。' },
            { text: 'みじゅうさんぷん', isCorrect: false, reason: '使用音讀「さん」。' },
            { text: 'さんじゅうみぷん', isCorrect: false, reason: '使用音讀「さん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十三分」讀「さんじゅうさんぷん」，3半濁音化。',
            trapExplanation: '3是半濁音組(さんぷん)。',
            relatedRules: ['分鐘的音變', '33分的讀法']
        },
        sourceItem: { value: 33, kanji: '三十三分', reading: 'さんじゅうさんぷん' }
    },
    {
        id: 'minute_extra_32',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '影片長度是＿＿。',
        stem_zh: '影片長度是三十四分鐘。',
        options: [
            { text: 'さんじゅうよんぷん', isCorrect: true, reason: '正確！三十四分讀「さんじゅうよんぷん」。' },
            { text: 'さんじゅうよんふん', isCorrect: false, reason: '陷阱！4發生半濁音化。' },
            { text: 'さんじゅうしふん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'みじゅうよんぷん', isCorrect: false, reason: '使用音讀「さん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十四分」讀「さんじゅうよんぷん」，4半濁音化。',
            trapExplanation: '4是半濁音組(よんぷん)。',
            relatedRules: ['分鐘的音變', '34分的讀法']
        },
        sourceItem: { value: 34, kanji: '三十四分', reading: 'さんじゅうよんぷん' }
    },
    {
        id: 'minute_extra_33',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '化妝需要多久？',
        stem_zh: '化妝需要多久？',
        dialogue: {
            speakerA: 'メイクは何分かかりますか？',
            speakerB: '＿＿です。（三十五分）'
        },
        options: [
            { text: 'さんじゅうごふん', isCorrect: true, reason: '正確！三十五分讀「さんじゅうごふん」。' },
            { text: 'さんじゅうごぷん', isCorrect: false, reason: '5無音變。' },
            { text: 'みじゅうごふん', isCorrect: false, reason: '使用音讀「さん」。' },
            { text: 'さんじゅういつふん', isCorrect: false, reason: '使用音讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十五分」讀「さんじゅうごふん」，5無音變。',
            relatedRules: ['分鐘の無音變組', '35分的讀法']
        },
        sourceItem: { value: 35, kanji: '三十五分', reading: 'さんじゅうごふん' }
    },
    {
        id: 'minute_extra_34',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「三十八分」讀作？',
        stem_zh: '「三十八分」讀作？',
        options: [
            { text: 'さんじゅうはっぷん', isCorrect: true, reason: '正確！三十八分讀「さんじゅうはっぷん」。' },
            { text: 'さんじゅうはちふん', isCorrect: false, reason: '陷阱！8發生促音+半濁音化。' },
            { text: 'さんじゅうはちぷん', isCorrect: false, reason: '需要促音。' },
            { text: 'みじゅうはっぷん', isCorrect: false, reason: '使用音讀「さん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十八分」讀「さんじゅうはっぷん」，8促音+半濁音化。',
            trapExplanation: '8是促音+半濁音組(はっぷん)。',
            relatedRules: ['分鐘的音變', '38分的讀法']
        },
        sourceItem: { value: 38, kanji: '三十八分', reading: 'さんじゅうはっぷん' }
    },
    {
        id: 'minute_extra_35',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '午睡是＿＿。',
        stem_zh: '午睡是三十九分鐘。',
        options: [
            { text: 'さんじゅうきゅうふん', isCorrect: true, reason: '正確！三十九分讀「さんじゅうきゅうふん」。' },
            { text: 'さんじゅうきゅうぷん', isCorrect: false, reason: '9無音變。' },
            { text: 'さんじゅうくふん', isCorrect: false, reason: '分鐘的9讀「きゅう」。' },
            { text: 'みじゅうくふん', isCorrect: false, reason: '使用音讀「さん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十九分」讀「さんじゅうきゅうふん」，9無音變。',
            relatedRules: ['分鐘の無音變組', '39分的讀法']
        },
        sourceItem: { value: 39, kanji: '三十九分', reading: 'さんじゅうきゅうふん' }
    },

    // ===== 擴充題庫 (136-170) =====
    {
        id: 'minute_extra_36',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '閱讀報紙需要多久？',
        stem_zh: '閱讀報紙需要多久？',
        dialogue: {
            speakerA: '新聞を読むのに何分かかりますか？',
            speakerB: '＿＿です。（四十一分）'
        },
        options: [
            { text: 'よんじゅういっぷん', isCorrect: true, reason: '正確！四十一分讀「よんじゅういっぷん」。' },
            { text: 'よんじゅういちふん', isCorrect: false, reason: '陷阱！1發生促音+半濁音化。' },
            { text: 'しじゅういっぷん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'よんじゅうひとふん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十一分」讀「よんじゅういっぷん」，1促音+半濁音化。',
            trapExplanation: '1是促音+半濁音組(いっぷん)。',
            relatedRules: ['分鐘的音變', '41分的讀法']
        },
        sourceItem: { value: 41, kanji: '四十一分', reading: 'よんじゅういっぷん' }
    },
    {
        id: 'minute_extra_37',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「四十二分」讀作？',
        stem_zh: '「四十二分」讀作？',
        options: [
            { text: 'よんじゅうにふん', isCorrect: true, reason: '正確！四十二分讀「よんじゅうにふん」。' },
            { text: 'よんじゅうにぷん', isCorrect: false, reason: '2無音變。' },
            { text: 'しじゅうにふん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'よんじゅうふたふん', isCorrect: false, reason: '使用音讀「に」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十二分」讀「よんじゅうにふん」，2無音變。',
            relatedRules: ['分鐘の無音變組', '42分的讀法']
        },
        sourceItem: { value: 42, kanji: '四十二分', reading: 'よんじゅうにふん' }
    },
    {
        id: 'minute_extra_38',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '做菜需要＿＿。',
        stem_zh: '做菜需要四十六分鐘。',
        options: [
            { text: 'よんじゅうろっぷん', isCorrect: true, reason: '正確！四十六分讀「よんじゅうろっぷん」。' },
            { text: 'よんじゅうろくふん', isCorrect: false, reason: '陷阱！6發生促音+半濁音化。' },
            { text: 'よんじゅうろくぷん', isCorrect: false, reason: '需要促音。' },
            { text: 'しじゅうろっぷん', isCorrect: false, reason: '分鐘的4讀「よん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十六分」讀「よんじゅうろっぷん」，6促音+半濁音化。',
            trapExplanation: '6是促音+半濁音組(ろっぷん)。',
            relatedRules: ['分鐘的音變', '46分的讀法']
        },
        sourceItem: { value: 46, kanji: '四十六分', reading: 'よんじゅうろっぷん' }
    },
    {
        id: 'minute_extra_39',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '洗車需要多久？',
        stem_zh: '洗車需要多久？',
        dialogue: {
            speakerA: '洗車は何分かかりますか？',
            speakerB: '＿＿です。（四十七分）'
        },
        options: [
            { text: 'よんじゅうななふん', isCorrect: true, reason: '正確！四十七分讀「よんじゅうななふん」。' },
            { text: 'よんじゅうしちふん', isCorrect: false, reason: '分鐘用「なな」。' },
            { text: 'よんじゅうななぷん', isCorrect: false, reason: '7無音變。' },
            { text: 'しじゅうななふん', isCorrect: false, reason: '分鐘的4讀「よん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十七分」讀「よんじゅうななふん」，7無音變。',
            relatedRules: ['分鐘の無音變組', '47分的讀法']
        },
        sourceItem: { value: 47, kanji: '四十七分', reading: 'よんじゅうななふん' }
    },
    {
        id: 'minute_extra_40',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「五十一分」讀作？',
        stem_zh: '「五十一分」讀作？',
        options: [
            { text: 'ごじゅういっぷん', isCorrect: true, reason: '正確！五十一分讀「ごじゅういっぷん」。' },
            { text: 'ごじゅういちふん', isCorrect: false, reason: '陷阱！1發生促音+半濁音化。' },
            { text: 'いつじゅういっぷん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'ごじゅうひとふん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十一分」讀「ごじゅういっぷん」，1促音+半濁音化。',
            trapExplanation: '1是促音+半濁音組(いっぷん)。',
            relatedRules: ['分鐘的音變', '51分的讀法']
        },
        sourceItem: { value: 51, kanji: '五十一分', reading: 'ごじゅういっぷん' }
    },
    {
        id: 'minute_extra_41',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '跑步時間是＿＿。',
        stem_zh: '跑步時間是五十二分鐘。',
        options: [
            { text: 'ごじゅうにふん', isCorrect: true, reason: '正確！五十二分讀「ごじゅうにふん」。' },
            { text: 'ごじゅうにぷん', isCorrect: false, reason: '2無音變。' },
            { text: 'いつじゅうにふん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'ごじゅうふたふん', isCorrect: false, reason: '使用音讀「に」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十二分」讀「ごじゅうにふん」，2無音變。',
            relatedRules: ['分鐘の無音變組', '52分的讀法']
        },
        sourceItem: { value: 52, kanji: '五十二分', reading: 'ごじゅうにふん' }
    },
    {
        id: 'minute_extra_42',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '開車到機場要多久？',
        stem_zh: '開車到機場要多久？',
        dialogue: {
            speakerA: '空港まで車で何分かかりますか？',
            speakerB: '＿＿です。（五十四分）'
        },
        options: [
            { text: 'ごじゅうよんぷん', isCorrect: true, reason: '正確！五十四分讀「ごじゅうよんぷん」。' },
            { text: 'ごじゅうよんふん', isCorrect: false, reason: '陷阱！4發生半濁音化。' },
            { text: 'ごじゅうしふん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'いつじゅうよんぷん', isCorrect: false, reason: '使用音讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十四分」讀「ごじゅうよんぷん」，4半濁音化。',
            trapExplanation: '4是半濁音組(よんぷん)。',
            relatedRules: ['分鐘的音變', '54分的讀法']
        },
        sourceItem: { value: 54, kanji: '五十四分', reading: 'ごじゅうよんぷん' }
    },
    {
        id: 'minute_extra_43',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「五十七分」讀作？',
        stem_zh: '「五十七分」讀作？',
        options: [
            { text: 'ごじゅうななふん', isCorrect: true, reason: '正確！五十七分讀「ごじゅうななふん」。' },
            { text: 'ごじゅうしちふん', isCorrect: false, reason: '分鐘用「なな」。' },
            { text: 'ごじゅうななぷん', isCorrect: false, reason: '7無音變。' },
            { text: 'いつじゅうななふん', isCorrect: false, reason: '使用音讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十七分」讀「ごじゅうななふん」，7無音變。',
            relatedRules: ['分鐘の無音變組', '57分的讀法']
        },
        sourceItem: { value: 57, kanji: '五十七分', reading: 'ごじゅうななふん' }
    },
    {
        id: 'minute_extra_44',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '睡前閱讀是＿＿。',
        stem_zh: '睡前閱讀是五十九分鐘。',
        options: [
            { text: 'ごじゅうきゅうふん', isCorrect: true, reason: '正確！五十九分讀「ごじゅうきゅうふん」。' },
            { text: 'ごじゅうきゅうぷん', isCorrect: false, reason: '9無音變。' },
            { text: 'ごじゅうくふん', isCorrect: false, reason: '分鐘的9讀「きゅう」。' },
            { text: 'いつじゅうくふん', isCorrect: false, reason: '使用音讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十九分」讀「ごじゅうきゅうふん」，9無音變。',
            relatedRules: ['分鐘の無音變組', '59分的讀法']
        },
        sourceItem: { value: 59, kanji: '五十九分', reading: 'ごじゅうきゅうふん' }
    },
    {
        id: 'minute_extra_45',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '上課時間是多久？',
        stem_zh: '上課時間是多久？',
        dialogue: {
            speakerA: '授業は何分ですか？',
            speakerB: '＿＿です。（六十一分）'
        },
        options: [
            { text: 'ろくじゅういっぷん', isCorrect: true, reason: '正確！六十一分讀「ろくじゅういっぷん」。' },
            { text: 'ろくじゅういちふん', isCorrect: false, reason: '陷阱！1發生促音+半濁音化。' },
            { text: 'むじゅういっぷん', isCorrect: false, reason: '使用音讀「ろく」。' },
            { text: 'ろくじゅうひとふん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六十一分」讀「ろくじゅういっぷん」，1促音+半濁音化。',
            trapExplanation: '1是促音+半濁音組(いっぷん)。',
            relatedRules: ['分鐘的音變', '61分的讀法']
        },
        sourceItem: { value: 61, kanji: '六十一分', reading: 'ろくじゅういっぷん' }
    },
    {
        id: 'minute_extra_46',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「六十三分」讀作？',
        stem_zh: '「六十三分」讀作？',
        options: [
            { text: 'ろくじゅうさんぷん', isCorrect: true, reason: '正確！六十三分讀「ろくじゅうさんぷん」。' },
            { text: 'ろくじゅうさんふん', isCorrect: false, reason: '陷阱！3發生半濁音化。' },
            { text: 'むじゅうさんぷん', isCorrect: false, reason: '使用音讀「ろく」。' },
            { text: 'ろくじゅうみぷん', isCorrect: false, reason: '使用音讀「さん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六十三分」讀「ろくじゅうさんぷん」，3半濁音化。',
            trapExplanation: '3是半濁音組(さんぷん)。',
            relatedRules: ['分鐘的音變', '63分的讀法']
        },
        sourceItem: { value: 63, kanji: '六十三分', reading: 'ろくじゅうさんぷん' }
    },
    {
        id: 'minute_extra_47',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '開會延長了＿＿。',
        stem_zh: '開會延長了六十五分鐘。',
        options: [
            { text: 'ろくじゅうごふん', isCorrect: true, reason: '正確！六十五分讀「ろくじゅうごふん」。' },
            { text: 'ろくじゅうごぷん', isCorrect: false, reason: '5無音變。' },
            { text: 'むじゅうごふん', isCorrect: false, reason: '使用音讀「ろく」。' },
            { text: 'ろくじゅういつふん', isCorrect: false, reason: '使用音讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六十五分」讀「ろくじゅうごふん」，5無音變。',
            relatedRules: ['分鐘の無音變組', '65分的讀法']
        },
        sourceItem: { value: 65, kanji: '六十五分', reading: 'ろくじゅうごふん' }
    },
    {
        id: 'minute_extra_48',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '健身房待了多久？',
        stem_zh: '健身房待了多久？',
        dialogue: {
            speakerA: 'ジムには何分いましたか？',
            speakerB: '＿＿です。（六十六分）'
        },
        options: [
            { text: 'ろくじゅうろっぷん', isCorrect: true, reason: '正確！六十六分讀「ろくじゅうろっぷん」。' },
            { text: 'ろくじゅうろくふん', isCorrect: false, reason: '陷阱！6發生促音+半濁音化。' },
            { text: 'ろくじゅうろくぷん', isCorrect: false, reason: '需要促音。' },
            { text: 'むじゅうろっぷん', isCorrect: false, reason: '使用音讀「ろく」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六十六分」讀「ろくじゅうろっぷん」，6促音+半濁音化。',
            trapExplanation: '6是促音+半濁音組(ろっぷん)。',
            relatedRules: ['分鐘的音變', '66分的讀法']
        },
        sourceItem: { value: 66, kanji: '六十六分', reading: 'ろくじゅうろっぷん' }
    },
    {
        id: 'minute_extra_49',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「六十八分」讀作？',
        stem_zh: '「六十八分」讀作？',
        options: [
            { text: 'ろくじゅうはっぷん', isCorrect: true, reason: '正確！六十八分讀「ろくじゅうはっぷん」。' },
            { text: 'ろくじゅうはちふん', isCorrect: false, reason: '陷阱！8發生促音+半濁音化。' },
            { text: 'ろくじゅうはちぷん', isCorrect: false, reason: '需要促音。' },
            { text: 'むじゅうはっぷん', isCorrect: false, reason: '使用音讀「ろく」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六十八分」讀「ろくじゅうはっぷん」，8促音+半濁音化。',
            trapExplanation: '8是促音+半濁音組(はっぷん)。',
            relatedRules: ['分鐘的音變', '68分的讀法']
        },
        sourceItem: { value: 68, kanji: '六十八分', reading: 'ろくじゅうはっぷん' }
    },
    {
        id: 'minute_extra_50',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '電影開始前要等＿＿。',
        stem_zh: '電影開始前要等六十九分鐘。',
        options: [
            { text: 'ろくじゅうきゅうふん', isCorrect: true, reason: '正確！六十九分讀「ろくじゅうきゅうふん」。' },
            { text: 'ろくじゅうきゅうぷん', isCorrect: false, reason: '9無音變。' },
            { text: 'ろくじゅうくふん', isCorrect: false, reason: '分鐘的9讀「きゅう」。' },
            { text: 'むじゅうくふん', isCorrect: false, reason: '使用音讀「ろく」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六十九分」讀「ろくじゅうきゅうふん」，9無音變。',
            relatedRules: ['分鐘の無音變組', '69分的讀法']
        },
        sourceItem: { value: 69, kanji: '六十九分', reading: 'ろくじゅうきゅうふん' }
    },
    {
        id: 'minute_extra_51',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '游泳課是多久？',
        stem_zh: '游泳課是多久？',
        dialogue: {
            speakerA: '水泳のレッスンは何分ですか？',
            speakerB: '＿＿です。（六十七分）'
        },
        options: [
            { text: 'ろくじゅうななふん', isCorrect: true, reason: '正確！六十七分讀「ろくじゅうななふん」。' },
            { text: 'ろくじゅうしちふん', isCorrect: false, reason: '分鐘用「なな」。' },
            { text: 'ろくじゅうななぷん', isCorrect: false, reason: '7無音變。' },
            { text: 'むじゅうななふん', isCorrect: false, reason: '使用音讀「ろく」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六十七分」讀「ろくじゅうななふん」，7無音變。',
            relatedRules: ['分鐘の無音變組', '67分的讀法']
        },
        sourceItem: { value: 67, kanji: '六十七分', reading: 'ろくじゅうななふん' }
    },
    {
        id: 'minute_extra_52',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「六十二分」讀作？',
        stem_zh: '「六十二分」讀作？',
        options: [
            { text: 'ろくじゅうにふん', isCorrect: true, reason: '正確！六十二分讀「ろくじゅうにふん」。' },
            { text: 'ろくじゅうにぷん', isCorrect: false, reason: '2無音變。' },
            { text: 'むじゅうにふん', isCorrect: false, reason: '使用音讀「ろく」。' },
            { text: 'ろくじゅうふたふん', isCorrect: false, reason: '使用音讀「に」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六十二分」讀「ろくじゅうにふん」，2無音變。',
            relatedRules: ['分鐘の無音變組', '62分的讀法']
        },
        sourceItem: { value: 62, kanji: '六十二分', reading: 'ろくじゅうにふん' }
    },
    {
        id: 'minute_extra_53',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '總復習：分鐘的音變有幾種模式？',
        stem_zh: '總復習：分鐘的音變有幾種模式？',
        options: [
            { text: '三種：促音+半濁音、半濁音、無音變', isCorrect: true, reason: '正確！分鐘音變分三種模式。' },
            { text: '只有一種', isCorrect: false, reason: '有多種模式。' },
            { text: '兩種', isCorrect: false, reason: '有三種模式。' },
            { text: '沒有規則', isCorrect: false, reason: '有明確規則。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '分鐘音變分三種：1/6/8/10促音+半濁音、3/4半濁音、2/5/7/9無音變。',
            relatedRules: ['分鐘的音變總整理', '三種模式']
        },
        sourceItem: { value: 'summary', kanji: '音變規則', reading: '三種模式' }
    },
    {
        id: 'minute_extra_54',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '總復習：哪些數字的「分」讀「ふん」？',
        stem_zh: '總復習：哪些數字的「分」讀「ふん」？',
        dialogue: {
            speakerA: '「ふん」と読むのはどの数字ですか？',
            speakerB: '＿＿です。'
        },
        options: [
            { text: '2、5、7、9', isCorrect: true, reason: '正確！這四個無音變。' },
            { text: '1、3、6、8', isCorrect: false, reason: '這些有音變。' },
            { text: '4、10', isCorrect: false, reason: '這些有音變。' },
            { text: '全部', isCorrect: false, reason: '只有部分無音變。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '2、5、7、9的「分」保持「ふん」，無音變。',
            relatedRules: ['分鐘の無音變組', '2/5/7/9']
        },
        sourceItem: { value: 'summary_fun', kanji: '無音變組', reading: '2/5/7/9' }
    },
    {
        id: 'minute_extra_55',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '總復習：哪些數字促音+半濁音化？',
        stem_zh: '總復習：哪些數字促音+半濁音化？',
        options: [
            { text: '1、6、8、10', isCorrect: true, reason: '正確！這四個促音+半濁音化。' },
            { text: '3、4', isCorrect: false, reason: '這兩個只有半濁音化。' },
            { text: '2、5、7、9', isCorrect: false, reason: '這些無音變。' },
            { text: '全部', isCorrect: false, reason: '只有部分促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '1、6、8、10的「分」促音+半濁音化：いっぷん、ろっぷん、はっぷん、じゅっぷん。',
            relatedRules: ['分鐘の促音組', '1/6/8/10']
        },
        sourceItem: { value: 'summary_ppun', kanji: '促音組', reading: '1/6/8/10' }
    },
    {
        id: 'minute_extra_56',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '總復習：哪些數字只有半濁音化？',
        stem_zh: '總復習：哪些數字只有半濁音化？',
        options: [
            { text: '3、4', isCorrect: true, reason: '正確！這兩個只半濁音化。' },
            { text: '1、6、8、10', isCorrect: false, reason: '這些有促音。' },
            { text: '2、5、7、9', isCorrect: false, reason: '這些無音變。' },
            { text: '全部', isCorrect: false, reason: '只有部分。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '3、4的「分」只半濁音化：さんぷん、よんぷん（無促音）。',
            relatedRules: ['分鐘の半濁音組', '3/4']
        },
        sourceItem: { value: 'summary_pun', kanji: '半濁音組', reading: '3/4' }
    },
    {
        id: 'minute_extra_57',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '廣告時間是多久？',
        stem_zh: '廣告時間是多久？',
        dialogue: {
            speakerA: 'CMは何分ですか？',
            speakerB: '＿＿です。（十一分）'
        },
        options: [
            { text: 'じゅういっぷん', isCorrect: true, reason: '正確！十一分讀「じゅういっぷん」。' },
            { text: 'じゅういちふん', isCorrect: false, reason: '陷阱！1發生促音+半濁音化。' },
            { text: 'とおいっぷん', isCorrect: false, reason: '使用音讀「じゅう」。' },
            { text: 'じゅうひとふん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十一分」讀「じゅういっぷん」，1促音+半濁音化。',
            trapExplanation: '1是促音+半濁音組(いっぷん)。',
            relatedRules: ['分鐘的音變', '11分的讀法']
        },
        sourceItem: { value: 11, kanji: '十一分', reading: 'じゅういっぷん' }
    },
    {
        id: 'minute_extra_58',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十三分」讀作？',
        stem_zh: '「十三分」讀作？',
        options: [
            { text: 'じゅうさんぷん', isCorrect: true, reason: '正確！十三分讀「じゅうさんぷん」。' },
            { text: 'じゅうさんふん', isCorrect: false, reason: '陷阱！3發生半濁音化。' },
            { text: 'とおさんぷん', isCorrect: false, reason: '使用音讀「じゅう」。' },
            { text: 'じゅうみぷん', isCorrect: false, reason: '使用音讀「さん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十三分」讀「じゅうさんぷん」，3半濁音化。',
            trapExplanation: '3是半濁音組(さんぷん)。',
            relatedRules: ['分鐘的音變', '13分的讀法']
        },
        sourceItem: { value: 13, kanji: '十三分', reading: 'じゅうさんぷん' }
    },
    {
        id: 'minute_extra_59',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '等紅燈需要＿＿。',
        stem_zh: '等紅燈需要四分鐘。',
        options: [
            { text: 'よんぷん', isCorrect: true, reason: '正確！四分讀「よんぷん」。' },
            { text: 'よんふん', isCorrect: false, reason: '陷阱！4發生半濁音化。' },
            { text: 'しふん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'よっか', isCorrect: false, reason: '「よっか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四分」讀「よんぷん」，4半濁音化。',
            trapExplanation: '4是半濁音組(よんぷん)。',
            relatedRules: ['分鐘的音變', '4分的讀法']
        },
        sourceItem: { value: 4, kanji: '四分', reading: 'よんぷん' }
    },
    {
        id: 'minute_extra_60',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '等電梯要多久？',
        stem_zh: '等電梯要多久？',
        dialogue: {
            speakerA: 'エレベーターを待つのに何分かかりますか？',
            speakerB: '＿＿です。（二分）'
        },
        options: [
            { text: 'にふん', isCorrect: true, reason: '正確！二分讀「にふん」。' },
            { text: 'にぷん', isCorrect: false, reason: '2無音變。' },
            { text: 'ふたふん', isCorrect: false, reason: '使用音讀「に」。' },
            { text: 'ふつか', isCorrect: false, reason: '「ふつか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二分」讀「にふん」，2無音變。',
            relatedRules: ['分鐘の無音變組', '2分的讀法']
        },
        sourceItem: { value: 2, kanji: '二分', reading: 'にふん' }
    },
    {
        id: 'minute_extra_61',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「五分」讀作？',
        stem_zh: '「五分」讀作？',
        options: [
            { text: 'ごふん', isCorrect: true, reason: '正確！五分讀「ごふん」。' },
            { text: 'ごぷん', isCorrect: false, reason: '5無音變。' },
            { text: 'いつふん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'いつか', isCorrect: false, reason: '「いつか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五分」讀「ごふん」，5無音變。',
            relatedRules: ['分鐘の無音變組', '5分的讀法']
        },
        sourceItem: { value: 5, kanji: '五分', reading: 'ごふん' }
    },
    {
        id: 'minute_extra_62',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '微波爐加熱需要＿＿。',
        stem_zh: '微波爐加熱需要九分鐘。',
        options: [
            { text: 'きゅうふん', isCorrect: true, reason: '正確！九分讀「きゅうふん」。' },
            { text: 'きゅうぷん', isCorrect: false, reason: '9無音變。' },
            { text: 'くふん', isCorrect: false, reason: '分鐘的9讀「きゅう」。' },
            { text: 'ここのか', isCorrect: false, reason: '「ここのか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九分」讀「きゅうふん」，9無音變。',
            relatedRules: ['分鐘の無音變組', '9分的讀法']
        },
        sourceItem: { value: 9, kanji: '九分', reading: 'きゅうふん' }
    },
    {
        id: 'minute_extra_63',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '刷牙需要多久？',
        stem_zh: '刷牙需要多久？',
        dialogue: {
            speakerA: '歯磨きは何分かかりますか？',
            speakerB: '＿＿です。（三分）'
        },
        options: [
            { text: 'さんぷん', isCorrect: true, reason: '正確！三分讀「さんぷん」。' },
            { text: 'さんふん', isCorrect: false, reason: '陷阱！3發生半濁音化。' },
            { text: 'みふん', isCorrect: false, reason: '使用音讀「さん」。' },
            { text: 'みっか', isCorrect: false, reason: '「みっか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三分」讀「さんぷん」，3半濁音化。',
            trapExplanation: '3是半濁音組(さんぷん)。',
            relatedRules: ['分鐘的音變', '3分的讀法']
        },
        sourceItem: { value: 3, kanji: '三分', reading: 'さんぷん' }
    },
    {
        id: 'minute_extra_64',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「六分」讀作？',
        stem_zh: '「六分」讀作？',
        options: [
            { text: 'ろっぷん', isCorrect: true, reason: '正確！六分讀「ろっぷん」。' },
            { text: 'ろくふん', isCorrect: false, reason: '陷阱！6發生促音+半濁音化。' },
            { text: 'ろくぷん', isCorrect: false, reason: '需要促音。' },
            { text: 'むいか', isCorrect: false, reason: '「むいか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六分」讀「ろっぷん」，6促音+半濁音化。',
            trapExplanation: '6是促音+半濁音組(ろっぷん)。',
            relatedRules: ['分鐘的音變', '6分的讀法']
        },
        sourceItem: { value: 6, kanji: '六分', reading: 'ろっぷん' }
    },
    {
        id: 'minute_extra_65',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '泡茶需要＿＿。',
        stem_zh: '泡茶需要八分鐘。',
        options: [
            { text: 'はっぷん', isCorrect: true, reason: '正確！八分讀「はっぷん」。' },
            { text: 'はちふん', isCorrect: false, reason: '陷阱！8發生促音+半濁音化。' },
            { text: 'はちぷん', isCorrect: false, reason: '需要促音。' },
            { text: 'ようか', isCorrect: false, reason: '「ようか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八分」讀「はっぷん」，8促音+半濁音化。',
            trapExplanation: '8是促音+半濁音組(はっぷん)。',
            relatedRules: ['分鐘的音變', '8分的讀法']
        },
        sourceItem: { value: 8, kanji: '八分', reading: 'はっぷん' }
    },
    {
        id: 'minute_extra_66',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '下載更新需要多久？',
        stem_zh: '下載更新需要多久？',
        dialogue: {
            speakerA: 'アップデートのダウンロードは何分かかりますか？',
            speakerB: '＿＿です。（十分）'
        },
        options: [
            { text: 'じゅっぷん', isCorrect: true, reason: '正確！十分讀「じゅっぷん」。' },
            { text: 'じゅうふん', isCorrect: false, reason: '陷阱！10發生促音+半濁音化。' },
            { text: 'とおふん', isCorrect: false, reason: '使用音讀。' },
            { text: 'とおか', isCorrect: false, reason: '「とおか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十分」讀「じゅっぷん」，10促音+半濁音化。',
            trapExplanation: '10是促音+半濁音組(じゅっぷん)。',
            relatedRules: ['分鐘的音變', '10分的讀法']
        },
        sourceItem: { value: 10, kanji: '十分', reading: 'じゅっぷん' }
    },
    {
        id: 'minute_extra_67',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「一分」讀作？',
        stem_zh: '「一分」讀作？',
        options: [
            { text: 'いっぷん', isCorrect: true, reason: '正確！一分讀「いっぷん」。' },
            { text: 'いちふん', isCorrect: false, reason: '陷阱！1發生促音+半濁音化。' },
            { text: 'いちぷん', isCorrect: false, reason: '需要促音。' },
            { text: 'ついたち', isCorrect: false, reason: '「ついたち」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一分」讀「いっぷん」，1促音+半濁音化。',
            trapExplanation: '1是促音+半濁音組(いっぷん)。',
            relatedRules: ['分鐘的音變', '1分的讀法']
        },
        sourceItem: { value: 1, kanji: '一分', reading: 'いっぷん' }
    },
    {
        id: 'minute_extra_68',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '等水煮沸需要＿＿。',
        stem_zh: '等水煮沸需要七分鐘。',
        options: [
            { text: 'ななふん', isCorrect: true, reason: '正確！七分讀「ななふん」。' },
            { text: 'しちふん', isCorrect: false, reason: '分鐘用「なな」。' },
            { text: 'ななぷん', isCorrect: false, reason: '7無音變。' },
            { text: 'なのか', isCorrect: false, reason: '「なのか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七分」讀「ななふん」，7無音變。',
            relatedRules: ['分鐘の無音變組', '7分的讀法']
        },
        sourceItem: { value: 7, kanji: '七分', reading: 'ななふん' }
    },
    {
        id: 'minute_extra_69',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '抵達目的地前剩多久？',
        stem_zh: '抵達目的地前剩多久？',
        dialogue: {
            speakerA: '目的地まであと何分ですか？',
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
            correctRule: '「四十五分」讀「よんじゅうごふん」，5無音變。',
            relatedRules: ['分鐘の無音變組', '45分的讀法']
        },
        sourceItem: { value: 45, kanji: '四十五分', reading: 'よんじゅうごふん' }
    },
    {
        id: 'minute_extra_70',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「何分」讀作？',
        stem_zh: '「何分」讀作？',
        options: [
            { text: 'なんぷん', isCorrect: true, reason: '正確！何分讀「なんぷん」。' },
            { text: 'なにふん', isCorrect: false, reason: '疑問詞「何」讀「なん」。' },
            { text: 'なんふん', isCorrect: false, reason: '「分」變半濁音。' },
            { text: 'なにぷん', isCorrect: false, reason: '「何」讀「なん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何分」讀「なんぷん」，「何」讀「なん」，「分」半濁音化。',
            relatedRules: ['疑問詞', '何分的讀法']
        },
        sourceItem: { value: 'question', kanji: '何分', reading: 'なんぷん' }
    },

    // ===== 擴充題庫 (171-200) =====
    {
        id: 'minute_extra_71',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '早會進行了＿＿。',
        stem_zh: '早會進行了四十四分鐘。',
        options: [
            { text: 'よんじゅうよんぷん', isCorrect: true, reason: '正確！四十四分讀「よんじゅうよんぷん」。' },
            { text: 'よんじゅうよんふん', isCorrect: false, reason: '陷阱！4發生半濁音化。' },
            { text: 'しじゅうしふん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'よんじゅうしぷん', isCorrect: false, reason: '個位4也讀「よん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十四分」讀「よんじゅうよんぷん」，4半濁音化。',
            trapExplanation: '4是半濁音組(よんぷん)。',
            relatedRules: ['分鐘的音變', '44分的讀法']
        },
        sourceItem: { value: 44, kanji: '四十四分', reading: 'よんじゅうよんぷん' }
    },
    {
        id: 'minute_extra_72',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '午休還剩多久？',
        stem_zh: '午休還剩多久？',
        dialogue: {
            speakerA: '昼休みはあと何分ですか？',
            speakerB: '＿＿です。（三十三分）'
        },
        options: [
            { text: 'さんじゅうさんぷん', isCorrect: true, reason: '正確！三十三分讀「さんじゅうさんぷん」。' },
            { text: 'さんじゅうさんふん', isCorrect: false, reason: '陷阱！3發生半濁音化。' },
            { text: 'みじゅうさんぷん', isCorrect: false, reason: '使用音讀「さん」。' },
            { text: 'さんじゅうみぷん', isCorrect: false, reason: '使用音讀「さん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十三分」讀「さんじゅうさんぷん」，3半濁音化。',
            trapExplanation: '3是半濁音組(さんぷん)。',
            relatedRules: ['分鐘的音變', '33分的讀法']
        },
        sourceItem: { value: 33, kanji: '三十三分', reading: 'さんじゅうさんぷん' }
    },
    {
        id: 'minute_extra_73',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「一百分」讀作？',
        stem_zh: '「一百分」讀作？',
        options: [
            { text: 'ひゃっぷん', isCorrect: true, reason: '正確！一百分讀「ひゃっぷん」。' },
            { text: 'ひゃくふん', isCorrect: false, reason: '陷阱！「百」後促音+半濁音化。' },
            { text: 'いっぴゃくふん', isCorrect: false, reason: '「百」讀「ひゃく」。' },
            { text: 'ひゃくぷん', isCorrect: false, reason: '需要促音。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「百分」讀「ひゃっぷん」，促音+半濁音化。',
            trapExplanation: '「百」後的「分」促音化。',
            relatedRules: ['分鐘的音變', '100分的讀法']
        },
        sourceItem: { value: 100, kanji: '百分', reading: 'ひゃっぷん' }
    },
    {
        id: 'minute_extra_74',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '午後茶時間是＿＿。',
        stem_zh: '午後茶時間是三十七分鐘。',
        options: [
            { text: 'さんじゅうななふん', isCorrect: true, reason: '正確！三十七分讀「さんじゅうななふん」。' },
            { text: 'さんじゅうしちふん', isCorrect: false, reason: '分鐘用「なな」。' },
            { text: 'さんじゅうななぷん', isCorrect: false, reason: '7無音變。' },
            { text: 'みじゅうななふん', isCorrect: false, reason: '使用音讀「さん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十七分」讀「さんじゅうななふん」，7無音變。',
            relatedRules: ['分鐘の無音變組', '37分的讀法']
        },
        sourceItem: { value: 37, kanji: '三十七分', reading: 'さんじゅうななふん' }
    },
    {
        id: 'minute_extra_75',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '洗衣服需要多久？',
        stem_zh: '洗衣服需要多久？',
        dialogue: {
            speakerA: '洗濯は何分かかりますか？',
            speakerB: '＿＿です。（五十二分）'
        },
        options: [
            { text: 'ごじゅうにふん', isCorrect: true, reason: '正確！五十二分讀「ごじゅうにふん」。' },
            { text: 'ごじゅうにぷん', isCorrect: false, reason: '2無音變。' },
            { text: 'いつじゅうにふん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'ごじゅうふたふん', isCorrect: false, reason: '使用音讀「に」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十二分」讀「ごじゅうにふん」，2無音變。',
            relatedRules: ['分鐘の無音變組', '52分的讀法']
        },
        sourceItem: { value: 52, kanji: '五十二分', reading: 'ごじゅうにふん' }
    },
    {
        id: 'minute_extra_76',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「五十六分」讀作？',
        stem_zh: '「五十六分」讀作？',
        options: [
            { text: 'ごじゅうろっぷん', isCorrect: true, reason: '正確！五十六分讀「ごじゅうろっぷん」。' },
            { text: 'ごじゅうろくふん', isCorrect: false, reason: '陷阱！6發生促音+半濁音化。' },
            { text: 'ごじゅうろくぷん', isCorrect: false, reason: '需要促音。' },
            { text: 'いつじゅうろっぷん', isCorrect: false, reason: '使用音讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十六分」讀「ごじゅうろっぷん」，6促音+半濁音化。',
            trapExplanation: '6是促音+半濁音組(ろっぷん)。',
            relatedRules: ['分鐘的音變', '56分的讀法']
        },
        sourceItem: { value: 56, kanji: '五十六分', reading: 'ごじゅうろっぷん' }
    },
    {
        id: 'minute_extra_77',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '午餐後散步＿＿。',
        stem_zh: '午餐後散步二十九分鐘。',
        options: [
            { text: 'にじゅうきゅうふん', isCorrect: true, reason: '正確！二十九分讀「にじゅうきゅうふん」。' },
            { text: 'にじゅうきゅうぷん', isCorrect: false, reason: '9無音變。' },
            { text: 'にじゅうくふん', isCorrect: false, reason: '分鐘的9讀「きゅう」。' },
            { text: 'ふたじゅうきゅうふん', isCorrect: false, reason: '使用音讀「に」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十九分」讀「にじゅうきゅうふん」，9無音變。',
            relatedRules: ['分鐘の無音變組', '29分的讀法']
        },
        sourceItem: { value: 29, kanji: '二十九分', reading: 'にじゅうきゅうふん' }
    },
    {
        id: 'minute_extra_78',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '搭地鐵需要多久？',
        stem_zh: '搭地鐵需要多久？',
        dialogue: {
            speakerA: '地下鉄で何分かかりますか？',
            speakerB: '＿＿です。（三十一分）'
        },
        options: [
            { text: 'さんじゅういっぷん', isCorrect: true, reason: '正確！三十一分讀「さんじゅういっぷん」。' },
            { text: 'さんじゅういちふん', isCorrect: false, reason: '陷阱！1發生促音+半濁音化。' },
            { text: 'みじゅういっぷん', isCorrect: false, reason: '使用音讀「さん」。' },
            { text: 'さんじゅうひとふん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十一分」讀「さんじゅういっぷん」，1促音+半濁音化。',
            trapExplanation: '1是促音+半濁音組(いっぷん)。',
            relatedRules: ['分鐘的音變', '31分的讀法']
        },
        sourceItem: { value: 31, kanji: '三十一分', reading: 'さんじゅういっぷん' }
    },
    {
        id: 'minute_extra_79',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「四十八分」讀作？',
        stem_zh: '「四十八分」讀作？',
        options: [
            { text: 'よんじゅうはっぷん', isCorrect: true, reason: '正確！四十八分讀「よんじゅうはっぷん」。' },
            { text: 'よんじゅうはちふん', isCorrect: false, reason: '陷阱！8發生促音+半濁音化。' },
            { text: 'よんじゅうはちぷん', isCorrect: false, reason: '需要促音。' },
            { text: 'しじゅうはっぷん', isCorrect: false, reason: '分鐘的4讀「よん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十八分」讀「よんじゅうはっぷん」，8促音+半濁音化。',
            trapExplanation: '8是促音+半濁音組(はっぷん)。',
            relatedRules: ['分鐘的音變', '48分的讀法']
        },
        sourceItem: { value: 48, kanji: '四十八分', reading: 'よんじゅうはっぷん' }
    },
    {
        id: 'minute_extra_80',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '烹飪節目是＿＿。',
        stem_zh: '烹飪節目是五十五分鐘。',
        options: [
            { text: 'ごじゅうごふん', isCorrect: true, reason: '正確！五十五分讀「ごじゅうごふん」。' },
            { text: 'ごじゅうごぷん', isCorrect: false, reason: '5無音變。' },
            { text: 'いつじゅうごふん', isCorrect: false, reason: '使用音讀「ご」。' },
            { text: 'ごじゅういつふん', isCorrect: false, reason: '使用音讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十五分」讀「ごじゅうごふん」，5無音變。',
            relatedRules: ['分鐘の無音變組', '55分的讀法']
        },
        sourceItem: { value: 55, kanji: '五十五分', reading: 'ごじゅうごふん' }
    },
    {
        id: 'minute_extra_81',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '練習鋼琴多久？',
        stem_zh: '練習鋼琴多久？',
        dialogue: {
            speakerA: 'ピアノの練習は何分ですか？',
            speakerB: '＿＿です。（六十四分）'
        },
        options: [
            { text: 'ろくじゅうよんぷん', isCorrect: true, reason: '正確！六十四分讀「ろくじゅうよんぷん」。' },
            { text: 'ろくじゅうよんふん', isCorrect: false, reason: '陷阱！4發生半濁音化。' },
            { text: 'ろくじゅうしふん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'むじゅうよんぷん', isCorrect: false, reason: '使用音讀「ろく」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六十四分」讀「ろくじゅうよんぷん」，4半濁音化。',
            trapExplanation: '4是半濁音組(よんぷん)。',
            relatedRules: ['分鐘的音變', '64分的讀法']
        },
        sourceItem: { value: 64, kanji: '六十四分', reading: 'ろくじゅうよんぷん' }
    },
    {
        id: 'minute_extra_82',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二十五分」讀作？',
        stem_zh: '「二十五分」讀作？',
        options: [
            { text: 'にじゅうごふん', isCorrect: true, reason: '正確！二十五分讀「にじゅうごふん」。' },
            { text: 'にじゅうごぷん', isCorrect: false, reason: '5無音變。' },
            { text: 'ふたじゅうごふん', isCorrect: false, reason: '使用音讀「に」。' },
            { text: 'にじゅういつふん', isCorrect: false, reason: '使用音讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十五分」讀「にじゅうごふん」，5無音變。',
            relatedRules: ['分鐘の無音變組', '25分的讀法']
        },
        sourceItem: { value: 25, kanji: '二十五分', reading: 'にじゅうごふん' }
    },
    {
        id: 'minute_extra_83',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: true,
        stem: '烤肉需要＿＿。',
        stem_zh: '烤肉需要十六分鐘。',
        options: [
            { text: 'じゅうろっぷん', isCorrect: true, reason: '正確！十六分讀「じゅうろっぷん」。' },
            { text: 'じゅうろくふん', isCorrect: false, reason: '陷阱！6發生促音+半濁音化。' },
            { text: 'じゅうろくぷん', isCorrect: false, reason: '需要促音。' },
            { text: 'とおろっぷん', isCorrect: false, reason: '使用音讀「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十六分」讀「じゅうろっぷん」，6促音+半濁音化。',
            trapExplanation: '6是促音+半濁音組(ろっぷん)。',
            relatedRules: ['分鐘的音變', '16分的讀法']
        },
        sourceItem: { value: 16, kanji: '十六分', reading: 'じゅうろっぷん' }
    },
    {
        id: 'minute_extra_84',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '做瑜伽多久？',
        stem_zh: '做瑜伽多久？',
        dialogue: {
            speakerA: 'ヨガは何分やりますか？',
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
            correctRule: '「四十五分」讀「よんじゅうごふん」，5無音變。',
            relatedRules: ['分鐘の無音變組', '45分的讀法']
        },
        sourceItem: { value: 45, kanji: '四十五分', reading: 'よんじゅうごふん' }
    },
    {
        id: 'minute_extra_85',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「二十六分」讀作？',
        stem_zh: '「二十六分」讀作？',
        options: [
            { text: 'にじゅうろっぷん', isCorrect: true, reason: '正確！二十六分讀「にじゅうろっぷん」。' },
            { text: 'にじゅうろくふん', isCorrect: false, reason: '陷阱！6發生促音+半濁音化。' },
            { text: 'にじゅうろくぷん', isCorrect: false, reason: '需要促音。' },
            { text: 'ふたじゅうろっぷん', isCorrect: false, reason: '使用音讀「に」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十六分」讀「にじゅうろっぷん」，6促音+半濁音化。',
            trapExplanation: '6是促音+半濁音組(ろっぷん)。',
            relatedRules: ['分鐘的音變', '26分的讀法']
        },
        sourceItem: { value: 26, kanji: '二十六分', reading: 'にじゅうろっぷん' }
    },
    {
        id: 'minute_extra_86',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '等醫生需要＿＿。',
        stem_zh: '等醫生需要三十二分鐘。',
        options: [
            { text: 'さんじゅうにふん', isCorrect: true, reason: '正確！三十二分讀「さんじゅうにふん」。' },
            { text: 'さんじゅうにぷん', isCorrect: false, reason: '2無音變。' },
            { text: 'みじゅうにふん', isCorrect: false, reason: '使用音讀「さん」。' },
            { text: 'さんじゅうふたふん', isCorrect: false, reason: '使用音讀「に」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十二分」讀「さんじゅうにふん」，2無音變。',
            relatedRules: ['分鐘の無音變組', '32分的讀法']
        },
        sourceItem: { value: 32, kanji: '三十二分', reading: 'さんじゅうにふん' }
    },
    {
        id: 'minute_extra_87',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '排隊買咖啡要多久？',
        stem_zh: '排隊買咖啡要多久？',
        dialogue: {
            speakerA: 'コーヒーを買うのに何分並びますか？',
            speakerB: '＿＿です。（十一分）'
        },
        options: [
            { text: 'じゅういっぷん', isCorrect: true, reason: '正確！十一分讀「じゅういっぷん」。' },
            { text: 'じゅういちふん', isCorrect: false, reason: '陷阱！1發生促音+半濁音化。' },
            { text: 'とおいっぷん', isCorrect: false, reason: '使用音讀「じゅう」。' },
            { text: 'じゅうひとふん', isCorrect: false, reason: '使用音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十一分」讀「じゅういっぷん」，1促音+半濁音化。',
            trapExplanation: '1是促音+半濁音組(いっぷん)。',
            relatedRules: ['分鐘的音變', '11分的讀法']
        },
        sourceItem: { value: 11, kanji: '十一分', reading: 'じゅういっぷん' }
    },
    {
        id: 'minute_extra_88',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十八分」讀作？',
        stem_zh: '「十八分」讀作？',
        options: [
            { text: 'じゅうはっぷん', isCorrect: true, reason: '正確！十八分讀「じゅうはっぷん」。' },
            { text: 'じゅうはちふん', isCorrect: false, reason: '陷阱！8發生促音+半濁音化。' },
            { text: 'じゅうはちぷん', isCorrect: false, reason: '需要促音。' },
            { text: 'とおはっぷん', isCorrect: false, reason: '使用音讀「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十八分」讀「じゅうはっぷん」，8促音+半濁音化。',
            trapExplanation: '8是促音+半濁音組(はっぷん)。',
            relatedRules: ['分鐘的音變', '18分的讀法']
        },
        sourceItem: { value: 18, kanji: '十八分', reading: 'じゅうはっぷん' }
    },
    {
        id: 'minute_extra_89',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '影印文件需要＿＿。',
        stem_zh: '影印文件需要十五分鐘。',
        options: [
            { text: 'じゅうごふん', isCorrect: true, reason: '正確！十五分讀「じゅうごふん」。' },
            { text: 'じゅうごぷん', isCorrect: false, reason: '5無音變。' },
            { text: 'とおごふん', isCorrect: false, reason: '使用音讀「じゅう」。' },
            { text: 'じゅういつふん', isCorrect: false, reason: '使用音讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十五分」讀「じゅうごふん」，5無音變。',
            relatedRules: ['分鐘の無音變組', '15分的讀法']
        },
        sourceItem: { value: 15, kanji: '十五分', reading: 'じゅうごふん' }
    },
    {
        id: 'minute_extra_90',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '寫信需要多久？',
        stem_zh: '寫信需要多久？',
        dialogue: {
            speakerA: '手紙を書くのに何分かかりますか？',
            speakerB: '＿＿です。（十二分）'
        },
        options: [
            { text: 'じゅうにふん', isCorrect: true, reason: '正確！十二分讀「じゅうにふん」。' },
            { text: 'じゅうにぷん', isCorrect: false, reason: '2無音變。' },
            { text: 'とおにふん', isCorrect: false, reason: '使用音讀「じゅう」。' },
            { text: 'じゅうふたふん', isCorrect: false, reason: '使用音讀「に」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十二分」讀「じゅうにふん」，2無音變。',
            relatedRules: ['分鐘の無音變組', '12分的讀法']
        },
        sourceItem: { value: 12, kanji: '十二分', reading: 'じゅうにふん' }
    },
    {
        id: 'minute_extra_91',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十七分」讀作？',
        stem_zh: '「十七分」讀作？',
        options: [
            { text: 'じゅうななふん', isCorrect: true, reason: '正確！十七分讀「じゅうななふん」。' },
            { text: 'じゅうしちふん', isCorrect: false, reason: '分鐘用「なな」。' },
            { text: 'じゅうななぷん', isCorrect: false, reason: '7無音變。' },
            { text: 'とおななふん', isCorrect: false, reason: '使用音讀「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十七分」讀「じゅうななふん」，7無音變。',
            relatedRules: ['分鐘の無音變組', '17分的讀法']
        },
        sourceItem: { value: 17, kanji: '十七分', reading: 'じゅうななふん' }
    },
    {
        id: 'minute_extra_92',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '清潔房間需要＿＿。',
        stem_zh: '清潔房間需要十九分鐘。',
        options: [
            { text: 'じゅうきゅうふん', isCorrect: true, reason: '正確！十九分讀「じゅうきゅうふん」。' },
            { text: 'じゅうきゅうぷん', isCorrect: false, reason: '9無音變。' },
            { text: 'じゅうくふん', isCorrect: false, reason: '分鐘的9讀「きゅう」。' },
            { text: 'とおきゅうふん', isCorrect: false, reason: '使用音讀「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十九分」讀「じゅうきゅうふん」，9無音變。',
            relatedRules: ['分鐘の無音變組', '19分的讀法']
        },
        sourceItem: { value: 19, kanji: '十九分', reading: 'じゅうきゅうふん' }
    },
    {
        id: 'minute_extra_93',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: true,
        stem: '準備出門需要多久？',
        stem_zh: '準備出門需要多久？',
        dialogue: {
            speakerA: '出かける準備は何分かかりますか？',
            speakerB: '＿＿です。（十三分）'
        },
        options: [
            { text: 'じゅうさんぷん', isCorrect: true, reason: '正確！十三分讀「じゅうさんぷん」。' },
            { text: 'じゅうさんふん', isCorrect: false, reason: '陷阱！3發生半濁音化。' },
            { text: 'とおさんぷん', isCorrect: false, reason: '使用音讀「じゅう」。' },
            { text: 'じゅうみぷん', isCorrect: false, reason: '使用音讀「さん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十三分」讀「じゅうさんぷん」，3半濁音化。',
            trapExplanation: '3是半濁音組(さんぷん)。',
            relatedRules: ['分鐘的音變', '13分的讀法']
        },
        sourceItem: { value: 13, kanji: '十三分', reading: 'じゅうさんぷん' }
    },
    {
        id: 'minute_extra_94',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十四分」讀作？',
        stem_zh: '「十四分」讀作？',
        options: [
            { text: 'じゅうよんぷん', isCorrect: true, reason: '正確！十四分讀「じゅうよんぷん」。' },
            { text: 'じゅうよんふん', isCorrect: false, reason: '陷阱！4發生半濁音化。' },
            { text: 'じゅうしふん', isCorrect: false, reason: '分鐘的4讀「よん」。' },
            { text: 'とおよんぷん', isCorrect: false, reason: '使用音讀「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十四分」讀「じゅうよんぷん」，4半濁音化。',
            trapExplanation: '4是半濁音組(よんぷん)。',
            relatedRules: ['分鐘的音變', '14分的讀法']
        },
        sourceItem: { value: 14, kanji: '十四分', reading: 'じゅうよんぷん' }
    },
    {
        id: 'minute_extra_95',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '總復習：「分」的促音+半濁音組有哪些數字？',
        stem_zh: '總復習：「分」的促音+半濁音組有哪些數字？',
        options: [
            { text: '1、6、8、10 (いっぷん、ろっぷん、はっぷん、じゅっぷん)', isCorrect: true, reason: '正確！這四個促音+半濁音化。' },
            { text: '3、4 (さんぷん、よんぷん)', isCorrect: false, reason: '這兩個只有半濁音化。' },
            { text: '2、5、7、9', isCorrect: false, reason: '這些無音變。' },
            { text: '全部', isCorrect: false, reason: '只有部分促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '1/6/8/10的「分」促音+半濁音化：いっぷん、ろっぷん、はっぷん、じゅっぷん。',
            relatedRules: ['分鐘的音變總整理', '促音+半濁音組']
        },
        sourceItem: { value: 'review_ppun', kanji: '促音組', reading: '1/6/8/10' }
    },
    {
        id: 'minute_extra_96',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '總復習：「分」只有半濁音化的有哪些？',
        stem_zh: '總復習：「分」只有半濁音化的有哪些？',
        dialogue: {
            speakerA: '「ぷん」だけ変化するのは？',
            speakerB: '＿＿です。'
        },
        options: [
            { text: '3、4 (さんぷん、よんぷん)', isCorrect: true, reason: '正確！這兩個只有半濁音化。' },
            { text: '1、6、8、10', isCorrect: false, reason: '這些有促音。' },
            { text: '2、5、7、9', isCorrect: false, reason: '這些無音變。' },
            { text: '全部', isCorrect: false, reason: '只有部分。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '3/4的「分」只有半濁音化：さんぷん、よんぷん（無促音）。',
            relatedRules: ['分鐘的音變總整理', '半濁音組']
        },
        sourceItem: { value: 'review_pun', kanji: '半濁音組', reading: '3/4' }
    },
    {
        id: 'minute_extra_97',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '總復習：「分」無音變的有哪些數字？',
        stem_zh: '總復習：「分」無音變的有哪些數字？',
        options: [
            { text: '2、5、7、9 (にふん、ごふん、ななふん、きゅうふん)', isCorrect: true, reason: '正確！這四個無音變。' },
            { text: '1、6、8、10', isCorrect: false, reason: '這些有音變。' },
            { text: '3、4', isCorrect: false, reason: '這些有音變。' },
            { text: '全部', isCorrect: false, reason: '只有部分無音變。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '2/5/7/9的「分」保持「ふん」：にふん、ごふん、ななふん、きゅうふん。',
            relatedRules: ['分鐘的音變總整理', '無音變組']
        },
        sourceItem: { value: 'review_fun', kanji: '無音變組', reading: '2/5/7/9' }
    },
    {
        id: 'minute_extra_98',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'sentence',
        isTrap: false,
        stem: '總復習：分鐘的7讀什麼？',
        stem_zh: '總復習：分鐘的7讀什麼？',
        options: [
            { text: 'なな（不是しち）', isCorrect: true, reason: '正確！分鐘的7固定讀「なな」。' },
            { text: 'しち', isCorrect: false, reason: '分鐘用「なな」。' },
            { text: '兩者皆可', isCorrect: false, reason: '分鐘固定讀「なな」。' },
            { text: 'なのか', isCorrect: false, reason: '「なのか」是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '分鐘的7固定讀「なな」，與日期的「なのか」和小時的「しち」不同。',
            relatedRules: ['分鐘的讀法', '7の讀み方']
        },
        sourceItem: { value: 'review_7', kanji: '七分', reading: 'ななふん' }
    },
    {
        id: 'minute_extra_99',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'dialogue',
        isTrap: false,
        stem: '總復習：分鐘的9讀什麼？',
        stem_zh: '總復習：分鐘的9讀什麼？',
        dialogue: {
            speakerA: '「9分」の9はどう読みますか？',
            speakerB: '＿＿と読みます。'
        },
        options: [
            { text: 'きゅう（不是く）', isCorrect: true, reason: '正確！分鐘的9固定讀「きゅう」。' },
            { text: 'く', isCorrect: false, reason: '分鐘用「きゅう」。' },
            { text: '兩者皆可', isCorrect: false, reason: '分鐘固定讀「きゅう」。' },
            { text: 'ここの', isCorrect: false, reason: '這是訓讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '分鐘的9固定讀「きゅう」，與小時的「くじ」不同。',
            relatedRules: ['分鐘的讀法', '9の讀み方']
        },
        sourceItem: { value: 'review_9', kanji: '九分', reading: 'きゅうふん' }
    },
    {
        id: 'minute_extra_100',
        category: 'timeDate',
        subcategory: 'minutes',
        type: 'pronunciation',
        isTrap: false,
        stem: '總復習：「半」（30分）讀作？',
        stem_zh: '總復習：「半」（30分）讀作？',
        options: [
            { text: 'はん', isCorrect: true, reason: '正確！半讀「はん」。' },
            { text: 'なかば', isCorrect: false, reason: '時間表達用「はん」。' },
            { text: 'はんぶん', isCorrect: false, reason: '只有「はん」一個音。' },
            { text: 'さんじゅっぷん', isCorrect: false, reason: '「半」是「はん」的簡稱。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「〜時半」的「半」讀「はん」，等於30分。',
            relatedRules: ['時間表達', '半=30分']
        },
        sourceItem: { value: 'half', kanji: '半', reading: 'はん' }
    }
];
