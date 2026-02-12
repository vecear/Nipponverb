import { DatesPracticeQuestion } from '../types';

// 一般物品量詞練習題 (〜つ)
// 每個重要數字3題：發音題、單句敘述題、對話題
// 使用訓讀數字系統（ひとつ、ふたつ、みっつ...）
// 用於：形狀不規則或沒有特定量詞的物品（萬能 fallback）
// 注意：只能用於 1-10，10 讀作「とお」（無「つ」）

export const generalObjectQuestions: DatesPracticeQuestion[] = [
    // ===== 1つ 的三題（訓讀：ひとつ） =====
    {
        id: 'general_1_pron',
        category: 'counters',
        subcategory: 'generalObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「一つ」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「一つ」的正確讀音是？',
        options: [
            { text: 'ひとつ', isCorrect: true, reason: '正確！「一{ひと}つ」使用訓讀，讀作「ひとつ」。' },
            { text: 'いちつ', isCorrect: false, reason: '陷阱！「つ」系統使用訓讀「ひと」，不是音讀「いち」。' },
            { text: 'いっつ', isCorrect: false, reason: '量詞「つ」使用訓讀數字。' },
            { text: 'ひとっつ', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一{ひと}つ」讀作「ひとつ」。「つ」系統是日語固有的訓讀計數法。',
            trapExplanation: '這是陷阱題。「つ」搭配訓讀數字（ひと、ふた、み...），不用音讀。',
            relatedRules: ['訓讀計數系統', '「つ」的特殊性']
        },
        sourceItem: { value: 1, kanji: '一つ', reading: 'ひとつ' }
    },
    {
        id: 'general_1_sent',
        category: 'counters',
        subcategory: 'generalObjects',
        type: 'sentence',
        isTrap: true,
        stem: 'りんごを＿＿ください。',
        stem_zh: '請給我一個蘋果。',
        options: [
            { text: 'いちこ', isCorrect: false, reason: '陷阱！蘋果可用「つ」或「個{こ}」，但不說「いちこ」。' },
            { text: 'ひとつ', isCorrect: true, reason: '正確！「りんごを一{ひと}つください」表示「請給我一個蘋果」。' },
            { text: 'いちつ', isCorrect: false, reason: '「つ」使用訓讀「ひと」。' },
            { text: 'いっこ', isCorrect: false, reason: '「個{こ}」也可用，但本題考察「つ」的讀法。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「りんご」（蘋果）可使用萬能量詞「つ」。',
            trapExplanation: '「つ」是最安全的量詞選擇，當不確定該用什麼量詞時可使用。',
            relatedRules: ['量詞「つ」的使用', '購物表達']
        },
        sourceItem: { value: 1, kanji: '一つ', reading: 'ひとつ' }
    },
    {
        id: 'general_1_dial',
        category: 'counters',
        subcategory: 'generalObjects',
        type: 'dialogue',
        isTrap: false,
        stem: 'お菓子はいくつ食べましたか？',
        stem_zh: '你吃了幾個點心？',
        dialogue: {
            speakerA: 'お菓子はいくつ食べましたか？',
            speakerB: '＿＿だけ食べました。（只吃一個）'
        },
        options: [
            { text: 'いちこ', isCorrect: false, reason: '「つ」系統不用音讀。' },
            { text: 'ひとつ', isCorrect: true, reason: '正確！只吃了一個點心。' },
            { text: 'いちつ', isCorrect: false, reason: '「つ」使用訓讀。' },
            { text: 'いっこ', isCorrect: false, reason: '回答「いくつ」時使用「つ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '回答「いくつ」（幾個）時，使用「〜つ」來回答。',
            relatedRules: ['量詞「つ」的使用', '「いくつ」的質問與回答']
        },
        sourceItem: { value: 1, kanji: '一つ', reading: 'ひとつ' }
    },

    // ===== 2つ 的三題（訓讀：ふたつ） =====
    {
        id: 'general_2_pron',
        category: 'counters',
        subcategory: 'generalObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「二つ」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「二つ」的正確讀音是？',
        options: [
            { text: 'ふたつ', isCorrect: true, reason: '正確！「二{ふた}つ」使用訓讀，讀作「ふたつ」。' },
            { text: 'につ', isCorrect: false, reason: '陷阱！「つ」系統使用訓讀「ふた」，不是音讀「に」。' },
            { text: 'にっつ', isCorrect: false, reason: '量詞「つ」使用訓讀數字。' },
            { text: 'ふたっつ', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二{ふた}つ」讀作「ふたつ」。與「二人{ふたり}」相同，使用訓讀「ふた」。',
            trapExplanation: '這是陷阱題。「つ」系統完全使用訓讀數字。',
            relatedRules: ['訓讀計數系統', '「ふた」的使用']
        },
        sourceItem: { value: 2, kanji: '二つ', reading: 'ふたつ' }
    },
    {
        id: 'general_2_sent',
        category: 'counters',
        subcategory: 'generalObjects',
        type: 'sentence',
        isTrap: true,
        stem: '石が＿＿ありました。',
        stem_zh: '有兩顆石頭。',
        options: [
            { text: 'につ', isCorrect: false, reason: '陷阱！「つ」使用訓讀「ふた」。' },
            { text: 'ふたつ', isCorrect: true, reason: '正確！「石が二{ふた}つ」表示「有兩顆石頭」。' },
            { text: 'にこ', isCorrect: false, reason: '石頭可用「つ」或「個{こ}」，但「個{こ}」讀「にこ」不對。' },
            { text: 'ふたこ', isCorrect: false, reason: '「個{こ}」使用音讀數字。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「石」（石頭）形狀不規則，可使用萬能量詞「つ」。',
            trapExplanation: '「つ」系統完全使用訓讀，包括「ふたつ」。',
            relatedRules: ['量詞「つ」的使用', '不規則物品']
        },
        sourceItem: { value: 2, kanji: '二つ', reading: 'ふたつ' }
    },
    {
        id: 'general_2_dial',
        category: 'counters',
        subcategory: 'generalObjects',
        type: 'dialogue',
        isTrap: false,
        stem: 'ケーキはいくついりますか？',
        stem_zh: '需要幾個蛋糕？',
        dialogue: {
            speakerA: 'ケーキはいくついりますか？',
            speakerB: '＿＿お願いします。（兩個）'
        },
        options: [
            { text: 'につ', isCorrect: false, reason: '「つ」使用訓讀。' },
            { text: 'ふたつ', isCorrect: true, reason: '正確！需要兩個蛋糕。' },
            { text: 'にこ', isCorrect: false, reason: '回答「いくつ」時使用「つ」。' },
            { text: 'ふたり', isCorrect: false, reason: '「人{にん}」用於人，蛋糕用「つ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ケーキ」（蛋糕）可使用萬能量詞「つ」。',
            relatedRules: ['量詞「つ」的使用', '點餐表達']
        },
        sourceItem: { value: 2, kanji: '二つ', reading: 'ふたつ' }
    },

    // ===== 3つ 的三題（訓讀：みっつ） =====
    {
        id: 'general_3_pron',
        category: 'counters',
        subcategory: 'generalObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「三つ」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「三つ」的正確讀音是？',
        options: [
            { text: 'みっつ', isCorrect: true, reason: '正確！「三{み}つ」使用訓讀，讀作「みっつ」（有促音）。' },
            { text: 'さんつ', isCorrect: false, reason: '陷阱！「つ」系統使用訓讀「み」，不是音讀「さん」。' },
            { text: 'みつ', isCorrect: false, reason: '「三{み}つ」有促音，讀作「みっつ」。' },
            { text: 'みいつ', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三{み}つ」讀作「みっつ」。注意有促音「っ」。',
            trapExplanation: '這是陷阱題。3、4、6、8有促音：みっつ、よっつ、むっつ、やっつ。',
            relatedRules: ['訓讀計數系統', '促音的規則']
        },
        sourceItem: { value: 3, kanji: '三つ', reading: 'みっつ' }
    },
    {
        id: 'general_3_sent',
        category: 'counters',
        subcategory: 'generalObjects',
        type: 'sentence',
        isTrap: true,
        stem: '問題が＿＿あります。',
        stem_zh: '有三個問題。',
        options: [
            { text: 'さんつ', isCorrect: false, reason: '陷阱！「つ」使用訓讀「みっ」。' },
            { text: 'みっつ', isCorrect: true, reason: '正確！「問題が三{み}つ」表示「有三個問題」。' },
            { text: 'みつ', isCorrect: false, reason: '需要促音「みっつ」。' },
            { text: 'さんこ', isCorrect: false, reason: '抽象事物常用「つ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「問題」（問題）等抽象事物可使用「つ」。',
            trapExplanation: '「三{み}つ」固定讀「みっつ」，有促音。',
            relatedRules: ['量詞「つ」的使用', '抽象事物']
        },
        sourceItem: { value: 3, kanji: '三つ', reading: 'みっつ' }
    },
    {
        id: 'general_3_dial',
        category: 'counters',
        subcategory: 'generalObjects',
        type: 'dialogue',
        isTrap: false,
        stem: 'おにぎりはいくつ買いますか？',
        stem_zh: '要買幾個飯糰？',
        dialogue: {
            speakerA: 'おにぎりはいくつ買いますか？',
            speakerB: '＿＿買います。（三個）'
        },
        options: [
            { text: 'さんつ', isCorrect: false, reason: '「つ」使用訓讀。' },
            { text: 'みっつ', isCorrect: true, reason: '正確！買三個飯糰。' },
            { text: 'みつ', isCorrect: false, reason: '需要促音「みっつ」。' },
            { text: 'さんこ', isCorrect: false, reason: '回答「いくつ」時使用「つ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「おにぎり」（飯糰）可使用萬能量詞「つ」。',
            relatedRules: ['量詞「つ」的使用', '便利商店購物']
        },
        sourceItem: { value: 3, kanji: '三つ', reading: 'みっつ' }
    },

    // ===== 5つ 的三題（訓讀：いつつ） =====
    {
        id: 'general_5_pron',
        category: 'counters',
        subcategory: 'generalObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「五つ」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「五つ」的正確讀音是？',
        options: [
            { text: 'いつつ', isCorrect: true, reason: '正確！「五{いつ}つ」使用訓讀，讀作「いつつ」。' },
            { text: 'ごつ', isCorrect: false, reason: '陷阱！「つ」系統使用訓讀「いつ」，不是音讀「ご」。' },
            { text: 'いっつ', isCorrect: false, reason: '「五{いつ}つ」沒有促音，讀作「いつつ」。' },
            { text: 'いつっつ', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五{いつ}つ」讀作「いつつ」。5不促音，與「五日{いつか}」的「いつ」相同。',
            trapExplanation: '這是陷阱題。「つ」系統完全使用訓讀。',
            relatedRules: ['訓讀計數系統', '「いつ」的使用']
        },
        sourceItem: { value: 5, kanji: '五つ', reading: 'いつつ' }
    },
    {
        id: 'general_5_sent',
        category: 'counters',
        subcategory: 'generalObjects',
        type: 'sentence',
        isTrap: true,
        stem: '星が＿＿光っています。',
        stem_zh: '五顆星星在閃耀。',
        options: [
            { text: 'ごつ', isCorrect: false, reason: '陷阱！「つ」使用訓讀「いつ」。' },
            { text: 'いつつ', isCorrect: true, reason: '正確！「星が五{いつ}つ」表示「五顆星星」。' },
            { text: 'いっつ', isCorrect: false, reason: '「五{いつ}つ」沒有促音。' },
            { text: 'ごこ', isCorrect: false, reason: '星星常用「つ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「星」（星星）可使用萬能量詞「つ」。',
            trapExplanation: '「五{いつ}つ」固定讀「いつつ」，沒有促音。',
            relatedRules: ['量詞「つ」的使用', '天體の計數']
        },
        sourceItem: { value: 5, kanji: '五つ', reading: 'いつつ' }
    },
    {
        id: 'general_5_dial',
        category: 'counters',
        subcategory: 'generalObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '袋にみかんはいくつありますか？',
        stem_zh: '袋子裡有幾個橘子？',
        dialogue: {
            speakerA: '袋にみかんはいくつありますか？',
            speakerB: '＿＿あります。（五個）'
        },
        options: [
            { text: 'ごつ', isCorrect: false, reason: '「つ」使用訓讀。' },
            { text: 'いつつ', isCorrect: true, reason: '正確！有五個橘子。' },
            { text: 'いっつ', isCorrect: false, reason: '「五{いつ}つ」沒有促音。' },
            { text: 'ごこ', isCorrect: false, reason: '回答「いくつ」時使用「つ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「みかん」（橘子）可使用萬能量詞「つ」。',
            relatedRules: ['量詞「つ」的使用', '水果の計數']
        },
        sourceItem: { value: 5, kanji: '五つ', reading: 'いつつ' }
    },

    // ===== 7つ 的三題（訓讀：ななつ） =====
    {
        id: 'general_7_pron',
        category: 'counters',
        subcategory: 'generalObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「七つ」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「七つ」的正確讀音是？',
        options: [
            { text: 'ななつ', isCorrect: true, reason: '正確！「七{なな}つ」使用訓讀，讀作「ななつ」。' },
            { text: 'しちつ', isCorrect: false, reason: '陷阱！「つ」系統使用訓讀「なな」，不是音讀「しち」。' },
            { text: 'なのつ', isCorrect: false, reason: '「なの」是日期七日{なのか}的讀法。' },
            { text: 'なっつ', isCorrect: false, reason: '「七{なな}つ」沒有促音。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七{なな}つ」讀作「ななつ」。7不促音，使用訓讀「なな」。',
            trapExplanation: '這是陷阱題。「つ」系統的7固定使用「なな」不是「しち」。',
            relatedRules: ['訓讀計數系統', '「なな」vs「しち」']
        },
        sourceItem: { value: 7, kanji: '七つ', reading: 'ななつ' }
    },
    {
        id: 'general_7_sent',
        category: 'counters',
        subcategory: 'generalObjects',
        type: 'sentence',
        isTrap: true,
        stem: '願いが＿＿叶いました。',
        stem_zh: '七個願望實現了。',
        options: [
            { text: 'しちつ', isCorrect: false, reason: '陷阱！「つ」使用訓讀「なな」。' },
            { text: 'ななつ', isCorrect: true, reason: '正確！「願いが七{なな}つ」表示「七個願望」。' },
            { text: 'なのつ', isCorrect: false, reason: '「なの」是日期讀法。' },
            { text: 'しちこ', isCorrect: false, reason: '抽象事物常用「つ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「願い」（願望）等抽象事物可使用「つ」。七夕與「七{なな}つの願い」相關。',
            trapExplanation: '「七{なな}つ」固定讀「ななつ」。',
            relatedRules: ['量詞「つ」的使用', '抽象事物']
        },
        sourceItem: { value: 7, kanji: '七つ', reading: 'ななつ' }
    },
    {
        id: 'general_7_dial',
        category: 'counters',
        subcategory: 'generalObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '箱の中にはいくつありますか？',
        stem_zh: '箱子裡有幾個？',
        dialogue: {
            speakerA: '箱の中にはいくつありますか？',
            speakerB: '＿＿あります。（七個）'
        },
        options: [
            { text: 'しちつ', isCorrect: false, reason: '「つ」使用訓讀「なな」。' },
            { text: 'ななつ', isCorrect: true, reason: '正確！箱子裡有七個{ななつ}。' },
            { text: 'なのつ', isCorrect: false, reason: '「なの」是日期讀法。' },
            { text: 'しちこ', isCorrect: false, reason: '回答「いくつ」時使用「つ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '回答「いくつ」時使用「〜つ」。',
            relatedRules: ['量詞「つ」的使用', '「いくつ」的質問與回答']
        },
        sourceItem: { value: 7, kanji: '七つ', reading: 'ななつ' }
    },

    // ===== 10 的三題（特殊：とお，無「つ」） =====
    {
        id: 'general_10_pron',
        category: 'counters',
        subcategory: 'generalObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十」（万能{ばんのう}の数{かぞ}え方{かた}）の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十」（萬能量詞系統中的10）的正確讀音是？',
        options: [
            { text: 'とお', isCorrect: true, reason: '正確！「つ」系統的10讀作「とお」，沒有「つ」。' },
            { text: 'じゅう', isCorrect: false, reason: '陷阱！「つ」系統使用訓讀「とお」，不是音讀「じゅう」。' },
            { text: 'とおつ', isCorrect: false, reason: '「つ」系統的10沒有「つ」，直接讀「とお」。' },
            { text: 'じゅっつ', isCorrect: false, reason: '「つ」系統使用訓讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「つ」系統的10讀作「とお」，是唯一沒有「つ」結尾的數字。',
            trapExplanation: '這是陷阱題。「つ」系統只能計數到10，10讀作「とお」。超過10通常使用其他量詞。',
            relatedRules: ['訓讀計數系統', '「とお」的特殊性']
        },
        sourceItem: { value: 10, kanji: '十', reading: 'とお' }
    },
    {
        id: 'general_10_sent',
        category: 'counters',
        subcategory: 'generalObjects',
        type: 'sentence',
        isTrap: true,
        stem: '卵が＿＿あります。',
        stem_zh: '有十顆雞蛋。',
        options: [
            { text: 'じゅう', isCorrect: false, reason: '陷阱！「つ」系統的10使用訓讀「とお」。' },
            { text: 'とお', isCorrect: true, reason: '正確！「卵{たまご}が十{とお}」表示「有十顆{とお}雞蛋」。' },
            { text: 'とおつ', isCorrect: false, reason: '10沒有「つ」，直接讀「とお」。' },
            { text: 'じゅっこ', isCorrect: false, reason: '若用「個{こ}」則讀「じゅっこ」，但本題考察「つ」系統。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「卵{たまご}」（雞蛋）可使用「つ」系統計數，10讀作「とお」。',
            trapExplanation: '「つ」系統的10固定讀「とお」，沒有「つ」。',
            relatedRules: ['量詞「つ」的使用', '10的特殊讀法']
        },
        sourceItem: { value: 10, kanji: '十', reading: 'とお' }
    },
    {
        id: 'general_10_dial',
        category: 'counters',
        subcategory: 'generalObjects',
        type: 'dialogue',
        isTrap: false,
        stem: 'いくつまで数えられますか？',
        stem_zh: '可以數到幾？',
        dialogue: {
            speakerA: '「つ」でいくつまで数えられますか？',
            speakerB: '＿＿までです。（到十）'
        },
        options: [
            { text: 'じゅう', isCorrect: false, reason: '「つ」系統使用訓讀。' },
            { text: 'とお', isCorrect: true, reason: '正確！「つ」系統最多計數到「とお」（10）。' },
            { text: 'とおつ', isCorrect: false, reason: '10沒有「つ」。' },
            { text: 'ここのつ', isCorrect: false, reason: '「ここのつ」是9，不是最大數字。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「つ」系統只能計數到10，超過10通常使用其他量詞或直接讀音讀數字。',
            relatedRules: ['量詞「つ」的使用', '「つ」系統の限制']
        },
        sourceItem: { value: 10, kanji: '十', reading: 'とお' }
    },

    // ===== 補充：疑問詞「いくつ」的題目 =====
    {
        id: 'general_ikutsu_pron',
        category: 'counters',
        subcategory: 'generalObjects',
        type: 'pronunciation',
        isTrap: false,
        stem: '「幾つ」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「幾つ」（幾個）的正確讀音是？',
        options: [
            { text: 'いくつ', isCorrect: true, reason: '正確！「幾{いく}つ」讀作「いくつ」，用於詢問數量。' },
            { text: 'なんつ', isCorrect: false, reason: '「つ」系統的疑問詞是「いくつ」，不是「なんつ」。' },
            { text: 'いくこ', isCorrect: false, reason: '「いくつ」是固定讀法。' },
            { text: 'なんこ', isCorrect: false, reason: '「何個{なんこ}」是另一種問法，使用「個{こ}」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「いくつ」是「つ」系統的疑問詞，用於詢問不特定物品的數量或年齡（「お歳{とし}はいくつですか」）。',
            relatedRules: ['疑問詞的讀法', '「いくつ」的使用']
        },
        sourceItem: { value: '?', kanji: '幾つ', reading: 'いくつ' }
    },

    // ===== 4つ 的三題（訓讀：よっつ） =====
    {
        id: 'general_4_pron', category: 'counters', subcategory: 'generalObjects', type: 'pronunciation', isTrap: true,
        stem: '「四つ」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「四つ」的正確讀音是？',
        options: [
            { text: 'よっつ', isCorrect: true, reason: '正確！「四つ」使用訓讀，讀作「よっつ」（有促音）。' },
            { text: 'しつ', isCorrect: false, reason: '陷阱！「つ」系統使用訓讀「よ」，不是音讀「し」。' },
            { text: 'よつ', isCorrect: false, reason: '「四つ」有促音，讀作「よっつ」。' },
            { text: 'よんつ', isCorrect: false, reason: '「つ」系統用訓讀「よ」，不是「よん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四つ」讀作「よっつ」。注意有促音「っ」。', trapExplanation: '這是陷阱題。3、4、6、8有促音：みっつ、よっつ、むっつ、やっつ。', relatedRules: ['訓讀計數系統', '促音的規則'] },
        sourceItem: { value: 4, kanji: '四つ', reading: 'よっつ' }
    },
    {
        id: 'general_4_sent', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: true,
        stem: '角が＿＿あります。', stem_zh: '有四個角。',
        options: [
            { text: 'しつ', isCorrect: false, reason: '陷阱！「つ」使用訓讀「よっ」。' },
            { text: 'よっつ', isCorrect: true, reason: '正確！「角が四つ」表示「有四個角」。' },
            { text: 'よつ', isCorrect: false, reason: '需要促音「よっつ」。' },
            { text: 'よんこ', isCorrect: false, reason: '本題考察「つ」的讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「角」（角）等抽象概念可使用「つ」。', trapExplanation: '「四つ」固定讀作「よっつ」。', relatedRules: ['量詞「つ」的使用', '抽象事物'] },
        sourceItem: { value: 4, kanji: '四つ', reading: 'よっつ' }
    },
    {
        id: 'general_4_dial', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '水果數量', stem_zh: '水果數量',
        dialogue: { speakerA: '果物はいくつありますか？', speakerB: '＿＿あります。（四個）' },
        options: [
            { text: 'しつ', isCorrect: false, reason: '「つ」使用訓讀。' },
            { text: 'よっつ', isCorrect: true, reason: '正確！四個水果。' },
            { text: 'よんこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' },
            { text: 'よつ', isCorrect: false, reason: '需要促音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 4, kanji: '四つ', reading: 'よっつ' }
    },

    // ===== 5つ 的三題（訓讀：いつつ） =====
    {
        id: 'general_5_pron', category: 'counters', subcategory: 'generalObjects', type: 'pronunciation', isTrap: true,
        stem: '「五つ」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「五つ」的正確讀音是？',
        options: [
            { text: 'いつつ', isCorrect: true, reason: '正確！「五つ」使用訓讀，讀作「いつつ」。' },
            { text: 'ごつ', isCorrect: false, reason: '陷阱！「つ」系統使用訓讀「いつ」，不是音讀「ご」。' },
            { text: 'いっつ', isCorrect: false, reason: '「五つ」沒有促音，讀作「いつつ」。' },
            { text: 'いつっつ', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五つ」讀作「いつつ」。5沒有促音。', trapExplanation: '只有3、4、6、8有促音。', relatedRules: ['訓讀計數系統', '無促音的數字'] },
        sourceItem: { value: 5, kanji: '五つ', reading: 'いつつ' }
    },
    {
        id: 'general_5_sent', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: true,
        stem: '星が＿＿見えます。', stem_zh: '看得見五顆星星。',
        options: [
            { text: 'ごつ', isCorrect: false, reason: '陷阱！「つ」使用訓讀「いつ」。' },
            { text: 'いつつ', isCorrect: true, reason: '正確！「星が五つ」表示「五顆星星」。' },
            { text: 'いっつ', isCorrect: false, reason: '5沒有促音。' },
            { text: 'ごこ', isCorrect: false, reason: '本題考察「つ」的讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「星」可使用「つ」計數。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 5, kanji: '五つ', reading: 'いつつ' }
    },
    {
        id: 'general_5_dial', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '按鈕數量', stem_zh: '按鈕數量',
        dialogue: { speakerA: 'ボタンはいくつありますか？', speakerB: '＿＿あります。（五個）' },
        options: [
            { text: 'ごつ', isCorrect: false, reason: '「つ」使用訓讀。' },
            { text: 'いつつ', isCorrect: true, reason: '正確！五個按鈕。' },
            { text: 'ごこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' },
            { text: 'いっつ', isCorrect: false, reason: '5沒有促音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 5, kanji: '五つ', reading: 'いつつ' }
    },

    // ===== 6つ 的三題（訓讀：むっつ） =====
    {
        id: 'general_6_pron', category: 'counters', subcategory: 'generalObjects', type: 'pronunciation', isTrap: true,
        stem: '「六つ」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「六つ」的正確讀音是？',
        options: [
            { text: 'むっつ', isCorrect: true, reason: '正確！「六つ」使用訓讀，讀作「むっつ」（有促音）。' },
            { text: 'ろくつ', isCorrect: false, reason: '陷阱！「つ」系統使用訓讀「む」，不是音讀「ろく」。' },
            { text: 'むつ', isCorrect: false, reason: '「六つ」有促音，讀作「むっつ」。' },
            { text: 'ろっつ', isCorrect: false, reason: '「つ」系統用訓讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六つ」讀作「むっつ」。注意有促音「っ」。', trapExplanation: '這是陷阱題。3、4、6、8有促音。', relatedRules: ['訓讀計數系統', '促音的規則'] },
        sourceItem: { value: 6, kanji: '六つ', reading: 'むっつ' }
    },
    {
        id: 'general_6_sent', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: true,
        stem: '穴が＿＿あります。', stem_zh: '有六個洞。',
        options: [
            { text: 'ろくつ', isCorrect: false, reason: '陷阱！「つ」使用訓讀「むっ」。' },
            { text: 'むっつ', isCorrect: true, reason: '正確！「穴が六つ」表示「有六個洞」。' },
            { text: 'むつ', isCorrect: false, reason: '需要促音「むっつ」。' },
            { text: 'ろっこ', isCorrect: false, reason: '本題考察「つ」的讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「穴」（洞）可使用「つ」計數。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 6, kanji: '六つ', reading: 'むっつ' }
    },
    {
        id: 'general_6_dial', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '禮物數量', stem_zh: '禮物數量',
        dialogue: { speakerA: 'プレゼントはいくつもらいましたか？', speakerB: '＿＿もらいました。（六個）' },
        options: [
            { text: 'ろくつ', isCorrect: false, reason: '「つ」使用訓讀。' },
            { text: 'むっつ', isCorrect: true, reason: '正確！收到六個禮物。' },
            { text: 'ろっこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' },
            { text: 'むつ', isCorrect: false, reason: '需要促音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 6, kanji: '六つ', reading: 'むっつ' }
    },

    // ===== 8つ 的三題（訓讀：やっつ） =====
    {
        id: 'general_8_pron', category: 'counters', subcategory: 'generalObjects', type: 'pronunciation', isTrap: true,
        stem: '「八つ」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「八つ」的正確讀音是？',
        options: [
            { text: 'やっつ', isCorrect: true, reason: '正確！「八つ」使用訓讀，讀作「やっつ」（有促音）。' },
            { text: 'はちつ', isCorrect: false, reason: '陷阱！「つ」系統使用訓讀「や」，不是音讀「はち」。' },
            { text: 'やつ', isCorrect: false, reason: '「八つ」有促音，讀作「やっつ」。' },
            { text: 'はっつ', isCorrect: false, reason: '「つ」系統用訓讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八つ」讀作「やっつ」。注意有促音「っ」。', trapExplanation: '這是陷阱題。3、4、6、8有促音。', relatedRules: ['訓讀計數系統', '促音的規則'] },
        sourceItem: { value: 8, kanji: '八つ', reading: 'やっつ' }
    },
    {
        id: 'general_8_sent', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: true,
        stem: '島が＿＿あります。', stem_zh: '有八個島。',
        options: [
            { text: 'はちつ', isCorrect: false, reason: '陷阱！「つ」使用訓讀「やっ」。' },
            { text: 'やっつ', isCorrect: true, reason: '正確！「島が八つ」表示「有八個島」。' },
            { text: 'やつ', isCorrect: false, reason: '需要促音「やっつ」。' },
            { text: 'はっこ', isCorrect: false, reason: '本題考察「つ」的讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「島」（島）可使用「つ」計數。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 8, kanji: '八つ', reading: 'やっつ' }
    },
    {
        id: 'general_8_dial', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '選項數量', stem_zh: '選項數量',
        dialogue: { speakerA: '選択肢はいくつありますか？', speakerB: '＿＿あります。（八個）' },
        options: [
            { text: 'はちつ', isCorrect: false, reason: '「つ」使用訓讀。' },
            { text: 'やっつ', isCorrect: true, reason: '正確！八個選項。' },
            { text: 'はっこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' },
            { text: 'やつ', isCorrect: false, reason: '需要促音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 8, kanji: '八つ', reading: 'やっつ' }
    },

    // ===== 9つ 的三題（訓讀：ここのつ） =====
    {
        id: 'general_9_pron', category: 'counters', subcategory: 'generalObjects', type: 'pronunciation', isTrap: true,
        stem: '「九つ」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「九つ」的正確讀音是？',
        options: [
            { text: 'ここのつ', isCorrect: true, reason: '正確！「九つ」使用訓讀，讀作「ここのつ」。' },
            { text: 'きゅうつ', isCorrect: false, reason: '陷阱！「つ」系統使用訓讀「ここの」，不是音讀「きゅう」。' },
            { text: 'くつ', isCorrect: false, reason: '不是正確讀法，「九」訓讀是「ここの」。' },
            { text: 'ここっつ', isCorrect: false, reason: '9沒有促音。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九つ」讀作「ここのつ」。9沒有促音。', trapExplanation: '只有3、4、6、8有促音。', relatedRules: ['訓讀計數系統', '無促音的數字'] },
        sourceItem: { value: 9, kanji: '九つ', reading: 'ここのつ' }
    },
    {
        id: 'general_9_sent', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: true,
        stem: '窓が＿＿あります。', stem_zh: '有九扇窗戶。',
        options: [
            { text: 'きゅうつ', isCorrect: false, reason: '陷阱！「つ」使用訓讀「ここの」。' },
            { text: 'ここのつ', isCorrect: true, reason: '正確！「窓が九つ」表示「有九扇窗戶」。' },
            { text: 'くつ', isCorrect: false, reason: '不是正確讀法。' },
            { text: 'きゅうこ', isCorrect: false, reason: '本題考察「つ」的讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「窓」（窗戶）可使用「つ」計數。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 9, kanji: '九つ', reading: 'ここのつ' }
    },
    {
        id: 'general_9_dial', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '願望數量', stem_zh: '願望數量',
        dialogue: { speakerA: '願い事はいくつありますか？', speakerB: '＿＿あります。（九個）' },
        options: [
            { text: 'きゅうつ', isCorrect: false, reason: '「つ」使用訓讀。' },
            { text: 'ここのつ', isCorrect: true, reason: '正確！九個願望。' },
            { text: 'きゅうこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' },
            { text: 'ここっつ', isCorrect: false, reason: '9沒有促音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 9, kanji: '九つ', reading: 'ここのつ' }
    },

    // ===== 更多情境題目 =====
    {
        id: 'general_context_1', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: false,
        stem: 'ドーナツを＿＿買いました。', stem_zh: '買了三個甜甜圈。',
        options: [
            { text: 'さんつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'みっつ', isCorrect: true, reason: '正確！三個甜甜圈。' },
            { text: 'みつ', isCorrect: false, reason: '需要促音。' },
            { text: 'さんこ', isCorrect: false, reason: '本題考察「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ドーナツ」可使用「つ」計數。', relatedRules: ['量詞「つ」的使用', '食物の計數'] },
        sourceItem: { value: 3, kanji: '三つ', reading: 'みっつ' }
    },
    {
        id: 'general_context_2', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '蘋果購買', stem_zh: '蘋果購買',
        dialogue: { speakerA: 'りんごはいくつ買いますか？', speakerB: '＿＿お願いします。（五個）' },
        options: [
            { text: 'ごつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'いつつ', isCorrect: true, reason: '正確！五個蘋果。' },
            { text: 'ごこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' },
            { text: 'いっつ', isCorrect: false, reason: '5沒有促音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 5, kanji: '五つ', reading: 'いつつ' }
    },
    {
        id: 'general_context_3', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: false,
        stem: 'パンを＿＿食べました。', stem_zh: '吃了兩個麵包。',
        options: [
            { text: 'につ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'ふたつ', isCorrect: true, reason: '正確！兩個麵包。' },
            { text: 'にこ', isCorrect: false, reason: '本題考察「つ」。' },
            { text: 'ふたっつ', isCorrect: false, reason: '2沒有促音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「パン」可使用「つ」計數。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 2, kanji: '二つ', reading: 'ふたつ' }
    },
    {
        id: 'general_context_4', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '糖果數量', stem_zh: '糖果數量',
        dialogue: { speakerA: '飴はいくつ食べましたか？', speakerB: '＿＿食べました。（四個）' },
        options: [
            { text: 'しつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'よっつ', isCorrect: true, reason: '正確！四個糖果。' },
            { text: 'よんこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' },
            { text: 'よつ', isCorrect: false, reason: '需要促音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 4, kanji: '四つ', reading: 'よっつ' }
    },
    {
        id: 'general_context_5', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: false,
        stem: 'みかんが＿＿あります。', stem_zh: '有六個橘子。',
        options: [
            { text: 'ろくつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'むっつ', isCorrect: true, reason: '正確！六個橘子。' },
            { text: 'むつ', isCorrect: false, reason: '需要促音。' },
            { text: 'ろっこ', isCorrect: false, reason: '本題考察「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「みかん」可使用「つ」計數。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 6, kanji: '六つ', reading: 'むっつ' }
    },
    {
        id: 'general_context_6', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '包子數量', stem_zh: '包子數量',
        dialogue: { speakerA: '肉まんはいくつ食べますか？', speakerB: '＿＿食べます。（七個）' },
        options: [
            { text: 'しちつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'ななつ', isCorrect: true, reason: '正確！七個包子。' },
            { text: 'ななこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' },
            { text: 'ななっつ', isCorrect: false, reason: '7沒有促音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 7, kanji: '七つ', reading: 'ななつ' }
    },
    {
        id: 'general_context_7', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: false,
        stem: 'チョコレートを＿＿もらいました。', stem_zh: '收到了八塊巧克力。',
        options: [
            { text: 'はちつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'やっつ', isCorrect: true, reason: '正確！八塊巧克力。' },
            { text: 'やつ', isCorrect: false, reason: '需要促音。' },
            { text: 'はっこ', isCorrect: false, reason: '本題考察「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「チョコレート」可使用「つ」計數。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 8, kanji: '八つ', reading: 'やっつ' }
    },
    {
        id: 'general_context_8', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '餅乾數量', stem_zh: '餅乾數量',
        dialogue: { speakerA: 'クッキーはいくつありますか？', speakerB: '＿＿あります。（九個）' },
        options: [
            { text: 'きゅうつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'ここのつ', isCorrect: true, reason: '正確！九個餅乾。' },
            { text: 'きゅうこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' },
            { text: 'ここっつ', isCorrect: false, reason: '9沒有促音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 9, kanji: '九つ', reading: 'ここのつ' }
    },
    {
        id: 'general_context_9', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: false,
        stem: 'おにぎりが＿＿あります。', stem_zh: '有十個飯糰。',
        options: [
            { text: 'じゅうつ', isCorrect: false, reason: '10沒有「つ」，讀「とお」。' },
            { text: 'とお', isCorrect: true, reason: '正確！十個飯糰。' },
            { text: 'とおつ', isCorrect: false, reason: '10沒有「つ」。' },
            { text: 'じゅっこ', isCorrect: false, reason: '本題考察「つ」系統。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「つ」系統的10讀作「とお」，沒有「つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 10, kanji: '十', reading: 'とお' }
    },
    {
        id: 'general_context_10', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '選擇題數量', stem_zh: '選擇題數量',
        dialogue: { speakerA: '選択肢はいくつですか？', speakerB: '＿＿です。（一個）' },
        options: [
            { text: 'いちつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'ひとつ', isCorrect: true, reason: '正確！一個選擇。' },
            { text: 'いっこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' },
            { text: 'ひとっつ', isCorrect: false, reason: '1沒有促音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 1, kanji: '一つ', reading: 'ひとつ' }
    },
    {
        id: 'general_context_11', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: false,
        stem: '理由が＿＿あります。', stem_zh: '有三個理由。',
        options: [
            { text: 'さんつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'みっつ', isCorrect: true, reason: '正確！三個理由。' },
            { text: 'みつ', isCorrect: false, reason: '需要促音。' },
            { text: 'さんこ', isCorrect: false, reason: '抽象概念用「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「理由」等抽象概念可使用「つ」計數。', relatedRules: ['量詞「つ」的使用', '抽象事物'] },
        sourceItem: { value: 3, kanji: '三つ', reading: 'みっつ' }
    },
    {
        id: 'general_context_12', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '候補數量', stem_zh: '候選數量',
        dialogue: { speakerA: '候補はいくつありますか？', speakerB: '＿＿あります。（四個）' },
        options: [
            { text: 'しつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'よっつ', isCorrect: true, reason: '正確！四個候選。' },
            { text: 'よんこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' },
            { text: 'よつ', isCorrect: false, reason: '需要促音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 4, kanji: '四つ', reading: 'よっつ' }
    },
    {
        id: 'general_context_13', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: false,
        stem: '条件が＿＿あります。', stem_zh: '有五個條件。',
        options: [
            { text: 'ごつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'いつつ', isCorrect: true, reason: '正確！五個條件。' },
            { text: 'いっつ', isCorrect: false, reason: '5沒有促音。' },
            { text: 'ごこ', isCorrect: false, reason: '抽象概念用「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「条件」等抽象概念可使用「つ」計數。', relatedRules: ['量詞「つ」的使用', '抽象事物'] },
        sourceItem: { value: 5, kanji: '五つ', reading: 'いつつ' }
    },
    {
        id: 'general_context_14', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '作業數量', stem_zh: '作業數量',
        dialogue: { speakerA: '課題はいくつ終わりましたか？', speakerB: '＿＿終わりました。（六個）' },
        options: [
            { text: 'ろくつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'むっつ', isCorrect: true, reason: '正確！完成六個作業。' },
            { text: 'ろっこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' },
            { text: 'むつ', isCorrect: false, reason: '需要促音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 6, kanji: '六つ', reading: 'むっつ' }
    },
    {
        id: 'general_context_15', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: false,
        stem: 'ポイントが＿＿あります。', stem_zh: '有七個重點。',
        options: [
            { text: 'しちつ', isCorrect: false, reason: '「つ」用訓讀「なな」。' },
            { text: 'ななつ', isCorrect: true, reason: '正確！七個重點。' },
            { text: 'ななっつ', isCorrect: false, reason: '7沒有促音。' },
            { text: 'しちこ', isCorrect: false, reason: '抽象概念用「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ポイント」等抽象概念可使用「つ」計數。', relatedRules: ['量詞「つ」的使用', '抽象事物'] },
        sourceItem: { value: 7, kanji: '七つ', reading: 'ななつ' }
    },
    {
        id: 'general_context_16', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '秘密數量', stem_zh: '秘密數量',
        dialogue: { speakerA: '秘密はいくつありますか？', speakerB: '＿＿あります。（八個）' },
        options: [
            { text: 'はちつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'やっつ', isCorrect: true, reason: '正確！八個秘密。' },
            { text: 'はっこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' },
            { text: 'やつ', isCorrect: false, reason: '需要促音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 8, kanji: '八つ', reading: 'やっつ' }
    },
    {
        id: 'general_context_17', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: false,
        stem: '趣味が＿＿あります。', stem_zh: '有九個興趣。',
        options: [
            { text: 'きゅうつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'ここのつ', isCorrect: true, reason: '正確！九個興趣。' },
            { text: 'ここっつ', isCorrect: false, reason: '9沒有促音。' },
            { text: 'きゅうこ', isCorrect: false, reason: '抽象概念用「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「趣味」等抽象概念可使用「つ」計數。', relatedRules: ['量詞「つ」的使用', '抽象事物'] },
        sourceItem: { value: 9, kanji: '九つ', reading: 'ここのつ' }
    },
    {
        id: 'general_context_18', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '目標數量', stem_zh: '目標數量',
        dialogue: { speakerA: '目標はいくつありますか？', speakerB: '＿＿あります。（十個）' },
        options: [
            { text: 'じゅうつ', isCorrect: false, reason: '10沒有「つ」。' },
            { text: 'とお', isCorrect: true, reason: '正確！十個目標。' },
            { text: 'とおつ', isCorrect: false, reason: '10沒有「つ」。' },
            { text: 'じゅっこ', isCorrect: false, reason: '回答「いくつ」用「つ」系統。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「つ」系統的10讀作「とお」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 10, kanji: '十', reading: 'とお' }
    },
    {
        id: 'general_context_19', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: false,
        stem: 'アイデアが＿＿あります。', stem_zh: '有兩個點子。',
        options: [
            { text: 'につ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'ふたつ', isCorrect: true, reason: '正確！兩個點子。' },
            { text: 'にこ', isCorrect: false, reason: '抽象概念用「つ」。' },
            { text: 'ふたっつ', isCorrect: false, reason: '2沒有促音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「アイデア」等抽象概念可使用「つ」計數。', relatedRules: ['量詞「つ」的使用', '抽象事物'] },
        sourceItem: { value: 2, kanji: '二つ', reading: 'ふたつ' }
    },
    {
        id: 'general_context_20', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '印象數量', stem_zh: '印象數量',
        dialogue: { speakerA: '印象はいくつありますか？', speakerB: '＿＿あります。（一個）' },
        options: [
            { text: 'いちつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'ひとつ', isCorrect: true, reason: '正確！一個印象。' },
            { text: 'いっこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' },
            { text: 'ひとっつ', isCorrect: false, reason: '1沒有促音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 1, kanji: '一つ', reading: 'ひとつ' }
    },

    // ===== 比較題與陷阱題 =====
    {
        id: 'general_compare_1', category: 'counters', subcategory: 'generalObjects', type: 'pronunciation', isTrap: true,
        stem: '以下哪組「つ」的讀法有促音？', stem_zh: '以下哪組「つ」的讀法有促音？',
        options: [
            { text: '三つ(みっつ)、四つ(よっつ)、六つ(むっつ)、八つ(やっつ)', isCorrect: true, reason: '正確！3、4、6、8有促音。' },
            { text: '一つ(ひとつ)、二つ(ふたつ)、五つ(いつつ)、七つ(ななつ)', isCorrect: false, reason: '錯誤，這些沒有促音。' },
            { text: '九つ(ここのつ)、十(とお)', isCorrect: false, reason: '錯誤，9和10沒有促音。' },
            { text: '所有「つ」都有促音', isCorrect: false, reason: '錯誤，只有3、4、6、8有促音。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「つ」系統中只有3、4、6、8有促音：みっつ、よっつ、むっつ、やっつ。', trapExplanation: '記住：促音出現在3、4、6、8。', relatedRules: ['訓讀計數系統', '促音規則'] },
        sourceItem: { value: 0, kanji: 'つ比較', reading: '促音規則' }
    },
    {
        id: 'general_compare_2', category: 'counters', subcategory: 'generalObjects', type: 'pronunciation', isTrap: true,
        stem: '「つ」系統的特點是？', stem_zh: '「つ」系統的特點是？',
        options: [
            { text: '使用訓讀數字，只能計數到10', isCorrect: true, reason: '正確！「つ」使用訓讀，只能計數1-10。' },
            { text: '使用音讀數字，可計數任意數量', isCorrect: false, reason: '錯誤，「つ」使用訓讀，不是音讀。' },
            { text: '可以計數到100', isCorrect: false, reason: '錯誤，「つ」系統只能計數到10。' },
            { text: '10讀作「じゅうつ」', isCorrect: false, reason: '錯誤，10讀作「とお」，沒有「つ」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「つ」系統使用訓讀數字（ひと、ふた、み...），只能計數1-10，10讀作「とお」。', relatedRules: ['訓讀計數系統', '「つ」の限制'] },
        sourceItem: { value: 0, kanji: 'つ特點', reading: '訓讀計數' }
    },
    {
        id: 'general_error_1', category: 'counters', subcategory: 'generalObjects', type: 'pronunciation', isTrap: true,
        stem: '以下哪個讀法是錯誤的？', stem_zh: '以下哪個讀法是錯誤的？',
        options: [
            { text: '三つ(みつ)', isCorrect: true, reason: '這是錯誤的！應該是「みっつ」，需要促音。' },
            { text: '二つ(ふたつ)', isCorrect: false, reason: '這是正確的，2沒有促音。' },
            { text: '五つ(いつつ)', isCorrect: false, reason: '這是正確的，5沒有促音。' },
            { text: '七つ(ななつ)', isCorrect: false, reason: '這是正確的，7沒有促音。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '3必須有促音，讀作「みっつ」，「みつ」是錯誤的。', trapExplanation: '這是陷阱題，3、4、6、8需要促音。', relatedRules: ['促音規則', '錯誤識別'] },
        sourceItem: { value: 3, kanji: '三つ', reading: 'みっつ' }
    },
    {
        id: 'general_error_2', category: 'counters', subcategory: 'generalObjects', type: 'pronunciation', isTrap: true,
        stem: '以下哪個讀法是錯誤的？', stem_zh: '以下哪個讀法是錯誤的？',
        options: [
            { text: '十(とおつ)', isCorrect: true, reason: '這是錯誤的！10讀作「とお」，沒有「つ」。' },
            { text: '一つ(ひとつ)', isCorrect: false, reason: '這是正確的。' },
            { text: '四つ(よっつ)', isCorrect: false, reason: '這是正確的。' },
            { text: '九つ(ここのつ)', isCorrect: false, reason: '這是正確的。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '10在「つ」系統中讀作「とお」，沒有「つ」結尾。', trapExplanation: '這是陷阱題，10是唯一沒有「つ」的。', relatedRules: ['10的特殊讀法', '錯誤識別'] },
        sourceItem: { value: 10, kanji: '十', reading: 'とお' }
    },

    // ===== 綜合複習題 =====
    {
        id: 'general_final', category: 'counters', subcategory: 'generalObjects', type: 'pronunciation', isTrap: false,
        stem: '以下哪組「つ」的讀法都正確？', stem_zh: '以下哪組「つ」的讀法都正確？',
        options: [
            { text: 'ひとつ、ふたつ、みっつ、よっつ', isCorrect: true, reason: '正確！1-4的讀法都正確。' },
            { text: 'いちつ、につ、さんつ、よんつ', isCorrect: false, reason: '錯誤，「つ」使用訓讀，不是音讀。' },
            { text: 'ひとつ、ふたつ、みつ、よつ', isCorrect: false, reason: '錯誤，3和4需要促音。' },
            { text: 'ひとっつ、ふたっつ、みっつ、よっつ', isCorrect: false, reason: '錯誤，1和2沒有促音。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「つ」系統完整讀法：ひとつ、ふたつ、みっつ、よっつ、いつつ、むっつ、ななつ、やっつ、ここのつ、とお。', relatedRules: ['量詞「つ」の総合規則'] },
        sourceItem: { value: 0, kanji: 'つ總複習', reading: '訓讀計數' }
    },

    // ===== 擴充情境題（食物、生活用品等）=====
    {
        id: 'general_extra_1', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: false,
        stem: 'ドーナツを＿＿買いました。', stem_zh: '買了三個甜甜圈。',
        options: [
            { text: 'さんつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'みっつ', isCorrect: true, reason: '正確！三個甜甜圈。' },
            { text: 'みつ', isCorrect: false, reason: '需要促音。' },
            { text: 'さんこ', isCorrect: false, reason: '本題考察「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ドーナツ」可使用「つ」計數。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 3, kanji: '三つ', reading: 'みっつ' }
    },
    {
        id: 'general_extra_2', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '蘋果數量', stem_zh: '蘋果數量',
        dialogue: { speakerA: 'りんごはいくつありますか？', speakerB: '＿＿あります。（五個）' },
        options: [
            { text: 'ごつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'いつつ', isCorrect: true, reason: '正確！五個蘋果。' },
            { text: 'いっつ', isCorrect: false, reason: '5沒有促音。' },
            { text: 'ごこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 5, kanji: '五つ', reading: 'いつつ' }
    },
    {
        id: 'general_extra_3', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: false,
        stem: 'たまごが＿＿あります。', stem_zh: '有六個雞蛋。',
        options: [
            { text: 'ろくつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'むっつ', isCorrect: true, reason: '正確！六個雞蛋。' },
            { text: 'むつ', isCorrect: false, reason: '需要促音。' },
            { text: 'ろっこ', isCorrect: false, reason: '本題考察「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「たまご」可使用「つ」計數。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 6, kanji: '六つ', reading: 'むっつ' }
    },
    {
        id: 'general_extra_4', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '石頭數量', stem_zh: '石頭數量',
        dialogue: { speakerA: '石はいくつ拾いましたか？', speakerB: '＿＿拾いました。（八個）' },
        options: [
            { text: 'はちつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'やっつ', isCorrect: true, reason: '正確！撿了八個石頭。' },
            { text: 'やつ', isCorrect: false, reason: '需要促音。' },
            { text: 'はっこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 8, kanji: '八つ', reading: 'やっつ' }
    },
    {
        id: 'general_extra_5', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: false,
        stem: 'プレゼントを＿＿もらいました。', stem_zh: '收到了兩個禮物。',
        options: [
            { text: 'につ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'ふたつ', isCorrect: true, reason: '正確！兩個禮物。' },
            { text: 'にこ', isCorrect: false, reason: '本題考察「つ」。' },
            { text: 'ふたっつ', isCorrect: false, reason: '2沒有促音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「プレゼント」可使用「つ」計數。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 2, kanji: '二つ', reading: 'ふたつ' }
    },
    {
        id: 'general_extra_6', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '問題數量', stem_zh: '問題數量',
        dialogue: { speakerA: '質問はいくつありますか？', speakerB: '＿＿あります。（四個）' },
        options: [
            { text: 'しつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'よっつ', isCorrect: true, reason: '正確！四個問題。' },
            { text: 'よんこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' },
            { text: 'よつ', isCorrect: false, reason: '需要促音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 4, kanji: '四つ', reading: 'よっつ' }
    },
    {
        id: 'general_extra_7', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: false,
        stem: 'ボタンが＿＿あります。', stem_zh: '有七個按鈕。',
        options: [
            { text: 'しちつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'ななつ', isCorrect: true, reason: '正確！七個按鈕。' },
            { text: 'ななっつ', isCorrect: false, reason: '7沒有促音。' },
            { text: 'しちこ', isCorrect: false, reason: '本題考察「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ボタン」可使用「つ」計數。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 7, kanji: '七つ', reading: 'ななつ' }
    },
    {
        id: 'general_extra_8', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '星星數量', stem_zh: '星星數量',
        dialogue: { speakerA: '星はいくつ見えますか？', speakerB: '＿＿見えます。（九個）' },
        options: [
            { text: 'きゅうつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'ここのつ', isCorrect: true, reason: '正確！九顆星星。' },
            { text: 'ここっつ', isCorrect: false, reason: '9沒有促音。' },
            { text: 'きゅうこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 9, kanji: '九つ', reading: 'ここのつ' }
    },
    {
        id: 'general_extra_9', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: false,
        stem: '箱が＿＿あります。', stem_zh: '有一個箱子。',
        options: [
            { text: 'いちつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'ひとつ', isCorrect: true, reason: '正確！一個箱子。' },
            { text: 'いっこ', isCorrect: false, reason: '本題考察「つ」。' },
            { text: 'ひとっつ', isCorrect: false, reason: '1沒有促音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「箱」可使用「つ」計數。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 1, kanji: '一つ', reading: 'ひとつ' }
    },
    {
        id: 'general_extra_10', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '窗戶數量', stem_zh: '窗戶數量',
        dialogue: { speakerA: '窓はいくつありますか？', speakerB: '＿＿あります。（十個）' },
        options: [
            { text: 'じゅうつ', isCorrect: false, reason: '10沒有「つ」。' },
            { text: 'とお', isCorrect: true, reason: '正確！十個窗戶。' },
            { text: 'とおつ', isCorrect: false, reason: '10沒有「つ」。' },
            { text: 'じゅっこ', isCorrect: false, reason: '回答「いくつ」用「つ」系統。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「つ」系統的10讀作「とお」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 10, kanji: '十', reading: 'とお' }
    },
    {
        id: 'general_extra_11', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: false,
        stem: 'ケーキを＿＿作りました。', stem_zh: '做了三個蛋糕。',
        options: [
            { text: 'さんつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'みっつ', isCorrect: true, reason: '正確！三個蛋糕。' },
            { text: 'みつ', isCorrect: false, reason: '需要促音。' },
            { text: 'さんこ', isCorrect: false, reason: '本題考察「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ケーキ」可使用「つ」計數。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 3, kanji: '三つ', reading: 'みっつ' }
    },
    {
        id: 'general_extra_12', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '球的數量', stem_zh: '球的數量',
        dialogue: { speakerA: 'ボールはいくつありますか？', speakerB: '＿＿あります。（六個）' },
        options: [
            { text: 'ろくつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'むっつ', isCorrect: true, reason: '正確！六個球。' },
            { text: 'むつ', isCorrect: false, reason: '需要促音。' },
            { text: 'ろっこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 6, kanji: '六つ', reading: 'むっつ' }
    },
    {
        id: 'general_extra_13', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: false,
        stem: 'アドバイスを＿＿もらいました。', stem_zh: '收到了四個建議。',
        options: [
            { text: 'しつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'よっつ', isCorrect: true, reason: '正確！四個建議。' },
            { text: 'よつ', isCorrect: false, reason: '需要促音。' },
            { text: 'よんこ', isCorrect: false, reason: '抽象概念用「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「アドバイス」等抽象概念可使用「つ」計數。', relatedRules: ['量詞「つ」的使用', '抽象事物'] },
        sourceItem: { value: 4, kanji: '四つ', reading: 'よっつ' }
    },
    {
        id: 'general_extra_14', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '夢的數量', stem_zh: '夢的數量',
        dialogue: { speakerA: '夢はいくつありますか？', speakerB: '＿＿あります。（二個）' },
        options: [
            { text: 'につ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'ふたつ', isCorrect: true, reason: '正確！兩個夢想。' },
            { text: 'にこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' },
            { text: 'ふたっつ', isCorrect: false, reason: '2沒有促音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 2, kanji: '二つ', reading: 'ふたつ' }
    },
    {
        id: 'general_extra_15', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: false,
        stem: 'お皿に果物が＿＿あります。', stem_zh: '盤子裡有八個水果。',
        options: [
            { text: 'はちつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'やっつ', isCorrect: true, reason: '正確！八個水果。' },
            { text: 'やつ', isCorrect: false, reason: '需要促音。' },
            { text: 'はっこ', isCorrect: false, reason: '本題考察「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「果物」可使用「つ」計數。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 8, kanji: '八つ', reading: 'やっつ' }
    },
    {
        id: 'general_extra_16', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '約定數量', stem_zh: '約定數量',
        dialogue: { speakerA: '約束はいくつしましたか？', speakerB: '＿＿しました。（五個）' },
        options: [
            { text: 'ごつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'いつつ', isCorrect: true, reason: '正確！五個約定。' },
            { text: 'いっつ', isCorrect: false, reason: '5沒有促音。' },
            { text: 'ごこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 5, kanji: '五つ', reading: 'いつつ' }
    },
    {
        id: 'general_extra_17', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: false,
        stem: 'メッセージが＿＿届きました。', stem_zh: '收到了九則訊息。',
        options: [
            { text: 'きゅうつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'ここのつ', isCorrect: true, reason: '正確！九則訊息。' },
            { text: 'ここっつ', isCorrect: false, reason: '9沒有促音。' },
            { text: 'きゅうこ', isCorrect: false, reason: '本題考察「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「メッセージ」可使用「つ」計數。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 9, kanji: '九つ', reading: 'ここのつ' }
    },
    {
        id: 'general_extra_18', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '貝殼數量', stem_zh: '貝殼數量',
        dialogue: { speakerA: '貝殻はいくつ集めましたか？', speakerB: '＿＿集めました。（七個）' },
        options: [
            { text: 'しちつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'ななつ', isCorrect: true, reason: '正確！七個貝殼。' },
            { text: 'ななっつ', isCorrect: false, reason: '7沒有促音。' },
            { text: 'しちこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 7, kanji: '七つ', reading: 'ななつ' }
    },
    {
        id: 'general_extra_19', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: false,
        stem: '意見が＿＿出ました。', stem_zh: '提出了三個意見。',
        options: [
            { text: 'さんつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'みっつ', isCorrect: true, reason: '正確！三個意見。' },
            { text: 'みつ', isCorrect: false, reason: '需要促音。' },
            { text: 'さんこ', isCorrect: false, reason: '抽象概念用「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「意見」等抽象概念可使用「つ」計數。', relatedRules: ['量詞「つ」的使用', '抽象事物'] },
        sourceItem: { value: 3, kanji: '三つ', reading: 'みっつ' }
    },
    {
        id: 'general_extra_20', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '氣球數量', stem_zh: '氣球數量',
        dialogue: { speakerA: '風船はいくつ飛ばしましたか？', speakerB: '＿＿飛ばしました。（四個）' },
        options: [
            { text: 'しつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'よっつ', isCorrect: true, reason: '正確！四個氣球。' },
            { text: 'よんこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' },
            { text: 'よつ', isCorrect: false, reason: '需要促音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 4, kanji: '四つ', reading: 'よっつ' }
    },

    // ===== 進階陷阱題 =====
    {
        id: 'general_trap_1', category: 'counters', subcategory: 'generalObjects', type: 'pronunciation', isTrap: true,
        stem: '以下哪個讀法是錯誤的？', stem_zh: '以下哪個讀法是錯誤的？',
        options: [
            { text: '四つ(よつ)', isCorrect: true, reason: '這是錯誤的！應該是「よっつ」，需要促音。' },
            { text: '一つ(ひとつ)', isCorrect: false, reason: '這是正確的，1沒有促音。' },
            { text: '七つ(ななつ)', isCorrect: false, reason: '這是正確的，7沒有促音。' },
            { text: '九つ(ここのつ)', isCorrect: false, reason: '這是正確的，9沒有促音。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '4必須有促音，讀作「よっつ」，「よつ」是錯誤的。', trapExplanation: '這是陷阱題，3、4、6、8需要促音。', relatedRules: ['促音規則', '錯誤識別'] },
        sourceItem: { value: 4, kanji: '四つ', reading: 'よっつ' }
    },
    {
        id: 'general_trap_2', category: 'counters', subcategory: 'generalObjects', type: 'pronunciation', isTrap: true,
        stem: '以下哪個讀法是錯誤的？', stem_zh: '以下哪個讀法是錯誤的？',
        options: [
            { text: '六つ(むつ)', isCorrect: true, reason: '這是錯誤的！應該是「むっつ」，需要促音。' },
            { text: '二つ(ふたつ)', isCorrect: false, reason: '這是正確的，2沒有促音。' },
            { text: '五つ(いつつ)', isCorrect: false, reason: '這是正確的，5沒有促音。' },
            { text: '八つ(やっつ)', isCorrect: false, reason: '這是正確的，8有促音。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '6必須有促音，讀作「むっつ」，「むつ」是錯誤的。', trapExplanation: '這是陷阱題，3、4、6、8需要促音。', relatedRules: ['促音規則', '錯誤識別'] },
        sourceItem: { value: 6, kanji: '六つ', reading: 'むっつ' }
    },
    {
        id: 'general_trap_3', category: 'counters', subcategory: 'generalObjects', type: 'pronunciation', isTrap: true,
        stem: '以下哪個讀法是正確的？', stem_zh: '以下哪個讀法是正確的？',
        options: [
            { text: '八つ(やっつ)', isCorrect: true, reason: '正確！8有促音。' },
            { text: '八つ(やつ)', isCorrect: false, reason: '錯誤，8需要促音。' },
            { text: '八つ(はちつ)', isCorrect: false, reason: '錯誤，「つ」用訓讀。' },
            { text: '八つ(はっつ)', isCorrect: false, reason: '錯誤，「つ」用訓讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '8的訓讀是「や」，加促音讀作「やっつ」。', relatedRules: ['促音規則', '訓讀計數系統'] },
        sourceItem: { value: 8, kanji: '八つ', reading: 'やっつ' }
    },
    {
        id: 'general_trap_4', category: 'counters', subcategory: 'generalObjects', type: 'pronunciation', isTrap: true,
        stem: '以下哪個讀法是正確的？', stem_zh: '以下哪個讀法是正確的？',
        options: [
            { text: '三つ(みっつ)', isCorrect: true, reason: '正確！3有促音。' },
            { text: '三つ(みつ)', isCorrect: false, reason: '錯誤，3需要促音。' },
            { text: '三つ(さんつ)', isCorrect: false, reason: '錯誤，「つ」用訓讀。' },
            { text: '三つ(さっつ)', isCorrect: false, reason: '錯誤，「つ」用訓讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '3的訓讀是「み」，加促音讀作「みっつ」。', relatedRules: ['促音規則', '訓讀計數系統'] },
        sourceItem: { value: 3, kanji: '三つ', reading: 'みっつ' }
    },
    {
        id: 'general_trap_5', category: 'counters', subcategory: 'generalObjects', type: 'pronunciation', isTrap: true,
        stem: '「つ」系統只能用到幾？', stem_zh: '「つ」系統只能用到幾？',
        options: [
            { text: '10（とお）', isCorrect: true, reason: '正確！「つ」系統只能計數1-10。' },
            { text: '100', isCorrect: false, reason: '錯誤，「つ」系統只能計數1-10。' },
            { text: '9（ここのつ）', isCorrect: false, reason: '錯誤，還可以計數到10。' },
            { text: '無限', isCorrect: false, reason: '錯誤，「つ」系統只能計數1-10。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「つ」系統使用訓讀，只能計數1-10。超過10要用「個」等其他量詞。', relatedRules: ['訓讀計數系統', '「つ」の限制'] },
        sourceItem: { value: 10, kanji: '十', reading: 'とお' }
    },
    {
        id: 'general_trap_6', category: 'counters', subcategory: 'generalObjects', type: 'pronunciation', isTrap: true,
        stem: '以下哪組都沒有促音？', stem_zh: '以下哪組都沒有促音？',
        options: [
            { text: '一つ、二つ、五つ、七つ、九つ', isCorrect: true, reason: '正確！1、2、5、7、9都沒有促音。' },
            { text: '三つ、四つ、五つ、六つ', isCorrect: false, reason: '錯誤，3、4、6有促音。' },
            { text: '六つ、七つ、八つ、九つ', isCorrect: false, reason: '錯誤，6、8有促音。' },
            { text: '一つ、三つ、五つ、七つ', isCorrect: false, reason: '錯誤，3有促音。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '沒有促音的是：1、2、5、7、9、10。有促音的是：3、4、6、8。', relatedRules: ['促音規則'] },
        sourceItem: { value: 0, kanji: 'つ比較', reading: '促音規則' }
    },
    {
        id: 'general_trap_7', category: 'counters', subcategory: 'generalObjects', type: 'pronunciation', isTrap: true,
        stem: '為什麼「一つ」讀「ひとつ」而不是「いちつ」？', stem_zh: '為什麼「一つ」讀「ひとつ」而不是「いちつ」？',
        options: [
            { text: '「つ」系統使用訓讀數字', isCorrect: true, reason: '正確！「つ」是日語原有的計數系統，使用訓讀（和語）數字。' },
            { text: '「いち」太難發音', isCorrect: false, reason: '錯誤，這不是原因。' },
            { text: '這是例外規則', isCorrect: false, reason: '錯誤，「つ」系統全部使用訓讀。' },
            { text: '「ひと」比較好聽', isCorrect: false, reason: '錯誤，這不是原因。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「つ」系統是日語固有的計數方式，使用訓讀（和語）數字：ひと、ふた、み、よ、いつ、む、なな、や、ここの、とお。', relatedRules: ['訓讀計數系統', '音讀與訓讀'] },
        sourceItem: { value: 1, kanji: '一つ', reading: 'ひとつ' }
    },
    {
        id: 'general_trap_8', category: 'counters', subcategory: 'generalObjects', type: 'pronunciation', isTrap: true,
        stem: '「十」在「つ」系統中怎麼讀？', stem_zh: '「十」在「つ」系統中怎麼讀？',
        options: [
            { text: 'とお', isCorrect: true, reason: '正確！10讀「とお」，沒有「つ」。' },
            { text: 'とおつ', isCorrect: false, reason: '錯誤，10沒有「つ」。' },
            { text: 'じゅうつ', isCorrect: false, reason: '錯誤，「つ」用訓讀。' },
            { text: 'じゅっつ', isCorrect: false, reason: '錯誤，「つ」用訓讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '10在「つ」系統中是唯一沒有「つ」結尾的，讀作「とお」。', relatedRules: ['10的特殊讀法', '訓讀計數系統'] },
        sourceItem: { value: 10, kanji: '十', reading: 'とお' }
    },

    // ===== 更多情境應用題 =====
    {
        id: 'general_scenario_1', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: false,
        stem: 'コップを＿＿洗いました。', stem_zh: '洗了一個杯子。',
        options: [
            { text: 'いちつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'ひとつ', isCorrect: true, reason: '正確！一個杯子。' },
            { text: 'いっこ', isCorrect: false, reason: '本題考察「つ」。' },
            { text: 'ひとっつ', isCorrect: false, reason: '1沒有促音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「コップ」可使用「つ」計數。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 1, kanji: '一つ', reading: 'ひとつ' }
    },
    {
        id: 'general_scenario_2', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '紙箱數量', stem_zh: '紙箱數量',
        dialogue: { speakerA: '段ボール箱はいくつ必要ですか？', speakerB: '＿＿必要です。（三個）' },
        options: [
            { text: 'さんつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'みっつ', isCorrect: true, reason: '正確！需要三個紙箱。' },
            { text: 'みつ', isCorrect: false, reason: '需要促音。' },
            { text: 'さんこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 3, kanji: '三つ', reading: 'みっつ' }
    },
    {
        id: 'general_scenario_3', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: false,
        stem: 'お土産を＿＿買いました。', stem_zh: '買了五個伴手禮。',
        options: [
            { text: 'ごつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'いつつ', isCorrect: true, reason: '正確！五個伴手禮。' },
            { text: 'いっつ', isCorrect: false, reason: '5沒有促音。' },
            { text: 'ごこ', isCorrect: false, reason: '本題考察「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「お土産」可使用「つ」計數。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 5, kanji: '五つ', reading: 'いつつ' }
    },
    {
        id: 'general_scenario_4', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '袋子數量', stem_zh: '袋子數量',
        dialogue: { speakerA: '袋はいくつもらいましたか？', speakerB: '＿＿もらいました。（二個）' },
        options: [
            { text: 'につ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'ふたつ', isCorrect: true, reason: '正確！收到兩個袋子。' },
            { text: 'にこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' },
            { text: 'ふたっつ', isCorrect: false, reason: '2沒有促音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 2, kanji: '二つ', reading: 'ふたつ' }
    },
    {
        id: 'general_scenario_5', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: false,
        stem: '椅子が＿＿あります。', stem_zh: '有四張椅子。',
        options: [
            { text: 'しつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'よっつ', isCorrect: true, reason: '正確！四張椅子。' },
            { text: 'よつ', isCorrect: false, reason: '需要促音。' },
            { text: 'よんきゃく', isCorrect: false, reason: '本題考察「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「椅子」可使用「つ」計數（也可用「脚」）。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 4, kanji: '四つ', reading: 'よっつ' }
    },
    {
        id: 'general_scenario_6', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '鈴鐺數量', stem_zh: '鈴鐺數量',
        dialogue: { speakerA: '鈴はいくつありますか？', speakerB: '＿＿あります。（六個）' },
        options: [
            { text: 'ろくつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'むっつ', isCorrect: true, reason: '正確！六個鈴鐺。' },
            { text: 'むつ', isCorrect: false, reason: '需要促音。' },
            { text: 'ろっこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 6, kanji: '六つ', reading: 'むっつ' }
    },
    {
        id: 'general_scenario_7', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: false,
        stem: 'テーブルに皿が＿＿あります。', stem_zh: '桌上有八個盤子。',
        options: [
            { text: 'はちつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'やっつ', isCorrect: true, reason: '正確！八個盤子。' },
            { text: 'やつ', isCorrect: false, reason: '需要促音。' },
            { text: 'はちまい', isCorrect: false, reason: '本題考察「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「皿」可使用「つ」計數（也可用「枚」）。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 8, kanji: '八つ', reading: 'やっつ' }
    },
    {
        id: 'general_scenario_8', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '玩具數量', stem_zh: '玩具數量',
        dialogue: { speakerA: 'おもちゃはいくつありますか？', speakerB: '＿＿あります。（七個）' },
        options: [
            { text: 'しちつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'ななつ', isCorrect: true, reason: '正確！七個玩具。' },
            { text: 'ななっつ', isCorrect: false, reason: '7沒有促音。' },
            { text: 'しちこ', isCorrect: false, reason: '回答「いくつ」用「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '回答「いくつ」時使用「〜つ」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 7, kanji: '七つ', reading: 'ななつ' }
    },
    {
        id: 'general_scenario_9', category: 'counters', subcategory: 'generalObjects', type: 'sentence', isTrap: false,
        stem: '方法が＿＿あります。', stem_zh: '有九種方法。',
        options: [
            { text: 'きゅうつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'ここのつ', isCorrect: true, reason: '正確！九種方法。' },
            { text: 'ここっつ', isCorrect: false, reason: '9沒有促音。' },
            { text: 'きゅうこ', isCorrect: false, reason: '抽象概念用「つ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「方法」等抽象概念可使用「つ」計數。', relatedRules: ['量詞「つ」的使用', '抽象事物'] },
        sourceItem: { value: 9, kanji: '九つ', reading: 'ここのつ' }
    },
    {
        id: 'general_scenario_10', category: 'counters', subcategory: 'generalObjects', type: 'dialogue', isTrap: false,
        stem: '選項數量', stem_zh: '選項數量',
        dialogue: { speakerA: 'オプションはいくつありますか？', speakerB: '＿＿あります。（十個）' },
        options: [
            { text: 'じゅうつ', isCorrect: false, reason: '10沒有「つ」。' },
            { text: 'とお', isCorrect: true, reason: '正確！十個選項。' },
            { text: 'とおつ', isCorrect: false, reason: '10沒有「つ」。' },
            { text: 'じゅっこ', isCorrect: false, reason: '回答「いくつ」用「つ」系統。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「つ」系統的10讀作「とお」。', relatedRules: ['量詞「つ」的使用'] },
        sourceItem: { value: 10, kanji: '十', reading: 'とお' }
    },

    // ===== 綜合複習題 =====
    {
        id: 'general_review_1', category: 'counters', subcategory: 'generalObjects', type: 'pronunciation', isTrap: false,
        stem: '「つ」の数{かぞ}え方{かた}（5〜8）の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「つ」系統5-8的正確讀法是？',
        options: [
            { text: 'いつつ、むっつ、ななつ、やっつ', isCorrect: true, reason: '正確！5-8的讀法都正確。' },
            { text: 'ごつ、ろくつ、しちつ、はちつ', isCorrect: false, reason: '錯誤，「つ」使用訓讀，不是音讀。' },
            { text: 'いっつ、むつ、ななっつ、やつ', isCorrect: false, reason: '錯誤，5和7沒有促音，6和8有促音。' },
            { text: 'いつつ、むつ、ななつ、やつ', isCorrect: false, reason: '錯誤，6和8需要促音。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「つ」系統5-8：いつつ（無促音）、むっつ（有促音）、ななつ（無促音）、やっつ（有促音）。', relatedRules: ['量詞「つ」の総合規則', '促音規則'] },
        sourceItem: { value: 0, kanji: 'つ5-8', reading: '訓讀計數' }
    },
    {
        id: 'general_review_2', category: 'counters', subcategory: 'generalObjects', type: 'pronunciation', isTrap: false,
        stem: '選出所有正確的配對', stem_zh: '選出所有正確的配對',
        options: [
            { text: '一つ=ひとつ、二つ=ふたつ、十=とお', isCorrect: true, reason: '正確！這三個配對都正確。' },
            { text: '一つ=いちつ、二つ=につ、十=じゅうつ', isCorrect: false, reason: '錯誤，「つ」使用訓讀。' },
            { text: '一つ=ひとっつ、二つ=ふたっつ、十=とおつ', isCorrect: false, reason: '錯誤，1和2沒有促音，10沒有「つ」。' },
            { text: '一つ=ひとつ、二つ=ふたつ、十=とおつ', isCorrect: false, reason: '錯誤，10沒有「つ」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「つ」系統：ひとつ、ふたつ...，10讀作「とお」沒有「つ」。', relatedRules: ['量詞「つ」の総合規則'] },
        sourceItem: { value: 0, kanji: 'つ總複習', reading: '訓讀計數' }
    },
    {
        id: 'general_review_3', category: 'counters', subcategory: 'generalObjects', type: 'pronunciation', isTrap: true,
        stem: '以下哪個說法是正確的？', stem_zh: '以下哪個說法是正確的？',
        options: [
            { text: '「つ」系統中，3、4、6、8有促音', isCorrect: true, reason: '正確！促音出現在みっつ、よっつ、むっつ、やっつ。' },
            { text: '「つ」系統中，所有數字都有促音', isCorrect: false, reason: '錯誤，只有3、4、6、8有促音。' },
            { text: '「つ」系統中，沒有任何促音', isCorrect: false, reason: '錯誤，3、4、6、8有促音。' },
            { text: '「つ」系統中，奇數有促音', isCorrect: false, reason: '錯誤，有促音的是3、4、6、8。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '記住促音規則：3(みっつ)、4(よっつ)、6(むっつ)、8(やっつ)有促音。', relatedRules: ['促音規則'] },
        sourceItem: { value: 0, kanji: 'つ促音', reading: '促音規則' }
    }
];
