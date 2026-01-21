import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import QuestionCard from '../components/QuestionCard'
import { usePracticeStore } from '../store/usePracticeStore'
import { Question } from '../types'

// Mock data - will be replaced with Firestore data
const mockQuestions: Record<string, Question[]> = {
  verbs: [
    {
      id: '1',
      stem: '明日、学校へ___。',
      correct: '行きます',
      options: ['行きます', '行くい', '行った', '行いて'],
      explanation: 'Polite non-past form is required for future actions in formal contexts.',
      level: 'N5',
    },
    {
      id: '2',
      stem: '昨日、友達に___。',
      correct: '会いました',
      options: ['会いました', '会います', '会う', '会って'],
      explanation: 'Past tense polite form is needed for actions that already happened.',
      level: 'N5',
    },
  ],
  kanji: [
    {
      id: '1',
      stem: '「学校」の読み方は?',
      correct: 'がっこう',
      options: ['がっこう', 'がくこう', 'がっこ', 'がくこ'],
      explanation: '学校 (がっこう) means "school".',
      level: 'N5',
    },
  ],
  grammar: [
    {
      id: '1',
      stem: '日本語___勉強しています。',
      correct: 'を',
      options: ['を', 'が', 'に', 'で'],
      explanation: 'The particle を marks the direct object of an action.',
      level: 'N5',
    },
  ],
}

const Practice = () => {
  const { t } = useTranslation()
  const { category } = useParams<{ category: string }>()
  const {
    currentQuestion,
    currentIndex,
    questions,
    score,
    totalAttempts,
    setQuestions,
    nextQuestion,
    checkAnswer,
    resetPractice,
  } = usePracticeStore()

  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    const categoryQuestions = mockQuestions[category || 'verbs'] || []
    setQuestions(categoryQuestions)
    setShowResults(false)
  }, [category, setQuestions])

  const handleAnswer = (answer: string) => {
    checkAnswer(answer)

    if (currentIndex < questions.length - 1) {
      setTimeout(() => {
        nextQuestion()
      }, 2000)
    } else {
      setTimeout(() => {
        setShowResults(true)
      }, 2000)
    }
  }

  const handleRestart = () => {
    const categoryQuestions = mockQuestions[category || 'verbs'] || []
    setQuestions(categoryQuestions)
    setShowResults(false)
  }

  if (showResults) {
    const accuracy = totalAttempts > 0 ? Math.round((score / totalAttempts) * 100) : 0

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl mx-auto text-center space-y-8"
      >
        <div className="card">
          <h1 className="text-4xl font-zen font-bold mb-4 text-gradient">
            {t('practice.complete')}
          </h1>

          <div className="grid grid-cols-2 gap-6 my-8">
            <div className="glass p-6 rounded-xl">
              <div className="text-5xl font-bold text-sakura-pink mb-2">
                {score}/{totalAttempts}
              </div>
              <div className="text-white/60">{t('practice.questionsCorrect')}</div>
            </div>

            <div className="glass p-6 rounded-xl">
              <div className="text-5xl font-bold text-electric-cyan mb-2">
                {accuracy}%
              </div>
              <div className="text-white/60">{t('practice.accuracy')}</div>
            </div>
          </div>

          <div className="space-y-4">
            <button onClick={handleRestart} className="btn-primary w-full">
              {t('practice.practiceAgain')}
            </button>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary w-full"
            >
              {t('practice.backToDashboard')}
            </button>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-zen font-bold capitalize">
            {category} {t('practice.title')}
          </h1>
          <div className="text-white/60">
            {t('practice.question', { current: currentIndex + 1, total: questions.length })}
          </div>
        </div>

        <div className="w-full bg-white/10 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-sakura-pink to-electric-cyan h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {currentQuestion && (
          <QuestionCard
            key={currentQuestion.id}
            question={currentQuestion}
            onAnswer={handleAnswer}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Practice
