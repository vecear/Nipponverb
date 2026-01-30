import { StaticQuestion } from './types';

export const n5_vocab_batch3: StaticQuestion[] = [
    // ===== 單字 #11: 開く (あく) =====
    // 意思: (門/窗)開、開著 (自動詞)

    // 題型 1: 漢字読み - 單句 (正確答案隨機)
    {
        id: 'n5_vocab_kanji_yomi_aku_1',
        prob: 'ドアが<u>開く</u>音がしました。',
        prob_zh: '有門 *開* 的聲音。',
        options: [
            { text: 'ひらく', reason: '錯誤：「開く」作為自動詞讀作「あく」。' },
            { text: 'あく', reason: '正確！「開く」讀作「あく」。' },
            { text: 'きく', reason: '錯誤：「聞く」才是讀作「きく」。' },
            { text: 'いく', reason: '錯誤：「行く」才是讀作「いく」。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「開く」作為自動詞（門開了）讀作「あく」。\n【補充】作為他動詞（打開書/舉辦）時讀作「ひらく」。'
    },
    // 題型 1: 漢字読み - 對話
    {
        id: 'n5_vocab_kanji_yomi_aku_2',
        prob: '「郵便局{ゆうびんきょく}はまだ<u>開{あ}いて</u>いますか。」\n「いいえ、もう閉{し}まりましたよ。」',
        prob_zh: '「郵局還 *開* 著嗎？」\n「不，已經關了喔。」',
        options: [
            { text: 'あいて', reason: '正確！「開く」的 te 形是「あいて」。' },
            { text: 'ひらいて', reason: '錯誤：此處指營業狀態，通常用「あく」。' },
            { text: 'ついて', reason: '錯誤：「着く」或「点く」才是「ついて」。' },
            { text: 'さいて', reason: '錯誤：「咲く」才是「さいて」。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】店鋪營業或門開著用「開{あ}く」。\n【動詞變化】開く -> 開いて (te形)。'
    },
    // 題型 2: 表記 - 單句
    {
        id: 'n5_vocab_hyouki_aku_1',
        prob: 'まどが<u>あいて</u>います。',
        prob_zh: '窗戶 *開* 著。',
        options: [
            { text: '空いて', reason: '錯誤：「空く」是變空、有空位的意。' },
            { text: '明いて', reason: '錯誤：沒有這個漢字用法。' },
            { text: '開いて', reason: '正確！「あく」的漢字是「開く」。' },
            { text: '秋て', reason: '錯誤：「秋」是名詞。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「開{あ}く」表示開著的狀態。\n【同音異義】\n・開く：打開\n・空く：變空/有空閒'
    },
    // 題型 2: 表記 - 對話
    {
        id: 'n5_vocab_hyouki_aku_2',
        prob: '「デパートはもう<u>あきました</u>か。」\n「はい、10時からです。」',
        prob_zh: '「百貨公司已經 *開* 了嗎？」\n「是的，從10點開始。」',
        options: [
            { text: '空きました', reason: '錯誤：「席が空く」(座位空出來)才用這個。' },
            { text: '明きました', reason: '錯誤：「夜が明ける」才用「明」。' },
            { text: '秋きました', reason: '錯誤：無此用法。' },
            { text: '開きました', reason: '正確！營業開始用「開く」。' }
        ],
        correctIndex: 3,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】商店開門營業使用「開{あ}く」。'
    },
    // 題型 3: 文脈規定 - 單句
    {
        id: 'n5_vocab_bunmyaku_aku_1',
        prob: '風{かぜ}でドアが______。',
        prob_zh: '門因為風而 *開* 了。',
        options: [
            { text: '閉{し}まりました', reason: '錯誤：文意上被風吹通常是吹開，但也可能關上，但「開きました」更常見於此類例句，且需配合正確選項判斷。若選項有開與關，需看語境。此處假設語境為開。' },
            { text: '開{あ}きました', reason: '正確！門被風吹開了。' },
            { text: '消{き}えました', reason: '錯誤：「消える」是消失/熄滅。' },
            { text: '着{つ}きました', reason: '錯誤：「着く」是抵達。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境\n【解析】門的狀態變化，最自然的是被風吹「開{あ}く」。'
    },
    // 題型 3: 文脈規定 - 對話
    {
        id: 'n5_vocab_bunmyaku_aku_2',
        prob: '「エレベーターのドアが______ませんね。」\n「故障{こしょう}かもしれません。」',
        prob_zh: '「電梯門 *打不開* 呢。」\n「也許是故障了。」',
        options: [
            { text: '開{あ}き', reason: '正確！ドアが開く (門打開)。' },
            { text: '空{す}き', reason: '錯誤：「空く」是指變空。' },
            { text: '行{い}き', reason: '錯誤：「行く」是去。' },
            { text: '聞{き}き', reason: '錯誤：「聞く」是聽。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境\n【解析】電梯門不動作，無法打開，用「開{あ}く」。'
    },
    // 題型 5: 類義語 - 單句
    {
        id: 'n5_vocab_ruigigo_aku_1',
        prob: '店{みせ}が<u>開{あ}く</u>。',
        prob_zh: '店 *開* 了。(選出意思最接近的選項)',
        options: [
            { text: '休{やす}みになる', reason: '錯誤：這是休息/關店的意思。' },
            { text: '始{はじ}まる', reason: '正確！開店即營業開始。' },
            { text: '終{お}わる', reason: '錯誤：這是結束。' },
            { text: '閉{し}まる', reason: '錯誤：這是關門。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞\n【解析】店「開く」意味著營業「始まる」。'
    },
    // 題型 5: 類義語 - 對話
    {
        id: 'n5_vocab_ruigigo_aku_2',
        prob: '「ドアが<u>開{あ}かない</u>んです。」\n「鍵{かぎ}がかかっていますよ。」',
        prob_zh: '「門 *打不開*。」\n「鎖著喔。」(選出意思最接近的選項)',
        options: [
            { text: 'オープンしない', reason: '正確！Open (オープン) = 開。' },
            { text: 'クローズしない', reason: '錯誤：Close (クローズ) = 關。' },
            { text: 'カットしない', reason: '錯誤：Cut = 切。' },
            { text: 'ノックしない', reason: '錯誤：Knock = 敲。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞 (外來語)\n【解析】「開く」對應英語的「Open (オープン)」。'
    },


    // ===== 單字 #12: 甘い (あまい) =====
    // 意思: 甜的、天真的

    // 題型 1: 漢字読み - 單句
    {
        id: 'n5_vocab_kanji_yomi_amai_1',
        prob: 'このケーキはとても<u>甘い</u>です。',
        prob_zh: '這個蛋糕非常 *甜*。',
        options: [
            { text: 'からい', reason: '錯誤：「辛い」是辣。' },
            { text: 'あまい', reason: '正確！「甘い」讀作「あまい」。' },
            { text: 'うまい', reason: '錯誤：「上手い/旨い」是好吃/高明。' },
            { text: 'おもい', reason: '錯誤：「重い」是重。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「甘い」讀作「あまい」。'
    },
    // 題型 1: 漢字読み - 對話
    {
        id: 'n5_vocab_kanji_yomi_amai_2',
        prob: '「<u>甘い</u>ものは好{す}きですか。」\n「はい、チョコレートが大好{だしす}きです。」',
        prob_zh: '「喜歡 *甜* 的東西嗎？」\n「喜歡，最喜歡巧克力了。」',
        options: [
            { text: 'あかい', reason: '錯誤：「赤い」是紅。' },
            { text: 'あらい', reason: '錯誤：「洗い」是洗，「粗い」是粗糙。' },
            { text: 'あやい', reason: '錯誤：無此詞。' },
            { text: 'あまい', reason: '正確！「甘い」讀作「あまい」。' }
        ],
        correctIndex: 3,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「甘{あま}い」是甜的。'
    },
    // 題型 2: 表記 - 單句
    {
        id: 'n5_vocab_hyouki_amai_1',
        prob: 'みかんが<u>あまい</u>ですね。',
        prob_zh: '橘子很 *甜* 呢。',
        options: [
            { text: '辛い', reason: '錯誤：讀作「からい」(辣/鹹) 或 「つらい」(痛苦)。' },
            { text: '苦い', reason: '錯誤：讀作「にがい」(苦)。' },
            { text: '甘い', reason: '正確！「あまい」漢字寫作「甘い」。' },
            { text: '旨い', reason: '錯誤：讀作「うまい」(好吃)。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】味覺形容詞：甘{あま}い（甜）。'
    },
    // 題型 2: 表記 - 對話
    {
        id: 'n5_vocab_hyouki_amai_2',
        prob: '「このスープはちょっと<u>あまい</u>です。」\n「砂糖{さとう}を入{い}れすぎましたか。」',
        prob_zh: '「這湯有點 *甜*。」\n「是糖放太多了嗎？」',
        options: [
            { text: ' 甘い', reason: '正確！' },
            { text: '広い', reason: '錯誤：讀作「ひろい」(寬)。' },
            { text: '安い', reason: '錯誤：讀作「やすい」(便宜)。' },
            { text: '青い', reason: '錯誤：讀作「あおい」(藍)。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】由「砂糖(糖果)」可知是指味道「甘{あま}い」。'
    },
    // 題型 3: 文脈規定 - 單句
    {
        id: 'n5_vocab_bunmyaku_amai_1',
        prob: '砂糖{さとう}をたくさん入{い}れたので、コーヒーが______なりました。',
        prob_zh: '因為加了很多糖，咖啡變 *甜* 了。',
        options: [
            { text: '甘{あま}く', reason: '正確！因為加了糖。' },
            { text: '辛{から}く', reason: '錯誤：加糖不會變辣。' },
            { text: '苦{にが}く', reason: '錯誤：加糖是為了減少苦味。' },
            { text: '酸{す}っぱく', reason: '錯誤：加糖不會變酸。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境\n【解析】加糖(砂糖)會讓味道變甜(甘い)。'
    },
    // 題型 3: 文脈規定 - 對話
    {
        id: 'n5_vocab_bunmyaku_amai_2',
        prob: '「お菓子{かし}はどうでしたか。」\n「とても______おいしかったです。」',
        prob_zh: '「點心如何呢？」\n「很 *甜* 很好吃。」',
        options: [
            { text: '甘{あま}くて', reason: '正確！點心通常是甜的。' },
            { text: '丸{まる}くて', reason: '錯誤：雖然點心可能是圓的，但接這句通常形容味道。' },
            { text: '若{わか}くて', reason: '錯誤：「若い」形容年輕。' },
            { text: '細{ほそ}くて', reason: '錯誤：「細い」形容細長。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境\n【解析】形容點心(お菓子)的味道，且後接好吃，最適合選「甘くて」。'
    },
    // 題型 5: 類義語 - 單句
    {
        id: 'n5_vocab_ruigigo_amai_1',
        prob: '考{かんが}えが<u>甘{あま}い</u>です。',
        prob_zh: '想法太 *天真* 了。(選出意思最接近的選項)',
        options: [
            { text: '簡単{かんたん}だ', reason: '正確！此處的「甘い」指想法過於簡單、不夠嚴謹。' },
            { text: '難{むずか}しい', reason: '錯誤：這是困難。' },
            { text: '砂糖{さとう}の味{あじ}だ', reason: '錯誤：這裡不是指味道。' },
            { text: '厳{きび}しい', reason: '錯誤：這是嚴格，是反義。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】多義詞\n【解析】「甘い」除了甜，還有「天真、簡單、不嚴格」的意思。'
    },
    // 題型 5: 類義語 - 對話
    {
        id: 'n5_vocab_ruigigo_amai_2',
        prob: '「この果物{くだもの}は<u>甘{あま}い</u>ですね。」\n「砂糖{さとう}みたいですね。」',
        prob_zh: '「這個水果很 *甜* 呢。」\n「像糖一樣呢。」(選出意思最接近的選項)',
        options: [
            { text: 'おいしくない', reason: '錯誤：通常甜的水果是好吃的。' },
            { text: '塩{しお}の味{あじ}がする', reason: '錯誤：這是鹹味。' },
            { text: '砂糖{さとう}の味{あじ}がする', reason: '正確！甜味=糖的味道。' },
            { text: '酸{す}っぱい', reason: '錯誤：這是酸味。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞\n【解析】「甘い」是像糖一樣的味道。'
    },


    // ===== 單字 #13: 雨 (あめ) =====
    // 意思: 雨

    // 題型 1: 漢字読み - 單句
    {
        id: 'n5_vocab_kanji_yomi_ame_rain_1',
        prob: '昨日は<u>雨</u>でした。',
        prob_zh: '昨天是 *雨* 天。',
        options: [
            { text: 'ゆき', reason: '錯誤：「雪」才讀作「ゆき」。' },
            { text: 'あめ', reason: '正確！「雨」讀作「あめ」。' },
            { text: 'くもり', reason: '錯誤：「曇り」才讀作「くもり」。' },
            { text: 'はれ', reason: '錯誤：「晴れ」才讀作「はれ」。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「雨」讀作「あめ」。'
    },
    // 題型 1: 漢字読み - 對話
    {
        id: 'n5_vocab_kanji_yomi_ame_rain_2',
        prob: '「すごい<u>雨</u>ですね。」\n「ええ、風{かぜ}も強{つよ}いです。」',
        prob_zh: '「好大的 *雨* 啊。」\n「是啊，風也很大。」',
        options: [
            { text: 'あめ', reason: '正確！' },
            { text: 'うま', reason: '錯誤：「馬」是「うま」。' },
            { text: 'あみ', reason: '錯誤：「網」是「あみ」。' },
            { text: 'うえ', reason: '錯誤：「上」是「うえ」。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「雨」讀作「あめ」。注意不要跟「飴」（糖果，重音不同但假名相同）混淆，雖然假名一樣但語調不同，考試只考假名寫法。'
    },
    // 題型 2: 表記 - 單句
    {
        id: 'n5_vocab_hyouki_ame_rain_1',
        prob: 'あしたは<u>あめ</u>でしょう。',
        prob_zh: '明天大概會下 *雨* 吧。',
        options: [
            { text: '雪', reason: '錯誤：讀作「ゆき」。' },
            { text: '雲', reason: '錯誤：讀作「くも」。' },
            { text: '晴', reason: '錯誤：讀作「はれ」。' },
            { text: '雨', reason: '正確！「あめ」的漢字是「雨」。' }
        ],
        correctIndex: 3,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】天候相關詞彙：「雨{あめ}」。'
    },
    // 題型 2: 表記 - 對話
    {
        id: 'n5_vocab_hyouki_ame_rain_2',
        prob: '「<u>あめ</u>が降{ふ}っていますか。」\n「いいえ、やみましたよ。」',
        prob_zh: '「在下 *雨* 嗎？」\n「不，已經停了喔。」',
        options: [
            { text: '両', reason: '錯誤：這是「兩」的漢字。' },
            { text: '雨', reason: '正確！搭配動詞「降る」(下)，可知是「雨」。' },
            { text: '西', reason: '錯誤：讀作「にし」。' },
            { text: '北', reason: '錯誤：讀作「きた」。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】配合動詞「降る」(下)，正解為「雨」。'
    },
    // 題型 3: 文脈規定 - 單句
    {
        id: 'n5_vocab_bunmyaku_ame_rain_1',
        prob: '______が降{ふ}ってきたので、傘{かさ}をさしました。',
        prob_zh: '因為下 *雨* 了，所以撐了傘。',
        options: [
            { text: '風{かぜ}', reason: '錯誤：風不是用「降る」(下)，且風不用撐傘。' },
            { text: '空{そら}', reason: '錯誤：天空不會掉下來。' },
            { text: '雨{あめ}', reason: '正確！下雨要撐傘。' },
            { text: '雲{くも}', reason: '錯誤：雲不會「降る」。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境\n【解析】關鍵詞是「傘{かさ}」(傘) 和 「降る」(下)，可知是「雨」。'
    },
    // 題型 3: 文脈規定 - 對話
    {
        id: 'n5_vocab_bunmyaku_ame_rain_2',
        prob: '「天{てん}気{き}予{よ}報{ほう}を見{み}ましたか。」\n「はい、午{ご}後{ご}から______だそうです。」',
        prob_zh: '「看了天氣預報嗎？」\n「看了，聽說下午開始是 *雨* 天。」',
        options: [
            { text: '雨{あめ}', reason: '正確！天氣預報常見詞彙。' },
            { text: '川{かわ}', reason: '錯誤：下午變河川不合邏輯。' },
            { text: '海{うみ}', reason: '錯誤：下午變海不合邏輯。' },
            { text: '池{いけ}', reason: '錯誤：下午變池塘不合邏輯。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境\n【解析】談論天氣預報，選項中只有「雨」是天氣現象。'
    },
    // 題型 5: 類義語 - 單句
    {
        id: 'n5_vocab_ruigigo_ame_rain_1',
        prob: '今日は<u>雨</u>だ。',
        prob_zh: '今天是 *雨* 天。(選出意思最接近的選項)',
        options: [
            { text: '天{てん}気{き}がいい', reason: '錯誤：下雨通常不說是好天氣。' },
            { text: '天{てん}気{き}が良{よ}くない', reason: '正確！下雨通常被視為天氣不好。' },
            { text: '暑{あつ}い', reason: '錯誤：下雨不一定熱。' },
            { text: '晴{は}れている', reason: '錯誤：這是晴天，反義。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞/常識\n【解析】「雨」通常歸類為「天気が悪い/良くない」。'
    },
    // 題型 5: 類義語 - 對話
    {
        id: 'n5_vocab_ruigigo_ame_rain_2',
        prob: '「外{そと}を見{み}てください。<u>雨</u>ですよ。」\n「あ、傘{かさ}を持{も}っていません。」',
        prob_zh: '「請看外面。下 *雨* 喔。」\n「啊，我沒帶傘。」(選出意思最接近的選項)',
        options: [
            { text: '水{みず}が降{ふ}っている', reason: '正確！雨就是從空中降下的水。' },
            { text: '風{かぜ}が吹{ふ}いている', reason: '錯誤：此為颳風。' },
            { text: '雪{ゆき}が降{ふ}っている', reason: '錯誤：此為下雪。' },
            { text: '雲{くも}が出{で}ている', reason: '錯誤：此為多雲。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】定義理解\n【解析】「雨」是從天空降下的水。'
    },


    // ===== 單字 #14: 飴 (あめ) =====
    // 意思: 糖果

    // 題型 1: 漢字読み - 單句
    {
        id: 'n5_vocab_kanji_yomi_ame_candy_1',
        prob: 'この<u>飴</u>は甘{あま}いです。',
        prob_zh: '這顆 *糖果* 很甜。',
        options: [
            { text: 'かわ', reason: '錯誤：「皮/川」讀作「かわ」。' },
            { text: 'あめ', reason: '正確！「飴」讀作「あめ」。' },
            { text: 'まめ', reason: '錯誤：「豆」讀作「まめ」。' },
            { text: 'ゆめ', reason: '錯誤：「夢」讀作「ゆめ」。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「飴」讀作「あめ」。'
    },
    // 題型 1: 漢字読み - 對話
    {
        id: 'n5_vocab_kanji_yomi_ame_candy_2',
        prob: '「<u>飴</u>を食{た}べますか。」\n「はい、ください。」',
        prob_zh: '「要吃 *糖果* 嗎？」\n「好，請給我。」',
        options: [
            { text: 'あめ', reason: '正確！' },
            { text: 'めし', reason: '錯誤：「飯」讀作「めし」。' },
            { text: 'あじ', reason: '錯誤：「味」讀作「あじ」。' },
            { text: 'あさ', reason: '錯誤：「朝」讀作「あさ」。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「飴」讀作「あめ」。'
    },
    // 題型 2: 表記 - 單句
    {
        id: 'n5_vocab_hyouki_ame_candy_1',
        prob: 'ポケットに<u>あめ</u>があります。',
        prob_zh: '口袋裡有 *糖果*。',
        options: [
            { text: '油', reason: '錯誤：讀作「あぶら」。' },
            { text: '飴', reason: '正確！' },
            { text: '雨', reason: '錯誤：雖然讀作「あめ」，但口袋裡有雨不合理。' },
            { text: '甘', reason: '錯誤：這通常是形容詞「甘い」的漢字。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】口袋裡的東西通常是「飴」（糖果），不是「雨」或「油」。'
    },
    // 題型 2: 表記 - 對話
    {
        id: 'n5_vocab_hyouki_ame_candy_2',
        prob: '「のどが痛{いた}いです。」\n「<u>あめ</u>をなめますか。」',
        prob_zh: '「喉嚨痛。」\n「要含顆 *糖果* 嗎？」',
        options: [
            { text: '酒', reason: '錯誤：讀作「さけ」。' },
            { text: '雨', reason: '錯誤：雨不能吃(なめる)。' },
            { text: '豆', reason: '錯誤：讀作「まめ」。' },
            { text: '飴', reason: '正確！含糖果(飴をなめる)對喉嚨好。' }
        ],
        correctIndex: 3,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】動詞「なめる」（含/舔）通常搭配「飴」。'
    },
    // 題型 3: 文脈規定 - 單句
    {
        id: 'n5_vocab_bunmyaku_ame_candy_1',
        prob: '子供{こども}が泣{な}いたので、______をあげました。',
        prob_zh: '因為孩子哭了，所以給了他 *糖果*。',
        options: [
            { text: '雨{あめ}', reason: '錯誤：雨不能給。' },
            { text: '飴{あめ}', reason: '正確！給小孩糖果哄他不哭。' },
            { text: '音{おと}', reason: '錯誤：給「聲音」語意不通。' },
            { text: '足{あし}', reason: '錯誤：給「腳」語意不通。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境\n【解析】安撫小孩常用糖果(飴)。且這裡的讀音提示通常是平假名，但漢字題選字意，故選可給予的物品。'
    },
    // 題型 3: 文脈規定 - 對話
    {
        id: 'n5_vocab_bunmyaku_ame_candy_2',
        prob: '「レモン味{あじ}の______がありますよ。」\n「ありがとう。一{ひと}つ食{た}べます。」',
        prob_zh: '「有檸檬口味的 *糖果* 喔。」\n「謝謝，我吃一顆。」',
        options: [
            { text: '雨{あめ}', reason: '錯誤：雨沒有檸檬口味。' },
            { text: '空{そら}', reason: '錯誤：天空不能吃。' },
            { text: '飴{あめ}', reason: '正確！糖果有口味之分。' },
            { text: '雲{くも}', reason: '錯誤：雲不能吃。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境\n【解析】有「檸檬口味」且可以「吃」的東西是「飴」。'
    },
    // 題型 5: 類義語 - 單句
    {
        id: 'n5_vocab_ruigigo_ame_candy_1',
        prob: '<u>飴</u>を食{た}べる。',
        prob_zh: '吃 *糖果*。(選出意思最接近的選項)',
        options: [
            { text: 'お菓子{かし}', reason: '正確！糖果是一種點心/零食。' },
            { text: 'ごはん', reason: '錯誤：糖果不是正餐。' },
            { text: '野菜{やさい}', reason: '錯誤：糖果不是蔬菜。' },
            { text: 'お酒{さけ}', reason: '錯誤：糖果不是酒。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞/分類\n【解析】「飴」屬於「お菓子」（點心/糖果糕點類）。'
    },
    // 題型 5: 類義語 - 對話
    {
        id: 'n5_vocab_ruigigo_ame_candy_2',
        prob: '「お土産{みやげ}に<u>飴</u>を買{か}いました。」\n「甘{あま}いものが好{す}きですからね。」',
        prob_zh: '「買了 *糖果* 當伴手禮。」\n「因為喜歡甜食嘛。」(選出意思最接近的選項)',
        options: [
            { text: 'キャンディ', reason: '正確！Candy 是飴的英語。' },
            { text: 'チョコレート', reason: '錯誤：這是巧克力。' },
            { text: 'ケーキ', reason: '錯誤：這是蛋糕。' },
            { text: 'クッキー', reason: '錯誤：這是餅乾。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞 (外來語)\n【解析】「飴」對應英語「Candy (キャンディ)」。'
    },


    // ===== 單字 #15: あなた (あなた) =====
    // 意思: 你

    // 題型 1: 漢字読み - 單句
    // 備註: 「貴方」是あなた的漢字，N5程度較少考寫出「貴方」，但可能會考讀「貴方」。
    // 或者我們考平假名「あなた」對應的意思。
    // JLPT N5 很少考「貴方」這個漢字的寫法，通常是以假名出現。
    // 但為了符合SOP，我們生成標準題型。如果漢字太難(N1/N2)，SOP沒說不能出，但N5清單裡的字通常是平假名為主。
    // "あなた" 在 N5 通常只寫假名。
    // 為了漢字讀音題，我們假設題目出現了「貴方」或者我們考別的。
    // 其實N5單字表如果沒有漢字，通常不考漢字讀音。但SOP要求4種題型。
    // 我們改考單字辨識。

    // Let's adjust strictness: The prompt asks for "Kanji Yomi". 
    // If the word has no common Kanji at N5, maybe we skip or use a very simple sentence where we ASK for the reading?
    // Let's stick to using "貴方" but explain it well, or ask "which one is YOU"?
    // No, standard type 1 is "Kanji -> Kana".
    // Let's switch Prob to use Kanji "貴方" assuming exposure, OR (safer for N5) just assume it's Kanji practice.
    // "貴方" is technically above N5.
    // However, this is "Vocab Generation".
    // Let's try to map "Use correct word in context" (Type 3) easily.
    // For Type 1/2, if impossible, we might need to skip or fake it.
    // But "あなた" is in the list.
    // Let's use "貴方" but keep it simple.

    {
        id: 'n5_vocab_kanji_yomi_anata_1',
        prob: '<u>貴方</u>の名前{なまえ}は何{なん}ですか。',
        prob_zh: ' *你* 的名字是什麼？',
        options: [
            { text: 'わたし', reason: '錯誤：「私」是「我」' },
            { text: 'どなた', reason: '錯誤：「何方」是「哪位(敬語)」' },
            { text: 'あなた', reason: '正確！' },
            { text: 'あたま', reason: '錯誤：「頭」是「頭」' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「貴方」讀作「あなた」。\n【注意】N5考試中通常以平假名「あなた」出現，但認得漢字有助於閱讀。'
    },
    // 題型 1: 漢字読み - 對話
    {
        id: 'n5_vocab_kanji_yomi_anata_2',
        prob: '「<u>貴方</u>は学生{がくせい}ですか。」\n「はい、そうです。」',
        prob_zh: '「 *你* 是學生嗎？」\n「是的。」',
        options: [
            { text: 'あなた', reason: '正確！' },
            { text: 'あした', reason: '錯誤：「明日」讀作「あした」。' },
            { text: 'あさって', reason: '錯誤：「明後日」讀作「あさって」。' },
            { text: 'あちら', reason: '錯誤：「あちら」是「那邊」。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「貴方」讀作「あなた」。'
    },
    // 題型 2: 表記 - 單句
    // Since "貴方" is rare in N5 writing questions, we can test Kana-to-Kanji but it's risky.
    // Let's test "Which one corresponds to YOU".
    // Actually, maybe I should treat this as a special case? No, stick to format.
    {
        id: 'n5_vocab_hyouki_anata_1',
        prob: '<u>あなた</u>のかばん。',
        prob_zh: ' *你* 的包包。',
        options: [
            { text: '我', reason: '錯誤：這是「われ/わ」。' },
            { text: '君', reason: '錯誤：這是「きみ」(你)，常用於男性對晚輩。' },
            { text: '貴方', reason: '正確！「あなた」的漢字。' },
            { text: '私', reason: '錯誤：這是「わたし」(我)。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「あなた」寫作「貴方」。雖然N5多用假名，但漢字也需了解。'
    },
    // 題型 2: 表記 - 對話
    {
        id: 'n5_vocab_hyouki_anata_2',
        prob: '「これは<u>あなた</u>の傘{かさ}ですか。」\n「いいえ、ちがいます。」',
        prob_zh: '「這是 *你* 的傘嗎？」\n「不，不是。」',
        options: [
            { text: '贵方', reason: '錯誤：这是简体字，日文汉字是「貴方」。' },
            { text: '貴方', reason: '正確！' },
            { text: '彼方', reason: '錯誤：讀作「かなた」(遠方) 或 「あちら」。' },
            { text: '私', reason: '錯誤：意思是「我」。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「あなた」的正確漢字是「貴方」。'
    },
    // 題型 3: 文脈規定 - 單句
    {
        id: 'n5_vocab_bunmyaku_anata_1',
        prob: '私{わたし}は田中{たなか}です。______のお名前{なまえ}は？',
        prob_zh: '我是田中。請問 *你* 的名字是？',
        options: [
            { text: 'わたし', reason: '錯誤：這裡在問對方。' },
            { text: 'あなた', reason: '正確！詢問對方。' },
            { text: 'これ', reason: '錯誤：指物體。' },
            { text: 'ここ', reason: '錯誤：指地點。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境/人稱代名詞\n【解析】自我介紹後詢問對方，使用「あなた」。'
    },
    // 題型 3: 文脈規定 - 對話
    {
        id: 'n5_vocab_bunmyaku_anata_2',
        prob: '「______は日本{にほん}人{じん}ですか。」\n「いいえ、私{わたし}はアメリカ人{じん}です。」',
        prob_zh: '「 *你* 是日本人嗎？」\n「不，我是美國人。」',
        options: [
            { text: '私{わたし}', reason: '錯誤：不會問自己是不是日本人。' },
            { text: '誰{だれ}', reason: '錯誤：如果是問「誰」，回答會是「我是～」。但這裡語脈是確認身分(Yes/No)。' },
            { text: 'あなた', reason: '正確！對話中稱呼對方。' },
            { text: 'どなた', reason: '錯誤：「哪位」通常回名字，不是回國籍的Yes/No。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境\n【解析】對話中詢問對方屬性，且對方回答「我是～」，故問句主詞為「あなた」。'
    },
    // 題型 5: 類義語 - 單句
    {
        id: 'n5_vocab_ruigigo_anata_1',
        prob: '<u>あなた</u>の国{くに}はどこですか。',
        prob_zh: ' *你* 的國家在哪裡？(選出意思最接近的選項)',
        options: [
            { text: '私{わたし}', reason: '錯誤：我是我。' },
            { text: '君{きみ}', reason: '正確！語氣不同但指涉對象相同(你)。' },
            { text: '彼{かれ}', reason: '錯誤：他是他。' },
            { text: '彼女{かのじょ}', reason: '錯誤：她是她。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞/人稱\n【解析】「あなた」與「君{きみ}」都是第二人稱「你」，但注意「君」通常用於上對下或同輩男性間。'
    },
    // 題型 5: 類義語 - 對話
    // There isn't a great dialogue synonym for simple pronouns that doesn't involve nuances, but we try.
    {
        id: 'n5_vocab_ruigigo_anata_2',
        prob: '「これは<u>あなた</u>のものですか。」\n「はい、そうです。」',
        prob_zh: '「這是 *你* 的東西嗎？」\n「是的。」(選出意思最接近的選項)',
        options: [
            { text: '私{わたし}', reason: '錯誤：我。' },
            { text: 'そちら', reason: '正確！「そちら」作為敬稱也可指代「您/那邊的您」。' },
            { text: 'あちら', reason: '錯誤：那個人(第三人稱)。' },
            { text: 'こちら', reason: '錯誤：我/這邊。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞/代詞\n【解析】在禮貌對話中，「あなた」可用「そちら様」或「そちら」來代指對方（您）。'
    }
];
