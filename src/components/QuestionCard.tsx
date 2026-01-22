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
      className="card max-w-2xl mx-auto"
    >
      <div className="space-y-3 md:space-y-4">
        <div className="text-center">
          <span className="inline-block px-2 py-0.5 bg-sakura-pink/20 text-sakura-pink rounded-full text-[10px] md:text-xs font-semibold mb-1 md:mb-2">
            {question.level}
          </span>
          <h2 className="text-lg md:text-2xl font-zen font-bold mb-1 break-words text-balance">
            <FuriganaText text={question.stem} />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              disabled={!!selectedAnswer}
              className={`p-3 md:p-4 rounded-xl border-2 transition-all duration-100 ${selectedAnswer === option
                ? isCorrect
                  ? 'bg-green-500/20 border-green-500 shadow-lg shadow-green-500/50'
                  : 'bg-red-500/20 border-red-500 shadow-lg shadow-red-500/50'
                : selectedAnswer && option === question.correct
                  ? 'bg-green-500/20 border-green-500'
                  : 'glass-hover border-white/20'
                }`}
            >
              <span className="text-sm md:text-base font-noto break-words">
                <FuriganaText text={option} />
              </span>
            </button>
          ))}
        </div>

        {showFeedback && (
          <div
            className="space-y-4"
          >
            <div className={`p-4 rounded-xl space-y-3 ${isCorrect
              ? 'bg-green-500/20 border-2 border-green-500'
              : 'bg-red-500/20 border-2 border-red-500'
              }`}>
              <h3 className="text-base md:text-lg font-bold">
                {isCorrect ? t('practice.correct') : t('practice.incorrect')}
              </h3>

              {/* Detailed Explanation Logic */}
              {question.detailedExplanation ? (
                <div className="space-y-3 text-sm text-left">
                  {/* 1. Always show the correct rule */}
                  <div className="bg-black/20 p-3 rounded-lg border-l-4 border-green-500">
                    <p className="font-bold text-green-400 mb-1">✅ 正解解析</p>
                    <p className="text-white/90">
                      <FuriganaText text={question.detailedExplanation.correctRule} />
                    </p>
                  </div>

                  {/* 2. If wrong, show specific error for the selected answer */}
                  {!isCorrect && selectedAnswer && (
                    <div className="bg-black/20 p-3 rounded-lg border-l-4 border-red-500">
                      <p className="font-bold text-red-400 mb-1">❌ 錯誤分析</p>
                      <p className="text-white/90">
                        {question.detailedExplanation.distractors.find(d => d.text === selectedAnswer)?.reason || '此選項不正確。'}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                /* Fallback for legacy questions */
                (showExplanation || !isCorrect) && (
                  <p className="text-xs md:text-sm text-white/80">
                    <FuriganaText text={question.explanation} />
                  </p>
                )
              )}
            </div>

            <button
              onClick={() => onAnswer(selectedAnswer!)}
              className="w-full btn-primary py-3 flex items-center justify-center gap-2 text-base font-bold"
            >
              {t('practice.nextQuestion')}
              <ChevronRight size={18} />
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
