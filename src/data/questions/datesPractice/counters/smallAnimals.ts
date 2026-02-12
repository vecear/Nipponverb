import { DatesPracticeQuestion } from '../types';

// 小動物量詞練習題 (〜匹)
// 每個重要數字3題：發音題、單句敘述題、對話題
// 音變規則：1/6/8/10 促音+半濁音(っぴき), 3 濁音(びき)
// 用於：貓、狗、魚、昆蟲、兔子等小動物

export const smallAnimalQuestions: DatesPracticeQuestion[] = [
    // ===== 1匹 的三題（促音+半濁音：いっぴき） =====
    {
        id: 'animal_1_pron',
        category: 'counters',
        subcategory: 'smallAnimals',
        type: 'pronunciation',
        isTrap: true,
        stem: '「一匹」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「一匹」的正確讀音是？',
        options: [
            { text: 'いっぴき', isCorrect: true, reason: '正確！「一匹{いっぴき}」發生促音化+半濁音化，讀作「いっぴき」。' },
            { text: 'いちひき', isCorrect: false, reason: '陷阱！「ひ」在促音「っ」後必須變為半濁音「ぴ」。' },
            { text: 'いちびき', isCorrect: false, reason: '1匹{いっぴき}使用半濁音「ぴ」，不是濁音「び」。' },
            { text: 'いっひき', isCorrect: false, reason: '促音後不能接「ひ」，必須變為「ぴ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一匹{いっぴき}」讀作「いっぴき」。音變規則與「本{ほん}」相同：促音+半濁音。',
            trapExplanation: '這是陷阱題。h-p轉換規律適用於所有「は行」開頭的量詞。',
            relatedRules: ['h-p轉換規律', '促音化規則', '1/6/8/10的特殊音變']
        },
        sourceItem: { value: 1, kanji: '一匹', reading: 'いっぴき' }
    },
    {
        id: 'animal_1_sent',
        category: 'counters',
        subcategory: 'smallAnimals',
        type: 'sentence',
        isTrap: true,
        stem: '猫を＿＿飼っています。',
        stem_zh: '我養了一隻貓。',
        options: [
            { text: 'いちひき', isCorrect: false, reason: '陷阱！1匹{いっぴき}需要促音化+半濁音化。' },
            { text: 'いっぴき', isCorrect: true, reason: '正確！「猫を一匹{いっぴき}飼っています」表示「養了一隻貓」。' },
            { text: 'ひとつ', isCorrect: false, reason: '動物應使用專用量詞「匹{ひき}」，不用「つ」。' },
            { text: 'いちびき', isCorrect: false, reason: '1匹{いっぴき}使用半濁音「ぴ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「猫」使用量詞「匹{ひき}」來計數。',
            trapExplanation: '1匹{いっぴき}固定讀「いっぴき」，是常見的寵物話題。',
            relatedRules: ['量詞「匹{ひき}」的使用', '寵物表達']
        },
        sourceItem: { value: 1, kanji: '一匹', reading: 'いっぴき' }
    },
    {
        id: 'animal_1_dial',
        category: 'counters',
        subcategory: 'smallAnimals',
        type: 'dialogue',
        isTrap: false,
        stem: 'ペットは何匹いますか？',
        stem_zh: '你有幾隻寵物？',
        dialogue: {
            speakerA: 'ペットは何匹いますか？',
            speakerB: '犬が＿＿います。（一隻）'
        },
        options: [
            { text: 'いちひき', isCorrect: false, reason: '1匹{いっぴき}需要促音化+半濁音化。' },
            { text: 'いっぴき', isCorrect: true, reason: '正確！有一隻狗。' },
            { text: 'ひとり', isCorrect: false, reason: '「人{にん}」用於人，動物用「匹{ひき}」。' },
            { text: 'いっぽん', isCorrect: false, reason: '「本{ほん}」用於細長物，動物用「匹{ひき}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「犬」使用量詞「匹{ひき}」。小型犬用「匹{ひき}」，大型犬有時用「頭{とう}」。',
            relatedRules: ['量詞「匹{ひき}」的使用', '何匹{なんびき}的質問與回答']
        },
        sourceItem: { value: 1, kanji: '一匹', reading: 'いっぴき' }
    },

    // ===== 2匹 的三題（無音變：にひき） =====
    {
        id: 'animal_2_pron',
        category: 'counters',
        subcategory: 'smallAnimals',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二匹」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「二匹」的正確讀音是？',
        options: [
            { text: 'にひき', isCorrect: true, reason: '正確！「二匹{にひき}」無音變，讀作「にひき」。' },
            { text: 'にぴき', isCorrect: false, reason: '2匹{にひき}不發生半濁音化。' },
            { text: 'にびき', isCorrect: false, reason: '2匹{にひき}不發生濁音化。' },
            { text: 'ふたひき', isCorrect: false, reason: '量詞「匹{ひき}」使用音讀數字「に」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二匹{にひき}」讀作「にひき」，無音變。數字2不觸發任何音變。',
            relatedRules: ['量詞「匹{ひき}」的音變規則', '無音變の數字']
        },
        sourceItem: { value: 2, kanji: '二匹', reading: 'にひき' }
    },
    {
        id: 'animal_2_sent',
        category: 'counters',
        subcategory: 'smallAnimals',
        type: 'sentence',
        isTrap: false,
        stem: '金魚を＿＿買いました。',
        stem_zh: '我買了兩條金魚。',
        options: [
            { text: 'にぴき', isCorrect: false, reason: '2匹{にひき}無音變，保持「ひ」。' },
            { text: 'にひき', isCorrect: true, reason: '正確！「金魚を二匹{にひき}」表示「兩條金魚」。' },
            { text: 'ふたつ', isCorrect: false, reason: '魚是動物，應使用「匹{ひき}」。' },
            { text: 'にびき', isCorrect: false, reason: '2匹{にひき}無濁音化。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「金魚」（金魚）使用量詞「匹{ひき}」。',
            relatedRules: ['量詞「匹{ひき}」的使用', '魚の計數']
        },
        sourceItem: { value: 2, kanji: '二匹', reading: 'にひき' }
    },
    {
        id: 'animal_2_dial',
        category: 'counters',
        subcategory: 'smallAnimals',
        type: 'dialogue',
        isTrap: false,
        stem: '虫は何匹いましたか？',
        stem_zh: '有幾隻蟲？',
        dialogue: {
            speakerA: '虫は何匹いましたか？',
            speakerB: '＿＿いました。（兩隻）'
        },
        options: [
            { text: 'にぴき', isCorrect: false, reason: '2匹{にひき}無音變。' },
            { text: 'にひき', isCorrect: true, reason: '正確！有兩隻蟲。' },
            { text: 'ふたつ', isCorrect: false, reason: '昆蟲是動物，用「匹{ひき}」。' },
            { text: 'にびき', isCorrect: false, reason: '2匹{にひき}無濁音化。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「虫」（昆蟲）使用量詞「匹{ひき}」。',
            relatedRules: ['量詞「匹{ひき}」的使用', '昆蟲の計數']
        },
        sourceItem: { value: 2, kanji: '二匹', reading: 'にひき' }
    },

    // ===== 3匹 的三題（濁音化：さんびき） =====
    {
        id: 'animal_3_pron',
        category: 'counters',
        subcategory: 'smallAnimals',
        type: 'pronunciation',
        isTrap: true,
        stem: '「三匹」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「三匹」的正確讀音是？',
        options: [
            { text: 'さんびき', isCorrect: true, reason: '正確！「三匹{さんびき}」發生濁音化，讀作「さんびき」。' },
            { text: 'さんひき', isCorrect: false, reason: '陷阱！撥音「ん」後的「ひ」變為濁音「び」。' },
            { text: 'さんぴき', isCorrect: false, reason: '3匹{さんびき}使用濁音「び」，不是半濁音「ぴ」。' },
            { text: 'みひき', isCorrect: false, reason: '量詞「匹{ひき}」用音讀「さん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三匹{さんびき}」讀作「さんびき」。撥音「ん」後的「h」音變為濁音「b」。',
            trapExplanation: '這是陷阱題。音變規則與「三本{さんぼん}」相同。',
            relatedRules: ['h-b轉換規律', '濁音化規則', '3的特殊音變']
        },
        sourceItem: { value: 3, kanji: '三匹', reading: 'さんびき' }
    },
    {
        id: 'animal_3_sent',
        category: 'counters',
        subcategory: 'smallAnimals',
        type: 'sentence',
        isTrap: true,
        stem: '子犬が＿＿生まれました。',
        stem_zh: '生了三隻小狗。',
        options: [
            { text: 'さんひき', isCorrect: false, reason: '陷阱！3匹{さんびき}需要濁音化。' },
            { text: 'さんびき', isCorrect: true, reason: '正確！「子犬が三匹{さんびき}」表示「三隻小狗」。' },
            { text: 'さんぴき', isCorrect: false, reason: '3匹{さんびき}使用濁音「び」。' },
            { text: 'みっつ', isCorrect: false, reason: '動物應使用「匹{ひき}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「子犬」（小狗）使用量詞「匹{ひき}」。',
            trapExplanation: '3匹{さんびき}固定讀「さんびき」，撥音後必須濁音化。',
            relatedRules: ['量詞「匹{ひき}」的使用', '動物出生']
        },
        sourceItem: { value: 3, kanji: '三匹', reading: 'さんびき' }
    },
    {
        id: 'animal_3_dial',
        category: 'counters',
        subcategory: 'smallAnimals',
        type: 'dialogue',
        isTrap: false,
        stem: '蝶々は何匹見ましたか？',
        stem_zh: '你看到幾隻蝴蝶？',
        dialogue: {
            speakerA: '蝶々は何匹見ましたか？',
            speakerB: '＿＿見ました。（三隻）'
        },
        options: [
            { text: 'さんひき', isCorrect: false, reason: '3匹{さんびき}需要濁音化。' },
            { text: 'さんびき', isCorrect: true, reason: '正確！看到三隻蝴蝶。' },
            { text: 'さんぴき', isCorrect: false, reason: '3匹{さんびき}使用濁音「び」。' },
            { text: 'みっつ', isCorrect: false, reason: '蝴蝶是昆蟲，用「匹{ひき}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「蝶々」（蝴蝶）使用量詞「匹{ひき}」。',
            relatedRules: ['量詞「匹{ひき}」的使用', '昆蟲觀察']
        },
        sourceItem: { value: 3, kanji: '三匹', reading: 'さんびき' }
    },

    // ===== 6匹 的三題（促音+半濁音：ろっぴき） =====
    {
        id: 'animal_6_pron',
        category: 'counters',
        subcategory: 'smallAnimals',
        type: 'pronunciation',
        isTrap: true,
        stem: '「六匹」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「六匹」的正確讀音是？',
        options: [
            { text: 'ろっぴき', isCorrect: true, reason: '正確！「六匹{ろっぴき}」發生促音化+半濁音化，讀作「ろっぴき」。' },
            { text: 'ろくひき', isCorrect: false, reason: '陷阱！6匹{ろっぴき}需要促音化+半濁音化。' },
            { text: 'ろくびき', isCorrect: false, reason: '6匹{ろっぴき}使用促音+半濁音，不是濁音。' },
            { text: 'ろっひき', isCorrect: false, reason: '促音後不能接「ひ」，必須變為「ぴ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六匹{ろっぴき}」讀作「ろっぴき」。音變規則與1/8/10相同。',
            trapExplanation: '這是陷阱題。數字6搭配「は行」量詞時必定促音化+半濁音化。',
            relatedRules: ['h-p轉換規律', '促音化規則', '6的音變模式']
        },
        sourceItem: { value: 6, kanji: '六匹', reading: 'ろっぴき' }
    },
    {
        id: 'animal_6_sent',
        category: 'counters',
        subcategory: 'smallAnimals',
        type: 'sentence',
        isTrap: true,
        stem: 'ウサギを＿＿飼っています。',
        stem_zh: '我養了六隻兔子。',
        options: [
            { text: 'ろくひき', isCorrect: false, reason: '陷阱！6匹{ろっぴき}需要促音化+半濁音化。' },
            { text: 'ろっぴき', isCorrect: true, reason: '正確！「ウサギを六匹{ろっぴき}」表示「六隻兔子」。' },
            { text: 'ろくびき', isCorrect: false, reason: '6匹{ろっぴき}使用促音+半濁音。' },
            { text: 'むっつ', isCorrect: false, reason: '兔子是動物，應使用「匹{ひき}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ウサギ」（兔子）使用量詞「匹{ひき}」。',
            trapExplanation: '6匹{ろっぴき}固定讀「ろっぴき」。',
            relatedRules: ['量詞「匹{ひき}」的使用', '寵物飼養']
        },
        sourceItem: { value: 6, kanji: '六匹', reading: 'ろっぴき' }
    },
    {
        id: 'animal_6_dial',
        category: 'counters',
        subcategory: 'smallAnimals',
        type: 'dialogue',
        isTrap: false,
        stem: '池に鯉は何匹いますか？',
        stem_zh: '池塘裡有幾條鯉魚？',
        dialogue: {
            speakerA: '池に鯉は何匹いますか？',
            speakerB: '＿＿います。（六條）'
        },
        options: [
            { text: 'ろくひき', isCorrect: false, reason: '6匹{ろっぴき}需要促音化+半濁音化。' },
            { text: 'ろっぴき', isCorrect: true, reason: '正確！池塘裡有六條鯉魚。' },
            { text: 'ろくびき', isCorrect: false, reason: '6匹{ろっぴき}使用促音+半濁音。' },
            { text: 'むっつ', isCorrect: false, reason: '魚是動物，用「匹{ひき}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「鯉」（鯉魚）使用量詞「匹{ひき}」。',
            relatedRules: ['量詞「匹{ひき}」的使用', '魚の計數']
        },
        sourceItem: { value: 6, kanji: '六匹', reading: 'ろっぴき' }
    },

    // ===== 10匹 的三題（促音+半濁音：じゅっぴき） =====
    {
        id: 'animal_10_pron',
        category: 'counters',
        subcategory: 'smallAnimals',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十匹」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「十匹」的正確讀音是？',
        options: [
            { text: 'じゅっぴき', isCorrect: true, reason: '正確！「十匹{じゅっぴき}」發生促音化+半濁音化，讀作「じゅっぴき」。' },
            { text: 'じゅうひき', isCorrect: false, reason: '陷阱！10匹{じゅっぴき}需要促音化+半濁音化。' },
            { text: 'じゅうびき', isCorrect: false, reason: '10匹{じゅっぴき}使用促音+半濁音，不是濁音。' },
            { text: 'とおひき', isCorrect: false, reason: '量詞「匹{ひき}」用音讀「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十匹{じゅっぴき}」讀作「じゅっぴき」。音變規則與1/6/8相同。',
            trapExplanation: '這是陷阱題。數字10搭配「は行」量詞時必定促音化+半濁音化。',
            relatedRules: ['h-p轉換規律', '促音化規則', '10的音變模式']
        },
        sourceItem: { value: 10, kanji: '十匹', reading: 'じゅっぴき' }
    },
    {
        id: 'animal_10_sent',
        category: 'counters',
        subcategory: 'smallAnimals',
        type: 'sentence',
        isTrap: true,
        stem: 'アリが＿＿いました。',
        stem_zh: '有十隻螞蟻。',
        options: [
            { text: 'じゅうひき', isCorrect: false, reason: '陷阱！10匹{じゅっぴき}需要促音化+半濁音化。' },
            { text: 'じゅっぴき', isCorrect: true, reason: '正確！「アリが十匹{じゅっぴき}」表示「有十隻螞蟻」。' },
            { text: 'じゅうびき', isCorrect: false, reason: '10匹{じゅっぴき}使用促音+半濁音。' },
            { text: 'とお', isCorrect: false, reason: '螞蟻是昆蟲，應使用「匹{ひき}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「アリ」（螞蟻）使用量詞「匹{ひき}」。',
            trapExplanation: '10匹{じゅっぴき}固定讀「じゅっぴき」。',
            relatedRules: ['量詞「匹{ひき}」的使用', '昆蟲の計數']
        },
        sourceItem: { value: 10, kanji: '十匹', reading: 'じゅっぴき' }
    },
    {
        id: 'animal_10_dial',
        category: 'counters',
        subcategory: 'smallAnimals',
        type: 'dialogue',
        isTrap: false,
        stem: '水族館で魚は何匹見ましたか？',
        stem_zh: '在水族館看到幾條魚？',
        dialogue: {
            speakerA: '水族館で熱帯魚は何匹見ましたか？',
            speakerB: '少なくとも＿＿は見ました。（十條）'
        },
        options: [
            { text: 'じゅうひき', isCorrect: false, reason: '10匹{じゅっぴき}需要促音化+半濁音化。' },
            { text: 'じゅっぴき', isCorrect: true, reason: '正確！至少看到十條熱帶魚。' },
            { text: 'じゅうびき', isCorrect: false, reason: '10匹{じゅっぴき}使用促音+半濁音。' },
            { text: 'とお', isCorrect: false, reason: '魚用「匹{ひき}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「熱帯魚」（熱帶魚）使用量詞「匹{ひき}」。',
            relatedRules: ['量詞「匹{ひき}」的使用', '水族館參觀']
        },
        sourceItem: { value: 10, kanji: '十匹', reading: 'じゅっぴき' }
    },

    // ===== 4匹 的三題（無音變：よんひき） =====
    {
        id: 'animal_4_pron', category: 'counters', subcategory: 'smallAnimals', type: 'pronunciation', isTrap: false,
        stem: '「四匹」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「四匹」的正確讀音是？',
        options: [
            { text: 'よんひき', isCorrect: true, reason: '正確！「四匹」無音變，讀作「よんひき」。' },
            { text: 'しひき', isCorrect: false, reason: '「し」有死的意思，避諱，用「よん」。' },
            { text: 'よんびき', isCorrect: false, reason: '4匹不發生濁音化。' },
            { text: 'よっぴき', isCorrect: false, reason: '4匹不發生促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四匹」讀作「よんひき」，無音變。使用「よん」避免「し」的不吉利聯想。', relatedRules: ['量詞「匹」的音變規則', '數字4的讀法'] },
        sourceItem: { value: 4, kanji: '四匹', reading: 'よんひき' }
    },
    {
        id: 'animal_4_sent', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: false,
        stem: 'ハムスターを＿＿飼っています。', stem_zh: '我養了四隻倉鼠。',
        options: [
            { text: 'しひき', isCorrect: false, reason: '使用「よん」不是「し」。' },
            { text: 'よんひき', isCorrect: true, reason: '正確！四隻倉鼠。' },
            { text: 'よっつ', isCorrect: false, reason: '倉鼠是動物，用「匹」。' },
            { text: 'よんびき', isCorrect: false, reason: '4匹不發生濁音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ハムスター」是小動物，使用量詞「匹」。', relatedRules: ['量詞「匹」的使用', '寵物の計數'] },
        sourceItem: { value: 4, kanji: '四匹', reading: 'よんひき' }
    },
    {
        id: 'animal_4_dial', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: false,
        stem: '貓的數量', stem_zh: '貓的數量',
        dialogue: { speakerA: '家に猫は何匹いますか？', speakerB: '＿＿います。（四隻）' },
        options: [
            { text: 'しひき', isCorrect: false, reason: '使用「よん」。' },
            { text: 'よんひき', isCorrect: true, reason: '正確！四隻貓。' },
            { text: 'よっつ', isCorrect: false, reason: '貓是動物，用「匹」。' },
            { text: 'よんぴき', isCorrect: false, reason: '4匹無音變。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「猫」使用量詞「匹」。', relatedRules: ['量詞「匹」的使用', '寵物の計數'] },
        sourceItem: { value: 4, kanji: '四匹', reading: 'よんひき' }
    },

    // ===== 5匹 的三題（無音變：ごひき） =====
    {
        id: 'animal_5_pron', category: 'counters', subcategory: 'smallAnimals', type: 'pronunciation', isTrap: false,
        stem: '「五匹」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「五匹」的正確讀音是？',
        options: [
            { text: 'ごひき', isCorrect: true, reason: '正確！「五匹」無音變，讀作「ごひき」。' },
            { text: 'ごびき', isCorrect: false, reason: '5匹不發生濁音化。' },
            { text: 'ごっぴき', isCorrect: false, reason: '5匹不發生促音化。' },
            { text: 'いつひき', isCorrect: false, reason: '量詞「匹」使用音讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五匹」讀作「ごひき」，無音變。', relatedRules: ['量詞「匹」的音變規則', '無音變の數字'] },
        sourceItem: { value: 5, kanji: '五匹', reading: 'ごひき' }
    },
    {
        id: 'animal_5_sent', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: false,
        stem: '池に鯉が＿＿泳いでいます。', stem_zh: '池塘裡有五條鯉魚在游泳。',
        options: [
            { text: 'ごびき', isCorrect: false, reason: '5匹不發生濁音化。' },
            { text: 'ごひき', isCorrect: true, reason: '正確！五條鯉魚。' },
            { text: 'いつつ', isCorrect: false, reason: '鯉魚是動物，用「匹」。' },
            { text: 'ごっぴき', isCorrect: false, reason: '5匹不發生促音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「鯉」使用量詞「匹」。', relatedRules: ['量詞「匹」的使用', '魚の計數'] },
        sourceItem: { value: 5, kanji: '五匹', reading: 'ごひき' }
    },
    {
        id: 'animal_5_dial', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: false,
        stem: '蜜蜂數量', stem_zh: '蜜蜂數量',
        dialogue: { speakerA: '蜂は何匹いましたか？', speakerB: '＿＿いました。（五隻）' },
        options: [
            { text: 'ごびき', isCorrect: false, reason: '5匹不發生濁音化。' },
            { text: 'ごひき', isCorrect: true, reason: '正確！五隻蜜蜂。' },
            { text: 'いつつ', isCorrect: false, reason: '蜜蜂是昆蟲，用「匹」。' },
            { text: 'いつひき', isCorrect: false, reason: '使用「ご」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「蜂」使用量詞「匹」。', relatedRules: ['量詞「匹」的使用', '昆蟲の計數'] },
        sourceItem: { value: 5, kanji: '五匹', reading: 'ごひき' }
    },

    // ===== 7匹 的三題（無音變：ななひき） =====
    {
        id: 'animal_7_pron', category: 'counters', subcategory: 'smallAnimals', type: 'pronunciation', isTrap: false,
        stem: '「七匹」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「七匹」的正確讀音是？',
        options: [
            { text: 'ななひき', isCorrect: true, reason: '正確！「七匹」無音變，讀作「ななひき」。' },
            { text: 'しちひき', isCorrect: false, reason: '「しち」較少使用，通常用「なな」。' },
            { text: 'ななびき', isCorrect: false, reason: '7匹不發生濁音化。' },
            { text: 'ななぴき', isCorrect: false, reason: '7匹不發生半濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七匹」讀作「ななひき」，無音變。', relatedRules: ['量詞「匹」的音變規則', '數字7的讀法'] },
        sourceItem: { value: 7, kanji: '七匹', reading: 'ななひき' }
    },
    {
        id: 'animal_7_sent', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: false,
        stem: 'テントウムシを＿＿見つけました。', stem_zh: '找到了七隻瓢蟲。',
        options: [
            { text: 'しちひき', isCorrect: false, reason: '通常用「なな」。' },
            { text: 'ななひき', isCorrect: true, reason: '正確！七隻瓢蟲。' },
            { text: 'ななつ', isCorrect: false, reason: '瓢蟲是昆蟲，用「匹」。' },
            { text: 'ななびき', isCorrect: false, reason: '7匹不發生濁音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「テントウムシ」使用量詞「匹」。', relatedRules: ['量詞「匹」的使用', '昆蟲の計數'] },
        sourceItem: { value: 7, kanji: '七匹', reading: 'ななひき' }
    },
    {
        id: 'animal_7_dial', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: false,
        stem: '金魚數量', stem_zh: '金魚數量',
        dialogue: { speakerA: '金魚は何匹いますか？', speakerB: '＿＿います。（七條）' },
        options: [
            { text: 'しちひき', isCorrect: false, reason: '通常用「なな」。' },
            { text: 'ななひき', isCorrect: true, reason: '正確！七條金魚。' },
            { text: 'ななつ', isCorrect: false, reason: '金魚用「匹」。' },
            { text: 'ななぴき', isCorrect: false, reason: '7匹無音變。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「金魚」使用量詞「匹」。', relatedRules: ['量詞「匹」的使用', '魚の計數'] },
        sourceItem: { value: 7, kanji: '七匹', reading: 'ななひき' }
    },

    // ===== 8匹 的三題（促音+半濁音：はっぴき） =====
    {
        id: 'animal_8_pron', category: 'counters', subcategory: 'smallAnimals', type: 'pronunciation', isTrap: true,
        stem: '「八匹」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「八匹」的正確讀音是？',
        options: [
            { text: 'はっぴき', isCorrect: true, reason: '正確！「八匹」發生促音化+半濁音化，讀作「はっぴき」。' },
            { text: 'はちひき', isCorrect: false, reason: '陷阱！8匹需要促音化+半濁音化。' },
            { text: 'はちびき', isCorrect: false, reason: '8匹使用促音+半濁音，不是濁音。' },
            { text: 'はっひき', isCorrect: false, reason: '促音後不能接「ひ」，必須變為「ぴ」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八匹」讀作「はっぴき」。音變規則與1/6/10相同。', trapExplanation: '這是陷阱題。數字8搭配「は行」量詞時必定促音化+半濁音化。', relatedRules: ['h-p轉換規律', '促音化規則', '8的音變模式'] },
        sourceItem: { value: 8, kanji: '八匹', reading: 'はっぴき' }
    },
    {
        id: 'animal_8_sent', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: true,
        stem: 'カエルが＿＿鳴いています。', stem_zh: '有八隻青蛙在叫。',
        options: [
            { text: 'はちひき', isCorrect: false, reason: '陷阱！8匹需要促音化+半濁音化。' },
            { text: 'はっぴき', isCorrect: true, reason: '正確！八隻青蛙。' },
            { text: 'やっつ', isCorrect: false, reason: '青蛙是動物，用「匹」。' },
            { text: 'はちびき', isCorrect: false, reason: '8匹使用促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「カエル」使用量詞「匹」。8匹需要促音化+半濁音化。', relatedRules: ['量詞「匹」的使用', '促音化規則'] },
        sourceItem: { value: 8, kanji: '八匹', reading: 'はっぴき' }
    },
    {
        id: 'animal_8_dial', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: false,
        stem: '蜘蛛數量', stem_zh: '蜘蛛數量',
        dialogue: { speakerA: '蜘蛛は何匹見ましたか？', speakerB: '＿＿見ました。（八隻）' },
        options: [
            { text: 'はちひき', isCorrect: false, reason: '8匹需要促音化+半濁音化。' },
            { text: 'はっぴき', isCorrect: true, reason: '正確！八隻蜘蛛。' },
            { text: 'やっつ', isCorrect: false, reason: '蜘蛛用「匹」。' },
            { text: 'はちびき', isCorrect: false, reason: '8匹使用促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「蜘蛛」使用量詞「匹」。', relatedRules: ['量詞「匹」的使用', '昆蟲の計數'] },
        sourceItem: { value: 8, kanji: '八匹', reading: 'はっぴき' }
    },

    // ===== 9匹 的三題（無音變：きゅうひき） =====
    {
        id: 'animal_9_pron', category: 'counters', subcategory: 'smallAnimals', type: 'pronunciation', isTrap: false,
        stem: '「九匹」の正{ただ}しい読{よ}み方{かた}はどれですか。', stem_zh: '「九匹」的正確讀音是？',
        options: [
            { text: 'きゅうひき', isCorrect: true, reason: '正確！「九匹」無音變，讀作「きゅうひき」。' },
            { text: 'くひき', isCorrect: false, reason: '量詞「匹」使用音讀「きゅう」。' },
            { text: 'きゅうびき', isCorrect: false, reason: '9匹不發生濁音化。' },
            { text: 'きゅっぴき', isCorrect: false, reason: '9匹不發生促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九匹」讀作「きゅうひき」，無音變。', relatedRules: ['量詞「匹」的音變規則', '無音變の數字'] },
        sourceItem: { value: 9, kanji: '九匹', reading: 'きゅうひき' }
    },
    {
        id: 'animal_9_sent', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: false,
        stem: 'ネズミが＿＿捕まりました。', stem_zh: '抓到了九隻老鼠。',
        options: [
            { text: 'くひき', isCorrect: false, reason: '使用「きゅう」。' },
            { text: 'きゅうひき', isCorrect: true, reason: '正確！九隻老鼠。' },
            { text: 'ここのつ', isCorrect: false, reason: '老鼠是動物，用「匹」。' },
            { text: 'きゅうびき', isCorrect: false, reason: '9匹不發生濁音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ネズミ」使用量詞「匹」。', relatedRules: ['量詞「匹」的使用', '動物の計數'] },
        sourceItem: { value: 9, kanji: '九匹', reading: 'きゅうひき' }
    },
    {
        id: 'animal_9_dial', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: false,
        stem: '熱帶魚數量', stem_zh: '熱帶魚數量',
        dialogue: { speakerA: '熱帯魚は何匹いますか？', speakerB: '＿＿います。（九條）' },
        options: [
            { text: 'くひき', isCorrect: false, reason: '使用「きゅう」。' },
            { text: 'きゅうひき', isCorrect: true, reason: '正確！九條熱帶魚。' },
            { text: 'ここのつ', isCorrect: false, reason: '熱帶魚用「匹」。' },
            { text: 'きゅうぴき', isCorrect: false, reason: '9匹無音變。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「熱帯魚」使用量詞「匹」。', relatedRules: ['量詞「匹」的使用', '魚の計數'] },
        sourceItem: { value: 9, kanji: '九匹', reading: 'きゅうひき' }
    },

    // ===== 補充：疑問詞「何匹」的題目 =====
    {
        id: 'animal_nan_pron',
        category: 'counters',
        subcategory: 'smallAnimals',
        type: 'pronunciation',
        isTrap: true,
        stem: '「何匹」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「何匹」的正確讀音是？',
        options: [
            { text: 'なんびき', isCorrect: true, reason: '正確！「何匹{なんびき}」發生濁音化，讀作「なんびき」。' },
            { text: 'なんひき', isCorrect: false, reason: '陷阱！「何{なん}」的撥音「ん」使「ひ」變為濁音「び」。' },
            { text: 'なんぴき', isCorrect: false, reason: '「何匹{なんびき}」使用濁音「び」，不是半濁音「ぴ」。' },
            { text: 'なにひき', isCorrect: false, reason: '搭配量詞時，「何」讀作「なん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何匹{なんびき}」讀作「なんびき」。疑問詞「何{なん}」的撥音「ん」引發濁音化。',
            trapExplanation: '這是陷阱題。撥音「ん」後的「h」音變為濁音「b」，與「三匹{さんびき}」規則相同。',
            relatedRules: ['疑問詞的音變', '「何{なん}＋量詞」的讀法']
        },
        sourceItem: { value: '?', kanji: '何匹', reading: 'なんびき' }
    },

    // ===== 擴展數字題目 =====
    {
        id: 'animal_11_sent', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: true,
        stem: 'メダカを＿＿買いました。', stem_zh: '買了十一條稀鯽。',
        options: [
            { text: 'じゅういちひき', isCorrect: false, reason: '陷阱！11匹需要促音化+半濁音化。' },
            { text: 'じゅういっぴき', isCorrect: true, reason: '正確！十一條稀鯽。' },
            { text: 'じゅういちびき', isCorrect: false, reason: '11匹使用促音+半濁音。' },
            { text: 'といっぴき', isCorrect: false, reason: '使用「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '11匹讀作「じゅういっぴき」，個位數1觸發促音化+半濁音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 11, kanji: '十一匹', reading: 'じゅういっぴき' }
    },
    {
        id: 'animal_12_dial', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: false,
        stem: '養殖場魚數', stem_zh: '養殖場魚數',
        dialogue: { speakerA: '養殖場に魚は何匹いますか？', speakerB: '約＿＿います。（十二條）' },
        options: [
            { text: 'じゅうにぴき', isCorrect: false, reason: '12匹不促音化。' },
            { text: 'じゅうにひき', isCorrect: true, reason: '正確！約十二條魚。' },
            { text: 'じゅうにびき', isCorrect: false, reason: '12匹不濁音化。' },
            { text: 'とうにひき', isCorrect: false, reason: '使用「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '12匹讀作「じゅうにひき」，無音變。', relatedRules: ['量詞「匹」的使用', '複合數字'] },
        sourceItem: { value: 12, kanji: '十二匹', reading: 'じゅうにひき' }
    },
    {
        id: 'animal_13_sent', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: true,
        stem: 'カブトムシを＿＿捕まえました。', stem_zh: '抓到了十三隻獨角仙。',
        options: [
            { text: 'じゅうさんひき', isCorrect: false, reason: '陷阱！13匹需要濁音化。' },
            { text: 'じゅうさんびき', isCorrect: true, reason: '正確！十三隻獨角仙。' },
            { text: 'じゅうさんぴき', isCorrect: false, reason: '13匹使用濁音。' },
            { text: 'じゅうみひき', isCorrect: false, reason: '使用「さん」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '13匹讀作「じゅうさんびき」，個位數3觸發濁音化。', relatedRules: ['濁音化規則', '複合數字的讀法'] },
        sourceItem: { value: 13, kanji: '十三匹', reading: 'じゅうさんびき' }
    },
    {
        id: 'animal_16_dial', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: true,
        stem: '蝴蝶觀察', stem_zh: '蝴蝶觀察',
        dialogue: { speakerA: '蝶は何匹見ましたか？', speakerB: '＿＿見ました。（十六隻）' },
        options: [
            { text: 'じゅうろくひき', isCorrect: false, reason: '陷阱！16匹需要促音化+半濁音化。' },
            { text: 'じゅうろっぴき', isCorrect: true, reason: '正確！十六隻蝴蝶。' },
            { text: 'じゅうろくびき', isCorrect: false, reason: '16匹使用促音+半濁音。' },
            { text: 'じゅうむっぴき', isCorrect: false, reason: '使用「ろく」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '16匹讀作「じゅうろっぴき」，個位數6觸發促音化+半濁音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 16, kanji: '十六匹', reading: 'じゅうろっぴき' }
    },
    {
        id: 'animal_18_sent', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: true,
        stem: 'ザリガニを＿＿捕まえました。', stem_zh: '抓到了十八隻小龍蝦。',
        options: [
            { text: 'じゅうはちひき', isCorrect: false, reason: '陷阱！18匹需要促音化+半濁音化。' },
            { text: 'じゅうはっぴき', isCorrect: true, reason: '正確！十八隻小龍蝦。' },
            { text: 'じゅうはちびき', isCorrect: false, reason: '18匹使用促音+半濁音。' },
            { text: 'じゅうやっぴき', isCorrect: false, reason: '使用「はち」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '18匹讀作「じゅうはっぴき」，個位數8觸發促音化+半濁音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 18, kanji: '十八匹', reading: 'じゅうはっぴき' }
    },
    {
        id: 'animal_20_dial', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: true,
        stem: '倉鼠繁殖', stem_zh: '倉鼠繁殖',
        dialogue: { speakerA: 'ハムスターは何匹生まれましたか？', speakerB: '＿＿生まれました。（二十隻）' },
        options: [
            { text: 'にじゅうひき', isCorrect: false, reason: '陷阱！20匹需要促音化+半濁音化。' },
            { text: 'にじゅっぴき', isCorrect: true, reason: '正確！二十隻倉鼠。' },
            { text: 'にじゅうびき', isCorrect: false, reason: '20匹使用促音+半濁音。' },
            { text: 'はたひき', isCorrect: false, reason: '使用「にじゅう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '20匹讀作「にじゅっぴき」，十位數10觸發促音化+半濁音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 20, kanji: '二十匹', reading: 'にじゅっぴき' }
    },
    {
        id: 'animal_23_sent', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: true,
        stem: 'ミジンコを＿＿観察しました。', stem_zh: '觀察了二十三隻水蚤。',
        options: [
            { text: 'にじゅうさんひき', isCorrect: false, reason: '陷阱！23匹需要濁音化。' },
            { text: 'にじゅうさんびき', isCorrect: true, reason: '正確！二十三隻水蚤。' },
            { text: 'にじゅうさんぴき', isCorrect: false, reason: '23匹使用濁音。' },
            { text: 'にじゅうみひき', isCorrect: false, reason: '使用「さん」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '23匹讀作「にじゅうさんびき」，個位數3觸發濁音化。', relatedRules: ['濁音化規則', '複合數字的讀法'] },
        sourceItem: { value: 23, kanji: '二十三匹', reading: 'にじゅうさんびき' }
    },
    {
        id: 'animal_30_dial', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: true,
        stem: '蜂巢蜜蜂', stem_zh: '蜂巢蜜蜂',
        dialogue: { speakerA: '蜂の巣には何匹いますか？', speakerB: '約＿＿です。（三十隻）' },
        options: [
            { text: 'さんじゅうひき', isCorrect: false, reason: '陷阱！30匹需要促音化+半濁音化。' },
            { text: 'さんじゅっぴき', isCorrect: true, reason: '正確！約三十隻蜜蜂。' },
            { text: 'さんじゅうびき', isCorrect: false, reason: '30匹使用促音+半濁音。' },
            { text: 'みそひき', isCorrect: false, reason: '使用「さんじゅう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '30匹讀作「さんじゅっぴき」，十位數10觸發促音化+半濁音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 30, kanji: '三十匹', reading: 'さんじゅっぴき' }
    },
    {
        id: 'animal_50_sent', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: true,
        stem: 'アリが＿＿行列していました。', stem_zh: '有五十隻螞蟻在列隊。',
        options: [
            { text: 'ごじゅうひき', isCorrect: false, reason: '陷阱！50匹需要促音化+半濁音化。' },
            { text: 'ごじゅっぴき', isCorrect: true, reason: '正確！五十隻螞蟻。' },
            { text: 'ごじゅうびき', isCorrect: false, reason: '50匹使用促音+半濁音。' },
            { text: 'いそひき', isCorrect: false, reason: '使用「ごじゅう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '50匹讀作「ごじゅっぴき」，十位數10觸發促音化+半濁音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 50, kanji: '五十匹', reading: 'ごじゅっぴき' }
    },
    {
        id: 'animal_100_dial', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: true,
        stem: '蟻穴螞蟻', stem_zh: '蟻穴螞蟻',
        dialogue: { speakerA: '蟻の巣には何匹いますか？', speakerB: '＿＿以上です。（一百隻）' },
        options: [
            { text: 'ひゃくひき', isCorrect: false, reason: '陷阱！100匹需要促音化+半濁音化。' },
            { text: 'ひゃっぴき', isCorrect: true, reason: '正確！一百隻以上的螞蟻。' },
            { text: 'ひゃくびき', isCorrect: false, reason: '100匹使用促音+半濁音。' },
            { text: 'ももひき', isCorrect: false, reason: '使用「ひゃく」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '100匹讀作「ひゃっぴき」，「百」在「は行」前促音化+半濁音化。', relatedRules: ['促音化規則', '百以上の數字'] },
        sourceItem: { value: 100, kanji: '百匹', reading: 'ひゃっぴき' }
    },

    // ===== 各種動物情境題目 =====
    {
        id: 'animal_context_1', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: false,
        stem: 'トカゲを＿＿見つけました。', stem_zh: '找到了兩隻蜥蜴。',
        options: [
            { text: 'にぴき', isCorrect: false, reason: '2匹無音變。' },
            { text: 'にひき', isCorrect: true, reason: '正確！兩隻蜥蜴。' },
            { text: 'ふたつ', isCorrect: false, reason: '蜥蜴用「匹」。' },
            { text: 'にびき', isCorrect: false, reason: '2匹不濁音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「トカゲ」使用量詞「匹」。', relatedRules: ['量詞「匹」的使用', '爬蟲類の計數'] },
        sourceItem: { value: 2, kanji: '二匹', reading: 'にひき' }
    },
    {
        id: 'animal_context_2', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: true,
        stem: '蝸牛數量', stem_zh: '蝸牛數量',
        dialogue: { speakerA: 'カタツムリは何匹見ましたか？', speakerB: '＿＿見ました。（三隻）' },
        options: [
            { text: 'さんひき', isCorrect: false, reason: '陷阱！3匹需要濁音化。' },
            { text: 'さんびき', isCorrect: true, reason: '正確！三隻蝸牛。' },
            { text: 'みっつ', isCorrect: false, reason: '蝸牛用「匹」。' },
            { text: 'さんぴき', isCorrect: false, reason: '3匹使用濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「カタツムリ」使用量詞「匹」。', relatedRules: ['量詞「匹」的使用', '軟體動物の計數'] },
        sourceItem: { value: 3, kanji: '三匹', reading: 'さんびき' }
    },
    {
        id: 'animal_context_3', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: false,
        stem: 'ヤモリが＿＿壁にいます。', stem_zh: '牆上有四隻壁虎。',
        options: [
            { text: 'しひき', isCorrect: false, reason: '使用「よん」。' },
            { text: 'よんひき', isCorrect: true, reason: '正確！四隻壁虎。' },
            { text: 'よっつ', isCorrect: false, reason: '壁虎用「匹」。' },
            { text: 'よんびき', isCorrect: false, reason: '4匹不濁音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ヤモリ」使用量詞「匹」。', relatedRules: ['量詞「匹」的使用', '爬蟲類の計數'] },
        sourceItem: { value: 4, kanji: '四匹', reading: 'よんひき' }
    },
    {
        id: 'animal_context_4', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: false,
        stem: '螢火蟲觀察', stem_zh: '螢火蟲觀察',
        dialogue: { speakerA: 'ホタルは何匹見えましたか？', speakerB: '＿＿見えました。（五隻）' },
        options: [
            { text: 'ごびき', isCorrect: false, reason: '5匹不濁音化。' },
            { text: 'ごひき', isCorrect: true, reason: '正確！五隻螢火蟲。' },
            { text: 'いつつ', isCorrect: false, reason: '螢火蟲用「匹」。' },
            { text: 'ごっぴき', isCorrect: false, reason: '5匹無音變。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ホタル」使用量詞「匹」。', relatedRules: ['量詞「匹」的使用', '昆蟲の計數'] },
        sourceItem: { value: 5, kanji: '五匹', reading: 'ごひき' }
    },
    {
        id: 'animal_context_5', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: true,
        stem: 'クワガタを＿＿捕まえました。', stem_zh: '抓到了六隻鍬形蟲。',
        options: [
            { text: 'ろくひき', isCorrect: false, reason: '陷阱！6匹需要促音化+半濁音化。' },
            { text: 'ろっぴき', isCorrect: true, reason: '正確！六隻鍬形蟲。' },
            { text: 'むっつ', isCorrect: false, reason: '鍬形蟲用「匹」。' },
            { text: 'ろくびき', isCorrect: false, reason: '6匹使用促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「クワガタ」使用量詞「匹」。6匹需要促音化+半濁音化。', relatedRules: ['量詞「匹」的使用', '促音化規則'] },
        sourceItem: { value: 6, kanji: '六匹', reading: 'ろっぴき' }
    },
    {
        id: 'animal_context_6', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: false,
        stem: '觀賞魚水族箱', stem_zh: '觀賞魚水族箱',
        dialogue: { speakerA: '水槽には魚が何匹いますか？', speakerB: '＿＿います。（七條）' },
        options: [
            { text: 'しちひき', isCorrect: false, reason: '通常用「なな」。' },
            { text: 'ななひき', isCorrect: true, reason: '正確！七條魚。' },
            { text: 'ななつ', isCorrect: false, reason: '魚用「匹」。' },
            { text: 'ななびき', isCorrect: false, reason: '7匹不濁音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「魚」使用量詞「匹」。', relatedRules: ['量詞「匹」的使用', '魚の計數'] },
        sourceItem: { value: 7, kanji: '七匹', reading: 'ななひき' }
    },
    {
        id: 'animal_context_7', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: true,
        stem: 'セミが＿＿鳴いています。', stem_zh: '有八隻蟬在叫。',
        options: [
            { text: 'はちひき', isCorrect: false, reason: '陷阱！8匹需要促音化+半濁音化。' },
            { text: 'はっぴき', isCorrect: true, reason: '正確！八隻蟬。' },
            { text: 'やっつ', isCorrect: false, reason: '蟬用「匹」。' },
            { text: 'はちびき', isCorrect: false, reason: '8匹使用促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「セミ」使用量詞「匹」。8匹需要促音化+半濁音化。', relatedRules: ['量詞「匹」的使用', '促音化規則'] },
        sourceItem: { value: 8, kanji: '八匹', reading: 'はっぴき' }
    },
    {
        id: 'animal_context_8', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: false,
        stem: '寵物店倉鼠', stem_zh: '寵物店倉鼠',
        dialogue: { speakerA: 'ペットショップにハムスターは何匹いますか？', speakerB: '＿＿います。（九隻）' },
        options: [
            { text: 'くひき', isCorrect: false, reason: '使用「きゅう」。' },
            { text: 'きゅうひき', isCorrect: true, reason: '正確！九隻倉鼠。' },
            { text: 'ここのつ', isCorrect: false, reason: '倉鼠用「匹」。' },
            { text: 'きゅうびき', isCorrect: false, reason: '9匹不濁音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ハムスター」使用量詞「匹」。', relatedRules: ['量詞「匹」的使用', '寵物の計數'] },
        sourceItem: { value: 9, kanji: '九匹', reading: 'きゅうひき' }
    },
    {
        id: 'animal_context_9', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: true,
        stem: 'ゴキブリを＿＿退治しました。', stem_zh: '消滅了十隻蟑螂。',
        options: [
            { text: 'じゅうひき', isCorrect: false, reason: '陷阱！10匹需要促音化+半濁音化。' },
            { text: 'じゅっぴき', isCorrect: true, reason: '正確！十隻蟑螂。' },
            { text: 'とお', isCorrect: false, reason: '蟑螂用「匹」。' },
            { text: 'じゅうびき', isCorrect: false, reason: '10匹使用促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ゴキブリ」使用量詞「匹」。10匹需要促音化+半濁音化。', relatedRules: ['量詞「匹」的使用', '促音化規則'] },
        sourceItem: { value: 10, kanji: '十匹', reading: 'じゅっぴき' }
    },
    {
        id: 'animal_context_10', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: false,
        stem: '水族館企鵝', stem_zh: '水族館企鵝',
        dialogue: { speakerA: 'ペンギンは何羽いますか？', speakerB: '＿＿います。（十二隻）' },
        options: [
            { text: 'じゅうにひき', isCorrect: false, reason: '企鵝是鳥類，用「羽」。' },
            { text: 'じゅうにわ', isCorrect: true, reason: '正確！企鵝用「羽」。' },
            { text: 'じゅうにびき', isCorrect: false, reason: '企鵝是鳥類。' },
            { text: 'じゅうに', isCorrect: false, reason: '需要量詞。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ペンギン」是鳥類，使用量詞「羽」。注意區分「匹」和「羽」的使用。', relatedRules: ['量詞「羽」的使用', '鳥類の計數'] },
        sourceItem: { value: 12, kanji: '十二羽', reading: 'じゅうにわ' }
    },
    {
        id: 'animal_context_11', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: false,
        stem: 'イモムシを＿＿見つけました。', stem_zh: '找到了四隻毛毛蟲。',
        options: [
            { text: 'しひき', isCorrect: false, reason: '使用「よん」。' },
            { text: 'よんひき', isCorrect: true, reason: '正確！四隻毛毛蟲。' },
            { text: 'よっつ', isCorrect: false, reason: '毛毛蟲用「匹」。' },
            { text: 'よんぴき', isCorrect: false, reason: '4匹無音變。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「イモムシ」使用量詞「匹」。', relatedRules: ['量詞「匹」的使用', '昆蟲の計數'] },
        sourceItem: { value: 4, kanji: '四匹', reading: 'よんひき' }
    },
    {
        id: 'animal_context_12', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: true,
        stem: '魚缸新魚', stem_zh: '魚缸新魚',
        dialogue: { speakerA: '新しい魚は何匹買いましたか？', speakerB: '＿＿買いました。（六條）' },
        options: [
            { text: 'ろくひき', isCorrect: false, reason: '陷阱！6匹需要促音化+半濁音化。' },
            { text: 'ろっぴき', isCorrect: true, reason: '正確！六條魚。' },
            { text: 'むっつ', isCorrect: false, reason: '魚用「匹」。' },
            { text: 'ろくびき', isCorrect: false, reason: '6匹使用促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「魚」使用量詞「匹」。6匹需要促音化+半濁音化。', relatedRules: ['量詞「匹」的使用', '促音化規則'] },
        sourceItem: { value: 6, kanji: '六匹', reading: 'ろっぴき' }
    },
    {
        id: 'animal_context_13', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: false,
        stem: 'バッタを＿＿捕まえました。', stem_zh: '抓到了五隻蚱蜢。',
        options: [
            { text: 'ごびき', isCorrect: false, reason: '5匹不濁音化。' },
            { text: 'ごひき', isCorrect: true, reason: '正確！五隻蚱蜢。' },
            { text: 'いつつ', isCorrect: false, reason: '蚱蜢用「匹」。' },
            { text: 'ごっぴき', isCorrect: false, reason: '5匹無音變。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「バッタ」使用量詞「匹」。', relatedRules: ['量詞「匹」的使用', '昆蟲の計數'] },
        sourceItem: { value: 5, kanji: '五匹', reading: 'ごひき' }
    },
    {
        id: 'animal_context_14', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: false,
        stem: '動物園兔子', stem_zh: '動物園兔子',
        dialogue: { speakerA: 'うさぎは何匹いますか？', speakerB: '＿＿います。（七隻）' },
        options: [
            { text: 'しちひき', isCorrect: false, reason: '通常用「なな」。' },
            { text: 'ななひき', isCorrect: true, reason: '正確！七隻兔子。' },
            { text: 'ななつ', isCorrect: false, reason: '兔子用「匹」。' },
            { text: 'ななぴき', isCorrect: false, reason: '7匹無音變。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「うさぎ」使用量詞「匹」。', relatedRules: ['量詞「匹」的使用', '寵物の計數'] },
        sourceItem: { value: 7, kanji: '七匹', reading: 'ななひき' }
    },
    {
        id: 'animal_context_15', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: true,
        stem: 'トンボを＿＿見ました。', stem_zh: '看到了三隻蜻蜓。',
        options: [
            { text: 'さんひき', isCorrect: false, reason: '陷阱！3匹需要濁音化。' },
            { text: 'さんびき', isCorrect: true, reason: '正確！三隻蜻蜓。' },
            { text: 'みっつ', isCorrect: false, reason: '蜻蜓用「匹」。' },
            { text: 'さんぴき', isCorrect: false, reason: '3匹使用濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「トンボ」使用量詞「匹」。3匹需要濁音化。', relatedRules: ['量詞「匹」的使用', '濁音化規則'] },
        sourceItem: { value: 3, kanji: '三匹', reading: 'さんびき' }
    },
    {
        id: 'animal_context_16', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: true,
        stem: '蠶絲寶貝', stem_zh: '蠶絲寶貝',
        dialogue: { speakerA: 'カイコは何匹いますか？', speakerB: '＿＿います。（十隻）' },
        options: [
            { text: 'じゅうひき', isCorrect: false, reason: '陷阱！10匹需要促音化+半濁音化。' },
            { text: 'じゅっぴき', isCorrect: true, reason: '正確！十隻蠶。' },
            { text: 'とお', isCorrect: false, reason: '蠶用「匹」。' },
            { text: 'じゅうびき', isCorrect: false, reason: '10匹使用促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「カイコ」使用量詞「匹」。10匹需要促音化+半濁音化。', relatedRules: ['量詞「匹」的使用', '促音化規則'] },
        sourceItem: { value: 10, kanji: '十匹', reading: 'じゅっぴき' }
    },
    {
        id: 'animal_context_17', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: false,
        stem: 'ダンゴムシを＿＿見つけました。', stem_zh: '找到了兩隻鼠婦。',
        options: [
            { text: 'にぴき', isCorrect: false, reason: '2匹無音變。' },
            { text: 'にひき', isCorrect: true, reason: '正確！兩隻鼠婦。' },
            { text: 'ふたつ', isCorrect: false, reason: '鼠婦用「匹」。' },
            { text: 'にびき', isCorrect: false, reason: '2匹不濁音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ダンゴムシ」使用量詞「匹」。', relatedRules: ['量詞「匹」的使用', '昆蟲の計數'] },
        sourceItem: { value: 2, kanji: '二匹', reading: 'にひき' }
    },
    {
        id: 'animal_context_18', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: true,
        stem: '鰻魚養殖', stem_zh: '鰻魚養殖',
        dialogue: { speakerA: 'うなぎは何匹いますか？', speakerB: '＿＿います。（八條）' },
        options: [
            { text: 'はちひき', isCorrect: false, reason: '陷阱！8匹需要促音化+半濁音化。' },
            { text: 'はっぴき', isCorrect: true, reason: '正確！八條鰻魚。' },
            { text: 'やっつ', isCorrect: false, reason: '鰻魚用「匹」。' },
            { text: 'はちびき', isCorrect: false, reason: '8匹使用促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「うなぎ」使用量詞「匹」。8匹需要促音化+半濁音化。', relatedRules: ['量詞「匹」的使用', '促音化規則'] },
        sourceItem: { value: 8, kanji: '八匹', reading: 'はっぴき' }
    },
    {
        id: 'animal_context_19', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: false,
        stem: 'モルモットを＿＿飼っています。', stem_zh: '養了四隻天竺鼠。',
        options: [
            { text: 'しひき', isCorrect: false, reason: '使用「よん」。' },
            { text: 'よんひき', isCorrect: true, reason: '正確！四隻天竺鼠。' },
            { text: 'よっつ', isCorrect: false, reason: '天竺鼠用「匹」。' },
            { text: 'よんびき', isCorrect: false, reason: '4匹不濁音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「モルモット」使用量詞「匹」。', relatedRules: ['量詞「匹」的使用', '寵物の計數'] },
        sourceItem: { value: 4, kanji: '四匹', reading: 'よんひき' }
    },
    {
        id: 'animal_context_20', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: true,
        stem: '狗狗散步', stem_zh: '狗狗散步',
        dialogue: { speakerA: '公園で犬は何匹見ましたか？', speakerB: '＿＿見ました。（十一隻）' },
        options: [
            { text: 'じゅういちひき', isCorrect: false, reason: '陷阱！11匹需要促音化+半濁音化。' },
            { text: 'じゅういっぴき', isCorrect: true, reason: '正確！十一隻狗。' },
            { text: 'じゅういちびき', isCorrect: false, reason: '11匹使用促音+半濁音。' },
            { text: 'じゅうひとひき', isCorrect: false, reason: '使用音讀「いち」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '11匹讀作「じゅういっぴき」，個位數1觸發促音化+半濁音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 11, kanji: '十一匹', reading: 'じゅういっぴき' }
    },

    // ===== 比較題與陷阱題 =====
    {
        id: 'animal_compare_1', category: 'counters', subcategory: 'smallAnimals', type: 'pronunciation', isTrap: true,
        stem: '以下哪組「匹」的讀法都正確？', stem_zh: '以下哪組「匹」的讀法都正確？',
        options: [
            { text: '一匹(いっぴき)、六匹(ろっぴき)、十匹(じゅっぴき)', isCorrect: true, reason: '正確！1、6、10都需要促音化+半濁音化。' },
            { text: '一匹(いちひき)、六匹(ろくひき)、十匹(じゅうひき)', isCorrect: false, reason: '錯誤，1、6、10需要促音化+半濁音化。' },
            { text: '三匹(さんひき)、何匹(なんひき)', isCorrect: false, reason: '錯誤，3和「何」需要濁音化。' },
            { text: '八匹(はちびき)、一匹(いちびき)', isCorrect: false, reason: '錯誤，1、8使用半濁音「ぴ」不是濁音「び」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「匹」的音變：1/6/8/10→っぴき（促音+半濁音），3/何→びき（濁音），其餘無音變。', trapExplanation: '記住：h-p轉換和h-b轉換是不同的規則。', relatedRules: ['促音化規則', '量詞「匹」の特徴'] },
        sourceItem: { value: 0, kanji: '匹比較', reading: '促音化規則' }
    },
    {
        id: 'animal_compare_2', category: 'counters', subcategory: 'smallAnimals', type: 'pronunciation', isTrap: true,
        stem: '「匹」與「本」的音變規則有何相同？', stem_zh: '「匹」與「本」的音變規則有何相同？',
        options: [
            { text: '兩者1/6/8/10促音化，3/何濁音化', isCorrect: true, reason: '正確！兩者都是「は行」量詞，音變規則相同。' },
            { text: '兩者都沒有音變', isCorrect: false, reason: '錯誤，「は行」量詞都有音變。' },
            { text: '只有「本」有音變，「匹」沒有', isCorrect: false, reason: '錯誤，兩者都有相同的音變。' },
            { text: '兩者音變完全不同', isCorrect: false, reason: '錯誤，兩者音變規則相同。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「匹」和「本」都是「は行」量詞，適用相同的h-p/h-b轉換規則。', trapExplanation: '記住：所有「は行」開頭的量詞音變規則相同。', relatedRules: ['は行量詞音變', '「匹」vs「本」'] },
        sourceItem: { value: 0, kanji: '匹本比較', reading: '音變相同' }
    },
    {
        id: 'animal_error_1', category: 'counters', subcategory: 'smallAnimals', type: 'pronunciation', isTrap: true,
        stem: '以下哪個讀法是錯誤的？', stem_zh: '以下哪個讀法是錯誤的？',
        options: [
            { text: '三匹(さんひき)', isCorrect: true, reason: '這是錯誤的！應該是「さんびき」，需要濁音化。' },
            { text: '二匹(にひき)', isCorrect: false, reason: '這是正確的，2匹無音變。' },
            { text: '五匹(ごひき)', isCorrect: false, reason: '這是正確的，5匹無音變。' },
            { text: '七匹(ななひき)', isCorrect: false, reason: '這是正確的，7匹無音變。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '3匹必須濁音化為「さんびき」，「さんひき」是錯誤的。', trapExplanation: '這是陷阱題，3和「何」搭配「は行」量詞需濁音化。', relatedRules: ['濁音化規則', '錯誤識別'] },
        sourceItem: { value: 3, kanji: '三匹', reading: 'さんびき' }
    },
    {
        id: 'animal_error_2', category: 'counters', subcategory: 'smallAnimals', type: 'pronunciation', isTrap: true,
        stem: '以下哪個讀法是錯誤的？', stem_zh: '以下哪個讀法是錯誤的？',
        options: [
            { text: '六匹(ろくひき)', isCorrect: true, reason: '這是錯誤的！應該是「ろっぴき」，需要促音化+半濁音化。' },
            { text: '四匹(よんひき)', isCorrect: false, reason: '這是正確的，4匹無音變。' },
            { text: '九匹(きゅうひき)', isCorrect: false, reason: '這是正確的，9匹無音變。' },
            { text: '二匹(にひき)', isCorrect: false, reason: '這是正確的，2匹無音變。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '6匹必須促音化+半濁音化為「ろっぴき」，「ろくひき」是錯誤的。', trapExplanation: '這是陷阱題，1、6、8、10搭配「は行」量詞需促音化+半濁音化。', relatedRules: ['促音化規則', '錯誤識別'] },
        sourceItem: { value: 6, kanji: '六匹', reading: 'ろっぴき' }
    },
    {
        id: 'animal_error_3', category: 'counters', subcategory: 'smallAnimals', type: 'pronunciation', isTrap: true,
        stem: '以下哪個讀法是錯誤的？', stem_zh: '以下哪個讀法是錯誤的？',
        options: [
            { text: '何匹(なんひき)', isCorrect: true, reason: '這是錯誤的！應該是「なんびき」，需要濁音化。' },
            { text: '四匹(よんひき)', isCorrect: false, reason: '這是正確的，4匹無音變。' },
            { text: '五匹(ごひき)', isCorrect: false, reason: '這是正確的，5匹無音變。' },
            { text: '二匹(にひき)', isCorrect: false, reason: '這是正確的，2匹無音變。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「何匹」必須濁音化為「なんびき」，「なんひき」是錯誤的。', trapExplanation: '這是陷阱題，「何」的撥音「ん」使「は行」量詞濁音化。', relatedRules: ['濁音化規則', '錯誤識別'] },
        sourceItem: { value: '?', kanji: '何匹', reading: 'なんびき' }
    },

    // ===== 更多情境題目 =====
    {
        id: 'animal_context_21', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: true,
        stem: '蚊を＿＿退治しました。', stem_zh: '消滅了二十三隻蚊子。',
        options: [
            { text: 'にじゅうさんひき', isCorrect: false, reason: '陷阱！23匹需要濁音化。' },
            { text: 'にじゅうさんびき', isCorrect: true, reason: '正確！二十三隻蚊子。' },
            { text: 'にじゅうさんぴき', isCorrect: false, reason: '23匹使用濁音。' },
            { text: 'にじゅうみびき', isCorrect: false, reason: '使用「さん」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '23匹讀作「にじゅうさんびき」，個位數3觸發濁音化。', relatedRules: ['濁音化規則', '複合數字的讀法'] },
        sourceItem: { value: 23, kanji: '二十三匹', reading: 'にじゅうさんびき' }
    },
    {
        id: 'animal_context_22', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: false,
        stem: '養魚池', stem_zh: '養魚池',
        dialogue: { speakerA: '池に鯉は何匹いますか？', speakerB: '＿＿います。（十四條）' },
        options: [
            { text: 'じゅうよんぴき', isCorrect: false, reason: '14匹無音變。' },
            { text: 'じゅうよんひき', isCorrect: true, reason: '正確！十四條鯉魚。' },
            { text: 'じゅうしひき', isCorrect: false, reason: '使用「よん」。' },
            { text: 'じゅうよんびき', isCorrect: false, reason: '14匹不濁音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '14匹讀作「じゅうよんひき」，無音變。', relatedRules: ['量詞「匹」的使用', '複合數字'] },
        sourceItem: { value: 14, kanji: '十四匹', reading: 'じゅうよんひき' }
    },
    {
        id: 'animal_context_23', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: false,
        stem: 'カメを＿＿飼っています。', stem_zh: '養了十五隻烏龜。',
        options: [
            { text: 'じゅうごぴき', isCorrect: false, reason: '15匹無音變。' },
            { text: 'じゅうごひき', isCorrect: true, reason: '正確！十五隻烏龜。' },
            { text: 'じゅうごびき', isCorrect: false, reason: '15匹不濁音化。' },
            { text: 'いそひき', isCorrect: false, reason: '使用「じゅうご」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '15匹讀作「じゅうごひき」，無音變。', relatedRules: ['量詞「匹」的使用', '爬蟲類の計數'] },
        sourceItem: { value: 15, kanji: '十五匹', reading: 'じゅうごひき' }
    },
    {
        id: 'animal_context_24', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: false,
        stem: '寵物龜數量', stem_zh: '寵物龜數量',
        dialogue: { speakerA: 'ペットのカメは何匹ですか？', speakerB: '＿＿です。（十七隻）' },
        options: [
            { text: 'じゅうしちひき', isCorrect: false, reason: '通常用「なな」。' },
            { text: 'じゅうななひき', isCorrect: true, reason: '正確！十七隻烏龜。' },
            { text: 'じゅうななびき', isCorrect: false, reason: '17匹不濁音化。' },
            { text: 'じゅうななぴき', isCorrect: false, reason: '17匹無音變。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '17匹讀作「じゅうななひき」，無音變。', relatedRules: ['量詞「匹」的使用', '複合數字'] },
        sourceItem: { value: 17, kanji: '十七匹', reading: 'じゅうななひき' }
    },
    {
        id: 'animal_context_25', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: false,
        stem: '水族館にエビが＿＿います。', stem_zh: '水族館有十九隻蝦。',
        options: [
            { text: 'じゅうくひき', isCorrect: false, reason: '使用「きゅう」。' },
            { text: 'じゅうきゅうひき', isCorrect: true, reason: '正確！十九隻蝦。' },
            { text: 'じゅうきゅうびき', isCorrect: false, reason: '19匹不濁音化。' },
            { text: 'じゅうきゅうぴき', isCorrect: false, reason: '19匹無音變。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '19匹讀作「じゅうきゅうひき」，無音變。', relatedRules: ['量詞「匹」的使用', '複合數字'] },
        sourceItem: { value: 19, kanji: '十九匹', reading: 'じゅうきゅうひき' }
    },
    {
        id: 'animal_context_26', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: true,
        stem: '昆蟲採集', stem_zh: '昆蟲採集',
        dialogue: { speakerA: '今日は虫を何匹捕まえましたか？', speakerB: '＿＿捕まえました。（二十一隻）' },
        options: [
            { text: 'にじゅういちひき', isCorrect: false, reason: '陷阱！21匹需要促音化+半濁音化。' },
            { text: 'にじゅういっぴき', isCorrect: true, reason: '正確！二十一隻蟲。' },
            { text: 'にじゅういちびき', isCorrect: false, reason: '21匹使用促音+半濁音。' },
            { text: 'にじゅうひとひき', isCorrect: false, reason: '使用音讀「いち」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '21匹讀作「にじゅういっぴき」，個位數1觸發促音化+半濁音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 21, kanji: '二十一匹', reading: 'にじゅういっぴき' }
    },
    {
        id: 'animal_context_27', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: false,
        stem: 'フェレットを＿＿飼っています。', stem_zh: '養了兩隻雪貂。',
        options: [
            { text: 'にぴき', isCorrect: false, reason: '2匹無音變。' },
            { text: 'にひき', isCorrect: true, reason: '正確！兩隻雪貂。' },
            { text: 'ふたつ', isCorrect: false, reason: '雪貂用「匹」。' },
            { text: 'にびき', isCorrect: false, reason: '2匹不濁音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「フェレット」使用量詞「匹」。', relatedRules: ['量詞「匹」的使用', '寵物の計數'] },
        sourceItem: { value: 2, kanji: '二匹', reading: 'にひき' }
    },
    {
        id: 'animal_context_28', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: true,
        stem: '烏龜養殖', stem_zh: '烏龜養殖',
        dialogue: { speakerA: '亀は何匹生まれましたか？', speakerB: '＿＿生まれました。（二十六隻）' },
        options: [
            { text: 'にじゅうろくひき', isCorrect: false, reason: '陷阱！26匹需要促音化+半濁音化。' },
            { text: 'にじゅうろっぴき', isCorrect: true, reason: '正確！二十六隻烏龜。' },
            { text: 'にじゅうろくびき', isCorrect: false, reason: '26匹使用促音+半濁音。' },
            { text: 'にじゅうむっぴき', isCorrect: false, reason: '使用「ろく」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '26匹讀作「にじゅうろっぴき」，個位數6觸發促音化+半濁音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 26, kanji: '二十六匹', reading: 'にじゅうろっぴき' }
    },
    {
        id: 'animal_context_29', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: false,
        stem: 'チンチラを＿＿飼っています。', stem_zh: '養了五隻龍貓。',
        options: [
            { text: 'ごびき', isCorrect: false, reason: '5匹不濁音化。' },
            { text: 'ごひき', isCorrect: true, reason: '正確！五隻龍貓。' },
            { text: 'いつつ', isCorrect: false, reason: '龍貓用「匹」。' },
            { text: 'ごっぴき', isCorrect: false, reason: '5匹無音變。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「チンチラ」使用量詞「匹」。', relatedRules: ['量詞「匹」的使用', '寵物の計數'] },
        sourceItem: { value: 5, kanji: '五匹', reading: 'ごひき' }
    },
    {
        id: 'animal_context_30', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: true,
        stem: '魚類養殖', stem_zh: '魚類養殖',
        dialogue: { speakerA: '養殖場に魚は何匹いますか？', speakerB: '約＿＿です。（二十八條）' },
        options: [
            { text: 'にじゅうはちひき', isCorrect: false, reason: '陷阱！28匹需要促音化+半濁音化。' },
            { text: 'にじゅうはっぴき', isCorrect: true, reason: '正確！約二十八條魚。' },
            { text: 'にじゅうはちびき', isCorrect: false, reason: '28匹使用促音+半濁音。' },
            { text: 'にじゅうやっぴき', isCorrect: false, reason: '使用「はち」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '28匹讀作「にじゅうはっぴき」，個位數8觸發促音化+半濁音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 28, kanji: '二十八匹', reading: 'にじゅうはっぴき' }
    },
    {
        id: 'animal_context_31', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: false,
        stem: 'ヘビを＿＿見ました。', stem_zh: '看到了四條蛇。',
        options: [
            { text: 'しひき', isCorrect: false, reason: '使用「よん」。' },
            { text: 'よんひき', isCorrect: true, reason: '正確！四條蛇。' },
            { text: 'よっつ', isCorrect: false, reason: '蛇用「匹」。' },
            { text: 'よんびき', isCorrect: false, reason: '4匹不濁音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「ヘビ」使用量詞「匹」。', relatedRules: ['量詞「匹」的使用', '爬蟲類の計數'] },
        sourceItem: { value: 4, kanji: '四匹', reading: 'よんひき' }
    },
    {
        id: 'animal_context_32', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: true,
        stem: '蛙塘', stem_zh: '蛙塘',
        dialogue: { speakerA: '田んぼにカエルは何匹いますか？', speakerB: '約＿＿います。（三十三隻）' },
        options: [
            { text: 'さんじゅうさんひき', isCorrect: false, reason: '陷阱！33匹需要濁音化。' },
            { text: 'さんじゅうさんびき', isCorrect: true, reason: '正確！約三十三隻青蛙。' },
            { text: 'さんじゅうさんぴき', isCorrect: false, reason: '33匹使用濁音。' },
            { text: 'さんじゅうみびき', isCorrect: false, reason: '使用「さん」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '33匹讀作「さんじゅうさんびき」，個位數3觸發濁音化。', relatedRules: ['濁音化規則', '複合數字的讀法'] },
        sourceItem: { value: 33, kanji: '三十三匹', reading: 'さんじゅうさんびき' }
    },
    {
        id: 'animal_context_33', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: true,
        stem: '海老を＿＿買いました。', stem_zh: '買了四十隻蝦。',
        options: [
            { text: 'よんじゅうひき', isCorrect: false, reason: '陷阱！40匹需要促音化+半濁音化。' },
            { text: 'よんじゅっぴき', isCorrect: true, reason: '正確！四十隻蝦。' },
            { text: 'しじゅうひき', isCorrect: false, reason: '使用「よん」。' },
            { text: 'よんじゅうびき', isCorrect: false, reason: '40匹使用促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '40匹讀作「よんじゅっぴき」，十位數10觸發促音化+半濁音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 40, kanji: '四十匹', reading: 'よんじゅっぴき' }
    },
    {
        id: 'animal_context_34', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: false,
        stem: '養蜂場', stem_zh: '養蜂場',
        dialogue: { speakerA: '蜂は何匹いますか？', speakerB: '約＿＿います。（六十隻）' },
        options: [
            { text: 'ろくじゅうひき', isCorrect: false, reason: '60匹需要促音化+半濁音化。' },
            { text: 'ろくじゅっぴき', isCorrect: true, reason: '正確！約六十隻蜜蜂。' },
            { text: 'むじゅうひき', isCorrect: false, reason: '使用「ろくじゅう」。' },
            { text: 'ろくじゅうびき', isCorrect: false, reason: '60匹使用促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '60匹讀作「ろくじゅっぴき」，十位數10觸發促音化+半濁音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 60, kanji: '六十匹', reading: 'ろくじゅっぴき' }
    },
    {
        id: 'animal_context_35', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: true,
        stem: 'アユを＿＿釣りました。', stem_zh: '釣了七十條香魚。',
        options: [
            { text: 'ななじゅうひき', isCorrect: false, reason: '陷阱！70匹需要促音化+半濁音化。' },
            { text: 'ななじゅっぴき', isCorrect: true, reason: '正確！七十條香魚。' },
            { text: 'しちじゅうひき', isCorrect: false, reason: '通常用「なな」。' },
            { text: 'ななじゅうびき', isCorrect: false, reason: '70匹使用促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '70匹讀作「ななじゅっぴき」，十位數10觸發促音化+半濁音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 70, kanji: '七十匹', reading: 'ななじゅっぴき' }
    },
    {
        id: 'animal_context_36', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: true,
        stem: '養殖池', stem_zh: '養殖池',
        dialogue: { speakerA: '養殖池に魚は何匹いますか？', speakerB: '約＿＿です。（八十條）' },
        options: [
            { text: 'はちじゅうひき', isCorrect: false, reason: '陷阱！80匹需要促音化+半濁音化。' },
            { text: 'はちじゅっぴき', isCorrect: true, reason: '正確！約八十條魚。' },
            { text: 'やじゅうひき', isCorrect: false, reason: '使用「はちじゅう」。' },
            { text: 'はちじゅうびき', isCorrect: false, reason: '80匹使用促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '80匹讀作「はちじゅっぴき」，十位數10觸發促音化+半濁音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 80, kanji: '八十匹', reading: 'はちじゅっぴき' }
    },
    {
        id: 'animal_context_37', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: true,
        stem: '水族館に魚が＿＿います。', stem_zh: '水族館有九十條魚。',
        options: [
            { text: 'きゅうじゅうひき', isCorrect: false, reason: '陷阱！90匹需要促音化+半濁音化。' },
            { text: 'きゅうじゅっぴき', isCorrect: true, reason: '正確！九十條魚。' },
            { text: 'くじゅうひき', isCorrect: false, reason: '使用「きゅう」。' },
            { text: 'きゅうじゅうびき', isCorrect: false, reason: '90匹使用促音+半濁音。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '90匹讀作「きゅうじゅっぴき」，十位數10觸發促音化+半濁音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 90, kanji: '九十匹', reading: 'きゅうじゅっぴき' }
    },
    {
        id: 'animal_context_38', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: false,
        stem: '觀賞魚', stem_zh: '觀賞魚',
        dialogue: { speakerA: 'グッピーは何匹いますか？', speakerB: '＿＿います。（二十二隻）' },
        options: [
            { text: 'にじゅうにぴき', isCorrect: false, reason: '22匹無音變。' },
            { text: 'にじゅうにひき', isCorrect: true, reason: '正確！二十二隻孔雀魚。' },
            { text: 'にじゅうにびき', isCorrect: false, reason: '22匹不濁音化。' },
            { text: 'にじゅうに', isCorrect: false, reason: '需要量詞。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '22匹讀作「にじゅうにひき」，無音變。', relatedRules: ['量詞「匹」的使用', '複合數字'] },
        sourceItem: { value: 22, kanji: '二十二匹', reading: 'にじゅうにひき' }
    },
    {
        id: 'animal_context_39', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: false,
        stem: 'ザリガニを＿＿捕まえました。', stem_zh: '抓到了二十四隻小龍蝦。',
        options: [
            { text: 'にじゅうよんぴき', isCorrect: false, reason: '24匹無音變。' },
            { text: 'にじゅうよんひき', isCorrect: true, reason: '正確！二十四隻小龍蝦。' },
            { text: 'にじゅうしひき', isCorrect: false, reason: '使用「よん」。' },
            { text: 'にじゅうよんびき', isCorrect: false, reason: '24匹不濁音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '24匹讀作「にじゅうよんひき」，無音變。', relatedRules: ['量詞「匹」的使用', '複合數字'] },
        sourceItem: { value: 24, kanji: '二十四匹', reading: 'にじゅうよんひき' }
    },
    {
        id: 'animal_context_40', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: false,
        stem: '熱帶魚店', stem_zh: '熱帶魚店',
        dialogue: { speakerA: 'お店に魚は何匹いますか？', speakerB: '約＿＿います。（二十五條）' },
        options: [
            { text: 'にじゅうごぴき', isCorrect: false, reason: '25匹無音變。' },
            { text: 'にじゅうごひき', isCorrect: true, reason: '正確！約二十五條魚。' },
            { text: 'にじゅうごびき', isCorrect: false, reason: '25匹不濁音化。' },
            { text: 'にじゅういつひき', isCorrect: false, reason: '使用「ご」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '25匹讀作「にじゅうごひき」，無音變。', relatedRules: ['量詞「匹」的使用', '複合數字'] },
        sourceItem: { value: 25, kanji: '二十五匹', reading: 'にじゅうごひき' }
    },
    {
        id: 'animal_context_41', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: false,
        stem: 'デグーを＿＿飼っています。', stem_zh: '養了二十七隻八齒鼠。',
        options: [
            { text: 'にじゅうしちひき', isCorrect: false, reason: '通常用「なな」。' },
            { text: 'にじゅうななひき', isCorrect: true, reason: '正確！二十七隻八齒鼠。' },
            { text: 'にじゅうななびき', isCorrect: false, reason: '27匹不濁音化。' },
            { text: 'にじゅうななぴき', isCorrect: false, reason: '27匹無音變。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '27匹讀作「にじゅうななひき」，無音變。', relatedRules: ['量詞「匹」的使用', '複合數字'] },
        sourceItem: { value: 27, kanji: '二十七匹', reading: 'にじゅうななひき' }
    },
    {
        id: 'animal_context_42', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: false,
        stem: '水族箱魚', stem_zh: '水族箱魚',
        dialogue: { speakerA: '水槽に魚は何匹いますか？', speakerB: '＿＿います。（二十九條）' },
        options: [
            { text: 'にじゅうくひき', isCorrect: false, reason: '使用「きゅう」。' },
            { text: 'にじゅうきゅうひき', isCorrect: true, reason: '正確！二十九條魚。' },
            { text: 'にじゅうきゅうびき', isCorrect: false, reason: '29匹不濁音化。' },
            { text: 'にじゅうきゅうぴき', isCorrect: false, reason: '29匹無音變。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '29匹讀作「にじゅうきゅうひき」，無音變。', relatedRules: ['量詞「匹」的使用', '複合數字'] },
        sourceItem: { value: 29, kanji: '二十九匹', reading: 'にじゅうきゅうひき' }
    },

    {
        id: 'animal_context_43', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: true,
        stem: 'コオロギを＿＿捕まえました。', stem_zh: '抓到了三十一隻蟋蟀。',
        options: [
            { text: 'さんじゅういちひき', isCorrect: false, reason: '陷阱！31匹需要促音化+半濁音化。' },
            { text: 'さんじゅういっぴき', isCorrect: true, reason: '正確！三十一隻蟋蟀。' },
            { text: 'さんじゅういちびき', isCorrect: false, reason: '31匹使用促音+半濁音。' },
            { text: 'さんじゅうひとひき', isCorrect: false, reason: '使用音讀「いち」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '31匹讀作「さんじゅういっぴき」，個位數1觸發促音化+半濁音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 31, kanji: '三十一匹', reading: 'さんじゅういっぴき' }
    },
    {
        id: 'animal_context_44', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: false,
        stem: '金魚池', stem_zh: '金魚池',
        dialogue: { speakerA: '金魚は何匹いますか？', speakerB: '＿＿います。（三十二條）' },
        options: [
            { text: 'さんじゅうにぴき', isCorrect: false, reason: '32匹無音變。' },
            { text: 'さんじゅうにひき', isCorrect: true, reason: '正確！三十二條金魚。' },
            { text: 'さんじゅうにびき', isCorrect: false, reason: '32匹不濁音化。' },
            { text: 'みそにひき', isCorrect: false, reason: '使用「さんじゅう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '32匹讀作「さんじゅうにひき」，無音變。', relatedRules: ['量詞「匹」的使用', '複合數字'] },
        sourceItem: { value: 32, kanji: '三十二匹', reading: 'さんじゅうにひき' }
    },
    {
        id: 'animal_context_45', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: false,
        stem: 'ミミズを＿＿見つけました。', stem_zh: '找到了三十四隻蚯蚓。',
        options: [
            { text: 'さんじゅうよんぴき', isCorrect: false, reason: '34匹無音變。' },
            { text: 'さんじゅうよんひき', isCorrect: true, reason: '正確！三十四隻蚯蚓。' },
            { text: 'さんじゅうしひき', isCorrect: false, reason: '使用「よん」。' },
            { text: 'さんじゅうよんびき', isCorrect: false, reason: '34匹不濁音化。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '34匹讀作「さんじゅうよんひき」，無音變。', relatedRules: ['量詞「匹」的使用', '複合數字'] },
        sourceItem: { value: 34, kanji: '三十四匹', reading: 'さんじゅうよんひき' }
    },
    {
        id: 'animal_context_46', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: false,
        stem: '魚塘', stem_zh: '魚塘',
        dialogue: { speakerA: '池に魚は何匹いますか？', speakerB: '約＿＿です。（三十五條）' },
        options: [
            { text: 'さんじゅうごぴき', isCorrect: false, reason: '35匹無音變。' },
            { text: 'さんじゅうごひき', isCorrect: true, reason: '正確！約三十五條魚。' },
            { text: 'さんじゅうごびき', isCorrect: false, reason: '35匹不濁音化。' },
            { text: 'みそいつひき', isCorrect: false, reason: '使用「さんじゅうご」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '35匹讀作「さんじゅうごひき」，無音變。', relatedRules: ['量詞「匹」的使用', '複合數字'] },
        sourceItem: { value: 35, kanji: '三十五匹', reading: 'さんじゅうごひき' }
    },
    {
        id: 'animal_context_47', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: true,
        stem: 'スズムシを＿＿飼っています。', stem_zh: '養了三十六隻鈴蟲。',
        options: [
            { text: 'さんじゅうろくひき', isCorrect: false, reason: '陷阱！36匹需要促音化+半濁音化。' },
            { text: 'さんじゅうろっぴき', isCorrect: true, reason: '正確！三十六隻鈴蟲。' },
            { text: 'さんじゅうろくびき', isCorrect: false, reason: '36匹使用促音+半濁音。' },
            { text: 'さんじゅうむっぴき', isCorrect: false, reason: '使用「ろく」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '36匹讀作「さんじゅうろっぴき」，個位數6觸發促音化+半濁音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 36, kanji: '三十六匹', reading: 'さんじゅうろっぴき' }
    },
    {
        id: 'animal_context_48', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: false,
        stem: '昆蟲展', stem_zh: '昆蟲展',
        dialogue: { speakerA: '昆虫は何匹いますか？', speakerB: '＿＿います。（三十七隻）' },
        options: [
            { text: 'さんじゅうしちひき', isCorrect: false, reason: '通常用「なな」。' },
            { text: 'さんじゅうななひき', isCorrect: true, reason: '正確！三十七隻昆蟲。' },
            { text: 'さんじゅうななびき', isCorrect: false, reason: '37匹不濁音化。' },
            { text: 'さんじゅうななぴき', isCorrect: false, reason: '37匹無音變。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '37匹讀作「さんじゅうななひき」，無音變。', relatedRules: ['量詞「匹」的使用', '複合數字'] },
        sourceItem: { value: 37, kanji: '三十七匹', reading: 'さんじゅうななひき' }
    },
    {
        id: 'animal_context_49', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: true,
        stem: 'カブトムシを＿＿育てました。', stem_zh: '養育了三十八隻獨角仙。',
        options: [
            { text: 'さんじゅうはちひき', isCorrect: false, reason: '陷阱！38匹需要促音化+半濁音化。' },
            { text: 'さんじゅうはっぴき', isCorrect: true, reason: '正確！三十八隻獨角仙。' },
            { text: 'さんじゅうはちびき', isCorrect: false, reason: '38匹使用促音+半濁音。' },
            { text: 'さんじゅうやっぴき', isCorrect: false, reason: '使用「はち」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '38匹讀作「さんじゅうはっぴき」，個位數8觸發促音化+半濁音化。', relatedRules: ['促音化規則', '複合數字的讀法'] },
        sourceItem: { value: 38, kanji: '三十八匹', reading: 'さんじゅうはっぴき' }
    },
    {
        id: 'animal_context_50', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: false,
        stem: '魚市場', stem_zh: '魚市場',
        dialogue: { speakerA: '市場で魚は何匹買いましたか？', speakerB: '＿＿買いました。（三十九條）' },
        options: [
            { text: 'さんじゅうくひき', isCorrect: false, reason: '使用「きゅう」。' },
            { text: 'さんじゅうきゅうひき', isCorrect: true, reason: '正確！三十九條魚。' },
            { text: 'さんじゅうきゅうびき', isCorrect: false, reason: '39匹不濁音化。' },
            { text: 'さんじゅうきゅうぴき', isCorrect: false, reason: '39匹無音變。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '39匹讀作「さんじゅうきゅうひき」，無音變。', relatedRules: ['量詞「匹」的使用', '複合數字'] },
        sourceItem: { value: 39, kanji: '三十九匹', reading: 'さんじゅうきゅうひき' }
    },
    {
        id: 'animal_context_51', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: true,
        stem: 'オタマジャクシを＿＿見つけました。', stem_zh: '找到了四十三隻蝌蚪。',
        options: [
            { text: 'よんじゅうさんひき', isCorrect: false, reason: '陷阱！43匹需要濁音化。' },
            { text: 'よんじゅうさんびき', isCorrect: true, reason: '正確！四十三隻蝌蚪。' },
            { text: 'よんじゅうさんぴき', isCorrect: false, reason: '43匹使用濁音。' },
            { text: 'しじゅうさんびき', isCorrect: false, reason: '使用「よん」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '43匹讀作「よんじゅうさんびき」，個位數3觸發濁音化。', relatedRules: ['濁音化規則', '複合數字的讀法'] },
        sourceItem: { value: 43, kanji: '四十三匹', reading: 'よんじゅうさんびき' }
    },
    {
        id: 'animal_context_52', category: 'counters', subcategory: 'smallAnimals', type: 'dialogue', isTrap: true,
        stem: '蠶農場', stem_zh: '蠶農場',
        dialogue: { speakerA: 'カイコは何匹いますか？', speakerB: '約＿＿です。（五十三隻）' },
        options: [
            { text: 'ごじゅうさんひき', isCorrect: false, reason: '陷阱！53匹需要濁音化。' },
            { text: 'ごじゅうさんびき', isCorrect: true, reason: '正確！約五十三隻蠶。' },
            { text: 'ごじゅうさんぴき', isCorrect: false, reason: '53匹使用濁音。' },
            { text: 'いそみびき', isCorrect: false, reason: '使用「ごじゅうさん」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '53匹讀作「ごじゅうさんびき」，個位數3觸發濁音化。', relatedRules: ['濁音化規則', '複合數字的讀法'] },
        sourceItem: { value: 53, kanji: '五十三匹', reading: 'ごじゅうさんびき' }
    },

    {
        id: 'animal_context_53', category: 'counters', subcategory: 'smallAnimals', type: 'sentence', isTrap: true,
        stem: '水族館に魚が＿＿います。', stem_zh: '水族館有六十三條魚。',
        options: [
            { text: 'ろくじゅうさんひき', isCorrect: false, reason: '陷阱！63匹需要濁音化。' },
            { text: 'ろくじゅうさんびき', isCorrect: true, reason: '正確！六十三條魚。' },
            { text: 'ろくじゅうさんぴき', isCorrect: false, reason: '63匹使用濁音。' },
            { text: 'むじゅうさんびき', isCorrect: false, reason: '使用「ろくじゅう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '63匹讀作「ろくじゅうさんびき」，個位數3觸發濁音化。', relatedRules: ['濁音化規則', '複合數字的讀法'] },
        sourceItem: { value: 63, kanji: '六十三匹', reading: 'ろくじゅうさんびき' }
    },

    // ===== 綜合複習題 =====
    {
        id: 'animal_final', category: 'counters', subcategory: 'smallAnimals', type: 'pronunciation', isTrap: false,
        stem: '以下哪組「匹」的讀法都正確？', stem_zh: '以下哪組「匹」的讀法都正確？',
        options: [
            { text: '一匹(いっぴき)、三匹(さんびき)、八匹(はっぴき)', isCorrect: true, reason: '正確！1、8促音化+半濁音化，3濁音化。' },
            { text: '一匹(いちひき)、三匹(さんひき)、八匹(はちひき)', isCorrect: false, reason: '錯誤，這些都需要音變。' },
            { text: '一匹(いっびき)、三匹(さんぴき)、八匹(はっびき)', isCorrect: false, reason: '錯誤，1、8用半濁音，3用濁音。' },
            { text: '一匹(いちぴき)、三匹(さんびき)、八匹(はちぴき)', isCorrect: false, reason: '錯誤，1、8需要促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「匹」的完整音變規則：1/6/8/10→っぴき，3/何→びき，2/4/5/7/9→ひき。', relatedRules: ['量詞「匹」の総合規則'] },
        sourceItem: { value: 0, kanji: '匹總複習', reading: '音變規則' }
    }
];
