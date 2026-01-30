import { StaticQuestion } from './types';

export const n5VocabBatch13: StaticQuestion[] = [
    // 61. 近い (ちかい)
    {
        id: 'n5_vocab_kanji_yomi_chikai_1',
        prob: '駅{えき}から<u>近い</u>です。',
        prob_zh: '離車站很 *近*。',
        options: [
            { text: 'とおい', reason: '錯誤：遠い。' },
            { text: 'ちかい', reason: '正確！' },
            { text: 'はやい', reason: '錯誤：速い/早い。' },
            { text: 'おそい', reason: '錯誤：遅い。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「近{ちか}い」。'
    },
    {
        id: 'n5_vocab_hyouki_chikai_1',
        prob: 'ここから<u>ちかい</u>です。',
        prob_zh: '離這裡很 *近*。',
        options: [
            { text: '近い', reason: '正確！' },
            { text: '辺い', reason: '錯誤。' },
            { text: '道い', reason: '錯誤。' },
            { text: '通い', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】近い。'
    },
    {
        id: 'n5_vocab_ruigigo_chikai_1',
        prob: '<u>近い</u>。',
        prob_zh: '*近*。（選出反義詞）',
        options: [
            { text: '遠{とお}い', reason: '正確！近 <-> 遠。' },
            { text: '広{ひろ}い', reason: '錯誤。' },
            { text: '寒{さむ}い', reason: '錯誤。' },
            { text: '深{ふか}い', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】反義詞\n【解析】近い <-> 遠い。'
    },

    // 62. 地下鉄 (ちかてつ)
    {
        id: 'n5_vocab_kanji_yomi_chikatetsu_1',
        prob: '<u>地下鉄</u>に乗{の}ります。',
        prob_zh: '搭乘 *地下鐵*。',
        options: [
            { text: 'ちかてつ', reason: '正確！' },
            { text: 'ちかでつ', reason: '錯誤。' },
            { text: 'じかてつ', reason: '錯誤。' },
            { text: 'ちがてつ', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「地{ち}下{か}鉄{てつ}」。'
    },
    {
        id: 'n5_vocab_hyouki_chikatetsu_1',
        prob: '<u>ちかてつ</u>で行{い}きます。',
        prob_zh: '搭 *地下鐵* 去。',
        options: [
            { text: '地下鉄', reason: '正確！' },
            { text: '地下鐵', reason: '錯誤：舊字體（雖然漢字通，但標準日語用鉄）。' },
            { text: '地化鉄', reason: '錯誤。' },
            { text: '地家鉄', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】地下鉄。'
    },
    {
        id: 'n5_vocab_bunmyaku_chikatetsu_1',
        prob: 'バスと______と、どちらが速{はや}いですか。',
        prob_zh: '公車和 *地下鐵*，哪個比較快？',
        options: [
            { text: '地下鉄{ちかてつ}', reason: '正確！交通工具比較。' },
            { text: '駅{えき}', reason: '錯誤：車站。' },
            { text: '切符{きっぷ}', reason: '錯誤：車票。' },
            { text: '道{みち}', reason: '錯誤：道路。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】交通工具詞彙\n【解析】地下鉄。'
    },

    // 63. 地図 (ちず)
    {
        id: 'n5_vocab_kanji_yomi_chizu_1',
        prob: '<u>地図</u>を見{み}ます。',
        prob_zh: '看 *地圖*。',
        options: [
            { text: 'ちと', reason: '錯誤。' },
            { text: 'ちず', reason: '正確！' },
            { text: 'じず', reason: '錯誤。' },
            { text: 'ちす', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「地{ち}図{ず}」。注意濁音。'
    },
    {
        id: 'n5_vocab_hyouki_chizu_1',
        prob: '日本の<u>ちず</u>。',
        prob_zh: '日本 *地圖*。',
        options: [
            { text: '地画', reason: '錯誤。' },
            { text: '地回', reason: '錯誤。' },
            { text: '地図', reason: '正確！' },
            { text: '地圖', reason: '錯誤：舊字體（圖 -> 図）。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】図（Zhu -> Zu）。'
    },
    {
        id: 'n5_vocab_bunmyaku_chizu_1',
        prob: '道{みち}がわかりませんから、______を見{み}ます。',
        prob_zh: '因為不知道路，所以看 *地圖*。',
        options: [
            { text: '地図{ちず}', reason: '正確！' },
            { text: '手紙{てがみ}', reason: '錯誤：信。' },
            { text: '切手{きって}', reason: '錯誤：郵票。' },
            { text: '写真{しゃしん}', reason: '錯誤：照片。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈判斷\n【解析】不知路 -> 看地圖。'
    },

    // 64. ちょっと (ちょっと)
    {
        id: 'n5_vocab_kana_chotto_1',
        prob: '<u>ちょっと</u>待{ま}ってください。',
        prob_zh: '請 *稍* 等一下。',
        options: [
            { text: 'ちゅっと', reason: '錯誤。' },
            { text: 'ちょっと', reason: '正確！' },
            { text: 'じょっと', reason: '錯誤。' },
            { text: 'ちょと', reason: '錯誤：促音。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kana',
        correctRule: '【考點】促音與拗音\n【解析】cho-t-to。'
    },
    {
        id: 'n5_vocab_bunmyaku_chotto_1',
        prob: 'あの店{みせ}で______休{やす}みましょう。',
        prob_zh: '在那家店 *稍微* 休息一下吧。',
        options: [
            { text: 'ちょっと', reason: '正確！' },
            { text: 'ずっと', reason: '錯誤：一直。' },
            { text: 'もっと', reason: '錯誤：更。' },
            { text: 'きっと', reason: '錯誤：一定。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】副詞用法\n【解析】休息片刻用「ちょっと」。'
    },

    // 65. ちょうど (ちょうど)
    {
        id: 'n5_vocab_kana_choudo_1',
        prob: '今{いま}、<u>ちょうど</u>3時{じ}です。',
        prob_zh: '現在 *剛好* 是3點。',
        options: [
            { text: 'ちょうと', reason: '錯誤。' },
            { text: 'ちょうど', reason: '正確！' },
            { text: 'ちようど', reason: '錯誤：拗音。' },
            { text: 'じょうど', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kana',
        correctRule: '【考點】長音與濁音\n【解析】cho-u-do。'
    },
    {
        id: 'n5_vocab_bunmyaku_choudo_1',
        prob: 'この靴{くつ}は私{わたし}に______いいです。',
        prob_zh: '這雙鞋對我來說 *剛好（合適）*。',
        options: [
            { text: 'ちょうど', reason: '正確！ちょうどいい（正好/合適）。' },
            { text: 'あまり', reason: '錯誤：需接否定。' },
            { text: 'だいたい', reason: '錯誤：大概。' },
            { text: 'たくさん', reason: '錯誤：很多。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】常用搭配\n【解析】ちょうどいい（Just right/Fits well）。'
    }
];
