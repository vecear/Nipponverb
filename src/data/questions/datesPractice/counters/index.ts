// 量詞類別練習題總匯出
export { peopleCounterQuestions } from './people';
export { longObjectQuestions } from './longObjects';
export { flatObjectQuestions } from './flatObjects';
export { bookQuestions } from './books';
export { smallAnimalQuestions } from './smallAnimals';
export { generalObjectQuestions } from './generalObjects';
export { questionCounterQuestions } from './questionCounters';

import { peopleCounterQuestions } from './people';
import { longObjectQuestions } from './longObjects';
import { flatObjectQuestions } from './flatObjects';
import { bookQuestions } from './books';
import { smallAnimalQuestions } from './smallAnimals';
import { generalObjectQuestions } from './generalObjects';
import { questionCounterQuestions } from './questionCounters';

// 所有量詞題目
export const allCounterQuestions = [
    ...peopleCounterQuestions,
    ...longObjectQuestions,
    ...flatObjectQuestions,
    ...bookQuestions,
    ...smallAnimalQuestions,
    ...generalObjectQuestions,
    ...questionCounterQuestions
];

// 綜合練習
export const comprehensiveCounterQuestions = allCounterQuestions;
