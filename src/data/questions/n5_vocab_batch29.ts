import { StaticQuestion } from './types';

export const n5VocabBatch29: StaticQuestion[] = [
    // 141. 走る (はしる)
    {
        id: 'n5_vocab_kanji_yomi_hashiru_1',
        prob: '公園を<u>走り</u>ます。',
        prob_zh: '*跑* 過公園。',
        options: [
            { text: 'はしり', reason: '正確！' },
            { text: 'あるき', reason: '錯誤：歩き。' },
            { text: 'いそぎ', reason: '錯誤：急ぎ。' },
            { text: 'およぎ', reason: '錯誤：泳ぎ。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「走{はし}る」。'
    },
    {
        id: 'n5_vocab_bunmyaku_hashiru_1',
        prob: '遅れますから、______。',
        prob_zh: '因為要遲到了，所以 *跑* 吧。',
        options: [
            { text: '走りましょう', reason: '正確！' },
            { text: '歩きましょう', reason: '錯誤：慢慢走會遲到。' },
            { text: '待ちましょう', reason: '錯誤：等。' },
            { text: '休みましょう', reason: '錯誤：休息。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】動詞意涵\n【解析】趕時間所以要跑。'
    },

    // 142. バス (バス)
    {
        id: 'n5_vocab_katakana_bus_1',
        prob: '学校へ<u>バス</u>で行きます。',
        prob_zh: '搭 *巴士/公車* 去學校。',
        options: [
            { text: 'バス', reason: '正確！' },
            { text: 'ガス', reason: '錯誤：瓦斯。' },
            { text: 'ボス', reason: '錯誤：老闆 (Boss)。' },
            { text: 'ミス', reason: '錯誤：失誤 (Miss)。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_katakana',
        correctRule: '【考點】片假名詞彙\n【解析】バス（Bus）。'
    },

    // 143. バター (バター)
    {
        id: 'n5_vocab_katakana_butter_1',
        prob: 'パンに<u>バター</u>をつけます。',
        prob_zh: '在麵包上塗 *奶油*。',
        options: [
            { text: 'バター', reason: '正確！' },
            { text: 'ギター', reason: '錯誤：吉他。' },
            { text: 'ボタン', reason: '錯誤：鈕扣。' },
            { text: 'パター', reason: '錯誤：推桿 (Putter)。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_katakana',
        correctRule: '【考點】片假名詞彙\n【解析】バター（Butter）。'
    },

    // 144. 二十歳 (はたち)
    {
        id: 'n5_vocab_kanji_yomi_hatachi_1',
        prob: '弟は<u>二十歳</u>です。',
        prob_zh: '弟弟 *二十歲*。',
        options: [
            { text: 'はたち', reason: '正確！特殊讀音。' },
            { text: 'にじゅうさい', reason: '錯誤：雖然有這說法，但漢字通常寫「20歳」。寫「二十歲」常讀はたち。' },
            { text: 'ふつか', reason: '錯誤：二日。' },
            { text: 'はつか', reason: '錯誤：二十日。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】特殊讀音\n【解析】20歳（二十歳）讀作「はたち」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_hatachi_2',
        prob: '今年、<u>はたち</u>になります。',
        prob_zh: '今年要滿 *二十歲* 了。',
        options: [
            { text: '二十歳', reason: '正確！' },
            { text: '二十才', reason: '錯誤：才也是歲的簡寫，但在選漢字題優先選正規的「歳」或特定詞形。此處「二十歳」為固定寫法。' },
            { text: '二十日', reason: '錯誤：はつか。' },
            { text: '二土歳', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】はたち（20 years old）。'
    },

    // 145. 働く (はたらく)
    {
        id: 'n5_vocab_kanji_yomi_hataraku_1',
        prob: '父は会社で<u>働いて</u>います。',
        prob_zh: '父親在公司 *工作*。',
        options: [
            { text: 'はたらいて', reason: '正確！' },
            { text: 'うごいて', reason: '錯誤：動いて（移動/動）。' },
            { text: 'あるいて', reason: '錯誤：歩いて。' },
            { text: 'およいで', reason: '錯誤：泳いで。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「働{はたら}く」。'
    },
    {
        id: 'n5_vocab_bunmyaku_hataraku_1',
        prob: '毎日、朝から晩まで______。',
        prob_zh: '每天從早 *工作* 到晚。',
        options: [
            { text: '働きます', reason: '正確！' },
            { text: '休みます', reason: '錯誤：休息。' },
            { text: '寝ます', reason: '錯誤：睡覺。' },
            { text: '遊びます', reason: '錯誤：玩。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】動詞意涵\n【解析】長時間的勞動用「働く」。'
    }
];
