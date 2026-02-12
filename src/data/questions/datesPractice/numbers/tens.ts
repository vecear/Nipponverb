import { DatesPracticeQuestion } from '../types';

// 十位數練習題
// 包含 11, 12, 14, 19, 20, 30, 40, 50, 60, 70, 80, 90
// 每個數字3題：發音題、單句敘述題、對話題

export const tensNumberQuestions: DatesPracticeQuestion[] = [
    // ===== 數字 11 的三題 =====
    {
        id: 'num_tens_11_pron',
        category: 'numbers',
        subcategory: 'tens',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十一」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十一」的正確讀音是？',
        options: [
            { text: 'じゅういち', isCorrect: true, reason: '正確！「十一{じゅういち}」讀作「じゅういち」，是十{じゅう}加一{いち}的組合。' },
            { text: 'といち', isCorrect: false, reason: '「と」是訓讀，組合數字使用音讀。' },
            { text: 'じゅうひと', isCorrect: false, reason: '「ひと」是訓讀，應使用音讀「いち」。' },
            { text: 'じゅいち', isCorrect: false, reason: '少了「う」，正確「じゅういち」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '十位以上の數字使用音讀組合，「十一{じゅういち}」讀作「じゅういち」。',
            relatedRules: ['十位數的組合規則', '音讀組合']
        },
        sourceItem: { value: 11, kanji: '十一', reading: 'じゅういち' }
    },
    {
        id: 'num_tens_11_sent',
        category: 'numbers',
        subcategory: 'tens',
        type: 'sentence',
        isTrap: false,
        stem: '私は＿＿歳です。',
        stem_zh: '我十一歲。',
        options: [
            { text: 'じゅういっさい', isCorrect: true, reason: '正確！「十一歳{じゅういっさい}」，「一{いち}」＋「歳{さい}」促音化為「いっさい」。' },
            { text: 'じゅういちさい', isCorrect: false, reason: '「一{いち}」後接「歳{さい}」會促音化為「いっさい」。' },
            { text: 'といっさい', isCorrect: false, reason: '「と」是訓讀，應使用音讀「じゅう」。' },
            { text: 'じゅうひとさい', isCorrect: false, reason: '「ひと」是訓讀，年齡使用音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十一歳{じゅういっさい}」中，「一{いち}」後接「歳{さい}」會促音化，變成「いっさい」。',
            relatedRules: ['年齡的讀法', '一{いち}的促音化規則']
        },
        sourceItem: { value: 11, kanji: '十一歳', reading: 'じゅういっさい' }
    },
    {
        id: 'num_tens_11_dial',
        category: 'numbers',
        subcategory: 'tens',
        type: 'dialogue',
        isTrap: false,
        stem: '今、何時ですか？',
        stem_zh: '現在幾點？',
        dialogue: {
            speakerA: 'すみません、今、何時ですか？',
            speakerB: '＿＿です。（十一點）'
        },
        options: [
            { text: 'じゅういちじ', isCorrect: true, reason: '正確！「十一時{じゅういちじ}」讀作「じゅういちじ」。' },
            { text: 'といちじ', isCorrect: false, reason: '「と」是訓讀，時間使用音讀。' },
            { text: 'じゅういっじ', isCorrect: false, reason: '「時」前不促音化。' },
            { text: 'じゅうひとじ', isCorrect: false, reason: '「ひと」是訓讀，時間使用音讀「いち」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '時間使用音讀，「十一時{じゅういちじ}」讀作「じゅういちじ」。',
            relatedRules: ['時間的讀法', '十位時間的表達']
        },
        sourceItem: { value: 11, kanji: '十一時', reading: 'じゅういちじ' }
    },

    // ===== 數字 12 的三題 =====
    {
        id: 'num_tens_12_pron',
        category: 'numbers',
        subcategory: 'tens',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十二」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十二」的正確讀音是？',
        options: [
            { text: 'じゅうに', isCorrect: true, reason: '正確！「十二{じゅうに}」讀作「じゅうに」。' },
            { text: 'とふた', isCorrect: false, reason: '組合數字不使用訓讀。' },
            { text: 'じゅうふた', isCorrect: false, reason: '「ふた」是訓讀，應使用音讀「に」。' },
            { text: 'じゅに', isCorrect: false, reason: '少了「う」，正確「じゅうに」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十二{じゅうに}」是音讀組合，讀作「じゅうに」。',
            relatedRules: ['十位數的組合', '12的發音']
        },
        sourceItem: { value: 12, kanji: '十二', reading: 'じゅうに' }
    },
    {
        id: 'num_tens_12_sent',
        category: 'numbers',
        subcategory: 'tens',
        type: 'sentence',
        isTrap: false,
        stem: '一年は＿＿か月あります。',
        stem_zh: '一年有十二個月。',
        options: [
            { text: 'じゅうにか', isCorrect: false, reason: '「か月{かげつ}」前需要完整「じゅうに」。' },
            { text: 'じゅうにかげつ', isCorrect: true, reason: '正確！「十二か月{じゅうにかげつ}」。' },
            { text: 'とふたかげつ', isCorrect: false, reason: '「か月{かげつ}」不使用訓讀數字。' },
            { text: 'じゅっにかげつ', isCorrect: false, reason: '「十二{じゅうに}」不促音化。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十二か月{じゅうにかげつ}」表示期間，使用音讀組合。',
            relatedRules: ['期間的表達', '「か月{かげつ}」的使用']
        },
        sourceItem: { value: 12, kanji: '十二か月', reading: 'じゅうにかげつ' }
    },
    {
        id: 'num_tens_12_dial',
        category: 'numbers',
        subcategory: 'tens',
        type: 'dialogue',
        isTrap: false,
        stem: '何月生まれですか？',
        stem_zh: '你是幾月出生的？',
        dialogue: {
            speakerA: '何月生まれですか？',
            speakerB: '＿＿生まれです。（十二月）'
        },
        options: [
            { text: 'じゅうにがつ', isCorrect: true, reason: '正確！「十二月{じゅうにがつ}」讀作「じゅうにがつ」。' },
            { text: 'とふたがつ', isCorrect: false, reason: '月份不使用訓讀數字。' },
            { text: 'じゅっにがつ', isCorrect: false, reason: '「十二{じゅうに}」不促音化。' },
            { text: 'じゅにがつ', isCorrect: false, reason: '少了「う」，正確「じゅうにがつ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十二月{じゅうにがつ}」是一年最後の月份，使用音讀。',
            relatedRules: ['月份的讀法', '12月{じゅうにがつ}的發音']
        },
        sourceItem: { value: 12, kanji: '十二月', reading: 'じゅうにがつ' }
    },

    // ===== 數字 14 的三題 =====
    {
        id: 'num_tens_14_pron',
        category: 'numbers',
        subcategory: 'tens',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十四」最常用的讀音是？',
        stem_zh: '「十四」最常用的讀音是？',
        options: [
            { text: 'じゅうし', isCorrect: false, reason: '「じゅうし」也可以，但因避諱「死」，日常多用「じゅうよん」。' },
            { text: 'じゅうよん', isCorrect: true, reason: '正確！為避諱「死」，日常多使用「じゅうよん」。' },
            { text: 'じゅよん', isCorrect: false, reason: '少了「う」，正確「じゅうよん」。' },
            { text: 'とよっつ', isCorrect: false, reason: '組合數字不使用訓讀。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十四{じゅうよん}」有兩種讀法：「じゅうし」和「じゅうよん」。由於「し」與「死」同音，日常多使用「じゅうよん」。',
            trapExplanation: '陷阱題，測試避諱習慣的了解。',
            relatedRules: ['十四{じゅうよん}の兩種讀法', '避諱文化']
        },
        sourceItem: { value: 14, kanji: '十四', reading: 'じゅうよん / じゅうし' }
    },
    {
        id: 'num_tens_14_sent',
        category: 'numbers',
        subcategory: 'tens',
        type: 'sentence',
        isTrap: true,
        stem: '今日は＿＿日です。',
        stem_zh: '今天是十四號。',
        options: [
            { text: 'じゅうよんにち', isCorrect: false, reason: '陷阱！日期中14日{じゅうよっか}保留訓讀「よっか」，讀「じゅうよっか」。' },
            { text: 'じゅうよっか', isCorrect: true, reason: '正確！「十四日{じゅうよっか}」保留了4日{よっか}的訓讀「よっか」。' },
            { text: 'じゅうしにち', isCorrect: false, reason: '日期中14日{じゅうよっか}使用特殊讀法「じゅうよっか」。' },
            { text: 'といよっか', isCorrect: false, reason: '「十」部分使用音讀「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '日期中，14日{じゅうよっか}和24日{にじゅうよっか}保留了4日{よっか}的訓讀「よっか」，讀「じゅうよっか」。',
            trapExplanation: '這是重要陷阱，學習者容易套用音讀規則而讀「じゅうよんにち」。',
            relatedRules: ['14日{じゅうよっか}、24日{にじゅうよっか}的特殊讀法', '日期的訓讀保留']
        },
        sourceItem: { value: 14, kanji: '十四日', reading: 'じゅうよっか' }
    },
    {
        id: 'num_tens_14_dial',
        category: 'numbers',
        subcategory: 'tens',
        type: 'dialogue',
        isTrap: false,
        stem: '何歳ですか？',
        stem_zh: '你幾歲？',
        dialogue: {
            speakerA: '何歳ですか？',
            speakerB: '＿＿歳です。（十四歲）'
        },
        options: [
            { text: 'じゅうよんさい', isCorrect: true, reason: '正確！「十四歳{じゅうよんさい}」讀作「じゅうよんさい」。' },
            { text: 'じゅうしさい', isCorrect: false, reason: '雖然語法正確，但避諱「死」，多用「じゅうよんさい」。' },
            { text: 'じゅうよっさい', isCorrect: false, reason: '年齡不使用「よっ」，應是「よん」。' },
            { text: 'とよっさい', isCorrect: false, reason: '年齡使用音讀「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十四歳{じゅうよんさい}」讀作「じゅうよんさい」，使用「よん」避諱。',
            relatedRules: ['年齡的表達', '14の避諱讀法']
        },
        sourceItem: { value: 14, kanji: '十四歳', reading: 'じゅうよんさい' }
    },

    // ===== 數字 20 的三題 =====
    {
        id: 'num_tens_20_pron',
        category: 'numbers',
        subcategory: 'tens',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二十」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「二十」的正確讀音是？',
        options: [
            { text: 'にじゅう', isCorrect: true, reason: '正確！「二十{にじゅう}」讀作「にじゅう」。' },
            { text: 'ふたじゅう', isCorrect: false, reason: '「ふた」是訓讀，組合數字使用音讀。' },
            { text: 'はたち', isCorrect: false, reason: '「はたち」是「二十歳」的特殊讀法，不是單純數字20。' },
            { text: 'にじゅ', isCorrect: false, reason: '少了「う」，正確「にじゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十{にじゅう}」讀作「にじゅう」，是二{に}乘以十{じゅう}的音讀組合。',
            relatedRules: ['整十數的讀法', '20の標準發音']
        },
        sourceItem: { value: 20, kanji: '二十', reading: 'にじゅう' }
    },
    {
        id: 'num_tens_20_sent',
        category: 'numbers',
        subcategory: 'tens',
        type: 'sentence',
        isTrap: true,
        stem: '今日は＿＿日です。',
        stem_zh: '今天是二十號。',
        options: [
            { text: 'にじゅうにち', isCorrect: false, reason: '陷阱！日期中「二十日{はつか}」有特殊讀法「はつか」。' },
            { text: 'はつか', isCorrect: true, reason: '正確！「二十日{はつか}」是完全特殊讀法，讀「はつか」。' },
            { text: 'ふたじゅうにち', isCorrect: false, reason: '日期不使用這個組合。' },
            { text: 'にじゅっか', isCorrect: false, reason: '20日{はつか}不使用促音，固定讀「はつか」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「二十日{はつか}」是日期中最特殊的讀法，完全獨立，讀「はつか」。與數字「二十{にじゅう}」讀法完全不同。',
            trapExplanation: '這是最重要の日期陷阱。「二十日{はつか}」的讀法與其他任何數字都無關，必須特別記憶。',
            relatedRules: ['二十日{はつか}的特殊讀法', '日期的訓讀系統']
        },
        sourceItem: { value: 20, kanji: '二十日', reading: 'はつか' }
    },
    {
        id: 'num_tens_20_dial',
        category: 'numbers',
        subcategory: 'tens',
        type: 'dialogue',
        isTrap: true,
        stem: '何歳ですか？',
        stem_zh: '你幾歲？',
        dialogue: {
            speakerA: '何歳ですか？',
            speakerB: '＿＿です。（二十歲）'
        },
        options: [
            { text: 'にじゅっさい', isCorrect: false, reason: '雖然這也可以，但二十歳{にじゅっさい}有特殊讀法「はたち」。' },
            { text: 'はたち', isCorrect: true, reason: '正確！「二十歳{にじゅっさい}」有特殊讀法「はたち」，這是成年的象徵。' },
            { text: 'ふたじゅっさい', isCorrect: false, reason: '年齡不使用訓讀「ふた」。' },
            { text: 'にじゅうさい', isCorrect: false, reason: '「二十{にじゅう}」後接「歳」時，使用特殊讀法「はたち」更常見。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「二十歳{にじゅっさい}」有特殊讀法「はたち」，這是日本成年的重要年齡，有獨立的傳統稱呼。',
            trapExplanation: '「はたち」是日本文化中非常重要の詞彙，代表成人。',
            relatedRules: ['二十歳{にじゅっさい}的特殊讀法', '「はたち」の文化意義']
        },
        sourceItem: { value: 20, kanji: '二十歳', reading: 'はたち' }
    },

    // ===== 數字 30 的三題 =====
    {
        id: 'num_tens_30_pron',
        category: 'numbers',
        subcategory: 'tens',
        type: 'pronunciation',
        isTrap: false,
        stem: '「三十」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「三十」的正確讀音是？',
        options: [
            { text: 'さんじゅう', isCorrect: true, reason: '正確！「三十{さんじゅう}」讀作「さんじゅう」。' },
            { text: 'みっじゅう', isCorrect: false, reason: '「み」是訓讀，組合數字使用音讀。' },
            { text: 'さんじゅ', isCorrect: false, reason: '少了「う」，正確「さんじゅう」。' },
            { text: 'みそ', isCorrect: false, reason: '「みそ」は古語，現代日語不使用。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十{さんじゅう}」讀作「さんじゅう」，是三{さん}乘以十{じゅう}的音讀組合。',
            relatedRules: ['整十數的讀法', '30的發音']
        },
        sourceItem: { value: 30, kanji: '三十', reading: 'さんじゅう' }
    },
    {
        id: 'num_tens_30_sent',
        category: 'numbers',
        subcategory: 'tens',
        type: 'sentence',
        isTrap: false,
        stem: '今日は＿＿日です。',
        stem_zh: '今天是三十號。',
        options: [
            { text: 'さんじゅうにち', isCorrect: true, reason: '正確！「三十日{さんじゅうにち}」讀作「さんじゅうにち」。' },
            { text: 'みそか', isCorrect: false, reason: '「みそか」是古語形式，現代多用「さんじゅうにち」。' },
            { text: 'さんじゅっか', isCorrect: false, reason: '「日{にち}」前不促音化。' },
            { text: 'みっじゅうにち', isCorrect: false, reason: '日期使用音讀「さん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十日{さんじゅうにち}」讀作「さんじゅうにち」，使用音讀規則。',
            relatedRules: ['30日{さんじゅうにち}的讀法', '日期的音讀']
        },
        sourceItem: { value: 30, kanji: '三十日', reading: 'さんじゅうにち' }
    },
    {
        id: 'num_tens_30_dial',
        category: 'numbers',
        subcategory: 'tens',
        type: 'dialogue',
        isTrap: false,
        stem: '何歳ですか？',
        stem_zh: '你幾歲？',
        dialogue: {
            speakerA: '何歳ですか？',
            speakerB: '＿＿歳です。（三十歲）'
        },
        options: [
            { text: 'さんじゅっさい', isCorrect: true, reason: '正確！「三十歳{さんじゅっさい}」，「じゅう」＋「さい」促音化為「じゅっさい」。' },
            { text: 'さんじゅうさい', isCorrect: false, reason: '「歳{さい}」前會促音化，應是「じゅっさい」。' },
            { text: 'みっじゅっさい', isCorrect: false, reason: '年齡使用音讀「さん」。' },
            { text: 'さんじゅさい', isCorrect: false, reason: '不完整，正確「さんじゅっさい」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十歳{さんじゅっさい}」中，「十{じゅう}」＋「歳{さい}」會促音化，變成「じゅっさい」。',
            relatedRules: ['年齡的促音化', '整十年齡的讀法']
        },
        sourceItem: { value: 30, kanji: '三十歳', reading: 'さんじゅっさい' }
    },

    // ===== 數字 40 的三題 =====
    {
        id: 'num_tens_40_pron',
        category: 'numbers',
        subcategory: 'tens',
        type: 'pronunciation',
        isTrap: true,
        stem: '「四十」最常用的讀音是？',
        stem_zh: '「四十」最常用的讀音是？',
        options: [
            { text: 'しじゅう', isCorrect: false, reason: '「しじゅう」也正確，但為避諱「死」，日常多用「よんじゅう」。' },
            { text: 'よんじゅう', isCorrect: true, reason: '正確！為避諱「死」，日常多使用「よんじゅう」。' },
            { text: 'よじゅう', isCorrect: false, reason: '缺少「ん」，正確「よんじゅう」。' },
            { text: 'よっじゅう', isCorrect: false, reason: '沒有促音，正確「よんじゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「四十{よんじゅう}」為避諱「死」，日常多使用「よんじゅう」而非「しじゅう」。',
            trapExplanation: '陷阱題，測試避諱習慣的了解。',
            relatedRules: ['四十{よんじゅう}の避諱讀法', '避諱文化在組合數字中の應用']
        },
        sourceItem: { value: 40, kanji: '四十', reading: 'よんじゅう' }
    },
    {
        id: 'num_tens_40_sent',
        category: 'numbers',
        subcategory: 'tens',
        type: 'sentence',
        isTrap: false,
        stem: '私は＿＿人のクラスにいます。',
        stem_zh: '我在四十人的班級。',
        options: [
            { text: 'よんじゅうにん', isCorrect: true, reason: '正確！「四十人{よんじゅうにん}」讀作「よんじゅうにん」。' },
            { text: 'しじゅうにん', isCorrect: false, reason: '為避諱「死」，多用「よんじゅう」。' },
            { text: 'よっじゅうにん', isCorrect: false, reason: '沒有促音，正確「よんじゅう」。' },
            { text: 'よじゅうにん', isCorrect: false, reason: '缺少「ん」，正確「よんじゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十人{よんじゅうにん}」使用「よん」避諱「死」。',
            relatedRules: ['人數的表達', '40の避諱讀法']
        },
        sourceItem: { value: 40, kanji: '四十人', reading: 'よんじゅうにん' }
    },
    {
        id: 'num_tens_40_dial',
        category: 'numbers',
        subcategory: 'tens',
        type: 'dialogue',
        isTrap: false,
        stem: '何歳ですか？',
        stem_zh: '你幾歲？',
        dialogue: {
            speakerA: '何歳ですか？',
            speakerB: '＿＿歳です。（四十歲）'
        },
        options: [
            { text: 'よんじゅっさい', isCorrect: true, reason: '正確！「四十歳{よんじゅっさい}」，促音化為「じゅっさい」。' },
            { text: 'しじゅっさい', isCorrect: false, reason: '為避諱「死」，多用「よん」。' },
            { text: 'よんじゅうさい', isCorrect: false, reason: '「歳{さい}」前會促音化，應是「じゅっさい」。' },
            { text: 'よっじゅっさい', isCorrect: false, reason: '沒有「よっ」這個形式。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十歳{よんじゅっさい}」使用「よん」＋促音化「じゅっさい」。',
            relatedRules: ['年齡的促音化', '40の避諱讀法']
        },
        sourceItem: { value: 40, kanji: '四十歳', reading: 'よんじゅっさい' }
    },

    // ===== 數字 50 的三題 =====
    {
        id: 'num_tens_50_pron',
        category: 'numbers',
        subcategory: 'tens',
        type: 'pronunciation',
        isTrap: false,
        stem: '「五十」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「五十」的正確讀音是？',
        options: [
            { text: 'ごじゅう', isCorrect: true, reason: '正確！「五十{ごじゅう}」讀作「ごじゅう」。' },
            { text: 'いつじゅう', isCorrect: false, reason: '「いつ」是訓讀，組合數字使用音讀。' },
            { text: 'こじゅう', isCorrect: false, reason: '「ご」需要濁音，不是「こ」。' },
            { text: 'ごじゅ', isCorrect: false, reason: '少了「う」，正確「ごじゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十{ごじゅう}」讀作「ごじゅう」，是五{ご}乘以十{じゅう}的音讀組合。',
            relatedRules: ['整十數的讀法', '50的發音']
        },
        sourceItem: { value: 50, kanji: '五十', reading: 'ごじゅう' }
    },
    {
        id: 'num_tens_50_sent',
        category: 'numbers',
        subcategory: 'tens',
        type: 'sentence',
        isTrap: false,
        stem: 'この本は＿＿ページあります。',
        stem_zh: '這本書有五十頁。',
        options: [
            { text: 'ごじゅうページ', isCorrect: true, reason: '正確！「五十ページ」讀作「ごじゅうページ」。' },
            { text: 'いつじゅうページ', isCorrect: false, reason: '頁數使用音讀「ご」。' },
            { text: 'ごじゅっページ', isCorrect: false, reason: '「ページ」前不促音化。' },
            { text: 'こじゅうページ', isCorrect: false, reason: '需要濁音「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十ページ」使用音讀「ごじゅう」＋外來語「ページ」。',
            relatedRules: ['頁數的表達', '外來語與數字的組合']
        },
        sourceItem: { value: 50, kanji: '五十', reading: 'ごじゅう' }
    },
    {
        id: 'num_tens_50_dial',
        category: 'numbers',
        subcategory: 'tens',
        type: 'dialogue',
        isTrap: false,
        stem: '何歳ですか？',
        stem_zh: '你幾歲？',
        dialogue: {
            speakerA: '何歳ですか？',
            speakerB: '＿＿歳です。（五十歲）'
        },
        options: [
            { text: 'ごじゅっさい', isCorrect: true, reason: '正確！「五十歳{ごじゅっさい}」，促音化為「じゅっさい」。' },
            { text: 'ごじゅうさい', isCorrect: false, reason: '「歳{さい}」前會促音化，應是「じゅっさい」。' },
            { text: 'いつじゅっさい', isCorrect: false, reason: '年齡使用音讀「ご」。' },
            { text: 'こじゅっさい', isCorrect: false, reason: '需要濁音「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十歳{ごじゅっさい}」中，「十{じゅう}」＋「歳{さい}」會促音化，變成「じゅっさい」。',
            relatedRules: ['年齡的促音化', '50的發音']
        },
        sourceItem: { value: 50, kanji: '五十歳', reading: 'ごじゅっさい' }
    },

    // ===== 數字 60 的三題 =====
    {
        id: 'num_tens_60_pron',
        category: 'numbers',
        subcategory: 'tens',
        type: 'pronunciation',
        isTrap: false,
        stem: '「六十」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「六十」的正確讀音是？',
        options: [
            { text: 'ろくじゅう', isCorrect: true, reason: '正確！「六十{ろくじゅう}」讀作「ろくじゅう」。' },
            { text: 'むっじゅう', isCorrect: false, reason: '「むっ」是訓讀，組合數字使用音讀。' },
            { text: 'ろっじゅう', isCorrect: false, reason: '「六十{ろくじゅう}」不促音化，正確「ろくじゅう」。' },
            { text: 'りくじゅう', isCorrect: false, reason: '「りく」是「陸{りく}」的讀法，數字讀「ろく」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六十{ろくじゅう}」讀作「ろくじゅう」，整十數不促音化。',
            relatedRules: ['整十數的讀法', '60的發音']
        },
        sourceItem: { value: 60, kanji: '六十', reading: 'ろくじゅう' }
    },
    {
        id: 'num_tens_60_sent',
        category: 'numbers',
        subcategory: 'tens',
        type: 'sentence',
        isTrap: false,
        stem: '一時間は＿＿分です。',
        stem_zh: '一小時是六十分鐘。',
        options: [
            { text: 'ろくじゅっぷん', isCorrect: true, reason: '正確！「六十分{ろくじゅっぷん}」，「十{じゅう}」＋「分{ふん}」促音化＋半濁音化。' },
            { text: 'ろくじゅうふん', isCorrect: false, reason: '「分{ふん}」前會促音化＋半濁音化，應是「じゅっぷん」。' },
            { text: 'むっじゅっぷん', isCorrect: false, reason: '分鐘使用音讀「ろく」。' },
            { text: 'ろくじゅぷん', isCorrect: false, reason: '不完整，正確「ろくじゅっぷん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六十分{ろくじゅっぷん}」中，「十{じゅう}」＋「分{ふん}」會促音化＋半濁音化，變成「じゅっぷん」。',
            relatedRules: ['分鐘的促音化＋半濁音化', '時間的表達']
        },
        sourceItem: { value: 60, kanji: '六十分', reading: 'ろくじゅっぷん' }
    },
    {
        id: 'num_tens_60_dial',
        category: 'numbers',
        subcategory: 'tens',
        type: 'dialogue',
        isTrap: false,
        stem: '何歳ですか？',
        stem_zh: '你幾歲？',
        dialogue: {
            speakerA: '何歳ですか？',
            speakerB: '＿＿歳です。（六十歲）'
        },
        options: [
            { text: 'ろくじゅっさい', isCorrect: true, reason: '正確！「六十歳{ろくじゅっさい}」，促音化為「じゅっさい」。' },
            { text: 'ろくじゅうさい', isCorrect: false, reason: '「歳{さい}」前會促音化，應是「じゅっさい」。' },
            { text: 'むっじゅっさい', isCorrect: false, reason: '年齡使用音讀「ろく」。' },
            { text: 'ろっじゅっさい', isCorrect: false, reason: '「六十{ろくじゅう}」不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六十歳{ろくじゅっさい}」中，「十{じゅう}」＋「歳{さい}」會促音化，變成「じゅっさい」。',
            relatedRules: ['年齡的促音化', '60的發音']
        },
        sourceItem: { value: 60, kanji: '六十歳', reading: 'ろくじゅっさい' }
    },

    // ===== 數字 70 的三題 =====
    {
        id: 'num_tens_70_pron',
        category: 'numbers',
        subcategory: 'tens',
        type: 'pronunciation',
        isTrap: true,
        stem: '「七十」最常用的讀音是？',
        stem_zh: '「七十」最常用的讀音是？',
        options: [
            { text: 'しちじゅう', isCorrect: false, reason: '「しちじゅう」也正確，但為避免與「いち」混淆，多用「ななじゅう」。' },
            { text: 'ななじゅう', isCorrect: true, reason: '正確！為避免與「いち」混淆，日常多使用「ななじゅう」。' },
            { text: 'なじゅう', isCorrect: false, reason: '缺少「な」，正確「ななじゅう」。' },
            { text: 'ななつじゅう', isCorrect: false, reason: '「ななつ」是量詞讀法，不用於整十數。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「七十{ななじゅう}」為避免與「いち」混淆，日常多使用「ななじゅう」而非「しちじゅう」。',
            trapExplanation: '陷阱題，測試避免混淆習慣的了解。',
            relatedRules: ['七十{ななじゅう}の兩種讀法', '避免混淆の習慣']
        },
        sourceItem: { value: 70, kanji: '七十', reading: 'ななじゅう' }
    },
    {
        id: 'num_tens_70_sent',
        category: 'numbers',
        subcategory: 'tens',
        type: 'sentence',
        isTrap: false,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書七十日圓。',
        options: [
            { text: 'ななじゅうえん', isCorrect: true, reason: '正確！「七十円{ななじゅうえん}」讀作「ななじゅうえん」。' },
            { text: 'しちじゅうえん', isCorrect: false, reason: '為避免混淆，多用「なな」。' },
            { text: 'ななじゅっえん', isCorrect: false, reason: '「円{えん}」前不促音化。' },
            { text: 'なじゅうえん', isCorrect: false, reason: '缺少「な」，正確「ななじゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七十円{ななじゅうえん}」使用「なな」避免混淆。',
            relatedRules: ['金額的表達', '70の避免混淆讀法']
        },
        sourceItem: { value: 70, kanji: '七十円', reading: 'ななじゅうえん' }
    },
    {
        id: 'num_tens_70_dial',
        category: 'numbers',
        subcategory: 'tens',
        type: 'dialogue',
        isTrap: false,
        stem: '何歳ですか？',
        stem_zh: '你幾歲？',
        dialogue: {
            speakerA: '何歳ですか？',
            speakerB: '＿＿歳です。（七十歲）'
        },
        options: [
            { text: 'ななじゅっさい', isCorrect: true, reason: '正確！「七十歳{ななじゅっさい}」，促音化為「じゅっさい」。' },
            { text: 'しちじゅっさい', isCorrect: false, reason: '為避免混淆，多用「なな」。' },
            { text: 'ななじゅうさい', isCorrect: false, reason: '「歳{さい}」前會促音化，應是「じゅっさい」。' },
            { text: 'ななつじゅっさい', isCorrect: false, reason: '「ななつ」不用於整十年齡。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七十歳{ななじゅっさい}」使用「なな」＋促音化「じゅっさい」。',
            relatedRules: ['年齡的促音化', '70の避免混淆讀法']
        },
        sourceItem: { value: 70, kanji: '七十歳', reading: 'ななじゅっさい' }
    },

    // ===== 數字 80 的三題 =====
    {
        id: 'num_tens_80_pron',
        category: 'numbers',
        subcategory: 'tens',
        type: 'pronunciation',
        isTrap: false,
        stem: '「八十」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「八十」的正確讀音是？',
        options: [
            { text: 'はちじゅう', isCorrect: true, reason: '正確！「八十{はちじゅう}」讀作「はちじゅう」。' },
            { text: 'やっじゅう', isCorrect: false, reason: '「やっ」是訓讀，組合數字使用音讀。' },
            { text: 'はっじゅう', isCorrect: false, reason: '「八十{はちじゅう}」不促音化，正確「はちじゅう」。' },
            { text: 'はちじゅ', isCorrect: false, reason: '少了「う」，正確「はちじゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八十{はちじゅう}」讀作「はちじゅう」，整十數不促音化。',
            relatedRules: ['整十數的讀法', '80的發音']
        },
        sourceItem: { value: 80, kanji: '八十', reading: 'はちじゅう' }
    },
    {
        id: 'num_tens_80_sent',
        category: 'numbers',
        subcategory: 'tens',
        type: 'sentence',
        isTrap: false,
        stem: '私は＿＿点を取りました。',
        stem_zh: '我得了八十分。',
        options: [
            { text: 'はちじゅってん', isCorrect: true, reason: '正確！「八十点{はちじゅってん}」，「十{じゅう}」＋「点{てん}」促音化。' },
            { text: 'はちじゅうてん', isCorrect: false, reason: '「点{てん}」前會促音化，應是「じゅってん」。' },
            { text: 'やっじゅってん', isCorrect: false, reason: '分數使用音讀「はち」。' },
            { text: 'はっじゅってん', isCorrect: false, reason: '「八十{はちじゅう}」不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八十点{はちじゅってん}」中，「十{じゅう}」＋「点{てん}」會促音化，變成「じゅってん」。',
            relatedRules: ['分數的促音化', '「点{てん}」的音變']
        },
        sourceItem: { value: 80, kanji: '八十点', reading: 'はちじゅってん' }
    },
    {
        id: 'num_tens_80_dial',
        category: 'numbers',
        subcategory: 'tens',
        type: 'dialogue',
        isTrap: false,
        stem: '何歳ですか？',
        stem_zh: '你幾歲？',
        dialogue: {
            speakerA: '何歳ですか？',
            speakerB: '＿＿歳です。（八十歲）'
        },
        options: [
            { text: 'はちじゅっさい', isCorrect: true, reason: '正確！「八十歳{はちじゅっさい}」，促音化為「じゅっさい」。' },
            { text: 'はちじゅうさい', isCorrect: false, reason: '「歳{さい}」前會促音化，應是「じゅっさい」。' },
            { text: 'やっじゅっさい', isCorrect: false, reason: '年齡使用音讀「はち」。' },
            { text: 'はっじゅっさい', isCorrect: false, reason: '「八十{はちじゅう}」不促音化。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八十歳{はちじゅっさい}」中，「十{じゅう}」＋「歳{さい}」會促音化，變成「じゅっさい」。',
            relatedRules: ['年齡的促音化', '80的發音']
        },
        sourceItem: { value: 80, kanji: '八十歳', reading: 'はちじゅっさい' }
    },

    // ===== 數字 90 的三題 =====
    {
        id: 'num_tens_90_pron',
        category: 'numbers',
        subcategory: 'tens',
        type: 'pronunciation',
        isTrap: true,
        stem: '「九十」最常用的讀音是？',
        stem_zh: '「九十」最常用的讀音是？',
        options: [
            { text: 'くじゅう', isCorrect: false, reason: '「くじゅう」也正確，但為避諱「苦」，多用「きゅうじゅう」。' },
            { text: 'きゅうじゅう', isCorrect: true, reason: '正確！為避諱「苦」，日常多使用「きゅうじゅう」。' },
            { text: 'ここじゅう', isCorrect: false, reason: '「ここ」不是「九」的讀法。' },
            { text: 'きゅじゅう', isCorrect: false, reason: '少了「う」，正確「きゅうじゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「九十{きゅうじゅう}」為避諱「苦」，日常多使用「きゅうじゅう」而非「くじゅう」。',
            trapExplanation: '陷阱題，測試避諱習慣的了解。',
            relatedRules: ['九十{きゅうじゅう}の避諱讀法', '避諱文化']
        },
        sourceItem: { value: 90, kanji: '九十', reading: 'きゅうじゅう' }
    },
    {
        id: 'num_tens_90_sent',
        category: 'numbers',
        subcategory: 'tens',
        type: 'sentence',
        isTrap: false,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書九十日圓。',
        options: [
            { text: 'きゅうじゅうえん', isCorrect: true, reason: '正確！「九十円{きゅうじゅうえん}」讀作「きゅうじゅうえん」。' },
            { text: 'くじゅうえん', isCorrect: false, reason: '為避諱「苦」，多用「きゅう」。' },
            { text: 'きゅうじゅっえん', isCorrect: false, reason: '「円{えん}」前不促音化。' },
            { text: 'ここじゅうえん', isCorrect: false, reason: '「ここ」不是「九」的讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九十円{きゅうじゅうえん}」使用「きゅう」避諱「苦」。',
            relatedRules: ['金額的表達', '90の避諱讀法']
        },
        sourceItem: { value: 90, kanji: '九十円', reading: 'きゅうじゅうえん' }
    },
    {
        id: 'num_tens_90_dial',
        category: 'numbers',
        subcategory: 'tens',
        type: 'dialogue',
        isTrap: false,
        stem: '何歳ですか？',
        stem_zh: '你幾歲？',
        dialogue: {
            speakerA: '何歳ですか？',
            speakerB: '＿＿歳です。（九十歲）'
        },
        options: [
            { text: 'きゅうじゅっさい', isCorrect: true, reason: '正確！「九十歳{きゅうじゅっさい}」，促音化為「じゅっさい」。' },
            { text: 'くじゅっさい', isCorrect: false, reason: '為避諱「苦」，多用「きゅう」。' },
            { text: 'きゅうじゅうさい', isCorrect: false, reason: '「歳{さい}」前會促音化，應是「じゅっさい」。' },
            { text: 'ここじゅっさい', isCorrect: false, reason: '「ここ」不是「九」的讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九十歳{きゅうじゅっさい}」使用「きゅう」＋促音化「じゅっさい」。',
            relatedRules: ['年齡的促音化', '90の避諱讀法']
        },
        sourceItem: { value: 90, kanji: '九十歳', reading: 'きゅうじゅっさい' }
    },

    // ===== 數字 19 的三題 =====
    {
        id: 'num_tens_19_pron',
        category: 'numbers',
        subcategory: 'tens',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十九」最常用的讀音是？',
        stem_zh: '「十九」最常用的讀音是？',
        options: [
            { text: 'じゅうく', isCorrect: false, reason: '「じゅうく」也正確，但為避諱「苦」，日常多用「じゅうきゅう」。' },
            { text: 'じゅうきゅう', isCorrect: true, reason: '正確！為避諱「苦」，日常多使用「じゅうきゅう」。' },
            { text: 'じゅここの', isCorrect: false, reason: '組合數字不使用訓讀。' },
            { text: 'じゅきゅう', isCorrect: false, reason: '少了「う」，正確「じゅうきゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十九{じゅうきゅう}」有兩種讀法：「じゅうく」和「じゅうきゅう」。由於「く」與「苦」同音，日常多使用「じゅうきゅう」。',
            trapExplanation: '陷阱題，測試避諱習慣的了解。',
            relatedRules: ['十九{じゅうきゅう}の兩種讀法', '避諱文化']
        },
        sourceItem: { value: 19, kanji: '十九', reading: 'じゅうきゅう / じゅうく' }
    },
    {
        id: 'num_tens_19_sent',
        category: 'numbers',
        subcategory: 'tens',
        type: 'sentence',
        isTrap: false,
        stem: '私は＿＿歳です。',
        stem_zh: '我十九歲。',
        options: [
            { text: 'じゅうきゅうさい', isCorrect: true, reason: '正確！「十九歳{じゅうきゅうさい}」讀作「じゅうきゅうさい」。' },
            { text: 'じゅうくさい', isCorrect: false, reason: '為避諱「苦」，多用「じゅうきゅう」。' },
            { text: 'じゅここのさい', isCorrect: false, reason: '年齡不使用訓讀。' },
            { text: 'じゅうきゅっさい', isCorrect: false, reason: '19不促音化，正確「じゅうきゅうさい」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十九歳{じゅうきゅうさい}」使用「きゅう」避諱「苦」。',
            relatedRules: ['年齡的表達', '19の避諱讀法']
        },
        sourceItem: { value: 19, kanji: '十九歳', reading: 'じゅうきゅうさい' }
    },
    {
        id: 'num_tens_19_dial',
        category: 'numbers',
        subcategory: 'tens',
        type: 'dialogue',
        isTrap: false,
        stem: '今日は何日ですか？',
        stem_zh: '今天幾號？',
        dialogue: {
            speakerA: '今日は何日ですか？',
            speakerB: '＿＿日です。（十九號）'
        },
        options: [
            { text: 'じゅうきゅうにち', isCorrect: true, reason: '正確！「十九日{じゅうきゅうにち}」讀作「じゅうきゅうにち」。' },
            { text: 'じゅうくにち', isCorrect: false, reason: '為避諱「苦」，日期也多用「きゅう」。' },
            { text: 'じゅうここのか', isCorrect: false, reason: '19日{じゅうきゅうにち}不使用訓讀「ここのか」。' },
            { text: 'じゅここにち', isCorrect: false, reason: '組合讀法錯誤。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十九日{じゅうきゅうにち}」讀作「じゅうきゅうにち」，使用音讀組合。',
            relatedRules: ['日期的讀法', '11-19日使用音讀']
        },
        sourceItem: { value: 19, kanji: '十九日', reading: 'じゅうきゅうにち' }
    },

    // ===== 數字 13 的三題 =====
    {
        id: 'num_tens_13_pron', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「十三」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「十三」的正確讀音是？',
        options: [
            { text: 'じゅうさん', isCorrect: true, reason: '正確！「十三」讀作「じゅうさん」。' },
            { text: 'とみ', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'じゅうみ', isCorrect: false, reason: '「み」是訓讀，應使用音讀「さん」。' },
            { text: 'じゅさん', isCorrect: false, reason: '少了「う」，正確是「じゅうさん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十三」讀作「じゅうさん」，是音讀組合。', relatedRules: ['十位數的組合規則'] },
        sourceItem: { value: 13, kanji: '十三', reading: 'じゅうさん' }
    },
    {
        id: 'num_tens_13_sent', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '私は＿＿歳です。（十三歲）', stem_zh: '我十三歲。',
        options: [
            { text: 'じゅうさんさい', isCorrect: true, reason: '正確！「十三歳」讀「じゅうさんさい」。' },
            { text: 'じゅうみさい', isCorrect: false, reason: '年齡使用音讀。' },
            { text: 'じゅっさんさい', isCorrect: false, reason: '「十三」不促音化。' },
            { text: 'とみさい', isCorrect: false, reason: '年齡使用音讀組合。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十三歳」讀「じゅうさんさい」。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 13, kanji: '十三歳', reading: 'じゅうさんさい' }
    },
    {
        id: 'num_tens_13_dial', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '日期詢問', stem_zh: '日期詢問',
        dialogue: { speakerA: '今日は何日ですか？', speakerB: '＿＿です。（十三日）' },
        options: [
            { text: 'じゅうさんにち', isCorrect: true, reason: '正確！「十三日」讀「じゅうさんにち」。' },
            { text: 'とみか', isCorrect: false, reason: '11日以上使用音讀。' },
            { text: 'じゅうみっか', isCorrect: false, reason: '11日以上不用訓讀日期。' },
            { text: 'じゅっさんにち', isCorrect: false, reason: '「十三」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十三日」讀「じゅうさんにち」，11日以上使用音讀。', relatedRules: ['日期的讀法'] },
        sourceItem: { value: 13, kanji: '十三日', reading: 'じゅうさんにち' }
    },

    // ===== 數字 15 的三題 =====
    {
        id: 'num_tens_15_pron', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「十五」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「十五」的正確讀音是？',
        options: [
            { text: 'じゅうご', isCorrect: true, reason: '正確！「十五」讀作「じゅうご」。' },
            { text: 'といつ', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'じゅういつ', isCorrect: false, reason: '「いつ」是訓讀，應使用音讀「ご」。' },
            { text: 'じゅご', isCorrect: false, reason: '少了「う」，正確是「じゅうご」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十五」讀作「じゅうご」。', relatedRules: ['十位數的組合規則'] },
        sourceItem: { value: 15, kanji: '十五', reading: 'じゅうご' }
    },
    {
        id: 'num_tens_15_sent', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '＿＿分後に出発します。（十五分）', stem_zh: '十五分鐘後出發。',
        options: [
            { text: 'じゅうごふん', isCorrect: true, reason: '正確！「十五分」讀「じゅうごふん」。' },
            { text: 'じゅうごぷん', isCorrect: false, reason: '「五」後「分」讀「ふん」不是「ぷん」。' },
            { text: 'じゅっごふん', isCorrect: false, reason: '「十五」不促音化。' },
            { text: 'といつふん', isCorrect: false, reason: '分鐘使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十五分」讀「じゅうごふん」，「五」後保持原音。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 15, kanji: '十五分', reading: 'じゅうごふん' }
    },
    {
        id: 'num_tens_15_dial', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '日期詢問', stem_zh: '日期詢問',
        dialogue: { speakerA: '給料日はいつですか？', speakerB: '＿＿です。（十五日）' },
        options: [
            { text: 'じゅうごにち', isCorrect: true, reason: '正確！「十五日」讀「じゅうごにち」。' },
            { text: 'といつか', isCorrect: false, reason: '11日以上使用音讀。' },
            { text: 'じゅういつか', isCorrect: false, reason: '11日以上不用訓讀日期。' },
            { text: 'じゅっごにち', isCorrect: false, reason: '「十五」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十五日」讀「じゅうごにち」。', relatedRules: ['日期的讀法'] },
        sourceItem: { value: 15, kanji: '十五日', reading: 'じゅうごにち' }
    },

    // ===== 數字 16 的三題 =====
    {
        id: 'num_tens_16_pron', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「十六」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「十六」的正確讀音是？',
        options: [
            { text: 'じゅうろく', isCorrect: true, reason: '正確！「十六」讀作「じゅうろく」。' },
            { text: 'とむ', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'じゅうむ', isCorrect: false, reason: '「む」是訓讀，應使用音讀「ろく」。' },
            { text: 'じゅろく', isCorrect: false, reason: '少了「う」，正確是「じゅうろく」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十六」讀作「じゅうろく」。', relatedRules: ['十位數的組合規則'] },
        sourceItem: { value: 16, kanji: '十六', reading: 'じゅうろく' }
    },
    {
        id: 'num_tens_16_sent', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '私は＿＿歳です。（十六歲）', stem_zh: '我十六歲。',
        options: [
            { text: 'じゅうろくさい', isCorrect: true, reason: '正確！「十六歳」讀「じゅうろくさい」。' },
            { text: 'じゅうむさい', isCorrect: false, reason: '年齡使用音讀。' },
            { text: 'じゅっろくさい', isCorrect: false, reason: '「十六」不促音化。' },
            { text: 'とむさい', isCorrect: false, reason: '年齡使用音讀組合。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十六歳」讀「じゅうろくさい」。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 16, kanji: '十六歳', reading: 'じゅうろくさい' }
    },
    {
        id: 'num_tens_16_dial', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '日期詢問', stem_zh: '日期詢問',
        dialogue: { speakerA: '誕生日はいつですか？', speakerB: '＿＿です。（十六日）' },
        options: [
            { text: 'じゅうろくにち', isCorrect: true, reason: '正確！「十六日」讀「じゅうろくにち」。' },
            { text: 'とむいか', isCorrect: false, reason: '11日以上使用音讀。' },
            { text: 'じゅうむいか', isCorrect: false, reason: '11日以上不用訓讀日期。' },
            { text: 'じゅっろくにち', isCorrect: false, reason: '「十六」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十六日」讀「じゅうろくにち」。', relatedRules: ['日期的讀法'] },
        sourceItem: { value: 16, kanji: '十六日', reading: 'じゅうろくにち' }
    },

    // ===== 數字 17 的三題 =====
    {
        id: 'num_tens_17_pron', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '「十七」最常用的讀音是？', stem_zh: '「十七」最常用的讀音是？',
        options: [
            { text: 'じゅうしち', isCorrect: false, reason: '「じゅうしち」也正確，但為避免與「十一」混淆，多用「じゅうなな」。' },
            { text: 'じゅうなな', isCorrect: true, reason: '正確！為避免與「十一」混淆，日常多使用「じゅうなな」。' },
            { text: 'となな', isCorrect: false, reason: '組合數字使用音讀「じゅう」。' },
            { text: 'じゅなな', isCorrect: false, reason: '少了「う」，正確是「じゅうなな」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「十七」為避免混淆，日常多用「じゅうなな」。', trapExplanation: '這是陷阱題，測試避免混淆的習慣。', relatedRules: ['十七の兩種讀法'] },
        sourceItem: { value: 17, kanji: '十七', reading: 'じゅうなな' }
    },
    {
        id: 'num_tens_17_sent', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '私は＿＿歳です。（十七歲）', stem_zh: '我十七歲。',
        options: [
            { text: 'じゅうななさい', isCorrect: true, reason: '正確！「十七歳」讀「じゅうななさい」。' },
            { text: 'じゅうしちさい', isCorrect: false, reason: '為避免混淆，多用「なな」。' },
            { text: 'とななさい', isCorrect: false, reason: '年齡使用音讀組合。' },
            { text: 'じゅうなのさい', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十七歳」讀「じゅうななさい」。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 17, kanji: '十七歳', reading: 'じゅうななさい' }
    },
    {
        id: 'num_tens_17_dial', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '日期詢問', stem_zh: '日期詢問',
        dialogue: { speakerA: '次の試験はいつですか？', speakerB: '＿＿です。（十七日）' },
        options: [
            { text: 'じゅうしちにち', isCorrect: true, reason: '正確！日期中「十七日」可讀「じゅうしちにち」。' },
            { text: 'じゅうなのか', isCorrect: false, reason: '11日以上不用訓讀日期。' },
            { text: 'とななか', isCorrect: false, reason: '11日以上使用音讀。' },
            { text: 'じゅっしちにち', isCorrect: false, reason: '「十七」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十七日」讀「じゅうしちにち」或「じゅうななにち」。', relatedRules: ['日期的讀法'] },
        sourceItem: { value: 17, kanji: '十七日', reading: 'じゅうしちにち' }
    },

    // ===== 數字 18 的三題 =====
    {
        id: 'num_tens_18_pron', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「十八」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「十八」的正確讀音是？',
        options: [
            { text: 'じゅうはち', isCorrect: true, reason: '正確！「十八」讀作「じゅうはち」。' },
            { text: 'とや', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'じゅうや', isCorrect: false, reason: '「や」是訓讀，應使用音讀「はち」。' },
            { text: 'じゅはち', isCorrect: false, reason: '少了「う」，正確是「じゅうはち」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十八」讀作「じゅうはち」。', relatedRules: ['十位數的組合規則'] },
        sourceItem: { value: 18, kanji: '十八', reading: 'じゅうはち' }
    },
    {
        id: 'num_tens_18_sent', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '彼女は＿＿歳です。（十八歲）', stem_zh: '她十八歲。',
        options: [
            { text: 'じゅうはっさい', isCorrect: true, reason: '正確！「十八歳」讀「じゅうはっさい」，「八」促音化。' },
            { text: 'じゅうはちさい', isCorrect: false, reason: '「八」後接「歳」會促音化。' },
            { text: 'とやさい', isCorrect: false, reason: '年齡使用音讀組合。' },
            { text: 'じゅうやっさい', isCorrect: false, reason: '「や」是訓讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十八歳」讀「じゅうはっさい」，「八」＋「歳」促音化。', relatedRules: ['年齡的讀法', '八的促音化'] },
        sourceItem: { value: 18, kanji: '十八歳', reading: 'じゅうはっさい' }
    },
    {
        id: 'num_tens_18_dial', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '日期詢問', stem_zh: '日期詢問',
        dialogue: { speakerA: '約束は何日ですか？', speakerB: '＿＿です。（十八日）' },
        options: [
            { text: 'じゅうはちにち', isCorrect: true, reason: '正確！「十八日」讀「じゅうはちにち」。' },
            { text: 'とようか', isCorrect: false, reason: '11日以上使用音讀。' },
            { text: 'じゅうようか', isCorrect: false, reason: '11日以上不用訓讀日期。' },
            { text: 'じゅっはちにち', isCorrect: false, reason: '「十八」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十八日」讀「じゅうはちにち」。', relatedRules: ['日期的讀法'] },
        sourceItem: { value: 18, kanji: '十八日', reading: 'じゅうはちにち' }
    },

    // ===== 更多應用題目 =====
    {
        id: 'num_tens_extra_1', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '「二十四日」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「二十四日」的正確讀音是？',
        options: [
            { text: 'にじゅうよんにち', isCorrect: false, reason: '陷阱！「二十四日」保留「よっか」的讀法。' },
            { text: 'にじゅうよっか', isCorrect: true, reason: '正確！「二十四日」讀「にじゅうよっか」。' },
            { text: 'にじゅうしにち', isCorrect: false, reason: '日期中「四」讀「よ」。' },
            { text: 'はつよっか', isCorrect: false, reason: '「二十」讀「にじゅう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「二十四日」讀「にじゅうよっか」，保留「よっか」的讀法。', trapExplanation: '這是陷阱題，14日和24日保留「よっか」。', relatedRules: ['日期的特殊讀法'] },
        sourceItem: { value: 24, kanji: '二十四日', reading: 'にじゅうよっか' }
    },
    {
        id: 'num_tens_extra_2', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: 'クラスには＿＿人います。（二十五人）', stem_zh: '班上有二十五個人。',
        options: [
            { text: 'にじゅうごにん', isCorrect: true, reason: '正確！「二十五人」讀「にじゅうごにん」。' },
            { text: 'にじゅういつにん', isCorrect: false, reason: '人數使用音讀。' },
            { text: 'はつごにん', isCorrect: false, reason: '「二十」讀「にじゅう」。' },
            { text: 'にじゅっごにん', isCorrect: false, reason: '「二十五」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十五人」讀「にじゅうごにん」。', relatedRules: ['人數的讀法'] },
        sourceItem: { value: 25, kanji: '二十五人', reading: 'にじゅうごにん' }
    },
    {
        id: 'num_tens_extra_3', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '年齡詢問', stem_zh: '年齡詢問',
        dialogue: { speakerA: '何歳ですか？', speakerB: '＿＿です。（二十一歲）' },
        options: [
            { text: 'にじゅういっさい', isCorrect: true, reason: '正確！「二十一歳」讀「にじゅういっさい」。' },
            { text: 'にじゅういちさい', isCorrect: false, reason: '「一」＋「歳」促音化。' },
            { text: 'はたちいち', isCorrect: false, reason: '「はたち」只用於20歲。' },
            { text: 'にじゅうひとさい', isCorrect: false, reason: '年齡使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十一歳」讀「にじゅういっさい」，「一」促音化。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 21, kanji: '二十一歳', reading: 'にじゅういっさい' }
    },
    {
        id: 'num_tens_extra_4', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「三十一日」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「三十一日」的正確讀音是？',
        options: [
            { text: 'さんじゅういちにち', isCorrect: true, reason: '正確！「三十一日」讀「さんじゅういちにち」。' },
            { text: 'みそついたち', isCorrect: false, reason: '現代日語不用這個讀法。' },
            { text: 'さんじゅういっか', isCorrect: false, reason: '31日不用訓讀。' },
            { text: 'さんじゅっいちにち', isCorrect: false, reason: '「三十一」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三十一日」讀「さんじゅういちにち」。', relatedRules: ['日期的讀法'] },
        sourceItem: { value: 31, kanji: '三十一日', reading: 'さんじゅういちにち' }
    },
    {
        id: 'num_tens_extra_5', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: 'この本は＿＿ページあります。（三十五頁）', stem_zh: '這本書有三十五頁。',
        options: [
            { text: 'さんじゅうごページ', isCorrect: true, reason: '正確！「三十五ページ」。' },
            { text: 'みそごページ', isCorrect: false, reason: '頁數使用音讀。' },
            { text: 'さんじゅっごページ', isCorrect: false, reason: '「三十五」不促音化。' },
            { text: 'さんじゅういつページ', isCorrect: false, reason: '「五」讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三十五ページ」讀「さんじゅうごページ」。', relatedRules: ['頁數的讀法'] },
        sourceItem: { value: 35, kanji: '三十五', reading: 'さんじゅうご' }
    },
    {
        id: 'num_tens_extra_6', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '金額詢問', stem_zh: '金額詢問',
        dialogue: { speakerA: 'これはいくらですか？', speakerB: '＿＿円です。（四十五圓）' },
        options: [
            { text: 'よんじゅうごえん', isCorrect: true, reason: '正確！「四十五円」讀「よんじゅうごえん」。' },
            { text: 'しじゅうごえん', isCorrect: false, reason: '避諱「死」，多用「よん」。' },
            { text: 'よんじゅっごえん', isCorrect: false, reason: '「四十五」不促音化。' },
            { text: 'よじゅうごえん', isCorrect: false, reason: '缺少「ん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四十五円」讀「よんじゅうごえん」。', relatedRules: ['金額的讀法'] },
        sourceItem: { value: 45, kanji: '四十五円', reading: 'よんじゅうごえん' }
    },
    {
        id: 'num_tens_extra_7', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「五十五」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「五十五」的正確讀音是？',
        options: [
            { text: 'ごじゅうご', isCorrect: true, reason: '正確！「五十五」讀「ごじゅうご」。' },
            { text: 'いつじゅういつ', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'ごじゅっご', isCorrect: false, reason: '「五十五」不促音化。' },
            { text: 'こじゅうご', isCorrect: false, reason: '「五」讀「ご」不是「こ」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五十五」讀「ごじゅうご」。', relatedRules: ['數字組合的讀法'] },
        sourceItem: { value: 55, kanji: '五十五', reading: 'ごじゅうご' }
    },
    {
        id: 'num_tens_extra_8', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '一時間は＿＿分です。', stem_zh: '一小時是六十分鐘。',
        options: [
            { text: 'ろくじゅっぷん', isCorrect: true, reason: '正確！「六十分」讀「ろくじゅっぷん」。' },
            { text: 'ろくじゅうふん', isCorrect: false, reason: '「十」＋「分」促音化+半濁音化。' },
            { text: 'むじゅっぷん', isCorrect: false, reason: '分鐘使用音讀。' },
            { text: 'ろくじゅぷん', isCorrect: false, reason: '少了促音。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六十分」讀「ろくじゅっぷん」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 60, kanji: '六十分', reading: 'ろくじゅっぷん' }
    },
    {
        id: 'num_tens_extra_9', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '人數詢問', stem_zh: '人數詢問',
        dialogue: { speakerA: '参加者は何人ですか？', speakerB: '＿＿人です。（六十五人）' },
        options: [
            { text: 'ろくじゅうごにん', isCorrect: true, reason: '正確！「六十五人」讀「ろくじゅうごにん」。' },
            { text: 'むじゅうごにん', isCorrect: false, reason: '人數使用音讀。' },
            { text: 'ろくじゅっごにん', isCorrect: false, reason: '「六十五」不促音化。' },
            { text: 'ろくじゅういつにん', isCorrect: false, reason: '「五」讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六十五人」讀「ろくじゅうごにん」。', relatedRules: ['人數的讀法'] },
        sourceItem: { value: 65, kanji: '六十五人', reading: 'ろくじゅうごにん' }
    },
    {
        id: 'num_tens_extra_10', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「七十七」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「七十七」的正確讀音是？',
        options: [
            { text: 'ななじゅうなな', isCorrect: true, reason: '正確！「七十七」讀「ななじゅうなな」。' },
            { text: 'しちじゅうしち', isCorrect: false, reason: '為避免混淆，多用「なな」。' },
            { text: 'ななじゅっなな', isCorrect: false, reason: '「七十七」不促音化。' },
            { text: 'なじゅうなな', isCorrect: false, reason: '缺少「な」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七十七」讀「ななじゅうなな」。', relatedRules: ['數字組合的讀法'] },
        sourceItem: { value: 77, kanji: '七十七', reading: 'ななじゅうなな' }
    },
    {
        id: 'num_tens_extra_11', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '私は＿＿点を取りました。（七十五分）', stem_zh: '我得了七十五分。',
        options: [
            { text: 'ななじゅうごてん', isCorrect: true, reason: '正確！「七十五点」讀「ななじゅうごてん」。' },
            { text: 'しちじゅうごてん', isCorrect: false, reason: '為避免混淆，多用「なな」。' },
            { text: 'ななじゅっごてん', isCorrect: false, reason: '「七十五」不促音化。' },
            { text: 'ななじゅういつてん', isCorrect: false, reason: '「五」讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七十五点」讀「ななじゅうごてん」。', relatedRules: ['分數的讀法'] },
        sourceItem: { value: 75, kanji: '七十五点', reading: 'ななじゅうごてん' }
    },
    {
        id: 'num_tens_extra_12', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '金額詢問', stem_zh: '金額詢問',
        dialogue: { speakerA: '合計はいくらですか？', speakerB: '＿＿円です。（八十八圓）' },
        options: [
            { text: 'はちじゅうはちえん', isCorrect: true, reason: '正確！「八十八円」讀「はちじゅうはちえん」。' },
            { text: 'やじゅうやえん', isCorrect: false, reason: '金額使用音讀。' },
            { text: 'はちじゅっぱちえん', isCorrect: false, reason: '「八十八」不促音化。' },
            { text: 'はっじゅうはちえん', isCorrect: false, reason: '「八十」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八十八円」讀「はちじゅうはちえん」。', relatedRules: ['金額的讀法'] },
        sourceItem: { value: 88, kanji: '八十八円', reading: 'はちじゅうはちえん' }
    },
    {
        id: 'num_tens_extra_13', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「九十九」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「九十九」的正確讀音是？',
        options: [
            { text: 'きゅうじゅうきゅう', isCorrect: true, reason: '正確！「九十九」讀「きゅうじゅうきゅう」。' },
            { text: 'くじゅうく', isCorrect: false, reason: '為避諱「苦」，多用「きゅう」。' },
            { text: 'きゅうじゅっきゅう', isCorrect: false, reason: '「九十九」不促音化。' },
            { text: 'ここじゅうここ', isCorrect: false, reason: '「ここ」不是「九」的讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九十九」讀「きゅうじゅうきゅう」。', relatedRules: ['數字組合的讀法'] },
        sourceItem: { value: 99, kanji: '九十九', reading: 'きゅうじゅうきゅう' }
    },
    {
        id: 'num_tens_extra_14', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '試験は＿＿点満点です。（一百分滿分）', stem_zh: '考試滿分一百分。',
        options: [
            { text: 'ひゃくてん', isCorrect: true, reason: '正確！「百点」讀「ひゃくてん」。' },
            { text: 'ひゃってん', isCorrect: false, reason: '「百」後不促音化。' },
            { text: 'もてん', isCorrect: false, reason: '分數使用音讀。' },
            { text: 'いちひゃくてん', isCorrect: false, reason: '「百」前面不加「いち」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「百点」讀「ひゃくてん」。', relatedRules: ['分數的讀法'] },
        sourceItem: { value: 100, kanji: '百点', reading: 'ひゃくてん' }
    },
    {
        id: 'num_tens_extra_15', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '年齡詢問', stem_zh: '年齡詢問',
        dialogue: { speakerA: '祖父は何歳ですか？', speakerB: '＿＿です。（九十五歲）' },
        options: [
            { text: 'きゅうじゅうごさい', isCorrect: true, reason: '正確！「九十五歳」讀「きゅうじゅうごさい」。' },
            { text: 'くじゅうごさい', isCorrect: false, reason: '為避諱「苦」，多用「きゅう」。' },
            { text: 'きゅうじゅっごさい', isCorrect: false, reason: '「九十五」不促音化。' },
            { text: 'きゅうじゅういつさい', isCorrect: false, reason: '「五」讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九十五歳」讀「きゅうじゅうごさい」。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 95, kanji: '九十五歳', reading: 'きゅうじゅうごさい' }
    },

    // ===== 比較題與陷阱題 =====
    {
        id: 'num_tens_compare_1', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '以下哪組讀法都正確？', stem_zh: '以下哪組讀法都正確？',
        options: [
            { text: '14(じゅうよん)、24(にじゅうよん)、34(さんじゅうよん)', isCorrect: true, reason: '正確！這些都是正確的讀法。' },
            { text: '14(じゅうし)、24(にじゅうし)、34(さんじゅうし)', isCorrect: false, reason: '雖然語法正確，但日常避諱「死」。' },
            { text: '14(とよっつ)、24(はたよっつ)、34(みそよっつ)', isCorrect: false, reason: '這些不是正確的組合讀法。' },
            { text: '14(じゅっし)、24(にじゅっし)、34(さんじゅっし)', isCorrect: false, reason: '這些讀法錯誤。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '14、24、34等含4的數字，日常多用「よん」避諱「死」。', trapExplanation: '這是陷阱題，測試避諱習慣。', relatedRules: ['四の避諱讀法'] },
        sourceItem: { value: 0, kanji: '含4數字', reading: '避諱讀法' }
    },
    {
        id: 'num_tens_compare_2', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '以下哪組日期讀法正確？', stem_zh: '以下哪組日期讀法正確？',
        options: [
            { text: '14日(じゅうよっか)、24日(にじゅうよっか)、20日(はつか)', isCorrect: true, reason: '正確！這些都是特殊讀法。' },
            { text: '14日(じゅうよんにち)、24日(にじゅうよんにち)、20日(にじゅうにち)', isCorrect: false, reason: '這些日期有特殊讀法。' },
            { text: '14日(とよっか)、24日(はたよっか)、20日(ふたじゅう)', isCorrect: false, reason: '這些讀法錯誤。' },
            { text: '全部用音讀', isCorrect: false, reason: '這些日期有訓讀保留。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '14日、24日保留「よっか」，20日讀「はつか」。', trapExplanation: '這是陷阱題，測試日期特殊讀法。', relatedRules: ['日期的特殊讀法'] },
        sourceItem: { value: 0, kanji: '特殊日期', reading: '特殊讀法' }
    },
    {
        id: 'num_tens_compare_3', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '以下哪個說法正確？', stem_zh: '以下哪個說法正確？',
        options: [
            { text: '整十數後接「歳」會促音化', isCorrect: true, reason: '正確！如30歳讀「さんじゅっさい」。' },
            { text: '整十數後接「歳」不變化', isCorrect: false, reason: '錯誤，會促音化。' },
            { text: '整十數後接「歳」會濁音化', isCorrect: false, reason: '錯誤，是促音化不是濁音化。' },
            { text: '只有20歳會變化', isCorrect: false, reason: '錯誤，所有整十歲都會促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十」＋「歳」會促音化為「じゅっさい」。', trapExplanation: '這是陷阱題，測試促音化規則。', relatedRules: ['歳的促音化'] },
        sourceItem: { value: 0, kanji: '〜歳', reading: '促音化規則' }
    },
    {
        id: 'num_tens_compare_4', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '以下哪個說法正確？', stem_zh: '以下哪個說法正確？',
        options: [
            { text: '整十數後接「分」會促音化+半濁音化', isCorrect: true, reason: '正確！如60分讀「ろくじゅっぷん」。' },
            { text: '整十數後接「分」只會濁音化', isCorrect: false, reason: '錯誤，是促音化+半濁音化。' },
            { text: '整十數後接「分」不變化', isCorrect: false, reason: '錯誤，會促音化+半濁音化。' },
            { text: '只有10分會變化', isCorrect: false, reason: '錯誤，所有整十分都會變化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十」＋「分」會促音化+半濁音化為「じゅっぷん」。', trapExplanation: '這是陷阱題，測試分的音變規則。', relatedRules: ['分的音變規則'] },
        sourceItem: { value: 0, kanji: '〜分', reading: '音變規則' }
    },

    // ===== 綜合複習題 =====
    {
        id: 'num_tens_review_1', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '十位數的基本組合規則是？', stem_zh: '十位數的基本組合規則是？',
        options: [
            { text: '使用音讀組合，如「にじゅう」「さんじゅう」', isCorrect: true, reason: '正確！十位數使用音讀組合。' },
            { text: '使用訓讀組合', isCorrect: false, reason: '錯誤，十位數用音讀。' },
            { text: '可以隨意混合音讀訓讀', isCorrect: false, reason: '錯誤，有固定規則。' },
            { text: '每個數字讀法都不同', isCorrect: false, reason: '錯誤，有規律可循。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '十位數基本使用音讀組合。', relatedRules: ['十位數的基本規則'] },
        sourceItem: { value: 0, kanji: '十位數', reading: '基本規則' }
    },
    {
        id: 'num_tens_review_2', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '哪些數字在日常中常用「避諱讀法」？', stem_zh: '哪些數字在日常中常用「避諱讀法」？',
        options: [
            { text: '4(よん)、7(なな)、9(きゅう)', isCorrect: true, reason: '正確！避諱「死」「一」「苦」的混淆。' },
            { text: '只有4避諱', isCorrect: false, reason: '錯誤，7和9也有避諱讀法。' },
            { text: '1-10都有避諱讀法', isCorrect: false, reason: '錯誤，主要是4、7、9。' },
            { text: '沒有數字需要避諱', isCorrect: false, reason: '錯誤，日本文化中有避諱習慣。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '4、7、9有避諱讀法：よん、なな、きゅう。', relatedRules: ['避諱讀法'] },
        sourceItem: { value: 0, kanji: '避諱', reading: '讀法' }
    },
    {
        id: 'num_tens_review_3', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「二十」相關的特殊讀法有哪些？', stem_zh: '「二十」相關的特殊讀法有哪些？',
        options: [
            { text: '二十歳(はたち)、二十日(はつか)', isCorrect: true, reason: '正確！這兩個是完全特殊的讀法。' },
            { text: '只有二十歳特殊', isCorrect: false, reason: '錯誤，二十日也特殊。' },
            { text: '只有二十日特殊', isCorrect: false, reason: '錯誤，二十歳也特殊。' },
            { text: '二十沒有特殊讀法', isCorrect: false, reason: '錯誤，有兩個重要的特殊讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十歳」讀「はたち」，「二十日」讀「はつか」。', relatedRules: ['二十的特殊讀法'] },
        sourceItem: { value: 20, kanji: '二十', reading: '特殊讀法' }
    },
    {
        id: 'num_tens_extra_16', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '授業は＿＿分です。（四十五分鐘）', stem_zh: '課堂是四十五分鐘。',
        options: [
            { text: 'よんじゅうごふん', isCorrect: true, reason: '正確！「四十五分」讀「よんじゅうごふん」。' },
            { text: 'しじゅうごふん', isCorrect: false, reason: '避諱「死」，多用「よん」。' },
            { text: 'よんじゅうごぷん', isCorrect: false, reason: '「五」後「分」讀「ふん」。' },
            { text: 'よじゅうごふん', isCorrect: false, reason: '缺少「ん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四十五分」讀「よんじゅうごふん」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 45, kanji: '四十五分', reading: 'よんじゅうごふん' }
    },
    {
        id: 'num_tens_extra_17', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '時間詢問', stem_zh: '時間詢問',
        dialogue: { speakerA: '何分かかりますか？', speakerB: '＿＿です。（二十五分）' },
        options: [
            { text: 'にじゅうごふん', isCorrect: true, reason: '正確！「二十五分」讀「にじゅうごふん」。' },
            { text: 'にじゅうごぷん', isCorrect: false, reason: '「五」後「分」讀「ふん」。' },
            { text: 'にじゅっごふん', isCorrect: false, reason: '「二十五」不促音化。' },
            { text: 'はついつふん', isCorrect: false, reason: '分鐘使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十五分」讀「にじゅうごふん」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 25, kanji: '二十五分', reading: 'にじゅうごふん' }
    },
    {
        id: 'num_tens_extra_18', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「二十二」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「二十二」的正確讀音是？',
        options: [
            { text: 'にじゅうに', isCorrect: true, reason: '正確！「二十二」讀「にじゅうに」。' },
            { text: 'はたに', isCorrect: false, reason: '「はた」只用於特殊詞如「はたち」。' },
            { text: 'にじゅっに', isCorrect: false, reason: '「二十二」不促音化。' },
            { text: 'ふたじゅうふた', isCorrect: false, reason: '組合數字使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十二」讀「にじゅうに」。', relatedRules: ['數字組合的讀法'] },
        sourceItem: { value: 22, kanji: '二十二', reading: 'にじゅうに' }
    },
    {
        id: 'num_tens_extra_19', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: 'バスは＿＿番です。（二十三號）', stem_zh: '公車是23號。',
        options: [
            { text: 'にじゅうさんばん', isCorrect: true, reason: '正確！「二十三番」讀「にじゅうさんばん」。' },
            { text: 'にじゅうみばん', isCorrect: false, reason: '號碼使用音讀。' },
            { text: 'にじゅっさんばん', isCorrect: false, reason: '「二十三」不促音化。' },
            { text: 'はたさんばん', isCorrect: false, reason: '號碼使用音讀組合。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十三番」讀「にじゅうさんばん」。', relatedRules: ['號碼的讀法'] },
        sourceItem: { value: 23, kanji: '二十三番', reading: 'にじゅうさんばん' }
    },
    {
        id: 'num_tens_extra_20', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '詢問樓層', stem_zh: '詢問樓層',
        dialogue: { speakerA: '何階ですか？', speakerB: '＿＿です。（二十六樓）' },
        options: [
            { text: 'にじゅうろっかい', isCorrect: true, reason: '正確！「二十六階」讀「にじゅうろっかい」。' },
            { text: 'にじゅうろくかい', isCorrect: false, reason: '「六」＋「階」促音化。' },
            { text: 'にじゅうむかい', isCorrect: false, reason: '樓層使用音讀。' },
            { text: 'はたむっかい', isCorrect: false, reason: '樓層使用音讀組合。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十六階」讀「にじゅうろっかい」，「六」促音化。', relatedRules: ['階的讀法'] },
        sourceItem: { value: 26, kanji: '二十六階', reading: 'にじゅうろっかい' }
    },
    {
        id: 'num_tens_extra_21', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「二十七」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「二十七」的正確讀音是？',
        options: [
            { text: 'にじゅうなな', isCorrect: true, reason: '正確！「二十七」多讀「にじゅうなな」。' },
            { text: 'にじゅうしち', isCorrect: false, reason: '為避免混淆，多用「なな」。' },
            { text: 'にじゅっなな', isCorrect: false, reason: '「二十七」不促音化。' },
            { text: 'はたなな', isCorrect: false, reason: '「はた」只用於特殊詞。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十七」多讀「にじゅうなな」。', relatedRules: ['數字組合的讀法'] },
        sourceItem: { value: 27, kanji: '二十七', reading: 'にじゅうなな' }
    },
    {
        id: 'num_tens_extra_22', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '教室は＿＿号室です。（二十八號房）', stem_zh: '教室是28號房。',
        options: [
            { text: 'にじゅうはちごうしつ', isCorrect: true, reason: '正確！「二十八号室」讀「にじゅうはちごうしつ」。' },
            { text: 'にじゅうやごうしつ', isCorrect: false, reason: '房號使用音讀。' },
            { text: 'にじゅっぱちごうしつ', isCorrect: false, reason: '「二十八」不促音化。' },
            { text: 'はたはちごうしつ', isCorrect: false, reason: '房號使用音讀組合。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十八号室」讀「にじゅうはちごうしつ」。', relatedRules: ['房號的讀法'] },
        sourceItem: { value: 28, kanji: '二十八号室', reading: 'にじゅうはちごうしつ' }
    },
    {
        id: 'num_tens_extra_23', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '詢問日期', stem_zh: '詢問日期',
        dialogue: { speakerA: '締め切りは何日ですか？', speakerB: '＿＿です。（二十九日）' },
        options: [
            { text: 'にじゅうくにち', isCorrect: true, reason: '正確！「二十九日」讀「にじゅうくにち」。' },
            { text: 'にじゅうきゅうにち', isCorrect: false, reason: '日期中「九」多讀「く」。' },
            { text: 'にじゅうここのか', isCorrect: false, reason: '11日以上不用訓讀。' },
            { text: 'はたここのか', isCorrect: false, reason: '11日以上使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十九日」讀「にじゅうくにち」。', relatedRules: ['日期的讀法'] },
        sourceItem: { value: 29, kanji: '二十九日', reading: 'にじゅうくにち' }
    },
    {
        id: 'num_tens_extra_24', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '以下哪個「十」開頭的數字讀法有特殊之處？', stem_zh: '以下哪個「十」開頭的數字讀法有特殊之處？',
        options: [
            { text: '十四日讀「じゅうよっか」保留訓讀', isCorrect: true, reason: '正確！14日保留「よっか」的讀法。' },
            { text: '十三日讀特殊讀法', isCorrect: false, reason: '十三日用音讀「じゅうさんにち」。' },
            { text: '十五日讀特殊讀法', isCorrect: false, reason: '十五日用音讀「じゅうごにち」。' },
            { text: '十位數日期都用訓讀', isCorrect: false, reason: '只有14日保留訓讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '14日保留「よっか」讀法，讀「じゅうよっか」。', trapExplanation: '這是陷阱題，測試11-19日中的特殊讀法。', relatedRules: ['十四日的特殊讀法'] },
        sourceItem: { value: 14, kanji: '十四日', reading: 'じゅうよっか' }
    },
    {
        id: 'num_tens_extra_25', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '電話番号は＿＿です。（1234）', stem_zh: '電話號碼是1234。',
        options: [
            { text: 'いち・に・さん・よん', isCorrect: true, reason: '正確！電話號碼逐字念出。' },
            { text: 'せんにひゃくさんじゅうよん', isCorrect: false, reason: '電話號碼不讀成整數。' },
            { text: 'ひと・ふた・み・よ', isCorrect: false, reason: '電話號碼用音讀。' },
            { text: 'いっせんにひゃくさんじゅうし', isCorrect: false, reason: '電話號碼不讀成整數。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '電話號碼逐個數字讀出。', relatedRules: ['電話番号的讀法'] },
        sourceItem: { value: 1234, kanji: '一二三四', reading: 'いちにさんよん' }
    },
    {
        id: 'num_tens_extra_26', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '詢問時間', stem_zh: '詢問時間',
        dialogue: { speakerA: '何時に出発しますか？', speakerB: '＿＿に出発します。（十一時半）' },
        options: [
            { text: 'じゅういちじはん', isCorrect: true, reason: '正確！「十一時半」讀「じゅういちじはん」。' },
            { text: 'といちじはん', isCorrect: false, reason: '時間使用音讀。' },
            { text: 'じゅういっじはん', isCorrect: false, reason: '「時」前不促音化。' },
            { text: 'じゅういちときはん', isCorrect: false, reason: '「とき」是「時」的訓讀，時刻用「じ」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十一時半」讀「じゅういちじはん」。', relatedRules: ['時間的讀法'] },
        sourceItem: { value: 11.5, kanji: '十一時半', reading: 'じゅういちじはん' }
    },
    {
        id: 'num_tens_extra_27', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「三十三」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「三十三」的正確讀音是？',
        options: [
            { text: 'さんじゅうさん', isCorrect: true, reason: '正確！「三十三」讀「さんじゅうさん」。' },
            { text: 'みそみ', isCorrect: false, reason: '現代日語不用這個讀法。' },
            { text: 'さんじゅっさん', isCorrect: false, reason: '「三十三」不促音化。' },
            { text: 'みじゅうみ', isCorrect: false, reason: '組合數字使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三十三」讀「さんじゅうさん」。', relatedRules: ['數字組合的讀法'] },
        sourceItem: { value: 33, kanji: '三十三', reading: 'さんじゅうさん' }
    },
    {
        id: 'num_tens_extra_28', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '彼は＿＿番目です。（四十四號）', stem_zh: '他是第44號。',
        options: [
            { text: 'よんじゅうよんばんめ', isCorrect: true, reason: '正確！「四十四番目」讀「よんじゅうよんばんめ」。' },
            { text: 'しじゅうしばんめ', isCorrect: false, reason: '避諱「死」，多用「よん」。' },
            { text: 'よんじゅっよんばんめ', isCorrect: false, reason: '「四十四」不促音化。' },
            { text: 'よじゅうよばんめ', isCorrect: false, reason: '缺少「ん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四十四番目」讀「よんじゅうよんばんめ」。', relatedRules: ['序數的讀法'] },
        sourceItem: { value: 44, kanji: '四十四番目', reading: 'よんじゅうよんばんめ' }
    },
    {
        id: 'num_tens_extra_29', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '速度詢問', stem_zh: '速度詢問',
        dialogue: { speakerA: '制限速度は何キロですか？', speakerB: '＿＿キロです。（五十公里）' },
        options: [
            { text: 'ごじゅう', isCorrect: true, reason: '正確！「五十」讀「ごじゅう」。' },
            { text: 'いつじゅう', isCorrect: false, reason: '速度使用音讀。' },
            { text: 'ごじゅっ', isCorrect: false, reason: '「キロ」前不促音化。' },
            { text: 'こじゅう', isCorrect: false, reason: '「五」讀「ご」不是「こ」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五十キロ」讀「ごじゅうキロ」。', relatedRules: ['速度的讀法'] },
        sourceItem: { value: 50, kanji: '五十', reading: 'ごじゅう' }
    },
    {
        id: 'num_tens_extra_30', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「六十六」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「六十六」的正確讀音是？',
        options: [
            { text: 'ろくじゅうろく', isCorrect: true, reason: '正確！「六十六」讀「ろくじゅうろく」。' },
            { text: 'むじゅうむ', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'ろくじゅっろく', isCorrect: false, reason: '「六十六」不促音化。' },
            { text: 'ろっじゅうろく', isCorrect: false, reason: '「六十」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六十六」讀「ろくじゅうろく」。', relatedRules: ['數字組合的讀法'] },
        sourceItem: { value: 66, kanji: '六十六', reading: 'ろくじゅうろく' }
    },
    {
        id: 'num_tens_extra_31', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '試合は＿＿分です。（八十分鐘）', stem_zh: '比賽是八十分鐘。',
        options: [
            { text: 'はちじゅっぷん', isCorrect: true, reason: '正確！「八十分」讀「はちじゅっぷん」。' },
            { text: 'はちじゅうふん', isCorrect: false, reason: '「十」＋「分」促音化+半濁音化。' },
            { text: 'やじゅっぷん', isCorrect: false, reason: '分鐘使用音讀。' },
            { text: 'はっじゅっぷん', isCorrect: false, reason: '「八十」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八十分」讀「はちじゅっぷん」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 80, kanji: '八十分', reading: 'はちじゅっぷん' }
    },
    {
        id: 'num_tens_extra_32', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '詢問價格', stem_zh: '詢問價格',
        dialogue: { speakerA: 'お会計はいくらですか？', speakerB: '＿＿円です。（九十九圓）' },
        options: [
            { text: 'きゅうじゅうきゅうえん', isCorrect: true, reason: '正確！「九十九円」讀「きゅうじゅうきゅうえん」。' },
            { text: 'くじゅうくえん', isCorrect: false, reason: '為避諱「苦」，多用「きゅう」。' },
            { text: 'きゅうじゅっきゅうえん', isCorrect: false, reason: '「九十九」不促音化。' },
            { text: 'ここじゅうここえん', isCorrect: false, reason: '「ここ」不是「九」的讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九十九円」讀「きゅうじゅうきゅうえん」。', relatedRules: ['金額的讀法'] },
        sourceItem: { value: 99, kanji: '九十九円', reading: 'きゅうじゅうきゅうえん' }
    },
    {
        id: 'num_tens_extra_33', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '以下哪個十位數的年齡讀法正確？', stem_zh: '以下哪個十位數的年齡讀法正確？',
        options: [
            { text: '20歳(はたち)、30歳(さんじゅっさい)、40歳(よんじゅっさい)', isCorrect: true, reason: '正確！這些都是正確的讀法。' },
            { text: '20歳(にじゅうさい)、30歳(さんじゅうさい)、40歳(しじゅうさい)', isCorrect: false, reason: '20歳有特殊讀法，且整十歲促音化。' },
            { text: '所有整十歲都讀「〜じゅうさい」', isCorrect: false, reason: '整十歲促音化為「〜じゅっさい」。' },
            { text: '所有整十歲都有特殊讀法', isCorrect: false, reason: '只有20歳有特殊讀法「はたち」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '20歳讀「はたち」，其他整十歲促音化。', trapExplanation: '這是陷阱題，測試年齡讀法。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 0, kanji: '整十歲', reading: '讀法規則' }
    },
    {
        id: 'num_tens_extra_34', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '電車は＿＿分後に来ます。（十五分鐘）', stem_zh: '電車十五分鐘後來。',
        options: [
            { text: 'じゅうごふん', isCorrect: true, reason: '正確！「十五分」讀「じゅうごふん」。' },
            { text: 'じゅうごぷん', isCorrect: false, reason: '「五」後「分」讀「ふん」。' },
            { text: 'じゅっごふん', isCorrect: false, reason: '「十五」不促音化。' },
            { text: 'といつふん', isCorrect: false, reason: '分鐘使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十五分」讀「じゅうごふん」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 15, kanji: '十五分', reading: 'じゅうごふん' }
    },
    {
        id: 'num_tens_extra_35', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '人數詢問', stem_zh: '人數詢問',
        dialogue: { speakerA: '会場に何人いますか？', speakerB: '＿＿人います。（七十八人）' },
        options: [
            { text: 'ななじゅうはちにん', isCorrect: true, reason: '正確！「七十八人」讀「ななじゅうはちにん」。' },
            { text: 'しちじゅうはちにん', isCorrect: false, reason: '為避免混淆，多用「なな」。' },
            { text: 'ななじゅっぱちにん', isCorrect: false, reason: '「七十八」不促音化。' },
            { text: 'なのじゅうやにん', isCorrect: false, reason: '人數使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七十八人」讀「ななじゅうはちにん」。', relatedRules: ['人數的讀法'] },
        sourceItem: { value: 78, kanji: '七十八人', reading: 'ななじゅうはちにん' }
    },
    {
        id: 'num_tens_extra_36', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「五十一」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「五十一」的正確讀音是？',
        options: [
            { text: 'ごじゅういち', isCorrect: true, reason: '正確！「五十一」讀「ごじゅういち」。' },
            { text: 'いつじゅうひと', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'ごじゅっいち', isCorrect: false, reason: '「五十一」不促音化。' },
            { text: 'こじゅういち', isCorrect: false, reason: '「五」讀「ご」不是「こ」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五十一」讀「ごじゅういち」。', relatedRules: ['數字組合的讀法'] },
        sourceItem: { value: 51, kanji: '五十一', reading: 'ごじゅういち' }
    },
    {
        id: 'num_tens_extra_37', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '彼女は＿＿歳になりました。（二十三歲）', stem_zh: '她二十三歲了。',
        options: [
            { text: 'にじゅうさんさい', isCorrect: true, reason: '正確！「二十三歳」讀「にじゅうさんさい」。' },
            { text: 'はたみさい', isCorrect: false, reason: '「はた」只用於「はたち」。' },
            { text: 'にじゅっさんさい', isCorrect: false, reason: '「二十三」不促音化。' },
            { text: 'ふたじゅうみさい', isCorrect: false, reason: '年齡使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十三歳」讀「にじゅうさんさい」。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 23, kanji: '二十三歳', reading: 'にじゅうさんさい' }
    },
    {
        id: 'num_tens_extra_38', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '詢問時間', stem_zh: '詢問時間',
        dialogue: { speakerA: '映画は何時間ですか？', speakerB: '＿＿時間です。（二時間半）' },
        options: [
            { text: 'にじかんはん', isCorrect: true, reason: '正確！「二時間半」讀「にじかんはん」。' },
            { text: 'ふたじかんはん', isCorrect: false, reason: '時間使用音讀。' },
            { text: 'にっじかんはん', isCorrect: false, reason: '「二」不促音化。' },
            { text: 'にときはん', isCorrect: false, reason: '「時間」讀「じかん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二時間半」讀「にじかんはん」。', relatedRules: ['時間的讀法'] },
        sourceItem: { value: 2.5, kanji: '二時間半', reading: 'にじかんはん' }
    },
    {
        id: 'num_tens_extra_39', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「三十六」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「三十六」的正確讀音是？',
        options: [
            { text: 'さんじゅうろく', isCorrect: true, reason: '正確！「三十六」讀「さんじゅうろく」。' },
            { text: 'みそむ', isCorrect: false, reason: '現代日語不用這個讀法。' },
            { text: 'さんじゅっろく', isCorrect: false, reason: '「三十六」不促音化。' },
            { text: 'みじゅうろく', isCorrect: false, reason: '組合數字使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三十六」讀「さんじゅうろく」。', relatedRules: ['數字組合的讀法'] },
        sourceItem: { value: 36, kanji: '三十六', reading: 'さんじゅうろく' }
    },
    {
        id: 'num_tens_extra_40', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '授業は＿＿分後に終わります。（十分鐘）', stem_zh: '課堂十分鐘後結束。',
        options: [
            { text: 'じゅっぷん', isCorrect: true, reason: '正確！「十分」讀「じゅっぷん」。' },
            { text: 'じゅうふん', isCorrect: false, reason: '「十」＋「分」促音化+半濁音化。' },
            { text: 'とふん', isCorrect: false, reason: '分鐘使用音讀。' },
            { text: 'じゅぷん', isCorrect: false, reason: '缺少促音。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十分」讀「じゅっぷん」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 10, kanji: '十分', reading: 'じゅっぷん' }
    },
    {
        id: 'num_tens_extra_41', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: true,
        stem: '詢問日期', stem_zh: '詢問日期',
        dialogue: { speakerA: '祝日は何日ですか？', speakerB: '＿＿です。（二十三日）' },
        options: [
            { text: 'にじゅうさんにち', isCorrect: true, reason: '正確！「二十三日」讀「にじゅうさんにち」。' },
            { text: 'はたみっか', isCorrect: false, reason: '11日以上使用音讀。' },
            { text: 'にじゅうみっか', isCorrect: false, reason: '11日以上不用訓讀日期。' },
            { text: 'にじゅっさんにち', isCorrect: false, reason: '「二十三」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十三日」讀「にじゅうさんにち」。', relatedRules: ['日期的讀法'] },
        sourceItem: { value: 23, kanji: '二十三日', reading: 'にじゅうさんにち' }
    },
    {
        id: 'num_tens_extra_42', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '以下哪個說法是正確的？', stem_zh: '以下哪個說法是正確的？',
        options: [
            { text: '十位數基本用音讀組合，但有避諱和特殊讀法', isCorrect: true, reason: '正確！這是十位數讀法的基本特點。' },
            { text: '十位數全部用訓讀', isCorrect: false, reason: '錯誤，十位數用音讀。' },
            { text: '十位數沒有特殊讀法', isCorrect: false, reason: '錯誤，如20歲、20日有特殊讀法。' },
            { text: '十位數的數字可以隨意讀', isCorrect: false, reason: '錯誤，有固定規則。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '十位數使用音讀組合，但有避諱（4、7、9）和特殊讀法（20歲、20日）。', relatedRules: ['十位數的讀法總結'] },
        sourceItem: { value: 0, kanji: '十位數', reading: '總結' }
    },

    // ===== 追加100題（43-142）=====
    {
        id: 'num_tens_extra_43', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「四十五」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「四十五」的正確讀音是？',
        options: [
            { text: 'よんじゅうご', isCorrect: true, reason: '正確！「四十五」讀「よんじゅうご」。' },
            { text: 'しじゅうご', isCorrect: false, reason: '「四十」讀「よんじゅう」。' },
            { text: 'よじゅうご', isCorrect: false, reason: '需要「よん」。' },
            { text: 'よんじゅういつ', isCorrect: false, reason: '「五」用音讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四十五」讀「よんじゅうご」。', relatedRules: ['十位數的讀法'] },
        sourceItem: { value: 45, kanji: '四十五', reading: 'よんじゅうご' }
    },
    {
        id: 'num_tens_extra_44', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '彼は＿＿歳です。（五十六）', stem_zh: '他五十六歲。',
        options: [
            { text: 'ごじゅうろく', isCorrect: true, reason: '正確！「五十六」讀「ごじゅうろく」。' },
            { text: 'いつじゅうろく', isCorrect: false, reason: '用音讀「ご」。' },
            { text: 'ごじゅっろく', isCorrect: false, reason: '不促音化。' },
            { text: 'ごじゅむ', isCorrect: false, reason: '「六」用音讀「ろく」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五十六」讀「ごじゅうろく」。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 56, kanji: '五十六', reading: 'ごじゅうろく' }
    },
    {
        id: 'num_tens_extra_45', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'このパンはいくらですか？', speakerB: '＿＿円です。（六十七）' },
        options: [
            { text: 'ろくじゅうなな', isCorrect: true, reason: '正確！「六十七」讀「ろくじゅうなな」或「ろくじゅうしち」。' },
            { text: 'むじゅうなな', isCorrect: false, reason: '用音讀「ろく」。' },
            { text: 'ろくじゅっなな', isCorrect: false, reason: '不促音化。' },
            { text: 'ろくとなな', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六十七」讀「ろくじゅうなな」。', relatedRules: ['數字的讀法'] },
        sourceItem: { value: 67, kanji: '六十七', reading: 'ろくじゅうなな' }
    },
    {
        id: 'num_tens_extra_46', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '「七十」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「七十」的正確讀音是？',
        options: [
            { text: 'ななじゅう', isCorrect: true, reason: '正確！「七十」讀「ななじゅう」。' },
            { text: 'しちじゅう', isCorrect: false, reason: '陷阱！「七十」讀「ななじゅう」，不是「しちじゅう」。' },
            { text: 'なのじゅう', isCorrect: false, reason: '用「なな」。' },
            { text: 'ななとお', isCorrect: false, reason: '用音讀「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七十」讀「ななじゅう」。', trapExplanation: '為避免與「しち」混淆，「七十」讀「ななじゅう」。', relatedRules: ['7的讀法'] },
        sourceItem: { value: 70, kanji: '七十', reading: 'ななじゅう' }
    },
    {
        id: 'num_tens_extra_47', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '電車は＿＿分後に来ます。（八十）', stem_zh: '電車八十分鐘後來。',
        options: [
            { text: 'はちじゅっぷん', isCorrect: true, reason: '正確！「八十分」讀「はちじゅっぷん」。' },
            { text: 'はちじゅうふん', isCorrect: false, reason: '「分」前「十」促音化。' },
            { text: 'やじゅっぷん', isCorrect: false, reason: '用音讀「はち」。' },
            { text: 'はちとふん', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八十分」讀「はちじゅっぷん」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 80, kanji: '八十分', reading: 'はちじゅっぷん' }
    },
    {
        id: 'num_tens_extra_48', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: true,
        stem: '問年齡', stem_zh: '問年齡',
        dialogue: { speakerA: 'お父さんは何歳ですか？', speakerB: '＿＿歳です。（九十）' },
        options: [
            { text: 'きゅうじゅう', isCorrect: true, reason: '正確！「九十」讀「きゅうじゅう」。' },
            { text: 'くじゅう', isCorrect: false, reason: '陷阱！「九十」讀「きゅうじゅう」，不是「くじゅう」。' },
            { text: 'ここのじゅう', isCorrect: false, reason: '用音讀「きゅう」。' },
            { text: 'きゅうとお', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九十」讀「きゅうじゅう」。', trapExplanation: '「九」在十位數用「きゅう」。', relatedRules: ['9的讀法'] },
        sourceItem: { value: 90, kanji: '九十', reading: 'きゅうじゅう' }
    },
    {
        id: 'num_tens_extra_49', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「十一」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「十一」的正確讀音是？',
        options: [
            { text: 'じゅういち', isCorrect: true, reason: '正確！「十一」讀「じゅういち」。' },
            { text: 'とおいち', isCorrect: false, reason: '用音讀「じゅう」。' },
            { text: 'じゅっいち', isCorrect: false, reason: '「十一」不促音化。' },
            { text: 'じっいち', isCorrect: false, reason: '「十一」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十一」讀「じゅういち」。', relatedRules: ['十位數的讀法'] },
        sourceItem: { value: 11, kanji: '十一', reading: 'じゅういち' }
    },
    {
        id: 'num_tens_extra_50', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '教室に学生が＿＿人います。（十二）', stem_zh: '教室裡有十二個學生。',
        options: [
            { text: 'じゅうに', isCorrect: true, reason: '正確！「十二人」讀「じゅうににん」。' },
            { text: 'とおに', isCorrect: false, reason: '用音讀「じゅう」。' },
            { text: 'じゅふた', isCorrect: false, reason: '用音讀「に」。' },
            { text: 'じゅっに', isCorrect: false, reason: '「十二」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十二人」讀「じゅうににん」。', relatedRules: ['人數的讀法'] },
        sourceItem: { value: 12, kanji: '十二', reading: 'じゅうに' }
    },
    {
        id: 'num_tens_extra_51', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '本は何冊ありますか？', speakerB: '＿＿冊あります。（十三）' },
        options: [
            { text: 'じゅうさん', isCorrect: true, reason: '正確！「十三冊」讀「じゅうさんさつ」。' },
            { text: 'とおみ', isCorrect: false, reason: '用音讀。' },
            { text: 'じゅっさん', isCorrect: false, reason: '「十三」不促音化。' },
            { text: 'じゅうみっ', isCorrect: false, reason: '用音讀「さん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十三」讀「じゅうさん」。', relatedRules: ['冊的讀法'] },
        sourceItem: { value: 13, kanji: '十三', reading: 'じゅうさん' }
    },
    {
        id: 'num_tens_extra_52', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '「十四」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「十四」的正確讀音是？',
        options: [
            { text: 'じゅうよん', isCorrect: true, reason: '正確！「十四」讀「じゅうよん」。' },
            { text: 'じゅうし', isCorrect: false, reason: '陷阱！「十四」讀「じゅうよん」，避免「し」。' },
            { text: 'とおよ', isCorrect: false, reason: '用音讀「じゅう」。' },
            { text: 'じゅっよん', isCorrect: false, reason: '「十四」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十四」讀「じゅうよん」。', trapExplanation: '「四」避諱「し」，讀「よん」。', relatedRules: ['4的讀法'] },
        sourceItem: { value: 14, kanji: '十四', reading: 'じゅうよん' }
    },
    {
        id: 'num_tens_extra_53', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '駅まで＿＿分です。（十五）', stem_zh: '到車站十五分鐘。',
        options: [
            { text: 'じゅうご', isCorrect: true, reason: '正確！「十五分」讀「じゅうごふん」。' },
            { text: 'とおいつ', isCorrect: false, reason: '用音讀。' },
            { text: 'じゅっご', isCorrect: false, reason: '「十五」不促音化。' },
            { text: 'じっご', isCorrect: false, reason: '「十五」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十五」讀「じゅうご」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 15, kanji: '十五', reading: 'じゅうご' }
    },
    {
        id: 'num_tens_extra_54', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'このペンはいくらですか？', speakerB: '＿＿円です。（十六）' },
        options: [
            { text: 'じゅうろく', isCorrect: true, reason: '正確！「十六」讀「じゅうろく」。' },
            { text: 'とおむ', isCorrect: false, reason: '用音讀。' },
            { text: 'じゅっろく', isCorrect: false, reason: '「十六」不促音化。' },
            { text: 'じっろく', isCorrect: false, reason: '「十六」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十六」讀「じゅうろく」。', relatedRules: ['數字的讀法'] },
        sourceItem: { value: 16, kanji: '十六', reading: 'じゅうろく' }
    },
    {
        id: 'num_tens_extra_55', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '「十七」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「十七」的正確讀音是？',
        options: [
            { text: 'じゅうなな', isCorrect: true, reason: '正確！「十七」讀「じゅうなな」或「じゅうしち」。' },
            { text: 'じゅうしち', isCorrect: true, reason: '「じゅうしち」也正確。' },
            { text: 'とおなの', isCorrect: false, reason: '用音讀「じゅう」。' },
            { text: 'じゅっなな', isCorrect: false, reason: '「十七」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十七」讀「じゅうなな」或「じゅうしち」。', relatedRules: ['7的讀法'] },
        sourceItem: { value: 17, kanji: '十七', reading: 'じゅうなな' }
    },
    {
        id: 'num_tens_extra_56', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '彼女は＿＿歳です。（十八）', stem_zh: '她十八歲。',
        options: [
            { text: 'じゅうはち', isCorrect: true, reason: '正確！「十八」讀「じゅうはち」。' },
            { text: 'とおや', isCorrect: false, reason: '用音讀。' },
            { text: 'じゅっはち', isCorrect: false, reason: '「十八」不促音化。' },
            { text: 'じっはち', isCorrect: false, reason: '「十八」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十八」讀「じゅうはち」。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 18, kanji: '十八', reading: 'じゅうはち' }
    },
    {
        id: 'num_tens_extra_57', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: true,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '学生は何人いますか？', speakerB: '＿＿人います。（十九）' },
        options: [
            { text: 'じゅうきゅう', isCorrect: true, reason: '正確！「十九」讀「じゅうきゅう」。' },
            { text: 'じゅうく', isCorrect: false, reason: '陷阱！「十九」讀「じゅうきゅう」。' },
            { text: 'とおここの', isCorrect: false, reason: '用音讀。' },
            { text: 'じゅっきゅう', isCorrect: false, reason: '「十九」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十九」讀「じゅうきゅう」。', trapExplanation: '「九」在組合數中讀「きゅう」。', relatedRules: ['9的讀法'] },
        sourceItem: { value: 19, kanji: '十九', reading: 'じゅうきゅう' }
    },
    {
        id: 'num_tens_extra_58', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「二十一」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「二十一」的正確讀音是？',
        options: [
            { text: 'にじゅういち', isCorrect: true, reason: '正確！「二十一」讀「にじゅういち」。' },
            { text: 'ふたじゅういち', isCorrect: false, reason: '用音讀「に」。' },
            { text: 'にじゅっいち', isCorrect: false, reason: '「二十一」不促音化。' },
            { text: 'にとおいち', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十一」讀「にじゅういち」。', relatedRules: ['十位數的讀法'] },
        sourceItem: { value: 21, kanji: '二十一', reading: 'にじゅういち' }
    },
    {
        id: 'num_tens_extra_59', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '本を＿＿冊読みました。（二十二）', stem_zh: '讀了二十二本書。',
        options: [
            { text: 'にじゅうに', isCorrect: true, reason: '正確！「二十二」讀「にじゅうに」。' },
            { text: 'ふたじゅうふた', isCorrect: false, reason: '用音讀。' },
            { text: 'にじゅっに', isCorrect: false, reason: '「二十二」不促音化。' },
            { text: 'にとおに', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十二」讀「にじゅうに」。', relatedRules: ['冊的讀法'] },
        sourceItem: { value: 22, kanji: '二十二', reading: 'にじゅうに' }
    },
    {
        id: 'num_tens_extra_60', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問年齡', stem_zh: '問年齡',
        dialogue: { speakerA: '弟は何歳ですか？', speakerB: '＿＿歳です。（二十三）' },
        options: [
            { text: 'にじゅうさん', isCorrect: true, reason: '正確！「二十三」讀「にじゅうさん」。' },
            { text: 'ふたじゅうみ', isCorrect: false, reason: '用音讀。' },
            { text: 'にじゅっさん', isCorrect: false, reason: '「二十三」不促音化。' },
            { text: 'にとおさん', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十三」讀「にじゅうさん」。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 23, kanji: '二十三', reading: 'にじゅうさん' }
    },
    {
        id: 'num_tens_extra_61', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '「二十四」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「二十四」的正確讀音是？',
        options: [
            { text: 'にじゅうよん', isCorrect: true, reason: '正確！「二十四」讀「にじゅうよん」。' },
            { text: 'にじゅうし', isCorrect: false, reason: '陷阱！「四」讀「よん」避免「し」。' },
            { text: 'ふたじゅうよ', isCorrect: false, reason: '用音讀「に」。' },
            { text: 'にじゅっよん', isCorrect: false, reason: '不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十四」讀「にじゅうよん」。', trapExplanation: '「四」避諱「し」。', relatedRules: ['4的讀法'] },
        sourceItem: { value: 24, kanji: '二十四', reading: 'にじゅうよん' }
    },
    {
        id: 'num_tens_extra_62', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '会議は＿＿分後に始まります。（二十五）', stem_zh: '會議二十五分鐘後開始。',
        options: [
            { text: 'にじゅうご', isCorrect: true, reason: '正確！「二十五」讀「にじゅうご」。' },
            { text: 'ふたじゅういつ', isCorrect: false, reason: '用音讀。' },
            { text: 'にじゅっご', isCorrect: false, reason: '不促音化。' },
            { text: 'にとおご', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十五」讀「にじゅうご」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 25, kanji: '二十五', reading: 'にじゅうご' }
    },
    {
        id: 'num_tens_extra_63', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: 'ペンは何本ありますか？', speakerB: '＿＿本あります。（二十六）' },
        options: [
            { text: 'にじゅうろく', isCorrect: true, reason: '正確！「二十六」讀「にじゅうろく」。' },
            { text: 'ふたじゅうむ', isCorrect: false, reason: '用音讀。' },
            { text: 'にじゅっろく', isCorrect: false, reason: '不促音化。' },
            { text: 'にとおろく', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十六」讀「にじゅうろく」。', relatedRules: ['本的讀法'] },
        sourceItem: { value: 26, kanji: '二十六', reading: 'にじゅうろく' }
    },
    {
        id: 'num_tens_extra_64', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '「二十七」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「二十七」的正確讀音是？',
        options: [
            { text: 'にじゅうなな', isCorrect: true, reason: '正確！「二十七」讀「にじゅうなな」。' },
            { text: 'にじゅうしち', isCorrect: false, reason: '陷阱！「七」在組合數中讀「なな」更常見。' },
            { text: 'ふたじゅうなの', isCorrect: false, reason: '用音讀「に」。' },
            { text: 'にじゅっなな', isCorrect: false, reason: '不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十七」讀「にじゅうなな」。', trapExplanation: '「七」常讀「なな」避免混淆。', relatedRules: ['7的讀法'] },
        sourceItem: { value: 27, kanji: '二十七', reading: 'にじゅうなな' }
    },
    {
        id: 'num_tens_extra_65', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '彼は＿＿歳です。（二十八）', stem_zh: '他二十八歲。',
        options: [
            { text: 'にじゅうはち', isCorrect: true, reason: '正確！「二十八」讀「にじゅうはち」。' },
            { text: 'ふたじゅうや', isCorrect: false, reason: '用音讀。' },
            { text: 'にじゅっはち', isCorrect: false, reason: '不促音化。' },
            { text: 'にとおはち', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十八」讀「にじゅうはち」。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 28, kanji: '二十八', reading: 'にじゅうはち' }
    },
    {
        id: 'num_tens_extra_66', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: true,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '参加者は何人ですか？', speakerB: '＿＿人です。（二十九）' },
        options: [
            { text: 'にじゅうきゅう', isCorrect: true, reason: '正確！「二十九」讀「にじゅうきゅう」。' },
            { text: 'にじゅうく', isCorrect: false, reason: '陷阱！「九」讀「きゅう」。' },
            { text: 'ふたじゅうここの', isCorrect: false, reason: '用音讀。' },
            { text: 'にじゅっきゅう', isCorrect: false, reason: '不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十九」讀「にじゅうきゅう」。', trapExplanation: '「九」讀「きゅう」。', relatedRules: ['9的讀法'] },
        sourceItem: { value: 29, kanji: '二十九', reading: 'にじゅうきゅう' }
    },
    {
        id: 'num_tens_extra_67', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「三十一」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「三十一」的正確讀音是？',
        options: [
            { text: 'さんじゅういち', isCorrect: true, reason: '正確！「三十一」讀「さんじゅういち」。' },
            { text: 'みじゅういち', isCorrect: false, reason: '用音讀「さん」。' },
            { text: 'さんじゅっいち', isCorrect: false, reason: '不促音化。' },
            { text: 'さんとおいち', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三十一」讀「さんじゅういち」。', relatedRules: ['十位數的讀法'] },
        sourceItem: { value: 31, kanji: '三十一', reading: 'さんじゅういち' }
    },
    {
        id: 'num_tens_extra_68', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '本を＿＿冊買いました。（三十二）', stem_zh: '買了三十二本書。',
        options: [
            { text: 'さんじゅうに', isCorrect: true, reason: '正確！「三十二」讀「さんじゅうに」。' },
            { text: 'みじゅうふた', isCorrect: false, reason: '用音讀。' },
            { text: 'さんじゅっに', isCorrect: false, reason: '不促音化。' },
            { text: 'さんとおに', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三十二」讀「さんじゅうに」。', relatedRules: ['冊的讀法'] },
        sourceItem: { value: 32, kanji: '三十二', reading: 'さんじゅうに' }
    },
    {
        id: 'num_tens_extra_69', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'これはいくらですか？', speakerB: '＿＿円です。（三十三）' },
        options: [
            { text: 'さんじゅうさん', isCorrect: true, reason: '正確！「三十三」讀「さんじゅうさん」。' },
            { text: 'みじゅうみ', isCorrect: false, reason: '用音讀。' },
            { text: 'さんじゅっさん', isCorrect: false, reason: '不促音化。' },
            { text: 'さんとおさん', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三十三」讀「さんじゅうさん」。', relatedRules: ['數字的讀法'] },
        sourceItem: { value: 33, kanji: '三十三', reading: 'さんじゅうさん' }
    },
    {
        id: 'num_tens_extra_70', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '「三十四」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「三十四」的正確讀音是？',
        options: [
            { text: 'さんじゅうよん', isCorrect: true, reason: '正確！「三十四」讀「さんじゅうよん」。' },
            { text: 'さんじゅうし', isCorrect: false, reason: '陷阱！「四」讀「よん」。' },
            { text: 'みじゅうよ', isCorrect: false, reason: '用音讀「さん」。' },
            { text: 'さんじゅっよん', isCorrect: false, reason: '不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三十四」讀「さんじゅうよん」。', trapExplanation: '「四」讀「よん」。', relatedRules: ['4的讀法'] },
        sourceItem: { value: 34, kanji: '三十四', reading: 'さんじゅうよん' }
    },
    {
        id: 'num_tens_extra_71', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '彼女は＿＿歳です。（三十五）', stem_zh: '她三十五歲。',
        options: [
            { text: 'さんじゅうご', isCorrect: true, reason: '正確！「三十五」讀「さんじゅうご」。' },
            { text: 'みじゅういつ', isCorrect: false, reason: '用音讀。' },
            { text: 'さんじゅっご', isCorrect: false, reason: '不促音化。' },
            { text: 'さんとおご', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三十五」讀「さんじゅうご」。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 35, kanji: '三十五', reading: 'さんじゅうご' }
    },
    {
        id: 'num_tens_extra_72', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問分數', stem_zh: '問分數',
        dialogue: { speakerA: 'テストは何点でしたか？', speakerB: '＿＿点です。（三十七）' },
        options: [
            { text: 'さんじゅうなな', isCorrect: true, reason: '正確！「三十七」讀「さんじゅうなな」。' },
            { text: 'さんじゅうしち', isCorrect: false, reason: '「七」常讀「なな」。' },
            { text: 'みじゅうなの', isCorrect: false, reason: '用音讀。' },
            { text: 'さんじゅっなな', isCorrect: false, reason: '不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三十七」讀「さんじゅうなな」。', relatedRules: ['7的讀法'] },
        sourceItem: { value: 37, kanji: '三十七', reading: 'さんじゅうなな' }
    },
    {
        id: 'num_tens_extra_73', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「三十八」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「三十八」的正確讀音是？',
        options: [
            { text: 'さんじゅうはち', isCorrect: true, reason: '正確！「三十八」讀「さんじゅうはち」。' },
            { text: 'みじゅうや', isCorrect: false, reason: '用音讀。' },
            { text: 'さんじゅっはち', isCorrect: false, reason: '不促音化。' },
            { text: 'さんとおはち', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三十八」讀「さんじゅうはち」。', relatedRules: ['十位數的讀法'] },
        sourceItem: { value: 38, kanji: '三十八', reading: 'さんじゅうはち' }
    },
    {
        id: 'num_tens_extra_74', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: true,
        stem: '会議の参加者は＿＿人です。（三十九）', stem_zh: '會議的參加者有三十九人。',
        options: [
            { text: 'さんじゅうきゅう', isCorrect: true, reason: '正確！「三十九」讀「さんじゅうきゅう」。' },
            { text: 'さんじゅうく', isCorrect: false, reason: '陷阱！「九」讀「きゅう」。' },
            { text: 'みじゅうここの', isCorrect: false, reason: '用音讀。' },
            { text: 'さんじゅっきゅう', isCorrect: false, reason: '不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三十九」讀「さんじゅうきゅう」。', trapExplanation: '「九」讀「きゅう」。', relatedRules: ['9的讀法'] },
        sourceItem: { value: 39, kanji: '三十九', reading: 'さんじゅうきゅう' }
    },
    {
        id: 'num_tens_extra_75', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '椅子は何脚ありますか？', speakerB: '＿＿脚あります。（四十一）' },
        options: [
            { text: 'よんじゅういち', isCorrect: true, reason: '正確！「四十一」讀「よんじゅういち」。' },
            { text: 'しじゅういち', isCorrect: false, reason: '「四十」讀「よんじゅう」。' },
            { text: 'よんじゅっいち', isCorrect: false, reason: '不促音化。' },
            { text: 'よとおいち', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四十一」讀「よんじゅういち」。', relatedRules: ['十位數的讀法'] },
        sourceItem: { value: 41, kanji: '四十一', reading: 'よんじゅういち' }
    },
    {
        id: 'num_tens_extra_76', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「四十二」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「四十二」的正確讀音是？',
        options: [
            { text: 'よんじゅうに', isCorrect: true, reason: '正確！「四十二」讀「よんじゅうに」。' },
            { text: 'しじゅうに', isCorrect: false, reason: '「四十」讀「よんじゅう」。' },
            { text: 'よんじゅっに', isCorrect: false, reason: '不促音化。' },
            { text: 'よとおに', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四十二」讀「よんじゅうに」。', relatedRules: ['十位數的讀法'] },
        sourceItem: { value: 42, kanji: '四十二', reading: 'よんじゅうに' }
    },
    {
        id: 'num_tens_extra_77', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '彼は＿＿歳です。（四十三）', stem_zh: '他四十三歲。',
        options: [
            { text: 'よんじゅうさん', isCorrect: true, reason: '正確！「四十三」讀「よんじゅうさん」。' },
            { text: 'しじゅうみ', isCorrect: false, reason: '用「よんじゅう」和「さん」。' },
            { text: 'よんじゅっさん', isCorrect: false, reason: '不促音化。' },
            { text: 'よとおさん', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四十三」讀「よんじゅうさん」。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 43, kanji: '四十三', reading: 'よんじゅうさん' }
    },
    {
        id: 'num_tens_extra_78', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: true,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'このノートはいくらですか？', speakerB: '＿＿円です。（四十四）' },
        options: [
            { text: 'よんじゅうよん', isCorrect: true, reason: '正確！「四十四」讀「よんじゅうよん」。' },
            { text: 'しじゅうし', isCorrect: false, reason: '陷阱！「四」讀「よん」。' },
            { text: 'よんじゅっよん', isCorrect: false, reason: '不促音化。' },
            { text: 'よとおよん', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四十四」讀「よんじゅうよん」。', trapExplanation: '「四」讀「よん」避免「し」。', relatedRules: ['4的讀法'] },
        sourceItem: { value: 44, kanji: '四十四', reading: 'よんじゅうよん' }
    },
    {
        id: 'num_tens_extra_79', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「四十六」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「四十六」的正確讀音是？',
        options: [
            { text: 'よんじゅうろく', isCorrect: true, reason: '正確！「四十六」讀「よんじゅうろく」。' },
            { text: 'しじゅうむ', isCorrect: false, reason: '用「よんじゅう」和「ろく」。' },
            { text: 'よんじゅっろく', isCorrect: false, reason: '不促音化。' },
            { text: 'よとおろく', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四十六」讀「よんじゅうろく」。', relatedRules: ['十位數的讀法'] },
        sourceItem: { value: 46, kanji: '四十六', reading: 'よんじゅうろく' }
    },
    {
        id: 'num_tens_extra_80', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: true,
        stem: '試験時間は＿＿分です。（四十七）', stem_zh: '考試時間是四十七分鐘。',
        options: [
            { text: 'よんじゅうなな', isCorrect: true, reason: '正確！「四十七」讀「よんじゅうなな」。' },
            { text: 'よんじゅうしち', isCorrect: false, reason: '陷阱！「七」常讀「なな」。' },
            { text: 'しじゅうなの', isCorrect: false, reason: '用「よんじゅう」。' },
            { text: 'よんじゅっなな', isCorrect: false, reason: '不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四十七」讀「よんじゅうなな」。', trapExplanation: '「七」常讀「なな」。', relatedRules: ['7的讀法'] },
        sourceItem: { value: 47, kanji: '四十七', reading: 'よんじゅうなな' }
    },
    {
        id: 'num_tens_extra_81', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問年齡', stem_zh: '問年齡',
        dialogue: { speakerA: 'お母さんは何歳ですか？', speakerB: '＿＿歳です。（四十八）' },
        options: [
            { text: 'よんじゅうはち', isCorrect: true, reason: '正確！「四十八」讀「よんじゅうはち」。' },
            { text: 'しじゅうや', isCorrect: false, reason: '用「よんじゅう」和「はち」。' },
            { text: 'よんじゅっはち', isCorrect: false, reason: '不促音化。' },
            { text: 'よとおはち', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四十八」讀「よんじゅうはち」。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 48, kanji: '四十八', reading: 'よんじゅうはち' }
    },
    {
        id: 'num_tens_extra_82', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '「四十九」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「四十九」的正確讀音是？',
        options: [
            { text: 'よんじゅうきゅう', isCorrect: true, reason: '正確！「四十九」讀「よんじゅうきゅう」。' },
            { text: 'しじゅうく', isCorrect: false, reason: '陷阱！用「よんじゅう」和「きゅう」。' },
            { text: 'よんじゅっきゅう', isCorrect: false, reason: '不促音化。' },
            { text: 'よとおここの', isCorrect: false, reason: '用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四十九」讀「よんじゅうきゅう」。', trapExplanation: '「四」讀「よん」，「九」讀「きゅう」。', relatedRules: ['4/9的讀法'] },
        sourceItem: { value: 49, kanji: '四十九', reading: 'よんじゅうきゅう' }
    },
    {
        id: 'num_tens_extra_83', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '彼女は＿＿歳です。（五十一）', stem_zh: '她五十一歲。',
        options: [
            { text: 'ごじゅういち', isCorrect: true, reason: '正確！「五十一」讀「ごじゅういち」。' },
            { text: 'いつじゅういち', isCorrect: false, reason: '用音讀「ご」。' },
            { text: 'ごじゅっいち', isCorrect: false, reason: '不促音化。' },
            { text: 'ごとおいち', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五十一」讀「ごじゅういち」。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 51, kanji: '五十一', reading: 'ごじゅういち' }
    },
    {
        id: 'num_tens_extra_84', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '学生は何人いますか？', speakerB: '＿＿人います。（五十二）' },
        options: [
            { text: 'ごじゅうに', isCorrect: true, reason: '正確！「五十二」讀「ごじゅうに」。' },
            { text: 'いつじゅうふた', isCorrect: false, reason: '用音讀。' },
            { text: 'ごじゅっに', isCorrect: false, reason: '不促音化。' },
            { text: 'ごとおに', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五十二」讀「ごじゅうに」。', relatedRules: ['人數的讀法'] },
        sourceItem: { value: 52, kanji: '五十二', reading: 'ごじゅうに' }
    },
    {
        id: 'num_tens_extra_85', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「五十三」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「五十三」的正確讀音是？',
        options: [
            { text: 'ごじゅうさん', isCorrect: true, reason: '正確！「五十三」讀「ごじゅうさん」。' },
            { text: 'いつじゅうみ', isCorrect: false, reason: '用音讀。' },
            { text: 'ごじゅっさん', isCorrect: false, reason: '不促音化。' },
            { text: 'ごとおさん', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五十三」讀「ごじゅうさん」。', relatedRules: ['十位數的讀法'] },
        sourceItem: { value: 53, kanji: '五十三', reading: 'ごじゅうさん' }
    },
    {
        id: 'num_tens_extra_86', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: true,
        stem: '會議時間是＿＿分。（五十四）', stem_zh: '會議時間是五十四分鐘。',
        options: [
            { text: 'ごじゅうよん', isCorrect: true, reason: '正確！「五十四」讀「ごじゅうよん」。' },
            { text: 'ごじゅうし', isCorrect: false, reason: '陷阱！「四」讀「よん」。' },
            { text: 'いつじゅうよ', isCorrect: false, reason: '用音讀「ご」。' },
            { text: 'ごじゅっよん', isCorrect: false, reason: '不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五十四」讀「ごじゅうよん」。', trapExplanation: '「四」讀「よん」。', relatedRules: ['4的讀法'] },
        sourceItem: { value: 54, kanji: '五十四', reading: 'ごじゅうよん' }
    },
    {
        id: 'num_tens_extra_87', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'これはいくらですか？', speakerB: '＿＿円です。（五十五）' },
        options: [
            { text: 'ごじゅうご', isCorrect: true, reason: '正確！「五十五」讀「ごじゅうご」。' },
            { text: 'いつじゅういつ', isCorrect: false, reason: '用音讀「ご」。' },
            { text: 'ごじゅっご', isCorrect: false, reason: '不促音化。' },
            { text: 'ごとおご', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五十五」讀「ごじゅうご」。', relatedRules: ['數字的讀法'] },
        sourceItem: { value: 55, kanji: '五十五', reading: 'ごじゅうご' }
    },
    {
        id: 'num_tens_extra_88', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '「五十七」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「五十七」的正確讀音是？',
        options: [
            { text: 'ごじゅうなな', isCorrect: true, reason: '正確！「五十七」讀「ごじゅうなな」。' },
            { text: 'ごじゅうしち', isCorrect: false, reason: '陷阱！「七」常讀「なな」。' },
            { text: 'いつじゅうなの', isCorrect: false, reason: '用音讀「ご」。' },
            { text: 'ごじゅっなな', isCorrect: false, reason: '不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五十七」讀「ごじゅうなな」。', trapExplanation: '「七」常讀「なな」。', relatedRules: ['7的讀法'] },
        sourceItem: { value: 57, kanji: '五十七', reading: 'ごじゅうなな' }
    },
    {
        id: 'num_tens_extra_89', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '彼は＿＿歳です。（五十八）', stem_zh: '他五十八歲。',
        options: [
            { text: 'ごじゅうはち', isCorrect: true, reason: '正確！「五十八」讀「ごじゅうはち」。' },
            { text: 'いつじゅうや', isCorrect: false, reason: '用音讀。' },
            { text: 'ごじゅっはち', isCorrect: false, reason: '不促音化。' },
            { text: 'ごとおはち', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五十八」讀「ごじゅうはち」。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 58, kanji: '五十八', reading: 'ごじゅうはち' }
    },
    {
        id: 'num_tens_extra_90', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: true,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '参加者は何人ですか？', speakerB: '＿＿人です。（五十九）' },
        options: [
            { text: 'ごじゅうきゅう', isCorrect: true, reason: '正確！「五十九」讀「ごじゅうきゅう」。' },
            { text: 'ごじゅうく', isCorrect: false, reason: '陷阱！「九」讀「きゅう」。' },
            { text: 'いつじゅうここの', isCorrect: false, reason: '用音讀。' },
            { text: 'ごじゅっきゅう', isCorrect: false, reason: '不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五十九」讀「ごじゅうきゅう」。', trapExplanation: '「九」讀「きゅう」。', relatedRules: ['9的讀法'] },
        sourceItem: { value: 59, kanji: '五十九', reading: 'ごじゅうきゅう' }
    },
    {
        id: 'num_tens_extra_91', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「六十一」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「六十一」的正確讀音是？',
        options: [
            { text: 'ろくじゅういち', isCorrect: true, reason: '正確！「六十一」讀「ろくじゅういち」。' },
            { text: 'むじゅういち', isCorrect: false, reason: '用音讀「ろく」。' },
            { text: 'ろくじゅっいち', isCorrect: false, reason: '不促音化。' },
            { text: 'ろくとおいち', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六十一」讀「ろくじゅういち」。', relatedRules: ['十位數的讀法'] },
        sourceItem: { value: 61, kanji: '六十一', reading: 'ろくじゅういち' }
    },
    {
        id: 'num_tens_extra_92', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '彼女は＿＿歳です。（六十二）', stem_zh: '她六十二歲。',
        options: [
            { text: 'ろくじゅうに', isCorrect: true, reason: '正確！「六十二」讀「ろくじゅうに」。' },
            { text: 'むじゅうふた', isCorrect: false, reason: '用音讀。' },
            { text: 'ろくじゅっに', isCorrect: false, reason: '不促音化。' },
            { text: 'ろくとおに', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六十二」讀「ろくじゅうに」。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 62, kanji: '六十二', reading: 'ろくじゅうに' }
    },
    {
        id: 'num_tens_extra_93', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'このパンはいくらですか？', speakerB: '＿＿円です。（六十三）' },
        options: [
            { text: 'ろくじゅうさん', isCorrect: true, reason: '正確！「六十三」讀「ろくじゅうさん」。' },
            { text: 'むじゅうみ', isCorrect: false, reason: '用音讀。' },
            { text: 'ろくじゅっさん', isCorrect: false, reason: '不促音化。' },
            { text: 'ろくとおさん', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六十三」讀「ろくじゅうさん」。', relatedRules: ['數字的讀法'] },
        sourceItem: { value: 63, kanji: '六十三', reading: 'ろくじゅうさん' }
    },
    {
        id: 'num_tens_extra_94', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '「六十四」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「六十四」的正確讀音是？',
        options: [
            { text: 'ろくじゅうよん', isCorrect: true, reason: '正確！「六十四」讀「ろくじゅうよん」。' },
            { text: 'ろくじゅうし', isCorrect: false, reason: '陷阱！「四」讀「よん」。' },
            { text: 'むじゅうよ', isCorrect: false, reason: '用音讀「ろく」。' },
            { text: 'ろくじゅっよん', isCorrect: false, reason: '不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六十四」讀「ろくじゅうよん」。', trapExplanation: '「四」讀「よん」。', relatedRules: ['4的讀法'] },
        sourceItem: { value: 64, kanji: '六十四', reading: 'ろくじゅうよん' }
    },
    {
        id: 'num_tens_extra_95', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '試験は＿＿分です。（六十五）', stem_zh: '考試是六十五分鐘。',
        options: [
            { text: 'ろくじゅうご', isCorrect: true, reason: '正確！「六十五」讀「ろくじゅうご」。' },
            { text: 'むじゅういつ', isCorrect: false, reason: '用音讀。' },
            { text: 'ろくじゅっご', isCorrect: false, reason: '不促音化。' },
            { text: 'ろくとおご', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六十五」讀「ろくじゅうご」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 65, kanji: '六十五', reading: 'ろくじゅうご' }
    },
    {
        id: 'num_tens_extra_96', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '本は何冊ありますか？', speakerB: '＿＿冊あります。（六十六）' },
        options: [
            { text: 'ろくじゅうろく', isCorrect: true, reason: '正確！「六十六」讀「ろくじゅうろく」。' },
            { text: 'むじゅうむ', isCorrect: false, reason: '用音讀。' },
            { text: 'ろくじゅっろく', isCorrect: false, reason: '不促音化。' },
            { text: 'ろくとおろく', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六十六」讀「ろくじゅうろく」。', relatedRules: ['冊的讀法'] },
        sourceItem: { value: 66, kanji: '六十六', reading: 'ろくじゅうろく' }
    },
    {
        id: 'num_tens_extra_97', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「六十八」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「六十八」的正確讀音是？',
        options: [
            { text: 'ろくじゅうはち', isCorrect: true, reason: '正確！「六十八」讀「ろくじゅうはち」。' },
            { text: 'むじゅうや', isCorrect: false, reason: '用音讀。' },
            { text: 'ろくじゅっはち', isCorrect: false, reason: '不促音化。' },
            { text: 'ろくとおはち', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六十八」讀「ろくじゅうはち」。', relatedRules: ['十位數的讀法'] },
        sourceItem: { value: 68, kanji: '六十八', reading: 'ろくじゅうはち' }
    },
    {
        id: 'num_tens_extra_98', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: true,
        stem: '參加者有＿＿人。（六十九）', stem_zh: '參加者有六十九人。',
        options: [
            { text: 'ろくじゅうきゅう', isCorrect: true, reason: '正確！「六十九」讀「ろくじゅうきゅう」。' },
            { text: 'ろくじゅうく', isCorrect: false, reason: '陷阱！「九」讀「きゅう」。' },
            { text: 'むじゅうここの', isCorrect: false, reason: '用音讀。' },
            { text: 'ろくじゅっきゅう', isCorrect: false, reason: '不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六十九」讀「ろくじゅうきゅう」。', trapExplanation: '「九」讀「きゅう」。', relatedRules: ['9的讀法'] },
        sourceItem: { value: 69, kanji: '六十九', reading: 'ろくじゅうきゅう' }
    },
    {
        id: 'num_tens_extra_99', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'これはいくらですか？', speakerB: '＿＿円です。（八十五）' },
        options: [
            { text: 'はちじゅうご', isCorrect: true, reason: '正確！「八十五」讀「はちじゅうご」。' },
            { text: 'やじゅういつ', isCorrect: false, reason: '用音讀。' },
            { text: 'はちじゅっご', isCorrect: false, reason: '不促音化。' },
            { text: 'はちとおご', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八十五」讀「はちじゅうご」。', relatedRules: ['數字的讀法'] },
        sourceItem: { value: 85, kanji: '八十五', reading: 'はちじゅうご' }
    },
    {
        id: 'num_tens_extra_100', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '「九十九」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「九十九」的正確讀音是？',
        options: [
            { text: 'きゅうじゅうきゅう', isCorrect: true, reason: '正確！「九十九」讀「きゅうじゅうきゅう」。' },
            { text: 'くじゅうく', isCorrect: false, reason: '陷阱！「九」讀「きゅう」。' },
            { text: 'ここのじゅうここの', isCorrect: false, reason: '用音讀。' },
            { text: 'きゅうじゅっきゅう', isCorrect: false, reason: '不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九十九」讀「きゅうじゅうきゅう」。', trapExplanation: '「九」讀「きゅう」。', relatedRules: ['9的讀法'] },
        sourceItem: { value: 99, kanji: '九十九', reading: 'きゅうじゅうきゅう' }
    },

    // ===== 繼續追加（101-142）=====
    {
        id: 'num_tens_extra_101', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '彼は＿＿歳です。（七十一）', stem_zh: '他七十一歲。',
        options: [
            { text: 'ななじゅういち', isCorrect: true, reason: '正確！「七十一」讀「ななじゅういち」。' },
            { text: 'しちじゅういち', isCorrect: false, reason: '「七十」讀「ななじゅう」。' },
            { text: 'ななじゅっいち', isCorrect: false, reason: '不促音化。' },
            { text: 'なのじゅういち', isCorrect: false, reason: '用「なな」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七十一」讀「ななじゅういち」。', relatedRules: ['7的讀法'] },
        sourceItem: { value: 71, kanji: '七十一', reading: 'ななじゅういち' }
    },
    {
        id: 'num_tens_extra_102', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '学生は何人ですか？', speakerB: '＿＿人です。（七十二）' },
        options: [
            { text: 'ななじゅうに', isCorrect: true, reason: '正確！「七十二」讀「ななじゅうに」。' },
            { text: 'しちじゅうに', isCorrect: false, reason: '「七十」讀「ななじゅう」。' },
            { text: 'ななじゅっに', isCorrect: false, reason: '不促音化。' },
            { text: 'なのじゅうに', isCorrect: false, reason: '用「なな」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七十二」讀「ななじゅうに」。', relatedRules: ['人數的讀法'] },
        sourceItem: { value: 72, kanji: '七十二', reading: 'ななじゅうに' }
    },
    {
        id: 'num_tens_extra_103', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「七十三」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「七十三」的正確讀音是？',
        options: [
            { text: 'ななじゅうさん', isCorrect: true, reason: '正確！「七十三」讀「ななじゅうさん」。' },
            { text: 'しちじゅうさん', isCorrect: false, reason: '「七十」讀「ななじゅう」。' },
            { text: 'ななじゅっさん', isCorrect: false, reason: '不促音化。' },
            { text: 'なのじゅうさん', isCorrect: false, reason: '用「なな」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七十三」讀「ななじゅうさん」。', relatedRules: ['十位數的讀法'] },
        sourceItem: { value: 73, kanji: '七十三', reading: 'ななじゅうさん' }
    },
    {
        id: 'num_tens_extra_104', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: true,
        stem: '價格是＿＿円。（七十四）', stem_zh: '價格是七十四日圓。',
        options: [
            { text: 'ななじゅうよん', isCorrect: true, reason: '正確！「七十四」讀「ななじゅうよん」。' },
            { text: 'ななじゅうし', isCorrect: false, reason: '陷阱！「四」讀「よん」。' },
            { text: 'しちじゅうよん', isCorrect: false, reason: '「七十」讀「ななじゅう」。' },
            { text: 'ななじゅっよん', isCorrect: false, reason: '不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七十四」讀「ななじゅうよん」。', trapExplanation: '「四」讀「よん」。', relatedRules: ['4的讀法'] },
        sourceItem: { value: 74, kanji: '七十四', reading: 'ななじゅうよん' }
    },
    {
        id: 'num_tens_extra_105', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問年齡', stem_zh: '問年齡',
        dialogue: { speakerA: 'おじいさんは何歳ですか？', speakerB: '＿＿歳です。（七十五）' },
        options: [
            { text: 'ななじゅうご', isCorrect: true, reason: '正確！「七十五」讀「ななじゅうご」。' },
            { text: 'しちじゅうご', isCorrect: false, reason: '「七十」讀「ななじゅう」。' },
            { text: 'ななじゅっご', isCorrect: false, reason: '不促音化。' },
            { text: 'なのじゅうご', isCorrect: false, reason: '用「なな」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七十五」讀「ななじゅうご」。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 75, kanji: '七十五', reading: 'ななじゅうご' }
    },
    {
        id: 'num_tens_extra_106', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「七十六」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「七十六」的正確讀音是？',
        options: [
            { text: 'ななじゅうろく', isCorrect: true, reason: '正確！「七十六」讀「ななじゅうろく」。' },
            { text: 'しちじゅうろく', isCorrect: false, reason: '「七十」讀「ななじゅう」。' },
            { text: 'ななじゅっろく', isCorrect: false, reason: '不促音化。' },
            { text: 'なのじゅうろく', isCorrect: false, reason: '用「なな」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七十六」讀「ななじゅうろく」。', relatedRules: ['十位數的讀法'] },
        sourceItem: { value: 76, kanji: '七十六', reading: 'ななじゅうろく' }
    },
    {
        id: 'num_tens_extra_107', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: true,
        stem: '會議參加者有＿＿人。（七十七）', stem_zh: '會議參加者有七十七人。',
        options: [
            { text: 'ななじゅうなな', isCorrect: true, reason: '正確！「七十七」讀「ななじゅうなな」。' },
            { text: 'しちじゅうしち', isCorrect: false, reason: '陷阱！「七」讀「なな」。' },
            { text: 'ななじゅうしち', isCorrect: false, reason: '兩個「七」都讀「なな」。' },
            { text: 'ななじゅっなな', isCorrect: false, reason: '不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七十七」讀「ななじゅうなな」。', trapExplanation: '「七」讀「なな」。', relatedRules: ['7的讀法'] },
        sourceItem: { value: 77, kanji: '七十七', reading: 'ななじゅうなな' }
    },
    {
        id: 'num_tens_extra_108', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'このケーキはいくらですか？', speakerB: '＿＿円です。（七十八）' },
        options: [
            { text: 'ななじゅうはち', isCorrect: true, reason: '正確！「七十八」讀「ななじゅうはち」。' },
            { text: 'しちじゅうはち', isCorrect: false, reason: '「七十」讀「ななじゅう」。' },
            { text: 'ななじゅっはち', isCorrect: false, reason: '不促音化。' },
            { text: 'なのじゅうはち', isCorrect: false, reason: '用「なな」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七十八」讀「ななじゅうはち」。', relatedRules: ['數字的讀法'] },
        sourceItem: { value: 78, kanji: '七十八', reading: 'ななじゅうはち' }
    },
    {
        id: 'num_tens_extra_109', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '「七十九」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「七十九」的正確讀音是？',
        options: [
            { text: 'ななじゅうきゅう', isCorrect: true, reason: '正確！「七十九」讀「ななじゅうきゅう」。' },
            { text: 'ななじゅうく', isCorrect: false, reason: '陷阱！「九」讀「きゅう」。' },
            { text: 'しちじゅうきゅう', isCorrect: false, reason: '「七十」讀「ななじゅう」。' },
            { text: 'ななじゅっきゅう', isCorrect: false, reason: '不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七十九」讀「ななじゅうきゅう」。', trapExplanation: '「七」讀「なな」，「九」讀「きゅう」。', relatedRules: ['7/9的讀法'] },
        sourceItem: { value: 79, kanji: '七十九', reading: 'ななじゅうきゅう' }
    },
    {
        id: 'num_tens_extra_110', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '彼女は＿＿歳です。（八十一）', stem_zh: '她八十一歲。',
        options: [
            { text: 'はちじゅういち', isCorrect: true, reason: '正確！「八十一」讀「はちじゅういち」。' },
            { text: 'やじゅういち', isCorrect: false, reason: '用音讀「はち」。' },
            { text: 'はちじゅっいち', isCorrect: false, reason: '不促音化。' },
            { text: 'はちとおいち', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八十一」讀「はちじゅういち」。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 81, kanji: '八十一', reading: 'はちじゅういち' }
    },
    {
        id: 'num_tens_extra_111', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '参加者は何人ですか？', speakerB: '＿＿人です。（八十二）' },
        options: [
            { text: 'はちじゅうに', isCorrect: true, reason: '正確！「八十二」讀「はちじゅうに」。' },
            { text: 'やじゅうに', isCorrect: false, reason: '用音讀「はち」。' },
            { text: 'はちじゅっに', isCorrect: false, reason: '不促音化。' },
            { text: 'はちとおに', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八十二」讀「はちじゅうに」。', relatedRules: ['人數的讀法'] },
        sourceItem: { value: 82, kanji: '八十二', reading: 'はちじゅうに' }
    },
    {
        id: 'num_tens_extra_112', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「八十三」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「八十三」的正確讀音是？',
        options: [
            { text: 'はちじゅうさん', isCorrect: true, reason: '正確！「八十三」讀「はちじゅうさん」。' },
            { text: 'やじゅうさん', isCorrect: false, reason: '用音讀「はち」。' },
            { text: 'はちじゅっさん', isCorrect: false, reason: '不促音化。' },
            { text: 'はちとおさん', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八十三」讀「はちじゅうさん」。', relatedRules: ['十位數的讀法'] },
        sourceItem: { value: 83, kanji: '八十三', reading: 'はちじゅうさん' }
    },
    {
        id: 'num_tens_extra_113', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: true,
        stem: '商品價格是＿＿円。（八十四）', stem_zh: '商品價格是八十四日圓。',
        options: [
            { text: 'はちじゅうよん', isCorrect: true, reason: '正確！「八十四」讀「はちじゅうよん」。' },
            { text: 'はちじゅうし', isCorrect: false, reason: '陷阱！「四」讀「よん」。' },
            { text: 'やじゅうよん', isCorrect: false, reason: '用音讀「はち」。' },
            { text: 'はちじゅっよん', isCorrect: false, reason: '不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八十四」讀「はちじゅうよん」。', trapExplanation: '「四」讀「よん」。', relatedRules: ['4的讀法'] },
        sourceItem: { value: 84, kanji: '八十四', reading: 'はちじゅうよん' }
    },
    {
        id: 'num_tens_extra_114', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問年齡', stem_zh: '問年齡',
        dialogue: { speakerA: 'おばあさんは何歳ですか？', speakerB: '＿＿歳です。（八十六）' },
        options: [
            { text: 'はちじゅうろく', isCorrect: true, reason: '正確！「八十六」讀「はちじゅうろく」。' },
            { text: 'やじゅうろく', isCorrect: false, reason: '用音讀「はち」。' },
            { text: 'はちじゅっろく', isCorrect: false, reason: '不促音化。' },
            { text: 'はちとおろく', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八十六」讀「はちじゅうろく」。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 86, kanji: '八十六', reading: 'はちじゅうろく' }
    },
    {
        id: 'num_tens_extra_115', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '「八十七」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「八十七」的正確讀音是？',
        options: [
            { text: 'はちじゅうなな', isCorrect: true, reason: '正確！「八十七」讀「はちじゅうなな」。' },
            { text: 'はちじゅうしち', isCorrect: false, reason: '陷阱！「七」常讀「なな」。' },
            { text: 'やじゅうなな', isCorrect: false, reason: '用音讀「はち」。' },
            { text: 'はちじゅっなな', isCorrect: false, reason: '不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八十七」讀「はちじゅうなな」。', trapExplanation: '「七」常讀「なな」。', relatedRules: ['7的讀法'] },
        sourceItem: { value: 87, kanji: '八十七', reading: 'はちじゅうなな' }
    },
    {
        id: 'num_tens_extra_116', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '映画は＿＿分です。（八十八）', stem_zh: '電影八十八分鐘。',
        options: [
            { text: 'はちじゅうはち', isCorrect: true, reason: '正確！「八十八」讀「はちじゅうはち」。' },
            { text: 'やじゅうや', isCorrect: false, reason: '用音讀「はち」。' },
            { text: 'はちじゅっはち', isCorrect: false, reason: '不促音化。' },
            { text: 'はちとおはち', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八十八」讀「はちじゅうはち」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 88, kanji: '八十八', reading: 'はちじゅうはち' }
    },
    {
        id: 'num_tens_extra_117', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: true,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '本は何冊ありますか？', speakerB: '＿＿冊あります。（八十九）' },
        options: [
            { text: 'はちじゅうきゅう', isCorrect: true, reason: '正確！「八十九」讀「はちじゅうきゅう」。' },
            { text: 'はちじゅうく', isCorrect: false, reason: '陷阱！「九」讀「きゅう」。' },
            { text: 'やじゅうここの', isCorrect: false, reason: '用音讀。' },
            { text: 'はちじゅっきゅう', isCorrect: false, reason: '不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八十九」讀「はちじゅうきゅう」。', trapExplanation: '「九」讀「きゅう」。', relatedRules: ['9的讀法'] },
        sourceItem: { value: 89, kanji: '八十九', reading: 'はちじゅうきゅう' }
    },
    {
        id: 'num_tens_extra_118', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「九十一」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「九十一」的正確讀音是？',
        options: [
            { text: 'きゅうじゅういち', isCorrect: true, reason: '正確！「九十一」讀「きゅうじゅういち」。' },
            { text: 'くじゅういち', isCorrect: false, reason: '「九十」讀「きゅうじゅう」。' },
            { text: 'きゅうじゅっいち', isCorrect: false, reason: '不促音化。' },
            { text: 'ここのじゅういち', isCorrect: false, reason: '用音讀「きゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九十一」讀「きゅうじゅういち」。', relatedRules: ['十位數的讀法'] },
        sourceItem: { value: 91, kanji: '九十一', reading: 'きゅうじゅういち' }
    },
    {
        id: 'num_tens_extra_119', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '彼は＿＿歳です。（九十二）', stem_zh: '他九十二歲。',
        options: [
            { text: 'きゅうじゅうに', isCorrect: true, reason: '正確！「九十二」讀「きゅうじゅうに」。' },
            { text: 'くじゅうに', isCorrect: false, reason: '「九十」讀「きゅうじゅう」。' },
            { text: 'きゅうじゅっに', isCorrect: false, reason: '不促音化。' },
            { text: 'ここのじゅうに', isCorrect: false, reason: '用音讀「きゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九十二」讀「きゅうじゅうに」。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 92, kanji: '九十二', reading: 'きゅうじゅうに' }
    },
    {
        id: 'num_tens_extra_120', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'このお菓子はいくらですか？', speakerB: '＿＿円です。（九十三）' },
        options: [
            { text: 'きゅうじゅうさん', isCorrect: true, reason: '正確！「九十三」讀「きゅうじゅうさん」。' },
            { text: 'くじゅうさん', isCorrect: false, reason: '「九十」讀「きゅうじゅう」。' },
            { text: 'きゅうじゅっさん', isCorrect: false, reason: '不促音化。' },
            { text: 'ここのじゅうさん', isCorrect: false, reason: '用音讀「きゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九十三」讀「きゅうじゅうさん」。', relatedRules: ['數字的讀法'] },
        sourceItem: { value: 93, kanji: '九十三', reading: 'きゅうじゅうさん' }
    },
    {
        id: 'num_tens_extra_121', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '「九十四」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「九十四」的正確讀音是？',
        options: [
            { text: 'きゅうじゅうよん', isCorrect: true, reason: '正確！「九十四」讀「きゅうじゅうよん」。' },
            { text: 'くじゅうし', isCorrect: false, reason: '陷阱！「九十」讀「きゅうじゅう」，「四」讀「よん」。' },
            { text: 'きゅうじゅうし', isCorrect: false, reason: '「四」讀「よん」。' },
            { text: 'きゅうじゅっよん', isCorrect: false, reason: '不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九十四」讀「きゅうじゅうよん」。', trapExplanation: '「九」讀「きゅう」，「四」讀「よん」。', relatedRules: ['4/9的讀法'] },
        sourceItem: { value: 94, kanji: '九十四', reading: 'きゅうじゅうよん' }
    },
    {
        id: 'num_tens_extra_122', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '會議需要＿＿分。（九十五）', stem_zh: '會議需要九十五分鐘。',
        options: [
            { text: 'きゅうじゅうご', isCorrect: true, reason: '正確！「九十五」讀「きゅうじゅうご」。' },
            { text: 'くじゅうご', isCorrect: false, reason: '「九十」讀「きゅうじゅう」。' },
            { text: 'きゅうじゅっご', isCorrect: false, reason: '不促音化。' },
            { text: 'ここのじゅうご', isCorrect: false, reason: '用音讀「きゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九十五」讀「きゅうじゅうご」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 95, kanji: '九十五', reading: 'きゅうじゅうご' }
    },
    {
        id: 'num_tens_extra_123', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '学生は何人いますか？', speakerB: '＿＿人います。（九十六）' },
        options: [
            { text: 'きゅうじゅうろく', isCorrect: true, reason: '正確！「九十六」讀「きゅうじゅうろく」。' },
            { text: 'くじゅうろく', isCorrect: false, reason: '「九十」讀「きゅうじゅう」。' },
            { text: 'きゅうじゅっろく', isCorrect: false, reason: '不促音化。' },
            { text: 'ここのじゅうろく', isCorrect: false, reason: '用音讀「きゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九十六」讀「きゅうじゅうろく」。', relatedRules: ['人數的讀法'] },
        sourceItem: { value: 96, kanji: '九十六', reading: 'きゅうじゅうろく' }
    },
    {
        id: 'num_tens_extra_124', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '「九十七」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「九十七」的正確讀音是？',
        options: [
            { text: 'きゅうじゅうなな', isCorrect: true, reason: '正確！「九十七」讀「きゅうじゅうなな」。' },
            { text: 'くじゅうしち', isCorrect: false, reason: '陷阱！「九十」讀「きゅうじゅう」，「七」讀「なな」。' },
            { text: 'きゅうじゅうしち', isCorrect: false, reason: '「七」常讀「なな」。' },
            { text: 'きゅうじゅっなな', isCorrect: false, reason: '不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九十七」讀「きゅうじゅうなな」。', trapExplanation: '「九」讀「きゅう」，「七」讀「なな」。', relatedRules: ['7/9的讀法'] },
        sourceItem: { value: 97, kanji: '九十七', reading: 'きゅうじゅうなな' }
    },
    {
        id: 'num_tens_extra_125', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '彼女は＿＿歳です。（九十八）', stem_zh: '她九十八歲。',
        options: [
            { text: 'きゅうじゅうはち', isCorrect: true, reason: '正確！「九十八」讀「きゅうじゅうはち」。' },
            { text: 'くじゅうはち', isCorrect: false, reason: '「九十」讀「きゅうじゅう」。' },
            { text: 'きゅうじゅっはち', isCorrect: false, reason: '不促音化。' },
            { text: 'ここのじゅうはち', isCorrect: false, reason: '用音讀「きゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九十八」讀「きゅうじゅうはち」。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 98, kanji: '九十八', reading: 'きゅうじゅうはち' }
    },
    {
        id: 'num_tens_extra_126', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問時間', stem_zh: '問時間',
        dialogue: { speakerA: '映画は何分ですか？', speakerB: '＿＿分です。（二十）' },
        options: [
            { text: 'にじゅっ', isCorrect: true, reason: '正確！「二十分」讀「にじゅっぷん」。' },
            { text: 'にじゅう', isCorrect: false, reason: '「分」前「十」促音化。' },
            { text: 'ふたじゅう', isCorrect: false, reason: '用音讀「に」。' },
            { text: 'にとお', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十分」讀「にじゅっぷん」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 20, kanji: '二十分', reading: 'にじゅっぷん' }
    },
    {
        id: 'num_tens_extra_127', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '「二十日」的特殊讀法是？', stem_zh: '「二十日」的特殊讀法是？',
        options: [
            { text: 'はつか', isCorrect: true, reason: '正確！「二十日」讀「はつか」。' },
            { text: 'にじゅうにち', isCorrect: false, reason: '陷阱！「二十日」是特殊讀法「はつか」。' },
            { text: 'ふたとおか', isCorrect: false, reason: '不用訓讀。' },
            { text: 'にじゅっにち', isCorrect: false, reason: '「二十日」讀「はつか」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十日」讀「はつか」，是特殊讀法。', trapExplanation: '20日是日期的特殊讀法。', relatedRules: ['日期的特殊讀法'] },
        sourceItem: { value: 20, kanji: '二十日', reading: 'はつか' }
    },
    {
        id: 'num_tens_extra_128', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: true,
        stem: '彼女は＿＿です。（二十歳）', stem_zh: '她二十歲。',
        options: [
            { text: 'はたち', isCorrect: true, reason: '正確！「二十歳」讀「はたち」。' },
            { text: 'にじゅっさい', isCorrect: false, reason: '陷阱！「二十歳」是特殊讀法「はたち」。' },
            { text: 'にじゅうさい', isCorrect: false, reason: '「二十歳」讀「はたち」。' },
            { text: 'ふたとさい', isCorrect: false, reason: '不用訓讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十歳」讀「はたち」，是特殊讀法。', trapExplanation: '20歲是年齡的特殊讀法。', relatedRules: ['年齡的特殊讀法'] },
        sourceItem: { value: 20, kanji: '二十歳', reading: 'はたち' }
    },
    {
        id: 'num_tens_extra_129', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'このお菓子はいくらですか？', speakerB: '＿＿円です。（三十）' },
        options: [
            { text: 'さんじゅう', isCorrect: true, reason: '正確！「三十」讀「さんじゅう」。' },
            { text: 'みじゅう', isCorrect: false, reason: '用音讀「さん」。' },
            { text: 'さんとお', isCorrect: false, reason: '用「じゅう」。' },
            { text: 'みそ', isCorrect: false, reason: '現代日語不用這個讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三十」讀「さんじゅう」。', relatedRules: ['十位數的讀法'] },
        sourceItem: { value: 30, kanji: '三十', reading: 'さんじゅう' }
    },
    {
        id: 'num_tens_extra_130', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「四十」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「四十」的正確讀音是？',
        options: [
            { text: 'よんじゅう', isCorrect: true, reason: '正確！「四十」讀「よんじゅう」。' },
            { text: 'しじゅう', isCorrect: false, reason: '「四十」讀「よんじゅう」。' },
            { text: 'よとお', isCorrect: false, reason: '用「じゅう」。' },
            { text: 'よんとお', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四十」讀「よんじゅう」。', relatedRules: ['4的讀法'] },
        sourceItem: { value: 40, kanji: '四十', reading: 'よんじゅう' }
    },
    {
        id: 'num_tens_extra_131', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '彼は＿＿歳です。（五十）', stem_zh: '他五十歲。',
        options: [
            { text: 'ごじゅう', isCorrect: true, reason: '正確！「五十」讀「ごじゅう」。' },
            { text: 'いつじゅう', isCorrect: false, reason: '用音讀「ご」。' },
            { text: 'ごとお', isCorrect: false, reason: '用「じゅう」。' },
            { text: 'いそ', isCorrect: false, reason: '現代日語不用這個讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五十」讀「ごじゅう」。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 50, kanji: '五十', reading: 'ごじゅう' }
    },
    {
        id: 'num_tens_extra_132', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '参加者は何人ですか？', speakerB: '＿＿人です。（六十）' },
        options: [
            { text: 'ろくじゅう', isCorrect: true, reason: '正確！「六十」讀「ろくじゅう」。' },
            { text: 'むじゅう', isCorrect: false, reason: '用音讀「ろく」。' },
            { text: 'ろくとお', isCorrect: false, reason: '用「じゅう」。' },
            { text: 'むそ', isCorrect: false, reason: '現代日語不用這個讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六十」讀「ろくじゅう」。', relatedRules: ['人數的讀法'] },
        sourceItem: { value: 60, kanji: '六十', reading: 'ろくじゅう' }
    },
    {
        id: 'num_tens_extra_133', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「八十」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「八十」的正確讀音是？',
        options: [
            { text: 'はちじゅう', isCorrect: true, reason: '正確！「八十」讀「はちじゅう」。' },
            { text: 'やじゅう', isCorrect: false, reason: '用音讀「はち」。' },
            { text: 'はちとお', isCorrect: false, reason: '用「じゅう」。' },
            { text: 'やそ', isCorrect: false, reason: '現代日語不用這個讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八十」讀「はちじゅう」。', relatedRules: ['十位數的讀法'] },
        sourceItem: { value: 80, kanji: '八十', reading: 'はちじゅう' }
    },
    {
        id: 'num_tens_extra_134', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '電車は＿＿分後です。（三十）', stem_zh: '電車三十分鐘後。',
        options: [
            { text: 'さんじゅっ', isCorrect: true, reason: '正確！「三十分」讀「さんじゅっぷん」。' },
            { text: 'さんじゅう', isCorrect: false, reason: '「分」前「十」促音化。' },
            { text: 'みじゅう', isCorrect: false, reason: '用音讀「さん」。' },
            { text: 'さんとお', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三十分」讀「さんじゅっぷん」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 30, kanji: '三十分', reading: 'さんじゅっぷん' }
    },
    {
        id: 'num_tens_extra_135', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問時間', stem_zh: '問時間',
        dialogue: { speakerA: '授業は何分ですか？', speakerB: '＿＿分です。（四十）' },
        options: [
            { text: 'よんじゅっ', isCorrect: true, reason: '正確！「四十分」讀「よんじゅっぷん」。' },
            { text: 'よんじゅう', isCorrect: false, reason: '「分」前「十」促音化。' },
            { text: 'しじゅう', isCorrect: false, reason: '用「よんじゅう」。' },
            { text: 'よんとお', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四十分」讀「よんじゅっぷん」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 40, kanji: '四十分', reading: 'よんじゅっぷん' }
    },
    {
        id: 'num_tens_extra_136', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「五十分」怎麼讀？', stem_zh: '「五十分」怎麼讀？',
        options: [
            { text: 'ごじゅっぷん', isCorrect: true, reason: '正確！「五十分」讀「ごじゅっぷん」。' },
            { text: 'ごじゅうふん', isCorrect: false, reason: '「分」前「十」促音化。' },
            { text: 'いつじゅうふん', isCorrect: false, reason: '用音讀「ご」。' },
            { text: 'ごとふん', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五十分」讀「ごじゅっぷん」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 50, kanji: '五十分', reading: 'ごじゅっぷん' }
    },
    {
        id: 'num_tens_extra_137', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '彼は＿＿分で来ます。（六十）', stem_zh: '他六十分鐘後來。',
        options: [
            { text: 'ろくじゅっ', isCorrect: true, reason: '正確！「六十分」讀「ろくじゅっぷん」。' },
            { text: 'ろくじゅう', isCorrect: false, reason: '「分」前「十」促音化。' },
            { text: 'むじゅう', isCorrect: false, reason: '用音讀「ろく」。' },
            { text: 'ろくとお', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六十分」讀「ろくじゅっぷん」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 60, kanji: '六十分', reading: 'ろくじゅっぷん' }
    },
    {
        id: 'num_tens_extra_138', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '問時間', stem_zh: '問時間',
        dialogue: { speakerA: '電車は何分かかりますか？', speakerB: '約＿＿分です。（七十）' },
        options: [
            { text: 'ななじゅっ', isCorrect: true, reason: '正確！「七十分」讀「ななじゅっぷん」。' },
            { text: 'ななじゅう', isCorrect: false, reason: '「分」前「十」促音化。' },
            { text: 'しちじゅう', isCorrect: false, reason: '用「ななじゅう」。' },
            { text: 'ななとお', isCorrect: false, reason: '用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七十分」讀「ななじゅっぷん」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 70, kanji: '七十分', reading: 'ななじゅっぷん' }
    },
    {
        id: 'num_tens_extra_139', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「九十分」怎麼讀？', stem_zh: '「九十分」怎麼讀？',
        options: [
            { text: 'きゅうじゅっぷん', isCorrect: true, reason: '正確！「九十分」讀「きゅうじゅっぷん」。' },
            { text: 'きゅうじゅうふん', isCorrect: false, reason: '「分」前「十」促音化。' },
            { text: 'くじゅうふん', isCorrect: false, reason: '用「きゅうじゅう」。' },
            { text: 'ここのじゅうふん', isCorrect: false, reason: '用音讀「きゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九十分」讀「きゅうじゅっぷん」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 90, kanji: '九十分', reading: 'きゅうじゅっぷん' }
    },
    {
        id: 'num_tens_extra_140', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: true,
        stem: '以下哪個不是「十」的讀法？', stem_zh: '以下哪個不是「十」的讀法？',
        options: [
            { text: 'てん', isCorrect: true, reason: '正確！「てん」不是「十」的讀法。' },
            { text: 'じゅう', isCorrect: false, reason: '「じゅう」是「十」的音讀。' },
            { text: 'とお', isCorrect: false, reason: '「とお」是「十」的訓讀。' },
            { text: 'じゅっ', isCorrect: false, reason: '「じゅっ」是促音化形式。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十」的讀法有「じゅう」「とお」「じゅっ」「じっ」。', relatedRules: ['10的讀法'] },
        sourceItem: { value: 10, kanji: '十', reading: '讀法辨析' }
    },
    {
        id: 'num_tens_extra_141', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: true,
        stem: '以下哪組數字讀法正確？', stem_zh: '以下哪組數字讀法正確？',
        dialogue: { speakerA: '十位數字問題', speakerB: '選擇正確讀法組合' },
        options: [
            { text: '14=じゅうよん、17=じゅうなな、19=じゅうきゅう', isCorrect: true, reason: '正確！避諱數字用安全讀法。' },
            { text: '14=じゅうし、17=じゅうしち、19=じゅうく', isCorrect: false, reason: '陷阱！通常避免使用「し」「しち」「く」。' },
            { text: '14=じゅうよ、17=じゅうなの、19=じゅうここの', isCorrect: false, reason: '不正確，數字組合用音讀。' },
            { text: '14=とおよん、17=とおなな、19=とおきゅう', isCorrect: false, reason: '組合數字用「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '4用「よん」、7用「なな」、9用「きゅう」避免與死、苦等混淆。', trapExplanation: '這是日語的避諱習慣。', relatedRules: ['數字の避諱'] },
        sourceItem: { value: 0, kanji: '避諱數字', reading: '總結' }
    },
    {
        id: 'num_tens_extra_142', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「百」的讀法是？', stem_zh: '「百」的讀法是？',
        options: [
            { text: 'ひゃく', isCorrect: true, reason: '正確！「百」讀「ひゃく」。' },
            { text: 'もも', isCorrect: false, reason: '「もも」是桃子的讀法，不是百。' },
            { text: 'ひゃっ', isCorrect: false, reason: '「ひゃっ」是促音化形式。' },
            { text: 'はく', isCorrect: false, reason: '這不是「百」的讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「百」讀「ひゃく」。', relatedRules: ['百的讀法'] },
        sourceItem: { value: 100, kanji: '百', reading: 'ひゃく' }
    }
];
