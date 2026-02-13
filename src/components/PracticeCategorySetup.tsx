import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown, History, Clock } from 'lucide-react'
import { usePracticeStore, PracticeHistoryEntry } from '../store/usePracticeStore'
import { getGojuonQuestionCount } from '../data/gojuon'
import { getGrammarQuestionCount } from '../data/grammar'
import { getKanjiQuestionCount } from '../data/kanji'
import { getStaticBankCount, getVocabUnifiedBankCount } from '../utils/questionBanks'
import { practiceCategories as datesPracticeCategories } from '../data/questions/datesPractice'

type GojuonSubcategory = 'hiragana' | 'katakana'

interface PracticeCategorySetupProps {
  category: string
  onStartPractice: (settings: PracticeSettings) => void
  onStartReview: (settings: PracticeSettings) => void
  onStartSrsReview: (settings: PracticeSettings) => void
  onViewHistory: (entry: PracticeHistoryEntry) => void
  onBack: () => void
}

export interface PracticeSettings {
  level: string
  subcategory?: GojuonSubcategory
  datesCategory?: string
  datesSubcategory?: string
  questionCount: number
}

const PracticeCategorySetup = ({
  category,
  onStartPractice,
  onStartReview,
  onStartSrsReview,
  onViewHistory,
  onBack,
}: PracticeCategorySetupProps) => {
  const { t } = useTranslation()
  const {
    getHistoryByCategory,
    getAttemptedQuestions,
    getLevelStats,
    getWrongQuestionIds,
    questionStats,
  } = usePracticeStore()

  const [selectedLevel, setSelectedLevel] = useState<'N5' | 'N4' | 'N3' | 'N2' | 'N1'>('N5')
  const [selectedSubcategory, setSelectedSubcategory] = useState<GojuonSubcategory>('hiragana')
  const [questionCount, setQuestionCount] = useState<number>(20)
  const [selectedDatesCategory, setSelectedDatesCategory] = useState('numbers')
  const [selectedDatesSubcategory, setSelectedDatesSubcategory] = useState('basic')

  const currentLevelKey = category === 'gojuon'
    ? selectedSubcategory
    : category === 'dates'
      ? `${selectedDatesCategory}_${selectedDatesSubcategory}`
      : selectedLevel

  const wrongIds = getWrongQuestionIds(category, currentLevelKey)
  const hasWrongQuestions = wrongIds.length > 0

  // SRS: count due/overdue questions
  const srsInfo = useMemo(() => {
    const now = new Date()
    let dueCount = 0
    let overdueCount = 0

    const attemptedIds = getAttemptedQuestions(category, currentLevelKey)
    attemptedIds.forEach(qid => {
      const stats = questionStats[qid]
      if (!stats?.srsDueDate) return
      const dueDate = new Date(stats.srsDueDate)
      if (dueDate <= now) {
        dueCount++
        const daysDiff = Math.floor((now.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24))
        if (daysDiff >= 1) overdueCount++
      }
    })

    return { dueCount, overdueCount }
  }, [category, currentLevelKey, questionStats, getAttemptedQuestions])

  const buildSettings = (): PracticeSettings => ({
    level: selectedLevel,
    subcategory: category === 'gojuon' ? selectedSubcategory : undefined,
    datesCategory: category === 'dates' ? selectedDatesCategory : undefined,
    datesSubcategory: category === 'dates' ? selectedDatesSubcategory : undefined,
    questionCount,
  })

  // History data
  const history = getHistoryByCategory(category, currentLevelKey)
  const avgAccuracy = history.length > 0
    ? Math.round(history.reduce((sum, h) => sum + h.accuracy, 0) / history.length)
    : null

  return (
    <div className="max-w-md sm:max-w-2xl mx-auto space-y-4 px-2 sm:px-0">
      <div className="card px-3 py-3 sm:px-6 sm:py-6">
        <h1 className="text-xl sm:text-3xl font-zen font-bold mb-4 sm:mb-5 text-gradient capitalize">
          {t(`practice.categories.${category}.title`)}
        </h1>

        {/* Gojuon subcategory selection */}
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

        {/* Dates category + subcategory */}
        {category === 'dates' && (
          <>
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

        {/* Level selection (non-gojuon, non-dates) */}
        {category !== 'gojuon' && category !== 'dates' && (
          <div className="mb-5">
            <label className="block text-base sm:text-lg font-semibold mb-3">{t('practice.selectLevel')}:</label>
            <div className="grid grid-cols-5 gap-2 sm:gap-3">
              {(['N5', 'N4', 'N3', 'N2', 'N1'] as const).map((level) => {
                const vocabUnifiedCount = category === 'vocabulary' ? getVocabUnifiedBankCount(level) : 0
                const totalQuestionCount =
                  (category === 'vocabulary' && vocabUnifiedCount > 0 ? vocabUnifiedCount : null)
                  ?? getStaticBankCount(category, level)
                  ?? (category === 'grammar' ? getGrammarQuestionCount(level) : null)
                  ?? (category === 'kanji' ? getKanjiQuestionCount(level) : null)
                const attemptedCount = getAttemptedQuestions(category, level).size
                const levelStats = getLevelStats(category, level)

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
                )
              })}
            </div>
          </div>
        )}

        {/* Question count + action buttons */}
        <div className="space-y-3">
          <div className="mb-3">
            <label className="block text-base sm:text-lg font-semibold mb-3">題目數量:</label>
            <div className="grid grid-cols-6 gap-2 sm:gap-3">
              {[5, 10, 20, 30, 40, 50].map(count => (
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

          {/* SRS review entry */}
          {srsInfo.dueCount > 0 && (
            <button
              onClick={() => onStartSrsReview(buildSettings())}
              className="w-full py-3 sm:py-4 text-base sm:text-lg font-bold rounded-lg transition-all bg-wave-mid text-foam hover:bg-wave-deep shadow-md flex items-center justify-center gap-2"
            >
              <Clock size={18} />
              今日複習 ({srsInfo.dueCount})
              {srsInfo.overdueCount > 0 && (
                <span className="text-sm text-yamabuki-light">
                  · {srsInfo.overdueCount} 逾期
                </span>
              )}
            </button>
          )}

          <div className="flex gap-2 sm:gap-3 pt-1">
            <button onClick={() => onStartPractice(buildSettings())} className="btn-primary flex-1 py-3 sm:py-4 text-base sm:text-lg font-bold">
              {t('practice.startPractice')}
            </button>
            <button
              onClick={() => hasWrongQuestions && onStartReview(buildSettings())}
              disabled={!hasWrongQuestions}
              className={`flex-1 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-lg transition-all ${hasWrongQuestions
                ? 'bg-vermilion text-white hover:bg-vermilion/90 shadow-md'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
            >
              複習錯題 {hasWrongQuestions ? `(${wrongIds.length})` : ''}
            </button>
          </div>
          <button
            onClick={onBack}
            className="btn-secondary w-full py-2.5 sm:py-3 text-base sm:text-lg"
          >
            {t('practice.backToDashboard')}
          </button>
        </div>
      </div>

      {/* Practice History Section */}
      {history.length > 0 && (
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

          <div className="space-y-1.5 sm:space-y-2">
            {history.map((entry, idx) => (
              <button
                key={entry.id}
                onClick={() => onViewHistory(entry)}
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
      )}
    </div>
  )
}

export default PracticeCategorySetup
