import { StaticQuestion } from './types';

export const n5VocabBatch26: StaticQuestion[] = [
    // 126. 飲み物 (のみもの)
    {
        id: 'n5_vocab_kanji_yomi_nomimono_1',
        prob: '何か<u>飲み物</u>がほしいです。',
        prob_zh: '想要一點 *飲料*。',
        options: [
            { text: 'のみもの', reason: '正確！' },
            { text: 'たべもの', reason: '錯誤：食べ物（食物）。' },
            { text: 'かいもの', reason: '錯誤：買い物（購物）。' },
            { text: 'よみもの', reason: '錯誤：読み物（讀物）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「飲{の}み物{もの}」。'
    },
    {
        id: 'n5_vocab_hyouki_nomimono_1',
        prob: '冷たい<u>のみもの</u>をください。',
        prob_zh: '請給我冰的 *飲料*。',
        options: [
            { text: '飲み物', reason: '正確！' },
            { text: '飮み物', reason: '錯誤：舊字體。' },
            { text: '食べ物', reason: '錯誤：たべもの。' },
            { text: '飯み物', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】飲み物（Drink/Beverage）。'
    },

    // 127. 飲む (のむ)
    {
        id: 'n5_vocab_kanji_yomi_nomu_1',
        prob: 'コーヒーを<u>飲み</u>ます。',
        prob_zh: '*喝* 咖啡。',
        options: [
            { text: 'のみ', reason: '正確！' },
            { text: 'よみ', reason: '錯誤：読み。' },
            { text: 'すみ', reason: '錯誤：住み/済み。' },
            { text: 'うみ', reason: '錯誤：海/生み。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「飲{の}む」。'
    },
    {
        id: 'n5_vocab_bunmyaku_nomu_1',
        prob: '薬{くすり}を______ください。',
        prob_zh: '請 *吃*（喝）藥。',
        options: [
            { text: '飲んで', reason: '正確！日語吃藥用「飲む」。' },
            { text: '食べて', reason: '錯誤：日語不說食べる薬。' },
            { text: '読んで', reason: '錯誤：讀。' },
            { text: '休んで', reason: '錯誤：休息。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】動詞搭配\n【解析】薬を飲む（Take medicine）。'
    },

    // 128. 乗る (のる)
    {
        id: 'n5_vocab_kanji_yomi_noru_1',
        prob: 'バスに<u>乗り</u>ます。',
        prob_zh: '*搭* 巴士。',
        options: [
            { text: 'のり', reason: '正確！' },
            { text: 'おり', reason: '錯誤：降り（下車）。' },
            { text: 'かり', reason: '錯誤：借り（借入）。' },
            { text: 'とり', reason: '錯誤：取り（拿）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「乗{の}る」。'
    },
    {
        id: 'n5_vocab_bunmyaku_noru_1',
        prob: '駅で電車に______。',
        prob_zh: '在車站 *搭* 電車。',
        options: [
            { text: '乗りました', reason: '正確！電車に乗る。' },
            { text: '降りました', reason: '錯誤：電車を降りる（助詞不同）。' },
            { text: '登りました', reason: '錯誤：山に登る。' },
            { text: '入りました', reason: '錯誤：入る。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】動詞搭配\n【解析】電車に乗る（Get on the train）。'
    },

    // 129. 歯 (は)
    {
        id: 'n5_vocab_kanji_yomi_ha_1',
        prob: '毎朝、<u>歯</u>を磨{みが}きます。',
        prob_zh: '每天早上刷 *牙*。',
        options: [
            { text: 'は', reason: '正確！' },
            { text: 'め', reason: '錯誤：目（眼）。' },
            { text: 'て', reason: '錯誤：手（手）。' },
            { text: 'け', reason: '錯誤：毛（毛）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「歯{は}」。'
    },
    // Skipping hyouki for 歯 as it is simple but maybe useful.
    // Let's create a context question instead since reading is single syllable.
    {
        id: 'n5_vocab_bunmyaku_ha_1',
        prob: '甘{あま}いものを食{た}べましたから、______が痛{いた}いです。',
        prob_zh: '因為吃了甜食，所以 *牙* 痛。',
        options: [
            { text: '歯', reason: '正確！' },
            { text: '鼻', reason: '錯誤：はな（鼻）。' },
            { text: '耳', reason: '錯誤：みみ（耳）。' },
            { text: '背', reason: '錯誤：せ（背）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】身體部位\n【解析】吃甜食容易蛀牙（歯が痛い）。'
    },

    // 130. パーティー (パーティー)
    {
        id: 'n5_vocab_katakana_party_1',
        prob: '明日、<u>パーティー</u>をします。',
        prob_zh: '明天要辦 *派對*。',
        options: [
            { text: 'パーティー', reason: '正確！' },
            { text: 'パン', reason: '錯誤：麵包。' },
            { text: 'ページ', reason: '錯誤：頁。' },
            { text: 'ペン', reason: '錯誤：筆。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_katakana',
        correctRule: '【考點】片假名詞彙\n【解析】パーティー（Party）。'
    },
    {
        id: 'n5_vocab_bunmyaku_party_1',
        prob: '日曜日に友達と______へ行きます。',
        prob_zh: '星期天要和朋友去 *派對*。',
        options: [
            { text: 'パーティー', reason: '正確！' },
            { text: 'タクシー', reason: '錯誤：計程車。' },
            { text: 'ニュース', reason: '錯誤：新聞。' },
            { text: 'テープ', reason: '錯誤：錄音帶。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】外來語\n【解析】パーティーへ行く（Go to a party）。'
    }
];
