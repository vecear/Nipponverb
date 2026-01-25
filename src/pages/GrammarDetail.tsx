import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, Lightbulb, HelpCircle, Check, X } from 'lucide-react'
import { grammarDetails } from '../data/grammarDetails'
import { grammarList } from '../data/grammarList'
import { useState, useEffect } from 'react'
import { useMemo } from 'react'
import type { QuizExplanation } from '../types/grammar'

const GrammarDetail = () => {
    const { id } = useParams<{ id: string }>()
    const detail = id ? grammarDetails[id] : undefined
    const listItem = useMemo(() => grammarList.find(item => item.id === id), [id])

    // Quiz state
    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({})
    const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({})

    const handleAnswer = (quizId: string, index: number) => {
        if (selectedAnswers[quizId] !== undefined) return // Already answered
        setSelectedAnswers(prev => ({ ...prev, [quizId]: index }))
        setShowExplanation(prev => ({ ...prev, [quizId]: true }))
    }

    // Helper to check if explanation is object format
    const isQuizExplanationObject = (exp: string | QuizExplanation | undefined): exp is QuizExplanation => {
        return typeof exp === 'object' && exp !== null && 'correct' in exp
    }

    // Helper to render explanation based on format
    const renderExplanation = (explanation: string | QuizExplanation | undefined, isCorrect: boolean, selectedIndex: number) => {
        if (!explanation) return null

        if (isQuizExplanationObject(explanation)) {
            // Object format: { correct: string, wrong: string[] }
            if (isCorrect) {
                return explanation.correct
            } else {
                // Show the wrong explanation for the selected option
                return explanation.wrong[selectedIndex] || explanation.correct
            }
        }

        // String format (legacy)
        return explanation
    }

    useEffect(() => {
        if (!document.getElementById('ruby-style')) {
            const style = document.createElement('style')
            style.id = 'ruby-style'
            style.innerHTML = `
                ruby { font-family: inherit; }
                rt { font-size: 0.6em; color: rgba(255, 255, 255, 0.9); }
            `
            document.head.appendChild(style)
        }
    }, [])

    const renderFurigana = (text: string) => {
        // Simple parser for "漢字{かんじ}" format
        const parts = text.split(/([^\u0000-\u007F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF]+{[^}]+})/)
        return (
            <span>
                {parts.map((part, i) => {
                    const match = part.match(/^(.+){(.+)}$/)
                    if (match) {
                        return <ruby key={i}>{match[1]}<rt>{match[2]}</rt></ruby>
                    }
                    return part
                })}
            </span>
        )
    }

    if (!detail) {
        return (
            <div className="min-h-screen py-8 px-4 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        {listItem ? `「${listItem.grammar}」的詳細教學準備中` : '找不到此文法項目'}
                    </h2>
                    <p className="text-white/90 mb-8">我們正在努力製作更多內容，請稍後再試。</p>
                    <Link to="/grammar" className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all">
                        返回列表
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen py-8 px-4 pb-24">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <header>
                    <Link to="/grammar" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
                        <ArrowLeft size={20} className="mr-2" />
                        返回列表
                    </Link>

                    <div className="flex items-center gap-4 mb-2">
                        <span className={`px-3 py-1 rounded text-sm font-bold ${detail.level === 'N5' ? 'bg-blue-500/20 text-blue-400' :
                            detail.level === 'N4' ? 'bg-green-500/20 text-green-400' :
                                detail.level === 'N3' ? 'bg-yellow-500/20 text-yellow-400' :
                                    detail.level === 'N2' ? 'bg-orange-500/20 text-orange-400' :
                                        'bg-red-500/20 text-red-400'
                            }`}>
                            {detail.level}
                        </span>
                        <h1 className="text-4xl font-bold text-white">{detail.pattern}</h1>
                    </div>
                    <p className="text-xl text-white/80">{detail.translation}</p>
                </header>

                {/* Connection */}
                <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-sakura-pink mb-2 flex items-center">
                        <BookOpen size={20} className="mr-2" /> 接續
                    </h3>
                    <p className="text-white/90 font-mono bg-black/20 p-3 rounded-lg inline-block">
                        {detail.connection}
                    </p>
                </section>

                {/* Explanation & Usages */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-4">用法解析</h3>
                    {detail.explanation.map((usage) => (
                        <div key={usage.usageId} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            {usage.title && (
                                <h4 className="text-lg font-bold text-white mb-2">{usage.title}</h4>
                            )}
                            <p className="text-white/80 mb-6 leading-relaxed">
                                {usage.description}
                            </p>

                            <div className="space-y-4">
                                {usage.examples.map((ex, i) => (
                                    <div key={i} className="bg-black/20 rounded-xl p-4">
                                        <div className="text-lg text-white mb-1 font-zen">
                                            {renderFurigana(ex.japanese)}
                                        </div>
                                        <div className="text-white/90 text-sm">
                                            {ex.chinese}
                                        </div>
                                        {ex.grammarRef && (
                                            <div className="text-xs text-sakura-pink mt-2 text-right">
                                                參照: {ex.grammarRef}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>

                {/* Analysis/Comparison */}
                {detail.analysis && (
                    <section className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-indigo-300 mb-4 flex items-center">
                            <Lightbulb size={24} className="mr-2" />
                            {detail.analysis.title}
                        </h3>
                        {detail.analysis.description && (
                            <p className="text-white/80 mb-4">{detail.analysis.description}</p>
                        )}

                        {detail.analysis.points && (
                            <ul className="space-y-4">
                                {detail.analysis.points.map((point, i) => (
                                    <li key={i} className="flex gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2.5 flex-shrink-0" />
                                        <div className="space-y-2 flex-1">
                                            <p className="text-white/90">{point.rule}</p>
                                            {point.examples && point.examples.map((ex, j) => (
                                                <div key={j} className="bg-black/20 rounded-lg p-3 text-sm">
                                                    <div className="text-white mb-1">{renderFurigana(ex.japanese)}</div>
                                                    <div className="text-white/80">{ex.chinese}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>
                )}

                {/* Quiz */}
                {detail.quiz && detail.quiz.length > 0 && (
                    <section className="space-y-4 pt-8">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                            <HelpCircle size={24} className="mr-2" />
                            隨堂測驗
                        </h3>
                        {detail.quiz.map((q) => {
                            const isAnswered = selectedAnswers[q.id] !== undefined
                            const isCorrect = selectedAnswers[q.id] === q.correctIndex

                            return (
                                <div key={q.id} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                    <p className="text-lg text-white mb-6 font-zen whitespace-pre-wrap">
                                        {renderFurigana(q.sentence)}
                                    </p>

                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        {q.options.map((opt, i) => {
                                            let btnClass = "p-3 rounded-xl border transition-all text-center "
                                            if (isAnswered) {
                                                if (i === q.correctIndex) {
                                                    btnClass += "bg-green-500/20 border-green-500 text-green-400"
                                                } else if (i === selectedAnswers[q.id]) {
                                                    btnClass += "bg-red-500/20 border-red-500 text-red-400"
                                                } else {
                                                    btnClass += "bg-white/5 border-white/10 text-white/60"
                                                }
                                            } else {
                                                btnClass += "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/30 cursor-pointer"
                                            }

                                            return (
                                                <button
                                                    key={i}
                                                    onClick={() => handleAnswer(q.id, i)}
                                                    disabled={isAnswered}
                                                    className={btnClass}
                                                >
                                                    {opt}
                                                </button>
                                            )
                                        })}
                                    </div>

                                    {showExplanation[q.id] && (
                                        <div className={`mt-4 p-4 rounded-xl flex gap-3 ${isCorrect ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                                            <div className="flex-shrink-0 mt-0.5">
                                                {isCorrect ? <Check size={20} className="text-green-400" /> : <X size={20} className="text-red-400" />}
                                            </div>
                                            <div>
                                                <p className={`font-bold mb-1 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                                                    {isCorrect ? '答對了！' : '答錯了'}
                                                </p>
                                                <p className="text-white/80 text-sm">
                                                    {renderExplanation(q.explanation, isCorrect, selectedAnswers[q.id])}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </section>
                )}
            </div>
        </div>
    )
}

export default GrammarDetail
