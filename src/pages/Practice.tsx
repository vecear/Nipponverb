import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ChevronDown, ChevronUp, Check, X, History } from 'lucide-react'
import QuestionCard from '../components/QuestionCard'
import FuriganaText from '../components/FuriganaText'
import { usePracticeStore, PracticeHistoryEntry } from '../store/usePracticeStore'
import { useUserStore } from '../store/useUserStore'
import { useAuth } from '../contexts/AuthContext'
import { Question } from '../types'
import { generateGojuonQuestion, generateMatchingQuestion, getGojuonQuestionBank, getGojuonQuestionCount } from '../data/gojuon'
import MatchingQuestionCard from '../components/MatchingQuestionCard'
import { generateGrammarQuestion, getGrammarQuestionBank, getGrammarQuestionCount } from '../data/grammar'
import { generateKanjiQuestion, getKanjiQuestionBank, getKanjiQuestionCount } from '../data/kanji'
import { addExp, updateUserProgression } from '../services/progressionService'
import { DEFAULT_PROGRESSION, EXP_REWARDS } from '../types/progression'
import { PRACTICE_ICONS, UI_ELEMENTS, ILLUSTRATIONS } from '../config/assets'
import { updateStudyTracking } from '../services/studyTrackingService'

// Dates practice data
import { practiceCategories as datesPracticeCategories, getQuestionsBySubcategory } from '../data/questions/datesPractice'

// Extracted utilities
import { selectQuestionsSmartly } from '../utils/smartSelection'
import { staticToQuestion, datesToQuestion } from '../utils/questionAdapters'
import { getStaticBank, getStaticBankCount } from '../utils/questionBanks'
import { buildQuestionLookup } from '../utils/questionLookup'

type PracticeCategory = 'gojuon' | 'verbs' | 'grammar' | 'kanji' | 'vocabulary' | 'dates'
type GojuonSubcategory = 'hiragana' | 'katakana'

