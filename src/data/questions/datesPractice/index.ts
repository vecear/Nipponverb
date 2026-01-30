import { PracticeCategory } from './types';
import { basicNumberQuestions } from './numbers/basic';
import { monthQuestions } from './timeDate/months';

// 日期及數量詞練習題總匯出
// 目前包含示範題目，可擴展為完整題庫

export * from './types';

// 匯出所有練習題
export const allDatesPracticeQuestions = [
    ...basicNumberQuestions,
    ...monthQuestions
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
            }
            // 可擴展：tens, hundreds, thousands, comprehensive
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
            }
            // 可擴展：weekdays, days, hours, minutes, comprehensive
        ]
    }
    // 可擴展：counters, questionCounters
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
