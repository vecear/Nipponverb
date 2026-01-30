import { PracticeCategory, DatesPracticeQuestion } from './types';
import { basicNumberQuestions, tensNumberQuestions, hundredsNumberQuestions, thousandsNumberQuestions, allNumberQuestions } from './numbers';
import { monthQuestions } from './timeDate/months';
import { weekdayQuestions } from './timeDate/weekdays';
import { dayQuestions } from './timeDate/days';
import { hourQuestions } from './timeDate/hours';
import { minuteQuestions } from './timeDate/minutes';
import { peopleCounterQuestions } from './counters/people';
import { longObjectQuestions } from './counters/longObjects';
import { flatObjectQuestions } from './counters/flatObjects';
import { bookQuestions } from './counters/books';
import { smallAnimalQuestions } from './counters/smallAnimals';
import { generalObjectQuestions } from './counters/generalObjects';
import { questionCounterQuestions } from './counters/questionCounters';

// 日期及數量詞練習題總匯出
// 完整題庫：數字、時間日期、量詞

export * from './types';

// 量詞綜合題庫（合併所有量詞類別）
export const allCounterQuestions: DatesPracticeQuestion[] = [
    ...peopleCounterQuestions,
    ...longObjectQuestions,
    ...flatObjectQuestions,
    ...bookQuestions,
    ...smallAnimalQuestions,
    ...generalObjectQuestions,
    ...questionCounterQuestions
];

// 時間日期綜合題庫
export const allTimeDateQuestions: DatesPracticeQuestion[] = [
    ...monthQuestions,
    ...weekdayQuestions,
    ...dayQuestions,
    ...hourQuestions,
    ...minuteQuestions
];

// 綜合測驗300題（從各類別均衡抽取）
// 配比：數字50題、時間日期50題、量詞200題
export function getComprehensiveTest(count: number = 300): DatesPracticeQuestion[] {
    const shuffleArray = <T>(array: T[]): T[] => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // 計算各類別配比
    const numberCount = Math.floor(count * 0.17); // 約50題
    const timeDateCount = Math.floor(count * 0.17); // 約50題
    const counterCount = count - numberCount - timeDateCount; // 約200題

    // 從各類別隨機抽取
    const numberSample = shuffleArray(allNumberQuestions).slice(0, numberCount);
    const timeDateSample = shuffleArray(allTimeDateQuestions).slice(0, timeDateCount);
    const counterSample = shuffleArray(allCounterQuestions).slice(0, counterCount);

    // 合併並打亂順序
    return shuffleArray([...numberSample, ...timeDateSample, ...counterSample]);
}

// 從各量詞類別平均抽取的綜合測驗
export function getBalancedCounterTest(count: number = 300): DatesPracticeQuestion[] {
    const shuffleArray = <T>(array: T[]): T[] => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // 從每個量詞類別平均抽取
    const perCategory = Math.floor(count / 7); // 7個量詞類別
    const remainder = count - perCategory * 7;

    const samples = [
        shuffleArray(peopleCounterQuestions).slice(0, perCategory + (remainder > 0 ? 1 : 0)),
        shuffleArray(longObjectQuestions).slice(0, perCategory + (remainder > 1 ? 1 : 0)),
        shuffleArray(flatObjectQuestions).slice(0, perCategory + (remainder > 2 ? 1 : 0)),
        shuffleArray(bookQuestions).slice(0, perCategory + (remainder > 3 ? 1 : 0)),
        shuffleArray(smallAnimalQuestions).slice(0, perCategory + (remainder > 4 ? 1 : 0)),
        shuffleArray(generalObjectQuestions).slice(0, perCategory + (remainder > 5 ? 1 : 0)),
        shuffleArray(questionCounterQuestions).slice(0, perCategory + (remainder > 6 ? 1 : 0))
    ];

    return shuffleArray(samples.flat());
}

// 匯出所有練習題
export const allDatesPracticeQuestions = [
    ...allNumberQuestions,
    ...monthQuestions,
    ...weekdayQuestions,
    ...dayQuestions,
    ...hourQuestions,
    ...minuteQuestions,
    ...peopleCounterQuestions,
    ...longObjectQuestions,
    ...flatObjectQuestions,
    ...bookQuestions,
    ...smallAnimalQuestions,
    ...generalObjectQuestions,
    ...questionCounterQuestions
];