const Practice = () => {
  const { t } = useTranslation()
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
    getAttemptedQuestions,
    getLevelStats,
    getWrongQuestionIds,
  } = usePracticeStore()

  const [expandedQuestions, setExpandedQuestions] = useState<Set<number>>(new Set())

  const toggleQuestion = (index: number) => {
    setExpandedQuestions(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const [showResults, setShowResults] = useState(false)
  const [selectedLevel, setSelectedLevel] = useState<'N5' | 'N4' | 'N3' | 'N2' | 'N1'>(profile?.currentLevel || 'N5')
  const [selectedSubcategory, setSelectedSubcategory] = useState<GojuonSubcategory>('hiragana')
  const [questionCount, setQuestionCount] = useState<number>(20)
  const [showCategorySelect, setShowCategorySelect] = useState(true)
  const [viewingHistory, setViewingHistory] = useState<PracticeHistoryEntry | null>(null)
  const [hasSavedResult, setHasSavedResult] = useState(false)
  const [practiceStartTime, setPracticeStartTime] = useState<number | null>(null)

  // Dates subcategory state
  const [selectedDatesCategory, setSelectedDatesCategory] = useState('numbers')
  const [selectedDatesSubcategory, setSelectedDatesSubcategory] = useState('basic')

  // Save practice result and award EXP when showing results
  useEffect(() => {
    const saveResultAndAwardExp = async () => {
      if (showResults && !hasSavedResult && answerRecords.length > 0 && category) {
        const levelToSave = category === 'gojuon'
          ? selectedSubcategory
          : category === 'dates'
            ? `${selectedDatesCategory}_${selectedDatesSubcategory}`
            : selectedLevel
        savePracticeResult(category, levelToSave)
        setHasSavedResult(true)

        // Award EXP for practice completion
        if (currentUser && profile) {
          try {
            const progression = profile.progression || DEFAULT_PROGRESSION
            const gender = profile.gender || 'male'

            // Calculate EXP: 10 per correct answer + 50 for completing practice
            const correctAnswers = answerRecords.filter(r => r.isCorrect).length
            const expFromCorrect = correctAnswers * EXP_REWARDS.CORRECT_ANSWER
            const expFromComplete = EXP_REWARDS.PRACTICE_COMPLETE
            const totalExp = expFromCorrect + expFromComplete

            // Add EXP and update progression
            const { newProgression } = addExp(progression, totalExp, gender)
            await updateUserProgression(currentUser.uid, newProgression)

            // 更新學習時間和連續天數
            const studyMinutes = practiceStartTime
              ? Math.max(1, Math.round((Date.now() - practiceStartTime) / 60000))
              : 1 // 至少算 1 分鐘
            const trackingResult = await updateStudyTracking(currentUser.uid, studyMinutes)

            // Update local profile state
            setProfile({
              ...profile,
              progression: newProgression,
              stats: {
                ...profile.stats,
                totalStudyTime: trackingResult.totalStudyTime,
                streak: trackingResult.streak,
              },
            })
          } catch (error) {
            console.error('Failed to award EXP:', error)
          }
        }
      }
    }

    saveResultAndAwardExp()
  }, [showResults, hasSavedResult, answerRecords, category, selectedLevel, selectedSubcategory, selectedDatesCategory, selectedDatesSubcategory, savePracticeResult, currentUser, profile, setProfile, practiceStartTime])

  // Reset hasSavedResult when starting new practice
  useEffect(() => {
    if (!showResults) {
      setHasSavedResult(false)
    }
  }, [showResults])

  // Generate questions based on category
  const generateQuestions = (
    cat: PracticeCategory,
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1',
    count: number = 10
  ): Question[] => {
    const generatedQuestions: Question[] = []

    // STATIC BANK CATEGORIES (vocabulary, verbs) — use smart selection
    const staticBank = getStaticBank(cat, level)
    if (staticBank) {
      const selected = selectQuestionsSmartly({
        bank: staticBank,
        getId: q => q.id,
        count,
        attemptedIds: getAttemptedQuestions(cat, level),
        wrongIds: getWrongQuestionIds(cat, level),
      })
      return selected.map(q => staticToQuestion(q, level))
    }

    // DATES STATIC BANK — use subcategory selection + smart selection
    if (cat === 'dates') {
      const datesLevel = `${selectedDatesCategory}_${selectedDatesSubcategory}`
      const datesBank = getQuestionsBySubcategory(selectedDatesCategory, selectedDatesSubcategory)
      const selected = selectQuestionsSmartly({
        bank: datesBank,
        getId: q => q.id,
        count,
        attemptedIds: getAttemptedQuestions('dates', datesLevel),
        wrongIds: getWrongQuestionIds('dates', datesLevel),
      })
      return selected.map(q => datesToQuestion(q))
    }

    // DYNAMIC GENERATION FOR OTHER CATEGORIES
    const totalQuestions = count || 20

    for (let i = 0; i < totalQuestions; i++) {
      let q: any

      switch (cat) {
        case 'gojuon': {
          // 30% chance for matching question, but ensure we have at least some MC
          const isMatching = Math.random() < 0.3
          if (isMatching) {
            q = generateMatchingQuestion(selectedSubcategory)
            q.correct = 'MATCHING_COMPLETED' // Magic string for validation
          } else {
            q = generateGojuonQuestion(selectedSubcategory, Math.random() > 0.5 ? 'char-to-romaji' : 'romaji-to-char')
          }
          break
        }
        case 'grammar':
          q = generateGrammarQuestion(level)
          break
        case 'kanji':
          q = generateKanjiQuestion(level)
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
    const newQuestions = generateQuestions(cat, selectedLevel, questionCount)
    setQuestions(newQuestions)
    setShowCategorySelect(false)
    setShowResults(false)
    setPracticeStartTime(Date.now()) // 記錄開始時間
  }

  // 複習錯題功能
  const startReviewWrongQuestions = () => {
    const cat = category as PracticeCategory
    if (!cat) return

    const currentLevel = cat === 'gojuon'
      ? selectedSubcategory
      : cat === 'dates'
        ? `${selectedDatesCategory}_${selectedDatesSubcategory}`
        : selectedLevel
    const wrongIds = getWrongQuestionIds(cat, currentLevel)
    if (wrongIds.length === 0) return

    const wrongIdSet = new Set(wrongIds)

    // Handle dates category
    if (cat === 'dates') {
      const datesBank = getQuestionsBySubcategory(selectedDatesCategory, selectedDatesSubcategory)
      const wrongQuestions = datesBank.filter(q => wrongIdSet.has(q.id))
      const shuffled = wrongQuestions
        .sort(() => 0.5 - Math.random())
        .map(q => datesToQuestion(q))
      setQuestions(shuffled)
      setShowCategorySelect(false)
      setShowResults(false)
      setPracticeStartTime(Date.now())
      return
    }

    // Handle grammar category (dynamic generation with static bank)
    if (cat === 'grammar') {
      const grammarBank = getGrammarQuestionBank(selectedLevel)
      const wrongQuestions = grammarBank.filter(q => wrongIdSet.has(q.id))
      const shuffled = wrongQuestions.sort(() => 0.5 - Math.random())
        .map(q => ({ ...q, type: 'multiple-choice' as const }))
      setQuestions(shuffled)
      setShowCategorySelect(false)
      setShowResults(false)
      setPracticeStartTime(Date.now())
      return
    }

    // Handle kanji category (dynamic generation with static bank)
    if (cat === 'kanji') {
      const kanjiBank = getKanjiQuestionBank(selectedLevel)
      const wrongQuestions = kanjiBank.filter(q => wrongIdSet.has(q.id))
      const shuffled = wrongQuestions.sort(() => 0.5 - Math.random())
        .map(q => ({ ...q, type: 'multiple-choice' as const }))
      setQuestions(shuffled)
      setShowCategorySelect(false)
      setShowResults(false)
      setPracticeStartTime(Date.now())
      return
    }

    // Handle gojuon category (dynamic generation with static bank)
    if (cat === 'gojuon') {
      const gojuonBank = getGojuonQuestionBank(selectedSubcategory)
      const wrongQuestions = gojuonBank.filter(q => wrongIdSet.has(q.id))
      const shuffled = wrongQuestions.sort(() => 0.5 - Math.random())
        .map(q => ({ ...q, type: 'multiple-choice' as const }))
      setQuestions(shuffled)
      setShowCategorySelect(false)
      setShowResults(false)
      setPracticeStartTime(Date.now())
      return
    }

    // Handle static bank categories (verbs, vocabulary)
    const bank = getStaticBank(cat, selectedLevel)
    if (!bank) return

    const wrongQuestions = bank.filter(q => wrongIdSet.has(q.id))
    const shuffled = wrongQuestions
      .sort(() => 0.5 - Math.random())
      .map(q => staticToQuestion(q, selectedLevel))

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

  // Quick restart with same settings
  const handleQuickRestart = () => {
    const cat = category as PracticeCategory
    const newQuestions = generateQuestions(cat, selectedLevel, 10)
    resetPractice()
    setQuestions(newQuestions)
    setShowResults(false)
    setPracticeStartTime(Date.now()) // 重置開始時間
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
      image: PRACTICE_ICONS.gojuon,
    },
    {
      id: 'verbs',
      title: t('practice.categories.verbs.title'),
      description: t('practice.categories.verbs.description'),
      icon: '✍️',
      color: 'from-blue-500 to-cyan-500',
      image: PRACTICE_ICONS.verbs,
    },
    {
      id: 'grammar',
      title: t('practice.categories.grammar.title'),
      description: t('practice.categories.grammar.description'),
      icon: '📖',
      color: 'from-purple-500 to-pink-500',
      image: PRACTICE_ICONS.grammar,
    },
    {
      id: 'kanji',
      title: t('practice.categories.kanji.title'),
      description: t('practice.categories.kanji.description'),
      icon: '漢',
      color: 'from-orange-500 to-red-500',
      image: PRACTICE_ICONS.kanji,
    },
    {
      id: 'vocabulary',
      title: t('practice.categories.vocabulary.title'),
      description: t('practice.categories.vocabulary.description'),
      icon: '🔤',
      color: 'from-yellow-400 to-orange-500',
      image: PRACTICE_ICONS.vocabulary,
    },
    {
      id: 'dates',
      title: t('practice.categories.dates.title'),
      description: t('practice.categories.dates.description'),
      icon: '📅',
      color: 'from-emerald-500 to-cyan-500',
      image: PRACTICE_ICONS.dates,
    },
  ]

  const handleCategorySelect = (catId: string) => {
    navigate(`/practice/${catId}`)
  }

  // If visiting /practice root, show the grid
  if (isDirectAccess) {
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Studying Scene Header */}
        <div className="relative overflow-hidden rounded-lg mb-6">
          <div className="absolute inset-0 z-0">
            <img
              src={ILLUSTRATIONS.studying}
              alt=""
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-washi via-washi/80 to-transparent" />
          </div>
          <div className="relative z-10 py-8 px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-zen font-bold text-wave-deep mb-4">{t('practice.title')}</h1>
            <p className="text-sumi-faded">{t('practice.selectCategory')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {modes.map((mode) => (
            <div
              key={mode.id}
              onClick={() => handleCategorySelect(mode.id)}
              className="card-interactive p-4 group"
            >
              <div className="flex items-center md:block md:text-center space-x-4 md:space-x-0 cursor-pointer">
                <div className={`w-16 h-16 md:w-16 md:h-16 bg-gradient-to-br ${mode.color} flex items-center justify-center text-3xl shadow-ukiyo group-hover:scale-110 transition-transform md:mx-auto md:mb-3 overflow-hidden`}>
                  {mode.image ? (
                    <img
                      src={mode.image}
                      alt={mode.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.parentElement!.innerHTML = `<span class="text-3xl">${mode.icon}</span>`
                      }}
                    />
                  ) : (
                    <span>{mode.icon}</span>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-wave-deep group-hover:text-vermilion transition-colors">{mode.title}</h3>
                  <p className="text-sumi-faded text-sm line-clamp-2 md:line-clamp-none">{mode.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // History viewing screen
  if (viewingHistory) {
    const historyRecordMap = new Map(viewingHistory.answerRecords.map(r => [r.questionId, r]))

    // Enrich compact questions with detailedExplanation from banks if missing
    const lookup = viewingHistory.questions.some(q => !q.detailedExplanation)
      ? buildQuestionLookup(viewingHistory.category, viewingHistory.level)
      : null
    const enrichedQuestions = lookup
      ? viewingHistory.questions.map(q => {
          if (!q.detailedExplanation) {
            const fullQ = lookup.get(q.id)
            return fullQ ? { ...q, detailedExplanation: fullQ.detailedExplanation } : q
          }
          return q
        })
      : viewingHistory.questions

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        {/* History Summary Card */}
        <div className="card text-center">
          <h1 className="text-2xl md:text-3xl font-zen font-bold mb-4 text-gradient">
            歷史作答記錄
          </h1>
          <p className="text-indigo-900/90 text-sm mb-4">
            {viewingHistory.level} · {new Date(viewingHistory.date).toLocaleDateString('zh-TW', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-4 my-4">
            <div className="paper-card p-3 md:p-4 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-vermilion mb-1">
                {viewingHistory.score}/{viewingHistory.total}
              </div>
              <div className="text-xs md:text-sm text-sumi">答對題數</div>
            </div>

            <div className="paper-card p-3 md:p-4 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold text-wave-deep mb-1">
                {viewingHistory.accuracy}%
              </div>
              <div className="text-xs md:text-sm text-sumi">正確率</div>
            </div>
          </div>

          <button
            onClick={() => setViewingHistory(null)}
            className="btn-secondary px-6 py-2.5"
          >
            返回
          </button>
        </div>

        {/* Question Navigation */}
        <div className="card py-3 px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {enrichedQuestions.map((q, index) => {
              const record = historyRecordMap.get(q.id)
              if (!record) {
                return (
                  <span
                    key={index}
                    className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm bg-indigo-900/10 text-indigo-900/40 border border-indigo-900/20"
                  >
                    {index + 1}
                  </span>
                )
              }
              return (
                <a
                  key={index}
                  href={`#hq-${index}`}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm transition-all hover:scale-110 ${record.isCorrect
                    ? 'bg-green-500/30 text-green-400 border border-green-500/50'
                    : 'bg-red-500/30 text-red-400 border border-red-500/50'
                    }`}>
                  {record.isCorrect ? <Check size={16} /> : <X size={16} />}
                </a>
              )
            })}
          </div>
        </div>

        {/* Detailed Question Review */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-sumi">詳細解析</h2>

          {enrichedQuestions.map((question, index) => {
            const record = historyRecordMap.get(question.id)
            if (!record) return null
            const isExpanded = expandedQuestions.has(index)

            return (
              <div
                key={question.id}
                id={`hq-${index}`}
                className="card scroll-mt-32"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${record.isCorrect
                      ? 'bg-green-500/30 text-green-400'
                      : 'bg-red-500/30 text-red-400'
                      }`}>
                      {index + 1}
                    </span>
                    <div>
                      <span className={`text-sm font-medium ${record.isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                        {record.isCorrect ? '✓ 正確' : '✗ 錯誤'}
                      </span>
                      <p className="text-indigo-900/90 text-sm truncate max-w-[200px] md:max-w-md">
                        <FuriganaText text={question.stem || question.instruction || ''} />
                      </p>
                    </div>
                  </div>
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-white/10 space-y-4">
                    <div>
                      <p className="text-lg font-bold mb-1">
                        <FuriganaText text={question.stem || question.instruction || ''} />
                      </p>
                      {question.meaning && (
                        <p className="text-indigo-900/70 text-sm">
                          {question.meaning.split(/(\*.*?\*)/).map((part, i) =>
                            part.startsWith('*') && part.endsWith('*') ? (
                              <span key={i} className="italic text-vermilion/90 font-medium">
                                {part.slice(1, -1)}
                              </span>
                            ) : (
                              part
                            )
                          )}
                        </p>
                      )}
                    </div>

                    <div className={`p-3 rounded-lg ${record.isCorrect
                      ? 'bg-green-500/20 border border-green-500/50'
                      : 'bg-red-500/20 border border-red-500/50'
                      }`}>
                      {question.type === 'matching' ? (
                        <div className="text-center">
                          <p className="text-sm font-bold text-green-400">マッチング完了！</p>
                        </div>
                      ) : (
                        <p className="text-sm">
                          <span className="text-indigo-900/90">你的答案：</span>
                          <span className="font-bold">{record.selectedAnswer}</span>
                          {!record.isCorrect && (
                            <>
                              <span className="text-indigo-900/90 mx-2">→</span>
                              <span className="text-green-400 font-bold">正確答案：{question.correct}</span>
                            </>
                          )}
                        </p>
                      )}
                    </div>

                    {question.detailedExplanation && (
                      <>
                        <div className="bg-black/20 p-4 rounded-lg border-l-4 border-wave-light space-y-2">
                          <p className="font-bold text-wave-light">📖 文法解析</p>
                          <p className="text-base text-indigo-900/90 whitespace-pre-line">
                            <FuriganaText text={question.detailedExplanation.correctRule} />
                          </p>
                        </div>

                        <div className="bg-black/20 p-4 rounded-lg space-y-2">
                          <p className="font-bold text-indigo-900/80 mb-2">📝 各選項解析</p>
                          {question.detailedExplanation.distractors.map((distractor, idx) => {
                            const isCorrectOption = distractor.text === question.correct
                            const isSelectedOption = distractor.text === record.selectedAnswer

                            return (
                              <div
                                key={idx}
                                className={`p-2 rounded-lg ${isCorrectOption
                                  ? 'bg-green-500/20 border border-green-500/50'
                                  : isSelectedOption
                                    ? 'bg-red-500/20 border border-red-500/50'
                                    : 'bg-white/50 border border-indigo-900/10'
                                  }`}
                              >
                                <div className="flex items-start gap-2">
                                  <span className={`font-bold shrink-0 ${isCorrectOption ? 'text-green-600' : isSelectedOption ? 'text-red-500' : 'text-indigo-900/60'
                                    }`}>
                                    {isCorrectOption ? '✓' : isSelectedOption ? '✗' : '•'}
                                  </span>
                                  <div className="flex-1">
                                    <span className={`font-medium ${isCorrectOption ? 'text-green-600' : isSelectedOption ? 'text-red-500' : 'text-indigo-900/80'
                                      }`}>
                                      <FuriganaText text={distractor.text} />
                                    </span>
                                    {isCorrectOption && <span className="ml-2 text-sm text-green-400/80">(正解)</span>}
                                    {isSelectedOption && !isCorrectOption && <span className="ml-2 text-sm text-red-400/80">(你的選擇)</span>}
                                    <p className="text-indigo-900/70 text-sm mt-1">
                                      <FuriganaText text={distractor.reason} />
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // Category selection screen within a specific practice mode (Pre-start)
  if (showCategorySelect) {
    return (
      <div className="max-w-md sm:max-w-2xl mx-auto space-y-4 px-2 sm:px-0">
        <div className="card px-3 py-3 sm:px-6 sm:py-6">
          <h1 className="text-xl sm:text-3xl font-zen font-bold mb-4 sm:mb-5 text-gradient capitalize">
            {t(`practice.categories.${category}.title`)}
          </h1>

          {category === 'gojuon' && (
            <div className="mb-3">
              <label className="block text-xs sm:text-sm font-semibold mb-1.5">{t('practice.selectSubcategory')}:</label>
              <div className="grid grid-cols-2 gap-1.5">
                {(['hiragana', 'katakana'] as GojuonSubcategory[]).map((type) => {
                  const gojuonStats = getLevelStats('gojuon', type)
                  const gojuonTotal = getGojuonQuestionCount(type)
                  const gojuonAttempted = getAttemptedQuestions('gojuon', type).size
                  return (
                    <button
                      key={type}
                      onClick={() => setSelectedSubcategory(type)}
                      className={`py-2 px-2 rounded-md transition-all flex flex-col items-center justify-center ${selectedSubcategory === type
                        ? 'bg-wave-deep border-2 border-vermilion shadow-ukiyo'
                        : 'card-interactive !py-2 !px-2'
                        }`}
                    >
                      <div className={`text-base sm:text-lg mb-0.5 ${selectedSubcategory === type ? 'text-foam' : ''}`}>{type === 'hiragana' ? 'あ' : 'ア'}</div>
                      <div className={`font-semibold capitalize text-[10px] sm:text-xs ${selectedSubcategory === type ? 'text-foam' : ''}`}>{t(`practice.categories.gojuon.${type}`)}</div>
                      <div className={`text-[10px] sm:text-xs ${selectedSubcategory === type ? 'text-foam/90' : 'text-sumi-faded'}`}>
                        {gojuonTotal} 題
                        {gojuonAttempted > 0 && (
                          <span className={`ml-1 ${selectedSubcategory === type ? 'text-foam/70' : 'text-sumi-faded/70'}`}>
                            ({gojuonAttempted}完)
                          </span>
                        )}
                      </div>
                      {gojuonStats && gojuonStats.totalAttempted > 0 && (
                        <div className={`text-xs sm:text-sm mt-1 space-y-0.5 text-center ${selectedSubcategory === type ? 'text-foam/80' : 'text-sumi-faded/80'}`}>
                          <div className="flex items-center justify-center gap-1">
                            <span className={selectedSubcategory === type ? 'text-green-300' : 'text-green-500'}>✓{gojuonStats.totalCorrect}</span>
                            <span className={selectedSubcategory === type ? 'text-foam/80' : ''}>/</span>
                            <span className={selectedSubcategory === type ? 'text-red-300' : 'text-red-500'}>✗{gojuonStats.totalWrong}</span>
                          </div>
                          <div className={selectedSubcategory === type ? 'text-foam/90' : ''}>正確率 {gojuonStats.accuracy}%</div>
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {category === 'dates' && (
            <>
              {/* Dates Category Selection */}
              <div className="mb-4">
                <label className="block text-base sm:text-lg font-semibold mb-3">練習類別:</label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {datesPracticeCategories.map((dateCat) => (
                    <button
                      key={dateCat.id}
                      onClick={() => {
                        setSelectedDatesCategory(dateCat.id)
                        setSelectedDatesSubcategory(dateCat.subcategories[0].id)
                      }}
                      className={`py-3 px-2 sm:py-4 sm:px-3 rounded-lg transition-all flex flex-col items-center justify-center ${selectedDatesCategory === dateCat.id
                        ? 'bg-wave-deep text-foam border-2 border-vermilion shadow-ukiyo'
                        : 'card-interactive !py-3 !px-2 sm:!py-4 sm:!px-3'
                        }`}
                    >
                      <div className={`text-base sm:text-lg font-bold ${selectedDatesCategory === dateCat.id ? 'text-foam' : ''}`}>
                        {dateCat.titleZh}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dates Subcategory Selection */}
              <div className="mb-5">
                <label className="block text-base sm:text-lg font-semibold mb-3">子類別:</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {datesPracticeCategories
                    .find(c => c.id === selectedDatesCategory)
                    ?.subcategories.map((sub) => {
                      const datesLevel = `${selectedDatesCategory}_${sub.id}`
                      const subStats = getLevelStats('dates', datesLevel)
                      const datesAttempted = getAttemptedQuestions('dates', datesLevel).size
                      return (
                        <button
                          key={sub.id}
                          onClick={() => setSelectedDatesSubcategory(sub.id)}
                          className={`py-3 px-2 sm:py-4 sm:px-3 rounded-lg transition-all flex flex-col items-center justify-center ${selectedDatesSubcategory === sub.id
                            ? 'bg-wave-deep text-foam border-2 border-vermilion shadow-ukiyo'
                            : 'card-interactive !py-3 !px-2 sm:!py-4 sm:!px-3'
                            }`}
                        >
                          <div className={`text-sm sm:text-base font-bold ${selectedDatesSubcategory === sub.id ? 'text-foam' : ''}`}>
                            {sub.title}
                          </div>
                          <div className={`text-xs sm:text-sm ${selectedDatesSubcategory === sub.id ? 'text-foam/90' : 'text-sumi-faded'}`}>
                            {sub.questionCount} 題
                            {datesAttempted > 0 && (
                              <span className={`ml-1 ${selectedDatesSubcategory === sub.id ? 'text-foam/70' : 'text-sumi-faded/70'}`}>
                                ({datesAttempted}完)
                              </span>
                            )}
                          </div>
                          {subStats && subStats.totalAttempted > 0 && (
                            <div className={`text-xs mt-1 ${selectedDatesSubcategory === sub.id ? 'text-foam/80' : 'text-sumi-faded/80'}`}>
                              正確率 {subStats.accuracy}%
                            </div>
                          )}
                        </button>
                      )
                    })}
                </div>
              </div>
            </>
          )}

          {category !== 'gojuon' && category !== 'dates' && (
            <div className="mb-5">
              <label className="block text-base sm:text-lg font-semibold mb-3">{t('practice.selectLevel')}:</label>
              <div className="grid grid-cols-5 gap-2 sm:gap-3">
                {(['N5', 'N4', 'N3', 'N2', 'N1'] as const).map((level) => {
                  const totalQuestionCount = category
                    ? (getStaticBankCount(category, level)
                      ?? (category === 'grammar' ? getGrammarQuestionCount(level) : null)
                      ?? (category === 'kanji' ? getKanjiQuestionCount(level) : null))
                    : null;
                  const attemptedCount = category ? getAttemptedQuestions(category, level).size : 0;

                  // 取得級別統計
                  const levelStats = category ? getLevelStats(category, level) : null;

                  return (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`py-3 px-2 sm:py-4 sm:px-3 rounded-lg transition-all flex flex-col items-center justify-center ${selectedLevel === level
                        ? 'bg-wave-deep text-foam border-2 border-vermilion shadow-ukiyo'
                        : 'card-interactive !py-3 !px-2 sm:!py-4 sm:!px-3'
                        }`}
                    >
                      <div className={`text-lg sm:text-xl font-bold ${selectedLevel === level ? 'text-foam' : ''}`}>{level}</div>
                      {totalQuestionCount !== null && (
                        <div className={`text-sm sm:text-base ${selectedLevel === level ? 'text-foam/90' : 'text-sumi-faded'}`}>
                          {totalQuestionCount} 題
                          {attemptedCount > 0 && (
                            <span className={`text-xs ml-1 ${selectedLevel === level ? 'text-foam/70' : 'text-sumi-faded/70'}`}>
                              ({attemptedCount}完)
                            </span>
                          )}
                        </div>
                      )}
                      {levelStats && levelStats.totalAttempted > 0 && (
                        <div className={`text-xs sm:text-sm mt-1 space-y-0.5 text-center ${selectedLevel === level ? 'text-foam/80' : 'text-sumi-faded/80'}`}>
                          <div className="flex items-center justify-center gap-1">
                            <span className={selectedLevel === level ? 'text-green-300' : 'text-green-500'}>✓{levelStats.totalCorrect}</span>
                            <span className={selectedLevel === level ? 'text-foam/80' : ''}>/</span>
                            <span className={selectedLevel === level ? 'text-red-300' : 'text-red-500'}>✗{levelStats.totalWrong}</span>
                          </div>
                          <div className={selectedLevel === level ? 'text-foam/90' : ''}>正確率 {levelStats.accuracy}%</div>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div className="space-y-3">
            <div className="mb-3">
              <label className="block text-base sm:text-lg font-semibold mb-3">題目數量:</label>
              <div className="grid grid-cols-5 gap-2 sm:gap-3">
                {[10, 20, 30, 40, 50].map(count => (
                  <button
                    key={count}
                    onClick={() => setQuestionCount(count)}
                    className={`py-2 sm:py-2.5 rounded-lg transition-all font-medium text-base sm:text-lg ${questionCount === count
                      ? 'bg-wave-deep text-foam border-2 border-vermilion shadow-ukiyo'
                      : 'card-interactive !py-2 sm:!py-2.5 text-sumi-faded'
                      }`}
                  >
                    {count}題
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-2 sm:gap-3 pt-3">
              <button onClick={startPractice} className="btn-primary flex-1 py-3 sm:py-4 text-base sm:text-lg font-bold">
                {t('practice.startPractice')}
              </button>
              {(() => {
                const currentLevel = category === 'gojuon'
                  ? selectedSubcategory
                  : category === 'dates'
                    ? `${selectedDatesCategory}_${selectedDatesSubcategory}`
                    : selectedLevel
                const wrongIds = category ? getWrongQuestionIds(category, currentLevel) : [];
                const hasWrongQuestions = wrongIds.length > 0;
                return (
                  <button
                    onClick={() => hasWrongQuestions && startReviewWrongQuestions()}
                    disabled={!hasWrongQuestions}
                    className={`flex-1 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-lg transition-all ${hasWrongQuestions
                      ? 'bg-vermilion text-white hover:bg-vermilion/90 shadow-md'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                  >
                    複習錯題 {hasWrongQuestions ? `(${wrongIds.length})` : ''}
                  </button>
                );
              })()}
            </div>
            <button
              onClick={() => navigate('/')}
              className="btn-secondary w-full py-2.5 sm:py-3 text-base sm:text-lg"
            >
              {t('practice.backToDashboard')}
            </button>
          </div>
        </div>

        {/* Practice History Section */}
        {(() => {
          const historyLevel = category === 'gojuon'
            ? selectedSubcategory
            : category === 'dates'
              ? `${selectedDatesCategory}_${selectedDatesSubcategory}`
              : selectedLevel
          const history = getHistoryByCategory(category || '', historyLevel)
          const avgAccuracy = history.length > 0
            ? Math.round(history.reduce((sum, h) => sum + h.accuracy, 0) / history.length)
            : null

          if (history.length === 0) return null

          return (
            <div className="card p-2 sm:p-4">
              <div className="flex items-center justify-between mb-2 sm:mb-4">
                <h2 className="text-sm sm:text-lg font-bold flex items-center gap-1 sm:gap-2">
                  <History size={16} className="sm:w-5 sm:h-5 text-wave-light" />
                  近期成績 ({category === 'gojuon'
                    ? t(`practice.categories.gojuon.${selectedSubcategory}`)
                    : category === 'dates'
                      ? (datesPracticeCategories.find(c => c.id === selectedDatesCategory)
                          ?.subcategories.find(s => s.id === selectedDatesSubcategory)?.title || selectedDatesSubcategory)
                      : selectedLevel})
                </h2>
                {avgAccuracy !== null && (
                  <div className="text-xs sm:text-sm">
                    平均：<span className="font-bold text-wave-light">{avgAccuracy}%</span>
                  </div>
                )}
              </div>

              {/* History Table - Clickable */}
              <div className="space-y-1.5 sm:space-y-2">
                {history.map((entry, idx) => (
                  <button
                    key={entry.id}
                    onClick={() => setViewingHistory(entry)}
                    className="w-full flex items-center justify-between p-2 sm:p-3 rounded-md sm:rounded-lg bg-white/50 border border-indigo-900/10 hover:bg-white/80 hover:border-indigo-900/20 transition-all text-left"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-indigo-900/40 text-xs sm:text-sm w-5 sm:w-6">#{idx + 1}</span>
                      <div>
                        <span className={`font-bold text-xs sm:text-sm ${entry.accuracy >= 80 ? 'text-green-400' : entry.accuracy >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                          {entry.score}/{entry.total}
                        </span>
                        <span className="text-indigo-900/90 ml-1 sm:ml-2 text-xs sm:text-sm">({entry.accuracy}%)</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <span className="text-[10px] sm:text-xs text-indigo-900/40">
                        {new Date(entry.date).toLocaleDateString('zh-TW', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      <ChevronDown size={12} className="sm:w-3.5 sm:h-3.5 text-indigo-900/40 -rotate-90" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )
        })()}
      </div>
    )
  }

  // Results screen
  if (showResults) {
    const answeredCount = answerRecords.length
    const unansweredCount = questions.length - answeredCount
    const accuracy = answeredCount > 0 ? Math.round((score / answeredCount) * 100) : 0

    // Build a map for quick lookup: questionId -> record
    const recordMap = new Map(answerRecords.map(r => [r.questionId, r]))

    return (
      <div className="max-w-3xl mx-auto space-y-3 px-2 sm:px-0">
        {/* Score Summary Card */}
        <div className="card text-center py-2 px-3 sm:py-3 sm:px-4 relative overflow-hidden">
          {/* Achievement Scene Background */}
          <div className="absolute inset-0 z-0 opacity-10">
            <img
              src={ILLUSTRATIONS.achievement}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10">
            {/* Hanko Stamp - appears when accuracy is good */}
            {accuracy >= 70 && (
              <div className="absolute -top-2 -right-2 sm:top-0 sm:right-0 w-16 h-16 sm:w-20 sm:h-20 transform rotate-12 opacity-80">
                <img
                  src={UI_ELEMENTS.hankoStamp}
                  alt="Completion Stamp"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
            )}

            <h1 className="text-lg sm:text-xl md:text-2xl font-zen font-bold mb-1.5 sm:mb-2 text-gradient">
              {t('practice.complete')}
            </h1>

            <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 my-2">
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-vermilion">
                  {score}/{answeredCount}
                </div>
                <div className="text-[9px] sm:text-[10px] md:text-xs text-sumi">{t('practice.questionsCorrect')}</div>
              </div>

              <div className="w-px h-6 sm:h-8 bg-wave-deep/20"></div>

              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-wave-deep">
                  {accuracy}%
                </div>
                <div className="text-[9px] sm:text-[10px] md:text-xs text-sumi">{t('practice.accuracy')}</div>
              </div>

              {unansweredCount > 0 && (
                <>
                  <div className="w-px h-6 sm:h-8 bg-wave-deep/20"></div>
                  <div className="text-center">
                    <div className="text-[10px] sm:text-sm text-sumi-faded whitespace-nowrap">
                      ⚠️ {unansweredCount} 題未答
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Action Buttons - Stack on mobile, side by side on larger */}
            <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-2 justify-center pt-2">
              <button onClick={handleQuickRestart} className="btn-primary px-3 py-1.5 text-xs sm:text-sm">
                {t('practice.practiceAgain')}
              </button>
              <button onClick={handleRestart} className="btn-secondary px-3 py-1.5 text-xs sm:text-sm">
                重新選擇
              </button>
              <button
                onClick={() => navigate('/')}
                className="btn-secondary px-3 py-1.5 text-xs sm:text-sm"
              >
                {t('practice.backToDashboard')}
              </button>
            </div>
          </div>
        </div>

        {/* Question Navigation - Sticky */}
        <div className="sticky top-16 z-10 card py-2 px-2 sm:py-3 sm:px-4">
          <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
            {questions.map((q, index) => {
              const record = recordMap.get(q.id)
              if (!record) {
                // Unanswered
                return (
                  <span
                    key={index}
                    className="w-7 h-7 sm:w-9 sm:h-9 rounded-md sm:rounded-lg flex items-center justify-center font-bold text-xs sm:text-sm bg-wave-deep/10 text-sumi-faded border border-wave-deep/20"
                  >
                    {index + 1}
                  </span>
                )
              }
              return (
                <a
                  key={index}
                  href={`#q-${index}`}
                  className={`w-7 h-7 sm:w-9 sm:h-9 rounded-md sm:rounded-lg flex items-center justify-center font-bold text-xs sm:text-sm transition-all hover:scale-110 ${record.isCorrect
                    ? 'bg-green-600 text-white border border-green-700'
                    : 'bg-red-500 text-white border border-red-600'
                    }`}>
                  {record.isCorrect ? <Check size={14} className="sm:w-4 sm:h-4" /> : <X size={14} className="sm:w-4 sm:h-4" />}
                  <span className="sr-only">第 {index + 1} 題</span>
                </a>
              )
            })}
          </div>
        </div>

        {/* Detailed Question Review - Only show answered questions */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-sumi">詳細解析（已作答 {answeredCount} 題）</h2>

          {questions.map((question, index) => {
            const record = recordMap.get(question.id)
            if (!record) return null // Skip unanswered
            const isExpanded = expandedQuestions.has(index)

            return (
              <div
                key={question.id}
                id={`q-${index}`}
                className="card scroll-mt-32"
              >
                {/* Header - Always visible */}
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${record.isCorrect
                      ? 'bg-green-500/30 text-green-400'
                      : 'bg-red-500/30 text-red-400'
                      }`}>
                      {index + 1}
                    </span>
                    <div>
                      <span className={`text-sm font-medium ${record.isCorrect ? 'text-green-400' : 'text-red-400'
                        }`}>
                        {record.isCorrect ? '✓ 正確' : '✗ 錯誤'}
                      </span>
                      <p className="text-white/60 text-sm truncate max-w-[200px] md:max-w-md">
                        <FuriganaText text={question.stem || question.instruction || ''} />
                      </p>
                    </div>
                  </div>
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {/* Expandable Content */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-white/10 space-y-4">
                    {/* Question Stem */}
                    <div>
                      <p className="text-lg font-bold mb-1">
                        <FuriganaText text={question.stem || question.instruction || ''} />
                      </p>
                      {question.meaning && (
                        <p className="text-white/70 text-sm">
                          {question.meaning.split(/(\*.*?\*)/).map((part, i) =>
                            part.startsWith('*') && part.endsWith('*') ? (
                              <span key={i} className="italic text-vermilion/90 font-medium">
                                {part.slice(1, -1)}
                              </span>
                            ) : (
                              part
                            )
                          )}
                        </p>
                      )}
                    </div>

                    {/* Your Answer */}
                    <div className={`p-3 rounded-lg ${record.isCorrect
                      ? 'bg-green-500/20 border border-green-500/50'
                      : 'bg-red-500/20 border border-red-500/50'
                      }`}>
                      {question.type === 'matching' ? (
                        <div className="text-center">
                          <p className="text-lg font-bold text-green-400 mb-2">マッチング完了！ 🎉</p>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            {question.pairs?.map((p, idx) => (
                              <div key={idx} className="bg-white/10 p-2 rounded">
                                {p.char} = {p.romaji}
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm">
                          <span className="text-white/60">你的答案：</span>
                          <span className="font-bold">{record.selectedAnswer}</span>
                          {!record.isCorrect && (
                            <>
                              <span className="text-white/60 mx-2">→</span>
                              <span className="text-green-400 font-bold">正確答案：{question.correct}</span>
                            </>
                          )}
                        </p>
                      )}
                    </div>

                    {/* Detailed Explanation */}
                    {question.detailedExplanation && (
                      <>
                        {/* Main Rule Explanation */}
                        <div className="bg-black/20 p-4 rounded-lg border-l-4 border-wave-light space-y-2">
                          <p className="font-bold text-wave-light">📖 文法解析</p>
                          <p className="text-base text-white/90 whitespace-pre-line">
                            <FuriganaText text={question.detailedExplanation.correctRule} />
                          </p>
                        </div>

                        {/* All Options Explanations */}
                        <div className="bg-black/20 p-4 rounded-lg space-y-2">
                          <p className="font-bold text-white/80 mb-2">📝 各選項解析</p>
                          {question.detailedExplanation.distractors.map((distractor, idx) => {
                            const isCorrectOption = distractor.text === question.correct
                            const isSelectedOption = distractor.text === record.selectedAnswer

                            return (
                              <div
                                key={idx}
                                className={`p-2 rounded-lg ${isCorrectOption
                                  ? 'bg-green-500/20 border border-green-500/50'
                                  : isSelectedOption
                                    ? 'bg-red-500/20 border border-red-500/50'
                                    : 'bg-white/5 border border-white/10'
                                  }`}
                              >
                                <div className="flex items-start gap-2">
                                  <span className={`font-bold shrink-0 ${isCorrectOption ? 'text-green-400' : isSelectedOption ? 'text-red-400' : 'text-white/60'
                                    }`}>
                                    {isCorrectOption ? '✓' : isSelectedOption ? '✗' : '•'}
                                  </span>
                                  <div className="flex-1">
                                    <span className={`font-medium ${isCorrectOption ? 'text-green-400' : isSelectedOption ? 'text-red-400' : 'text-white/80'
                                      }`}>
                                      <FuriganaText text={distractor.text} />
                                    </span>
                                    {isCorrectOption && <span className="ml-2 text-sm text-green-400/80">(正解)</span>}
                                    {isSelectedOption && !isCorrectOption && <span className="ml-2 text-sm text-red-400/80">(你的選擇)</span>}
                                    <p className="text-white/70 text-sm mt-1">
                                      <FuriganaText text={distractor.reason} />
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // Practice screen
  return (
    <div className="max-w-md sm:max-w-2xl mx-auto px-2 sm:px-0">
      <div className="mb-2 sm:mb-4">
        <div className="flex items-center justify-between mb-1.5 sm:mb-2">
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-base sm:text-lg font-zen font-bold capitalize text-sumi">
              {t(`practice.categories.${category}.title`)}
            </h1>
            <div className="flex gap-1">
              <button
                onClick={handleRestart}
                className="px-2 py-1 text-[10px] sm:text-xs rounded-md border border-wave-deep/30 hover:border-vermilion transition-all text-sumi-faded hover:text-sumi"
              >
                結束
              </button>
              <button
                onClick={() => setShowResults(true)}
                className="px-2 py-1 text-[10px] sm:text-xs rounded-md bg-vermilion/20 hover:bg-vermilion/40 border border-vermilion/50 transition-all text-vermilion"
              >
                交卷
              </button>
            </div>
          </div>
          <div className="text-[10px] sm:text-xs text-sumi-faded whitespace-nowrap">
            {currentIndex + 1}/{questions.length}
          </div>
        </div>

        <div className="w-full bg-wave-deep/10 rounded-full h-1">
          <div
            className="bg-gradient-to-r from-vermilion to-wave-deep h-1 rounded-full transition-all"
            style={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {currentQuestion && (
        currentQuestion.type === 'matching' ? (
          <MatchingQuestionCard
            key={currentQuestion.id}
            question={currentQuestion}
            onAnswer={handleAnswer}
          />
        ) : (
          <QuestionCard
            key={currentQuestion.id}
            question={currentQuestion}
            onAnswer={handleAnswer}
          />
        )
      )}
    </div>
  )
}

export default Practice
