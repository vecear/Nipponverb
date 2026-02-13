// JLPT Grammar Questions — UnifiedQuestion format
// Imports from expanded question banks (N5-N1, 505+ questions each)

import { UnifiedQuestion } from './questions/types'
import { unifiedToQuestion } from '../utils/questionAdapters'
import { allGrammarQuestions } from './questions/grammar'

export const grammarQuestions: UnifiedQuestion[] = allGrammarQuestions

// ─── Public API (backward compatible) ───

function formatGrammarAsQuestion(question: UnifiedQuestion) {
    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5)
    const newCorrectIndex = shuffledOptions.findIndex(
        o => o.text === question.options[question.correctIndex].text
    )
    return unifiedToQuestion({
        ...question,
        options: shuffledOptions,
        correctIndex: newCorrectIndex,
    })
}

export function generateGrammarQuestion(level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1' = 'N5') {
    const levelQuestions = grammarQuestions.filter(q => q.level === level)
    if (levelQuestions.length === 0) {
        return generateGrammarQuestion('N5')
    }

    const question = levelQuestions[Math.floor(Math.random() * levelQuestions.length)]
    return formatGrammarAsQuestion(question)
}

export function getGrammarQuestionBank(level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1') {
    return grammarQuestions.filter(q => q.level === level).map(formatGrammarAsQuestion)
}

export function getGrammarQuestionCount(level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'): number {
    return grammarQuestions.filter(q => q.level === level).length
}
