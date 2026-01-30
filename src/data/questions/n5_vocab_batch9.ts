import { StaticQuestion } from './types';

export const n5VocabBatch9: StaticQuestion[] = [
    // 41. 晩ご飯 (ばんごはん)
    {
        id: 'n5_vocab_kanji_yomi_bangohan_1',
        prob: '<u>晩ご飯</u>を食{た}べましたか。',
        prob_zh: '吃 *晚餐* 了嗎？',
        options: [
            { text: 'ひるごはん', reason: '錯誤：昼ご飯（午餐）。' },
            { text: 'あさごはん', reason: '錯誤：朝ご飯（早餐）。' },
            { text: 'ばんごはん', reason: '正確！' },
            { text: 'よるごはん', reason: '錯誤：「夜ご飯」讀よるごはん，但漢字寫「晩」時讀「ばん」。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「晩{ばん}ご飯」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_bangohan_2',
        prob: '<u>晩ご飯</u>はカレーです。',
        prob_zh: '*晚餐* 是咖哩。',
        options: [
            { text: 'ばんごはん', reason: '正確！' },
            { text: 'はんごはん', reason: '錯誤。' },
            { text: 'ぱんごはん', reason: '錯誤。' },
            { text: 'まんごはん', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】注意濁音「ばん」。'
    },
    {
        id: 'n5_vocab_hyouki_bangohan_1',
        prob: '<u>ばんごはん</u>を作{つく}ります。',
        prob_zh: '做 *晚餐*。',

        // Note: Computer fonts might render 晚/晩 similarly or identically depending on locale.
        // Let's assume standard JP font.
        // Safe option set:
        options: [
            { text: '晩ご飯', reason: '正確！' },
            { text: '晴ご飯', reason: '錯誤。' },
            { text: '暗ご飯', reason: '錯誤。' },
            { text: '暁ご飯', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「ばんごはん」=「晩ご飯」 (or 晩御飯)。'
    },
    {
        id: 'n5_vocab_hyouki_bangohan_2',
        prob: '今日はレストランで<u>ばんごはん</u>を食{た}べます。',
        prob_zh: '今天在餐廳吃 *晚餐*。',
        options: [
            { text: '晩御飯', reason: '正確！「御飯」是較正式寫法，N5常見「ご飯」或「御飯」。' },
            { text: '晩午飯', reason: '錯誤。' },
            { text: '晩後飯', reason: '錯誤。' },
            { text: '晩誤飯', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】ごはん漢字為「御飯」。'
    },
    {
        id: 'n5_vocab_bunmyaku_bangohan_1',
        prob: '夜{よる}、家{いえ}で______を食{た}べます。',
        prob_zh: '晚上在家吃 *晚餐*。',
        options: [
            { text: '朝{あさ}ご飯', reason: '錯誤。' },
            { text: '昼{ひる}ご飯', reason: '錯誤。' },
            { text: '晩{ばん}ご飯', reason: '正確！夜 -> 晩ご飯。' },
            { text: '夕{ゆう}方', reason: '錯誤：夕方是時間段（傍晚），不是飯。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】時間關聯\n【解析】晚上吃的是晩ご飯（夕食）。'
    },
    {
        id: 'n5_vocab_ruigigo_bangohan_1',
        prob: '<u>晩ご飯</u>。',
        prob_zh: '*晚餐*。（選出意思最接近的選項）',
        options: [
            { text: '夕食{ゆうしょく}', reason: '正確！晩ご飯 = 夕食。' },
            { text: '朝食{ちょうしょく}', reason: '錯誤。' },
            { text: '昼食{ちゅうしょく}', reason: '錯誤。' },
            { text: '夜食{やしょく}', reason: '錯誤：夜食是消夜。晩ご飯是正餐。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】類義語\n【解析】晩ご飯 ≒ 夕食。'
    },

    // 42. 番号 (ばんごう)
    {
        id: 'n5_vocab_kanji_yomi_bangou_1',
        prob: '電話{でんわ}<u>番号</u>。',
        prob_zh: '電話 *號碼*。',
        options: [
            { text: 'ばんご', reason: '錯誤。' },
            { text: 'ばんこう', reason: '錯誤。' },
            { text: 'ばんごう', reason: '正確！' },
            { text: 'はんごう', reason: '錯誤。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「番{ばん}号{ごう}」。長音注意。'
    },
    {
        id: 'n5_vocab_kanji_yomi_bangou_2',
        prob: '部屋{へや}の<u>番号</u>は何番{なんばん}ですか。',
        prob_zh: '房間 *號碼* 是幾號？',
        options: [
            { text: 'ばんごう', reason: '正確！' },
            { text: 'ばんごお', reason: '錯誤。' },
            { text: 'ぱんごう', reason: '錯誤。' },
            { text: 'ぱんごお', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「番号{ばんごう}」。'
    },
    {
        id: 'n5_vocab_hyouki_bangou_1',
        prob: '部屋{へや}の<u>ばんごう</u>を教{おし}えてください。',
        prob_zh: '請告訴我房間 *號碼*。',
        options: [
            { text: '番互', reason: '錯誤。' },
            { text: '番号', reason: '正確！' },
            { text: '番合', reason: '錯誤。' },
            { text: '番后', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】番号。'
    },
    // No second kanji question needed for this word type usually, but strictly sticking to pattern:
    {
        id: 'n5_vocab_hyouki_bangou_2',
        prob: '一番{いちばん}の<u>ばんごう</u>。',
        prob_zh: '第一號的 *號碼*。',
        options: [
            { text: '番号', reason: '正確！' },
            { text: '判号', reason: '錯誤。' },
            { text: '半号', reason: '錯誤。' },
            { text: '板号', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】番号。'
    },
    {
        id: 'n5_vocab_bunmyaku_bangou_1',
        prob: 'テストをしますから、名前{なまえ}と______を書{か}いてください。',
        prob_zh: '要考試了，請寫下名字和 *號碼（學號/座號）*。',
        options: [
            { text: '番号{ばんごう}', reason: '正確！' },
            { text: '記号{きごう}', reason: '錯誤：記號。' },
            { text: '信号{しんごう}', reason: '錯誤：紅綠燈。' },
            { text: '暗号{あんごう}', reason: '錯誤：密碼/暗號。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語彙\n【解析】考試填寫資料通常是番号（受験番号等）。'
    },
    {
        id: 'n5_vocab_bunmyaku_bangou_2',
        prob: '電話{でんわ}______がわかりません。',
        prob_zh: '不知道電話 *號碼*。',
        options: [
            { text: '番号{ばんごう}', reason: '正確！' },
            { text: '番地{ばんち}', reason: '錯誤：地址門牌號。' },
            { text: '場所{ばしょ}', reason: '錯誤。' },
            { text: '問題{もんだい}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】詞彙搭配\n【解析】電話番号。'
    },

    // 43. バス (バス)
    {
        id: 'n5_vocab_kana_bus_1',

        // Revise to standard Kana selection or context
        prob: '<u>バス</u>で学校{がっこう}へ行{い}きます。',
        prob_zh: '搭 *公車* 去學校。',
        options: [
            { text: 'バヌ', reason: '錯誤。' },
            { text: 'パス', reason: '錯誤：Pasu (Pass)。' },
            { text: 'バス', reason: '正確！' },
            { text: 'ベス', reason: '錯誤。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_kana',
        correctRule: '【考點】片假名辨識\n【解析】Bus = バス。注意濁點。'
    },
    {
        id: 'n5_vocab_kana_bus_2',
        prob: '駅{えき}まで<u>バス</u>がありますか。',
        prob_zh: '到車站有 *公車* 嗎？',
        options: [
            { text: 'ハス', reason: '錯誤：Hasu (蓮花)。' },
            { text: 'バス', reason: '正確！' },
            { text: 'パヌ', reason: '錯誤。' },
            { text: 'バヌ', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kana',
        correctRule: '【考點】片假名辨識\n【解析】Bus = バス。'
    },
    {
        id: 'n5_vocab_bunmyaku_bus_1',
        prob: '______に乗{の}って、デパートへ行{い}きます。',
        prob_zh: '搭 *公車* 去百貨公司。',
        options: [
            { text: 'ガス', reason: '錯誤：Gas。' },
            { text: 'バス', reason: '正確！' },
            { text: 'ミス', reason: '錯誤：Miss/Mistake。' },
            { text: 'キス', reason: '錯誤：Kiss。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】外來語意義\n【解析】交通工具。'
    },
    {
        id: 'n5_vocab_bunmyaku_bus_2',
        prob: 'ここは______の乗{の}り場{ば}です。',
        prob_zh: '這裡是 *公車* 的乘車處。',
        options: [
            { text: 'ポスト', reason: '錯誤：郵筒。' },
            { text: 'バス', reason: '正確！' },
            { text: 'ビル', reason: '錯誤：大樓。' },
            { text: 'プール', reason: '錯誤：泳池。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】外來語意義\n【解析】バス乗り場（公車站）。'
    },

    // 44. バター (バター)
    {
        id: 'n5_vocab_kana_butter_1',
        prob: 'パンに<u>バター</u>をつけます。',
        prob_zh: '麵包塗 *奶油*。',
        options: [
            { text: 'パター', reason: '錯誤：Putter (高爾夫球桿)。' },
            { text: 'バター', reason: '正確！' },
            { text: 'バタ', reason: '錯誤：無長音。' },
            { text: 'ハター', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kana',
        correctRule: '【考點】片假名辨識\n【解析】Butter = バター。'
    },
    {
        id: 'n5_vocab_kana_butter_2',
        prob: '<u>バター</u>を買{か}いました。',
        prob_zh: '買了 *奶油*。',
        options: [
            { text: 'バクー', reason: '錯誤。' },
            { text: 'バター', reason: '正確！' },
            { text: 'バヌー', reason: '錯誤。' },
            { text: 'パター', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kana',
        correctRule: '【考點】片假名辨識\n【解析】注意タ vs ク vs ヌ。'
    },
    {
        id: 'n5_vocab_bunmyaku_butter_1',

        // Revision
        prob: 'パンに______をぬります。',
        prob_zh: '在麵包上塗 *奶油*。',
        options: [
            { text: 'バター', reason: '正確！' },
            { text: 'ギター', reason: '錯誤：吉他。' },
            { text: 'カレンダー', reason: '錯誤：日曆。' },
            { text: 'エレベーター', reason: '錯誤：電梯。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】外來語意義\n【解析】Butter。'
    },
    {
        id: 'n5_vocab_ruigigo_butter_1',
        prob: '<u>バター</u>。',
        prob_zh: '*奶油*。（選出同類項）',
        options: [
            { text: '食{た}べ物{もの}', reason: '正確！' },
            { text: '飲{の}み物{もの}', reason: '錯誤。' },
            { text: '乗{の}り物{もの}', reason: '錯誤。' },
            { text: '着{き}物{もの}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】詞彙分類\n【解析】バター是食物。'
    },

    // 45. ベッド (ベッド)
    {
        id: 'n5_vocab_kana_bed_1',
        prob: '<u>ベッド</u>で寝{ね}ます。',
        prob_zh: '在 *床* 上睡覺。',

        // Fixing option 3
        options: [
            { text: 'ペット', reason: '錯誤：Pet (寵物)。' },
            { text: 'ベッド', reason: '正確！' },
            { text: 'ベット', reason: '錯誤：Bet (賭注) / Bed (常誤用，正確是濁音)。注意Bed結尾d是濁音。' },
            { text: 'ペッド', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kana',
        correctRule: '【考點】片假名辨識\n【解析】Bed = ベッド。注意濁點。'
    },
    {
        id: 'n5_vocab_kana_bed_2',
        prob: '新{あたら}しい<u>ベッド</u>。',
        prob_zh: '新 *床*。',
        options: [
            { text: 'ペット', reason: '錯誤。' },
            { text: 'ペッド', reason: '錯誤。' },
            { text: 'ベット', reason: '錯誤。' },
            { text: 'ベッド', reason: '正確！' }
        ],
        correctIndex: 3,
        level: 'N5',
        tag: 'vocab_kana',
        correctRule: '【考點】片假名辨識\n【解析】濁音ド。'
    },
    {
        id: 'n5_vocab_bunmyaku_bed_1',
        prob: '部屋{へや}に______と机{つくえ}があります。',
        prob_zh: '房間裡有 *床* 和書桌。',
        options: [
            { text: 'ペット', reason: '錯誤：可能有寵物，但bed和桌子是典型家具搭配。且N5更常考bed。' },
            { text: 'ベッド', reason: '正確！' },
            { text: 'ポケット', reason: '錯誤：口袋。' },
            { text: 'プレゼント', reason: '錯誤：禮物。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】外來語意義\n【解析】家具名稱。'
    },
    {
        id: 'n5_vocab_ruigigo_bed_1',
        prob: '<u>ベッド</u>に行{い}きます。',
        prob_zh: '去 *睡覺（上床）*。（選出意思最接近的選項）',
        options: [
            { text: '寝{ね}ます', reason: '正確！去床上 = 睡覺。' },
            { text: '起{お}きます', reason: '錯誤。' },
            { text: '食{た}べます', reason: '錯誤。' },
            { text: '出{で}かけます', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】慣用表現\n【解析】Go to bed = 寝る。'
    }
];
