// JLPT Exam data and generation
import { Question } from '../types'
import { generateGrammarQuestion } from './grammar'
import { generateKanjiQuestion } from './kanji'

export interface ExamSection {
    type: 'vocab' | 'grammar' | 'reading' | 'kanji'
    title: string
    questions: Question[]
    timeLimit: number // in minutes
}

export interface JLPTExam {
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'
    sections: ExamSection[]
    totalTimeLimit: number // in minutes
}

// Time limits based on actual JLPT exam structure
const examTimeLimits: Record<string, { vocab: number; grammar: number; reading: number; total: number }> = {
    N5: { vocab: 20, grammar: 25, reading: 30, total: 75 },
    N4: { vocab: 25, grammar: 30, reading: 35, total: 90 },
    N3: { vocab: 30, grammar: 35, reading: 40, total: 105 },
    N2: { vocab: 35, grammar: 40, reading: 50, total: 125 },
    N1: { vocab: 40, grammar: 50, reading: 80, total: 170 },
}

// Generate a full JLPT exam
export function generateJLPTExam(level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'): JLPTExam {
    const limits = examTimeLimits[level]

    // Section 1: Vocabulary and Kanji
    const vocabQuestions: Question[] = []
    for (let i = 0; i < 15; i++) {
        const question = generateKanjiQuestion(level, Math.random() > 0.5 ? 'reading' : 'meaning')
        vocabQuestions.push({
            ...question,
            id: `vocab_${i}`,
        })
    }

    // Section 2: Grammar
    const grammarQuestions: Question[] = []
    for (let i = 0; i < 20; i++) {
        const question = generateGrammarQuestion(level)
        grammarQuestions.push({
            ...question,
            id: `grammar_${i}`,
        })
    }

    // Section 3: Reading (using grammar questions as placeholder)
    const readingQuestions: Question[] = []
    for (let i = 0; i < 15; i++) {
        const question = generateGrammarQuestion(level)
        readingQuestions.push({
            ...question,
            id: `reading_${i}`,
            stem: `Read the passage and answer:\n\n${question.stem}`,
        })
    }

    return {
        level,
        sections: [
            {
                type: 'vocab',
                title: 'Vocabulary and Kanji',
                questions: vocabQuestions,
                timeLimit: limits.vocab,
            },
            {
                type: 'grammar',
                title: 'Grammar',
                questions: grammarQuestions,
                timeLimit: limits.grammar,
            },
            {
                type: 'reading',
                title: 'Reading Comprehension',
                questions: readingQuestions,
                timeLimit: limits.reading,
            },
        ],
        totalTimeLimit: limits.total,
    }
}

// Sample reading passages for more realistic questions
export const readingPassages = {
    N5: [
        {
            title: 'My Daily Routine',
            text: '私は毎朝七時に起きます。朝ごはんを食べてから、学校へ行きます。学校は八時半に始まります。',
            questions: [
                {
                    stem: 'What time does the person wake up?',
                    correct: '7:00 AM',
                    options: ['7:00 AM', '8:00 AM', '8:30 AM', '9:00 AM'],
                    explanation: '七時 means 7 o\'clock',
                },
            ],
        },
    ],
    N4: [
        {
            title: 'Weekend Plans',
            text: '今週末、友達と映画を見に行くつもりです。その後、レストランで晩ごはんを食べます。',
            questions: [
                {
                    stem: 'What will they do after the movie?',
                    correct: 'Eat dinner at a restaurant',
                    options: ['Go home', 'Eat dinner at a restaurant', 'Go shopping', 'Study together'],
                    explanation: 'その後 means "after that", and they will eat dinner (晩ごはん) at a restaurant',
                },
            ],
        },
    ],
}
