import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { commonVerbs, conjugateVerbWithReading, generateVerbExample, VerbData } from '../data/verbs'
import FuriganaText from '../components/FuriganaText'

const VerbList = () => {
    const { t, i18n } = useTranslation()
    const [selectedVerb, setSelectedVerb] = useState<VerbData | null>(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedLevel, setSelectedLevel] = useState<'N5' | 'N4' | 'N3' | 'N2' | 'N1' | null>(null)

    // Filter verbs based on search term and selected level
    const filteredVerbs = commonVerbs.filter(verb => {
        const matchesSearch = verb.dictionary.includes(searchTerm) ||
            verb.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (verb.meaning_zh && verb.meaning_zh.includes(searchTerm)) ||
            verb.reading.includes(searchTerm)
        const matchesLevel = selectedLevel ? verb.level === selectedLevel : true

        return matchesSearch && matchesLevel
    })

    const conjugationForms = [
        { key: 'masu', label: t('practice.categories.verbs.forms.masu') },
        { key: 'te', label: t('practice.categories.verbs.forms.te') },
        { key: 'ta', label: t('practice.categories.verbs.forms.ta') },
        { key: 'nai', label: t('practice.categories.verbs.forms.nai') },
        { key: 'potential', label: t('practice.categories.verbs.forms.potential') },
        { key: 'passive', label: t('practice.categories.verbs.forms.passive') },
        { key: 'causative', label: t('practice.categories.verbs.forms.causative') },
        { key: 'volitional', label: t('practice.categories.verbs.forms.volitional') }
    ]

    const levels = ['N5', 'N4', 'N3', 'N2', 'N1'] as const

    return (
        <div className="max-w-6xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                    <Link to="/" className="text-white/60 hover:text-white mb-2 inline-block">← {t('common.previous')}</Link>
                    <h1 className="text-3xl font-zen font-bold text-gradient">{t('practice.categories.verbs.title')}</h1>
                    <div className="flex items-center gap-4 mt-1">
                        <p className="text-white/60">{t('practice.categories.verbs.description')}</p>
                        <Link to="/verb-guide" className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm text-electric-cyan transition-colors">
                            {t('practice.categories.verbs.guide')}
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <div className="text-sm text-white/40 font-mono">
                        {t('practice.categories.verbs.count', { count: filteredVerbs.length })}
                    </div>
                    {/* Level Selectors */}
                    <div className="flex bg-white/5 rounded-lg p-1">
                        {levels.map((level) => (
                            <button
                                key={level}
                                onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
                                className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${selectedLevel === level
                                    ? 'bg-electric-cyan text-slate-900 shadow-lg'
                                    : 'text-white/60 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {level}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full sm:w-auto">
                        <input
                            type="text"
                            placeholder={t('practice.categories.verbs.searchPlaceholder')}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-white/10 border border-white/20 rounded-full px-4 py-2 pl-10 focus:outline-none focus:border-electric-cyan w-full sm:w-64"
                        />
                        <span className="absolute left-3 top-2.5 text-white/40">🔍</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Verb List Sidebar */}
                <div className={`lg:col-span-1 space-y-4 ${selectedVerb ? 'hidden lg:block' : 'block'}`}>
                    <div className="card h-[calc(100vh-220px)] overflow-y-auto custom-scrollbar">
                        <div className="space-y-2">
                            {filteredVerbs.map((verb, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedVerb(verb)}
                                    className={`p-3 rounded-lg cursor-pointer transition-all ${selectedVerb?.dictionary === verb.dictionary
                                        ? 'bg-gradient-to-r from-sakura-pink/20 to-electric-cyan/20 border-l-4 border-electric-cyan'
                                        : 'hover:bg-white/10'
                                        }`}
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <div>
                                                <span className="text-lg font-bold leading-none">
                                                    <FuriganaText text={conjugateVerbWithReading(verb, 'dictionary').text} />
                                                </span>
                                            </div>
                                            <span className={`text-[10px] px-1.5 py-0.5 rounded ml-2 ${verb.level === 'N5' ? 'bg-green-500/20 text-green-400' :
                                                verb.level === 'N4' ? 'bg-blue-500/20 text-blue-400' :
                                                    verb.level === 'N3' ? 'bg-yellow-500/20 text-yellow-400' :
                                                        verb.level === 'N2' ? 'bg-orange-500/20 text-orange-400' :
                                                            'bg-red-500/20 text-red-400'
                                                }`}>
                                                {verb.level}
                                            </span>
                                        </div>
                                        <span className="text-xs text-white/40 px-2 py-1 rounded bg-white/5 capitalize">{t(`practice.categories.verbs.types.${verb.type}`)}</span>
                                    </div>
                                    <div className="text-sm text-white/60 mt-1">
                                        {(i18n.language === 'zh-TW' || i18n.language.startsWith('zh')) ? verb.meaning_zh : verb.meaning}
                                    </div>
                                </div >
                            ))}
                            {filteredVerbs.length === 0 && (
                                <div className="text-center text-white/40 py-8">
                                    {t('practice.categories.verbs.noResults')}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={`lg:col-span-2 ${selectedVerb ? 'block' : 'hidden lg:block'}`}>
                    {selectedVerb ? (
                        <div
                            key={selectedVerb.dictionary}
                            className="card"
                        >
                            {/* Mobile Back Button */}
                            <button
                                onClick={() => setSelectedVerb(null)}
                                className="lg:hidden mb-4 flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                            >
                                <span>←</span> {t('common.previous')}
                            </button>

                            <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <div>
                                            <h2 className="text-4xl font-zen font-bold leading-none">
                                                <FuriganaText text={conjugateVerbWithReading(selectedVerb, 'dictionary').text} />
                                            </h2>
                                        </div>
                                        <span className={`text-sm px-2 py-1 rounded-md font-bold self-start mt-4 ${selectedVerb.level === 'N5' ? 'bg-green-500/20 text-green-400' :
                                            selectedVerb.level === 'N4' ? 'bg-blue-500/20 text-blue-400' :
                                                selectedVerb.level === 'N3' ? 'bg-yellow-500/20 text-yellow-400' :
                                                    selectedVerb.level === 'N2' ? 'bg-orange-500/20 text-orange-400' :
                                                        'bg-red-500/20 text-red-400'
                                            }`}>
                                            {selectedVerb.level}
                                        </span>
                                    </div>
                                    <p className="text-xl text-white/80 mt-2">
                                        {(i18n.language === 'zh-TW' || i18n.language.startsWith('zh')) ? selectedVerb.meaning_zh : selectedVerb.meaning}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-white/60 mb-1">{t('practice.categories.verbs.type')}</div>
                                    <div className="font-mono bg-white/10 px-3 py-1 rounded capitalize inline-block">
                                        {t(`practice.categories.verbs.types.${selectedVerb.type}`)} {selectedVerb.group ? `(${selectedVerb.group})` : ''}
                                    </div>
                                </div>
                            </div>

                            {selectedVerb.dictionary_definition && selectedVerb.dictionary_definition.length > 0 && (i18n.language === 'zh-TW' || i18n.language.startsWith('zh')) && (
                                <div className="bg-black/20 p-4 rounded-xl border border-white/5 mb-6">
                                    <div className="text-xs text-white/40 font-bold uppercase tracking-wider mb-2">
                                        辭書定義
                                    </div>
                                    <ul className="space-y-1">
                                        {selectedVerb.dictionary_definition.map((def, i) => (
                                            <li key={i} className="text-sm text-white/80 leading-relaxed">
                                                {def}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {selectedVerb.native_examples && selectedVerb.native_examples.length > 0 && (
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-6 transition-all hover:bg-white/10">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="text-xs text-electric-cyan/80 font-bold uppercase tracking-wider">
                                            {t('practice.categories.verbs.example')} (辭書)
                                        </div>
                                        <div className="h-px flex-1 bg-white/10"></div>
                                    </div>
                                    <div className="space-y-3">
                                        {selectedVerb.native_examples.map((ex, i) => (
                                            <div key={i} className="flex flex-col gap-1">
                                                <div className="text-lg text-white font-zen">
                                                    <FuriganaText text={ex.ja} />
                                                </div>
                                                <div className="text-sm text-white/50">{ex.zh}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {conjugationForms.map((form) => {
                                    const conjugation = conjugateVerbWithReading(selectedVerb, form.key)
                                    const example = generateVerbExample(selectedVerb, form.key, i18n.language)
                                    return (
                                        <div
                                            key={form.key}
                                            className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                                        >
                                            <div className="text-xs text-white/40 mb-1 font-mono">
                                                {t('practice.categories.verbs.forms.' + form.key)}
                                            </div>
                                            <div className="mb-3">
                                                <div className="text-2xl font-bold text-electric-cyan font-zen">
                                                    <FuriganaText text={conjugation.text} />
                                                </div>
                                            </div>

                                            {/* Example Sentence Section */}
                                            <div className="mt-2 pt-2 border-t border-white/5">
                                                <div className="text-[10px] text-white/40 uppercase mb-1">{t('practice.categories.verbs.example')}</div>
                                                <div className="text-sm text-white/90 mb-0.5">
                                                    <FuriganaText text={example.sentence} />
                                                </div>
                                                <div className="text-xs text-white/50">
                                                    {example.translation}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ) : (
                        <div className="card flex flex-col items-center justify-center h-full text-center py-20 opacity-50">
                            <span className="text-6xl mb-4">👈</span>
                            <h3 className="text-xl font-bold">{t('practice.categories.verbs.selectPrompt')}</h3>
                            <p>{t('practice.categories.verbs.viewDetails')}</p>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default VerbList
