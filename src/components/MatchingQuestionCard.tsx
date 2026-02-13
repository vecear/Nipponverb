import { useState, useEffect } from 'react'
import { Check, X, ChevronRight } from 'lucide-react'
import { Question, MatchingPair } from '../types'

interface MatchingQuestionCardProps {
    question: Question
    onAnswer: (answer: string) => void
}

const MatchingQuestionCard = ({ question, onAnswer }: MatchingQuestionCardProps) => {
    const [pairs, setPairs] = useState<{ left: MatchingPair[], right: MatchingPair[] }>({ left: [], right: [] })

    // Selection state
    const [selectedLeft, setSelectedLeft] = useState<number | null>(null) // index
    const [selectedRight, setSelectedRight] = useState<number | null>(null) // index

    // Solved state (indices)
    const [solvedLeft, setSolvedLeft] = useState<Set<number>>(new Set())
    const [solvedRight, setSolvedRight] = useState<Set<number>>(new Set())

    const [isError, setIsError] = useState(false)
    const [isFinished, setIsFinished] = useState(false) // Whether the question is complete (success or fail)
    const [wasSuccessful, setWasSuccessful] = useState(false) // Whether completed without errors

    // Initialize and shuffle
    useEffect(() => {
        if (question.pairs) {
            const leftSide = [...question.pairs].map((p, originalIdx) => ({ ...p, originalIdx }))
            const rightSide = [...question.pairs].map((p, originalIdx) => ({ ...p, originalIdx }))

            // Shuffle independently
            leftSide.sort(() => Math.random() - 0.5)
            rightSide.sort(() => Math.random() - 0.5)

            setPairs({ left: leftSide, right: rightSide })
            setSolvedLeft(new Set())
            setSolvedRight(new Set())
            setSelectedLeft(null)
            setSelectedRight(null)
            setIsFinished(false)
            setWasSuccessful(false)
            setIsError(false)
        }
    }, [question])

    // Check match
    useEffect(() => {
        if (selectedLeft !== null && selectedRight !== null && !isFinished) {
            const leftItem = pairs.left[selectedLeft]
            const rightItem = pairs.right[selectedRight]

            // Using char as unique identifier (assuming unique chars in set)
            if (leftItem.char === rightItem.char) {
                // Match!
                const newSolvedLeft = new Set(solvedLeft).add(selectedLeft)
                const newSolvedRight = new Set(solvedRight).add(selectedRight)
                setSolvedLeft(newSolvedLeft)
                setSolvedRight(newSolvedRight)
                setSelectedLeft(null)
                setSelectedRight(null)

                // Check win condition - all matched
                if (newSolvedLeft.size === pairs.left.length) {
                    setIsFinished(true)
                    setWasSuccessful(true)
                }
            } else {
                // No match - immediately fail the question
                setIsError(true)
                setTimeout(() => {
                    setIsError(false)
                    setIsFinished(true)
                    setWasSuccessful(false)
                }, 125)
            }
        }
    }, [selectedLeft, selectedRight, pairs, solvedLeft, solvedRight, isFinished])

    const handleLeftClick = (index: number) => {
        if (solvedLeft.has(index) || isFinished) return
        setSelectedLeft(index)
    }

    const handleRightClick = (index: number) => {
        if (solvedRight.has(index) || isFinished) return
        setSelectedRight(index)
    }

    const handleNextQuestion = () => {
        onAnswer(wasSuccessful ? 'MATCHING_COMPLETED' : 'MATCHING_WRONG')
    }

    return (
        <div className="card max-w-md sm:max-w-2xl mx-auto px-3 py-3 sm:px-6 sm:py-6">
            <div className="space-y-2 sm:space-y-4">
                <div className="text-center">
                    <span className="inline-block px-1.5 py-0.5 sm:px-2 bg-vermilion/20 text-vermilion rounded-full text-[9px] sm:text-xs font-semibold mb-0.5 sm:mb-2">
                        マッチング
                    </span>
                    <h2 className="text-sm sm:text-xl font-zen font-bold text-sumi">
                        {question.instruction || "Match the pairs"}
                    </h2>
                </div>

                <div className="grid grid-cols-2 gap-1.5 sm:gap-3">
                    {/* Left Column (Char) */}
                    <div className="space-y-1.5 sm:space-y-3">
                        {pairs.left.map((item, idx) => {
                            const isSolved = solvedLeft.has(idx)
                            const isSelected = selectedLeft === idx
                            return (
                                <button
                                    key={`left-${idx}`}
                                    onClick={() => handleLeftClick(idx)}
                                    disabled={isSolved || isError || isFinished}
                                    className={`w-full py-1.5 px-2 sm:py-3 sm:px-4 rounded-md sm:rounded-xl border-2 transition-all duration-[50ms] text-center
                                ${isSolved
                                            ? 'bg-green-500/10 border-green-500/30 text-green-600 opacity-50 scale-95'
                                            : isSelected
                                                ? isError
                                                    ? 'bg-red-500/20 border-red-500 animate-shake'
                                                    : 'bg-wave-deep/20 border-wave-deep scale-[1.02] sm:scale-105'
                                                : isFinished
                                                    ? 'paper-card border-wave-deep/30 opacity-50'
                                                    : 'paper-card border-wave-deep/30 hover:border-vermilion active:scale-95'
                                        }
                            `}
                                >
                                    {isSolved ? <Check className="mx-auto" size={16} /> : <span className="text-[11px] sm:text-sm font-zen text-sumi">{item.char}</span>}
                                </button>
                            )
                        })}
                    </div>

                    {/* Right Column (Romaji) */}
                    <div className="space-y-1.5 sm:space-y-3">
                        {pairs.right.map((item, idx) => {
                            const isSolved = solvedRight.has(idx)
                            const isSelected = selectedRight === idx
                            return (
                                <button
                                    key={`right-${idx}`}
                                    onClick={() => handleRightClick(idx)}
                                    disabled={isSolved || isError || isFinished}
                                    className={`w-full py-1.5 px-2 sm:py-3 sm:px-4 rounded-md sm:rounded-xl border-2 transition-all duration-[50ms] text-center
                                ${isSolved
                                            ? 'bg-green-500/10 border-green-500/30 text-green-600 opacity-50 scale-95'
                                            : isSelected
                                                ? isError
                                                    ? 'bg-red-500/20 border-red-500 animate-shake'
                                                    : 'bg-wave-deep/20 border-wave-deep scale-[1.02] sm:scale-105'
                                                : isFinished
                                                    ? 'paper-card border-wave-deep/30 opacity-50'
                                                    : 'paper-card border-wave-deep/30 hover:border-vermilion active:scale-95'
                                        }
                            `}
                                >
                                    {isSolved ? <Check className="mx-auto" size={16} /> : <span className="text-[11px] sm:text-sm font-noto text-sumi">{item.romaji}</span>}
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Result feedback and Next button */}
                {isFinished && (
                    <div className="space-y-2 sm:space-y-3">
                        <div className={`p-2 sm:p-3 rounded-lg text-center ${wasSuccessful
                            ? 'bg-green-500/20 border-2 border-green-500'
                            : 'bg-red-500/20 border-2 border-red-500'
                            }`}>
                            <div className="flex items-center justify-center gap-2">
                                {wasSuccessful ? (
                                    <Check className="text-green-500" size={20} />
                                ) : (
                                    <X className="text-red-500" size={20} />
                                )}
                                <span className="text-sm sm:text-base font-bold">
                                    {wasSuccessful ? '正解！' : '不正解'}
                                </span>
                            </div>
                            {!wasSuccessful && (
                                <p className="text-xs sm:text-sm text-sumi-faded mt-1">
                                    配對錯誤，請繼續下一題
                                </p>
                            )}
                        </div>

                        <button
                            onClick={handleNextQuestion}
                            className="w-full btn-primary py-2 sm:py-3 flex items-center justify-center gap-1.5 text-sm sm:text-base font-bold"
                        >
                            下一題
                            <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MatchingQuestionCard
