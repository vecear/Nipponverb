import { StaticQuestion } from './types';

export const n5VocabBatch2: StaticQuestion[] = [
    // 6. 赤 (あか)
    {
        id: 'n5_vocab_kanji_yomi_aka_1',
        prob: '信号{しんごう}が<u>赤</u>になりました。',
        prob_zh: '紅綠燈變成 *紅* 燈了。',
        options: [
            { text: 'あお', reason: '錯誤：青{あお}是綠/藍燈。' },
            { text: 'あか', reason: '正確！' },
            { text: 'くろ', reason: '錯誤：黑。' },
            { text: 'しろ', reason: '錯誤：白。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「赤{あか}」是紅色/紅燈。'
    },
    {
        id: 'n5_vocab_kanji_yomi_aka_2',
        prob: 'あの<u>赤</u>のシャツは誰{だれ}のですか。',
        prob_zh: '那件 *紅色* 的襯衫是誰的？',
        options: [
            { text: 'あお', reason: '錯誤。' },
            { text: 'あき', reason: '錯誤：秋天。' },
            { text: 'あか', reason: '正確！' },
            { text: 'あさ', reason: '錯誤：早上。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】顏色名詞「赤{あか}」。'
    },
    {
        id: 'n5_vocab_hyouki_aka_1',
        prob: '<u>あか</u>いペンで書{か}いてください。',
        prob_zh: '請用 *紅* 筆寫。',
        options: [
            { text: '青', reason: '錯誤：藍色。' },
            { text: '赤', reason: '正確！' },
            { text: '黒', reason: '錯誤：黑色。' },
            { text: '白', reason: '錯誤：白色。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】紅色寫作「赤」。'
    },
    {
        id: 'n5_vocab_hyouki_aka_2',
        prob: '「何色{なにいろ}が好{す}きですか。」\n「<u>あか</u>が好{す}きです。」',
        prob_zh: '「喜歡什麼顏色？」\n「喜歡 *紅色*。」',
        options: [
            { text: '赤', reason: '正確！' },
            { text: '紅', reason: '錯誤：日文常用顏色名詞用「赤」，「紅{べに}」較少用於此類一般語境。' },
            { text: '空', reason: '錯誤：空。' },
            { text: '色', reason: '錯誤：色。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】一般紅色用「赤」。'
    },
    {
        id: 'n5_vocab_bunmyaku_aka_1',
        prob: '止{と}まれのサインは______です。',
        prob_zh: '停止的標誌是 *紅色* 的。',
        options: [
            { text: '赤{あか}', reason: '正確！停止通常用紅色。' },
            { text: '白{しろ}', reason: '錯誤。' },
            { text: '青{あお}', reason: '錯誤。' },
            { text: '黃{き}いろ', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】常識推斷\n【解析】停止標誌是紅色的。'
    },
    {
        id: 'n5_vocab_bunmyaku_aka_2',
        prob: 'リンゴは熟{じゅく}すと______くなります。',
        prob_zh: '蘋果成熟後會變 *紅*。',
        options: [
            { text: '青{あお}', reason: '錯誤。' },
            { text: '黒{くろ}', reason: '錯誤。' },
            { text: '赤{あか}', reason: '正確！蘋果是紅的。' },
            { text: '白{しろ}', reason: '錯誤。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】常識推斷\n【解析】蘋果成熟是紅色。'
    },
    {
        id: 'n5_vocab_ruigigo_aka_1',
        prob: '<u>赤</u>のチームが勝{か}ちました。',
        prob_zh: '*紅* 隊贏了。',
        options: [
            { text: 'レッド', reason: '正確！Red = 赤。' },
            { text: 'ブルー', reason: '錯誤：Blue。' },
            { text: 'ホワイト', reason: '錯誤：White。' },
            { text: 'ブラック', reason: '錯誤：Black。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】外來語對應\n【解析】赤 = Red (レッド)。'
    },
    {
        id: 'n5_vocab_ruigigo_aka_2',
        prob: '顔{かお}が<u>赤</u>ですね。',
        prob_zh: '臉很 *紅* 呢。',
        options: [
            { text: '青{あお}い', reason: '錯誤：臉色發青 (不舒服)。' },
            { text: '熱{あつ}そうだ', reason: '正確！臉紅通常代表發燒或覺得熱/害羞。' },
            { text: '寒{さむ}そうだ', reason: '錯誤：冷通常臉色發白或發青。' },
            { text: '冷{つめ}たそうだ', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】語境推斷\n【解析】臉紅(赤)通常與熱(熱い)有關。'
    },

    // 7. 赤い (あかい)
    {
        id: 'n5_vocab_kanji_yomi_akai_1',
        prob: '<u>赤い</u>靴{くつ}を履{は}いています。',
        prob_zh: '穿著 *紅色* 的鞋子。',
        options: [
            { text: 'あおい', reason: '錯誤。' },
            { text: 'あかい', reason: '正確！' },
            { text: 'あまい', reason: '錯誤：甜。' },
            { text: 'あらい', reason: '錯誤：粗糙。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「赤{あか}い」：紅色的。'
    },
    {
        id: 'n5_vocab_kanji_yomi_akai_2',
        prob: 'この花{はな}は<u>赤い</u>ですね。',
        prob_zh: '這朵花是 *紅色* 的呢。',
        options: [
            { text: 'くろい', reason: '錯誤。' },
            { text: 'しろい', reason: '錯誤。' },
            { text: 'あかい', reason: '正確！' },
            { text: 'あおい', reason: '錯誤。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「赤{あか}い」。'
    },
    {
        id: 'n5_vocab_hyouki_akai_1',
        prob: '<u>あかい</u>りんごを食{た}べました。',
        prob_zh: '吃了 *紅色* 的蘋果。',
        options: [
            { text: '青い', reason: '錯誤。' },
            { text: '紅い', reason: '錯誤：常用漢字為「赤」。' },
            { text: '茶い', reason: '錯誤：茶色通常不加い，或說茶色い。' },
            { text: '赤い', reason: '正確！' }
        ],
        correctIndex: 3,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「あかい」=「赤い」。'
    },
    {
        id: 'n5_vocab_hyouki_akai_2',
        prob: '「顔{かお}が<u>あかい</u>ですよ。」',
        prob_zh: '「臉很 *紅* 喔。」',
        options: [
            { text: '赤い', reason: '正確！' },
            { text: '亜かい', reason: '錯誤。' },
            { text: '悪かい', reason: '錯誤。' },
            { text: '阿かい', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】紅色「赤い」。'
    },
    {
        id: 'n5_vocab_bunmyaku_akai_1',
        prob: 'ポストは______です。',
        prob_zh: '郵筒是 *紅色* 的。',
        options: [
            { text: '赤{あか}い', reason: '正確！日本郵筒通常是紅色的。' },
            { text: '青{あお}い', reason: '錯誤。' },
            { text: '白{しろ}い', reason: '錯誤。' },
            { text: '黒{くろ}い', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】常識\n【解析】日本郵筒是紅色的。'
    },
    {
        id: 'n5_vocab_bunmyaku_akai_2',
        prob: 'お酒{さけ}を飲{の}んで、顔{かお}が______なりました。',
        prob_zh: '喝了酒，臉變 *紅* 了。',
        options: [
            { text: '白{しろ}く', reason: '錯誤。' },
            { text: '赤{あか}く', reason: '正確！喝酒臉紅。' },
            { text: '黒{くろ}く', reason: '錯誤。' },
            { text: '青{あお}く', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】生理反應\n【解析】喝酒臉紅，形容詞去い+く+なる。'
    },
    {
        id: 'n5_vocab_ruigigo_akai_1',
        prob: '<u>赤い</u>シャツを買{か}いました。',
        prob_zh: '買了 *紅* 襯衫。',
        options: [
            { text: 'レッドの', reason: '正確！Red。' },
            { text: 'ブルーの', reason: '錯誤。' },
            { text: 'イエローの', reason: '錯誤。' },
            { text: 'グリーンの', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】外來語\n【解析】赤い = レッド (Red)。'
    },
    {
        id: 'n5_vocab_ruigigo_akai_2',
        prob: '目{め}が<u>赤く</u>なりました。',
        prob_zh: '眼睛變 *紅* 了。',
        options: [
            { text: '眠{ねむ}そうです', reason: '錯誤。' },
            { text: '泣{な}いたようです', reason: '正確！哭過通常眼睛會紅。' },
            { text: '笑{わら}ったようです', reason: '錯誤。' },
            { text: '食{た}べたようです', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】語境推斷\n【解析】眼睛紅通常是因為哭過、過敏或疲勞。選項中「泣いた」最合理。'
    },

    // 8. 明るい (あかるい)
    {
        id: 'n5_vocab_kanji_yomi_akarui_1',
        prob: 'この部屋{へや}はとても<u>明るい</u>ですね。',
        prob_zh: '這個房間非常 *明亮* 呢。',
        options: [
            { text: 'あかるうい', reason: '錯誤：多了長音。' },
            { text: 'あがるい', reason: '錯誤：清濁音錯誤。' },
            { text: 'あかるい', reason: '正確！' },
            { text: 'あっかるい', reason: '錯誤：多了促音。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「明{あか}るい」是 i 形容詞。'
    },
    {
        id: 'n5_vocab_kanji_yomi_akarui_2',
        prob: '「この部屋{へや}は<u>明るい</u>ですね。」\n「はい、窓{まど}が大{おお}きいですから。」',
        prob_zh: '「這個房間很 *明亮* 呢。」\n「是的，因為窗戶很大。」',
        options: [
            { text: 'あかいるい', reason: '錯誤：拼寫錯誤。' },
            { text: 'あかるい', reason: '正確！' },
            { text: 'あっかるい', reason: '錯誤。' },
            { text: 'あかるーい', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】無促音或長音。'
    },
    {
        id: 'n5_vocab_hyouki_akarui_1',
        prob: 'へやが<u>あかるい</u>です。',
        prob_zh: '房間很 *明亮*。',
        options: [
            { text: '開るい', reason: '錯誤。' },
            { text: '空るい', reason: '錯誤。' },
            { text: '赤るい', reason: '錯誤。' },
            { text: '明るい', reason: '正確！' }
        ],
        correctIndex: 3,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「明{あか}るい」的漢字為「明」。'
    },
    {
        id: 'n5_vocab_hyouki_akarui_2',
        prob: '「この店{みせ}は<u>あかるい</u>ですね。」',
        prob_zh: '「這家店很 *明亮* 呢。」',
        options: [
            { text: '明るい', reason: '正確！' },
            { text: '朗るい', reason: '錯誤。' },
            { text: '晃るい', reason: '錯誤。' },
            { text: '昭るい', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】表示光線明亮，漢字寫作「明{あか}るい」。'
    },
    {
        id: 'n5_vocab_bunmyaku_akarui_1',
        prob: '朝{あさ}になって、外{そと}が______なりました。',
        prob_zh: '到了早上，外面變 *亮* 了。',
        options: [
            { text: '暗{くら}く', reason: '錯誤。' },
            { text: '明{あか}るく', reason: '正確！' },
            { text: '広{ひろ}く', reason: '錯誤。' },
            { text: '長{なが}く', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境\n【解析】早上天亮，選「明{あか}るく」。'
    },
    {
        id: 'n5_vocab_bunmyaku_akarui_2',
        prob: '「この部屋{へや}、どうですか。」',
        prob_zh: '「這個房間如何？」',
        options: [
            { text: '暗{くら}い', reason: '錯誤。' },
            { text: '重{おも}い', reason: '錯誤。' },
            { text: '明{あか}るい', reason: '正確！' },
            { text: '軽{かる}い', reason: '錯誤。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境\n【解析】正面評價通常選明亮。'
    },
    {
        id: 'n5_vocab_ruigigo_akarui_1',
        prob: 'この部屋{へや}は<u>明るい</u>です。',
        prob_zh: '這個房間很 *明亮*。',
        options: [
            { text: '暗{くら}い', reason: '錯誤。' },
            { text: '狭{せま}い', reason: '錯誤。' },
            { text: '静{しず}かだ', reason: '錯誤。' },
            { text: '光{ひかり}がたくさんある', reason: '正確！' }
        ],
        correctIndex: 3,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞\n【解析】「明{あか}るい」＝有很多光線。'
    },
    {
        id: 'n5_vocab_ruigigo_akarui_2',
        prob: '「あの人{ひと}は<u>明るい</u>性格{せいかく}ですね。」',
        prob_zh: '「那個人性格很 *開朗* 呢。」',
        options: [
            { text: '元気{げんき}で楽{たの}しそうだ', reason: '正確！' },
            { text: '暗{くら}くて静{しず}かだ', reason: '錯誤。' },
            { text: '厳{きび}しい', reason: '錯誤。' },
            { text: '優{やさ}しい', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞（性格）\n【解析】「明{あか}るい」形容性格時＝開朗、有活力。'
    },

    // 9. 開ける (あける)
    {
        id: 'n5_vocab_kanji_yomi_akeru_1',
        prob: '窓{まど}を<u>開けて</u>ください。',
        prob_zh: '請 *打開* 窗戶。',
        options: [
            { text: 'あげて', reason: '錯誤。' },
            { text: 'あけて', reason: '正確！' },
            { text: 'かけて', reason: '錯誤。' },
            { text: 'つけて', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「開{あ}ける」讀作「あける」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_akeru_2',
        prob: 'かばんを<u>開ける</u>。',
        prob_zh: '*打開* 包包。',
        options: [
            { text: 'しめる', reason: '錯誤。' },
            { text: 'いれる', reason: '錯誤。' },
            { text: 'あける', reason: '正確！' },
            { text: 'だす', reason: '錯誤。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「開{あ}ける」讀作「あける」。'
    },
    {
        id: 'n5_vocab_hyouki_akeru_1',
        prob: 'ドアを<u>あけて</u>もいいですか。',
        prob_zh: '可以 *打開* 門嗎？',
        options: [
            { text: '空けて', reason: '錯誤。' },
            { text: '明けて', reason: '錯誤。' },
            { text: '開けて', reason: '正確！' },
            { text: '上げて', reason: '錯誤。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】同音異義字\n【解析】打開門窗用「開ける」。'
    },
    {
        id: 'n5_vocab_hyouki_akeru_2',
        prob: '「プレゼントを<u>あけます</u>よ。」',
        prob_zh: '「我要 *拆* (開) 禮物囉。」',
        options: [
            { text: '開けます', reason: '正確！' },
            { text: '空けます', reason: '錯誤。' },
            { text: '明けます', reason: '錯誤。' },
            { text: '揚げます', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】打開盒子/禮物用「開ける」。'
    },
    {
        id: 'n5_vocab_bunmyaku_akeru_1',
        prob: '暑{あつ}いですから、窓{まど}を______ください。',
        prob_zh: '很熱，請 *打開* 窗戶。',
        options: [
            { text: '開{あ}けて', reason: '正確！' },
            { text: '閉{し}めて', reason: '錯誤。' },
            { text: '消{け}して', reason: '錯誤。' },
            { text: '押{お}して', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】反義動作辨析\n【解析】熱→開窗通風。'
    },
    {
        id: 'n5_vocab_bunmyaku_akeru_2',
        prob: '教科書{きょうかしょ}の10ページを______。',
        prob_zh: '*翻開* 教科書第10頁。',
        options: [
            { text: '行{い}って', reason: '錯誤。' },
            { text: '見{み}て', reason: '錯誤。' },
            { text: '開{あ}けて', reason: '正確！' },
            { text: '聞{き}いて', reason: '錯誤。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】動作搭配\n【解析】翻開書本/頁面用「開ける」。'
    },
    {
        id: 'n5_vocab_ruigigo_akeru_1',
        prob: '店{みせ}を<u>開ける</u>。',
        prob_zh: '*開* 店（開始營業）。',
        options: [
            { text: '始{はじ}める', reason: '正確！' },
            { text: '終{お}わる', reason: '錯誤。' },
            { text: '休{やす}む', reason: '錯誤。' },
            { text: '閉{し}める', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞\n【解析】店を開ける = 営業を始める。'
    },
    {
        id: 'n5_vocab_ruigigo_akeru_2',
        prob: 'ドアを<u>開けました</u>。',
        prob_zh: '*打開* 了門。',
        options: [
            { text: 'オープンしました', reason: '正確！Open。' },
            { text: 'ノックしました', reason: '錯誤。' },
            { text: 'クローズしました', reason: '錯誤。' },
            { text: 'ロックしました', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】外來語\n【解析】開ける = オープンする (Open)。'
    },

    // 10. 秋 (あき)
    {
        id: 'n5_vocab_kanji_yomi_aki_1',
        prob: '日本{にほん}の<u>秋</u>はきれいです。',
        prob_zh: '日本的 *秋天* 很美。',
        options: [
            { text: 'はる', reason: '錯誤。' },
            { text: 'なつ', reason: '錯誤。' },
            { text: 'あき', reason: '正確！' },
            { text: 'ふゆ', reason: '錯誤。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「秋{あき}」讀作「あき」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_aki_2',
        prob: '夏{なつ}が終{お}わって、<u>秋</u>になりました。',
        prob_zh: '夏天結束，變成 *秋天* 了。',
        options: [
            { text: 'あき', reason: '正確！' },
            { text: 'あさ', reason: '錯誤。' },
            { text: 'あめ', reason: '錯誤。' },
            { text: 'あか', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「秋{あき}」。'
    },
    {
        id: 'n5_vocab_hyouki_aki_1',
        prob: '<u>あき</u>には紅葉{もみじ}を見{み}にいきます。',
        prob_zh: '*秋天* 會去賞楓。',
        options: [
            { text: '春', reason: '錯誤。' },
            { text: '秋', reason: '正確！' },
            { text: '夏', reason: '錯誤。' },
            { text: '冬', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】秋天「秋」。'
    },
    {
        id: 'n5_vocab_hyouki_aki_2',
        prob: '「好{す}きな季節{きせつ}はいつですか。」\n「<u>あき</u>です。」',
        prob_zh: '「喜歡的季節是什麼時候？」\n「 *秋天*。」',
        options: [
            { text: '秋', reason: '正確！' },
            { text: '科', reason: '錯誤。' },
            { text: '明', reason: '錯誤。' },
            { text: '空', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】季節的秋天寫作「秋」。'
    },
    {
        id: 'n5_vocab_bunmyaku_aki_1',
        prob: '9月、10月、11月は______です。',
        prob_zh: '9月、10月、11月是 *秋天*。',
        options: [
            { text: '春{はる}', reason: '錯誤。' },
            { text: '夏{なつ}', reason: '錯誤。' },
            { text: '秋{あき}', reason: '正確！' },
            { text: '冬{ふゆ}', reason: '錯誤。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】常識\n【解析】9-11月是秋季。'
    },
    {
        id: 'n5_vocab_bunmyaku_aki_2',
        prob: '______は涼{すず}しいです。',
        prob_zh: '*秋天* 很涼爽。',
        options: [
            { text: '夏{なつ}', reason: '錯誤。' },
            { text: '冬{ふゆ}', reason: '錯誤。' },
            { text: '秋{あき}', reason: '正確！' },
            { text: '春{はる}', reason: '錯誤。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】氣候特徵\n【解析】涼{すず}しい通常形容秋天。'
    },
    {
        id: 'n5_vocab_ruigigo_aki_1',
        prob: 'もうすぐ<u>秋</u>です。',
        prob_zh: '快 *秋天* 了。',
        options: [
            { text: '涼{すず}しい季節{きせつ}', reason: '正確！' },
            { text: '暑{あつ}い季節{きせつ}', reason: '錯誤。' },
            { text: '寒{さむ}い季節{きせつ}', reason: '錯誤。' },
            { text: '暖{あたた}かい季節{きせつ}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】季節特徵\n【解析】秋 = 涼爽。'
    },
    {
        id: 'n5_vocab_ruigigo_aki_2',
        prob: '<u>秋</u>になりました。',
        prob_zh: '到了 *秋天*。',
        options: [
            { text: 'オータム', reason: '正確！Autumn。' },
            { text: 'サマー', reason: '錯誤。' },
            { text: 'ウインター', reason: '錯誤。' },
            { text: 'スプリング', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】外來語\n【解析】秋 = オータム (Autumn)。'
    }
];
