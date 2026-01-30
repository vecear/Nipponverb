import { StaticQuestion } from './types';

export const n5VocabBatch20: StaticQuestion[] = [
    // 96. 中 (なか)
    {
        id: 'n5_vocab_kanji_yomi_naka_1',
        prob: '部屋の<u>中</u>に人がいます。',
        prob_zh: '房間 *裡面* 有人。',
        options: [
            { text: 'うえ', reason: '錯誤：上。' },
            { text: 'なか', reason: '正確！' },
            { text: 'そと', reason: '錯誤：外。' },
            { text: 'した', reason: '錯誤：下。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「中{なか}」。'
    },
    {
        id: 'n5_vocab_hyouki_naka_1',
        prob: 'はこの<u>なか</u>に何がありますか。',
        prob_zh: '箱子 *裡面* 有什麼？',
        options: [
            { text: '中', reason: '正確！' },
            { text: '外', reason: '錯誤：そと。' },
            { text: '内', reason: '錯誤：うち（類似含義，但N5常考「中」對應なか）。' },
            { text: '央', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】中（Inside）。'
    },

    // 97. 長い (ながい)
    {
        id: 'n5_vocab_kanji_yomi_nagai_1',
        prob: '彼女は髪が<u>長い</u>です。',
        prob_zh: '她的頭髮很 *長*。',
        options: [
            { text: 'ながい', reason: '正確！' },
            { text: 'なか', reason: '錯誤。' },
            { text: 'みじかい', reason: '錯誤：短い。' },
            { text: 'おもい', reason: '錯誤：重い。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「長{なが}い」。'
    },
    {
        id: 'n5_vocab_hyouki_nagai_1',
        prob: 'このリボンは<u>ながい</u>です。',
        prob_zh: '這條緞帶很 *長*。',
        options: [
            { text: '長い', reason: '正確！' },
            { text: '張い', reason: '錯誤。' },
            { text: '帳い', reason: '錯誤。' },
            { text: '短が', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】長い。'
    },

    // 98. 鳴く (なく)
    {
        id: 'n5_vocab_kanji_yomi_naku_1',
        prob: '鳥が<u>鳴いて</u>います。',
        prob_zh: '鳥在 *叫*。',
        options: [
            { text: 'ないて', reason: '正確！' },
            { text: 'なきて', reason: '錯誤。' },
            { text: 'ぬいて', reason: '錯誤：抜いて。' },
            { text: 'のいて', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「鳴{な}く」。て形「鳴いて」。'
    },
    {
        id: 'n5_vocab_hyouki_naku_1',
        prob: '猫が<u>ないて</u>います。',
        prob_zh: '貓在 *叫*。',
        options: [
            { text: '泣いて', reason: '錯誤：哭泣（人）。' },
            { text: '鳴いて', reason: '正確！動物叫聲。' },
            { text: '無いて', reason: '錯誤：無。' },
            { text: '亡いて', reason: '錯誤：亡。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】同音異義詞辨析\n【解析】動物叫用「鳴く」，人哭用「泣く」。'
    },

    // 99. 無くす (なくす)
    {
        id: 'n5_vocab_kanji_yomi_nakusu_1',
        prob: '財布を<u>無くし</u>ました。',
        prob_zh: '*弄丟* 了錢包。',
        options: [
            { text: 'なくし', reason: '正確！' },
            { text: 'なぐし', reason: '錯誤。' },
            { text: 'ほくし', reason: '錯誤。' },
            { text: 'むくし', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「無{な}くす」。'
    },
    {
        id: 'n5_vocab_bunmyaku_nakusu_1',
        prob: '鍵を______、部屋に入れません。',
        prob_zh: '*弄丟* 了鑰匙，進不去房間。',
        options: [
            { text: 'なくして{な}', reason: '正確！' },
            { text: 'なって{な}', reason: '錯誤：なる（變）。' },
            { text: 'ならって{なら}', reason: '錯誤：習う（學習）。' },
            { text: 'なおして{な}', reason: '錯誤：直す（修理）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】動詞選擇\n【解析】鍵を無くす（Lose key）。'
    },

    // 100. なぜ (なぜ)
    {
        id: 'n5_vocab_kana_naze_1',
        prob: '<u>なぜ</u>学校を休みましたか。',
        prob_zh: '*為什麼* 請假沒去學校？',
        options: [
            { text: '何故', reason: '正確！漢字寫法（雖然N5多用平假名）。這題考平假名含義，選項如果是漢字對應...' }
        ],
        // Wait, standard N5 questions usually provide choices for word meaning or correct usage/kanji.
        // Let's do a bunmyaku question mostly.
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kana',
        correctRule: '...'
    }
];
// Fixing the last question structure
n5VocabBatch20[8] = {
    id: 'n5_vocab_bunmyaku_naze_1',
    prob: '______日本語を勉強しますか。',
    prob_zh: '*為什麼* 讀日文？',
    options: [
        { text: 'なぜ', reason: '正確！' },
        { text: 'なに', reason: '錯誤：什麼。' },
        { text: 'だれ', reason: '錯誤：誰。' },
        { text: 'どこ', reason: '錯誤：哪裡。' }
    ],
    correctIndex: 0,
    level: 'N5',
    tag: 'vocab_bunmyaku',
    correctRule: '【考點】疑問詞\n【解析】詢問理由用「なぜ」或「どうして」。'
};
// Add a 10th question to keep balance if needed, or just 9 is fine.
// Let's add Hyouki/Context for 'naze' or 'nakusu'
n5VocabBatch20.push({
    id: 'n5_vocab_bunmyaku_naze_2',
    prob: '______あなたは来なかったのですか。',
    prob_zh: '*為什麼* 你沒有來？',
    options: [
        { text: 'どうして', reason: '正確！同なぜ。' },
        { text: 'どうやって', reason: '錯誤：如何（方法）。' },
        { text: 'どのくらい', reason: '錯誤：多少（程度/時間）。' },
        { text: 'どちら', reason: '錯誤：哪邊。' }
    ],
    correctIndex: 0,
    level: 'N5',
    tag: 'vocab_bunmyaku',
    correctRule: '【考點】疑問詞\n【解析】どうして/なぜ 詢問原因。'
});
