import { AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import QuestionCard from './QuestionCard'
import MatchingQuestionCard from './MatchingQuestionCard'
import QuestionTimer from './QuestionTimer'
import { Question } from '../types'
import { AnswerRecord } from '../store/usePracticeStore'

interface PracticeSessionProps {
  category: string
  questions: Question[]
  currentQuestion: Question | null
  currentIndex: number
  score: number
  answerRecords: AnswerRecord[]
  showResults: boolean
  onAnswer: (answer: string) => void
  onEnd: () => void
  onSubmit: () => void
}

const PracticeSession = ({
  category,
  questions,
  currentQuestion,
  currentIndex,
  score,
  answerRecords,
  showResults,
  onAnswer,
  onEnd,
  onSubmit,
}: PracticeSessionProps) => {
  const { t } = useTranslation()

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
                onClick={onEnd}
                className="px-2 py-1 text-[10px] sm:text-xs rounded-md border border-wave-deep/30 hover:border-vermilion transition-all text-sumi-faded hover:text-sumi"
              >
                結束
              </button>
              <button
                onClick={onSubmit}
                className="px-2 py-1 text-[10px] sm:text-xs rounded-md bg-vermilion/20 hover:bg-vermilion/40 border border-vermilion/50 transition-all text-vermilion"
              >
                交卷
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <QuestionTimer isRunning={!showResults} />
            <div className="text-[10px] sm:text-xs text-sumi-faded whitespace-nowrap">
              <span className="text-green-600 font-bold">{score}</span>
              <span className="mx-0.5">/</span>
              <span>{currentIndex + 1}</span>
              <span className="text-sumi-faded/60 ml-1">({questions.length})</span>
            </div>
          </div>
        </div>

        {/* Segmented progress bar */}
        <div className="flex gap-0.5 h-1.5">
          {questions.map((q, i) => {
            const record = answerRecords.find(r => r.questionId === q.id)
            return (
              <div
                key={i}
                className={`flex-1 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'bg-vermilion'
                    : record
                      ? record.isCorrect
                        ? 'bg-green-500'
                        : 'bg-red-400'
                      : i < currentIndex
                        ? 'bg-wave-deep/30'
                        : 'bg-wave-deep/10'
                }`}
              />
            )
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {currentQuestion && (
          currentQuestion.type === 'matching' ? (
            <MatchingQuestionCard
              key={currentQuestion.id}
              question={currentQuestion}
              onAnswer={onAnswer}
            />
          ) : (
            <QuestionCard
              key={currentQuestion.id}
              question={currentQuestion}
              onAnswer={onAnswer}
            />
          )
        )}
      </AnimatePresence>
    </div>
  )
}

export default PracticeSession
