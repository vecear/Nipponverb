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
    }
];
