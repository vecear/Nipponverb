import { StaticQuestion } from './types';

export const n5VocabBatch15: StaticQuestion[] = [
    // 71. 大抵 (たいてい)
    {
        id: 'n5_vocab_kana_taitei_1',
        prob: '日曜日は<u>たいてい</u>家にいます。',
        prob_zh: '星期天 *大致上（通常）* 都在家。',
        options: [
            { text: '大抵', reason: '正確！' },
            { text: '大提', reason: '錯誤。' },
            { text: '大低', reason: '錯誤。' },
            { text: '大定', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kana', // Actually hyouki/kanji
        correctRule: '【考點】漢字書寫\n【解析】大抵（たいてい）。通常只寫假名。'
    },
    {
        id: 'n5_vocab_bunmyaku_taitei_1',
        prob: '朝{あさ}は______パンを食{た}べます。',
        prob_zh: '早上 *通常（大概）* 吃麵包。',
        options: [
            { text: 'たいてい', reason: '正確！Usually/Mostly. (頻率高)' },
            { text: 'ぜんぜん', reason: '錯誤：完全不（需接否定）。' },
            { text: 'あまり', reason: '錯誤：不太（需接否定）。' },
            { text: 'はじめて', reason: '錯誤：第一次。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】頻率副詞\n【解析】表示習慣性的動作。'
    },

    // 72. 台風 (たいふう)
    {
        id: 'n5_vocab_kanji_yomi_taifuu_1',
        prob: '<u>台風</u>が来{き}ました。',
        prob_zh: '*颱風* 來了。',
        options: [
            { text: 'だいふう', reason: '錯誤。' },
            { text: 'たいふ', reason: '錯誤：短音。' },
            { text: 'たいふう', reason: '正確！' },
            { text: 'おおあめ', reason: '錯誤：大雨。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「台{たい}風{ふう}」。注意ふう是長音。'
    },
    {
        id: 'n5_vocab_bunmyaku_taifuu_1',
        prob: '______で木{き}が倒{たお}れました。',
        prob_zh: '因為 *颱風* ，樹倒了。',
        options: [
            { text: '台風{たいふう}', reason: '正確！' },
            { text: '天気{てんき}', reason: '錯誤：天氣。' },
            { text: '電気{でんき}', reason: '錯誤：電/電燈。' },
            { text: '元気{げんき}', reason: '錯誤：精神。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】自然現象\n【解析】造成災害的通常是台風。'
    },

    // 73. たくさん (たくさん)
    {
        id: 'n5_vocab_bunmyaku_takusan_1',
        prob: '人が______います。',
        prob_zh: '有 *很多* 人。',
        options: [
            { text: 'たくさん', reason: '正確！' },
            { text: 'たいてい', reason: '錯誤：大抵。' },
            { text: 'たしか', reason: '錯誤：好像是/確信。' },
            { text: 'たち', reason: '錯誤：~們。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】數量副詞\n【解析】很多（人/物）。'
    },
    {
        id: 'n5_vocab_bunmyaku_takusan_2',
        prob: '宿題{しゅくだい}が______あります。',
        prob_zh: '有 *很多* 作業。',
        options: [
            { text: 'たくさん', reason: '正確！' },
            { text: 'よく', reason: '錯誤：常常/很好地。' },
            { text: 'だんだん', reason: '錯誤：逐漸。' },
            { text: 'いろいろ', reason: '錯誤：各式各樣（雖通，但たくさん強調數量多，語境更自然）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】副詞選擇\n【解析】表示數量多用たくさん。'
    },

    // 74. タクシー (タクシー)
    {
        id: 'n5_vocab_kana_takusii_1',
        prob: '<u>タクシー</u>を呼{よ}びます。',
        prob_zh: '叫 *計程車*。',
        options: [
            { text: 'タケシー', reason: '錯誤。' },
            { text: 'タクシー', reason: '正確！' },
            { text: 'タラシー', reason: '錯誤。' },
            { text: 'ダクシー', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kana',
        correctRule: '【考點】片假名\n【解析】Taxi -> タクシー。'
    },
    {
        id: 'n5_vocab_bunmyaku_takusii_1',
        prob: '荷物{にもつ}が重{おも}いですから、______で帰{かえ}ります。',
        prob_zh: '因為行李很重，所以搭 *計程車* 回去。',
        options: [
            { text: 'タクシー', reason: '正確！' },
            { text: 'テレビ', reason: '錯誤：電視。' },
            { text: 'テーブル', reason: '錯誤：桌子。' },
            { text: 'テープ', reason: '錯誤：錄音帶/膠帶。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】交通工具\n【解析】行李重不想走路 -> 搭車。選項只有タクシー是交通工具。'
    },

    // 75. 出す (だす)
    {
        id: 'n5_vocab_kanji_yomi_dasu_1',
        prob: '手紙{てがみ}を<u>出し</u>ました。',
        prob_zh: '*寄* 了信。',
        options: [
            { text: 'でし', reason: '錯誤。' },
            { text: 'だし', reason: '正確！' },
            { text: 'いし', reason: '錯誤。' },
            { text: 'おし', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「出{だ}す」。在此為ます形「出{だ}し」。'
    },
    {
        id: 'n5_vocab_hyouki_dasu_1',
        prob: 'かばんから本{ほん}を<u>だして</u>ください。',
        prob_zh: '請把書從包包裡 *拿出來*。',
        options: [
            { text: '入して', reason: '錯誤：いれて。' },
            { text: '出して', reason: '正確！' },
            { text: '外して', reason: '錯誤：はずして。' },
            { text: '去して', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】出す（拿出）。'
    },
    {
        id: 'n5_vocab_bunmyaku_dasu_1',
        prob: '答えを______ください。',
        prob_zh: '請 *交（提出）* 答案。',
        options: [
            { text: '出して{だ}', reason: '正確！提出。' },
            { text: '出て{で}', reason: '錯誤：出ます（離開/出現），自動詞。' },
            { text: '入って{はい}', reason: '錯誤：進入。' },
            { text: '入れて{い}', reason: '錯誤：放入。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】動詞選擇\n【解析】「出す」是他動詞，表示拿出、提出、發出。'
    }
];
