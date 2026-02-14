import type { LessonDefinition } from '../../../../types/course'
import type { UnifiedQuestion } from '../../../questions/types'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Unit 11: 敬語與感知 (Keigo & Perception)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ─── L1 Quiz: 尊敬語基礎 ───
const l1Quiz: UnifiedQuestion[] = [
  {
    id: 'cq_n4_u11_l1_001',
    category: 'grammar',
    level: 'N4',
    tags: ['尊敬語'],
    stem: '先生{せんせい}はもうこの本{ほん}を＿＿になりましたか。',
    stemZh: '老師已經___這本書了嗎？',
    options: [
      { text: 'ご覧{らん}', reason: '正確。「ご覧になる」是「見る」的尊敬語，用於長輩或上位者。' },
      { text: '拝見{はいけん}', reason: '錯誤。「拝見する」是謙讓語，用於自己，不能用於描述老師的行為。' },
      { text: '見{み}', reason: '錯誤。「見になる」不是正確的敬語形式。' },
      { text: '申{もう}し上{あ}げ', reason: '錯誤。「申し上げる」是「言う」的謙讓語，意思是「說」。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '尊敬語「ご覧になる」的用法',
      analysis: '「ご覧になる」是「見る」的尊敬語。用於描述長輩、上司等上位者的行為。「拝見する」則是謙讓語，用於描述自己的行為。',
      comparisons: ['「ご覧になる」= 看（尊敬語，用於對方）', '「拝見する」= 看（謙讓語，用於自己）'],
    },
  },
  {
    id: 'cq_n4_u11_l1_002',
    category: 'grammar',
    level: 'N4',
    tags: ['尊敬語'],
    stem: '社長{しゃちょう}は何{なに}と＿＿ましたか。',
    stemZh: '社長___了什麼？',
    options: [
      { text: '申{もう}し', reason: '錯誤。「申す」是謙讓語，不能用於描述社長的行為。' },
      { text: '言{い}い', reason: '錯誤。對社長使用普通動詞「言う」不夠禮貌。' },
      { text: '仰{おっしゃ}い', reason: '正確。「仰る」是「言う」的尊敬語，用於描述上位者所說的話。' },
      { text: '致{いた}し', reason: '錯誤。「致す」是「する」的謙讓語，意思也不對。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '尊敬語「仰る」的用法',
      analysis: '「仰る（おっしゃる）」是「言う」的尊敬語，用於描述長輩或上位者說的話。「申す」是謙讓語，用於自己。',
      comparisons: ['「仰る」= 說（尊敬語，用於對方）', '「申す」= 說（謙讓語，用於自己）'],
    },
  },
  {
    id: 'cq_n4_u11_l1_003',
    category: 'grammar',
    level: 'N4',
    tags: ['尊敬語'],
    stem: 'お客様{きゃくさま}、どうぞ＿＿ください。',
    stemZh: '客人，請___。',
    options: [
      { text: '食{た}べて', reason: '錯誤。對客人使用「食べる」不夠禮貌。' },
      { text: '頂{いただ}いて', reason: '錯誤。「頂く」是謙讓語，不能用於請對方做的事。' },
      { text: '召{め}し上{あ}がって', reason: '正確。「召し上がる」是「食べる・飲む」的尊敬語，用於請上位者吃喝。' },
      { text: '参{まい}って', reason: '錯誤。「参る」是「行く」的謙讓語，意思不對。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '尊敬語「召し上がる」的用法',
      analysis: '「召し上がる（めしあがる）」是「食べる・飲む」的尊敬語。請客人吃東西時說「召し上がってください」。',
      comparisons: ['「召し上がる」= 吃/喝（尊敬語，用於對方）', '「頂く」= 吃/喝（謙讓語，用於自己）'],
    },
  },
  {
    id: 'cq_n4_u11_l1_004',
    category: 'vocabulary',
    level: 'N4',
    tags: ['名詞'],
    stem: '「はつおん」の漢字{かんじ}はどれですか。',
    stemZh: '「はつおん」的漢字是哪一個？',
    options: [
      { text: '発音', reason: '正確。「発音（はつおん）」是發音。' },
      { text: '発言', reason: '錯誤。「発言（はつげん）」是發言。' },
      { text: '音楽', reason: '錯誤。「音楽（おんがく）」是音樂。' },
      { text: '発見', reason: '錯誤。「発見（はっけん）」是發現。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「発音」的讀音',
      analysis: '「発音（はつおん）」由「発」（はつ = 發出）和「音」（おん = 聲音）組成，表示發音。',
    },
  },
]

// ─── L2 Quiz: 謙讓語基礎 ───
const l2Quiz: UnifiedQuestion[] = [
  {
    id: 'cq_n4_u11_l2_001',
    category: 'grammar',
    level: 'N4',
    tags: ['謙譲語'],
    stem: '私{わたし}が先生{せんせい}のお荷物{にもつ}をお持{も}ち＿＿。',
    stemZh: '我來替老師___行李。',
    options: [
      { text: 'になります', reason: '錯誤。「お〜になる」是尊敬語，不能用在自己身上。' },
      { text: 'します', reason: '正確。「お〜する」是謙讓語，用於自己為上位者做事。' },
      { text: 'なさいます', reason: '錯誤。「なさる」是尊敬語，不能用在自己身上。' },
      { text: 'くださいます', reason: '錯誤。「くださる」是「給」的尊敬語，用於對方給自己東西。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '謙讓語「お〜する」的用法',
      analysis: '「お + 動詞ます形語幹 + する」是謙讓語，用於描述自己為上位者做的事。「お持ちします」= 我來替您拿。',
      comparisons: ['「お〜する」= 謙讓語（自己的行為）', '「お〜になる」= 尊敬語（對方的行為）'],
      commonMistakes: ['「○ お持ちします / × お持ちになります」→ 自己的行為用謙讓語'],
    },
  },
  {
    id: 'cq_n4_u11_l2_002',
    category: 'grammar',
    level: 'N4',
    tags: ['謙譲語'],
    stem: '明日{あした}、私{わたし}がそちらに＿＿ます。',
    stemZh: '明天我___那邊。',
    options: [
      { text: 'お出{い}でになり', reason: '錯誤。「お出でになる」是尊敬語，不能用在自己身上。' },
      { text: '行{い}き', reason: '不夠禮貌。在正式場合對上位者應使用謙讓語。' },
      { text: '参{まい}り', reason: '正確。「参る」是「行く」的謙讓語，用於描述自己去某處。' },
      { text: '来{き}', reason: '錯誤。「来る」語義不對，且不夠禮貌。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '謙讓語「参る」的用法',
      analysis: '「参る（まいる）」是「行く・来る」的謙讓語，用於自己的移動。「お出でになる」是尊敬語，用於描述對方。',
      comparisons: ['「参る」= 去/來（謙讓語，用於自己）', '「お出でになる / いらっしゃる」= 去/來（尊敬語，用於對方）'],
    },
  },
  {
    id: 'cq_n4_u11_l2_003',
    category: 'grammar',
    level: 'N4',
    tags: ['謙譲語'],
    stem: '先生{せんせい}にお手紙{てがみ}を＿＿します。',
    stemZh: '我___信給老師。',
    options: [
      { text: '下{くだ}さり', reason: '錯誤。「下さる」是尊敬語，且不接「します」。' },
      { text: '差{さ}し上{あ}げ', reason: '正確。「差し上げる」是「あげる」的謙讓語，表示恭敬地給上位者東西。' },
      { text: '召{め}し上{あ}がり', reason: '錯誤。「召し上がる」是「食べる」的尊敬語，意思不對。' },
      { text: 'ご覧{らん}になり', reason: '錯誤。「ご覧になる」是「見る」的尊敬語，意思不對。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '謙讓語「差し上げる」的用法',
      analysis: '「差し上げる（さしあげる）」是「あげる」的謙讓語，表示恭敬地給上位者東西。「手紙を差し上げる」= 恭敬地寄信給對方。',
      comparisons: ['「差し上げる」= 給（謙讓語，自己給對方）', '「下さる」= 給（尊敬語，對方給自己）'],
    },
  },
  {
    id: 'cq_n4_u11_l2_004',
    category: 'vocabulary',
    level: 'N4',
    tags: ['敬語動詞'],
    stem: '「いただく」の意味{いみ}はどれですか。',
    stemZh: '「いただく」的意思是哪一個？',
    options: [
      { text: '給（敬語）', reason: '錯誤。「給」的敬語是「差し上げる」或「くださる」。' },
      { text: '做（謙讓語）', reason: '錯誤。「做」的謙讓語是「致す」。' },
      { text: '領受（謙讓語）', reason: '正確。「頂く（いただく）」是「もらう」的謙讓語，表示領受。' },
      { text: '看（敬語）', reason: '錯誤。「看」的敬語是「ご覧になる」。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「頂く」的意思與用法',
      analysis: '「頂く（いただく）」是「もらう（得到）」和「食べる・飲む（吃・喝）」的謙讓語。「いただきます」就是從「頂く」來的。',
    },
  },
]

// ─── L3 Quiz: 敬語綜合運用 ───
const l3Quiz: UnifiedQuestion[] = [
  {
    id: 'cq_n4_u11_l3_001',
    category: 'grammar',
    level: 'N4',
    tags: ['尊敬語', '謙譲語'],
    stem: '私{わたし}は山田{やまだ}と＿＿ます。よろしくお願{ねが}いいたします。',
    stemZh: '我___山田。請多多指教。',
    options: [
      { text: '仰{おっしゃ}い', reason: '錯誤。「仰る」是尊敬語，不能用在自己身上。' },
      { text: '言{い}い', reason: '不夠禮貌。在正式自我介紹時應使用謙讓語。' },
      { text: '申{もう}し', reason: '正確。「申す」是「言う」的謙讓語。自我介紹時用「〜と申します」。' },
      { text: '話{はな}し', reason: '錯誤。「話す」意思不對，自我介紹不用「話す」。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '謙讓語「申す」用於自我介紹',
      analysis: '「〜と申します」是自我介紹的正式說法。「申す（もうす）」是「言う」的謙讓語。「山田と申します」= 我叫山田（謙讓）。',
      comparisons: ['「〜と申します」= 我叫〜（謙讓語）', '「〜と言います」= 我叫〜（普通）', '「〜と仰います」= 他/她叫〜（尊敬語）'],
    },
  },
  {
    id: 'cq_n4_u11_l3_002',
    category: 'vocabulary',
    level: 'N4',
    tags: ['名詞'],
    stem: '分{わ}からない言葉{ことば}があったら、＿＿で調{しら}べてください。',
    stemZh: '如果有不懂的詞，請用___查一下。',
    options: [
      { text: '消{け}しゴム', reason: '錯誤。「消しゴム」是橡皮擦，不能用來查詞。' },
      { text: '字{じ}', reason: '錯誤。「字」是字，不是查詞的工具。' },
      { text: '辞典{じてん}', reason: '正確。「辞典」是詞典，用來查不懂的詞彙。' },
      { text: 'お祝{いわ}い', reason: '錯誤。「お祝い」是祝賀，不是查詞的工具。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「辞典」的用法',
      analysis: '「辞典（じてん）」是詞典，用來查詢不認識的詞彙。也可以寫成「辞書（じしょ）」，意思相同。',
    },
  },
  {
    id: 'cq_n4_u11_l3_003',
    category: 'grammar',
    level: 'N4',
    tags: ['尊敬語'],
    stem: '部長{ぶちょう}、こちらの資料{しりょう}を＿＿いただけますか。',
    stemZh: '部長，能否請您___這份資料？',
    options: [
      { text: 'ご覧{らん}になって', reason: '正確。「ご覧になる」是「見る」的尊敬語，請上位者看東西時使用。' },
      { text: '拝見{はいけん}して', reason: '錯誤。「拝見する」是謙讓語，用於自己看，不能請對方拝見。' },
      { text: '見{み}て', reason: '不夠禮貌。對部長應使用敬語。' },
      { text: '申{もう}して', reason: '錯誤。「申す」是「言う」的謙讓語，意思不對。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '請上位者看東西時用「ご覧になる」',
      analysis: '請上位者看東西時用「ご覧になっていただけますか」。「拝見する」是自己看時用的謙讓語，不能請別人「拝見」。',
      comparisons: ['「ご覧になる」= 請對方看（尊敬語）', '「拝見する」= 自己看（謙讓語）'],
    },
  },
]

// ─── L4 Quiz: 感覺動詞 ───
const l4Quiz: UnifiedQuestion[] = [
  {
    id: 'cq_n4_u11_l4_001',
    category: 'vocabulary',
    level: 'N4',
    tags: ['感覺動詞'],
    stem: '「みえる」と「みつける」の違{ちが}いはどれですか。',
    stemZh: '「みえる」和「みつける」的區別是哪一個？',
    options: [
      { text: '兩個意思完全相同', reason: '錯誤。兩個動詞意思不同。' },
      { text: '「みえる」是自然看見，「みつける」是主動找到', reason: '正確。「見える」是自然映入眼簾，「見つける」是有意識地尋找並發現。' },
      { text: '「みえる」是主動找到，「みつける」是自然看見', reason: '錯誤。恰好相反。' },
      { text: '「みえる」是聽見，「みつける」是找到', reason: '錯誤。「聽見」是「聞こえる」，不是「見える」。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「見える」和「見つける」的區別',
      analysis: '「見える」是自動詞，表示自然地看得見；「見つける」是他動詞，表示主動尋找並找到。「見つかる」是「見つける」的自動詞形。',
      comparisons: ['「見える」= 看得見（自然、被動）', '「見つける」= 找到（主動、有意識）', '「見つかる」= 被找到（自動詞）'],
    },
  },
  {
    id: 'cq_n4_u11_l4_002',
    category: 'vocabulary',
    level: 'N4',
    tags: ['感覺動詞'],
    stem: '隣{となり}の部屋{へや}から音楽{おんがく}が＿＿。',
    stemZh: '從隔壁房間___音樂聲。',
    options: [
      { text: '聞{き}く', reason: '錯誤。「聞く」是主動去聽，不是自然聽見。' },
      { text: '聞{き}こえる', reason: '正確。「聞こえる」表示自然地聽得見聲音。' },
      { text: '鳴{な}る', reason: '錯誤。「鳴る」是發出聲響，主語通常是物體而非聲音。' },
      { text: '似{に}る', reason: '錯誤。「似る」是相似，意思完全不同。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「聞こえる」自然聽見',
      analysis: '「聞こえる（きこえる）」表示聲音自然傳入耳中。「聞く」是主動去聽。「音楽が聞こえる」= 聽得到音樂聲。',
      comparisons: ['「聞こえる」= 聽得見（自然傳來）', '「聞く」= 聽（主動行為）'],
    },
  },
  {
    id: 'cq_n4_u11_l4_003',
    category: 'vocabulary',
    level: 'N4',
    tags: ['動詞'],
    stem: '祖母{そぼ}は去年{きょねん}＿＿ました。93歳{さい}でした。',
    stemZh: '祖母去年___了。享年93歲。',
    options: [
      { text: '無{な}くなり', reason: '錯誤。「無くなる」是東西消失或丟失，不用於人的去世。' },
      { text: '亡{な}くなり', reason: '正確。「亡くなる」是「去世」的委婉說法。' },
      { text: '暮{く}れ', reason: '錯誤。「暮れる」是天色變暗，意思不同。' },
      { text: '眠{ねむ}り', reason: '錯誤。「眠る」是睡覺，雖然有時用作「永眠」但不是標準說法。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「亡くなる」與「無くなる」的區別',
      analysis: '兩者讀音相同（なくなる）但意思不同。「亡くなる」= 去世（用於人）。「無くなる」= 消失、丟失（用於物品）。',
      comparisons: ['「亡くなる」= 去世（人）', '「無くなる」= 消失、丟失（物）'],
    },
  },
]

// ─── L5 Quiz: 推理與判斷 ───
const l5Quiz: UnifiedQuestion[] = [
  {
    id: 'cq_n4_u11_l5_001',
    category: 'grammar',
    level: 'N4',
    tags: ['べきだ'],
    stem: '約束{やくそく}は守{まも}る＿＿だ。',
    stemZh: '約定應該___遵守。',
    options: [
      { text: 'べき', reason: '正確。「べきだ」表示「應該做〜」，接在動詞辭書形後面。' },
      { text: 'わけ', reason: '錯誤。「わけだ」表示「難怪」，意思不同。' },
      { text: 'ところ', reason: '錯誤。「ところだ」表示動作的階段，意思不同。' },
      { text: 'ばかり', reason: '錯誤。「ばかり」表示「剛剛做完」，意思不同。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「べきだ」表示義務或應該',
      analysis: '「動詞辭書形 + べきだ」表示「應該做〜」。帶有義務、責任的語氣。「約束は守るべきだ」= 約定應該遵守。',
      commonMistakes: ['「する」接「べき」時可用「するべき」或「すべき」兩種形式'],
    },
  },
  {
    id: 'cq_n4_u11_l5_002',
    category: 'grammar',
    level: 'N4',
    tags: ['わけがない'],
    stem: 'あんなに優{やさ}しい人{ひと}がそんなひどいことを言{い}う＿＿。',
    stemZh: '那麼溫柔的人___會說那種過分的話。',
    options: [
      { text: 'べきだ', reason: '錯誤。「べきだ」是「應該」，意思不對。' },
      { text: 'ところだ', reason: '錯誤。「ところだ」表示動作的階段，意思不對。' },
      { text: 'わけがない', reason: '正確。「わけがない」表示「不可能〜」「不會〜」，強烈否定。' },
      { text: 'ばかりだ', reason: '錯誤。「ばかりだ」表示「剛做完」，意思不對。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「わけがない」表示不可能',
      analysis: '「動詞普通形 + わけがない」表示「不可能〜」「絕不會〜」。說話者根據常理判斷某事不可能發生。',
      comparisons: ['「わけがない」= 不可能（強烈否定）', '「はずがない」= 不應該（推測否定）'],
    },
  },
  {
    id: 'cq_n4_u11_l5_003',
    category: 'grammar',
    level: 'N4',
    tags: ['べきだ'],
    stem: '学生{がくせい}はもっと勉強{べんきょう}＿＿。',
    stemZh: '學生應該更加用功。',
    options: [
      { text: 'するべきだ', reason: '正確。「するべきだ」是「する + べきだ」，表示「應該做」。' },
      { text: 'するわけだ', reason: '錯誤。「するわけだ」表示「難怪要做」，意思不同。' },
      { text: 'するところだ', reason: '錯誤。「するところだ」表示「正要做」，意思不同。' },
      { text: 'したばかりだ', reason: '錯誤。「したばかりだ」表示「剛做完」，意思不同。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「する」接「べきだ」的形式',
      analysis: '「する」接「べきだ」時，可以說「するべきだ」或「すべきだ」。兩種都正確，但「すべきだ」更正式。',
      commonMistakes: ['「するべきだ」和「すべきだ」都可以，但「すべきだ」更書面化'],
    },
  },
  {
    id: 'cq_n4_u11_l5_004',
    category: 'grammar',
    level: 'N4',
    tags: ['わけがない'],
    stem: '彼{かれ}は日本{にほん}に住{す}んだことがないから、日本語{にほんご}が話{はな}せる＿＿。',
    stemZh: '他沒有住過日本，所以___會說日語。',
    options: [
      { text: 'べきだ', reason: '錯誤。「べきだ」是「應該」，邏輯不通。' },
      { text: 'ところだ', reason: '錯誤。「ところだ」表示動作的階段，意思不對。' },
      { text: 'ばかりだ', reason: '錯誤。「ばかりだ」表示「剛做完」，意思不對。' },
      { text: 'わけがない', reason: '正確。「わけがない」表示「不可能」，根據沒住過日本這個理由判斷。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '「わけがない」根據理由判斷不可能',
      analysis: '「わけがない」用在有明確理由支持「不可能」的情況。因為「沒住過日本」，所以「不可能會說日語」。',
    },
  },
]

// ─── L6 Quiz: 比較與列舉 ───
const l6Quiz: UnifiedQuestion[] = [
  {
    id: 'cq_n4_u11_l6_001',
    category: 'vocabulary',
    level: 'N4',
    tags: ['動詞'],
    stem: '子{こ}どもを大切{たいせつ}に＿＿のは親{おや}の責任{せきにん}です。',
    stemZh: '好好___孩子是父母的責任。',
    options: [
      { text: '育{そだ}てる', reason: '正確。「育てる」表示養育、培養。' },
      { text: '比{くら}べる', reason: '錯誤。「比べる」是比較，意思不對。' },
      { text: '構{かま}う', reason: '錯誤。「構う」是在意、照顧，但搭配不自然。' },
      { text: '踊{おど}る', reason: '錯誤。「踊る」是跳舞，意思完全不對。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「育てる」養育',
      analysis: '「育てる（そだてる）」表示養育、培養。「子どもを育てる」= 養育孩子，是常見搭配。',
    },
  },
  {
    id: 'cq_n4_u11_l6_002',
    category: 'vocabulary',
    level: 'N4',
    tags: ['動詞'],
    stem: '昔{むかし}の思{おも}い出{で}を＿＿と、懐{なつ}かしくなります。',
    stemZh: '一___以前的回憶，就會覺得懷念。',
    options: [
      { text: '思{おも}い出{だ}す', reason: '正確。「思い出す」表示想起、回憶起。' },
      { text: '込{こ}む', reason: '錯誤。「込む」是擁擠，意思完全不同。' },
      { text: '生{しょう}じる', reason: '錯誤。「生じる」是產生，搭配不自然。' },
      { text: '鳴{な}る', reason: '錯誤。「鳴る」是響，意思不對。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「思い出す」想起',
      analysis: '「思い出す（おもいだす）」表示回想、想起。「思い出」是名詞（回憶），「思い出す」是動詞（想起）。',
    },
  },
  {
    id: 'cq_n4_u11_l6_003',
    category: 'vocabulary',
    level: 'N4',
    tags: ['動詞'],
    stem: 'このレストランはいつも＿＿いて、席{せき}が空{あ}いていない。',
    stemZh: '這家餐廳總是很___，沒有空位。',
    options: [
      { text: '暮{く}れて', reason: '錯誤。「暮れる」是天色變暗，意思不對。' },
      { text: '似{に}て', reason: '錯誤。「似る」是相似，搭配不自然。' },
      { text: '込{こ}んで', reason: '正確。「込む（こむ）」表示擁擠。「込んでいる」= 很擠。' },
      { text: '祈{いの}って', reason: '錯誤。「祈る」是祈禱，意思不對。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「込む」擁擠',
      analysis: '「込む（こむ）」表示擁擠、混雜。「電車が込んでいる」= 電車很擠。「込んでいる」是進行狀態。',
    },
  },
]

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Lessons Export
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const u11Lessons: LessonDefinition[] = [
  // ━━━ L1: 尊敬語基礎 ━━━
  {
    id: 'n4_u11_l1',
    unitId: 'n4_u11',
    order: 1,
    titleJp: '尊敬語の基礎',
    titleZh: '尊敬語基礎',
    objectives: [
      '學會常見的尊敬語動詞（ご覧になる、仰る、召し上がる等）',
      '能用尊敬語描述長輩或上位者的行為',
      '掌握「お〜になる」句型',
    ],

    vocabulary: [
      { word: 'ご覧になる', reading: 'ごらんになる', meaning: '看（敬語）', meaning_zh: '看（敬語）', exampleJp: '先生{せんせい}はもうこの映画{えいが}をご覧{らん}になりましたか。', exampleZh: '老師已經看過這部電影了嗎？' },
      { word: 'ご存じ', reading: 'ごぞんじ', meaning: '知道（敬語）', meaning_zh: '知道（敬語）', exampleJp: 'この言葉{ことば}をご存{ぞん}じですか。', exampleZh: '您知道這個詞嗎？' },
      { word: '召し上がる', reading: 'めしあがる', meaning: '吃（敬語）', meaning_zh: '吃（敬語）', exampleJp: 'どうぞ召{め}し上{あ}がってください。', exampleZh: '請用餐。' },
      { word: '仰る', reading: 'おっしゃる', meaning: '說（敬語）', meaning_zh: '說（敬語）', exampleJp: '先生{せんせい}が仰{おっしゃ}った通{とお}りです。', exampleZh: '正如老師所說的。' },
      { word: 'お出でになる', reading: 'おいでになる', meaning: '去（敬語）', meaning_zh: '去（敬語）', exampleJp: '社長{しゃちょう}はお出{い}でになりますか。', exampleZh: '社長會去嗎？' },
      { word: '下さる', reading: 'くださる', meaning: '給（敬語）', meaning_zh: '給（敬語）', exampleJp: '先生{せんせい}が本{ほん}を下{くだ}さいました。', exampleZh: '老師給了我書。' },
      { word: '発音', reading: 'はつおん', meaning: '發音', meaning_zh: '發音', exampleJp: '日本語{にほんご}の発音{はつおん}は難{むずか}しいです。', exampleZh: '日語的發音很難。' },
      { word: '音', reading: 'おと', meaning: '聲音', meaning_zh: '聲音', exampleJp: '変{へん}な音{おと}が聞{き}こえます。', exampleZh: '聽到奇怪的聲音。' },
    ],

    grammarIds: ['n4_o_ni_naru', 'n4_o_kudasai', 'n4_nasaru'],

    grammarSummaries: [
      {
        grammarId: 'n4_o_ni_naru',
        pattern: 'お〜になる',
        meaning: '做〜（尊敬語）',
        quickExample: '先生{せんせい}はお帰{かえ}りになりました。',
        quickExampleZh: '老師回去了（尊敬語）。',
      },
      {
        grammarId: 'n4_o_kudasai',
        pattern: 'お〜ください',
        meaning: '請〜（尊敬語）',
        quickExample: 'どうぞお座{すわ}りください。',
        quickExampleZh: '請坐。',
      },
      {
        grammarId: 'n4_nasaru',
        pattern: 'なさる',
        meaning: '做（尊敬語）',
        quickExample: 'お仕事{しごと}は何{なに}をなさっていますか。',
        quickExampleZh: '您從事什麼工作？',
      },
    ],

    dialogue: [
      { speaker: '受付{うけつけ}', japanese: 'いらっしゃいませ。お約束{やくそく}はございますか。', chinese: '歡迎光臨。請問您有預約嗎？' },
      { speaker: '田中{たなか}', japanese: 'はい、3時{じ}のお約束{やくそく}です。部長{ぶちょう}はいらっしゃいますか。', chinese: '是的，預約了3點的會面。部長在嗎？' },
      { speaker: '受付{うけつけ}', japanese: '部長{ぶちょう}はまだお出{い}でになっていません。どうぞお座{すわ}りください。', chinese: '部長還沒有來。請坐。' },
      { speaker: '田中{たなか}', japanese: 'ありがとうございます。部長{ぶちょう}は何{なに}と仰{おっしゃ}っていましたか。', chinese: '謝謝。部長說了什麼嗎？' },
      { speaker: '受付{うけつけ}', japanese: 'この資料{しりょう}をご覧{らん}になりたいと仰{おっしゃ}っておりました。ご存{ぞん}じですか。', chinese: '部長說想看這份資料。您知道嗎？' },
      { speaker: '田中{たなか}', japanese: 'はい、資料{しりょう}は持{も}って参{まい}りました。', chinese: '是的，資料我帶來了。' },
      { speaker: '部長{ぶちょう}', japanese: 'お待{ま}たせしました。わざわざお出{い}で下{くだ}さりありがとうございます。', chinese: '讓您久等了。特地前來非常感謝。' },
      { speaker: '田中{たなか}', japanese: 'いえ、お時間{じかん}を頂{いただ}けて光栄{こうえい}です。', chinese: '不會，能得到您的時間真是榮幸。' },
      { speaker: '部長{ぶちょう}', japanese: '日本語{にほんご}の発音{はつおん}について少{すこ}しお話{はな}しなさいますか。', chinese: '要不要稍微聊聊日語發音？' },
      { speaker: '田中{たなか}', japanese: 'はい、ぜひ。先{さき}にこちらを召{め}し上{あ}がってください。お茶{ちゃ}をお持{も}ちしました。', chinese: '好的，一定要。請先享用這個。我帶了茶來。' },
      { speaker: '部長{ぶちょう}', japanese: 'ありがとう。変{へん}な音{おと}が聞{き}こえましたが、何{なに}かなさいましたか。', chinese: '謝謝。剛才聽到奇怪的聲音，您做了什麼嗎？' },
      { speaker: '田中{たなか}', japanese: 'すみません、コップを落{お}としてしまいました。', chinese: '不好意思，我把杯子掉了。' },
    ],

    quizQuestions: l1Quiz,
  },

  // ━━━ L2: 謙讓語基礎 ━━━
  {
    id: 'n4_u11_l2',
    unitId: 'n4_u11',
    order: 2,
    titleJp: '謙譲語の基礎',
    titleZh: '謙讓語基礎',
    objectives: [
      '學會常見的謙讓語動詞（参る、申す、頂く等）',
      '能用謙讓語描述自己的行為',
      '掌握「お〜する」句型',
    ],

    vocabulary: [
      { word: '頂く', reading: 'いただく', meaning: '領受（謙讓語）', meaning_zh: '領受（謙讓語）', exampleJp: 'お茶{ちゃ}を頂{いただ}きます。', exampleZh: '我來喝茶（領受）。' },
      { word: '致す', reading: 'いたす', meaning: '做（謙讓語）', meaning_zh: '做（謙讓語）', exampleJp: '私{わたし}が致{いた}します。', exampleZh: '我來做。' },
      { word: '参る', reading: 'まいる', meaning: '去（謙讓語）', meaning_zh: '去（謙讓語）', exampleJp: '明日{あした}そちらに参{まい}ります。', exampleZh: '明天我去那邊。' },
      { word: '申す', reading: 'もうす', meaning: '說（謙讓語）', meaning_zh: '說（謙讓語）', exampleJp: '田中{たなか}と申{もう}します。', exampleZh: '我叫田中。' },
      { word: '申し上げる', reading: 'もうしあげる', meaning: '說（謙讓語）', meaning_zh: '說（謙讓語）', exampleJp: 'お礼{れい}を申{もう}し上{あ}げます。', exampleZh: '向您致謝。' },
      { word: '差し上げる', reading: 'さしあげる', meaning: '給（謙讓語）', meaning_zh: '給（謙讓語）', exampleJp: 'お花{はな}を差{さ}し上{あ}げます。', exampleZh: '送花給您。' },
      { word: '拝見', reading: 'はいけん', meaning: '看（謙讓語）', meaning_zh: '看（謙讓語）', exampleJp: 'お写真{しゃしん}を拝見{はいけん}します。', exampleZh: '讓我看一下照片。' },
      { word: 'お祝い', reading: 'おいわい', meaning: '祝賀', meaning_zh: '祝賀', exampleJp: 'お祝{いわ}いの言葉{ことば}をいただきました。', exampleZh: '收到了祝賀的話語。' },
    ],

    grammarIds: ['n4_irassharu', 'n4_itashimasu', 'n4_de_gozaimasu'],

    grammarSummaries: [
      {
        grammarId: 'n4_irassharu',
        pattern: 'いらっしゃる',
        meaning: '在；來；去（尊敬語）',
        quickExample: '社長{しゃちょう}はいらっしゃいますか。',
        quickExampleZh: '社長在嗎？',
      },
      {
        grammarId: 'n4_itashimasu',
        pattern: 'いたします',
        meaning: '做（自謙語）',
        quickExample: '私{わたくし}がご案内{あんない}いたします。',
        quickExampleZh: '由我來為您帶路。',
      },
      {
        grammarId: 'n4_de_gozaimasu',
        pattern: 'でございます',
        meaning: '是（鄭重語）',
        quickExample: 'こちらが会議室{かいぎしつ}でございます。',
        quickExampleZh: '這邊是會議室。',
      },
    ],

    dialogue: [
      { speaker: '山本{やまもと}', japanese: '初{はじ}めまして。山本{やまもと}と申{もう}します。お会{あ}いできて光栄{こうえい}でございます。', chinese: '初次見面。我叫山本。能見到您真是榮幸。' },
      { speaker: '佐藤{さとう}', japanese: '佐藤{さとう}でございます。わざわざお出{い}でいただきありがとうございます。', chinese: '我是佐藤。特地前來真是感謝。' },
      { speaker: '山本{やまもと}', japanese: 'こちらにお祝{いわ}いの品{しな}がございます。差{さ}し上{あ}げたいのですが。', chinese: '這裡有祝賀的禮品。我想送給您。' },
      { speaker: '佐藤{さとう}', japanese: 'ありがとうございます。お気持{きも}ちを頂{いただ}きます。', chinese: '謝謝。我接受您的心意。' },
      { speaker: '山本{やまもと}', japanese: '先日{せんじつ}の資料{しりょう}を拝見{はいけん}いたしました。大変{たいへん}参考{さんこう}になりました。', chinese: '前幾天的資料我拜讀了。非常有參考價值。' },
      { speaker: '佐藤{さとう}', japanese: 'そう申{もう}し上{あ}げてくださると嬉{うれ}しいです。何{なに}かご質問{しつもん}はございますか。', chinese: '您這麼說我很開心。有什麼問題嗎？' },
      { speaker: '山本{やまもと}', japanese: '一点{いってん}お聞{き}きしたいことがございます。来月{らいげつ}の会議{かいぎ}に参{まい}りたいのですが。', chinese: '有一點想請教的。我想出席下個月的會議。' },
      { speaker: '佐藤{さとう}', japanese: 'もちろんです。私{わたし}がご案内{あんない}いたします。会議室{かいぎしつ}はこちらでございます。', chinese: '當然。由我來帶路。會議室在這邊。' },
      { speaker: '山本{やまもと}', japanese: 'ありがとうございます。後日{ごじつ}改{あらた}めてお礼{れい}を申{もう}し上{あ}げます。', chinese: '謝謝。改天我會再正式向您致謝。' },
      { speaker: '佐藤{さとう}', japanese: 'お気{き}になさらないでください。社長{しゃちょう}もいらっしゃいますので、ご紹介{しょうかい}いたしますね。', chinese: '請不要介意。社長也在，我來為您介紹。' },
      { speaker: '山本{やまもと}', japanese: '恐{おそ}れ入{い}ります。致{いた}しかたないことですが、少{すこ}し緊張{きんちょう}しています。', chinese: '不好意思。沒辦法的事，我有點緊張。' },
    ],

    quizQuestions: l2Quiz,
  },

  // ━━━ L3: 敬語綜合運用 ━━━
  {
    id: 'n4_u11_l3',
    unitId: 'n4_u11',
    order: 3,
    titleJp: '敬語の総合運用',
    titleZh: '敬語綜合運用',
    objectives: [
      '能在正式場合同時使用尊敬語和謙讓語',
      '掌握鄭重語「ございます」的用法',
      '能區分尊敬語與謙讓語的使用對象',
    ],

    vocabulary: [
      { word: '字', reading: 'じ', meaning: '字', meaning_zh: '字', exampleJp: 'もう少{すこ}し大{おお}きい字{じ}で書{か}いてください。', exampleZh: '請寫大一點的字。' },
      { word: '辞典', reading: 'じてん', meaning: '詞典', meaning_zh: '詞典', exampleJp: '辞典{じてん}で調{しら}べました。', exampleZh: '用詞典查了。' },
      { word: '消しゴム', reading: 'けしごむ', meaning: '橡皮擦', meaning_zh: '橡皮擦', exampleJp: '消{け}しゴムを貸{か}してください。', exampleZh: '請借我橡皮擦。' },
      { word: '喧嘩', reading: 'けんか', meaning: '吵架', meaning_zh: '吵架', exampleJp: '友達{ともだち}と喧嘩{けんか}しました。', exampleZh: '和朋友吵架了。' },
      { word: '君', reading: 'くん', meaning: '君', meaning_zh: '君', exampleJp: '田中{たなか}君{くん}、こっちに来{き}てください。', exampleZh: '田中君，請過來這邊。' },
      { word: '億', reading: 'おく', meaning: '億', meaning_zh: '億', exampleJp: '日本{にほん}の人口{じんこう}は一億{いちおく}人{にん}以上{いじょう}です。', exampleZh: '日本的人口超過一億人。' },
      { word: '表', reading: 'おもて', meaning: '正面', meaning_zh: '正面', exampleJp: 'カードの表{おもて}を見{み}てください。', exampleZh: '請看卡片的正面。' },
      { word: '警察', reading: 'けいさつ', meaning: '警察', meaning_zh: '警察', exampleJp: '警察{けいさつ}に届{とど}けました。', exampleZh: '報了警。' },
    ],

    grammarIds: ['n4_gozaimasu', 'n4_te_sumimasen', 'n4_te_yokatta'],

    grammarSummaries: [
      {
        grammarId: 'n4_gozaimasu',
        pattern: 'ございます',
        meaning: '有；在（鄭重語）',
        quickExample: 'お手洗{てあら}いは２階{かい}にございます。',
        quickExampleZh: '洗手間在2樓。',
      },
      {
        grammarId: 'n4_te_sumimasen',
        pattern: '〜てすみません',
        meaning: '對不起做了〜',
        quickExample: '遅{おく}れてすみません。',
        quickExampleZh: '抱歉遲到了。',
      },
      {
        grammarId: 'n4_te_yokatta',
        pattern: '〜てよかった',
        meaning: '真好〜；幸好〜',
        quickExample: '間{ま}に合{あ}ってよかったです。',
        quickExampleZh: '幸好趕上了。',
      },
    ],

    dialogue: [
      { speaker: '部長{ぶちょう}', japanese: '田中{たなか}君{くん}、遅{おく}れてすみません。お待{ま}たせしました。', chinese: '田中君，抱歉遲到了。讓您久等了。' },
      { speaker: '田中{たなか}', japanese: 'いえ、大丈夫{だいじょうぶ}です。お会{あ}いできてよかったです。', chinese: '不會，沒關係。能見到您真是太好了。' },
      { speaker: '部長{ぶちょう}', japanese: 'この辞典{じてん}はとても役{やく}に立{た}ちますよ。差{さ}し上{あ}げましょう。', chinese: '這本詞典非常有用。送給您吧。' },
      { speaker: '田中{たなか}', japanese: 'ありがとうございます。頂{いただ}きます。字{じ}が大{おお}きくて見{み}やすいですね。', chinese: '謝謝。我收下了。字很大很好讀呢。' },
      { speaker: '部長{ぶちょう}', japanese: '表{おもて}のページを見{み}てください。ここに億{おく}と書{か}いてありますが、数字{すうじ}が間違{まちが}っています。', chinese: '請看正面的頁面。這裡寫著億，但數字寫錯了。' },
      { speaker: '田中{たなか}', japanese: 'あ、本当{ほんとう}ですね。消{け}しゴムはございますか。すぐに直{なお}します。', chinese: '啊，真的耶。有橡皮擦嗎？我馬上改正。' },
      { speaker: '部長{ぶちょう}', japanese: 'ここにございます。あ、隣{となり}の部屋{へや}から変{へん}な音{おと}が聞{き}こえますね。喧嘩{けんか}ですかね。', chinese: '在這裡。啊，從隔壁房間傳來奇怪的聲音呢。是在吵架嗎？' },
      { speaker: '田中{たなか}', japanese: '心配{しんぱい}ですね。警察{けいさつ}に届{とど}けた方{ほう}がいいですか。', chinese: '令人擔心呢。要不要報警？' },
      { speaker: '部長{ぶちょう}', japanese: '大丈夫{だいじょうぶ}でしょう。多分{たぶん}テレビの音{おと}ですよ。何{なに}もなくてよかったです。', chinese: '應該沒事。大概是電視的聲音。什麼事都沒有真是太好了。' },
      { speaker: '田中{たなか}', japanese: 'そうですね。驚{おどろ}かせてすみません。では、資料{しりょう}の確認{かくにん}を続{つづ}けましょう。', chinese: '也是呢。嚇到您真不好意思。那我們繼續確認資料吧。' },
      { speaker: '部長{ぶちょう}', japanese: 'はい。何{なに}かあったらいつでもこちらにいらっしゃってくださいね。', chinese: '好。有什麼事的話隨時過來。' },
    ],

    quizQuestions: l3Quiz,
  },

  // ━━━ L4: 感覺動詞 ━━━
  {
    id: 'n4_u11_l4',
    unitId: 'n4_u11',
    order: 4,
    titleJp: '感覚動詞',
    titleZh: '感覺動詞',
    objectives: [
      '學會感覺動詞（見える、聞こえる等）的用法',
      '區分「見える」與「見つける」的不同',
      '掌握自動詞與他動詞的對應關係',
    ],

    vocabulary: [
      { word: '見える', reading: 'みえる', meaning: '看見', meaning_zh: '看見', exampleJp: '富士山{ふじさん}が見{み}えます。', exampleZh: '看得到富士山。' },
      { word: '見つかる', reading: 'みつかる', meaning: '找到', meaning_zh: '找到', exampleJp: '鍵{かぎ}が見{み}つかりました。', exampleZh: '鑰匙找到了。' },
      { word: '見つける', reading: 'みつける', meaning: '尋找', meaning_zh: '尋找', exampleJp: 'いい店{みせ}を見{み}つけました。', exampleZh: '找到了一家好店。' },
      { word: '聞こえる', reading: 'きこえる', meaning: '聽得見', meaning_zh: '聽得見', exampleJp: '鳥{とり}の声{こえ}が聞{き}こえます。', exampleZh: '聽得到鳥叫聲。' },
      { word: '似る', reading: 'にる', meaning: '相似', meaning_zh: '相似', exampleJp: 'お母{かあ}さんに似{に}ていますね。', exampleZh: '跟媽媽很像呢。' },
      { word: '鳴る', reading: 'なる', meaning: '響', meaning_zh: '響', exampleJp: '電話{でんわ}が鳴{な}っています。', exampleZh: '電話在響。' },
      { word: '眠る', reading: 'ねむる', meaning: '睡覺', meaning_zh: '睡覺', exampleJp: '昨日{きのう}はよく眠{ねむ}れませんでした。', exampleZh: '昨天沒睡好。' },
      { word: '無くなる', reading: 'なくなる', meaning: '丟失', meaning_zh: '丟失', exampleJp: '財布{さいふ}が無{な}くなりました。', exampleZh: '錢包不見了。' },
    ],

    grammarIds: ['n4_dewa_nai_ka', 'n4_janai_ka', 'n4_dokoro_ka'],

    grammarSummaries: [
      {
        grammarId: 'n4_dewa_nai_ka',
        pattern: '〜ではないか',
        meaning: '不是〜嗎？',
        quickExample: 'これは君{きみ}のではないか。',
        quickExampleZh: '這不是你的嗎？',
      },
      {
        grammarId: 'n4_janai_ka',
        pattern: '〜じゃないか',
        meaning: '不是〜嗎（口語）',
        quickExample: 'いいじゃないか。やってみよう。',
        quickExampleZh: '不是很好嗎，試試看吧。',
      },
      {
        grammarId: 'n4_dokoro_ka',
        pattern: '〜どころか',
        meaning: '哪裡是〜；別說〜',
        quickExample: '漢字{かんじ}どころか、ひらがなも読{よ}めません。',
        quickExampleZh: '別說漢字了，連平假名都看不懂。',
      },
    ],

    dialogue: [
      { speaker: '佐藤{さとう}', japanese: 'あ、あそこに何{なに}か見{み}えませんか。人{ひと}が集{あつ}まっていますね。', chinese: '啊，那邊是不是看得到什麼？好多人聚集在那裡。' },
      { speaker: '山田{やまだ}', japanese: '本当{ほんとう}だ。太鼓{たいこ}の音{おと}が鳴{な}っているのも聞{き}こえますよ。祭{まつ}りじゃないか。', chinese: '真的耶。也聽得到太鼓在響的聲音。不是祭典嗎？' },
      { speaker: '佐藤{さとう}', japanese: 'あの子{こ}、お母{かあ}さんに似{に}ていてかわいいですね。目{め}がそっくりです。', chinese: '那個小朋友長得像媽媽好可愛。眼睛一模一樣。' },
      { speaker: '山田{やまだ}', japanese: 'そうですね。あ、携帯{けいたい}が鳴{な}っていますよ。', chinese: '對啊。啊，你的手機在響。' },
      { speaker: '佐藤{さとう}', japanese: 'あ、すみません。昨夜{さくや}はよく眠{ねむ}れなくて、気{き}づきませんでした。', chinese: '啊，不好意思。昨晚沒睡好，沒注意到。' },
      { speaker: '山田{やまだ}', japanese: 'どうしたんですか。何{なに}か心配{しんぱい}なことでもありますか。', chinese: '怎麼了？有什麼煩心的事嗎？' },
      { speaker: '佐藤{さとう}', japanese: '実{じつ}は財布{さいふ}が無{な}くなったんです。どこを探{さが}しても見{み}つからなくて。', chinese: '其實錢包不見了。到處找都找不到。' },
      { speaker: '山田{やまだ}', japanese: 'えっ、大変{たいへん}ですね。でもきっと見{み}つかりますよ。財布{さいふ}どころか、鍵{かぎ}もですか。', chinese: '什麼，太糟糕了。但一定會找到的。別說錢包了，鑰匙也是嗎？' },
      { speaker: '佐藤{さとう}', japanese: 'いえ、鍵{かぎ}は大丈夫{だいじょうぶ}です。あ、見{み}つけました！カバンの中{なか}にありました。', chinese: '不是，鑰匙沒問題。啊，找到了！在包包裡面。' },
      { speaker: '山田{やまだ}', japanese: 'よかったじゃないか。心配{しんぱい}しましたよ。', chinese: '那不是很好嗎。讓人擔心了。' },
      { speaker: '佐藤{さとう}', japanese: '眠{ねむ}れないと注意力{ちゅういりょく}が落{お}ちますね。今夜{こんや}は早{はや}く寝{ね}ます。', chinese: '睡不好注意力就會下降呢。今晚要早點睡。' },
    ],

    quizQuestions: l4Quiz,
  },

  // ━━━ L5: 推理與判斷 ━━━
  {
    id: 'n4_u11_l5',
    unitId: 'n4_u11',
    order: 5,
    titleJp: '推理と判断',
    titleZh: '推理與判斷',
    objectives: [
      '掌握「べきだ」表示義務或應該',
      '掌握「わけがない」表示不可能',
      '能根據理由做出邏輯判斷的表達',
    ],

    vocabulary: [
      { word: '亡くなる', reading: 'なくなる', meaning: '去世', meaning_zh: '去世', exampleJp: '祖父{そふ}は去年{きょねん}亡{な}くなりました。', exampleZh: '祖父去年過世了。' },
      { word: '込む', reading: 'こむ', meaning: '混雜', meaning_zh: '混雜', exampleJp: '電車{でんしゃ}がとても込{こ}んでいます。', exampleZh: '電車非常擠。' },
      { word: '構う', reading: 'かまう', meaning: '在意', meaning_zh: '在意', exampleJp: '気{き}にしないで、構{かま}わないよ。', exampleZh: '別在意，沒關係的。' },
      { word: '暮れる', reading: 'くれる', meaning: '天黑', meaning_zh: '天黑', exampleJp: '日{ひ}が暮{く}れる前{まえ}に帰{かえ}りましょう。', exampleZh: '天黑前回去吧。' },
      { word: '比べる', reading: 'くらべる', meaning: '比較', meaning_zh: '比較', exampleJp: '二{ふた}つを比{くら}べてみましょう。', exampleZh: '來比較看看兩個吧。' },
      { word: '思い出す', reading: 'おもいだす', meaning: '想起', meaning_zh: '想起', exampleJp: '急{きゅう}に昔{むかし}のことを思{おも}い出{だ}しました。', exampleZh: '突然想起了以前的事。' },
      { word: '急', reading: 'きゅう', meaning: '緊急', meaning_zh: '緊急', exampleJp: '急{きゅう}な用事{ようじ}ができました。', exampleZh: '有了緊急的事情。' },
      { word: '悪い', reading: 'わるい', meaning: '壞', meaning_zh: '壞', exampleJp: '天気{てんき}が悪{わる}いですね。', exampleZh: '天氣很差呢。' },
    ],

    grammarIds: ['n4_wa_ga_wa', 'n4_nado', 'n4_toka'],

    grammarSummaries: [
      {
        grammarId: 'n4_wa_ga_wa',
        pattern: '〜は〜が…は',
        meaning: 'A〜但B〜',
        quickExample: '魚{さかな}は食{た}べますが、肉{にく}は食{た}べません。',
        quickExampleZh: '魚吃，但肉不吃。',
      },
      {
        grammarId: 'n4_nado',
        pattern: '〜など',
        meaning: '〜等等；〜之類',
        quickExample: 'りんごやみかんなどの果物{くだもの}が好{す}きです。',
        quickExampleZh: '喜歡蘋果、橘子等水果。',
      },
      {
        grammarId: 'n4_toka',
        pattern: '〜とか',
        meaning: '〜之類的',
        quickExample: '映画{えいが}とか音楽{おんがく}とか好{す}きです。',
        quickExampleZh: '喜歡電影啦、音樂之類的。',
      },
    ],

    dialogue: [
      { speaker: '佐藤{さとう}', japanese: '最近{さいきん}天気{てんき}が悪{わる}いですね。急{きゅう}に寒{さむ}くなりました。', chinese: '最近天氣很差呢。突然變冷了。' },
      { speaker: '山田{やまだ}', japanese: '電車{でんしゃ}も込{こ}んでいるし、大変{たいへん}ですよね。バスとか電車{でんしゃ}など、どっちがいいか比{くら}べてみましたか。', chinese: '電車也很擠，真的很辛苦。公車啦電車之類的，有比較看看哪個好嗎？' },
      { speaker: '佐藤{さとう}', japanese: '電車{でんしゃ}は速{はや}いですが、バスは座{すわ}れますからね。構{かま}わないなら歩{ある}いてもいいんですが。', chinese: '電車快，但公車能坐。不在意的話走路也行。' },
      { speaker: '山田{やまだ}', japanese: '日{ひ}が暮{く}れる前{まえ}に帰{かえ}るべきですよ。暗{くら}くなると危{あぶ}ないですから。', chinese: '應該在天黑前回去。天暗了會危險。' },
      { speaker: '佐藤{さとう}', japanese: 'そうですね。あ、昔{むかし}のことを思{おも}い出{だ}しました。子{こ}どもの頃{ころ}、いつも暗{くら}くなるまで遊{あそ}んでいました。', chinese: '說得對。啊，想起以前的事了。小時候總是玩到天黑。' },
      { speaker: '山田{やまだ}', japanese: '懐{なつ}かしいですね。でも今{いま}は安全{あんぜん}に気{き}をつけるべきです。', chinese: '好懷念呢。但現在應該注意安全。' },
      { speaker: '佐藤{さとう}', japanese: 'そういえば、犬{いぬ}がまだ見{み}つからないんです。あんなに元気{げんき}な犬{いぬ}がいなくなるわけがないと思{おも}うんですが。', chinese: '對了，狗還沒找到。我覺得那麼有活力的狗不可能就這樣不見的。' },
      { speaker: '山田{やまだ}', japanese: '目{め}は悪{わる}いんですか。遠{とお}くは見{み}えにくいとか。', chinese: '視力不好嗎？例如看不太到遠處之類的。' },
      { speaker: '佐藤{さとう}', japanese: '目{め}は悪{わる}いですが、鼻{はな}はいいんです。匂{にお}いなどで道{みち}を覚{おぼ}えているはずです。', chinese: '視力不好，但鼻子很靈。應該是靠氣味等記住路的。' },
      { speaker: '山田{やまだ}', japanese: '大丈夫{だいじょうぶ}ですよ。きっと見{み}つかります。諦{あきら}めるわけがないでしょう。', chinese: '沒問題的。一定會找到。不可能放棄的對吧。' },
      { speaker: '佐藤{さとう}', japanese: 'ありがとう。もう一度{いちど}探{さが}しに行{い}きます。', chinese: '謝謝。我再去找一次。' },
    ],

    quizQuestions: l5Quiz,
  },

  // ━━━ L6: 比較與列舉 ━━━
  {
    id: 'n4_u11_l6',
    unitId: 'n4_u11',
    order: 6,
    titleJp: '比較と列挙',
    titleZh: '比較與列舉',
    objectives: [
      '掌握「とか〜とか」列舉多個事物',
      '學會「より」進行比較的表達',
      '能使用含糊表達「〜とか」',
    ],

    vocabulary: [
      { word: '育てる', reading: 'そだてる', meaning: '養育', meaning_zh: '養育', exampleJp: '花{はな}を育{そだ}てるのが好{す}きです。', exampleZh: '喜歡種花。' },
      { word: '生じる', reading: 'しょうじる', meaning: '產生', meaning_zh: '產生', exampleJp: '問題{もんだい}が生{しょう}じました。', exampleZh: '產生了問題。' },
      { word: '踊り', reading: 'おどり', meaning: '舞蹈', meaning_zh: '舞蹈', exampleJp: '日本{にほん}の踊{おど}りを見{み}ました。', exampleZh: '看了日本的舞蹈。' },
      { word: '踊る', reading: 'おどる', meaning: '跳舞', meaning_zh: '跳舞', exampleJp: 'みんなで一緒{いっしょ}に踊{おど}りましょう。', exampleZh: '大家一起跳舞吧。' },
      { word: '西洋', reading: 'せいよう', meaning: '西洋', meaning_zh: '西洋', exampleJp: '西洋{せいよう}の文化{ぶんか}に興味{きょうみ}があります。', exampleZh: '對西洋文化有興趣。' },
      { word: '市', reading: 'し', meaning: '市', meaning_zh: '市', exampleJp: '横浜{よこはま}市{し}に住{す}んでいます。', exampleZh: '住在橫濱市。' },
      { word: '市民', reading: 'しみん', meaning: '市民', meaning_zh: '市民', exampleJp: '市民{しみん}の意見{いけん}を聞{き}きました。', exampleZh: '聽取了市民的意見。' },
      { word: '祈る', reading: 'いのる', meaning: '祈禱', meaning_zh: '祈禱', exampleJp: '成功{せいこう}を祈{いの}っています。', exampleZh: '祝你成功（祈禱著成功）。' },
    ],

    grammarIds: ['n4_toka_toka', 'n4_to_ka', 'n4_yori'],

    grammarSummaries: [
      {
        grammarId: 'n4_toka_toka',
        pattern: '〜とか〜とか',
        meaning: '例如〜和〜等等',
        quickExample: '東京{とうきょう}とか大阪{おおさか}とかに行{い}きたいです。',
        quickExampleZh: '想去東京、大阪等地方。',
      },
      {
        grammarId: 'n4_to_ka',
        pattern: '〜とか',
        meaning: '〜什麼的（含糊表達）',
        quickExample: '田中{たなか}さんとかいう人{ひと}が来{き}ました。',
        quickExampleZh: '一個叫田中什麼的人來了。',
      },
      {
        grammarId: 'n4_yori',
        pattern: '〜より',
        meaning: '比〜',
        quickExample: '電車{でんしゃ}よりバスのほうが安{やす}いです。',
        quickExampleZh: '公車比電車便宜。',
      },
    ],

    dialogue: [
      { speaker: '佐藤{さとう}', japanese: '市民{しみん}の祭{まつ}りが始{はじ}まりましたね。踊{おど}りとか歌{うた}とか、色々{いろいろ}やっていますよ。', chinese: '市民的祭典開始了呢。舞蹈啦唱歌之類的，好多活動。' },
      { speaker: '山田{やまだ}', japanese: '西洋{せいよう}の踊{おど}りもあるみたいですね。昔{むかし}より規模{きぼ}が大{おお}きくなっています。', chinese: '好像也有西洋舞蹈呢。比以前規模更大了。' },
      { speaker: '佐藤{さとう}', japanese: '子{こ}どもたちが楽{たの}しそうに踊{おど}っていますね。花{はな}を育{そだ}てるコーナーもありますよ。', chinese: '孩子們跳舞跳得很開心呢。也有種花的攤位。' },
      { speaker: '山田{やまだ}', japanese: '横浜{よこはま}市{し}とか神戸{こうべ}市{し}とかでも同{おな}じような祭{まつ}りがあるそうですよ。', chinese: '聽說橫濱市啦神戶市之類的也有類似的祭典。' },
      { speaker: '佐藤{さとう}', japanese: '規模{きぼ}はこちらの方{ほう}が大{おお}きいですか。あちらより盛{さか}んですか。', chinese: '規模是這邊比較大嗎？比那邊熱鬧嗎？' },
      { speaker: '山田{やまだ}', japanese: '田中{たなか}さんとかいう人{ひと}が、こちらの方{ほう}が楽{たの}しいと言{い}っていましたよ。', chinese: '一個叫田中什麼的人說這邊比較好玩。' },
      { speaker: '佐藤{さとう}', japanese: 'そうなんですね。あ、見{み}てください。問題{もんだい}が生{しょう}じたみたいです。音響{おんきょう}が壊{こわ}れたとか。', chinese: '是這樣啊。啊，你看。好像出問題了。音響壞了什麼的。' },
      { speaker: '山田{やまだ}', japanese: '大丈夫{だいじょうぶ}でしょう。祭{まつ}りの成功{せいこう}を祈{いの}りましょう。', chinese: '應該沒問題。祈禱祭典成功吧。' },
      { speaker: '佐藤{さとう}', japanese: '市民{しみん}のみんなが子{こ}どもたちを育{そだ}てるように、お祭{まつ}りも大切{たいせつ}に育{そだ}てていきたいですね。', chinese: '就像市民們養育孩子一樣，也想好好培養祭典呢。' },
      { speaker: '山田{やまだ}', japanese: 'いい考{かんが}えですね。西洋{せいよう}より日本{にほん}の踊{おど}りの方{ほう}が好{す}きですが、両方{りょうほう}楽{たの}しめるのがいいですね。', chinese: '好想法呢。比起西洋我更喜歡日本的舞蹈，但兩邊都能享受最棒了。' },
      { speaker: '佐藤{さとう}', japanese: '来年{らいねん}はもっと盛{さか}んになるといいですね。成功{せいこう}を祈{いの}っています。', chinese: '希望明年能更熱鬧。祝成功。' },
    ],

    quizQuestions: l6Quiz,
  },
]
