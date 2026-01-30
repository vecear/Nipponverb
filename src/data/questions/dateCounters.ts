import { months, daysOfMonth, weekDays, counters, DateCounterItem } from '../dates_and_counters_data';
import { Question } from '../../types';

export function generateDateCounterQuestion(): Question {
    const types = ['month', 'day', 'weekday', 'counter'];
    const type = types[Math.floor(Math.random() * types.length)];

    let target: DateCounterItem;
    let stem: string = '';
    let category: string = '';

    switch (type) {
        case 'month':
            target = months[Math.floor(Math.random() * months.length)];
            stem = `${target.value}月`;
            category = '月份';
            break;
        case 'day':
            target = daysOfMonth[Math.floor(Math.random() * daysOfMonth.length)];
            stem = `${target.value}日`;
            category = '日期';
            break;
        case 'weekday':
            target = weekDays[Math.floor(Math.random() * weekDays.length)];
            stem = target.kanji || target.reading;
            category = '星期';
            break;
        case 'counter': {
            const counterCat = counters[Math.floor(Math.random() * counters.length)];
            const randomItem = counterCat?.items[Math.floor(Math.random() * counterCat.items.length)];
            if (!counterCat || !randomItem) {
                target = months[0];
                stem = '1月';
                category = '月份';
                break;
            }
            target = randomItem;
            stem = `${target.kanji || target.value} (${counterCat.title})`;
            category = counterCat.title || '量詞';
            break;
        }
        default:
            target = months[0];
            stem = '1月';
            category = '月份';
    }

    // Generate distractors
    let allOptions: string[] = [];
    if (type === 'month') allOptions = months.map(m => m.reading);
    else if (type === 'day') allOptions = daysOfMonth.map(d => d.reading);
    else if (type === 'weekday') allOptions = weekDays.map(w => w.reading);
    else {
        // Find the same category items for distractors
        const foundCat = counters.find(c => c.items.some(i => i.reading === target.reading));
        allOptions = foundCat ? foundCat.items.map(i => i.reading) : [target.reading];
    }

    const distractors = allOptions
        .filter(r => r !== target.reading)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    const options = [target.reading, ...distractors].sort(() => Math.random() - 0.5);

    return {
        id: `date_counter_${Date.now()}_${Math.random()}`,
        type: 'multiple-choice',
        question: `「${stem}」的正確讀音是？`,
        meaning: `練習：${category}`,
        options: options,
        correctAnswer: target.reading,
        explanation: `「${stem}」讀作「${target.reading}」。${target.note ? `注意：${target.note}` : ''}`,
        detailedExplanation: {
            correctRule: `「${stem}」的正解為「${target.reading}」。`,
            distractors: options.map(o => ({
                text: o,
                reason: o === target.reading ? '正解' : '其他讀音'
            }))
        },
        stem: stem,
        correct: target.reading,
        level: 'N5'
    } as Question;
}
