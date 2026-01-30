import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, Hash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { months, daysOfMonth, weekDays, counters, commonMistakes, DateCounterItem } from '../data/dates_and_counters_data';

const DatesAndCounters = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="min-h-screen py-4 sm:py-8 px-2 sm:px-4 bg-sumi-50 font-zen">
            <div className="max-w-6xl mx-auto">
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

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Section 1: Dates */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-sumi-Standard flex items-center gap-2 border-b-2 border-wave-light pb-2">
                            <Calendar className="w-6 h-6" />
                            日期
                        </h2>

                        {/* Months */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h3 className="text-lg font-bold text-wave-deep mb-4 flex items-center gap-2">
                                <span className="w-2 h-8 bg-wave-medium rounded-full"></span>
                                月份
                            </h3>
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                {months.map((item) => (
                                    <CounterCard key={item.value} item={item} />
                                ))}
                            </div>
                        </div>

                        {/* Weekdays */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h3 className="text-lg font-bold text-wave-deep mb-4 flex items-center gap-2">
                                <span className="w-2 h-8 bg-wave-medium rounded-full"></span>
                                星期
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {weekDays.map((item) => (
                                    <div key={item.value} className="p-3 bg-sumi-50 rounded-lg text-center">
                                        <div className="text-sm text-sumi-faded mb-1">{item.meaning_zh}</div>
                                        <div className="text-lg font-bold text-wave-deep">{item.kanji}</div>
                                        <div className="text-sm text-vermilion">{item.reading}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Days of Month */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h3 className="text-lg font-bold text-wave-deep mb-4 flex items-center gap-2">
                                <span className="w-2 h-8 bg-wave-medium rounded-full"></span>
                                日期
                            </h3>
                            <p className="text-sm text-sumi-faded mb-4">注意 1-10日、14日、20日、24日的特殊讀法（已標示顏色）。</p>
                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                                {daysOfMonth.map((item) => (
                                    <CounterCard key={item.value} item={item} />
                                ))}
                            </div>
                        </div>
                    </section>



                    {/* Section 2: Counters */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-sumi-Standard flex items-center gap-2 border-b-2 border-vermilion-light pb-2">
                            <Hash className="w-6 h-6" />
                            數量詞
                        </h2>

                        {counters.map((category) => (
                            <div key={category.id} className="bg-white rounded-xl shadow-sm p-6">
                                <h3 className="text-lg font-bold text-wave-deep mb-2 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-8 bg-vermilion rounded-full"></span>
                                        {category.title}
                                    </div>
                                    <span className="text-xs px-2 py-1 bg-sumi-50 rounded text-sumi-faded">範例</span>
                                </h3>
                                <p className="text-sm text-sumi-Standard mb-2">{category.description}</p>
                                {category.rule && (
                                    <div className="text-xs bg-yellow-50 text-yellow-800 p-2 rounded mb-4">
                                        音變規則: {category.rule}
                                    </div>
                                )}
                                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                                    {category.items.map((item) => (
                                        <CounterCard key={item.value} item={item} />
                                    ))}
                                </div>
                            </div>
                        ))}

                    </section>

                    {/* Section 3: Common Mistakes */}
                    <section className="space-y-6 md:col-span-2">
                        <div className="bg-vermilion-50 border-2 border-vermilion-100 rounded-xl p-6">
                            <h2 className="text-2xl font-bold text-red-800 flex items-center gap-2 mb-4">
                                ⚠️ 易錯重點
                            </h2>
                            <p className="text-red-700 mb-6">這些是學習者最容易搞混的地方，請特別注意！</p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {commonMistakes.map((mistake) => (
                                    <div key={mistake.id} className="bg-white rounded-lg p-4 shadow-sm">
                                        <h3 className="font-bold text-lg text-wave-deep mb-3 pb-2 border-b border-gray-100">
                                            {mistake.title}
                                        </h3>
                                        <p className="text-sm text-sumi-Standard mb-4 min-h-[40px]">{mistake.description}</p>
                                        <div className="space-y-3">
                                            {mistake.items.map((item, idx) => (
                                                <div key={idx} className="text-sm">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="font-bold text-sumi-Standard bg-gray-100 px-2 py-0.5 rounded">{item.label}</span>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        <div className="bg-red-50 p-2 rounded text-red-600">
                                                            <div className="text-xs font-bold uppercase tracking-wider mb-0.5">錯誤</div>
                                                            {item.wrong}
                                                        </div>
                                                        <div className="bg-green-50 p-2 rounded text-green-700 font-medium">
                                                            <div className="text-xs font-bold uppercase tracking-wider mb-0.5">正確</div>
                                                            {item.right}
                                                        </div>
                                                    </div>
                                                    {item.note && <div className="text-xs text-sumi-faded mt-1 ml-1">💡 {item.note}</div>}
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
        <div className={`p-2 rounded-lg text-center transition-colors ${item.special ? 'bg-orange-50 ring-1 ring-orange-100' : 'bg-sumi-50'}`}>
            <div className="text-xs text-sumi-faded mb-1">{typeof item.value === 'number' ? item.value : item.value}</div>
            <div className="font-bold text-wave-deep">{item.kanji}</div>
            <div className={`text-xs ${item.special ? 'text-vermilion font-bold' : 'text-sumi-Standard'}`}>
                {item.reading}
            </div>
        </div>
    )
}

export default DatesAndCounters;
