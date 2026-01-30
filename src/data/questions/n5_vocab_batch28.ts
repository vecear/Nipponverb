import { StaticQuestion } from './types';

export const n5VocabBatch28: StaticQuestion[] = [
    // 136. 橋 (はし)
    {
        id: 'n5_vocab_kanji_yomi_hashi_bridge_1',
        prob: '長い<u>橋</u>を渡{わた}ります。',
        prob_zh: '渡過沒有的長 *橋*。',
        options: [
            { text: 'はし', reason: '正確！' },
            { text: 'ほし', reason: '錯誤：星。' },
            { text: 'みち', reason: '錯誤：道。' },
            { text: 'まち', reason: '錯誤：町。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「橋{はし}」。'
    },
    {
        id: 'n5_vocab_hyouki_hashi_bridge_1',
        prob: 'あの<u>はし</u>は有名です。',
        prob_zh: '那座 *橋* 很有名。',
        options: [
            { text: '橋', reason: '正確！' },
            { text: '箸', reason: '錯誤：筷子（音同但重音不同，情境不同）。' },
            { text: '柱', reason: '錯誤：はしら（柱）。' },
            { text: '端', reason: '錯誤：はし（角落/邊緣）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】橋（Bridge）。'
    },

    // 137. 箸 (はし)
    {
        id: 'n5_vocab_kanji_yomi_hashi_chopsticks_1',
        prob: '<u>箸</u>でご飯を食べます。',
        prob_zh: '用 *筷子* 吃飯。',
        options: [
            { text: 'はし', reason: '正確！' },
            { text: 'くし', reason: '錯誤：櫛（梳子）/串。' },
            { text: 'さじ', reason: '錯誤：匙。' },
            { text: 'さら', reason: '錯誤：皿（盤子）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「箸{はし}」。'
    },
    {
        id: 'n5_vocab_hyouki_hashi_chopsticks_1',
        prob: '<u>はし</u>を使います。',
        prob_zh: '使用 *筷子*。',
        options: [
            { text: '箸', reason: '正確！' },
            { text: '橋', reason: '錯誤：橋。' },
            { text: '箱', reason: '錯誤：はこ。' },
            { text: '旗', reason: '錯誤：はた。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】箸（Chopsticks）。'
    },

    // 138. 始まる (はじまる)
    {
        id: 'n5_vocab_kanji_yomi_hajimaru_1',
        prob: '授業が<u>始まり</u>ます。',
        prob_zh: '課堂 *開始* 了。',
        options: [
            { text: 'はじまり', reason: '正確！' },
            { text: 'あつまり', reason: '錯誤：集まり。' },
            { text: 'とまり', reason: '錯誤：止まり。' },
            { text: 'きまり', reason: '錯誤：決まり。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「始{はじ}まる」。'
    },
    {
        id: 'n5_vocab_bunmyaku_hajimaru_1',
        prob: '映画は何時に______か。',
        prob_zh: '電影幾點 *開始*？',
        options: [
            { text: '始まります', reason: '正確！' },
            { text: '終わります', reason: '錯誤：結束。' },
            { text: '行きます', reason: '錯誤：去。' },
            { text: '見ます', reason: '錯誤：看（看電影是見ますが，電影本身是開始）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】動詞搭配\n【解析】映画が始まる（Movie starts）。'
    },

    // 139. 初め (はじめ)
    {
        id: 'n5_vocab_kanji_yomi_hajime_1',
        prob: '<u>初め</u>に名前を書いてください。',
        prob_zh: '請 *一開始* 先寫名字。',
        options: [
            { text: 'はじめ', reason: '正確！' },
            { text: 'まじめ', reason: '錯誤：真面目（認真）。' },
            { text: 'あつめ', reason: '錯誤：厚め。' },
            { text: 'きめ', reason: '錯誤：決め。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「初{はじめ}」。'
    },
    {
        id: 'n5_vocab_kotoba_hajime_1',
        prob: '<u>はじめまして</u>。どうぞよろしく。',
        prob_zh: '*初次見面*。請多指教。',
        options: [
            { text: '初めまして', reason: '正確！' },
            { text: '始めまして', reason: '錯誤：常用於事務開始，寒暄語多用「初」。' },
            { text: '元めまして', reason: '錯誤。' },
            { text: '本めまして', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】慣用語書寫\n【解析】初めまして（How do you do）。'
    },

    // 140. 初めて (はじめて)
    {
        id: 'n5_vocab_kanji_yomi_hajimete_1',
        prob: '日本へ来るのは<u>初めて</u>です。',
        prob_zh: '*第一次* 來日本。',
        options: [
            { text: 'はじめて', reason: '正確！' },
            { text: 'まじめて', reason: '錯誤。' },
            { text: 'あつめて', reason: '錯誤：集めて。' },
            { text: 'そめて', reason: '錯誤：染めて。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「初{はじ}めて」。'
    },
    {
        id: 'n5_vocab_hyouki_hajimete_1',
        prob: 'スキーは<u>はじめて</u>ですか。',
        prob_zh: '是 *第一次* 滑雪嗎？',
        options: [
            { text: '初めて', reason: '正確！' },
            { text: '始めて', reason: '錯誤：始めで（開始）。' },
            { text: '元めて', reason: '錯誤。' },
            { text: '早めて', reason: '錯誤：はやめて。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫與區辨\n【解析】「初めて（第一次）」vs「始めて（開始）」。'
    }
];
