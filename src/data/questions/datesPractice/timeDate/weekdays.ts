import { DatesPracticeQuestion } from '../types';

// 星期練習題 (月曜日〜日曜日)
// 每個星期3題：發音題、單句敘述題、對話題
// 注意「曜日」的讀法是「ようび」

export const weekdayQuestions: DatesPracticeQuestion[] = [
    // ===== 月曜日 的三題 =====
    {
        id: 'weekday_mon_pron',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「月曜日」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「月曜日」的正確讀音是？',
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！「月曜日{げつようび}」讀作「げつようび」。' },
            { text: 'がつようび', isCorrect: false, reason: '陷阱！「月{がつ}」是月份的讀法，星期一讀「げつ」。' },
            { text: 'つきようび', isCorrect: false, reason: '「つき」是「月亮」的訓讀，星期使用音讀。' },
            { text: 'げつよび', isCorrect: false, reason: '缺少「う」，正確「げつようび」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「月曜日{げつようび}」讀作「げつようび」。「月{げつ}」在星期中使用音讀「げつ」，與月份的「がつ」不同。',
            trapExplanation: '這是陷阱題。學習者容易混淆月份的「〜がつ」與星期的「げつ〜」讀法。',
            relatedRules: ['「げつ」vs「がつ」的區別', '曜日的讀法']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },
    {
        id: 'weekday_mon_sent',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '今日は＿＿です。週の始まりです。',
        stem_zh: '今天是星期一，是一週的開始。',
        options: [
            { text: 'がつようび', isCorrect: false, reason: '「がつ」是月份的讀法。' },
            { text: 'げつようび', isCorrect: true, reason: '正確！星期一讀作「げつようび」。' },
            { text: 'つきようび', isCorrect: false, reason: '星期使用音讀「げつ」不是訓讀「つき」。' },
            { text: 'もくようび', isCorrect: false, reason: '這是木曜日（星期四）的讀法。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「月曜日{げつようび}」是一週的開始，讀作「げつようび」。',
            relatedRules: ['曜日的讀法', '一週的順序']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },
    {
        id: 'weekday_mon_dial',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '会議は何曜日ですか？',
        stem_zh: '會議是星期幾？',
        dialogue: {
            speakerA: '会議は何曜日ですか？',
            speakerB: '＿＿です。（星期一）'
        },
        options: [
            { text: 'がつようび', isCorrect: false, reason: '「がつ」是月份的讀法。' },
            { text: 'げつようび', isCorrect: true, reason: '正確！會議在星期一。' },
            { text: 'いちようび', isCorrect: false, reason: '星期不使用數字讀法。' },
            { text: 'げつよう', isCorrect: false, reason: '缺少「び」，正確「げつようび」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '回答「何曜日{なんようび}」時，星期一讀作「げつようび」。',
            relatedRules: ['曜日的質問與回答', '「何曜日」的使用']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },

    // ===== 火曜日 的三題 =====
    {
        id: 'weekday_tue_pron',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「火曜日」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「火曜日」的正確讀音是？',
        options: [
            { text: 'かようび', isCorrect: true, reason: '正確！「火曜日{かようび}」讀作「かようび」。' },
            { text: 'ひようび', isCorrect: false, reason: '「ひ」是「火{ひ}」的訓讀，星期使用音讀「か」。' },
            { text: 'ほようび', isCorrect: false, reason: '「ほ」不是「火{か}」的讀法。' },
            { text: 'かよび', isCorrect: false, reason: '缺少「う」，正確「かようび」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「火曜日{かようび}」讀作「かようび」，「火{か}」使用音讀。火星（Mars）主宰之日。',
            relatedRules: ['曜日的讀法', '七曜的起源']
        },
        sourceItem: { value: 'Tue', kanji: '火曜日', reading: 'かようび' }
    },
    {
        id: 'weekday_tue_sent',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿は燃えるごみの日です。',
        stem_zh: '星期二是可燃垃圾日。',
        options: [
            { text: 'ひようび', isCorrect: false, reason: '「ひ」是訓讀，星期使用音讀。' },
            { text: 'かようび', isCorrect: true, reason: '正確！火曜日{かようび}常是垃圾收集日。' },
            { text: 'ひよう', isCorrect: false, reason: '不完整且讀法錯誤。' },
            { text: 'かよう', isCorrect: false, reason: '缺少「び」，正確「かようび」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「火曜日{かようび}」在日本常是可燃垃圾收集日。',
            relatedRules: ['曜日的讀法', '日本的垃圾分類']
        },
        sourceItem: { value: 'Tue', kanji: '火曜日', reading: 'かようび' }
    },
    {
        id: 'weekday_tue_dial',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '次のテストはいつですか？',
        stem_zh: '下次考試是什麼時候？',
        dialogue: {
            speakerA: '次のテストはいつですか？',
            speakerB: '来週の＿＿です。（星期二）'
        },
        options: [
            { text: 'ひようび', isCorrect: false, reason: '「ひ」是訓讀，不用於星期。' },
            { text: 'かようび', isCorrect: true, reason: '正確！下週星期二有考試。' },
            { text: 'にようび', isCorrect: false, reason: '這是「二」的讀法，火曜日讀「か」。' },
            { text: 'げつようび', isCorrect: false, reason: '這是月曜日（星期一）。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「来週の火曜日{かようび}」表示下週星期二。',
            relatedRules: ['曜日的使用', '時間表達']
        },
        sourceItem: { value: 'Tue', kanji: '火曜日', reading: 'かようび' }
    },

    // ===== 水曜日 的三題 =====
    {
        id: 'weekday_wed_pron',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「水曜日」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「水曜日」的正確讀音是？',
        options: [
            { text: 'すいようび', isCorrect: true, reason: '正確！「水曜日{すいようび}」讀作「すいようび」。' },
            { text: 'みずようび', isCorrect: false, reason: '「みず」是「水{みず}」的訓讀，星期使用音讀「すい」。' },
            { text: 'しようび', isCorrect: false, reason: '「し」不是「水{すい}」的讀法。' },
            { text: 'すいよび', isCorrect: false, reason: '缺少「う」，正確「すいようび」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「水曜日{すいようび}」讀作「すいようび」，「水{すい}」使用音讀。水星（Mercury）主宰之日。',
            relatedRules: ['曜日的讀法', '音讀vs訓讀']
        },
        sourceItem: { value: 'Wed', kanji: '水曜日', reading: 'すいようび' }
    },
    {
        id: 'weekday_wed_sent',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿は週の真ん中です。',
        stem_zh: '星期三是一週的中間。',
        options: [
            { text: 'みずようび', isCorrect: false, reason: '「みず」是訓讀，星期使用音讀。' },
            { text: 'すいようび', isCorrect: true, reason: '正確！水曜日{すいようび}是一週的中間。' },
            { text: 'すいよう', isCorrect: false, reason: '缺少「び」。' },
            { text: 'さんようび', isCorrect: false, reason: '星期不使用數字「三」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「水曜日{すいようび}」位於一週的中間，讀作「すいようび」。',
            relatedRules: ['曜日的讀法', '一週的順序']
        },
        sourceItem: { value: 'Wed', kanji: '水曜日', reading: 'すいようび' }
    },
    {
        id: 'weekday_wed_dial',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '何曜日に映画を見ますか？',
        stem_zh: '你星期幾看電影？',
        dialogue: {
            speakerA: '何曜日に映画を見ますか？',
            speakerB: 'いつも＿＿に見ます。（星期三）'
        },
        options: [
            { text: 'みずようび', isCorrect: false, reason: '星期使用音讀「すい」。' },
            { text: 'すいようび', isCorrect: true, reason: '正確！每週水曜日{すいようび}看電影。' },
            { text: 'もくようび', isCorrect: false, reason: '這是木曜日（星期四）。' },
            { text: 'かようび', isCorrect: false, reason: '這是火曜日（星期二）。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「水曜日{すいようび}に〜」表示在星期三做某事。',
            relatedRules: ['曜日+に', '習慣的表達']
        },
        sourceItem: { value: 'Wed', kanji: '水曜日', reading: 'すいようび' }
    },

    // ===== 木曜日 的三題 =====
    {
        id: 'weekday_thu_pron',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「木曜日」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「木曜日」的正確讀音是？',
        options: [
            { text: 'もくようび', isCorrect: true, reason: '正確！「木曜日{もくようび}」讀作「もくようび」。' },
            { text: 'きようび', isCorrect: false, reason: '「き」是「木{き}」的訓讀，星期使用音讀「もく」。' },
            { text: 'ぼくようび', isCorrect: false, reason: '「ぼく」不是「木{もく}」的讀法，不濁音化。' },
            { text: 'もくよび', isCorrect: false, reason: '缺少「う」，正確「もくようび」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「木曜日{もくようび}」讀作「もくようび」，「木{もく}」使用音讀。木星（Jupiter）主宰之日。',
            relatedRules: ['曜日的讀法', '七曜與行星']
        },
        sourceItem: { value: 'Thu', kanji: '木曜日', reading: 'もくようび' }
    },
    {
        id: 'weekday_thu_sent',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿はサッカーの練習があります。',
        stem_zh: '星期四有足球練習。',
        options: [
            { text: 'きようび', isCorrect: false, reason: '「き」是訓讀，星期使用音讀「もく」。' },
            { text: 'もくようび', isCorrect: true, reason: '正確！木曜日{もくようび}有足球練習。' },
            { text: 'ぼくようび', isCorrect: false, reason: '「木{もく}」不濁音化。' },
            { text: 'よんようび', isCorrect: false, reason: '星期不使用數字「四」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「木曜日{もくようび}」讀作「もくようび」，常用於表達課外活動。',
            relatedRules: ['曜日的讀法', '日程表達']
        },
        sourceItem: { value: 'Thu', kanji: '木曜日', reading: 'もくようび' }
    },
    {
        id: 'weekday_thu_dial',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '日本語のクラスは何曜日ですか？',
        stem_zh: '日語課是星期幾？',
        dialogue: {
            speakerA: '日本語のクラスは何曜日ですか？',
            speakerB: '毎週＿＿です。（星期四）'
        },
        options: [
            { text: 'きようび', isCorrect: false, reason: '「き」是訓讀，不用於星期。' },
            { text: 'もくようび', isCorrect: true, reason: '正確！每週木曜日{もくようび}有日語課。' },
            { text: 'すいようび', isCorrect: false, reason: '這是水曜日（星期三）。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日（星期五）。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「毎週木曜日{もくようび}」表示每週星期四。',
            relatedRules: ['曜日的使用', '「毎週」的用法']
        },
        sourceItem: { value: 'Thu', kanji: '木曜日', reading: 'もくようび' }
    },

    // ===== 金曜日 的三題 =====
    {
        id: 'weekday_fri_pron',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「金曜日」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「金曜日」的正確讀音是？',
        options: [
            { text: 'きんようび', isCorrect: true, reason: '正確！「金曜日{きんようび}」讀作「きんようび」。' },
            { text: 'かねようび', isCorrect: false, reason: '「かね」是「金{かね}」（錢）的訓讀，星期使用音讀「きん」。' },
            { text: 'こんようび', isCorrect: false, reason: '「こん」是另一讀法（今），金曜日讀「きん」。' },
            { text: 'きんよび', isCorrect: false, reason: '缺少「う」，正確「きんようび」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「金曜日{きんようび}」讀作「きんようび」，「金{きん}」使用音讀。金星（Venus）主宰之日。',
            relatedRules: ['曜日的讀法', '「金{きん}」vs「かね」的區別']
        },
        sourceItem: { value: 'Fri', kanji: '金曜日', reading: 'きんようび' }
    },
    {
        id: 'weekday_fri_sent',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿の夜は友達と飲みに行きます。',
        stem_zh: '星期五晚上和朋友去喝酒。',
        options: [
            { text: 'かねようび', isCorrect: false, reason: '「かね」是訓讀，星期使用音讀「きん」。' },
            { text: 'きんようび', isCorrect: true, reason: '正確！金曜日{きんようび}的夜是周末前的放鬆時間。' },
            { text: 'ごようび', isCorrect: false, reason: '星期不使用數字「五」。' },
            { text: 'きんよう', isCorrect: false, reason: '缺少「び」，正確「きんようび」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「金曜日{きんようび}的夜」是週末前的社交時間，讀作「きんようび」。',
            relatedRules: ['曜日的讀法', '日本的社交文化']
        },
        sourceItem: { value: 'Fri', kanji: '金曜日', reading: 'きんようび' }
    },
    {
        id: 'weekday_fri_dial',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '週末の予定は？',
        stem_zh: '週末有什麼計畫？',
        dialogue: {
            speakerA: '週末の予定は？',
            speakerB: '＿＿から旅行に行きます。（星期五）'
        },
        options: [
            { text: 'かねようび', isCorrect: false, reason: '星期使用音讀「きん」不是「かね」。' },
            { text: 'きんようび', isCorrect: true, reason: '正確！從金曜日{きんようび}開始旅行。' },
            { text: 'もくようび', isCorrect: false, reason: '這是木曜日（星期四）。' },
            { text: 'どようび', isCorrect: false, reason: '這是土曜日（星期六）。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「金曜日{きんようび}から」表示從星期五開始。',
            relatedRules: ['曜日+から', '旅行計畫的表達']
        },
        sourceItem: { value: 'Fri', kanji: '金曜日', reading: 'きんようび' }
    },

    // ===== 土曜日 的三題 =====
    {
        id: 'weekday_sat_pron',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「土曜日」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「土曜日」的正確讀音是？',
        options: [
            { text: 'どようび', isCorrect: true, reason: '正確！「土曜日{どようび}」讀作「どようび」。' },
            { text: 'とようび', isCorrect: false, reason: '陷阱！「土{ど}」是濁音「ど」，不是清音「と」。' },
            { text: 'つちようび', isCorrect: false, reason: '「つち」是「土{つち}」的訓讀，星期使用音讀「ど」。' },
            { text: 'どよび', isCorrect: false, reason: '缺少「う」，正確「どようび」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「土曜日{どようび}」讀作「どようび」，「土{ど}」使用濁音音讀。土星（Saturn）主宰之日。',
            trapExplanation: '這是陷阱題。「土{ど}」的音讀是濁音「ど」，容易誤讀為清音「と」。',
            relatedRules: ['曜日的讀法', '「ど」vs「と」的區別']
        },
        sourceItem: { value: 'Sat', kanji: '土曜日', reading: 'どようび' }
    },
    {
        id: 'weekday_sat_sent',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿は家族と買い物に行きます。',
        stem_zh: '星期六和家人去購物。',
        options: [
            { text: 'とようび', isCorrect: false, reason: '「土{ど}」是濁音「ど」不是「と」。' },
            { text: 'どようび', isCorrect: true, reason: '正確！土曜日{どようび}是購物日。' },
            { text: 'つちようび', isCorrect: false, reason: '星期使用音讀「ど」不是訓讀。' },
            { text: 'ろくようび', isCorrect: false, reason: '星期不使用數字「六」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「土曜日{どようび}」是週末，常用於家庭活動，讀作「どようび」。',
            relatedRules: ['曜日的讀法', '週末的活動']
        },
        sourceItem: { value: 'Sat', kanji: '土曜日', reading: 'どようび' }
    },
    {
        id: 'weekday_sat_dial',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: 'パーティーは何曜日ですか？',
        stem_zh: '派對是星期幾？',
        dialogue: {
            speakerA: 'パーティーは何曜日ですか？',
            speakerB: '＿＿の夜です。（星期六）'
        },
        options: [
            { text: 'とようび', isCorrect: false, reason: '「土{ど}」は濁音「ど」。' },
            { text: 'どようび', isCorrect: true, reason: '正確！派對在土曜日{どようび}晚上。' },
            { text: 'にちようび', isCorrect: false, reason: '這是日曜日（星期日）。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日（星期五）。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「土曜日{どようび}的夜」是派對常見的時間。',
            relatedRules: ['曜日的使用', '社交活動']
        },
        sourceItem: { value: 'Sat', kanji: '土曜日', reading: 'どようび' }
    },

    // ===== 日曜日 的三題 =====
    {
        id: 'weekday_sun_pron',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「日曜日」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「日曜日」的正確讀音是？',
        options: [
            { text: 'にちようび', isCorrect: true, reason: '正確！「日曜日{にちようび}」讀作「にちようび」。' },
            { text: 'ひようび', isCorrect: false, reason: '陷阱！「ひ」是「日{ひ}」的訓讀，星期使用音讀「にち」。' },
            { text: 'じつようび', isCorrect: false, reason: '「じつ」是另一音讀（事実等），日曜日讀「にち」。' },
            { text: 'にちよび', isCorrect: false, reason: '缺少「う」，正確「にちようび」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「日曜日{にちようび}」讀作「にちようび」，「日{にち}」使用音讀。太陽（Sun）主宰之日。',
            trapExplanation: '這是陷阱題。「日{にち}」的訓讀是「ひ」，但星期使用音讀「にち」。',
            relatedRules: ['曜日的讀法', '「にち」vs「ひ」的區別']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },
    {
        id: 'weekday_sun_sent',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿は休みです。ゆっくりします。',
        stem_zh: '星期日休息，悠閒度過。',
        options: [
            { text: 'ひようび', isCorrect: false, reason: '「ひ」是訓讀，星期使用音讀「にち」。' },
            { text: 'にちようび', isCorrect: true, reason: '正確！日曜日{にちようび}是休息日。' },
            { text: 'にちよう', isCorrect: false, reason: '缺少「び」，正確「にちようび」。' },
            { text: 'しちようび', isCorrect: false, reason: '「しち」是「七{しち}」，這裡是「日{にち}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「日曜日{にちようび}」是週末的休息日，讀作「にちようび」。',
            relatedRules: ['曜日的讀法', '休日的表達']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },
    {
        id: 'weekday_sun_dial',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '明日は何曜日ですか？',
        stem_zh: '明天是星期幾？',
        dialogue: {
            speakerA: '明日は何曜日ですか？',
            speakerB: '＿＿です。（星期日）'
        },
        options: [
            { text: 'ひようび', isCorrect: false, reason: '星期使用音讀「にち」不是「ひ」。' },
            { text: 'にちようび', isCorrect: true, reason: '正確！明天是日曜日{にちようび}。' },
            { text: 'どようび', isCorrect: false, reason: '這是土曜日（星期六）。' },
            { text: 'げつようび', isCorrect: false, reason: '這是月曜日（星期一）。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '回答「何曜日{なんようび}」時，星期日讀作「にちようび」。',
            relatedRules: ['曜日的質問與回答', '「明日」的使用']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },

    // ===== 追加練習題：應用情境 =====
    {
        id: 'weekday_app_01',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '病院は＿＿が休診日です。',
        stem_zh: '醫院星期日休診。',
        options: [
            { text: 'にちようび', isCorrect: true, reason: '正確！醫院通常日曜日休診。' },
            { text: 'ひようび', isCorrect: false, reason: '「ひ」是訓讀，星期使用音讀「にち」。' },
            { text: 'げつようび', isCorrect: false, reason: '這是月曜日（星期一）。' },
            { text: 'どようび', isCorrect: false, reason: '這是土曜日（星期六）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本的醫院通常「日曜日」休診，讀作「にちようび」。',
            relatedRules: ['曜日的讀法', '日本的醫療制度']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },
    {
        id: 'weekday_app_02',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '銀行は何曜日まで営業していますか？',
        stem_zh: '銀行營業到星期幾？',
        dialogue: {
            speakerA: '銀行は何曜日まで営業していますか？',
            speakerB: '＿＿までです。（星期五）'
        },
        options: [
            { text: 'きんようび', isCorrect: true, reason: '正確！銀行通常營業到金曜日。' },
            { text: 'かねようび', isCorrect: false, reason: '星期使用音讀「きん」不是「かね」。' },
            { text: 'もくようび', isCorrect: false, reason: '這是木曜日（星期四）。' },
            { text: 'どようび', isCorrect: false, reason: '銀行通常土曜日不營業。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本銀行通常「金曜日」為最後營業日，週末休息。',
            relatedRules: ['曜日的使用', '日本的銀行營業時間']
        },
        sourceItem: { value: 'Fri', kanji: '金曜日', reading: 'きんようび' }
    },
    {
        id: 'weekday_app_03',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: 'スーパー的特売日は毎週＿＿です。',
        stem_zh: '超市的特價日是每週星期三。',
        options: [
            { text: 'すいようび', isCorrect: true, reason: '正確！水曜日是常見的特價日。' },
            { text: 'みずようび', isCorrect: false, reason: '「みず」是訓讀，使用音讀「すい」。' },
            { text: 'さんようび', isCorrect: false, reason: '星期不使用數字「三」。' },
            { text: 'かようび', isCorrect: false, reason: '這是火曜日（星期二）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本超市常在「水曜日」舉辦特賣，讀作「すいようび」。',
            relatedRules: ['曜日的讀法', '日本的購物習慣']
        },
        sourceItem: { value: 'Wed', kanji: '水曜日', reading: 'すいようび' }
    },
    {
        id: 'weekday_app_04',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: 'ジムは何曜日に行きますか？',
        stem_zh: '你星期幾去健身房？',
        dialogue: {
            speakerA: 'ジムは何曜日に行きますか？',
            speakerB: '＿＿と＿＿に行きます。（星期二和星期四）'
        },
        options: [
            { text: 'かようび・もくようび', isCorrect: true, reason: '正確！火曜日和木曜日去健身房。' },
            { text: 'ひようび・きようび', isCorrect: false, reason: '這些是訓讀，星期使用音讀。' },
            { text: 'げつようび・すいようび', isCorrect: false, reason: '這是星期一和星期三。' },
            { text: 'きんようび・どようび', isCorrect: false, reason: '這是星期五和星期六。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「火曜日」讀「かようび」，「木曜日」讀「もくようび」。',
            relatedRules: ['曜日的讀法', '複數曜日的表達']
        },
        sourceItem: { value: 'Tue/Thu', kanji: '火曜日・木曜日', reading: 'かようび・もくようび' }
    },
    {
        id: 'weekday_app_05',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: true,
        stem: '「今週の月曜日」の「月」的讀法是？',
        stem_zh: '「今週の月曜日」中「月」的讀法是？',
        options: [
            { text: 'げつ', isCorrect: true, reason: '正確！星期一的「月」讀「げつ」。' },
            { text: 'がつ', isCorrect: false, reason: '陷阱！「がつ」是月份的讀法，不是星期。' },
            { text: 'つき', isCorrect: false, reason: '「つき」是月亮的訓讀。' },
            { text: 'げち', isCorrect: false, reason: '不存在這個讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '星期一「月曜日」的「月」讀「げつ」，與月份的「がつ」不同。',
            trapExplanation: '「げつ」用於星期（月曜日），「がつ」用於月份（一月）。',
            relatedRules: ['げつ vs がつ', '曜日的讀法']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },
    {
        id: 'weekday_app_06',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: 'デートは何曜日がいいですか？',
        stem_zh: '約會選星期幾好？',
        dialogue: {
            speakerA: 'デートは何曜日がいいですか？',
            speakerB: '＿＿がいいです。（星期六）'
        },
        options: [
            { text: 'どようび', isCorrect: true, reason: '正確！土曜日是約會的好日子。' },
            { text: 'とようび', isCorrect: false, reason: '「土」是濁音「ど」不是清音「と」。' },
            { text: 'つちようび', isCorrect: false, reason: '星期使用音讀「ど」不是訓讀。' },
            { text: 'ろくようび', isCorrect: false, reason: '星期不使用數字「六」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「土曜日」讀作「どようび」，是週末約會的熱門日子。',
            relatedRules: ['曜日的讀法', '週末的活動']
        },
        sourceItem: { value: 'Sat', kanji: '土曜日', reading: 'どようび' }
    },
    {
        id: 'weekday_app_07',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '図書館は＿＿が休館日です。',
        stem_zh: '圖書館星期一休館。',
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！很多圖書館月曜日休館。' },
            { text: 'がつようび', isCorrect: false, reason: '「がつ」是月份讀法，星期一讀「げつ」。' },
            { text: 'にちようび', isCorrect: false, reason: '這是日曜日（星期日）。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日（星期五）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本很多圖書館「月曜日」休館，讀作「げつようび」。',
            relatedRules: ['曜日的讀法', '公共設施的休館日']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },
    {
        id: 'weekday_app_08',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '美容院の予約は？',
        stem_zh: '美容院的預約？',
        dialogue: {
            speakerA: '美容院の予約は何曜日にしましたか？',
            speakerB: '＿＿の午後です。（星期四）'
        },
        options: [
            { text: 'もくようび', isCorrect: true, reason: '正確！木曜日下午預約了美容院。' },
            { text: 'きようび', isCorrect: false, reason: '「き」是訓讀，使用音讀「もく」。' },
            { text: 'すいようび', isCorrect: false, reason: '這是水曜日（星期三）。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日（星期五）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「木曜日」讀作「もくようび」，使用音讀「もく」。',
            relatedRules: ['曜日的讀法', '預約的表達']
        },
        sourceItem: { value: 'Thu', kanji: '木曜日', reading: 'もくようび' }
    },

    // ===== 時態表達題：先週/今週/来週 =====
    {
        id: 'weekday_time_01',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '先週の＿＿に友達に会いました。',
        stem_zh: '上週星期三見了朋友。',
        options: [
            { text: 'すいようび', isCorrect: true, reason: '正確！先週の水曜日に會った。' },
            { text: 'みずようび', isCorrect: false, reason: '「みず」是訓讀，使用音讀「すい」。' },
            { text: 'さんようび', isCorrect: false, reason: '星期不使用數字表達。' },
            { text: 'かようび', isCorrect: false, reason: '這是火曜日（星期二）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「先週の水曜日」表示上週星期三，「水曜日」讀「すいようび」。',
            relatedRules: ['曜日的讀法', '過去時態表達']
        },
        sourceItem: { value: 'Wed', kanji: '水曜日', reading: 'すいようび' }
    },
    {
        id: 'weekday_time_02',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '来週の予定は？',
        stem_zh: '下週的計畫？',
        dialogue: {
            speakerA: '来週の予定はありますか？',
            speakerB: '来週の＿＿に出張があります。（星期二）'
        },
        options: [
            { text: 'かようび', isCorrect: true, reason: '正確！來週火曜日有出差。' },
            { text: 'ひようび', isCorrect: false, reason: '「ひ」是訓讀，使用音讀「か」。' },
            { text: 'げつようび', isCorrect: false, reason: '這是月曜日（星期一）。' },
            { text: 'すいようび', isCorrect: false, reason: '這是水曜日（星期三）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「来週の火曜日」表示下週星期二，「火曜日」讀「かようび」。',
            relatedRules: ['曜日的讀法', '未來時態表達']
        },
        sourceItem: { value: 'Tue', kanji: '火曜日', reading: 'かようび' }
    },
    {
        id: 'weekday_time_03',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '今週の＿＿は祝日です。',
        stem_zh: '這週星期一是假日。',
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！今週の月曜日是祝日。' },
            { text: 'がつようび', isCorrect: false, reason: '「がつ」是月份讀法，星期讀「げつ」。' },
            { text: 'にちようび', isCorrect: false, reason: '這是日曜日（星期日）。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日（星期五）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「今週の月曜日」表示這週星期一，日本有許多週一的祝日。',
            relatedRules: ['曜日的讀法', '日本的祝日']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },

    // ===== 週末/平日概念題 =====
    {
        id: 'weekday_weekend_01',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '週末は＿＿と＿＿です。正確的讀法是？',
        stem_zh: '週末是星期六和星期日，正確的讀法是？',
        options: [
            { text: 'どようび・にちようび', isCorrect: true, reason: '正確！週末是土曜日和日曜日。' },
            { text: 'とようび・ひようび', isCorrect: false, reason: '這些是錯誤讀法，應為濁音和音讀。' },
            { text: 'つちようび・にちようび', isCorrect: false, reason: '「土」使用音讀「ど」不是訓讀。' },
            { text: 'どようび・ひようび', isCorrect: false, reason: '「日」在星期中讀「にち」不是「ひ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '週末指「土曜日」(どようび)和「日曜日」(にちようび)。',
            relatedRules: ['曜日的讀法', '週末的概念']
        },
        sourceItem: { value: 'Weekend', kanji: '土曜日・日曜日', reading: 'どようび・にちようび' }
    },
    {
        id: 'weekday_weekend_02',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '週末はどう過ごしますか？',
        stem_zh: '週末怎麼過？',
        dialogue: {
            speakerA: '週末はどう過ごしますか？',
            speakerB: '＿＿は買い物、＿＿は休みます。（星期六、星期日）'
        },
        options: [
            { text: 'どようび・にちようび', isCorrect: true, reason: '正確！土曜日購物、日曜日休息。' },
            { text: 'とようび・ひようび', isCorrect: false, reason: '讀法錯誤，應為「ど」和「にち」。' },
            { text: 'きんようび・どようび', isCorrect: false, reason: '金曜日不是週末。' },
            { text: 'にちようび・げつようび', isCorrect: false, reason: '月曜日是平日不是週末。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '週末計畫常分「土曜日」活動日和「日曜日」休息日。',
            relatedRules: ['曜日的讀法', '週末的過ごし方']
        },
        sourceItem: { value: 'Weekend', kanji: '土曜日・日曜日', reading: 'どようび・にちようび' }
    },
    {
        id: 'weekday_weekend_03',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '平日は＿＿から＿＿までです。',
        stem_zh: '平日是從星期一到星期五。',
        options: [
            { text: 'げつようび・きんようび', isCorrect: true, reason: '正確！平日是月曜日到金曜日。' },
            { text: 'がつようび・きんようび', isCorrect: false, reason: '「月曜日」讀「げつ」不是「がつ」。' },
            { text: 'にちようび・どようび', isCorrect: false, reason: '這是週末，不是平日。' },
            { text: 'げつようび・どようび', isCorrect: false, reason: '土曜日是週末，不含在平日。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '平日指「月曜日」到「金曜日」，共五天工作日。',
            relatedRules: ['曜日的讀法', '平日vs週末']
        },
        sourceItem: { value: 'Weekdays', kanji: '月曜日〜金曜日', reading: 'げつようび〜きんようび' }
    },

    // ===== 毎週〜曜日 習慣表達 =====
    {
        id: 'weekday_habit_01',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '毎週＿＿にピアノを習っています。',
        stem_zh: '每週星期五學鋼琴。',
        options: [
            { text: 'きんようび', isCorrect: true, reason: '正確！毎週金曜日學鋼琴。' },
            { text: 'かねようび', isCorrect: false, reason: '「金」讀「きん」不是「かね」。' },
            { text: 'ごようび', isCorrect: false, reason: '星期不使用數字「五」。' },
            { text: 'もくようび', isCorrect: false, reason: '這是木曜日（星期四）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「毎週金曜日」表示每週星期五的固定習慣。',
            relatedRules: ['曜日的讀法', '習慣的表達']
        },
        sourceItem: { value: 'Fri', kanji: '金曜日', reading: 'きんようび' }
    },
    {
        id: 'weekday_habit_02',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: 'いつジョギングしますか？',
        stem_zh: '什麼時候慢跑？',
        dialogue: {
            speakerA: 'いつジョギングしますか？',
            speakerB: '毎週＿＿の朝です。（星期日）'
        },
        options: [
            { text: 'にちようび', isCorrect: true, reason: '正確！每週日曜日早上慢跑。' },
            { text: 'ひようび', isCorrect: false, reason: '「日」在星期讀「にち」不是「ひ」。' },
            { text: 'どようび', isCorrect: false, reason: '這是土曜日（星期六）。' },
            { text: 'げつようび', isCorrect: false, reason: '這是月曜日（星期一）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「毎週日曜日の朝」表示每週日早晨的運動習慣。',
            relatedRules: ['曜日的讀法', '運動習慣的表達']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },
    {
        id: 'weekday_habit_03',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '毎週＿＿と＿＿に日本語の授業があります。',
        stem_zh: '每週星期一和星期三有日語課。',
        options: [
            { text: 'げつようび・すいようび', isCorrect: true, reason: '正確！月曜日和水曜日有課。' },
            { text: 'がつようび・みずようび', isCorrect: false, reason: '這些是錯誤讀法。' },
            { text: 'かようび・もくようび', isCorrect: false, reason: '這是星期二和星期四。' },
            { text: 'げつようび・きんようび', isCorrect: false, reason: '這是星期一和星期五。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '課程常安排在「月曜日」和「水曜日」，隔日上課。',
            relatedRules: ['曜日的讀法', '課程表的表達']
        },
        sourceItem: { value: 'Mon/Wed', kanji: '月曜日・水曜日', reading: 'げつようび・すいようび' }
    },

    // ===== 陷阱題：常見錯誤 =====
    {
        id: 'weekday_trap_01',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「一月」和「月曜日」的「月」讀法相同嗎？',
        stem_zh: '「一月」和「月曜日」的「月」讀法相同嗎？',
        options: [
            { text: '不同：がつ vs げつ', isCorrect: true, reason: '正確！一月讀「いちがつ」，月曜日讀「げつようび」。' },
            { text: '相同：都是がつ', isCorrect: false, reason: '錯誤！月曜日的「月」讀「げつ」。' },
            { text: '相同：都是げつ', isCorrect: false, reason: '錯誤！一月的「月」讀「がつ」。' },
            { text: '不同：つき vs げつ', isCorrect: false, reason: '一月不讀「つき」，讀「がつ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '月份用「がつ」（一月＝いちがつ），星期用「げつ」（月曜日＝げつようび）。',
            trapExplanation: '這是最常見的混淆點，務必區分「がつ」和「げつ」。',
            relatedRules: ['がつ vs げつ', '曜日と月份的區別']
        },
        sourceItem: { value: 'comparison', kanji: '月', reading: 'がつ/げつ' }
    },
    {
        id: 'weekday_trap_02',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「日曜日」有幾個「日」？讀法分別是？',
        stem_zh: '「日曜日」有幾個「日」？讀法分別是？',
        options: [
            { text: '兩個：にち・び', isCorrect: true, reason: '正確！日(にち)曜日(び)，兩個日字讀法不同。' },
            { text: '兩個：都是にち', isCorrect: false, reason: '最後的「日」讀「び」不是「にち」。' },
            { text: '兩個：都是ひ', isCorrect: false, reason: '曜日中不用訓讀「ひ」。' },
            { text: '一個：にち', isCorrect: false, reason: '日曜日中有兩個「日」字。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「日曜日」＝日(にち)＋曜(よう)＋日(び)，兩個「日」讀法不同。',
            trapExplanation: '前面的「日」讀「にち」表示太陽，後面的「日」讀「び」表示天。',
            relatedRules: ['曜日的構成', '「日」的複數讀法']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },
    {
        id: 'weekday_trap_03',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「火」在「火事」和「火曜日」中讀法相同嗎？',
        stem_zh: '「火」在「火事」和「火曜日」中讀法相同嗎？',
        options: [
            { text: '相同：都是か', isCorrect: true, reason: '正確！火事(かじ)和火曜日(かようび)都讀「か」。' },
            { text: '不同：ひ vs か', isCorrect: false, reason: '火事也讀「か」不是「ひ」。' },
            { text: '相同：都是ひ', isCorrect: false, reason: '兩者都不讀訓讀「ひ」。' },
            { text: '不同：ほ vs か', isCorrect: false, reason: '「火」沒有「ほ」的讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「火」的音讀是「か」，在火事和火曜日中都使用音讀。',
            trapExplanation: '雖然訓讀「ひ」常見於單獨使用，但複合詞多用音讀「か」。',
            relatedRules: ['火的讀法', '音讀vs訓讀']
        },
        sourceItem: { value: 'Tue', kanji: '火曜日', reading: 'かようび' }
    },
    {
        id: 'weekday_trap_04',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「土」在「土地」和「土曜日」中讀法相同嗎？',
        stem_zh: '「土」在「土地」和「土曜日」中讀法相同嗎？',
        options: [
            { text: '相同：都是ど', isCorrect: true, reason: '正確！土地(とち)...不對，土地讀「とち」。' },
            { text: '不同：と vs ど', isCorrect: true, reason: '正確！土地讀「とち」，土曜日讀「どようび」。' },
            { text: '相同：都是と', isCorrect: false, reason: '土曜日讀濁音「ど」。' },
            { text: '相同：都是つち', isCorrect: false, reason: '這是訓讀，兩者都用音讀。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「土」有兩個音讀：土地(とち)用「と」，土曜日(どようび)用「ど」。',
            trapExplanation: '要注意「土」在不同詞中可能清音或濁音。',
            relatedRules: ['土的讀法', '清音vs濁音']
        },
        sourceItem: { value: 'Sat', kanji: '土曜日', reading: 'どようび' }
    },

    // ===== 何曜日疑問詞題 =====
    {
        id: 'weekday_question_01',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「何曜日」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「何曜日」的正確讀法是？',
        options: [
            { text: 'なんようび', isCorrect: true, reason: '正確！「何曜日」讀「なんようび」。' },
            { text: 'なにようび', isCorrect: false, reason: '「何」在此讀「なん」不是「なに」。' },
            { text: 'かようび', isCorrect: false, reason: '這是「火曜日」的讀法。' },
            { text: 'なんよび', isCorrect: false, reason: '缺少「う」，應為「なんようび」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何曜日」讀「なんようび」，用於詢問星期幾。',
            relatedRules: ['何的讀法', '疑問詞的使用']
        },
        sourceItem: { value: 'What day', kanji: '何曜日', reading: 'なんようび' }
    },
    {
        id: 'weekday_question_02',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '今日は何曜日ですか？',
        stem_zh: '今天是星期幾？',
        dialogue: {
            speakerA: '今日は何曜日ですか？',
            speakerB: '今日は＿＿です。（星期四）'
        },
        options: [
            { text: 'もくようび', isCorrect: true, reason: '正確！今天是木曜日。' },
            { text: 'きようび', isCorrect: false, reason: '「木」讀「もく」不是「き」。' },
            { text: 'よんようび', isCorrect: false, reason: '星期不用數字「四」。' },
            { text: 'すいようび', isCorrect: false, reason: '這是水曜日（星期三）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '回答「何曜日」時，直接說星期名稱，如「木曜日」。',
            relatedRules: ['曜日的回答', '日常會話']
        },
        sourceItem: { value: 'Thu', kanji: '木曜日', reading: 'もくようび' }
    },
    {
        id: 'weekday_question_03',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '誕生日は何曜日でしたか？',
        stem_zh: '生日是星期幾？',
        dialogue: {
            speakerA: '誕生日は何曜日でしたか？',
            speakerB: '＿＿でした。（星期六）'
        },
        options: [
            { text: 'どようび', isCorrect: true, reason: '正確！生日是土曜日。' },
            { text: 'とようび', isCorrect: false, reason: '「土」讀濁音「ど」。' },
            { text: 'ろくようび', isCorrect: false, reason: '星期不用數字「六」。' },
            { text: 'にちようび', isCorrect: false, reason: '這是日曜日（星期日）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「でした」是過去式，回答過去某天是哪個星期。',
            relatedRules: ['曜日的回答', '過去式的使用']
        },
        sourceItem: { value: 'Sat', kanji: '土曜日', reading: 'どようび' }
    },

    // ===== 七曜起源與行星對應 =====
    {
        id: 'weekday_origin_01',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '月曜日對應「月」（Moon），讀作？',
        stem_zh: '月曜日對應「月」（Moon），讀作？',
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！月曜日對應月亮，讀「げつようび」。' },
            { text: 'がつようび', isCorrect: false, reason: '「がつ」是月份讀法。' },
            { text: 'つきようび', isCorrect: false, reason: '星期使用音讀「げつ」。' },
            { text: 'むーんようび', isCorrect: false, reason: '日語不這樣讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '七曜源自天體：月曜日對應月亮（Moon），讀「げつようび」。',
            relatedRules: ['七曜的起源', '曜日と天體']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },
    {
        id: 'weekday_origin_02',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '火曜日對應「火星」（Mars），讀作？',
        stem_zh: '火曜日對應「火星」（Mars），讀作？',
        options: [
            { text: 'かようび', isCorrect: true, reason: '正確！火曜日對應火星，讀「かようび」。' },
            { text: 'ひようび', isCorrect: false, reason: '「ひ」是訓讀，星期用音讀「か」。' },
            { text: 'まーずようび', isCorrect: false, reason: '日語不這樣讀。' },
            { text: 'かせいようび', isCorrect: false, reason: '不讀「火星ようび」，是「火曜日」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '火曜日對應火星（Mars），使用「火」的音讀「か」。',
            relatedRules: ['七曜的起源', '曜日と惑星']
        },
        sourceItem: { value: 'Tue', kanji: '火曜日', reading: 'かようび' }
    },
    {
        id: 'weekday_origin_03',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '水曜日對應「水星」（Mercury），讀作？',
        stem_zh: '水曜日對應「水星」（Mercury），讀作？',
        options: [
            { text: 'すいようび', isCorrect: true, reason: '正確！水曜日對應水星，讀「すいようび」。' },
            { text: 'みずようび', isCorrect: false, reason: '「みず」是訓讀，星期用音讀「すい」。' },
            { text: 'すいせいようび', isCorrect: false, reason: '不讀「水星ようび」，是「水曜日」。' },
            { text: 'あくあようび', isCorrect: false, reason: '日語不用外來語讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '水曜日對應水星（Mercury），使用「水」的音讀「すい」。',
            relatedRules: ['七曜的起源', '曜日と惑星']
        },
        sourceItem: { value: 'Wed', kanji: '水曜日', reading: 'すいようび' }
    },
    {
        id: 'weekday_origin_04',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '木曜日對應「木星」（Jupiter），讀作？',
        stem_zh: '木曜日對應「木星」（Jupiter），讀作？',
        options: [
            { text: 'もくようび', isCorrect: true, reason: '正確！木曜日對應木星，讀「もくようび」。' },
            { text: 'きようび', isCorrect: false, reason: '「き」是訓讀，星期用音讀「もく」。' },
            { text: 'ぼくようび', isCorrect: false, reason: '「木」不濁音化，讀「もく」。' },
            { text: 'もくせいようび', isCorrect: false, reason: '不讀「木星ようび」，是「木曜日」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '木曜日對應木星（Jupiter），使用「木」的音讀「もく」。',
            relatedRules: ['七曜的起源', '曜日と惑星']
        },
        sourceItem: { value: 'Thu', kanji: '木曜日', reading: 'もくようび' }
    },
    {
        id: 'weekday_origin_05',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '金曜日對應「金星」（Venus），讀作？',
        stem_zh: '金曜日對應「金星」（Venus），讀作？',
        options: [
            { text: 'きんようび', isCorrect: true, reason: '正確！金曜日對應金星，讀「きんようび」。' },
            { text: 'かねようび', isCorrect: false, reason: '「かね」是訓讀（錢），星期用音讀「きん」。' },
            { text: 'こんようび', isCorrect: false, reason: '「金」在此讀「きん」不是「こん」。' },
            { text: 'きんせいようび', isCorrect: false, reason: '不讀「金星ようび」，是「金曜日」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '金曜日對應金星（Venus），使用「金」的音讀「きん」。',
            relatedRules: ['七曜的起源', '曜日と惑星']
        },
        sourceItem: { value: 'Fri', kanji: '金曜日', reading: 'きんようび' }
    },
    {
        id: 'weekday_origin_06',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '土曜日對應「土星」（Saturn），讀作？',
        stem_zh: '土曜日對應「土星」（Saturn），讀作？',
        options: [
            { text: 'どようび', isCorrect: true, reason: '正確！土曜日對應土星，讀「どようび」。' },
            { text: 'とようび', isCorrect: false, reason: '「土」在曜日讀濁音「ど」。' },
            { text: 'つちようび', isCorrect: false, reason: '「つち」是訓讀，星期用音讀「ど」。' },
            { text: 'どせいようび', isCorrect: false, reason: '不讀「土星ようび」，是「土曜日」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '土曜日對應土星（Saturn），使用「土」的音讀「ど」（濁音）。',
            relatedRules: ['七曜的起源', '曜日と惑星']
        },
        sourceItem: { value: 'Sat', kanji: '土曜日', reading: 'どようび' }
    },
    {
        id: 'weekday_origin_07',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '日曜日對應「太陽」（Sun），讀作？',
        stem_zh: '日曜日對應「太陽」（Sun），讀作？',
        options: [
            { text: 'にちようび', isCorrect: true, reason: '正確！日曜日對應太陽，讀「にちようび」。' },
            { text: 'ひようび', isCorrect: false, reason: '「ひ」是訓讀，星期用音讀「にち」。' },
            { text: 'たいようようび', isCorrect: false, reason: '不讀「太陽ようび」，是「日曜日」。' },
            { text: 'じつようび', isCorrect: false, reason: '「日」在曜日讀「にち」不是「じつ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日曜日對應太陽（Sun），使用「日」的音讀「にち」。',
            relatedRules: ['七曜的起源', '曜日と天體']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },

    // ===== 更多應用情境題 =====
    {
        id: 'weekday_app_09',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: 'アルバイトは＿＿と＿＿です。',
        stem_zh: '打工是星期三和星期五。',
        options: [
            { text: 'すいようび・きんようび', isCorrect: true, reason: '正確！水曜日和金曜日打工。' },
            { text: 'みずようび・かねようび', isCorrect: false, reason: '這些是訓讀，星期用音讀。' },
            { text: 'かようび・もくようび', isCorrect: false, reason: '這是星期二和星期四。' },
            { text: 'げつようび・きんようび', isCorrect: false, reason: '這是星期一和星期五。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「水曜日」讀「すいようび」，「金曜日」讀「きんようび」。',
            relatedRules: ['曜日的讀法', '打工日程']
        },
        sourceItem: { value: 'Wed/Fri', kanji: '水曜日・金曜日', reading: 'すいようび・きんようび' }
    },
    {
        id: 'weekday_app_10',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '塾は何曜日ですか？',
        stem_zh: '補習班是星期幾？',
        dialogue: {
            speakerA: '塾は何曜日に行きますか？',
            speakerB: '毎週＿＿に行きます。（星期六）'
        },
        options: [
            { text: 'どようび', isCorrect: true, reason: '正確！每週土曜日去補習班。' },
            { text: 'とようび', isCorrect: false, reason: '「土」讀濁音「ど」。' },
            { text: 'にちようび', isCorrect: false, reason: '這是日曜日（星期日）。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日（星期五）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本學生常在「土曜日」上補習班。',
            relatedRules: ['曜日的讀法', '日本的教育']
        },
        sourceItem: { value: 'Sat', kanji: '土曜日', reading: 'どようび' }
    },
    {
        id: 'weekday_app_11',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿は不燃ごみの日です。',
        stem_zh: '星期四是不可燃垃圾日。',
        options: [
            { text: 'もくようび', isCorrect: true, reason: '正確！木曜日是不燃垃圾日。' },
            { text: 'きようび', isCorrect: false, reason: '「木」讀「もく」不是「き」。' },
            { text: 'かようび', isCorrect: false, reason: '這是火曜日（星期二）。' },
            { text: 'すいようび', isCorrect: false, reason: '這是水曜日（星期三）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本的垃圾分類很嚴格，不同曜日收不同種類。',
            relatedRules: ['曜日的讀法', '垃圾分類']
        },
        sourceItem: { value: 'Thu', kanji: '木曜日', reading: 'もくようび' }
    },
    {
        id: 'weekday_app_12',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '定休日はいつですか？',
        stem_zh: '公休日是哪天？',
        dialogue: {
            speakerA: 'このお店の定休日はいつですか？',
            speakerB: '毎週＿＿です。（星期二）'
        },
        options: [
            { text: 'かようび', isCorrect: true, reason: '正確！每週火曜日公休。' },
            { text: 'ひようび', isCorrect: false, reason: '「火」讀「か」不是「ひ」。' },
            { text: 'げつようび', isCorrect: false, reason: '這是月曜日（星期一）。' },
            { text: 'すいようび', isCorrect: false, reason: '這是水曜日（星期三）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本很多店家選「火曜日」作為定休日。',
            relatedRules: ['曜日的讀法', '日本的店舖']
        },
        sourceItem: { value: 'Tue', kanji: '火曜日', reading: 'かようび' }
    },
    {
        id: 'weekday_app_13',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '会社は＿＿から＿＿まで働きます。',
        stem_zh: '公司從星期一工作到星期五。',
        options: [
            { text: 'げつようび・きんようび', isCorrect: true, reason: '正確！月曜日到金曜日工作。' },
            { text: 'がつようび・きんようび', isCorrect: false, reason: '「月曜日」讀「げつ」。' },
            { text: 'にちようび・どようび', isCorrect: false, reason: '這是週末，不是工作日。' },
            { text: 'げつようび・どようび', isCorrect: false, reason: '一般不含土曜日。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '標準工作週是「月曜日」到「金曜日」五天。',
            relatedRules: ['曜日的讀法', '工作週']
        },
        sourceItem: { value: 'Mon-Fri', kanji: '月曜日〜金曜日', reading: 'げつようび〜きんようび' }
    },
    {
        id: 'weekday_app_14',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '美術館は何曜日が休みですか？',
        stem_zh: '美術館星期幾休館？',
        dialogue: {
            speakerA: '美術館は何曜日が休みですか？',
            speakerB: '＿＿が休館日です。（星期一）'
        },
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！很多美術館月曜日休館。' },
            { text: 'がつようび', isCorrect: false, reason: '「月曜日」讀「げつ」。' },
            { text: 'にちようび', isCorrect: false, reason: '美術館通常日曜日開館。' },
            { text: 'どようび', isCorrect: false, reason: '美術館通常土曜日開館。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本很多美術館、博物館「月曜日」休館。',
            relatedRules: ['曜日的讀法', '日本的文化施設']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },

    // ===== 縮寫與簡稱 =====
    {
        id: 'weekday_abbrev_01',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「月」單獨表示星期一時怎麼讀？',
        stem_zh: '「月」單獨表示星期一時怎麼讀？',
        options: [
            { text: 'げつ', isCorrect: true, reason: '正確！簡稱時讀「げつ」。' },
            { text: 'がつ', isCorrect: false, reason: '「がつ」是月份的讀法。' },
            { text: 'つき', isCorrect: false, reason: '「つき」是月亮的訓讀。' },
            { text: 'もん', isCorrect: false, reason: '不存在這個讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '行事曆上「月」代表月曜日，讀「げつ」。',
            relatedRules: ['曜日的略稱', 'カレンダー表記']
        },
        sourceItem: { value: 'Mon', kanji: '月', reading: 'げつ' }
    },
    {
        id: 'weekday_abbrev_02',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '行事曆上「火・水・木」怎麼讀？',
        stem_zh: '行事曆上「火・水・木」怎麼讀？',
        options: [
            { text: 'か・すい・もく', isCorrect: true, reason: '正確！星期二三四的簡稱。' },
            { text: 'ひ・みず・き', isCorrect: false, reason: '這些是訓讀，星期用音讀。' },
            { text: 'か・すい・ぼく', isCorrect: false, reason: '「木」不濁音化，讀「もく」。' },
            { text: 'ほ・すい・もく', isCorrect: false, reason: '「火」讀「か」不是「ほ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「火」讀「か」、「水」讀「すい」、「木」讀「もく」。',
            relatedRules: ['曜日的略稱', 'カレンダー表記']
        },
        sourceItem: { value: 'Tue/Wed/Thu', kanji: '火・水・木', reading: 'か・すい・もく' }
    },
    {
        id: 'weekday_abbrev_03',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '行事曆上「金・土・日」怎麼讀？',
        stem_zh: '行事曆上「金・土・日」怎麼讀？',
        options: [
            { text: 'きん・ど・にち', isCorrect: true, reason: '正確！星期五六日的簡稱。' },
            { text: 'かね・つち・ひ', isCorrect: false, reason: '這些是訓讀，星期用音讀。' },
            { text: 'きん・と・にち', isCorrect: false, reason: '「土」讀濁音「ど」。' },
            { text: 'こん・ど・じつ', isCorrect: false, reason: '「金」讀「きん」，「日」讀「にち」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「金」讀「きん」、「土」讀「ど」、「日」讀「にち」。',
            relatedRules: ['曜日的略稱', 'カレンダー表記']
        },
        sourceItem: { value: 'Fri/Sat/Sun', kanji: '金・土・日', reading: 'きん・ど・にち' }
    },

    // ===== 更多時態與情境題 =====
    {
        id: 'weekday_time_04',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '再来週の＿＿に試験があります。',
        stem_zh: '下下週星期一有考試。',
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！再来週の月曜日有考試。' },
            { text: 'がつようび', isCorrect: false, reason: '「月曜日」讀「げつ」。' },
            { text: 'かようび', isCorrect: false, reason: '這是火曜日（星期二）。' },
            { text: 'すいようび', isCorrect: false, reason: '這是水曜日（星期三）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「再来週」表示下下週，配合曜日使用。',
            relatedRules: ['曜日的讀法', '時間表達']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },
    {
        id: 'weekday_time_05',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '先々週は何曜日に会いましたか？',
        stem_zh: '上上週是星期幾見面的？',
        dialogue: {
            speakerA: '先々週は何曜日に会いましたか？',
            speakerB: '＿＿に会いました。（星期日）'
        },
        options: [
            { text: 'にちようび', isCorrect: true, reason: '正確！上上週日曜日見面了。' },
            { text: 'ひようび', isCorrect: false, reason: '「日」讀「にち」不是「ひ」。' },
            { text: 'どようび', isCorrect: false, reason: '這是土曜日（星期六）。' },
            { text: 'げつようび', isCorrect: false, reason: '這是月曜日（星期一）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「先々週」表示上上週，用過去式回答。',
            relatedRules: ['曜日的讀法', '過去時態']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },
    {
        id: 'weekday_time_06',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '毎月第二＿＿は会議です。',
        stem_zh: '每月第二個星期四是會議。',
        options: [
            { text: 'もくようび', isCorrect: true, reason: '正確！每月第二個木曜日開會。' },
            { text: 'きようび', isCorrect: false, reason: '「木」讀「もく」不是「き」。' },
            { text: 'すいようび', isCorrect: false, reason: '這是水曜日（星期三）。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日（星期五）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「第二木曜日」表示每月第二個星期四。',
            relatedRules: ['曜日的讀法', '定期會議']
        },
        sourceItem: { value: 'Thu', kanji: '木曜日', reading: 'もくようび' }
    },

    // ===== 更多比較辨析題 =====
    {
        id: 'weekday_compare_01',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「水」在「水曜日」「水道」「洪水」中讀法？',
        stem_zh: '「水」在「水曜日」「水道」「洪水」中的讀法？',
        options: [
            { text: '都是すい', isCorrect: true, reason: '正確！水曜日、水道、洪水都讀「すい」。' },
            { text: 'すい・すい・みず', isCorrect: false, reason: '洪水也讀「こうずい」，「水」讀「すい」。' },
            { text: 'すい・みず・すい', isCorrect: false, reason: '水道讀「すいどう」不是「みずどう」。' },
            { text: '都是みず', isCorrect: false, reason: '這些都用音讀「すい」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「水」在複合詞中多用音讀「すい」。',
            trapExplanation: '訓讀「みず」多用於單獨或特定組合。',
            relatedRules: ['水的讀法', '音讀vs訓讀']
        },
        sourceItem: { value: 'Wed', kanji: '水曜日', reading: 'すいようび' }
    },
    {
        id: 'weekday_compare_02',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「金」在「金曜日」和「お金」中讀法相同嗎？',
        stem_zh: '「金」在「金曜日」和「お金」中讀法相同嗎？',
        options: [
            { text: '不同：きん vs かね', isCorrect: true, reason: '正確！金曜日讀「きん」，お金讀「かね」。' },
            { text: '相同：都是きん', isCorrect: false, reason: '「お金」讀「おかね」不是「おきん」。' },
            { text: '相同：都是かね', isCorrect: false, reason: '「金曜日」讀「きんようび」。' },
            { text: '不同：こん vs かね', isCorrect: false, reason: '金曜日讀「きん」不是「こん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「金」音讀「きん」（金曜日），訓讀「かね」（お金）。',
            trapExplanation: '要區分音讀和訓讀的使用場合。',
            relatedRules: ['金的讀法', '音讀vs訓讀']
        },
        sourceItem: { value: 'Fri', kanji: '金曜日', reading: 'きんようび' }
    },
    {
        id: 'weekday_compare_03',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「木」在「木曜日」和「木」（樹木）中讀法相同嗎？',
        stem_zh: '「木」在「木曜日」和「木」（樹木）中讀法相同嗎？',
        options: [
            { text: '不同：もく vs き', isCorrect: true, reason: '正確！木曜日讀「もく」，樹木讀「き」。' },
            { text: '相同：都是もく', isCorrect: false, reason: '單獨的「木」（樹）讀「き」。' },
            { text: '相同：都是き', isCorrect: false, reason: '木曜日讀「もくようび」。' },
            { text: '不同：ぼく vs き', isCorrect: false, reason: '木曜日讀「もく」不是「ぼく」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「木」音讀「もく/ぼく」，訓讀「き/こ」。曜日用「もく」。',
            trapExplanation: '曜日統一使用漢字的音讀。',
            relatedRules: ['木的讀法', '音讀vs訓讀']
        },
        sourceItem: { value: 'Thu', kanji: '木曜日', reading: 'もくようび' }
    },

    // ===== 綜合應用題 =====
    {
        id: 'weekday_comp_01',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '何曜日が一番忙しいですか？',
        stem_zh: '哪一天最忙？',
        dialogue: {
            speakerA: '何曜日が一番忙しいですか？',
            speakerB: '＿＿が一番忙しいです。仕事が多いので。（星期一）'
        },
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！月曜日工作最多。' },
            { text: 'がつようび', isCorrect: false, reason: '「月曜日」讀「げつ」。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日（星期五）。' },
            { text: 'にちようび', isCorrect: false, reason: '日曜日通常是休息日。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '月曜日（Blue Monday）在日本也是繁忙的一天。',
            relatedRules: ['曜日的讀法', '職場文化']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },
    {
        id: 'weekday_comp_02',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿の夜「金曜ロードショー」を見ます。',
        stem_zh: '星期五晚上看「週五電影院」。',
        options: [
            { text: 'きんようび', isCorrect: true, reason: '正確！「金曜ロードショー」是著名節目。' },
            { text: 'かねようび', isCorrect: false, reason: '「金」讀「きん」不是「かね」。' },
            { text: 'もくようび', isCorrect: false, reason: '這是木曜日（星期四）。' },
            { text: 'どようび', isCorrect: false, reason: '這是土曜日（星期六）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「金曜ロードショー」是日本著名的週五電影節目。',
            relatedRules: ['曜日的讀法', '日本的テレビ']
        },
        sourceItem: { value: 'Fri', kanji: '金曜日', reading: 'きんようび' }
    },
    {
        id: 'weekday_comp_03',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '一番好きな曜日は？',
        stem_zh: '最喜歡哪一天？',
        dialogue: {
            speakerA: '一番好きな曜日は何ですか？',
            speakerB: '＿＿です。ゆっくり休めますから。（星期日）'
        },
        options: [
            { text: 'にちようび', isCorrect: true, reason: '正確！日曜日可以好好休息。' },
            { text: 'ひようび', isCorrect: false, reason: '「日」讀「にち」不是「ひ」。' },
            { text: 'げつようび', isCorrect: false, reason: '月曜日是工作日。' },
            { text: 'どようび', isCorrect: false, reason: '這是土曜日（星期六）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「日曜日」是完全的休息日，很多人最喜歡。',
            relatedRules: ['曜日的讀法', '休日的過ごし方']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },
    {
        id: 'weekday_comp_04',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '学校は＿＿から＿＿まで授業があります。',
        stem_zh: '學校從星期一到星期六有課。',
        options: [
            { text: 'げつようび・どようび', isCorrect: true, reason: '正確！有些學校月到土有課。' },
            { text: 'がつようび・どようび', isCorrect: false, reason: '「月曜日」讀「げつ」。' },
            { text: 'げつようび・きんようび', isCorrect: false, reason: '題目說到土曜日。' },
            { text: 'かようび・きんようび', isCorrect: false, reason: '題目說從月曜日開始。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本有些學校實行週六半日制。',
            relatedRules: ['曜日的讀法', '日本的學校']
        },
        sourceItem: { value: 'Mon-Sat', kanji: '月曜日〜土曜日', reading: 'げつようび〜どようび' }
    },
    {
        id: 'weekday_comp_05',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '病院は週に何回行きますか？',
        stem_zh: '一週去幾次醫院？',
        dialogue: {
            speakerA: '病院は週に何回行きますか？',
            speakerB: '＿＿と＿＿の二回です。（星期二和星期五）'
        },
        options: [
            { text: 'かようび・きんようび', isCorrect: true, reason: '正確！火曜日和金曜日去醫院。' },
            { text: 'ひようび・かねようび', isCorrect: false, reason: '這些是訓讀，星期用音讀。' },
            { text: 'げつようび・もくようび', isCorrect: false, reason: '這是星期一和星期四。' },
            { text: 'すいようび・どようび', isCorrect: false, reason: '這是星期三和星期六。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「火曜日」和「金曜日」是常見的復健日程。',
            relatedRules: ['曜日的讀法', '醫療日程']
        },
        sourceItem: { value: 'Tue/Fri', kanji: '火曜日・金曜日', reading: 'かようび・きんようび' }
    },
    {
        id: 'weekday_comp_06',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: 'ヨガ教室は＿＿の午前中です。',
        stem_zh: '瑜伽課是星期三上午。',
        options: [
            { text: 'すいようび', isCorrect: true, reason: '正確！水曜日上午有瑜伽課。' },
            { text: 'みずようび', isCorrect: false, reason: '「水」讀「すい」不是「みず」。' },
            { text: 'もくようび', isCorrect: false, reason: '這是木曜日（星期四）。' },
            { text: 'かようび', isCorrect: false, reason: '這是火曜日（星期二）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「水曜日の午前中」表示星期三上午的固定課程。',
            relatedRules: ['曜日的讀法', '習い事的日程']
        },
        sourceItem: { value: 'Wed', kanji: '水曜日', reading: 'すいようび' }
    },
    {
        id: 'weekday_comp_07',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: 'ライブは何曜日ですか？',
        stem_zh: '演唱會是星期幾？',
        dialogue: {
            speakerA: 'ライブは何曜日ですか？',
            speakerB: '＿＿の夜です。（星期六）'
        },
        options: [
            { text: 'どようび', isCorrect: true, reason: '正確！演唱會多在土曜日晚上。' },
            { text: 'とようび', isCorrect: false, reason: '「土」讀濁音「ど」。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日（星期五）。' },
            { text: 'にちようび', isCorrect: false, reason: '這是日曜日（星期日）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '演唱會、活動多安排在「土曜日」晚上。',
            relatedRules: ['曜日的讀法', '娛樂活動']
        },
        sourceItem: { value: 'Sat', kanji: '土曜日', reading: 'どようび' }
    },
    {
        id: 'weekday_comp_08',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '子供の習い事は＿＿に集中しています。',
        stem_zh: '孩子的才藝課集中在星期六。',
        options: [
            { text: 'どようび', isCorrect: true, reason: '正確！土曜日是才藝課的熱門日。' },
            { text: 'とようび', isCorrect: false, reason: '「土」讀濁音「ど」。' },
            { text: 'にちようび', isCorrect: false, reason: '這是日曜日（星期日）。' },
            { text: 'げつようび', isCorrect: false, reason: '平日孩子要上學。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本的才藝課多安排在「土曜日」。',
            relatedRules: ['曜日的讀法', '子供的教育']
        },
        sourceItem: { value: 'Sat', kanji: '土曜日', reading: 'どようび' }
    },
    {
        id: 'weekday_comp_09',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '資源回收是哪天？',
        stem_zh: '資源回收是哪天？',
        dialogue: {
            speakerA: '資源ごみは何曜日ですか？',
            speakerB: '＿＿です。（星期三）'
        },
        options: [
            { text: 'すいようび', isCorrect: true, reason: '正確！水曜日常是資源回收日。' },
            { text: 'みずようび', isCorrect: false, reason: '「水」讀「すい」不是「みず」。' },
            { text: 'かようび', isCorrect: false, reason: '這是火曜日（星期二）。' },
            { text: 'もくようび', isCorrect: false, reason: '這是木曜日（星期四）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '各地區的垃圾收集日不同，「水曜日」常見。',
            relatedRules: ['曜日的讀法', '垃圾分類']
        },
        sourceItem: { value: 'Wed', kanji: '水曜日', reading: 'すいようび' }
    },
    {
        id: 'weekday_comp_10',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '給料日は毎月25日の＿＿が多いです。',
        stem_zh: '發薪日多是每月25日星期五。',
        options: [
            { text: 'きんようび', isCorrect: true, reason: '正確！25日若是金曜日就發薪。' },
            { text: 'かねようび', isCorrect: false, reason: '「金」讀「きん」不是「かね」。' },
            { text: 'もくようび', isCorrect: false, reason: '這是木曜日（星期四）。' },
            { text: 'どようび', isCorrect: false, reason: '這是土曜日（星期六）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本發薪日多在25日，若遇「金曜日」則當天發。',
            relatedRules: ['曜日的讀法', '日本的給料制度']
        },
        sourceItem: { value: 'Fri', kanji: '金曜日', reading: 'きんようび' }
    },

    // ===== 更多陷阱題 =====
    {
        id: 'weekday_trap_05',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「曜日」的「曜」怎麼讀？',
        stem_zh: '「曜日」的「曜」怎麼讀？',
        options: [
            { text: 'よう', isCorrect: true, reason: '正確！「曜」讀「よう」。' },
            { text: 'よ', isCorrect: false, reason: '缺少「う」，應為「よう」。' },
            { text: 'ひかり', isCorrect: false, reason: '「曜」不讀「ひかり」。' },
            { text: 'かがやき', isCorrect: false, reason: '「曜」不讀「かがやき」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「曜」讀「よう」，表示發光、照耀，延伸為星體。',
            trapExplanation: '「曜」字較難，但在曜日中固定讀「よう」。',
            relatedRules: ['曜的讀法', '曜日的構成']
        },
        sourceItem: { value: 'general', kanji: '曜日', reading: 'ようび' }
    },
    {
        id: 'weekday_trap_06',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「七曜」怎麼讀？',
        stem_zh: '「七曜」怎麼讀？',
        options: [
            { text: 'しちよう', isCorrect: true, reason: '正確！七曜讀「しちよう」。' },
            { text: 'ななよう', isCorrect: false, reason: '這裡「七」讀音讀「しち」。' },
            { text: 'なのよう', isCorrect: false, reason: '不存在這個讀法。' },
            { text: 'しちようび', isCorrect: false, reason: '「七曜」不加「び」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七曜」指一週七天，讀「しちよう」。',
            trapExplanation: '「七」在此用音讀「しち」而非訓讀「なな」。',
            relatedRules: ['七的讀法', '七曜的概念']
        },
        sourceItem: { value: 'general', kanji: '七曜', reading: 'しちよう' }
    },
    {
        id: 'weekday_trap_07',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「日」在「毎日」和「日曜日」中讀法相同嗎？',
        stem_zh: '「日」在「毎日」和「日曜日」中讀法相同嗎？',
        options: [
            { text: '相同：都是にち', isCorrect: true, reason: '正確！毎日(まいにち)和日曜日都讀「にち」。' },
            { text: '不同：じつ vs にち', isCorrect: false, reason: '毎日讀「まいにち」不是「まいじつ」。' },
            { text: '不同：ひ vs にち', isCorrect: false, reason: '毎日讀「にち」不是「ひ」。' },
            { text: '不同：か vs にち', isCorrect: false, reason: '「か」是「日」的另一讀法，但毎日用「にち」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「日」在毎日和日曜日中都讀「にち」。',
            trapExplanation: '「日」有多種讀法：にち、じつ、ひ、か等。',
            relatedRules: ['日的讀法', '音讀的使用']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },
    {
        id: 'weekday_trap_08',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '下列哪個「曜日」的漢字使用濁音？',
        stem_zh: '下列哪個「曜日」的漢字使用濁音？',
        options: [
            { text: '土曜日（ど）', isCorrect: true, reason: '正確！土曜日的「土」讀濁音「ど」。' },
            { text: '木曜日（ぼく）', isCorrect: false, reason: '木曜日讀「もく」不是「ぼく」。' },
            { text: '火曜日（が）', isCorrect: false, reason: '火曜日讀「か」不是「が」。' },
            { text: '金曜日（ぎん）', isCorrect: false, reason: '金曜日讀「きん」不是「ぎん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '七曜日中只有「土曜日」的漢字使用濁音「ど」。',
            trapExplanation: '其他曜日都用清音：げつ、か、すい、もく、きん、にち。',
            relatedRules: ['曜日的讀法', '清音vs濁音']
        },
        sourceItem: { value: 'Sat', kanji: '土曜日', reading: 'どようび' }
    },

    // ===== 順序與記憶題 =====
    {
        id: 'weekday_order_01',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '一週的順序：日→月→火→？→木→金→土',
        stem_zh: '一週的順序：日→月→火→？→木→金→土',
        options: [
            { text: 'すい（水）', isCorrect: true, reason: '正確！順序是日月火水木金土。' },
            { text: 'もく（木）', isCorrect: false, reason: '木在水之後。' },
            { text: 'きん（金）', isCorrect: false, reason: '金在木之後。' },
            { text: 'ど（土）', isCorrect: false, reason: '土在最後。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本一週順序：日月火水木金土（にち・げつ・か・すい・もく・きん・ど）。',
            relatedRules: ['曜日的順序', '一週間的構成']
        },
        sourceItem: { value: 'Wed', kanji: '水曜日', reading: 'すいようび' }
    },
    {
        id: 'weekday_order_02',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '月曜日的前一天是？',
        stem_zh: '月曜日的前一天是？',
        options: [
            { text: 'にちようび', isCorrect: true, reason: '正確！月曜日前是日曜日。' },
            { text: 'どようび', isCorrect: false, reason: '土曜日在日曜日之前。' },
            { text: 'かようび', isCorrect: false, reason: '火曜日在月曜日之後。' },
            { text: 'きんようび', isCorrect: false, reason: '金曜日差兩天。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '月曜日（週一）前一天是日曜日（週日）。',
            relatedRules: ['曜日的順序', '前後關係']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },
    {
        id: 'weekday_order_03',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '水曜日的後一天是？',
        stem_zh: '水曜日的後一天是？',
        options: [
            { text: 'もくようび', isCorrect: true, reason: '正確！水曜日後是木曜日。' },
            { text: 'かようび', isCorrect: false, reason: '火曜日在水曜日之前。' },
            { text: 'きんようび', isCorrect: false, reason: '金曜日在木曜日之後。' },
            { text: 'げつようび', isCorrect: false, reason: '月曜日差兩天。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '水曜日（週三）後一天是木曜日（週四）。',
            relatedRules: ['曜日的順序', '前後關係']
        },
        sourceItem: { value: 'Thu', kanji: '木曜日', reading: 'もくようび' }
    },
    {
        id: 'weekday_order_04',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '今日は木曜日です。明後日は？',
        stem_zh: '今天是星期四，後天是？',
        dialogue: {
            speakerA: '今日は木曜日です。明後日は何曜日ですか？',
            speakerB: '＿＿です。'
        },
        options: [
            { text: 'どようび', isCorrect: true, reason: '正確！木曜日後兩天是土曜日。' },
            { text: 'きんようび', isCorrect: false, reason: '金曜日是明天。' },
            { text: 'にちようび', isCorrect: false, reason: '日曜日是三天後。' },
            { text: 'すいようび', isCorrect: false, reason: '水曜日是昨天。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '木曜日＋2天＝土曜日。「明後日」是後天。',
            relatedRules: ['曜日的計算', '明後日的使用']
        },
        sourceItem: { value: 'Sat', kanji: '土曜日', reading: 'どようび' }
    },
    {
        id: 'weekday_order_05',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '今日は火曜日です。一昨日は？',
        stem_zh: '今天是星期二，前天是？',
        dialogue: {
            speakerA: '今日は火曜日です。一昨日は何曜日でしたか？',
            speakerB: '＿＿でした。'
        },
        options: [
            { text: 'にちようび', isCorrect: true, reason: '正確！火曜日前兩天是日曜日。' },
            { text: 'げつようび', isCorrect: false, reason: '月曜日是昨天。' },
            { text: 'どようび', isCorrect: false, reason: '土曜日是三天前。' },
            { text: 'すいようび', isCorrect: false, reason: '水曜日是明天。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '火曜日−2天＝日曜日。「一昨日」是前天。',
            relatedRules: ['曜日的計算', '一昨日的使用']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },

    // ===== 最後補充題 =====
    {
        id: 'weekday_extra_01',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '日本では＿＿から一週間が始まります。',
        stem_zh: '在日本，一週從星期日開始。',
        options: [
            { text: 'にちようび', isCorrect: true, reason: '正確！日本一週從日曜日開始。' },
            { text: 'げつようび', isCorrect: false, reason: '西方以月曜日為週首，日本不同。' },
            { text: 'どようび', isCorrect: false, reason: '土曜日是週末。' },
            { text: 'きんようび', isCorrect: false, reason: '金曜日是週五。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本傳統上一週從「日曜日」開始，到「土曜日」結束。',
            relatedRules: ['曜日的順序', '日本vs西方']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },
    {
        id: 'weekday_extra_02',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '週末の天気は？',
        stem_zh: '週末天氣如何？',
        dialogue: {
            speakerA: '週末の天気はどうですか？',
            speakerB: '＿＿は晴れ、＿＿は雨です。（星期六、星期日）'
        },
        options: [
            { text: 'どようび・にちようび', isCorrect: true, reason: '正確！土曜日晴天、日曜日下雨。' },
            { text: 'とようび・ひようび', isCorrect: false, reason: '讀法錯誤。' },
            { text: 'きんようび・どようび', isCorrect: false, reason: '金曜日不是週末。' },
            { text: 'にちようび・げつようび', isCorrect: false, reason: '月曜日不是週末。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '週末天氣預報常分「土曜日」和「日曜日」報導。',
            relatedRules: ['曜日的讀法', '天気予報']
        },
        sourceItem: { value: 'Weekend', kanji: '土曜日・日曜日', reading: 'どようび・にちようび' }
    },
    {
        id: 'weekday_extra_03',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '「ハッピーマンデー」で＿＿が祝日になることが多い。',
        stem_zh: '因為「快樂星期一」制度，星期一常變成假日。',
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！Happy Monday讓月曜日成假日。' },
            { text: 'がつようび', isCorrect: false, reason: '「月曜日」讀「げつ」。' },
            { text: 'きんようび', isCorrect: false, reason: '不是Happy Friday制度。' },
            { text: 'にちようび', isCorrect: false, reason: '日曜日本來就是假日。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本的「ハッピーマンデー」制度將部分祝日移到「月曜日」。',
            relatedRules: ['曜日的讀法', '日本的祝日制度']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },
    {
        id: 'weekday_extra_04',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '週の真ん中は何曜日？',
        stem_zh: '一週的正中間是星期幾？',
        dialogue: {
            speakerA: '週の真ん中は何曜日ですか？',
            speakerB: '＿＿です。（星期三）'
        },
        options: [
            { text: 'すいようび', isCorrect: true, reason: '正確！水曜日是週中。' },
            { text: 'みずようび', isCorrect: false, reason: '「水」讀「すい」不是「みず」。' },
            { text: 'もくようび', isCorrect: false, reason: '木曜日在水曜日之後。' },
            { text: 'かようび', isCorrect: false, reason: '火曜日在水曜日之前。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「水曜日」被稱為「週の真ん中」（週中）。',
            relatedRules: ['曜日的讀法', '週の構成']
        },
        sourceItem: { value: 'Wed', kanji: '水曜日', reading: 'すいようび' }
    },
    {
        id: 'weekday_extra_05',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿「花金」と呼ばれています。',
        stem_zh: '星期五被稱為「花金」。',
        options: [
            { text: 'きんようび', isCorrect: true, reason: '正確！金曜日＝花金（華やかな金曜日）。' },
            { text: 'かねようび', isCorrect: false, reason: '「金」讀「きん」不是「かね」。' },
            { text: 'どようび', isCorrect: false, reason: '「花金」指的是金曜日。' },
            { text: 'もくようび', isCorrect: false, reason: '「花金」不是指木曜日。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「花金」＝華やかな金曜日，指週五晚上可以放鬆。',
            relatedRules: ['曜日的讀法', '日本的俗語']
        },
        sourceItem: { value: 'Fri', kanji: '金曜日', reading: 'きんようび' }
    },
    {
        id: 'weekday_extra_06',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '「ブルーマンデー」は何曜日？',
        stem_zh: '「憂鬱星期一」是星期幾？',
        dialogue: {
            speakerA: '「ブルーマンデー」は何曜日のことですか？',
            speakerB: '＿＿のことです。'
        },
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！Blue Monday＝月曜日。' },
            { text: 'がつようび', isCorrect: false, reason: '「月曜日」讀「げつ」。' },
            { text: 'すいようび', isCorrect: false, reason: '這是水曜日。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「ブルーマンデー」指週末結束後憂鬱的「月曜日」。',
            relatedRules: ['曜日的讀法', '社會現象']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },
    {
        id: 'weekday_extra_07',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: 'プレミアム＿＿は月末の金曜日です。',
        stem_zh: 'Premium Friday是月底的星期五。',
        options: [
            { text: 'きんようび', isCorrect: true, reason: '正確！Premium Friday是日本的制度。' },
            { text: 'かねようび', isCorrect: false, reason: '「金」讀「きん」不是「かね」。' },
            { text: 'どようび', isCorrect: false, reason: '是Premium Friday不是Saturday。' },
            { text: 'もくようび', isCorrect: false, reason: '是Premium Friday不是Thursday。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「プレミアムフライデー」是日本推動的月末「金曜日」早退制度。',
            relatedRules: ['曜日的讀法', '日本的勞動政策']
        },
        sourceItem: { value: 'Fri', kanji: '金曜日', reading: 'きんようび' }
    },
    {
        id: 'weekday_extra_08',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「平日」的讀法是？',
        stem_zh: '「平日」的讀法是？',
        options: [
            { text: 'へいじつ', isCorrect: true, reason: '正確！平日讀「へいじつ」。' },
            { text: 'ひらび', isCorrect: false, reason: '不存在這個讀法。' },
            { text: 'へいにち', isCorrect: false, reason: '「日」在此讀「じつ」。' },
            { text: 'びょうじつ', isCorrect: false, reason: '「平」讀「へい」不是「びょう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「平日」讀「へいじつ」，指週一到週五的工作日。',
            relatedRules: ['平日的讀法', '平日vs週末']
        },
        sourceItem: { value: 'Weekday', kanji: '平日', reading: 'へいじつ' }
    },
    {
        id: 'weekday_extra_09',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「週末」的讀法是？',
        stem_zh: '「週末」的讀法是？',
        options: [
            { text: 'しゅうまつ', isCorrect: true, reason: '正確！週末讀「しゅうまつ」。' },
            { text: 'しゅうすえ', isCorrect: false, reason: '「末」讀「まつ」不是「すえ」。' },
            { text: 'しゅうばつ', isCorrect: false, reason: '「末」讀「まつ」不是「ばつ」。' },
            { text: 'しゅまつ', isCorrect: false, reason: '缺少「う」，應為「しゅうまつ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「週末」讀「しゅうまつ」，指土曜日和日曜日。',
            relatedRules: ['週末的讀法', '週末vs平日']
        },
        sourceItem: { value: 'Weekend', kanji: '週末', reading: 'しゅうまつ' }
    },
    {
        id: 'weekday_extra_10',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '今週は何曜日から仕事ですか？',
        stem_zh: '這週從星期幾開始工作？',
        dialogue: {
            speakerA: '今週は何曜日から仕事ですか？',
            speakerB: '＿＿からです。祝日明けなので。（星期二）'
        },
        options: [
            { text: 'かようび', isCorrect: true, reason: '正確！祝日後從火曜日開始工作。' },
            { text: 'ひようび', isCorrect: false, reason: '「火」讀「か」不是「ひ」。' },
            { text: 'げつようび', isCorrect: false, reason: '月曜日是祝日所以休息。' },
            { text: 'すいようび', isCorrect: false, reason: '這是水曜日（星期三）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「祝日明け」指假日結束後，常從「火曜日」開始工作。',
            relatedRules: ['曜日的讀法', '祝日明け']
        },
        sourceItem: { value: 'Tue', kanji: '火曜日', reading: 'かようび' }
    },
    {
        id: 'weekday_extra_11',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '連休は＿＿から＿＿までです。',
        stem_zh: '連假從星期六到星期一。',
        options: [
            { text: 'どようび・げつようび', isCorrect: true, reason: '正確！三連休：土日月。' },
            { text: 'とようび・がつようび', isCorrect: false, reason: '讀法錯誤。' },
            { text: 'きんようび・にちようび', isCorrect: false, reason: '這是金到日，不含月曜日。' },
            { text: 'どようび・かようび', isCorrect: false, reason: '這樣是四天不是三連休。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本的三連休常是「土曜日」到「月曜日」。',
            relatedRules: ['曜日的讀法', '連休的表達']
        },
        sourceItem: { value: 'Sat-Mon', kanji: '土曜日〜月曜日', reading: 'どようび〜げつようび' }
    },
    {
        id: 'weekday_extra_12',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '定例会議は何曜日ですか？',
        stem_zh: '例行會議是星期幾？',
        dialogue: {
            speakerA: '定例会議は何曜日に行われますか？',
            speakerB: '毎週＿＿の午前10時からです。（星期一）'
        },
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！週一早上開例行會議。' },
            { text: 'がつようび', isCorrect: false, reason: '「月曜日」讀「げつ」。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日（星期五）。' },
            { text: 'すいようび', isCorrect: false, reason: '這是水曜日（星期三）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「月曜日」常是公司例行會議的日子。',
            relatedRules: ['曜日的讀法', '會議的日程']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },
    {
        id: 'weekday_extra_13',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: 'ノー残業デーは＿＿です。',
        stem_zh: '無加班日是星期三。',
        options: [
            { text: 'すいようび', isCorrect: true, reason: '正確！很多公司水曜日是無加班日。' },
            { text: 'みずようび', isCorrect: false, reason: '「水」讀「すい」不是「みず」。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日（星期五）。' },
            { text: 'もくようび', isCorrect: false, reason: '這是木曜日（星期四）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本很多公司將「水曜日」定為「ノー残業デー」。',
            relatedRules: ['曜日的讀法', '日本的勞動文化']
        },
        sourceItem: { value: 'Wed', kanji: '水曜日', reading: 'すいようび' }
    },
    {
        id: 'weekday_extra_14',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '新しいドラマは何曜日放送？',
        stem_zh: '新電視劇是星期幾播出？',
        dialogue: {
            speakerA: '新しいドラマは何曜日に放送されますか？',
            speakerB: '毎週＿＿の夜9時からです。（星期四）'
        },
        options: [
            { text: 'もくようび', isCorrect: true, reason: '正確！木曜9時是熱門時段。' },
            { text: 'きようび', isCorrect: false, reason: '「木」讀「もく」不是「き」。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日（星期五）。' },
            { text: 'すいようび', isCorrect: false, reason: '這是水曜日（星期三）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「木曜日」晚上9點是日本電視劇的黃金時段。',
            relatedRules: ['曜日的讀法', '日本的テレビ']
        },
        sourceItem: { value: 'Thu', kanji: '木曜日', reading: 'もくようび' }
    },
    // ===== 追加題目 15-64 =====
    {
        id: 'weekday_extra_15',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「日曜日」の正{ただ}しい読{よ}み方{かた}はどれですか。',
        stem_zh: '「日曜日」的正確讀法是？',
        options: [
            { text: 'にちようび', isCorrect: true, reason: '正確！日曜日讀「にちようび」。' },
            { text: 'ひようび', isCorrect: false, reason: '「日」在曜日中讀「にち」不是「ひ」。' },
            { text: 'じつようび', isCorrect: false, reason: '「日」在曜日中不讀「じつ」。' },
            { text: 'かようび', isCorrect: false, reason: '這是火曜日的讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「日曜日」讀「にちようび」，「日」使用音讀「にち」。',
            trapExplanation: '學習者可能混淆「日」的各種讀法。',
            relatedRules: ['曜日的讀法', '「にち」vs「ひ」']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },
    {
        id: 'weekday_extra_16',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '映画館は＿＿が一番混んでいます。',
        stem_zh: '電影院在星期六最擁擠。',
        options: [
            { text: 'どようび', isCorrect: true, reason: '正確！土曜日電影院人最多。' },
            { text: 'つちようび', isCorrect: false, reason: '「土」讀「ど」不是「つち」。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日（星期五）。' },
            { text: 'にちようび', isCorrect: false, reason: '雖然人多但題目說的是土曜日。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「土曜日」是週末第一天，休閒場所最擁擠。',
            relatedRules: ['曜日的讀法', '週末的活動']
        },
        sourceItem: { value: 'Sat', kanji: '土曜日', reading: 'どようび' }
    },
    {
        id: 'weekday_extra_17',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '病院的休診日は？',
        stem_zh: '醫院的休診日是？',
        dialogue: {
            speakerA: 'この病院的休診日はいつですか？',
            speakerB: '＿＿と祝日が休診日です。（星期日）'
        },
        options: [
            { text: 'にちようび', isCorrect: true, reason: '正確！大多數醫院日曜日休診。' },
            { text: 'ひようび', isCorrect: false, reason: '「日」讀「にち」不是「ひ」。' },
            { text: 'どようび', isCorrect: false, reason: '很多醫院土曜日有診。' },
            { text: 'げつようび', isCorrect: false, reason: '月曜日通常有看診。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本的醫院通常「日曜日」和「祝日」休診。',
            relatedRules: ['曜日的讀法', '病院的休診日']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },
    {
        id: 'weekday_extra_18',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「今週」的讀法是？',
        stem_zh: '「今週」的讀法是？',
        options: [
            { text: 'こんしゅう', isCorrect: true, reason: '正確！今週讀「こんしゅう」。' },
            { text: 'いましゅう', isCorrect: false, reason: '「今」讀「こん」不是「いま」。' },
            { text: 'こんしゅ', isCorrect: false, reason: '缺少長音「う」。' },
            { text: 'きんしゅう', isCorrect: false, reason: '「今」讀「こん」不是「きん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「今週」讀「こんしゅう」，指這個星期。',
            relatedRules: ['週的讀法', '今週・来週・先週']
        },
        sourceItem: { value: 'This week', kanji: '今週', reading: 'こんしゅう' }
    },
    {
        id: 'weekday_extra_19',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「来週」的讀法是？',
        stem_zh: '「来週」的讀法是？',
        options: [
            { text: 'らいしゅう', isCorrect: true, reason: '正確！来週讀「らいしゅう」。' },
            { text: 'きしゅう', isCorrect: false, reason: '「来」讀「らい」不是「き」。' },
            { text: 'らいしゅ', isCorrect: false, reason: '缺少長音「う」。' },
            { text: 'くるしゅう', isCorrect: false, reason: '「来」讀「らい」不是「くる」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「来週」讀「らいしゅう」，指下個星期。',
            relatedRules: ['週的讀法', '今週・来週・先週']
        },
        sourceItem: { value: 'Next week', kanji: '来週', reading: 'らいしゅう' }
    },
    {
        id: 'weekday_extra_20',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「先週」的讀法是？',
        stem_zh: '「先週」的讀法是？',
        options: [
            { text: 'せんしゅう', isCorrect: true, reason: '正確！先週讀「せんしゅう」。' },
            { text: 'さきしゅう', isCorrect: false, reason: '「先」讀「せん」不是「さき」。' },
            { text: 'せんしゅ', isCorrect: false, reason: '缺少長音「う」。' },
            { text: 'まえしゅう', isCorrect: false, reason: '「先」讀「せん」不是「まえ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「先週」讀「せんしゅう」，指上個星期。',
            relatedRules: ['週的讀法', '今週・来週・先週']
        },
        sourceItem: { value: 'Last week', kanji: '先週', reading: 'せんしゅう' }
    },
    {
        id: 'weekday_extra_21',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿に買い物に行きます。',
        stem_zh: '我在週末去購物。',
        options: [
            { text: 'しゅうまつ', isCorrect: true, reason: '正確！週末去購物。' },
            { text: 'しゅうすえ', isCorrect: false, reason: '「末」讀「まつ」不是「すえ」。' },
            { text: 'へいじつ', isCorrect: false, reason: '平日是工作日不是週末。' },
            { text: 'しゅうかん', isCorrect: false, reason: '這是「週間」（一週）的讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「週末」讀「しゅうまつ」，指土曜日和日曜日。',
            relatedRules: ['週末的讀法', '週末的活動']
        },
        sourceItem: { value: 'Weekend', kanji: '週末', reading: 'しゅうまつ' }
    },
    {
        id: 'weekday_extra_22',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '來週的會議是哪一天？',
        stem_zh: '下週的會議是哪一天？',
        dialogue: {
            speakerA: '来週の会議はいつですか？',
            speakerB: '＿＿の午後2時からです。（星期三）'
        },
        options: [
            { text: 'すいようび', isCorrect: true, reason: '正確！水曜日下午2點開會。' },
            { text: 'みずようび', isCorrect: false, reason: '「水」讀「すい」不是「みず」。' },
            { text: 'もくようび', isCorrect: false, reason: '這是木曜日（星期四）。' },
            { text: 'かようび', isCorrect: false, reason: '這是火曜日（星期二）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「水曜日」在一週中間，常作為會議日。',
            relatedRules: ['曜日的讀法', '会議的予定']
        },
        sourceItem: { value: 'Wed', kanji: '水曜日', reading: 'すいようび' }
    },
    {
        id: 'weekday_extra_23',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「毎週」的讀法是？',
        stem_zh: '「毎週」的讀法是？',
        options: [
            { text: 'まいしゅう', isCorrect: true, reason: '正確！毎週讀「まいしゅう」。' },
            { text: 'まいしゅ', isCorrect: false, reason: '缺少長音「う」。' },
            { text: 'ごとしゅう', isCorrect: false, reason: '「毎」讀「まい」不是「ごと」。' },
            { text: 'まいしう', isCorrect: false, reason: '拼寫錯誤，應為「しゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「毎週」讀「まいしゅう」，意思是每週。',
            trapExplanation: '注意「週」的長音「しゅう」。',
            relatedRules: ['毎〜的讀法', '週的讀法']
        },
        sourceItem: { value: 'Every week', kanji: '毎週', reading: 'まいしゅう' }
    },
    {
        id: 'weekday_extra_24',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿は燃えるゴミの日です。',
        stem_zh: '星期一是可燃垃圾日。',
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！很多地區月曜日收可燃垃圾。' },
            { text: 'がつようび', isCorrect: false, reason: '「月曜日」讀「げつ」。' },
            { text: 'かようび', isCorrect: false, reason: '這是火曜日（星期二）。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日（星期五）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本的垃圾分類有固定的曜日，「月曜日」常是燃えるゴミ。',
            relatedRules: ['曜日的讀法', 'ゴミの日']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },
    {
        id: 'weekday_extra_25',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '資源回收是哪一天？',
        stem_zh: '資源回收是哪一天？',
        dialogue: {
            speakerA: '資源ゴミの日はいつですか？',
            speakerB: '＿＿です。（星期四）'
        },
        options: [
            { text: 'もくようび', isCorrect: true, reason: '正確！木曜日是資源回收日。' },
            { text: 'きようび', isCorrect: false, reason: '「木」讀「もく」不是「き」。' },
            { text: 'すいようび', isCorrect: false, reason: '這是水曜日（星期三）。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日（星期五）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「木曜日」在很多地區是資源ゴミの日。',
            relatedRules: ['曜日的讀法', 'ゴミの日']
        },
        sourceItem: { value: 'Thu', kanji: '木曜日', reading: 'もくようび' }
    },
    {
        id: 'weekday_extra_26',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「何曜日」的讀法是？',
        stem_zh: '「何曜日」的讀法是？',
        options: [
            { text: 'なんようび', isCorrect: true, reason: '正確！何曜日讀「なんようび」。' },
            { text: 'なにようび', isCorrect: false, reason: '「何」在此讀「なん」不是「なに」。' },
            { text: 'かようび', isCorrect: false, reason: '這是火曜日的讀法。' },
            { text: 'なによび', isCorrect: false, reason: '讀法錯誤。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何曜日」讀「なんようび」，用來詢問星期幾。',
            relatedRules: ['何的讀法', '曜日的疑問詞']
        },
        sourceItem: { value: 'What day', kanji: '何曜日', reading: 'なんようび' }
    },
    {
        id: 'weekday_extra_27',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '今日は＿＿、明日は水曜日です。',
        stem_zh: '今天是星期二，明天是星期三。',
        options: [
            { text: 'かようび', isCorrect: true, reason: '正確！火曜日的下一天是水曜日。' },
            { text: 'ひようび', isCorrect: false, reason: '「火」讀「か」不是「ひ」。' },
            { text: 'げつようび', isCorrect: false, reason: '月曜日的下一天是火曜日。' },
            { text: 'もくようび', isCorrect: false, reason: '木曜日的前一天是水曜日。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「火曜日」＋1日＝「水曜日」。',
            relatedRules: ['曜日的讀法', '曜日的順序']
        },
        sourceItem: { value: 'Tue', kanji: '火曜日', reading: 'かようび' }
    },
    {
        id: 'weekday_extra_28',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '圖書館的休館日是？',
        stem_zh: '圖書館的休館日是？',
        dialogue: {
            speakerA: '図書館の休館日はいつですか？',
            speakerB: '毎週＿＿です。（星期一）'
        },
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！日本的圖書館多數月曜日休館。' },
            { text: 'がつようび', isCorrect: false, reason: '「月曜日」讀「げつ」。' },
            { text: 'にちようび', isCorrect: false, reason: '日曜日通常開館。' },
            { text: 'どようび', isCorrect: false, reason: '土曜日通常開館。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本的公共圖書館通常「月曜日」休館。',
            relatedRules: ['曜日的讀法', '公共施設的休館日']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },
    {
        id: 'weekday_extra_29',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「土曜日」中「土」的讀法是？',
        stem_zh: '「土曜日」中「土」的讀法是？',
        options: [
            { text: 'ど', isCorrect: true, reason: '正確！「土」在曜日中讀「ど」。' },
            { text: 'つち', isCorrect: false, reason: '「つち」是訓讀，曜日用音讀「ど」。' },
            { text: 'と', isCorrect: false, reason: '「土」的音讀是「ど」不是「と」。' },
            { text: 'どう', isCorrect: false, reason: '沒有長音，是短音「ど」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「土曜日」的「土」讀「ど」，是音讀。',
            trapExplanation: '「土」的訓讀是「つち」，但曜日中使用音讀「ど」。',
            relatedRules: ['曜日的讀法', '音讀vs訓讀']
        },
        sourceItem: { value: 'Sat', kanji: '土曜日', reading: 'どようび' }
    },
    {
        id: 'weekday_extra_30',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿の夜はサザエさんを見ます。',
        stem_zh: '星期日晚上看《海螺小姐》。',
        options: [
            { text: 'にちようび', isCorrect: true, reason: '正確！サザエさん在日曜日播出。' },
            { text: 'ひようび', isCorrect: false, reason: '「日」讀「にち」不是「ひ」。' },
            { text: 'どようび', isCorrect: false, reason: '這是土曜日（星期六）。' },
            { text: 'げつようび', isCorrect: false, reason: '這是月曜日（星期一）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '《サザエさん》是日本國民動畫，「日曜日」晚上播出。',
            relatedRules: ['曜日的讀法', '日本的テレビ番組']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },
    {
        id: 'weekday_extra_31',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '這週有幾天工作？',
        stem_zh: '這週有幾天工作？',
        dialogue: {
            speakerA: '今週は何日働きますか？',
            speakerB: '＿＿から金曜日まで5日間です。（星期一）'
        },
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！月曜日到金曜日是5天工作日。' },
            { text: 'がつようび', isCorrect: false, reason: '「月曜日」讀「げつ」。' },
            { text: 'かようび', isCorrect: false, reason: '火曜日開始只有4天。' },
            { text: 'どようび', isCorrect: false, reason: '土曜日是週末。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '標準的工作週是「月曜日」到「金曜日」共5日。',
            relatedRules: ['曜日的讀法', '労働週間']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },
    {
        id: 'weekday_extra_32',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「週間」的讀法是？',
        stem_zh: '「週間」的讀法是？',
        options: [
            { text: 'しゅうかん', isCorrect: true, reason: '正確！週間讀「しゅうかん」。' },
            { text: 'しゅかん', isCorrect: false, reason: '「週」要有長音「しゅう」。' },
            { text: 'しゅうま', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'しゅっかん', isCorrect: false, reason: '沒有促音。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「週間」讀「しゅうかん」，用於計算週數如「2週間」。',
            relatedRules: ['週的讀法', '期間の表現']
        },
        sourceItem: { value: 'Week', kanji: '週間', reading: 'しゅうかん' }
    },
    {
        id: 'weekday_extra_33',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '日本では＿＿から一週間が始まります。',
        stem_zh: '在日本，一週從星期日開始。',
        options: [
            { text: 'にちようび', isCorrect: true, reason: '正確！日本的日曆從日曜日開始。' },
            { text: 'げつようび', isCorrect: false, reason: '西方從月曜日開始，但日本從日曜日。' },
            { text: 'どようび', isCorrect: false, reason: '土曜日是週末最後一天。' },
            { text: 'きんようび', isCorrect: false, reason: '金曜日是平日最後一天。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本的傳統日曆一週從「日曜日」開始。',
            relatedRules: ['曜日的讀法', '日本的カレンダー']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },
    {
        id: 'weekday_extra_34',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '健身房的休館日是？',
        stem_zh: '健身房的休館日是？',
        dialogue: {
            speakerA: 'ジムの休館日はいつですか？',
            speakerB: '毎週＿＿です。（星期三）'
        },
        options: [
            { text: 'すいようび', isCorrect: true, reason: '正確！很多健身房水曜日休館。' },
            { text: 'みずようび', isCorrect: false, reason: '「水」讀「すい」不是「みず」。' },
            { text: 'にちようび', isCorrect: false, reason: '日曜日通常開館。' },
            { text: 'どようび', isCorrect: false, reason: '土曜日通常開館。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '很多健身房選「水曜日」（週中）休館。',
            relatedRules: ['曜日的讀法', '施設的休館日']
        },
        sourceItem: { value: 'Wed', kanji: '水曜日', reading: 'すいようび' }
    },
    {
        id: 'weekday_extra_35',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「金曜日」中「金」的讀法是？',
        stem_zh: '「金曜日」中「金」的讀法是？',
        options: [
            { text: 'きん', isCorrect: true, reason: '正確！「金」在曜日中讀「きん」。' },
            { text: 'かね', isCorrect: false, reason: '「かね」是訓讀（錢的意思），曜日用「きん」。' },
            { text: 'こん', isCorrect: false, reason: '「こん」是「金色」等詞的讀法。' },
            { text: 'ごん', isCorrect: false, reason: '沒有這個讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「金曜日」的「金」讀「きん」，不是「かね」。',
            trapExplanation: '「金」有多種讀法：「きん」（音讀）、「かね」（錢）、「こん」（金色）。',
            relatedRules: ['曜日的讀法', '「金」的讀み分け']
        },
        sourceItem: { value: 'Fri', kanji: '金曜日', reading: 'きんようび' }
    },
    {
        id: 'weekday_extra_36',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿の朝は早起きして朝活をします。',
        stem_zh: '星期六早上早起做晨間活動。',
        options: [
            { text: 'どようび', isCorrect: true, reason: '正確！土曜日早上做朝活。' },
            { text: 'つちようび', isCorrect: false, reason: '「土」讀「ど」不是「つち」。' },
            { text: 'にちようび', isCorrect: false, reason: '日曜日通常睡比較晚。' },
            { text: 'げつようび', isCorrect: false, reason: '月曜日要上班比較趕。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「土曜日」適合做「朝活」（早晨活動）。',
            relatedRules: ['曜日的讀法', '週末的過ごし方']
        },
        sourceItem: { value: 'Sat', kanji: '土曜日', reading: 'どようび' }
    },
    {
        id: 'weekday_extra_37',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '約會是哪一天？',
        stem_zh: '約會是哪一天？',
        dialogue: {
            speakerA: 'デートはいつですか？',
            speakerB: '＿＿の午後です。（星期六）'
        },
        options: [
            { text: 'どようび', isCorrect: true, reason: '正確！土曜日下午約會。' },
            { text: 'つちようび', isCorrect: false, reason: '「土」讀「ど」不是「つち」。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日（星期五）。' },
            { text: 'にちようび', isCorrect: false, reason: '這是日曜日（星期日）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「土曜日」是熱門的約會日。',
            relatedRules: ['曜日的讀法', 'デート的予定']
        },
        sourceItem: { value: 'Sat', kanji: '土曜日', reading: 'どようび' }
    },
    {
        id: 'weekday_extra_38',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「再来週」的讀法是？',
        stem_zh: '「再来週」的讀法是？',
        options: [
            { text: 'さらいしゅう', isCorrect: true, reason: '正確！再来週讀「さらいしゅう」。' },
            { text: 'ふたたびらいしゅう', isCorrect: false, reason: '「再」在此讀「さ」。' },
            { text: 'さいらいしゅう', isCorrect: false, reason: '「再」讀「さ」不是「さい」。' },
            { text: 'またらいしゅう', isCorrect: false, reason: '「再」讀「さ」不是「また」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「再来週」讀「さらいしゅう」，指下下週。',
            relatedRules: ['週的讀法', '時間的表現']
        },
        sourceItem: { value: 'Week after next', kanji: '再来週', reading: 'さらいしゅう' }
    },
    {
        id: 'weekday_extra_39',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿はレディースデーで映画が安いです。',
        stem_zh: '星期三是女性日，電影比較便宜。',
        options: [
            { text: 'すいようび', isCorrect: true, reason: '正確！很多電影院水曜日是レディースデー。' },
            { text: 'みずようび', isCorrect: false, reason: '「水」讀「すい」不是「みず」。' },
            { text: 'きんようび', isCorrect: false, reason: '金曜日通常票價正常。' },
            { text: 'もくようび', isCorrect: false, reason: '木曜日通常票價正常。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本很多電影院「水曜日」是「レディースデー」，女性優惠。',
            relatedRules: ['曜日的讀法', '映画館的割引']
        },
        sourceItem: { value: 'Wed', kanji: '水曜日', reading: 'すいようび' }
    },
    {
        id: 'weekday_extra_40',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '超市的特價日是？',
        stem_zh: '超市的特價日是？',
        dialogue: {
            speakerA: 'スーパー的特売日はいつですか？',
            speakerB: '毎週＿＿です。（星期二）'
        },
        options: [
            { text: 'かようび', isCorrect: true, reason: '正確！很多超市火曜日特價。' },
            { text: 'ひようび', isCorrect: false, reason: '「火」讀「か」不是「ひ」。' },
            { text: 'すいようび', isCorrect: false, reason: '這是水曜日（星期三）。' },
            { text: 'もくようび', isCorrect: false, reason: '這是木曜日（星期四）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '很多日本超市「火曜日」有特價活動。',
            relatedRules: ['曜日的讀法', 'スーパー的特売']
        },
        sourceItem: { value: 'Tue', kanji: '火曜日', reading: 'かようび' }
    },
    {
        id: 'weekday_extra_41',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「木曜日」中「木」的讀法是？',
        stem_zh: '「木曜日」中「木」的讀法是？',
        options: [
            { text: 'もく', isCorrect: true, reason: '正確！「木」在曜日中讀「もく」。' },
            { text: 'き', isCorrect: false, reason: '「き」是訓讀（樹木），曜日用「もく」。' },
            { text: 'ぼく', isCorrect: false, reason: '「ぼく」是其他詞的讀法。' },
            { text: 'こ', isCorrect: false, reason: '沒有這個讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「木曜日」的「木」讀「もく」，是音讀。',
            trapExplanation: '「木」的訓讀「き」（樹木）和音讀「もく」要區分。',
            relatedRules: ['曜日的讀法', '音讀vs訓讀']
        },
        sourceItem: { value: 'Thu', kanji: '木曜日', reading: 'もくようび' }
    },
    {
        id: 'weekday_extra_42',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '「サザエさん症候群」は＿＿の夜に起こります。',
        stem_zh: '「海螺小姐症候群」發生在星期日晚上。',
        options: [
            { text: 'にちようび', isCorrect: true, reason: '正確！日曜日晚上想到要上班就憂鬱。' },
            { text: 'ひようび', isCorrect: false, reason: '「日」讀「にち」不是「ひ」。' },
            { text: 'どようび', isCorrect: false, reason: '土曜日還有一天假期。' },
            { text: 'げつようび', isCorrect: false, reason: '月曜日已經開始上班了。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「サザエさん症候群」指「日曜日」晚上的憂鬱感。',
            relatedRules: ['曜日的讀法', '日本的社会現象']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },
    {
        id: 'weekday_extra_43',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '每週幾次日語課？',
        stem_zh: '每週幾次日語課？',
        dialogue: {
            speakerA: '日本語の授業は週に何回ありますか？',
            speakerB: '＿＿と木曜日の2回です。（星期二）'
        },
        options: [
            { text: 'かようび', isCorrect: true, reason: '正確！火曜日和木曜日各一次。' },
            { text: 'ひようび', isCorrect: false, reason: '「火」讀「か」不是「ひ」。' },
            { text: 'げつようび', isCorrect: false, reason: '題目說的是火曜日和木曜日。' },
            { text: 'すいようび', isCorrect: false, reason: '題目說的是火曜日和木曜日。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「火曜日」和「木曜日」是常見的課程安排。',
            relatedRules: ['曜日的讀法', '授業的予定']
        },
        sourceItem: { value: 'Tue', kanji: '火曜日', reading: 'かようび' }
    },
    {
        id: 'weekday_extra_44',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「先々週」的讀法是？',
        stem_zh: '「先々週」的讀法是？',
        options: [
            { text: 'せんせんしゅう', isCorrect: true, reason: '正確！先々週讀「せんせんしゅう」。' },
            { text: 'さきさきしゅう', isCorrect: false, reason: '「先」讀「せん」不是「さき」。' },
            { text: 'ぜんぜんしゅう', isCorrect: false, reason: '「先」讀「せん」不是「ぜん」。' },
            { text: 'せんしゅうまえ', isCorrect: false, reason: '這不是正確的讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「先々週」讀「せんせんしゅう」，指上上週。',
            relatedRules: ['週的讀法', '時間的表現']
        },
        sourceItem: { value: 'Week before last', kanji: '先々週', reading: 'せんせんしゅう' }
    },
    {
        id: 'weekday_extra_45',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '銀行は＿＿と祝日が休みです。',
        stem_zh: '銀行在週末和假日休息。',
        options: [
            { text: 'しゅうまつ', isCorrect: true, reason: '正確！銀行週末休息。' },
            { text: 'しゅうすえ', isCorrect: false, reason: '「末」讀「まつ」不是「すえ」。' },
            { text: 'へいじつ', isCorrect: false, reason: '平日銀行有營業。' },
            { text: 'きんようび', isCorrect: false, reason: '金曜日銀行有營業。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本的銀行「週末」（土日）和「祝日」休息。',
            relatedRules: ['週末的讀法', '銀行の営業日']
        },
        sourceItem: { value: 'Weekend', kanji: '週末', reading: 'しゅうまつ' }
    },
    {
        id: 'weekday_extra_46',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '發薪日是每月幾號？',
        stem_zh: '發薪日是每月幾號？',
        dialogue: {
            speakerA: '給料日はいつですか？',
            speakerB: '毎月25日ですが、土日の場合は前の＿＿に振り込まれます。（星期五）'
        },
        options: [
            { text: 'きんようび', isCorrect: true, reason: '正確！週末前的金曜日發薪。' },
            { text: 'かねようび', isCorrect: false, reason: '「金」讀「きん」不是「かね」。' },
            { text: 'もくようび', isCorrect: false, reason: '通常是金曜日不是木曜日。' },
            { text: 'げつようび', isCorrect: false, reason: '不會延到下週一。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '如果發薪日遇週末，通常提前到「金曜日」發放。',
            relatedRules: ['曜日的讀法', '給料日']
        },
        sourceItem: { value: 'Fri', kanji: '金曜日', reading: 'きんようび' }
    },
    {
        id: 'weekday_extra_47',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「火曜日」中「火」的讀法是？',
        stem_zh: '「火曜日」中「火」的讀法是？',
        options: [
            { text: 'か', isCorrect: true, reason: '正確！「火」在曜日中讀「か」。' },
            { text: 'ひ', isCorrect: false, reason: '「ひ」是訓讀（火焰），曜日用「か」。' },
            { text: 'ほ', isCorrect: false, reason: '沒有這個讀法。' },
            { text: 'かい', isCorrect: false, reason: '沒有長音，是短音「か」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「火曜日」的「火」讀「か」，是音讀。',
            trapExplanation: '「火」的訓讀「ひ」（火）和音讀「か」要區分。',
            relatedRules: ['曜日的讀法', '音讀vs訓讀']
        },
        sourceItem: { value: 'Tue', kanji: '火曜日', reading: 'かようび' }
    },
    {
        id: 'weekday_extra_48',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿の夜は居酒屋が混んでいます。',
        stem_zh: '星期五晚上居酒屋很擁擠。',
        options: [
            { text: 'きんようび', isCorrect: true, reason: '正確！金曜日晚上大家去喝酒。' },
            { text: 'かねようび', isCorrect: false, reason: '「金」讀「きん」不是「かね」。' },
            { text: 'もくようび', isCorrect: false, reason: '木曜日比金曜日人少。' },
            { text: 'すいようび', isCorrect: false, reason: '水曜日比金曜日人少。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「金曜日」晚上是日本上班族喝酒聚會的熱門時間。',
            relatedRules: ['曜日的讀法', '日本の飲み会文化']
        },
        sourceItem: { value: 'Fri', kanji: '金曜日', reading: 'きんようび' }
    },
    {
        id: 'weekday_extra_49',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '教會禮拜是哪一天？',
        stem_zh: '教會禮拜是哪一天？',
        dialogue: {
            speakerA: '教会の礼拝は何曜日ですか？',
            speakerB: '毎週＿＿の朝です。（星期日）'
        },
        options: [
            { text: 'にちようび', isCorrect: true, reason: '正確！教會日曜日做禮拜。' },
            { text: 'ひようび', isCorrect: false, reason: '「日」讀「にち」不是「ひ」。' },
            { text: 'どようび', isCorrect: false, reason: '這是土曜日（星期六）。' },
            { text: 'げつようび', isCorrect: false, reason: '這是月曜日（星期一）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '基督教的禮拜通常在「日曜日」（主日）。',
            relatedRules: ['曜日的讀法', '宗教行事']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },
    {
        id: 'weekday_extra_50',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「隔週」的讀法是？',
        stem_zh: '「隔週」的讀法是？',
        options: [
            { text: 'かくしゅう', isCorrect: true, reason: '正確！隔週讀「かくしゅう」。' },
            { text: 'かくしゅ', isCorrect: false, reason: '「週」要有長音「しゅう」。' },
            { text: 'へだてしゅう', isCorrect: false, reason: '「隔」讀「かく」不是「へだて」。' },
            { text: 'りかくしゅう', isCorrect: false, reason: '沒有「り」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「隔週」讀「かくしゅう」，意思是每隔一週。',
            relatedRules: ['週的讀法', '時間的表現']
        },
        sourceItem: { value: 'Every other week', kanji: '隔週', reading: 'かくしゅう' }
    },
    {
        id: 'weekday_extra_51',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '日本の小学校は＿＿も授業があります。',
        stem_zh: '日本的小學星期六也有課。',
        options: [
            { text: 'どようび', isCorrect: true, reason: '正確！有些學校土曜日有授業。' },
            { text: 'つちようび', isCorrect: false, reason: '「土」讀「ど」不是「つち」。' },
            { text: 'にちようび', isCorrect: false, reason: '日曜日沒有學校。' },
            { text: 'きんようび', isCorrect: false, reason: '金曜日是平常上課日。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '部分日本學校「土曜日」也有授業（土曜授業）。',
            relatedRules: ['曜日的讀法', '日本の学校制度']
        },
        sourceItem: { value: 'Sat', kanji: '土曜日', reading: 'どようび' }
    },
    {
        id: 'weekday_extra_52',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '新產品發售日是？',
        stem_zh: '新產品發售日是？',
        dialogue: {
            speakerA: '新製品の発売日はいつですか？',
            speakerB: '来週の＿＿です。（星期五）'
        },
        options: [
            { text: 'きんようび', isCorrect: true, reason: '正確！金曜日是常見的發售日。' },
            { text: 'かねようび', isCorrect: false, reason: '「金」讀「きん」不是「かね」。' },
            { text: 'げつようび', isCorrect: false, reason: '週初不是常見發售日。' },
            { text: 'すいようび', isCorrect: false, reason: '這是水曜日（星期三）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「金曜日」是日本新產品發售的熱門日子。',
            relatedRules: ['曜日的讀法', '発売日']
        },
        sourceItem: { value: 'Fri', kanji: '金曜日', reading: 'きんようび' }
    },
    {
        id: 'weekday_extra_53',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「水曜日」中「水」的讀法是？',
        stem_zh: '「水曜日」中「水」的讀法是？',
        options: [
            { text: 'すい', isCorrect: true, reason: '正確！「水」在曜日中讀「すい」。' },
            { text: 'みず', isCorrect: false, reason: '「みず」是訓讀（水），曜日用「すい」。' },
            { text: 'み', isCorrect: false, reason: '沒有這個讀法。' },
            { text: 'しゅい', isCorrect: false, reason: '拼寫錯誤。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「水曜日」的「水」讀「すい」，是音讀。',
            trapExplanation: '「水」的訓讀「みず」和音讀「すい」要區分。',
            relatedRules: ['曜日的讀法', '音讀vs訓讀']
        },
        sourceItem: { value: 'Wed', kanji: '水曜日', reading: 'すいようび' }
    },
    {
        id: 'weekday_extra_54',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '週刊誌は毎週＿＿に発売されます。',
        stem_zh: '週刊雜誌每週星期四發售。',
        options: [
            { text: 'もくようび', isCorrect: true, reason: '正確！很多週刊木曜日發售。' },
            { text: 'きようび', isCorrect: false, reason: '「木」讀「もく」不是「き」。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日（星期五）。' },
            { text: 'げつようび', isCorrect: false, reason: '這是月曜日（星期一）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '很多日本週刊雜誌「木曜日」發售。',
            relatedRules: ['曜日的讀法', '出版物の発売日']
        },
        sourceItem: { value: 'Thu', kanji: '木曜日', reading: 'もくようび' }
    },
    {
        id: 'weekday_extra_55',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '瑜伽課是哪幾天？',
        stem_zh: '瑜伽課是哪幾天？',
        dialogue: {
            speakerA: 'ヨガ教室は何曜日にありますか？',
            speakerB: '＿＿と金曜日です。（星期一）'
        },
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！月曜日和金曜日有瑜伽課。' },
            { text: 'がつようび', isCorrect: false, reason: '「月曜日」讀「げつ」。' },
            { text: 'すいようび', isCorrect: false, reason: '這是水曜日（星期三）。' },
            { text: 'もくようび', isCorrect: false, reason: '這是木曜日（星期四）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「月曜日」和「金曜日」是常見的課程安排日。',
            relatedRules: ['曜日的讀法', '習い事の予定']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },
    {
        id: 'weekday_extra_56',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「月曜日」中「曜」的讀法是？',
        stem_zh: '「月曜日」中「曜」的讀法是？',
        options: [
            { text: 'よう', isCorrect: true, reason: '正確！「曜」讀「よう」。' },
            { text: 'よ', isCorrect: false, reason: '有長音，是「よう」。' },
            { text: 'び', isCorrect: false, reason: '「び」是「日」的讀法。' },
            { text: 'あき', isCorrect: false, reason: '沒有這個讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '所有曜日中「曜」都讀「よう」。',
            relatedRules: ['曜日的讀法', '曜の字']
        },
        sourceItem: { value: 'Day of week', kanji: '曜', reading: 'よう' }
    },
    {
        id: 'weekday_extra_57',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '翌週の＿＿に届きます。',
        stem_zh: '下週星期二送達。',
        options: [
            { text: 'かようび', isCorrect: true, reason: '正確！下週火曜日送達。' },
            { text: 'ひようび', isCorrect: false, reason: '「火」讀「か」不是「ひ」。' },
            { text: 'げつようび', isCorrect: false, reason: '這是月曜日（星期一）。' },
            { text: 'すいようび', isCorrect: false, reason: '這是水曜日（星期三）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「翌週の火曜日」指下週二。',
            relatedRules: ['曜日的讀法', '配達の予定']
        },
        sourceItem: { value: 'Tue', kanji: '火曜日', reading: 'かようび' }
    },
    {
        id: 'weekday_extra_58',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '游泳池的清掃日是？',
        stem_zh: '游泳池的清掃日是？',
        dialogue: {
            speakerA: 'プールの清掃日はいつですか？',
            speakerB: '毎週＿＿の午前中です。（星期一）'
        },
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！很多游泳池月曜日清掃。' },
            { text: 'がつようび', isCorrect: false, reason: '「月曜日」讀「げつ」。' },
            { text: 'すいようび', isCorrect: false, reason: '這是水曜日（星期三）。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日（星期五）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '很多設施選「月曜日」作為清掃和維護日。',
            relatedRules: ['曜日的讀法', '施設の清掃日']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },
    {
        id: 'weekday_extra_59',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「翌週」的讀法是？',
        stem_zh: '「翌週」的讀法是？',
        options: [
            { text: 'よくしゅう', isCorrect: true, reason: '正確！翌週讀「よくしゅう」。' },
            { text: 'つぎしゅう', isCorrect: false, reason: '「翌」讀「よく」不是「つぎ」。' },
            { text: 'よくしゅ', isCorrect: false, reason: '「週」要有長音「しゅう」。' },
            { text: 'あくしゅう', isCorrect: false, reason: '「翌」讀「よく」不是「あく」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「翌週」讀「よくしゅう」，意思是下一週。',
            relatedRules: ['週的讀法', '翌〜の表現']
        },
        sourceItem: { value: 'Following week', kanji: '翌週', reading: 'よくしゅう' }
    },
    {
        id: 'weekday_extra_60',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿「週の半ば」と言われます。',
        stem_zh: '星期三被稱為「週中」。',
        options: [
            { text: 'すいようび', isCorrect: true, reason: '正確！水曜日是週の半ば。' },
            { text: 'みずようび', isCorrect: false, reason: '「水」讀「すい」不是「みず」。' },
            { text: 'もくようび', isCorrect: false, reason: '木曜日已過半。' },
            { text: 'かようび', isCorrect: false, reason: '火曜日還在週初。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「水曜日」位於工作週的中間，稱為「週の半ば」。',
            relatedRules: ['曜日的讀法', '週の構成']
        },
        sourceItem: { value: 'Wed', kanji: '水曜日', reading: 'すいようび' }
    },
    {
        id: 'weekday_extra_61',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '馬拉松大會是哪天？',
        stem_zh: '馬拉松大會是哪天？',
        dialogue: {
            speakerA: 'マラソン大会はいつですか？',
            speakerB: '今度の＿＿です。（星期日）'
        },
        options: [
            { text: 'にちようび', isCorrect: true, reason: '正確！馬拉松大會常在日曜日舉行。' },
            { text: 'ひようび', isCorrect: false, reason: '「日」讀「にち」不是「ひ」。' },
            { text: 'どようび', isCorrect: false, reason: '這是土曜日（星期六）。' },
            { text: 'げつようび', isCorrect: false, reason: '平日不適合大型活動。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '馬拉松等大型活動常在「日曜日」舉行。',
            relatedRules: ['曜日的讀法', 'イベントの日程']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },
    {
        id: 'weekday_extra_62',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「日曜日」中「日」的最後一個讀法是？',
        stem_zh: '「日曜日」中最後一個「日」的讀法是？',
        options: [
            { text: 'び', isCorrect: true, reason: '正確！最後的「日」讀「び」。' },
            { text: 'にち', isCorrect: false, reason: '第一個「日」讀「にち」，最後讀「び」。' },
            { text: 'ひ', isCorrect: false, reason: '不是訓讀「ひ」。' },
            { text: 'か', isCorrect: false, reason: '「日」沒有「か」的讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「曜日」的「日」讀「び」，全部曜日都一樣。',
            trapExplanation: '「日曜日」有兩個「日」，讀法不同：にち・よう・び。',
            relatedRules: ['曜日的讀法', '日の讀み分け']
        },
        sourceItem: { value: 'Day', kanji: '日', reading: 'び' }
    },
    {
        id: 'weekday_extra_63',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '今週中に終わらせます。',
        stem_zh: '這週內完成。',
        options: [
            { text: 'こんしゅうちゅう', isCorrect: true, reason: '正確！今週中讀「こんしゅうちゅう」。' },
            { text: 'こんしゅうなか', isCorrect: false, reason: '「中」讀「ちゅう」不是「なか」。' },
            { text: 'いましゅうちゅう', isCorrect: false, reason: '「今」讀「こん」不是「いま」。' },
            { text: 'こんしゅじゅう', isCorrect: false, reason: '缺少長音，且「中」讀「ちゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「今週中」讀「こんしゅうちゅう」，指這週內。',
            relatedRules: ['週的讀法', '〜中の表現']
        },
        sourceItem: { value: 'Within this week', kanji: '今週中', reading: 'こんしゅうちゅう' }
    },
    {
        id: 'weekday_extra_64',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '打工是哪幾天？',
        stem_zh: '打工是哪幾天？',
        dialogue: {
            speakerA: 'バイトは何曜日に入っていますか？',
            speakerB: '＿＿と日曜日です。（星期六）'
        },
        options: [
            { text: 'どようび', isCorrect: true, reason: '正確！土曜日和日曜日打工。' },
            { text: 'つちようび', isCorrect: false, reason: '「土」讀「ど」不是「つち」。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日（星期五）。' },
            { text: 'げつようび', isCorrect: false, reason: '這是月曜日（星期一）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '學生常在「土曜日」和「日曜日」打工。',
            relatedRules: ['曜日的讀法', 'アルバイトの予定']
        },
        sourceItem: { value: 'Sat', kanji: '土曜日', reading: 'どようび' }
    },
    // ===== 追加題目 65-114 =====
    {
        id: 'weekday_extra_65',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「毎日」的讀法是？',
        stem_zh: '「毎日」的讀法是？',
        options: [
            { text: 'まいにち', isCorrect: true, reason: '正確！毎日讀「まいにち」。' },
            { text: 'まいひ', isCorrect: false, reason: '「日」讀「にち」不是「ひ」。' },
            { text: 'ごとにち', isCorrect: false, reason: '「毎」讀「まい」不是「ごと」。' },
            { text: 'まいじつ', isCorrect: false, reason: '「日」在此讀「にち」不是「じつ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「毎日」讀「まいにち」，意思是每天。',
            relatedRules: ['毎〜的讀法', '日的讀法']
        },
        sourceItem: { value: 'Every day', kanji: '毎日', reading: 'まいにち' }
    },
    {
        id: 'weekday_extra_66',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿のジャンプは人気があります。',
        stem_zh: '週一的JUMP（少年漫畫雜誌）很受歡迎。',
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！少年ジャンプ月曜日發售。' },
            { text: 'がつようび', isCorrect: false, reason: '「月曜日」讀「げつ」。' },
            { text: 'きんようび', isCorrect: false, reason: '不是金曜日發售。' },
            { text: 'もくようび', isCorrect: false, reason: '不是木曜日發售。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '《週刊少年ジャンプ》每週「月曜日」發售。',
            relatedRules: ['曜日的讀法', '日本の漫画雑誌']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },
    {
        id: 'weekday_extra_67',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '網球練習是哪天？',
        stem_zh: '網球練習是哪天？',
        dialogue: {
            speakerA: 'テニスの練習は何曜日ですか？',
            speakerB: '毎週＿＿の放課後です。（星期三）'
        },
        options: [
            { text: 'すいようび', isCorrect: true, reason: '正確！水曜日放學後練習。' },
            { text: 'みずようび', isCorrect: false, reason: '「水」讀「すい」不是「みず」。' },
            { text: 'かようび', isCorrect: false, reason: '這是火曜日（星期二）。' },
            { text: 'もくようび', isCorrect: false, reason: '這是木曜日（星期四）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「水曜日」是常見的社團活動日。',
            relatedRules: ['曜日的讀法', '部活の予定']
        },
        sourceItem: { value: 'Wed', kanji: '水曜日', reading: 'すいようび' }
    },
    {
        id: 'weekday_extra_68',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「休日」的讀法是？',
        stem_zh: '「休日」的讀法是？',
        options: [
            { text: 'きゅうじつ', isCorrect: true, reason: '正確！休日讀「きゅうじつ」。' },
            { text: 'やすみび', isCorrect: false, reason: '「休」讀「きゅう」，「日」讀「じつ」。' },
            { text: 'きゅうにち', isCorrect: false, reason: '「日」在此讀「じつ」不是「にち」。' },
            { text: 'やすみにち', isCorrect: false, reason: '用音讀不是訓讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「休日」讀「きゅうじつ」，意思是假日。',
            trapExplanation: '注意「日」在此讀「じつ」而非「にち」。',
            relatedRules: ['休日的讀法', '日の讀み分け']
        },
        sourceItem: { value: 'Holiday', kanji: '休日', reading: 'きゅうじつ' }
    },
    {
        id: 'weekday_extra_69',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿「週の始まり」です。',
        stem_zh: '星期一是「一週的開始」。',
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！工作週從月曜日開始。' },
            { text: 'がつようび', isCorrect: false, reason: '「月曜日」讀「げつ」。' },
            { text: 'にちようび', isCorrect: false, reason: '日本日曆從日曜日開始，但工作週從月曜日。' },
            { text: 'どようび', isCorrect: false, reason: '土曜日是週末開始。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '工作週從「月曜日」開始。',
            relatedRules: ['曜日的讀法', '週の始まり']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },
    {
        id: 'weekday_extra_70',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '垃圾車幾點來？',
        stem_zh: '垃圾車幾點來？',
        dialogue: {
            speakerA: '＿＿のゴミ収集は何時ですか？（星期二）',
            speakerB: '朝8時に来ます。'
        },
        options: [
            { text: 'かようび', isCorrect: true, reason: '正確！火曜日的垃圾收集。' },
            { text: 'ひようび', isCorrect: false, reason: '「火」讀「か」不是「ひ」。' },
            { text: 'すいようび', isCorrect: false, reason: '這是水曜日（星期三）。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日（星期五）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「火曜日」是常見的垃圾收集日之一。',
            relatedRules: ['曜日的讀法', 'ゴミ収集']
        },
        sourceItem: { value: 'Tue', kanji: '火曜日', reading: 'かようび' }
    },
    {
        id: 'weekday_extra_71',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「祝日」的讀法是？',
        stem_zh: '「祝日」的讀法是？',
        options: [
            { text: 'しゅくじつ', isCorrect: true, reason: '正確！祝日讀「しゅくじつ」。' },
            { text: 'いわいび', isCorrect: false, reason: '「祝」讀「しゅく」，「日」讀「じつ」。' },
            { text: 'しゅくにち', isCorrect: false, reason: '「日」在此讀「じつ」不是「にち」。' },
            { text: 'しゅくひ', isCorrect: false, reason: '「日」讀「じつ」不是「ひ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「祝日」讀「しゅくじつ」，指國定假日。',
            relatedRules: ['祝日的讀法', '日の讀み分け']
        },
        sourceItem: { value: 'National holiday', kanji: '祝日', reading: 'しゅくじつ' }
    },
    {
        id: 'weekday_extra_72',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '日本では＿＿が「安息日」です。',
        stem_zh: '在日本，星期日是「安息日」。',
        options: [
            { text: 'にちようび', isCorrect: true, reason: '正確！日曜日是休息日。' },
            { text: 'ひようび', isCorrect: false, reason: '「日」讀「にち」不是「ひ」。' },
            { text: 'どようび', isCorrect: false, reason: '土曜日也是休息日但不叫安息日。' },
            { text: 'げつようび', isCorrect: false, reason: '月曜日是工作日。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「日曜日」在很多文化中是「安息日」。',
            relatedRules: ['曜日的讀法', '宗教と曜日']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },
    {
        id: 'weekday_extra_73',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '美術館的免費日是？',
        stem_zh: '美術館的免費日是？',
        dialogue: {
            speakerA: '美術館の無料日はいつですか？',
            speakerB: '毎月第一＿＿です。（星期日）'
        },
        options: [
            { text: 'にちようび', isCorrect: true, reason: '正確！每月第一個日曜日免費。' },
            { text: 'ひようび', isCorrect: false, reason: '「日」讀「にち」不是「ひ」。' },
            { text: 'どようび', isCorrect: false, reason: '這是土曜日（星期六）。' },
            { text: 'げつようび', isCorrect: false, reason: '月曜日通常休館。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '很多日本美術館每月第一「日曜日」免費。',
            relatedRules: ['曜日的讀法', '美術館の割引']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },
    {
        id: 'weekday_extra_74',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「週初め」的讀法是？',
        stem_zh: '「週初め」的讀法是？',
        options: [
            { text: 'しゅうはじめ', isCorrect: true, reason: '正確！週初め讀「しゅうはじめ」。' },
            { text: 'しゅうそめ', isCorrect: false, reason: '「初め」讀「はじめ」不是「そめ」。' },
            { text: 'しゅうしょ', isCorrect: false, reason: '「初め」不讀「しょ」。' },
            { text: 'しゅはじめ', isCorrect: false, reason: '「週」要有長音「しゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「週初め」讀「しゅうはじめ」，指一週開始。',
            relatedRules: ['週的讀法', '初め的讀法']
        },
        sourceItem: { value: 'Beginning of week', kanji: '週初め', reading: 'しゅうはじめ' }
    },
    {
        id: 'weekday_extra_75',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '日本の官公庁は＿＿から金曜日まで開いています。',
        stem_zh: '日本的政府機關從星期一到星期五開放。',
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！政府機關月曜日到金曜日營業。' },
            { text: 'がつようび', isCorrect: false, reason: '「月曜日」讀「げつ」。' },
            { text: 'にちようび', isCorrect: false, reason: '日曜日政府機關休息。' },
            { text: 'どようび', isCorrect: false, reason: '土曜日政府機關休息。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本的官公庁「月曜日」到「金曜日」營業。',
            relatedRules: ['曜日的讀法', '官公庁の営業日']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },
    {
        id: 'weekday_extra_76',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '新歌發布是哪天？',
        stem_zh: '新歌發布是哪天？',
        dialogue: {
            speakerA: '新曲のリリース日はいつですか？',
            speakerB: '毎週＿＿です。（星期三）'
        },
        options: [
            { text: 'すいようび', isCorrect: true, reason: '正確！日本的音樂常水曜日發布。' },
            { text: 'みずようび', isCorrect: false, reason: '「水」讀「すい」不是「みず」。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日（星期五）。' },
            { text: 'げつようび', isCorrect: false, reason: '這是月曜日（星期一）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本的音樂傳統上「水曜日」發布新曲。',
            relatedRules: ['曜日的讀法', '音楽のリリース日']
        },
        sourceItem: { value: 'Wed', kanji: '水曜日', reading: 'すいようび' }
    },
    {
        id: 'weekday_extra_77',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「連休」的讀法是？',
        stem_zh: '「連休」的讀法是？',
        options: [
            { text: 'れんきゅう', isCorrect: true, reason: '正確！連休讀「れんきゅう」。' },
            { text: 'つらやすみ', isCorrect: false, reason: '用音讀不是訓讀。' },
            { text: 'れんやすみ', isCorrect: false, reason: '「休」讀「きゅう」不是「やすみ」。' },
            { text: 'つづきやすみ', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「連休」讀「れんきゅう」，指連續假期。',
            trapExplanation: '「休」的音讀是「きゅう」，訓讀是「やすみ」。',
            relatedRules: ['連休的讀法', '休の讀み分け']
        },
        sourceItem: { value: 'Consecutive holidays', kanji: '連休', reading: 'れんきゅう' }
    },
    {
        id: 'weekday_extra_78',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿のドラマが一番視聴率が高いです。',
        stem_zh: '星期日的電視劇收視率最高。',
        options: [
            { text: 'にちようび', isCorrect: true, reason: '正確！日曜劇場收視率高。' },
            { text: 'ひようび', isCorrect: false, reason: '「日」讀「にち」不是「ひ」。' },
            { text: 'どようび', isCorrect: false, reason: '土曜日也有人氣但不是最高。' },
            { text: 'きんようび', isCorrect: false, reason: '金曜日不是最高收視時段。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「日曜劇場」（日曜日晚上）是日本收視率最高的電視劇時段。',
            relatedRules: ['曜日的讀法', 'テレビの視聴率']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },
    {
        id: 'weekday_extra_79',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '回診是哪一天？',
        stem_zh: '回診是哪一天？',
        dialogue: {
            speakerA: '次の診察日はいつですか？',
            speakerB: '来週の＿＿です。（星期四）'
        },
        options: [
            { text: 'もくようび', isCorrect: true, reason: '正確！下週木曜日回診。' },
            { text: 'きようび', isCorrect: false, reason: '「木」讀「もく」不是「き」。' },
            { text: 'すいようび', isCorrect: false, reason: '這是水曜日（星期三）。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日（星期五）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '醫院的診察日安排因醫師而異。',
            relatedRules: ['曜日的讀法', '病院の予約']
        },
        sourceItem: { value: 'Thu', kanji: '木曜日', reading: 'もくようび' }
    },
    {
        id: 'weekday_extra_80',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「週明け」的讀法是？',
        stem_zh: '「週明け」的讀法是？',
        options: [
            { text: 'しゅうあけ', isCorrect: true, reason: '正確！週明け讀「しゅうあけ」。' },
            { text: 'しゅうみょう', isCorrect: false, reason: '「明け」讀「あけ」。' },
            { text: 'しゅあけ', isCorrect: false, reason: '「週」要有長音「しゅう」。' },
            { text: 'しゅうびらき', isCorrect: false, reason: '「明け」不讀「びらき」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「週明け」讀「しゅうあけ」，指週末結束後的週一。',
            relatedRules: ['週的讀法', '〜明けの表現']
        },
        sourceItem: { value: 'Beginning of new week', kanji: '週明け', reading: 'しゅうあけ' }
    },
    {
        id: 'weekday_extra_81',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿「ハッピーマンデー」で祝日になることがあります。',
        stem_zh: '星期一有時因「快樂星期一」制度而成為假日。',
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！ハッピーマンデー制度使月曜日變假日。' },
            { text: 'がつようび', isCorrect: false, reason: '「月曜日」讀「げつ」。' },
            { text: 'きんようび', isCorrect: false, reason: '這制度與金曜日無關。' },
            { text: 'にちようび', isCorrect: false, reason: '日曜日本來就是週末。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「ハッピーマンデー制度」將部分祝日移到「月曜日」形成連休。',
            relatedRules: ['曜日的讀法', '日本的祝日制度']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },
    {
        id: 'weekday_extra_82',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '考試是哪一天？',
        stem_zh: '考試是哪一天？',
        dialogue: {
            speakerA: '試験は何曜日ですか？',
            speakerB: '＿＿の午前中です。（星期六）'
        },
        options: [
            { text: 'どようび', isCorrect: true, reason: '正確！土曜日上午考試。' },
            { text: 'つちようび', isCorrect: false, reason: '「土」讀「ど」不是「つち」。' },
            { text: 'にちようび', isCorrect: false, reason: '這是日曜日（星期日）。' },
            { text: 'げつようび', isCorrect: false, reason: '這是月曜日（星期一）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '很多考試在「土曜日」舉行。',
            relatedRules: ['曜日的讀法', '試験の日程']
        },
        sourceItem: { value: 'Sat', kanji: '土曜日', reading: 'どようび' }
    },
    {
        id: 'weekday_extra_83',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「振替休日」的讀法是？',
        stem_zh: '「振替休日」的讀法是？',
        options: [
            { text: 'ふりかえきゅうじつ', isCorrect: true, reason: '正確！振替休日讀「ふりかえきゅうじつ」。' },
            { text: 'しんたいきゅうじつ', isCorrect: false, reason: '「振替」讀「ふりかえ」。' },
            { text: 'ふりかえやすみび', isCorrect: false, reason: '「休日」讀「きゅうじつ」。' },
            { text: 'しんかえきゅうじつ', isCorrect: false, reason: '「振」讀「ふり」不是「しん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「振替休日」讀「ふりかえきゅうじつ」，指祝日遇週日時的補假。',
            trapExplanation: '「振替」是訓讀「ふりかえ」，「休日」是音讀「きゅうじつ」。',
            relatedRules: ['振替休日的讀法', '日本的祝日制度']
        },
        sourceItem: { value: 'Substitute holiday', kanji: '振替休日', reading: 'ふりかえきゅうじつ' }
    },
    {
        id: 'weekday_extra_84',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿「週末の入り口」と呼ばれます。',
        stem_zh: '星期五被稱為「週末的入口」。',
        options: [
            { text: 'きんようび', isCorrect: true, reason: '正確！金曜日是週末的開始。' },
            { text: 'かねようび', isCorrect: false, reason: '「金」讀「きん」不是「かね」。' },
            { text: 'もくようび', isCorrect: false, reason: '木曜日還要工作一天。' },
            { text: 'どようび', isCorrect: false, reason: '土曜日已經是週末了。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「金曜日」被稱為週末的入口，工作結束後就是假期。',
            relatedRules: ['曜日的讀法', '週末への期待']
        },
        sourceItem: { value: 'Fri', kanji: '金曜日', reading: 'きんようび' }
    },
    {
        id: 'weekday_extra_85',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '家庭日是哪天？',
        stem_zh: '家庭日是哪天？',
        dialogue: {
            speakerA: 'ファミリーデーはいつですか？',
            speakerB: '毎週＿＿です。（星期日）'
        },
        options: [
            { text: 'にちようび', isCorrect: true, reason: '正確！日曜日是家庭團聚日。' },
            { text: 'ひようび', isCorrect: false, reason: '「日」讀「にち」不是「ひ」。' },
            { text: 'どようび', isCorrect: false, reason: '土曜日也可以但傳統是日曜日。' },
            { text: 'げつようび', isCorrect: false, reason: '月曜日大家要工作上學。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「日曜日」傳統上是家庭團聚的日子。',
            relatedRules: ['曜日的讀法', '家族の時間']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },
    {
        id: 'weekday_extra_86',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「定休日」的讀法是？',
        stem_zh: '「定休日」的讀法是？',
        options: [
            { text: 'ていきゅうび', isCorrect: true, reason: '正確！定休日讀「ていきゅうび」。' },
            { text: 'ていやすみび', isCorrect: false, reason: '「休」讀「きゅう」不是「やすみ」。' },
            { text: 'じょうきゅうび', isCorrect: false, reason: '「定」讀「てい」不是「じょう」。' },
            { text: 'さだめやすみび', isCorrect: false, reason: '全部用音讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「定休日」讀「ていきゅうび」，指店鋪固定休息日。',
            relatedRules: ['定休日的讀法', '店舗の休み']
        },
        sourceItem: { value: 'Regular holiday', kanji: '定休日', reading: 'ていきゅうび' }
    },
    {
        id: 'weekday_extra_87',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: 'この店の定休日は＿＿です。',
        stem_zh: '這家店的定休日是星期二。',
        options: [
            { text: 'かようび', isCorrect: true, reason: '正確！火曜日是定休日。' },
            { text: 'ひようび', isCorrect: false, reason: '「火」讀「か」不是「ひ」。' },
            { text: 'げつようび', isCorrect: false, reason: '這是月曜日（星期一）。' },
            { text: 'すいようび', isCorrect: false, reason: '這是水曜日（星期三）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '很多餐廳選「火曜日」作為定休日。',
            relatedRules: ['曜日的讀法', '飲食店の定休日']
        },
        sourceItem: { value: 'Tue', kanji: '火曜日', reading: 'かようび' }
    },
    {
        id: 'weekday_extra_88',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '社團活動是哪幾天？',
        stem_zh: '社團活動是哪幾天？',
        dialogue: {
            speakerA: '部活は週に何日ありますか？',
            speakerB: '月曜日から＿＿まで毎日です。（星期五）'
        },
        options: [
            { text: 'きんようび', isCorrect: true, reason: '正確！平日每天都有社團活動。' },
            { text: 'かねようび', isCorrect: false, reason: '「金」讀「きん」不是「かね」。' },
            { text: 'もくようび', isCorrect: false, reason: '這是木曜日（星期四）。' },
            { text: 'どようび', isCorrect: false, reason: '週末不一定有活動。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '很多學校社團「月曜日」到「金曜日」每天活動。',
            relatedRules: ['曜日的讀法', '部活動の予定']
        },
        sourceItem: { value: 'Fri', kanji: '金曜日', reading: 'きんようび' }
    },
    {
        id: 'weekday_extra_89',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「週に一回」的讀法是？',
        stem_zh: '「週に一回」的讀法是？',
        options: [
            { text: 'しゅうにいっかい', isCorrect: true, reason: '正確！週に一回讀「しゅうにいっかい」。' },
            { text: 'しゅうにひとかい', isCorrect: false, reason: '「一回」讀「いっかい」。' },
            { text: 'しゅにいちかい', isCorrect: false, reason: '「週」是「しゅう」，「一回」有促音。' },
            { text: 'しゅうにいちかい', isCorrect: false, reason: '「一回」有促音變成「いっかい」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「週に一回」讀「しゅうにいっかい」，意思是每週一次。',
            relatedRules: ['週的讀法', '頻度の表現']
        },
        sourceItem: { value: 'Once a week', kanji: '週に一回', reading: 'しゅうにいっかい' }
    },
    {
        id: 'weekday_extra_90',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿の朝市は新鮮な野菜がたくさんあります。',
        stem_zh: '星期日早上的市集有很多新鮮蔬菜。',
        options: [
            { text: 'にちようび', isCorrect: true, reason: '正確！日曜日有朝市。' },
            { text: 'ひようび', isCorrect: false, reason: '「日」讀「にち」不是「ひ」。' },
            { text: 'どようび', isCorrect: false, reason: '這是土曜日（星期六）。' },
            { text: 'げつようび', isCorrect: false, reason: '平日比較少有朝市。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「日曜日」很多地方有朝市（早晨市集）。',
            relatedRules: ['曜日的讀法', '朝市の日']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },
    {
        id: 'weekday_extra_91',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '日語能力試驗是哪天？',
        stem_zh: '日語能力試驗是哪天？',
        dialogue: {
            speakerA: 'JLPTはいつですか？',
            speakerB: '7月と12月の＿＿です。（星期日）'
        },
        options: [
            { text: 'にちようび', isCorrect: true, reason: '正確！JLPT在日曜日舉行。' },
            { text: 'ひようび', isCorrect: false, reason: '「日」讀「にち」不是「ひ」。' },
            { text: 'どようび', isCorrect: false, reason: '這是土曜日（星期六）。' },
            { text: 'げつようび', isCorrect: false, reason: '不在平日舉行。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: 'JLPT（日本語能力試驗）每年7月和12月的「日曜日」舉行。',
            relatedRules: ['曜日的讀法', '日本語能力試験']
        },
        sourceItem: { value: 'Sun', kanji: '日曜日', reading: 'にちようび' }
    },
    {
        id: 'weekday_extra_92',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「平日休み」的讀法是？',
        stem_zh: '「平日休み」的讀法是？',
        options: [
            { text: 'へいじつやすみ', isCorrect: true, reason: '正確！平日休み讀「へいじつやすみ」。' },
            { text: 'へいじつきゅう', isCorrect: false, reason: '「休み」讀「やすみ」。' },
            { text: 'ひらびやすみ', isCorrect: false, reason: '「平日」讀「へいじつ」。' },
            { text: 'へいにちやすみ', isCorrect: false, reason: '「日」讀「じつ」不是「にち」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「平日休み」讀「へいじつやすみ」，指平日的休假。',
            trapExplanation: '「休み」是訓讀「やすみ」，與「休日」的「きゅうじつ」不同。',
            relatedRules: ['休み的讀法', '平日的讀法']
        },
        sourceItem: { value: 'Weekday off', kanji: '平日休み', reading: 'へいじつやすみ' }
    },
    {
        id: 'weekday_extra_93',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿の夜「金曜ロードショー」があります。',
        stem_zh: '星期五晚上有「金曜電影院」。',
        options: [
            { text: 'きんようび', isCorrect: true, reason: '正確！金曜ロードショー在金曜日播出。' },
            { text: 'かねようび', isCorrect: false, reason: '「金」讀「きん」不是「かね」。' },
            { text: 'もくようび', isCorrect: false, reason: '這是木曜日（星期四）。' },
            { text: 'どようび', isCorrect: false, reason: '這是土曜日（星期六）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「金曜ロードショー」是日本電視台「金曜日」播出的電影節目。',
            relatedRules: ['曜日的讀法', '日本的テレビ番組']
        },
        sourceItem: { value: 'Fri', kanji: '金曜日', reading: 'きんようび' }
    },
    {
        id: 'weekday_extra_94',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '大掃除是哪天？',
        stem_zh: '大掃除是哪天？',
        dialogue: {
            speakerA: '大掃除はいつしますか？',
            speakerB: '今度の＿＿の午前中にします。（星期六）'
        },
        options: [
            { text: 'どようび', isCorrect: true, reason: '正確！土曜日上午大掃除。' },
            { text: 'つちようび', isCorrect: false, reason: '「土」讀「ど」不是「つち」。' },
            { text: 'にちようび', isCorrect: false, reason: '這是日曜日（星期日）。' },
            { text: 'きんようび', isCorrect: false, reason: '平日沒時間大掃除。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「土曜日」是做家事和大掃除的好時機。',
            relatedRules: ['曜日的讀法', '家事の予定']
        },
        sourceItem: { value: 'Sat', kanji: '土曜日', reading: 'どようび' }
    },
    {
        id: 'weekday_extra_95',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「毎週末」的讀法是？',
        stem_zh: '「毎週末」的讀法是？',
        options: [
            { text: 'まいしゅうまつ', isCorrect: true, reason: '正確！毎週末讀「まいしゅうまつ」。' },
            { text: 'ごとしゅうまつ', isCorrect: false, reason: '「毎」讀「まい」不是「ごと」。' },
            { text: 'まいしゅうすえ', isCorrect: false, reason: '「末」讀「まつ」不是「すえ」。' },
            { text: 'まいしゅまつ', isCorrect: false, reason: '「週」要有長音「しゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「毎週末」讀「まいしゅうまつ」，意思是每個週末。',
            relatedRules: ['毎〜的讀法', '週末的讀法']
        },
        sourceItem: { value: 'Every weekend', kanji: '毎週末', reading: 'まいしゅうまつ' }
    },
    {
        id: 'weekday_extra_96',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '郵便局は＿＿も営業しています。',
        stem_zh: '郵局星期六也有營業。',
        options: [
            { text: 'どようび', isCorrect: true, reason: '正確！有些郵局土曜日營業。' },
            { text: 'つちようび', isCorrect: false, reason: '「土」讀「ど」不是「つち」。' },
            { text: 'にちようび', isCorrect: false, reason: '日曜日大多休息。' },
            { text: 'しゅうまつ', isCorrect: false, reason: '週末指土日，但這題指土曜日。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '部分郵局「土曜日」有營業（週末限定服務）。',
            relatedRules: ['曜日的讀法', '郵便局の営業日']
        },
        sourceItem: { value: 'Sat', kanji: '土曜日', reading: 'どようび' }
    },
    {
        id: 'weekday_extra_97',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '線上會議是幾點？',
        stem_zh: '線上會議是幾點？',
        dialogue: {
            speakerA: 'オンライン会議は何曜日の何時ですか？',
            speakerB: '毎週＿＿の午前10時です。（星期二）'
        },
        options: [
            { text: 'かようび', isCorrect: true, reason: '正確！火曜日上午10點開會。' },
            { text: 'ひようび', isCorrect: false, reason: '「火」讀「か」不是「ひ」。' },
            { text: 'げつようび', isCorrect: false, reason: '這是月曜日（星期一）。' },
            { text: 'すいようび', isCorrect: false, reason: '這是水曜日（星期三）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「火曜日」是常見的定例會議日。',
            relatedRules: ['曜日的讀法', '会議的予定']
        },
        sourceItem: { value: 'Tue', kanji: '火曜日', reading: 'かようび' }
    },
    {
        id: 'weekday_extra_98',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「曜日」單獨的讀法是？',
        stem_zh: '「曜日」單獨的讀法是？',
        options: [
            { text: 'ようび', isCorrect: true, reason: '正確！曜日讀「ようび」。' },
            { text: 'ようじつ', isCorrect: false, reason: '「日」在曜日中讀「び」。' },
            { text: 'ようにち', isCorrect: false, reason: '「日」在曜日中讀「び」。' },
            { text: 'よび', isCorrect: false, reason: '「曜」是長音「よう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「曜日」讀「ようび」，「日」在這裡讀「び」。',
            trapExplanation: '「日」的讀法很多，在「曜日」中讀「び」。',
            relatedRules: ['曜日的讀法', '日の讀み分け']
        },
        sourceItem: { value: 'Day of week', kanji: '曜日', reading: 'ようび' }
    },
    {
        id: 'weekday_extra_99',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '七曜とは＿＿から日曜日までのことです。',
        stem_zh: '七曜指的是從星期一到星期日。',
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！七曜從月曜日開始。' },
            { text: 'がつようび', isCorrect: false, reason: '「月曜日」讀「げつ」。' },
            { text: 'にちようび', isCorrect: false, reason: '日曜日是七曜的最後一天。' },
            { text: 'どようび', isCorrect: false, reason: '土曜日是第六天。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七曜」指一週七天，從「月曜日」到「日曜日」。',
            relatedRules: ['曜日的讀法', '七曜の由来']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },
    {
        id: 'weekday_extra_100',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '每週固定休息是哪兩天？',
        stem_zh: '每週固定休息是哪兩天？',
        dialogue: {
            speakerA: '週休二日制の休みは何曜日ですか？',
            speakerB: '＿＿と日曜日です。（星期六）'
        },
        options: [
            { text: 'どようび', isCorrect: true, reason: '正確！週休二日是土日休息。' },
            { text: 'つちようび', isCorrect: false, reason: '「土」讀「ど」不是「つち」。' },
            { text: 'きんようび', isCorrect: false, reason: '金曜日還要工作。' },
            { text: 'げつようび', isCorrect: false, reason: '月曜日是工作日。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「週休二日制」指「土曜日」和「日曜日」休息。',
            relatedRules: ['曜日的讀法', '日本の労働制度']
        },
        sourceItem: { value: 'Sat', kanji: '土曜日', reading: 'どようび' }
    },
    // ===== 追加題目 101-114 =====
    {
        id: 'weekday_extra_101',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「水曜どうでしょう」的「水曜」讀法是？',
        stem_zh: '「水曜日怎麼樣」的「水曜」讀法是？',
        options: [
            { text: 'すいよう', isCorrect: true, reason: '正確！水曜讀「すいよう」。' },
            { text: 'みずよう', isCorrect: false, reason: '「水」讀「すい」不是「みず」。' },
            { text: 'すいようび', isCorrect: false, reason: '節目名省略「日」。' },
            { text: 'しゅいよう', isCorrect: false, reason: '拼寫錯誤。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「水曜どうでしょう」是日本人氣節目，「水曜」讀「すいよう」。',
            relatedRules: ['曜日的讀法', '日本的テレビ番組']
        },
        sourceItem: { value: 'Wed', kanji: '水曜', reading: 'すいよう' }
    },
    {
        id: 'weekday_extra_102',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '週の後半は＿＿から始まります。',
        stem_zh: '一週的後半從星期四開始。',
        options: [
            { text: 'もくようび', isCorrect: true, reason: '正確！木曜日是週後半的開始。' },
            { text: 'きようび', isCorrect: false, reason: '「木」讀「もく」不是「き」。' },
            { text: 'すいようび', isCorrect: false, reason: '水曜日是週中。' },
            { text: 'きんようび', isCorrect: false, reason: '金曜日已經接近週末。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「木曜日」常被視為週後半的開始。',
            relatedRules: ['曜日的讀法', '週の構成']
        },
        sourceItem: { value: 'Thu', kanji: '木曜日', reading: 'もくようび' }
    },
    {
        id: 'weekday_extra_103',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '面試是哪天？',
        stem_zh: '面試是哪天？',
        dialogue: {
            speakerA: '面接は何曜日ですか？',
            speakerB: '来週の＿＿の午後2時です。（星期三）'
        },
        options: [
            { text: 'すいようび', isCorrect: true, reason: '正確！水曜日下午2點面試。' },
            { text: 'みずようび', isCorrect: false, reason: '「水」讀「すい」不是「みず」。' },
            { text: 'かようび', isCorrect: false, reason: '這是火曜日（星期二）。' },
            { text: 'もくようび', isCorrect: false, reason: '這是木曜日（星期四）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「水曜日」是常見的面試日。',
            relatedRules: ['曜日的讀法', '面接の予定']
        },
        sourceItem: { value: 'Wed', kanji: '水曜日', reading: 'すいようび' }
    },
    {
        id: 'weekday_extra_104',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「日月火水木金土」的「日」讀法是？',
        stem_zh: '「日月火水木金土」的「日」讀法是？',
        options: [
            { text: 'にち', isCorrect: true, reason: '正確！七曜的「日」讀「にち」。' },
            { text: 'ひ', isCorrect: false, reason: '在七曜中用音讀「にち」。' },
            { text: 'び', isCorrect: false, reason: '「び」是「曜日」的「日」。' },
            { text: 'じつ', isCorrect: false, reason: '在七曜名稱中讀「にち」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '七曜「日月火水木金土」的「日」讀「にち」（日曜日）。',
            trapExplanation: '「日」有多種讀法，要根據語境判斷。',
            relatedRules: ['曜日的讀法', '日の讀み分け']
        },
        sourceItem: { value: 'Sun', kanji: '日', reading: 'にち' }
    },
    {
        id: 'weekday_extra_105',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿は英語で「Monday」です。',
        stem_zh: '星期一的英文是「Monday」。',
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！月曜日＝Monday。' },
            { text: 'がつようび', isCorrect: false, reason: '「月曜日」讀「げつ」。' },
            { text: 'にちようび', isCorrect: false, reason: '日曜日＝Sunday。' },
            { text: 'かようび', isCorrect: false, reason: '火曜日＝Tuesday。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「月曜日」對應英文的「Monday」。',
            relatedRules: ['曜日的讀法', '英語との対応']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },
    {
        id: 'weekday_extra_106',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '電視節目錄影是哪天？',
        stem_zh: '電視節目錄影是哪天？',
        dialogue: {
            speakerA: '番組の収録は何曜日ですか？',
            speakerB: '毎週＿＿です。（星期四）'
        },
        options: [
            { text: 'もくようび', isCorrect: true, reason: '正確！很多節目木曜日錄影。' },
            { text: 'きようび', isCorrect: false, reason: '「木」讀「もく」不是「き」。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日（星期五）。' },
            { text: 'すいようび', isCorrect: false, reason: '這是水曜日（星期三）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「木曜日」是常見的節目錄影日。',
            relatedRules: ['曜日的讀法', 'テレビ収録']
        },
        sourceItem: { value: 'Thu', kanji: '木曜日', reading: 'もくようび' }
    },
    {
        id: 'weekday_extra_107',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「週前半」的讀法是？',
        stem_zh: '「週前半」的讀法是？',
        options: [
            { text: 'しゅうぜんはん', isCorrect: true, reason: '正確！週前半讀「しゅうぜんはん」。' },
            { text: 'しゅうまえはん', isCorrect: false, reason: '「前半」讀「ぜんはん」。' },
            { text: 'しゅぜんはん', isCorrect: false, reason: '「週」要有長音「しゅう」。' },
            { text: 'しゅうさきはん', isCorrect: false, reason: '「前」讀「ぜん」不是「さき」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「週前半」讀「しゅうぜんはん」，指一週的前幾天。',
            relatedRules: ['週的讀法', '前半的讀法']
        },
        sourceItem: { value: 'First half of week', kanji: '週前半', reading: 'しゅうぜんはん' }
    },
    {
        id: 'weekday_extra_108',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿の電車は通勤ラッシュで混んでいます。',
        stem_zh: '星期一的電車因為通勤尖峰很擁擠。',
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！月曜日早上是通勤高峰。' },
            { text: 'がつようび', isCorrect: false, reason: '「月曜日」讀「げつ」。' },
            { text: 'にちようび', isCorrect: false, reason: '日曜日沒有通勤。' },
            { text: 'どようび', isCorrect: false, reason: '土曜日人較少。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「月曜日」早上是通勤最擁擠的時候。',
            relatedRules: ['曜日的讀法', '通勤ラッシュ']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },
    {
        id: 'weekday_extra_109',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '圖書館的新書上架是哪天？',
        stem_zh: '圖書館的新書上架是哪天？',
        dialogue: {
            speakerA: '図書館の新刊入荷日はいつですか？',
            speakerB: '毎週＿＿です。（星期二）'
        },
        options: [
            { text: 'かようび', isCorrect: true, reason: '正確！火曜日新書上架。' },
            { text: 'ひようび', isCorrect: false, reason: '「火」讀「か」不是「ひ」。' },
            { text: 'げつようび', isCorrect: false, reason: '月曜日通常休館。' },
            { text: 'すいようび', isCorrect: false, reason: '這是水曜日（星期三）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '很多圖書館「火曜日」新書上架。',
            relatedRules: ['曜日的讀法', '図書館の新刊']
        },
        sourceItem: { value: 'Tue', kanji: '火曜日', reading: 'かようび' }
    },
    {
        id: 'weekday_extra_110',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: true,
        stem: '「土日」的讀法是？',
        stem_zh: '「土日」的讀法是？',
        options: [
            { text: 'どにち', isCorrect: true, reason: '正確！土日讀「どにち」。' },
            { text: 'つちひ', isCorrect: false, reason: '用音讀不是訓讀。' },
            { text: 'どじつ', isCorrect: false, reason: '「日」讀「にち」不是「じつ」。' },
            { text: 'どび', isCorrect: false, reason: '「日」在此讀「にち」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「土日」讀「どにち」，是土曜日和日曜日的簡稱。',
            trapExplanation: '「日」在這裡讀「にち」，與「曜日」的「び」不同。',
            relatedRules: ['週末的讀法', '日の讀み分け']
        },
        sourceItem: { value: 'Sat-Sun', kanji: '土日', reading: 'どにち' }
    },
    {
        id: 'weekday_extra_111',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿の夜はドラマの放送が多いです。',
        stem_zh: '星期四晚上有很多電視劇播出。',
        options: [
            { text: 'もくようび', isCorrect: true, reason: '正確！木曜日是熱門電視劇時段。' },
            { text: 'きようび', isCorrect: false, reason: '「木」讀「もく」不是「き」。' },
            { text: 'すいようび', isCorrect: false, reason: '水曜日也有但木曜日更多。' },
            { text: 'かようび', isCorrect: false, reason: '火曜日也有但木曜日更多。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「木曜日」晚上是日本電視劇的黃金時段之一。',
            relatedRules: ['曜日的讀法', 'テレビドラマ']
        },
        sourceItem: { value: 'Thu', kanji: '木曜日', reading: 'もくようび' }
    },
    {
        id: 'weekday_extra_112',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'dialogue',
        isTrap: false,
        stem: '健康檢查是哪天？',
        stem_zh: '健康檢查是哪天？',
        dialogue: {
            speakerA: '健康診断は何曜日ですか？',
            speakerB: '来週の＿＿の朝です。（星期五）'
        },
        options: [
            { text: 'きんようび', isCorrect: true, reason: '正確！金曜日早上做健診。' },
            { text: 'かねようび', isCorrect: false, reason: '「金」讀「きん」不是「かね」。' },
            { text: 'もくようび', isCorrect: false, reason: '這是木曜日（星期四）。' },
            { text: 'げつようび', isCorrect: false, reason: '這是月曜日（星期一）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「金曜日」健診後可以直接休息週末。',
            relatedRules: ['曜日的讀法', '健康診断']
        },
        sourceItem: { value: 'Fri', kanji: '金曜日', reading: 'きんようび' }
    },
    {
        id: 'weekday_extra_113',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'pronunciation',
        isTrap: false,
        stem: '「週後半」的讀法是？',
        stem_zh: '「週後半」的讀法是？',
        options: [
            { text: 'しゅうこうはん', isCorrect: true, reason: '正確！週後半讀「しゅうこうはん」。' },
            { text: 'しゅうあとはん', isCorrect: false, reason: '「後半」讀「こうはん」。' },
            { text: 'しゅこうはん', isCorrect: false, reason: '「週」要有長音「しゅう」。' },
            { text: 'しゅうごはん', isCorrect: false, reason: '「後半」讀「こうはん」不是「ごはん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「週後半」讀「しゅうこうはん」，指一週的後幾天。',
            relatedRules: ['週的讀法', '後半的讀法']
        },
        sourceItem: { value: 'Second half of week', kanji: '週後半', reading: 'しゅうこうはん' }
    },
    {
        id: 'weekday_extra_114',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '総復習：日本の一週間は＿＿〜日曜日です。',
        stem_zh: '總復習：日本的一週是星期一到星期日。',
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！工作週從月曜日開始。' },
            { text: 'がつようび', isCorrect: false, reason: '「月曜日」讀「げつ」不是「がつ」。' },
            { text: 'にちようび', isCorrect: false, reason: '這是日曜日，是終點不是起點。' },
            { text: 'どようび', isCorrect: false, reason: '土曜日是週末。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '工作週從「月曜日」到「金曜日」，週末是「土曜日」「日曜日」。',
            relatedRules: ['曜日的讀法', '一週の構成']
        },
        sourceItem: { value: 'Mon-Sun', kanji: '月曜日〜日曜日', reading: 'げつようび〜にちようび' }
    }
];
