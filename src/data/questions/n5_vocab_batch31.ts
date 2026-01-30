import { StaticQuestion } from './types';

export const n5VocabBatch31: StaticQuestion[] = [
    // 151. 灰皿 (はいざら)
    {
        id: 'n5_vocab_kanji_yomi_haizara_1',
        prob: 'テーブルの上に<u>灰皿</u>があります。',
        prob_zh: '桌上有 *菸灰缸*。',
        options: [
            { text: 'はいざら', reason: '正確！' },
            { text: 'はいさら', reason: '錯誤：濁音。' },
            { text: 'かいざら', reason: '錯誤：灰（はい）。' },
            { text: 'まいざら', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「灰皿{はいざら}」。'
    },
    {
        id: 'n5_vocab_meaning_haizara_1',
        prob: 'たばこをすいますから、______をください。',
        prob_zh: '因為要抽菸，請給我 *菸灰缸*。',
        options: [
            { text: 'はいざら', reason: '正確！' },
            { text: 'コップ', reason: '錯誤：杯子。' },
            { text: 'スプーン', reason: '錯誤：湯匙。' },
            { text: 'はこ', reason: '錯誤：盒子。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】詞彙意涵\n【解析】抽菸（たばこをすいます）需要的是「灰皿{はいざら}」。'
    },

    // 152. 半 (はん)
    {
        id: 'n5_vocab_kanji_yomi_han_1',
        prob: 'いま、３じ<u>半</u>です。',
        prob_zh: '現在是三點 *半*。',
        options: [
            { text: 'はん', reason: '正確！' },
            { text: 'ほん', reason: '錯誤：本。' },
            { text: 'ふん', reason: '錯誤：分。' },
            { text: 'ばん', reason: '錯誤：晚/番。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「半{はん}」。'
    },

    // 153. 話す (はなす)
    {
        id: 'n5_vocab_kanji_yomi_hanasu_1',
        prob: '先生と日本語で<u>話し</u>ます。',
        prob_zh: '和老師用日語 *說話*。',
        options: [
            { text: 'はなし', reason: '正確！' },
            { text: 'はらし', reason: '錯誤。' },
            { text: 'ほなし', reason: '錯誤。' },
            { text: 'はな', reason: '錯誤：動詞ます形。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「話{はな}す」。'
    },
    {
        id: 'n5_vocab_meaning_hanasu_1',
        prob: 'ともだちとでんわで______ました。',
        prob_zh: '和朋友用電話 *交談* 了。',
        options: [
            { text: 'はなし', reason: '正確！話しました。' },
            { text: 'きき', reason: '錯誤：聞きました（聽/問）。' },
            { text: 'かき', reason: '錯誤：書きました（寫）。' },
            { text: 'よみ', reason: '錯誤：読みました（讀）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】詞彙意涵\n【解析】用電話（でんわで）進行的是「話{はな}します」。'
    },

    // 154. 半分 (はんぶん)
    {
        id: 'n5_vocab_kanji_yomi_hanbun_1',
        prob: 'りんごを<u>半分</u>食べました。',
        prob_zh: '吃了 *一半* 的蘋果。',
        options: [
            { text: 'はんぶん', reason: '正確！' },
            { text: 'ほんぶん', reason: '錯誤。' },
            { text: 'はんぷん', reason: '錯誤：濁音。' },
            { text: 'はんふん', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「半{はん}分{ぶん}」。'
    },
    {
        id: 'n5_vocab_meaning_hanbun_1',
        prob: 'このケーキをふたりで______にしましょう。',
        prob_zh: '把這個蛋糕兩人 *對分* 吧。',
        options: [
            { text: 'はんぶん', reason: '正確！' },
            { text: 'ぜんぶ', reason: '錯誤：全部（全部）。' },
            { text: 'たくさん', reason: '錯誤：很多。' },
            { text: 'すこし', reason: '錯誤：一點。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】詞彙意涵\n【解析】兩人（ふたり）分蛋糕，通常是「半分{はんぶん}」（對半）。'
    },

    // 155. ハンカチ (ハンカチ)
    {
        id: 'n5_vocab_katakana_handkerchief_1',
        prob: '<u>ハンカチ</u>で手をふきます。',
        prob_zh: '用 *手帕* 擦手。',
        options: [
            { text: 'ハンカチ', reason: '正確！' },
            { text: 'ハシ', reason: '錯誤：筷子/橋。' },
            { text: 'ハサミ', reason: '錯誤：剪刀。' },
            { text: 'ハガキ', reason: '錯誤：明信片。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_katakana',
        correctRule: '【考點】片假名詞彙\n【解析】ハンカチ（Handkerchief）。'
    }
];
