import { useState, useMemo, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Check } from 'lucide-react'
import { grammarList } from '../data/grammarList'
import { useGrammarCompletionStore } from '../store/useGrammarCompletionStore'

const STORAGE_KEY = 'grammarListState'

// Strip furigana notation from text for cleaner display
// Handles both 漢字{かな} and 漢字（かな） formats
const stripFurigana = (text: string) => {
    return text
        .replace(/\{[^}]+\}/g, '')  // Remove {furigana}
        .replace(/（[^）]+）/g, '') // Remove （furigana）
}

const GrammarList = () => {
    const navigate = useNavigate()
    const isInitialMount = useRef(true)
    const { isCompleted } = useGrammarCompletionStore()

    // Restore state from sessionStorage on mount
    const savedState = sessionStorage.getItem(STORAGE_KEY)
    const initialState = savedState ? JSON.parse(savedState) : { level: 'ALL', scrollY: 0 }

    const [selectedLevel, setSelectedLevel] = useState<'ALL' | 'N5' | 'N4' | 'N3' | 'N2' | 'N1'>(initialState.level)
    const [searchQuery, setSearchQuery] = useState('')

    // Restore scroll position after initial render
    useEffect(() => {
        if (isInitialMount.current && initialState.scrollY > 0) {
            // Use requestAnimationFrame to ensure DOM is ready
            requestAnimationFrame(() => {
                window.scrollTo(0, initialState.scrollY)
            })
            isInitialMount.current = false
        }
    }, [])

    // Save level to sessionStorage when it changes
    useEffect(() => {
        const currentState = { level: selectedLevel, scrollY: window.scrollY }
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(currentState))
    }, [selectedLevel])

    const filteredGrammar = useMemo(() => {
        return grammarList.filter(item => {
            const matchLevel = selectedLevel === 'ALL' || item.level === selectedLevel
            const matchSearch = item.grammar.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.meaning.toLowerCase().includes(searchQuery.toLowerCase())
            return matchLevel && matchSearch
        })
    }, [selectedLevel, searchQuery])

    // Count by level
    const counts = useMemo(() => {
        const c = { ALL: grammarList.length, N5: 0, N4: 0, N3: 0, N2: 0, N1: 0 }
        grammarList.forEach(g => {
            if (c[g.level] !== undefined) c[g.level]++
        })
        return c
    }, [])

    return (
        <div className="min-h-screen py-4 sm:py-8 px-2 sm:px-4 pb-24">
            <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
                <header className="mb-4 sm:mb-8">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-zen font-bold text-gradient mb-2 sm:mb-4">
                        JLPT 文法列表
                    </h1>
                    <p className="text-indigo-900/60 text-sm sm:text-lg">
                        N5 到 N1 的完整文法參考表
                    </p>
                </header>

                {/* Filters and Search */}
                <div className="flex flex-col md:flex-row gap-2 sm:gap-4 justify-between items-start md:items-center bg-white/50 p-2 sm:p-4 rounded-xl sm:rounded-2xl border border-indigo-900/10">

                    {/* Level Tabs */}
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                        {(['ALL', 'N5', 'N4', 'N3', 'N2', 'N1'] as const).map(level => (
                            <button
                                key={level}
                                onClick={() => setSelectedLevel(level)}
                                className={`px-2 py-1 sm:px-4 sm:py-2 rounded-md sm:rounded-lg font-bold transition-all text-xs sm:text-sm ${selectedLevel === level
                                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                                    : 'glass hover:bg-white/50 text-indigo-900/60 border border-indigo-900/10'
                                    }`}
                            >
                                {level} <span className="text-[10px] sm:text-xs opacity-60 ml-0.5 sm:ml-1">({counts[level]})</span>
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-64">
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-900/40 pointer-events-none" size={16} />
                        <input
                            type="text"
                            placeholder="搜尋文法..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/50 border border-indigo-900/10 rounded-xl py-2.5 pl-4 pr-10 text-indigo-900 placeholder-indigo-900/40 focus:outline-none focus:border-indigo-900/30 transition-all"
                        />
                    </div>
                </div>

                {/* Table - Card view on mobile, Table on desktop */}
                <div className="glass rounded-xl sm:rounded-2xl overflow-hidden border border-indigo-900/10">
                    {/* Mobile Card View */}
                    <div className="sm:hidden divide-y divide-indigo-900/10">
                        {filteredGrammar.length > 0 ? (
                            filteredGrammar.map((item) => {
                                const completed = isCompleted(item.id)
                                return (
                                    <div
                                        key={item.id}
                                        onClick={() => {
                                            sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
                                                level: selectedLevel,
                                                scrollY: window.scrollY
                                            }))
                                            navigate(`/grammar/${item.id}`)
                                        }}
                                        className="p-3 hover:bg-indigo-900/5 transition-colors cursor-pointer flex items-start gap-2"
                                    >
                                        <Check
                                            size={16}
                                            className={`shrink-0 mt-1 transition-colors ${completed ? 'text-green-500' : 'text-indigo-900/20'}`}
                                        />
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-bold ${item.level === 'N5' ? 'bg-blue-500/20 text-blue-400' :
                                                    item.level === 'N4' ? 'bg-green-500/20 text-green-400' :
                                                        item.level === 'N3' ? 'bg-yellow-500/20 text-yellow-400' :
                                                            item.level === 'N2' ? 'bg-orange-500/20 text-orange-400' :
                                                                'bg-red-500/20 text-red-400'
                                                    }`}>
                                                    {item.level}
                                                </span>
                                                <span className="font-bold text-sm text-indigo-900/90 truncate">{stripFurigana(item.grammar)}</span>
                                            </div>
                                            <p className="text-xs text-indigo-900/70 line-clamp-2">{item.meaning}</p>
                                        </div>
                                    </div>
                                )
                            })
                        ) : (
                            <div className="p-6 text-center text-indigo-900/40 text-sm">
                                沒有找到符合的文法項目。
                            </div>
                        )}
                    </div>

                    {/* Desktop Table View */}
                    <div className="hidden sm:block overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-indigo-900/5 text-indigo-900/60 text-sm border-b border-indigo-900/10">
                                    <th className="p-4 font-medium w-12"></th>
                                    <th className="p-4 font-medium">級別</th>
                                    <th className="p-4 font-medium">文法</th>
                                    <th className="p-4 font-medium">意義</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-indigo-900/5">
                                {filteredGrammar.length > 0 ? (
                                    filteredGrammar.map((item) => {
                                        const completed = isCompleted(item.id)
                                        return (
                                            <tr
                                                key={item.id}
                                                onClick={() => {
                                                    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
                                                        level: selectedLevel,
                                                        scrollY: window.scrollY
                                                    }))
                                                    navigate(`/grammar/${item.id}`)
                                                }}
                                                className="hover:bg-indigo-900/5 transition-colors group cursor-pointer"
                                            >
                                                <td className="p-4 text-center">
                                                    <Check
                                                        size={20}
                                                        className={`transition-colors ${completed
                                                            ? 'text-green-500'
                                                            : 'text-indigo-900/20'
                                                            }`}
                                                    />
                                                </td>
                                                <td className="p-4">
                                                    <span className={`inline-block px-2 py-1 rounded text-xs font-bold ${item.level === 'N5' ? 'bg-blue-500/20 text-blue-400' :
                                                        item.level === 'N4' ? 'bg-green-500/20 text-green-400' :
                                                            item.level === 'N3' ? 'bg-yellow-500/20 text-yellow-400' :
                                                                item.level === 'N2' ? 'bg-orange-500/20 text-orange-400' :
                                                                    'bg-red-500/20 text-red-400'
                                                        }`}>
                                                        {item.level}
                                                    </span>
                                                </td>
                                                <td className="p-4">
                                                    <div className="font-bold text-lg md:text-xl text-indigo-900/90 mb-1">{stripFurigana(item.grammar)}</div>
                                                </td>
                                                <td className="p-4 text-indigo-900/80">
                                                    {item.meaning}
                                                </td>
                                            </tr>
                                        )
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan={4} className="p-8 text-center text-indigo-900/40">
                                            沒有找到符合的文法項目。
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="text-center text-indigo-900/40 text-sm mt-8">
                    資料來源: <a href="https://jlptsensei.com" target="_blank" rel="noreferrer" className="underline hover:text-indigo-900/60">JLPT Sensei</a>
                </div>
            </div>
        </div>
    )
}

export default GrammarList
