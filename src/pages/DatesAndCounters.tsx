import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, Hash, BookOpen, Lightbulb, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
    months, daysOfMonth, weekDays, counters, commonMistakes, numbers, learningTips,
    DateCounterItem, weekDayInsights, weekDayMemoryTricks, monthReadingInsight,
    monthMnemonic, dateInsight, readingSystemInsight, soundChangeInsight, questionCounters
} from '../data/dates_and_counters_data';

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
                    {/* Section: 音讀與訓讀雙軌制 */}
                    <section className="space-y-4">
                        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-100 rounded-xl p-5">
                            <h2 className="text-xl font-bold text-purple-800 flex items-center gap-2 mb-3">
                                <BookOpen className="w-5 h-5" />
                                {readingSystemInsight.title}
                            </h2>
                            <p className="text-sm text-purple-700 mb-4">{readingSystemInsight.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                {readingSystemInsight.details.map((detail, idx) => (
                                    <div key={idx} className="bg-white rounded-lg p-3 shadow-sm">
                                        <div className="font-bold text-sm text-wave-deep mb-1">{detail.term}</div>
                                        <div className="text-xs text-sumi-Standard mb-1">{detail.explanation}</div>
                                        {detail.example && (
                                            <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded">
                                                {detail.example}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

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

                                    {/* 清瘦型讀法 */}
                                    <div className="mt-4 p-3 bg-gradient-to-r from-rose-50 to-orange-50 rounded-lg">
                                        <h4 className="text-sm font-bold text-rose-800 mb-2 flex items-center gap-1">
                                            <Lightbulb className="w-4 h-4" />
                                            {monthReadingInsight.title}
                                        </h4>
                                        <p className="text-xs text-rose-700 mb-2">{monthReadingInsight.description}</p>
                                        <div className="grid grid-cols-3 gap-2">
                                            {monthReadingInsight.details.map((detail, idx) => (
                                                <div key={idx} className="text-xs bg-white p-2 rounded text-center">
                                                    <div className="font-bold text-wave-deep">{detail.term}</div>
                                                    <div className="text-red-500 text-[10px]">{detail.example}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 大小月口訣 */}
                                    <div className="mt-3 p-3 bg-teal-50 rounded-lg">
                                        <h4 className="text-sm font-bold text-teal-800 mb-2">📝 {monthMnemonic.title}</h4>
                                        <p className="text-xs text-teal-700 mb-2">{monthMnemonic.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {monthMnemonic.items.map((item, idx) => (
                                                <div key={idx} className="text-xs bg-white px-2 py-1 rounded flex items-center gap-1">
                                                    <span className="font-bold text-teal-700">{item.mnemonic}</span>
                                                    <span className="text-sumi-faded">→</span>
                                                    <span className="text-sumi-Standard">{item.target}</span>
                                                </div>
                                            ))}
                                        </div>
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

                                    {/* 七曜日來源說明 */}
                                    <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                                        <h4 className="text-sm font-bold text-blue-800 mb-2 flex items-center gap-1">
                                            <Lightbulb className="w-4 h-4" />
                                            {weekDayInsights.title}
                                        </h4>
                                        <p className="text-xs text-blue-700 mb-2">{weekDayInsights.description}</p>
                                        <div className="grid grid-cols-1 gap-1">
                                            {weekDayInsights.details.slice(0, 4).map((detail, idx) => (
                                                <div key={idx} className="text-xs flex items-center gap-2">
                                                    <span className="font-bold text-wave-deep min-w-[4rem]">{detail.term}</span>
                                                    <span className="text-sumi-faded">{detail.explanation}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 星期記憶口訣 */}
                                    <div className="mt-3 p-3 bg-amber-50 rounded-lg">
                                        <h4 className="text-sm font-bold text-amber-800 mb-2">📝 {weekDayMemoryTricks.title}</h4>
                                        <div className="grid grid-cols-2 gap-2">
                                            {weekDayMemoryTricks.items.slice(0, 4).map((item, idx) => (
                                                <div key={idx} className="text-xs bg-white p-2 rounded">
                                                    <div className="font-bold text-amber-700">「{item.mnemonic}」</div>
                                                    <div className="text-sumi-Standard">{item.target}</div>
                                                </div>
                                            ))}
                                        </div>
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

                                    {/* 日期文化知識 */}
                                    <div className="mt-4 p-3 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-lg">
                                        <h4 className="text-sm font-bold text-emerald-800 mb-2 flex items-center gap-1">
                                            <Lightbulb className="w-4 h-4" />
                                            {dateInsight.title}
                                        </h4>
                                        <p className="text-xs text-emerald-700 mb-2">{dateInsight.description}</p>
                                        <div className="space-y-2">
                                            {dateInsight.details.map((detail, idx) => (
                                                <div key={idx} className="text-xs bg-white p-2 rounded">
                                                    <div className="flex items-start gap-2">
                                                        <span className="font-bold text-wave-deep min-w-[7rem]">{detail.term}</span>
                                                        <div>
                                                            <span className="text-sumi-Standard">{detail.explanation}</span>
                                                            {detail.example && (
                                                                <span className="text-emerald-600 ml-1">（{detail.example}）</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
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

                    {/* h-p 轉換規律說明 */}
                    <section className="space-y-4">
                        <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 border-2 border-violet-100 rounded-xl p-5">
                            <h2 className="text-xl font-bold text-violet-800 flex items-center gap-2 mb-3">
                                🔊 {soundChangeInsight.title}
                            </h2>
                            <p className="text-sm text-violet-700 mb-4">{soundChangeInsight.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                                {soundChangeInsight.details.map((detail, idx) => (
                                    <div key={idx} className="bg-white rounded-lg p-3 shadow-sm">
                                        <div className="font-bold text-sm text-wave-deep mb-1">{detail.term}</div>
                                        <div className="text-xs text-sumi-Standard mb-2">{detail.explanation}</div>
                                        {detail.example && (
                                            <div className="text-xs text-violet-600 bg-violet-50 px-2 py-1 rounded font-mono">
                                                {detail.example}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 疑問詞量詞 */}
                    <section className="space-y-4">
                        <div className="bg-gradient-to-r from-sky-50 to-cyan-50 border-2 border-sky-100 rounded-xl p-5">
                            <h2 className="text-xl font-bold text-sky-800 flex items-center gap-2 mb-3">
                                <HelpCircle className="w-5 h-5" />
                                疑問詞量詞（詢問數量）
                            </h2>
                            <p className="text-sm text-sky-700 mb-4">詢問數量時，「何（なん）」與量詞結合會產生特定的音變。注意哪些會濁音化、哪些保持不變。</p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                                {questionCounters.map((item, idx) => (
                                    <div key={idx} className={`bg-white rounded-lg p-3 shadow-sm text-center ${item.note.includes('濁音') || item.note.includes('半濁音') ? 'ring-1 ring-sky-200' : ''}`}>
                                        <div className="text-xs text-sumi-faded mb-1">{item.counterName}</div>
                                        <div className="font-bold text-lg text-wave-deep">{item.question}</div>
                                        <div className={`text-sm ${item.note.includes('濁音') || item.note.includes('半濁音') ? 'text-vermilion font-bold' : 'text-sumi-Standard'}`}>
                                            {item.reading}
                                        </div>
                                        <div className="text-[10px] text-sumi-faded mt-1">{item.note}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Learning Tips Section */}
                    <section className="space-y-4">
                        <div className="bg-indigo-50 border-2 border-indigo-100 rounded-xl p-5">
                            <h2 className="text-xl font-bold text-indigo-800 flex items-center gap-2 mb-3">
                                💡 學習技巧
                            </h2>
                            <p className="text-sm text-indigo-700 mb-4">掌握這些技巧，讓量詞學習事半功倍！</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {learningTips.map((tip) => (
                                    <div key={tip.id} className="bg-white rounded-lg p-4 shadow-sm">
                                        <h3 className="font-bold text-base text-wave-deep mb-2 pb-2 border-b border-gray-100">
                                            {tip.title}
                                        </h3>
                                        <p className="text-xs text-sumi-Standard mb-3 min-h-[2.5rem]">{tip.description}</p>
                                        <div className="space-y-2">
                                            {tip.points.map((point, idx) => (
                                                <div key={idx} className="text-xs">
                                                    <div className={`font-bold mb-0.5 ${point.highlight ? 'text-vermilion' : 'text-sumi-Standard'}`}>
                                                        {point.label}
                                                    </div>
                                                    <div className="text-sumi-faded pl-2 border-l-2 border-gray-200">
                                                        {point.text}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
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
