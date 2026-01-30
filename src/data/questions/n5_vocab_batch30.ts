import { StaticQuestion } from './types';

export const n5VocabBatch30: StaticQuestion[] = [
    // 146. 八 (はち)
    {
        id: 'n5_vocab_kanji_yomi_hachi_1',
        prob: 'みかんが<u>八</u>つあります。',
        prob_zh: '有 *八* 個橘子。',
        options: [
            { text: 'やっ', reason: '正確！八つ（やっつ）。' },
            { text: 'はち', reason: '錯誤：八つ的讀音是やっつ。如果是單獨數字或八人（はちにん）則讀はち。' },
            { text: 'よっ', reason: '錯誤：四つ。' },
            { text: 'むっ', reason: '錯誤：六つ。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】數字讀音\n【解析】八つ（やっつ）。需注意八（はち）的訓讀。'
    },
    {
        id: 'n5_vocab_kanji_yomi_hachi_2',
        prob: '今日は<u>八</u>月一日です。',
        prob_zh: '今天是 *八* 月一日。',
        options: [
            { text: 'はち', reason: '正確！' },
            { text: 'しち', reason: '錯誤：七。' },
            { text: 'く', reason: '錯誤：九。' },
            { text: 'じゅう', reason: '錯誤：十。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】數字讀音\n【解析】八月（はちがつ）。'
    },

    // 147. 二十日 (はつか)
    {
        id: 'n5_vocab_kanji_yomi_hatsuka_1',
        prob: '誕生日は五月<u>二十日</u>です。',
        prob_zh: '生日是五月 *二十日*。',
        options: [
            { text: 'はつか', reason: '正確！' },
            { text: 'ふつか', reason: '錯誤：二日。' },
            { text: 'とおか', reason: '錯誤：十日。' },
            { text: 'にじゅうにち', reason: '錯誤：20日讀作はつか。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】日期讀音\n【解析】二十日（はつか）。'
    },

    // 148. 花 (はな)
    {
        id: 'n5_vocab_kanji_yomi_hana_flower_1',
        prob: 'きれいな<u>花</u>を買いました。',
        prob_zh: '買了漂亮的 *花*。',
        options: [
            { text: 'はな', reason: '正確！' },
            { text: 'はね', reason: '錯誤：羽（翅膀）。' },
            { text: 'ほね', reason: '錯誤：骨。' },
            { text: 'ふね', reason: '錯誤：船。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「花{はな}」。'
    },
    {
        id: 'n5_vocab_hyouki_hana_flower_1',
        prob: '庭に<u>はな</u>が咲{さ}いています。',
        prob_zh: '庭院裡 *花* 開著。',
        options: [
            { text: '花', reason: '正確！' },
            { text: '鼻', reason: '錯誤：はな（鼻）。' },
            { text: '華', reason: '錯誤：華（通常N5範圍外，且與植物描述較少用）。' },
            { text: '草', reason: '錯誤：くさ（草）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】花（Flower）。'
    },

    // 149. 鼻 (はな)
    {
        id: 'n5_vocab_kanji_yomi_hana_nose_1',
        prob: '象{ぞう}は<u>鼻</u>が長いです。',
        prob_zh: '大像 *鼻子* 很長。',
        options: [
            { text: 'はな', reason: '正確！' },
            { text: 'みみ', reason: '錯誤：耳。' },
            { text: 'くち', reason: '錯誤：口。' },
            { text: 'くび', reason: '錯誤：首（脖子）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「鼻{はな}」。'
    },
    {
        id: 'n5_vocab_hyouki_hana_nose_1',
        prob: '<u>はな</u>が高いですね。',
        prob_zh: '*鼻子* 很高挺呢。',
        options: [
            { text: '鼻', reason: '正確！' },
            { text: '花', reason: '錯誤：花。' },
            { text: '首', reason: '錯誤：くび。' },
            { text: '身', reason: '錯誤：み（身體）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】鼻（Nose）。'
    },

    // 150. 話 (はなし)
    {
        id: 'n5_vocab_kanji_yomi_hanashi_1',
        prob: '面白い<u>話</u>を聞きました。',
        prob_zh: '聽了有趣的 *話*（故事）。',
        options: [
            { text: 'はなし', reason: '正確！' },
            { text: 'はなん', reason: '錯誤。' },
            { text: 'はなす', reason: '錯誤：話す（動詞）。' },
            { text: 'はなた', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「話{はなし}」。'
    },
    {
        id: 'n5_vocab_bunmyaku_hanashi_1',
        prob: '先生の______をよく聞いてください。',
        prob_zh: '請仔細聽老師的 *話*。',
        options: [
            { text: '話', reason: '正確！' },
            { text: '文', reason: '錯誤：ぶん（句子/文章）。' },
            { text: '字', reason: '錯誤：じ（字）。' },
            { text: '本', reason: '錯誤：ほん（書）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】名詞意涵\n【解析】話を聞く（Listen to the talk/story）。'
    }
];
