import { DatesPracticeQuestion } from '../types';

// 十位數練習題
// 包含 11, 12, 14, 19, 20, 30, 40, 50, 60, 70, 80, 90
// 每個數字3題：發音題、單句敘述題、對話題

export const tensNumberQuestions: DatesPracticeQuestion[] = [
    // ===== 數字 11 的三題 =====
    {
        id: 'num_tens_11_pron',
        category: 'numbers',
        subcategory: 'tens',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十一」的正確讀音是？',
        stem_zh: '「十一」的正確讀音是？',
        options: [
            { text: 'じゅういち', isCorrect: true, reason: '正確{せいかく}！「十一{じゅういち}」讀作{どくさ}「じゅういち」，是十{じゅう}加{か}一{いち}の組合{くみあわせ}。' },
            { text: 'といち', isCorrect: false, reason: '「と」是訓讀{くんどく}，組合{くみあわせ}數字{すうじ}使用{しよう}する音讀{おんどく}。' },
            { text: 'じゅうひと', isCorrect: false, reason: '「ひと」是訓讀{くんどく}，應{おう}使用{しよう}音讀{おんどく}「いち」。' },
            { text: 'じゅいち', isCorrect: false, reason: '少了{すくな}「う」，正確{せいかく}は「じゅういち」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '十位{じゅうい}以上{いじょう}の數字{すうじ}使用{しよう}音讀{おんどく}組合{くみあわせ}，「十一{じゅういち}」讀作{どくさ}「じゅういち」。',
            relatedRules: ['十位數{じゅういすう}の組合{くみあわせ}規則{きそく}', '音讀{おんどく}組合{くみあわせ}']
        },
        sourceItem: { value: 11, kanji: '十一', reading: 'じゅういち' }
    },
    {
        id: 'num_tens_11_sent',
        category: 'numbers',
        subcategory: 'tens',
        type: 'sentence',
        isTrap: false,
        stem: '私は＿＿歳です。',
        stem_zh: '我十一歲。',
        options: [
            { text: 'じゅういっさい', isCorrect: true, reason: '正確{せいかく}！「十一歳{じゅういっさい}」，「一{いち}」＋「歳{さい}」促音化{そくおんか}為「いっさい」。' },
            { text: 'じゅういちさい', isCorrect: false, reason: '「一{いち}」後接{こうせつ}「歳{さい}」會促音化{そくおんか}為「いっさい」。' },
            { text: 'といっさい', isCorrect: false, reason: '「と」是訓讀{くんどく}，應{おう}使用{しよう}音讀{おんどく}「じゅう」。' },
            { text: 'じゅうひとさい', isCorrect: false, reason: '「ひと」是訓讀{くんどく}，年齡{ねんれい}使用{しよう}する音讀{おんどく}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十一歳{じゅういっさい}」中，「一{いち}」後接{こうせつ}「歳{さい}」會促音化{そくおんか}，變成{へんせい}「いっさい」。',
            relatedRules: ['年齡{ねんれい}の讀法{よみかた}', '一{いち}の促音化{そくおんか}規則{きそく}']
        },
        sourceItem: { value: 11, kanji: '十一歳', reading: 'じゅういっさい' }
    },
    {
        id: 'num_tens_11_dial',
        category: 'numbers',
        subcategory: 'tens',
        type: 'dialogue',
        isTrap: false,
        stem: '今、何時ですか？',
        stem_zh: '現在幾點？',
        dialogue: {
            speakerA: 'すみません、今、何時ですか？',
            speakerB: '＿＿です。（十一點）'
        },
        options: [
            { text: 'じゅういちじ', isCorrect: true, reason: '正確{せいかく}！「十一時{じゅういちじ}」讀作{どくさ}「じゅういちじ」。' },
            { text: 'といちじ', isCorrect: false, reason: '「と」是訓讀{くんどく}，時間{じかん}使用{しよう}する音讀{おんどく}。' },
            { text: 'じゅういっじ', isCorrect: false, reason: '「時{じ}」前{まえ}不促音化{ふそくおんか}。' },
            { text: 'じゅうひとじ', isCorrect: false, reason: '「ひと」是訓讀{くんどく}，時間{じかん}使用{しよう}する音讀{おんどく}「いち」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '時間{じかん}使用{しよう}音讀{おんどく}，「十一時{じゅういちじ}」讀作{どくさ}「じゅういちじ」。',
            relatedRules: ['時間{じかん}の讀法{よみかた}', '十位{じゅうい}時間{じかん}の表達{ひょうたつ}']
        },
        sourceItem: { value: 11, kanji: '十一時', reading: 'じゅういちじ' }
    },

    // ===== 數字 12 的三題 =====
    {
        id: 'num_tens_12_pron',
        category: 'numbers',
        subcategory: 'tens',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十二」的正確讀音是？',
        stem_zh: '「十二」的正確讀音是？',
        options: [
            { text: 'じゅうに', isCorrect: true, reason: '正確{せいかく}！「十二{じゅうに}」讀作{どくさ}「じゅうに」。' },
            { text: 'とふた', isCorrect: false, reason: '組合{くみあわせ}數字{すうじ}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'じゅうふた', isCorrect: false, reason: '「ふた」是訓讀{くんどく}，應{おう}使用{しよう}音讀{おんどく}「に」。' },
            { text: 'じゅに', isCorrect: false, reason: '少了{すくな}「う」，正確{せいかく}は「じゅうに」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十二{じゅうに}」是音讀{おんどく}組合{くみあわせ}，讀作{どくさ}「じゅうに」。',
            relatedRules: ['十位數{じゅういすう}の組合{くみあわせ}', '12の發音{はつおん}']
        },
        sourceItem: { value: 12, kanji: '十二', reading: 'じゅうに' }
    },
    {
        id: 'num_tens_12_sent',
        category: 'numbers',
        subcategory: 'tens',
        type: 'sentence',
        isTrap: false,
        stem: '一年は＿＿か月あります。',
        stem_zh: '一年有十二個月。',
        options: [
            { text: 'じゅうにか', isCorrect: false, reason: '「か月{かげつ}」前{まえ}需要{じゅよう}完整{かんせい}「じゅうに」。' },
            { text: 'じゅうにかげつ', isCorrect: true, reason: '正確{せいかく}！「十二か月{じゅうにかげつ}」。' },
            { text: 'とふたかげつ', isCorrect: false, reason: '「か月{かげつ}」使用{しよう}しない訓讀{くんどく}數字{すうじ}。' },
            { text: 'じゅっにかげつ', isCorrect: false, reason: '「十二{じゅうに}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十二か月{じゅうにかげつ}」表示{ひょうじ}期間{きかん}，使用{しよう}音讀{おんどく}組合{くみあわせ}。',
            relatedRules: ['期間{きかん}の表達{ひょうたつ}', '「か月{かげつ}」の使用{しよう}']
        },
        sourceItem: { value: 12, kanji: '十二か月', reading: 'じゅうにかげつ' }
    },
    {
        id: 'num_tens_12_dial',
        category: 'numbers',
        subcategory: 'tens',
        type: 'dialogue',
        isTrap: false,
        stem: '何月生まれですか？',
        stem_zh: '你是幾月出生的？',
        dialogue: {
            speakerA: '何月生まれですか？',
            speakerB: '＿＿生まれです。（十二月）'
        },
        options: [
            { text: 'じゅうにがつ', isCorrect: true, reason: '正確{せいかく}！「十二月{じゅうにがつ}」讀作{どくさ}「じゅうにがつ」。' },
            { text: 'とふたがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}數字{すうじ}。' },
            { text: 'じゅっにがつ', isCorrect: false, reason: '「十二{じゅうに}」不促音化{ふそくおんか}。' },
            { text: 'じゅにがつ', isCorrect: false, reason: '少了{すくな}「う」，正確{せいかく}は「じゅうにがつ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十二月{じゅうにがつ}」是一年{いちねん}最後{さいご}の月份{げっぷん}，使用{しよう}音讀{おんどく}。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '12月{じゅうにがつ}の發音{はつおん}']
        },
        sourceItem: { value: 12, kanji: '十二月', reading: 'じゅうにがつ' }
    },

    // ===== 數字 14 的三題 =====
    {
        id: 'num_tens_14_pron',
        category: 'numbers',
        subcategory: 'tens',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十四」最常用的讀音是？',
        stem_zh: '「十四」最常用的讀音是？',
        options: [
            { text: 'じゅうし', isCorrect: false, reason: '「じゅうし」也可以{かのう}，但因{たんいん}避諱{ひき}「死{し}」，日常{にちじょう}多用{おおくもちい}「じゅうよん」。' },
            { text: 'じゅうよん', isCorrect: true, reason: '正確{せいかく}！為{ため}避諱{ひき}「死{し}」，日常{にちじょう}多く{おおく}使用{しよう}「じゅうよん」。' },
            { text: 'じゅよん', isCorrect: false, reason: '少了{すくな}「う」，正確{せいかく}は「じゅうよん」。' },
            { text: 'とよっつ', isCorrect: false, reason: '組合{くみあわせ}數字{すうじ}使用{しよう}しない訓讀{くんどく}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十四{じゅうよん}」有兩種{りょうしゅ}讀法{よみかた}：「じゅうし」和「じゅうよん」。由於{ゆえ}「し」與「死{し}」同音{どうおん}，日常{にちじょう}多く{おおく}使用{しよう}「じゅうよん」。',
            trapExplanation: '陷阱題{かんけいだい}，測試{そくし}避諱{ひき}習慣{しゅうかん}的了解{りょうかい}。',
            relatedRules: ['十四{じゅうよん}の兩種{りょうしゅ}讀法{よみかた}', '避諱{ひき}文化{ぶんか}']
        },
        sourceItem: { value: 14, kanji: '十四', reading: 'じゅうよん / じゅうし' }
    },
    {
        id: 'num_tens_14_sent',
        category: 'numbers',
        subcategory: 'tens',
        type: 'sentence',
        isTrap: true,
        stem: '今日は＿＿日です。',
        stem_zh: '今天是十四號。',
        options: [
            { text: 'じゅうよんにち', isCorrect: false, reason: '陷阱{かんけい}！日期{にっき}中14日{じゅうよっか}保留{ほりゅう}訓讀{くんどく}「よっか」，讀む{よむ}「じゅうよっか」。' },
            { text: 'じゅうよっか', isCorrect: true, reason: '正確{せいかく}！「十四日{じゅうよっか}」保留{ほりゅう}了{た}4日{よっか}の訓讀{くんどく}「よっか」。' },
            { text: 'じゅうしにち', isCorrect: false, reason: '日期{にっき}中14日{じゅうよっか}使用{しよう}特殊{とくしゅ}讀法{よみかた}「じゅうよっか」。' },
            { text: 'といよっか', isCorrect: false, reason: '「十{じゅう}」部分{ぶぶん}使用{しよう}する音讀{おんどく}「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '日期{にっき}中，14日{じゅうよっか}和24日{にじゅうよっか}保留{ほりゅう}了{た}4日{よっか}の訓讀{くんどく}「よっか」，讀む{よむ}「じゅうよっか」。',
            trapExplanation: '這是重要{じゅうよう}陷阱{かんけい}，學習者{がくしゅうしゃ}容易{ようい}套用{とうよう}音讀{おんどく}規則{きそく}而讀む{よむ}「じゅうよんにち」。',
            relatedRules: ['14日{じゅうよっか}、24日{にじゅうよっか}の特殊{とくしゅ}讀法{よみかた}', '日期{にっき}の訓讀{くんどく}保留{ほりゅう}']
        },
        sourceItem: { value: 14, kanji: '十四日', reading: 'じゅうよっか' }
    },
    {
        id: 'num_tens_14_dial',
        category: 'numbers',
        subcategory: 'tens',
        type: 'dialogue',
        isTrap: false,
        stem: '何歳ですか？',
        stem_zh: '你幾歲？',
        dialogue: {
            speakerA: '何歳ですか？',
            speakerB: '＿＿歳です。（十四歲）'
        },
        options: [
            { text: 'じゅうよんさい', isCorrect: true, reason: '正確{せいかく}！「十四歳{じゅうよんさい}」讀作{どくさ}「じゅうよんさい」。' },
            { text: 'じゅうしさい', isCorrect: false, reason: '雖然{すいぜん}語法{ごほう}正確{せいかく}，但避諱{ひき}「死{し}」，多用{おおくもちい}「じゅうよんさい」。' },
            { text: 'じゅうよっさい', isCorrect: false, reason: '年齡{ねんれい}不使用{ふしよう}「よっ」，應{おう}是「よん」。' },
            { text: 'とよっさい', isCorrect: false, reason: '年齡{ねんれい}使用{しよう}する音讀{おんどく}「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十四歳{じゅうよんさい}」讀作{どくさ}「じゅうよんさい」，使用{しよう}「よん」避諱{ひき}。',
            relatedRules: ['年齡{ねんれい}の表達{ひょうたつ}', '14の避諱{ひき}讀法{よみかた}']
        },
        sourceItem: { value: 14, kanji: '十四歳', reading: 'じゅうよんさい' }
    },

    // ===== 數字 20 的三題 =====
    {
        id: 'num_tens_20_pron',
        category: 'numbers',
        subcategory: 'tens',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二十」的正確讀音是？',
        stem_zh: '「二十」的正確讀音是？',
        options: [
            { text: 'にじゅう', isCorrect: true, reason: '正確{せいかく}！「二十{にじゅう}」讀作{どくさ}「にじゅう」。' },
            { text: 'ふたじゅう', isCorrect: false, reason: '「ふた」是訓讀{くんどく}，組合{くみあわせ}數字{すうじ}使用{しよう}する音讀{おんどく}。' },
            { text: 'はたち', isCorrect: false, reason: '「はたち」是「二十歳{にじゅっさい}」の特殊{とくしゅ}讀法{よみかた}，不是單純{たんじゅん}數字{すうじ}20。' },
            { text: 'にじゅ', isCorrect: false, reason: '少了{すくな}「う」，正確{せいかく}は「にじゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十{にじゅう}」讀作{どくさ}「にじゅう」，是二{に}乘以{じょうい}十{じゅう}の音讀{おんどく}組合{くみあわせ}。',
            relatedRules: ['整十數{せいじゅうすう}の讀法{よみかた}', '20の標準{ひょうじゅん}發音{はつおん}']
        },
        sourceItem: { value: 20, kanji: '二十', reading: 'にじゅう' }
    },
    {
        id: 'num_tens_20_sent',
        category: 'numbers',
        subcategory: 'tens',
        type: 'sentence',
        isTrap: true,
        stem: '今日は＿＿日です。',
        stem_zh: '今天是二十號。',
        options: [
            { text: 'にじゅうにち', isCorrect: false, reason: '陷阱{かんけい}！日期{にっき}中「二十日{はつか}」有特殊{とくしゅ}讀法{よみかた}「はつか」。' },
            { text: 'はつか', isCorrect: true, reason: '正確{せいかく}！「二十日{はつか}」是完全{かんぜん}特殊{とくしゅ}讀法{よみかた}，讀む{よむ}「はつか」。' },
            { text: 'ふたじゅうにち', isCorrect: false, reason: '日期{にっき}使用{しよう}しない這個{この}組合{くみあわせ}。' },
            { text: 'にじゅっか', isCorrect: false, reason: '20日{はつか}不使用{ふしよう}促音{そくおん}，固定{こてい}讀む{よむ}「はつか」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「二十日{はつか}」是日期{にっき}中最{もっと}特殊{とくしゅ}の讀法{よみかた}，完全{かんぜん}獨立{どくりつ}，讀む{よむ}「はつか」。與數字{すうじ}「二十{にじゅう}」讀法{よみかた}完全{かんぜん}不同{ふどう}。',
            trapExplanation: '這是最{もっと}重要{じゅうよう}の日期{にっき}陷阱{かんけい}。「二十日{はつか}」的讀法{よみかた}與其他{たいた}任何{いかなる}數字{すうじ}都{すべて}無關{むかん}，必須{ひっす}特別{とくべつ}記憶{きおく}。',
            relatedRules: ['二十日{はつか}の特殊{とくしゅ}讀法{よみかた}', '日期{にっき}の訓讀{くんどく}系統{けいとう}']
        },
        sourceItem: { value: 20, kanji: '二十日', reading: 'はつか' }
    },
    {
        id: 'num_tens_20_dial',
        category: 'numbers',
        subcategory: 'tens',
        type: 'dialogue',
        isTrap: true,
        stem: '何歳ですか？',
        stem_zh: '你幾歲？',
        dialogue: {
            speakerA: '何歳ですか？',
            speakerB: '＿＿です。（二十歲）'
        },
        options: [
            { text: 'にじゅっさい', isCorrect: false, reason: '雖然{すいぜん}這也可以{かのう}，但二十歳{にじゅっさい}有特殊{とくしゅ}讀法{よみかた}「はたち」。' },
            { text: 'はたち', isCorrect: true, reason: '正確{せいかく}！「二十歳{にじゅっさい}」有特殊{とくしゅ}讀法{よみかた}「はたち」，這是成年{せいねん}的象徵{しょうちょう}。' },
            { text: 'ふたじゅっさい', isCorrect: false, reason: '年齡{ねんれい}使用{しよう}しない訓讀{くんどく}「ふた」。' },
            { text: 'にじゅうさい', isCorrect: false, reason: '「二十{にじゅう}」後接{こうせつ}「歳{さい}」時{とき}，使用{しよう}する特殊{とくしゅ}讀法{よみかた}「はたち」更常見{こうじょうけん}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「二十歳{にじゅっさい}」有特殊{とくしゅ}讀法{よみかた}「はたち」，這是日本{にほん}成年{せいねん}の重要{じゅうよう}年齡{ねんれい}，有獨立{どくりつ}的傳統{でんとう}稱呼{しょうこ}。',
            trapExplanation: '「はたち」是日本{にほん}文化{ぶんか}中非常{ひじょう}重要{じゅうよう}の詞彙{しい}，代表{だいひょう}成人{せいじん}。',
            relatedRules: ['二十歳{にじゅっさい}の特殊{とくしゅ}讀法{よみかた}', '「はたち」の文化{ぶんか}意義{いぎ}']
        },
        sourceItem: { value: 20, kanji: '二十歳', reading: 'はたち' }
    },

    // ===== 數字 30 的三題 =====
    {
        id: 'num_tens_30_pron',
        category: 'numbers',
        subcategory: 'tens',
        type: 'pronunciation',
        isTrap: false,
        stem: '「三十」的正確讀音是？',
        stem_zh: '「三十」的正確讀音是？',
        options: [
            { text: 'さんじゅう', isCorrect: true, reason: '正確{せいかく}！「三十{さんじゅう}」讀作{どくさ}「さんじゅう」。' },
            { text: 'みっじゅう', isCorrect: false, reason: '「み」是訓讀{くんどく}，組合{くみあわせ}數字{すうじ}使用{しよう}する音讀{おんどく}。' },
            { text: 'さんじゅ', isCorrect: false, reason: '少了{すくな}「う」，正確{せいかく}は「さんじゅう」。' },
            { text: 'みそ', isCorrect: false, reason: '「みそ」は古語{こご}，現代{げんだい}日語{にほんご}使用{しよう}しない。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十{さんじゅう}」讀作{どくさ}「さんじゅう」，是三{さん}乘以{じょうい}十{じゅう}の音讀{おんどく}組合{くみあわせ}。',
            relatedRules: ['整十數{せいじゅうすう}の讀法{よみかた}', '30の發音{はつおん}']
        },
        sourceItem: { value: 30, kanji: '三十', reading: 'さんじゅう' }
    },
    {
        id: 'num_tens_30_sent',
        category: 'numbers',
        subcategory: 'tens',
        type: 'sentence',
        isTrap: false,
        stem: '今日は＿＿日です。',
        stem_zh: '今天是三十號。',
        options: [
            { text: 'さんじゅうにち', isCorrect: true, reason: '正確{せいかく}！「三十日{さんじゅうにち}」讀作{どくさ}「さんじゅうにち」。' },
            { text: 'みそか', isCorrect: false, reason: '「みそか」是古語{こご}形式{けいしき}，現代{げんだい}多用{おおくもちい}「さんじゅうにち」。' },
            { text: 'さんじゅっか', isCorrect: false, reason: '「日{にち}」前{まえ}不促音化{ふそくおんか}。' },
            { text: 'みっじゅうにち', isCorrect: false, reason: '日期{にっき}使用{しよう}する音讀{おんどく}「さん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十日{さんじゅうにち}」讀作{どくさ}「さんじゅうにち」，使用{しよう}音讀{おんどく}規則{きそく}。',
            relatedRules: ['30日{さんじゅうにち}の讀法{よみかた}', '日期{にっき}の音讀{おんどく}']
        },
        sourceItem: { value: 30, kanji: '三十日', reading: 'さんじゅうにち' }
    },
    {
        id: 'num_tens_30_dial',
        category: 'numbers',
        subcategory: 'tens',
        type: 'dialogue',
        isTrap: false,
        stem: '何歳ですか？',
        stem_zh: '你幾歲？',
        dialogue: {
            speakerA: '何歳ですか？',
            speakerB: '＿＿歳です。（三十歲）'
        },
        options: [
            { text: 'さんじゅっさい', isCorrect: true, reason: '正確{せいかく}！「三十歳{さんじゅっさい}」，「じゅう」＋「さい」促音化{そくおんか}為「じゅっさい」。' },
            { text: 'さんじゅうさい', isCorrect: false, reason: '「歳{さい}」前{まえ}會促音化{そくおんか}，應{おう}是「じゅっさい」。' },
            { text: 'みっじゅっさい', isCorrect: false, reason: '年齡{ねんれい}使用{しよう}する音讀{おんどく}「さん」。' },
            { text: 'さんじゅさい', isCorrect: false, reason: '不完整{ふかんせい}，正確{せいかく}は「さんじゅっさい」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十歳{さんじゅっさい}」中，「十{じゅう}」＋「歳{さい}」會促音化{そくおんか}，變成{へんせい}「じゅっさい」。',
            relatedRules: ['年齡{ねんれい}の促音化{そくおんか}', '整十{せいじゅう}年齡{ねんれい}の讀法{よみかた}']
        },
        sourceItem: { value: 30, kanji: '三十歳', reading: 'さんじゅっさい' }
    },

    // ===== 數字 40 的三題 =====
    {
        id: 'num_tens_40_pron',
        category: 'numbers',
        subcategory: 'tens',
        type: 'pronunciation',
        isTrap: true,
        stem: '「四十」最常用的讀音是？',
        stem_zh: '「四十」最常用的讀音是？',
        options: [
            { text: 'しじゅう', isCorrect: false, reason: '「しじゅう」也正確{せいかく}，但為{ため}避諱{ひき}「死{し}」，日常{にちじょう}多用{おおくもちい}「よんじゅう」。' },
            { text: 'よんじゅう', isCorrect: true, reason: '正確{せいかく}！為{ため}避諱{ひき}「死{し}」，日常{にちじょう}多く{おおく}使用{しよう}「よんじゅう」。' },
            { text: 'よじゅう', isCorrect: false, reason: '缺少{けっしょう}「ん」，正確{せいかく}は「よんじゅう」。' },
            { text: 'よっじゅう', isCorrect: false, reason: '沒有{ない}促音{そくおん}，正確{せいかく}は「よんじゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「四十{よんじゅう}」為{ため}避諱{ひき}「死{し}」，日常{にちじょう}多く{おおく}使用{しよう}「よんじゅう」而非「しじゅう」。',
            trapExplanation: '陷阱題{かんけいだい}，測試{そくし}避諱{ひき}習慣{しゅうかん}的了解{りょうかい}。',
            relatedRules: ['四十{よんじゅう}の避諱{ひき}讀法{よみかた}', '避諱{ひき}文化{ぶんか}在組合{くみあわせ}數字{すうじ}中の應用{おうよう}']
        },
        sourceItem: { value: 40, kanji: '四十', reading: 'よんじゅう' }
    },
    {
        id: 'num_tens_40_sent',
        category: 'numbers',
        subcategory: 'tens',
        type: 'sentence',
        isTrap: false,
        stem: '私は＿＿人のクラスにいます。',
        stem_zh: '我在四十人的班級。',
        options: [
            { text: 'よんじゅうにん', isCorrect: true, reason: '正確{せいかく}！「四十人{よんじゅうにん}」讀作{どくさ}「よんじゅうにん」。' },
            { text: 'しじゅうにん', isCorrect: false, reason: '為{ため}避諱{ひき}「死{し}」，多用{おおくもちい}「よんじゅう」。' },
            { text: 'よっじゅうにん', isCorrect: false, reason: '沒有{ない}促音{そくおん}，正確{せいかく}は「よんじゅう」。' },
            { text: 'よじゅうにん', isCorrect: false, reason: '缺少{けっしょう}「ん」，正確{せいかく}は「よんじゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十人{よんじゅうにん}」使用{しよう}「よん」避諱{ひき}「死{し}」。',
            relatedRules: ['人數{にんずう}の表達{ひょうたつ}', '40の避諱{ひき}讀法{よみかた}']
        },
        sourceItem: { value: 40, kanji: '四十人', reading: 'よんじゅうにん' }
    },
    {
        id: 'num_tens_40_dial',
        category: 'numbers',
        subcategory: 'tens',
        type: 'dialogue',
        isTrap: false,
        stem: '何歳ですか？',
        stem_zh: '你幾歲？',
        dialogue: {
            speakerA: '何歳ですか？',
            speakerB: '＿＿歳です。（四十歲）'
        },
        options: [
            { text: 'よんじゅっさい', isCorrect: true, reason: '正確{せいかく}！「四十歳{よんじゅっさい}」，促音化{そくおんか}為「じゅっさい」。' },
            { text: 'しじゅっさい', isCorrect: false, reason: '為{ため}避諱{ひき}「死{し}」，多用{おおくもちい}「よん」。' },
            { text: 'よんじゅうさい', isCorrect: false, reason: '「歳{さい}」前{まえ}會促音化{そくおんか}，應{おう}是「じゅっさい」。' },
            { text: 'よっじゅっさい', isCorrect: false, reason: '沒有{ない}「よっ」這個{この}形式{けいしき}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四十歳{よんじゅっさい}」使用{しよう}「よん」＋促音化{そくおんか}「じゅっさい」。',
            relatedRules: ['年齡{ねんれい}の促音化{そくおんか}', '40の避諱{ひき}讀法{よみかた}']
        },
        sourceItem: { value: 40, kanji: '四十歳', reading: 'よんじゅっさい' }
    },

    // ===== 數字 50 的三題 =====
    {
        id: 'num_tens_50_pron',
        category: 'numbers',
        subcategory: 'tens',
        type: 'pronunciation',
        isTrap: false,
        stem: '「五十」的正確讀音是？',
        stem_zh: '「五十」的正確讀音是？',
        options: [
            { text: 'ごじゅう', isCorrect: true, reason: '正確{せいかく}！「五十{ごじゅう}」讀作{どくさ}「ごじゅう」。' },
            { text: 'いつじゅう', isCorrect: false, reason: '「いつ」是訓讀{くんどく}，組合{くみあわせ}數字{すうじ}使用{しよう}する音讀{おんどく}。' },
            { text: 'こじゅう', isCorrect: false, reason: '「ご」需要{じゅよう}濁音{だくおん}，不是「こ」。' },
            { text: 'ごじゅ', isCorrect: false, reason: '少了{すくな}「う」，正確{せいかく}は「ごじゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十{ごじゅう}」讀作{どくさ}「ごじゅう」，是五{ご}乘以{じょうい}十{じゅう}の音讀{おんどく}組合{くみあわせ}。',
            relatedRules: ['整十數{せいじゅうすう}の讀法{よみかた}', '50の發音{はつおん}']
        },
        sourceItem: { value: 50, kanji: '五十', reading: 'ごじゅう' }
    },
    {
        id: 'num_tens_50_sent',
        category: 'numbers',
        subcategory: 'tens',
        type: 'sentence',
        isTrap: false,
        stem: 'この本は＿＿ページあります。',
        stem_zh: '這本書有五十頁。',
        options: [
            { text: 'ごじゅうページ', isCorrect: true, reason: '正確{せいかく}！「五十ページ」讀作{どくさ}「ごじゅうページ」。' },
            { text: 'いつじゅうページ', isCorrect: false, reason: '頁數{ページ}使用{しよう}する音讀{おんどく}「ご」。' },
            { text: 'ごじゅっページ', isCorrect: false, reason: '「ページ」前{まえ}不促音化{ふそくおんか}。' },
            { text: 'こじゅうページ', isCorrect: false, reason: '需要{じゅよう}濁音{だくおん}「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十ページ」使用{しよう}音讀{おんどく}「ごじゅう」＋外來語{がいらいご}「ページ」。',
            relatedRules: ['頁數{ページ}の表達{ひょうたつ}', '外來語{がいらいご}與數字{すうじ}の組合{くみあわせ}']
        },
        sourceItem: { value: 50, kanji: '五十', reading: 'ごじゅう' }
    },
    {
        id: 'num_tens_50_dial',
        category: 'numbers',
        subcategory: 'tens',
        type: 'dialogue',
        isTrap: false,
        stem: '何歳ですか？',
        stem_zh: '你幾歲？',
        dialogue: {
            speakerA: '何歳ですか？',
            speakerB: '＿＿歳です。（五十歲）'
        },
        options: [
            { text: 'ごじゅっさい', isCorrect: true, reason: '正確{せいかく}！「五十歳{ごじゅっさい}」，促音化{そくおんか}為「じゅっさい」。' },
            { text: 'ごじゅうさい', isCorrect: false, reason: '「歳{さい}」前{まえ}會促音化{そくおんか}，應{おう}是「じゅっさい」。' },
            { text: 'いつじゅっさい', isCorrect: false, reason: '年齡{ねんれい}使用{しよう}する音讀{おんどく}「ご」。' },
            { text: 'こじゅっさい', isCorrect: false, reason: '需要{じゅよう}濁音{だくおん}「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五十歳{ごじゅっさい}」中，「十{じゅう}」＋「歳{さい}」會促音化{そくおんか}，變成{へんせい}「じゅっさい」。',
            relatedRules: ['年齡{ねんれい}の促音化{そくおんか}', '50の發音{はつおん}']
        },
        sourceItem: { value: 50, kanji: '五十歳', reading: 'ごじゅっさい' }
    },

    // ===== 數字 60 的三題 =====
    {
        id: 'num_tens_60_pron',
        category: 'numbers',
        subcategory: 'tens',
        type: 'pronunciation',
        isTrap: false,
        stem: '「六十」的正確讀音是？',
        stem_zh: '「六十」的正確讀音是？',
        options: [
            { text: 'ろくじゅう', isCorrect: true, reason: '正確{せいかく}！「六十{ろくじゅう}」讀作{どくさ}「ろくじゅう」。' },
            { text: 'むっじゅう', isCorrect: false, reason: '「むっ」是訓讀{くんどく}，組合{くみあわせ}數字{すうじ}使用{しよう}する音讀{おんどく}。' },
            { text: 'ろっじゅう', isCorrect: false, reason: '「六十{ろくじゅう}」不促音化{ふそくおんか}，正確{せいかく}は「ろくじゅう」。' },
            { text: 'りくじゅう', isCorrect: false, reason: '「りく」是「陸{りく}」の讀法{よみかた}，數字{すうじ}讀む{よむ}「ろく」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六十{ろくじゅう}」讀作{どくさ}「ろくじゅう」，整十數{せいじゅうすう}不促音化{ふそくおんか}。',
            relatedRules: ['整十數{せいじゅうすう}の讀法{よみかた}', '60の發音{はつおん}']
        },
        sourceItem: { value: 60, kanji: '六十', reading: 'ろくじゅう' }
    },
    {
        id: 'num_tens_60_sent',
        category: 'numbers',
        subcategory: 'tens',
        type: 'sentence',
        isTrap: false,
        stem: '一時間は＿＿分です。',
        stem_zh: '一小時是六十分鐘。',
        options: [
            { text: 'ろくじゅっぷん', isCorrect: true, reason: '正確{せいかく}！「六十分{ろくじゅっぷん}」，「十{じゅう}」＋「分{ふん}」促音化{そくおんか}＋半濁音化{はんだくおんか}。' },
            { text: 'ろくじゅうふん', isCorrect: false, reason: '「分{ふん}」前{まえ}會促音化{そくおんか}＋半濁音化{はんだくおんか}，應{おう}是「じゅっぷん」。' },
            { text: 'むっじゅっぷん', isCorrect: false, reason: '分鐘{ぷん}使用{しよう}する音讀{おんどく}「ろく」。' },
            { text: 'ろくじゅぷん', isCorrect: false, reason: '不完整{ふかんせい}，正確{せいかく}は「ろくじゅっぷん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六十分{ろくじゅっぷん}」中，「十{じゅう}」＋「分{ふん}」會促音化{そくおんか}＋半濁音化{はんだくおんか}，變成{へんせい}「じゅっぷん」。',
            relatedRules: ['分鐘{ふん}の促音化{そくおんか}＋半濁音化{はんだくおんか}', '時間{じかん}の表達{ひょうたつ}']
        },
        sourceItem: { value: 60, kanji: '六十分', reading: 'ろくじゅっぷん' }
    },
    {
        id: 'num_tens_60_dial',
        category: 'numbers',
        subcategory: 'tens',
        type: 'dialogue',
        isTrap: false,
        stem: '何歳ですか？',
        stem_zh: '你幾歲？',
        dialogue: {
            speakerA: '何歳ですか？',
            speakerB: '＿＿歳です。（六十歲）'
        },
        options: [
            { text: 'ろくじゅっさい', isCorrect: true, reason: '正確{せいかく}！「六十歳{ろくじゅっさい}」，促音化{そくおんか}為「じゅっさい」。' },
            { text: 'ろくじゅうさい', isCorrect: false, reason: '「歳{さい}」前{まえ}會促音化{そくおんか}，應{おう}是「じゅっさい」。' },
            { text: 'むっじゅっさい', isCorrect: false, reason: '年齡{ねんれい}使用{しよう}する音讀{おんどく}「ろく」。' },
            { text: 'ろっじゅっさい', isCorrect: false, reason: '「六十{ろくじゅう}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六十歳{ろくじゅっさい}」中，「十{じゅう}」＋「歳{さい}」會促音化{そくおんか}，變成{へんせい}「じゅっさい」。',
            relatedRules: ['年齡{ねんれい}の促音化{そくおんか}', '60の發音{はつおん}']
        },
        sourceItem: { value: 60, kanji: '六十歳', reading: 'ろくじゅっさい' }
    },

    // ===== 數字 70 的三題 =====
    {
        id: 'num_tens_70_pron',
        category: 'numbers',
        subcategory: 'tens',
        type: 'pronunciation',
        isTrap: true,
        stem: '「七十」最常用的讀音是？',
        stem_zh: '「七十」最常用的讀音是？',
        options: [
            { text: 'しちじゅう', isCorrect: false, reason: '「しちじゅう」也正確{せいかく}，但為{ため}避免{ひめん}與「一{いち}」混淆{こんこう}，多用{おおくもちい}「ななじゅう」。' },
            { text: 'ななじゅう', isCorrect: true, reason: '正確{せいかく}！為{ため}避免{ひめん}與「一{いち}」混淆{こんこう}，日常{にちじょう}多く{おおく}使用{しよう}「ななじゅう」。' },
            { text: 'なじゅう', isCorrect: false, reason: '缺少{けっしょう}「な」，正確{せいかく}は「ななじゅう」。' },
            { text: 'ななつじゅう', isCorrect: false, reason: '「ななつ」是量詞{りょうし}讀法{よみかた}，不用於{もちいず}整十數{せいじゅうすう}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「七十{ななじゅう}」為{ため}避免{ひめん}與「一{いち}」混淆{こんこう}，日常{にちじょう}多く{おおく}使用{しよう}「ななじゅう」而非「しちじゅう」。',
            trapExplanation: '陷阱題{かんけいだい}，測試{そくし}避免{ひめん}混淆{こんこう}習慣{しゅうかん}的了解{りょうかい}。',
            relatedRules: ['七十{ななじゅう}の兩種{りょうしゅ}讀法{よみかた}', '避免{ひめん}混淆{こんこう}の習慣{しゅうかん}']
        },
        sourceItem: { value: 70, kanji: '七十', reading: 'ななじゅう' }
    },
    {
        id: 'num_tens_70_sent',
        category: 'numbers',
        subcategory: 'tens',
        type: 'sentence',
        isTrap: false,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書七十日圓。',
        options: [
            { text: 'ななじゅうえん', isCorrect: true, reason: '正確{せいかく}！「七十円{ななじゅうえん}」讀作{どくさ}「ななじゅうえん」。' },
            { text: 'しちじゅうえん', isCorrect: false, reason: '為{ため}避免{ひめん}混淆{こんこう}，多用{おおくもちい}「なな」。' },
            { text: 'ななじゅっえん', isCorrect: false, reason: '「円{えん}」前{まえ}不促音化{ふそくおんか}。' },
            { text: 'なじゅうえん', isCorrect: false, reason: '缺少{けっしょう}「な」，正確{せいかく}は「ななじゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七十円{ななじゅうえん}」使用{しよう}「なな」避免{ひめん}混淆{こんこう}。',
            relatedRules: ['金額{きんがく}の表達{ひょうたつ}', '70の避免{ひめん}混淆{こんこう}讀法{よみかた}']
        },
        sourceItem: { value: 70, kanji: '七十円', reading: 'ななじゅうえん' }
    },
    {
        id: 'num_tens_70_dial',
        category: 'numbers',
        subcategory: 'tens',
        type: 'dialogue',
        isTrap: false,
        stem: '何歳ですか？',
        stem_zh: '你幾歲？',
        dialogue: {
            speakerA: '何歳ですか？',
            speakerB: '＿＿歳です。（七十歲）'
        },
        options: [
            { text: 'ななじゅっさい', isCorrect: true, reason: '正確{せいかく}！「七十歳{ななじゅっさい}」，促音化{そくおんか}為「じゅっさい」。' },
            { text: 'しちじゅっさい', isCorrect: false, reason: '為{ため}避免{ひめん}混淆{こんこう}，多用{おおくもちい}「なな」。' },
            { text: 'ななじゅうさい', isCorrect: false, reason: '「歳{さい}」前{まえ}會促音化{そくおんか}，應{おう}是「じゅっさい」。' },
            { text: 'ななつじゅっさい', isCorrect: false, reason: '「ななつ」不用於{もちいず}整十{せいじゅう}年齡{ねんれい}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七十歳{ななじゅっさい}」使用{しよう}「なな」＋促音化{そくおんか}「じゅっさい」。',
            relatedRules: ['年齡{ねんれい}の促音化{そくおんか}', '70の避免{ひめん}混淆{こんこう}讀法{よみかた}']
        },
        sourceItem: { value: 70, kanji: '七十歳', reading: 'ななじゅっさい' }
    },

    // ===== 數字 80 的三題 =====
    {
        id: 'num_tens_80_pron',
        category: 'numbers',
        subcategory: 'tens',
        type: 'pronunciation',
        isTrap: false,
        stem: '「八十」的正確讀音是？',
        stem_zh: '「八十」的正確讀音是？',
        options: [
            { text: 'はちじゅう', isCorrect: true, reason: '正確{せいかく}！「八十{はちじゅう}」讀作{どくさ}「はちじゅう」。' },
            { text: 'やっじゅう', isCorrect: false, reason: '「やっ」是訓讀{くんどく}，組合{くみあわせ}數字{すうじ}使用{しよう}する音讀{おんどく}。' },
            { text: 'はっじゅう', isCorrect: false, reason: '「八十{はちじゅう}」不促音化{ふそくおんか}，正確{せいかく}は「はちじゅう」。' },
            { text: 'はちじゅ', isCorrect: false, reason: '少了{すくな}「う」，正確{せいかく}は「はちじゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八十{はちじゅう}」讀作{どくさ}「はちじゅう」，整十數{せいじゅうすう}不促音化{ふそくおんか}。',
            relatedRules: ['整十數{せいじゅうすう}の讀法{よみかた}', '80の發音{はつおん}']
        },
        sourceItem: { value: 80, kanji: '八十', reading: 'はちじゅう' }
    },
    {
        id: 'num_tens_80_sent',
        category: 'numbers',
        subcategory: 'tens',
        type: 'sentence',
        isTrap: false,
        stem: '私は＿＿点を取りました。',
        stem_zh: '我得了八十分。',
        options: [
            { text: 'はちじゅってん', isCorrect: true, reason: '正確{せいかく}！「八十点{はちじゅってん}」，「十{じゅう}」＋「点{てん}」促音化{そくおんか}。' },
            { text: 'はちじゅうてん', isCorrect: false, reason: '「点{てん}」前{まえ}會促音化{そくおんか}，應{おう}是「じゅってん」。' },
            { text: 'やっじゅってん', isCorrect: false, reason: '分數{ぶんすう}使用{しよう}する音讀{おんどく}「はち」。' },
            { text: 'はっじゅってん', isCorrect: false, reason: '「八十{はちじゅう}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八十点{はちじゅってん}」中，「十{じゅう}」＋「点{てん}」會促音化{そくおんか}，變成{へんせい}「じゅってん」。',
            relatedRules: ['分數{ぶんすう}の促音化{そくおんか}', '「点{てん}」の音變{おんへん}']
        },
        sourceItem: { value: 80, kanji: '八十点', reading: 'はちじゅってん' }
    },
    {
        id: 'num_tens_80_dial',
        category: 'numbers',
        subcategory: 'tens',
        type: 'dialogue',
        isTrap: false,
        stem: '何歳ですか？',
        stem_zh: '你幾歲？',
        dialogue: {
            speakerA: '何歳ですか？',
            speakerB: '＿＿歳です。（八十歲）'
        },
        options: [
            { text: 'はちじゅっさい', isCorrect: true, reason: '正確{せいかく}！「八十歳{はちじゅっさい}」，促音化{そくおんか}為「じゅっさい」。' },
            { text: 'はちじゅうさい', isCorrect: false, reason: '「歳{さい}」前{まえ}會促音化{そくおんか}，應{おう}是「じゅっさい」。' },
            { text: 'やっじゅっさい', isCorrect: false, reason: '年齡{ねんれい}使用{しよう}する音讀{おんどく}「はち」。' },
            { text: 'はっじゅっさい', isCorrect: false, reason: '「八十{はちじゅう}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八十歳{はちじゅっさい}」中，「十{じゅう}」＋「歳{さい}」會促音化{そくおんか}，變成{へんせい}「じゅっさい」。',
            relatedRules: ['年齡{ねんれい}の促音化{そくおんか}', '80の發音{はつおん}']
        },
        sourceItem: { value: 80, kanji: '八十歳', reading: 'はちじゅっさい' }
    },

    // ===== 數字 90 的三題 =====
    {
        id: 'num_tens_90_pron',
        category: 'numbers',
        subcategory: 'tens',
        type: 'pronunciation',
        isTrap: true,
        stem: '「九十」最常用的讀音是？',
        stem_zh: '「九十」最常用的讀音是？',
        options: [
            { text: 'くじゅう', isCorrect: false, reason: '「くじゅう」也正確{せいかく}，但為{ため}避諱{ひき}「苦{く}」，多用{おおくもちい}「きゅうじゅう」。' },
            { text: 'きゅうじゅう', isCorrect: true, reason: '正確{せいかく}！為{ため}避諱{ひき}「苦{く}」，日常{にちじょう}多く{おおく}使用{しよう}「きゅうじゅう」。' },
            { text: 'ここじゅう', isCorrect: false, reason: '「ここ」不是「九{きゅう}」の讀法{よみかた}。' },
            { text: 'きゅじゅう', isCorrect: false, reason: '少了{すくな}「う」，正確{せいかく}は「きゅうじゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「九十{きゅうじゅう}」為{ため}避諱{ひき}「苦{く}」，日常{にちじょう}多く{おおく}使用{しよう}「きゅうじゅう」而非「くじゅう」。',
            trapExplanation: '陷阱題{かんけいだい}，測試{そくし}避諱{ひき}習慣{しゅうかん}的了解{りょうかい}。',
            relatedRules: ['九十{きゅうじゅう}の避諱{ひき}讀法{よみかた}', '避諱{ひき}文化{ぶんか}']
        },
        sourceItem: { value: 90, kanji: '九十', reading: 'きゅうじゅう' }
    },
    {
        id: 'num_tens_90_sent',
        category: 'numbers',
        subcategory: 'tens',
        type: 'sentence',
        isTrap: false,
        stem: 'この本は＿＿円です。',
        stem_zh: '這本書九十日圓。',
        options: [
            { text: 'きゅうじゅうえん', isCorrect: true, reason: '正確{せいかく}！「九十円{きゅうじゅうえん}」讀作{どくさ}「きゅうじゅうえん」。' },
            { text: 'くじゅうえん', isCorrect: false, reason: '為{ため}避諱{ひき}「苦{く}」，多用{おおくもちい}「きゅう」。' },
            { text: 'きゅうじゅっえん', isCorrect: false, reason: '「円{えん}」前{まえ}不促音化{ふそくおんか}。' },
            { text: 'ここじゅうえん', isCorrect: false, reason: '「ここ」不是「九{きゅう}」の讀法{よみかた}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九十円{きゅうじゅうえん}」使用{しよう}「きゅう」避諱{ひき}「苦{く}」。',
            relatedRules: ['金額{きんがく}の表達{ひょうたつ}', '90の避諱{ひき}讀法{よみかた}']
        },
        sourceItem: { value: 90, kanji: '九十円', reading: 'きゅうじゅうえん' }
    },
    {
        id: 'num_tens_90_dial',
        category: 'numbers',
        subcategory: 'tens',
        type: 'dialogue',
        isTrap: false,
        stem: '何歳ですか？',
        stem_zh: '你幾歲？',
        dialogue: {
            speakerA: '何歳ですか？',
            speakerB: '＿＿歳です。（九十歲）'
        },
        options: [
            { text: 'きゅうじゅっさい', isCorrect: true, reason: '正確{せいかく}！「九十歳{きゅうじゅっさい}」，促音化{そくおんか}為「じゅっさい」。' },
            { text: 'くじゅっさい', isCorrect: false, reason: '為{ため}避諱{ひき}「苦{く}」，多用{おおくもちい}「きゅう」。' },
            { text: 'きゅうじゅうさい', isCorrect: false, reason: '「歳{さい}」前{まえ}會促音化{そくおんか}，應{おう}是「じゅっさい」。' },
            { text: 'ここじゅっさい', isCorrect: false, reason: '「ここ」不是「九{きゅう}」の讀法{よみかた}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九十歳{きゅうじゅっさい}」使用{しよう}「きゅう」＋促音化{そくおんか}「じゅっさい」。',
            relatedRules: ['年齡{ねんれい}の促音化{そくおんか}', '90の避諱{ひき}讀法{よみかた}']
        },
        sourceItem: { value: 90, kanji: '九十歳', reading: 'きゅうじゅっさい' }
    },

    // ===== 數字 19 的三題 =====
    {
        id: 'num_tens_19_pron',
        category: 'numbers',
        subcategory: 'tens',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十九」最常用的讀音是？',
        stem_zh: '「十九」最常用的讀音是？',
        options: [
            { text: 'じゅうく', isCorrect: false, reason: '「じゅうく」也正確{せいかく}，但為{ため}避諱{ひき}「苦{く}」，日常{にちじょう}多用{おおくもちい}「じゅうきゅう」。' },
            { text: 'じゅうきゅう', isCorrect: true, reason: '正確{せいかく}！為{ため}避諱{ひき}「苦{く}」，日常{にちじょう}多く{おおく}使用{しよう}「じゅうきゅう」。' },
            { text: 'じゅここの', isCorrect: false, reason: '組合{くみあわせ}數字{すうじ}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'じゅきゅう', isCorrect: false, reason: '少了{すくな}「う」，正確{せいかく}は「じゅうきゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十九{じゅうきゅう}」有兩種{りょうしゅ}讀法{よみかた}：「じゅうく」和「じゅうきゅう」。由於{ゆえ}「く」與「苦{く}」同音{どうおん}，日常{にちじょう}多く{おおく}使用{しよう}「じゅうきゅう」。',
            trapExplanation: '陷阱題{かんけいだい}，測試{そくし}避諱{ひき}習慣{しゅうかん}的了解{りょうかい}。',
            relatedRules: ['十九{じゅうきゅう}の兩種{りょうしゅ}讀法{よみかた}', '避諱{ひき}文化{ぶんか}']
        },
        sourceItem: { value: 19, kanji: '十九', reading: 'じゅうきゅう / じゅうく' }
    },
    {
        id: 'num_tens_19_sent',
        category: 'numbers',
        subcategory: 'tens',
        type: 'sentence',
        isTrap: false,
        stem: '私は＿＿歳です。',
        stem_zh: '我十九歲。',
        options: [
            { text: 'じゅうきゅうさい', isCorrect: true, reason: '正確{せいかく}！「十九歳{じゅうきゅうさい}」讀作{どくさ}「じゅうきゅうさい」。' },
            { text: 'じゅうくさい', isCorrect: false, reason: '為{ため}避諱{ひき}「苦{く}」，多用{おおくもちい}「じゅうきゅう」。' },
            { text: 'じゅここのさい', isCorrect: false, reason: '年齡{ねんれい}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'じゅうきゅっさい', isCorrect: false, reason: '19不促音化{ふそくおんか}，正確{せいかく}は「じゅうきゅうさい」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十九歳{じゅうきゅうさい}」使用{しよう}「きゅう」避諱{ひき}「苦{く}」。',
            relatedRules: ['年齡{ねんれい}の表達{ひょうたつ}', '19の避諱{ひき}讀法{よみかた}']
        },
        sourceItem: { value: 19, kanji: '十九歳', reading: 'じゅうきゅうさい' }
    },
    {
        id: 'num_tens_19_dial',
        category: 'numbers',
        subcategory: 'tens',
        type: 'dialogue',
        isTrap: false,
        stem: '今日は何日ですか？',
        stem_zh: '今天幾號？',
        dialogue: {
            speakerA: '今日は何日ですか？',
            speakerB: '＿＿日です。（十九號）'
        },
        options: [
            { text: 'じゅうきゅうにち', isCorrect: true, reason: '正確{せいかく}！「十九日{じゅうきゅうにち}」讀作{どくさ}「じゅうきゅうにち」。' },
            { text: 'じゅうくにち', isCorrect: false, reason: '為{ため}避諱{ひき}「苦{く}」，日期{にっき}也多用{おおくもちい}「きゅう」。' },
            { text: 'じゅうここのか', isCorrect: false, reason: '19日{じゅうきゅうにち}使用{しよう}しない訓讀{くんどく}「ここのか」。' },
            { text: 'じゅここにち', isCorrect: false, reason: '組合{くみあわせ}讀法{よみかた}錯誤{さくご}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十九日{じゅうきゅうにち}」讀作{どくさ}「じゅうきゅうにち」，使用{しよう}音讀{おんどく}組合{くみあわせ}。',
            relatedRules: ['日期{にっき}の讀法{よみかた}', '11-19日{にち}使用{しよう}音讀{おんどく}']
        },
        sourceItem: { value: 19, kanji: '十九日', reading: 'じゅうきゅうにち' }
    },

    // ===== 數字 13 的三題 =====
    {
        id: 'num_tens_13_pron', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「十三」的正確讀音是？', stem_zh: '「十三」的正確讀音是？',
        options: [
            { text: 'じゅうさん', isCorrect: true, reason: '正確！「十三」讀作「じゅうさん」。' },
            { text: 'とみ', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'じゅうみ', isCorrect: false, reason: '「み」是訓讀，應使用音讀「さん」。' },
            { text: 'じゅさん', isCorrect: false, reason: '少了「う」，正確是「じゅうさん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十三」讀作「じゅうさん」，是音讀組合。', relatedRules: ['十位數の組合規則'] },
        sourceItem: { value: 13, kanji: '十三', reading: 'じゅうさん' }
    },
    {
        id: 'num_tens_13_sent', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '私は＿＿歳です。（十三歲）', stem_zh: '我十三歲。',
        options: [
            { text: 'じゅうさんさい', isCorrect: true, reason: '正確！「十三歳」讀「じゅうさんさい」。' },
            { text: 'じゅうみさい', isCorrect: false, reason: '年齡使用音讀。' },
            { text: 'じゅっさんさい', isCorrect: false, reason: '「十三」不促音化。' },
            { text: 'とみさい', isCorrect: false, reason: '年齡使用音讀組合。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十三歳」讀「じゅうさんさい」。', relatedRules: ['年齡の讀法'] },
        sourceItem: { value: 13, kanji: '十三歳', reading: 'じゅうさんさい' }
    },
    {
        id: 'num_tens_13_dial', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '日期詢問', stem_zh: '日期詢問',
        dialogue: { speakerA: '今日は何日ですか？', speakerB: '＿＿です。（十三日）' },
        options: [
            { text: 'じゅうさんにち', isCorrect: true, reason: '正確！「十三日」讀「じゅうさんにち」。' },
            { text: 'とみか', isCorrect: false, reason: '11日以上使用音讀。' },
            { text: 'じゅうみっか', isCorrect: false, reason: '11日以上不用訓讀日期。' },
            { text: 'じゅっさんにち', isCorrect: false, reason: '「十三」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十三日」讀「じゅうさんにち」，11日以上使用音讀。', relatedRules: ['日期の讀法'] },
        sourceItem: { value: 13, kanji: '十三日', reading: 'じゅうさんにち' }
    },

    // ===== 數字 15 的三題 =====
    {
        id: 'num_tens_15_pron', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「十五」的正確讀音是？', stem_zh: '「十五」的正確讀音是？',
        options: [
            { text: 'じゅうご', isCorrect: true, reason: '正確！「十五」讀作「じゅうご」。' },
            { text: 'といつ', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'じゅういつ', isCorrect: false, reason: '「いつ」是訓讀，應使用音讀「ご」。' },
            { text: 'じゅご', isCorrect: false, reason: '少了「う」，正確是「じゅうご」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十五」讀作「じゅうご」。', relatedRules: ['十位數の組合規則'] },
        sourceItem: { value: 15, kanji: '十五', reading: 'じゅうご' }
    },
    {
        id: 'num_tens_15_sent', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '＿＿分後に出発します。（十五分）', stem_zh: '十五分鐘後出發。',
        options: [
            { text: 'じゅうごふん', isCorrect: true, reason: '正確！「十五分」讀「じゅうごふん」。' },
            { text: 'じゅうごぷん', isCorrect: false, reason: '「五」後「分」讀「ふん」不是「ぷん」。' },
            { text: 'じゅっごふん', isCorrect: false, reason: '「十五」不促音化。' },
            { text: 'といつふん', isCorrect: false, reason: '分鐘使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十五分」讀「じゅうごふん」，「五」後保持原音。', relatedRules: ['分の讀法'] },
        sourceItem: { value: 15, kanji: '十五分', reading: 'じゅうごふん' }
    },
    {
        id: 'num_tens_15_dial', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '日期詢問', stem_zh: '日期詢問',
        dialogue: { speakerA: '給料日はいつですか？', speakerB: '＿＿です。（十五日）' },
        options: [
            { text: 'じゅうごにち', isCorrect: true, reason: '正確！「十五日」讀「じゅうごにち」。' },
            { text: 'といつか', isCorrect: false, reason: '11日以上使用音讀。' },
            { text: 'じゅういつか', isCorrect: false, reason: '11日以上不用訓讀日期。' },
            { text: 'じゅっごにち', isCorrect: false, reason: '「十五」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十五日」讀「じゅうごにち」。', relatedRules: ['日期の讀法'] },
        sourceItem: { value: 15, kanji: '十五日', reading: 'じゅうごにち' }
    },

    // ===== 數字 16 的三題 =====
    {
        id: 'num_tens_16_pron', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「十六」的正確讀音是？', stem_zh: '「十六」的正確讀音是？',
        options: [
            { text: 'じゅうろく', isCorrect: true, reason: '正確！「十六」讀作「じゅうろく」。' },
            { text: 'とむ', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'じゅうむ', isCorrect: false, reason: '「む」是訓讀，應使用音讀「ろく」。' },
            { text: 'じゅろく', isCorrect: false, reason: '少了「う」，正確是「じゅうろく」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十六」讀作「じゅうろく」。', relatedRules: ['十位數の組合規則'] },
        sourceItem: { value: 16, kanji: '十六', reading: 'じゅうろく' }
    },
    {
        id: 'num_tens_16_sent', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '私は＿＿歳です。（十六歲）', stem_zh: '我十六歲。',
        options: [
            { text: 'じゅうろくさい', isCorrect: true, reason: '正確！「十六歳」讀「じゅうろくさい」。' },
            { text: 'じゅうむさい', isCorrect: false, reason: '年齡使用音讀。' },
            { text: 'じゅっろくさい', isCorrect: false, reason: '「十六」不促音化。' },
            { text: 'とむさい', isCorrect: false, reason: '年齡使用音讀組合。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十六歳」讀「じゅうろくさい」。', relatedRules: ['年齡の讀法'] },
        sourceItem: { value: 16, kanji: '十六歳', reading: 'じゅうろくさい' }
    },
    {
        id: 'num_tens_16_dial', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '日期詢問', stem_zh: '日期詢問',
        dialogue: { speakerA: '誕生日はいつですか？', speakerB: '＿＿です。（十六日）' },
        options: [
            { text: 'じゅうろくにち', isCorrect: true, reason: '正確！「十六日」讀「じゅうろくにち」。' },
            { text: 'とむいか', isCorrect: false, reason: '11日以上使用音讀。' },
            { text: 'じゅうむいか', isCorrect: false, reason: '11日以上不用訓讀日期。' },
            { text: 'じゅっろくにち', isCorrect: false, reason: '「十六」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十六日」讀「じゅうろくにち」。', relatedRules: ['日期の讀法'] },
        sourceItem: { value: 16, kanji: '十六日', reading: 'じゅうろくにち' }
    },

    // ===== 數字 17 的三題 =====
    {
        id: 'num_tens_17_pron', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '「十七」最常用的讀音是？', stem_zh: '「十七」最常用的讀音是？',
        options: [
            { text: 'じゅうしち', isCorrect: false, reason: '「じゅうしち」也正確，但為避免與「十一」混淆，多用「じゅうなな」。' },
            { text: 'じゅうなな', isCorrect: true, reason: '正確！為避免與「十一」混淆，日常多使用「じゅうなな」。' },
            { text: 'となな', isCorrect: false, reason: '組合數字使用音讀「じゅう」。' },
            { text: 'じゅなな', isCorrect: false, reason: '少了「う」，正確是「じゅうなな」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「十七」為避免混淆，日常多用「じゅうなな」。', trapExplanation: '這是陷阱題，測試避免混淆的習慣。', relatedRules: ['十七の兩種讀法'] },
        sourceItem: { value: 17, kanji: '十七', reading: 'じゅうなな' }
    },
    {
        id: 'num_tens_17_sent', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '私は＿＿歳です。（十七歲）', stem_zh: '我十七歲。',
        options: [
            { text: 'じゅうななさい', isCorrect: true, reason: '正確！「十七歳」讀「じゅうななさい」。' },
            { text: 'じゅうしちさい', isCorrect: false, reason: '為避免混淆，多用「なな」。' },
            { text: 'とななさい', isCorrect: false, reason: '年齡使用音讀組合。' },
            { text: 'じゅうなのさい', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十七歳」讀「じゅうななさい」。', relatedRules: ['年齡の讀法'] },
        sourceItem: { value: 17, kanji: '十七歳', reading: 'じゅうななさい' }
    },
    {
        id: 'num_tens_17_dial', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '日期詢問', stem_zh: '日期詢問',
        dialogue: { speakerA: '次の試験はいつですか？', speakerB: '＿＿です。（十七日）' },
        options: [
            { text: 'じゅうしちにち', isCorrect: true, reason: '正確！日期中「十七日」可讀「じゅうしちにち」。' },
            { text: 'じゅうなのか', isCorrect: false, reason: '11日以上不用訓讀日期。' },
            { text: 'とななか', isCorrect: false, reason: '11日以上使用音讀。' },
            { text: 'じゅっしちにち', isCorrect: false, reason: '「十七」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十七日」讀「じゅうしちにち」或「じゅうななにち」。', relatedRules: ['日期の讀法'] },
        sourceItem: { value: 17, kanji: '十七日', reading: 'じゅうしちにち' }
    },

    // ===== 數字 18 的三題 =====
    {
        id: 'num_tens_18_pron', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「十八」的正確讀音是？', stem_zh: '「十八」的正確讀音是？',
        options: [
            { text: 'じゅうはち', isCorrect: true, reason: '正確！「十八」讀作「じゅうはち」。' },
            { text: 'とや', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'じゅうや', isCorrect: false, reason: '「や」是訓讀，應使用音讀「はち」。' },
            { text: 'じゅはち', isCorrect: false, reason: '少了「う」，正確是「じゅうはち」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十八」讀作「じゅうはち」。', relatedRules: ['十位數の組合規則'] },
        sourceItem: { value: 18, kanji: '十八', reading: 'じゅうはち' }
    },
    {
        id: 'num_tens_18_sent', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '彼女は＿＿歳です。（十八歲）', stem_zh: '她十八歲。',
        options: [
            { text: 'じゅうはっさい', isCorrect: true, reason: '正確！「十八歳」讀「じゅうはっさい」，「八」促音化。' },
            { text: 'じゅうはちさい', isCorrect: false, reason: '「八」後接「歳」會促音化。' },
            { text: 'とやさい', isCorrect: false, reason: '年齡使用音讀組合。' },
            { text: 'じゅうやっさい', isCorrect: false, reason: '「や」是訓讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十八歳」讀「じゅうはっさい」，「八」＋「歳」促音化。', relatedRules: ['年齡の讀法', '八の促音化'] },
        sourceItem: { value: 18, kanji: '十八歳', reading: 'じゅうはっさい' }
    },
    {
        id: 'num_tens_18_dial', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '日期詢問', stem_zh: '日期詢問',
        dialogue: { speakerA: '約束は何日ですか？', speakerB: '＿＿です。（十八日）' },
        options: [
            { text: 'じゅうはちにち', isCorrect: true, reason: '正確！「十八日」讀「じゅうはちにち」。' },
            { text: 'とようか', isCorrect: false, reason: '11日以上使用音讀。' },
            { text: 'じゅうようか', isCorrect: false, reason: '11日以上不用訓讀日期。' },
            { text: 'じゅっはちにち', isCorrect: false, reason: '「十八」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十八日」讀「じゅうはちにち」。', relatedRules: ['日期の讀法'] },
        sourceItem: { value: 18, kanji: '十八日', reading: 'じゅうはちにち' }
    },

    // ===== 更多應用題目 =====
    {
        id: 'num_tens_extra_1', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '「二十四日」的正確讀音是？', stem_zh: '「二十四日」的正確讀音是？',
        options: [
            { text: 'にじゅうよんにち', isCorrect: false, reason: '陷阱！「二十四日」保留「よっか」的讀法。' },
            { text: 'にじゅうよっか', isCorrect: true, reason: '正確！「二十四日」讀「にじゅうよっか」。' },
            { text: 'にじゅうしにち', isCorrect: false, reason: '日期中「四」讀「よ」。' },
            { text: 'はつよっか', isCorrect: false, reason: '「二十」讀「にじゅう」。' }
        ],
        correctIndex: 1,
        explanation: { correctRule: '「二十四日」讀「にじゅうよっか」，保留「よっか」的讀法。', trapExplanation: '這是陷阱題，14日和24日保留「よっか」。', relatedRules: ['日期の特殊讀法'] },
        sourceItem: { value: 24, kanji: '二十四日', reading: 'にじゅうよっか' }
    },
    {
        id: 'num_tens_extra_2', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: 'クラスには＿＿人います。（二十五人）', stem_zh: '班上有二十五個人。',
        options: [
            { text: 'にじゅうごにん', isCorrect: true, reason: '正確！「二十五人」讀「にじゅうごにん」。' },
            { text: 'にじゅういつにん', isCorrect: false, reason: '人數使用音讀。' },
            { text: 'はつごにん', isCorrect: false, reason: '「二十」讀「にじゅう」。' },
            { text: 'にじゅっごにん', isCorrect: false, reason: '「二十五」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十五人」讀「にじゅうごにん」。', relatedRules: ['人數の讀法'] },
        sourceItem: { value: 25, kanji: '二十五人', reading: 'にじゅうごにん' }
    },
    {
        id: 'num_tens_extra_3', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '年齡詢問', stem_zh: '年齡詢問',
        dialogue: { speakerA: '何歳ですか？', speakerB: '＿＿です。（二十一歲）' },
        options: [
            { text: 'にじゅういっさい', isCorrect: true, reason: '正確！「二十一歳」讀「にじゅういっさい」。' },
            { text: 'にじゅういちさい', isCorrect: false, reason: '「一」＋「歳」促音化。' },
            { text: 'はたちいち', isCorrect: false, reason: '「はたち」只用於20歲。' },
            { text: 'にじゅうひとさい', isCorrect: false, reason: '年齡使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十一歳」讀「にじゅういっさい」，「一」促音化。', relatedRules: ['年齡の讀法'] },
        sourceItem: { value: 21, kanji: '二十一歳', reading: 'にじゅういっさい' }
    },
    {
        id: 'num_tens_extra_4', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「三十一日」的正確讀音是？', stem_zh: '「三十一日」的正確讀音是？',
        options: [
            { text: 'さんじゅういちにち', isCorrect: true, reason: '正確！「三十一日」讀「さんじゅういちにち」。' },
            { text: 'みそついたち', isCorrect: false, reason: '現代日語不用這個讀法。' },
            { text: 'さんじゅういっか', isCorrect: false, reason: '31日不用訓讀。' },
            { text: 'さんじゅっいちにち', isCorrect: false, reason: '「三十一」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三十一日」讀「さんじゅういちにち」。', relatedRules: ['日期の讀法'] },
        sourceItem: { value: 31, kanji: '三十一日', reading: 'さんじゅういちにち' }
    },
    {
        id: 'num_tens_extra_5', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: 'この本は＿＿ページあります。（三十五頁）', stem_zh: '這本書有三十五頁。',
        options: [
            { text: 'さんじゅうごページ', isCorrect: true, reason: '正確！「三十五ページ」。' },
            { text: 'みそごページ', isCorrect: false, reason: '頁數使用音讀。' },
            { text: 'さんじゅっごページ', isCorrect: false, reason: '「三十五」不促音化。' },
            { text: 'さんじゅういつページ', isCorrect: false, reason: '「五」讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三十五ページ」讀「さんじゅうごページ」。', relatedRules: ['頁數の讀法'] },
        sourceItem: { value: 35, kanji: '三十五', reading: 'さんじゅうご' }
    },
    {
        id: 'num_tens_extra_6', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '金額詢問', stem_zh: '金額詢問',
        dialogue: { speakerA: 'これはいくらですか？', speakerB: '＿＿円です。（四十五圓）' },
        options: [
            { text: 'よんじゅうごえん', isCorrect: true, reason: '正確！「四十五円」讀「よんじゅうごえん」。' },
            { text: 'しじゅうごえん', isCorrect: false, reason: '避諱「死」，多用「よん」。' },
            { text: 'よんじゅっごえん', isCorrect: false, reason: '「四十五」不促音化。' },
            { text: 'よじゅうごえん', isCorrect: false, reason: '缺少「ん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四十五円」讀「よんじゅうごえん」。', relatedRules: ['金額の讀法'] },
        sourceItem: { value: 45, kanji: '四十五円', reading: 'よんじゅうごえん' }
    },
    {
        id: 'num_tens_extra_7', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「五十五」的正確讀音是？', stem_zh: '「五十五」的正確讀音是？',
        options: [
            { text: 'ごじゅうご', isCorrect: true, reason: '正確！「五十五」讀「ごじゅうご」。' },
            { text: 'いつじゅういつ', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'ごじゅっご', isCorrect: false, reason: '「五十五」不促音化。' },
            { text: 'こじゅうご', isCorrect: false, reason: '「五」讀「ご」不是「こ」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五十五」讀「ごじゅうご」。', relatedRules: ['數字組合の讀法'] },
        sourceItem: { value: 55, kanji: '五十五', reading: 'ごじゅうご' }
    },
    {
        id: 'num_tens_extra_8', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '一時間は＿＿分です。', stem_zh: '一小時是六十分鐘。',
        options: [
            { text: 'ろくじゅっぷん', isCorrect: true, reason: '正確！「六十分」讀「ろくじゅっぷん」。' },
            { text: 'ろくじゅうふん', isCorrect: false, reason: '「十」＋「分」促音化+半濁音化。' },
            { text: 'むじゅっぷん', isCorrect: false, reason: '分鐘使用音讀。' },
            { text: 'ろくじゅぷん', isCorrect: false, reason: '少了促音。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六十分」讀「ろくじゅっぷん」。', relatedRules: ['分の讀法'] },
        sourceItem: { value: 60, kanji: '六十分', reading: 'ろくじゅっぷん' }
    },
    {
        id: 'num_tens_extra_9', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '人數詢問', stem_zh: '人數詢問',
        dialogue: { speakerA: '参加者は何人ですか？', speakerB: '＿＿人です。（六十五人）' },
        options: [
            { text: 'ろくじゅうごにん', isCorrect: true, reason: '正確！「六十五人」讀「ろくじゅうごにん」。' },
            { text: 'むじゅうごにん', isCorrect: false, reason: '人數使用音讀。' },
            { text: 'ろくじゅっごにん', isCorrect: false, reason: '「六十五」不促音化。' },
            { text: 'ろくじゅういつにん', isCorrect: false, reason: '「五」讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六十五人」讀「ろくじゅうごにん」。', relatedRules: ['人數の讀法'] },
        sourceItem: { value: 65, kanji: '六十五人', reading: 'ろくじゅうごにん' }
    },
    {
        id: 'num_tens_extra_10', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「七十七」的正確讀音是？', stem_zh: '「七十七」的正確讀音是？',
        options: [
            { text: 'ななじゅうなな', isCorrect: true, reason: '正確！「七十七」讀「ななじゅうなな」。' },
            { text: 'しちじゅうしち', isCorrect: false, reason: '為避免混淆，多用「なな」。' },
            { text: 'ななじゅっなな', isCorrect: false, reason: '「七十七」不促音化。' },
            { text: 'なじゅうなな', isCorrect: false, reason: '缺少「な」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七十七」讀「ななじゅうなな」。', relatedRules: ['數字組合の讀法'] },
        sourceItem: { value: 77, kanji: '七十七', reading: 'ななじゅうなな' }
    },
    {
        id: 'num_tens_extra_11', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '私は＿＿点を取りました。（七十五分）', stem_zh: '我得了七十五分。',
        options: [
            { text: 'ななじゅうごてん', isCorrect: true, reason: '正確！「七十五点」讀「ななじゅうごてん」。' },
            { text: 'しちじゅうごてん', isCorrect: false, reason: '為避免混淆，多用「なな」。' },
            { text: 'ななじゅっごてん', isCorrect: false, reason: '「七十五」不促音化。' },
            { text: 'ななじゅういつてん', isCorrect: false, reason: '「五」讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七十五点」讀「ななじゅうごてん」。', relatedRules: ['分數の讀法'] },
        sourceItem: { value: 75, kanji: '七十五点', reading: 'ななじゅうごてん' }
    },
    {
        id: 'num_tens_extra_12', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '金額詢問', stem_zh: '金額詢問',
        dialogue: { speakerA: '合計はいくらですか？', speakerB: '＿＿円です。（八十八圓）' },
        options: [
            { text: 'はちじゅうはちえん', isCorrect: true, reason: '正確！「八十八円」讀「はちじゅうはちえん」。' },
            { text: 'やじゅうやえん', isCorrect: false, reason: '金額使用音讀。' },
            { text: 'はちじゅっぱちえん', isCorrect: false, reason: '「八十八」不促音化。' },
            { text: 'はっじゅうはちえん', isCorrect: false, reason: '「八十」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八十八円」讀「はちじゅうはちえん」。', relatedRules: ['金額の讀法'] },
        sourceItem: { value: 88, kanji: '八十八円', reading: 'はちじゅうはちえん' }
    },
    {
        id: 'num_tens_extra_13', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「九十九」的正確讀音是？', stem_zh: '「九十九」的正確讀音是？',
        options: [
            { text: 'きゅうじゅうきゅう', isCorrect: true, reason: '正確！「九十九」讀「きゅうじゅうきゅう」。' },
            { text: 'くじゅうく', isCorrect: false, reason: '為避諱「苦」，多用「きゅう」。' },
            { text: 'きゅうじゅっきゅう', isCorrect: false, reason: '「九十九」不促音化。' },
            { text: 'ここじゅうここ', isCorrect: false, reason: '「ここ」不是「九」的讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九十九」讀「きゅうじゅうきゅう」。', relatedRules: ['數字組合の讀法'] },
        sourceItem: { value: 99, kanji: '九十九', reading: 'きゅうじゅうきゅう' }
    },
    {
        id: 'num_tens_extra_14', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '試験は＿＿点満点です。（一百分滿分）', stem_zh: '考試滿分一百分。',
        options: [
            { text: 'ひゃくてん', isCorrect: true, reason: '正確！「百点」讀「ひゃくてん」。' },
            { text: 'ひゃってん', isCorrect: false, reason: '「百」後不促音化。' },
            { text: 'もてん', isCorrect: false, reason: '分數使用音讀。' },
            { text: 'いちひゃくてん', isCorrect: false, reason: '「百」前面不加「いち」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「百点」讀「ひゃくてん」。', relatedRules: ['分數の讀法'] },
        sourceItem: { value: 100, kanji: '百点', reading: 'ひゃくてん' }
    },
    {
        id: 'num_tens_extra_15', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '年齡詢問', stem_zh: '年齡詢問',
        dialogue: { speakerA: '祖父は何歳ですか？', speakerB: '＿＿です。（九十五歲）' },
        options: [
            { text: 'きゅうじゅうごさい', isCorrect: true, reason: '正確！「九十五歳」讀「きゅうじゅうごさい」。' },
            { text: 'くじゅうごさい', isCorrect: false, reason: '為避諱「苦」，多用「きゅう」。' },
            { text: 'きゅうじゅっごさい', isCorrect: false, reason: '「九十五」不促音化。' },
            { text: 'きゅうじゅういつさい', isCorrect: false, reason: '「五」讀「ご」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九十五歳」讀「きゅうじゅうごさい」。', relatedRules: ['年齡の讀法'] },
        sourceItem: { value: 95, kanji: '九十五歳', reading: 'きゅうじゅうごさい' }
    },

    // ===== 比較題與陷阱題 =====
    {
        id: 'num_tens_compare_1', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '以下哪組讀法都正確？', stem_zh: '以下哪組讀法都正確？',
        options: [
            { text: '14(じゅうよん)、24(にじゅうよん)、34(さんじゅうよん)', isCorrect: true, reason: '正確！這些都是正確的讀法。' },
            { text: '14(じゅうし)、24(にじゅうし)、34(さんじゅうし)', isCorrect: false, reason: '雖然語法正確，但日常避諱「死」。' },
            { text: '14(とよっつ)、24(はたよっつ)、34(みそよっつ)', isCorrect: false, reason: '這些不是正確的組合讀法。' },
            { text: '14(じゅっし)、24(にじゅっし)、34(さんじゅっし)', isCorrect: false, reason: '這些讀法錯誤。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '14、24、34等含4的數字，日常多用「よん」避諱「死」。', trapExplanation: '這是陷阱題，測試避諱習慣。', relatedRules: ['四の避諱讀法'] },
        sourceItem: { value: 0, kanji: '含4數字', reading: '避諱讀法' }
    },
    {
        id: 'num_tens_compare_2', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '以下哪組日期讀法正確？', stem_zh: '以下哪組日期讀法正確？',
        options: [
            { text: '14日(じゅうよっか)、24日(にじゅうよっか)、20日(はつか)', isCorrect: true, reason: '正確！這些都是特殊讀法。' },
            { text: '14日(じゅうよんにち)、24日(にじゅうよんにち)、20日(にじゅうにち)', isCorrect: false, reason: '這些日期有特殊讀法。' },
            { text: '14日(とよっか)、24日(はたよっか)、20日(ふたじゅう)', isCorrect: false, reason: '這些讀法錯誤。' },
            { text: '全部用音讀', isCorrect: false, reason: '這些日期有訓讀保留。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '14日、24日保留「よっか」，20日讀「はつか」。', trapExplanation: '這是陷阱題，測試日期特殊讀法。', relatedRules: ['日期の特殊讀法'] },
        sourceItem: { value: 0, kanji: '特殊日期', reading: '特殊讀法' }
    },
    {
        id: 'num_tens_compare_3', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '以下哪個說法正確？', stem_zh: '以下哪個說法正確？',
        options: [
            { text: '整十數後接「歳」會促音化', isCorrect: true, reason: '正確！如30歳讀「さんじゅっさい」。' },
            { text: '整十數後接「歳」不變化', isCorrect: false, reason: '錯誤，會促音化。' },
            { text: '整十數後接「歳」會濁音化', isCorrect: false, reason: '錯誤，是促音化不是濁音化。' },
            { text: '只有20歳會變化', isCorrect: false, reason: '錯誤，所有整十歲都會促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十」＋「歳」會促音化為「じゅっさい」。', trapExplanation: '這是陷阱題，測試促音化規則。', relatedRules: ['歳の促音化'] },
        sourceItem: { value: 0, kanji: '〜歳', reading: '促音化規則' }
    },
    {
        id: 'num_tens_compare_4', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '以下哪個說法正確？', stem_zh: '以下哪個說法正確？',
        options: [
            { text: '整十數後接「分」會促音化+半濁音化', isCorrect: true, reason: '正確！如60分讀「ろくじゅっぷん」。' },
            { text: '整十數後接「分」只會濁音化', isCorrect: false, reason: '錯誤，是促音化+半濁音化。' },
            { text: '整十數後接「分」不變化', isCorrect: false, reason: '錯誤，會促音化+半濁音化。' },
            { text: '只有10分會變化', isCorrect: false, reason: '錯誤，所有整十分都會變化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十」＋「分」會促音化+半濁音化為「じゅっぷん」。', trapExplanation: '這是陷阱題，測試分的音變規則。', relatedRules: ['分の音變規則'] },
        sourceItem: { value: 0, kanji: '〜分', reading: '音變規則' }
    },

    // ===== 綜合複習題 =====
    {
        id: 'num_tens_review_1', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '十位數的基本組合規則是？', stem_zh: '十位數的基本組合規則是？',
        options: [
            { text: '使用音讀組合，如「にじゅう」「さんじゅう」', isCorrect: true, reason: '正確！十位數使用音讀組合。' },
            { text: '使用訓讀組合', isCorrect: false, reason: '錯誤，十位數用音讀。' },
            { text: '可以隨意混合音讀訓讀', isCorrect: false, reason: '錯誤，有固定規則。' },
            { text: '每個數字讀法都不同', isCorrect: false, reason: '錯誤，有規律可循。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '十位數基本使用音讀組合。', relatedRules: ['十位數の基本規則'] },
        sourceItem: { value: 0, kanji: '十位數', reading: '基本規則' }
    },
    {
        id: 'num_tens_review_2', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '哪些數字在日常中常用「避諱讀法」？', stem_zh: '哪些數字在日常中常用「避諱讀法」？',
        options: [
            { text: '4(よん)、7(なな)、9(きゅう)', isCorrect: true, reason: '正確！避諱「死」「一」「苦」的混淆。' },
            { text: '只有4避諱', isCorrect: false, reason: '錯誤，7和9也有避諱讀法。' },
            { text: '1-10都有避諱讀法', isCorrect: false, reason: '錯誤，主要是4、7、9。' },
            { text: '沒有數字需要避諱', isCorrect: false, reason: '錯誤，日本文化中有避諱習慣。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '4、7、9有避諱讀法：よん、なな、きゅう。', relatedRules: ['避諱讀法'] },
        sourceItem: { value: 0, kanji: '避諱', reading: '讀法' }
    },
    {
        id: 'num_tens_review_3', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「二十」相關的特殊讀法有哪些？', stem_zh: '「二十」相關的特殊讀法有哪些？',
        options: [
            { text: '二十歳(はたち)、二十日(はつか)', isCorrect: true, reason: '正確！這兩個是完全特殊的讀法。' },
            { text: '只有二十歳特殊', isCorrect: false, reason: '錯誤，二十日也特殊。' },
            { text: '只有二十日特殊', isCorrect: false, reason: '錯誤，二十歳也特殊。' },
            { text: '二十沒有特殊讀法', isCorrect: false, reason: '錯誤，有兩個重要的特殊讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十歳」讀「はたち」，「二十日」讀「はつか」。', relatedRules: ['二十の特殊讀法'] },
        sourceItem: { value: 20, kanji: '二十', reading: '特殊讀法' }
    },
    {
        id: 'num_tens_extra_16', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '授業は＿＿分です。（四十五分鐘）', stem_zh: '課堂是四十五分鐘。',
        options: [
            { text: 'よんじゅうごふん', isCorrect: true, reason: '正確！「四十五分」讀「よんじゅうごふん」。' },
            { text: 'しじゅうごふん', isCorrect: false, reason: '避諱「死」，多用「よん」。' },
            { text: 'よんじゅうごぷん', isCorrect: false, reason: '「五」後「分」讀「ふん」。' },
            { text: 'よじゅうごふん', isCorrect: false, reason: '缺少「ん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四十五分」讀「よんじゅうごふん」。', relatedRules: ['分の讀法'] },
        sourceItem: { value: 45, kanji: '四十五分', reading: 'よんじゅうごふん' }
    },
    {
        id: 'num_tens_extra_17', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '時間詢問', stem_zh: '時間詢問',
        dialogue: { speakerA: '何分かかりますか？', speakerB: '＿＿です。（二十五分）' },
        options: [
            { text: 'にじゅうごふん', isCorrect: true, reason: '正確！「二十五分」讀「にじゅうごふん」。' },
            { text: 'にじゅうごぷん', isCorrect: false, reason: '「五」後「分」讀「ふん」。' },
            { text: 'にじゅっごふん', isCorrect: false, reason: '「二十五」不促音化。' },
            { text: 'はついつふん', isCorrect: false, reason: '分鐘使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十五分」讀「にじゅうごふん」。', relatedRules: ['分の讀法'] },
        sourceItem: { value: 25, kanji: '二十五分', reading: 'にじゅうごふん' }
    },
    {
        id: 'num_tens_extra_18', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「二十二」的正確讀音是？', stem_zh: '「二十二」的正確讀音是？',
        options: [
            { text: 'にじゅうに', isCorrect: true, reason: '正確！「二十二」讀「にじゅうに」。' },
            { text: 'はたに', isCorrect: false, reason: '「はた」只用於特殊詞如「はたち」。' },
            { text: 'にじゅっに', isCorrect: false, reason: '「二十二」不促音化。' },
            { text: 'ふたじゅうふた', isCorrect: false, reason: '組合數字使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十二」讀「にじゅうに」。', relatedRules: ['數字組合の讀法'] },
        sourceItem: { value: 22, kanji: '二十二', reading: 'にじゅうに' }
    },
    {
        id: 'num_tens_extra_19', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: 'バスは＿＿番です。（二十三號）', stem_zh: '公車是23號。',
        options: [
            { text: 'にじゅうさんばん', isCorrect: true, reason: '正確！「二十三番」讀「にじゅうさんばん」。' },
            { text: 'にじゅうみばん', isCorrect: false, reason: '號碼使用音讀。' },
            { text: 'にじゅっさんばん', isCorrect: false, reason: '「二十三」不促音化。' },
            { text: 'はたさんばん', isCorrect: false, reason: '號碼使用音讀組合。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十三番」讀「にじゅうさんばん」。', relatedRules: ['號碼の讀法'] },
        sourceItem: { value: 23, kanji: '二十三番', reading: 'にじゅうさんばん' }
    },
    {
        id: 'num_tens_extra_20', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '詢問樓層', stem_zh: '詢問樓層',
        dialogue: { speakerA: '何階ですか？', speakerB: '＿＿です。（二十六樓）' },
        options: [
            { text: 'にじゅうろっかい', isCorrect: true, reason: '正確！「二十六階」讀「にじゅうろっかい」。' },
            { text: 'にじゅうろくかい', isCorrect: false, reason: '「六」＋「階」促音化。' },
            { text: 'にじゅうむかい', isCorrect: false, reason: '樓層使用音讀。' },
            { text: 'はたむっかい', isCorrect: false, reason: '樓層使用音讀組合。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十六階」讀「にじゅうろっかい」，「六」促音化。', relatedRules: ['階の讀法'] },
        sourceItem: { value: 26, kanji: '二十六階', reading: 'にじゅうろっかい' }
    },
    {
        id: 'num_tens_extra_21', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「二十七」的正確讀音是？', stem_zh: '「二十七」的正確讀音是？',
        options: [
            { text: 'にじゅうなな', isCorrect: true, reason: '正確！「二十七」多讀「にじゅうなな」。' },
            { text: 'にじゅうしち', isCorrect: false, reason: '為避免混淆，多用「なな」。' },
            { text: 'にじゅっなな', isCorrect: false, reason: '「二十七」不促音化。' },
            { text: 'はたなな', isCorrect: false, reason: '「はた」只用於特殊詞。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十七」多讀「にじゅうなな」。', relatedRules: ['數字組合の讀法'] },
        sourceItem: { value: 27, kanji: '二十七', reading: 'にじゅうなな' }
    },
    {
        id: 'num_tens_extra_22', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '教室は＿＿号室です。（二十八號房）', stem_zh: '教室是28號房。',
        options: [
            { text: 'にじゅうはちごうしつ', isCorrect: true, reason: '正確！「二十八号室」讀「にじゅうはちごうしつ」。' },
            { text: 'にじゅうやごうしつ', isCorrect: false, reason: '房號使用音讀。' },
            { text: 'にじゅっぱちごうしつ', isCorrect: false, reason: '「二十八」不促音化。' },
            { text: 'はたはちごうしつ', isCorrect: false, reason: '房號使用音讀組合。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十八号室」讀「にじゅうはちごうしつ」。', relatedRules: ['房號の讀法'] },
        sourceItem: { value: 28, kanji: '二十八号室', reading: 'にじゅうはちごうしつ' }
    },
    {
        id: 'num_tens_extra_23', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '詢問日期', stem_zh: '詢問日期',
        dialogue: { speakerA: '締め切りは何日ですか？', speakerB: '＿＿です。（二十九日）' },
        options: [
            { text: 'にじゅうくにち', isCorrect: true, reason: '正確！「二十九日」讀「にじゅうくにち」。' },
            { text: 'にじゅうきゅうにち', isCorrect: false, reason: '日期中「九」多讀「く」。' },
            { text: 'にじゅうここのか', isCorrect: false, reason: '11日以上不用訓讀。' },
            { text: 'はたここのか', isCorrect: false, reason: '11日以上使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十九日」讀「にじゅうくにち」。', relatedRules: ['日期の讀法'] },
        sourceItem: { value: 29, kanji: '二十九日', reading: 'にじゅうくにち' }
    },
    {
        id: 'num_tens_extra_24', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '以下哪個「十」開頭的數字讀法有特殊之處？', stem_zh: '以下哪個「十」開頭的數字讀法有特殊之處？',
        options: [
            { text: '十四日讀「じゅうよっか」保留訓讀', isCorrect: true, reason: '正確！14日保留「よっか」的讀法。' },
            { text: '十三日讀特殊讀法', isCorrect: false, reason: '十三日用音讀「じゅうさんにち」。' },
            { text: '十五日讀特殊讀法', isCorrect: false, reason: '十五日用音讀「じゅうごにち」。' },
            { text: '十位數日期都用訓讀', isCorrect: false, reason: '只有14日保留訓讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '14日保留「よっか」讀法，讀「じゅうよっか」。', trapExplanation: '這是陷阱題，測試11-19日中的特殊讀法。', relatedRules: ['十四日の特殊讀法'] },
        sourceItem: { value: 14, kanji: '十四日', reading: 'じゅうよっか' }
    },
    {
        id: 'num_tens_extra_25', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '電話番号は＿＿です。（1234）', stem_zh: '電話號碼是1234。',
        options: [
            { text: 'いち・に・さん・よん', isCorrect: true, reason: '正確！電話號碼逐字念出。' },
            { text: 'せんにひゃくさんじゅうよん', isCorrect: false, reason: '電話號碼不讀成整數。' },
            { text: 'ひと・ふた・み・よ', isCorrect: false, reason: '電話號碼用音讀。' },
            { text: 'いっせんにひゃくさんじゅうし', isCorrect: false, reason: '電話號碼不讀成整數。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '電話號碼逐個數字讀出。', relatedRules: ['電話番号の讀法'] },
        sourceItem: { value: 1234, kanji: '一二三四', reading: 'いちにさんよん' }
    },
    {
        id: 'num_tens_extra_26', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '詢問時間', stem_zh: '詢問時間',
        dialogue: { speakerA: '何時に出発しますか？', speakerB: '＿＿に出発します。（十一時半）' },
        options: [
            { text: 'じゅういちじはん', isCorrect: true, reason: '正確！「十一時半」讀「じゅういちじはん」。' },
            { text: 'といちじはん', isCorrect: false, reason: '時間使用音讀。' },
            { text: 'じゅういっじはん', isCorrect: false, reason: '「時」前不促音化。' },
            { text: 'じゅういちときはん', isCorrect: false, reason: '「とき」是「時」的訓讀，時刻用「じ」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十一時半」讀「じゅういちじはん」。', relatedRules: ['時間の讀法'] },
        sourceItem: { value: 11.5, kanji: '十一時半', reading: 'じゅういちじはん' }
    },
    {
        id: 'num_tens_extra_27', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「三十三」的正確讀音是？', stem_zh: '「三十三」的正確讀音是？',
        options: [
            { text: 'さんじゅうさん', isCorrect: true, reason: '正確！「三十三」讀「さんじゅうさん」。' },
            { text: 'みそみ', isCorrect: false, reason: '現代日語不用這個讀法。' },
            { text: 'さんじゅっさん', isCorrect: false, reason: '「三十三」不促音化。' },
            { text: 'みじゅうみ', isCorrect: false, reason: '組合數字使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三十三」讀「さんじゅうさん」。', relatedRules: ['數字組合の讀法'] },
        sourceItem: { value: 33, kanji: '三十三', reading: 'さんじゅうさん' }
    },
    {
        id: 'num_tens_extra_28', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '彼は＿＿番目です。（四十四號）', stem_zh: '他是第44號。',
        options: [
            { text: 'よんじゅうよんばんめ', isCorrect: true, reason: '正確！「四十四番目」讀「よんじゅうよんばんめ」。' },
            { text: 'しじゅうしばんめ', isCorrect: false, reason: '避諱「死」，多用「よん」。' },
            { text: 'よんじゅっよんばんめ', isCorrect: false, reason: '「四十四」不促音化。' },
            { text: 'よじゅうよばんめ', isCorrect: false, reason: '缺少「ん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「四十四番目」讀「よんじゅうよんばんめ」。', relatedRules: ['序數の讀法'] },
        sourceItem: { value: 44, kanji: '四十四番目', reading: 'よんじゅうよんばんめ' }
    },
    {
        id: 'num_tens_extra_29', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '速度詢問', stem_zh: '速度詢問',
        dialogue: { speakerA: '制限速度は何キロですか？', speakerB: '＿＿キロです。（五十公里）' },
        options: [
            { text: 'ごじゅう', isCorrect: true, reason: '正確！「五十」讀「ごじゅう」。' },
            { text: 'いつじゅう', isCorrect: false, reason: '速度使用音讀。' },
            { text: 'ごじゅっ', isCorrect: false, reason: '「キロ」前不促音化。' },
            { text: 'こじゅう', isCorrect: false, reason: '「五」讀「ご」不是「こ」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五十キロ」讀「ごじゅうキロ」。', relatedRules: ['速度の讀法'] },
        sourceItem: { value: 50, kanji: '五十', reading: 'ごじゅう' }
    },
    {
        id: 'num_tens_extra_30', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「六十六」的正確讀音是？', stem_zh: '「六十六」的正確讀音是？',
        options: [
            { text: 'ろくじゅうろく', isCorrect: true, reason: '正確！「六十六」讀「ろくじゅうろく」。' },
            { text: 'むじゅうむ', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'ろくじゅっろく', isCorrect: false, reason: '「六十六」不促音化。' },
            { text: 'ろっじゅうろく', isCorrect: false, reason: '「六十」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「六十六」讀「ろくじゅうろく」。', relatedRules: ['數字組合の讀法'] },
        sourceItem: { value: 66, kanji: '六十六', reading: 'ろくじゅうろく' }
    },
    {
        id: 'num_tens_extra_31', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '試合は＿＿分です。（八十分鐘）', stem_zh: '比賽是八十分鐘。',
        options: [
            { text: 'はちじゅっぷん', isCorrect: true, reason: '正確！「八十分」讀「はちじゅっぷん」。' },
            { text: 'はちじゅうふん', isCorrect: false, reason: '「十」＋「分」促音化+半濁音化。' },
            { text: 'やじゅっぷん', isCorrect: false, reason: '分鐘使用音讀。' },
            { text: 'はっじゅっぷん', isCorrect: false, reason: '「八十」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「八十分」讀「はちじゅっぷん」。', relatedRules: ['分の讀法'] },
        sourceItem: { value: 80, kanji: '八十分', reading: 'はちじゅっぷん' }
    },
    {
        id: 'num_tens_extra_32', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '詢問價格', stem_zh: '詢問價格',
        dialogue: { speakerA: 'お会計はいくらですか？', speakerB: '＿＿円です。（九十九圓）' },
        options: [
            { text: 'きゅうじゅうきゅうえん', isCorrect: true, reason: '正確！「九十九円」讀「きゅうじゅうきゅうえん」。' },
            { text: 'くじゅうくえん', isCorrect: false, reason: '為避諱「苦」，多用「きゅう」。' },
            { text: 'きゅうじゅっきゅうえん', isCorrect: false, reason: '「九十九」不促音化。' },
            { text: 'ここじゅうここえん', isCorrect: false, reason: '「ここ」不是「九」的讀法。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「九十九円」讀「きゅうじゅうきゅうえん」。', relatedRules: ['金額の讀法'] },
        sourceItem: { value: 99, kanji: '九十九円', reading: 'きゅうじゅうきゅうえん' }
    },
    {
        id: 'num_tens_extra_33', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '以下哪個十位數的年齡讀法正確？', stem_zh: '以下哪個十位數的年齡讀法正確？',
        options: [
            { text: '20歳(はたち)、30歳(さんじゅっさい)、40歳(よんじゅっさい)', isCorrect: true, reason: '正確！這些都是正確的讀法。' },
            { text: '20歳(にじゅうさい)、30歳(さんじゅうさい)、40歳(しじゅうさい)', isCorrect: false, reason: '20歳有特殊讀法，且整十歲促音化。' },
            { text: '所有整十歲都讀「〜じゅうさい」', isCorrect: false, reason: '整十歲促音化為「〜じゅっさい」。' },
            { text: '所有整十歲都有特殊讀法', isCorrect: false, reason: '只有20歳有特殊讀法「はたち」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '20歳讀「はたち」，其他整十歲促音化。', trapExplanation: '這是陷阱題，測試年齡讀法。', relatedRules: ['年齡の讀法'] },
        sourceItem: { value: 0, kanji: '整十歲', reading: '讀法規則' }
    },
    {
        id: 'num_tens_extra_34', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '電車は＿＿分後に来ます。（十五分鐘）', stem_zh: '電車十五分鐘後來。',
        options: [
            { text: 'じゅうごふん', isCorrect: true, reason: '正確！「十五分」讀「じゅうごふん」。' },
            { text: 'じゅうごぷん', isCorrect: false, reason: '「五」後「分」讀「ふん」。' },
            { text: 'じゅっごふん', isCorrect: false, reason: '「十五」不促音化。' },
            { text: 'といつふん', isCorrect: false, reason: '分鐘使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十五分」讀「じゅうごふん」。', relatedRules: ['分の讀法'] },
        sourceItem: { value: 15, kanji: '十五分', reading: 'じゅうごふん' }
    },
    {
        id: 'num_tens_extra_35', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '人數詢問', stem_zh: '人數詢問',
        dialogue: { speakerA: '会場に何人いますか？', speakerB: '＿＿人います。（七十八人）' },
        options: [
            { text: 'ななじゅうはちにん', isCorrect: true, reason: '正確！「七十八人」讀「ななじゅうはちにん」。' },
            { text: 'しちじゅうはちにん', isCorrect: false, reason: '為避免混淆，多用「なな」。' },
            { text: 'ななじゅっぱちにん', isCorrect: false, reason: '「七十八」不促音化。' },
            { text: 'なのじゅうやにん', isCorrect: false, reason: '人數使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「七十八人」讀「ななじゅうはちにん」。', relatedRules: ['人數の讀法'] },
        sourceItem: { value: 78, kanji: '七十八人', reading: 'ななじゅうはちにん' }
    },
    {
        id: 'num_tens_extra_36', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「五十一」的正確讀音是？', stem_zh: '「五十一」的正確讀音是？',
        options: [
            { text: 'ごじゅういち', isCorrect: true, reason: '正確！「五十一」讀「ごじゅういち」。' },
            { text: 'いつじゅうひと', isCorrect: false, reason: '組合數字使用音讀。' },
            { text: 'ごじゅっいち', isCorrect: false, reason: '「五十一」不促音化。' },
            { text: 'こじゅういち', isCorrect: false, reason: '「五」讀「ご」不是「こ」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「五十一」讀「ごじゅういち」。', relatedRules: ['數字組合の讀法'] },
        sourceItem: { value: 51, kanji: '五十一', reading: 'ごじゅういち' }
    },
    {
        id: 'num_tens_extra_37', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '彼女は＿＿歳になりました。（二十三歲）', stem_zh: '她二十三歲了。',
        options: [
            { text: 'にじゅうさんさい', isCorrect: true, reason: '正確！「二十三歳」讀「にじゅうさんさい」。' },
            { text: 'はたみさい', isCorrect: false, reason: '「はた」只用於「はたち」。' },
            { text: 'にじゅっさんさい', isCorrect: false, reason: '「二十三」不促音化。' },
            { text: 'ふたじゅうみさい', isCorrect: false, reason: '年齡使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十三歳」讀「にじゅうさんさい」。', relatedRules: ['年齡の讀法'] },
        sourceItem: { value: 23, kanji: '二十三歳', reading: 'にじゅうさんさい' }
    },
    {
        id: 'num_tens_extra_38', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: false,
        stem: '詢問時間', stem_zh: '詢問時間',
        dialogue: { speakerA: '映画は何時間ですか？', speakerB: '＿＿時間です。（二時間半）' },
        options: [
            { text: 'にじかんはん', isCorrect: true, reason: '正確！「二時間半」讀「にじかんはん」。' },
            { text: 'ふたじかんはん', isCorrect: false, reason: '時間使用音讀。' },
            { text: 'にっじかんはん', isCorrect: false, reason: '「二」不促音化。' },
            { text: 'にときはん', isCorrect: false, reason: '「時間」讀「じかん」。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二時間半」讀「にじかんはん」。', relatedRules: ['時間の讀法'] },
        sourceItem: { value: 2.5, kanji: '二時間半', reading: 'にじかんはん' }
    },
    {
        id: 'num_tens_extra_39', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: false,
        stem: '「三十六」的正確讀音是？', stem_zh: '「三十六」的正確讀音是？',
        options: [
            { text: 'さんじゅうろく', isCorrect: true, reason: '正確！「三十六」讀「さんじゅうろく」。' },
            { text: 'みそむ', isCorrect: false, reason: '現代日語不用這個讀法。' },
            { text: 'さんじゅっろく', isCorrect: false, reason: '「三十六」不促音化。' },
            { text: 'みじゅうろく', isCorrect: false, reason: '組合數字使用音讀。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「三十六」讀「さんじゅうろく」。', relatedRules: ['數字組合の讀法'] },
        sourceItem: { value: 36, kanji: '三十六', reading: 'さんじゅうろく' }
    },
    {
        id: 'num_tens_extra_40', category: 'numbers', subcategory: 'tens', type: 'sentence', isTrap: false,
        stem: '授業は＿＿分後に終わります。（十分鐘）', stem_zh: '課堂十分鐘後結束。',
        options: [
            { text: 'じゅっぷん', isCorrect: true, reason: '正確！「十分」讀「じゅっぷん」。' },
            { text: 'じゅうふん', isCorrect: false, reason: '「十」＋「分」促音化+半濁音化。' },
            { text: 'とふん', isCorrect: false, reason: '分鐘使用音讀。' },
            { text: 'じゅぷん', isCorrect: false, reason: '缺少促音。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「十分」讀「じゅっぷん」。', relatedRules: ['分の讀法'] },
        sourceItem: { value: 10, kanji: '十分', reading: 'じゅっぷん' }
    },
    {
        id: 'num_tens_extra_41', category: 'numbers', subcategory: 'tens', type: 'dialogue', isTrap: true,
        stem: '詢問日期', stem_zh: '詢問日期',
        dialogue: { speakerA: '祝日は何日ですか？', speakerB: '＿＿です。（二十三日）' },
        options: [
            { text: 'にじゅうさんにち', isCorrect: true, reason: '正確！「二十三日」讀「にじゅうさんにち」。' },
            { text: 'はたみっか', isCorrect: false, reason: '11日以上使用音讀。' },
            { text: 'にじゅうみっか', isCorrect: false, reason: '11日以上不用訓讀日期。' },
            { text: 'にじゅっさんにち', isCorrect: false, reason: '「二十三」不促音化。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '「二十三日」讀「にじゅうさんにち」。', relatedRules: ['日期の讀法'] },
        sourceItem: { value: 23, kanji: '二十三日', reading: 'にじゅうさんにち' }
    },
    {
        id: 'num_tens_extra_42', category: 'numbers', subcategory: 'tens', type: 'pronunciation', isTrap: true,
        stem: '以下哪個說法是正確的？', stem_zh: '以下哪個說法是正確的？',
        options: [
            { text: '十位數基本用音讀組合，但有避諱和特殊讀法', isCorrect: true, reason: '正確！這是十位數讀法的基本特點。' },
            { text: '十位數全部用訓讀', isCorrect: false, reason: '錯誤，十位數用音讀。' },
            { text: '十位數沒有特殊讀法', isCorrect: false, reason: '錯誤，如20歲、20日有特殊讀法。' },
            { text: '十位數的數字可以隨意讀', isCorrect: false, reason: '錯誤，有固定規則。' }
        ],
        correctIndex: 0,
        explanation: { correctRule: '十位數使用音讀組合，但有避諱（4、7、9）和特殊讀法（20歲、20日）。', relatedRules: ['十位數の讀法總結'] },
        sourceItem: { value: 0, kanji: '十位數', reading: '總結' }
    }
];
