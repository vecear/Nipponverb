import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, Hash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { months, daysOfMonth, weekDays, counters, commonMistakes, numbers, DateCounterItem } from '../data/dates_and_counters_data';

const DatesAndCounters = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="min-h-screen py-4 sm:py-8 px-2 sm:px-4 bg-sumi-50 font-zen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-6 sm:mb-8 flex items-center">
                    <button
                        onClick={() => navigate('/courses')}
                        className="mr-4 p-2 rounded-full hover:bg-white hover:shadow-sm transition-all text-sumi-faded hover:text-sumi-Standard"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <div>
                        <h1 className="text-2xl sm:text-4xl font-bold text-wave-deep flex items-center gap-3">
                            <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-vermilion" />
                            {t('nav.dateAndCounters', '日期及數量詞')}
                        </h1>
                        <p className="text-sumi-faded mt-1">
                            {t('courses.dateCounters.description', '掌握日期、時間和數量詞的用法')}
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Top Section: Numbers & Dates Side-by-Side */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        {/* Section: Numbers */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-sumi-Standard flex items-center gap-2 border-b-2 border-wave-light pb-2">
                                <span className="text-xl">1️⃣</span>
                                數字
                            </h2>

                            <div className="grid grid-cols-1 gap-4">
                                {numbers.map((category) => (
                                    <div key={category.id} className="bg-white rounded-xl shadow-sm p-5">
                                        <h3 className="text-base font-bold text-wave-deep mb-3 flex items-center gap-2">
                                            <span className="w-1.5 h-6 bg-vermilion-light rounded-full"></span>
                                            {category.title}
                                        </h3>
                                        <p className="text-xs text-sumi-faded mb-3">{category.description}</p>
                                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                                            {category.items.map((item) => (
                                                <CounterCard key={item.value} item={item} />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section: Dates */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-sumi-Standard flex items-center gap-2 border-b-2 border-wave-light pb-2">
                                <Calendar className="w-5 h-5" />
                                日期
                            </h2>

                            <div className="space-y-4">
                                {/* Months */}
                                <div className="bg-white rounded-xl shadow-sm p-5">
                                    <h3 className="text-base font-bold text-wave-deep mb-3 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-wave-medium rounded-full"></span>
                                        月份
                                    </h3>
                                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                                        {months.map((item) => (
                                            <CounterCard key={item.value} item={item} />
                                        ))}
                                    </div>
                                </div>

                                {/* Weekdays */}
                                <div className="bg-white rounded-xl shadow-sm p-5">
                                    <h3 className="text-base font-bold text-wave-deep mb-3 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-wave-medium rounded-full"></span>
                                        星期
                                    </h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                        {weekDays.map((item) => (
                                            <div key={item.value} className="p-2 bg-sumi-50 rounded-lg text-center">
                                                <div className="text-xs text-sumi-faded mb-0.5">{item.meaning_zh}</div>
                                                <div className="text-base font-bold text-wave-deep">{item.kanji}</div>
                                                <div className="text-xs text-vermilion">{item.reading}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Days of Month */}
                                <div className="bg-white rounded-xl shadow-sm p-5">
                                    <h3 className="text-base font-bold text-wave-deep mb-3 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-wave-medium rounded-full"></span>
                                        日期
                                    </h3>
                                    <p className="text-xs text-sumi-faded mb-3">注意特殊讀法（已標示顏色）。</p>
                                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                                        {daysOfMonth.map((item) => (
                                            <CounterCard key={item.value} item={item} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Middle Section: Counters (Full Width) */}
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-sumi-Standard flex items-center gap-2 border-b-2 border-vermilion-light pb-2">
                            <Hash className="w-5 h-5" />
                            數量詞
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                            {counters.map((category) => (
                                <div key={category.id} className="bg-white rounded-xl shadow-sm p-5 h-full">
                                    <h3 className="text-base font-bold text-wave-deep mb-2 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-6 bg-vermilion rounded-full"></span>
                                            {category.title}
                                        </div>
                                    </h3>
                                    <p className="text-xs text-sumi-Standard mb-2 min-h-[1.25rem]">{category.description}</p>
                                    {category.rule && (
                                        <div className="text-xs bg-yellow-50 text-yellow-800 p-1.5 rounded mb-3">
                                            {category.rule}
                                        </div>
                                    )}
                                    <div className="grid grid-cols-5 gap-1.5">
                                        {category.items.map((item) => (
                                            <CounterCard key={item.value} item={item} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Bottom Section: Common Mistakes */}
                    <section className="space-y-4">
                        <div className="bg-vermilion-50 border-2 border-vermilion-100 rounded-xl p-5">
                            <h2 className="text-xl font-bold text-red-800 flex items-center gap-2 mb-3">
                                ⚠️ 易錯重點
                            </h2>
                            <p className="text-sm text-red-700 mb-4">這些是學習者最容易搞混的地方，請特別注意！</p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {commonMistakes.map((mistake) => (
                                    <div key={mistake.id} className="bg-white rounded-lg p-4 shadow-sm">
                                        <h3 className="font-bold text-base text-wave-deep mb-2 pb-2 border-b border-gray-100">
                                            {mistake.title}
                                        </h3>
                                        <p className="text-xs text-sumi-Standard mb-3 min-h-[2.5em]">{mistake.description}</p>
                                        <div className="space-y-2">
                                            {mistake.items.map((item, idx) => (
                                                <div key={idx} className="text-xs">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="font-bold text-sumi-Standard bg-gray-100 px-1.5 py-0.5 rounded">{item.label}</span>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        <div className="bg-red-50 p-1.5 rounded text-red-600">
                                                            <div className="text-[10px] font-bold uppercase tracking-wider mb-0.5">錯誤</div>
                                                            {item.wrong}
                                                        </div>
                                                        <div className="bg-green-50 p-1.5 rounded text-green-700 font-medium">
                                                            <div className="text-[10px] font-bold uppercase tracking-wider mb-0.5">正確</div>
                                                            {item.right}
                                                        </div>
                                                    </div>
                                                    {item.note && <div className="text-[10px] text-sumi-faded mt-0.5 ml-1">💡 {item.note}</div>}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

// Helper Component for Cards
const CounterCard = ({ item }: { item: DateCounterItem }) => {
    return (
        <div className={`p-2 rounded-lg text-center transition-colors relative group ${item.special ? 'bg-orange-50 ring-1 ring-orange-100' : 'bg-sumi-50'}`}>
            <div className="text-xs text-sumi-faded mb-1">{typeof item.value === 'number' ? item.value : item.value}</div>
            <div className="font-bold text-wave-deep">{item.kanji}</div>
            <div className={`text-xs ${item.special ? 'text-vermilion font-bold' : 'text-sumi-Standard'}`}>
                {item.reading}
            </div>
            {item.note && (
                <div className="hidden group-hover:block absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-lg whitespace-nowrap">
                    {item.note}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                </div>
            )}
        </div>
    )
}

export default DatesAndCounters;
