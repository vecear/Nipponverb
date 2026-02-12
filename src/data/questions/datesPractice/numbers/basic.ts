import { DatesPracticeQuestion } from '../types';

// 基本數字練習題 (0-10)
// 每個數字3題：發音題、單句敘述題、對話題
// 至少1題為陷阱題

export const basicNumberQuestions: DatesPracticeQuestion[] = [
    // ===== 數字 1 的三題 =====
    {
        id: 'num_basic_1_pron',
        category: 'numbers',
        subcategory: 'basic',
        type: 'pronunciation',
        isTrap: false,
        stem: '「一」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「一」的正確讀音是？',
        options: [
            { text: 'いち', isCorrect: true, reason: '正確！「一{いち}」的音讀是「いち」，源自古代中國的讀音。' },
            { text: 'ひとつ', isCorrect: false, reason: '這是「一{ひと}つ」的讀法，用於計數一般物品時使用訓讀。' },
            { text: 'いつ', isCorrect: false, reason: '這是「五」在「五つ」中的讀法，不是「一{いち}」。' },
            { text: 'ひと', isCorrect: false, reason: '這是「一人」中「一{ひと}」的訓讀部分，不是獨立數字的讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '數字「一{いち}」的標準音讀是「いち」，源自古代中國的讀音。在現代日語中，「いち」常用於電話號碼、數學計算和10以上的組合數字。',
            relatedRules: ['音讀與訓讀的區別', '1-10的基本發音', '音讀使用場景']
        },
        sourceItem: { value: 1, kanji: '一', reading: 'いち' }
    },
    {
        id: 'num_basic_1_sent',
        category: 'numbers',
        subcategory: 'basic',
        type: 'sentence',
        isTrap: true,
        stem: '彼女は＿＿番です。',
        stem_zh: '她是一號。',
        options: [
            { text: 'ひと', isCorrect: false, reason: '陷阱！「ひと」是訓讀，在編號中必須使用音讀。' },
            { text: 'いち', isCorrect: true, reason: '正確！編號、順序時使用音讀「いち」。' },
            { text: 'ひとつ', isCorrect: false, reason: '「ひとつ」用於計數物品，不用於編號。' },
            { text: 'いっ', isCorrect: false, reason: '「いっ」是促音化的形式，獨立使用時不促音。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '在編號、順序、號碼等情境中，必須使用音讀「いち」，不可使用訓讀「ひと」或「ひとつ」。',
            trapExplanation: '這是一道陷阱題，利用學習者容易混淆音讀與訓讀的使用場景。',
            relatedRules: ['編號使用音讀', '音讀與訓讀的使用場景區別']
        },
        sourceItem: { value: 1, kanji: '一番', reading: 'いちばん' }
    },
    {
        id: 'num_basic_1_dial',
        category: 'numbers',
        subcategory: 'basic',
        type: 'dialogue',
        isTrap: false,
        stem: '電話番号を教えてください。',
        stem_zh: '請告訴我電話號碼。',
        dialogue: {
            speakerA: 'すみません、電話番号を教えてください。',
            speakerB: '090の＿＿23の4567です。（最初是1）'
        },
        options: [
            { text: 'ひと', isCorrect: false, reason: '電話號碼必須使用音讀，不能使用訓讀「ひと」。' },
            { text: 'いち', isCorrect: true, reason: '正確！電話號碼使用音讀「いち」。' },
            { text: 'ひとつ', isCorrect: false, reason: '電話號碼不使用量詞讀法。' },
            { text: 'いっち', isCorrect: false, reason: '沒有「いっち」這個讀法。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '電話號碼、地址等數字序列中，一律使用音讀「いち」。',
            relatedRules: ['電話號碼的讀法', '數字序列使用音讀']
        },
        sourceItem: { value: 1, kanji: '一', reading: 'いち' }
    },

    // ===== 數字 2 的三題 =====
    {
        id: 'num_basic_2_pron',
        category: 'numbers',
        subcategory: 'basic',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「二」的正確讀音是？',
        options: [
            { text: 'に', isCorrect: true, reason: '正確！「二{に}」的音讀是「に」。' },
            { text: 'ふた', isCorrect: false, reason: '「ふた」是訓讀，用於「二つ」等詞。' },
            { text: 'ふたつ', isCorrect: false, reason: '「ふたつ」是完整的量詞讀法，不是單純的數字讀音。' },
            { text: 'じ', isCorrect: false, reason: '「じ」不是「二{に}」的讀音。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二{に}」的標準音讀是「に」，發音簡短清晰，是日語中最常用的數字之一。',
            relatedRules: ['基本數字1-10的音讀', '2的發音特點']
        },
        sourceItem: { value: 2, kanji: '二', reading: 'に' }
    },
    {
        id: 'num_basic_2_sent',
        category: 'numbers',
        subcategory: 'basic',
        type: 'sentence',
        isTrap: true,
        stem: '私には兄が＿＿人います。',
        stem_zh: '我有兩個哥哥。',
        options: [
            { text: 'に', isCorrect: false, reason: '陷阱！「二人{ふたり}」不讀「ににん」，使用特殊訓讀。' },
            { text: 'ふたり', isCorrect: true, reason: '正確！「二人{ふたり}」的特殊讀法是「ふたり」。' },
            { text: 'ふた', isCorrect: false, reason: '缺少量詞「り」，不完整。' },
            { text: 'ふたつ', isCorrect: false, reason: '「ふたつ」用於物品，人數使用「ふたり」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「二人{ふたり}」是特殊讀法，必須讀作「ふたり」，不能使用音讀「ににん」。這是日語中少數保留訓讀的人數表達。',
            trapExplanation: '這是陷阱題，「二人{ふたり}」是日語中的特殊讀法，學習者容易套用一般規則而錯誤。',
            relatedRules: ['人數的特殊讀法', '一人、二人{ふたり}的訓讀']
        },
        sourceItem: { value: 2, kanji: '二人', reading: 'ふたり' }
    },
    {
        id: 'num_basic_2_dial',
        category: 'numbers',
        subcategory: 'basic',
        type: 'dialogue',
        isTrap: false,
        stem: '何月生まれですか？',
        stem_zh: '你是幾月出生的？',
        dialogue: {
            speakerA: '何月生まれですか？',
            speakerB: '＿＿月{がつ}です。（二月）'
        },
        options: [
            { text: 'ふたがつ', isCorrect: false, reason: '月份不使用訓讀「ふた」。' },
            { text: 'に', isCorrect: false, reason: '缺少「がつ」，不完整。' },
            { text: 'にがつ', isCorrect: true, reason: '正確！二月{にがつ}讀作「にがつ」。' },
            { text: 'じがつ', isCorrect: false, reason: '「じ」不是二{に}的讀音。' }
        ],
        correctIndex: 2,
        explanation: {
            correctRule: '月份使用音讀，「二月{にがつ}」讀作「にがつ」。',
            relatedRules: ['月份的讀法', '音讀在日期中の應用']
        },
        sourceItem: { value: 2, kanji: '二月', reading: 'にがつ' }
    },

    // ===== 數字 3 的三題 =====
    {
        id: 'num_basic_3_pron',
        category: 'numbers',
        subcategory: 'basic',
        type: 'pronunciation',
        isTrap: false,
        stem: '「三」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「三」的正確讀音是？',
        options: [
            { text: 'さん', isCorrect: true, reason: '正確！「三{さん}」的音讀是「さん」。' },
            { text: 'み', isCorrect: false, reason: '「み」是訓讀，用於「三{み}つ」時讀作「みっつ」。' },
            { text: 'みっつ', isCorrect: false, reason: '「みっつ」は量詞讀法，不是單純數字。' },
            { text: 'ざん', isCorrect: false, reason: '沒有濁音，正確「さん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三{さん}」的音讀「さん」，這是最標準和常用的讀法。',
            relatedRules: ['基本數字1-10', '三{さん}的發音']
        },
        sourceItem: { value: 3, kanji: '三', reading: 'さん' }
    },
    {
        id: 'num_basic_3_sent',
        category: 'numbers',
        subcategory: 'basic',
        type: 'sentence',
        isTrap: true,
        stem: '私は鉛筆を＿＿持っています。',
        stem_zh: '我有三支鉛筆。',
        options: [
            { text: 'さんほん', isCorrect: false, reason: '陷阱！「三{さん}」後面接「本{ほん}」時會發生濁音化，變成「ぼん」。' },
            { text: 'さんぼん', isCorrect: true, reason: '正確！撥音「ん」後面の「ほ」要變成濁音「ぼ」。' },
            { text: 'みっぽん', isCorrect: false, reason: '這混合了訓讀數字和音讀量詞，且音變錯誤。' },
            { text: 'さんぽん', isCorrect: false, reason: '應該は濁音「ぼ」，不是半濁音「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「本{ほん}」量詞在「三{さん}」後面會濁音化：さん＋ほん→さんぼん。這是因為撥音「ん」後面のは行音容易濁音化。',
            trapExplanation: '這是一道陷阱題，利用學習者容易忽略「ん」後面濁音化的規則。「さんほん」は最常見の錯誤。',
            relatedRules: ['h-p轉換規律', '撥音後的濁音化', '「本{ほん}」的音變規則', '3引發的濁音化']
        },
        sourceItem: { value: 3, kanji: '三本', reading: 'さんぼん' }
    },
    {
        id: 'num_basic_3_dial',
        category: 'numbers',
        subcategory: 'basic',
        type: 'dialogue',
        isTrap: false,
        stem: '何人家族ですか？',
        stem_zh: '你家有幾個人？',
        dialogue: {
            speakerA: '何人家族ですか？',
            speakerB: '＿＿人{にん}家族{かぞく}です。（三人）'
        },
        options: [
            { text: 'みっつ', isCorrect: false, reason: '「みっつ」用於物品，人數使用「にん」。' },
            { text: 'みたり', isCorrect: false, reason: '沒有「みたり」這個讀法，二人{ふたり}以上使用音讀。' },
            { text: 'さんにん', isCorrect: true, reason: '正確！三人{さんにん}及以上使用音讀「さんにん」。' },
            { text: 'さんり', isCorrect: false, reason: '人數量詞「にん」，不是「り」。' }
        ],
        correctIndex: 2,
        explanation: {
            correctRule: '三人{さんにん}及以上の人數使用音讀，「三人{さんにん}」讀作「さんにん」。只有一人{ひとり}和二人{ふたり}使用訓讀（ひとり、ふたり）。',
            relatedRules: ['人數的讀法', '一人二人使用訓讀，三人{さんにん}起使用音讀']
        },
        sourceItem: { value: 3, kanji: '三人', reading: 'さんにん' }
    },

    // ===== 數字 4 的三題 =====
    {
        id: 'num_basic_4_pron',
        category: 'numbers',
        subcategory: 'basic',
        type: 'pronunciation',
        isTrap: true,
        stem: '「四」最常用的讀音是？',
        stem_zh: '「四」最常用的讀音是？',
        options: [
            { text: 'し', isCorrect: false, reason: '雖然「し」也是讀音之一，但因避諱「死」，日常多用「よん」。' },
            { text: 'よん', isCorrect: true, reason: '正確！為了避諱「死」的發音，日常對話中多使用「よん」。' },
            { text: 'よ', isCorrect: false, reason: '「よ」は訓讀の一部分，完整應「よっつ」。' },
            { text: 'よっつ', isCorrect: false, reason: '「よっつ」は量詞讀法，不是單純數字讀音。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「四{よん}」有兩個音讀：「し」和「よん」。由於「し」與「死」同音，日常生活中多使用「よん」以避諱。但在某些固定用法中仍使用「し」（如四月{しがつ}「しがつ」）。',
            trapExplanation: '這是陷阱題，測試學習者是否了解日語中の避諱文化。「し」雖然也正確，但「よん」更常用。',
            relatedRules: ['四{よん}の兩種讀法', '日語避諱文化', '「し」與「よん」的使用區別']
        },
        sourceItem: { value: 4, kanji: '四', reading: 'よん / し' }
    },
    {
        id: 'num_basic_4_sent',
        category: 'numbers',
        subcategory: 'basic',
        type: 'sentence',
        isTrap: true,
        stem: '＿＿月に桜が咲きます。',
        stem_zh: '四月櫻花開。',
        options: [
            { text: 'よんがつ', isCorrect: false, reason: '陷阱！月份使用「清瘦型」讀法，四月{しがつ}必須讀「しがつ」。' },
            { text: 'しがつ', isCorrect: true, reason: '正確！月份中「四月{しがつ}」固定讀作「しがつ」，不能使用「よん」。' },
            { text: 'よがつ', isCorrect: false, reason: '不完整，缺少「ん」。' },
            { text: 'よっがつ', isCorrect: false, reason: '沒有促音，且月份不使用這個讀法。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '月份使用「清瘦型」讀法，「四月{しがつ}」固定讀作「しがつ」，禁止使用「よんがつ」。這是月份讀法的特殊規則。',
            trapExplanation: '這是雙重陷阱題：一は測試學習者是否知道月份的特殊讀法，二は測試是否會被日常習慣用「よん」所誤導。',
            relatedRules: ['月份の清瘦型讀法', '四月{しがつ}、七月{しちがつ}、九月{くがつ}的特殊讀法', '避諱規則の例外情況']
        },
        sourceItem: { value: 4, kanji: '四月', reading: 'しがつ' }
    },
    {
        id: 'num_basic_4_dial',
        category: 'numbers',
        subcategory: 'basic',
        type: 'dialogue',
        isTrap: true,
        stem: '今、何時ですか？',
        stem_zh: '現在幾點？',
        dialogue: {
            speakerA: 'すみません、今、何時ですか？',
            speakerB: '＿＿です。（四點）'
        },
        options: [
            { text: 'よんじ', isCorrect: false, reason: '陷阱！「四時{よじ}」不能讀作「よんじ」，這是固定的特殊讀法。' },
            { text: 'しじ', isCorrect: false, reason: '陷阱！雖然接近，但正確讀音「よじ」，不是「しじ」。' },
            { text: 'よじ', isCorrect: true, reason: '正確！「四時{よじ}」の固定讀法「よじ」，這是時間表達的特殊規則。' },
            { text: 'よっじ', isCorrect: false, reason: '促音「っ」不出現在「四時{よじ}」中。' }
        ],
        correctIndex: 2,
        explanation: {
            correctRule: '「四時{よじ}」は時間表達中的特殊讀法，必須讀作「よじ」，不可讀「しじ」或「よんじ」。這是固定搭配，需要特別記憶。',
            trapExplanation: '這是三重陷阱題：「よんじ」利用日常習慣、「しじ」利用月份讀法類比、「よっじ」利用日期讀法類比。正確答案「よじ」は獨特的。',
            relatedRules: ['四時{よじ}、七時{しちじ}、九時{くじ}的特殊讀法', '時間表達の固定搭配', '避諱規則在時間中的特殊處理']
        },
        sourceItem: { value: 4, kanji: '四時', reading: 'よじ' }
    },

    // ===== 數字 5 的三題 =====
    {
        id: 'num_basic_5_pron',
        category: 'numbers',
        subcategory: 'basic',
        type: 'pronunciation',
        isTrap: false,
        stem: '「五」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「五」的正確讀音是？',
        options: [
            { text: 'ご', isCorrect: true, reason: '正確！「五{ご}」的音讀「ご」。' },
            { text: 'いつ', isCorrect: false, reason: '「いつ」は訓讀，用於「五{いつ}つ」（いつつ）。' },
            { text: 'いつつ', isCorrect: false, reason: '「いつつ」は完整の量詞讀法。' },
            { text: 'こ', isCorrect: false, reason: '「ご」不是「こ」，需要濁音。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五{ご}」的音讀「ご」，發音時需要濁音，不要與「こ」混淆。',
            relatedRules: ['基本數字1-10', '濁音の正確發音']
        },
        sourceItem: { value: 5, kanji: '五', reading: 'ご' }
    },
    {
        id: 'num_basic_5_sent',
        category: 'numbers',
        subcategory: 'basic',
        type: 'sentence',
        isTrap: false,
        stem: '私は＿＿月生まれです。',
        stem_zh: '我是五月出生的。',
        options: [
            { text: 'いつがつ', isCorrect: false, reason: '月份不使用訓讀「いつ」。' },
            { text: 'こがつ', isCorrect: false, reason: '需要濁音，「ご」不是「こ」。' },
            { text: 'ごがつ', isCorrect: true, reason: '正確！五月{ごがつ}讀作「ごがつ」。' },
            { text: 'ごつ', isCorrect: false, reason: '缺少「がつ」，不完整。' }
        ],
        correctIndex: 2,
        explanation: {
            correctRule: '月份使用音讀，「五月{ごがつ}」讀作「ごがつ」。五月{ごがつ}的讀法相對規則，沒有特殊變化。',
            relatedRules: ['月份的讀法', '五{ご}的音讀應用']
        },
        sourceItem: { value: 5, kanji: '五月', reading: 'ごがつ' }
    },
    {
        id: 'num_basic_5_dial',
        category: 'numbers',
        subcategory: 'basic',
        type: 'dialogue',
        isTrap: false,
        stem: 'りんごはいくつありますか？',
        stem_zh: '有幾個蘋果？',
        dialogue: {
            speakerA: 'りんごはいくつありますか？',
            speakerB: '＿＿あります。（五個）'
        },
        options: [
            { text: 'ごこ', isCorrect: false, reason: '「個」不讀「こ」，一般物品用「つ」。' },
            { text: 'ごつ', isCorrect: false, reason: '五{ご}的訓讀不是「ご」，應該「いつ」。' },
            { text: 'いつつ', isCorrect: true, reason: '正確！一般物品1-10個使用訓讀「つ」，五個「いつつ」。' },
            { text: 'いつこ', isCorrect: false, reason: '「いつこ」不是標準讀法，應該使用「いつつ」。' }
        ],
        correctIndex: 2,
        explanation: {
            correctRule: '一般物品1-10個使用「つ」量詞，五個讀作「いつつ」。這是訓讀系統，與音讀「ご」不同。',
            relatedRules: ['「つ」量詞的使用', '1-10的訓讀', '一般物品の計數方法']
        },
        sourceItem: { value: 5, kanji: '五つ', reading: 'いつつ' }
    },

    // ===== 數字 0 的三題 =====
    {
        id: 'num_basic_0_pron',
        category: 'numbers',
        subcategory: 'basic',
        type: 'pronunciation',
        isTrap: false,
        stem: '「零」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「零」的正確讀音是？',
        options: [
            { text: 'ゼロ / れい', isCorrect: true, reason: '正確！「零{れい}」可讀「ゼロ」（外來語）或「れい」（音讀）。' },
            { text: 'まる', isCorrect: false, reason: '「まる」是「丸{まる}」的意思，雖然有時口語會說，但不是標準數字讀法。' },
            { text: 'なし', isCorrect: false, reason: '「なし」是「無」的意思，不是數字0的讀法。' },
            { text: 'ぜろう', isCorrect: false, reason: '不正確，正確の外來語發音是「ゼロ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '數字「零{れい}」有兩種讀法：「ゼロ」是外來語讀法（來自英語zero），「れい」是傳統音讀。兩者都常用。',
            relatedRules: ['外來語數字', '零{れい}の兩種讀法']
        },
        sourceItem: { value: 0, kanji: '零', reading: 'ゼロ / れい' }
    },
    {
        id: 'num_basic_0_sent',
        category: 'numbers',
        subcategory: 'basic',
        type: 'sentence',
        isTrap: false,
        stem: '気温は＿＿度です。',
        stem_zh: '氣溫是零度。',
        options: [
            { text: 'れいど', isCorrect: true, reason: '正確！溫度中常用「れいど」（零度）。' },
            { text: 'ゼロど', isCorrect: false, reason: '雖然可以理解，但溫度通常使用「れいど」。' },
            { text: 'まるど', isCorrect: false, reason: '「まるど」不是標準溫度表達。' },
            { text: 'ないど', isCorrect: false, reason: '沒有「ないど」這種讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '溫度表達中，「零度」通常讀作「れいど」，使用傳統音讀。',
            relatedRules: ['溫度的表達', '零{れい}的使用場景']
        },
        sourceItem: { value: 0, kanji: '零度', reading: 'れいど' }
    },
    {
        id: 'num_basic_0_dial',
        category: 'numbers',
        subcategory: 'basic',
        type: 'dialogue',
        isTrap: false,
        stem: '電話番号は何ですか？',
        stem_zh: '電話號碼是什麼？',
        dialogue: {
            speakerA: '電話番号を教えてください。',
            speakerB: '＿＿九〇の1234です。（090）'
        },
        options: [
            { text: 'ゼロきゅうゼロ', isCorrect: true, reason: '正確！電話號碼中0通常讀「ゼロ」。' },
            { text: 'れいきゅうれい', isCorrect: false, reason: '雖然「れい」也是正確讀法，但電話號碼中多使用「ゼロ」。' },
            { text: 'まるきゅうまる', isCorrect: false, reason: '「まる」不是數字0の標準讀法。' },
            { text: 'おーきゅうおー', isCorrect: false, reason: '「おー」是英語O的讀法，日語使用「ゼロ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '電話號碼等數字序列中，「零{れい}」常用外來語讀法「ゼロ」。',
            relatedRules: ['電話號碼的讀法', '外來語數字的使用']
        },
        sourceItem: { value: 0, kanji: '零', reading: 'ゼロ' }
    },

    // ===== 數字 6 的三題 =====
    {
        id: 'num_basic_6_pron',
        category: 'numbers',
        subcategory: 'basic',
        type: 'pronunciation',
        isTrap: false,
        stem: '「六」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「六」的正確讀音是？',
        options: [
            { text: 'ろく', isCorrect: true, reason: '正確！「六{ろく}」的音讀是「ろく」。' },
            { text: 'むっつ', isCorrect: false, reason: '「むっつ」是「六{む}つ」の完整量詞讀法，不是單純數字。' },
            { text: 'む', isCorrect: false, reason: '「む」は訓讀の一部分，不獨立使用。' },
            { text: 'りく', isCorrect: false, reason: '「りく」是「陸{りく}」（陸地）的讀法，不是數字。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六{ろく}」的音讀是「ろく」，發音清晰標準。',
            relatedRules: ['基本數字1-10', '六{ろく}的音讀']
        },
        sourceItem: { value: 6, kanji: '六', reading: 'ろく' }
    },
    {
        id: 'num_basic_6_sent',
        category: 'numbers',
        subcategory: 'basic',
        type: 'sentence',
        isTrap: true,
        stem: '私は鉛筆を＿＿持っています。',
        stem_zh: '我有六支鉛筆。',
        options: [
            { text: 'ろくほん', isCorrect: false, reason: '陷阱！「六{ろく}」後面接「本{ほん}」時會發生促音化和半濁音化。' },
            { text: 'ろっぽん', isCorrect: true, reason: '正確！「六{ろく}」＋「本{ほん}」→「ろっぽん」，促音＋半濁音。' },
            { text: 'むっぽん', isCorrect: false, reason: '數字部分應使用音讀「ろく」。' },
            { text: 'ろくぼん', isCorrect: false, reason: '應是半濁音「ぽ」不是濁音「ぼ」，且需要促音。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「本{ほん}」量詞在「六{ろく}」後面會發生h-p轉換：ろく＋ほん→ろっぽん。「く」變成促音「っ」，「ほ」變成半濁音「ぽ」。',
            trapExplanation: '這是陷阱題，測試學習者是否掌握「六{ろく}」引發的促音化和半濁音化規則。',
            relatedRules: ['h-p轉換規律', '6引發の促音+半濁音', '「本{ほん}」的音變規則']
        },
        sourceItem: { value: 6, kanji: '六本', reading: 'ろっぽん' }
    },
    {
        id: 'num_basic_6_dial',
        category: 'numbers',
        subcategory: 'basic',
        type: 'dialogue',
        isTrap: false,
        stem: '何月生まれですか？',
        stem_zh: '你是幾月出生的？',
        dialogue: {
            speakerA: '何月生まれですか？',
            speakerB: '＿＿生まれです。（六月）'
        },
        options: [
            { text: 'むつがつ', isCorrect: false, reason: '月份不使用訓讀「むつ」。' },
            { text: 'りくがつ', isCorrect: false, reason: '「りく」不是「六{ろく}」的讀法。' },
            { text: 'ろくがつ', isCorrect: true, reason: '正確！六月{ろくがつ}讀作「ろくがつ」。' },
            { text: 'ろっがつ', isCorrect: false, reason: '月份不促音化，「ろくがつ」不是「ろっがつ」。' }
        ],
        correctIndex: 2,
        explanation: {
            correctRule: '月份使用音讀，「六月{ろくがつ}」讀作「ろくがつ」，不促音化。',
            relatedRules: ['月份的讀法', '六月{ろくがつ}沒有音變']
        },
        sourceItem: { value: 6, kanji: '六月', reading: 'ろくがつ' }
    },

    // ===== 數字 7 的三題 =====
    {
        id: 'num_basic_7_pron',
        category: 'numbers',
        subcategory: 'basic',
        type: 'pronunciation',
        isTrap: true,
        stem: '「七」最常用的讀音是？',
        stem_zh: '「七」最常用的讀音是？',
        options: [
            { text: 'しち', isCorrect: false, reason: '「しち」也是正確讀法，但因容易與「一」混淆，日常多用「なな」。' },
            { text: 'なな', isCorrect: true, reason: '正確！為避免與「一」混淆，日常對話多使用「なな」。' },
            { text: 'ななつ', isCorrect: false, reason: '「ななつ」是量詞讀法，不是單純數字讀音。' },
            { text: 'しっち', isCorrect: false, reason: '沒有「しっち」這個讀法。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「七{なな}」有兩個讀法：「しち」和「なな」。由於「しち」容易與「一」聽起來混淆，日常生活中多使用「なな」。',
            trapExplanation: '這是陷阱題，測試學習者是否了解「なな」vs「しち」的使用習慣。',
            relatedRules: ['七{なな}の兩種讀法', '避免混淆の習慣用法']
        },
        sourceItem: { value: 7, kanji: '七', reading: 'なな / しち' }
    },
    {
        id: 'num_basic_7_sent',
        category: 'numbers',
        subcategory: 'basic',
        type: 'sentence',
        isTrap: true,
        stem: '＿＿月は夏休みの季節です。',
        stem_zh: '七月是暑假的季節。',
        options: [
            { text: 'なながつ', isCorrect: false, reason: '陷阱！月份使用「清瘦型」讀法，七月{しちがつ}必須讀「しちがつ」。' },
            { text: 'しちがつ', isCorrect: true, reason: '正確！月份中「七月{しちがつ}」固定讀作「しちがつ」。' },
            { text: 'ななつき', isCorrect: false, reason: '月份使用「がつ」不是「つき」。' },
            { text: 'しつがつ', isCorrect: false, reason: '「しち」不是「しつ」，促音位置錯誤。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '月份使用「清瘦型」讀法，「七月{しちがつ}」固定讀作「しちがつ」，禁止使用「なながつ」。',
            trapExplanation: '雖然日常中「七{なな}」多讀「なな」，但月份中必須使用「しち」。',
            relatedRules: ['月份の清瘦型讀法', '七月{しちがつ}的特殊規則']
        },
        sourceItem: { value: 7, kanji: '七月', reading: 'しちがつ' }
    },
    {
        id: 'num_basic_7_dial',
        category: 'numbers',
        subcategory: 'basic',
        type: 'dialogue',
        isTrap: true,
        stem: '今、何時ですか？',
        stem_zh: '現在幾點？',
        dialogue: {
            speakerA: 'すみません、今、何時ですか？',
            speakerB: '＿＿です。（七點）'
        },
        options: [
            { text: 'ななじ', isCorrect: false, reason: '雖然「なな」常用，但時間中七時{しちじ}讀「しちじ」。' },
            { text: 'しちじ', isCorrect: true, reason: '正確！「七時{しちじ}」の固定讀法是「しちじ」。' },
            { text: 'しつじ', isCorrect: false, reason: '「しち」不是「しつ」。' },
            { text: 'なのじ', isCorrect: false, reason: '沒有「なのじ」這個讀法。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「七時{しちじ}」是時間表達中の固定讀法，必須讀作「しちじ」。',
            trapExplanation: '這是陷阱題，時間中の七時{しちじ}使用「しち」，與日常習慣使用「なな」不同。',
            relatedRules: ['七時{しちじ}の固定讀法', '時間表達的特殊規則']
        },
        sourceItem: { value: 7, kanji: '七時', reading: 'しちじ' }
    },

    // ===== 數字 8 的三題 =====
    {
        id: 'num_basic_8_pron',
        category: 'numbers',
        subcategory: 'basic',
        type: 'pronunciation',
        isTrap: false,
        stem: '「八」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「八」的正確讀音是？',
        options: [
            { text: 'はち', isCorrect: true, reason: '正確！「八{はち}」的音讀是「はち」。' },
            { text: 'やっつ', isCorrect: false, reason: '「やっつ」是「八{や}つ」の量詞讀法，不是單純數字。' },
            { text: 'や', isCorrect: false, reason: '「や」は訓讀の一部分，不獨立使用。' },
            { text: 'はっ', isCorrect: false, reason: '「はっ」是促音化形式，量詞前使用，不獨立。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八{はち}」的音讀是「はち」，標準清晰。',
            relatedRules: ['基本數字1-10', '八{はち}的音讀']
        },
        sourceItem: { value: 8, kanji: '八', reading: 'はち' }
    },
    {
        id: 'num_basic_8_sent',
        category: 'numbers',
        subcategory: 'basic',
        type: 'sentence',
        isTrap: true,
        stem: '私は本を＿＿読みました。',
        stem_zh: '我讀了八本書。',
        options: [
            { text: 'はちさつ', isCorrect: false, reason: '陷阱！「八{はち}」＋「冊{さつ}」會促音化為「はっさつ」。' },
            { text: 'はっさつ', isCorrect: true, reason: '正確！「八{はち}」＋「冊{さつ}」→「はっさつ」，促音化。' },
            { text: 'やっさつ', isCorrect: false, reason: '書籍量詞不使用訓讀「や」。' },
            { text: 'はちざつ', isCorrect: false, reason: '「冊{さつ}」不濁音化，應是促音化。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「冊{さつ}」量詞在「八{はち}」後面會促音化：はち＋さつ→はっさつ。「ち」變成促音「っ」。',
            trapExplanation: '這是陷阱題，測試學習者是否掌握「八{はち}」引發的促音化規則。',
            relatedRules: ['8引發的促音化', '「冊{さつ}」的音變規則']
        },
        sourceItem: { value: 8, kanji: '八冊', reading: 'はっさつ' }
    },
    {
        id: 'num_basic_8_dial',
        category: 'numbers',
        subcategory: 'basic',
        type: 'dialogue',
        isTrap: false,
        stem: '何月生まれですか？',
        stem_zh: '你是幾月出生的？',
        dialogue: {
            speakerA: '何月生まれですか？',
            speakerB: '＿＿生まれです。（八月）'
        },
        options: [
            { text: 'やつがつ', isCorrect: false, reason: '月份不使用訓讀「やつ」。' },
            { text: 'はちがつ', isCorrect: true, reason: '正確！八月{はちがつ}讀作「はちがつ」。' },
            { text: 'はっがつ', isCorrect: false, reason: '月份不促音化，「はちがつ」。' },
            { text: 'やがつ', isCorrect: false, reason: '月份使用音讀「はち」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '月份使用音讀，「八月{はちがつ}」讀作「はちがつ」，不促音化。',
            relatedRules: ['月份的讀法', '八月{はちがつ}沒有音變']
        },
        sourceItem: { value: 8, kanji: '八月', reading: 'はちがつ' }
    },

    // ===== 數字 9 的三題 =====
    {
        id: 'num_basic_9_pron',
        category: 'numbers',
        subcategory: 'basic',
        type: 'pronunciation',
        isTrap: true,
        stem: '「九」最常用的讀音是？',
        stem_zh: '「九」最常用的讀音是？',
        options: [
            { text: 'く', isCorrect: false, reason: '「く」也是正確讀法，但因諧音「苦」，日常多用「きゅう」。' },
            { text: 'きゅう', isCorrect: true, reason: '正確！為避諱「苦」的發音，日常對話多使用「きゅう」。' },
            { text: 'ここのつ', isCorrect: false, reason: '「ここのつ」是量詞讀法，不是單純數字讀音。' },
            { text: 'ここの', isCorrect: false, reason: '「ここの」は訓讀の一部分，不獨立使用。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「九{きゅう}」有兩個讀法：「きゅう」和「く」。由於「く」與「苦」同音，日常生活中多使用「きゅう」以避諱。',
            trapExplanation: '這是陷阱題，測試學習者是否了解日語中の避諱文化。',
            relatedRules: ['九{きゅう}の兩種讀法', '日語避諱文化']
        },
        sourceItem: { value: 9, kanji: '九', reading: 'きゅう / く' }
    },
    {
        id: 'num_basic_9_sent',
        category: 'numbers',
        subcategory: 'basic',
        type: 'sentence',
        isTrap: true,
        stem: '＿＿月は秋の始まりです。',
        stem_zh: '九月是秋天的開始。',
        options: [
            { text: 'きゅうがつ', isCorrect: false, reason: '陷阱！月份使用「清瘦型」讀法，九月{くがつ}必須讀「くがつ」。' },
            { text: 'くがつ', isCorrect: true, reason: '正確！月份中「九月{くがつ}」固定讀作「くがつ」。' },
            { text: 'ここのつき', isCorrect: false, reason: '月份不使用訓讀。' },
            { text: 'ここがつ', isCorrect: false, reason: '沒有「ここがつ」這個讀法。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '月份使用「清瘦型」讀法，「九月{くがつ}」固定讀作「くがつ」，禁止使用「きゅうがつ」。',
            trapExplanation: '雖然日常中「九{きゅう}」多讀「きゅう」以避諱「苦」，但月份中必須使用「く」。',
            relatedRules: ['月份の清瘦型讀法', '九月{くがつ}的特殊規則']
        },
        sourceItem: { value: 9, kanji: '九月', reading: 'くがつ' }
    },
    {
        id: 'num_basic_9_dial',
        category: 'numbers',
        subcategory: 'basic',
        type: 'dialogue',
        isTrap: true,
        stem: '今、何時ですか？',
        stem_zh: '現在幾點？',
        dialogue: {
            speakerA: 'すみません、今、何時ですか？',
            speakerB: '＿＿です。（九點）'
        },
        options: [
            { text: 'きゅうじ', isCorrect: false, reason: '陷阱！時間中九時{くじ}讀「くじ」，不是「きゅうじ」。' },
            { text: 'くじ', isCorrect: true, reason: '正確！「九時{くじ}」の固定讀法是「くじ」。' },
            { text: 'ここのじ', isCorrect: false, reason: '沒有「ここのじ」這個讀法。' },
            { text: 'きゅじ', isCorrect: false, reason: '不完整，正確是「くじ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「九時{くじ}」是時間表達中の固定讀法，必須讀作「くじ」，不可讀「きゅうじ」。',
            trapExplanation: '這是陷阱題，時間中の九時{くじ}使用「く」，與日常習慣使用「きゅう」不同。',
            relatedRules: ['九時{くじ}の固定讀法', '時間表達的特殊規則']
        },
        sourceItem: { value: 9, kanji: '九時', reading: 'くじ' }
    },

    // ===== 數字 10 的三題 =====
    {
        id: 'num_basic_10_pron',
        category: 'numbers',
        subcategory: 'basic',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十」的正確讀音是？',
        options: [
            { text: 'じゅう', isCorrect: true, reason: '正確！「十{じゅう}」的音讀是「じゅう」。' },
            { text: 'とお', isCorrect: false, reason: '「とお」是「十{とお}」的訓讀，用於「つ」量詞時。' },
            { text: 'じゅっ', isCorrect: false, reason: '「じゅっ」是促音化形式，量詞前使用，不獨立。' },
            { text: 'じゅ', isCorrect: false, reason: '不完整，正確「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十{じゅう}」的音讀是「じゅう」，標準清晰。訓讀「とお」用於特殊場合。',
            relatedRules: ['基本數字1-10', '十{じゅう}的音讀與訓讀']
        },
        sourceItem: { value: 10, kanji: '十', reading: 'じゅう' }
    },
    {
        id: 'num_basic_10_sent',
        category: 'numbers',
        subcategory: 'basic',
        type: 'sentence',
        isTrap: true,
        stem: '私は鉛筆を＿＿持っています。',
        stem_zh: '我有十支鉛筆。',
        options: [
            { text: 'じゅうほん', isCorrect: false, reason: '陷阱！「十{じゅう}」＋「本{ほん}」會促音化和半濁音化為「じゅっぽん」。' },
            { text: 'じゅっぽん', isCorrect: true, reason: '正確！「十{じゅう}」＋「本{ほん}」→「じゅっぽん」，促音＋半濁音。' },
            { text: 'とおほん', isCorrect: false, reason: '「本{ほん}」量詞不使用訓讀「とお」。' },
            { text: 'じゅうぼん', isCorrect: false, reason: '應是促音+半濁音，不是只有濁音。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「本{ほん}」量詞在「十{じゅう}」後面會發生h-p轉換：じゅう＋ほん→じゅっぽん。「う」變成促音「っ」，「ほ」變成半濁音「ぽ」。',
            trapExplanation: '這是陷阱題，測試學習者是否掌握「十{じゅう}」引發的促音化和半濁音化規則。',
            relatedRules: ['h-p轉換規律', '10引發の促音+半濁音', '「本{ほん}」的音變規則']
        },
        sourceItem: { value: 10, kanji: '十本', reading: 'じゅっぽん' }
    },
    {
        id: 'num_basic_10_dial',
        category: 'numbers',
        subcategory: 'basic',
        type: 'dialogue',
        isTrap: false,
        stem: 'りんごはいくつありますか？',
        stem_zh: '有幾個蘋果？',
        dialogue: {
            speakerA: 'りんごはいくつありますか？',
            speakerB: '＿＿あります。（十個）'
        },
        options: [
            { text: 'じゅうこ', isCorrect: false, reason: '一般物品計數使用「つ」量詞，10個讀「とお」。' },
            { text: 'とお', isCorrect: true, reason: '正確！一般物品10個使用訓讀「とお」（沒有「つ」）。' },
            { text: 'じゅっこ', isCorrect: false, reason: '雖然「個」量詞使用「じゅっこ」，但「いくつ」問句通常用「とお」回答。' },
            { text: 'とおつ', isCorrect: false, reason: '10時沒有「つ」，直接讀「とお」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「つ」量詞在10時特殊，直接使用訓讀「とお」，不加「つ」。',
            relatedRules: ['「つ」量詞的特殊規則', '10的訓讀「とお」']
        },
        sourceItem: { value: 10, kanji: '十', reading: 'とお' }
    },

    // ===== 擴充題目：更多數字應用 =====
    {
        id: 'num_basic_extra_1', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「三」和「参」的讀音相同嗎？', stem_zh: '「三」和「参」的讀音相同嗎？',
        options: [
            { text: '是，都讀「さん」', isCorrect: true, reason: '正確！「三」和「参」都讀「さん」，「参」是「三」的大寫形式。' },
            { text: '不同，「参」讀「しゃん」', isCorrect: false, reason: '錯誤，「参」也讀「さん」。' },
            { text: '不同，「参」讀「まいる」', isCorrect: false, reason: '「まいる」是「参る」的訓讀，不是「三」的意思。' },
            { text: '不同，「参」讀「み」', isCorrect: false, reason: '「み」是「三」的訓讀部分。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「参」是「三」的大寫形式（大字），用於金融文件防止篡改，讀音相同。', relatedRules: ['數字の大字', '大字的使用場景'] },
        sourceItem: { value: 3, kanji: '三/参', reading: 'さん' }
    },
    {
        id: 'num_basic_extra_2', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '彼は＿＿歳です。（二十歳）', stem_zh: '他二十歲。',
        options: [
            { text: 'にじゅっさい', isCorrect: false, reason: '「二十歳」有特殊讀法。' },
            { text: 'はたち', isCorrect: true, reason: '正確！「二十歳」的特殊讀法是「はたち」。' },
            { text: 'にじゅうさい', isCorrect: false, reason: '這是一般讀法，但「二十歳」有特殊讀法。' },
            { text: 'ふたじゅう', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「二十歳」是特殊讀法，讀作「はたち」，這是日語中的固定表達。', relatedRules: ['年齡的特殊讀法', '二十歳=はたち'] },
        sourceItem: { value: 20, kanji: '二十歳', reading: 'はたち' }
    },
    {
        id: 'num_basic_extra_3', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '計算結果', stem_zh: '計算結果',
        dialogue: { speakerA: '三と五はいくつですか？', speakerB: '＿＿です。' },
        options: [
            { text: 'やっつ', isCorrect: false, reason: '「やっつ」是量詞讀法，這裡應該用音讀。' },
            { text: 'はち', isCorrect: true, reason: '正確！3+5=8，讀作「はち」。' },
            { text: 'なな', isCorrect: false, reason: '7不是3+5的答案。' },
            { text: 'きゅう', isCorrect: false, reason: '9不是3+5的答案。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '數學計算結果使用音讀，「八」讀「はち」。', relatedRules: ['數學計算的讀法'] },
        sourceItem: { value: 8, kanji: '八', reading: 'はち' }
    },
    {
        id: 'num_basic_extra_4', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: true,
        stem: '「一人」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「一人」的正確讀音是？',
        options: [
            { text: 'いちにん', isCorrect: false, reason: '陷阱！「一人」的特殊讀法不是音讀。' },
            { text: 'ひとり', isCorrect: true, reason: '正確！「一人」是特殊讀法，讀「ひとり」。' },
            { text: 'ひとにん', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'いちり', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「一人」和「二人」是特殊讀法：ひとり、ふたり。', trapExplanation: '這是陷阱題，測試學習者是否知道人數的特殊讀法。', relatedRules: ['人數的特殊讀法'] },
        sourceItem: { value: 1, kanji: '一人', reading: 'ひとり' }
    },
    {
        id: 'num_basic_extra_5', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '私の電話番号は＿＿です。（123）', stem_zh: '我的電話號碼是123。',
        options: [
            { text: 'いち、に、さん', isCorrect: true, reason: '正確！電話號碼用音讀逐個念出。' },
            { text: 'ひゃくにじゅうさん', isCorrect: false, reason: '電話號碼不讀成整數。' },
            { text: 'ひと、ふた、み', isCorrect: false, reason: '電話號碼不用訓讀。' },
            { text: 'ワン、ツー、スリー', isCorrect: false, reason: '日語電話號碼不用英語讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '電話號碼逐個數字讀出，使用音讀。', relatedRules: ['電話番号的讀法'] },
        sourceItem: { value: 123, kanji: '一二三', reading: 'いちにさん' }
    },
    {
        id: 'num_basic_extra_6', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: true,
        stem: '日期詢問', stem_zh: '日期詢問',
        dialogue: { speakerA: '今日は何日ですか？', speakerB: '＿＿です。（一日）' },
        options: [
            { text: 'いちにち', isCorrect: false, reason: '陷阱！「一日」作為日期讀「ついたち」。' },
            { text: 'ついたち', isCorrect: true, reason: '正確！「一日」（每月1號）讀「ついたち」。' },
            { text: 'いっぴ', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'ひとひ', isCorrect: false, reason: '這不是日期的讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「一日」作為日期（1號）讀「ついたち」，這是特殊讀法。', trapExplanation: '這是陷阱題，「一日」有多種讀法，日期用「ついたち」。', relatedRules: ['日期的特殊讀法', '一日=ついたち'] },
        sourceItem: { value: 1, kanji: '一日', reading: 'ついたち' }
    },
    {
        id: 'num_basic_extra_7', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「二日」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「二日」的正確讀音是？',
        options: [
            { text: 'にち', isCorrect: false, reason: '不完整。' },
            { text: 'ふつか', isCorrect: true, reason: '正確！「二日」（2號）讀「ふつか」。' },
            { text: 'ににち', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'ふたひ', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「二日」（2號）讀「ふつか」，這是日期的特殊讀法。', relatedRules: ['日期的特殊讀法', '二日=ふつか'] },
        sourceItem: { value: 2, kanji: '二日', reading: 'ふつか' }
    },
    {
        id: 'num_basic_extra_8', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '今日は＿＿です。（三日）', stem_zh: '今天是3號。',
        options: [
            { text: 'さんにち', isCorrect: false, reason: '日期有特殊讀法。' },
            { text: 'みっか', isCorrect: true, reason: '正確！「三日」（3號）讀「みっか」。' },
            { text: 'みか', isCorrect: false, reason: '需要促音。' },
            { text: 'さんか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三日」（3號）讀「みっか」，有促音。', relatedRules: ['日期的特殊讀法', '三日=みっか'] },
        sourceItem: { value: 3, kanji: '三日', reading: 'みっか' }
    },
    {
        id: 'num_basic_extra_9', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '日期詢問', stem_zh: '日期詢問',
        dialogue: { speakerA: '誕生日はいつですか？', speakerB: '＿＿です。（四日）' },
        options: [
            { text: 'よんにち', isCorrect: false, reason: '日期有特殊讀法。' },
            { text: 'よっか', isCorrect: true, reason: '正確！「四日」（4號）讀「よっか」。' },
            { text: 'しにち', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'よか', isCorrect: false, reason: '需要促音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「四日」（4號）讀「よっか」，有促音。', relatedRules: ['日期的特殊讀法', '四日=よっか'] },
        sourceItem: { value: 4, kanji: '四日', reading: 'よっか' }
    },
    {
        id: 'num_basic_extra_10', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「五日」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「五日」的正確讀音是？',
        options: [
            { text: 'ごにち', isCorrect: false, reason: '日期有特殊讀法。' },
            { text: 'いつか', isCorrect: true, reason: '正確！「五日」（5號）讀「いつか」。' },
            { text: 'ごか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'いっか', isCorrect: false, reason: '這是「一家」的讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「五日」（5號）讀「いつか」。', relatedRules: ['日期的特殊讀法', '五日=いつか'] },
        sourceItem: { value: 5, kanji: '五日', reading: 'いつか' }
    },
    {
        id: 'num_basic_extra_11', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '会議は＿＿にあります。（六日）', stem_zh: '會議在6號舉行。',
        options: [
            { text: 'ろくにち', isCorrect: false, reason: '日期有特殊讀法。' },
            { text: 'むいか', isCorrect: true, reason: '正確！「六日」（6號）讀「むいか」。' },
            { text: 'むっか', isCorrect: false, reason: '不需要促音。' },
            { text: 'ろっか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「六日」（6號）讀「むいか」。', relatedRules: ['日期的特殊讀法', '六日=むいか'] },
        sourceItem: { value: 6, kanji: '六日', reading: 'むいか' }
    },
    {
        id: 'num_basic_extra_12', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '日期詢問', stem_zh: '日期詢問',
        dialogue: { speakerA: 'テストはいつですか？', speakerB: '＿＿です。（七日）' },
        options: [
            { text: 'しちにち', isCorrect: false, reason: '日期有特殊讀法。' },
            { text: 'なのか', isCorrect: true, reason: '正確！「七日」（7號）讀「なのか」。' },
            { text: 'ななか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'なぬか', isCorrect: false, reason: '古語讀法，現代用「なのか」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「七日」（7號）讀「なのか」。', relatedRules: ['日期的特殊讀法', '七日=なのか'] },
        sourceItem: { value: 7, kanji: '七日', reading: 'なのか' }
    },
    {
        id: 'num_basic_extra_13', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「八日」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「八日」的正確讀音是？',
        options: [
            { text: 'はちにち', isCorrect: false, reason: '日期有特殊讀法。' },
            { text: 'ようか', isCorrect: true, reason: '正確！「八日」（8號）讀「ようか」。' },
            { text: 'やっか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'はっか', isCorrect: false, reason: '這是「発火」等詞的讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八日」（8號）讀「ようか」。', relatedRules: ['日期的特殊讀法', '八日=ようか'] },
        sourceItem: { value: 8, kanji: '八日', reading: 'ようか' }
    },
    {
        id: 'num_basic_extra_14', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '旅行は＿＿からです。（九日）', stem_zh: '旅行從9號開始。',
        options: [
            { text: 'きゅうにち', isCorrect: false, reason: '日期有特殊讀法。' },
            { text: 'ここのか', isCorrect: true, reason: '正確！「九日」（9號）讀「ここのか」。' },
            { text: 'くにち', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'ここか', isCorrect: false, reason: '需要「の」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「九日」（9號）讀「ここのか」。', relatedRules: ['日期的特殊讀法', '九日=ここのか'] },
        sourceItem: { value: 9, kanji: '九日', reading: 'ここのか' }
    },
    {
        id: 'num_basic_extra_15', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '日期詢問', stem_zh: '日期詢問',
        dialogue: { speakerA: '締め切りはいつですか？', speakerB: '＿＿です。（十日）' },
        options: [
            { text: 'じゅうにち', isCorrect: false, reason: '日期有特殊讀法。' },
            { text: 'とおか', isCorrect: true, reason: '正確！「十日」（10號）讀「とおか」。' },
            { text: 'じゅっか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'とうか', isCorrect: false, reason: '長音位置錯誤。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「十日」（10號）讀「とおか」。', relatedRules: ['日期的特殊讀法', '十日=とおか'] },
        sourceItem: { value: 10, kanji: '十日', reading: 'とおか' }
    },
    {
        id: 'num_basic_extra_16', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: true,
        stem: '以下哪組日期讀法都正確？', stem_zh: '以下哪組日期讀法都正確？',
        options: [
            { text: 'ついたち、ふつか、みっか', isCorrect: true, reason: '正確！1日、2日、3日的讀法。' },
            { text: 'いちにち、ににち、さんにち', isCorrect: false, reason: '錯誤，日期有特殊讀法。' },
            { text: 'ひとか、ふたか、みか', isCorrect: false, reason: '這些都不是正確讀法。' },
            { text: 'いっか、にっか、さんか', isCorrect: false, reason: '這些都不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '日期1-10日有特殊讀法，需要特別記憶。', trapExplanation: '這是陷阱題，測試日期讀法的掌握程度。', relatedRules: ['日期的特殊讀法'] },
        sourceItem: { value: 0, kanji: '日期', reading: '特殊讀法' }
    },
    {
        id: 'num_basic_extra_17', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: true,
        stem: '私は車を＿＿持っています。（一台）', stem_zh: '我有一台車。',
        options: [
            { text: 'いちだい', isCorrect: true, reason: '正確！「一台」讀「いちだい」，「台」濁音化。' },
            { text: 'いったい', isCorrect: false, reason: '「いったい」是「一体」的讀法。' },
            { text: 'ひとだい', isCorrect: false, reason: '「台」量詞用音讀。' },
            { text: 'いちたい', isCorrect: false, reason: '需要濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「台」量詞在撥音後濁音化，「一台」讀「いちだい」。', relatedRules: ['量詞的濁音化', '台的讀法'] },
        sourceItem: { value: 1, kanji: '一台', reading: 'いちだい' }
    },
    {
        id: 'num_basic_extra_18', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '年齡詢問', stem_zh: '年齡詢問',
        dialogue: { speakerA: 'おいくつですか？', speakerB: '＿＿です。（三歳）' },
        options: [
            { text: 'みっさい', isCorrect: false, reason: '「歳」不促音化。' },
            { text: 'さんさい', isCorrect: true, reason: '正確！「三歳」讀「さんさい」。' },
            { text: 'みつさい', isCorrect: false, reason: '年齡用音讀。' },
            { text: 'さんざい', isCorrect: false, reason: '不需要濁音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '年齡使用音讀，「三歳」讀「さんさい」。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 3, kanji: '三歳', reading: 'さんさい' }
    },
    {
        id: 'num_basic_extra_19', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「四歳」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「四歳」的正確讀音是？',
        options: [
            { text: 'しさい', isCorrect: false, reason: '年齡中「四」通常讀「よん」。' },
            { text: 'よんさい', isCorrect: true, reason: '正確！「四歳」讀「よんさい」。' },
            { text: 'よっさい', isCorrect: false, reason: '不需要促音。' },
            { text: 'よさい', isCorrect: false, reason: '缺少「ん」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '年齡中「四」讀「よん」，「四歳」讀「よんさい」。', relatedRules: ['年齡的讀法', '四=よん'] },
        sourceItem: { value: 4, kanji: '四歳', reading: 'よんさい' }
    },
    {
        id: 'num_basic_extra_20', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '彼女は＿＿です。（七歳）', stem_zh: '她七歲。',
        options: [
            { text: 'しちさい', isCorrect: false, reason: '年齡中「七」通常讀「なな」。' },
            { text: 'ななさい', isCorrect: true, reason: '正確！「七歳」讀「ななさい」。' },
            { text: 'ななっさい', isCorrect: false, reason: '不需要促音。' },
            { text: 'なのさい', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '年齡中「七」讀「なな」，「七歳」讀「ななさい」。', relatedRules: ['年齡的讀法', '七=なな'] },
        sourceItem: { value: 7, kanji: '七歳', reading: 'ななさい' }
    },
    {
        id: 'num_basic_extra_21', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: true,
        stem: '年齡詢問', stem_zh: '年齡詢問',
        dialogue: { speakerA: '弟は何歳ですか？', speakerB: '＿＿です。（九歳）' },
        options: [
            { text: 'くさい', isCorrect: false, reason: '陷阱！年齡中「九」讀「きゅう」。' },
            { text: 'きゅうさい', isCorrect: true, reason: '正確！「九歳」讀「きゅうさい」。' },
            { text: 'ここのさい', isCorrect: false, reason: '年齡不用訓讀。' },
            { text: 'きゅっさい', isCorrect: false, reason: '不需要促音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '年齡中「九」讀「きゅう」，「九歳」讀「きゅうさい」。', trapExplanation: '注意年齡用「きゅう」，但九時、九月用「く」。', relatedRules: ['年齡的讀法', '九=きゅう'] },
        sourceItem: { value: 9, kanji: '九歳', reading: 'きゅうさい' }
    },
    {
        id: 'num_basic_extra_22', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: true,
        stem: '「十歳」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「十歳」的正確讀音是？',
        options: [
            { text: 'じゅうさい', isCorrect: true, reason: '正確！「十歳」讀「じゅうさい」或「じゅっさい」。' },
            { text: 'とおさい', isCorrect: false, reason: '年齡不用訓讀「とお」。' },
            { text: 'じっさい', isCorrect: false, reason: '「じっさい」是「実際」的讀法。' },
            { text: 'とさい', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十歳」讀「じゅうさい」或「じゅっさい」都可以。', relatedRules: ['年齡的讀法', '十=じゅう'] },
        sourceItem: { value: 10, kanji: '十歳', reading: 'じゅうさい' }
    },
    {
        id: 'num_basic_extra_23', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: 'りんごを＿＿ください。（一個）', stem_zh: '請給我一個蘋果。',
        options: [
            { text: 'いっこ', isCorrect: true, reason: '正確！「一個」讀「いっこ」，有促音。' },
            { text: 'いちこ', isCorrect: false, reason: '需要促音化。' },
            { text: 'ひとこ', isCorrect: false, reason: '「個」量詞用音讀。' },
            { text: 'いちご', isCorrect: false, reason: '「いちご」是草莓的意思。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「一個」讀「いっこ」，「一」在「個」前促音化。', relatedRules: ['促音化規則', '一＋個=いっこ'] },
        sourceItem: { value: 1, kanji: '一個', reading: 'いっこ' }
    },
    {
        id: 'num_basic_extra_24', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '購物', stem_zh: '購物',
        dialogue: { speakerA: 'みかんをいくつですか？', speakerB: '＿＿ください。（六個）' },
        options: [
            { text: 'ろくこ', isCorrect: false, reason: '需要促音和半濁音。' },
            { text: 'ろっこ', isCorrect: true, reason: '正確！「六個」讀「ろっこ」。' },
            { text: 'むっこ', isCorrect: false, reason: '「個」量詞用音讀數字。' },
            { text: 'ろくご', isCorrect: false, reason: '「個」不讀「ご」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「六個」讀「ろっこ」，「六」在「個」前促音化。', relatedRules: ['促音化規則', '六＋個=ろっこ'] },
        sourceItem: { value: 6, kanji: '六個', reading: 'ろっこ' }
    },
    {
        id: 'num_basic_extra_25', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「八個」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「八個」的正確讀音是？',
        options: [
            { text: 'はちこ', isCorrect: false, reason: '需要促音化。' },
            { text: 'はっこ', isCorrect: true, reason: '正確！「八個」讀「はっこ」。' },
            { text: 'やっこ', isCorrect: false, reason: '「個」量詞用音讀數字。' },
            { text: 'はちご', isCorrect: false, reason: '「個」不讀「ご」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八個」讀「はっこ」，「八」在「個」前促音化。', relatedRules: ['促音化規則', '八＋個=はっこ'] },
        sourceItem: { value: 8, kanji: '八個', reading: 'はっこ' }
    },
    {
        id: 'num_basic_extra_26', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: 'ペンを＿＿持っています。（十個）', stem_zh: '我有十支筆。',
        options: [
            { text: 'じゅうこ', isCorrect: false, reason: '需要促音化。' },
            { text: 'じゅっこ', isCorrect: true, reason: '正確！「十個」讀「じゅっこ」。' },
            { text: 'とおこ', isCorrect: false, reason: '「個」量詞用音讀數字。' },
            { text: 'じっこ', isCorrect: false, reason: '這是舊讀法，現代用「じゅっこ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「十個」讀「じゅっこ」，「十」在「個」前促音化。', relatedRules: ['促音化規則', '十＋個=じゅっこ'] },
        sourceItem: { value: 10, kanji: '十個', reading: 'じゅっこ' }
    },
    {
        id: 'num_basic_extra_27', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: true,
        stem: '時間詢問', stem_zh: '時間詢問',
        dialogue: { speakerA: '何時に起きますか？', speakerB: '＿＿に起きます。（六時）' },
        options: [
            { text: 'ろくじ', isCorrect: true, reason: '正確！「六時」讀「ろくじ」。' },
            { text: 'ろっじ', isCorrect: false, reason: '「時」前不促音化。' },
            { text: 'むじ', isCorrect: false, reason: '時間用音讀數字。' },
            { text: 'りくじ', isCorrect: false, reason: '「六」不讀「りく」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六時」讀「ろくじ」，「時」前不促音化。', trapExplanation: '注意「六」在不同量詞前的音變不同。', relatedRules: ['時間的讀法', '六時=ろくじ'] },
        sourceItem: { value: 6, kanji: '六時', reading: 'ろくじ' }
    },
    {
        id: 'num_basic_extra_28', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「八時」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「八時」的正確讀音是？',
        options: [
            { text: 'はっじ', isCorrect: false, reason: '「時」前不促音化。' },
            { text: 'はちじ', isCorrect: true, reason: '正確！「八時」讀「はちじ」。' },
            { text: 'やじ', isCorrect: false, reason: '時間用音讀數字。' },
            { text: 'はちし', isCorrect: false, reason: '「時」不讀「し」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八時」讀「はちじ」，「時」前不促音化。', relatedRules: ['時間的讀法', '八時=はちじ'] },
        sourceItem: { value: 8, kanji: '八時', reading: 'はちじ' }
    },
    {
        id: 'num_basic_extra_29', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '授業は＿＿に始まります。（十時）', stem_zh: '課堂十點開始。',
        options: [
            { text: 'じゅっじ', isCorrect: false, reason: '「時」前不促音化。' },
            { text: 'じゅうじ', isCorrect: true, reason: '正確！「十時」讀「じゅうじ」。' },
            { text: 'とおじ', isCorrect: false, reason: '時間用音讀數字。' },
            { text: 'じっじ', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「十時」讀「じゅうじ」，「時」前不促音化。', relatedRules: ['時間的讀法', '十時=じゅうじ'] },
        sourceItem: { value: 10, kanji: '十時', reading: 'じゅうじ' }
    },
    {
        id: 'num_basic_extra_30', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: true,
        stem: '分鐘詢問', stem_zh: '分鐘詢問',
        dialogue: { speakerA: '何分かかりますか？', speakerB: '＿＿かかります。（一分）' },
        options: [
            { text: 'いちふん', isCorrect: false, reason: '陷阱！「一分」讀「いっぷん」。' },
            { text: 'いっぷん', isCorrect: true, reason: '正確！「一分」讀「いっぷん」。' },
            { text: 'いちぶん', isCorrect: false, reason: '「ぶん」是「部分」等詞的讀法。' },
            { text: 'ひとふん', isCorrect: false, reason: '「分」量詞用音讀數字。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「一分」讀「いっぷん」，「分」前促音化且半濁音化。', trapExplanation: '「分」的讀法較複雜，需要特別記憶。', relatedRules: ['分的讀法', '一分=いっぷん'] },
        sourceItem: { value: 1, kanji: '一分', reading: 'いっぷん' }
    },
    {
        id: 'num_basic_extra_31', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「三分」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「三分」的正確讀音是？',
        options: [
            { text: 'さんふん', isCorrect: false, reason: '「分」在撥音後讀「ぷん」。' },
            { text: 'さんぷん', isCorrect: true, reason: '正確！「三分」讀「さんぷん」。' },
            { text: 'みっぷん', isCorrect: false, reason: '「分」量詞用音讀數字。' },
            { text: 'さんぶん', isCorrect: false, reason: '「ぶん」是「部分」等詞的讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三分」讀「さんぷん」，撥音後「分」讀「ぷん」。', relatedRules: ['分的讀法', '三分=さんぷん'] },
        sourceItem: { value: 3, kanji: '三分', reading: 'さんぷん' }
    },
    {
        id: 'num_basic_extra_32', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '駅まで＿＿です。（五分）', stem_zh: '到車站五分鐘。',
        options: [
            { text: 'ごふん', isCorrect: true, reason: '正確！「五分」讀「ごふん」。' },
            { text: 'ごぷん', isCorrect: false, reason: '「五」後不半濁音化。' },
            { text: 'いつふん', isCorrect: false, reason: '「分」量詞用音讀數字。' },
            { text: 'ごぶん', isCorrect: false, reason: '「ぶん」是「部分」等詞的讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五分」讀「ごふん」，「五」後保持原音。', relatedRules: ['分的讀法', '五分=ごふん'] },
        sourceItem: { value: 5, kanji: '五分', reading: 'ごふん' }
    },
    {
        id: 'num_basic_extra_33', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '時間詢問', stem_zh: '時間詢問',
        dialogue: { speakerA: 'あと何分ですか？', speakerB: '＿＿です。（六分）' },
        options: [
            { text: 'ろくふん', isCorrect: false, reason: '「六」後促音化且半濁音化。' },
            { text: 'ろっぷん', isCorrect: true, reason: '正確！「六分」讀「ろっぷん」。' },
            { text: 'むっぷん', isCorrect: false, reason: '「分」量詞用音讀數字。' },
            { text: 'ろくぶん', isCorrect: false, reason: '「ぶん」是「部分」等詞的讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「六分」讀「ろっぷん」，「六」後促音化且半濁音化。', relatedRules: ['分的讀法', '六分=ろっぷん'] },
        sourceItem: { value: 6, kanji: '六分', reading: 'ろっぷん' }
    },
    {
        id: 'num_basic_extra_34', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「八分」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「八分」的正確讀音是？',
        options: [
            { text: 'はちふん', isCorrect: false, reason: '「八」後促音化且半濁音化。' },
            { text: 'はっぷん', isCorrect: true, reason: '正確！「八分」讀「はっぷん」。' },
            { text: 'やっぷん', isCorrect: false, reason: '「分」量詞用音讀數字。' },
            { text: 'はちぶん', isCorrect: false, reason: '「ぶん」是「部分」等詞的讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「八分」讀「はっぷん」，「八」後促音化且半濁音化。', relatedRules: ['分的讀法', '八分=はっぷん'] },
        sourceItem: { value: 8, kanji: '八分', reading: 'はっぷん' }
    },
    {
        id: 'num_basic_extra_35', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '会議は＿＿後に始まります。（十分）', stem_zh: '會議十分鐘後開始。',
        options: [
            { text: 'じゅうふん', isCorrect: false, reason: '「十」後促音化且半濁音化。' },
            { text: 'じゅっぷん', isCorrect: true, reason: '正確！「十分」讀「じゅっぷん」。' },
            { text: 'とおふん', isCorrect: false, reason: '「分」量詞用音讀數字。' },
            { text: 'じっぷん', isCorrect: false, reason: '這是舊讀法，現代用「じゅっぷん」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「十分」讀「じゅっぷん」，「十」後促音化且半濁音化。', relatedRules: ['分的讀法', '十分=じゅっぷん'] },
        sourceItem: { value: 10, kanji: '十分', reading: 'じゅっぷん' }
    },

    // ===== 比較題與陷阱題 =====
    {
        id: 'num_basic_compare_1', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: true,
        stem: '以下哪組「四」的讀法都正確？', stem_zh: '以下哪組「四」的讀法都正確？',
        options: [
            { text: '四月(しがつ)、四時(よじ)、四歳(よんさい)', isCorrect: true, reason: '正確！月份用「し」，時間用「よ」，年齡用「よん」。' },
            { text: '四月(よんがつ)、四時(しじ)、四歳(しさい)', isCorrect: false, reason: '錯誤，各場景讀法不同。' },
            { text: '全部讀「よん」', isCorrect: false, reason: '錯誤，不同場景有不同讀法。' },
            { text: '全部讀「し」', isCorrect: false, reason: '錯誤，避諱「死」，很多場景用「よん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四」在不同場景讀法不同：月份(し)、時間(よ)、年齡(よん)。', trapExplanation: '這是陷阱題，需要記憶各場景的固定讀法。', relatedRules: ['四的讀法分類'] },
        sourceItem: { value: 4, kanji: '四', reading: '場景讀法' }
    },
    {
        id: 'num_basic_compare_2', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: true,
        stem: '以下哪組「七」的讀法都正確？', stem_zh: '以下哪組「七」的讀法都正確？',
        options: [
            { text: '七月(しちがつ)、七時(しちじ)、七歳(ななさい)', isCorrect: true, reason: '正確！月份和時間用「しち」，年齡用「なな」。' },
            { text: '七月(なながつ)、七時(ななじ)、七歳(しちさい)', isCorrect: false, reason: '錯誤，各場景讀法不同。' },
            { text: '全部讀「なな」', isCorrect: false, reason: '錯誤，月份和時間用「しち」。' },
            { text: '全部讀「しち」', isCorrect: false, reason: '錯誤，年齡用「なな」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七」在不同場景讀法不同：月份(しち)、時間(しち)、年齡(なな)。', trapExplanation: '這是陷阱題，需要記憶各場景的固定讀法。', relatedRules: ['七的讀法分類'] },
        sourceItem: { value: 7, kanji: '七', reading: '場景讀法' }
    },
    {
        id: 'num_basic_compare_3', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: true,
        stem: '以下哪組「九」的讀法都正確？', stem_zh: '以下哪組「九」的讀法都正確？',
        options: [
            { text: '九月(くがつ)、九時(くじ)、九歳(きゅうさい)', isCorrect: true, reason: '正確！月份和時間用「く」，年齡用「きゅう」。' },
            { text: '九月(きゅうがつ)、九時(きゅうじ)、九歳(くさい)', isCorrect: false, reason: '錯誤，各場景讀法不同。' },
            { text: '全部讀「きゅう」', isCorrect: false, reason: '錯誤，月份和時間用「く」。' },
            { text: '全部讀「く」', isCorrect: false, reason: '錯誤，年齡用「きゅう」避諱「苦」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九」在不同場景讀法不同：月份(く)、時間(く)、年齡(きゅう)。', trapExplanation: '這是陷阱題，需要記憶各場景的固定讀法。', relatedRules: ['九的讀法分類'] },
        sourceItem: { value: 9, kanji: '九', reading: '場景讀法' }
    },
    {
        id: 'num_basic_compare_4', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: true,
        stem: '以下哪組日期讀法錯誤？', stem_zh: '以下哪組日期讀法錯誤？',
        options: [
            { text: '一日(いちにち)、二日(ににち)、三日(さんにち)', isCorrect: true, reason: '這是錯誤的！正確是：ついたち、ふつか、みっか。' },
            { text: '四日(よっか)、五日(いつか)、六日(むいか)', isCorrect: false, reason: '這些都是正確的讀法。' },
            { text: '七日(なのか)、八日(ようか)、九日(ここのか)', isCorrect: false, reason: '這些都是正確的讀法。' },
            { text: '十日(とおか)', isCorrect: false, reason: '這是正確的讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '1-10日有特殊讀法，不能用音讀。', trapExplanation: '這是陷阱題，測試日期特殊讀法。', relatedRules: ['日期的特殊讀法'] },
        sourceItem: { value: 0, kanji: '日期', reading: '特殊讀法' }
    },
    {
        id: 'num_basic_compare_5', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「本」量詞的音變規則是？', stem_zh: '「本」量詞的音變規則是？',
        options: [
            { text: '1/6/8/10促音+半濁音，3濁音', isCorrect: true, reason: '正確！1/6/8/10→っぽん，3→ぼん。' },
            { text: '所有數字都促音化', isCorrect: false, reason: '錯誤，只有特定數字促音化。' },
            { text: '所有數字都濁音化', isCorrect: false, reason: '錯誤，只有3濁音化。' },
            { text: '沒有音變', isCorrect: false, reason: '錯誤，「本」有複雜的音變規則。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「本」量詞：1/6/8/10→っぽん，3→ぼん，其他→ほん。', relatedRules: ['本的音變規則'] },
        sourceItem: { value: 0, kanji: '〜本', reading: '音變規則' }
    },
    {
        id: 'num_basic_compare_6', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「分」量詞的音變規則是？', stem_zh: '「分」量詞的音變規則是？',
        options: [
            { text: '1/6/8/10促音+半濁音，3撥音+半濁音', isCorrect: true, reason: '正確！1/6/8/10→っぷん，3→んぷん，其他→ふん。' },
            { text: '所有數字都讀「ふん」', isCorrect: false, reason: '錯誤，有複雜的音變規則。' },
            { text: '所有數字都讀「ぷん」', isCorrect: false, reason: '錯誤，只有特定數字半濁音化。' },
            { text: '所有數字都讀「ぶん」', isCorrect: false, reason: '錯誤，「ぶん」是「部分」等詞的讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「分」量詞：1/6/8/10→っぷん，3→んぷん，2/5/7/9→ふん，4→ぷん。', relatedRules: ['分的音變規則'] },
        sourceItem: { value: 0, kanji: '〜分', reading: '音變規則' }
    },

    // ===== 綜合複習題 =====
    {
        id: 'num_basic_review_1', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '0-10的音讀正確順序是？', stem_zh: '0-10的音讀正確順序是？',
        options: [
            { text: 'ゼロ/れい、いち、に、さん、し/よん、ご、ろく、しち/なな、はち、きゅう/く、じゅう', isCorrect: true, reason: '正確！這是0-10的完整音讀。' },
            { text: 'ゼロ、ひと、ふた、み、よ、いつ、む、なな、や、ここの、とお', isCorrect: false, reason: '這是訓讀系統。' },
            { text: '全部用訓讀', isCorrect: false, reason: '錯誤，音讀和訓讀都有。' },
            { text: '全部用音讀，無變體', isCorrect: false, reason: '錯誤，4/7/9有兩種讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '0-10的音讀需要記住雙讀法：4(し/よん)、7(しち/なな)、9(きゅう/く)。', relatedRules: ['基本數字的音讀'] },
        sourceItem: { value: 0, kanji: '0-10', reading: '音讀' }
    },
    {
        id: 'num_basic_review_2', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「つ」の数{かぞ}え方{かた}（1〜10）の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「つ」量詞1-10的正確讀法是？',
        options: [
            { text: 'ひとつ、ふたつ、みっつ、よっつ、いつつ、むっつ、ななつ、やっつ、ここのつ、とお', isCorrect: true, reason: '正確！這是「つ」量詞的完整讀法。' },
            { text: '全部加「つ」', isCorrect: false, reason: '錯誤，10沒有「つ」。' },
            { text: '用音讀+つ', isCorrect: false, reason: '錯誤，「つ」量詞用訓讀。' },
            { text: '沒有促音', isCorrect: false, reason: '錯誤，3/4/6/8有促音。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「つ」量詞使用訓讀，3/4/6/8有促音，10沒有「つ」。', relatedRules: ['つ量詞的讀法'] },
        sourceItem: { value: 0, kanji: '〜つ', reading: '訓讀' }
    },
    {
        id: 'num_basic_review_3', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: true,
        stem: '以下哪個說法是正確的？', stem_zh: '以下哪個說法是正確的？',
        options: [
            { text: '日語數字有音讀和訓讀兩套系統，不同場景使用不同讀法', isCorrect: true, reason: '正確！這是日語數字的基本特點。' },
            { text: '日語數字只有一種讀法', isCorrect: false, reason: '錯誤，有音讀和訓讀。' },
            { text: '所有數字在所有場景讀法都一樣', isCorrect: false, reason: '錯誤，不同場景讀法不同。' },
            { text: '音讀和訓讀可以隨意互換', isCorrect: false, reason: '錯誤，有固定規則。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '日語數字系統複雜，需要根據場景選擇正確的讀法。', relatedRules: ['數字系統概述'] },
        sourceItem: { value: 0, kanji: '數字系統', reading: '總結' }
    },

    // ===== 追加題目：更多應用場景 =====
    {
        id: 'num_basic_extra_36', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '購物', stem_zh: '購物',
        dialogue: { speakerA: 'これはいくらですか？', speakerB: '＿＿円です。（五百）' },
        options: [
            { text: 'ごひゃく', isCorrect: true, reason: '正確！「五百」讀「ごひゃく」。' },
            { text: 'ごびゃく', isCorrect: false, reason: '「五」後不需要濁音化。' },
            { text: 'いつひゃく', isCorrect: false, reason: '「百」用音讀數字。' },
            { text: 'ごっぴゃく', isCorrect: false, reason: '「五」後不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五百」讀「ごひゃく」，「五」後保持原音。', relatedRules: ['百的讀法', '五百=ごひゃく'] },
        sourceItem: { value: 500, kanji: '五百', reading: 'ごひゃく' }
    },
    {
        id: 'num_basic_extra_37', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: true,
        stem: '「二人」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「二人」的正確讀音是？',
        options: [
            { text: 'ににん', isCorrect: false, reason: '陷阱！「二人」是特殊讀法。' },
            { text: 'ふたり', isCorrect: true, reason: '正確！「二人」讀「ふたり」。' },
            { text: 'にじん', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'ふたにん', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「二人」是特殊讀法，讀「ふたり」，與「一人」(ひとり)相同是訓讀。', trapExplanation: '「一人」「二人」是特殊讀法，三人以上用音讀。', relatedRules: ['人數的特殊讀法', '二人=ふたり'] },
        sourceItem: { value: 2, kanji: '二人', reading: 'ふたり' }
    },
    {
        id: 'num_basic_extra_38', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '会議室に＿＿います。（三人）', stem_zh: '會議室有三個人。',
        options: [
            { text: 'みたり', isCorrect: false, reason: '三人以上用音讀。' },
            { text: 'さんにん', isCorrect: true, reason: '正確！「三人」讀「さんにん」。' },
            { text: 'みっにん', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'さんじん', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三人」及以上用音讀，讀「さんにん」。', relatedRules: ['人數的讀法', '三人=さんにん'] },
        sourceItem: { value: 3, kanji: '三人', reading: 'さんにん' }
    },
    {
        id: 'num_basic_extra_39', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: true,
        stem: '人數詢問', stem_zh: '人數詢問',
        dialogue: { speakerA: '家族は何人ですか？', speakerB: '＿＿です。（四人）' },
        options: [
            { text: 'しにん', isCorrect: false, reason: '陷阱！「四人」的「四」讀「よ」。' },
            { text: 'よにん', isCorrect: true, reason: '正確！「四人」讀「よにん」。' },
            { text: 'よんにん', isCorrect: false, reason: '「四人」中「四」讀「よ」不是「よん」。' },
            { text: 'よったり', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「四人」讀「よにん」，「四」在人數中讀「よ」。', trapExplanation: '「四人」的「四」特殊讀法是「よ」。', relatedRules: ['人數的讀法', '四人=よにん'] },
        sourceItem: { value: 4, kanji: '四人', reading: 'よにん' }
    },
    {
        id: 'num_basic_extra_40', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「七人」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「七人」的正確讀音是？',
        options: [
            { text: 'ななにん', isCorrect: false, reason: '「七人」的「七」讀「しち」。' },
            { text: 'しちにん', isCorrect: true, reason: '正確！「七人」讀「しちにん」。' },
            { text: 'ななり', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'なのにん', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「七人」讀「しちにん」，人數中「七」讀「しち」。', relatedRules: ['人數的讀法', '七人=しちにん'] },
        sourceItem: { value: 7, kanji: '七人', reading: 'しちにん' }
    },
    {
        id: 'num_basic_extra_41', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: 'クラスには＿＿います。（十人）', stem_zh: '班上有十個人。',
        options: [
            { text: 'とおにん', isCorrect: false, reason: '人數用音讀。' },
            { text: 'じゅうにん', isCorrect: true, reason: '正確！「十人」讀「じゅうにん」。' },
            { text: 'じゅっにん', isCorrect: false, reason: '「人」前不促音化。' },
            { text: 'とにん', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「十人」讀「じゅうにん」，「人」前不促音化。', relatedRules: ['人數的讀法', '十人=じゅうにん'] },
        sourceItem: { value: 10, kanji: '十人', reading: 'じゅうにん' }
    },
    {
        id: 'num_basic_extra_42', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '月份詢問', stem_zh: '月份詢問',
        dialogue: { speakerA: '誕生日は何月ですか？', speakerB: '＿＿です。（一月）' },
        options: [
            { text: 'いちがつ', isCorrect: true, reason: '正確！「一月」讀「いちがつ」。' },
            { text: 'ひとがつ', isCorrect: false, reason: '月份用音讀。' },
            { text: 'いちげつ', isCorrect: false, reason: '「月」在月份中讀「がつ」。' },
            { text: 'いっがつ', isCorrect: false, reason: '「月」前不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「一月」讀「いちがつ」，月份中「月」讀「がつ」。', relatedRules: ['月份的讀法', '一月=いちがつ'] },
        sourceItem: { value: 1, kanji: '一月', reading: 'いちがつ' }
    },
    {
        id: 'num_basic_extra_43', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「二月」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「二月」的正確讀音是？',
        options: [
            { text: 'にがつ', isCorrect: true, reason: '正確！「二月」讀「にがつ」。' },
            { text: 'ふたがつ', isCorrect: false, reason: '月份用音讀。' },
            { text: 'にげつ', isCorrect: false, reason: '「月」在月份中讀「がつ」。' },
            { text: 'じがつ', isCorrect: false, reason: '「二」不讀「じ」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二月」讀「にがつ」。', relatedRules: ['月份的讀法', '二月=にがつ'] },
        sourceItem: { value: 2, kanji: '二月', reading: 'にがつ' }
    },
    {
        id: 'num_basic_extra_44', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '入学式は＿＿にあります。（三月）', stem_zh: '入學典禮在三月。',
        options: [
            { text: 'みがつ', isCorrect: false, reason: '月份用音讀。' },
            { text: 'さんがつ', isCorrect: true, reason: '正確！「三月」讀「さんがつ」。' },
            { text: 'さんげつ', isCorrect: false, reason: '「月」在月份中讀「がつ」。' },
            { text: 'みっがつ', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三月」讀「さんがつ」。', relatedRules: ['月份的讀法', '三月=さんがつ'] },
        sourceItem: { value: 3, kanji: '三月', reading: 'さんがつ' }
    },
    {
        id: 'num_basic_extra_45', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: true,
        stem: '月份詢問', stem_zh: '月份詢問',
        dialogue: { speakerA: '今は何月ですか？', speakerB: '＿＿です。（四月）' },
        options: [
            { text: 'よんがつ', isCorrect: false, reason: '陷阱！月份中「四」讀「し」。' },
            { text: 'しがつ', isCorrect: true, reason: '正確！「四月」讀「しがつ」。' },
            { text: 'よがつ', isCorrect: false, reason: '月份中「四」讀「し」不是「よ」。' },
            { text: 'しげつ', isCorrect: false, reason: '「月」在月份中讀「がつ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「四月」讀「しがつ」，月份中「四」讀「し」。', trapExplanation: '注意月份中「四」讀「し」，與年齡「よん」不同。', relatedRules: ['月份的讀法', '四月=しがつ'] },
        sourceItem: { value: 4, kanji: '四月', reading: 'しがつ' }
    },
    {
        id: 'num_basic_extra_46', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「五月」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「五月」的正確讀音是？',
        options: [
            { text: 'ごがつ', isCorrect: true, reason: '正確！「五月」讀「ごがつ」。' },
            { text: 'いつがつ', isCorrect: false, reason: '月份用音讀。' },
            { text: 'ごげつ', isCorrect: false, reason: '「月」在月份中讀「がつ」。' },
            { text: 'さつきがつ', isCorrect: false, reason: '「皐月」是五月的別稱，但讀法不同。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五月」讀「ごがつ」。', relatedRules: ['月份的讀法', '五月=ごがつ'] },
        sourceItem: { value: 5, kanji: '五月', reading: 'ごがつ' }
    },
    {
        id: 'num_basic_extra_47', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '休暇は＿＿からです。（六月）', stem_zh: '假期從六月開始。',
        options: [
            { text: 'むいがつ', isCorrect: false, reason: '月份用音讀。' },
            { text: 'ろくがつ', isCorrect: true, reason: '正確！「六月」讀「ろくがつ」。' },
            { text: 'ろくげつ', isCorrect: false, reason: '「月」在月份中讀「がつ」。' },
            { text: 'ろっがつ', isCorrect: false, reason: '「月」前不促音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「六月」讀「ろくがつ」。', relatedRules: ['月份的讀法', '六月=ろくがつ'] },
        sourceItem: { value: 6, kanji: '六月', reading: 'ろくがつ' }
    },
    {
        id: 'num_basic_extra_48', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: true,
        stem: '月份詢問', stem_zh: '月份詢問',
        dialogue: { speakerA: '夏休みは何月ですか？', speakerB: '＿＿です。（七月）' },
        options: [
            { text: 'なながつ', isCorrect: false, reason: '陷阱！月份中「七」讀「しち」。' },
            { text: 'しちがつ', isCorrect: true, reason: '正確！「七月」讀「しちがつ」。' },
            { text: 'なのがつ', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'しちげつ', isCorrect: false, reason: '「月」在月份中讀「がつ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「七月」讀「しちがつ」，月份中「七」讀「しち」。', trapExplanation: '注意月份中「七」讀「しち」，與年齡「なな」不同。', relatedRules: ['月份的讀法', '七月=しちがつ'] },
        sourceItem: { value: 7, kanji: '七月', reading: 'しちがつ' }
    },
    {
        id: 'num_basic_extra_49', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「八月」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「八月」的正確讀音是？',
        options: [
            { text: 'はちがつ', isCorrect: true, reason: '正確！「八月」讀「はちがつ」。' },
            { text: 'やがつ', isCorrect: false, reason: '月份用音讀。' },
            { text: 'はちげつ', isCorrect: false, reason: '「月」在月份中讀「がつ」。' },
            { text: 'はっがつ', isCorrect: false, reason: '「月」前不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八月」讀「はちがつ」。', relatedRules: ['月份的讀法', '八月=はちがつ'] },
        sourceItem: { value: 8, kanji: '八月', reading: 'はちがつ' }
    },
    {
        id: 'num_basic_extra_50', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: true,
        stem: '新学期は＿＿から始まります。（九月）', stem_zh: '新學期從九月開始。',
        options: [
            { text: 'きゅうがつ', isCorrect: false, reason: '陷阱！月份中「九」讀「く」。' },
            { text: 'くがつ', isCorrect: true, reason: '正確！「九月」讀「くがつ」。' },
            { text: 'ここのがつ', isCorrect: false, reason: '月份用音讀。' },
            { text: 'くげつ', isCorrect: false, reason: '「月」在月份中讀「がつ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「九月」讀「くがつ」，月份中「九」讀「く」。', trapExplanation: '注意月份中「九」讀「く」，與年齡「きゅう」不同。', relatedRules: ['月份的讀法', '九月=くがつ'] },
        sourceItem: { value: 9, kanji: '九月', reading: 'くがつ' }
    },
    {
        id: 'num_basic_extra_51', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '月份詢問', stem_zh: '月份詢問',
        dialogue: { speakerA: '紅葉は何月ですか？', speakerB: '＿＿がきれいです。（十月）' },
        options: [
            { text: 'とおがつ', isCorrect: false, reason: '月份用音讀。' },
            { text: 'じゅうがつ', isCorrect: true, reason: '正確！「十月」讀「じゅうがつ」。' },
            { text: 'じゅっがつ', isCorrect: false, reason: '「月」前不促音化。' },
            { text: 'じゅうげつ', isCorrect: false, reason: '「月」在月份中讀「がつ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「十月」讀「じゅうがつ」。', relatedRules: ['月份的讀法', '十月=じゅうがつ'] },
        sourceItem: { value: 10, kanji: '十月', reading: 'じゅうがつ' }
    },
    {
        id: 'num_basic_extra_52', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「一時」（1時{じ}）の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「一時」（1點鐘）的正確讀音是？',
        options: [
            { text: 'いちじ', isCorrect: true, reason: '正確！「一時」讀「いちじ」。' },
            { text: 'ひとじ', isCorrect: false, reason: '時間用音讀。' },
            { text: 'いっじ', isCorrect: false, reason: '「時」前不促音化。' },
            { text: 'いちとき', isCorrect: false, reason: '「いちとき」是「一時（暫時）」的讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「一時」（1點鐘）讀「いちじ」。', relatedRules: ['時間的讀法', '一時=いちじ'] },
        sourceItem: { value: 1, kanji: '一時', reading: 'いちじ' }
    },
    {
        id: 'num_basic_extra_53', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '電車は＿＿に来ます。（二時）', stem_zh: '電車兩點來。',
        options: [
            { text: 'ふたじ', isCorrect: false, reason: '時間用音讀。' },
            { text: 'にじ', isCorrect: true, reason: '正確！「二時」讀「にじ」。' },
            { text: 'ににじ', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'じじ', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「二時」讀「にじ」。', relatedRules: ['時間的讀法', '二時=にじ'] },
        sourceItem: { value: 2, kanji: '二時', reading: 'にじ' }
    },
    {
        id: 'num_basic_extra_54', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '時間詢問', stem_zh: '時間詢問',
        dialogue: { speakerA: '待ち合わせは何時ですか？', speakerB: '＿＿です。（三時）' },
        options: [
            { text: 'みじ', isCorrect: false, reason: '時間用音讀。' },
            { text: 'さんじ', isCorrect: true, reason: '正確！「三時」讀「さんじ」。' },
            { text: 'みっじ', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'さんとき', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三時」讀「さんじ」。', relatedRules: ['時間的讀法', '三時=さんじ'] },
        sourceItem: { value: 3, kanji: '三時', reading: 'さんじ' }
    },
    {
        id: 'num_basic_extra_55', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「五時」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「五時」的正確讀音是？',
        options: [
            { text: 'ごじ', isCorrect: true, reason: '正確！「五時」讀「ごじ」。' },
            { text: 'いつじ', isCorrect: false, reason: '時間用音讀。' },
            { text: 'ごとき', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'ごっじ', isCorrect: false, reason: '「時」前不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五時」讀「ごじ」。', relatedRules: ['時間的讀法', '五時=ごじ'] },
        sourceItem: { value: 5, kanji: '五時', reading: 'ごじ' }
    },
    {
        id: 'num_basic_extra_56', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '夕食は＿＿です。（七時）', stem_zh: '晚餐是七點。',
        options: [
            { text: 'ななじ', isCorrect: false, reason: '時間中「七」讀「しち」。' },
            { text: 'しちじ', isCorrect: true, reason: '正確！「七時」讀「しちじ」。' },
            { text: 'なのじ', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'ななとき', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「七時」讀「しちじ」，時間中「七」讀「しち」。', relatedRules: ['時間的讀法', '七時=しちじ'] },
        sourceItem: { value: 7, kanji: '七時', reading: 'しちじ' }
    },
    {
        id: 'num_basic_extra_57', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '約定', stem_zh: '約定',
        dialogue: { speakerA: '映画は何時からですか？', speakerB: '＿＿からです。（九時）' },
        options: [
            { text: 'きゅうじ', isCorrect: false, reason: '時間中「九」讀「く」。' },
            { text: 'くじ', isCorrect: true, reason: '正確！「九時」讀「くじ」。' },
            { text: 'ここのじ', isCorrect: false, reason: '時間用音讀。' },
            { text: 'きゅじ', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「九時」讀「くじ」，時間中「九」讀「く」。', relatedRules: ['時間的讀法', '九時=くじ'] },
        sourceItem: { value: 9, kanji: '九時', reading: 'くじ' }
    },
    {
        id: 'num_basic_extra_58', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: true,
        stem: '以下哪個「分」的讀法錯誤？', stem_zh: '以下哪個「分」的讀法錯誤？',
        options: [
            { text: '二分(にふん)', isCorrect: false, reason: '這是正確的讀法。' },
            { text: '四分(よふん)', isCorrect: true, reason: '錯誤！「四分」讀「よんぷん」，需要半濁音。' },
            { text: '七分(ななふん)', isCorrect: false, reason: '這是正確的讀法。' },
            { text: '九分(きゅうふん)', isCorrect: false, reason: '這是正確的讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「四分」讀「よんぷん」，「四」後「分」需要半濁音化。', trapExplanation: '「分」的讀法規則：1/6/8/10促音+ぷん，3/4撥音/長音+ぷん，其他ふん。', relatedRules: ['分的讀法規則'] },
        sourceItem: { value: 4, kanji: '四分', reading: 'よんぷん' }
    },

    // ===== 追加100題（59-158） =====
    // 更多0-10數字的應用場景、比較題和陷阱題

    // 購物場景
    {
        id: 'num_basic_extra_59', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '購物對話', stem_zh: '購物對話',
        dialogue: { speakerA: 'これはいくらですか？', speakerB: '＿＿百円です。（三）' },
        options: [
            { text: 'さん', isCorrect: true, reason: '正確！「三百」讀「さんびゃく」。' },
            { text: 'み', isCorrect: false, reason: '「み」是訓讀，不用於百位數。' },
            { text: 'みっ', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'さ', isCorrect: false, reason: '需要完整的「さん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三百」讀「さんびゃく」，使用音讀。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 3, kanji: '三百', reading: 'さんびゃく' }
    },
    {
        id: 'num_basic_extra_60', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: true,
        stem: 'りんごを＿＿ください。（五個）', stem_zh: '請給我五個蘋果。',
        options: [
            { text: 'ごこ', isCorrect: false, reason: '陷阱！一般物品用「〜つ」不是「〜個」。' },
            { text: 'いつつ', isCorrect: true, reason: '正確！「五つ」讀「いつつ」。' },
            { text: 'ごつ', isCorrect: false, reason: '沒有這個讀法。' },
            { text: 'いつ', isCorrect: false, reason: '需要完整的「いつつ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '一般物品計數使用「〜つ」，「五つ」讀「いつつ」。', trapExplanation: '「〜個」主要用於漢語詞彙。', relatedRules: ['つ量詞的使用'] },
        sourceItem: { value: 5, kanji: '五つ', reading: 'いつつ' }
    },
    {
        id: 'num_basic_extra_61', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「六」的音讀是？', stem_zh: '「六」的音讀是？',
        options: [
            { text: 'ろく', isCorrect: true, reason: '正確！「六」的音讀是「ろく」。' },
            { text: 'むっ', isCorrect: false, reason: '「むっ」是訓讀的一部分。' },
            { text: 'りく', isCorrect: false, reason: '這不是「六」的讀法。' },
            { text: 'む', isCorrect: false, reason: '「む」是訓讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六」的音讀是「ろく」。', relatedRules: ['6的發音'] },
        sourceItem: { value: 6, kanji: '六', reading: 'ろく' }
    },
    {
        id: 'num_basic_extra_62', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '點餐對話', stem_zh: '點餐對話',
        dialogue: { speakerA: 'コーヒーをいくつ？', speakerB: '＿＿ください。（二つ）' },
        options: [
            { text: 'にこ', isCorrect: false, reason: '一般飲料用「〜つ」。' },
            { text: 'ふたつ', isCorrect: true, reason: '正確！「二つ」讀「ふたつ」。' },
            { text: 'にっ', isCorrect: false, reason: '沒有這個讀法。' },
            { text: 'ふたこ', isCorrect: false, reason: '沒有這個組合。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「二つ」讀「ふたつ」，用於計數一般物品。', relatedRules: ['つ量詞的使用'] },
        sourceItem: { value: 2, kanji: '二つ', reading: 'ふたつ' }
    },
    {
        id: 'num_basic_extra_63', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '部屋番号は＿＿です。（八）', stem_zh: '房間號碼是八號。',
        options: [
            { text: 'や', isCorrect: false, reason: '「や」是訓讀，不用於號碼。' },
            { text: 'はち', isCorrect: true, reason: '正確！號碼使用音讀「はち」。' },
            { text: 'やっ', isCorrect: false, reason: '沒有這個讀法。' },
            { text: 'はっ', isCorrect: false, reason: '獨立使用時不促音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '號碼使用音讀，「八」讀「はち」。', relatedRules: ['號碼的讀法'] },
        sourceItem: { value: 8, kanji: '八', reading: 'はち' }
    },
    {
        id: 'num_basic_extra_64', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: true,
        stem: '「零」的讀法是？', stem_zh: '「零」的讀法是？',
        options: [
            { text: 'れい', isCorrect: true, reason: '正確！「零」讀「れい」。' },
            { text: 'ぜろ', isCorrect: true, reason: '「ゼロ」也是正確的外來語讀法。' },
            { text: 'まる', isCorrect: false, reason: '「まる」是「○」的讀法，不是「零」。' },
            { text: 'ない', isCorrect: false, reason: '「ない」表示「沒有」，不是數字0。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「零」可讀「れい」或「ゼロ」。', relatedRules: ['0的讀法'] },
        sourceItem: { value: 0, kanji: '零', reading: 'れい' }
    },
    {
        id: 'num_basic_extra_65', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '數學課', stem_zh: '數學課',
        dialogue: { speakerA: '＿＿足す二は？', speakerB: '三です。（一）' },
        options: [
            { text: 'いち', isCorrect: true, reason: '正確！數學計算用音讀。' },
            { text: 'ひと', isCorrect: false, reason: '數學用音讀，不用訓讀。' },
            { text: 'ひとつ', isCorrect: false, reason: '數學不用量詞讀法。' },
            { text: 'いっ', isCorrect: false, reason: '「足す」前不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '數學計算使用音讀。', relatedRules: ['數學的讀法'] },
        sourceItem: { value: 1, kanji: '一', reading: 'いち' }
    },
    {
        id: 'num_basic_extra_66', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: true,
        stem: '＿＿人で食事しました。（四）', stem_zh: '四個人一起吃飯。',
        options: [
            { text: 'しにん', isCorrect: false, reason: '陷阱！「四人」讀「よにん」。' },
            { text: 'よにん', isCorrect: true, reason: '正確！「四人」讀「よにん」。' },
            { text: 'よんにん', isCorrect: false, reason: '「四人」不讀「よんにん」。' },
            { text: 'しじん', isCorrect: false, reason: '沒有這個讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「四人」讀「よにん」，「四」後接人用「よ」。', trapExplanation: '「四」在「四人」中讀「よ」，不是「し」或「よん」。', relatedRules: ['人數的讀法'] },
        sourceItem: { value: 4, kanji: '四人', reading: 'よにん' }
    },
    {
        id: 'num_basic_extra_67', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「十」的音讀是？', stem_zh: '「十」的音讀是？',
        options: [
            { text: 'じゅう', isCorrect: true, reason: '正確！「十」的音讀是「じゅう」。' },
            { text: 'とお', isCorrect: false, reason: '「とお」是訓讀。' },
            { text: 'じゅ', isCorrect: false, reason: '需要長音「じゅう」。' },
            { text: 'じっ', isCorrect: false, reason: '這是促音化形式。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十」的音讀是「じゅう」。', relatedRules: ['10的發音'] },
        sourceItem: { value: 10, kanji: '十', reading: 'じゅう' }
    },
    {
        id: 'num_basic_extra_68', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '年齡詢問', stem_zh: '年齡詢問',
        dialogue: { speakerA: '何歳ですか？', speakerB: '＿＿歳です。（九）' },
        options: [
            { text: 'く', isCorrect: false, reason: '「九歳」不讀「くさい」。' },
            { text: 'きゅう', isCorrect: true, reason: '正確！「九歳」讀「きゅうさい」。' },
            { text: 'ここの', isCorrect: false, reason: '「ここの」是訓讀。' },
            { text: 'きゅ', isCorrect: false, reason: '需要長音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「九歳」讀「きゅうさい」。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 9, kanji: '九歳', reading: 'きゅうさい' }
    },
    {
        id: 'num_basic_extra_69', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '猫を＿＿飼っています。（三）', stem_zh: '養了三隻貓。',
        options: [
            { text: 'さんびき', isCorrect: true, reason: '正確！「三匹」讀「さんびき」。' },
            { text: 'さんひき', isCorrect: false, reason: '「三」後「匹」濁音化為「びき」。' },
            { text: 'みっぴき', isCorrect: false, reason: '「三匹」用音讀。' },
            { text: 'さんぴき', isCorrect: false, reason: '是「びき」不是「ぴき」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三匹」讀「さんびき」，濁音化。', relatedRules: ['匹的音變'] },
        sourceItem: { value: 3, kanji: '三匹', reading: 'さんびき' }
    },
    {
        id: 'num_basic_extra_70', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: true,
        stem: '「七」有哪兩種讀法？', stem_zh: '「七」有哪兩種讀法？',
        options: [
            { text: 'しち・なな', isCorrect: true, reason: '正確！「七」可讀「しち」或「なな」。' },
            { text: 'しち・なの', isCorrect: false, reason: '「なの」是「七日」的讀法，不是「七」。' },
            { text: 'なな・ひち', isCorrect: false, reason: '沒有「ひち」這個讀法。' },
            { text: 'しち・ななつ', isCorrect: false, reason: '「ななつ」是「七つ」的讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七」可讀「しち」（音讀）或「なな」（訓讀）。', relatedRules: ['7的讀法'] },
        sourceItem: { value: 7, kanji: '七', reading: 'しち/なな' }
    },
    {
        id: 'num_basic_extra_71', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: true,
        stem: '時間對話', stem_zh: '時間對話',
        dialogue: { speakerA: '今何時ですか？', speakerB: '＿＿時です。（四）' },
        options: [
            { text: 'しじ', isCorrect: false, reason: '陷阱！「四時」讀「よじ」，不是「しじ」。' },
            { text: 'よじ', isCorrect: true, reason: '正確！「四時」讀「よじ」。' },
            { text: 'よんじ', isCorrect: false, reason: '「四時」不讀「よんじ」。' },
            { text: 'しいじ', isCorrect: false, reason: '沒有這個讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「四時」讀「よじ」。', trapExplanation: '時間的「四」讀「よ」，是特殊讀法。', relatedRules: ['時間的特殊讀法'] },
        sourceItem: { value: 4, kanji: '四時', reading: 'よじ' }
    },
    {
        id: 'num_basic_extra_72', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '本を＿＿買いました。（六冊）', stem_zh: '買了六本書。',
        options: [
            { text: 'ろくさつ', isCorrect: true, reason: '正確！「六冊」讀「ろくさつ」。' },
            { text: 'むっさつ', isCorrect: false, reason: '「冊」用音讀。' },
            { text: 'ろっさつ', isCorrect: false, reason: '「六冊」不促音化。' },
            { text: 'ろくせつ', isCorrect: false, reason: '是「さつ」不是「せつ」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六冊」讀「ろくさつ」。', relatedRules: ['冊的讀法'] },
        sourceItem: { value: 6, kanji: '六冊', reading: 'ろくさつ' }
    },
    {
        id: 'num_basic_extra_73', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「八」的訓讀是？', stem_zh: '「八」的訓讀是？',
        options: [
            { text: 'や', isCorrect: true, reason: '正確！「八」的訓讀是「や」。' },
            { text: 'はち', isCorrect: false, reason: '「はち」是音讀。' },
            { text: 'やつ', isCorrect: false, reason: '「やつ」是「八つ」的讀法。' },
            { text: 'は', isCorrect: false, reason: '沒有這個讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八」的訓讀是「や」，如「八百屋（やおや）」。', relatedRules: ['8的讀法'] },
        sourceItem: { value: 8, kanji: '八', reading: 'や' }
    },
    {
        id: 'num_basic_extra_74', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '買東西', stem_zh: '買東西',
        dialogue: { speakerA: 'ペンは何本いりますか？', speakerB: '＿＿本ください。（五）' },
        options: [
            { text: 'ごほん', isCorrect: true, reason: '正確！「五本」讀「ごほん」。' },
            { text: 'いつほん', isCorrect: false, reason: '「本」用音讀。' },
            { text: 'ごぼん', isCorrect: false, reason: '「五」後「本」不濁音化。' },
            { text: 'ごっぽん', isCorrect: false, reason: '「五」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五本」讀「ごほん」。', relatedRules: ['本的讀法'] },
        sourceItem: { value: 5, kanji: '五本', reading: 'ごほん' }
    },
    {
        id: 'num_basic_extra_75', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: true,
        stem: '切手を＿＿買いました。（一枚）', stem_zh: '買了一張郵票。',
        options: [
            { text: 'いちまい', isCorrect: true, reason: '正確！「一枚」讀「いちまい」。' },
            { text: 'いっまい', isCorrect: false, reason: '陷阱！「枚」前「一」不促音化。' },
            { text: 'ひとまい', isCorrect: false, reason: '「枚」用音讀。' },
            { text: 'いちばい', isCorrect: false, reason: '沒有這個讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「一枚」讀「いちまい」，不促音化。', trapExplanation: '「一」在「枚」前不促音化。', relatedRules: ['枚的讀法'] },
        sourceItem: { value: 1, kanji: '一枚', reading: 'いちまい' }
    },
    {
        id: 'num_basic_extra_76', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「九」有哪兩種讀法？', stem_zh: '「九」有哪兩種讀法？',
        options: [
            { text: 'きゅう・く', isCorrect: true, reason: '正確！「九」可讀「きゅう」或「く」。' },
            { text: 'きゅう・ここの', isCorrect: false, reason: '「ここの」是「九つ」的讀法。' },
            { text: 'く・ここの', isCorrect: false, reason: '「ここの」不是單獨「九」的讀法。' },
            { text: 'きゅ・く', isCorrect: false, reason: '是「きゅう」不是「きゅ」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九」的音讀有「きゅう」和「く」兩種。', relatedRules: ['9的讀法'] },
        sourceItem: { value: 9, kanji: '九', reading: 'きゅう/く' }
    },
    {
        id: 'num_basic_extra_77', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '日期對話', stem_zh: '日期對話',
        dialogue: { speakerA: '誕生日はいつですか？', speakerB: '＿＿月です。（二）' },
        options: [
            { text: 'に', isCorrect: true, reason: '正確！「二月」讀「にがつ」。' },
            { text: 'ふた', isCorrect: false, reason: '月份用音讀。' },
            { text: 'ふ', isCorrect: false, reason: '沒有這個讀法。' },
            { text: 'じ', isCorrect: false, reason: '沒有這個讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二月」讀「にがつ」。', relatedRules: ['月份的讀法'] },
        sourceItem: { value: 2, kanji: '二月', reading: 'にがつ' }
    },
    {
        id: 'num_basic_extra_78', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: true,
        stem: '水を＿＿飲みました。（一杯）', stem_zh: '喝了一杯水。',
        options: [
            { text: 'いっぱい', isCorrect: true, reason: '正確！「一杯」讀「いっぱい」。' },
            { text: 'いちはい', isCorrect: false, reason: '陷阱！「杯」前「一」促音化且半濁音。' },
            { text: 'ひとはい', isCorrect: false, reason: '「杯」用音讀。' },
            { text: 'いちばい', isCorrect: false, reason: '是「ぱい」不是「ばい」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「一杯」讀「いっぱい」，促音化且半濁音。', trapExplanation: '「一」在「杯」前促音化，且「杯」變「ぱい」。', relatedRules: ['杯的讀法'] },
        sourceItem: { value: 1, kanji: '一杯', reading: 'いっぱい' }
    },
    {
        id: 'num_basic_extra_79', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「四」的訓讀是？', stem_zh: '「四」的訓讀是？',
        options: [
            { text: 'よ', isCorrect: true, reason: '正確！「四」的訓讀是「よ」。' },
            { text: 'し', isCorrect: false, reason: '「し」是音讀。' },
            { text: 'よん', isCorrect: false, reason: '「よん」是「四」的另一種音讀形式。' },
            { text: 'よつ', isCorrect: false, reason: '「よつ」是「四つ」的讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四」的訓讀是「よ」，如「四日（よっか）」。', relatedRules: ['4的讀法'] },
        sourceItem: { value: 4, kanji: '四', reading: 'よ' }
    },
    {
        id: 'num_basic_extra_80', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '椅子はいくつありますか？', speakerB: '＿＿あります。（八つ）' },
        options: [
            { text: 'やっつ', isCorrect: true, reason: '正確！「八つ」讀「やっつ」。' },
            { text: 'はちつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'やつ', isCorrect: false, reason: '需要促音「やっつ」。' },
            { text: 'はっつ', isCorrect: false, reason: '不用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八つ」讀「やっつ」。', relatedRules: ['つ量詞的讀法'] },
        sourceItem: { value: 8, kanji: '八つ', reading: 'やっつ' }
    },
    {
        id: 'num_basic_extra_81', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '階段を＿＿段上がりました。（十）', stem_zh: '上了十階樓梯。',
        options: [
            { text: 'じゅう', isCorrect: false, reason: '「十段」讀「じゅうだん」，但「十」在此讀「じゅっ」。' },
            { text: 'じゅっ', isCorrect: true, reason: '正確！「十段」讀「じゅっだん」。' },
            { text: 'とお', isCorrect: false, reason: '「段」用音讀。' },
            { text: 'じっ', isCorrect: true, reason: '「じっだん」也正確。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「十段」讀「じゅっだん」或「じっだん」。', relatedRules: ['10的促音化'] },
        sourceItem: { value: 10, kanji: '十段', reading: 'じゅっだん' }
    },
    {
        id: 'num_basic_extra_82', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: true,
        stem: '「三」在「三人」中讀作？', stem_zh: '「三」在「三人」中讀作？',
        options: [
            { text: 'さん', isCorrect: true, reason: '正確！「三人」讀「さんにん」。' },
            { text: 'み', isCorrect: false, reason: '陷阱！「三人」用音讀，不用訓讀。' },
            { text: 'みっ', isCorrect: false, reason: '「三人」不促音化。' },
            { text: 'さ', isCorrect: false, reason: '需要完整的「さん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三人」讀「さんにん」。', trapExplanation: '「人」前用音讀，不用訓讀「み」。', relatedRules: ['人數的讀法'] },
        sourceItem: { value: 3, kanji: '三人', reading: 'さんにん' }
    },
    {
        id: 'num_basic_extra_83', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: true,
        stem: '點菜', stem_zh: '點菜',
        dialogue: { speakerA: 'ビールをいくつ？', speakerB: '＿＿ください。（六つ）' },
        options: [
            { text: 'むっつ', isCorrect: true, reason: '正確！「六つ」讀「むっつ」。' },
            { text: 'ろくつ', isCorrect: false, reason: '陷阱！「つ」用訓讀，不用音讀。' },
            { text: 'むつ', isCorrect: false, reason: '需要促音「むっつ」。' },
            { text: 'ろっつ', isCorrect: false, reason: '不用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六つ」讀「むっつ」。', trapExplanation: '「〜つ」量詞用訓讀。', relatedRules: ['つ量詞的讀法'] },
        sourceItem: { value: 6, kanji: '六つ', reading: 'むっつ' }
    },
    {
        id: 'num_basic_extra_84', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '＿＿階に住んでいます。（七）', stem_zh: '住在七樓。',
        options: [
            { text: 'なな', isCorrect: false, reason: '「階」用音讀。' },
            { text: 'しち', isCorrect: true, reason: '正確！「七階」讀「しちかい」或「ななかい」。' },
            { text: 'なの', isCorrect: false, reason: '這不是「七」的讀法。' },
            { text: 'ひち', isCorrect: false, reason: '沒有這個讀法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「七階」可讀「しちかい」或「ななかい」。', relatedRules: ['7的讀法'] },
        sourceItem: { value: 7, kanji: '七階', reading: 'しちかい' }
    },
    {
        id: 'num_basic_extra_85', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「一」在「一本」中讀作？', stem_zh: '「一」在「一本」中讀作？',
        options: [
            { text: 'いっ', isCorrect: true, reason: '正確！「一本」讀「いっぽん」。' },
            { text: 'いち', isCorrect: false, reason: '「本」前「一」促音化。' },
            { text: 'ひと', isCorrect: false, reason: '「本」用音讀。' },
            { text: 'い', isCorrect: false, reason: '需要促音。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「一本」讀「いっぽん」，促音化且半濁音。', relatedRules: ['本的讀法'] },
        sourceItem: { value: 1, kanji: '一本', reading: 'いっぽん' }
    },
    {
        id: 'num_basic_extra_86', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '預約', stem_zh: '預約',
        dialogue: { speakerA: '何名様ですか？', speakerB: '＿＿名です。（五）' },
        options: [
            { text: 'ご', isCorrect: true, reason: '正確！「五名」讀「ごめい」。' },
            { text: 'いつ', isCorrect: false, reason: '「名」用音讀。' },
            { text: 'いつつ', isCorrect: false, reason: '「名」不用「つ」。' },
            { text: 'ごう', isCorrect: false, reason: '沒有這個讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五名」讀「ごめい」。', relatedRules: ['名的讀法'] },
        sourceItem: { value: 5, kanji: '五名', reading: 'ごめい' }
    },
    {
        id: 'num_basic_extra_87', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: true,
        stem: '薬を＿＿飲みます。（三回）', stem_zh: '吃藥三次。',
        options: [
            { text: 'さんかい', isCorrect: true, reason: '正確！「三回」讀「さんかい」。' },
            { text: 'みかい', isCorrect: false, reason: '陷阱！「回」前用音讀。' },
            { text: 'さんがい', isCorrect: false, reason: '「三」後「回」不濁音化。' },
            { text: 'みっかい', isCorrect: false, reason: '不用訓讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三回」讀「さんかい」。', trapExplanation: '「回」前用音讀，不用訓讀。', relatedRules: ['回的讀法'] },
        sourceItem: { value: 3, kanji: '三回', reading: 'さんかい' }
    },
    {
        id: 'num_basic_extra_88', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「二」在「二人」中讀作？', stem_zh: '「二」在「二人」中讀作？',
        options: [
            { text: 'ふた', isCorrect: true, reason: '正確！「二人」讀「ふたり」。' },
            { text: 'に', isCorrect: false, reason: '「二人」是特殊讀法，用訓讀。' },
            { text: 'ふ', isCorrect: false, reason: '需要「ふた」。' },
            { text: 'にっ', isCorrect: false, reason: '沒有這個讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二人」讀「ふたり」，是特殊訓讀。', relatedRules: ['人數的特殊讀法'] },
        sourceItem: { value: 2, kanji: '二人', reading: 'ふたり' }
    },
    {
        id: 'num_basic_extra_89', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '問時間', stem_zh: '問時間',
        dialogue: { speakerA: '何時に起きますか？', speakerB: '＿＿時に起きます。（六）' },
        options: [
            { text: 'ろく', isCorrect: true, reason: '正確！「六時」讀「ろくじ」。' },
            { text: 'む', isCorrect: false, reason: '「時」用音讀。' },
            { text: 'むっ', isCorrect: false, reason: '「六時」不促音化。' },
            { text: 'ろっ', isCorrect: false, reason: '「六時」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六時」讀「ろくじ」。', relatedRules: ['時間的讀法'] },
        sourceItem: { value: 6, kanji: '六時', reading: 'ろくじ' }
    },
    {
        id: 'num_basic_extra_90', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '＿＿番目に並んでいます。（八）', stem_zh: '排在第八個。',
        options: [
            { text: 'はち', isCorrect: true, reason: '正確！「八番目」讀「はちばんめ」。' },
            { text: 'や', isCorrect: false, reason: '「番目」用音讀。' },
            { text: 'やっ', isCorrect: false, reason: '不用訓讀。' },
            { text: 'はっ', isCorrect: false, reason: '「八番目」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八番目」讀「はちばんめ」。', relatedRules: ['序數的讀法'] },
        sourceItem: { value: 8, kanji: '八番目', reading: 'はちばんめ' }
    },
    {
        id: 'num_basic_extra_91', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: true,
        stem: '「十」在「十本」中讀作？', stem_zh: '「十」在「十本」中讀作？',
        options: [
            { text: 'じゅっ', isCorrect: true, reason: '正確！「十本」讀「じゅっぽん」。' },
            { text: 'じゅう', isCorrect: false, reason: '陷阱！「本」前「十」促音化。' },
            { text: 'とお', isCorrect: false, reason: '「本」用音讀。' },
            { text: 'じっ', isCorrect: true, reason: '「じっぽん」也正確。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十本」讀「じゅっぽん」或「じっぽん」。', trapExplanation: '「十」在「本」前促音化。', relatedRules: ['本的讀法'] },
        sourceItem: { value: 10, kanji: '十本', reading: 'じゅっぽん' }
    },
    {
        id: 'num_basic_extra_92', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '問年齡', stem_zh: '問年齡',
        dialogue: { speakerA: 'お子さんは何歳ですか？', speakerB: '＿＿歳です。（三）' },
        options: [
            { text: 'さん', isCorrect: true, reason: '正確！「三歳」讀「さんさい」。' },
            { text: 'み', isCorrect: false, reason: '「歳」用音讀。' },
            { text: 'みっ', isCorrect: false, reason: '不用訓讀。' },
            { text: 'さ', isCorrect: false, reason: '需要「さん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三歳」讀「さんさい」。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 3, kanji: '三歳', reading: 'さんさい' }
    },
    {
        id: 'num_basic_extra_93', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: true,
        stem: '犬を＿＿飼っています。（一匹）', stem_zh: '養了一隻狗。',
        options: [
            { text: 'いっぴき', isCorrect: true, reason: '正確！「一匹」讀「いっぴき」。' },
            { text: 'いちひき', isCorrect: false, reason: '陷阱！「匹」前「一」促音化且半濁音。' },
            { text: 'ひとひき', isCorrect: false, reason: '「匹」用音讀。' },
            { text: 'いちびき', isCorrect: false, reason: '不是這個讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「一匹」讀「いっぴき」。', trapExplanation: '「一」在「匹」前促音化，且「匹」變「ぴき」。', relatedRules: ['匹的讀法'] },
        sourceItem: { value: 1, kanji: '一匹', reading: 'いっぴき' }
    },
    {
        id: 'num_basic_extra_94', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「六」在「六匹」中讀作？', stem_zh: '「六」在「六匹」中讀作？',
        options: [
            { text: 'ろっ', isCorrect: true, reason: '正確！「六匹」讀「ろっぴき」。' },
            { text: 'ろく', isCorrect: false, reason: '「匹」前「六」促音化。' },
            { text: 'む', isCorrect: false, reason: '「匹」用音讀。' },
            { text: 'むっ', isCorrect: false, reason: '不用訓讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六匹」讀「ろっぴき」。', relatedRules: ['匹的讀法'] },
        sourceItem: { value: 6, kanji: '六匹', reading: 'ろっぴき' }
    },
    {
        id: 'num_basic_extra_95', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'これはいくらですか？', speakerB: '＿＿千円です。（二）' },
        options: [
            { text: 'に', isCorrect: true, reason: '正確！「二千」讀「にせん」。' },
            { text: 'ふた', isCorrect: false, reason: '「千」用音讀。' },
            { text: 'ふ', isCorrect: false, reason: '不用訓讀。' },
            { text: 'にっ', isCorrect: false, reason: '「二千」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二千」讀「にせん」。', relatedRules: ['千的讀法'] },
        sourceItem: { value: 2, kanji: '二千', reading: 'にせん' }
    },
    {
        id: 'num_basic_extra_96', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '写真を＿＿撮りました。（十枚）', stem_zh: '拍了十張照片。',
        options: [
            { text: 'じゅうまい', isCorrect: true, reason: '正確！「十枚」讀「じゅうまい」。' },
            { text: 'じゅっまい', isCorrect: false, reason: '「枚」前不促音化。' },
            { text: 'とおまい', isCorrect: false, reason: '「枚」用音讀。' },
            { text: 'じっまい', isCorrect: false, reason: '「枚」前不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十枚」讀「じゅうまい」。', relatedRules: ['枚的讀法'] },
        sourceItem: { value: 10, kanji: '十枚', reading: 'じゅうまい' }
    },
    {
        id: 'num_basic_extra_97', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: true,
        stem: '「八」在「八本」中讀作？', stem_zh: '「八」在「八本」中讀作？',
        options: [
            { text: 'はっ', isCorrect: true, reason: '正確！「八本」讀「はっぽん」。' },
            { text: 'はち', isCorrect: false, reason: '陷阱！「本」前「八」促音化。' },
            { text: 'や', isCorrect: false, reason: '「本」用音讀。' },
            { text: 'やっ', isCorrect: false, reason: '不用訓讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八本」讀「はっぽん」。', trapExplanation: '「八」在「本」前促音化，且「本」變「ぽん」。', relatedRules: ['本的讀法'] },
        sourceItem: { value: 8, kanji: '八本', reading: 'はっぽん' }
    },
    {
        id: 'num_basic_extra_98', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '問個數', stem_zh: '問個數',
        dialogue: { speakerA: 'みかんはいくつありますか？', speakerB: '＿＿あります。（九つ）' },
        options: [
            { text: 'ここのつ', isCorrect: true, reason: '正確！「九つ」讀「ここのつ」。' },
            { text: 'きゅうつ', isCorrect: false, reason: '「つ」用訓讀。' },
            { text: 'くつ', isCorrect: false, reason: '「九つ」不讀「くつ」。' },
            { text: 'ここつ', isCorrect: false, reason: '需要「ここのつ」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九つ」讀「ここのつ」。', relatedRules: ['つ量詞的讀法'] },
        sourceItem: { value: 9, kanji: '九つ', reading: 'ここのつ' }
    },
    {
        id: 'num_basic_extra_99', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '階段は＿＿段あります。（五）', stem_zh: '樓梯有五階。',
        options: [
            { text: 'ご', isCorrect: true, reason: '正確！「五段」讀「ごだん」。' },
            { text: 'いつ', isCorrect: false, reason: '「段」用音讀。' },
            { text: 'いつつ', isCorrect: false, reason: '不用「つ」量詞。' },
            { text: 'ごう', isCorrect: false, reason: '沒有這個讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五段」讀「ごだん」。', relatedRules: ['段的讀法'] },
        sourceItem: { value: 5, kanji: '五段', reading: 'ごだん' }
    },
    {
        id: 'num_basic_extra_100', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: true,
        stem: '以下哪個「杯」的讀法正確？', stem_zh: '以下哪個「杯」的讀法正確？',
        options: [
            { text: '三杯(さんばい)', isCorrect: true, reason: '正確！「三杯」讀「さんばい」。' },
            { text: '三杯(さんはい)', isCorrect: false, reason: '「三」後「杯」濁音化為「ばい」。' },
            { text: '三杯(さんぱい)', isCorrect: false, reason: '不是半濁音。' },
            { text: '三杯(みはい)', isCorrect: false, reason: '「杯」用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三杯」讀「さんばい」。', trapExplanation: '「杯」的讀法：1/6/8/10→っぱい，3→ばい，其他→はい。', relatedRules: ['杯的讀法規則'] },
        sourceItem: { value: 3, kanji: '三杯', reading: 'さんばい' }
    },

    // ===== 繼續追加（101-158）=====
    {
        id: 'num_basic_extra_101', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '問日期', stem_zh: '問日期',
        dialogue: { speakerA: '今日は何日ですか？', speakerB: '＿＿日です。（一）' },
        options: [
            { text: 'ついたち', isCorrect: true, reason: '正確！「一日」讀「ついたち」。' },
            { text: 'いちにち', isCorrect: false, reason: '「一日」作為日期讀「ついたち」。' },
            { text: 'いちび', isCorrect: false, reason: '沒有這個讀法。' },
            { text: 'ひとひ', isCorrect: false, reason: '沒有這個讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「一日」作為日期讀「ついたち」。', relatedRules: ['日期的特殊讀法'] },
        sourceItem: { value: 1, kanji: '一日', reading: 'ついたち' }
    },
    {
        id: 'num_basic_extra_102', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: true,
        stem: '電車は＿＿分後に来ます。（六）', stem_zh: '電車六分鐘後來。',
        options: [
            { text: 'ろっぷん', isCorrect: true, reason: '正確！「六分」讀「ろっぷん」。' },
            { text: 'ろくふん', isCorrect: false, reason: '陷阱！「分」前「六」促音化且半濁音。' },
            { text: 'むふん', isCorrect: false, reason: '「分」用音讀。' },
            { text: 'ろくぷん', isCorrect: false, reason: '需要促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六分」讀「ろっぷん」。', trapExplanation: '「六」在「分」前促音化，且「分」變「ぷん」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 6, kanji: '六分', reading: 'ろっぷん' }
    },
    {
        id: 'num_basic_extra_103', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「十」在「十日」中讀作？', stem_zh: '「十」在「十日」中讀作？',
        options: [
            { text: 'とお', isCorrect: true, reason: '正確！「十日」讀「とおか」。' },
            { text: 'じゅう', isCorrect: false, reason: '「十日」是特殊讀法。' },
            { text: 'じゅっ', isCorrect: false, reason: '「十日」不用音讀。' },
            { text: 'と', isCorrect: false, reason: '需要「とお」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十日」讀「とおか」。', relatedRules: ['日期的特殊讀法'] },
        sourceItem: { value: 10, kanji: '十日', reading: 'とおか' }
    },
    {
        id: 'num_basic_extra_104', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '問年級', stem_zh: '問年級',
        dialogue: { speakerA: '何年生ですか？', speakerB: '＿＿年生です。（四）' },
        options: [
            { text: 'よ', isCorrect: true, reason: '正確！「四年生」讀「よねんせい」。' },
            { text: 'し', isCorrect: false, reason: '「四年生」讀「よねんせい」。' },
            { text: 'よん', isCorrect: false, reason: '「四年生」不讀「よんねんせい」。' },
            { text: 'よっ', isCorrect: false, reason: '不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四年生」讀「よねんせい」。', relatedRules: ['年級的讀法'] },
        sourceItem: { value: 4, kanji: '四年生', reading: 'よねんせい' }
    },
    {
        id: 'num_basic_extra_105', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '傘を＿＿持っています。（七本）', stem_zh: '有七把傘。',
        options: [
            { text: 'ななほん', isCorrect: true, reason: '正確！「七本」讀「ななほん」。' },
            { text: 'しちほん', isCorrect: false, reason: '「七本」讀「ななほん」。' },
            { text: 'ななぼん', isCorrect: false, reason: '「七」後「本」不濁音化。' },
            { text: 'なのほん', isCorrect: false, reason: '不是「なの」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七本」讀「ななほん」。', relatedRules: ['本的讀法'] },
        sourceItem: { value: 7, kanji: '七本', reading: 'ななほん' }
    },
    {
        id: 'num_basic_extra_106', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: true,
        stem: '「一」在「一人」中讀作？', stem_zh: '「一」在「一人」中讀作？',
        options: [
            { text: 'ひと', isCorrect: true, reason: '正確！「一人」讀「ひとり」。' },
            { text: 'いち', isCorrect: false, reason: '陷阱！「一人」是特殊訓讀。' },
            { text: 'いっ', isCorrect: false, reason: '「一人」不用音讀。' },
            { text: 'ひ', isCorrect: false, reason: '需要「ひと」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「一人」讀「ひとり」。', trapExplanation: '「一人」和「二人」是特殊訓讀。', relatedRules: ['人數的特殊讀法'] },
        sourceItem: { value: 1, kanji: '一人', reading: 'ひとり' }
    },
    {
        id: 'num_basic_extra_107', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '買票', stem_zh: '買票',
        dialogue: { speakerA: '入場券は何枚いりますか？', speakerB: '＿＿枚ください。（二）' },
        options: [
            { text: 'に', isCorrect: true, reason: '正確！「二枚」讀「にまい」。' },
            { text: 'ふた', isCorrect: false, reason: '「枚」用音讀。' },
            { text: 'ふ', isCorrect: false, reason: '不用訓讀。' },
            { text: 'にっ', isCorrect: false, reason: '「二枚」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二枚」讀「にまい」。', relatedRules: ['枚的讀法'] },
        sourceItem: { value: 2, kanji: '二枚', reading: 'にまい' }
    },
    {
        id: 'num_basic_extra_108', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: true,
        stem: '会議室は＿＿階です。（八）', stem_zh: '會議室在八樓。',
        options: [
            { text: 'はっ', isCorrect: true, reason: '正確！「八階」讀「はっかい」。' },
            { text: 'はち', isCorrect: false, reason: '陷阱！「階」前「八」促音化。' },
            { text: 'や', isCorrect: false, reason: '「階」用音讀。' },
            { text: 'やっ', isCorrect: false, reason: '不用訓讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八階」讀「はっかい」。', trapExplanation: '「八」在「階」前促音化。', relatedRules: ['階的讀法'] },
        sourceItem: { value: 8, kanji: '八階', reading: 'はっかい' }
    },
    {
        id: 'num_basic_extra_109', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「三」在「三月」中讀作？', stem_zh: '「三」在「三月」中讀作？',
        options: [
            { text: 'さん', isCorrect: true, reason: '正確！「三月」讀「さんがつ」。' },
            { text: 'み', isCorrect: false, reason: '「月」用音讀。' },
            { text: 'みっ', isCorrect: false, reason: '不用訓讀。' },
            { text: 'さ', isCorrect: false, reason: '需要「さん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三月」讀「さんがつ」。', relatedRules: ['月份的讀法'] },
        sourceItem: { value: 3, kanji: '三月', reading: 'さんがつ' }
    },
    {
        id: 'num_basic_extra_110', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '問分數', stem_zh: '問分數',
        dialogue: { speakerA: 'テストは何点でしたか？', speakerB: '＿＿点です。（十）' },
        options: [
            { text: 'じゅっ', isCorrect: true, reason: '正確！「十点」讀「じゅってん」。' },
            { text: 'じゅう', isCorrect: false, reason: '「点」前「十」促音化。' },
            { text: 'とお', isCorrect: false, reason: '「点」用音讀。' },
            { text: 'じっ', isCorrect: true, reason: '「じってん」也正確。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十点」讀「じゅってん」或「じってん」。', relatedRules: ['点的讀法'] },
        sourceItem: { value: 10, kanji: '十点', reading: 'じゅってん' }
    },
    {
        id: 'num_basic_extra_111', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '子供は＿＿います。（五人）', stem_zh: '有五個孩子。',
        options: [
            { text: 'ごにん', isCorrect: true, reason: '正確！「五人」讀「ごにん」。' },
            { text: 'いつにん', isCorrect: false, reason: '「人」用音讀。' },
            { text: 'ごじん', isCorrect: false, reason: '是「にん」不是「じん」。' },
            { text: 'いつたり', isCorrect: false, reason: '沒有這個讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五人」讀「ごにん」。', relatedRules: ['人數的讀法'] },
        sourceItem: { value: 5, kanji: '五人', reading: 'ごにん' }
    },
    {
        id: 'num_basic_extra_112', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: true,
        stem: '「六」在「六日」中讀作？', stem_zh: '「六」在「六日」中讀作？',
        options: [
            { text: 'むい', isCorrect: true, reason: '正確！「六日」讀「むいか」。' },
            { text: 'ろく', isCorrect: false, reason: '陷阱！「六日」是特殊訓讀。' },
            { text: 'む', isCorrect: false, reason: '需要「むい」。' },
            { text: 'ろっ', isCorrect: false, reason: '不用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六日」讀「むいか」。', trapExplanation: '日期1-10日都有特殊讀法。', relatedRules: ['日期的特殊讀法'] },
        sourceItem: { value: 6, kanji: '六日', reading: 'むいか' }
    },
    {
        id: 'num_basic_extra_113', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '買水果', stem_zh: '買水果',
        dialogue: { speakerA: 'バナナは何本いりますか？', speakerB: '＿＿本ください。（三）' },
        options: [
            { text: 'さん', isCorrect: false, reason: '「三本」讀「さんぼん」。' },
            { text: 'さんぼん', isCorrect: true, reason: '正確！「三本」讀「さんぼん」。' },
            { text: 'みほん', isCorrect: false, reason: '「本」用音讀。' },
            { text: 'さんほん', isCorrect: false, reason: '「三」後「本」濁音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「三本」讀「さんぼん」。', relatedRules: ['本的讀法'] },
        sourceItem: { value: 3, kanji: '三本', reading: 'さんぼん' }
    },
    {
        id: 'num_basic_extra_114', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '＿＿月に旅行します。（九）', stem_zh: '九月去旅行。',
        options: [
            { text: 'く', isCorrect: true, reason: '正確！「九月」讀「くがつ」。' },
            { text: 'きゅう', isCorrect: false, reason: '「九月」讀「くがつ」，不是「きゅうがつ」。' },
            { text: 'ここの', isCorrect: false, reason: '「月」用音讀。' },
            { text: 'きゅ', isCorrect: false, reason: '沒有這個讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九月」讀「くがつ」。', relatedRules: ['月份的讀法'] },
        sourceItem: { value: 9, kanji: '九月', reading: 'くがつ' }
    },
    {
        id: 'num_basic_extra_115', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「七」在「七日」中讀作？', stem_zh: '「七」在「七日」中讀作？',
        options: [
            { text: 'なの', isCorrect: true, reason: '正確！「七日」讀「なのか」。' },
            { text: 'なな', isCorrect: false, reason: '「七日」讀「なのか」。' },
            { text: 'しち', isCorrect: false, reason: '「七日」是特殊訓讀。' },
            { text: 'なん', isCorrect: false, reason: '沒有這個讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七日」讀「なのか」。', relatedRules: ['日期的特殊讀法'] },
        sourceItem: { value: 7, kanji: '七日', reading: 'なのか' }
    },
    {
        id: 'num_basic_extra_116', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: true,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: 'テーブルは何台ありますか？', speakerB: '＿＿台あります。（一）' },
        options: [
            { text: 'いち', isCorrect: true, reason: '正確！「一台」讀「いちだい」。' },
            { text: 'いっ', isCorrect: false, reason: '陷阱！「台」前不促音化。' },
            { text: 'ひと', isCorrect: false, reason: '「台」用音讀。' },
            { text: 'ひとつ', isCorrect: false, reason: '「台」不用「つ」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「一台」讀「いちだい」。', trapExplanation: '「一」在「台」前不促音化。', relatedRules: ['台的讀法'] },
        sourceItem: { value: 1, kanji: '一台', reading: 'いちだい' }
    },
    {
        id: 'num_basic_extra_117', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '＿＿日間休みます。（二）', stem_zh: '休息兩天。',
        options: [
            { text: 'ふつ', isCorrect: true, reason: '正確！「二日間」讀「ふつかかん」。' },
            { text: 'に', isCorrect: false, reason: '「二日」讀「ふつか」。' },
            { text: 'ふた', isCorrect: false, reason: '需要「ふつ」。' },
            { text: 'にっ', isCorrect: false, reason: '不用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二日」讀「ふつか」。', relatedRules: ['日期的特殊讀法'] },
        sourceItem: { value: 2, kanji: '二日', reading: 'ふつか' }
    },
    {
        id: 'num_basic_extra_118', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「四」在「四月」中讀作？', stem_zh: '「四」在「四月」中讀作？',
        options: [
            { text: 'し', isCorrect: true, reason: '正確！「四月」讀「しがつ」。' },
            { text: 'よ', isCorrect: false, reason: '「四月」讀「しがつ」。' },
            { text: 'よん', isCorrect: false, reason: '不是「よんがつ」。' },
            { text: 'よっ', isCorrect: false, reason: '沒有這個讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四月」讀「しがつ」。', relatedRules: ['月份的讀法'] },
        sourceItem: { value: 4, kanji: '四月', reading: 'しがつ' }
    },
    {
        id: 'num_basic_extra_119', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '問歲數', stem_zh: '問歲數',
        dialogue: { speakerA: '何歳ですか？', speakerB: '＿＿歳です。（七）' },
        options: [
            { text: 'なな', isCorrect: true, reason: '正確！「七歳」讀「ななさい」。' },
            { text: 'しち', isCorrect: false, reason: '「七歳」讀「ななさい」。' },
            { text: 'なの', isCorrect: false, reason: '「なの」用於日期。' },
            { text: 'なん', isCorrect: false, reason: '沒有這個讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七歳」讀「ななさい」。', relatedRules: ['年齡的讀法'] },
        sourceItem: { value: 7, kanji: '七歳', reading: 'ななさい' }
    },
    {
        id: 'num_basic_extra_120', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: true,
        stem: '映画は＿＿時間です。（二）', stem_zh: '電影兩小時。',
        options: [
            { text: 'に', isCorrect: true, reason: '正確！「二時間」讀「にじかん」。' },
            { text: 'ふた', isCorrect: false, reason: '陷阱！「時間」用音讀。' },
            { text: 'ふ', isCorrect: false, reason: '不用訓讀。' },
            { text: 'にっ', isCorrect: false, reason: '「二時間」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二時間」讀「にじかん」。', trapExplanation: '「時間」用音讀，不用訓讀。', relatedRules: ['時間的讀法'] },
        sourceItem: { value: 2, kanji: '二時間', reading: 'にじかん' }
    },
    {
        id: 'num_basic_extra_121', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「八」在「八日」中讀作？', stem_zh: '「八」在「八日」中讀作？',
        options: [
            { text: 'よう', isCorrect: true, reason: '正確！「八日」讀「ようか」。' },
            { text: 'はち', isCorrect: false, reason: '「八日」是特殊訓讀。' },
            { text: 'や', isCorrect: false, reason: '需要「よう」。' },
            { text: 'はっ', isCorrect: false, reason: '不用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八日」讀「ようか」。', relatedRules: ['日期的特殊讀法'] },
        sourceItem: { value: 8, kanji: '八日', reading: 'ようか' }
    },
    {
        id: 'num_basic_extra_122', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '問頻率', stem_zh: '問頻率',
        dialogue: { speakerA: '週に何回運動しますか？', speakerB: '＿＿回です。（四）' },
        options: [
            { text: 'よん', isCorrect: true, reason: '正確！「四回」讀「よんかい」。' },
            { text: 'し', isCorrect: false, reason: '「四回」讀「よんかい」。' },
            { text: 'よ', isCorrect: false, reason: '需要「よん」。' },
            { text: 'よっ', isCorrect: false, reason: '「四回」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四回」讀「よんかい」。', relatedRules: ['回的讀法'] },
        sourceItem: { value: 4, kanji: '四回', reading: 'よんかい' }
    },
    {
        id: 'num_basic_extra_123', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '＿＿月に結婚しました。（六）', stem_zh: '六月結婚了。',
        options: [
            { text: 'ろく', isCorrect: true, reason: '正確！「六月」讀「ろくがつ」。' },
            { text: 'む', isCorrect: false, reason: '「六月」用音讀。' },
            { text: 'むい', isCorrect: false, reason: '「むい」用於日期。' },
            { text: 'ろっ', isCorrect: false, reason: '「六月」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六月」讀「ろくがつ」。', relatedRules: ['月份的讀法'] },
        sourceItem: { value: 6, kanji: '六月', reading: 'ろくがつ' }
    },
    {
        id: 'num_basic_extra_124', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: true,
        stem: '「三」在「三日」中讀作？', stem_zh: '「三」在「三日」中讀作？',
        options: [
            { text: 'みっ', isCorrect: true, reason: '正確！「三日」讀「みっか」。' },
            { text: 'さん', isCorrect: false, reason: '陷阱！「三日」是特殊訓讀。' },
            { text: 'み', isCorrect: false, reason: '需要「みっ」。' },
            { text: 'さ', isCorrect: false, reason: '不用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三日」讀「みっか」。', trapExplanation: '日期1-10日都有特殊讀法。', relatedRules: ['日期的特殊讀法'] },
        sourceItem: { value: 3, kanji: '三日', reading: 'みっか' }
    },
    {
        id: 'num_basic_extra_125', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '問價錢', stem_zh: '問價錢',
        dialogue: { speakerA: 'このパンはいくらですか？', speakerB: '＿＿十円です。（八）' },
        options: [
            { text: 'はち', isCorrect: true, reason: '正確！「八十」讀「はちじゅう」。' },
            { text: 'や', isCorrect: false, reason: '「十」用音讀。' },
            { text: 'やっ', isCorrect: false, reason: '不用訓讀。' },
            { text: 'はっ', isCorrect: false, reason: '「八十」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八十」讀「はちじゅう」。', relatedRules: ['十位數的讀法'] },
        sourceItem: { value: 8, kanji: '八十', reading: 'はちじゅう' }
    },
    {
        id: 'num_basic_extra_126', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '鳥が＿＿飛んでいます。（十羽）', stem_zh: '有十隻鳥在飛。',
        options: [
            { text: 'じゅっ', isCorrect: true, reason: '正確！「十羽」讀「じゅっぱ」。' },
            { text: 'じゅう', isCorrect: false, reason: '「羽」前「十」促音化。' },
            { text: 'とお', isCorrect: false, reason: '「羽」用音讀。' },
            { text: 'じっ', isCorrect: true, reason: '「じっぱ」也正確。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十羽」讀「じゅっぱ」或「じっぱ」。', relatedRules: ['羽的讀法'] },
        sourceItem: { value: 10, kanji: '十羽', reading: 'じゅっぱ' }
    },
    {
        id: 'num_basic_extra_127', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「九」在「九日」中讀作？', stem_zh: '「九」在「九日」中讀作？',
        options: [
            { text: 'ここの', isCorrect: true, reason: '正確！「九日」讀「ここのか」。' },
            { text: 'きゅう', isCorrect: false, reason: '「九日」是特殊訓讀。' },
            { text: 'く', isCorrect: false, reason: '需要「ここの」。' },
            { text: 'きゅ', isCorrect: false, reason: '不用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九日」讀「ここのか」。', relatedRules: ['日期的特殊讀法'] },
        sourceItem: { value: 9, kanji: '九日', reading: 'ここのか' }
    },
    {
        id: 'num_basic_extra_128', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: true,
        stem: '問時長', stem_zh: '問時長',
        dialogue: { speakerA: '映画は何分ですか？', speakerB: '＿＿十分です。（九）' },
        options: [
            { text: 'きゅう', isCorrect: true, reason: '正確！「九十」讀「きゅうじゅう」。' },
            { text: 'く', isCorrect: false, reason: '陷阱！「九十」讀「きゅうじゅう」，不是「くじゅう」。' },
            { text: 'ここの', isCorrect: false, reason: '「十」用音讀。' },
            { text: 'きゅ', isCorrect: false, reason: '需要長音。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九十」讀「きゅうじゅう」。', trapExplanation: '「九」在十位數用「きゅう」。', relatedRules: ['十位數的讀法'] },
        sourceItem: { value: 9, kanji: '九十', reading: 'きゅうじゅう' }
    },
    {
        id: 'num_basic_extra_129', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '＿＿月に卒業します。（三）', stem_zh: '三月畢業。',
        options: [
            { text: 'さん', isCorrect: true, reason: '正確！「三月」讀「さんがつ」。' },
            { text: 'み', isCorrect: false, reason: '「月」用音讀。' },
            { text: 'みっ', isCorrect: false, reason: '「三月」不用訓讀。' },
            { text: 'さ', isCorrect: false, reason: '需要「さん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三月」讀「さんがつ」。', relatedRules: ['月份的讀法'] },
        sourceItem: { value: 3, kanji: '三月', reading: 'さんがつ' }
    },
    {
        id: 'num_basic_extra_130', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「五」在「五日」中讀作？', stem_zh: '「五」在「五日」中讀作？',
        options: [
            { text: 'いつ', isCorrect: true, reason: '正確！「五日」讀「いつか」。' },
            { text: 'ご', isCorrect: false, reason: '「五日」是特殊訓讀。' },
            { text: 'いつつ', isCorrect: false, reason: '需要「いつ」。' },
            { text: 'ごう', isCorrect: false, reason: '不用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五日」讀「いつか」。', relatedRules: ['日期的特殊讀法'] },
        sourceItem: { value: 5, kanji: '五日', reading: 'いつか' }
    },
    {
        id: 'num_basic_extra_131', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: 'りんごはいくつ買いましたか？', speakerB: '＿＿買いました。（十）' },
        options: [
            { text: 'とお', isCorrect: true, reason: '正確！「十」讀「とお」（訓讀）。' },
            { text: 'じゅう', isCorrect: false, reason: '「いくつ」用訓讀回答。' },
            { text: 'じゅっ', isCorrect: false, reason: '不用促音。' },
            { text: 'と', isCorrect: false, reason: '需要「とお」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十」的訓讀是「とお」。', relatedRules: ['10的讀法'] },
        sourceItem: { value: 10, kanji: '十', reading: 'とお' }
    },
    {
        id: 'num_basic_extra_132', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: true,
        stem: '鳥が＿＿飛んでいます。（六羽）', stem_zh: '有六隻鳥在飛。',
        options: [
            { text: 'ろっ', isCorrect: true, reason: '正確！「六羽」讀「ろっぱ」。' },
            { text: 'ろく', isCorrect: false, reason: '陷阱！「羽」前「六」促音化。' },
            { text: 'む', isCorrect: false, reason: '「羽」用音讀。' },
            { text: 'むっ', isCorrect: false, reason: '不用訓讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六羽」讀「ろっぱ」。', trapExplanation: '「六」在「羽」前促音化，且「羽」變「ぱ」。', relatedRules: ['羽的讀法'] },
        sourceItem: { value: 6, kanji: '六羽', reading: 'ろっぱ' }
    },
    {
        id: 'num_basic_extra_133', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「四」在「四日」中讀作？', stem_zh: '「四」在「四日」中讀作？',
        options: [
            { text: 'よっ', isCorrect: true, reason: '正確！「四日」讀「よっか」。' },
            { text: 'し', isCorrect: false, reason: '「四日」是特殊訓讀。' },
            { text: 'よ', isCorrect: false, reason: '需要「よっ」。' },
            { text: 'よん', isCorrect: false, reason: '不用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四日」讀「よっか」。', relatedRules: ['日期的特殊讀法'] },
        sourceItem: { value: 4, kanji: '四日', reading: 'よっか' }
    },
    {
        id: 'num_basic_extra_134', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '問月份', stem_zh: '問月份',
        dialogue: { speakerA: '今何月ですか？', speakerB: '＿＿月です。（十）' },
        options: [
            { text: 'じゅう', isCorrect: true, reason: '正確！「十月」讀「じゅうがつ」。' },
            { text: 'とお', isCorrect: false, reason: '「月」用音讀。' },
            { text: 'じゅっ', isCorrect: false, reason: '「十月」不促音化。' },
            { text: 'じっ', isCorrect: false, reason: '「十月」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十月」讀「じゅうがつ」。', relatedRules: ['月份的讀法'] },
        sourceItem: { value: 10, kanji: '十月', reading: 'じゅうがつ' }
    },
    {
        id: 'num_basic_extra_135', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '花を＿＿買いました。（七本）', stem_zh: '買了七枝花。',
        options: [
            { text: 'ななほん', isCorrect: true, reason: '正確！「七本」讀「ななほん」。' },
            { text: 'しちほん', isCorrect: false, reason: '「七本」讀「ななほん」。' },
            { text: 'ななぼん', isCorrect: false, reason: '「七」後「本」不濁音化。' },
            { text: 'なのほん', isCorrect: false, reason: '不是「なの」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七本」讀「ななほん」。', relatedRules: ['本的讀法'] },
        sourceItem: { value: 7, kanji: '七本', reading: 'ななほん' }
    },
    {
        id: 'num_basic_extra_136', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: true,
        stem: '「一」在「一月」中讀作？', stem_zh: '「一」在「一月」中讀作？',
        options: [
            { text: 'いち', isCorrect: true, reason: '正確！「一月」讀「いちがつ」。' },
            { text: 'ひと', isCorrect: false, reason: '陷阱！「月」用音讀。' },
            { text: 'いっ', isCorrect: false, reason: '「一月」不促音化。' },
            { text: 'ひ', isCorrect: false, reason: '不用訓讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「一月」讀「いちがつ」。', trapExplanation: '月份用音讀，不用訓讀。', relatedRules: ['月份的讀法'] },
        sourceItem: { value: 1, kanji: '一月', reading: 'いちがつ' }
    },
    {
        id: 'num_basic_extra_137', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '問價格', stem_zh: '問價格',
        dialogue: { speakerA: 'これはいくらですか？', speakerB: '＿＿百円です。（五）' },
        options: [
            { text: 'ご', isCorrect: true, reason: '正確！「五百」讀「ごひゃく」。' },
            { text: 'いつ', isCorrect: false, reason: '「百」用音讀。' },
            { text: 'いつつ', isCorrect: false, reason: '不用訓讀。' },
            { text: 'ごう', isCorrect: false, reason: '沒有這個讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五百」讀「ごひゃく」。', relatedRules: ['百位數的讀法'] },
        sourceItem: { value: 5, kanji: '五百', reading: 'ごひゃく' }
    },
    {
        id: 'num_basic_extra_138', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: true,
        stem: '鳥が＿＿飛んでいます。（一羽）', stem_zh: '有一隻鳥在飛。',
        options: [
            { text: 'いち', isCorrect: true, reason: '正確！「一羽」讀「いちわ」。' },
            { text: 'いっ', isCorrect: false, reason: '陷阱！「羽」前「一」不促音化（讀いちわ）。' },
            { text: 'ひと', isCorrect: false, reason: '「羽」用音讀。' },
            { text: 'ひとつ', isCorrect: false, reason: '「羽」不用「つ」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「一羽」讀「いちわ」。', trapExplanation: '「一」在「羽」前不促音化。', relatedRules: ['羽的讀法'] },
        sourceItem: { value: 1, kanji: '一羽', reading: 'いちわ' }
    },
    {
        id: 'num_basic_extra_139', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「七」在「七月」中讀作？', stem_zh: '「七」在「七月」中讀作？',
        options: [
            { text: 'しち', isCorrect: true, reason: '正確！「七月」讀「しちがつ」。' },
            { text: 'なな', isCorrect: false, reason: '「七月」讀「しちがつ」。' },
            { text: 'なの', isCorrect: false, reason: '「なの」用於日期。' },
            { text: 'なん', isCorrect: false, reason: '沒有這個讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七月」讀「しちがつ」。', relatedRules: ['月份的讀法'] },
        sourceItem: { value: 7, kanji: '七月', reading: 'しちがつ' }
    },
    {
        id: 'num_basic_extra_140', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '犬は何匹いますか？', speakerB: '＿＿匹います。（二）' },
        options: [
            { text: 'に', isCorrect: true, reason: '正確！「二匹」讀「にひき」。' },
            { text: 'ふた', isCorrect: false, reason: '「匹」用音讀。' },
            { text: 'にっ', isCorrect: false, reason: '「二匹」不促音化。' },
            { text: 'ふ', isCorrect: false, reason: '不用訓讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二匹」讀「にひき」。', relatedRules: ['匹的讀法'] },
        sourceItem: { value: 2, kanji: '二匹', reading: 'にひき' }
    },
    {
        id: 'num_basic_extra_141', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '＿＿月に帰国します。（八）', stem_zh: '八月回國。',
        options: [
            { text: 'はち', isCorrect: true, reason: '正確！「八月」讀「はちがつ」。' },
            { text: 'や', isCorrect: false, reason: '「八月」用音讀。' },
            { text: 'よう', isCorrect: false, reason: '「よう」用於日期。' },
            { text: 'はっ', isCorrect: false, reason: '「八月」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八月」讀「はちがつ」。', relatedRules: ['月份的讀法'] },
        sourceItem: { value: 8, kanji: '八月', reading: 'はちがつ' }
    },
    {
        id: 'num_basic_extra_142', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: true,
        stem: '「六」在「六月」中讀作？', stem_zh: '「六」在「六月」中讀作？',
        options: [
            { text: 'ろく', isCorrect: true, reason: '正確！「六月」讀「ろくがつ」。' },
            { text: 'む', isCorrect: false, reason: '陷阱！「六月」用音讀，不用訓讀。' },
            { text: 'むい', isCorrect: false, reason: '「むい」用於日期。' },
            { text: 'ろっ', isCorrect: false, reason: '「六月」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六月」讀「ろくがつ」。', trapExplanation: '月份用音讀，不用訓讀。', relatedRules: ['月份的讀法'] },
        sourceItem: { value: 6, kanji: '六月', reading: 'ろくがつ' }
    },
    {
        id: 'num_basic_extra_143', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '問距離', stem_zh: '問距離',
        dialogue: { speakerA: '駅まで何分ですか？', speakerB: '＿＿分です。（五）' },
        options: [
            { text: 'ご', isCorrect: true, reason: '正確！「五分」讀「ごふん」。' },
            { text: 'いつ', isCorrect: false, reason: '「分」用音讀。' },
            { text: 'ごっ', isCorrect: false, reason: '「五分」不促音化。' },
            { text: 'いつつ', isCorrect: false, reason: '不用訓讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五分」讀「ごふん」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 5, kanji: '五分', reading: 'ごふん' }
    },
    {
        id: 'num_basic_extra_144', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '猫が＿＿います。（四匹）', stem_zh: '有四隻貓。',
        options: [
            { text: 'よん', isCorrect: true, reason: '正確！「四匹」讀「よんひき」。' },
            { text: 'し', isCorrect: false, reason: '「四匹」讀「よんひき」。' },
            { text: 'よ', isCorrect: false, reason: '需要「よん」。' },
            { text: 'よっ', isCorrect: false, reason: '「四匹」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四匹」讀「よんひき」。', relatedRules: ['匹的讀法'] },
        sourceItem: { value: 4, kanji: '四匹', reading: 'よんひき' }
    },
    {
        id: 'num_basic_extra_145', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「二」在「二月」中讀作？', stem_zh: '「二」在「二月」中讀作？',
        options: [
            { text: 'に', isCorrect: true, reason: '正確！「二月」讀「にがつ」。' },
            { text: 'ふた', isCorrect: false, reason: '「二月」用音讀。' },
            { text: 'ふつ', isCorrect: false, reason: '「ふつ」用於日期。' },
            { text: 'にっ', isCorrect: false, reason: '「二月」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二月」讀「にがつ」。', relatedRules: ['月份的讀法'] },
        sourceItem: { value: 2, kanji: '二月', reading: 'にがつ' }
    },
    {
        id: 'num_basic_extra_146', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: true,
        stem: '問時間', stem_zh: '問時間',
        dialogue: { speakerA: '電車は何分かかりますか？', speakerB: '＿＿分です。（八）' },
        options: [
            { text: 'はっぷん', isCorrect: true, reason: '正確！「八分」讀「はっぷん」。' },
            { text: 'はちふん', isCorrect: false, reason: '陷阱！「分」前「八」促音化。' },
            { text: 'やふん', isCorrect: false, reason: '「分」用音讀。' },
            { text: 'はちぷん', isCorrect: false, reason: '需要促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八分」讀「はっぷん」。', trapExplanation: '「八」在「分」前促音化，且「分」變「ぷん」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 8, kanji: '八分', reading: 'はっぷん' }
    },
    {
        id: 'num_basic_extra_147', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '＿＿月に入学しました。（四）', stem_zh: '四月入學。',
        options: [
            { text: 'し', isCorrect: true, reason: '正確！「四月」讀「しがつ」。' },
            { text: 'よ', isCorrect: false, reason: '「四月」讀「しがつ」。' },
            { text: 'よん', isCorrect: false, reason: '不是「よんがつ」。' },
            { text: 'よっ', isCorrect: false, reason: '沒有這個讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四月」讀「しがつ」。', relatedRules: ['月份的讀法'] },
        sourceItem: { value: 4, kanji: '四月', reading: 'しがつ' }
    },
    {
        id: 'num_basic_extra_148', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「五」在「五月」中讀作？', stem_zh: '「五」在「五月」中讀作？',
        options: [
            { text: 'ご', isCorrect: true, reason: '正確！「五月」讀「ごがつ」。' },
            { text: 'いつ', isCorrect: false, reason: '「五月」用音讀。' },
            { text: 'いつつ', isCorrect: false, reason: '不用訓讀。' },
            { text: 'ごう', isCorrect: false, reason: '沒有這個讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五月」讀「ごがつ」。', relatedRules: ['月份的讀法'] },
        sourceItem: { value: 5, kanji: '五月', reading: 'ごがつ' }
    },
    {
        id: 'num_basic_extra_149', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '問數量', stem_zh: '問數量',
        dialogue: { speakerA: '鉛筆は何本ありますか？', speakerB: '＿＿本あります。（九）' },
        options: [
            { text: 'きゅう', isCorrect: true, reason: '正確！「九本」讀「きゅうほん」。' },
            { text: 'く', isCorrect: false, reason: '「九本」讀「きゅうほん」。' },
            { text: 'ここの', isCorrect: false, reason: '「本」用音讀。' },
            { text: 'きゅっ', isCorrect: false, reason: '「九本」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九本」讀「きゅうほん」。', relatedRules: ['本的讀法'] },
        sourceItem: { value: 9, kanji: '九本', reading: 'きゅうほん' }
    },
    {
        id: 'num_basic_extra_150', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: true,
        stem: '鳥が＿＿飛んでいます。（三羽）', stem_zh: '有三隻鳥在飛。',
        options: [
            { text: 'さん', isCorrect: true, reason: '正確！「三羽」讀「さんわ」或「さんば」。' },
            { text: 'み', isCorrect: false, reason: '陷阱！「羽」用音讀。' },
            { text: 'みっ', isCorrect: false, reason: '不用訓讀。' },
            { text: 'さ', isCorrect: false, reason: '需要「さん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三羽」讀「さんわ」或「さんば」。', trapExplanation: '「羽」用音讀，不用訓讀。', relatedRules: ['羽的讀法'] },
        sourceItem: { value: 3, kanji: '三羽', reading: 'さんわ' }
    },
    {
        id: 'num_basic_extra_151', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「八」在「八月」中讀作？', stem_zh: '「八」在「八月」中讀作？',
        options: [
            { text: 'はち', isCorrect: true, reason: '正確！「八月」讀「はちがつ」。' },
            { text: 'や', isCorrect: false, reason: '「八月」用音讀。' },
            { text: 'よう', isCorrect: false, reason: '「よう」用於日期。' },
            { text: 'はっ', isCorrect: false, reason: '「八月」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八月」讀「はちがつ」。', relatedRules: ['月份的讀法'] },
        sourceItem: { value: 8, kanji: '八月', reading: 'はちがつ' }
    },
    {
        id: 'num_basic_extra_152', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '問冊數', stem_zh: '問冊數',
        dialogue: { speakerA: '本は何冊読みましたか？', speakerB: '＿＿冊読みました。（七）' },
        options: [
            { text: 'なな', isCorrect: true, reason: '正確！「七冊」讀「ななさつ」。' },
            { text: 'しち', isCorrect: false, reason: '「七冊」讀「ななさつ」。' },
            { text: 'なの', isCorrect: false, reason: '「なの」用於日期。' },
            { text: 'なん', isCorrect: false, reason: '沒有這個讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七冊」讀「ななさつ」。', relatedRules: ['冊的讀法'] },
        sourceItem: { value: 7, kanji: '七冊', reading: 'ななさつ' }
    },
    {
        id: 'num_basic_extra_153', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '電話は＿＿回鳴りました。（六）', stem_zh: '電話響了六次。',
        options: [
            { text: 'ろっ', isCorrect: true, reason: '正確！「六回」讀「ろっかい」。' },
            { text: 'ろく', isCorrect: false, reason: '「回」前「六」促音化。' },
            { text: 'む', isCorrect: false, reason: '「回」用音讀。' },
            { text: 'むっ', isCorrect: false, reason: '不用訓讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六回」讀「ろっかい」。', relatedRules: ['回的讀法'] },
        sourceItem: { value: 6, kanji: '六回', reading: 'ろっかい' }
    },
    {
        id: 'num_basic_extra_154', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「九」在「九月」中讀作？', stem_zh: '「九」在「九月」中讀作？',
        options: [
            { text: 'く', isCorrect: true, reason: '正確！「九月」讀「くがつ」。' },
            { text: 'きゅう', isCorrect: false, reason: '「九月」讀「くがつ」。' },
            { text: 'ここの', isCorrect: false, reason: '「ここの」用於日期。' },
            { text: 'きゅ', isCorrect: false, reason: '沒有這個讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九月」讀「くがつ」。', relatedRules: ['月份的讀法'] },
        sourceItem: { value: 9, kanji: '九月', reading: 'くがつ' }
    },
    {
        id: 'num_basic_extra_155', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: true,
        stem: '問時間', stem_zh: '問時間',
        dialogue: { speakerA: '映画は何分ですか？', speakerB: '＿＿分です。（十）' },
        options: [
            { text: 'じゅっぷん', isCorrect: true, reason: '正確！「十分」讀「じゅっぷん」。' },
            { text: 'じゅうふん', isCorrect: false, reason: '陷阱！「分」前「十」促音化。' },
            { text: 'とおふん', isCorrect: false, reason: '「分」用音讀。' },
            { text: 'じっぷん', isCorrect: true, reason: '「じっぷん」也正確。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十分」讀「じゅっぷん」或「じっぷん」。', trapExplanation: '「十」在「分」前促音化，且「分」變「ぷん」。', relatedRules: ['分的讀法'] },
        sourceItem: { value: 10, kanji: '十分', reading: 'じゅっぷん' }
    },
    {
        id: 'num_basic_extra_156', category: 'numbers', subcategory: 'basic', type: 'sentence', isTrap: false,
        stem: '＿＿月に留学します。（十一）', stem_zh: '十一月去留學。',
        options: [
            { text: 'じゅういち', isCorrect: true, reason: '正確！「十一月」讀「じゅういちがつ」。' },
            { text: 'じゅいち', isCorrect: false, reason: '需要「じゅう」。' },
            { text: 'といち', isCorrect: false, reason: '「月」用音讀。' },
            { text: 'じゅっいち', isCorrect: false, reason: '「十一月」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十一月」讀「じゅういちがつ」。', relatedRules: ['月份的讀法'] },
        sourceItem: { value: 11, kanji: '十一月', reading: 'じゅういちがつ' }
    },
    {
        id: 'num_basic_extra_157', category: 'numbers', subcategory: 'basic', type: 'pronunciation', isTrap: false,
        stem: '「十二」的讀法是？', stem_zh: '「十二」的讀法是？',
        options: [
            { text: 'じゅうに', isCorrect: true, reason: '正確！「十二」讀「じゅうに」。' },
            { text: 'とおに', isCorrect: false, reason: '用音讀。' },
            { text: 'じゅに', isCorrect: false, reason: '需要長音。' },
            { text: 'じっに', isCorrect: false, reason: '「十二」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十二」讀「じゅうに」。', relatedRules: ['十位數的讀法'] },
        sourceItem: { value: 12, kanji: '十二', reading: 'じゅうに' }
    },
    {
        id: 'num_basic_extra_158', category: 'numbers', subcategory: 'basic', type: 'dialogue', isTrap: false,
        stem: '問月份', stem_zh: '問月份',
        dialogue: { speakerA: '誕生日は何月ですか？', speakerB: '＿＿月です。（十二）' },
        options: [
            { text: 'じゅうに', isCorrect: true, reason: '正確！「十二月」讀「じゅうにがつ」。' },
            { text: 'とおに', isCorrect: false, reason: '「月」用音讀。' },
            { text: 'じゅに', isCorrect: false, reason: '需要長音。' },
            { text: 'じゅっに', isCorrect: false, reason: '「十二月」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十二月」讀「じゅうにがつ」。', relatedRules: ['月份的讀法'] },
        sourceItem: { value: 12, kanji: '十二月', reading: 'じゅうにがつ' }
    }
];
