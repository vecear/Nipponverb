import { DatesPracticeQuestion } from '../types';

// 扁平物量詞練習題 (〜枚)
// 每個重要數字3題：發音題、單句敘述題、對話題
// 無特殊音變，直接讀數字+まい
// 用於：紙張、盤子、襯衫、CD、照片、郵票等扁平物體

export const flatObjectQuestions: DatesPracticeQuestion[] = [
    // ===== 1枚 的三題（無音變：いちまい） =====
    {
        id: 'flat_1_pron',
        category: 'counters',
        subcategory: 'flatObjects',
        type: 'pronunciation',
        isTrap: false,
        stem: '「一枚」的正確讀音是？',
        stem_zh: '「一枚」的正確讀音是？',
        options: [
            { text: 'いちまい', isCorrect: true, reason: '正確{せいかく}！「一枚{いちまい}」無音變{むおんへん}，讀作{どくさ}「いちまい」。' },
            { text: 'いっまい', isCorrect: false, reason: '量詞{りょうし}「枚{まい}」以{い}「ま行{ぎょう}」開頭{あたま}，不發生{ふはっせい}促音化{そくおんか}。' },
            { text: 'ひとまい', isCorrect: false, reason: '量詞{りょうし}「枚{まい}」使用{しよう}音讀{おんどく}數字{すうじ}「いち」。' },
            { text: 'いちばい', isCorrect: false, reason: '「枚{まい}」讀作{どくさ}「まい」，不是「ばい」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一枚{いちまい}」讀作{どくさ}「いちまい」。量詞{りょうし}「枚{まい}」以{い}「ま行{ぎょう}」開頭{あたま}，不發生{ふはっせい}音變{おんへん}。',
            relatedRules: ['量詞{りょうし}「枚{まい}」の使用{しよう}', '無音變{むおんへん}の量詞{りょうし}']
        },
        sourceItem: { value: 1, kanji: '一枚', reading: 'いちまい' }
    },
    {
        id: 'flat_1_sent',
        category: 'counters',
        subcategory: 'flatObjects',
        type: 'sentence',
        isTrap: false,
        stem: '紙を＿＿ください。',
        stem_zh: '請給我一張紙。',
        options: [
            { text: 'ひとつ', isCorrect: false, reason: '紙張{しちょう}是扁平物{へんぺいぶつ}，應使用{しよう}「枚{まい}」。' },
            { text: 'いちまい', isCorrect: true, reason: '正確{せいかく}！「紙{かみ}を一枚{いちまい}ください」表示{ひょうじ}「請給我{ください}一張{いちまい}紙{かみ}」。' },
            { text: 'いっぽん', isCorrect: false, reason: '「本{ほん}」用於{もちいる}細長物{ほそながもの}，不用於{もちいず}紙張{しちょう}。' },
            { text: 'いっさつ', isCorrect: false, reason: '「冊{さつ}」用於{もちいる}成冊{せいさつ}的書{ほん}，不用於{もちいず}單張{たんまい}紙{かみ}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「紙{かみ}」是扁平物{へんぺいぶつ}，使用{しよう}量詞{りょうし}「枚{まい}」。',
            relatedRules: ['量詞{りょうし}「枚{まい}」の使用{しよう}', '文具{ぶんぐ}の計數{けいすう}']
        },
        sourceItem: { value: 1, kanji: '一枚', reading: 'いちまい' }
    },
    {
        id: 'flat_1_dial',
        category: 'counters',
        subcategory: 'flatObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '写真は何枚撮りましたか？',
        stem_zh: '拍了幾張照片？',
        dialogue: {
            speakerA: '写真は何枚撮りましたか？',
            speakerB: '＿＿だけ撮りました。（只拍一張）'
        },
        options: [
            { text: 'ひとつ', isCorrect: false, reason: '照片{しゃしん}是扁平{へんぺい}的，用{もちいる}「枚{まい}」。' },
            { text: 'いちまい', isCorrect: true, reason: '正確{せいかく}！只拍了{とりました}一張{いちまい}照片{しゃしん}。' },
            { text: 'いっこ', isCorrect: false, reason: '照片{しゃしん}不用{もちいず}「個{こ}」。' },
            { text: 'いっさつ', isCorrect: false, reason: '「冊{さつ}」用於{もちいる}相簿{アルバム}，不用於{もちいず}單張{たんまい}照片{しゃしん}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「写真{しゃしん}」是扁平{へんぺい}的，使用{しよう}量詞{りょうし}「枚{まい}」。',
            relatedRules: ['量詞{りょうし}「枚{まい}」の使用{しよう}', '何枚{なんまい}の質問{しつもん}與回答{かいとう}']
        },
        sourceItem: { value: 1, kanji: '一枚', reading: 'いちまい' }
    },

    // ===== 2枚 的三題 =====
    {
        id: 'flat_2_pron',
        category: 'counters',
        subcategory: 'flatObjects',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二枚」的正確讀音是？',
        stem_zh: '「二枚」的正確讀音是？',
        options: [
            { text: 'にまい', isCorrect: true, reason: '正確{せいかく}！「二枚{にまい}」無音變{むおんへん}，讀作{どくさ}「にまい」。' },
            { text: 'ふたまい', isCorrect: false, reason: '量詞{りょうし}「枚{まい}」使用{しよう}音讀{おんどく}數字{すうじ}「に」。' },
            { text: 'にばい', isCorrect: false, reason: '「枚{まい}」讀作{どくさ}「まい」，不發生{ふはっせい}濁音化{だくおんか}。' },
            { text: 'ににまい', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二枚{にまい}」讀作{どくさ}「にまい」，無音變{むおんへん}。',
            relatedRules: ['量詞{りょうし}「枚{まい}」の使用{しよう}', '無音變{むおんへん}の量詞{りょうし}']
        },
        sourceItem: { value: 2, kanji: '二枚', reading: 'にまい' }
    },
    {
        id: 'flat_2_sent',
        category: 'counters',
        subcategory: 'flatObjects',
        type: 'sentence',
        isTrap: false,
        stem: 'シャツを＿＿買いました。',
        stem_zh: '我買了兩件襯衫。',
        options: [
            { text: 'ふたつ', isCorrect: false, reason: '襯衫{シャツ}是扁平物{へんぺいぶつ}，應使用{しよう}「枚{まい}」。' },
            { text: 'にまい', isCorrect: true, reason: '正確{せいかく}！「シャツを二枚{にまい}」表示{ひょうじ}「兩件{にまい}襯衫{シャツ}」。' },
            { text: 'にほん', isCorrect: false, reason: '「本{ほん}」用於{もちいる}細長物{ほそながもの}。' },
            { text: 'にちゃく', isCorrect: false, reason: '「着{ちゃく}」用於{もちいる}套裝{スーツ}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「シャツ」（襯衫{シャツ}）是扁平{へんぺい}的，使用{しよう}量詞{りょうし}「枚{まい}」。',
            relatedRules: ['量詞{りょうし}「枚{まい}」の使用{しよう}', '衣服{いふく}の計數{けいすう}']
        },
        sourceItem: { value: 2, kanji: '二枚', reading: 'にまい' }
    },
    {
        id: 'flat_2_dial',
        category: 'counters',
        subcategory: 'flatObjects',
        type: 'dialogue',
        isTrap: false,
        stem: 'CDは何枚持っていますか？',
        stem_zh: '你有幾張CD？',
        dialogue: {
            speakerA: 'CDは何枚持っていますか？',
            speakerB: '＿＿だけです。（只有兩張）'
        },
        options: [
            { text: 'ふたつ', isCorrect: false, reason: 'CD是扁平{へんぺい}的，用{もちいる}「枚{まい}」。' },
            { text: 'にまい', isCorrect: true, reason: '正確{せいかく}！只有兩張{にまい}CD。' },
            { text: 'にこ', isCorrect: false, reason: 'CD不用{もちいず}「個{こ}」。' },
            { text: 'ふたまい', isCorrect: false, reason: '量詞{りょうし}「枚{まい}」用{もちいる}音讀{おんどく}「に」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「CD」是扁平圓盤形{へんぺいえんばんけい}，使用{しよう}量詞{りょうし}「枚{まい}」。',
            relatedRules: ['量詞{りょうし}「枚{まい}」の使用{しよう}', '媒體{メディア}の計數{けいすう}']
        },
        sourceItem: { value: 2, kanji: '二枚', reading: 'にまい' }
    },

    // ===== 3枚 的三題 =====
    {
        id: 'flat_3_pron',
        category: 'counters',
        subcategory: 'flatObjects',
        type: 'pronunciation',
        isTrap: false,
        stem: '「三枚」的正確讀音是？',
        stem_zh: '「三枚」的正確讀音是？',
        options: [
            { text: 'さんまい', isCorrect: true, reason: '正確{せいかく}！「三枚{さんまい}」無音變{むおんへん}，讀作{どくさ}「さんまい」。' },
            { text: 'さんばい', isCorrect: false, reason: '「枚{まい}」讀作{どくさ}「まい」，不發生{ふはっせい}濁音化{だくおんか}。' },
            { text: 'みまい', isCorrect: false, reason: '量詞{りょうし}「枚{まい}」使用{しよう}音讀{おんどく}數字{すうじ}「さん」。' },
            { text: 'さんぱい', isCorrect: false, reason: '「枚{まい}」不發生{ふはっせい}半濁音化{はんだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三枚{さんまい}」讀作{どくさ}「さんまい」，無音變{むおんへん}。注意{ちゅうい}與「三本{さんぼん}」不同{ちがい}，「枚{まい}」不濁音化{ふだくおんか}。',
            relatedRules: ['量詞{りょうし}「枚{まい}」の使用{しよう}', '「枚{まい}」vs「本{ほん}」の音變{おんへん}差異{さい}']
        },
        sourceItem: { value: 3, kanji: '三枚', reading: 'さんまい' }
    },
    {
        id: 'flat_3_sent',
        category: 'counters',
        subcategory: 'flatObjects',
        type: 'sentence',
        isTrap: true,
        stem: '切手を＿＿貼りました。',
        stem_zh: '我貼了三張郵票。',
        options: [
            { text: 'さんぼん', isCorrect: false, reason: '陷阱{かんけい}！郵票{きって}是扁平物{へんぺいぶつ}，用{もちいる}「枚{まい}」不是「本{ほん}」。' },
            { text: 'さんまい', isCorrect: true, reason: '正確{せいかく}！「切手{きって}を三枚{さんまい}」表示{ひょうじ}「三張{さんまい}郵票{きって}」。' },
            { text: 'さんばい', isCorrect: false, reason: '「枚{まい}」不發生{ふはっせい}濁音化{だくおんか}。' },
            { text: 'みっつ', isCorrect: false, reason: '郵票{きって}是扁平{へんぺい}的，應使用{しよう}「枚{まい}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「切手{きって}」（郵票{ゆうびん}）是扁平{へんぺい}的，使用{しよう}量詞{りょうし}「枚{まい}」。',
            trapExplanation: '即使{たとえ}數字{すうじ}3搭配{たいはい}「本{ほん}」會{だろう}濁音化{だくおんか}，「枚{まい}」不受{うけない}影響{えいきょう}。',
            relatedRules: ['量詞{りょうし}「枚{まい}」の使用{しよう}', '郵票{きって}の計數{けいすう}']
        },
        sourceItem: { value: 3, kanji: '三枚', reading: 'さんまい' }
    },
    {
        id: 'flat_3_dial',
        category: 'counters',
        subcategory: 'flatObjects',
        type: 'dialogue',
        isTrap: false,
        stem: 'お皿は何枚いりますか？',
        stem_zh: '需要幾個盤子？',
        dialogue: {
            speakerA: 'お皿は何枚いりますか？',
            speakerB: '＿＿お願いします。（三個）'
        },
        options: [
            { text: 'みっつ', isCorrect: false, reason: '盤子{おさら}是扁平{へんぺい}的，用{もちいる}「枚{まい}」。' },
            { text: 'さんまい', isCorrect: true, reason: '正確{せいかく}！需要{いります}三個{さんまい}盤子{おさら}。' },
            { text: 'さんこ', isCorrect: false, reason: '盤子{おさら}不用{もちいず}「個{こ}」。' },
            { text: 'さんばい', isCorrect: false, reason: '「枚{まい}」不發生{ふはっせい}濁音化{だくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「お皿{おさら}」（盤子{さら}）是扁平{へんぺい}的，使用{しよう}量詞{りょうし}「枚{まい}」。',
            relatedRules: ['量詞{りょうし}「枚{まい}」の使用{しよう}', '餐具{しょっき}の計數{けいすう}']
        },
        sourceItem: { value: 3, kanji: '三枚', reading: 'さんまい' }
    },

    // ===== 5枚 的三題 =====
    {
        id: 'flat_5_pron',
        category: 'counters',
        subcategory: 'flatObjects',
        type: 'pronunciation',
        isTrap: false,
        stem: '「五枚」的正確讀音是？',
        stem_zh: '「五枚」的正確讀音是？',
        options: [
            { text: 'ごまい', isCorrect: true, reason: '正確{せいかく}！「五枚{ごまい}」無音變{むおんへん}，讀作{どくさ}「ごまい」。' },
            { text: 'いつまい', isCorrect: false, reason: '量詞{りょうし}「枚{まい}」使用{しよう}音讀{おんどく}數字{すうじ}「ご」。' },
            { text: 'ごばい', isCorrect: false, reason: '「枚{まい}」讀作{どくさ}「まい」，不發生{ふはっせい}濁音化{だくおんか}。' },
            { text: 'こまい', isCorrect: false, reason: '需要{じゅよう}濁音{だくおん}「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五枚{ごまい}」讀作{どくさ}「ごまい」，無音變{むおんへん}。',
            relatedRules: ['量詞{りょうし}「枚{まい}」の使用{しよう}', '無音變{むおんへん}の量詞{りょうし}']
        },
        sourceItem: { value: 5, kanji: '五枚', reading: 'ごまい' }
    },
    {
        id: 'flat_5_sent',
        category: 'counters',
        subcategory: 'flatObjects',
        type: 'sentence',
        isTrap: false,
        stem: 'ピザを＿＿に切りました。',
        stem_zh: '把披薩切成五片。',
        options: [
            { text: 'いつつ', isCorrect: false, reason: '切分{きりわけ}的片{かたまり}用{もちいる}「枚{まい}」更合適{てきせつ}。' },
            { text: 'ごまい', isCorrect: true, reason: '正確{せいかく}！「ピザを五枚{ごまい}に切{き}りました」表示{ひょうじ}「切成{きりわけ}五片{ごまい}」。' },
            { text: 'ごほん', isCorrect: false, reason: '披薩片{ピザかたまり}不是細長物{ほそながもの}。' },
            { text: 'ごこ', isCorrect: false, reason: '披薩片{ピザかたまり}是扁平{へんぺい}的，用{もちいる}「枚{まい}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '切分{きりわけ}的「ピザ」（披薩{ピザ}）是扁平{へんぺい}的，使用{しよう}量詞{りょうし}「枚{まい}」。',
            relatedRules: ['量詞{りょうし}「枚{まい}」の使用{しよう}', '食物{しょくもつ}の計數{けいすう}']
        },
        sourceItem: { value: 5, kanji: '五枚', reading: 'ごまい' }
    },
    {
        id: 'flat_5_dial',
        category: 'counters',
        subcategory: 'flatObjects',
        type: 'dialogue',
        isTrap: false,
        stem: 'コピーは何枚必要ですか？',
        stem_zh: '需要幾份影印？',
        dialogue: {
            speakerA: 'コピーは何枚必要ですか？',
            speakerB: '＿＿お願いします。（五份）'
        },
        options: [
            { text: 'いつつ', isCorrect: false, reason: '影印{コピー}是紙張{しちょう}，用{もちいる}「枚{まい}」。' },
            { text: 'ごまい', isCorrect: true, reason: '正確{せいかく}！需要{ひつよう}五份{ごまい}影印{コピー}。' },
            { text: 'ごぶ', isCorrect: false, reason: '「部{ぶ}」用於{もちいる}文件{ぶんけん}套{セット}，單張{たんまい}用{もちいる}「枚{まい}」。' },
            { text: 'ごこ', isCorrect: false, reason: '影印{コピー}是扁平{へんぺい}的，用{もちいる}「枚{まい}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「コピー」（影印{えいいん}）是紙張{しちょう}，使用{しよう}量詞{りょうし}「枚{まい}」。',
            relatedRules: ['量詞{りょうし}「枚{まい}」の使用{しよう}', '辦公{オフィス}用語{ようご}']
        },
        sourceItem: { value: 5, kanji: '五枚', reading: 'ごまい' }
    },

    // ===== 7枚 的三題 =====
    {
        id: 'flat_7_pron',
        category: 'counters',
        subcategory: 'flatObjects',
        type: 'pronunciation',
        isTrap: false,
        stem: '「七枚」的正確讀音是？',
        stem_zh: '「七枚」的正確讀音是？',
        options: [
            { text: 'ななまい', isCorrect: true, reason: '正確{せいかく}！「七枚{ななまい}」無音變{むおんへん}，讀作{どくさ}「ななまい」。' },
            { text: 'しちまい', isCorrect: false, reason: '量詞{りょうし}「枚{まい}」搭配{たいはい}7時{とき}多讀{よむ}「なな」。' },
            { text: 'ななばい', isCorrect: false, reason: '「枚{まい}」讀作{どくさ}「まい」，不發生{ふはっせい}濁音化{だくおんか}。' },
            { text: 'なのまい', isCorrect: false, reason: '「なの」是日期{にっき}七日{なのか}的讀法{よみかた}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七枚{ななまい}」讀作{どくさ}「ななまい」。量詞{りょうし}搭配{たいはい}數字{すうじ}7時{とき}多使用{しよう}「なな」。',
            relatedRules: ['量詞{りょうし}「枚{まい}」の使用{しよう}', '7的讀法{よみかた}選擇{せんたく}']
        },
        sourceItem: { value: 7, kanji: '七枚', reading: 'ななまい' }
    },
    {
        id: 'flat_7_sent',
        category: 'counters',
        subcategory: 'flatObjects',
        type: 'sentence',
        isTrap: false,
        stem: 'トランプを＿＿配りました。',
        stem_zh: '發了七張撲克牌。',
        options: [
            { text: 'しちまい', isCorrect: false, reason: '量詞{りょうし}搭配{たいはい}7時{とき}多讀{よむ}「なな」。' },
            { text: 'ななまい', isCorrect: true, reason: '正確{せいかく}！「トランプを七枚{ななまい}」表示{ひょうじ}「七張{ななまい}撲克牌{トランプ}」。' },
            { text: 'ななほん', isCorrect: false, reason: '撲克牌{トランプ}是扁平{へんぺい}的，用{もちいる}「枚{まい}」。' },
            { text: 'ななつ', isCorrect: false, reason: '撲克牌{トランプ}是扁平物{へんぺいぶつ}，應使用{しよう}「枚{まい}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「トランプ」（撲克牌{トランプ}）是扁平{へんぺい}的，使用{しよう}量詞{りょうし}「枚{まい}」。',
            relatedRules: ['量詞{りょうし}「枚{まい}」の使用{しよう}', '遊戲{ゲーム}用品{ようひん}']
        },
        sourceItem: { value: 7, kanji: '七枚', reading: 'ななまい' }
    },
    {
        id: 'flat_7_dial',
        category: 'counters',
        subcategory: 'flatObjects',
        type: 'dialogue',
        isTrap: false,
        stem: '葉書は何枚書きましたか？',
        stem_zh: '你寫了幾張明信片？',
        dialogue: {
            speakerA: '年賀状は何枚書きましたか？',
            speakerB: '＿＿書きました。（七張）'
        },
        options: [
            { text: 'しちまい', isCorrect: false, reason: '量詞{りょうし}搭配{たいはい}7時{とき}多讀{よむ}「なな」。' },
            { text: 'ななまい', isCorrect: true, reason: '正確{せいかく}！寫了{かきました}七張{ななまい}賀年卡{ねんがじょう}。' },
            { text: 'ななつう', isCorrect: false, reason: '「通{つう}」用於{もちいる}信件{てがみ}，明信片{はがき}用{もちいる}「枚{まい}」。' },
            { text: 'ななつ', isCorrect: false, reason: '明信片{はがき}是扁平物{へんぺいぶつ}，用{もちいる}「枚{まい}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「年賀状{ねんがじょう}」（賀年卡{がねんか}）是扁平{へんぺい}的，使用{しよう}量詞{りょうし}「枚{まい}」。',
            relatedRules: ['量詞{りょうし}「枚{まい}」の使用{しよう}', '郵件{ゆうびん}の計數{けいすう}']
        },
        sourceItem: { value: 7, kanji: '七枚', reading: 'ななまい' }
    },

    // ===== 10枚 的三題 =====
    {
        id: 'flat_10_pron',
        category: 'counters',
        subcategory: 'flatObjects',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十枚」的正確讀音是？',
        stem_zh: '「十枚」的正確讀音是？',
        options: [
            { text: 'じゅうまい', isCorrect: true, reason: '正確{せいかく}！「十枚{じゅうまい}」無音變{むおんへん}，讀作{どくさ}「じゅうまい」。' },
            { text: 'じゅっまい', isCorrect: false, reason: '陷阱{かんけい}！量詞{りょうし}「枚{まい}」以{い}「ま行{ぎょう}」開頭{あたま}，不發生{ふはっせい}促音化{そくおんか}。' },
            { text: 'とおまい', isCorrect: false, reason: '量詞{りょうし}「枚{まい}」使用{しよう}音讀{おんどく}「じゅう」。' },
            { text: 'じゅっぱい', isCorrect: false, reason: '「枚{まい}」不發生{ふはっせい}半濁音化{はんだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十枚{じゅうまい}」讀作{どくさ}「じゅうまい」。量詞{りょうし}「枚{まい}」以{い}「ま行{ぎょう}」開頭{あたま}，不發生{ふはっせい}促音化{そくおんか}。',
            trapExplanation: '這是陷阱題{かんけいだい}。「枚{まい}」與「本{ほん}」（h行{ぎょう}）不同{ちがい}，不會{ないだろう}促音化{そくおんか}。',
            relatedRules: ['量詞{りょうし}「枚{まい}」の使用{しよう}', '「枚{まい}」vs「本{ほん}」の音變{おんへん}差異{さい}']
        },
        sourceItem: { value: 10, kanji: '十枚', reading: 'じゅうまい' }
    },
    {
        id: 'flat_10_sent',
        category: 'counters',
        subcategory: 'flatObjects',
        type: 'sentence',
        isTrap: true,
        stem: 'チケットを＿＿予約しました。',
        stem_zh: '我預約了十張票。',
        options: [
            { text: 'じゅっまい', isCorrect: false, reason: '陷阱{かんけい}！「枚{まい}」不發生{ふはっせい}促音化{そくおんか}。' },
            { text: 'じゅうまい', isCorrect: true, reason: '正確{せいかく}！「チケットを十枚{じゅうまい}」表示{ひょうじ}「十張{じゅうまい}票{チケット}」。' },
            { text: 'とおまい', isCorrect: false, reason: '量詞{りょうし}「枚{まい}」用{もちいる}音讀{おんどく}「じゅう」。' },
            { text: 'じゅっぽん', isCorrect: false, reason: '票{チケット}是扁平{へんぺい}的，用{もちいる}「枚{まい}」不是「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「チケット」（票{きっぷ}）是扁平{へんぺい}的，使用{しよう}量詞{りょうし}「枚{まい}」。',
            trapExplanation: '與「十本{じゅっぽん}」不同{ちがい}，「十枚{じゅうまい}」保持{ほじ}原音{げんおん}不促音化{ふそくおんか}。',
            relatedRules: ['量詞{りょうし}「枚{まい}」の使用{しよう}', '票券{きっぷ}の計數{けいすう}']
        },
        sourceItem: { value: 10, kanji: '十枚', reading: 'じゅうまい' }
    },
    {
        id: 'flat_10_dial',
        category: 'counters',
        subcategory: 'flatObjects',
        type: 'dialogue',
        isTrap: false,
        stem: 'タオルは何枚ありますか？',
        stem_zh: '有幾條毛巾？',
        dialogue: {
            speakerA: 'タオルは何枚ありますか？',
            speakerB: '＿＿あります。（十條）'
        },
        options: [
            { text: 'じゅっまい', isCorrect: false, reason: '「枚{まい}」不促音化{ふそくおんか}。' },
            { text: 'じゅうまい', isCorrect: true, reason: '正確{せいかく}！有十條{じゅうまい}毛巾{タオル}。' },
            { text: 'とお', isCorrect: false, reason: '毛巾{タオル}是扁平{へんぺい}的，用{もちいる}「枚{まい}」。' },
            { text: 'じゅっぽん', isCorrect: false, reason: '毛巾{タオル}用{もちいる}「枚{まい}」不是「本{ほん}」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「タオル」（毛巾{タオル}）是扁平{へんぺい}的布{ぬの}製品{せいひん}，使用{しよう}量詞{りょうし}「枚{まい}」。',
            relatedRules: ['量詞{りょうし}「枚{まい}」の使用{しよう}', '日用品{にちようひん}の計數{けいすう}']
        },
        sourceItem: { value: 10, kanji: '十枚', reading: 'じゅうまい' }
    },

    // ===== 補充：疑問詞「何枚」的題目 =====
    {
        id: 'flat_nan_pron',
        category: 'counters',
        subcategory: 'flatObjects',
        type: 'pronunciation',
        isTrap: false,
        stem: '「何枚」的正確讀音是？',
        stem_zh: '「何枚」的正確讀音是？',
        options: [
            { text: 'なんまい', isCorrect: true, reason: '正確{せいかく}！「何枚{なんまい}」無音變{むおんへん}，讀作{どくさ}「なんまい」。' },
            { text: 'なんばい', isCorrect: false, reason: '「枚{まい}」讀作{どくさ}「まい」，不發生{ふはっせい}濁音化{だくおんか}。' },
            { text: 'なにまい', isCorrect: false, reason: '搭配{たいはい}量詞{りょうし}時{とき}，「何{なに}」讀作{どくさ}「なん」。' },
            { text: 'なんぱい', isCorrect: false, reason: '「枚{まい}」不發生{ふはっせい}半濁音化{はんだくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何枚{なんまい}」讀作{どくさ}「なんまい」。量詞{りょうし}「枚{まい}」不受{うけない}撥音{はつおん}「ん」影響{えいきょう}，不發生{ふはっせい}音變{おんへん}。',
            relatedRules: ['疑問詞{ぎもんし}の讀法{よみかた}', '「何{なん}＋量詞{りょうし}」の讀法{よみかた}']
        },
        sourceItem: { value: '?', kanji: '何枚', reading: 'なんまい' }
    },

    // ===== 追加題目達到100題 =====
    // 11-20枚
    {
        id: 'flat_11_pron', category: 'counters', subcategory: 'flatObjects', type: 'pronunciation', isTrap: false,
        stem: '「十一枚」的正確讀音是？', stem_zh: '「十一枚」的正確讀音是？',
        options: [
            { text: 'じゅういちまい', isCorrect: true, reason: '正確！「十一枚」讀作「じゅういちまい」。' },
            { text: 'じゅういっまい', isCorrect: false, reason: '「枚」不促音化。' },
            { text: 'といちまい', isCorrect: false, reason: '十使用「じゅう」。' },
            { text: 'じゅういちばい', isCorrect: false, reason: '「枚」讀作「まい」。' }
        ],
        correctIndex: 0, explanation: { correctRule: '「十一枚」讀作「じゅういちまい」，無音變。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 11, kanji: '十一枚', reading: 'じゅういちまい' }
    },
    {
        id: 'flat_12_sent', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: 'カレンダーは＿＿で一年分です。', stem_zh: '日曆十二張是一年份。',
        options: [
            { text: 'じゅうにさつ', isCorrect: false, reason: '日曆用「枚」。' },
            { text: 'じゅうにまい', isCorrect: true, reason: '正確！十二張日曆。' },
            { text: 'じゅうにほん', isCorrect: false, reason: '「本」不用於日曆。' },
            { text: 'じゅうにこ', isCorrect: false, reason: '「個」不用於日曆。' }
        ],
        correctIndex: 1, explanation: { correctRule: '日曆是扁平的，用「枚」計數。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 12, kanji: '十二枚', reading: 'じゅうにまい' }
    },
    {
        id: 'flat_15_dial', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '郵票數量', stem_zh: '郵票數量',
        dialogue: { speakerA: '切手は何枚ありますか？', speakerB: '＿＿あります。（十五張）' },
        options: [
            { text: 'じゅうごさつ', isCorrect: false, reason: '郵票用「枚」。' },
            { text: 'じゅうごまい', isCorrect: true, reason: '正確！十五張郵票。' },
            { text: 'じゅうごこ', isCorrect: false, reason: '郵票用「枚」。' },
            { text: 'じゅういつまい', isCorrect: false, reason: '使用「ご」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '「切手」是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 15, kanji: '十五枚', reading: 'じゅうごまい' }
    },
    {
        id: 'flat_20_pron', category: 'counters', subcategory: 'flatObjects', type: 'pronunciation', isTrap: false,
        stem: '「二十枚」的正確讀音是？', stem_zh: '「二十枚」的正確讀音是？',
        options: [
            { text: 'にじゅうまい', isCorrect: true, reason: '正確！「二十枚」讀作「にじゅうまい」。' },
            { text: 'にじゅっまい', isCorrect: false, reason: '「枚」不促音化。' },
            { text: 'はたまい', isCorrect: false, reason: '使用「にじゅう」。' },
            { text: 'にじゅうばい', isCorrect: false, reason: '「枚」讀作「まい」。' }
        ],
        correctIndex: 0, explanation: { correctRule: '「二十枚」讀作「にじゅうまい」，無音變。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 20, kanji: '二十枚', reading: 'にじゅうまい' }
    },
    {
        id: 'flat_30_sent', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: '封筒を＿＿買いました。', stem_zh: '買了三十個信封。',
        options: [
            { text: 'さんじゅうこ', isCorrect: false, reason: '信封用「枚」。' },
            { text: 'さんじゅうまい', isCorrect: true, reason: '正確！三十個信封。' },
            { text: 'さんじゅうぽん', isCorrect: false, reason: '「本」不用於信封。' },
            { text: 'みそまい', isCorrect: false, reason: '使用「さんじゅう」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '「封筒」是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 30, kanji: '三十枚', reading: 'さんじゅうまい' }
    },
    {
        id: 'flat_50_dial', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '名片數量', stem_zh: '名片數量',
        dialogue: { speakerA: '名刺は何枚ありますか？', speakerB: '約＿＿です。（五十張）' },
        options: [
            { text: 'ごじゅうさつ', isCorrect: false, reason: '名片用「枚」。' },
            { text: 'ごじゅうまい', isCorrect: true, reason: '正確！約五十張名片。' },
            { text: 'ごじゅうこ', isCorrect: false, reason: '名片用「枚」。' },
            { text: 'いそまい', isCorrect: false, reason: '使用「ごじゅう」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '「名刺」是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 50, kanji: '五十枚', reading: 'ごじゅうまい' }
    },
    {
        id: 'flat_100_pron', category: 'counters', subcategory: 'flatObjects', type: 'pronunciation', isTrap: false,
        stem: '「百枚」的正確讀音是？', stem_zh: '「百枚」的正確讀音是？',
        options: [
            { text: 'ひゃくまい', isCorrect: true, reason: '正確！「百枚」讀作「ひゃくまい」。' },
            { text: 'ひゃっまい', isCorrect: false, reason: '「枚」不促音化。' },
            { text: 'ももまい', isCorrect: false, reason: '使用「ひゃく」。' },
            { text: 'ひゃくばい', isCorrect: false, reason: '「枚」讀作「まい」。' }
        ],
        correctIndex: 0, explanation: { correctRule: '「百枚」讀作「ひゃくまい」，無音變。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 100, kanji: '百枚', reading: 'ひゃくまい' }
    },

    // 更多情境題
    {
        id: 'flat_context_1', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: 'Tシャツを＿＿持っています。', stem_zh: '我有五件T恤。',
        options: [
            { text: 'ごほん', isCorrect: false, reason: 'T恤用「枚」。' },
            { text: 'ごまい', isCorrect: true, reason: '正確！五件T恤。' },
            { text: 'ごこ', isCorrect: false, reason: 'T恤用「枚」。' },
            { text: 'いつまい', isCorrect: false, reason: '使用「ご」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '衣服類用「枚」計數。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 5, kanji: '五枚', reading: 'ごまい' }
    },
    {
        id: 'flat_context_2', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '披薩訂購', stem_zh: '披薩訂購',
        dialogue: { speakerA: 'ピザを何枚注文しますか？', speakerB: '＿＿お願いします。（三張）' },
        options: [
            { text: 'さんこ', isCorrect: false, reason: '披薩用「枚」。' },
            { text: 'さんまい', isCorrect: true, reason: '正確！三張披薩。' },
            { text: 'みっつ', isCorrect: false, reason: '披薩用「枚」。' },
            { text: 'さんぼん', isCorrect: false, reason: '「本」不用於披薩。' }
        ],
        correctIndex: 1, explanation: { correctRule: '披薩是扁平圓形，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 3, kanji: '三枚', reading: 'さんまい' }
    },
    {
        id: 'flat_context_3', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: 'CDを＿＿買いました。', stem_zh: '買了七張CD。',
        options: [
            { text: 'ななこ', isCorrect: false, reason: 'CD用「枚」。' },
            { text: 'ななまい', isCorrect: true, reason: '正確！七張CD。' },
            { text: 'しちさつ', isCorrect: false, reason: 'CD用「枚」。' },
            { text: 'なのまい', isCorrect: false, reason: '使用「なな」或「しち」。' }
        ],
        correctIndex: 1, explanation: { correctRule: 'CD是扁平圓盤，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 7, kanji: '七枚', reading: 'ななまい' }
    },
    {
        id: 'flat_context_4', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '海報購買', stem_zh: '海報購買',
        dialogue: { speakerA: 'ポスターは何枚買いますか？', speakerB: '＿＿買います。（四張）' },
        options: [
            { text: 'よんほん', isCorrect: false, reason: '海報用「枚」。' },
            { text: 'よんまい', isCorrect: true, reason: '正確！四張海報。' },
            { text: 'しまい', isCorrect: false, reason: '使用「よん」不是「し」。' },
            { text: 'よっつ', isCorrect: false, reason: '海報用「枚」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '海報是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 4, kanji: '四枚', reading: 'よんまい' }
    },
    {
        id: 'flat_context_5', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: 'お皿を＿＿用意しました。', stem_zh: '準備了六個盤子。',
        options: [
            { text: 'ろっこ', isCorrect: false, reason: '盤子用「枚」。' },
            { text: 'ろくまい', isCorrect: true, reason: '正確！六個盤子。' },
            { text: 'むっつ', isCorrect: false, reason: '盤子用「枚」。' },
            { text: 'ろっぽん', isCorrect: false, reason: '「本」不用於盤子。' }
        ],
        correctIndex: 1, explanation: { correctRule: '盤子是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 6, kanji: '六枚', reading: 'ろくまい' }
    },
    {
        id: 'flat_context_6', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '車票購買', stem_zh: '車票購買',
        dialogue: { speakerA: '切符は何枚必要ですか？', speakerB: '＿＿お願いします。（八張）' },
        options: [
            { text: 'はっこ', isCorrect: false, reason: '車票用「枚」。' },
            { text: 'はちまい', isCorrect: true, reason: '正確！八張車票。' },
            { text: 'やっつ', isCorrect: false, reason: '車票用「枚」。' },
            { text: 'はっぽん', isCorrect: false, reason: '「本」不用於車票。' }
        ],
        correctIndex: 1, explanation: { correctRule: '車票是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 8, kanji: '八枚', reading: 'はちまい' }
    },
    {
        id: 'flat_context_7', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: 'コインを＿＿集めています。', stem_zh: '收集了九個硬幣。',
        options: [
            { text: 'きゅうこ', isCorrect: false, reason: '硬幣用「枚」。' },
            { text: 'きゅうまい', isCorrect: true, reason: '正確！九個硬幣。' },
            { text: 'ここのつ', isCorrect: false, reason: '硬幣用「枚」。' },
            { text: 'くまい', isCorrect: false, reason: '使用「きゅう」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '硬幣是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 9, kanji: '九枚', reading: 'きゅうまい' }
    },
    {
        id: 'flat_context_8', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '布料購買', stem_zh: '布料購買',
        dialogue: { speakerA: '布は何枚買いますか？', speakerB: '＿＿買います。（二張）' },
        options: [
            { text: 'にほん', isCorrect: false, reason: '布料用「枚」。' },
            { text: 'にまい', isCorrect: true, reason: '正確！兩張布料。' },
            { text: 'ふたつ', isCorrect: false, reason: '布料用「枚」。' },
            { text: 'にこ', isCorrect: false, reason: '布料用「枚」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '布料是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 2, kanji: '二枚', reading: 'にまい' }
    },
    {
        id: 'flat_context_9', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: '絵を＿＿飾りました。', stem_zh: '掛了十幅畫。',
        options: [
            { text: 'じゅっさつ', isCorrect: false, reason: '畫作用「枚」。' },
            { text: 'じゅうまい', isCorrect: true, reason: '正確！十幅畫。' },
            { text: 'とお', isCorrect: false, reason: '畫作用「枚」。' },
            { text: 'じゅっぽん', isCorrect: false, reason: '「本」不用於畫作。' }
        ],
        correctIndex: 1, explanation: { correctRule: '畫作是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 10, kanji: '十枚', reading: 'じゅうまい' }
    },
    {
        id: 'flat_context_10', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '餃子皮', stem_zh: '餃子皮',
        dialogue: { speakerA: '餃子の皮は何枚必要ですか？', speakerB: '＿＿お願いします。（二十張）' },
        options: [
            { text: 'にじゅっこ', isCorrect: false, reason: '餃子皮用「枚」。' },
            { text: 'にじゅうまい', isCorrect: true, reason: '正確！二十張餃子皮。' },
            { text: 'にじゅっさつ', isCorrect: false, reason: '餃子皮用「枚」。' },
            { text: 'はたまい', isCorrect: false, reason: '使用「にじゅう」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '餃子皮是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 20, kanji: '二十枚', reading: 'にじゅうまい' }
    },

    // 比較規則題
    {
        id: 'flat_rule_1', category: 'counters', subcategory: 'flatObjects', type: 'pronunciation', isTrap: false,
        stem: '量詞「枚」的特點是什麼？', stem_zh: '量詞「枚」的特點是什麼？',
        options: [
            { text: '無音變，直接接「まい」', isCorrect: true, reason: '正確！「枚」以「m」開頭，不發生音變。' },
            { text: '需要促音化', isCorrect: false, reason: '「枚」不發生促音化。' },
            { text: '需要濁音化', isCorrect: false, reason: '「枚」不發生濁音化。' },
            { text: '需要半濁音化', isCorrect: false, reason: '「枚」不發生半濁音化。' }
        ],
        correctIndex: 0, explanation: { correctRule: '「枚」以「m」（ま行）開頭，不像「h」開頭的量詞會發生音變。', relatedRules: ['量詞「枚」の特徴'] },
        sourceItem: { value: 0, kanji: '枚の特徴', reading: '無音變' }
    },
    {
        id: 'flat_rule_2', category: 'counters', subcategory: 'flatObjects', type: 'pronunciation', isTrap: false,
        stem: '以下哪些物品適合用「枚」計數？', stem_zh: '以下哪些物品適合用「枚」計數？',
        options: [
            { text: '紙、盤子、T恤、硬幣', isCorrect: true, reason: '正確！這些都是扁平物品。' },
            { text: '書、筆記本、雜誌', isCorrect: false, reason: '成冊的書用「冊」。' },
            { text: '筆、傘、樹', isCorrect: false, reason: '細長物用「本」。' },
            { text: '貓、狗、魚', isCorrect: false, reason: '動物用「匹」。' }
        ],
        correctIndex: 0, explanation: { correctRule: '「枚」用於扁平物品：紙、布、盤子、硬幣、衣服等。', relatedRules: ['量詞「枚」の使用範圍'] },
        sourceItem: { value: 0, kanji: '枚の適用', reading: '扁平物' }
    },
    {
        id: 'flat_rule_3', category: 'counters', subcategory: 'flatObjects', type: 'pronunciation', isTrap: false,
        stem: '「枚」與「本」的區別是？', stem_zh: '「枚」與「本」的區別是？',
        options: [
            { text: '枚用於扁平物，本用於細長物', isCorrect: true, reason: '正確！這是形狀決定的。' },
            { text: '枚用於大物，本用於小物', isCorrect: false, reason: '不是大小的區別。' },
            { text: '枚用於軟物，本用於硬物', isCorrect: false, reason: '不是軟硬的區別。' },
            { text: '枚和本可以互換使用', isCorrect: false, reason: '不能互換，有各自的使用範圍。' }
        ],
        correctIndex: 0, explanation: { correctRule: '形狀決定量詞：扁平→枚，細長→本。', relatedRules: ['量詞の使い分け'] },
        sourceItem: { value: 0, kanji: '枚vs本', reading: '形狀區別' }
    },

    // 錯誤辨識題
    {
        id: 'flat_error_1', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: true,
        stem: '以下哪個用法有錯誤？', stem_zh: '以下哪個用法有錯誤？',
        options: [
            { text: '紙を三枚ください', isCorrect: false, reason: '正確，紙用「枚」。' },
            { text: '写真を五枚撮りました', isCorrect: false, reason: '正確，照片用「枚」。' },
            { text: '本を二枚買いました', isCorrect: true, reason: '錯誤！書用「冊」不是「枚」，應為「二冊」。' },
            { text: 'CDを十枚持っています', isCorrect: false, reason: '正確，CD用「枚」。' }
        ],
        correctIndex: 2, explanation: { correctRule: '成冊的書用「冊」，不用「枚」。', trapExplanation: '測試「枚」與「冊」的區別。', relatedRules: ['量詞の使い分け'] },
        sourceItem: { value: 0, kanji: '錯誤辨識', reading: '枚vs冊' }
    },
    {
        id: 'flat_error_2', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: true,
        stem: '以下哪個用法正確？', stem_zh: '以下哪個用法正確？',
        options: [
            { text: 'お皿を三本洗いました', isCorrect: false, reason: '錯誤，盤子用「枚」。' },
            { text: 'シャツを二冊買いました', isCorrect: false, reason: '錯誤，衣服用「枚」。' },
            { text: '切手を五匹集めています', isCorrect: false, reason: '錯誤，郵票用「枚」。' },
            { text: 'ポスターを四枚貼りました', isCorrect: true, reason: '正確！海報用「枚」。' }
        ],
        correctIndex: 3, explanation: { correctRule: '扁平物品（海報）用「枚」計數。', trapExplanation: '測試對「枚」適用範圍的理解。', relatedRules: ['量詞の使い分け'] },
        sourceItem: { value: 0, kanji: '正確用法', reading: '枚的使用' }
    },

    // 更多情境補充達到100題
    {
        id: 'flat_extra_1', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: '葉書を＿＿送りました。', stem_zh: '寄了一張明信片。',
        options: [
            { text: 'いっさつ', isCorrect: false, reason: '明信片用「枚」。' },
            { text: 'いちまい', isCorrect: true, reason: '正確！一張明信片。' },
            { text: 'ひとつ', isCorrect: false, reason: '明信片用「枚」。' },
            { text: 'いっぽん', isCorrect: false, reason: '「本」不用於明信片。' }
        ],
        correctIndex: 1, explanation: { correctRule: '明信片是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 1, kanji: '一枚', reading: 'いちまい' }
    },
    {
        id: 'flat_extra_2', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '床單數量', stem_zh: '床單數量',
        dialogue: { speakerA: 'シーツは何枚ありますか？', speakerB: '＿＿あります。（三張）' },
        options: [
            { text: 'さんほん', isCorrect: false, reason: '床單用「枚」。' },
            { text: 'さんまい', isCorrect: true, reason: '正確！三張床單。' },
            { text: 'みっつ', isCorrect: false, reason: '床單用「枚」。' },
            { text: 'さんさつ', isCorrect: false, reason: '「冊」不用於床單。' }
        ],
        correctIndex: 1, explanation: { correctRule: '床單是扁平的布製品，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 3, kanji: '三枚', reading: 'さんまい' }
    },
    {
        id: 'flat_extra_3', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: 'ハムを＿＿入れました。', stem_zh: '放入了兩片火腿。',
        options: [
            { text: 'にこ', isCorrect: false, reason: '薄片火腿用「枚」。' },
            { text: 'にまい', isCorrect: true, reason: '正確！兩片火腿。' },
            { text: 'ふたつ', isCorrect: false, reason: '薄片火腿用「枚」。' },
            { text: 'にほん', isCorrect: false, reason: '「本」不用於薄片。' }
        ],
        correctIndex: 1, explanation: { correctRule: '薄片狀的食物用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 2, kanji: '二枚', reading: 'にまい' }
    },
    {
        id: 'flat_extra_4', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '貼紙購買', stem_zh: '貼紙購買',
        dialogue: { speakerA: 'シールは何枚買いますか？', speakerB: '＿＿お願いします。（十張）' },
        options: [
            { text: 'じゅっこ', isCorrect: false, reason: '貼紙用「枚」。' },
            { text: 'じゅうまい', isCorrect: true, reason: '正確！十張貼紙。' },
            { text: 'とお', isCorrect: false, reason: '貼紙用「枚」。' },
            { text: 'じゅっぽん', isCorrect: false, reason: '「本」不用於貼紙。' }
        ],
        correctIndex: 1, explanation: { correctRule: '貼紙是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 10, kanji: '十枚', reading: 'じゅうまい' }
    },
    {
        id: 'flat_extra_5', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: 'パンケーキを＿＿焼きました。', stem_zh: '煎了四張鬆餅。',
        options: [
            { text: 'よんこ', isCorrect: false, reason: '鬆餅用「枚」。' },
            { text: 'よんまい', isCorrect: true, reason: '正確！四張鬆餅。' },
            { text: 'よっつ', isCorrect: false, reason: '鬆餅用「枚」。' },
            { text: 'しまい', isCorrect: false, reason: '使用「よん」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '鬆餅是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 4, kanji: '四枚', reading: 'よんまい' }
    },
    {
        id: 'flat_extra_6', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '窗簾數量', stem_zh: '窗簾數量',
        dialogue: { speakerA: 'カーテンは何枚ありますか？', speakerB: '＿＿あります。（六張）' },
        options: [
            { text: 'ろっぽん', isCorrect: false, reason: '窗簾用「枚」。' },
            { text: 'ろくまい', isCorrect: true, reason: '正確！六張窗簾。' },
            { text: 'むっつ', isCorrect: false, reason: '窗簾用「枚」。' },
            { text: 'ろっこ', isCorrect: false, reason: '窗簾用「枚」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '窗簾是扁平的布製品，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 6, kanji: '六枚', reading: 'ろくまい' }
    },
    {
        id: 'flat_extra_7', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: 'レコードを＿＿持っています。', stem_zh: '我有八張唱片。',
        options: [
            { text: 'はっさつ', isCorrect: false, reason: '唱片用「枚」。' },
            { text: 'はちまい', isCorrect: true, reason: '正確！八張唱片。' },
            { text: 'やっつ', isCorrect: false, reason: '唱片用「枚」。' },
            { text: 'はっぽん', isCorrect: false, reason: '「本」不用於唱片。' }
        ],
        correctIndex: 1, explanation: { correctRule: '唱片是扁平圓盤，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 8, kanji: '八枚', reading: 'はちまい' }
    },
    {
        id: 'flat_extra_8', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '薄餅製作', stem_zh: '薄餅製作',
        dialogue: { speakerA: 'クレープは何枚作りましたか？', speakerB: '＿＿作りました。（九張）' },
        options: [
            { text: 'きゅうこ', isCorrect: false, reason: '薄餅用「枚」。' },
            { text: 'きゅうまい', isCorrect: true, reason: '正確！九張薄餅。' },
            { text: 'ここのつ', isCorrect: false, reason: '薄餅用「枚」。' },
            { text: 'くまい', isCorrect: false, reason: '使用「きゅう」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '薄餅是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 9, kanji: '九枚', reading: 'きゅうまい' }
    },
    {
        id: 'flat_extra_9', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: 'チラシを＿＿配りました。', stem_zh: '發了一百張傳單。',
        options: [
            { text: 'ひゃっさつ', isCorrect: false, reason: '傳單用「枚」。' },
            { text: 'ひゃくまい', isCorrect: true, reason: '正確！一百張傳單。' },
            { text: 'ひゃっこ', isCorrect: false, reason: '傳單用「枚」。' },
            { text: 'ももまい', isCorrect: false, reason: '使用「ひゃく」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '傳單是扁平的紙張，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 100, kanji: '百枚', reading: 'ひゃくまい' }
    },
    {
        id: 'flat_extra_10', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '收據數量', stem_zh: '收據數量',
        dialogue: { speakerA: 'レシートは何枚ありますか？', speakerB: '＿＿あります。（五張）' },
        options: [
            { text: 'ごほん', isCorrect: false, reason: '收據用「枚」。' },
            { text: 'ごまい', isCorrect: true, reason: '正確！五張收據。' },
            { text: 'いつつ', isCorrect: false, reason: '收據用「枚」。' },
            { text: 'いつまい', isCorrect: false, reason: '使用「ご」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '收據是扁平的紙張，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 5, kanji: '五枚', reading: 'ごまい' }
    },
    {
        id: 'flat_extra_11', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: '木の板を＿＿使いました。', stem_zh: '用了兩塊木板。',
        options: [
            { text: 'にほん', isCorrect: false, reason: '板子用「枚」。' },
            { text: 'にまい', isCorrect: true, reason: '正確！兩塊木板。' },
            { text: 'ふたつ', isCorrect: false, reason: '板子用「枚」。' },
            { text: 'にさつ', isCorrect: false, reason: '「冊」不用於板子。' }
        ],
        correctIndex: 1, explanation: { correctRule: '板子是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 2, kanji: '二枚', reading: 'にまい' }
    },
    {
        id: 'flat_extra_12', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '口罩購買', stem_zh: '口罩購買',
        dialogue: { speakerA: 'マスクは何枚入っていますか？', speakerB: '＿＿入りです。（三十張）' },
        options: [
            { text: 'さんじゅっこ', isCorrect: false, reason: '口罩用「枚」。' },
            { text: 'さんじゅうまい', isCorrect: true, reason: '正確！三十張口罩。' },
            { text: 'みそまい', isCorrect: false, reason: '使用「さんじゅう」。' },
            { text: 'さんじゅうぽん', isCorrect: false, reason: '「本」不用於口罩。' }
        ],
        correctIndex: 1, explanation: { correctRule: '口罩是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 30, kanji: '三十枚', reading: 'さんじゅうまい' }
    },
    {
        id: 'flat_extra_13', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: 'ガラスを＿＿割りました。', stem_zh: '打破了一塊玻璃。',
        options: [
            { text: 'いっぽん', isCorrect: false, reason: '玻璃板用「枚」。' },
            { text: 'いちまい', isCorrect: true, reason: '正確！一塊玻璃。' },
            { text: 'ひとつ', isCorrect: false, reason: '玻璃板用「枚」。' },
            { text: 'いっこ', isCorrect: false, reason: '玻璃板用「枚」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '玻璃板是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 1, kanji: '一枚', reading: 'いちまい' }
    },
    {
        id: 'flat_extra_14', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '撲克牌數量', stem_zh: '撲克牌數量',
        dialogue: { speakerA: 'トランプは何枚ありますか？', speakerB: '＿＿です。（五十二張）' },
        options: [
            { text: 'ごじゅうにさつ', isCorrect: false, reason: '撲克牌用「枚」。' },
            { text: 'ごじゅうにまい', isCorrect: true, reason: '正確！五十二張撲克牌。' },
            { text: 'ごじゅうにこ', isCorrect: false, reason: '撲克牌用「枚」。' },
            { text: 'ごじゅうにほん', isCorrect: false, reason: '「本」不用於撲克牌。' }
        ],
        correctIndex: 1, explanation: { correctRule: '撲克牌是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 52, kanji: '五十二枚', reading: 'ごじゅうにまい' }
    },
    {
        id: 'flat_extra_15', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: '鏡を＿＿壁に掛けました。', stem_zh: '在牆上掛了三面鏡子。',
        options: [
            { text: 'さんぼん', isCorrect: false, reason: '鏡子用「枚」。' },
            { text: 'さんまい', isCorrect: true, reason: '正確！三面鏡子。' },
            { text: 'みっつ', isCorrect: false, reason: '鏡子用「枚」。' },
            { text: 'さんこ', isCorrect: false, reason: '鏡子用「枚」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '鏡子是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 3, kanji: '三枚', reading: 'さんまい' }
    },
    {
        id: 'flat_extra_16', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '吐司數量', stem_zh: '吐司數量',
        dialogue: { speakerA: 'トーストは何枚食べましたか？', speakerB: '＿＿食べました。（兩片）' },
        options: [
            { text: 'にこ', isCorrect: false, reason: '吐司用「枚」。' },
            { text: 'にまい', isCorrect: true, reason: '正確！兩片吐司。' },
            { text: 'ふたつ', isCorrect: false, reason: '吐司用「枚」。' },
            { text: 'にほん', isCorrect: false, reason: '「本」不用於吐司。' }
        ],
        correctIndex: 1, explanation: { correctRule: '吐司片是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 2, kanji: '二枚', reading: 'にまい' }
    },
    {
        id: 'flat_extra_17', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: '煎餃の皮を＿＿包みました。', stem_zh: '包了四十張餃子皮。',
        options: [
            { text: 'よんじゅっこ', isCorrect: false, reason: '餃子皮用「枚」。' },
            { text: 'よんじゅうまい', isCorrect: true, reason: '正確！四十張餃子皮。' },
            { text: 'よんじゅっさつ', isCorrect: false, reason: '餃子皮用「枚」。' },
            { text: 'しじゅうまい', isCorrect: false, reason: '使用「よんじゅう」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '餃子皮是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 40, kanji: '四十枚', reading: 'よんじゅうまい' }
    },
    {
        id: 'flat_extra_18', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '畳數量', stem_zh: '榻榻米數量',
        dialogue: { speakerA: 'この部屋は何畳ですか？', speakerB: '＿＿です。（六張）' },
        options: [
            { text: 'ろっこ', isCorrect: false, reason: '榻榻米用「畳」或「枚」。' },
            { text: 'ろくじょう', isCorrect: true, reason: '正確！六疊榻榻米。' },
            { text: 'むっつ', isCorrect: false, reason: '榻榻米用「畳」。' },
            { text: 'ろっぽん', isCorrect: false, reason: '「本」不用於榻榻米。' }
        ],
        correctIndex: 1, explanation: { correctRule: '榻榻米有專用量詞「畳」。', relatedRules: ['量詞「畳」の使用'] },
        sourceItem: { value: 6, kanji: '六畳', reading: 'ろくじょう' }
    },
    {
        id: 'flat_extra_19', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: 'DVDを＿＿借りました。', stem_zh: '借了七張DVD。',
        options: [
            { text: 'しちさつ', isCorrect: false, reason: 'DVD用「枚」。' },
            { text: 'ななまい', isCorrect: true, reason: '正確！七張DVD。' },
            { text: 'ななつ', isCorrect: false, reason: 'DVD用「枚」。' },
            { text: 'しちほん', isCorrect: false, reason: '「本」不用於DVD。' }
        ],
        correctIndex: 1, explanation: { correctRule: 'DVD是扁平圓盤，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 7, kanji: '七枚', reading: 'ななまい' }
    },
    {
        id: 'flat_extra_20', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '瓷磚數量', stem_zh: '瓷磚數量',
        dialogue: { speakerA: 'タイルは何枚必要ですか？', speakerB: '＿＿必要です。（六十張）' },
        options: [
            { text: 'ろくじゅっこ', isCorrect: false, reason: '瓷磚用「枚」。' },
            { text: 'ろくじゅうまい', isCorrect: true, reason: '正確！六十張瓷磚。' },
            { text: 'ろくじゅっぽん', isCorrect: false, reason: '「本」不用於瓷磚。' },
            { text: 'むじゅうまい', isCorrect: false, reason: '使用「ろくじゅう」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '瓷磚是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 60, kanji: '六十枚', reading: 'ろくじゅうまい' }
    },

    // 補充更多題目達到100題
    {
        id: 'flat_extra_21', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: '合格証を＿＿もらいました。', stem_zh: '拿到了一張合格證書。',
        options: [
            { text: 'いっさつ', isCorrect: false, reason: '證書用「枚」。' },
            { text: 'いちまい', isCorrect: true, reason: '正確！一張證書。' },
            { text: 'ひとつ', isCorrect: false, reason: '證書用「枚」。' },
            { text: 'いっぽん', isCorrect: false, reason: '「本」不用於證書。' }
        ],
        correctIndex: 1, explanation: { correctRule: '證書是扁平的紙張，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 1, kanji: '一枚', reading: 'いちまい' }
    },
    {
        id: 'flat_extra_22', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '地圖數量', stem_zh: '地圖數量',
        dialogue: { speakerA: '地図は何枚持っていますか？', speakerB: '＿＿持っています。（三張）' },
        options: [
            { text: 'さんさつ', isCorrect: false, reason: '單張地圖用「枚」。' },
            { text: 'さんまい', isCorrect: true, reason: '正確！三張地圖。' },
            { text: 'みっつ', isCorrect: false, reason: '地圖用「枚」。' },
            { text: 'さんぽん', isCorrect: false, reason: '「本」不用於地圖。' }
        ],
        correctIndex: 1, explanation: { correctRule: '單張地圖是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 3, kanji: '三枚', reading: 'さんまい' }
    },
    {
        id: 'flat_extra_23', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: 'スライドを＿＿作りました。', stem_zh: '做了二十張投影片。',
        options: [
            { text: 'にじゅうぽん', isCorrect: false, reason: '投影片用「枚」。' },
            { text: 'にじゅうまい', isCorrect: true, reason: '正確！二十張投影片。' },
            { text: 'にじゅっさつ', isCorrect: false, reason: '投影片用「枚」。' },
            { text: 'はたまい', isCorrect: false, reason: '使用「にじゅう」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '投影片是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 20, kanji: '二十枚', reading: 'にじゅうまい' }
    },
    {
        id: 'flat_extra_24', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '抽獎券', stem_zh: '抽獎券',
        dialogue: { speakerA: '抽選券は何枚ありますか？', speakerB: '＿＿あります。（五張）' },
        options: [
            { text: 'ごさつ', isCorrect: false, reason: '抽獎券用「枚」。' },
            { text: 'ごまい', isCorrect: true, reason: '正確！五張抽獎券。' },
            { text: 'いつつ', isCorrect: false, reason: '抽獎券用「枚」。' },
            { text: 'いつまい', isCorrect: false, reason: '使用「ご」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '抽獎券是扁平的紙張，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 5, kanji: '五枚', reading: 'ごまい' }
    },
    {
        id: 'flat_extra_25', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: '壁紙を＿＿貼りました。', stem_zh: '貼了八張壁紙。',
        options: [
            { text: 'はっさつ', isCorrect: false, reason: '壁紙用「枚」。' },
            { text: 'はちまい', isCorrect: true, reason: '正確！八張壁紙。' },
            { text: 'やっつ', isCorrect: false, reason: '壁紙用「枚」。' },
            { text: 'はっぽん', isCorrect: false, reason: '「本」不用於壁紙。' }
        ],
        correctIndex: 1, explanation: { correctRule: '壁紙是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 8, kanji: '八枚', reading: 'はちまい' }
    },
    {
        id: 'flat_extra_26', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '優惠券', stem_zh: '優惠券',
        dialogue: { speakerA: 'クーポンは何枚使いますか？', speakerB: '＿＿使います。（二張）' },
        options: [
            { text: 'にほん', isCorrect: false, reason: '優惠券用「枚」。' },
            { text: 'にまい', isCorrect: true, reason: '正確！二張優惠券。' },
            { text: 'ふたつ', isCorrect: false, reason: '優惠券用「枚」。' },
            { text: 'にさつ', isCorrect: false, reason: '「冊」不用於優惠券。' }
        ],
        correctIndex: 1, explanation: { correctRule: '優惠券是扁平的紙張，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 2, kanji: '二枚', reading: 'にまい' }
    },
    {
        id: 'flat_extra_27', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: 'テーブルクロスを＿＿洗いました。', stem_zh: '洗了四張桌布。',
        options: [
            { text: 'よんほん', isCorrect: false, reason: '桌布用「枚」。' },
            { text: 'よんまい', isCorrect: true, reason: '正確！四張桌布。' },
            { text: 'よっつ', isCorrect: false, reason: '桌布用「枚」。' },
            { text: 'しまい', isCorrect: false, reason: '使用「よん」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '桌布是扁平的布製品，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 4, kanji: '四枚', reading: 'よんまい' }
    },
    {
        id: 'flat_extra_28', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '門票數量', stem_zh: '門票數量',
        dialogue: { speakerA: '入場券は何枚買いましたか？', speakerB: '＿＿買いました。（六張）' },
        options: [
            { text: 'ろっさつ', isCorrect: false, reason: '門票用「枚」。' },
            { text: 'ろくまい', isCorrect: true, reason: '正確！六張門票。' },
            { text: 'むっつ', isCorrect: false, reason: '門票用「枚」。' },
            { text: 'ろっぽん', isCorrect: false, reason: '「本」不用於門票。' }
        ],
        correctIndex: 1, explanation: { correctRule: '門票是扁平的紙張，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 6, kanji: '六枚', reading: 'ろくまい' }
    },
    {
        id: 'flat_extra_29', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: '落ち葉を＿＿拾いました。', stem_zh: '撿了十片落葉。',
        options: [
            { text: 'じゅっぽん', isCorrect: false, reason: '落葉用「枚」。' },
            { text: 'じゅうまい', isCorrect: true, reason: '正確！十片落葉。' },
            { text: 'とお', isCorrect: false, reason: '落葉用「枚」。' },
            { text: 'じゅっさつ', isCorrect: false, reason: '「冊」不用於落葉。' }
        ],
        correctIndex: 1, explanation: { correctRule: '葉子是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 10, kanji: '十枚', reading: 'じゅうまい' }
    },
    {
        id: 'flat_extra_30', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '衛生紙', stem_zh: '衛生紙',
        dialogue: { speakerA: 'ティッシュは何枚使いましたか？', speakerB: '＿＿使いました。（三張）' },
        options: [
            { text: 'さんぼん', isCorrect: false, reason: '衛生紙用「枚」。' },
            { text: 'さんまい', isCorrect: true, reason: '正確！三張衛生紙。' },
            { text: 'みっつ', isCorrect: false, reason: '衛生紙用「枚」。' },
            { text: 'さんこ', isCorrect: false, reason: '衛生紙用「枚」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '衛生紙是扁平的紙張，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 3, kanji: '三枚', reading: 'さんまい' }
    },
    {
        id: 'flat_extra_31', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: '餅を＿＿焼きました。', stem_zh: '烤了五塊年糕。',
        options: [
            { text: 'ごほん', isCorrect: false, reason: '年糕用「枚」。' },
            { text: 'ごまい', isCorrect: true, reason: '正確！五塊年糕。' },
            { text: 'いつつ', isCorrect: false, reason: '年糕用「枚」。' },
            { text: 'ごさつ', isCorrect: false, reason: '「冊」不用於年糕。' }
        ],
        correctIndex: 1, explanation: { correctRule: '扁平的年糕用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 5, kanji: '五枚', reading: 'ごまい' }
    },
    {
        id: 'flat_extra_32', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '信封數量', stem_zh: '信封數量',
        dialogue: { speakerA: '封筒は何枚買いますか？', speakerB: '＿＿買います。（十張）' },
        options: [
            { text: 'じゅっさつ', isCorrect: false, reason: '信封用「枚」。' },
            { text: 'じゅうまい', isCorrect: true, reason: '正確！十張信封。' },
            { text: 'とお', isCorrect: false, reason: '信封用「枚」。' },
            { text: 'じゅうつう', isCorrect: false, reason: '「通」用於信件內容。' }
        ],
        correctIndex: 1, explanation: { correctRule: '信封是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 10, kanji: '十枚', reading: 'じゅうまい' }
    },
    {
        id: 'flat_extra_33', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: 'フライパンを＿＿持っています。', stem_zh: '我有兩個平底鍋。',
        options: [
            { text: 'にほん', isCorrect: false, reason: '平底鍋用「枚」。' },
            { text: 'にまい', isCorrect: true, reason: '正確！兩個平底鍋。' },
            { text: 'ふたつ', isCorrect: false, reason: '平底鍋可用「枚」。' },
            { text: 'にこ', isCorrect: false, reason: '平底鍋用「枚」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '平底鍋是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 2, kanji: '二枚', reading: 'にまい' }
    },
    {
        id: 'flat_extra_34', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '棉被數量', stem_zh: '棉被數量',
        dialogue: { speakerA: '布団は何枚ありますか？', speakerB: '＿＿あります。（四張）' },
        options: [
            { text: 'よんほん', isCorrect: false, reason: '棉被用「枚」。' },
            { text: 'よんまい', isCorrect: true, reason: '正確！四張棉被。' },
            { text: 'よっつ', isCorrect: false, reason: '棉被用「枚」。' },
            { text: 'しまい', isCorrect: false, reason: '使用「よん」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '棉被是扁平的布製品，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 4, kanji: '四枚', reading: 'よんまい' }
    },
    {
        id: 'flat_extra_35', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: '賞状を＿＿飾っています。', stem_zh: '展示著三張獎狀。',
        options: [
            { text: 'さんさつ', isCorrect: false, reason: '獎狀用「枚」。' },
            { text: 'さんまい', isCorrect: true, reason: '正確！三張獎狀。' },
            { text: 'みっつ', isCorrect: false, reason: '獎狀用「枚」。' },
            { text: 'さんぽん', isCorrect: false, reason: '「本」不用於獎狀。' }
        ],
        correctIndex: 1, explanation: { correctRule: '獎狀是扁平的紙張，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 3, kanji: '三枚', reading: 'さんまい' }
    },
    {
        id: 'flat_extra_36', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '煎蛋數量', stem_zh: '煎蛋數量',
        dialogue: { speakerA: '目玉焼きは何枚焼きますか？', speakerB: '＿＿焼きます。（二個）' },
        options: [
            { text: 'にこ', isCorrect: false, reason: '煎蛋用「枚」。' },
            { text: 'にまい', isCorrect: true, reason: '正確！兩個煎蛋。' },
            { text: 'ふたつ', isCorrect: false, reason: '煎蛋可用「枚」。' },
            { text: 'にほん', isCorrect: false, reason: '「本」不用於煎蛋。' }
        ],
        correctIndex: 1, explanation: { correctRule: '煎蛋是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 2, kanji: '二枚', reading: 'にまい' }
    },
    {
        id: 'flat_extra_37', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: 'マットを＿＿敷きました。', stem_zh: '鋪了六張墊子。',
        options: [
            { text: 'ろっぽん', isCorrect: false, reason: '墊子用「枚」。' },
            { text: 'ろくまい', isCorrect: true, reason: '正確！六張墊子。' },
            { text: 'むっつ', isCorrect: false, reason: '墊子用「枚」。' },
            { text: 'ろっさつ', isCorrect: false, reason: '「冊」不用於墊子。' }
        ],
        correctIndex: 1, explanation: { correctRule: '墊子是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 6, kanji: '六枚', reading: 'ろくまい' }
    },
    {
        id: 'flat_extra_38', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '貝殼數量', stem_zh: '貝殼數量',
        dialogue: { speakerA: '貝殻は何枚拾いましたか？', speakerB: '＿＿拾いました。（七個）' },
        options: [
            { text: 'ななこ', isCorrect: false, reason: '扁平貝殼用「枚」。' },
            { text: 'ななまい', isCorrect: true, reason: '正確！七個貝殼。' },
            { text: 'ななつ', isCorrect: false, reason: '扁平貝殼可用「枚」。' },
            { text: 'しちほん', isCorrect: false, reason: '「本」不用於貝殼。' }
        ],
        correctIndex: 1, explanation: { correctRule: '扁平的貝殼用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 7, kanji: '七枚', reading: 'ななまい' }
    },
    {
        id: 'flat_extra_39', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: 'カードを＿＿配りました。', stem_zh: '發了五十張卡片。',
        options: [
            { text: 'ごじゅうさつ', isCorrect: false, reason: '卡片用「枚」。' },
            { text: 'ごじゅうまい', isCorrect: true, reason: '正確！五十張卡片。' },
            { text: 'ごじゅっこ', isCorrect: false, reason: '卡片用「枚」。' },
            { text: 'ごじゅうほん', isCorrect: false, reason: '「本」不用於卡片。' }
        ],
        correctIndex: 1, explanation: { correctRule: '卡片是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 50, kanji: '五十枚', reading: 'ごじゅうまい' }
    },
    {
        id: 'flat_extra_40', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '座墊數量', stem_zh: '座墊數量',
        dialogue: { speakerA: '座布団は何枚必要ですか？', speakerB: '＿＿お願いします。（八張）' },
        options: [
            { text: 'はっぽん', isCorrect: false, reason: '座墊用「枚」。' },
            { text: 'はちまい', isCorrect: true, reason: '正確！八張座墊。' },
            { text: 'やっつ', isCorrect: false, reason: '座墊用「枚」。' },
            { text: 'はっさつ', isCorrect: false, reason: '「冊」不用於座墊。' }
        ],
        correctIndex: 1, explanation: { correctRule: '座墊是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 8, kanji: '八枚', reading: 'はちまい' }
    },
    {
        id: 'flat_extra_41', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: 'ラベルを＿＿貼りました。', stem_zh: '貼了九張標籤。',
        options: [
            { text: 'きゅうこ', isCorrect: false, reason: '標籤用「枚」。' },
            { text: 'きゅうまい', isCorrect: true, reason: '正確！九張標籤。' },
            { text: 'ここのつ', isCorrect: false, reason: '標籤用「枚」。' },
            { text: 'くまい', isCorrect: false, reason: '使用「きゅう」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '標籤是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 9, kanji: '九枚', reading: 'きゅうまい' }
    },
    {
        id: 'flat_extra_42', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '塑膠袋', stem_zh: '塑膠袋',
        dialogue: { speakerA: 'ビニール袋は何枚いりますか？', speakerB: '＿＿ください。（一張）' },
        options: [
            { text: 'いっぽん', isCorrect: false, reason: '塑膠袋用「枚」。' },
            { text: 'いちまい', isCorrect: true, reason: '正確！一張塑膠袋。' },
            { text: 'ひとつ', isCorrect: false, reason: '塑膠袋可用「枚」。' },
            { text: 'いっこ', isCorrect: false, reason: '塑膠袋用「枚」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '塑膠袋是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 1, kanji: '一枚', reading: 'いちまい' }
    },
    {
        id: 'flat_extra_43', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: 'せんべいを＿＿食べました。', stem_zh: '吃了三片仙貝。',
        options: [
            { text: 'さんこ', isCorrect: false, reason: '仙貝用「枚」。' },
            { text: 'さんまい', isCorrect: true, reason: '正確！三片仙貝。' },
            { text: 'みっつ', isCorrect: false, reason: '仙貝用「枚」。' },
            { text: 'さんぽん', isCorrect: false, reason: '「本」不用於仙貝。' }
        ],
        correctIndex: 1, explanation: { correctRule: '仙貝是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 3, kanji: '三枚', reading: 'さんまい' }
    },
    {
        id: 'flat_extra_44', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '海苔數量', stem_zh: '海苔數量',
        dialogue: { speakerA: '海苔は何枚入っていますか？', speakerB: '＿＿入りです。（十張）' },
        options: [
            { text: 'じゅっこ', isCorrect: false, reason: '海苔用「枚」。' },
            { text: 'じゅうまい', isCorrect: true, reason: '正確！十張海苔。' },
            { text: 'とお', isCorrect: false, reason: '海苔用「枚」。' },
            { text: 'じゅうほん', isCorrect: false, reason: '「本」不用於海苔。' }
        ],
        correctIndex: 1, explanation: { correctRule: '海苔是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 10, kanji: '十枚', reading: 'じゅうまい' }
    },
    {
        id: 'flat_extra_45', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: 'バスタオルを＿＿干しました。', stem_zh: '晾了四條浴巾。',
        options: [
            { text: 'よんほん', isCorrect: false, reason: '浴巾用「枚」。' },
            { text: 'よんまい', isCorrect: true, reason: '正確！四條浴巾。' },
            { text: 'よっつ', isCorrect: false, reason: '浴巾用「枚」。' },
            { text: 'しまい', isCorrect: false, reason: '使用「よん」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '浴巾是扁平的布製品，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 4, kanji: '四枚', reading: 'よんまい' }
    },
    {
        id: 'flat_extra_46', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '便條紙', stem_zh: '便條紙',
        dialogue: { speakerA: '付箋は何枚使いましたか？', speakerB: '＿＿使いました。（十五張）' },
        options: [
            { text: 'じゅうごこ', isCorrect: false, reason: '便條紙用「枚」。' },
            { text: 'じゅうごまい', isCorrect: true, reason: '正確！十五張便條紙。' },
            { text: 'じゅうごさつ', isCorrect: false, reason: '「冊」不用於便條紙。' },
            { text: 'じゅうごほん', isCorrect: false, reason: '「本」不用於便條紙。' }
        ],
        correctIndex: 1, explanation: { correctRule: '便條紙是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 15, kanji: '十五枚', reading: 'じゅうごまい' }
    },
    {
        id: 'flat_extra_47', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: 'スカーフを＿＿持っています。', stem_zh: '我有五條圍巾。',
        options: [
            { text: 'ごほん', isCorrect: false, reason: '圍巾用「枚」。' },
            { text: 'ごまい', isCorrect: true, reason: '正確！五條圍巾。' },
            { text: 'いつつ', isCorrect: false, reason: '圍巾用「枚」。' },
            { text: 'ごさつ', isCorrect: false, reason: '「冊」不用於圍巾。' }
        ],
        correctIndex: 1, explanation: { correctRule: '圍巾是扁平的布製品，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 5, kanji: '五枚', reading: 'ごまい' }
    },
    {
        id: 'flat_extra_48', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '乾燥片', stem_zh: '乾燥片',
        dialogue: { speakerA: '柔軟シートは何枚入れますか？', speakerB: '＿＿入れます。（一張）' },
        options: [
            { text: 'いっこ', isCorrect: false, reason: '乾燥片用「枚」。' },
            { text: 'いちまい', isCorrect: true, reason: '正確！一張乾燥片。' },
            { text: 'ひとつ', isCorrect: false, reason: '乾燥片可用「枚」。' },
            { text: 'いっぽん', isCorrect: false, reason: '「本」不用於乾燥片。' }
        ],
        correctIndex: 1, explanation: { correctRule: '乾燥片是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 1, kanji: '一枚', reading: 'いちまい' }
    },
    {
        id: 'flat_extra_49', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: '花びらを＿＿拾いました。', stem_zh: '撿了十二片花瓣。',
        options: [
            { text: 'じゅうにこ', isCorrect: false, reason: '花瓣用「枚」。' },
            { text: 'じゅうにまい', isCorrect: true, reason: '正確！十二片花瓣。' },
            { text: 'じゅうにほん', isCorrect: false, reason: '「本」不用於花瓣。' },
            { text: 'じゅうにさつ', isCorrect: false, reason: '「冊」不用於花瓣。' }
        ],
        correctIndex: 1, explanation: { correctRule: '花瓣是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 12, kanji: '十二枚', reading: 'じゅうにまい' }
    },
    {
        id: 'flat_extra_50', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '紙巾數量', stem_zh: '紙巾數量',
        dialogue: { speakerA: 'ナプキンは何枚ありますか？', speakerB: '＿＿あります。（二十張）' },
        options: [
            { text: 'にじゅっこ', isCorrect: false, reason: '紙巾用「枚」。' },
            { text: 'にじゅうまい', isCorrect: true, reason: '正確！二十張紙巾。' },
            { text: 'にじゅっぽん', isCorrect: false, reason: '「本」不用於紙巾。' },
            { text: 'はたまい', isCorrect: false, reason: '使用「にじゅう」。' }
        ],
        correctIndex: 1, explanation: { correctRule: '紙巾是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 20, kanji: '二十枚', reading: 'にじゅうまい' }
    },
    {
        id: 'flat_extra_51', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: 'ステッカーを＿＿集めました。', stem_zh: '收集了二十五張貼紙。',
        options: [
            { text: 'にじゅうごこ', isCorrect: false, reason: '貼紙用「枚」。' },
            { text: 'にじゅうごまい', isCorrect: true, reason: '正確！二十五張貼紙。' },
            { text: 'にじゅうごさつ', isCorrect: false, reason: '「冊」不用於貼紙。' },
            { text: 'にじゅうごほん', isCorrect: false, reason: '「本」不用於貼紙。' }
        ],
        correctIndex: 1, explanation: { correctRule: '貼紙是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 25, kanji: '二十五枚', reading: 'にじゅうごまい' }
    },
    {
        id: 'flat_extra_52', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '包裝紙', stem_zh: '包裝紙',
        dialogue: { speakerA: '包装紙は何枚使いましたか？', speakerB: '＿＿使いました。（六張）' },
        options: [
            { text: 'ろっさつ', isCorrect: false, reason: '包裝紙用「枚」。' },
            { text: 'ろくまい', isCorrect: true, reason: '正確！六張包裝紙。' },
            { text: 'むっつ', isCorrect: false, reason: '包裝紙用「枚」。' },
            { text: 'ろっぽん', isCorrect: false, reason: '「本」不用於包裝紙。' }
        ],
        correctIndex: 1, explanation: { correctRule: '包裝紙是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 6, kanji: '六枚', reading: 'ろくまい' }
    },
    {
        id: 'flat_extra_53', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: 'ハンカチを＿＿アイロンしました。', stem_zh: '熨燙了八條手帕。',
        options: [
            { text: 'はっぽん', isCorrect: false, reason: '手帕用「枚」。' },
            { text: 'はちまい', isCorrect: true, reason: '正確！八條手帕。' },
            { text: 'やっつ', isCorrect: false, reason: '手帕用「枚」。' },
            { text: 'はっさつ', isCorrect: false, reason: '「冊」不用於手帕。' }
        ],
        correctIndex: 1, explanation: { correctRule: '手帕是扁平的布製品，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 8, kanji: '八枚', reading: 'はちまい' }
    },
    {
        id: 'flat_extra_54', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '貼布數量', stem_zh: '貼布數量',
        dialogue: { speakerA: '湿布は何枚貼りましたか？', speakerB: '＿＿貼りました。（二張）' },
        options: [
            { text: 'にこ', isCorrect: false, reason: '貼布用「枚」。' },
            { text: 'にまい', isCorrect: true, reason: '正確！二張貼布。' },
            { text: 'ふたつ', isCorrect: false, reason: '貼布用「枚」。' },
            { text: 'にほん', isCorrect: false, reason: '「本」不用於貼布。' }
        ],
        correctIndex: 1, explanation: { correctRule: '貼布是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 2, kanji: '二枚', reading: 'にまい' }
    },
    {
        id: 'flat_extra_55', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: 'クッキーを＿＿焼きました。', stem_zh: '烤了三十片餅乾。',
        options: [
            { text: 'さんじゅっこ', isCorrect: false, reason: '薄餅乾用「枚」。' },
            { text: 'さんじゅうまい', isCorrect: true, reason: '正確！三十片餅乾。' },
            { text: 'みそまい', isCorrect: false, reason: '使用「さんじゅう」。' },
            { text: 'さんじゅうほん', isCorrect: false, reason: '「本」不用於餅乾。' }
        ],
        correctIndex: 1, explanation: { correctRule: '薄片狀餅乾用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 30, kanji: '三十枚', reading: 'さんじゅうまい' }
    },
    {
        id: 'flat_extra_56', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '絆創膏', stem_zh: 'OK繃',
        dialogue: { speakerA: '絆創膏は何枚持っていますか？', speakerB: '＿＿持っています。（五張）' },
        options: [
            { text: 'ごほん', isCorrect: false, reason: 'OK繃用「枚」。' },
            { text: 'ごまい', isCorrect: true, reason: '正確！五張OK繃。' },
            { text: 'いつつ', isCorrect: false, reason: 'OK繃用「枚」。' },
            { text: 'ごさつ', isCorrect: false, reason: '「冊」不用於OK繃。' }
        ],
        correctIndex: 1, explanation: { correctRule: 'OK繃是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 5, kanji: '五枚', reading: 'ごまい' }
    },
    {
        id: 'flat_extra_57', category: 'counters', subcategory: 'flatObjects', type: 'sentence', isTrap: false,
        stem: 'ゴザを＿＿敷きました。', stem_zh: '鋪了三張草蓆。',
        options: [
            { text: 'さんぼん', isCorrect: false, reason: '草蓆用「枚」。' },
            { text: 'さんまい', isCorrect: true, reason: '正確！三張草蓆。' },
            { text: 'みっつ', isCorrect: false, reason: '草蓆用「枚」。' },
            { text: 'さんさつ', isCorrect: false, reason: '「冊」不用於草蓆。' }
        ],
        correctIndex: 1, explanation: { correctRule: '草蓆是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 3, kanji: '三枚', reading: 'さんまい' }
    },
    {
        id: 'flat_extra_58', category: 'counters', subcategory: 'flatObjects', type: 'dialogue', isTrap: false,
        stem: '面膜數量', stem_zh: '面膜數量',
        dialogue: { speakerA: 'フェイスマスクは何枚ありますか？', speakerB: '＿＿あります。（七張）' },
        options: [
            { text: 'しちこ', isCorrect: false, reason: '面膜用「枚」。' },
            { text: 'ななまい', isCorrect: true, reason: '正確！七張面膜。' },
            { text: 'ななつ', isCorrect: false, reason: '面膜用「枚」。' },
            { text: 'しちほん', isCorrect: false, reason: '「本」不用於面膜。' }
        ],
        correctIndex: 1, explanation: { correctRule: '面膜是扁平的，用「枚」。', relatedRules: ['量詞「枚」の使用'] },
        sourceItem: { value: 7, kanji: '七枚', reading: 'ななまい' }
    },
    {
        id: 'flat_final', category: 'counters', subcategory: 'flatObjects', type: 'pronunciation', isTrap: false,
        stem: '以下哪組「枚」的讀法都正確？', stem_zh: '以下哪組「枚」的讀法都正確？',
        options: [
            { text: '一枚(いちまい)、三枚(さんまい)、十枚(じゅうまい)', isCorrect: true, reason: '正確！「枚」無音變，直接接「まい」。' },
            { text: '一枚(いっまい)、三枚(さんばい)、十枚(じゅっまい)', isCorrect: false, reason: '錯誤，「枚」不發生音變。' },
            { text: '一枚(ひとまい)、三枚(みまい)、十枚(とおまい)', isCorrect: false, reason: '錯誤，使用音讀數字。' },
            { text: '一枚(いちばい)、三枚(さんぱい)、十枚(じゅうばい)', isCorrect: false, reason: '錯誤，「枚」讀作「まい」。' }
        ],
        correctIndex: 0, explanation: { correctRule: '「枚」無音變，所有數字直接接「まい」。', relatedRules: ['量詞「枚」の特徴'] },
        sourceItem: { value: 0, kanji: '枚總複習', reading: '無音變' }
    }
];
