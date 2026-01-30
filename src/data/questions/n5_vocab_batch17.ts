import { StaticQuestion } from './types';

export const n5VocabBatch17: StaticQuestion[] = [
    // 81. 食べ物 (たべもの)
    {
        id: 'n5_vocab_kanji_yomi_tabemono_1',
        prob: '好{す}きな<u>食べ物</u>は何{なん}ですか。',
        prob_zh: '喜歡的 *食物* 是什麼？',
        options: [
            { text: 'たべもの', reason: '正確！' },
            { text: 'のみもの', reason: '錯誤：飲み物。' },
            { text: 'かいもの', reason: '錯誤：買い物。' },
            { text: 'きもの', reason: '錯誤：着物。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「食{た}べ物{もの}」。'
    },
    {
        id: 'n5_vocab_hyouki_tabemono_1',
        prob: 'いろいろな<u>たべもの</u>があります。',
        prob_zh: '有各種 *食物*。',
        options: [
            { text: '食べ物', reason: '正確！' },
            { text: '食物', reason: '錯誤：しょくもつ（雖然有這個詞，但N5單字表通常用食べ物）。' },
            { text: '飯物', reason: '錯誤。' },
            { text: '食ベ物', reason: '錯誤：ベ是片假名。' } // Tricky, but standard kanji test usually checks exact kanji.
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】食べ物。'
    },

    // 82. 食べる (たべる)
    {
        id: 'n5_vocab_kanji_yomi_taberu_1',
        prob: 'ご饭を<u>食べ</u>ます。',
        prob_zh: '*吃* 飯。',
        options: [
            { text: 'のべ', reason: '錯誤。' },
            { text: 'たべ', reason: '正確！' },
            { text: 'なべ', reason: '錯誤。' },
            { text: 'よべ', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「食{た}べる」。'
    },
    {
        id: 'n5_vocab_bunmyaku_taberu_1',
        prob: 'レストランで晩{ばん}ご飯を______。',
        prob_zh: '在餐廳 *吃* 晚餐。',
        options: [
            { text: '食べました{た}', reason: '正確！' },
            { text: '飲みました{の}', reason: '錯誤：喝。' },
            { text: '読みました{よ}', reason: '錯誤：讀。' },
            { text: '見ました{み}', reason: '錯誤：看。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】動詞搭配\n【解析】飯を食べる。'
    },

    // 83. 卵 (たまご)
    {
        id: 'n5_vocab_kanji_yomi_tamago_1',
        prob: '<u>卵</u>を3つ買{か}いました。',
        prob_zh: '買了三個 *雞蛋*。',
        options: [
            { text: 'あなご', reason: '錯誤：穴子（鰻魚）。' },
            { text: 'たまご', reason: '正確！' },
            { text: 'たばこ', reason: '錯誤：香菸。' },
            { text: 'ひよこ', reason: '錯誤：小雞。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「卵{たまご}」。'
    },
    {
        id: 'n5_vocab_hyouki_tamago_1',
        prob: '<u>たまご</u>料理{りょうり}を作{つく}ります。',
        prob_zh: '做 *蛋* 料理。',
        options: [
            { text: '卵', reason: '正確！' },
            { text: '令', reason: '錯誤。' },
            { text: '印', reason: '錯誤。' },
            { text: '丸', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】卵。'
    },

    // 84. 誰 (だれ)
    {
        id: 'n5_vocab_kanji_yomi_dare_1',
        prob: 'あの人は<u>誰</u>ですか。',
        prob_zh: '那個人是 *誰*？',
        options: [
            { text: 'どれ', reason: '錯誤：哪個（物品）。' },
            { text: 'だれ', reason: '正確！' },
            { text: 'なに', reason: '錯誤：什麼。' },
            { text: 'いつ', reason: '錯誤：何時。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「誰{だれ}」。'
    },
    {
        id: 'n5_vocab_bunmyaku_dare_1',
        prob: 'そこに______がいますか。',
        prob_zh: '那裡有 *誰* 在嗎？',
        options: [
            { text: 'だれ', reason: '正確！針對人。' },
            { text: 'なに', reason: '錯誤：針對物。' },
            { text: 'どこ', reason: '錯誤：針對地點。' },
            { text: 'いつ', reason: '錯誤：針對時間。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】疑問詞\n【解析】詢問人（います）用「誰」。'
    },
    {
        id: 'n5_vocab_hyouki_dare_1',
        prob: '<u>だれ</u>の靴{くつ}ですか。',
        prob_zh: '是 *誰* 的鞋子？',
        options: [
            { text: '誰', reason: '正確！' },
            { text: '推', reason: '錯誤。' },
            { text: '進', reason: '錯誤。' },
            { text: '準', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】誰。'
    },

    // 85. 誕生日 (たんじょうび)
    {
        id: 'n5_vocab_kanji_yomi_tanjoubi_1',
        prob: '今日は<u>誕生日</u>です。',
        prob_zh: '今天是 *生日*。',
        options: [
            { text: 'たんじょうび', reason: '正確！' },
            { text: 'たんしょび', reason: '錯誤。' },
            { text: 'だんじょうび', reason: '錯誤。' },
            { text: 'たんじょび', reason: '錯誤：短音。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「誕{たん}生{じょう}日{び}」。'
    },
    {
        id: 'n5_vocab_bunmyaku_tanjoubi_1',
        prob: '母の______に花{はな}をあげました。',
        prob_zh: '在母親 *生日* 送了花。',
        options: [
            { text: '誕生日{たんじょうび}', reason: '正確！' },
            { text: '月曜日{げつようび}', reason: '錯誤：星期一。' },
            { text: '天気{てんき}', reason: '錯誤：天氣。' },
            { text: '病気{びょうき}', reason: '錯誤：生病。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】名詞選擇\n【解析】送禮物的場合通常是生日。'
    }
];
