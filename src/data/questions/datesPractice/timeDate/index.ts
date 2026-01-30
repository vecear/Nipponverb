// 時間日期類別練習題總匯出
export { monthQuestions } from './months';
export { weekdayQuestions } from './weekdays';
export { dayQuestions } from './days';
export { hourQuestions } from './hours';
export { minuteQuestions } from './minutes';

import { monthQuestions } from './months';
import { weekdayQuestions } from './weekdays';
import { dayQuestions } from './days';
import { hourQuestions } from './hours';
import { minuteQuestions } from './minutes';

// 所有時間日期題目
export const allTimeDateQuestions = [
    ...monthQuestions,
    ...weekdayQuestions,
    ...dayQuestions,
    ...hourQuestions,
    ...minuteQuestions
];

// 綜合練習
export const comprehensiveTimeDateQuestions = allTimeDateQuestions;
