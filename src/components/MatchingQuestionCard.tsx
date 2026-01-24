import { useState, useEffect } from 'react'
import { Check } from 'lucide-react'
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
        }
    }, [question])

    // Check match
    useEffect(() => {
        if (selectedLeft !== null && selectedRight !== null) {
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

                // Check win condition
                if (newSolvedLeft.size === pairs.left.length) {
                    setTimeout(() => {
                        onAnswer('MATCHING_COMPLETED')
                    }, 500)
                }
            } else {
                // No match
                setIsError(true)
                setTimeout(() => {
                    setIsError(false)
                    setSelectedLeft(null)
                    setSelectedRight(null)
                }, 500)
            }
        }
    }, [selectedLeft, selectedRight, pairs, solvedLeft, solvedRight, onAnswer])

    const handleLeftClick = (index: number) => {
        if (solvedLeft.has(index)) return
        setSelectedLeft(index)
    }

    const handleRightClick = (index: number) => {
        if (solvedRight.has(index)) return
        setSelectedRight(index)
    }

    return (
        <div className="card max-w-4xl mx-auto">
            <div className="space-y-6">
                <div className="text-center">
                    <span className="inline-block px-2 py-0.5 bg-sakura-pink/20 text-sakura-pink rounded-full text-[10px] md:text-xs font-semibold mb-1 md:mb-2">
                        マッチング
                    </span>
                    <h2 className="text-lg md:text-2xl font-zen font-bold mb-2">
                        {question.instruction || "Match the pairs"}
                    </h2>
                </div>

                <div className="grid grid-cols-2 gap-8 md:gap-16">
                    {/* Left Column (Char) */}
                    <div className="space-y-3">
                        {pairs.left.map((item, idx) => {
                            const isSolved = solvedLeft.has(idx)
                            const isSelected = selectedLeft === idx
                            return (
                                <button
                                    key={`left-${idx}`}
                                    onClick={() => handleLeftClick(idx)}
                                    disabled={isSolved || isError}
                                    className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-center font-zen text-xl md:text-2xl
                                ${isSolved
                                            ? 'bg-green-500/10 border-green-500/30 text-green-400 opacity-50 scale-95'
                                            : isSelected
                                                ? isError
                                                    ? 'bg-red-500/20 border-red-500 animate-shake'
                                                    : 'bg-electric-cyan/20 border-electric-cyan scale-105'
                                                : 'glass-hover border-white/10'
                                        }
                            `}
                                >
                                    {isSolved ? <Check className="mx-auto" /> : item.char}
                                </button>
                            )
                        })}
                    </div>

                    {/* Right Column (Romaji) */}
                    <div className="space-y-3">
                        {pairs.right.map((item, idx) => {
                            const isSolved = solvedRight.has(idx)
                            const isSelected = selectedRight === idx
                            return (
                                <button
                                    key={`right-${idx}`}
                                    onClick={() => handleRightClick(idx)}
                                    disabled={isSolved || isError}
                                    className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-center font-noto text-lg
                                ${isSolved
                                            ? 'bg-green-500/10 border-green-500/30 text-green-400 opacity-50 scale-95'
                                            : isSelected
                                                ? isError
                                                    ? 'bg-red-500/20 border-red-500 animate-shake'
                                                    : 'bg-electric-cyan/20 border-electric-cyan scale-105'
                                                : 'glass-hover border-white/10'
                                        }
                            `}
                                >
                                    {isSolved ? <Check className="mx-auto" /> : item.romaji}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MatchingQuestionCard
