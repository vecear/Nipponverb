// 數字類別練習題總匯出
export { basicNumberQuestions } from './basic';
export { tensNumberQuestions } from './tens';
export { hundredsNumberQuestions } from './hundreds';
export { thousandsNumberQuestions } from './thousands';

import { basicNumberQuestions } from './basic';
import { tensNumberQuestions } from './tens';
import { hundredsNumberQuestions } from './hundreds';
import { thousandsNumberQuestions } from './thousands';

// 所有數字題目
export const allNumberQuestions = [
    ...basicNumberQuestions,
    ...tensNumberQuestions,
    ...hundredsNumberQuestions,
    ...thousandsNumberQuestions
];

// 綜合練習（隨機混合所有數字題目）
export const comprehensiveNumberQuestions = allNumberQuestions;
