import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import { grammarList } from '../data/grammarList'

const GrammarList = () => {
    const navigate = useNavigate()
    const [selectedLevel, setSelectedLevel] = useState<'ALL' | 'N5' | 'N4' | 'N3' | 'N2' | 'N1'>('ALL')
    const [searchQuery, setSearchQuery] = useState('')

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
        <div className="min-h-screen py-8 px-4 pb-24">
            <div className="max-w-6xl mx-auto space-y-6">
                <header className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-zen font-bold text-gradient mb-4">
                        JLPT 文法列表
                    </h1>
                    <p className="text-white/60 text-lg">
                        N5 到 N1 的完整文法參考表
                    </p>
                </header>

                {/* Filters and Search */}
                <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center bg-white/5 p-4 rounded-2xl border border-white/10">

                    {/* Level Tabs */}
                    <div className="flex flex-wrap gap-2">
                        {(['ALL', 'N5', 'N4', 'N3', 'N2', 'N1'] as const).map(level => (
                            <button
                                key={level}
                                onClick={() => setSelectedLevel(level)}
                                className={`px-4 py-2 rounded-lg font-bold transition-all ${selectedLevel === level
                                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                                    : 'glass hover:bg-white/10 text-white/60'
                                    }`}
                            >
                                {level} <span className="text-xs opacity-60 ml-1">({counts[level]})</span>
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                        <input
                            type="text"
                            placeholder="搜尋文法..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-black/20 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-all"
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="glass rounded-2xl overflow-hidden border border-white/10">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5 text-white/60 text-sm border-b border-white/10">
                                    <th className="p-4 font-medium">級別</th>
                                    <th className="p-4 font-medium">文法</th>
                                    <th className="p-4 font-medium">意義</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {filteredGrammar.length > 0 ? (
                                    filteredGrammar.map((item) => (
                                        <tr
                                            key={item.id}
                                            onClick={() => navigate(`/grammar/${item.id}`)}
                                            className="hover:bg-white/5 transition-colors group cursor-pointer"
                                        >
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
                                                <div className="font-bold text-lg md:text-xl text-white/90 mb-1">{item.grammar}</div>
                                            </td>
                                            <td className="p-4 text-white/80">
                                                {item.meaning}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={3} className="p-8 text-center text-white/40">
                                            沒有找到符合的文法項目。
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="text-center text-white/40 text-sm mt-8">
                    資料來源: <a href="https://jlptsensei.com" target="_blank" rel="noreferrer" className="underline hover:text-white/60">JLPT Sensei</a>
                </div>
            </div>
        </div>
    )
}

export default GrammarList
