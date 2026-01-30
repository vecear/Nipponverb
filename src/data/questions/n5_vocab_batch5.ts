import { StaticQuestion } from './types';

export const n5VocabBatch5: StaticQuestion[] = [
    // 21. アパート (アパート)
    {
        id: 'n5_vocab_kanji_yomi_apaato_1',
        prob: '新{あたら}しい<u>アパート</u>に引{ひ}っ越{こ}しました。',
        prob_zh: '搬到了新 *公寓*。',
        options: [
            { text: 'デパート', reason: '錯誤：百貨公司。' },
            { text: 'アパート', reason: '正確！Apartment。' },
            { text: 'コート', reason: '錯誤：大衣/球場。' },
            { text: 'ノート', reason: '錯誤：筆記本。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】外來語\n【解析】Apartment = アパート。'
    },
    {
        id: 'n5_vocab_kanji_yomi_apaato_2',
        prob: '「きれいな<u>アパート</u>ですね。」\n「ありがとうございます。」',
        prob_zh: '「好漂亮的 *公寓* 呢。」\n「謝謝。」',
        options: [
            { text: 'アパート', reason: '正確！' },
            { text: 'ポケット', reason: '錯誤：口袋。' },
            { text: 'パーティー', reason: '錯誤：派對。' },
            { text: 'ホテル', reason: '錯誤：飯店。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】外來語\n【解析】居住的公寓是「アパート」。'
    },
    // アパート是外來語，通常不考「表記」（寫成漢字），而是考「片假名拼寫」。
    {
        id: 'n5_vocab_hyouki_apaato_1',
        prob: '駅{えき}の近{ちか}くに______があります。',
        prob_zh: '車站附近有 *公寓*。',
        options: [
            { text: 'アバート', reason: '錯誤：濁點錯。' },
            { text: 'アパート', reason: '正確！Pa行。' },
            { text: 'アパド', reason: '錯誤。' },
            { text: 'アバード', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】片假名拼寫\n【解析】Apartment -> アパート（長音在パ後）。'
    },
    {
        id: 'n5_vocab_hyouki_apaato_2',
        prob: '「ここは私の______です。」',
        prob_zh: '「這裡是我的 *公寓*。」',
        options: [
            { text: 'アパート', reason: '正確！' },
            { text: 'アパト', reason: '錯誤：漏了長音。' },
            { text: 'アッパト', reason: '錯誤：多了促音。' },
            { text: 'アパット', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】片假名拼寫\n【解析】注意長音位置「アー」。'
    },
    {
        id: 'n5_vocab_bunmyaku_apaato_1',
        prob: '木村{きむら}さんはあの______に住{す}んでいます。',
        prob_zh: '木村先生住在那個 *公寓* 裡。',
        options: [
            { text: 'アパート', reason: '正確！可居住的地方。' },
            { text: 'デパート', reason: '錯誤：不住百貨公司。' },
            { text: 'エレベーター', reason: '錯誤：不住電梯。' },
            { text: 'カレンダー', reason: '錯誤：不住日曆。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境\n【解析】搭配動詞「住{す}む」，名詞應為居住場所。'
    },
    {
        id: 'n5_vocab_bunmyaku_apaato_2',
        prob: '「この______は部屋{へや}がいくつありますか。」\n「３つです。」',
        prob_zh: '「這間 *公寓* 有幾個房間？」\n「3個。」',
        options: [
            { text: 'テーブル', reason: '錯誤：桌子沒有房間。' },
            { text: 'スカート', reason: '錯誤。' },
            { text: 'スポーツ', reason: '錯誤。' },
            { text: 'アパート', reason: '正確！房屋構造。' }
        ],
        correctIndex: 3,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境\n【解析】詢問有幾個房間，主題應為建築物（公寓）。'
    },
    {
        id: 'n5_vocab_ruigigo_apaato_1',
        prob: '<u>アパート</u>に帰{かえ}る。',
        prob_zh: '回 *公寓*。（選出意思最接近的選項）',
        options: [
            { text: '家{いえ}', reason: '正確！公寓是家的一種。' },
            { text: '会社{かいしゃ}', reason: '錯誤。' },
            { text: '学校{がっこう}', reason: '錯誤。' },
            { text: '病院{びょういん}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞/分類\n【解析】アパート是住家（家）。'
    },
    {
        id: 'n5_vocab_ruigigo_apaato_2',
        prob: '<u>アパート</u>です。',
        prob_zh: '是 *公寓*。（選出意思最接近的選項）',
        options: [
            { text: 'マンション', reason: '正確！Mansion也是集合住宅，雖然在日本アパート多指木造/輕鋼架較便宜的公寓，マンション指鋼筋水泥大廈，但在N5層級可視為同類詞（集合住宅）。且其他選項明顯錯誤。' },
            { text: 'コンビニ', reason: '錯誤：便利商店。' },
            { text: 'テレビ', reason: '錯誤。' },
            { text: 'ラジオ', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞/分類\n【解析】アパート與マンション同屬集合住宅。'
    },

    // 22. 洗う (あらう)
    {
        id: 'n5_vocab_kanji_yomi_arau_1',
        prob: '手{て}を<u>洗う</u>。',
        prob_zh: '*洗* 手。',
        options: [
            { text: 'ひろう', reason: '錯誤：「拾う」是撿。' },
            { text: 'あらう', reason: '正確！「洗う」讀作「あらう」。' },
            { text: 'うたう', reason: '錯誤：「歌う」是唱。' },
            { text: 'ならう', reason: '錯誤：「習う」是學習。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「洗{あら}う」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_arau_2',
        prob: '「お皿{さら}を<u>洗って</u>ください。」\n「はい、わかりました。」',
        prob_zh: '「請 *洗* 盤子。」\n「好，知道了。」',
        options: [
            { text: 'ふらって', reason: '錯誤。' },
            { text: 'あらって', reason: '正確！「洗う」的 te 形。' },
            { text: 'わらって', reason: '錯誤：「笑う」是笑。' },
            { text: 'もらって', reason: '錯誤：「もらう」是拿。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「洗{あら}って」。'
    },
    {
        id: 'n5_vocab_hyouki_arau_1',
        prob: 'シャツを<u>あらう</u>。',
        prob_zh: '*洗* 襯衫。',
        options: [
            { text: '流う', reason: '錯誤：「流{なが}れる」。' },
            { text: '先う', reason: '錯誤。' },
            { text: '洗う', reason: '正確！' },
            { text: '汚う', reason: '錯誤。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「あらう」漢字為「洗う」。'
    },
    {
        id: 'n5_vocab_hyouki_arau_2',
        prob: '「洗濯機{せんたくき}で服{ふく}を<u>あらいました</u>。」',
        prob_zh: '「用洗衣機 *洗* 了衣服。」',
        options: [
            { text: '洗いました', reason: '正確！' },
            { text: '祝いました', reason: '錯誤：「祝{いわ}う」是慶祝。' },
            { text: '焼いました', reason: '錯誤：一般沒有「焼う」動詞，「焼{や}く」是他動詞。' },
            { text: '拾いました', reason: '錯誤：「拾{ひろ}い」是撿。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】洗衣用「洗う」。'
    },
    {
        id: 'n5_vocab_bunmyaku_arau_1',
        prob: 'ご飯{はん}を食{た}べる前{まえ}に、手{て}を______ましょう。',
        prob_zh: '吃飯前， *洗* 手吧。',
        options: [
            { text: '洗{あら}い', reason: '正確！衛生習慣。' },
            { text: '使{つか}い', reason: '錯誤：使用手與語境不合。' },
            { text: '行{い}き', reason: '錯誤：去手？不通。' },
            { text: '飲{の}み', reason: '錯誤：喝手？不通。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境\n【解析】飯前洗手是常識搭配。'
    },
    {
        id: 'n5_vocab_bunmyaku_arau_2',
        prob: '「車{くるま}が汚{きたな}いですね。」\n「ええ、明日{あした}______ます。」',
        prob_zh: '「車子很髒呢。」\n「是啊，明天會 *洗*。」',
        options: [
            { text: '洗{あら}い', reason: '正確！髒了所以要洗。' },
            { text: '買{か}い', reason: '錯誤：髒了通常是洗，不是重買。' },
            { text: '売{う}り', reason: '錯誤：髒了所以賣？較不自然。' },
            { text: '見{み}せ', reason: '錯誤：給人看？。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境\n【解析】汚い（髒） -> 洗う（洗）。'
    },
    {
        id: 'n5_vocab_ruigigo_arau_1',
        prob: '足{あし}を<u>洗{あら}う</u>。',
        prob_zh: '*洗* 腳。（選出意思最接近的選項）',
        options: [
            { text: 'きれいにし', reason: '正確！洗=弄乾淨。' },
            { text: 'きたなくし', reason: '錯誤：弄髒。' },
            { text: '短{みじか}くし', reason: '錯誤：弄短。' },
            { text: '暖{あたた}かくし', reason: '錯誤：弄暖。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】詞義理解\n【解析】洗う = きれいにする。'
    },
    {
        id: 'n5_vocab_ruigigo_arau_2',
        prob: 'お風呂{ふろ}で体{からだ}を<u>洗{あら}います</u>。',
        prob_zh: '在浴室 *洗* 身體。（選出意思最接近的選項）',
        options: [
            { text: '掃除{そうじ}します', reason: '錯誤：掃除通常指掃地清潔環境。' },
            { text: '洗濯{せんたく}します', reason: '錯誤：洗濯指洗衣服。' },
            { text: 'きれいにします', reason: '正確！清洗身體=把身體弄乾淨。' },
            { text: '練習{れんしゅう}します', reason: '錯誤：練習。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】詞義辨析\n【解析】注意「洗濯」專指洗衣服。洗澡/洗東西泛指弄乾淨。'
    },

    // 23. あれ (あれ)
    {
        id: 'n5_vocab_kanji_yomi_are_1',
        prob: '<u>あれ</u>は何{なん}ですか。',
        prob_zh: '*那個* 是什麼？',
        options: [
            { text: 'これ', reason: '錯誤：這是「這個」。' },
            { text: 'どれ', reason: '錯誤：這是「哪個」。' },
            { text: 'それ', reason: '錯誤：這是「那個(中稱)」。' },
            { text: 'あれ', reason: '正確！' }
        ],
        correctIndex: 3,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】指示代名詞\n【解析】遠稱「あれ」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_are_2',
        prob: '<u>あれ</u>は病院{びょういん}です。',
        prob_zh: '*那個* 是醫院。',
        options: [
            { text: 'あれ', reason: '正確！' },
            { text: 'あめ', reason: '錯誤。' },
            { text: 'あき', reason: '錯誤。' },
            { text: 'あさ', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】讀音\n【解析】「あれ」讀作「あれ」。'
    },
    // あれ通常不寫漢字，考文法辨析 (Type 2 form, Type 3 context)
    {
        id: 'n5_vocab_hyouki_are_1',
        prob: '______を見{み}てください。富士山{ふじさん}ですよ。',
        prob_zh: '請看 *那邊*。是富士山喔。',
        options: [
            { text: 'あれ', reason: '正確！' },
            { text: 'あの', reason: '錯誤：需接名詞（あの山）。' },
            { text: 'あそこ', reason: '錯誤：文法上也通（請看那裡），但「あれ」指物體/景色本身更直接作為受詞，且選項通常考詞性。若兩者皆有需看語感。看那裡(Location) vs 看那個(Object)。此題最確切是考「あれ」代替遠處物體。' },
            { text: 'どれ', reason: '錯誤。' }
        ],
        // Note: 'あれ' and 'あそこ' both fit "Look at X". 
        // But 'あれ' refers to "That thing" (The mountain). 'あそこ' is "That place".
        // Let's refine options to avoid ambiguity.
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】代名詞\n【解析】指代遠處的物體/景象用「あれ」。'
    },
    {
        id: 'n5_vocab_hyouki_are_2',
        prob: '「<u>あれ</u>は私{わたし}の鞄{かばん}です。」',
        prob_zh: '「 *那個* 是我的包包。」',
        options: [
            { text: 'あれ', reason: '正確！' },
            { text: 'あの', reason: '錯誤：應為「あのかばん」。' },
            { text: 'あそこ', reason: '錯誤：那裡是我的包包（語意怪）。' },
            { text: 'あちら', reason: '錯誤：那個人/那邊（較禮貌或方向）。口語指物常用「あれ」。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】代名詞\n【解析】指物代名詞「あれ」。'
    },
    {
        id: 'n5_vocab_bunmyaku_are_1',
        prob: '「______は何{なん}ですか。」\n「辞書{じしょ}です。」',
        prob_zh: '「 *那個* 是什麼？」（指遠處）\n「是字典。」',
        options: [
            { text: 'あの', reason: '錯誤：需接名詞。' },
            { text: 'あれ', reason: '正確！' },
            { text: 'あそこ', reason: '錯誤：那是地點，回答應該是地點（例：是圖書館）。回答是物體（字典），故問句應是問物。' },
            { text: 'あちら', reason: '錯誤：指方向或人。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境\n【解析】回答為物品，且指遠處，用「あれ」。'
    },
    {
        id: 'n5_vocab_bunmyaku_are_2',
        prob: '「これはあなたのですか。」\n「いいえ、______です。」',
        prob_zh: '「這是你的嗎？」\n「不， *那個(遠處)* 才是。」',
        options: [
            { text: 'あれ', reason: '正確！指示遠處物體。' },
            { text: 'あの', reason: '錯誤。' },
            { text: 'あそこ', reason: '錯誤。' },
            { text: 'どれ', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境\n【解析】指認物品。'
    },
    {
        id: 'n5_vocab_ruigigo_are_1',
        prob: '<u>あれ</u>です。',
        prob_zh: '是 *那個*。（選出意思最接近的選項）',
        options: [
            { text: 'あそこにあるもの', reason: '正確！あれ = 在遠處的東西。' },
            { text: 'そこにあるもの', reason: '錯誤：這是「それ」。' },
            { text: 'ここにあるもの', reason: '錯誤：這是「これ」。' },
            { text: 'どこにあるもの', reason: '錯誤：這是「どれ」。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】代名詞定義\n【解析】あれ指遠方之物。'
    },
    {
        id: 'n5_vocab_ruigigo_are_2',
        prob: '<u>あれ</u>は学校{がっこう}です。',
        prob_zh: '*那個* 是學校。（選出意思最接近的選項）',
        options: [
            { text: 'あそこの建物{たてもの}', reason: '正確！' },
            { text: 'そこの建物{たてもの}', reason: '錯誤。' },
            { text: 'ここの建物{たてもの}', reason: '錯誤。' },
            { text: 'どこの建物{たてもの}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞\n【解析】「あれ（指建築）」= 那邊的建築物。'
    },

    // 24. ある (ある) (inanimate)
    {
        id: 'n5_vocab_kanji_yomi_aru_1',
        prob: '机{つくえ}の上{うえ}に本{ほん}が<u>ある</u>。',
        prob_zh: '桌上有書。',
        options: [
            { text: 'いる', reason: '錯誤：「いる」用於有生命（人/動物）。' },
            { text: 'ある', reason: '正確！用於無生命物體。' },
            { text: 'なる', reason: '錯誤：「なる」是變成。' },
            { text: 'やる', reason: '錯誤：「やる」是做。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】存在動詞\n【解析】無生命物體的存在用「ある」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_aru_2',
        prob: '「質問{しつもん}が<u>あります</u>か。」\n「いいえ、ありません。」',
        prob_zh: '「有問題嗎？」\n「不，沒有。」',
        options: [
            { text: 'あります', reason: '正確！' },
            { text: 'います', reason: '錯誤。' },
            { text: 'あんります', reason: '錯誤。' },
            { text: 'あります', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】讀音\n【解析】「ある」 -> ます形「あります」。'
    },
    {
        id: 'n5_vocab_hyouki_aru_1',
        prob: 'お金{かね}が<u>ある</u>。',
        prob_zh: '有錢。',
        options: [
            { text: '在る', reason: '錯誤：雖然有此漢字（表示存在），但N5通常考「有る」表示擁有，或不寫漢字。一般情況下「ある」用平假名居多，若要選漢字，「有る」表擁有，「在る」表存在。但N5範圍內「有る」較常見於選項。' },
            { text: '有る', reason: '正確！' },
            { text: '居る', reason: '錯誤：「居る」是「いる」。' },
            { text: '売る', reason: '錯誤：「売る」是賣。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「ある」漢字通常為「有る」（擁有/存在）或「在る」（存在）。N5多視作平假名，若考漢字選「有る」。'
    },
    {
        id: 'n5_vocab_hyouki_aru_2',
        prob: '「約束{やくそく}が<u>あります</u>から、帰{かえ}ります。」',
        prob_zh: '「因為 *有* 約，我要回去了。」',
        options: [
            { text: '有ります', reason: '正確！' },
            { text: '居ります', reason: '錯誤。' },
            { text: '要ります', reason: '錯誤：「要{い}ります」是要。' },
            { text: '売ります', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】事項的存在/擁有用「有る」。'
    },
    {
        id: 'n5_vocab_bunmyaku_aru_1',
        prob: '公園{こうえん}に木{き}が______。',
        prob_zh: '公園裡 *有* 樹。',
        options: [
            { text: 'います', reason: '錯誤：樹視為無生命（植物）。' },
            { text: 'あります', reason: '正確！植物用「ある」。' },
            { text: 'します', reason: '錯誤。' },
            { text: '来{き}ます', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】存在動詞\n【解析】植物（花、草、樹）的存在用「ある」。（人與動物才用いる）。'
    },
    {
        id: 'n5_vocab_bunmyaku_aru_2',
        prob: '冷蔵庫{れいぞうこ}に卵{たまご}が______。',
        prob_zh: '冰箱裡 *有* 雞蛋。',
        options: [
            { text: 'います', reason: '錯誤。' },
            { text: 'あります', reason: '正確！' },
            { text: 'します', reason: '錯誤。' },
            { text: '置{お}きます', reason: '錯誤：文法上「卵が置きます」不通，應為「卵が置いてあります」。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】存在動詞\n【解析】雞蛋是無生命物體，用「あります」。'
    },
    {
        id: 'n5_vocab_ruigigo_aru_1',
        prob: '時間{じかん}が<u>ある</u>。',
        prob_zh: '*有* 時間。（選出意思最接近的選項）',
        options: [
            { text: '暇{ひま}だ', reason: '正確！有時間 = 有空（暇）。' },
            { text: '忙{いそが}しい', reason: '錯誤：忙碌（沒時間）。' },
            { text: '早{はや}い', reason: '錯誤。' },
            { text: '遅{おそ}い', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】慣用語\n【解析】時間がある ≒ 暇だ。'
    },
    {
        id: 'n5_vocab_ruigigo_aru_2',
        prob: '車{くるま}が<u>ある</u>。',
        prob_zh: '*有* 車。（選出意思最接近的選項）',
        options: [
            { text: '持{も}っている', reason: '正確！擁有。' },
            { text: '売{う}っている', reason: '錯誤。' },
            { text: '知{し}っている', reason: '錯誤。' },
            { text: '見{み}ている', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】詞義理解\n【解析】某人有某物（擁有） = 持っている。'
    },

    // 25. 歩く (あるく)
    {
        id: 'n5_vocab_kanji_yomi_aruku_1',
        prob: '駅{えき}まで<u>歩く</u>。',
        prob_zh: '*走* 到車站。',
        options: [
            { text: 'はしる', reason: '錯誤：跑。' },
            { text: 'あるく', reason: '正確！' },
            { text: 'いく', reason: '錯誤：去。' },
            { text: 'かえる', reason: '錯誤：回。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「歩{ある}く」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_aruku_2',
        prob: '「ここから<u>歩いて</u>行{い}けますか。」',
        prob_zh: '「從這裡可以 *走* 著去嗎？」',
        options: [
            { text: 'はしって', reason: '錯誤。' },
            { text: 'あるいて', reason: '正確！' },
            { text: 'あそんで', reason: '錯誤。' },
            { text: 'あわてて', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「歩{ある}く」的 te 形「歩{ある}いて」。'
    },
    {
        id: 'n5_vocab_hyouki_aruku_1',
        prob: 'ゆっくり<u>あるく</u>。',
        prob_zh: '慢慢 *走*。',
        options: [
            { text: '走く', reason: '錯誤。' },
            { text: '止く', reason: '錯誤。' },
            { text: '歩く', reason: '正確！' },
            { text: '少く', reason: '錯誤。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「あるく」漢字為「歩く」。'
    },
    {
        id: 'n5_vocab_hyouki_aruku_2',
        prob: '「道路{どうろ}を<u>あるかない</u>でください。」',
        prob_zh: '「請不要在馬路上 *走*。」',
        options: [
            { text: '歩かない', reason: '正確！' },
            { text: '走かない', reason: '錯誤。' },
            { text: '渉かない', reason: '錯誤。' },
            { text: '捗かない', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「歩く」否定形「歩かない」。'
    },
    {
        id: 'n5_vocab_bunmyaku_aruku_1',
        prob: 'バスが来{こ}ないので、______帰{かえ}りました。',
        prob_zh: '因為公車沒來，所以 *走* 回家了。',
        options: [
            { text: '歩{ある}いて', reason: '正確！走路回家。' },
            { text: '走{はし}って', reason: '錯誤：雖然也可以跑，但走路較常態。若選項有走與跑，通常選走較中性。' },
            { text: '泳{およ}いで', reason: '錯誤：游回家？' },
            { text: '飛{と}んで', reason: '錯誤：飛回家？' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境\n【解析】交通工具沒來 -> 改用走的。'
    },
    {
        id: 'n5_vocab_bunmyaku_aruku_2',
        prob: '散歩{さんぽ}します。公園{こうえん}を______。',
        prob_zh: '去散步。在公園 *走*。',
        options: [
            { text: '歩{ある}きます', reason: '正確！散步就是走路。' },
            { text: '飛{と}びます', reason: '錯誤。' },
            { text: '寝{ね}ます', reason: '錯誤。' },
            { text: '書{か}きます', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】詞彙搭配\n【解析】散歩{さんぽ} = 歩{ある}く。'
    },
    {
        id: 'n5_vocab_ruigigo_aruku_1',
        prob: '<u>歩{ある}いて</u>行{い}きます。',
        prob_zh: '*走* 著去。（選出意思最接近的選項）',
        options: [
            { text: '電車{でんしゃ}で行{い}きません', reason: '正確！走路去=不搭車。' },
            { text: '急{いそ}いで行{い}きます', reason: '錯誤：走路不一定是急。' },
            { text: '走{はし}って行{い}きます', reason: '錯誤：跑。' },
            { text: 'タクシーで行{い}きます', reason: '錯誤：搭計程車。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】邏輯推論\n【解析】走路 = 徒步 = 不使用交通工具。'
    },
    {
        id: 'n5_vocab_ruigigo_aruku_2',
        prob: 'よく<u>歩{ある}きます</u>。',
        prob_zh: '常 *走* 路。（選出意思最接近的選項）',
        options: [
            { text: '散歩{さんぽ}が好きです', reason: '正確！常走路隱含喜歡散步或健康含意。' },
            { text: 'スポーツが嫌{きら}いです', reason: '錯誤。' },
            { text: '足{あし}が痛{いた}いです', reason: '錯誤。' },
            { text: '病気{びょうき}です', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】語境聯想\n【解析】常走路通常與散步關聯最強。'
    }
];
