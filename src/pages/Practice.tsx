import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { usePracticeStore, PracticeHistoryEntry } from '../store/usePracticeStore'
import { useUserStore } from '../store/useUserStore'
import { useAuth } from '../contexts/AuthContext'
import { Question } from '../types'
import { generateGojuonQuestion, generateMatchingQuestion, getGojuonQuestionBank } from '../data/gojuon'
import { generateKanjiQuestion, getKanjiQuestionBank } from '../data/kanji'
import { addExp, updateUserProgression } from '../services/progressionService'
import { DEFAULT_PROGRESSION, EXP_REWARDS } from '../types/progression'
import { updateStudyTracking } from '../services/studyTrackingService'
import { getQuestionsBySubcategory } from '../data/questions/datesPractice'
import { selectQuestionsSmartly } from '../utils/smartSelection'
import { staticToQuestion, datesToQuestion, unifiedToQuestion } from '../utils/questionAdapters'
import { getStaticBank, getGrammarBank, getVocabUnifiedBank } from '../utils/questionBanks'

// Sub-components
import PracticeCategoryGrid from '../components/PracticeCategoryGrid'
import PracticeCategorySetup, { PracticeSettings } from '../components/PracticeCategorySetup'
import PracticeSession from '../components/PracticeSession'
import PracticeResults from '../components/PracticeResults'
import PracticeHistoryView from '../components/PracticeHistoryView'

type PracticeCategory = 'gojuon' | 'verbs' | 'grammar' | 'kanji' | 'vocabulary' | 'dates'

