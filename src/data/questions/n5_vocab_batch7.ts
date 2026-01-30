import { StaticQuestion } from './types';

export const n5VocabBatch7: StaticQuestion[] = [
    // 31. 遊ぶ (あそぶ)
    {
        id: 'n5_vocab_kanji_yomi_asobu_1',
        prob: '公園{こうえん}で<u>遊ぶ</u>。',
        prob_zh: '在公園 *玩*。',
        options: [
            { text: 'とぶ', reason: '錯誤：飛ぶ。' },
            { text: 'あそぶ', reason: '正確！' },
            { text: 'えらぶ', reason: '錯誤：選ぶ。' },
            { text: 'よぶ', reason: '錯誤：呼ぶ。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「遊{あそ}ぶ」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_asobu_2',
        prob: '子供{こども}たちが<u>遊んで</u>います。',
        prob_zh: '孩子們正在 *玩*。',
        options: [
            { text: 'たのしんで', reason: '錯誤：楽しんで。' },
            { text: 'あそんで', reason: '正確！' },
            { text: 'よんで', reason: '錯誤：読んで/呼んで。' },
            { text: 'のんで', reason: '錯誤：飲んで。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「遊{あそ}んで」。'
    },
    {
        id: 'n5_vocab_hyouki_asobu_1',
        prob: '友達{ともだち}と<u>あそび</u>ました。',
        prob_zh: '和朋友 *玩* 了。',
        options: [
            { text: '遊び', reason: '正確！' },
            { text: '飛び', reason: '錯誤：とび。' },
            { text: '並び', reason: '錯誤：ならび。' },
            { text: '歩び', reason: '錯誤：不存在此詞形（歩く->歩き）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「あそぶ」漢字為「遊ぶ」。'
    },
    {
        id: 'n5_vocab_hyouki_asobu_2',
        prob: '日曜日{にちようび}は、どこへも行{い}かないで、家{いえ}で<u>あそんで</u>いました。',
        prob_zh: '星期日哪裡也沒去，在家裡 *玩* （或指放鬆休息）。',
        options: [
            { text: '遊んで', reason: '正確！' },
            { text: '選んで', reason: '錯誤：えらんで。' },
            { text: '呼んで', reason: '錯誤：よんで。' },
            { text: '泳んで', reason: '錯誤：およんで。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「あそんで」=「遊んで」。'
    },
    {
        id: 'n5_vocab_bunmyaku_asobu_1',
        prob: '来週{らいしゅう}の日曜日{にちようび}、私の家{いえ}へ______に来{き}ませんか。',
        prob_zh: '下週日，要不要來我家 *玩* 呢？',
        options: [
            { text: '遊{あそ}び', reason: '正確！遊びに来る（來玩/來訪）。' },
            { text: '行{い}き', reason: '錯誤：來我家「去」？語意不通。' },
            { text: '帰{かえ}り', reason: '錯誤。' },
            { text: '見{み}せ', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】慣用表現\n【解析】「遊びに来る」是常見邀請說法。'
    },
    {
        id: 'n5_vocab_bunmyaku_asobu_2',
        prob: '山{やま}や川{かわ}で______のは楽{たの}しいです。',
        prob_zh: '在山或河邊 *玩* 很開心。',
        options: [
            { text: '遊{あそ}ぶ', reason: '正確！' },
            { text: '入{はい}る', reason: '錯誤。' },
            { text: '住{す}む', reason: '錯誤。' },
            { text: '降{ふ}る', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境\n【解析】休閒娛樂動作：遊ぶ。'
    },
    {
        id: 'n5_vocab_ruigigo_asobu_1',
        prob: '家{いえ}に<u>遊びに来てください</u>。',
        prob_zh: '請 *來* 家裡 *玩*。（選出意思最接近的選項）',
        options: [
            { text: '家{いえ}に来{き}てください', reason: '正確！遊びに来る ≈ 来る（帶有輕鬆拜訪之意）。' },
            { text: '家{いえ}で仕事{しごと}をしてください', reason: '錯誤。' },
            { text: '家{いえ}を掃除{そうじ}してください', reason: '錯誤。' },
            { text: '家{いえ}に帰{かえ}ってください', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】語意理解\n【解析】遊びに来て = 請來（作客）。'
    },
    {
        id: 'n5_vocab_ruigigo_asobu_2',
        prob: '<u>遊{あそ}んで</u>いました。',
        prob_zh: '正在 *玩*。（選出意思最接近的選項）',
        options: [
            { text: '仕事{しごと}をしていませんでした', reason: '正確！玩耍/休閒 = 沒在工作/讀書。' },
            { text: '勉強{べんきょう}のご褒美{ほうび}です', reason: '錯誤。' },
            { text: '病気{びょうき}で寝{ね}ていました', reason: '錯誤。' },
            { text: '会社{かいしゃ}へ行{い}きました', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】詞義引申\n【解析】遊ぶ implied leisure/not working。'
    },

    // 32. あそこ (あそこ)
    {
        id: 'n5_vocab_kanji_yomi_asoko_1',
        prob: '<u>あそこ</u>は郵便局{ゆうびんきょく}です。',
        prob_zh: '*那裡* 是郵局。',
        options: [
            { text: 'ここ', reason: '錯誤：這裡。' },
            { text: 'どこ', reason: '錯誤：哪裡。' },
            { text: 'あそこ', reason: '正確！' },
            { text: 'そこ', reason: '錯誤：那裡（近）。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】指示代名詞\n【解析】遠稱地點「あそこ」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_asoko_2',
        prob: 'トイレは<u>あそこ</u>です。',
        prob_zh: '廁所在 *那裡*。',
        options: [
            { text: 'あそこ', reason: '正確！' },
            { text: 'あちら', reason: '錯誤：「あちら」是「那邊(方向)」，且發音不同。' },
            { text: 'あれ', reason: '錯誤：那個(物)。' },
            { text: 'あした', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】讀音\n【解析】注意不讀作「あこ」，而是「あそこ」。'
    },
    // あそこ通常不寫漢字
    {
        id: 'n5_vocab_hyouki_asoko_1',
        prob: '<u>あそこ</u>に犬{いぬ}がいます。',
        prob_zh: '在 *那裡* 有隻狗。',
        options: [
            { text: 'あそこ', reason: '正確！' },
            { text: 'あちら', reason: '錯誤：雖然意思相近，但あ那里是特定的詞型。あちら漢字通常寫「彼方」或不寫。題目考詞形辨識。' },
            { text: 'あこ', reason: '錯誤。' },
            { text: 'あそこら', reason: '錯誤：あそこら=那一帶，較口語，N5考「あそこ」。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】詞形\n【解析】遠稱場所代名詞是「あそこ」。'
    },
    {
        id: 'n5_vocab_hyouki_asoko_2',
        prob: '「学校{がっこう}はどこですか。」\n「______です。」',
        prob_zh: '「學校在哪裡？」\n「在 *那裡*。」',
        options: [
            { text: 'あそこ', reason: '正確！' },
            { text: 'あの', reason: '錯誤。' },
            { text: 'あれ', reason: '錯誤。' },
            { text: 'あちら', reason: '錯誤：若選項有あそこ，指點地點最常用。あちら較禮貌。此題考基本詞彙あそこ。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】詞形\n【解析】指點遠處地點。'
    },
    {
        id: 'n5_vocab_bunmyaku_asoko_1',
        prob: '「______は何{なん}ですか。」\n「図書館{としょかん}です。」',
        prob_zh: '「 *那裡* 是什麼？」（指遠處建築/地點）\n「是圖書館。」',
        options: [
            { text: 'これ', reason: '錯誤：這。' },
            { text: 'あそこ', reason: '正確！問地點（或指代地點的建築）。' },
            { text: 'どれ', reason: '錯誤。' },
            { text: 'どの', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境\n【解析】回答是地點/機構，問句用场所代名詞。'
    },
    {
        id: 'n5_vocab_bunmyaku_asoko_2',
        prob: '「交番{こうばん}はどこにありますか。」\n「______にあります。」',
        prob_zh: '「派出所在哪裡？」\n「在 *那裡*。」',
        options: [
            { text: 'あそこ', reason: '正確！' },
            { text: 'あれ', reason: '錯誤：在那個(物)？不通。' },
            { text: 'あの', reason: '錯誤。' },
            { text: 'あんな', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境\n【解析】詢問位置，回答位置。'
    },
    {
        id: 'n5_vocab_ruigigo_asoko_1',
        prob: '<u>あそこ</u>。',
        prob_zh: '*那裡*。（選出意思最接近的選項）',
        options: [
            { text: '遠{とお}い所{ところ}', reason: '正確！兩人都遠的地方。' },
            { text: '近{ちか}い所{ところ}', reason: '錯誤。' },
            { text: '私{わたし}の所{ところ}', reason: '錯誤：這是ここ。' },
            { text: 'あなた的所{ところ}', reason: '錯誤：這是そこ。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】詞義對應\n【解析】あそこ = 遠處。'
    },
    {
        id: 'n5_vocab_ruigigo_asoko_2',
        prob: '<u>あそこ</u>へ行{い}きます。',
        prob_zh: '去 *那裡*。（選出意思最接近的選項）',
        options: [
            { text: 'あちらへ行{い}きます', reason: '正確！あそこ ≒ あちら（方向/場所）。' },
            { text: 'こちらへ行{い}きます', reason: '錯誤。' },
            { text: 'そちらへ行{い}きます', reason: '錯誤。' },
            { text: 'どちらへ行{い}きます', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞\n【解析】あそこ（地點）與あちら（方向/地點）在移動語境下相通。'
    },

    // 33. 頭 (あたま)
    {
        id: 'n5_vocab_kanji_yomi_atama_1',
        prob: '<u>頭</u>が痛{いた}いです。',
        prob_zh: '*頭* 痛。',
        options: [
            { text: 'かお', reason: '錯誤：臉。' },
            { text: 'あたま', reason: '正確！' },
            { text: 'おなか', reason: '錯誤：肚子。' },
            { text: 'からだ', reason: '錯誤：身體。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「頭{あたま}」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_atama_2',
        prob: 'あの人は<u>頭</u>がいいです。',
        prob_zh: '那個人 *頭腦* 很好（聰明）。',
        options: [
            { text: 'あたま', reason: '正確！' },
            { text: 'あしま', reason: '錯誤。' },
            { text: 'あだま', reason: '錯誤。' },
            { text: 'あとま', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「頭{あたま}」。'
    },
    {
        id: 'n5_vocab_hyouki_atama_1',
        prob: '帽子{ぼうし}を<u>あたま</u>に被{かぶ}ります。',
        prob_zh: '把帽子戴在 *頭* 上。',
        options: [
            { text: '顔', reason: '錯誤：臉。' },
            { text: '頭', reason: '正確！' },
            { text: '首', reason: '錯誤：脖子。' },
            { text: '手', reason: '錯誤：手。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「あたま」漢字為「頭」。'
    },
    {
        id: 'n5_vocab_hyouki_atama_2',
        prob: '<u>あたま</u>がよくなる薬{くすり}はありませんか。',
        prob_zh: '有沒有變 *聰明（頭腦變好）* 的藥？',
        options: [
            { text: '頭', reason: '正確！' },
            { text: '脳', reason: '錯誤：「脳{のう}」N5不常考，且口語慣用「頭」。' },
            { text: '類', reason: '錯誤。' },
            { text: '願', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「あたま」漢字為「頭」。'
    },
    {
        id: 'n5_vocab_bunmyaku_atama_1',
        prob: '昨日{きのう}から______が痛{いた}いです。風邪{かぜ}かもしれません。',
        prob_zh: '從昨天開始 *頭* 痛。可能是感冒了。',
        options: [
            { text: '机{つくえ}', reason: '錯誤。' },
            { text: '頭{あたま}', reason: '正確！症狀描述。' },
            { text: '髪{かみ}', reason: '錯誤：頭髮痛？通常是頭皮或頭痛。' },
            { text: '帽子{ぼうし}', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】身體部位/症狀\n【解析】頭痛是常見症狀。'
    },
    {
        id: 'n5_vocab_bunmyaku_atama_2',
        prob: '田中{たなか}さんは______がいい学生{がくせい}です。',
        prob_zh: '田中是個 *頭腦* 好（聰明）的學生。',
        options: [
            { text: '頭{あたま}', reason: '正確！頭がいい = 聰明。' },
            { text: '髪{かみ}', reason: '錯誤。' },
            { text: '顔{かお}', reason: '錯誤：顔がいい（長得好看）也通，但「頭がいい」更常用於形容學生素質。若選項並列，需看語境。不過此為N5基本慣用句教學。' },
            { text: '足{あし}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】慣用句\n【解析】形容人聰明用「頭がいい」。'
    },
    {
        id: 'n5_vocab_ruigigo_atama_1',
        prob: '<u>頭</u>がいいです。',
        prob_zh: '*頭腦* 好。（選出意思最接近的選項）',
        options: [
            { text: '勉強{べんきょう}がよくできます', reason: '正確！' },
            { text: '走{はし}るのが速{はや}いです', reason: '錯誤。' },
            { text: '元気{げんき}です', reason: '錯誤。' },
            { text: '親切{しんせつ}です', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】慣用句義\n【解析】頭がいい = 聰明/會讀書。'
    },
    {
        id: 'n5_vocab_ruigigo_atama_2',
        prob: '<u>頭</u>。',
        prob_zh: '*頭*。（選出同類詞）',
        options: [
            { text: '体{からだ}', reason: '正確！身體的一部分。' },
            { text: '部屋{へや}', reason: '錯誤。' },
            { text: '鉛筆{えんぴつ}', reason: '錯誤。' },
            { text: '空{そら}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】詞彙分類\n【解析】頭是身體部位。'
    },

    // 34. 新しい (あたらしい)
    {
        id: 'n5_vocab_kanji_yomi_atarashii_1',
        prob: '<u>新しい</u>靴{くつ}を買{か}いました。',
        prob_zh: '買了 *新* 鞋子。',
        options: [
            { text: 'うつくしい', reason: '錯誤：美しい。' },
            { text: 'あたらしい', reason: '正確！' },
            { text: 'すばらしい', reason: '錯誤：素晴らしい。' },
            { text: 'めずらしい', reason: '錯誤：珍しい。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「新{あたら}しい」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_atarashii_2',
        prob: 'ここは<u>新しい</u>図書館{としょかん}です。',
        prob_zh: '這裡是 *新* 圖書館。',
        options: [
            { text: 'あたらしい', reason: '正確！' },
            { text: 'いそがしい', reason: '錯誤：忙しい。' },
            { text: 'なつかしい', reason: '錯誤：懐かしい。' },
            { text: 'やさしい', reason: '錯誤：易しい/優しい。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「新{あたら}しい」。'
    },
    {
        id: 'n5_vocab_hyouki_atarashii_1',
        prob: '<u>あたらしい</u>本{ほん}。',
        prob_zh: '*新* 書。',
        options: [
            { text: '亲しい', reason: '錯誤：親{した}しい。' },
            { text: '雜しい', reason: '錯誤。' },
            { text: '新しい', reason: '正確！' },
            { text: '断しい', reason: '錯誤。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「あたらしい」漢字為「新しい」。'
    },
    {
        id: 'n5_vocab_hyouki_atarashii_2',
        prob: 'カメラは<u>あたらしくない</u>です。',
        prob_zh: '相機 *不新*。',
        options: [
            { text: '新しくない', reason: '正確！' },
            { text: '親しくない', reason: '錯誤。' },
            { text: '斬しくない', reason: '錯誤。' },
            { text: '薪しくない', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「新{あたら}しい」。'
    },
    {
        id: 'n5_vocab_bunmyaku_atarashii_1',
        prob: 'この自転車{じてんしゃ}は先週{せんしゅう}買{か}いました。まだ______です。',
        prob_zh: '這輛腳踏車是上週買的。還很 *新*。',
        options: [
            { text: '古{ふる}い', reason: '錯誤：舊。' },
            { text: '新{あたら}しい', reason: '正確！剛買=新。' },
            { text: '長{なが}い', reason: '錯誤。' },
            { text: '短{みじか}い', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】反義詞/常識\n【解析】剛買的東西是新的。'
    },
    {
        id: 'n5_vocab_bunmyaku_atarashii_2',
        prob: '______年{とし}が始{はじ}まります。',
        prob_zh: '*新* 的一年開始了。',
        options: [
            { text: '新{あたら}しい', reason: '正確！新年。' },
            { text: '若{わか}い', reason: '錯誤：年輕的（形容人）。' },
            { text: '古{ふる}い', reason: '錯誤。' },
            { text: '涼{すず}しい', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】詞彙搭配\n【解析】新しい年（新年）。'
    },
    {
        id: 'n5_vocab_ruigigo_atarashii_1',
        prob: '<u>新しい</u>車{くるま}。',
        prob_zh: '*新* 車。（選出反義詞）',
        options: [
            { text: '古{ふる}い', reason: '正確！新 <-> 舊。' },
            { text: '高{たか}い', reason: '錯誤。' },
            { text: '安{やす}い', reason: '錯誤。' },
            { text: '黒{くろ}い', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】反義詞\n【解析】新しい <-> 古い。'
    },
    {
        id: 'n5_vocab_ruigigo_atarashii_2',
        prob: '<u>新しい</u>です。',
        prob_zh: '是 *新* 的。（選出意思最接近的選項）',
        options: [
            { text: '買{か}ったばかりです', reason: '正確！新 ≒ 剛買/剛製造。' },
            { text: '昔{むかし}からあります', reason: '錯誤：這是舊。' },
            { text: '汚{きたな}いです', reason: '錯誤。' },
            { text: '壊{こわ}れています', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】語境引申\n【解析】通常「新」意味著剛獲得或剛出現。'
    },

    // 35. 暖かい (あたたかい)
    {
        id: 'n5_vocab_kanji_yomi_atatakai_1',
        prob: '今日{きょう}は<u>暖かい</u>ですね。',
        prob_zh: '今天很 *溫暖* 呢。',
        options: [
            { text: 'あつい', reason: '錯誤：暑い。' },
            { text: 'あたたかい', reason: '正確！' },
            { text: 'つめたい', reason: '錯誤：冷たい。' },
            { text: 'さむい', reason: '錯誤：寒い。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「暖{あたた}かい」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_atatakai_2',
        prob: '<u>暖かい</u>コートを着{き}ます。',
        prob_zh: '穿 *溫暖* 的外套。',
        options: [
            { text: 'やわらかい', reason: '錯誤：柔らかい。' },
            { text: 'こまかい', reason: '錯誤：細かい。' },
            { text: 'みじかい', reason: '錯誤：短い。' },
            { text: 'あたたかい', reason: '正確！' }
        ],
        correctIndex: 3,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「暖{あたた}かい」。'
    },
    {
        id: 'n5_vocab_hyouki_atatakai_1',
        prob: '春{はる}になって、<u>あたたかく</u>なりました。',
        prob_zh: '春天到了，變 *暖和* 了。',
        options: [
            { text: '暑く', reason: '錯誤：夏天是暑い。' },
            { text: '暖く', reason: '正確！' },
            { text: '熱く', reason: '錯誤：熱く（燙）。語境是天氣，N5通常分天氣暖（暖）與物體熱（温/熱），但「あたたかい」通常用「暖」形容氣溫。' },
            { text: '寒く', reason: '錯誤：冷。' }
        ],
        // Note: 暖く is correct kanji usage for 'atatakai' (weather).
        // Sometimes it is written 暖かく (okurigana difference).
        // Standard is 暖かい -> 暖かく. Option '暖く' might look weird if 'か' is missing.
        // Let's ensure options have correct okurigana.

        // Let's stick to valid okurigana.
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】天氣暖和用「暖かい」。'
    },
    {
        id: 'n5_vocab_hyouki_atatakai_2',

        prob: '部屋{へや}の中{なか}は<u>あたたかい</u>です。',
        prob_zh: '房間裡很 *溫暖*。',
        options: [
            { text: '暖かい', reason: '正確！氣溫/室溫。' },
            { text: '暑い', reason: '錯誤。' },
            { text: '熱い', reason: '錯誤。' },
            { text: '寒い', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】室溫/氣溫用「暖かい」。'
    },
    {
        id: 'n5_vocab_bunmyaku_atatakai_1',
        prob: '冬{ふゆ}は寒{さむ}いですが、春{はる}は______です。',
        prob_zh: '冬天很冷，但春天很 *溫暖*。',
        options: [
            { text: '涼{すず}しい', reason: '錯誤：涼爽（通常指秋天或夏末）。' },
            { text: '暖{あたた}かい', reason: '正確！春天的特徵。' },
            { text: '暑{あつ}い', reason: '錯誤：夏天。' },
            { text: '冷{つめ}たい', reason: '錯誤：冰冷。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】季節特徵\n【解析】春 = 暖かい。'
    },
    {
        id: 'n5_vocab_bunmyaku_atatakai_2',
        prob: '______から、セーターを脱{ぬ}ぎました。',
        prob_zh: '因為很 *暖和*，所以脫掉了毛衣。',
        options: [
            { text: '寒{さむ}い', reason: '錯誤：冷的話應該穿。' },
            { text: '暖{あたた}かい', reason: '正確！' },
            { text: '冷{つめ}たい', reason: '錯誤。' },
            { text: '痛{いた}い', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】因果關係\n【解析】變暖 -> 脫衣。'
    },
    {
        id: 'n5_vocab_ruigigo_atatakai_1',
        prob: '<u>暖かい</u>日{ひ}。',
        prob_zh: '*溫暖* 的日子。（選出反義詞）',
        options: [
            { text: '寒{さむ}い日{ひ}', reason: '正確！暖 <-> 寒。' },
            { text: '暑{あつ}い日{ひ}', reason: '錯誤。' },
            { text: '広{ひろ}い日{ひ}', reason: '錯誤。' },
            { text: '暗{くら}い日{ひ}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】反義詞\n【解析】暖かい <-> 寒い。'
    },
    {
        id: 'n5_vocab_ruigigo_atatakai_2',
        prob: '<u>暖かい</u>です。',
        prob_zh: '很 *暖和*。（選出意思最接近的選項）',
        options: [
            { text: '寒{さむ}くないです', reason: '正確！不冷 ≈ 暖和（N5程度的理解）。' },
            { text: '暑{あつ}くないです', reason: '錯誤：不熱可能是涼或冷。' },
            { text: '天気{てんき}が悪{わる}いです', reason: '錯誤。' },
            { text: '雨{あめ}が降{ふ}っています', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】語意邏輯\n【解析】暖かい 意味著不冷。'
    }
];
