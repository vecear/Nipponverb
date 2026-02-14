import type { LessonDefinition } from '../../../../types/course'

export const u5Lessons: LessonDefinition[] = [
  // ━━━ L1: 許可と禁止 ━━━
  {
    id: 'n5_u5_l1',
    unitId: 'n5_u5',
    order: 1,
    titleJp: '許可と禁止',
    titleZh: '許可與禁止',
    objectives: [
      '學會表達許可和禁止',
      '掌握「てもいい」和「てはいけない」的用法',
    ],

    vocabulary: [
      { word: '公園', reading: 'こうえん', meaning: '公園', meaning_zh: '公園' },
      { word: '病院', reading: 'びょういん', meaning: '醫院', meaning_zh: '醫院' },
      { word: '図書館', reading: 'としょかん', meaning: '圖書館', meaning_zh: '圖書館' },
      { word: '映画館', reading: 'えいがかん', meaning: '電影院', meaning_zh: '電影院' },
      { word: '教室', reading: 'きょうしつ', meaning: '教室', meaning_zh: '教室' },
      { word: '食堂', reading: 'しょくどう', meaning: '食堂', meaning_zh: '食堂' },
      { word: 'たばこ', reading: 'たばこ', meaning: '香菸', meaning_zh: '香菸' },
      { word: '携帯', reading: 'けいたい', meaning: '手機', meaning_zh: '手機' },
      { word: '写真', reading: 'しゃしん', meaning: '照片', meaning_zh: '照片' },
      { word: '荷物', reading: 'にもつ', meaning: '行李', meaning_zh: '行李' },
      { word: '危ない', reading: 'あぶない', meaning: '危險', meaning_zh: '危險' },
      { word: '煩い', reading: 'うるさい', meaning: '吵鬧', meaning_zh: '吵鬧' },
      { word: '入る', reading: 'はいる', meaning: '進入', meaning_zh: '進入' },
      { word: '触る', reading: 'さわる', meaning: '觸摸', meaning_zh: '觸摸' },
      { word: '走る', reading: 'はしる', meaning: '跑', meaning_zh: '跑' },
      { word: '吸う', reading: 'すう', meaning: '抽菸', meaning_zh: '抽菸' },
      { word: '使う', reading: 'つかう', meaning: '使用', meaning_zh: '使用' },
      { word: '座る', reading: 'すわる', meaning: '坐', meaning_zh: '坐' },
      { word: '禁止', reading: 'きんし', meaning: '禁止', meaning_zh: '禁止' },
    ],

    grammarIds: ['n5_temo_ii_desu', 'n5_te_wa_ikenai', 'n5_cha_ikenai'],

    grammarSummaries: [
      {
        grammarId: 'n5_temo_ii_desu',
        pattern: '動詞て形 + もいいです',
        meaning: '可以做～',
        quickExample: 'ここで写真{しゃしん}を撮{と}ってもいいですか。',
        quickExampleZh: '可以在這裡拍照嗎？',
      },
      {
        grammarId: 'n5_te_wa_ikenai',
        pattern: '動詞て形 + はいけません',
        meaning: '不可以做～',
        quickExample: 'ここでたばこを吸{す}ってはいけません。',
        quickExampleZh: '不可以在這裡抽菸。',
      },
      {
        grammarId: 'n5_cha_ikenai',
        pattern: '動詞ちゃ / じゃ + いけない',
        meaning: '不可以做～（口語）',
        quickExample: '走{はし}っちゃいけないよ。',
        quickExampleZh: '不可以跑喔。',
      },
    ],

    dialogue: [
      { speaker: '佐藤{さとう}', japanese: 'この公園{こうえん}にはルールがたくさんありますね。', chinese: '這個公園有好多規則呢。' },
      { speaker: '田中{たなか}', japanese: 'そうですね。まず、ここでたばこを吸{す}ってはいけません。禁止{きんし}です。', chinese: '是啊。首先，這裡不可以抽菸。是禁止的。' },
      { speaker: '佐藤{さとう}', japanese: '写真{しゃしん}を撮{と}ってもいいですか。', chinese: '可以拍照嗎？' },
      { speaker: '田中{たなか}', japanese: 'はい、写真{しゃしん}は大丈夫{だいじょうぶ}ですよ。でも、走{はし}っちゃいけないので注意{ちゅうい}してくださいね。危{あぶ}ないですから。', chinese: '可以，拍照沒問題喔。但是不可以跑，請注意。因為很危險。' },
      { speaker: '佐藤{さとう}', japanese: '図書館{としょかん}では携帯{けいたい}を使{つか}ってもいいですか。', chinese: '在圖書館可以用手機嗎？' },
      { speaker: '田中{たなか}', japanese: '使{つか}っちゃいけませんよ。煩{うるさ}いですから。荷物{にもつ}はロッカーに入{い}れてもいいですよ。', chinese: '不可以用喔。因為很吵。行李可以放到置物櫃。' },
    ],

    quizQuestions: [],
  },

  // ━━━ L2: しなければなりません ━━━
  {
    id: 'n5_u5_l2',
    unitId: 'n5_u5',
    order: 2,
    titleJp: 'しなければなりません',
    titleZh: '必須做',
    objectives: [
      '學會義務表達',
      '掌握「ないといけない」「なくてはいけない」和口語縮約形',
    ],

    vocabulary: [
      { word: '日記', reading: 'にっき', meaning: '日記', meaning_zh: '日記' },
      { word: '声', reading: 'こえ', meaning: '聲音', meaning_zh: '聲音' },
      { word: '正しい', reading: 'ただしい', meaning: '正確', meaning_zh: '正確' },
      { word: '静か', reading: 'しずか', meaning: '安靜', meaning_zh: '安靜' },
      { word: 'ルール', reading: 'ルール', meaning: '規則', meaning_zh: '規則' },
      { word: 'マナー', reading: 'マナー', meaning: '禮儀', meaning_zh: '禮儀' },
      { word: '注意', reading: 'ちゅうい', meaning: '注意', meaning_zh: '注意' },
      { word: '宿題', reading: 'しゅくだい', meaning: '作業', meaning_zh: '作業' },
      { word: '仕事', reading: 'しごと', meaning: '工作', meaning_zh: '工作' },
      { word: '約束', reading: 'やくそく', meaning: '約定', meaning_zh: '約定' },
      { word: '準備', reading: 'じゅんび', meaning: '準備', meaning_zh: '準備' },
      { word: 'テスト', reading: 'テスト', meaning: '考試', meaning_zh: '考試' },
      { word: 'レポート', reading: 'レポート', meaning: '報告', meaning_zh: '報告' },
      { word: '締切', reading: 'しめきり', meaning: '截止日', meaning_zh: '截止日' },
      { word: '会議', reading: 'かいぎ', meaning: '會議', meaning_zh: '會議' },
      { word: '掃除', reading: 'そうじ', meaning: '打掃', meaning_zh: '打掃' },
      { word: '洗濯', reading: 'せんたく', meaning: '洗衣', meaning_zh: '洗衣' },
      { word: '出す', reading: 'だす', meaning: '提交', meaning_zh: '提交' },
      { word: '忙しい', reading: 'いそがしい', meaning: '忙碌', meaning_zh: '忙碌' },
    ],

    grammarIds: ['n5_naito_ikenai', 'n5_nakute_wa_ikenai', 'n5_nakucha'],

    grammarSummaries: [
      {
        grammarId: 'n5_naito_ikenai',
        pattern: '動詞ない形 → ないと + いけない',
        meaning: '必須做～',
        quickExample: '宿題{しゅくだい}を出{だ}さないといけない。',
        quickExampleZh: '必須交作業。',
      },
      {
        grammarId: 'n5_nakute_wa_ikenai',
        pattern: '動詞ない形 → なくては + いけない',
        meaning: '必須做～',
        quickExample: 'レポートを書{か}かなくてはいけません。',
        quickExampleZh: '必須寫報告。',
      },
      {
        grammarId: 'n5_nakucha',
        pattern: '動詞ない形 → なくちゃ',
        meaning: '必須做～（口語）',
        quickExample: '早{はや}く準備{じゅんび}しなくちゃ。',
        quickExampleZh: '得趕快準備。',
      },
    ],

    dialogue: [
      { speaker: '山田{やまだ}', japanese: 'うわー、今日{きょう}は忙{いそが}しい。テストの準備{じゅんび}をしないといけない。', chinese: '哇，今天好忙。必須準備考試。' },
      { speaker: '佐藤{さとう}', japanese: 'レポートの締切{しめきり}も明日{あした}でしょう？', chinese: '報告的截止日也是明天吧？' },
      { speaker: '山田{やまだ}', japanese: '宿題{しゅくだい}も出{だ}さなくてはいけないし、部屋{へや}の掃除{そうじ}も洗濯{せんたく}もしなくちゃ。', chinese: '作業也必須交，房間的打掃和洗衣也得做。' },
      { speaker: '佐藤{さとう}', japanese: '仕事{しごと}の会議{かいぎ}の準備{じゅんび}は？ルールは正{ただ}しく守{まも}らないといけませんよ。', chinese: '工作的會議準備呢？規則必須正確遵守喔。' },
      { speaker: '山田{やまだ}', japanese: 'そうだ、マナーにも注意{ちゅうい}しなくちゃ。静{しず}かな声{こえ}で話{はな}さないといけない。', chinese: '對了，禮儀也得注意。必須小聲說話。' },
      { speaker: '佐藤{さとう}', japanese: '約束{やくそく}は守{まも}らなくてはいけませんからね。日記{にっき}を書{か}いて整理{せいり}したほうがいいですよ。', chinese: '約定必須遵守嘛。寫日記整理一下比較好喔。' },
    ],

    quizQuestions: [],
  },

  // ━━━ L3: やるべきこと ━━━
  {
    id: 'n5_u5_l3',
    unitId: 'n5_u5',
    order: 3,
    titleJp: 'やるべきこと',
    titleZh: '該做的事',
    objectives: [
      '學會正式的義務表達「なくてはならない」',
      '開始學習因果關係「から」「ので」',
    ],

    vocabulary: [
      { word: '電話', reading: 'でんわ', meaning: '電話', meaning_zh: '電話' },
      { word: 'メール', reading: 'メール', meaning: '電郵', meaning_zh: '電郵' },
      { word: '返事', reading: 'へんじ', meaning: '回覆', meaning_zh: '回覆' },
      { word: '連絡', reading: 'れんらく', meaning: '聯絡', meaning_zh: '聯絡' },
      { word: '予約', reading: 'よやく', meaning: '預約', meaning_zh: '預約' },
      { word: '届ける', reading: 'とどける', meaning: '送達', meaning_zh: '送達' },
      { word: '直す', reading: 'なおす', meaning: '修理', meaning_zh: '修理' },
      { word: '調べる', reading: 'しらべる', meaning: '調查', meaning_zh: '調查' },
      { word: '片付ける', reading: 'かたづける', meaning: '收拾', meaning_zh: '收拾' },
      { word: '払う', reading: 'はらう', meaning: '付款', meaning_zh: '付款' },
      { word: '終わる', reading: 'おわる', meaning: '結束', meaning_zh: '結束' },
      { word: '間に合う', reading: 'まにあう', meaning: '來得及', meaning_zh: '來得及' },
      { word: '遅れる', reading: 'おくれる', meaning: '遲到', meaning_zh: '遲到' },
      { word: '必要', reading: 'ひつよう', meaning: '必要', meaning_zh: '必要' },
      { word: '理由', reading: 'りゆう', meaning: '理由', meaning_zh: '理由' },
      { word: '事故', reading: 'じこ', meaning: '事故', meaning_zh: '事故' },
      { word: '遅い', reading: 'おそい', meaning: '慢', meaning_zh: '慢' },
      { word: '早い', reading: 'はやい', meaning: '早', meaning_zh: '早' },
      { word: '元気', reading: 'げんき', meaning: '元氣', meaning_zh: '元氣' },
    ],

    grammarIds: ['n5_nakute_wa_naranai', 'n5_kara', 'n5_node'],

    grammarSummaries: [
      {
        grammarId: 'n5_nakute_wa_naranai',
        pattern: '動詞ない形 → なくては + ならない',
        meaning: '必須做～（正式）',
        quickExample: '会議{かいぎ}に出{で}なくてはなりません。',
        quickExampleZh: '必須出席會議。',
      },
      {
        grammarId: 'n5_kara',
        pattern: '普通形 / 丁寧形 + から',
        meaning: '因為～',
        quickExample: '頭{あたま}が痛{いた}いから、薬{くすり}を飲{の}みます。',
        quickExampleZh: '因為頭痛，所以吃藥。',
      },
      {
        grammarId: 'n5_node',
        pattern: '普通形（な形容詞 / 名詞 + な）+ ので',
        meaning: '因為～（較委婉）',
        quickExample: '風邪{かぜ}なので、今日{きょう}は休{やす}みます。',
        quickExampleZh: '因為感冒了，今天請假。',
      },
    ],

    dialogue: [
      { speaker: '山田{やまだ}', japanese: '電話{でんわ}で予約{よやく}をしなくてはなりません。遅{おく}れたくないから。', chinese: '必須打電話預約。因為不想遲到。' },
      { speaker: '佐藤{さとう}', japanese: '間{ま}に合{あ}うの？メールの返事{へんじ}もしなくてはなりませんよ。', chinese: '來得及嗎？電郵的回覆也必須做喔。' },
      { speaker: '山田{やまだ}', japanese: '連絡{れんらく}が遅{おそ}いので、早{はや}く片付{かたづ}けなくてはなりません。', chinese: '因為聯絡太慢了，必須趕快處理。' },
      { speaker: '佐藤{さとう}', japanese: '壊{こわ}れたパソコンを直{なお}す必要{ひつよう}もありますか。', chinese: '也需要修壞掉的電腦嗎？' },
      { speaker: '山田{やまだ}', japanese: 'はい。それに資料{しりょう}を調{しら}べないといけないから、大変{たいへん}です。事故{じこ}で届{とど}けるのも遅{おく}れました。', chinese: '是的。而且因為必須調查資料，很辛苦。因為事故，送達也遲了。' },
      { speaker: '佐藤{さとう}', japanese: '理由{りゆう}があるなら仕方{しかた}ないですね。元気{げんき}を出{だ}して、終{お}わるまで頑張{がんば}りましょう。家賃{やちん}も払{はら}わなくてはなりませんからね。', chinese: '有理由的話也沒辦法呢。打起精神，努力做到結束吧。房租也必須付嘛。' },
    ],

    quizQuestions: [],
  },

  // ━━━ L4: なぜですか ━━━
  {
    id: 'n5_u5_l4',
    unitId: 'n5_u5',
    order: 4,
    titleJp: 'なぜですか',
    titleZh: '為什麼',
    objectives: [
      '學會用「んです」說明原因或背景',
      '掌握「でも」「けど」的轉折表達',
    ],

    vocabulary: [
      { word: '病気', reading: 'びょうき', meaning: '生病', meaning_zh: '生病' },
      { word: '風邪', reading: 'かぜ', meaning: '感冒', meaning_zh: '感冒' },
      { word: '熱', reading: 'ねつ', meaning: '發燒', meaning_zh: '發燒' },
      { word: '咳', reading: 'せき', meaning: '咳嗽', meaning_zh: '咳嗽' },
      { word: '頭', reading: 'あたま', meaning: '頭', meaning_zh: '頭' },
      { word: '痛い', reading: 'いたい', meaning: '痛', meaning_zh: '痛' },
      { word: 'お腹', reading: 'おなか', meaning: '肚子', meaning_zh: '肚子' },
      { word: '疲れる', reading: 'つかれる', meaning: '累', meaning_zh: '累' },
      { word: '心配', reading: 'しんぱい', meaning: '擔心', meaning_zh: '擔心' },
      { word: '残念', reading: 'ざんねん', meaning: '遺憾', meaning_zh: '遺憾' },
      { word: '困る', reading: 'こまる', meaning: '困擾', meaning_zh: '困擾' },
      { word: '大変', reading: 'たいへん', meaning: '辛苦', meaning_zh: '辛苦' },
      { word: '暇', reading: 'ひま', meaning: '閒暇', meaning_zh: '閒暇' },
      { word: '都合', reading: 'つごう', meaning: '方便', meaning_zh: '方便' },
      { word: '用事', reading: 'ようじ', meaning: '事情', meaning_zh: '事情' },
      { word: '休む', reading: 'やすむ', meaning: '休息', meaning_zh: '休息' },
      { word: '嫌', reading: 'いや', meaning: '討厭', meaning_zh: '討厭' },
      { word: 'すぐに', reading: 'すぐに', meaning: '立刻', meaning_zh: '立刻' },
      { word: '多分', reading: 'たぶん', meaning: '大概', meaning_zh: '大概' },
    ],

    grammarIds: ['n5_ndesu', 'n5_demo', 'n5_kedo'],

    grammarSummaries: [
      {
        grammarId: 'n5_ndesu',
        pattern: '普通形 + んです / のです',
        meaning: '（說明原因・背景）',
        quickExample: '熱{ねつ}があるんです。',
        quickExampleZh: '（其實）是發燒了。',
      },
      {
        grammarId: 'n5_demo',
        pattern: '文A。でも、文B。',
        meaning: '但是',
        quickExample: '日本語{にほんご}は難{むずか}しいです。でも、楽{たの}しいです。',
        quickExampleZh: '日語很難。但是很快樂。',
      },
      {
        grammarId: 'n5_kedo',
        pattern: '文A + けど、文B',
        meaning: '雖然～但是（口語）',
        quickExample: '怖{こわ}いけど、見{み}たいです。',
        quickExampleZh: '雖然可怕，但想看。',
      },
    ],

    dialogue: [
      { speaker: '山田{やまだ}', japanese: 'すみません、今日{きょう}は休{やす}みたいんですが…。熱{ねつ}があるんです。', chinese: '不好意思，今天想請假...。是發燒了。' },
      { speaker: '佐藤{さとう}', japanese: '大変{たいへん}ですね。咳{せき}も出{で}ますか。', chinese: '好辛苦呢。也在咳嗽嗎？' },
      { speaker: '山田{やまだ}', japanese: 'はい、頭{あたま}もお腹{なか}も痛{いた}いんです。多分{たぶん}風邪{かぜ}だと思{おも}います。でも、用事{ようじ}もあるので困{こま}っています。', chinese: '是的，頭和肚子都痛。大概是感冒吧。但是也有事情要辦，很困擾。' },
      { speaker: '佐藤{さとう}', japanese: '心配{しんぱい}ですね。都合{つごう}が悪{わる}いけど、すぐに病院{びょういん}に行{い}ったほうがいいですよ。', chinese: '真令人擔心。雖然時間不方便，但最好馬上去醫院喔。' },
      { speaker: '山田{やまだ}', japanese: '残念{ざんねん}ですが、暇{ひま}がないんです。疲{つか}れているけど、頑張{がんば}ります。', chinese: '很遺憾，沒有空閒。雖然很累，但會努力。' },
      { speaker: '佐藤{さとう}', japanese: '病気{びょうき}は嫌{いや}ですよね。でも、無理{むり}しないで休{やす}んでください。', chinese: '生病真討厭呢。但是，不要勉強，請好好休息。' },
    ],

    quizQuestions: [],
  },

  // ━━━ L5: 気持ちを伝える ━━━
  {
    id: 'n5_u5_l5',
    unitId: 'n5_u5',
    order: 5,
    titleJp: '気持ちを伝える',
    titleZh: '表達心情',
    objectives: [
      '學會正式的轉折表達',
      '掌握「けれども」「しかし」「が」的用法',
    ],

    vocabulary: [
      { word: '忙しい', reading: 'いそがしい', meaning: '忙', meaning_zh: '忙' },
      { word: '絶対', reading: 'ぜったい', meaning: '絕對', meaning_zh: '絕對' },
      { word: '嬉しい', reading: 'うれしい', meaning: '高興', meaning_zh: '高興' },
      { word: '悲しい', reading: 'かなしい', meaning: '悲傷', meaning_zh: '悲傷' },
      { word: '楽しい', reading: 'たのしい', meaning: '快樂', meaning_zh: '快樂' },
      { word: '寂しい', reading: 'さびしい', meaning: '寂寞', meaning_zh: '寂寞' },
      { word: '怖い', reading: 'こわい', meaning: '可怕', meaning_zh: '可怕' },
      { word: '恥ずかしい', reading: 'はずかしい', meaning: '丟臉', meaning_zh: '丟臉' },
      { word: '悔しい', reading: 'くやしい', meaning: '不甘心', meaning_zh: '不甘心' },
      { word: '懐かしい', reading: 'なつかしい', meaning: '懷念', meaning_zh: '懷念' },
      { word: '凄い', reading: 'すごい', meaning: '厲害', meaning_zh: '厲害' },
      { word: '面白い', reading: 'おもしろい', meaning: '有趣', meaning_zh: '有趣' },
      { word: '詰まらない', reading: 'つまらない', meaning: '無聊', meaning_zh: '無聊' },
      { word: '素晴らしい', reading: 'すばらしい', meaning: '精彩', meaning_zh: '精彩' },
      { word: '気持ち', reading: 'きもち', meaning: '感覺', meaning_zh: '感覺' },
      { word: '友達', reading: 'ともだち', meaning: '朋友', meaning_zh: '朋友' },
      { word: '家族', reading: 'かぞく', meaning: '家人', meaning_zh: '家人' },
      { word: '幸せ', reading: 'しあわせ', meaning: '幸福', meaning_zh: '幸福' },
    ],

    grammarIds: ['n5_keredo_mo', 'n5_shikashi', 'n5_ga'],

    grammarSummaries: [
      {
        grammarId: 'n5_keredo_mo',
        pattern: '文A + けれども、文B',
        meaning: '雖然～但是（正式）',
        quickExample: '簡単{かんたん}ではないけれども、頑張{がんば}ります。',
        quickExampleZh: '雖然不簡單，但我會努力。',
      },
      {
        grammarId: 'n5_shikashi',
        pattern: '文A。しかし、文B。',
        meaning: '然而（書面語）',
        quickExample: '試験{しけん}は難{むずか}しかったです。しかし、合格{ごうかく}しました。',
        quickExampleZh: '考試很難。然而通過了。',
      },
      {
        grammarId: 'n5_ga',
        pattern: '文A + が、文B',
        meaning: '雖然～但（丁寧）',
        quickExample: 'すみませんが、もう一度{いちど}お願{ねが}いします。',
        quickExampleZh: '不好意思，請再說一次。',
      },
    ],

    dialogue: [
      { speaker: '佐藤{さとう}', japanese: '昨日{きのう}の映画{えいが}はどうでしたか。', chinese: '昨天的電影怎麼樣？' },
      { speaker: '鈴木{すずき}', japanese: '少{すこ}し怖{こわ}かったけれども、凄{すご}く面白{おもしろ}かったです！', chinese: '雖然有點可怕，但超級有趣！' },
      { speaker: '佐藤{さとう}', japanese: '最後{さいご}は悲{かな}しかったですが、素晴{すば}らしい映画{えいが}でした。', chinese: '最後雖然很悲傷，但是部精彩的電影。' },
      { speaker: '鈴木{すずき}', japanese: '友達{ともだち}は「詰{つ}まらない」と言{い}いましたが、私{わたし}は嬉{うれ}しい気持{きも}ちになりました。', chinese: '朋友說「無聊」，但我覺得很開心。' },
      { speaker: '佐藤{さとう}', japanese: '懐{なつ}かしい感{かん}じもありました。しかし、寂{さび}しいシーンもありましたね。家族{かぞく}は大事{だいじ}ですから。', chinese: '也有懷念的感覺。然而也有寂寞的場景呢。因為家人很重要。' },
      { speaker: '鈴木{すずき}', japanese: '恥{は}ずかしいけれども、泣{な}いてしまいました。悔{くや}しいシーンもありましたが、最後{さいご}は幸{しあわ}せな気持{きも}ちになりました。', chinese: '雖然丟臉，但哭了。也有不甘心的場景，但最後變得幸福了。' },
    ],

    quizQuestions: [],
  },

  // ━━━ L6: アドバイス ━━━
  {
    id: 'n5_u5_l6',
    unitId: 'n5_u5',
    order: 6,
    titleJp: 'アドバイス',
    titleZh: '建議',
    objectives: [
      '學會免除義務的表達「なくてもいい」',
      '掌握建議表達「ほうがいい」',
    ],

    vocabulary: [
      { word: '大事', reading: 'だいじ', meaning: '重要', meaning_zh: '重要' },
      { word: '特別', reading: 'とくべつ', meaning: '特別', meaning_zh: '特別' },
      { word: '普通', reading: 'ふつう', meaning: '普通', meaning_zh: '普通' },
      { word: '簡単', reading: 'かんたん', meaning: '簡單', meaning_zh: '簡單' },
      { word: '複雑', reading: 'ふくざつ', meaning: '複雜', meaning_zh: '複雜' },
      { word: 'もちろん', reading: 'もちろん', meaning: '當然', meaning_zh: '當然' },
      { word: 'やはり', reading: 'やはり', meaning: '果然', meaning_zh: '果然' },
      { word: '一番', reading: 'いちばん', meaning: '最', meaning_zh: '最' },
      { word: '少し', reading: 'すこし', meaning: '稍微', meaning_zh: '稍微' },
      { word: '全然', reading: 'ぜんぜん', meaning: '完全不', meaning_zh: '完全不' },
      { word: '映画', reading: 'えいが', meaning: '電影', meaning_zh: '電影' },
      { word: '音楽', reading: 'おんがく', meaning: '音樂', meaning_zh: '音樂' },
      { word: '散歩', reading: 'さんぽ', meaning: '散步', meaning_zh: '散步' },
      { word: '旅行', reading: 'りょこう', meaning: '旅行', meaning_zh: '旅行' },
      { word: '料理', reading: 'りょうり', meaning: '料理', meaning_zh: '料理' },
      { word: 'ゲーム', reading: 'ゲーム', meaning: '遊戲', meaning_zh: '遊戲' },
      { word: '漫画', reading: 'まんが', meaning: '漫畫', meaning_zh: '漫畫' },
      { word: 'ドラマ', reading: 'ドラマ', meaning: '日劇', meaning_zh: '日劇' },
    ],

    grammarIds: ['n5_naku_temo_ii', 'n5_hou_ga_ii'],

    grammarSummaries: [
      {
        grammarId: 'n5_naku_temo_ii',
        pattern: '動詞ない形 → なくてもいい',
        meaning: '不做也可以',
        quickExample: '明日{あした}は来{こ}なくてもいいですよ。',
        quickExampleZh: '明天不來也可以喔。',
      },
      {
        grammarId: 'n5_hou_ga_ii',
        pattern: '動詞た形 / ない形 + ほうがいい',
        meaning: '最好做～ / 最好不要做～',
        quickExample: '早{はや}く寝{ね}たほうがいいですよ。',
        quickExampleZh: '最好早點睡喔。',
      },
    ],

    dialogue: [
      { speaker: '田中{たなか}', japanese: '最近{さいきん}疲{つか}れているんですが、何{なに}かいいアドバイスはありますか。', chinese: '最近很累，有什麼好建議嗎？' },
      { speaker: '佐藤{さとう}', japanese: 'もちろん。散歩{さんぽ}したほうがいいですよ。音楽{おんがく}を聞{き}きながら歩{ある}くのが一番{いちばん}です。', chinese: '當然。最好去散步喔。邊聽音樂邊走路是最好的。' },
      { speaker: '田中{たなか}', japanese: '映画{えいが}やドラマを見{み}るのはどうですか。', chinese: '看電影或日劇怎麼樣？' },
      { speaker: '佐藤{さとう}', japanese: 'やはり気分転換{きぶんてんかん}は大事{だいじ}ですね。でも、複雑{ふくざつ}な話{はなし}は少{すこ}し疲{つか}れるから、簡単{かんたん}な漫画{まんが}を読{よ}んだほうがいいかも。', chinese: '果然轉換心情很重要呢。但是複雜的故事有點累，看簡單的漫畫比較好。' },
      { speaker: '田中{たなか}', japanese: '料理{りょうり}もしたほうがいいですか。', chinese: '也最好做料理嗎？' },
      { speaker: '佐藤{さとう}', japanese: '普通{ふつう}の料理{りょうり}なら全然{ぜんぜん}難{むずか}しくないですよ。でも、特別{とくべつ}なものは作{つく}らなくてもいいです。ゲームで遊{あそ}んだり、旅行{りょこう}の計画{けいかく}を立{た}てたりするのもいいですね。', chinese: '普通的料理完全不難喔。但是，不用做特別的東西。玩遊戲或規劃旅行也不錯呢。' },
    ],

    quizQuestions: [],
  },

  // ━━━ L7: 休日の過ごし方 ━━━
  {
    id: 'n5_u5_l7',
    unitId: 'n5_u5',
    order: 7,
    titleJp: '休日の過ごし方',
    titleZh: '假日的安排',
    objectives: [
      '學會「ないで」附帶狀態表達',
      '掌握「にする」選擇決定的用法',
    ],

    vocabulary: [
      { word: '運動', reading: 'うんどう', meaning: '運動', meaning_zh: '運動' },
      { word: 'スポーツ', reading: 'スポーツ', meaning: '運動', meaning_zh: '運動' },
      { word: '趣味', reading: 'しゅみ', meaning: '興趣', meaning_zh: '興趣' },
      { word: '自由', reading: 'じゆう', meaning: '自由', meaning_zh: '自由' },
      { word: '時間', reading: 'じかん', meaning: '時間', meaning_zh: '時間' },
      { word: '週末', reading: 'しゅうまつ', meaning: '週末', meaning_zh: '週末' },
      { word: '予定', reading: 'よてい', meaning: '計畫', meaning_zh: '計畫' },
      { word: '場所', reading: 'ばしょ', meaning: '場所', meaning_zh: '場所' },
      { word: '最近', reading: 'さいきん', meaning: '最近', meaning_zh: '最近' },
      { word: '体験', reading: 'たいけん', meaning: '體驗', meaning_zh: '體驗' },
      { word: '久しぶり', reading: 'ひさしぶり', meaning: '好久不見', meaning_zh: '好久不見' },
      { word: '決める', reading: 'きめる', meaning: '決定', meaning_zh: '決定' },
      { word: '選ぶ', reading: 'えらぶ', meaning: '選擇', meaning_zh: '選擇' },
      { word: '誘う', reading: 'さそう', meaning: '邀請', meaning_zh: '邀請' },
      { word: '参加', reading: 'さんか', meaning: '參加', meaning_zh: '參加' },
      { word: '始める', reading: 'はじめる', meaning: '開始', meaning_zh: '開始' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受', meaning_zh: '享受' },
      { word: 'おすすめ', reading: 'おすすめ', meaning: '推薦', meaning_zh: '推薦' },
    ],

    grammarIds: ['n5_naide', 'n5_ni_suru'],

    grammarSummaries: [
      {
        grammarId: 'n5_naide',
        pattern: '動詞ない形 → ないで',
        meaning: '不做～地（沒有做～就）',
        quickExample: '朝{あさ}ごはんを食{た}べないで、学校{がっこう}に行{い}きました。',
        quickExampleZh: '沒吃早飯就去學校了。',
      },
      {
        grammarId: 'n5_ni_suru',
        pattern: '名詞 + にする',
        meaning: '決定選～',
        quickExample: 'コーヒーにします。',
        quickExampleZh: '我要咖啡。',
      },
    ],

    dialogue: [
      { speaker: '田中{たなか}', japanese: '久{ひさ}しぶり！最近{さいきん}、何{なに}か趣味{しゅみ}を始{はじ}めた？', chinese: '好久不見！最近有開始什麼興趣嗎？' },
      { speaker: '山田{やまだ}', japanese: 'うん、週末{しゅうまつ}に自由{じゆう}な時間{じかん}があるから、運動{うんどう}を始{はじ}めたよ。', chinese: '嗯，週末有自由的時間，所以開始做運動了。' },
      { speaker: '田中{たなか}', japanese: '凄{すご}い！今度{こんど}スポーツの体験{たいけん}に誘{さそ}いたいんだけど。おすすめの場所{ばしょ}があるんだ。', chinese: '好厲害！下次想邀你去體驗運動。有推薦的場所。' },
      { speaker: '山田{やまだ}', japanese: '予定{よてい}を決{き}めないで行{い}くのも楽{たの}しいけど、今回{こんかい}は選{えら}んでから行{い}こうか。', chinese: '不決定計畫就去也很有趣，但這次選好再去吧。' },
      { speaker: '田中{たなか}', japanese: 'じゃあ、サッカーにする？ゲーム大会{たいかい}に参加{さんか}するのもあるよ。', chinese: '那選足球？也有參加遊戲比賽的選項喔。' },
      { speaker: '山田{やまだ}', japanese: 'サッカーにする！朝{あさ}ごはんを食{た}べないで行{い}かないようにしなくちゃ。しっかり食{た}べて楽{たの}しもう！', chinese: '選足球！不能不吃早餐就去。好好吃然後享受吧！' },
    ],

    quizQuestions: [],
  },
]
