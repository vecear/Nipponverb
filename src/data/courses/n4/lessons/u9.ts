import type { LessonDefinition } from '../../../../types/course'
import type { UnifiedQuestion } from '../../../questions/types'

// ─── Unit 9: 動作與表達 ───

// ═══════════════════════════════════════
// Lesson 1 Quiz: 使役動作
// ═══════════════════════════════════════

const l1Quiz: UnifiedQuestion[] = [
  {
    id: 'cq_n4_u9_l1_001',
    category: 'vocabulary',
    level: 'N4',
    tags: ['meaning'],
    stem: '「集{あつ}める」の意味{いみ}はどれですか。',
    stemZh: '「集める」的意思是哪個？',
    options: [
      { text: '收集', reason: '正確。集{あつ}める意為收集。' },
      { text: '聚集', reason: '錯誤。聚集是集{あつ}まる（自動詞）。' },
      { text: '捨棄', reason: '錯誤。捨棄是捨{す}てる。' },
      { text: '分配', reason: '錯誤。分配是分{わ}ける。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '集める的詞義',
      analysis: '集{あつ}める是他動詞，意為收集。對應自動詞是集{あつ}まる（聚集）。',
      comparisons: ['集{あつ}める＝收集（他動詞）', '集{あつ}まる＝聚集（自動詞）'],
    },
  },
  {
    id: 'cq_n4_u9_l1_002',
    category: 'grammar',
    level: 'N4',
    tags: ['causative'],
    stem: '母{はは}は子供{こども}に野菜{やさい}を＿＿。',
    stemZh: '媽媽讓孩子吃了蔬菜。',
    options: [
      { text: '食{た}べさせました', reason: '正確。「食べさせる」是食べる的使役形，表示讓/使某人做某事。' },
      { text: '食{た}べられました', reason: '錯誤。「食べられる」是被動形或可能形，不是使役。' },
      { text: '食{た}べました', reason: '錯誤。這只是普通過去式，沒有使役的意思。' },
      { text: '食{た}べたがりました', reason: '錯誤。「食べたがる」是想要吃的意思，不是使役。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '使役形「させる/せる」的用法',
      analysis: '一段動詞的使役形：去掉る，加させる。食{た}べる→食{た}べさせる。「Aは Bに〜させる」表示A讓B做某事。',
      commonMistakes: ['○ 食べさせる / × 食べせる → 一段動詞使役形加させる'],
    },
  },
  {
    id: 'cq_n4_u9_l1_003',
    category: 'grammar',
    level: 'N4',
    tags: ['causative'],
    stem: '先生{せんせい}は学生{がくせい}を＿＿。',
    stemZh: '老師讓學生站了起來。',
    options: [
      { text: '立{た}たせました', reason: '正確。立つ（五段動詞）的使役形是立{た}たせる。' },
      { text: '立{た}てました', reason: '錯誤。立{た}てる是他動詞「立起」，不是使役形。' },
      { text: '立{た}たれました', reason: '錯誤。立{た}たれる是被動形。' },
      { text: '立{た}ちました', reason: '錯誤。立{た}ちました是普通過去式。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '五段動詞的使役形',
      analysis: '五段動詞使役形：將う段改為あ段＋せる。立{た}つ→立{た}た＋せる→立{た}たせる。',
      commonMistakes: ['○ 立たせる / × 立てさせる → 立つ是五段動詞，不是一段動詞'],
    },
  },
  {
    id: 'cq_n4_u9_l1_004',
    category: 'grammar',
    level: 'N4',
    tags: ['causative'],
    stem: '部長{ぶちょう}は私{わたし}に荷物{にもつ}を＿＿。',
    stemZh: '部長讓我搬了行李。',
    options: [
      { text: '運{はこ}ばせました', reason: '正確。運ぶ（五段）的使役形：運{はこ}ばせる。' },
      { text: '運{はこ}びました', reason: '錯誤。這是普通過去式，沒有使役意味。' },
      { text: '運{はこ}ばれました', reason: '錯誤。這是被動形。' },
      { text: '運{はこ}ばさせました', reason: '錯誤。五段動詞使役形不加さ。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '五段動詞使役形的變化規則',
      analysis: '五段動詞使役形：う段→あ段＋せる。運{はこ}ぶ→運{はこ}ば＋せる→運{はこ}ばせる。',
      commonMistakes: ['○ 運ばせる / × 運ばさせる → 五段動詞直接加せる，不加させる'],
    },
  },
]

// ═══════════════════════════════════════
// Lesson 2 Quiz: 自他動詞配對
// ═══════════════════════════════════════

const l2Quiz: UnifiedQuestion[] = [
  {
    id: 'cq_n4_u9_l2_001',
    category: 'vocabulary',
    level: 'N4',
    tags: ['meaning', 'pair'],
    stem: '「落{お}ちる」と「落{お}とす」の違{ちが}いは何{なん}ですか。',
    stemZh: '「落ちる」和「落とす」的差別是什麼？',
    options: [
      { text: '落{お}ちる是自動詞（落下），落{お}とす是他動詞（使掉落）', reason: '正確。落ちる為自動詞，落とす為他動詞。' },
      { text: '兩個都是自動詞', reason: '錯誤。落{お}とす是他動詞，有使役對象。' },
      { text: '落{お}ちる是他動詞，落{お}とす是自動詞', reason: '錯誤。剛好相反。' },
      { text: '意思完全相同', reason: '錯誤。自動詞和他動詞的用法不同。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '自他動詞配對',
      analysis: '落{お}ちる（自動詞）表示東西自己落下；落{お}とす（他動詞）表示讓東西掉落。這是典型的自他動詞配對。',
      comparisons: ['落{お}ちる＝落下（自動詞）', '落{お}とす＝掉落/弄掉（他動詞）'],
    },
  },
  {
    id: 'cq_n4_u9_l2_002',
    category: 'vocabulary',
    level: 'N4',
    tags: ['meaning', 'pair'],
    stem: '「動{うご}く」と「動{うご}かす」の正{ただ}しい使{つか}い方{かた}はどれですか。',
    stemZh: '「動く」和「動かす」的正確用法是哪個？',
    options: [
      { text: '車{くるま}が動{うご}く / 車{くるま}を動{うご}かす', reason: '正確。動く（自動詞）搭配が，動かす（他動詞）搭配を。' },
      { text: '車{くるま}を動{うご}く / 車{くるま}が動{うご}かす', reason: '錯誤。助詞搭配相反了。' },
      { text: '兩個都用を', reason: '錯誤。自動詞動{うご}く搭配が。' },
      { text: '兩個都用が', reason: '錯誤。他動詞動{うご}かす搭配を。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '自他動詞與助詞搭配',
      analysis: '自動詞搭配が（〜が動{うご}く＝某物移動），他動詞搭配を（〜を動{うご}かす＝搬動某物）。',
      comparisons: ['動{うご}く＝移動（自動詞・が）', '動{うご}かす＝搬動（他動詞・を）'],
    },
  },
  {
    id: 'cq_n4_u9_l2_003',
    category: 'vocabulary',
    level: 'N4',
    tags: ['meaning'],
    stem: '「片付{かたづ}ける」の意味{いみ}はどれですか。',
    stemZh: '「片付ける」的意思是哪個？',
    options: [
      { text: '收拾', reason: '正確。片付{かたづ}ける意為收拾、整理。' },
      { text: '尋找', reason: '錯誤。尋找是探{さが}す。' },
      { text: '撿拾', reason: '錯誤。撿拾是拾{ひろ}う。' },
      { text: '搬動', reason: '錯誤。搬動是動{うご}かす。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '片付ける的詞義',
      analysis: '片付{かたづ}ける意為收拾、整理。常用於「部屋{へや}を片付{かたづ}ける」（收拾房間）。',
    },
  },
  {
    id: 'cq_n4_u9_l2_004',
    category: 'grammar',
    level: 'N4',
    tags: ['causative-passive'],
    stem: '私{わたし}は先生{せんせい}に教室{きょうしつ}を＿＿。',
    stemZh: '我被老師要求打掃了教室。',
    options: [
      { text: '掃除{そうじ}させられました', reason: '正確。使役受身形表示被迫做某事。' },
      { text: '掃除{そうじ}しました', reason: '錯誤。這只是普通過去式，沒有「被迫」的意思。' },
      { text: '掃除{そうじ}させました', reason: '錯誤。這是使役形，意為「讓別人打掃」。' },
      { text: '掃除{そうじ}されました', reason: '錯誤。這是被動形，語意不完整。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '使役受身形「させられる」的用法',
      analysis: '使役受身形表示「被迫做某事」。句型為「AはBに〜させられる」，A被B強迫做某事。する→させられる。',
      commonMistakes: ['○ させられる＝被迫做 / × させる＝讓別人做 → 注意主詞的差異'],
    },
  },
]

// ═══════════════════════════════════════
// Lesson 3 Quiz: 被動表達
// ═══════════════════════════════════════

const l3Quiz: UnifiedQuestion[] = [
  {
    id: 'cq_n4_u9_l3_001',
    category: 'vocabulary',
    level: 'N4',
    tags: ['meaning'],
    stem: '「逃{に}げる」の意味{いみ}はどれですか。',
    stemZh: '「逃げる」的意思是哪個？',
    options: [
      { text: '逃跑', reason: '正確。逃{に}げる意為逃跑。' },
      { text: '趕快', reason: '錯誤。趕快是急{いそ}ぐ。' },
      { text: '偷竊', reason: '錯誤。偷竊是盗{ぬす}む。' },
      { text: '吵鬧', reason: '錯誤。吵鬧是騒{さわ}ぐ。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '逃げる的詞義',
      analysis: '逃{に}げる意為逃跑、逃走。例：泥棒{どろぼう}が逃{に}げた（小偷逃跑了）。',
    },
  },
  {
    id: 'cq_n4_u9_l3_002',
    category: 'grammar',
    level: 'N4',
    tags: ['passive'],
    stem: '私{わたし}は電車{でんしゃ}の中{なか}で足{あし}を＿＿。',
    stemZh: '我在電車裡被踩了腳。',
    options: [
      { text: '踏{ふ}まれました', reason: '正確。踏{ふ}む（五段）的被動形：踏{ふ}まれる。表示被踩。' },
      { text: '踏{ふ}みました', reason: '錯誤。這是主動語態，意思是「踩了」。' },
      { text: '踏{ふ}ませました', reason: '錯誤。這是使役形，意思是「讓別人踩」。' },
      { text: '踏{ふ}めました', reason: '錯誤。這是可能形，意思是「能踩」。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '被動形「られる/れる」的用法',
      analysis: '五段動詞被動形：う段→あ段＋れる。踏{ふ}む→踏{ふ}まれる。被動句表達「被〜做了某事」。',
      commonMistakes: ['○ 踏まれる / × 踏められる → 五段動詞被動形不用られる'],
    },
  },
  {
    id: 'cq_n4_u9_l3_003',
    category: 'grammar',
    level: 'N4',
    tags: ['passive'],
    stem: '弟{おとうと}は兄{あに}にケーキを＿＿。',
    stemZh: '弟弟的蛋糕被哥哥吃掉了。',
    options: [
      { text: '食{た}べられました', reason: '正確。一段動詞被動形：食{た}べる→食{た}べられる。' },
      { text: '食{た}べさせました', reason: '錯誤。這是使役形，意思是「讓別人吃」。' },
      { text: '食{た}べました', reason: '錯誤。主語是弟弟，但吃的人是哥哥，需要被動。' },
      { text: '食{た}べてました', reason: '錯誤。這只是進行式，不表示被動。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '迷惑的被動（受害被動）',
      analysis: '日語被動句常帶有受害、困擾的語感。「弟はケーキを食{た}べられた」表示弟弟因蛋糕被吃而感到困擾。',
      comparisons: ['食{た}べられる＝被吃（被動）', '食{た}べさせる＝讓吃（使役）'],
    },
  },
  {
    id: 'cq_n4_u9_l3_004',
    category: 'vocabulary',
    level: 'N4',
    tags: ['meaning'],
    stem: '「遅{おく}れる」の意味{いみ}はどれですか。',
    stemZh: '「遅れる」的意思是哪個？',
    options: [
      { text: '遲到', reason: '正確。遅{おく}れる意為遲到、來遲。' },
      { text: '迎接', reason: '錯誤。迎接是迎{むか}える。' },
      { text: '住宿', reason: '錯誤。住宿是泊{と}まる。' },
      { text: '結束', reason: '錯誤。結束是済{す}む。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '遅れる的詞義',
      analysis: '遅{おく}れる意為遲到。常用句型：「約束{やくそく}に遅{おく}れる」（約會遲到）。',
    },
  },
]

// ═══════════════════════════════════════
// Lesson 4 Quiz: 迷惑被動與生活場景
// ═══════════════════════════════════════

const l4Quiz: UnifiedQuestion[] = [
  {
    id: 'cq_n4_u9_l4_001',
    category: 'grammar',
    level: 'N4',
    tags: ['passive', 'intransitive'],
    stem: '雨{あめ}に＿＿、風邪{かぜ}をひきました。',
    stemZh: '被雨淋了，結果感冒了。',
    options: [
      { text: '降{ふ}られて', reason: '正確。「雨に降られる」是自然現象的被動表達，帶有困擾語感。' },
      { text: '降{ふ}って', reason: '錯誤。「降って」只表示下雨，不表達受害。' },
      { text: '降{ふ}らせて', reason: '錯誤。「降らせる」是使役，讓雨下不合理。' },
      { text: '降{ふ}れて', reason: '錯誤。降{ふ}る的て形是降{ふ}って。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '自動詞的迷惑被動',
      analysis: '自動詞也可以用被動形表達受害。「雨{あめ}に降{ふ}られる」表示被雨淋而感到困擾，是日語特有的用法。',
    },
  },
  {
    id: 'cq_n4_u9_l4_002',
    category: 'vocabulary',
    level: 'N4',
    tags: ['meaning'],
    stem: '「汚{よご}れる」の意味{いみ}はどれですか。',
    stemZh: '「汚れる」的意思是哪個？',
    options: [
      { text: '弄髒', reason: '正確。汚{よご}れる意為弄髒、變髒。' },
      { text: '空出', reason: '錯誤。空出是空{す}く。' },
      { text: '搖晃', reason: '錯誤。搖晃是揺{ゆ}れる。' },
      { text: '殘留', reason: '錯誤。殘留是残{のこ}る。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '汚れる的詞義',
      analysis: '汚{よご}れる是自動詞，意為變髒。例：服{ふく}が汚{よご}れた（衣服弄髒了）。',
    },
  },
  {
    id: 'cq_n4_u9_l4_003',
    category: 'grammar',
    level: 'N4',
    tags: ['passive'],
    stem: '妹{いもうと}は友達{ともだち}に日記{にっき}を＿＿泣{な}いていました。',
    stemZh: '妹妹因為日記被朋友看了而哭。',
    options: [
      { text: '読{よ}まれて', reason: '正確。読{よ}む（五段）被動形：読{よ}まれる。被看了日記感到困擾。' },
      { text: '読{よ}んで', reason: '錯誤。「読んで」是普通て形，不表示被動。' },
      { text: '読{よ}ませて', reason: '錯誤。「読ませて」是使役て形。' },
      { text: '読{よ}めて', reason: '錯誤。「読める」是可能形。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '持ち物の被動（所有物被動）',
      analysis: '「AはBに〜を＋被動」表示A的東西被B做了某事。帶有A感到困擾的語感。',
    },
  },
  {
    id: 'cq_n4_u9_l4_004',
    category: 'vocabulary',
    level: 'N4',
    tags: ['meaning'],
    stem: '「勝{か}つ」の反対{はんたい}の意味{いみ}を持{も}つ言葉{ことば}はどれですか。',
    stemZh: '跟「勝つ」意思相反的詞是哪個？',
    options: [
      { text: '負{ま}ける', reason: '正確。勝{か}つ（贏）的反義詞是負{ま}ける（輸）。' },
      { text: '逃{に}げる', reason: '錯誤。逃{に}げる是逃跑。' },
      { text: '騒{さわ}ぐ', reason: '錯誤。騒{さわ}ぐ是吵鬧。' },
      { text: '急{いそ}ぐ', reason: '錯誤。急{いそ}ぐ是趕快。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '反義詞配對',
      analysis: '勝{か}つ（贏）⇔ 負{ま}ける（輸）是基本反義詞。例：試合{しあい}に勝{か}つ（比賽贏了）。',
      comparisons: ['勝{か}つ＝贏', '負{ま}ける＝輸'],
    },
  },
]

// ═══════════════════════════════════════
// Lesson 5 Quiz: 難易度與感覺表達
// ═══════════════════════════════════════

const l5Quiz: UnifiedQuestion[] = [
  {
    id: 'cq_n4_u9_l5_001',
    category: 'vocabulary',
    level: 'N4',
    tags: ['meaning', 'pair'],
    stem: '「割{わ}れる」と「分{わ}ける」の違{ちが}いはどれですか。',
    stemZh: '「割れる」和「分ける」的差別是哪個？',
    options: [
      { text: '割{わ}れる是破碎，分{わ}ける是分配', reason: '正確。割{わ}れる指物體碎裂，分{わ}ける指人為地分開。' },
      { text: '兩個意思相同', reason: '錯誤。割{わ}れる指碎裂，分{わ}ける指分配。' },
      { text: '割{わ}れる是分配，分{わ}ける是破碎', reason: '錯誤。意思相反了。' },
      { text: '割{わ}れる是他動詞，分{わ}ける是自動詞', reason: '錯誤。割{わ}れる是自動詞，分{わ}ける是他動詞。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '割れる與分ける的區別',
      analysis: '割{わ}れる（自動詞）指物體自己碎裂；分{わ}ける（他動詞）指人為地分開、分配。',
      comparisons: ['割{わ}れる＝破碎（自動詞）', '分{わ}ける＝分配（他動詞）'],
    },
  },
  {
    id: 'cq_n4_u9_l5_002',
    category: 'vocabulary',
    level: 'N4',
    tags: ['meaning'],
    stem: '「捕{つか}まえる」の意味{いみ}はどれですか。',
    stemZh: '「捕まえる」的意思是哪個？',
    options: [
      { text: '抓住', reason: '正確。捕{つか}まえる意為抓住、捕捉。' },
      { text: '扔掉', reason: '錯誤。扔掉是投{な}げる。' },
      { text: '踩踏', reason: '錯誤。踩踏是踏{ふ}む。' },
      { text: '滑動', reason: '錯誤。滑動是滑{すべ}る。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '捕まえる的詞義',
      analysis: '捕{つか}まえる意為抓住、逮捕。例：泥棒{どろぼう}を捕{つか}まえる（抓住小偷）。',
    },
  },
  {
    id: 'cq_n4_u9_l5_003',
    category: 'vocabulary',
    level: 'N4',
    tags: ['meaning'],
    stem: '「足{た}りる」の意味{いみ}はどれですか。',
    stemZh: '「足りる」的意思是哪個？',
    options: [
      { text: '足夠', reason: '正確。足{た}りる意為足夠、夠用。' },
      { text: '增加', reason: '錯誤。增加是増{ふ}える或足{た}す。' },
      { text: '改變', reason: '錯誤。改變是変{か}える。' },
      { text: '上升', reason: '錯誤。上升是上{あ}がる。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '足りる的詞義',
      analysis: '足{た}りる意為足夠。常用於「お金{かね}が足{た}りない」（錢不夠）等表達。',
    },
  },
  {
    id: 'cq_n4_u9_l5_004',
    category: 'vocabulary',
    level: 'N4',
    tags: ['meaning', 'pair'],
    stem: '「写{うつ}す」と「写{うつ}る」の違{ちが}いはどれですか。',
    stemZh: '「写す」和「写る」的差別是哪個？',
    options: [
      { text: '写{うつ}す是謄寫（他動詞），写{うつ}る是照相（自動詞）', reason: '正確。写す是主動地謄寫，写る是被拍到（自動）。' },
      { text: '兩個都是他動詞', reason: '錯誤。写{うつ}る是自動詞。' },
      { text: '意思完全相同', reason: '錯誤。自他動詞用法不同。' },
      { text: '写{うつ}す是自動詞，写{うつ}る是他動詞', reason: '錯誤。自他相反了。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '写す與写る的區別',
      analysis: '写{うつ}す（他動詞）指主動謄寫或拍攝；写{うつ}る（自動詞）指被拍到或映出。',
      comparisons: ['写{うつ}す＝謄寫/拍攝（他動詞）', '写{うつ}る＝照相/映出（自動詞）'],
    },
  },
]

// ═══════════════════════════════════════
// Lesson 6 Quiz: 綜合運用
// ═══════════════════════════════════════

const l6Quiz: UnifiedQuestion[] = [
  {
    id: 'cq_n4_u9_l6_001',
    category: 'vocabulary',
    level: 'N4',
    tags: ['meaning'],
    stem: '「拾{ひろ}う」の意味{いみ}はどれですか。',
    stemZh: '「拾う」的意思是哪個？',
    options: [
      { text: '撿', reason: '正確。拾{ひろ}う意為撿、拾取。' },
      { text: '踩', reason: '錯誤。踩是踏{ふ}む。' },
      { text: '扔', reason: '錯誤。扔是投{な}げる。' },
      { text: '釣', reason: '錯誤。釣是釣{つ}る。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '拾う的詞義',
      analysis: '拾{ひろ}う意為撿、拾取。例：財布{さいふ}を拾{ひろ}った（撿到了錢包）。',
    },
  },
  {
    id: 'cq_n4_u9_l6_002',
    category: 'grammar',
    level: 'N4',
    tags: ['gasuru'],
    stem: '何{なに}かいい匂{にお}い＿＿しますね。',
    stemZh: '聞到了什麼好香的味道呢。',
    options: [
      { text: 'が', reason: '正確。「〜がする」是感覺到氣味、聲音、味道的固定用法。' },
      { text: 'を', reason: '錯誤。「がする」是固定搭配，不用を。' },
      { text: 'で', reason: '錯誤。「がする」是固定搭配，不用で。' },
      { text: 'に', reason: '錯誤。「がする」是固定搭配，不用に。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「〜がする」的固定用法',
      analysis: '「〜がする」用於表達感覺到氣味（匂{にお}いがする）、聲音（音{おと}がする）、味道（味{あじ}がする）。',
    },
  },
  {
    id: 'cq_n4_u9_l6_003',
    category: 'vocabulary',
    level: 'N4',
    tags: ['meaning'],
    stem: '「揺{ゆ}れる」の意味{いみ}はどれですか。',
    stemZh: '「揺れる」的意思是哪個？',
    options: [
      { text: '搖晃', reason: '正確。揺{ゆ}れる意為搖晃。' },
      { text: '破碎', reason: '錯誤。破碎是割{わ}れる。' },
      { text: '弄髒', reason: '錯誤。弄髒是汚{よご}れる。' },
      { text: '裝訂', reason: '錯誤。裝訂是綴{と}じる。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '揺れる的詞義',
      analysis: '揺{ゆ}れる是自動詞，意為搖晃。例：地震{じしん}で建物{たてもの}が揺{ゆ}れた（因地震建築物搖晃了）。',
    },
  },
  {
    id: 'cq_n4_u9_l6_004',
    category: 'grammar',
    level: 'N4',
    tags: ['hitsuyou'],
    stem: 'パスポート＿＿必要{ひつよう}です。',
    stemZh: '需要護照。',
    options: [
      { text: 'が', reason: '正確。「〜が必要」表示需要某物，搭配助詞が。' },
      { text: 'を', reason: '錯誤。「必要」前面搭配が。' },
      { text: 'に', reason: '錯誤。「必要」前面搭配が。' },
      { text: 'で', reason: '錯誤。「必要」前面搭配が。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「〜が必要」的用法',
      analysis: '「〜が必要{ひつよう}だ」表示需要某物。助詞用が，不用を。例：パスポートが必要{ひつよう}です。',
    },
  },
]

// ═══════════════════════════════════════
// 課堂定義
// ═══════════════════════════════════════

export const u9Lessons: LessonDefinition[] = [
  // ─── Lesson 1: 使役動作 ───
  {
    id: 'n4_u9_l1',
    unitId: 'n4_u9',
    order: 1,
    titleJp: '使役動作',
    titleZh: '使役動作',
    objectives: [
      '學會使役形的變化與用法',
      '掌握「AはBに〜させる」的句型',
      '認識自他動詞配對（上がる/下がる等）',
    ],
    vocabulary: [
      { word: '上がる', reading: 'あがる', meaning: '上升', meaning_zh: '上升', exampleJp: '気温{きおん}が上{あ}がる。', exampleZh: '氣溫上升。' },
      { word: '下がる', reading: 'さがる', meaning: '下降', meaning_zh: '下降', exampleJp: '値段{ねだん}が下{さ}がった。', exampleZh: '價格下降了。' },
      { word: '下げる', reading: 'さげる', meaning: '降低', meaning_zh: '降低', exampleJp: '音{おと}を下{さ}げてください。', exampleZh: '請降低音量。' },
      { word: '集まる', reading: 'あつまる', meaning: '聚集', meaning_zh: '聚集', exampleJp: '人{ひと}が集{あつ}まった。', exampleZh: '人聚集了。' },
      { word: '集める', reading: 'あつめる', meaning: '收集', meaning_zh: '收集', exampleJp: '切手{きって}を集{あつ}めている。', exampleZh: '在收集郵票。' },
      { word: '片付ける', reading: 'かたづける', meaning: '收拾', meaning_zh: '收拾', exampleJp: '部屋{へや}を片付{かたづ}ける。', exampleZh: '收拾房間。' },
      { word: '探す', reading: 'さがす', meaning: '尋找', meaning_zh: '尋找', exampleJp: '鍵{かぎ}を探{さが}している。', exampleZh: '在找鑰匙。' },
      { word: '拾う', reading: 'ひろう', meaning: '撿', meaning_zh: '撿', exampleJp: '財布{さいふ}を拾{ひろ}った。', exampleZh: '撿到了錢包。' },
      { word: '増える', reading: 'ふえる', meaning: '增加', meaning_zh: '增加', exampleJp: '人口{じんこう}が増{ふ}えた。', exampleZh: '人口增加了。' },
      { word: '足りる', reading: 'たりる', meaning: '足夠', meaning_zh: '足夠', exampleJp: 'お金{かね}が足{た}りない。', exampleZh: '錢不夠。' },
      { word: '足す', reading: 'たす', meaning: '增加', meaning_zh: '增加', exampleJp: '水{みず}を足{た}してください。', exampleZh: '請加些水。' },
      { word: '変える', reading: 'かえる', meaning: '改變', meaning_zh: '改變', exampleJp: '予定{よてい}を変{か}えた。', exampleZh: '改變了計畫。' },
    ],
    grammarIds: ['n4_saseru', 'n4_saserareru', 'n4_ga_hitsuyou'],
    grammarSummaries: [
      {
        grammarId: 'n4_saseru',
        pattern: '〜させる',
        meaning: '讓〜做；使〜做（使役）',
        quickExample: '母{はは}は子供{こども}に野菜{やさい}を食{た}べさせました。',
        quickExampleZh: '媽媽讓孩子吃了蔬菜。',
      },
      {
        grammarId: 'n4_saserareru',
        pattern: '〜させられる',
        meaning: '被迫做〜（使役被動）',
        quickExample: '毎日{まいにち}残業{ざんぎょう}させられています。',
        quickExampleZh: '每天被迫加班。',
      },
      {
        grammarId: 'n4_ga_hitsuyou',
        pattern: '〜が必要{ひつよう}',
        meaning: '需要〜',
        quickExample: 'パスポートが必要{ひつよう}です。',
        quickExampleZh: '需要護照。',
      },
    ],
    dialogue: [
      { speaker: '佐藤{さとう}', japanese: '田中{たなか}さん、引{ひ}っ越{こ}しの準備{じゅんび}は進{すす}んでいますか。', chinese: '田中同學，搬家的準備進展如何？' },
      { speaker: '田中{たなか}', japanese: 'まだです。母{はは}に部屋{へや}を片付{かたづ}けさせられて、大変{たいへん}でした。', chinese: '還沒。被媽媽逼著收拾房間，好辛苦。' },
      { speaker: '佐藤{さとう}', japanese: '私{わたし}も弟{おとうと}に荷物{にもつ}を集{あつ}めさせましたよ。人手{ひとで}が足{た}りなくて。', chinese: '我也讓弟弟收集行李了。人手不夠。' },
      { speaker: '田中{たなか}', japanese: '人{ひと}が増{ふ}えたら助{たす}かりますね。気温{きおん}も上{あ}がってきて、暑{あつ}い中{なか}での作業{さぎょう}は大変{たいへん}です。', chinese: '人增加的話就好了。氣溫也上升了，在炎熱中作業很辛苦。' },
      { speaker: '佐藤{さとう}', japanese: 'そうですね。値段{ねだん}は下{さ}がらないし、音{おと}を下{さ}げて静{しず}かに作業{さぎょう}する必要{ひつよう}があります。', chinese: '是啊。價格不降，而且需要降低音量安靜地作業。' },
      { speaker: '田中{たなか}', japanese: '鍵{かぎ}を探{さが}していたら、財布{さいふ}を拾{ひろ}いました。忘{わす}れ物{もの}かもしれません。', chinese: '找鑰匙的時候，撿到了錢包。可能是遺失物。' },
      { speaker: '佐藤{さとう}', japanese: 'お金{かね}が足{た}りない時{とき}に拾{ひろ}えたらいいのに（笑）。予定{よてい}を変{か}えて今週末{こんしゅうまつ}にしましょうか。', chinese: '錢不夠的時候能撿到就好了（笑）。改變計畫改到這週末吧？' },
      { speaker: '田中{たなか}', japanese: 'いいですね。水{みず}を足{た}して、みんなの分{ぶん}の飲{の}み物{もの}も準備{じゅんび}しておきます。', chinese: '好啊。加些水，也準備好大家的飲料。' },
      { speaker: '佐藤{さとう}', japanese: '弟{おとうと}にも手伝{てつだ}わせます。みんなが集{あつ}まれば何{なん}とかなりますよ。', chinese: '也讓弟弟來幫忙。大家聚集起來就能想辦法。' },
      { speaker: '田中{たなか}', japanese: 'ありがとうございます！パスポートが必要{ひつよう}な書類{しょるい}も探{さが}しておかないと。', chinese: '謝謝！需要護照的文件也得找好才行。' },
    ],
    quizQuestions: l1Quiz,
  },

  // ─── Lesson 2: 自他動詞配對 ───
  {
    id: 'n4_u9_l2',
    unitId: 'n4_u9',
    order: 2,
    titleJp: '自他動詞の対',
    titleZh: '自他動詞配對',
    objectives: [
      '掌握使役受身形表達「被迫做某事」',
      '認識自他動詞配對（落ちる/落とす、動く/動かす等）',
      '區分自動詞與他動詞的助詞搭配',
    ],
    vocabulary: [
      { word: '落ちる', reading: 'おちる', meaning: '落下', meaning_zh: '落下', exampleJp: '葉{は}っぱが落{お}ちた。', exampleZh: '葉子落下了。' },
      { word: '落とす', reading: 'おとす', meaning: '掉落', meaning_zh: '掉落', exampleJp: 'コップを落{お}とした。', exampleZh: '把杯子弄掉了。' },
      { word: '動く', reading: 'うごく', meaning: '移動', meaning_zh: '移動', exampleJp: '電車{でんしゃ}が動{うご}いた。', exampleZh: '電車動了。' },
      { word: '動かす', reading: 'うごかす', meaning: '搬動', meaning_zh: '搬動', exampleJp: '机{つくえ}を動{うご}かす。', exampleZh: '搬動桌子。' },
      { word: '移る', reading: 'うつる', meaning: '移動', meaning_zh: '移動', exampleJp: '新{あたら}しい家{いえ}に移{うつ}った。', exampleZh: '搬到了新家。' },
      { word: '移す', reading: 'うつす', meaning: '移動', meaning_zh: '移動', exampleJp: '荷物{にもつ}を別{べつ}の部屋{へや}に移{うつ}す。', exampleZh: '把行李搬到別的房間。' },
      { word: '変わる', reading: 'かわる', meaning: '變化', meaning_zh: '變化', exampleJp: '季節{きせつ}が変{か}わった。', exampleZh: '季節變了。' },
      { word: '投げる', reading: 'なげる', meaning: '扔', meaning_zh: '扔', exampleJp: 'ボールを投{な}げる。', exampleZh: '扔球。' },
      { word: '打つ', reading: 'うつ', meaning: '打', meaning_zh: '打', exampleJp: 'ボールを打{う}つ。', exampleZh: '打球。' },
      { word: '踏む', reading: 'ふむ', meaning: '踩', meaning_zh: '踩', exampleJp: '足{あし}を踏{ふ}んでしまった。', exampleZh: '不小心踩到腳了。' },
      { word: '滑る', reading: 'すべる', meaning: '滑', meaning_zh: '滑', exampleJp: '道{みち}が滑{すべ}りやすい。', exampleZh: '路很容易打滑。' },
      { word: '捕まえる', reading: 'つかまえる', meaning: '抓住', meaning_zh: '抓住', exampleJp: '虫{むし}を捕{つか}まえた。', exampleZh: '抓住了蟲子。' },
    ],
    grammarIds: ['n4_rareru_ukemi', 'n4_tadoushi_jidoushi', 'n4_hitsuyou_ga_aru'],
    grammarSummaries: [
      {
        grammarId: 'n4_rareru_ukemi',
        pattern: '〜られる（受身）',
        meaning: '被〜做（被動）',
        quickExample: '私{わたし}は先生{せんせい}に褒{ほ}められました。',
        quickExampleZh: '我被老師稱讚了。',
      },
      {
        grammarId: 'n4_tadoushi_jidoushi',
        pattern: '他動詞{たどうし}・自動詞{じどうし}',
        meaning: '他動詞與自動詞',
        quickExample: 'ドアを開{あ}けました。（他）／ ドアが開{あ}きました。（自）',
        quickExampleZh: '把門打開了。（他）／ 門開了。（自）',
      },
      {
        grammarId: 'n4_hitsuyou_ga_aru',
        pattern: '〜必要{ひつよう}がある',
        meaning: '有必要〜',
        quickExample: 'もう一度{いちど}確認{かくにん}する必要{ひつよう}があります。',
        quickExampleZh: '有必要再確認一次。',
      },
    ],
    dialogue: [
      { speaker: '佐藤{さとう}', japanese: '田中{たなか}さん、新{あたら}しい家{いえ}に移{うつ}る日{ひ}は決{き}まりましたか。', chinese: '田中同學，搬到新家的日子決定了嗎？' },
      { speaker: '田中{たなか}', japanese: 'はい。でも荷物{にもつ}を別{べつ}の部屋{へや}に移{うつ}すのが大変{たいへん}で。弟{おとうと}がコップを落{お}としてしまいました。', chinese: '決定了。但是把行李搬到別的房間很辛苦。弟弟不小心把杯子弄掉了。' },
      { speaker: '佐藤{さとう}', japanese: '葉{は}っぱが落{お}ちるように、物{もの}も落{お}ちますからね。注意{ちゅうい}する必要{ひつよう}がありますよ。', chinese: '就像葉子會落下一樣，東西也會掉嘛。有必要注意喔。' },
      { speaker: '田中{たなか}', japanese: '道{みち}が滑{すべ}りやすくて、足{あし}を踏{ふ}んでしまうこともありました。', chinese: '路很容易打滑，也有不小心踩到腳的時候。' },
      { speaker: '佐藤{さとう}', japanese: '季節{きせつ}が変{か}わって、電車{でんしゃ}もなかなか動{うご}かないですね。重{おも}い机{つくえ}を動{うご}かすのも一苦労{ひとくろう}です。', chinese: '季節變了，電車也不太動呢。搬重的桌子也是一番辛苦。' },
      { speaker: '田中{たなか}', japanese: '弟{おとうと}にボールを投{な}げるのをやめさせて、手伝{てつだ}わせます。自動詞{じどうし}と他動詞{たどうし}の違{ちが}いみたいですね。', chinese: '我會讓弟弟停止扔球，叫他來幫忙。就像自動詞和他動詞的差別一樣呢。' },
      { speaker: '佐藤{さとう}', japanese: '「ボールが動{うご}く」と「ボールを動{うご}かす」、確{たし}かに違{ちが}いますね。虫{むし}を捕{つか}まえるのが好{す}きな弟{おとうと}さんですよね。', chinese: '「球移動」和「搬動球」，確實不一樣呢。你弟弟是喜歡抓蟲子的對吧。' },
      { speaker: '田中{たなか}', japanese: 'そうなんです。ボールを打{う}つのも好{す}きですけど。靴{くつ}を踏{ふ}まれないように気{き}をつけてくださいね。', chinese: '是的。他也喜歡打球。請注意不要被踩到鞋子喔。' },
      { speaker: '佐藤{さとう}', japanese: 'はい。今日{きょう}は荷物{にもつ}を移{うつ}す作業{さぎょう}を確認{かくにん}する必要{ひつよう}がありますね。', chinese: '好的。今天有必要確認搬行李的作業呢。' },
      { speaker: '田中{たなか}', japanese: 'ありがとうございます。滑{すべ}らないように気{き}をつけましょう！', chinese: '謝謝。注意不要滑倒喔！' },
    ],
    quizQuestions: l2Quiz,
  },

  // ─── Lesson 3: 被動表達 ───
  {
    id: 'n4_u9_l3',
    unitId: 'n4_u9',
    order: 3,
    titleJp: '受身表現',
    titleZh: '被動表達',
    objectives: [
      '學會受身形（被動形）的變化與用法',
      '理解迷惑的被動（受害被動）',
      '掌握「AはBに〜られる」的句型',
    ],
    vocabulary: [
      { word: '急ぐ', reading: 'いそぐ', meaning: '趕快', meaning_zh: '趕快', exampleJp: '急{いそ}いでください。', exampleZh: '請快一點。' },
      { word: '逃げる', reading: 'にげる', meaning: '逃跑', meaning_zh: '逃跑', exampleJp: '猫{ねこ}が逃{に}げた。', exampleZh: '貓逃跑了。' },
      { word: '盗む', reading: 'ぬすむ', meaning: '偷', meaning_zh: '偷', exampleJp: '財布{さいふ}を盗{ぬす}まれた。', exampleZh: '錢包被偷了。' },
      { word: '騒ぐ', reading: 'さわぐ', meaning: '吵鬧', meaning_zh: '吵鬧', exampleJp: '夜{よる}に騒{さわ}がないでください。', exampleZh: '請不要在晚上吵鬧。' },
      { word: '遅れる', reading: 'おくれる', meaning: '遲到', meaning_zh: '遲到', exampleJp: '会議{かいぎ}に遅{おく}れた。', exampleZh: '開會遲到了。' },
      { word: '起こす', reading: 'おこす', meaning: '喚起', meaning_zh: '喚起', exampleJp: '朝{あさ}、弟{おとうと}を起{お}こす。', exampleZh: '早上叫弟弟起床。' },
      { word: '迎える', reading: 'むかえる', meaning: '迎接', meaning_zh: '迎接', exampleJp: '空港{くうこう}で友達{ともだち}を迎{むか}える。', exampleZh: '在機場迎接朋友。' },
      { word: '連れる', reading: 'つれる', meaning: '帶', meaning_zh: '帶', exampleJp: '子供{こども}を公園{こうえん}に連{つ}れていく。', exampleZh: '帶孩子去公園。' },
      { word: '勝つ', reading: 'かつ', meaning: '贏', meaning_zh: '贏', exampleJp: '試合{しあい}に勝{か}った。', exampleZh: '比賽贏了。' },
      { word: '負ける', reading: 'まける', meaning: '輸', meaning_zh: '輸', exampleJp: '試合{しあい}に負{ま}けた。', exampleZh: '比賽輸了。' },
      { word: '汚れる', reading: 'よごれる', meaning: '弄髒', meaning_zh: '弄髒', exampleJp: '服{ふく}が汚{よご}れた。', exampleZh: '衣服弄髒了。' },
      { word: '泊まる', reading: 'とまる', meaning: '住宿', meaning_zh: '住宿', exampleJp: 'ホテルに泊{と}まる。', exampleZh: '住旅館。' },
    ],
    grammarIds: ['n4_rareru_kanou', 'n4_ukemi_sonkei', 'n4_kyuu_ni'],
    grammarSummaries: [
      {
        grammarId: 'n4_rareru_kanou',
        pattern: '〜られる（可能）',
        meaning: '能夠〜；可以〜',
        quickExample: '刺身{さしみ}が食{た}べられますか。',
        quickExampleZh: '你能吃生魚片嗎？',
      },
      {
        grammarId: 'n4_ukemi_sonkei',
        pattern: '〜られる（尊敬）',
        meaning: '〜（尊敬語）',
        quickExample: '社長{しゃちょう}はもう帰{かえ}られました。',
        quickExampleZh: '社長已經回去了（敬語）。',
      },
      {
        grammarId: 'n4_kyuu_ni',
        pattern: '急{きゅう}に',
        meaning: '突然',
        quickExample: '急{きゅう}に雨{あめ}が降{ふ}ってきました。',
        quickExampleZh: '突然下起雨來了。',
      },
    ],
    dialogue: [
      { speaker: '鈴木{すずき}', japanese: '田中{たなか}さん、昨日{きのう}の試合{しあい}はどうでしたか。勝{か}ちましたか。', chinese: '田中同學，昨天的比賽怎麼樣？贏了嗎？' },
      { speaker: '田中{たなか}', japanese: '残念{ざんねん}ながら負{ま}けました。隣{となり}の人{ひと}に騒{さわ}がれて、集中{しゅうちゅう}できなかったんです。', chinese: '很遺憾地輸了。被旁邊的人吵得無法集中。' },
      { speaker: '鈴木{すずき}', japanese: 'それは大変{たいへん}でしたね。急{きゅう}に雨{あめ}も降{ふ}ってきましたし。', chinese: '那真辛苦呢。而且突然又下起雨來。' },
      { speaker: '田中{たなか}', japanese: 'はい、雨{あめ}に降{ふ}られて服{ふく}が汚{よご}れてしまいました。逃{に}げる場所{ばしょ}もなくて。', chinese: '是的，被雨淋了衣服弄髒了。連逃跑的地方都沒有。' },
      { speaker: '鈴木{すずき}', japanese: 'ホテルに泊{と}まることはできましたか。空港{くうこう}で友達{ともだち}を迎{むか}える予定{よてい}もあったんですよね。', chinese: '有住到旅館嗎？你也有去機場迎接朋友的安排對吧。' },
      { speaker: '田中{たなか}', japanese: '友達{ともだち}の迎{むか}えに遅{おく}れそうだったので、急{いそ}いで行{い}きました。財布{さいふ}を盗{ぬす}まれないように気{き}をつけながら。', chinese: '因為快遲到接朋友了，所以趕快去了。一邊注意錢包不要被偷。' },
      { speaker: '鈴木{すずき}', japanese: '朝{あさ}、弟{おとうと}さんを起{お}こすのも大変{たいへん}ですよね。社長{しゃちょう}はもう帰{かえ}られましたか。', chinese: '早上叫弟弟起床也很辛苦吧。社長已經回去了嗎（敬語）？' },
      { speaker: '田中{たなか}', japanese: 'はい。子供{こども}を公園{こうえん}に連{つ}れていく約束{やくそく}もあるので、急{いそ}がないと。', chinese: '是的。我也有帶孩子去公園的約定，得趕快才行。' },
      { speaker: '鈴木{すずき}', japanese: '刺身{さしみ}は食{た}べられますか？帰{かえ}りに一緒{いっしょ}にお寿司{すし}でも食{た}べませんか。', chinese: '你能吃生魚片嗎？回去的路上一起吃壽司怎麼樣？' },
      { speaker: '田中{たなか}', japanese: 'いいですね！盗{ぬす}まれないようにカバンは持{も}っていきます。', chinese: '好啊！我會帶好包包注意不被偷。' },
    ],
    quizQuestions: l3Quiz,
  },

  // ─── Lesson 4: 迷惑被動與生活場景 ───
  {
    id: 'n4_u9_l4',
    unitId: 'n4_u9',
    order: 4,
    titleJp: '迷惑受身と生活場面',
    titleZh: '迷惑被動與生活場景',
    objectives: [
      '深入理解迷惑的被動（受害被動）的語感',
      '學會容易/難以的「〜やすい/〜にくい」表達',
      '掌握日常生活中的動作描述',
    ],
    vocabulary: [
      { word: '塗る', reading: 'ぬる', meaning: '塗', meaning_zh: '塗', exampleJp: '壁{かべ}にペンキを塗{ぬ}る。', exampleZh: '在牆上塗油漆。' },
      { word: '釣る', reading: 'つる', meaning: '釣', meaning_zh: '釣', exampleJp: '魚{さかな}を釣{つ}った。', exampleZh: '釣到了魚。' },
      { word: '割れる', reading: 'われる', meaning: '破碎', meaning_zh: '破碎', exampleJp: 'コップが割{わ}れた。', exampleZh: '杯子破了。' },
      { word: '分ける', reading: 'わける', meaning: '分配', meaning_zh: '分配', exampleJp: 'ケーキを三{みっ}つに分{わ}ける。', exampleZh: '把蛋糕分成三份。' },
      { word: '揺れる', reading: 'ゆれる', meaning: '搖晃', meaning_zh: '搖晃', exampleJp: '地震{じしん}で建物{たてもの}が揺{ゆ}れた。', exampleZh: '因地震建築物搖晃了。' },
      { word: '空く', reading: 'すく', meaning: '空', meaning_zh: '空', exampleJp: 'お腹{なか}が空{す}いた。', exampleZh: '肚子餓了。' },
      { word: '済む', reading: 'すむ', meaning: '結束', meaning_zh: '結束', exampleJp: '仕事{しごと}が済{す}んだ。', exampleZh: '工作結束了。' },
      { word: '寄る', reading: 'よる', meaning: '順便去', meaning_zh: '順便去', exampleJp: '帰{かえ}りにコンビニに寄{よ}った。', exampleZh: '回家路上順便去了便利商店。' },
      { word: '写す', reading: 'うつす', meaning: '謄寫', meaning_zh: '謄寫', exampleJp: 'ノートを写{うつ}す。', exampleZh: '謄寫筆記。' },
      { word: '写る', reading: 'うつる', meaning: '照相', meaning_zh: '照相', exampleJp: '写真{しゃしん}にきれいに写{うつ}った。', exampleZh: '在照片中拍得很好看。' },
      { word: '綴じる', reading: 'とじる', meaning: '裝訂', meaning_zh: '裝訂', exampleJp: '書類{しょるい}を綴{と}じる。', exampleZh: '裝訂文件。' },
      { word: '残る', reading: 'のこる', meaning: '殘留', meaning_zh: '殘留', exampleJp: 'まだ仕事{しごと}が残{のこ}っている。', exampleZh: '工作還剩下。' },
    ],
    grammarIds: ['n4_yasui', 'n4_nikui', 'n4_ni_ki_ga_tsuku'],
    grammarSummaries: [
      {
        grammarId: 'n4_yasui',
        pattern: '〜やすい',
        meaning: '容易〜',
        quickExample: 'この本{ほん}は読{よ}みやすいです。',
        quickExampleZh: '這本書很容易讀。',
      },
      {
        grammarId: 'n4_nikui',
        pattern: '〜にくい',
        meaning: '難以〜',
        quickExample: 'この薬{くすり}は飲{の}みにくいです。',
        quickExampleZh: '這個藥很難吞。',
      },
      {
        grammarId: 'n4_ni_ki_ga_tsuku',
        pattern: '〜に気{き}がつく',
        meaning: '注意到〜',
        quickExample: '財布{さいふ}がないことに気{き}がつきました。',
        quickExampleZh: '注意到錢包不見了。',
      },
    ],
    dialogue: [
      { speaker: '鈴木{すずき}', japanese: '田中{たなか}さん、昨日{きのう}の釣{つ}りはどうでしたか。', chinese: '田中同學，昨天的釣魚怎麼樣？' },
      { speaker: '田中{たなか}', japanese: '地震{じしん}があって、船{ふね}が揺{ゆ}れて大変{たいへん}でした。魚{さかな}に逃{に}げられてしまいました。', chinese: '發生了地震，船搖晃得很厲害。魚也被跑掉了。' },
      { speaker: '鈴木{すずき}', japanese: 'それは残念{ざんねん}ですね。コップが割{わ}れやすいから、気{き}をつけないと。', chinese: '那真可惜呢。杯子容易破碎，得注意才行。' },
      { speaker: '田中{たなか}', japanese: 'はい。帰{かえ}りにコンビニに寄{よ}ったら、財布{さいふ}がないことに気{き}がつきました。', chinese: '是的。回家路上順便去了便利商店，結果注意到錢包不見了。' },
      { speaker: '鈴木{すずき}', japanese: '仕事{しごと}は済{す}みましたか。お腹{なか}も空{す}いたでしょう。ケーキを三{みっ}つに分{わ}けましょう。', chinese: '工作結束了嗎？肚子也餓了吧。把蛋糕分成三份吧。' },
      { speaker: '田中{たなか}', japanese: 'ありがとう。壁{かべ}にペンキを塗{ぬ}っている写真{しゃしん}を写{うつ}してくれましたよね。', chinese: '謝謝。你幫我拍了在牆上塗油漆的照片對吧。' },
      { speaker: '鈴木{すずき}', japanese: 'あの写真{しゃしん}はきれいに写{うつ}っていましたよ。ノートも写{うつ}しにくい字{じ}がありましたけど。', chinese: '那張照片拍得很好看喔。筆記裡也有些難以謄寫的字。' },
      { speaker: '田中{たなか}', japanese: '書類{しょるい}を綴{と}じる作業{さぎょう}がまだ残{のこ}っています。', chinese: '裝訂文件的作業還剩下。' },
      { speaker: '鈴木{すずき}', japanese: '山田{やまだ}さんの分{ぶん}も残{のこ}しておきましょうね。', chinese: '也留山田同學的份吧。' },
      { speaker: '田中{たなか}', japanese: 'はい。割{わ}れないように気{き}をつけて持{も}っていきますね。', chinese: '好的。我會小心不讓東西破掉帶過去的。' },
    ],
    quizQuestions: l4Quiz,
  },

  // ─── Lesson 5: 難易度與感覺表達 ───
  {
    id: 'n4_u9_l5',
    unitId: 'n4_u9',
    order: 5,
    titleJp: '難易度と感覚表現',
    titleZh: '難易度與感覺表達',
    objectives: [
      '掌握「〜やすい」的形容詞化用法',
      '學會「〜づらい」表達心理上的困難',
      '理解「〜がする」感覺表達',
    ],
    vocabulary: [
      { word: '上がる', reading: 'あがる', meaning: '上升', meaning_zh: '上升', exampleJp: '気温{きおん}が上{あ}がる。', exampleZh: '氣溫上升。' },
      { word: '下がる', reading: 'さがる', meaning: '下降', meaning_zh: '下降', exampleJp: '値段{ねだん}が下{さ}がった。', exampleZh: '價格下降了。' },
      { word: '落ちる', reading: 'おちる', meaning: '落下', meaning_zh: '落下', exampleJp: '葉{は}っぱが落{お}ちた。', exampleZh: '葉子落下了。' },
      { word: '落とす', reading: 'おとす', meaning: '掉落', meaning_zh: '掉落', exampleJp: 'コップを落{お}とした。', exampleZh: '把杯子弄掉了。' },
      { word: '割れる', reading: 'われる', meaning: '破碎', meaning_zh: '破碎', exampleJp: 'コップが割{わ}れた。', exampleZh: '杯子破了。' },
      { word: '分ける', reading: 'わける', meaning: '分配', meaning_zh: '分配', exampleJp: 'ケーキを三{みっ}つに分{わ}ける。', exampleZh: '把蛋糕分成三份。' },
      { word: '足りる', reading: 'たりる', meaning: '足夠', meaning_zh: '足夠', exampleJp: 'お金{かね}が足{た}りない。', exampleZh: '錢不夠。' },
      { word: '捕まえる', reading: 'つかまえる', meaning: '抓住', meaning_zh: '抓住', exampleJp: '虫{むし}を捕{つか}まえた。', exampleZh: '抓住了蟲子。' },
      { word: '写す', reading: 'うつす', meaning: '謄寫', meaning_zh: '謄寫', exampleJp: 'ノートを写{うつ}す。', exampleZh: '謄寫筆記。' },
      { word: '写る', reading: 'うつる', meaning: '照相', meaning_zh: '照相', exampleJp: '写真{しゃしん}にきれいに写{うつ}った。', exampleZh: '在照片中拍得很好看。' },
      { word: '滑る', reading: 'すべる', meaning: '滑', meaning_zh: '滑', exampleJp: '道{みち}が滑{すべ}りやすい。', exampleZh: '路很容易打滑。' },
      { word: '汚れる', reading: 'よごれる', meaning: '弄髒', meaning_zh: '弄髒', exampleJp: '服{ふく}が汚{よご}れた。', exampleZh: '衣服弄髒了。' },
    ],
    grammarIds: ['n4_yasui_adj', 'n4_zurai', 'n4_ga_suru'],
    grammarSummaries: [
      {
        grammarId: 'n4_yasui_adj',
        pattern: '〜やすい（形容詞化）',
        meaning: '容易〜的',
        quickExample: 'この傘{かさ}は壊{こわ}れやすいです。',
        quickExampleZh: '這把傘很容易壞。',
      },
      {
        grammarId: 'n4_zurai',
        pattern: '〜づらい',
        meaning: '難以〜（心理上）',
        quickExample: 'ちょっと言{い}いづらいことがあります。',
        quickExampleZh: '有件事有點難以啟齒。',
      },
      {
        grammarId: 'n4_ga_suru',
        pattern: '〜がする',
        meaning: '感覺到（氣味/聲音/味道）',
        quickExample: 'いい匂{にお}いがしますね。',
        quickExampleZh: '好香啊。',
      },
    ],
    dialogue: [
      { speaker: '佐藤{さとう}', japanese: '何{なに}か焦{こ}げたような匂{にお}いがしませんか。', chinese: '你有沒有聞到什麼燒焦的味道？' },
      { speaker: '田中{たなか}', japanese: '本当{ほんとう}ですね。あの匂{にお}いは隣{となり}の料理{りょうり}にちがいない。ちょっと言{い}いづらいですけど。', chinese: '真的耶。那個味道一定是隔壁在做菜。有點難以啟齒就是了。' },
      { speaker: '佐藤{さとう}', japanese: '最近{さいきん}気温{きおん}が上{あ}がって、道{みち}が滑{すべ}りやすくなっていますね。', chinese: '最近氣溫上升，路變得容易打滑呢。' },
      { speaker: '田中{たなか}', japanese: 'はい。昨日{きのう}、コップを落{お}としたら割{わ}れてしまいました。割{わ}れやすい素材{そざい}だったんです。', chinese: '是的。昨天杯子掉了就碎了。是容易破碎的材質。' },
      { speaker: '佐藤{さとう}', japanese: 'この写真{しゃしん}は暗{くら}くて写{うつ}りにくいですね。もう一枚{いちまい}写{うつ}してもらえますか。', chinese: '這張照片太暗了不容易照好呢。能再拍一張嗎？' },
      { speaker: '田中{たなか}', japanese: 'いいですよ。ノートを写{うつ}すのも、字{じ}が小{ちい}さくて写{うつ}しづらいんですよね。', chinese: '好啊。謄寫筆記也是，字太小了很難寫。' },
      { speaker: '佐藤{さとう}', japanese: '虫{むし}を捕{つか}まえるのは難{むずか}しいですか。捕{つか}まえにくいですか。', chinese: '抓蟲子很難嗎？難以抓到嗎？' },
      { speaker: '田中{たなか}', japanese: '小{ちい}さい虫{むし}は捕{つか}まえづらいです。お金{かね}が足{た}りないので新{あたら}しい道具{どうぐ}も買{か}えません。', chinese: '小蟲子很難抓。錢不夠所以也買不了新工具。' },
      { speaker: '佐藤{さとう}', japanese: '値段{ねだん}が下{さ}がったら買{か}いましょう。服{ふく}が汚{よご}れやすいから、汚{よご}れにくい服{ふく}を着{き}ていきましょう。', chinese: '價格降了就買吧。衣服容易弄髒，穿不容易髒的衣服去吧。' },
      { speaker: '田中{たなか}', japanese: 'そうしましょう。ケーキを分{わ}けて食{た}べながら計画{けいかく}を立{た}てましょう。', chinese: '就那樣吧。一邊分蛋糕吃一邊訂計畫吧。' },
    ],
    quizQuestions: l5Quiz,
  },

  // ─── Lesson 6: 綜合運用 ───
  {
    id: 'n4_u9_l6',
    unitId: 'n4_u9',
    order: 6,
    titleJp: '総合運用',
    titleZh: '綜合運用',
    objectives: [
      '綜合運用使役、被動、自他動詞',
      '掌握「やっと」「さすが」「たいてい」等副詞',
      '複習「〜が必要」「〜必要がある」等句型',
    ],
    vocabulary: [
      { word: '集まる', reading: 'あつまる', meaning: '聚集', meaning_zh: '聚集', exampleJp: '人{ひと}が集{あつ}まった。', exampleZh: '人聚集了。' },
      { word: '探す', reading: 'さがす', meaning: '尋找', meaning_zh: '尋找', exampleJp: '鍵{かぎ}を探{さが}している。', exampleZh: '在找鑰匙。' },
      { word: '拾う', reading: 'ひろう', meaning: '撿', meaning_zh: '撿', exampleJp: '財布{さいふ}を拾{ひろ}った。', exampleZh: '撿到了錢包。' },
      { word: '揺れる', reading: 'ゆれる', meaning: '搖晃', meaning_zh: '搖晃', exampleJp: '地震{じしん}で建物{たてもの}が揺{ゆ}れた。', exampleZh: '因地震建築物搖晃了。' },
      { word: '空く', reading: 'すく', meaning: '空', meaning_zh: '空', exampleJp: 'お腹{なか}が空{す}いた。', exampleZh: '肚子餓了。' },
      { word: '済む', reading: 'すむ', meaning: '結束', meaning_zh: '結束', exampleJp: '仕事{しごと}が済{す}んだ。', exampleZh: '工作結束了。' },
      { word: '寄る', reading: 'よる', meaning: '順便去', meaning_zh: '順便去', exampleJp: '帰{かえ}りにコンビニに寄{よ}った。', exampleZh: '回家路上順便去了便利商店。' },
      { word: '綴じる', reading: 'とじる', meaning: '裝訂', meaning_zh: '裝訂', exampleJp: '書類{しょるい}を綴{と}じる。', exampleZh: '裝訂文件。' },
      { word: '残る', reading: 'のこる', meaning: '殘留', meaning_zh: '殘留', exampleJp: 'まだ仕事{しごと}が残{のこ}っている。', exampleZh: '工作還剩下。' },
      { word: '塗る', reading: 'ぬる', meaning: '塗', meaning_zh: '塗', exampleJp: '壁{かべ}にペンキを塗{ぬ}る。', exampleZh: '在牆上塗油漆。' },
      { word: '釣る', reading: 'つる', meaning: '釣', meaning_zh: '釣', exampleJp: '魚{さかな}を釣{つ}った。', exampleZh: '釣到了魚。' },
      { word: '増える', reading: 'ふえる', meaning: '增加', meaning_zh: '增加', exampleJp: '人口{じんこう}が増{ふ}えた。', exampleZh: '人口增加了。' },
    ],
    grammarIds: ['n4_yatto', 'n4_sasuga', 'n4_taitei'],
    grammarSummaries: [
      {
        grammarId: 'n4_yatto',
        pattern: 'やっと',
        meaning: '終於；好不容易',
        quickExample: 'やっと仕事{しごと}が終{お}わりました。',
        quickExampleZh: '終於做完工作了。',
      },
      {
        grammarId: 'n4_sasuga',
        pattern: 'さすが',
        meaning: '不愧是；果然',
        quickExample: 'さすがプロですね。すごい！',
        quickExampleZh: '不愧是專業的，好厲害！',
      },
      {
        grammarId: 'n4_taitei',
        pattern: 'たいてい',
        meaning: '大多；通常',
        quickExample: 'たいてい7時{じ}に起{お}きます。',
        quickExampleZh: '通常7點起床。',
      },
    ],
    dialogue: [
      { speaker: '鈴木{すずき}', japanese: 'たいてい日曜日{にちようび}は何{なに}をしていますか。', chinese: '通常星期天都在做什麼？' },
      { speaker: '田中{たなか}', japanese: 'たいてい魚{さかな}を釣{つ}りに行{い}きます。でも先週{せんしゅう}は地震{じしん}で建物{たてもの}が揺{ゆ}れて大変{たいへん}でした。', chinese: '通常去釣魚。但上週因地震建築物搖晃，很辛苦。' },
      { speaker: '鈴木{すずき}', japanese: 'やっと仕事{しごと}が済{す}んで、お腹{なか}も空{す}きましたね。帰{かえ}りにコンビニに寄{よ}りましょう。', chinese: '終於工作結束了，肚子也餓了呢。回去路上順便去便利商店吧。' },
      { speaker: '田中{たなか}', japanese: 'いいですね。さすが鈴木{すずき}さん、いつもいいタイミングで提案{ていあん}してくれますね。', chinese: '好啊。不愧是鈴木同學，總是在好時機提議呢。' },
      { speaker: '鈴木{すずき}', japanese: '壁{かべ}にペンキを塗{ぬ}る仕事{しごと}がまだ残{のこ}っているんですが、人{ひと}が集{あつ}まれば早{はや}く終{お}わりますよ。', chinese: '在牆上塗油漆的工作還剩下，但只要人聚集起來就能快速完成。' },
      { speaker: '田中{たなか}', japanese: '人数{にんずう}は増{ふ}えましたか。鍵{かぎ}を探{さが}している人{ひと}もいましたよね。', chinese: '人數增加了嗎？也有人在找鑰匙對吧。' },
      { speaker: '鈴木{すずき}', japanese: 'はい。やっと財布{さいふ}を拾{ひろ}ってくれた人{ひと}が見{み}つかりました。書類{しょるい}を綴{と}じる作業{さぎょう}も頼{たの}みました。', chinese: '是的。終於找到了幫忙撿到錢包的人。也拜託了裝訂文件的作業。' },
      { speaker: '田中{たなか}', japanese: 'さすがですね。それに、釣{つ}った魚{さかな}をみんなに分{わ}けてあげたいです。', chinese: '真不愧是你。而且我想把釣到的魚分給大家。' },
      { speaker: '鈴木{すずき}', japanese: 'たいてい新鮮{しんせん}な魚{さかな}は美味{おい}しいですよね。残{のこ}った分{ぶん}は冷凍{れいとう}しましょう。', chinese: '通常新鮮的魚都很好吃呢。剩下的就冷凍吧。' },
      { speaker: '田中{たなか}', japanese: 'そうしましょう。やっと全部{ぜんぶ}の作業{さぎょう}が済{す}みそうです！', chinese: '就那樣吧。所有作業終於快結束了！' },
    ],
    quizQuestions: l6Quiz,
  },
]
