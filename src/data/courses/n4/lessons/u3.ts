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
  {
    id: 'cq_n4_u3_l4_001',
    category: 'vocabulary',
    level: 'N4',
    tags: ['meaning'],
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
    },
  },
  {
    id: 'cq_n4_u3_l4_002',
    category: 'vocabulary',
    level: 'N4',
    tags: ['meaning'],
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
      comparisons: ['社長＝社長（最高）', '部長＝部長（中間）', '課長＝課長（基層管理）'],
    },
  },
  {
    id: 'cq_n4_u3_l4_003',
    category: 'grammar',
    level: 'N4',
    tags: ['nara'],
    stem: '日本{にほん}に行{い}く＿＿、京都{きょうと}がおすすめです。',
    stemZh: '如果要去日本的話，推薦京都。',
    options: [
      { text: 'なら', reason: '正確。「なら」接在動詞辭書形後，表示以對方的話題為前提的條件。' },
      { text: 'たら', reason: '錯誤。「たら」用法不同，這裡是接對方話題提建議。' },
      { text: 'ば', reason: '錯誤。「ば」需要假定形，不接辭書形。' },
      { text: 'ても', reason: '錯誤。「ても」表示「即使」，語意不符。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '條件句型「なら」',
      analysis: '「なら」用於承接對方的話題或前提條件，提出建議或判斷。常譯為「如果〜的話」。',
      comparisons: ['なら＝如果（基於話題/前提提建議）', 'たら＝如果（假設完成後的結果）'],
    },
  },
  {
    id: 'cq_n4_u3_l4_004',
    category: 'grammar',
    level: 'N4',
    tags: ['to'],
    stem: '春{はる}になる＿＿、桜{さくら}が咲{さ}きます。',
    stemZh: '一到春天，櫻花就會開。',
    options: [
      { text: 'と', reason: '正確。「と」表示自然規律或必然結果的條件。' },
      { text: 'なら', reason: '錯誤。「なら」用於主觀建議，不適合自然規律。' },
      { text: 'ば', reason: '錯誤。雖然可以用，但「と」更適合表達自然規律。' },
      { text: 'ても', reason: '錯誤。「ても」表示「即使」，語意不符。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '條件句型「と」',
      analysis: '「と」用於表達自然規律、習慣或必然的因果關係。一旦前項成立，後項必然發生。',
      commonMistakes: ['○ 春になると桜が咲く → と用於自然規律'],
    },
  },
]

// ─── Lesson 5 Quiz ───
const l5Quiz: UnifiedQuestion[] = [
  {
    id: 'cq_n4_u3_l5_001',
    category: 'vocabulary',
    level: 'N4',
    tags: ['meaning'],
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
      comparisons: ['経験{けいけん}＝經驗', '経済{けいざい}＝經濟'],
    },
  },
  {
    id: 'cq_n4_u3_l5_002',
    category: 'vocabulary',
    level: 'N4',
    tags: ['meaning'],
    stem: '「失敗{しっぱい}」の意味{いみ}はどれですか。',
    stemZh: '「失敗」的意思是哪個？',
    options: [
      { text: '失敗', reason: '正確。失敗{しっぱい}意為失敗。' },
      { text: '準備', reason: '錯誤。準備是準備{じゅんび}。' },
      { text: '說明', reason: '錯誤。說明是説明{せつめい}。' },
      { text: '成功', reason: '錯誤。成功是成功{せいこう}。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '失敗的詞義',
      analysis: '失敗{しっぱい}意為失敗。注意促音「っ」的發音。反義詞是成功{せいこう}。',
    },
  },
  {
    id: 'cq_n4_u3_l5_003',
    category: 'grammar',
    level: 'N4',
    tags: ['nara'],
    stem: 'A：「パソコンが壊{こわ}れました。」B：「パソコン＿＿、山田{やまだ}さんに聞{き}いてください。」',
    stemZh: 'A：「電腦壞了。」B：「如果是電腦的問題，請問山田先生。」',
    options: [
      { text: 'なら', reason: '正確。「なら」承接對方話題，表示「如果是〜的話」。' },
      { text: 'たら', reason: '錯誤。此處是承接對方話題，用なら更自然。' },
      { text: 'ば', reason: '錯誤。「ば」不直接接名詞。' },
      { text: 'と', reason: '錯誤。「と」不直接接名詞。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「なら」承接話題',
      analysis: '「なら」可以直接接在名詞後，承接對方提到的話題來給出建議或看法。名詞＋なら的形式。',
    },
  },
]

// ─── Lesson 6 Quiz ───
const l6Quiz: UnifiedQuestion[] = [
  {
    id: 'cq_n4_u3_l6_001',
    category: 'grammar',
    level: 'N4',
    tags: ['to'],
    stem: 'このボタンを押{お}す＿＿、ドアが開{あ}きます。',
    stemZh: '按下這個按鈕，門就會打開。',
    options: [
      { text: 'と', reason: '正確。「と」表示按下按鈕後必然會開門的因果關係。' },
      { text: 'なら', reason: '錯誤。「なら」是基於話題給建議，不適合機械因果。' },
      { text: 'ても', reason: '錯誤。「ても」表示「即使」，語意不符。' },
      { text: 'のに', reason: '錯誤。「のに」表示「儘管」，語意不符。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「と」用於機械性因果',
      analysis: '「と」用於表達做了A就必然會發生B的情況。適合操作說明、自然現象等必然因果。',
    },
  },
  {
    id: 'cq_n4_u3_l6_002',
    category: 'vocabulary',
    level: 'N4',
    tags: ['meaning'],
    stem: '「アルバイト」と「パート」は何{なん}ですか。',
    stemZh: '「アルバイト」和「パート」是什麼？',
    options: [
      { text: '都是兼職工作', reason: '正確。アルバイト和パート都指兼職，但パート多指主婦的兼職。' },
      { text: '都是全職工作', reason: '錯誤。全職工作是正社員{せいしゃいん}。' },
      { text: '播音員和記者', reason: '錯誤。播音員是アナウンサー。' },
      { text: '部長和課長', reason: '錯誤。這些是管理職位。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: 'アルバイト與パート的關係',
      analysis: 'アルバイト（源自德語Arbeit）和パート（源自英語part-time）都指兼職工作。アルバイト多用於學生打工，パート多用於主婦兼職。',
    },
  },
  {
    id: 'cq_n4_u3_l6_003',
    category: 'vocabulary',
    level: 'N4',
    tags: ['reading'],
    stem: '「貿易{ぼうえき}」の意味{いみ}はどれですか。',
    stemZh: '「貿易」的意思是哪個？',
    options: [
      { text: '貿易', reason: '正確。貿易{ぼうえき}意為貿易、國際交易。' },
      { text: '產業', reason: '錯誤。產業是産業{さんぎょう}。' },
      { text: '工業', reason: '錯誤。工業是工業{こうぎょう}。' },
      { text: '公務員', reason: '錯誤。公務員是公務員{こうむいん}。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '貿易的詞義',
      analysis: '貿易{ぼうえき}意為貿易。「貿」有交換之意，「易」也有交易之意。指國與國之間的商業交易。',
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
]
