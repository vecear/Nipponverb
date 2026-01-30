import { DatesPracticeQuestion } from '../types';

// 疑問詞量詞練習題 (何〜)
// 每個重要疑問詞2-3題：發音題、對話題
// 音變規則：「何」的撥音「ん」引發部分量詞濁音化或半濁音化
// 重點：何本(なんぼん)、何匹(なんびき)、何杯(なんばい)、何階(なんがい)、何分(なんぷん)

export const questionCounterQuestions: DatesPracticeQuestion[] = [
    // ===== 何本 的題目（濁音化：なんぼん） =====
    {
        id: 'qcounter_hon_pron',
        category: 'counters',
        subcategory: 'questionCounters',
        type: 'pronunciation',
        isTrap: true,
        stem: '「何本」的正確讀音是？',
        stem_zh: '「何本」的正確讀音是？',
        options: [
            { text: 'なんぼん', isCorrect: true, reason: '正確{せいかく}！「何本{なんぼん}」發生{はっせい}濁音化{だくおんか}，讀作{どくさ}「なんぼん」。' },
            { text: 'なんほん', isCorrect: false, reason: '陷阱{かんけい}！撥音{はつおん}「ん」後的「ほ」變為{へんい}濁音{だくおん}「ぼ」。' },
            { text: 'なんぽん', isCorrect: false, reason: '「何本{なんぼん}」使用{しよう}濁音{だくおん}「ぼ」，不是半濁音{はんだくおん}「ぽ」。' },
            { text: 'なにほん', isCorrect: false, reason: '搭配{たいはい}量詞{りょうし}時{とき}，「何{なに}」讀作{どくさ}「なん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何本{なんぼん}」讀作{どくさ}「なんぼん」。疑問詞{ぎもんし}「何{なん}」的撥音{はつおん}「ん」引發{いんぱつ}「ほ→ぼ」濁音化{だくおんか}。',
            trapExplanation: '這是陷阱題{かんけいだい}。與「三本{さんぼん}」相同{おなじ}規則{きそく}，撥音{はつおん}後h變b。',
            relatedRules: ['疑問詞{ぎもんし}の音變{おんへん}', '「何{なん}＋本{ほん}」の讀法{よみかた}']
        },
        sourceItem: { value: '?', kanji: '何本', reading: 'なんぼん' }
    },
    {
        id: 'qcounter_hon_dial',
        category: 'counters',
        subcategory: 'questionCounters',
        type: 'dialogue',
        isTrap: false,
        stem: '傘の数を聞いています。',
        stem_zh: '在問傘的數量。',
        dialogue: {
            speakerA: '傘は＿＿ありますか？',
            speakerB: '三本あります。'
        },
        options: [
            { text: 'なんほん', isCorrect: false, reason: '「何本{なんぼん}」需要{じゅよう}濁音化{だくおんか}。' },
            { text: 'なんぼん', isCorrect: true, reason: '正確{せいかく}！「傘{かさ}は何本{なんぼん}ありますか」是詢問{たずねる}傘{かさ}數量{すうりょう}的正確{せいかく}說法{いいかた}。' },
            { text: 'いくつ', isCorrect: false, reason: '傘{かさ}是細長物{ほそながもの}，使用{しよう}「何本{なんぼん}」更準確{じゅんかく}。' },
            { text: 'なにほん', isCorrect: false, reason: '「何{なに}」搭配{たいはい}量詞{りょうし}時{とき}讀{よむ}「なん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '詢問{たずねる}細長物{ほそながもの}數量{すうりょう}時{とき}使用{しよう}「何本{なんぼん}」。',
            relatedRules: ['疑問詞{ぎもんし}「何本{なんぼん}」の使用{しよう}', '細長物{ほそながもの}の計數{けいすう}']
        },
        sourceItem: { value: '?', kanji: '何本', reading: 'なんぼん' }
    },

    // ===== 何匹 的題目（濁音化：なんびき） =====
    {
        id: 'qcounter_hiki_pron',
        category: 'counters',
        subcategory: 'questionCounters',
        type: 'pronunciation',
        isTrap: true,
        stem: '「何匹」的正確讀音是？',
        stem_zh: '「何匹」的正確讀音是？',
        options: [
            { text: 'なんびき', isCorrect: true, reason: '正確{せいかく}！「何匹{なんびき}」發生{はっせい}濁音化{だくおんか}，讀作{どくさ}「なんびき」。' },
            { text: 'なんひき', isCorrect: false, reason: '陷阱{かんけい}！撥音{はつおん}「ん」後的「ひ」變為{へんい}濁音{だくおん}「び」。' },
            { text: 'なんぴき', isCorrect: false, reason: '「何匹{なんびき}」使用{しよう}濁音{だくおん}「び」，不是半濁音{はんだくおん}「ぴ」。' },
            { text: 'なにひき', isCorrect: false, reason: '搭配{たいはい}量詞{りょうし}時{とき}，「何{なに}」讀作{どくさ}「なん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何匹{なんびき}」讀作{どくさ}「なんびき」。疑問詞{ぎもんし}「何{なん}」的撥音{はつおん}「ん」引發{いんぱつ}「ひ→び」濁音化{だくおんか}。',
            trapExplanation: '這是陷阱題{かんけいだい}。與「三匹{さんびき}」相同{おなじ}規則{きそく}，撥音{はつおん}後h變b。',
            relatedRules: ['疑問詞{ぎもんし}の音變{おんへん}', '「何{なん}＋匹{ひき}」の讀法{よみかた}']
        },
        sourceItem: { value: '?', kanji: '何匹', reading: 'なんびき' }
    },
    {
        id: 'qcounter_hiki_dial',
        category: 'counters',
        subcategory: 'questionCounters',
        type: 'dialogue',
        isTrap: false,
        stem: 'ペットの数を聞いています。',
        stem_zh: '在問寵物的數量。',
        dialogue: {
            speakerA: '猫は＿＿飼っていますか？',
            speakerB: '二匹飼っています。'
        },
        options: [
            { text: 'なんひき', isCorrect: false, reason: '「何匹{なんびき}」需要{じゅよう}濁音化{だくおんか}。' },
            { text: 'なんびき', isCorrect: true, reason: '正確{せいかく}！「猫{ねこ}は何匹{なんびき}飼{か}っていますか」是詢問{たずねる}寵物{ペット}數量{すうりょう}的正確{せいかく}說法{いいかた}。' },
            { text: 'いくつ', isCorrect: false, reason: '動物{どうぶつ}使用{しよう}「何匹{なんびき}」更準確{じゅんかく}。' },
            { text: 'なんぴき', isCorrect: false, reason: '「何匹{なんびき}」使用{しよう}濁音{だくおん}「び」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '詢問{たずねる}小動物{しょうどうぶつ}數量{すうりょう}時{とき}使用{しよう}「何匹{なんびき}」。',
            relatedRules: ['疑問詞{ぎもんし}「何匹{なんびき}」の使用{しよう}', '動物{どうぶつ}の計數{けいすう}']
        },
        sourceItem: { value: '?', kanji: '何匹', reading: 'なんびき' }
    },

    // ===== 何杯 的題目（濁音化：なんばい） =====
    {
        id: 'qcounter_hai_pron',
        category: 'counters',
        subcategory: 'questionCounters',
        type: 'pronunciation',
        isTrap: true,
        stem: '「何杯」的正確讀音是？',
        stem_zh: '「何杯」的正確讀音是？',
        options: [
            { text: 'なんばい', isCorrect: true, reason: '正確{せいかく}！「何杯{なんばい}」發生{はっせい}濁音化{だくおんか}，讀作{どくさ}「なんばい」。' },
            { text: 'なんはい', isCorrect: false, reason: '陷阱{かんけい}！撥音{はつおん}「ん」後的「は」變為{へんい}濁音{だくおん}「ば」。' },
            { text: 'なんぱい', isCorrect: false, reason: '「何杯{なんばい}」使用{しよう}濁音{だくおん}「ば」，不是半濁音{はんだくおん}「ぱ」。' },
            { text: 'なにはい', isCorrect: false, reason: '搭配{たいはい}量詞{りょうし}時{とき}，「何{なに}」讀作{どくさ}「なん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何杯{なんばい}」讀作{どくさ}「なんばい」。疑問詞{ぎもんし}「何{なん}」的撥音{はつおん}「ん」引發{いんぱつ}「は→ば」濁音化{だくおんか}。',
            trapExplanation: '這是陷阱題{かんけいだい}。與「三杯{さんばい}」相同{おなじ}規則{きそく}，撥音{はつおん}後h變b。',
            relatedRules: ['疑問詞{ぎもんし}の音變{おんへん}', '「何{なん}＋杯{はい}」の讀法{よみかた}']
        },
        sourceItem: { value: '?', kanji: '何杯', reading: 'なんばい' }
    },
    {
        id: 'qcounter_hai_dial',
        category: 'counters',
        subcategory: 'questionCounters',
        type: 'dialogue',
        isTrap: false,
        stem: 'コーヒーの杯数を聞いています。',
        stem_zh: '在問咖啡的杯數。',
        dialogue: {
            speakerA: 'コーヒーは＿＿飲みましたか？',
            speakerB: '二杯飲みました。'
        },
        options: [
            { text: 'なんはい', isCorrect: false, reason: '「何杯{なんばい}」需要{じゅよう}濁音化{だくおんか}。' },
            { text: 'なんばい', isCorrect: true, reason: '正確{せいかく}！「コーヒーは何杯{なんばい}飲{の}みましたか」是詢問{たずねる}飲料{いんりょう}杯數{はいすう}的正確{せいかく}說法{いいかた}。' },
            { text: 'いくつ', isCorrect: false, reason: '杯裝{はいそう}飲料{いんりょう}使用{しよう}「何杯{なんばい}」更準確{じゅんかく}。' },
            { text: 'なんぱい', isCorrect: false, reason: '「何杯{なんばい}」使用{しよう}濁音{だくおん}「ば」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '詢問{たずねる}杯裝{はいそう}飲料{いんりょう}數量{すうりょう}時{とき}使用{しよう}「何杯{なんばい}」。',
            relatedRules: ['疑問詞{ぎもんし}「何杯{なんばい}」の使用{しよう}', '飲料{いんりょう}の計數{けいすう}']
        },
        sourceItem: { value: '?', kanji: '何杯', reading: 'なんばい' }
    },

    // ===== 何階 的題目（濁音化：なんがい） =====
    {
        id: 'qcounter_kai_pron',
        category: 'counters',
        subcategory: 'questionCounters',
        type: 'pronunciation',
        isTrap: true,
        stem: '「何階」的正確讀音是？',
        stem_zh: '「何階」的正確讀音是？',
        options: [
            { text: 'なんがい', isCorrect: true, reason: '正確{せいかく}！「何階{なんがい}」發生{はっせい}濁音化{だくおんか}，讀作{どくさ}「なんがい」。' },
            { text: 'なんかい', isCorrect: false, reason: '陷阱{かんけい}！撥音{はつおん}「ん」後的「か」變為{へんい}濁音{だくおん}「が」。' },
            { text: 'なにかい', isCorrect: false, reason: '搭配{たいはい}量詞{りょうし}時{とき}，「何{なに}」讀作{どくさ}「なん」。' },
            { text: 'なんっかい', isCorrect: false, reason: '「何階{なんがい}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何階{なんがい}」讀作{どくさ}「なんがい」。疑問詞{ぎもんし}「何{なん}」的撥音{はつおん}「ん」引發{いんぱつ}「か→が」濁音化{だくおんか}。',
            trapExplanation: '這是陷阱題{かんけいだい}。與「三階{さんがい}」相同{おなじ}規則{きそく}，撥音{はつおん}後k變g。',
            relatedRules: ['疑問詞{ぎもんし}の音變{おんへん}', '「何{なん}＋階{かい}」の讀法{よみかた}']
        },
        sourceItem: { value: '?', kanji: '何階', reading: 'なんがい' }
    },
    {
        id: 'qcounter_kai_dial',
        category: 'counters',
        subcategory: 'questionCounters',
        type: 'dialogue',
        isTrap: false,
        stem: '階数を聞いています。',
        stem_zh: '在問樓層。',
        dialogue: {
            speakerA: 'お部屋は＿＿ですか？',
            speakerB: '五階です。'
        },
        options: [
            { text: 'なんかい', isCorrect: false, reason: '「何階{なんがい}」需要{じゅよう}濁音化{だくおんか}。' },
            { text: 'なんがい', isCorrect: true, reason: '正確{せいかく}！「お部屋{へや}は何階{なんがい}ですか」是詢問{たずねる}樓層{かいすう}的正確{せいかく}說法{いいかた}。' },
            { text: 'いくつ', isCorrect: false, reason: '樓層{かいすう}使用{しよう}「何階{なんがい}」。' },
            { text: 'なにかい', isCorrect: false, reason: '「何{なに}」搭配{たいはい}量詞{りょうし}時{とき}讀{よむ}「なん」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '詢問{たずねる}樓層{かいすう}時{とき}使用{しよう}「何階{なんがい}」。',
            relatedRules: ['疑問詞{ぎもんし}「何階{なんがい}」の使用{しよう}', '樓層{かいすう}の計數{けいすう}']
        },
        sourceItem: { value: '?', kanji: '何階', reading: 'なんがい' }
    },

    // ===== 何分 的題目（半濁音化：なんぷん） =====
    {
        id: 'qcounter_fun_pron',
        category: 'counters',
        subcategory: 'questionCounters',
        type: 'pronunciation',
        isTrap: true,
        stem: '「何分」的正確讀音是？',
        stem_zh: '「何分」的正確讀音是？',
        options: [
            { text: 'なんぷん', isCorrect: true, reason: '正確{せいかく}！「何分{なんぷん}」發生{はっせい}半濁音化{はんだくおんか}，讀作{どくさ}「なんぷん」。' },
            { text: 'なんふん', isCorrect: false, reason: '陷阱{かんけい}！撥音{はつおん}「ん」後的「ふ」變為{へんい}半濁音{はんだくおん}「ぷ」。' },
            { text: 'なんぶん', isCorrect: false, reason: '「何分{なんぷん}」使用{しよう}半濁音{はんだくおん}「ぷ」，不是濁音{だくおん}「ぶ」。' },
            { text: 'なにふん', isCorrect: false, reason: '搭配{たいはい}量詞{りょうし}時{とき}，「何{なに}」讀作{どくさ}「なん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何分{なんぷん}」讀作{どくさ}「なんぷん」。「分{ふん}」是特殊{とくしゅ}的量詞{りょうし}，撥音{はつおん}後變半濁音{はんだくおん}「ぷ」而非{いがい}濁音{だくおん}「ぶ」。',
            trapExplanation: '這是陷阱題{かんけいだい}。「分{ふん}」的音變{おんへん}規則{きそく}特殊{とくしゅ}：撥音{はつおん}後變「ぷ」不是「ぶ」。',
            relatedRules: ['疑問詞{ぎもんし}の音變{おんへん}', '「何{なん}＋分{ふん}」の讀法{よみかた}']
        },
        sourceItem: { value: '?', kanji: '何分', reading: 'なんぷん' }
    },
    {
        id: 'qcounter_fun_dial',
        category: 'counters',
        subcategory: 'questionCounters',
        type: 'dialogue',
        isTrap: false,
        stem: '時間を聞いています。',
        stem_zh: '在問時間。',
        dialogue: {
            speakerA: '駅まで＿＿かかりますか？',
            speakerB: '十分くらいです。'
        },
        options: [
            { text: 'なんふん', isCorrect: false, reason: '「何分{なんぷん}」需要{じゅよう}半濁音化{はんだくおんか}。' },
            { text: 'なんぷん', isCorrect: true, reason: '正確{せいかく}！「駅{えき}まで何分{なんぷん}かかりますか」是詢問{たずねる}所需{しょようじ}時間{じかん}的正確{せいかく}說法{いいかた}。' },
            { text: 'いくつ', isCorrect: false, reason: '時間{じかん}使用{しよう}「何分{なんぷん}」。' },
            { text: 'なんぶん', isCorrect: false, reason: '「何分{なんぷん}」使用{しよう}半濁音{はんだくおん}「ぷ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '詢問{たずねる}所需{しょようじ}分鐘{ふん}時{とき}使用{しよう}「何分{なんぷん}」。',
            relatedRules: ['疑問詞{ぎもんし}「何分{なんぷん}」の使用{しよう}', '時間{じかん}の質問{しつもん}']
        },
        sourceItem: { value: '?', kanji: '何分', reading: 'なんぷん' }
    },

    // ===== 何人 的題目（無音變：なんにん） =====
    {
        id: 'qcounter_nin_pron',
        category: 'counters',
        subcategory: 'questionCounters',
        type: 'pronunciation',
        isTrap: false,
        stem: '「何人」的正確讀音是？',
        stem_zh: '「何人」的正確讀音是？',
        options: [
            { text: 'なんにん', isCorrect: true, reason: '正確{せいかく}！「何人{なんにん}」無音變{むおんへん}，讀作{どくさ}「なんにん」。' },
            { text: 'なんびん', isCorrect: false, reason: '「人{にん}」不發生{ふはっせい}濁音化{だくおんか}。' },
            { text: 'なにじん', isCorrect: false, reason: '「じん」是國籍{こくせき}/人種{じんしゅ}的讀法{よみかた}，不用於{もちいず}人數{にんずう}。' },
            { text: 'なにひと', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何人{なんにん}」讀作{どくさ}「なんにん」。「人{にん}」不發生{ふはっせい}音變{おんへん}。',
            relatedRules: ['疑問詞{ぎもんし}の讀法{よみかた}', '「何{なん}＋人{にん}」の讀法{よみかた}']
        },
        sourceItem: { value: '?', kanji: '何人', reading: 'なんにん' }
    },
    {
        id: 'qcounter_nin_dial',
        category: 'counters',
        subcategory: 'questionCounters',
        type: 'dialogue',
        isTrap: false,
        stem: '人数を聞いています。',
        stem_zh: '在問人數。',
        dialogue: {
            speakerA: '＿＿様ですか？',
            speakerB: '四人です。'
        },
        options: [
            { text: 'なんびん', isCorrect: false, reason: '「人{にん}」不濁音化{ふだくおんか}。' },
            { text: 'なんにん', isCorrect: true, reason: '正確{せいかく}！「何人{なんにん}様{さま}ですか」是餐廳{レストラン}常用{じょうよう}的問法{といかた}。' },
            { text: 'いくつ', isCorrect: false, reason: '人數{にんずう}使用{しよう}「何人{なんにん}」。' },
            { text: 'なにじん', isCorrect: false, reason: '「じん」用於{もちいる}國籍{こくせき}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '詢問{たずねる}人數{にんずう}時{とき}使用{しよう}「何人{なんにん}」。餐廳{レストラン}常說{じょうよういう}「何人{なんにん}様{さま}ですか」。',
            relatedRules: ['疑問詞{ぎもんし}「何人{なんにん}」の使用{しよう}', '餐廳{レストラン}用語{ようご}']
        },
        sourceItem: { value: '?', kanji: '何人', reading: 'なんにん' }
    },

    // ===== 何枚 的題目（無音變：なんまい） =====
    {
        id: 'qcounter_mai_pron',
        category: 'counters',
        subcategory: 'questionCounters',
        type: 'pronunciation',
        isTrap: false,
        stem: '「何枚」的正確讀音是？',
        stem_zh: '「何枚」的正確讀音是？',
        options: [
            { text: 'なんまい', isCorrect: true, reason: '正確{せいかく}！「何枚{なんまい}」無音變{むおんへん}，讀作{どくさ}「なんまい」。' },
            { text: 'なんばい', isCorrect: false, reason: '「枚{まい}」不發生{ふはっせい}濁音化{だくおんか}。注意{ちゅうい}不要{ない}與「杯{はい}」混淆{こんこう}。' },
            { text: 'なんぱい', isCorrect: false, reason: '「枚{まい}」不發生{ふはっせい}半濁音化{はんだくおんか}。' },
            { text: 'なにまい', isCorrect: false, reason: '搭配{たいはい}量詞{りょうし}時{とき}，「何{なに}」讀作{どくさ}「なん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何枚{なんまい}」讀作{どくさ}「なんまい」。「枚{まい}」以「ま行{ぎょう}」開頭{あたま}，不受{うけない}撥音{はつおん}影響{えいきょう}。',
            relatedRules: ['疑問詞{ぎもんし}の讀法{よみかた}', '「何{なん}＋枚{まい}」の讀法{よみかた}']
        },
        sourceItem: { value: '?', kanji: '何枚', reading: 'なんまい' }
    },

    // ===== 何冊 的題目（無音變：なんさつ） =====
    {
        id: 'qcounter_satsu_pron',
        category: 'counters',
        subcategory: 'questionCounters',
        type: 'pronunciation',
        isTrap: false,
        stem: '「何冊」的正確讀音是？',
        stem_zh: '「何冊」的正確讀音是？',
        options: [
            { text: 'なんさつ', isCorrect: true, reason: '正確{せいかく}！「何冊{なんさつ}」無音變{むおんへん}，讀作{どくさ}「なんさつ」。' },
            { text: 'なんざつ', isCorrect: false, reason: '「冊{さつ}」不發生{ふはっせい}濁音化{だくおんか}。' },
            { text: 'なっさつ', isCorrect: false, reason: '「何冊{なんさつ}」不促音化{ふそくおんか}。' },
            { text: 'なにさつ', isCorrect: false, reason: '搭配{たいはい}量詞{りょうし}時{とき}，「何{なに}」讀作{どくさ}「なん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何冊{なんさつ}」讀作{どくさ}「なんさつ」。「冊{さつ}」以「さ行{ぎょう}」開頭{あたま}，但撥音{はつおん}後不發生{ふはっせい}濁音化{だくおんか}。',
            relatedRules: ['疑問詞{ぎもんし}の讀法{よみかた}', '「何{なん}＋冊{さつ}」の讀法{よみかた}']
        },
        sourceItem: { value: '?', kanji: '何冊', reading: 'なんさつ' }
    },

    // ===== いくつ 的題目（特殊：不用「なんつ」） =====
    {
        id: 'qcounter_tsu_pron',
        category: 'counters',
        subcategory: 'questionCounters',
        type: 'pronunciation',
        isTrap: true,
        stem: '詢問「つ」系統數量時，正確的疑問詞是？',
        stem_zh: '詢問「つ」系統數量時，正確的疑問詞是？',
        options: [
            { text: 'いくつ', isCorrect: true, reason: '正確{せいかく}！「つ」系統{けいとう}使用{しよう}「いくつ」，不是「なんつ」。' },
            { text: 'なんつ', isCorrect: false, reason: '陷阱{かんけい}！「つ」系統{けいとう}的疑問詞{ぎもんし}是「いくつ」，「なんつ」不存在{そんざいしない}。' },
            { text: 'なんこ', isCorrect: false, reason: '「何個{なんこ}」使用{しよう}「個{こ}」量詞{りょうし}，與「つ」系統{けいとう}不同{ちがう}。' },
            { text: 'いっつ', isCorrect: false, reason: '這不是正確{せいかく}的疑問詞{ぎもんし}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「つ」系統{けいとう}的疑問詞{ぎもんし}是「いくつ」，這是唯一{ゆいいつ}不用{もちいず}「何{なん}」的量詞{りょうし}疑問詞{ぎもんし}。',
            trapExplanation: '這是陷阱題{かんけいだい}。「なんつ」這個詞{ことば}不存在{そんざいしない}，必須{ひっす}使用{しよう}「いくつ」。',
            relatedRules: ['「いくつ」の特殊{とくしゅ}性{せい}', '「つ」系統{けいとう}の疑問詞{ぎもんし}']
        },
        sourceItem: { value: '?', kanji: '幾つ', reading: 'いくつ' }
    },
    {
        id: 'qcounter_tsu_dial',
        category: 'counters',
        subcategory: 'questionCounters',
        type: 'dialogue',
        isTrap: false,
        stem: '数量を聞いています。',
        stem_zh: '在問數量。',
        dialogue: {
            speakerA: 'りんごは＿＿ありますか？',
            speakerB: '五つあります。'
        },
        options: [
            { text: 'なんつ', isCorrect: false, reason: '「なんつ」不存在{そんざいしない}，應使用{しよう}「いくつ」。' },
            { text: 'いくつ', isCorrect: true, reason: '正確{せいかく}！「りんごはいくつありますか」是詢問{たずねる}一般{いっぱん}物品{ぶっぴん}數量{すうりょう}的說法{いいかた}。' },
            { text: 'なんこ', isCorrect: false, reason: '若回答{かいとう}用{もちいる}「つ」，問題{もんだい}應用{おうよう}「いくつ」。' },
            { text: 'なにつ', isCorrect: false, reason: '這不是正確{せいかく}的疑問詞{ぎもんし}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '詢問{たずねる}一般{いっぱん}物品{ぶっぴん}數量{すうりょう}時{とき}使用{しよう}「いくつ」，回答{かいとう}用{もちいる}「〜つ」。',
            relatedRules: ['「いくつ」の使用{しよう}', '「つ」系統{けいとう}の質問{しつもん}與回答{かいとう}']
        },
        sourceItem: { value: '?', kanji: '幾つ', reading: 'いくつ' }
    },

    // ===== 音變規則總結題 =====
    {
        id: 'qcounter_summary',
        category: 'counters',
        subcategory: 'questionCounters',
        type: 'pronunciation',
        isTrap: true,
        stem: '以下哪組疑問詞量詞的讀法全部正確？',
        stem_zh: '以下哪組疑問詞量詞的讀法全部正確？',
        options: [
            { text: 'なんぼん、なんびき、なんがい', isCorrect: true, reason: '正確{せいかく}！這三個{さんこ}都發生{はっせい}濁音化{だくおんか}：何本{なんぼん}、何匹{なんびき}、何階{なんがい}。' },
            { text: 'なんほん、なんひき、なんかい', isCorrect: false, reason: '陷阱{かんけい}！這三個{さんこ}都需要{じゅよう}濁音化{だくおんか}，不是原音{げんおん}。' },
            { text: 'なんぽん、なんぴき、なんっかい', isCorrect: false, reason: '這三個{さんこ}應使用{しよう}濁音{だくおん}，不是半濁音{はんだくおん}或促音{そくおん}。' },
            { text: 'なにぼん、なにびき、なにがい', isCorrect: false, reason: '搭配{たいはい}量詞{りょうし}時{とき}，「何{なに}」讀作{どくさ}「なん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何{なん}」的撥音{はつおん}「ん」觸發{しょうはつ}後續{こうぞく}h行{ぎょう}、k行{ぎょう}量詞{りょうし}濁音化{だくおんか}：ほ→ぼ、ひ→び、か→が。',
            trapExplanation: '這是總結{そうけつ}題{だい}。記憶{きおく}口訣{くけつ}：「何{なん}」後的h變b、k變g。',
            relatedRules: ['疑問詞{ぎもんし}の音變{おんへん}總結{そうけつ}', '濁音化{だくおんか}規則{きそく}']
        },
        sourceItem: { value: '?', kanji: '何〜', reading: '音變總結' }
    },

    // ===== 何台 的題目（濁音化：なんだい） =====
    {
        id: 'qcounter_dai_pron', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: true,
        stem: '「何台」的正確讀音是？', stem_zh: '「何台」的正確讀音是？',
        options: [
            { text: 'なんだい', isCorrect: true, reason: '正確！「何台」發生濁音化，讀作「なんだい」。' },
            { text: 'なんたい', isCorrect: false, reason: '陷阱！撥音「ん」後的「た」變為濁音「だ」。' },
            { text: 'なにたい', isCorrect: false, reason: '搭配量詞時，「何」讀作「なん」。' },
            { text: 'なんっだい', isCorrect: false, reason: '「何台」不需要促音。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「何台」讀作「なんだい」。撥音「ん」引發「た→だ」濁音化。', trapExplanation: '這是陷阱題。撥音後t變d。', relatedRules: ['疑問詞の音變', '「何＋台」の讀法'] },
        sourceItem: { value: '?', kanji: '何台', reading: 'なんだい' }
    },
    {
        id: 'qcounter_dai_dial', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '機器數量', stem_zh: '機器數量',
        dialogue: { speakerA: 'パソコンは＿＿ありますか？', speakerB: '三台あります。' },
        options: [
            { text: 'なんたい', isCorrect: false, reason: '「何台」需要濁音化。' },
            { text: 'なんだい', isCorrect: true, reason: '正確！「パソコンは何台ありますか」是詢問機器數量的說法。' },
            { text: 'いくつ', isCorrect: false, reason: '機器使用「何台」更準確。' },
            { text: 'なにだい', isCorrect: false, reason: '「何」搭配量詞時讀「なん」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問機器、車輛數量時使用「何台」。', relatedRules: ['疑問詞「何台」の使用', '機器の計數'] },
        sourceItem: { value: '?', kanji: '何台', reading: 'なんだい' }
    },
    {
        id: 'qcounter_dai_sent', category: 'counters', subcategory: 'questionCounters', type: 'sentence', isTrap: false,
        stem: '車は＿＿必要ですか？', stem_zh: '需要幾台車？',
        options: [
            { text: 'なんたい', isCorrect: false, reason: '「何台」需要濁音化。' },
            { text: 'なんだい', isCorrect: true, reason: '正確！詢問車輛數量用「何台」。' },
            { text: 'いくつ', isCorrect: false, reason: '車輛使用「何台」。' },
            { text: 'なんこ', isCorrect: false, reason: '車輛不用「個」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '車輛、機器使用「何台」詢問數量。', relatedRules: ['「何台」の使用'] },
        sourceItem: { value: '?', kanji: '何台', reading: 'なんだい' }
    },

    // ===== 何回 的題目（濁音化：なんかい → 部分情境用 なんがい） =====
    {
        id: 'qcounter_kai2_pron', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: true,
        stem: '「何回」的正確讀音是？', stem_zh: '「何回」的正確讀音是？',
        options: [
            { text: 'なんかい', isCorrect: true, reason: '正確！「何回」（次數）讀作「なんかい」，不發生濁音化。' },
            { text: 'なんがい', isCorrect: false, reason: '「何階」（樓層）才讀「なんがい」，「何回」（次數）讀「なんかい」。' },
            { text: 'なにかい', isCorrect: false, reason: '搭配量詞時，「何」讀作「なん」。' },
            { text: 'なんっかい', isCorrect: false, reason: '「何回」不需要促音。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「何回」（次數）讀作「なんかい」。注意：「何階」（樓層）才讀「なんがい」。', trapExplanation: '易混淆：何回(なんかい)vs何階(なんがい)。', relatedRules: ['「何回」vs「何階」', '疑問詞の讀法'] },
        sourceItem: { value: '?', kanji: '何回', reading: 'なんかい' }
    },
    {
        id: 'qcounter_kai2_dial', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '次數', stem_zh: '次數',
        dialogue: { speakerA: '日本には＿＿行きましたか？', speakerB: '三回行きました。' },
        options: [
            { text: 'なんがい', isCorrect: false, reason: '「何階」是樓層，不是次數。' },
            { text: 'なんかい', isCorrect: true, reason: '正確！「何回」詢問次數。' },
            { text: 'いくつ', isCorrect: false, reason: '次數使用「何回」。' },
            { text: 'なんど', isCorrect: false, reason: '「何度」也可以，但本題答案是「何回」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問次數時使用「何回」(なんかい)。', relatedRules: ['疑問詞「何回」の使用'] },
        sourceItem: { value: '?', kanji: '何回', reading: 'なんかい' }
    },

    // ===== 何個 的題目（濁音化：なんこ） =====
    {
        id: 'qcounter_ko_pron', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: false,
        stem: '「何個」的正確讀音是？', stem_zh: '「何個」的正確讀音是？',
        options: [
            { text: 'なんこ', isCorrect: true, reason: '正確！「何個」讀作「なんこ」，無音變。' },
            { text: 'なんご', isCorrect: false, reason: '「個」不發生濁音化。' },
            { text: 'なにこ', isCorrect: false, reason: '搭配量詞時，「何」讀作「なん」。' },
            { text: 'なんっこ', isCorrect: false, reason: '「何個」不需要促音。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「何個」讀作「なんこ」。「個」無音變。', relatedRules: ['疑問詞の讀法', '「何＋個」の讀法'] },
        sourceItem: { value: '?', kanji: '何個', reading: 'なんこ' }
    },
    {
        id: 'qcounter_ko_dial', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '物品數量', stem_zh: '物品數量',
        dialogue: { speakerA: 'みかんは＿＿買いましたか？', speakerB: '六個買いました。' },
        options: [
            { text: 'なんご', isCorrect: false, reason: '「個」不濁音化。' },
            { text: 'なんこ', isCorrect: true, reason: '正確！「何個」詢問物品數量。' },
            { text: 'いくつ', isCorrect: false, reason: '若回答用「個」，問題用「何個」更自然。' },
            { text: 'なにこ', isCorrect: false, reason: '「何」搭配量詞時讀「なん」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問物品數量時使用「何個」。', relatedRules: ['疑問詞「何個」の使用'] },
        sourceItem: { value: '?', kanji: '何個', reading: 'なんこ' }
    },

    // ===== 何時 的題目（なんじ） =====
    {
        id: 'qcounter_ji_pron', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: false,
        stem: '「何時」（幾點）的正確讀音是？', stem_zh: '「何時」（幾點）的正確讀音是？',
        options: [
            { text: 'なんじ', isCorrect: true, reason: '正確！「何時」讀作「なんじ」。' },
            { text: 'なんぢ', isCorrect: false, reason: '「時」不使用「ぢ」。' },
            { text: 'なにじ', isCorrect: false, reason: '搭配量詞時，「何」讀作「なん」。' },
            { text: 'いつ', isCorrect: false, reason: '「いつ」是「什麼時候」，不是「幾點」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「何時」讀作「なんじ」，用於詢問具體時刻。', relatedRules: ['時間の疑問詞', '「何時」vs「いつ」'] },
        sourceItem: { value: '?', kanji: '何時', reading: 'なんじ' }
    },
    {
        id: 'qcounter_ji_dial', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '時間', stem_zh: '時間',
        dialogue: { speakerA: '今＿＿ですか？', speakerB: '三時です。' },
        options: [
            { text: 'いつ', isCorrect: false, reason: '「いつ」是「什麼時候」，不是「幾點」。' },
            { text: 'なんじ', isCorrect: true, reason: '正確！「今何時ですか」是詢問現在幾點的說法。' },
            { text: 'なにじ', isCorrect: false, reason: '「何」搭配量詞時讀「なん」。' },
            { text: 'なんとき', isCorrect: false, reason: '這不是正確的說法。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問具體時刻使用「何時」(なんじ)。', relatedRules: ['疑問詞「何時」の使用'] },
        sourceItem: { value: '?', kanji: '何時', reading: 'なんじ' }
    },

    // ===== 何月 的題目（なんがつ） =====
    {
        id: 'qcounter_gatsu_pron', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: true,
        stem: '「何月」的正確讀音是？', stem_zh: '「何月」的正確讀音是？',
        options: [
            { text: 'なんがつ', isCorrect: true, reason: '正確！「何月」發生濁音化，讀作「なんがつ」。' },
            { text: 'なんかつ', isCorrect: false, reason: '陷阱！撥音「ん」後的「か」變為濁音「が」。' },
            { text: 'なにがつ', isCorrect: false, reason: '搭配量詞時，「何」讀作「なん」。' },
            { text: 'なんげつ', isCorrect: false, reason: '「何月」詢問月份，讀「なんがつ」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「何月」讀作「なんがつ」。撥音「ん」引發「か→が」濁音化。', trapExplanation: '這是陷阱題。撥音後k變g。', relatedRules: ['疑問詞の音變', '「何＋月」の讀法'] },
        sourceItem: { value: '?', kanji: '何月', reading: 'なんがつ' }
    },
    {
        id: 'qcounter_gatsu_dial', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '月份', stem_zh: '月份',
        dialogue: { speakerA: '誕生日は＿＿ですか？', speakerB: '七月です。' },
        options: [
            { text: 'なんかつ', isCorrect: false, reason: '「何月」需要濁音化。' },
            { text: 'なんがつ', isCorrect: true, reason: '正確！「何月」詢問月份。' },
            { text: 'いつ', isCorrect: false, reason: '若要問具體月份用「何月」。' },
            { text: 'なんげつ', isCorrect: false, reason: '「何月」讀「なんがつ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問月份時使用「何月」(なんがつ)。', relatedRules: ['疑問詞「何月」の使用'] },
        sourceItem: { value: '?', kanji: '何月', reading: 'なんがつ' }
    },

    // ===== 何日 的題目（なんにち） =====
    {
        id: 'qcounter_nichi_pron', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: false,
        stem: '「何日」（幾號/幾天）的正確讀音是？', stem_zh: '「何日」（幾號/幾天）的正確讀音是？',
        options: [
            { text: 'なんにち', isCorrect: true, reason: '正確！「何日」讀作「なんにち」。' },
            { text: 'なにひ', isCorrect: false, reason: '「日」在此讀「にち」，不是「ひ」。' },
            { text: 'なんび', isCorrect: false, reason: '「日」不讀「び」。' },
            { text: 'いつか', isCorrect: false, reason: '「五日」讀「いつか」，「何日」讀「なんにち」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「何日」讀作「なんにち」，用於詢問日期或天數。', relatedRules: ['日期の疑問詞', '「何日」の讀法'] },
        sourceItem: { value: '?', kanji: '何日', reading: 'なんにち' }
    },
    {
        id: 'qcounter_nichi_dial', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '日期', stem_zh: '日期',
        dialogue: { speakerA: '今日は＿＿ですか？', speakerB: '十五日です。' },
        options: [
            { text: 'なにひ', isCorrect: false, reason: '「日」在此讀「にち」。' },
            { text: 'なんにち', isCorrect: true, reason: '正確！「今日は何日ですか」詢問今天幾號。' },
            { text: 'いつ', isCorrect: false, reason: '問具體日期用「何日」。' },
            { text: 'なんび', isCorrect: false, reason: '「日」不讀「び」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問日期時使用「何日」(なんにち)。', relatedRules: ['疑問詞「何日」の使用'] },
        sourceItem: { value: '?', kanji: '何日', reading: 'なんにち' }
    },

    // ===== 何年 的題目（なんねん） =====
    {
        id: 'qcounter_nen_pron', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: false,
        stem: '「何年」的正確讀音是？', stem_zh: '「何年」的正確讀音是？',
        options: [
            { text: 'なんねん', isCorrect: true, reason: '正確！「何年」讀作「なんねん」。' },
            { text: 'なんとし', isCorrect: false, reason: '「年」在此讀「ねん」，不是「とし」。' },
            { text: 'なにねん', isCorrect: false, reason: '搭配量詞時，「何」讀作「なん」。' },
            { text: 'いつとし', isCorrect: false, reason: '這不是正確的說法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「何年」讀作「なんねん」，用於詢問年份或年數。', relatedRules: ['時間の疑問詞', '「何年」の讀法'] },
        sourceItem: { value: '?', kanji: '何年', reading: 'なんねん' }
    },
    {
        id: 'qcounter_nen_dial', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '年份', stem_zh: '年份',
        dialogue: { speakerA: '日本に来たのは＿＿ですか？', speakerB: '2020年です。' },
        options: [
            { text: 'なんとし', isCorrect: false, reason: '「年」在此讀「ねん」。' },
            { text: 'なんねん', isCorrect: true, reason: '正確！「何年」詢問年份。' },
            { text: 'いつ', isCorrect: false, reason: '問具體年份用「何年」。' },
            { text: 'なにねん', isCorrect: false, reason: '「何」搭配量詞時讀「なん」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問年份時使用「何年」(なんねん)。', relatedRules: ['疑問詞「何年」の使用'] },
        sourceItem: { value: '?', kanji: '何年', reading: 'なんねん' }
    },

    // ===== 何週間 的題目（なんしゅうかん） =====
    {
        id: 'qcounter_shukan_pron', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: false,
        stem: '「何週間」的正確讀音是？', stem_zh: '「何週間」的正確讀音是？',
        options: [
            { text: 'なんしゅうかん', isCorrect: true, reason: '正確！「何週間」讀作「なんしゅうかん」。' },
            { text: 'なんじゅうかん', isCorrect: false, reason: '「週」讀「しゅう」，不是「じゅう」。' },
            { text: 'なにしゅうかん', isCorrect: false, reason: '搭配量詞時，「何」讀作「なん」。' },
            { text: 'なんしゅっかん', isCorrect: false, reason: '「何週間」不需要促音。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「何週間」讀作「なんしゅうかん」，用於詢問週數。', relatedRules: ['時間の疑問詞', '「何週間」の讀法'] },
        sourceItem: { value: '?', kanji: '何週間', reading: 'なんしゅうかん' }
    },

    // ===== 何曜日 的題目（なんようび） =====
    {
        id: 'qcounter_youbi_pron', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: false,
        stem: '「何曜日」的正確讀音是？', stem_zh: '「何曜日」的正確讀音是？',
        options: [
            { text: 'なんようび', isCorrect: true, reason: '正確！「何曜日」讀作「なんようび」。' },
            { text: 'なにようび', isCorrect: false, reason: '搭配量詞時，「何」讀作「なん」。' },
            { text: 'なんにちようび', isCorrect: false, reason: '「曜日」讀「ようび」，不含「にち」。' },
            { text: 'いつようび', isCorrect: false, reason: '這不是正確的說法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「何曜日」讀作「なんようび」，用於詢問星期幾。', relatedRules: ['曜日の疑問詞', '「何曜日」の讀法'] },
        sourceItem: { value: '?', kanji: '何曜日', reading: 'なんようび' }
    },
    {
        id: 'qcounter_youbi_dial', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '星期', stem_zh: '星期',
        dialogue: { speakerA: '会議は＿＿ですか？', speakerB: '水曜日です。' },
        options: [
            { text: 'いつ', isCorrect: false, reason: '問具體星期用「何曜日」。' },
            { text: 'なんようび', isCorrect: true, reason: '正確！「何曜日」詢問星期幾。' },
            { text: 'なにようび', isCorrect: false, reason: '「何」搭配量詞時讀「なん」。' },
            { text: 'なんにち', isCorrect: false, reason: '「何日」是問日期，不是星期。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問星期幾時使用「何曜日」(なんようび)。', relatedRules: ['疑問詞「何曜日」の使用'] },
        sourceItem: { value: '?', kanji: '何曜日', reading: 'なんようび' }
    },

    // ===== 更多情境應用題 =====
    {
        id: 'qcounter_extra_1', category: 'counters', subcategory: 'questionCounters', type: 'sentence', isTrap: false,
        stem: 'この映画は＿＿ですか？', stem_zh: '這部電影多長？',
        options: [
            { text: 'なんふん', isCorrect: false, reason: '「何分」需要半濁音化。' },
            { text: 'なんぷん', isCorrect: true, reason: '正確！詢問電影時長用「何分」。' },
            { text: 'いくら', isCorrect: false, reason: '「いくら」是問價格。' },
            { text: 'なんじかん', isCorrect: false, reason: '也可以，但通常問分鐘。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問時長用「何分」(なんぷん)。', relatedRules: ['時間の疑問詞'] },
        sourceItem: { value: '?', kanji: '何分', reading: 'なんぷん' }
    },
    {
        id: 'qcounter_extra_2', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '餐廳訂位', stem_zh: '餐廳訂位',
        dialogue: { speakerA: 'ご予約は＿＿様ですか？', speakerB: '四人です。' },
        options: [
            { text: 'いくつ', isCorrect: false, reason: '人數使用「何人」。' },
            { text: 'なんにん', isCorrect: true, reason: '正確！「何人様ですか」是餐廳常用問法。' },
            { text: 'なんびん', isCorrect: false, reason: '「人」不濁音化。' },
            { text: 'なにじん', isCorrect: false, reason: '「じん」是國籍。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '餐廳訂位時常用「何人様ですか」。', relatedRules: ['疑問詞「何人」の使用', '餐廳用語'] },
        sourceItem: { value: '?', kanji: '何人', reading: 'なんにん' }
    },
    {
        id: 'qcounter_extra_3', category: 'counters', subcategory: 'questionCounters', type: 'sentence', isTrap: false,
        stem: 'チケットは＿＿買いましたか？', stem_zh: '買了幾張票？',
        options: [
            { text: 'いくつ', isCorrect: false, reason: '票用「何枚」更準確。' },
            { text: 'なんまい', isCorrect: true, reason: '正確！票是扁平物，用「何枚」。' },
            { text: 'なんばい', isCorrect: false, reason: '「枚」不濁音化，注意不是「杯」。' },
            { text: 'なんこ', isCorrect: false, reason: '票不用「個」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '票、紙張等扁平物用「何枚」。', relatedRules: ['疑問詞「何枚」の使用'] },
        sourceItem: { value: '?', kanji: '何枚', reading: 'なんまい' }
    },
    {
        id: 'qcounter_extra_4', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '書店', stem_zh: '書店',
        dialogue: { speakerA: '本は＿＿お持ちですか？', speakerB: '五冊持っています。' },
        options: [
            { text: 'なんざつ', isCorrect: false, reason: '「冊」不濁音化。' },
            { text: 'なんさつ', isCorrect: true, reason: '正確！書籍用「何冊」。' },
            { text: 'いくつ', isCorrect: false, reason: '書籍用「何冊」更準確。' },
            { text: 'なんぼん', isCorrect: false, reason: '「本」是細長物量詞。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '書籍用「何冊」(なんさつ)。', relatedRules: ['疑問詞「何冊」の使用'] },
        sourceItem: { value: '?', kanji: '何冊', reading: 'なんさつ' }
    },
    {
        id: 'qcounter_extra_5', category: 'counters', subcategory: 'questionCounters', type: 'sentence', isTrap: false,
        stem: '教室は＿＿ですか？', stem_zh: '教室在幾樓？',
        options: [
            { text: 'なんかい', isCorrect: false, reason: '「何階」需要濁音化。' },
            { text: 'なんがい', isCorrect: true, reason: '正確！樓層用「何階」(なんがい)。' },
            { text: 'どこ', isCorrect: false, reason: '問具體樓層用「何階」。' },
            { text: 'なんかいめ', isCorrect: false, reason: '「何階」已足夠。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問樓層用「何階」(なんがい)。', relatedRules: ['疑問詞「何階」の使用'] },
        sourceItem: { value: '?', kanji: '何階', reading: 'なんがい' }
    },
    {
        id: 'qcounter_extra_6', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '喝咖啡', stem_zh: '喝咖啡',
        dialogue: { speakerA: '毎日コーヒーを＿＿飲みますか？', speakerB: '二杯飲みます。' },
        options: [
            { text: 'なんはい', isCorrect: false, reason: '「何杯」需要濁音化。' },
            { text: 'なんばい', isCorrect: true, reason: '正確！杯裝飲料用「何杯」(なんばい)。' },
            { text: 'いくつ', isCorrect: false, reason: '杯裝飲料用「何杯」。' },
            { text: 'なんぱい', isCorrect: false, reason: '「何杯」使用濁音「ば」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '杯裝飲料用「何杯」(なんばい)。', relatedRules: ['疑問詞「何杯」の使用'] },
        sourceItem: { value: '?', kanji: '何杯', reading: 'なんばい' }
    },
    {
        id: 'qcounter_extra_7', category: 'counters', subcategory: 'questionCounters', type: 'sentence', isTrap: false,
        stem: 'ペンは＿＿ありますか？', stem_zh: '有幾支筆？',
        options: [
            { text: 'なんほん', isCorrect: false, reason: '「何本」需要濁音化。' },
            { text: 'なんぼん', isCorrect: true, reason: '正確！筆是細長物，用「何本」(なんぼん)。' },
            { text: 'いくつ', isCorrect: false, reason: '筆用「何本」更準確。' },
            { text: 'なんぽん', isCorrect: false, reason: '「何本」使用濁音「ぼ」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '筆、傘等細長物用「何本」(なんぼん)。', relatedRules: ['疑問詞「何本」の使用'] },
        sourceItem: { value: '?', kanji: '何本', reading: 'なんぼん' }
    },
    {
        id: 'qcounter_extra_8', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '養寵物', stem_zh: '養寵物',
        dialogue: { speakerA: '犬は＿＿飼っていますか？', speakerB: '一匹飼っています。' },
        options: [
            { text: 'なんひき', isCorrect: false, reason: '「何匹」需要濁音化。' },
            { text: 'なんびき', isCorrect: true, reason: '正確！小動物用「何匹」(なんびき)。' },
            { text: 'いくつ', isCorrect: false, reason: '動物用「何匹」更準確。' },
            { text: 'なんぴき', isCorrect: false, reason: '「何匹」使用濁音「び」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '小動物用「何匹」(なんびき)。', relatedRules: ['疑問詞「何匹」の使用'] },
        sourceItem: { value: '?', kanji: '何匹', reading: 'なんびき' }
    },

    // ===== 陷阱題：音變比較 =====
    {
        id: 'qcounter_trap_1', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: true,
        stem: '以下哪個讀法是錯誤的？', stem_zh: '以下哪個讀法是錯誤的？',
        options: [
            { text: '何本(なんほん)', isCorrect: true, reason: '這是錯誤的！應該是「なんぼん」，需要濁音化。' },
            { text: '何人(なんにん)', isCorrect: false, reason: '這是正確的，「人」無音變。' },
            { text: '何枚(なんまい)', isCorrect: false, reason: '這是正確的，「枚」無音變。' },
            { text: '何冊(なんさつ)', isCorrect: false, reason: '這是正確的，「冊」無音變。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「何本」應讀「なんぼん」，h行量詞在撥音後濁音化。', trapExplanation: '這是陷阱題，辨識h行濁音化。', relatedRules: ['濁音化規則', '錯誤識別'] },
        sourceItem: { value: '?', kanji: '何本', reading: 'なんぼん' }
    },
    {
        id: 'qcounter_trap_2', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: true,
        stem: '以下哪個讀法是錯誤的？', stem_zh: '以下哪個讀法是錯誤的？',
        options: [
            { text: '何階(なんかい)', isCorrect: true, reason: '這是錯誤的！應該是「なんがい」，需要濁音化。' },
            { text: '何回(なんかい)', isCorrect: false, reason: '這是正確的，「何回」(次數)不濁音化。' },
            { text: '何時(なんじ)', isCorrect: false, reason: '這是正確的。' },
            { text: '何年(なんねん)', isCorrect: false, reason: '這是正確的。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「何階」(樓層)應讀「なんがい」。注意：「何回」(次數)讀「なんかい」不濁音化。', trapExplanation: '這是易混淆題：何階(なんがい)vs何回(なんかい)。', relatedRules: ['「何階」vs「何回」', '濁音化規則'] },
        sourceItem: { value: '?', kanji: '何階', reading: 'なんがい' }
    },
    {
        id: 'qcounter_trap_3', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: true,
        stem: '以下哪個讀法是錯誤的？', stem_zh: '以下哪個讀法是錯誤的？',
        options: [
            { text: '何分(なんぶん)', isCorrect: true, reason: '這是錯誤的！應該是「なんぷん」，使用半濁音。' },
            { text: '何分(なんぷん)', isCorrect: false, reason: '這是正確的，「分」用半濁音。' },
            { text: '何杯(なんばい)', isCorrect: false, reason: '這是正確的，「杯」用濁音。' },
            { text: '何匹(なんびき)', isCorrect: false, reason: '這是正確的，「匹」用濁音。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「何分」應讀「なんぷん」，「分」是特殊的半濁音化。', trapExplanation: '這是陷阱題，「分」用半濁音(ぷ)而非濁音(ぶ)。', relatedRules: ['半濁音化規則', '「分」の特殊性'] },
        sourceItem: { value: '?', kanji: '何分', reading: 'なんぷん' }
    },
    {
        id: 'qcounter_trap_4', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: true,
        stem: '以下哪個讀法是錯誤的？', stem_zh: '以下哪個讀法是錯誤的？',
        options: [
            { text: '何月(なんかつ)', isCorrect: true, reason: '這是錯誤的！應該是「なんがつ」，需要濁音化。' },
            { text: '何月(なんがつ)', isCorrect: false, reason: '這是正確的。' },
            { text: '何日(なんにち)', isCorrect: false, reason: '這是正確的。' },
            { text: '何曜日(なんようび)', isCorrect: false, reason: '這是正確的。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「何月」應讀「なんがつ」，k行量詞在撥音後濁音化。', trapExplanation: '這是陷阱題，k行濁音化。', relatedRules: ['濁音化規則', '「何月」の讀法'] },
        sourceItem: { value: '?', kanji: '何月', reading: 'なんがつ' }
    },

    // ===== 比較題 =====
    {
        id: 'qcounter_compare_1', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: true,
        stem: '以下哪組疑問詞量詞都發生濁音化？', stem_zh: '以下哪組疑問詞量詞都發生濁音化？',
        options: [
            { text: '何本、何匹、何杯、何階、何台、何月', isCorrect: true, reason: '正確！這些都發生濁音化：なんぼん、なんびき、なんばい、なんがい、なんだい、なんがつ。' },
            { text: '何人、何枚、何冊、何個', isCorrect: false, reason: '錯誤，這些不發生濁音化。' },
            { text: '何分、何回、何時', isCorrect: false, reason: '錯誤，「分」是半濁音化，「回」「時」無音變。' },
            { text: '所有疑問詞量詞都濁音化', isCorrect: false, reason: '錯誤，只有特定量詞濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '濁音化規則：h行(ほ→ぼ、ひ→び、は→ば)、k行(か→が)、t行(た→だ)在撥音後濁音化。', relatedRules: ['濁音化規則總結'] },
        sourceItem: { value: '?', kanji: '何〜', reading: '濁音化比較' }
    },
    {
        id: 'qcounter_compare_2', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: true,
        stem: '以下哪組疑問詞量詞不發生音變？', stem_zh: '以下哪組疑問詞量詞不發生音變？',
        options: [
            { text: '何人、何枚、何冊、何個、何時、何回', isCorrect: true, reason: '正確！這些都不發生音變：なんにん、なんまい、なんさつ、なんこ、なんじ、なんかい。' },
            { text: '何本、何匹、何杯', isCorrect: false, reason: '錯誤，這些發生濁音化。' },
            { text: '何階、何台、何月', isCorrect: false, reason: '錯誤，這些發生濁音化。' },
            { text: '何分', isCorrect: false, reason: '錯誤，「分」發生半濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「人、枚、冊、個、時、回」等量詞在撥音後不發生音變。', relatedRules: ['無音變量詞'] },
        sourceItem: { value: '?', kanji: '何〜', reading: '無音變比較' }
    },
    {
        id: 'qcounter_compare_3', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: true,
        stem: '「何分」為什麼讀「なんぷん」而不是「なんぶん」？', stem_zh: '「何分」為什麼讀「なんぷん」而不是「なんぶん」？',
        options: [
            { text: '「分」是特殊量詞，撥音後用半濁音', isCorrect: true, reason: '正確！「分」是特殊情況，使用半濁音(ぷ)而非濁音(ぶ)。' },
            { text: '這是例外，沒有規則', isCorrect: false, reason: '錯誤，這是「分」的特殊規則。' },
            { text: '「分」不發生音變', isCorrect: false, reason: '錯誤，「分」確實發生音變，但是半濁音化。' },
            { text: '「なんぶん」才是正確的', isCorrect: false, reason: '錯誤，正確讀法是「なんぷん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「分」是特殊量詞，撥音「ん」後變半濁音「ぷ」而非濁音「ぶ」。', relatedRules: ['「分」の特殊性', '半濁音化規則'] },
        sourceItem: { value: '?', kanji: '何分', reading: 'なんぷん' }
    },

    // ===== 更多應用題 =====
    {
        id: 'qcounter_app_1', category: 'counters', subcategory: 'questionCounters', type: 'sentence', isTrap: false,
        stem: '写真は＿＿撮りましたか？', stem_zh: '拍了幾張照片？',
        options: [
            { text: 'いくつ', isCorrect: false, reason: '照片用「何枚」更準確。' },
            { text: 'なんまい', isCorrect: true, reason: '正確！照片是扁平物，用「何枚」。' },
            { text: 'なんばい', isCorrect: false, reason: '「枚」不濁音化，注意不是「杯」。' },
            { text: 'なんこ', isCorrect: false, reason: '照片不用「個」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '照片、信件等扁平物用「何枚」。', relatedRules: ['疑問詞「何枚」の使用'] },
        sourceItem: { value: '?', kanji: '何枚', reading: 'なんまい' }
    },
    {
        id: 'qcounter_app_2', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '電影次數', stem_zh: '電影次數',
        dialogue: { speakerA: 'この映画は＿＿見ましたか？', speakerB: '三回見ました。' },
        options: [
            { text: 'なんがい', isCorrect: false, reason: '「何階」是樓層。' },
            { text: 'なんかい', isCorrect: true, reason: '正確！「何回」詢問次數。' },
            { text: 'いくつ', isCorrect: false, reason: '次數用「何回」。' },
            { text: 'なんど', isCorrect: false, reason: '「何度」也可以，但本題是「何回」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問次數用「何回」(なんかい)。', relatedRules: ['疑問詞「何回」の使用'] },
        sourceItem: { value: '?', kanji: '何回', reading: 'なんかい' }
    },
    {
        id: 'qcounter_app_3', category: 'counters', subcategory: 'questionCounters', type: 'sentence', isTrap: false,
        stem: '電車は＿＿に乗りますか？', stem_zh: '搭幾點的電車？',
        options: [
            { text: 'いつ', isCorrect: false, reason: '問具體時間用「何時」。' },
            { text: 'なんじ', isCorrect: true, reason: '正確！「何時」詢問具體時刻。' },
            { text: 'なにとき', isCorrect: false, reason: '這不是正確說法。' },
            { text: 'なんぷん', isCorrect: false, reason: '「何分」是問分鐘。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問具體時刻用「何時」(なんじ)。', relatedRules: ['疑問詞「何時」の使用'] },
        sourceItem: { value: '?', kanji: '何時', reading: 'なんじ' }
    },
    {
        id: 'qcounter_app_4', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '旅行計畫', stem_zh: '旅行計畫',
        dialogue: { speakerA: '旅行は＿＿行きますか？', speakerB: '七月に行きます。' },
        options: [
            { text: 'いつ', isCorrect: false, reason: '問具體月份用「何月」。' },
            { text: 'なんがつ', isCorrect: true, reason: '正確！「何月」詢問月份。' },
            { text: 'なんかつ', isCorrect: false, reason: '「何月」需要濁音化。' },
            { text: 'なんにち', isCorrect: false, reason: '「何日」是問日期。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問月份用「何月」(なんがつ)。', relatedRules: ['疑問詞「何月」の使用'] },
        sourceItem: { value: '?', kanji: '何月', reading: 'なんがつ' }
    },
    {
        id: 'qcounter_app_5', category: 'counters', subcategory: 'questionCounters', type: 'sentence', isTrap: false,
        stem: 'スマホは＿＿持っていますか？', stem_zh: '有幾台手機？',
        options: [
            { text: 'なんたい', isCorrect: false, reason: '「何台」需要濁音化。' },
            { text: 'なんだい', isCorrect: true, reason: '正確！手機、電腦等機器用「何台」。' },
            { text: 'いくつ', isCorrect: false, reason: '機器用「何台」更準確。' },
            { text: 'なんこ', isCorrect: false, reason: '機器不用「個」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '機器、車輛用「何台」(なんだい)。', relatedRules: ['疑問詞「何台」の使用'] },
        sourceItem: { value: '?', kanji: '何台', reading: 'なんだい' }
    },
    {
        id: 'qcounter_app_6', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '買飲料', stem_zh: '買飲料',
        dialogue: { speakerA: 'ジュースは＿＿買いますか？', speakerB: '四本買います。' },
        options: [
            { text: 'なんほん', isCorrect: false, reason: '「何本」需要濁音化。' },
            { text: 'なんぼん', isCorrect: true, reason: '正確！瓶裝飲料用「何本」。' },
            { text: 'なんばい', isCorrect: false, reason: '「何杯」是杯裝飲料。' },
            { text: 'いくつ', isCorrect: false, reason: '瓶裝飲料用「何本」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '瓶裝飲料、細長物用「何本」(なんぼん)。', relatedRules: ['疑問詞「何本」の使用'] },
        sourceItem: { value: '?', kanji: '何本', reading: 'なんぼん' }
    },
    {
        id: 'qcounter_app_7', category: 'counters', subcategory: 'questionCounters', type: 'sentence', isTrap: false,
        stem: '日本語を勉強して＿＿ですか？', stem_zh: '學日文幾年了？',
        options: [
            { text: 'いつ', isCorrect: false, reason: '問年數用「何年」。' },
            { text: 'なんねん', isCorrect: true, reason: '正確！「何年」詢問年數。' },
            { text: 'なんとし', isCorrect: false, reason: '「年」在此讀「ねん」。' },
            { text: 'なにねん', isCorrect: false, reason: '「何」搭配量詞時讀「なん」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問年數用「何年」(なんねん)。', relatedRules: ['疑問詞「何年」の使用'] },
        sourceItem: { value: '?', kanji: '何年', reading: 'なんねん' }
    },
    {
        id: 'qcounter_app_8', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '問路', stem_zh: '問路',
        dialogue: { speakerA: '駅まで歩いて＿＿かかりますか？', speakerB: '十五分くらいです。' },
        options: [
            { text: 'なんふん', isCorrect: false, reason: '「何分」需要半濁音化。' },
            { text: 'なんぷん', isCorrect: true, reason: '正確！「何分」詢問所需時間。' },
            { text: 'いくら', isCorrect: false, reason: '「いくら」是問價格。' },
            { text: 'どのくらい', isCorrect: false, reason: '也可以，但本題是「何分」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問所需時間用「何分」(なんぷん)。', relatedRules: ['疑問詞「何分」の使用'] },
        sourceItem: { value: '?', kanji: '何分', reading: 'なんぷん' }
    },

    // ===== 綜合複習題 =====
    {
        id: 'qcounter_review_1', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: false,
        stem: '以下哪組配對都正確？', stem_zh: '以下哪組配對都正確？',
        options: [
            { text: '何本=なんぼん、何匹=なんびき、何杯=なんばい', isCorrect: true, reason: '正確！這三個都是h行濁音化。' },
            { text: '何本=なんほん、何匹=なんひき、何杯=なんはい', isCorrect: false, reason: '錯誤，h行量詞需要濁音化。' },
            { text: '何本=なんぽん、何匹=なんぴき、何杯=なんぱい', isCorrect: false, reason: '錯誤，應該用濁音不是半濁音。' },
            { text: '何本=なんぼん、何匹=なんびき、何杯=なんぱい', isCorrect: false, reason: '錯誤，「何杯」應該是「なんばい」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: 'h行量詞(本、匹、杯)在撥音後濁音化：ほ→ぼ、ひ→び、は→ば。', relatedRules: ['h行濁音化規則'] },
        sourceItem: { value: '?', kanji: '何〜', reading: 'h行濁音化' }
    },
    {
        id: 'qcounter_review_2', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: false,
        stem: '以下哪組配對都正確？', stem_zh: '以下哪組配對都正確？',
        options: [
            { text: '何階=なんがい、何月=なんがつ、何台=なんだい', isCorrect: true, reason: '正確！k行和t行濁音化。' },
            { text: '何階=なんかい、何月=なんかつ、何台=なんたい', isCorrect: false, reason: '錯誤，k行和t行需要濁音化。' },
            { text: '何階=なんがい、何回=なんがい、何月=なんがつ', isCorrect: false, reason: '錯誤，「何回」(次數)讀「なんかい」。' },
            { text: '何階=なんっかい、何月=なんっかつ、何台=なんっだい', isCorrect: false, reason: '錯誤，不需要促音。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: 'k行(階、月)和t行(台)量詞在撥音後濁音化：か→が、た→だ。', relatedRules: ['k行t行濁音化規則'] },
        sourceItem: { value: '?', kanji: '何〜', reading: 'k行t行濁音化' }
    },
    {
        id: 'qcounter_review_3', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: true,
        stem: '以下哪個說法是正確的？', stem_zh: '以下哪個說法是正確的？',
        options: [
            { text: '「何」搭配量詞時讀「なん」，但「いくつ」是例外，使用「いく」', isCorrect: true, reason: '正確！「つ」系統的疑問詞是「いくつ」，不是「なんつ」。' },
            { text: '所有疑問詞量詞都用「何」開頭', isCorrect: false, reason: '錯誤，「つ」系統用「いくつ」。' },
            { text: '「なんつ」是詢問「つ」數量的正確說法', isCorrect: false, reason: '錯誤，「なんつ」不存在。' },
            { text: '「何」搭配量詞時讀「なに」', isCorrect: false, reason: '錯誤，應讀「なん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「つ」系統使用「いくつ」，這是唯一不用「何」的量詞疑問詞。', relatedRules: ['「いくつ」の特殊性'] },
        sourceItem: { value: '?', kanji: 'いくつ', reading: '特殊疑問詞' }
    },
    {
        id: 'qcounter_review_4', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: true,
        stem: '以下哪個說法是正確的？', stem_zh: '以下哪個說法是正確的？',
        options: [
            { text: '「何分」用半濁音(ぷ)，「何杯」用濁音(ば)', isCorrect: true, reason: '正確！「分」特殊用半濁音，「杯」用濁音。' },
            { text: '「何分」和「何杯」都用濁音', isCorrect: false, reason: '錯誤，「何分」用半濁音(ぷ)。' },
            { text: '「何分」和「何杯」都用半濁音', isCorrect: false, reason: '錯誤，「何杯」用濁音(ば)。' },
            { text: '「何分」和「何杯」都不發生音變', isCorrect: false, reason: '錯誤，兩者都發生音變。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「分」是特殊量詞用半濁音(なんぷん)，「杯」等h行量詞用濁音(なんばい)。', relatedRules: ['「分」の特殊性', '濁音化vs半濁音化'] },
        sourceItem: { value: '?', kanji: '何分・何杯', reading: '音變比較' }
    },

    // ===== 更多情境應用題（續） =====
    {
        id: 'qcounter_more_1', category: 'counters', subcategory: 'questionCounters', type: 'sentence', isTrap: false,
        stem: 'バスは＿＿に来ますか？', stem_zh: '公車幾點來？',
        options: [
            { text: 'いつ', isCorrect: false, reason: '問具體時間用「何時」。' },
            { text: 'なんじ', isCorrect: true, reason: '正確！「何時」詢問具體時刻。' },
            { text: 'なにとき', isCorrect: false, reason: '這不是正確說法。' },
            { text: 'どこ', isCorrect: false, reason: '「どこ」是問地點。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問具體時刻用「何時」(なんじ)。', relatedRules: ['時間の疑問詞'] },
        sourceItem: { value: '?', kanji: '何時', reading: 'なんじ' }
    },
    {
        id: 'qcounter_more_2', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '水族館', stem_zh: '水族館',
        dialogue: { speakerA: '魚は＿＿いますか？', speakerB: '百匹以上います。' },
        options: [
            { text: 'なんひき', isCorrect: false, reason: '「何匹」需要濁音化。' },
            { text: 'なんびき', isCorrect: true, reason: '正確！魚用「何匹」。' },
            { text: 'いくつ', isCorrect: false, reason: '魚用「何匹」更準確。' },
            { text: 'なんぴき', isCorrect: false, reason: '「何匹」使用濁音「び」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '魚、蟲等小動物用「何匹」(なんびき)。', relatedRules: ['疑問詞「何匹」の使用'] },
        sourceItem: { value: '?', kanji: '何匹', reading: 'なんびき' }
    },
    {
        id: 'qcounter_more_3', category: 'counters', subcategory: 'questionCounters', type: 'sentence', isTrap: false,
        stem: 'お箸は＿＿必要ですか？', stem_zh: '需要幾雙筷子？',
        options: [
            { text: 'なんほん', isCorrect: false, reason: '「何本」需要濁音化。' },
            { text: 'なんぼん', isCorrect: true, reason: '正確！筷子是細長物，用「何本」。' },
            { text: 'いくつ', isCorrect: false, reason: '筷子用「何本」。' },
            { text: 'なんぜん', isCorrect: false, reason: '「膳」是正式說法，「本」更常用。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '筷子、鉛筆等細長物用「何本」(なんぼん)。', relatedRules: ['疑問詞「何本」の使用'] },
        sourceItem: { value: '?', kanji: '何本', reading: 'なんぼん' }
    },
    {
        id: 'qcounter_more_4', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '住院', stem_zh: '住院',
        dialogue: { speakerA: '入院は＿＿くらいですか？', speakerB: '一週間くらいです。' },
        options: [
            { text: 'なにしゅうかん', isCorrect: false, reason: '「何」搭配量詞時讀「なん」。' },
            { text: 'なんしゅうかん', isCorrect: true, reason: '正確！「何週間」詢問週數。' },
            { text: 'いくつ', isCorrect: false, reason: '週數用「何週間」。' },
            { text: 'どのくらい', isCorrect: false, reason: '也可以，但本題是「何週間」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問週數用「何週間」(なんしゅうかん)。', relatedRules: ['疑問詞「何週間」の使用'] },
        sourceItem: { value: '?', kanji: '何週間', reading: 'なんしゅうかん' }
    },
    {
        id: 'qcounter_more_5', category: 'counters', subcategory: 'questionCounters', type: 'sentence', isTrap: false,
        stem: 'ボールペンは＿＿持っていますか？', stem_zh: '有幾支原子筆？',
        options: [
            { text: 'なんほん', isCorrect: false, reason: '「何本」需要濁音化。' },
            { text: 'なんぼん', isCorrect: true, reason: '正確！原子筆是細長物，用「何本」。' },
            { text: 'いくつ', isCorrect: false, reason: '筆用「何本」更準確。' },
            { text: 'なんこ', isCorrect: false, reason: '筆不用「個」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '筆類細長物用「何本」(なんぼん)。', relatedRules: ['疑問詞「何本」の使用'] },
        sourceItem: { value: '?', kanji: '何本', reading: 'なんぼん' }
    },
    {
        id: 'qcounter_more_6', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '搬家', stem_zh: '搬家',
        dialogue: { speakerA: '段ボール箱は＿＿使いましたか？', speakerB: '二十個使いました。' },
        options: [
            { text: 'なんご', isCorrect: false, reason: '「個」不濁音化。' },
            { text: 'なんこ', isCorrect: true, reason: '正確！「何個」詢問物品數量。' },
            { text: 'いくつ', isCorrect: false, reason: '若回答用「個」，問題用「何個」更自然。' },
            { text: 'なにこ', isCorrect: false, reason: '「何」搭配量詞時讀「なん」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問物品數量用「何個」(なんこ)。', relatedRules: ['疑問詞「何個」の使用'] },
        sourceItem: { value: '?', kanji: '何個', reading: 'なんこ' }
    },
    {
        id: 'qcounter_more_7', category: 'counters', subcategory: 'questionCounters', type: 'sentence', isTrap: false,
        stem: '授業は＿＿に始まりますか？', stem_zh: '上課幾點開始？',
        options: [
            { text: 'いつ', isCorrect: false, reason: '問具體時間用「何時」。' },
            { text: 'なんじ', isCorrect: true, reason: '正確！「何時」詢問具體時刻。' },
            { text: 'なにとき', isCorrect: false, reason: '這不是正確說法。' },
            { text: 'なんぷん', isCorrect: false, reason: '「何分」是問分鐘。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問具體時刻用「何時」(なんじ)。', relatedRules: ['時間の疑問詞'] },
        sourceItem: { value: '?', kanji: '何時', reading: 'なんじ' }
    },
    {
        id: 'qcounter_more_8', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '超市', stem_zh: '超市',
        dialogue: { speakerA: '卵は＿＿買いましたか？', speakerB: '十個買いました。' },
        options: [
            { text: 'なんご', isCorrect: false, reason: '「個」不濁音化。' },
            { text: 'なんこ', isCorrect: true, reason: '正確！雞蛋用「何個」。' },
            { text: 'いくつ', isCorrect: false, reason: '若回答用「個」，問題用「何個」。' },
            { text: 'なんまい', isCorrect: false, reason: '雞蛋不用「枚」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '雞蛋等圓形物用「何個」(なんこ)。', relatedRules: ['疑問詞「何個」の使用'] },
        sourceItem: { value: '?', kanji: '何個', reading: 'なんこ' }
    },
    {
        id: 'qcounter_more_9', category: 'counters', subcategory: 'questionCounters', type: 'sentence', isTrap: false,
        stem: '薬は＿＿飲みますか？', stem_zh: '藥吃幾顆？',
        options: [
            { text: 'なんご', isCorrect: false, reason: '「個」不濁音化。' },
            { text: 'なんこ', isCorrect: true, reason: '正確！藥丸用「何個」或「何錠」。' },
            { text: 'いくつ', isCorrect: false, reason: '藥物用「何個」更準確。' },
            { text: 'なんほん', isCorrect: false, reason: '藥丸不用「本」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '藥丸用「何個」(なんこ)或「何錠」。', relatedRules: ['疑問詞「何個」の使用'] },
        sourceItem: { value: '?', kanji: '何個', reading: 'なんこ' }
    },
    {
        id: 'qcounter_more_10', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '圖書館', stem_zh: '圖書館',
        dialogue: { speakerA: '本は＿＿借りられますか？', speakerB: '五冊まで借りられます。' },
        options: [
            { text: 'なんざつ', isCorrect: false, reason: '「冊」不濁音化。' },
            { text: 'なんさつ', isCorrect: true, reason: '正確！書籍用「何冊」。' },
            { text: 'いくつ', isCorrect: false, reason: '書籍用「何冊」更準確。' },
            { text: 'なんこ', isCorrect: false, reason: '書籍不用「個」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '書籍用「何冊」(なんさつ)。', relatedRules: ['疑問詞「何冊」の使用'] },
        sourceItem: { value: '?', kanji: '何冊', reading: 'なんさつ' }
    },
    {
        id: 'qcounter_more_11', category: 'counters', subcategory: 'questionCounters', type: 'sentence', isTrap: false,
        stem: '手紙は＿＿書きましたか？', stem_zh: '寫了幾封信？',
        options: [
            { text: 'なんほん', isCorrect: false, reason: '信不用「本」。' },
            { text: 'なんまい', isCorrect: true, reason: '正確！信件是扁平物，用「何枚」或「何通」。' },
            { text: 'なんばい', isCorrect: false, reason: '「枚」不濁音化，注意不是「杯」。' },
            { text: 'なんこ', isCorrect: false, reason: '信件不用「個」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '信件用「何枚」(なんまい)或「何通」。', relatedRules: ['疑問詞「何枚」の使用'] },
        sourceItem: { value: '?', kanji: '何枚', reading: 'なんまい' }
    },
    {
        id: 'qcounter_more_12', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '生日', stem_zh: '生日',
        dialogue: { speakerA: 'お誕生日は＿＿ですか？', speakerB: '三月十五日です。' },
        options: [
            { text: 'いつ', isCorrect: false, reason: '問具體日期用「何月何日」。' },
            { text: 'なんがつなんにち', isCorrect: true, reason: '正確！「何月何日」詢問具體日期。' },
            { text: 'なんかつなんにち', isCorrect: false, reason: '「何月」需要濁音化。' },
            { text: 'なにがつなにひ', isCorrect: false, reason: '「何」搭配量詞時讀「なん」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問具體日期用「何月何日」(なんがつなんにち)。', relatedRules: ['日期の疑問詞'] },
        sourceItem: { value: '?', kanji: '何月何日', reading: 'なんがつなんにち' }
    },
    {
        id: 'qcounter_more_13', category: 'counters', subcategory: 'questionCounters', type: 'sentence', isTrap: false,
        stem: 'お茶は＿＿飲みますか？', stem_zh: '喝幾杯茶？',
        options: [
            { text: 'なんはい', isCorrect: false, reason: '「何杯」需要濁音化。' },
            { text: 'なんばい', isCorrect: true, reason: '正確！杯裝飲料用「何杯」。' },
            { text: 'いくつ', isCorrect: false, reason: '杯裝飲料用「何杯」。' },
            { text: 'なんぼん', isCorrect: false, reason: '「何本」是瓶裝飲料。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '杯裝飲料用「何杯」(なんばい)。', relatedRules: ['疑問詞「何杯」の使用'] },
        sourceItem: { value: '?', kanji: '何杯', reading: 'なんばい' }
    },
    {
        id: 'qcounter_more_14', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '考試', stem_zh: '考試',
        dialogue: { speakerA: '試験は＿＿受けましたか？', speakerB: '三回受けました。' },
        options: [
            { text: 'なんがい', isCorrect: false, reason: '「何階」是樓層。' },
            { text: 'なんかい', isCorrect: true, reason: '正確！「何回」詢問次數。' },
            { text: 'いくつ', isCorrect: false, reason: '次數用「何回」。' },
            { text: 'なにかい', isCorrect: false, reason: '「何」搭配量詞時讀「なん」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問次數用「何回」(なんかい)。', relatedRules: ['疑問詞「何回」の使用'] },
        sourceItem: { value: '?', kanji: '何回', reading: 'なんかい' }
    },
    {
        id: 'qcounter_more_15', category: 'counters', subcategory: 'questionCounters', type: 'sentence', isTrap: false,
        stem: '旅行の写真は＿＿撮りましたか？', stem_zh: '旅行照片拍了幾張？',
        options: [
            { text: 'なんこ', isCorrect: false, reason: '照片不用「個」。' },
            { text: 'なんまい', isCorrect: true, reason: '正確！照片是扁平物，用「何枚」。' },
            { text: 'なんばい', isCorrect: false, reason: '「枚」不濁音化。' },
            { text: 'いくつ', isCorrect: false, reason: '照片用「何枚」更準確。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '照片用「何枚」(なんまい)。', relatedRules: ['疑問詞「何枚」の使用'] },
        sourceItem: { value: '?', kanji: '何枚', reading: 'なんまい' }
    },
    {
        id: 'qcounter_more_16', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '蛋糕店', stem_zh: '蛋糕店',
        dialogue: { speakerA: 'ケーキは＿＿注文しますか？', speakerB: '三個注文します。' },
        options: [
            { text: 'なんご', isCorrect: false, reason: '「個」不濁音化。' },
            { text: 'なんこ', isCorrect: true, reason: '正確！蛋糕用「何個」。' },
            { text: 'いくつ', isCorrect: false, reason: '若回答用「個」，問題用「何個」。' },
            { text: 'なんまい', isCorrect: false, reason: '蛋糕不用「枚」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '蛋糕等物品用「何個」(なんこ)。', relatedRules: ['疑問詞「何個」の使用'] },
        sourceItem: { value: '?', kanji: '何個', reading: 'なんこ' }
    },
    {
        id: 'qcounter_more_17', category: 'counters', subcategory: 'questionCounters', type: 'sentence', isTrap: false,
        stem: '駐車場は＿＿ですか？', stem_zh: '停車場在幾樓？',
        options: [
            { text: 'なんかい', isCorrect: false, reason: '「何階」需要濁音化。' },
            { text: 'なんがい', isCorrect: true, reason: '正確！樓層用「何階」。' },
            { text: 'どこ', isCorrect: false, reason: '問具體樓層用「何階」。' },
            { text: 'なんかいめ', isCorrect: false, reason: '「何階」已足夠。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問樓層用「何階」(なんがい)。', relatedRules: ['疑問詞「何階」の使用'] },
        sourceItem: { value: '?', kanji: '何階', reading: 'なんがい' }
    },
    {
        id: 'qcounter_more_18', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '家庭聚會', stem_zh: '家庭聚會',
        dialogue: { speakerA: '家族は＿＿ですか？', speakerB: '五人です。' },
        options: [
            { text: 'なんびん', isCorrect: false, reason: '「人」不濁音化。' },
            { text: 'なんにん', isCorrect: true, reason: '正確！「何人」詢問人數。' },
            { text: 'いくつ', isCorrect: false, reason: '人數用「何人」。' },
            { text: 'なにじん', isCorrect: false, reason: '「じん」是國籍。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問人數用「何人」(なんにん)。', relatedRules: ['疑問詞「何人」の使用'] },
        sourceItem: { value: '?', kanji: '何人', reading: 'なんにん' }
    },

    // ===== 更多陷阱題 =====
    {
        id: 'qcounter_trap_5', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: true,
        stem: '以下哪個讀法是錯誤的？', stem_zh: '以下哪個讀法是錯誤的？',
        options: [
            { text: '何杯(なんはい)', isCorrect: true, reason: '這是錯誤的！應該是「なんばい」，需要濁音化。' },
            { text: '何杯(なんばい)', isCorrect: false, reason: '這是正確的。' },
            { text: '何人(なんにん)', isCorrect: false, reason: '這是正確的。' },
            { text: '何枚(なんまい)', isCorrect: false, reason: '這是正確的。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「何杯」應讀「なんばい」，h行量詞在撥音後濁音化。', trapExplanation: '這是陷阱題，h行濁音化。', relatedRules: ['濁音化規則', '錯誤識別'] },
        sourceItem: { value: '?', kanji: '何杯', reading: 'なんばい' }
    },
    {
        id: 'qcounter_trap_6', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: true,
        stem: '以下哪個讀法是錯誤的？', stem_zh: '以下哪個讀法是錯誤的？',
        options: [
            { text: '何台(なんたい)', isCorrect: true, reason: '這是錯誤的！應該是「なんだい」，需要濁音化。' },
            { text: '何台(なんだい)', isCorrect: false, reason: '這是正確的。' },
            { text: '何日(なんにち)', isCorrect: false, reason: '這是正確的。' },
            { text: '何年(なんねん)', isCorrect: false, reason: '這是正確的。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「何台」應讀「なんだい」，t行量詞在撥音後濁音化。', trapExplanation: '這是陷阱題，t行濁音化。', relatedRules: ['濁音化規則', '錯誤識別'] },
        sourceItem: { value: '?', kanji: '何台', reading: 'なんだい' }
    },
    {
        id: 'qcounter_trap_7', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: true,
        stem: '以下哪個讀法是正確的？', stem_zh: '以下哪個讀法是正確的？',
        options: [
            { text: '何匹(なんびき)', isCorrect: true, reason: '正確！h行量詞濁音化。' },
            { text: '何匹(なんひき)', isCorrect: false, reason: '錯誤，需要濁音化。' },
            { text: '何匹(なんぴき)', isCorrect: false, reason: '錯誤，應該用濁音不是半濁音。' },
            { text: '何匹(なにひき)', isCorrect: false, reason: '錯誤，「何」讀「なん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「何匹」讀「なんびき」，h行量詞在撥音後濁音化。', relatedRules: ['濁音化規則'] },
        sourceItem: { value: '?', kanji: '何匹', reading: 'なんびき' }
    },
    {
        id: 'qcounter_trap_8', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: true,
        stem: '以下哪個讀法是正確的？', stem_zh: '以下哪個讀法是正確的？',
        options: [
            { text: '何分(なんぷん)', isCorrect: true, reason: '正確！「分」特殊用半濁音。' },
            { text: '何分(なんふん)', isCorrect: false, reason: '錯誤，需要半濁音化。' },
            { text: '何分(なんぶん)', isCorrect: false, reason: '錯誤，「分」用半濁音不是濁音。' },
            { text: '何分(なにふん)', isCorrect: false, reason: '錯誤，「何」讀「なん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「何分」讀「なんぷん」，「分」是特殊的半濁音化。', relatedRules: ['半濁音化規則', '「分」の特殊性'] },
        sourceItem: { value: '?', kanji: '何分', reading: 'なんぷん' }
    },
    {
        id: 'qcounter_trap_9', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: true,
        stem: '「何階」和「何回」的讀法有什麼不同？', stem_zh: '「何階」和「何回」的讀法有什麼不同？',
        options: [
            { text: '何階=なんがい(濁音)、何回=なんかい(無濁音)', isCorrect: true, reason: '正確！「階」濁音化，「回」不濁音化。' },
            { text: '兩個都讀なんかい', isCorrect: false, reason: '錯誤，「何階」讀「なんがい」。' },
            { text: '兩個都讀なんがい', isCorrect: false, reason: '錯誤，「何回」讀「なんかい」。' },
            { text: '何階=なんかい、何回=なんがい', isCorrect: false, reason: '錯誤，剛好相反。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「何階」(樓層)讀「なんがい」，「何回」(次數)讀「なんかい」。', trapExplanation: '這是易混淆題：何階≠何回。', relatedRules: ['「何階」vs「何回」'] },
        sourceItem: { value: '?', kanji: '何階・何回', reading: '區別' }
    },

    // ===== 更多比較題 =====
    {
        id: 'qcounter_compare_4', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: true,
        stem: '以下哪組量詞在「何〜」時發生相同類型的音變？', stem_zh: '以下哪組量詞在「何〜」時發生相同類型的音變？',
        options: [
            { text: '本、匹、杯（都是h→b濁音化）', isCorrect: true, reason: '正確！「本」「匹」「杯」都是h行，在撥音後h→b濁音化。' },
            { text: '階、分、台', isCorrect: false, reason: '錯誤，「分」是半濁音化，不同於其他。' },
            { text: '人、枚、冊', isCorrect: false, reason: '錯誤，這些都不發生音變。' },
            { text: '月、回、時', isCorrect: false, reason: '錯誤，「月」濁音化，「回」「時」不音變。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「本」「匹」「杯」都是h行量詞，在撥音後發生相同的濁音化(h→b)。', relatedRules: ['h行濁音化規則'] },
        sourceItem: { value: '?', kanji: '何〜', reading: '同類音變' }
    },
    {
        id: 'qcounter_compare_5', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: true,
        stem: '以下哪組量詞在「何〜」時都不發生音變？', stem_zh: '以下哪組量詞在「何〜」時都不發生音變？',
        options: [
            { text: '人、枚、冊、個、回、時', isCorrect: true, reason: '正確！這些量詞在「何〜」時都保持原音。' },
            { text: '本、匹、杯', isCorrect: false, reason: '錯誤，這些都發生濁音化。' },
            { text: '階、台、月', isCorrect: false, reason: '錯誤，這些都發生濁音化。' },
            { text: '分、杯、匹', isCorrect: false, reason: '錯誤，這些都發生音變。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「人、枚、冊、個、回、時」等量詞在撥音後保持原音，不發生音變。', relatedRules: ['無音變量詞'] },
        sourceItem: { value: '?', kanji: '何〜', reading: '無音變' }
    },
    {
        id: 'qcounter_compare_6', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: true,
        stem: '以下哪個說法是正確的？', stem_zh: '以下哪個說法是正確的？',
        options: [
            { text: '撥音「ん」後h行變b、k行變g、t行變d', isCorrect: true, reason: '正確！這是基本的濁音化規則。' },
            { text: '所有量詞在「何〜」時都濁音化', isCorrect: false, reason: '錯誤，很多量詞不濁音化。' },
            { text: '撥音「ん」後所有行都變濁音', isCorrect: false, reason: '錯誤，只有特定行會濁音化。' },
            { text: '「分」的f變b是濁音化', isCorrect: false, reason: '錯誤，「分」是半濁音化(ふ→ぷ)。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '濁音化規則：h行(h→b)、k行(k→g)、t行(t→d)在撥音後濁音化。', relatedRules: ['濁音化規則總結'] },
        sourceItem: { value: '?', kanji: '何〜', reading: '濁音化規則' }
    },

    // ===== 綜合應用題 =====
    {
        id: 'qcounter_final_1', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: false,
        stem: '以下配對全部正確的是？', stem_zh: '以下配對全部正確的是？',
        options: [
            { text: '何時=なんじ、何分=なんぷん、何日=なんにち、何年=なんねん', isCorrect: true, reason: '正確！這些都是時間相關疑問詞的正確讀法。' },
            { text: '何時=なにじ、何分=なんふん、何日=なにひ、何年=なんとし', isCorrect: false, reason: '錯誤，「何」讀「なん」，「分」要半濁音化。' },
            { text: '何時=なんじ、何分=なんぶん、何日=なんにち、何年=なんねん', isCorrect: false, reason: '錯誤，「分」用半濁音(ぷ)不是濁音(ぶ)。' },
            { text: '何時=いつ、何分=なんぷん、何日=いつか、何年=なんねん', isCorrect: false, reason: '錯誤，「何時」讀「なんじ」，「何日」讀「なんにち」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '時間疑問詞：何時(なんじ)、何分(なんぷん)、何日(なんにち)、何年(なんねん)。', relatedRules: ['時間の疑問詞總結'] },
        sourceItem: { value: '?', kanji: '時間疑問詞', reading: '總結' }
    },
    {
        id: 'qcounter_final_2', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: false,
        stem: '以下配對全部正確的是？', stem_zh: '以下配對全部正確的是？',
        options: [
            { text: '何人=なんにん、何枚=なんまい、何冊=なんさつ、何個=なんこ', isCorrect: true, reason: '正確！這些都不發生音變的正確讀法。' },
            { text: '何人=なんびん、何枚=なんばい、何冊=なんざつ、何個=なんご', isCorrect: false, reason: '錯誤，這些都不濁音化。' },
            { text: '何人=なににん、何枚=なにまい、何冊=なにさつ、何個=なにこ', isCorrect: false, reason: '錯誤，「何」讀「なん」。' },
            { text: '何人=なんじん、何枚=なんまい、何冊=なんさつ、何個=なんこ', isCorrect: false, reason: '錯誤，「人」讀「にん」不是「じん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '無音變量詞：何人(なんにん)、何枚(なんまい)、何冊(なんさつ)、何個(なんこ)。', relatedRules: ['無音變量詞總結'] },
        sourceItem: { value: '?', kanji: '無音變量詞', reading: '總結' }
    },
    {
        id: 'qcounter_final_3', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: true,
        stem: '「何」搭配量詞時的讀法規則是？', stem_zh: '「何」搭配量詞時的讀法規則是？',
        options: [
            { text: '通常讀「なん」，只有「つ」系統用「いくつ」', isCorrect: true, reason: '正確！「何」搭配量詞時讀「なん」，但「つ」用「いくつ」。' },
            { text: '通常讀「なに」', isCorrect: false, reason: '錯誤，搭配量詞時讀「なん」。' },
            { text: '所有情況都讀「なん」', isCorrect: false, reason: '錯誤，「つ」系統用「いくつ」。' },
            { text: '根據量詞不同，有時讀「なん」有時讀「なに」', isCorrect: false, reason: '錯誤，搭配量詞時固定讀「なん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「何」搭配量詞時讀「なん」，唯一例外是「つ」系統使用「いくつ」。', relatedRules: ['「何」の讀法', '「いくつ」の特殊性'] },
        sourceItem: { value: '?', kanji: '何', reading: '讀法規則' }
    },
    {
        id: 'qcounter_final_4', category: 'counters', subcategory: 'questionCounters', type: 'pronunciation', isTrap: false,
        stem: '以下配對全部正確的是？', stem_zh: '以下配對全部正確的是？',
        options: [
            { text: '何本=なんぼん、何匹=なんびき、何杯=なんばい、何階=なんがい、何台=なんだい', isCorrect: true, reason: '正確！這些都是濁音化的正確讀法。' },
            { text: '何本=なんほん、何匹=なんひき、何杯=なんはい、何階=なんかい、何台=なんたい', isCorrect: false, reason: '錯誤，這些都需要濁音化。' },
            { text: '何本=なんぽん、何匹=なんぴき、何杯=なんぱい、何階=なんがい、何台=なんだい', isCorrect: false, reason: '錯誤，「本」「匹」「杯」用濁音不是半濁音。' },
            { text: '何本=なんぼん、何匹=なんびき、何杯=なんばい、何階=なんかい、何台=なんたい', isCorrect: false, reason: '錯誤，「階」「台」也需要濁音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '濁音化量詞：何本(なんぼん)、何匹(なんびき)、何杯(なんばい)、何階(なんがい)、何台(なんだい)。', relatedRules: ['濁音化規則總結'] },
        sourceItem: { value: '?', kanji: '濁音化量詞', reading: '總結' }
    },

    // ===== 補充題目 =====
    {
        id: 'qcounter_add_1', category: 'counters', subcategory: 'questionCounters', type: 'sentence', isTrap: false,
        stem: 'ビールは＿＿飲みますか？', stem_zh: '喝幾杯啤酒？',
        options: [
            { text: 'なんはい', isCorrect: false, reason: '「何杯」需要濁音化。' },
            { text: 'なんばい', isCorrect: true, reason: '正確！杯裝飲料用「何杯」。' },
            { text: 'いくつ', isCorrect: false, reason: '杯裝飲料用「何杯」。' },
            { text: 'なんぼん', isCorrect: false, reason: '「何本」是瓶裝飲料。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '杯裝飲料用「何杯」(なんばい)。', relatedRules: ['疑問詞「何杯」の使用'] },
        sourceItem: { value: '?', kanji: '何杯', reading: 'なんばい' }
    },
    {
        id: 'qcounter_add_2', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '約會', stem_zh: '約會',
        dialogue: { speakerA: 'デートは＿＿ですか？', speakerB: '金曜日です。' },
        options: [
            { text: 'いつ', isCorrect: false, reason: '問具體星期用「何曜日」。' },
            { text: 'なんようび', isCorrect: true, reason: '正確！「何曜日」詢問星期幾。' },
            { text: 'なにようび', isCorrect: false, reason: '「何」搭配量詞時讀「なん」。' },
            { text: 'なんにち', isCorrect: false, reason: '「何日」是問日期。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問星期幾用「何曜日」(なんようび)。', relatedRules: ['疑問詞「何曜日」の使用'] },
        sourceItem: { value: '?', kanji: '何曜日', reading: 'なんようび' }
    },
    {
        id: 'qcounter_add_3', category: 'counters', subcategory: 'questionCounters', type: 'sentence', isTrap: false,
        stem: '花は＿＿買いましたか？', stem_zh: '買了幾朵花？',
        options: [
            { text: 'なんほん', isCorrect: false, reason: '「何本」需要濁音化。' },
            { text: 'なんぼん', isCorrect: true, reason: '正確！花是細長物，用「何本」。' },
            { text: 'いくつ', isCorrect: false, reason: '花用「何本」更準確。' },
            { text: 'なんこ', isCorrect: false, reason: '花不用「個」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '花、樹木等細長物用「何本」(なんぼん)。', relatedRules: ['疑問詞「何本」の使用'] },
        sourceItem: { value: '?', kanji: '何本', reading: 'なんぼん' }
    },
    {
        id: 'qcounter_add_4', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '派對', stem_zh: '派對',
        dialogue: { speakerA: 'パーティーには＿＿来ますか？', speakerB: '約二十人来ます。' },
        options: [
            { text: 'なんびん', isCorrect: false, reason: '「人」不濁音化。' },
            { text: 'なんにん', isCorrect: true, reason: '正確！「何人」詢問人數。' },
            { text: 'いくつ', isCorrect: false, reason: '人數用「何人」。' },
            { text: 'だれ', isCorrect: false, reason: '「誰」是問誰，不是問人數。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問人數用「何人」(なんにん)。', relatedRules: ['疑問詞「何人」の使用'] },
        sourceItem: { value: '?', kanji: '何人', reading: 'なんにん' }
    },
    {
        id: 'qcounter_add_5', category: 'counters', subcategory: 'questionCounters', type: 'sentence', isTrap: false,
        stem: 'プリントは＿＿配りましたか？', stem_zh: '發了幾張講義？',
        options: [
            { text: 'なんこ', isCorrect: false, reason: '講義不用「個」。' },
            { text: 'なんまい', isCorrect: true, reason: '正確！講義是扁平物，用「何枚」。' },
            { text: 'なんばい', isCorrect: false, reason: '「枚」不濁音化，注意不是「杯」。' },
            { text: 'いくつ', isCorrect: false, reason: '講義用「何枚」更準確。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '講義、紙張等扁平物用「何枚」(なんまい)。', relatedRules: ['疑問詞「何枚」の使用'] },
        sourceItem: { value: '?', kanji: '何枚', reading: 'なんまい' }
    },
    {
        id: 'qcounter_add_6', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '公寓', stem_zh: '公寓',
        dialogue: { speakerA: 'マンションは＿＿建てですか？', speakerB: '十五階建てです。' },
        options: [
            { text: 'なんかい', isCorrect: false, reason: '「何階」需要濁音化。' },
            { text: 'なんがい', isCorrect: true, reason: '正確！「何階建て」詢問樓層數。' },
            { text: 'いくつ', isCorrect: false, reason: '樓層用「何階」。' },
            { text: 'どのくらい', isCorrect: false, reason: '問具體樓層用「何階」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問建築樓層用「何階」(なんがい)。', relatedRules: ['疑問詞「何階」の使用'] },
        sourceItem: { value: '?', kanji: '何階', reading: 'なんがい' }
    },
    {
        id: 'qcounter_add_7', category: 'counters', subcategory: 'questionCounters', type: 'sentence', isTrap: false,
        stem: 'テストは＿＿ありますか？', stem_zh: '考試有幾次？',
        options: [
            { text: 'なんがい', isCorrect: false, reason: '「何階」是樓層。' },
            { text: 'なんかい', isCorrect: true, reason: '正確！「何回」詢問次數。' },
            { text: 'いくつ', isCorrect: false, reason: '次數用「何回」。' },
            { text: 'なんど', isCorrect: false, reason: '「何度」也可以，但本題是「何回」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '詢問次數用「何回」(なんかい)。', relatedRules: ['疑問詞「何回」の使用'] },
        sourceItem: { value: '?', kanji: '何回', reading: 'なんかい' }
    },
    {
        id: 'qcounter_add_8', category: 'counters', subcategory: 'questionCounters', type: 'dialogue', isTrap: false,
        stem: '購物', stem_zh: '購物',
        dialogue: { speakerA: 'リンゴは＿＿ほしいですか？', speakerB: '五つほしいです。' },
        options: [
            { text: 'なんつ', isCorrect: false, reason: '「なんつ」不存在，應使用「いくつ」。' },
            { text: 'いくつ', isCorrect: true, reason: '正確！「いくつ」是「つ」系統的疑問詞。' },
            { text: 'なんこ', isCorrect: false, reason: '若回答用「つ」，問題用「いくつ」。' },
            { text: 'なにつ', isCorrect: false, reason: '這不是正確的疑問詞。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「つ」系統的疑問詞是「いくつ」，不是「なんつ」。', relatedRules: ['「いくつ」の使用'] },
        sourceItem: { value: '?', kanji: '幾つ', reading: 'いくつ' }
    }
];
