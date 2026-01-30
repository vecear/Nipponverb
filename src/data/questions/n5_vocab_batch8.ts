import { StaticQuestion } from './types';

export const n5VocabBatch8: StaticQuestion[] = [
    // 36. 後 (あと)
    {
        id: 'n5_vocab_kanji_yomi_ato_1',
        prob: '<u>後</u>で電話{でんわ}します。',
        prob_zh: '*稍後* 會打電話。',
        options: [
            { text: 'うしろ', reason: '錯誤：後{うしろ}是指後方(位置)。这里是時間的「稍後」。' },
            { text: 'あと', reason: '正確！' },
            { text: 'まえ', reason: '錯誤：前。' },
            { text: 'なか', reason: '錯誤：中。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「後{あと}で」（稍後）。'
    },
    {
        id: 'n5_vocab_kanji_yomi_ato_2',
        prob: '学校{がっこう}が終{お}わった<u>後</u>、何{なに}をしますか。',
        prob_zh: '學校結束（放學） *後*，要做什麼？',
        options: [
            { text: 'ご', reason: '錯誤：放課後{ほうかご}的「後」讀「ご」，但「～た後」通常讀「あと」。' },
            { text: 'あと', reason: '正確！' },
            { text: 'のち', reason: '錯誤：較鄭重/書面語。N5考「あと」。' },
            { text: 'うしろ', reason: '錯誤：指背面。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】動詞他形+後{あと}（做完...之後）。'
    },
    {
        id: 'n5_vocab_hyouki_ato_1',
        prob: 'ごはんの<u>あと</u>で、薬{くすり}を飲{の}みます。',
        prob_zh: '飯 *後* 吃藥。',
        options: [
            { text: '後', reason: '正確！' },
            { text: '前', reason: '錯誤。' },
            { text: '時', reason: '錯誤。' },
            { text: '待', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「あと」漢字為「後」。'
    },
    {
        id: 'n5_vocab_hyouki_ato_2',
        prob: '<u>あと</u>５分{ふん}で始{はじ}まります。',
        prob_zh: '*還有* 5分鐘就開始了。',
        options: [
            { text: '後', reason: '正確！' },
            { text: '外', reason: '錯誤。' },
            { text: '右', reason: '錯誤。' },
            { text: '左', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「あと」（剩下/還有）寫作「後」。'
    },
    {
        id: 'n5_vocab_bunmyaku_ato_1',
        prob: '「お先に失礼します。」\n「どうぞ。私は______帰ります。」',
        prob_zh: '「我先走了。」\n「請。我 *稍後* 回去。」',
        options: [
            { text: '後{あと}で', reason: '正確！' },
            { text: '先{さき}に', reason: '錯誤：我「先」回去（那就你也先走了？文意矛盾，且通常對方先走自己後走）。' },
            { text: '前{まえ}に', reason: '錯誤。' },
            { text: '今{いま}', reason: '錯誤：若說「今帰ります」也可以，但在對比「お先に」的語境下，「後で」更強調「之後/晚點」。N5練習常考此對比。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】對話慣用\n【解析】お先に（先） <-> 後で（後）。'
    },
    {
        id: 'n5_vocab_bunmyaku_ato_2',
        prob: 'このバスは______１０分{ぷん}待{ま}ってください。',
        prob_zh: '這班公車請 *再* 等10分鐘（還有10分鐘會來）。',
        options: [
            { text: '後{あと}', reason: '正確！あと～分（還有/再...分）。' },
            { text: '前{まえ}', reason: '錯誤。' },
            { text: '次{つぎ}', reason: '錯誤。' },
            { text: '横{よこ}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】數量詞搭配\n【解析】あと＋数量詞（還剩下...）。'
    },
    {
        id: 'n5_vocab_ruigigo_ato_1',
        prob: '<u>後</u>で話{はな}します。',
        prob_zh: '*稍後* 說。（選出意思最接近的選項）',
        options: [
            { text: '今{いま}、話{はな}しません', reason: '正確！晚點說 = 現在不說。' },
            { text: '昨日{きのう}、話{はな}しました', reason: '錯誤。' },
            { text: 'すぐ話{はな}します', reason: '錯誤：這是馬上。' },
            { text: 'もう話{はな}しました', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】時間概念\n【解析】後で = 未來/現在不做。'
    },
    {
        id: 'n5_vocab_ruigigo_ato_2',
        prob: '<u>あと</u>一人{ひとり}です。',
        prob_zh: '*還有* 一個人（只剩一人）。（選出意思最接近的選項）',
        options: [
            { text: 'のこりは一人{ひとり}です', reason: '正確！残り（のこり）= 剩下。' },
            { text: '全部{ぜんぶ}で一人{ひとり}です', reason: '錯誤：全部只有一人? 語氣不完全一樣（あと暗示還有其他已經處理完）。' },
            { text: '一人{ひとり}来{き}ました', reason: '錯誤。' },
            { text: '一人{ひとり}もいません', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】語意理解\n【解析】あと（剩餘） = 残り。'
    },

    // 37. 厚い (あつい)
    {
        id: 'n5_vocab_kanji_yomi_atsui_thick_1',
        prob: 'この本{ほん}は<u>厚い</u>です。',
        prob_zh: '這本書很 *厚*。',
        options: [
            { text: 'あつい', reason: '正確！' },
            { text: 'おもい', reason: '錯誤：重い。' },
            { text: 'うすい', reason: '錯誤：薄い。' },
            { text: 'わるい', reason: '錯誤：悪い。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「厚{あつ}い」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_atsui_thick_2',
        prob: '<u>厚い</u>紙{かみ}。',
        prob_zh: '*厚* 紙。',
        options: [
            { text: 'あらい', reason: '錯誤。' },
            { text: 'あまい', reason: '錯誤：甘い。' },
            { text: 'あつい', reason: '正確！' },
            { text: 'あおい', reason: '錯誤：青い。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「厚{あつ}い」。'
    },
    {
        id: 'n5_vocab_hyouki_atsui_thick_1',
        prob: 'この辞書{じしょ}は<u>あつい</u>です。',
        prob_zh: '這本辭典很 *厚*。',
        options: [
            { text: '暑い', reason: '錯誤：天氣熱。' },
            { text: '熱い', reason: '錯誤：物體燙。' },
            { text: '厚い', reason: '正確！' },
            { text: '重い', reason: '錯誤：おもい。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】同音異義詞\n【解析】書本厚度用「厚い」。'
    },
    {
        id: 'n5_vocab_hyouki_atsui_thick_2',
        prob: '<u>あつい</u>セーターを着{き}ます。',
        prob_zh: '穿 *厚* 毛衣。',
        options: [
            { text: '熱い', reason: '錯誤。' },
            { text: '厚い', reason: '正確！' },
            { text: '暑い', reason: '錯誤。' },
            { text: '圧い', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】同音異義詞\n【解析】衣服厚度用「厚い」。'
    },
    {
        id: 'n5_vocab_bunmyaku_atsui_thick_1',
        prob: 'このノートは______て、使{つか}いにくいです。',
        prob_zh: '這本筆記本太 *厚*，很難用。',
        options: [
            { text: '太{ふと}く', reason: '錯誤：粗（形容圓柱體直徑大）。' },
            { text: '厚{あつ}く', reason: '正確！紙張堆疊的厚度。' },
            { text: '深{ふか}く', reason: '錯誤：深。' },
            { text: '高{たか}く', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】形容詞辨義\n【解析】書本/紙張用厚い。'
    },
    {
        id: 'n5_vocab_ruigigo_atsui_thick_1',
        prob: '<u>厚い</u>本{ほん}。',
        prob_zh: '*厚* 書。（選出反義詞）',
        options: [
            { text: '薄{うす}い本{ほん}', reason: '正確！厚 <-> 薄。' },
            { text: '軽{かる}い本{ほん}', reason: '錯誤：重 <-> 軽。' },
            { text: '安{やす}い本{ほん}', reason: '錯誤。' },
            { text: '細{ほそ}い本{ほん}', reason: '錯誤：太 <-> 細。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】反義詞\n【解析】厚い <-> 薄い。'
    },

    // 38. 暑い (あつい)
    {
        id: 'n5_vocab_kanji_yomi_atsui_weather_1',
        prob: '今日{きょう}はとても<u>暑い</u>です。',
        prob_zh: '今天非常 *熱*（天氣）。',
        options: [
            { text: 'さむい', reason: '錯誤：寒い。' },
            { text: 'あつい', reason: '正確！' },
            { text: 'ぬるい', reason: '錯誤：溫（微溫/不夠熱）。' },
            { text: 'あたたかい', reason: '錯誤：暖かい。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「暑{あつ}い」。'
    },
    {
        id: 'n5_vocab_hyouki_atsui_weather_1',
        prob: '夏{なつ}は<u>あつい</u>です。',
        prob_zh: '夏天很 *熱*。',
        options: [
            { text: '厚い', reason: '錯誤。' },
            { text: '熱い', reason: '錯誤。' },
            { text: '暑い', reason: '正確！天氣熱用暑。' },
            { text: '寒い', reason: '錯誤。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】同音異義詞\n【解析】氣溫熱用「暑い」。'
    },
    {
        id: 'n5_vocab_bunmyaku_atsui_weather_1',
        prob: '部屋{へや}が______ですから、窓{まど}を開{あ}けてください。',
        prob_zh: '房間很 *熱*，請開窗。',
        options: [
            { text: '暑{あつ}い', reason: '正確！室溫/氣溫熱。' },
            { text: '熱{あつ}い', reason: '錯誤：觸覺燙。' },
            { text: '厚{あつ}い', reason: '錯誤。' },
            { text: '寒{さむ}い', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】漢字區分\n【解析】空氣熱用「暑い」。'
    },
    {
        id: 'n5_vocab_ruigigo_atsui_weather_1',
        prob: '<u>暑い</u>ですね。',
        prob_zh: '好 *熱* 啊。（選出反義詞）',
        options: [
            { text: '寒{さむ}いですね', reason: '正確！暑い <-> 寒い。' },
            { text: '冷{つめ}たいですね', reason: '錯誤：熱い <-> 冷たい。' },
            { text: '薄{うす}いですね', reason: '錯誤：厚い <-> 薄い。' },
            { text: '涼{すず}しいですね', reason: '錯誤：雖然有對比，但正規反義詞是寒い（冷）。涼しい（涼爽）是舒服的狀態，比較像暖和的反面，或熱的緩和。以選擇題來說，寒い最強烈對比。' } // Actually 暑い <-> 寒い is strictly correct for weather.
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】反義詞\n【解析】暑い <-> 寒い。'
    },

    // 39. 熱い (あつい)
    {
        id: 'n5_vocab_kanji_yomi_atsui_object_1',
        prob: '<u>熱い</u>お茶{ちゃ}を飲{の}みます。',
        prob_zh: '喝 *熱* 茶。',
        options: [
            { text: 'あまい', reason: '錯誤。' },
            { text: 'あつい', reason: '正確！' },
            { text: 'からい', reason: '錯誤：辛い。' },
            { text: 'にがい', reason: '錯誤：苦い。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「熱{あつ}い」。'
    },
    {
        id: 'n5_vocab_hyouki_atsui_object_1',
        prob: 'お風呂{ふろ}が<u>あつい</u>です。',
        prob_zh: '洗澡水很 *熱（燙）*。',
        options: [
            { text: '厚い', reason: '錯誤。' },
            { text: '暑い', reason: '錯誤。' },
            { text: '熱い', reason: '正確！物體/液體的熱。' },
            { text: '温い', reason: '錯誤：ぬるい。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】同音異義詞\n【解析】水溫熱用「熱い」。'
    },
    {
        id: 'n5_vocab_hyouki_atsui_object_2',
        prob: '<u>ねつ</u>がありますから、学校{がっこう}を休{やす}みます。',
        prob_zh: '因為有 *發燒（熱）*，所以請假。',
        options: [
            { text: '熱', reason: '正確！熱{ねつ}。' },
            { text: '暑', reason: '錯誤。' },
            { text: '厚', reason: '錯誤。' },
            { text: '病', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】名詞漢字\n【解析】發燒是「熱{ねつ}」。雖讀ねつ，但與熱い相關漢字相同。'
    },
    {
        id: 'n5_vocab_bunmyaku_atsui_object_1',
        prob: 'このスープは______ですから、気{き}をつけてください。',
        prob_zh: '這湯很 *燙*，請小心。',
        options: [
            { text: '熱{あつ}い', reason: '正確！' },
            { text: '暑{あつ}い', reason: '錯誤。' },
            { text: '厚{あつ}い', reason: '錯誤。' },
            { text: '冷{つめ}たい', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】語意區分\n【解析】食物的燙用「熱い」。'
    },
    {
        id: 'n5_vocab_ruigigo_atsui_object_1',
        prob: '<u>熱い</u>水{みず}。',
        prob_zh: '*熱* 水（開水/湯）。（選出反義詞）',
        options: [
            { text: '冷{つめ}たい水{みず}', reason: '正確！熱い <-> 冷めたい。' },
            { text: '寒{さむ}い水{みず}', reason: '錯誤：天氣寒冷才用寒い。' },
            { text: '甘{あま}い水{みず}', reason: '錯誤。' },
            { text: '多{おお}い水{みず}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】反義詞\n【解析】熱い(燙) <-> 冷たい(冰涼)。'
    },

    // 40. 会う (あう)
    {
        id: 'n5_vocab_kanji_yomi_au_1',
        prob: '友達{ともだち}に<u>会う</u>。',
        prob_zh: '*見* 朋友。',
        options: [
            { text: 'あう', reason: '正確！' },
            { text: 'いう', reason: '錯誤：言う。' },
            { text: 'かう', reason: '錯誤：買う。' },
            { text: 'すう', reason: '錯誤：吸う。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「会{あ}う」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_au_2',
        prob: '駅{えき}で先生{せんせい}に<u>会いました</u>。',
        prob_zh: '在車站 *遇見* 了老師。',
        options: [
            { text: 'あいました', reason: '正確！' },
            { text: 'あいいました', reason: '錯誤。' },
            { text: 'いいました', reason: '錯誤。' },
            { text: 'かいました', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「会{あ}いました」。'
    },
    {
        id: 'n5_vocab_hyouki_au_1',
        prob: '先生{せんせい}に<u>あいたい</u>です。',
        prob_zh: '想 *見* 老師。',
        options: [
            { text: '会いたい', reason: '正確！' },
            { text: '合いたい', reason: '錯誤：合う（合適/一致）。' },
            { text: '見いたい', reason: '錯誤。' },
            { text: '今は', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】見面用「会う」。'
    },
    {
        id: 'n5_vocab_hyouki_au_2',
        prob: 'また<u>あいましょう</u>。',
        prob_zh: '下次再 *見* 吧。',
        options: [
            { text: '会いましょう', reason: '正確！' },
            { text: '合いましょう', reason: '錯誤。' },
            { text: '行きましょう', reason: '錯誤。' },
            { text: '見ましょう', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】會面用「会」。'
    },
    {
        id: 'n5_vocab_bunmyaku_au_1',
        prob: '明日{あした}、ここて゛田中{たなか}さんに______約束{やくそく}があります。',
        prob_zh: '明天約好在這裡 *見* 田中先生。',
        options: [
            { text: '会{あ}う', reason: '正確！' },
            { text: '見{み}る', reason: '錯誤：單方面看。見面互動用(に)会う。' },
            { text: '話{はな}す', reason: '錯誤：雖然可以說話す約束（約好談話），但「に話す」助詞搭配雖可，通常「会う」更常用於見面約定。若選項並列，会う是見面最基本詞彙。' },
            { text: '行{い}く', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】助詞搭配與動詞意義\n【解析】人に会う（與人見面）。'
    },
    {
        id: 'n5_vocab_bunmyaku_au_2',
        prob: '喫茶店{きっさてん}で友達{ともだち}______会{あ}いました。',
        prob_zh: '在咖啡廳 *見* 了朋友。',
        options: [
            { text: 'に', reason: '正確！会う的對象用「に」（有時用「と」表示雙向，但N5通常教「に」）。' },
            { text: 'を', reason: '錯誤。' },
            { text: 'へ', reason: '錯誤。' },
            { text: 'で', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】助詞\n【解析】～に会う。'
    }
];
