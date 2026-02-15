import type { LessonDefinition } from '../../../../types/course'
import type { UnifiedQuestion } from '../../../questions/types'

// ─── Unit 1: 入門・自我介紹 ───

// ─── Lesson 1 Quiz: 自我介紹 ───
const l1Quiz: UnifiedQuestion[] = [
  // Q1 vocabulary — 友達
  {
    id: 'n5_u1_l1_q1',
    category: 'vocabulary',
    level: 'N5',
    stem: '「友達{ともだち}」の意味{いみ}はどれですか。',
    stemZh: '「友達」的意思是哪個？',
    options: [
      { text: '老師', reason: '錯誤。老師是先生{せんせい}。' },
      { text: '朋友', reason: '正確。友達{ともだち}意為朋友。' },
      { text: '學生', reason: '錯誤。學生是学生{がくせい}。' },
      { text: '家人', reason: '錯誤。家人是家族{かぞく}。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '友達的詞義',
      analysis: '友達{ともだち}是 N5 必學單字，意為「朋友」。注意讀音是「ともだち」。',
      relatedRules: ['📖 本課 單字「友達」'],
    },
  },
  // Q2 vocabulary — 会社
  {
    id: 'n5_u1_l1_q2',
    category: 'vocabulary',
    level: 'N5',
    stem: '「会社{かいしゃ}」の意味{いみ}はどれですか。',
    stemZh: '「会社」的意思是哪個？',
    options: [
      { text: '公司', reason: '正確。会社{かいしゃ}意為公司。' },
      { text: '大學', reason: '錯誤。大學是大学{だいがく}。' },
      { text: '國家', reason: '錯誤。國家是国{くに}。' },
      { text: '學校', reason: '錯誤。學校是学校{がっこう}。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '会社的詞義',
      analysis: '会社{かいしゃ}意為公司。「会」有集會之意，「社」有社團之意。',
      relatedRules: ['📖 本課 單字「会社」'],
    },
  },
  // Q3 vocabulary — 名前
  {
    id: 'n5_u1_l1_q3',
    category: 'vocabulary',
    level: 'N5',
    stem: '「お名前{なまえ}は？」の「名前{なまえ}」はどんな意味{いみ}ですか。',
    stemZh: '「お名前は？」中的「名前」是什麼意思？',
    options: [
      { text: '國家', reason: '錯誤。國家是国{くに}。' },
      { text: '公司', reason: '錯誤。公司是会社{かいしゃ}。' },
      { text: '名字', reason: '正確。名前{なまえ}意為名字。' },
      { text: '人', reason: '錯誤。人是人{ひと}。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '名前的詞義',
      analysis: '名前{なまえ}意為名字。「お名前は？」是詢問對方名字的禮貌說法。',
      relatedRules: ['📖 本課 單字「名前」'],
    },
  },
  // Q4 vocabulary — 先生
  {
    id: 'n5_u1_l1_q4',
    category: 'vocabulary',
    level: 'N5',
    stem: '「先生{せんせい}」の読{よ}み方{かた}はどれですか。',
    stemZh: '「先生」的讀法是哪個？',
    options: [
      { text: 'せいせん', reason: '錯誤。音讀順序不對。' },
      { text: 'しんせい', reason: '錯誤。這是「申請」的讀音。' },
      { text: 'せんせ', reason: '錯誤。少了最後的「い」。' },
      { text: 'せんせい', reason: '正確。先生的讀音是せんせい，意為老師。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '先生的讀音',
      analysis: '先生{せんせい}意為老師。「先」讀「せん」、「生」讀「せい」。是常用稱呼。',
      relatedRules: ['📖 本課 單字「先生」'],
    },
  },
  // Q5 vocabulary — 分かる
  {
    id: 'n5_u1_l1_q5',
    category: 'vocabulary',
    level: 'N5',
    stem: '「分{わ}かりました」の「分{わ}かる」はどんな意味{いみ}ですか。',
    stemZh: '「分かりました」中的「分かる」是什麼意思？',
    options: [
      { text: '說', reason: '錯誤。說是言{い}う。' },
      { text: '懂、理解', reason: '正確。分{わ}かる意為理解、明白。' },
      { text: '看', reason: '錯誤。看是見{み}る。' },
      { text: '聽', reason: '錯誤。聽是聞{き}く。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '分かる的詞義',
      analysis: '分{わ}かる是自動詞，意為「理解、明白」。「分かりました」是「我明白了」的敬體過去式。',
      relatedRules: ['📖 本課 單字「分かる」'],
    },
  },
  // Q6 vocabulary — 大学
  {
    id: 'n5_u1_l1_q6',
    category: 'vocabulary',
    level: 'N5',
    stem: '「大学{だいがく}」の意味{いみ}はどれですか。',
    stemZh: '「大学」的意思是哪個？',
    options: [
      { text: '高中', reason: '錯誤。高中是高校{こうこう}。' },
      { text: '公司', reason: '錯誤。公司是会社{かいしゃ}。' },
      { text: '大學', reason: '正確。大学{だいがく}意為大學。' },
      { text: '國家', reason: '錯誤。國家是国{くに}。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '大学的詞義',
      analysis: '大学{だいがく}意為大學。「大学の学生」就是大學生。',
      relatedRules: ['📖 本課 單字「大学」'],
    },
  },
  // Q7 vocabulary — 彼女
  {
    id: 'n5_u1_l1_q7',
    category: 'vocabulary',
    level: 'N5',
    stem: '「彼女{かのじょ}は女{おんな}の人{ひと}です。」の「彼女{かのじょ}」はどんな意味{いみ}ですか。',
    stemZh: '「彼女は女の人です。」中的「彼女」是什麼意思？',
    options: [
      { text: '他', reason: '錯誤。他是彼{かれ}。' },
      { text: '你', reason: '錯誤。你是あなた。' },
      { text: '我', reason: '錯誤。我是私{わたし}。' },
      { text: '她', reason: '正確。彼女{かのじょ}意為她。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '人稱代名詞「彼女」',
      analysis: '彼女{かのじょ}意為「她」。相對地，「他」是彼{かれ}。',
      relatedRules: ['📖 本課 單字「彼女」'],
    },
  },
  // Q8 vocabulary — 国
  {
    id: 'n5_u1_l1_q8',
    category: 'vocabulary',
    level: 'N5',
    stem: '「国{くに}」の意味{いみ}はどれですか。',
    stemZh: '「国」的意思是哪個？',
    options: [
      { text: '國家', reason: '正確。国{くに}意為國家。' },
      { text: '朋友', reason: '錯誤。朋友是友達{ともだち}。' },
      { text: '名字', reason: '錯誤。名字是名前{なまえ}。' },
      { text: '公司', reason: '錯誤。公司是会社{かいしゃ}。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '国的詞義',
      analysis: '国{くに}意為國家。常見用法如「国はどこですか」（你的國家是哪裡？）。',
      relatedRules: ['📖 本課 單字「国」'],
    },
  },
  // Q9 grammar — は
  {
    id: 'n5_u1_l1_q9',
    category: 'grammar',
    level: 'N5',
    stem: '私{わたし}＿＿学生{がくせい}です。',
    stemZh: '我是學生。',
    options: [
      { text: 'を', reason: '錯誤。「を」標記受詞，此處不適用。' },
      { text: 'は', reason: '正確。「は」標記句子的主題「私」。' },
      { text: 'に', reason: '錯誤。「に」標記場所或時間，此處不適用。' },
      { text: 'が', reason: '錯誤。自我介紹語境中用「は」更自然。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '主題助詞「は」的用法',
      analysis: '「は」用來標記句子的主題。「私は〜です」是自我介紹的最基本句型。',
      relatedRules: ['📖 本課 文法「AはBです」'],
    },
  },
  // Q10 grammar — です
  {
    id: 'n5_u1_l1_q10',
    category: 'grammar',
    level: 'N5',
    stem: '田中{たなか}さんは先生{せんせい}＿＿。',
    stemZh: '田中先生是老師。',
    options: [
      { text: 'だ', reason: '錯誤。「だ」是常體，在禮貌場合不適用。' },
      { text: 'ます', reason: '錯誤。「ます」接在動詞後面，不接名詞。' },
      { text: 'です', reason: '正確。「です」是敬體斷定助動詞，表示「是〜」。' },
      { text: 'に', reason: '錯誤。「に」是助詞，不表示斷定。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '斷定助動詞「です」',
      analysis: '「です」放在名詞後面，表示「是〜」。敬體場合用「です」，常體用「だ」。',
      relatedRules: ['📖 本課 文法「〜だ / 〜です」'],
    },
  },
  // Q11 grammar — 自我介紹句型
  {
    id: 'n5_u1_l1_q11',
    category: 'grammar',
    level: 'N5',
    stem: 'A：「お名前{なまえ}は？」B：「＿＿は田中{たなか}です。」',
    stemZh: 'A：「請問貴姓？」B：「我是田中。」',
    options: [
      { text: '私{わたし}', reason: '正確。回答自己的名字時用「私は〜です」。' },
      { text: 'あなた', reason: '錯誤。あなた是「你」，不用於回答自己的名字。' },
      { text: '彼{かれ}', reason: '錯誤。彼是「他」，不符合自我介紹語境。' },
      { text: '友達{ともだち}', reason: '錯誤。友達是「朋友」，不符合語境。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '自我介紹句型',
      analysis: '被問名字時，用「私は〜です」回答。這是最基本的自我介紹句型。',
      relatedRules: ['📖 本課 文法「AはBです」'],
    },
  },
  // Q12 grammar — 正確句子判斷
  {
    id: 'n5_u1_l1_q12',
    category: 'grammar',
    level: 'N5',
    stem: '下{した}の文{ぶん}で正{ただ}しいのはどれですか。',
    stemZh: '下面哪個句子是正確的？',
    options: [
      { text: '私{わたし}は田中{たなか}だ。', reason: '錯誤。「だ」是常體，正式自我介紹應用「です」。' },
      { text: '私{わたし}の田中{たなか}です。', reason: '錯誤。「の」是所有格，語意不通。' },
      { text: '私{わたし}が田中{たなか}です。', reason: '錯誤。自我介紹用「は」較自然，「が」用於被指名時。' },
      { text: '私{わたし}は田中{たなか}です。', reason: '正確。「私は〜です」是最標準的自我介紹句型。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '自我介紹的正確句型',
      analysis: '自我介紹用「私は〜です」。「は」標記主題，「です」是敬體斷定。常體「だ」不用於正式場合。',
      relatedRules: ['📖 本課 文法「AはBです」', '📖 本課 文法「〜だ / 〜です」'],
    },
  },
  // Q13 grammar — は的位置
  {
    id: 'n5_u1_l1_q13',
    category: 'grammar',
    level: 'N5',
    stem: '佐藤{さとう}さん＿＿大学{だいがく}の学生{がくせい}です。',
    stemZh: '佐藤同學是大學生。',
    options: [
      { text: 'が', reason: '錯誤。描述主題時「は」比「が」更自然。' },
      { text: 'は', reason: '正確。「は」標記主題「佐藤さん」。' },
      { text: 'の', reason: '錯誤。「の」是所有格，不用於標記主題。' },
      { text: 'を', reason: '錯誤。「を」是受詞助詞，此處不適用。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '主題助詞「は」',
      analysis: '「AはBです」是基本句型。「は」標記句子的主題（A），「です」用於斷定。',
      relatedRules: ['📖 本課 文法「AはBです」'],
    },
  },
  // Q14 grammar — だ vs です
  {
    id: 'n5_u1_l1_q14',
    category: 'grammar',
    level: 'N5',
    stem: '「彼{かれ}は会社{かいしゃ}の人{ひと}＿＿。」丁寧{ていねい}な言{い}い方{かた}はどれですか。',
    stemZh: '「他是公司的人___。」禮貌的說法是哪個？',
    options: [
      { text: 'だ', reason: '錯誤。「だ」是常體，不是禮貌說法。' },
      { text: 'に', reason: '錯誤。「に」是助詞，不表示斷定。' },
      { text: 'です', reason: '正確。「です」是敬體斷定，用於禮貌場合。' },
      { text: 'ます', reason: '錯誤。「ます」接在動詞後面，不接名詞。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '敬體「です」與常體「だ」的區別',
      analysis: '禮貌場合用「です」，日常隨意場合用「だ」。正式的自我介紹一律使用「です」。',
      relatedRules: ['📖 本課 文法「〜だ / 〜です」'],
    },
  },
  // Q15 grammar — AはBです 綜合
  {
    id: 'n5_u1_l1_q15',
    category: 'grammar',
    level: 'N5',
    stem: '山田{やまだ}さんは＿＿です。（她是女生）',
    stemZh: '山田同學是___。（她是女生）',
    options: [
      { text: '男{おとこ}の人{ひと}', reason: '錯誤。男の人是男生，與語意不符。' },
      { text: '先生{せんせい}', reason: '錯誤。先生是老師，與語意不符。' },
      { text: '学生{がくせい}', reason: '錯誤。学生是學生，並非題目要求的答案。' },
      { text: '女{おんな}の人{ひと}', reason: '正確。女の人意為女生，符合語意。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '「AはBです」填入適當名詞',
      analysis: '「AはBです」中 B 的部分填入描述 A 身分的名詞。「女の人」意為女生。',
      relatedRules: ['📖 本課 文法「AはBです」', '📖 本課 單字「女」'],
    },
  },
]

// ─── Lesson 2 Quiz: 家人與問候 ───
const l2Quiz: UnifiedQuestion[] = [
  // Q1 vocabulary — お母さん
  {
    id: 'n5_u1_l2_q1',
    category: 'vocabulary',
    level: 'N5',
    stem: '「お母{かあ}さん」の意味{いみ}はどれですか。',
    stemZh: '「お母さん」的意思是哪個？',
    options: [
      { text: '姊姊', reason: '錯誤。姊姊是姉{あね}。' },
      { text: '母親', reason: '正確。お母{かあ}さん意為母親。' },
      { text: '妹妹', reason: '錯誤。妹妹是妹{いもうと}。' },
      { text: '父親', reason: '錯誤。父親是お父{とう}さん。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '家族稱呼：お母さん',
      analysis: 'お母{かあ}さん是對母親的尊稱。「お」是敬語前綴，稱呼他人的家人時使用。',
      relatedRules: ['📖 本課 單字「お母さん」'],
    },
  },
  // Q2 vocabulary — お父さん
  {
    id: 'n5_u1_l2_q2',
    category: 'vocabulary',
    level: 'N5',
    stem: '「お父{とう}さん」の意味{いみ}はどれですか。',
    stemZh: '「お父さん」的意思是哪個？',
    options: [
      { text: '父親', reason: '正確。お父{とう}さん意為父親。' },
      { text: '哥哥', reason: '錯誤。哥哥是兄{あに}。' },
      { text: '弟弟', reason: '錯誤。弟弟是弟{おとうと}。' },
      { text: '母親', reason: '錯誤。母親是お母{かあ}さん。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '家族稱呼：お父さん',
      analysis: 'お父{とう}さん意為父親。注意讀音是「おとうさん」，不要和「弟{おとうと}」混淆。',
      relatedRules: ['📖 本課 單字「お父さん」'],
    },
  },
  // Q3 vocabulary — 家族
  {
    id: 'n5_u1_l2_q3',
    category: 'vocabulary',
    level: 'N5',
    stem: '「家族{かぞく}」の意味{いみ}はどれですか。',
    stemZh: '「家族」的意思是哪個？',
    options: [
      { text: '朋友', reason: '錯誤。朋友是友達{ともだち}。' },
      { text: '名字', reason: '錯誤。名字是名前{なまえ}。' },
      { text: '家人', reason: '正確。家族{かぞく}意為家人、家族。' },
      { text: '學生', reason: '錯誤。學生是学生{がくせい}。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '家族的詞義',
      analysis: '家族{かぞく}意為家人，是描述家庭成員時常用的總稱。',
      relatedRules: ['📖 本課 單字「家族」'],
    },
  },
  // Q4 vocabulary — 元気
  {
    id: 'n5_u1_l2_q4',
    category: 'vocabulary',
    level: 'N5',
    stem: '「お元気{げんき}ですか。」の「元気{げんき}」はどんな意味{いみ}ですか。',
    stemZh: '「お元気ですか。」中的「元気」是什麼意思？',
    options: [
      { text: '天氣', reason: '錯誤。天氣是天気{てんき}。' },
      { text: '一起', reason: '錯誤。一起是一緒{いっしょ}。' },
      { text: '什麼', reason: '錯誤。什麼是何{なに}。' },
      { text: '元氣、精神好', reason: '正確。元気{げんき}意為精神好、健康。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '元気的詞義',
      analysis: '元気{げんき}是形容動詞，意為精神好、健康。「お元気ですか」是常用問候語。',
      relatedRules: ['📖 本課 單字「元気」'],
    },
  },
  // Q5 vocabulary — 天気
  {
    id: 'n5_u1_l2_q5',
    category: 'vocabulary',
    level: 'N5',
    stem: '「いい天気{てんき}ですね。」の「天気{てんき}」はどんな意味{いみ}ですか。',
    stemZh: '「いい天気ですね。」中的「天気」是什麼意思？',
    options: [
      { text: '心情', reason: '錯誤。心情不是天気的意思。' },
      { text: '天氣', reason: '正確。天気{てんき}意為天氣。' },
      { text: '元氣', reason: '錯誤。元氣是元気{げんき}。' },
      { text: '今天', reason: '錯誤。今天是今日{きょう}。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '天気的詞義',
      analysis: '天気{てんき}意為天氣。「いい天気ですね」是日常寒暄語，意為「天氣真好呢」。',
      relatedRules: ['📖 本課 單字「天気」'],
    },
  },
  // Q6 vocabulary — 兄弟姊妹配對
  {
    id: 'n5_u1_l2_q6',
    category: 'vocabulary',
    level: 'N5',
    stem: '「姉{あね}」の意味{いみ}はどれですか。',
    stemZh: '「姉」的意思是哪個？',
    options: [
      { text: '妹妹', reason: '錯誤。妹妹是妹{いもうと}。' },
      { text: '弟弟', reason: '錯誤。弟弟是弟{おとうと}。' },
      { text: '姊姊', reason: '正確。姉{あね}意為姊姊（自謙用法）。' },
      { text: '哥哥', reason: '錯誤。哥哥是兄{あに}。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '家族稱呼：姉',
      analysis: '姉{あね}是指自己的姊姊（自謙語）。稱呼他人的姊姊時用「お姉{ねえ}さん」。',
      relatedRules: ['📖 本課 單字「姉」'],
    },
  },
  // Q7 vocabulary — 一緒
  {
    id: 'n5_u1_l2_q7',
    category: 'vocabulary',
    level: 'N5',
    stem: '「家族{かぞく}は一緒{いっしょ}です。」の「一緒{いっしょ}」はどんな意味{いみ}ですか。',
    stemZh: '「家族は一緒です。」中的「一緒」是什麼意思？',
    options: [
      { text: '一起', reason: '正確。一緒{いっしょ}意為一起。' },
      { text: '很多', reason: '錯誤。很多是多{おお}い。' },
      { text: '好的', reason: '錯誤。好的是いい。' },
      { text: '元氣', reason: '錯誤。元氣是元気{げんき}。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '一緒的詞義',
      analysis: '一緒{いっしょ}意為「一起」。注意讀音中有促音「っ」和拗音「しょ」。',
      relatedRules: ['📖 本課 單字「一緒」'],
    },
  },
  // Q8 vocabulary — 今日
  {
    id: 'n5_u1_l2_q8',
    category: 'vocabulary',
    level: 'N5',
    stem: '「今日{きょう}」の意味{いみ}はどれですか。',
    stemZh: '「今日」的意思是哪個？',
    options: [
      { text: '明天', reason: '錯誤。明天是明日{あした}。' },
      { text: '昨天', reason: '錯誤。昨天是昨日{きのう}。' },
      { text: '哪裡', reason: '錯誤。哪裡是どこ。' },
      { text: '今天', reason: '正確。今日{きょう}意為今天。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '今日的詞義',
      analysis: '今日{きょう}意為今天。注意漢字讀作「きょう」而非「こんにち」（後者用於「今日は」寒暄語）。',
      relatedRules: ['📖 本課 單字「今日」'],
    },
  },
  // Q9 grammar — か
  {
    id: 'n5_u1_l2_q9',
    category: 'grammar',
    level: 'N5',
    stem: '山田{やまだ}さんは先生{せんせい}です＿＿。（想問「是老師嗎」）',
    stemZh: '山田先生是老師嗎？（選擇正確的句尾）',
    options: [
      { text: 'ね', reason: '錯誤。「ね」是確認語氣，不是純粹的提問。' },
      { text: 'よ', reason: '錯誤。「よ」是強調告知，不是提問。' },
      { text: 'か', reason: '正確。句尾加「か」構成疑問句。' },
      { text: 'を', reason: '錯誤。「を」是受詞助詞，不用在句尾。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '疑問助詞「か」',
      analysis: '日語中把「か」加在句尾即可把陳述句變成疑問句。「〜ですか」是最基本的敬體疑問句型。',
      relatedRules: ['📖 本課 文法「〜ですか」'],
    },
  },
  // Q10 grammar — ね
  {
    id: 'n5_u1_l2_q10',
    category: 'grammar',
    level: 'N5',
    stem: '今日{きょう}はいい天気{てんき}です＿＿。',
    stemZh: '今天天氣真好呢。',
    options: [
      { text: 'か', reason: '錯誤。「か」是疑問，但此句是感嘆確認。' },
      { text: 'ね', reason: '正確。「ね」用於尋求對方同意或確認共知事實。' },
      { text: 'を', reason: '錯誤。「を」是受詞助詞，不放在句尾。' },
      { text: 'に', reason: '錯誤。「に」是場所助詞，不放在句尾。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '終助詞「ね」的用法',
      analysis: '「ね」用在句尾，表示尋求聽者同意或確認。天氣是雙方共知的事實，用「ね」最自然。',
      relatedRules: ['📖 本課 文法「〜ですね」'],
    },
  },
  // Q11 grammar — も
  {
    id: 'n5_u1_l2_q11',
    category: 'grammar',
    level: 'N5',
    stem: 'A：「私{わたし}は学生{がくせい}です。」B：「私{わたし}＿＿学生{がくせい}です。」',
    stemZh: 'A：「我是學生。」B：「我也是學生。」',
    options: [
      { text: 'は', reason: '錯誤。「は」不能表達「也是」的意思。' },
      { text: 'の', reason: '錯誤。「の」是所有格，此處不適用。' },
      { text: 'が', reason: '錯誤。「が」是主格助詞，不表示「也」。' },
      { text: 'も', reason: '正確。「も」替代「は」使用，表示「也」。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '助詞「も」的用法',
      analysis: '「も」替代「は」使用，表示「也是」。注意「も」取代「は」的位置：「私も〜です」。',
      relatedRules: ['📖 本課 文法「AもB」'],
    },
  },
  // Q12 grammar — か的疑問句型
  {
    id: 'n5_u1_l2_q12',
    category: 'grammar',
    level: 'N5',
    stem: '佐藤{さとう}さん＿＿台湾{たいわん}ですか。',
    stemZh: '佐藤同學也是台灣嗎？',
    options: [
      { text: 'は', reason: '錯誤。「は」無法表達「也」的意思。' },
      { text: 'も', reason: '正確。「も」表示「也」，且句尾「か」構成疑問句。' },
      { text: 'の', reason: '錯誤。「の」是所有格，此處不適用。' },
      { text: 'が', reason: '錯誤。「が」不表示「也」。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「も」與「か」的組合',
      analysis: '「も」可以和疑問句「か」搭配使用。「佐藤さんも台湾ですか」＝「佐藤同學也是台灣嗎？」。',
      relatedRules: ['📖 本課 文法「AもB」', '📖 本課 文法「〜ですか」'],
    },
  },
  // Q13 grammar — ね vs よ vs か 的區分
  {
    id: 'n5_u1_l2_q13',
    category: 'grammar',
    level: 'N5',
    stem: '家族{かぞく}は多{おお}いです＿＿。（表示確認、感嘆）',
    stemZh: '家人很多呢。（表示確認、感嘆）',
    options: [
      { text: 'か', reason: '錯誤。「か」是疑問，此處是確認感嘆。' },
      { text: 'よ', reason: '錯誤。「よ」是告知新資訊，此處是雙方共知的事實。' },
      { text: 'を', reason: '錯誤。「を」是受詞助詞，不放在句尾。' },
      { text: 'ね', reason: '正確。「ね」表示確認或感嘆，適用於雙方共知的事實。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '「ね」的確認/感嘆用法',
      analysis: '「ね」用於確認雙方共知的事實或表示感嘆。「多いですね」帶有「真多呢」的語氣。',
      relatedRules: ['📖 本課 文法「〜ですね」'],
    },
  },
  // Q14 grammar — も的替代位置
  {
    id: 'n5_u1_l2_q14',
    category: 'grammar',
    level: 'N5',
    stem: '「お母{かあ}さん＿＿元気{げんき}です。」（母親也很有精神）',
    stemZh: '「母親也很有精神。」選擇正確的助詞。',
    options: [
      { text: 'も', reason: '正確。「も」替代「は」，表示母親也一樣。' },
      { text: 'は', reason: '錯誤。「は」無法表達「也」的意思，只是單純的主題標記。' },
      { text: 'が', reason: '錯誤。「が」是主格助詞，不表示「也」。' },
      { text: 'の', reason: '錯誤。「の」是所有格，此處不適用。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「も」替代「は」表示「也」',
      analysis: '前文提到父親很好，接著說母親「也」很好時，用「お母さんも」替代「お母さんは」。',
      relatedRules: ['📖 本課 文法「AもB」'],
    },
  },
  // Q15 grammar — 疑問句的回答
  {
    id: 'n5_u1_l2_q15',
    category: 'grammar',
    level: 'N5',
    stem: 'A：「お姉{ねえ}さんはどこですか。」B：「姉{あね}＿＿日本{にほん}です。」',
    stemZh: 'A：「姊姊在哪裡？」B：「姊姊也在日本。」',
    options: [
      { text: 'は', reason: '錯誤。語境需要表達「也」，「は」不夠。' },
      { text: 'が', reason: '錯誤。「が」不表示「也」。' },
      { text: 'も', reason: '正確。前文有其他人在日本，所以姊姊「也」在日本用「も」。' },
      { text: 'に', reason: '錯誤。「に」是場所助詞，此處需要主題/並列助詞。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「も」在對話中的實際運用',
      analysis: '當已提到其他家人在日本時，要說姊姊「也」在日本，就用「姉も日本です」。「も」替代「は」。',
      relatedRules: ['📖 本課 文法「AもB」', '📖 本課 文法「〜ですか」'],
    },
  },
]

// ─── Lesson 3 Quiz: 身邊的東西 ───
const l3Quiz: UnifiedQuestion[] = [
  // Q1 vocabulary — 時計
  {
    id: 'n5_u1_l3_q1',
    category: 'vocabulary',
    level: 'N5',
    stem: '「時計{とけい}」の意味{いみ}はどれですか。',
    stemZh: '「時計」的意思是哪個？',
    options: [
      { text: '電話', reason: '錯誤。電話是電話{でんわ}。' },
      { text: '鐘錶', reason: '正確。時計{とけい}意為鐘錶。' },
      { text: '書桌', reason: '錯誤。書桌是机{つくえ}。' },
      { text: '椅子', reason: '錯誤。椅子是椅子{いす}。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '時計的詞義',
      analysis: '時計{とけい}意為鐘、錶。「時」表示時間，「計」表示計量。',
      relatedRules: ['📖 本課 單字「時計」'],
    },
  },
  // Q2 vocabulary — 鉛筆
  {
    id: 'n5_u1_l3_q2',
    category: 'vocabulary',
    level: 'N5',
    stem: '「鉛筆{えんぴつ}」の意味{いみ}はどれですか。',
    stemZh: '「鉛筆」的意思是哪個？',
    options: [
      { text: '鉛筆', reason: '正確。鉛筆{えんぴつ}意為鉛筆。' },
      { text: '筆', reason: '錯誤。筆是ペン。' },
      { text: '紙', reason: '錯誤。紙是紙{かみ}。' },
      { text: '筆記本', reason: '錯誤。筆記本是ノート。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '鉛筆的詞義',
      analysis: '鉛筆{えんぴつ}意為鉛筆。注意讀音是「えんぴつ」而非「えんひつ」（連濁現象）。',
      relatedRules: ['📖 本課 單字「鉛筆」'],
    },
  },
  // Q3 vocabulary — 新しい ⇔ 古い
  {
    id: 'n5_u1_l3_q3',
    category: 'vocabulary',
    level: 'N5',
    stem: '「新{あたら}しい」の反対語{はんたいご}はどれですか。',
    stemZh: '「新しい」的反義詞是哪個？',
    options: [
      { text: '大{おお}きい', reason: '錯誤。大きい意為大的，不是反義詞。' },
      { text: '小{ちい}さい', reason: '錯誤。小さい意為小的，不是反義詞。' },
      { text: '古{ふる}い', reason: '正確。古い（舊的）是新しい（新的）的反義詞。' },
      { text: '長{なが}い', reason: '錯誤。長い意為長的，不是反義詞。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '形容詞反義詞配對',
      analysis: '新{あたら}しい（新的）⇔ 古{ふる}い（舊的）是基本的反義詞組合。兩者都是い形容詞。',
      relatedRules: ['📖 本課 單字「新しい・古い」'],
    },
  },
  // Q4 vocabulary — 窓
  {
    id: 'n5_u1_l3_q4',
    category: 'vocabulary',
    level: 'N5',
    stem: '「窓{まど}」は何{なん}ですか。',
    stemZh: '「窓」是什麼？',
    options: [
      { text: '門', reason: '錯誤。門是ドア。' },
      { text: '箱子', reason: '錯誤。箱子是箱{はこ}。' },
      { text: '桌子', reason: '錯誤。桌子是テーブル。' },
      { text: '窗戶', reason: '正確。窓{まど}意為窗戶。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '窓的詞義',
      analysis: '窓{まど}意為窗戶。是教室和建築物中常見的物品詞彙。',
      relatedRules: ['📖 本課 單字「窓」'],
    },
  },
  // Q5 vocabulary — 眼鏡
  {
    id: 'n5_u1_l3_q5',
    category: 'vocabulary',
    level: 'N5',
    stem: '「眼鏡{めがね}」の意味{いみ}はどれですか。',
    stemZh: '「眼鏡」的意思是哪個？',
    options: [
      { text: '相機', reason: '錯誤。相機是カメラ。' },
      { text: '眼鏡', reason: '正確。眼鏡{めがね}意為眼鏡。' },
      { text: '鐘錶', reason: '錯誤。鐘錶是時計{とけい}。' },
      { text: '電話', reason: '錯誤。電話是電話{でんわ}。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '眼鏡的詞義',
      analysis: '眼鏡{めがね}意為眼鏡。注意讀音是「めがね」（三個音節）。',
      relatedRules: ['📖 本課 單字「眼鏡」'],
    },
  },
  // Q6 vocabulary — 机
  {
    id: 'n5_u1_l3_q6',
    category: 'vocabulary',
    level: 'N5',
    stem: '「机{つくえ}」の意味{いみ}はどれですか。',
    stemZh: '「机」的意思是哪個？',
    options: [
      { text: '椅子', reason: '錯誤。椅子是椅子{いす}。' },
      { text: '紙', reason: '錯誤。紙是紙{かみ}。' },
      { text: '書桌', reason: '正確。机{つくえ}意為書桌。' },
      { text: '門', reason: '錯誤。門是ドア。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '机的詞義',
      analysis: '机{つくえ}意為書桌。注意「机」和テーブル（桌子）的區別：机多指書桌、辦公桌。',
      relatedRules: ['📖 本課 單字「机」'],
    },
  },
  // Q7 vocabulary — 電話
  {
    id: 'n5_u1_l3_q7',
    category: 'vocabulary',
    level: 'N5',
    stem: '「電話{でんわ}」の読{よ}み方{かた}はどれですか。',
    stemZh: '「電話」的讀法是哪個？',
    options: [
      { text: 'でんわ', reason: '正確。電話的讀音是でんわ。' },
      { text: 'でんば', reason: '錯誤。「話」的讀音是「わ」不是「ば」。' },
      { text: 'てんわ', reason: '錯誤。「電」的讀音是「でん」不是「てん」。' },
      { text: 'でんか', reason: '錯誤。「話」的讀音是「わ」不是「か」。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '電話的讀音',
      analysis: '電話{でんわ}意為電話。「電」讀「でん」、「話」讀「わ」。',
      relatedRules: ['📖 本課 單字「電話」'],
    },
  },
  // Q8 vocabulary — ノート
  {
    id: 'n5_u1_l3_q8',
    category: 'vocabulary',
    level: 'N5',
    stem: '「ノート」の意味{いみ}はどれですか。',
    stemZh: '「ノート」的意思是哪個？',
    options: [
      { text: '書', reason: '錯誤。書是本{ほん}。' },
      { text: '鉛筆', reason: '錯誤。鉛筆是鉛筆{えんぴつ}。' },
      { text: '桌子', reason: '錯誤。桌子是テーブル。' },
      { text: '筆記本', reason: '正確。ノート意為筆記本。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: 'ノート的詞義',
      analysis: 'ノート是外來語，源自英語 note，意為筆記本。是文具類的基本詞彙。',
      relatedRules: ['📖 本課 單字「ノート」'],
    },
  },
  // Q9 grammar — の
  {
    id: 'n5_u1_l3_q9',
    category: 'grammar',
    level: 'N5',
    stem: 'これは田中{たなか}さん＿＿本{ほん}です。',
    stemZh: '這是田中先生的書。',
    options: [
      { text: 'は', reason: '錯誤。「は」是主題助詞，不表示所有。' },
      { text: 'が', reason: '錯誤。「が」是主格助詞，不表示所有。' },
      { text: 'の', reason: '正確。「の」連接名詞表示所有格。「AのB」＝「A的B」。' },
      { text: 'を', reason: '錯誤。「を」是受詞助詞，不表示所有。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '所有格助詞「の」',
      analysis: '「の」放在兩個名詞之間表示所屬關係。「田中さんの本」＝「田中先生的書」。',
      relatedRules: ['📖 本課 文法「AのB」'],
    },
  },
  // Q10 grammar — じゃないです
  {
    id: 'n5_u1_l3_q10',
    category: 'grammar',
    level: 'N5',
    stem: 'これはペン＿＿。鉛筆{えんぴつ}です。',
    stemZh: '這不是筆。是鉛筆。',
    options: [
      { text: 'です', reason: '錯誤。「です」是肯定形，但語境需要否定。' },
      { text: 'じゃないです', reason: '正確。「じゃないです」是「です」的否定形。' },
      { text: 'でした', reason: '錯誤。「でした」是過去肯定形。' },
      { text: 'ですか', reason: '錯誤。「ですか」是疑問形。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '否定句型「じゃないです」',
      analysis: '「です」的否定是「じゃないです」（口語）或「ではありません」（書面語）。用來否定名詞句。',
      relatedRules: ['📖 本課 文法「〜じゃないです」'],
    },
  },
  // Q11 grammar — よ
  {
    id: 'n5_u1_l3_q11',
    category: 'grammar',
    level: 'N5',
    stem: 'A：「これは何{なん}ですか。」B：「それはカメラです＿＿。」',
    stemZh: 'A：「這是什麼？」B：「那是相機喔。」',
    options: [
      { text: 'ね', reason: '錯誤。「ね」用於對方已知的資訊，但A不知道所以才問。' },
      { text: 'か', reason: '錯誤。B是回答而非提問，不需要「か」。' },
      { text: 'を', reason: '錯誤。「を」是受詞助詞，不用在句尾。' },
      { text: 'よ', reason: '正確。「よ」用來告知對方不知道的新資訊。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '終助詞「よ」的用法',
      analysis: '「よ」用於告知對方不知道的新資訊。A不知道那是什麼，所以B用「よ」告知。',
      relatedRules: ['📖 本課 文法「〜ですよ」'],
    },
  },
  // Q12 grammar — の + じゃないです 組合
  {
    id: 'n5_u1_l3_q12',
    category: 'grammar',
    level: 'N5',
    stem: 'この紙{かみ}は先生{せんせい}＿＿じゃないです。私{わたし}のです。',
    stemZh: '這張紙不是老師的。是我的。',
    options: [
      { text: 'の', reason: '正確。「先生の」表示「老師的」，後面接否定「じゃないです」。' },
      { text: 'は', reason: '錯誤。「は」是主題助詞，此處需要所有格。' },
      { text: 'が', reason: '錯誤。「が」是主格助詞，此處不適用。' },
      { text: 'も', reason: '錯誤。「も」是「也」的意思，此處不適用。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「の」和否定的組合使用',
      analysis: '「先生のじゃないです」表示「不是老師的」。「の」表示所有格，「じゃないです」否定。',
      relatedRules: ['📖 本課 文法「AのB」', '📖 本課 文法「〜じゃないです」'],
    },
  },
  // Q13 grammar — じゃないです 判斷
  {
    id: 'n5_u1_l3_q13',
    category: 'grammar',
    level: 'N5',
    stem: '下{した}の文{ぶん}で正{ただ}しいのはどれですか。（這不是舊的鐘錶）',
    stemZh: '下面哪個句子能表達「這不是舊的鐘錶」？',
    options: [
      { text: 'これは古{ふる}い時計{とけい}です。', reason: '錯誤。這是肯定句「這是舊的鐘錶」。' },
      { text: 'これは古{ふる}い時計{とけい}ですか。', reason: '錯誤。這是疑問句「這是舊的鐘錶嗎」。' },
      { text: 'これは古{ふる}い時計{とけい}じゃないです。', reason: '正確。「じゃないです」表示否定，符合語意。' },
      { text: 'これは古{ふる}い時計{とけい}でした。', reason: '錯誤。「でした」是過去肯定，不是否定。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '否定句型的辨識',
      analysis: '「〜じゃないです」用於否定名詞句。「古い時計じゃないです」＝「不是舊的鐘錶」。',
      relatedRules: ['📖 本課 文法「〜じゃないです」'],
    },
  },
  // Q14 grammar — よ vs ね 的區別
  {
    id: 'n5_u1_l3_q14',
    category: 'grammar',
    level: 'N5',
    stem: '（B知道A不知道箱子裡有什麼）B：「箱{はこ}の中{なか}に眼鏡{めがね}があります＿＿。」',
    stemZh: 'B告知A：「箱子裡面有眼鏡喔。」',
    options: [
      { text: 'か', reason: '錯誤。B不是在提問，是在告知。' },
      { text: 'よ', reason: '正確。「よ」用於告知對方不知道的新資訊。' },
      { text: 'ね', reason: '錯誤。「ね」用於雙方共知的事實，但A不知道。' },
      { text: 'を', reason: '錯誤。「を」是受詞助詞，不用在句尾。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「よ」告知新資訊',
      analysis: '對方不知道的新資訊用「よ」，雙方共知的事實用「ね」。A不知道箱子裡有什麼，所以用「よ」。',
      relatedRules: ['📖 本課 文法「〜ですよ」'],
    },
  },
  // Q15 grammar — の的所屬用法
  {
    id: 'n5_u1_l3_q15',
    category: 'grammar',
    level: 'N5',
    stem: '椅子{いす}の下{した}にも本{ほん}があります。この本{ほん}は＿＿のです。',
    stemZh: '椅子下面也有書。這本書是老師的。',
    options: [
      { text: '私{わたし}', reason: '錯誤。題意是「老師的」，不是「我的」。' },
      { text: '田中{たなか}さん', reason: '錯誤。題意是「老師的」，不是「田中先生的」。' },
      { text: '先生{せんせい}', reason: '正確。「先生の」意為「老師的」，「の」表示所有格。' },
      { text: '友達{ともだち}', reason: '錯誤。題意是「老師的」，不是「朋友的」。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「〜のです」表示「是〜的」',
      analysis: '「先生のです」意為「是老師的」。「AのB」中省略B時，用「Aの」即可。',
      relatedRules: ['📖 本課 文法「AのB」'],
    },
  },
]

// ─── Lesson 4 Quiz: 指東西・這是什麼 ───
const l4Quiz: UnifiedQuestion[] = [
  // Q1 vocabulary — これ/それ/あれ
  {
    id: 'n5_u1_l4_q1',
    category: 'vocabulary',
    level: 'N5',
    stem: '（手{て}に持{も}っているものを指{さ}して）＿＿は何{なん}ですか。',
    stemZh: '（指著手中的東西）這是什麼？',
    options: [
      { text: 'それ', reason: '錯誤。「それ」指靠近聽者的事物。' },
      { text: 'あれ', reason: '錯誤。「あれ」指離雙方都遠的事物。' },
      { text: 'これ', reason: '正確。「これ」指靠近說話者的事物。手中的東西用「これ」。' },
      { text: 'どれ', reason: '錯誤。「どれ」是疑問詞「哪個」。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '指示代名詞 こ・そ・あ',
      analysis: '手中的東西靠近自己，用「これ」。これ（近己）、それ（近對方）、あれ（遠離雙方）。',
      relatedRules: ['📖 本課 單字「これ・それ・あれ」'],
    },
  },
  // Q2 vocabulary — 傘
  {
    id: 'n5_u1_l4_q2',
    category: 'vocabulary',
    level: 'N5',
    stem: '「傘{かさ}」の意味{いみ}はどれですか。',
    stemZh: '「傘」的意思是哪個？',
    options: [
      { text: '傘', reason: '正確。傘{かさ}意為傘。' },
      { text: '包包', reason: '錯誤。包包是かばん。' },
      { text: '帽子', reason: '錯誤。帽子是帽子{ぼうし}。' },
      { text: '眼鏡', reason: '錯誤。眼鏡是眼鏡{めがね}。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '傘的詞義',
      analysis: '傘{かさ}意為傘。日常生活中很常用的物品詞彙。',
      relatedRules: ['📖 本課 單字「傘」'],
    },
  },
  // Q3 vocabulary — かばん
  {
    id: 'n5_u1_l4_q3',
    category: 'vocabulary',
    level: 'N5',
    stem: '「かばん」の意味{いみ}はどれですか。',
    stemZh: '「かばん」的意思是哪個？',
    options: [
      { text: '帽子', reason: '錯誤。帽子是帽子{ぼうし}。' },
      { text: '傘', reason: '錯誤。傘是傘{かさ}。' },
      { text: '包包', reason: '正確。かばん意為包包。' },
      { text: '鞋子', reason: '錯誤。鞋子是靴{くつ}。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: 'かばん的詞義',
      analysis: 'かばん意為包包、書包。這個詞通常用平假名書寫，不常寫漢字。',
      relatedRules: ['📖 本課 單字「かばん」'],
    },
  },
  // Q4 vocabulary — 帽子
  {
    id: 'n5_u1_l4_q4',
    category: 'vocabulary',
    level: 'N5',
    stem: '「帽子{ぼうし}」の意味{いみ}はどれですか。',
    stemZh: '「帽子」的意思是哪個？',
    options: [
      { text: '傘', reason: '錯誤。傘是傘{かさ}。' },
      { text: '包包', reason: '錯誤。包包是かばん。' },
      { text: '鐘錶', reason: '錯誤。鐘錶是時計{とけい}。' },
      { text: '帽子', reason: '正確。帽子{ぼうし}意為帽子。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '帽子的詞義',
      analysis: '帽子{ぼうし}意為帽子。注意讀音是「ぼうし」而非「ぼうこ」。',
      relatedRules: ['📖 本課 單字「帽子」'],
    },
  },
  // Q5 vocabulary — それ
  {
    id: 'n5_u1_l4_q5',
    category: 'vocabulary',
    level: 'N5',
    stem: '（相手{あいて}が持{も}っているものについて）「＿＿は何{なん}ですか。」',
    stemZh: '（關於對方手中的東西）「那是什麼？」',
    options: [
      { text: 'これ', reason: '錯誤。「これ」指靠近自己的事物，不指對方手中的。' },
      { text: 'それ', reason: '正確。「それ」指靠近聽者的事物。對方手中的東西用「それ」。' },
      { text: 'あれ', reason: '錯誤。「あれ」指離雙方都遠的事物。' },
      { text: 'どれ', reason: '錯誤。「どれ」是疑問詞「哪個」，不是指示詞。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「それ」指靠近對方的事物',
      analysis: '對方持有的東西靠近對方，用「それ」。これ＝近己，それ＝近對方，あれ＝遠離雙方。',
      relatedRules: ['📖 本課 單字「それ」'],
    },
  },
  // Q6 vocabulary — 上・下・中
  {
    id: 'n5_u1_l4_q6',
    category: 'vocabulary',
    level: 'N5',
    stem: '「机{つくえ}の上{うえ}」の「上{うえ}」はどんな意味{いみ}ですか。',
    stemZh: '「机の上」中的「上」是什麼意思？',
    options: [
      { text: '下面', reason: '錯誤。下面是下{した}。' },
      { text: '裡面', reason: '錯誤。裡面是中{なか}。' },
      { text: '上面', reason: '正確。上{うえ}意為上面。' },
      { text: '旁邊', reason: '錯誤。旁邊是そば。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '位置詞「上」',
      analysis: '上{うえ}意為上面。「机の上」＝「書桌的上面」。相關位置詞：下{した}（下面）、中{なか}（裡面）。',
      relatedRules: ['📖 本課 單字「上」'],
    },
  },
  // Q7 vocabulary — あれ
  {
    id: 'n5_u1_l4_q7',
    category: 'vocabulary',
    level: 'N5',
    stem: '（遠{とお}くにあるものを指{さ}して）「＿＿は学校{がっこう}ですか。」',
    stemZh: '（指著遠處的東西）「那是學校嗎？」',
    options: [
      { text: 'あれ', reason: '正確。「あれ」指離說話者和聽者都遠的事物。' },
      { text: 'これ', reason: '錯誤。「これ」指靠近自己的事物。' },
      { text: 'それ', reason: '錯誤。「それ」指靠近聽者的事物。' },
      { text: 'どれ', reason: '錯誤。「どれ」是疑問詞「哪個」。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「あれ」指遠處事物',
      analysis: '遠離雙方的事物用「あれ」。日語指示詞三系列：これ（近己）、それ（近對方）、あれ（遠）。',
      relatedRules: ['📖 本課 單字「あれ」'],
    },
  },
  // Q8 vocabulary — どれ
  {
    id: 'n5_u1_l4_q8',
    category: 'vocabulary',
    level: 'N5',
    stem: 'A：「＿＿が佐藤{さとう}さんのかばんですか。」B：「あの赤{あか}いかばんです。」',
    stemZh: 'A：「哪個是佐藤同學的包包？」B：「那個紅色的包包。」',
    options: [
      { text: 'これ', reason: '錯誤。「これ」是指「這個」，不是疑問。' },
      { text: 'それ', reason: '錯誤。「それ」是指「那個」，不是疑問。' },
      { text: 'あれ', reason: '錯誤。「あれ」是指「那個（遠處）」，不是疑問。' },
      { text: 'どれ', reason: '正確。「どれ」是疑問詞，意為「哪個」。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '疑問詞「どれ」',
      analysis: '「どれ」是疑問詞，用於從多個事物中詢問「哪個」。是こ・そ・あ・ど系列的疑問形。',
      relatedRules: ['📖 本課 單字「どれ」'],
    },
  },
  // Q9 grammar — この
  {
    id: 'n5_u1_l4_q9',
    category: 'grammar',
    level: 'N5',
    stem: '＿＿本{ほん}は私{わたし}のです。（指著靠近自己的書）',
    stemZh: '這本書是我的。（指著靠近自己的書）',
    options: [
      { text: 'この', reason: '正確。「この」＋名詞，指靠近說話者的事物。' },
      { text: 'その', reason: '錯誤。「その」指靠近聽者的事物。' },
      { text: 'あの', reason: '錯誤。「あの」指離雙方都遠的事物。' },
      { text: 'これ', reason: '錯誤。「これ」是代名詞，不能直接接名詞。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '連體詞 この＋名詞',
      analysis: '修飾名詞時用「この/その/あの」。「これ/それ/あれ」獨立使用，不能直接接名詞。',
      relatedRules: ['📖 本課 文法「この/その/あの＋名詞」'],
    },
  },
  // Q10 grammar — その
  {
    id: 'n5_u1_l4_q10',
    category: 'grammar',
    level: 'N5',
    stem: '（相手{あいて}の近{ちか}くの帽子{ぼうし}について）「＿＿帽子{ぼうし}は私{わたし}のです。」',
    stemZh: '（對方附近的帽子）「那頂帽子是我的。」',
    options: [
      { text: 'この', reason: '錯誤。「この」指靠近自己的事物。' },
      { text: 'その', reason: '正確。「その」＋名詞，指靠近聽者的事物。' },
      { text: 'あの', reason: '錯誤。「あの」指離雙方都遠的事物。' },
      { text: 'それ', reason: '錯誤。「それ」是代名詞，不能直接接名詞。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '連體詞 その＋名詞',
      analysis: '「その」＋名詞表示靠近對方的事物。對方附近的帽子用「その帽子」。',
      relatedRules: ['📖 本課 文法「この/その/あの＋名詞」'],
    },
  },
  // Q11 grammar — これ vs この 的區別
  {
    id: 'n5_u1_l4_q11',
    category: 'grammar',
    level: 'N5',
    stem: '下{した}の文{ぶん}で正{ただ}しいのはどれですか。',
    stemZh: '下面哪個句子是正確的？',
    options: [
      { text: 'これ傘{かさ}は私{わたし}のです。', reason: '錯誤。「これ」不能直接接名詞，應用「この」。' },
      { text: 'この傘{かさ}は私{わたし}のです。', reason: '正確。修飾名詞用「この」＋名詞。' },
      { text: 'このは傘{かさ}です。', reason: '錯誤。「この」後面直接接名詞，不需要「は」。' },
      { text: 'これの傘{かさ}は私{わたし}のです。', reason: '錯誤。不存在「これの」的用法，應用「この」。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「この」和「これ」的區別',
      analysis: '修飾名詞時必須用「この/その/あの」＋名詞。「これ/それ/あれ」是代名詞，獨立使用。',
      relatedRules: ['📖 本課 文法「この/その/あの＋名詞」', '📖 本課 單字「これ・それ・あれ」'],
    },
  },
  // Q12 grammar — あの
  {
    id: 'n5_u1_l4_q12',
    category: 'grammar',
    level: 'N5',
    stem: '（遠{とお}くの建物{たてもの}を見{み}て）「＿＿建物{たてもの}は学校{がっこう}ですか。」',
    stemZh: '（看著遠處的建築物）「那棟建築物是學校嗎？」',
    options: [
      { text: 'この', reason: '錯誤。「この」指靠近自己的事物。' },
      { text: 'その', reason: '錯誤。「その」指靠近聽者的事物。' },
      { text: 'あれ', reason: '錯誤。「あれ」是代名詞，不能直接接名詞。' },
      { text: 'あの', reason: '正確。「あの」＋名詞，指離雙方都遠的事物。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '連體詞 あの＋名詞',
      analysis: '遠離雙方的事物修飾名詞時用「あの」＋名詞。「あの建物」＝「那棟建築物（遠處）」。',
      relatedRules: ['📖 本課 文法「この/その/あの＋名詞」'],
    },
  },
  // Q13 grammar — どの
  {
    id: 'n5_u1_l4_q13',
    category: 'grammar',
    level: 'N5',
    stem: '「＿＿かばんが先生{せんせい}のですか。」',
    stemZh: '「哪個包包是老師的？」',
    options: [
      { text: 'この', reason: '錯誤。「この」是指定「這個」，不是疑問。' },
      { text: 'どの', reason: '正確。「どの」＋名詞是疑問連體詞，意為「哪個〜」。' },
      { text: 'あの', reason: '錯誤。「あの」是指定「那個」，不是疑問。' },
      { text: 'その', reason: '錯誤。「その」是指定「那個」，不是疑問。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '疑問連體詞「どの」',
      analysis: '「どの」＋名詞用於詢問「哪個〜」。是この/その/あの系列的疑問形。',
      relatedRules: ['📖 本課 單字「どの」', '📖 本課 文法「この/その/あの＋名詞」'],
    },
  },
  // Q14 grammar — 指示詞綜合
  {
    id: 'n5_u1_l4_q14',
    category: 'grammar',
    level: 'N5',
    stem: 'A：「これは何{なん}ですか。」B：「＿＿は私{わたし}のかばんですよ。中{なか}に傘{かさ}があります。」',
    stemZh: 'A：「這是什麼？」B：「那是我的包包喔。裡面有傘。」',
    options: [
      { text: 'これ', reason: '錯誤。A手中的東西對B來說靠近A，B應用「それ」回指。' },
      { text: 'あれ', reason: '錯誤。「あれ」指遠處，但東西在A手中。' },
      { text: 'それ', reason: '正確。A說「これ」，B回答時對同一事物用「それ」（因為靠近A）。' },
      { text: 'どれ', reason: '錯誤。「どれ」是疑問詞，B是在回答不是提問。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '對話中指示詞的轉換',
      analysis: 'A用「これ」指自己手中的東西，B回答時因為東西靠近A，所以用「それ」。指示詞隨說話者視角轉換。',
      relatedRules: ['📖 本課 單字「これ・それ・あれ」'],
    },
  },
  // Q15 grammar — 位置 + 指示詞
  {
    id: 'n5_u1_l4_q15',
    category: 'grammar',
    level: 'N5',
    stem: '椅子{いす}の下{した}にかばんがあります。＿＿かばんは先生{せんせい}のですよ。',
    stemZh: '椅子下面有包包。那個包包是老師的喔。',
    options: [
      { text: 'この', reason: '錯誤。「この」指靠近自己的，但包包在椅子下。' },
      { text: 'その', reason: '錯誤。「その」指靠近對方的，此處是前文提到的包包。' },
      { text: 'どの', reason: '錯誤。「どの」是疑問詞，此處是在指定。' },
      { text: 'あの', reason: '正確。提及前文中離雙方都有距離的事物，用「あの」最自然。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '「あの」指前文提到的遠處事物',
      analysis: '「あの」除了指遠處事物外，也可用於指前文提到的、離雙方有距離的事物。',
      relatedRules: ['📖 本課 文法「この/その/あの＋名詞」'],
    },
  },
]

// ─── Lesson 5 Quiz: 位置與場所 ───
const l5Quiz: UnifiedQuestion[] = [
  // Q1 vocabulary — 駅
  {
    id: 'n5_u1_l5_q1',
    category: 'vocabulary',
    level: 'N5',
    stem: '「駅{えき}」の意味{いみ}はどれですか。',
    stemZh: '「駅」的意思是哪個？',
    options: [
      { text: '醫院', reason: '錯誤。醫院是病院{びょういん}。' },
      { text: '車站', reason: '正確。駅{えき}意為車站。' },
      { text: '銀行', reason: '錯誤。銀行是銀行{ぎんこう}。' },
      { text: '學校', reason: '錯誤。學校是学校{がっこう}。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '駅的詞義',
      analysis: '駅{えき}意為車站。是日本最常用的交通設施詞彙之一。',
      relatedRules: ['📖 本課 單字「駅」'],
    },
  },
  // Q2 vocabulary — 隣
  {
    id: 'n5_u1_l5_q2',
    category: 'vocabulary',
    level: 'N5',
    stem: '「隣{となり}」の意味{いみ}はどれですか。',
    stemZh: '「隣」的意思是哪個？',
    options: [
      { text: '上面', reason: '錯誤。上面是上{うえ}。' },
      { text: '下面', reason: '錯誤。下面是下{した}。' },
      { text: '裡面', reason: '錯誤。裡面是中{なか}。' },
      { text: '旁邊', reason: '正確。隣{となり}意為旁邊、隔壁。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '位置詞彙：隣',
      analysis: '隣{となり}意為旁邊、隔壁。常用於描述建築物或座位的相對位置。',
      relatedRules: ['📖 本課 單字「隣」'],
    },
  },
  // Q3 vocabulary — 入口 ⇔ 出口
  {
    id: 'n5_u1_l5_q3',
    category: 'vocabulary',
    level: 'N5',
    stem: '「入口{いりぐち}」の反対語{はんたいご}はどれですか。',
    stemZh: '「入口」的反義詞是哪個？',
    options: [
      { text: '出口{でぐち}', reason: '正確。入口（入口）⇔ 出口（出口）。' },
      { text: '窓{まど}', reason: '錯誤。窓是窗戶，不是反義詞。' },
      { text: '建物{たてもの}', reason: '錯誤。建物是建築物，不是反義詞。' },
      { text: '交番{こうばん}', reason: '錯誤。交番是派出所，不是反義詞。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '入口和出口的配對',
      analysis: '入口{いりぐち}⇔出口{でぐち}。「入」＝進入，「出」＝出去，「口」＝口/出入處。',
      relatedRules: ['📖 本課 單字「入口・出口」'],
    },
  },
  // Q4 vocabulary — 右 ⇔ 左
  {
    id: 'n5_u1_l5_q4',
    category: 'vocabulary',
    level: 'N5',
    stem: '「右{みぎ}」の反対語{はんたいご}はどれですか。',
    stemZh: '「右」的反義詞是哪個？',
    options: [
      { text: '前{まえ}', reason: '錯誤。前是前面，不是右的反義詞。' },
      { text: '後{うし}ろ', reason: '錯誤。後ろ是後面，不是右的反義詞。' },
      { text: '左{ひだり}', reason: '正確。左（左邊）是右（右邊）的反義詞。' },
      { text: '外{そと}', reason: '錯誤。外是外面，不是右的反義詞。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '方位詞反義配對',
      analysis: '右{みぎ}（右邊）⇔左{ひだり}（左邊）。其他配對：前{まえ}⇔後{うし}ろ。',
      relatedRules: ['📖 本課 單字「右・左」'],
    },
  },
  // Q5 vocabulary — 病院
  {
    id: 'n5_u1_l5_q5',
    category: 'vocabulary',
    level: 'N5',
    stem: '「病院{びょういん}」の意味{いみ}はどれですか。',
    stemZh: '「病院」的意思是哪個？',
    options: [
      { text: '郵局', reason: '錯誤。郵局是郵便局{ゆうびんきょく}。' },
      { text: '公園', reason: '錯誤。公園是公園{こうえん}。' },
      { text: '醫院', reason: '正確。病院{びょういん}意為醫院。' },
      { text: '圖書館', reason: '錯誤。圖書館是図書館{としょかん}。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '病院的詞義',
      analysis: '病院{びょういん}意為醫院。「病」＝生病，「院」＝院所。注意讀音中有拗音「びょう」。',
      relatedRules: ['📖 本課 單字「病院」'],
    },
  },
  // Q6 vocabulary — 図書館
  {
    id: 'n5_u1_l5_q6',
    category: 'vocabulary',
    level: 'N5',
    stem: '「図書館{としょかん}」の意味{いみ}はどれですか。',
    stemZh: '「図書館」的意思是哪個？',
    options: [
      { text: '百貨公司', reason: '錯誤。百貨公司是デパート。' },
      { text: '電影院', reason: '錯誤。電影院是映画館{えいがかん}。' },
      { text: '咖啡店', reason: '錯誤。咖啡店是喫茶店{きっさてん}。' },
      { text: '圖書館', reason: '正確。図書館{としょかん}意為圖書館。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '図書館的詞義',
      analysis: '図書館{としょかん}意為圖書館。「図書」＝圖書，「館」＝館舍。',
      relatedRules: ['📖 本課 單字「図書館」'],
    },
  },
  // Q7 vocabulary — 前 ⇔ 後ろ
  {
    id: 'n5_u1_l5_q7',
    category: 'vocabulary',
    level: 'N5',
    stem: '「後{うし}ろ」の意味{いみ}はどれですか。',
    stemZh: '「後ろ」的意思是哪個？',
    options: [
      { text: '後面', reason: '正確。後{うし}ろ意為後面。' },
      { text: '前面', reason: '錯誤。前面是前{まえ}。' },
      { text: '外面', reason: '錯誤。外面是外{そと}。' },
      { text: '旁邊', reason: '錯誤。旁邊是隣{となり}。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '位置詞「後ろ」',
      analysis: '後{うし}ろ意為後面。前{まえ}（前面）⇔後ろ（後面）是基本方位配對。',
      relatedRules: ['📖 本課 單字「後ろ」'],
    },
  },
  // Q8 vocabulary — デパート
  {
    id: 'n5_u1_l5_q8',
    category: 'vocabulary',
    level: 'N5',
    stem: '「デパート」の意味{いみ}はどれですか。',
    stemZh: '「デパート」的意思是哪個？',
    options: [
      { text: '派出所', reason: '錯誤。派出所是交番{こうばん}。' },
      { text: '百貨公司', reason: '正確。デパート意為百貨公司。' },
      { text: '車站', reason: '錯誤。車站是駅{えき}。' },
      { text: '銀行', reason: '錯誤。銀行是銀行{ぎんこう}。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: 'デパート的詞義',
      analysis: 'デパート是外來語，源自英語 department store，意為百貨公司。',
      relatedRules: ['📖 本課 單字「デパート」'],
    },
  },
  // Q9 grammar — があります
  {
    id: 'n5_u1_l5_q9',
    category: 'grammar',
    level: 'N5',
    stem: '机{つくえ}の上{うえ}に本{ほん}＿＿。',
    stemZh: '書桌上有書。',
    options: [
      { text: 'がいます', reason: '錯誤。「います」用於有生命的事物，本是無生命物。' },
      { text: 'をあります', reason: '錯誤。存在句用「が」而非「を」。' },
      { text: 'があります', reason: '正確。本是無生命物體，用「があります」表示存在。' },
      { text: 'はいます', reason: '錯誤。存在的新資訊用「が」，且本是無生命物。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '存在動詞「あります」',
      analysis: '無生命物體（本、時計等）用「あります」，有生命（人、動物）用「います」。',
      relatedRules: ['📖 本課 文法「場所に〜があります」'],
    },
  },
  // Q10 grammar — がいます
  {
    id: 'n5_u1_l5_q10',
    category: 'grammar',
    level: 'N5',
    stem: '公園{こうえん}に猫{ねこ}＿＿。',
    stemZh: '公園裡有貓。',
    options: [
      { text: 'があります', reason: '錯誤。「あります」用於無生命物體，猫是動物。' },
      { text: 'がいます', reason: '正確。猫是有生命的動物，用「がいます」。' },
      { text: 'にいます', reason: '錯誤。場所後面已經有「に」，主語用「が」。' },
      { text: 'はあります', reason: '錯誤。存在句用「が」，且猫是有生命物。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '存在動詞「います」',
      analysis: '動物、人等有生命的存在用「います」。句型為「場所に〜がいます」。',
      relatedRules: ['📖 本課 文法「場所に〜がいます」'],
    },
  },
  // Q11 grammar — に（場所助詞）
  {
    id: 'n5_u1_l5_q11',
    category: 'grammar',
    level: 'N5',
    stem: '銀行{ぎんこう}は郵便局{ゆうびんきょく}の隣{となり}＿＿あります。',
    stemZh: '銀行在郵局旁邊。',
    options: [
      { text: 'で', reason: '錯誤。「で」標記動作進行的場所，此處是靜態存在。' },
      { text: 'を', reason: '錯誤。「を」是受詞助詞，不用於場所。' },
      { text: 'は', reason: '錯誤。「は」是主題助詞，此處需要場所助詞。' },
      { text: 'に', reason: '正確。「に」標記存在的場所。「場所にあります」。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '場所助詞「に」',
      analysis: '存在句中，場所後面用「に」。「場所にあります/います」表示「在某處有〜」。',
      relatedRules: ['📖 本課 文法「〜に」'],
    },
  },
  // Q12 grammar — どこ
  {
    id: 'n5_u1_l5_q12',
    category: 'grammar',
    level: 'N5',
    stem: '図書館{としょかん}は＿＿にありますか。',
    stemZh: '圖書館在哪裡？',
    options: [
      { text: 'なに', reason: '錯誤。「なに」是「什麼」，問的不是場所。' },
      { text: 'だれ', reason: '錯誤。「だれ」是「誰」，問的不是人。' },
      { text: 'どこ', reason: '正確。「どこ」是疑問詞「哪裡」。' },
      { text: 'いつ', reason: '錯誤。「いつ」是「什麼時候」，問的不是時間。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '疑問詞「どこ」',
      analysis: '問場所用「どこ」。「〜はどこにありますか」是問地點的基本句型。',
      relatedRules: ['📖 本課 文法「〜に」'],
    },
  },
  // Q13 grammar — あります vs います 判斷
  {
    id: 'n5_u1_l5_q13',
    category: 'grammar',
    level: 'N5',
    stem: '学校{がっこう}の前{まえ}に子供{こども}＿＿。',
    stemZh: '學校前面有小孩。',
    options: [
      { text: 'があります', reason: '錯誤。「あります」用於無生命物，子供（小孩）是人。' },
      { text: 'をいます', reason: '錯誤。存在句用「が」而非「を」。' },
      { text: 'がいます', reason: '正確。子供是有生命的人，用「がいます」。' },
      { text: 'にあります', reason: '錯誤。場所後面已有「に」，主語用「が」。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「います」用於有生命物',
      analysis: '子供{こども}（小孩）是有生命的人，用「います」。判斷關鍵：有生命→います，無生命→あります。',
      relatedRules: ['📖 本課 文法「場所に〜がいます」'],
    },
  },
  // Q14 grammar — に vs で
  {
    id: 'n5_u1_l5_q14',
    category: 'grammar',
    level: 'N5',
    stem: '交番{こうばん}は映画館{えいがかん}の右{みぎ}＿＿あります。',
    stemZh: '派出所在電影院的右邊。',
    options: [
      { text: 'に', reason: '正確。「に」標記靜態存在的場所。' },
      { text: 'で', reason: '錯誤。「で」用於動作發生的場所，此處是靜態存在。' },
      { text: 'を', reason: '錯誤。「を」是受詞助詞，不用於標記場所。' },
      { text: 'が', reason: '錯誤。「が」是主格助詞，不用於標記場所。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「に」與「で」的區別',
      analysis: '靜態存在用「に」（〜にあります），動作發生的場所用「で」（〜で食べます）。此處是靜態存在用「に」。',
      relatedRules: ['📖 本課 文法「〜に」'],
    },
  },
  // Q15 grammar — 存在句綜合
  {
    id: 'n5_u1_l5_q15',
    category: 'grammar',
    level: 'N5',
    stem: '下{した}の文{ぶん}で正{ただ}しいのはどれですか。',
    stemZh: '下面哪個句子是正確的？',
    options: [
      { text: '公園{こうえん}に犬{いぬ}があります。', reason: '錯誤。犬（狗）是有生命物，不能用「あります」。' },
      { text: '机{つくえ}の上{うえ}に本{ほん}がいます。', reason: '錯誤。本（書）是無生命物，不能用「います」。' },
      { text: '喫茶店{きっさてん}は駅{えき}の外{そと}にあります。', reason: '正確。場所用「に」，建築物（無生命）用「あります」。' },
      { text: '病院{びょういん}は学校{がっこう}の後{うし}ろであります。', reason: '錯誤。靜態存在用「に」而非「で」。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '存在句的綜合判斷',
      analysis: '存在句三要素：(1)場所用「に」，(2)有生命用「います」，(3)無生命用「あります」。',
      relatedRules: ['📖 本課 文法「場所に〜があります」', '📖 本課 文法「場所に〜がいます」', '📖 本課 文法「〜に」'],
    },
  },
]

// ─── Lesson 6 Quiz: 興趣與喜好 ───
const l6Quiz: UnifiedQuestion[] = [
  // Q1 vocabulary — 音楽
  {
    id: 'n5_u1_l6_q1',
    category: 'vocabulary',
    level: 'N5',
    stem: '「音楽{おんがく}」の意味{いみ}はどれですか。',
    stemZh: '「音楽」的意思是哪個？',
    options: [
      { text: '電影', reason: '錯誤。電影是映画{えいが}。' },
      { text: '音樂', reason: '正確。音楽{おんがく}意為音樂。' },
      { text: '照片', reason: '錯誤。照片是写真{しゃしん}。' },
      { text: '運動', reason: '錯誤。運動是スポーツ。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '音楽的詞義',
      analysis: '音楽{おんがく}意為音樂。「音」＝聲音，「楽」＝快樂。',
      relatedRules: ['📖 本課 單字「音楽」'],
    },
  },
  // Q2 vocabulary — 散歩
  {
    id: 'n5_u1_l6_q2',
    category: 'vocabulary',
    level: 'N5',
    stem: '「散歩{さんぽ}」の意味{いみ}はどれですか。',
    stemZh: '「散歩」的意思是哪個？',
    options: [
      { text: '散步', reason: '正確。散歩{さんぽ}意為散步。' },
      { text: '旅行', reason: '錯誤。旅行是旅行{りょこう}。' },
      { text: '游泳', reason: '錯誤。游泳是泳{およ}ぐ。' },
      { text: '料理', reason: '錯誤。料理是料理{りょうり}。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '散歩的詞義',
      analysis: '散歩{さんぽ}意為散步。「散歩する」可當動詞使用，表示「去散步」。',
      relatedRules: ['📖 本課 單字「散歩」'],
    },
  },
  // Q3 vocabulary — 好き ⇔ 嫌い
  {
    id: 'n5_u1_l6_q3',
    category: 'vocabulary',
    level: 'N5',
    stem: '「好{す}き」の反対語{はんたいご}はどれですか。',
    stemZh: '「好き」的反義詞是哪個？',
    options: [
      { text: '上手{じょうず}', reason: '錯誤。上手意為擅長，不是好き的反義詞。' },
      { text: '下手{へた}', reason: '錯誤。下手意為不擅長，是上手的反義詞。' },
      { text: '嫌{きら}い', reason: '正確。嫌い（討厭）是好き（喜歡）的反義詞。' },
      { text: '欲{ほ}しい', reason: '錯誤。欲しい意為想要，不是好き的反義詞。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '好き與嫌いの配對',
      analysis: '好{す}き（喜歡）⇔嫌{きら}い（討厭）是基本的反義詞組合。兩者都是形容動詞。',
      relatedRules: ['📖 本課 單字「好き・嫌い」'],
    },
  },
  // Q4 vocabulary — 上手 ⇔ 下手
  {
    id: 'n5_u1_l6_q4',
    category: 'vocabulary',
    level: 'N5',
    stem: '「上手{じょうず}」の反対語{はんたいご}はどれですか。',
    stemZh: '「上手」的反義詞是哪個？',
    options: [
      { text: '好{す}き', reason: '錯誤。好き意為喜歡，不是上手的反義詞。' },
      { text: '嫌{きら}い', reason: '錯誤。嫌い意為討厭，不是上手的反義詞。' },
      { text: '面白{おもしろ}い', reason: '錯誤。面白い意為有趣，不是上手的反義詞。' },
      { text: '下手{へた}', reason: '正確。下手（不擅長）是上手（擅長）的反義詞。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '上手與下手的配對',
      analysis: '上手{じょうず}（擅長）⇔下手{へた}（不擅長）。注意不能對自己用「上手」，要用「得意{とくい}」。',
      relatedRules: ['📖 本課 單字「上手・下手」'],
    },
  },
  // Q5 vocabulary — 写真
  {
    id: 'n5_u1_l6_q5',
    category: 'vocabulary',
    level: 'N5',
    stem: '「写真{しゃしん}」の意味{いみ}はどれですか。',
    stemZh: '「写真」的意思是哪個？',
    options: [
      { text: '畫', reason: '錯誤。畫是絵{え}。' },
      { text: '歌', reason: '錯誤。歌是歌{うた}。' },
      { text: '照片', reason: '正確。写真{しゃしん}意為照片。' },
      { text: '電影', reason: '錯誤。電影是映画{えいが}。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '写真的詞義',
      analysis: '写真{しゃしん}意為照片。「写真を撮る」＝拍照。',
      relatedRules: ['📖 本課 單字「写真」'],
    },
  },
  // Q6 vocabulary — 面白い
  {
    id: 'n5_u1_l6_q6',
    category: 'vocabulary',
    level: 'N5',
    stem: '「面白{おもしろ}い」の意味{いみ}はどれですか。',
    stemZh: '「面白い」的意思是哪個？',
    options: [
      { text: '快樂', reason: '錯誤。快樂是楽{たの}しい。' },
      { text: '有趣', reason: '正確。面白{おもしろ}い意為有趣。' },
      { text: '想要', reason: '錯誤。想要是欲{ほ}しい。' },
      { text: '非常喜歡', reason: '錯誤。非常喜歡是大好{だいす}き。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '面白い的詞義',
      analysis: '面白{おもしろ}い是い形容詞，意為「有趣的」。常用來形容電影、書籍等。',
      relatedRules: ['📖 本課 單字「面白い」'],
    },
  },
  // Q7 vocabulary — 料理
  {
    id: 'n5_u1_l6_q7',
    category: 'vocabulary',
    level: 'N5',
    stem: '「料理{りょうり}」の意味{いみ}はどれですか。',
    stemZh: '「料理」的意思是哪個？',
    options: [
      { text: '旅行', reason: '錯誤。旅行是旅行{りょこう}。' },
      { text: '散步', reason: '錯誤。散步是散歩{さんぽ}。' },
      { text: '運動', reason: '錯誤。運動是スポーツ。' },
      { text: '料理', reason: '正確。料理{りょうり}意為料理、烹飪。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '料理的詞義',
      analysis: '料理{りょうり}意為料理、烹飪。「料理する」＝做菜、「料理の本」＝食譜書。',
      relatedRules: ['📖 本課 單字「料理」'],
    },
  },
  // Q8 vocabulary — 欲しい
  {
    id: 'n5_u1_l6_q8',
    category: 'vocabulary',
    level: 'N5',
    stem: '「新{あたら}しいカメラが欲{ほ}しいです。」の「欲{ほ}しい」はどんな意味{いみ}ですか。',
    stemZh: '「新しいカメラが欲しいです。」中的「欲しい」是什麼意思？',
    options: [
      { text: '喜歡', reason: '錯誤。喜歡是好{す}き。' },
      { text: '擅長', reason: '錯誤。擅長是上手{じょうず}。' },
      { text: '想要', reason: '正確。欲{ほ}しい意為想要。' },
      { text: '有趣', reason: '錯誤。有趣是面白{おもしろ}い。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '欲しい的詞義',
      analysis: '欲{ほ}しい是い形容詞，意為「想要」。「〜がほしいです」＝「想要〜」。',
      relatedRules: ['📖 本課 單字「欲しい」'],
    },
  },
  // Q9 grammar — 〜が好きです
  {
    id: 'n5_u1_l6_q9',
    category: 'grammar',
    level: 'N5',
    stem: '私{わたし}は映画{えいが}＿＿好{す}きです。',
    stemZh: '我喜歡電影。',
    options: [
      { text: 'を', reason: '錯誤。「好き」是形容動詞，喜歡的對象不用「を」。' },
      { text: 'は', reason: '錯誤。喜歡的對象用「が」而非「は」。' },
      { text: 'が', reason: '正確。「好き」前面用「が」標記喜歡的對象。' },
      { text: 'に', reason: '錯誤。「に」不用於「好き」的對象。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「〜が好きです」的助詞搭配',
      analysis: '「好き」「嫌い」「上手」「下手」等詞前面的對象用「が」標記。「〜が好きです」＝「喜歡〜」。',
      relatedRules: ['📖 本課 文法「〜のが好きです」'],
    },
  },
  // Q10 grammar — 〜が上手です
  {
    id: 'n5_u1_l6_q10',
    category: 'grammar',
    level: 'N5',
    stem: '田中{たなか}さんはギター＿＿上手{じょうず}です。',
    stemZh: '田中同學很擅長吉他。',
    options: [
      { text: 'を', reason: '錯誤。「上手」前面的對象用「が」而非「を」。' },
      { text: 'が', reason: '正確。「上手」前面用「が」標記擅長的對象。' },
      { text: 'は', reason: '錯誤。擅長的對象用「が」而非「は」。' },
      { text: 'に', reason: '錯誤。「に」不用於「上手」的對象。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '「〜が上手です」的助詞搭配',
      analysis: '「〜が上手です」表示「擅長〜」。注意對他人可以用「上手」，但對自己要用「得意」。',
      relatedRules: ['📖 本課 文法「〜のが上手です」'],
    },
  },
  // Q11 grammar — 〜がほしいです
  {
    id: 'n5_u1_l6_q11',
    category: 'grammar',
    level: 'N5',
    stem: '新{あたら}しいカメラ＿＿ほしいです。',
    stemZh: '想要新的相機。',
    options: [
      { text: 'を', reason: '錯誤。「ほしい」前面的對象用「が」而非「を」。' },
      { text: 'は', reason: '錯誤。想要的對象用「が」而非「は」。' },
      { text: 'に', reason: '錯誤。「に」不用於「ほしい」的對象。' },
      { text: 'が', reason: '正確。「ほしい」前面用「が」標記想要的對象。' },
    ],
    correctIndex: 3,
    explanation: {
      keyPoint: '「〜がほしいです」的助詞搭配',
      analysis: '「〜がほしいです」表示「想要〜」。「ほしい」是い形容詞，前面的對象用「が」標記。',
      relatedRules: ['📖 本課 文法「〜がほしいです」'],
    },
  },
  // Q12 grammar — のが好き
  {
    id: 'n5_u1_l6_q12',
    category: 'grammar',
    level: 'N5',
    stem: '歌{うた}を歌{うた}う＿＿好{す}きです。',
    stemZh: '我喜歡唱歌。',
    options: [
      { text: 'のが', reason: '正確。動詞＋「のが好き」表示「喜歡做某事」。' },
      { text: 'が', reason: '錯誤。動詞原形不能直接接「が」，需要「の」將動詞名詞化。' },
      { text: 'のを', reason: '錯誤。「好き」前面用「が」而非「を」。' },
      { text: 'を', reason: '錯誤。「好き」是形容動詞，不用「を」。' },
    ],
    correctIndex: 0,
    explanation: {
      keyPoint: '「動詞＋のが好きです」句型',
      analysis: '動詞原形＋「のが好きです」表示「喜歡做〜」。「の」將動詞名詞化，「が」標記對象。',
      relatedRules: ['📖 本課 文法「〜のが好きです」'],
    },
  },
  // Q13 grammar — のが上手
  {
    id: 'n5_u1_l6_q13',
    category: 'grammar',
    level: 'N5',
    stem: '山田{やまだ}さんは絵{え}を描{か}く＿＿上手{じょうず}です。',
    stemZh: '山田同學很擅長畫畫。',
    options: [
      { text: 'が', reason: '錯誤。動詞原形不能直接接「が」，需要「の」名詞化。' },
      { text: 'を', reason: '錯誤。「上手」前面用「が」而非「を」。' },
      { text: 'のが', reason: '正確。動詞＋「のが上手です」表示「擅長做某事」。' },
      { text: 'のは', reason: '錯誤。「上手」前面的對象用「が」而非「は」。' },
    ],
    correctIndex: 2,
    explanation: {
      keyPoint: '「動詞＋のが上手です」句型',
      analysis: '動詞原形＋「のが上手です」表示「擅長做〜」。「の」將動詞名詞化，「が」標記對象。',
      relatedRules: ['📖 本課 文法「〜のが上手です」'],
    },
  },
  // Q14 grammar — 好き vs 上手 vs ほしい 的區分
  {
    id: 'n5_u1_l6_q14',
    category: 'grammar',
    level: 'N5',
    stem: '泳{およ}ぐのが好{す}きです。でも走{はし}るのは＿＿です。',
    stemZh: '我喜歡游泳。但是討厭跑步。',
    options: [
      { text: '上手{じょうず}', reason: '錯誤。「上手」是擅長，但語境要表達的是討厭。' },
      { text: '嫌{きら}い', reason: '正確。「嫌い」是討厭，與「好き」相反。' },
      { text: '欲{ほ}しい', reason: '錯誤。「欲しい」是想要，不符合語境。' },
      { text: '楽{たの}しい', reason: '錯誤。「楽しい」是快樂，但語境要表達負面。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '好き與嫌いの對比使用',
      analysis: '前句用「好き」表示喜歡，後句用「嫌い」表示討厭。「でも」表示轉折。',
      relatedRules: ['📖 本課 單字「好き・嫌い」', '📖 本課 文法「〜のが好きです」'],
    },
  },
  // Q15 grammar — 綜合判斷
  {
    id: 'n5_u1_l6_q15',
    category: 'grammar',
    level: 'N5',
    stem: '下{した}の文{ぶん}で正{ただ}しいのはどれですか。',
    stemZh: '下面哪個句子是正確的？',
    options: [
      { text: '私{わたし}は映画{えいが}を好{す}きです。', reason: '錯誤。「好き」前面用「が」而非「を」。' },
      { text: '田中{たなか}さんは料理{りょうり}が上手{じょうず}です。', reason: '正確。「〜が上手です」是正確的句型。' },
      { text: '新{あたら}しいギターをほしいです。', reason: '錯誤。「ほしい」前面用「が」而非「を」。' },
      { text: '写真{しゃしん}は面白{おもしろ}いが好{す}きです。', reason: '錯誤。語法不通，應為「写真が好きです」。' },
    ],
    correctIndex: 1,
    explanation: {
      keyPoint: '好き/上手/ほしい的正確助詞搭配',
      analysis: '「好き」「上手」「ほしい」等詞的對象用「が」標記，不用「を」。正確句型：「〜が好きです」「〜が上手です」「〜がほしいです」。',
      relatedRules: ['📖 本課 文法「〜のが好きです」', '📖 本課 文法「〜のが上手です」', '📖 本課 文法「〜がほしいです」'],
    },
  },
]

export const u1Lessons: LessonDefinition[] = [
  // ─── Lesson 1: 自我介紹 ───
  {
    id: 'n5_u1_l1',
    unitId: 'n5_u1',
    order: 1,
    titleJp: '自己紹介',
    titleZh: '自我介紹',
    objectives: [
      '學會用「私は〜です」自我介紹',
      '掌握斷定助動詞「です」的用法',
      '認識基本人稱代名詞',
    ],
    vocabulary: [
      { word: '私', reading: 'わたし', meaning: '我', meaning_zh: '我' },
      { word: 'あなた', reading: 'あなた', meaning: '你', meaning_zh: '你' },
      { word: '彼', reading: 'かれ', meaning: '他', meaning_zh: '他' },
      { word: '彼女', reading: 'かのじょ', meaning: '她', meaning_zh: '她' },
      { word: '友達', reading: 'ともだち', meaning: '朋友', meaning_zh: '朋友' },
      { word: '先生', reading: 'せんせい', meaning: '老師', meaning_zh: '老師' },
      { word: '学生', reading: 'がくせい', meaning: '學生', meaning_zh: '學生' },
      { word: '名前', reading: 'なまえ', meaning: '名字', meaning_zh: '名字' },
      { word: '人', reading: 'ひと', meaning: '人', meaning_zh: '人' },
      { word: 'はい', reading: 'はい', meaning: '是', meaning_zh: '是' },
      { word: '言う', reading: 'いう', meaning: '說', meaning_zh: '說' },
      { word: '分かる', reading: 'わかる', meaning: '懂', meaning_zh: '懂' },
      { word: '国', reading: 'くに', meaning: '國家', meaning_zh: '國家' },
      { word: '会社', reading: 'かいしゃ', meaning: '公司', meaning_zh: '公司' },
      { word: '大学', reading: 'だいがく', meaning: '大學', meaning_zh: '大學' },
      { word: '男', reading: 'おとこ', meaning: '男', meaning_zh: '男' },
      { word: '女', reading: 'おんな', meaning: '女', meaning_zh: '女' },
    ],
    grammarIds: ['n5_wa', 'n5_da_desu'],
    grammarSummaries: [
      {
        grammarId: 'n5_wa',
        pattern: 'AはBです',
        meaning: 'A 是 B（主題標記）',
        quickExample: '私{わたし}は学生{がくせい}です。',
        quickExampleZh: '我是學生。',
      },
      {
        grammarId: 'n5_da_desu',
        pattern: '〜だ / 〜です',
        meaning: '〜是（斷定助動詞）',
        quickExample: '田中{たなか}さんは先生{せんせい}です。',
        quickExampleZh: '田中先生是老師。',
      },
    ],
    dialogue: [
      { speaker: '佐藤{さとう}', japanese: 'はじめまして。私{わたし}は佐藤{さとう}ゆきです。', chinese: '初次見面。我是佐藤由紀。' },
      { speaker: '田中{たなか}', japanese: 'はじめまして。私{わたし}は田中{たなか}けんです。', chinese: '初次見面。我是田中健。' },
      { speaker: '佐藤{さとう}', japanese: '田中{たなか}さんは学生{がくせい}ですか。', chinese: '田中先生是學生嗎？' },
      { speaker: '田中{たなか}', japanese: 'いいえ、学生{がくせい}じゃないです。会社{かいしゃ}の人{ひと}です。佐藤{さとう}さんは？', chinese: '不，不是學生。是公司的人。佐藤同學呢？' },
      { speaker: '佐藤{さとう}', japanese: '私{わたし}は大学{だいがく}の学生{がくせい}です。あの人{ひと}は友達{ともだち}です。', chinese: '我是大學生。那個人是朋友。' },
      { speaker: '田中{たなか}', japanese: 'あの人{ひと}は男{おとこ}の人{ひと}ですか、女{おんな}の人{ひと}ですか。', chinese: '那個人是男生還是女生？' },
      { speaker: '佐藤{さとう}', japanese: '彼女{かのじょ}は女{おんな}の人{ひと}です。名前{なまえ}は山田{やまだ}さんです。', chinese: '她是女生。名字是山田同學。' },
      { speaker: '山田{やまだ}', japanese: 'はじめまして。山田{やまだ}あいです。よろしくお願{ねが}いします。', chinese: '初次見面。我是山田愛。請多多指教。' },
      { speaker: '田中{たなか}', japanese: '山田{やまだ}さんの国{くに}はどこですか。', chinese: '山田同學的國家是哪裡？' },
      { speaker: '山田{やまだ}', japanese: '台湾{たいわん}です。田中{たなか}さんは先生{せんせい}ですか。', chinese: '是台灣。田中先生是老師嗎？' },
      { speaker: '田中{たなか}', japanese: 'いいえ、先生{せんせい}じゃないです。会社員{かいしゃいん}です。彼{かれ}は先生{せんせい}ですよ。', chinese: '不，不是老師。是公司職員。他才是老師喔。' },
      { speaker: '佐藤{さとう}', japanese: 'はい、分{わ}かりました。よろしくお願{ねが}いします。', chinese: '好的，我知道了。請多多指教。' },
    ],
    quizQuestions: l1Quiz,
  },

  // ─── Lesson 2: 家人與問候 ───
  {
    id: 'n5_u1_l2',
    unitId: 'n5_u1',
    order: 2,
    titleJp: '家族と挨拶',
    titleZh: '家人與問候',
    objectives: [
      '學會家族稱呼的說法',
      '掌握疑問句尾「か」的用法',
      '學會確認語氣「ね」和「也」的助詞「も」',
    ],
    vocabulary: [
      { word: 'お父さん', reading: 'おとうさん', meaning: '父親', meaning_zh: '父親' },
      { word: 'お母さん', reading: 'おかあさん', meaning: '母親', meaning_zh: '母親' },
      { word: '兄', reading: 'あに', meaning: '哥哥', meaning_zh: '哥哥' },
      { word: '姉', reading: 'あね', meaning: '姊姊', meaning_zh: '姊姊' },
      { word: '弟', reading: 'おとうと', meaning: '弟弟', meaning_zh: '弟弟' },
      { word: '妹', reading: 'いもうと', meaning: '妹妹', meaning_zh: '妹妹' },
      { word: '家族', reading: 'かぞく', meaning: '家人', meaning_zh: '家人' },
      { word: '一緒', reading: 'いっしょ', meaning: '一起', meaning_zh: '一起' },
      { word: '元気', reading: 'げんき', meaning: '元氣', meaning_zh: '元氣' },
      { word: '天気', reading: 'てんき', meaning: '天氣', meaning_zh: '天氣' },
      { word: '今日', reading: 'きょう', meaning: '今天', meaning_zh: '今天' },
      { word: '多い', reading: 'おおい', meaning: '多的', meaning_zh: '多的' },
      { word: 'いい', reading: 'いい', meaning: '好的', meaning_zh: '好的' },
      { word: '台湾', reading: 'たいわん', meaning: '台灣', meaning_zh: '台灣' },
      { word: '日本', reading: 'にほん', meaning: '日本', meaning_zh: '日本' },
      { word: '何', reading: 'なに', meaning: '什麼', meaning_zh: '什麼' },
      { word: 'どこ', reading: 'どこ', meaning: '哪裡', meaning_zh: '哪裡' },
    ],
    grammarIds: ['n5_ka', 'n5_ne', 'n5_mo'],
    grammarSummaries: [
      {
        grammarId: 'n5_ka',
        pattern: '〜ですか',
        meaning: '〜嗎？（疑問）',
        quickExample: '学生{がくせい}ですか。',
        quickExampleZh: '是學生嗎？',
      },
      {
        grammarId: 'n5_ne',
        pattern: '〜ですね',
        meaning: '〜呢（確認/同意）',
        quickExample: 'いい天気{てんき}ですね。',
        quickExampleZh: '天氣真好呢。',
      },
      {
        grammarId: 'n5_mo',
        pattern: 'AもB',
        meaning: 'A 也 B',
        quickExample: '私{わたし}も学生{がくせい}です。',
        quickExampleZh: '我也是學生。',
      },
    ],
    dialogue: [
      { speaker: '佐藤{さとう}', japanese: '山田{やまだ}さん、今日{きょう}はいい天気{てんき}ですね。', chinese: '山田同學，今天天氣真好呢。' },
      { speaker: '山田{やまだ}', japanese: 'そうですね。佐藤{さとう}さんのお父{とう}さんは元気{げんき}ですか。', chinese: '是啊。佐藤同學的父親身體好嗎？' },
      { speaker: '佐藤{さとう}', japanese: 'はい、元気{げんき}です。お母{かあ}さんも元気{げんき}です。', chinese: '是的，很好。母親也很好。' },
      { speaker: '山田{やまだ}', japanese: '佐藤{さとう}さんの家族{かぞく}は何人{なんにん}ですか。', chinese: '佐藤同學的家人有幾個人？' },
      { speaker: '佐藤{さとう}', japanese: 'お父{とう}さんとお母{かあ}さんと兄{あに}と姉{あね}と妹{いもうと}です。家族{かぞく}は多{おお}いですね。', chinese: '有父親、母親、哥哥、姊姊和妹妹。家人很多呢。' },
      { speaker: '山田{やまだ}', japanese: 'いいですね！私{わたし}はお母{かあ}さんと弟{おとうと}と一緒{いっしょ}です。', chinese: '真好！我和母親跟弟弟在一起。' },
      { speaker: '佐藤{さとう}', japanese: '山田{やまだ}さんの国{くに}は台湾{たいわん}ですか。', chinese: '山田同學的國家是台灣嗎？' },
      { speaker: '山田{やまだ}', japanese: 'はい、台湾{たいわん}です。佐藤{さとう}さんも台湾{たいわん}ですか。', chinese: '是的，是台灣。佐藤同學也是台灣嗎？' },
      { speaker: '佐藤{さとう}', japanese: 'いいえ、私{わたし}は日本{にほん}です。兄{あに}も日本{にほん}にいます。', chinese: '不，我是日本。哥哥也在日本。' },
      { speaker: '山田{やまだ}', japanese: 'お姉{ねえ}さんはどこですか。', chinese: '姊姊在哪裡呢？' },
      { speaker: '佐藤{さとう}', japanese: '姉{あね}も日本{にほん}です。家族{かぞく}は一緒{いっしょ}ですよ。', chinese: '姊姊也在日本。家人在一起喔。' },
      { speaker: '山田{やまだ}', japanese: 'いいですね。今日{きょう}も元気{げんき}ですね。', chinese: '真好。今天也精神很好呢。' },
    ],
    quizQuestions: l2Quiz,
  },

  // ─── Lesson 3: 身邊的東西 ───
  {
    id: 'n5_u1_l3',
    unitId: 'n5_u1',
    order: 3,
    titleJp: '身の回りのもの',
    titleZh: '身邊的東西',
    objectives: [
      '學會所有格助詞「の」的用法',
      '掌握否定句型「じゃないです」',
      '學會終助詞「よ」告知新資訊',
      '認識日常物品的日語名稱',
    ],
    vocabulary: [
      { word: '本', reading: 'ほん', meaning: '書', meaning_zh: '書' },
      { word: '鉛筆', reading: 'えんぴつ', meaning: '鉛筆', meaning_zh: '鉛筆' },
      { word: 'ペン', reading: 'ペン', meaning: '筆', meaning_zh: '筆' },
      { word: '紙', reading: 'かみ', meaning: '紙', meaning_zh: '紙' },
      { word: '机', reading: 'つくえ', meaning: '書桌', meaning_zh: '書桌' },
      { word: '椅子', reading: 'いす', meaning: '椅子', meaning_zh: '椅子' },
      { word: '時計', reading: 'とけい', meaning: '鐘錶', meaning_zh: '鐘錶' },
      { word: 'カメラ', reading: 'カメラ', meaning: '相機', meaning_zh: '相機' },
      { word: '眼鏡', reading: 'めがね', meaning: '眼鏡', meaning_zh: '眼鏡' },
      { word: '電話', reading: 'でんわ', meaning: '電話', meaning_zh: '電話' },
      { word: 'テーブル', reading: 'テーブル', meaning: '桌子', meaning_zh: '桌子' },
      { word: 'ドア', reading: 'ドア', meaning: '門', meaning_zh: '門' },
      { word: '窓', reading: 'まど', meaning: '窗戶', meaning_zh: '窗戶' },
      { word: '箱', reading: 'はこ', meaning: '箱子', meaning_zh: '箱子' },
      { word: '新しい', reading: 'あたらしい', meaning: '新的', meaning_zh: '新的' },
      { word: '古い', reading: 'ふるい', meaning: '舊的', meaning_zh: '舊的' },
      { word: 'ノート', reading: 'ノート', meaning: '筆記本', meaning_zh: '筆記本' },
    ],
    grammarIds: ['n5_no', 'n5_janai', 'n5_yo'],
    grammarSummaries: [
      {
        grammarId: 'n5_no',
        pattern: 'AのB',
        meaning: 'A 的 B（所有格）',
        quickExample: '私{わたし}の本{ほん}です。',
        quickExampleZh: '是我的書。',
      },
      {
        grammarId: 'n5_janai',
        pattern: '〜じゃないです',
        meaning: '不是〜（否定）',
        quickExample: 'これはペンじゃないです。',
        quickExampleZh: '這不是筆。',
      },
      {
        grammarId: 'n5_yo',
        pattern: '〜ですよ',
        meaning: '〜喔（告知/強調）',
        quickExample: 'それはカメラですよ。',
        quickExampleZh: '那是相機喔。',
      },
    ],
    dialogue: [
      { speaker: '佐藤{さとう}', japanese: '田中{たなか}さん、机{つくえ}の上{うえ}のペンは田中{たなか}さんのですか。', chinese: '田中同學，書桌上的筆是田中同學的嗎？' },
      { speaker: '田中{たなか}', japanese: 'いいえ、そのペンは私{わたし}のじゃないです。鉛筆{えんぴつ}とノートは私{わたし}のです。', chinese: '不，那支筆不是我的。鉛筆和筆記本是我的。' },
      { speaker: '佐藤{さとう}', japanese: 'この本{ほん}は先生{せんせい}のですか。', chinese: '這本書是老師的嗎？' },
      { speaker: '田中{たなか}', japanese: 'はい、それは先生{せんせい}の本{ほん}ですよ。古{ふる}い本{ほん}です。', chinese: '是的，那是老師的書喔。是舊書。' },
      { speaker: '佐藤{さとう}', japanese: 'テーブルの上{うえ}に紙{かみ}がありますね。それも先生{せんせい}のですか。', chinese: '桌子上有紙呢。那也是老師的嗎？' },
      { speaker: '田中{たなか}', japanese: 'いいえ、紙{かみ}は先生{せんせい}のじゃないです。私{わたし}のですよ。', chinese: '不，紙不是老師的。是我的喔。' },
      { speaker: '佐藤{さとう}', japanese: '窓{まど}のそばに時計{とけい}がありますね。新{あたら}しい時計{とけい}ですか。', chinese: '窗戶旁邊有鐘錶呢。是新的鐘錶嗎？' },
      { speaker: '田中{たなか}', japanese: 'いいえ、古{ふる}い時計{とけい}です。でも、このカメラは新{あたら}しいですよ。', chinese: '不，是舊的鐘錶。不過，這台相機是新的喔。' },
      { speaker: '佐藤{さとう}', japanese: 'いいですね。ドアのそばの箱{はこ}は何{なん}ですか。', chinese: '真好。門旁邊的箱子是什麼？' },
      { speaker: '田中{たなか}', japanese: 'あの箱{はこ}の中{なか}に眼鏡{めがね}と電話{でんわ}がありますよ。', chinese: '那個箱子裡面有眼鏡和電話喔。' },
      { speaker: '佐藤{さとう}', japanese: '電話{でんわ}は古{ふる}いですか。', chinese: '電話是舊的嗎？' },
      { speaker: '田中{たなか}', japanese: 'はい、古{ふる}いです。新{あたら}しいのがほしいですね。椅子{いす}の下{した}にも本{ほん}がありますよ。', chinese: '是的，是舊的。想要新的呢。椅子下面也有書喔。' },
    ],
    quizQuestions: l3Quiz,
  },

  // ─── Lesson 4: 指東西・這是什麼 ───
  {
    id: 'n5_u1_l4',
    unitId: 'n5_u1',
    order: 4,
    titleJp: 'これは何ですか',
    titleZh: '這是什麼',
    objectives: [
      '學會指示代名詞 これ/それ/あれ',
      '掌握連體詞 この/その/あの',
      '能用指示詞描述身邊的物品',
    ],
    vocabulary: [
      { word: 'これ', reading: 'これ', meaning: '這個', meaning_zh: '這個' },
      { word: 'それ', reading: 'それ', meaning: '那個', meaning_zh: '那個' },
      { word: 'あれ', reading: 'あれ', meaning: '那個', meaning_zh: '那個' },
      { word: 'この', reading: 'この', meaning: '這個', meaning_zh: '這個' },
      { word: 'その', reading: 'その', meaning: '那個', meaning_zh: '那個' },
      { word: 'あの', reading: 'あの', meaning: '那個', meaning_zh: '那個' },
      { word: '傘', reading: 'かさ', meaning: '傘', meaning_zh: '傘' },
      { word: 'かばん', reading: 'かばん', meaning: '包包', meaning_zh: '包包' },
      { word: '帽子', reading: 'ぼうし', meaning: '帽子', meaning_zh: '帽子' },
      { word: '何', reading: 'なん', meaning: '什麼', meaning_zh: '什麼' },
      { word: 'どれ', reading: 'どれ', meaning: '哪個', meaning_zh: '哪個' },
      { word: 'どの', reading: 'どの', meaning: '哪個', meaning_zh: '哪個' },
      { word: '中', reading: 'なか', meaning: '裡面', meaning_zh: '裡面' },
      { word: '上', reading: 'うえ', meaning: '上面', meaning_zh: '上面' },
      { word: '下', reading: 'した', meaning: '下面', meaning_zh: '下面' },
      { word: 'そば', reading: 'そば', meaning: '旁邊', meaning_zh: '旁邊' },
    ],
    grammarIds: ['n5_kore_sore_are', 'n5_kono_sono_ano'],
    grammarSummaries: [
      {
        grammarId: 'n5_kore_sore_are',
        pattern: 'これ/それ/あれ',
        meaning: '這個/那個/那個（指示代名詞）',
        quickExample: 'これは何{なん}ですか。',
        quickExampleZh: '這是什麼？',
      },
      {
        grammarId: 'n5_kono_sono_ano',
        pattern: 'この/その/あの＋名詞',
        meaning: '這個〜/那個〜/那個〜（連體詞）',
        quickExample: 'この本{ほん}は私{わたし}のです。',
        quickExampleZh: '這本書是我的。',
      },
    ],
    dialogue: [
      { speaker: '佐藤{さとう}', japanese: '田中{たなか}さん、これは何{なん}ですか。', chinese: '田中同學，這是什麼？' },
      { speaker: '田中{たなか}', japanese: 'それは私{わたし}のかばんですよ。中{なか}に傘{かさ}と帽子{ぼうし}があります。', chinese: '那是我的包包喔。裡面有傘和帽子。' },
      { speaker: '佐藤{さとう}', japanese: 'このかばんは新{あたら}しいですか。', chinese: '這個包包是新的嗎？' },
      { speaker: '田中{たなか}', japanese: 'はい、新{あたら}しいです。あれは佐藤{さとう}さんのですか。', chinese: '是的，是新的。那個是佐藤同學的嗎？' },
      { speaker: '佐藤{さとう}', japanese: 'どれですか。あの机{つくえ}の上{うえ}のですか。', chinese: '哪個？那張書桌上面的嗎？' },
      { speaker: '田中{たなか}', japanese: 'はい、あの帽子{ぼうし}です。', chinese: '是的，那頂帽子。' },
      { speaker: '佐藤{さとう}', japanese: 'いいえ、あれは私{わたし}のじゃないです。山田{やまだ}さんのですよ。', chinese: '不，那不是我的。是山田同學的喔。' },
      { speaker: '山田{やまだ}', japanese: 'はい、その帽子{ぼうし}は私{わたし}のです。この傘{かさ}も私{わたし}のです。', chinese: '是的，那頂帽子是我的。這把傘也是我的。' },
      { speaker: '田中{たなか}', japanese: '椅子{いす}の下{した}にかばんがありますね。あのかばんはどの人{ひと}のですか。', chinese: '椅子下面有包包呢。那個包包是誰的？' },
      { speaker: '山田{やまだ}', japanese: 'あのかばんは先生{せんせい}のですよ。中{なか}に本{ほん}があります。', chinese: '那個包包是老師的喔。裡面有書。' },
      { speaker: '佐藤{さとう}', japanese: 'そうですか。その本{ほん}は何{なん}の本{ほん}ですか。', chinese: '是這樣啊。那是什麼書？' },
      { speaker: '山田{やまだ}', japanese: 'あれは日本語{にほんご}の本{ほん}です。テーブルのそばにもありますよ。', chinese: '那是日語的書。桌子旁邊也有喔。' },
    ],
    quizQuestions: l4Quiz,
  },

  // ─── Lesson 5: 位置與場所 ───
  {
    id: 'n5_u1_l5',
    unitId: 'n5_u1',
    order: 5,
    titleJp: 'どこにありますか',
    titleZh: '在哪裡',
    objectives: [
      '學會表達事物的位置',
      '掌握存在動詞 あります/います',
      '認識場所助詞「に」的用法',
    ],
    vocabulary: [
      { word: '前', reading: 'まえ', meaning: '前面', meaning_zh: '前面' },
      { word: '後ろ', reading: 'うしろ', meaning: '後面', meaning_zh: '後面' },
      { word: '隣', reading: 'となり', meaning: '旁邊', meaning_zh: '旁邊' },
      { word: '外', reading: 'そと', meaning: '外面', meaning_zh: '外面' },
      { word: '右', reading: 'みぎ', meaning: '右邊', meaning_zh: '右邊' },
      { word: '左', reading: 'ひだり', meaning: '左邊', meaning_zh: '左邊' },
      { word: '学校', reading: 'がっこう', meaning: '學校', meaning_zh: '學校' },
      { word: '病院', reading: 'びょういん', meaning: '醫院', meaning_zh: '醫院' },
      { word: '銀行', reading: 'ぎんこう', meaning: '銀行', meaning_zh: '銀行' },
      { word: '郵便局', reading: 'ゆうびんきょく', meaning: '郵局', meaning_zh: '郵局' },
      { word: '公園', reading: 'こうえん', meaning: '公園', meaning_zh: '公園' },
      { word: '駅', reading: 'えき', meaning: '車站', meaning_zh: '車站' },
      { word: '図書館', reading: 'としょかん', meaning: '圖書館', meaning_zh: '圖書館' },
      { word: '交番', reading: 'こうばん', meaning: '派出所', meaning_zh: '派出所' },
      { word: 'デパート', reading: 'デパート', meaning: '百貨公司', meaning_zh: '百貨公司' },
      { word: '映画館', reading: 'えいがかん', meaning: '電影院', meaning_zh: '電影院' },
      { word: '喫茶店', reading: 'きっさてん', meaning: '咖啡店', meaning_zh: '咖啡店' },
      { word: '建物', reading: 'たてもの', meaning: '建築物', meaning_zh: '建築物' },
      { word: '入口', reading: 'いりぐち', meaning: '入口', meaning_zh: '入口' },
      { word: '出口', reading: 'でぐち', meaning: '出口', meaning_zh: '出口' },
    ],
    grammarIds: ['n5_ga_arimasu', 'n5_ga_imasu', 'n5_ni'],
    grammarSummaries: [
      {
        grammarId: 'n5_ga_arimasu',
        pattern: '場所に〜があります',
        meaning: '某處有〜（無生命物）',
        quickExample: '机{つくえ}の上{うえ}に本{ほん}があります。',
        quickExampleZh: '書桌上面有書。',
      },
      {
        grammarId: 'n5_ga_imasu',
        pattern: '場所に〜がいます',
        meaning: '某處有〜（有生命物）',
        quickExample: '公園{こうえん}に子供{こども}がいます。',
        quickExampleZh: '公園裡有小孩。',
      },
      {
        grammarId: 'n5_ni',
        pattern: '〜に',
        meaning: '在〜（場所助詞）',
        quickExample: '銀行{ぎんこう}は駅{えき}の隣{となり}にあります。',
        quickExampleZh: '銀行在車站旁邊。',
      },
    ],
    dialogue: [
      { speaker: '佐藤{さとう}', japanese: 'すみません、駅{えき}はどこにありますか。', chinese: '不好意思，請問車站在哪裡？' },
      { speaker: '鈴木{すずき}', japanese: '駅{えき}は学校{がっこう}の後{うし}ろにありますよ。あの建物{たてもの}の左{ひだり}です。', chinese: '車站在學校後面喔。那棟建築物的左邊。' },
      { speaker: '佐藤{さとう}', japanese: 'ありがとうございます。銀行{ぎんこう}も駅{えき}のそばにありますか。', chinese: '謝謝。銀行也在車站附近嗎？' },
      { speaker: '鈴木{すずき}', japanese: 'はい、銀行{ぎんこう}は駅{えき}の隣{となり}にあります。郵便局{ゆうびんきょく}の前{まえ}です。', chinese: '是的，銀行在車站旁邊。在郵局前面。' },
      { speaker: '佐藤{さとう}', japanese: '病院{びょういん}はどこですか。', chinese: '醫院在哪裡呢？' },
      { speaker: '鈴木{すずき}', japanese: '病院{びょういん}は公園{こうえん}の右{みぎ}にあります。入口{いりぐち}は建物{たてもの}の前{まえ}にありますよ。', chinese: '醫院在公園的右邊。入口在建築物的前面喔。' },
      { speaker: '佐藤{さとう}', japanese: '図書館{としょかん}はありますか。', chinese: '有圖書館嗎？' },
      { speaker: '鈴木{すずき}', japanese: 'はい、図書館{としょかん}はデパートの隣{となり}にあります。映画館{えいがかん}の後{うし}ろです。', chinese: '有，圖書館在百貨公司旁邊。在電影院後面。' },
      { speaker: '佐藤{さとう}', japanese: '喫茶店{きっさてん}も近{ちか}くにありますか。', chinese: '咖啡店也在附近嗎？' },
      { speaker: '鈴木{すずき}', japanese: 'はい、交番{こうばん}の隣{となり}にあります。出口{でぐち}の外{そと}を左{ひだり}に行{い}ってください。', chinese: '有，在派出所旁邊。請從出口外面往左走。' },
      { speaker: '佐藤{さとう}', japanese: '公園{こうえん}に猫{ねこ}がいますね。', chinese: '公園裡有貓呢。' },
      { speaker: '鈴木{すずき}', japanese: 'はい、公園{こうえん}の外{そと}にも犬{いぬ}がいますよ。', chinese: '是的，公園外面也有狗喔。' },
    ],
    quizQuestions: l5Quiz,
  },

  // ─── Lesson 6: 興趣與喜好 ───
  {
    id: 'n5_u1_l6',
    unitId: 'n5_u1',
    order: 6,
    titleJp: '趣味は何ですか',
    titleZh: '興趣是什麼',
    objectives: [
      '學會表達興趣和喜好',
      '掌握「のが好き/上手」句型',
      '學會表達想要「ほしい」',
    ],
    vocabulary: [
      { word: '音楽', reading: 'おんがく', meaning: '音樂', meaning_zh: '音樂' },
      { word: '映画', reading: 'えいが', meaning: '電影', meaning_zh: '電影' },
      { word: 'スポーツ', reading: 'スポーツ', meaning: '運動', meaning_zh: '運動' },
      { word: '歌', reading: 'うた', meaning: '歌', meaning_zh: '歌' },
      { word: '写真', reading: 'しゃしん', meaning: '照片', meaning_zh: '照片' },
      { word: '旅行', reading: 'りょこう', meaning: '旅行', meaning_zh: '旅行' },
      { word: '散歩', reading: 'さんぽ', meaning: '散步', meaning_zh: '散步' },
      { word: '料理', reading: 'りょうり', meaning: '料理', meaning_zh: '料理' },
      { word: '絵', reading: 'え', meaning: '畫', meaning_zh: '畫' },
      { word: 'ギター', reading: 'ギター', meaning: '吉他', meaning_zh: '吉他' },
      { word: '好き', reading: 'すき', meaning: '喜歡', meaning_zh: '喜歡' },
      { word: '嫌い', reading: 'きらい', meaning: '討厭', meaning_zh: '討厭' },
      { word: '上手', reading: 'じょうず', meaning: '擅長', meaning_zh: '擅長' },
      { word: '下手', reading: 'へた', meaning: '不擅長', meaning_zh: '不擅長' },
      { word: '面白い', reading: 'おもしろい', meaning: '有趣', meaning_zh: '有趣' },
      { word: '楽しい', reading: 'たのしい', meaning: '快樂', meaning_zh: '快樂' },
      { word: '大好き', reading: 'だいすき', meaning: '非常喜歡', meaning_zh: '非常喜歡' },
      { word: '欲しい', reading: 'ほしい', meaning: '想要', meaning_zh: '想要' },
      { word: '遊ぶ', reading: 'あそぶ', meaning: '玩', meaning_zh: '玩' },
      { word: '泳ぐ', reading: 'およぐ', meaning: '游泳', meaning_zh: '游泳' },
    ],
    grammarIds: ['n5_no_ga_suki', 'n5_no_ga_jouzu', 'n5_ga_hoshii'],
    grammarSummaries: [
      {
        grammarId: 'n5_no_ga_suki',
        pattern: '〜のが好きです',
        meaning: '喜歡做〜',
        quickExample: '音楽{おんがく}を聞{き}くのが好{す}きです。',
        quickExampleZh: '我喜歡聽音樂。',
      },
      {
        grammarId: 'n5_no_ga_jouzu',
        pattern: '〜のが上手です',
        meaning: '擅長做〜',
        quickExample: '料理{りょうり}を作{つく}るのが上手{じょうず}です。',
        quickExampleZh: '他擅長做菜。',
      },
      {
        grammarId: 'n5_ga_hoshii',
        pattern: '〜がほしいです',
        meaning: '想要〜',
        quickExample: '新{あたら}しいカメラがほしいです。',
        quickExampleZh: '我想要新的相機。',
      },
    ],
    dialogue: [
      { speaker: '田中{たなか}', japanese: '佐藤{さとう}さんの趣味{しゅみ}は何{なん}ですか。', chinese: '佐藤同學的興趣是什麼？' },
      { speaker: '佐藤{さとう}', japanese: '私{わたし}は音楽{おんがく}が大好{だいす}きです。歌{うた}を歌{うた}うのが好{す}きです。', chinese: '我非常喜歡音樂。我喜歡唱歌。' },
      { speaker: '田中{たなか}', japanese: 'いいですね！ギターも上手{じょうず}ですか。', chinese: '真好！吉他也擅長嗎？' },
      { speaker: '佐藤{さとう}', japanese: 'いいえ、まだ下手{へた}です。でも楽{たの}しいですよ。田中{たなか}さんは何{なに}が好{す}きですか。', chinese: '不，還不擅長。但是很開心喔。田中同學喜歡什麼呢？' },
      { speaker: '田中{たなか}', japanese: '私{わたし}は写真{しゃしん}を撮{と}るのが好{す}きです。旅行{りょこう}の写真{しゃしん}が面白{おもしろ}いです。', chinese: '我喜歡拍照。旅行的照片很有趣。' },
      { speaker: '山田{やまだ}', japanese: '私{わたし}も旅行{りょこう}が大好{だいす}きです。散歩{さんぽ}して絵{え}を描{か}くのが上手{じょうず}です。', chinese: '我也非常喜歡旅行。散步時擅長畫畫。' },
      { speaker: '田中{たなか}', japanese: '山田{やまだ}さんはスポーツは好{す}きですか。', chinese: '山田同學喜歡運動嗎？' },
      { speaker: '山田{やまだ}', japanese: '泳{およ}ぐのが好{す}きです。でも走{はし}るのは嫌{きら}いです。', chinese: '我喜歡游泳。但是討厭跑步。' },
      { speaker: '佐藤{さとう}', japanese: '私{わたし}は映画{えいが}も好{す}きです。面白{おもしろ}いですよ。', chinese: '我也喜歡電影。很有趣喔。' },
      { speaker: '田中{たなか}', japanese: '新{あたら}しいカメラがほしいです。写真{しゃしん}を撮{と}るのが上手{じょうず}になりたいです。', chinese: '我想要新的相機。想變得擅長拍照。' },
      { speaker: '山田{やまだ}', japanese: '料理{りょうり}の本{ほん}を読{よ}むのも楽{たの}しいですよ。一緒{いっしょ}に遊{あそ}びましょう。', chinese: '讀料理的書也很開心喔。一起玩吧。' },
      { speaker: '佐藤{さとう}', japanese: 'はい！散歩{さんぽ}して写真{しゃしん}を撮{と}って料理{りょうり}しましょうね。', chinese: '好！散步、拍照、做料理吧。' },
    ],
    quizQuestions: l6Quiz,
  },

  // ─── Unit Test: 單元綜合測驗 ───
  {
    id: 'n5_u1_test',
    unitId: 'n5_u1',
    order: 7,
    titleJp: '単元テスト',
    titleZh: '單元綜合測驗',
    objectives: ['複習本單元所有單字與文法，檢驗學習成果'],
    vocabulary: [],
    grammarIds: [],
    grammarSummaries: [],
    dialogue: [],
    quizQuestions: [
      // ─── 單字題 Q1–Q10 ───

      // Q1 vocabulary — 第1課 先生
      {
        id: 'n5_u1_test_q1',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「先生{せんせい}」の意味{いみ}はどれですか。',
        stemZh: '「先生」的意思是哪個？',
        options: [
          { text: '學生', reason: '錯誤。學生是学生{がくせい}。' },
          { text: '朋友', reason: '錯誤。朋友是友達{ともだち}。' },
          { text: '老師', reason: '正確。先生{せんせい}意為老師。' },
          { text: '公司', reason: '錯誤。公司是会社{かいしゃ}。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '先生的詞義',
          analysis: '先生{せんせい}意為老師。是最基本的稱呼詞彙之一，也可用來尊稱醫生、律師等專業人士。',
          relatedRules: ['📖 第1課 單字「先生」'],
        },
      },

      // Q2 vocabulary — 第2課 お母さん
      {
        id: 'n5_u1_test_q2',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「お母{かあ}さん」の意味{いみ}はどれですか。',
        stemZh: '「お母さん」的意思是哪個？',
        options: [
          { text: '父親', reason: '錯誤。父親是お父{とう}さん。' },
          { text: '母親', reason: '正確。お母{かあ}さん意為母親。' },
          { text: '姊姊', reason: '錯誤。姊姊是姉{あね}。' },
          { text: '妹妹', reason: '錯誤。妹妹是妹{いもうと}。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '家族稱呼：お母さん',
          analysis: 'お母{かあ}さん是對母親的尊稱。稱呼自己的母親（自謙）時用「母{はは}」。',
          relatedRules: ['📖 第2課 單字「お母さん」'],
        },
      },

      // Q3 vocabulary — 第3課 鉛筆
      {
        id: 'n5_u1_test_q3',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「鉛筆{えんぴつ}」の読{よ}み方{かた}はどれですか。',
        stemZh: '「鉛筆」的讀法是哪個？',
        options: [
          { text: 'えんひつ', reason: '錯誤。「筆」在此讀「ぴつ」，有連濁現象。' },
          { text: 'えんぺつ', reason: '錯誤。「筆」的半濁音讀法不是「ぺつ」。' },
          { text: 'えんぴつ', reason: '正確。鉛筆{えんぴつ}意為鉛筆。' },
          { text: 'えんびつ', reason: '錯誤。「筆」在此是半濁音「ぴ」，不是濁音「び」。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '鉛筆的讀音',
          analysis: '鉛筆{えんぴつ}的讀音是「えんぴつ」。注意連濁現象：「筆」本讀「ひつ」，接在「鉛」後面變成「ぴつ」。',
          relatedRules: ['📖 第3課 單字「鉛筆」'],
        },
      },

      // Q4 vocabulary — 第4課 傘
      {
        id: 'n5_u1_test_q4',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「傘{かさ}」の意味{いみ}はどれですか。',
        stemZh: '「傘」的意思是哪個？',
        options: [
          { text: '帽子', reason: '錯誤。帽子是帽子{ぼうし}。' },
          { text: '包包', reason: '錯誤。包包是かばん。' },
          { text: '眼鏡', reason: '錯誤。眼鏡是眼鏡{めがね}。' },
          { text: '傘', reason: '正確。傘{かさ}意為傘。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '傘的詞義',
          analysis: '傘{かさ}意為傘。是日常生活中常用的物品詞彙，讀音只有兩個音節「か・さ」。',
          relatedRules: ['📖 第4課 單字「傘」'],
        },
      },

      // Q5 vocabulary — 第5課 駅
      {
        id: 'n5_u1_test_q5',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「駅{えき}」の意味{いみ}はどれですか。',
        stemZh: '「駅」的意思是哪個？',
        options: [
          { text: '車站', reason: '正確。駅{えき}意為車站。' },
          { text: '醫院', reason: '錯誤。醫院是病院{びょういん}。' },
          { text: '郵局', reason: '錯誤。郵局是郵便局{ゆうびんきょく}。' },
          { text: '公園', reason: '錯誤。公園是公園{こうえん}。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '駅的詞義',
          analysis: '駅{えき}意為車站。日本的交通以鐵路為主，「駅」是最常用的場所詞彙之一。',
          relatedRules: ['📖 第5課 單字「駅」'],
        },
      },

      // Q6 vocabulary — 第6課 好き ⇔ 嫌い
      {
        id: 'n5_u1_test_q6',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「好{す}き」の反対語{はんたいご}はどれですか。',
        stemZh: '「好き」的反義詞是哪個？',
        options: [
          { text: '上手{じょうず}', reason: '錯誤。上手意為擅長，不是好き的反義詞。' },
          { text: '欲{ほ}しい', reason: '錯誤。欲しい意為想要，不是好き的反義詞。' },
          { text: '面白{おもしろ}い', reason: '錯誤。面白い意為有趣，不是好き的反義詞。' },
          { text: '嫌{きら}い', reason: '正確。嫌い（討厭）是好き（喜歡）的反義詞。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '好き與嫌い的配對',
          analysis: '好{す}き（喜歡）⇔嫌{きら}い（討厭）。兩者都是形容動詞，前面的對象用「が」標記。',
          relatedRules: ['📖 第6課 單字「好き・嫌い」'],
        },
      },

      // Q7 vocabulary — 第1課 会社
      {
        id: 'n5_u1_test_q7',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「会社{かいしゃ}」の意味{いみ}はどれですか。',
        stemZh: '「会社」的意思是哪個？',
        options: [
          { text: '學校', reason: '錯誤。學校是学校{がっこう}。' },
          { text: '大學', reason: '錯誤。大學是大学{だいがく}。' },
          { text: '公司', reason: '正確。会社{かいしゃ}意為公司。' },
          { text: '國家', reason: '錯誤。國家是国{くに}。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '会社的詞義',
          analysis: '会社{かいしゃ}意為公司。「会社員{かいしゃいん}」意為公司職員。',
          relatedRules: ['📖 第1課 單字「会社」'],
        },
      },

      // Q8 vocabulary — 第2課 元気
      {
        id: 'n5_u1_test_q8',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「お元気{げんき}ですか。」の「元気{げんき}」はどんな意味{いみ}ですか。',
        stemZh: '「お元気ですか。」中的「元気」是什麼意思？',
        options: [
          { text: '天氣', reason: '錯誤。天氣是天気{てんき}。注意「元気」和「天気」讀音相近但意思不同。' },
          { text: '元氣、精神好', reason: '正確。元気{げんき}意為精神好、健康。' },
          { text: '什麼', reason: '錯誤。什麼是何{なに}。' },
          { text: '一起', reason: '錯誤。一起是一緒{いっしょ}。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '元気的詞義',
          analysis: '元気{げんき}意為精神好、健康。「お元気ですか」是問候對方是否健康的常用語。',
          relatedRules: ['📖 第2課 單字「元気」'],
        },
      },

      // Q9 vocabulary — 第5課 入口 ⇔ 出口
      {
        id: 'n5_u1_test_q9',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「入口{いりぐち}」の反対語{はんたいご}はどれですか。',
        stemZh: '「入口」的反義詞是哪個？',
        options: [
          { text: '出口{でぐち}', reason: '正確。入口（入口）⇔出口（出口）。' },
          { text: '窓{まど}', reason: '錯誤。窓是窗戶，不是入口的反義詞。' },
          { text: 'ドア', reason: '錯誤。ドア是門，不是入口的反義詞。' },
          { text: '外{そと}', reason: '錯誤。外是外面，不是入口的反義詞。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '入口和出口的配對',
          analysis: '入口{いりぐち}⇔出口{でぐち}。「入」＝進入，「出」＝出去，「口」＝出入處。在車站等場所常見這組詞彙。',
          relatedRules: ['📖 第5課 單字「入口・出口」'],
        },
      },

      // Q10 vocabulary — 第3課 新しい ⇔ 古い
      {
        id: 'n5_u1_test_q10',
        category: 'vocabulary' as const,
        level: 'N5' as const,
        stem: '「新{あたら}しい」の反対語{はんたいご}はどれですか。',
        stemZh: '「新しい」的反義詞是哪個？',
        options: [
          { text: '面白{おもしろ}い', reason: '錯誤。面白い意為有趣，不是反義詞。' },
          { text: '古{ふる}い', reason: '正確。古い（舊的）是新しい（新的）的反義詞。' },
          { text: '楽{たの}しい', reason: '錯誤。楽しい意為快樂，不是反義詞。' },
          { text: '多{おお}い', reason: '錯誤。多い意為多的，不是反義詞。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '形容詞反義詞配對',
          analysis: '新{あたら}しい（新的）⇔古{ふる}い（舊的）是基本的反義詞組合。兩者都是い形容詞。',
          relatedRules: ['📖 第3課 單字「新しい・古い」'],
        },
      },

      // ─── 文法題 Q11–Q20 ───

      // Q11 grammar — 第1課 は
      {
        id: 'n5_u1_test_q11',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '田中{たなか}さん＿＿会社{かいしゃ}の人{ひと}です。',
        stemZh: '田中先生是公司的人。',
        options: [
          { text: 'を', reason: '錯誤。「を」是受詞助詞，此處需要主題助詞。' },
          { text: 'が', reason: '錯誤。描述已知主題時「は」比「が」更自然。' },
          { text: 'は', reason: '正確。「は」標記句子的主題「田中さん」。' },
          { text: 'に', reason: '錯誤。「に」是場所或時間助詞，此處不適用。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '主題助詞「は」的用法',
          analysis: '「は」用來標記句子的主題。「AはBです」是描述身分的基本句型。「田中さんは会社の人です」＝「田中先生是公司的人」。',
          relatedRules: ['📖 第1課 文法「AはBです」'],
        },
      },

      // Q12 grammar — 第2課 か
      {
        id: 'n5_u1_test_q12',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '佐藤{さとう}さんは学生{がくせい}です＿＿。（想問對方是不是學生）',
        stemZh: '佐藤同學是學生嗎？（選擇正確的句尾）',
        options: [
          { text: 'ね', reason: '錯誤。「ね」是確認語氣，不是純粹的提問。' },
          { text: 'か', reason: '正確。句尾加「か」構成疑問句。' },
          { text: 'よ', reason: '錯誤。「よ」是強調告知，不是提問。' },
          { text: 'も', reason: '錯誤。「も」是「也」的意思，不放在句尾表疑問。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '疑問助詞「か」',
          analysis: '句尾加「か」把陳述句變成疑問句。「〜ですか」是最基本的敬體疑問句型。',
          relatedRules: ['📖 第2課 文法「〜ですか」'],
        },
      },

      // Q13 grammar — 第3課 の
      {
        id: 'n5_u1_test_q13',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: 'これは山田{やまだ}さん＿＿ノートです。',
        stemZh: '這是山田同學的筆記本。',
        options: [
          { text: 'は', reason: '錯誤。「は」是主題助詞，不表示所有。' },
          { text: 'も', reason: '錯誤。「も」是「也」的意思，不表示所有。' },
          { text: 'が', reason: '錯誤。「が」是主格助詞，不表示所有。' },
          { text: 'の', reason: '正確。「の」連接名詞表示所有格。「AのB」＝「A的B」。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '所有格助詞「の」',
          analysis: '「の」放在兩個名詞之間表示所屬關係。「山田さんのノート」＝「山田同學的筆記本」。',
          relatedRules: ['📖 第3課 文法「AのB」'],
        },
      },

      // Q14 grammar — 第3課 じゃないです
      {
        id: 'n5_u1_test_q14',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: 'これはペン＿＿。鉛筆{えんぴつ}です。',
        stemZh: '這不是筆。是鉛筆。',
        options: [
          { text: 'です', reason: '錯誤。「です」是肯定，但語境需要否定。' },
          { text: 'ですか', reason: '錯誤。「ですか」是疑問，不是否定。' },
          { text: 'でした', reason: '錯誤。「でした」是過去肯定。' },
          { text: 'じゃないです', reason: '正確。「じゃないです」是「です」的否定形。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '否定句型「じゃないです」',
          analysis: '「です」的否定是「じゃないです」（口語）或「ではありません」（書面語）。用來否定名詞句。',
          relatedRules: ['📖 第3課 文法「〜じゃないです」'],
        },
      },

      // Q15 grammar — 第4課 この/その/あの
      {
        id: 'n5_u1_test_q15',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '（手{て}に持{も}っている帽子{ぼうし}について）＿＿帽子{ぼうし}は私{わたし}のです。',
        stemZh: '（拿著手中的帽子）這頂帽子是我的。',
        options: [
          { text: 'この', reason: '正確。「この」＋名詞，指靠近說話者的事物。手中的東西用「この」。' },
          { text: 'その', reason: '錯誤。「その」指靠近聽者的事物。' },
          { text: 'あの', reason: '錯誤。「あの」指離雙方都遠的事物。' },
          { text: 'これ', reason: '錯誤。「これ」是代名詞，不能直接接名詞。應用「この」。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '連體詞「この」的用法',
          analysis: '修飾名詞時用「この/その/あの」＋名詞。「これ/それ/あれ」是代名詞，獨立使用，不接名詞。',
          relatedRules: ['📖 第4課 文法「この/その/あの＋名詞」'],
        },
      },

      // Q16 grammar — 第5課 があります / がいます
      {
        id: 'n5_u1_test_q16',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '図書館{としょかん}の前{まえ}に猫{ねこ}＿＿。',
        stemZh: '圖書館前面有貓。',
        options: [
          { text: 'があります', reason: '錯誤。「あります」用於無生命物體，猫是有生命的動物。' },
          { text: 'にいます', reason: '錯誤。場所後面已有「に」，主語用「が」不是「に」。' },
          { text: 'がいます', reason: '正確。猫是有生命的動物，用「がいます」表示存在。' },
          { text: 'はあります', reason: '錯誤。存在的新資訊用「が」，且猫是有生命物。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '存在動詞「います」用於有生命物',
          analysis: '有生命物（人、動物）用「います」，無生命物（書、時計等）用「あります」。猫是動物，所以用「がいます」。',
          relatedRules: ['📖 第5課 文法「場所に〜がいます」'],
        },
      },

      // Q17 grammar — 第6課 〜が好きです
      {
        id: 'n5_u1_test_q17',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '私{わたし}は音楽{おんがく}＿＿大好{だいす}きです。',
        stemZh: '我非常喜歡音樂。',
        options: [
          { text: 'を', reason: '錯誤。「好き」是形容動詞，喜歡的對象不用「を」。' },
          { text: 'は', reason: '錯誤。喜歡的對象用「が」而非「は」。' },
          { text: 'に', reason: '錯誤。「に」不用於「好き」的對象。' },
          { text: 'が', reason: '正確。「好き」「大好き」前面用「が」標記喜歡的對象。' },
        ],
        correctIndex: 3,
        explanation: {
          keyPoint: '「〜が好きです」的助詞搭配',
          analysis: '「好き」「大好き」「嫌い」等詞前面的對象用「が」標記。常見錯誤是用「を」，但正確的是「が」。',
          relatedRules: ['📖 第6課 文法「〜のが好きです」'],
        },
      },

      // Q18 grammar — 第2課 も
      {
        id: 'n5_u1_test_q18',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: 'A：「私{わたし}は台湾{たいわん}です。」B：「私{わたし}＿＿台湾{たいわん}です。」',
        stemZh: 'A：「我是台灣。」B：「我也是台灣。」',
        options: [
          { text: 'は', reason: '錯誤。「は」不能表達「也是」的意思。' },
          { text: 'も', reason: '正確。「も」替代「は」使用，表示「也」。' },
          { text: 'の', reason: '錯誤。「の」是所有格，此處不適用。' },
          { text: 'が', reason: '錯誤。「が」是主格助詞，不表示「也」。' },
        ],
        correctIndex: 1,
        explanation: {
          keyPoint: '助詞「も」的用法',
          analysis: '「も」替代「は」使用，表示「也」。A說他是台灣人，B也是台灣人時用「私も台湾です」。',
          relatedRules: ['📖 第2課 文法「AもB」'],
        },
      },

      // Q19 grammar — 第5課 に
      {
        id: 'n5_u1_test_q19',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '銀行{ぎんこう}は駅{えき}の隣{となり}＿＿あります。',
        stemZh: '銀行在車站旁邊。',
        options: [
          { text: 'で', reason: '錯誤。「で」用於動作發生的場所，此處是靜態存在。' },
          { text: 'を', reason: '錯誤。「を」是受詞助詞，不用於標記場所。' },
          { text: 'に', reason: '正確。「に」標記靜態存在的場所。「場所にあります」。' },
          { text: 'が', reason: '錯誤。「が」是主格助詞，不用於標記場所。' },
        ],
        correctIndex: 2,
        explanation: {
          keyPoint: '場所助詞「に」',
          analysis: '靜態存在用「に」。「銀行は駅の隣にあります」＝「銀行在車站旁邊」。注意「に」和「で」的區別：存在用「に」，動作場所用「で」。',
          relatedRules: ['📖 第5課 文法「〜に」'],
        },
      },

      // Q20 grammar — 第6課 〜がほしいです
      {
        id: 'n5_u1_test_q20',
        category: 'grammar' as const,
        level: 'N5' as const,
        stem: '新{あたら}しいカメラ＿＿ほしいです。',
        stemZh: '想要新的相機。',
        options: [
          { text: 'が', reason: '正確。「ほしい」前面用「が」標記想要的對象。' },
          { text: 'を', reason: '錯誤。「ほしい」是い形容詞，對象用「が」而非「を」。' },
          { text: 'は', reason: '錯誤。想要的對象用「が」而非「は」。' },
          { text: 'に', reason: '錯誤。「に」不用於「ほしい」的對象。' },
        ],
        correctIndex: 0,
        explanation: {
          keyPoint: '「〜がほしいです」的助詞搭配',
          analysis: '「〜がほしいです」表示「想要〜」。「ほしい」是い形容詞，前面的對象用「が」標記。常見錯誤是用「を」。',
          relatedRules: ['📖 第6課 文法「〜がほしいです」'],
        },
      },
    ],
  },
]
