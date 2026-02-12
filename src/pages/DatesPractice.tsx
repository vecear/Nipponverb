import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, BookOpen, Check, X, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getCategoriesInfo, getQuestionsBySubcategory, DatesPracticeQuestion } from '../data/questions/datesPractice';
import FuriganaText from '../components/FuriganaText';

type PageState = 'category-select' | 'subcategory-select' | 'practice' | 'results';

const DatesPractice: React.FC = () => {
    const { } = useTranslation();
    const navigate = useNavigate();

    const [pageState, setPageState] = useState<PageState>('category-select');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
    const [questionCount, setQuestionCount] = useState<number>(20);
    const [questions, setQuestions] = useState<DatesPracticeQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [answers, setAnswers] = useState<{ questionId: string; selectedIndex: number; isCorrect: boolean }[]>([]);

    const categories = getCategoriesInfo();
    const currentCategory = categories.find(c => c.id === selectedCategory);
    const currentQuestion = questions[currentQuestionIndex];

    // 選擇類別
    const handleCategorySelect = (categoryId: string) => {
        setSelectedCategory(categoryId);
        setPageState('subcategory-select');
    };

    // 選擇子類別
    const handleSubcategorySelect = (subcategoryId: string) => {
        setSelectedSubcategory(subcategoryId);
    };

    // 開始練習
    const startPractice = () => {
        if (!selectedCategory || !selectedSubcategory) return;

        const allQuestions = getQuestionsBySubcategory(selectedCategory, selectedSubcategory);

        // 隨機選擇指定數量的題目
        const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
        const selectedQuestions = shuffled.slice(0, Math.min(questionCount, allQuestions.length));

        setQuestions(selectedQuestions);
        setCurrentQuestionIndex(0);
        setAnswers([]);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setPageState('practice');
    };

    // 選擇答案
    const handleAnswerSelect = (optionIndex: number) => {
        if (selectedAnswer !== null) return; // 已選擇時不能再選
        setSelectedAnswer(optionIndex);
        setShowExplanation(true);
    };

    // 確認答案並進入下一題
    const handleNextQuestion = () => {
        if (selectedAnswer === null) return;

        // 記錄答案
        const isCorrect = selectedAnswer === currentQuestion.correctIndex;
        setAnswers([...answers, {
            questionId: currentQuestion.id,
            selectedIndex: selectedAnswer,
            isCorrect
        }]);

        // 進入下一題或結果頁
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        } else {
            setPageState('results');
        }
    };

    // 返回上一層
    const handleBack = () => {
        if (pageState === 'subcategory-select') {
            setPageState('category-select');
            setSelectedCategory(null);
        } else if (pageState === 'practice') {
            setPageState('subcategory-select');
            setQuestions([]);
            setAnswers([]);
        } else {
            navigate('/practice');
        }
    };

    // 重新開始
    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setAnswers([]);
        setPageState('practice');
    };

    // ========== 渲染函數 ==========

    // 類別選擇畫面
    const renderCategorySelect = () => (
        <div className="min-h-screen py-4 sm:py-8 px-2 sm:px-4 bg-sumi-50 font-zen">
            <div className="max-w-7xl mx-auto">
                <div className="mb-6 flex items-center">
                    <button
                        onClick={handleBack}
                        className="mr-4 p-2 rounded-full hover:bg-white hover:shadow-sm transition-all"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <div>
                        <h1 className="text-2xl sm:text-4xl font-bold text-wave-deep">
                            日期及數量詞練習
                        </h1>
                        <p className="text-sumi-faded mt-1">選擇練習類別</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            onClick={() => handleCategorySelect(category.id)}
                            className="bg-white rounded-xl shadow-sm p-6 cursor-pointer hover:shadow-md transition-all border-2 border-transparent hover:border-wave-light"
                        >
                            <h2 className="text-xl font-bold text-wave-deep mb-2">
                                {category.titleZh}
                            </h2>
                            <p className="text-sm text-sumi-Standard mb-4">{category.description}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-sumi-faded">
                                    {category.totalQuestions} 題
                                </span>
                                <a
                                    href={category.teachingLink}
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-xs text-wave-medium hover:text-wave-deep flex items-center gap-1"
                                >
                                    <BookOpen className="w-3 h-3" />
                                    前往複習
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    // 子類別選擇畫面
    const renderSubcategorySelect = () => (
        <div className="min-h-screen py-4 sm:py-8 px-2 sm:px-4 bg-sumi-50 font-zen">
            <div className="max-w-md sm:max-w-2xl mx-auto space-y-4 px-2 sm:px-0">
                <div className="bg-white rounded-xl shadow-md px-4 py-4 sm:px-6 sm:py-6">
                    <h1 className="text-xl sm:text-3xl font-zen font-bold mb-4 sm:mb-5 text-wave-deep">
                        {currentCategory?.titleZh}
                    </h1>

                    {/* 子類別選擇 */}
                    <div className="mb-5">
                        <label className="block text-base sm:text-lg font-semibold mb-3">選擇練習子類別:</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                            {currentCategory?.subcategories.map((sub) => (
                                <button
                                    key={sub.id}
                                    onClick={() => handleSubcategorySelect(sub.id)}
                                    className={`py-3 px-2 sm:py-4 sm:px-3 rounded-lg transition-all flex flex-col items-center justify-center ${
                                        selectedSubcategory === sub.id
                                            ? 'bg-wave-deep text-white border-2 border-vermilion shadow-md'
                                            : 'bg-white border-2 border-gray-200 hover:border-wave-light text-sumi-Standard'
                                    }`}
                                >
                                    <div className={`text-base sm:text-lg font-bold ${selectedSubcategory === sub.id ? 'text-white' : 'text-wave-deep'}`}>
                                        {sub.title}
                                    </div>
                                    <div className={`text-sm ${selectedSubcategory === sub.id ? 'text-white/90' : 'text-sumi-faded'}`}>
                                        {sub.questionCount} 題
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 題目數量選擇 */}
                    <div className="mb-5">
                        <label className="block text-base sm:text-lg font-semibold mb-3">題目數量:</label>
                        <div className="grid grid-cols-5 gap-2 sm:gap-3">
                            {[10, 20, 30, 40, 50].map(count => (
                                <button
                                    key={count}
                                    onClick={() => setQuestionCount(count)}
                                    className={`py-2 sm:py-2.5 rounded-lg transition-all font-medium text-base sm:text-lg ${
                                        questionCount === count
                                            ? 'bg-wave-deep text-white border-2 border-vermilion shadow-md'
                                            : 'bg-white border-2 border-gray-200 hover:border-wave-light text-sumi-faded'
                                    }`}
                                >
                                    {count}題
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 按鈕區 */}
                    <div className="space-y-3 pt-3">
                        <button
                            onClick={startPractice}
                            disabled={!selectedSubcategory}
                            className={`w-full py-3 sm:py-4 text-base sm:text-lg font-bold rounded-lg transition-all ${
                                selectedSubcategory
                                    ? 'bg-gradient-to-r from-vermilion to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-md'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            開始練習
                        </button>
                        <button
                            onClick={() => navigate('/practice')}
                            className="w-full py-2.5 sm:py-3 text-base sm:text-lg bg-white border-2 border-gray-200 text-sumi-Standard rounded-lg hover:bg-gray-50 transition-all"
                        >
                            返回練習首頁
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    // 練習畫面
    const renderPractice = () => {
        if (!currentQuestion) return null;

        const isCorrect = selectedAnswer === currentQuestion.correctIndex;

        return (
            <div className="min-h-screen py-4 sm:py-8 px-2 sm:px-4 bg-sumi-50 font-zen">
                <div className="max-w-3xl mx-auto">
                    {/* 頭部進度條 */}
                    <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                            <button
                                onClick={handleBack}
                                className="p-2 rounded-full hover:bg-white hover:shadow-sm transition-all"
                            >
                                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                            <div className="text-xs sm:text-sm text-sumi-faded">
                                第 {currentQuestionIndex + 1} / {questions.length} 題
                            </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-gradient-to-r from-wave-medium to-wave-deep h-2 rounded-full transition-all"
                                style={{
                                    width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                                }}
                            />
                        </div>
                    </div>

                    {/* 題目卡片 */}
                    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
                        {/* 題型標籤 */}
                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-2 py-1 sm:px-3 bg-wave-light/10 text-wave-deep text-xs rounded-full">
                                {currentQuestion.type === 'pronunciation' && '發音題'}
                                {currentQuestion.type === 'sentence' && '單句題'}
                                {currentQuestion.type === 'dialogue' && '對話題'}
                            </span>
                        </div>

                        {/* 題幹 */}
                        <div className="mb-4 sm:mb-6">
                            {currentQuestion.dialogue ? (
                                <div className="space-y-2 sm:space-y-3">
                                    <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                                        <div className="font-bold text-blue-800 text-xs sm:text-sm mb-1">A:</div>
                                        <div className="text-sm sm:text-base"><FuriganaText text={currentQuestion.dialogue.speakerA} /></div>
                                    </div>
                                    <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                                        <div className="font-bold text-green-800 text-xs sm:text-sm mb-1">B:</div>
                                        <div className="text-sm sm:text-base"><FuriganaText text={currentQuestion.dialogue.speakerB} /></div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-base sm:text-lg font-medium text-sumi-Standard">
                                    <FuriganaText text={currentQuestion.stem} />
                                </div>
                            )}
                            <div className="text-xs sm:text-sm text-sumi-faded mt-2">{currentQuestion.stem_zh}</div>
                        </div>

                        {/* 選項 */}
                        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4">
                            {currentQuestion.options.map((option, idx) => {
                                const isSelected = selectedAnswer === idx;
                                const isOptionCorrect = idx === currentQuestion.correctIndex;
                                const showResult = showExplanation;

                                let bgColor = 'bg-sumi-50 hover:bg-sumi-100';
                                let borderColor = 'border-gray-200';
                                let textColor = 'text-sumi-Standard';

                                if (showResult) {
                                    if (isOptionCorrect) {
                                        bgColor = 'bg-green-50';
                                        borderColor = 'border-green-500';
                                        textColor = 'text-green-800';
                                    } else if (isSelected && !isOptionCorrect) {
                                        bgColor = 'bg-red-50';
                                        borderColor = 'border-red-500';
                                        textColor = 'text-red-800';
                                    }
                                }

                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleAnswerSelect(idx)}
                                        disabled={selectedAnswer !== null}
                                        className={`p-3 sm:p-4 rounded-lg border-2 transition-all text-left ${bgColor} ${borderColor} ${textColor} ${selectedAnswer === null && 'cursor-pointer active:scale-95'}`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-sm sm:text-base">{String.fromCharCode(65 + idx)}.</span>
                                            <span className="text-sm sm:text-base flex-1">{option.text}</span>
                                            {showResult && isOptionCorrect && <Check className="w-4 h-4 sm:w-5 sm:h-5 ml-auto text-green-600" />}
                                            {showResult && isSelected && !isOptionCorrect && <X className="w-4 h-4 sm:w-5 sm:h-5 ml-auto text-red-600" />}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* 詳解（選擇後顯示） */}
                        {showExplanation && (
                            <div className="space-y-3 pt-4 border-t-2 border-gray-300">
                                {/* 正確/錯誤提示 */}
                                <div className={`p-3 rounded-lg ${isCorrect ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-500'}`}>
                                    <h3 className="text-sm font-bold mb-1">
                                        {isCorrect ? '✓ 答對了！' : '✗ 答錯了'}
                                    </h3>
                                    <p className="text-xs">
                                        {!isCorrect && (
                                            <>
                                                正確答案：<span className="font-bold text-green-700">{currentQuestion.options[currentQuestion.correctIndex].text}</span>
                                            </>
                                        )}
                                    </p>
                                </div>

                                {/* 正確答案規則 */}
                                <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-wave-deep">
                                    <div className="font-bold text-wave-deep mb-1 text-sm">📖 正確規則</div>
                                    <p className="text-xs text-gray-800"><FuriganaText text={currentQuestion.explanation.correctRule} /></p>
                                </div>

                                {/* 陷阱說明 */}
                                {currentQuestion.explanation.trapExplanation && (
                                    <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                                        <div className="font-bold text-orange-800 mb-1 text-sm">⚠️ 陷阱說明</div>
                                        <p className="text-xs text-orange-900"><FuriganaText text={currentQuestion.explanation.trapExplanation} /></p>
                                    </div>
                                )}

                                {/* 各選項解說 - 簡化版 */}
                                <details className="bg-gray-50 p-3 rounded-lg">
                                    <summary className="font-bold text-gray-800 text-sm cursor-pointer">📝 各選項解析（點擊展開）</summary>
                                    <div className="space-y-2 mt-2">
                                        {currentQuestion.options.map((option, idx) => {
                                            const isSelectedOption = selectedAnswer === idx;
                                            const isCorrectOption = idx === currentQuestion.correctIndex;

                                            return (
                                                <div
                                                    key={idx}
                                                    className={`text-xs p-2 rounded ${
                                                        isCorrectOption
                                                            ? 'bg-green-100 border border-green-300'
                                                            : isSelectedOption
                                                            ? 'bg-red-100 border border-red-300'
                                                            : 'bg-white border border-gray-200'
                                                    }`}
                                                >
                                                    <div className="flex items-start gap-2">
                                                        <span className={`font-bold shrink-0 ${
                                                            isCorrectOption ? 'text-green-700' : isSelectedOption ? 'text-red-700' : 'text-gray-600'
                                                        }`}>
                                                            {isCorrectOption ? '✓' : isSelectedOption ? '✗' : '•'}
                                                        </span>
                                                        <div className="flex-1">
                                                            <span className="font-bold">{String.fromCharCode(65 + idx)}. {option.text}</span>
                                                            <p className="text-gray-700 mt-1"><FuriganaText text={option.reason} /></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </details>

                                {/* 相關規則 */}
                                <div className="mb-4">
                                    <div className="font-bold text-gray-800 mb-2 text-sm">🏷️ 相關規則</div>
                                    <div className="flex flex-wrap gap-2">
                                        {currentQuestion.explanation.relatedRules.map((rule, idx) => (
                                            <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                                                {rule}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* 下一題按鈕 - 放在詳解區域內 */}
                                <button
                                    onClick={handleNextQuestion}
                                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-bold text-base flex items-center justify-center gap-2 shadow-lg mt-6"
                                >
                                    {currentQuestionIndex < questions.length - 1 ? (
                                        <>
                                            下一題
                                            <ChevronRight className="w-6 h-6" />
                                        </>
                                    ) : (
                                        <>
                                            查看結果
                                            <ChevronRight className="w-6 h-6" />
                                        </>
                                    )}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    // 結果畫面
    const renderResults = () => {
        const correctCount = answers.filter(a => a.isCorrect).length;
        const totalCount = answers.length;
        const percentage = Math.round((correctCount / totalCount) * 100);

        return (
            <div className="min-h-screen py-4 sm:py-8 px-2 sm:px-4 bg-sumi-50 font-zen">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-xl shadow-md p-8 text-center">
                        <h2 className="text-3xl font-bold text-wave-deep mb-6">練習完成！</h2>

                        <div className="mb-8">
                            <div className="text-6xl font-bold text-wave-deep mb-2">{percentage}%</div>
                            <div className="text-lg text-sumi-Standard">
                                答對 {correctCount} / {totalCount} 題
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <button
                                onClick={handleRestart}
                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-bold shadow-md"
                            >
                                再練一次
                            </button>
                            <button
                                onClick={() => setPageState('subcategory-select')}
                                className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all font-bold shadow-sm"
                            >
                                選擇其他練習
                            </button>
                            <button
                                onClick={() => navigate('/practice')}
                                className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all font-bold shadow-sm"
                            >
                                返回練習首頁
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // 主渲染
    if (pageState === 'category-select') return renderCategorySelect();
    if (pageState === 'subcategory-select') return renderSubcategorySelect();
    if (pageState === 'practice') return renderPractice();
    if (pageState === 'results') return renderResults();

    return null;
};

export default DatesPractice;
