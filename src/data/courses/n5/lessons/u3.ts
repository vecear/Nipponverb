import type { LessonDefinition } from '../../../../types/course'
import type { UnifiedQuestion } from '../../../questions/types'

// ─── Unit 3: 描述事物 ───

export const u3Lessons: LessonDefinition[] = [
  // ============================================================
  // L1: どんな人ですか (什麼樣的人)
  // ============================================================
  {
    id: 'n5_u3_l1',
    unitId: 'n5_u3',
    order: 1,
    titleJp: 'どんな人{ひと}ですか',
    titleZh: '什麼樣的人',
    objectives: [
      '學會い形容詞和な形容詞',
      '掌握「どんな」疑問詞',
    ],

    vocabulary: [
      { word: '大きい', reading: 'おおきい', meaning: '大', meaning_zh: '大' },
      { word: '小さい', reading: 'ちいさい', meaning: '小', meaning_zh: '小' },
      { word: '長い', reading: 'ながい', meaning: '長', meaning_zh: '長' },
      { word: '短い', reading: 'みじかい', meaning: '短', meaning_zh: '短' },
      { word: '高い', reading: 'たかい', meaning: '高', meaning_zh: '高' },
      { word: '低い', reading: 'ひくい', meaning: '低', meaning_zh: '低' },
      { word: '広い', reading: 'ひろい', meaning: '寬', meaning_zh: '寬' },
      { word: '狭い', reading: 'せまい', meaning: '狹', meaning_zh: '狹' },
      { word: '太い', reading: 'ふとい', meaning: '粗', meaning_zh: '粗' },
      { word: '細い', reading: 'ほそい', meaning: '細', meaning_zh: '細' },
      { word: '明るい', reading: 'あかるい', meaning: '明亮', meaning_zh: '明亮' },
      { word: '暗い', reading: 'くらい', meaning: '暗', meaning_zh: '暗' },
      { word: '静か', reading: 'しずか', meaning: '安靜', meaning_zh: '安靜' },
      { word: '賑やか', reading: 'にぎやか', meaning: '熱鬧', meaning_zh: '熱鬧' },
      { word: '綺麗', reading: 'きれい', meaning: '漂亮', meaning_zh: '漂亮' },
      { word: '可愛い', reading: 'かわいい', meaning: '可愛', meaning_zh: '可愛' },
      { word: '若い', reading: 'わかい', meaning: '年輕', meaning_zh: '年輕' },
      { word: '有名', reading: 'ゆうめい', meaning: '有名', meaning_zh: '有名' },
      { word: '立派', reading: 'りっぱ', meaning: '出色', meaning_zh: '出色' },
    ],

    grammarIds: ['n5_i_adjectives', 'n5_na_adjectives', 'n5_donna'],
    grammarSummaries: [
      {
        grammarId: 'n5_i_adjectives',
        pattern: 'い形容詞 + 名詞',
        meaning: 'い形容詞直接修飾名詞',
        quickExample: '高{たか}い建物{たてもの}',
        quickExampleZh: '高的建築',
      },
      {
        grammarId: 'n5_na_adjectives',
        pattern: 'な形容詞 + な + 名詞',
        meaning: 'な形容詞需加「な」修飾名詞',
        quickExample: '静{しず}かな部屋{へや}',
        quickExampleZh: '安靜的房間',
      },
      {
        grammarId: 'n5_donna',
        pattern: 'どんな + 名詞',
        meaning: '什麼樣的～',
        quickExample: 'どんな人{ひと}ですか。',
        quickExampleZh: '是什麼樣的人？',
      },
    ],

    dialogue: [
      { speaker: '田中{たなか}', japanese: 'この町{まち}は賑{にぎ}やかですね。大{おお}きい建物{たてもの}が多{おお}いです。', chinese: '這個城鎮好熱鬧呢。有很多大型建築。' },
      { speaker: '佐藤{さとう}', japanese: 'あの高{たか}い建物{たてもの}の隣{となり}に、低{ひく}い建物{たてもの}がありますね。どんな所{ところ}ですか。', chinese: '那棟高的建築旁邊有棟矮的建築呢。那是什麼樣的地方？' },
      { speaker: '田中{たなか}', japanese: 'あれは有名{ゆうめい}な美術館{びじゅつかん}です。中{なか}は広{ひろ}くて明{あか}るいですよ。', chinese: '那是一座有名的美術館。裡面又寬敞又明亮喔。' },
      { speaker: '佐藤{さとう}', japanese: '隣{となり}の部屋{へや}は狭{せま}くて暗{くら}いですか。', chinese: '隔壁的房間又狹窄又暗嗎？' },
      { speaker: '田中{たなか}', japanese: 'いいえ、静{しず}かできれいな部屋{へや}です。若{わか}くて立派{りっぱ}な画家{がか}の作品{さくひん}があります。', chinese: '不是，是安靜又漂亮的房間。裡面有年輕又出色的畫家的作品。' },
      { speaker: '佐藤{さとう}', japanese: 'あの小{ちい}さくて可愛{かわい}い絵{え}は何{なん}ですか。太{ふと}い線{せん}と細{ほそ}い線{せん}が面白{おもしろ}いですね。', chinese: '那幅小巧可愛的畫是什麼？粗的線條和細的線條很有趣呢。' },
    ],

    quizQuestions: [] as UnifiedQuestion[],
  },

  // ============================================================
  // L2: 天気はどうですか (天氣如何)
  // ============================================================
  {
    id: 'n5_u3_l2',
    unitId: 'n5_u3',
    order: 2,
    titleJp: '天気{てんき}はどうですか',
    titleZh: '天氣如何',
    objectives: [
      '學會天氣和季節表達',
      '掌握「すぎる」和「なる」',
    ],

    vocabulary: [
      { word: '大人', reading: 'おとな', meaning: '大人', meaning_zh: '大人' },
      { word: '子供', reading: 'こども', meaning: '孩子', meaning_zh: '孩子' },
      { word: '男の子', reading: 'おとこのこ', meaning: '男孩', meaning_zh: '男孩' },
      { word: '女の子', reading: 'おんなのこ', meaning: '女孩', meaning_zh: '女孩' },
      { word: '大勢', reading: 'おおぜい', meaning: '許多人', meaning_zh: '許多人' },
      { word: '背', reading: 'せ', meaning: '身高', meaning_zh: '身高' },
      { word: '丈夫', reading: 'じょうぶ', meaning: '結實', meaning_zh: '結實' },
      { word: '暑い', reading: 'あつい', meaning: '熱', meaning_zh: '熱' },
      { word: '寒い', reading: 'さむい', meaning: '冷', meaning_zh: '冷' },
      { word: '暖かい', reading: 'あたたかい', meaning: '溫暖', meaning_zh: '溫暖' },
      { word: '涼しい', reading: 'すずしい', meaning: '涼爽', meaning_zh: '涼爽' },
      { word: '天気', reading: 'てんき', meaning: '天氣', meaning_zh: '天氣' },
      { word: '晴れる', reading: 'はれる', meaning: '放晴', meaning_zh: '放晴' },
      { word: '曇る', reading: 'くもる', meaning: '起雲', meaning_zh: '起雲' },
      { word: '降る', reading: 'ふる', meaning: '下雨雪', meaning_zh: '下雨雪' },
      { word: '風', reading: 'かぜ', meaning: '風', meaning_zh: '風' },
      { word: '空', reading: 'そら', meaning: '天空', meaning_zh: '天空' },
      { word: '春', reading: 'はる', meaning: '春天', meaning_zh: '春天' },
      { word: '夏', reading: 'なつ', meaning: '夏天', meaning_zh: '夏天' },
      { word: '秋', reading: 'あき', meaning: '秋天', meaning_zh: '秋天' },
    ],

    grammarIds: ['n5_totemo', 'n5_sugiru', 'n5_naru'],
    grammarSummaries: [
      {
        grammarId: 'n5_totemo',
        pattern: 'とても + 形容詞',
        meaning: '非常～',
        quickExample: '今日{きょう}はとても暑{あつ}いです。',
        quickExampleZh: '今天非常熱。',
      },
      {
        grammarId: 'n5_sugiru',
        pattern: '形容詞語幹 + すぎる',
        meaning: '太～了',
        quickExample: '暑{あつ}すぎます。',
        quickExampleZh: '太熱了。',
      },
      {
        grammarId: 'n5_naru',
        pattern: 'く/に + なる',
        meaning: '變得～',
        quickExample: '涼{すず}しくなりました。',
        quickExampleZh: '變涼爽了。',
      },
    ],

    dialogue: [
      { speaker: '鈴木{すずき}', japanese: '今日{きょう}の天気{てんき}はどうですか。大勢{おおぜい}の子供{こども}が外{そと}で遊{あそ}んでいますね。', chinese: '今天的天氣怎麼樣？很多小孩在外面玩呢。' },
      { speaker: '田中{たなか}', japanese: '朝{あさ}は曇{くも}っていましたが、今{いま}は晴{は}れています。空{そら}がとても青{あお}いですよ。', chinese: '早上有烏雲，但現在放晴了。天空非常藍喔。' },
      { speaker: '鈴木{すずき}', japanese: '夏{なつ}は暑{あつ}すぎますね。風{かぜ}もないし、大人{おとな}も子供{こども}も大変{たいへん}です。', chinese: '夏天太熱了呢。也沒有風，不管大人還是小孩都很辛苦。' },
      { speaker: '田中{たなか}', japanese: '秋{あき}になると涼{すず}しくなりますよ。春{はる}はとても暖{あたた}かくて気持{きも}ちいいです。', chinese: '到了秋天就會變涼爽喔。春天非常溫暖又舒服。' },
      { speaker: '鈴木{すずき}', japanese: 'あの背{せ}が高{たか}い男{おとこ}の子{こ}と、隣{となり}の女{おんな}の子{こ}は丈夫{じょうぶ}そうですね。', chinese: '那個個子高的男孩和旁邊的女孩看起來很結實呢。' },
      { speaker: '田中{たなか}', japanese: 'はい。寒{さむ}い冬{ふゆ}でも外{そと}で元気{げんき}に遊{あそ}んでいますよ。雨{あめ}が降{ふ}っても大丈夫{だいじょうぶ}です。', chinese: '是的。即使寒冷的冬天也在外面精神奕奕地玩耍喔。下雨也沒問題。' },
    ],

    quizQuestions: [] as UnifiedQuestion[],
  },

  // ============================================================
  // L3: 色と季節 (色彩與季節)
  // ============================================================
  {
    id: 'n5_u3_l3',
    unitId: 'n5_u3',
    order: 3,
    titleJp: '色{いろ}と季節{きせつ}',
    titleZh: '色彩與季節',
    objectives: [
      '學會顏色和自然詞彙',
      '掌握「AはBより」比較句型',
    ],

    vocabulary: [
      { word: '冬', reading: 'ふゆ', meaning: '冬天', meaning_zh: '冬天' },
      { word: '雪', reading: 'ゆき', meaning: '雪', meaning_zh: '雪' },
      { word: '雨', reading: 'あめ', meaning: '雨', meaning_zh: '雨' },
      { word: '花', reading: 'はな', meaning: '花', meaning_zh: '花' },
      { word: '咲く', reading: 'さく', meaning: '開花', meaning_zh: '開花' },
      { word: '色', reading: 'いろ', meaning: '顏色', meaning_zh: '顏色' },
      { word: '赤い', reading: 'あかい', meaning: '紅', meaning_zh: '紅' },
      { word: '青い', reading: 'あおい', meaning: '藍', meaning_zh: '藍' },
      { word: '白い', reading: 'しろい', meaning: '白', meaning_zh: '白' },
      { word: '黒い', reading: 'くろい', meaning: '黑', meaning_zh: '黑' },
      { word: '黄色い', reading: 'きいろい', meaning: '黃', meaning_zh: '黃' },
      { word: '緑', reading: 'みどり', meaning: '綠', meaning_zh: '綠' },
      { word: '茶色', reading: 'ちゃいろ', meaning: '茶色', meaning_zh: '茶色' },
      { word: '美味しい', reading: 'おいしい', meaning: '好吃', meaning_zh: '好吃' },
      { word: '甘い', reading: 'あまい', meaning: '甜', meaning_zh: '甜' },
      { word: '辛い', reading: 'からい', meaning: '辣', meaning_zh: '辣' },
      { word: '冷たい', reading: 'つめたい', meaning: '冰', meaning_zh: '冰' },
      { word: '熱い', reading: 'あつい', meaning: '燙', meaning_zh: '燙' },
    ],

    grammarIds: ['n5_wa_yori', 'n5_yori_hou_ga'],
    grammarSummaries: [
      {
        grammarId: 'n5_wa_yori',
        pattern: 'AはBより〜',
        meaning: 'A比B更～',
        quickExample: '夏{なつ}は冬{ふゆ}より暑{あつ}いです。',
        quickExampleZh: '夏天比冬天熱。',
      },
      {
        grammarId: 'n5_yori_hou_ga',
        pattern: 'AよりBのほうが〜',
        meaning: '比起A，B更～',
        quickExample: 'コーヒーより紅茶{こうちゃ}のほうが好{す}きです。',
        quickExampleZh: '比起咖啡，更喜歡紅茶。',
      },
    ],

    dialogue: [
      { speaker: '鈴木{すずき}', japanese: '冬{ふゆ}になると雪{ゆき}が降{ふ}りますね。白{しろ}い雪{ゆき}がとてもきれいです。', chinese: '到了冬天就會下雪呢。白色的雪非常漂亮。' },
      { speaker: '田中{たなか}', japanese: '春{はる}は花{はな}が咲{さ}いて、色{いろ}が賑{にぎ}やかになります。赤{あか}い花{はな}と黄色{きいろ}い花{はな}が好{す}きです。', chinese: '春天花開了，色彩也變得豐富起來。我喜歡紅色和黃色的花。' },
      { speaker: '鈴木{すずき}', japanese: '赤{あか}い花{はな}より青{あお}い花{はな}のほうが珍{めずら}しいですよ。緑{みどり}の葉{は}もきれいです。', chinese: '比起紅色的花，藍色的花比較珍貴喔。綠色的葉子也很漂亮。' },
      { speaker: '田中{たなか}', japanese: '秋{あき}は茶色{ちゃいろ}の落{お}ち葉{ば}がたくさんありますね。冬{ふゆ}は雨{あめ}が多{おお}くて、空{そら}が黒{くろ}くなります。', chinese: '秋天有很多茶色的落葉呢。冬天雨很多，天空會變暗。' },
      { speaker: '鈴木{すずき}', japanese: '美味{おい}しい物{もの}が食{た}べたいですね。甘{あま}い物{もの}は辛{から}い物{もの}より好{す}きです。', chinese: '好想吃好吃的東西呢。比起辣的東西我更喜歡甜的。' },
      { speaker: '田中{たなか}', japanese: '冷{つめ}たい飲{の}み物{もの}と熱{あつ}い飲{の}み物{もの}、どちらがいいですか。冬{ふゆ}は熱{あつ}いほうがいいですね。', chinese: '冰的飲料和熱的飲料，哪個好？冬天的話熱的比較好呢。' },
    ],

    quizQuestions: [] as UnifiedQuestion[],
  },

  // ============================================================
  // L4: 食事と飲み物 (用餐與飲料)
  // ============================================================
  {
    id: 'n5_u3_l4',
    unitId: 'n5_u3',
    order: 4,
    titleJp: '食事{しょくじ}と飲{の}み物{もの}',
    titleZh: '用餐與飲料',
    objectives: [
      '學會飲食與餐具相關詞彙',
      '掌握「一番」最高級表達',
    ],

    vocabulary: [
      { word: '飲み物', reading: 'のみもの', meaning: '飲料', meaning_zh: '飲料' },
      { word: '紅茶', reading: 'こうちゃ', meaning: '紅茶', meaning_zh: '紅茶' },
      { word: '牛乳', reading: 'ぎゅうにゅう', meaning: '牛奶', meaning_zh: '牛奶' },
      { word: 'お酒', reading: 'おさけ', meaning: '酒', meaning_zh: '酒' },
      { word: '食べ物', reading: 'たべもの', meaning: '食物', meaning_zh: '食物' },
      { word: 'お弁当', reading: 'おべんとう', meaning: '便當', meaning_zh: '便當' },
      { word: 'ご飯', reading: 'ごはん', meaning: '飯', meaning_zh: '飯' },
      { word: 'お皿', reading: 'おさら', meaning: '盤子', meaning_zh: '盤子' },
      { word: 'コップ', reading: 'コップ', meaning: '杯子', meaning_zh: '杯子' },
      { word: 'カップ', reading: 'カップ', meaning: '杯子', meaning_zh: '杯子' },
      { word: 'フォーク', reading: 'フォーク', meaning: '叉子', meaning_zh: '叉子' },
      { word: 'スプーン', reading: 'スプーン', meaning: '湯匙', meaning_zh: '湯匙' },
      { word: 'ナイフ', reading: 'ナイフ', meaning: '小刀', meaning_zh: '小刀' },
      { word: '箸', reading: 'はし', meaning: '筷子', meaning_zh: '筷子' },
      { word: '茶碗', reading: 'ちゃわん', meaning: '飯碗', meaning_zh: '飯碗' },
      { word: '多い', reading: 'おおい', meaning: '多', meaning_zh: '多' },
      { word: '少ない', reading: 'すくない', meaning: '少', meaning_zh: '少' },
      { word: '強い', reading: 'つよい', meaning: '強', meaning_zh: '強' },
      { word: '弱い', reading: 'よわい', meaning: '弱', meaning_zh: '弱' },
      { word: '同じ', reading: 'おなじ', meaning: '相同', meaning_zh: '相同' },
    ],

    grammarIds: ['n5_ichiban'],
    grammarSummaries: [
      {
        grammarId: 'n5_ichiban',
        pattern: '〜で一番{いちばん}〜',
        meaning: '最～',
        quickExample: 'このレストランで一番{いちばん}美味{おい}しい料理{りょうり}は何{なん}ですか。',
        quickExampleZh: '這間餐廳最好吃的菜是什麼？',
      },
    ],

    dialogue: [
      { speaker: '山田{やまだ}', japanese: 'この店{みせ}の食{た}べ物{もの}で一番{いちばん}美味{おい}しいのは何{なん}ですか。', chinese: '這間店最好吃的食物是什麼？' },
      { speaker: '佐藤{さとう}', japanese: 'お弁当{べんとう}が一番{いちばん}人気{にんき}がありますよ。ご飯{はん}が多{おお}くて美味{おい}しいです。', chinese: '便當最受歡迎喔。飯很多又好吃。' },
      { speaker: '山田{やまだ}', japanese: '飲{の}み物{もの}はどうですか。紅茶{こうちゃ}と牛乳{ぎゅうにゅう}とお酒{さけ}がありますね。', chinese: '飲料呢？有紅茶、牛奶和酒呢。' },
      { speaker: '佐藤{さとう}', japanese: 'お酒{さけ}は強{つよ}いですから、弱{よわ}い人{ひと}は紅茶{こうちゃ}がいいですよ。量{りょう}が少{すく}ないのも同{おな}じ値段{ねだん}です。', chinese: '酒很烈，所以酒量弱的人喝紅茶比較好喔。量少的也是同樣的價格。' },
      { speaker: '山田{やまだ}', japanese: '箸{はし}とフォークとスプーン、どれを使{つか}いますか。ナイフもありますね。', chinese: '筷子、叉子和湯匙，用哪個？也有小刀呢。' },
      { speaker: '佐藤{さとう}', japanese: 'ご飯{はん}は茶碗{ちゃわん}で食{た}べますよ。お皿{さら}はカップの隣{となり}に置{お}いてください。コップもどうぞ。', chinese: '飯用飯碗吃喔。盤子請放在杯子旁邊。水杯也請用。' },
    ],

    quizQuestions: [] as UnifiedQuestion[],
  },

  // ============================================================
  // L5: 体と健康 (身體與健康)
  // ============================================================
  {
    id: 'n5_u3_l5',
    unitId: 'n5_u3',
    order: 5,
    titleJp: '体{からだ}と健康{けんこう}',
    titleZh: '身體與健康',
    objectives: [
      '學會身體部位和健康相關詞彙',
      '掌握「の中で」和「だけ」用法',
    ],

    vocabulary: [
      { word: '違う', reading: 'ちがう', meaning: '不同', meaning_zh: '不同' },
      { word: '頭', reading: 'あたま', meaning: '頭', meaning_zh: '頭' },
      { word: '目', reading: 'め', meaning: '眼睛', meaning_zh: '眼睛' },
      { word: '耳', reading: 'みみ', meaning: '耳朵', meaning_zh: '耳朵' },
      { word: '鼻', reading: 'はな', meaning: '鼻子', meaning_zh: '鼻子' },
      { word: '口', reading: 'くち', meaning: '口', meaning_zh: '口' },
      { word: '歯', reading: 'は', meaning: '牙齒', meaning_zh: '牙齒' },
      { word: '手', reading: 'て', meaning: '手', meaning_zh: '手' },
      { word: '足', reading: 'あし', meaning: '腳', meaning_zh: '腳' },
      { word: '體', reading: 'からだ', meaning: '身體', meaning_zh: '身體' },
      { word: 'お腹', reading: 'おなか', meaning: '肚子', meaning_zh: '肚子' },
      { word: '痛い', reading: 'いたい', meaning: '痛', meaning_zh: '痛' },
      { word: '藥', reading: 'くすり', meaning: '藥', meaning_zh: '藥' },
      { word: '病気', reading: 'びょうき', meaning: '生病', meaning_zh: '生病' },
      { word: '醫者', reading: 'いしゃ', meaning: '醫生', meaning_zh: '醫生' },
      { word: '上着', reading: 'うわぎ', meaning: '外套', meaning_zh: '外套' },
      { word: 'ハンカチ', reading: 'ハンカチ', meaning: '手帕', meaning_zh: '手帕' },
      { word: 'スリッパ', reading: 'スリッパ', meaning: '拖鞋', meaning_zh: '拖鞋' },
      { word: '色々', reading: 'いろいろ', meaning: '各式各樣', meaning_zh: '各式各樣' },
    ],

    grammarIds: ['n5_no_naka_de', 'n5_no_naka_de_a_ga_ichiban', 'n5_dake'],
    grammarSummaries: [
      {
        grammarId: 'n5_no_naka_de',
        pattern: '〜の中{なか}で',
        meaning: '在～之中',
        quickExample: '果物{くだもの}の中{なか}で何{なに}が好{す}きですか。',
        quickExampleZh: '水果之中你喜歡什麼？',
      },
      {
        grammarId: 'n5_no_naka_de_a_ga_ichiban',
        pattern: '〜の中{なか}でAが一番{いちばん}〜',
        meaning: '在～之中A是最～',
        quickExample: '体{からだ}の中{なか}で目{め}が一番{いちばん}大切{たいせつ}です。',
        quickExampleZh: '身體中眼睛最重要。',
      },
      {
        grammarId: 'n5_dake',
        pattern: '〜だけ',
        meaning: '只有～',
        quickExample: '藥{くすり}だけ飲{の}んでください。',
        quickExampleZh: '只要吃藥就好。',
      },
    ],

    dialogue: [
      { speaker: '山田{やまだ}', japanese: '先生{せんせい}、頭{あたま}が痛{いた}いです。目{め}も耳{みみ}も辛{つら}いです。', chinese: '醫生，我頭很痛。眼睛和耳朵也很不舒服。' },
      { speaker: '醫者{いしゃ}', japanese: '他{ほか}にどこか痛{いた}いですか。お腹{なか}や足{あし}はどうですか。', chinese: '還有其他地方痛嗎？肚子和腳怎麼樣？' },
      { speaker: '山田{やまだ}', japanese: 'お腹{なか}も少{すこ}し痛{いた}いです。手{て}は大丈夫{だいじょうぶ}です。口{くち}と鼻{はな}も大丈夫{だいじょうぶ}です。', chinese: '肚子也有一點痛。手沒問題。嘴巴和鼻子也沒問題。' },
      { speaker: '醫者{いしゃ}', japanese: '体{からだ}の中{なか}で、一番{いちばん}痛{いた}いのはどこですか。歯{は}は違{ちが}う病院{びょういん}ですよ。', chinese: '身體之中，最痛的是哪裡？牙齒的話要去不同的醫院喔。' },
      { speaker: '山田{やまだ}', japanese: '頭{あたま}が一番{いちばん}痛{いた}いです。病気{びょうき}ですか。色々{いろいろ}心配{しんぱい}です。', chinese: '頭最痛。是生病了嗎？各種事情都很擔心。' },
      { speaker: '醫者{いしゃ}', japanese: 'この藥{くすり}だけ飲{の}んでください。上着{うわぎ}を着{き}て暖{あたた}かくしてくださいね。ハンカチとスリッパもお忘{わす}れなく。', chinese: '只要吃這個藥就好。請穿上外套保暖喔。手帕和拖鞋也別忘了。' },
    ],

    quizQuestions: [] as UnifiedQuestion[],
  },

  // ============================================================
  // L6: 形と性質 (形狀與性質)
  // ============================================================
  {
    id: 'n5_u3_l6',
    unitId: 'n5_u3',
    order: 6,
    titleJp: '形{かたち}と性質{せいしつ}',
    titleZh: '形狀與性質',
    objectives: [
      '學會形狀和性質相關形容詞',
      '掌握「でしょう」和「だろう」推測表達',
    ],

    vocabulary: [
      { word: '丸い', reading: 'まるい', meaning: '圓', meaning_zh: '圓' },
      { word: '厚い', reading: 'あつい', meaning: '厚', meaning_zh: '厚' },
      { word: '薄い', reading: 'うすい', meaning: '薄', meaning_zh: '薄' },
      { word: '汚い', reading: 'きたない', meaning: '髒', meaning_zh: '髒' },
      { word: '重い', reading: 'おもい', meaning: '重', meaning_zh: '重' },
      { word: '軽い', reading: 'かるい', meaning: '輕', meaning_zh: '輕' },
      { word: 'ポケット', reading: 'ポケット', meaning: '口袋', meaning_zh: '口袋' },
      { word: '大切', reading: 'たいせつ', meaning: '重要', meaning_zh: '重要' },
      { word: '問題', reading: 'もんだい', meaning: '問題', meaning_zh: '問題' },
      { word: '意味', reading: 'いみ', meaning: '意思', meaning_zh: '意思' },
      { word: '質問', reading: 'しつもん', meaning: '提問', meaning_zh: '提問' },
      { word: '答える', reading: 'こたえる', meaning: '回答', meaning_zh: '回答' },
      { word: '言葉', reading: 'ことば', meaning: '話語', meaning_zh: '話語' },
      { word: '話', reading: 'はなし', meaning: '故事', meaning_zh: '故事' },
      { word: '話す', reading: 'はなす', meaning: '說話', meaning_zh: '說話' },
      { word: '聞く', reading: 'きく', meaning: '聽', meaning_zh: '聽' },
      { word: '教える', reading: 'おしえる', meaning: '教', meaning_zh: '教' },
      { word: '覚える', reading: 'おぼえる', meaning: '記住', meaning_zh: '記住' },
    ],

    grammarIds: ['n5_deshou', 'n5_darou'],
    grammarSummaries: [
      {
        grammarId: 'n5_deshou',
        pattern: '〜でしょう',
        meaning: '大概～吧（禮貌推測）',
        quickExample: '明日{あした}は晴{は}れるでしょう。',
        quickExampleZh: '明天大概會放晴吧。',
      },
      {
        grammarId: 'n5_darou',
        pattern: '〜だろう',
        meaning: '大概～吧（隨意推測）',
        quickExample: 'この問題{もんだい}は難{むずか}しいだろう。',
        quickExampleZh: '這個問題大概很難吧。',
      },
    ],

    dialogue: [
      { speaker: '鈴木{すずき}', japanese: 'この丸{まる}い箱{はこ}は重{おも}いですね。中{なか}に何{なに}が入{はい}っていますか。', chinese: '這個圓形的箱子好重呢。裡面裝了什麼？' },
      { speaker: '田中{たなか}', japanese: '厚{あつ}い本{ほん}がたくさん入{はい}っています。大切{たいせつ}な言葉{ことば}がたくさん書{か}いてありますよ。', chinese: '裝了很多厚的書。上面寫了很多重要的話語喔。' },
      { speaker: '鈴木{すずき}', japanese: 'この薄{うす}い本{ほん}の意味{いみ}は何{なに}ですか。質問{しつもん}してもいいですか。', chinese: '這本薄的書的意思是什麼？我可以提問嗎？' },
      { speaker: '田中{たなか}', japanese: 'もちろん。先生{せんせい}に聞{き}いたら、きっと教{おし}えてくれるでしょう。話{はなし}を覚{おぼ}えておくといいですよ。', chinese: '當然可以。問老師的話，一定會教你的吧。把內容記住比較好喔。' },
      { speaker: '鈴木{すずき}', japanese: 'ポケットの中{なか}が汚{きたな}いなあ。軽{かる}い物{もの}しか入{い}れていないのに。この問題{もんだい}は難{むずか}しいだろう。', chinese: '口袋裡面好髒啊。明明只放了輕的東西。這個問題大概很難吧。' },
      { speaker: '田中{たなか}', japanese: '大丈夫{だいじょうぶ}。一緒{いっしょ}に話{はな}して、答{こた}えを見{み}つけましょう。', chinese: '沒問題。一起聊聊，找出答案吧。' },
    ],

    quizQuestions: [] as UnifiedQuestion[],
  },

  // ============================================================
  // L7: 意見を言う (表達意見)
  // ============================================================
  {
    id: 'n5_u3_l7',
    unitId: 'n5_u3',
    order: 7,
    titleJp: '意見{いけん}を言{い}う',
    titleZh: '表達意見',
    objectives: [
      '學會學習與表達相關詞彙',
      '掌握「なあ」感嘆語氣',
    ],

    vocabulary: [
      { word: '忘れる', reading: 'わすれる', meaning: '忘記', meaning_zh: '忘記' },
      { word: '知る', reading: 'しる', meaning: '知道', meaning_zh: '知道' },
      { word: '勉強', reading: 'べんきょう', meaning: '學習', meaning_zh: '學習' },
      { word: '練習', reading: 'れんしゅう', meaning: '練習', meaning_zh: '練習' },
      { word: '宿題', reading: 'しゅくだい', meaning: '作業', meaning_zh: '作業' },
      { word: '授業', reading: 'じゅぎょう', meaning: '上課', meaning_zh: '上課' },
      { word: '説明', reading: 'せつめい', meaning: '說明', meaning_zh: '說明' },
      { word: '大丈夫', reading: 'だいじょうぶ', meaning: '沒關係', meaning_zh: '沒關係' },
      { word: '本当', reading: 'ほんとう', meaning: '真的', meaning_zh: '真的' },
      { word: '全部', reading: 'ぜんぶ', meaning: '全部', meaning_zh: '全部' },
      { word: '大変', reading: 'たいへん', meaning: '辛苦', meaning_zh: '辛苦' },
      { word: '便利', reading: 'べんり', meaning: '方便', meaning_zh: '方便' },
      { word: '難しい', reading: 'むずかしい', meaning: '難', meaning_zh: '難' },
      { word: '易しい', reading: 'やさしい', meaning: '簡單', meaning_zh: '簡單' },
      { word: '正解', reading: 'せいかい', meaning: '正確答案', meaning_zh: '正確答案' },
    ],

    grammarIds: ['n5_naa'],
    grammarSummaries: [
      {
        grammarId: 'n5_naa',
        pattern: '〜なあ',
        meaning: '～啊（感嘆）',
        quickExample: '宿題{しゅくだい}が多{おお}いなあ。',
        quickExampleZh: '作業好多啊。',
      },
    ],

    dialogue: [
      { speaker: '田中{たなか}', japanese: '今日{きょう}の宿題{しゅくだい}は難{むずか}しいなあ。全部{ぜんぶ}で十問{じゅうもん}もあるよ。', chinese: '今天的作業好難啊。全部有十題呢。' },
      { speaker: '鈴木{すずき}', japanese: '本当{ほんとう}に大変{たいへん}だね。授業{じゅぎょう}の説明{せつめい}を忘{わす}れてしまったよ。', chinese: '真的很辛苦呢。上課的說明都忘了。' },
      { speaker: '田中{たなか}', japanese: '大丈夫{だいじょうぶ}だよ。この部分{ぶぶん}は易{やさ}しいから、練習{れんしゅう}すればすぐ覚{おぼ}えるよ。', chinese: '沒問題的。這個部分很簡單，練習的話馬上就能記住。' },
      { speaker: '鈴木{すずき}', japanese: '知{し}らない言葉{ことば}は辞書{じしょ}で調{しら}べると便利{べんり}だなあ。', chinese: '不知道的字查辭典很方便啊。' },
      { speaker: '田中{たなか}', japanese: '勉強{べんきょう}すれば正解{せいかい}が分{わ}かるようになるでしょう。一緒{いっしょ}に頑張{がんば}ろう。', chinese: '只要用功讀書，大概就能知道正確答案了吧。一起加油吧。' },
    ],

    quizQuestions: [] as UnifiedQuestion[],
  },
]
