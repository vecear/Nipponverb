import { StaticQuestion } from './types';

export const n5VocabBatch18: StaticQuestion[] = [
    // 86. 小さい (ちいさい)
    {
        id: 'n5_vocab_kanji_yomi_chiisai_1',
        prob: 'そのいすは<u>小さい</u>です。',
        prob_zh: '那張椅子很 *小*。',
        options: [
            { text: 'ちさい', reason: '錯誤：長音。' },
            { text: 'ちいさい', reason: '正確！' },
            { text: 'すくない', reason: '錯誤：少ない。' },
            { text: 'ひくい', reason: '錯誤：低い。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「小{ちい}さい」。'
    },
    {
        id: 'n5_vocab_bunmyaku_chiisai_1',
        prob: 'このシャツは私には______です。',
        prob_zh: '這件襯衫對我來說太 *小* 了。',
        options: [
            { text: '小さい{ちい}', reason: '正確！' },
            { text: '少ない{すく}', reason: '錯誤：少（數量）。' },
            { text: '若い{わか}', reason: '錯誤：年輕。' },
            { text: '忙しい{いそが}', reason: '錯誤：忙碌。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】形容詞選擇\n【解析】衣服尺寸大小用 大きい/小さい。'
    },

    // 87. 近い (ちかい)
    {
        id: 'n5_vocab_kanji_yomi_chikai_1',
        prob: '家は学校から<u>近い</u>です。',
        prob_zh: '家離學校很 *近*。',
        options: [
            { text: 'とおい', reason: '錯誤：遠い。' },
            { text: 'ちかい', reason: '正確！' },
            { text: 'おそい', reason: '錯誤：遅い。' },
            { text: 'はやい', reason: '錯誤：早い/速い。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「近{ちか}い」。'
    },
    {
        id: 'n5_vocab_hyouki_chikai_1',
        prob: '駅{えき}から<u>ちかい</u>このホテルは便利{べんり}です。',
        prob_zh: '這間離車站很 *近* 的飯店很方便。',
        options: [
            { text: '近い', reason: '正確！' },
            { text: '辺い', reason: '錯誤。' },
            { text: '迫い', reason: '錯誤。' },
            { text: '遠い', reason: '錯誤：とおい。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】近い。'
    },

    // 88. 地下鉄 (ちかてつ)
    {
        id: 'n5_vocab_kanji_yomi_chikatetsu_1',
        prob: '<u>地下鉄</u>で会社へ行きます。',
        prob_zh: '搭 *地下鐵* 去公司。',
        options: [
            { text: 'ちかてつ', reason: '正確！' },
            { text: 'ちがてつ', reason: '錯誤。' },
            { text: 'じかてつ', reason: '錯誤。' },
            { text: 'ちかでつ', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「地{ち}下{か}鉄{てつ}」。'
    },
    {
        id: 'n5_vocab_bunmyaku_chikatetsu_1',
        prob: 'バスは遅{おそ}いですから、______で行きましょう。',
        prob_zh: '因為公車很慢，所以搭 *地下鐵* 去吧。',
        options: [
            { text: '地下鉄{ちかてつ}', reason: '正確！' },
            { text: '図書館{としょかん}', reason: '錯誤：圖書館。' },
            { text: '映画館{えいがかん}', reason: '錯誤：電影院。' },
            { text: '大使館{たいしかん}', reason: '錯誤：大使館。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】交通工具\n【解析】因為公車慢，選擇其他交通工具。選項只有地下鉄是交通工具。'
    },

    // 89. 違う (ちがう)
    {
        id: 'n5_vocab_kanji_yomi_chigau_1',
        prob: '答えが<u>違い</u>ます。',
        prob_zh: '答案 *不對（不同）*。',
        options: [
            { text: 'まちがい', reason: '錯誤。' },
            { text: 'ちがい', reason: '正確！' },
            { text: 'たがい', reason: '錯誤。' },
            { text: 'わるい', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「違{ちが}う」。在此為ます形（ちがいます）。'
    },
    {
        id: 'n5_vocab_hyouki_chigau_1',
        prob: '約束{やくそく}の時間{じかん}と<u>ちがいます</u>。',
        prob_zh: '和約定的時間 *不一樣*。',
        options: [
            { text: '違います', reason: '正確！' },
            { text: '遠います', reason: '錯誤：とおい。' },
            { text: '連います', reason: '錯誤。' },
            { text: '運います', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】違う（Different）。'
    },
    {
        id: 'n5_vocab_bunmyaku_chigau_1',
        prob: '「これは佐藤さんの本ですか。」「いいえ、______。」',
        prob_zh: '「這是佐藤先生的書嗎？」「不， *不是*。」',
        options: [
            { text: '違います{ちが}', reason: '正確！' },
            { text: 'ありません', reason: '錯誤：通常指「沒有」（存在）。否定判斷用「いいえ、ちがいます」或「いいえ、そうじゃありません」。' },
            { text: 'しません', reason: '錯誤：不做。' },
            { text: '知りません', reason: '錯誤：不知道。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】常用表達\n【解析】否定對方的確認時，常用「いいえ、違います」。'
    },

    // 90. 近く (ちかく)
    {
        id: 'n5_vocab_bunmyaku_chikaku_1',
        prob: '学校の______に郵便局{ゆうびんきょく}があります。',
        prob_zh: '學校 *附近* 有郵局。',
        options: [
            { text: '近く{ちか}', reason: '正確！' },
            { text: '近い{ちか}', reason: '錯誤：形容詞接在「の」後需名詞化。' },
            { text: '近くて{ちか}', reason: '錯誤。' },
            { text: '近かった{ちか}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】詞類活用/名詞化\n【解析】「の」後面接名詞用法。「近く」可作名詞。'
    },
    {
        id: 'n5_vocab_bunmyaku_chikaku_2',
        prob: '______のスーパーへ行きます。',
        prob_zh: '要去 *附近* 的超市。',
        options: [
            { text: '近く', reason: '正確！' },
            { text: '近い', reason: '錯誤：近いスーパー是可以的（形容詞直接修飾），但「近いのスーパー」是錯的。' },
            { text: '近くて', reason: '錯誤。' },
            { text: '近かった', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】名詞修飾\n【解析】「近くのスーパー」（附近的超市）。'
    }
];
