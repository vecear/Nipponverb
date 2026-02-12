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
        explanation: '「へ」は移動{いどう}の方向{ほうこう}を表{あらわ}すために使{つか}われます。',
        pattern: '〜へ行く',
    },
    {
        id: 'g_n5_002',
        level: 'N5',
        stem: '毎日、図書館___勉強します。',
        correct: 'で',
        options: ['で', 'に', 'へ', 'を'],
        explanation: '「で」は動作{どうさ}が行{おこな}われる場所{ばしょ}を表{あらわ}します。',
        pattern: '〜で〜する',
    },
    {
        id: 'g_n5_003',
        level: 'N5',
        stem: '日本語___難しいですが、面白いです。',
        correct: 'は',
        options: ['は', 'が', 'を', 'に'],
        explanation: '「は」は文{ぶん}の主題{しゅだい}（トピック）を表{あらわ}します。',
        pattern: '〜は〜です',
    },
    {
        id: 'g_n5_004',
        level: 'N5',
        stem: '昨日、友達___会いました。',
        correct: 'に',
        options: ['に', 'を', 'と', 'で'],
        explanation: '「に」は会{あ}う対象{たいしょう}を表{あらわ}すために使{つか}われます。',
        pattern: '〜に会う',
    },
    {
        id: 'g_n5_005',
        level: 'N5',
        stem: 'コーヒー___紅茶、どちらが好きですか。',
        correct: 'と',
        options: ['と', 'や', 'か', 'も'],
        explanation: '「と」は「どちら」と使{つか}われ、複数{ふくすう}を並列{へいれつ}して表{あらわ}す時{とき}に使{つか}います。',
        pattern: 'AとB、どちら',
    },

    // N4 Level
    {
        id: 'g_n4_001',
        level: 'N4',
        stem: '雨が降って___、試合は中止になった。',
        correct: 'しまった',
        options: ['しまった', 'いた', 'おいた', 'みた'],
        explanation: '「〜てしまう」は、残念{ざんねん}な結果{けっか}や完了{かんりょう}した動作{どうさ}を表{あらわ}します。',
        pattern: '〜てしまう',
    },
    {
        id: 'g_n4_002',
        level: 'N4',
        stem: '先生に___もらいました。',
        correct: '教えて',
        options: ['教えて', '教えられて', '教えさせて', '教えて'],
        explanation: '「〜てもらう」は、恩恵{おんけい}を受{う}ける（してもらう）ことを意味{いみ}します。',
        pattern: '〜てもらう',
    },
    {
        id: 'g_n4_003',
        level: 'N4',
        stem: '日本に___ことがありますか。',
        correct: '行った',
        options: ['行った', '行く', '行って', '行っている'],
        explanation: '「〜たことがある」は過去{かこ}の経験{けいけん}を表{あらわ}します。',
        pattern: '〜たことがある',
    },
    {
        id: 'g_n4_004',
        level: 'N4',
        stem: '宿題を___ながら、音楽を聞いています。',
        correct: 'し',
        options: ['し', 'する', 'して', 'した'],
        explanation: '「〜ながら」は二{ふた}つの動作{どうさ}が同時{どうじ}に行{おこな}われることを表{あらわ}します。',
        pattern: '〜ながら',
    },

    // N3 Level
    {
        id: 'g_n3_001',
        level: 'N3',
        stem: '彼は優しい___、時々厳しい。',
        correct: 'が',
        options: ['が', 'けど', 'のに', 'ものの'],
        explanation: '「が」は対照的{たいしょうてき}な内容{ないよう}をつなぐ時{とき}に使{つか}われます。',
        pattern: '〜が、〜',
    },
    {
        id: 'g_n3_002',
        level: 'N3',
        stem: '雨が降りそう___、傘を持って行きましょう。',
        correct: 'だから',
        options: ['だから', 'なのに', 'ても', 'ば'],
        explanation: '「だから」は論理的{ろんりてき}な帰結{きけつ}（理由{りゆう}）を表{あらわ}します。',
        pattern: '〜だから',
    },
    {
        id: 'g_n3_003',
        level: 'N3',
        stem: '彼女は日本語が話せる___、漢字は読めない。',
        correct: 'が',
        options: ['が', 'し', 'のに', 'ても'],
        explanation: '「が」は二{ふた}つの能力{のうりょく}や事柄{ことがら}の対比{たいひ}を表{あらわ}します。',
        pattern: '〜が、〜ない',
    },

    // N2 Level
    {
        id: 'g_n2_001',
        level: 'N2',
        stem: '努力した___、合格できなかった。',
        correct: 'にもかかわらず',
        options: ['にもかかわらず', 'おかげで', 'ために', 'ことに'],
        explanation: '「にもかかわらず」は「〜なのに」という意味{いみ}で、逆接{ぎゃくせつ}を表{あらわ}します。',
        pattern: '〜にもかかわらず',
    },
    {
        id: 'g_n2_002',
        level: 'N2',
        stem: '彼は忙しい___、手伝ってくれた。',
        correct: 'にもかかわらず',
        options: ['にもかかわらず', 'ばかりか', 'うえに', 'わりに'],
        explanation: '「にもかかわらず」は予想外{よそうがい}の結果{けっか}が生{しょう}じることを表{あらわ}します。',
        pattern: '〜にもかかわらず',
    },

    // N1 Level
    {
        id: 'g_n1_001',
        level: 'N1',
        stem: '彼の態度___、許すことができない。',
        correct: 'には',
        options: ['には', 'では', 'とは', 'からは'],
        explanation: '「には」は、改{あらた}まった文脈{ぶんみゃく}で主題{しゅだい}を強調{きょうちょう}する時{とき}に使{つか}われます。',
        pattern: '〜には',
    },
]

function formatGrammarQuestion(question: GrammarQuestion) {
    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5)
    return {
        id: question.id,
        stem: question.stem,
        correct: question.correct,
        options: shuffledOptions,
        explanation: question.explanation,
        level: question.level,
        source: 'jlpt_grammar',
        detailedExplanation: {
            correctRule: `【ポイント】${question.pattern}\n【解説{かいせつ}】${question.explanation}`,
            distractors: shuffledOptions.map(opt => ({
                text: opt,
                reason: opt === question.correct
                    ? `正解{せいかい}！${question.explanation}`
                    : `不正解{ふせいかい}：ここでは「${opt}」ではなく、「${question.correct}」が正{ただ}しいです（${question.pattern}）。`,
            })),
        },
    }
}

// Generate grammar questions with tricky distractors
export function generateGrammarQuestion(level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1' = 'N5') {
    const levelQuestions = grammarQuestions.filter(q => q.level === level)
    if (levelQuestions.length === 0) {
        // Fallback to N5 if no questions for the level
        return generateGrammarQuestion('N5')
    }

    const question = levelQuestions[Math.floor(Math.random() * levelQuestions.length)]
    return formatGrammarQuestion(question)
}

export function getGrammarQuestionBank(level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1') {
    return grammarQuestions.filter(q => q.level === level).map(formatGrammarQuestion)
}

export function getGrammarQuestionCount(level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'): number {
    return grammarQuestions.filter(q => q.level === level).length
}
