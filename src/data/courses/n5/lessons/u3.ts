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

    quizQuestions: [
      // Q1: vocab — 大きい (correctIndex: 0)
      {
        id: 'n5_u3_l1_q1',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「大{おお}きい」の意味{いみ}はどれですか。',
        stemZh: '「大きい」的意思是哪個？',
        options: [
          { text: '大', reason: '正確。大{おお}きい意為「大的」。' },
          { text: '小', reason: '錯誤。小是小{ちい}さい。' },
          { text: '長', reason: '錯誤。長是長{なが}い。' },
          { text: '短', reason: '錯誤。短是短{みじか}い。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: 'い形容詞「大きい」',
          analysis: '大{おお}きい意為「大的」，反義詞是小{ちい}さい（小的）。',
          relatedRules: ['📖 本課 單字「大きい」'],
        },
      },
      // Q2: vocab — 狭い (correctIndex: 2)
      {
        id: 'n5_u3_l1_q2',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「狭{せま}い」の反対{はんたい}の言葉{ことば}はどれですか。',
        stemZh: '「狭い」的相反詞是哪個？',
        options: [
          { text: '暗{くら}い', reason: '錯誤。暗{くら}い意為「暗的」，與狹窄無關。' },
          { text: '細{ほそ}い', reason: '錯誤。細{ほそ}い意為「細的」，不是狹窄的反義詞。' },
          { text: '広{ひろ}い', reason: '正確。広{ひろ}い（寬廣的）是狭{せま}い（狹窄的）的反義詞。' },
          { text: '低{ひく}い', reason: '錯誤。低{ひく}い意為「低的」，與狹窄無關。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '反義詞配對：狭い⟷広い',
          analysis: '狭{せま}い（狹窄的）和広{ひろ}い（寬廣的）是一組反義詞。',
          relatedRules: ['📖 本課 單字「狭い」「広い」'],
        },
      },
      // Q3: vocab — 明るい (correctIndex: 1)
      {
        id: 'n5_u3_l1_q3',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '部屋{へや}がとても＿＿です。電気{でんき}がたくさんあります。',
        stemZh: '房間非常＿＿。有很多電燈。',
        options: [
          { text: '暗{くら}い', reason: '錯誤。有很多電燈應該是明亮的，不是暗的。' },
          { text: '明{あか}るい', reason: '正確。有很多電燈，所以房間很明亮。' },
          { text: '狭{せま}い', reason: '錯誤。狭{せま}い意為「狹窄的」，與電燈無關。' },
          { text: '低{ひく}い', reason: '錯誤。低{ひく}い意為「低的」，與電燈無關。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: 'い形容詞「明るい」',
          analysis: '明{あか}るい意為「明亮的」。房間有很多電燈，所以很明亮。反義詞是暗{くら}い（暗的）。',
          relatedRules: ['📖 本課 單字「明るい」'],
        },
      },
      // Q4: vocab — 太い/細い (correctIndex: 3)
      {
        id: 'n5_u3_l1_q4',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「細{ほそ}い」の意味{いみ}はどれですか。',
        stemZh: '「細い」的意思是哪個？',
        options: [
          { text: '粗', reason: '錯誤。粗是太{ふと}い。' },
          { text: '長', reason: '錯誤。長是長{なが}い。' },
          { text: '寬', reason: '錯誤。寬是広{ひろ}い。' },
          { text: '細', reason: '正確。細{ほそ}い意為「細的」。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: 'い形容詞「細い」',
          analysis: '細{ほそ}い意為「細的」，反義詞是太{ふと}い（粗的）。',
          relatedRules: ['📖 本課 單字「細い」'],
        },
      },
      // Q5: vocab — 賑やか (correctIndex: 0)
      {
        id: 'n5_u3_l1_q5',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: 'この町{まち}は人{ひと}が多{おお}くてとても＿＿です。',
        stemZh: '這個城鎮人很多，非常＿＿。',
        options: [
          { text: '賑{にぎ}やか', reason: '正確。人很多、很熱鬧，用賑{にぎ}やか。' },
          { text: '静{しず}か', reason: '錯誤。人很多的地方通常不安靜。' },
          { text: '暗{くら}い', reason: '錯誤。暗{くら}い意為「暗的」，與人多無關。' },
          { text: '狭{せま}い', reason: '錯誤。狭{せま}い意為「狹窄的」，與熱鬧無關。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: 'な形容詞「賑やか」',
          analysis: '賑{にぎ}やか是な形容詞，意為「熱鬧的」。反義詞是静{しず}か（安靜的）。',
          relatedRules: ['📖 本課 單字「賑やか」'],
        },
      },
      // Q6: vocab — 有名/立派/綺麗 (correctIndex: 2)
      {
        id: 'n5_u3_l1_q6',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: 'あの画家{がか}はとても＿＿です。世界中{せかいじゅう}の人{ひと}が知{し}っています。',
        stemZh: '那位畫家非常＿＿。全世界的人都認識他。',
        options: [
          { text: '可愛{かわい}い', reason: '錯誤。可愛{かわい}い意為「可愛的」，不符合語境。' },
          { text: '若{わか}い', reason: '錯誤。若{わか}い意為「年輕的」，不一定是全世界都認識。' },
          { text: '有名{ゆうめい}', reason: '正確。全世界都認識，表示很有名。' },
          { text: '立派{りっぱ}', reason: '錯誤。立派{りっぱ}意為「出色的」，但更適合描述能力而非知名度。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: 'な形容詞「有名」',
          analysis: '有名{ゆうめい}是な形容詞，意為「有名的」。全世界的人都認識，表示這位畫家非常有名。',
          relatedRules: ['📖 本課 單字「有名」'],
        },
      },
      // Q7: vocab — 若い/可愛い (correctIndex: 1)
      {
        id: 'n5_u3_l1_q7',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: 'あの＿＿人{ひと}は大学生{だいがくせい}ですか。まだ二十歳{はたち}ぐらいですね。',
        stemZh: '那個＿＿的人是大學生嗎？好像才二十歲左右呢。',
        options: [
          { text: '高{たか}い', reason: '錯誤。高{たか}い意為「高的」，用來形容價格或高度，不直接形容人的年齡。' },
          { text: '若{わか}い', reason: '正確。才二十歲左右，表示很年輕。' },
          { text: '長{なが}い', reason: '錯誤。長{なが}い意為「長的」，不形容人的年齡。' },
          { text: '太{ふと}い', reason: '錯誤。太{ふと}い意為「粗的」，不形容人的年齡。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: 'い形容詞「若い」',
          analysis: '若{わか}い意為「年輕的」，形容人的年齡很小。二十歲左右的人可以用「若い」來形容。',
          relatedRules: ['📖 本課 單字「若い」'],
        },
      },
      // Q8: vocab — 綺麗 (correctIndex: 3)
      {
        id: 'n5_u3_l1_q8',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「綺麗{きれい}」はい形容詞{けいようし}ですか、な形容詞{けいようし}ですか。',
        stemZh: '「綺麗」是い形容詞還是な形容詞？',
        options: [
          { text: 'い形容詞。綺麗い部屋{へや}と言{い}う。', reason: '錯誤。綺麗はな形容詞。「きれい」以い結尾但不是い形容詞。' },
          { text: 'い形容詞。綺麗くないと言{い}う。', reason: '錯誤。綺麗の否定形は「きれいではない」。' },
          { text: 'どちらでもない。', reason: '錯誤。綺麗はな形容詞に分類される。' },
          { text: 'な形容詞。綺麗{きれい}な部屋{へや}と言{い}う。', reason: '正確。「綺麗」是な形容詞，修飾名詞時加「な」。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '特殊な形容詞「綺麗」',
          analysis: '「綺麗{きれい}」雖然以い結尾，但屬於な形容詞，修飾名詞時要加「な」：綺麗{きれい}な部屋{へや}。',
          relatedRules: ['📖 本課 單字「綺麗」、文法「な形容詞＋な＋名詞」'],
        },
      },
      // Q9: grammar — い形容詞修飾名詞 (correctIndex: 0)
      {
        id: 'n5_u3_l1_q9',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '＿＿建物{たてもの}がたくさんあります。（有很多高的建築。）',
        stemZh: '有很多高的建築。',
        options: [
          { text: '高{たか}い', reason: '正確。い形容詞直接放在名詞前面修飾。' },
          { text: '高{たか}いな', reason: '錯誤。い形容詞修飾名詞不需加「な」。' },
          { text: '高{たか}く', reason: '錯誤。「高く」是副詞形或連用形，不直接修飾名詞。' },
          { text: '高{たか}いの', reason: '錯誤。「の」不用於形容詞修飾名詞。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: 'い形容詞＋名詞',
          analysis: 'い形容詞直接放在名詞前面修飾，如「高{たか}い建物{たてもの}」（高的建築）。不需要加任何助詞。',
          relatedRules: ['📖 本課 文法「い形容詞＋名詞」'],
        },
      },
      // Q10: grammar — な形容詞修飾名詞 (correctIndex: 1)
      {
        id: 'n5_u3_l1_q10',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '静{しず}か＿＿部屋{へや}で勉強{べんきょう}します。',
        stemZh: '在安靜的房間裡讀書。',
        options: [
          { text: 'い', reason: '錯誤。「い」是い形容詞的語尾，「静か」是な形容詞。' },
          { text: 'な', reason: '正確。な形容詞修飾名詞時需加「な」。' },
          { text: 'の', reason: '錯誤。「の」是名詞連接助詞，不用於な形容詞修飾名詞。' },
          { text: 'く', reason: '錯誤。「く」是い形容詞的副詞形，不適用於な形容詞。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: 'な形容詞＋な＋名詞',
          analysis: '「静{しず}か」是な形容詞，修飾名詞時需加「な」，形成「静{しず}かな部屋{へや}」（安靜的房間）。',
          relatedRules: ['📖 本課 文法「な形容詞＋な＋名詞」'],
        },
      },
      // Q11: grammar — どんな (correctIndex: 2)
      {
        id: 'n5_u3_l1_q11',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: 'A：＿＿人{ひと}ですか。B：優{やさ}しい人{ひと}です。',
        stemZh: 'A：是什麼樣的人？ B：是溫柔的人。',
        options: [
          { text: 'どの', reason: '錯誤。「どの」是指定某個特定的，用於三個以上中選一個。' },
          { text: 'だれの', reason: '錯誤。「だれの」意為「誰的」，詢問所有者。' },
          { text: 'どんな', reason: '正確。「どんな＋名詞」用來詢問「什麼樣的～」。' },
          { text: 'いくつの', reason: '錯誤。「いくつの」意為「幾個的」，詢問數量。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '疑問詞「どんな＋名詞」',
          analysis: '「どんな＋名詞」用來詢問事物的性質或特徵，意為「什麼樣的～」。回答時用形容詞描述。',
          relatedRules: ['📖 本課 文法「どんな＋名詞」'],
        },
      },
      // Q12: grammar — い形容詞/な形容詞判斷 (correctIndex: 3)
      {
        id: 'n5_u3_l1_q12',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '次{つぎ}のうち、な形容詞{けいようし}はどれですか。',
        stemZh: '以下哪個是な形容詞？',
        options: [
          { text: '大{おお}きい', reason: '錯誤。大{おお}きい是い形容詞。' },
          { text: '高{たか}い', reason: '錯誤。高{たか}い是い形容詞。' },
          { text: '可愛{かわい}い', reason: '錯誤。可愛{かわい}い是い形容詞。' },
          { text: '立派{りっぱ}', reason: '正確。立派{りっぱ}是な形容詞，修飾名詞時用「立派な＋名詞」。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: 'い形容詞とな形容詞の分類',
          analysis: '立派{りっぱ}是な形容詞。本課的な形容詞有：静{しず}か、賑{にぎ}やか、綺麗{きれい}、有名{ゆうめい}、立派{りっぱ}。',
          relatedRules: ['📖 本課 文法「な形容詞」'],
        },
      },
      // Q13: grammar — どんな實際運用 (correctIndex: 0)
      {
        id: 'n5_u3_l1_q13',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: 'A：どんな町{まち}ですか。B：＿＿町{まち}です。',
        stemZh: 'A：是什麼樣的城鎮？ B：是＿＿的城鎮。',
        options: [
          { text: '賑{にぎ}やかな', reason: '正確。な形容詞修飾名詞時加「な」，回答「どんな」的提問。' },
          { text: '賑{にぎ}やか', reason: '錯誤。な形容詞修飾名詞時必須加「な」。' },
          { text: '賑{にぎ}やかい', reason: '錯誤。賑やか是な形容詞，不能加「い」。' },
          { text: '賑{にぎ}やかく', reason: '錯誤。な形容詞沒有「く」形。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '「どんな」的回答方式',
          analysis: '回答「どんな＋名詞」時，用形容詞修飾名詞。な形容詞如「賑{にぎ}やか」修飾名詞時要加「な」。',
          relatedRules: ['📖 本課 文法「どんな＋名詞」「な形容詞＋な＋名詞」'],
        },
      },
      // Q14: grammar — い形容詞並列 (correctIndex: 1)
      {
        id: 'n5_u3_l1_q14',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: 'あの美術館{びじゅつかん}は広{ひろ}＿＿明{あか}るいです。',
        stemZh: '那座美術館又寬敞又明亮。',
        options: [
          { text: 'いと', reason: '錯誤。い形容詞並列不用「と」。' },
          { text: 'くて', reason: '正確。い形容詞並列時去「い」加「くて」。広{ひろ}い→広{ひろ}くて。' },
          { text: 'で', reason: '錯誤。「で」是な形容詞的並列形式，不適用於い形容詞。' },
          { text: 'いで', reason: '錯誤。い形容詞並列不用「いで」。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: 'い形容詞的並列「〜くて」',
          analysis: 'い形容詞並列時，去掉「い」加「くて」。広{ひろ}い→広{ひろ}くて明{あか}るい（又寬敞又明亮）。',
          relatedRules: ['📖 本課 文法「い形容詞」'],
        },
      },
      // Q15: grammar — な形容詞並列 (correctIndex: 2)
      {
        id: 'n5_u3_l1_q15',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: 'あの部屋{へや}は静{しず}か＿＿きれいです。',
        stemZh: '那個房間又安靜又漂亮。',
        options: [
          { text: 'くて', reason: '錯誤。「くて」是い形容詞的並列形式，不適用於な形容詞。' },
          { text: 'な', reason: '錯誤。「な」用於修飾名詞，不用於形容詞並列。' },
          { text: 'で', reason: '正確。な形容詞並列時加「で」。静{しず}か→静{しず}かできれい。' },
          { text: 'と', reason: '錯誤。「と」用於名詞並列，不用於形容詞並列。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: 'な形容詞的並列「〜で」',
          analysis: 'な形容詞並列時加「で」。静{しず}か→静{しず}かできれい（又安靜又漂亮）。注意與い形容詞的「くて」區分。',
          relatedRules: ['📖 本課 文法「な形容詞」'],
        },
      },
    ] as UnifiedQuestion[],
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

    quizQuestions: [
      // Q1: vocab — 暑い (correctIndex: 0)
      {
        id: 'n5_u3_l2_q1',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「暑{あつ}い」の意味{いみ}はどれですか。',
        stemZh: '「暑い」的意思是哪個？',
        options: [
          { text: '熱', reason: '正確。暑{あつ}い意為「（天氣）熱的」。' },
          { text: '冷', reason: '錯誤。冷是寒{さむ}い。' },
          { text: '涼爽', reason: '錯誤。涼爽是涼{すず}しい。' },
          { text: '溫暖', reason: '錯誤。溫暖是暖{あたた}かい。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '天氣形容詞「暑い」',
          analysis: '暑{あつ}い意為「（天氣）熱的」，常用於夏天的描述。反義詞是寒{さむ}い（冷的）。',
          relatedRules: ['📖 本課 單字「暑い」'],
        },
      },
      // Q2: vocab — 寒い vs 暑い (correctIndex: 3)
      {
        id: 'n5_u3_l2_q2',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「寒{さむ}い」の反対{はんたい}の言葉{ことば}はどれですか。',
        stemZh: '「寒い」的相反詞是哪個？',
        options: [
          { text: '涼{すず}しい', reason: '錯誤。涼{すず}しい意為「涼爽的」，不是寒冷的反義詞。' },
          { text: '暖{あたた}かい', reason: '錯誤。暖{あたた}かい意為「溫暖的」，雖是相近概念但直接反義詞是暑{あつ}い。' },
          { text: '丈夫{じょうぶ}', reason: '錯誤。丈夫{じょうぶ}意為「結實的」，與溫度無關。' },
          { text: '暑{あつ}い', reason: '正確。暑{あつ}い（熱的）是寒{さむ}い（冷的）的反義詞。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '反義詞配對：寒い⟷暑い',
          analysis: '寒{さむ}い（冷的）和暑{あつ}い（熱的）是一組反義詞，用於描述天氣溫度。',
          relatedRules: ['📖 本課 單字「寒い」「暑い」'],
        },
      },
      // Q3: vocab — 天気 (correctIndex: 1)
      {
        id: 'n5_u3_l2_q3',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「天気{てんき}」の意味{いみ}はどれですか。',
        stemZh: '「天気」的意思是哪個？',
        options: [
          { text: '天空', reason: '錯誤。天空是空{そら}。' },
          { text: '天氣', reason: '正確。天気{てんき}意為「天氣」。' },
          { text: '風', reason: '錯誤。風是風{かぜ}。' },
          { text: '春天', reason: '錯誤。春天是春{はる}。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '名詞「天気」',
          analysis: '天気{てんき}意為「天氣」。「今日{きょう}の天気{てんき}」＝「今天的天氣」。',
          relatedRules: ['📖 本課 單字「天気」'],
        },
      },
      // Q4: vocab — 曇る (correctIndex: 2)
      {
        id: 'n5_u3_l2_q4',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '空{そら}が灰色{はいいろ}で太陽{たいよう}が見{み}えません。天気{てんき}は＿＿ています。',
        stemZh: '天空灰灰的看不到太陽。天氣＿＿著。',
        options: [
          { text: '晴{は}れ', reason: '錯誤。晴{は}れる意為放晴，看不到太陽不是放晴。' },
          { text: '降{ふ}っ', reason: '錯誤。降{ふ}る意為下雨雪，題目只說看不到太陽。' },
          { text: '曇{くも}っ', reason: '正確。看不到太陽、天空灰灰的就是「曇{くも}る」（起雲/陰天）。' },
          { text: '咲{さ}い', reason: '錯誤。咲{さ}く意為「開花」，與天氣無關。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '天氣動詞「曇る」',
          analysis: '曇{くも}る意為「陰天/起雲」，天空被雲遮住看不到太陽。「曇{くも}っている」是其進行式。',
          relatedRules: ['📖 本課 單字「曇る」'],
        },
      },
      // Q5: vocab — 季節 春夏秋 (correctIndex: 0)
      {
        id: 'n5_u3_l2_q5',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '桜{さくら}が咲{さ}く季節{きせつ}はいつですか。',
        stemZh: '櫻花盛開的季節是什麼時候？',
        options: [
          { text: '春{はる}', reason: '正確。櫻花在春天盛開。' },
          { text: '夏{なつ}', reason: '錯誤。夏天櫻花已經凋謝了。' },
          { text: '秋{あき}', reason: '錯誤。秋天是紅葉的季節。' },
          { text: '空{そら}', reason: '錯誤。空{そら}意為「天空」，不是季節。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '季節詞彙「春」',
          analysis: '春{はる}是春天。日本的春天以櫻花聞名。四季：春{はる}（春）、夏{なつ}（夏）、秋{あき}（秋）、冬{ふゆ}（冬）。',
          relatedRules: ['📖 本課 單字「春」'],
        },
      },
      // Q6: vocab — 大人/子供 (correctIndex: 1)
      {
        id: 'n5_u3_l2_q6',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「子供{こども}」の反対{はんたい}の言葉{ことば}はどれですか。',
        stemZh: '「子供」的相反詞是哪個？',
        options: [
          { text: '女{おんな}の子{こ}', reason: '錯誤。女{おんな}の子{こ}意為「女孩」，不是反義詞。' },
          { text: '大人{おとな}', reason: '正確。大人{おとな}（大人）是子供{こども}（孩子）的反義詞。' },
          { text: '男{おとこ}の子{こ}', reason: '錯誤。男{おとこ}の子{こ}意為「男孩」，不是反義詞。' },
          { text: '大勢{おおぜい}', reason: '錯誤。大勢{おおぜい}意為「許多人」，不是反義詞。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '反義詞配對：子供⟷大人',
          analysis: '子供{こども}（孩子）和大人{おとな}（大人）是一組反義詞。',
          relatedRules: ['📖 本課 單字「子供」「大人」'],
        },
      },
      // Q7: vocab — 降る/風/背 (correctIndex: 2)
      {
        id: 'n5_u3_l2_q7',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '冬{ふゆ}になると雪{ゆき}が＿＿ます。',
        stemZh: '到了冬天就會下雪。',
        options: [
          { text: '吹{ふ}き', reason: '錯誤。吹{ふ}く是「吹」，用於風。' },
          { text: '晴{は}れ', reason: '錯誤。晴{は}れる意為「放晴」，不是下雪。' },
          { text: '降{ふ}り', reason: '正確。降{ふ}る意為「下（雨雪）」。「雪が降る」＝下雪。' },
          { text: '曇{くも}り', reason: '錯誤。曇{くも}る意為「起雲/陰天」，不是下雪。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '天氣動詞「降る」',
          analysis: '降{ふ}る意為「下（雨或雪）」。「雪{ゆき}が降{ふ}る」＝下雪，「雨{あめ}が降{ふ}る」＝下雨。',
          relatedRules: ['📖 本課 單字「降る」'],
        },
      },
      // Q8: vocab — 丈夫 (correctIndex: 3)
      {
        id: 'n5_u3_l2_q8',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: 'この鞄{かばん}はとても＿＿です。十年{じゅうねん}使{つか}っても壊{こわ}れません。',
        stemZh: '這個包包非常＿＿。用了十年也不會壞。',
        options: [
          { text: '暑{あつ}い', reason: '錯誤。暑{あつ}い是形容天氣熱，不形容物品。' },
          { text: '涼{すず}しい', reason: '錯誤。涼{すず}しい意為「涼爽的」，不形容物品耐久。' },
          { text: '寒{さむ}い', reason: '錯誤。寒{さむ}い意為「冷的」，不形容物品。' },
          { text: '丈夫{じょうぶ}', reason: '正確。丈夫{じょうぶ}意為「結實的/耐用的」。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: 'な形容詞「丈夫」',
          analysis: '丈夫{じょうぶ}是な形容詞，意為「結實的/耐用的」。用了十年也不壞，表示非常結實。',
          relatedRules: ['📖 本課 單字「丈夫」'],
        },
      },
      // Q9: grammar — とても (correctIndex: 0)
      {
        id: 'n5_u3_l2_q9',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '今日{きょう}は＿＿暑{あつ}いです。（今天非常熱。）',
        stemZh: '今天非常熱。',
        options: [
          { text: 'とても', reason: '正確。「とても＋形容詞」表示「非常～」。' },
          { text: 'あまり', reason: '錯誤。「あまり」搭配否定形，表示「不太～」。' },
          { text: 'まだ', reason: '錯誤。「まだ」意為「還/仍然」，不表示程度。' },
          { text: 'もう', reason: '錯誤。「もう」意為「已經」，不表示「非常」。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '程度副詞「とても」',
          analysis: '「とても」放在形容詞前面，表示「非常～」。「とても暑{あつ}い」＝「非常熱」。',
          relatedRules: ['📖 本課 文法「とても＋形容詞」'],
        },
      },
      // Q10: grammar — すぎる (correctIndex: 3)
      {
        id: 'n5_u3_l2_q10',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '夏{なつ}は暑{あつ}＿＿。（夏天太熱了。）',
        stemZh: '夏天太熱了。',
        options: [
          { text: 'いです', reason: '錯誤。「暑いです」只是「很熱」，沒有「太～了」的語感。' },
          { text: 'くないです', reason: '錯誤。「暑くないです」是「不熱」，語意相反。' },
          { text: 'くなります', reason: '錯誤。「暑くなります」是「變熱」，不是「太熱了」。' },
          { text: 'すぎます', reason: '正確。い形容詞去掉「い」加「すぎる」表示「太～了」。暑い→暑すぎる。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '形容詞＋すぎる（太～了）',
          analysis: 'い形容詞去掉「い」加「すぎる/すぎます」表示「太～了」。暑{あつ}い→暑{あつ}すぎます。',
          relatedRules: ['📖 本課 文法「形容詞語幹＋すぎる」'],
        },
      },
      // Q11: grammar — なる（い形容詞） (correctIndex: 1)
      {
        id: 'n5_u3_l2_q11',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '秋{あき}になると涼{すず}し＿＿なります。',
        stemZh: '到了秋天就變涼爽了。',
        options: [
          { text: 'い', reason: '錯誤。い形容詞接「なる」時要去い加く。' },
          { text: 'く', reason: '正確。い形容詞接「なる」時，去「い」加「く」。涼{すず}しい→涼{すず}しくなる。' },
          { text: 'に', reason: '錯誤。「に」用於な形容詞接「なる」時。' },
          { text: 'で', reason: '錯誤。「で」不用於形容詞接「なる」。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: 'い形容詞＋く＋なる',
          analysis: 'い形容詞表示變化時，去「い」加「くなる」。涼{すず}しい→涼{すず}しくなる（變涼爽）。',
          relatedRules: ['📖 本課 文法「く/に＋なる」'],
        },
      },
      // Q12: grammar — なる（な形容詞） (correctIndex: 2)
      {
        id: 'n5_u3_l2_q12',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '体{からだ}が丈夫{じょうぶ}＿＿なりました。',
        stemZh: '身體變結實了。',
        options: [
          { text: 'く', reason: '錯誤。「く」用於い形容詞接「なる」。' },
          { text: 'な', reason: '錯誤。「な」用於修飾名詞，不用於接「なる」。' },
          { text: 'に', reason: '正確。な形容詞接「なる」時加「に」。丈夫{じょうぶ}→丈夫{じょうぶ}になる。' },
          { text: 'で', reason: '錯誤。「で」用於な形容詞並列，不用於接「なる」。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: 'な形容詞＋に＋なる',
          analysis: 'な形容詞表示變化時加「になる」。丈夫{じょうぶ}→丈夫{じょうぶ}になる（變結實）。與い形容詞的「くなる」區分。',
          relatedRules: ['📖 本課 文法「く/に＋なる」'],
        },
      },
      // Q13: grammar — すぎる（な形容詞） (correctIndex: 0)
      {
        id: 'n5_u3_l2_q13',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: 'この部屋{へや}は静{しず}か＿＿ます。ちょっと怖{こわ}いです。',
        stemZh: '這個房間太安靜了。有點可怕。',
        options: [
          { text: 'すぎ', reason: '正確。な形容詞直接加「すぎる」。静{しず}か→静{しず}かすぎる。' },
          { text: 'いすぎ', reason: '錯誤。な形容詞不加「い」再接「すぎる」。' },
          { text: 'くすぎ', reason: '錯誤。「くすぎる」不是正確的接續方式。' },
          { text: 'にすぎ', reason: '錯誤。な形容詞接「すぎる」時不加「に」。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: 'な形容詞＋すぎる',
          analysis: 'な形容詞直接加「すぎる/すぎます」。静{しず}か→静{しず}かすぎる（太安靜了）。不需要加「な」或其他助詞。',
          relatedRules: ['📖 本課 文法「形容詞語幹＋すぎる」'],
        },
      },
      // Q14: grammar — とても的位置 (correctIndex: 1)
      {
        id: 'n5_u3_l2_q14',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '春{はる}はとても＿＿くて気持{きも}ちいいです。',
        stemZh: '春天非常溫暖又舒服。',
        options: [
          { text: '暑{あつ}', reason: '錯誤。暑{あつ}い是「（天氣）熱的」，春天通常形容溫暖。' },
          { text: '暖{あたた}か', reason: '正確。「暖{あたた}かい」意為溫暖，去い加くて表並列。' },
          { text: '寒{さむ}', reason: '錯誤。寒{さむ}い意為「冷的」，春天不冷。' },
          { text: '涼{すず}し', reason: '錯誤。涼{すず}しい意為「涼爽的」，通常形容秋天。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '「とても＋形容詞」搭配並列',
          analysis: '「とても暖{あたた}かくて」＝「非常溫暖又…」。春天的天氣通常用暖{あたた}かい（溫暖的）來形容。',
          relatedRules: ['📖 本課 文法「とても＋形容詞」、單字「暖かい」'],
        },
      },
      // Q15: grammar — なる綜合 (correctIndex: 3)
      {
        id: 'n5_u3_l2_q15',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '冬{ふゆ}になると寒{さむ}＿＿。',
        stemZh: '到了冬天就會變冷。',
        options: [
          { text: 'いなります', reason: '錯誤。い形容詞接「なる」時要去い。' },
          { text: 'になります', reason: '錯誤。「に」用於な形容詞，寒{さむ}い是い形容詞。' },
          { text: 'でなります', reason: '錯誤。「で」不用於接「なる」。' },
          { text: 'くなります', reason: '正確。い形容詞接「なる」去い加く。寒{さむ}い→寒{さむ}くなる。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: 'い形容詞＋く＋なる（複習）',
          analysis: 'い形容詞接「なる」時，去「い」加「くなる/くなります」。寒{さむ}い→寒{さむ}くなります（變冷了）。',
          relatedRules: ['📖 本課 文法「く/に＋なる」'],
        },
      },
    ] as UnifiedQuestion[],
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

    quizQuestions: [
      // Q1: vocab — 赤い (correctIndex: 0)
      {
        id: 'n5_u3_l3_q1',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「赤{あか}い」の意味{いみ}はどれですか。',
        stemZh: '「赤い」的意思是哪個？',
        options: [
          { text: '紅', reason: '正確。赤{あか}い意為「紅色的」。' },
          { text: '藍', reason: '錯誤。藍是青{あお}い。' },
          { text: '白', reason: '錯誤。白是白{しろ}い。' },
          { text: '黑', reason: '錯誤。黑是黒{くろ}い。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '顏色詞彙「赤い」',
          analysis: '赤{あか}い意為「紅色的」。日文中大部分顏色詞是い形容詞，如赤{あか}い、青{あお}い、白{しろ}い、黒{くろ}い、黄色{きいろ}い。',
          relatedRules: ['📖 本課 單字「赤い」'],
        },
      },
      // Q2: vocab — 咲く (correctIndex: 1)
      {
        id: 'n5_u3_l3_q2',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '春{はる}になると花{はな}が＿＿ます。',
        stemZh: '到了春天花就會＿＿。',
        options: [
          { text: '降{ふ}り', reason: '錯誤。降{ふ}る意為「下（雨雪）」，不用於花。' },
          { text: '咲{さ}き', reason: '正確。咲{さ}く意為「開花」。「花{はな}が咲{さ}く」＝花開了。' },
          { text: '飲{の}み', reason: '錯誤。飲{の}む意為「喝」，與花無關。' },
          { text: '食{た}べ', reason: '錯誤。食{た}べる意為「吃」，與花無關。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '動詞「咲く」',
          analysis: '咲{さ}く是五段動詞，意為「開花」。「花{はな}が咲{さ}く」是很常見的搭配。',
          relatedRules: ['📖 本課 單字「咲く」'],
        },
      },
      // Q3: vocab — 緑/茶色 (correctIndex: 3)
      {
        id: 'n5_u3_l3_q3',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '秋{あき}の落{お}ち葉{ば}は何色{なにいろ}ですか。',
        stemZh: '秋天的落葉是什麼顏色？',
        options: [
          { text: '白{しろ}い', reason: '錯誤。白{しろ}い是白色，落葉不是白色。' },
          { text: '青{あお}い', reason: '錯誤。青{あお}い是藍色，落葉不是藍色。' },
          { text: '緑{みどり}', reason: '錯誤。緑{みどり}是綠色，是新葉的顏色。' },
          { text: '茶色{ちゃいろ}', reason: '正確。落葉通常是茶色（褐色）的。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '顏色詞彙「茶色」',
          analysis: '茶色{ちゃいろ}意為「茶色/褐色」。秋天的落葉通常變成茶色。注意「茶色」是名詞，不是い形容詞。',
          relatedRules: ['📖 本課 單字「茶色」'],
        },
      },
      // Q4: vocab — 甘い/辛い (correctIndex: 2)
      {
        id: 'n5_u3_l3_q4',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「辛{から}い」の反対{はんたい}の言葉{ことば}はどれですか。',
        stemZh: '「辛い」的相反詞是哪個？',
        options: [
          { text: '冷{つめ}たい', reason: '錯誤。冷{つめ}たい意為「冰的」，不是味覺的反義詞。' },
          { text: '熱{あつ}い', reason: '錯誤。熱{あつ}い意為「燙的」，不是辣的反義詞。' },
          { text: '甘{あま}い', reason: '正確。甘{あま}い（甜的）是辛{から}い（辣的）的反義詞。' },
          { text: '美味{おい}しい', reason: '錯誤。美味{おい}しい意為「好吃的」，不是反義詞。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '反義詞配對：辛い⟷甘い',
          analysis: '辛{から}い（辣的）和甘{あま}い（甜的）是一組味覺反義詞。',
          relatedRules: ['📖 本課 單字「辛い」「甘い」'],
        },
      },
      // Q5: vocab — 冷たい/熱い (correctIndex: 0)
      {
        id: 'n5_u3_l3_q5',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '夏{なつ}は＿＿飲{の}み物{もの}が人気{にんき}です。',
        stemZh: '夏天＿＿的飲料很受歡迎。',
        options: [
          { text: '冷{つめ}たい', reason: '正確。夏天熱，所以冰的飲料受歡迎。' },
          { text: '熱{あつ}い', reason: '錯誤。夏天通常不太想喝熱的飲料。' },
          { text: '辛{から}い', reason: '錯誤。辛{から}い意為「辣的」，不形容飲料溫度。' },
          { text: '黒{くろ}い', reason: '錯誤。黒{くろ}い意為「黑色的」，與溫度無關。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: 'い形容詞「冷たい」',
          analysis: '冷{つめ}たい意為「冰的/冰冷的」，用於觸摸得到的物品溫度。反義詞是熱{あつ}い（燙的）。',
          relatedRules: ['📖 本課 單字「冷たい」'],
        },
      },
      // Q6: vocab — 美味しい (correctIndex: 1)
      {
        id: 'n5_u3_l3_q6',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: 'このケーキはとても＿＿です！',
        stemZh: '這個蛋糕非常＿＿！',
        options: [
          { text: '白{しろ}い', reason: '錯誤。白{しろ}い是顏色，不形容味道。' },
          { text: '美味{おい}しい', reason: '正確。美味{おい}しい意為「好吃的」。' },
          { text: '黄色{きいろ}い', reason: '錯誤。黄色{きいろ}い是顏色，不形容味道。' },
          { text: '冷{つめ}たい', reason: '錯誤。冷{つめ}たい意為「冰的」，不直接形容好吃。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: 'い形容詞「美味しい」',
          analysis: '美味{おい}しい意為「好吃的/美味的」。形容食物或飲料的味道好。',
          relatedRules: ['📖 本課 單字「美味しい」'],
        },
      },
      // Q7: vocab — 雪/雨 (correctIndex: 2)
      {
        id: 'n5_u3_l3_q7',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「雪{ゆき}」の色{いろ}は何色{なにいろ}ですか。',
        stemZh: '「雪」是什麼顏色的？',
        options: [
          { text: '青{あお}い', reason: '錯誤。青{あお}い是藍色，雪不是藍色。' },
          { text: '黒{くろ}い', reason: '錯誤。黒{くろ}い是黑色，雪不是黑色。' },
          { text: '白{しろ}い', reason: '正確。雪是白色的。' },
          { text: '赤{あか}い', reason: '錯誤。赤{あか}い是紅色，雪不是紅色。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '詞彙搭配「白い雪」',
          analysis: '雪{ゆき}是白色的，所以用「白{しろ}い雪{ゆき}」來形容。「白{しろ}い雪{ゆき}がとてもきれい」＝白雪非常漂亮。',
          relatedRules: ['📖 本課 單字「雪」「白い」'],
        },
      },
      // Q8: vocab — 色 (correctIndex: 3)
      {
        id: 'n5_u3_l3_q8',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「色{いろ}」の意味{いみ}はどれですか。',
        stemZh: '「色」的意思是哪個？',
        options: [
          { text: '花', reason: '錯誤。花是花{はな}。' },
          { text: '雨', reason: '錯誤。雨是雨{あめ}。' },
          { text: '雪', reason: '錯誤。雪是雪{ゆき}。' },
          { text: '顏色', reason: '正確。色{いろ}意為「顏色」。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '名詞「色」',
          analysis: '色{いろ}意為「顏色」。「何色{なにいろ}」是「什麼顏色」的意思。',
          relatedRules: ['📖 本課 單字「色」'],
        },
      },
      // Q9: grammar — AはBより (correctIndex: 0)
      {
        id: 'n5_u3_l3_q9',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '夏{なつ}は冬{ふゆ}＿＿暑{あつ}いです。（夏天比冬天熱。）',
        stemZh: '夏天比冬天熱。',
        options: [
          { text: 'より', reason: '正確。「AはBより〜」表示「A比B更〜」。' },
          { text: 'まで', reason: '錯誤。「まで」表示「到〜為止」，不用於比較。' },
          { text: 'から', reason: '錯誤。「から」表示「從〜」，不用於比較。' },
          { text: 'だけ', reason: '錯誤。「だけ」表示「只有」，不用於比較。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '比較句型「AはBより〜」',
          analysis: '「AはBより〜」表示「A比B更〜」。夏{なつ}は冬{ふゆ}より暑{あつ}い＝夏天比冬天熱。',
          relatedRules: ['📖 本課 文法「AはBより〜」'],
        },
      },
      // Q10: grammar — AよりBのほうが (correctIndex: 1)
      {
        id: 'n5_u3_l3_q10',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '赤{あか}い花{はな}より青{あお}い花{はな}＿＿珍{めずら}しいです。',
        stemZh: '比起紅花，藍花更珍貴。',
        options: [
          { text: 'が', reason: '錯誤。單純的「が」不夠完整，需要「のほうが」。' },
          { text: 'のほうが', reason: '正確。「AよりBのほうが〜」表示「比起A，B更〜」。' },
          { text: 'のほうに', reason: '錯誤。「のほうに」用於方向，不用於比較程度。' },
          { text: 'のほうで', reason: '錯誤。「のほうで」不是正確的比較句型。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '比較句型「AよりBのほうが〜」',
          analysis: '「AよりBのほうが〜」表示「比起A，B更〜」。此處比起紅花，藍花更珍貴。',
          relatedRules: ['📖 本課 文法「AよりBのほうが〜」'],
        },
      },
      // Q11: grammar — より的位置 (correctIndex: 2)
      {
        id: 'n5_u3_l3_q11',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '甘{あま}い物{もの}＿＿辛{から}い物{もの}のほうが好{す}きです。',
        stemZh: '比起甜的東西，我更喜歡辣的。',
        options: [
          { text: 'は', reason: '錯誤。「は」是主題助詞，此處需要比較助詞。' },
          { text: 'が', reason: '錯誤。「が」是主格助詞，此處需要比較助詞。' },
          { text: 'より', reason: '正確。「Aより Bのほうが」＝「比起A，B更〜」。' },
          { text: 'から', reason: '錯誤。「から」表示原因，不用於比較。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '比較助詞「より」',
          analysis: '「より」是比較助詞，放在被比較的對象後面。「甘{あま}い物{もの}より辛{から}い物{もの}のほうが好{す}き」。',
          relatedRules: ['📖 本課 文法「AよりBのほうが〜」'],
        },
      },
      // Q12: grammar — どちら比較 (correctIndex: 3)
      {
        id: 'n5_u3_l3_q12',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '冷{つめ}たい飲{の}み物{もの}と熱{あつ}い飲{の}み物{もの}、＿＿がいいですか。',
        stemZh: '冰飲料和熱飲料，哪個好？',
        options: [
          { text: 'なに', reason: '錯誤。「なに/何」用於不確定範圍的提問，此處是二選一。' },
          { text: 'だれ', reason: '錯誤。「だれ」用來詢問「誰」。' },
          { text: 'いつ', reason: '錯誤。「いつ」用來詢問「什麼時候」。' },
          { text: 'どちら', reason: '正確。「どちら」用於二選一的比較提問。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '比較疑問詞「どちら」',
          analysis: '「どちら」用於兩個選項中選擇一個。「AとB、どちらがいいですか」＝「A和B，哪個好？」',
          relatedRules: ['📖 本課 文法「AはBより〜」'],
        },
      },
      // Q13: grammar — ほうがいい (correctIndex: 0)
      {
        id: 'n5_u3_l3_q13',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '冬{ふゆ}は熱{あつ}い＿＿がいいですね。',
        stemZh: '冬天的話熱的比較好呢。',
        options: [
          { text: 'ほう', reason: '正確。「〜ほうがいい」表示「〜比較好」。' },
          { text: 'より', reason: '錯誤。「より」是比較對象的標記，不接在形容詞後。' },
          { text: 'から', reason: '錯誤。「から」表示原因，不表示「比較好」。' },
          { text: 'まで', reason: '錯誤。「まで」表示終點，不表示「比較好」。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '「〜ほうがいい」表達偏好',
          analysis: '「〜ほうがいい」表示「〜比較好」。「熱{あつ}いほうがいい」＝「熱的比較好」。',
          relatedRules: ['📖 本課 文法「AよりBのほうが〜」'],
        },
      },
      // Q14: grammar — 比較綜合 (correctIndex: 1)
      {
        id: 'n5_u3_l3_q14',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: 'コーヒーより紅茶{こうちゃ}のほうが＿＿です。',
        stemZh: '比起咖啡，更喜歡紅茶。',
        options: [
          { text: '嫌{きら}い', reason: '錯誤。嫌{きら}い意為「討厭」，與「更喜歡」相反。' },
          { text: '好{す}き', reason: '正確。好{す}き意為「喜歡」，搭配「のほうが」表示更喜歡。' },
          { text: '多{おお}い', reason: '錯誤。多{おお}い意為「多」，不表示喜好。' },
          { text: '少{すく}ない', reason: '錯誤。少{すく}ない意為「少」，不表示喜好。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '比較句型表達喜好',
          analysis: '「AよりBのほうが好{す}きです」＝「比起A，更喜歡B」。此處比起咖啡更喜歡紅茶。',
          relatedRules: ['📖 本課 文法「AよりBのほうが〜」'],
        },
      },
      // Q15: grammar — 比較の理解 (correctIndex: 2)
      {
        id: 'n5_u3_l3_q15',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '「花{はな}は雪{ゆき}より美{うつく}しい」の意味{いみ}はどれですか。',
        stemZh: '「花は雪より美しい」的意思是哪個？',
        options: [
          { text: '雪比花更美。', reason: '錯誤。「AはBより」中A是較優的一方。' },
          { text: '花和雪一樣美。', reason: '錯誤。「より」表示比較，不是「一樣」。' },
          { text: '花比雪更美。', reason: '正確。「花{はな}は雪{ゆき}より美{うつく}しい」＝花比雪更美。' },
          { text: '花和雪都不美。', reason: '錯誤。句子是正面描述，沒有否定。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '比較句型的語意理解',
          analysis: '「AはBより〜」中，A是較優的一方。「花{はな}は雪{ゆき}より美{うつく}しい」＝花比雪更美。',
          relatedRules: ['📖 本課 文法「AはBより〜」'],
        },
      },
    ] as UnifiedQuestion[],
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

    quizQuestions: [
      // Q1: vocab — 飲み物 (correctIndex: 0)
      {
        id: 'n5_u3_l4_q1',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「飲{の}み物{もの}」の意味{いみ}はどれですか。',
        stemZh: '「飲み物」的意思是哪個？',
        options: [
          { text: '飲料', reason: '正確。飲{の}み物{もの}意為「飲料」。' },
          { text: '食物', reason: '錯誤。食物是食{た}べ物{もの}。' },
          { text: '盤子', reason: '錯誤。盤子是お皿{さら}。' },
          { text: '便當', reason: '錯誤。便當是お弁当{べんとう}。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '名詞「飲み物」',
          analysis: '飲{の}み物{もの}意為「飲料」。由「飲{の}む」（喝）＋「物{もの}」（東西）組成。類似構詞：食{た}べ物{もの}（食物）。',
          relatedRules: ['📖 本課 單字「飲み物」'],
        },
      },
      // Q2: vocab — 箸 (correctIndex: 3)
      {
        id: 'n5_u3_l4_q2',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「箸{はし}」はどんなものですか。',
        stemZh: '「箸」是什麼東西？',
        options: [
          { text: '湯匙', reason: '錯誤。湯匙是スプーン。' },
          { text: '叉子', reason: '錯誤。叉子是フォーク。' },
          { text: '小刀', reason: '錯誤。小刀是ナイフ。' },
          { text: '筷子', reason: '正確。箸{はし}意為筷子。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '餐具詞彙「箸」',
          analysis: '箸{はし}是筷子。日本也常用箸{はし}吃飯。其他餐具：スプーン（湯匙）、フォーク（叉子）、ナイフ（小刀）。',
          relatedRules: ['📖 本課 單字「箸」'],
        },
      },
      // Q3: vocab — 紅茶/牛乳/お酒 (correctIndex: 1)
      {
        id: 'n5_u3_l4_q3',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「牛乳{ぎゅうにゅう}」の意味{いみ}はどれですか。',
        stemZh: '「牛乳」的意思是哪個？',
        options: [
          { text: '紅茶', reason: '錯誤。紅茶是紅茶{こうちゃ}。' },
          { text: '牛奶', reason: '正確。牛乳{ぎゅうにゅう}意為「牛奶」。' },
          { text: '酒', reason: '錯誤。酒是お酒{さけ}。' },
          { text: '飯', reason: '錯誤。飯是ご飯{はん}。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '飲料詞彙「牛乳」',
          analysis: '牛乳{ぎゅうにゅう}意為「牛奶」。其他飲料：紅茶{こうちゃ}（紅茶）、お酒{さけ}（酒）。',
          relatedRules: ['📖 本課 單字「牛乳」'],
        },
      },
      // Q4: vocab — 茶碗/お皿/コップ (correctIndex: 2)
      {
        id: 'n5_u3_l4_q4',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: 'ご飯{はん}を食{た}べるとき、＿＿を使{つか}います。',
        stemZh: '吃飯的時候會用＿＿。',
        options: [
          { text: 'コップ', reason: '錯誤。コップ是水杯，用來喝水。' },
          { text: 'カップ', reason: '錯誤。カップ是杯子，通常用來喝咖啡或茶。' },
          { text: '茶碗{ちゃわん}', reason: '正確。茶碗{ちゃわん}是飯碗，用來盛飯。' },
          { text: 'ナイフ', reason: '錯誤。ナイフ是小刀，不用來盛飯。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '餐具詞彙「茶碗」',
          analysis: '茶碗{ちゃわん}意為「飯碗」，用來盛飯食用。「ご飯{はん}は茶碗{ちゃわん}で食{た}べます」。',
          relatedRules: ['📖 本課 單字「茶碗」'],
        },
      },
      // Q5: vocab — 多い/少ない (correctIndex: 0)
      {
        id: 'n5_u3_l4_q5',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「少{すく}ない」の反対{はんたい}の言葉{ことば}はどれですか。',
        stemZh: '「少ない」的相反詞是哪個？',
        options: [
          { text: '多{おお}い', reason: '正確。多{おお}い（多的）是少{すく}ない（少的）的反義詞。' },
          { text: '弱{よわ}い', reason: '錯誤。弱{よわ}い意為「弱的」，不是少的反義詞。' },
          { text: '同{おな}じ', reason: '錯誤。同{おな}じ意為「相同的」，不是反義詞。' },
          { text: '強{つよ}い', reason: '錯誤。強{つよ}い意為「強的」，不是少的反義詞。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '反義詞配對：少ない⟷多い',
          analysis: '少{すく}ない（少的）和多{おお}い（多的）是一組反義詞。',
          relatedRules: ['📖 本課 單字「少ない」「多い」'],
        },
      },
      // Q6: vocab — 強い/弱い (correctIndex: 1)
      {
        id: 'n5_u3_l4_q6',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: 'お酒{さけ}が＿＿人{ひと}はたくさん飲{の}めます。',
        stemZh: '酒量＿＿的人可以喝很多。',
        options: [
          { text: '弱{よわ}い', reason: '錯誤。弱{よわ}い意為「弱的」，酒量弱不能喝很多。' },
          { text: '強{つよ}い', reason: '正確。強{つよ}い意為「強的」，酒量強的人可以喝很多。' },
          { text: '同{おな}じ', reason: '錯誤。同{おな}じ意為「相同的」，不形容酒量。' },
          { text: '少{すく}ない', reason: '錯誤。少{すく}ない意為「少的」，不形容酒量。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: 'い形容詞「強い」的搭配',
          analysis: '「お酒{さけ}が強{つよ}い」意為「酒量好/酒量強」。反義詞是「お酒{さけ}が弱{よわ}い」（酒量弱）。',
          relatedRules: ['📖 本課 單字「強い」'],
        },
      },
      // Q7: vocab — お弁当/ご飯 (correctIndex: 2)
      {
        id: 'n5_u3_l4_q7',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '昼{ひる}ご飯{はん}に＿＿を持{も}って来{き}ました。',
        stemZh: '午餐帶了＿＿來。',
        options: [
          { text: 'お皿{さら}', reason: '錯誤。お皿{さら}是盤子，不是午餐。' },
          { text: 'フォーク', reason: '錯誤。フォーク是叉子，不是食物。' },
          { text: 'お弁当{べんとう}', reason: '正確。お弁当{べんとう}意為「便當」，常作為午餐帶出去。' },
          { text: 'コップ', reason: '錯誤。コップ是水杯，不是食物。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '名詞「お弁当」',
          analysis: 'お弁当{べんとう}意為「便當」，是日本人常帶的午餐。',
          relatedRules: ['📖 本課 單字「お弁当」'],
        },
      },
      // Q8: vocab — 同じ (correctIndex: 3)
      {
        id: 'n5_u3_l4_q8',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: 'この二{ふた}つの値段{ねだん}は＿＿です。どちらも五百円{ごひゃくえん}です。',
        stemZh: '這兩個的價格是＿＿的。都是五百日圓。',
        options: [
          { text: '多{おお}い', reason: '錯誤。多{おお}い意為「多的」，不表示相同。' },
          { text: '強{つよ}い', reason: '錯誤。強{つよ}い意為「強的」，不表示相同。' },
          { text: '少{すく}ない', reason: '錯誤。少{すく}ない意為「少的」，不表示相同。' },
          { text: '同{おな}じ', reason: '正確。同{おな}じ意為「相同的」。兩個都是五百日圓，所以是相同的。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '形容詞「同じ」',
          analysis: '同{おな}じ意為「相同的/一樣的」。「同{おな}じ値段{ねだん}」＝「相同的價格」。',
          relatedRules: ['📖 本課 單字「同じ」'],
        },
      },
      // Q9: grammar — 一番 (correctIndex: 2)
      {
        id: 'n5_u3_l4_q9',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: 'この店{みせ}＿＿一番{いちばん}美味{おい}しい料理{りょうり}は何{なん}ですか。',
        stemZh: '這間店最好吃的菜是什麼？',
        options: [
          { text: 'は', reason: '錯誤。「は」是主題助詞，此處需要範圍助詞。' },
          { text: 'が', reason: '錯誤。「が」是主格助詞，此處需要範圍助詞。' },
          { text: 'で', reason: '正確。「〜で一番」表示「在〜之中最〜」。' },
          { text: 'に', reason: '錯誤。「に」不用於表示最高級的範圍。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '最高級「〜で一番」',
          analysis: '「〜で一番{いちばん}」表示「在某範圍內最〜」。此處「この店{みせ}で一番{いちばん}」＝「在這間店裡最〜」。',
          relatedRules: ['📖 本課 文法「〜で一番」'],
        },
      },
      // Q10: grammar — 一番的位置 (correctIndex: 0)
      {
        id: 'n5_u3_l4_q10',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '飲{の}み物{もの}の中{なか}で、＿＿が一番{いちばん}好{す}きですか。',
        stemZh: '飲料之中，你最喜歡什麼？',
        options: [
          { text: '何{なに}', reason: '正確。「何{なに}が一番{いちばん}好{す}きですか」＝「最喜歡什麼？」' },
          { text: 'どこ', reason: '錯誤。「どこ」詢問地點，不詢問物品。' },
          { text: 'いつ', reason: '錯誤。「いつ」詢問時間，不詢問物品。' },
          { text: 'だれ', reason: '錯誤。「だれ」詢問人物，不詢問物品。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '「一番」搭配疑問詞',
          analysis: '「〜の中{なか}で何{なに}が一番{いちばん}〜ですか」用來詢問在某範圍中最〜的是什麼。',
          relatedRules: ['📖 本課 文法「〜で一番」'],
        },
      },
      // Q11: grammar — 一番實際運用 (correctIndex: 1)
      {
        id: 'n5_u3_l4_q11',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '日本{にほん}で一番{いちばん}人気{にんき}がある食{た}べ物{もの}は＿＿です。',
        stemZh: '日本最受歡迎的食物是＿＿。',
        options: [
          { text: 'ナイフ', reason: '錯誤。ナイフ是小刀，不是食物。' },
          { text: 'お弁当{べんとう}', reason: '正確。便當是日本非常受歡迎的食物之一。' },
          { text: 'コップ', reason: '錯誤。コップ是水杯，不是食物。' },
          { text: 'スプーン', reason: '錯誤。スプーン是湯匙，不是食物。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '「〜で一番」的回答',
          analysis: '「〜で一番{いちばん}人気{にんき}がある」＝「在〜中最受歡迎的」。回答時直接說出最〜的事物。',
          relatedRules: ['📖 本課 文法「〜で一番」'],
        },
      },
      // Q12: grammar — 一番搭配形容詞 (correctIndex: 3)
      {
        id: 'n5_u3_l4_q12',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: 'クラスで一番{いちばん}背{せ}が＿＿人{ひと}は田中{たなか}さんです。',
        stemZh: '班上個子最高的人是田中。',
        options: [
          { text: '低{ひく}い', reason: '錯誤。低{ひく}い意為「低的」，與「最高」相反。' },
          { text: '弱{よわ}い', reason: '錯誤。弱{よわ}い意為「弱的」，不形容身高。' },
          { text: '少{すく}ない', reason: '錯誤。少{すく}ない意為「少的」，不形容身高。' },
          { text: '高{たか}い', reason: '正確。「背{せ}が高{たか}い」意為「個子高」。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '「一番」搭配形容詞',
          analysis: '「一番{いちばん}＋形容詞」表示最〜。「一番{いちばん}背{せ}が高{たか}い」＝「個子最高的」。',
          relatedRules: ['📖 本課 文法「〜で一番」'],
        },
      },
      // Q13: grammar — 一番否定 (correctIndex: 0)
      {
        id: 'n5_u3_l4_q13',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '「このレストランで一番{いちばん}美味{おい}しくない料理{りょうり}」はどういう意味{いみ}ですか。',
        stemZh: '「このレストランで一番美味しくない料理」是什麼意思？',
        options: [
          { text: '這家餐廳最難吃的菜', reason: '正確。「一番美味しくない」＝「最不好吃的」＝最難吃的。' },
          { text: '這家餐廳最好吃的菜', reason: '錯誤。「美味しくない」是否定，意為「不好吃」。' },
          { text: '這家餐廳沒有好吃的菜', reason: '錯誤。句子指的是「最不好吃的」那一道，不是全部。' },
          { text: '這家餐廳的菜都很好吃', reason: '錯誤。句子包含否定，表示有不好吃的菜。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '「一番」搭配否定形容詞',
          analysis: '「一番{いちばん}〜ない」表示「最不〜」。「一番{いちばん}美味{おい}しくない」＝「最不好吃的」。',
          relatedRules: ['📖 本課 文法「〜で一番」'],
        },
      },
      // Q14: grammar — 一番回答 (correctIndex: 1)
      {
        id: 'n5_u3_l4_q14',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: 'A：餐具{さんぐ}の中{なか}で何{なに}を一番{いちばん}よく使{つか}いますか。B：＿＿を一番{いちばん}よく使{つか}います。',
        stemZh: 'A：餐具之中你最常用什麼？ B：最常用＿＿。',
        options: [
          { text: 'お弁当{べんとう}', reason: '錯誤。お弁当{べんとう}是食物，不是餐具。' },
          { text: '箸{はし}', reason: '正確。箸{はし}是筷子，是餐具之一。' },
          { text: 'ご飯{はん}', reason: '錯誤。ご飯{はん}是飯，不是餐具。' },
          { text: '紅茶{こうちゃ}', reason: '錯誤。紅茶{こうちゃ}是飲料，不是餐具。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '「一番」的問答搭配',
          analysis: '回答「何{なに}を一番{いちばん}〜ますか」時，選出一個最〜的事物。箸{はし}（筷子）是日本人最常用的餐具。',
          relatedRules: ['📖 本課 文法「〜で一番」、單字「箸」'],
        },
      },
      // Q15: grammar — 一番＋な形容詞 (correctIndex: 2)
      {
        id: 'n5_u3_l4_q15',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: 'この店{みせ}で一番{いちばん}人気{にんき}＿＿＿飲{の}み物{もの}は紅茶{こうちゃ}です。',
        stemZh: '這間店最受歡迎的飲料是紅茶。',
        options: [
          { text: 'の', reason: '錯誤。「人気」後接名詞時通常用「な」或「がある」。' },
          { text: 'い', reason: '錯誤。「人気」不是い形容詞，不能加「い」。' },
          { text: 'な', reason: '正確。「人気{にんき}」作為な形容詞修飾名詞時加「な」。' },
          { text: 'く', reason: '錯誤。「く」是い形容詞的活用，不適用於「人気」。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '「一番」搭配な形容詞修飾名詞',
          analysis: '「一番{いちばん}人気{にんき}な飲{の}み物{もの}」＝「最受歡迎的飲料」。な形容詞修飾名詞時需加「な」。',
          relatedRules: ['📖 本課 文法「〜で一番」'],
        },
      },
    ] as UnifiedQuestion[],
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

    quizQuestions: [
      // Q1: vocab — 頭 (correctIndex: 0)
      {
        id: 'n5_u3_l5_q1',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「頭{あたま}」の意味{いみ}はどれですか。',
        stemZh: '「頭」的意思是哪個？',
        options: [
          { text: '頭', reason: '正確。頭{あたま}意為「頭」。' },
          { text: '眼睛', reason: '錯誤。眼睛是目{め}。' },
          { text: '耳朵', reason: '錯誤。耳朵是耳{みみ}。' },
          { text: '鼻子', reason: '錯誤。鼻子是鼻{はな}。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '身體部位「頭」',
          analysis: '頭{あたま}意為「頭」。「頭{あたま}が痛{いた}い」＝頭痛。',
          relatedRules: ['📖 本課 單字「頭」'],
        },
      },
      // Q2: vocab — 目/耳/鼻/口 (correctIndex: 1)
      {
        id: 'n5_u3_l5_q2',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '音{おと}を聞{き}くとき、＿＿を使{つか}います。',
        stemZh: '聽聲音的時候會用＿＿。',
        options: [
          { text: '目{め}', reason: '錯誤。目{め}是眼睛，用來看東西。' },
          { text: '耳{みみ}', reason: '正確。耳{みみ}是耳朵，用來聽聲音。' },
          { text: '口{くち}', reason: '錯誤。口{くち}是嘴巴，用來說話或吃東西。' },
          { text: '手{て}', reason: '錯誤。手{て}是手，用來拿東西。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '身體部位「耳」',
          analysis: '耳{みみ}意為「耳朵」，用來聽聲音。「耳{みみ}が痛{いた}い」＝耳朵痛。',
          relatedRules: ['📖 本課 單字「耳」'],
        },
      },
      // Q3: vocab — 痛い (correctIndex: 3)
      {
        id: 'n5_u3_l5_q3',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「お腹{なか}が痛{いた}い」はどういう意味{いみ}ですか。',
        stemZh: '「お腹が痛い」是什麼意思？',
        options: [
          { text: '頭痛', reason: '錯誤。頭痛是「頭{あたま}が痛{いた}い」。' },
          { text: '腳痛', reason: '錯誤。腳痛是「足{あし}が痛{いた}い」。' },
          { text: '牙痛', reason: '錯誤。牙痛是「歯{は}が痛{いた}い」。' },
          { text: '肚子痛', reason: '正確。お腹{なか}＝肚子，痛{いた}い＝痛。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '身體部位＋痛い',
          analysis: '「お腹{なか}が痛{いた}い」表示肚子痛。「身體部位＋が痛{いた}い」是描述疼痛的基本句型。',
          relatedRules: ['📖 本課 單字「お腹」「痛い」'],
        },
      },
      // Q4: vocab — 病気/醫者 (correctIndex: 2)
      {
        id: 'n5_u3_l5_q4',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '体{からだ}の調子{ちょうし}が悪{わる}いとき、＿＿に行{い}きます。',
        stemZh: '身體不舒服的時候，去看＿＿。',
        options: [
          { text: '先生{せんせい}', reason: '錯誤。先生{せんせい}通常指老師，醫生是醫者{いしゃ}。' },
          { text: '友達{ともだち}', reason: '錯誤。友達{ともだち}是朋友，生病不是找朋友。' },
          { text: '醫者{いしゃ}', reason: '正確。醫者{いしゃ}意為「醫生」，生病時去看醫生。' },
          { text: '学生{がくせい}', reason: '錯誤。学生{がくせい}是學生，不能看病。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '名詞「醫者」',
          analysis: '醫者{いしゃ}意為「醫生」。身體不舒服或生病（病気{びょうき}）時要去看醫生。',
          relatedRules: ['📖 本課 單字「醫者」「病気」'],
        },
      },
      // Q5: vocab — 藥 (correctIndex: 0)
      {
        id: 'n5_u3_l5_q5',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '病気{びょうき}のとき、＿＿を飲{の}みます。',
        stemZh: '生病的時候吃＿＿。',
        options: [
          { text: '藥{くすり}', reason: '正確。藥{くすり}意為「藥」，生病時吃藥。' },
          { text: 'ハンカチ', reason: '錯誤。ハンカチ是手帕，不能吃。' },
          { text: 'スリッパ', reason: '錯誤。スリッパ是拖鞋，不能吃。' },
          { text: '上着{うわぎ}', reason: '錯誤。上着{うわぎ}是外套，不能吃。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '名詞「藥」',
          analysis: '藥{くすり}意為「藥」。「藥{くすり}を飲{の}む」＝吃藥。日文中「藥を飲む」用「飲{の}む」（喝）而非「食{た}べる」（吃）。',
          relatedRules: ['📖 本課 單字「藥」'],
        },
      },
      // Q6: vocab — 歯/手/足 (correctIndex: 1)
      {
        id: 'n5_u3_l5_q6',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「歯{は}」の意味{いみ}はどれですか。',
        stemZh: '「歯」的意思是哪個？',
        options: [
          { text: '手', reason: '錯誤。手是手{て}。' },
          { text: '牙齒', reason: '正確。歯{は}意為「牙齒」。' },
          { text: '腳', reason: '錯誤。腳是足{あし}。' },
          { text: '身體', reason: '錯誤。身體是體{からだ}。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '身體部位「歯」',
          analysis: '歯{は}意為「牙齒」。「歯{は}が痛{いた}い」＝牙痛。牙痛要去牙科（齒科），不是一般醫院。',
          relatedRules: ['📖 本課 單字「歯」'],
        },
      },
      // Q7: vocab — 上着/ハンカチ/スリッパ (correctIndex: 2)
      {
        id: 'n5_u3_l5_q7',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '寒{さむ}いとき、＿＿を着{き}ます。',
        stemZh: '冷的時候穿＿＿。',
        options: [
          { text: 'スリッパ', reason: '錯誤。スリッパ是拖鞋，穿在腳上。' },
          { text: 'ハンカチ', reason: '錯誤。ハンカチ是手帕，不是穿的。' },
          { text: '上着{うわぎ}', reason: '正確。上着{うわぎ}意為「外套」，冷的時候穿外套保暖。' },
          { text: '藥{くすり}', reason: '錯誤。藥{くすり}是藥，不是穿的。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '名詞「上着」',
          analysis: '上着{うわぎ}意為「外套」。「上着{うわぎ}を着{き}る」＝穿外套。寒冷時穿外套保暖。',
          relatedRules: ['📖 本課 單字「上着」'],
        },
      },
      // Q8: vocab — 色々/違う (correctIndex: 3)
      {
        id: 'n5_u3_l5_q8',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: 'このお店{みせ}には＿＿な商品{しょうひん}があります。（這家店有各式各樣的商品。）',
        stemZh: '這家店有各式各樣的商品。',
        options: [
          { text: '違{ちが}う', reason: '錯誤。違{ちが}う意為「不同」，但「各式各樣」用色々。' },
          { text: '痛{いた}い', reason: '錯誤。痛{いた}い意為「痛的」，不符合語境。' },
          { text: '大切{たいせつ}', reason: '錯誤。大切{たいせつ}意為「重要的」，不表示種類多。' },
          { text: '色々{いろいろ}', reason: '正確。色々{いろいろ}意為「各式各樣的」。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: 'な形容詞「色々」',
          analysis: '色々{いろいろ}意為「各式各樣的」，是な形容詞。「色々{いろいろ}な商品{しょうひん}」＝各式各樣的商品。',
          relatedRules: ['📖 本課 單字「色々」'],
        },
      },
      // Q9: grammar — の中で (correctIndex: 0)
      {
        id: 'n5_u3_l5_q9',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '果物{くだもの}の中{なか}＿＿、何{なに}が一番{いちばん}好{す}きですか。',
        stemZh: '水果之中，你最喜歡什麼？',
        options: [
          { text: 'で', reason: '正確。「〜の中{なか}で」表示「在〜之中」。' },
          { text: 'に', reason: '錯誤。「の中に」表示物品存在於空間中，不用於比較。' },
          { text: 'は', reason: '錯誤。「は」不與「の中」搭配表示範圍。' },
          { text: 'が', reason: '錯誤。「が」不與「の中」搭配表示範圍。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '「〜の中で」表示範圍',
          analysis: '「〜の中{なか}で」表示「在〜之中」，後接「一番{いちばん}」構成最高級。',
          relatedRules: ['📖 本課 文法「〜の中で」'],
        },
      },
      // Q10: grammar — の中でAが一番 (correctIndex: 1)
      {
        id: 'n5_u3_l5_q10',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '体{からだ}の中{なか}で、＿＿が一番{いちばん}大切{たいせつ}ですか。',
        stemZh: '身體之中，什麼最重要？',
        options: [
          { text: 'だれ', reason: '錯誤。「だれ」用來問「誰」，身體部位不用「だれ」。' },
          { text: 'どこ', reason: '正確。「どこ」在此指身體的哪個部位最重要。' },
          { text: 'いつ', reason: '錯誤。「いつ」用來問時間，不問身體部位。' },
          { text: 'いくつ', reason: '錯誤。「いくつ」用來問數量，不問身體部位。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '「の中で」搭配疑問詞',
          analysis: '「体{からだ}の中{なか}でどこが一番{いちばん}〜」用來詢問身體中哪個部位最〜。「どこ」在此指部位。',
          relatedRules: ['📖 本課 文法「〜の中でAが一番〜」'],
        },
      },
      // Q11: grammar — だけ (correctIndex: 2)
      {
        id: 'n5_u3_l5_q11',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: 'この藥{くすり}＿＿飲{の}んでください。（只要吃這個藥就好。）',
        stemZh: '只要吃這個藥就好。',
        options: [
          { text: 'を', reason: '錯誤。「を」是受詞助詞，無法表達「只有」。' },
          { text: 'も', reason: '錯誤。「も」表示「也」，無法表達限定。' },
          { text: 'だけ', reason: '正確。「だけ」表示「只有〜」，限定範圍。' },
          { text: 'まで', reason: '錯誤。「まで」表示「到〜為止」，不表示限定。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '限定助詞「だけ」',
          analysis: '「だけ」接在名詞後面，表示「只有〜」。「藥{くすり}だけ飲{の}んでください」＝「只要吃藥就好」。',
          relatedRules: ['📖 本課 文法「〜だけ」'],
        },
      },
      // Q12: grammar — だけ實際運用 (correctIndex: 3)
      {
        id: 'n5_u3_l5_q12',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '今日{きょう}は頭{あたま}＿＿痛{いた}いです。他{ほか}は大丈夫{だいじょうぶ}です。',
        stemZh: '今天只有頭痛。其他都沒問題。',
        options: [
          { text: 'も', reason: '錯誤。「も」表示「也」，暗示其他地方也痛。' },
          { text: 'は', reason: '錯誤。「は」是主題助詞，不強調「只有」。' },
          { text: 'と', reason: '錯誤。「と」表示「和」，不表示限定。' },
          { text: 'だけ', reason: '正確。「だけ」表示「只有〜」。只有頭痛，其他沒問題。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '「だけ」表示限定',
          analysis: '「頭{あたま}だけ痛{いた}い」＝「只有頭痛」。「だけ」限定範圍，表示除此之外沒有其他。',
          relatedRules: ['📖 本課 文法「〜だけ」'],
        },
      },
      // Q13: grammar — の中でAが一番 回答 (correctIndex: 0)
      {
        id: 'n5_u3_l5_q13',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: 'A：体{からだ}の中{なか}で一番{いちばん}痛{いた}いのはどこですか。B：＿＿が一番{いちばん}痛{いた}いです。',
        stemZh: 'A：身體中最痛的是哪裡？ B：＿＿最痛。',
        options: [
          { text: '頭{あたま}', reason: '正確。用身體部位名詞回答「どこが一番痛いですか」。' },
          { text: 'とても', reason: '錯誤。「とても」是程度副詞，不是身體部位。' },
          { text: 'だけ', reason: '錯誤。「だけ」是限定助詞，不是身體部位。' },
          { text: 'たくさん', reason: '錯誤。「たくさん」意為「很多」，不是身體部位。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '「の中で一番」的回答',
          analysis: '回答「どこが一番{いちばん}痛{いた}いですか」時，用具體的身體部位回答。「頭{あたま}が一番{いちばん}痛{いた}い」。',
          relatedRules: ['📖 本課 文法「〜の中でAが一番〜」'],
        },
      },
      // Q14: grammar — だけ搭配數量 (correctIndex: 1)
      {
        id: 'n5_u3_l5_q14',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '藥{くすり}は一{ひと}つ＿＿飲{の}んでください。二{ふた}つは飲{の}まないでください。',
        stemZh: '藥只吃一顆就好。不要吃兩顆。',
        options: [
          { text: 'も', reason: '錯誤。「も」表示「也」，不表示限定數量。' },
          { text: 'だけ', reason: '正確。「一{ひと}つだけ」＝「只有一個」。' },
          { text: 'から', reason: '錯誤。「から」表示「從」或「因為」，不表示限定。' },
          { text: 'まで', reason: '錯誤。「まで」表示「到〜為止」，不表示限定數量。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '「だけ」搭配數量詞',
          analysis: '「だけ」也可以接在數量詞後面，表示「只有〜個/〜次」。「一{ひと}つだけ」＝「只有一個」。',
          relatedRules: ['📖 本課 文法「〜だけ」'],
        },
      },
      // Q15: grammar — の中で綜合 (correctIndex: 2)
      {
        id: 'n5_u3_l5_q15',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '「季節{きせつ}の中{なか}で冬{ふゆ}が一番{いちばん}寒{さむ}い」の意味{いみ}はどれですか。',
        stemZh: '「季節の中で冬が一番寒い」的意思是哪個？',
        options: [
          { text: '冬天和其他季節一樣冷。', reason: '錯誤。「一番」表示最〜，不是「一樣」。' },
          { text: '冬天不是最冷的季節。', reason: '錯誤。句子肯定冬天是最冷的。' },
          { text: '四季之中冬天最冷。', reason: '正確。「季節{きせつ}の中{なか}で冬{ふゆ}が一番{いちばん}寒{さむ}い」＝四季中冬天最冷。' },
          { text: '只有冬天是冷的。', reason: '錯誤。「一番」表示最〜，不是「只有」。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '「の中で〜が一番」語意理解',
          analysis: '「〜の中{なか}でAが一番{いちばん}〜」＝「在〜之中A是最〜的」。季節之中冬天最冷。',
          relatedRules: ['📖 本課 文法「〜の中でAが一番〜」'],
        },
      },
    ] as UnifiedQuestion[],
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

    quizQuestions: [
      // Q1: vocab — 重い (correctIndex: 0)
      {
        id: 'n5_u3_l6_q1',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「重{おも}い」の意味{いみ}はどれですか。',
        stemZh: '「重い」的意思是哪個？',
        options: [
          { text: '重', reason: '正確。重{おも}い意為「重的」。' },
          { text: '輕', reason: '錯誤。輕是軽{かる}い。' },
          { text: '厚', reason: '錯誤。厚是厚{あつ}い。' },
          { text: '薄', reason: '錯誤。薄是薄{うす}い。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: 'い形容詞「重い」',
          analysis: '重{おも}い意為「重的」，反義詞是軽{かる}い（輕的）。',
          relatedRules: ['📖 本課 單字「重い」'],
        },
      },
      // Q2: vocab — 軽い (correctIndex: 3)
      {
        id: 'n5_u3_l6_q2',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「重{おも}い」の反対{はんたい}の言葉{ことば}はどれですか。',
        stemZh: '「重い」的相反詞是哪個？',
        options: [
          { text: '厚{あつ}い', reason: '錯誤。厚{あつ}い意為「厚的」，不是重的反義詞。' },
          { text: '薄{うす}い', reason: '錯誤。薄{うす}い意為「薄的」，不是重的反義詞。' },
          { text: '汚{きたな}い', reason: '錯誤。汚{きたな}い意為「髒的」，不是重的反義詞。' },
          { text: '軽{かる}い', reason: '正確。軽{かる}い（輕的）是重{おも}い（重的）的反義詞。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '反義詞配對：重い⟷軽い',
          analysis: '重{おも}い（重的）和軽{かる}い（輕的）是一組反義詞。',
          relatedRules: ['📖 本課 單字「重い」「軽い」'],
        },
      },
      // Q3: vocab — 丸い (correctIndex: 1)
      {
        id: 'n5_u3_l6_q3',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: 'ボールは＿＿です。',
        stemZh: '球是＿＿的。',
        options: [
          { text: '厚{あつ}い', reason: '錯誤。厚{あつ}い意為「厚的」，不形容球的形狀。' },
          { text: '丸{まる}い', reason: '正確。丸{まる}い意為「圓的」，球是圓形的。' },
          { text: '薄{うす}い', reason: '錯誤。薄{うす}い意為「薄的」，球不是薄的。' },
          { text: '汚{きたな}い', reason: '錯誤。汚{きたな}い意為「髒的」，不形容球的形狀。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: 'い形容詞「丸い」',
          analysis: '丸{まる}い意為「圓的」。球（ボール）是圓形的，所以用「丸{まる}い」來形容。',
          relatedRules: ['📖 本課 單字「丸い」'],
        },
      },
      // Q4: vocab — 厚い/薄い (correctIndex: 2)
      {
        id: 'n5_u3_l6_q4',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: 'この本{ほん}は500ページもあります。とても＿＿です。',
        stemZh: '這本書有500頁。非常＿＿。',
        options: [
          { text: '薄{うす}い', reason: '錯誤。500頁的書很厚，不是薄的。' },
          { text: '軽{かる}い', reason: '錯誤。500頁的書通常不輕。' },
          { text: '厚{あつ}い', reason: '正確。500頁的書非常厚。' },
          { text: '丸{まる}い', reason: '錯誤。丸{まる}い意為「圓的」，書不是圓的。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: 'い形容詞「厚い」',
          analysis: '厚{あつ}い意為「厚的」，反義詞是薄{うす}い（薄的）。500頁的書非常厚。',
          relatedRules: ['📖 本課 單字「厚い」'],
        },
      },
      // Q5: vocab — 大切/問題/意味 (correctIndex: 0)
      {
        id: 'n5_u3_l6_q5',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: 'この言葉{ことば}の＿＿を教{おし}えてください。',
        stemZh: '請教我這個詞語的＿＿。',
        options: [
          { text: '意味{いみ}', reason: '正確。意味{いみ}意為「意思」。詢問詞語的意思。' },
          { text: '質問{しつもん}', reason: '錯誤。質問{しつもん}意為「提問」，不是詞語的屬性。' },
          { text: 'ポケット', reason: '錯誤。ポケット意為「口袋」，與詞語無關。' },
          { text: '話{はなし}', reason: '錯誤。話{はなし}意為「故事/話」，不表示意思。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '名詞「意味」',
          analysis: '意味{いみ}意為「意思/意義」。「この言葉{ことば}の意味{いみ}」＝「這個詞語的意思」。',
          relatedRules: ['📖 本課 單字「意味」'],
        },
      },
      // Q6: vocab — 覚える/教える/聞く (correctIndex: 1)
      {
        id: 'n5_u3_l6_q6',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '新{あたら}しい言葉{ことば}を＿＿ました。もう忘{わす}れません。',
        stemZh: '記住了新的詞語。不會再忘了。',
        options: [
          { text: '聞{き}き', reason: '錯誤。聞{き}く意為「聽」，不是記住。' },
          { text: '覚{おぼ}え', reason: '正確。覚{おぼ}える意為「記住」。' },
          { text: '教{おし}え', reason: '錯誤。教{おし}える意為「教」，是別人教你。' },
          { text: '話{はな}し', reason: '錯誤。話{はな}す意為「說話」，不是記住。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '動詞「覚える」',
          analysis: '覚{おぼ}える意為「記住」。「言葉{ことば}を覚{おぼ}える」＝記住詞語。',
          relatedRules: ['📖 本課 單字「覚える」'],
        },
      },
      // Q7: vocab — 質問/答える (correctIndex: 2)
      {
        id: 'n5_u3_l6_q7',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '先生{せんせい}の質問{しつもん}に＿＿ます。',
        stemZh: '回答老師的問題。',
        options: [
          { text: '聞{き}き', reason: '錯誤。聞{き}く意為「聽/問」，不是回答。' },
          { text: '教{おし}え', reason: '錯誤。教{おし}える意為「教」，不是回答問題。' },
          { text: '答{こた}え', reason: '正確。答{こた}える意為「回答」。' },
          { text: '話{はな}し', reason: '錯誤。話{はな}す意為「說話」，不是回答。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '動詞「答える」',
          analysis: '答{こた}える意為「回答」。「質問{しつもん}に答{こた}える」＝回答問題。注意助詞用「に」。',
          relatedRules: ['📖 本課 單字「答える」「質問」'],
        },
      },
      // Q8: vocab — 汚い (correctIndex: 3)
      {
        id: 'n5_u3_l6_q8',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: 'この部屋{へや}は掃除{そうじ}していないのでとても＿＿です。',
        stemZh: '這個房間沒有打掃所以非常＿＿。',
        options: [
          { text: '丸{まる}い', reason: '錯誤。丸{まる}い意為「圓的」，與打掃無關。' },
          { text: '重{おも}い', reason: '錯誤。重{おも}い意為「重的」，與打掃無關。' },
          { text: '厚{あつ}い', reason: '錯誤。厚{あつ}い意為「厚的」，與打掃無關。' },
          { text: '汚{きたな}い', reason: '正確。汚{きたな}い意為「髒的」。沒打掃所以很髒。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: 'い形容詞「汚い」',
          analysis: '汚{きたな}い意為「髒的」。沒有打掃的房間會很髒。反義詞是綺麗{きれい}（漂亮的/乾淨的）。',
          relatedRules: ['📖 本課 單字「汚い」'],
        },
      },
      // Q9: grammar — でしょう (correctIndex: 0)
      {
        id: 'n5_u3_l6_q9',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '明日{あした}は晴{は}れる＿＿。（明天大概會放晴吧。）',
        stemZh: '明天大概會放晴吧。',
        options: [
          { text: 'でしょう', reason: '正確。「でしょう」表示禮貌的推測「大概〜吧」。' },
          { text: 'ます', reason: '錯誤。「ます」是敬體，表示確定的陳述。' },
          { text: 'ません', reason: '錯誤。「ません」是否定敬體。' },
          { text: 'たいです', reason: '錯誤。「たいです」表示願望「想做〜」。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '推測句型「〜でしょう」',
          analysis: '「でしょう」接在動詞原形後面，表示「大概〜吧」的禮貌推測。',
          relatedRules: ['📖 本課 文法「〜でしょう」'],
        },
      },
      // Q10: grammar — だろう (correctIndex: 1)
      {
        id: 'n5_u3_l6_q10',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: 'この問題{もんだい}は難{むずか}しい＿＿。（這個問題大概很難吧。）',
        stemZh: '這個問題大概很難吧。',
        options: [
          { text: 'です', reason: '錯誤。「です」是確定的陳述，不是推測。' },
          { text: 'だろう', reason: '正確。「だろう」是「でしょう」的隨意形，表示推測。' },
          { text: 'ますか', reason: '錯誤。「ますか」是疑問，不是推測。' },
          { text: 'ました', reason: '錯誤。「ました」是過去式，不是推測。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '推測句型「〜だろう」',
          analysis: '「だろう」是「でしょう」的常體/隨意形，表示推測。「難{むずか}しいだろう」＝「大概很難吧」。',
          relatedRules: ['📖 本課 文法「〜だろう」'],
        },
      },
      // Q11: grammar — でしょう vs だろう (correctIndex: 2)
      {
        id: 'n5_u3_l6_q11',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '「でしょう」と「だろう」の違{ちが}いは何{なん}ですか。',
        stemZh: '「でしょう」和「だろう」的差別是什麼？',
        options: [
          { text: '「でしょう」是否定，「だろう」是肯定。', reason: '錯誤。兩者都表示推測，不是肯定和否定的區別。' },
          { text: '「でしょう」是過去，「だろう」是現在。', reason: '錯誤。兩者都可以用於現在和未來的推測。' },
          { text: '「でしょう」較禮貌，「だろう」較隨意。', reason: '正確。「でしょう」是敬體推測，「だろう」是常體推測。' },
          { text: '意思完全不同。', reason: '錯誤。兩者意思相同，只是禮貌程度不同。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '「でしょう」vs「だろう」',
          analysis: '「でしょう」和「だろう」都表示推測（大概〜吧），但「でしょう」較禮貌（敬體），「だろう」較隨意（常體）。',
          relatedRules: ['📖 本課 文法「〜でしょう」「〜だろう」'],
        },
      },
      // Q12: grammar — でしょう搭配形容詞 (correctIndex: 3)
      {
        id: 'n5_u3_l6_q12',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: 'きっと先生{せんせい}が教{おし}えてくれる＿＿。',
        stemZh: '老師一定會教你的吧。',
        options: [
          { text: 'ます', reason: '錯誤。「ます」不表示推測。' },
          { text: 'ません', reason: '錯誤。「ません」是否定，語意相反。' },
          { text: 'だろう', reason: '錯誤。前面用「くれる」（原形），配「でしょう」更合適。' },
          { text: 'でしょう', reason: '正確。「きっと〜でしょう」＝「一定〜吧」，禮貌的推測。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '「きっと〜でしょう」',
          analysis: '「きっと」（一定）搭配「でしょう」，加強推測的確信度。「きっと教{おし}えてくれるでしょう」＝「一定會教你的吧」。',
          relatedRules: ['📖 本課 文法「〜でしょう」'],
        },
      },
      // Q13: grammar — だろう搭配名詞 (correctIndex: 0)
      {
        id: 'n5_u3_l6_q13',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: 'あの丸{まる}い物{もの}はボール＿＿。',
        stemZh: '那個圓的東西大概是球吧。',
        options: [
          { text: 'だろう', reason: '正確。名詞後直接接「だろう」表示推測。' },
          { text: 'いだろう', reason: '錯誤。名詞後不加「い」。' },
          { text: 'くだろう', reason: '錯誤。「く」是い形容詞活用，名詞不用。' },
          { text: 'なだろう', reason: '錯誤。名詞後直接接「だろう」，不加「な」。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '名詞＋だろう',
          analysis: '名詞後直接接「だろう」表示推測。「ボールだろう」＝「大概是球吧」。',
          relatedRules: ['📖 本課 文法「〜だろう」'],
        },
      },
      // Q14: grammar — でしょう搭配な形容詞 (correctIndex: 1)
      {
        id: 'n5_u3_l6_q14',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: 'この問題{もんだい}は大切{たいせつ}＿＿。',
        stemZh: '這個問題大概很重要吧。',
        options: [
          { text: 'なでしょう', reason: '錯誤。な形容詞接「でしょう」時不加「な」。' },
          { text: 'でしょう', reason: '正確。な形容詞直接接「でしょう」。「大切{たいせつ}でしょう」。' },
          { text: 'いでしょう', reason: '錯誤。「い」是い形容詞語尾，不適用於な形容詞。' },
          { text: 'くでしょう', reason: '錯誤。「く」是い形容詞活用，不適用於な形容詞。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: 'な形容詞＋でしょう',
          analysis: 'な形容詞接「でしょう」時，直接在語幹後加「でしょう」。「大切{たいせつ}でしょう」＝「大概很重要吧」。',
          relatedRules: ['📖 本課 文法「〜でしょう」'],
        },
      },
      // Q15: grammar — でしょう語意理解 (correctIndex: 2)
      {
        id: 'n5_u3_l6_q15',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '「この話{はなし}を覚{おぼ}えておくといいでしょう」はどういう意味{いみ}ですか。',
        stemZh: '「この話を覚えておくといいでしょう」是什麼意思？',
        options: [
          { text: '一定要記住這個故事。', reason: '錯誤。「でしょう」是推測/建議，不是命令。' },
          { text: '不需要記住這個故事。', reason: '錯誤。「いいでしょう」表示「大概好吧」，是正面建議。' },
          { text: '記住這個故事大概比較好吧。', reason: '正確。「〜といいでしょう」是柔和的建議。' },
          { text: '這個故事已經忘了。', reason: '錯誤。句子是建議記住，不是說已經忘了。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '「〜といいでしょう」委婉建議',
          analysis: '「〜といいでしょう」是委婉的建議，意為「〜的話大概比較好吧」。語氣比「〜てください」柔和。',
          relatedRules: ['📖 本課 文法「〜でしょう」'],
        },
      },
    ] as UnifiedQuestion[],
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

    quizQuestions: [
      // Q1: vocab — 忘れる (correctIndex: 0)
      {
        id: 'n5_u3_l7_q1',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「忘{わす}れる」の意味{いみ}はどれですか。',
        stemZh: '「忘れる」的意思是哪個？',
        options: [
          { text: '忘記', reason: '正確。忘{わす}れる意為「忘記」。' },
          { text: '知道', reason: '錯誤。知道是知{し}る。' },
          { text: '學習', reason: '錯誤。學習是勉強{べんきょう}する。' },
          { text: '練習', reason: '錯誤。練習是練習{れんしゅう}する。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '動詞「忘れる」',
          analysis: '忘{わす}れる意為「忘記」，是一段動詞。反義詞是覚{おぼ}える（記住）。',
          relatedRules: ['📖 本課 單字「忘れる」'],
        },
      },
      // Q2: vocab — 勉強/練習 (correctIndex: 3)
      {
        id: 'n5_u3_l7_q2',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '日本語{にほんご}を上手{じょうず}になりたいなら、毎日{まいにち}＿＿してください。',
        stemZh: '如果想要日語變好，請每天＿＿。',
        options: [
          { text: '説明{せつめい}', reason: '錯誤。説明{せつめい}意為「說明」，不是日常練習。' },
          { text: '正解{せいかい}', reason: '錯誤。正解{せいかい}意為「正確答案」，是名詞。' },
          { text: '宿題{しゅくだい}', reason: '錯誤。宿題{しゅくだい}意為「作業」，不能直接作動詞用。' },
          { text: '練習{れんしゅう}', reason: '正確。練習{れんしゅう}する意為「練習」。每天練習才能進步。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '名詞「練習」',
          analysis: '練習{れんしゅう}意為「練習」。「練習{れんしゅう}する」＝做練習。每天練習日語才能進步。',
          relatedRules: ['📖 本課 單字「練習」'],
        },
      },
      // Q3: vocab — 宿題/授業 (correctIndex: 1)
      {
        id: 'n5_u3_l7_q3',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '先生{せんせい}が家{いえ}でやるように出{だ}した課題{かだい}は何{なん}ですか。',
        stemZh: '老師出的要在家做的課題叫什麼？',
        options: [
          { text: '授業{じゅぎょう}', reason: '錯誤。授業{じゅぎょう}意為「上課」，是在學校的活動。' },
          { text: '宿題{しゅくだい}', reason: '正確。宿題{しゅくだい}意為「作業/功課」，在家裡完成。' },
          { text: '説明{せつめい}', reason: '錯誤。説明{せつめい}意為「說明」。' },
          { text: '勉強{べんきょう}', reason: '錯誤。勉強{べんきょう}意為「學習」，是一般行為。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '名詞「宿題」',
          analysis: '宿題{しゅくだい}意為「作業/功課」。老師指定的在家完成的課題就是宿題。',
          relatedRules: ['📖 本課 單字「宿題」'],
        },
      },
      // Q4: vocab — 難しい/易しい (correctIndex: 2)
      {
        id: 'n5_u3_l7_q4',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「難{むずか}しい」の反対{はんたい}の言葉{ことば}はどれですか。',
        stemZh: '「難しい」的相反詞是哪個？',
        options: [
          { text: '大変{たいへん}', reason: '錯誤。大変{たいへん}意為「辛苦」，是近義詞而非反義詞。' },
          { text: '便利{べんり}', reason: '錯誤。便利{べんり}意為「方便」，與難度無關。' },
          { text: '易{やさ}しい', reason: '正確。易{やさ}しい意為「簡單」，是難{むずか}しい的反義詞。' },
          { text: '大丈夫{だいじょうぶ}', reason: '錯誤。大丈夫{だいじょうぶ}意為「沒關係」，與難度無關。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '反義詞配對：難しい⟷易しい',
          analysis: '難{むずか}しい（難的）和易{やさ}しい（簡單的）是一組反義詞。',
          relatedRules: ['📖 本課 單字「難しい」「易しい」'],
        },
      },
      // Q5: vocab — 便利 (correctIndex: 0)
      {
        id: 'n5_u3_l7_q5',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: 'スマホはとても＿＿です。何{なん}でもすぐ調{しら}べられます。',
        stemZh: '手機非常＿＿。什麼都能馬上查。',
        options: [
          { text: '便利{べんり}', reason: '正確。便利{べんり}意為「方便的」。手機能查任何東西，非常方便。' },
          { text: '大変{たいへん}', reason: '錯誤。大変{たいへん}意為「辛苦的」，不符合語境。' },
          { text: '難{むずか}しい', reason: '錯誤。難{むずか}しい意為「難的」，不符合語境。' },
          { text: '本当{ほんとう}', reason: '錯誤。本当{ほんとう}意為「真的」，不形容方便。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: 'な形容詞「便利」',
          analysis: '便利{べんり}是な形容詞，意為「方便的」。什麼都能查到，所以很方便。',
          relatedRules: ['📖 本課 單字「便利」'],
        },
      },
      // Q6: vocab — 大変/大丈夫 (correctIndex: 1)
      {
        id: 'n5_u3_l7_q6',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '仕事{しごと}がたくさんあって、毎日{まいにち}とても＿＿です。',
        stemZh: '工作很多，每天都非常＿＿。',
        options: [
          { text: '大丈夫{だいじょうぶ}', reason: '錯誤。大丈夫{だいじょうぶ}意為「沒關係」，與辛苦不同。' },
          { text: '大変{たいへん}', reason: '正確。大変{たいへん}意為「辛苦的」。工作很多所以很辛苦。' },
          { text: '全部{ぜんぶ}', reason: '錯誤。全部{ぜんぶ}意為「全部」，是名詞不是形容詞。' },
          { text: '正解{せいかい}', reason: '錯誤。正解{せいかい}意為「正確答案」，與辛苦無關。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: 'な形容詞「大変」',
          analysis: '大変{たいへん}意為「辛苦的/嚴重的」。工作很多導致每天很辛苦。',
          relatedRules: ['📖 本課 單字「大変」'],
        },
      },
      // Q7: vocab — 本当/全部/説明 (correctIndex: 3)
      {
        id: 'n5_u3_l7_q7',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '宿題{しゅくだい}を＿＿終{お}わらせました。一{ひと}つも残{のこ}っていません。',
        stemZh: '把作業＿＿做完了。一個都沒剩。',
        options: [
          { text: '本当{ほんとう}に', reason: '錯誤。本当{ほんとう}に意為「真的」，不表示完成程度。' },
          { text: '少{すこ}し', reason: '錯誤。少{すこ}し意為「一點點」，與全部做完矛盾。' },
          { text: '大変{たいへん}', reason: '錯誤。大変{たいへん}意為「辛苦」，不表示完成程度。' },
          { text: '全部{ぜんぶ}', reason: '正確。全部{ぜんぶ}意為「全部」。一個都沒剩，表示全部做完了。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '名詞/副詞「全部」',
          analysis: '全部{ぜんぶ}意為「全部」。「全部{ぜんぶ}終{お}わらせた」＝全部做完了。',
          relatedRules: ['📖 本課 單字「全部」'],
        },
      },
      // Q8: vocab — 知る (correctIndex: 2)
      {
        id: 'n5_u3_l7_q8',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: 'この漢字{かんじ}の読{よ}み方{かた}を＿＿いますか。',
        stemZh: '你知道這個漢字怎麼念嗎？',
        options: [
          { text: '忘{わす}れて', reason: '錯誤。忘{わす}れる意為「忘記」，不是詢問是否知道。' },
          { text: '勉強{べんきょう}して', reason: '錯誤。勉強{べんきょう}する意為「學習」，不符合句型。' },
          { text: '知{し}って', reason: '正確。「知{し}っていますか」＝「你知道嗎？」' },
          { text: '練習{れんしゅう}して', reason: '錯誤。練習{れんしゅう}する意為「練習」，不符合句型。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '動詞「知る」的用法',
          analysis: '知{し}る意為「知道」。詢問是否知道時用「知{し}っていますか」（進行式）。否定形是「知{し}りません」。',
          relatedRules: ['📖 本課 單字「知る」'],
        },
      },
      // Q9: grammar — なあ (correctIndex: 1)
      {
        id: 'n5_u3_l7_q9',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '宿題{しゅくだい}が多{おお}い＿＿。（作業好多啊。）',
        stemZh: '作業好多啊。',
        options: [
          { text: 'よ', reason: '錯誤。「よ」用於告知對方新資訊，不是感嘆。' },
          { text: 'なあ', reason: '正確。「なあ」是感嘆語氣助詞，表示自言自語的感慨。' },
          { text: 'ね', reason: '錯誤。「ね」用於尋求共鳴，不是自言自語的感嘆。' },
          { text: 'か', reason: '錯誤。「か」是疑問助詞，表示提問。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '感嘆語氣「〜なあ」',
          analysis: '「なあ」放在句尾，表達說話者的感嘆或自言自語。「多{おお}いなあ」＝「好多啊」。',
          relatedRules: ['📖 本課 文法「〜なあ」'],
        },
      },
      // Q10: grammar — なあ搭配形容詞 (correctIndex: 0)
      {
        id: 'n5_u3_l7_q10',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '辞書{じしょ}で調{しら}べると便利{べんり}だ＿＿。',
        stemZh: '用辭典查的話真方便啊。',
        options: [
          { text: 'なあ', reason: '正確。な形容詞接「なあ」時用「だ＋なあ」。「便利{べんり}だなあ」。' },
          { text: 'よ', reason: '錯誤。「よ」不用於表達個人感嘆。' },
          { text: 'ね', reason: '錯誤。「ね」用於尋求共鳴，語感不同。' },
          { text: 'か', reason: '錯誤。「か」表示疑問，不是感嘆。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: 'な形容詞＋だ＋なあ',
          analysis: 'な形容詞接「なあ」時用「だなあ」。「便利{べんり}だなあ」＝「真方便啊」。い形容詞直接加「なあ」。',
          relatedRules: ['📖 本課 文法「〜なあ」'],
        },
      },
      // Q11: grammar — なあ搭配い形容詞 (correctIndex: 2)
      {
        id: 'n5_u3_l7_q11',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: 'この問題{もんだい}は難{むずか}しい＿＿。全然{ぜんぜん}分{わ}からないよ。',
        stemZh: '這個問題好難啊。完全不會呢。',
        options: [
          { text: 'だなあ', reason: '錯誤。い形容詞不加「だ」。「だなあ」用於な形容詞。' },
          { text: 'でなあ', reason: '錯誤。い形容詞不用「で」形接「なあ」。' },
          { text: 'なあ', reason: '正確。い形容詞直接加「なあ」。「難{むずか}しいなあ」。' },
          { text: 'ななあ', reason: '錯誤。「ななあ」不是正確的接續方式。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: 'い形容詞＋なあ',
          analysis: 'い形容詞直接加「なあ」表示感嘆。「難{むずか}しいなあ」＝「好難啊」。不需要加「だ」。',
          relatedRules: ['📖 本課 文法「〜なあ」'],
        },
      },
      // Q12: grammar — なあ搭配動詞 (correctIndex: 3)
      {
        id: 'n5_u3_l7_q12',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '日本{にほん}に行{い}きたい＿＿。（好想去日本啊。）',
        stemZh: '好想去日本啊。',
        options: [
          { text: 'よ', reason: '錯誤。「よ」用於告知，不是自言自語的感嘆。' },
          { text: 'ね', reason: '錯誤。「ね」用於確認/共鳴，不是自言自語。' },
          { text: 'か', reason: '錯誤。「か」是疑問助詞。' },
          { text: 'なあ', reason: '正確。「〜たいなあ」表示「好想做〜啊」的感嘆。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '「〜たい＋なあ」表示願望感嘆',
          analysis: '「〜たいなあ」表示「好想做〜啊」的感嘆。「行{い}きたいなあ」＝「好想去啊」。語氣比「〜たい」更有感情。',
          relatedRules: ['📖 本課 文法「〜なあ」'],
        },
      },
      // Q13: grammar — なあ vs ね vs よ (correctIndex: 0)
      {
        id: 'n5_u3_l7_q13',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '「なあ」と「ね」の違{ちが}いは何{なん}ですか。',
        stemZh: '「なあ」和「ね」的差別是什麼？',
        options: [
          { text: '「なあ」是自言自語的感嘆，「ね」是尋求共鳴。', reason: '正確。「なあ」偏向自言自語，「ね」偏向與對方互動。' },
          { text: '「なあ」是疑問，「ね」是感嘆。', reason: '錯誤。「なあ」才是感嘆，「か」是疑問。' },
          { text: '意思完全相同。', reason: '錯誤。兩者語感不同。' },
          { text: '「なあ」是禮貌的，「ね」是不禮貌的。', reason: '錯誤。禮貌程度無關，主要是語感差異。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '語氣助詞比較：なあ vs ね',
          analysis: '「なあ」偏向自言自語的感嘆，「ね」偏向與對方確認或尋求共鳴。「多いなあ」（自己感嘆）vs「多いですね」（跟對方說）。',
          relatedRules: ['📖 本課 文法「〜なあ」'],
        },
      },
      // Q14: grammar — なあ名詞 (correctIndex: 1)
      {
        id: 'n5_u3_l7_q14',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '本当{ほんとう}に大変{たいへん}だ＿＿。授業{じゅぎょう}の説明{せつめい}を忘{わす}れてしまったよ。',
        stemZh: '真的好辛苦啊。上課的說明都忘了。',
        options: [
          { text: 'か', reason: '錯誤。「か」是疑問，不是感嘆。' },
          { text: 'なあ', reason: '正確。「大変{たいへん}だなあ」表示「好辛苦啊」的感嘆。' },
          { text: 'で', reason: '錯誤。「で」是助詞，不用於句尾感嘆。' },
          { text: 'を', reason: '錯誤。「を」是受詞助詞，不用於句尾。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '「〜だなあ」感嘆表達',
          analysis: '「大変{たいへん}だなあ」＝「好辛苦啊」。な形容詞和名詞接「なあ」時要加「だ」。',
          relatedRules: ['📖 本課 文法「〜なあ」'],
        },
      },
      // Q15: grammar — なあ綜合理解 (correctIndex: 2)
      {
        id: 'n5_u3_l7_q15',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '「勉強{べんきょう}すれば正解{せいかい}が分{わ}かるようになるでしょう」はどういう意味{いみ}ですか。',
        stemZh: '「勉強すれば正解が分かるようになるでしょう」是什麼意思？',
        options: [
          { text: '不用讀書也能知道答案。', reason: '錯誤。「勉強すれば」表示「如果讀書的話」，是條件。' },
          { text: '讀書是沒有用的。', reason: '錯誤。句子肯定讀書的效果。' },
          { text: '只要用功讀書，大概就能知道正確答案了吧。', reason: '正確。「〜すれば〜でしょう」表示條件搭配推測。' },
          { text: '已經知道正確答案了。', reason: '錯誤。「でしょう」是推測未來，不是陳述現狀。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '條件句＋推測的綜合理解',
          analysis: '「〜すれば〜でしょう」表示「如果做〜的話，大概就會〜吧」。「勉強{べんきょう}すれば」＝如果用功讀書。',
          relatedRules: ['📖 本課 單字「勉強」「正解」'],
        },
      },
    ] as UnifiedQuestion[],
  },

  // ============================================================
  // 単元テスト: 單元綜合測驗 (15 題 Unit 3 + 5 題 Unit 2 複習)
  // ============================================================
  {
    id: 'n5_u3_test',
    unitId: 'n5_u3',
    order: 8,
    titleJp: '単元{たんげん}テスト',
    titleZh: '單元綜合測驗',
    objectives: [
      '綜合複習第三單元所有文法與單字',
      '回顧第二單元重點內容',
    ],

    vocabulary: [],
    grammarIds: [],
    grammarSummaries: [],
    dialogue: [],

    quizQuestions: [
      // ────────────────────────────────────────
      // Unit 3 題目 (Q1–Q15)
      // ────────────────────────────────────────

      // Q1: vocab — い形容詞 (L1) (correctIndex: 2)
      {
        id: 'n5_u3_test_q1',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「広{ひろ}い」の反対語{はんたいご}はどれですか。',
        stemZh: '「広い」（寬）的反義詞是哪個？',
        options: [
          { text: '長{なが}い', reason: '錯誤。長い是「長」，概念不同。' },
          { text: '低{ひく}い', reason: '錯誤。低い是「低」，概念不同。' },
          { text: '狭{せま}い', reason: '正確。広{ひろ}い（寬）⇔ 狭{せま}い（狹窄）。' },
          { text: '暗{くら}い', reason: '錯誤。暗い是「暗」，概念不同。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: 'い形容詞反義：広い ⇔ 狭い',
          analysis: '広{ひろ}い意為「寬敞的」，反義詞是狭{せま}い（狹窄的）。兩者常用於描述空間大小。',
          relatedRules: ['📖 U3 L1 單字「広い」「狭い」'],
        },
      },
      // Q2: grammar — な形容詞修飾名詞 (L1) (correctIndex: 1)
      {
        id: 'n5_u3_test_q2',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '静{しず}か＿＿部屋{へや}で勉強{べんきょう}します。',
        stemZh: '在安靜的房間裡學習。',
        options: [
          { text: 'い', reason: '錯誤。「い」用於い形容詞，「静か」是な形容詞。' },
          { text: 'な', reason: '正確。な形容詞修飾名詞時需加「な」。' },
          { text: 'の', reason: '錯誤。「の」不用於な形容詞修飾名詞。' },
          { text: 'に', reason: '錯誤。「に」用於な形容詞副詞化，此處是修飾名詞。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: 'な形容詞＋な＋名詞',
          analysis: '「静{しず}か」是な形容詞，修飾名詞時必須加「な」：静かな部屋＝安靜的房間。',
          relatedRules: ['📖 U3 L1 文法「な形容詞＋な＋名詞」'],
        },
      },
      // Q3: vocab — 天氣 (L2) (correctIndex: 0)
      {
        id: 'n5_u3_test_q3',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「涼{すず}しい」の意味{いみ}はどれですか。',
        stemZh: '「涼しい」的意思是哪個？',
        options: [
          { text: '涼爽', reason: '正確。涼{すず}しい意為「涼爽的」。' },
          { text: '寒冷', reason: '錯誤。寒冷是寒{さむ}い。' },
          { text: '炎熱', reason: '錯誤。炎熱是暑{あつ}い。' },
          { text: '溫暖', reason: '錯誤。溫暖是暖{あたた}かい。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '天氣形容詞「涼しい」',
          analysis: '涼{すず}しい意為涼爽的，常用於描述秋天的天氣。四季氣溫：暑{あつ}い（熱）、涼{すず}しい（涼爽）、暖{あたた}かい（溫暖）、寒{さむ}い（冷）。',
          relatedRules: ['📖 U3 L2 單字「涼しい」'],
        },
      },
      // Q4: grammar — すぎる (L2) (correctIndex: 3)
      {
        id: 'n5_u3_test_q4',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: 'この荷物{にもつ}は重{おも}＿＿。持{も}てません。',
        stemZh: '這個行李太重了。拿不動。',
        options: [
          { text: 'くない', reason: '錯誤。「くない」是否定形，與後文「拿不動」矛盾。' },
          { text: 'くなる', reason: '錯誤。「くなる」表示「變得〜」，不是「太〜」。' },
          { text: 'いです', reason: '錯誤。單純描述「重」，但缺少「太〜」的程度感。' },
          { text: 'すぎます', reason: '正確。「重{おも}すぎる」＝「太重了」。い形容詞去い＋すぎる。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '「〜すぎる」表示過度',
          analysis: 'い形容詞去掉「い」後加「すぎる」表示「太〜了」。重{おも}い→重すぎる＝太重了。',
          relatedRules: ['📖 U3 L2 文法「〜すぎる」'],
        },
      },
      // Q5: grammar — AはBより (L3) (correctIndex: 1)
      {
        id: 'n5_u3_test_q5',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '夏{なつ}＿＿冬{ふゆ}より暑{あつ}いです。',
        stemZh: '夏天比冬天熱。',
        options: [
          { text: 'が', reason: '錯誤。「が」不用於此比較句型。' },
          { text: 'は', reason: '正確。「AはBより〜」＝A比B更〜。' },
          { text: 'を', reason: '錯誤。「を」是受詞助詞，此處不適用。' },
          { text: 'も', reason: '錯誤。「も」是「也」的意思，此處不適用。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '比較句型「AはBより〜」',
          analysis: '「AはBより〜」表示A比B更〜。「夏{なつ}は冬{ふゆ}より暑{あつ}い」＝夏天比冬天熱。',
          relatedRules: ['📖 U3 L3 文法「AはBより〜」'],
        },
      },
      // Q6: vocab — 顏色 (L3) (correctIndex: 2)
      {
        id: 'n5_u3_test_q6',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '雪{ゆき}は何色{なにいろ}ですか。',
        stemZh: '雪是什麼顏色的？',
        options: [
          { text: '赤{あか}い', reason: '錯誤。赤い是紅色。' },
          { text: '青{あお}い', reason: '錯誤。青い是藍色。' },
          { text: '白{しろ}い', reason: '正確。雪是白{しろ}い（白色的）。' },
          { text: '黒{くろ}い', reason: '錯誤。黒い是黑色。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '顏色詞彙：白い',
          analysis: '雪（ゆき）是白{しろ}い（白色的）。日文中基本顏色的い形容詞有：赤{あか}い、青{あお}い、白{しろ}い、黒{くろ}い、黄色{きいろ}い。',
          relatedRules: ['📖 U3 L3 單字「白い」'],
        },
      },
      // Q7: grammar — 一番 (L4) (correctIndex: 0)
      {
        id: 'n5_u3_test_q7',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: 'この店{みせ}で＿＿美味{おい}しい料理{りょうり}は何{なん}ですか。',
        stemZh: '這間店最好吃的菜是什麼？',
        options: [
          { text: '一番{いちばん}', reason: '正確。「一番」表示最高級「最〜」。' },
          { text: 'とても', reason: '錯誤。「とても」是「非常」，不是「最」。' },
          { text: 'あまり', reason: '錯誤。「あまり」是「不太〜」，常與否定搭配。' },
          { text: 'すこし', reason: '錯誤。「すこし」是「稍微」。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '最高級「一番」',
          analysis: '「〜で一番{いちばん}〜」表示「在〜中最〜」。「この店{みせ}で一番{いちばん}美味{おい}しい」＝這間店最好吃的。',
          relatedRules: ['📖 U3 L4 文法「〜で一番〜」'],
        },
      },
      // Q8: vocab — 飲食器具 (L4) (correctIndex: 3)
      {
        id: 'n5_u3_test_q8',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「箸{はし}」の意味{いみ}はどれですか。',
        stemZh: '「箸」的意思是哪個？',
        options: [
          { text: '湯匙', reason: '錯誤。湯匙是スプーン。' },
          { text: '叉子', reason: '錯誤。叉子是フォーク。' },
          { text: '小刀', reason: '錯誤。小刀是ナイフ。' },
          { text: '筷子', reason: '正確。箸{はし}意為筷子。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '餐具詞彙「箸」',
          analysis: '箸{はし}是筷子。日式餐具包括：箸（筷子）、茶碗{ちゃわん}（飯碗）、お皿{さら}（盤子）。西式餐具則有フォーク（叉子）、スプーン（湯匙）、ナイフ（小刀）。',
          relatedRules: ['📖 U3 L4 單字「箸」'],
        },
      },
      // Q9: grammar — の中で〜が一番 (L5) (correctIndex: 1)
      {
        id: 'n5_u3_test_q9',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '果物{くだもの}の中{なか}＿＿りんごが一番{いちばん}好{す}きです。',
        stemZh: '水果之中最喜歡蘋果。',
        options: [
          { text: 'は', reason: '錯誤。此句型需要「で」表示範圍。' },
          { text: 'で', reason: '正確。「〜の中{なか}で〜が一番{いちばん}」表示在某範圍中最〜。' },
          { text: 'に', reason: '錯誤。「に」不用於此句型。' },
          { text: 'を', reason: '錯誤。「を」是受詞助詞，此處不適用。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '「〜の中で〜が一番」句型',
          analysis: '「〜の中{なか}で〜が一番{いちばん}〜」表示「在〜之中，〜是最〜的」。「で」限定範圍。',
          relatedRules: ['📖 U3 L5 文法「〜の中で〜が一番〜」'],
        },
      },
      // Q10: vocab — 身體 (L5) (correctIndex: 0)
      {
        id: 'n5_u3_test_q10',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「お腹{なか}が痛{いた}い」はどういう意味{いみ}ですか。',
        stemZh: '「お腹が痛い」是什麼意思？',
        options: [
          { text: '肚子痛', reason: '正確。お腹{なか}（肚子）＋痛{いた}い（痛的）＝肚子痛。' },
          { text: '頭痛', reason: '錯誤。頭痛是頭{あたま}が痛い。' },
          { text: '牙痛', reason: '錯誤。牙痛是歯{は}が痛い。' },
          { text: '腳痛', reason: '錯誤。腳痛是足{あし}が痛い。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '身體不適的表達',
          analysis: '「〜が痛{いた}い」表示某處疼痛。お腹{なか}＝肚子、頭{あたま}＝頭、歯{は}＝牙齒、足{あし}＝腳。',
          relatedRules: ['📖 U3 L5 單字「お腹」「痛い」'],
        },
      },
      // Q11: grammar — だけ (L5) (correctIndex: 2)
      {
        id: 'n5_u3_test_q11',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '薬{くすり}＿＿飲{の}んでください。他{ほか}のものは要{い}りません。',
        stemZh: '只要吃藥就好。其他的不需要。',
        options: [
          { text: 'も', reason: '錯誤。「も」表示「也」，不表示限定。' },
          { text: 'は', reason: '錯誤。「は」是主題助詞，無法表達「只有」。' },
          { text: 'だけ', reason: '正確。「〜だけ」表示「只有〜」。' },
          { text: 'しか', reason: '錯誤。「しか」後面需要否定形，此處用肯定的「飲んでください」。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '限定助詞「だけ」',
          analysis: '「〜だけ」表示「只有〜」。「薬{くすり}だけ飲{の}んでください」＝「只要吃藥就好」。「だけ」後面可接肯定或否定。',
          relatedRules: ['📖 U3 L5 文法「〜だけ」'],
        },
      },
      // Q12: vocab — 形狀性質 (L6) (correctIndex: 1)
      {
        id: 'n5_u3_test_q12',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「軽{かる}い」の反対語{はんたいご}はどれですか。',
        stemZh: '「軽い」（輕）的反義詞是哪個？',
        options: [
          { text: '薄{うす}い', reason: '錯誤。薄い是「薄」，概念不同。' },
          { text: '重{おも}い', reason: '正確。軽{かる}い（輕）⇔ 重{おも}い（重）。' },
          { text: '厚{あつ}い', reason: '錯誤。厚い是「厚」，概念不同。' },
          { text: '汚{きたな}い', reason: '錯誤。汚い是「髒」，概念不同。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: 'い形容詞反義：軽い ⇔ 重い',
          analysis: '軽{かる}い意為輕的，反義詞是重{おも}い（重的）。例如：この箱{はこ}は軽{かる}い（這個箱子很輕）。',
          relatedRules: ['📖 U3 L6 單字「軽い」「重い」'],
        },
      },
      // Q13: grammar — でしょう (L6) (correctIndex: 3)
      {
        id: 'n5_u3_test_q13',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '明日{あした}は晴{は}れる＿＿。天気予報{てんきよほう}で言{い}っていました。',
        stemZh: '明天大概會放晴吧。天氣預報有說。',
        options: [
          { text: 'ます', reason: '錯誤。「ます」是確定的敬體，缺少推測語氣。' },
          { text: 'ません', reason: '錯誤。「ません」是否定形。' },
          { text: 'だろう', reason: '錯誤。「だろう」是隨意推測，此處用的是禮貌語體。' },
          { text: 'でしょう', reason: '正確。「〜でしょう」表示禮貌的推測「大概〜吧」。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '禮貌推測「〜でしょう」',
          analysis: '「〜でしょう」表示禮貌的推測「大概〜吧」。動詞辭書形＋でしょう。「晴{は}れるでしょう」＝大概會放晴吧。「だろう」是比較隨意的說法。',
          relatedRules: ['📖 U3 L6 文法「〜でしょう」'],
        },
      },
      // Q14: grammar — なあ (L7) (correctIndex: 0)
      {
        id: 'n5_u3_test_q14',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '宿題{しゅくだい}が多{おお}い＿＿。全部{ぜんぶ}で二十問{にじゅうもん}もあるよ。',
        stemZh: '作業好多啊。全部有二十題呢。',
        options: [
          { text: 'なあ', reason: '正確。「〜なあ」表示自言自語的感嘆。' },
          { text: 'ね', reason: '錯誤。「ね」偏向與對方互動確認，此處是自言自語。' },
          { text: 'よ', reason: '錯誤。「よ」是告知對方新資訊，此處是感嘆。' },
          { text: 'か', reason: '錯誤。「か」是疑問助詞。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '感嘆語氣「〜なあ」',
          analysis: '「〜なあ」表示自言自語的感嘆。「多{おお}いなあ」＝好多啊。與「ね」不同，「なあ」偏向自己的感受。',
          relatedRules: ['📖 U3 L7 文法「〜なあ」'],
        },
      },
      // Q15: grammar — くなる (L2) + 綜合 (correctIndex: 2)
      {
        id: 'n5_u3_test_q15',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '秋{あき}になると、涼{すず}し＿＿なります。',
        stemZh: '到了秋天就會變涼爽。',
        options: [
          { text: 'い', reason: '錯誤。「い」是原形結尾，接「なる」時需要變化。' },
          { text: 'に', reason: '錯誤。「に」用於な形容詞和名詞接「なる」。' },
          { text: 'く', reason: '正確。い形容詞去「い」加「く」再接「なる」。涼{すず}しい→涼しくなる。' },
          { text: 'さ', reason: '錯誤。「さ」用於名詞化，不接「なる」。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: 'い形容詞＋くなる（變化）',
          analysis: 'い形容詞接「なる」（變得）時要去「い」加「く」。涼{すず}しい→涼しくなる＝變涼爽。な形容詞則用「〜になる」。',
          relatedRules: ['📖 U3 L2 文法「〜くなる / 〜になる」'],
        },
      },

      // ────────────────────────────────────────
      // Unit 2 複習題目 (Q16–Q20)
      // ────────────────────────────────────────

      // Q16: grammar — 受詞助詞を (U2 L1) (correctIndex: 1)
      {
        id: 'n5_u3_test_q16',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '毎朝{まいあさ}コーヒー＿＿飲{の}みます。',
        stemZh: '每天早上喝咖啡。',
        options: [
          { text: 'が', reason: '錯誤。「が」是主格助詞，此處需要受詞助詞。' },
          { text: 'を', reason: '正確。「を」標記動作的直接受詞。「コーヒーを飲む」＝喝咖啡。' },
          { text: 'で', reason: '錯誤。「で」是手段/場所助詞，此處不適用。' },
          { text: 'に', reason: '錯誤。「に」是方向/時間助詞，此處不適用。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '【複習 U2】受詞助詞「を」',
          analysis: '「を」放在名詞後面，標記動詞的直接受詞。「コーヒーを飲{の}む」＝喝咖啡。',
          relatedRules: ['📖 U2 L1 文法「〜を＋動詞」'],
        },
      },
      // Q17: vocab — 時間表達 (U2 L3) (correctIndex: 3)
      {
        id: 'n5_u3_test_q17',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「明後日{あさって}」の意味{いみ}はどれですか。',
        stemZh: '「明後日」的意思是哪個？',
        options: [
          { text: '昨天', reason: '錯誤。昨天是昨日{きのう}。' },
          { text: '前天', reason: '錯誤。前天是一昨日{おととい}。' },
          { text: '明天', reason: '錯誤。明天是明日{あした}。' },
          { text: '後天', reason: '正確。明後日{あさって}意為後天。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '【複習 U2】日期詞彙「明後日」',
          analysis: '日期序列：一昨日{おととい}（前天）→ 昨日{きのう}（昨天）→ 今日{きょう}（今天）→ 明日{あした}（明天）→ 明後日{あさって}（後天）。',
          relatedRules: ['📖 U2 L3 單字「明後日」'],
        },
      },
      // Q18: grammar — たいです (U2 L4) (correctIndex: 0)
      {
        id: 'n5_u3_test_q18',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '新{あたら}しい靴{くつ}を買{か}い＿＿です。',
        stemZh: '想買新鞋。',
        options: [
          { text: 'たい', reason: '正確。「動詞ます形去ます＋たい」表示「想要做〜」。' },
          { text: 'ます', reason: '錯誤。「ます」是敬體陳述，不是願望。' },
          { text: 'ません', reason: '錯誤。「ません」是否定形。' },
          { text: 'ましょう', reason: '錯誤。「ましょう」是提議「一起做〜吧」。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '【複習 U2】願望句型「〜たい」',
          analysis: '「〜たいです」表示「想要做〜」。動詞ます形去掉「ます」加「たい」。買{か}います→買いたい＝想買。',
          relatedRules: ['📖 U2 L4 文法「〜たいです」'],
        },
      },
      // Q19: grammar — ましょう (U2 L5) (correctIndex: 2)
      {
        id: 'n5_u3_test_q19',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '一緒{いっしょ}に公園{こうえん}に行{い}き＿＿。',
        stemZh: '一起去公園吧。',
        options: [
          { text: 'ます', reason: '錯誤。「ます」是陳述，不是提議。' },
          { text: 'ません', reason: '錯誤。「ません」是否定形。' },
          { text: 'ましょう', reason: '正確。「〜ましょう」表示提議「一起做〜吧」。' },
          { text: 'ました', reason: '錯誤。「ました」是過去式。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '【複習 U2】提議句型「〜ましょう」',
          analysis: '「〜ましょう」表示「一起做〜吧」的提議。「行{い}きましょう」＝一起去吧。常與「一緒{いっしょ}に」搭配使用。',
          relatedRules: ['📖 U2 L5 文法「〜ましょう」'],
        },
      },
      // Q20: grammar — つもり (U2 L6) (correctIndex: 1)
      {
        id: 'n5_u3_test_q20',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '週末{しゅうまつ}は山{やま}に行{い}く＿＿です。',
        stemZh: '週末打算去山上。',
        options: [
          { text: 'たい', reason: '錯誤。「たい」表示願望「想做〜」，不是計畫。' },
          { text: 'つもり', reason: '正確。「〜つもりです」表示「打算做〜」的計畫或意圖。' },
          { text: 'ましょう', reason: '錯誤。「ましょう」是提議，不是陳述計畫。' },
          { text: 'ながら', reason: '錯誤。「ながら」表示同時進行兩個動作。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '【複習 U2】意向句型「〜つもり」',
          analysis: '「動詞辭書形＋つもりです」表示「打算做〜」的計畫。「行{い}くつもりです」＝打算去。表示已有明確意向。',
          relatedRules: ['📖 U2 L6 文法「〜つもりです」'],
        },
      },
    ] as UnifiedQuestion[],
  },
]
