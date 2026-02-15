import type { LessonDefinition } from '../../../../types/course'
import type { UnifiedQuestion } from '../../../questions/types'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Unit 12: 時間與總複習 (Time & Comprehensive Review)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ─── L1 Quiz: 時間表達 ───
const l1Quiz: UnifiedQuestion[] = [
  {
    id: 'n4_u12_l1_q1', category: 'vocabulary', level: 'N4',
    stem: '「今度{こんど}」の意味{いみ}はどれですか。',
    stemZh: '「今度」的意思是哪個？',
    options: [
      { text: '上次', reason: '錯誤。上次是「前回{ぜんかい}」。' },
      { text: '這次', reason: '正確。今度{こんど}意為這次、下次。' },
      { text: '每次', reason: '錯誤。每次是「毎回{まいかい}」。' },
      { text: '最後一次', reason: '錯誤。最後一次是「最後{さいご}」。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '今度的詞義',
      analysis: '今度{こんど}意為「這次」或「下次」。根據語境可指即將到來的某次。',
      relatedRules: ['📖 本課 單字「今度」'],
    },
  },
  {
    id: 'n4_u12_l1_q2', category: 'vocabulary', level: 'N4',
    stem: '「昼間{ひるま}」の読{よ}み方{かた}はどれですか。',
    stemZh: '「昼間」的讀法是哪個？',
    options: [
      { text: 'ちゅうかん', reason: '錯誤。這是音讀，但「昼間」的常用讀法不是這個。' },
      { text: 'ひるあいだ', reason: '錯誤。「間」在此不讀「あいだ」。' },
      { text: 'ひるま', reason: '正確。昼間的讀音是「ひるま」，意為白天。' },
      { text: 'ひるかん', reason: '錯誤。混合了訓讀和音讀。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '昼間的讀音',
      analysis: '昼間{ひるま}意為白天。「昼」讀「ひる」，「間」在此讀「ま」，是特殊讀法。',
      relatedRules: ['📖 本課 單字「昼間」'],
    },
  },
  {
    id: 'n4_u12_l1_q3', category: 'vocabulary', level: 'N4',
    stem: '「＿＿、ここは海{うみ}でした。」空格{くうかく}に入{はい}る言葉{ことば}はどれですか。',
    stemZh: '「___，這裡是海。」空格應填入哪個詞？',
    options: [
      { text: 'このごろ', reason: '錯誤。「このごろ」是最近，語意不合。' },
      { text: 'この間{あいだ}', reason: '錯誤。「この間」是前幾天，時間跨度不夠。' },
      { text: '今夜{こんや}', reason: '錯誤。「今夜」是今晚，時態不對。' },
      { text: '昔{むかし}', reason: '正確。昔{むかし}意為很久以前，搭配過去式表示往事。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '昔的用法',
      analysis: '昔{むかし}意為很久以前，常用於回憶往事。搭配「でした」表示過去的狀態。',
      relatedRules: ['📖 本課 單字「昔」'],
    },
  },
  {
    id: 'n4_u12_l1_q4', category: 'vocabulary', level: 'N4',
    stem: '「昨夜{さくや}」と同{おな}じ意味{いみ}の言葉{ことば}はどれですか。',
    stemZh: '和「昨夜」意思相同的詞是哪個？',
    options: [
      { text: '今夜{こんや}', reason: '錯誤。「今夜」是今晚，不是昨晚。' },
      { text: 'ゆうべ', reason: '正確。「ゆうべ」和「昨夜」都是昨晚的意思。' },
      { text: '昼間{ひるま}', reason: '錯誤。「昼間」是白天。' },
      { text: '今度{こんど}', reason: '錯誤。「今度」是這次。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '昨夜的同義詞',
      analysis: '昨夜{さくや}和「ゆうべ」都表示昨天晚上。「昨夜」較為書面，「ゆうべ」較口語。',
      relatedRules: ['📖 本課 單字「昨夜」'],
    },
  },
  {
    id: 'n4_u12_l1_q5', category: 'vocabulary', level: 'N4',
    stem: '「このごろ」の意味{いみ}はどれですか。',
    stemZh: '「このごろ」的意思是哪個？',
    options: [
      { text: '很久以前', reason: '錯誤。很久以前是「昔{むかし}」。' },
      { text: '前幾天', reason: '錯誤。前幾天是「この間{あいだ}」。' },
      { text: '最近', reason: '正確。「このごろ」意為最近、近來。' },
      { text: '下次', reason: '錯誤。下次是「今度{こんど}」。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: 'このごろ的詞義',
      analysis: '「このごろ」意為最近、近來，指最近這段期間的狀態或趨勢。',
      relatedRules: ['📖 本課 單字「このごろ」'],
    },
  },
  {
    id: 'n4_u12_l1_q6', category: 'vocabulary', level: 'N4',
    stem: '「昼休{ひるやす}みに散歩{さんぽ}します。」の「昼休{ひるやす}み」はどんな意味{いみ}ですか。',
    stemZh: '「昼休みに散歩します。」中的「昼休み」是什麼意思？',
    options: [
      { text: '白天', reason: '錯誤。白天是「昼間{ひるま}」。' },
      { text: '午休', reason: '正確。昼休{ひるやす}み意為午休時間。' },
      { text: '晚休', reason: '錯誤。沒有這個詞。' },
      { text: '放學', reason: '錯誤。放學後是「放課後{ほうかご}」。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '昼休みの詞義',
      analysis: '昼休{ひるやす}み由「昼」（中午）和「休み」（休息）組成，指午休時間。',
      relatedRules: ['📖 本課 單字「昼休み」'],
    },
  },
  {
    id: 'n4_u12_l1_q7', category: 'grammar', level: 'N4',
    stem: '今{いま}、出{で}かける＿＿です。',
    stemZh: '現在正要出門。',
    options: [
      { text: 'ところ', reason: '正確。「動詞辭書形＋ところ」表示正要做某事。' },
      { text: 'こと', reason: '錯誤。「こと」用於名詞化，不表示正要做。' },
      { text: 'とき', reason: '錯誤。「とき」表示時候，但不強調即將發生。' },
      { text: 'まで', reason: '錯誤。「まで」表示到某時為止。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「〜ところ」表示正要做',
      analysis: '「動詞辭書形＋ところ」表示正要做某事、即將開始。「出かけるところ」= 正要出門。',
      relatedRules: ['📖 本課 文法「〜ところ」'],
    },
  },
  {
    id: 'n4_u12_l1_q8', category: 'grammar', level: 'N4',
    stem: 'ちょうどご飯{はん}を食{た}べた＿＿です。',
    stemZh: '剛好剛吃完飯。',
    options: [
      { text: 'こと', reason: '錯誤。「〜たこと」用於經驗，不表示剛完成。' },
      { text: 'あと', reason: '錯誤。「〜たあと」表示之後，語意不同。' },
      { text: 'ところ', reason: '正確。「動詞た形＋ところ」表示剛做完某事。' },
      { text: 'とき', reason: '錯誤。「〜たとき」表示做了的時候。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「〜たところ」表示剛完成',
      analysis: '「動詞た形＋ところ」表示剛剛做完某事。「食べたところ」= 剛吃完。',
      comparisons: ['「食べるところ」= 正要吃', '「食べているところ」= 正在吃', '「食べたところ」= 剛吃完'],
      relatedRules: ['📖 本課 文法「〜ところだ」'],
    },
  },
  {
    id: 'n4_u12_l1_q9', category: 'grammar', level: 'N4',
    stem: '今{いま}、宿題{しゅくだい}をしている＿＿です。邪魔{じゃま}しないでください。',
    stemZh: '現在正在寫作業。請不要打擾。',
    options: [
      { text: 'はず', reason: '錯誤。「はず」表示應該，不表示正在進行。' },
      { text: 'つもり', reason: '錯誤。「つもり」表示打算。' },
      { text: 'ところ', reason: '正確。「〜ているところ」表示正在進行中。' },
      { text: 'ため', reason: '錯誤。「ため」表示為了，語意不合。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「〜ているところ」表示正在進行',
      analysis: '「動詞ている＋ところ」表示某動作正在進行中。「している ところ」= 正在做。',
      relatedRules: ['📖 本課 文法「〜ところだ」'],
    },
  },
  {
    id: 'n4_u12_l1_q10', category: 'grammar', level: 'N4',
    stem: '映画{えいが}が＿＿ところだったので、結末{けつまつ}を教{おし}えないでください。',
    stemZh: '電影正看到一半，所以請不要告訴我結局。',
    options: [
      { text: '見{み}る', reason: '錯誤。辭書形＋ところ表示正要看，語意不合。' },
      { text: '見{み}た', reason: '錯誤。た形＋ところ表示剛看完，但還不知結局矛盾。' },
      { text: '見{み}ている', reason: '正確。「見ているところ」表示正在看的過程中。' },
      { text: '見{み}よう', reason: '錯誤。意志形不搭配ところ。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「〜ているところ」的活用',
      analysis: '因為還不知結局，表示正在觀看中，所以用「見ているところ」。',
      relatedRules: ['📖 本課 文法「〜ところだ」'],
    },
  },
  {
    id: 'n4_u12_l1_q11', category: 'vocabulary', level: 'N4',
    stem: '「この間{あいだ}」の意味{いみ}はどれですか。',
    stemZh: '「この間」的意思是哪個？',
    options: [
      { text: '今晚', reason: '錯誤。今晚是「今夜{こんや}」。' },
      { text: '白天', reason: '錯誤。白天是「昼間{ひるま}」。' },
      { text: '前幾天', reason: '正確。「この間」意為前幾天、前陣子。' },
      { text: '最近', reason: '錯誤。最近是「このごろ」。雖然意思接近，但「この間」指某特定一天。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: 'この間的詞義',
      analysis: '「この間{あいだ}」指前幾天、不久前的某一天。比「このごろ」更指向特定時間點。',
      comparisons: ['「この間」= 前幾天（某天）', '「このごろ」= 最近（一段期間）'],
      relatedRules: ['📖 本課 單字「この間」'],
    },
  },
  {
    id: 'n4_u12_l1_q12', category: 'vocabulary', level: 'N4',
    stem: '「今夜{こんや}は星{ほし}がきれいです。」の「今夜{こんや}」の読{よ}み方{かた}はどれですか。',
    stemZh: '「今夜は星がきれいです。」中的「今夜」讀法是哪個？',
    options: [
      { text: 'こんよる', reason: '錯誤。不是訓讀組合。' },
      { text: 'いまよ', reason: '錯誤。不存在此讀法。' },
      { text: 'きょうや', reason: '錯誤。「今」在此不讀「きょう」。' },
      { text: 'こんや', reason: '正確。今夜的讀音是「こんや」。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '今夜的讀音',
      analysis: '今夜{こんや}意為今天晚上。「今」讀「こん」，「夜」讀「や」。',
      relatedRules: ['📖 本課 單字「今夜」'],
    },
  },
  {
    id: 'n4_u12_l1_q13', category: 'grammar', level: 'N4',
    stem: 'お風呂{ふろ}に＿＿ところです。まだ体{からだ}が濡{ぬ}れています。',
    stemZh: '剛洗完澡。身體還是濕的。',
    options: [
      { text: '入{はい}る', reason: '錯誤。辭書形＋ところ表示正要入浴，與「濡れている」矛盾。' },
      { text: '入{はい}っている', reason: '錯誤。表示正在洗，但「まだ濡れている」暗示已出浴。' },
      { text: '入{はい}った', reason: '正確。「入ったところ」表示剛洗完澡，所以身體還濕的。' },
      { text: '入{はい}ろう', reason: '錯誤。意志形不搭配ところ。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '從語境判斷ところ的時態',
      analysis: '身體還是濕的，說明剛完成洗澡這個動作，所以用「入ったところ」。',
      relatedRules: ['📖 本課 文法「〜ところだ」'],
    },
  },
  {
    id: 'n4_u12_l1_q14', category: 'grammar', level: 'N4',
    stem: '次{つぎ}の文{ぶん}で「ところ」の使{つか}い方{かた}が正{ただ}しいのはどれですか。',
    stemZh: '下列哪個句子中「ところ」的用法是正確的？',
    options: [
      { text: '昨日{きのう}食{た}べるところです。', reason: '錯誤。「食べるところ」表示正要吃，不能搭配「昨日」。' },
      { text: '今{いま}、帰{かえ}ったところです。', reason: '正確。「帰ったところ」表示剛到家，搭配「今」合理。' },
      { text: '明日{あした}、食{た}べたところです。', reason: '錯誤。「食べたところ」表示剛吃完，不能搭配「明日」。' },
      { text: '来週{らいしゅう}、読{よ}んでいるところです。', reason: '錯誤。「読んでいるところ」表示正在讀，不能搭配「来週」。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: 'ところ與時間副詞的搭配',
      analysis: '「ところ」描述的是說話當下的狀態，所以通常搭配「今」「ちょうど」等詞。不能與「昨日」「明日」「来週」等搭配。',
      relatedRules: ['📖 本課 文法「〜ところ」'],
    },
  },
  {
    id: 'n4_u12_l1_q15', category: 'vocabulary', level: 'N4',
    stem: '「昔{むかし}」の読{よ}み方{かた}はどれですか。',
    stemZh: '「昔」的讀法是哪個？',
    options: [
      { text: 'むかし', reason: '正確。昔的讀音是「むかし」。' },
      { text: 'せき', reason: '錯誤。這是「席」等字的讀音。' },
      { text: 'しゃく', reason: '錯誤。這不是「昔」的讀音。' },
      { text: 'さく', reason: '錯誤。這是「昨」的音讀。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '昔的讀音',
      analysis: '昔{むかし}是訓讀，意為很久以前。常見於「昔話{むかしばなし}」（民間故事）等詞。',
      relatedRules: ['📖 本課 單字「昔」'],
    },
  },
]

// ─── L2 Quiz: 日常與安全 ───
const l2Quiz: UnifiedQuestion[] = [
  {
    id: 'n4_u12_l2_q1', category: 'vocabulary', level: 'N4',
    stem: '「再来月{さらいげつ}」の意味{いみ}はどれですか。',
    stemZh: '「再来月」的意思是哪個？',
    options: [
      { text: '上個月', reason: '錯誤。上個月是「先月{せんげつ}」。' },
      { text: '下個月', reason: '錯誤。下個月是「来月{らいげつ}」。' },
      { text: '下下個月', reason: '正確。再来月{さらいげつ}意為下下個月。' },
      { text: '每個月', reason: '錯誤。每個月是「毎月{まいつき}」。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '再来月的詞義',
      analysis: '「再来月{さらいげつ}」由「再」和「来月」組成，表示下下個月。同樣地，「再来週{さらいしゅう}」是下下週。',
      comparisons: ['「来月」= 下個月', '「再来月」= 下下個月'],
      relatedRules: ['📖 本課 單字「再来月」'],
    },
  },
  {
    id: 'n4_u12_l2_q2', category: 'vocabulary', level: 'N4',
    stem: '「帰{かえ}りにスーパーに寄{よ}りました。」の「帰{かえ}り」はどんな意味{いみ}ですか。',
    stemZh: '「帰りにスーパーに寄りました。」中的「帰り」是什麼意思？',
    options: [
      { text: '歸途', reason: '正確。「帰り」意為回家的路上、歸途。' },
      { text: '出發', reason: '錯誤。出發是「出発{しゅっぱつ}」。' },
      { text: '到達', reason: '錯誤。到達是「到着{とうちゃく}」。' },
      { text: '旅行', reason: '錯誤。旅行是「旅行{りょこう}」。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '帰りの詞義',
      analysis: '「帰{かえ}り」是「帰る」的名詞形，表示回去的路上、歸途。「帰りに」= 在回家途中。',
      relatedRules: ['📖 本課 單字「帰り」'],
    },
  },
  {
    id: 'n4_u12_l2_q3', category: 'vocabulary', level: 'N4',
    stem: '「留守{るす}の間{あいだ}に荷物{にもつ}が届{とど}きました。」の「留守{るす}」はどんな意味{いみ}ですか。',
    stemZh: '「留守の間に荷物が届きました。」中的「留守」是什麼意思？',
    options: [
      { text: '在家', reason: '錯誤。留守是不在家，恰恰相反。' },
      { text: '不在家', reason: '正確。留守{るす}意為不在家、外出中。' },
      { text: '搬家', reason: '錯誤。搬家是「引{ひ}っ越{こ}し」。' },
      { text: '睡覺', reason: '錯誤。睡覺是「寝{ね}る」。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '留守的詞義',
      analysis: '留守{るす}意為不在家。「留守の間に」= 不在家的期間。「留守番{るすばん}」= 看家。',
      relatedRules: ['📖 本課 單字「留守」'],
    },
  },
  {
    id: 'n4_u12_l2_q4', category: 'vocabulary', level: 'N4',
    stem: '「泥棒{どろぼう}」と「すり」の違{ちが}いは何{なん}ですか。',
    stemZh: '「泥棒」和「すり」的差別是什麼？',
    options: [
      { text: '兩個都是指火災', reason: '錯誤。火災是「火事{かじ}」。' },
      { text: '泥棒是小偷、すり是扒手', reason: '正確。泥棒闖入偷竊，すり在人群中扒竊。' },
      { text: '泥棒是警察、すり是小偷', reason: '錯誤。警察是「警察{けいさつ}」。' },
      { text: '兩個意思完全相同', reason: '錯誤。雖然都是偷竊，但方式不同。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '泥棒與すり的區別',
      analysis: '泥棒{どろぼう}指闖入住家或商店偷竊的小偷。すり指在人群中趁人不備扒竊錢包等的扒手。',
      comparisons: ['「泥棒」= 小偷（闖入偷竊）', '「すり」= 扒手（人群中扒竊）'],
      relatedRules: ['📖 本課 單字「泥棒」', '📖 本課 單字「すり」'],
    },
  },
  {
    id: 'n4_u12_l2_q5', category: 'vocabulary', level: 'N4',
    stem: '「火事{かじ}」の意味{いみ}はどれですか。',
    stemZh: '「火事」的意思是哪個？',
    options: [
      { text: '地震', reason: '錯誤。地震是「地震{じしん}」。' },
      { text: '事故', reason: '錯誤。事故是「事故{じこ}」。' },
      { text: '火災', reason: '正確。火事{かじ}意為火災。' },
      { text: '颱風', reason: '錯誤。颱風是「台風{たいふう}」。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '火事的詞義',
      analysis: '火事{かじ}意為火災。「火事が起きる」= 發生火災。注意「火」讀「か」，「事」讀「じ」。',
      relatedRules: ['📖 本課 單字「火事」'],
    },
  },
  {
    id: 'n4_u12_l2_q6', category: 'vocabulary', level: 'N4',
    stem: '「終{お}わり」の意味{いみ}はどれですか。',
    stemZh: '「終わり」的意思是哪個？',
    options: [
      { text: '開始', reason: '錯誤。開始是「始{はじ}まり」。' },
      { text: '結束', reason: '正確。終{お}わり意為結束、終結。' },
      { text: '中間', reason: '錯誤。中間是「途中{とちゅう}」。' },
      { text: '準備', reason: '錯誤。準備是「準備{じゅんび}」。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '終わりの詞義',
      analysis: '終{お}わり是「終わる」的名詞形，意為結束。反義詞是「始まり」（開始）。',
      relatedRules: ['📖 本課 單字「終わり」'],
    },
  },
  {
    id: 'n4_u12_l2_q7', category: 'grammar', level: 'N4',
    stem: '出{で}かけようとした＿＿、友達{ともだち}が来{き}ました。',
    stemZh: '正要出門的時候，朋友來了。',
    options: [
      { text: 'ところに', reason: '正確。「〜ところに」表示正當做某事的時候，突然發生了別的事。' },
      { text: 'ところで', reason: '錯誤。「ところで」是「話說回來」的轉折詞。' },
      { text: 'ところが', reason: '錯誤。「ところが」是「然而」的逆接詞。' },
      { text: 'ところを', reason: '錯誤。「ところを」語意不合。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「〜ところに」的用法',
      analysis: '「〜ところに」表示在正要做某事或正在做某事的時候，突然有另一件事發生。強調意外的插入。',
      relatedRules: ['📖 本課 文法「〜ところに」'],
    },
  },
  {
    id: 'n4_u12_l2_q8', category: 'grammar', level: 'N4',
    stem: '調{しら}べた＿＿、問題{もんだい}はありませんでした。',
    stemZh: '調查之後，發現沒有問題。',
    options: [
      { text: 'ところ', reason: '正確。「〜たところ」表示做了之後的結果。' },
      { text: 'ところに', reason: '錯誤。「〜ところに」表示正當某時，語意不合。' },
      { text: 'ところで', reason: '錯誤。「ところで」是轉折詞。' },
      { text: 'ところが', reason: '錯誤。「ところが」是逆接，後面應接出乎意料的結果。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「〜たところ」表示結果',
      analysis: '「〜たところ」表示做了某事之後得到的結果。「調べたところ」= 調查之後（發現）。',
      relatedRules: ['📖 本課 文法「〜たところ」'],
    },
  },
  {
    id: 'n4_u12_l2_q9', category: 'grammar', level: 'N4',
    stem: '彼{かれ}はずっとあなたを＿＿いました。',
    stemZh: '他一直在等你。',
    options: [
      { text: '待{ま}って', reason: '正確。「ずっと〜ていた」表示持續進行某動作，「待っていた」= 一直在等。' },
      { text: '待{ま}った', reason: '錯誤。「待った」是單純的過去式，無法表示持續。' },
      { text: '待{ま}つ', reason: '錯誤。辭書形不搭配「いました」。' },
      { text: '待{ま}とう', reason: '錯誤。意志形不搭配「いました」。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「ずっと」與持續態的搭配',
      analysis: '「ずっと」表示一直、始終。搭配「〜ていた」表示過去持續的狀態：「ずっと待っていた」= 一直在等。',
      relatedRules: ['📖 本課 文法「ずっと」'],
    },
  },
  {
    id: 'n4_u12_l2_q10', category: 'grammar', level: 'N4',
    stem: '東京{とうきょう}は大阪{おおさか}より＿＿人{ひと}が多{おお}いです。',
    stemZh: '東京比大阪人多得多。',
    options: [
      { text: 'もっと', reason: '錯誤。「もっと」表示更加，但不如「ずっと」強調差距。' },
      { text: 'ちょっと', reason: '錯誤。「ちょっと」表示稍微，差距太小。' },
      { text: 'ずっと', reason: '正確。「ずっと」也可表示程度差距大，意為「〜得多」。' },
      { text: 'だんだん', reason: '錯誤。「だんだん」表示漸漸。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「ずっと」表示程度差距大',
      analysis: '「ずっと」除了表示「一直」之外，也可用在比較句中表示「〜得多」。「ずっと多い」= 多得多。',
      relatedRules: ['📖 本課 文法「ずっと」'],
    },
  },
  {
    id: 'n4_u12_l2_q11', category: 'vocabulary', level: 'N4',
    stem: '「再来週{さらいしゅう}」の意味{いみ}はどれですか。',
    stemZh: '「再来週」的意思是哪個？',
    options: [
      { text: '上上週', reason: '錯誤。上上週是「先々週{せんせんしゅう}」。' },
      { text: '下下週', reason: '正確。再来週{さらいしゅう}意為下下週。' },
      { text: '上週', reason: '錯誤。上週是「先週{せんしゅう}」。' },
      { text: '下週', reason: '錯誤。下週是「来週{らいしゅう}」。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '再来週的詞義',
      analysis: '再来週{さらいしゅう}意為下下週。「再」表示再下一個。',
      comparisons: ['「先々週」= 上上週', '「先週」= 上週', '「来週」= 下週', '「再来週」= 下下週'],
      relatedRules: ['📖 本課 單字「再来週」'],
    },
  },
  {
    id: 'n4_u12_l2_q12', category: 'grammar', level: 'N4',
    stem: '寝{ね}ている＿＿、大{おお}きな地震{じしん}が来{き}ました。',
    stemZh: '正在睡覺的時候，發生了大地震。',
    options: [
      { text: 'ところで', reason: '錯誤。「ところで」是「話說回來」。' },
      { text: 'ところを', reason: '錯誤。「ところを」語意不合。' },
      { text: 'ところに', reason: '正確。「〜ているところに」表示正在做某事時，發生了意外。' },
      { text: 'ところが', reason: '錯誤。「ところが」是逆接的連接詞。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「〜ているところに」的用法',
      analysis: '「〜ているところに」表示正在進行某動作時，突然發生了另一件事。「寝ているところに」= 正在睡覺時。',
      relatedRules: ['📖 本課 文法「〜ところに」'],
    },
  },
  {
    id: 'n4_u12_l2_q13', category: 'grammar', level: 'N4',
    stem: '電話{でんわ}をかけた＿＿、誰{だれ}も出{で}ませんでした。',
    stemZh: '打了電話之後，沒有人接。',
    options: [
      { text: 'ところが', reason: '錯誤。「ところが」是連接詞，不直接接在動詞後。' },
      { text: 'ところに', reason: '錯誤。「〜たところに」表示剛做完時有事發生，語感不同。' },
      { text: 'ところ', reason: '正確。「〜たところ」表示做了之後發現的結果。' },
      { text: 'ところで', reason: '錯誤。「ところで」是轉折用語。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「〜たところ」表示嘗試後的結果',
      analysis: '「電話をかけたところ」= 打了電話之後（發現）。後面接結果描述。',
      relatedRules: ['📖 本課 文法「〜たところ」'],
    },
  },
  {
    id: 'n4_u12_l2_q14', category: 'grammar', level: 'N4',
    stem: '子供{こども}の頃{ころ}から＿＿ピアノを弾{ひ}いています。',
    stemZh: '從小時候開始一直在彈鋼琴。',
    options: [
      { text: 'だんだん', reason: '錯誤。「だんだん」表示漸漸。' },
      { text: 'そろそろ', reason: '錯誤。「そろそろ」表示差不多該。' },
      { text: 'ときどき', reason: '錯誤。「ときどき」表示有時候，不是一直。' },
      { text: 'ずっと', reason: '正確。「ずっと」表示從那時候到現在一直持續。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '「ずっと」表示持續',
      analysis: '「〜からずっと」表示從某時起一直持續到現在。「子供の頃からずっと」= 從小一直。',
      relatedRules: ['📖 本課 文法「ずっと」'],
    },
  },
  {
    id: 'n4_u12_l2_q15', category: 'vocabulary', level: 'N4',
    stem: '電車{でんしゃ}で＿＿に注意{ちゅうい}してください。',
    stemZh: '在電車上請注意___。',
    options: [
      { text: '泥棒{どろぼう}', reason: '錯誤。泥棒是闖入住家的小偷，不是在電車上的。' },
      { text: '火事{かじ}', reason: '錯誤。火事是火災，語境不合。' },
      { text: 'すり', reason: '正確。すり是扒手，常出沒於電車等人多的地方。' },
      { text: '留守{るす}', reason: '錯誤。留守是不在家，不是人。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '語境判斷：すり',
      analysis: '「すり」是扒手，常在電車、人群等擁擠場所出沒。「すりに注意する」= 注意扒手。',
      relatedRules: ['📖 本課 單字「すり」'],
    },
  },
]

// ─── L3 Quiz: 事件與行動 ───
const l3Quiz: UnifiedQuestion[] = [
  {
    id: 'n4_u12_l3_q1', category: 'vocabulary', level: 'N4',
    stem: '「事故{じこ}」の意味{いみ}はどれですか。',
    stemZh: '「事故」的意思是哪個？',
    options: [
      { text: '地震', reason: '錯誤。地震是「地震{じしん}」。' },
      { text: '事故', reason: '正確。事故{じこ}意為事故、意外事件。' },
      { text: '火災', reason: '錯誤。火災是「火事{かじ}」。' },
      { text: '颱風', reason: '錯誤。颱風是「台風{たいふう}」。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '事故的詞義',
      analysis: '事故{じこ}意為事故、意外事件。「交通事故」= 交通事故。',
      relatedRules: ['📖 本課 單字「事故」'],
    },
  },
  {
    id: 'n4_u12_l3_q2', category: 'vocabulary', level: 'N4',
    stem: '「地震{じしん}」の読{よ}み方{かた}はどれですか。',
    stemZh: '「地震」的讀法是哪個？',
    options: [
      { text: 'ちしん', reason: '錯誤。「地」在此不讀「ち」。' },
      { text: 'じしん', reason: '正確。地震的讀音是「じしん」。' },
      { text: 'じぶん', reason: '錯誤。「じぶん」是「自分」（自己）。' },
      { text: 'じけん', reason: '錯誤。「じけん」是「事件」。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '地震的讀音',
      analysis: '地震{じしん}的讀音是「じしん」。「地」讀「じ」，「震」讀「しん」。',
      relatedRules: ['📖 本課 單字「地震」'],
    },
  },
  {
    id: 'n4_u12_l3_q3', category: 'vocabulary', level: 'N4',
    stem: '「引{ひ}き出{だ}し」と「引{ひ}き出{だ}す」の違{ちが}いは何{なん}ですか。',
    stemZh: '「引き出し」和「引き出す」的差別是什麼？',
    options: [
      { text: '引き出し是動詞、引き出す是名詞', reason: '錯誤。恰好相反。' },
      { text: '引き出し是抽屜（名詞）、引き出す是提取（動詞）', reason: '正確。一個是名詞，一個是動詞。' },
      { text: '意思完全相同', reason: '錯誤。詞性和意思都不同。' },
      { text: '引き出し是推、引き出す是拉', reason: '錯誤。「引く」本身就是拉的意思。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '引き出し與引き出す的區別',
      analysis: '「引き出し」是名詞，意為抽屜。「引き出す」是動詞，意為提取、拉出。兩者都包含「引き出」但詞性不同。',
      comparisons: ['「引き出し」= 抽屜（名詞）', '「引き出す」= 提取（動詞）'],
      relatedRules: ['📖 本課 單字「引き出し」', '📖 本課 單字「引き出す」'],
    },
  },
  {
    id: 'n4_u12_l3_q4', category: 'vocabulary', level: 'N4',
    stem: '「逃{に}げる」の意味{いみ}はどれですか。',
    stemZh: '「逃げる」的意思是哪個？',
    options: [
      { text: '追趕', reason: '錯誤。追趕是「追{お}いかける」。' },
      { text: '躲藏', reason: '錯誤。躲藏是「隠{かく}れる」。' },
      { text: '逃跑', reason: '正確。逃{に}げる意為逃跑。' },
      { text: '尋找', reason: '錯誤。尋找是「探{さが}す」。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '逃げるの詞義',
      analysis: '逃{に}げる是一段動詞，意為逃跑、逃走。地震時常用「すぐに逃げてください」（請馬上逃跑）。',
      relatedRules: ['📖 本課 單字「逃げる」'],
    },
  },
  {
    id: 'n4_u12_l3_q5', category: 'vocabulary', level: 'N4',
    stem: '「この辞書{じしょ}はとても＿＿。」に入{はい}る表現{ひょうげん}はどれですか。',
    stemZh: '「這本辭典非常___。」應填入哪個表達？',
    options: [
      { text: '役{やく}に立{た}ちます', reason: '正確。「役に立つ」意為有用。' },
      { text: '予定{よてい}です', reason: '錯誤。「予定」是預定，語意不合。' },
      { text: '予約{よやく}します', reason: '錯誤。「予約」是預約，語意不合。' },
      { text: '逃{に}げます', reason: '錯誤。「逃げる」是逃跑，語意不合。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '役に立つ的用法',
      analysis: '「役{やく}に立{た}つ」意為有用、有幫助。「この辞書はとても役に立ちます」= 這本辭典非常有用。',
      relatedRules: ['📖 本課 單字「役に立つ」'],
    },
  },
  {
    id: 'n4_u12_l3_q6', category: 'vocabulary', level: 'N4',
    stem: '「予定{よてい}」と「予約{よやく}」の違{ちが}いはどれですか。',
    stemZh: '「予定」和「予約」的差別是什麼？',
    options: [
      { text: '意思完全相同', reason: '錯誤。雖然都有「預先」之意，但使用場景不同。' },
      { text: '予定是預定行程、予約是向他人預約', reason: '正確。予定是自己的計畫，予約是向對方預訂。' },
      { text: '予定是過去、予約是未來', reason: '錯誤。兩者都可用於未來。' },
      { text: '予定是口語、予約是書面語', reason: '錯誤。兩者在口語和書面都常用。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '予定與予約的區別',
      analysis: '「予定{よてい}」是自己的行程、計畫。「予約{よやく}」是向餐廳、醫院等預訂。',
      comparisons: ['「予定」= 預定行程（自己的計畫）', '「予約」= 預約（向對方預訂）'],
      relatedRules: ['📖 本課 單字「予定」', '📖 本課 單字「予約」'],
    },
  },
  {
    id: 'n4_u12_l3_q7', category: 'grammar', level: 'N4',
    stem: 'この店{みせ}は安{やす}いです。＿＿、おいしいです。',
    stemZh: '這家店很便宜。___，很好吃。',
    options: [
      { text: 'そして', reason: '錯誤。「そして」表示順序或結果，不強調追加。' },
      { text: 'それに', reason: '正確。「それに」用於追加正面或同方向的資訊，表示「而且」。' },
      { text: 'または', reason: '錯誤。「または」表示選擇，語意不合。' },
      { text: 'しかし', reason: '錯誤。「しかし」表示逆接，前後語意方向相同不需逆接。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「それに」表示追加',
      analysis: '「それに」用於追加同方向的資訊，意為「而且、再說」。前後通常都是正面或都是負面。',
      relatedRules: ['📖 本課 文法「それに」'],
    },
  },
  {
    id: 'n4_u12_l3_q8', category: 'grammar', level: 'N4',
    stem: '朝{あさ}ごはんを食{た}べました。＿＿、学校{がっこう}に行{い}きました。',
    stemZh: '吃了早餐。___，去了學校。',
    options: [
      { text: 'それに', reason: '錯誤。「それに」表示追加，不表示時間順序。' },
      { text: 'または', reason: '錯誤。「または」表示選擇。' },
      { text: 'そして', reason: '正確。「そして」表示時間上的先後順序，意為「然後」。' },
      { text: 'でも', reason: '錯誤。「でも」表示逆接。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「そして」表示順序',
      analysis: '「そして」用於描述按時間順序發生的事件，意為「然後、於是」。',
      relatedRules: ['📖 本課 文法「そして」'],
    },
  },
  {
    id: 'n4_u12_l3_q9', category: 'grammar', level: 'N4',
    stem: 'メール＿＿電話{でんわ}でご連絡{れんらく}ください。',
    stemZh: '請透過電子郵件___電話聯絡。',
    options: [
      { text: 'それに', reason: '錯誤。「それに」表示追加，不表示選擇。' },
      { text: 'そして', reason: '錯誤。「そして」表示順序，不表示選擇。' },
      { text: 'でも', reason: '錯誤。「でも」表示逆接。' },
      { text: 'または', reason: '正確。「または」表示選擇，意為「或者」。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '「または」表示選擇',
      analysis: '「または」用於提供兩個或以上的選項，意為「或者、或是」。較為正式。',
      relatedRules: ['📖 本課 文法「または」'],
    },
  },
  {
    id: 'n4_u12_l3_q10', category: 'grammar', level: 'N4',
    stem: '日本語{にほんご}はきれいです。＿＿、文法{ぶんぽう}がおもしろいです。',
    stemZh: '日語很優美。___，文法很有趣。',
    options: [
      { text: 'しかし', reason: '錯誤。前後都是正面評價，不需要逆接。' },
      { text: 'または', reason: '錯誤。「または」表示選擇，語意不合。' },
      { text: 'それに', reason: '正確。「それに」追加同方向的正面評價：「而且」。' },
      { text: 'だから', reason: '錯誤。「だから」表示因果，但「文法有趣」不是「優美」的結果。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「それに」追加同方向資訊',
      analysis: '前後都是對日語的正面評價，用「それに」來追加。「きれい」和「おもしろい」方向一致。',
      relatedRules: ['📖 本課 文法「それに」'],
    },
  },
  {
    id: 'n4_u12_l3_q11', category: 'grammar', level: 'N4',
    stem: '次{つぎ}の中{なか}で「または」の使{つか}い方{かた}が正{ただ}しいのはどれですか。',
    stemZh: '下列哪個「または」的用法是正確的？',
    options: [
      { text: '雨{あめ}が降{ふ}りました。または、傘{かさ}を持{も}っていきました。', reason: '錯誤。前後是因果關係，不是選擇。' },
      { text: '現金{げんきん}またはクレジットカードでお支払{しはら}いください。', reason: '正確。提供兩種付款方式的選擇。' },
      { text: '走{はし}りました。または、疲{つか}れました。', reason: '錯誤。前後是因果關係，不是選擇。' },
      { text: '昨日{きのう}はまたは暑{あつ}かったです。', reason: '錯誤。語法錯誤，「または」不能這樣用。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「または」的正確用法',
      analysis: '「または」連接兩個可以選擇的選項。「現金またはクレジットカード」= 現金或信用卡。',
      relatedRules: ['📖 本課 文法「または」'],
    },
  },
  {
    id: 'n4_u12_l3_q12', category: 'vocabulary', level: 'N4',
    stem: '銀行{ぎんこう}でお金{かね}を＿＿。',
    stemZh: '在銀行提了錢。',
    options: [
      { text: '引{ひ}き出{だ}しました', reason: '正確。「引き出す」意為提取（金錢）。' },
      { text: '逃{に}げました', reason: '錯誤。「逃げる」是逃跑。' },
      { text: '予約{よやく}しました', reason: '錯誤。「予約する」是預約。' },
      { text: '役{やく}に立{た}ちました', reason: '錯誤。「役に立つ」是有用。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「引き出す」搭配金錢',
      analysis: '「お金を引き出す」是從銀行提取金錢的固定說法。',
      relatedRules: ['📖 本課 單字「引き出す」'],
    },
  },
  {
    id: 'n4_u12_l3_q13', category: 'grammar', level: 'N4',
    stem: '友達{ともだち}に会{あ}いました。＿＿、一緒{いっしょ}にカフェに入{はい}りました。＿＿、映画{えいが}を見{み}に行{い}きました。',
    stemZh: '遇到了朋友。___，一起進了咖啡廳。___，去看了電影。',
    options: [
      { text: 'それに / または', reason: '錯誤。事件有時間先後，用「そして」更自然。' },
      { text: 'そして / そして', reason: '正確。描述按時間順序發生的連續事件。' },
      { text: 'または / それに', reason: '錯誤。不是選擇也不是追加同質資訊。' },
      { text: 'でも / しかし', reason: '錯誤。前後沒有轉折關係。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「そして」串連時間順序',
      analysis: '描述一連串按時間順序發生的事件，每個環節之間用「そして」連接。',
      relatedRules: ['📖 本課 文法「そして」'],
    },
  },
  {
    id: 'n4_u12_l3_q14', category: 'vocabulary', level: 'N4',
    stem: '「予約{よやく}」の意味{いみ}はどれですか。',
    stemZh: '「予約」的意思是哪個？',
    options: [
      { text: '約定', reason: '錯誤。約定是「約束{やくそく}」。' },
      { text: '預定行程', reason: '錯誤。預定行程是「予定{よてい}」。' },
      { text: '預約', reason: '正確。予約{よやく}意為預約、預訂。' },
      { text: '準備', reason: '錯誤。準備是「準備{じゅんび}」。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '予約的詞義',
      analysis: '予約{よやく}意為預約、預訂。常用「予約する」表示進行預約動作。',
      relatedRules: ['📖 本課 單字「予約」'],
    },
  },
  {
    id: 'n4_u12_l3_q15', category: 'grammar', level: 'N4',
    stem: 'この問題{もんだい}は難{むずか}しいです。＿＿、時間{じかん}もかかります。',
    stemZh: '這個問題很難。___，也很花時間。',
    options: [
      { text: 'そして', reason: '錯誤。「そして」強調順序，但這裡是追加同類資訊。' },
      { text: 'それに', reason: '正確。用「それに」追加另一個負面特點：又難又花時間。' },
      { text: 'または', reason: '錯誤。「または」表示選擇。' },
      { text: 'だから', reason: '錯誤。「花時間」不是「難」的直接結果。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「それに」追加負面資訊',
      analysis: '「それに」不只用於正面，也可追加同方向的負面資訊。這裡兩點都是困難之處。',
      relatedRules: ['📖 本課 文法「それに」'],
    },
  },
]

// ─── L4 Quiz: 日常用語與世界 ───
const l4Quiz: UnifiedQuestion[] = [
  {
    id: 'n4_u12_l4_q1', category: 'vocabulary', level: 'N4',
    stem: '「用事{ようじ}」の意味{いみ}はどれですか。',
    stemZh: '「用事」的意思是哪個？',
    options: [
      { text: '用具', reason: '錯誤。用具是「道具{どうぐ}」。' },
      { text: '準備', reason: '錯誤。準備是「用意{ようい}」。' },
      { text: '事情', reason: '正確。用事{ようじ}意為事情、要辦的事。' },
      { text: '用途', reason: '錯誤。用途是「用{よう}」。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '用事的詞義',
      analysis: '用事{ようじ}意為事情、要辦的事。「用事がある」= 有事情要辦。',
      relatedRules: ['📖 本課 單字「用事」'],
    },
  },
  {
    id: 'n4_u12_l4_q2', category: 'vocabulary', level: 'N4',
    stem: '「用意{ようい}」の意味{いみ}はどれですか。',
    stemZh: '「用意」的意思是哪個？',
    options: [
      { text: '準備', reason: '正確。用意{ようい}意為準備。' },
      { text: '事情', reason: '錯誤。事情是「用事{ようじ}」。' },
      { text: '注意', reason: '錯誤。注意是「注意{ちゅうい}」。' },
      { text: '意見', reason: '錯誤。意見是「意見{いけん}」。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '用意的詞義',
      analysis: '用意{ようい}意為準備、備妥。「資料を用意する」= 準備資料。',
      comparisons: ['「用意」= 準備', '「用事」= 事情', '「用」= 用途'],
      relatedRules: ['📖 本課 單字「用意」'],
    },
  },
  {
    id: 'n4_u12_l4_q3', category: 'vocabulary', level: 'N4',
    stem: '「アジア」はどこですか。',
    stemZh: '「アジア」是哪裡？',
    options: [
      { text: '非洲', reason: '錯誤。非洲是「アフリカ」。' },
      { text: '美國', reason: '錯誤。美國是「アメリカ」。' },
      { text: '歐洲', reason: '錯誤。歐洲是「ヨーロッパ」。' },
      { text: '亞洲', reason: '正確。アジア意為亞洲。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '地名アジア',
      analysis: '「アジア」是亞洲的片假名表記。台灣、日本都在亞洲。',
      relatedRules: ['📖 本課 單字「アジア」'],
    },
  },
  {
    id: 'n4_u12_l4_q4', category: 'vocabulary', level: 'N4',
    stem: '「タイプ」の意味{いみ}はどれですか。',
    stemZh: '「タイプ」的意思是哪個？',
    options: [
      { text: '時間', reason: '錯誤。時間是「タイム」。' },
      { text: '類型', reason: '正確。タイプ意為類型。' },
      { text: '打字', reason: '錯誤。雖然タイプ也可指打字，但在此課語境中指類型。' },
      { text: '輪胎', reason: '錯誤。輪胎是「タイヤ」。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: 'タイプ的詞義',
      analysis: '「タイプ」在日常會話中常指類型、種類。「どんなタイプ」= 什麼類型。',
      relatedRules: ['📖 本課 單字「タイプ」'],
    },
  },
  {
    id: 'n4_u12_l4_q5', category: 'vocabulary', level: 'N4',
    stem: '「この線{せん}の上{うえ}に名前{なまえ}を書{か}いてください。」の「線{せん}」はどんな意味{いみ}ですか。',
    stemZh: '「この線の上に名前を書いてください。」中的「線」是什麼意思？',
    options: [
      { text: '線', reason: '正確。線{せん}意為線條。' },
      { text: '鐵路', reason: '錯誤。雖然「〜線」可指鐵路路線，但此處指線條。' },
      { text: '圓圈', reason: '錯誤。圓圈是「丸{まる}」。' },
      { text: '方格', reason: '錯誤。方格是「マス」。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '線的詞義',
      analysis: '線{せん}意為線條。「線の上に書く」= 在線條上面寫。',
      relatedRules: ['📖 本課 單字「線」'],
    },
  },
  {
    id: 'n4_u12_l4_q6', category: 'vocabulary', level: 'N4',
    stem: '「アフリカ」と「アメリカ」と「アジア」、全部{ぜんぶ}で何{なん}大州{たいしゅう}ですか。',
    stemZh: '「アフリカ」「アメリカ」「アジア」合起來是幾大洲？',
    options: [
      { text: '一大洲', reason: '錯誤。它們分別是不同的洲。' },
      { text: '二大洲', reason: '錯誤。有三個不同的洲。' },
      { text: '三大洲', reason: '正確。非洲、美洲、亞洲分別是三個大洲。' },
      { text: '四大洲', reason: '錯誤。只列了三個。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '世界地名的識別',
      analysis: '「アフリカ」= 非洲、「アメリカ」= 美洲/美國、「アジア」= 亞洲，共三個大洲。',
      relatedRules: ['📖 本課 單字「アフリカ」', '📖 本課 單字「アメリカ」', '📖 本課 單字「アジア」'],
    },
  },
  {
    id: 'n4_u12_l4_q7', category: 'grammar', level: 'N4',
    stem: '今日{きょう}は暇{ひま}ですから、映画{えいが}＿＿見{み}ませんか。',
    stemZh: '今天有空，要不要看個電影之類的？',
    options: [
      { text: 'を', reason: '錯誤。「映画を見る」是直接表達，缺少「之類的」的含義。' },
      { text: 'でも', reason: '正確。「名詞＋でも」表示「〜之類的」，語氣較輕鬆。' },
      { text: 'など', reason: '錯誤。「など」也表示「等」，但不如「でも」口語且自然。' },
      { text: 'しか', reason: '錯誤。「しか」搭配否定表示「只有」。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「でも」表示舉例',
      analysis: '「名詞＋でも」表示「〜之類的」，語氣較為隨意輕鬆。「映画でも見ませんか」= 要不要看個電影什麼的？',
      relatedRules: ['📖 本課 文法「でも」'],
    },
  },
  {
    id: 'n4_u12_l4_q8', category: 'grammar', level: 'N4',
    stem: '誰{だれ}＿＿参加{さんか}できます。',
    stemZh: '無論誰都可以參加。',
    options: [
      { text: 'も', reason: '錯誤。「誰も」搭配否定表示「誰都不」。' },
      { text: 'か', reason: '錯誤。「誰か」表示「某人」。' },
      { text: 'でも', reason: '正確。「疑問詞＋でも」表示「無論〜都」。' },
      { text: 'が', reason: '錯誤。「誰が」是疑問，不表示「無論誰」。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「疑問詞＋でも」表示無論',
      analysis: '「疑問詞＋でも」表示全面肯定：「誰でも」= 無論誰、「何でも」= 無論什麼、「いつでも」= 無論何時。',
      relatedRules: ['📖 本課 文法「でも（助詞）」'],
    },
  },
  {
    id: 'n4_u12_l4_q9', category: 'grammar', level: 'N4',
    stem: '日本語{にほんご}の＿＿、英語{えいご}も話{はな}せます。',
    stemZh: '除了日語之外，也會說英語。',
    options: [
      { text: 'ほかに', reason: '正確。「〜のほかに」表示除了〜之外還有。' },
      { text: 'ために', reason: '錯誤。「ために」表示為了。' },
      { text: 'かわりに', reason: '錯誤。「かわりに」表示代替。' },
      { text: 'おかげで', reason: '錯誤。「おかげで」表示託〜的福。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「〜のほかに」的用法',
      analysis: '「〜のほかに」表示除了前述的事物之外，還有其他。「日本語のほかに」= 除了日語之外。',
      relatedRules: ['📖 本課 文法「〜ほかに」'],
    },
  },
  {
    id: 'n4_u12_l4_q10', category: 'grammar', level: 'N4',
    stem: 'いつ＿＿電話{でんわ}してください。',
    stemZh: '無論何時都可以打電話。',
    options: [
      { text: 'か', reason: '錯誤。「いつか」表示某天，不是無論何時。' },
      { text: 'でも', reason: '正確。「いつでも」表示無論何時。' },
      { text: 'も', reason: '錯誤。「いつも」表示總是，語感不同。' },
      { text: 'まで', reason: '錯誤。「いつまで」表示到什麼時候為止。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「いつでも」表示無論何時',
      analysis: '「いつでも」是「疑問詞＋でも」的形式，表示無論何時。',
      relatedRules: ['📖 本課 文法「でも（助詞）」'],
    },
  },
  {
    id: 'n4_u12_l4_q11', category: 'vocabulary', level: 'N4',
    stem: '「何{なん}の用{よう}ですか。」の「用{よう}」はどんな意味{いみ}ですか。',
    stemZh: '「何の用ですか。」中的「用」是什麼意思？',
    options: [
      { text: '用途、目的', reason: '正確。「用」在此指用途或事由。「何の用」= 什麼事/什麼目的。' },
      { text: '準備', reason: '錯誤。準備是「用意{ようい}」。' },
      { text: '事件', reason: '錯誤。事件是「事件{じけん}」。' },
      { text: '工具', reason: '錯誤。工具是「道具{どうぐ}」。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「用」的詞義',
      analysis: '「用{よう}」意為用途、事由。「何の用ですか」= 有什麼事嗎？是較直接的問法。',
      relatedRules: ['📖 本課 單字「用」'],
    },
  },
  {
    id: 'n4_u12_l4_q12', category: 'grammar', level: 'N4',
    stem: '英語{えいご}のほかに、＿＿語{ご}を勉強{べんきょう}していますか。',
    stemZh: '除了英語之外，還在學什麼語言嗎？',
    options: [
      { text: '何{なに}', reason: '正確。「ほかに何」= 除此之外還有什麼。' },
      { text: 'いつ', reason: '錯誤。「いつ」是時間疑問詞，語意不合。' },
      { text: 'どこ', reason: '錯誤。「どこ」是地點疑問詞，語意不合。' },
      { text: '誰{だれ}', reason: '錯誤。「誰」是人的疑問詞，語意不合。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「ほかに」搭配疑問詞',
      analysis: '「ほかに何」= 除此之外還有什麼。「ほかに」後面接疑問詞時，用於詢問是否還有其他。',
      relatedRules: ['📖 本課 文法「〜ほかに」'],
    },
  },
  {
    id: 'n4_u12_l4_q13', category: 'grammar', level: 'N4',
    stem: '疲{つか}れましたね。コーヒー＿＿飲{の}みましょう。',
    stemZh: '累了呢。喝杯咖啡之類的吧。',
    options: [
      { text: 'を', reason: '錯誤。「を」是直接受詞助詞，缺少隨意提議的語氣。' },
      { text: 'が', reason: '錯誤。「が」用法不對。' },
      { text: 'でも', reason: '正確。「コーヒーでも」表示咖啡之類的，語氣輕鬆。' },
      { text: 'しか', reason: '錯誤。「しか」搭配否定。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「でも」用於輕鬆提議',
      analysis: '「名詞＋でも＋動詞」用於輕鬆地提議做某事。「コーヒーでも飲みましょう」= 喝杯咖啡什麼的吧。',
      relatedRules: ['📖 本課 文法「でも」'],
    },
  },
  {
    id: 'n4_u12_l4_q14', category: 'vocabulary', level: 'N4',
    stem: '「アフリカ」はどこですか。',
    stemZh: '「アフリカ」是哪裡？',
    options: [
      { text: '亞洲', reason: '錯誤。亞洲是「アジア」。' },
      { text: '非洲', reason: '正確。アフリカ意為非洲。' },
      { text: '美國', reason: '錯誤。美國是「アメリカ」。' },
      { text: '歐洲', reason: '錯誤。歐洲是「ヨーロッパ」。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '地名アフリカ',
      analysis: '「アフリカ」是非洲的片假名表記。注意不要和「アメリカ」（美國）混淆。',
      relatedRules: ['📖 本課 單字「アフリカ」'],
    },
  },
  {
    id: 'n4_u12_l4_q15', category: 'grammar', level: 'N4',
    stem: 'どこ＿＿行{い}けますから、好{す}きな場所{ばしょ}を選{えら}んでください。',
    stemZh: '無論哪裡都可以去，請選喜歡的地方。',
    options: [
      { text: 'か', reason: '錯誤。「どこか」表示某處，不是無論哪裡。' },
      { text: 'も', reason: '錯誤。「どこも」搭配否定使用。' },
      { text: 'へ', reason: '錯誤。「どこへ」是去哪裡（疑問）。' },
      { text: 'でも', reason: '正確。「どこでも」= 無論哪裡都。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '「どこでも」表示無論哪裡',
      analysis: '「どこでも」是「疑問詞＋でも」的形式，表示無論哪裡。同類：「誰でも」「何でも」「いつでも」。',
      relatedRules: ['📖 本課 文法「でも（助詞）」'],
    },
  },
]

// ─── L5 Quiz: 生活與設施 ───
const l5Quiz: UnifiedQuestion[] = [
  {
    id: 'n4_u12_l5_q1', category: 'vocabulary', level: 'N4',
    stem: '「ガソリンスタンド」の意味{いみ}はどれですか。',
    stemZh: '「ガソリンスタンド」的意思是哪個？',
    options: [
      { text: '停車場', reason: '錯誤。停車場是「駐車場{ちゅうしゃじょう}」。' },
      { text: '公車站', reason: '錯誤。公車站是「バス停{てい}」。' },
      { text: '加油站', reason: '正確。ガソリンスタンド意為加油站。' },
      { text: '休息站', reason: '錯誤。休息站是「サービスエリア」。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: 'ガソリンスタンド的詞義',
      analysis: '「ガソリンスタンド」是和製英語（gasoline stand），意為加油站。「ガソリン」= 汽油。',
      relatedRules: ['📖 本課 單字「ガソリンスタンド」'],
    },
  },
  {
    id: 'n4_u12_l5_q2', category: 'vocabulary', level: 'N4',
    stem: '「ガスを止{と}めてください。」の「ガス」はどんな意味{いみ}ですか。',
    stemZh: '「ガスを止めてください。」中的「ガス」是什麼意思？',
    options: [
      { text: '汽油', reason: '錯誤。汽油是「ガソリン」。' },
      { text: '煤氣', reason: '正確。ガス意為煤氣、瓦斯。' },
      { text: '電力', reason: '錯誤。電力是「電気{でんき}」。' },
      { text: '自來水', reason: '錯誤。自來水是「水道{すいどう}」。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: 'ガスの詞義',
      analysis: '「ガス」源自英語 gas，在日語中主要指煤氣、瓦斯。「ガスを止める」= 關掉煤氣。',
      relatedRules: ['📖 本課 單字「ガス」'],
    },
  },
  {
    id: 'n4_u12_l5_q3', category: 'vocabulary', level: 'N4',
    stem: '「相談{そうだん}」の意味{いみ}はどれですか。',
    stemZh: '「相談」的意思是哪個？',
    options: [
      { text: '商量', reason: '正確。相談{そうだん}意為商量、諮詢。' },
      { text: '聊天', reason: '錯誤。聊天是「おしゃべり」。' },
      { text: '吵架', reason: '錯誤。吵架是「けんか」。' },
      { text: '道歉', reason: '錯誤。道歉是「謝{あやま}る」。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '相談的詞義',
      analysis: '相談{そうだん}意為商量、諮詢。「先生に相談する」= 跟老師商量。',
      relatedRules: ['📖 本課 單字「相談」'],
    },
  },
  {
    id: 'n4_u12_l5_q4', category: 'vocabulary', level: 'N4',
    stem: '「卒業{そつぎょう}」の反対{はんたい}の言葉{ことば}はどれですか。',
    stemZh: '「卒業」的反義詞是哪個？',
    options: [
      { text: '復習{ふくしゅう}', reason: '錯誤。「復習」是複習。' },
      { text: '入学{にゅうがく}', reason: '正確。「入学」是入學，和「卒業」（畢業）相反。' },
      { text: '生活{せいかつ}', reason: '錯誤。「生活」是生活。' },
      { text: '約束{やくそく}', reason: '錯誤。「約束」是約定。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '卒業的反義詞',
      analysis: '卒業{そつぎょう}意為畢業，反義詞是「入学{にゅうがく}」（入學）。',
      comparisons: ['「入学」= 入學', '「卒業」= 畢業'],
      relatedRules: ['📖 本課 單字「卒業」'],
    },
  },
  {
    id: 'n4_u12_l5_q5', category: 'vocabulary', level: 'N4',
    stem: '「約束{やくそく}を守{まも}ってください。」の「約束{やくそく}」はどんな意味{いみ}ですか。',
    stemZh: '「約束を守ってください。」中的「約束」是什麼意思？',
    options: [
      { text: '規則', reason: '錯誤。規則是「ルール」。' },
      { text: '約定', reason: '正確。約束{やくそく}意為約定、承諾。' },
      { text: '預約', reason: '錯誤。預約是「予約{よやく}」。' },
      { text: '計畫', reason: '錯誤。計畫是「計画{けいかく}」。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '約束的詞義',
      analysis: '約束{やくそく}意為約定、承諾。「約束を守る」= 遵守約定。',
      relatedRules: ['📖 本課 單字「約束」'],
    },
  },
  {
    id: 'n4_u12_l5_q6', category: 'vocabulary', level: 'N4',
    stem: '「復習{ふくしゅう}」の意味{いみ}はどれですか。',
    stemZh: '「復習」的意思是哪個？',
    options: [
      { text: '預習', reason: '錯誤。預習是「予習{よしゅう}」。' },
      { text: '練習', reason: '錯誤。練習是「練習{れんしゅう}」。' },
      { text: '複習', reason: '正確。復習{ふくしゅう}意為複習。' },
      { text: '學習', reason: '錯誤。學習是「学習{がくしゅう}」。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '復習的詞義',
      analysis: '復習{ふくしゅう}意為複習，指學過之後再溫習。和「予習」（預習）是相對概念。',
      comparisons: ['「予習」= 預習（課前）', '「復習」= 複習（課後）'],
      relatedRules: ['📖 本課 單字「復習」'],
    },
  },
  {
    id: 'n4_u12_l5_q7', category: 'grammar', level: 'N4',
    stem: '月曜日{げつようび}＿＿は毎日{まいにち}働{はたら}いています。',
    stemZh: '除了星期一之外，每天都在工作。',
    options: [
      { text: 'だけ', reason: '錯誤。「だけ」表示只有，語意不同。' },
      { text: 'しか', reason: '錯誤。「しか」搭配否定，語意不同。' },
      { text: '以外{いがい}', reason: '正確。「〜以外」表示除了〜之外。' },
      { text: 'まで', reason: '錯誤。「まで」表示到〜為止。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「〜以外」表示排除',
      analysis: '「〜以外{いがい}」表示除了某項之外。「月曜日以外」= 除了星期一之外。',
      relatedRules: ['📖 本課 文法「〜以外」'],
    },
  },
  {
    id: 'n4_u12_l5_q8', category: 'grammar', level: 'N4',
    stem: '私{わたし}＿＿、家族{かぞく}が一番{いちばん}大切{たいせつ}です。',
    stemZh: '對我來說，家人最重要。',
    options: [
      { text: 'にとって', reason: '正確。「〜にとって」表示對某人而言。' },
      { text: 'について', reason: '錯誤。「について」表示關於，語意不合。' },
      { text: 'によって', reason: '錯誤。「によって」表示根據、由於。' },
      { text: 'に関{かん}して', reason: '錯誤。「に関して」表示有關，語意不合。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「〜にとって」的用法',
      analysis: '「〜にとって」表示站在某人的立場來看、對某人而言。「私にとって」= 對我來說。',
      relatedRules: ['📖 本課 文法「〜にとって」'],
    },
  },
  {
    id: 'n4_u12_l5_q9', category: 'grammar', level: 'N4',
    stem: '日本語{にほんご}以外{いがい}＿＿何{なに}か勉強{べんきょう}していますか。',
    stemZh: '除了日語之外還在學什麼嗎？',
    options: [
      { text: 'は', reason: '錯誤。「以外は」表示除此之外（其他都），語感不同。' },
      { text: 'に', reason: '正確。「以外に」表示除了〜之外（還有），用於追問。' },
      { text: 'が', reason: '錯誤。「以外が」語法不自然。' },
      { text: 'を', reason: '錯誤。「以外を」語法不自然。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「〜以外に」與「〜以外は」的差異',
      analysis: '「以外に」= 除此之外還有（追加語氣）。「以外は」= 除此之外（其他的）。此處問還有什麼，用「に」。',
      comparisons: ['「以外に」= 除此之外還有', '「以外は」= 除此之外的部分'],
      relatedRules: ['📖 本課 文法「〜以外」'],
    },
  },
  {
    id: 'n4_u12_l5_q10', category: 'grammar', level: 'N4',
    stem: '外国人{がいこくじん}＿＿、漢字{かんじ}は難{むずか}しいです。',
    stemZh: '對外國人來說，漢字很難。',
    options: [
      { text: 'について', reason: '錯誤。「について」表示關於。' },
      { text: 'にとって', reason: '正確。「〜にとって」表示對某人而言。' },
      { text: 'によると', reason: '錯誤。「によると」表示根據（消息來源）。' },
      { text: 'に対{たい}して', reason: '錯誤。「に対して」表示對於（對象），語感不同。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「〜にとって」表示立場',
      analysis: '「外国人にとって」= 對外國人來說。「にとって」後面接對該立場來說的評價或感受。',
      relatedRules: ['📖 本課 文法「〜にとって」'],
    },
  },
  {
    id: 'n4_u12_l5_q11', category: 'vocabulary', level: 'N4',
    stem: '「生活{せいかつ}」の意味{いみ}はどれですか。',
    stemZh: '「生活」的意思是哪個？',
    options: [
      { text: '生命', reason: '錯誤。生命是「命{いのち}」。' },
      { text: '活動', reason: '錯誤。活動是「活動{かつどう}」。' },
      { text: '生活', reason: '正確。生活{せいかつ}意為生活、日常起居。' },
      { text: '人生', reason: '錯誤。人生是「人生{じんせい}」。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '生活的詞義',
      analysis: '生活{せいかつ}意為生活、日常起居。「日本での生活」= 在日本的生活。',
      relatedRules: ['📖 本課 單字「生活」'],
    },
  },
  {
    id: 'n4_u12_l5_q12', category: 'vocabulary', level: 'N4',
    stem: '「ガソリン」の意味{いみ}はどれですか。',
    stemZh: '「ガソリン」的意思是哪個？',
    options: [
      { text: '煤氣', reason: '錯誤。煤氣是「ガス」。' },
      { text: '汽油', reason: '正確。ガソリン意為汽油。' },
      { text: '柴油', reason: '錯誤。柴油是「軽油{けいゆ}」。' },
      { text: '電力', reason: '錯誤。電力是「電気{でんき}」。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: 'ガソリンの詞義',
      analysis: '「ガソリン」源自英語 gasoline，意為汽油。注意和「ガス」（煤氣）區分。',
      comparisons: ['「ガソリン」= 汽油', '「ガス」= 煤氣'],
      relatedRules: ['📖 本課 單字「ガソリン」'],
    },
  },
  {
    id: 'n4_u12_l5_q13', category: 'grammar', level: 'N4',
    stem: 'お酒{さけ}＿＿の飲{の}み物{もの}はありますか。',
    stemZh: '有除了酒之外的飲料嗎？',
    options: [
      { text: 'ほかに', reason: '錯誤。「ほかに」不直接修飾名詞。' },
      { text: '以外{いがい}', reason: '正確。「お酒以外の飲み物」= 酒以外的飲料。' },
      { text: 'にとって', reason: '錯誤。「にとって」表示對〜而言。' },
      { text: 'について', reason: '錯誤。「について」表示關於。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「〜以外の＋名詞」修飾名詞',
      analysis: '「〜以外の」可直接修飾名詞：「お酒以外の飲み物」= 酒以外的飲料。',
      relatedRules: ['📖 本課 文法「〜以外」'],
    },
  },
  {
    id: 'n4_u12_l5_q14', category: 'grammar', level: 'N4',
    stem: '学生{がくせい}＿＿、この試験{しけん}はとても重要{じゅうよう}です。',
    stemZh: '對學生來說，這次考試非常重要。',
    options: [
      { text: 'にとって', reason: '正確。「学生にとって」= 對學生來說。' },
      { text: 'に関{かん}して', reason: '錯誤。「に関して」表示有關。' },
      { text: 'によって', reason: '錯誤。「によって」表示根據。' },
      { text: 'について', reason: '錯誤。「について」表示關於。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「にとって」搭配評價句',
      analysis: '「〜にとって＋評價」是固定搭配。「学生にとって重要」= 對學生來說重要。',
      relatedRules: ['📖 本課 文法「〜にとって」'],
    },
  },
  {
    id: 'n4_u12_l5_q15', category: 'vocabulary', level: 'N4',
    stem: '困{こま}ったことがあったら、先生{せんせい}に＿＿してください。',
    stemZh: '遇到困難的話，請跟老師___。',
    options: [
      { text: '復習{ふくしゅう}', reason: '錯誤。「復習」是複習。' },
      { text: '卒業{そつぎょう}', reason: '錯誤。「卒業」是畢業。' },
      { text: '約束{やくそく}', reason: '錯誤。「約束」是約定。' },
      { text: '相談{そうだん}', reason: '正確。「先生に相談する」= 跟老師商量。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '語境判斷：相談',
      analysis: '遇到困難時找老師「相談」（商量），是最合理的搭配。',
      relatedRules: ['📖 本課 單字「相談」'],
    },
  },
]

// ─── L6 Quiz: 學習與社交 ───
const l6Quiz: UnifiedQuestion[] = [
  {
    id: 'n4_u12_l6_q1', category: 'vocabulary', level: 'N4',
    stem: '「予習{よしゅう}」の意味{いみ}はどれですか。',
    stemZh: '「予習」的意思是哪個？',
    options: [
      { text: '複習', reason: '錯誤。複習是「復習{ふくしゅう}」。' },
      { text: '預習', reason: '正確。予習{よしゅう}意為預習。' },
      { text: '練習', reason: '錯誤。練習是「練習{れんしゅう}」。' },
      { text: '自習', reason: '錯誤。自習是「自習{じしゅう}」。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '予習的詞義',
      analysis: '予習{よしゅう}意為預習，指上課前預先學習。「予」= 預先，「習」= 學習。',
      relatedRules: ['📖 本課 單字「予習」'],
    },
  },
  {
    id: 'n4_u12_l6_q2', category: 'vocabulary', level: 'N4',
    stem: '「試験{しけん}」の意味{いみ}はどれですか。',
    stemZh: '「試験」的意思是哪個？',
    options: [
      { text: '實驗', reason: '錯誤。雖然「試験」也可指實驗，但在學習語境中主要指考試。' },
      { text: '考試', reason: '正確。試験{しけん}在學習語境中意為考試。' },
      { text: '經驗', reason: '錯誤。經驗是「経験{けいけん}」。' },
      { text: '體驗', reason: '錯誤。體驗是「体験{たいけん}」。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '試験的詞義',
      analysis: '試験{しけん}在學校等場景中指考試、測驗。「試験がある」= 有考試。',
      relatedRules: ['📖 本課 單字「試験」'],
    },
  },
  {
    id: 'n4_u12_l6_q3', category: 'vocabulary', level: 'N4',
    stem: '「挨拶{あいさつ}」の意味{いみ}はどれですか。',
    stemZh: '「挨拶」的意思是哪個？',
    options: [
      { text: '問候', reason: '正確。挨拶{あいさつ}意為問候、寒暄。' },
      { text: '介紹', reason: '錯誤。介紹是「紹介{しょうかい}」。' },
      { text: '說明', reason: '錯誤。說明是「説明{せつめい}」。' },
      { text: '聯絡', reason: '錯誤。聯絡是「連絡{れんらく}」。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '挨拶的詞義',
      analysis: '挨拶{あいさつ}意為問候、寒暄。「朝の挨拶」= 早上的問候。',
      relatedRules: ['📖 本課 單字「挨拶」'],
    },
  },
  {
    id: 'n4_u12_l6_q4', category: 'vocabulary', level: 'N4',
    stem: '「連絡{れんらく}」の意味{いみ}はどれですか。',
    stemZh: '「連絡」的意思是哪個？',
    options: [
      { text: '準備', reason: '錯誤。準備是「準備{じゅんび}」。' },
      { text: '經驗', reason: '錯誤。經驗是「経験{けいけん}」。' },
      { text: '聯絡', reason: '正確。連絡{れんらく}意為聯絡、通知。' },
      { text: '介紹', reason: '錯誤。介紹是「紹介{しょうかい}」。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '連絡的詞義',
      analysis: '連絡{れんらく}意為聯絡、通知。「後で連絡します」= 之後再聯絡。',
      relatedRules: ['📖 本課 單字「連絡」'],
    },
  },
  {
    id: 'n4_u12_l6_q5', category: 'vocabulary', level: 'N4',
    stem: '「紹介{しょうかい}」と「説明{せつめい}」の違{ちが}いはどれですか。',
    stemZh: '「紹介」和「説明」的差別是什麼？',
    options: [
      { text: '意思完全相同', reason: '錯誤。兩者意思不同。' },
      { text: '紹介是介紹（人或物）、説明是說明（事情或方法）', reason: '正確。一個重在引見，一個重在解說。' },
      { text: '紹介是口語、説明是書面語', reason: '錯誤。兩者都可在口語和書面使用。' },
      { text: '紹介是自動詞、説明是他動詞', reason: '錯誤。兩者都是する動詞。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '紹介與説明的區別',
      analysis: '紹介{しょうかい}重在引見、推薦人或事物。説明{せつめい}重在解說事情的內容或方法。',
      comparisons: ['「紹介」= 介紹（人或物）', '「説明」= 說明（內容或方法）'],
      relatedRules: ['📖 本課 單字「紹介」', '📖 本課 單字「説明」'],
    },
  },
  {
    id: 'n4_u12_l6_q6', category: 'vocabulary', level: 'N4',
    stem: '「経験{けいけん}」の意味{いみ}はどれですか。',
    stemZh: '「経験」的意思是哪個？',
    options: [
      { text: '經驗', reason: '正確。経験{けいけん}意為經驗。' },
      { text: '考試', reason: '錯誤。考試是「試験{しけん}」。' },
      { text: '實驗', reason: '錯誤。實驗是「実験{じっけん}」。' },
      { text: '條件', reason: '錯誤。條件是「条件{じょうけん}」。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '経験的詞義',
      analysis: '経験{けいけん}意為經驗。「いい経験になる」= 成為很好的經驗。',
      relatedRules: ['📖 本課 單字「経験」'],
    },
  },
  {
    id: 'n4_u12_l6_q7', category: 'grammar', level: 'N4',
    stem: '日本{にほん}の文化{ぶんか}＿＿勉強{べんきょう}しています。',
    stemZh: '正在學習關於日本文化。',
    options: [
      { text: 'にとって', reason: '錯誤。「にとって」表示對〜而言。' },
      { text: 'に関{かん}して', reason: '錯誤。「に関して」也表示有關，但「について」更常用。' },
      { text: 'について', reason: '正確。「〜について」表示關於某主題。' },
      { text: 'によって', reason: '錯誤。「によって」表示根據、由於。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「〜について」表示主題',
      analysis: '「〜について」表示關於某主題來進行某動作。「文化について勉強する」= 學習關於文化的知識。',
      relatedRules: ['📖 本課 文法「〜について」'],
    },
  },
  {
    id: 'n4_u12_l6_q8', category: 'grammar', level: 'N4',
    stem: '果物{くだもの}の中{なか}＿＿、いちごが一番{いちばん}好{す}きです。',
    stemZh: '在水果之中，最喜歡草莓。',
    options: [
      { text: 'で', reason: '正確。「〜の中で」表示在某範圍之中。' },
      { text: 'に', reason: '錯誤。「の中に」表示在裡面（位置），不用於比較。' },
      { text: 'から', reason: '錯誤。「の中から」表示從中選出，語感不同。' },
      { text: 'は', reason: '錯誤。「の中は」表示裡面的情況，不用於比較。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「〜の中で」表示範圍比較',
      analysis: '「〜の中で」+ 一番 + 形容詞 是表示在某範圍內最〜的固定句型。',
      relatedRules: ['📖 本課 文法「〜の中で」'],
    },
  },
  {
    id: 'n4_u12_l6_q9', category: 'grammar', level: 'N4',
    stem: '試験{しけん}＿＿先生{せんせい}に聞{き}きました。',
    stemZh: '問了老師關於考試的事。',
    options: [
      { text: 'にとって', reason: '錯誤。「にとって」表示對〜而言。' },
      { text: 'について', reason: '正確。「試験について聞く」= 詢問關於考試的事。' },
      { text: 'の中{なか}で', reason: '錯誤。「の中で」用於範圍比較。' },
      { text: 'によると', reason: '錯誤。「によると」表示根據。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「〜について」搭配動詞',
      analysis: '「〜について聞く/話す/書く/調べる」等，表示關於某主題來進行該動作。',
      relatedRules: ['📖 本課 文法「〜について」'],
    },
  },
  {
    id: 'n4_u12_l6_q10', category: 'grammar', level: 'N4',
    stem: 'スポーツの中{なか}で何{なに}が一番{いちばん}好{す}きですか。',
    stemZh: '在運動之中最喜歡什麼？',
    options: [
      { text: '這句使用了「について」的文法', reason: '錯誤。這句使用的是「〜の中で」。' },
      { text: '這句使用了「〜の中で」+ 一番的比較句型', reason: '正確。「の中で何が一番」是範圍比較的疑問句。' },
      { text: '這句使用了「にとって」的文法', reason: '錯誤。句中沒有「にとって」。' },
      { text: '這句使用了「以外」的文法', reason: '錯誤。句中沒有「以外」。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「〜の中で」疑問句形式',
      analysis: '「〜の中で何が一番〜ですか」是詢問在某範圍內哪個最〜的固定疑問句型。',
      relatedRules: ['📖 本課 文法「〜の中で」'],
    },
  },
  {
    id: 'n4_u12_l6_q11', category: 'vocabulary', level: 'N4',
    stem: '「準備{じゅんび}」の意味{いみ}はどれですか。',
    stemZh: '「準備」的意思是哪個？',
    options: [
      { text: '開始', reason: '錯誤。開始是「始{はじ}める」。' },
      { text: '結束', reason: '錯誤。結束是「終{お}わる」。' },
      { text: '準備', reason: '正確。準備{じゅんび}意為準備。' },
      { text: '練習', reason: '錯誤。練習是「練習{れんしゅう}」。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '準備的詞義',
      analysis: '準備{じゅんび}意為準備。「準備をする」= 進行準備。',
      relatedRules: ['📖 本課 單字「準備」'],
    },
  },
  {
    id: 'n4_u12_l6_q12', category: 'grammar', level: 'N4',
    stem: '日本{にほん}の季節{きせつ}の中{なか}で、＿＿が一番{いちばん}好{す}きですか。',
    stemZh: '在日本的季節之中，最喜歡哪個？',
    options: [
      { text: '何{なに}', reason: '錯誤。季節不用「何」，用「どれ」或具體名稱。' },
      { text: 'いつ', reason: '正確。「いつが一番好きですか」在此指哪個季節，自然地詢問。' },
      { text: '誰{だれ}', reason: '錯誤。「誰」是問人。' },
      { text: 'どこ', reason: '錯誤。「どこ」是問地點。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「〜の中で」搭配疑問詞',
      analysis: '詢問季節偏好時，「いつが一番好きですか」是自然的問法。也可用「どの季節」。',
      relatedRules: ['📖 本課 文法「〜の中で」'],
    },
  },
  {
    id: 'n4_u12_l6_q13', category: 'grammar', level: 'N4',
    stem: '環境{かんきょう}問題{もんだい}＿＿レポートを書{か}きました。',
    stemZh: '寫了關於環境問題的報告。',
    options: [
      { text: 'について', reason: '正確。「環境問題について書く」= 寫關於環境問題的內容。' },
      { text: 'の中{なか}で', reason: '錯誤。「の中で」用於範圍比較，不用於主題。' },
      { text: 'にとって', reason: '錯誤。「にとって」表示對〜而言。' },
      { text: '以外{いがい}に', reason: '錯誤。「以外に」表示除了〜之外。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「〜について」搭配「書く」',
      analysis: '「〜についてレポートを書く」= 寫關於某主題的報告，是常見搭配。',
      relatedRules: ['📖 本課 文法「〜について」'],
    },
  },
  {
    id: 'n4_u12_l6_q14', category: 'vocabulary', level: 'N4',
    stem: '友達{ともだち}を＿＿する場面{ばめん}を練習{れんしゅう}しましょう。',
    stemZh: '來練習___朋友的場景吧。',
    options: [
      { text: '説明{せつめい}', reason: '錯誤。「説明」是說明，不是介紹人。' },
      { text: '連絡{れんらく}', reason: '錯誤。「連絡」是聯絡。' },
      { text: '紹介{しょうかい}', reason: '正確。「友達を紹介する」= 介紹朋友。' },
      { text: '準備{じゅんび}', reason: '錯誤。「準備」是準備。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '語境判斷：紹介',
      analysis: '「友達を紹介する」= 介紹朋友給別人認識。「紹介する場面」= 介紹的場景。',
      relatedRules: ['📖 本課 單字「紹介」'],
    },
  },
  {
    id: 'n4_u12_l6_q15', category: 'grammar', level: 'N4',
    stem: '世界{せかい}の言語{げんご}の中{なか}で、日本語{にほんご}は＿＿の一{ひと}つです。',
    stemZh: '在世界的語言之中，日語是___之一。',
    options: [
      { text: '難{むずか}しい言語{げんご}', reason: '正確。「難しい言語の一つ」= 困難語言之一，搭配「の中で」表範圍。' },
      { text: '難{むずか}しくて言語{げんご}', reason: '錯誤。「て形」不能直接修飾名詞。' },
      { text: '難{むずか}しいだ言語{げんご}', reason: '錯誤。い形容詞不加「だ」修飾名詞。' },
      { text: '難{むずか}しさ言語{げんご}', reason: '錯誤。「難しさ」是名詞化，不能直接修飾。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「〜の中で」搭配修飾語',
      analysis: '「〜の中で…のひとつ」= 在〜之中是…之一。「難しい言語」直接用い形容詞修飾名詞。',
      relatedRules: ['📖 本課 文法「〜の中で」'],
    },
  },
]

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

    quizQuestions: l1Quiz,
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

    quizQuestions: l2Quiz,
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

    quizQuestions: l3Quiz,
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

    quizQuestions: l4Quiz,
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

    quizQuestions: l5Quiz,
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

    quizQuestions: l6Quiz,
  },

  // ─── Unit Test: 單元綜合測驗 ───
  {
    id: 'n4_u12_test',
    unitId: 'n4_u12',
    order: 7,
    titleJp: '単元テスト',
    titleZh: '單元綜合測驗',
    objectives: ['複習本單元所有單字與文法，並回顧第11單元重點，檢驗學習成果'],
    vocabulary: [],
    grammarIds: [],
    grammarSummaries: [],
    dialogue: [],
    quizQuestions: [
      // ─── Unit 12 題目 Q1–Q15 ───

      // Q1 vocabulary — L1 時間表達：今度
      {
        id: 'n4_u12_test_q1',
        category: 'vocabulary' as const,
        level: 'N4' as const,
        stem: '「今度{こんど}の旅行{りょこう}は沖縄{おきなわ}に行{い}きます。」の「今度{こんど}」はどんな意味{いみ}ですか。',
        stemZh: '「今度の旅行は沖縄に行きます。」中的「今度」是什麼意思？',
        options: [
          { text: '上次', reason: '錯誤。上次是「前回{ぜんかい}」。' },
          { text: '每次', reason: '錯誤。每次是「毎回{まいかい}」。' },
          { text: '這次', reason: '正確。今度{こんど}意為這次或下次。' },
          { text: '最後一次', reason: '錯誤。最後一次是「最後{さいご}」。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '今度的詞義',
          analysis: '今度{こんど}意為「這次」或「下次」，根據語境判斷。此處指即將到來的旅行，表示「這次」。',
          relatedRules: ['📖 第1課 單字「今度」'],
        },
      },

      // Q2 grammar — L1 時間表達：ところだ
      {
        id: 'n4_u12_test_q2',
        category: 'grammar' as const,
        level: 'N4' as const,
        stem: 'ちょうど昼{ひる}ごはんを食{た}べている＿＿です。後{あと}で電話{でんわ}します。',
        stemZh: '剛好正在吃午餐。等一下再打電話。',
        options: [
          { text: 'こと', reason: '錯誤。「〜ていること」不表示正在進行中的即時狀態。' },
          { text: 'ところ', reason: '正確。「〜ているところ」表示正在進行某動作。' },
          { text: 'はず', reason: '錯誤。「はず」表示應該，不表示正在進行。' },
          { text: 'つもり', reason: '錯誤。「つもり」表示打算，語意不合。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '「〜ているところ」表示正在進行',
          analysis: '「動詞ている＋ところ」表示某動作正在進行中。「食べているところ」= 正在吃。',
          comparisons: ['「食べるところ」= 正要吃', '「食べているところ」= 正在吃', '「食べたところ」= 剛吃完'],
          relatedRules: ['📖 第1課 文法「〜ところだ」'],
        },
      },

      // Q3 vocabulary — L2 日常與安全：留守
      {
        id: 'n4_u12_test_q3',
        category: 'vocabulary' as const,
        level: 'N4' as const,
        stem: '「留守{るす}の間{あいだ}に泥棒{どろぼう}が入{はい}りました。」の「留守{るす}」はどんな意味{いみ}ですか。',
        stemZh: '「留守の間に泥棒が入りました。」中的「留守」是什麼意思？',
        options: [
          { text: '睡覺', reason: '錯誤。睡覺是「寝{ね}る」。' },
          { text: '不在家', reason: '正確。留守{るす}意為不在家、外出中。' },
          { text: '在家', reason: '錯誤。留守恰恰相反，是不在家。' },
          { text: '搬家', reason: '錯誤。搬家是「引{ひ}っ越{こ}し」。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '留守的詞義',
          analysis: '留守{るす}意為不在家。「留守の間に」= 不在家的期間。「留守番{るすばん}」= 看家。',
          relatedRules: ['📖 第2課 單字「留守」'],
        },
      },

      // Q4 grammar — L2 日常與安全：ところに
      {
        id: 'n4_u12_test_q4',
        category: 'grammar' as const,
        level: 'N4' as const,
        stem: '寝{ね}ようとした＿＿、電話{でんわ}が鳴{な}りました。',
        stemZh: '正要睡覺的時候，電話響了。',
        options: [
          { text: 'ところで', reason: '錯誤。「ところで」是「話說回來」的轉折詞。' },
          { text: 'ところが', reason: '錯誤。「ところが」是「然而」的逆接詞。' },
          { text: 'ところに', reason: '正確。「〜ところに」表示正當做某事的時候，突然發生了別的事。' },
          { text: 'ところを', reason: '錯誤。「ところを」語意不合。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '「〜ところに」表示意外插入',
          analysis: '「〜ところに」表示正要做某事或正在做某事的時候，突然有另一件事發生。「寝ようとしたところに」= 正要睡的時候。',
          relatedRules: ['📖 第2課 文法「〜ところに」'],
        },
      },

      // Q5 vocabulary — L3 事件與行動：地震
      {
        id: 'n4_u12_test_q5',
        category: 'vocabulary' as const,
        level: 'N4' as const,
        stem: '「地震{じしん}」の読{よ}み方{かた}はどれですか。',
        stemZh: '「地震」的讀法是哪個？',
        options: [
          { text: 'ちしん', reason: '錯誤。「地」在此不讀「ち」。' },
          { text: 'じぶん', reason: '錯誤。「じぶん」是「自分」（自己）。' },
          { text: 'じけん', reason: '錯誤。「じけん」是「事件」。' },
          { text: 'じしん', reason: '正確。地震的讀音是「じしん」。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '地震的讀音',
          analysis: '地震{じしん}的讀音是「じしん」。「地」讀「じ」，「震」讀「しん」。注意「自信{じしん}」同音但意思不同。',
          relatedRules: ['📖 第3課 單字「地震」'],
        },
      },

      // Q6 grammar — L3 事件與行動：それに
      {
        id: 'n4_u12_test_q6',
        category: 'grammar' as const,
        level: 'N4' as const,
        stem: 'この部屋{へや}は広{ひろ}いです。＿＿、景色{けしき}もきれいです。',
        stemZh: '這個房間很寬敞。___，景色也很漂亮。',
        options: [
          { text: 'しかし', reason: '錯誤。「しかし」表示逆接，但前後方向一致，不需逆接。' },
          { text: 'または', reason: '錯誤。「または」表示選擇，語意不合。' },
          { text: 'それに', reason: '正確。「それに」追加同方向的正面資訊，表示「而且」。' },
          { text: 'だから', reason: '錯誤。「だから」表示因果，「景色漂亮」不是「寬敞」的結果。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '「それに」追加同方向資訊',
          analysis: '「それに」用於追加同方向的資訊，前後都是正面或都是負面的評價。「広い」和「きれい」都是優點。',
          relatedRules: ['📖 第3課 文法「それに」'],
        },
      },

      // Q7 grammar — L3 事件與行動：そして
      {
        id: 'n4_u12_test_q7',
        category: 'grammar' as const,
        level: 'N4' as const,
        stem: '朝{あさ}起{お}きました。＿＿、顔{かお}を洗{あら}いました。',
        stemZh: '早上起床了。___，洗了臉。',
        options: [
          { text: 'それに', reason: '錯誤。「それに」表示追加，不表示時間順序。' },
          { text: 'そして', reason: '正確。「そして」描述按時間順序發生的事件，表示「然後」。' },
          { text: 'しかし', reason: '錯誤。「しかし」表示逆接，前後沒有轉折。' },
          { text: 'または', reason: '錯誤。「または」表示選擇。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '「そして」表示時間順序',
          analysis: '「そして」用於描述按時間順序發生的連續事件。起床 → 然後 → 洗臉。',
          relatedRules: ['📖 第3課 文法「そして」'],
        },
      },

      // Q8 vocabulary — L4 日常用語與世界：用事
      {
        id: 'n4_u12_test_q8',
        category: 'vocabulary' as const,
        level: 'N4' as const,
        stem: '「今日{きょう}は用事{ようじ}があるので、早{はや}く帰{かえ}ります。」の「用事{ようじ}」はどんな意味{いみ}ですか。',
        stemZh: '「今日は用事があるので、早く帰ります。」中的「用事」是什麼意思？',
        options: [
          { text: '事情', reason: '正確。用事{ようじ}意為事情、要辦的事。' },
          { text: '用具', reason: '錯誤。用具是「道具{どうぐ}」。' },
          { text: '準備', reason: '錯誤。準備是「用意{ようい}」。' },
          { text: '用途', reason: '錯誤。用途是「用{よう}」。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '用事的詞義',
          analysis: '用事{ようじ}意為事情、要辦的事。「用事がある」= 有事情要辦。注意區分「用事」（事情）和「用意」（準備）。',
          comparisons: ['「用事」= 事情（要辦的事）', '「用意」= 準備（備妥）'],
          relatedRules: ['📖 第4課 單字「用事」'],
        },
      },

      // Q9 grammar — L4 日常用語與世界：でも（助詞）
      {
        id: 'n4_u12_test_q9',
        category: 'grammar' as const,
        level: 'N4' as const,
        stem: '何{なん}＿＿好{す}きなものを注文{ちゅうもん}してください。',
        stemZh: '無論什麼都可以，請點喜歡的。',
        options: [
          { text: 'か', reason: '錯誤。「何か」表示某樣東西，不是無論什麼。' },
          { text: 'も', reason: '錯誤。「何も」搭配否定使用，表示什麼都不。' },
          { text: 'でも', reason: '正確。「何でも」表示無論什麼都。' },
          { text: 'が', reason: '錯誤。「何が」是疑問句用法。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '「疑問詞＋でも」表示無論',
          analysis: '「疑問詞＋でも」表示全面肯定。「何でも」= 無論什麼、「誰でも」= 無論誰、「いつでも」= 無論何時。',
          relatedRules: ['📖 第4課 文法「でも（助詞）」'],
        },
      },

      // Q10 vocabulary — L5 生活與設施：ガソリンスタンド
      {
        id: 'n4_u12_test_q10',
        category: 'vocabulary' as const,
        level: 'N4' as const,
        stem: '「ガソリンスタンド」の意味{いみ}はどれですか。',
        stemZh: '「ガソリンスタンド」的意思是哪個？',
        options: [
          { text: '休息站', reason: '錯誤。休息站是「サービスエリア」。' },
          { text: '公車站', reason: '錯誤。公車站是「バス停{てい}」。' },
          { text: '停車場', reason: '錯誤。停車場是「駐車場{ちゅうしゃじょう}」。' },
          { text: '加油站', reason: '正確。ガソリンスタンド意為加油站。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: 'ガソリンスタンド的詞義',
          analysis: '「ガソリンスタンド」是和製英語（gasoline stand），意為加油站。「ガソリン」= 汽油，「スタンド」= 站。',
          relatedRules: ['📖 第5課 單字「ガソリンスタンド」'],
        },
      },

      // Q11 grammar — L5 生活與設施：以外
      {
        id: 'n4_u12_test_q11',
        category: 'grammar' as const,
        level: 'N4' as const,
        stem: '日曜日{にちようび}＿＿は毎日{まいにち}学校{がっこう}に通{かよ}っています。',
        stemZh: '除了星期天之外，每天都去上學。',
        options: [
          { text: 'まで', reason: '錯誤。「まで」表示到〜為止。' },
          { text: 'だけ', reason: '錯誤。「だけ」表示只有。' },
          { text: '以外{いがい}', reason: '正確。「〜以外」表示除了〜之外。' },
          { text: 'しか', reason: '錯誤。「しか」搭配否定，表示只有。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '「〜以外」表示排除',
          analysis: '「〜以外{いがい}」表示除了某項之外。「日曜日以外」= 除了星期天之外，其他日子都去。',
          relatedRules: ['📖 第5課 文法「〜以外」'],
        },
      },

      // Q12 grammar — L5 生活與設施：にとって
      {
        id: 'n4_u12_test_q12',
        category: 'grammar' as const,
        level: 'N4' as const,
        stem: '子{こ}ども＿＿、遊{あそ}ぶことは大切{たいせつ}な学{まな}びです。',
        stemZh: '對孩子來說，玩耍是重要的學習。',
        options: [
          { text: 'について', reason: '錯誤。「について」表示關於，語意不合。' },
          { text: 'によって', reason: '錯誤。「によって」表示根據、由於。' },
          { text: 'に関{かん}して', reason: '錯誤。「に関して」表示有關，語意不合。' },
          { text: 'にとって', reason: '正確。「〜にとって」表示對某人而言。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '「〜にとって」表示立場',
          analysis: '「〜にとって」表示站在某人的立場來看。「子どもにとって」= 對孩子來說。後面接評價或感受。',
          relatedRules: ['📖 第5課 文法「〜にとって」'],
        },
      },

      // Q13 vocabulary — L6 學習與社交：挨拶
      {
        id: 'n4_u12_test_q13',
        category: 'vocabulary' as const,
        level: 'N4' as const,
        stem: '「挨拶{あいさつ}」の意味{いみ}はどれですか。',
        stemZh: '「挨拶」的意思是哪個？',
        options: [
          { text: '問候', reason: '正確。挨拶{あいさつ}意為問候、寒暄。' },
          { text: '聯絡', reason: '錯誤。聯絡是「連絡{れんらく}」。' },
          { text: '介紹', reason: '錯誤。介紹是「紹介{しょうかい}」。' },
          { text: '說明', reason: '錯誤。說明是「説明{せつめい}」。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '挨拶的詞義',
          analysis: '挨拶{あいさつ}意為問候、寒暄。「朝の挨拶」= 早上的問候。「挨拶をする」= 打招呼。',
          relatedRules: ['📖 第6課 單字「挨拶」'],
        },
      },

      // Q14 grammar — L6 學習與社交：について
      {
        id: 'n4_u12_test_q14',
        category: 'grammar' as const,
        level: 'N4' as const,
        stem: '日本{にほん}の歴史{れきし}＿＿本{ほん}を読{よ}みました。',
        stemZh: '讀了關於日本歷史的書。',
        options: [
          { text: 'の中{なか}で', reason: '錯誤。「の中で」用於範圍比較。' },
          { text: 'にとって', reason: '錯誤。「にとって」表示對〜而言。' },
          { text: '以外{いがい}に', reason: '錯誤。「以外に」表示除了〜之外。' },
          { text: 'について', reason: '正確。「〜について」表示關於某主題。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '「〜について」表示主題',
          analysis: '「〜について」表示關於某主題。「歴史について本を読む」= 讀關於歷史的書。',
          relatedRules: ['📖 第6課 文法「〜について」'],
        },
      },

      // Q15 grammar — L6 學習與社交：の中で
      {
        id: 'n4_u12_test_q15',
        category: 'grammar' as const,
        level: 'N4' as const,
        stem: '日本料理{にほんりょうり}の中{なか}＿＿、寿司{すし}が一番{いちばん}好{す}きです。',
        stemZh: '在日本料理之中，最喜歡壽司。',
        options: [
          { text: 'に', reason: '錯誤。「の中に」表示在裡面（位置），不用於比較。' },
          { text: 'で', reason: '正確。「〜の中で」+ 一番 表示在某範圍之中最〜。' },
          { text: 'は', reason: '錯誤。「の中は」表示裡面的情況，不用於比較。' },
          { text: 'から', reason: '錯誤。「の中から」表示從中選出，語感不同。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '「〜の中で」表示範圍比較',
          analysis: '「〜の中で」+ 一番 + 形容詞 是表示在某範圍內最〜的固定句型。「日本料理の中で一番好き」= 在日本料理中最喜歡。',
          relatedRules: ['📖 第6課 文法「〜の中で」'],
        },
      },

      // ─── Unit 11 複習題 Q16–Q20 ───

      // Q16 grammar — U11 L1 尊敬語：ご覧になる
      {
        id: 'n4_u12_test_q16',
        category: 'grammar' as const,
        level: 'N4' as const,
        stem: '社長{しゃちょう}はこの報告書{ほうこくしょ}をもう＿＿になりましたか。',
        stemZh: '社長已經___這份報告了嗎？',
        options: [
          { text: '拝見{はいけん}', reason: '錯誤。「拝見する」是謙讓語，用於自己看，不能描述社長的行為。' },
          { text: 'ご覧{らん}', reason: '正確。「ご覧になる」是「見る」的尊敬語，用於描述上位者的行為。' },
          { text: '見{み}', reason: '錯誤。「見になる」不是正確的敬語形式。' },
          { text: '致{いた}し', reason: '錯誤。「致す」是「する」的謙讓語，意思也不對。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '【複習 U11】尊敬語「ご覧になる」',
          analysis: '「ご覧になる」是「見る」的尊敬語。用於描述長輩、上司等上位者的「看」的行為。「拝見する」是謙讓語，用於自己看。',
          comparisons: ['「ご覧になる」= 看（尊敬語，用於對方）', '「拝見する」= 看（謙讓語，用於自己）'],
          relatedRules: ['📖 U11 第1課 文法「ご覧になる」'],
        },
      },

      // Q17 grammar — U11 L2 謙讓語：参る
      {
        id: 'n4_u12_test_q17',
        category: 'grammar' as const,
        level: 'N4' as const,
        stem: '明日{あした}、私{わたし}がそちらに＿＿ます。',
        stemZh: '明天我___那邊。',
        options: [
          { text: '行{い}き', reason: '不夠禮貌。在正式場合對上位者應使用謙讓語。' },
          { text: '参{まい}り', reason: '正確。「参る」是「行く」的謙讓語，用於描述自己的移動。' },
          { text: 'いらっしゃい', reason: '錯誤。「いらっしゃる」是尊敬語，不能用在自己身上。' },
          { text: 'お出{い}でになり', reason: '錯誤。「お出でになる」是尊敬語，不能用在自己身上。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '【複習 U11】謙讓語「参る」',
          analysis: '「参る（まいる）」是「行く・来る」的謙讓語，用於自己的移動行為。在正式場合描述自己去某處時使用。',
          comparisons: ['「参る」= 去/來（謙讓語，用於自己）', '「いらっしゃる」= 去/來（尊敬語，用於對方）'],
          relatedRules: ['📖 U11 第2課 文法「参る」'],
        },
      },

      // Q18 vocabulary — U11 L4 感覺動詞：聞こえる
      {
        id: 'n4_u12_test_q18',
        category: 'vocabulary' as const,
        level: 'N4' as const,
        stem: '隣{となり}の部屋{へや}から音楽{おんがく}が＿＿ます。',
        stemZh: '從隔壁房間___音樂。',
        options: [
          { text: '聞{き}き', reason: '錯誤。「聞く」是主動去聽，此處是自然傳入耳中。' },
          { text: '見{み}え', reason: '錯誤。「見える」是看見，不是聽見。' },
          { text: '聞{き}こえ', reason: '正確。「聞こえる」表示自然地聽得見，聲音自動傳入耳中。' },
          { text: '鳴{な}り', reason: '錯誤。「鳴る」是（物品）響，主語應是電話、鈴等，不是音樂從某處傳來。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '【複習 U11】「聞こえる」自然聽見',
          analysis: '「聞こえる」表示聲音自然傳入耳中，是不需要刻意去聽就能聽到的意思。「聞く」是主動去聽的動作。',
          comparisons: ['「聞こえる」= 聽得見（自然傳入）', '「聞く」= 聽（主動動作）'],
          relatedRules: ['📖 U11 第4課 單字「聞こえる」'],
        },
      },

      // Q19 grammar — U11 L6 比較與列舉：より
      {
        id: 'n4_u12_test_q19',
        category: 'grammar' as const,
        level: 'N4' as const,
        stem: '夏{なつ}＿＿冬{ふゆ}のほうが好{す}きです。',
        stemZh: '___夏天，我更喜歡冬天。',
        options: [
          { text: 'とか', reason: '錯誤。「とか」是列舉，不是比較。' },
          { text: 'より', reason: '正確。「AよりBのほうが好き」= 比起A更喜歡B。' },
          { text: 'など', reason: '錯誤。「など」表示等等，不是比較。' },
          { text: 'から', reason: '錯誤。「から」表示原因或起點，不是比較。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '【複習 U11】「より」表示比較',
          analysis: '「AよりBのほうが好き」= 比起A更喜歡B。「より」標記被比較的一方（較不偏好的）。「夏より冬」= 比起夏天，冬天更好。',
          relatedRules: ['📖 U11 第6課 文法「〜より」'],
        },
      },

      // Q20 grammar — U11 L6 比較與列舉：とか〜とか
      {
        id: 'n4_u12_test_q20',
        category: 'grammar' as const,
        level: 'N4' as const,
        stem: '週末{しゅうまつ}は映画{えいが}＿＿買{か}い物{もの}＿＿して過{す}ごしました。',
        stemZh: '週末做了看電影___購物___之類的事度過了。',
        options: [
          { text: 'と / と', reason: '錯誤。「と」是確定引用，不帶含糊語感。' },
          { text: 'や / や', reason: '錯誤。「や」通常用於名詞列舉，不用於句子。' },
          { text: 'とか / とか', reason: '正確。「とか〜とか」列舉事物，帶有隨意、不完全列舉的語氣。' },
          { text: 'し / し', reason: '錯誤。「し」列舉理由但語感不同。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '【複習 U11】「とか〜とか」含糊列舉',
          analysis: '「とか〜とか」用於含糊地列舉多個事物，表示「〜啦〜之類的」。語氣較輕鬆、隨意。',
          relatedRules: ['📖 U11 第6課 文法「〜とか〜とか」'],
        },
      },
    ],
  },
]
