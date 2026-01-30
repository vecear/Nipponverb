import { StaticQuestion } from './types';

export const n5VocabBatch12: StaticQuestion[] = [
    // 56. 茶碗 (ちゃわん)
    {
        id: 'n5_vocab_kanji_yomi_chawan_1',
        prob: 'きれいな<u>茶碗</u>ですね。',
        prob_zh: '漂亮的 *茶碗（飯碗）* 呢。',
        options: [
            { text: 'ちゃわん', reason: '正確！' },
            { text: 'さら', reason: '錯誤：皿。' },
            { text: 'ちゃいろ', reason: '錯誤：茶色。' },
            { text: 'びん', reason: '錯誤：瓶。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「茶{ちゃ}碗{わん}」。'
    },
    {
        id: 'n5_vocab_hyouki_chawan_1',
        prob: 'ご飯{はん}を<u>ちゃわん</u>に入{い}れます。',
        prob_zh: '把飯裝進 *碗* 裡。',
        options: [
            { text: '茶腕', reason: '錯誤。' },
            { text: '茶碗', reason: '正確！' },
            { text: '皿碗', reason: '錯誤。' },
            { text: '飯碗', reason: '錯誤：日語漢字通常用茶碗指飯碗。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】茶碗。'
    },
    {
        id: 'n5_vocab_bunmyaku_chawan_1',

        prob: '______でご飯{はん}を食{た}べます。',
        prob_zh: '用 *碗* 吃飯。',
        options: [
            { text: '茶碗{ちゃわん}', reason: '正確！' },
            { text: '本箱{ほんばこ}', reason: '錯誤：書櫃。' },
            { text: '冷蔵庫{れいぞうこ}', reason: '錯誤：冰箱。' },
            { text: '眼鏡{めがね}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】餐具詞彙\n【解析】吃飯用的容器。'
    },

    // 57. 父 (ちち)
    {
        id: 'n5_vocab_kanji_yomi_chichi_1',
        prob: '私の<u>父</u>は会社員{かいしゃいん}です。',
        prob_zh: '我 *父親* 是公司職員。',
        options: [
            { text: 'はは', reason: '錯誤：母。' },
            { text: 'おとうさん', reason: '錯誤：お父さん（漢字通常寫父，但有「お～さん」時讀おとうさん，單獨「父」且指自己父親讀「ちち」）。' },
            { text: 'ちち', reason: '正確！' },
            { text: 'そふ', reason: '錯誤：祖父。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音與稱謂\n【解析】自己父親稱「父{ちち}」。'
    },
    {
        id: 'n5_vocab_hyouki_chichi_1',
        prob: '<u>ちち</u>と母{はは}。',
        prob_zh: '*父親* 和母親。',
        options: [
            { text: '交', reason: '錯誤。' },
            { text: '父', reason: '正確！' },
            { text: '夫', reason: '錯誤：おっと。' },
            { text: '文', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】父。'
    },
    {
        id: 'n5_vocab_bunmyaku_chichi_1',
        prob: '「お父{とう}さん」ですか。いいえ、私の______です。',
        prob_zh: '是「令尊（你父親）」嗎？不，是我的 *父親*。',
        options: [
            { text: '父{ちち}', reason: '正確！對外稱自己父親用「父」。' },
            { text: 'お父{とう}さん', reason: '錯誤：稱呼別人父親或對內稱呼。' },
            { text: '祖父{そふ}', reason: '錯誤。' },
            { text: '伯父{おじ}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】家族稱謂\n【解析】自稱家人用謙讓語（父），稱别人家人用尊敬語（お父さん）。'
    },

    // 58. 違う (ちがう)
    {
        id: 'n5_vocab_kanji_yomi_chigau_1',
        prob: '色が<u>違い</u>ますね。',
        prob_zh: '顏色 *不一樣* 呢。',
        options: [
            { text: 'ちがい', reason: '正確！' },
            { text: 'ちかい', reason: '錯誤。' },
            { text: 'おそい', reason: '錯誤。' },
            { text: 'わるい', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「違{ちが}う」。在此為ます形「違{ちが}い」。'
    },
    {
        id: 'n5_vocab_hyouki_chigau_1',
        prob: 'その答えは<u>ちがいます</u>。',
        prob_zh: '那個答案 *錯誤（不對）*。',
        options: [
            { text: '違います', reason: '正確！' },
            { text: '遠います', reason: '錯誤：遠い是形容詞。' },
            { text: '連います', reason: '錯誤。' },
            { text: '達います', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】違う。'
    },
    {
        id: 'n5_vocab_bunmyaku_chigau_1',
        prob: 'これは私のじゃありません。______ます。',
        prob_zh: '這不是我的。 *弄錯了（不對）*。',
        options: [
            { text: '違い{ちが}', reason: '正確！違います。' },
            { text: '使い{つか}', reason: '錯誤：使います（使用）。' },
            { text: '会い{あ}', reason: '錯誤：會います（見面）。' },
            { text: '習い{なら}', reason: '錯誤：習います（學習）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】動詞意義\n【解析】表示否定或錯誤用「違います」。'
    },

    // 59. 小さい (ちいさい)
    {
        id: 'n5_vocab_kanji_yomi_chiisai_1',
        prob: '<u>小さい</u>カメラ。',
        prob_zh: '*小* 相機。',
        options: [
            { text: 'すくない', reason: '錯誤：少ない。' },
            { text: 'ちさい', reason: '錯誤：少了長音。' },
            { text: 'ちいさい', reason: '正確！' },
            { text: 'さいさい', reason: '錯誤。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「小{ちい}さい」。注意有長音。'
    },
    {
        id: 'n5_vocab_hyouki_chiisai_1',
        prob: 'あの声{こえ}は<u>ちいさい</u>です。',
        prob_zh: '那個聲音很 *小*。',
        options: [
            { text: '少さい', reason: '錯誤。' },
            { text: '小さい', reason: '正確！' },
            { text: '子さい', reason: '錯誤。' },
            { text: '尔さい', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】小さい。'
    },
    {
        id: 'n5_vocab_ruigigo_chiisai_1',
        prob: '<u>小さい</u>。',
        prob_zh: '*小*。（選出反義詞）',
        options: [
            { text: '大きい{おおきい}', reason: '正確！小 <-> 大。' },
            { text: '多い{おおい}', reason: '錯誤。' },
            { text: '高い{たかい}', reason: '錯誤。' },
            { text: '長い{ながい}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】反義詞\n【解析】小さい <-> 大きい。'
    },

    // 60. 小さな (ちいさな)
    {
        id: 'n5_vocab_kanji_yomi_chiisana_1',
        prob: '<u>小さな</u>手{て}。',
        prob_zh: '*小小的* 手。',
        options: [
            { text: 'ちさな', reason: '錯誤。' },
            { text: 'ちいさな', reason: '正確！' },
            { text: 'しような', reason: '錯誤：少な。' },
            { text: 'すくな', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「小{ちい}さな」。連体詞。'
    },
    {
        id: 'n5_vocab_bunmyaku_chiisana_1',
        prob: 'これはとても______本{ほん}です。',
        prob_zh: '這是一本很 *小* 的書。',
        options: [
            { text: '小さな{ちいさな}', reason: '正確！小さな本 (連体詞)。' },
            { text: '小さいな', reason: '錯誤：形容詞接名詞直接接，不需要な。如果是な形容詞才要な。小さな是特殊連体詞。' },
            { text: '小さの', reason: '錯誤。' }, // 小さい is i-adj. 小さな is pre-noun.
            { text: '小さ', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】詞類活用\n【解析】「小さな」是連體詞，直接接名詞。「小さい」是依形容詞，也可以直接接名詞(小さい本)。選項中沒有「小さい」，只有「小さな」。'
    },
    {
        id: 'n5_vocab_bunmyaku_chiisana_2',
        prob: '______間違{まちが}いがあります。',
        prob_zh: '有 *小小的* 錯誤。',
        options: [
            { text: '小さな{ちいさな}', reason: '正確！' },
            { text: '小さくて', reason: '錯誤：連接形，後面通常接句子或形容詞，不直接接名詞做修飾（除非並列）。語境上小さな更自然作為定語。' },
            { text: '小さ', reason: '錯誤。' },
            { text: '小さに', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】連體詞用法\n【解析】小さな＋Noun。'
    }
];