// 定義練習類別結構
export const practiceCategories: PracticeCategory[] = [
    {
        id: 'numbers',
        title: 'Numbers',
        titleZh: '數字',
        description: '練習數字的發音與使用（基本數字、十位數、百位數、千位數）',
        teachingLink: '/courses/dates-counters#numbers',
        subcategories: [
            {
                id: 'basic',
                title: '基本數字 (0-10)',
                questionCount: basicNumberQuestions.length,
                questions: basicNumberQuestions
            },
            {
                id: 'tens',
                title: '十位數',
                questionCount: tensNumberQuestions.length,
                questions: tensNumberQuestions
            },
            {
                id: 'hundreds',
                title: '百位數',
                questionCount: hundredsNumberQuestions.length,
                questions: hundredsNumberQuestions
            },
            {
                id: 'thousands',
                title: '千位數',
                questionCount: thousandsNumberQuestions.length,
                questions: thousandsNumberQuestions
            },
            {
                id: 'comprehensive',
                title: '綜合練習',
                questionCount: allNumberQuestions.length,
                questions: allNumberQuestions
            }
        ]
    },
    {
        id: 'timeDate',
        title: 'Time & Date',
        titleZh: '時間日期',
        description: '練習月份、星期、日期、小時、分鐘的表達',
        teachingLink: '/courses/dates-counters#timedate',
        subcategories: [
            {
                id: 'months',
                title: '月份',
                questionCount: monthQuestions.length,
                questions: monthQuestions
            },
            {
                id: 'weekdays',
                title: '星期',
                questionCount: weekdayQuestions.length,
                questions: weekdayQuestions
            },
            {
                id: 'days',
                title: '日期',
                questionCount: dayQuestions.length,
                questions: dayQuestions
            },
            {
                id: 'hours',
                title: '小時',
                questionCount: hourQuestions.length,
                questions: hourQuestions
            },
            {
                id: 'minutes',
                title: '分鐘',
                questionCount: minuteQuestions.length,
                questions: minuteQuestions
            },
            {
                id: 'comprehensive',
                title: '時間日期綜合練習',
                questionCount: allTimeDateQuestions.length,
                questions: allTimeDateQuestions
            }
        ]
    },
    {
        id: 'counters',
        title: 'Counters',
        titleZh: '量詞',
        description: '練習人數、物品等各種量詞的發音與使用',
        teachingLink: '/courses/dates-counters#counters',
        subcategories: [
            {
                id: 'people',
                title: '人數 (〜人)',
                questionCount: peopleCounterQuestions.length,
                questions: peopleCounterQuestions
            },
            {
                id: 'longObjects',
                title: '細長物 (〜本)',
                questionCount: longObjectQuestions.length,
                questions: longObjectQuestions
            },
            {
                id: 'flatObjects',
                title: '扁平物 (〜枚)',
                questionCount: flatObjectQuestions.length,
                questions: flatObjectQuestions
            },
            {
                id: 'books',
                title: '書籍 (〜冊)',
                questionCount: bookQuestions.length,
                questions: bookQuestions
            },
            {
                id: 'smallAnimals',
                title: '小動物 (〜匹)',
                questionCount: smallAnimalQuestions.length,
                questions: smallAnimalQuestions
            },
            {
                id: 'generalObjects',
                title: '一般物品 (〜つ)',
                questionCount: generalObjectQuestions.length,
                questions: generalObjectQuestions
            },
            {
                id: 'questionCounters',
                title: '疑問詞量詞 (何〜)',
                questionCount: questionCounterQuestions.length,
                questions: questionCounterQuestions
            },
            {
                id: 'comprehensive',
                title: '量詞綜合練習 (700題)',
                questionCount: allCounterQuestions.length,
                questions: allCounterQuestions
            }
        ]
    }
];

// 依類別取得練習題
export function getQuestionsByCategory(categoryId: string) {
    const category = practiceCategories.find(cat => cat.id === categoryId);
    return category ? category.subcategories.flatMap(sub => sub.questions) : [];
}

// 依子類別取得練習題
export function getQuestionsBySubcategory(categoryId: string, subcategoryId: string) {
    const category = practiceCategories.find(cat => cat.id === categoryId);
    if (!category) return [];

    const subcategory = category.subcategories.find(sub => sub.id === subcategoryId);
    return subcategory ? subcategory.questions : [];
}

// 取得所有類別資訊（不含題目）
export function getCategoriesInfo() {
    return practiceCategories.map(cat => ({
        id: cat.id,
        title: cat.title,
        titleZh: cat.titleZh,
        description: cat.description,
        teachingLink: cat.teachingLink,
        totalQuestions: cat.subcategories.reduce((sum, sub) => sum + sub.questionCount, 0),
        subcategories: cat.subcategories.map(sub => ({
            id: sub.id,
            title: sub.title,
            questionCount: sub.questionCount
        }))
    }));
}
