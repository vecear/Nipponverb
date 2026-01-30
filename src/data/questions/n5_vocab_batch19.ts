import { StaticQuestion } from './types';

export const n5VocabBatch19: StaticQuestion[] = [
    // 91. 力 (ちから)
    {
        id: 'n5_vocab_kanji_yomi_chikara_1',
        prob: '彼は<u>力</u>が強いです。',
        prob_zh: '他的 *力氣* 很大。',
        options: [
            { text: 'ちがら', reason: '錯誤。' },
            { text: 'ちから', reason: '正確！' },
            { text: 'ゆうき', reason: '錯誤：勇気。' },
            { text: 'げんき', reason: '錯誤：元気。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「力{ちから}」。'
    },
    {
        id: 'n5_vocab_hyouki_chikara_1',
        prob: '<u>ちから</u>がありません。',
        prob_zh: '沒有 *力氣*。',
        options: [
            { text: '力', reason: '正確！' },
            { text: '刀', reason: '錯誤：かたな（刀）。' },
            { text: '方', reason: '錯誤：かた（方）。' },
            { text: '万', reason: '錯誤：まん（萬）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】力（Power/Strength）。'
    },

    // 92. 地図 (ちず)
    {
        id: 'n5_vocab_kanji_yomi_chizu_1',
        prob: '<u>地図</u>を見ます。',
        prob_zh: '看 *地圖*。',
        options: [
            { text: 'ちづ', reason: '錯誤：現代假名遣用ちず。' },
            { text: 'ちず', reason: '正確！' },
            { text: 'じず', reason: '錯誤。' },
            { text: 'じづ', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「地{ち}図{ず}」。'
    },
    {
        id: 'n5_vocab_hyouki_chizu_1',
        prob: '日本{にほん}の<u>ちず</u>を買{か}いました。',
        prob_zh: '買了日本 *地圖*。',
        options: [
            { text: '地図', reason: '正確！' },
            { text: '地画', reason: '錯誤。' },
            { text: '地園', reason: '錯誤。' },
            { text: '地道', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】地図（Map）。'
    },

    // 93. 父 (ちち)
    {
        id: 'n5_vocab_kanji_yomi_chichi_1',
        prob: '私の<u>父</u>は医者{いしゃ}です。',
        prob_zh: '我 *父親* 是醫生。',
        options: [
            { text: 'はは', reason: '錯誤：母。' },
            { text: 'ちち', reason: '正確！' },
            { text: 'あに', reason: '錯誤：兄。' },
            { text: 'おじ', reason: '錯誤：伯父/叔父。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「父{ちち}」。對外人稱呼自己父親用「父」。'
    },
    {
        id: 'n5_vocab_bunmyaku_chichi_1',
        prob: '田中さんの______は先生ですか。',
        prob_zh: '田中先生的 *父親* 是老師嗎？',
        options: [
            { text: 'お父さん{とう}', reason: '正確！稱呼別人的父親。' },
            { text: '父{ちち}', reason: '錯誤：稱呼自己父親。' },
            { text: '祖父{そふ}', reason: '錯誤：稱呼自己祖父。' },
            { text: '夫{おっと}', reason: '錯誤：稱呼自己丈夫。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】稱謂禮貌\n【解析】稱呼別人的父親用「お父さん」，提到自己的父親用「父」。'
    },

    // 94. 茶色 (ちゃいろ)
    {
        id: 'n5_vocab_kanji_yomi_chairo_1',
        prob: 'その犬は<u>茶色</u>です。',
        prob_zh: '那隻狗是 *咖啡色* 的。',
        options: [
            { text: 'きいろ', reason: '錯誤：黄色。' },
            { text: 'ちゃいろ', reason: '正確！' },
            { text: 'みどり', reason: '錯誤：緑。' },
            { text: 'あいいろ', reason: '錯誤：藍色。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「茶{ちゃ}色{いろ}」。'
    },
    {
        id: 'n5_vocab_bunmyaku_chairo_1',
        prob: '<u>茶色い</u>靴{くつ}を履{は}いています。',
        prob_zh: '穿著 *咖啡色* 的鞋子。',
        options: [
            { text: 'ちゃいろい', reason: '正確！' },
            { text: 'しろい', reason: '錯誤：白い。' },
            { text: 'くろい', reason: '錯誤：黒い。' },
            { text: 'あかい', reason: '錯誤：赤い。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】色彩形容詞\n【解析】茶色い（Brown）。'
    },

    // 95. 茶碗 (ちゃわん)
    {
        id: 'n5_vocab_kanji_yomi_chawan_1',
        prob: 'ご飯を<u>茶碗</u>に入れます。',
        prob_zh: '把飯裝進 *碗* 裡。',
        options: [
            { text: 'ちゃわん', reason: '正確！' },
            { text: 'ちゃわ', reason: '錯誤。' },
            { text: 'おわん', reason: '錯誤：お椀（湯碗），雖類似但由漢字「茶碗」推斷應為ちゃわん。' },
            { text: 'さら', reason: '錯誤：皿。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「茶{ちゃ}碗{わん}」。'
    },
    {
        id: 'n5_vocab_bunmyaku_chawan_1',
        prob: 'この美しい______でお茶を飲みます。',
        prob_zh: '用這個美麗的 *茶碗* 喝茶。',
        options: [
            { text: '茶碗{ちゃわん}', reason: '正確！' },
            { text: '花瓶{かびん}', reason: '錯誤：花瓶。' },
            { text: '帽子{ぼうし}', reason: '錯誤：帽子。' },
            { text: '灰皿{はいざら}', reason: '錯誤：煙灰缸。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】名詞選擇\n【解析】喝茶用的容器是茶碗（也可指飯碗，在此語境為茶具）。'
    }
];
