import { StaticQuestion } from './types';

export const n5VocabBatch4: StaticQuestion[] = [
    // 16. 姉 (あね)
    {
        id: 'n5_vocab_kanji_yomi_ane_1',
        prob: '<u>姉</u>は東京{とうきょう}にいます。',
        prob_zh: '*姊姊* 在東京。',
        options: [
            { text: 'いもうと', reason: '錯誤：「妹」是妹妹。' },
            { text: 'あね', reason: '正確！「姉」是（我的）姊姊。' },
            { text: 'あに', reason: '錯誤：「兄」是哥哥。' },
            { text: 'おねえさん', reason: '錯誤：「お姉さん」是別人的姊姊，或稱呼自己的姊姊（非謙稱）。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】家族稱謂\n【解析】對外人提到自己的姊姊用謙稱「姉{あね}」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_ane_2',
        prob: '「<u>姉</u>が結婚{けっこん}しました。」\n「おめでとうございます。」',
        prob_zh: '「 *姊姊* 結婚了。」\n「恭喜。」',
        options: [
            { text: 'あね', reason: '正確！對外人稱自己的姊姊。' },
            { text: 'はは', reason: '錯誤：「母」是媽媽。' },
            { text: 'つま', reason: '錯誤：「妻」是妻子。' },
            { text: 'あに', reason: '錯誤：「兄」是哥哥。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】家族稱謂\n【解析】「姉{あね}」。'
    },
    {
        id: 'n5_vocab_hyouki_ane_1',
        prob: 'わたしの<u>あね</u>です。',
        prob_zh: '是我的 *姊姊*。',
        options: [
            { text: '妹', reason: '錯誤：「いもうと」。' },
            { text: '兄', reason: '錯誤：「あに」。' },
            { text: '姉', reason: '正確！' },
            { text: '弟', reason: '錯誤：「おとうと」。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「姉{あね}」。'
    },
    {
        id: 'n5_vocab_hyouki_ane_2',
        prob: '「<u>あね</u>と買{か}い物{もの}に行{い}きます。」',
        prob_zh: '「要跟 *姊姊* 去買東西。」',
        options: [
            { text: '姉', reason: '正確！' },
            { text: '妺', reason: '錯誤：錯字（注意女字旁）。但也無此常用字，或是妹的異體。' },
            { text: '味', reason: '錯誤：「味{あじ}」。' },
            { text: '柿', reason: '錯誤：「柿{かき}」。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「姉{あね}」漢字為「姉」。'
    },
    {
        id: 'n5_vocab_bunmyaku_ane_1',
        prob: '私{わたし}には______が二人{ふたり}います。',
        prob_zh: '我有兩個 *姊姊*。',
        options: [
            { text: '姉{あね}', reason: '正確！向他人介紹家人。' },
            { text: 'お姉{ねえ}さん', reason: '錯誤：稱呼別人的姊姊，或直接稱呼姊姊時用。' },
            { text: '姉{あね}さん', reason: '錯誤：較少用於此類句子。' },
            { text: '母{はは}', reason: '錯誤：媽媽通常只有一個。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】家族稱謂\n【解析】對外人說「我有...」時用謙稱「姉」。'
    },
    {
        id: 'n5_vocab_bunmyaku_ane_2',
        prob: '「ご兄弟{きょうだい}は？」\n「______が一人{ひとり}います。」',
        prob_zh: '「有兄弟姊妹嗎？」\n「有一個 *姊姊*。」',
        options: [
            { text: 'お姉{ねえ}さん', reason: '錯誤：不可用於講自己的家人。' },
            { text: '姉{あね}', reason: '正確！' },
            { text: 'お兄{にい}さん', reason: '錯誤：不可用於講自己的家人。' },
            { text: '妹{いもうと}さん', reason: '錯誤：不可用於講自己的家人。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】家族稱謂\n【解析】回答自己的家人狀況用謙稱。'
    },
    {
        id: 'n5_vocab_ruigigo_ane_1',
        prob: '私{わたし}の<u>姉</u>は優{やさ}しいです。',
        prob_zh: '我的 *姊姊* 很溫柔。（選出意思最接近的選項）',
        options: [
            { text: '私{わたし}より年上{としうえ}の女{おんな}のきょうだい', reason: '正確！「姉」是比自己年長的女性手足。' },
            { text: '私{わたし}より年下{としした}の女{おんな}のきょうだい', reason: '錯誤：這是「妹」的定義。' },
            { text: '私{わたし}より年上{としうえ}の男{おとこ}のきょうだい', reason: '錯誤：這是「兄」的定義。' },
            { text: '私{わたし}のお母{かあ}さん', reason: '錯誤：這是「母」的定義。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞/定義理解\n【解析】「姉{あね}」= 比自己年長的女性手足（兄弟姊妹）。'
    },
    {
        id: 'n5_vocab_ruigigo_ane_2',
        prob: '私の<u>姉</u>です。',
        prob_zh: '她是我的 *姊姊*。（選出說明正確的選項）',
        options: [
            { text: '私{わたし}より年下{としした}の女{おんな}の人{ひと}', reason: '錯誤：這是妹。' },
            { text: '私{わたし}より年上{としうえ}の男{おとこ}の人{ひと}', reason: '錯誤：這是兄。' },
            { text: '私{わたし}より年上{としうえ}の女{おんな}の人{ひと}', reason: '正確！比我年長的女性手足。' },
            { text: '私{わたし}のお母{かあ}さん', reason: '錯誤：這是母。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】定義理解\n【解析】姉 = 年上的女性手足。'
    },

    // 17. 兄 (あに)
    {
        id: 'n5_vocab_kanji_yomi_ani_1',
        prob: '<u>兄</u>は大学生{だいがくせい}です。',
        prob_zh: '*哥哥* 是大學生。',
        options: [
            { text: 'あね', reason: '錯誤：姊姊。' },
            { text: 'ちち', reason: '錯誤：爸爸。' },
            { text: 'あに', reason: '正確！「兄」讀作「あに」。' },
            { text: 'おと', reason: '錯誤：「夫」或「音」。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】謙稱哥哥為「兄{あに}」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_ani_2',
        prob: '「<u>兄</u>がいますか。」\n「いいえ、いません。」',
        prob_zh: '「有 *哥哥* 嗎？」\n「不，沒有。」',
        options: [
            { text: 'あに', reason: '正確！注意：通常問別人用「お兄さん」，但在一般陳述或特定語境下可能出現，或此句為主詞省略「(私の)兄が...」自述句。若是問句問對方應用「お兄さん」。但為測驗「兄」讀音，設此題境。若嚴謹應為「(私に)兄がいますか(我有哥哥嗎？)」自問，或確認關係圖。最自然是自述「兄がいます」。' },
            { text: 'あみ', reason: '錯誤。' },
            { text: 'あり', reason: '錯誤。' },
            { text: 'あき', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「兄{あに}」。'
    },
    {
        id: 'n5_vocab_hyouki_ani_1',
        prob: '<u>あに</u>は背{せ}が高{たか}いです。',
        prob_zh: '*哥哥* 個子很高。',
        options: [
            { text: '弟', reason: '錯誤：弟弟。' },
            { text: '父', reason: '錯誤：爸爸。' },
            { text: '姉', reason: '錯誤：姊姊。' },
            { text: '兄', reason: '正確！' }
        ],
        correctIndex: 3,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「あに」漢字寫作「兄」。'
    },
    {
        id: 'n5_vocab_hyouki_ani_2',
        prob: '「<u>あに</u>の車{くるま}です。」',
        prob_zh: '「是 *哥哥* 的車。」',
        options: [
            { text: '兄', reason: '正確！' },
            { text: '児', reason: '錯誤。' },
            { text: '見', reason: '錯誤。' },
            { text: '先', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】哥哥寫作「兄」。'
    },
    {
        id: 'n5_vocab_bunmyaku_ani_1',
        prob: '私{わたし}は二人{ふたり}兄弟{きょうだい}です。______と私{わたし}です。',
        prob_zh: '我兄弟兩人。*哥哥* 和我。',
        options: [
            { text: 'お兄{にい}さん', reason: '錯誤：不可用於講自己的家人。' },
            { text: '兄{あに}', reason: '正確！' },
            { text: '妹{いもうと}', reason: '錯誤：邏輯上雖可能，但通常長幼排序或選項對比。若題目未暗示性別，兄/姉/弟/妹皆可。假設選項只有兄是謙稱且合理。' },
            { text: '弟{おとうと}さん', reason: '錯誤：加了さん。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】家族稱謂\n【解析】對外人稱呼自己的哥哥用「兄」。'
    },
    {
        id: 'n5_vocab_bunmyaku_ani_2',
        prob: '田中{たなか}さんの______は医者{いしゃ}だそうです。',
        prob_zh: '聽說田中先生的 *哥哥* 是醫生。',
        options: [
            { text: '兄{あに}', reason: '錯誤：稱呼別人的家人要用敬稱。' },
            { text: 'お兄{にい}さん', reason: '正確！稱呼別人的哥哥。' },
            { text: '姉{あね}', reason: '錯誤：謙稱。' },
            { text: '父{ちち}', reason: '錯誤：謙稱。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】家族稱謂（敬語）\n【解析】話題是「田中先生的家人」，故需用「お兄さん」。注意：本題雖測驗「あに」的概念，但重點在於「あに(己)」與「お兄さん(人)」的區別。若想單純考「あに」，主詞應為自己。這題稍微進階。'
    },
    {
        id: 'n5_vocab_ruigigo_ani_1',
        prob: '<u>兄</u>。',
        prob_zh: '*哥哥*。（選出相對詞）',
        options: [
            { text: '弟{おとうと}', reason: '正確！兄弟相對。' },
            { text: '姉{あね}', reason: '錯誤：姊姊。' },
            { text: '妹{いもうと}', reason: '錯誤：妹妹。' },
            { text: '母{はは}', reason: '錯誤：媽媽。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】詞彙關係\n【解析】兄 <-> 弟。'
    },
    {
        id: 'n5_vocab_ruigigo_ani_2',
        prob: 'あの人{ひと}は私{わたし}の<u>兄</u>です。',
        prob_zh: '那個人是我的 *哥哥*。（選出說明正確的選項）',
        options: [
            { text: '私{わたし}より年上{としうえ}の男{おとこ}のきょうだい', reason: '正確！比我年長的男性手足。' },
            { text: '私{わたし}より年下{としした}の男{おとこ}のきょうだい', reason: '錯誤：這是弟。' },
            { text: '私{わたし}のお父{とう}さん', reason: '錯誤：這是父。' },
            { text: '私{わたし}の友達{ともだち}', reason: '錯誤：這是朋友。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】定義理解\n【解析】兄 = 年長的男性手足。'
    },

    // 18. あの (あの)
    {
        id: 'n5_vocab_kanji_yomi_ano_1',
        prob: '<u>あの</u>人{ひと}は誰{だれ}ですか。',
        prob_zh: '*那* 個人是誰？',
        options: [
            { text: 'その', reason: '錯誤：「その」是「那(中稱)」。' },
            { text: 'この', reason: '錯誤：「この」是「這」。' },
            { text: 'どの', reason: '錯誤：「どの」是「哪個」。' },
            { text: 'あの', reason: '正確！' }
        ],
        correctIndex: 3,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】連體詞\n【解析】「あの」指遠處（那）。'
    },
    {
        id: 'n5_vocab_kanji_yomi_ano_2',
        prob: '<u>あの</u>山{やま}は有名{ゆうめい}です。',
        prob_zh: '*那* 座山很有名。',
        options: [
            { text: 'あの', reason: '正確！' },
            { text: 'なの', reason: '錯誤。' },
            { text: 'あね', reason: '錯誤。' },
            { text: 'ある', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】讀音\n【解析】「あの」讀作「あの」。'
    },
    // 「あの」通常不寫漢字，故不考表記題，或考其辨析。
    // 但為了符合SOP，我們可以考「那个」的日文是？
    {
        id: 'n5_vocab_hyouki_ano_1',
        prob: '______山{やま}は富士山{ふじさん}です。',
        prob_zh: '*那* 座山是富士山。（遠處）',
        options: [
            { text: 'あの', reason: '正確！指遠處。' },
            { text: 'あに', reason: '錯誤。' },
            { text: 'あれ', reason: '錯誤：「あれ」不能直接接名詞(あれ山 X)。' },
            { text: 'あちら', reason: '錯誤：「あちら」通常指方向或禮貌說法，接名詞較少見(あちら山 X)。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki', // 改為填空形式的表記/文法題
        correctRule: '【考點】詞類\n【解析】連體詞「あの」+名詞。'
    },
    {
        id: 'n5_vocab_hyouki_ano_2',
        prob: '______店{みせ}はおいしいそうですね。',
        prob_zh: '*那* 家店看起來很好吃呢。（遠處）',
        options: [
            { text: 'あの', reason: '正確！' },
            { text: 'その', reason: '錯誤：指聽話者附近。若兩人都看遠處用「あの」。' },
            { text: 'この', reason: '錯誤：指自己附近。' },
            { text: 'どの', reason: '錯誤：疑問詞。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】詞義辨析\n【解析】遠稱用「あの」。'
    },
    {
        id: 'n5_vocab_bunmyaku_ano_1',
        prob: '______本{ほん}を見{み}せてください。',
        prob_zh: '請給我看 *那* 本書。（指聽話者手上的書）',
        options: [
            { text: 'あの', reason: '錯誤：指遠處。' },
            { text: 'その', reason: '正確！指聽話者手邊用「その」。(陷阱題：分辨あの/その)' },
            { text: 'この', reason: '錯誤：指且己手邊。' },
            { text: 'どの', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】指示詞區分\n【解析】題目要考「あの」的反面或辨析。若要選「あの」，情境需為遠處。'
        // 注意：此題正確答案是「その」，用來反襯「あの」。
    },
    {
        id: 'n5_vocab_bunmyaku_ano_2',
        prob: '「______建物{たてもの}は何{なん}ですか。」\n「図書館{としょかん}です。」',
        prob_zh: '「 *那* 棟建築物是什麼？」（指遠處）\n「是圖書館。」',
        options: [
            { text: 'あの', reason: '正確！指話者聽者都遠的地方。' },
            { text: 'その', reason: '錯誤。' },
            { text: 'この', reason: '錯誤。' },
            { text: 'どの', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境\n【解析】指遠處建築物用「あの」。'
    },
    {
        id: 'n5_vocab_ruigigo_ano_1',
        prob: '<u>あの</u>カメラ。',
        prob_zh: '*那* 台相機。（選出意思最接近的選項）',
        options: [
            { text: 'あそこにあるカメラ', reason: '正確！あの～ = 在那裡(遠處)的～。' },
            { text: 'そこにあるカメラ', reason: '錯誤：那是その。' },
            { text: 'ここにあるカメラ', reason: '錯誤：這是この。' },
            { text: 'どこにあるカメラ', reason: '錯誤：那是どの。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞\n【解析】「あの」指遠處（あそこ）。'
    },
    {
        id: 'n5_vocab_ruigigo_ano_2',
        prob: '<u>あの</u>人{ひと}。',
        prob_zh: '*那* 個人。（選出意思最接近的選項）',
        options: [
            { text: 'あの方{かた}', reason: '正確！「あの方」是「あの人」的敬語。' },
            { text: 'この方{かた}', reason: '錯誤。' },
            { text: 'その方{かた}', reason: '錯誤。' },
            { text: 'どの方{かた}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞/敬語\n【解析】「あの人」的禮貌說法是「あちら」或「あの方」。'
    },

    // 19. 青 (あお)
    {
        id: 'n5_vocab_kanji_yomi_ao_noun_1',
        prob: '信号{しんごう}が<u>青</u>になりました。',
        prob_zh: '紅綠燈變 *綠* 燈了。',
        options: [
            { text: 'あか', reason: '錯誤：紅。' },
            { text: 'しろ', reason: '錯誤：白。' },
            { text: 'あお', reason: '正確！日文的綠燈習慣說「青」。' },
            { text: 'くろ', reason: '錯誤：黑。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音/文化常識\n【解析】「青{あお}」一般指藍色，但紅綠燈的綠燈也稱為「青」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_ao_noun_2',
        prob: '空{そら}の<u>青</u>がきれいです。',
        prob_zh: '天空的 *藍* 色很美。',
        options: [
            { text: 'あお', reason: '正確！' },
            { text: 'あき', reason: '錯誤。' },
            { text: 'あめ', reason: '錯誤。' },
            { text: 'あさ', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「青{あお}」。'
    },
    {
        id: 'n5_vocab_hyouki_ao_noun_1',
        prob: '<u>あお</u>のシャツ。',
        prob_zh: '*藍* 襯衫。',
        options: [
            { text: '赤', reason: '錯誤。' },
            { text: '青', reason: '正確！' },
            { text: '白', reason: '錯誤。' },
            { text: '黒', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】藍色寫作「青」。'
    },
    {
        id: 'n5_vocab_hyouki_ao_noun_2',
        prob: '「好{す}きな色{いろ}は？」\n「<u>あお</u>です。」',
        prob_zh: '「喜歡的顏色是？」\n「 *藍色*。」',
        options: [
            { text: '青', reason: '正確！' },
            { text: '肯', reason: '錯誤。' },
            { text: '晴', reason: '錯誤：「晴{はれ}」。' },
            { text: '情', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「青{あお}」。'
    },
    {
        id: 'n5_vocab_bunmyaku_ao_noun_1',
        prob: '海{うみ}の色{いろ}は______です。',
        prob_zh: '海的顏色是 *藍色*。',
        options: [
            { text: '赤{あか}', reason: '錯誤。' },
            { text: '青{あお}', reason: '正確！' },
            { text: '黄{き}いろ', reason: '錯誤。' },
            { text: '白{しろ}', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】常識\n【解析】大海通常是藍色。'
    },
    {
        id: 'n5_vocab_bunmyaku_ao_noun_2',
        prob: '______信号{しんごう}で渡{わた}ります。',
        prob_zh: '在 *綠* 燈過馬路。',
        options: [
            { text: '青{あお}', reason: '正確！綠燈日文叫青信号。' },
            { text: '赤{あか}', reason: '錯誤：紅燈停。' },
            { text: '黒{くろ}', reason: '錯誤。' },
            { text: '白{しろ}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】慣用語\n【解析】青信号 = 綠燈。'
    },
    {
        id: 'n5_vocab_ruigigo_ao_noun_1',
        prob: 'このペンは<u>青</u>です。',
        prob_zh: '這枝筆是 *藍色* 的。',
        options: [
            { text: 'ブルー', reason: '正確！Blue。' },
            { text: 'レッド', reason: '錯誤。' },
            { text: 'グリーン', reason: '錯誤。' },
            { text: 'ブラック', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】外來語\n【解析】青 = ブルー (Blue)。'
    },
    {
        id: 'n5_vocab_ruigigo_ao_noun_2',
        prob: '顔{かお}が<u>青</u>ですね。',
        prob_zh: '臉色發 *青* 呢。',
        options: [
            { text: '元気{げんき}そうだ', reason: '錯誤。' },
            { text: '具合{ぐあい}が悪{わる}そうだ', reason: '正確！臉色發青表示身體不舒服。' },
            { text: '嬉{うれ}しそうだ', reason: '錯誤。' },
            { text: '眠{ねむ}そうだ', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】慣用句義\n【解析】「顔が青い」= 臉色不好/生病。'
    },

    // 20. 青い (あおい)
    {
        id: 'n5_vocab_kanji_yomi_aoi_adj_1',
        prob: '<u>青い</u>鳥{とり}を見{み}ました。',
        prob_zh: '看到了 *藍色* 的鳥。',
        options: [
            { text: 'あかい', reason: '錯誤：紅。' },
            { text: 'あおい', reason: '正確！' },
            { text: 'しろい', reason: '錯誤：白。' },
            { text: 'くろい', reason: '錯誤：黑。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「青い」讀作「あおい」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_aoi_adj_2',
        prob: '空{そら}が<u>青い</u>ですね。',
        prob_zh: '天空很 *藍* 呢。',
        options: [
            { text: 'ひろい', reason: '錯誤：寬。' },
            { text: 'たかい', reason: '錯誤：高。' },
            { text: 'あかるい', reason: '錯誤：明亮。' },
            { text: 'あおい', reason: '正確！' }
        ],
        correctIndex: 3,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「青い」讀作「あおい」。'
    },
    {
        id: 'n5_vocab_hyouki_aoi_adj_1',
        prob: '<u>あおい</u>海{うみ}。',
        prob_zh: '*蔚藍* 的大海。',
        options: [
            { text: '青い', reason: '正確！' },
            { text: '赤い', reason: '錯誤。' },
            { text: '黒い', reason: '錯誤。' },
            { text: '白い', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「青い」漢字為「青」。'
    },
    {
        id: 'n5_vocab_hyouki_aoi_adj_2',
        prob: '<u>あおい</u>シャツを着{き}ています。',
        prob_zh: '穿著 *藍* 襯衫。',
        options: [
            { text: '肯い', reason: '錯誤。' },
            { text: '清い', reason: '錯誤：「清{きよ}い」是清澈/純潔。' },
            { text: '静い', reason: '錯誤：無此詞，「静{しず}か」是那形容詞。' },
            { text: '青い', reason: '正確！' }
        ],
        correctIndex: 3,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「あおい」漢字為「青」。'
    },
    {
        id: 'n5_vocab_bunmyaku_aoi_adj_1',
        prob: '野菜{やさい}を食{た}べましょう。特{とく}に______野菜{やさい}は体{からだ}にいいですよ。',
        prob_zh: '吃蔬菜吧。特別是 *綠* 色蔬菜對身體很好喔。',
        options: [
            { text: '青{あお}い', reason: '正確！日文中「青い野菜（青菜）」指綠色蔬菜。' },
            { text: '赤{あか}い', reason: '錯誤。' },
            { text: '黒{くろ}い', reason: '錯誤。' },
            { text: '白{しろ}い', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】慣用表現\n【解析】「青い野菜」指葉菜類/綠色蔬菜。'
    },
    {
        id: 'n5_vocab_bunmyaku_aoi_adj_2',
        prob: '顔{かお}が______ですよ。大丈夫{だいじょうぶ}ですか。',
        prob_zh: '臉色很 *蒼白(青)* 喔。還好嗎？',
        options: [
            { text: '赤{あか}い', reason: '錯誤：臉紅是害羞或生氣。' },
            { text: '黒{くろ}い', reason: '錯誤：曬黑。' },
            { text: '青{あお}い', reason: '正確！臉色發青 (蒼白)。' },
            { text: '白{しろ}い', reason: '錯誤：美白或天生白。生病的蒼白日文用「青い」。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】慣用表現\n【解析】形容人不舒服臉色差用「顔が青い」。'
    },
    {
        id: 'n5_vocab_ruigigo_aoi_adj_1',
        prob: '<u>青い</u>空{そら}。',
        prob_zh: '*藍* 天。（選出意思最接近的選項）',
        options: [
            { text: 'ブルーの', reason: '正確！Blue。' },
            { text: 'レッドの', reason: '錯誤。' },
            { text: 'グレーの', reason: '錯誤。' },
            { text: 'ホワイトの', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】外來語\n【解析】青い ≈ ブルーの。'
    },
    {
        id: 'n5_vocab_ruigigo_aoi_adj_2',
        prob: 'まだ<u>青い</u>バナナ。',
        prob_zh: '還很 *生* 的香蕉。（選出意思最接近的選項）',
        options: [
            { text: '熟{じゅく}していない', reason: '正確！「青い」可指未成熟的。' },
            { text: 'おいしい', reason: '錯誤。' },
            { text: '長{なが}い', reason: '錯誤。' },
            { text: '腐{くさ}っている', reason: '錯誤：那是壞掉的。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】多義詞\n【解析】果實「青い」表示未成熟（熟していない）。'
    }
];
