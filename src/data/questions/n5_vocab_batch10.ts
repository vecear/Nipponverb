import { StaticQuestion } from './types';

export const n5VocabBatch10: StaticQuestion[] = [
    // 46. 勉強 (べんきょう)
    {
        id: 'n5_vocab_kanji_yomi_benkyou_1',
        prob: '日本語{にほんご}を<u>勉強</u>します。',
        prob_zh: '*學習* 日語。',
        options: [
            { text: 'べんごう', reason: '錯誤：番号{ばんごう}。' },
            { text: 'べんきょう', reason: '正確！' },
            { text: 'べんこ', reason: '錯誤。' },
            { text: 'へんきょう', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「勉強{べんきょう}」。拗音＋長音。'
    },
    {
        id: 'n5_vocab_hyouki_benkyou_1',
        prob: '毎日{まいにち}、<u>べんきょう</u>します。',
        prob_zh: '每天 *學習*。',
        options: [
            { text: '勉强', reason: '錯誤：通常寫「強」。' }, // Note: Japanese Kanji for strong is 強 (Standard). Sometiems 强 is seen in old texts/Chinese but standard JP is 強.
            { text: '勉強', reason: '正確！' },
            { text: '便強', reason: '錯誤。' },
            { text: '勉教', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「勉」是力部，「強」是弓部（標準）。'
    },
    {
        id: 'n5_vocab_bunmyaku_benkyou_1',
        prob: '学生{がくせい}ですから、よく______します。',
        prob_zh: '因為是學生，所以經常 *讀書（學習）*。',
        options: [
            { text: '勉強{べんきょう}', reason: '正確！' },
            { text: '仕事{しごと}', reason: '錯誤：學生主要是學習。' },
            { text: '散歩{さんぽ}', reason: '錯誤。' },
            { text: '買{か}い物{もの}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語彙\n【解析】學生 -> 勉強。'
    },

    // 47. 便利 (べんり)
    {
        id: 'n5_vocab_kanji_yomi_benri_1',
        prob: 'この店{みせ}は<u>便利</u>です。',
        prob_zh: '這家店很 *方便*。',
        options: [
            { text: 'ふべん', reason: '錯誤：不便（不方便）。' },
            { text: 'べんり', reason: '正確！' },
            { text: 'へんり', reason: '錯誤。' },
            { text: 'びんり', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「便{べん}利{り}」。'
    },
    {
        id: 'n5_vocab_hyouki_benri_1',
        prob: '地下鉄{ちかてつ}は<u>べんり</u>ですね。',
        prob_zh: '地下鐵很 *方便* 呢。',
        options: [
            { text: '便利', reason: '正確！' },
            { text: '便宜', reason: '錯誤：便宜（中文：便宜cheap/方便convenient都有，日文便宜是ben-gi，權宜之計等意，N5不考）。' },
            { text: '更利', reason: '錯誤。' },
            { text: '便理', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】便利。'
    },
    {
        id: 'n5_vocab_ruigigo_benri_1',
        prob: '<u>便利</u>な店{みせ}。',
        prob_zh: '*方便* 的店。（選出反義詞）',
        options: [
            { text: '不便{ふべん}な店{みせ}', reason: '正確！便利 <-> 不便。' },
            { text: '有名{ゆうめい}な店{みせ}', reason: '錯誤。' },
            { text: '大切{たいせつ}な店{みせ}', reason: '錯誤。' },
            { text: '立派{りっぱ}な店{みせ}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】反義詞\n【解析】便利 <-> 不便。'
    },

    // 48. ボールペン (ボールペン)
    {
        id: 'n5_vocab_kana_ballpen_1',
        prob: '<u>ボールペン</u>がありますか。',
        prob_zh: '有 *原子筆* 嗎？',
        options: [
            { text: 'ポールペン', reason: '錯誤：Paul pen?' },
            { text: 'ボールペン', reason: '正確！' },
            { text: 'ボ一ルペン', reason: '錯誤：中間是一（長音vs一）。' },
            { text: 'プールペン', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kana',
        correctRule: '【考點】片假名辨識\n【解析】Ballpoint pen = ボールペン。注意濁音ボ和長音。'
    },
    {
        id: 'n5_vocab_bunmyaku_ballpen_1',
        prob: '______で名前{なまえ}を書{か}きます。',
        prob_zh: '用 *原子筆* 寫名字。',
        options: [
            { text: 'ボールペン', reason: '正確！' },
            { text: 'コップ', reason: '錯誤：杯子。' },
            { text: 'カメラ', reason: '錯誤：相機。' },
            { text: 'スリッパ', reason: '錯誤：拖鞋。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】工具使用\n【解析】書寫工具。'
    },

    // 49. ボタン (ボタン)
    {
        id: 'n5_vocab_kana_button_1',
        prob: 'シャツの<u>ボタン</u>。',
        prob_zh: '襯衫的 *鈕扣*。',
        options: [
            { text: 'ポタン', reason: '錯誤。' },
            { text: 'ボタン', reason: '正確！' },
            { text: 'ズボン', reason: '錯誤：褲子。' },
            { text: 'ポトン', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kana',
        correctRule: '【考點】片假名辨識\n【解析】Button = ボタン。'
    },
    {
        id: 'n5_vocab_bunmyaku_button_1',
        prob: 'この<u>ボタン</u>を押{お}してください。',
        prob_zh: '請按這個 *按鈕*。',
        options: [
            { text: 'ボタン', reason: '正確！(按鈕)' },
            { text: 'テレビ', reason: '錯誤。' },
            { text: 'エレベーター', reason: '錯誤。' },
            { text: 'ポケット', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】外來語意義\n【解析】Button（鈕扣/按鈕）。'
    },

    // 50. 帽子 (ぼうし)
    {
        id: 'n5_vocab_kanji_yomi_boushi_1',
        prob: '白{しろ}い<u>帽子</u>。',
        prob_zh: '白色的 *帽子*。',
        options: [
            { text: 'ほし', reason: '錯誤：星。' },
            { text: 'ぼうし', reason: '正確！' },
            { text: 'ほうし', reason: '錯誤。' },
            { text: 'ぼし', reason: '錯誤：母子。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「帽{ぼう}子{し}」。長音注意。'
    },
    {
        id: 'n5_vocab_hyouki_boushi_1',
        prob: '<u>ぼうし</u>をかぶります。',
        prob_zh: '戴 *帽子*。',
        options: [
            { text: '冒子', reason: '錯誤。' },
            { text: '帽子', reason: '正確！' },
            { text: '忙子', reason: '錯誤。' },
            { text: '忘子', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】帽子。'
    },
    {
        id: 'n5_vocab_bunmyaku_boushi_1',
        prob: '風{かぜ}が吹{ふ}いて、______が飛{と}びました。',
        prob_zh: '風吹， *帽子* 飛走了。',
        options: [
            { text: 'くつ', reason: '錯誤：鞋子（通常不會飛走，帽子較輕且在頭上）。' },
            { text: '帽子{ぼうし}', reason: '正確！' },
            { text: 'めがね', reason: '錯誤：眼鏡（可能，但帽子更典型）。' },
            { text: 'ズボン', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】語意關聯\n【解析】飛走的通常是帽子。'
    },
    {
        id: 'n5_vocab_bunmyaku_boushi_2',
        prob: '______をかぶります。',
        prob_zh: '*戴* 帽子（動作搭配用詞）。',
        options: [
            { text: '帽子{ぼうし}', reason: '正確！かぶる專用於戴帽子/頭部覆蓋物。' },
            { text: '靴{くつ}', reason: '錯誤：履{は}きます。' },
            { text: '眼鏡{めがね}', reason: '錯誤：かけます。' },
            { text: '上着{うわぎ}', reason: '錯誤：着{き}ます。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】動詞搭配\n【解析】帽子をかぶる。'
    }
];
