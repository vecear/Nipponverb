import React, { useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, Search } from 'lucide-react';
import { n5Vocabulary, n4Vocabulary, n3Vocabulary, n2Vocabulary } from '../../data/vocabulary';

const VocabularyList: React.FC = () => {
    const navigate = useNavigate();
    const { level } = useParams<{ level: string }>();
    const { t } = useTranslation();

    const [searchTerm, setSearchTerm] = useState('');

    const data = useMemo(() => {
        switch (level?.toLowerCase()) {
            case 'n5': return n5Vocabulary;
            case 'n4': return n4Vocabulary;
            case 'n3': return n3Vocabulary;
            case 'n2': return n2Vocabulary;
            default: return [];
        }
    }, [level]);

    const filteredVocab = useMemo(() => {
        return data.filter(v =>
            v.word.includes(searchTerm) ||
            v.reading.includes(searchTerm) ||
            v.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
            v.meaning_zh.includes(searchTerm)
        );
    }, [data, searchTerm]);

    const displayLevel = level?.toUpperCase() || '';

    return (
        <div className="min-h-screen py-8 px-4 bg-sand-light/30">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div>
                        <button
                            onClick={() => navigate('/vocabulary')}
                            className="flex items-center text-sumi-faded hover:text-wave-deep transition-colors mb-4 group"
                        >
                            <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
                            <span>{t('common.back')}</span>
                        </button>
                        <h1 className="text-4xl font-zen font-bold text-wave-deep">
                            JLPT {displayLevel} {t('nav.vocabulary')}
                            <span className="ml-4 text-lg font-normal text-sumi-faded">({filteredVocab.length})</span>
                        </h1>
                    </div>

                    <div className="relative w-full md:w-80">
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sumi-faded pointer-events-none" />
                        <input
                            type="text"
                            placeholder="搜尋單字、讀音或意思"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-4 pr-10 py-2.5 bg-white border-2 border-sumi-light/20 focus:border-wave/50 outline-none rounded-lg shadow-sm transition-all"
                        />
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-ukiyo overflow-hidden border border-sumi-light/10">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-wave/10 text-wave-deep font-bold border-b border-sumi-light/20">
                                    <th className="px-6 py-4">單字 (漢字)</th>
                                    <th className="px-6 py-4">讀音 (假名)</th>
                                    <th className="px-6 py-4">中文意思</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-sumi-light/10">
                                {filteredVocab.slice(0, 300).map((v, idx) => (
                                    <tr key={`${v.word}-${idx}`} className="hover:bg-sand-light/50 transition-colors">
                                        <td className="px-6 py-4 text-xl font-bold text-sumi">{v.word}</td>
                                        <td className="px-6 py-4 text-wave-deep">{v.reading}</td>
                                        <td className="px-6 py-4 text-vermilion font-medium">{v.meaning_zh}</td>
                                    </tr>
                                ))}
                                {filteredVocab.length > 300 && (
                                    <tr>
                                        <td colSpan={3} className="px-6 py-4 text-center text-sumi-faded italic bg-sand-light/20">
                                            ... 僅顯示前 300 筆資料 ...
                                        </td>
                                    </tr>
                                )}
                                {filteredVocab.length === 0 && (
                                    <tr>
                                        <td colSpan={3} className="px-6 py-12 text-center text-sumi-faded">
                                            找不到符合「{searchTerm}」的單字
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VocabularyList;
