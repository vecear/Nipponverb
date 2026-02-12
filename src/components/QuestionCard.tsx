import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronRight } from 'lucide-react'
import { Question } from '../types'
import FuriganaText from './FuriganaText'

interface QuestionCardProps {
  question: Question
  onAnswer: (answer: string) => void
  showExplanation?: boolean
}

const QuestionCard = ({ question, onAnswer, showExplanation = false }: QuestionCardProps) => {
  const { t } = useTranslation()
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer) return

    setSelectedAnswer(answer)
    const correct = answer === question.correct
    setIsCorrect(correct)
    setShowFeedback(true)
  }

  return (
    <div
      className="card max-w-md sm:max-w-2xl mx-auto px-3 py-3 sm:px-6 sm:py-6"
    >
      <div className="space-y-2 sm:space-y-4">
        <div className="text-center">
          <span className="inline-block px-1.5 py-0.5 sm:px-2 bg-vermilion/20 text-vermilion rounded-full text-[9px] sm:text-xs font-semibold mb-0.5 sm:mb-2">
            {question.level}
          </span>
          <h2 className="text-sm sm:text-xl font-zen font-bold break-words text-balance text-sumi">
            <FuriganaText text={question.stem || ''} />
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-1.5 sm:gap-3">
          {(question.options || []).map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              disabled={!!selectedAnswer}
              className={`py-1.5 px-2 sm:py-3 sm:px-4 rounded-md sm:rounded-xl border-2 transition-all duration-100 ${selectedAnswer === option
                ? isCorrect
                  ? 'bg-green-500/20 border-green-500 shadow-sm shadow-green-500/30'
                  : 'bg-red-500/20 border-red-500 shadow-sm shadow-red-500/30'
                : selectedAnswer && option === question.correct
                  ? 'bg-green-500/20 border-green-500'
                  : 'paper-card border-wave-deep/30 hover:border-vermilion active:scale-95'
                }`}
            >
              <span className="text-[11px] sm:text-sm font-noto break-words text-sumi">
                <FuriganaText text={option} />
              </span>
            </button>
          ))}
        </div>

        {showFeedback && (
          <div
            className="space-y-2 sm:space-y-3"
          >
            <div className={`p-2 sm:p-3 rounded-lg space-y-2 ${isCorrect
              ? 'bg-green-500/20 border-2 border-green-500'
              : 'bg-red-500/20 border-2 border-red-500'
              }`}>
              <h3 className="text-sm sm:text-base font-bold">
                {isCorrect ? t('practice.correct') : t('practice.incorrect')}
              </h3>

              {/* Detailed Explanation Logic */}
              {question.detailedExplanation ? (
                <div className="space-y-2 text-sm sm:text-base text-left">
                  {/* Translation / Meaning */}
                  {question.meaning && (
                    <p className="text-gray-800 pb-1.5 border-b border-gray-300">
                      {question.meaning.split(/(\*.*?\*)/).map((part, index) =>
                        part.startsWith('*') && part.endsWith('*') ? (
                          <span key={index} className="italic text-vermilion/90 font-medium">
                            {part.slice(1, -1)}
                          </span>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  )}

                  {/* Main Rule Explanation */}
                  <div className="bg-gray-200/80 p-2 rounded-md border-l-3 border-wave">
                    <p className="font-bold text-wave mb-0.5 text-sm sm:text-base">📖 文法解析</p>
                    <p className="text-gray-800 whitespace-pre-line text-sm sm:text-base">
                      <FuriganaText text={question.detailedExplanation.correctRule} />
                    </p>
                  </div>

                  {/* All Options Explanations */}
                  <div className="bg-gray-200/80 p-2 rounded-md space-y-1.5">
                    <p className="font-bold text-gray-800 mb-1 text-sm sm:text-base">📝 各選項解析</p>
                    {question.detailedExplanation.distractors.map((distractor, idx) => {
                      const isCorrectOption = distractor.text === question.correct
                      const isSelectedOption = distractor.text === selectedAnswer

                      return (
                        <div
                          key={idx}
                          className={`p-1.5 rounded-md ${
                            isCorrectOption
                              ? 'bg-green-500/20 border border-green-500/50'
                              : isSelectedOption
                              ? 'bg-red-500/20 border border-red-500/50'
                              : 'bg-gray-100 border border-gray-300'
                          }`}
                        >
                          <div className="flex items-start gap-1.5">
                            <span className={`font-bold shrink-0 text-sm ${
                              isCorrectOption ? 'text-green-600' : isSelectedOption ? 'text-red-600' : 'text-gray-600'
                            }`}>
                              {isCorrectOption ? '✓' : isSelectedOption ? '✗' : '•'}
                            </span>
                            <div className="flex-1 min-w-0">
                              <span className={`font-medium text-sm sm:text-base ${
                                isCorrectOption ? 'text-green-700' : isSelectedOption ? 'text-red-700' : 'text-gray-800'
                              }`}>
                                <FuriganaText text={distractor.text} />
                              </span>
                              {isCorrectOption && <span className="ml-1 text-xs sm:text-sm text-green-600">(正解)</span>}
                              {isSelectedOption && !isCorrectOption && <span className="ml-1 text-xs sm:text-sm text-red-600">(你的選擇)</span>}
                              <p className="text-gray-700 text-xs sm:text-sm mt-0.5">
                                <FuriganaText text={distractor.reason} />
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ) : (
                /* Fallback for legacy questions */
                (showExplanation || !isCorrect) && question.explanation && (
                  <p className="text-sm sm:text-base text-gray-800">
                    <FuriganaText text={question.explanation} />
                  </p>
                )
              )}
            </div>

            <button
              onClick={() => onAnswer(selectedAnswer!)}
              className="w-full btn-primary py-2 sm:py-3 flex items-center justify-center gap-1.5 text-sm sm:text-base font-bold"
            >
              {t('practice.nextQuestion')}
              <ChevronRight size={16} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        )}

        {question.source && (
          <div className="text-center text-sm text-white/50">
            Source: {question.source}
          </div>
        )}
      </div>
    </div>
  )
}

export default QuestionCard
