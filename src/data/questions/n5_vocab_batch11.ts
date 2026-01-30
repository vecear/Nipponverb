import { StaticQuestion } from './types';

export const n5VocabBatch11: StaticQuestion[] = [
    // 51. 文章 (ぶんしょう)
    {
        id: 'n5_vocab_kanji_yomi_bunshou_1',
        prob: '長{なが}い<u>文章</u>を読{よ}みます。',
        prob_zh: '讀長 *文章*。',
        options: [
            { text: 'ぶんしょ', reason: '錯誤。' },
            { text: 'ぶんしょう', reason: '正確！' },
            { text: 'もんしょう', reason: '錯誤：紋章{もんしょう}。' },
            { text: 'ほんしょう', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「文{ぶん}章{しょう}」。'
    },
    {
        id: 'n5_vocab_hyouki_bunshou_1',
        prob: '日本語{にほんご}の<u>ぶんしょう</u>を書{か}きます。',
        prob_zh: '寫日文 *文章*。',
        options: [
            { text: '文章', reason: '正確！' },
            { text: '文長', reason: '錯誤。' },
            { text: '文正', reason: '錯誤。' },
            { text: '文賞', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】文章。'
    },
    {
        id: 'n5_vocab_bunmyaku_bunshou_1',
        prob: 'この______は短{みじか}いです。',
        prob_zh: '這篇 *文章（句子）* 很短。',
        options: [
            { text: '文章{ぶんしょう}', reason: '正確！' },
            { text: '文字{もじ}', reason: '錯誤：文字（字母/字符）。文章是指成句或段落。' },
            { text: '文化{ぶんか}', reason: '錯誤：文化。' },
            { text: '文法{ぶんぽう}', reason: '錯誤：文法。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】語意辨析\n【解析】文章（sentences/text）。'
    },

    // 52. 豚肉 (ぶたにく)
    {
        id: 'n5_vocab_kanji_yomi_butaniku_1',
        prob: '<u>豚肉</u>を食{た}べません。',
        prob_zh: '不吃 *豬肉*。',
        options: [
            { text: 'ぎゅうにく', reason: '錯誤：牛肉。' },
            { text: 'とりにく', reason: '錯誤：鶏肉。' },
            { text: 'ぶたにく', reason: '正確！' },
            { text: 'さかな', reason: '錯誤：魚。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「豚{ぶた}肉{にく}」。'
    },
    {
        id: 'n5_vocab_hyouki_butaniku_1',
        prob: 'スーパーで<u>ぶたにく</u>を買{か}いました。',
        prob_zh: '在超市買了 *豬肉*。',
        options: [
            { text: '豚肉', reason: '正確！' },
            { text: '家肉', reason: '錯誤。' },
            { text: '牛肉', reason: '錯誤：ぎゅうにく。' },
            { text: '鳥肉', reason: '錯誤：とりにく。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】豚肉（豬肉）。'
    },
    {
        id: 'n5_vocab_bunmyaku_butaniku_1',
        prob: 'カレーに______を入{い}れます。',
        prob_zh: '在咖哩裡放 *豬肉*。',
        options: [
            { text: '豚肉{ぶたにく}', reason: '正確！' },
            { text: '牛乳{ぎゅうにゅう}', reason: '錯誤：牛奶。' },
            { text: '果物{くだもの}', reason: '錯誤：水果。' },
            { text: 'お菓子{かし}', reason: '錯誤：點心。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】食材分類\n【解析】カレーの肉（肉類食材）。'
    },

    // 53. 病院 (びょういん)
    {
        id: 'n5_vocab_kanji_yomi_byouin_1',
        prob: '<u>病院</u>へ行{い}きます。',
        prob_zh: '去 *醫院*。',
        options: [
            { text: 'びよいん', reason: '錯誤：短音。' },
            { text: 'びょういん', reason: '正確！' },
            { text: 'びよういん', reason: '錯誤：美容院（びよういん）。' },
            { text: 'びょいん', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音與長音區分\n【解析】病{びょう}院{いん}。注意與美容院{びよういん}區分。'
    },
    {
        id: 'n5_vocab_hyouki_byouin_1',
        prob: '大き{おお}い<u>びょういん</u>。',
        prob_zh: '大 *醫院*。',
        options: [
            { text: '美容院', reason: '錯誤：びよういん。' },
            { text: '病院', reason: '正確！' },
            { text: '病員', reason: '錯誤。' },
            { text: '美院', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】病院。'
    },
    {
        id: 'n5_vocab_bunmyaku_byouin_1',
        prob: '病気{びょうき}ですから、______へ行{い}きます。',
        prob_zh: '因為生病，所以去 *醫院*。',
        options: [
            { text: '病院{びょういん}', reason: '正確！' },
            { text: '美容院{びよういん}', reason: '錯誤：去剪頭髮或美容。' },
            { text: '学校{がっこう}', reason: '錯誤。' },
            { text: '銀行{ぎんこう}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】場所關聯\n【解析】病気 -> 病院。'
    },

    // 54. 病気 (びょうき)
    {
        id: 'n5_vocab_kanji_yomi_byouki_1',
        prob: '母{はは}は<u>病気</u>です。',
        prob_zh: '母親 *生病*。',
        options: [
            { text: 'へいき', reason: '錯誤：平気（不在乎/沒事）。' },
            { text: 'びょうき', reason: '正確！' },
            { text: 'げんき', reason: '錯誤：元気。' },
            { text: 'てんき', reason: '錯誤：天気。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「病気{びょうき}」。'
    },
    {
        id: 'n5_vocab_hyouki_byouki_1',
        prob: '<u>びょうき</u>になりました。',
        prob_zh: '*生病* 了。',
        options: [
            { text: '元気', reason: '錯誤。' },
            { text: '病気', reason: '正確！' },
            { text: '痛気', reason: '錯誤。' },
            { text: '疲気', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】病気。'
    },
    {
        id: 'n5_vocab_ruigigo_byouki_1',
        prob: '<u>病気</u>になりました。',
        prob_zh: '*生病* 了。（選出意思最接近的選項）',
        options: [
            { text: '元気{げんき}ではありません', reason: '正確！生病 = 不健康/不舒服。' },
            { text: 'お金{かね}がありません', reason: '錯誤。' },
            { text: '暇{ひま}ではありません', reason: '錯誤。' },
            { text: '好{す}きではありません', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】語意理解\n【解析】病気 <-> 元気。'
    },

    // 55. 茶色 (ちゃいろ)
    {
        id: 'n5_vocab_kanji_yomi_chairo_1',
        prob: '<u>茶色</u>のコート。',
        prob_zh: '*褐色（茶色）* 的外套。',
        options: [
            { text: 'きいろ', reason: '錯誤：黄色。' },
            { text: 'ちゃいろ', reason: '正確！' },
            { text: 'みどり', reason: '錯誤：緑。' },
            { text: 'あか', reason: '錯誤：赤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「茶{ちゃ}色{いろ}」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_chairo_2',
        prob: '<u>お茶</u>を飲{の}みます。',
        prob_zh: '喝 *茶*。',
        options: [
            { text: 'おちゃ', reason: '正確！' },
            { text: 'おさけ', reason: '錯誤：お酒。' },
            { text: 'おみず', reason: '錯誤：お水。' },
            { text: 'おゆ', reason: '錯誤：お湯。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】關聯詞\n【解析】茶{ちゃ}。'
    },
    {
        id: 'n5_vocab_hyouki_chairo_1',
        prob: '<u>ちゃいろ</u>の靴{くつ}。',
        prob_zh: '*褐色* 的鞋子。',
        options: [
            { text: '茶色', reason: '正確！' },
            { text: '赤色', reason: '錯誤。' },
            { text: '青色', reason: '錯誤。' },
            { text: '黒色', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】茶色。'
    },
    {
        id: 'n5_vocab_bunmyaku_chairo_1',
        prob: 'あの______犬{いぬ}は私{わたし}のです。',
        prob_zh: '那隻 *咖啡色（茶色）* 的狗是我的。',
        options: [
            { text: '茶色{ちゃいろ}', reason: '正確！(形容詞需+の, 茶色の)' }, // Wait, option is noun 'chairo'. With の in sentence?
            // Sentence has "あの______犬は". If I put 茶色 -> 茶色犬 (incorrect grammar usually 茶色の犬).
            // But if option is "茶色の" it's ok.
            // Or if text is "茶色い" (i-adj). 茶色 is noun, sometimes no-adj.
            // Usually 茶色の犬.
            // Let's check options.
            { text: '茶色{ちゃいろ}い', reason: '正確！茶色い（い形容詞）。' },
            { text: '茶色{ちゃいろ}の', reason: '正確！但通常選項只有一個正確形式。' },
            // Correction: Make sentence "あの______の犬"。
        ],
        // Revising sentence
        prob: 'あの______の犬{いぬ}は私{わたし}のです。',
        prob_zh: '那隻 *咖啡色* 的狗是我的。',
        options: [
            { text: '茶色{ちゃいろ}', reason: '正確！茶色の犬。' },
            { text: '赤{あか}い', reason: '錯誤：赤いの犬 (X) -> 赤い犬。' },
            { text: '黒{くろ}', reason: '正確？黒の犬 (O)。但通常黒い犬。茶色通常是茶色の犬 (除了茶色い)。' },
            // To avoid ambiguity, use color contexts that are distinct.
            { text: '暗{くら}い', reason: '錯誤：暗的。' }
        ],
        // Let's stick to simple noun identification
        prob: 'コーヒーは______です。',
        prob_zh: '咖啡是 *褐色（咖啡色）* 的。',
        options: [
            { text: '茶色{ちゃいろ}', reason: '正確！' },
            { text: '水色{みずいろ}', reason: '錯誤：淺藍色。' },
            { text: '緑{みどり}', reason: '錯誤：綠色。' },
            { text: '赤{あか}', reason: '錯誤：紅色。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】顏色辨識\n【解析】咖啡的顏色是茶色。'
    }
];
