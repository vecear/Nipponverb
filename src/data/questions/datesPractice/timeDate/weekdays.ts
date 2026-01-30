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
        stem: '「月曜日」的正確讀音是？',
        stem_zh: '「月曜日」的正確讀音是？',
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確{せいかく}！「月曜日{げつようび}」讀作{どくさ}「げつようび」。' },
            { text: 'がつようび', isCorrect: false, reason: '陷阱{かんけい}！「月{がつ}」是月份{げっぷん}の讀法{よみかた}，星期一{げつようび}讀む{よむ}「げつ」。' },
            { text: 'つきようび', isCorrect: false, reason: '「つき」是「月亮{つき}」の訓讀{くんどく}，星期{ようび}使用{しよう}音讀{おんどく}。' },
            { text: 'げつよび', isCorrect: false, reason: '缺少{けっしょう}「う」，正確{せいかく}は「げつようび」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「月曜日{げつようび}」讀作{どくさ}「げつようび」。「月{げつ}」在星期{ようび}中使用{しよう}音讀{おんどく}「げつ」，與月份{げっぷん}の「がつ」不同{ふどう}。',
            trapExplanation: '這是陷阱題{かんけいだい}。學習者{がくしゅうしゃ}容易{ようい}混淆{こんこう}月份{げっぷん}の「〜がつ」與星期{ようび}の「げつ〜」讀法{よみかた}。',
            relatedRules: ['「げつ」vs「がつ」の區別{くべつ}', '曜日{ようび}の讀法{よみかた}']
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
            { text: 'がつようび', isCorrect: false, reason: '「がつ」是月份{げっぷん}の讀法{よみかた}。' },
            { text: 'げつようび', isCorrect: true, reason: '正確{せいかく}！星期一{げつようび}讀作{どくさ}「げつようび」。' },
            { text: 'つきようび', isCorrect: false, reason: '星期{ようび}使用{しよう}音讀{おんどく}「げつ」不是訓讀{くんどく}「つき」。' },
            { text: 'もくようび', isCorrect: false, reason: '這是木曜日{もくようび}（星期四{もくようび}）の讀法{よみかた}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「月曜日{げつようび}」是一週{いっしゅう}の開始{かいし}，讀作{どくさ}「げつようび」。',
            relatedRules: ['曜日{ようび}の讀法{よみかた}', '一週{いっしゅう}の順序{じゅんじょ}']
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
            { text: 'がつようび', isCorrect: false, reason: '「がつ」是月份{げっぷん}の讀法{よみかた}。' },
            { text: 'げつようび', isCorrect: true, reason: '正確{せいかく}！會議{かいぎ}在星期一{げつようび}。' },
            { text: 'いちようび', isCorrect: false, reason: '星期{ようび}不使用{しよう}數字{すうじ}讀法{よみかた}。' },
            { text: 'げつよう', isCorrect: false, reason: '缺少{けっしょう}「び」，正確{せいかく}は「げつようび」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '回答{かいとう}「何曜日{なんようび}」時{とき}，星期一{げつようび}讀作{どくさ}「げつようび」。',
            relatedRules: ['曜日{ようび}の質問{しつもん}與回答{かいとう}', '「何曜日{なんようび}」の使用{しよう}']
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
        stem: '「火曜日」的正確讀音是？',
        stem_zh: '「火曜日」的正確讀音是？',
        options: [
            { text: 'かようび', isCorrect: true, reason: '正確{せいかく}！「火曜日{かようび}」讀作{どくさ}「かようび」。' },
            { text: 'ひようび', isCorrect: false, reason: '「ひ」是「火{ひ}」の訓讀{くんどく}，星期{ようび}使用{しよう}音讀{おんどく}「か」。' },
            { text: 'ほようび', isCorrect: false, reason: '「ほ」不是「火{か}」の讀法{よみかた}。' },
            { text: 'かよび', isCorrect: false, reason: '缺少{けっしょう}「う」，正確{せいかく}は「かようび」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「火曜日{かようび}」讀作{どくさ}「かようび」，「火{か}」使用{しよう}音讀{おんどく}。火星{かせい}（Mars）主宰{しゅさい}之日{ひ}。',
            relatedRules: ['曜日{ようび}の讀法{よみかた}', '七曜{しちよう}の起源{きげん}']
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
            { text: 'ひようび', isCorrect: false, reason: '「ひ」是訓讀{くんどく}，星期{ようび}使用{しよう}音讀{おんどく}。' },
            { text: 'かようび', isCorrect: true, reason: '正確{せいかく}！火曜日{かようび}常是垃圾{ごみ}收集{しゅうしゅう}日。' },
            { text: 'ひよう', isCorrect: false, reason: '不完整{ふかんせい}且讀法{よみかた}錯誤{ごさつ}。' },
            { text: 'かよう', isCorrect: false, reason: '缺少{けっしょう}「び」，正確{せいかく}は「かようび」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「火曜日{かようび}」在日本{にほん}常是可燃{かねん}垃圾{ごみ}收集{しゅうしゅう}日。',
            relatedRules: ['曜日{ようび}の讀法{よみかた}', '日本{にほん}の垃圾{ごみ}分類{ぶんるい}']
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
            { text: 'ひようび', isCorrect: false, reason: '「ひ」是訓讀{くんどく}，不用於{もちいず}星期{ようび}。' },
            { text: 'かようび', isCorrect: true, reason: '正確{せいかく}！下週{らいしゅう}星期二{かようび}有考試{しけん}。' },
            { text: 'にようび', isCorrect: false, reason: '這是「二」の讀法{よみかた}，火曜日{かようび}讀む{よむ}「か」。' },
            { text: 'げつようび', isCorrect: false, reason: '這是月曜日{げつようび}（星期一{げつようび}）。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「来週{らいしゅう}の火曜日{かようび}」表示{ひょうじ}下週{らいしゅう}星期二{かようび}。',
            relatedRules: ['曜日{ようび}の使用{しよう}', '時間{じかん}表達{ひょうたつ}']
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
        stem: '「水曜日」的正確讀音是？',
        stem_zh: '「水曜日」的正確讀音是？',
        options: [
            { text: 'すいようび', isCorrect: true, reason: '正確{せいかく}！「水曜日{すいようび}」讀作{どくさ}「すいようび」。' },
            { text: 'みずようび', isCorrect: false, reason: '「みず」是「水{みず}」の訓讀{くんどく}，星期{ようび}使用{しよう}音讀{おんどく}「すい」。' },
            { text: 'しようび', isCorrect: false, reason: '「し」不是「水{すい}」の讀法{よみかた}。' },
            { text: 'すいよび', isCorrect: false, reason: '缺少{けっしょう}「う」，正確{せいかく}は「すいようび」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「水曜日{すいようび}」讀作{どくさ}「すいようび」，「水{すい}」使用{しよう}音讀{おんどく}。水星{すいせい}（Mercury）主宰{しゅさい}之日{ひ}。',
            relatedRules: ['曜日{ようび}の讀法{よみかた}', '音讀{おんどく}vs訓讀{くんどく}']
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
            { text: 'みずようび', isCorrect: false, reason: '「みず」是訓讀{くんどく}，星期{ようび}使用{しよう}音讀{おんどく}。' },
            { text: 'すいようび', isCorrect: true, reason: '正確{せいかく}！水曜日{すいようび}是一週{いっしゅう}の中間{ちゅうかん}。' },
            { text: 'すいよう', isCorrect: false, reason: '缺少{けっしょう}「び」。' },
            { text: 'さんようび', isCorrect: false, reason: '星期{ようび}不使用{しよう}數字{すうじ}「三{さん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「水曜日{すいようび}」位於{いち}一週{いっしゅう}の中間{ちゅうかん}，讀作{どくさ}「すいようび」。',
            relatedRules: ['曜日{ようび}の讀法{よみかた}', '一週{いっしゅう}の順序{じゅんじょ}']
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
            { text: 'みずようび', isCorrect: false, reason: '星期{ようび}使用{しよう}音讀{おんどく}「すい」。' },
            { text: 'すいようび', isCorrect: true, reason: '正確{せいかく}！每週{まいしゅう}水曜日{すいようび}看電影{えいが}。' },
            { text: 'もくようび', isCorrect: false, reason: '這是木曜日{もくようび}（星期四{もくようび}）。' },
            { text: 'かようび', isCorrect: false, reason: '這是火曜日{かようび}（星期二{かようび}）。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「水曜日{すいようび}に〜」表示{ひょうじ}在星期三{すいようび}做某事{なにか}。',
            relatedRules: ['曜日{ようび}+に', '習慣{しゅうかん}の表達{ひょうたつ}']
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
        stem: '「木曜日」的正確讀音是？',
        stem_zh: '「木曜日」的正確讀音是？',
        options: [
            { text: 'もくようび', isCorrect: true, reason: '正確{せいかく}！「木曜日{もくようび}」讀作{どくさ}「もくようび」。' },
            { text: 'きようび', isCorrect: false, reason: '「き」是「木{き}」の訓讀{くんどく}，星期{ようび}使用{しよう}音讀{おんどく}「もく」。' },
            { text: 'ぼくようび', isCorrect: false, reason: '「ぼく」不是「木{もく}」の讀法{よみかた}，不濁音化{ふだくおんか}。' },
            { text: 'もくよび', isCorrect: false, reason: '缺少{けっしょう}「う」，正確{せいかく}は「もくようび」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「木曜日{もくようび}」讀作{どくさ}「もくようび」，「木{もく}」使用{しよう}音讀{おんどく}。木星{もくせい}（Jupiter）主宰{しゅさい}之日{ひ}。',
            relatedRules: ['曜日{ようび}の讀法{よみかた}', '七曜{しちよう}與行星{こうせい}']
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
            { text: 'きようび', isCorrect: false, reason: '「き」是訓讀{くんどく}，星期{ようび}使用{しよう}音讀{おんどく}「もく」。' },
            { text: 'もくようび', isCorrect: true, reason: '正確{せいかく}！木曜日{もくようび}有足球{サッカー}練習{れんしゅう}。' },
            { text: 'ぼくようび', isCorrect: false, reason: '「木{もく}」不濁音化{ふだくおんか}。' },
            { text: 'よんようび', isCorrect: false, reason: '星期{ようび}不使用{しよう}數字{すうじ}「四{よん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「木曜日{もくようび}」讀作{どくさ}「もくようび」，常用於{もちいる}表達{ひょうたつ}課外{かがい}活動{かつどう}。',
            relatedRules: ['曜日{ようび}の讀法{よみかた}', '日程{にってい}表達{ひょうたつ}']
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
            { text: 'きようび', isCorrect: false, reason: '「き」是訓讀{くんどく}，不用於{もちいず}星期{ようび}。' },
            { text: 'もくようび', isCorrect: true, reason: '正確{せいかく}！每週{まいしゅう}木曜日{もくようび}有日語課{にほんごクラス}。' },
            { text: 'すいようび', isCorrect: false, reason: '這是水曜日{すいようび}（星期三{すいようび}）。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日{きんようび}（星期五{きんようび}）。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「毎週{まいしゅう}木曜日{もくようび}」表示{ひょうじ}每週{まいしゅう}星期四{もくようび}。',
            relatedRules: ['曜日{ようび}の使用{しよう}', '「毎週{まいしゅう}」の用法{ようほう}']
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
        stem: '「金曜日」的正確讀音是？',
        stem_zh: '「金曜日」的正確讀音是？',
        options: [
            { text: 'きんようび', isCorrect: true, reason: '正確{せいかく}！「金曜日{きんようび}」讀作{どくさ}「きんようび」。' },
            { text: 'かねようび', isCorrect: false, reason: '「かね」是「金{かね}」（錢{かね}）の訓讀{くんどく}，星期{ようび}使用{しよう}音讀{おんどく}「きん」。' },
            { text: 'こんようび', isCorrect: false, reason: '「こん」是另一{もういち}讀法{よみかた}（今{こん}），金曜日{きんようび}讀む{よむ}「きん」。' },
            { text: 'きんよび', isCorrect: false, reason: '缺少{けっしょう}「う」，正確{せいかく}は「きんようび」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「金曜日{きんようび}」讀作{どくさ}「きんようび」，「金{きん}」使用{しよう}音讀{おんどく}。金星{きんせい}（Venus）主宰{しゅさい}之日{ひ}。',
            relatedRules: ['曜日{ようび}の讀法{よみかた}', '「金{きん}」vs「かね」の區別{くべつ}']
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
            { text: 'かねようび', isCorrect: false, reason: '「かね」是訓讀{くんどく}，星期{ようび}使用{しよう}音讀{おんどく}「きん」。' },
            { text: 'きんようび', isCorrect: true, reason: '正確{せいかく}！金曜日{きんようび}の夜{よる}是周末{しゅうまつ}前{まえ}の放鬆{リラックス}時間{じかん}。' },
            { text: 'ごようび', isCorrect: false, reason: '星期{ようび}不使用{しよう}數字{すうじ}「五{ご}」。' },
            { text: 'きんよう', isCorrect: false, reason: '缺少{けっしょう}「び」，正確{せいかく}は「きんようび」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「金曜日{きんようび}の夜{よる}」是週末{しゅうまつ}前{まえ}の社交{しゃこう}時間{じかん}，讀作{どくさ}「きんようび」。',
            relatedRules: ['曜日{ようび}の讀法{よみかた}', '日本{にほん}の社交{しゃこう}文化{ぶんか}']
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
            { text: 'かねようび', isCorrect: false, reason: '星期{ようび}使用{しよう}音讀{おんどく}「きん」不是「かね」。' },
            { text: 'きんようび', isCorrect: true, reason: '正確{せいかく}！從{から}金曜日{きんようび}開始{はじめ}旅行{りょこう}。' },
            { text: 'もくようび', isCorrect: false, reason: '這是木曜日{もくようび}（星期四{もくようび}）。' },
            { text: 'どようび', isCorrect: false, reason: '這是土曜日{どようび}（星期六{どようび}）。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「金曜日{きんようび}から」表示{ひょうじ}從{から}星期五{きんようび}開始{はじめ}。',
            relatedRules: ['曜日{ようび}+から', '旅行{りょこう}計畫{けいかく}の表達{ひょうたつ}']
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
        stem: '「土曜日」的正確讀音是？',
        stem_zh: '「土曜日」的正確讀音是？',
        options: [
            { text: 'どようび', isCorrect: true, reason: '正確{せいかく}！「土曜日{どようび}」讀作{どくさ}「どようび」。' },
            { text: 'とようび', isCorrect: false, reason: '陷阱{かんけい}！「土{ど}」是濁音{だくおん}「ど」，不是清音{せいおん}「と」。' },
            { text: 'つちようび', isCorrect: false, reason: '「つち」是「土{つち}」の訓讀{くんどく}，星期{ようび}使用{しよう}音讀{おんどく}「ど」。' },
            { text: 'どよび', isCorrect: false, reason: '缺少{けっしょう}「う」，正確{せいかく}は「どようび」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「土曜日{どようび}」讀作{どくさ}「どようび」，「土{ど}」使用{しよう}濁音{だくおん}音讀{おんどく}。土星{どせい}（Saturn）主宰{しゅさい}之日{ひ}。',
            trapExplanation: '這是陷阱題{かんけいだい}。「土{ど}」的音讀{おんどく}是濁音{だくおん}「ど」，容易{ようい}誤讀{ごどく}為清音{せいおん}「と」。',
            relatedRules: ['曜日{ようび}の讀法{よみかた}', '「ど」vs「と」の區別{くべつ}']
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
            { text: 'とようび', isCorrect: false, reason: '「土{ど}」是濁音{だくおん}「ど」不是「と」。' },
            { text: 'どようび', isCorrect: true, reason: '正確{せいかく}！土曜日{どようび}是購物{かいもの}日{び}。' },
            { text: 'つちようび', isCorrect: false, reason: '星期{ようび}使用{しよう}音讀{おんどく}「ど」不是訓讀{くんどく}。' },
            { text: 'ろくようび', isCorrect: false, reason: '星期{ようび}不使用{しよう}數字{すうじ}「六{ろく}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「土曜日{どようび}」是週末{しゅうまつ}，常用於{もちいる}家庭{かてい}活動{かつどう}，讀作{どくさ}「どようび」。',
            relatedRules: ['曜日{ようび}の讀法{よみかた}', '週末{しゅうまつ}の活動{かつどう}']
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
            { text: 'とようび', isCorrect: false, reason: '「土{ど}」は濁音{だくおん}「ど」。' },
            { text: 'どようび', isCorrect: true, reason: '正確{せいかく}！派對{パーティー}在土曜日{どようび}晚上{よる}。' },
            { text: 'にちようび', isCorrect: false, reason: '這是日曜日{にちようび}（星期日{にちようび}）。' },
            { text: 'きんようび', isCorrect: false, reason: '這是金曜日{きんようび}（星期五{きんようび}）。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「土曜日{どようび}の夜{よる}」是派對{パーティー}常見{じょうけん}の時間{じかん}。',
            relatedRules: ['曜日{ようび}の使用{しよう}', '社交{しゃこう}活動{かつどう}']
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
        stem: '「日曜日」的正確讀音是？',
        stem_zh: '「日曜日」的正確讀音是？',
        options: [
            { text: 'にちようび', isCorrect: true, reason: '正確{せいかく}！「日曜日{にちようび}」讀作{どくさ}「にちようび」。' },
            { text: 'ひようび', isCorrect: false, reason: '陷阱{かんけい}！「ひ」是「日{ひ}」の訓讀{くんどく}，星期{ようび}使用{しよう}音讀{おんどく}「にち」。' },
            { text: 'じつようび', isCorrect: false, reason: '「じつ」是另一{もういち}音讀{おんどく}（事実{じじつ}等），日曜日{にちようび}讀む{よむ}「にち」。' },
            { text: 'にちよび', isCorrect: false, reason: '缺少{けっしょう}「う」，正確{せいかく}は「にちようび」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「日曜日{にちようび}」讀作{どくさ}「にちようび」，「日{にち}」使用{しよう}音讀{おんどく}。太陽{たいよう}（Sun）主宰{しゅさい}之日{ひ}。',
            trapExplanation: '這是陷阱題{かんけいだい}。「日{にち}」的訓讀{くんどく}是「ひ」，但星期{ようび}使用{しよう}音讀{おんどく}「にち」。',
            relatedRules: ['曜日{ようび}の讀法{よみかた}', '「にち」vs「ひ」の區別{くべつ}']
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
            { text: 'ひようび', isCorrect: false, reason: '「ひ」是訓讀{くんどく}，星期{ようび}使用{しよう}音讀{おんどく}「にち」。' },
            { text: 'にちようび', isCorrect: true, reason: '正確{せいかく}！日曜日{にちようび}是休息日{やすみび}。' },
            { text: 'にちよう', isCorrect: false, reason: '缺少{けっしょう}「び」，正確{せいかく}は「にちようび」。' },
            { text: 'しちようび', isCorrect: false, reason: '「しち」是「七{しち}」，這裡{ここ}是「日{にち}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「日曜日{にちようび}」是週末{しゅうまつ}の休息日{やすみび}，讀作{どくさ}「にちようび」。',
            relatedRules: ['曜日{ようび}の讀法{よみかた}', '休日{きゅうじつ}の表達{ひょうたつ}']
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
            { text: 'ひようび', isCorrect: false, reason: '星期{ようび}使用{しよう}音讀{おんどく}「にち」不是「ひ」。' },
            { text: 'にちようび', isCorrect: true, reason: '正確{せいかく}！明天{あした}是日曜日{にちようび}。' },
            { text: 'どようび', isCorrect: false, reason: '這是土曜日{どようび}（星期六{どようび}）。' },
            { text: 'げつようび', isCorrect: false, reason: '這是月曜日{げつようび}（星期一{げつようび}）。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '回答{かいとう}「何曜日{なんようび}」時{とき}，星期日{にちようび}讀作{どくさ}「にちようび」。',
            relatedRules: ['曜日{ようび}の質問{しつもん}與回答{かいとう}', '「明日{あした}」の使用{しよう}']
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
            relatedRules: ['曜日の讀法', '日本の醫療制度']
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
            relatedRules: ['曜日の使用', '日本の銀行營業時間']
        },
        sourceItem: { value: 'Fri', kanji: '金曜日', reading: 'きんようび' }
    },
    {
        id: 'weekday_app_03',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: 'スーパーの特売日は毎週＿＿です。',
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
            relatedRules: ['曜日の讀法', '日本の購物習慣']
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
            relatedRules: ['曜日の讀法', '複數曜日の表達']
        },
        sourceItem: { value: 'Tue/Thu', kanji: '火曜日・木曜日', reading: 'かようび・もくようび' }
    },
    {
        id: 'weekday_app_05',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: true,
        stem: '「今週の月曜日」の「月」の讀法是？',
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
            relatedRules: ['げつ vs がつ', '曜日の讀法']
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
            relatedRules: ['曜日の讀法', '週末の活動']
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
            relatedRules: ['曜日の讀法', '公共設施の休館日']
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
            relatedRules: ['曜日の讀法', '預約の表達']
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
            relatedRules: ['曜日の讀法', '過去時態表達']
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
            relatedRules: ['曜日の讀法', '未來時態表達']
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
            relatedRules: ['曜日の讀法', '日本の祝日']
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
            relatedRules: ['曜日の讀法', '週末の概念']
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
            relatedRules: ['曜日の讀法', '週末の過ごし方']
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
            relatedRules: ['曜日の讀法', '平日vs週末']
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
            relatedRules: ['曜日の讀法', '習慣の表達']
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
            relatedRules: ['曜日の讀法', '運動習慣の表達']
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
            relatedRules: ['曜日の讀法', '課程表の表達']
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
            relatedRules: ['がつ vs げつ', '曜日と月份の區別']
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
            relatedRules: ['曜日の構成', '「日」の複數讀法']
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
            relatedRules: ['火の讀法', '音讀vs訓讀']
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
            relatedRules: ['土の讀法', '清音vs濁音']
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
        stem: '「何曜日」的正確讀法是？',
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
            relatedRules: ['何の讀法', '疑問詞の使用']
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
            relatedRules: ['曜日の回答', '日常會話']
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
            relatedRules: ['曜日の回答', '過去式の使用']
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
            relatedRules: ['七曜の起源', '曜日と天體']
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
            relatedRules: ['七曜の起源', '曜日と惑星']
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
            relatedRules: ['七曜の起源', '曜日と惑星']
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
            relatedRules: ['七曜の起源', '曜日と惑星']
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
            relatedRules: ['七曜の起源', '曜日と惑星']
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
            relatedRules: ['七曜の起源', '曜日と惑星']
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
            relatedRules: ['七曜の起源', '曜日と天體']
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
            relatedRules: ['曜日の讀法', '打工日程']
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
            relatedRules: ['曜日の讀法', '日本の教育']
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
            relatedRules: ['曜日の讀法', '垃圾分類']
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
            relatedRules: ['曜日の讀法', '日本の店舖']
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
            relatedRules: ['曜日の讀法', '工作週']
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
            relatedRules: ['曜日の讀法', '日本の文化施設']
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
            relatedRules: ['曜日の略稱', 'カレンダー表記']
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
            relatedRules: ['曜日の略稱', 'カレンダー表記']
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
            relatedRules: ['曜日の略稱', 'カレンダー表記']
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
            relatedRules: ['曜日の讀法', '時間表達']
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
            relatedRules: ['曜日の讀法', '過去時態']
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
            relatedRules: ['曜日の讀法', '定期會議']
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
            relatedRules: ['水の讀法', '音讀vs訓讀']
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
            relatedRules: ['金の讀法', '音讀vs訓讀']
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
            relatedRules: ['木の讀法', '音讀vs訓讀']
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
            relatedRules: ['曜日の讀法', '職場文化']
        },
        sourceItem: { value: 'Mon', kanji: '月曜日', reading: 'げつようび' }
    },
    {
        id: 'weekday_comp_02',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿の夜は「金曜ロードショー」を見ます。',
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
            relatedRules: ['曜日の讀法', '日本のテレビ']
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
            relatedRules: ['曜日の讀法', '休日の過ごし方']
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
            relatedRules: ['曜日の讀法', '日本の學校']
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
            relatedRules: ['曜日の讀法', '醫療日程']
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
            relatedRules: ['曜日の讀法', '習い事の日程']
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
            relatedRules: ['曜日の讀法', '娛樂活動']
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
            relatedRules: ['曜日の讀法', '子供の教育']
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
            relatedRules: ['曜日の讀法', '垃圾分類']
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
            relatedRules: ['曜日の讀法', '日本の給料制度']
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
            relatedRules: ['曜の讀法', '曜日の構成']
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
            relatedRules: ['七の讀法', '七曜の概念']
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
            relatedRules: ['日の讀法', '音讀の使用']
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
            relatedRules: ['曜日の讀法', '清音vs濁音']
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
            relatedRules: ['曜日の順序', '一週間の構成']
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
            relatedRules: ['曜日の順序', '前後關係']
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
            relatedRules: ['曜日の順序', '前後關係']
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
            relatedRules: ['曜日の計算', '明後日の使用']
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
            relatedRules: ['曜日の計算', '一昨日の使用']
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
            relatedRules: ['曜日の順序', '日本vs西方']
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
            relatedRules: ['曜日の讀法', '天気予報']
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
            relatedRules: ['曜日の讀法', '日本の祝日制度']
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
            relatedRules: ['曜日の讀法', '週の構成']
        },
        sourceItem: { value: 'Wed', kanji: '水曜日', reading: 'すいようび' }
    },
    {
        id: 'weekday_extra_05',
        category: 'timeDate',
        subcategory: 'weekdays',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿は「花金」と呼ばれています。',
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
            relatedRules: ['曜日の讀法', '日本の俗語']
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
            relatedRules: ['曜日の讀法', '社會現象']
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
            relatedRules: ['曜日の讀法', '日本の勞動政策']
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
            relatedRules: ['平日の讀法', '平日vs週末']
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
            relatedRules: ['週末の讀法', '週末vs平日']
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
            relatedRules: ['曜日の讀法', '祝日明け']
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
            relatedRules: ['曜日の讀法', '連休の表達']
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
            relatedRules: ['曜日の讀法', '會議の日程']
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
            relatedRules: ['曜日の讀法', '日本の勞動文化']
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
            relatedRules: ['曜日の讀法', '日本のテレビ']
        },
        sourceItem: { value: 'Thu', kanji: '木曜日', reading: 'もくようび' }
    }
];
