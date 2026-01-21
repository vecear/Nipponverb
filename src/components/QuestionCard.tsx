import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ChevronRight } from 'lucide-react'
import { Question } from '../types'

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
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.1 }}
      className="card max-w-2xl mx-auto"
    >
      <div className="space-y-3 md:space-y-4">
        <div className="text-center">
          <span className="inline-block px-2 py-0.5 bg-sakura-pink/20 text-sakura-pink rounded-full text-[10px] md:text-xs font-semibold mb-1 md:mb-2">
            {question.level}
          </span>
          <h2 className="text-lg md:text-2xl font-zen font-bold mb-1 break-words text-balance">
            {question.stem}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: selectedAnswer ? 1 : 1.02 }}
              whileTap={{ scale: selectedAnswer ? 1 : 0.98 }}
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
              <span className="text-sm md:text-base font-noto break-words">{option}</span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.07 }}
              className="space-y-4"
            >
              <div className={`p-3 md:p-4 rounded-xl ${isCorrect
                ? 'bg-green-500/20 border-2 border-green-500'
                : 'bg-red-500/20 border-2 border-red-500'
                }`}>
                <h3 className="text-base md:text-lg font-bold mb-1">
                  {isCorrect ? t('practice.correct') : t('practice.incorrect')}
                </h3>
                {(showExplanation || !isCorrect) && (
                  <p className="text-xs md:text-sm text-white/80">{question.explanation}</p>
                )}
              </div>

              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onAnswer(selectedAnswer!)}
                className="w-full btn-primary py-3 flex items-center justify-center gap-2 text-base font-bold"
              >
                {t('practice.nextQuestion')}
                <ChevronRight size={18} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {question.source && (
          <div className="text-center text-sm text-white/50">
            Source: {question.source}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default QuestionCard
