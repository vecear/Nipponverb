import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { generateJLPTExam, JLPTExam } from '../data/jlpt-exams'
import FuriganaText from '../components/FuriganaText'
import { useAuth } from '../contexts/AuthContext'
import { useUserStore } from '../store/useUserStore'
import { addExp, updateUserProgression, calculateExpReward } from '../services/progressionService'
import { DEFAULT_PROGRESSION } from '../types/progression'

const Simulation = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { currentUser } = useAuth()
  const { profile, setProfile } = useUserStore()
  const hasAwardedExp = useRef(false)
  const [selectedLevel, setSelectedLevel] = useState<'N5' | 'N4' | 'N3' | 'N2' | 'N1' | null>(null)
  const [exam, setExam] = useState<JLPTExam | null>(null)
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [timeRemaining, setTimeRemaining] = useState(0) // in seconds
  const [examStarted, setExamStarted] = useState(false)
  const [examFinished, setExamFinished] = useState(false)

  // Timer countdown
  useEffect(() => {
    if (!examStarted || examFinished || timeRemaining <= 0) return

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setExamFinished(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [examStarted, examFinished, timeRemaining])

  const startExam = (level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1') => {
    const newExam = generateJLPTExam(level)
    setExam(newExam)
    setSelectedLevel(level)
    setTimeRemaining(newExam.totalTimeLimit * 60) // Convert to seconds
    setExamStarted(true)
    setCurrentSectionIndex(0)
    setCurrentQuestionIndex(0)
    setAnswers({})
    setExamFinished(false)
  }

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const nextQuestion = () => {
    if (!exam) return
    const currentSection = exam.sections[currentSectionIndex]

    if (currentQuestionIndex < currentSection.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else if (currentSectionIndex < exam.sections.length - 1) {
      // Move to next section
      setCurrentSectionIndex(currentSectionIndex + 1)
      setCurrentQuestionIndex(0)
    }
  }

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    } else if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1)
      const prevSection = exam!.sections[currentSectionIndex - 1]
      setCurrentQuestionIndex(prevSection.questions.length - 1)
    }
  }

  const finishExam = () => {
    setExamFinished(true)
  }

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  // Calculate results
  const calculateResults = () => {
    if (!exam) return { score: 0, total: 0, percentage: 0, sectionScores: [] }

    let totalScore = 0
    let totalQuestions = 0
    const sectionScores = exam.sections.map((section) => {
      let sectionScore = 0
      section.questions.forEach((q) => {
        totalQuestions++
        if (answers[q.id] === q.correct) {
          sectionScore++
          totalScore++
        }
      })
      return {
        title: section.title,
        score: sectionScore,
        total: section.questions.length,
        percentage: Math.round((sectionScore / section.questions.length) * 100),
      }
    })

    return {
      score: totalScore,
      total: totalQuestions,
      percentage: Math.round((totalScore / totalQuestions) * 100),
      sectionScores,
    }
  }

  // Level selection screen
  if (!examStarted) {
    const levels = [
      { level: 'N5' as const, time: 75, desc: t('simulation.levels.N5') },
      { level: 'N4' as const, time: 90, desc: t('simulation.levels.N4') },
      { level: 'N3' as const, time: 105, desc: t('simulation.levels.N3') },
      { level: 'N2' as const, time: 125, desc: t('simulation.levels.N2') },
      { level: 'N1' as const, time: 170, desc: t('simulation.levels.N1') },
    ]

    return (
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-5xl font-zen font-bold mb-4 text-gradient">
            {t('simulation.title')}
          </h1>
          <p className="text-lg md:text-xl text-indigo-900/90">
            {t('simulation.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {levels.map((level) => (
            <div
              key={level.level}
              className="card-interactive !p-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">{level.level}</h2>
                  <div className="px-2 py-0.5 bg-vermilion/20 text-vermilion rounded-full text-xs">
                    {level.time} {t('simulation.timeLimit')}
                  </div>
                </div>

                <p className="text-indigo-900/90 text-sm">{level.desc}</p>

                <div className="space-y-1.5">
                  <p className="text-xs font-semibold text-indigo-900/80">{t('simulation.sectionsLabel')}:</p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 bg-indigo-900/10 rounded-full text-xs">{t('simulation.sections.vocabulary')}</span>
                    <span className="px-2 py-0.5 bg-indigo-900/10 rounded-full text-xs">{t('simulation.sections.grammar')}</span>
                    <span className="px-2 py-0.5 bg-indigo-900/10 rounded-full text-xs">{t('simulation.sections.reading')}</span>
                  </div>
                </div>

                <button
                  onClick={() => startExam(level.level)}
                  className="btn-primary w-full mt-2 !py-2 !text-sm"
                >
                  {t('simulation.startExam', { level: level.level })}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="card">
          <h3 className="text-2xl font-zen font-bold mb-4">{t('simulation.guidelinesTitle')}</h3>
          <ul className="space-y-3 text-indigo-900/80">
            <li className="flex items-start space-x-3">
              <span className="text-vermilion mt-1">•</span>
              <span>{t('simulation.guideline1')}</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-vermilion mt-1">•</span>
              <span>{t('simulation.guideline2')}</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-vermilion mt-1">•</span>
              <span>{t('simulation.guideline3')}</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-vermilion mt-1">•</span>
              <span>{t('simulation.guideline4')}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  // Award EXP when exam finishes
  useEffect(() => {
    const awardSimulationExp = async () => {
      if (examFinished && exam && currentUser && profile && !hasAwardedExp.current) {
        hasAwardedExp.current = true
        try {
          const progression = profile.progression || DEFAULT_PROGRESSION
          const gender = profile.gender || 'male'

          // Calculate accuracy
          let totalScore = 0
          let totalQuestions = 0
          exam.sections.forEach((section) => {
            section.questions.forEach((q) => {
              totalQuestions++
              if (answers[q.id] === q.correct) {
                totalScore++
              }
            })
          })
          const accuracy = totalQuestions > 0 ? Math.round((totalScore / totalQuestions) * 100) : 0

          // Calculate EXP based on accuracy (100-500)
          const expAmount = calculateExpReward('simulation_complete', { accuracy })

          // Add EXP and update progression
          const { newProgression } = addExp(progression, expAmount, gender)
          await updateUserProgression(currentUser.uid, newProgression)

          // Update local profile state
          setProfile({
            ...profile,
            progression: newProgression,
          })
        } catch (error) {
          console.error('Failed to award simulation EXP:', error)
        }
      }
    }

    awardSimulationExp()
  }, [examFinished, exam, currentUser, profile, answers, setProfile])

  // Reset hasAwardedExp when starting new exam
  useEffect(() => {
    if (!examFinished) {
      hasAwardedExp.current = false
    }
  }, [examFinished])

  // Results screen
  if (examFinished && exam) {
    const results = calculateResults()

    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="card text-center">
          <h1 className="text-4xl font-zen font-bold mb-4 text-gradient">
            {t('simulation.results.examComplete')}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 my-6 md:my-8">
            <div className="glass p-4 md:p-6 rounded-xl">
              <div className="text-4xl md:text-5xl font-bold text-vermilion mb-2">
                {results.score}/{results.total}
              </div>
              <div className="text-sm md:text-base text-indigo-900/90">{t('simulation.results.questionsCorrect')}</div>
            </div>

            <div className="glass p-4 md:p-6 rounded-xl">
              <div className="text-4xl md:text-5xl font-bold text-wave-light mb-2">
                {results.percentage}%
              </div>
              <div className="text-sm md:text-base text-indigo-900/90">{t('simulation.results.overallScore')}</div>
            </div>
          </div>

          <div className="text-left space-y-4 mb-8">
            <h3 className="text-2xl font-bold">{t('simulation.results.sectionBreakdown')}</h3>
            {results.sectionScores.map((section, _idx) => (
              <div key={_idx} className="glass p-4 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{section.title}</span>
                  <span className="text-vermilion">{section.score}/{section.total}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-vermilion to-wave-deep h-2 rounded-full"
                    style={{ width: `${section.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <button
              onClick={() => {
                setExamStarted(false)
                setExamFinished(false)
              }}
              className="btn-primary w-full"
            >
              {t('simulation.results.takeAnother')}
            </button>
            <button
              onClick={() => navigate('/')}
              className="btn-secondary w-full"
            >
              {t('simulation.results.backToDashboard')}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Exam in progress
  if (!exam) return null

  const currentSection = exam.sections[currentSectionIndex]
  const currentQuestion = currentSection.questions[currentQuestionIndex]
  const totalQuestions = exam.sections.reduce((sum, s) => sum + s.questions.length, 0)
  const currentOverallIndex = exam.sections
    .slice(0, currentSectionIndex)
    .reduce((sum, s) => sum + s.questions.length, 0) + currentQuestionIndex + 1

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-0">
      {/* Header with timer */}
      <div className="card mb-3 sm:mb-6 p-3 sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <h2 className="text-base sm:text-2xl font-bold truncate">{t('simulation.exam.mockExam', { level: selectedLevel })}</h2>
            <p className="text-indigo-900/60 text-xs sm:text-base truncate">
              {t('simulation.exam.section', { current: currentSectionIndex + 1, total: exam.sections.length, name: currentSection.title })}
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className={`text-lg sm:text-3xl font-bold ${timeRemaining < 300 ? 'text-red-500' : 'text-wave-light'}`}>
              {formatTime(timeRemaining)}
            </div>
            <div className="text-[10px] sm:text-sm text-indigo-900/90">{t('simulation.exam.timeRemaining')}</div>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-3 sm:mb-6">
        <div className="flex items-center justify-between mb-1 sm:mb-2 text-[10px] sm:text-sm">
          <span className="text-indigo-900/60">
            {t('simulation.exam.question', { current: currentOverallIndex, total: totalQuestions })}
          </span>
          <span className="text-indigo-900/60">
            {t('simulation.exam.sectionProgress', { current: currentQuestionIndex + 1, total: currentSection.questions.length })}
          </span>
        </div>
        <div className="w-full bg-indigo-900/10 rounded-full h-1 sm:h-2">
          <div
            className="bg-gradient-to-r from-vermilion to-wave-deep h-1 sm:h-2 rounded-full transition-all"
            style={{ width: `${(currentOverallIndex / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      <div className="card mb-3 sm:mb-6 p-3 sm:p-6">
        <h3 className="text-base sm:text-2xl font-semibold mb-3 sm:mb-6 whitespace-pre-wrap">
          <FuriganaText text={currentQuestion.stem || ''} />
        </h3>

        <div className="space-y-2 sm:space-y-3">
          {(currentQuestion.options || []).map((option, _idx) => (
            <button
              key={_idx}
              onClick={() => handleAnswer(currentQuestion.id, option)}
              className={`w-full p-2 sm:p-4 rounded-lg sm:rounded-xl text-left transition-all text-sm sm:text-base ${answers[currentQuestion.id] === option
                ? 'bg-wave-deep text-foam border-2 border-vermilion shadow-ukiyo'
                : 'glass hover:bg-white/50 border border-indigo-900/5'
                }`}
            >
              <span className="font-semibold mr-2 sm:mr-3">{String.fromCharCode(65 + _idx)}.</span>
              <FuriganaText text={option} />
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={previousQuestion}
          disabled={currentSectionIndex === 0 && currentQuestionIndex === 0}
          className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm px-2 py-1.5 sm:px-4 sm:py-2"
        >
          {t('simulation.exam.previous')}
        </button>

        <div className="text-indigo-900/60 text-[10px] sm:text-sm text-center">
          {t('simulation.exam.answered', { count: Object.keys(answers).length, total: totalQuestions })}
        </div>

        {currentSectionIndex === exam.sections.length - 1 &&
          currentQuestionIndex === currentSection.questions.length - 1 ? (
          <button onClick={finishExam} className="btn-primary text-xs sm:text-sm px-2 py-1.5 sm:px-4 sm:py-2">
            {t('simulation.exam.finishExam')}
          </button>
        ) : (
          <button onClick={nextQuestion} className="btn-primary text-xs sm:text-sm px-2 py-1.5 sm:px-4 sm:py-2">
            {t('simulation.exam.next')}
          </button>
        )}
      </div>
    </div >
  )
}

export default Simulation
