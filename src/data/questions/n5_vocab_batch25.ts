import { StaticQuestion } from './types';

export const n5VocabBatch25: StaticQuestion[] = [
    // 121. ネクタイ (ネクタイ)
    {
        id: 'n5_vocab_katakana_necktie_1',
        prob: '父に<u>ネクタイ</u>をあげました。',
        prob_zh: '送了 *領帶* 給父親。',
        options: [
            { text: 'ネクタイ', reason: '正確！' },
            { text: 'タクシー', reason: '錯誤：計程車。' },
            { text: 'ナイフ', reason: '錯誤：刀子。' },
            { text: 'テスト', reason: '錯誤：考試。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_katakana',
        correctRule: '【考點】片假名詞彙\n【解析】ネクタイ（Necktie）。'
    },
    {
        id: 'n5_vocab_bunmyaku_necktie_1',
        prob: 'シャツを着て、______をします。',
        prob_zh: '穿上襯衫，打 *領帶*。',
        options: [
            { text: 'ネクタイ', reason: '正確！' },
            { text: 'ポケット', reason: '錯誤：口袋。' },
            { text: 'スカート', reason: '錯誤：裙子。' },
            { text: 'スリッパ', reason: '錯誤：拖鞋。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】外來語\n【解析】ネクタイをする（打領帶）。'
    },

    // 122. 猫 (ねこ)
    {
        id: 'n5_vocab_kanji_yomi_neko_1',
        prob: 'そこに<u>猫</u>がいます。',
        prob_zh: '那裡有 *貓*。',
        options: [
            { text: 'ねこ', reason: '正確！' },
            { text: 'いぬ', reason: '錯誤：犬（狗）。' },
            { text: 'とり', reason: '錯誤：鳥。' },
            { text: 'うま', reason: '錯誤：馬。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「猫{ねこ}」。'
    },
    {
        id: 'n5_vocab_hyouki_neko_1',
        prob: '白{しろ}い<u>ねこ</u>を見ました。',
        prob_zh: '看到了白色的 *貓*。',
        options: [
            { text: '猫', reason: '正確！' },
            { text: '犬', reason: '錯誤：いぬ。' },
            { text: '魚', reason: '錯誤：さかな。' },
            { text: '細', reason: '錯誤：ほそい（形容詞字根）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】猫（Cat）。'
    },

    // 123. 寝る (ねる)
    {
        id: 'n5_vocab_kanji_yomi_neru_1',
        prob: '昨日は早く<u>寝ました</u>。',
        prob_zh: '昨天很早就 *睡* 了。',
        options: [
            { text: 'ねました', reason: '正確！' },
            { text: 'きました', reason: '錯誤：来ました/着ました。' },
            { text: 'みました', reason: '錯誤：見ました。' },
            { text: 'しました', reason: '錯誤：しました。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「寝{ね}る」。'
    },
    {
        id: 'n5_vocab_bunmyaku_neru_1',
        prob: '毎晩、何時に______か。',
        prob_zh: '每天晚上幾點 *睡覺* 呢？',
        options: [
            { text: '寝ます', reason: '正確！' },
            { text: '起きます', reason: '錯誤：起床（雖然語法對，但通常問作息會成對，此處作為睡覺選項）。' },
            { text: '働きます', reason: '錯誤：工作。' },
            { text: '始まります', reason: '錯誤：開始。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】動詞意涵\n【解析】問晚上的作息，通常是寝ます。'
    },

    // 124. ノート (ノート)
    {
        id: 'n5_vocab_katakana_note_1',
        prob: '<u>ノート</u>に名前を書いてください。',
        prob_zh: '請在 *筆記本* 上寫名字。',
        options: [
            { text: 'ノート', reason: '正確！' },
            { text: 'コート', reason: '錯誤：大衣。' },
            { text: 'ボート', reason: '錯誤：小船。' },
            { text: 'ゲート', reason: '錯誤：門/閘口。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_katakana',
        correctRule: '【考點】片假名詞彙\n【解析】ノート（Notebook）。'
    },

    // 125. 登る (のぼる)
    {
        id: 'n5_vocab_kanji_yomi_noboru_1',
        prob: '夏休みに山に<u>登り</u>たいです。',
        prob_zh: '暑假想去 *爬* 山。',
        options: [
            { text: 'のぼり', reason: '正確！' },
            { text: 'くだり', reason: '錯誤：下り（下山）。' },
            { text: 'まわり', reason: '錯誤：周り。' },
            { text: 'とまり', reason: '錯誤：泊まり。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「登{のぼ}る」。'
    },
    {
        id: 'n5_vocab_bunmyaku_noboru_1',
        prob: '高い山を______のは大変です。',
        prob_zh: '*爬* 高山很辛苦。',
        options: [
            { text: '登る', reason: '正確！' },
            { text: '入る', reason: '錯誤：はいる（進去）。' },
            { text: '乗る', reason: '錯誤：のる（搭乘）。' },
            { text: '走る', reason: '錯誤：はしる（跑）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】動詞搭配\n【解析】山を登る（Climb a mountain）。'
    }
];
