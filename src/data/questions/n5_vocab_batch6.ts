import { StaticQuestion } from './types';

export const n5VocabBatch6: StaticQuestion[] = [
    // 26. 朝 (あさ)
    {
        id: 'n5_vocab_kanji_yomi_asa_1',
        prob: '毎<u>朝</u>、コーヒーを飲{の}みます。',
        prob_zh: '每天 *早上* 喝咖啡。',
        options: [
            { text: 'まいあさ', reason: '正確！雖是複合詞但「朝」讀作「あさ」。' },
            { text: 'まいばん', reason: '錯誤：每晚。' },
            { text: 'まいにち', reason: '錯誤：每天。' },
            { text: 'まいしゅう', reason: '錯誤：每週。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「朝{あさ}」。這裡考「毎朝{まいあさ}」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_asa_2',
        prob: '<u>朝</u>、早{はや}く起{お}きます。',
        prob_zh: '*早上* 早起。',
        options: [
            { text: 'よる', reason: '錯誤：晚上。' },
            { text: 'ひる', reason: '錯誤：中午。' },
            { text: 'あさ', reason: '正確！' },
            { text: 'ばん', reason: '錯誤：晚上。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「朝{あさ}」。'
    },
    {
        id: 'n5_vocab_hyouki_asa_1',
        prob: '<u>あさ</u>ご飯{はん}を食{た}べましたか。',
        prob_zh: '吃過 *早餐* （早飯）了嗎？',
        options: [
            { text: '朝', reason: '正確！' },
            { text: '昼', reason: '錯誤。' },
            { text: '夜', reason: '錯誤。' },
            { text: '夕', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「あさ」漢字為「朝」。'
    },
    {
        id: 'n5_vocab_hyouki_asa_2',
        prob: '日曜日{にちようび}の<u>あさ</u>。',
        prob_zh: '星期日的 *早上*。',
        options: [
            { text: '朝', reason: '正確！' },
            { text: '乾', reason: '錯誤。' },
            { text: '幹', reason: '錯誤。' },
            { text: '早', reason: '錯誤：「早{はや}い」是形容詞。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】早上寫作「朝」。'
    },
    {
        id: 'n5_vocab_bunmyaku_asa_1',
        prob: '「おはようございます」は______のあいさつです。',
        prob_zh: '「早安」是 *早上* 的問候語。',
        options: [
            { text: '朝{あさ}', reason: '正確！' },
            { text: '昼{ひる}', reason: '錯誤：中午是こんにちは。' },
            { text: '夜{よる}', reason: '錯誤：晚上是こんばんは。' },
            { text: '寝{ね}る前{まえ}', reason: '錯誤：睡前是おやすみなさい。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】文化常識\n【解析】おはようございます是早上的寒暄。'
    },
    {
        id: 'n5_vocab_bunmyaku_asa_2',
        prob: '今{いま}は午前{ごぜん}８時{じ}です。______です。',
        prob_zh: '現在是上午8點。是 *早上*。',
        options: [
            { text: '朝{あさ}', reason: '正確！' },
            { text: '昼{ひる}', reason: '錯誤。' },
            { text: '夕方{ゆうがた}', reason: '錯誤：傍晚。' },
            { text: '夜{よる}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】時間詞\n【解析】上午8點屬於早上範圍。'
    },
    {
        id: 'n5_vocab_ruigigo_asa_1',
        prob: '毎日{まいにち}<u>朝</u>六時{ろくじ}に起{お}きます。',
        prob_zh: '每天 *早上* 六點起床。（選出意思最接近的選項）',
        options: [
            { text: '午前{ごぜん}の早{はや}い時間{じかん}', reason: '正確！「朝」指的是上午較早的時段。' },
            { text: '午後{ごご}', reason: '錯誤：這是下午。' },
            { text: '夜{よる}', reason: '錯誤：這是晚上，與早上相反。' },
            { text: '昼{ひる}', reason: '錯誤：這是中午。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】近義詞/定義理解\n【解析】「朝{あさ}」= 午前の早い時間（上午較早的時段），通常指日出到上午中段。'
    },
    {
        id: 'n5_vocab_ruigigo_asa_2',
        prob: '<u>朝</u>です。',
        prob_zh: '是 *早上*。（選出意思最接近的選項）',
        options: [
            { text: '午前{ごぜん}', reason: '正確！雖然不完全等同，但在N5層級，朝多指午前時段。' },
            { text: '午後{ごご}', reason: '錯誤。' },
            { text: '一昨日{おととい}', reason: '錯誤。' },
            { text: '明日{あした}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】各詞關聯\n【解析】朝大致對應午前。'
    },

    // 27. 朝ご飯 (あさごはん)
    {
        id: 'n5_vocab_kanji_yomi_asagohan_1',
        prob: '<u>朝ご飯</u>を食{た}べます。',
        prob_zh: '吃 *早餐*。',
        options: [
            { text: 'あさごはん', reason: '正確！' },
            { text: 'ひるごはん', reason: '錯誤。' },
            { text: 'ばんごはん', reason: '錯誤。' },
            { text: 'よるごはん', reason: '錯誤：一般說晩ご飯{ばんごはん}。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「朝{あさ}ご飯{ごはん}」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_asagohan_2',
        prob: '<u>朝ご飯</u>はおいしかったです。',
        prob_zh: '*早餐* 很好吃。',
        options: [
            { text: 'あさごはん', reason: '正確！' },
            { text: 'ちょうごはん', reason: '錯誤。' },
            { text: 'あさめし', reason: '錯誤：「朝飯{あさめし}」較粗俗，且漢字寫作「飯」。N5學的是「ご飯{ごはん}」。' },
            { text: 'あさえさ', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「朝ご飯{あさごはん}」。'
    },
    {
        id: 'n5_vocab_hyouki_asagohan_1',
        prob: '<u>あさごはん</u>の時間{じかん}です。',
        prob_zh: '*早餐* 時間到了。',
        options: [
            { text: '晝ご飯', reason: '錯誤。' },
            { text: '朝ご飯', reason: '正確！' },
            { text: '晩ご飯', reason: '錯誤。' },
            { text: '夜ご飯', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「あさごはん」=「朝ご飯」。'
    },
    {
        id: 'n5_vocab_hyouki_asagohan_2',
        prob: '毎日{まいにち}、パンの<u>あさごはん</u>を食{た}べます。',
        prob_zh: '每天吃麵包當 *早餐*。',
        options: [
            { text: '朝御飯', reason: '錯誤：雖也通，但N5常見寫法是「朝ご飯」或「ごはん」用假名。選項若有「朝ご飯」最簡明。此處設「朝ご飯」為正解。' },
            { text: '朝ご飯', reason: '正確！' },
            { text: '朝御食', reason: '錯誤。' },
            { text: '朝めし', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】常寫作「朝ご飯」。'
    },
    {
        id: 'n5_vocab_bunmyaku_asagohan_1',
        prob: '起{お}きてから、______を食{た}べます。',
        prob_zh: '起床後，吃 *早餐*。',
        options: [
            { text: '晩{ばん}ご飯{ごはん}', reason: '錯誤。' },
            { text: '昼{ひる}ご飯{ごはん}', reason: '錯誤。' },
            { text: '朝{あさ}ご飯{ごはん}', reason: '正確！起床後第一餐。' },
            { text: '夜食{やしょく}', reason: '錯誤：宵夜。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】生活習慣\n【解析】起床（早上）吃的是朝ご飯。'
    },
    {
        id: 'n5_vocab_bunmyaku_asagohan_2',
        prob: '______は７時{じ}、昼{ひる}ご飯{ごはん}は１２時{じ}です。',
        prob_zh: '*早餐* 是7點，午餐是12點。',
        options: [
            { text: '朝{あさ}ご飯{ごはん}', reason: '正確！' },
            { text: '晩{ばん}ご飯{ごはん}', reason: '錯誤。' },
            { text: '夕飯{ゆうはん}', reason: '錯誤。' },
            { text: 'おやつ', reason: '錯誤：點心。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】時間順序\n【解析】早上7點吃的是早餐。'
    },
    {
        id: 'n5_vocab_ruigigo_asagohan_1',
        prob: '<u>朝ご飯</u>。',
        prob_zh: '*早餐*。（選出意思最接近的選項）',
        options: [
            { text: '朝{あさ}の食事{しょくじ}', reason: '正確！早上的餐點。' },
            { text: '昼{ひる}の食事{しょくじ}', reason: '錯誤。' },
            { text: '夜{よる}の食事{しょくじ}', reason: '錯誤。' },
            { text: 'お菓子{かし}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】詞義釋義\n【解析】朝ご飯 = 朝の食事。'
    },
    {
        id: 'n5_vocab_ruigigo_asagohan_2',
        prob: '<u>朝ご飯</u>を食{た}べません。',
        prob_zh: '不吃 *早餐*。（選出意思最接近的選項）',
        options: [
            { text: '朝{あさ}、何{なに}も食{た}べません', reason: '正確！' },
            { text: '朝{あさ}、たくさん食{た}べます', reason: '錯誤。' },
            { text: '朝{あさ}、水{みず}を飲{の}みます', reason: '錯誤：可能有喝水但不吃東西。' },
            { text: '朝{あさ}、パンを食{た}べます', reason: '錯誤：吃了麵包就是吃了早餐。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】文意理解\n【解析】不吃早餐 = 早上什麼都沒吃。'
    },

    // 28. 明後日 (あさって)
    {
        id: 'n5_vocab_kanji_yomi_asatte_1',
        prob: '<u>明後日</u>、テストがあります。',
        prob_zh: '*後天* 有考試。',
        options: [
            { text: 'あした', reason: '錯誤：明天。' },
            { text: 'あさって', reason: '正確！' },
            { text: 'きのう', reason: '錯誤：昨天。' },
            { text: 'おととい', reason: '錯誤：前天。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「明後日」特殊讀法「あさって」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_asatte_2',
        prob: '<u>明後日</u>来{き}てください。',
        prob_zh: '請 *後天* 來。',
        options: [
            { text: 'みょうごにち', reason: '錯誤：雖是正式讀法，但N5考日語固有詞「あさって」。' },
            { text: 'あさって', reason: '正確！' },
            { text: 'あさイチ', reason: '錯誤。' },
            { text: 'あさて', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「明後日{あさって}」。'
    },
    {
        id: 'n5_vocab_hyouki_asatte_1',
        prob: '<u>あさって</u>は金曜日{きんようび}です。',
        prob_zh: '*後天* 是星期五。',
        options: [
            { text: '明後日', reason: '正確！' },
            { text: '明日', reason: '錯誤：あした。' },
            { text: '明々後日', reason: '錯誤：しあさって（大後天）。' },
            { text: '昨日', reason: '錯誤：きのう。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「あさって」漢字為「明後日」。'
    },
    {
        id: 'n5_vocab_hyouki_asatte_2',
        prob: '<u>あさって</u>から旅行{りょこう}に行{い}きます。',
        prob_zh: '從 *後天* 開始去旅行。',
        options: [
            { text: '明明後日', reason: '錯誤。' },
            { text: '明後日', reason: '正確！' },
            { text: '后日', reason: '錯誤。' },
            { text: '明日', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「明後日{あさって}」。'
    },
    {
        id: 'n5_vocab_bunmyaku_asatte_1',
        prob: '今日{きょう}は月曜日{げつようび}です。______は水曜日{すいようび}です。',
        prob_zh: '今天是週一。 *後天* 是週三。',
        options: [
            { text: '明日{あした}', reason: '錯誤：明天是週二。' },
            { text: '明後日{あさって}', reason: '正確！' },
            { text: '昨日{きのう}', reason: '錯誤：昨天是週日。' },
            { text: '一昨日{おととい}', reason: '錯誤：前天是週六。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】時間計算\n【解析】今天+2天 = 後天。'
    },
    {
        id: 'n5_vocab_bunmyaku_asatte_2',
        prob: '明日{あした}の次{つぎ}の日{ひ}は______です。',
        prob_zh: '明天的下一天是 *後天*。',
        options: [
            { text: '明後日{あさって}', reason: '正確！' },
            { text: '今日{きょう}', reason: '錯誤。' },
            { text: '昨日{きのう}', reason: '錯誤。' },
            { text: '毎日{まいにち}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】時間定義\n【解析】明天的明天是後天。'
    },
    {
        id: 'n5_vocab_ruigigo_asatte_1',
        prob: '<u>明後日</u>。',
        prob_zh: '*後天*。（選出意思最接近的選項）',
        options: [
            { text: '明日{あした}の次{つぎ}の日{ひ}', reason: '正確！' },
            { text: '今日{きょう}の次{つぎ}の日{ひ}', reason: '錯誤：這是明天。' },
            { text: '昨日{きのう}の前{まえ}の日{ひ}', reason: '錯誤：這是前天。' },
            { text: '今日{きょう}の前{まえ}の日{ひ}', reason: '錯誤：這是昨天。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】詞義解釋\n【解析】明後日 = 明天的隔天。'
    },
    {
        id: 'n5_vocab_ruigigo_asatte_2',
        prob: '<u>明後日</u>会{あ}いましょう。',
        prob_zh: '*後天* 見吧。（選出意思最接近的選項）',
        options: [
            { text: '二日{ふつか}後{ご}に会{あ}いましょう', reason: '正確！後天即約兩天後（若以今日為基準）。' },
            { text: '一日{いちにち}後{ご}に会{あ}いましょう', reason: '錯誤：這是一天後（明天）。' },
            { text: '今{いま}会{あ}いましょう', reason: '錯誤。' },
            { text: '前{まえ}に会{あ}いました', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】時間長度\n【解析】後天是兩天後。'
    },

    // 29. 足 (あし)
    {
        id: 'n5_vocab_kanji_yomi_ashi_1',
        prob: '<u>足</u>が痛{いた}いです。',
        prob_zh: '*腳* 痛。',
        options: [
            { text: 'て', reason: '錯誤：手。' },
            { text: 'あし', reason: '正確！' },
            { text: 'かお', reason: '錯誤：臉。' },
            { text: 'め', reason: '錯誤：眼。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「足{あし}」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_ashi_2',
        prob: '机{つくえ}の<u>足</u>が壊{こわ}れました。',
        prob_zh: '桌 *腳* 壞了。',
        options: [
            { text: 'あじ', reason: '錯誤：味。' },
            { text: 'あす', reason: '錯誤。' },
            { text: 'あし', reason: '正確！物體的腳也用「足」。' },
            { text: 'あせ', reason: '錯誤：汗。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「足{あし}」。'
    },
    {
        id: 'n5_vocab_hyouki_ashi_1',
        prob: '<u>あし</u>が長{なが}いです。',
        prob_zh: '*腿* 很長。',
        options: [
            { text: '手', reason: '錯誤：手。' },
            { text: '足', reason: '正確！' },
            { text: '体', reason: '錯誤：身體。' },
            { text: '頭', reason: '錯誤：頭。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「あし」漢字為「足」（或「脚」但N5主要教「足」）。'
    },
    {
        id: 'n5_vocab_hyouki_ashi_2',
        prob: '靴{くつ}を履{は}きます。<u>あし</u>に履{は}きます。',
        prob_zh: '穿鞋子。穿在 *腳* 上。',
        options: [
            { text: '足', reason: '正確！' },
            { text: '走', reason: '錯誤。' },
            { text: '定', reason: '錯誤。' },
            { text: '疋', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「足{あし}」。'
    },
    {
        id: 'n5_vocab_bunmyaku_ashi_1',
        prob: '長い間{あいだ}歩{ある}きましたから、______が疲れました。',
        prob_zh: '因為走了很久， *腳* 累了。',
        options: [
            { text: '手{て}', reason: '錯誤。' },
            { text: '鼻{はな}', reason: '錯誤：鼻子。' },
            { text: '足{あし}', reason: '正確！走路用腳。' },
            { text: '耳{みみ}', reason: '錯誤：耳朵。' }
        ],
        correctIndex: 2,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】身體部位\n【解析】走路會累的是腳。'
    },
    {
        id: 'n5_vocab_bunmyaku_ashi_2',
        prob: '______の指{ゆび}。',
        prob_zh: '*腳* 指。',
        options: [
            { text: '足{あし}', reason: '正確！' },
            { text: '目{め}', reason: '錯誤：眼睛沒有手指。' },
            { text: '口{くち}', reason: '錯誤。' },
            { text: '髪{かみ}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】詞彙搭配\n【解析】足の指 = 腳趾。'
    },
    {
        id: 'n5_vocab_ruigigo_ashi_1',
        prob: '<u>足</u>。',
        prob_zh: '*腳/腿*。（選出同類詞）',
        options: [
            { text: '手{て}', reason: '正確！都是身體部位。' },
            { text: '机{つくえ}', reason: '錯誤。' },
            { text: '海{うみ}', reason: '錯誤。' },
            { text: '空{そら}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】詞彙分類\n【解析】手、足都是身體的一部分。'
    },
    {
        id: 'n5_vocab_ruigigo_ashi_2',
        prob: '<u>足</u>が速{はや}いです。',
        prob_zh: '跑得很快（*飛毛腿*）。（選出意思最接近的選項）',
        options: [
            { text: '走{はし}るのが速{はや}いです', reason: '正確！「足が速い」是慣用語，指跑得快。' },
            { text: '歩{ある}くのが遅{おそ}いです', reason: '錯誤。' },
            { text: '足{あし}が痛{いた}いです', reason: '錯誤。' },
            { text: '忙{いそが}しいです', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】慣用語\n【解析】足が速い = 跑得快。'
    },

    // 30. 明日 (あした)
    {
        id: 'n5_vocab_kanji_yomi_ashita_1',
        prob: '<u>明日</u>、どこへ行{い}きますか。',
        prob_zh: '*明天* 要去哪裡？',
        options: [
            { text: 'あした', reason: '正確！常用的口語讀音。' },
            { text: 'あさ', reason: '錯誤：早上。' },
            { text: 'きのう', reason: '錯誤：昨天。' },
            { text: 'きょう', reason: '錯誤：今天。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「明日」在對話中通常讀「あした」。'
    },
    {
        id: 'n5_vocab_kanji_yomi_ashita_2',
        prob: 'また<u>明日</u>。',
        prob_zh: '*明天* 見。',
        options: [
            { text: 'あけび', reason: '錯誤。' },
            { text: 'あした', reason: '正確！' },
            { text: 'めいにち', reason: '錯誤。' },
            { text: 'あき', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_kanji_yomi',
        correctRule: '【考點】漢字讀音\n【解析】「明日{あした}」。'
    },
    // 明日 也有「あす」的讀法，但N5以「あした」為主。選項應避免同時出現。
    {
        id: 'n5_vocab_hyouki_ashita_1',
        prob: '<u>あした</u>は晴{は}れでしょう。',
        prob_zh: '*明天* 應該會是晴天吧。',
        options: [
            { text: '明日', reason: '正確！' },
            { text: '明后日', reason: '錯誤：簡體字形或錯誤寫法。' },
            { text: '昨日', reason: '錯誤。' },
            { text: '今日', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「あした」漢字為「明日」。'
    },
    {
        id: 'n5_vocab_hyouki_ashita_2',
        prob: '<u>あした</u>の午後{ごご}、暇{ひま}ですか。',
        prob_zh: '*明天* 下午有空嗎？',
        options: [
            { text: '朝日', reason: '錯誤：あさひ。' },
            { text: '明日', reason: '正確！' },
            { text: '昨夜', reason: '錯誤：ゆうべ。' },
            { text: '今朝', reason: '錯誤：けさ。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_hyouki',
        correctRule: '【考點】漢字書寫\n【解析】「あした」=「明日」。'
    },
    {
        id: 'n5_vocab_bunmyaku_ashita_1',
        prob: '今日{きょう}は土曜日{どようび}です。______は日曜日{にちようび}です。',
        prob_zh: '今天是週六。 *明天* 是週日。',
        options: [
            { text: '明日{あした}', reason: '正確！' },
            { text: '昨日{きのう}', reason: '錯誤：昨天是週五。' },
            { text: '一昨日{おととい}', reason: '錯誤。' },
            { text: '明後日{あさって}', reason: '錯誤：後天是週一。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】時間順序\n【解析】今天的下一天是明天。'
    },
    {
        id: 'n5_vocab_bunmyaku_ashita_2',
        prob: '______、学校{がっこう}を休{やす}みます。風邪{かぜ}を引{ひ}きましたから。',
        prob_zh: '*明天* 要請假。因為感冒了。',
        options: [
            { text: '明日{あした}', reason: '正確！表示未來的預定。' },
            { text: '昨日{きのう}', reason: '錯誤：動詞是「休みます(未來/習慣)」，若是昨天應用「休みました」。' },
            { text: '去年{きょねん}', reason: '錯誤。' },
            { text: '先週{せんしゅう}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_bunmyaku',
        correctRule: '【考點】時態一致性\n【解析】動詞為非過去式，搭配未來的時間詞。'
    },
    {
        id: 'n5_vocab_ruigigo_ashita_1',
        prob: '<u>明日</u>。',
        prob_zh: '*明天*。（選出意思最接近的選項）',
        options: [
            { text: '今日{きょう}の次{つぎ}の日{ひ}', reason: '正確！' },
            { text: '今日{きょう}の前{まえ}の日{ひ}', reason: '錯誤：昨天。' },
            { text: '今{いま}', reason: '錯誤。' },
            { text: '毎日{まいにち}', reason: '錯誤。' }
        ],
        correctIndex: 0,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】詞義釋義\n【解析】明天是今天的隔天。'
    },
    {
        id: 'n5_vocab_ruigigo_ashita_2',
        prob: '<u>明日</u>から学校{がっこう}です。',
        prob_zh: '*明天* 開始上學。（選出意思最接近的選項）',
        options: [
            { text: '今日{きょう}は学校{がっこう}じゃありません', reason: '正確！如果明天開始（開學），暗示今天還沒開始（可能是假期最後一天）。（推論稍遠）' },
            { text: '明日{あした}は学校{がっこう}に行{い}きます', reason: '正確！最直接。' },
            { text: '昨日{きのう}は学校{がっこう}でした', reason: '錯誤。' },
            { text: 'もう学校{がっこう}へ行{い}きません', reason: '錯誤。' }
        ],
        correctIndex: 1,
        level: 'N5',
        tag: 'vocab_ruigigo',
        correctRule: '【考點】語意理解\n【解析】明天開始上學 = 明天要去學校。'
    }
];
