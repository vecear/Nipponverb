import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import QuestionCard from '../components/QuestionCard'
import { usePracticeStore } from '../store/usePracticeStore'
import { Question } from '../types'
import { generateGojuonQuestion } from '../data/gojuon'
import { generateVerbQuestion } from '../data/verbs'
import { generateGrammarQuestion } from '../data/grammar'
import { generateKanjiQuestion } from '../data/kanji'

type PracticeCategory = 'gojuon' | 'verbs' | 'grammar' | 'kanji'
type GojuonSubcategory = 'hiragana' | 'katakana'

const Practice = () => {
  const { t, i18n } = useTranslation()
  const { category } = useParams<{ category: string }>()
  const navigate = useNavigate()

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
  const [selectedLevel, setSelectedLevel] = useState<'N5' | 'N4' | 'N3' | 'N2' | 'N1'>('N5')
  const [selectedSubcategory, setSelectedSubcategory] = useState<GojuonSubcategory>('hiragana')
  const [showCategorySelect, setShowCategorySelect] = useState(true)

  // Generate questions based on category
  const generateQuestions = (
    cat: PracticeCategory,
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1',
    count: number = 10
  ): Question[] => {
    const generatedQuestions: Question[] = []

    for (let i = 0; i < count; i++) {
      let q

      switch (cat) {
        case 'gojuon':
          q = generateGojuonQuestion(selectedSubcategory, Math.random() > 0.5 ? 'char-to-romaji' : 'romaji-to-char')
          break
        case 'verbs':
          q = generateVerbQuestion(level)
          break
        case 'grammar':
          q = generateGrammarQuestion(level)
          break
        case 'kanji':
          q = generateKanjiQuestion(level, Math.random() > 0.5 ? 'reading' : 'meaning', i18n.language)
          break
        default:
          q = generateGrammarQuestion(level)
      }

      generatedQuestions.push({
        id: `${cat}_${i}`,
        ...q,
      })
    }

    return generatedQuestions
  }

  const startPractice = () => {
    const cat = category as PracticeCategory
    const newQuestions = generateQuestions(cat, selectedLevel, 10)
    setQuestions(newQuestions)
    setShowCategorySelect(false)
    setShowResults(false)
  }

  const handleAnswer = (answer: string) => {
    checkAnswer(answer)

    if (currentIndex < questions.length - 1) {
      nextQuestion()
    } else {
      setShowResults(true)
    }
  }

  const handleRestart = () => {
    setShowCategorySelect(true)
    resetPractice()
  }

  // Determine if we should show the category selection Grid (if no category param) or specific category setup
  const isDirectAccess = !category

  const modes = [
    {
      id: 'gojuon',
      title: t('practice.categories.gojuon.title'),
      description: t('practice.categories.gojuon.description'),
      icon: 'あア',
      color: 'from-green-500 to-teal-500',
    },
    {
      id: 'verbs',
      title: t('practice.categories.verbs.title'),
      description: t('practice.categories.verbs.description'),
      icon: '✍️',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'grammar',
      title: t('practice.categories.grammar.title'),
      description: t('practice.categories.grammar.description'),
      icon: '📖',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'kanji',
      title: t('practice.categories.kanji.title'),
      description: t('practice.categories.kanji.description'),
      icon: '漢',
      color: 'from-orange-500 to-red-500',
    },
  ]

  const handleCategorySelect = (catId: string) => {
    navigate(`/practice/${catId}`)
  }

  // If visiting /practice root, show the grid
  if (isDirectAccess) {
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-zen font-bold text-gradient mb-4">{t('practice.title')}</h1>
          <p className="text-white/60">{t('practice.selectCategory')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {modes.map((mode, index) => (
            <motion.div
              key={mode.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleCategorySelect(mode.id)}
              className="card p-6 hover:bg-white/15 cursor-pointer transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${mode.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {mode.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{mode.title}</h3>
                  <p className="text-white/60 text-sm">{mode.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  // Category selection screen within a specific practice mode (Pre-start)
  if (showCategorySelect) {
    return (
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="card">
          <h1 className="text-2xl md:text-4xl font-zen font-bold mb-6 text-gradient capitalize">
            {t(`practice.categories.${category}.title`)}
          </h1>

          {category === 'gojuon' && (
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-3">{t('practice.selectSubcategory')}:</label>
              <div className="grid grid-cols-2 gap-4">
                {(['hiragana', 'katakana'] as GojuonSubcategory[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedSubcategory(type)}
                    className={`p-3 md:p-4 rounded-xl transition-all ${selectedSubcategory === type
                      ? 'bg-gradient-to-r from-sakura-pink to-electric-cyan text-white'
                      : 'glass hover:bg-white/10'
                      }`}
                  >
                    <div className="text-xl md:text-2xl mb-1 md:mb-2">{type === 'hiragana' ? 'あ' : 'ア'}</div>
                    <div className="font-semibold capitalize text-sm md:text-base">{t(`practice.categories.gojuon.${type}`)}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {category !== 'gojuon' && (
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-3">{t('practice.selectLevel')}:</label>
              <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-2 md:grid md:grid-cols-5 md:gap-3">
                {(['N5', 'N4', 'N3', 'N2', 'N1'] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`p-3 md:p-4 rounded-xl transition-all ${selectedLevel === level
                      ? 'bg-gradient-to-r from-sakura-pink to-electric-cyan text-white'
                      : 'glass hover:bg-white/10'
                      }`}
                  >
                    <div className="text-lg md:text-xl font-bold">{level}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-4">
            <button onClick={startPractice} className="btn-primary w-full text-lg py-4">
              {t('practice.startPractice')}
            </button>
            <button
              onClick={() => navigate('/')}
              className="btn-secondary w-full"
            >
              {t('practice.backToDashboard')}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Results screen
  if (showResults) {
    const accuracy = totalAttempts > 0 ? Math.round((score / totalAttempts) * 100) : 0

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl mx-auto text-center space-y-8"
      >
        <div className="card">
          <h1 className="text-3xl md:text-4xl font-zen font-bold mb-4 text-gradient">
            {t('practice.complete')}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 my-6 md:my-8">
            <div className="glass p-4 md:p-6 rounded-xl">
              <div className="text-4xl md:text-5xl font-bold text-sakura-pink mb-2">
                {score}/{totalAttempts}
              </div>
              <div className="text-sm md:text-base text-white/60">{t('practice.questionsCorrect')}</div>
            </div>

            <div className="glass p-4 md:p-6 rounded-xl">
              <div className="text-4xl md:text-5xl font-bold text-electric-cyan mb-2">
                {accuracy}%
              </div>
              <div className="text-sm md:text-base text-white/60">{t('practice.accuracy')}</div>
            </div>
          </div>

          <div className="space-y-4">
            <button onClick={handleRestart} className="btn-primary w-full">
              {t('practice.practiceAgain')}
            </button>
            <button
              onClick={() => navigate('/')}
              className="btn-secondary w-full"
            >
              {t('practice.backToDashboard')}
            </button>
          </div>
        </div>
      </motion.div>
    )
  }

  // Practice screen
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-4 md:mb-6">
        <div className="flex items-center justify-between mb-2 md:mb-4">
          <h1 className="text-xl md:text-2xl font-zen font-bold capitalize">
            {t(`practice.categories.${category}.title`)}
          </h1>
          <div className="text-xs md:text-sm text-white/60">
            {t('practice.question', { current: currentIndex + 1, total: questions.length })}
          </div>
        </div>

        <div className="w-full bg-white/10 rounded-full h-1.5">
          <motion.div
            className="bg-gradient-to-r from-sakura-pink to-electric-cyan h-1.5 rounded-full"
            initial={{ width: 0 }}
            animate={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
            }}
            transition={{ duration: 0.15 }}
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
