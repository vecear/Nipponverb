import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
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
          q = generateKanjiQuestion(level, Math.random() > 0.5 ? 'reading' : 'meaning')
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
    setShowCategorySelect(true)
    resetPractice()
  }

  // Category selection screen
  if (showCategorySelect) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto space-y-8"
      >
        <div className="card">
          <h1 className="text-4xl font-zen font-bold mb-6 text-gradient capitalize">
            {category} Practice
          </h1>

          {category === 'gojuon' && (
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-3">Select Type:</label>
              <div className="grid grid-cols-2 gap-4">
                {(['hiragana', 'katakana'] as GojuonSubcategory[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedSubcategory(type)}
                    className={`p-4 rounded-xl transition-all ${selectedSubcategory === type
                      ? 'bg-gradient-to-r from-sakura-pink to-electric-cyan text-white'
                      : 'glass hover:bg-white/10'
                      }`}
                  >
                    <div className="text-2xl mb-2">{type === 'hiragana' ? 'あ' : 'ア'}</div>
                    <div className="font-semibold capitalize">{type}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {category !== 'gojuon' && (
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-3">Select JLPT Level:</label>
              <div className="grid grid-cols-5 gap-3">
                {(['N5', 'N4', 'N3', 'N2', 'N1'] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`p-4 rounded-xl transition-all ${selectedLevel === level
                      ? 'bg-gradient-to-r from-sakura-pink to-electric-cyan text-white'
                      : 'glass hover:bg-white/10'
                      }`}
                  >
                    <div className="text-xl font-bold">{level}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-4">
            <button onClick={startPractice} className="btn-primary w-full text-lg py-4">
              Start Practice (10 Questions)
            </button>
            <button
              onClick={() => navigate('/')}
              className="btn-secondary w-full"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </motion.div>
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
          <h1 className="text-4xl font-zen font-bold mb-4 text-gradient">
            Practice Complete!
          </h1>

          <div className="grid grid-cols-2 gap-6 my-8">
            <div className="glass p-6 rounded-xl">
              <div className="text-5xl font-bold text-sakura-pink mb-2">
                {score}/{totalAttempts}
              </div>
              <div className="text-white/60">Questions Correct</div>
            </div>

            <div className="glass p-6 rounded-xl">
              <div className="text-5xl font-bold text-electric-cyan mb-2">
                {accuracy}%
              </div>
              <div className="text-white/60">Accuracy</div>
            </div>
          </div>

          <div className="space-y-4">
            <button onClick={handleRestart} className="btn-primary w-full">
              Practice Again
            </button>
            <button
              onClick={() => navigate('/')}
              className="btn-secondary w-full"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </motion.div>
    )
  }

  // Practice screen
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-zen font-bold capitalize">
            {category} Practice
          </h1>
          <div className="text-white/60">
            Question {currentIndex + 1} / {questions.length}
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
