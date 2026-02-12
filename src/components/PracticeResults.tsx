import { useState, useMemo, useEffect, useRef, lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, Check, X } from 'lucide-react'
import { Question } from '../types'
import { AnswerRecord, PracticeHistoryEntry } from '../store/usePracticeStore'
import { evaluateAchievements, AchievementContext } from '../utils/achievements'
import FuriganaText from './FuriganaText'
import AchievementBadge from './AchievementBadge'
import AchievementToast from './AchievementToast'
import { ILLUSTRATIONS, UI_ELEMENTS } from '../config/assets'

const AccuracyTrendChart = lazy(() => import('./charts/AccuracyTrendChart'))
const ResponseTimeBar = lazy(() => import('./charts/ResponseTimeBar'))

interface PracticeResultsProps {
  questions: Question[]
  answerRecords: AnswerRecord[]
  score: number
  category: string
  level: string
  practiceStartTime: number | null
  categoryHistory: PracticeHistoryEntry[]
  allHistory: PracticeHistoryEntry[]
  questionStats: Record<string, any>
  earnedAchievements: string[]
  onNewAchievements?: (ids: string[]) => void
  onQuickRestart: () => void
  onRestart: () => void
  onBackToDashboard: () => void
}

const PracticeResults = ({
  questions,
  answerRecords,
  score,
  category,
  level,
  practiceStartTime,
  categoryHistory,
  allHistory,
  questionStats,
  earnedAchievements,
  onNewAchievements,
  onQuickRestart,
  onRestart,
  onBackToDashboard,
}: PracticeResultsProps) => {
  const { t } = useTranslation()
  const [expandedQuestions, setExpandedQuestions] = useState<Set<number>>(new Set())
  const [showAchievementToast, setShowAchievementToast] = useState(true)

  const answeredCount = answerRecords.length
  const unansweredCount = questions.length - answeredCount
  const accuracy = answeredCount > 0 ? Math.round((score / answeredCount) * 100) : 0
  const durationMs = practiceStartTime ? Date.now() - practiceStartTime : 0

  // 作答時間統計
  const responseTimes = answerRecords
    .filter(r => r.responseTimeMs)
    .map(r => r.responseTimeMs!)
  const avgResponseTime = responseTimes.length > 0
    ? Math.round(responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length)
    : null
  const fastestTime = responseTimes.length > 0 ? Math.min(...responseTimes) : null
  const slowestTime = responseTimes.length > 0 ? Math.max(...responseTimes) : null

  // 連續正確紀錄
  const maxStreak = useMemo(() => {
    let max = 0, streak = 0
    for (const r of answerRecords) {
      streak = r.isCorrect ? streak + 1 : 0
      max = Math.max(max, streak)
    }
    return max
  }, [answerRecords])

  // 與上次比較
  const prevSession = categoryHistory.length > 1 ? categoryHistory[1] : null
  const accuracyDelta = prevSession ? accuracy - prevSession.accuracy : null

  // 正確率趨勢資料
  const trendData = useMemo(() =>
    [...categoryHistory]
      .reverse()
      .slice(-10)
      .map(h => ({ date: h.date, accuracy: h.accuracy })),
    [categoryHistory]
  )

  // 成就計算
  const newAchievements = useMemo(() => {
    const context: AchievementContext = {
      sessionScore: score,
      sessionTotal: answeredCount,
      sessionAccuracy: accuracy,
      sessionDurationMs: durationMs,
      answerRecords,
      totalPracticeSessions: allHistory.length,
      categoryHistory,
      allHistory,
      questionStats,
      category,
      level,
    }
    return evaluateAchievements(context, earnedAchievements)
  }, [score, answeredCount, accuracy, durationMs, answerRecords, allHistory, categoryHistory, questionStats, category, level, earnedAchievements])

  // Notify parent of new achievements (side effect separated from useMemo)
  const achievementNotifiedRef = useRef(false)
  useEffect(() => {
    if (newAchievements.length > 0 && onNewAchievements && !achievementNotifiedRef.current) {
      achievementNotifiedRef.current = true
      onNewAchievements(newAchievements.map(a => a.id))
    }
  }, [newAchievements, onNewAchievements])

  // 作答時間長條圖資料
  const responseTimeData = useMemo(() =>
    answerRecords
      .filter(r => r.responseTimeMs)
      .map((r, i) => ({
        label: `${i + 1}`,
        timeMs: r.responseTimeMs!,
        isCorrect: r.isCorrect,
      })),
    [answerRecords]
  )

  const recordMap = new Map(answerRecords.map(r => [r.questionId, r]))

  const toggleQuestion = (index: number) => {
    setExpandedQuestions(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) newSet.delete(index)
      else newSet.add(index)
      return newSet
    })
  }

  const formatTime = (ms: number) => {
    const s = Math.floor(ms / 1000)
    return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`
  }

  return (
    <div className="max-w-3xl mx-auto space-y-3 px-2 sm:px-0">
      {/* 成就彈出通知 */}
      {showAchievementToast && newAchievements.length > 0 && (
        <AchievementToast
          achievements={newAchievements}
          onDismiss={() => setShowAchievementToast(false)}
        />
      )}

      {/* 得分摘要 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card text-center py-2 px-3 sm:py-3 sm:px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-10">
          <img src={ILLUSTRATIONS.achievement} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10">
          {accuracy >= 70 && (
            <div className="absolute -top-2 -right-2 sm:top-0 sm:right-0 w-16 h-16 sm:w-20 sm:h-20 transform rotate-12 opacity-80">
              <img src={UI_ELEMENTS.hankoStamp} alt="Completion Stamp" className="w-full h-full object-contain drop-shadow-lg" />
            </div>
          )}

          <h1 className="text-lg sm:text-xl md:text-2xl font-zen font-bold mb-1.5 sm:mb-2 text-gradient">
            {t('practice.complete')}
          </h1>

          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 my-2">
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-vermilion">{score}/{answeredCount}</div>
              <div className="text-[9px] sm:text-[10px] md:text-xs text-sumi">{t('practice.questionsCorrect')}</div>
            </div>
            <div className="w-px h-6 sm:h-8 bg-wave-deep/20" />
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-wave-deep">{accuracy}%</div>
              <div className="text-[9px] sm:text-[10px] md:text-xs text-sumi">{t('practice.accuracy')}</div>
            </div>
            {accuracyDelta !== null && (
              <>
                <div className="w-px h-6 sm:h-8 bg-wave-deep/20" />
                <div className="text-center">
                  <div className={`text-sm sm:text-base font-bold ${accuracyDelta >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                    {accuracyDelta >= 0 ? '+' : ''}{accuracyDelta}%
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-sumi-faded">vs 上次</div>
                </div>
              </>
            )}
            {unansweredCount > 0 && (
              <>
                <div className="w-px h-6 sm:h-8 bg-wave-deep/20" />
                <div className="text-center">
                  <div className="text-[10px] sm:text-sm text-sumi-faded">{unansweredCount} 題未答</div>
                </div>
              </>
            )}
          </div>

          {/* 統計摘要 */}
          <div className="flex items-center justify-center gap-4 text-[10px] sm:text-xs text-sumi-faded mt-1">
            {durationMs > 0 && <span>⏱ {formatTime(durationMs)}</span>}
            {avgResponseTime && <span>📊 平均 {(avgResponseTime / 1000).toFixed(1)}s/題</span>}
            {maxStreak > 1 && <span>🔥 連續 {maxStreak} 題</span>}
          </div>

          <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-2 justify-center pt-2">
            <button onClick={onQuickRestart} className="btn-primary px-3 py-1.5 text-xs sm:text-sm">
              {t('practice.practiceAgain')}
            </button>
            <button onClick={onRestart} className="btn-secondary px-3 py-1.5 text-xs sm:text-sm">
              重新選擇
            </button>
            <button onClick={onBackToDashboard} className="btn-secondary px-3 py-1.5 text-xs sm:text-sm">
              {t('practice.backToDashboard')}
            </button>
          </div>
        </div>
      </motion.div>

      {/* 正確率趨勢圖 */}
      {trendData.length >= 2 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card p-3 sm:p-4"
        >
          <h2 className="text-sm sm:text-base font-bold text-sumi mb-2">📈 正確率趨勢</h2>
          <Suspense fallback={<div className="h-32 animate-pulse bg-wave-deep/10 rounded" />}>
            <AccuracyTrendChart history={trendData} />
          </Suspense>
        </motion.div>
      )}

      {/* 新成就 */}
      {newAchievements.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="card p-3 sm:p-4"
        >
          <h2 className="text-sm sm:text-base font-bold text-sumi mb-2">🏅 獲得成就</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {newAchievements.map(a => (
              <AchievementBadge key={a.id} achievement={a} isNew />
            ))}
          </div>
        </motion.div>
      )}

      {/* 題目導航列 */}
      <div className="sticky top-16 z-10 card py-2 px-2 sm:py-3 sm:px-4">
        <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
          {questions.map((q, index) => {
            const record = recordMap.get(q.id)
            if (!record) {
              return (
                <span key={index} className="w-7 h-7 sm:w-9 sm:h-9 rounded-md sm:rounded-lg flex items-center justify-center font-bold text-xs sm:text-sm bg-wave-deep/10 text-sumi-faded border border-wave-deep/20">
                  {index + 1}
                </span>
              )
            }
            return (
              <a key={index} href={`#q-${index}`} className={`w-7 h-7 sm:w-9 sm:h-9 rounded-md sm:rounded-lg flex items-center justify-center font-bold text-xs sm:text-sm transition-all hover:scale-110 ${
                record.isCorrect
                  ? 'bg-green-600 text-white border border-green-700'
                  : 'bg-red-500 text-white border border-red-600'
              }`}>
                {record.isCorrect ? <Check size={14} className="sm:w-4 sm:h-4" /> : <X size={14} className="sm:w-4 sm:h-4" />}
              </a>
            )
          })}
        </div>
      </div>

      {/* 作答時間分布 */}
      {responseTimeData.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card p-3 sm:p-4"
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm sm:text-base font-bold text-sumi">⏱ 作答時間分布</h2>
            <div className="text-[10px] text-sumi-faded space-x-2">
              {fastestTime && <span>最快 {(fastestTime / 1000).toFixed(1)}s</span>}
              {slowestTime && <span>最慢 {(slowestTime / 1000).toFixed(1)}s</span>}
            </div>
          </div>
          <Suspense fallback={<div className="h-24 animate-pulse bg-wave-deep/10 rounded" />}>
            <ResponseTimeBar data={responseTimeData} />
          </Suspense>
        </motion.div>
      )}

      {/* 題目詳解 */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-sumi">詳細解析（已作答 {answeredCount} 題）</h2>

        {questions.map((question, index) => {
          const record = recordMap.get(question.id)
          if (!record) return null
          const isExpanded = expandedQuestions.has(index)

          return (
            <div key={question.id} id={`q-${index}`} className="card scroll-mt-32">
              <button onClick={() => toggleQuestion(index)} className="w-full flex items-center justify-between text-left">
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                    record.isCorrect ? 'bg-green-500/30 text-green-400' : 'bg-red-500/30 text-red-400'
                  }`}>
                    {index + 1}
                  </span>
                  <div>
                    <span className={`text-sm font-medium ${record.isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                      {record.isCorrect ? '✓ 正確' : '✗ 錯誤'}
                    </span>
                    {record.responseTimeMs && (
                      <span className="text-[10px] text-sumi-faded ml-2">
                        {(record.responseTimeMs / 1000).toFixed(1)}s
                      </span>
                    )}
                    <p className="text-white/60 text-sm truncate max-w-[200px] md:max-w-md">
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
                      <p className="text-white/70 text-sm">
                        {question.meaning.split(/(\*.*?\*)/).map((part, i) =>
                          part.startsWith('*') && part.endsWith('*') ? (
                            <span key={i} className="italic text-vermilion/90 font-medium">{part.slice(1, -1)}</span>
                          ) : part
                        )}
                      </p>
                    )}
                  </div>

                  <div className={`p-3 rounded-lg ${
                    record.isCorrect
                      ? 'bg-green-500/20 border border-green-500/50'
                      : 'bg-red-500/20 border border-red-500/50'
                  }`}>
                    {question.type === 'matching' ? (
                      <div className="text-center">
                        <p className="text-lg font-bold text-green-400 mb-2">マッチング完了！</p>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          {question.pairs?.map((p, idx) => (
                            <div key={idx} className="bg-white/10 p-2 rounded">{p.char} = {p.romaji}</div>
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

                  {question.detailedExplanation && (
                    <>
                      <div className="bg-black/20 p-4 rounded-lg border-l-4 border-wave-light space-y-2">
                        <p className="font-bold text-wave-light">📖 文法解析</p>
                        <p className="text-base text-white/90 whitespace-pre-line">
                          <FuriganaText text={question.detailedExplanation.correctRule} />
                        </p>
                      </div>

                      <div className="bg-black/20 p-4 rounded-lg space-y-2">
                        <p className="font-bold text-white/80 mb-2">📝 各選項解析</p>
                        {question.detailedExplanation.distractors.map((distractor, idx) => {
                          const isCorrectOption = distractor.text === question.correct
                          const isSelectedOption = distractor.text === record.selectedAnswer

                          return (
                            <div key={idx} className={`p-2 rounded-lg ${
                              isCorrectOption
                                ? 'bg-green-500/20 border border-green-500/50'
                                : isSelectedOption
                                  ? 'bg-red-500/20 border border-red-500/50'
                                  : 'bg-white/5 border border-white/10'
                            }`}>
                              <div className="flex items-start gap-2">
                                <span className={`font-bold shrink-0 ${
                                  isCorrectOption ? 'text-green-400' : isSelectedOption ? 'text-red-400' : 'text-white/60'
                                }`}>
                                  {isCorrectOption ? '✓' : isSelectedOption ? '✗' : '•'}
                                </span>
                                <div className="flex-1">
                                  <span className={`font-medium ${
                                    isCorrectOption ? 'text-green-400' : isSelectedOption ? 'text-red-400' : 'text-white/80'
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

export default PracticeResults
