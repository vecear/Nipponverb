import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, Lightbulb, HelpCircle, Check, X, RotateCcw } from 'lucide-react'
import { grammarDetails } from '../data/grammarDetails'
import { grammarList } from '../data/grammarList'
import { useState, useEffect, useCallback, useMemo } from 'react'
import type { QuizExplanation } from '../types/grammar'
import { useNav, createGrammarNavItems } from '../contexts/NavContext'
import { useGrammarCompletionStore } from '../store/useGrammarCompletionStore'
import { useAuth } from '../contexts/AuthContext'
import { useUserStore } from '../store/useUserStore'
import { addExp, updateUserProgression } from '../services/progressionService'
import { DEFAULT_PROGRESSION, EXP_REWARDS } from '../types/progression'
import { getGameConfig } from '../services/adminService'
import GrammarPassModal from '../components/GrammarPassModal'

const GrammarDetail = () => {
    const { id } = useParams<{ id: string }>()
    const detail = id ? grammarDetails[id] : undefined
    const listItem = useMemo(() => grammarList.find(item => item.id === id), [id])
    const { setCustomNavItems, setActiveSection } = useNav()

    // Auth and user state
    const { currentUser } = useAuth()
    const { profile, setProfile } = useUserStore()

    // Grammar completion store
    const { markCompleted, isCompleted, getCompletionRecord, syncToFirebase } = useGrammarCompletionStore()

    // Check if this grammar is already completed
    const wasAlreadyCompleted = id ? isCompleted(id) : false
    const completionRecord = id ? getCompletionRecord(id) : null

    // Modal state
    const [showPassModal, setShowPassModal] = useState(false)
    const [expReward, setExpReward] = useState<number>(EXP_REWARDS.GRAMMAR_LESSON_COMPLETE)

    // Load exp reward from config
    useEffect(() => {
        const loadConfig = async () => {
            try {
                const config = await getGameConfig()
                if (config.expRewards.grammarLessonComplete) {
                    setExpReward(config.expRewards.grammarLessonComplete)
                }
            } catch {
                // Use default
            }
        }
        loadConfig()
    }, [])

    const scrollToSection = useCallback((sectionId: string) => {
        const el = document.getElementById(sectionId)
        if (el) {
            const offset = 80 // Account for sticky nav
            const top = el.getBoundingClientRect().top + window.scrollY - offset
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }, [])

    // Scroll to top when entering the page
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    // Set custom nav items when component mounts
    useEffect(() => {
        if (detail) {
            const navItems = createGrammarNavItems(
                !!detail.analysis,
                !!(detail.quiz && detail.quiz.length > 0),
                scrollToSection
            )
            setCustomNavItems(navItems)
        }

        // Clear custom nav items when unmounting
        return () => {
            setCustomNavItems(null)
        }
    }, [detail, scrollToSection, setCustomNavItems])

    // Scroll spy to update active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['usage', 'analysis', 'quiz']
            for (const section of sections.reverse()) {
                const el = document.getElementById(section)
                if (el) {
                    const rect = el.getBoundingClientRect()
                    if (rect.top <= 150) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [setActiveSection])

    // Quiz state - initialize from completion record if already completed
    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>(() => {
        if (wasAlreadyCompleted && completionRecord) {
            return completionRecord.answers
        }
        return {}
    })
    const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>(() => {
        if (wasAlreadyCompleted && completionRecord && detail?.quiz) {
            // If already completed, show all explanations
            const explanations: Record<string, boolean> = {}
            detail.quiz.forEach(q => {
                explanations[q.id] = true
            })
            return explanations
        }
        return {}
    })

    // Track if we've already given XP for this session (to prevent double-awarding)
    const [hasAwardedExp, setHasAwardedExp] = useState(wasAlreadyCompleted)

    // Check if all questions are answered correctly
    const quizCompleted = useMemo(() => {
        if (!detail?.quiz || detail.quiz.length === 0) return false

        // Check if all questions are answered
        const allAnswered = detail.quiz.every(q => selectedAnswers[q.id] !== undefined)
        if (!allAnswered) return false

        // Check if all answers are correct
        return detail.quiz.every(q => selectedAnswers[q.id] === q.correctIndex)
    }, [detail?.quiz, selectedAnswers])

    // Check if any question is wrong (for showing retry button)
    const hasWrongAnswer = useMemo(() => {
        if (!detail?.quiz) return false
        return detail.quiz.some(q =>
            selectedAnswers[q.id] !== undefined && selectedAnswers[q.id] !== q.correctIndex
        )
    }, [detail?.quiz, selectedAnswers])

    // Handle quiz completion
    useEffect(() => {
        const handleCompletion = async () => {
            if (!quizCompleted || hasAwardedExp || !id || !detail) return

            // Mark as completed in store
            markCompleted(id, selectedAnswers)

            // Award XP if user is logged in
            if (currentUser && profile) {
                const progression = profile.progression || DEFAULT_PROGRESSION
                const gender = profile.gender || 'male'

                const { newProgression } = addExp(progression, expReward, gender)
                await updateUserProgression(currentUser.uid, newProgression)

                // Update local profile state
                setProfile({
                    ...profile,
                    progression: newProgression,
                })

                // Sync completion to Firebase
                await syncToFirebase(currentUser.uid)
            }

            setHasAwardedExp(true)
            setShowPassModal(true)
        }

        handleCompletion()
    }, [quizCompleted, hasAwardedExp, id, detail, selectedAnswers, markCompleted, currentUser, profile, expReward, setProfile, syncToFirebase])

    const handleAnswer = (quizId: string, index: number) => {
        if (selectedAnswers[quizId] !== undefined) return // Already answered
        setSelectedAnswers(prev => ({ ...prev, [quizId]: index }))
        setShowExplanation(prev => ({ ...prev, [quizId]: true }))
    }

    const handleRetry = () => {
        // Reset all answers and explanations
        setSelectedAnswers({})
        setShowExplanation({})
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
                rt { font-size: 0.6em; color: rgba(49, 46, 129, 0.9); }
            `
            document.head.appendChild(style)
        }
    }, [])

    const renderFurigana = (text: string) => {
        // Parser for "漢字{かんじ}" format
        // Only matches CJK characters (kanji) followed by {reading}
        // CJK Unified Ideographs: \u4e00-\u9fff, Extension A: \u3400-\u4dbf
        const regex = /([\u4e00-\u9fff\u3400-\u4dbf]+)\{([^{}]+)\}/g
        const parts: (string | JSX.Element)[] = []
        let lastIndex = 0
        let match

        while ((match = regex.exec(text)) !== null) {
            // Add text before the match
            if (match.index > lastIndex) {
                parts.push(text.substring(lastIndex, match.index))
            }
            // Add the ruby element
            parts.push(
                <ruby key={match.index}>
                    {match[1]}<rt>{match[2]}</rt>
                </ruby>
            )
            lastIndex = regex.lastIndex
        }

        // Add remaining text
        if (lastIndex < text.length) {
            parts.push(text.substring(lastIndex))
        }

        return <span>{parts}</span>
    }

    if (!detail) {
        return (
            <div className="min-h-screen py-8 px-4 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-indigo-900 mb-4">
                        {listItem ? `「${listItem.grammar}」的詳細教學準備中` : '找不到此文法項目'}
                    </h2>
                    <p className="text-indigo-900/90 mb-8">我們正在努力製作更多內容，請稍後再試。</p>
                    <Link to="/grammar" className="px-6 py-2 bg-indigo-900/10 hover:bg-indigo-900/20 rounded-lg text-indigo-900 transition-all">
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
                    <Link to="/grammar" className="inline-flex items-center text-indigo-900/90 hover:text-indigo-700 mb-6 transition-colors md:hidden">
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
                        <h1 className="text-4xl font-bold text-indigo-900">{detail.pattern}</h1>
                        {/* Show completion badge if already completed */}
                        {wasAlreadyCompleted && (
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-500 rounded text-sm font-medium">
                                <Check size={14} />
                                已完成
                            </span>
                        )}
                    </div>
                    <p className="text-xl text-indigo-900/80">{detail.translation}</p>
                </header>

                {/* Connection */}
                <section className="bg-indigo-900/5 border border-indigo-900/10 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-sakura-pink mb-2 flex items-center">
                        <BookOpen size={20} className="mr-2" /> 接續
                    </h3>
                    <p className="text-indigo-900/90 font-mono bg-indigo-900/10 p-3 rounded-lg inline-block">
                        {detail.connection}
                    </p>
                </section>

                {/* Explanation & Usages */}
                <section id="usage" className="space-y-6 scroll-mt-24">
                    <h3 className="text-2xl font-bold text-indigo-900 mb-4">用法解析</h3>
                    {detail.explanation.map((usage) => (
                        <div key={usage.usageId} className="bg-indigo-900/5 border border-indigo-900/10 rounded-2xl p-6">
                            {usage.title && (
                                <h4 className="text-lg font-bold text-indigo-900 mb-2">{usage.title}</h4>
                            )}
                            <p className="text-indigo-900/80 mb-6 leading-relaxed">
                                {usage.description}
                            </p>

                            <div className="space-y-4">
                                {usage.examples.map((ex, i) => (
                                    <div key={i} className="bg-indigo-900/10 rounded-xl p-4">
                                        <div className="text-lg text-indigo-900 mb-1 font-zen">
                                            {renderFurigana(ex.japanese)}
                                        </div>
                                        <div className="text-indigo-900/90 text-sm">
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
                    <section id="analysis" className="bg-indigo-900/5 border border-indigo-900/10 rounded-2xl p-6 scroll-mt-24">
                        <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center">
                            <Lightbulb size={24} className="mr-2 text-gold" />
                            {detail.analysis.title}
                        </h3>
                        {detail.analysis.description && (
                            <p className="text-indigo-900/80 mb-4">{detail.analysis.description}</p>
                        )}

                        {detail.analysis.points && (
                            <ul className="space-y-4">
                                {detail.analysis.points.map((point, i) => (
                                    <li key={i} className="flex gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-900/40 mt-2.5 flex-shrink-0" />
                                        <div className="space-y-2 flex-1">
                                            <p className="text-indigo-900/90">{point.rule}</p>
                                            {point.examples && point.examples.map((ex, j) => (
                                                <div key={j} className="bg-indigo-900/10 rounded-lg p-3 text-sm">
                                                    <div className="text-indigo-900 mb-1">{renderFurigana(ex.japanese)}</div>
                                                    <div className="text-indigo-900/80">{ex.chinese}</div>
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
                    <section id="quiz" className="space-y-4 pt-8 scroll-mt-24">
                        <h3 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center">
                            <HelpCircle size={24} className="mr-2" />
                            隨堂測驗
                            {wasAlreadyCompleted && (
                                <span className="ml-3 text-sm font-normal text-green-500">
                                    (已通過)
                                </span>
                            )}
                        </h3>
                        {detail.quiz.map((q) => {
                            const isAnswered = selectedAnswers[q.id] !== undefined
                            const isCorrect = selectedAnswers[q.id] === q.correctIndex

                            return (
                                <div key={q.id} className="bg-indigo-900/5 border border-indigo-900/10 rounded-2xl p-6">
                                    <p className="text-lg text-indigo-900 mb-6 font-zen whitespace-pre-wrap">
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
                                                    btnClass += "bg-indigo-900/5 border-indigo-900/10 text-indigo-900/60"
                                                }
                                            } else {
                                                btnClass += "bg-indigo-900/5 border-indigo-900/10 text-indigo-900 hover:bg-indigo-900/10 hover:border-indigo-900/30 cursor-pointer"
                                            }

                                            return (
                                                <button
                                                    key={i}
                                                    onClick={() => handleAnswer(q.id, i)}
                                                    disabled={isAnswered}
                                                    className={btnClass}
                                                >
                                                    {renderFurigana(opt)}
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
                                                <p className="text-indigo-900/80 text-sm">
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

                {/* Back to List and Retry Buttons - Desktop only */}
                <div className="pt-8 pb-4 hidden md:flex justify-center gap-4">
                    <Link
                        to="/grammar"
                        className="inline-flex items-center px-6 py-3 bg-indigo-900/10 hover:bg-indigo-900/20 rounded-xl text-indigo-900 font-medium transition-all"
                    >
                        <ArrowLeft size={20} className="mr-2" />
                        返回列表
                    </Link>
                    {/* Show retry button if there are wrong answers and quiz exists */}
                    {detail.quiz && detail.quiz.length > 0 && hasWrongAnswer && !wasAlreadyCompleted && (
                        <button
                            onClick={handleRetry}
                            className="inline-flex items-center px-6 py-3 bg-indigo-900/10 hover:bg-indigo-900/20 rounded-xl text-indigo-900 font-medium transition-all"
                        >
                            <RotateCcw size={20} className="mr-2" />
                            重新答題
                        </button>
                    )}
                </div>
            </div>

            {/* Pass Modal */}
            <GrammarPassModal
                isOpen={showPassModal}
                onClose={() => setShowPassModal(false)}
                expGained={expReward}
                grammarPattern={detail.pattern}
            />
        </div>
    )
}

export default GrammarDetail
