import { DatesPracticeQuestion } from '../types';

// 月份練習題 (1-12月)
// 每個月份3題：發音題、單句敘述題、對話題
// 特別注意4月、7月、9月的「清瘦型」讀法

export const monthQuestions: DatesPracticeQuestion[] = [
    // ===== 1月 的三題 =====
    {
        id: 'month_1_pron',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: false,
        stem: '「一月」的正確讀音是？',
        stem_zh: '「一月」的正確讀音是？',
        options: [
            { text: 'いちがつ', isCorrect: true, reason: '正確{せいかく}！一月{いちがつ}讀作{どくさ}「いちがつ」。' },
            { text: 'ひとつき', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}，且「つき」は「月亮{つきあかり}」の意思{いし}。' },
            { text: 'いちげつ', isCorrect: false, reason: '月份{げっぷん}讀{よ}「がつ」不是「げつ」。' },
            { text: 'ついたちがつ', isCorrect: false, reason: '「ついたち」は日期{にっき}「一號{いちごう}」の讀法{よみかた}，不是月份{げっぷん}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '月份{げっぷん}使用{しよう}音讀{おんどく}「〜がつ」，一月{いちがつ}讀作{どくさ}「いちがつ」。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}規則{きそく}', '「がつ」vs「げつ」の區別{くべつ}']
        },
        sourceItem: { value: 1, kanji: '一月', reading: 'いちがつ' }
    },
    {
        id: 'month_1_sent',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿は新年です。',
        stem_zh: '一月是新年。',
        options: [
            { text: 'ひとつき', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'いちがつ', isCorrect: true, reason: '正確{せいかく}！一月{いちがつ}は「いちがつ」。' },
            { text: 'いちげつ', isCorrect: false, reason: '「げつ」用於{もちい}「月曜日{げつようび}」等，月份{げっぷん}使用{しよう}する「がつ」。' },
            { text: 'しょうがつ', isCorrect: false, reason: '「しょうがつ」は「正月{しょうがつ}」（新年{しんねん}假期{かき}），不是一月{いちがつ}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '一月{いちがつ}讀作{どくさ}「いちがつ」，表示{ひょうじ}一年{いちねん}中の第一{だいいち}個月份{こげっぷん}。',
            relatedRules: ['月份{げっぷん}讀法{よみかた}', '「正月{しょうがつ}」與「一月{いちがつ}」の區別{くべつ}']
        },
        sourceItem: { value: 1, kanji: '一月', reading: 'いちがつ' }
    },
    {
        id: 'month_1_dial',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: false,
        stem: '誕生日はいつですか？',
        stem_zh: '你的生日是什麼時候？',
        dialogue: {
            speakerA: '誕生日はいつですか？',
            speakerB: '＿＿15日です。（一月）'
        },
        options: [
            { text: 'ひとつきじゅうごにち', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'いちがつじゅうごにち', isCorrect: true, reason: '正確{せいかく}！一月{いちがつ}十五日{じゅうごにち}。' },
            { text: 'しょうがつじゅうごにち', isCorrect: false, reason: '「しょうがつ」不是月份{げっぷん}の讀法{よみかた}。' },
            { text: 'いっがつじゅうごにち', isCorrect: false, reason: '一月{いちがつ}不促音{ふそくおん}，は「いちがつ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '回答{かいとう}出生{しゅっせい}日期{にっき}時{とき}，月份{げっぷん}使用{しよう}する音讀{おんどく}「〜がつ」。',
            relatedRules: ['日期{にっき}表達{ひょうたつ}方式{ほうしき}', '月份{げっぷん}+日期{にっき}の組合{くみあわせ}']
        },
        sourceItem: { value: 1, kanji: '一月', reading: 'いちがつ' }
    },

    // ===== 4月 的三題（清瘦型讀法） =====
    {
        id: 'month_4_pron',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: true,
        stem: '「四月」的正確讀音是？',
        stem_zh: '「四月」的正確讀音是？',
        options: [
            { text: 'よんがつ', isCorrect: false, reason: '陷阱{かんけい}！四月{しがつ}必須{ひっす}使用{しよう}する「清瘦型{せいそうがた}」讀法{よみかた}「しがつ」，不能{ふのう}使用{しよう}する「よん」。' },
            { text: 'しがつ', isCorrect: true, reason: '正確{せいかく}！四月{しがつ}固定{こてい}讀作{どくさ}「しがつ」。' },
            { text: 'よがつ', isCorrect: false, reason: '不完整{ふかんせい}，缺少{けっしょう}「ん」，且月份{げっぷん}使用{しよう}しない這個{この}讀法{よみかた}。' },
            { text: 'よっがつ', isCorrect: false, reason: '四月{しがつ}使用{しよう}しない促音{そくおん}，正確{せいかく}は「しがつ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '四月{しがつ}は特殊{とくしゅ}讀法{よみかた}，必須{ひっす}讀作{どくさ}「しがつ」，禁止{きんし}使用{しよう}日常{にちじょう}常用{じょうよう}の「よんがつ」。這是月份{げっぷん}「清瘦型{せいそうがた}」讀法{よみかた}の重要{じゅうよう}規則{きそく}。',
            trapExplanation: '這是陷阱題{かんけいだい}。雖然{すいぜん}日常{にちじょう}中「四{よん}」多く{おおく}讀む{よむ}「よん」以避諱{いひき}「死{し}」，但月份{げっぷん}中の四月{しがつ}固定{こてい}讀む{よむ}「しがつ」，這是需要{じゅよう}特別{とくべつ}記憶{きおく}の例外{れいがい}。',
            relatedRules: ['月份{げっぷん}の清瘦型{せいそうがた}讀法{よみかた}', '4月{しがつ}、7月{しちがつ}、9月{くがつ}の特殊{とくしゅ}規則{きそく}', '避諱{ひき}規則{きそく}の例外{れいがい}']
        },
        sourceItem: { value: 4, kanji: '四月', reading: 'しがつ' }
    },
    {
        id: 'month_4_sent',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: true,
        stem: '日本の学校は＿＿に始まります。',
        stem_zh: '日本的學校在四月開學。',
        options: [
            { text: 'よんがつ', isCorrect: false, reason: '陷阱{かんけい}！雖然{すいぜん}四{よん}常用{じょうよう}「よん」，但四月{しがつ}固定{こてい}は「しがつ」。' },
            { text: 'しがつ', isCorrect: true, reason: '正確{せいかく}！四月{しがつ}讀作{どくさ}「しがつ」，這是日本{にほん}學年{がくねん}開始{かいし}の月份{げっぷん}。' },
            { text: 'よつき', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}組合{くみあわせ}。' },
            { text: 'よんつき', isCorrect: false, reason: '月份{げっぷん}は「がつ」不是「つき」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '四月{しがつ}固定{こてい}讀作{どくさ}「しがつ」，這是月份{げっぷん}讀法{よみかた}の特殊{とくしゅ}規則{きそく}，必須{ひっす}使用{しよう}「清瘦型{せいそうがた}」發音{はつおん}「し」。',
            trapExplanation: '陷阱{かんけい}利用{りよう}學習者{がくしゅうしゃ}の日常{にちじょう}習慣{しゅうかん}。雖然{すいぜん}為了避諱{ためひき}「死{し}」，日常{にちじょう}多く{おおく}使用{しよう}する「よん」，但月份{げっぷん}中必須{ひっす}嚴格{げんかく}遵守{じゅんしゅ}「しがつ」の讀法{よみかた}。',
            relatedRules: ['四月{しがつ}の特殊{とくしゅ}讀法{よみかた}', '日本{にほん}學年{がくねん}制度{せいど}', '清瘦型{せいそうがた}讀法{よみかた}の強制性{きょうせいせい}']
        },
        sourceItem: { value: 4, kanji: '四月', reading: 'しがつ' }
    },
    {
        id: 'month_4_dial',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: true,
        stem: '桜はいつ咲きますか？',
        stem_zh: '櫻花什麼時候開？',
        dialogue: {
            speakerA: '桜はいつ咲きますか？',
            speakerB: '＿＿ごろ咲{さ}きます。（四月）'
        },
        options: [
            { text: 'よんがつ', isCorrect: false, reason: '陷阱{かんけい}！四月{しがつ}讀まない{よまない}「よんがつ」。' },
            { text: 'しがつ', isCorrect: true, reason: '正確{せいかく}！櫻花{さくら}在四月{しがつ}「しがつ」盛開{せいかい}。' },
            { text: 'よんつき', isCorrect: false, reason: '月份{げっぷん}使用{しよう}する「がつ」不是「つき」。' },
            { text: 'しつ', isCorrect: false, reason: '太短{たたん}了，正確{せいかく}は「しがつ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '回答{かいとう}「什麼{なに}時候{じこう}」時{とき}，四月{しがつ}讀作{どくさ}「しがつ」。',
            trapExplanation: '櫻花季{さくらき}の對話{たいわ}は常見{じょうけん}情境{じょうきょう}，但仍然{なお}要遵守{じゅんしゅ}四月{しがつ}「しがつ」の固定{こてい}讀法{よみかた}。',
            relatedRules: ['四月{しがつ}の固定{こてい}讀法{よみかた}', '時間{じかん}回答{かいとう}の表達{ひょうたつ}方式{ほうしき}']
        },
        sourceItem: { value: 4, kanji: '四月', reading: 'しがつ' }
    },

    // ===== 7月 的三題（清瘦型讀法） =====
    {
        id: 'month_7_pron',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: true,
        stem: '「七月」的正確讀音是？',
        stem_zh: '「七月」的正確讀音是？',
        options: [
            { text: 'なながつ', isCorrect: false, reason: '陷阱{かんけい}！雖然{すいぜん}日常{にちじょう}「七{なな}」多く{おおく}讀む{よむ}「なな」，但七月{しちがつ}固定{こてい}讀む{よむ}「しちがつ」。' },
            { text: 'しちがつ', isCorrect: true, reason: '正確{せいかく}！七月{しちがつ}固定{こてい}讀作{どくさ}「しちがつ」。' },
            { text: 'ななつき', isCorrect: false, reason: '月份{げっぷん}使用{しよう}する「がつ」不是「つき」，且使用{しよう}しない「なな」。' },
            { text: 'しつがつ', isCorrect: false, reason: 'は「しち」不是「しつ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '七月{しちがつ}は「清瘦型{せいそうがた}」讀法{よみかた}，固定{こてい}讀作{どくさ}「しちがつ」，禁止{きんし}使用{しよう}「なながつ」。',
            trapExplanation: '陷阱題{かんけいだい}。雖然{すいぜん}為了避免{ためひめん}與「一{いち}」混淆{こんこう}，日常{にちじょう}多く{おおく}使用{しよう}する「なな」，但月份{げっぷん}中必須{ひっす}使用{しよう}「しちがつ」。',
            relatedRules: ['月份{げっぷん}の清瘦型{せいそうがた}讀法{よみかた}', '七月{しちがつ}の特殊{とくしゅ}規則{きそく}', '「しち」vs「なな」の使用{しよう}場景{ばめん}']
        },
        sourceItem: { value: 7, kanji: '七月', reading: 'しちがつ' }
    },
    {
        id: 'month_7_sent',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: true,
        stem: '夏休みは＿＿から始まります。',
        stem_zh: '暑假從七月開始。',
        options: [
            { text: 'なながつ', isCorrect: false, reason: '陷阱{かんけい}！七月{しちがつ}讀まない{よまない}「なながつ」。' },
            { text: 'しちがつ', isCorrect: true, reason: '正確{せいかく}！七月{しちがつ}讀作{どくさ}「しちがつ」。' },
            { text: 'なな', isCorrect: false, reason: '缺少{けっしょう}「がつ」，不完整{ふかんせい}。' },
            { text: 'しちつき', isCorrect: false, reason: '月份{げっぷん}使用{しよう}する「がつ」不是「つき」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '七月{しちがつ}固定{こてい}讀作{どくさ}「しちがつ」，這是清瘦型{せいそうがた}讀法{よみかた}規則{きそく}。',
            trapExplanation: '雖然{すいぜん}基數詞{きすうし}中「七{なな}」常用{じょうよう}「なな」，但月份{げっぷん}必須{ひっす}使用{しよう}する「しち」。',
            relatedRules: ['七月{しちがつ}の讀法{よみかた}', '清瘦型{せいそうがた}讀法{よみかた}の一致性{いっちせい}']
        },
        sourceItem: { value: 7, kanji: '七月', reading: 'しちがつ' }
    },
    {
        id: 'month_7_dial',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: true,
        stem: '夏はいつですか？',
        stem_zh: '夏天是什麼時候？',
        dialogue: {
            speakerA: '日本の夏はいつですか？',
            speakerB: '＿＿から9月ごろです。（七月）'
        },
        options: [
            { text: 'なながつ', isCorrect: false, reason: '陷阱{かんけい}！七月{しちがつ}固定{こてい}讀む{よむ}「しちがつ」。' },
            { text: 'しちがつ', isCorrect: true, reason: '正確{せいかく}！七月{しちがつ}は「しちがつ」。' },
            { text: 'ななつき', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない這個{この}形式{けいしき}。' },
            { text: 'しち', isCorrect: false, reason: '缺少{けっしょう}「がつ」，不完整{ふかんせい}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '回答{かいとう}季節{きせつ}時間{じかん}時{とき}，七月{しちがつ}仍讀作{なおどくさ}「しちがつ」。',
            trapExplanation: '無論{むろん}什麼{なに}情境{じょうきょう}，七月{しちがつ}都{すべて}固定{こてい}讀む{よむ}「しちがつ」。',
            relatedRules: ['七月{しちがつ}の固定{こてい}讀法{よみかた}', '季節{きせつ}時間{じかん}の表達{ひょうたつ}']
        },
        sourceItem: { value: 7, kanji: '七月', reading: 'しちがつ' }
    },

    // ===== 2月 的三題 =====
    {
        id: 'month_2_pron',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二月」的正確讀音是？',
        stem_zh: '「二月」的正確讀音是？',
        options: [
            { text: 'にがつ', isCorrect: true, reason: '正確{せいかく}！「二月{にがつ}」讀作{どくさ}「にがつ」。' },
            { text: 'ふたがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}「ふた」。' },
            { text: 'にげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」不是「げつ」。' },
            { text: 'じがつ', isCorrect: false, reason: '「じ」不是「二{に}」の讀法{よみかた}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二月{にがつ}」讀作{どくさ}「にがつ」，使用{しよう}音讀{おんどく}。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '二月{にがつ}の發音{はつおん}']
        },
        sourceItem: { value: 2, kanji: '二月', reading: 'にがつ' }
    },
    {
        id: 'month_2_sent',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿は一番短い月です。',
        stem_zh: '二月是最短的月份。',
        options: [
            { text: 'ふたがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'にがつ', isCorrect: true, reason: '正確{せいかく}！二月{にがつ}是一年{いちねん}中最短{さいたん}の月份{げっぷん}。' },
            { text: 'にげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」。' },
            { text: 'にがち', isCorrect: false, reason: '正確{せいかく}は「にがつ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「二月{にがつ}」讀作{どくさ}「にがつ」，是一年{いちねん}中{なか}最短{さいたん}の月份{げっぷん}（28或29天{にち}）。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '二月{にがつ}の特點{とくてん}']
        },
        sourceItem: { value: 2, kanji: '二月', reading: 'にがつ' }
    },
    {
        id: 'month_2_dial',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: false,
        stem: 'バレンタインデーはいつですか？',
        stem_zh: '情人節是什麼時候？',
        dialogue: {
            speakerA: 'バレンタインデーはいつですか？',
            speakerB: '＿＿十四日です。'
        },
        options: [
            { text: 'ふたがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'にがつ', isCorrect: true, reason: '正確{せいかく}！情人節{バレンタインデー}在二月{にがつ}十四日{じゅうよっか}。' },
            { text: 'にげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」。' },
            { text: 'りがつ', isCorrect: false, reason: '「り」不是「二{に}」の讀法{よみかた}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「二月{にがつ}十四日{じゅうよっか}」是情人節{バレンタインデー}。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '日本{にほん}の節日{せつじつ}']
        },
        sourceItem: { value: 2, kanji: '二月', reading: 'にがつ' }
    },

    // ===== 3月 的三題 =====
    {
        id: 'month_3_pron',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: false,
        stem: '「三月」的正確讀音是？',
        stem_zh: '「三月」的正確讀音是？',
        options: [
            { text: 'さんがつ', isCorrect: true, reason: '正確{せいかく}！「三月{さんがつ}」讀作{どくさ}「さんがつ」。' },
            { text: 'みがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}「み」。' },
            { text: 'さんげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」不是「げつ」。' },
            { text: 'さんざつ', isCorrect: false, reason: '「がつ」不濁音化{ふだくおんか}為「ざつ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三月{さんがつ}」讀作{どくさ}「さんがつ」，使用{しよう}音讀{おんどく}。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '三月{さんがつ}の發音{はつおん}']
        },
        sourceItem: { value: 3, kanji: '三月', reading: 'さんがつ' }
    },
    {
        id: 'month_3_sent',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: false,
        stem: '日本の学校は＿＿に卒業します。',
        stem_zh: '日本的學校在三月畢業。',
        options: [
            { text: 'みがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'さんがつ', isCorrect: true, reason: '正確{せいかく}！日本{にほん}的學年{がくねん}在三月{さんがつ}結束{しゅうりょう}。' },
            { text: 'さんげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」。' },
            { text: 'みっがつ', isCorrect: false, reason: '三月{さんがつ}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三月{さんがつ}」是日本{にほん}學年{がくねん}結束{しゅうりょう}和畢業{そつぎょう}の季節{きせつ}。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '日本{にほん}學年{がくねん}制度{せいど}']
        },
        sourceItem: { value: 3, kanji: '三月', reading: 'さんがつ' }
    },
    {
        id: 'month_3_dial',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: false,
        stem: 'ひな祭りはいつですか？',
        stem_zh: '女兒節是什麼時候？',
        dialogue: {
            speakerA: 'ひな祭りはいつですか？',
            speakerB: '＿＿三日です。'
        },
        options: [
            { text: 'みがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'さんがつ', isCorrect: true, reason: '正確{せいかく}！女兒節{ひなまつり}在三月{さんがつ}三日{みっか}。' },
            { text: 'さんげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」。' },
            { text: 'さがつ', isCorrect: false, reason: '少了{すくな}「ん」，正確{せいかく}は「さんがつ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三月{さんがつ}三日{みっか}」是日本{にほん}の女兒節{ひなまつり}（ひな祭{まつ}り）。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '日本{にほん}の節日{せつじつ}']
        },
        sourceItem: { value: 3, kanji: '三月', reading: 'さんがつ' }
    },

    // ===== 5月 的三題 =====
    {
        id: 'month_5_pron',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: false,
        stem: '「五月」的正確讀音是？',
        stem_zh: '「五月」的正確讀音是？',
        options: [
            { text: 'ごがつ', isCorrect: true, reason: '正確{せいかく}！「五月{ごがつ}」讀作{どくさ}「ごがつ」。' },
            { text: 'いつがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}「いつ」。' },
            { text: 'ごげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」不是「げつ」。' },
            { text: 'こがつ', isCorrect: false, reason: '需要{じゅよう}濁音{だくおん}，は「ご」不是「こ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五月{ごがつ}」讀作{どくさ}「ごがつ」，使用{しよう}音讀{おんどく}。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '五月{ごがつ}の發音{はつおん}']
        },
        sourceItem: { value: 5, kanji: '五月', reading: 'ごがつ' }
    },
    {
        id: 'month_5_sent',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿は黄金週間があります。',
        stem_zh: '五月有黃金週。',
        options: [
            { text: 'いつがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'ごがつ', isCorrect: true, reason: '正確{せいかく}！黃金週{ゴールデンウィーク}在五月{ごがつ}初{はじめ}。' },
            { text: 'ごげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」。' },
            { text: 'こがつ', isCorrect: false, reason: '需要{じゅよう}濁音{だくおん}「ご」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「五月{ごがつ}」初{はじめ}有黃金週{ゴールデンウィーク}（Golden Week），是日本{にほん}重要{じゅうよう}の假期{かき}。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '日本{にほん}の假期{かき}']
        },
        sourceItem: { value: 5, kanji: '五月', reading: 'ごがつ' }
    },
    {
        id: 'month_5_dial',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: false,
        stem: 'こどもの日はいつですか？',
        stem_zh: '兒童節是什麼時候？',
        dialogue: {
            speakerA: 'こどもの日はいつですか？',
            speakerB: '＿＿五日です。'
        },
        options: [
            { text: 'いつがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'ごがつ', isCorrect: true, reason: '正確{せいかく}！兒童節{こどものひ}在五月{ごがつ}五日{いつか}。' },
            { text: 'ごげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」。' },
            { text: 'ご', isCorrect: false, reason: '不完整{ふかんせい}，需要{じゅよう}「がつ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「五月{ごがつ}五日{いつか}」是日本{にほん}の兒童節{こどものひ}（こどもの日{ひ}）。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '日本{にほん}の節日{せつじつ}']
        },
        sourceItem: { value: 5, kanji: '五月', reading: 'ごがつ' }
    },

    // ===== 6月 的三題 =====
    {
        id: 'month_6_pron',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: false,
        stem: '「六月」的正確讀音是？',
        stem_zh: '「六月」的正確讀音是？',
        options: [
            { text: 'ろくがつ', isCorrect: true, reason: '正確{せいかく}！「六月{ろくがつ}」讀作{どくさ}「ろくがつ」。' },
            { text: 'むがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}「む」。' },
            { text: 'ろくげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」不是「げつ」。' },
            { text: 'ろっがつ', isCorrect: false, reason: '六月{ろくがつ}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六月{ろくがつ}」讀作{どくさ}「ろくがつ」，使用{しよう}音讀{おんどく}，不促音化{ふそくおんか}。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '六月{ろくがつ}の發音{はつおん}']
        },
        sourceItem: { value: 6, kanji: '六月', reading: 'ろくがつ' }
    },
    {
        id: 'month_6_sent',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: false,
        stem: '日本の＿＿は梅雨の季節です。',
        stem_zh: '日本的六月是梅雨季節。',
        options: [
            { text: 'むがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'ろくがつ', isCorrect: true, reason: '正確{せいかく}！六月{ろくがつ}是日本{にほん}の梅雨{つゆ}季節{きせつ}。' },
            { text: 'ろくげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」。' },
            { text: 'ろっがつ', isCorrect: false, reason: '六月{ろくがつ}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「六月{ろくがつ}」是日本{にほん}の梅雨{つゆ}（rainy season）季節{きせつ}。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '日本{にほん}の季節{きせつ}']
        },
        sourceItem: { value: 6, kanji: '六月', reading: 'ろくがつ' }
    },
    {
        id: 'month_6_dial',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: false,
        stem: '何月に雨が多いですか？',
        stem_zh: '哪個月雨水多？',
        dialogue: {
            speakerA: '日本では何月に雨が多いですか？',
            speakerB: '＿＿ごろが一番多いです。'
        },
        options: [
            { text: 'むつがつ', isCorrect: false, reason: '「むつ」不是「六{ろく}」の讀法{よみかた}。' },
            { text: 'ろくがつ', isCorrect: true, reason: '正確{せいかく}！六月{ろくがつ}是梅雨{つゆ}季節{きせつ}，雨水{あまみず}最多{さいた}。' },
            { text: 'ろくげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」。' },
            { text: 'りくがつ', isCorrect: false, reason: '「りく」是「陸{りく}」の讀法{よみかた}，數字{すうじ}讀む{よむ}「ろく」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「六月{ろくがつ}」是日本{にほん}の梅雨{つゆ}季節{きせつ}。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '日本{にほん}の氣候{きこう}']
        },
        sourceItem: { value: 6, kanji: '六月', reading: 'ろくがつ' }
    },

    // ===== 8月 的三題 =====
    {
        id: 'month_8_pron',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: false,
        stem: '「八月」的正確讀音是？',
        stem_zh: '「八月」的正確讀音是？',
        options: [
            { text: 'はちがつ', isCorrect: true, reason: '正確{せいかく}！「八月{はちがつ}」讀作{どくさ}「はちがつ」。' },
            { text: 'やがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}「や」。' },
            { text: 'はちげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」不是「げつ」。' },
            { text: 'はっがつ', isCorrect: false, reason: '八月{はちがつ}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八月{はちがつ}」讀作{どくさ}「はちがつ」，使用{しよう}音讀{おんどく}，不促音化{ふそくおんか}。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '八月{はちがつ}の發音{はつおん}']
        },
        sourceItem: { value: 8, kanji: '八月', reading: 'はちがつ' }
    },
    {
        id: 'month_8_sent',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿は一番暑い月です。',
        stem_zh: '八月是最熱的月份。',
        options: [
            { text: 'やがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'はちがつ', isCorrect: true, reason: '正確{せいかく}！八月{はちがつ}通常{つうじょう}是一年{いちねん}中{なか}最熱{さいねつ}の月份{げっぷん}。' },
            { text: 'はちげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」。' },
            { text: 'はっがつ', isCorrect: false, reason: '八月{はちがつ}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八月{はちがつ}」是夏天{なつ}最熱{さいねつ}の月份{げっぷん}。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '日本{にほん}の季節{きせつ}']
        },
        sourceItem: { value: 8, kanji: '八月', reading: 'はちがつ' }
    },
    {
        id: 'month_8_dial',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: false,
        stem: 'お盆はいつですか？',
        stem_zh: '盂蘭盆節是什麼時候？',
        dialogue: {
            speakerA: 'お盆はいつですか？',
            speakerB: '＿＿の中旬です。'
        },
        options: [
            { text: 'やつがつ', isCorrect: false, reason: '「やつ」不是「八{はち}」の讀法{よみかた}。' },
            { text: 'はちがつ', isCorrect: true, reason: '正確{せいかく}！盂蘭盆節{おぼん}通常{つうじょう}在八月{はちがつ}中旬{ちゅうじゅん}。' },
            { text: 'はちげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」。' },
            { text: 'はっがつ', isCorrect: false, reason: '八月{はちがつ}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八月{はちがつ}」中旬{ちゅうじゅん}是日本{にほん}の盂蘭盆節{おぼん}（お盆{ぼん}）。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '日本{にほん}の節日{せつじつ}']
        },
        sourceItem: { value: 8, kanji: '八月', reading: 'はちがつ' }
    },

    // ===== 9月 的三題（清瘦型讀法） =====
    {
        id: 'month_9_pron',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: true,
        stem: '「九月」的正確讀音是？',
        stem_zh: '「九月」的正確讀音是？',
        options: [
            { text: 'きゅうがつ', isCorrect: false, reason: '陷阱{かんけい}！九月{くがつ}必須{ひっす}使用{しよう}する「清瘦型{せいそうがた}」讀法{よみかた}「くがつ」。' },
            { text: 'くがつ', isCorrect: true, reason: '正確{せいかく}！九月{くがつ}固定{こてい}讀作{どくさ}「くがつ」。' },
            { text: 'きゅげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」，且應{おう}是「く」。' },
            { text: 'ここのがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}「ここの」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '九月{くがつ}是「清瘦型{せいそうがた}」讀法{よみかた}，固定{こてい}讀作{どくさ}「くがつ」，禁止{きんし}使用{しよう}「きゅうがつ」。',
            trapExplanation: '陷阱題{かんけいだい}。雖然{すいぜん}為了避諱{ためひき}「苦{く}」，日常{にちじょう}多く{おおく}使用{しよう}する「きゅう」，但月份{げっぷん}中必須{ひっす}使用{しよう}「くがつ」。',
            relatedRules: ['月份{げっぷん}の清瘦型{せいそうがた}讀法{よみかた}', '九月{くがつ}の特殊{とくしゅ}規則{きそく}']
        },
        sourceItem: { value: 9, kanji: '九月', reading: 'くがつ' }
    },
    {
        id: 'month_9_sent',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: true,
        stem: '＿＿は秋の始まりです。',
        stem_zh: '九月是秋天的開始。',
        options: [
            { text: 'きゅうがつ', isCorrect: false, reason: '陷阱{かんけい}！月份{げっぷん}中九月{くがつ}固定{こてい}讀む{よむ}「くがつ」。' },
            { text: 'くがつ', isCorrect: true, reason: '正確{せいかく}！九月{くがつ}讀作{どくさ}「くがつ」，是秋天{あき}の開始{かいし}。' },
            { text: 'ここのがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'くげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「九月{くがつ}」讀作{どくさ}「くがつ」，是日本{にほん}秋天{あき}の開始{かいし}。',
            trapExplanation: '雖然{すいぜん}日常{にちじょう}中「九{きゅう}」多く{おおく}讀む{よむ}「きゅう」以避諱{いひき}「苦{く}」，但月份{げっぷん}中必須{ひっす}使用{しよう}「く」。',
            relatedRules: ['九月{くがつ}の特殊{とくしゅ}讀法{よみかた}', '清瘦型{せいそうがた}讀法{よみかた}']
        },
        sourceItem: { value: 9, kanji: '九月', reading: 'くがつ' }
    },
    {
        id: 'month_9_dial',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: true,
        stem: '敬老の日はいつですか？',
        stem_zh: '敬老節是什麼時候？',
        dialogue: {
            speakerA: '敬老の日はいつですか？',
            speakerB: '＿＿の第三月曜日です。'
        },
        options: [
            { text: 'きゅうがつ', isCorrect: false, reason: '陷阱{かんけい}！九月{くがつ}固定{こてい}讀む{よむ}「くがつ」。' },
            { text: 'くがつ', isCorrect: true, reason: '正確{せいかく}！敬老節{けいろうのひ}在九月{くがつ}。' },
            { text: 'ここのがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'きゅげつ', isCorrect: false, reason: '應{おう}是「くがつ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '敬老節{けいろうのひ}（敬老{けいろう}の日{ひ}）在「九月{くがつ}」第三{だいさん}個星期一{げつようび}。',
            trapExplanation: '無論{むろん}什麼{なに}情境{じょうきょう}，九月{くがつ}都{すべて}固定{こてい}讀む{よむ}「くがつ」。',
            relatedRules: ['九月{くがつ}の固定{こてい}讀法{よみかた}', '日本{にほん}の節日{せつじつ}']
        },
        sourceItem: { value: 9, kanji: '九月', reading: 'くがつ' }
    },

    // ===== 10月 的三題 =====
    {
        id: 'month_10_pron',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十月」的正確讀音是？',
        stem_zh: '「十月」的正確讀音是？',
        options: [
            { text: 'じゅうがつ', isCorrect: true, reason: '正確{せいかく}！「十月{じゅうがつ}」讀作{どくさ}「じゅうがつ」。' },
            { text: 'とおがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}「とお」。' },
            { text: 'じゅうげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」不是「げつ」。' },
            { text: 'じゅっがつ', isCorrect: false, reason: '十月{じゅうがつ}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十月{じゅうがつ}」讀作{どくさ}「じゅうがつ」，使用{しよう}音讀{おんどく}。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '十月{じゅうがつ}の發音{はつおん}']
        },
        sourceItem: { value: 10, kanji: '十月', reading: 'じゅうがつ' }
    },
    {
        id: 'month_10_sent',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿は紅葉の季節です。',
        stem_zh: '十月是紅葉季節。',
        options: [
            { text: 'とおがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'じゅうがつ', isCorrect: true, reason: '正確{せいかく}！十月{じゅうがつ}是紅葉{もみじ}の季節{きせつ}。' },
            { text: 'じゅうげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」。' },
            { text: 'じゅっがつ', isCorrect: false, reason: '十月{じゅうがつ}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十月{じゅうがつ}」是秋天{あき}紅葉{もみじ}の季節{きせつ}。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '日本{にほん}の季節{きせつ}']
        },
        sourceItem: { value: 10, kanji: '十月', reading: 'じゅうがつ' }
    },
    {
        id: 'month_10_dial',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: false,
        stem: 'ハロウィンはいつですか？',
        stem_zh: '萬聖節是什麼時候？',
        dialogue: {
            speakerA: 'ハロウィンはいつですか？',
            speakerB: '＿＿三十一日です。'
        },
        options: [
            { text: 'とおがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'じゅうがつ', isCorrect: true, reason: '正確{せいかく}！萬聖節{ハロウィン}在十月{じゅうがつ}三十一日{さんじゅういちにち}。' },
            { text: 'じゅげつ', isCorrect: false, reason: '少了{すくな}「う」，正確{せいかく}は「じゅうがつ」。' },
            { text: 'じゅっがつ', isCorrect: false, reason: '十月{じゅうがつ}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十月{じゅうがつ}三十一日{さんじゅういちにち}」是萬聖節{ハロウィン}（Halloween）。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '國際{こくさい}節日{せつじつ}']
        },
        sourceItem: { value: 10, kanji: '十月', reading: 'じゅうがつ' }
    },

    // ===== 11月 的三題 =====
    {
        id: 'month_11_pron',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十一月」的正確讀音是？',
        stem_zh: '「十一月」的正確讀音是？',
        options: [
            { text: 'じゅういちがつ', isCorrect: true, reason: '正確{せいかく}！「十一月{じゅういちがつ}」讀作{どくさ}「じゅういちがつ」。' },
            { text: 'じゅうひとがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}「ひと」。' },
            { text: 'じゅういちげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」不是「げつ」。' },
            { text: 'じゅいちがつ', isCorrect: false, reason: '少了{すくな}「う」，正確{せいかく}は「じゅういちがつ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十一月{じゅういちがつ}」讀作{どくさ}「じゅういちがつ」，使用{しよう}音讀{おんどく}組合{くみあわせ}。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '十一月{じゅういちがつ}の發音{はつおん}']
        },
        sourceItem: { value: 11, kanji: '十一月', reading: 'じゅういちがつ' }
    },
    {
        id: 'month_11_sent',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿は七五三があります。',
        stem_zh: '十一月有七五三節。',
        options: [
            { text: 'じゅうひとがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'じゅういちがつ', isCorrect: true, reason: '正確{せいかく}！七五三{しちごさん}在十一月{じゅういちがつ}十五日{じゅうごにち}。' },
            { text: 'じゅういちげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」。' },
            { text: 'といちがつ', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十一月{じゅういちがつ}」十五日{じゅうごにち}是日本{にほん}の七五三{しちごさん}節{せつ}，慶祝{けいしゅく}兒童{じどう}成長{せいちょう}。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '日本{にほん}の節日{せつじつ}']
        },
        sourceItem: { value: 11, kanji: '十一月', reading: 'じゅういちがつ' }
    },
    {
        id: 'month_11_dial',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: false,
        stem: '勤労感謝の日はいつですか？',
        stem_zh: '勤勞感謝日是什麼時候？',
        dialogue: {
            speakerA: '勤労感謝の日はいつですか？',
            speakerB: '＿＿二十三日です。'
        },
        options: [
            { text: 'じゅうひとがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'じゅういちがつ', isCorrect: true, reason: '正確{せいかく}！勤勞感謝日{きんろうかんしゃのひ}在十一月{じゅういちがつ}二十三日{にじゅうさんにち}。' },
            { text: 'じゅういちげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」。' },
            { text: 'じゅいちがつ', isCorrect: false, reason: '少了{すくな}「う」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十一月{じゅういちがつ}二十三日{にじゅうさんにち}」是勤勞感謝日{きんろうかんしゃのひ}（勤労{きんろう}感謝{かんしゃ}の日{ひ}）。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '日本{にほん}の祝日{しゅくじつ}']
        },
        sourceItem: { value: 11, kanji: '十一月', reading: 'じゅういちがつ' }
    },

    // ===== 12月 的三題 =====
    {
        id: 'month_12_pron',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十二月」的正確讀音是？',
        stem_zh: '「十二月」的正確讀音是？',
        options: [
            { text: 'じゅうにがつ', isCorrect: true, reason: '正確{せいかく}！「十二月{じゅうにがつ}」讀作{どくさ}「じゅうにがつ」。' },
            { text: 'じゅうふたがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}「ふた」。' },
            { text: 'じゅうにげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」不是「げつ」。' },
            { text: 'とにがつ', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十二月{じゅうにがつ}」讀作{どくさ}「じゅうにがつ」，是一年{いちねん}最後{さいご}の月份{げっぷん}。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '十二月{じゅうにがつ}の發音{はつおん}']
        },
        sourceItem: { value: 12, kanji: '十二月', reading: 'じゅうにがつ' }
    },
    {
        id: 'month_12_sent',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿はクリスマスがあります。',
        stem_zh: '十二月有聖誕節。',
        options: [
            { text: 'じゅうふたがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'じゅうにがつ', isCorrect: true, reason: '正確{せいかく}！聖誕節{クリスマス}在十二月{じゅうにがつ}二十五日{にじゅうごにち}。' },
            { text: 'じゅうにげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」。' },
            { text: 'じゅにがつ', isCorrect: false, reason: '少了{すくな}「う」，正確{せいかく}は「じゅうにがつ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十二月{じゅうにがつ}」二十五日{にじゅうごにち}是聖誕節{クリスマス}（Christmas）。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '國際{こくさい}節日{せつじつ}']
        },
        sourceItem: { value: 12, kanji: '十二月', reading: 'じゅうにがつ' }
    },
    {
        id: 'month_12_dial',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: false,
        stem: '大晦日はいつですか？',
        stem_zh: '除夕是什麼時候？',
        dialogue: {
            speakerA: '大晦日はいつですか？',
            speakerB: '＿＿三十一日です。'
        },
        options: [
            { text: 'じゅうふたがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'じゅうにがつ', isCorrect: true, reason: '正確{せいかく}！除夕{おおみそか}是十二月{じゅうにがつ}三十一日{さんじゅういちにち}。' },
            { text: 'じゅうにげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」。' },
            { text: 'じゅにがつ', isCorrect: false, reason: '少了{すくな}「う」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十二月{じゅうにがつ}三十一日{さんじゅういちにち}」是大晦日{おおみそか}（除夕{じょせき}），一年{いちねん}最後{さいご}の一天{いちにち}。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '日本{にほん}の節日{せつじつ}']
        },
        sourceItem: { value: 12, kanji: '十二月', reading: 'じゅうにがつ' }
    },

    // ===== 比較題：清瘦型 vs 一般讀法 =====
    {
        id: 'month_compare_1',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: true,
        stem: '「四月」「七月」「九月」的共同讀法特徵是什麼？',
        stem_zh: '「四月」「七月」「九月」的共同讀法特徵是什麼？',
        options: [
            { text: '都使用清瘦型讀法（しがつ・しちがつ・くがつ）', isCorrect: true, reason: '正確{せいかく}！這三個{さんこ}月份{げっぷん}都{すべて}使用{しよう}短音{たんおん}清瘦型{せいそうがた}讀法{よみかた}。' },
            { text: '都使用避諱讀法（よんがつ・なながつ・きゅうがつ）', isCorrect: false, reason: '陷阱{かんけい}！月份{げっぷん}中{なか}不使用{ふしよう}避諱{ひき}讀法{よみかた}。' },
            { text: '都使用訓讀', isCorrect: false, reason: '月份{げっぷん}使用{しよう}音讀{おんどく}，不是訓讀{くんどく}。' },
            { text: '都使用長音讀法', isCorrect: false, reason: '清瘦型{せいそうがた}是短音{たんおん}讀法{よみかた}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '4月{しがつ}、7月{しちがつ}、9月{くがつ}都{すべて}使用{しよう}短音{たんおん}清瘦型{せいそうがた}讀法{よみかた}，這是月份{げっぷん}の特殊{とくしゅ}規則{きそく}。',
            trapExplanation: '雖然{すいぜん}日常{にちじょう}中{なか}4、7、9常用{じょうよう}避諱{ひき}讀法{よみかた}，但月份{げっぷん}中{なか}必須{ひっす}使用{しよう}清瘦型{せいそうがた}。',
            relatedRules: ['清瘦型{せいそうがた}讀法{よみかた}の總結{そうけつ}', '月份{げっぷん}の特殊{とくしゅ}規則{きそく}']
        },
        sourceItem: { value: 0, kanji: '清瘦型月份', reading: 'せいそうがたげっぷん' }
    },
    {
        id: 'month_compare_2',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: true,
        stem: '下列哪個讀法是正確的？',
        stem_zh: '下列哪個讀法是正確的？',
        options: [
            { text: '4月讀「しがつ」，7月讀「しちがつ」', isCorrect: true, reason: '正確{せいかく}！這是月份{げっぷん}の清瘦型{せいそうがた}讀法{よみかた}。' },
            { text: '4月讀「よんがつ」，7月讀「なながつ」', isCorrect: false, reason: '陷阱{かんけい}！月份{げっぷん}中{なか}不使用{ふしよう}避諱{ひき}讀法{よみかた}。' },
            { text: '4月讀「しがつ」，7月讀「なながつ」', isCorrect: false, reason: '只有{ただ}4月{しがつ}正確{せいかく}，7月{しちがつ}應{おう}是「しちがつ」。' },
            { text: '4月讀「よんがつ」，7月讀「しちがつ」', isCorrect: false, reason: '只有{ただ}7月{しちがつ}正確{せいかく}，4月{しがつ}應{おう}是「しがつ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '4月{しがつ}讀「しがつ」，7月{しちがつ}讀「しちがつ」，這是月份{げっぷん}の固定{こてい}規則{きそく}。',
            trapExplanation: '這是比較題{ひかくだい}，測試{そくし}對清瘦型{せいそうがた}讀法{よみかた}の理解{りかい}。',
            relatedRules: ['4月{しがつ}の讀法{よみかた}', '7月{しちがつ}の讀法{よみかた}']
        },
        sourceItem: { value: 0, kanji: '4月・7月', reading: 'しがつ・しちがつ' }
    },
    {
        id: 'month_compare_3',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: true,
        stem: '「9月」和「9人」的讀法有何不同？',
        stem_zh: '「9月」和「9人」的讀法有何不同？',
        dialogue: {
            speakerA: '「9月」怎麼讀？',
            speakerB: '9月讀「___」，9人讀「きゅうにん」。'
        },
        options: [
            { text: 'くがつ', isCorrect: true, reason: '正確{せいかく}！月份{げっぷん}用清瘦型{せいそうがた}「く」，人數{にんずう}用避諱{ひき}讀法{よみかた}「きゅう」。' },
            { text: 'きゅうがつ', isCorrect: false, reason: '陷阱{かんけい}！月份{げっぷん}必須{ひっす}用「くがつ」。' },
            { text: 'ここのがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'くげつ', isCorrect: false, reason: '月份{げっぷん}讀む{よむ}「がつ」不是「げつ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '9月{くがつ}用清瘦型{せいそうがた}「く」，9人{きゅうにん}用避諱{ひき}讀法{よみかた}「きゅう」，讀法{よみかた}因場合{ばあい}而異{ことなる}。',
            trapExplanation: '同じ{おなじ}數字{すうじ}在不同{ふどう}場合{ばあい}有不同{ふどう}讀法{よみかた}。',
            relatedRules: ['9の讀法{よみかた}使い分け{つかいわけ}', '清瘦型{せいそうがた}vs避諱{ひき}']
        },
        sourceItem: { value: 9, kanji: '九月/九人', reading: 'くがつ/きゅうにん' }
    },

    // ===== 月份期間表達 =====
    {
        id: 'month_duration_1',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: false,
        stem: '「一ヶ月」的正確讀音是？',
        stem_zh: '「一個月」的正確讀音是？',
        options: [
            { text: 'いっかげつ', isCorrect: true, reason: '正確{せいかく}！期間{きかん}表達{ひょうたつ}「一ヶ月{いっかげつ}」用「かげつ」。' },
            { text: 'いちがつ', isCorrect: false, reason: '「いちがつ」是「1月{いちがつ}」（月份{げっぷん}），不是「一個月{いっかげつ}」（期間{きかん}）。' },
            { text: 'ひとかげつ', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「いっ」。' },
            { text: 'いちかげつ', isCorrect: false, reason: '「一{いち}」促音化{そくおんか}為「いっ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一ヶ月{いっかげつ}」表示{ひょうじ}期間{きかん}「一個月{ひとつきかん}」，與月份{げっぷん}名「一月{いちがつ}」不同{ふどう}。',
            relatedRules: ['期間{きかん}の表達{ひょうたつ}', '「かげつ」vs「がつ」']
        },
        sourceItem: { value: 1, kanji: '一ヶ月', reading: 'いっかげつ' }
    },
    {
        id: 'month_duration_2',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: false,
        stem: '日本に＿＿滞在しました。',
        stem_zh: '在日本停留了三個月。',
        options: [
            { text: 'さんがつ', isCorrect: false, reason: '「さんがつ」是「3月{さんがつ}」（月份{げっぷん}），不是「三個月{さんかげつ}」（期間{きかん}）。' },
            { text: 'さんかげつ', isCorrect: true, reason: '正確{せいかく}！期間{きかん}表達{ひょうたつ}「三ヶ月{さんかげつ}」。' },
            { text: 'みつき', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}形式{けいしき}「さんかげつ」。' },
            { text: 'さんげつ', isCorrect: false, reason: '少了{すくな}「か」，正確{せいかく}は「さんかげつ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三ヶ月{さんかげつ}」表示{ひょうじ}期間{きかん}，與月份{げっぷん}名「三月{さんがつ}」不同{ふどう}。',
            relatedRules: ['期間{きかん}の表達{ひょうたつ}', '「〜ヶ月{かげつ}」の使い方{つかいかた}']
        },
        sourceItem: { value: 3, kanji: '三ヶ月', reading: 'さんかげつ' }
    },
    {
        id: 'month_duration_3',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: false,
        stem: 'どのくらい勉強しましたか？',
        stem_zh: '學習了多長時間？',
        dialogue: {
            speakerA: '日本語をどのくらい勉強しましたか？',
            speakerB: '＿＿勉強しました。（六個月）'
        },
        options: [
            { text: 'ろくがつ', isCorrect: false, reason: '「ろくがつ」是「6月{ろくがつ}」（月份{げっぷん}）。' },
            { text: 'ろっかげつ', isCorrect: true, reason: '正確{せいかく}！「六ヶ月{ろっかげつ}」表示{ひょうじ}期間{きかん}。' },
            { text: 'むかげつ', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「ろく」→「ろっ」。' },
            { text: 'ろくかげつ', isCorrect: false, reason: '「六{ろく}」促音化{そくおんか}為「ろっ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「六ヶ月{ろっかげつ}」中，「六{ろく}」促音化{そくおんか}為「ろっ」。',
            relatedRules: ['期間{きかん}の表達{ひょうたつ}', '促音化{そくおんか}規則{きそく}']
        },
        sourceItem: { value: 6, kanji: '六ヶ月', reading: 'ろっかげつ' }
    },
    {
        id: 'month_duration_4',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: true,
        stem: '「四ヶ月」的正確讀音是？',
        stem_zh: '「四個月」的正確讀音是？',
        options: [
            { text: 'しかげつ', isCorrect: false, reason: '陷阱{かんけい}！期間{きかん}「四ヶ月{よんかげつ}」用避諱{ひき}讀法{よみかた}「よん」。' },
            { text: 'よんかげつ', isCorrect: true, reason: '正確{せいかく}！期間{きかん}「四ヶ月{よんかげつ}」使用{しよう}「よん」。' },
            { text: 'よっかげつ', isCorrect: false, reason: '「四{よん}」不促音化{ふそくおんか}。' },
            { text: 'しがつ', isCorrect: false, reason: '「しがつ」是「4月{しがつ}」（月份{げっぷん}），這裡{ここ}問{とう}の是期間{きかん}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '期間{きかん}「四ヶ月{よんかげつ}」使用{しよう}避諱{ひき}讀法{よみかた}「よん」，與月份{げっぷん}「四月{しがつ}」（し）不同{ふどう}！',
            trapExplanation: '這是重要{じゅうよう}陷阱{かんけい}：月份{げっぷん}用「しがつ」，期間{きかん}用「よんかげつ」。',
            relatedRules: ['「四{よん}」の讀法{よみかた}使い分け{つかいわけ}', '月份{げっぷん}vs期間{きかん}']
        },
        sourceItem: { value: 4, kanji: '四ヶ月', reading: 'よんかげつ' }
    },
    {
        id: 'month_duration_5',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: true,
        stem: '「七ヶ月」的正確讀音是？',
        stem_zh: '「七個月」的正確讀音是？',
        options: [
            { text: 'しちかげつ', isCorrect: false, reason: '陷阱{かんけい}！期間{きかん}「七ヶ月{ななかげつ}」用「なな」更常見{じょうけん}。' },
            { text: 'ななかげつ', isCorrect: true, reason: '正確{せいかく}！期間{きかん}「七ヶ月{ななかげつ}」通常{つうじょう}使用{しよう}「なな」。' },
            { text: 'ななつき', isCorrect: false, reason: '使用{しよう}する「かげつ」不是「つき」。' },
            { text: 'しちがつ', isCorrect: false, reason: '「しちがつ」是「7月{しちがつ}」（月份{げっぷん}）。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '期間{きかん}「七ヶ月{ななかげつ}」通常{つうじょう}使用{しよう}「なな」，與月份{げっぷん}「七月{しちがつ}」（しち）不同{ふどう}！',
            trapExplanation: '月份{げっぷん}用「しちがつ」，期間{きかん}用「ななかげつ」。',
            relatedRules: ['「七{なな}」の讀法{よみかた}使い分け{つかいわけ}', '月份{げっぷん}vs期間{きかん}']
        },
        sourceItem: { value: 7, kanji: '七ヶ月', reading: 'ななかげつ' }
    },
    {
        id: 'month_duration_6',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: true,
        stem: '「九ヶ月」的正確讀音是？',
        stem_zh: '「九個月」的正確讀音是？',
        dialogue: {
            speakerA: '赤ちゃんは何ヶ月ですか？',
            speakerB: '＿＿です。（九個月）'
        },
        options: [
            { text: 'くかげつ', isCorrect: false, reason: '陷阱{かんけい}！期間{きかん}「九ヶ月{きゅうかげつ}」用「きゅう」。' },
            { text: 'きゅうかげつ', isCorrect: true, reason: '正確{せいかく}！期間{きかん}「九ヶ月{きゅうかげつ}」使用{しよう}避諱{ひき}讀法{よみかた}「きゅう」。' },
            { text: 'ここのかげつ', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「きゅう」。' },
            { text: 'くがつ', isCorrect: false, reason: '「くがつ」是「9月{くがつ}」（月份{げっぷん}）。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '期間{きかん}「九ヶ月{きゅうかげつ}」使用{しよう}「きゅう」，與月份{げっぷん}「九月{くがつ}」（く）不同{ふどう}！',
            trapExplanation: '月份{げっぷん}用「くがつ」，期間{きかん}用「きゅうかげつ」。',
            relatedRules: ['「九{きゅう}」の讀法{よみかた}使い分け{つかいわけ}', '月份{げっぷん}vs期間{きかん}']
        },
        sourceItem: { value: 9, kanji: '九ヶ月', reading: 'きゅうかげつ' }
    },

    // ===== 更多應用題 =====
    {
        id: 'month_app_1',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: false,
        stem: '「来月」的正確讀音是？',
        stem_zh: '「下個月」的正確讀音是？',
        options: [
            { text: 'らいげつ', isCorrect: true, reason: '正確{せいかく}！「来月{らいげつ}」讀作{どくさ}「らいげつ」。' },
            { text: 'らいがつ', isCorrect: false, reason: '表示{ひょうじ}「下個月{らいげつ}」時用「げつ」不是「がつ」。' },
            { text: 'きげつ', isCorrect: false, reason: '「来{らい}」讀む{よむ}「らい」。' },
            { text: 'くるつき', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「らいげつ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「来月{らいげつ}」（下個月{らいげつ}）讀作{どくさ}「らいげつ」，用「げつ」。',
            relatedRules: ['時間{じかん}表達{ひょうたつ}', '「げつ」の使い方{つかいかた}']
        },
        sourceItem: { value: 0, kanji: '来月', reading: 'らいげつ' }
    },
    {
        id: 'month_app_2',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿から日本語を勉強しています。',
        stem_zh: '從上個月開始學日語。',
        options: [
            { text: 'せんげつ', isCorrect: true, reason: '正確{せいかく}！「先月{せんげつ}」讀作{どくさ}「せんげつ」。' },
            { text: 'せんがつ', isCorrect: false, reason: '表示{ひょうじ}「上個月{せんげつ}」時用「げつ」不是「がつ」。' },
            { text: 'さきつき', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「せんげつ」。' },
            { text: 'まえつき', isCorrect: false, reason: '不是「まえ」，是「せん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「先月{せんげつ}」（上個月{せんげつ}）讀作{どくさ}「せんげつ」，用「げつ」。',
            relatedRules: ['時間{じかん}表達{ひょうたつ}', '「げつ」の使い方{つかいかた}']
        },
        sourceItem: { value: 0, kanji: '先月', reading: 'せんげつ' }
    },
    {
        id: 'month_app_3',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: false,
        stem: '今月は何月ですか？',
        stem_zh: '這個月是幾月？',
        dialogue: {
            speakerA: '今月は何月ですか？',
            speakerB: '＿＿は五月です。'
        },
        options: [
            { text: 'こんげつ', isCorrect: true, reason: '正確{せいかく}！「今月{こんげつ}」讀作{どくさ}「こんげつ」。' },
            { text: 'こんがつ', isCorrect: false, reason: '表示{ひょうじ}「這個月{こんげつ}」時用「げつ」不是「がつ」。' },
            { text: 'いまつき', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「こんげつ」。' },
            { text: 'いまがつ', isCorrect: false, reason: '使用{しよう}する「今{こん}」+「月{げつ}」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「今月{こんげつ}」（這個月{こんげつ}）讀作{どくさ}「こんげつ」，用「げつ」。',
            relatedRules: ['時間{じかん}表達{ひょうたつ}', '「げつ」の使い方{つかいかた}']
        },
        sourceItem: { value: 0, kanji: '今月', reading: 'こんげつ' }
    },
    {
        id: 'month_app_4',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: false,
        stem: '「毎月」的正確讀音是？',
        stem_zh: '「每個月」的正確讀音是？',
        options: [
            { text: 'まいつき', isCorrect: true, reason: '正確{せいかく}！「毎月{まいつき}」讀作{どくさ}「まいつき」。' },
            { text: 'まいげつ', isCorrect: false, reason: '「毎月{まいつき}」通常{つうじょう}讀む{よむ}「まいつき」。' },
            { text: 'まいがつ', isCorrect: false, reason: '不讀{ふよむ}「がつ」。' },
            { text: 'まいかげつ', isCorrect: false, reason: '「かげつ」是期間{きかん}量詞{りょうし}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「毎月{まいつき}」（每個月{まいつき}）通常{つうじょう}讀作{どくさ}「まいつき」，用訓讀{くんどく}「つき」。',
            relatedRules: ['「毎{まい}」の組合{くみあわせ}', '「つき」の使い方{つかいかた}']
        },
        sourceItem: { value: 0, kanji: '毎月', reading: 'まいつき' }
    },
    {
        id: 'month_app_5',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: false,
        stem: '＿＿の初めに旅行します。',
        stem_zh: '月初去旅行。',
        options: [
            { text: 'つきはじめ', isCorrect: false, reason: '應{おう}說{いう}「月{げつ}の初{はじ}め」。' },
            { text: 'げつのはじめ', isCorrect: true, reason: '正確{せいかく}！「月{げつ}の初{はじ}め」表示{ひょうじ}「月初{げつしょ}」。' },
            { text: 'がつのはじめ', isCorrect: false, reason: '這裡{ここ}用「げつ」不是「がつ」。' },
            { text: 'かげつのはじめ', isCorrect: false, reason: '「かげつ」是期間{きかん}量詞{りょうし}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「月{げつ}の初{はじ}め」表示{ひょうじ}「月初{げつしょ}」，用「げつ」。',
            relatedRules: ['「げつ」の使い方{つかいかた}', '時間{じかん}表達{ひょうたつ}']
        },
        sourceItem: { value: 0, kanji: '月の初め', reading: 'げつのはじめ' }
    },

    // ===== 更多陷阱題 =====
    {
        id: 'month_trap_1',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: true,
        stem: '日本的學年從幾月開始？怎麼讀？',
        stem_zh: '日本的學年從幾月開始？怎麼讀？',
        options: [
            { text: '四月（よんがつ）', isCorrect: false, reason: '陷阱{かんけい}！月份{げっぷん}不用「よんがつ」！' },
            { text: '四月（しがつ）', isCorrect: true, reason: '正確{せいかく}！日本{にほん}學年{がくねん}從「四月{しがつ}」開始{かいし}。' },
            { text: '三月（さんがつ）', isCorrect: false, reason: '三月{さんがつ}是畢業{そつぎょう}季節{きせつ}，不是開學{かいがく}。' },
            { text: '一月（いちがつ）', isCorrect: false, reason: '一月{いちがつ}是新年{しんねん}，不是學年{がくねん}開始{かいし}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '日本{にほん}學年{がくねん}從「四月{しがつ}」開始{かいし}，讀作{どくさ}「しがつ」。',
            trapExplanation: '很多{おおく}學習者{がくしゅうしゃ}會誤讀{ごどく}為「よんがつ」，但月份{げっぷん}固定{こてい}用「しがつ」。',
            relatedRules: ['四月{しがつ}の讀法{よみかた}', '日本{にほん}學年{がくねん}制度{せいど}']
        },
        sourceItem: { value: 4, kanji: '四月', reading: 'しがつ' }
    },
    {
        id: 'month_trap_2',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: true,
        stem: '夏休みは何月から何月まで？',
        stem_zh: '暑假是從幾月到幾月？',
        options: [
            { text: '七月（なながつ）から八月（はちがつ）まで', isCorrect: false, reason: '陷阱{かんけい}！七月{しちがつ}不讀{ふよむ}「なながつ」！' },
            { text: '七月（しちがつ）から八月（はちがつ）まで', isCorrect: true, reason: '正確{せいかく}！暑假{なつやすみ}從「しちがつ」到「はちがつ」。' },
            { text: '六月（ろくがつ）から九月（きゅうがつ）まで', isCorrect: false, reason: '時間{じかん}不對{ふたい}，且九月{くがつ}讀「くがつ」不是「きゅうがつ」。' },
            { text: '七月（しちがつ）から九月（くがつ）まで', isCorrect: false, reason: '暑假{なつやすみ}通常{つうじょう}八月{はちがつ}結束{しゅうりょう}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '暑假{なつやすみ}從「七月{しちがつ}」到「八月{はちがつ}」，注意{ちゅうい}七月{しちがつ}讀「しちがつ」。',
            trapExplanation: '「七{なな}」在月份{げっぷん}中{なか}固定{こてい}讀「しち」。',
            relatedRules: ['七月{しちがつ}の讀法{よみかた}', '日本{にほん}の暑假{なつやすみ}']
        },
        sourceItem: { value: 7, kanji: '七月〜八月', reading: 'しちがつ〜はちがつ' }
    },
    {
        id: 'month_trap_3',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: true,
        stem: '秋はいつから？',
        stem_zh: '秋天從什麼時候開始？',
        dialogue: {
            speakerA: '日本の秋はいつからですか？',
            speakerB: '＿＿からです。（九月）'
        },
        options: [
            { text: 'きゅうがつ', isCorrect: false, reason: '陷阱{かんけい}！九月{くがつ}不讀{ふよむ}「きゅうがつ」！' },
            { text: 'くがつ', isCorrect: true, reason: '正確{せいかく}！秋天{あき}從「九月{くがつ}」開始{かいし}。' },
            { text: 'ここのがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'きゅうつき', isCorrect: false, reason: '使用{しよう}する「がつ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '秋天{あき}從「九月{くがつ}」開始{かいし}，讀作{どくさ}「くがつ」。',
            trapExplanation: '「九{きゅう}」在月份{げっぷん}中{なか}固定{こてい}讀「く」。',
            relatedRules: ['九月{くがつ}の讀法{よみかた}', '日本{にほん}の季節{きせつ}']
        },
        sourceItem: { value: 9, kanji: '九月', reading: 'くがつ' }
    },
    {
        id: 'month_trap_4',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: true,
        stem: '「八ヶ月」的正確讀音是？',
        stem_zh: '「八個月」的正確讀音是？',
        options: [
            { text: 'はちかげつ', isCorrect: false, reason: '陷阱{かんけい}！「八{はち}」促音化{そくおんか}為「はっ」。' },
            { text: 'はっかげつ', isCorrect: true, reason: '正確{せいかく}！「八ヶ月{はっかげつ}」，「八{はち}」促音化{そくおんか}。' },
            { text: 'やっかげつ', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「はち」→「はっ」。' },
            { text: 'はちがつ', isCorrect: false, reason: '「はちがつ」是「8月{はちがつ}」（月份{げっぷん}）。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八ヶ月{はっかげつ}」中，「八{はち}」促音化{そくおんか}為「はっ」。',
            trapExplanation: '期間{きかん}表達{ひょうたつ}時「八{はち}」要促音化{そくおんか}。',
            relatedRules: ['促音化{そくおんか}規則{きそく}', '「八{はち}」の音變{おんへん}']
        },
        sourceItem: { value: 8, kanji: '八ヶ月', reading: 'はっかげつ' }
    },
    {
        id: 'month_trap_5',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: true,
        stem: '「十ヶ月」的正確讀音是？',
        stem_zh: '「十個月」的正確讀音是？',
        options: [
            { text: 'じゅうかげつ', isCorrect: false, reason: '陷阱{かんけい}！「十{じゅう}」促音化{そくおんか}為「じゅっ/じっ」。' },
            { text: 'じゅっかげつ', isCorrect: true, reason: '正確{せいかく}！「十ヶ月{じゅっかげつ}」，「十{じゅう}」促音化{そくおんか}。' },
            { text: 'とおかげつ', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「じゅう」→「じゅっ」。' },
            { text: 'じゅうがつ', isCorrect: false, reason: '「じゅうがつ」是「10月{じゅうがつ}」（月份{げっぷん}）。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十ヶ月{じゅっかげつ}」中，「十{じゅう}」促音化{そくおんか}為「じゅっ」（或{また}は「じっ」）。',
            trapExplanation: '期間{きかん}表達{ひょうたつ}時「十{じゅう}」要促音化{そくおんか}。',
            relatedRules: ['促音化{そくおんか}規則{きそく}', '「十{じゅう}」の音變{おんへん}']
        },
        sourceItem: { value: 10, kanji: '十ヶ月', reading: 'じゅっかげつ' }
    },

    // ===== 綜合應用題 =====
    {
        id: 'month_comp_1',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: false,
        stem: '何月に来ましたか？',
        stem_zh: '你什麼時候來的？',
        dialogue: {
            speakerA: '日本に何月に来ましたか？',
            speakerB: '＿＿に来ました。（三月）'
        },
        options: [
            { text: 'みつき', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'さんがつ', isCorrect: true, reason: '正確{せいかく}！「三月{さんがつ}」。' },
            { text: 'さんげつ', isCorrect: false, reason: '月份{げっぷん}用「がつ」不是「げつ」。' },
            { text: 'さんかげつ', isCorrect: false, reason: '「さんかげつ」是「三個月{さんかげつ}」（期間{きかん}）。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '回答{かいとう}「何月{なんがつ}」時，用月份{げっぷん}名「三月{さんがつ}」。',
            relatedRules: ['月份{げっぷん}の回答{かいとう}方式{ほうしき}', '「がつ」の使い方{つかいかた}']
        },
        sourceItem: { value: 3, kanji: '三月', reading: 'さんがつ' }
    },
    {
        id: 'month_comp_2',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: false,
        stem: '「五ヶ月」的正確讀音是？',
        stem_zh: '「五個月」的正確讀音是？',
        options: [
            { text: 'ごかげつ', isCorrect: true, reason: '正確{せいかく}！「五ヶ月{ごかげつ}」無{ない}音變{おんへん}。' },
            { text: 'ごがつ', isCorrect: false, reason: '「ごがつ」是「5月{ごがつ}」（月份{げっぷん}）。' },
            { text: 'いつかげつ', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「ご」。' },
            { text: 'ごっかげつ', isCorrect: false, reason: '「五{ご}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五ヶ月{ごかげつ}」無{ない}音變{おんへん}，直接{ちょくせつ}「ご」+「かげつ」。',
            relatedRules: ['期間{きかん}の表達{ひょうたつ}', '五{ご}の讀法{よみかた}']
        },
        sourceItem: { value: 5, kanji: '五ヶ月', reading: 'ごかげつ' }
    },
    {
        id: 'month_comp_3',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: false,
        stem: '夏は＿＿ごろ暑くなります。',
        stem_zh: '夏天六月左右開始變熱。',
        options: [
            { text: 'むがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'ろくがつ', isCorrect: true, reason: '正確{せいかく}！「六月{ろくがつ}」讀作{どくさ}「ろくがつ」。' },
            { text: 'ろっがつ', isCorrect: false, reason: '六月{ろくがつ}不促音化{ふそくおんか}。' },
            { text: 'ろくげつ', isCorrect: false, reason: '月份{げっぷん}用「がつ」不是「げつ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「六月{ろくがつ}」讀作{どくさ}「ろくがつ」，是梅雨{つゆ}和夏天{なつ}開始{かいし}の季節{きせつ}。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '日本{にほん}の季節{きせつ}']
        },
        sourceItem: { value: 6, kanji: '六月', reading: 'ろくがつ' }
    },
    {
        id: 'month_comp_4',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: false,
        stem: '誕生日は？',
        stem_zh: '你的生日是？',
        dialogue: {
            speakerA: '誕生日はいつですか？',
            speakerB: '＿＿二十日です。（十一月）'
        },
        options: [
            { text: 'じゅういちがつ', isCorrect: true, reason: '正確{せいかく}！「十一月{じゅういちがつ}」。' },
            { text: 'じゅいちがつ', isCorrect: false, reason: '少了{すくな}「う」，正確{せいかく}は「じゅういちがつ」。' },
            { text: 'とおいちがつ', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「じゅう」。' },
            { text: 'じゅういちげつ', isCorrect: false, reason: '月份{げっぷん}用「がつ」不是「げつ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十一月{じゅういちがつ}」讀作{どくさ}「じゅういちがつ」。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '生日{たんじょうび}の表達{ひょうたつ}']
        },
        sourceItem: { value: 11, kanji: '十一月', reading: 'じゅういちがつ' }
    },
    {
        id: 'month_comp_5',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二ヶ月」的正確讀音是？',
        stem_zh: '「兩個月」的正確讀音是？',
        options: [
            { text: 'にかげつ', isCorrect: true, reason: '正確{せいかく}！「二ヶ月{にかげつ}」無{ない}音變{おんへん}。' },
            { text: 'にがつ', isCorrect: false, reason: '「にがつ」是「2月{にがつ}」（月份{げっぷん}）。' },
            { text: 'ふたかげつ', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「に」。' },
            { text: 'にっかげつ', isCorrect: false, reason: '「二{に}」不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二ヶ月{にかげつ}」無{ない}音變{おんへん}，直接{ちょくせつ}「に」+「かげつ」。',
            relatedRules: ['期間{きかん}の表達{ひょうたつ}', '二{に}の讀法{よみかた}']
        },
        sourceItem: { value: 2, kanji: '二ヶ月', reading: 'にかげつ' }
    },

    // ===== 更多綜合練習 =====
    {
        id: 'month_extra_1',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: false,
        stem: '冬休みは＿＿から始まります。',
        stem_zh: '寒假從十二月開始。',
        options: [
            { text: 'じゅうにがつ', isCorrect: true, reason: '正確{せいかく}！「十二月{じゅうにがつ}」讀作{どくさ}「じゅうにがつ」。' },
            { text: 'じゅにがつ', isCorrect: false, reason: '少了{すくな}「う」。' },
            { text: 'とにがつ', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「じゅう」。' },
            { text: 'じゅうにげつ', isCorrect: false, reason: '月份{げっぷん}用「がつ」不是「げつ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十二月{じゅうにがつ}」是寒假{ふゆやすみ}開始{かいし}の月份{げっぷん}。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '日本{にほん}の假期{かき}']
        },
        sourceItem: { value: 12, kanji: '十二月', reading: 'じゅうにがつ' }
    },
    {
        id: 'month_extra_2',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: false,
        stem: '紅葉はいつ見られますか？',
        stem_zh: '什麼時候可以賞紅葉？',
        dialogue: {
            speakerA: '紅葉はいつ見られますか？',
            speakerB: '＿＿から十一月ごろです。（十月）'
        },
        options: [
            { text: 'じゅうがつ', isCorrect: true, reason: '正確{せいかく}！紅葉{もみじ}季節{きせつ}從「十月{じゅうがつ}」開始{かいし}。' },
            { text: 'とおがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'じゅっがつ', isCorrect: false, reason: '十月{じゅうがつ}不促音化{ふそくおんか}。' },
            { text: 'じゅうげつ', isCorrect: false, reason: '月份{げっぷん}用「がつ」不是「げつ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十月{じゅうがつ}」是紅葉{もみじ}季節{きせつ}の開始{かいし}。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '日本{にほん}の季節{きせつ}']
        },
        sourceItem: { value: 10, kanji: '十月', reading: 'じゅうがつ' }
    },
    {
        id: 'month_extra_3',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: true,
        stem: '「四月一日」怎麼讀？',
        stem_zh: '「四月一日」怎麼讀？',
        options: [
            { text: 'よんがつついたち', isCorrect: false, reason: '陷阱{かんけい}！月份{げっぷん}用「しがつ」不是「よんがつ」！' },
            { text: 'しがつついたち', isCorrect: true, reason: '正確{せいかく}！「四月一日{しがつついたち}」。' },
            { text: 'しがついちにち', isCorrect: false, reason: '「一日{ついたち}」讀「ついたち」不是「いちにち」。' },
            { text: 'よがついちにち', isCorrect: false, reason: '月份{げっぷん}用「しがつ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「四月一日{しがつついたち}」是日本{にほん}學年{がくねん}和會計年度{かいけいねんど}の開始{かいし}。',
            trapExplanation: '注意{ちゅうい}「四月{しがつ}」讀「しがつ」，「一日{ついたち}」讀「ついたち」。',
            relatedRules: ['四月{しがつ}の讀法{よみかた}', '一日{ついたち}の讀法{よみかた}']
        },
        sourceItem: { value: 4, kanji: '四月一日', reading: 'しがつついたち' }
    },
    {
        id: 'month_extra_4',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: true,
        stem: '「七月七日」怎麼讀？',
        stem_zh: '「七月七日」怎麼讀？',
        options: [
            { text: 'なながつなのか', isCorrect: false, reason: '陷阱{かんけい}！月份{げっぷん}用「しちがつ」不是「なながつ」！' },
            { text: 'しちがつなのか', isCorrect: true, reason: '正確{せいかく}！「七月七日{しちがつなのか}」是七夕{たなばた}。' },
            { text: 'しちがつしちにち', isCorrect: false, reason: '「七日{なのか}」讀「なのか」不是「しちにち」。' },
            { text: 'なながつしちにち', isCorrect: false, reason: '兩者{りょうしゃ}都{すべて}錯誤{さくご}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「七月七日{しちがつなのか}」是七夕{たなばた}（Tanabata），月份{げっぷん}用「しちがつ」，日期{にっき}用「なのか」。',
            trapExplanation: '注意{ちゅうい}「七月{しちがつ}」讀「しちがつ」，「七日{なのか}」讀「なのか」。',
            relatedRules: ['七月{しちがつ}の讀法{よみかた}', '七日{なのか}の讀法{よみかた}']
        },
        sourceItem: { value: 7, kanji: '七月七日', reading: 'しちがつなのか' }
    },
    {
        id: 'month_extra_5',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: true,
        stem: '「九月九日」怎麼讀？',
        stem_zh: '「九月九日」怎麼讀？',
        dialogue: {
            speakerA: '重陽の節句はいつですか？',
            speakerB: '＿＿です。（九月九日）'
        },
        options: [
            { text: 'きゅうがつここのか', isCorrect: false, reason: '陷阱{かんけい}！月份{げっぷん}用「くがつ」不是「きゅうがつ」！' },
            { text: 'くがつここのか', isCorrect: true, reason: '正確{せいかく}！「九月九日{くがつここのか}」是重陽節{ちょうようのせっく}。' },
            { text: 'くがつきゅうにち', isCorrect: false, reason: '「九日{ここのか}」讀「ここのか」不是「きゅうにち」。' },
            { text: 'きゅうがつきゅうにち', isCorrect: false, reason: '兩者{りょうしゃ}都{すべて}錯誤{さくご}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「九月九日{くがつここのか}」是重陽節{ちょうようのせっく}，月份{げっぷん}用「くがつ」，日期{にっき}用「ここのか」。',
            trapExplanation: '注意{ちゅうい}「九月{くがつ}」讀「くがつ」，「九日{ここのか}」讀「ここのか」。',
            relatedRules: ['九月{くがつ}の讀法{よみかた}', '九日{ここのか}の讀法{よみかた}']
        },
        sourceItem: { value: 9, kanji: '九月九日', reading: 'くがつここのか' }
    },

    // ===== 最終複習題 =====
    {
        id: 'month_review_1',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: true,
        stem: '下列哪個月份的讀法是正確的？',
        stem_zh: '下列哪個月份的讀法是正確的？',
        options: [
            { text: '4月→しがつ、7月→しちがつ、9月→くがつ', isCorrect: true, reason: '正確{せいかく}！這是清瘦型{せいそうがた}月份{げっぷん}の正確{せいかく}讀法{よみかた}。' },
            { text: '4月→よんがつ、7月→なながつ、9月→きゅうがつ', isCorrect: false, reason: '陷阱{かんけい}！月份{げっぷん}不使用{ふしよう}避諱{ひき}讀法{よみかた}。' },
            { text: '4月→しがつ、7月→なながつ、9月→くがつ', isCorrect: false, reason: '7月{しちがつ}應{おう}讀「しちがつ」。' },
            { text: '4月→よんがつ、7月→しちがつ、9月→くがつ', isCorrect: false, reason: '4月{しがつ}應{おう}讀「しがつ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '4月{しがつ}、7月{しちがつ}、9月{くがつ}都{すべて}使用{しよう}清瘦型{せいそうがた}讀法{よみかた}。',
            trapExplanation: '這是總複習{そうふくしゅう}題{だい}，測試{そくし}對清瘦型{せいそうがた}月份{げっぷん}の掌握{しょうあく}。',
            relatedRules: ['清瘦型{せいそうがた}讀法{よみかた}の總結{そうけつ}', '月份{げっぷん}の特殊{とくしゅ}規則{きそく}']
        },
        sourceItem: { value: 0, kanji: '清瘦型月份', reading: 'せいそうがたげっぷん' }
    },
    {
        id: 'month_review_2',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: true,
        stem: '「がつ」和「げつ」的區別是什麼？',
        stem_zh: '「がつ」和「げつ」的區別是什麼？',
        options: [
            { text: '「がつ」用於月份名（如1月），「げつ」用於其他（如今月、来月）', isCorrect: true, reason: '正確{せいかく}！這是「がつ」和「げつ」の正確{せいかく}區別{くべつ}。' },
            { text: '「がつ」和「げつ」可以互換使用', isCorrect: false, reason: '「がつ」和「げつ」有明確{めいかく}の使い分け{つかいわけ}。' },
            { text: '「げつ」用於月份名，「がつ」用於其他', isCorrect: false, reason: '相反{そうはん}了！' },
            { text: '兩者都只用於月份名', isCorrect: false, reason: '「げつ」用於「今月{こんげつ}」「来月{らいげつ}」等{など}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「がつ」用於月份{げっぷん}名（1月{いちがつ}、2月{にがつ}等{など}），「げつ」用於其他{そのた}（今月{こんげつ}、来月{らいげつ}等{など}）。',
            trapExplanation: '這是總複習{そうふくしゅう}題{だい}，測試{そくし}對「がつ」和「げつ」の理解{りかい}。',
            relatedRules: ['「がつ」の使い方{つかいかた}', '「げつ」の使い方{つかいかた}']
        },
        sourceItem: { value: 0, kanji: 'がつ/げつ', reading: 'がつ/げつ' }
    },
    {
        id: 'month_review_3',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: true,
        stem: '月份名和月份期間的讀法有何不同？',
        stem_zh: '月份名和月份期間的讀法有何不同？',
        dialogue: {
            speakerA: '「4月」和「4ヶ月」有什麼區別？',
            speakerB: '「4月」讀___，「4ヶ月」讀「よんかげつ」。'
        },
        options: [
            { text: 'しがつ', isCorrect: true, reason: '正確{せいかく}！月份{げっぷん}名用清瘦型{せいそうがた}「しがつ」，期間{きかん}用「よんかげつ」。' },
            { text: 'よんがつ', isCorrect: false, reason: '陷阱{かんけい}！月份{げっぷん}名用「しがつ」不是「よんがつ」。' },
            { text: 'よっがつ', isCorrect: false, reason: '不存在{ふそんざい}這個{この}讀法{よみかた}。' },
            { text: 'しかげつ', isCorrect: false, reason: '「しかげつ」不是月份{げっぷん}名の讀法{よみかた}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '月份{げっぷん}名「四月{しがつ}」用清瘦型{せいそうがた}「し」，期間{きかん}「四ヶ月{よんかげつ}」用避諱{ひき}讀法{よみかた}「よん」。',
            trapExplanation: '這是總複習{そうふくしゅう}題{だい}，測試{そくし}對月份{げっぷん}名和期間{きかん}の區別{くべつ}。',
            relatedRules: ['月份{げっぷん}名vs期間{きかん}', '清瘦型{せいそうがた}vs避諱{ひき}']
        },
        sourceItem: { value: 4, kanji: '四月/四ヶ月', reading: 'しがつ/よんかげつ' }
    },
    {
        id: 'month_review_4',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: false,
        stem: '「再来月」的正確讀音是？',
        stem_zh: '「下下個月」的正確讀音是？',
        options: [
            { text: 'さらいげつ', isCorrect: true, reason: '正確{せいかく}！「再来月{さらいげつ}」讀作{どくさ}「さらいげつ」。' },
            { text: 'さらいがつ', isCorrect: false, reason: '表示{ひょうじ}「下下個月{さらいげつ}」時用「げつ」不是「がつ」。' },
            { text: 'またらいげつ', isCorrect: false, reason: '「再{さら}」讀む{よむ}「さら」。' },
            { text: 'ふたたびつき', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「さらいげつ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「再来月{さらいげつ}」（下下個月{さらいげつ}）讀作{どくさ}「さらいげつ」，用「げつ」。',
            relatedRules: ['時間{じかん}表達{ひょうたつ}', '「げつ」の使い方{つかいかた}']
        },
        sourceItem: { value: 0, kanji: '再来月', reading: 'さらいげつ' }
    },
    {
        id: 'month_review_5',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: false,
        stem: '「先々月」的正確讀音是？',
        stem_zh: '「上上個月」的正確讀音是？',
        options: [
            { text: 'せんせんげつ', isCorrect: true, reason: '正確{せいかく}！「先々月{せんせんげつ}」讀作{どくさ}「せんせんげつ」。' },
            { text: 'せんせんがつ', isCorrect: false, reason: '表示{ひょうじ}「上上個月{せんせんげつ}」時用「げつ」不是「がつ」。' },
            { text: 'さきさきつき', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「せんせんげつ」。' },
            { text: 'まえまえつき', isCorrect: false, reason: '使用{しよう}する「先{せん}」不是「前{まえ}」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「先々月{せんせんげつ}」（上上個月{せんせんげつ}）讀作{どくさ}「せんせんげつ」，用「げつ」。',
            relatedRules: ['時間{じかん}表達{ひょうたつ}', '「げつ」の使い方{つかいかた}']
        },
        sourceItem: { value: 0, kanji: '先々月', reading: 'せんせんげつ' }
    },
    {
        id: 'month_review_6',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: false,
        stem: '何ヶ月勉強しましたか？',
        stem_zh: '學了多少個月？',
        dialogue: {
            speakerA: '日本語を何ヶ月勉強しましたか？',
            speakerB: '＿＿勉強しました。（十二個月）'
        },
        options: [
            { text: 'じゅうにかげつ', isCorrect: true, reason: '正確{せいかく}！「十二ヶ月{じゅうにかげつ}」無{ない}音變{おんへん}。' },
            { text: 'じゅうにがつ', isCorrect: false, reason: '「じゅうにがつ」是「12月{じゅうにがつ}」（月份{げっぷん}）。' },
            { text: 'じゅにかげつ', isCorrect: false, reason: '少了{すくな}「う」。' },
            { text: 'とおにかげつ', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十二ヶ月{じゅうにかげつ}」無{ない}音變{おんへん}，直接{ちょくせつ}「じゅうに」+「かげつ」。',
            relatedRules: ['期間{きかん}の表達{ひょうたつ}', '十二{じゅうに}の讀法{よみかた}']
        },
        sourceItem: { value: 12, kanji: '十二ヶ月', reading: 'じゅうにかげつ' }
    },
    {
        id: 'month_review_7',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十一ヶ月」的正確讀音是？',
        stem_zh: '「十一個月」的正確讀音是？',
        options: [
            { text: 'じゅういっかげつ', isCorrect: true, reason: '正確{せいかく}！「十一ヶ月{じゅういっかげつ}」，「一{いち}」促音化{そくおんか}為「いっ」。' },
            { text: 'じゅういちかげつ', isCorrect: false, reason: '「一{いち}」在「か」前{まえ}促音化{そくおんか}為「いっ」。' },
            { text: 'じゅういちがつ', isCorrect: false, reason: '「じゅういちがつ」是「11月{じゅういちがつ}」（月份{げっぷん}）。' },
            { text: 'といっかげつ', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十一ヶ月{じゅういっかげつ}」中，「一{いち}」促音化{そくおんか}為「いっ」。',
            relatedRules: ['期間{きかん}の表達{ひょうたつ}', '促音化{そくおんか}規則{きそく}']
        },
        sourceItem: { value: 11, kanji: '十一ヶ月', reading: 'じゅういっかげつ' }
    },
    {
        id: 'month_review_8',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: false,
        stem: '年末は＿＿です。',
        stem_zh: '年末是十二月。',
        options: [
            { text: 'じゅうにがつ', isCorrect: true, reason: '正確{せいかく}！「十二月{じゅうにがつ}」是年末{ねんまつ}。' },
            { text: 'じゅにがつ', isCorrect: false, reason: '少了{すくな}「う」。' },
            { text: 'じゅうにげつ', isCorrect: false, reason: '月份{げっぷん}名用「がつ」不是「げつ」。' },
            { text: 'とにがつ', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十二月{じゅうにがつ}」是一年{いちねん}最後{さいご}の月份{げっぷん}，稱為{しょうい}年末{ねんまつ}。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '年末{ねんまつ}の表達{ひょうたつ}']
        },
        sourceItem: { value: 12, kanji: '十二月', reading: 'じゅうにがつ' }
    },

    // ===== 額外練習題 (74-100) =====
    {
        id: 'month_extra_6',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: false,
        stem: '「一月一日」的正確讀音是？',
        stem_zh: '「一月一日」的正確讀音是？',
        options: [
            { text: 'いちがつついたち', isCorrect: true, reason: '正確{せいかく}！「一月一日{いちがつついたち}」是新年{しんねん}。' },
            { text: 'いちがついちにち', isCorrect: false, reason: '「一日{ついたち}」讀「ついたち」不是「いちにち」。' },
            { text: 'ひとつきついたち', isCorrect: false, reason: '月份{げっぷん}用「いちがつ」。' },
            { text: 'いちげつついたち', isCorrect: false, reason: '月份{げっぷん}名用「がつ」不是「げつ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一月一日{いちがつついたち}」是新年{しんねん}第一天{だいいちにち}，「一日{ついたち}」讀「ついたち」。',
            relatedRules: ['日期{にっき}の讀法{よみかた}', '新年{しんねん}の表達{ひょうたつ}']
        },
        sourceItem: { value: 1, kanji: '一月一日', reading: 'いちがつついたち' }
    },
    {
        id: 'month_extra_7',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: false,
        stem: '建国記念の日は＿＿十一日です。',
        stem_zh: '建國紀念日是二月十一日。',
        options: [
            { text: 'にがつ', isCorrect: true, reason: '正確{せいかく}！建國紀念日{けんこくきねんのひ}在「二月{にがつ}」十一日{じゅういちにち}。' },
            { text: 'ふたがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'にげつ', isCorrect: false, reason: '月份{げっぷん}名用「がつ」不是「げつ」。' },
            { text: 'じがつ', isCorrect: false, reason: '「じ」不是「二{に}」の讀法{よみかた}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二月{にがつ}十一日{じゅういちにち}」是建國紀念日{けんこくきねんのひ}。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '日本{にほん}の祝日{しゅくじつ}']
        },
        sourceItem: { value: 2, kanji: '二月', reading: 'にがつ' }
    },
    {
        id: 'month_extra_8',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: false,
        stem: '春分の日はいつですか？',
        stem_zh: '春分是什麼時候？',
        dialogue: {
            speakerA: '春分の日はいつですか？',
            speakerB: '＿＿二十日ごろです。'
        },
        options: [
            { text: 'さんがつ', isCorrect: true, reason: '正確{せいかく}！春分{しゅんぶん}在「三月{さんがつ}」二十日{はつか}左右{さゆう}。' },
            { text: 'みがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'さんげつ', isCorrect: false, reason: '月份{げっぷん}名用「がつ」不是「げつ」。' },
            { text: 'さがつ', isCorrect: false, reason: '少了{すくな}「ん」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三月{さんがつ}」二十日{はつか}左右{さゆう}是春分{しゅんぶん}の日{ひ}。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '日本{にほん}の祝日{しゅくじつ}']
        },
        sourceItem: { value: 3, kanji: '三月', reading: 'さんがつ' }
    },
    {
        id: 'month_extra_9',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: true,
        stem: '「四月」和「四日」的讀法有何不同？',
        stem_zh: '「四月」和「四日」的讀法有何不同？',
        options: [
            { text: '四月讀「しがつ」，四日讀「よっか」', isCorrect: true, reason: '正確{せいかく}！月份{げっぷん}用「し」，日期{にっき}用「よっ」。' },
            { text: '四月讀「よんがつ」，四日讀「よっか」', isCorrect: false, reason: '陷阱{かんけい}！四月{しがつ}讀「しがつ」。' },
            { text: '四月讀「しがつ」，四日讀「しにち」', isCorrect: false, reason: '四日{よっか}讀「よっか」。' },
            { text: '兩者都讀「よん」', isCorrect: false, reason: '讀法{よみかた}因場合{ばあい}而異{ことなる}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '四月{しがつ}用清瘦型{せいそうがた}「し」，四日{よっか}用「よっ」，讀法{よみかた}不同{ふどう}。',
            trapExplanation: '同じ{おなじ}數字{すうじ}在不同{ふどう}場合{ばあい}有不同{ふどう}讀法{よみかた}。',
            relatedRules: ['四{し}の讀法{よみかた}使い分け{つかいわけ}', '月份{げっぷん}vs日期{にっき}']
        },
        sourceItem: { value: 4, kanji: '四月/四日', reading: 'しがつ/よっか' }
    },
    {
        id: 'month_extra_10',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: false,
        stem: '憲法記念日は＿＿三日です。',
        stem_zh: '憲法紀念日是五月三日。',
        options: [
            { text: 'ごがつ', isCorrect: true, reason: '正確{せいかく}！憲法紀念日{けんぽうきねんび}在「五月{ごがつ}」三日{みっか}。' },
            { text: 'いつがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'ごげつ', isCorrect: false, reason: '月份{げっぷん}名用「がつ」不是「げつ」。' },
            { text: 'こがつ', isCorrect: false, reason: '需要{じゅよう}濁音{だくおん}「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五月{ごがつ}三日{みっか}」是憲法紀念日{けんぽうきねんび}（Golden Week之一）。',
            relatedRules: ['月份{げっぷん}の讀法{よみかた}', '日本{にほん}の祝日{しゅくじつ}']
        },
        sourceItem: { value: 5, kanji: '五月', reading: 'ごがつ' }
    },
    {
        id: 'month_extra_11',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: false,
        stem: '海の日はいつですか？',
        stem_zh: '海之日是什麼時候？',
        dialogue: {
            speakerA: '海の日はいつですか？',
            speakerB: '＿＿の第三月曜日です。（七月）'
        },
        options: [
            { text: 'しちがつ', isCorrect: true, reason: '正確{せいかく}！海之日{うみのひ}在「七月{しちがつ}」第三{だいさん}個星期一{げつようび}。' },
            { text: 'なながつ', isCorrect: false, reason: '陷阱{かんけい}！月份{げっぷん}用「しちがつ」。' },
            { text: 'しちげつ', isCorrect: false, reason: '月份{げっぷん}名用「がつ」不是「げつ」。' },
            { text: 'なっがつ', isCorrect: false, reason: '不存在{ふそんざい}這個{この}讀法{よみかた}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七月{しちがつ}」の第三{だいさん}個星期一{げつようび}是海之日{うみのひ}。',
            relatedRules: ['七月{しちがつ}の讀法{よみかた}', '日本{にほん}の祝日{しゅくじつ}']
        },
        sourceItem: { value: 7, kanji: '七月', reading: 'しちがつ' }
    },
    {
        id: 'month_extra_12',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: false,
        stem: '「山の日」是哪一天？',
        stem_zh: '「山之日」是哪一天？',
        options: [
            { text: '八月（はちがつ）十一日', isCorrect: true, reason: '正確{せいかく}！山之日{やまのひ}在「八月{はちがつ}」十一日{じゅういちにち}。' },
            { text: '七月（しちがつ）十一日', isCorrect: false, reason: '山之日{やまのひ}在八月{はちがつ}。' },
            { text: '八月（やがつ）十一日', isCorrect: false, reason: '月份{げっぷん}用「はちがつ」。' },
            { text: '九月（くがつ）十一日', isCorrect: false, reason: '山之日{やまのひ}在八月{はちがつ}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八月{はちがつ}十一日{じゅういちにち}」是山之日{やまのひ}（2016年開始{かいし}）。',
            relatedRules: ['八月{はちがつ}の讀法{よみかた}', '日本{にほん}の祝日{しゅくじつ}']
        },
        sourceItem: { value: 8, kanji: '八月', reading: 'はちがつ' }
    },
    {
        id: 'month_extra_13',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: true,
        stem: '「九月」和「九日」的讀法有何不同？',
        stem_zh: '「九月」和「九日」的讀法有何不同？',
        options: [
            { text: '九月讀「くがつ」，九日讀「ここのか」', isCorrect: true, reason: '正確{せいかく}！月份{げっぷん}用「く」，日期{にっき}用「ここの」。' },
            { text: '九月讀「きゅうがつ」，九日讀「きゅうにち」', isCorrect: false, reason: '陷阱{かんけい}！月份{げっぷん}用「くがつ」，日期{にっき}用「ここのか」。' },
            { text: '九月讀「くがつ」，九日讀「きゅうにち」', isCorrect: false, reason: '九日{ここのか}讀「ここのか」。' },
            { text: '兩者都讀「きゅう」', isCorrect: false, reason: '讀法{よみかた}因場合{ばあい}而異{ことなる}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '九月{くがつ}用清瘦型{せいそうがた}「く」，九日{ここのか}用「ここの」。',
            trapExplanation: '同じ{おなじ}數字{すうじ}在不同{ふどう}場合{ばあい}有不同{ふどう}讀法{よみかた}。',
            relatedRules: ['九{く}の讀法{よみかた}使い分け{つかいわけ}', '月份{げっぷん}vs日期{にっき}']
        },
        sourceItem: { value: 9, kanji: '九月/九日', reading: 'くがつ/ここのか' }
    },
    {
        id: 'month_extra_14',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: false,
        stem: '体育の日はいつですか？',
        stem_zh: '體育之日是什麼時候？',
        dialogue: {
            speakerA: 'スポーツの日はいつですか？',
            speakerB: '＿＿の第二月曜日です。（十月）'
        },
        options: [
            { text: 'じゅうがつ', isCorrect: true, reason: '正確{せいかく}！體育之日{スポーツのひ}在「十月{じゅうがつ}」第二{だいに}個星期一{げつようび}。' },
            { text: 'とおがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'じゅうげつ', isCorrect: false, reason: '月份{げっぷん}名用「がつ」不是「げつ」。' },
            { text: 'じゅっがつ', isCorrect: false, reason: '十月{じゅうがつ}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十月{じゅうがつ}」の第二{だいに}個星期一{げつようび}是體育之日{スポーツのひ}（原名{げんめい}体育{たいいく}の日{ひ}）。',
            relatedRules: ['十月{じゅうがつ}の讀法{よみかた}', '日本{にほん}の祝日{しゅくじつ}']
        },
        sourceItem: { value: 10, kanji: '十月', reading: 'じゅうがつ' }
    },
    {
        id: 'month_extra_15',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: false,
        stem: '「文化の日」是哪一天？',
        stem_zh: '「文化之日」是哪一天？',
        options: [
            { text: '十一月（じゅういちがつ）三日', isCorrect: true, reason: '正確{せいかく}！文化之日{ぶんかのひ}在「十一月{じゅういちがつ}」三日{みっか}。' },
            { text: '十月（じゅうがつ）三日', isCorrect: false, reason: '文化之日{ぶんかのひ}在十一月{じゅういちがつ}。' },
            { text: '十一月（じゅいちがつ）三日', isCorrect: false, reason: '少了{すくな}「う」，正確{せいかく}は「じゅういちがつ」。' },
            { text: '十二月（じゅうにがつ）三日', isCorrect: false, reason: '文化之日{ぶんかのひ}在十一月{じゅういちがつ}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十一月{じゅういちがつ}三日{みっか}」是文化之日{ぶんかのひ}。',
            relatedRules: ['十一月{じゅういちがつ}の讀法{よみかた}', '日本{にほん}の祝日{しゅくじつ}']
        },
        sourceItem: { value: 11, kanji: '十一月', reading: 'じゅういちがつ' }
    },
    {
        id: 'month_extra_16',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: false,
        stem: '天皇誕生日は＿＿二十三日です。',
        stem_zh: '天皇生日是二月二十三日。',
        options: [
            { text: 'にがつ', isCorrect: true, reason: '正確{せいかく}！現在{げんざい}の天皇{てんのう}誕生日{たんじょうび}在「二月{にがつ}」二十三日{にじゅうさんにち}。' },
            { text: 'ふたがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'にげつ', isCorrect: false, reason: '月份{げっぷん}名用「がつ」不是「げつ」。' },
            { text: 'じがつ', isCorrect: false, reason: '「じ」不是「二{に}」の讀法{よみかた}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二月{にがつ}二十三日{にじゅうさんにち}」是現在{げんざい}の天皇{てんのう}誕生日{たんじょうび}。',
            relatedRules: ['二月{にがつ}の讀法{よみかた}', '日本{にほん}の祝日{しゅくじつ}']
        },
        sourceItem: { value: 2, kanji: '二月', reading: 'にがつ' }
    },
    {
        id: 'month_extra_17',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: true,
        stem: '「七月」和「七日」的讀法有何不同？',
        stem_zh: '「七月」和「七日」的讀法有何不同？',
        dialogue: {
            speakerA: '「七月」怎麼讀？',
            speakerB: '七月讀「___」，七日讀「なのか」。'
        },
        options: [
            { text: 'しちがつ', isCorrect: true, reason: '正確{せいかく}！月份{げっぷん}用「しち」，日期{にっき}用「なの」。' },
            { text: 'なながつ', isCorrect: false, reason: '陷阱{かんけい}！月份{げっぷん}用「しちがつ」。' },
            { text: 'しちにち', isCorrect: false, reason: '這是日期{にっき}錯誤{さくご}讀法{よみかた}，正確{せいかく}は「なのか」。' },
            { text: 'ななつき', isCorrect: false, reason: '月份{げっぷん}用「がつ」不是「つき」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '七月{しちがつ}用清瘦型{せいそうがた}「しち」，七日{なのか}用「なの」。',
            trapExplanation: '同じ{おなじ}數字{すうじ}在不同{ふどう}場合{ばあい}有不同{ふどう}讀法{よみかた}。',
            relatedRules: ['七{しち}の讀法{よみかた}使い分け{つかいわけ}', '月份{げっぷん}vs日期{にっき}']
        },
        sourceItem: { value: 7, kanji: '七月/七日', reading: 'しちがつ/なのか' }
    },
    {
        id: 'month_extra_18',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: false,
        stem: '「三ヶ月間」的正確讀音是？',
        stem_zh: '「三個月期間」的正確讀音是？',
        options: [
            { text: 'さんかげつかん', isCorrect: true, reason: '正確{せいかく}！「三ヶ月間{さんかげつかん}」無{ない}音變{おんへん}。' },
            { text: 'みかげつかん', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「さん」。' },
            { text: 'さんがつかん', isCorrect: false, reason: '「さんがつ」是「3月{さんがつ}」（月份{げっぷん}）。' },
            { text: 'さんかげつま', isCorrect: false, reason: '應{おう}是「かん」不是「ま」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三ヶ月間{さんかげつかん}」表示{ひょうじ}「三個月{さんかげつ}的期間{きかん}」。',
            relatedRules: ['期間{きかん}の表達{ひょうたつ}', '「〜間{かん}」の使い方{つかいかた}']
        },
        sourceItem: { value: 3, kanji: '三ヶ月間', reading: 'さんかげつかん' }
    },
    {
        id: 'month_extra_19',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: false,
        stem: '半年は＿＿です。',
        stem_zh: '半年是六個月。',
        options: [
            { text: 'ろっかげつ', isCorrect: true, reason: '正確{せいかく}！半年{はんとし}是「六ヶ月{ろっかげつ}」。' },
            { text: 'ろくかげつ', isCorrect: false, reason: '「六{ろく}」促音化{そくおんか}為「ろっ」。' },
            { text: 'むっかげつ', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「ろく」→「ろっ」。' },
            { text: 'ろくがつ', isCorrect: false, reason: '「ろくがつ」是「6月{ろくがつ}」（月份{げっぷん}）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六ヶ月{ろっかげつ}」中，「六{ろく}」促音化{そくおんか}為「ろっ」，等於{ひとしい}半年{はんとし}。',
            relatedRules: ['促音化{そくおんか}規則{きそく}', '期間{きかん}の表達{ひょうたつ}']
        },
        sourceItem: { value: 6, kanji: '六ヶ月', reading: 'ろっかげつ' }
    },
    {
        id: 'month_extra_20',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: false,
        stem: '一年は何ヶ月ですか？',
        stem_zh: '一年有幾個月？',
        dialogue: {
            speakerA: '一年は何ヶ月ですか？',
            speakerB: '＿＿です。（十二個月）'
        },
        options: [
            { text: 'じゅうにかげつ', isCorrect: true, reason: '正確{せいかく}！一年{いちねん}は「十二ヶ月{じゅうにかげつ}」。' },
            { text: 'じゅうにがつ', isCorrect: false, reason: '「じゅうにがつ」是「12月{じゅうにがつ}」（月份{げっぷん}）。' },
            { text: 'じゅにかげつ', isCorrect: false, reason: '少了{すくな}「う」。' },
            { text: 'といにかげつ', isCorrect: false, reason: '使用{しよう}する音讀{おんどく}「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十二ヶ月{じゅうにかげつ}」是一年{いちねん}の期間{きかん}。',
            relatedRules: ['期間{きかん}の表達{ひょうたつ}', '一年{いちねん}の長さ{ながさ}']
        },
        sourceItem: { value: 12, kanji: '十二ヶ月', reading: 'じゅうにかげつ' }
    },
    {
        id: 'month_extra_21',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: false,
        stem: '「年度末」通常指哪個月？',
        stem_zh: '「年度末」通常指哪個月？',
        options: [
            { text: '三月（さんがつ）', isCorrect: true, reason: '正確{せいかく}！日本{にほん}の年度{ねんど}是4月{しがつ}〜3月{さんがつ}，年度末{ねんどまつ}是三月{さんがつ}。' },
            { text: '十二月（じゅうにがつ）', isCorrect: false, reason: '十二月{じゅうにがつ}是年末{ねんまつ}（暦年{れきねん}），不是年度末{ねんどまつ}。' },
            { text: '四月（しがつ）', isCorrect: false, reason: '四月{しがつ}是年度{ねんど}開始{かいし}。' },
            { text: '九月（くがつ）', isCorrect: false, reason: '九月{くがつ}不是年度末{ねんどまつ}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本{にほん}の年度{ねんど}是4月{しがつ}〜3月{さんがつ}，所以{だから}年度末{ねんどまつ}是「三月{さんがつ}」。',
            relatedRules: ['日本{にほん}の年度{ねんど}制度{せいど}', '年末{ねんまつ}vs年度末{ねんどまつ}']
        },
        sourceItem: { value: 3, kanji: '三月', reading: 'さんがつ' }
    },
    {
        id: 'month_extra_22',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: false,
        stem: '日本の入学式は通常＿＿にあります。',
        stem_zh: '日本的入學典禮通常在四月舉行。',
        options: [
            { text: 'しがつ', isCorrect: true, reason: '正確{せいかく}！日本{にほん}の入學式{にゅうがくしき}通常{つうじょう}在「四月{しがつ}」。' },
            { text: 'よんがつ', isCorrect: false, reason: '陷阱{かんけい}！月份{げっぷん}用「しがつ」。' },
            { text: 'さんがつ', isCorrect: false, reason: '三月{さんがつ}是畢業式{そつぎょうしき}。' },
            { text: 'くがつ', isCorrect: false, reason: '九月{くがつ}不是入學{にゅうがく}季節{きせつ}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本{にほん}の入學式{にゅうがくしき}通常{つうじょう}在「四月{しがつ}」舉行{きょうこう}。',
            relatedRules: ['四月{しがつ}の讀法{よみかた}', '日本{にほん}の學校{がっこう}制度{せいど}']
        },
        sourceItem: { value: 4, kanji: '四月', reading: 'しがつ' }
    },
    {
        id: 'month_extra_23',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: false,
        stem: 'お正月休みは？',
        stem_zh: '新年假期是什麼時候？',
        dialogue: {
            speakerA: 'お正月休みはいつですか？',
            speakerB: '＿＿の初めです。（一月）'
        },
        options: [
            { text: 'いちがつ', isCorrect: true, reason: '正確{せいかく}！新年{しんねん}假期{かき}在「一月{いちがつ}」初{はじめ}。' },
            { text: 'ひとがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'いちげつ', isCorrect: false, reason: '月份{げっぷん}名用「がつ」不是「げつ」。' },
            { text: 'いっがつ', isCorrect: false, reason: '一月{いちがつ}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一月{いちがつ}」初{はじめ}是新年{しんねん}假期{かき}（正月{しょうがつ}休み{やすみ}）。',
            relatedRules: ['一月{いちがつ}の讀法{よみかた}', '日本{にほん}の假期{かき}']
        },
        sourceItem: { value: 1, kanji: '一月', reading: 'いちがつ' }
    },
    {
        id: 'month_extra_24',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: false,
        stem: '「秋分の日」是什麼時候？',
        stem_zh: '「秋分」是什麼時候？',
        options: [
            { text: '九月（くがつ）二十三日ごろ', isCorrect: true, reason: '正確{せいかく}！秋分{しゅうぶん}在「九月{くがつ}」二十三日{にじゅうさんにち}左右{さゆう}。' },
            { text: '九月（きゅうがつ）二十三日ごろ', isCorrect: false, reason: '陷阱{かんけい}！月份{げっぷん}用「くがつ」。' },
            { text: '十月（じゅうがつ）二十三日ごろ', isCorrect: false, reason: '秋分{しゅうぶん}在九月{くがつ}。' },
            { text: '八月（はちがつ）二十三日ごろ', isCorrect: false, reason: '秋分{しゅうぶん}在九月{くがつ}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九月{くがつ}二十三日{にじゅうさんにち}」左右{さゆう}是秋分{しゅうぶん}の日{ひ}。',
            relatedRules: ['九月{くがつ}の讀法{よみかた}', '日本{にほん}の祝日{しゅくじつ}']
        },
        sourceItem: { value: 9, kanji: '九月', reading: 'くがつ' }
    },
    {
        id: 'month_extra_25',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: false,
        stem: '昭和の日は＿＿二十九日です。',
        stem_zh: '昭和之日是四月二十九日。',
        options: [
            { text: 'しがつ', isCorrect: true, reason: '正確{せいかく}！昭和之日{しょうわのひ}在「四月{しがつ}」二十九日{にじゅうくにち}。' },
            { text: 'よんがつ', isCorrect: false, reason: '陷阱{かんけい}！月份{げっぷん}用「しがつ」。' },
            { text: 'しげつ', isCorrect: false, reason: '月份{げっぷん}名用「がつ」不是「げつ」。' },
            { text: 'よがつ', isCorrect: false, reason: '不完整{ふかんせい}，應{おう}是「しがつ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四月{しがつ}二十九日{にじゅうくにち}」是昭和之日{しょうわのひ}（Golden Week之一）。',
            relatedRules: ['四月{しがつ}の讀法{よみかた}', '日本{にほん}の祝日{しゅくじつ}']
        },
        sourceItem: { value: 4, kanji: '四月', reading: 'しがつ' }
    },
    {
        id: 'month_extra_26',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: false,
        stem: 'みどりの日はいつですか？',
        stem_zh: '綠之日是什麼時候？',
        dialogue: {
            speakerA: 'みどりの日はいつですか？',
            speakerB: '＿＿四日です。（五月）'
        },
        options: [
            { text: 'ごがつ', isCorrect: true, reason: '正確{せいかく}！綠之日{みどりのひ}在「五月{ごがつ}」四日{よっか}。' },
            { text: 'いつがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'ごげつ', isCorrect: false, reason: '月份{げっぷん}名用「がつ」不是「げつ」。' },
            { text: 'こがつ', isCorrect: false, reason: '需要{じゅよう}濁音{だくおん}「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五月{ごがつ}四日{よっか}」是綠之日{みどりのひ}（Golden Week之一）。',
            relatedRules: ['五月{ごがつ}の讀法{よみかた}', '日本{にほん}の祝日{しゅくじつ}']
        },
        sourceItem: { value: 5, kanji: '五月', reading: 'ごがつ' }
    },
    {
        id: 'month_extra_27',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: true,
        stem: '下列哪個讀法最能體現月份的清瘦型規則？',
        stem_zh: '下列哪個讀法最能體現月份的清瘦型規則？',
        options: [
            { text: '4月讀「し」、7月讀「しち」、9月讀「く」', isCorrect: true, reason: '正確{せいかく}！這三個{さんこ}都{すべて}使用{しよう}短音{たんおん}清瘦型{せいそうがた}讀法{よみかた}。' },
            { text: '4月讀「よん」、7月讀「なな」、9月讀「きゅう」', isCorrect: false, reason: '這是避諱{ひき}讀法{よみかた}，月份{げっぷん}不使用{ふしよう}。' },
            { text: '只有4月使用清瘦型', isCorrect: false, reason: '4月{しがつ}、7月{しちがつ}、9月{くがつ}都{すべて}使用{しよう}清瘦型{せいそうがた}。' },
            { text: '所有月份都使用清瘦型', isCorrect: false, reason: '只有{ただ}4月{しがつ}、7月{しちがつ}、9月{くがつ}使用{しよう}清瘦型{せいそうがた}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '4月{しがつ}、7月{しちがつ}、9月{くがつ}是清瘦型{せいそうがた}月份{げっぷん}，使用{しよう}短音{たんおん}讀法{よみかた}。',
            trapExplanation: '這是總複習{そうふくしゅう}題{だい}，強調{きょうちょう}清瘦型{せいそうがた}規則{きそく}。',
            relatedRules: ['清瘦型{せいそうがた}讀法{よみかた}', '月份{げっぷん}の特殊{とくしゅ}規則{きそく}']
        },
        sourceItem: { value: 0, kanji: '清瘦型月份', reading: 'せいそうがたげっぷん' }
    },
    {
        id: 'month_final_1',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: false,
        stem: '桃の節句は＿＿三日です。',
        stem_zh: '桃花節（女兒節）是三月三日。',
        options: [
            { text: 'さんがつ', isCorrect: true, reason: '正確{せいかく}！桃花節{もものせっく}（女兒節{ひなまつり}）在「三月{さんがつ}」三日{みっか}。' },
            { text: 'みがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'さんげつ', isCorrect: false, reason: '月份{げっぷん}名用「がつ」不是「げつ」。' },
            { text: 'さっがつ', isCorrect: false, reason: '三月{さんがつ}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三月{さんがつ}三日{みっか}」是桃花節{もものせっく}（ひな祭{まつ}り）。',
            relatedRules: ['三月{さんがつ}の讀法{よみかた}', '日本{にほん}の節日{せつじつ}']
        },
        sourceItem: { value: 3, kanji: '三月', reading: 'さんがつ' }
    },
    {
        id: 'month_final_2',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: false,
        stem: '端午の節句はいつですか？',
        stem_zh: '端午節是什麼時候？',
        dialogue: {
            speakerA: '端午の節句はいつですか？',
            speakerB: '＿＿五日です。（五月）'
        },
        options: [
            { text: 'ごがつ', isCorrect: true, reason: '正確{せいかく}！端午節{たんごのせっく}在「五月{ごがつ}」五日{いつか}。' },
            { text: 'いつがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'ごげつ', isCorrect: false, reason: '月份{げっぷん}名用「がつ」不是「げつ」。' },
            { text: 'こがつ', isCorrect: false, reason: '需要{じゅよう}濁音{だくおん}「ご」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五月{ごがつ}五日{いつか}」是端午節{たんごのせっく}（こどもの日{ひ}）。',
            relatedRules: ['五月{ごがつ}の讀法{よみかた}', '日本{にほん}の節日{せつじつ}']
        },
        sourceItem: { value: 5, kanji: '五月', reading: 'ごがつ' }
    },
    {
        id: 'month_final_3',
        category: 'timeDate',
        subcategory: 'months',
        type: 'pronunciation',
        isTrap: false,
        stem: '「年始」通常指哪個月？',
        stem_zh: '「年初」通常指哪個月？',
        options: [
            { text: '一月（いちがつ）', isCorrect: true, reason: '正確{せいかく}！年始{ねんし}是「一月{いちがつ}」。' },
            { text: '四月（しがつ）', isCorrect: false, reason: '四月{しがつ}是年度{ねんど}開始{かいし}，不是年始{ねんし}。' },
            { text: '十二月（じゅうにがつ）', isCorrect: false, reason: '十二月{じゅうにがつ}是年末{ねんまつ}。' },
            { text: '三月（さんがつ）', isCorrect: false, reason: '三月{さんがつ}是年度末{ねんどまつ}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一月{いちがつ}」是年始{ねんし}（新年{しんねん}開始{かいし}）。',
            relatedRules: ['一月{いちがつ}の讀法{よみかた}', '年始{ねんし}の意味{いみ}']
        },
        sourceItem: { value: 1, kanji: '一月', reading: 'いちがつ' }
    },
    {
        id: 'month_final_4',
        category: 'timeDate',
        subcategory: 'months',
        type: 'sentence',
        isTrap: false,
        stem: '台風シーズンは主に＿＿から十月です。',
        stem_zh: '颱風季節主要是從八月到十月。',
        options: [
            { text: 'はちがつ', isCorrect: true, reason: '正確{せいかく}！颱風{たいふう}季節{きせつ}主要{しゅよう}從「八月{はちがつ}」開始{かいし}。' },
            { text: 'やがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'はちげつ', isCorrect: false, reason: '月份{げっぷん}名用「がつ」不是「げつ」。' },
            { text: 'はっがつ', isCorrect: false, reason: '八月{はちがつ}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八月{はちがつ}」到「十月{じゅうがつ}」是颱風{たいふう}季節{きせつ}。',
            relatedRules: ['八月{はちがつ}の讀法{よみかた}', '日本{にほん}の氣候{きこう}']
        },
        sourceItem: { value: 8, kanji: '八月', reading: 'はちがつ' }
    },
    {
        id: 'month_final_5',
        category: 'timeDate',
        subcategory: 'months',
        type: 'dialogue',
        isTrap: false,
        stem: '紅葉シーズンは？',
        stem_zh: '紅葉季節是什麼時候？',
        dialogue: {
            speakerA: '紅葉シーズンはいつですか？',
            speakerB: '＿＿から十二月ごろです。（十月）'
        },
        options: [
            { text: 'じゅうがつ', isCorrect: true, reason: '正確{せいかく}！紅葉{もみじ}季節{きせつ}從「十月{じゅうがつ}」開始{かいし}。' },
            { text: 'とおがつ', isCorrect: false, reason: '月份{げっぷん}使用{しよう}しない訓讀{くんどく}。' },
            { text: 'じゅうげつ', isCorrect: false, reason: '月份{げっぷん}名用「がつ」不是「げつ」。' },
            { text: 'じゅっがつ', isCorrect: false, reason: '十月{じゅうがつ}不促音化{ふそくおんか}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十月{じゅうがつ}」到「十二月{じゅうにがつ}」是紅葉{もみじ}季節{きせつ}。',
            relatedRules: ['十月{じゅうがつ}の讀法{よみかた}', '日本{にほん}の季節{きせつ}']
        },
        sourceItem: { value: 10, kanji: '十月', reading: 'じゅうがつ' }
    }
];
