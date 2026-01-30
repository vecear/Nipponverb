import { StaticQuestion } from './types';

export const n5VocabBatch23: StaticQuestion[] = [
    // 111. 何 (なん/なに)
    {
        id: 'n5_vocab_kanji_yomi_nani_1',
        prob: 'そこに<u>何</u>がありますか。',
        prob_zh: '那裡有 *什麼* 嗎？',
        options: [
            { text: 'なに', reason: '正確！助詞「が」前面讀なに。' },
            { text: 'なん', reason: '錯誤：助詞「の」「で」等前面讀なん。' },
            { text: 'どれ', reason: '錯誤：哪個。' },
            { text: 'なぜ', reason: '錯誤：為什麼。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「何」接助詞「が」時讀「なに」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_nan_1',
        prob: 'それは<u>何</u>ですか。',
        prob_zh: '那是 *什麼*？',
        options: [
            { text: 'なに', reason: '錯誤。' },
            { text: 'なん', reason: '正確！後接「で（是）」、「の」、「で」等時讀なん。' },
            { text: 'だれ', reason: '錯誤：誰。' },
            { text: 'どこ', reason: '錯誤：哪裡。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「何」後接tdn行音時通常讀「なん」。'
    },

    // 112. 二階 (にかい)
    {
        id: 'n5_vocab_kanji_yomi_nikai_1',
        prob: '私の部屋は<u>二階</u>です。',
        prob_zh: '我的房間在 *二樓*。',
        options: [
            { text: 'にかい', reason: '正確！' },
            { text: 'にいかい', reason: '錯誤。' },
            { text: 'にっかい', reason: '錯誤。' },
            { text: 'ふたかい', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「二{に}階{かい}」。'
    },
    {
        id: 'n5_vocab_hyouki_nikai_1',
        prob: 'デパートの<u>にかい</u>で服を買いました。',
        prob_zh: '在百貨公司的 *二樓* 買了衣服。',
        options: [
            { text: '二階', reason: '正確！' },
            { text: '一階', reason: '錯誤：いっかい。' },
            { text: '三階', reason: '錯誤：さんがい。' },
            { text: '土階', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】二階（Second floor）。'
    },

    // 113. 賑やか (にぎやか)
    {
        id: 'n5_vocab_hyouki_nigiyaka_1',
        prob: 'この町はいつも<u>にぎやか</u>です。',
        prob_zh: '這個城鎮總是 *很熱鬧*。',
        options: [
            { text: '賑やか', reason: '正確！' },
            { text: '静か', reason: '錯誤：しずか。' },
            { text: '健やか', reason: '錯誤：すこやか。' },
            { text: '晴れやか', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】にぎやか（Lively）。'
    },
    {
        id: 'n5_vocab_bunmyaku_nigiyaka_1',
        prob: '祭り{まつり}ですから、町{まち}が______です。',
        prob_zh: '因為是慶典，所以城鎮 *很熱鬧*。',
        options: [
            { text: 'にぎやか', reason: '正確！' },
            { text: 'しずか', reason: '錯誤：安靜。' },
            { text: 'ひま', reason: '錯誤：閒暇。' },
            { text: 'じょうず', reason: '錯誤：擅長。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】形容詞選擇\n【解析】祭典通常熱鬧（にぎやか）。'
    },

    // 114. 肉 (にく)
    {
        id: 'n5_vocab_kanji_yomi_niku_1',
        prob: '魚と<u>肉</u>と、どちらが好きですか。',
        prob_zh: '魚和 *肉*，喜歡哪一個？',
        options: [
            { text: 'にく', reason: '正確！' },
            { text: 'ねく', reason: '錯誤。' },
            { text: 'ほく', reason: '錯誤。' },
            { text: 'むく', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「肉{にく}」。'
    },
    {
        id: 'n5_vocab_hyouki_niku_1',
        prob: 'スーパーで<u>にく</u>を買{か}いました。',
        prob_zh: '在超市買了 *肉*。',
        options: [
            { text: '肉', reason: '正確！' },
            { text: '内', reason: '錯誤：うち（内）。' },
            { text: '円', reason: '錯誤：えん（圓）。' },
            { text: '同', reason: '錯誤：どう（同）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】肉（Meat）。'
    },

    // 115. 西 (にし)
    {
        id: 'n5_vocab_kanji_yomi_nishi_1',
        prob: '太陽{たいよう}は<u>西</u>に沈{しず}みます。',
        prob_zh: '太陽從 *西邊* 落下。',
        options: [
            { text: 'にし', reason: '正確！' },
            { text: 'ひがし', reason: '錯誤：東。' },
            { text: 'みなみ', reason: '錯誤：南。' },
            { text: 'きた', reason: '錯誤：北。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「西{にし}」。'
    },
    {
        id: 'n5_vocab_hyouki_nishi_1',
        prob: 'この国の<u>にし</u>には山があります。',
        prob_zh: '這個國家的 *西部* 有山。',
        options: [
            { text: '西', reason: '正確！' },
            { text: '東', reason: '錯誤：ひがし。' },
            { text: '南', reason: '錯誤：みなみ。' },
            { text: '北', reason: '錯誤：きた。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】西（West）。'
    }
];
