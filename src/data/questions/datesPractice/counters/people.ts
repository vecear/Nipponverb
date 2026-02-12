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
        stem: '「一人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「一人」的正確讀音是？',
        options: [
            { text: 'ひとり', isCorrect: true, reason: '正確！「一人{ひとり}」讀作「ひとり」，使用訓讀。' },
            { text: 'いちにん', isCorrect: false, reason: '陷阱！一人{ひとり}使用訓讀「ひとり」，不是音讀「いちにん」。' },
            { text: 'いちじん', isCorrect: false, reason: '「じん」是「〜人」（人種/國籍）的讀法，不是人數。' },
            { text: 'ひとにん', isCorrect: false, reason: '不能混合訓讀與音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一人{ひとり}」讀作「ひとり」，使用訓讀。人數量詞「人」在一人{ひとり}和二人{ふたり}使用訓讀系統。',
            trapExplanation: '這是陷阱題。雖然其他人數使用音讀「にん」，但一人{ひとり}固定使用訓讀「ひとり」。',
            relatedRules: ['人數的訓讀規則', '一人{ひとり}、二人{ふたり}的特殊讀法']
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
            { text: 'いちにん', isCorrect: false, reason: '陷阱！一人{ひとり}使用訓讀「ひとり」。' },
            { text: 'ひとり', isCorrect: true, reason: '正確！「ひとりで」表示「一個人」做某事。' },
            { text: 'いちじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'ひとにん', isCorrect: false, reason: '不混合訓讀與音讀。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ひとりで」表示「一個人」做某事，是常用表達。',
            trapExplanation: '一人{ひとり}固定讀「ひとり」，這是需要特別記憶的訓讀。',
            relatedRules: ['人數的讀法', '「〜で」的使用']
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
            { text: 'いちにん', isCorrect: false, reason: '一人{ひとり}使用訓讀。' },
            { text: 'ひとり', isCorrect: true, reason: '正確！預約是一個人。' },
            { text: 'いちじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'ひとにん', isCorrect: false, reason: '不混合訓讀與音讀。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '回答「何人{なんにん}」時，一人{ひとり}讀作「ひとり」。',
            relatedRules: ['人數的質問與回答', '「何人」的使用']
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
        stem: '「二人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「二人」的正確讀音是？',
        options: [
            { text: 'ふたり', isCorrect: true, reason: '正確！「二人{ふたり}」讀作「ふたり」，使用訓讀。' },
            { text: 'ににん', isCorrect: false, reason: '陷阱！二人{ふたり}使用訓讀「ふたり」，不是音讀「ににん」。' },
            { text: 'にじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'ふたにん', isCorrect: false, reason: '不能混合訓讀與音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二人{ふたり}」讀作「ふたり」，使用訓讀。與一人{ひとり}一樣，是特殊讀法。',
            trapExplanation: '這是陷阱題。二人{ふたり}固定使用訓讀「ふたり」，從三人開始才使用音讀「にん」。',
            relatedRules: ['人數的訓讀規則', '訓讀與音讀の切換']
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
            { text: 'ににん', isCorrect: false, reason: '陷阱！二人{ふたり}使用訓讀「ふたり」。' },
            { text: 'ふたり', isCorrect: true, reason: '正確！「ふたりで」表示「兩個人」一起做某事。' },
            { text: 'にじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'ふたにん', isCorrect: false, reason: '不混合訓讀與音讀。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ふたりで」表示「兩個人」一起做某事。',
            trapExplanation: '二人{ふたり}固定讀「ふたり」，這是需要特別記憶的訓讀。',
            relatedRules: ['人數的讀法', '「〜で」的使用']
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
            { text: 'ににん', isCorrect: false, reason: '二人{ふたり}使用訓讀。' },
            { text: 'ふたり', isCorrect: true, reason: '正確！家庭有兩個人。' },
            { text: 'にじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'ふたにん', isCorrect: false, reason: '不混合訓讀與音讀。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ふたり」回答家庭人數。',
            relatedRules: ['人數的質問與回答', '家庭表達']
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
        stem: '「三人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「三人」的正確讀音是？',
        options: [
            { text: 'さんにん', isCorrect: true, reason: '正確！「三人{さんにん}」讀作「さんにん」，從三人{さんにん}開始使用音讀。' },
            { text: 'みたり', isCorrect: false, reason: '「みたり」是古語，現代日語使用「さんにん」。' },
            { text: 'さんじん', isCorrect: false, reason: '「じん」不用於人數量詞。' },
            { text: 'みにん', isCorrect: false, reason: '不混合訓讀與音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三人{さんにん}」讀作「さんにん」。從三人{さんにん}開始，人數量詞切換為音讀「〜にん」。',
            relatedRules: ['人數的音讀規則', '訓讀→音讀の切換點']
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
            { text: 'みたり', isCorrect: false, reason: '現代日語使用「さんにん」。' },
            { text: 'さんにん', isCorrect: true, reason: '正確！三個人一起討論。' },
            { text: 'さんじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'みにん', isCorrect: false, reason: '使用音讀「さんにん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三人{さんにん}で」表示「三個人」一起做某事。',
            relatedRules: ['人數的讀法', '「〜で」的使用']
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
            { text: 'みたり', isCorrect: false, reason: '現代使用「さんにん」。' },
            { text: 'さんにん', isCorrect: true, reason: '正確！三個人一起去旅行。' },
            { text: 'さんじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'みっにん', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三人{さんにん}で行きます」表示「三個人去」。',
            relatedRules: ['人數的讀法', '旅行計畫表達']
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
        stem: '「四人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「四人」的正確讀音是？',
        options: [
            { text: 'よにん', isCorrect: true, reason: '正確！「四人{よにん}」讀作「よにん」，使用「よ」。' },
            { text: 'よんにん', isCorrect: false, reason: '陷阱！四人{よにん}使用「よ」不是「よん」。' },
            { text: 'しにん', isCorrect: false, reason: '陷阱！「しにん」聽起來像「死人」，禁止使用。' },
            { text: 'よったり', isCorrect: false, reason: '「よったり」是古語，現代使用「よにん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四人{よにん}」讀作「よにん」，使用「よ」不是「よん」或「し」。',
            trapExplanation: '這是陷阱題。「しにん」聽起來像「死人」（屍體），是禁忌讀法。「よんにん」也不常用。',
            relatedRules: ['四人{よにん}的特殊讀法', '避諱規則']
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
            { text: 'よんにん', isCorrect: false, reason: '陷阱！四人{よにん}使用「よ」不是「よん」。' },
            { text: 'よにん', isCorrect: true, reason: '正確！家庭有四個人。' },
            { text: 'しにん', isCorrect: false, reason: '「しにん」是禁忌讀法。' },
            { text: 'よったり', isCorrect: false, reason: '現代使用「よにん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「家族は四人{よにん}です」表示「家庭有四個人」。',
            trapExplanation: '四人{よにん}固定讀「よにん」，避免「しにん」（死人）の禁忌。',
            relatedRules: ['人數的讀法', '家庭表達']
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
            { text: 'よんにん', isCorrect: false, reason: '四人{よにん}使用「よ」。' },
            { text: 'よにん', isCorrect: true, reason: '正確！預約四位{よにん}。' },
            { text: 'しにん', isCorrect: false, reason: '「しにん」是禁忌讀法。' },
            { text: 'よったり', isCorrect: false, reason: '現代使用「よにん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「四人{よにん}」回答預約人數。',
            relatedRules: ['人數的讀法', '餐廳預約']
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
        stem: '「五人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「五人」的正確讀音是？',
        options: [
            { text: 'ごにん', isCorrect: true, reason: '正確！「五人{ごにん}」讀作「ごにん」。' },
            { text: 'いつにん', isCorrect: false, reason: '人數使用音讀「ご」不是訓讀「いつ」。' },
            { text: 'ごじん', isCorrect: false, reason: '「じん」不用於人數量詞。' },
            { text: 'こにん', isCorrect: false, reason: '需要濁音「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五人{ごにん}」讀作「ごにん」，使用音讀。',
            relatedRules: ['人數的音讀規則', '「ご」的讀法']
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
            { text: 'いつにん', isCorrect: false, reason: '人數使用音讀「ご」。' },
            { text: 'ごにん', isCorrect: true, reason: '正確！團隊有五個人。' },
            { text: 'ごじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'いつたり', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「チームは五人{ごにん}です」表示「團隊有五個人」。',
            relatedRules: ['人數的讀法', '團隊表達']
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
            { text: 'いつにん', isCorrect: false, reason: '人數使用音讀「ご」。' },
            { text: 'ごにん', isCorrect: true, reason: '正確！五個人來會議。' },
            { text: 'ごじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'こにん', isCorrect: false, reason: '需要濁音「ご」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「五人{ごにん}来ます」表示「五個人來」。',
            relatedRules: ['人數的讀法', '會議出席']
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
        stem: '「七人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「七人」的正確讀音是？',
        options: [
            { text: 'しちにん / ななにん', isCorrect: true, reason: '正確！「七人{しちにん}」可讀作「しちにん」或「ななにん」，兩者都正確。' },
            { text: 'なのにん', isCorrect: false, reason: '「なの」是日期七日的讀法。' },
            { text: 'しちじん', isCorrect: false, reason: '「じん」不用於人數量詞。' },
            { text: 'ななたり', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七人{しちにん}」可讀作「しちにん」或「ななにん」，兩種讀法都正確。',
            relatedRules: ['七人{しちにん}の雙重讀法', '「しち」vs「なな」']
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
            { text: 'なのにん', isCorrect: false, reason: '「なの」是日期讀法。' },
            { text: 'しちにん', isCorrect: true, reason: '正確！「七人{しちにん}の侍」是黑澤明的著名電影。' },
            { text: 'しちじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'ななたり', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「七人{しちにん}の侍」是黑澤明的經典電影。',
            relatedRules: ['人數的讀法', '日本電影']
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
            { text: 'なのにん', isCorrect: false, reason: '「なの」是日期讀法。' },
            { text: 'ななにん', isCorrect: true, reason: '正確！小組有七個人。' },
            { text: 'しちじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'ななたり', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「七人{ななにん}」回答小組人數。',
            relatedRules: ['人數的讀法', '團隊表達']
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
        stem: '「六人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「六人」的正確讀音是？',
        options: [
            { text: 'ろくにん', isCorrect: true, reason: '正確！「六人{ろくにん}」讀作「ろくにん」。' },
            { text: 'むにん', isCorrect: false, reason: '人數使用音讀「ろく」不是訓讀「む」。' },
            { text: 'ろくじん', isCorrect: false, reason: '「じん」不用於人數量詞。' },
            { text: 'ろっにん', isCorrect: false, reason: '六人{ろくにん}不促音化，是「ろくにん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六人{ろくにん}」讀作「ろくにん」，使用音讀。',
            relatedRules: ['人數的音讀規則', '「ろく」的讀法']
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
            { text: 'むにん', isCorrect: false, reason: '人數使用音讀「ろく」。' },
            { text: 'ろくにん', isCorrect: true, reason: '正確！房間可以住六個人。' },
            { text: 'ろくじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'ろっにん', isCorrect: false, reason: '六人{ろくにん}不促音化。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「六人{ろくにん}泊まれます」表示「可以住六個人」。',
            relatedRules: ['人數的讀法', '住宿表達']
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
            { text: 'むにん', isCorrect: false, reason: '人數使用音讀「ろく」。' },
            { text: 'ろくにん', isCorrect: true, reason: '正確！六個人一起烤肉。' },
            { text: 'ろくじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'ろったり', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「六人{ろくにん}」回答活動人數。',
            relatedRules: ['人數的讀法', '活動計畫']
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
        stem: '「八人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「八人」的正確讀音是？',
        options: [
            { text: 'はちにん', isCorrect: true, reason: '正確！「八人{はちにん}」讀作「はちにん」。' },
            { text: 'やにん', isCorrect: false, reason: '人數使用音讀「はち」不是訓讀「や」。' },
            { text: 'はちじん', isCorrect: false, reason: '「じん」不用於人數量詞。' },
            { text: 'はっにん', isCorrect: false, reason: '八人{はちにん}不促音化，是「はちにん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八人{はちにん}」讀作「はちにん」，使用音讀。',
            relatedRules: ['人數的音讀規則', '「はち」的讀法']
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
            { text: 'やにん', isCorrect: false, reason: '人數使用音讀「はち」。' },
            { text: 'はちにん', isCorrect: true, reason: '正確！還差八個人。' },
            { text: 'はちじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'はっにん', isCorrect: false, reason: '八人{はちにん}不促音化。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八人{はちにん}足りません」表示「還差八個人」。',
            relatedRules: ['人數的讀法', '不足表達']
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
            { text: 'やにん', isCorrect: false, reason: '人數使用音讀「はち」。' },
            { text: 'はちにん', isCorrect: true, reason: '正確！車可以坐八個人。' },
            { text: 'はちじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'やったり', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八人{はちにん}乗れます」表示「可以坐八個人」。',
            relatedRules: ['人數的讀法', '乘車表達']
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
        stem: '「九人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「九人」的正確讀音是？',
        options: [
            { text: 'きゅうにん', isCorrect: true, reason: '正確！「九人{きゅうにん}」讀作「きゅうにん」。' },
            { text: 'くにん', isCorrect: false, reason: '人數使用「きゅう」不是「く」。' },
            { text: 'きゅうじん', isCorrect: false, reason: '「じん」不用於人數量詞。' },
            { text: 'ここのにん', isCorrect: false, reason: '「ここの」是訓讀，人數使用音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九人{きゅうにん}」讀作「きゅうにん」，使用音讀。',
            relatedRules: ['人數的音讀規則', '「きゅう」的讀法']
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
            { text: 'くにん', isCorrect: false, reason: '人數使用「きゅう」不是「く」。' },
            { text: 'きゅうにん', isCorrect: true, reason: '正確！棒球隊需要九個人。' },
            { text: 'きゅうじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'ここのにん', isCorrect: false, reason: '人數使用音讀「きゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「九人{きゅうにん}必要です」表示「需要九個人」。',
            relatedRules: ['人數的讀法', '運動團隊']
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
            { text: 'くにん', isCorrect: false, reason: '人數使用「きゅう」不是「く」。' },
            { text: 'きゅうにん', isCorrect: true, reason: '正確！九個人出席了。' },
            { text: 'きゅうじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'ここのたり', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「九人{きゅうにん}出席しました」表示「九個人出席了」。',
            relatedRules: ['人數的讀法', '出席表達']
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
        stem: '「十人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十人」的正確讀音是？',
        options: [
            { text: 'じゅうにん', isCorrect: true, reason: '正確！「十人{じゅうにん}」讀作「じゅうにん」。' },
            { text: 'とおにん', isCorrect: false, reason: '人數使用音讀「じゅう」不是訓讀「とお」。' },
            { text: 'じゅうじん', isCorrect: false, reason: '「じん」不用於人數量詞。' },
            { text: 'じゅっにん', isCorrect: false, reason: '十人{じゅうにん}不促音化，是「じゅうにん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十人{じゅうにん}」讀作「じゅうにん」，使用音讀。',
            relatedRules: ['人數的音讀規則', '「じゅう」的讀法']
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
            { text: 'とおにん', isCorrect: false, reason: '人數使用音讀「じゅう」。' },
            { text: 'じゅうにん', isCorrect: true, reason: '正確！班級有十個人。' },
            { text: 'じゅうじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'じゅっにん', isCorrect: false, reason: '十人{じゅうにん}不促音化。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「クラスは十人{じゅうにん}です」表示「班級有十個人」。',
            relatedRules: ['人數的讀法', '班級表達']
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
            { text: 'とおにん', isCorrect: false, reason: '人數使用音讀「じゅう」。' },
            { text: 'じゅうにん', isCorrect: true, reason: '正確！約十個人參加。' },
            { text: 'じゅうじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'じゅっにん', isCorrect: false, reason: '十人{じゅうにん}不促音化。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「約十人{じゅうにん}」表示「約十個人」。',
            relatedRules: ['人數的讀法', '參加人數']
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
        stem: '「十一人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十一人」的正確讀音是？',
        options: [
            { text: 'じゅういちにん', isCorrect: true, reason: '正確！「十一人{じゅういちにん}」讀作「じゅういちにん」。' },
            { text: 'じゅうひとり', isCorrect: false, reason: '11以上全部使用音讀「にん」。' },
            { text: 'といちにん', isCorrect: false, reason: '十使用音讀「じゅう」。' },
            { text: 'じゅういちじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十一人{じゅういちにん}」讀作「じゅういちにん」。十一人以上全部使用音讀。',
            relatedRules: ['人數的音讀規則', '十一以上']
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
            { text: 'じゅうひとり', isCorrect: false, reason: '11以上使用音讀。' },
            { text: 'じゅういちにん', isCorrect: true, reason: '正確！足球隊十一個人比賽。' },
            { text: 'といちにん', isCorrect: false, reason: '十使用「じゅう」。' },
            { text: 'じゅういちじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '足球一隊需要十一人{じゅういちにん}。',
            relatedRules: ['人數的讀法', '運動團隊']
        },
        sourceItem: { value: 11, kanji: '十一人', reading: 'じゅういちにん' }
    },
    {
        id: 'people_12_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十二人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十二人」的正確讀音是？',
        options: [
            { text: 'じゅうににん', isCorrect: true, reason: '正確！「十二人{じゅうににん}」讀作「じゅうににん」。' },
            { text: 'じゅうふたり', isCorrect: false, reason: '11以上全部使用音讀「にん」。' },
            { text: 'とにににん', isCorrect: false, reason: '十使用音讀「じゅう」。' },
            { text: 'じゅうにじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十二人{じゅうににん}」讀作「じゅうににん」。',
            relatedRules: ['人數的音讀規則', '十二']
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
            { text: 'じゅうふたり', isCorrect: false, reason: '11以上使用音讀。' },
            { text: 'じゅうににん', isCorrect: true, reason: '正確！陪審員有十二個人。' },
            { text: 'とににん', isCorrect: false, reason: '十使用「じゅう」。' },
            { text: 'じゅうにじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '美國陪審員通常十二人{じゅうににん}。',
            relatedRules: ['人數的讀法', '制度用語']
        },
        sourceItem: { value: 12, kanji: '十二人', reading: 'じゅうににん' }
    },
    {
        id: 'people_14_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十四人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十四人」的正確讀音是？',
        options: [
            { text: 'じゅうよにん', isCorrect: true, reason: '正確！「十四人{じゅうよにん}」讀作「じゅうよにん」，四使用「よ」。' },
            { text: 'じゅうしにん', isCorrect: false, reason: '陷阱！「しにん」聽起來像「死人」，避免使用。' },
            { text: 'じゅうよんにん', isCorrect: false, reason: '十四人{じゅうよにん}使用「よ」不是「よん」。' },
            { text: 'じゅうよじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十四人{じゅうよにん}」讀作「じゅうよにん」，與四人{よにん}一樣使用「よ」。',
            trapExplanation: '避免「しにん」的禁忌讀法。',
            relatedRules: ['四人{よにん}的特殊讀法', '避諱規則']
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
            { text: 'じゅうしにん', isCorrect: false, reason: '陷阱！避免「しにん」的禁忌。' },
            { text: 'じゅうよにん', isCorrect: true, reason: '正確！參加者有十四個人。' },
            { text: 'じゅうよんにん', isCorrect: false, reason: '使用「よ」不是「よん」。' },
            { text: 'じゅうよじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十四人{じゅうよにん}」與四人{よにん}一樣使用「よ」。',
            trapExplanation: '任何包含「四」的人數都使用「よ」避免「しにん」。',
            relatedRules: ['四人{よにん}的讀法', '避諱規則']
        },
        sourceItem: { value: 14, kanji: '十四人', reading: 'じゅうよにん' }
    },
    {
        id: 'people_15_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十五人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十五人」的正確讀音是？',
        options: [
            { text: 'じゅうごにん', isCorrect: true, reason: '正確！「十五人{じゅうごにん}」讀作「じゅうごにん」。' },
            { text: 'じゅういつにん', isCorrect: false, reason: '人數使用音讀「ご」不是訓讀「いつ」。' },
            { text: 'とごにん', isCorrect: false, reason: '十使用音讀「じゅう」。' },
            { text: 'じゅうごじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十五人{じゅうごにん}」讀作「じゅうごにん」。',
            relatedRules: ['人數的音讀規則', '十五']
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
            { text: 'じゅういつにん', isCorrect: false, reason: '人數使用音讀「ご」。' },
            { text: 'じゅうごにん', isCorrect: true, reason: '正確！橄欖球隊十五個人比賽。' },
            { text: 'とごにん', isCorrect: false, reason: '十使用「じゅう」。' },
            { text: 'じゅうごじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '橄欖球一隊需要十五人{じゅうごにん}。',
            relatedRules: ['人數的讀法', '運動團隊']
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
        stem: '「二十人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「二十人」的正確讀音是？',
        options: [
            { text: 'にじゅうにん', isCorrect: true, reason: '正確！「二十人{にじゅうにん}」讀作「にじゅうにん」。' },
            { text: 'はたちにん', isCorrect: false, reason: '「はたち」只用於年齡20歲，不用於人數。' },
            { text: 'にじゅうじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'ふたじゅうにん', isCorrect: false, reason: '二十使用音讀「に」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十人{にじゅうにん}」讀作「にじゅうにん」。「はたち」只用於年齡。',
            relatedRules: ['人數的音讀規則', '「はたち」vs「にじゅう」']
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
            { text: 'はたちにん', isCorrect: false, reason: '「はたち」只用於年齡。' },
            { text: 'にじゅうにん', isCorrect: true, reason: '正確！班級有二十個人。' },
            { text: 'にじゅうじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'ふたじゅうにん', isCorrect: false, reason: '二十使用音讀。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「クラスには二十人{にじゅうにん}います」表示「班級有二十個人」。',
            relatedRules: ['人數的讀法', '班級表達']
        },
        sourceItem: { value: 20, kanji: '二十人', reading: 'にじゅうにん' }
    },
    {
        id: 'people_24_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: true,
        stem: '「二十四人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「二十四人」的正確讀音是？',
        options: [
            { text: 'にじゅうよにん', isCorrect: true, reason: '正確！「二十四人{にじゅうよにん}」使用「よ」。' },
            { text: 'にじゅうしにん', isCorrect: false, reason: '陷阱！避免「しにん」的禁忌。' },
            { text: 'にじゅうよんにん', isCorrect: false, reason: '使用「よ」不是「よん」。' },
            { text: 'にじゅうよじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十四人{にじゅうよにん}」讀作「にじゅうよにん」，包含「四」的人數都使用「よ」。',
            trapExplanation: '任何包含「四」的數字都避免「し」讀法。',
            relatedRules: ['四人{よにん}的讀法', '避諱規則']
        },
        sourceItem: { value: 24, kanji: '二十四人', reading: 'にじゅうよにん' }
    },
    {
        id: 'people_30_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「三十人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「三十人」的正確讀音是？',
        options: [
            { text: 'さんじゅうにん', isCorrect: true, reason: '正確！「三十人{さんじゅうにん}」讀作「さんじゅうにん」。' },
            { text: 'みそにん', isCorrect: false, reason: '「みそ」是古語，現代使用「さんじゅう」。' },
            { text: 'さんじゅうじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'みじゅうにん', isCorrect: false, reason: '三十{さんじゅう}使用音讀「さん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十人{さんじゅうにん}」讀作「さんじゅうにん」。',
            relatedRules: ['人數的音讀規則', '三十']
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
            { text: 'みそにん', isCorrect: false, reason: '現代使用「さんじゅう」。' },
            { text: 'さんじゅうにん', isCorrect: true, reason: '正確！會議室可以容納三十個人。' },
            { text: 'さんじゅうじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'みじゅうにん', isCorrect: false, reason: '三十使用「さん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三十人{さんじゅうにん}入れます」表示「可以容納三十個人」。',
            relatedRules: ['人數的讀法', '容量表達']
        },
        sourceItem: { value: 30, kanji: '三十人', reading: 'さんじゅうにん' }
    },
    {
        id: 'people_50_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「五十人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「五十人」的正確讀音是？',
        options: [
            { text: 'ごじゅうにん', isCorrect: true, reason: '正確！「五十人{ごじゅうにん}」讀作「ごじゅうにん」。' },
            { text: 'いそにん', isCorrect: false, reason: '人數使用音讀「ご」。' },
            { text: 'ごじゅうじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'こじゅうにん', isCorrect: false, reason: '五使用濁音「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十人{ごじゅうにん}」讀作「ごじゅうにん」。',
            relatedRules: ['人數的音讀規則', '五十']
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
            { text: 'いそにん', isCorrect: false, reason: '人數使用音讀「ご」。' },
            { text: 'ごじゅうにん', isCorrect: true, reason: '正確！約五十個人來派對。' },
            { text: 'ごじゅうじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'こじゅうにん', isCorrect: false, reason: '五使用「ご」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「約五十人{ごじゅうにん}」表示「約五十個人」。',
            relatedRules: ['人數的讀法', '派對參加者']
        },
        sourceItem: { value: 50, kanji: '五十人', reading: 'ごじゅうにん' }
    },
    {
        id: 'people_100_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「百人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「百人」的正確讀音是？',
        options: [
            { text: 'ひゃくにん', isCorrect: true, reason: '正確！「百人{ひゃくにん}」讀作「ひゃくにん」。' },
            { text: 'ももにん', isCorrect: false, reason: '人數使用音讀「ひゃく」不是訓讀「もも」。' },
            { text: 'ひゃくじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'びゃくにん', isCorrect: false, reason: '百使用「ひゃく」不是濁音。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「百人{ひゃくにん}」讀作「ひゃくにん」。',
            relatedRules: ['人數的音讀規則', '百的讀法']
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
            { text: 'ももにん', isCorrect: false, reason: '人數使用音讀「ひゃく」。' },
            { text: 'ひゃくにん', isCorrect: true, reason: '正確！百人一首是收集一百個人的和歌。' },
            { text: 'ひゃくじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'びゃくにん', isCorrect: false, reason: '百使用「ひゃく」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「百人一首{ひゃくにんいっしゅ}」是日本傳統紙牌遊戲。',
            relatedRules: ['人數的讀法', '日本文化']
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
            { text: 'ごめい', isCorrect: false, reason: '雖然「名」也可用於人數，但答案應回答「ごにん」。' },
            { text: 'ごにん', isCorrect: true, reason: '正確！五位{ごにん}客人。' },
            { text: 'いつにん', isCorrect: false, reason: '人數使用音讀「ご」。' },
            { text: 'ごじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '餐廳回答人數使用「〜人」。',
            relatedRules: ['餐廳用語', '「何名様」の回答']
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
            { text: 'みたり', isCorrect: false, reason: '現代使用「さんにん」。' },
            { text: 'さんにん', isCorrect: true, reason: '正確！家庭有三個人。' },
            { text: 'さんじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'さんめい', isCorrect: false, reason: '家庭人數使用「人」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「何人家族」的回答使用「〜人」。',
            relatedRules: ['家庭表達', '人數的讀法']
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
            { text: 'やにん', isCorrect: false, reason: '人數使用音讀「はち」。' },
            { text: 'はちにん', isCorrect: true, reason: '正確！八個人出席了會議。' },
            { text: 'はちじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'はっにん', isCorrect: false, reason: '八人{はちにん}不促音化。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八人{はちにん}出席しました」表示「八個人出席了」。',
            relatedRules: ['人數的讀法', '會議用語']
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
            { text: 'よんにん', isCorrect: false, reason: '陷阱！四人{よにん}使用「よ」不是「よん」。' },
            { text: 'よにん', isCorrect: true, reason: '正確！四個人一起去旅行。' },
            { text: 'しにん', isCorrect: false, reason: '「しにん」是禁忌讀法。' },
            { text: 'よったり', isCorrect: false, reason: '現代使用「よにん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「四人{よにん}で旅行に行きます」表示「四個人去旅行」。',
            trapExplanation: '四人{よにん}固定使用「よ」，避免「し」的禁忌。',
            relatedRules: ['四人{よにん}的讀法', '旅行表達']
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
            { text: 'はたちにん', isCorrect: false, reason: '「はたち」只用於年齡20歲。' },
            { text: 'にじゅうにん', isCorrect: true, reason: '正確！派對來了二十個人。' },
            { text: 'にじゅうじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'ふたじゅうにん', isCorrect: false, reason: '二十使用音讀「に」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「二十人{にじゅうにん}来ました」表示「二十個人來了」。',
            relatedRules: ['人數的讀法', '派對表達']
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
            { text: '一人、二人', isCorrect: true, reason: '正確！一人{ひとり}（ひとり）和二人{ふたり}（ふたり）都使用訓讀。' },
            { text: '一人、三人', isCorrect: false, reason: '三人{さんにん}使用音讀「さんにん」。' },
            { text: '二人、四人', isCorrect: false, reason: '四人{よにん}使用音讀「よにん」（雖然四是特殊讀法）。' },
            { text: '一人、四人', isCorrect: false, reason: '四人{よにん}使用音讀「よにん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '只有一人{ひとり}（ひとり）和二人{ふたり}（ふたり）使用完全訓讀系統。',
            trapExplanation: '從三人開始切換為音讀「〜にん」。',
            relatedRules: ['訓讀vs音讀', '人數的特殊規則']
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
            { text: '因為「しにん」聽起來像「死人」', isCorrect: true, reason: '正確！「しにん」與「死人」（屍體）同音，是禁忌。' },
            { text: '因為「し」是訓讀', isCorrect: false, reason: '「し」是音讀，但因禁忌而避免使用。' },
            { text: '因為文法規則', isCorrect: false, reason: '這是文化禁忌，不是文法規則。' },
            { text: '因為「し」太短', isCorrect: false, reason: '這不是原因。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「しにん」與「死人」（屍體、死者）同音，日本人避諱使用。',
            trapExplanation: '這是日本文化中的避諱習慣。',
            relatedRules: ['避諱文化', '四の禁忌']
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
            { text: '三人から', isCorrect: true, reason: '正確！從三人{さんにん}開始使用音讀「〜にん」。' },
            { text: '一人から', isCorrect: false, reason: '一人{ひとり}使用訓讀「ひとり」。' },
            { text: '二人から', isCorrect: false, reason: '二人{ふたり}使用訓讀「ふたり」。' },
            { text: '四人から', isCorrect: false, reason: '三人{さんにん}已經開始使用音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '人數量詞：一人{ひとり}（ひとり）、二人{ふたり}（ふたり）使用訓讀，從三人{さんにん}開始切換為音讀「〜にん」。',
            relatedRules: ['訓讀→音讀の切換點', '人數的規則']
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
            { text: '兩種：しちにん、ななにん', isCorrect: true, reason: '正確！「七人{しちにん}」可讀作「しちにん」或「ななにん」，兩者都正確。' },
            { text: '一種：しちにん', isCorrect: false, reason: '「ななにん」也正確。' },
            { text: '一種：ななにん', isCorrect: false, reason: '「しちにん」也正確。' },
            { text: '三種', isCorrect: false, reason: '只有兩種正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七人{しちにん}」可讀作「しちにん」或「ななにん」，兩種讀法在現代日語中都使用。',
            relatedRules: ['七{しち}の雙重讀法', '「しち」vs「なな」']
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
            { text: '私はいちにんで住んでいます', isCorrect: false, reason: '陷阱！一人{ひとり}使用訓讀「ひとり」。' },
            { text: '私はひとりで住んでいます', isCorrect: true, reason: '正確！「ひとりで住んでいます」表示「一個人住」。' },
            { text: '私はいちじんで住んでいます', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: '私は一つで住んでいます', isCorrect: false, reason: '「一つ」不用於人數。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ひとりで住んでいます」是「一個人住」的正確表達。',
            trapExplanation: '一人{ひとり}固定使用訓讀「ひとり」。',
            relatedRules: ['一人{ひとり}的讀法', '居住表達']
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
            { text: '私たちににんは夫婦です', isCorrect: false, reason: '陷阱！二人{ふたり}使用訓讀「ふたり」。' },
            { text: '私たちふたりは夫婦です', isCorrect: true, reason: '正確！「ふたりは夫婦です」表示「兩個人是夫妻」。' },
            { text: '私たちにじんは夫婦です', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: '私たち二つは夫婦です', isCorrect: false, reason: '「二つ」不用於人數。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ふたりは夫婦です」是「兩個人是夫妻」的正確表達。',
            trapExplanation: '二人{ふたり}固定使用訓讀「ふたり」。',
            relatedRules: ['二人{ふたり}的讀法', '夫婦表達']
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
            { text: 'むにんひとくみ', isCorrect: false, reason: '人數使用音讀「ろく」。' },
            { text: 'ろくにんひとくみ', isCorrect: true, reason: '正確！「六人{ろくにん}一組」表示「六個人一組」。' },
            { text: 'ろくじんひとくみ', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'むったりひとくみ', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「六人{ろくにん}一組」是「六個人一組」的正確表達。',
            relatedRules: ['人數的讀法', '分組表達']
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
        stem: '「何人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「何人」的正確讀音是？',
        options: [
            { text: 'なんにん', isCorrect: true, reason: '正確！「何人{なんにん}」讀作「なんにん」，表示「幾個人」。' },
            { text: 'なにじん', isCorrect: false, reason: '「なにじん」是「什麼人{じん}」（國籍），不是人數。' },
            { text: 'なにひと', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'いくにん', isCorrect: false, reason: '人數疑問詞使用「なんにん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何人{なんにん}」讀作「なんにん」，是詢問人數的疑問詞。注意「何人{なにじん}」（なにじん）是詢問國籍。',
            relatedRules: ['「なんにん」vs「なにじん」', '疑問詞の使い分け']
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
            { text: 'なにじん', isCorrect: false, reason: '「なにじん」是詢問國籍。' },
            { text: 'なんにん', isCorrect: true, reason: '正確！「何人{なんにん}」詢問人數。' },
            { text: 'いくにん', isCorrect: false, reason: '人數疑問詞使用「なんにん」。' },
            { text: 'どのにん', isCorrect: false, reason: '這不是正確疑問詞。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「何人{なんにん}来ますか」詢問「幾個人來」。',
            relatedRules: ['人數の疑問詞', '「なんにん」的使用']
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
            { text: '私はひとりで行きます', isCorrect: false, reason: '這是正確的，「ひとり」是一人{ひとり}的訓讀。' },
            { text: '私たちはふたりです', isCorrect: false, reason: '這是正確的，「ふたり」是二人{ふたり}的訓讀。' },
            { text: '私たちはしにんです', isCorrect: true, reason: '錯誤！「しにん」是禁忌讀法，應該使用「よにん」。' },
            { text: '私たちはさんにんです', isCorrect: false, reason: '這是正確的，「さんにん」是三人{さんにん}的音讀。' }
        ],
        correctIndex: 2,
        explanation: {
            correctRule: '「しにん」是錯誤的讀法，因為與「死人」同音。四人{よにん}應讀作「よにん」。',
            trapExplanation: '這是陷阱題，測試對「四{し}」禁忌的理解。',
            relatedRules: ['四人{よにん}の禁忌', '避諱規則']
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
            { text: '三人で話し合いました', isCorrect: false, reason: '這是正確的。' },
            { text: '五人で旅行しました', isCorrect: false, reason: '這是正確的。' },
            { text: 'ににんで行きました', isCorrect: true, reason: '錯誤！二人{ふたり}應該使用訓讀「ふたり」，不是音讀「ににん」。' },
            { text: '十人で会議をしました', isCorrect: false, reason: '這是正確的。' }
        ],
        correctIndex: 2,
        explanation: {
            correctRule: '二人{ふたり}固定使用訓讀「ふたり」，不能使用音讀「ににん」。',
            trapExplanation: '一人{ひとり}和二人{ふたり}是特殊訓讀，需要特別記憶。',
            relatedRules: ['二人{ふたり}的訓讀', '特殊讀法']
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
        stem: '「十六人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十六人」的正確讀音是？',
        options: [
            { text: 'じゅうろくにん', isCorrect: true, reason: '正確！「十六人{じゅうろくにん}」讀作「じゅうろくにん」。' },
            { text: 'じゅうむにん', isCorrect: false, reason: '十六{じゅうろく}使用音讀「ろく」。' },
            { text: 'じゅうろくじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'とろくにん', isCorrect: false, reason: '十使用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十六人{じゅうろくにん}」讀作「じゅうろくにん」。',
            relatedRules: ['人數的音讀規則']
        },
        sourceItem: { value: 16, kanji: '十六人', reading: 'じゅうろくにん' }
    },
    {
        id: 'people_17_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十七人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十七人」的正確讀音是？',
        options: [
            { text: 'じゅうしちにん / じゅうななにん', isCorrect: true, reason: '正確！兩種讀法都可以。' },
            { text: 'じゅうなのにん', isCorrect: false, reason: '「なの」是日期讀法。' },
            { text: 'じゅうしちじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'とななにん', isCorrect: false, reason: '十使用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十七人{じゅうしちにん}」可讀作「じゅうしちにん」或「じゅうななにん」。',
            relatedRules: ['七{しち}の雙重讀法']
        },
        sourceItem: { value: 17, kanji: '十七人', reading: 'じゅうしちにん' }
    },
    {
        id: 'people_18_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十八人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十八人」的正確讀音是？',
        options: [
            { text: 'じゅうはちにん', isCorrect: true, reason: '正確！「十八人{じゅうはちにん}」讀作「じゅうはちにん」。' },
            { text: 'じゅうやにん', isCorrect: false, reason: '十八{じゅうはち}使用音讀「はち」。' },
            { text: 'じゅうはちじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'じゅうはっにん', isCorrect: false, reason: '十八人{じゅうはちにん}不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十八人{じゅうはちにん}」讀作「じゅうはちにん」。',
            relatedRules: ['人數的音讀規則']
        },
        sourceItem: { value: 18, kanji: '十八人', reading: 'じゅうはちにん' }
    },
    {
        id: 'people_19_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十九人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十九人」的正確讀音是？',
        options: [
            { text: 'じゅうきゅうにん', isCorrect: true, reason: '正確！「十九人{じゅうきゅうにん}」讀作「じゅうきゅうにん」。' },
            { text: 'じゅうくにん', isCorrect: false, reason: '十九{じゅうきゅう}使用「きゅう」不是「く」。' },
            { text: 'じゅうきゅうじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'とくにん', isCorrect: false, reason: '十使用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十九人{じゅうきゅうにん}」讀作「じゅうきゅうにん」。',
            relatedRules: ['人數的音讀規則']
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
        stem: '「四十人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「四十人」的正確讀音是？',
        options: [
            { text: 'よんじゅうにん', isCorrect: true, reason: '正確！「四十人{よんじゅうにん}」讀作「よんじゅうにん」。' },
            { text: 'しじゅうにん', isCorrect: false, reason: '陷阱！「しじゅう」聽起來像「始終」，使用「よんじゅう」。' },
            { text: 'よじゅうにん', isCorrect: false, reason: '四十{よんじゅう}使用「よん」不是「よ」。' },
            { text: 'よんじゅうじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十人{よんじゅうにん}」讀作「よんじゅうにん」，四十{よんじゅう}使用「よん」。',
            trapExplanation: '四十{よんじゅう}通常使用「よんじゅう」避免與「始終」混淆。',
            relatedRules: ['四十{よんじゅう}的讀法']
        },
        sourceItem: { value: 40, kanji: '四十人', reading: 'よんじゅうにん' }
    },
    {
        id: 'people_60_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「六十人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「六十人」的正確讀音是？',
        options: [
            { text: 'ろくじゅうにん', isCorrect: true, reason: '正確！「六十人{ろくじゅうにん}」讀作「ろくじゅうにん」。' },
            { text: 'むじゅうにん', isCorrect: false, reason: '六十{ろくじゅう}使用音讀「ろく」。' },
            { text: 'ろくじゅうじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'ろっじゅうにん', isCorrect: false, reason: '六十{ろくじゅう}不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六十人{ろくじゅうにん}」讀作「ろくじゅうにん」。',
            relatedRules: ['人數的音讀規則']
        },
        sourceItem: { value: 60, kanji: '六十人', reading: 'ろくじゅうにん' }
    },
    {
        id: 'people_70_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「七十人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「七十人」的正確讀音是？',
        options: [
            { text: 'しちじゅうにん / ななじゅうにん', isCorrect: true, reason: '正確！兩種讀法都可以。' },
            { text: 'なのじゅうにん', isCorrect: false, reason: '「なの」是日期讀法。' },
            { text: 'しちじゅうじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'ななじゅうじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七十人{しちじゅうにん}」可讀作「しちじゅうにん」或「ななじゅうにん」。',
            relatedRules: ['七{しち}の雙重讀法']
        },
        sourceItem: { value: 70, kanji: '七十人', reading: 'しちじゅうにん' }
    },
    {
        id: 'people_80_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「八十人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「八十人」的正確讀音是？',
        options: [
            { text: 'はちじゅうにん', isCorrect: true, reason: '正確！「八十人{はちじゅうにん}」讀作「はちじゅうにん」。' },
            { text: 'やじゅうにん', isCorrect: false, reason: '八十{はちじゅう}使用音讀「はち」。' },
            { text: 'はちじゅうじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'はっじゅうにん', isCorrect: false, reason: '八十{はちじゅう}不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八十人{はちじゅうにん}」讀作「はちじゅうにん」。',
            relatedRules: ['人數的音讀規則']
        },
        sourceItem: { value: 80, kanji: '八十人', reading: 'はちじゅうにん' }
    },
    {
        id: 'people_90_pron',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「九十人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「九十人」的正確讀音是？',
        options: [
            { text: 'きゅうじゅうにん', isCorrect: true, reason: '正確！「九十人{きゅうじゅうにん}」讀作「きゅうじゅうにん」。' },
            { text: 'くじゅうにん', isCorrect: false, reason: '九十{きゅうじゅう}使用「きゅう」不是「く」。' },
            { text: 'きゅうじゅうじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'ここのじゅうにん', isCorrect: false, reason: '九十{きゅうじゅう}使用音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九十人{きゅうじゅうにん}」讀作「きゅうじゅうにん」。',
            relatedRules: ['人數的音讀規則']
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
            { text: 'にじゅうごじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'にじゅうごにん', isCorrect: true, reason: '正確！班級有二十五個{にじゅうごにん}學生。' },
            { text: 'はたちごにん', isCorrect: false, reason: '「はたち」只用於年齡。' },
            { text: 'ふたじゅうごにん', isCorrect: false, reason: '二十{にじゅう}使用音讀。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「二十五人{にじゅうごにん}の学生{がくせい}」表示「二十五個{にじゅうごにん}學生」。',
            relatedRules: ['人數的讀法', '教室用語']
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
            { text: 'とおにん', isCorrect: false, reason: '人數使用音讀「じゅう」。' },
            { text: 'じゅうにん', isCorrect: true, reason: '正確！電梯{エレベーター}最多可以搭{のれます}十個人。' },
            { text: 'じゅうじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'じゅっにん', isCorrect: false, reason: '十人{じゅうにん}不促音化。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十人{じゅうにん}まで乗{の}れます」表示「最多可以搭{のる}十個人」。',
            relatedRules: ['人數的讀法', '電梯{エレベーター}標示']
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
            { text: 'じゅういつにん', isCorrect: false, reason: '十五{じゅうご}使用音讀「ご」。' },
            { text: 'じゅうごにん', isCorrect: true, reason: '正確！十五個人在排隊。' },
            { text: 'じゅうごじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'とごにん', isCorrect: false, reason: '十使用「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十五人{じゅうごにん}並{なら}んでいます」表示「十五個人在排隊」。',
            relatedRules: ['人數的讀法', '排隊表達']
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
            { text: 'ごひゃくじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'ごひゃくにん', isCorrect: true, reason: '正確！公司有五百個{ごひゃくにん}員工。' },
            { text: 'いつひゃくにん', isCorrect: false, reason: '五百{ごひゃく}使用音讀「ご」。' },
            { text: 'ごびゃくにん', isCorrect: false, reason: '五百{ごひゃく}不濁音化。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「五百人{ごひゃくにん}の社員{しゃいん}」表示「五百個{ごひゃくにん}員工」。',
            relatedRules: ['人數的讀法', '公司用語']
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
            { text: 'いっせんじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'せんにん', isCorrect: true, reason: '正確！演唱會來了約一千個人。' },
            { text: 'ちにん', isCorrect: false, reason: '千使用音讀「せん」。' },
            { text: 'いっせんにん', isCorrect: false, reason: '一千在人數前通常省略「いっ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「千人{せんにん}」或「一千人{いっせんにん}」表示「一千個人」。',
            relatedRules: ['人數的讀法', '大型活動']
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
            { text: 'ににん、みたり', isCorrect: false, reason: '二人{ふたり}使用訓讀、三人{さんにん}使用音讀。' },
            { text: 'ふたり、さんにん', isCorrect: true, reason: '正確！兩個大人、三個小孩。' },
            { text: 'にめい、さんめい', isCorrect: false, reason: '雖然「名{めい}」也可用，但答案{こたえ}應用「人{にん}」。' },
            { text: 'ふたり、みにん', isCorrect: false, reason: '三人{さんにん}使用音讀「さんにん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「大人{おとな}二人{ふたり}、子供{こども}三人{さんにん}」是飯店預約的常用表達。',
            relatedRules: ['人數的讀法', '飯店用語']
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
            { text: 'なのにん', isCorrect: false, reason: '「なの」是日期讀法。' },
            { text: 'しちにん / ななにん', isCorrect: true, reason: '正確！七個人面試。' },
            { text: 'しちじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'ななたり', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「七人{しちにん}の予定{よてい}です」表示「預計七個人」。',
            relatedRules: ['人數的讀法', '面試用語']
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
            { text: 'いつにん', isCorrect: false, reason: '人數使用音讀「ご」。' },
            { text: 'ごにん', isCorrect: true, reason: '正確！籃球{バスケットボール}一隊五個人。' },
            { text: 'ごじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'こにん', isCorrect: false, reason: '五使用濁音「ご」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '籃球{バスケットボール}一隊需要五人{ごにん}。',
            relatedRules: ['人數的讀法', '運動團隊']
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
            { text: 'じゅうしにん', isCorrect: false, reason: '陷阱！避免「しにん」的讀法。' },
            { text: 'じゅうよにん', isCorrect: true, reason: '正確！約十四個人{じゅうよにん}參加。' },
            { text: 'じゅうよんにん', isCorrect: false, reason: '十四人{じゅうよにん}使用「よ」不是「よん」。' },
            { text: 'といよにん', isCorrect: false, reason: '十使用「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十四人{じゅうよにん}ぐらい」表示「約十四個人{じゅうよにん}」。',
            trapExplanation: '包含「四{し}」的數字都使用「よ」。',
            relatedRules: ['四{し}の避諱', '派對計畫']
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
            { text: '1人、2人、4人、7人', isCorrect: true, reason: '正確！1人{ひとり}（ひとり）、2人{ふたり}（ふたり）是訓讀；4人{よにん}（よにん）避諱；7人{しちにん}（しちにん/ななにん）有雙重讀法。' },
            { text: '3人、5人、6人', isCorrect: false, reason: '這些都是規則的音讀。' },
            { text: '8人、9人、10人', isCorrect: false, reason: '這些都是規則的音讀。' },
            { text: '只有1人、2人', isCorrect: false, reason: '4人{よにん}和7人{しちにん}也有特殊注意事項。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '需要特別記憶的人數：1人{ひとり}（訓讀）、2人{ふたり}（訓讀）、4人{よにん}（避諱「し」）、7人{しちにん}（雙重讀法）。',
            trapExplanation: '這題測試對所有特殊讀法的理解。',
            relatedRules: ['人數的特殊規則', '訓讀vs音讀']
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
            { text: '表示國籍或民族時（如：日本人、アメリカ人）', isCorrect: true, reason: '正確！「〜人{じん}」表示國籍或民族（如：日本人{にほんじん}、アメリカ人{じん}）。' },
            { text: '表示人數時', isCorrect: false, reason: '人數使用「〜人{にん}」（如：三人{さんにん}）。' },
            { text: '數字後面接人時', isCorrect: false, reason: '數字後面接人{ひと}時使用「にん」。' },
            { text: '任何時候都可以', isCorrect: false, reason: '「じん」和「にん」有明確的使い分け。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「〜人{じん}」表示國籍或民族，「〜人{にん}」表示人數。例：「日本人{にほんじん}」vs「三人{さんにん}」。',
            trapExplanation: '這是常見混淆點，需要清楚區分。',
            relatedRules: ['「じん」vs「にん」', '人的讀法分類']
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
            { text: '七人で旅行しました', isCorrect: false, reason: '這是正確的。' },
            { text: '八人で会議をしました', isCorrect: false, reason: '這是正確的。' },
            { text: 'いちにんで住んでいます', isCorrect: true, reason: '錯誤！一人{ひとり}應該使用訓讀「ひとり」。' },
            { text: '九人で食事をしました', isCorrect: false, reason: '這是正確的。' }
        ],
        correctIndex: 2,
        explanation: {
            correctRule: '一人{ひとり}固定使用訓讀「ひとり」，不能使用音讀「いちにん」。',
            trapExplanation: '一人{ひとり}和二人{ふたり}是特殊訓讀。',
            relatedRules: ['一人{ひとり}的訓讀', '特殊讀法']
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
            { text: '十四人（じゅうしにん）', isCorrect: false, reason: '錯誤！避免「しにん」。' },
            { text: '二十四人（にじゅうしにん）', isCorrect: false, reason: '錯誤！避免「しにん」。' },
            { text: '四十四人（よんじゅうよにん）', isCorrect: true, reason: '正確！四十四人{よんじゅうよにん}使用「よん」和「よ」。' },
            { text: '四人（しにん）', isCorrect: false, reason: '錯誤！四人{よにん}讀作「よにん」。' }
        ],
        correctIndex: 2,
        explanation: {
            correctRule: '任何包含「四」的人數都避免「し」讀法，使用「よ」或「よん」。',
            trapExplanation: '這題測試對「四」避諱規則的全面理解。',
            relatedRules: ['四の避諱', '人數的讀法']
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
            { text: 'むにん', isCorrect: false, reason: '人數使用音讀「ろく」。' },
            { text: 'ろくにん', isCorrect: true, reason: '正確！六位大人預約。' },
            { text: 'ろくじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'ろくめい', isCorrect: false, reason: '雖然「名」也可用，但回答通常用「人」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「大人六人{ろくにん}」是預約時的常用表達。',
            relatedRules: ['人數的讀法', '預約用語']
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
            { text: 'いちおくにせんまんじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'いちおくにせんまんにん', isCorrect: true, reason: '正確！日本人口約一億兩千萬人。' },
            { text: 'ひとおくにせんまんにん', isCorrect: false, reason: '「一億」使用音讀「いち」。' },
            { text: 'いちおくふたせんまんにん', isCorrect: false, reason: '「二千」使用音讀「に」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '大數字的人數也使用「〜人{にん}」。',
            relatedRules: ['人數的讀法', '人口統計']
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
            { text: 'じゅうみにん', isCorrect: false, reason: '十三{じゅうさん}使用音讀。' },
            { text: 'じゅうさんにん', isCorrect: true, reason: '正確！小組有十三個人{じゅうさんにん}。' },
            { text: 'じゅうさんじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'とさんにん', isCorrect: false, reason: '十使用「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十三人{じゅうさんにん}」讀作「じゅうさんにん」。',
            relatedRules: ['人數的讀法']
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
            { text: 'いちにん', isCorrect: false, reason: '陷阱！一人{ひとり}使用訓讀「ひとり」。' },
            { text: 'ひとり', isCorrect: true, reason: '正確！一個人用餐。' },
            { text: 'いちめい', isCorrect: false, reason: '雖然「名{めい}」也可用，但通常回答「ひとり」。' },
            { text: 'ひとにん', isCorrect: false, reason: '不混合訓讀與音讀。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '一人{ひとり}固定使用訓讀「ひとり」。',
            trapExplanation: '即使在正式場合，一人{ひとり}也讀作「ひとり」。',
            relatedRules: ['一人{ひとり}的讀法', '餐廳{れすとらん}用語']
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
            { text: 'ににん', isCorrect: false, reason: '陷阱！二人{ふたり}使用訓讀「ふたり」。' },
            { text: 'ふたり', isCorrect: true, reason: '正確！兩個人結婚了。' },
            { text: 'にじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'ふたにん', isCorrect: false, reason: '不混合訓讀與音讀。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「私{わたし}たち二人{ふたり}」是情侶{カップル}或夫婦{ふうふ}常用表達。',
            trapExplanation: '二人{ふたり}固定使用訓讀「ふたり」。',
            relatedRules: ['二人{ふたり}的讀法', '結婚表達']
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
            { text: 'とおにん', isCorrect: false, reason: '人數使用音讀「じゅう」。' },
            { text: 'じゅうにん', isCorrect: true, reason: '正確！專案{プロジェクト}團隊由十個人組成。' },
            { text: 'じゅうじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'じゅっにん', isCorrect: false, reason: '十人{じゅうにん}不促音化。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十人{じゅうにん}で構成されています」表示「由十個人組成」。',
            relatedRules: ['人數的讀法', '團隊用語']
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
            { text: 'みたり', isCorrect: false, reason: '現代使用「さんにん」。' },
            { text: 'さんにん', isCorrect: true, reason: '正確！三個人在等候。' },
            { text: 'さんじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'みにん', isCorrect: false, reason: '三人{さんにん}使用音讀。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三人{さんにん}待っています」表示「三個人在等候」。',
            relatedRules: ['人數的讀法', '等候表達']
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
            { text: 'しにん', isCorrect: false, reason: '陷阱！「しにん」是禁忌讀法。' },
            { text: 'よにん', isCorrect: true, reason: '正確！四個人份的電影票{チケット}。' },
            { text: 'よんにん', isCorrect: false, reason: '四人{よにん}使用「よ」不是「よん」。' },
            { text: 'よったり', isCorrect: false, reason: '現代使用「よにん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「四人{よにん}分{ぶん}」表示「四個人份」。',
            trapExplanation: '四人{よにん}固定使用「よ」，避免「し」。',
            relatedRules: ['四人{よにん}的讀法', '購票用語']
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
            { text: 'はたちにん', isCorrect: false, reason: '「はたち」只用於年齡。' },
            { text: 'にじゅうにん', isCorrect: true, reason: '正確！巴士{バス}上坐了{のっていました}二十個人。' },
            { text: 'にじゅうじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'ふたじゅうにん', isCorrect: false, reason: '二十{にじゅう}使用音讀。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「二十人{にじゅうにん}乗{の}っていました」表示「二十個人坐著{のっていた}」。',
            relatedRules: ['人數的讀法', '交通用語']
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
            { text: 'じゅうふたり', isCorrect: false, reason: '十二{じゅうに}使用音讀。' },
            { text: 'じゅうににん', isCorrect: true, reason: '正確！生日會來了十二個人。' },
            { text: 'じゅうにじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'とにににん', isCorrect: false, reason: '十使用「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十二人{じゅうににん}来ました」表示「十二個人來了」。',
            relatedRules: ['人數的讀法', '派對用語']
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
            { text: 'さんじゅういつにん', isCorrect: false, reason: '五{ご}使用音讀「ご」。' },
            { text: 'さんじゅうごにん', isCorrect: true, reason: '正確！志工集合了三十五個人。' },
            { text: 'さんじゅうごじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'みじゅうごにん', isCorrect: false, reason: '三十{さんじゅう}使用音讀。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三十五人{さんじゅうごにん}集まりました」表示「三十五個人集合了」。',
            relatedRules: ['人數的讀法', '志工活動']
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
            { text: 'ににん', isCorrect: false, reason: '二人{ふたり}使用訓讀「ふたり」。' },
            { text: 'ふたり', isCorrect: true, reason: '正確！預計錄取兩個人。' },
            { text: 'にじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'ふたにん', isCorrect: false, reason: '不混合訓讀與音讀。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「二人{ふたり}採用する予定です」表示「預計錄取兩個人」。',
            relatedRules: ['二人{ふたり}的讀法', '求職用語']
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
            { text: 'はっぴゃくじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'はっぴゃくにん', isCorrect: true, reason: '正確！學校有八百個{はっぴゃくにん}學生。' },
            { text: 'やひゃくにん', isCorrect: false, reason: '八百{はっぴゃく}使用音讀。' },
            { text: 'はちひゃくにん', isCorrect: false, reason: '八百促音化為「はっぴゃく」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八百人{はっぴゃくにん}」讀作「はっぴゃくにん」（八百促音化）。',
            relatedRules: ['人數的讀法', '學校用語']
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
            { text: '一人(ひとり)、二人(ふたり)、三人(さんにん)', isCorrect: true, reason: '正確！這三個讀法都正確。' },
            { text: '一人(いちにん)、二人(ににん)、三人(さんにん)', isCorrect: false, reason: '一人{ひとり}、二人{ふたり}使用訓讀。' },
            { text: '一人(ひとり)、二人(ににん)、三人(さんにん)', isCorrect: false, reason: '二人{ふたり}使用訓讀「ふたり」。' },
            { text: '一人(いちにん)、二人(ふたり)、三人(みにん)', isCorrect: false, reason: '一人{ひとり}使用訓讀，三人{さんにん}使用音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '1人{ひとり}（ひとり）、2人{ふたり}（ふたり）使用訓讀，3人{さんにん}開始使用音讀（さんにん）。',
            trapExplanation: '這是人數量詞最基本的規則。',
            relatedRules: ['訓讀vs音讀', '人數的基本規則']
        },
        sourceItem: { value: 0, kanji: '一人・二人・三人', reading: 'ひとり・ふたり・さんにん' }
    },
    {
        id: 'people_extra_final_review',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「何人」（人数{にんずう}を聞{き}く）の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「何人」（詢問人數）的正確讀法是？',
        options: [
            { text: 'なんにん', isCorrect: true, reason: '正確！詢問人數時讀作「なんにん」。' },
            { text: 'なにじん', isCorrect: false, reason: '「なにじん」是詢問「什麼人{じん}」（國籍）。' },
            { text: 'いくにん', isCorrect: false, reason: '人數疑問詞使用「なんにん」。' },
            { text: 'どのにん', isCorrect: false, reason: '這不是正確疑問詞。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何人{なんにん}」（なんにん）詢問人數，「何人{なにじん}」（なにじん）詢問國籍。',
            relatedRules: ['「なんにん」vs「なにじん」', '疑問詞の使い分け']
        },
        sourceItem: { value: 0, kanji: '何人', reading: 'なんにん' }
    },

    // ===== 擴充題庫 (101-135) =====
    {
        id: 'people_ext_01',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: true,
        stem: '「四人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「四人」的正確讀音是？',
        options: [
            { text: 'よにん', isCorrect: true, reason: '正確！「四人」讀作「よにん」。' },
            { text: 'しにん', isCorrect: false, reason: '陷阱！「死人」諧音，避免使用「しにん」。' },
            { text: 'よんにん', isCorrect: false, reason: '四人的4讀「よ」，不是「よん」。' },
            { text: 'よったり', isCorrect: false, reason: '訓讀只用於1人、2人。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四人」讀作「よにん」，4使用「よ」避免「しにん（死人）」諧音。',
            trapExplanation: '這是人數量詞重要的特殊讀法。',
            relatedRules: ['四人的讀法', '避諱讀法']
        },
        sourceItem: { value: 4, kanji: '四人', reading: 'よにん' }
    },
    {
        id: 'people_ext_02',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '家族は＿＿です。',
        stem_zh: '家裡有五個人。',
        options: [
            { text: 'ごにん', isCorrect: true, reason: '正確！「五人」讀作「ごにん」。' },
            { text: 'いつにん', isCorrect: false, reason: '人數用音讀「ご」。' },
            { text: 'いつたり', isCorrect: false, reason: '訓讀只用於1人、2人。' },
            { text: 'ごじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五人」讀作「ごにん」，是一般音讀。',
            relatedRules: ['人數的讀法', '5人的讀法']
        },
        sourceItem: { value: 5, kanji: '五人', reading: 'ごにん' }
    },
    {
        id: 'people_ext_03',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '班上有幾個人？',
        stem_zh: '班上有幾個人？',
        dialogue: {
            speakerA: 'クラスには何人いますか？',
            speakerB: '＿＿います。（六個人）'
        },
        options: [
            { text: 'ろくにん', isCorrect: true, reason: '正確！「六人」讀作「ろくにん」。' },
            { text: 'むにん', isCorrect: false, reason: '人數用音讀「ろく」。' },
            { text: 'むたり', isCorrect: false, reason: '訓讀只用於1人、2人。' },
            { text: 'ろくじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六人」讀作「ろくにん」，是一般音讀。',
            relatedRules: ['人數的讀法', '6人的讀法']
        },
        sourceItem: { value: 6, kanji: '六人', reading: 'ろくにん' }
    },
    {
        id: 'people_ext_04',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「七人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「七人」的正確讀音是？',
        options: [
            { text: 'しちにん / ななにん', isCorrect: true, reason: '正確！「七人」可讀「しちにん」或「ななにん」。' },
            { text: 'なのにん', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'なのか', isCorrect: false, reason: '「なのか」是日期讀法。' },
            { text: 'ななじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七人」可讀「しちにん」或「ななにん」，兩者皆可。',
            relatedRules: ['人數的讀法', '7人的讀法']
        },
        sourceItem: { value: 7, kanji: '七人', reading: 'しちにん/ななにん' }
    },
    {
        id: 'people_ext_05',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: 'チームは＿＿で構成されています。',
        stem_zh: '團隊由八個人組成。',
        options: [
            { text: 'はちにん', isCorrect: true, reason: '正確！「八人」讀作「はちにん」。' },
            { text: 'やにん', isCorrect: false, reason: '人數用音讀「はち」。' },
            { text: 'やったり', isCorrect: false, reason: '訓讀只用於1人、2人。' },
            { text: 'はちじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八人」讀作「はちにん」，是一般音讀。',
            relatedRules: ['人數的讀法', '8人的讀法']
        },
        sourceItem: { value: 8, kanji: '八人', reading: 'はちにん' }
    },
    {
        id: 'people_ext_06',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '會議有幾個人參加？',
        stem_zh: '會議有幾個人參加？',
        dialogue: {
            speakerA: '会議には何人参加しましたか？',
            speakerB: '＿＿参加しました。（九個人）'
        },
        options: [
            { text: 'きゅうにん / くにん', isCorrect: true, reason: '正確！「九人」可讀「きゅうにん」或「くにん」。' },
            { text: 'ここのにん', isCorrect: false, reason: '人數用音讀。' },
            { text: 'ここのたり', isCorrect: false, reason: '訓讀只用於1人、2人。' },
            { text: 'くじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九人」可讀「きゅうにん」或「くにん」，兩者皆可。',
            relatedRules: ['人數的讀法', '9人的讀法']
        },
        sourceItem: { value: 9, kanji: '九人', reading: 'きゅうにん/くにん' }
    },
    {
        id: 'people_ext_07',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十人」的正確讀音是？',
        options: [
            { text: 'じゅうにん', isCorrect: true, reason: '正確！「十人」讀作「じゅうにん」。' },
            { text: 'とおにん', isCorrect: false, reason: '人數用音讀「じゅう」。' },
            { text: 'とたり', isCorrect: false, reason: '訓讀只用於1人、2人。' },
            { text: 'じゅうじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十人」讀作「じゅうにん」，是一般音讀。',
            relatedRules: ['人數的讀法', '10人的讀法']
        },
        sourceItem: { value: 10, kanji: '十人', reading: 'じゅうにん' }
    },
    {
        id: 'people_ext_08',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: true,
        stem: '映画館には＿＿がいました。',
        stem_zh: '電影院有一百個人。',
        options: [
            { text: 'ひゃくにん', isCorrect: true, reason: '正確！「百人」讀作「ひゃくにん」。' },
            { text: 'いっぴゃくにん', isCorrect: false, reason: '「百」直接讀「ひゃく」，不加「いっ」。' },
            { text: 'ももにん', isCorrect: false, reason: '人數用音讀。' },
            { text: 'ひゃくじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「百人」讀作「ひゃくにん」。',
            trapExplanation: '「百」讀「ひゃく」，不是「いっぴゃく」。',
            relatedRules: ['人數的讀法', '100人的讀法']
        },
        sourceItem: { value: 100, kanji: '百人', reading: 'ひゃくにん' }
    },
    {
        id: 'people_ext_09',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: true,
        stem: '學校有多少學生？',
        stem_zh: '學校有多少學生？',
        dialogue: {
            speakerA: '学校には何人の学生がいますか？',
            speakerB: '＿＿います。（一千人）'
        },
        options: [
            { text: 'せんにん', isCorrect: true, reason: '正確！「千人」讀作「せんにん」。' },
            { text: 'いっせんにん', isCorrect: false, reason: '「千」直接讀「せん」。' },
            { text: 'ちにん', isCorrect: false, reason: '「千」讀「せん」。' },
            { text: 'せんじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「千人」讀作「せんにん」。',
            trapExplanation: '「千」讀「せん」，不是「いっせん」。',
            relatedRules: ['人數的讀法', '1000人的讀法']
        },
        sourceItem: { value: 1000, kanji: '千人', reading: 'せんにん' }
    },
    {
        id: 'people_ext_10',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十一人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十一人」的正確讀音是？',
        options: [
            { text: 'じゅういちにん', isCorrect: true, reason: '正確！「十一人」讀作「じゅういちにん」。' },
            { text: 'じゅうひとり', isCorrect: false, reason: '11人以上用音讀。' },
            { text: 'とおひとり', isCorrect: false, reason: '11人以上用音讀。' },
            { text: 'じゅういちじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十一人」讀作「じゅういちにん」，11人開始全部用音讀。',
            relatedRules: ['人數的讀法', '11人的讀法']
        },
        sourceItem: { value: 11, kanji: '十一人', reading: 'じゅういちにん' }
    },
    {
        id: 'people_ext_11',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '合唱團有＿＿。',
        stem_zh: '合唱團有二十個人。',
        options: [
            { text: 'にじゅうにん', isCorrect: true, reason: '正確！「二十人」讀作「にじゅうにん」。' },
            { text: 'ふたじゅうにん', isCorrect: false, reason: '「二十」讀音讀「にじゅう」。' },
            { text: 'にじゅうふたり', isCorrect: false, reason: '超過2人後用音讀「にん」。' },
            { text: 'にじゅうじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十人」讀作「にじゅうにん」。',
            relatedRules: ['人數的讀法', '20人的讀法']
        },
        sourceItem: { value: 20, kanji: '二十人', reading: 'にじゅうにん' }
    },
    {
        id: 'people_ext_12',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: true,
        stem: '派對邀請了多少人？',
        stem_zh: '派對邀請了多少人？',
        dialogue: {
            speakerA: 'パーティーには何人招待しましたか？',
            speakerB: '＿＿招待しました。（十四個人）'
        },
        options: [
            { text: 'じゅうよにん', isCorrect: true, reason: '正確！「十四人」讀作「じゅうよにん」。' },
            { text: 'じゅうしにん', isCorrect: false, reason: '陷阱！四人的4讀「よ」，避免「しにん」。' },
            { text: 'じゅうよんにん', isCorrect: false, reason: '人數的4讀「よ」，不是「よん」。' },
            { text: 'とおよにん', isCorrect: false, reason: '「十」讀「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十四人」讀作「じゅうよにん」，保持4的「よ」讀法。',
            trapExplanation: '任何含4的人數，4都讀「よ」。',
            relatedRules: ['人數的讀法', '14人的讀法']
        },
        sourceItem: { value: 14, kanji: '十四人', reading: 'じゅうよにん' }
    },
    {
        id: 'people_ext_13',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: true,
        stem: '「二十四人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「二十四人」的正確讀音是？',
        options: [
            { text: 'にじゅうよにん', isCorrect: true, reason: '正確！「二十四人」讀作「にじゅうよにん」。' },
            { text: 'にじゅうしにん', isCorrect: false, reason: '陷阱！4讀「よ」避免「しにん」。' },
            { text: 'にじゅうよんにん', isCorrect: false, reason: '人數的4讀「よ」。' },
            { text: 'ふたじゅうよにん', isCorrect: false, reason: '「二十」讀「にじゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十四人」讀作「にじゅうよにん」。',
            trapExplanation: '任何含4的人數，4都讀「よ」。',
            relatedRules: ['人數的讀法', '24人的讀法']
        },
        sourceItem: { value: 24, kanji: '二十四人', reading: 'にじゅうよにん' }
    },
    {
        id: 'people_ext_14',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: 'バスには＿＿乗っています。',
        stem_zh: '公車上有三十個人。',
        options: [
            { text: 'さんじゅうにん', isCorrect: true, reason: '正確！「三十人」讀作「さんじゅうにん」。' },
            { text: 'みじゅうにん', isCorrect: false, reason: '「三十」讀「さんじゅう」。' },
            { text: 'さんじゅうたり', isCorrect: false, reason: '超過2人用「にん」。' },
            { text: 'さんじゅうじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十人」讀作「さんじゅうにん」。',
            relatedRules: ['人數的讀法', '30人的讀法']
        },
        sourceItem: { value: 30, kanji: '三十人', reading: 'さんじゅうにん' }
    },
    {
        id: 'people_ext_15',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: true,
        stem: '公司有多少員工？',
        stem_zh: '公司有多少員工？',
        dialogue: {
            speakerA: '会社には何人の社員がいますか？',
            speakerB: '＿＿います。（四十四個人）'
        },
        options: [
            { text: 'よんじゅうよにん', isCorrect: true, reason: '正確！「四十四人」讀作「よんじゅうよにん」。' },
            { text: 'しじゅうしにん', isCorrect: false, reason: '陷阱！4讀「よん」或「よ」避免「し」。' },
            { text: 'よんじゅうしにん', isCorrect: false, reason: '個位的4也讀「よ」。' },
            { text: 'しじゅうよにん', isCorrect: false, reason: '十位的4讀「よん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十四人」讀作「よんじゅうよにん」。',
            trapExplanation: '十位4讀「よん」，個位4讀「よ」。',
            relatedRules: ['人數的讀法', '44人的讀法']
        },
        sourceItem: { value: 44, kanji: '四十四人', reading: 'よんじゅうよにん' }
    },
    {
        id: 'people_ext_16',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「五十人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「五十人」的正確讀音是？',
        options: [
            { text: 'ごじゅうにん', isCorrect: true, reason: '正確！「五十人」讀作「ごじゅうにん」。' },
            { text: 'いつじゅうにん', isCorrect: false, reason: '「五十」讀「ごじゅう」。' },
            { text: 'ごじっにん', isCorrect: false, reason: '「五十」不促音化。' },
            { text: 'ごじゅうじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十人」讀作「ごじゅうにん」。',
            relatedRules: ['人數的讀法', '50人的讀法']
        },
        sourceItem: { value: 50, kanji: '五十人', reading: 'ごじゅうにん' }
    },
    {
        id: 'people_ext_17',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '電車には＿＿乗っています。',
        stem_zh: '電車上有六十個人。',
        options: [
            { text: 'ろくじゅうにん', isCorrect: true, reason: '正確！「六十人」讀作「ろくじゅうにん」。' },
            { text: 'むじゅうにん', isCorrect: false, reason: '「六十」讀「ろくじゅう」。' },
            { text: 'ろくじっにん', isCorrect: false, reason: '「六十」不促音化。' },
            { text: 'ろくじゅうじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六十人」讀作「ろくじゅうにん」。',
            relatedRules: ['人數的讀法', '60人的讀法']
        },
        sourceItem: { value: 60, kanji: '六十人', reading: 'ろくじゅうにん' }
    },
    {
        id: 'people_ext_18',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '這個部門有多少人？',
        stem_zh: '這個部門有多少人？',
        dialogue: {
            speakerA: 'この部署には何人いますか？',
            speakerB: '＿＿います。（七十人）'
        },
        options: [
            { text: 'しちじゅうにん / ななじゅうにん', isCorrect: true, reason: '正確！「七十人」可讀兩種。' },
            { text: 'なのじゅうにん', isCorrect: false, reason: '「七十」讀「しちじゅう」或「ななじゅう」。' },
            { text: 'しちじっにん', isCorrect: false, reason: '「七十」不促音化。' },
            { text: 'しちじゅうじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七十人」可讀「しちじゅうにん」或「ななじゅうにん」。',
            relatedRules: ['人數的讀法', '70人的讀法']
        },
        sourceItem: { value: 70, kanji: '七十人', reading: 'しちじゅうにん/ななじゅうにん' }
    },
    {
        id: 'people_ext_19',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「八十人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「八十人」的正確讀音是？',
        options: [
            { text: 'はちじゅうにん', isCorrect: true, reason: '正確！「八十人」讀作「はちじゅうにん」。' },
            { text: 'やじゅうにん', isCorrect: false, reason: '「八十」讀「はちじゅう」。' },
            { text: 'はちじっにん', isCorrect: false, reason: '「八十」不促音化。' },
            { text: 'はちじゅうじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八十人」讀作「はちじゅうにん」。',
            relatedRules: ['人數的讀法', '80人的讀法']
        },
        sourceItem: { value: 80, kanji: '八十人', reading: 'はちじゅうにん' }
    },
    {
        id: 'people_ext_20',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '飛機上有＿＿。',
        stem_zh: '飛機上有九十個人。',
        options: [
            { text: 'きゅうじゅうにん', isCorrect: true, reason: '正確！「九十人」讀作「きゅうじゅうにん」。' },
            { text: 'くじゅうにん', isCorrect: false, reason: '「九十」一般讀「きゅうじゅう」。' },
            { text: 'ここのじゅうにん', isCorrect: false, reason: '「九十」用音讀。' },
            { text: 'きゅうじゅうじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九十人」讀作「きゅうじゅうにん」。',
            relatedRules: ['人數的讀法', '90人的讀法']
        },
        sourceItem: { value: 90, kanji: '九十人', reading: 'きゅうじゅうにん' }
    },
    {
        id: 'people_ext_21',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: true,
        stem: '餐廳可容納多少人？',
        stem_zh: '餐廳可容納多少人？',
        dialogue: {
            speakerA: 'レストランには何人座れますか？',
            speakerB: '＿＿座れます。（一百四十個人）'
        },
        options: [
            { text: 'ひゃくよんじゅうにん', isCorrect: true, reason: '正確！「百四十人」讀作「ひゃくよんじゅうにん」。' },
            { text: 'いっぴゃくしじゅうにん', isCorrect: false, reason: '陷阱！「百」讀「ひゃく」，40讀「よんじゅう」。' },
            { text: 'ひゃくしじゅうにん', isCorrect: false, reason: '40讀「よんじゅう」避免「し」。' },
            { text: 'ひゃくよんじゅうじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「百四十人」讀作「ひゃくよんじゅうにん」。',
            trapExplanation: '40讀「よんじゅう」避免「しじゅう」。',
            relatedRules: ['人數的讀法', '140人的讀法']
        },
        sourceItem: { value: 140, kanji: '百四十人', reading: 'ひゃくよんじゅうにん' }
    },
    {
        id: 'people_ext_22',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: true,
        stem: '「三百人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「三百人」的正確讀音是？',
        options: [
            { text: 'さんびゃくにん', isCorrect: true, reason: '正確！「三百人」讀作「さんびゃくにん」。' },
            { text: 'さんひゃくにん', isCorrect: false, reason: '陷阱！「三百」濁音化為「さんびゃく」。' },
            { text: 'みひゃくにん', isCorrect: false, reason: '「三百」讀「さんびゃく」。' },
            { text: 'さんびゃくじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三百人」讀作「さんびゃくにん」，「三百」濁音化。',
            trapExplanation: '3、6、8百的「百」會變化。',
            relatedRules: ['人數的讀法', '300人的讀法']
        },
        sourceItem: { value: 300, kanji: '三百人', reading: 'さんびゃくにん' }
    },
    {
        id: 'people_ext_23',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: true,
        stem: '演唱會有＿＿。',
        stem_zh: '演唱會有六百個人。',
        options: [
            { text: 'ろっぴゃくにん', isCorrect: true, reason: '正確！「六百人」讀作「ろっぴゃくにん」。' },
            { text: 'ろくひゃくにん', isCorrect: false, reason: '陷阱！「六百」促音+半濁音化。' },
            { text: 'むひゃくにん', isCorrect: false, reason: '「六」讀「ろく」。' },
            { text: 'ろっぴゃくじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六百人」讀作「ろっぴゃくにん」，「六百」促音+半濁音化。',
            trapExplanation: '6百讀「ろっぴゃく」。',
            relatedRules: ['人數的讀法', '600人的讀法']
        },
        sourceItem: { value: 600, kanji: '六百人', reading: 'ろっぴゃくにん' }
    },
    {
        id: 'people_ext_24',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: true,
        stem: '球場有多少觀眾？',
        stem_zh: '球場有多少觀眾？',
        dialogue: {
            speakerA: 'スタジアムには何人の観客がいますか？',
            speakerB: '＿＿います。（八百人）'
        },
        options: [
            { text: 'はっぴゃくにん', isCorrect: true, reason: '正確！「八百人」讀作「はっぴゃくにん」。' },
            { text: 'はちひゃくにん', isCorrect: false, reason: '陷阱！「八百」促音+半濁音化。' },
            { text: 'やひゃくにん', isCorrect: false, reason: '「八」讀「はち」。' },
            { text: 'はっぴゃくじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八百人」讀作「はっぴゃくにん」，「八百」促音+半濁音化。',
            trapExplanation: '8百讀「はっぴゃく」。',
            relatedRules: ['人數的讀法', '800人的讀法']
        },
        sourceItem: { value: 800, kanji: '八百人', reading: 'はっぴゃくにん' }
    },
    {
        id: 'people_ext_25',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: true,
        stem: '「三千人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「三千人」的正確讀音是？',
        options: [
            { text: 'さんぜんにん', isCorrect: true, reason: '正確！「三千人」讀作「さんぜんにん」。' },
            { text: 'さんせんにん', isCorrect: false, reason: '陷阱！「三千」濁音化為「さんぜん」。' },
            { text: 'みせんにん', isCorrect: false, reason: '「三千」讀「さんぜん」。' },
            { text: 'さんぜんじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三千人」讀作「さんぜんにん」，「三千」濁音化。',
            trapExplanation: '3千讀「さんぜん」。',
            relatedRules: ['人數的讀法', '3000人的讀法']
        },
        sourceItem: { value: 3000, kanji: '三千人', reading: 'さんぜんにん' }
    },
    {
        id: 'people_ext_26',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: true,
        stem: '這個城市有＿＿。',
        stem_zh: '這個城市有八千個人。',
        options: [
            { text: 'はっせんにん', isCorrect: true, reason: '正確！「八千人」讀作「はっせんにん」。' },
            { text: 'はちせんにん', isCorrect: false, reason: '陷阱！「八千」促音化為「はっせん」。' },
            { text: 'やせんにん', isCorrect: false, reason: '「八」讀「はち」。' },
            { text: 'はっせんじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八千人」讀作「はっせんにん」，「八千」促音化。',
            trapExplanation: '8千讀「はっせん」。',
            relatedRules: ['人數的讀法', '8000人的讀法']
        },
        sourceItem: { value: 8000, kanji: '八千人', reading: 'はっせんにん' }
    },
    {
        id: 'people_ext_27',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '這場活動有多少人參加？',
        stem_zh: '這場活動有多少人參加？',
        dialogue: {
            speakerA: 'このイベントには何人参加しましたか？',
            speakerB: '＿＿参加しました。（一萬人）'
        },
        options: [
            { text: 'いちまんにん', isCorrect: true, reason: '正確！「一萬人」讀作「いちまんにん」。' },
            { text: 'いっまんにん', isCorrect: false, reason: '「一萬」讀「いちまん」，不促音化。' },
            { text: 'ひとまんにん', isCorrect: false, reason: '「一萬」用音讀。' },
            { text: 'いちまんじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一萬人」讀作「いちまんにん」。',
            relatedRules: ['人數的讀法', '10000人的讀法']
        },
        sourceItem: { value: 10000, kanji: '一万人', reading: 'いちまんにん' }
    },
    {
        id: 'people_ext_28',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「何人（詢問國籍）」的讀音是？',
        stem_zh: '「何人（詢問國籍）」的讀音是？',
        options: [
            { text: 'なにじん', isCorrect: true, reason: '正確！詢問國籍時讀「なにじん」。' },
            { text: 'なんにん', isCorrect: false, reason: '「なんにん」是問人數。' },
            { text: 'なにか', isCorrect: false, reason: '這是「什麼」的讀法。' },
            { text: 'どのにん', isCorrect: false, reason: '這不是正確疑問詞。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何人」讀「なにじん」時是問國籍，讀「なんにん」時是問人數。',
            relatedRules: ['なんにん vs なにじん', '疑問詞の使い分け']
        },
        sourceItem: { value: 0, kanji: '何人（國籍）', reading: 'なにじん' }
    },
    {
        id: 'people_ext_29',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '總復習：1人和2人使用什麼讀法？',
        stem_zh: '總復習：1人和2人使用什麼讀法？',
        options: [
            { text: '訓讀（ひとり、ふたり）', isCorrect: true, reason: '正確！1人、2人固定使用訓讀。' },
            { text: '音讀（いちにん、ににん）', isCorrect: false, reason: '1人、2人不用音讀。' },
            { text: '兩者皆可', isCorrect: false, reason: '1人、2人固定用訓讀。' },
            { text: '沒有固定規則', isCorrect: false, reason: '有明確規則。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '1人（ひとり）、2人（ふたり）固定使用訓讀系統。',
            relatedRules: ['人數的訓讀規則', '1人、2人的特殊讀法']
        },
        sourceItem: { value: 'review_kun', kanji: '訓讀', reading: 'ひとり、ふたり' }
    },
    {
        id: 'people_ext_30',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '總復習：4人為什麼讀「よにん」？',
        stem_zh: '總復習：4人為什麼讀「よにん」？',
        dialogue: {
            speakerA: '「四人」はなぜ「よにん」と読みますか？',
            speakerB: '＿＿からです。'
        },
        options: [
            { text: '避免「しにん（死人）」諧音', isCorrect: true, reason: '正確！避免不吉利的諧音。' },
            { text: '訓讀系統', isCorrect: false, reason: '4人用音讀，只是4讀「よ」。' },
            { text: '沒有特別原因', isCorrect: false, reason: '有避諱的原因。' },
            { text: '發音容易', isCorrect: false, reason: '主要是避諱原因。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '4人讀「よにん」避免「しにん」與「死人」諧音。',
            relatedRules: ['四人的讀法', '避諱讀法']
        },
        sourceItem: { value: 'review_4', kanji: '四人', reading: 'よにん' }
    },
    {
        id: 'people_ext_31',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '總復習：「〜人」用於人數時讀什麼？',
        stem_zh: '總復習：「〜人」用於人數時讀什麼？',
        options: [
            { text: 'にん（3人以上）', isCorrect: true, reason: '正確！3人開始用「にん」。' },
            { text: 'じん', isCorrect: false, reason: '「じん」用於國籍等。' },
            { text: 'り', isCorrect: false, reason: '只有1人、2人用訓讀「り」。' },
            { text: '沒有固定讀法', isCorrect: false, reason: '有明確規則。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '3人以上的「人」讀「にん」，1人2人讀「り」（ひとり、ふたり）。',
            relatedRules: ['人數的讀法規則', '〜人の讀み分け']
        },
        sourceItem: { value: 'review_nin', kanji: '〜人', reading: 'にん' }
    },
    {
        id: 'people_ext_32',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '總復習：「〜人」用於國籍時讀什麼？',
        stem_zh: '總復習：「〜人」用於國籍時讀什麼？',
        options: [
            { text: 'じん（日本人、台湾人等）', isCorrect: true, reason: '正確！國籍用「じん」。' },
            { text: 'にん', isCorrect: false, reason: '「にん」用於人數。' },
            { text: 'り', isCorrect: false, reason: '訓讀只用於1人、2人。' },
            { text: '沒有固定讀法', isCorrect: false, reason: '有明確規則。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '國籍的「人」讀「じん」：日本人（にほんじん）、台湾人（たいわんじん）等。',
            relatedRules: ['〜人の讀み分け', '國籍の表現']
        },
        sourceItem: { value: 'review_jin', kanji: '〜人（國籍）', reading: 'じん' }
    },
    {
        id: 'people_ext_33',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '總復習：7人有幾種讀法？',
        stem_zh: '總復習：7人有幾種讀法？',
        dialogue: {
            speakerA: '「七人」は何通りの読み方がありますか？',
            speakerB: '＿＿あります。'
        },
        options: [
            { text: '兩種（しちにん、ななにん）', isCorrect: true, reason: '正確！7人可讀兩種。' },
            { text: '只有一種', isCorrect: false, reason: '7人有兩種讀法。' },
            { text: '三種', isCorrect: false, reason: '主要是兩種。' },
            { text: '沒有固定讀法', isCorrect: false, reason: '有明確的兩種讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '7人可讀「しちにん」或「ななにん」，兩者皆可。',
            relatedRules: ['七人的讀法', '7の讀み方']
        },
        sourceItem: { value: 'review_7', kanji: '七人', reading: 'しちにん/ななにん' }
    },
    {
        id: 'people_ext_34',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '總復習：9人有幾種讀法？',
        stem_zh: '總復習：9人有幾種讀法？',
        options: [
            { text: '兩種（きゅうにん、くにん）', isCorrect: true, reason: '正確！9人可讀兩種。' },
            { text: '只有一種', isCorrect: false, reason: '9人有兩種讀法。' },
            { text: '三種', isCorrect: false, reason: '主要是兩種。' },
            { text: '沒有固定讀法', isCorrect: false, reason: '有明確的兩種讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '9人可讀「きゅうにん」或「くにん」，兩者皆可。',
            relatedRules: ['九人的讀法', '9の讀み方']
        },
        sourceItem: { value: 'review_9', kanji: '九人', reading: 'きゅうにん/くにん' }
    },
    {
        id: 'people_ext_35',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '總復習：從幾人開始使用音讀「にん」？',
        stem_zh: '總復習：從幾人開始使用音讀「にん」？',
        options: [
            { text: '3人（さんにん）', isCorrect: true, reason: '正確！3人開始用音讀。' },
            { text: '1人', isCorrect: false, reason: '1人用訓讀「ひとり」。' },
            { text: '4人', isCorrect: false, reason: '3人開始就用音讀。' },
            { text: '10人', isCorrect: false, reason: '3人開始就用音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '1人（ひとり）、2人（ふたり）用訓讀，3人（さんにん）開始用音讀。',
            relatedRules: ['人數的讀法規則', '訓讀→音讀の切り替え']
        },
        sourceItem: { value: 'review_start', kanji: '三人', reading: 'さんにん' }
    },

    // ===== 擴充題庫 (136-170) =====
    {
        id: 'people_ext_36',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: true,
        stem: '婚禮有多少賓客？',
        stem_zh: '婚禮有多少賓客？',
        dialogue: {
            speakerA: '結婚式には何人のゲストが来ましたか？',
            speakerB: '＿＿来ました。（二百四十個人）'
        },
        options: [
            { text: 'にひゃくよんじゅうにん', isCorrect: true, reason: '正確！「二百四十人」讀作「にひゃくよんじゅうにん」。' },
            { text: 'ふたひゃくしじゅうにん', isCorrect: false, reason: '陷阱！「二百」讀「にひゃく」，40讀「よんじゅう」。' },
            { text: 'にひゃくしじゅうにん', isCorrect: false, reason: '40讀「よんじゅう」避免「し」。' },
            { text: 'にひゃくよんじゅうじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二百四十人」讀作「にひゃくよんじゅうにん」。',
            trapExplanation: '40讀「よんじゅう」避免「しじゅう」。',
            relatedRules: ['人數的讀法', '240人的讀法']
        },
        sourceItem: { value: 240, kanji: '二百四十人', reading: 'にひゃくよんじゅうにん' }
    },
    {
        id: 'people_ext_37',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十二人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十二人」的正確讀音是？',
        options: [
            { text: 'じゅうににん', isCorrect: true, reason: '正確！「十二人」讀作「じゅうににん」。' },
            { text: 'じゅうふたり', isCorrect: false, reason: '12人用音讀。' },
            { text: 'とおふたり', isCorrect: false, reason: '12人用音讀。' },
            { text: 'じゅうにじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十二人」讀作「じゅうににん」。',
            relatedRules: ['人數的讀法', '12人的讀法']
        },
        sourceItem: { value: 12, kanji: '十二人', reading: 'じゅうににん' }
    },
    {
        id: 'people_ext_38',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '這個課程有＿＿報名。',
        stem_zh: '這個課程有十三個人報名。',
        options: [
            { text: 'じゅうさんにん', isCorrect: true, reason: '正確！「十三人」讀作「じゅうさんにん」。' },
            { text: 'じゅうみにん', isCorrect: false, reason: '「三」讀「さん」。' },
            { text: 'とおさんにん', isCorrect: false, reason: '「十」讀「じゅう」。' },
            { text: 'じゅうさんじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十三人」讀作「じゅうさんにん」。',
            relatedRules: ['人數的讀法', '13人的讀法']
        },
        sourceItem: { value: 13, kanji: '十三人', reading: 'じゅうさんにん' }
    },
    {
        id: 'people_ext_39',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '籃球隊有多少人？',
        stem_zh: '籃球隊有多少人？',
        dialogue: {
            speakerA: 'バスケットボールチームには何人いますか？',
            speakerB: '＿＿います。（十五個人）'
        },
        options: [
            { text: 'じゅうごにん', isCorrect: true, reason: '正確！「十五人」讀作「じゅうごにん」。' },
            { text: 'じゅういつにん', isCorrect: false, reason: '「五」讀「ご」。' },
            { text: 'とおごにん', isCorrect: false, reason: '「十」讀「じゅう」。' },
            { text: 'じゅうごじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十五人」讀作「じゅうごにん」。',
            relatedRules: ['人數的讀法', '15人的讀法']
        },
        sourceItem: { value: 15, kanji: '十五人', reading: 'じゅうごにん' }
    },
    {
        id: 'people_ext_40',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十六人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十六人」的正確讀音是？',
        options: [
            { text: 'じゅうろくにん', isCorrect: true, reason: '正確！「十六人」讀作「じゅうろくにん」。' },
            { text: 'じゅうむにん', isCorrect: false, reason: '「六」讀「ろく」。' },
            { text: 'とおろくにん', isCorrect: false, reason: '「十」讀「じゅう」。' },
            { text: 'じゅうろくじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十六人」讀作「じゅうろくにん」。',
            relatedRules: ['人數的讀法', '16人的讀法']
        },
        sourceItem: { value: 16, kanji: '十六人', reading: 'じゅうろくにん' }
    },
    {
        id: 'people_ext_41',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '這個社團有＿＿。',
        stem_zh: '這個社團有十七個人。',
        options: [
            { text: 'じゅうしちにん / じゅうななにん', isCorrect: true, reason: '正確！「十七人」可讀兩種。' },
            { text: 'じゅうなのにん', isCorrect: false, reason: '「七」讀「しち」或「なな」。' },
            { text: 'とおしちにん', isCorrect: false, reason: '「十」讀「じゅう」。' },
            { text: 'じゅうしちじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十七人」可讀「じゅうしちにん」或「じゅうななにん」。',
            relatedRules: ['人數的讀法', '17人的讀法']
        },
        sourceItem: { value: 17, kanji: '十七人', reading: 'じゅうしちにん/じゅうななにん' }
    },
    {
        id: 'people_ext_42',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '研究團隊有多少人？',
        stem_zh: '研究團隊有多少人？',
        dialogue: {
            speakerA: '研究チームには何人いますか？',
            speakerB: '＿＿います。（十八個人）'
        },
        options: [
            { text: 'じゅうはちにん', isCorrect: true, reason: '正確！「十八人」讀作「じゅうはちにん」。' },
            { text: 'じゅうやにん', isCorrect: false, reason: '「八」讀「はち」。' },
            { text: 'とおはちにん', isCorrect: false, reason: '「十」讀「じゅう」。' },
            { text: 'じゅうはちじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十八人」讀作「じゅうはちにん」。',
            relatedRules: ['人數的讀法', '18人的讀法']
        },
        sourceItem: { value: 18, kanji: '十八人', reading: 'じゅうはちにん' }
    },
    {
        id: 'people_ext_43',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十九人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十九人」的正確讀音是？',
        options: [
            { text: 'じゅうきゅうにん / じゅうくにん', isCorrect: true, reason: '正確！「十九人」可讀兩種。' },
            { text: 'じゅうここのにん', isCorrect: false, reason: '「九」讀「きゅう」或「く」。' },
            { text: 'とおきゅうにん', isCorrect: false, reason: '「十」讀「じゅう」。' },
            { text: 'じゅうきゅうじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十九人」可讀「じゅうきゅうにん」或「じゅうくにん」。',
            relatedRules: ['人數的讀法', '19人的讀法']
        },
        sourceItem: { value: 19, kanji: '十九人', reading: 'じゅうきゅうにん/じゅうくにん' }
    },
    {
        id: 'people_ext_44',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '講座有＿＿參加。',
        stem_zh: '講座有二十五個人參加。',
        options: [
            { text: 'にじゅうごにん', isCorrect: true, reason: '正確！「二十五人」讀作「にじゅうごにん」。' },
            { text: 'ふたじゅうごにん', isCorrect: false, reason: '「二十」讀「にじゅう」。' },
            { text: 'にじゅういつにん', isCorrect: false, reason: '「五」讀「ご」。' },
            { text: 'にじゅうごじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十五人」讀作「にじゅうごにん」。',
            relatedRules: ['人數的讀法', '25人的讀法']
        },
        sourceItem: { value: 25, kanji: '二十五人', reading: 'にじゅうごにん' }
    },
    {
        id: 'people_ext_45',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: true,
        stem: '班上出席多少人？',
        stem_zh: '班上出席多少人？',
        dialogue: {
            speakerA: 'クラスには何人出席しましたか？',
            speakerB: '＿＿出席しました。（三十四個人）'
        },
        options: [
            { text: 'さんじゅうよにん', isCorrect: true, reason: '正確！「三十四人」讀作「さんじゅうよにん」。' },
            { text: 'さんじゅうしにん', isCorrect: false, reason: '陷阱！4讀「よ」避免「し」。' },
            { text: 'みじゅうよにん', isCorrect: false, reason: '「三十」讀「さんじゅう」。' },
            { text: 'さんじゅうよんにん', isCorrect: false, reason: '人數的4讀「よ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十四人」讀作「さんじゅうよにん」。',
            trapExplanation: '個位4讀「よ」。',
            relatedRules: ['人數的讀法', '34人的讀法']
        },
        sourceItem: { value: 34, kanji: '三十四人', reading: 'さんじゅうよにん' }
    },
    {
        id: 'people_ext_46',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「三十六人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「三十六人」的正確讀音是？',
        options: [
            { text: 'さんじゅうろくにん', isCorrect: true, reason: '正確！「三十六人」讀作「さんじゅうろくにん」。' },
            { text: 'みじゅうろくにん', isCorrect: false, reason: '「三十」讀「さんじゅう」。' },
            { text: 'さんじゅうむにん', isCorrect: false, reason: '「六」讀「ろく」。' },
            { text: 'さんじゅうろくじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十六人」讀作「さんじゅうろくにん」。',
            relatedRules: ['人數的讀法', '36人的讀法']
        },
        sourceItem: { value: 36, kanji: '三十六人', reading: 'さんじゅうろくにん' }
    },
    {
        id: 'people_ext_47',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '電影院有＿＿在看電影。',
        stem_zh: '電影院有四十二個人在看電影。',
        options: [
            { text: 'よんじゅうににん', isCorrect: true, reason: '正確！「四十二人」讀作「よんじゅうににん」。' },
            { text: 'しじゅうににん', isCorrect: false, reason: '「四十」讀「よんじゅう」。' },
            { text: 'よんじゅうふたり', isCorrect: false, reason: '超過2人用「にん」。' },
            { text: 'よんじゅうにじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十二人」讀作「よんじゅうににん」。',
            relatedRules: ['人數的讀法', '42人的讀法']
        },
        sourceItem: { value: 42, kanji: '四十二人', reading: 'よんじゅうににん' }
    },
    {
        id: 'people_ext_48',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '圖書館有多少人？',
        stem_zh: '圖書館有多少人？',
        dialogue: {
            speakerA: '図書館には何人いますか？',
            speakerB: '＿＿います。（四十五個人）'
        },
        options: [
            { text: 'よんじゅうごにん', isCorrect: true, reason: '正確！「四十五人」讀作「よんじゅうごにん」。' },
            { text: 'しじゅうごにん', isCorrect: false, reason: '「四十」讀「よんじゅう」。' },
            { text: 'よんじゅういつにん', isCorrect: false, reason: '「五」讀「ご」。' },
            { text: 'よんじゅうごじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十五人」讀作「よんじゅうごにん」。',
            relatedRules: ['人數的讀法', '45人的讀法']
        },
        sourceItem: { value: 45, kanji: '四十五人', reading: 'よんじゅうごにん' }
    },
    {
        id: 'people_ext_49',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「五十二人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「五十二人」的正確讀音是？',
        options: [
            { text: 'ごじゅうににん', isCorrect: true, reason: '正確！「五十二人」讀作「ごじゅうににん」。' },
            { text: 'いつじゅうににん', isCorrect: false, reason: '「五十」讀「ごじゅう」。' },
            { text: 'ごじゅうふたり', isCorrect: false, reason: '超過2人用「にん」。' },
            { text: 'ごじゅうにじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十二人」讀作「ごじゅうににん」。',
            relatedRules: ['人數的讀法', '52人的讀法']
        },
        sourceItem: { value: 52, kanji: '五十二人', reading: 'ごじゅうににん' }
    },
    {
        id: 'people_ext_50',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: true,
        stem: '公園有＿＿在運動。',
        stem_zh: '公園有五十四個人在運動。',
        options: [
            { text: 'ごじゅうよにん', isCorrect: true, reason: '正確！「五十四人」讀作「ごじゅうよにん」。' },
            { text: 'ごじゅうしにん', isCorrect: false, reason: '陷阱！4讀「よ」避免「し」。' },
            { text: 'いつじゅうよにん', isCorrect: false, reason: '「五十」讀「ごじゅう」。' },
            { text: 'ごじゅうよんにん', isCorrect: false, reason: '人數的4讀「よ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十四人」讀作「ごじゅうよにん」。',
            trapExplanation: '個位4讀「よ」。',
            relatedRules: ['人數的讀法', '54人的讀法']
        },
        sourceItem: { value: 54, kanji: '五十四人', reading: 'ごじゅうよにん' }
    },
    {
        id: 'people_ext_51',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '游泳池有多少人？',
        stem_zh: '游泳池有多少人？',
        dialogue: {
            speakerA: 'プールには何人いますか？',
            speakerB: '＿＿います。（五十七個人）'
        },
        options: [
            { text: 'ごじゅうしちにん / ごじゅうななにん', isCorrect: true, reason: '正確！「五十七人」可讀兩種。' },
            { text: 'ごじゅうなのにん', isCorrect: false, reason: '「七」讀「しち」或「なな」。' },
            { text: 'いつじゅうしちにん', isCorrect: false, reason: '「五十」讀「ごじゅう」。' },
            { text: 'ごじゅうしちじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十七人」可讀「ごじゅうしちにん」或「ごじゅうななにん」。',
            relatedRules: ['人數的讀法', '57人的讀法']
        },
        sourceItem: { value: 57, kanji: '五十七人', reading: 'ごじゅうしちにん/ごじゅうななにん' }
    },
    {
        id: 'people_ext_52',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「五十九人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「五十九人」的正確讀音是？',
        options: [
            { text: 'ごじゅうきゅうにん / ごじゅうくにん', isCorrect: true, reason: '正確！「五十九人」可讀兩種。' },
            { text: 'ごじゅうここのにん', isCorrect: false, reason: '「九」讀「きゅう」或「く」。' },
            { text: 'いつじゅうきゅうにん', isCorrect: false, reason: '「五十」讀「ごじゅう」。' },
            { text: 'ごじゅうきゅうじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十九人」可讀「ごじゅうきゅうにん」或「ごじゅうくにん」。',
            relatedRules: ['人數的讀法', '59人的讀法']
        },
        sourceItem: { value: 59, kanji: '五十九人', reading: 'ごじゅうきゅうにん/ごじゅうくにん' }
    },
    {
        id: 'people_ext_53',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: true,
        stem: '畢業典禮有＿＿參加。',
        stem_zh: '畢業典禮有六十四個人參加。',
        options: [
            { text: 'ろくじゅうよにん', isCorrect: true, reason: '正確！「六十四人」讀作「ろくじゅうよにん」。' },
            { text: 'ろくじゅうしにん', isCorrect: false, reason: '陷阱！4讀「よ」避免「し」。' },
            { text: 'むじゅうよにん', isCorrect: false, reason: '「六十」讀「ろくじゅう」。' },
            { text: 'ろくじゅうよんにん', isCorrect: false, reason: '人數的4讀「よ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六十四人」讀作「ろくじゅうよにん」。',
            trapExplanation: '個位4讀「よ」。',
            relatedRules: ['人數的讀法', '64人的讀法']
        },
        sourceItem: { value: 64, kanji: '六十四人', reading: 'ろくじゅうよにん' }
    },
    {
        id: 'people_ext_54',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '派對最後有多少人留下？',
        stem_zh: '派對最後有多少人留下？',
        dialogue: {
            speakerA: 'パーティーの最後には何人残りましたか？',
            speakerB: '＿＿残りました。（二十三個人）'
        },
        options: [
            { text: 'にじゅうさんにん', isCorrect: true, reason: '正確！「二十三人」讀作「にじゅうさんにん」。' },
            { text: 'ふたじゅうさんにん', isCorrect: false, reason: '「二十」讀「にじゅう」。' },
            { text: 'にじゅうみにん', isCorrect: false, reason: '「三」讀「さん」。' },
            { text: 'にじゅうさんじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十三人」讀作「にじゅうさんにん」。',
            relatedRules: ['人數的讀法', '23人的讀法']
        },
        sourceItem: { value: 23, kanji: '二十三人', reading: 'にじゅうさんにん' }
    },
    {
        id: 'people_ext_55',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二十六人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「二十六人」的正確讀音是？',
        options: [
            { text: 'にじゅうろくにん', isCorrect: true, reason: '正確！「二十六人」讀作「にじゅうろくにん」。' },
            { text: 'ふたじゅうろくにん', isCorrect: false, reason: '「二十」讀「にじゅう」。' },
            { text: 'にじゅうむにん', isCorrect: false, reason: '「六」讀「ろく」。' },
            { text: 'にじゅうろくじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十六人」讀作「にじゅうろくにん」。',
            relatedRules: ['人數的讀法', '26人的讀法']
        },
        sourceItem: { value: 26, kanji: '二十六人', reading: 'にじゅうろくにん' }
    },
    {
        id: 'people_ext_56',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '這場比賽有＿＿參賽。',
        stem_zh: '這場比賽有二十八個人參賽。',
        options: [
            { text: 'にじゅうはちにん', isCorrect: true, reason: '正確！「二十八人」讀作「にじゅうはちにん」。' },
            { text: 'ふたじゅうはちにん', isCorrect: false, reason: '「二十」讀「にじゅう」。' },
            { text: 'にじゅうやにん', isCorrect: false, reason: '「八」讀「はち」。' },
            { text: 'にじゅうはちじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十八人」讀作「にじゅうはちにん」。',
            relatedRules: ['人數的讀法', '28人的讀法']
        },
        sourceItem: { value: 28, kanji: '二十八人', reading: 'にじゅうはちにん' }
    },
    {
        id: 'people_ext_57',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '這個社區有多少人？',
        stem_zh: '這個社區有多少人？',
        dialogue: {
            speakerA: 'このコミュニティには何人いますか？',
            speakerB: '＿＿います。（九十九個人）'
        },
        options: [
            { text: 'きゅうじゅうきゅうにん', isCorrect: true, reason: '正確！「九十九人」讀作「きゅうじゅうきゅうにん」。' },
            { text: 'くじゅうくにん', isCorrect: false, reason: '「九十」一般讀「きゅうじゅう」。' },
            { text: 'ここのじゅうここのにん', isCorrect: false, reason: '「九十九」用音讀。' },
            { text: 'きゅうじゅうきゅうじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九十九人」讀作「きゅうじゅうきゅうにん」。',
            relatedRules: ['人數的讀法', '99人的讀法']
        },
        sourceItem: { value: 99, kanji: '九十九人', reading: 'きゅうじゅうきゅうにん' }
    },
    {
        id: 'people_ext_58',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: true,
        stem: '「百四人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「百四人」的正確讀音是？',
        options: [
            { text: 'ひゃくよにん', isCorrect: true, reason: '正確！「百四人」讀作「ひゃくよにん」。' },
            { text: 'ひゃくしにん', isCorrect: false, reason: '陷阱！4讀「よ」避免「し」。' },
            { text: 'いっぴゃくよにん', isCorrect: false, reason: '「百」讀「ひゃく」。' },
            { text: 'ひゃくよんにん', isCorrect: false, reason: '人數的4讀「よ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「百四人」讀作「ひゃくよにん」。',
            trapExplanation: '個位4讀「よ」。',
            relatedRules: ['人數的讀法', '104人的讀法']
        },
        sourceItem: { value: 104, kanji: '百四人', reading: 'ひゃくよにん' }
    },
    {
        id: 'people_ext_59',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '這個會議有＿＿出席。',
        stem_zh: '這個會議有一百二十個人出席。',
        options: [
            { text: 'ひゃくにじゅうにん', isCorrect: true, reason: '正確！「百二十人」讀作「ひゃくにじゅうにん」。' },
            { text: 'いっぴゃくにじゅうにん', isCorrect: false, reason: '「百」讀「ひゃく」。' },
            { text: 'ひゃくふたじゅうにん', isCorrect: false, reason: '「二十」讀「にじゅう」。' },
            { text: 'ひゃくにじゅうじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「百二十人」讀作「ひゃくにじゅうにん」。',
            relatedRules: ['人數的讀法', '120人的讀法']
        },
        sourceItem: { value: 120, kanji: '百二十人', reading: 'ひゃくにじゅうにん' }
    },
    {
        id: 'people_ext_60',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '這場音樂會有多少人？',
        stem_zh: '這場音樂會有多少人？',
        dialogue: {
            speakerA: 'コンサートには何人来ましたか？',
            speakerB: '＿＿来ました。（一百五十個人）'
        },
        options: [
            { text: 'ひゃくごじゅうにん', isCorrect: true, reason: '正確！「百五十人」讀作「ひゃくごじゅうにん」。' },
            { text: 'いっぴゃくごじゅうにん', isCorrect: false, reason: '「百」讀「ひゃく」。' },
            { text: 'ひゃくいつじゅうにん', isCorrect: false, reason: '「五十」讀「ごじゅう」。' },
            { text: 'ひゃくごじゅうじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「百五十人」讀作「ひゃくごじゅうにん」。',
            relatedRules: ['人數的讀法', '150人的讀法']
        },
        sourceItem: { value: 150, kanji: '百五十人', reading: 'ひゃくごじゅうにん' }
    },
    {
        id: 'people_ext_61',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: true,
        stem: '「二百人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「二百人」的正確讀音是？',
        options: [
            { text: 'にひゃくにん', isCorrect: true, reason: '正確！「二百人」讀作「にひゃくにん」。' },
            { text: 'ふたひゃくにん', isCorrect: false, reason: '「二百」讀「にひゃく」。' },
            { text: 'にびゃくにん', isCorrect: false, reason: '「二百」不濁音化。' },
            { text: 'にひゃくじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二百人」讀作「にひゃくにん」。',
            trapExplanation: '「二百」讀「にひゃく」，不濁音化。',
            relatedRules: ['人數的讀法', '200人的讀法']
        },
        sourceItem: { value: 200, kanji: '二百人', reading: 'にひゃくにん' }
    },
    {
        id: 'people_ext_62',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '這所大學有＿＿學生。',
        stem_zh: '這所大學有五百個學生。',
        options: [
            { text: 'ごひゃくにん', isCorrect: true, reason: '正確！「五百人」讀作「ごひゃくにん」。' },
            { text: 'いつひゃくにん', isCorrect: false, reason: '「五百」讀「ごひゃく」。' },
            { text: 'ごびゃくにん', isCorrect: false, reason: '「五百」不濁音化。' },
            { text: 'ごひゃくじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五百人」讀作「ごひゃくにん」。',
            relatedRules: ['人數的讀法', '500人的讀法']
        },
        sourceItem: { value: 500, kanji: '五百人', reading: 'ごひゃくにん' }
    },
    {
        id: 'people_ext_63',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '這個城鎮有多少人？',
        stem_zh: '這個城鎮有多少人？',
        dialogue: {
            speakerA: 'この町には何人住んでいますか？',
            speakerB: '＿＿住んでいます。（七百個人）'
        },
        options: [
            { text: 'ななひゃくにん', isCorrect: true, reason: '正確！「七百人」讀作「ななひゃくにん」。' },
            { text: 'しちひゃくにん', isCorrect: false, reason: '「七百」讀「ななひゃく」較常見。' },
            { text: 'なのひゃくにん', isCorrect: false, reason: '「七」讀「なな」或「しち」。' },
            { text: 'ななひゃくじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七百人」讀作「ななひゃくにん」。',
            relatedRules: ['人數的讀法', '700人的讀法']
        },
        sourceItem: { value: 700, kanji: '七百人', reading: 'ななひゃくにん' }
    },
    {
        id: 'people_ext_64',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「九百人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「九百人」的正確讀音是？',
        options: [
            { text: 'きゅうひゃくにん', isCorrect: true, reason: '正確！「九百人」讀作「きゅうひゃくにん」。' },
            { text: 'くひゃくにん', isCorrect: false, reason: '「九百」讀「きゅうひゃく」較常見。' },
            { text: 'ここのひゃくにん', isCorrect: false, reason: '「九百」用音讀。' },
            { text: 'きゅうひゃくじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九百人」讀作「きゅうひゃくにん」。',
            relatedRules: ['人數的讀法', '900人的讀法']
        },
        sourceItem: { value: 900, kanji: '九百人', reading: 'きゅうひゃくにん' }
    },
    {
        id: 'people_ext_65',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '這個工廠有＿＿員工。',
        stem_zh: '這個工廠有兩千個員工。',
        options: [
            { text: 'にせんにん', isCorrect: true, reason: '正確！「二千人」讀作「にせんにん」。' },
            { text: 'ふたせんにん', isCorrect: false, reason: '「二千」讀「にせん」。' },
            { text: 'にぜんにん', isCorrect: false, reason: '「二千」不濁音化。' },
            { text: 'にせんじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二千人」讀作「にせんにん」。',
            relatedRules: ['人數的讀法', '2000人的讀法']
        },
        sourceItem: { value: 2000, kanji: '二千人', reading: 'にせんにん' }
    },

    // ===== 擴充題庫 (171-200) =====
    {
        id: 'people_ext_66',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '這個村莊有多少人？',
        stem_zh: '這個村莊有多少人？',
        dialogue: {
            speakerA: 'この村には何人住んでいますか？',
            speakerB: '＿＿住んでいます。（四千個人）'
        },
        options: [
            { text: 'よんせんにん', isCorrect: true, reason: '正確！「四千人」讀作「よんせんにん」。' },
            { text: 'しせんにん', isCorrect: false, reason: '「四千」讀「よんせん」。' },
            { text: 'よせんにん', isCorrect: false, reason: '「四千」讀「よんせん」。' },
            { text: 'よんせんじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四千人」讀作「よんせんにん」。',
            relatedRules: ['人數的讀法', '4000人的讀法']
        },
        sourceItem: { value: 4000, kanji: '四千人', reading: 'よんせんにん' }
    },
    {
        id: 'people_ext_67',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「五千人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「五千人」的正確讀音是？',
        options: [
            { text: 'ごせんにん', isCorrect: true, reason: '正確！「五千人」讀作「ごせんにん」。' },
            { text: 'いつせんにん', isCorrect: false, reason: '「五千」讀「ごせん」。' },
            { text: 'ごぜんにん', isCorrect: false, reason: '「五千」不濁音化。' },
            { text: 'ごせんじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五千人」讀作「ごせんにん」。',
            relatedRules: ['人數的讀法', '5000人的讀法']
        },
        sourceItem: { value: 5000, kanji: '五千人', reading: 'ごせんにん' }
    },
    {
        id: 'people_ext_68',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '這個活動有＿＿報名。',
        stem_zh: '這個活動有六千個人報名。',
        options: [
            { text: 'ろくせんにん', isCorrect: true, reason: '正確！「六千人」讀作「ろくせんにん」。' },
            { text: 'むせんにん', isCorrect: false, reason: '「六千」讀「ろくせん」。' },
            { text: 'ろくぜんにん', isCorrect: false, reason: '「六千」不濁音化。' },
            { text: 'ろくせんじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六千人」讀作「ろくせんにん」。',
            relatedRules: ['人數的讀法', '6000人的讀法']
        },
        sourceItem: { value: 6000, kanji: '六千人', reading: 'ろくせんにん' }
    },
    {
        id: 'people_ext_69',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '這個節目有多少觀眾？',
        stem_zh: '這個節目有多少觀眾？',
        dialogue: {
            speakerA: 'この番組には何人の視聴者がいますか？',
            speakerB: '＿＿います。（七千個人）'
        },
        options: [
            { text: 'ななせんにん', isCorrect: true, reason: '正確！「七千人」讀作「ななせんにん」。' },
            { text: 'しちせんにん', isCorrect: false, reason: '「七千」讀「ななせん」較常見。' },
            { text: 'なのせんにん', isCorrect: false, reason: '「七」讀「なな」或「しち」。' },
            { text: 'ななせんじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七千人」讀作「ななせんにん」。',
            relatedRules: ['人數的讀法', '7000人的讀法']
        },
        sourceItem: { value: 7000, kanji: '七千人', reading: 'ななせんにん' }
    },
    {
        id: 'people_ext_70',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「九千人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「九千人」的正確讀音是？',
        options: [
            { text: 'きゅうせんにん', isCorrect: true, reason: '正確！「九千人」讀作「きゅうせんにん」。' },
            { text: 'くせんにん', isCorrect: false, reason: '「九千」讀「きゅうせん」較常見。' },
            { text: 'ここのせんにん', isCorrect: false, reason: '「九千」用音讀。' },
            { text: 'きゅうせんじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九千人」讀作「きゅうせんにん」。',
            relatedRules: ['人數的讀法', '9000人的讀法']
        },
        sourceItem: { value: 9000, kanji: '九千人', reading: 'きゅうせんにん' }
    },
    {
        id: 'people_ext_71',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '這場馬拉松有＿＿參加。',
        stem_zh: '這場馬拉松有兩萬個人參加。',
        options: [
            { text: 'にまんにん', isCorrect: true, reason: '正確！「二萬人」讀作「にまんにん」。' },
            { text: 'ふたまんにん', isCorrect: false, reason: '「二萬」讀「にまん」。' },
            { text: 'にばんにん', isCorrect: false, reason: '「萬」讀「まん」。' },
            { text: 'にまんじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二萬人」讀作「にまんにん」。',
            relatedRules: ['人數的讀法', '20000人的讀法']
        },
        sourceItem: { value: 20000, kanji: '二万人', reading: 'にまんにん' }
    },
    {
        id: 'people_ext_72',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '這個城市有多少人？',
        stem_zh: '這個城市有多少人？',
        dialogue: {
            speakerA: 'この都市には何人住んでいますか？',
            speakerB: '＿＿住んでいます。（五萬個人）'
        },
        options: [
            { text: 'ごまんにん', isCorrect: true, reason: '正確！「五萬人」讀作「ごまんにん」。' },
            { text: 'いつまんにん', isCorrect: false, reason: '「五萬」讀「ごまん」。' },
            { text: 'ごばんにん', isCorrect: false, reason: '「萬」讀「まん」。' },
            { text: 'ごまんじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五萬人」讀作「ごまんにん」。',
            relatedRules: ['人數的讀法', '50000人的讀法']
        },
        sourceItem: { value: 50000, kanji: '五万人', reading: 'ごまんにん' }
    },
    {
        id: 'people_ext_73',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十萬人」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十萬人」的正確讀音是？',
        options: [
            { text: 'じゅうまんにん', isCorrect: true, reason: '正確！「十萬人」讀作「じゅうまんにん」。' },
            { text: 'とおまんにん', isCorrect: false, reason: '「十萬」讀「じゅうまん」。' },
            { text: 'じゅうばんにん', isCorrect: false, reason: '「萬」讀「まん」。' },
            { text: 'じゅうまんじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十萬人」讀作「じゅうまんにん」。',
            relatedRules: ['人數的讀法', '100000人的讀法']
        },
        sourceItem: { value: 100000, kanji: '十万人', reading: 'じゅうまんにん' }
    },
    {
        id: 'people_ext_74',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: true,
        stem: '宴會有＿＿受邀。',
        stem_zh: '宴會有四人受邀。',
        options: [
            { text: 'よにん', isCorrect: true, reason: '正確！「四人」讀作「よにん」。' },
            { text: 'しにん', isCorrect: false, reason: '陷阱！避免「しにん（死人）」諧音。' },
            { text: 'よったり', isCorrect: false, reason: '訓讀只用於1、2人。' },
            { text: 'よんにん', isCorrect: false, reason: '人數的4讀「よ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四人」讀作「よにん」。',
            trapExplanation: '4讀「よ」避免「しにん」諧音。',
            relatedRules: ['四人的讀法', '避諱讀法']
        },
        sourceItem: { value: 4, kanji: '四人', reading: 'よにん' }
    },
    {
        id: 'people_ext_75',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: true,
        stem: '這組有幾個人？',
        stem_zh: '這組有幾個人？',
        dialogue: {
            speakerA: 'このグループには何人いますか？',
            speakerB: '＿＿います。（兩個人）'
        },
        options: [
            { text: 'ふたり', isCorrect: true, reason: '正確！「二人」讀作「ふたり」。' },
            { text: 'ににん', isCorrect: false, reason: '陷阱！二人使用訓讀。' },
            { text: 'にじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'ふたにん', isCorrect: false, reason: '不混合訓讀與音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二人」讀作「ふたり」，使用訓讀。',
            trapExplanation: '2人固定用訓讀「ふたり」。',
            relatedRules: ['人數的訓讀規則', '二人的讀法']
        },
        sourceItem: { value: 2, kanji: '二人', reading: 'ふたり' }
    },
    {
        id: 'people_ext_76',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: true,
        stem: '這房間只有我一個人，「一人」讀作？',
        stem_zh: '這房間只有我一個人，「一人」讀作？',
        options: [
            { text: 'ひとり', isCorrect: true, reason: '正確！「一人」讀作「ひとり」。' },
            { text: 'いちにん', isCorrect: false, reason: '陷阱！一人使用訓讀。' },
            { text: 'いちじん', isCorrect: false, reason: '「じん」不用於人數。' },
            { text: 'ひとにん', isCorrect: false, reason: '不混合訓讀與音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一人」讀作「ひとり」，使用訓讀。',
            trapExplanation: '1人固定用訓讀「ひとり」。',
            relatedRules: ['人數的訓讀規則', '一人的讀法']
        },
        sourceItem: { value: 1, kanji: '一人', reading: 'ひとり' }
    },
    {
        id: 'people_ext_77',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '三個人一組。',
        stem_zh: '三個人一組。',
        options: [
            { text: 'さんにんひとくみ', isCorrect: true, reason: '正確！「三人」讀作「さんにん」。' },
            { text: 'みにんひとくみ', isCorrect: false, reason: '「三」讀「さん」。' },
            { text: 'さんたりひとくみ', isCorrect: false, reason: '超過2人用「にん」。' },
            { text: 'さんじんひとくみ', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三人」讀作「さんにん」。',
            relatedRules: ['人數的讀法', '3人的讀法']
        },
        sourceItem: { value: 3, kanji: '三人', reading: 'さんにん' }
    },
    {
        id: 'people_ext_78',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '一桌坐多少人？',
        stem_zh: '一桌坐多少人？',
        dialogue: {
            speakerA: '一つのテーブルには何人座れますか？',
            speakerB: '＿＿座れます。（六個人）'
        },
        options: [
            { text: 'ろくにん', isCorrect: true, reason: '正確！「六人」讀作「ろくにん」。' },
            { text: 'むにん', isCorrect: false, reason: '「六」讀「ろく」。' },
            { text: 'むたり', isCorrect: false, reason: '訓讀只用於1、2人。' },
            { text: 'ろくじん', isCorrect: false, reason: '「じん」不用於人數。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六人」讀作「ろくにん」。',
            relatedRules: ['人數的讀法', '6人的讀法']
        },
        sourceItem: { value: 6, kanji: '六人', reading: 'ろくにん' }
    },
    {
        id: 'people_ext_79',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「大人」（おとな）是指？',
        stem_zh: '「大人」（おとな）是指？',
        options: [
            { text: '成年人', isCorrect: true, reason: '正確！「大人」讀「おとな」指成年人。' },
            { text: '大的人數', isCorrect: false, reason: '「大人」讀「おとな」是成年人。' },
            { text: '很多人', isCorrect: false, reason: '這是「多くの人」。' },
            { text: '偉大的人', isCorrect: false, reason: '這是「偉大な人」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「大人」讀「おとな」表示成年人，與人數無關。',
            relatedRules: ['人的相關詞彙', '大人的讀法']
        },
        sourceItem: { value: 'adult', kanji: '大人', reading: 'おとな' }
    },
    {
        id: 'people_ext_80',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '「子供」（こども）是指？',
        stem_zh: '「子供」（こども）是指？',
        options: [
            { text: '小孩', isCorrect: true, reason: '正確！「子供」讀「こども」指小孩。' },
            { text: '小的人數', isCorrect: false, reason: '「子供」是小孩的意思。' },
            { text: '少數人', isCorrect: false, reason: '這是「少人数」。' },
            { text: '年輕人', isCorrect: false, reason: '這是「若者」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「子供」讀「こども」表示小孩，與人數無關。',
            relatedRules: ['人的相關詞彙', '子供的讀法']
        },
        sourceItem: { value: 'child', kanji: '子供', reading: 'こども' }
    },
    {
        id: 'people_ext_81',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '「何人」讀「なにじん」是什麼意思？',
        stem_zh: '「何人」讀「なにじん」是什麼意思？',
        dialogue: {
            speakerA: '「なにじん」とはどういう意味ですか？',
            speakerB: '＿＿という意味です。'
        },
        options: [
            { text: '哪國人（詢問國籍）', isCorrect: true, reason: '正確！「なにじん」是問國籍。' },
            { text: '幾個人（詢問人數）', isCorrect: false, reason: '問人數用「なんにん」。' },
            { text: '什麼樣的人', isCorrect: false, reason: '這是「どんな人」。' },
            { text: '誰', isCorrect: false, reason: '這是「だれ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何人」讀「なにじん」問國籍，讀「なんにん」問人數。',
            relatedRules: ['なんにん vs なにじん', '疑問詞の使い分け']
        },
        sourceItem: { value: 'nationality', kanji: '何人（國籍）', reading: 'なにじん' }
    },
    {
        id: 'people_ext_82',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「何人」讀「なんにん」是什麼意思？',
        stem_zh: '「何人」讀「なんにん」是什麼意思？',
        options: [
            { text: '幾個人（詢問人數）', isCorrect: true, reason: '正確！「なんにん」是問人數。' },
            { text: '哪國人（詢問國籍）', isCorrect: false, reason: '問國籍用「なにじん」。' },
            { text: '什麼樣的人', isCorrect: false, reason: '這是「どんな人」。' },
            { text: '誰', isCorrect: false, reason: '這是「だれ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何人」讀「なんにん」問人數，讀「なにじん」問國籍。',
            relatedRules: ['なんにん vs なにじん', '疑問詞の使い分け']
        },
        sourceItem: { value: 'count', kanji: '何人（人數）', reading: 'なんにん' }
    },
    {
        id: 'people_ext_83',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '「日本人」讀作？',
        stem_zh: '「日本人」讀作？',
        options: [
            { text: 'にほんじん', isCorrect: true, reason: '正確！「日本人」讀作「にほんじん」。' },
            { text: 'にほんにん', isCorrect: false, reason: '國籍用「じん」。' },
            { text: 'にっぽんにん', isCorrect: false, reason: '國籍用「じん」。' },
            { text: 'にほんひと', isCorrect: false, reason: '國籍讀「〜じん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「日本人」讀作「にほんじん」，國籍用「じん」。',
            relatedRules: ['國籍的讀法', '〜人（じん）']
        },
        sourceItem: { value: 'Japanese', kanji: '日本人', reading: 'にほんじん' }
    },
    {
        id: 'people_ext_84',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '「台湾人」讀作？',
        stem_zh: '「台湾人」讀作？',
        dialogue: {
            speakerA: '「台湾人」はどう読みますか？',
            speakerB: '＿＿と読みます。'
        },
        options: [
            { text: 'たいわんじん', isCorrect: true, reason: '正確！「台湾人」讀作「たいわんじん」。' },
            { text: 'たいわんにん', isCorrect: false, reason: '國籍用「じん」。' },
            { text: 'たいわんひと', isCorrect: false, reason: '國籍讀「〜じん」。' },
            { text: 'だいわんじん', isCorrect: false, reason: '「台」讀「たい」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「台湾人」讀作「たいわんじん」，國籍用「じん」。',
            relatedRules: ['國籍的讀法', '〜人（じん）']
        },
        sourceItem: { value: 'Taiwanese', kanji: '台湾人', reading: 'たいわんじん' }
    },
    {
        id: 'people_ext_85',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '總復習：人數量詞「人」的兩種讀法是？',
        stem_zh: '總復習：人數量詞「人」的兩種讀法是？',
        options: [
            { text: 'にん（人數）、じん（國籍）', isCorrect: true, reason: '正確！人數用「にん」，國籍用「じん」。' },
            { text: '只有「にん」', isCorrect: false, reason: '國籍用「じん」。' },
            { text: '只有「じん」', isCorrect: false, reason: '人數用「にん」。' },
            { text: '兩者可互換', isCorrect: false, reason: '不可互換，各有用途。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「人」的讀法：人數用「にん」（三人、十人等），國籍用「じん」（日本人等）。',
            relatedRules: ['人的讀法規則', 'にん vs じん']
        },
        sourceItem: { value: 'review_readings', kanji: '人', reading: 'にん/じん' }
    },
    {
        id: 'people_ext_86',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '總復習：特殊訓讀的人數有哪些？',
        stem_zh: '總復習：特殊訓讀的人數有哪些？',
        options: [
            { text: '1人（ひとり）、2人（ふたり）', isCorrect: true, reason: '正確！只有1人、2人使用訓讀。' },
            { text: '1人、2人、3人', isCorrect: false, reason: '3人開始用音讀「さんにん」。' },
            { text: '只有1人', isCorrect: false, reason: '2人也用訓讀「ふたり」。' },
            { text: '沒有特殊讀法', isCorrect: false, reason: '1人、2人有特殊訓讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '1人（ひとり）、2人（ふたり）使用訓讀，3人開始用音讀。',
            relatedRules: ['人數的訓讀規則', '特殊讀法']
        },
        sourceItem: { value: 'review_kun', kanji: '1人、2人', reading: 'ひとり、ふたり' }
    },
    {
        id: 'people_ext_87',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '總復習：4的特殊讀法原因是？',
        stem_zh: '總復習：4的特殊讀法原因是？',
        dialogue: {
            speakerA: '「四人」の4はなぜ「よ」と読みますか？',
            speakerB: '＿＿を避けるためです。'
        },
        options: [
            { text: '「しにん」（死人）諧音', isCorrect: true, reason: '正確！避免不吉利的諧音。' },
            { text: '發音容易', isCorrect: false, reason: '主要是避諱原因。' },
            { text: '傳統習慣', isCorrect: false, reason: '是避諱原因。' },
            { text: '沒有特別原因', isCorrect: false, reason: '有避諱的原因。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '4讀「よ」避免「しにん」與「死人」同音。',
            relatedRules: ['四人的讀法', '避諱讀法']
        },
        sourceItem: { value: 'review_4', kanji: '四人', reading: 'よにん' }
    },
    {
        id: 'people_ext_88',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '總復習：7人有幾種讀法？',
        stem_zh: '總復習：7人有幾種讀法？',
        options: [
            { text: '兩種（しちにん、ななにん）', isCorrect: true, reason: '正確！7人可讀兩種。' },
            { text: '只有しちにん', isCorrect: false, reason: '也可讀「ななにん」。' },
            { text: '只有ななにん', isCorrect: false, reason: '也可讀「しちにん」。' },
            { text: '三種以上', isCorrect: false, reason: '主要是兩種。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '7人可讀「しちにん」或「ななにん」，兩種皆可。',
            relatedRules: ['七人的讀法', '7の讀み方']
        },
        sourceItem: { value: 'review_7', kanji: '七人', reading: 'しちにん/ななにん' }
    },
    {
        id: 'people_ext_89',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '總復習：9人有幾種讀法？',
        stem_zh: '總復習：9人有幾種讀法？',
        options: [
            { text: '兩種（きゅうにん、くにん）', isCorrect: true, reason: '正確！9人可讀兩種。' },
            { text: '只有きゅうにん', isCorrect: false, reason: '也可讀「くにん」。' },
            { text: '只有くにん', isCorrect: false, reason: '也可讀「きゅうにん」。' },
            { text: '三種以上', isCorrect: false, reason: '主要是兩種。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '9人可讀「きゅうにん」或「くにん」，兩種皆可。',
            relatedRules: ['九人的讀法', '9の讀み方']
        },
        sourceItem: { value: 'review_9', kanji: '九人', reading: 'きゅうにん/くにん' }
    },
    {
        id: 'people_ext_90',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '總復習：百、千的特殊音變有哪些？',
        stem_zh: '總復習：百、千的特殊音變有哪些？',
        dialogue: {
            speakerA: '百と千の音変化を教えてください。',
            speakerB: '＿＿があります。'
        },
        options: [
            { text: '3百(さんびゃく)、6百(ろっぴゃく)、8百(はっぴゃく)；3千(さんぜん)、8千(はっせん)', isCorrect: true, reason: '正確！這些有特殊音變。' },
            { text: '全部都有音變', isCorrect: false, reason: '只有特定數字音變。' },
            { text: '全部都沒有音變', isCorrect: false, reason: '有特定數字音變。' },
            { text: '只有百有音變', isCorrect: false, reason: '千也有音變。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '3/6/8百有音變，3/8千有音變。',
            relatedRules: ['百的音變', '千的音變']
        },
        sourceItem: { value: 'review_change', kanji: '音變規則', reading: '3/6/8百、3/8千' }
    },
    {
        id: 'people_ext_91',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '總復習：人數量詞的完整規則是？',
        stem_zh: '總復習：人數量詞的完整規則是？',
        options: [
            { text: '1/2訓讀、4讀よ、7/9有兩種讀法、其他音讀', isCorrect: true, reason: '正確！這是完整規則。' },
            { text: '全部用音讀', isCorrect: false, reason: '1/2用訓讀。' },
            { text: '全部用訓讀', isCorrect: false, reason: '3人以上用音讀。' },
            { text: '沒有規則', isCorrect: false, reason: '有明確規則。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '1人(ひとり)、2人(ふたり)訓讀；4人(よにん)特殊；7/9人兩種讀法；其他音讀。',
            relatedRules: ['人數の完整規則', '特殊讀法總整理']
        },
        sourceItem: { value: 'review_full', kanji: '完整規則', reading: '訓讀/特殊/音讀' }
    },
    {
        id: 'people_ext_92',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: true,
        stem: '以下哪個讀法是正確的？',
        stem_zh: '以下哪個讀法是正確的？',
        options: [
            { text: '一人(ひとり)、四人(よにん)、十人(じゅうにん)', isCorrect: true, reason: '正確！這三個讀法都正確。' },
            { text: '一人(いちにん)、四人(しにん)、十人(じゅうにん)', isCorrect: false, reason: '1人用訓讀，4人讀「よにん」。' },
            { text: '一人(ひとり)、四人(よんにん)、十人(とおにん)', isCorrect: false, reason: '4人讀「よにん」，10人讀「じゅうにん」。' },
            { text: '一人(いちにん)、四人(よにん)、十人(とおにん)', isCorrect: false, reason: '1人用訓讀，10人讀「じゅうにん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '1人(ひとり)、4人(よにん)、10人(じゅうにん)是正確讀法。',
            trapExplanation: '注意1人用訓讀，4人的4讀「よ」。',
            relatedRules: ['人數的讀法規則', '特殊讀法']
        },
        sourceItem: { value: 'review_combo', kanji: '1人/4人/10人', reading: 'ひとり/よにん/じゅうにん' }
    },
    {
        id: 'people_ext_93',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: true,
        stem: '以下哪個讀法是正確的？',
        stem_zh: '以下哪個讀法是正確的？',
        dialogue: {
            speakerA: '正しい読み方はどれですか？',
            speakerB: '＿＿です。'
        },
        options: [
            { text: '二人(ふたり)、三人(さんにん)、七人(しちにん/ななにん)', isCorrect: true, reason: '正確！這些讀法都正確。' },
            { text: '二人(ににん)、三人(さんにん)、七人(しちにん)', isCorrect: false, reason: '2人用訓讀「ふたり」。' },
            { text: '二人(ふたり)、三人(みにん)、七人(ななにん)', isCorrect: false, reason: '3人讀「さんにん」。' },
            { text: '二人(ふたにん)、三人(さんにん)、七人(なのにん)', isCorrect: false, reason: '2人讀「ふたり」，7人讀「しちにん/ななにん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '2人(ふたり)、3人(さんにん)、7人(しちにん/ななにん)是正確讀法。',
            trapExplanation: '注意2人用訓讀，3人開始用音讀。',
            relatedRules: ['人數的讀法規則', '訓讀→音讀']
        },
        sourceItem: { value: 'review_combo2', kanji: '2人/3人/7人', reading: 'ふたり/さんにん/しちにん' }
    },
    {
        id: 'people_ext_94',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '「人気」讀作？（詞意：受歡迎）',
        stem_zh: '「人気」讀作？（詞意：受歡迎）',
        options: [
            { text: 'にんき', isCorrect: true, reason: '正確！「人気」讀「にんき」表示受歡迎。' },
            { text: 'ひとけ', isCorrect: false, reason: '「ひとけ」是另一個意思（人煙）。' },
            { text: 'じんき', isCorrect: false, reason: '讀「にんき」。' },
            { text: 'ひとき', isCorrect: false, reason: '讀「にんき」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「人気」讀「にんき」表示受歡迎，讀「ひとけ」表示人煙。',
            relatedRules: ['人的相關詞彙', '人気の讀み分け']
        },
        sourceItem: { value: 'popular', kanji: '人気', reading: 'にんき' }
    },
    {
        id: 'people_ext_95',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '「人気」讀作「ひとけ」是什麼意思？',
        stem_zh: '「人気」讀作「ひとけ」是什麼意思？',
        options: [
            { text: '人煙、有沒有人', isCorrect: true, reason: '正確！「ひとけ」表示人煙。' },
            { text: '受歡迎', isCorrect: false, reason: '受歡迎讀「にんき」。' },
            { text: '人數', isCorrect: false, reason: '人數用「〜にん」。' },
            { text: '人情', isCorrect: false, reason: '這是「にんじょう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「人気」讀「ひとけ」表示人煙，如「人気がない」（沒有人煙）。',
            relatedRules: ['人的相關詞彙', '人気の讀み分け']
        },
        sourceItem: { value: 'presence', kanji: '人気', reading: 'ひとけ' }
    },
    {
        id: 'people_ext_96',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '「人間」讀作？',
        stem_zh: '「人間」讀作？',
        dialogue: {
            speakerA: '「人間」はどう読みますか？',
            speakerB: '＿＿と読みます。'
        },
        options: [
            { text: 'にんげん', isCorrect: true, reason: '正確！「人間」讀「にんげん」表示人類。' },
            { text: 'ひとま', isCorrect: false, reason: '讀「にんげん」。' },
            { text: 'じんかん', isCorrect: false, reason: '讀「にんげん」。' },
            { text: 'ひとあいだ', isCorrect: false, reason: '讀「にんげん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「人間」讀「にんげん」表示人類。',
            relatedRules: ['人的相關詞彙', '人間的讀法']
        },
        sourceItem: { value: 'human', kanji: '人間', reading: 'にんげん' }
    },
    {
        id: 'people_ext_97',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '總復習：以下哪組讀法全部正確？',
        stem_zh: '總復習：以下哪組讀法全部正確？',
        options: [
            { text: '8人(はちにん)、14人(じゅうよにん)、24人(にじゅうよにん)', isCorrect: true, reason: '正確！這些讀法都正確。' },
            { text: '8人(やにん)、14人(じゅうしにん)、24人(にじゅうしにん)', isCorrect: false, reason: '8讀「はち」，4讀「よ」。' },
            { text: '8人(はちにん)、14人(じゅうよんにん)、24人(にじゅうよんにん)', isCorrect: false, reason: '人數的4讀「よ」。' },
            { text: '8人(はちにん)、14人(じゅうしにん)、24人(にじゅうよにん)', isCorrect: false, reason: '14人的4也讀「よ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '8人(はちにん)、14人(じゅうよにん)、24人(にじゅうよにん)都是正確讀法。',
            relatedRules: ['人數的讀法規則', '4的特殊讀法']
        },
        sourceItem: { value: 'review_combo3', kanji: '8人/14人/24人', reading: '含4的人數' }
    },
    {
        id: 'people_ext_98',
        category: 'counters',
        subcategory: 'people',
        type: 'sentence',
        isTrap: false,
        stem: '總復習：百人以上的讀法規則是？',
        stem_zh: '總復習：百人以上的讀法規則是？',
        options: [
            { text: '遵循數字+にん，注意百、千的音變', isCorrect: true, reason: '正確！遵循基本規則加音變。' },
            { text: '全部用訓讀', isCorrect: false, reason: '只有1/2人用訓讀。' },
            { text: '沒有規則', isCorrect: false, reason: '有明確規則。' },
            { text: '全部用特殊讀法', isCorrect: false, reason: '遵循基本規則。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '百人以上遵循「數字+にん」，注意3/6/8百、3/8千的音變。',
            relatedRules: ['人數的讀法規則', '大數字的讀法']
        },
        sourceItem: { value: 'review_large', kanji: '百人以上', reading: '數字+にん' }
    },
    {
        id: 'people_ext_99',
        category: 'counters',
        subcategory: 'people',
        type: 'dialogue',
        isTrap: false,
        stem: '總復習：人數和國籍的區分是？',
        stem_zh: '總復習：人數和國籍的區分是？',
        dialogue: {
            speakerA: '人数と国籍の読み分けを教えてください。',
            speakerB: '人数は＿＿、国籍は＿＿です。'
        },
        options: [
            { text: '人數用「にん」，國籍用「じん」', isCorrect: true, reason: '正確！這是基本區分。' },
            { text: '人數用「じん」，國籍用「にん」', isCorrect: false, reason: '相反了。' },
            { text: '兩者都用「にん」', isCorrect: false, reason: '國籍用「じん」。' },
            { text: '兩者都用「じん」', isCorrect: false, reason: '人數用「にん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '人數用「〜にん」（三人等），國籍用「〜じん」（日本人等）。',
            relatedRules: ['にん vs じん', '人的讀法區分']
        },
        sourceItem: { value: 'review_distinction', kanji: 'にん/じん', reading: '人數/國籍' }
    },
    {
        id: 'people_ext_100',
        category: 'counters',
        subcategory: 'people',
        type: 'pronunciation',
        isTrap: false,
        stem: '恭喜完成人數量詞學習！最後確認：「三人」讀作？',
        stem_zh: '恭喜完成人數量詞學習！最後確認：「三人」讀作？',
        options: [
            { text: 'さんにん', isCorrect: true, reason: '正確！「三人」讀作「さんにん」，這是人數量詞的基本讀法。' },
            { text: 'みにん', isCorrect: false, reason: '「三」讀「さん」。' },
            { text: 'さんたり', isCorrect: false, reason: '超過2人用「にん」。' },
            { text: 'さんじん', isCorrect: false, reason: '「じん」用於國籍。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三人」讀作「さんにん」，從3人開始使用音讀系統。',
            relatedRules: ['人數的讀法總整理', '恭喜完成學習']
        },
        sourceItem: { value: 3, kanji: '三人', reading: 'さんにん' }
    }
];
