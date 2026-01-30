import { StaticQuestion } from './types';

export const n5VocabBatch24: StaticQuestion[] = [
    // 116. 日曜日 (にちようび)
    {
        id: 'n5_vocab_kanji_yomi_nichiyoubi_1',
        prob: '<u>日曜日</u>は学校が休みです。',
        prob_zh: '*星期日* 學校放假。',
        options: [
            { text: 'にちようび', reason: '正確！' },
            { text: 'げつようび', reason: '錯誤：月曜日（週一）。' },
            { text: 'どようび', reason: '錯誤：土曜日（週六）。' },
            { text: 'きんようび', reason: '錯誤：金曜日（週五）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「日{にち}曜{よう}日{び}」。'
    },
    {
        id: 'n5_vocab_hyouki_nichiyoubi_1',
        prob: '明日は<u>にちようび</u>です。',
        prob_zh: '明天是 *星期日*。',
        options: [
            { text: '日曜日', reason: '正確！' },
            { text: '月曜日', reason: '錯誤：げつようび。' },
            { text: '火曜日', reason: '錯誤：かようび。' },
            { text: '水曜日', reason: '錯誤：すいようび。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】日曜日（Sunday）。'
    },

    // 117. 荷物 (にもつ)
    {
        id: 'n5_vocab_kanji_yomi_nimotsu_1',
        prob: '<u>荷物</u>が重いですね。',
        prob_zh: '*行李* 很重呢。',
        options: [
            { text: 'にもつ', reason: '正確！' },
            { text: 'なにもの', reason: '錯誤。' },
            { text: 'かもの', reason: '錯誤。' },
            { text: 'やもつ', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「荷{に}物{もつ}」。'
    },
    {
        id: 'n5_vocab_hyouki_nimotsu_1',
        prob: 'この<u>にもつ</u>を持ってください。',
        prob_zh: '請拿著這個 *行李*。',
        options: [
            { text: '荷物', reason: '正確！' },
            { text: '何物', reason: '錯誤。' },
            { text: '和物', reason: '錯誤。' },
            { text: '花物', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】荷物（Baggage/Luggage）。'
    },

    // 118. ニュース (ニュース)
    {
        id: 'n5_vocab_katakana_news_1',
        prob: 'テレビで<u>ニュース</u>を見ます。',
        prob_zh: '在電視上看 *新聞*。',
        options: [
            { text: '新聞（News）', reason: '正確！' },
            { text: '音楽（Music）', reason: '錯誤。' },
            { text: '映画（Movie）', reason: '錯誤。' },
            { text: '写真（Photo）', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_katakana',
        correctRule: '【考點】片假名詞彙\n【解析】ニュース（News）。'
    },
    {
        id: 'n5_vocab_bunmyaku_news_1',
        prob: 'ラジオで新しい______を聞きました。',
        prob_zh: '在收音機聽到了新的 *消息/新聞*。',
        options: [
            { text: 'ニュース', reason: '正確！' },
            { text: 'カメラ', reason: '錯誤：相機。' },
            { text: 'カレンダー', reason: '錯誤：日曆。' },
            { text: 'デパート', reason: '錯誤：百貨公司。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】外來語\n【解析】聞く（聽）搭配ニュース（新聞）合理。'
    },

    // 119. 庭 (にわ)
    {
        id: 'n5_vocab_kanji_yomi_niwa_1',
        prob: '家の<u>庭</u>に木があります。',
        prob_zh: '家裡的 *庭院* 有樹。',
        options: [
            { text: 'にわ', reason: '正確！' },
            { text: 'かわ', reason: '錯誤：川（河）/皮。' },
            { text: 'やま', reason: '錯誤：山。' },
            { text: 'そら', reason: '錯誤：空。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「庭{にわ}」。'
    },
    {
        id: 'n5_vocab_hyouki_niwa_1',
        prob: '広い<u>にわ</u>がほしいです。',
        prob_zh: '想要寬廣的 *庭院*。',
        options: [
            { text: '庭', reason: '正確！' },
            { text: '廷', reason: '錯誤。' },
            { text: '底', reason: '錯誤：そこ。' },
            { text: '低', reason: '錯誤：ひくい（形容詞字根）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】庭（Garden）。'
    },

    // 120. 脱ぐ (ぬぐ)
    {
        id: 'n5_vocab_kanji_yomi_nugu_1',
        prob: '靴を<u>脱いで</u>ください。',
        prob_zh: '請 *脫* 鞋。',
        options: [
            { text: 'ぬいで', reason: '正確！' },
            { text: 'ないで', reason: '錯誤。' },
            { text: 'ぬいて', reason: '錯誤：抜いて。' },
            { text: 'のんで', reason: '錯誤：飲んで。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「脱{ぬ}ぐ」。て形「脱いで」。'
    },
    {
        id: 'n5_vocab_bunmyaku_nugu_1',
        prob: '暑いですから、コートを______。',
        prob_zh: '因為很熱，所以 *脫* 了大衣。',
        options: [
            { text: '脱ぎました{ぬ}', reason: '正確！' },
            { text: '着ました{き}', reason: '錯誤：穿（上身）。' },
            { text: '履きました{は}', reason: '錯誤：穿（下身/鞋）。' },
            { text: 'しました', reason: '錯誤：做（領帶/手套等有時用する）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】動詞搭配\n【解析】衣服を脱ぐ（Take off clothes）。'
    }
];
