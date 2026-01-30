import { DatesPracticeQuestion } from '../types';

// 基本數字練習題 (0-10)
// 每個數字3題：發音題、單句敘述題、對話題
// 至少1題為陷阱題

export const basicNumberQuestions: DatesPracticeQuestion[] = [
    // ===== 數字 1 的三題 =====
    {
        id: 'num_basic_1_pron',
        category: 'numbers',
        subcategory: 'basic',
        type: 'pronunciation',
        isTrap: false,
        stem: '「一」的正確讀音是？',
        stem_zh: '「一」的正確讀音是？',
        options: [
            { text: 'いち', isCorrect: true, reason: '正確{せいかく}！「一{いち}」的音讀{おんどく}是「いち」，源自{げんじ}古代{こだい}中國{ちゅうごく}的讀音{どくおん}。' },
            { text: 'ひとつ', isCorrect: false, reason: '這是「一{ひと}つ」的讀法{よみかた}，用於{もちい}計數{けいすう}一般{いっぱん}物品{ぶっぴん}時{とき}使用{しよう}訓讀{くんどく}。' },
            { text: 'いつ', isCorrect: false, reason: '這是「五{ご}」在「五{いつ}つ」中的讀法{よみかた}，不是「一{いち}」。' },
            { text: 'ひと', isCorrect: false, reason: '這是「一人{ひとり}」中「一{ひと}」的訓讀{くんどく}部分{ぶぶん}，不是獨立{どくりつ}數字{すうじ}的讀法{よみかた}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '數字{すうじ}「一{いち}」的標準{ひょうじゅん}音讀{おんどく}是「いち」，源自{げんじ}古代{こだい}中國{ちゅうごく}的讀音{どくおん}。在現代{げんだい}日語{にほんご}中，「いち」常用於{じょうようもちい}電話{でんわ}號碼{ばんごう}、數學{すうがく}計算{けいさん}和10以上{いじょう}的組合{くみあわせ}數字{すうじ}。',
            relatedRules: ['音讀{おんどく}與訓讀{くんどく}的區別{くべつ}', '1-10的基本{きほん}發音{はつおん}', '音讀{おんどく}使用{しよう}場景{ばめん}']
        },
        sourceItem: { value: 1, kanji: '一', reading: 'いち' }
    },
    {
        id: 'num_basic_1_sent',
        category: 'numbers',
        subcategory: 'basic',
        type: 'sentence',
        isTrap: true,
        stem: '彼女は＿＿番です。',
        stem_zh: '她是一號。',
        options: [
            { text: 'ひと', isCorrect: false, reason: '陷阱{かんけい}！「ひと」是訓讀{くんどく}，在編號{ばんごう}中必須{ひっす}使用{しよう}する音讀{おんどく}。' },
            { text: 'いち', isCorrect: true, reason: '正確{せいかく}！編號{ばんごう}、順序{じゅんじょ}時{とき}使用{しよう}音讀{おんどく}「いち」。' },
            { text: 'ひとつ', isCorrect: false, reason: '「ひとつ」用於{もちい}計數{けいすう}物品{ぶっぴん}，不用於{もちいず}編號{ばんごう}。' },
            { text: 'いっ', isCorrect: false, reason: '「いっ」は促音化{そくおんか}の形式{けいしき}，獨立{どくりつ}使用{しよう}時{とき}不促音{ふそくおん}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '在編號{ばんごう}、順序{じゅんじょ}、號碼{ばんごう}等情境{じょうきょう}中，必須{ひっす}使用{しよう}音讀{おんどく}「いち」，不可{ふか}使用{しよう}訓讀{くんどく}「ひと」或「ひとつ」。',
            trapExplanation: '這是一道{いちどう}陷阱題{かんけいだい}，利用{りよう}學習者{がくしゅうしゃ}容易{ようい}混淆{こんこう}音讀{おんどく}與訓讀{くんどく}の使用{しよう}場景{ばめん}。',
            relatedRules: ['編號{ばんごう}使用{しよう}音讀{おんどく}', '音讀{おんどく}與訓讀{くんどく}の使用{しよう}場景{ばめん}區別{くべつ}']
        },
        sourceItem: { value: 1, kanji: '一番', reading: 'いちばん' }
    },
    {
        id: 'num_basic_1_dial',
        category: 'numbers',
        subcategory: 'basic',
        type: 'dialogue',
        isTrap: false,
        stem: '電話番号を教えてください。',
        stem_zh: '請告訴我電話號碼。',
        dialogue: {
            speakerA: 'すみません、電話番号を教えてください。',
            speakerB: '090の＿＿23の4567です。（最初是1）'
        },
        options: [
            { text: 'ひと', isCorrect: false, reason: '電話{でんわ}號碼{ばんごう}必須{ひっす}使用{しよう}する音讀{おんどく}，不能{ふのう}使用{しよう}する訓讀{くんどく}「ひと」。' },
            { text: 'いち', isCorrect: true, reason: '正確{せいかく}！電話{でんわ}號碼{ばんごう}使用{しよう}音讀{おんどく}「いち」。' },
            { text: 'ひとつ', isCorrect: false, reason: '電話{でんわ}號碼{ばんごう}使用{しよう}しない量詞{りょうし}讀法{よみかた}。' },
            { text: 'いっち', isCorrect: false, reason: '沒有{ない}「いっち」這個{この}讀法{よみかた}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '電話{でんわ}號碼{ばんごう}、地址{じゅうしょ}等數字{すうじ}序列{じょれつ}中，一律{いちりつ}使用{しよう}音讀{おんどく}「いち」。',
            relatedRules: ['電話{でんわ}號碼{ばんごう}の讀法{よみかた}', '數字{すうじ}序列{じょれつ}使用{しよう}音讀{おんどく}']
        },
        sourceItem: { value: 1, kanji: '一', reading: 'いち' }
    },

    // ===== 數字 2 的三題 =====
    {
        id: 'num_basic_2_pron',
        category: 'numbers',
        subcategory: 'basic',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二」的正確讀音是？',
        stem_zh: '「二」的正確讀音是？',
        options: [
            { text: 'に', isCorrect: true, reason: '正確{せいかく}！「二{に}」的音讀{おんどく}是「に」。' },
            { text: 'ふた', isCorrect: false, reason: '「ふた」是訓讀{くんどく}，用於{もちい}「二{ふた}つ」等詞{とうし}。' },
            { text: 'ふたつ', isCorrect: false, reason: '「ふたつ」是完整{かんせい}的量詞{りょうし}讀法{よみかた}，不是單純{たんじゅん}的數字{すうじ}讀音{どくおん}。' },
            { text: 'じ', isCorrect: false, reason: '「じ」不是「二{に}」的讀音{どくおん}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二{に}」的標準{ひょうじゅん}音讀{おんどく}是「に」，發音{はつおん}簡短{かんたん}清晰{せいせき}，是日語{にほんご}中最{もっと}常用{じょうよう}的數字{すうじ}之一{のいち}。',
            relatedRules: ['基本{きほん}數字{すうじ}1-10の音讀{おんどく}', '2の發音{はつおん}特點{とくてん}']
        },
        sourceItem: { value: 2, kanji: '二', reading: 'に' }
    },
    {
        id: 'num_basic_2_sent',
        category: 'numbers',
        subcategory: 'basic',
        type: 'sentence',
        isTrap: true,
        stem: '私には兄が＿＿人います。',
        stem_zh: '我有兩個哥哥。',
        options: [
            { text: 'に', isCorrect: false, reason: '陷阱{かんけい}！「二人{ふたり}」讀まない{よまない}「ににん」，使用{しよう}する特殊{とくしゅ}訓讀{くんどく}。' },
            { text: 'ふたり', isCorrect: true, reason: '正確{せいかく}！「二人{ふたり}」的特殊{とくしゅ}讀法{よみかた}是「ふたり」。' },
            { text: 'ふた', isCorrect: false, reason: '缺少{けっしょう}量詞{りょうし}「り」，不完整{ふかんせい}。' },
            { text: 'ふたつ', isCorrect: false, reason: '「ふたつ」用於{もちい}物品{ぶっぴん}，人數{にんずう}使用{しよう}する「ふたり」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「二人{ふたり}」は特殊{とくしゅ}讀法{よみかた}，必須{ひっす}讀作{どくさ}「ふたり」，不能{ふのう}使用{しよう}する音讀{おんどく}「ににん」。這是日語{にほんご}中少數{しょうすう}保留{ほりゅう}訓讀{くんどく}の人數{にんずう}表達{ひょうたつ}。',
            trapExplanation: '這是陷阱題{かんけいだい}，「二人{ふたり}」は日語{にほんご}中の特殊{とくしゅ}讀法{よみかた}，學習者{がくしゅうしゃ}容易{ようい}套用{とうよう}一般{いっぱん}規則{きそく}而錯誤{さくご}。',
            relatedRules: ['人數{にんずう}の特殊{とくしゅ}讀法{よみかた}', '一人{ひとり}、二人{ふたり}の訓讀{くんどく}']
        },
        sourceItem: { value: 2, kanji: '二人', reading: 'ふたり' }
    },
    {
        id: 'num_basic_2_dial',
        category: 'numbers',
        subcategory: 'basic',
        type: 'dialogue',
        isTrap: false,
        stem: '何月生まれですか？',
        stem_zh: '你是幾月出生的？',
        dialogue: {
            speakerA: '何月生まれですか？',
            speakerB: '＿＿月{がつ}です。（二月）'
        },
        options: [
            { text: 'ふたがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}「ふた」。' },
            { text: 'に', isCorrect: false, reason: '缺少{けっしょう}「がつ」，不完整{ふかんせい}。' },
            { text: 'にがつ', isCorrect: true, reason: '正確{せいかく}！二月{にがつ}讀作{どくさ}「にがつ」。' },
            { text: 'じがつ', isCorrect: false, reason: '「じ」不是二{に}の讀音{どくおん}。' }
        ],
        correctIndex: 2,
        explanation: {
            correctRule: '月份{げっぷん}使用{しよう}音讀{おんどく}，「二月{にがつ}」讀作{どくさ}「にがつ」。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '音讀{おんどく}在日期{にっき}中の應用{おうよう}']
        },
        sourceItem: { value: 2, kanji: '二月', reading: 'にがつ' }
    },

    // ===== 數字 3 的三題 =====
    {
        id: 'num_basic_3_pron',
        category: 'numbers',
        subcategory: 'basic',
        type: 'pronunciation',
        isTrap: false,
        stem: '「三」的正確讀音是？',
        stem_zh: '「三」的正確讀音是？',
        options: [
            { text: 'さん', isCorrect: true, reason: '正確{せいかく}！「三{さん}」的音讀{おんどく}是「さん」。' },
            { text: 'み', isCorrect: false, reason: '「み」是訓讀{くんどく}，用於{もちい}「三{み}つ」時{とき}讀作{どくさ}「みっつ」。' },
            { text: 'みっつ', isCorrect: false, reason: '「みっつ」は量詞{りょうし}讀法{よみかた}，不是單純{たんじゅん}數字{すうじ}。' },
            { text: 'ざん', isCorrect: false, reason: '沒有{ない}濁音{だくおん}，正確{せいかく}は「さん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三{さん}」的音讀{おんどく}は「さん」，這是最{もっと}標準{ひょうじゅん}和常用{じょうよう}の讀法{よみかた}。',
            relatedRules: ['基本{きほん}數字{すうじ}1-10', '三{さん}の發音{はつおん}']
        },
        sourceItem: { value: 3, kanji: '三', reading: 'さん' }
    },
    {
        id: 'num_basic_3_sent',
        category: 'numbers',
        subcategory: 'basic',
        type: 'sentence',
        isTrap: true,
        stem: '私は鉛筆を＿＿持っています。',
        stem_zh: '我有三支鉛筆。',
        options: [
            { text: 'さんほん', isCorrect: false, reason: '陷阱{かんけい}！「三{さん}」後面{うしろ}接{せつ}「本{ほん}」時{とき}會發生{はっせい}濁音化{だくおんか}，變成{へんせい}「ぼん」。' },
            { text: 'さんぼん', isCorrect: true, reason: '正確{せいかく}！撥音{はつおん}「ん」後面{うしろ}の「ほ」要變成{へんせい}濁音{だくおん}「ぼ」。' },
            { text: 'みっぽん', isCorrect: false, reason: '這混合{こんごう}了訓讀{くんどく}數字{すうじ}和音讀{おんどく}量詞{りょうし}，且音變{おんへん}錯誤{さくご}。' },
            { text: 'さんぽん', isCorrect: false, reason: '應該{おうがい}は濁音{だくおん}「ぼ」，不是半濁音{はんだくおん}「ぽ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「本{ほん}」量詞{りょうし}在「三{さん}」後面{うしろ}會濁音化{だくおんか}：さん＋ほん→さんぼん。這是因為{いんい}撥音{はつおん}「ん」後面{うしろ}のは行音{ぎょうおん}容易{ようい}濁音化{だくおんか}。',
            trapExplanation: '這是一道{いちどう}陷阱題{かんけいだい}，利用{りよう}學習者{がくしゅうしゃ}容易{ようい}忽略{こりゃく}「ん」後面{うしろ}濁音化{だくおんか}の規則{きそく}。「さんほん」は最{もっと}常見{じょうけん}の錯誤{さくご}。',
            relatedRules: ['h-p轉換{てんかん}規律{きりつ}', '撥音{はつおん}後{あと}の濁音化{だくおんか}', '「本{ほん}」の音變{おんへん}規則{きそく}', '3引發{いんはつ}の濁音化{だくおんか}']
        },
        sourceItem: { value: 3, kanji: '三本', reading: 'さんぼん' }
    },
    {
        id: 'num_basic_3_dial',
        category: 'numbers',
        subcategory: 'basic',
        type: 'dialogue',
        isTrap: false,
        stem: '何人家族ですか？',
        stem_zh: '你家有幾個人？',
        dialogue: {
            speakerA: '何人家族ですか？',
            speakerB: '＿＿人{にん}家族{かぞく}です。（三人）'
        },
        options: [
            { text: 'みっつ', isCorrect: false, reason: '「みっつ」用於{もちい}物品{ぶっぴん}，人數{にんずう}使用{しよう}する「にん」。' },
            { text: 'みたり', isCorrect: false, reason: '沒有{ない}「みたり」這個{この}讀法{よみかた}，二人{ふたり}以上{いじょう}使用{しよう}音讀{おんどく}。' },
            { text: 'さんにん', isCorrect: true, reason: '正確{せいかく}！三人{さんにん}及{およ}以上{いじょう}使用{しよう}音讀{おんどく}「さんにん」。' },
            { text: 'さんり', isCorrect: false, reason: '人數{にんずう}量詞{りょうし}は「にん」，不是「り」。' }
        ],
        correctIndex: 2,
        explanation: {
            correctRule: '三人{さんにん}及{およ}以上{いじょう}の人數{にんずう}使用{しよう}音讀{おんどく}，「三人{さんにん}」讀作{どくさ}「さんにん」。只有{ただ}一人{ひとり}和二人{ふたり}使用{しよう}訓讀{くんどく}（ひとり、ふたり）。',
            relatedRules: ['人數{にんずう}の讀法{よみかた}', '一二人{いちににん}使用{しよう}訓讀{くんどく}，三人{さんにん}起{き}使用{しよう}音讀{おんどく}']
        },
        sourceItem: { value: 3, kanji: '三人', reading: 'さんにん' }
    },

    // ===== 數字 4 的三題 =====
    {
        id: 'num_basic_4_pron',
        category: 'numbers',
        subcategory: 'basic',
        type: 'pronunciation',
        isTrap: true,
        stem: '「四」最常用的讀音是？',
        stem_zh: '「四」最常用的讀音是？',
        options: [
            { text: 'し', isCorrect: false, reason: '雖然{すいぜん}「し」也是讀音{どくおん}之一{のいち}，但因{たんいん}避諱{ひき}「死{し}」，日常{にちじょう}多用{おおくもちい}「よん」。' },
            { text: 'よん', isCorrect: true, reason: '正確{せいかく}！為了{ために}避諱{ひき}「死{し}」の發音{はつおん}，日常{にちじょう}對話{たいわ}中{なか}多く{おおく}使用{しよう}「よん」。' },
            { text: 'よ', isCorrect: false, reason: '「よ」は訓讀{くんどく}の一部分{いちぶぶん}，完整{かんせい}應{おう}は「よっつ」。' },
            { text: 'よっつ', isCorrect: false, reason: '「よっつ」は量詞{りょうし}讀法{よみかた}，不是單純{たんじゅん}數字{すうじ}讀音{どくおん}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「四{よん}」有兩個{りょうこ}音讀{おんどく}：「し」和「よん」。由於{ゆえ}「し」與「死{し}」同音{どうおん}，日常{にちじょう}生活{せいかつ}中{なか}多く{おおく}使用{しよう}「よん」以避諱{いひき}。但在某些{ぼうしゅ}固定{こてい}用法{ようほう}中仍{なお}使用{しよう}「し」（如四月{しがつ}「しがつ」）。',
            trapExplanation: '這是陷阱題{かんけいだい}，測試{そくし}學習者{がくしゅうしゃ}是否{ぜひ}了解{りょうかい}日語{にほんご}中の避諱{ひき}文化{ぶんか}。「し」雖然{すいぜん}也正確{せいかく}，但「よん」更常用{こうじょうよう}。',
            relatedRules: ['四{よん}の兩種{りょうしゅ}讀法{よみかた}', '日語{にほんご}避諱{ひき}文化{ぶんか}', '「し」與「よん」の使用{しよう}區別{くべつ}']
        },
        sourceItem: { value: 4, kanji: '四', reading: 'よん / し' }
    },
    {
        id: 'num_basic_4_sent',
        category: 'numbers',
        subcategory: 'basic',
        type: 'sentence',
        isTrap: true,
        stem: '＿＿月に桜が咲きます。',
        stem_zh: '四月櫻花開。',
        options: [
            { text: 'よんがつ', isCorrect: false, reason: '陷阱{かんけい}！月份{げっぷん}使用{しよう}「清瘦型{せいそうがた}」讀法{よみかた}，四月{しがつ}必須{ひっす}讀む{よむ}「しがつ」。' },
            { text: 'しがつ', isCorrect: true, reason: '正確{せいかく}！月份{げっぷん}中「四月{しがつ}」固定{こてい}讀作{どくさ}「しがつ」，不能{ふのう}使用{しよう}する「よん」。' },
            { text: 'よがつ', isCorrect: false, reason: '不完整{ふかんせい}，缺少{けっしょう}「ん」。' },
            { text: 'よっがつ', isCorrect: false, reason: '沒有{ない}促音{そくおん}，且月份{げっぷん}使用{しよう}しない這個{この}讀法{よみかた}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '月份{げっぷん}使用{しよう}「清瘦型{せいそうがた}」讀法{よみかた}，「四月{しがつ}」固定{こてい}讀作{どくさ}「しがつ」，禁止{きんし}使用{しよう}「よんがつ」。這是月份{げっぷん}讀法{よみかた}の特殊{とくしゅ}規則{きそく}。',
            trapExplanation: '這是雙重{そうじゅう}陷阱題{かんけいだい}：一{いち}は測試{そくし}學習者{がくしゅうしゃ}是否{ぜひ}知道{しって}月份{げっぷん}の特殊{とくしゅ}讀法{よみかた}，二{に}は測試{そくし}是否{ぜひ}會被{かいひ}日常{にちじょう}習慣{しゅうかん}用{もち}「よん」所誤導{しょごどう}。',
            relatedRules: ['月份{げっぷん}の清瘦型{せいそうがた}讀法{よみかた}', '四月{しがつ}、七月{しちがつ}、九月{くがつ}の特殊{とくしゅ}讀法{よみかた}', '避諱{ひき}規則{きそく}の例外{れいがい}情況{じょうきょう}']
        },
        sourceItem: { value: 4, kanji: '四月', reading: 'しがつ' }
    },
    {
        id: 'num_basic_4_dial',
        category: 'numbers',
        subcategory: 'basic',
        type: 'dialogue',
        isTrap: true,
        stem: '今、何時ですか？',
        stem_zh: '現在幾點？',
        dialogue: {
            speakerA: 'すみません、今、何時ですか？',
            speakerB: '＿＿です。（四點）'
        },
        options: [
            { text: 'よんじ', isCorrect: false, reason: '陷阱{かんけい}！「四時{よじ}」不能{ふのう}讀作{どくさ}「よんじ」，這是固定{こてい}の特殊{とくしゅ}讀法{よみかた}。' },
            { text: 'しじ', isCorrect: false, reason: '陷阱{かんけい}！雖然{すいぜん}接近{せっきん}，但正確{せいかく}讀音{どくおん}は「よじ」，不是「しじ」。' },
            { text: 'よじ', isCorrect: true, reason: '正確{せいかく}！「四時{よじ}」の固定{こてい}讀法{よみかた}は「よじ」，這是時間{じかん}表達{ひょうたつ}の特殊{とくしゅ}規則{きそく}。' },
            { text: 'よっじ', isCorrect: false, reason: '促音{そくおん}「っ」不出現{ふしゅつげん}在「四時{よじ}」中。' }
        ],
        correctIndex: 2,
        explanation: {
            correctRule: '「四時{よじ}」は時間{じかん}表達{ひょうたつ}中の特殊{とくしゅ}讀法{よみかた}，必須{ひっす}讀作{どくさ}「よじ」，不可{ふか}讀む{よむ}「しじ」或「よんじ」。這是固定{こてい}搭配{とうはい}，需要{じゅよう}特別{とくべつ}記憶{きおく}。',
            trapExplanation: '這是三重{さんじゅう}陷阱題{かんけいだい}：「よんじ」利用{りよう}日常{にちじょう}習慣{しゅうかん}、「しじ」利用{りよう}月份{げっぷん}讀法{よみかた}類比{るいひ}、「よっじ」利用{りよう}日期{にっき}讀法{よみかた}類比{るいひ}。正確{せいかく}答案{とうあん}「よじ」は獨特{どくとく}的。',
            relatedRules: ['四時{よじ}、七時{しちじ}、九時{くじ}の特殊{とくしゅ}讀法{よみかた}', '時間{じかん}表達{ひょうたつ}の固定{こてい}搭配{とうはい}', '避諱{ひき}規則{きそく}在時間{じかん}中の特殊{とくしゅ}處理{しょり}']
        },
        sourceItem: { value: 4, kanji: '四時', reading: 'よじ' }
    },

    // ===== 數字 5 的三題 =====
    {
        id: 'num_basic_5_pron',
        category: 'numbers',
        subcategory: 'basic',
        type: 'pronunciation',
        isTrap: false,
        stem: '「五」的正確讀音是？',
        stem_zh: '「五」的正確讀音是？',
        options: [
            { text: 'ご', isCorrect: true, reason: '正確{せいかく}！「五{ご}」の音讀{おんどく}は「ご」。' },
            { text: 'いつ', isCorrect: false, reason: '「いつ」は訓讀{くんどく}，用於{もちい}「五{いつ}つ」（いつつ）。' },
            { text: 'いつつ', isCorrect: false, reason: '「いつつ」は完整{かんせい}の量詞{りょうし}讀法{よみかた}。' },
            { text: 'こ', isCorrect: false, reason: 'は「ご」不是「こ」，需要{じゅよう}濁音{だくおん}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五{ご}」の音讀{おんどく}は「ご」，發音{はつおん}時{とき}需要{じゅよう}濁音{だくおん}，不要{ふよう}與「こ」混淆{こんこう}。',
            relatedRules: ['基本{きほん}數字{すうじ}1-10', '濁音{だくおん}の正確{せいかく}發音{はつおん}']
        },
        sourceItem: { value: 5, kanji: '五', reading: 'ご' }
    },
    {
        id: 'num_basic_5_sent',
        category: 'numbers',
        subcategory: 'basic',
        type: 'sentence',
        isTrap: false,
        stem: '私は＿＿月生まれです。',
        stem_zh: '我是五月出生的。',
        options: [
            { text: 'いつがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}「いつ」。' },
            { text: 'こがつ', isCorrect: false, reason: '需要{じゅよう}濁音{だくおん}，は「ご」不是「こ」。' },
            { text: 'ごがつ', isCorrect: true, reason: '正確{せいかく}！五月{ごがつ}讀作{どくさ}「ごがつ」。' },
            { text: 'ごつ', isCorrect: false, reason: '缺少{けっしょう}「がつ」，不完整{ふかんせい}。' }
        ],
        correctIndex: 2,
        explanation: {
            correctRule: '月份{げっぷん}使用{しよう}音讀{おんどく}，「五月{ごがつ}」讀作{どくさ}「ごがつ」。五月{ごがつ}の讀法{よみかた}相對{そうたい}規則{きそく}，沒有{ない}特殊{とくしゅ}變化{へんか}。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '五{ご}の音讀{おんどく}應用{おうよう}']
        },
        sourceItem: { value: 5, kanji: '五月', reading: 'ごがつ' }
    },
    {
        id: 'num_basic_5_dial',
        category: 'numbers',
        subcategory: 'basic',
        type: 'dialogue',
        isTrap: false,
        stem: 'りんごはいくつありますか？',
        stem_zh: '有幾個蘋果？',
        dialogue: {
            speakerA: 'りんごはいくつありますか？',
            speakerB: '＿＿あります。（五個）'
        },
        options: [
            { text: 'ごこ', isCorrect: false, reason: '「個{こ}」讀まない{よまない}「こ」，一般{いっぱん}物品{ぶっぴん}用{もち}「つ」。' },
            { text: 'ごつ', isCorrect: false, reason: '五{ご}の訓讀{くんどく}不是「ご」，應該{おうがい}は「いつ」。' },
            { text: 'いつつ', isCorrect: true, reason: '正確{せいかく}！一般{いっぱん}物品{ぶっぴん}1-10個{こ}使用{しよう}訓讀{くんどく}「つ」，五個{ごこ}は「いつつ」。' },
            { text: 'いつこ', isCorrect: false, reason: '「いつこ」不是標準{ひょうじゅん}讀法{よみかた}，應該{おうがい}使用{しよう}する「いつつ」。' }
        ],
        correctIndex: 2,
        explanation: {
            correctRule: '一般{いっぱん}物品{ぶっぴん}1-10個{こ}使用{しよう}「つ」量詞{りょうし}，五個{ごこ}讀作{どくさ}「いつつ」。這是訓讀{くんどく}系統{けいとう}，與音讀{おんどく}「ご」不同{ふどう}。',
            relatedRules: ['「つ」量詞{りょうし}の使用{しよう}', '1-10の訓讀{くんどく}', '一般{いっぱん}物品{ぶっぴん}の計數{けいすう}方法{ほうほう}']
        },
        sourceItem: { value: 5, kanji: '五つ', reading: 'いつつ' }
    }
];
