import { DatesPracticeQuestion } from '../types';

// 日期練習題 (1日〜31日)
// 每個重要日期3題：發音題、單句敘述題、對話題
// 特別注意：1-10日使用訓讀，14日、20日、24日有特殊讀法

export const dayQuestions: DatesPracticeQuestion[] = [
    // ===== 1日 的三題（特殊讀法：ついたち） =====
    {
        id: 'day_1_pron',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '「一日」（日期）的正確讀音是？',
        stem_zh: '「一日」（日期）的正確讀音是？',
        options: [
            { text: 'ついたち', isCorrect: true, reason: '正確{せいかく}！日期{にっき}「一日{ついたち}」讀作{どくさ}「ついたち」，源於{げんい}「月立{つきたち}ち」。' },
            { text: 'いちにち', isCorrect: false, reason: '陷阱{かんけい}！「いちにち」是「一天{いちにち}」（時間{じかん}長度{ながさ}）の意思{いし}，不是日期{にっき}。' },
            { text: 'いっか', isCorrect: false, reason: '「か」系列{けいれつ}從{から}2日{ふつか}開始{はじめ}，1日{ついたち}は獨特{どくとく}讀法{よみかた}「ついたち」。' },
            { text: 'ひとひ', isCorrect: false, reason: '這不是日期{にっき}の讀法{よみかた}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一日{ついたち}」讀作{どくさ}「ついたち」，這是最特殊{とくしゅ}の日期{にっき}讀法{よみかた}。源於{げんい}古日語{こにほんご}「月立{つきたち}ち」，意指{いし}新月{しんげつ}出現{しゅつげん}、月份{げっぷん}開始{かいし}の那一天{いちにち}。',
            trapExplanation: '這是陷阱題{かんけいだい}。「いちにち」表示{ひょうじ}「一天{いちにち}」の時間{じかん}長度{ながさ}，而日期{にっき}「1號{いちごう}」必須{ひっす}讀む{よむ}「ついたち」。',
            relatedRules: ['日期{にっき}の訓讀{くんどく}傳統{でんとう}', '「ついたち」の語源{ごげん}']
        },
        sourceItem: { value: 1, kanji: '一日', reading: 'ついたち' }
    },
    {
        id: 'day_1_sent',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: true,
        stem: '四月＿＿は新学期です。',
        stem_zh: '四月一日是新學期。',
        options: [
            { text: 'いちにち', isCorrect: false, reason: '陷阱{かんけい}！日期{にっき}讀む{よむ}「ついたち」，不是「いちにち」。' },
            { text: 'ついたち', isCorrect: true, reason: '正確{せいかく}！四月{しがつ}一日{ついたち}是日本{にほん}學年{がくねん}開始{かいし}。' },
            { text: 'いっか', isCorrect: false, reason: '1日{ついたち}は特殊{とくしゅ}讀法{よみかた}「ついたち」。' },
            { text: 'ひとつ', isCorrect: false, reason: '「ひとつ」是萬能{ばんのう}量詞{りょうし}，不用於{もちいず}日期{にっき}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「四月{しがつ}一日{ついたち}」是日本{にほん}新學年{しんがくねん}の開始{かいし}。日期{にっき}「一日{ついたち}」固定{こてい}讀む{よむ}「ついたち」。',
            trapExplanation: '「いちにち」是「一天{いちにち}」（時間{じかん}長度{ながさ}）。日期{にっき}「1號{いちごう}」必須{ひっす}讀む{よむ}「ついたち」，這是需要{じゅよう}特別{とくべつ}記憶{きおく}の例外{れいがい}。',
            relatedRules: ['日期{にっき}の特殊{とくしゅ}讀法{よみかた}', '日本{にほん}學年{がくねん}制度{せいど}']
        },
        sourceItem: { value: 1, kanji: '一日', reading: 'ついたち' }
    },
    {
        id: 'day_1_dial',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '今日は何日ですか？',
        stem_zh: '今天是幾號？',
        dialogue: {
            speakerA: '今日は何日ですか？',
            speakerB: '＿＿です。（一號）'
        },
        options: [
            { text: 'いちにち', isCorrect: false, reason: '「いちにち」是「一天{いちにち}」，不是日期{にっき}。' },
            { text: 'ついたち', isCorrect: true, reason: '正確{せいかく}！今天{きょう}是1號{いちごう}。' },
            { text: 'いっぴ', isCorrect: false, reason: '這不是日期{にっき}の讀法{よみかた}。' },
            { text: 'ひとにち', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '回答{かいとう}「何日{なんにち}」時{とき}，1號{いちごう}讀作{どくさ}「ついたち」。',
            relatedRules: ['日期{にっき}の質問{しつもん}與回答{かいとう}', '「何日{なんにち}」の使用{しよう}']
        },
        sourceItem: { value: 1, kanji: '一日', reading: 'ついたち' }
    },

    // ===== 2日 的三題 =====
    {
        id: 'day_2_pron',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '「二日」的正確讀音是？',
        stem_zh: '「二日」的正確讀音是？',
        options: [
            { text: 'ふつか', isCorrect: true, reason: '正確{せいかく}！「二日{ふつか}」讀作{どくさ}「ふつか」。' },
            { text: 'にか', isCorrect: false, reason: '陷阱{かんけい}！日期{にっき}1-10使用{しよう}訓讀{くんどく}，不是「にか」。' },
            { text: 'ににち', isCorrect: false, reason: '「にち」用於{もちいる}11日以後{いご}の日期{にっき}。' },
            { text: 'ふたか', isCorrect: false, reason: '應{おう}是「ふつか」不是「ふたか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二日{ふつか}」讀作{どくさ}「ふつか」，使用{しよう}訓讀{くんどく}系統{けいとう}。',
            trapExplanation: '日期{にっき}1-10使用{しよう}古日語{こにほんご}の訓讀{くんどく}系統{けいとう}，與現代{げんだい}數字{すうじ}讀法{よみかた}不同{ふどう}。',
            relatedRules: ['日期{にっき}の訓讀{くんどく}', '1-10日の特殊{とくしゅ}讀法{よみかた}']
        },
        sourceItem: { value: 2, kanji: '二日', reading: 'ふつか' }
    },
    {
        id: 'day_2_sent',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '旅行は＿＿間です。',
        stem_zh: '旅行是兩天。',
        options: [
            { text: 'にか', isCorrect: false, reason: '日期{にっき}使用{しよう}訓讀{くんどく}「ふつか」。' },
            { text: 'ふつか', isCorrect: true, reason: '正確{せいかく}！「ふつか間{かん}」表示{ひょうじ}兩天{ふつか}。' },
            { text: 'ふたか', isCorrect: false, reason: '應{おう}是「ふつか」。' },
            { text: 'にちにち', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ふつか間{かん}」表示{ひょうじ}兩天{ふつか}の期間{きかん}。',
            relatedRules: ['日期{にっき}の讀法{よみかた}', '期間{きかん}表達{ひょうたつ}']
        },
        sourceItem: { value: 2, kanji: '二日', reading: 'ふつか' }
    },
    {
        id: 'day_2_dial',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '節分はいつですか？',
        stem_zh: '節分是什麼時候？',
        dialogue: {
            speakerA: '節分はいつですか？',
            speakerB: '二月＿＿ごろです。'
        },
        options: [
            { text: 'にか', isCorrect: false, reason: '日期{にっき}使用{しよう}訓讀{くんどく}。' },
            { text: 'ふつか', isCorrect: true, reason: '正確{せいかく}！節分{せつぶん}在二月{にがつ}二日{ふつか}前後{ぜんご}。' },
            { text: 'ににち', isCorrect: false, reason: '2日{ふつか}使用{しよう}訓讀{くんどく}。' },
            { text: 'ふたひ', isCorrect: false, reason: '應{おう}是「ふつか」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「二月{にがつ}二日{ふつか}」是節分{せつぶん}の時期{じき}。',
            relatedRules: ['日期{にっき}の讀法{よみかた}', '日本{にほん}の節日{せつじつ}']
        },
        sourceItem: { value: 2, kanji: '二日', reading: 'ふつか' }
    },

    // ===== 3日 的三題 =====
    {
        id: 'day_3_pron',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「三日」的正確讀音是？',
        stem_zh: '「三日」的正確讀音是？',
        options: [
            { text: 'みっか', isCorrect: true, reason: '正確{せいかく}！「三日{みっか}」讀作{どくさ}「みっか」，有促音{そくおん}。' },
            { text: 'さんか', isCorrect: false, reason: '日期{にっき}1-10使用{しよう}訓讀{くんどく}，不是「さんか」。' },
            { text: 'さんにち', isCorrect: false, reason: '「にち」用於{もちいる}11日以後{いご}。' },
            { text: 'みか', isCorrect: false, reason: '需要{じゅよう}促音{そくおん}，是「みっか」不是「みか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三日{みっか}」讀作{どくさ}「みっか」，有促音{そくおん}「っ」。',
            relatedRules: ['日期{にっき}の訓讀{くんどく}', '促音{そくおん}の重要性{じゅうようせい}']
        },
        sourceItem: { value: 3, kanji: '三日', reading: 'みっか' }
    },
    {
        id: 'day_3_sent',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: 'ひな祭りは三月＿＿です。',
        stem_zh: '女兒節是三月三日。',
        options: [
            { text: 'さんか', isCorrect: false, reason: '日期{にっき}使用{しよう}訓讀{くんどく}。' },
            { text: 'みっか', isCorrect: true, reason: '正確{せいかく}！女兒節{ひなまつり}在三月{さんがつ}三日{みっか}。' },
            { text: 'みか', isCorrect: false, reason: '需要{じゅよう}促音{そくおん}「っ」。' },
            { text: 'さんにち', isCorrect: false, reason: '3日{みっか}使用{しよう}訓讀{くんどく}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「三月{さんがつ}三日{みっか}」是ひな祭{まつ}り（女兒節{ひなまつり}）。',
            relatedRules: ['日期{にっき}の讀法{よみかた}', '日本{にほん}の節日{せつじつ}']
        },
        sourceItem: { value: 3, kanji: '三日', reading: 'みっか' }
    },
    {
        id: 'day_3_dial',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '休みは何日ですか？',
        stem_zh: '休假幾天？',
        dialogue: {
            speakerA: '休みは何日ですか？',
            speakerB: '＿＿間です。（三天）'
        },
        options: [
            { text: 'さんにち', isCorrect: false, reason: '天數{にっすう}使用{しよう}訓讀{くんどく}「みっか」。' },
            { text: 'みっか', isCorrect: true, reason: '正確{せいかく}！「みっか間{かん}」是三天{さんにち}。' },
            { text: 'みか', isCorrect: false, reason: '需要{じゅよう}促音{そくおん}。' },
            { text: 'さんか', isCorrect: false, reason: '使用{しよう}訓讀{くんどく}「みっか」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「みっか間{かん}」表示{ひょうじ}三天{さんにち}の休假{やすみ}。',
            relatedRules: ['日期{にっき}の讀法{よみかた}', '期間{きかん}表達{ひょうたつ}']
        },
        sourceItem: { value: 3, kanji: '三日', reading: 'みっか' }
    },

    // ===== 4日 的三題 =====
    {
        id: 'day_4_pron',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '「四日」的正確讀音是？',
        stem_zh: '「四日」的正確讀音是？',
        options: [
            { text: 'よっか', isCorrect: true, reason: '正確{せいかく}！「四日{よっか}」讀作{どくさ}「よっか」，有促音{そくおん}且是短音{たんおん}。' },
            { text: 'よんか', isCorrect: false, reason: '陷阱{かんけい}！日期{にっき}使用{しよう}訓讀{くんどく}「よっか」，不是「よんか」。' },
            { text: 'しか', isCorrect: false, reason: '日期{にっき}使用{しよう}「よ」不是「し」。' },
            { text: 'ようか', isCorrect: false, reason: '陷阱{かんけい}！「ようか」是八日{ようか}，四日{よっか}是短音{たんおん}「よっか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四日{よっか}」讀作{どくさ}「よっか」，注意{ちゅうい}是短音{たんおん}（促音{そくおん}+か）。',
            trapExplanation: '這是陷阱題{かんけいだい}。「よっか」（四日{よっか}）是短音{たんおん}，「ようか」（八日{ようか}）是長音{ちょうおん}。這是常見{じょうけん}混淆{こんこう}點{てん}。',
            relatedRules: ['「よっか」vs「ようか」の區別{くべつ}', '日期{にっき}の訓讀{くんどく}']
        },
        sourceItem: { value: 4, kanji: '四日', reading: 'よっか' }
    },
    {
        id: 'day_4_sent',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: true,
        stem: '仕事は＿＿間で終わります。',
        stem_zh: '工作四天就結束。',
        options: [
            { text: 'よんにち', isCorrect: false, reason: '期間{きかん}使用{しよう}訓讀{くんどく}。' },
            { text: 'よっか', isCorrect: true, reason: '正確{せいかく}！「よっか間{かん}」是四天{よっか}。' },
            { text: 'ようか', isCorrect: false, reason: '陷阱{かんけい}！「ようか」是八日{ようか}，四日{よっか}是「よっか」。' },
            { text: 'しか', isCorrect: false, reason: '日期{にっき}使用{しよう}「よ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「よっか間{かん}」表示{ひょうじ}四天{よっか}。',
            trapExplanation: '注意{ちゅうい}「よっか」（四日{よっか}）與「ようか」（八日{ようか}）の發音{はつおん}區別{くべつ}。',
            relatedRules: ['日期{にっき}の讀法{よみかた}', '長短音{ちょうたんおん}の區別{くべつ}']
        },
        sourceItem: { value: 4, kanji: '四日', reading: 'よっか' }
    },
    {
        id: 'day_4_dial',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '誕生日はいつですか？',
        stem_zh: '生日是什麼時候？',
        dialogue: {
            speakerA: '誕生日はいつですか？',
            speakerB: '五月＿＿です。（四日）'
        },
        options: [
            { text: 'よんにち', isCorrect: false, reason: '日期{にっき}使用{しよう}訓讀{くんどく}。' },
            { text: 'よっか', isCorrect: true, reason: '正確{せいかく}！五月{ごがつ}四日{よっか}。' },
            { text: 'ようか', isCorrect: false, reason: '這是八日{ようか}の讀法{よみかた}。' },
            { text: 'しにち', isCorrect: false, reason: '日期{にっき}使用{しよう}「よ」系列{けいれつ}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「五月{ごがつ}四日{よっか}」の「四日{よっか}」讀作{どくさ}「よっか」。',
            relatedRules: ['日期{にっき}の讀法{よみかた}', '生日{たんじょうび}表達{ひょうたつ}']
        },
        sourceItem: { value: 4, kanji: '四日', reading: 'よっか' }
    },

    // ===== 5日 的三題 =====
    {
        id: 'day_5_pron',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「五日」的正確讀音是？',
        stem_zh: '「五日」的正確讀音是？',
        options: [
            { text: 'いつか', isCorrect: true, reason: '正確{せいかく}！「五日{いつか}」讀作{どくさ}「いつか」。' },
            { text: 'ごか', isCorrect: false, reason: '日期{にっき}使用{しよう}訓讀{くんどく}，不是「ごか」。' },
            { text: 'ごにち', isCorrect: false, reason: '「にち」用於{もちいる}11日以後{いご}。' },
            { text: 'いっか', isCorrect: false, reason: '應{おう}是「いつか」不是「いっか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五日{いつか}」讀作{どくさ}「いつか」，與「いつつ」（五個{いつつ}）相關{かんけい}。',
            relatedRules: ['日期{にっき}の訓讀{くんどく}', '訓讀{くんどく}數字{すうじ}系統{けいとう}']
        },
        sourceItem: { value: 5, kanji: '五日', reading: 'いつか' }
    },
    {
        id: 'day_5_sent',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: 'こどもの日は五月＿＿です。',
        stem_zh: '兒童節是五月五日。',
        options: [
            { text: 'ごか', isCorrect: false, reason: '日期{にっき}使用{しよう}訓讀{くんどく}。' },
            { text: 'いつか', isCorrect: true, reason: '正確{せいかく}！兒童節{こどものひ}在五月{ごがつ}五日{いつか}。' },
            { text: 'ごにち', isCorrect: false, reason: '5日{いつか}使用{しよう}訓讀{くんどく}。' },
            { text: 'いっか', isCorrect: false, reason: '應{おう}是「いつか」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「五月{ごがつ}五日{いつか}」是こどもの日{ひ}（兒童節{こどものひ}）。',
            relatedRules: ['日期{にっき}の讀法{よみかた}', '日本{にほん}の節日{せつじつ}']
        },
        sourceItem: { value: 5, kanji: '五日', reading: 'いつか' }
    },
    {
        id: 'day_5_dial',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '出発は何日ですか？',
        stem_zh: '出發是幾號？',
        dialogue: {
            speakerA: '出発は何日ですか？',
            speakerB: '＿＿です。（五號）'
        },
        options: [
            { text: 'ごにち', isCorrect: false, reason: '日期{にっき}使用{しよう}訓讀{くんどく}。' },
            { text: 'いつか', isCorrect: true, reason: '正確{せいかく}！五號{いつか}出發{しゅっぱつ}。' },
            { text: 'ごか', isCorrect: false, reason: '使用{しよう}訓讀{くんどく}「いつか」。' },
            { text: 'いっか', isCorrect: false, reason: '應{おう}是「いつか」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「五日{いつか}」回答{かいとう}「何日{なんにち}」の問題{もんだい}。',
            relatedRules: ['日期{にっき}の讀法{よみかた}', '日程{にってい}表達{ひょうたつ}']
        },
        sourceItem: { value: 5, kanji: '五日', reading: 'いつか' }
    },

    // ===== 6日 的三題 =====
    {
        id: 'day_6_pron',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「六日」的正確讀音是？',
        stem_zh: '「六日」的正確讀音是？',
        options: [
            { text: 'むいか', isCorrect: true, reason: '正確{せいかく}！「六日{むいか}」讀作{どくさ}「むいか」。' },
            { text: 'ろっか', isCorrect: false, reason: '日期{にっき}使用{しよう}訓讀{くんどく}「む」不是「ろく」。' },
            { text: 'ろくにち', isCorrect: false, reason: '「にち」用於{もちいる}11日以後{いご}。' },
            { text: 'むっか', isCorrect: false, reason: '應{おう}是「むいか」不是「むっか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六日{むいか}」讀作{どくさ}「むいか」，與「むっつ」（六個{むっつ}）相關{かんけい}但不同{ふどう}。',
            relatedRules: ['日期{にっき}の訓讀{くんどく}', '「む」系列{けいれつ}の讀法{よみかた}']
        },
        sourceItem: { value: 6, kanji: '六日', reading: 'むいか' }
    },
    {
        id: 'day_6_sent',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '会議は来週の＿＿です。',
        stem_zh: '會議是下週六號。',
        options: [
            { text: 'ろっか', isCorrect: false, reason: '日期{にっき}使用{しよう}訓讀{くんどく}「むいか」。' },
            { text: 'むいか', isCorrect: true, reason: '正確{せいかく}！下週{らいしゅう}六號{むいか}有會議{かいぎ}。' },
            { text: 'ろくにち', isCorrect: false, reason: '6日{むいか}使用{しよう}訓讀{くんどく}。' },
            { text: 'むっか', isCorrect: false, reason: '應{おう}是「むいか」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「来週{らいしゅう}の六日{むいか}」表示{ひょうじ}下週{らいしゅう}六號{むいか}。',
            relatedRules: ['日期{にっき}の讀法{よみかた}', '日程{にってい}表達{ひょうたつ}']
        },
        sourceItem: { value: 6, kanji: '六日', reading: 'むいか' }
    },
    {
        id: 'day_6_dial',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '締め切りは何日ですか？',
        stem_zh: '截止日期是幾號？',
        dialogue: {
            speakerA: '締め切りは何日ですか？',
            speakerB: '＿＿です。（六號）'
        },
        options: [
            { text: 'ろくにち', isCorrect: false, reason: '日期{にっき}使用{しよう}訓讀{くんどく}。' },
            { text: 'むいか', isCorrect: true, reason: '正確{せいかく}！截止{しめきり}是六號{むいか}。' },
            { text: 'ろっか', isCorrect: false, reason: '使用{しよう}訓讀{くんどく}「むいか」。' },
            { text: 'むっか', isCorrect: false, reason: '應{おう}是「むいか」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「六日{むいか}」回答{かいとう}截止{しめきり}日期{にっき}。',
            relatedRules: ['日期{にっき}の讀法{よみかた}', '商務{しょうむ}表達{ひょうたつ}']
        },
        sourceItem: { value: 6, kanji: '六日', reading: 'むいか' }
    },

    // ===== 7日 的三題 =====
    {
        id: 'day_7_pron',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「七日」的正確讀音是？',
        stem_zh: '「七日」的正確讀音是？',
        options: [
            { text: 'なのか', isCorrect: true, reason: '正確{せいかく}！「七日{なのか}」讀作{どくさ}「なのか」。' },
            { text: 'しちか', isCorrect: false, reason: '日期{にっき}使用{しよう}訓讀{くんどく}「なの」不是「しち」。' },
            { text: 'ななにち', isCorrect: false, reason: '7日{なのか}使用{しよう}訓讀{くんどく}「なのか」。' },
            { text: 'なのっか', isCorrect: false, reason: '不需要{じゅようなく}促音{そくおん}，是「なのか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七日{なのか}」讀作{どくさ}「なのか」，與「ななつ」（七個{ななつ}）相關{かんけい}但變形{へんけい}。',
            relatedRules: ['日期{にっき}の訓讀{くんどく}', '「なな」系列{けいれつ}の變化{へんか}']
        },
        sourceItem: { value: 7, kanji: '七日', reading: 'なのか' }
    },
    {
        id: 'day_7_sent',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '七夕は七月＿＿です。',
        stem_zh: '七夕是七月七日。',
        options: [
            { text: 'しちか', isCorrect: false, reason: '日期{にっき}使用{しよう}訓讀{くんどく}。' },
            { text: 'なのか', isCorrect: true, reason: '正確{せいかく}！七夕{たなばた}在七月{しちがつ}七日{なのか}。' },
            { text: 'ななにち', isCorrect: false, reason: '7日{なのか}使用{しよう}訓讀{くんどく}。' },
            { text: 'なのっか', isCorrect: false, reason: '不需要{じゅようなく}促音{そくおん}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「七月{しちがつ}七日{なのか}」是七夕{たなばた}（牛郎織女{おりひめひこぼし}節{せつ}）。',
            relatedRules: ['日期{にっき}の讀法{よみかた}', '日本{にほん}の節日{せつじつ}']
        },
        sourceItem: { value: 7, kanji: '七日', reading: 'なのか' }
    },
    {
        id: 'day_7_dial',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '予約は何日からですか？',
        stem_zh: '預約從幾號開始？',
        dialogue: {
            speakerA: '予約は何日からですか？',
            speakerB: '＿＿からです。（七號）'
        },
        options: [
            { text: 'ななにち', isCorrect: false, reason: '日期{にっき}使用{しよう}訓讀{くんどく}。' },
            { text: 'なのか', isCorrect: true, reason: '正確{せいかく}！從{から}七號{なのか}開始{はじめ}預約{よやく}。' },
            { text: 'しちか', isCorrect: false, reason: '使用{しよう}訓讀{くんどく}「なのか」。' },
            { text: 'なのっか', isCorrect: false, reason: '不需要{じゅようなく}促音{そくおん}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「七日{なのか}から」表示{ひょうじ}從{から}七號{なのか}開始{はじめ}。',
            relatedRules: ['日期{にっき}の讀法{よみかた}', '預約{よやく}表達{ひょうたつ}']
        },
        sourceItem: { value: 7, kanji: '七日', reading: 'なのか' }
    },

    // ===== 8日 的三題 =====
    {
        id: 'day_8_pron',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '「八日」的正確讀音是？',
        stem_zh: '「八日」的正確讀音是？',
        options: [
            { text: 'ようか', isCorrect: true, reason: '正確{せいかく}！「八日{ようか}」讀作{どくさ}「ようか」，是長音{ちょうおん}。' },
            { text: 'はちか', isCorrect: false, reason: '日期{にっき}使用{しよう}訓讀{くんどく}「ようか」不是「はちか」。' },
            { text: 'やっか', isCorrect: false, reason: '應{おう}是長音{ちょうおん}「ようか」不是「やっか」。' },
            { text: 'よっか', isCorrect: false, reason: '陷阱{かんけい}！「よっか」是四日{よっか}，八日{ようか}是長音{ちょうおん}「ようか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八日{ようか}」讀作{どくさ}「ようか」，是長音{ちょうおん}。',
            trapExplanation: '這是陷阱題{かんけいだい}。「ようか」（八日{ようか}）是長音{ちょうおん}，「よっか」（四日{よっか}）是短音{たんおん}。這是最容易{さいようい}混淆{こんこう}の日期{にっき}對{つい}。',
            relatedRules: ['「よっか」vs「ようか」の區別{くべつ}', '長短音{ちょうたんおん}の重要性{じゅうようせい}']
        },
        sourceItem: { value: 8, kanji: '八日', reading: 'ようか' }
    },
    {
        id: 'day_8_sent',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: true,
        stem: '旅行は＿＿間です。（八天）',
        stem_zh: '旅行是八天。',
        options: [
            { text: 'はちにち', isCorrect: false, reason: '期間{きかん}使用{しよう}訓讀{くんどく}。' },
            { text: 'ようか', isCorrect: true, reason: '正確{せいかく}！「ようか間{かん}」是八天{ようか}。' },
            { text: 'よっか', isCorrect: false, reason: '陷阱{かんけい}！「よっか」是四日{よっか}，八日{ようか}是「ようか」。' },
            { text: 'やっか', isCorrect: false, reason: '應{おう}是「ようか」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「ようか間{かん}」表示{ひょうじ}八天{ようか}の期間{きかん}。',
            trapExplanation: '注意{ちゅうい}「ようか」（八日{ようか}）與「よっか」（四日{よっか}）の發音{はつおん}區別{くべつ}。',
            relatedRules: ['日期{にっき}の讀法{よみかた}', '長短音{ちょうたんおん}の區別{くべつ}']
        },
        sourceItem: { value: 8, kanji: '八日', reading: 'ようか' }
    },
    {
        id: 'day_8_dial',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '返却日は何日ですか？',
        stem_zh: '歸還日是幾號？',
        dialogue: {
            speakerA: '返却日は何日ですか？',
            speakerB: '＿＿です。（八號）'
        },
        options: [
            { text: 'はちにち', isCorrect: false, reason: '日期{にっき}使用{しよう}訓讀{くんどく}。' },
            { text: 'ようか', isCorrect: true, reason: '正確{せいかく}！歸還{へんきゃく}日{び}是八號{ようか}。' },
            { text: 'よっか', isCorrect: false, reason: '這是四日{よっか}の讀法{よみかた}。' },
            { text: 'やか', isCorrect: false, reason: '應{おう}是「ようか」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「八日{ようか}」回答{かいとう}歸還{へんきゃく}日期{にっき}。',
            relatedRules: ['日期{にっき}の讀法{よみかた}', '圖書館{としょかん}用語{ようご}']
        },
        sourceItem: { value: 8, kanji: '八日', reading: 'ようか' }
    },

    // ===== 9日 的三題 =====
    {
        id: 'day_9_pron',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「九日」的正確讀音是？',
        stem_zh: '「九日」的正確讀音是？',
        options: [
            { text: 'ここのか', isCorrect: true, reason: '正確{せいかく}！「九日{ここのか}」讀作{どくさ}「ここのか」。' },
            { text: 'きゅうか', isCorrect: false, reason: '日期{にっき}使用{しよう}訓讀{くんどく}「ここの」不是「きゅう」。' },
            { text: 'くにち', isCorrect: false, reason: '9日{ここのか}使用{しよう}訓讀{くんどく}「ここのか」。' },
            { text: 'ここか', isCorrect: false, reason: '少了{すくな}「の」，應{おう}是「ここのか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九日{ここのか}」讀作{どくさ}「ここのか」，與「ここのつ」（九個{ここのつ}）相關{かんけい}。',
            relatedRules: ['日期{にっき}の訓讀{くんどく}', '「ここの」系列{けいれつ}の讀法{よみかた}']
        },
        sourceItem: { value: 9, kanji: '九日', reading: 'ここのか' }
    },
    {
        id: 'day_9_sent',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '重陽の節句は九月＿＿です。',
        stem_zh: '重陽節是九月九日。',
        options: [
            { text: 'きゅうか', isCorrect: false, reason: '日期{にっき}使用{しよう}訓讀{くんどく}。' },
            { text: 'ここのか', isCorrect: true, reason: '正確{せいかく}！重陽{ちょうよう}節{せつ}在九月{くがつ}九日{ここのか}。' },
            { text: 'くにち', isCorrect: false, reason: '9日{ここのか}使用{しよう}訓讀{くんどく}。' },
            { text: 'ここか', isCorrect: false, reason: '少了{すくな}「の」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「九月{くがつ}九日{ここのか}」是重陽{ちょうよう}の節句{せっく}（菊{きく}の節句{せっく}）。',
            relatedRules: ['日期{にっき}の讀法{よみかた}', '日本{にほん}の節日{せつじつ}']
        },
        sourceItem: { value: 9, kanji: '九日', reading: 'ここのか' }
    },
    {
        id: 'day_9_dial',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '試験は何日ですか？',
        stem_zh: '考試是幾號？',
        dialogue: {
            speakerA: '試験は何日ですか？',
            speakerB: '＿＿です。（九號）'
        },
        options: [
            { text: 'くにち', isCorrect: false, reason: '日期{にっき}使用{しよう}訓讀{くんどく}。' },
            { text: 'ここのか', isCorrect: true, reason: '正確{せいかく}！考試{しけん}在九號{ここのか}。' },
            { text: 'きゅうか', isCorrect: false, reason: '使用{しよう}訓讀{くんどく}「ここのか」。' },
            { text: 'ここか', isCorrect: false, reason: '少了{すくな}「の」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「九日{ここのか}」回答{かいとう}考試{しけん}日期{にっき}。',
            relatedRules: ['日期{にっき}の讀法{よみかた}', '學校{がっこう}行事{ぎょうじ}']
        },
        sourceItem: { value: 9, kanji: '九日', reading: 'ここのか' }
    },

    // ===== 10日 的三題 =====
    {
        id: 'day_10_pron',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十日」的正確讀音是？',
        stem_zh: '「十日」的正確讀音是？',
        options: [
            { text: 'とおか', isCorrect: true, reason: '正確{せいかく}！「十日{とおか}」讀作{どくさ}「とおか」，是長音{ちょうおん}。' },
            { text: 'じゅうか', isCorrect: false, reason: '日期{にっき}使用{しよう}訓讀{くんどく}「とお」不是「じゅう」。' },
            { text: 'じゅうにち', isCorrect: false, reason: '10日{とおか}使用{しよう}訓讀{くんどく}「とおか」。' },
            { text: 'とか', isCorrect: false, reason: '需要{じゅよう}長音{ちょうおん}，是「とおか」不是「とか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十日{とおか}」讀作{どくさ}「とおか」，與「とお」（十{とお}）相關{かんけい}。這是訓讀{くんどく}系列{けいれつ}の最後{さいご}一個{いっこ}。',
            relatedRules: ['日期{にっき}の訓讀{くんどく}', '1-10日の訓讀{くんどく}系統{けいとう}']
        },
        sourceItem: { value: 10, kanji: '十日', reading: 'とおか' }
    },
    {
        id: 'day_10_sent',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '給料日は毎月＿＿です。',
        stem_zh: '發薪日是每月十號。',
        options: [
            { text: 'じゅうにち', isCorrect: false, reason: '10日{とおか}使用{しよう}訓讀{くんどく}。' },
            { text: 'とおか', isCorrect: true, reason: '正確{せいかく}！發薪日{きゅうりょうび}是每月{まいつき}十號{とおか}。' },
            { text: 'じゅうか', isCorrect: false, reason: '使用{しよう}訓讀{くんどく}「とおか」。' },
            { text: 'とか', isCorrect: false, reason: '需要{じゅよう}長音{ちょうおん}「とおか」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「毎月{まいつき}十日{とおか}」是常見{じょうけん}の發薪日{きゅうりょうび}。',
            relatedRules: ['日期{にっき}の讀法{よみかた}', '商務{しょうむ}用語{ようご}']
        },
        sourceItem: { value: 10, kanji: '十日', reading: 'とおか' }
    },
    {
        id: 'day_10_dial',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '〆切は何日ですか？',
        stem_zh: '截止日是幾號？',
        dialogue: {
            speakerA: '〆切は何日ですか？',
            speakerB: '＿＿です。（十號）'
        },
        options: [
            { text: 'じゅうにち', isCorrect: false, reason: '10日{とおか}使用{しよう}訓讀{くんどく}。' },
            { text: 'とおか', isCorrect: true, reason: '正確{せいかく}！截止{しめきり}是十號{とおか}。' },
            { text: 'じゅうか', isCorrect: false, reason: '使用{しよう}訓讀{くんどく}「とおか」。' },
            { text: 'とっか', isCorrect: false, reason: '應{おう}是長音{ちょうおん}「とおか」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十日{とおか}」回答{かいとう}截止{しめきり}日期{にっき}。',
            relatedRules: ['日期{にっき}の讀法{よみかた}', '商務{しょうむ}表達{ひょうたつ}']
        },
        sourceItem: { value: 10, kanji: '十日', reading: 'とおか' }
    },

    // ===== 14日 的三題（特殊讀法） =====
    {
        id: 'day_14_pron',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十四日」的正確讀音是？',
        stem_zh: '「十四日」的正確讀音是？',
        options: [
            { text: 'じゅうよっか', isCorrect: true, reason: '正確{せいかく}！「十四日{じゅうよっか}」讀作{どくさ}「じゅうよっか」，保留{ほりゅう}四日{よっか}の訓讀{くんどく}尾綴{びてつ}。' },
            { text: 'じゅうよんにち', isCorrect: false, reason: '陷阱{かんけい}！14日{じゅうよっか}保留{ほりゅう}「よっか」の形式{けいしき}，不是「よんにち」。' },
            { text: 'じゅうしにち', isCorrect: false, reason: '14日{じゅうよっか}使用{しよう}「よっか」系列{けいれつ}。' },
            { text: 'じゅうよか', isCorrect: false, reason: '需要{じゅよう}促音{そくおん}「っ」，是「じゅうよっか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十四日{じゅうよっか}」讀作{どくさ}「じゅうよっか」，保留{ほりゅう}了四日{よっか}「よっか」の訓讀{くんどく}尾綴{びてつ}。',
            trapExplanation: '這是陷阱題{かんけいだい}。14日{じゅうよっか}和24日{にじゅうよっか}都{すべて}保留{ほりゅう}「よっか」，不是「よんにち」。',
            relatedRules: ['14日{じゅうよっか}の特殊{とくしゅ}讀法{よみかた}', '「よっか」尾綴{びてつ}の保留{ほりゅう}']
        },
        sourceItem: { value: 14, kanji: '十四日', reading: 'じゅうよっか' }
    },
    {
        id: 'day_14_sent',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: true,
        stem: 'バレンタインデーは二月＿＿です。',
        stem_zh: '情人節是二月十四日。',
        options: [
            { text: 'じゅうよんにち', isCorrect: false, reason: '陷阱{かんけい}！14日{じゅうよっか}は「じゅうよっか」。' },
            { text: 'じゅうよっか', isCorrect: true, reason: '正確{せいかく}！情人節{バレンタインデー}在二月{にがつ}十四日{じゅうよっか}。' },
            { text: 'じゅうしにち', isCorrect: false, reason: '14日{じゅうよっか}使用{しよう}「よっか」系列{けいれつ}。' },
            { text: 'とうよっか', isCorrect: false, reason: '「十{じゅう}」不讀む{よむ}「とう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「二月{にがつ}十四日{じゅうよっか}」是バレンタインデー（情人節{バレンタインデー}）。',
            trapExplanation: '14日{じゅうよっか}保留{ほりゅう}「よっか」の形式{けいしき}，這是特殊{とくしゅ}讀法{よみかた}。',
            relatedRules: ['14日{じゅうよっか}の讀法{よみかた}', '國際{こくさい}節日{せつじつ}']
        },
        sourceItem: { value: 14, kanji: '十四日', reading: 'じゅうよっか' }
    },
    {
        id: 'day_14_dial',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: 'チョコを渡す日は何日ですか？',
        stem_zh: '送巧克力的日子是幾號？',
        dialogue: {
            speakerA: 'チョコを渡す日は何日ですか？',
            speakerB: '二月＿＿です。（十四日）'
        },
        options: [
            { text: 'じゅうよんにち', isCorrect: false, reason: '14日{じゅうよっか}は「じゅうよっか」。' },
            { text: 'じゅうよっか', isCorrect: true, reason: '正確{せいかく}！二月{にがつ}十四日{じゅうよっか}送巧克力{チョコ}。' },
            { text: 'じゅうしにち', isCorrect: false, reason: '使用{しよう}「よっか」系列{けいれつ}。' },
            { text: 'じゅうようか', isCorrect: false, reason: '需要{じゅよう}促音{そくおん}「っ」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「二月{にがつ}十四日{じゅうよっか}」是日本{にほん}の情人節{バレンタインデー}，女性{じょせい}送巧克力{チョコ}給男性{だんせい}。',
            relatedRules: ['14日{じゅうよっか}の讀法{よみかた}', '日本{にほん}の習慣{しゅうかん}']
        },
        sourceItem: { value: 14, kanji: '十四日', reading: 'じゅうよっか' }
    },

    // ===== 20日 的三題（最特殊的讀法：はつか） =====
    {
        id: 'day_20_pron',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '「二十日」的正確讀音是？',
        stem_zh: '「二十日」的正確讀音是？',
        options: [
            { text: 'はつか', isCorrect: true, reason: '正確{せいかく}！「二十日{はつか}」讀作{どくさ}「はつか」，是完全{かんぜん}獨立{どくりつ}の特殊{とくしゅ}讀法{よみかた}。' },
            { text: 'にじゅうにち', isCorrect: false, reason: '陷阱{かんけい}！20日{はつか}是最特殊{さいとくしゅ}の讀法{よみかた}，不是「にじゅうにち」。' },
            { text: 'ふたとおか', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' },
            { text: 'にじゅっか', isCorrect: false, reason: '20日{はつか}は完全{かんぜん}獨特{どくとく}，讀む{よむ}「はつか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十日{はつか}」讀作{どくさ}「はつか」，這是日期{にっき}中最特殊{さいとくしゅ}の讀法{よみかた}，完全{かんぜん}脫離{だつり}數字{すうじ}讀法{よみかた}。',
            trapExplanation: '這是陷阱題{かんけいだい}。「はつか」與「二十{にじゅう}」毫無{ごうむ}關係{かんけい}，是完全{かんぜん}獨立{どくりつ}の古語{こご}。同樣{どうよう}地{ち}，二十歲{はたち}也讀む{よむ}「はたち」。',
            relatedRules: ['20日{はつか}の獨特{どくとく}讀法{よみかた}', '「はつか」vs「はたち」']
        },
        sourceItem: { value: 20, kanji: '二十日', reading: 'はつか' }
    },
    {
        id: 'day_20_sent',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: true,
        stem: '締め切りは今月の＿＿です。',
        stem_zh: '截止日是這個月的二十號。',
        options: [
            { text: 'にじゅうにち', isCorrect: false, reason: '陷阱{かんけい}！20日{はつか}は「はつか」。' },
            { text: 'はつか', isCorrect: true, reason: '正確{せいかく}！截止日{しめきりび}是二十號{はつか}。' },
            { text: 'ふたじゅうにち', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' },
            { text: 'にじゅっか', isCorrect: false, reason: '20日{はつか}讀む{よむ}「はつか」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「今月{こんげつ}の二十日{はつか}」表示{ひょうじ}這個月{こんげつ}的二十號{はつか}。',
            trapExplanation: '「はつか」是必須{ひっす}背誦{はいしょう}の特殊{とくしゅ}讀法{よみかた}，與數字{すうじ}「二十{にじゅう}」無關{むかん}。',
            relatedRules: ['20日{はつか}の讀法{よみかた}', '商務{しょうむ}表達{ひょうたつ}']
        },
        sourceItem: { value: 20, kanji: '二十日', reading: 'はつか' }
    },
    {
        id: 'day_20_dial',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '結婚記念日はいつですか？',
        stem_zh: '結婚紀念日是什麼時候？',
        dialogue: {
            speakerA: '結婚記念日はいつですか？',
            speakerB: '六月＿＿です。（二十日）'
        },
        options: [
            { text: 'にじゅうにち', isCorrect: false, reason: '20日{はつか}は「はつか」。' },
            { text: 'はつか', isCorrect: true, reason: '正確{せいかく}！結婚{けっこん}紀念日{きねんび}在六月{ろくがつ}二十日{はつか}。' },
            { text: 'ふたじゅう', isCorrect: false, reason: '這不是日期{にっき}讀法{よみかた}。' },
            { text: 'にじゅっか', isCorrect: false, reason: '20日{はつか}讀む{よむ}「はつか」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「六月{ろくがつ}二十日{はつか}」の「二十日{はつか}」讀作{どくさ}「はつか」。',
            relatedRules: ['20日{はつか}の讀法{よみかた}', '紀念日{きねんび}表達{ひょうたつ}']
        },
        sourceItem: { value: 20, kanji: '二十日', reading: 'はつか' }
    },

    // ===== 24日 的三題（特殊讀法） =====
    {
        id: 'day_24_pron',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '「二十四日」的正確讀音是？',
        stem_zh: '「二十四日」的正確讀音是？',
        options: [
            { text: 'にじゅうよっか', isCorrect: true, reason: '正確{せいかく}！「二十四日{にじゅうよっか}」讀作{どくさ}「にじゅうよっか」，保留{ほりゅう}「よっか」尾綴{びてつ}。' },
            { text: 'にじゅうよんにち', isCorrect: false, reason: '陷阱{かんけい}！24日{にじゅうよっか}保留{ほりゅう}「よっか」，不是「よんにち」。' },
            { text: 'にじゅうしにち', isCorrect: false, reason: '24日{にじゅうよっか}使用{しよう}「よっか」系列{けいれつ}。' },
            { text: 'はつよっか', isCorrect: false, reason: '「二十{にじゅう}」不讀む{よむ}「はつ」，那是20日{はつか}の讀法{よみかた}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十四日{にじゅうよっか}」讀作{どくさ}「にじゅうよっか」，保留{ほりゅう}了「よっか」の尾綴{びてつ}。',
            trapExplanation: '這是陷阱題{かんけいだい}。24日{にじゅうよっか}與14日{じゅうよっか}一樣{いちよう}保留{ほりゅう}「よっか」，這是需要{じゅよう}特別{とくべつ}記憶{きおく}の讀法{よみかた}。',
            relatedRules: ['24日{にじゅうよっか}の特殊{とくしゅ}讀法{よみかた}', '14日{じゅうよっか}、24日{にじゅうよっか}の共通點{きょうつうてん}']
        },
        sourceItem: { value: 24, kanji: '二十四日', reading: 'にじゅうよっか' }
    },
    {
        id: 'day_24_sent',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: true,
        stem: 'クリスマスイブは十二月＿＿です。',
        stem_zh: '聖誕夜是十二月二十四日。',
        options: [
            { text: 'にじゅうよんにち', isCorrect: false, reason: '陷阱{かんけい}！24日{にじゅうよっか}は「にじゅうよっか」。' },
            { text: 'にじゅうよっか', isCorrect: true, reason: '正確{せいかく}！聖誕夜{クリスマスイブ}在十二月{じゅうにがつ}二十四日{にじゅうよっか}。' },
            { text: 'にじゅうしにち', isCorrect: false, reason: '24日{にじゅうよっか}使用{しよう}「よっか」系列{けいれつ}。' },
            { text: 'にじゅうようか', isCorrect: false, reason: '需要{じゅよう}促音{そくおん}「っ」，是「よっか」不是「ようか」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十二月{じゅうにがつ}二十四日{にじゅうよっか}」是クリスマスイブ（聖誕夜{クリスマスイブ}）。',
            trapExplanation: '24日{にじゅうよっか}保留{ほりゅう}「よっか」の形式{けいしき}，這是特殊{とくしゅ}讀法{よみかた}。',
            relatedRules: ['24日{にじゅうよっか}の讀法{よみかた}', '國際{こくさい}節日{せつじつ}']
        },
        sourceItem: { value: 24, kanji: '二十四日', reading: 'にじゅうよっか' }
    },
    {
        id: 'day_24_dial',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: 'パーティーはいつですか？',
        stem_zh: '派對是什麼時候？',
        dialogue: {
            speakerA: 'クリスマスパーティーはいつですか？',
            speakerB: '十二月＿＿です。（二十四日）'
        },
        options: [
            { text: 'にじゅうよんにち', isCorrect: false, reason: '24日{にじゅうよっか}は「にじゅうよっか」。' },
            { text: 'にじゅうよっか', isCorrect: true, reason: '正確{せいかく}！聖誕{クリスマス}派對{パーティー}在二十四日{にじゅうよっか}。' },
            { text: 'にじゅうしにち', isCorrect: false, reason: '使用{しよう}「よっか」系列{けいれつ}。' },
            { text: 'はつよんか', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十二月{じゅうにがつ}二十四日{にじゅうよっか}」是聖誕{クリスマス}派對{パーティー}の日期{にっき}。',
            relatedRules: ['24日{にじゅうよっか}の讀法{よみかた}', '派對{パーティー}日程{にってい}']
        },
        sourceItem: { value: 24, kanji: '二十四日', reading: 'にじゅうよっか' }
    },

    // ===== 15日 的三題（一般讀法範例） =====
    {
        id: 'day_15_pron',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十五日」的正確讀音是？',
        stem_zh: '「十五日」的正確讀音是？',
        options: [
            { text: 'じゅうごにち', isCorrect: true, reason: '正確{せいかく}！「十五日{じゅうごにち}」讀作{どくさ}「じゅうごにち」，是一般{いっぱん}讀法{よみかた}。' },
            { text: 'じゅうごか', isCorrect: false, reason: '11日以後{いご}使用{しよう}「にち」，不是「か」。' },
            { text: 'じゅごにち', isCorrect: false, reason: '需要{じゅよう}「う」，是「じゅう」。' },
            { text: 'とおごか', isCorrect: false, reason: '11日以後{いご}使用{しよう}音讀{おんどく}「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十五日{じゅうごにち}」讀作{どくさ}「じゅうごにち」。11日以後{いご}（除{のぞく}14、20、24外{ほか}）使用{しよう}一般{いっぱん}讀法{よみかた}「〜にち」。',
            relatedRules: ['一般{いっぱん}日期{にっき}の讀法{よみかた}', '「にち」の使用{しよう}']
        },
        sourceItem: { value: 15, kanji: '十五日', reading: 'じゅうごにち' }
    },
    {
        id: 'day_15_sent',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '七五三は十一月＿＿です。',
        stem_zh: '七五三節是十一月十五日。',
        options: [
            { text: 'じゅうごか', isCorrect: false, reason: '使用{しよう}「にち」不是「か」。' },
            { text: 'じゅうごにち', isCorrect: true, reason: '正確{せいかく}！七五三{しちごさん}在十一月{じゅういちがつ}十五日{じゅうごにち}。' },
            { text: 'いつか', isCorrect: false, reason: '「いつか」是5日{いつか}，不是15日{じゅうごにち}。' },
            { text: 'とおごにち', isCorrect: false, reason: '使用{しよう}音讀{おんどく}「じゅう」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十一月{じゅういちがつ}十五日{じゅうごにち}」是七五三{しちごさん}（慶祝{けいしゅく}兒童{じどう}成長{せいちょう}の節日{せつじつ}）。',
            relatedRules: ['一般{いっぱん}日期{にっき}の讀法{よみかた}', '日本{にほん}の節日{せつじつ}']
        },
        sourceItem: { value: 15, kanji: '十五日', reading: 'じゅうごにち' }
    },
    {
        id: 'day_15_dial',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '給料日は何日ですか？',
        stem_zh: '發薪日是幾號？',
        dialogue: {
            speakerA: '給料日は何日ですか？',
            speakerB: '毎月＿＿です。（十五日）'
        },
        options: [
            { text: 'じゅうごか', isCorrect: false, reason: '使用{しよう}「にち」。' },
            { text: 'じゅうごにち', isCorrect: true, reason: '正確{せいかく}！發薪日{きゅうりょうび}是每月{まいつき}十五號{じゅうごにち}。' },
            { text: 'いつか', isCorrect: false, reason: '這是5日{いつか}の讀法{よみかた}。' },
            { text: 'じゅごにち', isCorrect: false, reason: '需要{じゅよう}「う」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「毎月{まいつき}十五日{じゅうごにち}」是常見{じょうけん}の發薪日{きゅうりょうび}。',
            relatedRules: ['一般{いっぱん}日期{にっき}の讀法{よみかた}', '商務{しょうむ}用語{ようご}']
        },
        sourceItem: { value: 15, kanji: '十五日', reading: 'じゅうごにち' }
    },

    // ===== 25日 的三題（一般讀法範例） =====
    {
        id: 'day_25_pron',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二十五日」的正確讀音是？',
        stem_zh: '「二十五日」的正確讀音是？',
        options: [
            { text: 'にじゅうごにち', isCorrect: true, reason: '正確{せいかく}！「二十五日{にじゅうごにち}」讀作{どくさ}「にじゅうごにち」。' },
            { text: 'にじゅうごか', isCorrect: false, reason: '使用{しよう}「にち」不是「か」。' },
            { text: 'はついつか', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' },
            { text: 'にじゅうごにっち', isCorrect: false, reason: '不需要{じゅようなく}促音{そくおん}。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二十五日{にじゅうごにち}」讀作{どくさ}「にじゅうごにち」，是一般{いっぱん}讀法{よみかた}。',
            relatedRules: ['一般{いっぱん}日期{にっき}の讀法{よみかた}', '「にち」の使用{しよう}']
        },
        sourceItem: { value: 25, kanji: '二十五日', reading: 'にじゅうごにち' }
    },
    {
        id: 'day_25_sent',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: 'クリスマスは十二月＿＿です。',
        stem_zh: '聖誕節是十二月二十五日。',
        options: [
            { text: 'にじゅうごか', isCorrect: false, reason: '使用{しよう}「にち」。' },
            { text: 'にじゅうごにち', isCorrect: true, reason: '正確{せいかく}！聖誕節{クリスマス}在十二月{じゅうにがつ}二十五日{にじゅうごにち}。' },
            { text: 'にじゅうよっか', isCorrect: false, reason: '這是24日{にじゅうよっか}の讀法{よみかた}。' },
            { text: 'はついつ', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十二月{じゅうにがつ}二十五日{にじゅうごにち}」是クリスマス（聖誕節{クリスマス}）。',
            relatedRules: ['一般{いっぱん}日期{にっき}の讀法{よみかた}', '國際{こくさい}節日{せつじつ}']
        },
        sourceItem: { value: 25, kanji: '二十五日', reading: 'にじゅうごにち' }
    },
    {
        id: 'day_25_dial',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: 'プレゼントをもらう日は？',
        stem_zh: '收到禮物的日子是？',
        dialogue: {
            speakerA: 'プレゼントをもらう日は何日ですか？',
            speakerB: '十二月＿＿です。（二十五日）'
        },
        options: [
            { text: 'にじゅうごか', isCorrect: false, reason: '使用{しよう}「にち」。' },
            { text: 'にじゅうごにち', isCorrect: true, reason: '正確{せいかく}！聖誕{クリスマス}禮物{プレゼント}在二十五日{にじゅうごにち}。' },
            { text: 'にじゅうよっか', isCorrect: false, reason: '這是24日{にじゅうよっか}。' },
            { text: 'はつごにち', isCorrect: false, reason: '這不是正確{せいかく}讀法{よみかた}。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十二月{じゅうにがつ}二十五日{にじゅうごにち}」收到{もらう}聖誕{クリスマス}禮物{プレゼント}。',
            relatedRules: ['一般{いっぱん}日期{にっき}の讀法{よみかた}', '聖誕{クリスマス}習慣{しゅうかん}']
        },
        sourceItem: { value: 25, kanji: '二十五日', reading: 'にじゅうごにち' }
    },

    // ===== 31日 的三題（一般讀法範例） =====
    {
        id: 'day_31_pron',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「三十一日」的正確讀音是？',
        stem_zh: '「三十一日」的正確讀音是？',
        options: [
            { text: 'さんじゅういちにち', isCorrect: true, reason: '正確{せいかく}！「三十一日{さんじゅういちにち}」讀作{どくさ}「さんじゅういちにち」。' },
            { text: 'さんじゅういっか', isCorrect: false, reason: '使用{しよう}「にち」不是「か」。' },
            { text: 'みそひとか', isCorrect: false, reason: '這是古語{こご}讀法{よみかた}，現代{げんだい}日語{にほんご}使用{しよう}「さんじゅういちにち」。' },
            { text: 'さんじゅいちにち', isCorrect: false, reason: '需要{じゅよう}「う」，是「じゅう」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「三十一日{さんじゅういちにち}」讀作{どくさ}「さんじゅういちにち」，是一般{いっぱん}讀法{よみかた}。',
            relatedRules: ['一般{いっぱん}日期{にっき}の讀法{よみかた}', '月末{げつまつ}表達{ひょうたつ}']
        },
        sourceItem: { value: 31, kanji: '三十一日', reading: 'さんじゅういちにち' }
    },
    {
        id: 'day_31_sent',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '大晦日は十二月＿＿です。',
        stem_zh: '除夕是十二月三十一日。',
        options: [
            { text: 'さんじゅういっか', isCorrect: false, reason: '使用{しよう}「にち」。' },
            { text: 'さんじゅういちにち', isCorrect: true, reason: '正確{せいかく}！除夕{おおみそか}在十二月{じゅうにがつ}三十一日{さんじゅういちにち}。' },
            { text: 'みそか', isCorrect: false, reason: '「みそか」是月末{げつまつ}の意思{いし}，但31日{さんじゅういちにち}讀む{よむ}「さんじゅういちにち」。' },
            { text: 'さんじゅいちにち', isCorrect: false, reason: '需要{じゅよう}「う」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十二月{じゅうにがつ}三十一日{さんじゅういちにち}」是大晦日{おおみそか}（除夕{じょせき}）。',
            relatedRules: ['一般{いっぱん}日期{にっき}の讀法{よみかた}', '日本{にほん}の節日{せつじつ}']
        },
        sourceItem: { value: 31, kanji: '三十一日', reading: 'さんじゅういちにち' }
    },
    {
        id: 'day_31_dial',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '年末はいつですか？',
        stem_zh: '年末是什麼時候？',
        dialogue: {
            speakerA: '年末はいつですか？',
            speakerB: '十二月＿＿です。（三十一日）'
        },
        options: [
            { text: 'さんじゅういっか', isCorrect: false, reason: '使用{しよう}「にち」。' },
            { text: 'さんじゅういちにち', isCorrect: true, reason: '正確{せいかく}！年末{ねんまつ}是十二月{じゅうにがつ}三十一日{さんじゅういちにち}。' },
            { text: 'みそひとか', isCorrect: false, reason: '這是古語{こご}，現代{げんだい}使用{しよう}「さんじゅういちにち」。' },
            { text: 'さんじゅいちにち', isCorrect: false, reason: '需要{じゅよう}「う」。' }
        ],
        correctIndex: 1,
        explanation: {
            correctRule: '「十二月{じゅうにがつ}三十一日{さんじゅういちにち}」是一年{いちねん}の最後{さいご}一天{いちにち}。',
            relatedRules: ['一般{いっぱん}日期{にっき}の讀法{よみかた}', '年末{ねんまつ}表達{ひょうたつ}']
        },
        sourceItem: { value: 31, kanji: '三十一日', reading: 'さんじゅういちにち' }
    },

    // ===== 追加練習題：日期應用情境 =====
    {
        id: 'day_app_01',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '誕生日は五月＿＿です。',
        stem_zh: '生日是五月五日。',
        options: [
            { text: 'いつか', isCorrect: true, reason: '正確！五日讀「いつか」。' },
            { text: 'ごにち', isCorrect: false, reason: '1-10日使用訓讀系統。' },
            { text: 'ごか', isCorrect: false, reason: '「か」系列用訓讀數字。' },
            { text: 'いつつ', isCorrect: false, reason: '「いつつ」是量詞，不是日期。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '五月五日是兒童節，「五日」讀「いつか」。',
            relatedRules: ['日期の訓讀', '日本の節日']
        },
        sourceItem: { value: 5, kanji: '五日', reading: 'いつか' }
    },
    {
        id: 'day_app_02',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '給料日はいつですか？',
        stem_zh: '發薪日是什麼時候？',
        dialogue: {
            speakerA: '給料日はいつですか？',
            speakerB: '毎月＿＿です。（二十五日）'
        },
        options: [
            { text: 'にじゅうごにち', isCorrect: true, reason: '正確！25日讀「にじゅうごにち」。' },
            { text: 'にじゅうごか', isCorrect: false, reason: '11日以後使用「にち」。' },
            { text: 'にじゅごにち', isCorrect: false, reason: '需要「う」，讀「にじゅうごにち」。' },
            { text: 'はつか', isCorrect: false, reason: '「はつか」是20日。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本發薪日多在25日，讀「にじゅうごにち」。',
            relatedRules: ['一般日期の讀法', '日本の給料制度']
        },
        sourceItem: { value: 25, kanji: '二十五日', reading: 'にじゅうごにち' }
    },
    {
        id: 'day_app_03',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: true,
        stem: 'クリスマスは十二月＿＿です。',
        stem_zh: '聖誕節是十二月二十五日。',
        options: [
            { text: 'にじゅうごにち', isCorrect: true, reason: '正確！聖誕節是12月25日。' },
            { text: 'にじゅうごか', isCorrect: false, reason: '陷阱！11日以後用「にち」不是「か」。' },
            { text: 'はつかいつか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'にじゅごにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '12月25日是聖誕節，「25日」讀「にじゅうごにち」。',
            trapExplanation: '「か」系列只用於1-10日和14、24日。',
            relatedRules: ['一般日期の讀法', '日本のクリスマス']
        },
        sourceItem: { value: 25, kanji: '二十五日', reading: 'にじゅうごにち' }
    },
    {
        id: 'day_app_04',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '締め切りはいつですか？',
        stem_zh: '截止日期是什麼時候？',
        dialogue: {
            speakerA: '締め切りはいつですか？',
            speakerB: '今月の＿＿までです。（十五日）'
        },
        options: [
            { text: 'じゅうごにち', isCorrect: true, reason: '正確！15日讀「じゅうごにち」。' },
            { text: 'じゅうごか', isCorrect: false, reason: '使用「にち」不是「か」。' },
            { text: 'とおかいつか', isCorrect: false, reason: '這是10日+5日，不是15日的讀法。' },
            { text: 'じゅごにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十五日」讀「じゅうごにち」，常用於截止日。',
            relatedRules: ['一般日期の讀法', '締切の表達']
        },
        sourceItem: { value: 15, kanji: '十五日', reading: 'じゅうごにち' }
    },
    {
        id: 'day_app_05',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: 'ひな祭りは三月＿＿です。',
        stem_zh: '女兒節是三月三日。',
        options: [
            { text: 'みっか', isCorrect: true, reason: '正確！三日讀「みっか」。' },
            { text: 'さんにち', isCorrect: false, reason: '1-10日使用訓讀。' },
            { text: 'さんか', isCorrect: false, reason: '「か」搭配訓讀數字。' },
            { text: 'みつか', isCorrect: false, reason: '應為「みっか」（促音）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '三月三日是女兒節，「三日」讀「みっか」。',
            relatedRules: ['日期の訓讀', 'ひな祭り']
        },
        sourceItem: { value: 3, kanji: '三日', reading: 'みっか' }
    },
    {
        id: 'day_app_06',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '予約はいつですか？',
        stem_zh: '預約是什麼時候？',
        dialogue: {
            speakerA: '予約はいつですか？',
            speakerB: '来月の＿＿です。（七日）'
        },
        options: [
            { text: 'なのか', isCorrect: true, reason: '正確！七日讀「なのか」。' },
            { text: 'しちにち', isCorrect: false, reason: '1-10日使用訓讀。' },
            { text: 'ななか', isCorrect: false, reason: '應為「なのか」不是「ななか」。' },
            { text: 'なぬか', isCorrect: false, reason: '應為「なのか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「七日」讀「なのか」，是七夕的日期。',
            relatedRules: ['日期の訓讀', '七夕']
        },
        sourceItem: { value: 7, kanji: '七日', reading: 'なのか' }
    },
    {
        id: 'day_app_07',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: true,
        stem: '建国記念の日は二月＿＿です。',
        stem_zh: '建國紀念日是二月十一日。',
        options: [
            { text: 'じゅういちにち', isCorrect: true, reason: '正確！11日讀「じゅういちにち」。' },
            { text: 'とおかついたち', isCorrect: false, reason: '陷阱！11日不是10日+1日的組合讀法。' },
            { text: 'じゅういっか', isCorrect: false, reason: '11日以後用「にち」。' },
            { text: 'といちにち', isCorrect: false, reason: '應為「じゅういちにち」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '11日讀「じゅういちにち」，不是訓讀組合。',
            trapExplanation: '11日開始使用「〜にち」系統，不再用訓讀。',
            relatedRules: ['一般日期の讀法', '日本の祝日']
        },
        sourceItem: { value: 11, kanji: '十一日', reading: 'じゅういちにち' }
    },
    {
        id: 'day_app_08',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '試験はいつですか？',
        stem_zh: '考試是什麼時候？',
        dialogue: {
            speakerA: '試験はいつですか？',
            speakerB: '＿＿と＿＿です。（八日和九日）'
        },
        options: [
            { text: 'ようか・ここのか', isCorrect: true, reason: '正確！8日「ようか」、9日「ここのか」。' },
            { text: 'はちにち・きゅうにち', isCorrect: false, reason: '1-10日使用訓讀。' },
            { text: 'やっか・くか', isCorrect: false, reason: '讀法錯誤。' },
            { text: 'ようか・くのか', isCorrect: false, reason: '9日是「ここのか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八日」讀「ようか」，「九日」讀「ここのか」。',
            relatedRules: ['日期の訓讀', '試験日程']
        },
        sourceItem: { value: '8-9', kanji: '八日・九日', reading: 'ようか・ここのか' }
    },

    // ===== 特殊日期辨析題 =====
    {
        id: 'day_special_01',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十四日」的正確讀法是？',
        stem_zh: '「十四日」的正確讀法是？',
        options: [
            { text: 'じゅうよっか', isCorrect: true, reason: '正確！14日讀「じゅうよっか」。' },
            { text: 'じゅうよんにち', isCorrect: false, reason: '陷阱！14日保留「か」。' },
            { text: 'とおかよっか', isCorrect: false, reason: '不是組合讀法。' },
            { text: 'じゅうしにち', isCorrect: false, reason: '14日是特例，用「か」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '14日保留訓讀「よっか」，讀「じゅうよっか」。',
            trapExplanation: '14日、24日是特例，保留「〜か」而非「〜にち」。',
            relatedRules: ['14日の特殊讀法', '日期の例外']
        },
        sourceItem: { value: 14, kanji: '十四日', reading: 'じゅうよっか' }
    },
    {
        id: 'day_special_02',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '「二十日」的正確讀法是？',
        stem_zh: '「二十日」的正確讀法是？',
        options: [
            { text: 'はつか', isCorrect: true, reason: '正確！20日讀「はつか」。' },
            { text: 'にじゅうにち', isCorrect: false, reason: '陷阱！20日有特殊讀法。' },
            { text: 'ふつかじゅう', isCorrect: false, reason: '不是這樣的組合。' },
            { text: 'にじゅっか', isCorrect: false, reason: '20日讀「はつか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '20日是特殊讀法「はつか」，需要記憶。',
            trapExplanation: '「はつか」是最特殊的日期讀法之一。',
            relatedRules: ['20日の特殊讀法', '日期の例外']
        },
        sourceItem: { value: 20, kanji: '二十日', reading: 'はつか' }
    },
    {
        id: 'day_special_03',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '「二十四日」的正確讀法是？',
        stem_zh: '「二十四日」的正確讀法是？',
        options: [
            { text: 'にじゅうよっか', isCorrect: true, reason: '正確！24日讀「にじゅうよっか」。' },
            { text: 'にじゅうよんにち', isCorrect: false, reason: '陷阱！24日保留「か」。' },
            { text: 'はつかよっか', isCorrect: false, reason: '不是組合讀法。' },
            { text: 'にじゅうしにち', isCorrect: false, reason: '24日用「よっか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '24日像14日一樣保留「よっか」，讀「にじゅうよっか」。',
            trapExplanation: '14日和24日都保留「よっか」的讀法。',
            relatedRules: ['24日の特殊讀法', '14日・24日の例外']
        },
        sourceItem: { value: 24, kanji: '二十四日', reading: 'にじゅうよっか' }
    },
    {
        id: 'day_special_04',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: 'バレンタインデーは二月＿＿です。',
        stem_zh: '情人節是二月十四日。',
        options: [
            { text: 'じゅうよっか', isCorrect: true, reason: '正確！14日讀「じゅうよっか」。' },
            { text: 'じゅうよんにち', isCorrect: false, reason: '14日保留「か」。' },
            { text: 'じゅうしにち', isCorrect: false, reason: '14日用「よっか」。' },
            { text: 'とおよっか', isCorrect: false, reason: '不是組合讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '2月14日是情人節，「14日」讀「じゅうよっか」。',
            relatedRules: ['14日の讀法', 'バレンタインデー']
        },
        sourceItem: { value: 14, kanji: '十四日', reading: 'じゅうよっか' }
    },
    {
        id: 'day_special_05',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: 'クリスマスイブは？',
        stem_zh: '聖誕夜是什麼時候？',
        dialogue: {
            speakerA: 'クリスマスイブはいつですか？',
            speakerB: '十二月＿＿です。（二十四日）'
        },
        options: [
            { text: 'にじゅうよっか', isCorrect: true, reason: '正確！24日讀「にじゅうよっか」。' },
            { text: 'にじゅうよんにち', isCorrect: false, reason: '24日保留「か」。' },
            { text: 'はつかよっか', isCorrect: false, reason: '不是組合讀法。' },
            { text: 'にじゅうしにち', isCorrect: false, reason: '24日用「よっか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '12月24日是聖誕夜，「24日」讀「にじゅうよっか」。',
            relatedRules: ['24日の讀法', 'クリスマスイブ']
        },
        sourceItem: { value: 24, kanji: '二十四日', reading: 'にじゅうよっか' }
    },

    // ===== 日期與期間辨析 =====
    {
        id: 'day_duration_01',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '「一日」讀作「ついたち」還是「いちにち」？',
        stem_zh: '「一日」讀作「ついたち」還是「いちにち」？',
        options: [
            { text: '兩者都對：日期vs期間', isCorrect: true, reason: '正確！日期用「ついたち」，期間用「いちにち」。' },
            { text: '只有ついたち', isCorrect: false, reason: '「いちにち」表示一天的時間。' },
            { text: '只有いちにち', isCorrect: false, reason: '日期「1號」讀「ついたち」。' },
            { text: '兩者都錯', isCorrect: false, reason: '兩種讀法都存在，用途不同。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「ついたち」＝日期（1號），「いちにち」＝期間（一天）。',
            trapExplanation: '同樣的漢字有不同讀法和意思。',
            relatedRules: ['日期vs期間', '一日の二種讀法']
        },
        sourceItem: { value: 1, kanji: '一日', reading: 'ついたち/いちにち' }
    },
    {
        id: 'day_duration_02',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: true,
        stem: '旅行は＿＿かかりました。（三天）',
        stem_zh: '旅行花了三天。',
        options: [
            { text: 'みっか', isCorrect: true, reason: '正確！期間三天也讀「みっか」。' },
            { text: 'さんにち', isCorrect: false, reason: '陷阱！期間也用訓讀「みっか」。' },
            { text: 'さんか', isCorrect: false, reason: '讀法錯誤。' },
            { text: 'みつにち', isCorrect: false, reason: '應為「みっか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '期間「三天」和日期「3日」都讀「みっか」。',
            trapExplanation: '1-10的期間表達也用訓讀系統。',
            relatedRules: ['期間の讀法', '日期vs期間']
        },
        sourceItem: { value: 3, kanji: '三日', reading: 'みっか' }
    },
    {
        id: 'day_duration_03',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '何日休みましたか？',
        stem_zh: '休息了幾天？',
        dialogue: {
            speakerA: '何日休みましたか？',
            speakerB: '＿＿休みました。（五天）'
        },
        options: [
            { text: 'いつか', isCorrect: true, reason: '正確！期間五天讀「いつか」。' },
            { text: 'ごにち', isCorrect: false, reason: '期間也用訓讀。' },
            { text: 'ごか', isCorrect: false, reason: '讀法錯誤。' },
            { text: 'いつつ', isCorrect: false, reason: '「いつつ」是量詞。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '期間「五天」讀「いつか」，與日期相同。',
            relatedRules: ['期間の讀法', '何日の使用']
        },
        sourceItem: { value: 5, kanji: '五日', reading: 'いつか' }
    },

    // ===== 何日疑問詞題 =====
    {
        id: 'day_question_01',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「何日」的正確讀法是？',
        stem_zh: '「何日」的正確讀法是？',
        options: [
            { text: 'なんにち', isCorrect: true, reason: '正確！何日讀「なんにち」。' },
            { text: 'なにひ', isCorrect: false, reason: '日期不讀「ひ」。' },
            { text: 'なにか', isCorrect: false, reason: '「何」讀「なん」。' },
            { text: 'いくにち', isCorrect: false, reason: '不用「いく」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何日」讀「なんにち」，用於詢問日期或天數。',
            relatedRules: ['何日の讀法', '疑問詞の使用']
        },
        sourceItem: { value: 'question', kanji: '何日', reading: 'なんにち' }
    },
    {
        id: 'day_question_02',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '今日は何日ですか？',
        stem_zh: '今天是幾號？',
        dialogue: {
            speakerA: '今日は何日ですか？',
            speakerB: '＿＿です。（十日）'
        },
        options: [
            { text: 'とおか', isCorrect: true, reason: '正確！10日讀「とおか」。' },
            { text: 'じゅうにち', isCorrect: false, reason: '10日是訓讀「とおか」。' },
            { text: 'じゅっか', isCorrect: false, reason: '10日是「とおか」。' },
            { text: 'とうか', isCorrect: false, reason: '應為「とおか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「十日」讀「とおか」，是1-10日訓讀的最後一個。',
            relatedRules: ['日期の訓讀', '何日の回答']
        },
        sourceItem: { value: 10, kanji: '十日', reading: 'とおか' }
    },
    {
        id: 'day_question_03',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '出発は来月＿＿の予定です。',
        stem_zh: '預計下個月六日出發。',
        options: [
            { text: 'むいか', isCorrect: true, reason: '正確！六日讀「むいか」。' },
            { text: 'ろくにち', isCorrect: false, reason: '1-10日使用訓讀。' },
            { text: 'むっか', isCorrect: false, reason: '應為「むいか」。' },
            { text: 'ろっか', isCorrect: false, reason: '讀法錯誤。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「六日」讀「むいか」，使用訓讀系統。',
            relatedRules: ['日期の訓讀', '旅行日程']
        },
        sourceItem: { value: 6, kanji: '六日', reading: 'むいか' }
    },

    // ===== 日本節日相關 =====
    {
        id: 'day_holiday_01',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '元日は一月＿＿です。',
        stem_zh: '元旦是一月一日。',
        options: [
            { text: 'ついたち', isCorrect: true, reason: '正確！一日讀「ついたち」。' },
            { text: 'いちにち', isCorrect: false, reason: '日期用「ついたち」。' },
            { text: 'がんじつ', isCorrect: false, reason: '這是「元日」的讀法。' },
            { text: 'いっか', isCorrect: false, reason: '1日讀「ついたち」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '1月1日是元旦，「一日」讀「ついたち」。',
            relatedRules: ['日期の讀法', '元日']
        },
        sourceItem: { value: 1, kanji: '一日', reading: 'ついたち' }
    },
    {
        id: 'day_holiday_02',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '七夕はいつですか？',
        stem_zh: '七夕是什麼時候？',
        dialogue: {
            speakerA: '七夕はいつですか？',
            speakerB: '七月＿＿です。（七日）'
        },
        options: [
            { text: 'なのか', isCorrect: true, reason: '正確！七日讀「なのか」。' },
            { text: 'しちにち', isCorrect: false, reason: '1-10日使用訓讀。' },
            { text: 'ななか', isCorrect: false, reason: '應為「なのか」。' },
            { text: 'なぬか', isCorrect: false, reason: '讀法錯誤。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '7月7日是七夕，「七日」讀「なのか」。',
            relatedRules: ['日期の訓讀', '七夕']
        },
        sourceItem: { value: 7, kanji: '七日', reading: 'なのか' }
    },
    {
        id: 'day_holiday_03',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '文化の日は十一月＿＿です。',
        stem_zh: '文化節是十一月三日。',
        dialogue: {
            speakerA: '文化の日はいつですか？',
            speakerB: '十一月＿＿です。（三日）'
        },
        options: [
            { text: 'みっか', isCorrect: true, reason: '正確！三日讀「みっか」。' },
            { text: 'さんにち', isCorrect: false, reason: '1-10日使用訓讀。' },
            { text: 'さんか', isCorrect: false, reason: '讀法錯誤。' },
            { text: 'みつか', isCorrect: false, reason: '應為「みっか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '11月3日是文化節，「三日」讀「みっか」。',
            relatedRules: ['日期の訓讀', '文化の日']
        },
        sourceItem: { value: 3, kanji: '三日', reading: 'みっか' }
    },
    {
        id: 'day_holiday_04',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '勤労感謝の日は十一月＿＿です。',
        stem_zh: '勤勞感謝日是十一月二十三日。',
        options: [
            { text: 'にじゅうさんにち', isCorrect: true, reason: '正確！23日讀「にじゅうさんにち」。' },
            { text: 'にじゅうさんか', isCorrect: false, reason: '11日以後用「にち」。' },
            { text: 'にじゅみっか', isCorrect: false, reason: '23日是「にじゅうさんにち」。' },
            { text: 'にじゅさんにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '11月23日是勤勞感謝日，「23日」讀「にじゅうさんにち」。',
            relatedRules: ['一般日期の讀法', '勤労感謝の日']
        },
        sourceItem: { value: 23, kanji: '二十三日', reading: 'にじゅうさんにち' }
    },
    {
        id: 'day_holiday_05',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '憲法記念日はいつですか？',
        stem_zh: '憲法紀念日是什麼時候？',
        dialogue: {
            speakerA: '憲法記念日はいつですか？',
            speakerB: '五月＿＿です。（三日）'
        },
        options: [
            { text: 'みっか', isCorrect: true, reason: '正確！三日讀「みっか」。' },
            { text: 'さんにち', isCorrect: false, reason: '1-10日使用訓讀。' },
            { text: 'さんか', isCorrect: false, reason: '讀法錯誤。' },
            { text: 'さんび', isCorrect: false, reason: '不存在這個讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '5月3日是憲法紀念日，「三日」讀「みっか」。',
            relatedRules: ['日期の訓讀', '憲法記念日']
        },
        sourceItem: { value: 3, kanji: '三日', reading: 'みっか' }
    },

    // ===== 更多綜合練習 =====
    {
        id: 'day_comp_01',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '会議は毎月＿＿に開かれます。',
        stem_zh: '會議每月一日召開。',
        options: [
            { text: 'ついたち', isCorrect: true, reason: '正確！一日讀「ついたち」。' },
            { text: 'いちにち', isCorrect: false, reason: '「いちにち」是期間。' },
            { text: 'いっぴ', isCorrect: false, reason: '不存在這個讀法。' },
            { text: 'いっか', isCorrect: false, reason: '1日讀「ついたち」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '每月1日的定期會議，「一日」讀「ついたち」。',
            relatedRules: ['日期の讀法', '定期會議']
        },
        sourceItem: { value: 1, kanji: '一日', reading: 'ついたち' }
    },
    {
        id: 'day_comp_02',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '引っ越しはいつですか？',
        stem_zh: '搬家是什麼時候？',
        dialogue: {
            speakerA: '引っ越しはいつですか？',
            speakerB: '来月の＿＿です。（二日）'
        },
        options: [
            { text: 'ふつか', isCorrect: true, reason: '正確！二日讀「ふつか」。' },
            { text: 'にか', isCorrect: false, reason: '1-10日使用訓讀。' },
            { text: 'ににち', isCorrect: false, reason: '「にち」用於11日以後。' },
            { text: 'ふたか', isCorrect: false, reason: '應為「ふつか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「二日」讀「ふつか」，使用訓讀系統。',
            relatedRules: ['日期の訓讀', '引っ越し日程']
        },
        sourceItem: { value: 2, kanji: '二日', reading: 'ふつか' }
    },
    {
        id: 'day_comp_03',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '納品は今月＿＿までです。',
        stem_zh: '交貨期限是本月二十八日。',
        options: [
            { text: 'にじゅうはちにち', isCorrect: true, reason: '正確！28日讀「にじゅうはちにち」。' },
            { text: 'にじゅうはっか', isCorrect: false, reason: '11日以後用「にち」。' },
            { text: 'にじゅうようか', isCorrect: false, reason: '「ようか」是8日。' },
            { text: 'にじゅはちにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「28日」讀「にじゅうはちにち」，是一般讀法。',
            relatedRules: ['一般日期の讀法', '納品日程']
        },
        sourceItem: { value: 28, kanji: '二十八日', reading: 'にじゅうはちにち' }
    },
    {
        id: 'day_comp_04',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '面接はいつですか？',
        stem_zh: '面試是什麼時候？',
        dialogue: {
            speakerA: '面接はいつですか？',
            speakerB: '＿＿の午前10時です。（四日）'
        },
        options: [
            { text: 'よっか', isCorrect: true, reason: '正確！四日讀「よっか」。' },
            { text: 'よんにち', isCorrect: false, reason: '1-10日使用訓讀。' },
            { text: 'しか', isCorrect: false, reason: '讀法錯誤。' },
            { text: 'よか', isCorrect: false, reason: '應為「よっか」（促音）。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「四日」讀「よっか」，使用訓讀系統。',
            relatedRules: ['日期の訓讀', '面接日程']
        },
        sourceItem: { value: 4, kanji: '四日', reading: 'よっか' }
    },
    {
        id: 'day_comp_05',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: 'レポートの締め切りは＿＿です。',
        stem_zh: '報告截止日是十二日。',
        options: [
            { text: 'じゅうににち', isCorrect: true, reason: '正確！12日讀「じゅうににち」。' },
            { text: 'じゅうにか', isCorrect: false, reason: '11日以後用「にち」。' },
            { text: 'とおかふつか', isCorrect: false, reason: '不是組合讀法。' },
            { text: 'じゅにか', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「12日」讀「じゅうににち」，是一般讀法。',
            relatedRules: ['一般日期の讀法', '締切日程']
        },
        sourceItem: { value: 12, kanji: '十二日', reading: 'じゅうににち' }
    },
    {
        id: 'day_comp_06',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '出張はいつからですか？',
        stem_zh: '出差從什麼時候開始？',
        dialogue: {
            speakerA: '出張はいつからですか？',
            speakerB: '＿＿から＿＿までです。（十七日到十九日）'
        },
        options: [
            { text: 'じゅうしちにち・じゅうくにち', isCorrect: true, reason: '正確！17日和19日。' },
            { text: 'じゅうなのか・じゅうここのか', isCorrect: false, reason: '11日以後用「にち」。' },
            { text: 'じゅうしちにち・じゅうきゅうにち', isCorrect: false, reason: '19讀「く」不是「きゅう」。' },
            { text: 'じゅうななにち・じゅうくにち', isCorrect: false, reason: '17讀「しち」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '17日讀「じゅうしちにち」，19日讀「じゅうくにち」。',
            relatedRules: ['一般日期の讀法', '出張日程']
        },
        sourceItem: { value: '17-19', kanji: '十七日〜十九日', reading: 'じゅうしちにち〜じゅうくにち' }
    },
    {
        id: 'day_comp_07',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '結婚記念日は＿＿です。',
        stem_zh: '結婚紀念日是二十二日。',
        options: [
            { text: 'にじゅうににち', isCorrect: true, reason: '正確！22日讀「にじゅうににち」。' },
            { text: 'にじゅうにか', isCorrect: false, reason: '11日以後用「にち」。' },
            { text: 'はつかふつか', isCorrect: false, reason: '不是組合讀法。' },
            { text: 'にじゅににち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「22日」讀「にじゅうににち」，是一般讀法。',
            relatedRules: ['一般日期の讀法', '記念日']
        },
        sourceItem: { value: 22, kanji: '二十二日', reading: 'にじゅうににち' }
    },
    {
        id: 'day_comp_08',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '新商品の発売日は？',
        stem_zh: '新產品發售日是什麼時候？',
        dialogue: {
            speakerA: '新商品の発売日はいつですか？',
            speakerB: '＿＿です。（二十六日）'
        },
        options: [
            { text: 'にじゅうろくにち', isCorrect: true, reason: '正確！26日讀「にじゅうろくにち」。' },
            { text: 'にじゅうむいか', isCorrect: false, reason: '11日以後用「にち」。' },
            { text: 'にじゅろくにち', isCorrect: false, reason: '需要「う」。' },
            { text: 'はつかむいか', isCorrect: false, reason: '不是組合讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「26日」讀「にじゅうろくにち」，是一般讀法。',
            relatedRules: ['一般日期の讀法', '發售日']
        },
        sourceItem: { value: 26, kanji: '二十六日', reading: 'にじゅうろくにち' }
    },
    {
        id: 'day_comp_09',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '入学式は四月＿＿です。',
        stem_zh: '入學典禮是四月九日。',
        options: [
            { text: 'ここのか', isCorrect: true, reason: '正確！九日讀「ここのか」。' },
            { text: 'きゅうにち', isCorrect: false, reason: '1-10日使用訓讀。' },
            { text: 'くにち', isCorrect: false, reason: '1-10日使用訓讀。' },
            { text: 'くのか', isCorrect: false, reason: '應為「ここのか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「九日」讀「ここのか」，使用訓讀系統。',
            relatedRules: ['日期の訓讀', '入学式']
        },
        sourceItem: { value: 9, kanji: '九日', reading: 'ここのか' }
    },
    {
        id: 'day_comp_10',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '支払い期限は？',
        stem_zh: '付款期限是什麼時候？',
        dialogue: {
            speakerA: '支払い期限はいつですか？',
            speakerB: '毎月＿＿までです。（三十日）'
        },
        options: [
            { text: 'さんじゅうにち', isCorrect: true, reason: '正確！30日讀「さんじゅうにち」。' },
            { text: 'みそか', isCorrect: false, reason: '「みそか」是月末的古語。' },
            { text: 'さんじゅっか', isCorrect: false, reason: '30日用「にち」。' },
            { text: 'さんじゅにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「30日」讀「さんじゅうにち」，是一般讀法。',
            relatedRules: ['一般日期の讀法', '支払い期限']
        },
        sourceItem: { value: 30, kanji: '三十日', reading: 'さんじゅうにち' }
    },

    // ===== 陷阱題補充 =====
    {
        id: 'day_trap_01',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十日」和「十日間」的讀法相同嗎？',
        stem_zh: '「十日」和「十日間」的讀法相同嗎？',
        options: [
            { text: '不同：とおか vs じゅうにちかん', isCorrect: true, reason: '正確！日期用訓讀，期間+間用音讀。' },
            { text: '相同：都是とおか', isCorrect: false, reason: '「十日間」讀「じゅうにちかん」。' },
            { text: '相同：都是じゅうにち', isCorrect: false, reason: '日期10日讀「とおか」。' },
            { text: '不同：じゅうにち vs とおかかん', isCorrect: false, reason: '讀法組合錯誤。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日期「十日」讀「とおか」，期間「十日間」讀「じゅうにちかん」。',
            trapExplanation: '加上「間」表示期間時，讀法會改變。',
            relatedRules: ['日期vs期間', '〜間の讀法']
        },
        sourceItem: { value: 10, kanji: '十日/十日間', reading: 'とおか/じゅうにちかん' }
    },
    {
        id: 'day_trap_02',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '下列哪個日期的讀法例外？',
        stem_zh: '下列哪個日期的讀法例外？',
        options: [
            { text: '14日（じゅうよっか）', isCorrect: true, reason: '正確！14日保留「か」系統。' },
            { text: '11日（じゅういちにち）', isCorrect: false, reason: '11日是一般讀法。' },
            { text: '15日（じゅうごにち）', isCorrect: false, reason: '15日是一般讀法。' },
            { text: '16日（じゅうろくにち）', isCorrect: false, reason: '16日是一般讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '14日和24日是例外，保留「よっか」的訓讀。',
            trapExplanation: '11日以後通常用「にち」，但14、24日例外。',
            relatedRules: ['日期の例外', '14日・24日']
        },
        sourceItem: { value: 14, kanji: '十四日', reading: 'じゅうよっか' }
    },
    {
        id: 'day_trap_03',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '「八日」讀「ようか」還是「はちにち」？',
        stem_zh: '「八日」讀「ようか」還是「はちにち」？',
        options: [
            { text: 'ようか（訓讀）', isCorrect: true, reason: '正確！1-10日使用訓讀。' },
            { text: 'はちにち（音讀）', isCorrect: false, reason: '陷阱！1-10日用訓讀。' },
            { text: 'やっか', isCorrect: false, reason: '讀法錯誤。' },
            { text: '兩者都對', isCorrect: false, reason: '日期固定用「ようか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「八日」讀「ようか」，8是1-10範圍內。',
            trapExplanation: '1-10日全部使用訓讀系統。',
            relatedRules: ['日期の訓讀', '1-10日']
        },
        sourceItem: { value: 8, kanji: '八日', reading: 'ようか' }
    },
    {
        id: 'day_trap_04',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: true,
        stem: '連休は＿＿から＿＿までです。（二十九日〜三十一日）',
        stem_zh: '連假從二十九日到三十一日。',
        options: [
            { text: 'にじゅうくにち・さんじゅういちにち', isCorrect: true, reason: '正確！29日和31日的讀法。' },
            { text: 'にじゅうきゅうにち・さんじゅういちにち', isCorrect: false, reason: '陷阱！29讀「く」不是「きゅう」。' },
            { text: 'にじゅうここのか・さんじゅういっか', isCorrect: false, reason: '11日以後用「にち」。' },
            { text: 'にじゅくにち・さんじゅいちにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '29日讀「にじゅうくにち」（9＝く），31日讀「さんじゅういちにち」。',
            trapExplanation: '29的9讀「く」而非「きゅう」是常見錯誤。',
            relatedRules: ['一般日期の讀法', '9の讀法']
        },
        sourceItem: { value: '29-31', kanji: '二十九日〜三十一日', reading: 'にじゅうくにち〜さんじゅういちにち' }
    },

    // ===== 月末相關 =====
    {
        id: 'day_monthend_01',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「月末」的讀法是？',
        stem_zh: '「月末」的讀法是？',
        options: [
            { text: 'げつまつ', isCorrect: true, reason: '正確！月末讀「げつまつ」。' },
            { text: 'つきすえ', isCorrect: false, reason: '不存在這個讀法。' },
            { text: 'がつまつ', isCorrect: false, reason: '月末讀「げつ」不是「がつ」。' },
            { text: 'つきまつ', isCorrect: false, reason: '讀法錯誤。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「月末」讀「げつまつ」，表示月底。',
            relatedRules: ['月末の讀法', '時間表達']
        },
        sourceItem: { value: 'monthend', kanji: '月末', reading: 'げつまつ' }
    },
    {
        id: 'day_monthend_02',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '月末は＿＿日と＿＿日と＿＿日です（月により異なる）。',
        stem_zh: '月末是28日、30日、31日（依月份不同）。',
        options: [
            { text: 'にじゅうはちにち・さんじゅうにち・さんじゅういちにち', isCorrect: true, reason: '正確！各月份的月末日期。' },
            { text: 'にじゅうはっか・さんじゅっか・さんじゅういっか', isCorrect: false, reason: '11日以後用「にち」。' },
            { text: 'にじゅうようか・みそか・おおみそか', isCorrect: false, reason: '28不是「ようか」的讀法。' },
            { text: 'にじゅうはちか・さんじゅうか・さんじゅういちか', isCorrect: false, reason: '11日以後用「にち」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '月末日期因月份而異：2月28日、4月30日、12月31日等。',
            relatedRules: ['一般日期の讀法', '月末']
        },
        sourceItem: { value: 'monthend', kanji: '月末', reading: 'various' }
    },

    // ===== 更多應用場景 =====
    {
        id: 'day_scene_01',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '診察は何日ですか？',
        stem_zh: '看診是幾號？',
        dialogue: {
            speakerA: '次の診察は何日ですか？',
            speakerB: '来週の＿＿です。（五日）'
        },
        options: [
            { text: 'いつか', isCorrect: true, reason: '正確！五日讀「いつか」。' },
            { text: 'ごにち', isCorrect: false, reason: '1-10日使用訓讀。' },
            { text: 'ごか', isCorrect: false, reason: '讀法錯誤。' },
            { text: 'いつつ', isCorrect: false, reason: '「いつつ」是量詞。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「五日」讀「いつか」，使用訓讀系統。',
            relatedRules: ['日期の訓讀', '診察日程']
        },
        sourceItem: { value: 5, kanji: '五日', reading: 'いつか' }
    },
    {
        id: 'day_scene_02',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '卒業式は三月＿＿です。',
        stem_zh: '畢業典禮是三月十八日。',
        options: [
            { text: 'じゅうはちにち', isCorrect: true, reason: '正確！18日讀「じゅうはちにち」。' },
            { text: 'じゅうはっか', isCorrect: false, reason: '11日以後用「にち」。' },
            { text: 'とおかようか', isCorrect: false, reason: '不是組合讀法。' },
            { text: 'じゅはちにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「18日」讀「じゅうはちにち」，是一般讀法。',
            relatedRules: ['一般日期の讀法', '卒業式']
        },
        sourceItem: { value: 18, kanji: '十八日', reading: 'じゅうはちにち' }
    },
    {
        id: 'day_scene_03',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '休暇は何日から何日までですか？',
        stem_zh: '休假從幾號到幾號？',
        dialogue: {
            speakerA: '休暇は何日から何日までですか？',
            speakerB: '＿＿から＿＿までです。（十三日〜十六日）'
        },
        options: [
            { text: 'じゅうさんにち・じゅうろくにち', isCorrect: true, reason: '正確！13日和16日。' },
            { text: 'じゅうみっか・じゅうむいか', isCorrect: false, reason: '11日以後用「にち」。' },
            { text: 'じゅさんにち・じゅろくにち', isCorrect: false, reason: '需要「う」。' },
            { text: 'とおさんにち・とおろくにち', isCorrect: false, reason: '讀法錯誤。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '13日讀「じゅうさんにち」，16日讀「じゅうろくにち」。',
            relatedRules: ['一般日期の讀法', '休暇日程']
        },
        sourceItem: { value: '13-16', kanji: '十三日〜十六日', reading: 'じゅうさんにち〜じゅうろくにち' }
    },
    {
        id: 'day_scene_04',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '契約更新日は＿＿です。',
        stem_zh: '合約更新日是二十一日。',
        options: [
            { text: 'にじゅういちにち', isCorrect: true, reason: '正確！21日讀「にじゅういちにち」。' },
            { text: 'にじゅういっか', isCorrect: false, reason: '11日以後用「にち」。' },
            { text: 'はつかついたち', isCorrect: false, reason: '不是組合讀法。' },
            { text: 'にじゅいちにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「21日」讀「にじゅういちにち」，是一般讀法。',
            relatedRules: ['一般日期の讀法', '契約日程']
        },
        sourceItem: { value: 21, kanji: '二十一日', reading: 'にじゅういちにち' }
    },
    {
        id: 'day_scene_05',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '健康診断はいつですか？',
        stem_zh: '健康檢查是什麼時候？',
        dialogue: {
            speakerA: '健康診断はいつですか？',
            speakerB: '来月の＿＿です。（二十七日）'
        },
        options: [
            { text: 'にじゅうしちにち', isCorrect: true, reason: '正確！27日讀「にじゅうしちにち」。' },
            { text: 'にじゅうななにち', isCorrect: false, reason: '27讀「しち」不是「なな」。' },
            { text: 'にじゅうなのか', isCorrect: false, reason: '11日以後用「にち」。' },
            { text: 'にじゅしちにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「27日」讀「にじゅうしちにち」（7＝しち）。',
            relatedRules: ['一般日期の讀法', '健康診断']
        },
        sourceItem: { value: 27, kanji: '二十七日', reading: 'にじゅうしちにち' }
    },
    {
        id: 'day_scene_06',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: 'お盆は八月＿＿頃です。',
        stem_zh: '盂蘭盆節是八月十五日左右。',
        options: [
            { text: 'じゅうごにち', isCorrect: true, reason: '正確！15日讀「じゅうごにち」。' },
            { text: 'じゅうごか', isCorrect: false, reason: '11日以後用「にち」。' },
            { text: 'とおかいつか', isCorrect: false, reason: '不是組合讀法。' },
            { text: 'じゅごにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '8月15日是盂蘭盆節中心日，「15日」讀「じゅうごにち」。',
            relatedRules: ['一般日期の讀法', 'お盆']
        },
        sourceItem: { value: 15, kanji: '十五日', reading: 'じゅうごにち' }
    },
    {
        id: 'day_extra_01',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十三日」的正確讀法是？',
        stem_zh: '「十三日」的正確讀法是？',
        options: [
            { text: 'じゅうさんにち', isCorrect: true, reason: '正確！13日讀「じゅうさんにち」。' },
            { text: 'じゅうみっか', isCorrect: false, reason: '11日以後用「にち」。' },
            { text: 'とおみっか', isCorrect: false, reason: '不是組合讀法。' },
            { text: 'じゅさんにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「13日」讀「じゅうさんにち」，是一般讀法。',
            relatedRules: ['一般日期の讀法', '13日']
        },
        sourceItem: { value: 13, kanji: '十三日', reading: 'じゅうさんにち' }
    },
    {
        id: 'day_extra_02',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '飛行機は何日発ですか？',
        stem_zh: '飛機是幾號出發？',
        dialogue: {
            speakerA: '飛行機は何日発ですか？',
            speakerB: '＿＿発です。（十六日）'
        },
        options: [
            { text: 'じゅうろくにち', isCorrect: true, reason: '正確！16日讀「じゅうろくにち」。' },
            { text: 'じゅうむいか', isCorrect: false, reason: '11日以後用「にち」。' },
            { text: 'とおむいか', isCorrect: false, reason: '不是組合讀法。' },
            { text: 'じゅろくにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「16日」讀「じゅうろくにち」，是一般讀法。',
            relatedRules: ['一般日期の讀法', '航班日程']
        },
        sourceItem: { value: 16, kanji: '十六日', reading: 'じゅうろくにち' }
    },
    {
        id: 'day_extra_03',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '海の日は七月の第三＿＿です。',
        stem_zh: '海之日是七月的第三個星期一。',
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！海の日是7月第三個週一。' },
            { text: 'じゅうごにち', isCorrect: false, reason: '海の日是週一，不是固定日期。' },
            { text: 'はつか', isCorrect: false, reason: '海の日已改為週一制。' },
            { text: 'にちようび', isCorrect: false, reason: '海の日是週一。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '海の日原為7月20日，現改為7月第三個週一。',
            relatedRules: ['日本の祝日', 'ハッピーマンデー']
        },
        sourceItem: { value: 'holiday', kanji: '海の日', reading: 'うみのひ' }
    },
    {
        id: 'day_extra_04',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十七日」的「七」讀作？',
        stem_zh: '「十七日」的「七」讀作？',
        options: [
            { text: 'しち', isCorrect: true, reason: '正確！17日讀「じゅうしちにち」。' },
            { text: 'なな', isCorrect: false, reason: '17日的7讀「しち」不是「なな」。' },
            { text: 'なの', isCorrect: false, reason: '「なの」用於7日。' },
            { text: 'ひち', isCorrect: false, reason: '不存在這個讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '17日讀「じゅうしちにち」，7用音讀「しち」。',
            relatedRules: ['一般日期の讀法', '7の讀法']
        },
        sourceItem: { value: 17, kanji: '十七日', reading: 'じゅうしちにち' }
    },
    {
        id: 'day_extra_05',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '返却期限はいつですか？',
        stem_zh: '還書期限是什麼時候？',
        dialogue: {
            speakerA: '図書館の返却期限はいつですか？',
            speakerB: '＿＿までです。（十九日）'
        },
        options: [
            { text: 'じゅうくにち', isCorrect: true, reason: '正確！19日讀「じゅうくにち」。' },
            { text: 'じゅうきゅうにち', isCorrect: false, reason: '19的9讀「く」不是「きゅう」。' },
            { text: 'とおここのか', isCorrect: false, reason: '不是組合讀法。' },
            { text: 'じゅここのか', isCorrect: false, reason: '11日以後用「にち」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「19日」讀「じゅうくにち」（9＝く）。',
            relatedRules: ['一般日期の讀法', '9の讀法']
        },
        sourceItem: { value: 19, kanji: '十九日', reading: 'じゅうくにち' }
    },
    {
        id: 'day_extra_06',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '山の日は八月＿＿です。',
        stem_zh: '山之日是八月十一日。',
        options: [
            { text: 'じゅういちにち', isCorrect: true, reason: '正確！11日讀「じゅういちにち」。' },
            { text: 'じゅういっか', isCorrect: false, reason: '11日以後用「にち」。' },
            { text: 'とおかついたち', isCorrect: false, reason: '不是組合讀法。' },
            { text: 'じゅいちにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '8月11日是山之日，「11日」讀「じゅういちにち」。',
            relatedRules: ['一般日期の讀法', '山の日']
        },
        sourceItem: { value: 11, kanji: '十一日', reading: 'じゅういちにち' }
    },
    // ===== 追加題目 07-56 =====
    {
        id: 'day_extra_07',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '「二十日」的正確讀法是？',
        stem_zh: '「二十日」的正確讀法是？',
        options: [
            { text: 'はつか', isCorrect: true, reason: '正確！20日讀「はつか」。' },
            { text: 'にじゅうにち', isCorrect: false, reason: '20日是特殊讀法「はつか」。' },
            { text: 'ふつか', isCorrect: false, reason: '「ふつか」是2日。' },
            { text: 'にじゅっか', isCorrect: false, reason: '不存在這個讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「20日」讀「はつか」，是特殊讀法。',
            trapExplanation: '20日和1日一樣有特殊讀法，要特別記憶。',
            relatedRules: ['日期の特殊讀法', '20日＝はつか']
        },
        sourceItem: { value: 20, kanji: '二十日', reading: 'はつか' }
    },
    {
        id: 'day_extra_08',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '申込締切は今月＿＿です。',
        stem_zh: '報名截止日是本月二十五日。',
        options: [
            { text: 'にじゅうごにち', isCorrect: true, reason: '正確！25日讀「にじゅうごにち」。' },
            { text: 'にじゅういつか', isCorrect: false, reason: '21日以後用「にち」。' },
            { text: 'にじゅごにち', isCorrect: false, reason: '需要「う」。' },
            { text: 'はつかごにち', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「25日」讀「にじゅうごにち」，是一般讀法。',
            relatedRules: ['一般日期の讀法', '20以上の日期']
        },
        sourceItem: { value: 25, kanji: '二十五日', reading: 'にじゅうごにち' }
    },
    {
        id: 'day_extra_09',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '入金期限是幾號？',
        stem_zh: '付款期限是幾號？',
        dialogue: {
            speakerA: '入金の期限はいつですか？',
            speakerB: '今月の＿＿までです。（二十八日）'
        },
        options: [
            { text: 'にじゅうはちにち', isCorrect: true, reason: '正確！28日讀「にじゅうはちにち」。' },
            { text: 'にじゅうようか', isCorrect: false, reason: '8日的「ようか」只用於單獨的8日。' },
            { text: 'にじゅはちにち', isCorrect: false, reason: '需要「う」。' },
            { text: 'はつかようか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「28日」讀「にじゅうはちにち」。',
            relatedRules: ['一般日期の讀法', '期限の表達']
        },
        sourceItem: { value: 28, kanji: '二十八日', reading: 'にじゅうはちにち' }
    },
    {
        id: 'day_extra_10',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '「二十四日」的正確讀法是？',
        stem_zh: '「二十四日」的正確讀法是？',
        options: [
            { text: 'にじゅうよっか', isCorrect: true, reason: '正確！24日讀「にじゅうよっか」。' },
            { text: 'にじゅうよんにち', isCorrect: false, reason: '24日的4讀「よっ」。' },
            { text: 'にじゅうしにち', isCorrect: false, reason: '24日的4讀「よっ」不是「し」。' },
            { text: 'はつかよっか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「24日」讀「にじゅうよっか」，4用訓讀「よっ」。',
            trapExplanation: '14日、24日的「4」都使用訓讀「よっ」。',
            relatedRules: ['日期の特殊讀法', '4の讀法']
        },
        sourceItem: { value: 24, kanji: '二十四日', reading: 'にじゅうよっか' }
    },
    {
        id: 'day_extra_11',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '大晦日は十二月＿＿です。',
        stem_zh: '除夕是十二月三十一日。',
        options: [
            { text: 'さんじゅういちにち', isCorrect: true, reason: '正確！31日讀「さんじゅういちにち」。' },
            { text: 'みっかじゅういち', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'さんじゅうついたち', isCorrect: false, reason: '「ついたち」只用於1日。' },
            { text: 'さんじゅいちにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「31日」讀「さんじゅういちにち」，大晦日是一年最後一天。',
            relatedRules: ['一般日期の讀法', '大晦日']
        },
        sourceItem: { value: 31, kanji: '三十一日', reading: 'さんじゅういちにち' }
    },
    {
        id: 'day_extra_12',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '聖誕節是幾號？',
        stem_zh: '聖誕節是幾號？',
        dialogue: {
            speakerA: 'クリスマスは何月何日ですか？',
            speakerB: '十二月＿＿です。（二十五日）'
        },
        options: [
            { text: 'にじゅうごにち', isCorrect: true, reason: '正確！聖誕節是12月25日。' },
            { text: 'にじゅういつか', isCorrect: false, reason: '21日以後用「にち」。' },
            { text: 'はつかごにち', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'にじゅごにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '聖誕節是「12月25日」，讀「じゅうにがつにじゅうごにち」。',
            relatedRules: ['一般日期の讀法', 'クリスマス']
        },
        sourceItem: { value: 25, kanji: '二十五日', reading: 'にじゅうごにち' }
    },
    {
        id: 'day_extra_13',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '「十四日」的正確讀法是？',
        stem_zh: '「十四日」的正確讀法是？',
        options: [
            { text: 'じゅうよっか', isCorrect: true, reason: '正確！14日讀「じゅうよっか」。' },
            { text: 'じゅうよんにち', isCorrect: false, reason: '14日的4讀「よっ」。' },
            { text: 'じゅうしにち', isCorrect: false, reason: '14日的4讀「よっ」不是「し」。' },
            { text: 'とおよっか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「14日」讀「じゅうよっか」，4用訓讀「よっ」。',
            trapExplanation: '14日是特殊讀法，4讀「よっ」+「か」。',
            relatedRules: ['日期の特殊讀法', '14日＝じゅうよっか']
        },
        sourceItem: { value: 14, kanji: '十四日', reading: 'じゅうよっか' }
    },
    {
        id: 'day_extra_14',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '情人節是二月＿＿です。',
        stem_zh: '情人節是二月十四日。',
        options: [
            { text: 'じゅうよっか', isCorrect: true, reason: '正確！2月14日是情人節。' },
            { text: 'じゅうよんにち', isCorrect: false, reason: '14日的4讀「よっ」。' },
            { text: 'じゅうしにち', isCorrect: false, reason: '14日的4讀「よっ」不是「し」。' },
            { text: 'とおよっか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '情人節是「2月14日」，讀「にがつじゅうよっか」。',
            relatedRules: ['日期の特殊讀法', 'バレンタインデー']
        },
        sourceItem: { value: 14, kanji: '十四日', reading: 'じゅうよっか' }
    },
    {
        id: 'day_extra_15',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '下次約會是幾號？',
        stem_zh: '下次約會是幾號？',
        dialogue: {
            speakerA: '次のデートはいつですか？',
            speakerB: '来週の＿＿はどうですか？（十五日）'
        },
        options: [
            { text: 'じゅうごにち', isCorrect: true, reason: '正確！15日讀「じゅうごにち」。' },
            { text: 'じゅういつか', isCorrect: false, reason: '11日以後用「にち」。' },
            { text: 'とおいつか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'じゅごにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「15日」讀「じゅうごにち」，是一般讀法。',
            relatedRules: ['一般日期の讀法', '約束の日付']
        },
        sourceItem: { value: 15, kanji: '十五日', reading: 'じゅうごにち' }
    },
    {
        id: 'day_extra_16',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二十二日」的讀法是？',
        stem_zh: '「二十二日」的讀法是？',
        options: [
            { text: 'にじゅうににち', isCorrect: true, reason: '正確！22日讀「にじゅうににち」。' },
            { text: 'にじゅうふつか', isCorrect: false, reason: '「ふつか」只用於2日。' },
            { text: 'はつかふつか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'にじゅににち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「22日」讀「にじゅうににち」，是一般讀法。',
            relatedRules: ['一般日期の讀法', '20以上の日期']
        },
        sourceItem: { value: 22, kanji: '二十二日', reading: 'にじゅうににち' }
    },
    {
        id: 'day_extra_17',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '今日は＿＿、明日は三十日です。',
        stem_zh: '今天是二十九日，明天是三十日。',
        options: [
            { text: 'にじゅうくにち', isCorrect: true, reason: '正確！29日讀「にじゅうくにち」。' },
            { text: 'にじゅうきゅうにち', isCorrect: false, reason: '29日的9讀「く」。' },
            { text: 'にじゅうここのか', isCorrect: false, reason: '21日以後用「にち」。' },
            { text: 'はつかここのか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「29日」讀「にじゅうくにち」，9讀「く」。',
            relatedRules: ['一般日期の讀法', '9の讀法']
        },
        sourceItem: { value: 29, kanji: '二十九日', reading: 'にじゅうくにち' }
    },
    {
        id: 'day_extra_18',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '月底是幾號？',
        stem_zh: '月底是幾號？',
        dialogue: {
            speakerA: '今月の末日は何日ですか？',
            speakerB: '今月は＿＿までです。（三十日）'
        },
        options: [
            { text: 'さんじゅうにち', isCorrect: true, reason: '正確！30日讀「さんじゅうにち」。' },
            { text: 'みっかじゅう', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'さんじゅっか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'さんじゅにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「30日」讀「さんじゅうにち」。',
            relatedRules: ['一般日期の讀法', '月末の日付']
        },
        sourceItem: { value: 30, kanji: '三十日', reading: 'さんじゅうにち' }
    },
    {
        id: 'day_extra_19',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二十一日」的讀法是？',
        stem_zh: '「二十一日」的讀法是？',
        options: [
            { text: 'にじゅういちにち', isCorrect: true, reason: '正確！21日讀「にじゅういちにち」。' },
            { text: 'にじゅうついたち', isCorrect: false, reason: '「ついたち」只用於1日。' },
            { text: 'はつかいちにち', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'にじゅいちにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「21日」讀「にじゅういちにち」，是一般讀法。',
            relatedRules: ['一般日期の讀法', '20以上の日期']
        },
        sourceItem: { value: 21, kanji: '二十一日', reading: 'にじゅういちにち' }
    },
    {
        id: 'day_extra_20',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '勤労感謝の日は十一月＿＿です。',
        stem_zh: '勤勞感謝之日是十一月二十三日。',
        options: [
            { text: 'にじゅうさんにち', isCorrect: true, reason: '正確！23日讀「にじゅうさんにち」。' },
            { text: 'にじゅうみっか', isCorrect: false, reason: '21日以後用「にち」。' },
            { text: 'はつかみっか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'にじゅさんにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '勤労感謝の日是「11月23日」，讀「にじゅうさんにち」。',
            relatedRules: ['一般日期の讀法', '勤労感謝の日']
        },
        sourceItem: { value: 23, kanji: '二十三日', reading: 'にじゅうさんにち' }
    },
    {
        id: 'day_extra_21',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '展覽會最後一天是？',
        stem_zh: '展覽會最後一天是？',
        dialogue: {
            speakerA: '展覧会の最終日はいつですか？',
            speakerB: '今月＿＿までです。（二十七日）'
        },
        options: [
            { text: 'にじゅうしちにち', isCorrect: true, reason: '正確！27日讀「にじゅうしちにち」。' },
            { text: 'にじゅうなのか', isCorrect: false, reason: '「なのか」只用於7日。' },
            { text: 'はつかなのか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'にじゅななにち', isCorrect: false, reason: '27日的7讀「しち」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「27日」讀「にじゅうしちにち」，7讀「しち」。',
            relatedRules: ['一般日期の讀法', '7の讀法']
        },
        sourceItem: { value: 27, kanji: '二十七日', reading: 'にじゅうしちにち' }
    },
    {
        id: 'day_extra_22',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「二十六日」的讀法是？',
        stem_zh: '「二十六日」的讀法是？',
        options: [
            { text: 'にじゅうろくにち', isCorrect: true, reason: '正確！26日讀「にじゅうろくにち」。' },
            { text: 'にじゅうむいか', isCorrect: false, reason: '「むいか」只用於6日。' },
            { text: 'はつかむいか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'にじゅろくにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「26日」讀「にじゅうろくにち」，是一般讀法。',
            relatedRules: ['一般日期の讀法', '20以上の日期']
        },
        sourceItem: { value: 26, kanji: '二十六日', reading: 'にじゅうろくにち' }
    },
    {
        id: 'day_extra_23',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: true,
        stem: '今日は＿＿です（每月的第一天）。',
        stem_zh: '今天是這個月的第一天。',
        options: [
            { text: 'ついたち', isCorrect: true, reason: '正確！每月第一天讀「ついたち」。' },
            { text: 'いちにち', isCorrect: false, reason: '「いちにち」是「一天」的意思。' },
            { text: 'いっか', isCorrect: false, reason: '1日用「ついたち」。' },
            { text: 'ひとひ', isCorrect: false, reason: '這不是日期的讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '每月的第一天「1日」讀「ついたち」。',
            trapExplanation: '「いちにち」表示時間長度「一天」。',
            relatedRules: ['日期の特殊讀法', '1日＝ついたち']
        },
        sourceItem: { value: 1, kanji: '一日', reading: 'ついたち' }
    },
    {
        id: 'day_extra_24',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '薪水日是幾號？',
        stem_zh: '薪水日是幾號？',
        dialogue: {
            speakerA: '給料日は何日ですか？',
            speakerB: '毎月＿＿です。（二十五日）'
        },
        options: [
            { text: 'にじゅうごにち', isCorrect: true, reason: '正確！25日讀「にじゅうごにち」。' },
            { text: 'にじゅういつか', isCorrect: false, reason: '21日以後用「にち」。' },
            { text: 'はつかごにち', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'にじゅごにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日本常見的給料日是每月「25日」。',
            relatedRules: ['一般日期の讀法', '給料日']
        },
        sourceItem: { value: 25, kanji: '二十五日', reading: 'にじゅうごにち' }
    },
    {
        id: 'day_extra_25',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '「九日」的正確讀法是？',
        stem_zh: '「九日」的正確讀法是？',
        options: [
            { text: 'ここのか', isCorrect: true, reason: '正確！9日讀「ここのか」。' },
            { text: 'くにち', isCorrect: false, reason: '9日是特殊讀法「ここのか」。' },
            { text: 'きゅうにち', isCorrect: false, reason: '9日是特殊讀法「ここのか」。' },
            { text: 'ここのひ', isCorrect: false, reason: '日期用「か」不是「ひ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「9日」讀「ここのか」，是訓讀。',
            trapExplanation: '1-10日都用訓讀，9日是「ここのか」。',
            relatedRules: ['日期の訓讀', '9日＝ここのか']
        },
        sourceItem: { value: 9, kanji: '九日', reading: 'ここのか' }
    },
    {
        id: 'day_extra_26',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '子供の日は五月＿＿です。',
        stem_zh: '兒童節是五月五日。',
        options: [
            { text: 'いつか', isCorrect: true, reason: '正確！5日讀「いつか」。' },
            { text: 'ごにち', isCorrect: false, reason: '5日是特殊讀法「いつか」。' },
            { text: 'ごか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'いつにち', isCorrect: false, reason: '5日用「いつか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「5日」讀「いつか」，兒童節是5月5日。',
            relatedRules: ['日期の訓讀', '子供の日']
        },
        sourceItem: { value: 5, kanji: '五日', reading: 'いつか' }
    },
    {
        id: 'day_extra_27',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '七夕是幾月幾號？',
        stem_zh: '七夕是幾月幾號？',
        dialogue: {
            speakerA: '七夕は何月何日ですか？',
            speakerB: '七月＿＿です。（七日）'
        },
        options: [
            { text: 'なのか', isCorrect: true, reason: '正確！7日讀「なのか」。' },
            { text: 'しちにち', isCorrect: false, reason: '7日是特殊讀法「なのか」。' },
            { text: 'なななか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'ななにち', isCorrect: false, reason: '7日用「なのか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '七夕是7月7日，「7日」讀「なのか」。',
            relatedRules: ['日期の訓讀', '七夕']
        },
        sourceItem: { value: 7, kanji: '七日', reading: 'なのか' }
    },
    {
        id: 'day_extra_28',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '「八日」的正確讀法是？',
        stem_zh: '「八日」的正確讀法是？',
        options: [
            { text: 'ようか', isCorrect: true, reason: '正確！8日讀「ようか」。' },
            { text: 'はちにち', isCorrect: false, reason: '8日是特殊讀法「ようか」。' },
            { text: 'はつか', isCorrect: false, reason: '「はつか」是20日。' },
            { text: 'やっか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「8日」讀「ようか」，是訓讀。',
            trapExplanation: '8日「ようか」和20日「はつか」容易混淆。',
            relatedRules: ['日期の訓讀', '8日＝ようか']
        },
        sourceItem: { value: 8, kanji: '八日', reading: 'ようか' }
    },
    {
        id: 'day_extra_29',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '彼の誕生日は三月＿＿です。',
        stem_zh: '他的生日是三月三日。',
        options: [
            { text: 'みっか', isCorrect: true, reason: '正確！3日讀「みっか」。' },
            { text: 'さんにち', isCorrect: false, reason: '3日是特殊讀法「みっか」。' },
            { text: 'みか', isCorrect: false, reason: '有促音「っ」。' },
            { text: 'さんか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「3日」讀「みっか」，3月3日是女兒節（雛祭り）。',
            relatedRules: ['日期の訓讀', '雛祭り']
        },
        sourceItem: { value: 3, kanji: '三日', reading: 'みっか' }
    },
    {
        id: 'day_extra_30',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '會議延期到幾號？',
        stem_zh: '會議延期到幾號？',
        dialogue: {
            speakerA: '会議は何日に延期されましたか？',
            speakerB: '＿＿になりました。（十日）'
        },
        options: [
            { text: 'とおか', isCorrect: true, reason: '正確！10日讀「とおか」。' },
            { text: 'じゅうにち', isCorrect: false, reason: '10日是特殊讀法「とおか」。' },
            { text: 'じゅっか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'とおにち', isCorrect: false, reason: '10日用「とおか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「10日」讀「とおか」，是訓讀。',
            relatedRules: ['日期の訓讀', '10日＝とおか']
        },
        sourceItem: { value: 10, kanji: '十日', reading: 'とおか' }
    },
    {
        id: 'day_extra_31',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '「四日」的正確讀法是？',
        stem_zh: '「四日」的正確讀法是？',
        options: [
            { text: 'よっか', isCorrect: true, reason: '正確！4日讀「よっか」。' },
            { text: 'しにち', isCorrect: false, reason: '4日是特殊讀法「よっか」。' },
            { text: 'よんにち', isCorrect: false, reason: '4日是特殊讀法「よっか」。' },
            { text: 'よんか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「4日」讀「よっか」，是訓讀。',
            trapExplanation: '4日、14日、24日的「4」都讀「よっ」。',
            relatedRules: ['日期の訓讀', '4日＝よっか']
        },
        sourceItem: { value: 4, kanji: '四日', reading: 'よっか' }
    },
    {
        id: 'day_extra_32',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '元日は一月＿＿です。',
        stem_zh: '元旦是一月一日。',
        options: [
            { text: 'ついたち', isCorrect: true, reason: '正確！1日讀「ついたち」。' },
            { text: 'いちにち', isCorrect: false, reason: '日期的1日讀「ついたち」。' },
            { text: 'いっか', isCorrect: false, reason: '1日用「ついたち」。' },
            { text: 'がんじつ', isCorrect: false, reason: '「元日」是節日名，不是日期讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '元日是1月1日，「1日」讀「ついたち」。',
            relatedRules: ['日期の特殊讀法', '元日']
        },
        sourceItem: { value: 1, kanji: '一日', reading: 'ついたち' }
    },
    {
        id: 'day_extra_33',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '預約是幾號？',
        stem_zh: '預約是幾號？',
        dialogue: {
            speakerA: '予約は何日ですか？',
            speakerB: '＿＿にお願いします。（二日）'
        },
        options: [
            { text: 'ふつか', isCorrect: true, reason: '正確！2日讀「ふつか」。' },
            { text: 'ににち', isCorrect: false, reason: '2日是特殊讀法「ふつか」。' },
            { text: 'にか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'ふたひ', isCorrect: false, reason: '日期用「か」不是「ひ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「2日」讀「ふつか」，是訓讀。',
            relatedRules: ['日期の訓讀', '2日＝ふつか']
        },
        sourceItem: { value: 2, kanji: '二日', reading: 'ふつか' }
    },
    {
        id: 'day_extra_34',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '「六日」的正確讀法是？',
        stem_zh: '「六日」的正確讀法是？',
        options: [
            { text: 'むいか', isCorrect: true, reason: '正確！6日讀「むいか」。' },
            { text: 'ろくにち', isCorrect: false, reason: '6日是特殊讀法「むいか」。' },
            { text: 'むっか', isCorrect: false, reason: '沒有促音，是「むいか」。' },
            { text: 'ろっか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「6日」讀「むいか」，是訓讀。',
            trapExplanation: '6日沒有促音，讀「むいか」。',
            relatedRules: ['日期の訓讀', '6日＝むいか']
        },
        sourceItem: { value: 6, kanji: '六日', reading: 'むいか' }
    },
    {
        id: 'day_extra_35',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '彼女の誕生日は四月＿＿です。',
        stem_zh: '她的生日是四月十日。',
        options: [
            { text: 'とおか', isCorrect: true, reason: '正確！10日讀「とおか」。' },
            { text: 'じゅうにち', isCorrect: false, reason: '10日是特殊讀法「とおか」。' },
            { text: 'じゅっか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'とか', isCorrect: false, reason: '需要長音「とおか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「10日」讀「とおか」，是1-10日中的最後一個訓讀。',
            relatedRules: ['日期の訓讀', '10日＝とおか']
        },
        sourceItem: { value: 10, kanji: '十日', reading: 'とおか' }
    },
    {
        id: 'day_extra_36',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '考試是幾號？',
        stem_zh: '考試是幾號？',
        dialogue: {
            speakerA: '試験は何日ですか？',
            speakerB: '＿＿です。（十八日）'
        },
        options: [
            { text: 'じゅうはちにち', isCorrect: true, reason: '正確！18日讀「じゅうはちにち」。' },
            { text: 'じゅうようか', isCorrect: false, reason: '「ようか」只用於8日。' },
            { text: 'とおようか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'じゅはちにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「18日」讀「じゅうはちにち」，是一般讀法。',
            relatedRules: ['一般日期の讀法', '試験日程']
        },
        sourceItem: { value: 18, kanji: '十八日', reading: 'じゅうはちにち' }
    },
    {
        id: 'day_extra_37',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十二日」的讀法是？',
        stem_zh: '「十二日」的讀法是？',
        options: [
            { text: 'じゅうににち', isCorrect: true, reason: '正確！12日讀「じゅうににち」。' },
            { text: 'じゅうふつか', isCorrect: false, reason: '「ふつか」只用於2日。' },
            { text: 'とおふつか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'じゅににち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「12日」讀「じゅうににち」，是一般讀法。',
            relatedRules: ['一般日期の讀法', '11日以上']
        },
        sourceItem: { value: 12, kanji: '十二日', reading: 'じゅうににち' }
    },
    {
        id: 'day_extra_38',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '天皇誕生日は二月＿＿です。',
        stem_zh: '天皇誕辰是二月二十三日。',
        options: [
            { text: 'にじゅうさんにち', isCorrect: true, reason: '正確！23日讀「にじゅうさんにち」。' },
            { text: 'にじゅうみっか', isCorrect: false, reason: '21日以後用「にち」。' },
            { text: 'はつかみっか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'にじゅさんにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '天皇誕生日是「2月23日」。',
            relatedRules: ['一般日期の讀法', '天皇誕生日']
        },
        sourceItem: { value: 23, kanji: '二十三日', reading: 'にじゅうさんにち' }
    },
    {
        id: 'day_extra_39',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: true,
        stem: '報告書提交期限是？',
        stem_zh: '報告書提交期限是？',
        dialogue: {
            speakerA: 'レポートの提出期限は？',
            speakerB: '今月＿＿までです。（二十日）'
        },
        options: [
            { text: 'はつか', isCorrect: true, reason: '正確！20日讀「はつか」。' },
            { text: 'にじゅうにち', isCorrect: false, reason: '20日是特殊讀法「はつか」。' },
            { text: 'にじゅっか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'ふつか', isCorrect: false, reason: '「ふつか」是2日。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「20日」讀「はつか」，是特殊讀法。',
            trapExplanation: '20日和1日一樣有特殊讀法，需要記憶。',
            relatedRules: ['日期の特殊讀法', '20日＝はつか']
        },
        sourceItem: { value: 20, kanji: '二十日', reading: 'はつか' }
    },
    {
        id: 'day_extra_40',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「十五日」的讀法是？',
        stem_zh: '「十五日」的讀法是？',
        options: [
            { text: 'じゅうごにち', isCorrect: true, reason: '正確！15日讀「じゅうごにち」。' },
            { text: 'じゅういつか', isCorrect: false, reason: '「いつか」只用於5日。' },
            { text: 'とおいつか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'じゅごにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「15日」讀「じゅうごにち」，是一般讀法。',
            relatedRules: ['一般日期の讀法', '11日以上']
        },
        sourceItem: { value: 15, kanji: '十五日', reading: 'じゅうごにち' }
    },
    {
        id: 'day_extra_41',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '敬老の日は九月の第三＿＿です。',
        stem_zh: '敬老之日是九月的第三個星期一。',
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！敬老の日是9月第三個週一。' },
            { text: 'じゅうごにち', isCorrect: false, reason: '敬老の日是週一制，不是固定日期。' },
            { text: 'はつか', isCorrect: false, reason: '敬老の日已改為週一制。' },
            { text: 'にちようび', isCorrect: false, reason: '敬老の日是週一。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '敬老の日是9月第三個週一（ハッピーマンデー制度）。',
            relatedRules: ['日本の祝日', 'ハッピーマンデー']
        },
        sourceItem: { value: 'holiday', kanji: '敬老の日', reading: 'けいろうのひ' }
    },
    {
        id: 'day_extra_42',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '搬家日是幾號？',
        stem_zh: '搬家日是幾號？',
        dialogue: {
            speakerA: '引っ越しは何日ですか？',
            speakerB: '来月の＿＿です。（五日）'
        },
        options: [
            { text: 'いつか', isCorrect: true, reason: '正確！5日讀「いつか」。' },
            { text: 'ごにち', isCorrect: false, reason: '5日是特殊讀法「いつか」。' },
            { text: 'ごか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'いつにち', isCorrect: false, reason: '5日用「いつか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「5日」讀「いつか」，是訓讀。',
            relatedRules: ['日期の訓讀', '5日＝いつか']
        },
        sourceItem: { value: 5, kanji: '五日', reading: 'いつか' }
    },
    {
        id: 'day_extra_43',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '「一日」作為「一天」時的讀法是？',
        stem_zh: '「一日」作為「一天」時的讀法是？',
        options: [
            { text: 'いちにち', isCorrect: true, reason: '正確！「一天」讀「いちにち」。' },
            { text: 'ついたち', isCorrect: false, reason: '「ついたち」是日期「1號」。' },
            { text: 'ひとひ', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'いっか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一日」作為時間長度「一天」讀「いちにち」。',
            trapExplanation: '「ついたち」是日期，「いちにち」是時間長度。',
            relatedRules: ['一日の讀み分け', '日期vs期間']
        },
        sourceItem: { value: '1day', kanji: '一日', reading: 'いちにち' }
    },
    {
        id: 'day_extra_44',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '文化の日は十一月＿＿です。',
        stem_zh: '文化之日是十一月三日。',
        options: [
            { text: 'みっか', isCorrect: true, reason: '正確！3日讀「みっか」。' },
            { text: 'さんにち', isCorrect: false, reason: '3日是特殊讀法「みっか」。' },
            { text: 'みか', isCorrect: false, reason: '有促音「っ」。' },
            { text: 'さんか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '文化の日是「11月3日」，讀「みっか」。',
            relatedRules: ['日期の訓讀', '文化の日']
        },
        sourceItem: { value: 3, kanji: '三日', reading: 'みっか' }
    },
    {
        id: 'day_extra_45',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '租約到期是幾號？',
        stem_zh: '租約到期是幾號？',
        dialogue: {
            speakerA: '契約満了日はいつですか？',
            speakerB: '来年の三月＿＿です。（三十一日）'
        },
        options: [
            { text: 'さんじゅういちにち', isCorrect: true, reason: '正確！31日讀「さんじゅういちにち」。' },
            { text: 'みっかじゅういち', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'さんじゅうついたち', isCorrect: false, reason: '「ついたち」只用於1日。' },
            { text: 'さんじゅいちにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「31日」讀「さんじゅういちにち」。',
            relatedRules: ['一般日期の讀法', '月末の日付']
        },
        sourceItem: { value: 31, kanji: '三十一日', reading: 'さんじゅういちにち' }
    },
    {
        id: 'day_extra_46',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「何日」的讀法是？',
        stem_zh: '「何日」的讀法是？',
        options: [
            { text: 'なんにち', isCorrect: true, reason: '正確！何日讀「なんにち」。' },
            { text: 'なにか', isCorrect: false, reason: '「何」在此讀「なん」。' },
            { text: 'なんか', isCorrect: false, reason: '用「にち」不是「か」。' },
            { text: 'いくにち', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「何日」讀「なんにち」，用來詢問日期。',
            relatedRules: ['疑問詞の讀法', '何日＝なんにち']
        },
        sourceItem: { value: 'what day', kanji: '何日', reading: 'なんにち' }
    },
    {
        id: 'day_extra_47',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '体育の日は十月の第二＿＿です。',
        stem_zh: '體育之日是十月的第二個星期一。',
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！體育の日是10月第二個週一。' },
            { text: 'じゅうにち', isCorrect: false, reason: '體育の日是週一制，不是固定日期。' },
            { text: 'とおか', isCorrect: false, reason: '體育の日已改為週一制。' },
            { text: 'にちようび', isCorrect: false, reason: '體育の日是週一。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '體育の日是10月第二個週一（ハッピーマンデー制度）。',
            relatedRules: ['日本の祝日', 'ハッピーマンデー']
        },
        sourceItem: { value: 'holiday', kanji: 'スポーツの日', reading: 'スポーツのひ' }
    },
    {
        id: 'day_extra_48',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '父親節是幾號？',
        stem_zh: '父親節是幾號？',
        dialogue: {
            speakerA: '父の日は何月何日ですか？',
            speakerB: '六月の第三日曜日です。今年は六月＿＿です。（十五日）'
        },
        options: [
            { text: 'じゅうごにち', isCorrect: true, reason: '正確！15日讀「じゅうごにち」。' },
            { text: 'じゅういつか', isCorrect: false, reason: '「いつか」只用於5日。' },
            { text: 'とおいつか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'じゅごにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「15日」讀「じゅうごにち」。',
            relatedRules: ['一般日期の讀法', '父の日']
        },
        sourceItem: { value: 15, kanji: '十五日', reading: 'じゅうごにち' }
    },
    {
        id: 'day_extra_49',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '1-10日中，哪些有特殊讀法？',
        stem_zh: '1-10日中，哪些有特殊讀法？',
        options: [
            { text: '全部1-10日都是特殊讀法', isCorrect: true, reason: '正確！1-10日全部用訓讀。' },
            { text: '只有1日和10日', isCorrect: false, reason: '1-10日全部用特殊訓讀。' },
            { text: '只有1日', isCorrect: false, reason: '1-10日全部用特殊訓讀。' },
            { text: '沒有特殊讀法', isCorrect: false, reason: '1-10日全部用特殊訓讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '1-10日全部使用訓讀，是日語日期的重要特徵。',
            trapExplanation: '這是總結性題目，1-10日都要特別記憶。',
            relatedRules: ['日期の訓讀', '1-10日の讀法']
        },
        sourceItem: { value: '1-10', kanji: '一日〜十日', reading: 'ついたち〜とおか' }
    },
    {
        id: 'day_extra_50',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '昭和の日は四月＿＿です。',
        stem_zh: '昭和之日是四月二十九日。',
        options: [
            { text: 'にじゅうくにち', isCorrect: true, reason: '正確！29日讀「にじゅうくにち」。' },
            { text: 'にじゅうきゅうにち', isCorrect: false, reason: '29日的9讀「く」。' },
            { text: 'にじゅうここのか', isCorrect: false, reason: '21日以後用「にち」。' },
            { text: 'はつかここのか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '昭和の日是「4月29日」，讀「にじゅうくにち」。',
            relatedRules: ['一般日期の讀法', '昭和の日']
        },
        sourceItem: { value: 29, kanji: '二十九日', reading: 'にじゅうくにち' }
    },
    {
        id: 'day_extra_51',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '簽證到期是幾號？',
        stem_zh: '簽證到期是幾號？',
        dialogue: {
            speakerA: 'ビザの有効期限はいつですか？',
            speakerB: '＿＿までです。（二十六日）'
        },
        options: [
            { text: 'にじゅうろくにち', isCorrect: true, reason: '正確！26日讀「にじゅうろくにち」。' },
            { text: 'にじゅうむいか', isCorrect: false, reason: '「むいか」只用於6日。' },
            { text: 'はつかむいか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'にじゅろくにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「26日」讀「にじゅうろくにち」。',
            relatedRules: ['一般日期の讀法', '有効期限']
        },
        sourceItem: { value: 26, kanji: '二十六日', reading: 'にじゅうろくにち' }
    },
    {
        id: 'day_extra_52',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「朔日」的讀法是？',
        stem_zh: '「朔日」的讀法是？',
        options: [
            { text: 'ついたち', isCorrect: true, reason: '正確！朔日讀「ついたち」。' },
            { text: 'さくじつ', isCorrect: false, reason: '「朔日」的讀法是「ついたち」。' },
            { text: 'さくにち', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'ついにち', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「朔日」讀「ついたち」，是1日的另一種漢字寫法。',
            relatedRules: ['日期の特殊讀法', '朔日＝ついたち']
        },
        sourceItem: { value: 1, kanji: '朔日', reading: 'ついたち' }
    },
    {
        id: 'day_extra_53',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '建国記念の日は二月＿＿です。',
        stem_zh: '建國紀念日是二月十一日。',
        options: [
            { text: 'じゅういちにち', isCorrect: true, reason: '正確！11日讀「じゅういちにち」。' },
            { text: 'じゅういっか', isCorrect: false, reason: '11日以後用「にち」。' },
            { text: 'とおかついたち', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'じゅいちにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '建国記念の日是「2月11日」。',
            relatedRules: ['一般日期の讀法', '建国記念の日']
        },
        sourceItem: { value: 11, kanji: '十一日', reading: 'じゅういちにち' }
    },
    {
        id: 'day_extra_54',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '新專輯發售是幾號？',
        stem_zh: '新專輯發售是幾號？',
        dialogue: {
            speakerA: '新アルバムの発売日はいつですか？',
            speakerB: '来月の＿＿です。（八日）'
        },
        options: [
            { text: 'ようか', isCorrect: true, reason: '正確！8日讀「ようか」。' },
            { text: 'はちにち', isCorrect: false, reason: '8日是特殊讀法「ようか」。' },
            { text: 'はつか', isCorrect: false, reason: '「はつか」是20日。' },
            { text: 'やっか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「8日」讀「ようか」，是訓讀。',
            relatedRules: ['日期の訓讀', '8日＝ようか']
        },
        sourceItem: { value: 8, kanji: '八日', reading: 'ようか' }
    },
    {
        id: 'day_extra_55',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '11日以後的日期讀法規則是？',
        stem_zh: '11日以後的日期讀法規則是？',
        options: [
            { text: '用音讀「〜にち」', isCorrect: true, reason: '正確！11日以後用「にち」。' },
            { text: '繼續用訓讀「〜か」', isCorrect: false, reason: '11日以後改用「にち」。' },
            { text: '沒有固定規則', isCorrect: false, reason: '有固定規則：11日以後用「にち」。' },
            { text: '用音讀「〜じつ」', isCorrect: false, reason: '日期用「にち」不是「じつ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '11日以後改用音讀「〜にち」，除了14日、20日、24日例外。',
            trapExplanation: '這是總結性題目，理解11日以後的規則變化。',
            relatedRules: ['日期の讀法規則', '11日以上の讀法']
        },
        sourceItem: { value: '11+', kanji: '十一日以上', reading: '〜にち' }
    },
    {
        id: 'day_extra_56',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '成人の日は一月の第二＿＿です。',
        stem_zh: '成人之日是一月的第二個星期一。',
        options: [
            { text: 'げつようび', isCorrect: true, reason: '正確！成人の日是1月第二個週一。' },
            { text: 'じゅうごにち', isCorrect: false, reason: '成人の日是週一制，不是固定日期。' },
            { text: 'とおか', isCorrect: false, reason: '成人の日已改為週一制。' },
            { text: 'にちようび', isCorrect: false, reason: '成人の日是週一。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '成人の日是1月第二個週一（ハッピーマンデー制度）。',
            relatedRules: ['日本の祝日', 'ハッピーマンデー']
        },
        sourceItem: { value: 'holiday', kanji: '成人の日', reading: 'せいじんのひ' }
    },
    // ===== 追加題目 57-106 =====
    {
        id: 'day_extra_57',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '出發日是幾號？',
        stem_zh: '出發日是幾號？',
        dialogue: {
            speakerA: '出発日は何日ですか？',
            speakerB: '＿＿です。（四日）'
        },
        options: [
            { text: 'よっか', isCorrect: true, reason: '正確！4日讀「よっか」。' },
            { text: 'しにち', isCorrect: false, reason: '4日是特殊讀法「よっか」。' },
            { text: 'よんにち', isCorrect: false, reason: '4日是特殊讀法「よっか」。' },
            { text: 'よんか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「4日」讀「よっか」，是訓讀。',
            relatedRules: ['日期の訓讀', '4日＝よっか']
        },
        sourceItem: { value: 4, kanji: '四日', reading: 'よっか' }
    },
    {
        id: 'day_extra_58',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「晦日」的讀法是？',
        stem_zh: '「晦日」的讀法是？',
        options: [
            { text: 'みそか', isCorrect: true, reason: '正確！晦日讀「みそか」。' },
            { text: 'かいじつ', isCorrect: false, reason: '「晦日」的讀法是「みそか」。' },
            { text: 'つごもり', isCorrect: false, reason: '「つごもり」也可以但「みそか」更常用。' },
            { text: 'まいにち', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「晦日」讀「みそか」，指每月最後一天。',
            relatedRules: ['日期の特殊讀法', '晦日＝みそか']
        },
        sourceItem: { value: 'last day', kanji: '晦日', reading: 'みそか' }
    },
    {
        id: 'day_extra_59',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '春分の日は三月＿＿頃です。',
        stem_zh: '春分之日大約在三月二十一日。',
        options: [
            { text: 'にじゅういちにち', isCorrect: true, reason: '正確！21日讀「にじゅういちにち」。' },
            { text: 'にじゅうついたち', isCorrect: false, reason: '「ついたち」只用於1日。' },
            { text: 'はつかいちにち', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'にじゅいちにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '春分の日大約是「3月21日」左右。',
            relatedRules: ['一般日期の讀法', '春分の日']
        },
        sourceItem: { value: 21, kanji: '二十一日', reading: 'にじゅういちにち' }
    },
    {
        id: 'day_extra_60',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '回國日是幾號？',
        stem_zh: '回國日是幾號？',
        dialogue: {
            speakerA: '帰国日はいつですか？',
            speakerB: '来月の＿＿です。（九日）'
        },
        options: [
            { text: 'ここのか', isCorrect: true, reason: '正確！9日讀「ここのか」。' },
            { text: 'くにち', isCorrect: false, reason: '9日是特殊讀法「ここのか」。' },
            { text: 'きゅうにち', isCorrect: false, reason: '9日是特殊讀法「ここのか」。' },
            { text: 'ここのひ', isCorrect: false, reason: '日期用「か」不是「ひ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「9日」讀「ここのか」，是訓讀。',
            relatedRules: ['日期の訓讀', '9日＝ここのか']
        },
        sourceItem: { value: 9, kanji: '九日', reading: 'ここのか' }
    },
    {
        id: 'day_extra_61',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '14日、24日的「4」使用什麼讀法？',
        stem_zh: '14日、24日的「4」使用什麼讀法？',
        options: [
            { text: '訓讀「よっ」', isCorrect: true, reason: '正確！14日、24日的4讀「よっ」。' },
            { text: '音讀「し」', isCorrect: false, reason: '14日、24日的4不讀「し」。' },
            { text: '音讀「よん」', isCorrect: false, reason: '14日、24日的4不讀「よん」。' },
            { text: '沒有固定規則', isCorrect: false, reason: '有固定規則：讀「よっ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '14日（じゅうよっか）、24日（にじゅうよっか）的「4」用訓讀「よっ」。',
            trapExplanation: '這是日期中4的特殊讀法規則。',
            relatedRules: ['日期の特殊讀法', '4の讀法']
        },
        sourceItem: { value: '4', kanji: '四', reading: 'よっ' }
    },
    {
        id: 'day_extra_62',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '秋分の日は九月＿＿頃です。',
        stem_zh: '秋分之日大約在九月二十三日。',
        options: [
            { text: 'にじゅうさんにち', isCorrect: true, reason: '正確！23日讀「にじゅうさんにち」。' },
            { text: 'にじゅうみっか', isCorrect: false, reason: '21日以後用「にち」。' },
            { text: 'はつかみっか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'にじゅさんにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '秋分の日大約是「9月23日」左右。',
            relatedRules: ['一般日期の讀法', '秋分の日']
        },
        sourceItem: { value: 23, kanji: '二十三日', reading: 'にじゅうさんにち' }
    },
    {
        id: 'day_extra_63',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '保險到期是幾號？',
        stem_zh: '保險到期是幾號？',
        dialogue: {
            speakerA: '保険の満期日はいつですか？',
            speakerB: '今月の＿＿です。（六日）'
        },
        options: [
            { text: 'むいか', isCorrect: true, reason: '正確！6日讀「むいか」。' },
            { text: 'ろくにち', isCorrect: false, reason: '6日是特殊讀法「むいか」。' },
            { text: 'むっか', isCorrect: false, reason: '沒有促音，是「むいか」。' },
            { text: 'ろっか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「6日」讀「むいか」，是訓讀。',
            relatedRules: ['日期の訓讀', '6日＝むいか']
        },
        sourceItem: { value: 6, kanji: '六日', reading: 'むいか' }
    },
    {
        id: 'day_extra_64',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「毎月」的讀法是？',
        stem_zh: '「毎月」的讀法是？',
        options: [
            { text: 'まいつき', isCorrect: true, reason: '正確！毎月讀「まいつき」。' },
            { text: 'まいげつ', isCorrect: false, reason: '「毎月」的標準讀法是「まいつき」。' },
            { text: 'ごとつき', isCorrect: false, reason: '「毎」讀「まい」不是「ごと」。' },
            { text: 'まいがつ', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「毎月」讀「まいつき」，意思是每個月。',
            relatedRules: ['毎〜の讀法', '毎月＝まいつき']
        },
        sourceItem: { value: 'every month', kanji: '毎月', reading: 'まいつき' }
    },
    {
        id: 'day_extra_65',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '憲法記念日は五月＿＿です。',
        stem_zh: '憲法紀念日是五月三日。',
        options: [
            { text: 'みっか', isCorrect: true, reason: '正確！3日讀「みっか」。' },
            { text: 'さんにち', isCorrect: false, reason: '3日是特殊讀法「みっか」。' },
            { text: 'みか', isCorrect: false, reason: '有促音「っ」。' },
            { text: 'さんか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '憲法記念日是「5月3日」。',
            relatedRules: ['日期の訓讀', '憲法記念日']
        },
        sourceItem: { value: 3, kanji: '三日', reading: 'みっか' }
    },
    {
        id: 'day_extra_66',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '面談是幾號？',
        stem_zh: '面談是幾號？',
        dialogue: {
            speakerA: '面談は何日ですか？',
            speakerB: '＿＿の午後3時です。（七日）'
        },
        options: [
            { text: 'なのか', isCorrect: true, reason: '正確！7日讀「なのか」。' },
            { text: 'しちにち', isCorrect: false, reason: '7日是特殊讀法「なのか」。' },
            { text: 'なななか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'ななにち', isCorrect: false, reason: '7日用「なのか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「7日」讀「なのか」，是訓讀。',
            relatedRules: ['日期の訓讀', '7日＝なのか']
        },
        sourceItem: { value: 7, kanji: '七日', reading: 'なのか' }
    },
    {
        id: 'day_extra_67',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '20日特殊讀法的由來是？',
        stem_zh: '20日特殊讀法的由來是？',
        options: [
            { text: '古語「二十」（はた）＋日（か）', isCorrect: true, reason: '正確！「はた」＋「か」→「はつか」。' },
            { text: '沒有特殊由來', isCorrect: false, reason: '有特殊由來：古語「はた」。' },
            { text: '來自外來語', isCorrect: false, reason: '來自古日語「はた」。' },
            { text: '來自中國語', isCorrect: false, reason: '來自古日語「はた」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「はつか」來自古語「二十」（はた）＋「日」（か）。',
            trapExplanation: '了解語源有助於記憶特殊讀法。',
            relatedRules: ['日期の特殊讀法', '20日の語源']
        },
        sourceItem: { value: 20, kanji: '二十日', reading: 'はつか' }
    },
    {
        id: 'day_extra_68',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: 'みどりの日は五月＿＿です。',
        stem_zh: '綠之日是五月四日。',
        options: [
            { text: 'よっか', isCorrect: true, reason: '正確！4日讀「よっか」。' },
            { text: 'しにち', isCorrect: false, reason: '4日是特殊讀法「よっか」。' },
            { text: 'よんにち', isCorrect: false, reason: '4日是特殊讀法「よっか」。' },
            { text: 'よんか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: 'みどりの日是「5月4日」。',
            relatedRules: ['日期の訓讀', 'みどりの日']
        },
        sourceItem: { value: 4, kanji: '四日', reading: 'よっか' }
    },
    {
        id: 'day_extra_69',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '開幕式是幾號？',
        stem_zh: '開幕式是幾號？',
        dialogue: {
            speakerA: '開会式は何日ですか？',
            speakerB: '＿＿です。（十日）'
        },
        options: [
            { text: 'とおか', isCorrect: true, reason: '正確！10日讀「とおか」。' },
            { text: 'じゅうにち', isCorrect: false, reason: '10日是特殊讀法「とおか」。' },
            { text: 'じゅっか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'とおにち', isCorrect: false, reason: '10日用「とおか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「10日」讀「とおか」，是訓讀。',
            relatedRules: ['日期の訓讀', '10日＝とおか']
        },
        sourceItem: { value: 10, kanji: '十日', reading: 'とおか' }
    },
    {
        id: 'day_extra_70',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「日付」的讀法是？',
        stem_zh: '「日付」的讀法是？',
        options: [
            { text: 'ひづけ', isCorrect: true, reason: '正確！日付讀「ひづけ」。' },
            { text: 'にちふ', isCorrect: false, reason: '「日付」讀「ひづけ」。' },
            { text: 'にちつき', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'ひつけ', isCorrect: false, reason: '有濁音「づ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「日付」讀「ひづけ」，意思是日期。',
            relatedRules: ['日期相關詞彙', '日付＝ひづけ']
        },
        sourceItem: { value: 'date', kanji: '日付', reading: 'ひづけ' }
    },
    {
        id: 'day_extra_71',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '今日は＿＿、あさっては十日です。',
        stem_zh: '今天是八日，後天是十日。',
        options: [
            { text: 'ようか', isCorrect: true, reason: '正確！8日讀「ようか」。' },
            { text: 'はちにち', isCorrect: false, reason: '8日是特殊讀法「ようか」。' },
            { text: 'はつか', isCorrect: false, reason: '「はつか」是20日。' },
            { text: 'やっか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「8日」讀「ようか」。',
            relatedRules: ['日期の訓讀', '8日＝ようか']
        },
        sourceItem: { value: 8, kanji: '八日', reading: 'ようか' }
    },
    {
        id: 'day_extra_72',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '產品發貨是幾號？',
        stem_zh: '產品發貨是幾號？',
        dialogue: {
            speakerA: '商品の発送日はいつですか？',
            speakerB: 'ご注文から＿＿以内です。（三日）'
        },
        options: [
            { text: 'みっか', isCorrect: true, reason: '正確！3日讀「みっか」。' },
            { text: 'さんにち', isCorrect: false, reason: '3日是特殊讀法「みっか」。' },
            { text: 'みか', isCorrect: false, reason: '有促音「っ」。' },
            { text: 'さんか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「3日以内」的「3日」讀「みっか」。',
            relatedRules: ['日期の訓讀', '3日＝みっか']
        },
        sourceItem: { value: 3, kanji: '三日', reading: 'みっか' }
    },
    {
        id: 'day_extra_73',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '「一日」讀「ついたち」時的語源是？',
        stem_zh: '「一日」讀「ついたち」時的語源是？',
        options: [
            { text: '「月立ち」（新月出現）', isCorrect: true, reason: '正確！來自「つきたち」。' },
            { text: '「一立ち」', isCorrect: false, reason: '來自「月立ち」不是「一立ち」。' },
            { text: '沒有特殊語源', isCorrect: false, reason: '有特殊語源：「月立ち」。' },
            { text: '來自中國語', isCorrect: false, reason: '來自古日語「月立ち」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「ついたち」來自「月立ち」（つきたち），指新月出現。',
            trapExplanation: '了解語源有助於記憶這個特殊讀法。',
            relatedRules: ['日期の特殊讀法', '1日の語源']
        },
        sourceItem: { value: 1, kanji: '一日', reading: 'ついたち' }
    },
    {
        id: 'day_extra_74',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '母の日は五月の第二＿＿です。',
        stem_zh: '母親節是五月的第二個星期日。',
        options: [
            { text: 'にちようび', isCorrect: true, reason: '正確！母の日是5月第二個週日。' },
            { text: 'じゅうにち', isCorrect: false, reason: '母の日是週日制，不是固定日期。' },
            { text: 'とおか', isCorrect: false, reason: '母の日是週日制。' },
            { text: 'げつようび', isCorrect: false, reason: '母の日是週日。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '母の日是5月第二個週日。',
            relatedRules: ['日本の祝日', '母の日']
        },
        sourceItem: { value: 'holiday', kanji: '母の日', reading: 'ははのひ' }
    },
    {
        id: 'day_extra_75',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '畢業典禮是幾號？',
        stem_zh: '畢業典禮是幾號？',
        dialogue: {
            speakerA: '卒業式は何日ですか？',
            speakerB: '三月＿＿です。（二十日）'
        },
        options: [
            { text: 'はつか', isCorrect: true, reason: '正確！20日讀「はつか」。' },
            { text: 'にじゅうにち', isCorrect: false, reason: '20日是特殊讀法「はつか」。' },
            { text: 'にじゅっか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'ふつか', isCorrect: false, reason: '「ふつか」是2日。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「20日」讀「はつか」。',
            relatedRules: ['日期の特殊讀法', '20日＝はつか']
        },
        sourceItem: { value: 20, kanji: '二十日', reading: 'はつか' }
    },
    {
        id: 'day_extra_76',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「今日」的讀法是？',
        stem_zh: '「今日」的讀法是？',
        options: [
            { text: 'きょう', isCorrect: true, reason: '正確！今日讀「きょう」。' },
            { text: 'こんにち', isCorrect: false, reason: '「こんにち」是正式讀法但不常用。' },
            { text: 'きょうび', isCorrect: false, reason: '這是「今日日」的讀法。' },
            { text: 'いまにち', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「今日」讀「きょう」，意思是今天。',
            relatedRules: ['日期相關詞彙', '今日＝きょう']
        },
        sourceItem: { value: 'today', kanji: '今日', reading: 'きょう' }
    },
    {
        id: 'day_extra_77',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '勤労感謝の日の翌日は十一月＿＿です。',
        stem_zh: '勤勞感謝之日的隔天是十一月二十四日。',
        options: [
            { text: 'にじゅうよっか', isCorrect: true, reason: '正確！24日讀「にじゅうよっか」。' },
            { text: 'にじゅうよんにち', isCorrect: false, reason: '24日的4讀「よっ」。' },
            { text: 'にじゅうしにち', isCorrect: false, reason: '24日的4讀「よっ」不是「し」。' },
            { text: 'はつかよっか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「24日」讀「にじゅうよっか」。',
            relatedRules: ['日期の特殊讀法', '24日']
        },
        sourceItem: { value: 24, kanji: '二十四日', reading: 'にじゅうよっか' }
    },
    {
        id: 'day_extra_78',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '申請期限是幾號？',
        stem_zh: '申請期限是幾號？',
        dialogue: {
            speakerA: '申請の締め切りは何日ですか？',
            speakerB: '今月＿＿必着です。（五日）'
        },
        options: [
            { text: 'いつか', isCorrect: true, reason: '正確！5日讀「いつか」。' },
            { text: 'ごにち', isCorrect: false, reason: '5日是特殊讀法「いつか」。' },
            { text: 'ごか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'いつにち', isCorrect: false, reason: '5日用「いつか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「5日」讀「いつか」。',
            relatedRules: ['日期の訓讀', '5日＝いつか']
        },
        sourceItem: { value: 5, kanji: '五日', reading: 'いつか' }
    },
    {
        id: 'day_extra_79',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「明日」的讀法是？',
        stem_zh: '「明日」的讀法是？',
        options: [
            { text: 'あした / あす', isCorrect: true, reason: '正確！明日讀「あした」或「あす」。' },
            { text: 'みょうにち', isCorrect: false, reason: '「みょうにち」是正式讀法但不常用。' },
            { text: 'めいにち', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'あけのひ', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「明日」讀「あした」或「あす」。',
            relatedRules: ['日期相關詞彙', '明日']
        },
        sourceItem: { value: 'tomorrow', kanji: '明日', reading: 'あした' }
    },
    {
        id: 'day_extra_80',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '七五三は十一月＿＿です。',
        stem_zh: '七五三是十一月十五日。',
        options: [
            { text: 'じゅうごにち', isCorrect: true, reason: '正確！15日讀「じゅうごにち」。' },
            { text: 'じゅういつか', isCorrect: false, reason: '「いつか」只用於5日。' },
            { text: 'とおいつか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'じゅごにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '七五三是「11月15日」。',
            relatedRules: ['一般日期の讀法', '七五三']
        },
        sourceItem: { value: 15, kanji: '十五日', reading: 'じゅうごにち' }
    },
    {
        id: 'day_extra_81',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '演唱會是幾號？',
        stem_zh: '演唱會是幾號？',
        dialogue: {
            speakerA: 'コンサートは何日ですか？',
            speakerB: '来月の＿＿です。（二日）'
        },
        options: [
            { text: 'ふつか', isCorrect: true, reason: '正確！2日讀「ふつか」。' },
            { text: 'ににち', isCorrect: false, reason: '2日是特殊讀法「ふつか」。' },
            { text: 'にか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'ふたひ', isCorrect: false, reason: '日期用「か」不是「ひ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「2日」讀「ふつか」。',
            relatedRules: ['日期の訓讀', '2日＝ふつか']
        },
        sourceItem: { value: 2, kanji: '二日', reading: 'ふつか' }
    },
    {
        id: 'day_extra_82',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「昨日」的讀法是？',
        stem_zh: '「昨日」的讀法是？',
        options: [
            { text: 'きのう', isCorrect: true, reason: '正確！昨日讀「きのう」。' },
            { text: 'さくじつ', isCorrect: false, reason: '「さくじつ」是正式讀法但不常用。' },
            { text: 'さくにち', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'きのひ', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「昨日」讀「きのう」，意思是昨天。',
            relatedRules: ['日期相關詞彙', '昨日＝きのう']
        },
        sourceItem: { value: 'yesterday', kanji: '昨日', reading: 'きのう' }
    },
    {
        id: 'day_extra_83',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '終戦記念日は八月＿＿です。',
        stem_zh: '終戰紀念日是八月十五日。',
        options: [
            { text: 'じゅうごにち', isCorrect: true, reason: '正確！15日讀「じゅうごにち」。' },
            { text: 'じゅういつか', isCorrect: false, reason: '「いつか」只用於5日。' },
            { text: 'とおいつか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'じゅごにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '終戦記念日是「8月15日」。',
            relatedRules: ['一般日期の讀法', '終戦記念日']
        },
        sourceItem: { value: 15, kanji: '十五日', reading: 'じゅうごにち' }
    },
    {
        id: 'day_extra_84',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: true,
        stem: '這個月有幾天？',
        stem_zh: '這個月有幾天？',
        dialogue: {
            speakerA: '今月は何日ありますか？',
            speakerB: '＿＿あります。（三十一日）'
        },
        options: [
            { text: 'さんじゅういちにち', isCorrect: true, reason: '正確！31天讀「さんじゅういちにち」。' },
            { text: 'さんじゅうついたち', isCorrect: false, reason: '這裡是天數不是日期。' },
            { text: 'みっかじゅういち', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'さんじゅいちにち', isCorrect: false, reason: '需要「う」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '這裡的「31日」表示天數，讀「さんじゅういちにち」。',
            trapExplanation: '詢問天數時用「にち」表示。',
            relatedRules: ['日數の讀法', '何日ある']
        },
        sourceItem: { value: 31, kanji: '三十一日', reading: 'さんじゅういちにち' }
    },
    {
        id: 'day_extra_85',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「一昨日」的讀法是？',
        stem_zh: '「一昨日」的讀法是？',
        options: [
            { text: 'おととい', isCorrect: true, reason: '正確！一昨日讀「おととい」。' },
            { text: 'いっさくじつ', isCorrect: false, reason: '「いっさくじつ」是正式讀法但不常用。' },
            { text: 'いちさくにち', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'ひとひまえ', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「一昨日」讀「おととい」，意思是前天。',
            relatedRules: ['日期相關詞彙', '一昨日＝おととい']
        },
        sourceItem: { value: 'day before yesterday', kanji: '一昨日', reading: 'おととい' }
    },
    {
        id: 'day_extra_86',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '今月は＿＿から始まりました。',
        stem_zh: '這個月從一日開始。',
        options: [
            { text: 'ついたち', isCorrect: true, reason: '正確！1日讀「ついたち」。' },
            { text: 'いちにち', isCorrect: false, reason: '日期的1日讀「ついたち」。' },
            { text: 'いっか', isCorrect: false, reason: '1日用「ついたち」。' },
            { text: 'ひとひ', isCorrect: false, reason: '這不是日期的讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '每月的第一天「1日」讀「ついたち」。',
            relatedRules: ['日期の特殊讀法', '1日＝ついたち']
        },
        sourceItem: { value: 1, kanji: '一日', reading: 'ついたち' }
    },
    {
        id: 'day_extra_87',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '旅行是幾天？',
        stem_zh: '旅行是幾天？',
        dialogue: {
            speakerA: '旅行は何日間ですか？',
            speakerB: '＿＿間です。（五日）'
        },
        options: [
            { text: 'いつか', isCorrect: true, reason: '正確！5日讀「いつか」。' },
            { text: 'ごにち', isCorrect: false, reason: '5日是特殊讀法「いつか」。' },
            { text: 'ごか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'いつにち', isCorrect: false, reason: '5日用「いつか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「5日間」的「5日」讀「いつか」。',
            relatedRules: ['日期の訓讀', '期間の表現']
        },
        sourceItem: { value: 5, kanji: '五日間', reading: 'いつかかん' }
    },
    {
        id: 'day_extra_88',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「明後日」的讀法是？',
        stem_zh: '「明後日」的讀法是？',
        options: [
            { text: 'あさって', isCorrect: true, reason: '正確！明後日讀「あさって」。' },
            { text: 'みょうごにち', isCorrect: false, reason: '「みょうごにち」是正式讀法但不常用。' },
            { text: 'めいごにち', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'あとのひ', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「明後日」讀「あさって」，意思是後天。',
            relatedRules: ['日期相關詞彙', '明後日＝あさって']
        },
        sourceItem: { value: 'day after tomorrow', kanji: '明後日', reading: 'あさって' }
    },
    {
        id: 'day_extra_89',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '總復習：1-10日使用＿＿讀法。',
        stem_zh: '總復習：1-10日使用什麼讀法？',
        options: [
            { text: '訓讀（〜か）', isCorrect: true, reason: '正確！1-10日用訓讀。' },
            { text: '音讀（〜にち）', isCorrect: false, reason: '1-10日用訓讀「〜か」。' },
            { text: '沒有固定規則', isCorrect: false, reason: '有固定規則：用訓讀。' },
            { text: '可以任選', isCorrect: false, reason: '1-10日固定用訓讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '1-10日全部使用訓讀，如「ついたち」「ふつか」「みっか」等。',
            relatedRules: ['日期の訓讀', '1-10日の讀法']
        },
        sourceItem: { value: '1-10', kanji: '一日〜十日', reading: '訓讀' }
    },
    {
        id: 'day_extra_90',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '派對是幾號？',
        stem_zh: '派對是幾號？',
        dialogue: {
            speakerA: 'パーティーは何日ですか？',
            speakerB: '＿＿の夜です。（十四日）'
        },
        options: [
            { text: 'じゅうよっか', isCorrect: true, reason: '正確！14日讀「じゅうよっか」。' },
            { text: 'じゅうよんにち', isCorrect: false, reason: '14日的4讀「よっ」。' },
            { text: 'じゅうしにち', isCorrect: false, reason: '14日的4讀「よっ」不是「し」。' },
            { text: 'とおよっか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「14日」讀「じゅうよっか」。',
            relatedRules: ['日期の特殊讀法', '14日']
        },
        sourceItem: { value: 14, kanji: '十四日', reading: 'じゅうよっか' }
    },
    {
        id: 'day_extra_91',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '總復習：哪些日期在11日以後仍用特殊讀法？',
        stem_zh: '總復習：哪些日期在11日以後仍用特殊讀法？',
        options: [
            { text: '14日、20日、24日', isCorrect: true, reason: '正確！這三個日期有特殊讀法。' },
            { text: '只有20日', isCorrect: false, reason: '14日、20日、24日都有特殊讀法。' },
            { text: '11-31日都沒有特殊讀法', isCorrect: false, reason: '14日、20日、24日有特殊讀法。' },
            { text: '所有帶4的日期', isCorrect: false, reason: '只有14日、24日，不是所有帶4的。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '14日（じゅうよっか）、20日（はつか）、24日（にじゅうよっか）有特殊讀法。',
            trapExplanation: '這是總結性題目，掌握11日以後的例外。',
            relatedRules: ['日期の特殊讀法', '例外の日期']
        },
        sourceItem: { value: 'exception', kanji: '特殊日期', reading: '例外' }
    },
    {
        id: 'day_extra_92',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '彼は＿＿に生まれました。',
        stem_zh: '他在二十日出生。',
        options: [
            { text: 'はつか', isCorrect: true, reason: '正確！20日讀「はつか」。' },
            { text: 'にじゅうにち', isCorrect: false, reason: '20日是特殊讀法「はつか」。' },
            { text: 'にじゅっか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'ふつか', isCorrect: false, reason: '「ふつか」是2日。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「20日」讀「はつか」。',
            relatedRules: ['日期の特殊讀法', '20日＝はつか']
        },
        sourceItem: { value: 20, kanji: '二十日', reading: 'はつか' }
    },
    {
        id: 'day_extra_93',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '存款到期是幾號？',
        stem_zh: '存款到期是幾號？',
        dialogue: {
            speakerA: '定期預金の満期日はいつですか？',
            speakerB: '来月の＿＿です。（十日）'
        },
        options: [
            { text: 'とおか', isCorrect: true, reason: '正確！10日讀「とおか」。' },
            { text: 'じゅうにち', isCorrect: false, reason: '10日是特殊讀法「とおか」。' },
            { text: 'じゅっか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'とおにち', isCorrect: false, reason: '10日用「とおか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「10日」讀「とおか」。',
            relatedRules: ['日期の訓讀', '10日＝とおか']
        },
        sourceItem: { value: 10, kanji: '十日', reading: 'とおか' }
    },
    {
        id: 'day_extra_94',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「翌日」的讀法是？',
        stem_zh: '「翌日」的讀法是？',
        options: [
            { text: 'よくじつ', isCorrect: true, reason: '正確！翌日讀「よくじつ」。' },
            { text: 'よくにち', isCorrect: false, reason: '「翌日」讀「よくじつ」。' },
            { text: 'あくるひ', isCorrect: false, reason: '「あくるひ」是「翌る日」的讀法。' },
            { text: 'つぎのひ', isCorrect: false, reason: '這是「次の日」的讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「翌日」讀「よくじつ」，意思是第二天。',
            relatedRules: ['日期相關詞彙', '翌日＝よくじつ']
        },
        sourceItem: { value: 'next day', kanji: '翌日', reading: 'よくじつ' }
    },
    {
        id: 'day_extra_95',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '會議將延期到＿＿。',
        stem_zh: '會議將延期到二十四日。',
        options: [
            { text: 'にじゅうよっか', isCorrect: true, reason: '正確！24日讀「にじゅうよっか」。' },
            { text: 'にじゅうよんにち', isCorrect: false, reason: '24日的4讀「よっ」。' },
            { text: 'にじゅうしにち', isCorrect: false, reason: '24日的4讀「よっ」不是「し」。' },
            { text: 'はつかよっか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「24日」讀「にじゅうよっか」。',
            relatedRules: ['日期の特殊讀法', '24日']
        },
        sourceItem: { value: 24, kanji: '二十四日', reading: 'にじゅうよっか' }
    },
    {
        id: 'day_extra_96',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '活動持續幾天？',
        stem_zh: '活動持續幾天？',
        dialogue: {
            speakerA: 'イベントは何日間続きますか？',
            speakerB: '＿＿間です。（七日）'
        },
        options: [
            { text: 'なのか', isCorrect: true, reason: '正確！7日讀「なのか」。' },
            { text: 'しちにち', isCorrect: false, reason: '7日是特殊讀法「なのか」。' },
            { text: 'なななか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'ななにち', isCorrect: false, reason: '7日用「なのか」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「7日間」的「7日」讀「なのか」。',
            relatedRules: ['日期の訓讀', '期間の表現']
        },
        sourceItem: { value: 7, kanji: '七日間', reading: 'なのかかん' }
    },
    {
        id: 'day_extra_97',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「前日」的讀法是？',
        stem_zh: '「前日」的讀法是？',
        options: [
            { text: 'ぜんじつ', isCorrect: true, reason: '正確！前日讀「ぜんじつ」。' },
            { text: 'まえにち', isCorrect: false, reason: '「前日」讀「ぜんじつ」。' },
            { text: 'ぜんにち', isCorrect: false, reason: '「日」在此讀「じつ」。' },
            { text: 'まえび', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「前日」讀「ぜんじつ」，意思是前一天。',
            relatedRules: ['日期相關詞彙', '前日＝ぜんじつ']
        },
        sourceItem: { value: 'previous day', kanji: '前日', reading: 'ぜんじつ' }
    },
    {
        id: 'day_extra_98',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '彼女は＿＿から入院しています。',
        stem_zh: '她從六日開始住院。',
        options: [
            { text: 'むいか', isCorrect: true, reason: '正確！6日讀「むいか」。' },
            { text: 'ろくにち', isCorrect: false, reason: '6日是特殊讀法「むいか」。' },
            { text: 'むっか', isCorrect: false, reason: '沒有促音，是「むいか」。' },
            { text: 'ろっか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「6日」讀「むいか」。',
            relatedRules: ['日期の訓讀', '6日＝むいか']
        },
        sourceItem: { value: 6, kanji: '六日', reading: 'むいか' }
    },
    {
        id: 'day_extra_99',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '預約是幾號？',
        stem_zh: '預約是幾號？',
        dialogue: {
            speakerA: '予約は何日ですか？',
            speakerB: '＿＿でお願いします。（八日）'
        },
        options: [
            { text: 'ようか', isCorrect: true, reason: '正確！8日讀「ようか」。' },
            { text: 'はちにち', isCorrect: false, reason: '8日是特殊讀法「ようか」。' },
            { text: 'はつか', isCorrect: false, reason: '「はつか」是20日。' },
            { text: 'やっか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「8日」讀「ようか」。',
            relatedRules: ['日期の訓讀', '8日＝ようか']
        },
        sourceItem: { value: 8, kanji: '八日', reading: 'ようか' }
    },
    {
        id: 'day_extra_100',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '總復習：「ついたち」「はつか」都是特殊讀法，有什麼共同特徵？',
        stem_zh: '總復習：「ついたち」「はつか」都是特殊讀法，有什麼共同特徵？',
        options: [
            { text: '都與月亮或時間的循環有關', isCorrect: true, reason: '正確！「ついたち」源自「月立ち」，「はつか」源自古語。' },
            { text: '沒有共同特徵', isCorrect: false, reason: '都與時間循環的古語有關。' },
            { text: '都是外來語', isCorrect: false, reason: '都是古日語。' },
            { text: '都是音讀', isCorrect: false, reason: '都是訓讀。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「ついたち」源自「月立ち」（新月），「はつか」源自古語「二十」（はた）。',
            trapExplanation: '了解語源有助於記憶這些特殊讀法。',
            relatedRules: ['日期の語源', '特殊讀法の由来']
        },
        sourceItem: { value: 'summary', kanji: '總復習', reading: '特殊讀法' }
    },
    // ===== 追加題目 101-106 =====
    {
        id: 'day_extra_101',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '入學式は四月＿＿に行われます。',
        stem_zh: '入學典禮在四月九日舉行。',
        options: [
            { text: 'ここのか', isCorrect: true, reason: '正確！9日讀「ここのか」。' },
            { text: 'くにち', isCorrect: false, reason: '9日是特殊讀法「ここのか」。' },
            { text: 'きゅうにち', isCorrect: false, reason: '9日是特殊讀法「ここのか」。' },
            { text: 'ここのひ', isCorrect: false, reason: '日期用「か」不是「ひ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「9日」讀「ここのか」，是訓讀。',
            relatedRules: ['日期の訓讀', '9日＝ここのか']
        },
        sourceItem: { value: 9, kanji: '九日', reading: 'ここのか' }
    },
    {
        id: 'day_extra_102',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '退房日是幾號？',
        stem_zh: '退房日是幾號？',
        dialogue: {
            speakerA: 'チェックアウトは何日ですか？',
            speakerB: '＿＿の午前11時です。（四日）'
        },
        options: [
            { text: 'よっか', isCorrect: true, reason: '正確！4日讀「よっか」。' },
            { text: 'しにち', isCorrect: false, reason: '4日是特殊讀法「よっか」。' },
            { text: 'よんにち', isCorrect: false, reason: '4日是特殊讀法「よっか」。' },
            { text: 'よんか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「4日」讀「よっか」，是訓讀。',
            relatedRules: ['日期の訓讀', '4日＝よっか']
        },
        sourceItem: { value: 4, kanji: '四日', reading: 'よっか' }
    },
    {
        id: 'day_extra_103',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: false,
        stem: '「当日」的讀法是？',
        stem_zh: '「當日」的讀法是？',
        options: [
            { text: 'とうじつ', isCorrect: true, reason: '正確！當日讀「とうじつ」。' },
            { text: 'とうにち', isCorrect: false, reason: '「當日」讀「とうじつ」。' },
            { text: 'あたりひ', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'とうび', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「當日」讀「とうじつ」，意思是當天。',
            relatedRules: ['日期相關詞彙', '當日＝とうじつ']
        },
        sourceItem: { value: 'that day', kanji: '当日', reading: 'とうじつ' }
    },
    {
        id: 'day_extra_104',
        category: 'timeDate',
        subcategory: 'days',
        type: 'sentence',
        isTrap: false,
        stem: '彼の出張は＿＿から一週間です。',
        stem_zh: '他的出差從二日開始一週。',
        options: [
            { text: 'ふつか', isCorrect: true, reason: '正確！2日讀「ふつか」。' },
            { text: 'ににち', isCorrect: false, reason: '2日是特殊讀法「ふつか」。' },
            { text: 'にか', isCorrect: false, reason: '這不是正確讀法。' },
            { text: 'ふたひ', isCorrect: false, reason: '日期用「か」不是「ひ」。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「2日」讀「ふつか」，是訓讀。',
            relatedRules: ['日期の訓讀', '2日＝ふつか']
        },
        sourceItem: { value: 2, kanji: '二日', reading: 'ふつか' }
    },
    {
        id: 'day_extra_105',
        category: 'timeDate',
        subcategory: 'days',
        type: 'dialogue',
        isTrap: false,
        stem: '電影上映到幾號？',
        stem_zh: '電影上映到幾號？',
        dialogue: {
            speakerA: '映画はいつまで上映していますか？',
            speakerB: '今月＿＿までです。（十四日）'
        },
        options: [
            { text: 'じゅうよっか', isCorrect: true, reason: '正確！14日讀「じゅうよっか」。' },
            { text: 'じゅうよんにち', isCorrect: false, reason: '14日的4讀「よっ」。' },
            { text: 'じゅうしにち', isCorrect: false, reason: '14日的4讀「よっ」不是「し」。' },
            { text: 'とおよっか', isCorrect: false, reason: '這不是正確讀法。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '「14日」讀「じゅうよっか」。',
            relatedRules: ['日期の特殊讀法', '14日']
        },
        sourceItem: { value: 14, kanji: '十四日', reading: 'じゅうよっか' }
    },
    {
        id: 'day_extra_106',
        category: 'timeDate',
        subcategory: 'days',
        type: 'pronunciation',
        isTrap: true,
        stem: '總復習：日語日期的讀法有幾種主要模式？',
        stem_zh: '總復習：日語日期的讀法有幾種主要模式？',
        options: [
            { text: '三種：1-10日訓讀、11日以後音讀、例外（14/20/24日）', isCorrect: true, reason: '正確！這是日期讀法的三種主要模式。' },
            { text: '只有一種：全部音讀', isCorrect: false, reason: '1-10日用訓讀，還有例外。' },
            { text: '只有一種：全部訓讀', isCorrect: false, reason: '11日以後大多用音讀。' },
            { text: '沒有規則', isCorrect: false, reason: '有明確的規則和例外。' }
        ],
        correctIndex: 0,
        explanation: {
            correctRule: '日語日期讀法有三種模式：1-10日訓讀、11日以後音讀、例外（14/20/24日）。',
            trapExplanation: '掌握這三種模式是學習日期讀法的關鍵。',
            relatedRules: ['日期の讀法總整理', '三種模式']
        },
        sourceItem: { value: 'summary', kanji: '總復習', reading: '三種模式' }
    }
];
