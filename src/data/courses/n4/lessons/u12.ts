import type { LessonDefinition } from '../../../../types/course'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Unit 12: 時間與總複習 (Time & Comprehensive Review)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const u12Lessons: LessonDefinition[] = [
  // ━━━ L1: 時間表達 ━━━
  {
    id: 'n4_u12_l1',
    unitId: 'n4_u12',
    order: 1,
    titleJp: '時間表現',
    titleZh: '時間表達',
    objectives: [
      '學會各種時間相關詞彙（今度、昔、昼間等）',
      '掌握「ところ」表示動作的時間階段',
      '能用「ところだ」描述正要做、正在做、剛做完的狀態',
    ],

    vocabulary: [
      { word: '今度', reading: 'こんど', meaning: '這次', meaning_zh: '這次', exampleJp: '今度{こんど}の試験{しけん}は難{むずか}しいです。', exampleZh: '這次的考試很難。' },
      { word: 'この間', reading: 'このあいだ', meaning: '前幾天', meaning_zh: '前幾天', exampleJp: 'この間{あいだ}、映画{えいが}を見{み}ました。', exampleZh: '前幾天看了電影。' },
      { word: 'このごろ', reading: 'このごろ', meaning: '最近', meaning_zh: '最近', exampleJp: 'このごろ寒{さむ}くなりましたね。', exampleZh: '最近變冷了呢。' },
      { word: '今夜', reading: 'こんや', meaning: '今晚', meaning_zh: '今晚', exampleJp: '今夜{こんや}は星{ほし}がきれいです。', exampleZh: '今晚星星很漂亮。' },
      { word: '昼間', reading: 'ひるま', meaning: '白天', meaning_zh: '白天', exampleJp: '昼間{ひるま}は暑{あつ}いです。', exampleZh: '白天很熱。' },
      { word: '昼休み', reading: 'ひるやすみ', meaning: '午休', meaning_zh: '午休', exampleJp: '昼休{ひるやす}みに散歩{さんぽ}します。', exampleZh: '午休時去散步。' },
      { word: '昔', reading: 'むかし', meaning: '很久以前', meaning_zh: '很久以前', exampleJp: '昔{むかし}、ここは海{うみ}でした。', exampleZh: '很久以前，這裡是海。' },
      { word: '昨夜', reading: 'さくや', meaning: '昨晚', meaning_zh: '昨晚', exampleJp: '昨夜{さくや}は雨{あめ}が降{ふ}りました。', exampleZh: '昨晚下了雨。' },
    ],

    grammarIds: ['n4_tokoro', 'n4_tokoro_da'],

    grammarSummaries: [
      {
        grammarId: 'n4_tokoro',
        pattern: '〜ところ',
        meaning: '正要〜；正在〜；剛〜',
        quickExample: '今{いま}、出{で}かけるところです。',
        quickExampleZh: '現在正要出門。',
      },
      {
        grammarId: 'n4_tokoro_da',
        pattern: '〜ところだ',
        meaning: '正要做 / 正在做 / 剛做完',
        quickExample: 'ちょうどご飯{はん}を食{た}べたところです。',
        quickExampleZh: '剛好剛吃完飯。',
      },
    ],

    dialogue: [
      { speaker: '佐藤{さとう}', japanese: 'もしもし、今{いま}ちょうど出{で}かけるところです。', chinese: '喂，我現在正要出門。' },
      { speaker: '鈴木{すずき}', japanese: 'この間{あいだ}、一緒{いっしょ}にご飯{はん}を食{た}べましたね。今度{こんど}はいつ会{あ}えますか。', chinese: '前幾天一起吃了飯呢。這次什麼時候能見面？' },
      { speaker: '佐藤{さとう}', japanese: 'このごろ忙{いそが}しくて、昼休{ひるやす}みもゆっくりできないんです。', chinese: '最近太忙了，連午休都沒辦法好好休息。' },
      { speaker: '鈴木{すずき}', japanese: '昼間{ひるま}は暑{あつ}いですから、今夜{こんや}はどうですか。涼{すず}しくなったところで散歩{さんぽ}しましょう。', chinese: '白天很熱，今晚如何？涼快下來之後去散步吧。' },
      { speaker: '佐藤{さとう}', japanese: 'いいですね。昨夜{さくや}は仕事{しごと}が遅{おそ}くまでかかったところだったので疲{つか}れました。', chinese: '好啊。昨晚工作做到很晚才結束，所以很累。' },
      { speaker: '鈴木{すずき}', japanese: '昔{むかし}はよく夜{よる}に遊{あそ}びに行{い}きましたね。今度{こんど}、昔{むかし}の友達{ともだち}も誘{さそ}いましょうか。', chinese: '以前常常晚上出去玩呢。這次也邀以前的朋友一起吧？' },
    ],

    quizQuestions: [],
  },

  // ━━━ L2: 日常與安全 ━━━
  {
    id: 'n4_u12_l2',
    unitId: 'n4_u12',
    order: 2,
    titleJp: '日常と安全',
    titleZh: '日常與安全',
    objectives: [
      '學會與日常生活和安全相關的詞彙',
      '掌握「ところに」表示正當某時候',
      '掌握「たところ」表示做了之後的結果',
      '理解「ずっと」的用法',
    ],

    vocabulary: [
      { word: '再来月', reading: 'さらいげつ', meaning: '下下個月', meaning_zh: '下下個月', exampleJp: '再来月{さらいげつ}に旅行{りょこう}します。', exampleZh: '下下個月去旅行。' },
      { word: '再来週', reading: 'さらいしゅう', meaning: '下下週', meaning_zh: '下下週', exampleJp: '再来週{さらいしゅう}は休{やす}みです。', exampleZh: '下下週放假。' },
      { word: '帰り', reading: 'かえり', meaning: '歸途', meaning_zh: '歸途', exampleJp: '帰{かえ}りにスーパーに寄{よ}りました。', exampleZh: '回家途中順路去了超市。' },
      { word: '終わり', reading: 'おわり', meaning: '結束', meaning_zh: '結束', exampleJp: '映画{えいが}の終{お}わりは感動的{かんどうてき}でした。', exampleZh: '電影的結局很感人。' },
      { word: '留守', reading: 'るす', meaning: '不在家', meaning_zh: '不在家', exampleJp: '留守{るす}の間{あいだ}に荷物{にもつ}が届{とど}きました。', exampleZh: '不在家的時候包裹到了。' },
      { word: '泥棒', reading: 'どろぼう', meaning: '小偷', meaning_zh: '小偷', exampleJp: '泥棒{どろぼう}に入{はい}られました。', exampleZh: '被小偷闖入了。' },
      { word: 'すり', reading: 'すり', meaning: '扒手', meaning_zh: '扒手', exampleJp: '電車{でんしゃ}ですりに注意{ちゅうい}してください。', exampleZh: '在電車上請注意扒手。' },
      { word: '火事', reading: 'かじ', meaning: '火災', meaning_zh: '火災', exampleJp: '火事{かじ}が起{お}きました。', exampleZh: '發生了火災。' },
    ],

    grammarIds: ['n4_tokoro_ni', 'n4_ta_tokoro', 'n4_zutto'],

    grammarSummaries: [
      {
        grammarId: 'n4_tokoro_ni',
        pattern: '〜ところに',
        meaning: '正當〜的時候',
        quickExample: '出{で}かけようとしたところに、友達{ともだち}が来{き}ました。',
        quickExampleZh: '正要出門的時候，朋友來了。',
      },
      {
        grammarId: 'n4_ta_tokoro',
        pattern: '〜たところ',
        meaning: '〜了之後結果〜',
        quickExample: '調{しら}べたところ、問題{もんだい}はありませんでした。',
        quickExampleZh: '調查之後，發現沒有問題。',
      },
      {
        grammarId: 'n4_zutto',
        pattern: 'ずっと',
        meaning: '一直；〜得多',
        quickExample: 'ずっとあなたを待{ま}っていました。',
        quickExampleZh: '一直在等你。',
      },
    ],

    dialogue: [
      { speaker: '田中{たなか}', japanese: '再来月{さらいげつ}に旅行{りょこう}の予定{よてい}があるんですが、再来週{さらいしゅう}までに準備{じゅんび}しないと。', chinese: '下下個月有旅行的計畫，必須在下下週之前準備好。' },
      { speaker: '山本{やまもと}', japanese: '旅行{りょこう}中{ちゅう}は留守{るす}になりますよね。泥棒{どろぼう}に注意{ちゅうい}した方{ほう}がいいですよ。', chinese: '旅行期間家裡就沒人了。最好注意小偷。' },
      { speaker: '田中{たなか}', japanese: '調{しら}べたところ、留守{るす}の家{いえ}を狙{ねら}う泥棒{どろぼう}がずっと増{ふ}えているそうです。', chinese: '調查之後發現，趁人不在家的小偷一直在增加。' },
      { speaker: '山本{やまもと}', japanese: '帰{かえ}りに防犯{ぼうはん}カメラを買{か}いましょう。この間{あいだ}、近所{きんじょ}で火事{かじ}もありましたし。', chinese: '回家途中買個監視攝影機吧。前幾天附近還發生了火災。' },
      { speaker: '田中{たなか}', japanese: 'そうですね。出{で}かけようとしたところに、すりに遭{あ}いそうになった経験{けいけん}もあります。映画{えいが}の終{お}わりまで安心{あんしん}できませんでした。', chinese: '是啊。我也有正要出門的時候差點被扒手扒的經驗。一直到電影結束都無法安心。' },
    ],

    quizQuestions: [],
  },

  // ━━━ L3: 事件與行動 ━━━
  {
    id: 'n4_u12_l3',
    unitId: 'n4_u12',
    order: 3,
    titleJp: '事件と行動',
    titleZh: '事件與行動',
    objectives: [
      '學會緊急事件和行動相關詞彙',
      '掌握「それに」「そして」表示追加和順序',
      '掌握「または」表示選擇',
    ],

    vocabulary: [
      { word: '事故', reading: 'じこ', meaning: '事故', meaning_zh: '事故', exampleJp: '交通{こうつう}事故{じこ}がありました。', exampleZh: '發生了交通事故。' },
      { word: '地震', reading: 'じしん', meaning: '地震', meaning_zh: '地震', exampleJp: '昨夜{さくや}、大{おお}きい地震{じしん}がありました。', exampleZh: '昨晚發生了大地震。' },
      { word: '引き出し', reading: 'ひきだし', meaning: '抽屜', meaning_zh: '抽屜', exampleJp: '引{ひ}き出{だ}しの中{なか}を整理{せいり}しました。', exampleZh: '整理了抽屜裡面。' },
      { word: '引き出す', reading: 'ひきだす', meaning: '提取', meaning_zh: '提取', exampleJp: '銀行{ぎんこう}でお金{かね}を引{ひ}き出{だ}しました。', exampleZh: '在銀行提了錢。' },
      { word: '逃げる', reading: 'にげる', meaning: '逃跑', meaning_zh: '逃跑', exampleJp: '猫{ねこ}が逃{に}げてしまいました。', exampleZh: '貓逃跑了。' },
      { word: '役に立つ', reading: 'やくにたつ', meaning: '有用', meaning_zh: '有用', exampleJp: 'この辞書{じしょ}はとても役{やく}に立{た}ちます。', exampleZh: '這本辭典非常有用。' },
      { word: '予定', reading: 'よてい', meaning: '預定', meaning_zh: '預定', exampleJp: '来週{らいしゅう}の予定{よてい}を教{おし}えてください。', exampleZh: '請告訴我下週的預定行程。' },
      { word: '予約', reading: 'よやく', meaning: '預約', meaning_zh: '預約', exampleJp: 'レストランを予約{よやく}しました。', exampleZh: '預約了餐廳。' },
    ],

    grammarIds: ['n4_sore_ni', 'n4_soshite', 'n4_matawa'],

    grammarSummaries: [
      {
        grammarId: 'n4_sore_ni',
        pattern: 'それに',
        meaning: '而且；再說',
        quickExample: 'この店{みせ}は安{やす}いです。それに、おいしいです。',
        quickExampleZh: '這家店很便宜，而且很好吃。',
      },
      {
        grammarId: 'n4_soshite',
        pattern: 'そして',
        meaning: '然後；於是',
        quickExample: '朝{あさ}ごはんを食{た}べました。そして、学校{がっこう}に行{い}きました。',
        quickExampleZh: '吃了早餐，然後去了學校。',
      },
      {
        grammarId: 'n4_matawa',
        pattern: 'または',
        meaning: '或者；或是',
        quickExample: 'メールまたは電話{でんわ}でご連絡{れんらく}ください。',
        quickExampleZh: '請透過電子郵件或電話聯絡。',
      },
    ],

    dialogue: [
      { speaker: '鈴木{すずき}', japanese: '昨夜{さくや}、大{おお}きい地震{じしん}がありましたね。予定{よてい}を変{か}えないといけません。', chinese: '昨晚發生了大地震呢。必須改變計畫。' },
      { speaker: '佐藤{さとう}', japanese: 'そうですね。それに、駅{えき}の近{ちか}くで交通{こうつう}事故{じこ}もあったそうです。', chinese: '是啊。而且聽說車站附近也發生了交通事故。' },
      { speaker: '鈴木{すずき}', japanese: '大変{たいへん}でしたね。地震{じしん}の時{とき}はすぐに逃{に}げるべきです。そして、安全{あんぜん}な場所{ばしょ}に避難{ひなん}してください。', chinese: '太嚴重了。地震的時候應該馬上逃跑，然後到安全的地方避難。' },
      { speaker: '佐藤{さとう}', japanese: '引{ひ}き出{だ}しに懐中{かいちゅう}電灯{でんとう}を入{い}れておきました。役{やく}に立{た}ちますよ。', chinese: '我在抽屜裡放了手電筒，很有用的。' },
      { speaker: '鈴木{すずき}', japanese: '今日{きょう}、銀行{ぎんこう}でお金{かね}を引{ひ}き出{だ}す予定{よてい}でしたが、延期{えんき}します。レストランの予約{よやく}もメールまたは電話{でんわ}で変更{へんこう}しないと。', chinese: '今天原本預定要去銀行提錢，但先延期。餐廳的預約也得透過電子郵件或電話來變更。' },
      { speaker: '佐藤{さとう}', japanese: 'そうですね。まずは安全{あんぜん}を確認{かくにん}しましょう。', chinese: '說得對。先確認安全吧。' },
    ],

    quizQuestions: [],
  },

  // ━━━ L4: 日常用語與世界 ━━━
  {
    id: 'n4_u12_l4',
    unitId: 'n4_u12',
    order: 4,
    titleJp: '日常用語と世界',
    titleZh: '日常用語與世界',
    objectives: [
      '學會「用」「用意」「用事」等相關詞彙',
      '認識世界地名（アフリカ、アジア、アメリカ）',
      '掌握「でも」「ほかに」等列舉與補充的表達',
    ],

    vocabulary: [
      { word: '用', reading: 'よう', meaning: '用', meaning_zh: '用', exampleJp: 'この道具{どうぐ}は何{なに}の用{よう}ですか。', exampleZh: '這個工具是做什麼用的？' },
      { word: '用意', reading: 'ようい', meaning: '準備', meaning_zh: '準備', exampleJp: '資料{しりょう}を用意{ようい}してください。', exampleZh: '請準備資料。' },
      { word: '用事', reading: 'ようじ', meaning: '事情', meaning_zh: '事情', exampleJp: '今日{きょう}は用事{ようじ}があります。', exampleZh: '今天有事情。' },
      { word: 'タイプ', reading: 'たいぷ', meaning: '類型', meaning_zh: '類型', exampleJp: 'どんなタイプが好{す}きですか。', exampleZh: '喜歡什麼類型？' },
      { word: '線', reading: 'せん', meaning: '線', meaning_zh: '線', exampleJp: 'この線{せん}の上{うえ}に名前{なまえ}を書{か}いてください。', exampleZh: '請在這條線上寫名字。' },
      { word: 'アフリカ', reading: 'あふりか', meaning: '非洲', meaning_zh: '非洲', exampleJp: 'アフリカに行{い}ったことがありますか。', exampleZh: '去過非洲嗎？' },
      { word: 'アジア', reading: 'あじあ', meaning: '亞洲', meaning_zh: '亞洲', exampleJp: 'アジアの文化{ぶんか}に興味{きょうみ}があります。', exampleZh: '對亞洲文化有興趣。' },
      { word: 'アメリカ', reading: 'あめりか', meaning: '美國', meaning_zh: '美國', exampleJp: 'アメリカに留学{りゅうがく}したいです。', exampleZh: '想去美國留學。' },
    ],

    grammarIds: ['n4_demo', 'n4_demo_particle', 'n4_hoka_ni'],

    grammarSummaries: [
      {
        grammarId: 'n4_demo',
        pattern: 'でも',
        meaning: '〜之類的；或者',
        quickExample: 'コーヒーでも飲{の}みませんか。',
        quickExampleZh: '要不要喝杯咖啡之類的？',
      },
      {
        grammarId: 'n4_demo_particle',
        pattern: 'でも（助詞）',
        meaning: '無論〜',
        quickExample: '誰{だれ}でも参加{さんか}できます。',
        quickExampleZh: '無論誰都可以參加。',
      },
      {
        grammarId: 'n4_hoka_ni',
        pattern: '〜ほかに',
        meaning: '除了〜之外（還有）',
        quickExample: '日本語{にほんご}のほかに、英語{えいご}も話{はな}せます。',
        quickExampleZh: '除了日語之外，也會說英語。',
      },
    ],

    dialogue: [
      { speaker: '山田{やまだ}', japanese: '今日{きょう}は用事{ようじ}がないので、お茶{ちゃ}でも飲{の}みませんか。', chinese: '今天沒有事情，要不要喝杯茶之類的？' },
      { speaker: '田中{たなか}', japanese: 'いいですね。アジアのお茶{ちゃ}のほかに、アメリカのコーヒーもありますよ。', chinese: '好啊。除了亞洲的茶之外，也有美國的咖啡喔。' },
      { speaker: '山田{やまだ}', japanese: 'どんなタイプが好{す}きですか。誰{だれ}でも楽{たの}しめるものがいいですね。', chinese: '喜歡什麼類型？無論誰都能享受的最好呢。' },
      { speaker: '田中{たなか}', japanese: 'アフリカの豆{まめ}で淹{い}れたコーヒーはどうですか。資料{しりょう}を用意{ようい}して、味{あじ}の違{ちが}いを説明{せつめい}しますね。', chinese: '用非洲的豆子泡的咖啡如何？我準備好資料，來說明味道的差異。' },
      { speaker: '山田{やまだ}', japanese: 'すごい。この線{せん}の下{した}に産地{さんち}が書{か}いてありますね。何{なん}の用{よう}に使{つか}うんですか。', chinese: '好厲害。這條線下面寫了產地呢。是做什麼用的？' },
      { speaker: '田中{たなか}', japanese: 'コーヒーの品質{ひんしつ}を比{くら}べるための表{ひょう}です。いつでも使{つか}えるように用意{ようい}しておきました。', chinese: '是用來比較咖啡品質的表格。我事先準備好了隨時可以用。' },
    ],

    quizQuestions: [],
  },

  // ━━━ L5: 生活與設施 ━━━
  {
    id: 'n4_u12_l5',
    unitId: 'n4_u12',
    order: 5,
    titleJp: '生活と施設',
    titleZh: '生活與設施',
    objectives: [
      '學會生活設施相關詞彙（ガソリンスタンド、ガス等）',
      '掌握「以外」表示排除',
      '掌握「にとって」表示對某人而言',
    ],

    vocabulary: [
      { word: 'ガソリン', reading: 'がそりん', meaning: '汽油', meaning_zh: '汽油', exampleJp: 'ガソリンの値段{ねだん}が上{あ}がりました。', exampleZh: '汽油價格漲了。' },
      { word: 'ガソリンスタンド', reading: 'がそりんすたんど', meaning: '加油站', meaning_zh: '加油站', exampleJp: '近{ちか}くにガソリンスタンドはありますか。', exampleZh: '附近有加油站嗎？' },
      { word: 'ガス', reading: 'がす', meaning: '煤氣', meaning_zh: '煤氣', exampleJp: 'ガスを止{と}めてください。', exampleZh: '請關掉煤氣。' },
      { word: '相談', reading: 'そうだん', meaning: '商量', meaning_zh: '商量', exampleJp: '先生{せんせい}に相談{そうだん}しました。', exampleZh: '跟老師商量了。' },
      { word: '卒業', reading: 'そつぎょう', meaning: '畢業', meaning_zh: '畢業', exampleJp: '来年{らいねん}、大学{だいがく}を卒業{そつぎょう}します。', exampleZh: '明年大學畢業。' },
      { word: '生活', reading: 'せいかつ', meaning: '生活', meaning_zh: '生活', exampleJp: '日本{にほん}での生活{せいかつ}に慣{な}れました。', exampleZh: '已經習慣了在日本的生活。' },
      { word: '約束', reading: 'やくそく', meaning: '約定', meaning_zh: '約定', exampleJp: '約束{やくそく}を守{まも}ってください。', exampleZh: '請遵守約定。' },
      { word: '復習', reading: 'ふくしゅう', meaning: '複習', meaning_zh: '複習', exampleJp: '毎日{まいにち}復習{ふくしゅう}することが大切{たいせつ}です。', exampleZh: '每天複習是很重要的。' },
    ],

    grammarIds: ['n4_igai', 'n4_ni_totte'],

    grammarSummaries: [
      {
        grammarId: 'n4_igai',
        pattern: '〜以外{いがい}',
        meaning: '除了〜之外',
        quickExample: '月曜日{げつようび}以外{いがい}は毎日{まいにち}働{はたら}いています。',
        quickExampleZh: '除了星期一以外，每天都在工作。',
      },
      {
        grammarId: 'n4_ni_totte',
        pattern: '〜にとって',
        meaning: '對〜而言；對〜來說',
        quickExample: '私{わたし}にとって、家族{かぞく}が一番{いちばん}大切{たいせつ}です。',
        quickExampleZh: '對我來說，家人最重要。',
      },
    ],

    dialogue: [
      { speaker: '山本{やまもと}', japanese: '卒業{そつぎょう}したら、どんな生活{せいかつ}をしたいですか。', chinese: '畢業後想過什麼樣的生活？' },
      { speaker: '田中{たなか}', japanese: '車{くるま}を買{か}って、ガソリンスタンドで働{はたら}いている友達{ともだち}に相談{そうだん}したんです。ガソリン以外{いがい}にもガスの知識{ちしき}が必要{ひつよう}だと言{い}われました。', chinese: '我想買車，跟在加油站工作的朋友商量了。他說除了汽油之外還需要煤氣的知識。' },
      { speaker: '山本{やまもと}', japanese: '私{わたし}にとって、約束{やくそく}を守{まも}ることが一番{いちばん}大切{たいせつ}です。復習{ふくしゅう}も毎日{まいにち}の約束{やくそく}ですからね。', chinese: '對我來說，遵守約定是最重要的。複習也是每天對自己的約定呢。' },
      { speaker: '田中{たなか}', japanese: '卒業{そつぎょう}以外{いがい}にも、生活{せいかつ}の中{なか}で色{いろ}々{いろ}な経験{けいけん}を積{つ}みたいです。', chinese: '除了畢業之外，也想在生活中累積各種經驗。' },
      { speaker: '山本{やまもと}', japanese: 'いい考{かんが}えですね。社会人{しゃかいじん}にとって、相談{そうだん}できる人{ひと}がいることは大切{たいせつ}ですよ。', chinese: '好想法呢。對社會人來說，有人可以商量是很重要的。' },
      { speaker: '田中{たなか}', japanese: 'はい、約束{やくそく}します。ガスの安全{あんぜん}も復習{ふくしゅう}しておきます。', chinese: '好的，我保證。煤氣的安全知識也會複習。' },
    ],

    quizQuestions: [],
  },

  // ━━━ L6: 學習與社交 ━━━
  {
    id: 'n4_u12_l6',
    unitId: 'n4_u12',
    order: 6,
    titleJp: '学習と社交',
    titleZh: '學習與社交',
    objectives: [
      '學會學習和社交相關詞彙',
      '掌握「について」表示關於某主題',
      '掌握「の中で」表示範圍内的比較',
    ],

    vocabulary: [
      { word: '予習', reading: 'よしゅう', meaning: '預習', meaning_zh: '預習', exampleJp: '授業{じゅぎょう}の前{まえ}に予習{よしゅう}します。', exampleZh: '上課前先預習。' },
      { word: '試験', reading: 'しけん', meaning: '考試', meaning_zh: '考試', exampleJp: '来週{らいしゅう}、試験{しけん}があります。', exampleZh: '下週有考試。' },
      { word: '挨拶', reading: 'あいさつ', meaning: '問候', meaning_zh: '問候', exampleJp: '朝{あさ}の挨拶{あいさつ}は大切{たいせつ}です。', exampleZh: '早上的問候很重要。' },
      { word: '連絡', reading: 'れんらく', meaning: '聯絡', meaning_zh: '聯絡', exampleJp: '後{あと}で連絡{れんらく}します。', exampleZh: '之後再聯絡。' },
      { word: '準備', reading: 'じゅんび', meaning: '準備', meaning_zh: '準備', exampleJp: '旅行{りょこう}の準備{じゅんび}をしています。', exampleZh: '正在準備旅行。' },
      { word: '経験', reading: 'けいけん', meaning: '經驗', meaning_zh: '經驗', exampleJp: 'いい経験{けいけん}になりました。', exampleZh: '成為了很好的經驗。' },
      { word: '紹介', reading: 'しょうかい', meaning: '介紹', meaning_zh: '介紹', exampleJp: '友達{ともだち}を紹介{しょうかい}します。', exampleZh: '介紹朋友。' },
      { word: '説明', reading: 'せつめい', meaning: '說明', meaning_zh: '說明', exampleJp: 'もう一度{いちど}説明{せつめい}してください。', exampleZh: '請再說明一次。' },
    ],

    grammarIds: ['n4_ni_tsuite', 'n4_no_naka_de'],

    grammarSummaries: [
      {
        grammarId: 'n4_ni_tsuite',
        pattern: '〜について',
        meaning: '關於〜',
        quickExample: '日本{にほん}の文化{ぶんか}について勉強{べんきょう}しています。',
        quickExampleZh: '正在學習關於日本文化。',
      },
      {
        grammarId: 'n4_no_naka_de',
        pattern: '〜の中{なか}で',
        meaning: '在〜之中',
        quickExample: '果物{くだもの}の中{なか}で、いちごが一番{いちばん}好{す}きです。',
        quickExampleZh: '在水果之中，最喜歡草莓。',
      },
    ],

    dialogue: [
      { speaker: '佐藤{さとう}', japanese: '試験{しけん}について先生{せんせい}に連絡{れんらく}しましたか。準備{じゅんび}はどうですか。', chinese: '關於考試有聯絡老師嗎？準備得如何？' },
      { speaker: '鈴木{すずき}', japanese: '予習{よしゅう}も復習{ふくしゅう}もしましたが、文法{ぶんぽう}の中{なか}で一番{いちばん}難{むずか}しいのは敬語{けいご}です。', chinese: '預習和複習都做了，但文法之中最難的是敬語。' },
      { speaker: '佐藤{さとう}', japanese: '挨拶{あいさつ}の表現{ひょうげん}も大事{だいじ}ですよ。日本{にほん}の生活{せいかつ}の経験{けいけん}について説明{せつめい}できるように準備{じゅんび}してください。', chinese: '問候的表達也很重要喔。請準備好能說明關於日本生活經驗的內容。' },
      { speaker: '鈴木{すずき}', japanese: 'はい。友達{ともだち}を紹介{しょうかい}する場面{ばめん}の練習{れんしゅう}もしたいです。', chinese: '好的。我也想練習介紹朋友的場景。' },
      { speaker: '佐藤{さとう}', japanese: 'いい経験{けいけん}になりますよ。試験{しけん}が終{お}わったら連絡{れんらく}してくださいね。みんなに結果{けっか}を紹介{しょうかい}しましょう。', chinese: '會是很好的經驗喔。考完試請聯絡我。我們來跟大家介紹結果吧。' },
      { speaker: '鈴木{すずき}', japanese: '分{わ}かりました。説明{せつめい}の練習{れんしゅう}もしっかり準備{じゅんび}しておきます。', chinese: '我知道了。說明的練習也會好好準備。' },
    ],

    quizQuestions: [],
  },
]
