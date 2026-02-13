import React, { useState, useMemo, useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { n5Vocabulary, n4Vocabulary, n3Vocabulary, n2Vocabulary } from '../../data/vocabulary';

const PAGE_SIZE = 50;

const VocabularyList: React.FC = () => {
    const navigate = useNavigate();
    const { level } = useParams<{ level: string }>();
    const { t } = useTranslation();
    const tableRef = useRef<HTMLDivElement>(null);

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

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

    const totalPages = Math.ceil(filteredVocab.length / PAGE_SIZE);
    const startIdx = (currentPage - 1) * PAGE_SIZE;
    const endIdx = Math.min(startIdx + PAGE_SIZE, filteredVocab.length);
    const pagedVocab = filteredVocab.slice(startIdx, endIdx);

    const goToPage = useCallback((page: number) => {
        setCurrentPage(page);
        tableRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, []);

    const handleSearch = useCallback((value: string) => {
        setSearchTerm(value);
        setCurrentPage(1);
    }, []);

    const displayLevel = level?.toUpperCase() || '';

    // Generate page numbers with ellipsis
    const getPageNumbers = (): (number | '...')[] => {
        if (totalPages <= 7) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }
        const pages: (number | '...')[] = [1];
        if (currentPage > 3) pages.push('...');
        for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
            pages.push(i);
        }
        if (currentPage < totalPages - 2) pages.push('...');
        pages.push(totalPages);
        return pages;
    };

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
                            onChange={(e) => handleSearch(e.target.value)}
                            className="w-full pl-4 pr-10 py-2.5 bg-white border-2 border-sumi-light/20 focus:border-wave/50 outline-none rounded-lg shadow-sm transition-all"
                        />
                    </div>
                </div>

                <div ref={tableRef} className="bg-white rounded-xl shadow-ukiyo overflow-hidden border border-sumi-light/10">
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
                                {pagedVocab.map((v, idx) => (
                                    <tr key={`${v.word}-${startIdx + idx}`} className="hover:bg-sand-light/50 transition-colors">
                                        <td className="px-6 py-4 text-xl font-bold text-sumi">{v.word}</td>
                                        <td className="px-6 py-4 text-wave-deep">{v.reading}</td>
                                        <td className="px-6 py-4 text-vermilion font-medium">{v.meaning_zh}</td>
                                    </tr>
                                ))}
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

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 bg-sand-light/20 border-t border-sumi-light/10">
                            <span className="text-sm text-sumi-faded">
                                第 {startIdx + 1}-{endIdx} 筆，共 {filteredVocab.length} 筆
                            </span>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() => goToPage(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="p-2 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-wave/10 text-wave-deep"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </button>
                                {getPageNumbers().map((page, i) =>
                                    page === '...' ? (
                                        <span key={`dots-${i}`} className="px-2 text-sumi-faded">...</span>
                                    ) : (
                                        <button
                                            key={page}
                                            onClick={() => goToPage(page)}
                                            className={`min-w-[36px] h-9 rounded-lg text-sm font-medium transition-colors ${
                                                currentPage === page
                                                    ? 'bg-wave-deep text-white shadow-sm'
                                                    : 'hover:bg-wave/10 text-sumi-faded'
                                            }`}
                                        >
                                            {page}
                                        </button>
                                    )
                                )}
                                <button
                                    onClick={() => goToPage(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="p-2 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-wave/10 text-wave-deep"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VocabularyList;
