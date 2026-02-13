import { useState } from 'react'
import { ChevronDown, ChevronUp, Check, X } from 'lucide-react'
import FuriganaText from './FuriganaText'
import { PracticeHistoryEntry } from '../store/usePracticeStore'
import { buildQuestionLookup } from '../utils/questionLookup'

interface PracticeHistoryViewProps {
  history: PracticeHistoryEntry
  onBack: () => void
}

const PracticeHistoryView = ({ history, onBack }: PracticeHistoryViewProps) => {
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

  const historyRecordMap = new Map(history.answerRecords.map(r => [r.questionId, r]))

  // Enrich compact questions with detailedExplanation from banks if missing
  const lookup = history.questions.some(q => !q.detailedExplanation)
    ? buildQuestionLookup(history.category, history.level)
    : null
  const enrichedQuestions = lookup
    ? history.questions.map(q => {
        if (!q.detailedExplanation) {
          const fullQ = lookup.get(q.id)
          return fullQ ? { ...q, detailedExplanation: fullQ.detailedExplanation } : q
        }
        return q
      })
    : history.questions

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* History Summary Card */}
      <div className="card text-center">
        <h1 className="text-2xl md:text-3xl font-zen font-bold mb-4 text-gradient">
          歷史作答記錄
        </h1>
        <p className="text-indigo-900/90 text-sm mb-4">
          {history.level} · {new Date(history.date).toLocaleDateString('zh-TW', {
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
              {history.score}/{history.total}
            </div>
            <div className="text-xs md:text-sm text-sumi">答對題數</div>
          </div>

          <div className="paper-card p-3 md:p-4 rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-wave-deep mb-1">
              {history.accuracy}%
            </div>
            <div className="text-xs md:text-sm text-sumi">正確率</div>
          </div>
        </div>

        <button
          onClick={onBack}
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
                        <p className="text-sm font-bold text-green-400">配對完成！</p>
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

export default PracticeHistoryView
