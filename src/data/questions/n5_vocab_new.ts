import { StaticQuestion } from './types';

export const n5VocabBatch1: StaticQuestion[] = [
    // 1. 浴びる (あびる)
    {
        id: 'n5_vocab_kanji_yomi_abiru_1',
        prob: '毎日{まいにち}シャワーを<u>浴びる</u>。',
        prob_zh: '每天 *淋* 浴。',
        options: [
            { text: 'あみる', reason: '錯誤：發音錯誤。' },
            { text: 'あびる', reason: '正確！「浴びる」讀作「あびる」。' },
            { text: 'よびる', reason: '錯誤：發音錯誤。' },
            { text: 'あひる', reason: '錯誤：這是「鴨子」的意思。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「浴{あ}びる」表示淋（浴）、曬（太陽）。\n【易錯點】\n・○ あびる\n・✕ あひる（濁音錯誤）'
    },
    {
        id: 'n5_vocab_kanji_yomi_abiru_2',
        prob: '「もうシャワーを<u>浴び</u>ましたか。」\n「はい、さっき入{はい}りました。」',
        prob_zh: '「已經 *洗* 過澡了嗎？」\n「是的，剛剛洗了。」',
        options: [
            { text: 'あび', reason: '正確！「浴びる」的ます形去掉ます。' },
            { text: 'あい', reason: '錯誤：發音錯誤。' },
            { text: 'あみ', reason: '錯誤：發音錯誤。' },
            { text: 'よび', reason: '錯誤：「呼{よ}び」是呼叫的意思。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「浴{あ}びる」去掉る為「浴{あ}び」。'
    },
    {
        id: 'n5_vocab_hyouki_abiru_1',
        prob: 'みずを<u>あびる</u>。',
        prob_zh: '*淋* 水。',
        options: [
            { text: '谷びる', reason: '錯誤：「谷{たに}」是山谷。' },
            { text: '欲びる', reason: '錯誤：「欲{ほっ}」是慾望。' },
            { text: '溶びる', reason: '錯誤：「溶{と}」是溶解。' },
            { text: '浴びる', reason: '正確！淋浴寫作「浴びる」。' }
        ],
        correctIndex: 3,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】淋浴的「あびる」漢字為「浴」。'
    },
    {
        id: 'n5_vocab_hyouki_abiru_2',
        prob: '「シャワーを<u>あび</u>たいです。」\n「お風呂場{ふろば}はあそこです。」',
        prob_zh: '「我想 *淋* 浴。」\n「浴室在那裡。」',
        options: [
            { text: '洗び', reason: '錯誤：「洗{あら}」是清洗。' },
            { text: '浴び', reason: '正確！' },
            { text: '流び', reason: '錯誤：「流{なが}」是流動。' },
            { text: '吸び', reason: '錯誤：「吸{す}」是吸。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「あびる」對應漢字「浴びる」。'
    },
    {
        id: 'n5_vocab_bunmyaku_abiru_1',
        prob: '朝{あさ}起{お}きて、シャワーを______。',
        prob_zh: '早上起床，*淋* 了浴。',
        options: [
            { text: '浴{あ}びました', reason: '正確！淋浴用「シャワーを浴びる」。' },
            { text: '洗{あら}いました', reason: '錯誤：洗澡通常不說「シャワーを洗う」(洗蓮蓬頭?)。' },
            { text: '入{はい}りました', reason: '錯誤：說「お風呂に入る」才對，不能接シャワー。' },
            { text: '行{い}きました', reason: '錯誤：語意不通。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】慣用語搭配\n【解析】淋浴固定搭配「シャワーを浴びる」。'
    },
    {
        id: 'n5_vocab_bunmyaku_abiru_2',
        prob: '「夏{なつ}は何{なに}をしたいですか。」\n「海{うみ}で太陽{たいよう}を______たいです。」',
        prob_zh: '「夏天想做什麼？」\n「想在海邊 *曬* 太陽。」',
        options: [
            { text: '食{た}べ', reason: '錯誤：吃太陽？不合理。' },
            { text: '飲{の}み', reason: '錯誤：喝太陽？不合理。' },
            { text: '見{み}', reason: '錯誤：看太陽會傷眼睛。' },
            { text: '浴{あ}び', reason: '正確！曬太陽是「太陽を浴びる」。' }
        ],
        correctIndex: 3,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境\n【解析】「日{ひ}を浴{あ}びる」或「太陽{たいよう}を浴{あ}びる」表示曬太陽/沐浴陽光。'
    },
    {
        id: 'n5_vocab_ruigigo_abiru_1',
        prob: 'シャワーを<u>浴びました</u>。',
        prob_zh: '*淋* 了浴。（選出意思最接近的選項）',
        options: [
            { text: '出{で}ました', reason: '錯誤：出來。' },
            { text: '体{からだ}を洗{あら}いました', reason: '正確！淋浴就是洗澡/洗身體。' },
            { text: '顔{かお}を洗{あら}いました', reason: '錯誤：這只是洗臉。' },
            { text: '手{て}を洗{あら}いました', reason: '錯誤：這只是洗手。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞理解\n【解析】「シャワーを浴びる」這個動作就是為了清潔身體，故選「体を洗う」。'
    },
    {
        id: 'n5_vocab_ruigigo_abiru_2',
        prob: '「ジャスティンさんは？」\n「今{いま}、シャワーを<u>浴びて</u>います。」',
        prob_zh: '「Justin 呢？」\n「現在正在 *淋浴*。」',
        options: [
            { text: 'お風呂{ふろ}に入{はい}って', reason: '正確！意思都是在洗澡。' },
            { text: 'ご飯{はん}を食{た}べて', reason: '錯誤：吃飯。' },
            { text: '寝{ね}て', reason: '錯誤：睡覺。' },
            { text: '服{ふく}を着{き}て', reason: '錯誤：穿衣服。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞理解\n【解析】在語境中，如果你在淋浴，通常也可指正在入浴/洗澡的狀態。'
    },

    // 2. 危ない (あぶない)
    {
        id: 'n5_vocab_kanji_yomi_abunai_1',
        prob: 'ここであそぶのは<u>危ない</u>です。',
        prob_zh: '在這裡玩很 *危險*。',
        options: [
            { text: 'あぶない', reason: '正確！「危ない」讀作「あぶない」。' },
            { text: 'あまない', reason: '錯誤：發音錯誤。' },
            { text: 'すくない', reason: '錯誤：「少ない」是「少」的意思。' },
            { text: 'きたない', reason: '錯誤：「汚い」是「髒」的意思。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「危{あぶ}ない」是危險的意思。'
    },
    {
        id: 'n5_vocab_kanji_yomi_abunai_2',
        prob: '「<u>危ない</u>から、気{き}をつけてください。」',
        prob_zh: '「因為很 *危險*，請小心。」',
        options: [
            { text: 'わるい', reason: '錯誤：「悪い」是壞的意思。' },
            { text: 'くらい', reason: '錯誤：「暗い」是暗的意思。' },
            { text: 'あぶない', reason: '正確！' },
            { text: 'こわい', reason: '錯誤：「怖い」是可怕的意思。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「危{あぶ}ない」讀作「あぶない」。'
    },
    {
        id: 'n5_vocab_hyouki_abunai_1',
        prob: 'みちで遊{あそ}ぶのは<u>あぶない</u>。',
        prob_zh: '在路上玩是 *危險* 的。',
        options: [
            { text: '他ない', reason: '錯誤：無此詞。' },
            { text: '危ない', reason: '正確！' },
            { text: '厄ない', reason: '錯誤：無此詞。' },
            { text: '角ない', reason: '錯誤：無此詞。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】危險的漢字是「危」。'
    },
    {
        id: 'n5_vocab_hyouki_abunai_2',
        prob: '「それは<u>あぶない</u>ですよ。」',
        prob_zh: '「那個很 *危險* 喔。」',
        options: [
            { text: '危ない', reason: '正確！' },
            { text: '急ない', reason: '錯誤：「急{いそ}」是急。' },
            { text: '色ない', reason: '錯誤：「色{いろ}」是顏色。' },
            { text: '負ない', reason: '錯誤：「負{ま}」是輸。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「あぶない」漢字寫作「危」。'
    },
    {
        id: 'n5_vocab_bunmyaku_abunai_1',
        prob: '車{くるま}がたくさん通{とお}りますから、この道{みち}は______です。',
        prob_zh: '因為有很多車經過，這條路很 *危險*。',
        options: [
            { text: '安全{あんぜん}', reason: '錯誤：車多應該是不安全。' },
            { text: '便利{べんり}', reason: '錯誤：語意重點在於安全疑慮。' },
            { text: '靜{しず}か', reason: '錯誤：車多不會安靜。' },
            { text: '危{あぶ}ない', reason: '正確！車多危險。' }
        ],
        correctIndex: 3,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境\n【解析】車多的馬路是危險的。'
    },
    {
        id: 'n5_vocab_bunmyaku_abunai_2',
        prob: '「ナイフで遊{あそ}んではいけませんよ。」\n「はい。______ですからね。」',
        prob_zh: '「不可以玩刀子喔。」\n「好。因為很 *危險* 對吧。」',
        options: [
            { text: '危{あぶ}ない', reason: '正確！刀子危險。' },
            { text: '甘{あま}い', reason: '錯誤：甜。' },
            { text: '眠{ねむ}い', reason: '錯誤：睏。' },
            { text: '古{ふる}い', reason: '錯誤：舊。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文脈語境\n【解析】刀子具有危險性，故選「危{あぶ}ない」。'
    },
    {
        id: 'n5_vocab_ruigigo_abunai_1',
        prob: 'この川{かわ}で泳{およ}ぐのは<u>危ない</u>です。',
        prob_zh: '在這條河游泳很 *危險*。',
        options: [
            { text: '安全{あんぜん}ではありません', reason: '正確！危險 = 不安全。' },
            { text: '楽{たの}しいです', reason: '錯誤：開心。' },
            { text: '難{むずか}しいです', reason: '錯誤：困難。' },
            { text: '面白{おもしろ}いです', reason: '錯誤：有趣。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞\n【解析】「危{あぶ}ない」的意思就是「安全{あんぜん}ではない」（不安全）。'
    },
    {
        id: 'n5_vocab_ruigigo_abunai_2',
        prob: '「夜{よる}、一人{ひとり}で歩{ある}くのは<u>危ない</u>ですよ。」',
        prob_zh: '「晚上一個人走路很 *危險* 喔。」',
        options: [
            { text: '気{き}をつけてください', reason: '正確！因為危險所以要小心，這是最相關的建議/含義。' },
            { text: '早{はや}くしてください', reason: '錯誤：請快一點。' },
            { text: '靜{しず}かにしてください', reason: '錯誤：請安靜一點。' },
            { text: '勉強{べんきょう}してください', reason: '錯誤：請唸書。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞/邏輯推斷\n【解析】提醒別人「危險」，隱含著「請小心（気をつけて）」的意思。'
    },

    // 3. あっち (あっち)
    {
        id: 'n5_vocab_kanji_yomi_acchi_1',
        prob: '「トイレはどこですか。」\n「<u>あっち</u>ですよ。」',
        prob_zh: '「廁所在哪裡？」\n「在 *那邊* 喔。」',
        options: [
            { text: 'あち', reason: '錯誤：缺少促音。' },
            { text: 'あっち', reason: '正確！' },
            { text: 'あっじ', reason: '錯誤：不是濁音。' },
            { text: 'あつち', reason: '錯誤：大つ不是促音。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】發音規則\n【解析】「あっち」是「あちら」的口語，有促音。'
    },
    {
        id: 'n5_vocab_kanji_yomi_acchi_2',
        prob: '<u>あっち</u>に行{い}きましょう。',
        prob_zh: '去 *那邊* 吧。',
        options: [
            { text: 'どっち', reason: '錯誤：哪邊。' },
            { text: 'そっち', reason: '錯誤：那邊(靠近聽者)。' },
            { text: 'あっち', reason: '正確！那邊(遠離雙方)。' },
            { text: 'こっち', reason: '錯誤：這邊。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】詞彙辨析\n【解析】遠稱（離說話者和聽者都遠）用「あ」。'
    },
    {
        id: 'n5_vocab_hyouki_acchi_1',
        prob: '<u>あっち</u>の店{みせ}はおいしいですよ。',
        prob_zh: '*那邊* 的店很好吃喔。',
        options: [
            { text: '彼方', reason: '正確！「あっち/あちら」漢字可寫作「彼方」，但N5通常寫平假名。' },
            { text: '此方', reason: '錯誤：這是「こっち」。' },
            { text: '其方', reason: '錯誤：這是「そっち」。' },
            { text: '何方', reason: '錯誤：這是「どっち」。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字冷知識（作為補充）\n【解析】雖然N5不考這個漢字，但「あっち」對應「彼方」。通常考試只考平假名辨析。'
    },
    {
        id: 'n5_vocab_hyouki_acchi_2',
        prob: '<u>あっち</u>を見てください。',
        prob_zh: '請看 *那邊*。',
        options: [
            { text: 'あっち', reason: '正確！' },
            { text: 'おっち', reason: '錯誤。' },
            { text: 'うっち', reason: '錯誤。' },
            { text: 'いっち', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】正確拼寫\n【解析】「あ」開頭。'
    },
    {
        id: 'n5_vocab_bunmyaku_acchi_1',
        prob: '「郵便局{ゆうびんきょく}はここですか。」\n「いいえ、______ですよ。」',
        prob_zh: '「郵局是這裡嗎？」\n「不，是 *那邊* 喔。」',
        options: [
            { text: 'ここ', reason: '錯誤：已經說「不是」了。' },
            { text: 'どこ', reason: '錯誤：不是問句。' },
            { text: 'あっち', reason: '正確！指遠處。' },
            { text: 'どれ', reason: '錯誤：指物品。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】指示代名詞\n【解析】回答地點在遠處用「あっち」。'
    },
    {
        id: 'n5_vocab_bunmyaku_acchi_2',
        prob: '先生{せんせい}は______にいます。',
        prob_zh: '老師在 *那邊*。',
        options: [
            { text: 'あれ', reason: '錯誤：指物品。' },
            { text: 'あの', reason: '錯誤：需接名詞（あの人）。' },
            { text: 'あっち', reason: '正確！指地點/方向。' },
            { text: 'あんな', reason: '錯誤：那樣的（形容詞）。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】指示詞詞性\n【解析】只有「あっち」可以單獨表示地點/方向。'
    },
    {
        id: 'n5_vocab_ruigigo_acchi_1',
        prob: '<u>あっち</u>に行{い}きましょう。',
        prob_zh: '去 *那邊* 吧。',
        options: [
            { text: 'あちら', reason: '正確！「あっち」是「あちら」的口語。' },
            { text: 'そちら', reason: '錯誤：那邊（中稱）。' },
            { text: 'こちら', reason: '錯誤：這邊（近稱）。' },
            { text: 'どちら', reason: '錯誤：哪邊（疑問）。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】口語與禮貌形\n【解析】あっち = あちら。'
    },
    {
        id: 'n5_vocab_ruigigo_acchi_2',
        prob: '<u>あっち</u>は海{うみ}です。',
        prob_zh: '*那邊* 是海。',
        options: [
            { text: 'あそこ', reason: '正確！「あっち」表方向，「あそこ」表地點，在指位置時可通用。' },
            { text: 'ここ', reason: '錯誤。' },
            { text: 'そこ', reason: '錯誤。' },
            { text: 'どこ', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】指示詞\n【解析】指遠處的地點，あっち(方向) ≈ あそこ(地點)。'
    },

    // 4. あちら (あちら)
    {
        id: 'n5_vocab_kanji_yomi_achira_1',
        prob: '<u>あちら</u>をご覧{らん}ください。',
        prob_zh: '請看 *那邊*。',
        options: [
            { text: 'あちら', reason: '正確！' },
            { text: 'そちら', reason: '錯誤。' },
            { text: 'こちら', reason: '錯誤。' },
            { text: 'どちら', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】指示詞\n【解析】遠稱禮貌形「あちら」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_achira_2',
        prob: '「田中{たなか}さんはどこですか。」\n「<u>あちら</u>です。」',
        prob_zh: '「田中先生在哪裡？」\n「在 *那邊*。」',
        options: [
            { text: 'あち', reason: '錯誤。' },
            { text: 'あちゃら', reason: '錯誤。' },
            { text: 'あちょら', reason: '錯誤。' },
            { text: 'あちら', reason: '正確！' }
        ],
        correctIndex: 3,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】讀音\n【解析】正確讀音為「あちら」。'
    },
    {
        id: 'n5_vocab_hyouki_achira_1',
        prob: '<u>あちら</u>は事務所{じむしょ}です。',
        prob_zh: '*那邊* 是辦公室。',
        options: [
            { text: '彼方', reason: '正確！「あちら」漢字為「彼方」。' },
            { text: '他方', reason: '錯誤。' },
            { text: '阿方', reason: '錯誤。' },
            { text: '安方', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字（補充）\n【解析】「あちら」寫作「彼方」。'
    },
    {
        id: 'n5_vocab_hyouki_achira_2',
        prob: 'エレベーターは<u>あちら</u>です。',
        prob_zh: '電梯在 *那邊*。',
        options: [
            { text: 'こちら', reason: '錯誤。' },
            { text: 'そちら', reason: '錯誤。' },
            { text: 'あちら', reason: '正確！' },
            { text: 'どちら', reason: '錯誤。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】平假名辨析\n【解析】確認「あ」開頭。'
    },
    {
        id: 'n5_vocab_bunmyaku_achira_1',
        prob: '「誰{だれ}ですか。」\n「<u>あちら</u>は山田{やまだ}さんです。」',
        prob_zh: '「這一位是誰？」\n「 *這* (那) 位是山田先生。」',
        options: [
            { text: 'あちら', reason: '正確！介紹遠處的人用「あちら」。' },
            { text: 'あれ', reason: '錯誤：指物品，不能指人，不禮貌。' },
            { text: 'あの', reason: '錯誤：需接名詞。' },
            { text: 'あそこ', reason: '錯誤：指地點。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】人物介紹\n【解析】「あちら」除了指方向，也可以禮貌地指「那一位」。'
    },
    {
        id: 'n5_vocab_bunmyaku_achira_2',
        prob: '出口{でぐち}は______にあります。',
        prob_zh: '出口在 *那邊*。',
        options: [
            { text: 'どれ', reason: '錯誤。' },
            { text: 'どの', reason: '錯誤。' },
            { text: 'あちら', reason: '正確！' },
            { text: 'どんな', reason: '錯誤。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】場所指示\n【解析】指方向地點用「あちら」。'
    },
    {
        id: 'n5_vocab_ruigigo_achira_1',
        prob: '<u>あちら</u>は佐藤{さとう}さんです。',
        prob_zh: '*那一位* 是佐藤先生。',
        options: [
            { text: 'あの人{ひと}', reason: '正確！「あちら」指人時等於「あの人」（但更禮貌）。' },
            { text: 'あれ', reason: '錯誤：指物品。' },
            { text: 'あそこ', reason: '錯誤：指地點。' },
            { text: 'あっち', reason: '錯誤：較口語，且通常指方向。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞\n【解析】指人時，あちら (禮貌) ≈ あの人 (普通)。'
    },
    {
        id: 'n5_vocab_ruigigo_achira_2',
        prob: '電話{でんわ}は<u>あちら</u>にあります。',
        prob_zh: '電話在 *那邊*。',
        options: [
            { text: 'これ', reason: '錯誤。' },
            { text: 'あそこ', reason: '正確！指地點。' },
            { text: 'それ', reason: '錯誤。' },
            { text: 'どれ', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞\n【解析】指地點あちら ≈ あそこ。'
    },

    // 5. 上げる (あげる)
    {
        id: 'n5_vocab_kanji_yomi_ageru_1',
        prob: '手{て}を<u>上げ</u>てください。',
        prob_zh: '請 *舉* 手。',
        options: [
            { text: 'さげ', reason: '錯誤：「下{さ}げる」是放下。' },
            { text: 'あげ', reason: '正確！「上げる」讀作「あげる」。' },
            { text: 'なげ', reason: '錯誤：「投{な}げる」是投擲。' },
            { text: 'まげ', reason: '錯誤：「曲{ま}げる」是彎曲。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「上{あ}げる」表示舉起、提高。'
    },
    {
        id: 'n5_vocab_kanji_yomi_ageru_2',
        prob: 'この荷物{にもつ}を<u>上げて</u>ください。',
        prob_zh: '請把這個行李 *抬上去*。',
        options: [
            { text: 'あけて', reason: '錯誤：「開{あ}けて」是打開。' },
            { text: 'あげて', reason: '正確！' },
            { text: 'あそんで', reason: '錯誤：「遊{あそ}んで」是玩。' },
            { text: 'あわてて', reason: '錯誤：「慌{あわ}てて」是慌張。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「上げる」的te形「あげる」→「あげて」。'
    },
    {
        id: 'n5_vocab_hyouki_ageru_1',
        prob: 'かおを<u>あげる</u>。',
        prob_zh: '*抬* 頭（抬起臉）。',
        options: [
            { text: '上げる', reason: '正確！' },
            { text: '下げる', reason: '錯誤：與上相反。' },
            { text: '止める', reason: '錯誤：「止{と}める」是停止。' },
            { text: '正げる', reason: '錯誤：無此詞。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】向上動作寫作「上」。'
    },
    {
        id: 'n5_vocab_hyouki_ageru_2',
        prob: '「プレゼントを<u>あげ</u>ましたか。」',
        prob_zh: '「禮物 *給* (送) 了嗎？」',
        options: [
            { text: '揚げ', reason: '錯誤：「揚{あ}げる」是油炸。' },
            { text: '上げ', reason: '正確！「あげる」通常寫假名，若寫漢字可用「上げる」。' },
            { text: '明げ', reason: '錯誤：無此詞。' },
            { text: '開げ', reason: '錯誤：無此詞。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】施予/給予的「あげる」漢字也通「上げる」。'
    },
    {
        id: 'n5_vocab_bunmyaku_ageru_1',
        prob: '母{はは}に花{はな}を______。',
        prob_zh: '*送* 花給媽媽。',
        options: [
            { text: 'あげました', reason: '正確！我給別人用「あげる」。' },
            { text: 'もらいました', reason: '錯誤：這是從媽媽那裏得到。' },
            { text: 'くれました', reason: '錯誤：這是媽媽給我。' },
            { text: '借{か}りました', reason: '錯誤：借。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】授受動詞\n【解析】主詞（我）給別人用「あげる」。'
    },
    {
        id: 'n5_vocab_bunmyaku_ageru_2',
        prob: 'ラジオの音{おと}を______ください。',
        prob_zh: '請 *調大* 收音機的聲音。',
        options: [
            { text: '下{さ}げて', reason: '錯誤：調小/降低。' },
            { text: '上{あ}げて', reason: '正確！提高音量用「上げる」。' },
            { text: '見{み}て', reason: '錯誤：看。' },
            { text: '聞{き}いて', reason: '錯誤：聽。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】搭配用法\n【解析】「音を上げる」= 提高音量。'
    },
    {
        id: 'n5_vocab_ruigigo_ageru_1',
        prob: '友達{ともだち}にプレゼントを<u>上げました</u>。',
        prob_zh: '*送* 了禮物給朋友。',
        options: [
            { text: '渡{わた}しました', reason: '正確！交給已/遞給，意思相近。' },
            { text: 'もらいました', reason: '錯誤：得到。' },
            { text: '取{と}りました', reason: '錯誤：拿取。' },
            { text: '貸{か}しました', reason: '錯誤：借出（要還的）。禮物通常不還。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞\n【解析】送禮物（あげる）含有將物品交給對方（渡す）的動作。'
    },
    {
        id: 'n5_vocab_ruigigo_ageru_2',
        prob: '値段{ねだん}を<u>上げます</u>。',
        prob_zh: '*提高* 價格。',
        options: [
            { text: '高{たか}くします', reason: '正確！提高價格 = 變貴。' },
            { text: '安{やす}くします', reason: '錯誤：變便宜。' },
            { text: '低{ひく}くします', reason: '錯誤：變低。' },
            { text: '短{みじか}くします', reason: '錯誤：變短。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞\n【解析】「上げる」在價格語境下 = 「高くする」。'
    }
];
