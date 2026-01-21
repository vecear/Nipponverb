import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Stage, getStagesByLevel } from '../data/stages'

const Stages = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [selectedLevel, setSelectedLevel] = useState<'N5' | 'N4' | 'N3' | 'N2' | 'N1' | null>(null)
  const [selectedStage, setSelectedStage] = useState<Stage | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [stageStarted, setStageStarted] = useState(false)

  const startStage = (stage: Stage) => {
    setSelectedStage(stage)
    setStageStarted(true)
    setCurrentQuestionIndex(0)
    setAnswers({})
    setShowResults(false)
  }

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const nextQuestion = () => {
    if (!selectedStage) return
    if (currentQuestionIndex < selectedStage.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setShowResults(true)
    }
  }

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const calculateResults = () => {
    if (!selectedStage) return { score: 0, total: 0, percentage: 0 }

    let score = 0
    selectedStage.questions.forEach((q) => {
      if (answers[q.id] === q.correct) {
        score++
      }
    })

    return {
      score,
      total: selectedStage.questions.length,
      percentage: Math.round((score / selectedStage.questions.length) * 100),
    }
  }

  const resetStage = () => {
    setStageStarted(false)
    setSelectedStage(null)
    setShowResults(false)
    setAnswers({})
  }

  // Level selection screen
  if (!selectedLevel) {
    const levels = ['N5', 'N4', 'N3', 'N2', 'N1'] as const

    return (
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-zen font-bold mb-4 text-gradient">
            {t('stages.title')}
          </h1>
          <p className="text-lg md:text-xl text-white/60">
            {t('stages.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 mb-8 md:mb-12">
          {levels.map((level, idx) => {
            const levelStages = getStagesByLevel(level)
            return (
              <motion.button
                key={level}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.2 }}
                onClick={() => setSelectedLevel(level)}
                className="card-interactive p-4 md:p-6 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">{level}</div>
                <div className="text-xs md:text-sm text-white/60">{levelStages.length} {t('stages.stages', { level })}</div>
              </motion.button>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.2 }}
          className="card"
        >
          <h3 className="text-2xl font-zen font-bold mb-4">{t('stages.howItWorks.title')}</h3>
          <div className="space-y-4 text-white/80">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🎬</div>
              <div>
                <h4 className="font-semibold mb-1">{t('stages.howItWorks.step1Title')}</h4>
                <p className="text-white/60">
                  {t('stages.howItWorks.step1Description')}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl">❓</div>
              <div>
                <h4 className="font-semibold mb-1">{t('stages.howItWorks.step2Title')}</h4>
                <p className="text-white/60">
                  {t('stages.howItWorks.step2Description')}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🏆</div>
              <div>
                <h4 className="font-semibold mb-1">{t('stages.howItWorks.step3Title')}</h4>
                <p className="text-white/60">
                  {t('stages.howItWorks.step3Description')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  // Stage selection screen
  if (!stageStarted) {
    const levelStages = getStagesByLevel(selectedLevel)

    return (
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => setSelectedLevel(null)}
            className="btn-secondary mb-4"
          >
            {t('stages.backToLevels')}
          </button>
          <h1 className="text-4xl font-zen font-bold mb-2">
            {t('stages.stages', { level: selectedLevel })}
          </h1>
          <p className="text-white/60">
            {t('stages.chooseScenario')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {levelStages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
              className={`card-interactive relative overflow-hidden ${stage.locked ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
              {stage.locked && (
                <div className="absolute top-4 right-4 text-3xl">🔒</div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-zen font-bold mb-2">
                    {stage.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="px-2 py-1 bg-sakura-pink/20 text-sakura-pink rounded">
                      {stage.level}
                    </span>
                    <span className="px-2 py-1 bg-electric-cyan/20 text-electric-cyan rounded capitalize">
                      {stage.topic.replace('_', ' ')}
                    </span>
                  </div>
                </div>

                <p className="text-white/60">{stage.description}</p>

                <div className="text-sm text-white/60">
                  {t('stages.questions', { count: stage.questions.length })}
                </div>

                <button
                  disabled={stage.locked}
                  onClick={() => startStage(stage)}
                  className={`w-full ${stage.locked
                    ? 'btn-secondary opacity-50 cursor-not-allowed'
                    : 'btn-primary'
                    }`}
                >
                  {stage.locked ? t('stages.locked') : t('stages.startStage')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  // Results screen
  if (showResults && selectedStage) {
    const results = calculateResults()

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <div className="card text-center">
          <h1 className="text-4xl font-zen font-bold mb-4 text-gradient">
            {t('stages.stageComplete')}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 my-6 md:my-8">
            <div className="glass p-4 md:p-6 rounded-xl">
              <div className="text-4xl md:text-5xl font-bold text-sakura-pink mb-2">
                {results.score}/{results.total}
              </div>
              <div className="text-sm md:text-base text-white/60">{t('stages.questionsCorrect')}</div>
            </div>

            <div className="glass p-4 md:p-6 rounded-xl">
              <div className="text-4xl md:text-5xl font-bold text-electric-cyan mb-2">
                {results.percentage}%
              </div>
              <div className="text-sm md:text-base text-white/60">{t('stages.accuracy')}</div>
            </div>
          </div>

          <div className="space-y-4">
            <button onClick={resetStage} className="btn-primary w-full">
              {t('stages.backToStages')}
            </button>
            <button
              onClick={() => navigate('/')}
              className="btn-secondary w-full"
            >
              {t('stages.backToDashboard')}
            </button>
          </div>
        </div>
      </motion.div>
    )
  }

  // Stage in progress
  if (!selectedStage) return null

  const currentQuestion = selectedStage.questions[currentQuestionIndex]

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Dialogue Section */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-4">{selectedStage.title}</h2>
        <div className="space-y-4">
          {selectedStage.dialogue.map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-4 rounded-xl"
            >
              <div className="font-semibold text-sakura-pink mb-1">
                {line.speaker}:
              </div>
              <div className="text-lg mb-2">{line.text}</div>
              {line.translation && (
                <div className="text-sm text-white/60 italic">
                  {line.translation}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/60">
            Question {currentQuestionIndex + 1} / {selectedStage.questions.length}
          </span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-sakura-pink to-electric-cyan h-2 rounded-full transition-all"
            style={{
              width: `${((currentQuestionIndex + 1) / selectedStage.questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.15 }}
          className="card"
        >
          <h3 className="text-2xl font-semibold mb-6">
            {currentQuestion.stem}
          </h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(currentQuestion.id, option)}
                className={`w-full p-4 rounded-xl text-left transition-all ${answers[currentQuestion.id] === option
                  ? 'bg-gradient-to-r from-sakura-pink to-electric-cyan text-white'
                  : 'glass hover:bg-white/10'
                  }`}
              >
                <span className="font-semibold mr-3">
                  {String.fromCharCode(65 + idx)}.
                </span>
                {option}
              </button>
            ))}
          </div>

          {answers[currentQuestion.id] && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-white/5 rounded-xl"
            >
              <div className="text-sm text-white/80">
                <strong>{t('stages.explanation')}</strong> {currentQuestion.explanation}
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={previousQuestion}
          disabled={currentQuestionIndex === 0}
          className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t('stages.previous')}
        </button>

        {currentQuestionIndex === selectedStage.questions.length - 1 ? (
          <button
            onClick={() => setShowResults(true)}
            className="btn-primary"
          >
            {t('stages.finishStage')}
          </button>
        ) : (
          <button onClick={nextQuestion} className="btn-primary">
            {t('stages.next')}
          </button>
        )}
      </div>
    </div >
  )
}

export default Stages
