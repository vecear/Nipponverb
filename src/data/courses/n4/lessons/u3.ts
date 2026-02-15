import type { LessonDefinition } from '../../../../types/course'
import type { UnifiedQuestion } from '../../../questions/types'

// ─── Unit 3: 學校與教育 ───

// ─── Lesson 1 Quiz ───
const l1Quiz: UnifiedQuestion[] = [
  // Q1 vocabulary — 大学生
  {
    id: 'n4_u3_l1_q1',
    category: 'vocabulary',
    level: 'N4',
    stem: '「大学生{だいがくせい}」の意味{いみ}はどれですか。',
    stemZh: '「大学生」的意思是哪個？',
    options: [
      { text: '高中生', reason: '錯誤。高中生是高校生{こうこうせい}。' },
      { text: '大學生', reason: '正確。大学生{だいがくせい}意為大學生。' },
      { text: '中學生', reason: '錯誤。中學生是中学生{ちゅうがくせい}。' },
      { text: '小學生', reason: '錯誤。小學生是小学生{しょうがくせい}。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '大学生的詞義',
      analysis: '大学生{だいがくせい}意為大學生。「大学」＋「生」構成身分詞。',
      relatedRules: ['📖 本課 單字「大学生」'],
    },
  },
  // Q2 vocabulary — 中学校
  {
    id: 'n4_u3_l1_q2',
    category: 'vocabulary',
    level: 'N4',
    stem: '「中学校{ちゅうがっこう}」の読{よ}み方{かた}はどれですか。',
    stemZh: '「中学校」的讀法是哪個？',
    options: [
      { text: 'なかがっこう', reason: '錯誤。「中」在此讀「ちゅう」而非訓讀「なか」。' },
      { text: 'ちゅうがくこう', reason: '錯誤。「校」在此因連濁讀「こう」，但「学校」整體讀「がっこう」。' },
      { text: 'ちゅうがっこう', reason: '正確。中学校讀作ちゅうがっこう，意為中學。' },
      { text: 'じゅうがっこう', reason: '錯誤。「中」讀「ちゅう」不讀「じゅう」。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '中学校的讀音',
      analysis: '中学校{ちゅうがっこう}意為中學。注意「学校」讀「がっこう」有促音。',
      relatedRules: ['📖 本課 單字「中学校」'],
    },
  },
  // Q3 vocabulary — 小学校
  {
    id: 'n4_u3_l1_q3',
    category: 'vocabulary',
    level: 'N4',
    stem: '「小学校{しょうがっこう}」の意味{いみ}はどれですか。',
    stemZh: '「小学校」的意思是哪個？',
    options: [
      { text: '小學', reason: '正確。小学校{しょうがっこう}意為小學。' },
      { text: '中學', reason: '錯誤。中學是中学校{ちゅうがっこう}。' },
      { text: '幼稚園', reason: '錯誤。幼稚園是幼稚園{ようちえん}。' },
      { text: '高中', reason: '錯誤。高中是高校{こうこう}。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '小学校的詞義',
      analysis: '小学校{しょうがっこう}意為小學。日本學制為小学校（6年）→中学校（3年）→高等学校（3年）。',
      relatedRules: ['📖 本課 單字「小学校」'],
    },
  },
  // Q4 vocabulary — 高校 vs 高等学校
  {
    id: 'n4_u3_l1_q4',
    category: 'vocabulary',
    level: 'N4',
    stem: '「高校{こうこう}」と「高等学校{こうとうがっこう}」の関係{かんけい}はどれですか。',
    stemZh: '「高校」和「高等学校」的關係是哪個？',
    options: [
      { text: '高校是大學的簡稱', reason: '錯誤。大學是大学{だいがく}，和高校無關。' },
      { text: '兩者完全不同', reason: '錯誤。高校正是高等学校的簡稱。' },
      { text: '高校是高等学校的簡稱', reason: '正確。兩者都指高中。' },
      { text: '高等学校是高校的敬語', reason: '錯誤。只是正式名稱與簡稱的關係，不是敬語。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '高校與高等学校的關係',
      analysis: '高校{こうこう}是高等学校{こうとうがっこう}的簡稱，都指高中。日常會話中多用「高校」。',
      relatedRules: ['📖 本課 單字「高校」「高等学校」'],
    },
  },
  // Q5 vocabulary — 入学
  {
    id: 'n4_u3_l1_q5',
    category: 'vocabulary',
    level: 'N4',
    stem: '「入学{にゅうがく}」の意味{いみ}はどれですか。',
    stemZh: '「入学」的意思是哪個？',
    options: [
      { text: '畢業', reason: '錯誤。畢業是卒業{そつぎょう}。' },
      { text: '轉學', reason: '錯誤。轉學是転校{てんこう}。' },
      { text: '入學', reason: '正確。入学{にゅうがく}意為入學。' },
      { text: '休學', reason: '錯誤。休學是休学{きゅうがく}。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '入学的詞義',
      analysis: '入学{にゅうがく}意為入學。「入」有進入之意，「学」有學校之意。反義詞是卒業{そつぎょう}（畢業）。',
      relatedRules: ['📖 本課 單字「入学」'],
    },
  },
  // Q6 vocabulary — 教育
  {
    id: 'n4_u3_l1_q6',
    category: 'vocabulary',
    level: 'N4',
    stem: '「教育{きょういく}」の読{よ}み方{かた}はどれですか。',
    stemZh: '「教育」的讀法是哪個？',
    options: [
      { text: 'きょいく', reason: '錯誤。「教」讀「きょう」，不是「きょ」。' },
      { text: 'きょういく', reason: '正確。教育讀作きょういく，意為教育。' },
      { text: 'こういく', reason: '錯誤。「教」的音讀是「きょう」，不是「こう」。' },
      { text: 'きょうそだて', reason: '錯誤。這是混合了音讀和訓讀，不正確。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '教育的讀音',
      analysis: '教育{きょういく}意為教育。「教」讀「きょう」、「育」讀「いく」。注意長音。',
      relatedRules: ['📖 本課 單字「教育」'],
    },
  },
  // Q7 vocabulary — 高校生
  {
    id: 'n4_u3_l1_q7',
    category: 'vocabulary',
    level: 'N4',
    stem: '高校{こうこう}に通{かよ}っている学生{がくせい}のことを何{なん}と言{い}いますか。',
    stemZh: '在高中就讀的學生叫什麼？',
    options: [
      { text: '大学生{だいがくせい}', reason: '錯誤。大学生是就讀大學的學生。' },
      { text: '中学生{ちゅうがくせい}', reason: '錯誤。中学生是就讀中學的學生。' },
      { text: '小学生{しょうがくせい}', reason: '錯誤。小学生是就讀小學的學生。' },
      { text: '高校生{こうこうせい}', reason: '正確。高校生意為高中生。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '高校生的詞義',
      analysis: '高校生{こうこうせい}意為高中生。「高校」＋「生」表示就讀於高中的學生。',
      relatedRules: ['📖 本課 單字「高校生」'],
    },
  },
  // Q8 grammar — たら基礎
  {
    id: 'n4_u3_l1_q8',
    category: 'grammar',
    level: 'N4',
    stem: 'もし雨{あめ}が降{ふ}っ＿＿、家{いえ}にいます。',
    stemZh: '如果下雨的話，我待在家裡。',
    options: [
      { text: 'たら', reason: '正確。「たら」接在動詞た形後面，表示條件。降った→降ったら。' },
      { text: 'ても', reason: '錯誤。「ても」表示即使〜也〜，語意不同。' },
      { text: 'から', reason: '錯誤。「から」表示原因，不是條件。' },
      { text: 'ので', reason: '錯誤。「ので」表示原因，不是條件。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '條件句型「たら」',
      analysis: '「たら」接在動詞た形後，表示「如果〜的話」。構成方式：動詞た形＋ら。降った→降ったら。',
      commonMistakes: ['○ 降ったら / × 降るたら → たら接在た形後面'],
      relatedRules: ['📖 本課 文法「〜たら」'],
    },
  },
  // Q9 grammar — ば基礎
  {
    id: 'n4_u3_l1_q9',
    category: 'grammar',
    level: 'N4',
    stem: '勉強{べんきょう}すれ＿＿、試験{しけん}に合格{ごうかく}できます。',
    stemZh: '只要用功讀書，就能通過考試。',
    options: [
      { text: 'と', reason: '錯誤。「と」不接在假定形後面。' },
      { text: 'ば', reason: '正確。「ば」是假定形，すれ＋ば構成條件。' },
      { text: 'たら', reason: '錯誤。「たら」不接在假定形後面。' },
      { text: 'なら', reason: '錯誤。「なら」不接在假定形後面。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '條件句型「ば」',
      analysis: '「ば」接在動詞假定形後，表示「只要〜就〜」。する→すれば、食べる→食べれば。',
      comparisons: ['たら＝如果（較口語）', 'ば＝只要（較強調條件）'],
      relatedRules: ['📖 本課 文法「〜ば」'],
    },
  },
  // Q10 grammar — ばいい
  {
    id: 'n4_u3_l1_q10',
    category: 'grammar',
    level: 'N4',
    stem: '駅{えき}で降{お}り＿＿いいですよ。',
    stemZh: '在車站下車就好了。',
    options: [
      { text: 'たら', reason: '錯誤。此處是「ばいい」句型，不用「たら」。' },
      { text: 'ても', reason: '錯誤。「ても」表示即使〜也〜，語意不同。' },
      { text: 'れば', reason: '正確。降りる的假定形是降りれ＋ば→降りればいい，表示「下車就好了」。' },
      { text: 'ると', reason: '錯誤。「ると」不能構成建議句型。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「〜ばいい」建議句型',
      analysis: '「〜ばいい」表示「〜就好了」、「只要〜就行」。降りる→降りれば→降りればいい。',
      relatedRules: ['📖 本課 文法「〜ばいい」'],
    },
  },
  // Q11 grammar — たら with 入学
  {
    id: 'n4_u3_l1_q11',
    category: 'grammar',
    level: 'N4',
    stem: '大学{だいがく}に入学{にゅうがく}でき＿＿、何{なに}を勉強{べんきょう}しますか。',
    stemZh: '如果能入學的話，你要學什麼？',
    options: [
      { text: 'ば', reason: '錯誤。此處是た形＋ら的句型，不用假定形。' },
      { text: 'たら', reason: '正確。できた＋ら→できたら，表示假設未來的條件。' },
      { text: 'ると', reason: '錯誤。「ると」不表示假設未來。' },
      { text: 'ても', reason: '錯誤。「ても」表示即使〜也〜，語意不同。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「たら」用於假設未來',
      analysis: '「たら」可以假設尚未發生的事情。できた＋ら→できたら（如果能〜的話）。',
      relatedRules: ['📖 本課 文法「〜たら」'],
    },
  },
  // Q12 grammar — ば with i-adj
  {
    id: 'n4_u3_l1_q12',
    category: 'grammar',
    level: 'N4',
    stem: '安{やす}＿＿買{か}います。',
    stemZh: '如果便宜的話就買。',
    options: [
      { text: 'かったら', reason: '錯誤。雖然也通，但空格只留一處，這裡考假定形。' },
      { text: 'いなら', reason: '錯誤。い形容詞不能直接加なら。' },
      { text: 'ければ', reason: '正確。い形容詞的假定形：去い＋ければ。安い→安ければ。' },
      { text: 'くて', reason: '錯誤。「くて」是連接形，不表示條件。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: 'い形容詞的「ば」形',
      analysis: 'い形容詞的假定形：去掉い，加ければ。安い→安ければ（如果便宜的話）。',
      commonMistakes: ['○ 安ければ / × 安いば → い形容詞去い加ければ'],
      relatedRules: ['📖 本課 文法「〜ば」'],
    },
  },
  // Q13 grammar — ばいい with 学校
  {
    id: 'n4_u3_l1_q13',
    category: 'grammar',
    level: 'N4',
    stem: '教育{きょういく}を勉強{べんきょう}すればいいですね。',
    stemZh: '學教育就好了呢。',
    options: [
      { text: '「すればいい」表示建議對方做某事', reason: '正確。「〜ばいい」表示「〜就好了」的建議。' },
      { text: '「すればいい」表示禁止對方做某事', reason: '錯誤。禁止用「〜てはいけない」。' },
      { text: '「すればいい」表示對方已經做了某事', reason: '錯誤。這不是過去式，是建議句型。' },
      { text: '「すればいい」表示必須做某事', reason: '錯誤。必須用「〜なければならない」。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「〜ばいい」的語意',
      analysis: '「〜ばいい」用於給建議，表示「只要〜就好」。語氣輕鬆，適合朋友之間。',
      relatedRules: ['📖 本課 文法「〜ばいい」'],
    },
  },
  // Q14 dialogue comprehension
  {
    id: 'n4_u3_l1_q14',
    category: 'grammar',
    level: 'N4',
    stem: '「頑張{がんば}れば、きっとなれますよ。」の意味{いみ}はどれですか。',
    stemZh: '「頑張れば、きっとなれますよ。」的意思是哪個？',
    options: [
      { text: '即使努力也不行', reason: '錯誤。句中沒有否定或讓步的語氣。' },
      { text: '只要努力，一定可以的', reason: '正確。「ば」表示條件，「きっと」表示一定。' },
      { text: '因為努力了所以成功了', reason: '錯誤。這不是過去式，是對未來的鼓勵。' },
      { text: '不需要努力', reason: '錯誤。句意恰好相反，是鼓勵對方要努力。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「ば」的鼓勵用法',
      analysis: '「頑張れば」是「頑張る」的假定形＋ば。搭配「きっと」表示「只要努力，一定〜」，用於鼓勵他人。',
      relatedRules: ['📖 本課 文法「〜ば」'],
    },
  },
  // Q15 grammar — たら vs ば
  {
    id: 'n4_u3_l1_q15',
    category: 'grammar',
    level: 'N4',
    stem: '「たら」と「ば」の違{ちが}いについて正{ただ}しいのはどれですか。',
    stemZh: '關於「たら」和「ば」的差異，正確的是哪個？',
    options: [
      { text: '「たら」只能用於過去', reason: '錯誤。「たら」也能用於假設未來的條件。' },
      { text: '「ば」只能用於否定句', reason: '錯誤。「ば」可以用於肯定句和否定句。' },
      { text: '「ば」不能用於名詞', reason: '錯誤。名詞可以用「であれば」的形式。' },
      { text: '「たら」較口語，「ば」較強調條件成立', reason: '正確。「たら」常用於口語，「ば」較正式並強調條件。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '「たら」與「ば」的比較',
      analysis: '「たら」較口語且用途廣泛，「ば」較正式且強調條件成立後的結果。兩者都表示條件，但語感不同。',
      comparisons: ['たら＝如果（口語、萬用）', 'ば＝只要（正式、強調條件）'],
      relatedRules: ['📖 本課 文法「〜たら」「〜ば」'],
    },
  },
]

// ─── Lesson 2 Quiz ───
const l2Quiz: UnifiedQuestion[] = [
  // Q1 vocabulary — 講義
  {
    id: 'n4_u3_l2_q1',
    category: 'vocabulary',
    level: 'N4',
    stem: '「講義{こうぎ}」の意味{いみ}はどれですか。',
    stemZh: '「講義」的意思是哪個？',
    options: [
      { text: '校長', reason: '錯誤。校長是校長{こうちょう}。' },
      { text: '講義、課堂講授', reason: '正確。講義{こうぎ}指大學的講課、課堂講授。' },
      { text: '研究', reason: '錯誤。研究是研究{けんきゅう}。' },
      { text: '教育', reason: '錯誤。教育是教育{きょういく}。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '講義的詞義',
      analysis: '講義{こうぎ}指大學的講課、講授。主要用於大學以上的學術課堂。',
      relatedRules: ['📖 本課 單字「講義」'],
    },
  },
  // Q2 vocabulary — 講堂
  {
    id: 'n4_u3_l2_q2',
    category: 'vocabulary',
    level: 'N4',
    stem: '「講堂{こうどう}」の意味{いみ}はどれですか。',
    stemZh: '「講堂」的意思是哪個？',
    options: [
      { text: '教室', reason: '錯誤。教室是教室{きょうしつ}，比講堂小。' },
      { text: '圖書館', reason: '錯誤。圖書館是図書館{としょかん}。' },
      { text: '體育館', reason: '錯誤。體育館是体育館{たいいくかん}。' },
      { text: '講堂', reason: '正確。講堂{こうどう}意為講堂，可用於集會或演講的大廳。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '講堂的詞義',
      analysis: '講堂{こうどう}意為講堂，比一般教室大的集會場所。「講」有講授之意，「堂」有大廳之意。',
      relatedRules: ['📖 本課 單字「講堂」'],
    },
  },
  // Q3 vocabulary — 数学
  {
    id: 'n4_u3_l2_q3',
    category: 'vocabulary',
    level: 'N4',
    stem: '「数学{すうがく}」の意味{いみ}はどれですか。',
    stemZh: '「数学」的意思是哪個？',
    options: [
      { text: '數學', reason: '正確。数学{すうがく}意為數學。' },
      { text: '科學', reason: '錯誤。科學是科学{かがく}。' },
      { text: '文學', reason: '錯誤。文學是文学{ぶんがく}。' },
      { text: '地理', reason: '錯誤。地理是地理{ちり}。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '學科名稱',
      analysis: '数学{すうがく}意為數學。日語學科名稱多為漢字詞，與中文相近。',
      comparisons: ['数学＝數學', '科学＝科學', '文学＝文學', '地理＝地理'],
      relatedRules: ['📖 本課 單字「数学」'],
    },
  },
  // Q4 vocabulary — 地理
  {
    id: 'n4_u3_l2_q4',
    category: 'vocabulary',
    level: 'N4',
    stem: '「地理{ちり}」の読{よ}み方{かた}はどれですか。',
    stemZh: '「地理」的讀法是哪個？',
    options: [
      { text: 'じり', reason: '錯誤。「地」在此讀「ち」不讀「じ」。' },
      { text: 'ちり', reason: '正確。地理讀作ちり，意為地理。' },
      { text: 'とち', reason: '錯誤。「土地」讀「とち」，但「地理」不同。' },
      { text: 'じりょう', reason: '錯誤。這不是地理的讀音。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '地理的讀音',
      analysis: '地理{ちり}意為地理。只有兩個音節，是較短的學科名稱。',
      relatedRules: ['📖 本課 單字「地理」'],
    },
  },
  // Q5 vocabulary — 科学 vs 文学
  {
    id: 'n4_u3_l2_q5',
    category: 'vocabulary',
    level: 'N4',
    stem: '「科学{かがく}」と「文学{ぶんがく}」、理系{りけい}の科目{かもく}はどちらですか。',
    stemZh: '「科学」和「文学」，理科的科目是哪個？',
    options: [
      { text: '文学{ぶんがく}', reason: '錯誤。文學屬於文科（文系）。' },
      { text: '科学{かがく}', reason: '正確。科學屬於理科（理系）。' },
      { text: '兩者都是理科', reason: '錯誤。文學是文科。' },
      { text: '兩者都是文科', reason: '錯誤。科學是理科。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '文理科的區分',
      analysis: '科学{かがく}（科學）屬於理系（理科），文学{ぶんがく}（文學）屬於文系（文科）。',
      comparisons: ['理系{りけい}＝理科：数学、科学', '文系{ぶんけい}＝文科：文学、地理'],
      relatedRules: ['📖 本課 單字「科学」「文学」'],
    },
  },
  // Q6 vocabulary — 文法
  {
    id: 'n4_u3_l2_q6',
    category: 'vocabulary',
    level: 'N4',
    stem: '「文法{ぶんぽう}」の意味{いみ}はどれですか。',
    stemZh: '「文法」的意思是哪個？',
    options: [
      { text: '文化', reason: '錯誤。文化是文化{ぶんか}。' },
      { text: '文學', reason: '錯誤。文學是文学{ぶんがく}。' },
      { text: '語法', reason: '正確。文法{ぶんぽう}意為語法、文法。' },
      { text: '作文', reason: '錯誤。作文是作文{さくぶん}。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '文法的詞義',
      analysis: '文法{ぶんぽう}意為語法、文法。「文」有文章之意，「法」有規則之意。',
      relatedRules: ['📖 本課 單字「文法」'],
    },
  },
  // Q7 vocabulary — 文化
  {
    id: 'n4_u3_l2_q7',
    category: 'vocabulary',
    level: 'N4',
    stem: '「文化{ぶんか}祭{さい}」の「文化{ぶんか}」はどんな意味{いみ}ですか。',
    stemZh: '「文化祭」中的「文化」是什麼意思？',
    options: [
      { text: '語法', reason: '錯誤。語法是文法{ぶんぽう}。' },
      { text: '文學', reason: '錯誤。文學是文学{ぶんがく}。' },
      { text: '文化', reason: '正確。文化{ぶんか}意為文化。文化祭是學校的文化活動。' },
      { text: '作文', reason: '錯誤。作文是作文{さくぶん}。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '文化的詞義',
      analysis: '文化{ぶんか}意為文化。文化祭{ぶんかさい}是日本學校的重要活動，類似台灣的校慶。',
      relatedRules: ['📖 本課 單字「文化」'],
    },
  },
  // Q8 grammar — ば〜ほど
  {
    id: 'n4_u3_l2_q8',
    category: 'grammar',
    level: 'N4',
    stem: '練習{れんしゅう}すれ＿＿するほど上手{じょうず}になります。',
    stemZh: '越練習就越進步。',
    options: [
      { text: 'ば', reason: '正確。「〜ば〜ほど」表示越〜越〜。練習すれば練習するほど。' },
      { text: 'たら', reason: '錯誤。「たら」不用於「〜ほど」句型。' },
      { text: 'と', reason: '錯誤。「と」不用於「〜ほど」句型。' },
      { text: 'なら', reason: '錯誤。「なら」不用於「〜ほど」句型。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「〜ば〜ほど」越〜越〜',
      analysis: '「〜ば〜ほど」表示「越〜越〜」。動詞假定形＋同一動詞辭書形＋ほど。',
      relatedRules: ['📖 本課 文法「〜ば〜ほど」'],
    },
  },
  // Q9 grammar — ば〜ほど with reading
  {
    id: 'n4_u3_l2_q9',
    category: 'grammar',
    level: 'N4',
    stem: '読{よ}め＿＿読{よ}むほど文学{ぶんがく}の魅力{みりょく}が分{わ}かります。',
    stemZh: '越讀越能了解文學的魅力。',
    options: [
      { text: 'たら', reason: '錯誤。「たら」不用於此句型。' },
      { text: 'ると', reason: '錯誤。「ると」不是正確的接續。' },
      { text: 'ば', reason: '正確。読む的假定形是読め＋ば。「読めば読むほど」＝越讀越〜。' },
      { text: 'ても', reason: '錯誤。「ても」表示即使〜也〜，不用於此句型。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '五段動詞的「〜ば〜ほど」',
      analysis: '五段動詞的假定形：将う段改為え段。読む→読め＋ば→読めば読むほど。',
      relatedRules: ['📖 本課 文法「〜ば〜ほど」'],
    },
  },
  // Q10 grammar — たらいい
  {
    id: 'n4_u3_l2_q10',
    category: 'grammar',
    level: 'N4',
    stem: '早{はや}く春{はる}になっ＿＿いいのに。',
    stemZh: '要是早點變成春天就好了。',
    options: [
      { text: 'ば', reason: '錯誤。此處是「たらいい」句型，不用假定形。' },
      { text: 'たら', reason: '正確。「〜たらいい」表示願望，「なったらいいのに」＝要是〜就好了。' },
      { text: 'ても', reason: '錯誤。「ても」表示即使〜也〜。' },
      { text: 'と', reason: '錯誤。「と」表示自然因果，不表示願望。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「〜たらいい」表示願望',
      analysis: '「〜たらいいのに」表示「要是〜就好了」的願望。のに加強了遺憾或期盼的語氣。',
      relatedRules: ['📖 本課 文法「〜たらいい」'],
    },
  },
  // Q11 grammar — もし
  {
    id: 'n4_u3_l2_q11',
    category: 'grammar',
    level: 'N4',
    stem: '＿＿時間{じかん}があれば、手伝{てつだ}ってください。',
    stemZh: '如果有時間的話，請幫幫忙。',
    options: [
      { text: 'もし', reason: '正確。「もし」放在句首強調假設語氣，搭配「ば」「たら」等條件句型。' },
      { text: 'まだ', reason: '錯誤。「まだ」意為「還」，不表示假設。' },
      { text: 'もう', reason: '錯誤。「もう」意為「已經」，不表示假設。' },
      { text: 'ぜひ', reason: '錯誤。「ぜひ」意為「務必」，不表示假設。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「もし」的用法',
      analysis: '「もし」放在句首，強調假設語氣，常搭配「ば」「たら」「なら」等條件句型使用。',
      relatedRules: ['📖 本課 文法「もし」'],
    },
  },
  // Q12 grammar — もし + たら
  {
    id: 'n4_u3_l2_q12',
    category: 'grammar',
    level: 'N4',
    stem: 'もし選{えら}べ＿＿いいんですけど。',
    stemZh: '要是能選擇就好了。',
    options: [
      { text: 'ると', reason: '錯誤。「ると」不能構成願望句型。' },
      { text: 'れば', reason: '錯誤。雖然文法上可以，但此處前面有「もし」，搭配「たら」更自然。' },
      { text: 'たら', reason: '正確。「もし〜たらいい」表示「要是能〜就好了」。選べた＋ら→選べたら。' },
      { text: 'ても', reason: '錯誤。「ても」表示即使〜也〜，語意不同。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「もし〜たらいい」',
      analysis: '「もし」搭配「たらいい」，加強假設願望的語氣。選べる→選べたら→もし選べたらいい。',
      relatedRules: ['📖 本課 文法「もし」「〜たらいい」'],
    },
  },
  // Q13 grammar — ば〜ほど with adj
  {
    id: 'n4_u3_l2_q13',
    category: 'grammar',
    level: 'N4',
    stem: '数学{すうがく}は勉強{べんきょう}すればするほど＿＿なりますね。',
    stemZh: '數學越學越有趣呢。',
    options: [
      { text: '面白{おもしろ}く', reason: '正確。い形容詞接「なる」時去い加く。面白い→面白くなる。' },
      { text: '面白{おもしろ}い', reason: '錯誤。い形容詞不能直接接なる。' },
      { text: '面白{おもしろ}に', reason: '錯誤。い形容詞不用「に」接なる。' },
      { text: '面白{おもしろ}で', reason: '錯誤。い形容詞不用「で」接なる。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: 'い形容詞＋なる',
      analysis: 'い形容詞接「なる」表示變化：去い加く。面白い→面白くなる（變得有趣）。',
      relatedRules: ['📖 本課 文法「〜ば〜ほど」'],
    },
  },
  // Q14 dialogue comprehension
  {
    id: 'n4_u3_l2_q14',
    category: 'grammar',
    level: 'N4',
    stem: '「もっと勉強{べんきょう}したらいいのにと思{おも}います」はどんな気持{きも}ちですか。',
    stemZh: '「覺得要是能多學點就好了」是什麼心情？',
    options: [
      { text: '命令對方學習', reason: '錯誤。命令用「〜なさい」或「〜しろ」。' },
      { text: '已經學夠了', reason: '錯誤。句意是想要更多學習，不是已經滿足。' },
      { text: '希望能學更多的期盼', reason: '正確。「〜たらいいのに」表示對現狀的遺憾和期盼。' },
      { text: '拒絕學習', reason: '錯誤。句意是想學更多，不是拒絕。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「〜たらいいのに」的語氣',
      analysis: '「〜たらいいのに」帶有「要是〜就好了（可惜做不到）」的遺憾和期盼語氣。',
      relatedRules: ['📖 本課 文法「〜たらいい」'],
    },
  },
  // Q15 grammar — もし comprehensive
  {
    id: 'n4_u3_l2_q15',
    category: 'grammar',
    level: 'N4',
    stem: '「もし」について正{ただ}しいのはどれですか。',
    stemZh: '關於「もし」，正確的是哪個？',
    options: [
      { text: '「もし」必須和「と」搭配', reason: '錯誤。「もし」可搭配ば、たら、なら等多種條件句型。' },
      { text: '「もし」放在句尾', reason: '錯誤。「もし」放在句首。' },
      { text: '「もし」表示確定的事實', reason: '錯誤。「もし」表示假設，不是確定事實。' },
      { text: '「もし」放在句首強調假設語氣', reason: '正確。「もし」是副詞，放在條件句句首加強假設語氣。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '「もし」的綜合理解',
      analysis: '「もし」是副詞，放在句首強調假設語氣。可以搭配「ば」「たら」「なら」等多種條件句型。省略也可以。',
      relatedRules: ['📖 本課 文法「もし」'],
    },
  },
]

// ─── Lesson 3 Quiz ───
const l3Quiz: UnifiedQuestion[] = [
  // Q1 vocabulary — 試験
  {
    id: 'n4_u3_l3_q1',
    category: 'vocabulary',
    level: 'N4',
    stem: '「試験{しけん}」の意味{いみ}はどれですか。',
    stemZh: '「試験」的意思是哪個？',
    options: [
      { text: '作業', reason: '錯誤。作業是宿題{しゅくだい}。' },
      { text: '考試', reason: '正確。試験{しけん}意為考試、測驗。' },
      { text: '授課', reason: '錯誤。授課是授業{じゅぎょう}。' },
      { text: '練習', reason: '錯誤。練習是練習{れんしゅう}。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '試験的詞義',
      analysis: '試験{しけん}意為考試、測驗。「試」有嘗試之意，「験」有驗證之意。',
      relatedRules: ['📖 本課 單字「試験」'],
    },
  },
  // Q2 vocabulary — 予習 vs 復習
  {
    id: 'n4_u3_l3_q2',
    category: 'vocabulary',
    level: 'N4',
    stem: '「予習{よしゅう}」と「復習{ふくしゅう}」の違{ちが}いは何{なん}ですか。',
    stemZh: '「予習」和「復習」的差別是什麼？',
    options: [
      { text: '預習和復習', reason: '正確。予習是課前預習，復習是課後復習。' },
      { text: '練習和測驗', reason: '錯誤。練習是練習，測驗是試験。' },
      { text: '教育和學習', reason: '錯誤。教育是教育{きょういく}。' },
      { text: '入學和畢業', reason: '錯誤。入學是入学，畢業是卒業。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '予習與復習的區別',
      analysis: '予習{よしゅう}＝課前的預習，復習{ふくしゅう}＝課後的復習。「予」有事前的意思，「復」有重新的意思。',
      comparisons: ['予習{よしゅう}＝預習（課前）', '復習{ふくしゅう}＝復習（課後）'],
      relatedRules: ['📖 本課 單字「予習」「復習」'],
    },
  },
  // Q3 vocabulary — テキスト
  {
    id: 'n4_u3_l3_q3',
    category: 'vocabulary',
    level: 'N4',
    stem: '「テキスト」の意味{いみ}はどれですか。',
    stemZh: '「テキスト」的意思是哪個？',
    options: [
      { text: '筆記本', reason: '錯誤。筆記本是ノート。' },
      { text: '黑板', reason: '錯誤。黑板是黒板{こくばん}。' },
      { text: '課本', reason: '正確。テキスト源自英語text，意為課本、教材。' },
      { text: '字典', reason: '錯誤。字典是辞書{じしょ}。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: 'テキスト的詞義',
      analysis: 'テキスト源自英語text，在日語中主要指課本、教材。是學校生活的常用外來語。',
      relatedRules: ['📖 本課 單字「テキスト」'],
    },
  },
  // Q4 vocabulary — レポート
  {
    id: 'n4_u3_l3_q4',
    category: 'vocabulary',
    level: 'N4',
    stem: '「レポート」の意味{いみ}はどれですか。',
    stemZh: '「レポート」的意思是哪個？',
    options: [
      { text: '考試', reason: '錯誤。考試是試験{しけん}。' },
      { text: '作業', reason: '錯誤。作業是宿題{しゅくだい}。' },
      { text: '上課', reason: '錯誤。上課是授業{じゅぎょう}。' },
      { text: '報告', reason: '正確。レポート源自英語report，意為報告。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: 'レポート的詞義',
      analysis: 'レポート源自英語report，意為報告。在大學中常指書面報告或小論文。',
      relatedRules: ['📖 本課 單字「レポート」'],
    },
  },
  // Q5 vocabulary — 卒業
  {
    id: 'n4_u3_l3_q5',
    category: 'vocabulary',
    level: 'N4',
    stem: '「卒業{そつぎょう}」の反対語{はんたいご}はどれですか。',
    stemZh: '「卒業」（畢業）的反義詞是哪個？',
    options: [
      { text: '予習{よしゅう}', reason: '錯誤。予習意為預習，不是反義詞。' },
      { text: '入学{にゅうがく}', reason: '正確。入学意為入學，是卒業的反義詞。' },
      { text: '復習{ふくしゅう}', reason: '錯誤。復習意為復習，不是反義詞。' },
      { text: '研究{けんきゅう}', reason: '錯誤。研究意為研究，不是反義詞。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '卒業與入学的配對',
      analysis: '卒業{そつぎょう}（畢業）⇔ 入学{にゅうがく}（入學）。這是學校生活中最基本的反義詞組合。',
      relatedRules: ['📖 本課 單字「卒業」'],
    },
  },
  // Q6 vocabulary — 校長
  {
    id: 'n4_u3_l3_q6',
    category: 'vocabulary',
    level: 'N4',
    stem: '「校長{こうちょう}」の意味{いみ}はどれですか。',
    stemZh: '「校長」的意思是哪個？',
    options: [
      { text: '班導師', reason: '錯誤。班導師是担任{たんにん}の先生{せんせい}。' },
      { text: '教授', reason: '錯誤。教授是教授{きょうじゅ}。' },
      { text: '校長', reason: '正確。校長{こうちょう}意為校長，學校的最高負責人。' },
      { text: '學長', reason: '錯誤。學長是先輩{せんぱい}。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '校長的詞義',
      analysis: '校長{こうちょう}意為校長，學校的最高管理者。「校」有學校之意，「長」有領導者之意。',
      relatedRules: ['📖 本課 單字「校長」'],
    },
  },
  // Q7 vocabulary — 研究
  {
    id: 'n4_u3_l3_q7',
    category: 'vocabulary',
    level: 'N4',
    stem: '「研究{けんきゅう}」の読{よ}み方{かた}はどれですか。',
    stemZh: '「研究」的讀法是哪個？',
    options: [
      { text: 'けんきゅう', reason: '正確。研究讀作けんきゅう，意為研究。' },
      { text: 'けんきゅ', reason: '錯誤。少了長音，正確讀音有長音「ゅう」。' },
      { text: 'げんきゅう', reason: '錯誤。「研」讀「けん」不讀「げん」。' },
      { text: 'けんぐう', reason: '錯誤。「究」讀「きゅう」不讀「ぐう」。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '研究的讀音',
      analysis: '研究{けんきゅう}意為研究。注意「究」讀「きゅう」，帶長音。',
      relatedRules: ['📖 本課 單字「研究」'],
    },
  },
  // Q8 grammar — たらどう
  {
    id: 'n4_u3_l3_q8',
    category: 'grammar',
    level: 'N4',
    stem: '医者{いしゃ}に行{い}っ＿＿どうですか。',
    stemZh: '去看醫生如何？',
    options: [
      { text: 'ても', reason: '錯誤。「ても」表示即使〜也〜，不是建議。' },
      { text: 'たら', reason: '正確。「〜たらどうですか」表示建議對方做某事。行った＋ら→行ったら。' },
      { text: 'ば', reason: '錯誤。「ばどうですか」不是標準建議句型。' },
      { text: 'ので', reason: '錯誤。「ので」表示原因，不是建議。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「〜たらどうですか」建議句型',
      analysis: '「〜たらどうですか」用於建議對方做某事，意為「〜如何？」。語氣委婉。',
      relatedRules: ['📖 本課 文法「〜たらどう」'],
    },
  },
  // Q9 grammar — たらいいですか
  {
    id: 'n4_u3_l3_q9',
    category: 'grammar',
    level: 'N4',
    stem: 'どう＿＿いいですか。',
    stemZh: '該怎麼辦才好？',
    options: [
      { text: 'すると', reason: '錯誤。「すると」表示接著、於是，不表示詢問建議。' },
      { text: 'しても', reason: '錯誤。「しても」表示即使做了，語意不同。' },
      { text: 'したら', reason: '正確。「どうしたらいいですか」表示「該怎麼辦才好？」。' },
      { text: 'するなら', reason: '錯誤。「するなら」表示如果要做的話，不是詢問建議。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「〜たらいいですか」詢問建議',
      analysis: '「〜たらいいですか」用於詢問該怎麼做。「どうしたらいいですか」是最常見的用法。',
      relatedRules: ['📖 本課 文法「〜たらいいですか」'],
    },
  },
  // Q10 grammar — と conditional
  {
    id: 'n4_u3_l3_q10',
    category: 'grammar',
    level: 'N4',
    stem: 'テキストを開{ひら}く＿＿、重要{じゅうよう}なところがすぐ分{わ}かります。',
    stemZh: '一打開課本，就能馬上看到重要的地方。',
    options: [
      { text: 'なら', reason: '錯誤。「なら」用於話題前提，不適合一般規律。' },
      { text: 'ても', reason: '錯誤。「ても」表示即使〜也〜，語意不同。' },
      { text: 'と', reason: '正確。「と」表示做了A就必然發生B，適合一般規律或習慣。' },
      { text: 'から', reason: '錯誤。「から」表示原因，不是條件。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「と」表示必然結果',
      analysis: '「と」接在動詞辭書形後，表示做了A就必然發生B。適合描述自然規律或操作結果。',
      relatedRules: ['📖 本課 文法「〜と（條件）」'],
    },
  },
  // Q11 grammar — たらどう with 先輩
  {
    id: 'n4_u3_l3_q11',
    category: 'grammar',
    level: 'N4',
    stem: '先輩{せんぱい}に聞{き}いたらどうですか。',
    stemZh: '問學長如何？',
    options: [
      { text: '這是在命令對方去問學長', reason: '錯誤。「たらどうですか」是委婉建議，不是命令。' },
      { text: '這是在建議對方去問學長', reason: '正確。「〜たらどうですか」是委婉的建議句型。' },
      { text: '這是在問學長好不好', reason: '錯誤。不是在評價學長，是在建議行動。' },
      { text: '這是在禁止對方去問學長', reason: '錯誤。禁止用「〜てはいけません」。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「〜たらどうですか」的語氣',
      analysis: '「〜たらどうですか」是委婉的建議，語氣比直接說「〜てください」更柔和。適合同輩或晚輩之間使用。',
      relatedRules: ['📖 本課 文法「〜たらどう」'],
    },
  },
  // Q12 grammar — たらいいですか with 卒業
  {
    id: 'n4_u3_l3_q12',
    category: 'grammar',
    level: 'N4',
    stem: '卒業{そつぎょう}までにどんな研究{けんきゅう}を＿＿いいですか。',
    stemZh: '到畢業為止，做什麼研究比較好？',
    options: [
      { text: 'すると', reason: '錯誤。「すると」不能構成詢問建議的句型。' },
      { text: 'したら', reason: '正確。「〜したらいいですか」用於詢問該做什麼。' },
      { text: 'するなら', reason: '錯誤。「するなら」不是詢問建議的形式。' },
      { text: 'しても', reason: '錯誤。「しても」表示即使做了也〜，語意不同。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「〜たらいいですか」詢問做法',
      analysis: '「どんな研究をしたらいいですか」是詢問「該做什麼研究」的標準句型。した＋ら→したら。',
      relatedRules: ['📖 本課 文法「〜たらいいですか」'],
    },
  },
  // Q13 grammar — と with ボタン
  {
    id: 'n4_u3_l3_q13',
    category: 'grammar',
    level: 'N4',
    stem: 'このボタンを押{お}す＿＿、図書館{としょかん}の資料{しりょう}が検索{けんさく}できます。',
    stemZh: '按下這個按鈕，就能搜尋圖書館的資料。',
    options: [
      { text: 'たら', reason: '錯誤。雖然也通，但「と」更適合描述操作結果。' },
      { text: 'なら', reason: '錯誤。「なら」用於話題前提，不適合操作說明。' },
      { text: 'ば', reason: '錯誤。「ば」需要假定形，不直接接辭書形。' },
      { text: 'と', reason: '正確。「と」表示按下按鈕後必然產生的結果，適合操作說明。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '「と」用於操作說明',
      analysis: '描述操作（按按鈕、開電源等）的必然結果時，用「と」最自然。',
      relatedRules: ['📖 本課 文法「〜と（條件）」'],
    },
  },
  // Q14 dialogue comprehension
  {
    id: 'n4_u3_l3_q14',
    category: 'grammar',
    level: 'N4',
    stem: '「まず予習{よしゅう}をしたらどうですか。テキストを読{よ}むといいですよ。」の意味{いみ}はどれですか。',
    stemZh: '「先預習如何？讀課本就好了。」的意思是哪個？',
    options: [
      { text: '命令對方去預習', reason: '錯誤。「たらどうですか」是建議，不是命令。' },
      { text: '問對方有沒有預習', reason: '錯誤。不是詢問，是建議。' },
      { text: '建議對方先預習並讀課本', reason: '正確。「たらどう」建議預習，「と」說明讀課本的效果。' },
      { text: '禁止對方預習', reason: '錯誤。句意是鼓勵預習，不是禁止。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '建議句型的綜合理解',
      analysis: '「〜たらどうですか」＝建議，「〜といいですよ」＝告知對方做了會有好結果。兩者組合為完整的建議。',
      relatedRules: ['📖 本課 文法「〜たらどう」「〜と（條件）」'],
    },
  },
  // Q15 grammar — 三種句型比較
  {
    id: 'n4_u3_l3_q15',
    category: 'grammar',
    level: 'N4',
    stem: '「〜たらどうですか」「〜たらいいですか」「〜と」の使{つか}い分{わ}けで正{ただ}しいのはどれですか。',
    stemZh: '關於「〜たらどうですか」「〜たらいいですか」「〜と」的區分，正確的是哪個？',
    options: [
      { text: '三者都表示命令', reason: '錯誤。都不是命令句型。' },
      { text: '「たらどう」是建議，「たらいいですか」是詢問，「と」是必然結果', reason: '正確。三者用途各有不同。' },
      { text: '三者意思完全相同', reason: '錯誤。三者有不同的用途和語感。' },
      { text: '「と」用於建議，其餘兩個表示因果', reason: '錯誤。「と」表示因果，而非建議。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '三種條件相關句型的比較',
      analysis: '「〜たらどうですか」用於給建議；「〜たらいいですか」用於詢問做法；「〜と」用於描述必然因果。三者功能不同。',
      relatedRules: ['📖 本課 文法「〜たらどう」「〜たらいいですか」「〜と（條件）」'],
    },
  },
]

// ─── Lesson 4 Quiz ───
const l4Quiz: UnifiedQuestion[] = [
  // Q1 vocabulary — 会議
  {
    id: 'n4_u3_l4_q1',
    category: 'vocabulary',
    level: 'N4',
    stem: '「会議{かいぎ}」の意味{いみ}はどれですか。',
    stemZh: '「会議」的意思是哪個？',
    options: [
      { text: '會議', reason: '正確。会議{かいぎ}意為會議。' },
      { text: '辦事處', reason: '錯誤。辦事處是事務所{じむしょ}。' },
      { text: '工廠', reason: '錯誤。工廠是工場{こうじょう}。' },
      { text: '計劃', reason: '錯誤。計劃是計画{けいかく}。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '会議的詞義',
      analysis: '会議{かいぎ}意為會議。「会」有聚集之意，「議」有討論之意。',
      relatedRules: ['📖 本課 單字「会議」'],
    },
  },
  // Q2 vocabulary — 部長・課長・社長
  {
    id: 'n4_u3_l4_q2',
    category: 'vocabulary',
    level: 'N4',
    stem: '「部長{ぶちょう}」「課長{かちょう}」「社長{しゃちょう}」で一番{いちばん}偉{えら}いのは誰{だれ}ですか。',
    stemZh: '「部長」「課長」「社長」中最高職位的是誰？',
    options: [
      { text: '社長{しゃちょう}', reason: '正確。社長是公司的最高負責人。' },
      { text: '部長{ぶちょう}', reason: '錯誤。部長管理部門，職位在社長之下。' },
      { text: '課長{かちょう}', reason: '錯誤。課長管理課，職位在部長之下。' },
      { text: '全部一樣', reason: '錯誤。三者有明確的上下關係。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '日本企業職位階層',
      analysis: '日本企業的職位由高到低：社長{しゃちょう}→部長{ぶちょう}→課長{かちょう}。社長相當於總經理/董事長。',
      relatedRules: ['📖 本課 單字「部長」「課長」「社長」'],
    },
  },
  // Q3 vocabulary — 会議室
  {
    id: 'n4_u3_l4_q3',
    category: 'vocabulary',
    level: 'N4',
    stem: '「会議室{かいぎしつ}」の読{よ}み方{かた}はどれですか。',
    stemZh: '「会議室」的讀法是哪個？',
    options: [
      { text: 'かいぎしつ', reason: '正確。会議室讀作かいぎしつ，意為會議室。' },
      { text: 'かいぎへや', reason: '錯誤。「室」在此讀「しつ」而非「へや」。' },
      { text: 'かいぎま', reason: '錯誤。「室」讀「しつ」而非「ま」。' },
      { text: 'あいぎしつ', reason: '錯誤。「会」讀「かい」不讀「あい」。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '会議室的讀音',
      analysis: '会議室{かいぎしつ}意為會議室。由「会議」＋「室」組成。「室」音讀「しつ」。',
      relatedRules: ['📖 本課 單字「会議室」'],
    },
  },
  // Q4 vocabulary — 会場
  {
    id: 'n4_u3_l4_q4',
    category: 'vocabulary',
    level: 'N4',
    stem: '「会場{かいじょう}」の意味{いみ}はどれですか。',
    stemZh: '「会場」的意思是哪個？',
    options: [
      { text: '教室', reason: '錯誤。教室是教室{きょうしつ}。' },
      { text: '會場', reason: '正確。会場{かいじょう}意為會場、活動舉辦的場所。' },
      { text: '廣場', reason: '錯誤。廣場是広場{ひろば}。' },
      { text: '車站', reason: '錯誤。車站是駅{えき}。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '会場的詞義',
      analysis: '会場{かいじょう}意為會場。「会」有集會之意，「場」有場所之意。常用於活動、典禮等場合。',
      relatedRules: ['📖 本課 單字「会場」'],
    },
  },
  // Q5 vocabulary — 事務所
  {
    id: 'n4_u3_l4_q5',
    category: 'vocabulary',
    level: 'N4',
    stem: '「事務所{じむしょ}」の意味{いみ}はどれですか。',
    stemZh: '「事務所」的意思是哪個？',
    options: [
      { text: '研究室', reason: '錯誤。研究室是研究室{けんきゅうしつ}。' },
      { text: '工廠', reason: '錯誤。工廠是工場{こうじょう}。' },
      { text: '辦事處', reason: '正確。事務所{じむしょ}意為辦事處、辦公室。' },
      { text: '停車場', reason: '錯誤。停車場是駐車場{ちゅうしゃじょう}。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '事務所的詞義',
      analysis: '事務所{じむしょ}意為辦事處或辦公室。「事務」指事務性工作，「所」指場所。',
      relatedRules: ['📖 本課 單字「事務所」'],
    },
  },
  // Q6 vocabulary — 工場
  {
    id: 'n4_u3_l4_q6',
    category: 'vocabulary',
    level: 'N4',
    stem: '「工場{こうじょう}」の読{よ}み方{かた}と意味{いみ}で正{ただ}しいのはどれですか。',
    stemZh: '「工場」的讀法與意思正確的是哪個？',
    options: [
      { text: '讀作「こうば」，意為工程', reason: '錯誤。「こうば」是口語讀法，但意思不是工程。' },
      { text: '讀作「こうじょう」，意為工廠', reason: '正確。工場{こうじょう}意為工廠。' },
      { text: '讀作「くじょう」，意為苦情', reason: '錯誤。苦情{くじょう}是另一個詞，意為抱怨。' },
      { text: '讀作「こうじょう」，意為向上', reason: '錯誤。向上{こうじょう}是另一個詞，意為進步。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '工場的讀音與詞義',
      analysis: '工場{こうじょう}意為工廠。注意「こうじょう」有多個同音異字詞：工場（工廠）、向上（進步）等。',
      relatedRules: ['📖 本課 單字「工場」'],
    },
  },
  // Q7 grammar — なら（基於話題）
  {
    id: 'n4_u3_l4_q7',
    category: 'grammar',
    level: 'N4',
    stem: '日本{にほん}に行{い}く＿＿、京都{きょうと}がおすすめです。',
    stemZh: '如果要去日本的話，推薦京都。',
    options: [
      { text: 'なら', reason: '正確。「なら」承接對方的話題，提出建議。' },
      { text: 'たら', reason: '錯誤。「たら」用於假設完成後的結果，此處是針對話題提建議。' },
      { text: 'ば', reason: '錯誤。「ば」需要假定形，不直接接辭書形。' },
      { text: 'ても', reason: '錯誤。「ても」表示「即使」，語意不符。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '條件句型「なら」',
      analysis: '「なら」用於承接對方的話題或前提條件，提出建議或判斷。常譯為「如果〜的話」。',
      relatedRules: ['📖 本課 文法「〜なら」'],
    },
  },
  // Q8 grammar — と（自然規律）
  {
    id: 'n4_u3_l4_q8',
    category: 'grammar',
    level: 'N4',
    stem: '春{はる}になる＿＿、桜{さくら}が咲{さ}きます。',
    stemZh: '一到春天，櫻花就會開。',
    options: [
      { text: 'なら', reason: '錯誤。「なら」用於主觀建議，不適合描述自然規律。' },
      { text: 'と', reason: '正確。「と」表示自然規律或必然結果的條件。' },
      { text: 'ば', reason: '錯誤。雖然可以使用，但「と」更適合表達自然規律。' },
      { text: 'ても', reason: '錯誤。「ても」表示「即使」，語意不符。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '條件句型「と」',
      analysis: '「と」用於表達自然規律、習慣或必然的因果關係。一旦前項成立，後項必然發生。',
      relatedRules: ['📖 本課 文法「〜と（条件）」'],
    },
  },
  // Q9 grammar — 場合は
  {
    id: 'n4_u3_l4_q9',
    category: 'grammar',
    level: 'N4',
    stem: '地震{じしん}の＿＿、机{つくえ}の下{した}に隠{かく}れてください。',
    stemZh: '萬一發生地震，請躲到桌子底下。',
    options: [
      { text: 'ために', reason: '錯誤。「ために」表示「為了」，語意不符。' },
      { text: '場合{ばあい}は', reason: '正確。「〜場合は」表示在某情況發生時應採取的行動。' },
      { text: 'ところ', reason: '錯誤。「ところ」表示時機或場所，不適合此處。' },
      { text: 'あいだに', reason: '錯誤。「あいだに」表示「在〜期間」，語意不符。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「〜場合は」的用法',
      analysis: '「〜場合{ばあい}は」表示「在〜的情況下」，用於預設某種情境並說明應對方式。常用於規則說明、緊急指示等。',
      relatedRules: ['📖 本課 文法「〜場合は」'],
    },
  },
  // Q10 grammar — なら（名詞接續）
  {
    id: 'n4_u3_l4_q10',
    category: 'grammar',
    level: 'N4',
    stem: 'A：「パソコンが壊{こわ}れました。」B：「パソコン＿＿、田中{たなか}さんに聞{き}いてください。」',
    stemZh: 'A：「電腦壞了。」B：「如果是電腦的問題，請問田中先生。」',
    options: [
      { text: 'と', reason: '錯誤。「と」不直接接名詞表示話題條件。' },
      { text: 'ば', reason: '錯誤。「ば」不直接接名詞。' },
      { text: 'ても', reason: '錯誤。「ても」表示「即使」，語意不符。' },
      { text: 'なら', reason: '正確。「なら」可直接接名詞，承接對方提到的話題。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '「なら」接名詞的用法',
      analysis: '「なら」可以直接接在名詞後面，形式為「名詞＋なら」，用於承接對方的話題來給出建議或看法。',
      relatedRules: ['📖 本課 文法「〜なら」'],
    },
  },
  // Q11 grammar — と（機械因果）
  {
    id: 'n4_u3_l4_q11',
    category: 'grammar',
    level: 'N4',
    stem: 'このボタンを押{お}す＿＿、データが出{で}てきます。',
    stemZh: '按下這個按鈕，數據就會出來。',
    options: [
      { text: 'と', reason: '正確。「と」表示按下按鈕後必然出現數據的機械性因果。' },
      { text: 'なら', reason: '錯誤。「なら」用於話題性條件，不適合機械操作。' },
      { text: '場合{ばあい}は', reason: '錯誤。雖可用但不夠自然，「と」更適合機械性因果。' },
      { text: 'のに', reason: '錯誤。「のに」表示「儘管」，語意不符。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「と」用於操作說明',
      analysis: '「と」適合描述機器操作等必然的因果關係。按下A就必定發生B的情況最適合用「と」。',
      relatedRules: ['📖 本課 文法「〜と（条件）」'],
    },
  },
  // Q12 grammar — 場合は（應用）
  {
    id: 'n4_u3_l4_q12',
    category: 'grammar',
    level: 'N4',
    stem: '遅{おく}れる＿＿、事前{じぜん}に連絡{れんらく}してください。',
    stemZh: '如果會遲到的話，請事先聯繫。',
    options: [
      { text: 'と', reason: '錯誤。「と」用於必然結果，此處是請求在某情況下做某事。' },
      { text: 'ので', reason: '錯誤。「ので」表示原因「因為」，語意不符。' },
      { text: '場合{ばあい}は', reason: '正確。「〜場合は」表示「在〜的情況下」，適合預設情境並請求對應行動。' },
      { text: 'から', reason: '錯誤。「から」表示原因「因為」，語意不符。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「場合は」用於規定與請求',
      analysis: '「〜場合{ばあい}は」可接動詞辭書形，表示預設某種情境並說明對應做法。常用於職場規定或指示。',
      relatedRules: ['📖 本課 文法「〜場合は」'],
    },
  },
  // Q13 vocabulary — 会議 vs 会場 vs 会議室
  {
    id: 'n4_u3_l4_q13',
    category: 'vocabulary',
    level: 'N4',
    stem: '「会議{かいぎ}」「会場{かいじょう}」「会議室{かいぎしつ}」の説明{せつめい}で正{ただ}しいのはどれですか。',
    stemZh: '關於「会議」「会場」「会議室」的說明，正確的是哪個？',
    options: [
      { text: '三者都指同一個場所', reason: '錯誤。会議是活動本身，会場和会議室是場所。' },
      { text: '会議是活動，会場是舉辦場所，会議室是專門開會的房間', reason: '正確。三者各有不同含義。' },
      { text: '会議室比会場大', reason: '錯誤。通常会場較大，可用於各種活動。' },
      { text: '会場是開會的房間', reason: '錯誤。会場指較大型活動的場地，開會房間是会議室。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「会」字頭詞彙的區別',
      analysis: '会議{かいぎ}＝會議（活動）；会場{かいじょう}＝會場（較大型的場地）；会議室{かいぎしつ}＝會議室（專門開會的房間）。',
      relatedRules: ['📖 本課 單字「会議」「会場」「会議室」'],
    },
  },
  // Q14 grammar — なら vs と vs 場合は 比較
  {
    id: 'n4_u3_l4_q14',
    category: 'grammar',
    level: 'N4',
    stem: '「なら」「と」「場合{ばあい}は」の使{つか}い分{わ}けで正{ただ}しいのはどれですか。',
    stemZh: '關於「なら」「と」「場合は」的區分，正確的是哪個？',
    options: [
      { text: '三者意思完全相同', reason: '錯誤。三者有不同的語感和用途。' },
      { text: '「と」用於建議，「なら」用於必然結果', reason: '錯誤。剛好相反：「と」用於必然結果，「なら」用於話題建議。' },
      { text: '「なら」基於話題提建議，「と」表示必然結果，「場合は」預設情境說明對應做法', reason: '正確。三者各有不同的功能。' },
      { text: '「場合は」只用於疑問句', reason: '錯誤。「場合は」可用於各種句型。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '三種條件句型的比較',
      analysis: '「なら」承接話題提建議；「と」描述自然規律或機械性因果；「場合は」預設某種情境並說明應對方式。三者功能各異。',
      relatedRules: ['📖 本課 文法「〜なら」「〜と」「〜場合は」'],
    },
  },
  // Q15 grammar — 綜合應用
  {
    id: 'n4_u3_l4_q15',
    category: 'grammar',
    level: 'N4',
    stem: '社長{しゃちょう}が出席{しゅっせき}する＿＿、席順{せきじゅん}を変{か}えなければなりません。',
    stemZh: '如果社長也出席的話，必須更改座位順序。',
    options: [
      { text: 'と', reason: '錯誤。「と」用於必然結果，此處是假設情境下需要做的事。' },
      { text: 'なら', reason: '錯誤。「なら」用於承接話題，此處是預設情境。' },
      { text: '場合{ばあい}は', reason: '正確。「場合は」表示「在〜的情況下」，適合預設可能的情境。' },
      { text: 'ので', reason: '錯誤。「ので」表示原因「因為」，語意不符。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「場合は」用於假設情境',
      analysis: '「〜場合{ばあい}は」可接動詞辭書形，表示預設某種可能的情境，並說明應對方式。此處預設社長出席的情境。',
      relatedRules: ['📖 本課 文法「〜場合は」'],
    },
  },
]

// ─── Lesson 5 Quiz ───
const l5Quiz: UnifiedQuestion[] = [
  // Q1 vocabulary — 経験
  {
    id: 'n4_u3_l5_q1',
    category: 'vocabulary',
    level: 'N4',
    stem: '「経験{けいけん}」の意味{いみ}はどれですか。',
    stemZh: '「経験」的意思是哪個？',
    options: [
      { text: '經驗', reason: '正確。経験{けいけん}意為經驗。' },
      { text: '經濟', reason: '錯誤。經濟是経済{けいざい}。' },
      { text: '技術', reason: '錯誤。技術是技術{ぎじゅつ}。' },
      { text: '計劃', reason: '錯誤。計劃是計画{けいかく}。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '経験的詞義',
      analysis: '経験{けいけん}意為經驗。注意和経済{けいざい}（經濟）的區別，兩者都以「経」開頭。',
      relatedRules: ['📖 本課 單字「経験」'],
    },
  },
  // Q2 vocabulary — 失敗
  {
    id: 'n4_u3_l5_q2',
    category: 'vocabulary',
    level: 'N4',
    stem: '「失敗{しっぱい}」の意味{いみ}はどれですか。',
    stemZh: '「失敗」的意思是哪個？',
    options: [
      { text: '準備', reason: '錯誤。準備是準備{じゅんび}。' },
      { text: '失敗', reason: '正確。失敗{しっぱい}意為失敗。' },
      { text: '說明', reason: '錯誤。說明是説明{せつめい}。' },
      { text: '成功', reason: '錯誤。成功是成功{せいこう}，是失敗的反義詞。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '失敗的詞義',
      analysis: '失敗{しっぱい}意為失敗。注意促音「っ」的發音。反義詞是成功{せいこう}。',
      relatedRules: ['📖 本課 單字「失敗」'],
    },
  },
  // Q3 vocabulary — 経済
  {
    id: 'n4_u3_l5_q3',
    category: 'vocabulary',
    level: 'N4',
    stem: '「経済{けいざい}」の読{よ}み方{かた}はどれですか。',
    stemZh: '「経済」的讀法是哪個？',
    options: [
      { text: 'けいけん', reason: '錯誤。けいけん是「経験」（經驗）的讀法。' },
      { text: 'けいかく', reason: '錯誤。けいかく是「計画」（計劃）的讀法。' },
      { text: 'けいざい', reason: '正確。経済讀作けいざい，意為經濟。' },
      { text: 'けいさい', reason: '錯誤。經濟的「済」讀「ざい」而非「さい」。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '経済的讀音',
      analysis: '経済{けいざい}意為經濟。注意「済」讀「ざい」。「経」開頭的常見詞：経験{けいけん}（經驗）、経済{けいざい}（經濟）。',
      relatedRules: ['📖 本課 單字「経済」'],
    },
  },
  // Q4 vocabulary — 工業
  {
    id: 'n4_u3_l5_q4',
    category: 'vocabulary',
    level: 'N4',
    stem: '「工業{こうぎょう}」の意味{いみ}はどれですか。',
    stemZh: '「工業」的意思是哪個？',
    options: [
      { text: '農業', reason: '錯誤。農業是農業{のうぎょう}。' },
      { text: '商業', reason: '錯誤。商業是商業{しょうぎょう}。' },
      { text: '漁業', reason: '錯誤。漁業是漁業{ぎょぎょう}。' },
      { text: '工業', reason: '正確。工業{こうぎょう}意為工業。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '工業的詞義',
      analysis: '工業{こうぎょう}意為工業。「工」指工作或製造，「業」指行業。注意與工場{こうじょう}（工廠）的區別。',
      relatedRules: ['📖 本課 單字「工業」'],
    },
  },
  // Q5 vocabulary — 産業
  {
    id: 'n4_u3_l5_q5',
    category: 'vocabulary',
    level: 'N4',
    stem: '「産業{さんぎょう}」の意味{いみ}はどれですか。',
    stemZh: '「産業」的意思是哪個？',
    options: [
      { text: '產業', reason: '正確。産業{さんぎょう}意為產業。' },
      { text: '產品', reason: '錯誤。產品是製品{せいひん}。' },
      { text: '出產', reason: '錯誤。出產是生産{せいさん}。' },
      { text: '工廠', reason: '錯誤。工廠是工場{こうじょう}。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '産業的詞義',
      analysis: '産業{さんぎょう}意為產業。包括農業、工業、商業等各種經濟活動的總稱。',
      relatedRules: ['📖 本課 單字「産業」'],
    },
  },
  // Q6 vocabulary — 貿易
  {
    id: 'n4_u3_l5_q6',
    category: 'vocabulary',
    level: 'N4',
    stem: '「貿易{ぼうえき}」の意味{いみ}はどれですか。',
    stemZh: '「貿易」的意思是哪個？',
    options: [
      { text: '產業', reason: '錯誤。產業是産業{さんぎょう}。' },
      { text: '貿易', reason: '正確。貿易{ぼうえき}意為貿易，指國際間的商業交易。' },
      { text: '工業', reason: '錯誤。工業是工業{こうぎょう}。' },
      { text: '經濟', reason: '錯誤。經濟是経済{けいざい}。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '貿易的詞義',
      analysis: '貿易{ぼうえき}意為貿易。「貿」有交換之意，「易」也有交易之意。指國與國之間的商業交易。',
      relatedRules: ['📖 本課 單字「貿易」'],
    },
  },
  // Q7 vocabulary — 技術 vs 計画
  {
    id: 'n4_u3_l5_q7',
    category: 'vocabulary',
    level: 'N4',
    stem: '「技術{ぎじゅつ}」と「計画{けいかく}」の意味{いみ}で正{ただ}しいのはどれですか。',
    stemZh: '「技術」和「計画」的意思正確的是哪個？',
    options: [
      { text: '技術＝計劃、計画＝技術', reason: '錯誤。兩者的意思剛好相反了。' },
      { text: '技術＝技術、計画＝計劃', reason: '正確。技術{ぎじゅつ}意為技術，計画{けいかく}意為計劃。' },
      { text: '兩者都是「經驗」的意思', reason: '錯誤。經驗是経験{けいけん}。' },
      { text: '兩者都是「經濟」的意思', reason: '錯誤。經濟是経済{けいざい}。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '技術與計画的詞義',
      analysis: '技術{ぎじゅつ}意為技術、技能。計画{けいかく}意為計劃、方案。兩者是完全不同的概念。',
      relatedRules: ['📖 本課 單字「技術」「計画」'],
    },
  },
  // Q8 grammar — かどうか（基本）
  {
    id: 'n4_u3_l5_q8',
    category: 'grammar',
    level: 'N4',
    stem: '彼{かれ}が来{く}る＿＿わかりません。',
    stemZh: '不知道他是否會來。',
    options: [
      { text: 'かどうか', reason: '正確。「かどうか」表示「是否〜」，用於間接疑問。' },
      { text: 'かな', reason: '錯誤。「かな」是自問「不知道〜」，不接「わかりません」。' },
      { text: 'かしら', reason: '錯誤。「かしら」是自問用語，不接「わかりません」。' },
      { text: 'かい', reason: '錯誤。「かい」是口語疑問句尾，不用於間接疑問。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「〜かどうか」的基本用法',
      analysis: '「〜かどうか」表示「是否〜」，用於將疑問句嵌入句子中作為間接疑問。常搭配「わかりません」「知りません」等。',
      relatedRules: ['📖 本課 文法「〜かどうか」'],
    },
  },
  // Q9 grammar — かどうか（確認用法）
  {
    id: 'n4_u3_l5_q9',
    category: 'grammar',
    level: 'N4',
    stem: '計画{けいかく}が正{ただ}しい＿＿確認{かくにん}してください。',
    stemZh: '請確認計劃是否正確。',
    options: [
      { text: 'か', reason: '錯誤。單用「か」語意不完整，需要「かどうか」。' },
      { text: 'かどうか', reason: '正確。「かどうか」表示「是否〜」，用於請求確認。' },
      { text: 'ので', reason: '錯誤。「ので」表示原因「因為」，語意不符。' },
      { text: 'から', reason: '錯誤。「から」表示原因「因為」，語意不符。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「〜かどうか」用於確認',
      analysis: '「〜かどうか」常與「確認する」「調べる」等動詞搭配，表示確認某事是否成立。',
      relatedRules: ['📖 本課 文法「〜かどうか」'],
    },
  },
  // Q10 grammar — か（不定用法）
  {
    id: 'n4_u3_l5_q10',
    category: 'grammar',
    level: 'N4',
    stem: 'どこ＿＿で会{あ}ったことがありますか。',
    stemZh: '是不是在哪裡見過？',
    options: [
      { text: 'も', reason: '錯誤。「どこも」表示「到處都」，語意不同。' },
      { text: 'でも', reason: '錯誤。「どこでも」表示「無論哪裡」，語意不同。' },
      { text: 'か', reason: '正確。「どこか」表示「某處」，用於不確定的場所。' },
      { text: 'かどうか', reason: '錯誤。「かどうか」表示「是否」，不接疑問詞。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「か」的不定用法',
      analysis: '疑問詞＋「か」表示不確定：どこか（某處）、だれか（某人）、なにか（某事）。這是「か」的不定用法。',
      relatedRules: ['📖 本課 文法「〜か（不定）」'],
    },
  },
  // Q11 grammar — か（不定）— 誰か
  {
    id: 'n4_u3_l5_q11',
    category: 'grammar',
    level: 'N4',
    stem: '誰{だれ}＿＿詳{くわ}しい人{ひと}に聞{き}きましょう。',
    stemZh: '找某位了解的人問問吧。',
    options: [
      { text: 'が', reason: '錯誤。「誰が」是「誰」的疑問用法，不適合此處。' },
      { text: 'も', reason: '錯誤。「誰も」表示「任何人都」，語意不同。' },
      { text: 'か', reason: '正確。「誰か」表示「某人」，用於不確定的人。' },
      { text: 'でも', reason: '錯誤。「誰でも」表示「無論誰」，語意不同。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「誰か」的用法',
      analysis: '「誰か」表示「某人」，是疑問詞＋「か」的不定用法。不指定特定的人，只表示「有某個人」。',
      relatedRules: ['📖 本課 文法「〜か（不定）」'],
    },
  },
  // Q12 grammar — かどうか（心配）
  {
    id: 'n4_u3_l5_q12',
    category: 'grammar',
    level: 'N4',
    stem: '貿易{ぼうえき}計画{けいかく}が成功{せいこう}する＿＿心配{しんぱい}です。',
    stemZh: '擔心貿易計劃是否會成功。',
    options: [
      { text: 'から', reason: '錯誤。「から」表示原因「因為」，語意不符。' },
      { text: 'ので', reason: '錯誤。「ので」表示原因「因為」，語意不符。' },
      { text: 'のに', reason: '錯誤。「のに」表示「儘管」，語意不符。' },
      { text: 'かどうか', reason: '正確。「かどうか」表示「是否〜」，搭配「心配」表示擔心某事是否會發生。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '「〜かどうか」搭配情緒表達',
      analysis: '「〜かどうか」可搭配「心配です」「不安です」等情緒表達，表示對某事是否成立感到擔心或不安。',
      relatedRules: ['📖 本課 文法「〜かどうか」'],
    },
  },
  // Q13 grammar — か（不定）— 何か
  {
    id: 'n4_u3_l5_q13',
    category: 'grammar',
    level: 'N4',
    stem: '何{なに}＿＿問題{もんだい}があったら、すぐ知{し}らせます。',
    stemZh: '如果有什麼問題，我會馬上通知。',
    options: [
      { text: 'か', reason: '正確。「何か」表示「某事、什麼」，用於不確定的事物。' },
      { text: 'も', reason: '錯誤。「何も」搭配否定表示「什麼都不」，此處是肯定句。' },
      { text: 'が', reason: '錯誤。「何が」是疑問用法「什麼」，不適合此處。' },
      { text: 'でも', reason: '錯誤。「何でも」表示「無論什麼」，語意不同。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「何か」的用法',
      analysis: '「何か」表示「某事、什麼」，是疑問詞＋「か」的不定用法。用於不確定具體是什麼的情況。',
      relatedRules: ['📖 本課 文法「〜か（不定）」'],
    },
  },
  // Q14 vocabulary — 経験 vs 経済 比較
  {
    id: 'n4_u3_l5_q14',
    category: 'vocabulary',
    level: 'N4',
    stem: '「経験{けいけん}」と「経済{けいざい}」の説明{せつめい}で正{ただ}しいのはどれですか。',
    stemZh: '關於「経験」和「経済」的說明，正確的是哪個？',
    options: [
      { text: '兩者都表示「經濟」', reason: '錯誤。只有経済才是經濟。' },
      { text: '経験是經驗、経済是經濟，兩者都以「経」開頭', reason: '正確。兩者字形相近但意思不同。' },
      { text: '兩者意思相同可互換', reason: '錯誤。兩者意思完全不同。' },
      { text: '経験是經濟、経済是經驗', reason: '錯誤。剛好相反。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '経験與経済的區別',
      analysis: '経験{けいけん}＝經驗；経済{けいざい}＝經濟。兩者都以「経」開頭，但後半部分不同，意思完全不同。',
      relatedRules: ['📖 本課 單字「経験」「経済」'],
    },
  },
  // Q15 grammar — かどうか vs か 比較
  {
    id: 'n4_u3_l5_q15',
    category: 'grammar',
    level: 'N4',
    stem: '「〜かどうか」と「疑問詞{ぎもんし}＋か」の使{つか}い分{わ}けで正{ただ}しいのはどれですか。',
    stemZh: '關於「〜かどうか」和「疑問詞＋か」的區分，正確的是哪個？',
    options: [
      { text: '兩者意思完全相同', reason: '錯誤。兩者用法和意思不同。' },
      { text: '「かどうか」用於是非判斷，「疑問詞＋か」用於不定表達', reason: '正確。「かどうか」問是否，「疑問詞＋か」表示某人/某處/某事。' },
      { text: '「疑問詞＋か」只能用在疑問句中', reason: '錯誤。「疑問詞＋か」可用於陳述句，如「どこかに行きたい」。' },
      { text: '「かどうか」只能接動詞', reason: '錯誤。「かどうか」也可接形容詞，如「正しいかどうか」。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「かどうか」與「疑問詞＋か」的區別',
      analysis: '「〜かどうか」用於判斷是否成立（是/否）；「疑問詞＋か」表示不確定的對象：どこか（某處）、誰か（某人）、何か（某事）。',
      relatedRules: ['📖 本課 文法「〜かどうか」「〜か（不定）」'],
    },
  },
]

// ─── Lesson 6 Quiz ───
const l6Quiz: UnifiedQuestion[] = [
  // Q1 vocabulary — 公務員
  {
    id: 'n4_u3_l6_q1',
    category: 'vocabulary',
    level: 'N4',
    stem: '「公務員{こうむいん}」の意味{いみ}はどれですか。',
    stemZh: '「公務員」的意思是哪個？',
    options: [
      { text: '工程師', reason: '錯誤。工程師是エンジニア。' },
      { text: '公務員', reason: '正確。公務員{こうむいん}意為公務員，在政府機關工作的人。' },
      { text: '報社記者', reason: '錯誤。報社記者是新聞記者{しんぶんきしゃ}。' },
      { text: '播音員', reason: '錯誤。播音員是アナウンサー。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '公務員的詞義',
      analysis: '公務員{こうむいん}意為公務員。「公務」指公家事務，「員」指成員。指在政府機關工作的人。',
      relatedRules: ['📖 本課 單字「公務員」'],
    },
  },
  // Q2 vocabulary — 新聞社
  {
    id: 'n4_u3_l6_q2',
    category: 'vocabulary',
    level: 'N4',
    stem: '「新聞社{しんぶんしゃ}」の意味{いみ}はどれですか。',
    stemZh: '「新聞社」的意思是哪個？',
    options: [
      { text: '電視台', reason: '錯誤。電視台是テレビ局{きょく}。' },
      { text: '出版社', reason: '錯誤。出版社是出版社{しゅっぱんしゃ}。' },
      { text: '報社', reason: '正確。新聞社{しんぶんしゃ}意為報社。日語的「新聞」指報紙。' },
      { text: '廣播電台', reason: '錯誤。廣播電台是ラジオ局{きょく}。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '新聞社的詞義',
      analysis: '新聞社{しんぶんしゃ}意為報社。注意日語的「新聞」指的是報紙，不是中文的「新聞」。中文的新聞在日語中是「ニュース」。',
      relatedRules: ['📖 本課 單字「新聞社」'],
    },
  },
  // Q3 vocabulary — 研究室
  {
    id: 'n4_u3_l6_q3',
    category: 'vocabulary',
    level: 'N4',
    stem: '「研究室{けんきゅうしつ}」の読{よ}み方{かた}はどれですか。',
    stemZh: '「研究室」的讀法是哪個？',
    options: [
      { text: 'けんきゅうしつ', reason: '正確。研究室讀作けんきゅうしつ，意為研究室。' },
      { text: 'けんきゅうへや', reason: '錯誤。「室」在此讀「しつ」而非「へや」。' },
      { text: 'けんきゅうま', reason: '錯誤。「室」讀「しつ」而非「ま」。' },
      { text: 'けんきょうしつ', reason: '錯誤。「究」讀「きゅう」不讀「きょう」。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '研究室的讀音',
      analysis: '研究室{けんきゅうしつ}意為研究室。由「研究」＋「室」組成。大學中教授的辦公室稱為研究室。',
      relatedRules: ['📖 本課 單字「研究室」'],
    },
  },
  // Q4 vocabulary — 説明
  {
    id: 'n4_u3_l6_q4',
    category: 'vocabulary',
    level: 'N4',
    stem: '「説明{せつめい}」の意味{いみ}はどれですか。',
    stemZh: '「説明」的意思是哪個？',
    options: [
      { text: '說明', reason: '正確。説明{せつめい}意為說明、解釋。' },
      { text: '準備', reason: '錯誤。準備是準備{じゅんび}。' },
      { text: '發明', reason: '錯誤。發明是発明{はつめい}。' },
      { text: '證明', reason: '錯誤。證明是証明{しょうめい}。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '説明的詞義',
      analysis: '説明{せつめい}意為說明、解釋。「説」有解說之意，「明」有清楚之意。注意與発明{はつめい}（發明）、証明{しょうめい}（證明）的區別。',
      relatedRules: ['📖 本課 單字「説明」'],
    },
  },
  // Q5 vocabulary — アルバイト vs パート
  {
    id: 'n4_u3_l6_q5',
    category: 'vocabulary',
    level: 'N4',
    stem: '「アルバイト」と「パート」の説明{せつめい}で正{ただ}しいのはどれですか。',
    stemZh: '關於「アルバイト」和「パート」的說明，正確的是哪個？',
    options: [
      { text: '都是全職工作', reason: '錯誤。全職工作是正社員{せいしゃいん}。' },
      { text: 'アルバイト是全職，パート是兼職', reason: '錯誤。兩者都是兼職工作。' },
      { text: '都是兼職，アルバイト多用於學生，パート多用於主婦', reason: '正確。兩者都指兼職但使用場合不同。' },
      { text: '兩者是完全不同種類的工作', reason: '錯誤。兩者本質上都是兼職工作。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: 'アルバイト與パート的區別',
      analysis: 'アルバイト（源自德語Arbeit）和パート（源自英語part-time）都指兼職工作。一般而言アルバイト多用於學生打工，パート多用於主婦兼職。',
      relatedRules: ['📖 本課 單字「アルバイト」「パート」'],
    },
  },
  // Q6 vocabulary — アナウンサー
  {
    id: 'n4_u3_l6_q6',
    category: 'vocabulary',
    level: 'N4',
    stem: '「アナウンサー」の意味{いみ}はどれですか。',
    stemZh: '「アナウンサー」的意思是哪個？',
    options: [
      { text: '公務員', reason: '錯誤。公務員是公務員{こうむいん}。' },
      { text: '記者', reason: '錯誤。記者是記者{きしゃ}。' },
      { text: '作家', reason: '錯誤。作家是作家{さっか}。' },
      { text: '播音員', reason: '正確。アナウンサー意為播音員，源自英語announcer。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: 'アナウンサー的詞義',
      analysis: 'アナウンサー意為播音員。源自英語announcer。指在電視台或廣播電台播報新聞的人。',
      relatedRules: ['📖 本課 單字「アナウンサー」'],
    },
  },
  // Q7 vocabulary — 準備
  {
    id: 'n4_u3_l6_q7',
    category: 'vocabulary',
    level: 'N4',
    stem: '「準備{じゅんび}」の読{よ}み方{かた}はどれですか。',
    stemZh: '「準備」的讀法是哪個？',
    options: [
      { text: 'じゅんび', reason: '正確。準備讀作じゅんび，意為準備。' },
      { text: 'じゅんぴ', reason: '錯誤。「備」讀「び」（濁音）而非「ぴ」。' },
      { text: 'しゅんび', reason: '錯誤。「準」讀「じゅん」不讀「しゅん」。' },
      { text: 'じゅうび', reason: '錯誤。「準」讀「じゅん」不讀「じゅう」。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '準備的讀音',
      analysis: '準備{じゅんび}意為準備。注意「備」讀濁音「び」。「準備する」是常用的動詞形式。',
      relatedRules: ['📖 本課 單字「準備」'],
    },
  },
  // Q8 grammar — かな（自問）
  {
    id: 'n4_u3_l6_q8',
    category: 'grammar',
    level: 'N4',
    stem: '卒業{そつぎょう}したら、どんな仕事{しごと}をしよう＿＿。',
    stemZh: '畢業之後，要做什麼工作好呢。',
    options: [
      { text: 'かしら', reason: '錯誤。「かしら」主要是女性用語。此句為自問，用「かな」更通用。' },
      { text: 'かい', reason: '錯誤。「かい」用於向別人提問，不是自問。' },
      { text: 'かな', reason: '正確。「かな」用於自言自語，表示「不知道〜」「〜呢」。' },
      { text: 'かどうか', reason: '錯誤。「かどうか」用於間接疑問「是否」，不用於句尾自問。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「〜かな」的自問用法',
      analysis: '「〜かな」接在句尾，表示自問「不知道〜」「〜好呢」。男女都可使用，常用於自言自語或輕鬆思考。',
      relatedRules: ['📖 本課 文法「〜かな」'],
    },
  },
  // Q9 grammar — かしら（女性自問）
  {
    id: 'n4_u3_l6_q9',
    category: 'grammar',
    level: 'N4',
    stem: '電車{でんしゃ}は間{ま}に合{あ}う＿＿。（女性用語）',
    stemZh: '不知道趕不趕得上電車。（女性用語）',
    options: [
      { text: 'かな', reason: '錯誤。「かな」雖也可使用，但題目要求女性用語。' },
      { text: 'かしら', reason: '正確。「かしら」是女性用的自問句尾詞，表示「不知道〜」。' },
      { text: 'かい', reason: '錯誤。「かい」是男性口語疑問，不是自問。' },
      { text: 'ですか', reason: '錯誤。「ですか」是向對方提問，不是自問。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「〜かしら」的女性用語',
      analysis: '「〜かしら」是女性常用的自問句尾詞，表示「不知道〜」「〜呢」。功能類似「かな」，但帶有女性語氣。',
      relatedRules: ['📖 本課 文法「〜かしら」'],
    },
  },
  // Q10 grammar — かい（口語疑問）
  {
    id: 'n4_u3_l6_q10',
    category: 'grammar',
    level: 'N4',
    stem: '元気{げんき}＿＿？（親密的口語）',
    stemZh: '你好嗎？（親密的口語）',
    options: [
      { text: 'ですか', reason: '錯誤。「ですか」是禮貌語，不是親密口語。' },
      { text: 'かな', reason: '錯誤。「かな」是自問，不是向對方提問。' },
      { text: 'かしら', reason: '錯誤。「かしら」是女性自問用語。' },
      { text: 'かい', reason: '正確。「かい」是男性口語疑問句尾，用於親密關係。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '「〜かい」的口語疑問',
      analysis: '「〜かい」是男性口語的疑問句尾詞，用於向關係親密的人提問。語氣比「ですか」親近，比「か」柔和。',
      relatedRules: ['📖 本課 文法「〜かい」'],
    },
  },
  // Q11 grammar — かな vs かしら 比較
  {
    id: 'n4_u3_l6_q11',
    category: 'grammar',
    level: 'N4',
    stem: '「〜かな」と「〜かしら」の説明{せつめい}で正{ただ}しいのはどれですか。',
    stemZh: '關於「〜かな」和「〜かしら」的說明，正確的是哪個？',
    options: [
      { text: '「かな」是女性用語，「かしら」是男性用語', reason: '錯誤。剛好相反：「かな」男女通用，「かしら」主要是女性用語。' },
      { text: '兩者都是向對方提問的句型', reason: '錯誤。兩者都是自問句型，不是向對方提問。' },
      { text: '「かな」男女通用，「かしら」主要是女性用語，兩者都用於自問', reason: '正確。兩者都表示「不知道〜」，但使用者不同。' },
      { text: '兩者只能用在疑問句中', reason: '錯誤。兩者是自問語氣，不是正式的疑問句。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「かな」與「かしら」的比較',
      analysis: '「かな」男女通用，「かしら」主要是女性用語。兩者都用於自言自語式的自問，表示「不知道〜」「〜好呢」。',
      relatedRules: ['📖 本課 文法「〜かな」「〜かしら」'],
    },
  },
  // Q12 grammar — かい（應用）
  {
    id: 'n4_u3_l6_q12',
    category: 'grammar',
    level: 'N4',
    stem: '面接{めんせつ}の練習{れんしゅう}は始{はじ}めた＿＿？（男性口語）',
    stemZh: '面試的練習開始了嗎？（男性口語）',
    options: [
      { text: 'かしら', reason: '錯誤。「かしら」是女性自問用語，不適合向人提問且不是男性用語。' },
      { text: 'かな', reason: '錯誤。「かな」是自問，不是向對方提問。' },
      { text: 'かい', reason: '正確。「かい」是男性口語疑問，用於向親密的人提問。' },
      { text: 'かどうか', reason: '錯誤。「かどうか」用於間接疑問，不用於句尾直接提問。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「かい」向對方提問',
      analysis: '「かい」用於男性口語中向關係親密的人提問。接在動詞た形後「〜たかい」表示「〜了嗎」。',
      relatedRules: ['📖 本課 文法「〜かい」'],
    },
  },
  // Q13 grammar — かな（應用）
  {
    id: 'n4_u3_l6_q13',
    category: 'grammar',
    level: 'N4',
    stem: '新聞社{しんぶんしゃ}で働{はたら}くのも面白{おもしろ}い＿＿。',
    stemZh: '在報社工作也滿有趣的嗎。',
    options: [
      { text: 'ですか', reason: '錯誤。「ですか」是向對方提問，此處是自問思考。' },
      { text: 'かい', reason: '錯誤。「かい」是向對方提問，不是自問。' },
      { text: 'かしら', reason: '錯誤。雖是自問，但「かしら」是女性用語。此處語境為通用。' },
      { text: 'かな', reason: '正確。「かな」用於自言自語，思考某事是否如此。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '「かな」用於思考',
      analysis: '「かな」接在形容詞後，表示在自問思考某件事。「面白いかな」意為「不知道有不有趣呢」。',
      relatedRules: ['📖 本課 文法「〜かな」'],
    },
  },
  // Q14 vocabulary — 説明 vs 準備 比較
  {
    id: 'n4_u3_l6_q14',
    category: 'vocabulary',
    level: 'N4',
    stem: '「説明{せつめい}」と「準備{じゅんび}」を使{つか}った文{ぶん}で正{ただ}しいのはどれですか。',
    stemZh: '使用「説明」和「準備」的句子中正確的是哪個？',
    options: [
      { text: '面接の準備をする＝準備面試', reason: '正確。「準備をする」是常用搭配，意為做準備。' },
      { text: '準備を説明する＝準備說明', reason: '錯誤。「説明を準備する」（準備說明稿）才自然，語序不對。' },
      { text: '説明を準備をする＝準備說明', reason: '錯誤。「を」重複了，日語中一個動詞只能接一個「を」。' },
      { text: '説明が準備する＝說明要準備', reason: '錯誤。「準備する」的主語應是人，不是「説明」。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「説明」「準備」的搭配用法',
      analysis: '「準備をする」（做準備）和「説明をする」（做說明）是常用搭配。「面接の準備をする」意為準備面試。',
      relatedRules: ['📖 本課 單字「説明」「準備」'],
    },
  },
  // Q15 grammar — かな・かしら・かい 三者比較
  {
    id: 'n4_u3_l6_q15',
    category: 'grammar',
    level: 'N4',
    stem: '「〜かな」「〜かしら」「〜かい」の使{つか}い分{わ}けで正{ただ}しいのはどれですか。',
    stemZh: '關於「〜かな」「〜かしら」「〜かい」的區分，正確的是哪個？',
    options: [
      { text: '三者都是向對方提問的句型', reason: '錯誤。「かな」和「かしら」是自問，只有「かい」是向人提問。' },
      { text: '三者都是自問的句型', reason: '錯誤。「かい」是向別人提問，不是自問。' },
      { text: '「かな」「かしら」是自問，「かい」是向人提問；「かしら」是女性用語，「かい」是男性口語', reason: '正確。三者各有不同的功能和使用者。' },
      { text: '三者意思完全相同，可以互換', reason: '錯誤。三者的功能和使用場合不同。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '三種句尾詞的比較',
      analysis: '「かな」男女通用的自問；「かしら」女性用的自問；「かい」男性口語向親密的人提問。三者功能各異，不可互換。',
      relatedRules: ['📖 本課 文法「〜かな」「〜かしら」「〜かい」'],
    },
  },
]

export const u3Lessons: LessonDefinition[] = [
  // ─── Lesson 1: 學校入門 ───
  {
    id: 'n4_u3_l1',
    unitId: 'n4_u3',
    order: 1,
    titleJp: '学校入門{がっこうにゅうもん}',
    titleZh: '學校入門',
    objectives: [
      '學會條件句型「たら」「ば」',
      '掌握基本學校類型詞彙',
      '能用條件句描述學校情境',
    ],
    vocabulary: [
      { word: '大学生', reading: 'だいがくせい', meaning: '大學生', meaning_zh: '大學生' },
      { word: '中学校', reading: 'ちゅうがっこう', meaning: '中學', meaning_zh: '中學' },
      { word: '小学校', reading: 'しょうがっこう', meaning: '小學', meaning_zh: '小學' },
      { word: '高校', reading: 'こうこう', meaning: '高中', meaning_zh: '高中' },
      { word: '高校生', reading: 'こうこうせい', meaning: '高中生', meaning_zh: '高中生' },
      { word: '高等学校', reading: 'こうとうがっこう', meaning: '高等學校', meaning_zh: '高等學校' },
      { word: '教育', reading: 'きょういく', meaning: '教育', meaning_zh: '教育' },
      { word: '入学', reading: 'にゅうがく', meaning: '入學', meaning_zh: '入學' },
    ],
    grammarIds: ['n4_tara', 'n4_ba', 'n4_ba_ii'],
    grammarSummaries: [
      {
        grammarId: 'n4_tara',
        pattern: '〜たら',
        meaning: '如果〜的話（條件）',
        quickExample: '雨{あめ}が降{ふ}ったら、家{いえ}にいます。',
        quickExampleZh: '如果下雨的話，我待在家裡。',
      },
      {
        grammarId: 'n4_ba',
        pattern: '〜ば',
        meaning: '如果〜的話（假定形）',
        quickExample: '安{やす}ければ買{か}います。',
        quickExampleZh: '如果便宜的話就買。',
      },
      {
        grammarId: 'n4_ba_ii',
        pattern: '〜ばいい',
        meaning: '〜就好了；只要〜就行',
        quickExample: '駅{えき}で降{お}りればいいですよ。',
        quickExampleZh: '在車站下車就好了。',
      },
    ],
    dialogue: [
      { speaker: '山田{やまだ}', japanese: '田中{たなか}さんは高校生{こうこうせい}ですか、大学生{だいがくせい}ですか。', chinese: '田中同學是高中生還是大學生？' },
      { speaker: '田中{たなか}', japanese: '来年{らいねん}から大学生{だいがくせい}になります。今{いま}は高校{こうこう}三年生{さんねんせい}です。', chinese: '明年開始就是大學生了。現在是高中三年級。' },
      { speaker: '山田{やまだ}', japanese: 'もし入学{にゅうがく}できたら、何{なに}を勉強{べんきょう}したいですか。', chinese: '如果能入學的話，你想學什麼？' },
      { speaker: '田中{たなか}', japanese: '教育{きょういく}に興味{きょうみ}があります。小学校{しょうがっこう}の先生{せんせい}になりたいです。', chinese: '我對教育有興趣。想當小學老師。' },
      { speaker: '山田{やまだ}', japanese: '教育{きょういく}を勉強{べんきょう}すればいいですね。', chinese: '那學教育就好了呢。' },
      { speaker: '田中{たなか}', japanese: 'でも中学校{ちゅうがっこう}の先生{せんせい}もいいかなと思{おも}っています。', chinese: '但我也在想當中學老師也不錯。' },
      { speaker: '佐藤{さとう}', japanese: '私{わたし}は高等学校{こうとうがっこう}で教{おし}えたいです。数学{すうがく}が好{す}きなので。', chinese: '我想在高等學校教書。因為我喜歡數學。' },
      { speaker: '山田{やまだ}', japanese: '数学{すうがく}の先生{せんせい}になれたらいいですね。', chinese: '能當數學老師就好了呢。' },
      { speaker: '田中{たなか}', japanese: 'はい。頑張{がんば}れば、きっとなれますよ。', chinese: '是的。只要努力，一定可以的。' },
      { speaker: '佐藤{さとう}', japanese: 'そうですね。まずは入学{にゅうがく}試験{しけん}に受{う}かればいいんですけどね。', chinese: '是啊。首先只要通過入學考試就好了。' },
    ],
    quizQuestions: l1Quiz,
  },

  // ─── Lesson 2: 學科與課堂 ───
  {
    id: 'n4_u3_l2',
    unitId: 'n4_u3',
    order: 2,
    titleJp: '学科{がっか}と授業{じゅぎょう}',
    titleZh: '學科與課堂',
    objectives: [
      '學會「〜ば〜ほど」（越〜越〜）句型',
      '學會「〜たらいい」（〜就好了）句型',
      '掌握學科名稱與課堂相關詞彙',
    ],
    vocabulary: [
      { word: '講義', reading: 'こうぎ', meaning: '講義', meaning_zh: '講義' },
      { word: '講堂', reading: 'こうどう', meaning: '講堂', meaning_zh: '講堂' },
      { word: '数学', reading: 'すうがく', meaning: '數學', meaning_zh: '數學' },
      { word: '地理', reading: 'ちり', meaning: '地理', meaning_zh: '地理' },
      { word: '科学', reading: 'かがく', meaning: '科學', meaning_zh: '科學' },
      { word: '文学', reading: 'ぶんがく', meaning: '文學', meaning_zh: '文學' },
      { word: '文法', reading: 'ぶんぽう', meaning: '語法', meaning_zh: '語法' },
      { word: '文化', reading: 'ぶんか', meaning: '文化', meaning_zh: '文化' },
    ],
    grammarIds: ['n4_ba_hodo', 'n4_tara_ii', 'n4_moshi'],
    grammarSummaries: [
      {
        grammarId: 'n4_ba_hodo',
        pattern: '〜ば〜ほど',
        meaning: '越〜越〜',
        quickExample: '練習{れんしゅう}すればするほど上手{じょうず}になります。',
        quickExampleZh: '越練習就越進步。',
      },
      {
        grammarId: 'n4_tara_ii',
        pattern: '〜たらいい',
        meaning: '〜就好了',
        quickExample: '早{はや}く春{はる}になったらいいのに。',
        quickExampleZh: '要是早點變成春天就好了。',
      },
      {
        grammarId: 'n4_moshi',
        pattern: 'もし',
        meaning: '如果；假如',
        quickExample: 'もし時間{じかん}があれば、手伝{てつだ}ってください。',
        quickExampleZh: '如果有時間的話，請幫幫忙。',
      },
    ],
    dialogue: [
      { speaker: '佐藤{さとう}', japanese: '今日{きょう}の講義{こうぎ}は何{なに}ですか。', chinese: '今天的講義是什麼？' },
      { speaker: '山田{やまだ}', japanese: '午前{ごぜん}は数学{すうがく}で、午後{ごご}は文学{ぶんがく}です。', chinese: '上午是數學，下午是文學。' },
      { speaker: '佐藤{さとう}', japanese: '数学{すうがく}は勉強{べんきょう}すればするほど面白{おもしろ}くなりますね。', chinese: '數學越學越有趣呢。' },
      { speaker: '田中{たなか}', japanese: '私{わたし}は地理{ちり}と科学{かがく}のほうが好{す}きです。もし選{えら}べたらいいんですけど。', chinese: '我比較喜歡地理和科學。要是能選擇就好了。' },
      { speaker: '山田{やまだ}', japanese: '文法{ぶんぽう}の授業{じゅぎょう}も面白{おもしろ}いですよ。日本語{にほんご}の文法{ぶんぽう}は奥{おく}が深{ふか}いです。', chinese: '語法的課也很有趣喔。日語的語法很深奧。' },
      { speaker: '佐藤{さとう}', japanese: '来週{らいしゅう}は講堂{こうどう}で文化{ぶんか}祭{さい}の準備{じゅんび}がありますよ。', chinese: '下週在講堂有文化祭的準備喔。' },
      { speaker: '田中{たなか}', japanese: '文化{ぶんか}祭{さい}が楽{たの}しかったらいいですね。', chinese: '文化祭如果很開心就好了呢。' },
      { speaker: '山田{やまだ}', japanese: 'もし皆{みんな}で協力{きょうりょく}すれば、きっと成功{せいこう}しますよ。', chinese: '如果大家合作的話，一定會成功的。' },
      { speaker: '佐藤{さとう}', japanese: '読{よ}めば読{よ}むほど文学{ぶんがく}の魅力{みりょく}が分{わ}かります。', chinese: '越讀越能了解文學的魅力。' },
      { speaker: '田中{たなか}', japanese: 'そうですね。もっと勉強{べんきょう}したらいいのにと思{おも}います。', chinese: '是啊。我覺得要是能多學點就好了。' },
    ],
    quizQuestions: l2Quiz,
  },

  // ─── Lesson 3: 考試與學習 ───
  {
    id: 'n4_u3_l3',
    unitId: 'n4_u3',
    order: 3,
    titleJp: '試験{しけん}と学習{がくしゅう}',
    titleZh: '考試與學習',
    objectives: [
      '學會「〜たらどう」（何不〜）建議句型',
      '學會「〜たらいいですか」（該怎麼做〜）',
      '掌握考試與學習相關詞彙',
    ],
    vocabulary: [
      { word: '試験', reading: 'しけん', meaning: '考試', meaning_zh: '考試' },
      { word: '予習', reading: 'よしゅう', meaning: '預習', meaning_zh: '預習' },
      { word: '復習', reading: 'ふくしゅう', meaning: '復習', meaning_zh: '復習' },
      { word: 'テキスト', reading: 'てきすと', meaning: '課本', meaning_zh: '課本' },
      { word: 'レポート', reading: 'れぽーと', meaning: '報告', meaning_zh: '報告' },
      { word: '卒業', reading: 'そつぎょう', meaning: '畢業', meaning_zh: '畢業' },
      { word: '校長', reading: 'こうちょう', meaning: '校長', meaning_zh: '校長' },
      { word: '研究', reading: 'けんきゅう', meaning: '研究', meaning_zh: '研究' },
    ],
    grammarIds: ['n4_tara_dou', 'n4_tara_ii_desu_ka', 'n4_to_conditional'],
    grammarSummaries: [
      {
        grammarId: 'n4_tara_dou',
        pattern: '〜たらどう',
        meaning: '何不〜？（建議）',
        quickExample: '医者{いしゃ}に行{い}ったらどうですか。',
        quickExampleZh: '去看醫生如何？',
      },
      {
        grammarId: 'n4_tara_ii_desu_ka',
        pattern: '〜たらいいですか',
        meaning: '該怎麼做〜？',
        quickExample: 'どうしたらいいですか。',
        quickExampleZh: '該怎麼辦才好？',
      },
      {
        grammarId: 'n4_to_conditional',
        pattern: '〜と（條件）',
        meaning: '一〜就〜（自然結果）',
        quickExample: 'このボタンを押{お}すと、ドアが開{あ}きます。',
        quickExampleZh: '按下這個按鈕的話，門就會開。',
      },
    ],
    dialogue: [
      { speaker: '田中{たなか}', japanese: '来週{らいしゅう}の試験{しけん}、どうしたらいいですか。全然{ぜんぜん}分{わ}からないんです。', chinese: '下週的考試，該怎麼辦才好？我完全不懂。' },
      { speaker: '山田{やまだ}', japanese: 'まず予習{よしゅう}をしたらどうですか。テキストを読{よ}むといいですよ。', chinese: '先預習如何？讀課本就好了。' },
      { speaker: '田中{たなか}', japanese: 'レポートも書{か}かなければいけないんです。時間{じかん}が足{た}りません。', chinese: '報告也必須寫。時間不夠。' },
      { speaker: '佐藤{さとう}', japanese: '復習{ふくしゅう}も大切{たいせつ}ですよ。テキストを開{ひら}くと、重要{じゅうよう}なところがすぐ分{わ}かります。', chinese: '復習也很重要喔。一打開課本，就能馬上看到重要的地方。' },
      { speaker: '山田{やまだ}', japanese: '校長{こうちょう}先生{せんせい}も「研究{けんきゅう}を続{つづ}けなさい」と言{い}っていましたよ。', chinese: '校長也說了「要繼續研究」。' },
      { speaker: '田中{たなか}', japanese: '卒業{そつぎょう}までにどんな研究{けんきゅう}をしたらいいですか。', chinese: '到畢業為止，做什麼研究比較好？' },
      { speaker: '佐藤{さとう}', japanese: '先輩{せんぱい}に聞{き}いたらどうですか。アドバイスをもらえると思{おも}います。', chinese: '問學長如何？我覺得可以得到建議。' },
      { speaker: '山田{やまだ}', japanese: 'このボタンを押{お}すと、図書館{としょかん}の資料{しりょう}が検索{けんさく}できますよ。', chinese: '按下這個按鈕，就能搜尋圖書館的資料喔。' },
      { speaker: '田中{たなか}', japanese: 'ありがとうございます。レポートの書{か}き方{かた}を教{おし}えてもらったらどうですか。', chinese: '謝謝。請人教報告的寫法如何？' },
      { speaker: '佐藤{さとう}', japanese: 'いいアイデアですね。一緒{いっしょ}に卒業{そつぎょう}まで頑張{がんば}りましょう！', chinese: '好主意呢。一起努力到畢業吧！' },
    ],
    quizQuestions: l3Quiz,
  },

  // ─── Lesson 4: 職場基礎 ───
  {
    id: 'n4_u3_l4',
    unitId: 'n4_u3',
    order: 4,
    titleJp: '職場{しょくば}の基礎{きそ}',
    titleZh: '職場基礎',
    objectives: [
      '學會條件句型「なら」「と」',
      '學會「〜場合は」（〜的情況下）',
      '掌握職場基本詞彙',
    ],
    vocabulary: [
      { word: '部長', reading: 'ぶちょう', meaning: '部長', meaning_zh: '部長' },
      { word: '課長', reading: 'かちょう', meaning: '課長', meaning_zh: '課長' },
      { word: '社長', reading: 'しゃちょう', meaning: '社長', meaning_zh: '社長' },
      { word: '会議', reading: 'かいぎ', meaning: '會議', meaning_zh: '會議' },
      { word: '会議室', reading: 'かいぎしつ', meaning: '會議室', meaning_zh: '會議室' },
      { word: '会場', reading: 'かいじょう', meaning: '會場', meaning_zh: '會場' },
      { word: '事務所', reading: 'じむしょ', meaning: '辦事處', meaning_zh: '辦事處' },
      { word: '工場', reading: 'こうじょう', meaning: '工廠', meaning_zh: '工廠' },
    ],
    grammarIds: ['n4_nara', 'n4_to', 'n4_baai_wa'],
    grammarSummaries: [
      {
        grammarId: 'n4_nara',
        pattern: '〜なら',
        meaning: '如果〜的話（基於話題）',
        quickExample: '日本{にほん}に行{い}くなら、京都{きょうと}がいいですよ。',
        quickExampleZh: '如果要去日本的話，京都不錯喔。',
      },
      {
        grammarId: 'n4_to',
        pattern: '〜と（条件）',
        meaning: '一〜就〜',
        quickExample: '春{はる}になると、桜{さくら}が咲{さ}きます。',
        quickExampleZh: '一到春天，櫻花就會開。',
      },
      {
        grammarId: 'n4_baai_wa',
        pattern: '〜場合{ばあい}は',
        meaning: '〜的情況下；萬一',
        quickExample: '地震{じしん}の場合{ばあい}は、机{つくえ}の下{した}に隠{かく}れてください。',
        quickExampleZh: '萬一發生地震，請躲到桌子底下。',
      },
    ],
    dialogue: [
      { speaker: '鈴木{すずき}', japanese: '佐藤{さとう}課長{かちょう}、午後{ごご}の会議{かいぎ}の準備{じゅんび}はできていますか。', chinese: '佐藤課長，下午的會議準備好了嗎？' },
      { speaker: '佐藤{さとう}', japanese: '会議室{かいぎしつ}の資料{しりょう}なら、もう用意{ようい}しましたよ。', chinese: '如果是會議室的資料，已經準備好了喔。' },
      { speaker: '鈴木{すずき}', japanese: '会場{かいじょう}も確認{かくにん}しましたか。部長{ぶちょう}が来{く}ると、すぐ始{はじ}まりますよ。', chinese: '會場也確認了嗎？部長一來就會馬上開始喔。' },
      { speaker: '佐藤{さとう}', japanese: 'はい、大丈夫{だいじょうぶ}です。社長{しゃちょう}も出席{しゅっせき}する場合{ばあい}は、席順{せきじゅん}を変{か}えなければなりません。', chinese: '好的，沒問題。如果社長也出席的話，必須更改座位順序。' },
      { speaker: '田中{たなか}', japanese: '事務所{じむしょ}から連絡{れんらく}がありました。工場{こうじょう}のデータも必要{ひつよう}だそうです。', chinese: '辦事處來了聯絡。據說也需要工廠的數據。' },
      { speaker: '鈴木{すずき}', japanese: '工場{こうじょう}のデータなら、田中{たなか}さんに頼{たの}んでもいいですか。', chinese: '如果是工廠的數據，可以拜託田中嗎？' },
      { speaker: '田中{たなか}', japanese: 'はい。このパソコンのボタンを押{お}すと、データが出{で}てきますから。', chinese: '好的。按下這台電腦的按鈕，數據就會出來了。' },
      { speaker: '佐藤{さとう}', japanese: '遅{おく}れる場合{ばあい}は、事前{じぜん}に連絡{れんらく}してくださいね。', chinese: '如果會遲到的話，請事先聯繫喔。' },
      { speaker: '鈴木{すずき}', japanese: '分{わ}かりました。会議{かいぎ}がうまくいくといいですね。', chinese: '我知道了。希望會議能順利進行。' },
      { speaker: '佐藤{さとう}', japanese: 'ええ。しっかり準備{じゅんび}すれば、問題{もんだい}ないと思{おも}いますよ。', chinese: '嗯。好好準備的話，應該沒問題的。' },
    ],
    quizQuestions: l4Quiz,
  },

  // ─── Lesson 5: 商業與經濟 ───
  {
    id: 'n4_u3_l5',
    unitId: 'n4_u3',
    order: 5,
    titleJp: '商業{しょうぎょう}と経済{けいざい}',
    titleZh: '商業與經濟',
    objectives: [
      '學會「〜かどうか」（是否〜）句型',
      '學會「〜か」不定用法',
      '掌握商業與經濟相關詞彙',
    ],
    vocabulary: [
      { word: '工業', reading: 'こうぎょう', meaning: '工業', meaning_zh: '工業' },
      { word: '産業', reading: 'さんぎょう', meaning: '產業', meaning_zh: '產業' },
      { word: '貿易', reading: 'ぼうえき', meaning: '貿易', meaning_zh: '貿易' },
      { word: '経験', reading: 'けいけん', meaning: '經驗', meaning_zh: '經驗' },
      { word: '経済', reading: 'けいざい', meaning: '經濟', meaning_zh: '經濟' },
      { word: '技術', reading: 'ぎじゅつ', meaning: '技術', meaning_zh: '技術' },
      { word: '計画', reading: 'けいかく', meaning: '計劃', meaning_zh: '計劃' },
      { word: '失敗', reading: 'しっぱい', meaning: '失敗', meaning_zh: '失敗' },
    ],
    grammarIds: ['n4_ka_dou_ka', 'n4_ka_dou_ka_full', 'n4_ka_particle'],
    grammarSummaries: [
      {
        grammarId: 'n4_ka_dou_ka',
        pattern: '〜かどうか',
        meaning: '是否〜',
        quickExample: '彼{かれ}が来{く}るかどうかわかりません。',
        quickExampleZh: '不知道他是否會來。',
      },
      {
        grammarId: 'n4_ka_dou_ka_full',
        pattern: '〜かどうか（完整用法）',
        meaning: '是否〜（用於間接疑問）',
        quickExample: '正{ただ}しいかどうか確認{かくにん}してください。',
        quickExampleZh: '請確認是否正確。',
      },
      {
        grammarId: 'n4_ka_particle',
        pattern: '〜か（不定）',
        meaning: '某〜；什麼〜',
        quickExample: 'どこかで会{あ}ったことがありますか。',
        quickExampleZh: '是不是在哪裡見過？',
      },
    ],
    dialogue: [
      { speaker: '鈴木{すずき}', japanese: '今度{こんど}の貿易{ぼうえき}計画{けいかく}が成功{せいこう}するかどうか心配{しんぱい}です。', chinese: '我擔心這次的貿易計劃是否會成功。' },
      { speaker: '佐藤{さとう}', japanese: '経済{けいざい}の状況{じょうきょう}が良{よ}いかどうか、まず調{しら}べましょう。', chinese: '經濟狀況是否良好，先調查看看吧。' },
      { speaker: '鈴木{すずき}', japanese: '産業{さんぎょう}の技術{ぎじゅつ}レベルは十分{じゅうぶん}かどうか確認{かくにん}しましたか。', chinese: '產業的技術水平是否足夠，確認了嗎？' },
      { speaker: '佐藤{さとう}', japanese: '工業{こうぎょう}の分野{ぶんや}では、どこかの会社{かいしゃ}が新{あたら}しい技術{ぎじゅつ}を開発{かいはつ}したそうです。', chinese: '在工業領域，據說有哪家公司開發了新技術。' },
      { speaker: '田中{たなか}', japanese: '私{わたし}には経験{けいけん}がありません。失敗{しっぱい}しないかどうか不安{ふあん}です。', chinese: '我沒有經驗。不確定會不會失敗，很不安。' },
      { speaker: '鈴木{すずき}', japanese: '経験{けいけん}がなくても大丈夫{だいじょうぶ}ですよ。誰{だれ}か詳{くわ}しい人{ひと}に聞{き}きましょう。', chinese: '沒有經驗也沒關係喔。找誰比較了解的人問問吧。' },
      { speaker: '佐藤{さとう}', japanese: '計画{けいかく}が正{ただ}しいかどうか確認{かくにん}してから進{すす}めましょう。', chinese: '確認計劃是否正確之後再推進吧。' },
      { speaker: '田中{たなか}', japanese: 'はい。何{なに}か問題{もんだい}があったら、すぐ知{し}らせます。', chinese: '好的。如果有什麼問題，我會馬上通知。' },
      { speaker: '鈴木{すずき}', japanese: '失敗{しっぱい}しても経験{けいけん}になりますから、恐{おそ}れないでください。', chinese: '即使失敗了也會成為經驗，所以不要害怕。' },
      { speaker: '佐藤{さとう}', japanese: 'そうですね。貿易{ぼうえき}の世界{せかい}は経験{けいけん}が大切{たいせつ}ですからね。', chinese: '是啊。因為貿易的世界中經驗很重要。' },
    ],
    quizQuestions: l5Quiz,
  },

  // ─── Lesson 6: 職業與求職 ───
  {
    id: 'n4_u3_l6',
    unitId: 'n4_u3',
    order: 6,
    titleJp: '職業{しょくぎょう}と就活{しゅうかつ}',
    titleZh: '職業與求職',
    objectives: [
      '學會「〜かな」「〜かしら」自問句型',
      '學會「〜かい」口語疑問句型',
      '掌握職業與求職相關詞彙',
    ],
    vocabulary: [
      { word: '公務員', reading: 'こうむいん', meaning: '公務員', meaning_zh: '公務員' },
      { word: '新聞社', reading: 'しんぶんしゃ', meaning: '報社', meaning_zh: '報社' },
      { word: '研究室', reading: 'けんきゅうしつ', meaning: '研究室', meaning_zh: '研究室' },
      { word: '説明', reading: 'せつめい', meaning: '說明', meaning_zh: '說明' },
      { word: '準備', reading: 'じゅんび', meaning: '準備', meaning_zh: '準備' },
      { word: 'アルバイト', reading: 'あるばいと', meaning: '兼職', meaning_zh: '兼職' },
      { word: 'パート', reading: 'ぱーと', meaning: '兼職', meaning_zh: '兼職' },
      { word: 'アナウンサー', reading: 'あなうんさー', meaning: '播音員', meaning_zh: '播音員' },
    ],
    grammarIds: ['n4_kana', 'n4_kashira', 'n4_kai'],
    grammarSummaries: [
      {
        grammarId: 'n4_kana',
        pattern: '〜かな',
        meaning: '我在想〜；是否〜',
        quickExample: '明日{あした}晴{は}れるかな。',
        quickExampleZh: '明天會放晴嗎？',
      },
      {
        grammarId: 'n4_kashira',
        pattern: '〜かしら',
        meaning: '不知道〜（女性用語）',
        quickExample: '電車{でんしゃ}は間{ま}に合{あ}うかしら。',
        quickExampleZh: '不知道趕不趕得上電車。',
      },
      {
        grammarId: 'n4_kai',
        pattern: '〜かい',
        meaning: '〜嗎？（口語疑問）',
        quickExample: '元気{げんき}かい？',
        quickExampleZh: '你好嗎？',
      },
    ],
    dialogue: [
      { speaker: '田中{たなか}', japanese: '卒業{そつぎょう}したら、どんな仕事{しごと}をしようかな。', chinese: '畢業之後，要做什麼工作好呢。' },
      { speaker: '山田{やまだ}', japanese: '公務員{こうむいん}はどうかい？安定{あんてい}しているよ。', chinese: '公務員怎麼樣？很穩定喔。' },
      { speaker: '田中{たなか}', japanese: 'うーん、新聞社{しんぶんしゃ}で働{はたら}くのも面白{おもしろ}いかな。', chinese: '嗯...在報社工作也滿有趣的嗎。' },
      { speaker: '佐藤{さとう}', japanese: 'アナウンサーになれるかしら。声{こえ}がきれいだと思{おも}うんだけど。', chinese: '不知道能不能當播音員。我覺得她聲音很好聽。' },
      { speaker: '山田{やまだ}', japanese: 'まず研究室{けんきゅうしつ}の先生{せんせい}に相談{そうだん}してみたらどうかい？', chinese: '先跟研究室的老師商量看看如何？' },
      { speaker: '田中{たなか}', japanese: '今{いま}はアルバイトで経験{けいけん}を積{つ}んでいます。説明{せつめい}も上手{じょうず}になりたいです。', chinese: '現在正在透過兼職累積經驗。也想讓說明能力變更好。' },
      { speaker: '佐藤{さとう}', japanese: 'パートで働{はたら}いている友達{ともだち}もいるかしら。情報{じょうほう}交換{こうかん}できるといいんだけど。', chinese: '不知道有沒有做兼職的朋友。要是能交換情報就好了。' },
      { speaker: '山田{やまだ}', japanese: '準備{じゅんび}は早{はや}めにしたほうがいいよ。面接{めんせつ}の練習{れんしゅう}は始{はじ}めたかい？', chinese: '準備最好早點做喔。面試的練習開始了嗎？' },
      { speaker: '田中{たなか}', japanese: 'まだです。何{なに}を準備{じゅんび}したらいいかな。', chinese: '還沒。要準備什麼好呢。' },
      { speaker: '佐藤{さとう}', japanese: 'まず自分{じぶん}の強{つよ}みを説明{せつめい}できるように準備{じゅんび}しましょう。', chinese: '先準備好能夠說明自己的強項吧。' },
      { speaker: '山田{やまだ}', japanese: 'うん、一緒{いっしょ}に頑張{がんば}ろうかい！', chinese: '嗯，一起加油吧！' },
    ],
    quizQuestions: l6Quiz,
  },

  // ─── Unit Test: 單元綜合測驗 ───
  {
    id: 'n4_u3_test',
    unitId: 'n4_u3',
    order: 7,
    titleJp: '単元{たんげん}テスト',
    titleZh: '單元綜合測驗',
    objectives: ['複習本單元所有單字與文法，並回顧第二單元重點，檢驗學習成果'],
    vocabulary: [],
    grammarIds: [],
    grammarSummaries: [],
    dialogue: [],
    quizQuestions: [
      // ═══════════════════════════════════════
      // Unit 3 題目 Q1–Q15（涵蓋第1～6課）
      // ═══════════════════════════════════════

      // Q1 vocabulary — 第1課 教育
      {
        id: 'n4_u3_test_q1',
        category: 'vocabulary' as const,
        level: 'N4' as const,
        stem: '「教育{きょういく}」の意味{いみ}はどれですか。',
        stemZh: '「教育」的意思是哪個？',
        options: [
          { text: '入學', reason: '錯誤。入學是入学{にゅうがく}。' },
          { text: '教育', reason: '正確。教育{きょういく}意為教育。' },
          { text: '卒業', reason: '錯誤。卒業是卒業{そつぎょう}。' },
          { text: '研究', reason: '錯誤。研究是研究{けんきゅう}。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '教育的詞義',
          analysis: '教育{きょういく}意為教育。「教」有教導之意，「育」有培養之意。',
          relatedRules: ['📖 第1課 單字「教育」'],
        },
      },

      // Q2 vocabulary — 第1課 入学
      {
        id: 'n4_u3_test_q2',
        category: 'vocabulary' as const,
        level: 'N4' as const,
        stem: '「入学{にゅうがく}」の反対{はんたい}の意味{いみ}に近{ちか}い言葉{ことば}はどれですか。',
        stemZh: '與「入学」意思相反的詞是哪個？',
        options: [
          { text: '卒業{そつぎょう}', reason: '正確。卒業意為畢業，是入學的相反概念。' },
          { text: '教育{きょういく}', reason: '錯誤。教育不是入學的反義詞。' },
          { text: '転校{てんこう}', reason: '錯誤。轉學不是入學的直接反義詞。' },
          { text: '高校{こうこう}', reason: '錯誤。高校是學校名稱，不是反義詞。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '入学與卒業的對比',
          analysis: '入学{にゅうがく}＝入學，卒業{そつぎょう}＝畢業。兩者是學業歷程中的起點與終點。',
          relatedRules: ['📖 第1課 單字「入学」「卒業」'],
        },
      },

      // Q3 grammar — 第1課 たら
      {
        id: 'n4_u3_test_q3',
        category: 'grammar' as const,
        level: 'N4' as const,
        stem: '試験{しけん}に合格{ごうかく}し＿＿、何{なに}をしたいですか。',
        stemZh: '如果考試及格了，想做什麼？',
        options: [
          { text: 'ても', reason: '錯誤。「ても」表示即使〜也〜，語意不同。' },
          { text: 'ば', reason: '錯誤。此處是た形＋ら的句型，不用假定形。' },
          { text: 'たら', reason: '正確。「したら」是「する」的た形＋ら，表示假設未來的條件。' },
          { text: 'ので', reason: '錯誤。「ので」表示原因，不是條件。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '「たら」用於假設未來',
          analysis: '「たら」接在動詞た形後，表示「如果〜的話」。する→した→したら。用於假設未來可能發生的事。',
          relatedRules: ['📖 第1課 文法「〜たら」'],
        },
      },

      // Q4 grammar — 第1課 ば
      {
        id: 'n4_u3_test_q4',
        category: 'grammar' as const,
        level: 'N4' as const,
        stem: '値段{ねだん}が安{やす}＿＿買{か}いたいです。',
        stemZh: '如果價格便宜的話想買。',
        options: [
          { text: 'ければ', reason: '正確。い形容詞的假定形：去い＋ければ。安い→安ければ。' },
          { text: 'いなら', reason: '錯誤。い形容詞不能直接加なら。' },
          { text: 'かったら', reason: '錯誤。雖然語法上也通，但此處空格考的是假定形。' },
          { text: 'くて', reason: '錯誤。「くて」是連接形，不表示條件。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: 'い形容詞的「ば」形',
          analysis: 'い形容詞的假定形：去掉い，加ければ。安い→安ければ（如果便宜的話）。',
          relatedRules: ['📖 第1課 文法「〜ば」'],
        },
      },

      // Q5 vocabulary — 第2課 講義
      {
        id: 'n4_u3_test_q5',
        category: 'vocabulary' as const,
        level: 'N4' as const,
        stem: '大学{だいがく}で「講義{こうぎ}」を受{う}けました。「講義」はどんな意味{いみ}ですか。',
        stemZh: '在大學接受了「講義」。「講義」是什麼意思？',
        options: [
          { text: '考試', reason: '錯誤。考試是試験{しけん}。' },
          { text: '研究', reason: '錯誤。研究是研究{けんきゅう}。' },
          { text: '課堂講授', reason: '正確。講義{こうぎ}指大學的講課、課堂講授。' },
          { text: '作業', reason: '錯誤。作業是宿題{しゅくだい}或レポート。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '講義的詞義',
          analysis: '講義{こうぎ}指大學的課堂講授。「講義を受{う}ける」＝聽課、上課。',
          relatedRules: ['📖 第2課 單字「講義」'],
        },
      },

      // Q6 grammar — 第2課 ば〜ほど
      {
        id: 'n4_u3_test_q6',
        category: 'grammar' as const,
        level: 'N4' as const,
        stem: '日本語{にほんご}は勉強{べんきょう}すれ＿＿するほど楽{たの}しくなります。',
        stemZh: '日語越學越有趣。',
        options: [
          { text: 'たら', reason: '錯誤。「たら」不用於「〜ほど」句型。' },
          { text: 'ば', reason: '正確。「〜ば〜ほど」表示越〜越〜。勉強すれば勉強するほど。' },
          { text: 'と', reason: '錯誤。「と」不用於「〜ほど」句型。' },
          { text: 'ても', reason: '錯誤。「ても」表示即使〜也〜，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '「〜ば〜ほど」越〜越〜',
          analysis: '「〜ば〜ほど」表示「越〜越〜」。動詞假定形＋同一動詞辭書形＋ほど。勉強すれば勉強するほど。',
          relatedRules: ['📖 第2課 文法「〜ば〜ほど」'],
        },
      },

      // Q7 vocabulary — 第3課 試験
      {
        id: 'n4_u3_test_q7',
        category: 'vocabulary' as const,
        level: 'N4' as const,
        stem: '「予習{よしゅう}」と「復習{ふくしゅう}」の説明{せつめい}で正{ただ}しいのはどれですか。',
        stemZh: '關於「予習」和「復習」的說明，正確的是哪個？',
        options: [
          { text: '予習是事後複習，復習是事前預習', reason: '錯誤。剛好相反。' },
          { text: '兩者意思完全相同', reason: '錯誤。兩者是不同的學習行為。' },
          { text: '予習是事前預習，復習是事後複習', reason: '正確。予習＝預習，復習＝複習。' },
          { text: '予習是作業，復習是考試', reason: '錯誤。兩者都是學習方法，不是作業或考試。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '予習與復習的區別',
          analysis: '予習{よしゅう}意為預習（上課前先學），復習{ふくしゅう}意為複習（上課後再溫習）。兩者都是重要的學習方法。',
          relatedRules: ['📖 第3課 單字「予習」「復習」'],
        },
      },

      // Q8 grammar — 第3課 たらどう
      {
        id: 'n4_u3_test_q8',
        category: 'grammar' as const,
        level: 'N4' as const,
        stem: 'もっと予習{よしゅう}し＿＿どうですか。',
        stemZh: '多預習一些如何？',
        options: [
          { text: 'ば', reason: '錯誤。「ばどうですか」不是標準建議句型。' },
          { text: 'ると', reason: '錯誤。「るとどうですか」不是建議句型。' },
          { text: 'ても', reason: '錯誤。「てもどうですか」語意不通。' },
          { text: 'たら', reason: '正確。「〜たらどうですか」表示委婉建議。した＋ら→したら。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '「〜たらどうですか」建議句型',
          analysis: '「〜たらどうですか」用於委婉地建議對方做某事。する→した→したらどうですか（做〜如何？）。',
          relatedRules: ['📖 第3課 文法「〜たらどう」'],
        },
      },

      // Q9 vocabulary — 第4課 工場
      {
        id: 'n4_u3_test_q9',
        category: 'vocabulary' as const,
        level: 'N4' as const,
        stem: '「工場{こうじょう}」の意味{いみ}はどれですか。',
        stemZh: '「工場」的意思是哪個？',
        options: [
          { text: '會場', reason: '錯誤。會場是会場{かいじょう}。' },
          { text: '辦事處', reason: '錯誤。辦事處是事務所{じむしょ}。' },
          { text: '會議室', reason: '錯誤。會議室是会議室{かいぎしつ}。' },
          { text: '工廠', reason: '正確。工場{こうじょう}意為工廠。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '工場的詞義',
          analysis: '工場{こうじょう}意為工廠。注意日語的「工場」讀作「こうじょう」或「こうば」。',
          relatedRules: ['📖 第4課 單字「工場」'],
        },
      },

      // Q10 grammar — 第4課 なら
      {
        id: 'n4_u3_test_q10',
        category: 'grammar' as const,
        level: 'N4' as const,
        stem: 'A：「会議室{かいぎしつ}を探{さが}しています。」B：「会議室{かいぎしつ}＿＿、二階{にかい}にありますよ。」',
        stemZh: 'A：「我在找會議室。」B：「如果是會議室，在二樓喔。」',
        options: [
          { text: 'と', reason: '錯誤。「と」不直接接名詞表示話題條件。' },
          { text: 'ば', reason: '錯誤。「ば」不直接接名詞。' },
          { text: 'なら', reason: '正確。「なら」可直接接名詞，承接對方提到的話題給出資訊。' },
          { text: 'たら', reason: '錯誤。「たら」不直接接名詞表示話題。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '「なら」接名詞的用法',
          analysis: '「名詞＋なら」承接對方的話題，提供資訊或建議。「会議室なら」＝如果是會議室的話。',
          relatedRules: ['📖 第4課 文法「〜なら」'],
        },
      },

      // Q11 grammar — 第4課 場合は
      {
        id: 'n4_u3_test_q11',
        category: 'grammar' as const,
        level: 'N4' as const,
        stem: '火事{かじ}の＿＿、すぐ外{そと}に出{で}てください。',
        stemZh: '萬一發生火災，請立刻到外面去。',
        options: [
          { text: 'ために', reason: '錯誤。「ために」表示「為了」，語意不符。' },
          { text: 'あいだに', reason: '錯誤。「あいだに」表示「在〜期間」，語意不符。' },
          { text: 'ところ', reason: '錯誤。「ところ」表示時機，不適合此處。' },
          { text: '場合{ばあい}は', reason: '正確。「〜場合は」表示在某情況發生時應採取的行動。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '「〜場合は」的用法',
          analysis: '「〜場合{ばあい}は」表示「在〜的情況下」，用於預設某種情境並說明應對方式。火事の場合は＝萬一發生火災的話。',
          relatedRules: ['📖 第4課 文法「〜場合は」'],
        },
      },

      // Q12 vocabulary — 第5課 経験
      {
        id: 'n4_u3_test_q12',
        category: 'vocabulary' as const,
        level: 'N4' as const,
        stem: '「経験{けいけん}」の意味{いみ}はどれですか。',
        stemZh: '「経験」的意思是哪個？',
        options: [
          { text: '計劃', reason: '錯誤。計劃是計画{けいかく}。' },
          { text: '經濟', reason: '錯誤。經濟是経済{けいざい}。' },
          { text: '經驗', reason: '正確。経験{けいけん}意為經驗。' },
          { text: '技術', reason: '錯誤。技術是技術{ぎじゅつ}。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '経験的詞義',
          analysis: '経験{けいけん}意為經驗。常見用法：経験{けいけん}がある（有經驗）、経験{けいけん}を積{つ}む（累積經驗）。',
          relatedRules: ['📖 第5課 單字「経験」'],
        },
      },

      // Q13 grammar — 第5課 かどうか
      {
        id: 'n4_u3_test_q13',
        category: 'grammar' as const,
        level: 'N4' as const,
        stem: '明日{あした}天気{てんき}がいい＿＿わかりません。',
        stemZh: '不知道明天天氣是否好。',
        options: [
          { text: 'かな', reason: '錯誤。「かな」是自問句尾詞，不接「わかりません」。' },
          { text: 'かどうか', reason: '正確。「〜かどうか」表示「是否〜」，用於間接疑問。' },
          { text: 'かしら', reason: '錯誤。「かしら」是自問用語，不接「わかりません」。' },
          { text: 'かい', reason: '錯誤。「かい」是口語疑問句尾，不用於間接疑問。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '「〜かどうか」表示「是否」',
          analysis: '「〜かどうか」表示「是否〜」，用於將疑問句嵌入句中作為間接疑問。常搭配「わかりません」「知りません」等。',
          relatedRules: ['📖 第5課 文法「〜かどうか」'],
        },
      },

      // Q14 vocabulary — 第6課 アルバイト
      {
        id: 'n4_u3_test_q14',
        category: 'vocabulary' as const,
        level: 'N4' as const,
        stem: '「アルバイト」の意味{いみ}はどれですか。',
        stemZh: '「アルバイト」的意思是哪個？',
        options: [
          { text: '全職工作', reason: '錯誤。全職工作是正社員{せいしゃいん}。' },
          { text: '兼職', reason: '正確。アルバイト源自德語Arbeit，指兼職工作，多用於學生打工。' },
          { text: '播音員', reason: '錯誤。播音員是アナウンサー。' },
          { text: '公務員', reason: '錯誤。公務員是公務員{こうむいん}。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: 'アルバイト的詞義',
          analysis: 'アルバイト源自德語Arbeit，在日語中指兼職工作，特別常用於學生打工的場合。',
          relatedRules: ['📖 第6課 單字「アルバイト」'],
        },
      },

      // Q15 grammar — 第6課 かな
      {
        id: 'n4_u3_test_q15',
        category: 'grammar' as const,
        level: 'N4' as const,
        stem: '将来{しょうらい}どんな仕事{しごと}をしよう＿＿。（自言自語）',
        stemZh: '將來要做什麼工作好呢。（自言自語）',
        options: [
          { text: 'ですか', reason: '錯誤。「ですか」是向對方提問，不是自言自語。' },
          { text: 'かい', reason: '錯誤。「かい」是向別人提問，不是自問。' },
          { text: 'かしら', reason: '錯誤。「かしら」主要是女性用語，此處為通用情境。' },
          { text: 'かな', reason: '正確。「かな」用於自言自語式的自問，表示「〜好呢」。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '「〜かな」的自問用法',
          analysis: '「〜かな」接在句尾，表示自言自語「不知道〜」「〜好呢」。男女通用，語氣輕鬆。',
          relatedRules: ['📖 第6課 文法「〜かな」'],
        },
      },

      // ═══════════════════════════════════════
      // Unit 2 複習題 Q16–Q20
      // ═══════════════════════════════════════

      // Q16 vocabulary — U2第1課 悲しい
      {
        id: 'n4_u3_test_q16',
        category: 'vocabulary' as const,
        level: 'N4' as const,
        stem: '「悲{かな}しい」の意味{いみ}はどれですか。',
        stemZh: '「悲しい」的意思是哪個？',
        options: [
          { text: '害羞', reason: '錯誤。害羞是恥{は}ずかしい。' },
          { text: '可怕', reason: '錯誤。可怕是怖{こわ}い。' },
          { text: '想睡', reason: '錯誤。想睡是眠{ねむ}い。' },
          { text: '難過', reason: '正確。悲{かな}しい意為難過、悲傷。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '悲しい的詞義（複習）',
          analysis: '悲{かな}しい是い形容詞，意為難過、悲傷。是描述悲傷心情的基本詞彙。',
          relatedRules: ['📖 U2第1課 單字「悲しい」'],
        },
      },

      // Q17 grammar — U2第1課 らしい
      {
        id: 'n4_u3_test_q17',
        category: 'grammar' as const,
        level: 'N4' as const,
        stem: '来週{らいしゅう}テストがある＿＿です。先輩{せんぱい}がそう言{い}っていました。',
        stemZh: '聽說下週有考試。學長這樣說的。',
        options: [
          { text: 'そう', reason: '錯誤。動詞原形＋そうです是傳聞，但此處更適合用らしい表示根據資訊來源的推測。' },
          { text: 'らしい', reason: '正確。根據學長說的話來推測，用らしい表示有依據的推測。' },
          { text: 'かもしれない', reason: '錯誤。かもしれない表示也許，但此處有明確的資訊來源。' },
          { text: 'はず', reason: '錯誤。はず表示應該，語氣過於肯定。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '〜らしい表示有依據的推測（複習）',
          analysis: '「〜らしいです」用於根據某資訊來源進行推測。學長說下週有考試，所以用「あるらしいです」。',
          relatedRules: ['📖 U2第1課 文法「〜らしい」'],
        },
      },

      // Q18 grammar — U2第3課 〜がる
      {
        id: 'n4_u3_test_q18',
        category: 'grammar' as const,
        level: 'N4' as const,
        stem: '弟{おとうと}は注射{ちゅうしゃ}を怖{こわ}＿＿。',
        stemZh: '弟弟害怕打針。（表現出害怕的樣子）',
        options: [
          { text: 'いです', reason: '錯誤。〜い用於第一人稱的感受，描述第三人稱要用〜がる。' },
          { text: 'がります', reason: '正確。形容詞詞幹＋がる，描述第三人稱表現出害怕的樣子。' },
          { text: 'たがります', reason: '錯誤。たがる用於「想要做〜」，不用於形容詞。' },
          { text: 'そうです', reason: '錯誤。〜そう表示看起來〜，接續方式不同。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '〜がる描述第三人稱感情（複習）',
          analysis: '形容詞詞幹＋がる，用於描述第三人稱表現出某種感情。怖{こわ}い→怖{こわ}がる（表現出害怕的樣子）。',
          relatedRules: ['📖 U2第3課 文法「〜がる」'],
        },
      },

      // Q19 grammar — U2第5課 まま
      {
        id: 'n4_u3_test_q19',
        category: 'grammar' as const,
        level: 'N4' as const,
        stem: '電気{でんき}をつけた＿＿寝{ね}てしまいました。',
        stemZh: '開著燈就那樣睡著了。',
        options: [
          { text: 'ばかり', reason: '錯誤。ばかり表示光是〜，語意不同。' },
          { text: 'まだ', reason: '錯誤。まだ表示還，不表示保持狀態。' },
          { text: 'まま', reason: '正確。〜たまま表示保持某動作完成後的狀態。開著燈的狀態＝つけたまま。' },
          { text: 'だけ', reason: '錯誤。だけ表示只有，語意不通。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '「〜まま」保持狀態（複習）',
          analysis: '動詞た形＋まま，表示保持某動作完成後的狀態不變。「つけたまま」＝開著（燈）的狀態。',
          relatedRules: ['📖 U2第5課 文法「〜まま」'],
        },
      },

      // Q20 vocabulary — U2第6課 太る vs 痩せる
      {
        id: 'n4_u3_test_q20',
        category: 'vocabulary' as const,
        level: 'N4' as const,
        stem: '「太{ふと}る」の反対{はんたい}の意味{いみ}の言葉{ことば}はどれですか。',
        stemZh: '「太る」的反義詞是哪個？',
        options: [
          { text: '倒{たお}れる', reason: '錯誤。倒れる意為倒下，不是太る的反義詞。' },
          { text: '治{なお}る', reason: '錯誤。治る意為治好，不是太る的反義詞。' },
          { text: '痩{や}せる', reason: '正確。太{ふと}る＝發胖，痩{や}せる＝瘦，兩者是反義詞。' },
          { text: '冷{ひ}える', reason: '錯誤。冷える意為變冷，不是太る的反義詞。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '太る與痩せる的對比（複習）',
          analysis: '太{ふと}る＝發胖，痩{や}せる＝瘦。兩者是描述體型變化的一組反義詞。',
          relatedRules: ['📖 U2第6課 單字「太る」「痩せる」'],
        },
      },
    ],
  },
]
