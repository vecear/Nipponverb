import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronLeft } from 'lucide-react';

const LEVELS = [
    { id: 'N5', title: 'N5', description: '基礎單字 (644 字)', color: 'from-orange-400 to-orange-500', enabled: true },
    { id: 'N4', title: 'N4', description: '初級單字 (571 字)', color: 'from-pink-400 to-pink-500', enabled: true },
    { id: 'N3', title: 'N3', description: '中級單字 (192 字)', color: 'from-purple-400 to-purple-500', enabled: true },
    { id: 'N2', title: 'N2', description: '中高級單字 (99 字)', color: 'from-blue-400 to-blue-500', enabled: true },
    { id: 'N1', title: 'N1', description: '高級單字（即將推出）', color: 'from-emerald-400 to-emerald-500', enabled: false },
];

const VocabularyLevelSelection: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="min-h-screen py-8 px-4 bg-sand-light/30">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={() => navigate('/courses')}
                    className="flex items-center text-sumi-faded hover:text-wave-deep transition-colors mb-6 group"
                >
                    <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
                    <span>{t('common.back')}</span>
                </button>

                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-zen font-bold text-wave-deep mb-3">
                        {t('nav.vocabulary')}
                    </h1>
                    <p className="text-sumi-faded text-lg">
                        選擇您的日語程度開始學習
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {LEVELS.map((level) => (
                        <button
                            key={level.id}
                            onClick={() => level.enabled && navigate(`/vocabulary/${level.id.toLowerCase()}`)}
                            disabled={!level.enabled}
                            className={`
                relative overflow-hidden group p-6 rounded-xl border-2 transition-all text-left
                ${level.enabled
                                    ? 'border-transparent bg-white shadow-ukiyo hover:shadow-xl hover:-translate-y-1'
                                    : 'border-sumi-light/10 bg-sumi-light/5 opacity-60 cursor-not-allowed'}
              `}
                        >
                            <div className="flex items-center">
                                <div className={`
                  w-16 h-16 rounded-lg bg-gradient-to-br ${level.color} 
                  flex items-center justify-center text-white text-3xl font-bold font-zen shadow-lg mr-6
                `}>
                                    {level.title}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-sumi mb-1">{level.title} 單字</h3>
                                    <p className="text-sumi-faded">{level.description}</p>
                                </div>
                            </div>

                            {level.enabled && (
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-vermilion opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                                    →
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VocabularyLevelSelection;
