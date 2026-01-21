// Sample JLPT Grammar Questions
// Based on common JLPT patterns and structures

export interface GrammarQuestion {
    id: string
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'
    stem: string
    correct: string
    options: string[]
    explanation: string
    pattern: string
}

export const grammarQuestions: GrammarQuestion[] = [
    // N5 Level
    {
        id: 'g_n5_001',
        level: 'N5',
        stem: '明日、学校___行きます。',
        correct: 'へ',
        options: ['へ', 'に', 'で', 'を'],
        explanation: '「へ」は移動の方向を表すために使われます。',
        pattern: '〜へ行く',
    },
    {
        id: 'g_n5_002',
        level: 'N5',
        stem: '毎日、図書館___勉強します。',
        correct: 'で',
        options: ['で', 'に', 'へ', 'を'],
        explanation: '「で」は動作が行われる場所を表します。',
        pattern: '〜で〜する',
    },
    {
        id: 'g_n5_003',
        level: 'N5',
        stem: '日本語___難しいですが、面白いです。',
        correct: 'は',
        options: ['は', 'が', 'を', 'に'],
        explanation: '「は」は文の主題（トピック）を表します。',
        pattern: '〜は〜です',
    },
    {
        id: 'g_n5_004',
        level: 'N5',
        stem: '昨日、友達___会いました。',
        correct: 'に',
        options: ['に', 'を', 'と', 'で'],
        explanation: '「に」は会う対象を表すために使われます。',
        pattern: '〜に会う',
    },
    {
        id: 'g_n5_005',
        level: 'N5',
        stem: 'コーヒー___紅茶、どちらが好きですか。',
        correct: 'と',
        options: ['と', 'や', 'か', 'も'],
        explanation: '「と」は「どちら」と使われ、複数を並列して表す時に使います。',
        pattern: 'AとB、どちら',
    },

    // N4 Level
    {
        id: 'g_n4_001',
        level: 'N4',
        stem: '雨が降って___、試合は中止になった。',
        correct: 'しまった',
        options: ['しまった', 'いた', 'おいた', 'みた'],
        explanation: '「〜てしまう」は、残念な結果や完了した動作を表します。',
        pattern: '〜てしまう',
    },
    {
        id: 'g_n4_002',
        level: 'N4',
        stem: '先生に___もらいました。',
        correct: '教えて',
        options: ['教えて', '教えられて', '教えさせて', '教えて'],
        explanation: '「〜てもらう」は、恩恵を受ける（してもらう）ことを意味します。',
        pattern: '〜てもらう',
    },
    {
        id: 'g_n4_003',
        level: 'N4',
        stem: '日本に___ことがありますか。',
        correct: '行った',
        options: ['行った', '行く', '行って', '行っている'],
        explanation: '「〜たことがある」は過去の経験を表します。',
        pattern: '〜たことがある',
    },
    {
        id: 'g_n4_004',
        level: 'N4',
        stem: '宿題を___ながら、音楽を聞いています。',
        correct: 'し',
        options: ['し', 'する', 'して', 'した'],
        explanation: '「〜ながら」は二つの動作が同時に行われることを表します。',
        pattern: '〜ながら',
    },

    // N3 Level
    {
        id: 'g_n3_001',
        level: 'N3',
        stem: '彼は優しい___、時々厳しい。',
        correct: 'が',
        options: ['が', 'けど', 'のに', 'ものの'],
        explanation: '「が」は対照的な内容をつなぐ時に使われます。',
        pattern: '〜が、〜',
    },
    {
        id: 'g_n3_002',
        level: 'N3',
        stem: '雨が降りそう___、傘を持って行きましょう。',
        correct: 'だから',
        options: ['だから', 'なのに', 'ても', 'ば'],
        explanation: '「だから」は論理的な帰結（理由）を表します。',
        pattern: '〜だから',
    },
    {
        id: 'g_n3_003',
        level: 'N3',
        stem: '彼女は日本語が話せる___、漢字は読めない。',
        correct: 'が',
        options: ['が', 'し', 'のに', 'ても'],
        explanation: '「が」は二つの能力や事柄の対比を表します。',
        pattern: '〜が、〜ない',
    },

    // N2 Level
    {
        id: 'g_n2_001',
        level: 'N2',
        stem: '努力した___、合格できなかった。',
        correct: 'にもかかわらず',
        options: ['にもかかわらず', 'おかげで', 'ために', 'ことに'],
        explanation: '「にもかかわらず」は「〜なのに」という意味で、逆接を表します。',
        pattern: '〜にもかかわらず',
    },
    {
        id: 'g_n2_002',
        level: 'N2',
        stem: '彼は忙しい___、手伝ってくれた。',
        correct: 'にもかかわらず',
        options: ['にもかかわらず', 'ばかりか', 'うえに', 'わりに'],
        explanation: '「にもかかわらず」は予想外の結果が生じることを表します。',
        pattern: '〜にもかかわらず',
    },

    // N1 Level
    {
        id: 'g_n1_001',
        level: 'N1',
        stem: '彼の態度___、許すことができない。',
        correct: 'には',
        options: ['には', 'では', 'とは', 'からは'],
        explanation: '「には」は、改まった文脈で主題を強調する時に使われます。',
        pattern: '〜には',
    },
]

// Generate grammar questions with tricky distractors
export function generateGrammarQuestion(level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1' = 'N5') {
    const levelQuestions = grammarQuestions.filter(q => q.level === level)
    if (levelQuestions.length === 0) {
        // Fallback to N5 if no questions for the level
        return grammarQuestions.filter(q => q.level === 'N5')[0]
    }

    const question = levelQuestions[Math.floor(Math.random() * levelQuestions.length)]

    return {
        id: question.id,
        stem: question.stem,
        correct: question.correct,
        options: [...question.options].sort(() => Math.random() - 0.5),
        explanation: question.explanation,
        level: question.level,
        source: 'jlpt_grammar',
    }
}
