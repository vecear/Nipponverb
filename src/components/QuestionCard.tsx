import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Question } from '../types'

interface QuestionCardProps {
  question: Question
  onAnswer: (answer: string) => void
  showExplanation?: boolean
}

const QuestionCard = ({ question, onAnswer, showExplanation = false }: QuestionCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer) return

    setSelectedAnswer(answer)
    const correct = answer === question.correct
    setIsCorrect(correct)
    setShowFeedback(true)

    setTimeout(() => {
      onAnswer(answer)
    }, 800)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="card max-w-3xl mx-auto"
    >
      <div className="space-y-6">
        <div className="text-center">
          <span className="inline-block px-3 py-1 bg-sakura-pink/20 text-sakura-pink rounded-full text-sm font-semibold mb-4">
            {question.level}
          </span>
          <h2 className="text-2xl md:text-3xl font-zen font-bold mb-2">
            {question.stem}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: selectedAnswer ? 1 : 1.05 }}
              whileTap={{ scale: selectedAnswer ? 1 : 0.95 }}
              onClick={() => handleAnswerClick(option)}
              disabled={!!selectedAnswer}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${selectedAnswer === option
                  ? isCorrect
                    ? 'bg-green-500/20 border-green-500 shadow-lg shadow-green-500/50'
                    : 'bg-red-500/20 border-red-500 shadow-lg shadow-red-500/50'
                  : selectedAnswer && option === question.correct
                    ? 'bg-green-500/20 border-green-500'
                    : 'glass-hover border-white/20'
                }`}
            >
              <span className="text-lg font-noto">{option}</span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`p-6 rounded-xl ${isCorrect
                  ? 'bg-green-500/20 border-2 border-green-500'
                  : 'bg-red-500/20 border-2 border-red-500'
                }`}
            >
              <h3 className="text-xl font-bold mb-2">
                {isCorrect ? '正解！' : '不正解'}
              </h3>
              {(showExplanation || !isCorrect) && (
                <p className="text-white/80">{question.explanation}</p>
              )}
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
