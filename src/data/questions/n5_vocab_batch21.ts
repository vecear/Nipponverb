import { StaticQuestion } from './types';

export const n5VocabBatch21: StaticQuestion[] = [
    // 101. 夏 (なつ)
    {
        id: 'n5_vocab_kanji_yomi_natsu_1',
        prob: '日本{にほん}の<u>夏</u>は暑{あつ}いです。',
        prob_zh: '日本的 *夏天* 很熱。',
        options: [
            { text: 'あき', reason: '錯誤：秋。' },
            { text: 'なつ', reason: '正確！' },
            { text: 'はる', reason: '錯誤：春。' },
            { text: 'ふゆ', reason: '錯誤：冬。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「夏{なつ}」。'
    },
    {
        id: 'n5_vocab_hyouki_natsu_1',
        prob: '今年{ことし}の<u>なつ</u>は海{うみ}へ行{い}きたいです。',
        prob_zh: '今年 *夏天* 想去海邊。',
        options: [
            { text: '夏', reason: '正確！' },
            { text: '秋', reason: '錯誤：あき。' },
            { text: '春', reason: '錯誤：はる。' },
            { text: '冬', reason: '錯誤：ふゆ。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】夏（Summer）。'
    },

    // 102. 夏休み (なつやすみ)
    {
        id: 'n5_vocab_kanji_yomi_natsuyasumi_1',
        prob: 'もうすぐ<u>夏休み</u>です。',
        prob_zh: '快 *暑假* 了。',
        options: [
            { text: 'なつやすみ', reason: '正確！' },
            { text: 'ふゆやすみ', reason: '錯誤：冬休み。' },
            { text: 'ひるやすみ', reason: '錯誤：昼休み。' },
            { text: 'やすみ', reason: '錯誤：休み（沒有夏）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「夏{なつ}休{やす}み」。'
    },
    {
        id: 'n5_vocab_hyouki_natsuyasumi_1',
        prob: '<u>なつやすみ</u>に旅行{りょこう}をします。',
        prob_zh: '*暑假* 要去旅行。',
        options: [
            { text: '夏休み', reason: '正確！' },
            { text: '春休み', reason: '錯誤：はるやすみ。' },
            { text: '秋休み', reason: '錯誤。' },
            { text: '冬休み', reason: '錯誤：ふゆやすみ。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】夏休み（Summer vacation）。'
    },

    // 103. など (など)
    {
        id: 'n5_vocab_bunmyaku_nado_1',
        prob: '机{つくえ}の上に、ペンやノート______があります。',
        prob_zh: '桌上有筆、筆記本 *等等*。',
        options: [
            { text: 'など', reason: '正確！用於列舉。' },
            { text: 'まで', reason: '錯誤：直到。' },
            { text: 'から', reason: '錯誤：從。' },
            { text: 'だけ', reason: '錯誤：只有。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】助詞用法\n【解析】「～や…など」（...和...等等）。'
    },
    {
        id: 'n5_vocab_bunmyaku_nado_2',
        prob: 'デパートで服{ふく}や靴{くつ}______を買{か}いました。',
        prob_zh: '在百貨公司買了衣服、鞋子 *等等*。',
        options: [
            { text: 'など', reason: '正確！' },
            { text: 'より', reason: '錯誤：比。' },
            { text: 'ほど', reason: '錯誤：程度（N5少考）。' },
            { text: 'しか', reason: '錯誤：只有（接否定）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】助詞用法\n【解析】や主要搭配など。'
    },

    // 104. 七つ (ななつ)
    {
        id: 'n5_vocab_kanji_yomi_nanatsu_1',
        prob: 'みかんを<u>七つ</u>ください。',
        prob_zh: '請給我 *七個* 橘子。',
        options: [
            { text: 'ななつ', reason: '正確！' },
            { text: 'しちつ', reason: '錯誤。' },
            { text: 'よっつ', reason: '錯誤：四つ。' },
            { text: 'ここのつ', reason: '錯誤：九つ。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「七{なな}つ」。注意「しちつ」是錯誤讀法。'
    },
    {
        id: 'n5_vocab_hyouki_nanatsu_1',
        prob: '<u>ななつ</u>の海{うみ}。',
        prob_zh: '*七* 海。',
        options: [
            { text: '七つ', reason: '正確！' },
            { text: '九つ', reason: '錯誤：ここのつ。' },
            { text: '八つ', reason: '錯誤：やっつ。' },
            { text: '六つ', reason: '錯誤：むっつ。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】七つ（Seven things）。'
    },

    // 105. 七日 (なのか)
    {
        id: 'n5_vocab_kanji_yomi_nanoka_1',
        prob: '来週{らいしゅう}の<u>七日</u>は日曜日です。',
        prob_zh: '下週 *七號* 是星期日。',
        options: [
            { text: 'なのか', reason: '正確！' },
            { text: 'ななにち', reason: '錯誤。' },
            { text: 'しちにち', reason: '錯誤。' },
            { text: 'ようか', reason: '錯誤：八日。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「七{なの}日{か}」。'
    },
    {
        id: 'n5_vocab_hyouki_nanoka_1',
        prob: '一週間{いっしゅうかん}は<u>なのか</u>です。',
        prob_zh: '一週是 *七天*。',
        options: [
            { text: '七日', reason: '正確！' },
            { text: '九日', reason: '錯誤：ここのか。' },
            { text: '六日', reason: '錯誤：むいか。' },
            { text: '十日', reason: '錯誤：とおか。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】七日（Seven days / 7th day）。'
    }
];
