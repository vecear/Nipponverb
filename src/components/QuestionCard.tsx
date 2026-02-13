import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronRight, Check, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { Question } from '../types'
import FuriganaText from './FuriganaText'
import ExplanationPanel from './ExplanationPanel'

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
          {(question.options || []).map((option, index) => {
            const isSelected = selectedAnswer === option
            const isCorrectOption = option === question.correct
            const showCorrectHighlight = selectedAnswer && isCorrectOption
            const showWrongHighlight = isSelected && !isCorrect

            return (
              <motion.button
                key={index}
                onClick={() => handleAnswerClick(option)}
                disabled={!!selectedAnswer}
                animate={
                  showWrongHighlight
                    ? { x: [0, -4, 4, -4, 4, 0] }
                    : showCorrectHighlight && isSelected
                    ? { scale: [1, 1.03, 1] }
                    : {}
                }
                transition={{ duration: 0.075 }}
                className={`py-1.5 px-2 sm:py-3 sm:px-4 rounded-md sm:rounded-xl border-2 transition-all duration-[38ms] ${
                  isSelected
                    ? isCorrect
                      ? 'bg-green-500/20 border-green-500 shadow-sm shadow-green-500/30'
                      : 'bg-red-500/20 border-red-500 shadow-sm shadow-red-500/30'
                    : showCorrectHighlight
                    ? 'bg-green-500/20 border-green-500'
                    : 'paper-card border-wave-deep/30 hover:border-vermilion active:scale-95'
                }`}
              >
                <span className="text-[11px] sm:text-sm font-noto break-words text-sumi">
                  <FuriganaText text={option} />
                </span>
              </motion.button>
            )
          })}
        </div>

        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.06, ease: 'easeOut' }}
            className="space-y-2 sm:space-y-3"
          >
            {/* 快速結果徽章 */}
            <div className={`flex items-center gap-2 p-2 rounded-lg ${
              isCorrect
                ? 'bg-green-50 border border-green-200'
                : 'bg-red-50 border border-red-200'
            }`}>
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 300, delay: 0.025 }}
              >
                {isCorrect
                  ? <Check size={18} className="text-green-600" />
                  : <X size={18} className="text-red-600" />
                }
              </motion.div>
              <span className={`font-bold text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                {isCorrect ? t('practice.correct') : t('practice.incorrect')}
              </span>
              {!isCorrect && question.correct && (
                <span className="text-sm text-green-700 ml-auto font-medium">
                  正解: <FuriganaText text={question.correct} />
                </span>
              )}
            </div>

            {/* 詳細解析 */}
            {question.detailedExplanation ? (
              <ExplanationPanel
                explanation={question.detailedExplanation}
                meaning={question.meaning}
                correct={question.correct}
                selectedAnswer={selectedAnswer}
                defaultOpen={true}
              />
            ) : (
              /* 舊格式 fallback */
              (showExplanation || !isCorrect) && question.explanation && (
                <p className="text-sm sm:text-base text-gray-800">
                  <FuriganaText text={question.explanation} />
                </p>
              )
            )}

            {/* Next 按鈕 */}
            <motion.button
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.05 }}
              onClick={() => onAnswer(selectedAnswer!)}
              className="w-full btn-primary py-2 sm:py-3 flex items-center justify-center gap-1.5 text-sm sm:text-base font-bold"
            >
              {t('practice.nextQuestion')}
              <ChevronRight size={16} className="sm:w-5 sm:h-5" />
            </motion.button>
          </motion.div>
        )}

        {question.source && (
          <div className="text-center text-sm text-white/50">
            來源：{question.source}
          </div>
        )}
      </div>
    </div>
  )
}

export default QuestionCard
