import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Construction } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DatesPractice: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="max-w-4xl mx-auto py-12 px-4 text-center">
            <div className="mb-8 flex justify-start">
                <button
                    onClick={() => navigate('/practice')}
                    className="flex items-center gap-2 text-sumi-faded hover:text-sumi transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    {t('common.back')}
                </button>
            </div>

            <div className="bg-white/50 backdrop-blur-sm border-2 border-dashed border-wave-light/30 rounded-3xl p-16 flex flex-col items-center gap-6">
                <div className="w-24 h-24 bg-wave-light/10 rounded-full flex items-center justify-center">
                    <Construction className="w-12 h-12 text-wave-light animate-pulse" />
                </div>

                <div className="space-y-2">
                    <h1 className="text-3xl font-zen font-bold text-wave-deep">
                        {t('practice.categories.dates.title')} 練習
                    </h1>
                    <p className="text-lg text-sumi-faded max-w-md mx-auto">
                        此練習模式目前正在規劃與開發中，敬請期待！
                    </p>
                </div>

                <div className="mt-4">
                    <button
                        onClick={() => navigate('/practice')}
                        className="btn-primary"
                    >
                        返回練習類別
                    </button>
                </div>
            </div>

            <div className="mt-12 text-sm text-sumi-faded flex flex-col gap-1 italic">
                <p>頁面路徑：<code>src/pages/DatesPractice.tsx</code></p>
                <p>資料來源規劃：<code>src/data/dates_and_counters_data.ts</code></p>
            </div>
        </div>
    );
};

export default DatesPractice;
