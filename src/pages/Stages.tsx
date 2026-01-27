import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Stage, getStagesByLevel } from '../data/stages'
import { useAuth } from '../contexts/AuthContext'
import { useUserStore } from '../store/useUserStore'
import { addExp, updateUserProgression } from '../services/progressionService'
import { DEFAULT_PROGRESSION, EXP_REWARDS } from '../types/progression'

const Stages = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { currentUser } = useAuth()
  const { profile, setProfile } = useUserStore()
  const hasAwardedExp = useRef(false)
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
      <div className="max-w-6xl mx-auto px-2 sm:px-0">
        <div className="text-center mb-4 sm:mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-zen font-bold mb-2 sm:mb-4 text-gradient">
            {t('stages.title')}
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-indigo-900/90">
            {t('stages.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-8 md:mb-12">
          {levels.map((level) => {
            const levelStages = getStagesByLevel(level)
            return (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className="card-interactive p-3 sm:p-4 md:p-6 text-center"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1 md:mb-2">{level}</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-indigo-900/60">{levelStages.length} {t('stages.stages', { level })}</div>
              </button>
            )
          })}
        </div>

        <div className="card p-3 sm:p-6">
          <h3 className="text-lg sm:text-2xl font-zen font-bold mb-2 sm:mb-4">{t('stages.howItWorks.title')}</h3>
          <div className="space-y-2 sm:space-y-4 text-indigo-900/80">
            <div className="flex items-start space-x-2 sm:space-x-4">
              <div className="text-xl sm:text-3xl">🎬</div>
              <div>
                <h4 className="font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">{t('stages.howItWorks.step1Title')}</h4>
                <p className="text-indigo-900/60 text-xs sm:text-base">
                  {t('stages.howItWorks.step1Description')}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-4">
              <div className="text-xl sm:text-3xl">❓</div>
              <div>
                <h4 className="font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">{t('stages.howItWorks.step2Title')}</h4>
                <p className="text-indigo-900/60 text-xs sm:text-base">
                  {t('stages.howItWorks.step2Description')}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-4">
              <div className="text-xl sm:text-3xl">🏆</div>
              <div>
                <h4 className="font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">{t('stages.howItWorks.step3Title')}</h4>
                <p className="text-indigo-900/60 text-xs sm:text-base">
                  {t('stages.howItWorks.step3Description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Stage selection screen
  if (!stageStarted) {
    const levelStages = getStagesByLevel(selectedLevel)

    return (
      <div className="max-w-6xl mx-auto px-2 sm:px-0">
        <div className="mb-4 sm:mb-8">
          <button
            onClick={() => setSelectedLevel(null)}
            className="btn-secondary mb-2 sm:mb-4 text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2"
          >
            {t('stages.backToLevels')}
          </button>
          <h1 className="text-2xl sm:text-4xl font-zen font-bold mb-1 sm:mb-2">
            {t('stages.stages', { level: selectedLevel })}
          </h1>
          <p className="text-indigo-900/60 text-sm sm:text-base">
            {t('stages.chooseScenario')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {levelStages.map((stage) => (
            <div
              key={stage.id}
              className={`card-interactive relative overflow-hidden p-3 sm:p-4 ${stage.locked ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
              {stage.locked && (
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 text-xl sm:text-3xl">🔒</div>
              )}

              <div className="space-y-2 sm:space-y-4">
                <div>
                  <h3 className="text-lg sm:text-2xl font-zen font-bold mb-1 sm:mb-2">
                    {stage.title}
                  </h3>
                  <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                    <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-vermilion/20 text-vermilion rounded">
                      {stage.level}
                    </span>
                    <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-wave-light/20 text-wave-light rounded capitalize">
                      {stage.topic.replace('_', ' ')}
                    </span>
                  </div>
                </div>

                <p className="text-indigo-900/90 text-xs sm:text-base">{stage.description}</p>

                <div className="text-xs sm:text-sm text-indigo-900/60">
                  {t('stages.questions', { count: stage.questions.length })}
                </div>

                <button
                  disabled={stage.locked}
                  onClick={() => startStage(stage)}
                  className={`w-full text-xs sm:text-sm py-1.5 sm:py-2 ${stage.locked
                    ? 'btn-secondary opacity-50 cursor-not-allowed'
                    : 'btn-primary'
                    }`}
                >
                  {stage.locked ? t('stages.locked') : t('stages.startStage')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Award EXP when stage completes
  useEffect(() => {
    const awardStageExp = async () => {
      if (showResults && selectedStage && currentUser && profile && !hasAwardedExp.current) {
        hasAwardedExp.current = true
        try {
          const progression = profile.progression || DEFAULT_PROGRESSION
          const gender = profile.gender || 'male'

          // Award 200 EXP for completing a stage
          const expAmount = EXP_REWARDS.STAGE_COMPLETE

          // Add EXP and update progression
          const { newProgression } = addExp(progression, expAmount, gender)
          await updateUserProgression(currentUser.uid, newProgression)

          // Update local profile state
          setProfile({
            ...profile,
            progression: newProgression,
          })
        } catch (error) {
          console.error('Failed to award stage EXP:', error)
        }
      }
    }

    awardStageExp()
  }, [showResults, selectedStage, currentUser, profile, setProfile])

  // Reset hasAwardedExp when starting new stage
  useEffect(() => {
    if (!showResults) {
      hasAwardedExp.current = false
    }
  }, [showResults])

  // Results screen
  if (showResults && selectedStage) {
    const results = calculateResults()

    return (
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-8 px-2 sm:px-0">
        <div className="card text-center p-3 sm:p-6">
          <h1 className="text-2xl sm:text-4xl font-zen font-bold mb-2 sm:mb-4 text-gradient">
            {t('stages.stageComplete')}
          </h1>

          <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 my-3 sm:my-6 md:my-8">
            <div className="glass p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl">
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-vermilion mb-1 sm:mb-2">
                {results.score}/{results.total}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-indigo-900/90">{t('stages.questionsCorrect')}</div>
            </div>

            <div className="glass p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl">
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-wave-light mb-1 sm:mb-2">
                {results.percentage}%
              </div>
              <div className="text-xs sm:text-sm md:text-base text-indigo-900/90">{t('stages.accuracy')}</div>
            </div>
          </div>

          <div className="space-y-2 sm:space-y-4">
            <button onClick={resetStage} className="btn-primary w-full text-sm sm:text-base py-2 sm:py-3">
              {t('stages.backToStages')}
            </button>
            <button
              onClick={() => navigate('/')}
              className="btn-secondary w-full text-sm sm:text-base py-2 sm:py-3"
            >
              {t('stages.backToDashboard')}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Stage in progress
  if (!selectedStage) return null

  const currentQuestion = selectedStage.questions[currentQuestionIndex]

  return (
    <div className="max-w-4xl mx-auto space-y-3 sm:space-y-6 px-2 sm:px-0">
      {/* Dialogue Section */}
      <div className="card p-3 sm:p-6">
        <h2 className="text-base sm:text-2xl font-bold mb-2 sm:mb-4">{selectedStage.title}</h2>
        <div className="space-y-2 sm:space-y-4">
          {selectedStage.dialogue.map((line, _idx) => (
            <div
              key={_idx}
              className="glass p-2 sm:p-4 rounded-lg sm:rounded-xl"
            >
              <div className="font-semibold text-vermilion mb-0.5 sm:mb-1 text-xs sm:text-base">
                {line.speaker}:
              </div>
              <div className="text-sm sm:text-lg mb-1 sm:mb-2">{line.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div>
        <div className="flex items-center justify-between mb-1 sm:mb-2">
          <span className="text-indigo-900/90 text-xs sm:text-base">
            Question {currentQuestionIndex + 1} / {selectedStage.questions.length}
          </span>
        </div>
        <div className="w-full bg-indigo-900/10 rounded-full h-1 sm:h-2">
          <div
            className="bg-gradient-to-r from-vermilion to-wave-deep h-1 sm:h-2 rounded-full transition-all"
            style={{
              width: `${((currentQuestionIndex + 1) / selectedStage.questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="card p-3 sm:p-6">
        <h3 className="text-base sm:text-2xl font-semibold mb-3 sm:mb-6">
          {currentQuestion.stem}
        </h3>

        <div className="space-y-2 sm:space-y-3">
          {(currentQuestion.options || []).map((option, _idx) => (
            <button
              key={_idx}
              onClick={() => handleAnswer(currentQuestion.id, option)}
              className={`w-full p-2 sm:p-4 rounded-lg sm:rounded-xl text-left transition-all text-sm sm:text-base ${answers[currentQuestion.id] === option
                ? 'bg-gradient-to-r from-vermilion to-wave-deep text-white'
                : 'glass hover:bg-white/50 border border-indigo-900/5'
                }`}
            >
              <span className="font-semibold mr-2 sm:mr-3">
                {String.fromCharCode(65 + _idx)}.
              </span>
              {option}
            </button>
          ))}
        </div>

        {answers[currentQuestion.id] && (
          <div className="mt-2 sm:mt-4 p-2 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl">
            <div className="text-xs sm:text-sm text-indigo-900/80">
              <strong>{t('stages.explanation')}</strong> {currentQuestion.explanation}
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={previousQuestion}
          disabled={currentQuestionIndex === 0}
          className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm px-2 py-1.5 sm:px-4 sm:py-2"
        >
          {t('stages.previous')}
        </button>

        {currentQuestionIndex === selectedStage.questions.length - 1 ? (
          <button
            onClick={() => setShowResults(true)}
            className="btn-primary text-xs sm:text-sm px-2 py-1.5 sm:px-4 sm:py-2"
          >
            {t('stages.finishStage')}
          </button>
        ) : (
          <button onClick={nextQuestion} className="btn-primary text-xs sm:text-sm px-2 py-1.5 sm:px-4 sm:py-2">
            {t('stages.next')}
          </button>
        )}
      </div>
    </div >
  )
}

export default Stages