const Practice = () => {
  const { category } = useParams<{ category: string }>()
  const navigate = useNavigate()
  const { currentUser } = useAuth()
  const { profile, setProfile } = useUserStore()

  const {
    currentQuestion,
    currentIndex,
    questions,
    score,
    answerRecords,
    setQuestions,
    nextQuestion,
    checkAnswer,
    resetPractice,
    savePracticeResult,
    getHistoryByCategory,
    getLevelStats,
    getWrongQuestionIds,
  } = usePracticeStore()

  const [showResults, setShowResults] = useState(false)
  const [showCategorySelect, setShowCategorySelect] = useState(true)
  const [viewingHistory, setViewingHistory] = useState<PracticeHistoryEntry | null>(null)
  const [hasSavedResult, setHasSavedResult] = useState(false)
  const [practiceStartTime, setPracticeStartTime] = useState<number | null>(null)
  const [activeSettings, setActiveSettings] = useState<PracticeSettings | null>(null)

  // Save practice result and award EXP when showing results
  useEffect(() => {
    const saveResultAndAwardExp = async () => {
      if (!showResults || hasSavedResult || answerRecords.length === 0 || !category || !activeSettings) return

      const levelToSave = category === 'gojuon'
        ? (activeSettings.subcategory || 'hiragana')
        : category === 'dates'
          ? `${activeSettings.datesCategory}_${activeSettings.datesSubcategory}`
          : activeSettings.level
      savePracticeResult(category, levelToSave)
      setHasSavedResult(true)

      if (currentUser && profile) {
        try {
          const progression = profile.progression || DEFAULT_PROGRESSION
          const gender = profile.gender || 'male'
          const correctAnswers = answerRecords.filter(r => r.isCorrect).length
          const totalExp = correctAnswers * EXP_REWARDS.CORRECT_ANSWER + EXP_REWARDS.PRACTICE_COMPLETE
          const { newProgression } = addExp(progression, totalExp, gender)
          await updateUserProgression(currentUser.uid, newProgression)

          const studyMinutes = practiceStartTime
            ? Math.max(1, Math.round((Date.now() - practiceStartTime) / 60000))
            : 1
          const trackingResult = await updateStudyTracking(currentUser.uid, studyMinutes)
          setProfile({
            ...profile,
            progression: newProgression,
            stats: { ...profile.stats, totalStudyTime: trackingResult.totalStudyTime, streak: trackingResult.streak },
          })
        } catch (error) {
          console.error('Failed to award EXP:', error)
        }
      }
    }
    saveResultAndAwardExp()
  }, [showResults, hasSavedResult, answerRecords, category, activeSettings, savePracticeResult, currentUser, profile, setProfile, practiceStartTime])

  useEffect(() => {
    if (!showResults) setHasSavedResult(false)
  }, [showResults])

  const getOverallAccuracy = (cat: string, levelKey: string): number => {
    const stats = getLevelStats(cat, levelKey)
    return stats.totalAttempted > 0 ? stats.totalCorrect / stats.totalAttempted : 0.5
  }

  const generateQuestions = (cat: PracticeCategory, settings: PracticeSettings): Question[] => {
    const { level, subcategory, datesCategory, datesSubcategory, questionCount: count } = settings
    const allStats = usePracticeStore.getState().questionStats

    // Vocabulary unified bank (UnifiedQuestion format, preferred over legacy static bank)
    if (cat === 'vocabulary') {
      const vocabBank = getVocabUnifiedBank(level as any)
      if (vocabBank.length > 0) {
        const selected = selectQuestionsSmartly({
          bank: vocabBank, getId: q => q.id, count,
          questionStats: allStats, overallAccuracy: getOverallAccuracy(cat, level),
        })
        return selected.map(q => {
          const shuffled = [...q.options].sort(() => Math.random() - 0.5)
          const newIdx = shuffled.findIndex(o => o.text === q.options[q.correctIndex].text)
          return unifiedToQuestion({ ...q, options: shuffled, correctIndex: newIdx })
        })
      }
    }

    // Static bank categories (vocabulary fallback, verbs)
    const staticBank = getStaticBank(cat, level as any)
    if (staticBank) {
      const selected = selectQuestionsSmartly({
        bank: staticBank, getId: q => q.id, count,
        questionStats: allStats, overallAccuracy: getOverallAccuracy(cat, level),
      })
      return selected.map(q => staticToQuestion(q, level as any))
    }

    // Dates static bank
    if (cat === 'dates' && datesCategory && datesSubcategory) {
      const datesLevel = `${datesCategory}_${datesSubcategory}`
      const datesBank = getQuestionsBySubcategory(datesCategory, datesSubcategory)
      const selected = selectQuestionsSmartly({
        bank: datesBank, getId: q => q.id, count,
        questionStats: allStats, overallAccuracy: getOverallAccuracy('dates', datesLevel),
      })
      return selected.map(q => datesToQuestion(q))
    }

    // Grammar static bank (UnifiedQuestion format, SRS-tracked)
    if (cat === 'grammar') {
      const grammarBank = getGrammarBank(level as any)
      if (grammarBank.length > 0) {
        const selected = selectQuestionsSmartly({
          bank: grammarBank, getId: q => q.id, count,
          questionStats: allStats, overallAccuracy: getOverallAccuracy(cat, level),
        })
        return selected.map(q => {
          // Shuffle options to prevent position memorization
          const shuffled = [...q.options].sort(() => Math.random() - 0.5)
          const newIdx = shuffled.findIndex(o => o.text === q.options[q.correctIndex].text)
          return unifiedToQuestion({ ...q, options: shuffled, correctIndex: newIdx })
        })
      }
    }

    // Dynamic generation (gojuon, kanji)
    const generatedQuestions: Question[] = []
    for (let i = 0; i < count; i++) {
      let q: any
      switch (cat) {
        case 'gojuon': {
          const sub = subcategory || 'hiragana'
          if (Math.random() < 0.3) {
            q = generateMatchingQuestion(sub)
            q.correct = 'MATCHING_COMPLETED'
          } else {
            q = generateGojuonQuestion(sub, Math.random() > 0.5 ? 'char-to-romaji' : 'romaji-to-char')
          }
          break
        }
        case 'kanji':
          q = generateKanjiQuestion(level as any)
          break
        default:
          q = generateKanjiQuestion(level as any)
      }
      generatedQuestions.push({ id: `${cat}_${i}`, ...q })
    }
    return generatedQuestions
  }

  const startWithSettings = (settings: PracticeSettings) => {
    setActiveSettings(settings)
    const cat = category as PracticeCategory
    const newQuestions = generateQuestions(cat, settings)
    setQuestions(newQuestions)
    setShowCategorySelect(false)
    setShowResults(false)
    setPracticeStartTime(Date.now())
  }

  const startReview = (settings: PracticeSettings) => {
    setActiveSettings(settings)
    const cat = category as PracticeCategory
    if (!cat) return

    const currentLevel = cat === 'gojuon'
      ? (settings.subcategory || 'hiragana')
      : cat === 'dates'
        ? `${settings.datesCategory}_${settings.datesSubcategory}`
        : settings.level
    const wrongIds = getWrongQuestionIds(cat, currentLevel)
    if (wrongIds.length === 0) return

    const wrongIdSet = new Set(wrongIds)
    let wrongQuestions: Question[] = []

    if (cat === 'dates' && settings.datesCategory && settings.datesSubcategory) {
      const bank = getQuestionsBySubcategory(settings.datesCategory, settings.datesSubcategory)
      wrongQuestions = bank.filter(q => wrongIdSet.has(q.id)).map(q => datesToQuestion(q))
    } else if (cat === 'grammar') {
      const bank = getGrammarBank(settings.level as any)
      wrongQuestions = bank.filter(q => wrongIdSet.has(q.id)).map(q => unifiedToQuestion(q))
    } else if (cat === 'vocabulary') {
      const vocabBank = getVocabUnifiedBank(settings.level as any)
      if (vocabBank.length > 0) {
        wrongQuestions = vocabBank.filter(q => wrongIdSet.has(q.id)).map(q => unifiedToQuestion(q))
      } else {
        const bank = getStaticBank(cat, settings.level as any)
        if (!bank) return
        wrongQuestions = bank.filter(q => wrongIdSet.has(q.id)).map(q => staticToQuestion(q, settings.level as any))
      }
    } else if (cat === 'kanji') {
      const bank = getKanjiQuestionBank(settings.level as any)
      wrongQuestions = bank.filter(q => wrongIdSet.has(q.id)).map(q => ({ ...q, type: 'multiple-choice' as const }))
    } else if (cat === 'gojuon') {
      const bank = getGojuonQuestionBank(settings.subcategory || 'hiragana')
      wrongQuestions = bank.filter(q => wrongIdSet.has(q.id)).map(q => ({ ...q, type: 'multiple-choice' as const }))
    } else {
      const bank = getStaticBank(cat, settings.level as any)
      if (!bank) return
      wrongQuestions = bank.filter(q => wrongIdSet.has(q.id)).map(q => staticToQuestion(q, settings.level as any))
    }

    const shuffled = wrongQuestions.sort(() => 0.5 - Math.random())
    setQuestions(shuffled)
    setShowCategorySelect(false)
    setShowResults(false)
    setPracticeStartTime(Date.now())
  }

  const startSrsReview = (settings: PracticeSettings) => {
    setActiveSettings(settings)
    const cat = category as PracticeCategory
    if (!cat) return

    const now = new Date()
    const allStats = usePracticeStore.getState().questionStats
    const currentLevel = cat === 'gojuon'
      ? (settings.subcategory || 'hiragana')
      : cat === 'dates'
        ? `${settings.datesCategory}_${settings.datesSubcategory}`
        : settings.level

    // Collect due question IDs
    const attemptedIds = usePracticeStore.getState().getAttemptedQuestions(cat, currentLevel)
    const dueIds = new Set<string>()
    attemptedIds.forEach(qid => {
      const stats = allStats[qid]
      if (stats?.srsDueDate && new Date(stats.srsDueDate) <= now) {
        dueIds.add(qid)
      }
    })

    if (dueIds.size === 0) return

    let dueQuestions: Question[] = []

    if (cat === 'dates' && settings.datesCategory && settings.datesSubcategory) {
      const bank = getQuestionsBySubcategory(settings.datesCategory, settings.datesSubcategory)
      dueQuestions = bank.filter(q => dueIds.has(q.id)).map(q => datesToQuestion(q))
    } else if (cat === 'grammar') {
      const bank = getGrammarBank(settings.level as any)
      dueQuestions = bank.filter(q => dueIds.has(q.id)).map(q => unifiedToQuestion(q))
    } else if (cat === 'vocabulary') {
      const vocabBank = getVocabUnifiedBank(settings.level as any)
      if (vocabBank.length > 0) {
        dueQuestions = vocabBank.filter(q => dueIds.has(q.id)).map(q => unifiedToQuestion(q))
      } else {
        const bank = getStaticBank(cat, settings.level as any)
        if (!bank) return
        dueQuestions = bank.filter(q => dueIds.has(q.id)).map(q => staticToQuestion(q, settings.level as any))
      }
    } else if (cat === 'kanji') {
      const bank = getKanjiQuestionBank(settings.level as any)
      dueQuestions = bank.filter(q => dueIds.has(q.id)).map(q => ({ ...q, type: 'multiple-choice' as const }))
    } else if (cat === 'gojuon') {
      const bank = getGojuonQuestionBank(settings.subcategory || 'hiragana')
      dueQuestions = bank.filter(q => dueIds.has(q.id)).map(q => ({ ...q, type: 'multiple-choice' as const }))
    } else {
      const bank = getStaticBank(cat, settings.level as any)
      if (!bank) return
      dueQuestions = bank.filter(q => dueIds.has(q.id)).map(q => staticToQuestion(q, settings.level as any))
    }

    const shuffled = dueQuestions.sort(() => 0.5 - Math.random())
    setQuestions(shuffled)
    setShowCategorySelect(false)
    setShowResults(false)
    setPracticeStartTime(Date.now())
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

  const handleQuickRestart = () => {
    if (!activeSettings) return
    const cat = category as PracticeCategory
    const newQuestions = generateQuestions(cat, activeSettings)
    resetPractice()
    setQuestions(newQuestions)
    setShowResults(false)
    setPracticeStartTime(Date.now())
  }

  // 1. No category param → category grid
  if (!category) {
    return <PracticeCategoryGrid onSelectCategory={(id) => navigate(`/practice/${id}`)} />
  }

  // 2. Viewing history
  if (viewingHistory) {
    return <PracticeHistoryView history={viewingHistory} onBack={() => setViewingHistory(null)} />
  }

  // 3. Category setup (pre-start)
  if (showCategorySelect) {
    return (
      <PracticeCategorySetup
        category={category}
        onStartPractice={startWithSettings}
        onStartReview={startReview}
        onStartSrsReview={startSrsReview}
        onViewHistory={setViewingHistory}
        onBack={() => navigate('/')}
      />
    )
  }

  // 4. Results screen
  if (showResults) {
    const historyLevel = category === 'gojuon'
      ? (activeSettings?.subcategory || 'hiragana')
      : category === 'dates'
        ? `${activeSettings?.datesCategory}_${activeSettings?.datesSubcategory}`
        : (activeSettings?.level || 'N5')
    const categoryHist = getHistoryByCategory(category, historyLevel)
    const { practiceHistory: allHist, questionStats: allQStats, earnedAchievements } = usePracticeStore.getState()

    const handleNewAchievements = (newIds: string[]) => {
      const updated = [...new Set([...earnedAchievements, ...newIds])]
      usePracticeStore.setState({ earnedAchievements: updated })
      if (currentUser) {
        import('../services/practiceService').then(({ saveEarnedAchievements }) => {
          saveEarnedAchievements(currentUser.uid, updated).catch(console.error)
        })
      }
    }

    return (
      <PracticeResults
        questions={questions}
        answerRecords={answerRecords}
        score={score}
        category={category}
        level={historyLevel}
        practiceStartTime={practiceStartTime}
        categoryHistory={categoryHist}
        allHistory={allHist}
        questionStats={allQStats}
        earnedAchievements={earnedAchievements}
        onNewAchievements={handleNewAchievements}
        onQuickRestart={handleQuickRestart}
        onRestart={handleRestart}
        onBackToDashboard={() => navigate('/')}
      />
    )
  }

  // 5. Active practice session
  return (
    <PracticeSession
      category={category}
      questions={questions}
      currentQuestion={currentQuestion}
      currentIndex={currentIndex}
      score={score}
      answerRecords={answerRecords}
      showResults={showResults}
      onAnswer={handleAnswer}
      onEnd={handleRestart}
      onSubmit={() => setShowResults(true)}
    />
  )
}

export default Practice
