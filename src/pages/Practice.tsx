import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ChevronDown, ChevronUp, Check, X, History } from 'lucide-react'
import QuestionCard from '../components/QuestionCard'
import FuriganaText from '../components/FuriganaText'
import { usePracticeStore, PracticeHistoryEntry } from '../store/usePracticeStore'
import { Question } from '../types'
import { generateGojuonQuestion } from '../data/gojuon'
// import { generateVerbQuestion } from '../data/verbs' // Legacy dynamic generator
import { generateGrammarQuestion } from '../data/grammar'
import { generateKanjiQuestion } from '../data/kanji'

// Static Question Banks
import { n5Questions } from '../data/questions/n5'
import { n4Questions } from '../data/questions/n4'
import { n3Questions } from '../data/questions/n3'
import { n2Questions } from '../data/questions/n2'
import { n1Questions } from '../data/questions/n1'
import { vocabN5, vocabN4, vocabN3, vocabN2, vocabN1 } from '../data/questions/vocab'

type PracticeCategory = 'gojuon' | 'verbs' | 'grammar' | 'kanji' | 'vocabulary'
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
    answerRecords,
    setQuestions,
    nextQuestion,
    checkAnswer,
    resetPractice,
    savePracticeResult,
    getHistoryByCategory,
    getAttemptedQuestions,
    getCoverage,
    questionStats,
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
  const [selectedLevel, setSelectedLevel] = useState<'N5' | 'N4' | 'N3' | 'N2' | 'N1'>('N5')
  const [selectedSubcategory, setSelectedSubcategory] = useState<GojuonSubcategory>('hiragana')
  const [showCategorySelect, setShowCategorySelect] = useState(true)
  const [viewingHistory, setViewingHistory] = useState<PracticeHistoryEntry | null>(null)
  const [hasSavedResult, setHasSavedResult] = useState(false)

  // Save practice result when showing results
  useEffect(() => {
    if (showResults && !hasSavedResult && answerRecords.length > 0 && category) {
      savePracticeResult(category, selectedLevel)
      setHasSavedResult(true)
    }
  }, [showResults, hasSavedResult, answerRecords.length, category, selectedLevel, savePracticeResult])

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

    // VOCABULARY STATIC BANK LOGIC
    if (cat === 'vocabulary') {
      let bank = vocabN5
      if (level === 'N5') bank = vocabN5
      else if (level === 'N4') bank = vocabN4
      else if (level === 'N3') bank = vocabN3
      else if (level === 'N2') bank = vocabN2
      else if (level === 'N1') bank = vocabN1

      // Smart Question Selection: 優先選擇未做過或做過次數少的題目
      const attemptedIds = getAttemptedQuestions('vocabulary', level)

      // 分類題目：未做過的 vs 做過的
      const unattempted = bank.filter(q => !attemptedIds.has(q.id))
      const attempted = bank.filter(q => attemptedIds.has(q.id))

      // 對做過的題目按嘗試次數排序（次數少的優先）
      const sortedAttempted = attempted.sort((a, b) => {
        const aStats = questionStats[a.id]
        const bStats = questionStats[b.id]
        const aAttempts = aStats?.attempts || 0
        const bAttempts = bStats?.attempts || 0
        return aAttempts - bAttempts
      })

      // 組合選題池：優先未做過的，然後是做過次數少的
      const prioritized = [...unattempted, ...sortedAttempted]

      // 洗牌並選取
      const shuffled = prioritized.sort(() => 0.5 - Math.random())
      const selected = shuffled.slice(0, count)

      return selected.map(q => ({
        id: q.id,
        type: 'multiple-choice',
        question: q.prob,
        meaning: q.prob_zh,
        options: q.options.map(o => o.text),
        correctAnswer: q.options[q.correctIndex].text,
        explanation: q.options.map(o => o.reason ? `${o.text}: ${o.reason}` : '').filter(Boolean).join('\n'),
        detailedExplanation: {
          correctRule: q.correctRule || '正解です。',
          distractors: q.options.map(o => ({
            text: o.text,
            reason: o.reason || '正解'
          }))
        },
        stem: q.prob,
        correct: q.options[q.correctIndex].text,
        level: level
      } as Question))
    }

    // VERB STATIC BANK LOGIC
    if (cat === 'verbs') {
      let bank = n5Questions
      if (level === 'N5') bank = n5Questions
      else if (level === 'N4') bank = n4Questions
      else if (level === 'N3') bank = n3Questions
      else if (level === 'N2') bank = n2Questions
      else if (level === 'N1') bank = n1Questions

      // Smart Question Selection: 優先選擇未做過或做過次數少的題目
      const attemptedIds = getAttemptedQuestions('verbs', level)

      // 分類題目：未做過的 vs 做過的
      const unattempted = bank.filter(q => !attemptedIds.has(q.id))
      const attempted = bank.filter(q => attemptedIds.has(q.id))

      // 對做過的題目按嘗試次數排序（次數少的優先）
      const sortedAttempted = attempted.sort((a, b) => {
        const aStats = questionStats[a.id]
        const bStats = questionStats[b.id]
        const aAttempts = aStats?.attempts || 0
        const bAttempts = bStats?.attempts || 0
        return aAttempts - bAttempts
      })

      // 組合選題池：優先未做過的，然後是做過次數少的
      const prioritized = [...unattempted, ...sortedAttempted]

      // 洗牌並選取
      const shuffled = prioritized.sort(() => 0.5 - Math.random())
      const selected = shuffled.slice(0, count)

      return selected.map(q => ({
        id: q.id,
        type: 'multiple-choice', // Standardize type
        question: q.prob, // Japanese Stem
        meaning: q.prob_zh, // Taiwanese Stem
        options: q.options.map(o => o.text),
        correctAnswer: q.options[q.correctIndex].text,
        explanation: q.options.map(o => o.reason ? `${o.text}: ${o.reason}` : '').filter(Boolean).join('\n'), // Combine reasons into explanation
        detailedExplanation: {
          correctRule: q.correctRule || '正解です。',
          distractors: q.options.map(o => ({
            text: o.text,
            reason: o.reason || '正解'
          }))
        },
        // Polyfill for legacy Question Interface
        stem: q.prob,
        correct: q.options[q.correctIndex].text,
        level: level
      } as Question))
    }

    // LEGACY LOGIC FOR OTHER CATEGORIES
    for (let i = 0; i < count; i++) {
      let q

      switch (cat) {
        case 'gojuon':
          q = generateGojuonQuestion(selectedSubcategory, Math.random() > 0.5 ? 'char-to-romaji' : 'romaji-to-char')
          break
        // case 'verbs': merged above
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

  // Quick restart with same settings
  const handleQuickRestart = () => {
    const cat = category as PracticeCategory
    const newQuestions = generateQuestions(cat, selectedLevel, 10)
    resetPractice()
    setQuestions(newQuestions)
    setShowResults(false)
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
    {
      id: 'vocabulary',
      title: t('practice.categories.vocabulary.title'),
      description: t('practice.categories.vocabulary.description'),
      icon: '🔤',
      color: 'from-yellow-400 to-orange-500',
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
          {modes.map((mode) => (
            <div
              key={mode.id}
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
            </div>
          ))}
        </div>
      </div>
    )
  }

  // History viewing screen
  if (viewingHistory) {
    const historyRecordMap = new Map(viewingHistory.answerRecords.map(r => [r.questionId, r]))

    return (
      <div className="max-w-3xl mx-auto space-y-6">
        {/* History Summary Card */}
        <div className="card text-center">
          <h1 className="text-2xl md:text-3xl font-zen font-bold mb-4 text-gradient">
            歷史作答記錄
          </h1>
          <p className="text-white/60 text-sm mb-4">
            {viewingHistory.level} · {new Date(viewingHistory.date).toLocaleDateString('zh-TW', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>

          <div className="grid grid-cols-2 gap-4 md:gap-6 my-6">
            <div className="glass p-4 md:p-6 rounded-xl">
              <div className="text-4xl md:text-5xl font-bold text-sakura-pink mb-2">
                {viewingHistory.score}/{viewingHistory.total}
              </div>
              <div className="text-sm md:text-base text-white/60">答對題數</div>
            </div>

            <div className="glass p-4 md:p-6 rounded-xl">
              <div className="text-4xl md:text-5xl font-bold text-electric-cyan mb-2">
                {viewingHistory.accuracy}%
              </div>
              <div className="text-sm md:text-base text-white/60">正確率</div>
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
            {viewingHistory.questions.map((q, index) => {
              const record = historyRecordMap.get(q.id)
              if (!record) {
                return (
                  <span
                    key={index}
                    className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm bg-white/10 text-white/40 border border-white/20"
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
          <h2 className="text-xl font-bold text-white/80">📝 詳細解析</h2>

          {viewingHistory.questions.map((question, index) => {
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
                      <p className="text-white/60 text-sm truncate max-w-[200px] md:max-w-md">
                        <FuriganaText text={question.stem} />
                      </p>
                    </div>
                  </div>
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-white/10 space-y-4">
                    <div>
                      <p className="text-lg font-bold mb-1">
                        <FuriganaText text={question.stem} />
                      </p>
                      {question.meaning && (
                        <p className="text-white/70 text-sm">
                          {question.meaning.split(/(\*.*?\*)/).map((part, i) =>
                            part.startsWith('*') && part.endsWith('*') ? (
                              <span key={i} className="italic text-sakura-pink/90 font-medium">
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
                    </div>

                    {question.detailedExplanation && (
                      <>
                        <div className="bg-black/20 p-4 rounded-lg border-l-4 border-electric-cyan space-y-2">
                          <p className="font-bold text-electric-cyan">📖 文法解析</p>
                          <p className="text-sm text-white/90 whitespace-pre-line">
                            <FuriganaText text={question.detailedExplanation.correctRule} />
                          </p>
                        </div>

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
                                    {isCorrectOption && <span className="ml-2 text-xs text-green-400/80">(正解)</span>}
                                    {isSelectedOption && !isCorrectOption && <span className="ml-2 text-xs text-red-400/80">(你的選擇)</span>}
                                    <p className="text-white/70 text-xs mt-1">
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
                {(['N5', 'N4', 'N3', 'N2', 'N1'] as const).map((level) => {
                  // Calculate question counts for Verbs category
                  const getCount = () => {
                    if (category === 'vocabulary') {
                      if (level === 'N5') return vocabN5.length;
                      if (level === 'N4') return vocabN4.length;
                      if (level === 'N3') return vocabN3.length;
                      if (level === 'N2') return vocabN2.length;
                      if (level === 'N1') return vocabN1.length;
                    }
                    if (category !== 'verbs') return null;
                    if (level === 'N5') return n5Questions.length;
                    if (level === 'N4') return n4Questions.length;
                    if (level === 'N3') return n3Questions.length;
                    if (level === 'N2') return n2Questions.length;
                    if (level === 'N1') return n1Questions.length;
                    return null;
                  };
                  const questionCount = getCount();

                  // 計算涵蓋率
                  const coverage = questionCount !== null
                    ? getCoverage(category || '', level, questionCount)
                    : null;

                  return (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`p-3 md:p-4 rounded-xl transition-all flex flex-col items-center justify-center ${selectedLevel === level
                        ? 'bg-gradient-to-r from-sakura-pink to-electric-cyan text-white shadow-lg'
                        : 'glass hover:bg-white/10'
                        }`}
                    >
                      <div className="text-lg md:text-xl font-bold">{level}</div>
                      {questionCount !== null && (
                        <>
                          <div className={`text-[10px] md:text-xs mt-1 ${selectedLevel === level ? 'text-white/90' : 'text-white/40'
                            }`}>
                            {questionCount} 題
                          </div>
                          {coverage && (
                            <div className={`text-[9px] md:text-[10px] mt-0.5 ${selectedLevel === level ? 'text-white/80' : 'text-white/30'
                              }`}>
                              已做 {coverage.attempted}/{coverage.total}
                            </div>
                          )}
                        </>
                      )}
                    </button>
                  );
                })}
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

        {/* Practice History Section */}
        {category !== 'gojuon' && (() => {
          const history = getHistoryByCategory(category || '', selectedLevel)
          const avgAccuracy = history.length > 0
            ? Math.round(history.reduce((sum, h) => sum + h.accuracy, 0) / history.length)
            : null

          if (history.length === 0) return null

          return (
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <History size={20} className="text-electric-cyan" />
                  近期成績 ({selectedLevel})
                </h2>
                {avgAccuracy !== null && (
                  <div className="text-sm">
                    平均：<span className="font-bold text-electric-cyan">{avgAccuracy}%</span>
                  </div>
                )}
              </div>

              {/* History Table - Clickable */}
              <div className="space-y-2">
                {history.map((entry, idx) => (
                  <button
                    key={entry.id}
                    onClick={() => setViewingHistory(entry)}
                    className="w-full flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-white/40 text-sm w-6">#{idx + 1}</span>
                      <div>
                        <span className={`font-bold ${entry.accuracy >= 80 ? 'text-green-400' : entry.accuracy >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                          {entry.score}/{entry.total}
                        </span>
                        <span className="text-white/60 ml-2">({entry.accuracy}%)</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/40">
                        {new Date(entry.date).toLocaleDateString('zh-TW', {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </span>
                      <ChevronDown size={14} className="text-white/40 -rotate-90" />
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
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Score Summary Card */}
        <div className="card text-center">
          <h1 className="text-3xl md:text-4xl font-zen font-bold mb-4 text-gradient">
            {t('practice.complete')}
          </h1>

          <div className="grid grid-cols-2 gap-4 md:gap-6 my-6">
            <div className="glass p-4 md:p-6 rounded-xl">
              <div className="text-4xl md:text-5xl font-bold text-sakura-pink mb-2">
                {score}/{answeredCount}
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

          {unansweredCount > 0 && (
            <div className="text-sm text-white/50 mb-4">
              ⚠️ 未作答：{unansweredCount} 題
            </div>
          )}

          {/* Action Buttons - Side by Side */}
          <div className="flex gap-3 justify-center flex-wrap pt-2">
            <button onClick={handleQuickRestart} className="btn-primary px-5 py-2.5">
              {t('practice.practiceAgain')}
            </button>
            <button onClick={handleRestart} className="btn-secondary px-5 py-2.5">
              重新選擇
            </button>
            <button
              onClick={() => navigate('/')}
              className="btn-secondary px-5 py-2.5"
            >
              {t('practice.backToDashboard')}
            </button>
          </div>
        </div>

        {/* Question Navigation - Sticky */}
        <div className="sticky top-16 z-10 card py-3 px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {questions.map((q, index) => {
              const record = recordMap.get(q.id)
              if (!record) {
                // Unanswered
                return (
                  <span
                    key={index}
                    className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm bg-white/10 text-white/40 border border-white/20"
                  >
                    {index + 1}
                  </span>
                )
              }
              return (
                <a
                  key={index}
                  href={`#q-${index}`}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm transition-all hover:scale-110 ${record.isCorrect
                    ? 'bg-green-500/30 text-green-400 border border-green-500/50'
                    : 'bg-red-500/30 text-red-400 border border-red-500/50'
                    }`}>
                  {record.isCorrect ? <Check size={16} /> : <X size={16} />}
                  <span className="sr-only">第 {index + 1} 題</span>
                </a>
              )
            })}
          </div>
        </div>

        {/* Detailed Question Review - Only show answered questions */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white/80">📝 詳細解析（已作答 {answeredCount} 題）</h2>

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
                        <FuriganaText text={question.stem} />
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
                        <FuriganaText text={question.stem} />
                      </p>
                      {question.meaning && (
                        <p className="text-white/70 text-sm">
                          {question.meaning.split(/(\*.*?\*)/).map((part, i) =>
                            part.startsWith('*') && part.endsWith('*') ? (
                              <span key={i} className="italic text-sakura-pink/90 font-medium">
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
                    </div>

                    {/* Detailed Explanation */}
                    {question.detailedExplanation && (
                      <>
                        {/* Main Rule Explanation */}
                        <div className="bg-black/20 p-4 rounded-lg border-l-4 border-electric-cyan space-y-2">
                          <p className="font-bold text-electric-cyan">📖 文法解析</p>
                          <p className="text-sm text-white/90 whitespace-pre-line">
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
                                    {isCorrectOption && <span className="ml-2 text-xs text-green-400/80">(正解)</span>}
                                    {isSelectedOption && !isCorrectOption && <span className="ml-2 text-xs text-red-400/80">(你的選擇)</span>}
                                    <p className="text-white/70 text-xs mt-1">
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
    <div className="max-w-4xl mx-auto">
      <div className="mb-4 md:mb-6">
        <div className="flex items-center justify-between mb-2 md:mb-4">
          <div className="flex items-center gap-3">
            <h1 className="text-xl md:text-2xl font-zen font-bold capitalize">
              {t(`practice.categories.${category}.title`)}
            </h1>
            <div className="flex gap-2">
              <button
                onClick={handleRestart}
                className="px-3 py-1.5 text-xs rounded-lg glass hover:bg-white/20 transition-all text-white/70 hover:text-white"
              >
                結束返回
              </button>
              <button
                onClick={() => setShowResults(true)}
                className="px-3 py-1.5 text-xs rounded-lg bg-sakura-pink/20 hover:bg-sakura-pink/40 border border-sakura-pink/50 transition-all text-sakura-pink"
              >
                交卷
              </button>
            </div>
          </div>
          <div className="text-xs md:text-sm text-white/60">
            {t('practice.question', { current: currentIndex + 1, total: questions.length })}
          </div>
        </div>

        <div className="w-full bg-white/10 rounded-full h-1.5">
          <div
            className="bg-gradient-to-r from-sakura-pink to-electric-cyan h-1.5 rounded-full"
            style={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {currentQuestion && (
        <QuestionCard
          key={currentQuestion.id}
          question={currentQuestion}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  )
}

export default Practice
