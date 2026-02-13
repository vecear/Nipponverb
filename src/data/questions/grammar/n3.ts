import { UnifiedQuestion } from '../types'

export const grammarN3: UnifiedQuestion[] = [
    // ━━━ について (about) ━━━
    {
        id: 'g_n3_001', category: 'grammar', level: 'N3', tags: ['compound-particle', 'about'],
        stem: '日本{にほん}の文化{ぶんか}___レポートを書{か}いた。',
        stemZh: '寫了一篇關於日本文化的報告。',
        options: [
            { text: 'について', reason: '正確！「について」表示「關於」，後接動作。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，語意不合。' },
            { text: 'に関{かん}して', reason: '「に関して」也表示「關於」，但語氣更正式，此處用「について」更自然。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對...」，不用於「關於某事寫報告」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「について」表示主題或對象',
            analysis: '「について」用於表示動作或思考的主題對象，相當於中文的「關於」。常用於「書く」「話す」「調べる」等動詞前。',
            comparisons: ['について：關於（一般用語）', 'に関して：關於（正式書面語）'],
            commonMistakes: ['○ 日本の文化について書いた / × 日本の文化にとって書いた → 「にとって」不用於表示主題'],
        },
    },
    {
        id: 'g_n3_002', category: 'grammar', level: 'N3', tags: ['compound-particle', 'about'],
        stem: '環境{かんきょう}問題{もんだい}___、みんなで話{はな}し合{あ}いましょう。',
        stemZh: '大家一起來討論環境問題吧。',
        options: [
            { text: 'について', reason: '正確！「について」表示討論的主題。' },
            { text: 'によって', reason: '「によって」表示手段或原因，不用於討論主題。' },
            { text: 'において', reason: '「において」表示場所或時間，不合語意。' },
            { text: 'にかけて', reason: '「にかけて」表示「延伸至」，不用於討論主題。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「について」搭配「話し合う」表示討論的主題',
            analysis: '「について」後接「話す」「議論する」「話し合う」等表達時，標示討論的對象。',
            comparisons: ['について話し合う：討論關於...', 'によって異なる：因...而不同'],
            commonMistakes: ['○ 環境問題について話し合う / × 環境問題によって話し合う → 「によって」不表示討論主題'],
        },
    },
    // ━━━ にとって (for/regarding) ━━━
    {
        id: 'g_n3_003', category: 'grammar', level: 'N3', tags: ['compound-particle', 'perspective'],
        stem: '学生{がくせい}___、この試験{しけん}はとても大切{たいせつ}だ。',
        stemZh: '對學生而言，這場考試非常重要。',
        options: [
            { text: 'にとって', reason: '正確！「にとって」表示「對...而言」，評價的立場。' },
            { text: 'について', reason: '「について」表示「關於」，不用於表示立場。' },
            { text: 'として', reason: '「として」表示「作為」，語意不合。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對...」，指向對象，非評價立場。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にとって」表示評價或判斷的立場',
            analysis: '「にとって」用於表示對某人來說某事的價值或意義，後面通常接形容詞評價。',
            comparisons: ['にとって：對...而言（主觀評價的立場）', 'に対して：對... （動作的對象）'],
            commonMistakes: ['○ 学生にとって大切だ / × 学生について大切だ → 「について」不表示立場'],
        },
    },
    {
        id: 'g_n3_004', category: 'grammar', level: 'N3', tags: ['compound-particle', 'perspective'],
        stem: '私{わたし}___、家族{かぞく}は何{なに}よりも大事{だいじ}です。',
        stemZh: '對我而言，家人比什麼都重要。',
        options: [
            { text: 'にとって', reason: '正確！「にとって」表示主觀評價的立場。' },
            { text: 'にかわって', reason: '「にかわって」表示「代替」，語意不合。' },
            { text: 'にしては', reason: '「にしては」表示「就...而言（意外）」，語意不同。' },
            { text: 'によって', reason: '「によって」表示手段或根據，不合此句。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にとって」後接價值判斷',
            analysis: '「Aにとって、BはCだ」結構表示「從A的立場來看，B具有C的價值」。',
            comparisons: ['私にとって大事だ：對我來說很重要', '私にしては上手だ：以我來說算厲害了（意外感）'],
            commonMistakes: ['○ 私にとって大事 / × 私にしては大事 → 「にしては」帶有出乎意料的語感'],
        },
    },
    // ━━━ に対して (toward/against) ━━━
    {
        id: 'g_n3_005', category: 'grammar', level: 'N3', tags: ['compound-particle', 'toward'],
        stem: '先生{せんせい}は生徒{せいと}___厳{きび}しい態度{たいど}をとった。',
        stemZh: '老師對學生採取了嚴格的態度。',
        options: [
            { text: 'に対{たい}して', reason: '正確！「に対して」表示態度或行為的對象。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，非態度的對象。' },
            { text: 'について', reason: '「について」表示「關於」，不適合此語境。' },
            { text: 'として', reason: '「として」表示「作為」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に対して」表示態度或行為的對象',
            analysis: '「に対して」可以表示動作或態度的對象方向，相當於「對...」。常用於描述對某人的態度。',
            comparisons: ['に対して：對...（態度/行為的方向）', 'にとって：對...而言（評價的立場）'],
            commonMistakes: ['○ 生徒に対して厳しい / × 生徒にとって厳しい → 「にとって」指立場，不指態度對象'],
        },
    },
    {
        id: 'g_n3_006', category: 'grammar', level: 'N3', tags: ['compound-particle', 'contrast'],
        stem: '兄{あに}はスポーツが好{す}きなの___、弟{おとうと}は読書{どくしょ}が好{す}きだ。',
        stemZh: '哥哥喜歡運動，相對地弟弟喜歡讀書。',
        options: [
            { text: 'に対{たい}して', reason: '正確！「に対して」也可用於對比兩者的不同。' },
            { text: 'について', reason: '「について」表示「關於」，不用於對比。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，不用於對比句。' },
            { text: 'にかけて', reason: '「にかけて」表示「延伸至」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に対して」的對比用法',
            analysis: '「に対して」除了表示態度對象外，還可用於對比兩個不同的事物或情況。相當於「相對地」。',
            comparisons: ['A に対して B：A相對地B（對比）', 'A に比べて B：A相比B（比較程度）'],
            commonMistakes: ['○ 兄はスポーツが好きなのに対して / × 兄はスポーツが好きなのについて → 「について」無對比功能'],
        },
    },
    // ━━━ によって (by means of / depending on) ━━━
    {
        id: 'g_n3_007', category: 'grammar', level: 'N3', tags: ['compound-particle', 'means'],
        stem: 'この問題{もんだい}は話{はな}し合{あ}い___解決{かいけつ}できる。',
        stemZh: '這個問題可以通過對話來解決。',
        options: [
            { text: 'によって', reason: '正確！「によって」表示手段方法。' },
            { text: 'について', reason: '「について」表示「關於」，不表示手段。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，不表示方法。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對...」，不表示手段方法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「によって」表示方法手段',
            analysis: '「によって」可以表示實現某事的方法或手段，相當於「通過...」「靠...」。',
            comparisons: ['によって（手段）：通過...', 'によって（原因）：由於...', 'によって（依據）：根據...'],
            commonMistakes: ['○ 話し合いによって解決できる / × 話し合いについて解決できる → 「について」不表示手段'],
        },
    },
    {
        id: 'g_n3_008', category: 'grammar', level: 'N3', tags: ['compound-particle', 'depending'],
        stem: '国{くに}___、食{た}べ物{もの}のマナーが違{ちが}う。',
        stemZh: '因國家不同，飲食禮儀也不同。',
        options: [
            { text: 'によって', reason: '正確！「によって」表示「因...而不同」（依據）。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，語意不完全吻合。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對...」，不適合此語境。' },
            { text: 'において', reason: '「において」表示「在...」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「によって」表示「因...而異」',
            analysis: '「によって異なる/違う」是固定搭配，表示根據不同條件會有不同結果。',
            comparisons: ['国によって違う：因國家而不同', '人によって異なる：因人而異'],
            commonMistakes: ['○ 国によって違う / × 国において違う → 「において」是場所標記，不表示「因...而異」'],
        },
    },
    // ━━━ において / における (in/at - formal) ━━━
    {
        id: 'g_n3_009', category: 'grammar', level: 'N3', tags: ['compound-particle', 'formal-location'],
        stem: '今回{こんかい}の会議{かいぎ}は東京{とうきょう}___行{おこな}われる。',
        stemZh: '這次的會議將在東京舉行。',
        options: [
            { text: 'において', reason: '正確！「において」表示正式場合中的地點。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，不表示地點。' },
            { text: 'について', reason: '「について」表示「關於」，不表示場所。' },
            { text: 'によって', reason: '「によって」表示手段或原因，不表示地點。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「において」表示正式場合的地點',
            analysis: '「において」是「で」的正式書面表達，用於表示事件發生的場所。常用於新聞、公文等正式語境。',
            comparisons: ['において：在...（正式）', 'で：在...（一般）'],
            commonMistakes: ['○ 東京において行われる / × 東京にとって行われる → 「にとって」不表示場所'],
        },
    },
    {
        id: 'g_n3_010', category: 'grammar', level: 'N3', tags: ['compound-particle', 'formal-location'],
        stem: '現代{げんだい}社会{しゃかい}___、情報{じょうほう}技術{ぎじゅつ}は重要{じゅうよう}な役割{やくわり}を果{は}たしている。',
        stemZh: '在現代社會中，資訊技術扮演著重要角色。',
        options: [
            { text: 'における', reason: '錯誤位置，此處需要「において」做副詞修飾。' },
            { text: 'において', reason: '正確！「において」用於修飾後面的述語。' },
            { text: 'によって', reason: '「によって」表示手段，不適合此語境。' },
            { text: 'に関{かん}して', reason: '「に関して」表示「關於」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「において」與「における」的區別',
            analysis: '「において」用於修飾動詞（副詞用法），「における」用於修飾名詞（連體修飾用法）。此處修飾動詞「果たしている」，用「において」。',
            comparisons: ['現代社会において果たす：在現代社會中發揮（修飾動詞）', '現代社会における役割：在現代社會中的角色（修飾名詞）'],
            commonMistakes: ['○ 社会において重要だ / ○ 社会における問題 → 修飾動詞用において、修飾名詞用における'],
        },
    },
    // ━━━ に関して (regarding) ━━━
    {
        id: 'g_n3_011', category: 'grammar', level: 'N3', tags: ['compound-particle', 'regarding'],
        stem: 'この件{けん}___、後日{ごじつ}改{あらた}めてご連絡{れんらく}いたします。',
        stemZh: '關於這件事，之後會再聯絡您。',
        options: [
            { text: 'に関{かん}して', reason: '正確！「に関して」是正式語境中表示「關於」的用法。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，語意不合。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對...」，語意不同。' },
            { text: 'にかけて', reason: '「にかけて」表示「延伸至」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に関して」在正式語境中表示「關於」',
            analysis: '「に関して」比「について」更正式，常用於商務信件、公文等場合。',
            comparisons: ['に関して：關於（正式）', 'について：關於（一般）'],
            commonMistakes: ['○ この件に関して / ○ この件について → 兩者都正確，「に関して」更正式'],
        },
    },
    // ━━━ にかけて (extending to) ━━━
    {
        id: 'g_n3_012', category: 'grammar', level: 'N3', tags: ['compound-particle', 'range'],
        stem: '今夜{こんや}から明日{あした}の朝{あさ}___、大雨{おおあめ}が降{ふ}るでしょう。',
        stemZh: '從今晚到明天早上，可能會下大雨。',
        options: [
            { text: 'にかけて', reason: '正確！「から〜にかけて」表示從某時/處延伸到另一時/處。' },
            { text: 'について', reason: '「について」表示「關於」，不表示時間範圍。' },
            { text: 'において', reason: '「において」表示「在...」（正式場所），不合此語境。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對...」，不表示時間範圍。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「から〜にかけて」表示時間或空間的範圍',
            analysis: '「から〜にかけて」用於表示從某個起點到某個終點的範圍，常用於天氣預報等場合。邊界較模糊。',
            comparisons: ['から〜にかけて：從...到...（範圍，邊界模糊）', 'から〜まで：從...到...（明確起訖點）'],
            commonMistakes: ['○ 今夜から明日にかけて / × 今夜から明日について → 「について」不表示範圍'],
        },
    },
    // ━━━ わけだ (no wonder) ━━━
    {
        id: 'g_n3_013', category: 'grammar', level: 'N3', tags: ['wake', 'conclusion'],
        stem: '毎日{まいにち}10時間{じかん}勉強{べんきょう}しているのか。成績{せいせき}がいい___。',
        stemZh: '每天讀十小時啊。難怪成績好。',
        options: [
            { text: 'わけだ', reason: '正確！「わけだ」表示聽到原因後恍然大悟「難怪」。' },
            { text: 'はずだ', reason: '「はずだ」表示「應該...」（推測），非恍然大悟。' },
            { text: 'ものだ', reason: '「ものだ」表示感嘆或回憶，語意不合。' },
            { text: 'ことだ', reason: '「ことだ」表示建議「應該...」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「わけだ」表示得知原因後的理解（難怪）',
            analysis: '「わけだ」用於聽到某個事實後，理解了事情的原因或結果，語意相當於「難怪」「也就是說」。',
            comparisons: ['わけだ：難怪（理解原因）', 'はずだ：應該（根據理由推測）'],
            commonMistakes: ['○ 成績がいいわけだ（難怪成績好）/ × 成績がいいはずだ（成績應該好）→ 語意不同'],
        },
    },
    // ━━━ わけがない (impossible) ━━━
    {
        id: 'g_n3_014', category: 'grammar', level: 'N3', tags: ['wake', 'impossibility'],
        stem: 'あの真面目{まじめ}な人{ひと}が嘘{うそ}をつく___。',
        stemZh: '那麼認真的人不可能說謊。',
        options: [
            { text: 'わけがない', reason: '正確！「わけがない」表示「不可能...」，強烈否定。' },
            { text: 'わけだ', reason: '「わけだ」表示「難怪」，語意相反。' },
            { text: 'わけではない', reason: '「わけではない」表示「並非...」，否定程度較弱。' },
            { text: 'わけにはいかない', reason: '「わけにはいかない」表示「不能...」（不允許），語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「わけがない」表示從道理上不可能',
            analysis: '「わけがない」用於強烈否定某事的可能性，語意比「はずがない」更強，表示「從道理上來說絕不可能」。',
            comparisons: ['わけがない：絕不可能（最強否定）', 'はずがない：應該不會（推測性否定）', 'わけではない：並非（部分否定）'],
            commonMistakes: ['○ 嘘をつくわけがない（不可能說謊）/ × 嘘をつくわけではない（並非說謊）→ 否定程度不同'],
        },
    },
    // ━━━ わけにはいかない (can't possibly) ━━━
    {
        id: 'g_n3_015', category: 'grammar', level: 'N3', tags: ['wake', 'obligation'],
        stem: '明日{あした}は大事{だいじ}な試合{しあい}だから、休{やす}む___。',
        stemZh: '明天有重要的比賽，所以不能休息。',
        options: [
            { text: 'わけにはいかない', reason: '正確！「わけにはいかない」表示因為某種理由而不能做某事。' },
            { text: 'わけがない', reason: '「わけがない」表示「不可能」，語意不同。' },
            { text: 'わけではない', reason: '「わけではない」表示「並非」，語意不同。' },
            { text: 'ことはない', reason: '「ことはない」表示「沒必要」，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「わけにはいかない」表示因義務或責任而不能',
            analysis: '「わけにはいかない」表示雖然想做（或不想做），但因為社會義務、道德等原因而不能。',
            comparisons: ['わけにはいかない：不能（義務/責任上不允許）', 'ことはない：沒必要（不需要做）'],
            commonMistakes: ['○ 休むわけにはいかない（不能休息）/ × 休むことはない（沒必要休息）→ 語意完全不同'],
        },
    },
    // ━━━ わけではない (not necessarily) ━━━
    {
        id: 'g_n3_016', category: 'grammar', level: 'N3', tags: ['wake', 'partial-negation'],
        stem: '日本語{にほんご}が上手{じょうず}だからといって、漢字{かんじ}が全部{ぜんぶ}読{よ}める___。',
        stemZh: '即使日語說得好，也並不代表漢字全部都會讀。',
        options: [
            { text: 'わけではない', reason: '正確！「わけではない」表示部分否定「並非...」。' },
            { text: 'わけがない', reason: '「わけがない」表示「不可能」，否定過強。' },
            { text: 'わけにはいかない', reason: '「わけにはいかない」表示「不能」，語意不合。' },
            { text: 'はずがない', reason: '「はずがない」表示「不應該」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「わけではない」表示部分否定',
            analysis: '「わけではない」用於糾正對方的誤解或過度推論，表示「並非全然如此」。',
            comparisons: ['わけではない：並非（部分否定）', 'わけがない：不可能（完全否定）'],
            commonMistakes: ['○ 読めるわけではない（並非全能讀）/ × 読めるわけがない（不可能讀）→ 否定範圍不同'],
        },
    },
    // ━━━ ことになる (it's been decided) ━━━
    {
        id: 'g_n3_017', category: 'grammar', level: 'N3', tags: ['koto', 'decision'],
        stem: '来月{らいげつ}から大阪{おおさか}に転勤{てんきん}する___。',
        stemZh: '從下個月開始要調到大阪了。',
        options: [
            { text: 'ことになった', reason: '正確！「ことになった」表示（外部）決定的結果。' },
            { text: 'ことにした', reason: '「ことにした」表示自己主動決定，但調職通常非自願。' },
            { text: 'ようになった', reason: '「ようになった」表示狀態的變化，不適合一次性決定。' },
            { text: 'ことだ', reason: '「ことだ」表示建議，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことになる」表示外部決定或規定的結果',
            analysis: '「ことになる」表示不是由自己決定，而是由公司、規則等外部因素決定的結果。調職多半是公司決定的。',
            comparisons: ['ことになった：（被）決定了（外部決定）', 'ことにした：決定了（主動決定）'],
            commonMistakes: ['○ 転勤することになった（被調職了）/ × 転勤することにした（自己決定調職）→ 調職通常非自願'],
        },
    },
    // ━━━ ことにする (decide to) ━━━
    {
        id: 'g_n3_018', category: 'grammar', level: 'N3', tags: ['koto', 'decision'],
        stem: '健康{けんこう}のために、毎朝{まいあさ}走{はし}る___。',
        stemZh: '為了健康，決定每天早上跑步。',
        options: [
            { text: 'ことにした', reason: '正確！「ことにした」表示自己主動決定。' },
            { text: 'ことになった', reason: '「ことになった」表示外部決定，此處是自主決定。' },
            { text: 'ようにした', reason: '「ようにした」表示努力使某種狀態實現，語感稍有不同。' },
            { text: 'ことはない', reason: '「ことはない」表示「沒必要」，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことにする」表示自主決定',
            analysis: '「ことにする」表示說話者自己做出某個決定，強調主動性和意志。',
            comparisons: ['ことにする：（自己）決定做...', 'ことになる：（外部）決定做...', 'ようにする：努力去做...'],
            commonMistakes: ['○ 走ることにした（決定跑步）/ × 走ることになった（被決定跑步）→ 自主決定用「ことにする」'],
        },
    },
    // ━━━ ことはない (no need to) ━━━
    {
        id: 'g_n3_019', category: 'grammar', level: 'N3', tags: ['koto', 'unnecessary'],
        stem: 'そんなに心配{しんぱい}する___。きっとうまくいくよ。',
        stemZh: '不用那麼擔心，一定會順利的。',
        options: [
            { text: 'ことはない', reason: '正確！「ことはない」表示沒有必要做某事。' },
            { text: 'わけがない', reason: '「わけがない」表示「不可能」，語意不同。' },
            { text: 'わけにはいかない', reason: '「わけにはいかない」表示「不能」，語意不同。' },
            { text: 'ことになる', reason: '「ことになる」表示「決定」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことはない」表示「沒有必要」',
            analysis: '「ことはない」用於安慰對方，表示不需要擔心或做某事。常用於口語中勸告對方放心。',
            comparisons: ['ことはない：沒必要...', 'わけにはいかない：不能...'],
            commonMistakes: ['○ 心配することはない（不用擔心）/ × 心配するわけにはいかない（不能擔心）→ 前者是安慰，後者是禁止'],
        },
    },
    // ━━━ ほど (to the extent) ━━━
    {
        id: 'g_n3_020', category: 'grammar', level: 'N3', tags: ['degree', 'extent'],
        stem: '死{し}ぬ___疲{つか}れた。',
        stemZh: '累到快死了。',
        options: [
            { text: 'ほど', reason: '正確！「ほど」表示程度之深，「死ぬほど」是誇張表達。' },
            { text: 'くらい', reason: '「くらい」也可以表示程度，但「死ぬほど」是固定說法。' },
            { text: 'まで', reason: '「まで」表示「到...為止」，不用於程度表達。' },
            { text: 'だけ', reason: '「だけ」表示「只有」，不表示程度。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ほど」表示達到某種程度',
            analysis: '「V＋ほど」表示某個動作的程度極深，常用於誇張表達。「死ぬほど〜」是常見的慣用表達。',
            comparisons: ['死ぬほど疲れた：累得要死', '泣くほど嬉しい：開心得想哭'],
            commonMistakes: ['○ 死ぬほど疲れた / △ 死ぬくらい疲れた → 兩者都通，但「ほど」更常用於此類誇張'],
        },
    },
    // ━━━ さえ (even) ━━━
    {
        id: 'g_n3_021', category: 'grammar', level: 'N3', tags: ['particle', 'emphasis'],
        stem: '忙{いそが}しくて、昼{ひる}ご飯{はん}___食{た}べられなかった。',
        stemZh: '忙得連午飯都沒吃。',
        options: [
            { text: 'さえ', reason: '正確！「さえ」表示「連...都」，強調極端情況。' },
            { text: 'しか', reason: '「しか」表示「只有」，語法需搭配否定但語意不同。' },
            { text: 'だけ', reason: '「だけ」表示「只有」，不表示極端。' },
            { text: 'まで', reason: '「まで」表示「甚至」時，多用於肯定句。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「さえ」表示極端的舉例「連...都」',
            analysis: '「さえ」用於舉出極端的例子來強調程度，暗示「連最基本的都...，其他更不用說」。',
            comparisons: ['さえ：連...都（極端舉例）', 'も：也（一般添加）', 'まで：甚至（強調範圍）'],
            commonMistakes: ['○ 昼ご飯さえ食べられなかった / × 昼ご飯だけ食べられなかった → 「だけ」表示限定，不表示極端'],
        },
    },
    // ━━━ さえ〜ば (if only) ━━━
    {
        id: 'g_n3_022', category: 'grammar', level: 'N3', tags: ['particle', 'condition'],
        stem: 'お金{かね}___あれば、旅行{りょこう}に行{い}けるのに。',
        stemZh: '只要有錢就能去旅行了。',
        options: [
            { text: 'さえ', reason: '正確！「さえ〜ば」表示「只要...就」，唯一條件。' },
            { text: 'だけ', reason: '「だけ」不搭配「ば」形成條件表達。' },
            { text: 'でも', reason: '「でも」表示「即使」或「之類」，語意不合。' },
            { text: 'しか', reason: '「しか」搭配否定，不用於條件句。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「さえ〜ば」表示唯一條件',
            analysis: '「Aさえ〜ば」表示只要滿足A這一個條件，其他就都沒問題了。強調必要且充分的單一條件。',
            comparisons: ['さえ〜ば：只要...就', 'ば：如果...就（一般條件）'],
            commonMistakes: ['○ お金さえあれば / × お金だけあれば → 「さえ〜ば」強調唯一充分條件'],
        },
    },
    // ━━━ こそ (precisely) ━━━
    {
        id: 'g_n3_023', category: 'grammar', level: 'N3', tags: ['particle', 'emphasis'],
        stem: '今年{ことし}___、N3に合格{ごうかく}したい。',
        stemZh: '今年正是要通過N3的時候。',
        options: [
            { text: 'こそ', reason: '正確！「こそ」強調「正是」「才是」。' },
            { text: 'さえ', reason: '「さえ」表示「連...都」，語意不同。' },
            { text: 'でも', reason: '「でも」表示「即使」或「之類」，語感不合。' },
            { text: 'だけ', reason: '「だけ」表示「只有」，不表示強調。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「こそ」表示強調「正是...」',
            analysis: '「こそ」用於強調前面的名詞，表示「正是這個」「才是這個」，帶有說話者的強烈意志。',
            comparisons: ['今年こそ合格したい：今年一定要合格', '今年は合格したい：今年想合格（普通）'],
            commonMistakes: ['○ 今年こそ合格したい / × 今年さえ合格したい → 「さえ」不用於強調意志'],
        },
    },
    // ━━━ べきだ (should) ━━━
    {
        id: 'g_n3_024', category: 'grammar', level: 'N3', tags: ['obligation', 'advice'],
        stem: '約束{やくそく}は守{まも}る___だ。',
        stemZh: '應該遵守約定。',
        options: [
            { text: 'べき', reason: '正確！「べきだ」表示「應該」，道德或常識上的義務。' },
            { text: 'はず', reason: '「はずだ」表示「應該」（推測），不表示義務。' },
            { text: 'わけ', reason: '「わけだ」表示「難怪」，語意不同。' },
            { text: 'もの', reason: '「ものだ」表示感嘆或一般常識，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「べきだ」表示道義上的「應該」',
            analysis: '「べきだ」表示基於道德、常識或責任感的義務，語氣較強。注意：「する」可以變成「すべき」或「するべき」。',
            comparisons: ['べきだ：應該（義務/道德）', 'はずだ：應該（推測/邏輯）', 'ものだ：本來就應該（一般常識）'],
            commonMistakes: ['○ 約束は守るべきだ / × 約束は守るはずだ → 「はずだ」是推測，不是義務'],
        },
    },
    // ━━━ べきではない (should not) ━━━
    {
        id: 'g_n3_025', category: 'grammar', level: 'N3', tags: ['obligation', 'prohibition'],
        stem: '人{ひと}の悪口{わるぐち}を言{い}う___。',
        stemZh: '不應該說別人的壞話。',
        options: [
            { text: 'べきではない', reason: '正確！「べきではない」表示「不應該」。' },
            { text: 'わけがない', reason: '「わけがない」表示「不可能」，語意不同。' },
            { text: 'ことはない', reason: '「ことはない」表示「沒必要」，語氣較弱。' },
            { text: 'はずがない', reason: '「はずがない」表示「不應該會」（推測），不表示禁止。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「べきではない」是「べきだ」的否定，表示「不應該」',
            analysis: '「べきではない」表示基於道德或常識上不應該做某事，語氣帶有勸告或批評。',
            comparisons: ['べきではない：不應該（道義上禁止）', 'ことはない：沒必要（不需要但可以做）'],
            commonMistakes: ['○ 悪口を言うべきではない / × 悪口を言うことはない → 「ことはない」語氣太弱'],
        },
    },
    // ━━━ ように見える (looks like) ━━━
    {
        id: 'g_n3_026', category: 'grammar', level: 'N3', tags: ['appearance', 'seem'],
        stem: '彼{かれ}は元気{げんき}な___、実{じつ}は疲{つか}れている。',
        stemZh: '他看起來很有精神，其實很累。',
        options: [
            { text: 'ように見{み}えるが', reason: '正確！「ように見える」表示外觀看起來像。' },
            { text: 'そうに見{み}えるが', reason: '「そうに見える」語法不自然，應用「そうだが」。' },
            { text: 'らしく見{み}えるが', reason: '「らしく見える」語法不自然。' },
            { text: 'みたいに見{み}えるが', reason: '「みたいに見える」口語可用但較不正式。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ように見える」表示外觀上的樣子',
            analysis: '「ように見える」用於描述從外觀上看到的樣子，常與實際狀況形成對比。',
            comparisons: ['ように見える：看起來像...（外觀判斷）', 'ようだ：好像...（根據狀況推測）'],
            commonMistakes: ['○ 元気なように見える / × 元気そうに見える → 「そう」不直接接「に見える」'],
        },
    },
    // ━━━ とは限らない (not necessarily) ━━━
    {
        id: 'g_n3_027', category: 'grammar', level: 'N3', tags: ['negation', 'partial'],
        stem: '高{たか}い物{もの}がいい___。',
        stemZh: '貴的東西不一定就好。',
        options: [
            { text: 'とは限{かぎ}らない', reason: '正確！「とは限らない」表示「不一定」「未必」。' },
            { text: 'わけではない', reason: '「わけではない」表示「並非」，語感稍有不同。' },
            { text: 'わけがない', reason: '「わけがない」表示「不可能」，否定過強。' },
            { text: 'はずがない', reason: '「はずがない」表示「不應該」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とは限らない」表示「不一定」「未必」',
            analysis: '「とは限らない」用於否定一般性的看法或常識，表示「並非總是如此」。',
            comparisons: ['とは限らない：不一定（否定普遍性）', 'わけではない：並非（否定特定推論）'],
            commonMistakes: ['○ 高い物がいいとは限らない / × 高い物がいいわけがない → 「わけがない」否定過度'],
        },
    },
    // ━━━ に違いない (must be) ━━━
    {
        id: 'g_n3_028', category: 'grammar', level: 'N3', tags: ['certainty', 'deduction'],
        stem: 'あの人{ひと}は日本人{にほんじん}___。日本語{にほんご}がとても上手{じょうず}だ。',
        stemZh: '那個人一定是日本人。日語說得太好了。',
        options: [
            { text: 'に違{ちが}いない', reason: '正確！「に違いない」表示強烈的推斷「一定是」。' },
            { text: 'かもしれない', reason: '「かもしれない」表示「也許」，確信度太低。' },
            { text: 'はずだ', reason: '「はずだ」表示「應該是」，確信度稍低。' },
            { text: 'わけだ', reason: '「わけだ」表示「難怪」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に違いない」表示確信度極高的推斷',
            analysis: '「に違いない」表示說話者根據證據做出強烈推斷，確信度接近100%。相當於「一定是...」。',
            comparisons: ['に違いない：一定是（確信度最高）', 'はずだ：應該是（確信度高）', 'かもしれない：也許（確信度低）'],
            commonMistakes: ['○ 日本人に違いない / × 日本人かもしれない → 確信度不同，「に違いない」更加肯定'],
        },
    },
    // ━━━ おかげで (thanks to) ━━━
    {
        id: 'g_n3_029', category: 'grammar', level: 'N3', tags: ['cause', 'positive'],
        stem: '先生{せんせい}の___、試験{しけん}に合格{ごうかく}できました。',
        stemZh: '多虧了老師，才能通過考試。',
        options: [
            { text: 'おかげで', reason: '正確！「おかげで」表示正面原因「多虧了」。' },
            { text: 'せいで', reason: '「せいで」表示負面原因「都怪」，此處結果是正面的。' },
            { text: 'ために', reason: '「ために」表示目的或原因，但不帶感謝語感。' },
            { text: 'わけで', reason: '「わけで」不是正式句型，語法不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「おかげで」表示正面原因「多虧了」',
            analysis: '「おかげで」用於表示因為某人或某事的幫助而產生好的結果，帶有感謝的語感。',
            comparisons: ['おかげで：多虧了（正面結果）', 'せいで：都怪（負面結果）'],
            commonMistakes: ['○ 先生のおかげで合格できた / × 先生のせいで合格できた → 「せいで」用於負面結果'],
        },
    },
    // ━━━ せいで (because of - negative) ━━━
    {
        id: 'g_n3_030', category: 'grammar', level: 'N3', tags: ['cause', 'negative'],
        stem: '台風{たいふう}の___、飛行機{ひこうき}が欠航{けっこう}になった。',
        stemZh: '都因為颱風，飛機停飛了。',
        options: [
            { text: 'せいで', reason: '正確！「せいで」表示負面原因「因為...（怪罪）」。' },
            { text: 'おかげで', reason: '「おかげで」表示正面原因，停飛是負面結果。' },
            { text: 'ために', reason: '「ために」表示目的或原因，但不帶怪罪語感。' },
            { text: 'わけで', reason: '語法不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「せいで」表示負面結果的原因',
            analysis: '「せいで」用於表示造成不好結果的原因，帶有責怪或歸咎的語感。',
            comparisons: ['せいで：都因為...（負面歸咎）', 'おかげで：多虧了（正面感謝）', 'ために：因為（中性）'],
            commonMistakes: ['○ 台風のせいで欠航になった / × 台風のおかげで欠航になった → 停飛是壞事，不用「おかげで」'],
        },
    },
    // ━━━ ために (because of / for the purpose of) ━━━
    {
        id: 'g_n3_031', category: 'grammar', level: 'N3', tags: ['cause', 'purpose'],
        stem: '留学{りゅうがく}する___、毎日{まいにち}英語{えいご}を勉強{べんきょう}している。',
        stemZh: '為了留學，每天都在學英語。',
        options: [
            { text: 'ために', reason: '正確！「ために」表示目的「為了...」。' },
            { text: 'おかげで', reason: '「おかげで」表示結果的原因，不表示目的。' },
            { text: 'せいで', reason: '「せいで」表示負面原因，此處表示目的。' },
            { text: 'ように', reason: '「ように」也可表示目的，但前面接意志動詞時用「ために」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ために」表示目的',
            analysis: '「ために」接在意志動詞後表示目的。注意：接非意志動詞時用「ように」。',
            comparisons: ['留学するために勉強する：為了留學而學習（目的）', '留学できるように勉強する：為了能留學而學習（願望目標）'],
            commonMistakes: ['○ 留学するために / × 留学できるために → 「できる」是可能形（非意志），改用「ように」'],
        },
    },
    // ━━━ 最中に (in the middle of) ━━━
    {
        id: 'g_n3_032', category: 'grammar', level: 'N3', tags: ['time', 'during'],
        stem: '食事{しょくじ}の___、電話{でんわ}が鳴{な}った。',
        stemZh: '正在吃飯的時候，電話響了。',
        options: [
            { text: '最中{さいちゅう}に', reason: '正確！「最中に」表示正在做某事的過程中發生了突發事件。' },
            { text: '途中{とちゅう}で', reason: '「途中で」表示「在途中」，多用於移動或過程的中間。' },
            { text: '間{あいだ}に', reason: '「間に」表示在某段期間內，不強調「正當其時」。' },
            { text: 'うちに', reason: '「うちに」表示趁著某段時間，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「最中に」表示正在進行中發生了意外',
            analysis: '「最中に」強調「正當...的時候」發生了意料之外的事情，有突發感。',
            comparisons: ['最中に：正在...之中（突發感）', '途中で：在...途中（過程的中間）', '間に：在...期間（一段時間內）'],
            commonMistakes: ['○ 食事の最中に / × 食事の途中で → 「途中で」用於「吃到一半」，「最中に」強調「正當」'],
        },
    },
    // ━━━ 途中で (on the way) ━━━
    {
        id: 'g_n3_033', category: 'grammar', level: 'N3', tags: ['time', 'during'],
        stem: '学校{がっこう}に行{い}く___、友達{ともだち}に会{あ}った。',
        stemZh: '去學校的途中遇到了朋友。',
        options: [
            { text: '途中{とちゅう}で', reason: '正確！「途中で」表示在前往某處的途中。' },
            { text: '最中{さいちゅう}に', reason: '「最中に」表示正在做某事之中，不用於移動途中。' },
            { text: '間{あいだ}に', reason: '「間に」表示一段期間內，不強調「途中」。' },
            { text: 'ついでに', reason: '「ついでに」表示「順便」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「途中で」表示移動或做事的中途',
            analysis: '「途中で」常用於移動中或做某事的中途發生了其他事情。',
            comparisons: ['途中で：在途中（移動/過程的中間）', '最中に：正在...之中（突發）'],
            commonMistakes: ['○ 学校に行く途中で / × 学校に行く最中に → 移動用「途中で」更自然'],
        },
    },
    // ━━━ っぽい (seems like) ━━━
    {
        id: 'g_n3_034', category: 'grammar', level: 'N3', tags: ['suffix', 'tendency'],
        stem: 'この部屋{へや}はほこり___。',
        stemZh: '這個房間灰塵好多。',
        options: [
            { text: 'っぽい', reason: '正確！「っぽい」接名詞後表示「充滿...的感覺」。' },
            { text: 'がち', reason: '「がち」表示「容易」傾向，接動詞ます形，不接名詞。' },
            { text: 'だらけ', reason: '「だらけ」也可表示「滿是」，但語法為「ほこりだらけ」，不接此空格。' },
            { text: '気味{ぎみ}', reason: '「気味」表示「有點」傾向，不適合物品描述。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「っぽい」表示「像...」「充滿...」',
            analysis: '「っぽい」接在名詞後表示外觀或性質上像某物，或者充滿某種特質。',
            comparisons: ['ほこりっぽい：灰塵多的（像有灰塵）', 'ほこりだらけ：滿是灰塵（更強烈）'],
            commonMistakes: ['○ ほこりっぽい / ○ ほこりだらけ → 兩者都可，「っぽい」語感較輕'],
        },
    },
    // ━━━ 気味 (slightly/tendency) ━━━
    {
        id: 'g_n3_035', category: 'grammar', level: 'N3', tags: ['suffix', 'tendency'],
        stem: '最近{さいきん}、風邪{かぜ}___で体{からだ}がだるい。',
        stemZh: '最近有點感冒，身體懶洋洋的。',
        options: [
            { text: '気味{ぎみ}', reason: '正確！「気味」表示「有點...」的傾向。' },
            { text: 'がち', reason: '「がち」表示「容易...」，但「風邪がち」不如「風邪気味」常用。' },
            { text: 'っぽい', reason: '「っぽい」表示「像...」，不用於身體狀況。' },
            { text: '向{む}き', reason: '「向き」表示「適合」或「朝向」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「気味」表示「有點...」的傾向或狀態',
            analysis: '「気味」接在名詞或動詞ます形後，表示有某種輕微的傾向或症狀。常用於負面狀況。',
            comparisons: ['風邪気味：有點感冒（輕微症狀）', '太り気味：有點發胖（輕微傾向）'],
            commonMistakes: ['○ 風邪気味 / × 風邪っぽい → 「っぽい」更口語，「気味」用於輕微症狀更正式'],
        },
    },
    // ━━━ がち (tend to) ━━━
    {
        id: 'g_n3_036', category: 'grammar', level: 'N3', tags: ['suffix', 'tendency'],
        stem: '雨{あめ}の日{ひ}は家{いえ}にこもり___だ。',
        stemZh: '下雨天容易待在家裡不出門。',
        options: [
            { text: 'がち', reason: '正確！「がち」接在動詞ます形後表示「容易...」的負面傾向。' },
            { text: '気味{ぎみ}', reason: '「気味」表示「有點」，但不接動詞ます形。' },
            { text: 'っぽい', reason: '「っぽい」表示「像」，不接動詞ます形。' },
            { text: '向{む}け', reason: '「向け」表示「面向」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「がち」表示容易出現的負面傾向',
            analysis: '「がち」接在動詞ます形或名詞後，表示不好的事情經常或容易發生。',
            comparisons: ['こもりがち：容易窩在家', '遅れがち：容易遲到', '病気がち：容易生病'],
            commonMistakes: ['○ こもりがちだ / × こもり気味だ → 「気味」不接此類動詞ます形'],
        },
    },
    // ━━━ 向き (suited for) ━━━
    {
        id: 'g_n3_037', category: 'grammar', level: 'N3', tags: ['suffix', 'suitability'],
        stem: 'この本{ほん}は初心者{しょしんしゃ}___です。',
        stemZh: '這本書適合初學者。',
        options: [
            { text: '向{む}き', reason: '正確！「向き」表示「適合...」「朝向...」。' },
            { text: '向{む}け', reason: '「向け」表示「面向...設計的」，語感更主動。' },
            { text: 'がち', reason: '「がち」表示「容易...」，語意不合。' },
            { text: 'っぽい', reason: '「っぽい」表示「像...」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「向き」表示「適合某人/某種用途」',
            analysis: '「向き」表示某物自然地適合某種人群或用途。',
            comparisons: ['初心者向き：適合初學者（自然適合）', '初心者向け：面向初學者（特意設計）'],
            commonMistakes: ['○ 初心者向き / ○ 初心者向け → 「向き」強調自然適合，「向け」強調特意設計'],
        },
    },
    // ━━━ 向け (aimed at) ━━━
    {
        id: 'g_n3_038', category: 'grammar', level: 'N3', tags: ['suffix', 'target'],
        stem: 'この雑誌{ざっし}は女性{じょせい}___に作{つく}られている。',
        stemZh: '這本雜誌是面向女性製作的。',
        options: [
            { text: '向{む}け', reason: '正確！「向け」表示專門為某人/某群體設計的。' },
            { text: '向{む}き', reason: '「向き」表示自然適合，此處強調「特意設計」用「向け」。' },
            { text: 'がち', reason: '「がち」表示負面傾向，語意不合。' },
            { text: 'だらけ', reason: '「だらけ」表示「滿是」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「向け」表示特意面向某對象設計',
            analysis: '「向け」表示產品或內容是專門為某個目標群體而製作的。常用於書籍、商品等描述。',
            comparisons: ['女性向け：面向女性（特意設計）', '女性向き：適合女性（自然適合）'],
            commonMistakes: ['○ 女性向けに作られている / × 女性向きに作られている → 有「作る」時用「向け」更自然'],
        },
    },
    // ━━━ だらけ (full of) ━━━
    {
        id: 'g_n3_039', category: 'grammar', level: 'N3', tags: ['suffix', 'full-of'],
        stem: '子供{こども}たちが遊{あそ}んだ後{あと}、部屋{へや}はおもちゃ___になった。',
        stemZh: '孩子們玩完之後，房間裡滿是玩具。',
        options: [
            { text: 'だらけ', reason: '正確！「だらけ」表示到處都是、滿是（負面語感）。' },
            { text: 'っぽい', reason: '「っぽい」表示「像...」，不表示數量多。' },
            { text: '気味{ぎみ}', reason: '「気味」表示「有點」，不表示到處都是。' },
            { text: 'がち', reason: '「がち」表示「容易」傾向，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「だらけ」表示到處充滿了不好的東西',
            analysis: '「だらけ」接在名詞後，表示到處充滿了（通常是不好的）東西。帶有負面或混亂的語感。',
            comparisons: ['おもちゃだらけ：滿是玩具（亂七八糟）', '間違いだらけ：錯誤百出', '泥だらけ：滿身泥巴'],
            commonMistakes: ['○ おもちゃだらけ / × おもちゃっぽい → 「っぽい」是「像」，不是「充滿」'],
        },
    },
    // ━━━ ばよかった (should have) ━━━
    {
        id: 'g_n3_040', category: 'grammar', level: 'N3', tags: ['regret', 'conditional'],
        stem: 'もっと早{はや}く起{お}きれ___。遅刻{ちこく}してしまった。',
        stemZh: '要是早點起來就好了。遲到了。',
        options: [
            { text: 'ばよかった', reason: '正確！「ばよかった」表示後悔，「要是...就好了」。' },
            { text: 'ばいい', reason: '「ばいい」表示建議「...就好了」，不帶後悔。' },
            { text: 'たらよかった', reason: '「たらよかった」也可表示後悔，但此處空格前是「ば形」。' },
            { text: 'ないと', reason: '「ないと」表示「必須」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ばよかった」表示對過去的後悔',
            analysis: '「ばよかった」用於表示說話者後悔沒有做某事，相當於「要是當初...就好了」。',
            comparisons: ['ばよかった：要是...就好了（後悔過去）', 'ばいい：...就好了（建議/未來）'],
            commonMistakes: ['○ 早く起きればよかった（要是早起就好了）/ × 早く起きればいい（早點起就好了）→ 前者後悔，後者建議'],
        },
    },
    // ━━━ ばかりで (only / nothing but - negative) ━━━
    {
        id: 'g_n3_041', category: 'grammar', level: 'N3', tags: ['bakari', 'negative'],
        stem: '彼{かれ}は文句{もんく}を言{い}う___、何{なに}もしない。',
        stemZh: '他光是抱怨，什麼也不做。',
        options: [
            { text: 'ばかりで', reason: '正確！「ばかりで」表示「光是...（負面）」，後接否定或不好的結果。' },
            { text: 'だけで', reason: '「だけで」表示「只有」，但不帶負面批評語感。' },
            { text: 'ばかりに', reason: '「ばかりに」表示「正因為...才」（導致壞結果），語意不同。' },
            { text: 'ばかりか', reason: '「ばかりか」表示「不僅...而且」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ばかりで」表示光做某事而不做其他（負面批評）',
            analysis: '「ばかりで」帶有批評語氣，表示某人只做一件事，其他應做的事都不做。',
            comparisons: ['ばかりで：光是...（批評）', 'だけで：只有...（中性）'],
            commonMistakes: ['○ 文句を言うばかりで何もしない / × 文句を言うだけで何もしない → 語意相近，但「ばかり」批評更強'],
        },
    },
    // ━━━ ばかりでなく (not only...but also) ━━━
    {
        id: 'g_n3_042', category: 'grammar', level: 'N3', tags: ['bakari', 'addition'],
        stem: '田中{たなか}さんは英語{えいご}___、フランス語{ご}も話{はな}せる。',
        stemZh: '田中先生不僅會英語，還會法語。',
        options: [
            { text: 'ばかりでなく', reason: '正確！「ばかりでなく」表示「不僅...而且...」。' },
            { text: 'ばかりで', reason: '「ばかりで」表示「光是」，語意不同。' },
            { text: 'だけでなく', reason: '「だけでなく」也正確，但此處考「ばかりでなく」。' },
            { text: 'ばかりに', reason: '「ばかりに」表示「正因為」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ばかりでなく」表示「不僅...而且」',
            analysis: '「ばかりでなく〜も」用於表示不僅限於前者，還包括後者，常用於積極的追加。',
            comparisons: ['ばかりでなく：不僅...而且（=だけでなく）', 'ばかりか：不僅...甚至（語氣更強）'],
            commonMistakes: ['○ 英語ばかりでなくフランス語も / ○ 英語だけでなくフランス語も → 兩者意思相同'],
        },
    },
    // ━━━ ば～ほど (the more...the more) ━━━
    {
        id: 'g_n3_043', category: 'grammar', level: 'N3', tags: ['conditional', 'degree'],
        stem: '日本語{にほんご}は勉強{べんきょう}すれ___するほど、面白{おもしろ}くなる。',
        stemZh: '日語越學越有趣。',
        options: [
            { text: 'ば', reason: '正確！「ば〜ほど」表示「越...越...」。' },
            { text: 'たら', reason: '「たら」不搭配「ほど」構成此句型。' },
            { text: 'と', reason: '「と」不搭配「ほど」構成此句型。' },
            { text: 'ても', reason: '「ても」表示「即使」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ば〜ほど」表示「越...越...」',
            analysis: '「Vば＋Vほど」構成「越做越...」的句型，前後動詞相同。形容詞也可用「〜ければ〜ほど」。',
            comparisons: ['勉強すればするほど面白い：越學越有趣', '安ければ安いほどいい：越便宜越好'],
            commonMistakes: ['○ すればするほど / × したらするほど → 「たら」不用於此句型'],
        },
    },
    // ━━━ どんなに～ても (no matter how) ━━━
    {
        id: 'g_n3_044', category: 'grammar', level: 'N3', tags: ['concession', 'extreme'],
        stem: '___努力{どりょく}しても、完璧{かんぺき}にはなれない。',
        stemZh: '無論怎麼努力，都無法變得完美。',
        options: [
            { text: 'どんなに', reason: '正確！「どんなに〜ても」表示「無論多麼...也」。' },
            { text: 'いくら', reason: '「いくら〜ても」也正確，但此處考「どんなに」。' },
            { text: 'たとえ', reason: '「たとえ〜ても」表示假設性的讓步，語感稍有不同。' },
            { text: 'せっかく', reason: '「せっかく」表示「好不容易」，不搭配「ても」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「どんなに〜ても」表示極端的讓步',
            analysis: '「どんなに〜ても」強調即使達到極端程度也不會改變結果，表示「無論多麼...也」。',
            comparisons: ['どんなに〜ても：無論多麼...也（程度極端）', 'いくら〜ても：無論怎麼...也（反覆努力）', 'たとえ〜ても：即使...也（假設讓步）'],
            commonMistakes: ['○ どんなに努力しても / ○ いくら努力しても → 兩者可互換，「どんなに」強調程度'],
        },
    },
    // ━━━ いくら～ても (no matter how much) ━━━
    {
        id: 'g_n3_045', category: 'grammar', level: 'N3', tags: ['concession', 'futility'],
        stem: '___説明{せつめい}しても、彼{かれ}は理解{りかい}してくれない。',
        stemZh: '無論怎麼解釋，他都不理解。',
        options: [
            { text: 'いくら', reason: '正確！「いくら〜ても」表示「無論怎麼...也」，強調反覆嘗試。' },
            { text: 'どんなに', reason: '「どんなに」也可以，但「いくら」更強調反覆努力的徒勞感。' },
            { text: 'なんて', reason: '「なんて」表示驚訝或輕視，不搭配「ても」構成讓步。' },
            { text: 'せめて', reason: '「せめて」表示「至少」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「いくら〜ても」強調反覆嘗試也無效',
            analysis: '「いくら〜ても」用於表示不管做多少次或多大努力都改變不了結果。',
            comparisons: ['いくら〜ても：怎麼...也不（強調反覆嘗試無效）', 'どんなに〜ても：無論多麼...（強調程度極端）'],
            commonMistakes: ['○ いくら説明しても / ○ どんなに説明しても → 意思相近，「いくら」偏重反覆性'],
        },
    },
    // ━━━ たとえ～ても (even if) ━━━
    {
        id: 'g_n3_046', category: 'grammar', level: 'N3', tags: ['concession', 'hypothetical'],
        stem: '___失敗{しっぱい}しても、もう一度{いちど}挑戦{ちょうせん}する。',
        stemZh: '即使失敗了，也要再挑戰一次。',
        options: [
            { text: 'たとえ', reason: '正確！「たとえ〜ても」表示假設性的讓步「即使...也」。' },
            { text: 'もし', reason: '「もし」表示「如果」，不搭配「ても」。' },
            { text: 'まさか', reason: '「まさか」表示「難道」，語意不合。' },
            { text: 'せっかく', reason: '「せっかく」表示「好不容易」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たとえ〜ても」表示假設性的讓步',
            analysis: '「たとえ〜ても」用於假設即使發生不好的情況，也不會改變自己的決定或態度。',
            comparisons: ['たとえ〜ても：即使...也（假設讓步）', 'どんなに〜ても：無論多麼...也（程度極端）'],
            commonMistakes: ['○ たとえ失敗しても / × もし失敗しても → 「もし」用於「たら」「ば」，不用於「ても」'],
        },
    },
    // ━━━ ふりをする (pretend) ━━━
    {
        id: 'g_n3_047', category: 'grammar', level: 'N3', tags: ['pretense', 'behavior'],
        stem: '彼{かれ}は知{し}っているのに、知{し}らない___をした。',
        stemZh: '他明明知道，卻裝作不知道。',
        options: [
            { text: 'ふり', reason: '正確！「ふりをする」表示「假裝...」。' },
            { text: 'そう', reason: '「そうをする」不成立。' },
            { text: 'よう', reason: '「ようをする」不成立。' },
            { text: 'つもり', reason: '「つもり」表示「打算」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ふりをする」表示故意假裝',
            analysis: '「Vない＋ふりをする」或「V＋ふりをする」表示故意裝出某種樣子。',
            comparisons: ['知らないふりをする：裝不知道', '寝たふりをする：裝睡'],
            commonMistakes: ['○ 知らないふりをした / × 知らないようにした → 「ようにする」表示「努力做到」，不是假裝'],
        },
    },
    // ━━━ ついでに (while at it / on the occasion) ━━━
    {
        id: 'g_n3_048', category: 'grammar', level: 'N3', tags: ['occasion', 'convenience'],
        stem: '買{か}い物{もの}の___、銀行{ぎんこう}にも寄{よ}った。',
        stemZh: '購物的同時，也順便去了銀行。',
        options: [
            { text: 'ついでに', reason: '正確！「ついでに」表示「順便」。' },
            { text: '途中{とちゅう}で', reason: '「途中で」表示「在途中」，不強調「順便」。' },
            { text: '最中{さいちゅう}に', reason: '「最中に」表示「正當...之中」，語意不同。' },
            { text: '代{か}わりに', reason: '「代わりに」表示「代替」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ついでに」表示「順便」',
            analysis: '「ついでに」表示利用做某事的機會，順便做另一件事。',
            comparisons: ['ついでに：順便（利用機會做另一件事）', '途中で：在途中（移動/過程的中間）'],
            commonMistakes: ['○ 買い物のついでに / × 買い物の途中で → 「途中で」不強調「順帶一提」的語感'],
        },
    },
    // ━━━ つい (unintentionally) ━━━
    {
        id: 'g_n3_049', category: 'grammar', level: 'N3', tags: ['unintentional', 'adverb'],
        stem: 'ダイエット中{ちゅう}なのに、___ケーキを食{た}べてしまった。',
        stemZh: '明明在減肥，卻不自覺地吃了蛋糕。',
        options: [
            { text: 'つい', reason: '正確！「つい」表示不自覺地、忍不住做了某事。' },
            { text: 'わざと', reason: '「わざと」表示「故意」，語意相反。' },
            { text: 'わざわざ', reason: '「わざわざ」表示「特地」，語意不同。' },
            { text: 'ふと', reason: '「ふと」表示「偶然想到」，不用於動作。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「つい」表示不自覺地做了某事',
            analysis: '「つい」表示雖然知道不應該，但忍不住做了。帶有後悔的語感。',
            comparisons: ['つい：不自覺地（忍不住）', 'わざと：故意地', 'わざわざ：特地'],
            commonMistakes: ['○ ついケーキを食べてしまった / × わざとケーキを食べてしまった → 減肥中不會「故意」吃'],
        },
    },
    // ━━━ ついに (finally) ━━━
    {
        id: 'g_n3_050', category: 'grammar', level: 'N3', tags: ['adverb', 'finally'],
        stem: '3年間{ねんかん}の努力{どりょく}の結果{けっか}、___夢{ゆめ}が叶{かな}った。',
        stemZh: '經過三年的努力，終於實現了夢想。',
        options: [
            { text: 'ついに', reason: '正確！「ついに」表示經過長時間後「終於」。' },
            { text: 'つい', reason: '「つい」表示「不自覺地」，語意完全不同。' },
            { text: 'やっと', reason: '「やっと」也表示「終於」，但帶有辛苦感，此處兩者可互換。' },
            { text: 'とうとう', reason: '「とうとう」也表示「終於」，但多用於負面結果。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ついに」表示長期等待後「終於」',
            analysis: '「ついに」用於表示經過長時間的等待或努力後，事情終於發生。多用於正面結果。',
            comparisons: ['ついに：終於（正面為主）', 'とうとう：終於（正負皆可，偏負面）', 'やっと：終於（辛苦感）'],
            commonMistakes: ['○ ついに夢が叶った / ○ やっと夢が叶った → 兩者都可，「ついに」更有戲劇性'],
        },
    },
    // ━━━ として (as / in the capacity of) ━━━
    {
        id: 'g_n3_051', category: 'grammar', level: 'N3', tags: ['compound-particle', 'role'],
        stem: '彼{かれ}は医者{いしゃ}___、多{おお}くの人{ひと}を助{たす}けてきた。',
        stemZh: '他作為醫生，幫助了很多人。',
        options: [
            { text: 'として', reason: '正確！「として」表示「作為...的身份」。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，不表示身份。' },
            { text: 'について', reason: '「について」表示「關於」，不表示身份。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對...」，不表示身份。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「として」表示以某種身份或資格',
            analysis: '「として」用於表示某人以某種角色、身份或資格行事。',
            comparisons: ['医者として：作為醫生', '友達として：作為朋友', '代表として：作為代表'],
            commonMistakes: ['○ 医者として助けた / × 医者にとって助けた → 「にとって」不表示身份'],
        },
    },
    // ━━━ ようとする (try to / about to) ━━━
    {
        id: 'g_n3_052', category: 'grammar', level: 'N3', tags: ['volitional', 'attempt'],
        stem: '部屋{へや}を出{で}___とした時{とき}、電話{でんわ}が鳴{な}った。',
        stemZh: '正要出房間的時候，電話響了。',
        options: [
            { text: 'よう', reason: '正確！「Vよう＋とする」表示「正要做...」。' },
            { text: 'たい', reason: '「たいとする」語法不成立。' },
            { text: 'る', reason: '「出るとした」語法不成立。' },
            { text: 'て', reason: '「出てとした」語法不成立。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようとする」表示正要做某事',
            analysis: '「Vようとする」有兩個含義：①正要做（動作的起始瞬間）②試圖做。此處表示正要出門的瞬間。',
            comparisons: ['出ようとした時：正要出去的時候（動作起始）', '出ようとしたが：試圖出去但是（嘗試）'],
            commonMistakes: ['○ 出ようとした / × 出たいとした → 「たい」不接「とする」'],
        },
    },
    // ━━━ ようとしない (refuse to / won't try) ━━━
    {
        id: 'g_n3_053', category: 'grammar', level: 'N3', tags: ['volitional', 'refusal'],
        stem: '子供{こども}は薬{くすり}を飲{の}___としない。',
        stemZh: '孩子不肯吃藥。',
        options: [
            { text: 'もう', reason: '「もうとしない」語法不成立。' },
            { text: 'もう', reason: '語法不成立。' },
            { text: 'よう', reason: '正確！「Vよう＋としない」表示「不願意做」「不肯做」。' },
            { text: 'ない', reason: '「飲まないとしない」語法不成立。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ようとしない」表示不願意、不肯做',
            analysis: '「ようとしない」是「ようとする」的否定，表示某人有意識地不去做某事，帶有固執或抗拒的語感。',
            comparisons: ['飲もうとしない：不肯喝（主動抗拒）', '飲まない：不喝（單純否定）'],
            commonMistakes: ['○ 飲もうとしない（不肯喝）/ × 飲まない（不喝）→ 前者強調主動抗拒'],
        },
    },
    // ━━━ ずに (without doing) ━━━
    {
        id: 'g_n3_054', category: 'grammar', level: 'N3', tags: ['negation', 'without'],
        stem: '朝{あさ}ご飯{はん}を食{た}べ___、学校{がっこう}に行{い}った。',
        stemZh: '沒吃早餐就去了學校。',
        options: [
            { text: 'ずに', reason: '正確！「ずに」表示「不做...而做...」。' },
            { text: 'ないで', reason: '「ないで」也正確，但此處考「ずに」的書面用法。' },
            { text: 'なくて', reason: '「なくて」表示原因「因為沒做」，不表示附帶狀態。' },
            { text: 'ないと', reason: '「ないと」表示「必須」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ずに」表示不做A而做B',
            analysis: '「ずに」是「ないで」的書面表達，表示在不做某事的狀態下做另一件事。注意：「する」的否定是「せずに」。',
            comparisons: ['食べずに行った：沒吃就去了（書面）', '食べないで行った：沒吃就去了（口語）'],
            commonMistakes: ['○ 食べずに / ○ 食べないで → 意思相同，「ずに」更正式'],
        },
    },
    // ━━━ ずにはいられない (can't help but) ━━━
    {
        id: 'g_n3_055', category: 'grammar', level: 'N3', tags: ['negation', 'uncontrollable'],
        stem: 'あの映画{えいが}は感動的{かんどうてき}で、泣{な}か___。',
        stemZh: '那部電影太感人了，忍不住哭了。',
        options: [
            { text: 'ずにはいられなかった', reason: '正確！「ずにはいられない」表示「忍不住做」。' },
            { text: 'ないではいられなかった', reason: '「ないではいられない」也正確但較口語，此處考「ずに」形。' },
            { text: 'なくてはいけなかった', reason: '「なくてはいけない」表示「必須」，語意不同。' },
            { text: 'ずにはすまなかった', reason: '「ずにはすまない」表示「不得不」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ずにはいられない」表示無法克制地做某事',
            analysis: '「ずにはいられない」表示受到強烈情感驅使，忍不住做了某事。相當於「不得不...」「忍不住...」。',
            comparisons: ['ずにはいられない：忍不住（書面）', 'ないではいられない：忍不住（口語）'],
            commonMistakes: ['○ 泣かずにはいられない / × 泣かなくてはいけない → 前者是「忍不住」，後者是「必須」'],
        },
    },
    // ━━━ うちに (while / before) ━━━
    {
        id: 'g_n3_056', category: 'grammar', level: 'N3', tags: ['time', 'while'],
        stem: '暖{あたた}かい___、食{た}べてください。',
        stemZh: '趁熱吃吧。',
        options: [
            { text: 'うちに', reason: '正確！「うちに」表示「趁著...的時候」。' },
            { text: '間{あいだ}に', reason: '「間に」表示「在...期間」，但不強調「趁著」。' },
            { text: '中{ちゅう}に', reason: '「中に」表示「在...之中」，語法不自然。' },
            { text: 'ときに', reason: '「ときに」表示「...的時候」，不帶「趁著」的語感。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「うちに」表示「趁著某狀態還在的時候」',
            analysis: '「うちに」用於表示在某個狀態或條件還存在的期間內做某事，帶有「趁現在」的急迫感。',
            comparisons: ['暖かいうちに：趁還熱的時候', '若いうちに：趁年輕的時候'],
            commonMistakes: ['○ 暖かいうちに食べて / × 暖かい間に食べて → 「間に」不帶「趁著」的急迫感'],
        },
    },
    // ━━━ ことから (from the fact that) ━━━
    {
        id: 'g_n3_057', category: 'grammar', level: 'N3', tags: ['reason', 'naming'],
        stem: '形{かたち}が星{ほし}に似{に}ている___、「星形{ほしがた}」と呼{よ}ばれている。',
        stemZh: '因為形狀像星星，所以被稱為「星形」。',
        options: [
            { text: 'ことから', reason: '正確！「ことから」表示「因為...的事實」，常用於命名由來。' },
            { text: 'ために', reason: '「ために」表示原因或目的，但不用於命名由來。' },
            { text: 'ので', reason: '「ので」表示原因，但不帶「從事實出發」的語感。' },
            { text: 'から', reason: '「から」表示原因，但語氣較弱且不正式。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことから」表示根據某事實得出結論',
            analysis: '「ことから」用於說明命名的由來或根據某個事實推導出的結論。',
            comparisons: ['ことから：因為...的事實（命名/推論由來）', 'ので：因為（一般原因）'],
            commonMistakes: ['○ 似ていることから呼ばれる / × 似ているために呼ばれる → 命名由來慣用「ことから」'],
        },
    },
    // ━━━ ことになっている (it's a rule/arrangement) ━━━
    {
        id: 'g_n3_058', category: 'grammar', level: 'N3', tags: ['koto', 'rule'],
        stem: 'この会社{かいしゃ}では、毎週{まいしゅう}月曜日{げつようび}に会議{かいぎ}をする___。',
        stemZh: '在這家公司，每週一都要開會（按規定）。',
        options: [
            { text: 'ことになっている', reason: '正確！「ことになっている」表示按規定或慣例已決定的事情。' },
            { text: 'ことにしている', reason: '「ことにしている」表示自己養成的習慣，非公司規定。' },
            { text: 'ことになった', reason: '「ことになった」表示剛被決定，不表示已有的規定。' },
            { text: 'ことにした', reason: '「ことにした」表示自己決定的，非公司規定。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことになっている」表示已有的規定或安排',
            analysis: '「ことになっている」表示某件事是按規定、慣例或預先安排好的狀態。',
            comparisons: ['ことになっている：按規定...（已存在的規則）', 'ことにしている：自己決定...（個人習慣）'],
            commonMistakes: ['○ 会議をすることになっている / × 会議をすることにしている → 公司規定用前者，個人習慣用後者'],
        },
    },
    // ━━━ ことは～が (it's true that...but) ━━━
    {
        id: 'g_n3_059', category: 'grammar', level: 'N3', tags: ['concession', 'but'],
        stem: '日本語{にほんご}は話{はな}せる___話{はな}せるが、まだ不十分{ふじゅうぶん}だ。',
        stemZh: '日語嘛是會說，但還不夠好。',
        options: [
            { text: 'ことは', reason: '正確！「ことは〜が」表示「...倒是...，但是...」承認但有保留。' },
            { text: 'わけは', reason: '「わけは」語法不成立。' },
            { text: 'ものは', reason: '「ものは」語法不自然。' },
            { text: 'のは', reason: '「のは」不構成此讓步句型。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことは V が」表示承認但有保留',
            analysis: '「V ことは V が」重複同一動詞，表示雖然承認某事但有不足之處。',
            comparisons: ['話せることは話せるが：會說是會說，但...', '食べることは食べたが：吃是吃了，但...'],
            commonMistakes: ['○ 話せることは話せるが / × 話せるのは話せるが → 此句型固定用「こと」'],
        },
    },
    // ━━━ くせに (although / despite - critical) ━━━
    {
        id: 'g_n3_060', category: 'grammar', level: 'N3', tags: ['concession', 'criticism'],
        stem: '何{なに}も知{し}らない___、偉{えら}そうにしている。',
        stemZh: '明明什麼都不懂，卻裝得很了不起。',
        options: [
            { text: 'くせに', reason: '正確！「くせに」表示批評性的逆接「明明...卻...」。' },
            { text: 'のに', reason: '「のに」也表示逆接，但不帶批評語氣。' },
            { text: 'ながら', reason: '「ながら」可表示逆接，但較正式且語氣不同。' },
            { text: 'けど', reason: '「けど」表示「但是」，語氣最弱。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「くせに」帶有責備和不滿的語氣',
            analysis: '「くせに」用於批評對方的行為，表示「明明是那樣的人（或情況），卻做了不合理的事」。',
            comparisons: ['くせに：明明...卻（帶責備）', 'のに：明明...卻（帶遺憾）', 'けど：但是（中性）'],
            commonMistakes: ['○ 知らないくせに / ○ 知らないのに → 前者帶批評，後者帶遺憾'],
        },
    },
    // ━━━ ながらも (although) ━━━
    {
        id: 'g_n3_061', category: 'grammar', level: 'N3', tags: ['concession', 'formal'],
        stem: '小{ちい}さい___、この店{みせ}はとても人気{にんき}がある。',
        stemZh: '雖然小，但這家店非常受歡迎。',
        options: [
            { text: 'ながらも', reason: '正確！「ながらも」表示「雖然...卻...」（書面逆接）。' },
            { text: 'くせに', reason: '「くせに」帶有批評語氣，此處無批評意。' },
            { text: 'のに', reason: '「のに」也表示逆接，但「小さいのに」語法也可。' },
            { text: 'けれども', reason: '「小さいけれども」也可，但「ながらも」更文學。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ながらも」表示正式的逆接讓步',
            analysis: '「ながらも」用於書面或正式語境，表示雖然前項成立但後項也成立的讓步關係。',
            comparisons: ['ながらも：雖然...（正式書面）', 'のに：雖然...（口語）', 'けれども：但是（一般）'],
            commonMistakes: ['○ 小さいながらも / ○ 小さいのに → 前者更正式文學化'],
        },
    },
    // ━━━ にしては (for / considering) ━━━
    {
        id: 'g_n3_062', category: 'grammar', level: 'N3', tags: ['evaluation', 'unexpected'],
        stem: '初心者{しょしんしゃ}___、上手{じょうず}に描{か}けている。',
        stemZh: '就初學者而言，畫得很好。',
        options: [
            { text: 'にしては', reason: '正確！「にしては」表示「就...而言，出乎意料地」。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，不帶意外感。' },
            { text: 'として', reason: '「として」表示「作為」，不帶出乎意料的評價。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對...」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にしては」表示出乎意料的評價',
            analysis: '「にしては」用於表達某個結果跟基於某條件的預期不同，帶有意外感。',
            comparisons: ['にしては：就...而言（意外）', 'にとって：對...而言（立場）', 'としては：作為...（符合預期）'],
            commonMistakes: ['○ 初心者にしては上手 / × 初心者にとって上手 → 「にとって」不表示意外性'],
        },
    },
    // ━━━ にしても (even if / even though) ━━━
    {
        id: 'g_n3_063', category: 'grammar', level: 'N3', tags: ['concession', 'even-if'],
        stem: '忙{いそが}しい___、食事{しょくじ}はきちんと取{と}るべきだ。',
        stemZh: '即使再忙，也應該好好吃飯。',
        options: [
            { text: 'にしても', reason: '正確！「にしても」表示「即使...也」。' },
            { text: 'にしては', reason: '「にしては」表示「就...而言（意外）」，語意不同。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，不表示讓步。' },
            { text: 'として', reason: '「として」表示「作為」，不表示讓步。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にしても」表示即使某個條件成立',
            analysis: '「にしても」用於表示即使承認前提條件，後面的主張也不會改變。',
            comparisons: ['にしても：即使...也（讓步）', 'にしては：就...而言（意外評價）'],
            commonMistakes: ['○ 忙しいにしても / × 忙しいにしては → 前者是讓步，後者是「就忙碌的程度來說（意外地）」'],
        },
    },
    // ━━━ としたら / とすれば / とすると (if we assume) ━━━
    {
        id: 'g_n3_064', category: 'grammar', level: 'N3', tags: ['conditional', 'assumption'],
        stem: 'もし宝{たから}くじが当{あ}たった___、何{なに}をしますか。',
        stemZh: '如果中了彩券的話，你會做什麼？',
        options: [
            { text: 'としたら', reason: '正確！「としたら」表示假設的條件「假如...的話」。' },
            { text: 'にしたら', reason: '「にしたら」表示「從...的立場」，語意不同。' },
            { text: 'としても', reason: '「としても」表示「即使」，語意不同。' },
            { text: 'にしても', reason: '「にしても」表示「即使」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「としたら」表示假設性的條件',
            analysis: '「としたら」「とすれば」「とすると」三者意思相近，都表示假設某個條件成立時的推論。',
            comparisons: ['としたら：假如...的話（最常用）', 'とすれば：如果...那麼（稍正式）', 'とすると：這麼說的話（邏輯推理）'],
            commonMistakes: ['○ 当たったとしたら / × 当たったにしたら → 「にしたら」表示立場，不是假設'],
        },
    },
    // ━━━ と共に (together with / along with) ━━━
    {
        id: 'g_n3_065', category: 'grammar', level: 'N3', tags: ['simultaneous', 'formal'],
        stem: '経済{けいざい}の発展{はってん}___、環境{かんきょう}問題{もんだい}も深刻{しんこく}になった。',
        stemZh: '隨著經濟發展，環境問題也變得嚴重了。',
        options: [
            { text: 'と共{とも}に', reason: '正確！「と共に」表示「隨著...」同時發生。' },
            { text: 'について', reason: '「について」表示「關於」，不表示同時發生。' },
            { text: 'によって', reason: '「によって」表示「因為」，因果關係不同。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對」或「對比」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「と共に」表示伴隨著某事同時發生',
            analysis: '「と共に」可以表示①伴隨變化②與...一起。此處表示隨著經濟發展，問題也同時出現。',
            comparisons: ['と共に：隨著（伴隨變化）', 'につれて：隨著（因果更強）', 'にしたがって：隨著/遵照'],
            commonMistakes: ['○ 発展と共に / ○ 発展につれて → 兩者可互換，「と共に」更正式'],
        },
    },
    // ━━━ につれて (as / along with) ━━━
    {
        id: 'g_n3_066', category: 'grammar', level: 'N3', tags: ['simultaneous', 'change'],
        stem: '年{とし}をとる___、体力{たいりょく}が衰{おとろ}えていく。',
        stemZh: '隨著年齡增長，體力逐漸衰退。',
        options: [
            { text: 'につれて', reason: '正確！「につれて」表示隨著一方變化，另一方也跟著變化。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，語意不合。' },
            { text: 'について', reason: '「について」表示「關於」，不表示伴隨變化。' },
            { text: 'にかけて', reason: '「にかけて」表示時空範圍，不表示伴隨變化。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「につれて」表示兩個事物同步變化',
            analysis: '「につれて」表示前項的變化帶動後項的變化，兩者呈正相關。',
            comparisons: ['につれて：隨著（強調因果關係的同步變化）', 'と共に：隨著（較正式，伴隨變化）', 'にしたがって：隨著/遵照'],
            commonMistakes: ['○ 年をとるにつれて / × 年をとるにとって → 「にとって」不表示變化'],
        },
    },
    // ━━━ にしたがって (as / in accordance with) ━━━
    {
        id: 'g_n3_067', category: 'grammar', level: 'N3', tags: ['simultaneous', 'accordance'],
        stem: '先生{せんせい}の指示{しじ}___、実験{じっけん}を行{おこな}った。',
        stemZh: '遵照老師的指示，進行了實驗。',
        options: [
            { text: 'にしたがって', reason: '正確！「にしたがって」表示「遵照...」。' },
            { text: 'について', reason: '「について」表示「關於」，不表示遵從。' },
            { text: 'によって', reason: '「によって」表示手段或原因，不表示遵從。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對...」，不表示遵從。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にしたがって」的「遵照」用法',
            analysis: '「にしたがって」有兩個主要含義：①遵照/依照②隨著...。此處表示遵照指示。',
            comparisons: ['にしたがって：遵照（指示/規則）', 'にしたがって：隨著（伴隨變化）'],
            commonMistakes: ['○ 指示にしたがって行った / × 指示によって行った → 「によって」是手段，不是遵從'],
        },
    },
    // ━━━ に比べて (compared to) ━━━
    {
        id: 'g_n3_068', category: 'grammar', level: 'N3', tags: ['comparison', 'contrast'],
        stem: '去年{きょねん}___、今年{ことし}は暑{あつ}い日{ひ}が多{おお}い。',
        stemZh: '跟去年相比，今年很熱的日子比較多。',
        options: [
            { text: 'に比{くら}べて', reason: '正確！「に比べて」表示「與...相比」。' },
            { text: 'に対{たい}して', reason: '「に対して」可表示對比，但「に比べて」更適合程度比較。' },
            { text: 'について', reason: '「について」表示「關於」，不表示比較。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，不表示比較。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に比べて」表示兩者的比較',
            analysis: '「に比べて」用於比較兩個事物的差異或程度。',
            comparisons: ['に比べて：與...相比（程度比較）', 'に対して：相對地（對比差異）'],
            commonMistakes: ['○ 去年に比べて / × 去年に対して → 前者比較程度，後者對比不同'],
        },
    },
    // ━━━ 割に (relatively / for) ━━━
    {
        id: 'g_n3_069', category: 'grammar', level: 'N3', tags: ['evaluation', 'unexpected'],
        stem: 'この店{みせ}は値段{ねだん}が高{たか}い___、あまり美味{おい}しくない。',
        stemZh: '這家店價格高的割，卻不怎麼好吃。',
        options: [
            { text: '割{わり}に', reason: '正確！「割に」表示「以...而言（不符預期）」。' },
            { text: 'にしては', reason: '「にしては」也表示意外，但「割に」更強調比例不合。' },
            { text: 'わけに', reason: '「わけに」不構成此句型。' },
            { text: 'ために', reason: '「ために」表示原因或目的，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「割に」表示與預期不成比例',
            analysis: '「割に」用於表示結果與條件不成比例，出乎意料。',
            comparisons: ['割に：以...而言（結果不成比例）', 'にしては：就...而言（出乎意料）'],
            commonMistakes: ['○ 高い割に美味しくない / ○ 高いにしては美味しくない → 兩者意思相近'],
        },
    },
    // ━━━ ように (in order to / so that) ━━━
    {
        id: 'g_n3_070', category: 'grammar', level: 'N3', tags: ['purpose', 'wish'],
        stem: '日本語{にほんご}が上手{じょうず}に話{はな}せる___、毎日{まいにち}練習{れんしゅう}している。',
        stemZh: '為了能流利地說日語，每天都在練習。',
        options: [
            { text: 'ように', reason: '正確！「ように」接可能形表示目的。' },
            { text: 'ために', reason: '「ために」接意志動詞，「話せる」是可能形，用「ように」。' },
            { text: 'ことに', reason: '「ことに」不表示目的。' },
            { text: 'ほどに', reason: '「ほどに」表示程度，不表示目的。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ように」接非意志動詞表示目的',
            analysis: '表示目的時，意志動詞用「ために」，非意志動詞（可能形、自動詞）用「ように」。',
            comparisons: ['話せるように練習する：為了能說而練習（非意志→ように）', '話すために練習する：為了說而練習（意志→ために）'],
            commonMistakes: ['○ 話せるように / × 話せるために → 可能形（非意志）用「ように」'],
        },
    },
    // ━━━ ようになる (come to / become able to) ━━━
    {
        id: 'g_n3_071', category: 'grammar', level: 'N3', tags: ['change', 'ability'],
        stem: '日本{にほん}に来{き}て半年{はんとし}で、日本語{にほんご}が話{はな}せる___。',
        stemZh: '來日本半年後，變得能說日語了。',
        options: [
            { text: 'ようになった', reason: '正確！「ようになる」表示能力或狀態的變化。' },
            { text: 'ことになった', reason: '「ことになった」表示外部決定，不表示能力變化。' },
            { text: 'ことにした', reason: '「ことにした」表示自主決定，不表示能力變化。' },
            { text: 'はずだった', reason: '「はずだった」表示「本應...」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようになる」表示能力或習慣的變化',
            analysis: '「ようになる」用於表示從不會到會、從不做到做的狀態變化。常接可能形。',
            comparisons: ['ようになった：變得能...了（能力變化）', 'ことになった：決定...了（外部決定）'],
            commonMistakes: ['○ 話せるようになった / × 話せることになった → 能力變化用「ようになる」'],
        },
    },
    // ━━━ ようにする (try to / make it a practice) ━━━
    {
        id: 'g_n3_072', category: 'grammar', level: 'N3', tags: ['effort', 'habit'],
        stem: '毎日{まいにち}野菜{やさい}を食{た}べる___している。',
        stemZh: '我平常都盡量每天吃蔬菜。',
        options: [
            { text: 'ように', reason: '正確！「ようにする」表示努力養成某習慣。' },
            { text: 'ことに', reason: '「ことにする」表示決定，不強調持續努力。' },
            { text: 'ために', reason: '「ためにする」語法不成立。' },
            { text: 'わけに', reason: '「わけにする」語法不成立。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようにしている」表示平時努力做某事',
            analysis: '「ようにしている」表示為了達成目標而持續努力的習慣。',
            comparisons: ['ようにしている：盡量做...（持續努力的習慣）', 'ことにしている：決定了做...（已做的決定）'],
            commonMistakes: ['○ 食べるようにしている / × 食べることにしている → 「ようにしている」強調持續努力'],
        },
    },
    // ━━━ たものだ (used to) ━━━
    {
        id: 'g_n3_073', category: 'grammar', level: 'N3', tags: ['past', 'nostalgia'],
        stem: '子供{こども}の頃{ころ}は、よくこの公園{こうえん}で遊{あそ}んだ___。',
        stemZh: '小時候經常在這個公園裡玩。',
        options: [
            { text: 'ものだ', reason: '正確！「たものだ」表示回憶過去經常做的事，帶有懷念感。' },
            { text: 'ことだ', reason: '「ことだ」表示建議，語意不合。' },
            { text: 'わけだ', reason: '「わけだ」表示「難怪」，語意不合。' },
            { text: 'はずだ', reason: '「はずだ」表示推測，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たものだ」表示懷念過去的習慣',
            analysis: '「たものだ」用於回憶過去經常做的事情，帶有懷舊和感嘆的語氣。',
            comparisons: ['たものだ：過去經常...（懷念）', 'ことがある：曾經...（經歷）'],
            commonMistakes: ['○ 遊んだものだ（過去常玩，帶懷念）/ × 遊んだことがある（曾經玩過）→ 語感不同'],
        },
    },
    // ━━━ たとたん (the moment / as soon as) ━━━
    {
        id: 'g_n3_074', category: 'grammar', level: 'N3', tags: ['time', 'instant'],
        stem: 'ドアを開{あ}けた___、猫{ねこ}が飛{と}び出{だ}してきた。',
        stemZh: '一打開門，貓就衝了出來。',
        options: [
            { text: 'とたん', reason: '正確！「たとたん」表示一做完某事，緊接著就發生了另一件事。' },
            { text: 'ところ', reason: '「たところ」也可表示時間，但不如「とたん」強調瞬間性。' },
            { text: 'ばかり', reason: '「たばかり」表示「剛剛做完」，不表示瞬間接續。' },
            { text: 'ついでに', reason: '「ついでに」表示「順便」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たとたん」表示前後兩事幾乎同時發生',
            analysis: '「たとたん（に）」表示前一個動作剛完成，後一個事件就立刻發生。後項通常是意外的事。',
            comparisons: ['たとたん：一...就（瞬間、意外）', 'た途端に：同「たとたん」', 'たところ：做了...之後（結果）'],
            commonMistakes: ['○ 開けたとたん猫が飛び出した / × 開けたばかり猫が飛び出した → 「たばかり」不表示瞬間接續'],
        },
    },
    // ━━━ たて (just done / freshly) ━━━
    {
        id: 'g_n3_075', category: 'grammar', level: 'N3', tags: ['suffix', 'fresh'],
        stem: '焼{や}き___のパンはとてもいい匂{にお}いがする。',
        stemZh: '剛烤好的麵包聞起來很香。',
        options: [
            { text: 'たて', reason: '正確！「たて」表示剛做完的新鮮狀態。' },
            { text: 'ばかり', reason: '「焼きばかり」語法不成立，需用「焼いたばかり」。' },
            { text: 'がち', reason: '「がち」表示負面傾向，語意不合。' },
            { text: '気味{ぎみ}', reason: '「気味」表示「有點」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たて」表示剛做完的新鮮狀態',
            analysis: '「V ます形＋たて」表示動作剛完成的新鮮狀態，多用於正面的描述。',
            comparisons: ['焼きたて：剛烤好的', '炊きたて：剛煮好的', '作りたて：剛做好的'],
            commonMistakes: ['○ 焼きたてのパン / × 焼いたばかりのパン → 意思相近，「たて」更強調新鮮感'],
        },
    },
    // ━━━ たびに (every time) ━━━
    {
        id: 'g_n3_076', category: 'grammar', level: 'N3', tags: ['frequency', 'every-time'],
        stem: 'あの歌{うた}を聞{き}く___、学生{がくせい}時代{じだい}を思{おも}い出{だ}す。',
        stemZh: '每次聽到那首歌，就會想起學生時代。',
        options: [
            { text: 'たびに', reason: '正確！「たびに」表示「每次...都...」。' },
            { text: 'ごとに', reason: '「ごとに」表示「每...」，但常接名詞。' },
            { text: 'ついでに', reason: '「ついでに」表示「順便」，語意不同。' },
            { text: 'うちに', reason: '「うちに」表示「趁著」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たびに」表示每次某動作發生時都會...',
            analysis: '「たびに」接在動詞辭書形或「の」後，表示每當某事發生時，另一件事也必然發生。',
            comparisons: ['たびに：每次...都（接動詞/名詞の）', 'ごとに：每隔...（接名詞/時間單位）'],
            commonMistakes: ['○ 聞くたびに / × 聞くごとに → 「ごとに」更常用於時間間隔「三日ごとに」'],
        },
    },
    // ━━━ ごとに (every) ━━━
    {
        id: 'g_n3_077', category: 'grammar', level: 'N3', tags: ['frequency', 'interval'],
        stem: '5分{ふん}___バスが来{く}る。',
        stemZh: '每隔五分鐘就有一班公車。',
        options: [
            { text: 'ごとに', reason: '正確！「ごとに」表示「每隔...」，用於時間或數量間隔。' },
            { text: 'たびに', reason: '「5分たびに」語法不自然。' },
            { text: 'おきに', reason: '「おきに」也表示「每隔」，但語意稍有不同。' },
            { text: 'ずつ', reason: '「ずつ」表示「各」或「每」，但不用於時間間隔。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ごとに」表示固定的間隔或頻率',
            analysis: '「ごとに」接在數量或時間名詞後，表示按固定間隔重複。',
            comparisons: ['ごとに：每隔...（固定間隔）', 'おきに：每隔...（意思相同但用法略異）'],
            commonMistakes: ['○ 5分ごとに / ○ 5分おきに → 兩者可互換'],
        },
    },
    // ━━━ っぱなし (left as is / keeps doing) ━━━
    {
        id: 'g_n3_078', category: 'grammar', level: 'N3', tags: ['suffix', 'negligence'],
        stem: 'テレビをつけ___で寝{ね}てしまった。',
        stemZh: '開著電視就睡著了。',
        options: [
            { text: 'っぱなし', reason: '正確！「っぱなし」表示讓某狀態持續不管。' },
            { text: 'たまま', reason: '「たまま」也表示保持某狀態，但「っぱなし」更帶有放任的語感。' },
            { text: 'がち', reason: '「がち」表示傾向，不表示持續放任。' },
            { text: 'っぽい', reason: '「っぽい」表示「像...」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「っぱなし」表示放任不管的持續狀態',
            analysis: '「V ます形＋っぱなし」表示做了某動作後不收拾、不管理的狀態。帶有批評或無奈的語感。',
            comparisons: ['つけっぱなし：一直開著不關', '出しっぱなし：放在外面不收'],
            commonMistakes: ['○ つけっぱなし / ○ つけたまま → 前者強調「放任」，後者只描述狀態'],
        },
    },
    // ━━━ まるで (as if / just like) ━━━
    {
        id: 'g_n3_079', category: 'grammar', level: 'N3', tags: ['simile', 'comparison'],
        stem: '___夢{ゆめ}を見{み}ているようだった。',
        stemZh: '簡直就像在做夢一樣。',
        options: [
            { text: 'まるで', reason: '正確！「まるで〜ようだ」表示「簡直像...一樣」。' },
            { text: 'ちょうど', reason: '「ちょうど」表示「剛好」，不表示比喻。' },
            { text: 'たとえ', reason: '「たとえ」表示「即使」，不表示比喻。' },
            { text: 'まさに', reason: '「まさに」表示「正是」，不搭配「ようだ」構成比喻。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「まるで〜ようだ」表示比喻「簡直像...」',
            analysis: '「まるで」常與「ようだ」「みたいだ」搭配使用，構成比喻句。',
            comparisons: ['まるで夢のようだ：簡直像夢（比喻）', 'まるで子供みたいだ：簡直像小孩（比喻）'],
            commonMistakes: ['○ まるで夢を見ているようだ / × ちょうど夢を見ているようだ → 「ちょうど」不用於比喻'],
        },
    },
    // ━━━ ということだ (I heard / that means) ━━━
    {
        id: 'g_n3_080', category: 'grammar', level: 'N3', tags: ['hearsay', 'meaning'],
        stem: 'ニュースによると、来年{らいねん}から税金{ぜいきん}が上{あ}がる___。',
        stemZh: '據新聞報導，明年開始要加稅。',
        options: [
            { text: 'ということだ', reason: '正確！「ということだ」表示傳聞「據說」。' },
            { text: 'わけだ', reason: '「わけだ」表示「難怪」，語意不同。' },
            { text: 'はずだ', reason: '「はずだ」表示推測，不表示傳聞。' },
            { text: 'ものだ', reason: '「ものだ」表示感嘆或回憶，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ということだ」表示傳聞',
            analysis: '「ということだ」用於傳達從他處得來的消息。常與「によると」搭配使用。',
            comparisons: ['ということだ：據說（傳聞）', 'ということだ：也就是說（解釋）'],
            commonMistakes: ['○ 上がるということだ（據說要加）/ × 上がるわけだ（難怪要加）→ 有「によると」時用傳聞'],
        },
    },
    // ━━━ というのは (the thing called / the reason is) ━━━
    {
        id: 'g_n3_081', category: 'grammar', level: 'N3', tags: ['definition', 'reason'],
        stem: '「花見{はなみ}」___、桜{さくら}の花{はな}を見{み}ながら楽{たの}しむことだ。',
        stemZh: '所謂的「花見」，就是欣賞櫻花的活動。',
        options: [
            { text: 'というのは', reason: '正確！「というのは」用於解釋某個詞語或概念。' },
            { text: 'ということは', reason: '「ということは」表示推論「那麼就是說」，語意不同。' },
            { text: 'というと', reason: '「というと」表示「說到...」，不用於定義。' },
            { text: 'といっても', reason: '「といっても」表示「雖說...但是」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「というのは」用於定義或解釋',
            analysis: '「AというのはBだ」結構用於解釋A是什麼意思，常用於介紹新概念或詞語。',
            comparisons: ['というのは：所謂的...是...（定義）', 'ということは：那就是說...（推論）'],
            commonMistakes: ['○ 「花見」というのは / × 「花見」ということは → 定義用「というのは」，推論用「ということは」'],
        },
    },
    // ━━━ というより (rather than) ━━━
    {
        id: 'g_n3_082', category: 'grammar', level: 'N3', tags: ['comparison', 'correction'],
        stem: '彼{かれ}は頭{あたま}がいい___、努力家{どりょくか}だ。',
        stemZh: '與其說他聰明，不如說他很努力。',
        options: [
            { text: 'というより', reason: '正確！「というより」表示「與其說...不如說...」。' },
            { text: 'というのは', reason: '「というのは」表示定義，語意不合。' },
            { text: 'といっても', reason: '「といっても」表示「雖說...但」，語意不同。' },
            { text: 'ということだ', reason: '「ということだ」表示傳聞或結論，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「というより」表示修正或更正確的說法',
            analysis: '「AというよりB」用於對之前的說法進行修正，提出更貼切的表達。',
            comparisons: ['というより：與其說...不如說（修正）', 'むしろ：寧可說...（強調）'],
            commonMistakes: ['○ 頭がいいというより努力家だ / × 頭がいいというのは努力家だ → 「というのは」是定義，不是修正'],
        },
    },
    // ━━━ といっても (even though I say / although) ━━━
    {
        id: 'g_n3_083', category: 'grammar', level: 'N3', tags: ['concession', 'qualification'],
        stem: '日本語{にほんご}ができる___、簡単{かんたん}な会話{かいわ}だけだ。',
        stemZh: '雖說會日語，但也只是簡單會話而已。',
        options: [
            { text: 'といっても', reason: '正確！「といっても」表示「雖說...但程度沒那麼高」。' },
            { text: 'というより', reason: '「というより」表示「與其說...不如說」，語意不同。' },
            { text: 'ということだ', reason: '「ということだ」表示傳聞，語意不合。' },
            { text: 'というのは', reason: '「というのは」表示定義，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「といっても」表示對前述進行限定或降低期望',
            analysis: '「といっても」用於承認前述事實，但補充說明實際程度比想像的低。',
            comparisons: ['といっても：雖說...但（限定程度）', 'とはいえ：雖然說...但（更正式）'],
            commonMistakes: ['○ できるといっても簡単な会話だけだ / × できるというより簡単な会話だけだ → 語意不同'],
        },
    },
    // ━━━ と言えば (speaking of) ━━━
    {
        id: 'g_n3_084', category: 'grammar', level: 'N3', tags: ['topic', 'association'],
        stem: '日本{にほん}___、富士山{ふじさん}を思{おも}い浮{う}かべる人{ひと}が多{おお}い。',
        stemZh: '說到日本，很多人會想到富士山。',
        options: [
            { text: 'と言{い}えば', reason: '正確！「と言えば」表示「說到...」引出聯想。' },
            { text: 'というと', reason: '「というと」也表示「說到」，但「と言えば」更常用於聯想。' },
            { text: 'というのは', reason: '「というのは」表示定義，語意不合。' },
            { text: 'といっても', reason: '「といっても」表示「雖說」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「と言えば」表示由某詞引發的聯想',
            analysis: '「と言えば」用於提到某個話題時，自然聯想到相關的事物。',
            comparisons: ['と言えば：說到...（引發聯想）', 'というと：說到...（確認或聯想）'],
            commonMistakes: ['○ 日本と言えば富士山 / ○ 日本というと富士山 → 兩者意思相近'],
        },
    },
    // ━━━ といい (I wish / it would be nice if) ━━━
    {
        id: 'g_n3_085', category: 'grammar', level: 'N3', tags: ['wish', 'hope'],
        stem: '明日{あした}晴{は}れる___なあ。',
        stemZh: '明天放晴就好了。',
        options: [
            { text: 'といい', reason: '正確！「といいなあ」表示願望「...就好了」。' },
            { text: 'ばいい', reason: '「ばいい」表示建議或條件，語感稍有不同。' },
            { text: 'たらいい', reason: '「たらいい」也可表示願望，但此處考「といい」。' },
            { text: 'ことだ', reason: '「ことだ」表示建議「應該」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「といい」表示希望某事發生',
            analysis: '「といい（なあ）」用於表示說話者的願望，希望某件事能發生。',
            comparisons: ['といい：...就好了（願望）', 'ばいい：如果...就好了（建議/條件）', 'たらいい：如果...就好了（較口語）'],
            commonMistakes: ['○ 晴れるといいなあ / ○ 晴れればいいなあ → 兩者都表示願望'],
        },
    },
    // ━━━ ところで (by the way) ━━━
    {
        id: 'g_n3_086', category: 'grammar', level: 'N3', tags: ['conjunction', 'topic-change'],
        stem: '___、明日{あした}の予定{よてい}はどうなっていますか。',
        stemZh: '話說，明天的行程怎麼安排？',
        options: [
            { text: 'ところで', reason: '正確！「ところで」用於切換話題「話說」「順帶一提」。' },
            { text: 'ところが', reason: '「ところが」表示「然而」，不是切換話題。' },
            { text: 'それに', reason: '「それに」表示「而且」，用於追加而非切換話題。' },
            { text: 'そのため', reason: '「そのため」表示「因此」，用於因果而非切換話題。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ところで」用於切換到新話題',
            analysis: '「ところで」放在句首，用於從目前的話題轉換到新的話題。',
            comparisons: ['ところで：話說（切換話題）', 'ところが：然而（出乎意料的結果）'],
            commonMistakes: ['○ ところで、明日は？ / × ところが、明日は？ → 「ところが」是逆接，不是話題轉換'],
        },
    },
    // ━━━ ところが (however / but then) ━━━
    {
        id: 'g_n3_087', category: 'grammar', level: 'N3', tags: ['conjunction', 'unexpected'],
        stem: '天気{てんき}予報{よほう}では晴{は}れると言{い}っていた。___、急{きゅう}に雨{あめ}が降{ふ}り出{だ}した。',
        stemZh: '天氣預報說會放晴。然而，突然下起雨來了。',
        options: [
            { text: 'ところが', reason: '正確！「ところが」表示出乎意料的轉折「然而」。' },
            { text: 'ところで', reason: '「ところで」表示切換話題，不表示轉折。' },
            { text: 'そこで', reason: '「そこで」表示「於是」，不表示出乎意料。' },
            { text: 'すると', reason: '「すると」表示「於是」或「一看」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ところが」表示出乎意料的結果',
            analysis: '「ところが」用於前面的預期或行動導致了出乎意料的結果，帶有「沒想到」的語感。',
            comparisons: ['ところが：然而/沒想到（出乎意料）', 'しかし：但是（一般逆接）', 'ところで：話說（切換話題）'],
            commonMistakes: ['○ ところが急に雨が降った / × ところで急に雨が降った → 「ところで」是切換話題，不是轉折'],
        },
    },
    // ━━━ とおりに (as / just like) ━━━
    {
        id: 'g_n3_088', category: 'grammar', level: 'N3', tags: ['manner', 'accordance'],
        stem: '説明書{せつめいしょ}に書{か}いてある___、組{く}み立{た}てた。',
        stemZh: '按照說明書上寫的組裝了。',
        options: [
            { text: 'とおりに', reason: '正確！「とおりに」表示「按照...」。' },
            { text: 'ように', reason: '「ように」表示「像...一樣」，不如「とおりに」強調完全照做。' },
            { text: 'ために', reason: '「ために」表示目的或原因，語意不合。' },
            { text: 'ほどに', reason: '「ほどに」表示程度，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とおりに」表示完全照某方式做',
            analysis: '「とおりに」表示完全按照某個標準或方式行事，不偏離。',
            comparisons: ['とおりに：按照...（完全照做）', 'ように：像...一樣（模仿方式）'],
            commonMistakes: ['○ 書いてあるとおりに / × 書いてあるように → 「ように」不如「とおりに」強調完全一致'],
        },
    },
    // ━━━ 通す (do all the way through) ━━━
    {
        id: 'g_n3_089', category: 'grammar', level: 'N3', tags: ['compound-verb', 'completion'],
        stem: '最後{さいご}まで走{はし}り___。',
        stemZh: '堅持跑到最後。',
        options: [
            { text: '通{とお}した', reason: '正確！「V ます形＋通す」表示「堅持做到底」。' },
            { text: '切{き}った', reason: '「走り切った」也可以，表示「跑完」，語感稍有不同。' },
            { text: '始{はじ}めた', reason: '「走り始めた」表示「開始跑」，語意相反。' },
            { text: '出{だ}した', reason: '「走り出した」表示「突然開始跑」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「V ます形＋通す」表示堅持做某事到底',
            analysis: '「通す」作為複合動詞後綴，表示貫徹始終、堅持到底。',
            comparisons: ['走り通す：堅持跑到底', '走り切る：跑完（強調完成）', '走り始める：開始跑'],
            commonMistakes: ['○ 走り通した / ○ 走り切った → 前者強調堅持，後者強調完成'],
        },
    },
    // ━━━ 切る (completely) ━━━
    {
        id: 'g_n3_090', category: 'grammar', level: 'N3', tags: ['compound-verb', 'completion'],
        stem: 'マラソンを走{はし}り___ことができた。',
        stemZh: '跑完了馬拉松。',
        options: [
            { text: '切{き}る', reason: '正確！「V ます形＋切る」表示「完全做完」。' },
            { text: '通{とお}す', reason: '「通す」表示「堅持到底」，語感不同。' },
            { text: '出{だ}す', reason: '「出す」表示「開始」或「突然」，語意不合。' },
            { text: '込{こ}む', reason: '「込む」表示「進入」或「深入」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「V ます形＋切る」表示完全完成',
            analysis: '「切る」作為複合動詞後綴，表示完全完成某個動作，強調徹底性。',
            comparisons: ['走り切る：跑完（完全完成）', '使い切る：用完', '食べ切る：吃完'],
            commonMistakes: ['○ 走り切る / ○ 走り通す → 前者強調完成，後者強調堅持'],
        },
    },
    // ━━━ 切れない (unable to completely) ━━━
    {
        id: 'g_n3_091', category: 'grammar', level: 'N3', tags: ['compound-verb', 'inability'],
        stem: '量{りょう}が多{おお}すぎて、食{た}べ___。',
        stemZh: '份量太多了，吃不完。',
        options: [
            { text: '切{き}れない', reason: '正確！「V ます形＋切れない」表示「做不完」。' },
            { text: '通{とお}せない', reason: '「食べ通せない」語法不太自然。' },
            { text: '出{だ}せない', reason: '「食べ出せない」語法不成立。' },
            { text: '込{こ}めない', reason: '「食べ込めない」語法不成立。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「切れない」是「切る」的否定，表示無法做完',
            analysis: '「V ます形＋切れない」表示數量或難度超出能力，無法全部完成。',
            comparisons: ['食べ切れない：吃不完', '数え切れない：數不完', '読み切れない：讀不完'],
            commonMistakes: ['○ 食べ切れない / × 食べられない → 「食べられない」是不能吃，「食べ切れない」是吃不完'],
        },
    },
    // ━━━ 込む (into / deeply) ━━━
    {
        id: 'g_n3_092', category: 'grammar', level: 'N3', tags: ['compound-verb', 'movement'],
        stem: '電車{でんしゃ}に飛{と}び___。',
        stemZh: '衝進電車裡。',
        options: [
            { text: '込{こ}んだ', reason: '正確！「V ます形＋込む」表示向內部深入移動。' },
            { text: '出{だ}した', reason: '「飛び出した」表示「衝出來」，方向相反。' },
            { text: '通{とお}した', reason: '「飛び通した」語法不成立。' },
            { text: '切{き}った', reason: '「飛び切った」不常見。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「込む」表示向內部移動或深入',
            analysis: '「込む」作為複合動詞後綴，表示向某個空間內部移動或動作的深入。',
            comparisons: ['飛び込む：衝進去', '飛び出す：衝出來', '入り込む：進入深處'],
            commonMistakes: ['○ 飛び込んだ（衝進去）/ × 飛び出した（衝出來）→ 方向相反'],
        },
    },
    // ━━━ 合う (mutually) ━━━
    {
        id: 'g_n3_093', category: 'grammar', level: 'N3', tags: ['compound-verb', 'mutual'],
        stem: '困{こま}った時{とき}は、お互{たが}いに助{たす}け___。',
        stemZh: '困難的時候要互相幫助。',
        options: [
            { text: '合{あ}おう', reason: '正確！「V ます形＋合う」表示「互相做...」。' },
            { text: '込{こ}もう', reason: '「助け込もう」語法不成立。' },
            { text: '出{だ}そう', reason: '「助け出そう」表示「救出」，語意不同。' },
            { text: '直{なお}そう', reason: '「助け直そう」表示「重新幫助」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「V ます形＋合う」表示互相做某事',
            analysis: '「合う」作為複合動詞後綴，表示兩方或多方互相進行某個動作。',
            comparisons: ['助け合う：互相幫助', '話し合う：互相討論', '愛し合う：相愛'],
            commonMistakes: ['○ 助け合おう / × 助けよう → 「助けよう」只是「讓我們幫助」，缺少「互相」的意思'],
        },
    },
    // ━━━ 直す (redo / fix) ━━━
    {
        id: 'g_n3_094', category: 'grammar', level: 'N3', tags: ['compound-verb', 'redo'],
        stem: '間違{まちが}いがあったので、書{か}き___。',
        stemZh: '因為有錯誤，所以重新寫了。',
        options: [
            { text: '直{なお}した', reason: '正確！「V ます形＋直す」表示「重新做」。' },
            { text: '切{き}った', reason: '「書き切った」表示「寫完」，語意不同。' },
            { text: '込{こ}んだ', reason: '「書き込んだ」表示「填寫」，語意不同。' },
            { text: '出{だ}した', reason: '「書き出した」表示「開始寫」或「抄寫」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「V ます形＋直す」表示重新做某事',
            analysis: '「直す」作為複合動詞後綴，表示因為之前做得不好而重新做一次。',
            comparisons: ['書き直す：重寫', 'やり直す：重做', '作り直す：重新製作'],
            commonMistakes: ['○ 書き直した / × 書き込んだ → 「書き込む」是「填寫」，不是「重寫」'],
        },
    },
    // ━━━ 上げる (complete) ━━━
    {
        id: 'g_n3_095', category: 'grammar', level: 'N3', tags: ['compound-verb', 'completion'],
        stem: 'レポートをやっと書{か}き___ことができた。',
        stemZh: '終於把報告寫完了。',
        options: [
            { text: '上{あ}げる', reason: '正確！「V ます形＋上げる」表示「做完」帶有完成感。' },
            { text: '切{き}る', reason: '「書き切る」也可以表示「寫完」，但「書き上げる」更強調完成的成就感。' },
            { text: '込{こ}む', reason: '「書き込む」表示「填寫」，語意不同。' },
            { text: '出{だ}す', reason: '「書き出す」表示「開始寫」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「V ます形＋上げる」表示完成創作或工作',
            analysis: '「上げる」作為複合動詞後綴，表示完成了一個有成果的工作，帶有成就感。',
            comparisons: ['書き上げる：寫完（作品完成）', '作り上げる：做完（創作完成）', '仕上げる：完成'],
            commonMistakes: ['○ 書き上げた / ○ 書き切った → 前者強調成就感，後者強調徹底完成'],
        },
    },
    // ━━━ かける (halfway / about to) ━━━
    {
        id: 'g_n3_096', category: 'grammar', level: 'N3', tags: ['compound-verb', 'incomplete'],
        stem: '読{よ}み___の本{ほん}がたくさんある。',
        stemZh: '有很多讀了一半的書。',
        options: [
            { text: 'かけ', reason: '正確！「V ます形＋かけ」表示做到一半的狀態。' },
            { text: '切{き}り', reason: '「読み切り」表示「短篇」，語意不同。' },
            { text: '込{こ}み', reason: '「読み込み」表示「載入」或「深讀」，語意不同。' },
            { text: '直{なお}し', reason: '「読み直し」表示「重新讀」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「V ます形＋かけ」表示做到一半的狀態',
            analysis: '「かける」作為複合動詞後綴有多個含義：①做到一半②正要開始。「かけ」是名詞化形式。',
            comparisons: ['読みかけの本：讀了一半的書', '食べかけのケーキ：吃了一半的蛋糕'],
            commonMistakes: ['○ 読みかけの本 / × 読みかけている本 → 名詞修飾用「かけの」'],
        },
    },
    // ━━━ に反して (contrary to) ━━━
    {
        id: 'g_n3_097', category: 'grammar', level: 'N3', tags: ['contrary', 'contrast'],
        stem: '予想{よそう}___、試合{しあい}は簡単{かんたん}に終{お}わった。',
        stemZh: '與預期相反，比賽很輕鬆就結束了。',
        options: [
            { text: 'に反{はん}して', reason: '正確！「に反して」表示「與...相反」。' },
            { text: 'に対{たい}して', reason: '「に対して」可表示對比，但不如「に反して」強調相反。' },
            { text: 'について', reason: '「について」表示「關於」，不表示相反。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に反して」表示結果與預期完全相反',
            analysis: '「に反して」用於表示實際結果與預想、期待或規定完全相反。',
            comparisons: ['に反して：與...相反（完全相反）', 'に対して：對比/對...（不一定相反）'],
            commonMistakes: ['○ 予想に反して / × 予想に対して → 「に対して」是對比，「に反して」是相反'],
        },
    },
    // ━━━ にかわって (in place of / on behalf of) ━━━
    {
        id: 'g_n3_098', category: 'grammar', level: 'N3', tags: ['replacement', 'behalf'],
        stem: '病気{びょうき}の部長{ぶちょう}___、私{わたし}が発表{はっぴょう}した。',
        stemZh: '代替生病的部長，由我來發表。',
        options: [
            { text: 'にかわって', reason: '正確！「にかわって」表示「代替...」。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，不表示代替。' },
            { text: 'について', reason: '「について」表示「關於」，不表示代替。' },
            { text: 'において', reason: '「において」表示「在...」，不表示代替。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にかわって」表示代替某人做某事',
            analysis: '「にかわって」表示代替無法到場或無法行事的人來做某事。',
            comparisons: ['にかわって：代替...（代行職務）', 'のかわりに：代替...（一般替代）'],
            commonMistakes: ['○ 部長にかわって発表した / × 部長のかわりに発表した → 兩者意思相近，「にかわって」更正式'],
        },
    },
    // ━━━ を中心に (centered on) ━━━
    {
        id: 'g_n3_099', category: 'grammar', level: 'N3', tags: ['focus', 'center'],
        stem: '東京{とうきょう}___、地震{じしん}の被害{ひがい}が広{ひろ}がった。',
        stemZh: '以東京為中心，地震的災害擴散開來。',
        options: [
            { text: 'を中心{ちゅうしん}に', reason: '正確！「を中心に」表示「以...為中心」。' },
            { text: 'をはじめ', reason: '「をはじめ」表示「以...為首」，語意稍有不同。' },
            { text: 'を通{つう}じて', reason: '「を通じて」表示「通過」，語意不合。' },
            { text: 'を込{こ}めて', reason: '「を込めて」表示「傾注」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を中心に」表示以某事物為核心',
            analysis: '「を中心に」用於表示以某個地點、人物或事物為核心展開活動或影響。',
            comparisons: ['を中心に：以...為中心', 'をはじめ：以...為首/首先是...'],
            commonMistakes: ['○ 東京を中心に / × 東京をはじめ → 「をはじめ」列舉代表事物，「を中心に」表示核心點'],
        },
    },
    // ━━━ をはじめ (starting with / including) ━━━
    {
        id: 'g_n3_100', category: 'grammar', level: 'N3', tags: ['listing', 'representative'],
        stem: '日本{にほん}___、アジアの国{くに}の多{おお}くが地震{じしん}の多{おお}い地域{ちいき}にある。',
        stemZh: '以日本為首，亞洲很多國家都在多地震的地區。',
        options: [
            { text: 'をはじめ', reason: '正確！「をはじめ」表示「以...為首」列舉代表性的例子。' },
            { text: 'を中心{ちゅうしん}に', reason: '「を中心に」表示「以...為中心」，語感不同。' },
            { text: 'を通{つう}じて', reason: '「を通じて」表示「通過」，語意不合。' },
            { text: 'について', reason: '「について」表示「關於」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「をはじめ」列舉最具代表性的例子',
            analysis: '「をはじめ」用於先舉出最具代表性的一個，再暗示還有其他類似的事物。',
            comparisons: ['をはじめ：以...為首（列舉代表）', 'を中心に：以...為中心（核心焦點）'],
            commonMistakes: ['○ 日本をはじめアジアの国 / × 日本を中心にアジアの国 → 列舉代表用「をはじめ」'],
        },
    },
    // ━━━ を通じて / を通して (through / throughout) ━━━
    {
        id: 'g_n3_101', category: 'grammar', level: 'N3', tags: ['means', 'period'],
        stem: 'インターネット___、世界中{せかいじゅう}の情報{じょうほう}が手{て}に入{はい}る。',
        stemZh: '透過網路，可以得到全世界的資訊。',
        options: [
            { text: 'を通{つう}じて', reason: '正確！「を通じて」表示「透過...」（手段）。' },
            { text: 'を中心{ちゅうしん}に', reason: '「を中心に」表示「以...為中心」，語意不合。' },
            { text: 'をはじめ', reason: '「をはじめ」表示「以...為首」，語意不合。' },
            { text: 'を込{こ}めて', reason: '「を込めて」表示「傾注」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を通じて」表示手段或媒介',
            analysis: '「を通じて」可以表示①透過某媒介②在整個期間。此處表示透過網路這個手段。',
            comparisons: ['を通じて：透過（手段/整個期間）', 'によって：靠/因為（手段/原因）'],
            commonMistakes: ['○ インターネットを通じて / ○ インターネットによって → 兩者可互換於表示手段'],
        },
    },
    // ━━━ を込めて (with feeling / putting in) ━━━
    {
        id: 'g_n3_102', category: 'grammar', level: 'N3', tags: ['feeling', 'emotion'],
        stem: '感謝{かんしゃ}の気持{きも}ち___、手紙{てがみ}を書{か}いた。',
        stemZh: '懷著感謝的心情寫了信。',
        options: [
            { text: 'を込{こ}めて', reason: '正確！「を込めて」表示「傾注...心意」。' },
            { text: 'を通{つう}じて', reason: '「を通じて」表示「透過」，語意不同。' },
            { text: 'を中心{ちゅうしん}に', reason: '「を中心に」表示「以...為中心」，語意不合。' },
            { text: 'について', reason: '「について」表示「關於」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を込めて」表示傾注某種情感',
            analysis: '「を込めて」用於表示在做某事時傾注了某種情感或心意。常用於「感謝」「愛」「心」等。',
            comparisons: ['感謝を込めて：懷著感謝', '心を込めて：用心地', '愛を込めて：充滿愛地'],
            commonMistakes: ['○ 感謝の気持ちを込めて / × 感謝の気持ちを通じて → 「を通じて」不表示情感傾注'],
        },
    },
    // ━━━ 結局 (in the end) ━━━
    {
        id: 'g_n3_103', category: 'grammar', level: 'N3', tags: ['adverb', 'conclusion'],
        stem: 'いろいろ考{かんが}えたが、___元{もと}の計画{けいかく}のまま進{すす}めることにした。',
        stemZh: '想了很多，結果還是決定按照原來的計畫進行。',
        options: [
            { text: '結局{けっきょく}', reason: '正確！「結局」表示經過各種考量後「結果」「最終」。' },
            { text: 'ついに', reason: '「ついに」表示「終於」，強調等待結果，語感不同。' },
            { text: 'やはり', reason: '「やはり」表示「果然」，也可以但強調「如預期」。' },
            { text: 'さすがに', reason: '「さすがに」表示「不愧是」或「畢竟」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「結局」表示經過過程後的最終結果',
            analysis: '「結局」用於表示雖然經歷了各種事情或思考，但最終的結果是...。常帶有無奈的語感。',
            comparisons: ['結局：結果/最終（經過各種過程）', 'ついに：終於（經過等待）', 'やはり：果然（如預期）'],
            commonMistakes: ['○ 結局元の計画のまま / × ついに元の計画のまま → 「ついに」更適合達成目標的場合'],
        },
    },
    // ━━━ 結果 (as a result) ━━━
    {
        id: 'g_n3_104', category: 'grammar', level: 'N3', tags: ['conjunction', 'result'],
        stem: '一年間{いちねんかん}努力{どりょく}した___、合格{ごうかく}することができた。',
        stemZh: '努力了一年的結果，成功通過了。',
        options: [
            { text: '結果{けっか}', reason: '正確！「結果」表示某行動的結果。' },
            { text: '途中{とちゅう}', reason: '「途中」表示「中途」，不表示結果。' },
            { text: '最中{さいちゅう}', reason: '「最中」表示「正在...之中」，不表示結果。' },
            { text: '以上{いじょう}', reason: '「以上」表示「以上/既然」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「結果」連接原因和結果',
            analysis: '「V た＋結果」表示做了某事之後得到的結果。',
            comparisons: ['努力した結果：努力的結果', '調べた結果：調查的結果'],
            commonMistakes: ['○ 努力した結果合格できた / × 努力した途中合格できた → 「途中」不表示最終結果'],
        },
    },
    // ━━━ なぜなら (because / the reason is) ━━━
    {
        id: 'g_n3_105', category: 'grammar', level: 'N3', tags: ['conjunction', 'reason'],
        stem: '彼{かれ}は信頼{しんらい}できる。___、いつも約束{やくそく}を守{まも}るからだ。',
        stemZh: '他值得信賴。因為他總是遵守約定。',
        options: [
            { text: 'なぜなら', reason: '正確！「なぜなら」用於說明前句的理由。' },
            { text: 'ところが', reason: '「ところが」表示「然而」，是逆接不是原因。' },
            { text: 'ところで', reason: '「ところで」表示「話說」，切換話題。' },
            { text: 'それでは', reason: '「それでは」表示「那麼」，不表示原因。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なぜなら〜からだ」固定搭配說明理由',
            analysis: '「なぜなら」放在句首，後面說明前句的原因。通常與「からだ」搭配使用。',
            comparisons: ['なぜなら〜からだ：因為...（書面正式說明理由）', 'というのは〜からだ：那是因為...'],
            commonMistakes: ['○ なぜなら約束を守るからだ / × ところが約束を守るからだ → 「ところが」是轉折不是原因'],
        },
    },
    // ━━━ つまり (in other words) ━━━
    {
        id: 'g_n3_106', category: 'grammar', level: 'N3', tags: ['conjunction', 'restatement'],
        stem: '彼女{かのじょ}は私{わたし}の母{はは}の姉{あね}の子供{こども}だ。___、私{わたし}のいとこだ。',
        stemZh: '她是我媽媽姐姐的孩子。也就是說，她是我的表姐妹。',
        options: [
            { text: 'つまり', reason: '正確！「つまり」表示「也就是說」，用於換句話說。' },
            { text: 'ところで', reason: '「ところで」表示「話說」，切換話題。' },
            { text: 'ところが', reason: '「ところが」表示「然而」，語意不合。' },
            { text: 'なぜなら', reason: '「なぜなら」表示「因為」，不是換句話說。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「つまり」用於總結或換句話說',
            analysis: '「つまり」放在句首，用於將前面的內容用更簡潔或易懂的方式重新表達。',
            comparisons: ['つまり：也就是說（換個說法）', 'すなわち：即（更正式的換句話說）', '要するに：總之（總結要點）'],
            commonMistakes: ['○ つまり私のいとこだ / × なぜなら私のいとこだ → 「なぜなら」是解釋原因，不是換句話說'],
        },
    },
    // ━━━ すなわち (namely / that is) ━━━
    {
        id: 'g_n3_107', category: 'grammar', level: 'N3', tags: ['conjunction', 'formal-restatement'],
        stem: '地球{ちきゅう}は太陽系{たいようけい}の第{だい}三惑星{さんわくせい}、___、太陽{たいよう}から三番目{さんばんめ}の星{ほし}である。',
        stemZh: '地球是太陽系的第三顆行星，即離太陽第三近的星球。',
        options: [
            { text: 'すなわち', reason: '正確！「すなわち」是「つまり」的正式版，表示「即」。' },
            { text: 'つまり', reason: '「つまり」也可以但較口語，此處正式語境用「すなわち」。' },
            { text: 'しかし', reason: '「しかし」表示「但是」，語意不合。' },
            { text: 'さらに', reason: '「さらに」表示「更加」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「すなわち」是正式書面中的「也就是說」',
            analysis: '「すなわち」比「つまり」更正式，常用於學術、新聞等書面語境中進行定義或解釋。',
            comparisons: ['すなわち：即（最正式）', 'つまり：也就是說（一般）', '要するに：總之（口語化）'],
            commonMistakes: ['○ すなわち太陽から三番目の星である / × さらに太陽から三番目の星である → 「さらに」是追加，不是同義重述'],
        },
    },
    // ━━━ さらに (furthermore / even more) ━━━
    {
        id: 'g_n3_108', category: 'grammar', level: 'N3', tags: ['conjunction', 'addition'],
        stem: '今年{ことし}の売{う}り上{あ}げは去年{きょねん}を超{こ}えた。___来年{らいねん}はもっと伸{の}びるだろう。',
        stemZh: '今年的營業額超過了去年。而且明年可能會更加成長。',
        options: [
            { text: 'さらに', reason: '正確！「さらに」表示「進一步」「更加」。' },
            { text: 'つまり', reason: '「つまり」表示「也就是說」，不是追加。' },
            { text: 'ところが', reason: '「ところが」表示「然而」，語意相反。' },
            { text: 'なぜなら', reason: '「なぜなら」表示「因為」，不是追加。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「さらに」表示在前述基礎上進一步',
            analysis: '「さらに」用於表示在已有的情況之上，更進一步的發展或追加。',
            comparisons: ['さらに：進一步/更加', 'しかも：而且（強調追加）', 'その上：此外（追加信息）'],
            commonMistakes: ['○ さらに来年はもっと伸びる / × つまり来年はもっと伸びる → 「つまり」是總結，不是追加'],
        },
    },
    // ━━━ むしろ (rather / instead) ━━━
    {
        id: 'g_n3_109', category: 'grammar', level: 'N3', tags: ['adverb', 'preference'],
        stem: '電車{でんしゃ}で行{い}くより、___歩{ある}いたほうが早{はや}い。',
        stemZh: '比起搭電車，倒不如走路更快。',
        options: [
            { text: 'むしろ', reason: '正確！「むしろ」表示「倒不如」「寧可說」。' },
            { text: 'やはり', reason: '「やはり」表示「果然」，語意不同。' },
            { text: 'まさか', reason: '「まさか」表示「難道」，語意不合。' },
            { text: 'せめて', reason: '「せめて」表示「至少」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「むしろ」表示與其A不如B',
            analysis: '「むしろ」用於比較兩個選項後，表示後者比前者更好或更適合。',
            comparisons: ['むしろ：倒不如/寧可（偏好另一方）', 'というより：與其說...不如說（修正說法）'],
            commonMistakes: ['○ むしろ歩いたほうが早い / × やはり歩いたほうが早い → 「やはり」是「果然」，不是「倒不如」'],
        },
    },
    // ━━━ それとも (or) ━━━
    {
        id: 'g_n3_110', category: 'grammar', level: 'N3', tags: ['conjunction', 'choice'],
        stem: 'コーヒーにしますか。___、紅茶{こうちゃ}にしますか。',
        stemZh: '要咖啡嗎？還是要紅茶？',
        options: [
            { text: 'それとも', reason: '正確！「それとも」用於疑問句中的選擇「還是」。' },
            { text: 'あるいは', reason: '「あるいは」也表示「或者」，但不常用於直接疑問。' },
            { text: 'また', reason: '「また」表示「又」或「另外」，不表示選擇。' },
            { text: 'そして', reason: '「そして」表示「然後」，不表示選擇。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「それとも」用於疑問句中的二擇一',
            analysis: '「それとも」用於連接兩個疑問句，表示讓對方從中選擇。',
            comparisons: ['それとも：還是（疑問句選擇）', 'あるいは：或者（陳述句選擇）', 'または：或（書面列舉）'],
            commonMistakes: ['○ コーヒーにしますか。それとも紅茶にしますか。/ × コーヒーにしますか。あるいは紅茶にしますか。→ 疑問句用「それとも」'],
        },
    },
    // ━━━ そのために (for that reason / therefore) ━━━
    {
        id: 'g_n3_111', category: 'grammar', level: 'N3', tags: ['conjunction', 'purpose-result'],
        stem: '日本{にほん}で働{はたら}きたい。___、日本語{にほんご}を勉強{べんきょう}している。',
        stemZh: '想在日本工作。為此，正在學日語。',
        options: [
            { text: 'そのために', reason: '正確！「そのために」表示「為此」，連接目的。' },
            { text: 'そこで', reason: '「そこで」表示「於是」，語感稍有不同。' },
            { text: 'ところが', reason: '「ところが」表示「然而」，語意相反。' },
            { text: 'ところで', reason: '「ところで」表示「話說」，切換話題。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「そのために」連接目的或原因',
            analysis: '「そのために」可以表示①為了那個目的②因為那個原因。此處表示為了「在日本工作」的目的。',
            comparisons: ['そのために：為此（目的/因此）', 'そこで：於是（順勢做出行動）'],
            commonMistakes: ['○ そのために日本語を勉強している / ○ そこで日本語を勉強している → 前者強調目的，後者強調順勢行動'],
        },
    },
    // ━━━ 確かに (certainly / indeed) ━━━
    {
        id: 'g_n3_112', category: 'grammar', level: 'N3', tags: ['adverb', 'agreement'],
        stem: '___彼{かれ}の意見{いけん}には一理{いちり}ある。しかし、私{わたし}は反対{はんたい}だ。',
        stemZh: '確實他的意見有道理。但是，我反對。',
        options: [
            { text: '確{たし}かに', reason: '正確！「確かに」表示先承認對方的道理。' },
            { text: 'まさか', reason: '「まさか」表示「難道」，語意不合。' },
            { text: 'むしろ', reason: '「むしろ」表示「倒不如」，語意不合。' },
            { text: 'せいぜい', reason: '「せいぜい」表示「充其量」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「確かに」用於承認對方觀點後轉折',
            analysis: '「確かに〜。しかし〜。」是常見句型，先承認對方說得對，再提出自己不同的看法。',
            comparisons: ['確かに〜しかし：確實...但是（承認後轉折）', 'もちろん〜しかし：當然...但是（理所當然後轉折）'],
            commonMistakes: ['○ 確かに一理ある。しかし反対だ / × まさか一理ある → 「まさか」表示不敢相信'],
        },
    },
    // ━━━ しばらく (for a while) ━━━
    {
        id: 'g_n3_113', category: 'grammar', level: 'N3', tags: ['adverb', 'time'],
        stem: '___お会{あ}いしていませんでしたね。お元気{げんき}ですか。',
        stemZh: '好久不見了呢。您好嗎？',
        options: [
            { text: 'しばらく', reason: '正確！「しばらく」表示「好一陣子」「許久」。' },
            { text: 'すでに', reason: '「すでに」表示「已經」，語意不合。' },
            { text: 'ついに', reason: '「ついに」表示「終於」，語意不合。' },
            { text: 'たまに', reason: '「たまに」表示「偶爾」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「しばらく」表示一段不短的時間',
            analysis: '「しばらく」可以表示①暫時②好一陣子/許久。此處「しばらくお会いしていません」表示「好久不見」。',
            comparisons: ['しばらく：好一陣子/許久', 'すでに：已經', 'ようやく：好不容易'],
            commonMistakes: ['○ しばらくお会いしていません / × すでにお会いしていません → 「すでに」語感不同'],
        },
    },
    // ━━━ すでに (already) ━━━
    {
        id: 'g_n3_114', category: 'grammar', level: 'N3', tags: ['adverb', 'already'],
        stem: '私{わたし}が到着{とうちゃく}した時{とき}、会議{かいぎ}は___始{はじ}まっていた。',
        stemZh: '我到的時候，會議已經開始了。',
        options: [
            { text: 'すでに', reason: '正確！「すでに」表示「已經」（正式用法）。' },
            { text: 'ついに', reason: '「ついに」表示「終於」，語意不同。' },
            { text: 'しばらく', reason: '「しばらく」表示「暫時/許久」，語意不合。' },
            { text: 'まさに', reason: '「まさに」表示「正是」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「すでに」是「もう」的書面正式用法',
            analysis: '「すでに」用於書面或正式場合，表示某事在談論的時間點之前就已經發生。',
            comparisons: ['すでに：已經（書面正式）', 'もう：已經（口語）'],
            commonMistakes: ['○ すでに始まっていた / ○ もう始まっていた → 意思相同，「すでに」更正式'],
        },
    },
    // ━━━ わざと (on purpose) ━━━
    {
        id: 'g_n3_115', category: 'grammar', level: 'N3', tags: ['adverb', 'intentional'],
        stem: '彼{かれ}は___間違{まちが}えたふりをした。',
        stemZh: '他故意裝作搞錯了。',
        options: [
            { text: 'わざと', reason: '正確！「わざと」表示「故意地」。' },
            { text: 'つい', reason: '「つい」表示「不自覺地」，語意相反。' },
            { text: 'わざわざ', reason: '「わざわざ」表示「特地」，語意不同。' },
            { text: 'ふと', reason: '「ふと」表示「偶然」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「わざと」表示有意識地故意做',
            analysis: '「わざと」表示帶有明確意圖地做某事。常用於負面語境。',
            comparisons: ['わざと：故意地（有意圖）', 'つい：不自覺地（無意識）', 'わざわざ：特地（特意去做）'],
            commonMistakes: ['○ わざと間違えた / × つい間違えた → 「つい」是無意的，「わざと」是故意的'],
        },
    },
    // ━━━ わざわざ (go out of one's way) ━━━
    {
        id: 'g_n3_116', category: 'grammar', level: 'N3', tags: ['adverb', 'deliberately'],
        stem: '___遠{とお}いところからお越{こ}しいただき、ありがとうございます。',
        stemZh: '感謝您特地從遠處趕來。',
        options: [
            { text: 'わざわざ', reason: '正確！「わざわざ」表示「特地」「專程」。' },
            { text: 'わざと', reason: '「わざと」表示「故意」，語感負面。' },
            { text: 'つい', reason: '「つい」表示「不自覺地」，語意不合。' },
            { text: 'ふと', reason: '「ふと」表示「偶然」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「わざわざ」表示特意去做某事',
            analysis: '「わざわざ」表示對方費時費力特地做了某事，用於表示感謝或覺得不必要。',
            comparisons: ['わざわざ：特地（感謝語氣或「何必特地」）', 'わざと：故意（常負面）'],
            commonMistakes: ['○ わざわざ来てくれた / × わざと来てくれた → 「わざと」帶有陰謀語感，不適合感謝場合'],
        },
    },
    // ━━━ ふと (suddenly / unexpectedly) ━━━
    {
        id: 'g_n3_117', category: 'grammar', level: 'N3', tags: ['adverb', 'sudden'],
        stem: '___窓{まど}の外{そと}を見{み}たら、雪{ゆき}が降{ふ}っていた。',
        stemZh: '偶然看向窗外，發現在下雪。',
        options: [
            { text: 'ふと', reason: '正確！「ふと」表示「偶然」「無意中」。' },
            { text: 'わざと', reason: '「わざと」表示「故意」，語意相反。' },
            { text: 'つい', reason: '「つい」表示「忍不住」，語意稍有不同。' },
            { text: 'まさか', reason: '「まさか」表示「難道」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ふと」表示偶然、不經意地',
            analysis: '「ふと」用於表示沒有特別目的地，偶然做了某件事或想到了某件事。',
            comparisons: ['ふと：偶然/不經意（無目的）', 'つい：不自覺地（忍不住）', '急に：突然（出乎意料）'],
            commonMistakes: ['○ ふと窓の外を見た / × つい窓の外を見た → 「つい」帶有「忍不住」的語感'],
        },
    },
    // ━━━ どうしても (no matter what / by all means) ━━━
    {
        id: 'g_n3_118', category: 'grammar', level: 'N3', tags: ['adverb', 'insistence'],
        stem: 'この本{ほん}が___読{よ}みたいです。',
        stemZh: '無論如何都想讀這本書。',
        options: [
            { text: 'どうしても', reason: '正確！「どうしても」表示「無論如何」，強烈意志。' },
            { text: 'なかなか', reason: '「なかなか」搭配否定表示「怎麼也不」，此處為肯定句。' },
            { text: 'めったに', reason: '「めったに」搭配否定表示「很少」，此處為肯定句。' },
            { text: 'せいぜい', reason: '「せいぜい」表示「充其量」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「どうしても」表示強烈的意志或必然性',
            analysis: '「どうしても」有兩個用法：①無論如何都想（肯定）②怎麼也不能（否定）。此處搭配肯定表示強烈意願。',
            comparisons: ['どうしても読みたい：無論如何都想讀（肯定）', 'どうしてもわからない：怎麼也不懂（否定）'],
            commonMistakes: ['○ どうしても読みたい / × なかなか読みたい → 「なかなか」不用於肯定的願望表達'],
        },
    },
    // ━━━ なかなか～ない (hardly / not easily) ━━━
    {
        id: 'g_n3_119', category: 'grammar', level: 'N3', tags: ['adverb', 'difficulty'],
        stem: 'この問題{もんだい}は___解{と}けない。',
        stemZh: '這個問題怎麼也解不出來。',
        options: [
            { text: 'なかなか', reason: '正確！「なかなか〜ない」表示「怎麼也不」「遲遲不」。' },
            { text: 'めったに', reason: '「めったに」表示「很少」，強調頻率低。' },
            { text: '決{けっ}して', reason: '「決して」表示「絕不」，否定過於絕對。' },
            { text: 'どうしても', reason: '「どうしても」也可搭配否定，但語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なかなか〜ない」表示雖然努力但遲遲無法做到',
            analysis: '「なかなか」搭配否定，表示雖然想做或試圖做，但一直無法實現。',
            comparisons: ['なかなか〜ない：怎麼也不（努力但做不到）', '決して〜ない：絕不（斷然否定）', 'めったに〜ない：很少（頻率低）'],
            commonMistakes: ['○ なかなか解けない / × 決して解けない → 「決して」太絕對，「なかなか」表示困難'],
        },
    },
    // ━━━ めったに～ない (seldom / rarely) ━━━
    {
        id: 'g_n3_120', category: 'grammar', level: 'N3', tags: ['adverb', 'frequency'],
        stem: '彼{かれ}は___怒{おこ}らない。',
        stemZh: '他很少生氣。',
        options: [
            { text: 'めったに', reason: '正確！「めったに〜ない」表示「很少...」。' },
            { text: 'なかなか', reason: '「なかなか〜ない」表示「怎麼也不」，語感不同。' },
            { text: '決{けっ}して', reason: '「決して〜ない」表示「絕不」，太過絕對。' },
            { text: '別{べつ}に', reason: '「別に〜ない」表示「並不特別」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「めったに〜ない」表示極少發生',
            analysis: '「めったに」必須搭配否定，表示某事很少發生。',
            comparisons: ['めったに〜ない：很少（頻率極低）', 'あまり〜ない：不太（頻率較低）', '全然〜ない：完全不（頻率零）'],
            commonMistakes: ['○ めったに怒らない / × めったに怒る → 「めったに」必須搭配否定'],
        },
    },
    // ━━━ 決して～ない (never / absolutely not) ━━━
    {
        id: 'g_n3_121', category: 'grammar', level: 'N3', tags: ['adverb', 'absolute-negation'],
        stem: 'あの秘密{ひみつ}は___誰{だれ}にも言{い}わない。',
        stemZh: '那個秘密絕對不會跟任何人說。',
        options: [
            { text: '決{けっ}して', reason: '正確！「決して〜ない」表示「絕對不」。' },
            { text: 'めったに', reason: '「めったに」表示「很少」，否定程度不夠。' },
            { text: 'なかなか', reason: '「なかなか」表示「怎麼也不」，語感不同。' },
            { text: '別{べつ}に', reason: '「別に」表示「並不特別」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「決して〜ない」表示斷然的絕對否定',
            analysis: '「決して」搭配否定，表示說話者的堅定決心或絕對否定。',
            comparisons: ['決して〜ない：絕對不（最強否定決心）', 'めったに〜ない：很少（頻率）', '全然〜ない：完全不（程度）'],
            commonMistakes: ['○ 決して言わない / × 決して言う → 「決して」必須搭配否定'],
        },
    },
    // ━━━ 別に～ない (not particularly) ━━━
    {
        id: 'g_n3_122', category: 'grammar', level: 'N3', tags: ['adverb', 'indifference'],
        stem: '「何{なに}か食{た}べたい？」「___食{た}べたくない。」',
        stemZh: '「想吃什麼嗎？」「沒什麼特別想吃的。」',
        options: [
            { text: '別{べつ}に', reason: '正確！「別に〜ない」表示「沒什麼特別...」。' },
            { text: '決{けっ}して', reason: '「決して」表示「絕不」，語氣太強。' },
            { text: 'めったに', reason: '「めったに」表示「很少」，語意不合。' },
            { text: '全然{ぜんぜん}', reason: '「全然」表示「完全不」，語氣太強。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「別に〜ない」表示沒什麼特別的',
            analysis: '「別に」搭配否定，表示對某事沒有特別的感覺或需求。常用於口語回答。',
            comparisons: ['別に〜ない：沒什麼特別（無所謂）', '決して〜ない：絕不（強烈否定）'],
            commonMistakes: ['○ 別に食べたくない / × 決して食べたくない → 前者是無所謂，後者是堅決拒絕'],
        },
    },
    // ━━━ せいぜい (at most / at best) ━━━
    {
        id: 'g_n3_123', category: 'grammar', level: 'N3', tags: ['adverb', 'limit'],
        stem: 'この仕事{しごと}は___三日{みっか}で終{お}わるだろう。',
        stemZh: '這個工作充其量三天就能完成吧。',
        options: [
            { text: 'せいぜい', reason: '正確！「せいぜい」表示「充其量」「最多」。' },
            { text: 'さすがに', reason: '「さすがに」表示「不愧是」或「畢竟」，語意不合。' },
            { text: 'すでに', reason: '「すでに」表示「已經」，語意不合。' },
            { text: 'まさに', reason: '「まさに」表示「正是」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「せいぜい」表示上限或最大程度',
            analysis: '「せいぜい」表示就算最大限度也只有這樣，暗示數量或程度不高。',
            comparisons: ['せいぜい：充其量/最多（上限低）', '少なくとも：至少（下限）'],
            commonMistakes: ['○ せいぜい三日で終わる / × すでに三日で終わる → 「すでに」是「已經」，不是「充其量」'],
        },
    },
    // ━━━ なるべく (as much as possible) ━━━
    {
        id: 'g_n3_124', category: 'grammar', level: 'N3', tags: ['adverb', 'effort'],
        stem: '___早{はや}く返事{へんじ}をしてください。',
        stemZh: '請盡量早點回覆。',
        options: [
            { text: 'なるべく', reason: '正確！「なるべく」表示「盡量」「盡可能」。' },
            { text: 'せいぜい', reason: '「せいぜい」表示「充其量」，帶有限制感。' },
            { text: 'むしろ', reason: '「むしろ」表示「倒不如」，語意不合。' },
            { text: 'わざわざ', reason: '「わざわざ」表示「特地」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なるべく」表示在可能範圍內盡量',
            analysis: '「なるべく」用於請求或表示自己盡可能地做某事。',
            comparisons: ['なるべく：盡量', 'できるだけ：盡可能（同義）', 'せいぜい：充其量（有限度感）'],
            commonMistakes: ['○ なるべく早く / ○ できるだけ早く → 兩者可互換'],
        },
    },
    // ━━━ まさか (no way / surely not) ━━━
    {
        id: 'g_n3_125', category: 'grammar', level: 'N3', tags: ['adverb', 'disbelief'],
        stem: '___彼{かれ}が犯人{はんにん}だとは思{おも}わなかった。',
        stemZh: '沒想到他竟然是犯人。',
        options: [
            { text: 'まさか', reason: '正確！「まさか」表示「沒想到」「難道」。' },
            { text: 'やはり', reason: '「やはり」表示「果然」，語意相反。' },
            { text: 'さすが', reason: '「さすが」表示「不愧是」，語意不合。' },
            { text: 'せっかく', reason: '「せっかく」表示「好不容易」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「まさか」表示出乎意料、不敢相信',
            analysis: '「まさか」用於表示完全沒有預想到的事情，帶有震驚和不可置信的語氣。',
            comparisons: ['まさか：沒想到（不敢相信）', 'やはり：果然（如預料）'],
            commonMistakes: ['○ まさか犯人だとは / × やはり犯人だとは → 語意完全相反'],
        },
    },
    // ━━━ もしかしたら (perhaps / maybe) ━━━
    {
        id: 'g_n3_126', category: 'grammar', level: 'N3', tags: ['adverb', 'possibility'],
        stem: '___、明日{あした}は雨{あめ}かもしれない。',
        stemZh: '說不定明天會下雨。',
        options: [
            { text: 'もしかしたら', reason: '正確！「もしかしたら」表示「說不定」「也許」。' },
            { text: 'まさか', reason: '「まさか」表示「難道」，帶有不相信的語氣。' },
            { text: 'きっと', reason: '「きっと」表示「一定」，確信度更高。' },
            { text: '確{たし}かに', reason: '「確かに」表示「確實」，不表示推測。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「もしかしたら」表示不確定的推測',
            analysis: '「もしかしたら」用於提出可能性不高但存在的推測，常與「かもしれない」搭配。',
            comparisons: ['もしかしたら：說不定（低可能性推測）', 'きっと：一定（高確信推測）', 'たぶん：大概（中等推測）'],
            commonMistakes: ['○ もしかしたら雨かもしれない / × きっと雨かもしれない → 「きっと」確信度太高，不搭配「かもしれない」'],
        },
    },
    // ━━━ 一方だ (keep ~ing / more and more) ━━━
    {
        id: 'g_n3_127', category: 'grammar', level: 'N3', tags: ['change', 'continuous'],
        stem: '物価{ぶっか}は上{あ}がる___で、生活{せいかつ}が苦{くる}しくなっている。',
        stemZh: '物價不斷上漲，生活越來越艱難。',
        options: [
            { text: '一方{いっぽう}', reason: '正確！「一方だ」表示「越來越...」持續單方向變化。' },
            { text: 'ばかり', reason: '「ばかり」也可表示持續增加，但語法不同。' },
            { text: 'ところ', reason: '「ところ」不表示持續變化。' },
            { text: 'かぎり', reason: '「かぎり」表示「只要」或「範圍」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「V る＋一方だ」表示持續向一個方向變化',
            analysis: '「一方だ」用於表示某種趨勢持續不斷地向一個方向發展，多用於負面變化。',
            comparisons: ['上がる一方だ：不斷上漲', '減る一方だ：不斷減少'],
            commonMistakes: ['○ 上がる一方だ / × 上がるばかりだ → 「ばかりだ」語法為「上がってばかりだ」'],
        },
    },
    // ━━━ 上で (after / upon / in the process of) ━━━
    {
        id: 'g_n3_128', category: 'grammar', level: 'N3', tags: ['sequence', 'basis'],
        stem: 'よく考{かんが}えた___、返事{へんじ}をします。',
        stemZh: '仔細考慮之後再回覆。',
        options: [
            { text: '上{うえ}で', reason: '正確！「た上で」表示在做完某事的基礎上再做另一件事。' },
            { text: '結果{けっか}', reason: '「結果」表示做完後的結果，語感不同。' },
            { text: '後{あと}で', reason: '「後で」也表示「之後」，但「上で」更強調「以...為基礎」。' },
            { text: 'ついでに', reason: '「ついでに」表示「順便」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「た上で」表示在做完某事之後、以此為基礎',
            analysis: '「た上で」強調前面的動作是後面動作的前提或基礎。比「後で」更正式。',
            comparisons: ['考えた上で返事する：考慮過後回覆（以考慮為基礎）', '考えた後で返事する：考慮後回覆（時間順序）'],
            commonMistakes: ['○ 考えた上で / × 考えた結果 → 「結果」是結論，「上で」是在基礎上'],
        },
    },
    // ━━━ 上に (on top of / moreover) ━━━
    {
        id: 'g_n3_129', category: 'grammar', level: 'N3', tags: ['addition', 'moreover'],
        stem: '彼{かれ}は頭{あたま}がいい___、スポーツもできる。',
        stemZh: '他不僅聰明，而且運動也很厲害。',
        options: [
            { text: '上{うえ}に', reason: '正確！「上に」表示「不僅...而且...」追加。' },
            { text: '上{うえ}で', reason: '「上で」表示「在...基礎上」或「在...之後」，語意不同。' },
            { text: 'ために', reason: '「ために」表示原因或目的，語意不合。' },
            { text: 'わりに', reason: '「わりに」表示「以...而言」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「上に」表示在已有基礎上追加',
            analysis: '「上に」用於表示除了前述之外，還有更多的優點或缺點。常用於同方向的追加。',
            comparisons: ['上に：不僅...而且（追加同方向特質）', '上で：在...基礎上/之後（前提基礎）'],
            commonMistakes: ['○ 頭がいい上にスポーツもできる / × 頭がいい上でスポーツもできる → 「上で」是前提，「上に」是追加'],
        },
    },
    // ━━━ は別として (setting aside / apart from) ━━━
    {
        id: 'g_n3_130', category: 'grammar', level: 'N3', tags: ['exception', 'aside'],
        stem: '値段{ねだん}___、このレストランの料理{りょうり}は最高{さいこう}だ。',
        stemZh: '姑且不論價格，這家餐廳的料理是最棒的。',
        options: [
            { text: 'は別{べつ}として', reason: '正確！「は別として」表示「姑且不論」暫時擱置。' },
            { text: 'はもちろん', reason: '「はもちろん」表示「不用說也」，語意不同。' },
            { text: 'はともかく', reason: '「はともかく」也表示「暫且不論」，意思相近。' },
            { text: 'に関{かん}して', reason: '「に関して」表示「關於」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「は別として」表示暫時把某因素擱置一邊',
            analysis: '「は別として」用於表示暫且不考慮某個因素，先評論其他方面。',
            comparisons: ['は別として：姑且不論（暫時擱置）', 'はともかく：暫且不管（同義）', 'はさておき：先不談（同義偏書面）'],
            commonMistakes: ['○ 値段は別として / ○ 値段はともかく → 兩者可互換'],
        },
    },
    // ━━━ はもちろん (not to mention / of course) ━━━
    {
        id: 'g_n3_131', category: 'grammar', level: 'N3', tags: ['addition', 'emphasis'],
        stem: '彼女{かのじょ}は日本語{にほんご}___、中国語{ちゅうごくご}も話{はな}せる。',
        stemZh: '她不用說日語了，中文也會說。',
        options: [
            { text: 'はもちろん', reason: '正確！「はもちろん」表示「不用說...也」。' },
            { text: 'は別{べつ}として', reason: '「は別として」表示「姑且不論」，語意不同。' },
            { text: 'ばかりでなく', reason: '「ばかりでなく」也表示「不僅」，但「はもちろん」更強調理所當然。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對...」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「はもちろん」表示前者理所當然，後者也一樣',
            analysis: '「Aはもちろん、Bも」表示A是理所當然的，而B也同樣具備，用於強調範圍更廣。',
            comparisons: ['はもちろん：不用說（理所當然的基礎上追加）', 'ばかりでなく：不僅（一般追加）', 'だけでなく：不僅（一般追加）'],
            commonMistakes: ['○ 日本語はもちろん中国語も / ○ 日本語ばかりでなく中国語も → 前者更強調日語是理所當然的'],
        },
    },
    // ━━━ しかない (have no choice but) ━━━
    {
        id: 'g_n3_132', category: 'grammar', level: 'N3', tags: ['limitation', 'no-choice'],
        stem: '電車{でんしゃ}がないから、歩{ある}いて帰{かえ}る___。',
        stemZh: '因為沒有電車了，只能走路回去。',
        options: [
            { text: 'しかない', reason: '正確！「しかない」表示「只能...」沒有其他選擇。' },
            { text: 'わけにはいかない', reason: '「わけにはいかない」表示「不能」，語意不同。' },
            { text: 'ことはない', reason: '「ことはない」表示「不必」，語意相反。' },
            { text: 'べきではない', reason: '「べきではない」表示「不應該」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「しかない」表示只有一個選擇',
            analysis: '「V るしかない」表示除此之外沒有其他辦法，只能這樣做。',
            comparisons: ['しかない：只能...（無其他選擇）', 'ほかない：只好...（同義，更正式）'],
            commonMistakes: ['○ 歩いて帰るしかない / × 歩いて帰ることはない → 「ことはない」是「不必」，語意相反'],
        },
    },
    // ━━━ きり (only / since) ━━━
    {
        id: 'g_n3_133', category: 'grammar', level: 'N3', tags: ['limitation', 'since'],
        stem: '彼{かれ}とは一度{いちど}会{あ}った___、連絡{れんらく}がない。',
        stemZh: '跟他見了一次面之後，就沒有聯絡了。',
        options: [
            { text: 'きり', reason: '正確！「たきり」表示「自從...之後就一直沒有」。' },
            { text: 'ばかり', reason: '「ばかり」表示「光是」或「剛剛」，語意不同。' },
            { text: 'だけ', reason: '「だけ」表示「只有」，但不帶「之後就沒有」的語感。' },
            { text: 'まで', reason: '「まで」表示「到...為止」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たきり」表示自從某事之後就再也沒有',
            analysis: '「V たきり＋否定」表示做了某事之後，一直維持那個狀態沒有變化。',
            comparisons: ['会ったきり連絡がない：見了一次就沒聯絡了', '出かけたきり帰ってこない：出去後就沒回來'],
            commonMistakes: ['○ 会ったきり連絡がない / × 会ったばかり連絡がない → 「ばかり」不帶「之後就沒有」的語感'],
        },
    },
    // ━━━ ないことはない (it's not that... can't) ━━━
    {
        id: 'g_n3_134', category: 'grammar', level: 'N3', tags: ['double-negation', 'possibility'],
        stem: '辛{から}い物{もの}が食{た}べられ___が、あまり得意{とくい}ではない。',
        stemZh: '辣的東西不是不能吃，但不太擅長。',
        options: [
            { text: 'ないことはない', reason: '正確！「ないことはない」是雙重否定，表示「不是不能」。' },
            { text: 'なくはない', reason: '「なくはない」也是雙重否定，此處考「ないことはない」。' },
            { text: 'ないわけではない', reason: '「ないわけではない」也可以，但語法搭配不同。' },
            { text: 'ないはずがない', reason: '「ないはずがない」表示「不可能不」，語氣太強。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ないことはない」用雙重否定表示「並非不能」',
            analysis: '「ないことはない」是委婉的肯定表達，承認可能性但暗示有困難或不太願意。',
            comparisons: ['ないことはない：不是不能（委婉肯定）', 'ないわけではない：並非不（部分肯定）'],
            commonMistakes: ['○ 食べられないことはない / × 食べられないはずがない → 前者委婉，後者是「不可能不能吃」'],
        },
    },
    // ━━━ とみえる / とみえて (it seems that) ━━━
    {
        id: 'g_n3_135', category: 'grammar', level: 'N3', tags: ['appearance', 'inference'],
        stem: '疲{つか}れている___、彼{かれ}はソファで寝{ね}てしまった。',
        stemZh: '看來他累了，在沙發上睡著了。',
        options: [
            { text: 'とみえて', reason: '正確！「とみえて」表示從觀察推斷「看來是...」。' },
            { text: 'ように', reason: '「ように」表示「像...一樣」，語法搭配不同。' },
            { text: 'みたいで', reason: '「みたいで」也表示「好像」，但「とみえて」更書面。' },
            { text: 'そうで', reason: '「疲れているそうで」表示傳聞，不是觀察推斷。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とみえて」表示從觀察做出的推斷',
            analysis: '「とみえて」用於從看到的狀況推斷原因或理由，相當於「看來是...所以」。',
            comparisons: ['とみえて：看來（觀察推斷）', 'ようで：好像（推測）', 'そうで：聽說（傳聞）'],
            commonMistakes: ['○ 疲れているとみえて / × 疲れているそうで → 「そう」是傳聞，「とみえる」是觀察推斷'],
        },
    },
    // ━━━ てはじめて (only after / not until) ━━━
    {
        id: 'g_n3_136', category: 'grammar', level: 'N3', tags: ['discovery', 'realization'],
        stem: '親{おや}になっ___、親{おや}のありがたさがわかった。',
        stemZh: '直到當了父母之後，才明白父母的偉大。',
        options: [
            { text: 'てはじめて', reason: '正確！「てはじめて」表示「直到...才」。' },
            { text: 'てから', reason: '「てから」表示「做了...之後」，不強調「才明白」。' },
            { text: 'た上{うえ}で', reason: '「た上で」表示「在...基礎上」，語意不同。' },
            { text: 'たとたん', reason: '「たとたん」表示「一...就」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てはじめて」表示經歷某事後才第一次明白或感受',
            analysis: '「てはじめて」用於表示直到做了某件事之後，才第一次理解或體會到某事。',
            comparisons: ['てはじめてわかった：做了才明白（發現/體悟）', 'てからわかった：做了之後明白了（時間順序）'],
            commonMistakes: ['○ 親になってはじめてわかった / × 親になってからわかった → 前者強調「才」的領悟感'],
        },
    },
    // ━━━ てからでないと (unless...first) ━━━
    {
        id: 'g_n3_137', category: 'grammar', level: 'N3', tags: ['prerequisite', 'condition'],
        stem: '説明書{せつめいしょ}を読{よ}ん___、この機械{きかい}は使{つか}えない。',
        stemZh: '不先看說明書的話，這台機器是不能用的。',
        options: [
            { text: 'でからでないと', reason: '正確！「てからでないと」表示「不先做...就不能」。' },
            { text: 'でからは', reason: '「てからは」表示「自從...以來」，語意不同。' },
            { text: 'てはじめて', reason: '「てはじめて」表示「直到...才」，語感不同。' },
            { text: 'た上{うえ}で', reason: '「た上で」表示「做了之後再」，不帶否定條件。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てからでないと〜ない」表示不先做A就無法做B',
            analysis: '「てからでないと」強調A是B的必要前提，不先做A就無法進行B。',
            comparisons: ['てからでないと：不先...就不能（必要前提）', 'てからは：自從...以來（時間起點）'],
            commonMistakes: ['○ 読んでからでないと使えない / × 読んでからは使えない → 「てからは」是「自從之後」'],
        },
    },
    // ━━━ てしょうがない / てしかたがない (can't help it) ━━━
    {
        id: 'g_n3_138', category: 'grammar', level: 'N3', tags: ['uncontrollable', 'extent'],
        stem: '夏{なつ}は暑{あつ}く___。',
        stemZh: '夏天熱得受不了。',
        options: [
            { text: 'てしょうがない', reason: '正確！「てしょうがない」表示「...得不得了」。' },
            { text: 'てたまらない', reason: '「てたまらない」也可以表示「...得受不了」，同義。' },
            { text: 'てならない', reason: '「てならない」也表示「非常」，但更書面。' },
            { text: 'てばかりいる', reason: '「てばかりいる」表示「老是在做」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てしょうがない」表示程度極深、無法控制',
            analysis: '「てしょうがない」用於表示某種感覺或狀態達到無法控制的程度。口語形式。',
            comparisons: ['てしょうがない：...得不得了（口語）', 'てしかたがない：...得沒辦法（稍正式）', 'てたまらない：...得受不了（同義）'],
            commonMistakes: ['○ 暑くてしょうがない / ○ 暑くてたまらない → 兩者可互換'],
        },
    },
    // ━━━ ても構わない (it doesn't matter even if) ━━━
    {
        id: 'g_n3_139', category: 'grammar', level: 'N3', tags: ['permission', 'indifference'],
        stem: '遅{おく}れ___から、慌{あわ}てなくていい。',
        stemZh: '晚一點也沒關係，所以不用著急。',
        options: [
            { text: 'ても構{かま}わない', reason: '正確！「ても構わない」表示「即使...也沒關係」。' },
            { text: 'てもいい', reason: '「てもいい」也表示「可以」，但語氣較弱。' },
            { text: 'てはいけない', reason: '「てはいけない」表示「不可以」，語意相反。' },
            { text: 'てしょうがない', reason: '「てしょうがない」表示「受不了」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ても構わない」表示對某事不介意',
            analysis: '「ても構わない」表示說話者對某個可能的情況不在意，表示允許或無所謂。',
            comparisons: ['ても構わない：...也沒關係（不介意）', 'てもいい：可以...（允許）', 'ても差し支えない：...也無妨（最正式）'],
            commonMistakes: ['○ 遅れても構わない / ○ 遅れてもいい → 前者語氣更強，表示完全不介意'],
        },
    },
    // ━━━ ても始まらない (even if...it's no use) ━━━
    {
        id: 'g_n3_140', category: 'grammar', level: 'N3', tags: ['futility', 'pointless'],
        stem: '今{いま}さら後悔{こうかい}し___。やり直{なお}すしかない。',
        stemZh: '事到如今後悔也沒用。只能重做。',
        options: [
            { text: 'ても始{はじ}まらない', reason: '正確！「ても始まらない」表示「即使...也沒用」。' },
            { text: 'てもしょうがない', reason: '「てもしょうがない」也表示「即使...也沒辦法」，意思相近。' },
            { text: 'ても構{かま}わない', reason: '「ても構わない」表示「也沒關係」，語意不同。' },
            { text: 'てたまらない', reason: '「てたまらない」表示「...得受不了」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ても始まらない」表示做了也毫無意義',
            analysis: '「ても始まらない」用於勸告對方停止做無意義的事，表示那樣做也解決不了問題。',
            comparisons: ['ても始まらない：做了也沒用（無法開始/解決）', 'てもしょうがない：做了也沒辦法（無法改變）'],
            commonMistakes: ['○ 後悔しても始まらない / ○ 後悔してもしょうがない → 兩者可互換'],
        },
    },
    // ━━━ ている場合じゃない (it's not the time to) ━━━
    {
        id: 'g_n3_141', category: 'grammar', level: 'N3', tags: ['urgency', 'scolding'],
        stem: 'テレビを見{み}___！試験{しけん}は明日{あした}だよ。',
        stemZh: '現在不是看電視的時候！明天就考試了。',
        options: [
            { text: 'ている場合{ばあい}じゃない', reason: '正確！「ている場合じゃない」表示「現在不是做...的時候」。' },
            { text: 'てばかりいる', reason: '「てばかりいる」表示「老是在做」，語意不同。' },
            { text: 'ても始{はじ}まらない', reason: '「ても始まらない」表示「做了也沒用」，語意不同。' },
            { text: 'てしょうがない', reason: '「てしょうがない」表示「受不了」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ている場合じゃない」表示緊急時不應該做某事',
            analysis: '「ている場合じゃない」用於責備或催促對方在緊急或重要時刻不該做無關的事。',
            comparisons: ['ている場合じゃない：不是做...的時候（催促/責備）', 'てばかりいる：老是在做...（批評習慣）'],
            commonMistakes: ['○ テレビを見ている場合じゃない / × テレビを見てばかりいる → 前者強調緊急性，後者批評習慣'],
        },
    },
    // ━━━ てばかりいる (always doing nothing but) ━━━
    {
        id: 'g_n3_142', category: 'grammar', level: 'N3', tags: ['habit', 'criticism'],
        stem: '彼{かれ}はゲーム___。勉強{べんきょう}もしなさい。',
        stemZh: '他老是在玩遊戲。也學習一下啊。',
        options: [
            { text: 'をしてばかりいる', reason: '正確！「てばかりいる」表示「老是在做...」。' },
            { text: 'をしている場合{ばあい}じゃない', reason: '「ている場合じゃない」表示「不是做...的時候」，語意稍有不同。' },
            { text: 'をしがちだ', reason: '「がち」表示「容易」傾向，不如「てばかりいる」強調頻繁。' },
            { text: 'をしっぱなしだ', reason: '「しっぱなし」表示「一直放著不管」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てばかりいる」表示反覆做同一件事（帶批評）',
            analysis: '「てばかりいる」用於批評某人老是只做一件事而不做其他應做的事。',
            comparisons: ['てばかりいる：老是在做（批評反覆行為）', 'ばかりで：光是...（批評不做其他事）'],
            commonMistakes: ['○ ゲームをしてばかりいる / × ゲームばかりしている → 兩者意思相同，語序不同'],
        },
    },
    // ━━━ てごらん (try doing) ━━━
    {
        id: 'g_n3_143', category: 'grammar', level: 'N3', tags: ['suggestion', 'gentle-command'],
        stem: 'この料理{りょうり}を食{た}べ___。美味{おい}しいよ。',
        stemZh: '嚐嚐看這道菜。很好吃喔。',
        options: [
            { text: 'てごらん', reason: '正確！「てごらん」表示溫和的勸告「試試看」。' },
            { text: 'てみて', reason: '「てみて」也表示「試試看」，語氣較中性。' },
            { text: 'なさい', reason: '「食べなさい」是命令形，語氣較強。' },
            { text: 'てください', reason: '「てください」是禮貌的請求，語氣不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てごらん」是溫和的勸告，常用於長輩對晚輩',
            analysis: '「てごらん」是「てみなさい」的溫和形式，常用於父母對孩子或老師對學生。',
            comparisons: ['てごらん：試試看（溫和勸告）', 'てみて：試試看（中性）', 'てみなさい：試試看（命令）'],
            commonMistakes: ['○ 食べてごらん / ○ 食べてみて → 前者更溫和親切'],
        },
    },
    // ━━━ て済む (it's enough / it's settled with) ━━━
    {
        id: 'g_n3_144', category: 'grammar', level: 'N3', tags: ['sufficiency', 'resolution'],
        stem: '謝{あやま}っ___問題{もんだい}ではない。',
        stemZh: '不是道歉就能解決的問題。',
        options: [
            { text: 'て済{す}む', reason: '正確！「て済む」表示「做了...就能解決」，此處為否定。' },
            { text: 'ても構{かま}わない', reason: '「ても構わない」表示「也沒關係」，語意不同。' },
            { text: 'てしまう', reason: '「てしまう」表示「不小心做了」或「完成了」，語意不同。' },
            { text: 'ておく', reason: '「ておく」表示「事先做好」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「て済む」表示某行為足以解決問題',
            analysis: '「て済む」表示只需做某事就能了結事情。否定形「て済む問題ではない」表示事情沒那麼簡單。',
            comparisons: ['て済む：做了就解決（足夠）', 'て済まない：做了也解決不了（不足夠）'],
            commonMistakes: ['○ 謝って済む問題ではない / × 謝っても構わない問題ではない → 語意不同'],
        },
    },
    // ━━━ 際に (on the occasion of) ━━━
    {
        id: 'g_n3_145', category: 'grammar', level: 'N3', tags: ['time', 'formal-occasion'],
        stem: 'お帰{かえ}りの___、忘{わす}れ物{もの}がないかご確認{かくにん}ください。',
        stemZh: '離開時，請確認是否有遺忘物品。',
        options: [
            { text: '際{さい}に', reason: '正確！「際に」是「時に」的正式用法，表示「在...之時」。' },
            { text: '途中{とちゅう}で', reason: '「途中で」表示「在途中」，語意不同。' },
            { text: 'ついでに', reason: '「ついでに」表示「順便」，語意不同。' },
            { text: 'うちに', reason: '「うちに」表示「趁著」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「際に」是「時に」的正式書面表達',
            analysis: '「際に」常用於正式場合如廣播、告示、商務信件等，表示「在...的時候」。',
            comparisons: ['際に：在...之時（正式）', '時に：在...的時候（一般）'],
            commonMistakes: ['○ お帰りの際に / × お帰りの時に → 兩者皆可，「際に」更正式'],
        },
    },
    // ━━━ ぶりに (for the first time in) ━━━
    {
        id: 'g_n3_146', category: 'grammar', level: 'N3', tags: ['time', 'interval'],
        stem: '3年{ねん}___、故郷{こきょう}に帰{かえ}った。',
        stemZh: '時隔三年，回到了故鄉。',
        options: [
            { text: 'ぶりに', reason: '正確！「ぶりに」表示「時隔...」。' },
            { text: 'ごとに', reason: '「ごとに」表示「每隔...」，語意不同。' },
            { text: 'おきに', reason: '「おきに」表示「每隔...」，語意不同。' },
            { text: '以来{いらい}', reason: '「以来」表示「自從...以來」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ぶりに」表示「時隔...之後再次」',
            analysis: '「〜ぶりに」接在時間詞後，表示隔了一段時間後再次做某事。',
            comparisons: ['3年ぶりに帰った：時隔三年回去了', '久しぶりに会った：好久沒見了（再次見面）'],
            commonMistakes: ['○ 3年ぶりに / × 3年ごとに → 「ごとに」是每隔三年（定期），「ぶりに」是隔了三年（一次性）'],
        },
    },
    // ━━━ 中 (during / in the middle of) ━━━
    {
        id: 'g_n3_147', category: 'grammar', level: 'N3', tags: ['time', 'during'],
        stem: '工事{こうじ}___のため、通行止{つうこうど}めです。',
        stemZh: '因為正在施工，禁止通行。',
        options: [
            { text: '中{ちゅう}', reason: '正確！「中」表示「正在...之中」。' },
            { text: '最中{さいちゅう}', reason: '「最中」也表示「正在之中」但強調突發，此處為告示用語。' },
            { text: '途中{とちゅう}', reason: '「途中」表示「中途」，不如「中」適合告示。' },
            { text: '間{あいだ}', reason: '「間」表示「期間」，語法不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「中」表示某事進行中的狀態',
            analysis: '「名詞＋中」表示正在進行某事。常見於告示牌、標示等。讀音為「ちゅう」。',
            comparisons: ['工事中：施工中', '営業中：營業中', '準備中：準備中'],
            commonMistakes: ['○ 工事中 / × 工事最中 → 告示用語固定使用「中」'],
        },
    },
    // ━━━ 一度に (at once / all at once) ━━━
    {
        id: 'g_n3_148', category: 'grammar', level: 'N3', tags: ['manner', 'simultaneous'],
        stem: 'そんなにたくさんの仕事{しごと}を___にこなすのは無理{むり}だ。',
        stemZh: '一次處理那麼多工作是不可能的。',
        options: [
            { text: '一度{いちど}', reason: '正確！「一度に」表示「同時」「一次」。' },
            { text: '一方{いっぽう}', reason: '「一方」表示「一方面」或「越來越」，語意不合。' },
            { text: '一体{いったい}', reason: '「一体」表示「到底」，語意不合。' },
            { text: '一番{いちばん}', reason: '「一番」表示「最」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「一度に」表示同時做多件事',
            analysis: '「一度に」用於表示在同一時間同時進行多件事情。',
            comparisons: ['一度に：同時/一次（同一時間）', '一気に：一口氣（不停歇地）'],
            commonMistakes: ['○ 一度にこなすのは無理 / × 一体にこなすのは無理 → 「一体」是「到底」'],
        },
    },
    // ━━━ 一体 (on earth / what in the world) ━━━
    {
        id: 'g_n3_149', category: 'grammar', level: 'N3', tags: ['adverb', 'emphasis-question'],
        stem: '___何{なに}が起{お}きたんですか。',
        stemZh: '到底發生了什麼事？',
        options: [
            { text: '一体{いったい}', reason: '正確！「一体」用於疑問句中加強語氣「到底」。' },
            { text: '一度{いちど}', reason: '「一度」表示「一次」或「一旦」，語意不同。' },
            { text: '一方{いっぽう}', reason: '「一方」表示「一方面」，語意不合。' },
            { text: '一番{いちばん}', reason: '「一番」表示「最」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「一体」在疑問句中加強語氣',
            analysis: '「一体」用於疑問句中，表示說話者對事情感到困惑或震驚，加強疑問語氣。',
            comparisons: ['一体何が：到底什麼（強調疑問）', '何が：什麼（普通疑問）'],
            commonMistakes: ['○ 一体何が起きた / × 一度何が起きた → 「一度」不用於加強疑問'],
        },
    },
    // ━━━ つもりだった (intended to / thought) ━━━
    {
        id: 'g_n3_150', category: 'grammar', level: 'N3', tags: ['intention', 'past'],
        stem: '早{はや}く寝{ね}る___のに、つい夜更{よふ}かししてしまった。',
        stemZh: '本來打算早睡的，結果不小心熬夜了。',
        options: [
            { text: 'つもりだった', reason: '正確！「つもりだった」表示「原本打算做...」但結果不同。' },
            { text: 'つもりだ', reason: '「つもりだ」表示現在的打算，不表示過去的落空計畫。' },
            { text: 'はずだった', reason: '「はずだった」表示「本應...」但語感偏向推測。' },
            { text: 'ことにした', reason: '「ことにした」表示「決定了」，不帶落空感。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「つもりだった」表示過去的打算沒有實現',
            analysis: '「つもりだった」用於表示原本打算做某事，但實際上沒有做到或結果不同。帶有遺憾的語感。',
            comparisons: ['つもりだった：原打算...（但沒實現）', 'つもりだ：打算...（目前計畫）', 'はずだった：本應...（預期落空）'],
            commonMistakes: ['○ 寝るつもりだった / × 寝るつもりだ → 前者是落空的計畫，後者是目前的打算'],
        },
    },
    // ━━━ つもりで (with the intention of) ━━━
    {
        id: 'g_n3_151', category: 'grammar', level: 'N3', tags: ['intention', 'attitude'],
        stem: '旅行{りょこう}に行{い}った___、美味{おい}しいものをたくさん食{た}べた。',
        stemZh: '抱著去旅行的心情，吃了很多好吃的。',
        options: [
            { text: 'つもりで', reason: '正確！「つもりで」表示「帶著...的心態」。' },
            { text: 'つもりだった', reason: '「つもりだった」表示「原打算」但沒做到，語意不同。' },
            { text: 'ために', reason: '「ために」表示目的，語感不同。' },
            { text: 'として', reason: '「として」表示「作為」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「つもりで」表示帶著某種心態或假設去做事',
            analysis: '「つもりで」可以表示①帶著某心態做事②假裝是某種情況。',
            comparisons: ['つもりで：帶著...的心情（態度）', 'つもりだった：原打算（落空）', 'つもりだ：打算（計畫）'],
            commonMistakes: ['○ 旅行に行ったつもりで / × 旅行に行ったつもりだった → 「つもりで」是心態，「つもりだった」是落空計畫'],
        },
    },
    // ━━━ っけ (wasn't it? / what was it again?) ━━━
    {
        id: 'g_n3_152', category: 'grammar', level: 'N3', tags: ['confirmation', 'memory'],
        stem: '明日{あした}の会議{かいぎ}は何時{なんじ}から___。',
        stemZh: '明天的會議是幾點來著？',
        options: [
            { text: 'だっけ', reason: '正確！「っけ」表示回憶或確認「...來著？」。' },
            { text: 'だろう', reason: '「だろう」表示推測「大概是」，不是回憶確認。' },
            { text: 'かな', reason: '「かな」表示自言自語「...嗎」，語感不同。' },
            { text: 'でしょう', reason: '「でしょう」表示推測或確認，但語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「っけ」表示想確認記憶中模糊的事',
            analysis: '「っけ」用於想不太起來的時候，向自己或對方確認記憶中的內容。口語表達。',
            comparisons: ['だっけ：...來著？（確認模糊記憶）', 'だろう：大概是...吧（推測）'],
            commonMistakes: ['○ 何時からだっけ / × 何時からだろう → 前者確認記憶，後者是推測'],
        },
    },
    // ━━━ か何か (or something / something like) ━━━
    {
        id: 'g_n3_153', category: 'grammar', level: 'N3', tags: ['vague', 'approximation'],
        stem: 'お茶{ちゃ}___飲{の}みませんか。',
        stemZh: '要不要喝杯茶還是什麼的？',
        options: [
            { text: 'か何{なに}か', reason: '正確！「か何か」表示「...之類的」。' },
            { text: 'とか', reason: '「とか」也表示「之類的」，但口語性更強。' },
            { text: 'など', reason: '「など」表示「等等」，但語感較正式。' },
            { text: 'ばかり', reason: '「ばかり」表示「光是」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「か何か」用於模糊提議或舉例',
            analysis: '「か何か」用於不確定具體什麼，給出一個模糊的提議。',
            comparisons: ['か何か：...之類的（模糊提議）', 'とか：...之類的（口語列舉）', 'など：...等等（正式列舉）'],
            commonMistakes: ['○ お茶か何か / ○ お茶とか → 兩者都表示模糊提議，「か何か」稍正式'],
        },
    },
    // ━━━ なんか / なんて / など (things like / such as) ━━━
    {
        id: 'g_n3_154', category: 'grammar', level: 'N3', tags: ['belittling', 'humble'],
        stem: '私{わたし}___には、そんな難{むずか}しいことはできません。',
        stemZh: '像我這樣的人做不了那麼難的事。',
        options: [
            { text: 'なんか', reason: '正確！「なんか」表示自謙，「像我這種人」。' },
            { text: 'こそ', reason: '「こそ」表示強調「正是」，語意相反。' },
            { text: 'さえ', reason: '「さえ」表示「連...都」，語感不同。' },
            { text: 'だけ', reason: '「だけ」表示「只有」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なんか」用於自謙或輕視',
            analysis: '「なんか」（=なんて=など）用於對自己或某事物表示謙虛或輕視。',
            comparisons: ['私なんか：像我這種人（自謙）', '勉強なんか：讀書什麼的（輕視）'],
            commonMistakes: ['○ 私なんかには / × 私こそには → 「こそ」是強調，不是自謙'],
        },
    },
    // ━━━ そうもない / そうにない (unlikely to) ━━━
    {
        id: 'g_n3_155', category: 'grammar', level: 'N3', tags: ['unlikelihood', 'appearance'],
        stem: 'この仕事{しごと}は今日中{きょうじゅう}に終{お}わり___。',
        stemZh: '這工作看起來今天之內完不了。',
        options: [
            { text: 'そうもない', reason: '正確！「そうもない」表示「看起來不可能...」。' },
            { text: 'そうだ', reason: '「そうだ」表示「看起來要...」，語意相反。' },
            { text: 'はずがない', reason: '「はずがない」表示「不應該」，語感不同。' },
            { text: 'わけがない', reason: '「わけがない」表示「不可能」，語感更強烈。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「そうもない」表示從目前狀況看不太可能',
            analysis: '「V ます形＋そうもない」表示從目前的狀況判斷，某事看起來不太可能實現。',
            comparisons: ['終わりそうもない：看來不會完（從現狀判斷）', '終わりそうだ：看來快完了（從現狀判斷）'],
            commonMistakes: ['○ 終わりそうもない / × 終わるはずがない → 前者是從現狀推斷，後者是道理上否定'],
        },
    },
    // ━━━ ような気がする (have a feeling that) ━━━
    {
        id: 'g_n3_156', category: 'grammar', level: 'N3', tags: ['feeling', 'intuition'],
        stem: 'どこかでこの人{ひと}に会{あ}った___。',
        stemZh: '覺得好像在哪裡見過這個人。',
        options: [
            { text: 'ような気{き}がする', reason: '正確！「ような気がする」表示模糊的感覺。' },
            { text: 'ように見{み}える', reason: '「ように見える」表示「看起來像」，強調外觀。' },
            { text: 'に違{ちが}いない', reason: '「に違いない」表示「一定是」，確信度太高。' },
            { text: 'らしい', reason: '「らしい」表示「好像」（傳聞推測），語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ような気がする」表示模糊不確定的感覺',
            analysis: '「ような気がする」表示說話者有一種不太確定的感覺或直覺。',
            comparisons: ['ような気がする：覺得好像...（模糊直覺）', 'ように見える：看起來像...（外觀判斷）'],
            commonMistakes: ['○ 会ったような気がする / × 会ったに違いない → 前者模糊，後者確定'],
        },
    },
    // ━━━ ようがない / ようもない (there's no way to) ━━━
    {
        id: 'g_n3_157', category: 'grammar', level: 'N3', tags: ['impossibility', 'method'],
        stem: '住所{じゅうしょ}がわからないので、連絡{れんらく}の取{と}り___。',
        stemZh: '因為不知道地址，所以沒辦法聯絡。',
        options: [
            { text: 'ようがない', reason: '正確！「ようがない」表示「沒有辦法做」。' },
            { text: 'わけがない', reason: '「わけがない」表示「不可能」，但不強調方法。' },
            { text: 'はずがない', reason: '「はずがない」表示「不應該」，語感不同。' },
            { text: 'ことはない', reason: '「ことはない」表示「不必」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようがない」表示找不到做某事的方法',
            analysis: '「V ます形＋ようがない」表示想做但找不到方法，無計可施。',
            comparisons: ['連絡の取りようがない：無法取得聯絡（找不到方法）', '連絡するわけがない：不可能聯絡（道理上否定）'],
            commonMistakes: ['○ 取りようがない / × 取るわけがない → 前者是方法不存在，後者是道理上不可能'],
        },
    },
    // ━━━ 的 (adjectival suffix) ━━━
    {
        id: 'g_n3_158', category: 'grammar', level: 'N3', tags: ['suffix', 'adjective'],
        stem: 'この問題{もんだい}は世界{せかい}___な規模{きぼ}で考{かんが}える必要{ひつよう}がある。',
        stemZh: '這個問題需要從世界性的規模來思考。',
        options: [
            { text: '的{てき}', reason: '正確！「的」將名詞變成形容詞「...的」。' },
            { text: '向{む}き', reason: '「向き」表示「適合」，語意不合。' },
            { text: '向{む}け', reason: '「向け」表示「面向」，語意不合。' },
            { text: '中{ちゅう}', reason: '「中」表示「期間」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「的」將名詞轉化為形容詞',
            analysis: '「名詞＋的」構成な形容詞，相當於中文的「...的」「...性的」。',
            comparisons: ['世界的：世界性的', '個人的：個人的', '歴史的：歷史性的'],
            commonMistakes: ['○ 世界的な規模 / × 世界な規模 → 必須加「的」才能構成形容詞'],
        },
    },
    // ━━━ ずつ (each / little by little) ━━━
    {
        id: 'g_n3_159', category: 'grammar', level: 'N3', tags: ['distribution', 'gradual'],
        stem: '毎日{まいにち}少{すこ}し___日本語{にほんご}が上手{じょうず}になっている。',
        stemZh: '每天一點一點地日語越來越好。',
        options: [
            { text: 'ずつ', reason: '正確！「少しずつ」表示「一點一點地」漸進變化。' },
            { text: 'だけ', reason: '「だけ」表示「只有」，不表示漸進。' },
            { text: 'ほど', reason: '「ほど」表示程度，不表示漸進分配。' },
            { text: 'ばかり', reason: '「ばかり」表示「光是」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ずつ」表示均等分配或漸進',
            analysis: '「ずつ」有兩個用法：①各...（一人一個ずつ）②漸進地（少しずつ）。',
            comparisons: ['少しずつ：一點一點地（漸進）', '一人ずつ：每人各...（均等分配）'],
            commonMistakes: ['○ 少しずつ上手になる / × 少しだけ上手になる → 「だけ」表示限定量，「ずつ」表示漸進過程'],
        },
    },
    // ━━━ だけ (as much as) - N3 extended usage ━━━
    {
        id: 'g_n3_160', category: 'grammar', level: 'N3', tags: ['extent', 'maximum'],
        stem: '好{す}きな___食{た}べていいですよ。',
        stemZh: '想吃多少就吃多少。',
        options: [
            { text: 'だけ', reason: '正確！「好きなだけ」表示「想要多少就多少」。' },
            { text: 'ほど', reason: '「好きなほど」語法不自然。' },
            { text: 'くらい', reason: '「好きなくらい」語法不自然。' },
            { text: 'ばかり', reason: '「好きなばかり」語法不成立。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: 'N3的「だけ」表示盡情、隨意的程度',
            analysis: '「V辭書形/い形＋だけ」在N3中可表示「盡量」「盡情」，允許達到想要的程度。',
            comparisons: ['好きなだけ食べる：想吃多少就吃多少', 'できるだけ早く：盡可能快地'],
            commonMistakes: ['○ 好きなだけ食べていい / × 好きなほど食べていい → 「ほど」不用於此表達'],
        },
    },
    // ━━━ だけでなく (not only...but also) - N3 context ━━━
    {
        id: 'g_n3_161', category: 'grammar', level: 'N3', tags: ['addition', 'contrast'],
        stem: '彼{かれ}は日本語{にほんご}___、韓国語{かんこくご}も話{はな}せる。',
        stemZh: '他不僅會日語，還會韓語。',
        options: [
            { text: 'だけでなく', reason: '正確！「だけでなく」表示「不僅...還...」。' },
            { text: 'だけで', reason: '「だけで」表示「只靠」，語意不同。' },
            { text: 'だけに', reason: '「だけに」表示「正因為」，語意不同。' },
            { text: 'だけあって', reason: '「だけあって」表示「不愧是」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「だけでなく〜も」表示不僅A還有B',
            analysis: '「だけでなく」用於表示範圍不限於前述，還包括後述的內容。',
            comparisons: ['だけでなく：不僅...還（追加）', 'だけで：光是...就（足夠/只需）', 'だけに：正因為...所以（原因）'],
            commonMistakes: ['○ 日本語だけでなく韓国語も / × 日本語だけで韓国語も → 語法不成立'],
        },
    },
    // ━━━ だけど (but / however - casual) ━━━
    {
        id: 'g_n3_162', category: 'grammar', level: 'N3', tags: ['conjunction', 'casual-but'],
        stem: '行{い}きたい気持{きも}ちはある。___、時間{じかん}がない。',
        stemZh: '有想去的心情。但是沒有時間。',
        options: [
            { text: 'だけど', reason: '正確！「だけど」是口語的逆接連詞。' },
            { text: 'ところが', reason: '「ところが」帶有出乎意料感，此處較中性。' },
            { text: 'ところで', reason: '「ところで」是切換話題，不是逆接。' },
            { text: 'だけに', reason: '「だけに」表示「正因為」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「だけど」是口語的逆接表達',
            analysis: '「だけど」是「けれども」的口語簡縮形，用於日常會話中表示「但是」。',
            comparisons: ['だけど：但是（最口語）', 'けど：但是（口語）', 'けれども：雖然（正式）', 'しかし：但是（書面）'],
            commonMistakes: ['○ だけど時間がない / ○ しかし時間がない → 前者口語，後者書面'],
        },
    },
    // ━━━ ばいい (should / it would be good if) - N3 context ━━━
    {
        id: 'g_n3_163', category: 'grammar', level: 'N3', tags: ['advice', 'suggestion'],
        stem: 'わからないことがあったら、先生{せんせい}に聞{き}け___。',
        stemZh: '有不懂的事的話，問老師就好了。',
        options: [
            { text: 'ばいい', reason: '正確！「ばいい」表示建議「...就好了」。' },
            { text: 'ばよかった', reason: '「ばよかった」表示後悔「要是...就好了」，不是建議。' },
            { text: 'べきだ', reason: '「べきだ」表示「應該」（義務），語氣較強。' },
            { text: 'ことだ', reason: '「ことだ」也表示建議，但語法不搭配此空格。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ばいい」給出輕鬆的建議',
            analysis: '「ばいい」用於給對方輕鬆的建議，表示「只要做...就可以了」。',
            comparisons: ['ばいい：...就好了（建議/未來）', 'ばよかった：要是...就好了（後悔/過去）'],
            commonMistakes: ['○ 聞けばいい / × 聞けばよかった → 前者是建議，後者是後悔沒問'],
        },
    },
    // ━━━ ば～のに (if only...then) ━━━
    {
        id: 'g_n3_164', category: 'grammar', level: 'N3', tags: ['regret', 'unrealized'],
        stem: 'もう少{すこ}し早{はや}く出{で}れ___、間{ま}に合{あ}った___。',
        stemZh: '如果再早一點出門的話，就趕得上了。',
        options: [
            { text: 'ば…のに', reason: '正確！「ば〜のに」表示遺憾的假設「如果...就好了」。' },
            { text: 'たら…のに', reason: '「たら〜のに」也表示遺憾，但此處空格為「ば」形。' },
            { text: 'ば…から', reason: '「ば〜から」語法不自然。' },
            { text: 'ても…のに', reason: '「ても〜のに」語法不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ば〜のに」表示對未實現事情的遺憾',
            analysis: '「ば〜のに」用於對過去未發生的事表示遺憾，相當於「如果...就好了」。',
            comparisons: ['ば〜のに：如果...就好了（遺憾假設）', 'ばよかった：要是...就好了（後悔）'],
            commonMistakes: ['○ 出ればのに / ○ 出ればよかった → 兩者都表示遺憾，「のに」更強調惋惜'],
        },
    },
    // ━━━ にとって - advanced (for / from the perspective of) ━━━
    {
        id: 'g_n3_165', category: 'grammar', level: 'N3', tags: ['compound-particle', 'perspective'],
        stem: '外国人{がいこくじん}___、敬語{けいご}は一番{いちばん}難{むずか}しい部分{ぶぶん}だ。',
        stemZh: '對外國人來說，敬語是最難的部分。',
        options: [
            { text: 'にとって', reason: '正確！「にとって」表示從某人的立場評價。' },
            { text: 'にしては', reason: '「にしては」表示「就...而言（意外）」，此處無意外感。' },
            { text: 'として', reason: '「として」表示「作為」，不表示評價立場。' },
            { text: 'において', reason: '「において」表示「在...」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にとって」用於表達對特定群體的評價',
            analysis: '「にとって」常用於比較不同群體的感受或價值判斷。',
            comparisons: ['外国人にとって難しい：對外國人來說很難', '外国人にしては上手：就外國人而言算很厲害（意外）'],
            commonMistakes: ['○ 外国人にとって難しい / × 外国人にしては難しい → 後者帶意外感，語意不同'],
        },
    },
    // ━━━ について - advanced (about - with の modification) ━━━
    {
        id: 'g_n3_166', category: 'grammar', level: 'N3', tags: ['compound-particle', 'modification'],
        stem: '日本{にほん}の歴史{れきし}___本{ほん}を読{よ}んだ。',
        stemZh: '讀了一本關於日本歷史的書。',
        options: [
            { text: 'についての', reason: '正確！「についての」修飾名詞，表示「關於...的」。' },
            { text: 'にとっての', reason: '「にとっての」表示「對...而言的」，語意不同。' },
            { text: 'に対{たい}しての', reason: '「に対しての」表示「對...的」，語意不同。' },
            { text: 'によっての', reason: '「によっての」語法不太自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「についての＋名詞」修飾後面的名詞',
            analysis: '「について」後加「の」可以直接修飾名詞，形成「關於...的○○」的結構。',
            comparisons: ['日本についての本：關於日本的書', '日本に関する本：有關日本的書（更正式）'],
            commonMistakes: ['○ 歴史についての本 / ○ 歴史に関する本 → 兩者可互換，後者更正式'],
        },
    },
    // ━━━ に関する (related to) - attributive form ━━━
    {
        id: 'g_n3_167', category: 'grammar', level: 'N3', tags: ['compound-particle', 'formal-regarding'],
        stem: '環境{かんきょう}___資料{しりょう}を集{あつ}めています。',
        stemZh: '正在收集有關環境的資料。',
        options: [
            { text: 'に関{かん}する', reason: '正確！「に関する」修飾名詞，表示「有關...的」。' },
            { text: 'についての', reason: '「についての」也可以，但「に関する」更正式。' },
            { text: 'に対{たい}する', reason: '「に対する」表示「對...的」，語意不同。' },
            { text: 'における', reason: '「における」表示「在...中的」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に関する」是「に関して」的連體修飾形',
            analysis: '「に関する＋名詞」直接修飾名詞，「に関して」修飾動詞。兩者都是正式表達。',
            comparisons: ['に関する資料：有關...的資料（修飾名詞）', 'に関して調べる：就...進行調查（修飾動詞）'],
            commonMistakes: ['○ 環境に関する資料 / × 環境に関して資料 → 修飾名詞用「に関する」'],
        },
    },
    // ━━━ によると / によれば (according to) ━━━
    {
        id: 'g_n3_168', category: 'grammar', level: 'N3', tags: ['hearsay', 'source'],
        stem: '天気{てんき}予報{よほう}___、明日{あした}は晴{は}れるそうだ。',
        stemZh: '根據天氣預報，明天會放晴。',
        options: [
            { text: 'によると', reason: '正確！「によると」表示資訊來源「根據...」。' },
            { text: 'によって', reason: '「によって」表示手段或原因，不表示資訊來源。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，語意不合。' },
            { text: 'について', reason: '「について」表示「關於」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「によると」指出資訊的來源',
            analysis: '「によると」「によれば」常與「そうだ」「ということだ」等傳聞表達搭配使用。',
            comparisons: ['によると：根據...（資訊來源）', 'によって：因...（原因/手段）'],
            commonMistakes: ['○ 天気予報によると / × 天気予報によって → 「によって」不用於指出資訊來源'],
        },
    },
    // ━━━ に慣れる (get used to) ━━━
    {
        id: 'g_n3_169', category: 'grammar', level: 'N3', tags: ['habituation', 'accustom'],
        stem: '日本{にほん}の生活{せいかつ}___のに、半年{はんとし}かかった。',
        stemZh: '花了半年才習慣日本的生活。',
        options: [
            { text: 'に慣{な}れる', reason: '正確！「に慣れる」表示「習慣...」。' },
            { text: 'になる', reason: '「になる」表示「變成」，語意不同。' },
            { text: 'にする', reason: '「にする」表示「決定」，語意不同。' },
            { text: 'に飽{あ}きる', reason: '「に飽きる」表示「膩了」，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に慣れる」表示逐漸適應某事',
            analysis: '「に慣れる」用於表示從不適應到適應的過程。常用於新環境、新文化等。',
            comparisons: ['に慣れる：習慣...（適應）', 'に飽きる：膩了...（厭倦）'],
            commonMistakes: ['○ 日本の生活に慣れる / × 日本の生活を慣れる → 助詞用「に」不用「を」'],
        },
    },
    // ━━━ は～で有名 (famous for) ━━━
    {
        id: 'g_n3_170', category: 'grammar', level: 'N3', tags: ['description', 'reputation'],
        stem: '京都{きょうと}はお寺{てら}___だ。',
        stemZh: '京都以寺廟聞名。',
        options: [
            { text: 'で有名{ゆうめい}', reason: '正確！「で有名」表示「以...聞名」。' },
            { text: 'が有名{ゆうめい}', reason: '「が有名」表示「...很有名」，但不強調「以...聞名」的理由。' },
            { text: 'に有名{ゆうめい}', reason: '「に有名」語法不成立。' },
            { text: 'を有名{ゆうめい}', reason: '「を有名」語法不成立。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「は〜で有名」表示以某事物聞名',
            analysis: '「AはBで有名だ」表示A以B聞名。助詞「で」表示原因或特點。',
            comparisons: ['京都はお寺で有名だ：京都以寺廟聞名', '京都のお寺が有名だ：京都的寺廟很有名'],
            commonMistakes: ['○ お寺で有名 / × お寺に有名 → 助詞用「で」不用「に」'],
        },
    },
    // ━━━ よりも (more than) ━━━
    {
        id: 'g_n3_171', category: 'grammar', level: 'N3', tags: ['comparison', 'emphasis'],
        stem: '結果{けっか}___、過程{かてい}が大切{たいせつ}だ。',
        stemZh: '比起結果，過程更重要。',
        options: [
            { text: 'よりも', reason: '正確！「よりも」是「より」的強調形，表示「比起...更」。' },
            { text: 'より', reason: '「より」也可以，但「よりも」語氣更強。' },
            { text: 'ほど', reason: '「ほど」搭配否定才表示比較，此處肯定句。' },
            { text: 'くらい', reason: '「くらい」表示程度，不用於此比較句型。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「よりも」強調比較的差異',
            analysis: '「よりも」是「より」加上「も」的強調形式，在比較中更加強調後者的優越。',
            comparisons: ['よりも：比起...更（強調比較）', 'より：比...（一般比較）'],
            commonMistakes: ['○ 結果よりも過程が大切 / ○ 結果より過程が大切 → 前者語氣更強'],
        },
    },
    // ━━━ ほど～ない (not as...as) ━━━
    {
        id: 'g_n3_172', category: 'grammar', level: 'N3', tags: ['comparison', 'negation'],
        stem: '今年{ことし}の夏{なつ}は去年{きょねん}___暑{あつ}くない。',
        stemZh: '今年夏天沒有去年那麼熱。',
        options: [
            { text: 'ほど', reason: '正確！「ほど〜ない」表示「沒有...那麼」。' },
            { text: 'より', reason: '「より」用於肯定比較，此處為否定。' },
            { text: 'くらい', reason: '「くらい〜ない」也可以表示比較，但「ほど」更標準。' },
            { text: 'だけ', reason: '「だけ」表示「只有」，不用於此比較。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ほど〜ない」表示未達到某基準的程度',
            analysis: '「AはBほど〜ない」表示A不如B那樣（程度不及B）。',
            comparisons: ['去年ほど暑くない：沒有去年那麼熱', '去年より暑くない：比去年不熱（一般比較）'],
            commonMistakes: ['○ 去年ほど暑くない / × 去年より暑くない → 意思相近，「ほど」更強調差距'],
        },
    },
    // ━━━ くらい / ぐらい (about / to the extent) - N3 context ━━━
    {
        id: 'g_n3_173', category: 'grammar', level: 'N3', tags: ['degree', 'approximation'],
        stem: '泣{な}きたい___悔{くや}しかった。',
        stemZh: '悔恨到想哭的程度。',
        options: [
            { text: 'くらい', reason: '正確！「くらい」表示達到某程度。' },
            { text: 'ほど', reason: '「ほど」也可以表示程度，但「くらい」更口語。' },
            { text: 'だけ', reason: '「だけ」表示「只有」，不表示程度。' },
            { text: 'ばかり', reason: '「ばかり」表示「光是」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「V＋くらい」表示達到某種程度',
            analysis: '「くらい」用於表示某感覺或狀態達到的程度，常用於誇張表達。',
            comparisons: ['泣きたいくらい：到想哭的程度', '泣きたいほど：到想哭的程度'],
            commonMistakes: ['○ 泣きたいくらい悔しい / ○ 泣きたいほど悔しい → 兩者可互換，「くらい」更口語'],
        },
    },
    // ━━━ 数量+は (at least [quantity]) ━━━
    {
        id: 'g_n3_174', category: 'grammar', level: 'N3', tags: ['quantity', 'minimum'],
        stem: 'この仕事{しごと}を終{お}わらせるには、3日{みっか}___かかる。',
        stemZh: '要完成這份工作，至少要三天。',
        options: [
            { text: 'は', reason: '正確！「数量＋は」表示「至少...」。' },
            { text: 'も', reason: '「も」表示「竟然」，強調數量多得出乎意料。' },
            { text: 'だけ', reason: '「だけ」表示「只要」，語感不同。' },
            { text: 'しか', reason: '「しか」搭配否定表示「只有」，語法不合此句。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '數量詞後加「は」表示「至少」',
            analysis: '「数量＋は」用於表示最低限度，暗示實際可能更多。',
            comparisons: ['3日はかかる：至少要三天', '3日もかかる：竟然要三天（強調多）', '3日でできる：三天就能完成'],
            commonMistakes: ['○ 3日はかかる（至少三天）/ × 3日もかかる（竟然三天）→ 「は」是下限，「も」是意外的多'],
        },
    },
    // ━━━ も～ば～も (both...and / neither...nor) ━━━
    {
        id: 'g_n3_175', category: 'grammar', level: 'N3', tags: ['listing', 'addition'],
        stem: 'この料理{りょうり}は味{あじ}___よけれ___見{み}た目{め}___いい。',
        stemZh: '這道菜味道好，外觀也好。',
        options: [
            { text: 'も…ば…も', reason: '正確！「も〜ば〜も」表示「既...又...」。' },
            { text: 'は…は…は', reason: '「は」用於對比，此處為追加。' },
            { text: 'が…が…が', reason: '「が」重複使用不自然。' },
            { text: 'も…も…も', reason: '「も...も...も」可以但缺少「ば」的條件語感。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「も〜ば〜も」列舉多個同方向的特質',
            analysis: '「AもBば/なら、CもDだ」表示不僅A方面好/壞，C方面也好/壞。用於加強語氣的列舉。',
            comparisons: ['味もよければ見た目もいい：味道好外觀也好（正面列舉）', '味も悪ければ見た目も悪い：味道差外觀也差（負面列舉）'],
            commonMistakes: ['○ 味もよければ見た目もいい / × 味はよければ見た目もいい → 要用「も」不用「は」'],
        },
    },
    // ━━━ に対する (toward - attributive) ━━━
    {
        id: 'g_n3_176', category: 'grammar', level: 'N3', tags: ['compound-particle', 'attributive'],
        stem: 'お客様{きゃくさま}___サービスを改善{かいぜん}する必要{ひつよう}がある。',
        stemZh: '有必要改善對客戶的服務。',
        options: [
            { text: 'に対{たい}する', reason: '正確！「に対する」修飾名詞，表示「對...的」。' },
            { text: 'に対{たい}して', reason: '「に対して」修飾動詞，此處修飾名詞「サービス」用「に対する」。' },
            { text: 'についての', reason: '「についての」表示「關於...的」，語意不同。' },
            { text: 'にとっての', reason: '「にとっての」表示「對...而言的」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に対する」是「に対して」的連體修飾形',
            analysis: '修飾名詞時用「に対する」，修飾動詞時用「に対して」。',
            comparisons: ['客に対するサービス：對客戶的服務（修飾名詞）', '客に対して丁寧だ：對客戶很有禮貌（修飾形容詞）'],
            commonMistakes: ['○ お客様に対するサービス / × お客様に対してサービス → 修飾名詞用「に対する」'],
        },
    },
    // ━━━ における (in - attributive) ━━━
    {
        id: 'g_n3_177', category: 'grammar', level: 'N3', tags: ['compound-particle', 'formal-attributive'],
        stem: '日本{にほん}___教育{きょういく}制度{せいど}は6・3・3制{せい}だ。',
        stemZh: '日本的教育制度是六三三制。',
        options: [
            { text: 'における', reason: '正確！「における」修飾名詞，表示「在...中的」。' },
            { text: 'において', reason: '「において」修飾動詞，此處修飾名詞用「における」。' },
            { text: 'についての', reason: '「についての」表示「關於...的」，語意不同。' },
            { text: 'によっての', reason: '「によっての」語法不太自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「における」是「において」的連體修飾形',
            analysis: '修飾名詞時用「における」，修飾動詞時用「において」。常用於正式書面。',
            comparisons: ['日本における教育制度：在日本的教育制度（修飾名詞）', '日本において行われる：在日本舉行（修飾動詞）'],
            commonMistakes: ['○ 日本における教育制度 / × 日本において教育制度 → 修飾名詞用「における」'],
        },
    },
    // ━━━ による (due to - attributive) ━━━
    {
        id: 'g_n3_178', category: 'grammar', level: 'N3', tags: ['compound-particle', 'cause-attributive'],
        stem: '地震{じしん}___被害{ひがい}が広{ひろ}がっている。',
        stemZh: '因地震造成的災害正在擴大。',
        options: [
            { text: 'による', reason: '正確！「による」修飾名詞，表示「因...造成的」。' },
            { text: 'によって', reason: '「によって」修飾動詞，此處修飾名詞用「による」。' },
            { text: 'についての', reason: '「についての」表示「關於...的」，語意不同。' },
            { text: 'に対{たい}する', reason: '「に対する」表示「對...的」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「による」是「によって」的連體修飾形',
            analysis: '「による＋名詞」表示由某原因造成的結果。',
            comparisons: ['地震による被害：地震造成的災害（修飾名詞）', '地震によって壊れた：因地震而損壞（修飾動詞）'],
            commonMistakes: ['○ 地震による被害 / × 地震によって被害 → 修飾名詞用「による」'],
        },
    },
    // ━━━ をめぐって (concerning / over) ━━━
    {
        id: 'g_n3_179', category: 'grammar', level: 'N3', tags: ['topic', 'dispute'],
        stem: 'この土地{とち}の所有権{しょゆうけん}___、裁判{さいばん}が行{おこな}われている。',
        stemZh: '關於這塊土地的所有權，正在進行訴訟。',
        options: [
            { text: 'をめぐって', reason: '正確！「をめぐって」表示「圍繞...」，常用於爭議話題。' },
            { text: 'について', reason: '「について」也表示「關於」，但不帶爭議語感。' },
            { text: 'に関{かん}して', reason: '「に関して」表示「有關」，但不帶爭議語感。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對...」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「をめぐって」表示圍繞某爭議話題',
            analysis: '「をめぐって」常用於存在不同意見或爭議的話題，比「について」更強調爭論性。',
            comparisons: ['をめぐって：圍繞...（有爭議）', 'について：關於...（一般話題）'],
            commonMistakes: ['○ 所有権をめぐって裁判 / × 所有権について裁判 → 裁判涉及爭議，用「をめぐって」更適合'],
        },
    },
    // ━━━ に基づいて (based on) ━━━
    {
        id: 'g_n3_180', category: 'grammar', level: 'N3', tags: ['basis', 'formal'],
        stem: '調査{ちょうさ}結果{けっか}___、報告書{ほうこくしょ}を作成{さくせい}した。',
        stemZh: '根據調查結果，編寫了報告書。',
        options: [
            { text: 'に基{もと}づいて', reason: '正確！「に基づいて」表示「根據...」「基於...」。' },
            { text: 'によると', reason: '「によると」表示「據...說」，用於傳聞不是行動基礎。' },
            { text: 'について', reason: '「について」表示「關於」，不表示基礎。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對...」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に基づいて」表示以某事為基礎或依據',
            analysis: '「に基づいて」用於表示某行動或判斷是以某個事實、資料為依據進行的。',
            comparisons: ['に基づいて：基於...（以...為基礎行動）', 'によると：據...（引用資訊來源）'],
            commonMistakes: ['○ 調査結果に基づいて作成した / × 調査結果によると作成した → 「によると」是傳聞，不是行動基礎'],
        },
    },
    // ━━━ をもとに (based on / from) ━━━
    {
        id: 'g_n3_181', category: 'grammar', level: 'N3', tags: ['basis', 'source'],
        stem: '実話{じつわ}___、この映画{えいが}は作{つく}られた。',
        stemZh: '這部電影是根據真實故事製作的。',
        options: [
            { text: 'をもとに', reason: '正確！「をもとに」表示「以...為基礎」。' },
            { text: 'に基{もと}づいて', reason: '「に基づいて」也可以，但「をもとに」更常用於創作。' },
            { text: 'について', reason: '「について」表示「關於」，不是「以...為基礎」。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「をもとに」表示以某事為素材或出發點',
            analysis: '「をもとに」常用於表示以某個事實或素材為基礎進行創作或製作。',
            comparisons: ['をもとに：以...為素材（創作基礎）', 'に基づいて：基於...（事實依據）'],
            commonMistakes: ['○ 実話をもとに作られた / ○ 実話に基づいて作られた → 兩者可互換'],
        },
    },
    // ━━━ ものだ (should / it's natural that - general truth) ━━━
    {
        id: 'g_n3_182', category: 'grammar', level: 'N3', tags: ['common-sense', 'advice'],
        stem: '人{ひと}の気持{きも}ちを考{かんが}える___だ。',
        stemZh: '應該要考慮別人的感受。（這是常識）',
        options: [
            { text: 'もの', reason: '正確！「ものだ」表示一般常識或道理。' },
            { text: 'べき', reason: '「べきだ」表示個人義務，語氣更強。' },
            { text: 'はず', reason: '「はずだ」表示推測，不表示常識。' },
            { text: 'わけ', reason: '「わけだ」表示「難怪」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ものだ」表示社會常識或自然規律',
            analysis: '「ものだ」用於表達「本來就應該這樣」的一般性道理或社會常識。語氣比「べきだ」柔和。',
            comparisons: ['ものだ：本來就應該...（常識/自然法則）', 'べきだ：應該...（個人道德義務）'],
            commonMistakes: ['○ 考えるものだ / ○ 考えるべきだ → 前者柔和（常識），後者強烈（義務）'],
        },
    },
    // ━━━ ものだ (exclamation / feeling) ━━━
    {
        id: 'g_n3_183', category: 'grammar', level: 'N3', tags: ['exclamation', 'emotion'],
        stem: '時間{じかん}が経{た}つのは早{はや}い___だ。',
        stemZh: '時間過得真快啊。',
        options: [
            { text: 'もの', reason: '正確！「ものだ」表示感嘆。' },
            { text: 'こと', reason: '「ことだ」表示建議，不表示感嘆。' },
            { text: 'わけ', reason: '「わけだ」表示「難怪」，不表示感嘆。' },
            { text: 'はず', reason: '「はずだ」表示推測，不表示感嘆。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ものだ」用於表示感嘆或驚訝',
            analysis: '「ものだ」也可以用於對某種現象或變化表示感嘆或感慨。',
            comparisons: ['ものだ（感嘆）：...真是（感慨萬千）', 'ものだ（回憶）：過去常常...', 'ものだ（常識）：本來就應該...'],
            commonMistakes: ['○ 早いものだ（時間過得真快啊）/ × 早いことだ → 「ことだ」不表示感嘆'],
        },
    },
    // ━━━ ことだ (should / must - advice) ━━━
    {
        id: 'g_n3_184', category: 'grammar', level: 'N3', tags: ['advice', 'recommendation'],
        stem: '健康{けんこう}のためには、よく寝{ね}る___。',
        stemZh: '為了健康，應該好好睡覺。',
        options: [
            { text: 'ことだ', reason: '正確！「ことだ」表示建議「應該做...」。' },
            { text: 'ものだ', reason: '「ものだ」表示常識或感嘆，不是直接建議。' },
            { text: 'わけだ', reason: '「わけだ」表示「難怪」，不是建議。' },
            { text: 'はずだ', reason: '「はずだ」表示推測，不是建議。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことだ」表示勸告式的建議',
            analysis: '「ことだ」用於對某人提出建議或忠告，表示「（你）應該做...」。',
            comparisons: ['ことだ：應該做...（建議/勸告）', 'べきだ：應該做...（義務/強烈）', 'ものだ：本來就該...（常識）'],
            commonMistakes: ['○ よく寝ることだ / ○ よく寝るべきだ → 前者是勸告，後者是義務'],
        },
    },
    // ━━━ こと (must - imperative) ━━━
    {
        id: 'g_n3_185', category: 'grammar', level: 'N3', tags: ['rule', 'imperative'],
        stem: 'レポートは来週{らいしゅう}の金曜日{きんようび}までに提出{ていしゅつ}する___。',
        stemZh: '報告必須在下週五之前提交。',
        options: [
            { text: 'こと', reason: '正確！「こと」用於書面規定表示「必須...」。' },
            { text: 'ことだ', reason: '「ことだ」表示建議，此處為強制規定。' },
            { text: 'ものだ', reason: '「ものだ」表示常識，此處為規定。' },
            { text: 'べきだ', reason: '「べきだ」表示義務建議，此處為正式規定。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「こと」用於書面規定的命令形',
            analysis: '句末的「こと」用於公告、規定等書面形式，表示「必須做...」的命令。',
            comparisons: ['こと：必須...（書面命令/規定）', 'ことだ：應該...（建議）'],
            commonMistakes: ['○ 提出すること / × 提出することだ → 規定用「こと」結尾，建議用「ことだ」'],
        },
    },
    // ━━━ はずだ (should be / supposed to) - N3 advanced ━━━
    {
        id: 'g_n3_186', category: 'grammar', level: 'N3', tags: ['expectation', 'logic'],
        stem: '電話{でんわ}したから、彼{かれ}はもう知{し}っている___。',
        stemZh: '因為打過電話了，他應該已經知道了。',
        options: [
            { text: 'はずだ', reason: '正確！「はずだ」表示根據邏輯推理「應該是...」。' },
            { text: 'わけだ', reason: '「わけだ」表示「難怪」，此處為推測。' },
            { text: 'に違{ちが}いない', reason: '「に違いない」表示「一定是」，確信度更高。' },
            { text: 'かもしれない', reason: '「かもしれない」表示「也許」，確信度太低。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「はずだ」基於充分理由的邏輯推測',
            analysis: '「はずだ」表示根據某個理由或邏輯，某事應該是如此。確信度較高但非100%。',
            comparisons: ['はずだ：應該是（有根據的推測）', 'に違いない：一定是（強烈確信）', 'かもしれない：也許（不確定）'],
            commonMistakes: ['○ 知っているはずだ / × 知っているかもしれない → 有明確根據時用「はずだ」更合適'],
        },
    },
    // ━━━ はずだった (was supposed to) ━━━
    {
        id: 'g_n3_187', category: 'grammar', level: 'N3', tags: ['expectation', 'unfulfilled'],
        stem: '今日{きょう}届{とど}く___のに、まだ届{とど}いていない。',
        stemZh: '本來應該今天到的，但還沒到。',
        options: [
            { text: 'はずだった', reason: '正確！「はずだった」表示「本應...但沒有」。' },
            { text: 'はずだ', reason: '「はずだ」表示「應該是」（現在推測），不帶落空感。' },
            { text: 'つもりだった', reason: '「つもりだった」表示「原打算」（自己的意圖），語意不同。' },
            { text: 'ことになっていた', reason: '「ことになっていた」表示「按計劃是」，也可以但語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「はずだった」表示預期落空',
            analysis: '「はずだった」用於表示原本預期會發生的事沒有發生。帶有困惑或失望的語感。',
            comparisons: ['はずだった：本應...（預期落空）', 'つもりだった：原打算...（計畫落空）'],
            commonMistakes: ['○ 届くはずだった / × 届くつもりだった → 「つもり」是自己的打算，包裹不會有「打算」'],
        },
    },
    // ━━━ はずがない (can't be / shouldn't be) - N3 context ━━━
    {
        id: 'g_n3_188', category: 'grammar', level: 'N3', tags: ['impossibility', 'logic'],
        stem: 'こんな簡単{かんたん}な問題{もんだい}がわからない___。',
        stemZh: '這麼簡單的問題不可能不會。',
        options: [
            { text: 'はずがない', reason: '正確！「はずがない」表示根據邏輯「不應該/不可能」。' },
            { text: 'わけがない', reason: '「わけがない」也可以，但「はずがない」更強調根據邏輯推理。' },
            { text: 'ことはない', reason: '「ことはない」表示「不必」，語意不同。' },
            { text: 'べきではない', reason: '「べきではない」表示「不應該」（義務），語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「はずがない」基於邏輯否定可能性',
            analysis: '「はずがない」表示根據常理或邏輯判斷，某事不應該/不可能發生。',
            comparisons: ['はずがない：不應該...（基於邏輯否定）', 'わけがない：不可能...（基於道理強烈否定）'],
            commonMistakes: ['○ わからないはずがない / ○ わからないわけがない → 前者稍弱（邏輯上不應該），後者更強（絕不可能）'],
        },
    },
    // ━━━ だけあって (as expected of / worthy of) ━━━
    {
        id: 'g_n3_189', category: 'grammar', level: 'N3', tags: ['evaluation', 'merit'],
        stem: '10年{ねん}も日本{にほん}に住{す}んでいる___、日本語{にほんご}がとても上手{じょうず}だ。',
        stemZh: '不愧是在日本住了十年，日語非常好。',
        options: [
            { text: 'だけあって', reason: '正確！「だけあって」表示「不愧是...所以」。' },
            { text: 'だけで', reason: '「だけで」表示「光是...就」，語意不同。' },
            { text: 'だけに', reason: '「だけに」也可以表示「正因為」，語感相近。' },
            { text: 'だけでなく', reason: '「だけでなく」表示「不僅」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「だけあって」表示結果與期望相符「不愧是」',
            analysis: '「だけあって」用於表示某人的表現與其經歷或背景相符，帶有讚賞意味。',
            comparisons: ['だけあって：不愧是（結果符合預期）', 'だけに：正因為（因果強調）'],
            commonMistakes: ['○ 住んでいるだけあって上手だ / ○ 住んでいるだけに上手だ → 兩者語感相近'],
        },
    },
    // ━━━ だけに (precisely because) ━━━
    {
        id: 'g_n3_190', category: 'grammar', level: 'N3', tags: ['cause', 'emphasis'],
        stem: '期待{きたい}していた___、失望{しつぼう}も大{おお}きかった。',
        stemZh: '正因為抱有期待，失望也更大。',
        options: [
            { text: 'だけに', reason: '正確！「だけに」表示「正因為...所以（程度更甚）」。' },
            { text: 'だけあって', reason: '「だけあって」表示「不愧是」，此處強調因果加深。' },
            { text: 'だけで', reason: '「だけで」表示「光是...就」，語意不同。' },
            { text: 'だけでなく', reason: '「だけでなく」表示「不僅」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「だけに」強調因果程度的加深',
            analysis: '「だけに」表示正因為前述的程度大，所以後述的結果也相應地更加明顯。',
            comparisons: ['だけに：正因為（因果加深）', 'だけあって：不愧是（結果符合預期）'],
            commonMistakes: ['○ 期待していただけに失望も大きい / × 期待していただけあって失望も大きい → 「だけあって」多用於正面結果'],
        },
    },
    // ━━━ において - advanced (domain/field) ━━━
    {
        id: 'g_n3_191', category: 'grammar', level: 'N3', tags: ['compound-particle', 'field'],
        stem: '科学{かがく}の分野{ぶんや}___、日本{にほん}は世界{せかい}をリードしている。',
        stemZh: '在科學領域，日本領先世界。',
        options: [
            { text: 'において', reason: '正確！「において」表示「在...領域中」。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，語意不合。' },
            { text: 'について', reason: '「について」表示「關於」，不表示領域。' },
            { text: 'にかけて', reason: '「にかけて」表示「延伸至」或「在...方面」，此處用「において」更正式。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「において」也可以表示抽象的領域或方面',
            analysis: '「において」不僅用於物理場所，也用於抽象的領域、方面。',
            comparisons: ['科学の分野において：在科學領域（抽象場所）', '東京において：在東京（物理場所）'],
            commonMistakes: ['○ 分野において / × 分野について → 「について」是「關於」，不是「在...中」'],
        },
    },
    // ━━━ に対して - advanced (ratio/proportion) ━━━
    {
        id: 'g_n3_192', category: 'grammar', level: 'N3', tags: ['compound-particle', 'ratio'],
        stem: '男性{だんせい}3人{にん}___、女性{じょせい}が7人{にん}応募{おうぼ}した。',
        stemZh: '男性3人相對女性7人報名了。',
        options: [
            { text: 'に対{たい}して', reason: '正確！「に対して」可以表示比例對比。' },
            { text: 'について', reason: '「について」表示「關於」，不表示比例。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，不表示比例。' },
            { text: 'によって', reason: '「によって」表示原因或手段，不表示比例。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に対して」也可以表示數量的對比比例',
            analysis: '「Aに対してB」可以表示A和B之間的數量對比或比例關係。',
            comparisons: ['3人に対して7人：3人對7人（比例對比）', '男性に対して女性：對男性而言女性（一般對比）'],
            commonMistakes: ['○ 3人に対して7人 / × 3人について7人 → 「について」不表示數量對比'],
        },
    },
    // ━━━ からには / 以上は (since / now that) ━━━
    {
        id: 'g_n3_193', category: 'grammar', level: 'N3', tags: ['determination', 'obligation'],
        stem: '約束{やくそく}した___、必{かなら}ず守{まも}る。',
        stemZh: '既然約定了，就一定會遵守。',
        options: [
            { text: 'からには', reason: '正確！「からには」表示「既然...就一定」。' },
            { text: 'からこそ', reason: '「からこそ」表示「正因為」，語意不同。' },
            { text: 'からといって', reason: '「からといって」表示「不能因為...就」，語意不同。' },
            { text: 'から', reason: '「から」只表示原因，不帶「既然」的決心感。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「からには」表示既然如此就要負責到底',
            analysis: '「からには」用於表示既然做出了某個選擇或承諾，就一定要做到底。帶有強烈決心。',
            comparisons: ['からには：既然...就（決心/義務）', 'からこそ：正因為...才（強調原因）', '以上は：既然...就（同義更正式）'],
            commonMistakes: ['○ 約束したからには守る / × 約束したからといって守る → 「からといって」後接否定'],
        },
    },
    // ━━━ からといって (just because...doesn't mean) ━━━
    {
        id: 'g_n3_194', category: 'grammar', level: 'N3', tags: ['negation', 'warning'],
        stem: '日本{にほん}に住{す}んでいる___、日本語{にほんご}が上手{じょうず}だとは限{かぎ}らない。',
        stemZh: '不能因為住在日本就認為日語一定好。',
        options: [
            { text: 'からといって', reason: '正確！「からといって」表示「不能因為...就認為」。' },
            { text: 'からには', reason: '「からには」表示「既然...就」，語意不同。' },
            { text: 'からこそ', reason: '「からこそ」表示「正因為」，語意不同。' },
            { text: 'ために', reason: '「ために」表示原因或目的，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「からといって」否定單純因果推論',
            analysis: '「からといって〜ない」用於提醒不要僅因為某個理由就做出簡單的推論。',
            comparisons: ['からといって〜ない：不能因為...就（否定簡單推論）', 'からには：既然...就（決心）'],
            commonMistakes: ['○ 住んでいるからといって上手とは限らない / × 住んでいるからには上手とは限らない → 語意不同'],
        },
    },
    // ━━━ からこそ (precisely because) ━━━
    {
        id: 'g_n3_195', category: 'grammar', level: 'N3', tags: ['emphasis', 'reason'],
        stem: '好{す}きだ___、厳{きび}しいことも言{い}うのだ。',
        stemZh: '正因為喜歡你，才會說嚴厲的話。',
        options: [
            { text: 'からこそ', reason: '正確！「からこそ」表示「正因為...才」強調原因。' },
            { text: 'からといって', reason: '「からといって」表示「不能因為...就」，語意不同。' },
            { text: 'からには', reason: '「からには」表示「既然」，語意不同。' },
            { text: 'だからこそ', reason: '「だからこそ」也正確但放在句首，此處在句中。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「からこそ」強調原因的重要性',
            analysis: '「からこそ」用於強調「正是因為這個原因」才會有後面的結果。「こそ」加強因果關係。',
            comparisons: ['からこそ：正因為（強調原因）', 'だからこそ：正因為如此（句首形式）'],
            commonMistakes: ['○ 好きだからこそ厳しい / × 好きだからといって厳しい → 後者是「不能因為喜歡就嚴厲」，語意相反'],
        },
    },
    // ━━━ ～ように言う (tell someone to) ━━━
    {
        id: 'g_n3_196', category: 'grammar', level: 'N3', tags: ['indirect-speech', 'instruction'],
        stem: '先生{せんせい}は学生{がくせい}に宿題{しゅくだい}を出{だ}す___言{い}った。',
        stemZh: '老師叫學生交作業。',
        options: [
            { text: 'ように', reason: '正確！「ように言う」表示間接傳達指示或請求。' },
            { text: 'ために', reason: '「ために言う」語法不自然。' },
            { text: 'ことを', reason: '「ことを言う」是「說了...的事」，不是轉達指示。' },
            { text: 'と', reason: '「と言う」是直接引述，此處為間接傳達指示。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ように言う」用於間接傳達指示',
            analysis: '「V ように言う」表示叫某人做某事，是間接引述指示或請求的方式。',
            comparisons: ['ように言った：叫（某人）做...（間接指示）', 'と言った：說了...（直接引述）'],
            commonMistakes: ['○ 宿題を出すように言った / × 宿題を出すと言った → 前者是指示別人做，後者是自己說要做'],
        },
    },
    // ━━━ ～ことにしている (make it a rule to) ━━━
    {
        id: 'g_n3_197', category: 'grammar', level: 'N3', tags: ['habit', 'personal-rule'],
        stem: '毎朝{まいあさ}6時{じ}に起{お}きる___。',
        stemZh: '我養成了每天早上六點起床的習慣。',
        options: [
            { text: 'ことにしている', reason: '正確！「ことにしている」表示自己決定並持續執行的習慣。' },
            { text: 'ことになっている', reason: '「ことになっている」表示外部規定，不是個人習慣。' },
            { text: 'ようにしている', reason: '「ようにしている」表示「盡量做到」，確定性較低。' },
            { text: 'つもりだ', reason: '「つもりだ」表示打算，不表示已養成的習慣。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことにしている」表示自己決定的持續習慣',
            analysis: '「ことにしている」表示自己做出決定並一直在執行的個人規則或習慣。',
            comparisons: ['ことにしている：自己決定的習慣（確定執行）', 'ようにしている：盡量做（不確定能否做到）', 'ことになっている：規定如此（外部決定）'],
            commonMistakes: ['○ 起きることにしている / × 起きるようにしている → 前者確定執行，後者只是努力做到'],
        },
    },
    // ━━━ ～に関して - advanced (concerning - formal investigation) ━━━
    {
        id: 'g_n3_198', category: 'grammar', level: 'N3', tags: ['compound-particle', 'formal-topic'],
        stem: '今回{こんかい}の事故{じこ}___、警察{けいさつ}が調査{ちょうさ}を進{すす}めている。',
        stemZh: '關於這次的事故，警方正在進行調查。',
        options: [
            { text: 'に関{かん}して', reason: '正確！「に関して」在正式語境中表示「有關」。' },
            { text: 'について', reason: '「について」也可以但較不正式。' },
            { text: 'をめぐって', reason: '「をめぐって」表示「圍繞（爭議）」，此處無爭議感。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對...」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に関して」在正式調查語境中的使用',
            analysis: '在新聞、公告等正式場合，「に関して」比「について」更常使用。',
            comparisons: ['に関して：有關（正式）', 'について：關於（一般）', 'をめぐって：圍繞（有爭議）'],
            commonMistakes: ['○ 事故に関して調査 / ○ 事故について調査 → 前者更正式'],
        },
    },
    // ━━━ ～に関して - complex sentence ━━━
    {
        id: 'g_n3_199', category: 'grammar', level: 'N3', tags: ['compound-particle', 'complex'],
        stem: '来年度{らいねんど}の予算{よさん}___は、会議{かいぎ}で決{き}めましょう。',
        stemZh: '關於明年度的預算，在會議上決定吧。',
        options: [
            { text: 'に関{かん}して', reason: '正確！「に関して」後加「は」構成主題。' },
            { text: 'についても', reason: '「についても」表示「也關於」，語意不同。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對...」，語意不同。' },
            { text: 'によって', reason: '「によって」表示「根據」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に関しては」提出需要處理的議題',
            analysis: '「に関しては」用於正式場合提出需要討論或處理的話題。「は」標示話題。',
            comparisons: ['に関しては：有關...方面（話題標記）', 'については：關於...方面（同義，稍不正式）'],
            commonMistakes: ['○ 予算に関しては会議で / ○ 予算については会議で → 兩者可互換'],
        },
    },
    // ━━━ ～さて (well then / now) ━━━
    {
        id: 'g_n3_200', category: 'grammar', level: 'N3', tags: ['conjunction', 'transition'],
        stem: '以上{いじょう}で報告{ほうこく}は終{お}わりです。___、質問{しつもん}はありますか。',
        stemZh: '以上報告完畢。那麼，有問題嗎？',
        options: [
            { text: 'さて', reason: '正確！「さて」用於切換話題或轉入下一階段。' },
            { text: 'ところで', reason: '「ところで」也切換話題，但較突然。' },
            { text: 'しかし', reason: '「しかし」表示「但是」，語意不合。' },
            { text: 'つまり', reason: '「つまり」表示「也就是說」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「さて」用於結束前一段落進入下一段落',
            analysis: '「さて」常用於會議、演講等場合，表示前面的部分結束，接下來轉入新的階段。',
            comparisons: ['さて：那麼（有組織地切換）', 'ところで：話說（較突然地切換）'],
            commonMistakes: ['○ さて、質問はありますか / × ところで、質問はありますか → 「さて」更適合正式場合的有序切換'],
        },
    },
    // ━━━ わけだ (it means that / no wonder) ━━━
    {
        id: 'g_n3_201', category: 'grammar', level: 'N3', tags: ['wake', 'reasoning'],
        stem: '毎日{まいにち}10時間{じゅうじかん}も勉強{べんきょう}しているのだから、成績{せいせき}がいい___。',
        stemZh: '既然每天讀書十小時，成績好也是理所當然的。',
        options: [
            { text: 'わけだ', reason: '正確！「わけだ」表示從前述理由推導出的必然結論。' },
            { text: 'わけがない', reason: '「わけがない」表示「不可能」，語意完全相反。' },
            { text: 'わけにはいかない', reason: '「わけにはいかない」表示「不能做」，語意不合。' },
            { text: 'ことだ', reason: '「ことだ」表示建議，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「わけだ」表示基於理由的必然結論',
            analysis: '「わけだ」用於從前述事實或理由推導出的必然結論，相當於「難怪」「當然」。',
            comparisons: ['わけだ：難怪（推理結論）', 'はずだ：應該（推測）'],
            commonMistakes: ['○ 10時間も勉強しているのだから成績がいいわけだ / × 成績がいいわけがない → 「わけがない」意思相反'],
        },
    },
    {
        id: 'g_n3_202', category: 'grammar', level: 'N3', tags: ['wake', 'reasoning'],
        stem: '彼{かれ}はアメリカに5年{ねん}住{す}んでいたのか。英語{えいご}が上手{じょうず}な___。',
        stemZh: '他在美國住了五年啊。難怪英語說得好。',
        options: [
            { text: 'ことだ', reason: '「ことだ」表示建議，不用於表示恍然大悟。' },
            { text: 'わけだ', reason: '正確！「わけだ」表示聽到原因後恍然大悟。' },
            { text: 'ものだ', reason: '「ものだ」表示感嘆或常理，語意不合。' },
            { text: 'ところだ', reason: '「ところだ」表示時間點，語意不合。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「わけだ」用於得知原因後表示恍然大悟',
            analysis: '得知某事實後，用「わけだ」表示「原來如此」「難怪」的語感。',
            comparisons: ['わけだ：難怪（恍然大悟）', 'ものだ：感嘆（真是...啊）'],
            commonMistakes: ['○ 英語が上手なわけだ / × 英語が上手なものだ → 「ものだ」不表示推理'],
        },
    },
    // ━━━ わけがない (impossible / no way) ━━━
    {
        id: 'g_n3_203', category: 'grammar', level: 'N3', tags: ['wake', 'negation'],
        stem: 'あんなに優{やさ}しい人{ひと}がそんなひどいことを言{い}う___。',
        stemZh: '那麼溫柔的人不可能說出那麼過分的話。',
        options: [
            { text: 'わけだ', reason: '「わけだ」表示必然結論，語意不合。' },
            { text: 'わけではない', reason: '「わけではない」表示「並非」，否定程度較弱。' },
            { text: 'わけがない', reason: '正確！「わけがない」表示「不可能」，強烈否定。' },
            { text: 'わけにはいかない', reason: '「わけにはいかない」表示「不能做」，不同意思。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「わけがない」表示強烈否定某事的可能性',
            analysis: '「わけがない」表示說話者認為「絕對不可能」，語氣比「はずがない」更強烈。',
            comparisons: ['わけがない：不可能（強烈否定）', 'はずがない：不應該（推測否定）'],
            commonMistakes: ['○ 言うわけがない / × 言うわけではない → 「わけではない」是部分否定，程度不同'],
        },
    },
    {
        id: 'g_n3_204', category: 'grammar', level: 'N3', tags: ['wake', 'negation'],
        stem: '一度{いちど}も会{あ}ったことがない人{ひと}のことを知{し}っている___。',
        stemZh: '不可能認識一次也沒見過的人。',
        options: [
            { text: 'わけがない', reason: '正確！「わけがない」表示邏輯上不可能。' },
            { text: 'わけだ', reason: '「わけだ」表示必然結論，語意相反。' },
            { text: 'ことはない', reason: '「ことはない」表示「沒必要」，語意不合。' },
            { text: 'ものか', reason: '「ものか」表示強烈否定意志，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「わけがない」用於邏輯上不可能的事',
            analysis: '「わけがない」用於從邏輯或常識判斷「不可能」的情況。',
            comparisons: ['わけがない：不可能（邏輯判斷）', 'ことはない：沒必要（不需要做）'],
            commonMistakes: ['○ 知っているわけがない / × 知っていることはない → 「ことはない」表示沒必要知道'],
        },
    },
    // ━━━ わけにはいかない (cannot afford to / must not) ━━━
    {
        id: 'g_n3_205', category: 'grammar', level: 'N3', tags: ['wake', 'obligation'],
        stem: '明日{あした}は大事{だいじ}な試験{しけん}があるので、遊{あそ}んでいる___。',
        stemZh: '明天有重要的考試，所以不能玩。',
        options: [
            { text: 'わけだ', reason: '「わけだ」表示必然結論，語意不合。' },
            { text: 'わけがない', reason: '「わけがない」表示不可能，語意不合。' },
            { text: 'わけではない', reason: '「わけではない」表示「並非」，語意不合。' },
            { text: 'わけにはいかない', reason: '正確！「わけにはいかない」表示因責任或義務而「不能做」。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「わけにはいかない」表示因義務而不能做某事',
            analysis: '「わけにはいかない」表示社會常識、義務或責任上「不允許做」某事。',
            comparisons: ['わけにはいかない：不能做（義務）', 'てはいけない：不可以做（禁止）'],
            commonMistakes: ['○ 遊んでいるわけにはいかない / × 遊んでいるわけがない → 「わけがない」表示不可能'],
        },
    },
    {
        id: 'g_n3_206', category: 'grammar', level: 'N3', tags: ['wake', 'obligation'],
        stem: 'みんなが頑張{がんば}っているのに、私{わたし}だけ休{やす}む___。',
        stemZh: '大家都在努力，我一個人不能休息。',
        options: [
            { text: 'ことはない', reason: '「ことはない」表示「沒必要」，語意不合。' },
            { text: 'わけにはいかない', reason: '正確！「わけにはいかない」表示道義上不能做。' },
            { text: 'わけだ', reason: '「わけだ」表示結論，語意不合。' },
            { text: 'はずがない', reason: '「はずがない」表示推測否定，語意不合。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「わけにはいかない」用於道義責任的約束',
            analysis: '當大家都在努力時，自己休息在道義上說不過去，用「わけにはいかない」。',
            comparisons: ['わけにはいかない：不能做（道義上）', 'ことはない：沒必要做（安慰語氣）'],
            commonMistakes: ['○ 休むわけにはいかない / × 休むことはない → 「ことはない」反而是安慰對方不用休'],
        },
    },
    // ━━━ わけではない (it's not that / doesn't mean) ━━━
    {
        id: 'g_n3_207', category: 'grammar', level: 'N3', tags: ['wake', 'partial-negation'],
        stem: '日本語{にほんご}が嫌{きら}いな___、ただ難{むずか}しいと思{おも}っているだけだ。',
        stemZh: '並不是討厭日語，只是覺得很難。',
        options: [
            { text: 'わけだ', reason: '「わけだ」表示結論，語意不合。' },
            { text: 'わけがない', reason: '「わけがない」表示不可能，語意太強。' },
            { text: 'わけではない', reason: '正確！「わけではない」表示部分否定「並非」。' },
            { text: 'わけにはいかない', reason: '「わけにはいかない」表示不能做，語意不合。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「わけではない」表示部分否定',
            analysis: '「わけではない」用於否定某個可能的誤解，表示「並非如此」。常與「ただ」「だけ」搭配。',
            comparisons: ['わけではない：並非（部分否定）', 'わけがない：不可能（完全否定）'],
            commonMistakes: ['○ 嫌いなわけではない / × 嫌いなわけがない → 「わけがない」太強烈'],
        },
    },
    // ━━━ ことになる (it has been decided) ━━━
    {
        id: 'g_n3_208', category: 'grammar', level: 'N3', tags: ['koto', 'decision'],
        stem: '来月{らいげつ}から大阪{おおさか}に転勤{てんきん}する___。',
        stemZh: '從下個月起要調到大阪了。',
        options: [
            { text: 'ことにした', reason: '「ことにした」表示自己做出決定，非外在決定。' },
            { text: 'ことになった', reason: '正確！「ことになった」表示事情被決定了（非自己意志）。' },
            { text: 'ことはない', reason: '「ことはない」表示沒必要，語意不合。' },
            { text: 'ことだ', reason: '「ことだ」表示建議，語意不合。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ことになった」表示非個人意志的決定結果',
            analysis: '「ことになる」表示被決定（如公司命令、規定等），主語不是決定者。',
            comparisons: ['ことになる：被決定（他人/外在）', 'ことにする：自己決定（自身意志）'],
            commonMistakes: ['○ 転勤することになった / × 転勤することにした → 轉勤通常是公司決定'],
        },
    },
    // ━━━ ことにする (decide to) ━━━
    {
        id: 'g_n3_209', category: 'grammar', level: 'N3', tags: ['koto', 'decision'],
        stem: '健康{けんこう}のために、毎朝{まいあさ}走{はし}る___。',
        stemZh: '為了健康，決定每天早上跑步。',
        options: [
            { text: 'ことになった', reason: '「ことになった」表示被決定，非自己意志。' },
            { text: 'ことはない', reason: '「ことはない」表示沒必要，語意不合。' },
            { text: 'ことにした', reason: '正確！「ことにした」表示自己做出的決定。' },
            { text: 'ことだ', reason: '「ことだ」表示建議，語意不合。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ことにした」表示自己的意志決定',
            analysis: '「ことにする」表示主語主動做出的決定。「健康のために」暗示是自發行為。',
            comparisons: ['ことにする：自己決定', 'ことになる：被決定（外在因素）'],
            commonMistakes: ['○ 走ることにした / × 走ることになった → 自主決定用「ことにする」'],
        },
    },
    // ━━━ ことはない (no need to) ━━━
    {
        id: 'g_n3_210', category: 'grammar', level: 'N3', tags: ['koto', 'unnecessary'],
        stem: '小{ちい}さいミスだから、そんなに心配{しんぱい}する___よ。',
        stemZh: '只是個小錯誤，不必那麼擔心。',
        options: [
            { text: 'ことにした', reason: '「ことにした」表示決定，語意不合。' },
            { text: 'ことになった', reason: '「ことになった」表示被決定，語意不合。' },
            { text: 'わけだ', reason: '「わけだ」表示結論，語意不合。' },
            { text: 'ことはない', reason: '正確！「ことはない」表示沒必要做某事。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「ことはない」表示沒必要做某事',
            analysis: '「ことはない」用於安慰或建議對方不需要做某事。常用於安撫對方的情境。',
            comparisons: ['ことはない：沒必要（安慰語氣）', 'なくてもいい：不做也可以（許可）'],
            commonMistakes: ['○ 心配することはないよ / × 心配しなくてもいいよ → 兩者意思接近，但「ことはない」語氣更強'],
        },
    },
    // ━━━ ほど (to the extent that) ━━━
    {
        id: 'g_n3_211', category: 'grammar', level: 'N3', tags: ['degree', 'comparison'],
        stem: '今日{きょう}は泣{な}きたい___疲{つか}れた。',
        stemZh: '今天累到想哭。',
        options: [
            { text: 'くらい', reason: '「くらい」也可表示程度，但「ほど」更強調程度之深。' },
            { text: 'ほど', reason: '正確！「ほど」表示達到某種程度。' },
            { text: 'まで', reason: '「まで」表示時間或地點的終點，不用於程度。' },
            { text: 'だけ', reason: '「だけ」表示限定，語意不合。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ほど」表示達到某種極端程度',
            analysis: '「ほど」用於表示程度之深，「泣きたいほど」表示累到想哭的程度。',
            comparisons: ['ほど：到...的程度（強調極端）', 'くらい：大約...的程度（較輕）'],
            commonMistakes: ['○ 泣きたいほど疲れた / ○ 泣きたいくらい疲れた → 兩者可互換，「ほど」語感更強'],
        },
    },
    {
        id: 'g_n3_212', category: 'grammar', level: 'N3', tags: ['degree', 'comparison'],
        stem: '練習{れんしゅう}すれば___上手{じょうず}になる。',
        stemZh: '越練習越會進步。',
        options: [
            { text: 'する', reason: '文法不正確，需要「ほど」表示比例關係。' },
            { text: 'したら', reason: '「したら」是條件形，不表示比例關係。' },
            { text: 'するほど', reason: '正確！「～ば～ほど」表示「越...越...」。' },
            { text: 'しても', reason: '「しても」表示讓步，語意不合。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「～ば～ほど」表示「越...越...」',
            analysis: '「～ば～ほど」是固定搭配，表示隨著一方增加，另一方也相應增加。',
            comparisons: ['～ば～ほど：越...越...', '～につれて：隨著...'],
            commonMistakes: ['○ 練習すればするほど / × 練習すれば上手になる → 後者缺少「ほど」的比例關係'],
        },
    },
    // ━━━ さえ (even) ━━━
    {
        id: 'g_n3_213', category: 'grammar', level: 'N3', tags: ['particle', 'emphasis'],
        stem: '忙{いそが}しくて、昼{ひる}ご飯{はん}___食{た}べられなかった。',
        stemZh: '太忙了，連午飯都沒吃。',
        options: [
            { text: 'も', reason: '「も」也表示「也」，但強調程度不如「さえ」。' },
            { text: 'さえ', reason: '正確！「さえ」表示「連...都」，強調極端例子。' },
            { text: 'こそ', reason: '「こそ」表示「正是」，語意不合。' },
            { text: 'しか', reason: '「しか」表示「只有」，需搭配否定，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「さえ」表示「連...都」的極端強調',
            analysis: '「さえ」用於舉出極端的例子來強調程度，「昼ご飯さえ食べられなかった」表示連最基本的午飯都沒時間吃。',
            comparisons: ['さえ：連...都（極端強調）', 'も：也（一般追加）'],
            commonMistakes: ['○ 昼ご飯さえ食べられなかった / ○ 昼ご飯も食べられなかった → 「さえ」語氣更強'],
        },
    },
    // ━━━ さえ～ば (if only / as long as) ━━━
    {
        id: 'g_n3_214', category: 'grammar', level: 'N3', tags: ['particle', 'condition'],
        stem: '薬{くすり}___飲{の}めば、すぐ治{なお}りますよ。',
        stemZh: '只要吃藥，馬上就會好。',
        options: [
            { text: 'を', reason: '「を」是普通受格助詞，沒有「只要」的語意。' },
            { text: 'でも', reason: '「でも」表示「即使」，語意不同。' },
            { text: 'さえ', reason: '正確！「さえ～ば」表示「只要...就...」。' },
            { text: 'こそ', reason: '「こそ」表示強調，不用於條件句。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「さえ～ば」表示「只要...就能...」',
            analysis: '「さえ～ば」表示只需滿足一個最低條件就能實現結果。',
            comparisons: ['さえ～ば：只要...就...（最低條件）', 'ば：如果...就...（一般條件）'],
            commonMistakes: ['○ 薬さえ飲めば治る / × 薬を飲めば治る → 後者是一般條件，「さえ」強調這是唯一必要條件'],
        },
    },
    // ━━━ こそ (precisely / it is ~ that) ━━━
    {
        id: 'g_n3_215', category: 'grammar', level: 'N3', tags: ['particle', 'emphasis'],
        stem: '「ありがとうございます。」「いいえ、こちら___。」',
        stemZh: '「謝謝。」「不，我才要謝謝您。」',
        options: [
            { text: 'こそ', reason: '正確！「こちらこそ」是固定用法，表示「我才是」。' },
            { text: 'さえ', reason: '「さえ」表示「連...都」，語意不合。' },
            { text: 'でも', reason: '「でも」表示「也」，語意不合。' },
            { text: 'しか', reason: '「しか」表示「只有」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「こそ」用於強調「正是」',
            analysis: '「こちらこそ」是日常用語，表示「我才是（該道謝的人）」。「こそ」強調前面的詞。',
            comparisons: ['こそ：正是...（強調）', 'も：也（追加）'],
            commonMistakes: ['○ こちらこそ / × こちらも → 「も」語感較弱，不適合回應感謝'],
        },
    },
    {
        id: 'g_n3_216', category: 'grammar', level: 'N3', tags: ['particle', 'emphasis'],
        stem: '失敗{しっぱい}した時{とき}___、人{ひと}は成長{せいちょう}できるのだ。',
        stemZh: '正是在失敗的時候，人才能成長。',
        options: [
            { text: 'だけ', reason: '「だけ」表示限定，語意不同。' },
            { text: 'さえ', reason: '「さえ」表示極端例，語意不合。' },
            { text: 'にこそ', reason: '正確！「にこそ」強調「正是在...」。' },
            { text: 'でも', reason: '「でも」表示「也」，語意不合。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「にこそ」強調「正是在某時刻」',
            analysis: '「こそ」可接在助詞後面使用，「時にこそ」表示「正是在那個時候」。',
            comparisons: ['にこそ：正是在...（強調時機）', 'だけ：只有在...（限定）'],
            commonMistakes: ['○ 失敗した時にこそ成長できる / × 失敗した時だけ成長できる → 「だけ」限定性太強'],
        },
    },
    // ━━━ によると (according to) ━━━
    {
        id: 'g_n3_217', category: 'grammar', level: 'N3', tags: ['compound-particle', 'source'],
        stem: '天気{てんき}予報{よほう}___、明日{あした}は雨{あめ}が降{ふ}るそうだ。',
        stemZh: '根據天氣預報，明天好像會下雨。',
        options: [
            { text: 'によると', reason: '正確！「によると」表示資訊的來源。' },
            { text: 'によって', reason: '「によって」表示手段或原因，不用於引用資訊來源。' },
            { text: 'について', reason: '「について」表示主題，語意不合。' },
            { text: 'にとって', reason: '「にとって」表示立場，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「によると」表示資訊的來源或依據',
            analysis: '「によると」後常接「そうだ」「ということだ」等傳聞表現。',
            comparisons: ['によると：根據（引用來源）', 'によって：因為 / 通過（手段）'],
            commonMistakes: ['○ 天気予報によると雨が降るそうだ / × 天気予報によって雨が降るそうだ → 「によって」不用於引用'],
        },
    },
    {
        id: 'g_n3_218', category: 'grammar', level: 'N3', tags: ['compound-particle', 'source'],
        stem: '新聞{しんぶん}___、来年{らいねん}から消費税{しょうひぜい}が上{あ}がるとのことだ。',
        stemZh: '據報紙報導，明年起消費稅要漲。',
        options: [
            { text: 'について', reason: '「について」表示主題，語意不合。' },
            { text: 'に関{かん}して', reason: '「に関して」表示「關於」，語意不合。' },
            { text: 'において', reason: '「において」表示場所，語意不合。' },
            { text: 'によれば', reason: '正確！「によれば」與「によると」同義，表示資訊來源。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「によれば」是「によると」的書面語形式',
            analysis: '「によると」「によれば」都表示引用資訊的來源，可互換使用。',
            comparisons: ['によると：根據（一般）', 'によれば：根據（稍正式）'],
            commonMistakes: ['○ 新聞によれば / ○ 新聞によると → 兩者可互換'],
        },
    },
    // ━━━ に基づいて (based on) ━━━
    {
        id: 'g_n3_219', category: 'grammar', level: 'N3', tags: ['compound-particle', 'basis'],
        stem: 'この計画{けいかく}は調査{ちょうさ}結果{けっか}___作{つく}られた。',
        stemZh: '這個計劃是根據調查結果制定的。',
        options: [
            { text: 'に基{もと}づいて', reason: '正確！「に基づいて」表示「根據...為基礎」。' },
            { text: 'によると', reason: '「によると」表示引用來源，不用於「以...為基礎」。' },
            { text: 'について', reason: '「について」表示主題，語意不合。' },
            { text: 'にとって', reason: '「にとって」表示立場，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に基づいて」表示以某事為基礎或根據',
            analysis: '「に基づいて」表示以事實、資料、法律等為基礎進行某動作。',
            comparisons: ['に基づいて：基於（以...為基礎）', 'によると：根據（引用來源）'],
            commonMistakes: ['○ 調査結果に基づいて作った / × 調査結果によると作った → 「によると」不接動作'],
        },
    },
    // ━━━ を通じて / を通して (through) ━━━
    {
        id: 'g_n3_220', category: 'grammar', level: 'N3', tags: ['compound-particle', 'means'],
        stem: 'インターネット___、世界中{せかいじゅう}の情報{じょうほう}が手{て}に入{はい}る。',
        stemZh: '透過網路，可以獲得全世界的資訊。',
        options: [
            { text: 'について', reason: '「について」表示主題，語意不合。' },
            { text: 'を通{つう}じて', reason: '正確！「を通じて」表示透過某媒介或手段。' },
            { text: 'によると', reason: '「によると」表示引用來源，語意不合。' },
            { text: 'において', reason: '「において」表示場所或領域，語意不合。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「を通じて」表示透過某種媒介或手段',
            analysis: '「を通じて」用於表示透過某媒介獲取或傳遞某事物。',
            comparisons: ['を通じて：透過（媒介）', 'によって：因為 / 靠（手段）'],
            commonMistakes: ['○ インターネットを通じて情報が入る / × インターネットについて情報が入る → 「について」不表手段'],
        },
    },
    {
        id: 'g_n3_221', category: 'grammar', level: 'N3', tags: ['compound-particle', 'duration'],
        stem: '一年{いちねん}___、この地域{ちいき}は温暖{おんだん}な気候{きこう}だ。',
        stemZh: '全年期間，這個地區氣候都很溫暖。',
        options: [
            { text: 'を通{つう}じて', reason: '正確！「を通じて」也表示「在整個期間內」。' },
            { text: 'について', reason: '「について」表示主題，語意不合。' },
            { text: 'において', reason: '「において」表示場所，不合語意。' },
            { text: 'にかけて', reason: '「にかけて」表示「從...到...」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を通じて」也可表示「在整個...期間」',
            analysis: '「を通じて」除了「透過」之意外，也可表示時間上的「整個期間」。',
            comparisons: ['を通じて：整個期間', 'にかけて：從...到...（某段期間）'],
            commonMistakes: ['○ 一年を通じて温暖だ / × 一年にかけて温暖だ → 「にかけて」需要起點'],
        },
    },
    // ━━━ をめぐって (concerning / surrounding) ━━━
    {
        id: 'g_n3_222', category: 'grammar', level: 'N3', tags: ['compound-particle', 'dispute'],
        stem: '新{あたら}しい法律{ほうりつ}___、国会{こっかい}で激{はげ}しい議論{ぎろん}が行{おこな}われている。',
        stemZh: '圍繞新法律，國會正在進行激烈的討論。',
        options: [
            { text: 'について', reason: '「について」也可用，但「をめぐって」更適合帶有爭議性的話題。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對...」，語意不合。' },
            { text: 'をめぐって', reason: '正確！「をめぐって」表示「圍繞（有爭議的話題）」。' },
            { text: 'を通{つう}じて', reason: '「を通じて」表示「透過」，語意不合。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「をめぐって」用於有爭議或多方意見的話題',
            analysis: '「をめぐって」表示圍繞某議題展開討論、爭論。暗示有不同立場和意見。',
            comparisons: ['をめぐって：圍繞（有爭議）', 'について：關於（中性）'],
            commonMistakes: ['○ 法律をめぐって議論する / ○ 法律について議論する → 前者帶有爭議感'],
        },
    },
    // ━━━ とは限らない (not necessarily) ━━━
    {
        id: 'g_n3_223', category: 'grammar', level: 'N3', tags: ['expression', 'partial-negation'],
        stem: '高{たか}いものがいい___。',
        stemZh: '貴的東西不一定好。',
        options: [
            { text: 'わけがない', reason: '「わけがない」表示不可能，語意太強。' },
            { text: 'わけではない', reason: '「わけではない」表示並非，語意接近但不是慣用表達。' },
            { text: 'はずがない', reason: '「はずがない」表示按理不可能，語意太強。' },
            { text: 'とは限{かぎ}らない', reason: '正確！「とは限らない」表示「不一定」。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「とは限らない」表示「不一定」「未必」',
            analysis: '「とは限らない」用於否定一般性判斷，表示「不一定如此」。',
            comparisons: ['とは限らない：不一定（部分否定）', 'わけがない：不可能（完全否定）'],
            commonMistakes: ['○ いいとは限らない / × いいわけがない → 「わけがない」否定太強'],
        },
    },
    {
        id: 'g_n3_224', category: 'grammar', level: 'N3', tags: ['expression', 'partial-negation'],
        stem: '有名{ゆうめい}なレストランが美味{おい}しい___。実際{じっさい}に行{い}ってみないとわからない。',
        stemZh: '有名的餐廳不一定好吃。不去實際嘗試就不知道。',
        options: [
            { text: 'とは限{かぎ}らない', reason: '正確！「とは限らない」表示不一定如此。' },
            { text: 'に違{ちが}いない', reason: '「に違いない」表示一定，語意完全相反。' },
            { text: 'にすぎない', reason: '「にすぎない」表示僅僅，語意不合。' },
            { text: 'に決{き}まっている', reason: '「に決まっている」表示肯定，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とは限らない」否定常識或偏見',
            analysis: '「とは限らない」常用於打破一般人的刻板印象或常識。',
            comparisons: ['とは限らない：不一定（反對常識）', 'に違いない：一定是（肯定推測）'],
            commonMistakes: ['○ 美味しいとは限らない / × 美味しいに違いない → 語意完全相反'],
        },
    },
    // ━━━ おかげで (thanks to / because of - positive) ━━━
    {
        id: 'g_n3_225', category: 'grammar', level: 'N3', tags: ['cause-effect', 'positive'],
        stem: '先生{せんせい}の___、試験{しけん}に合格{ごうかく}することができた。',
        stemZh: '多虧了老師，才能通過考試。',
        options: [
            { text: 'せいで', reason: '「せいで」用於負面結果，不用於正面結果。' },
            { text: 'ために', reason: '「ために」表示目的或原因，較中性。' },
            { text: 'おかげで', reason: '正確！「おかげで」表示「多虧」，用於好的結果。' },
            { text: 'くせに', reason: '「くせに」表示「明明」，帶有責備語氣。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「おかげで」表示導致好結果的原因',
            analysis: '「おかげで」表示感謝某人或某事帶來正面結果。',
            comparisons: ['おかげで：多虧（正面結果）', 'せいで：都怪（負面結果）'],
            commonMistakes: ['○ 先生のおかげで合格した / × 先生のせいで合格した → 「せいで」用於負面'],
        },
    },
    // ━━━ せいで (because of - negative) ━━━
    {
        id: 'g_n3_226', category: 'grammar', level: 'N3', tags: ['cause-effect', 'negative'],
        stem: '台風{たいふう}の___、飛行機{ひこうき}が欠航{けっこう}になった。',
        stemZh: '都是因為颱風，飛機停飛了。',
        options: [
            { text: 'おかげで', reason: '「おかげで」用於正面結果，此處是負面結果。' },
            { text: 'せいで', reason: '正確！「せいで」表示導致負面結果的原因。' },
            { text: 'ために', reason: '「ために」較中性，不帶責怪語氣。' },
            { text: 'ばかりに', reason: '「ばかりに」表示「就因為」，語意接近但此處「せいで」更自然。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「せいで」表示導致負面結果的原因',
            analysis: '「せいで」帶有責怪語氣，將不好的結果歸咎於某原因。',
            comparisons: ['せいで：因為...（負面歸咎）', 'おかげで：多虧...（正面感謝）'],
            commonMistakes: ['○ 台風のせいで欠航になった / × 台風のおかげで欠航になった → 「おかげで」不用於負面'],
        },
    },
    // ━━━ 最中に (in the middle of) ━━━
    {
        id: 'g_n3_227', category: 'grammar', level: 'N3', tags: ['time', 'interruption'],
        stem: '会議{かいぎ}の___、突然{とつぜん}停電{ていでん}した。',
        stemZh: '正在開會的時候，突然停電了。',
        options: [
            { text: '途中{とちゅう}で', reason: '「途中で」表示「中途」，語感稍有不同。' },
            { text: '間{あいだ}に', reason: '「間に」表示「在...期間」，語意接近但不強調突發。' },
            { text: '最中{さいちゅう}に', reason: '正確！「最中に」表示正在進行某動作時發生了意外事件。' },
            { text: 'うちに', reason: '「うちに」表示「趁著」，語意不合。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「最中に」表示正在做某事時發生了突發事件',
            analysis: '「最中に」強調動作正在進行的高峰期，常搭配意外或突發事件。',
            comparisons: ['最中に：正在...的時候（突發）', '途中で：在...的中途（過程中）'],
            commonMistakes: ['○ 会議の最中に停電した / ○ 会議の途中で停電した → 「最中に」更強調突發感'],
        },
    },
    // ━━━ 途中で (on the way / in the middle) ━━━
    {
        id: 'g_n3_228', category: 'grammar', level: 'N3', tags: ['time', 'process'],
        stem: '学校{がっこう}に行{い}く___、財布{さいふ}を落{お}としてしまった。',
        stemZh: '在去學校的途中，把錢包弄掉了。',
        options: [
            { text: '途中{とちゅう}で', reason: '正確！「途中で」表示「在途中」，在移動過程中發生了事情。' },
            { text: '最中{さいちゅう}に', reason: '「最中に」更強調動作高峰期，不常用於移動途中。' },
            { text: 'ついでに', reason: '「ついでに」表示「順便」，語意不合。' },
            { text: '間{あいだ}に', reason: '「間に」表示期間內，不特指途中。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「途中で」表示在移動或進行過程的中途',
            analysis: '「途中で」可用於物理移動（去學校的途中）或過程進行（工作途中）。',
            comparisons: ['途中で：在途中（移動/過程）', '最中に：正在...的時候（高峰期）'],
            commonMistakes: ['○ 行く途中で落とした / × 行く最中に落とした → 移動過程用「途中で」更自然'],
        },
    },
    // ━━━ っぽい (tendency / -ish) ━━━
    {
        id: 'g_n3_229', category: 'grammar', level: 'N3', tags: ['suffix', 'tendency'],
        stem: 'あの人{ひと}は怒{おこ}り___から、気{き}をつけたほうがいい。',
        stemZh: '那個人容易生氣，最好小心點。',
        options: [
            { text: 'がち', reason: '「がち」也表示傾向，但用法不同。「怒りがち」文法不自然。' },
            { text: 'っぽい', reason: '正確！「怒りっぽい」表示「容易生氣的」。' },
            { text: '気味{ぎみ}', reason: '「気味」表示「有點」，「怒り気味」不自然。' },
            { text: 'だらけ', reason: '「だらけ」表示「滿是」，不用於性格特徵。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「っぽい」表示「容易...的」「有...傾向的」',
            analysis: '「っぽい」接在動詞連用形或名詞後，表示某種傾向或特性。「怒りっぽい」是固定用法。',
            comparisons: ['っぽい：容易...的（性格特徵）', 'がち：往往會...（不好的傾向）'],
            commonMistakes: ['○ 怒りっぽい / × 怒りがち → 「がち」通常不直接接「怒り」'],
        },
    },
    {
        id: 'g_n3_230', category: 'grammar', level: 'N3', tags: ['suffix', 'tendency'],
        stem: 'この服{ふく}は安{やす}___に見{み}えるから、あまり好{す}きじゃない。',
        stemZh: '這件衣服看起來很廉價，我不太喜歡。',
        options: [
            { text: 'っぽく', reason: '正確！「安っぽく」是「安っぽい」的連用形，表示「看起來廉價」。' },
            { text: 'がちに', reason: '「がちに」語法不自然。' },
            { text: '気味{ぎみ}', reason: '「安気味」不存在。' },
            { text: 'だらけ', reason: '「安だらけ」不存在。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「っぽい」接在形容詞詞幹後表示「有...的感覺」',
            analysis: '「安っぽい」表示看起來便宜、沒有質感。「っぽい」接形容詞詞幹是常見用法。',
            comparisons: ['安っぽい：看起來廉價的', '子供っぽい：幼稚的', '大人っぽい：成熟的'],
            commonMistakes: ['○ 安っぽく見える / × 安く見える → 「安っぽい」帶有負面評價感'],
        },
    },
    // ━━━ 気味 (slight tendency) ━━━
    {
        id: 'g_n3_231', category: 'grammar', level: 'N3', tags: ['suffix', 'tendency'],
        stem: '最近{さいきん}、風邪{かぜ}___で体{からだ}がだるい。',
        stemZh: '最近有點感冒，身體很倦怠。',
        options: [
            { text: 'っぽい', reason: '「風邪っぽい」也可以但語感不同，偏「像感冒」。' },
            { text: '気味{ぎみ}', reason: '正確！「風邪気味」表示「有點感冒」。' },
            { text: 'がち', reason: '「風邪がち」表示經常感冒，不是現在的狀態。' },
            { text: 'だらけ', reason: '「風邪だらけ」不自然。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「気味」表示「有點...」「稍微有...傾向」',
            analysis: '「気味」接在名詞或動詞連用形後，表示輕微的程度或傾向。「風邪気味」是常見用法。',
            comparisons: ['気味：有點...（輕微）', 'っぽい：像...的（更明顯的傾向）'],
            commonMistakes: ['○ 風邪気味だ / ○ 風邪っぽい → 「気味」是輕微的，「っぽい」更明顯'],
        },
    },
    // ━━━ がち (tend to - negative) ━━━
    {
        id: 'g_n3_232', category: 'grammar', level: 'N3', tags: ['suffix', 'tendency'],
        stem: '雨{あめ}の日{ひ}は家{いえ}にこもり___だ。',
        stemZh: '下雨天往往會待在家裡。',
        options: [
            { text: 'っぽい', reason: '「こもりっぽい」不自然。' },
            { text: '気味{ぎみ}', reason: '「こもり気味」語意不同，偏「有點宅」。' },
            { text: 'がち', reason: '正確！「がち」表示「往往會...」，常帶有負面傾向。' },
            { text: 'だらけ', reason: '「こもりだらけ」不存在。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「がち」表示容易發生某事（常帶負面含義）',
            analysis: '「がち」接在動詞連用形或名詞後，表示經常或容易出現某種（通常是不好的）傾向。',
            comparisons: ['がち：往往會...（負面傾向）', '気味：有點...（輕微程度）'],
            commonMistakes: ['○ こもりがちだ / × こもりっぽい → 「っぽい」不適合接「こもる」'],
        },
    },
    // ━━━ 向け (aimed at / for) ━━━
    {
        id: 'g_n3_233', category: 'grammar', level: 'N3', tags: ['suffix', 'target'],
        stem: 'この本{ほん}は子供{こども}___に書{か}かれている。',
        stemZh: '這本書是寫給孩子們看的。',
        options: [
            { text: '向{む}き', reason: '「向き」表示「適合」，語意接近但「向け」更合適。' },
            { text: '向{む}け', reason: '正確！「向け」表示「面向...的」「針對...的」。' },
            { text: 'っぽい', reason: '「子供っぽい」表示「幼稚的」，語意不同。' },
            { text: 'だらけ', reason: '「子供だらけ」表示「到處都是小孩」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「向け」表示「面向某對象」「針對某群體」',
            analysis: '「向け」用於表示產品、作品等的目標對象。「子供向けの本」= 兒童讀物。',
            comparisons: ['向け：面向（目標對象）', '向き：適合（適合某類型的人）'],
            commonMistakes: ['○ 子供向けの本 / × 子供向きの本 → 「向き」偏自然適合，「向け」偏刻意設計'],
        },
    },
    // ━━━ 向き (suited for) ━━━
    {
        id: 'g_n3_234', category: 'grammar', level: 'N3', tags: ['suffix', 'suitability'],
        stem: 'この部屋{へや}は南{みなみ}___で日当{ひあ}たりがいい。',
        stemZh: '這個房間朝南，日照很好。',
        options: [
            { text: '向{む}き', reason: '正確！「南向き」表示「朝南方向」。' },
            { text: '向{む}け', reason: '「南向け」不自然，方向用「向き」。' },
            { text: 'っぽい', reason: '「南っぽい」不存在。' },
            { text: '側{がわ}', reason: '「南側」也可以表示南邊，但語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「向き」表示朝向或適合',
            analysis: '「向き」有兩個意思：1. 物理方向（南向き）；2. 適合某對象（初心者向き）。',
            comparisons: ['向き：朝向 / 適合', '向け：針對（有目的地設計）'],
            commonMistakes: ['○ 南向きの部屋 / × 南向けの部屋 → 方向用「向き」'],
        },
    },
    // ━━━ だらけ (full of - negative) ━━━
    {
        id: 'g_n3_235', category: 'grammar', level: 'N3', tags: ['suffix', 'abundance'],
        stem: '部屋{へや}はゴミ___で、とても汚{きたな}い。',
        stemZh: '房間裡都是垃圾，非常髒。',
        options: [
            { text: 'だらけ', reason: '正確！「だらけ」表示「到處都是」（負面含義）。' },
            { text: 'っぽい', reason: '「ゴミっぽい」表示「像垃圾」，語意不同。' },
            { text: 'がち', reason: '「ゴミがち」不存在。' },
            { text: '気味{ぎみ}', reason: '「ゴミ気味」不存在。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「だらけ」表示「到處都是...」（負面評價）',
            analysis: '「だらけ」接在名詞後表示充滿了不好的東西。「ゴミだらけ」「傷だらけ」「間違いだらけ」等。',
            comparisons: ['だらけ：滿是（負面）', 'いっぱい：充滿（中性或正面）'],
            commonMistakes: ['○ ゴミだらけ / × ゴミいっぱい → 「だらけ」帶有負面評價'],
        },
    },
    // ━━━ ように見える (looks like) ━━━
    {
        id: 'g_n3_236', category: 'grammar', level: 'N3', tags: ['expression', 'appearance'],
        stem: '彼女{かのじょ}は疲{つか}れている___。',
        stemZh: '她看起來很累的樣子。',
        options: [
            { text: 'ように見{み}える', reason: '正確！「ように見える」表示「看起來像...」。' },
            { text: 'ようにする', reason: '「ようにする」表示「努力做到」，語意不合。' },
            { text: 'ようになる', reason: '「ようになる」表示「變得能...」，語意不合。' },
            { text: 'ようにいう', reason: '「ようにいう」表示「叮嚀」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ように見える」表示外觀上看起來像...',
            analysis: '「ように見える」用於表示從外觀或表象判斷的印象。',
            comparisons: ['ように見える：看起來像（外觀判斷）', 'みたいに見える：看起來像（口語）'],
            commonMistakes: ['○ 疲れているように見える / × 疲れているようにする → 「ようにする」表示努力做到'],
        },
    },
    // ━━━ ざるを得ない (have no choice but) ━━━
    {
        id: 'g_n3_237', category: 'grammar', level: 'N3', tags: ['expression', 'obligation'],
        stem: '証拠{しょうこ}がこれだけあれば、認{みと}め___。',
        stemZh: '如果有這麼多證據的話，不得不承認。',
        options: [
            { text: 'るわけがない', reason: '「わけがない」表示不可能，語意相反。' },
            { text: 'ないわけにはいかない', reason: '「ないわけにはいかない」也表示「不得不」，語意接近。' },
            { text: 'ざるを得{え}ない', reason: '正確！「ざるを得ない」表示「不得不」，無法避免。' },
            { text: 'ることはない', reason: '「ることはない」表示沒必要，語意相反。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ざるを得ない」表示不得不做某事',
            analysis: '「ざるを得ない」表示雖然不想做，但在客觀情勢下不得不做。注意「する」變「せざるを得ない」。',
            comparisons: ['ざるを得ない：不得不（無法避免）', 'わけにはいかない：不能不做（義務）'],
            commonMistakes: ['○ 認めざるを得ない / × 認めないわけにはいかない → 兩者意思接近，都表示「不得不」'],
        },
    },
    // ━━━ にもかかわらず (despite / in spite of) ━━━
    {
        id: 'g_n3_238', category: 'grammar', level: 'N3', tags: ['conjunction', 'contrast'],
        stem: '何度{なんど}も注意{ちゅうい}した___、彼{かれ}は同{おな}じミスを繰{く}り返{かえ}す。',
        stemZh: '儘管多次提醒，他還是重複犯同樣的錯誤。',
        options: [
            { text: 'のに', reason: '「のに」也表示逆接，但「にもかかわらず」更正式。' },
            { text: 'にもかかわらず', reason: '正確！「にもかかわらず」表示「儘管」，正式的逆接表現。' },
            { text: 'ので', reason: '「ので」表示原因，語意不合。' },
            { text: 'ながら', reason: '「ながら」表示同時進行，語意不合。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「にもかかわらず」表示「儘管...卻...」',
            analysis: '「にもかかわらず」是正式的逆接表現，比「のに」語氣更強，常用於書面語。',
            comparisons: ['にもかかわらず：儘管（正式）', 'のに：雖然...卻...（一般）'],
            commonMistakes: ['○ 注意したにもかかわらず / ○ 注意したのに → 前者更正式'],
        },
    },
    // ━━━ 一方で (on the other hand / while) ━━━
    {
        id: 'g_n3_239', category: 'grammar', level: 'N3', tags: ['conjunction', 'contrast'],
        stem: '都会{とかい}は便利{べんり}な___、自然{しぜん}が少{すく}ない。',
        stemZh: '城市雖然方便，但另一方面自然環境少。',
        options: [
            { text: '一方{いっぽう}で', reason: '正確！「一方で」表示「另一方面」，對比兩面。' },
            { text: 'わけで', reason: '「わけで」表示「所以」，語意不合。' },
            { text: 'ところで', reason: '「ところで」表示「話說」，語意不合。' },
            { text: 'つまり', reason: '「つまり」表示「也就是說」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「一方で」表示對比事物的兩面',
            analysis: '「一方で」用於指出同一事物或同一主題的兩個不同面向。',
            comparisons: ['一方で：另一方面（對比）', '反面：另一面（名詞）'],
            commonMistakes: ['○ 便利な一方で自然が少ない / × 便利なところで自然が少ない → 「ところで」不表對比'],
        },
    },
    // ━━━ つまり (in other words) ━━━
    {
        id: 'g_n3_240', category: 'grammar', level: 'N3', tags: ['conjunction', 'summary'],
        stem: '彼{かれ}は社長{しゃちょう}の息子{むすこ}だ。___、将来{しょうらい}はこの会社{かいしゃ}を継{つ}ぐだろう。',
        stemZh: '他是社長的兒子。也就是說，將來大概會繼承公司吧。',
        options: [
            { text: 'さらに', reason: '「さらに」表示「而且」，語意不合。' },
            { text: 'ところが', reason: '「ところが」表示「然而」，語意不合。' },
            { text: 'つまり', reason: '正確！「つまり」表示「也就是說」，總結前述內容。' },
            { text: 'しかし', reason: '「しかし」表示「但是」，語意不合。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「つまり」用於歸納總結或換句話說',
            analysis: '「つまり」將前述內容換一種說法或進行歸納總結。',
            comparisons: ['つまり：也就是說（總結）', '要するに：總而言之（概括）'],
            commonMistakes: ['○ つまり、会社を継ぐだろう / × ところが、会社を継ぐだろう → 「ところが」是逆接'],
        },
    },
    // ━━━ ばいい (should / it would be good if) ━━━
    {
        id: 'g_n3_241', category: 'grammar', level: 'N3', tags: ['expression', 'advice'],
        stem: '分{わ}からないことがあったら、先生{せんせい}に聞{き}け___。',
        stemZh: '有不懂的事的話，問老師就好了。',
        options: [
            { text: 'ばいい', reason: '正確！「ばいい」表示「...就好了」，建議或簡單解法。' },
            { text: 'べきだ', reason: '「べきだ」表示「應該」，語氣較強。' },
            { text: 'ことだ', reason: '「ことだ」也表示建議，但語氣較嚴肅。' },
            { text: 'ものだ', reason: '「ものだ」表示常理或感嘆，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ばいい」表示簡單的建議或解決方法',
            analysis: '「ばいい」用於建議做某事就能解決問題，語氣較輕鬆。',
            comparisons: ['ばいい：...就好了（輕鬆建議）', 'べきだ：應該（義務性強）'],
            commonMistakes: ['○ 先生に聞けばいい / × 先生に聞くべきだ → 後者語氣太強'],
        },
    },
    // ━━━ ばよかった (should have / wish I had) ━━━
    {
        id: 'g_n3_242', category: 'grammar', level: 'N3', tags: ['expression', 'regret'],
        stem: 'もっと早{はや}く起{お}きれ___。電車{でんしゃ}に乗{の}り遅{おく}れてしまった。',
        stemZh: '要是早點起床就好了。結果沒趕上電車。',
        options: [
            { text: 'ばいい', reason: '「ばいい」表示建議，不表示後悔。' },
            { text: 'ばよかった', reason: '正確！「ばよかった」表示對過去的後悔。' },
            { text: 'たらいい', reason: '「たらいい」表示建議或希望，不表示後悔。' },
            { text: 'べきだった', reason: '「べきだった」也表示後悔，但語氣更嚴厲。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ばよかった」表示「要是...就好了」的後悔',
            analysis: '「ばよかった」用於表達對過去沒做某事的後悔。',
            comparisons: ['ばよかった：要是...就好了（後悔）', 'ばいい：...就好了（建議）'],
            commonMistakes: ['○ 起きればよかった / × 起きればいい → 後者是現在的建議，不是後悔'],
        },
    },
    // ━━━ べきだ (should / ought to) ━━━
    {
        id: 'g_n3_243', category: 'grammar', level: 'N3', tags: ['expression', 'obligation'],
        stem: '約束{やくそく}は守{まも}る___。',
        stemZh: '應該遵守約定。',
        options: [
            { text: 'ことだ', reason: '「ことだ」也表示建議，但「べきだ」更強調義務。' },
            { text: 'ものだ', reason: '「ものだ」表示常理或感嘆，語意接近但不同。' },
            { text: 'はずだ', reason: '「はずだ」表示推測，語意不合。' },
            { text: 'べきだ', reason: '正確！「べきだ」表示「應該」，強調義務或道德責任。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「べきだ」表示義務性的「應該」',
            analysis: '「べきだ」表示根據道德、社會規範等認為「應該做」的事。語氣較強。',
            comparisons: ['べきだ：應該（義務感強）', 'ほうがいい：最好（建議，較輕）'],
            commonMistakes: ['○ 約束は守るべきだ / ○ 約束は守ったほうがいい → 「べきだ」更強硬'],
        },
    },
    // ━━━ ことから (because / from the fact that) ━━━
    {
        id: 'g_n3_244', category: 'grammar', level: 'N3', tags: ['expression', 'reason'],
        stem: '形{かたち}が星{ほし}に似{に}ている___、「ヒトデ」と名付{なづ}けられた。',
        stemZh: '因為形狀像星星，所以被取名為「海星」。',
        options: [
            { text: 'ので', reason: '「ので」也表示原因，但「ことから」更強調事實依據。' },
            { text: 'から', reason: '「から」也表示原因，但較口語化。' },
            { text: 'ことから', reason: '正確！「ことから」表示根據某事實得出結論或命名。' },
            { text: 'ために', reason: '「ために」表示目的或原因，語感不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ことから」表示基於某事實而產生某結果',
            analysis: '「ことから」常用於說明命名的由來或結論的依據。',
            comparisons: ['ことから：因為...的事實（說明由來）', 'ので：因為（一般原因）'],
            commonMistakes: ['○ 似ていることから名付けられた / × 似ているので名付けられた → 前者更適合說明由來'],
        },
    },
    // ━━━ ことになっている (it is a rule that / supposed to) ━━━
    {
        id: 'g_n3_245', category: 'grammar', level: 'N3', tags: ['expression', 'rule'],
        stem: 'この学校{がっこう}では、携帯{けいたい}電話{でんわ}を使{つか}わない___。',
        stemZh: '在這所學校，規定不能使用手機。',
        options: [
            { text: 'ことにしている', reason: '「ことにしている」表示個人習慣的決定。' },
            { text: 'ことになっている', reason: '正確！「ことになっている」表示已被決定的規則或慣例。' },
            { text: 'ことにした', reason: '「ことにした」表示過去做的決定。' },
            { text: 'ことはない', reason: '「ことはない」表示沒必要，語意不合。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ことになっている」表示既定的規則或慣例',
            analysis: '「ことになっている」用於表示已被決定好的規則、制度或約定，主語不是決定者。',
            comparisons: ['ことになっている：規定...（已定的規則）', 'ことにしている：自己決定...（個人習慣）'],
            commonMistakes: ['○ 使わないことになっている / × 使わないことにしている → 校規不是個人決定'],
        },
    },
    // ━━━ ことにしている (make it a habit / have decided to) ━━━
    {
        id: 'g_n3_246', category: 'grammar', level: 'N3', tags: ['expression', 'habit'],
        stem: '健康{けんこう}のために、毎日{まいにち}野菜{やさい}を食{た}べる___。',
        stemZh: '為了健康，我一直堅持每天吃蔬菜。',
        options: [
            { text: 'ことになっている', reason: '「ことになっている」表示外部規定，非個人習慣。' },
            { text: 'ことにした', reason: '「ことにした」表示過去某一次的決定。' },
            { text: 'ことにしている', reason: '正確！「ことにしている」表示一直保持的個人習慣。' },
            { text: 'ことだ', reason: '「ことだ」表示建議，語意不合。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ことにしている」表示堅持的個人習慣',
            analysis: '「ことにしている」表示過去做了決定，並一直持續實行至今的習慣。',
            comparisons: ['ことにしている：堅持（個人習慣）', 'ことにした：決定了（單次決定）'],
            commonMistakes: ['○ 食べることにしている / × 食べることにした → 前者強調持續性'],
        },
    },
    // ━━━ ほど～ない (not as ~ as) ━━━
    {
        id: 'g_n3_247', category: 'grammar', level: 'N3', tags: ['degree', 'comparison'],
        stem: '東京{とうきょう}は大阪{おおさか}___人{ひと}が多{おお}くない。',
        stemZh: '東京沒有大阪那麼多人。',
        options: [
            { text: 'より', reason: '「より」表示「比」，不表示「沒有...那麼」。' },
            { text: 'くらい', reason: '「くらい」表示程度，不用於此否定比較。' },
            { text: 'ほど', reason: '正確！「ほど～ない」表示「沒有...那麼...」。' },
            { text: 'みたいに', reason: '「みたいに」表示「像...一樣」，語法不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ほど～ない」表示「沒有...那麼...」的比較',
            analysis: '「AはBほど～ない」表示A不及B的程度。注意這裡東京和大阪的位置是例句設定。',
            comparisons: ['ほど～ない：沒有...那麼...（否定比較）', 'より：比...（肯定比較）'],
            commonMistakes: ['○ 大阪ほど多くない / × 大阪より多くない → 「より～ない」語意不同'],
        },
    },
    // ━━━ ぶりに (for the first time in ~) ━━━
    {
        id: 'g_n3_248', category: 'grammar', level: 'N3', tags: ['time', 'interval'],
        stem: '3年{ねん}___、故郷{こきょう}に帰{かえ}った。',
        stemZh: '時隔三年回到了故鄉。',
        options: [
            { text: 'ぶりに', reason: '正確！「ぶりに」表示「時隔...之後」。' },
            { text: 'ごとに', reason: '「ごとに」表示「每隔」，語意不同。' },
            { text: '以来{いらい}', reason: '「以来」表示「自從」，語法不同。' },
            { text: '後{あと}で', reason: '「後で」表示「之後」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ぶりに」表示「時隔...」',
            analysis: '「ぶりに」表示經過一段時間後再次做某事。常與時間長度搭配。',
            comparisons: ['ぶりに：時隔...（再次）', 'ごとに：每隔...（定期）'],
            commonMistakes: ['○ 3年ぶりに帰った / × 3年ごとに帰った → 「ごとに」表示每三年一次'],
        },
    },
    // ━━━ たものだ (used to) ━━━
    {
        id: 'g_n3_249', category: 'grammar', level: 'N3', tags: ['expression', 'nostalgia'],
        stem: '子供{こども}の頃{ころ}、よくこの川{かわ}で遊{あそ}んだ___。',
        stemZh: '小時候，經常在這條河裡玩呢。',
        options: [
            { text: 'ことだ', reason: '「ことだ」表示建議，不用於回憶。' },
            { text: 'わけだ', reason: '「わけだ」表示結論，語意不合。' },
            { text: 'ものだ', reason: '正確！「たものだ」表示懷念過去常做的事。' },
            { text: 'ところだ', reason: '「ところだ」表示時間點，語意不合。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「たものだ」表示對過去的懷念',
            analysis: '「たものだ」用於回憶過去常做的事，帶有懷舊感。',
            comparisons: ['たものだ：過去常常...（懷舊）', 'ていた：過去在做...（單純過去）'],
            commonMistakes: ['○ 遊んだものだ / × 遊んだことだ → 「ことだ」不表示懷念'],
        },
    },
    // ━━━ たとたん (the moment / as soon as) ━━━
    {
        id: 'g_n3_250', category: 'grammar', level: 'N3', tags: ['time', 'instant'],
        stem: 'ドアを開{あ}けた___、猫{ねこ}が飛{と}び出{だ}してきた。',
        stemZh: '一打開門，貓就衝了出來。',
        options: [
            { text: 'とたん', reason: '正確！「たとたん」表示「一...就...」，瞬間發生。' },
            { text: '途中{とちゅう}で', reason: '「途中で」表示「中途」，語意不合。' },
            { text: '最中{さいちゅう}に', reason: '「最中に」表示「正在...時」，語意不合。' },
            { text: 'ついでに', reason: '「ついでに」表示「順便」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たとたん」表示「一做完就立刻...」',
            analysis: '「たとたん」表示前一動作完成的瞬間就發生後一事件。後句常是意外或突發事件。',
            comparisons: ['たとたん：一...就...（瞬間）', 'たら：如果...就...（條件）'],
            commonMistakes: ['○ 開けたとたん飛び出した / × 開けた途中で飛び出した → 「途中で」不表瞬間'],
        },
    },
    // ━━━ たびに (every time) ━━━
    {
        id: 'g_n3_251', category: 'grammar', level: 'N3', tags: ['time', 'repetition'],
        stem: 'この曲{きょく}を聞{き}く___、学生{がくせい}時代{じだい}を思{おも}い出{だ}す。',
        stemZh: '每次聽這首歌，都會想起學生時代。',
        options: [
            { text: 'たびに', reason: '正確！「たびに」表示「每次...就...」。' },
            { text: 'ごとに', reason: '「ごとに」也表示「每」，但更偏定期反覆。' },
            { text: 'うちに', reason: '「うちに」表示「趁著」，語意不合。' },
            { text: '際{さい}に', reason: '「際に」表示「在...之時」，較正式，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たびに」表示「每次做...就...」',
            analysis: '「たびに」用於表示每次發生某事時，就伴隨發生另一件事。',
            comparisons: ['たびに：每次...就...（伴隨結果）', 'ごとに：每...（定期）'],
            commonMistakes: ['○ 聞くたびに思い出す / × 聞くごとに思い出す → 「ごとに」偏定期性'],
        },
    },
    // ━━━ ごとに (every / each) ━━━
    {
        id: 'g_n3_252', category: 'grammar', level: 'N3', tags: ['time', 'interval'],
        stem: 'この薬{くすり}は4時間{じかん}___飲{の}んでください。',
        stemZh: '這個藥請每隔四小時吃一次。',
        options: [
            { text: 'たびに', reason: '「たびに」表示「每次」，不用於定時間隔。' },
            { text: 'おきに', reason: '「おきに」也表示間隔，但語感稍不同。' },
            { text: 'ごとに', reason: '正確！「ごとに」表示「每隔...」，固定間隔。' },
            { text: 'ぶりに', reason: '「ぶりに」表示「時隔」，語意不合。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ごとに」表示每隔固定間隔',
            analysis: '「ごとに」用於表示固定間隔重複的動作。「4時間ごとに」= 每隔四小時。',
            comparisons: ['ごとに：每隔（固定間隔）', 'たびに：每次（伴隨事件）'],
            commonMistakes: ['○ 4時間ごとに飲む / × 4時間たびに飲む → 「たびに」不接時間量'],
        },
    },
    // ━━━ ついでに (while you're at it) ━━━
    {
        id: 'g_n3_253', category: 'grammar', level: 'N3', tags: ['conjunction', 'convenience'],
        stem: '郵便局{ゆうびんきょく}に行{い}った___、切手{きって}も買{か}ってきた。',
        stemZh: '去郵局的時候，順便也買了郵票。',
        options: [
            { text: 'ついでに', reason: '正確！「ついでに」表示「順便」做另一件事。' },
            { text: 'ところで', reason: '「ところで」表示「話說」，語意不合。' },
            { text: 'うちに', reason: '「うちに」表示「趁著」，語意不同。' },
            { text: 'たびに', reason: '「たびに」表示「每次」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ついでに」表示做A的同時順便做B',
            analysis: '「ついでに」表示趁著做某事的機會，順帶做另一件事。',
            comparisons: ['ついでに：順便（趁機會）', 'ながら：一邊...一邊...（同時進行）'],
            commonMistakes: ['○ 行ったついでに買った / × 行ったところで買った → 「ところで」不表示順便'],
        },
    },
    // ━━━ うちに (while / before it changes) ━━━
    {
        id: 'g_n3_254', category: 'grammar', level: 'N3', tags: ['time', 'before-change'],
        stem: '暗{くら}くならない___、帰{かえ}りましょう。',
        stemZh: '趁天還沒黑，回去吧。',
        options: [
            { text: 'うちに', reason: '正確！「ないうちに」表示「趁還沒...的時候」。' },
            { text: '間{あいだ}に', reason: '「間に」也可以，但「うちに」更強調「趁著」。' },
            { text: '最中{さいちゅう}に', reason: '「最中に」表示正在做某事時，語法不合。' },
            { text: '途中{とちゅう}で', reason: '「途中で」表示中途，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ないうちに」表示「趁還沒...的時候」',
            analysis: '「うちに」強調在某狀態改變之前趕快做某事。',
            comparisons: ['うちに：趁著（狀態變化前）', '間に：在...期間內（持續期間）'],
            commonMistakes: ['○ 暗くならないうちに帰る / ○ 暗くならない間に帰る → 「うちに」更強調急迫感'],
        },
    },
    // ━━━ 際に (when / at the time of) ━━━
    {
        id: 'g_n3_255', category: 'grammar', level: 'N3', tags: ['time', 'formal'],
        stem: 'お申{もう}し込{こ}みの___、身分{みぶん}証明書{しょうめいしょ}をご持参{じさん}ください。',
        stemZh: '申請時，請攜帶身分證明文件。',
        options: [
            { text: '時{とき}に', reason: '「時に」也表示「在...時」，但「際に」更正式。' },
            { text: '際{さい}に', reason: '正確！「際に」在正式場合表示「在...之時」。' },
            { text: 'ついでに', reason: '「ついでに」表示「順便」，語意不合。' },
            { text: 'うちに', reason: '「うちに」表示「趁著」，語意不合。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「際に」是「時に」的正式書面用法',
            analysis: '「際に」常用於公告、說明書等正式場合，表示「在...之際」。',
            comparisons: ['際に：在...之際（正式）', '時に：在...的時候（一般）'],
            commonMistakes: ['○ 申し込みの際に / ○ 申し込みの時に → 前者更正式'],
        },
    },
    // ━━━ に違いない (must be / certainly) ━━━
    {
        id: 'g_n3_256', category: 'grammar', level: 'N3', tags: ['expression', 'certainty'],
        stem: 'あの人{ひと}は毎日{まいにち}走{はし}っている。マラソン選手{せんしゅ}___。',
        stemZh: '那個人每天跑步。一定是馬拉松選手。',
        options: [
            { text: 'かもしれない', reason: '「かもしれない」表示「也許」，確信度不夠。' },
            { text: 'に違{ちが}いない', reason: '正確！「に違いない」表示根據證據的強烈確信。' },
            { text: 'はずだ', reason: '「はずだ」表示「應該」，確信度較弱。' },
            { text: 'らしい', reason: '「らしい」表示「好像」，間接資訊。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「に違いない」表示強烈的確信推測',
            analysis: '「に違いない」表示說話者根據證據或理由，非常確信某事為真。',
            comparisons: ['に違いない：一定是（強烈確信）', 'はずだ：應該是（合理推測）', 'かもしれない：也許（不確定）'],
            commonMistakes: ['○ マラソン選手に違いない / × マラソン選手かもしれない → 後者確信度不夠'],
        },
    },
    // ━━━ に反して (contrary to) ━━━
    {
        id: 'g_n3_257', category: 'grammar', level: 'N3', tags: ['compound-particle', 'contrast'],
        stem: '予想{よそう}___、試合{しあい}は負{ま}けてしまった。',
        stemZh: '與預期相反，比賽輸了。',
        options: [
            { text: 'に反{はん}して', reason: '正確！「に反して」表示「與...相反」。' },
            { text: 'について', reason: '「について」表示主題，語意不合。' },
            { text: 'にとって', reason: '「にとって」表示立場，語意不合。' },
            { text: 'によって', reason: '「によって」表示原因或手段，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に反して」表示「與...相反」',
            analysis: '「に反して」用於表示結果與預期、規則、期望等相反的情況。',
            comparisons: ['に反して：與...相反（結果違背）', 'にもかかわらず：儘管（讓步）'],
            commonMistakes: ['○ 予想に反して負けた / × 予想について負けた → 「について」不表相反'],
        },
    },
    // ━━━ にしたがって (as / in accordance with) ━━━
    {
        id: 'g_n3_258', category: 'grammar', level: 'N3', tags: ['compound-particle', 'proportion'],
        stem: '高{たか}い山{やま}に登{のぼ}る___、空気{くうき}が薄{うす}くなる。',
        stemZh: '隨著爬上高山，空氣變得稀薄。',
        options: [
            { text: 'につれて', reason: '「につれて」也表示「隨著」，可互換。' },
            { text: 'にしたがって', reason: '正確！「にしたがって」表示「隨著...」的變化。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對...」，語意不合。' },
            { text: 'にとって', reason: '「にとって」表示立場，語意不合。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「にしたがって」表示伴隨某變化的另一變化',
            analysis: '「にしたがって」用於表示兩件事按比例同時變化。',
            comparisons: ['にしたがって：隨著（比例變化）', 'につれて：隨著（同義）'],
            commonMistakes: ['○ 登るにしたがって薄くなる / ○ 登るにつれて薄くなる → 兩者可互換'],
        },
    },
    // ━━━ につれて (as / along with) ━━━
    {
        id: 'g_n3_259', category: 'grammar', level: 'N3', tags: ['compound-particle', 'proportion'],
        stem: '年{とし}を取{と}る___、体力{たいりょく}が落{お}ちてくる。',
        stemZh: '隨著年紀增長，體力下降。',
        options: [
            { text: 'につれて', reason: '正確！「につれて」表示「隨著」，表示連動變化。' },
            { text: 'について', reason: '「について」表示主題，語意不合。' },
            { text: 'にかけて', reason: '「にかけて」表示「從...到...」，語意不同。' },
            { text: 'において', reason: '「において」表示場所，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「につれて」表示兩個變化的連動關係',
            analysis: '「につれて」用於表示A變化的同時B也跟著變化。',
            comparisons: ['につれて：隨著...（連動變化）', 'にしたがって：隨著...（同義）'],
            commonMistakes: ['○ 年を取るにつれて体力が落ちる / × 年を取るについて体力が落ちる → 「について」不表示連動'],
        },
    },
    // ━━━ にしても (even if) ━━━
    {
        id: 'g_n3_260', category: 'grammar', level: 'N3', tags: ['conjunction', 'concession'],
        stem: '冗談{じょうだん}だった___、あんな言{い}い方{かた}はひどい。',
        stemZh: '就算是開玩笑，那樣的說法也太過分了。',
        options: [
            { text: 'としても', reason: '「としても」也表示「即使」，可互換。' },
            { text: 'にしても', reason: '正確！「にしても」表示「即使...也」。' },
            { text: 'にしては', reason: '「にしては」表示「就...而言」，語意不同。' },
            { text: 'としては', reason: '「としては」表示「作為...來說」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「にしても」表示讓步「即使...也」',
            analysis: '「にしても」承認前提的同時，表示後面的判斷依然成立。',
            comparisons: ['にしても：即使（讓步）', 'にしては：就...而言（超出預期）'],
            commonMistakes: ['○ 冗談だったにしてもひどい / × 冗談だったにしてはひどい → 「にしては」不用於讓步'],
        },
    },
    // ━━━ にしては (for / considering) ━━━
    {
        id: 'g_n3_261', category: 'grammar', level: 'N3', tags: ['conjunction', 'expectation'],
        stem: '初心者{しょしんしゃ}___、なかなか上手{じょうず}ですね。',
        stemZh: '以初學者來說，做得相當不錯呢。',
        options: [
            { text: 'にしては', reason: '正確！「にしては」表示「就...而言」，結果超出預期。' },
            { text: 'にしても', reason: '「にしても」表示「即使」，語意不合。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，語感不同。' },
            { text: 'として', reason: '「として」表示「作為」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にしては」表示實際結果與基於某身份的預期不同',
            analysis: '「にしては」用於表示「以...的標準來看」結果出乎意料。',
            comparisons: ['にしては：以...而言（超預期）', 'にしても：即使...也（讓步）'],
            commonMistakes: ['○ 初心者にしては上手 / × 初心者にしても上手 → 「にしても」語意不同'],
        },
    },
    // ━━━ として (as / in the role of) ━━━
    {
        id: 'g_n3_262', category: 'grammar', level: 'N3', tags: ['compound-particle', 'role'],
        stem: '彼{かれ}は通訳{つうやく}___、国際{こくさい}会議{かいぎ}に参加{さんか}した。',
        stemZh: '他以口譯員的身份參加了國際會議。',
        options: [
            { text: 'にとって', reason: '「にとって」表示立場，語意不合。' },
            { text: 'について', reason: '「について」表示主題，語意不合。' },
            { text: 'として', reason: '正確！「として」表示「作為...的身份」。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對...」，語意不合。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「として」表示角色或身份',
            analysis: '「として」用於表示以某種角色、身份或立場進行某動作。',
            comparisons: ['として：作為...（角色）', 'にとって：對...而言（立場評價）'],
            commonMistakes: ['○ 通訳として参加した / × 通訳にとって参加した → 「にとって」不表身份'],
        },
    },
    // ━━━ ながらも (although / even while) ━━━
    {
        id: 'g_n3_263', category: 'grammar', level: 'N3', tags: ['conjunction', 'contrast'],
        stem: '小{ちい}さい___、この店{みせ}はとても人気{にんき}がある。',
        stemZh: '雖然小，這家店卻很受歡迎。',
        options: [
            { text: 'のに', reason: '「のに」也表示逆接，但較口語。' },
            { text: 'ながらも', reason: '正確！「ながらも」表示「雖然...但是...」。' },
            { text: 'ながら', reason: '「ながら」表示同時進行，語意不同。' },
            { text: 'けれども', reason: '「けれども」也表示轉折，但語法位置不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ながらも」表示逆接「雖然...但是...」',
            analysis: '「ながらも」接在形容詞或動詞後，表示儘管有前面的情況，後面的結果依然成立。',
            comparisons: ['ながらも：雖然...但是...（書面語）', 'のに：雖然...卻...（口語）'],
            commonMistakes: ['○ 小さいながらも人気がある / × 小さいながら人気がある → 「ながら」可省略「も」但語感稍弱'],
        },
    },
    // ━━━ くせに (even though - critical) ━━━
    {
        id: 'g_n3_264', category: 'grammar', level: 'N3', tags: ['conjunction', 'criticism'],
        stem: '自分{じぶん}はできない___、人{ひと}のことを批判{ひはん}するな。',
        stemZh: '自己明明做不到，卻批評別人。',
        options: [
            { text: 'のに', reason: '「のに」也是逆接，但不帶責備語氣。' },
            { text: 'ながら', reason: '「ながら」表示同時，語意不同。' },
            { text: 'くせに', reason: '正確！「くせに」表示「明明...卻...」，帶責備語氣。' },
            { text: 'から', reason: '「から」表示原因，語意不合。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「くせに」表示帶有不滿或責備的逆接',
            analysis: '「くせに」帶有批評、不滿的語氣，比「のに」更有責備感。',
            comparisons: ['くせに：明明...卻...（責備）', 'のに：雖然...卻...（遺憾）'],
            commonMistakes: ['○ できないくせに批判する / ○ できないのに批判する → 「くせに」帶更多批判感'],
        },
    },
    // ━━━ 割に (for / considering) ━━━
    {
        id: 'g_n3_265', category: 'grammar', level: 'N3', tags: ['conjunction', 'expectation'],
        stem: 'このレストランは値段{ねだん}の___、量{りょう}が多{おお}い。',
        stemZh: '以這家餐廳的價格而言，份量很多。',
        options: [
            { text: '割{わり}に', reason: '正確！「割に」表示「以...而言」，結果出乎預期。' },
            { text: 'ために', reason: '「ために」表示原因或目的，語意不合。' },
            { text: 'わりには', reason: '「わりには」也可以，「は」增加對比感。' },
            { text: 'ばかりに', reason: '「ばかりに」表示「就因為」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「割に」表示「以...的程度而言」結果出乎意料',
            analysis: '「割に」用於表示相對於某標準，結果不如預期或超出預期。',
            comparisons: ['割に：以...而言（意外）', 'にしては：就...來說（超出預期）'],
            commonMistakes: ['○ 値段の割に量が多い / ○ 値段にしては量が多い → 兩者語意接近'],
        },
    },
    // ━━━ ないことはない (it's not that ~ can't) ━━━
    {
        id: 'g_n3_266', category: 'grammar', level: 'N3', tags: ['expression', 'double-negation'],
        stem: '辛{から}い料理{りょうり}が食{た}べられ___が、あまり得意{とくい}ではない。',
        stemZh: '並非不能吃辣的，但不太擅長。',
        options: [
            { text: 'ないことはない', reason: '正確！「ないことはない」雙重否定，表示「並非不能」。' },
            { text: 'ないわけがない', reason: '「ないわけがない」表示「不可能不」，語氣太強。' },
            { text: 'ないはずがない', reason: '「ないはずがない」表示「不應該不能」，語意不同。' },
            { text: 'なくてもいい', reason: '「なくてもいい」表示「不用也可以」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ないことはない」表示委婉的肯定「並非不...」',
            analysis: '「ないことはない」是雙重否定，表示「能做到，但...」的保留態度。常接「が」轉折。',
            comparisons: ['ないことはない：並非不...（保留肯定）', 'ないわけがない：不可能不...（強烈肯定）'],
            commonMistakes: ['○ 食べられないことはないが / × 食べられないわけがないが → 後者太過強調'],
        },
    },
    // ━━━ どんなに～ても (no matter how much) ━━━
    {
        id: 'g_n3_267', category: 'grammar', level: 'N3', tags: ['expression', 'concession'],
        stem: '___努力{どりょく}しても、完璧{かんぺき}にはなれない。',
        stemZh: '無論多麼努力，也無法做到完美。',
        options: [
            { text: 'いくら', reason: '「いくら」也可以，「いくら～ても」也表示「無論怎麼」。' },
            { text: 'どんなに', reason: '正確！「どんなに～ても」表示「無論多麼...也」。' },
            { text: 'たとえ', reason: '「たとえ」表示「即使」，後接「ても」也可但語感不同。' },
            { text: 'もしも', reason: '「もしも」表示「萬一」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「どんなに～ても」表示「無論多麼...都」',
            analysis: '「どんなに～ても」強調程度上的讓步，不管程度有多深結果都不變。',
            comparisons: ['どんなに～ても：無論多麼（程度讓步）', 'いくら～ても：不管怎麼（同義）'],
            commonMistakes: ['○ どんなに努力しても完璧にはなれない / ○ いくら努力しても完璧にはなれない → 兩者可互換'],
        },
    },
    // ━━━ たとえ～ても (even if) ━━━
    {
        id: 'g_n3_268', category: 'grammar', level: 'N3', tags: ['expression', 'concession'],
        stem: '___雨{あめ}が降{ふ}っても、試合{しあい}は行{おこな}われる。',
        stemZh: '即使下雨，比賽也會舉行。',
        options: [
            { text: 'たとえ', reason: '正確！「たとえ～ても」表示「即使...也」。' },
            { text: 'もし', reason: '「もし」表示「如果」，不表讓步。' },
            { text: 'いくら', reason: '「いくら」偏「無論多少」，語感不同。' },
            { text: 'まさか', reason: '「まさか」表示「難道」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たとえ～ても」表示假設的讓步',
            analysis: '「たとえ～ても」用於假設某情況發生，表示結果仍然不變。',
            comparisons: ['たとえ～ても：即使（假設讓步）', 'どんなに～ても：無論多麼（程度讓步）'],
            commonMistakes: ['○ たとえ雨が降っても試合はある / × もし雨が降っても試合はある → 「もし」不如「たとえ」強調讓步'],
        },
    },
    // ━━━ どうしても (no matter what) ━━━
    {
        id: 'g_n3_269', category: 'grammar', level: 'N3', tags: ['adverb', 'emphasis'],
        stem: '___この大学{だいがく}に入{はい}りたい。',
        stemZh: '無論如何都想進這所大學。',
        options: [
            { text: 'ぜひ', reason: '「ぜひ」表示「一定要」，語氣較弱。' },
            { text: 'なるべく', reason: '「なるべく」表示「盡量」，語氣較弱。' },
            { text: 'もしかしたら', reason: '「もしかしたら」表示「也許」，語意不合。' },
            { text: 'どうしても', reason: '正確！「どうしても」表示「無論如何」，強烈意志。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「どうしても」表示強烈的意志或無法改變的事實',
            analysis: '「どうしても」用於肯定句表示強烈意志；用於否定句表示「怎麼也...不」。',
            comparisons: ['どうしても：無論如何（強烈意志）', 'ぜひ：一定要（請求/希望）'],
            commonMistakes: ['○ どうしても入りたい / × ぜひ入りたい → 「どうしても」意志更強'],
        },
    },
    // ━━━ ふりをする (pretend to) ━━━
    {
        id: 'g_n3_270', category: 'grammar', level: 'N3', tags: ['expression', 'pretense'],
        stem: '彼{かれ}は知{し}っているのに、知{し}らない___をした。',
        stemZh: '他明明知道，卻假裝不知道。',
        options: [
            { text: 'ふり', reason: '正確！「ふりをする」表示「假裝...」。' },
            { text: 'まね', reason: '「まね」表示「模仿」，語意不同。' },
            { text: 'よう', reason: '「ようをする」不存在。' },
            { text: 'つもり', reason: '「つもり」表示「打算」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ふりをする」表示假裝做某事',
            analysis: '「ふりをする」表示實際不是那樣但裝作那樣。「知らないふりをする」= 假裝不知道。',
            comparisons: ['ふりをする：假裝（故意做假）', 'つもりだ：以為 / 打算（主觀認知）'],
            commonMistakes: ['○ 知らないふりをする / × 知らないつもりにする → 「つもり」不表示假裝'],
        },
    },
    // ━━━ っぱなし (leaving something as is) ━━━
    {
        id: 'g_n3_271', category: 'grammar', level: 'N3', tags: ['suffix', 'negligence'],
        stem: 'テレビをつけ___で寝{ね}てしまった。',
        stemZh: '電視開著就睡著了。',
        options: [
            { text: 'たまま', reason: '「たまま」也表示保持狀態，但語感不同。' },
            { text: 'っぱなし', reason: '正確！「っぱなし」表示放著不管、不收拾。' },
            { text: 'っきり', reason: '「っきり」表示「自從」，語意不合。' },
            { text: 'がち', reason: '「がち」表示傾向，語意不合。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「っぱなし」表示做了某事後放著不管',
            analysis: '「っぱなし」接在動詞連用形後，表示做了某動作後沒有收拾或處理。帶有負面含義。',
            comparisons: ['っぱなし：放著不管（責備語氣）', 'たまま：保持某狀態（中性）'],
            commonMistakes: ['○ つけっぱなしで寝た / ○ つけたままで寝た → 前者帶有批評語氣'],
        },
    },
    // ━━━ きり (only / since) ━━━
    {
        id: 'g_n3_272', category: 'grammar', level: 'N3', tags: ['particle', 'limitation'],
        stem: '彼{かれ}とは一度{いちど}会{あ}った___、もう会{あ}っていない。',
        stemZh: '和他只見過一次面，之後就沒再見了。',
        options: [
            { text: 'きり', reason: '正確！「きり」表示「自從...以後就沒再...」。' },
            { text: 'だけ', reason: '「だけ」表示「只有」，但不含「之後就沒再」的語意。' },
            { text: 'ばかり', reason: '「ばかり」表示「才剛」或「淨是」，語意不合。' },
            { text: 'まで', reason: '「まで」表示「到...為止」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「きり」表示「做了...之後就再也沒...」',
            analysis: '「きり」表示某事只發生過一次或從某時起就沒再發生。',
            comparisons: ['きり：自從...就沒再（限定+持續）', 'だけ：只有（單純限定）'],
            commonMistakes: ['○ 会ったきり会っていない / × 会っただけ会っていない → 「だけ」不含持續未再的語意'],
        },
    },
    // ━━━ かける (to start doing / half-done) ━━━
    {
        id: 'g_n3_273', category: 'grammar', level: 'N3', tags: ['suffix', 'incomplete'],
        stem: '言{い}い___て、彼女{かのじょ}は急{きゅう}に黙{だま}ってしまった。',
        stemZh: '話說到一半，她突然沉默了。',
        options: [
            { text: 'かけ', reason: '正確！「言いかけて」表示話說到一半就停住了。' },
            { text: 'かねて', reason: '「言いかねて」表示說不出口，語意不同。' },
            { text: 'だして', reason: '「言い出して」表示開始說，語意不同。' },
            { text: 'すぎて', reason: '「言いすぎて」表示說太多，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かける」表示動作做到一半、剛開始做',
            analysis: '「かける」接在動詞連用形後，表示動作才開始或只做了一半。',
            comparisons: ['かける：做到一半（中途）', '出す：開始做（起始）'],
            commonMistakes: ['○ 言いかけてやめた / × 言い出してやめた → 「出す」偏重開始而非中途'],
        },
    },
    // ━━━ 切る (to completely do) ━━━
    {
        id: 'g_n3_274', category: 'grammar', level: 'N3', tags: ['suffix', 'completion'],
        stem: 'マラソンを最後{さいご}まで走{はし}り___た。',
        stemZh: '把馬拉松跑完了。',
        options: [
            { text: '切{き}っ', reason: '正確！「走り切った」表示「跑完全程」。' },
            { text: '出{だ}し', reason: '「走り出した」表示「開始跑」，語意不同。' },
            { text: '続{つづ}け', reason: '「走り続けた」表示「持續跑」，語意不同。' },
            { text: '終{お}わっ', reason: '「走り終わった」也表示跑完，但「切る」更強調克服困難完成。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「切る」表示徹底完成某動作',
            analysis: '「切る」接在動詞連用形後，表示將動作徹底完成，常含克服困難的語感。',
            comparisons: ['切る：做完（徹底完成）', '終わる：結束（自然完成）'],
            commonMistakes: ['○ 走り切った / ○ 走り終わった → 「切る」更強調努力和完成感'],
        },
    },
    // ━━━ 切れない (unable to finish) ━━━
    {
        id: 'g_n3_275', category: 'grammar', level: 'N3', tags: ['suffix', 'inability'],
        stem: '食{た}べ物{もの}が多{おお}すぎて、食{た}べ___。',
        stemZh: '食物太多了，吃不完。',
        options: [
            { text: '切{き}れない', reason: '正確！「食べ切れない」表示「吃不完」。' },
            { text: 'られない', reason: '「食べられない」表示「不能吃」，語意不同。' },
            { text: 'すぎない', reason: '「食べすぎない」表示「別吃太多」，語意不同。' },
            { text: '終{お}わらない', reason: '「食べ終わらない」也可以但不如「切れない」自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「切れない」表示「做不完」「無法徹底完成」',
            analysis: '「切れない」是「切る」的否定能力形，表示量太大而無法完全完成。',
            comparisons: ['切れない：做不完（量太大）', 'られない：不能做（不可能）'],
            commonMistakes: ['○ 食べ切れない / × 食べられない → 前者是「量太多吃不完」，後者是「不能吃」'],
        },
    },
    // ━━━ がたい (difficult to) ━━━
    {
        id: 'g_n3_276', category: 'grammar', level: 'N3', tags: ['suffix', 'difficulty'],
        stem: '彼{かれ}の行動{こうどう}は理解{りかい}し___。',
        stemZh: '他的行為令人難以理解。',
        options: [
            { text: 'にくい', reason: '「にくい」也表示「難」，但「がたい」更強調心理上的困難。' },
            { text: 'がたい', reason: '正確！「がたい」表示「難以...」，心理或本質上的困難。' },
            { text: 'づらい', reason: '「づらい」表示做起來有困難或不方便。' },
            { text: 'かねる', reason: '「かねる」表示「難以做」，語感接近但更委婉。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「がたい」表示本質上難以做到的事',
            analysis: '「がたい」用於表示心理上或本質上很難做到的事。常接「信じがたい」「理解しがたい」等。',
            comparisons: ['がたい：難以...（本質上困難）', 'にくい：不容易...（物理上困難）'],
            commonMistakes: ['○ 理解しがたい / ○ 理解しにくい → 「がたい」語氣更強'],
        },
    },
    // ━━━ かねる (unable to / hesitate to) ━━━
    {
        id: 'g_n3_277', category: 'grammar', level: 'N3', tags: ['suffix', 'inability'],
        stem: 'その件{けん}については、お答{こた}え___ます。',
        stemZh: '關於那件事，恕我無法回答。',
        options: [
            { text: 'でき', reason: '「できません」較直接，不如「かねます」委婉。' },
            { text: 'いたし', reason: '「いたしません」是敬語否定，但不含「為難」的語感。' },
            { text: 'かね', reason: '正確！「かねます」委婉表示「難以做到」。' },
            { text: 'がたく存{ぞん}じ', reason: '「がたい」過於書面化。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「かねる」委婉表示「難以做到」',
            analysis: '「かねる」在商務場合常用於委婉拒絕。「かねます」是「かねる」的敬語形。',
            comparisons: ['かねる：難以做到（委婉拒絕）', 'できない：做不到（直接）'],
            commonMistakes: ['○ お答えかねます / × お答えできません → 前者更委婉禮貌'],
        },
    },
    // ━━━ ようがない (no way to) ━━━
    {
        id: 'g_n3_278', category: 'grammar', level: 'N3', tags: ['expression', 'impossibility'],
        stem: '電話番号{でんわばんごう}が分{わ}からないので、連絡{れんらく}の___。',
        stemZh: '不知道電話號碼，所以沒辦法聯絡。',
        options: [
            { text: 'しようがない', reason: '正確！「しようがない」表示「沒辦法做」。' },
            { text: 'するわけがない', reason: '「わけがない」表示「不可能」，語意不同。' },
            { text: 'するはずがない', reason: '「はずがない」表示「不應該」，語意不同。' },
            { text: 'することはない', reason: '「ことはない」表示「沒必要」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようがない」表示客觀上沒有辦法做',
            analysis: '「ようがない」表示想做也做不到，因為缺乏條件或手段。',
            comparisons: ['ようがない：沒辦法做（缺乏手段）', 'わけにはいかない：不能做（義務限制）'],
            commonMistakes: ['○ 連絡のしようがない / × 連絡のしかたがない → 「仕方がない」意思不同'],
        },
    },
    // ━━━ ように (so that / in order to) ━━━
    {
        id: 'g_n3_279', category: 'grammar', level: 'N3', tags: ['expression', 'purpose'],
        stem: '遅刻{ちこく}しない___、早{はや}く起{お}きた。',
        stemZh: '為了不遲到，提早起床了。',
        options: [
            { text: 'ように', reason: '正確！「ように」接在非意志動詞或否定形後表示目的。' },
            { text: 'ために', reason: '「ために」接在意志動詞後表示目的，此處用否定形應用「ように」。' },
            { text: 'ことに', reason: '「ことに」不用於表示目的。' },
            { text: 'わけに', reason: '「わけに」不用於表示目的。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ように」接否定形或非意志動詞表示目的',
            analysis: '當目的是「不要做某事」或使用非意志動詞時，用「ように」而非「ために」。',
            comparisons: ['ように：為了（非意志/否定）', 'ために：為了（意志動詞）'],
            commonMistakes: ['○ 遅刻しないように早く起きた / × 遅刻しないために早く起きた → 否定形用「ように」'],
        },
    },
    // ━━━ ようとする (try to / be about to) ━━━
    {
        id: 'g_n3_280', category: 'grammar', level: 'N3', tags: ['expression', 'attempt'],
        stem: '逃{に}げ___としたが、つかまってしまった。',
        stemZh: '想要逃跑，卻被抓住了。',
        options: [
            { text: 'よう', reason: '正確！「ようとする」表示「試圖做」。' },
            { text: 'たい', reason: '「逃げたいとしたが」文法不通。' },
            { text: 'るよう', reason: '「逃げるようとした」文法不通。' },
            { text: 'そう', reason: '「逃げそうとした」文法不通。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようとする」表示試圖做某事',
            analysis: '「ようとする」接在動詞意向形後，表示「正要做」或「試圖做」。',
            comparisons: ['ようとする：試圖做（嘗試）', 'ようとしない：不想做（拒絕）'],
            commonMistakes: ['○ 逃げようとした / × 逃げたいとした → 「たい」不接「とする」'],
        },
    },
    // ━━━ ようとしない (refuse to) ━━━
    {
        id: 'g_n3_281', category: 'grammar', level: 'N3', tags: ['expression', 'refusal'],
        stem: '子供{こども}は野菜{やさい}を食{た}べ___。',
        stemZh: '小孩怎麼也不肯吃蔬菜。',
        options: [
            { text: 'ようとしない', reason: '正確！「ようとしない」表示不願意做某事。' },
            { text: 'たくない', reason: '「食べたくない」表示不想吃，但不如「ようとしない」強調拒絕。' },
            { text: 'ないことはない', reason: '「食べないことはない」表示「並非不吃」，語意相反。' },
            { text: 'わけにはいかない', reason: '「食べるわけにはいかない」表示不能吃，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようとしない」表示主動拒絕或不願意做某事',
            analysis: '「ようとしない」用於第三人稱，表示對方不願意嘗試或做某事。',
            comparisons: ['ようとしない：不肯做（拒絕嘗試）', 'たくない：不想做（意願）'],
            commonMistakes: ['○ 食べようとしない / × 食べたくない → 前者更強調拒絕態度'],
        },
    },
    // ━━━ ずに (without doing) ━━━
    {
        id: 'g_n3_282', category: 'grammar', level: 'N3', tags: ['expression', 'without'],
        stem: '朝{あさ}ご飯{はん}を食{た}べ___、学校{がっこう}に行{い}った。',
        stemZh: '沒有吃早餐就去上學了。',
        options: [
            { text: 'ないで', reason: '「ないで」也可以，但「ずに」更書面。' },
            { text: 'ずに', reason: '正確！「ずに」表示「沒有做...就...」。' },
            { text: 'なくて', reason: '「なくて」表示原因，語意不同。' },
            { text: 'ないまま', reason: '「ないまま」也可以表示「保持沒做的狀態」。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ずに」表示「沒有做...就做了另一件事」',
            analysis: '「ずに」是「ないで」的書面語形式。注意「する」的「ずに」是「せずに」。',
            comparisons: ['ずに：沒有做...就...（書面）', 'ないで：沒有做...就...（口語）'],
            commonMistakes: ['○ 食べずに行った / ○ 食べないで行った → 前者更書面化'],
        },
    },
    // ━━━ ずにはいられない (can't help but) ━━━
    {
        id: 'g_n3_283', category: 'grammar', level: 'N3', tags: ['expression', 'compulsion'],
        stem: 'あの映画{えいが}は感動的{かんどうてき}で、泣{な}か___。',
        stemZh: '那部電影太感人了，忍不住哭了。',
        options: [
            { text: 'ずにはいられなかった', reason: '正確！「ずにはいられない」表示「忍不住」。' },
            { text: 'なくてもよかった', reason: '「なくてもよかった」表示「不用也可以」，語意不合。' },
            { text: 'ないわけにはいかなかった', reason: '「ないわけにはいかない」也可表示「不得不」，但語感不同。' },
            { text: 'ざるを得{え}なかった', reason: '「ざるを得ない」表示「不得不」，偏理性。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ずにはいられない」表示無法自制的情感',
            analysis: '「ずにはいられない」表示情感上忍不住，強調無法抑制的衝動。注意「する」→「せずにはいられない」。',
            comparisons: ['ずにはいられない：忍不住（情感）', 'ざるを得ない：不得不（理性判斷）'],
            commonMistakes: ['○ 泣かずにはいられなかった / × 泣かざるを得なかった → 後者偏理性'],
        },
    },
    // ━━━ ということだ (it is said that) ━━━
    {
        id: 'g_n3_284', category: 'grammar', level: 'N3', tags: ['expression', 'hearsay'],
        stem: 'ニュースによると、来年{らいねん}から新{あたら}しい法律{ほうりつ}が施行{しこう}される___。',
        stemZh: '據新聞報導，明年起新法律將施行。',
        options: [
            { text: 'そうだ', reason: '「そうだ」也表傳聞，但「ということだ」更正式。' },
            { text: 'ということだ', reason: '正確！「ということだ」表示傳聞或歸結。' },
            { text: 'わけだ', reason: '「わけだ」表示結論，語意不同。' },
            { text: 'ことだ', reason: '「ことだ」表示建議，語意不合。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ということだ」表示引用或歸納',
            analysis: '「ということだ」有兩個用法：1. 傳聞「據說」；2. 歸結「也就是說」。',
            comparisons: ['ということだ：據說 / 也就是說', 'そうだ：據說（較口語）'],
            commonMistakes: ['○ 施行されるということだ / ○ 施行されるそうだ → 前者更正式'],
        },
    },
    // ━━━ というのは (the thing called ~) ━━━
    {
        id: 'g_n3_285', category: 'grammar', level: 'N3', tags: ['expression', 'definition'],
        stem: '「おもてなし」___、心{こころ}からお客様{きゃくさま}を歓迎{かんげい}することだ。',
        stemZh: '所謂的「おもてなし」，就是從心底歡迎客人。',
        options: [
            { text: 'ということは', reason: '「ということは」表示「也就是說」，語感不同。' },
            { text: 'というのは', reason: '正確！「というのは」用於定義或解釋詞語。' },
            { text: 'といっても', reason: '「といっても」表示「雖說」，語意不同。' },
            { text: 'というより', reason: '「というより」表示「與其說」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「というのは」用於解釋或定義某事物',
            analysis: '「というのは」用於對某個概念或用語進行解釋說明。',
            comparisons: ['というのは：所謂的...是（定義）', 'ということは：也就是說（推論）'],
            commonMistakes: ['○ 「おもてなし」というのは心から歓迎すること / × 「おもてなし」ということは → 後者是推論'],
        },
    },
    // ━━━ というより (rather than) ━━━
    {
        id: 'g_n3_286', category: 'grammar', level: 'N3', tags: ['expression', 'correction'],
        stem: '彼女{かのじょ}は美{うつく}しい___、かわいいと言{い}ったほうがいい。',
        stemZh: '與其說她漂亮，不如說可愛更合適。',
        options: [
            { text: 'というより', reason: '正確！「というより」表示「與其說...不如說...」。' },
            { text: 'といっても', reason: '「といっても」表示「雖說」，語意不同。' },
            { text: 'ということは', reason: '「ということは」表示「也就是說」，語意不同。' },
            { text: 'というのは', reason: '「というのは」表示「所謂的」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「というより」用於修正或補充前述說法',
            analysis: '「というより」表示前面的說法不太準確，提出更合適的描述。',
            comparisons: ['というより：與其說（修正）', 'むしろ：寧可...（選擇偏好）'],
            commonMistakes: ['○ 美しいというよりかわいい / × 美しいといってもかわいい → 後者語意不同'],
        },
    },
    // ━━━ といっても (even though ~ is said) ━━━
    {
        id: 'g_n3_287', category: 'grammar', level: 'N3', tags: ['expression', 'qualification'],
        stem: '日本語{にほんご}ができる___、簡単{かんたん}な会話{かいわ}だけだ。',
        stemZh: '雖說會日語，但只是簡單的會話而已。',
        options: [
            { text: 'というより', reason: '「というより」表示「與其說」，語意不同。' },
            { text: 'ということは', reason: '「ということは」表示「也就是說」，語意不同。' },
            { text: 'といっても', reason: '正確！「といっても」表示「雖說...但實際上...」。' },
            { text: 'というのは', reason: '「というのは」表示「所謂的」，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「といっても」用於限制或降低前述說法的程度',
            analysis: '「といっても」表示前面說的事實雖然存在，但程度或範圍有限。',
            comparisons: ['といっても：雖說...但是（限制程度）', 'にしても：即使...也（讓步）'],
            commonMistakes: ['○ できるといっても簡単な会話だけ / × できるにしても簡単な会話だけ → 語感不同'],
        },
    },
    // ━━━ と言えば (speaking of) ━━━
    {
        id: 'g_n3_288', category: 'grammar', level: 'N3', tags: ['expression', 'association'],
        stem: '日本{にほん}___、やはり富士山{ふじさん}が有名{ゆうめい}ですね。',
        stemZh: '說到日本，果然富士山最有名呢。',
        options: [
            { text: 'と言{い}えば', reason: '正確！「と言えば」表示「說到...」，引出聯想。' },
            { text: 'というと', reason: '「というと」也表示「說到」，可互換。' },
            { text: 'について', reason: '「について」表示「關於」，語法不同。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「と言えば」表示從某話題引出聯想',
            analysis: '「と言えば」用於聽到某話題後，立即聯想到的事物。',
            comparisons: ['と言えば：說到（聯想）', 'というと：說起（同義）'],
            commonMistakes: ['○ 日本と言えば富士山 / ○ 日本というと富士山 → 兩者可互換'],
        },
    },
    // ━━━ とすれば (if we assume that) ━━━
    {
        id: 'g_n3_289', category: 'grammar', level: 'N3', tags: ['expression', 'assumption'],
        stem: '彼{かれ}の話{はなし}が本当{ほんとう}だ___、大変{たいへん}なことになる。',
        stemZh: '如果他說的是真的，那就會變成大事。',
        options: [
            { text: 'とすれば', reason: '正確！「とすれば」表示假設「如果是的話」。' },
            { text: 'としたら', reason: '「としたら」也可以，意思相同。' },
            { text: 'というと', reason: '「というと」表示「說到」，語意不同。' },
            { text: 'ということは', reason: '「ということは」表示推論，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とすれば」表示假設的條件',
            analysis: '「とすれば」「としたら」「とすると」三者意思相近，都用於假設某事為真。',
            comparisons: ['とすれば：如果...的話（假設）', 'なら：如果（一般條件）'],
            commonMistakes: ['○ 本当だとすれば大変だ / ○ 本当だとしたら大変だ → 兩者可互換'],
        },
    },
    // ━━━ と共に (together with) ━━━
    {
        id: 'g_n3_290', category: 'grammar', level: 'N3', tags: ['compound-particle', 'simultaneous'],
        stem: '経済{けいざい}の発展{はってん}___、環境{かんきょう}問題{もんだい}も深刻{しんこく}になっている。',
        stemZh: '隨著經濟發展，環境問題也變得嚴重了。',
        options: [
            { text: 'と共{とも}に', reason: '正確！「と共に」表示「伴隨著」。' },
            { text: 'と同時{どうじ}に', reason: '「と同時に」也表示同時，但語感不同。' },
            { text: 'について', reason: '「について」表示主題，語意不合。' },
            { text: 'によって', reason: '「によって」表示原因，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「と共に」表示「伴隨著...同時...」',
            analysis: '「と共に」有兩個用法：1. 一起做（與...共同）；2. 伴隨變化。',
            comparisons: ['と共に：伴隨著（書面語）', 'につれて：隨著（口語也可）'],
            commonMistakes: ['○ 発展と共に問題も深刻に / ○ 発展につれて問題も深刻に → 兩者可互換'],
        },
    },
    // ━━━ ところが (however) ━━━
    {
        id: 'g_n3_291', category: 'grammar', level: 'N3', tags: ['conjunction', 'unexpected'],
        stem: '天気{てんき}予報{よほう}は晴{は}れだったので、傘{かさ}を持{も}たなかった。___、突然{とつぜん}雨{あめ}が降{ふ}ってきた。',
        stemZh: '天氣預報說是晴天，所以沒帶傘。然而，突然下起雨來了。',
        options: [
            { text: 'ところが', reason: '正確！「ところが」表示意外的結果。' },
            { text: 'ところで', reason: '「ところで」表示「話說」，換話題用。' },
            { text: 'つまり', reason: '「つまり」表示「也就是說」，語意不合。' },
            { text: 'したがって', reason: '「したがって」表示「因此」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ところが」表示結果與預期相反',
            analysis: '「ところが」用於引出與前文預期完全相反的結果。',
            comparisons: ['ところが：然而（意外結果）', 'ところで：話說（轉換話題）'],
            commonMistakes: ['○ ところが雨が降ってきた / × ところで雨が降ってきた → 「ところで」不表意外'],
        },
    },
    // ━━━ ところで (by the way) ━━━
    {
        id: 'g_n3_292', category: 'grammar', level: 'N3', tags: ['conjunction', 'topic-change'],
        stem: '今日{きょう}の会議{かいぎ}は大変{たいへん}でしたね。___、来週{らいしゅう}の予定{よてい}は決{き}まりましたか。',
        stemZh: '今天的會議真累人啊。話說，下週的行程決定了嗎？',
        options: [
            { text: 'ところで', reason: '正確！「ところで」用於突然轉換話題。' },
            { text: 'ところが', reason: '「ところが」表示「然而」，語意不合。' },
            { text: 'それで', reason: '「それで」表示「所以」，語意不合。' },
            { text: 'さて', reason: '「さて」也可換話題，但更適合正式場合的有序轉換。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ところで」用於突然轉換話題',
            analysis: '「ところで」用於與前文沒有直接關係的新話題引入。',
            comparisons: ['ところで：話說（突然轉換）', 'さて：那麼（有序轉換）'],
            commonMistakes: ['○ ところで、来週の予定は / × ところが、来週の予定は → 「ところが」是逆接'],
        },
    },
    // ━━━ とおりに (just as) ━━━
    {
        id: 'g_n3_293', category: 'grammar', level: 'N3', tags: ['expression', 'manner'],
        stem: '先生{せんせい}が言{い}った___、やってみてください。',
        stemZh: '請照老師說的做做看。',
        options: [
            { text: 'ように', reason: '「ように」也可以，但「とおりに」更強調完全按照。' },
            { text: 'とおりに', reason: '正確！「とおりに」表示「按照...」完全一樣地做。' },
            { text: 'ままに', reason: '「ままに」表示保持原樣，語意不同。' },
            { text: 'ために', reason: '「ために」表示目的，語意不合。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「とおりに」表示完全按照某方式做',
            analysis: '「とおりに」用於表示完全依照某人說的、做的方式來行動。',
            comparisons: ['とおりに：按照（完全一樣）', 'ように：像...一樣（大致相似）'],
            commonMistakes: ['○ 言ったとおりにやる / ○ 言ったようにやる → 前者更強調完全按照'],
        },
    },
    // ━━━ にかわって (in place of) ━━━
    {
        id: 'g_n3_294', category: 'grammar', level: 'N3', tags: ['compound-particle', 'substitution'],
        stem: '病気{びょうき}の部長{ぶちょう}___、私{わたし}がプレゼンをした。',
        stemZh: '代替生病的部長，由我做簡報。',
        options: [
            { text: 'にかわって', reason: '正確！「にかわって」表示代替某人做某事。' },
            { text: 'について', reason: '「について」表示主題，語意不合。' },
            { text: 'にとって', reason: '「にとって」表示立場，語意不合。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對...」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にかわって」表示代替某人',
            analysis: '「にかわって」用於表示代替或代表某人進行某動作。',
            comparisons: ['にかわって：代替（代理）', '代わりに：代替（交換）'],
            commonMistakes: ['○ 部長にかわってプレゼンした / ○ 部長の代わりにプレゼンした → 兩者可互換'],
        },
    },
    // ━━━ に比べて (compared to) ━━━
    {
        id: 'g_n3_295', category: 'grammar', level: 'N3', tags: ['compound-particle', 'comparison'],
        stem: '去年{きょねん}___、今年{ことし}は暖{あたた}かい冬{ふゆ}だ。',
        stemZh: '與去年相比，今年是比較溫暖的冬天。',
        options: [
            { text: 'に比{くら}べて', reason: '正確！「に比べて」表示「與...相比」。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對...」，不是比較。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，語意不合。' },
            { text: 'について', reason: '「について」表示「關於」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に比べて」表示比較的基準',
            analysis: '「に比べて」用於明確指出比較的對象。',
            comparisons: ['に比べて：與...相比（明確比較）', 'より：比...（簡短比較）'],
            commonMistakes: ['○ 去年に比べて暖かい / ○ 去年より暖かい → 前者更正式'],
        },
    },
    // ━━━ を中心に (centered around) ━━━
    {
        id: 'g_n3_296', category: 'grammar', level: 'N3', tags: ['compound-particle', 'focus'],
        stem: '駅{えき}___、新{あたら}しいお店{みせ}がたくさんできた。',
        stemZh: '以車站為中心，開了很多新店。',
        options: [
            { text: 'について', reason: '「について」表示主題，語意不合。' },
            { text: 'を中心{ちゅうしん}に', reason: '正確！「を中心に」表示「以...為中心」。' },
            { text: 'をはじめ', reason: '「をはじめ」表示「以...為首」，語意不同。' },
            { text: 'を通{つう}じて', reason: '「を通じて」表示「透過」，語意不合。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「を中心に」表示「以...為中心點」',
            analysis: '「を中心に」用於表示以某事物為核心展開活動或分布。',
            comparisons: ['を中心に：以...為中心（核心）', 'をはじめ：以...為首（列舉）'],
            commonMistakes: ['○ 駅を中心に店ができた / × 駅をはじめ店ができた → 「をはじめ」是列舉'],
        },
    },
    // ━━━ をはじめ (starting with) ━━━
    {
        id: 'g_n3_297', category: 'grammar', level: 'N3', tags: ['compound-particle', 'listing'],
        stem: '東京{とうきょう}___、日本{にほん}の大都市{だいとし}は人口{じんこう}が多{おお}い。',
        stemZh: '以東京為首，日本的大城市人口都很多。',
        options: [
            { text: 'をはじめ', reason: '正確！「をはじめ」表示「以...為首」，舉出代表性例子。' },
            { text: 'を中心{ちゅうしん}に', reason: '「を中心に」表示「以...為中心」，語意不同。' },
            { text: 'について', reason: '「について」表示主題，語意不合。' },
            { text: 'によって', reason: '「によって」表示原因，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「をはじめ」表示「以...為首」舉出代表',
            analysis: '「をはじめ」用於列舉中最具代表性的例子，表示「...等」。',
            comparisons: ['をはじめ：以...為首（代表性列舉）', 'を中心に：以...為中心（核心分布）'],
            commonMistakes: ['○ 東京をはじめ大都市は / × 東京を中心に大都市は → 語意不同'],
        },
    },
    // ━━━ を込めて (filled with) ━━━
    {
        id: 'g_n3_298', category: 'grammar', level: 'N3', tags: ['compound-particle', 'emotion'],
        stem: '感謝{かんしゃ}の気持{きも}ち___、プレゼントを贈{おく}った。',
        stemZh: '帶著感謝的心情送了禮物。',
        options: [
            { text: 'で', reason: '「で」也可以表示方式，但「を込めて」更有感情。' },
            { text: 'を込{こ}めて', reason: '正確！「を込めて」表示「傾注...感情」。' },
            { text: 'について', reason: '「について」表示主題，語意不合。' },
            { text: 'のために', reason: '「のために」表示目的，語感不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「を込めて」表示「帶著...的心情」',
            analysis: '「を込めて」用於表示將感情、心意等注入某行動中。',
            comparisons: ['を込めて：傾注...（感情深厚）', 'で：以...（方式/手段）'],
            commonMistakes: ['○ 感謝の気持ちを込めて贈った / × 感謝の気持ちで贈った → 前者感情更深'],
        },
    },
    // ━━━ しかない (have no choice but) ━━━
    {
        id: 'g_n3_299', category: 'grammar', level: 'N3', tags: ['expression', 'limitation'],
        stem: 'バスがないなら、歩{ある}いて行{い}く___。',
        stemZh: '如果沒有公車的話，只能走路去了。',
        options: [
            { text: 'ほかない', reason: '「ほかない」也表示「只能」，可互換。' },
            { text: 'しかない', reason: '正確！「しかない」表示「只能...」，別無選擇。' },
            { text: 'ことはない', reason: '「ことはない」表示「沒必要」，語意不同。' },
            { text: 'わけがない', reason: '「わけがない」表示「不可能」，語意不合。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「しかない」表示除此之外別無選擇',
            analysis: '「しかない」表示在給定條件下，只剩下這一個選項。',
            comparisons: ['しかない：只能（唯一選擇）', 'ほかない：別無他法（同義）'],
            commonMistakes: ['○ 歩いて行くしかない / ○ 歩いて行くほかない → 兩者可互換'],
        },
    },
    // ━━━ っけ (wasn't it? / did ~?) ━━━
    {
        id: 'g_n3_300', category: 'grammar', level: 'N3', tags: ['particle', 'recall'],
        stem: '明日{あした}の会議{かいぎ}は何時{なんじ}から___。',
        stemZh: '明天的會議是幾點來著？',
        options: [
            { text: 'だっけ', reason: '正確！「っけ」用於回想或確認記憶中的事。' },
            { text: 'だろう', reason: '「だろう」表示推測，語意不同。' },
            { text: 'かな', reason: '「かな」表示疑問或自問，語感不同。' },
            { text: 'だった', reason: '「だった」是單純過去式，不含回想語氣。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「っけ」用於回想或確認不確定的記憶',
            analysis: '「っけ」用於試圖回想某事或向對方確認之前知道的事。口語表達。',
            comparisons: ['っけ：...來著？（回想確認）', 'かな：...嗎？（自問）'],
            commonMistakes: ['○ 何時からだっけ / × 何時からだろう → 「だろう」是推測，不是回想'],
        },
    },
    // ━━━ 一方だ (keep ~ing / more and more) ━━━
    {
        id: 'g_n3_301', category: 'grammar', level: 'N3', tags: ['expression', 'trend'],
        stem: '地球{ちきゅう}の温度{おんど}は上{あ}がる___。',
        stemZh: '地球的溫度持續上升。',
        options: [
            { text: '一方{いっぽう}だ', reason: '正確！「一方だ」表示持續某方向變化。' },
            { text: '一方{いっぽう}で', reason: '「一方で」表示「另一方面」，語意不同。' },
            { text: 'ばかりだ', reason: '「ばかりだ」也可表示持續變化，語感接近。' },
            { text: 'わけだ', reason: '「わけだ」表示結論，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「一方だ」表示持續朝某方向變化',
            analysis: '「一方だ」用於表示某種趨勢持續進行，通常帶有擔憂語氣。',
            comparisons: ['一方だ：不斷...（持續變化）', '一方で：另一方面（對比）'],
            commonMistakes: ['○ 上がる一方だ / × 上がる一方で → 後者表對比，不表持續'],
        },
    },
    // ━━━ 一体 (on earth / what the) ━━━
    {
        id: 'g_n3_302', category: 'grammar', level: 'N3', tags: ['adverb', 'emphasis'],
        stem: '___何{なに}が起{お}きたのですか。',
        stemZh: '到底發生了什麼事？',
        options: [
            { text: '一体{いったい}', reason: '正確！「一体」用於疑問句強調「到底」。' },
            { text: 'まさか', reason: '「まさか」表示「難道」，語感不同。' },
            { text: 'もしかして', reason: '「もしかして」表示「難道」，語感不同。' },
            { text: 'やっぱり', reason: '「やっぱり」表示「果然」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「一体」用於疑問句中加強語氣',
            analysis: '「一体」放在疑問句中，表示說話者對不明事物的困惑和追問。',
            comparisons: ['一体：到底（追問強調）', 'まさか：難道（不敢相信）'],
            commonMistakes: ['○ 一体何が起きた / × まさか何が起きた → 「まさか」不搭配「何」'],
        },
    },
    // ━━━ まるで (just like / as if) ━━━
    {
        id: 'g_n3_303', category: 'grammar', level: 'N3', tags: ['adverb', 'simile'],
        stem: '彼女{かのじょ}は___天使{てんし}のように美{うつく}しい。',
        stemZh: '她簡直像天使一樣美麗。',
        options: [
            { text: 'まるで', reason: '正確！「まるで」搭配「ように」表示比喻。' },
            { text: 'まさか', reason: '「まさか」表示「難道」，語意不合。' },
            { text: 'むしろ', reason: '「むしろ」表示「寧可」，語意不合。' },
            { text: 'めったに', reason: '「めったに」表示「很少」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「まるで～ように」表示比喻「簡直像...」',
            analysis: '「まるで」常與「ように」「みたいに」搭配使用，表示誇張的比喻。',
            comparisons: ['まるで～ように：簡直像（比喻）', 'ように見える：看起來像（外觀判斷）'],
            commonMistakes: ['○ まるで天使のように美しい / × まるで天使に美しい → 需要搭配「ように」'],
        },
    },
    // ━━━ まさか (no way / surely not) ━━━
    {
        id: 'g_n3_304', category: 'grammar', level: 'N3', tags: ['adverb', 'disbelief'],
        stem: '___彼{かれ}が犯人{はんにん}だとは思{おも}わなかった。',
        stemZh: '沒想到他竟然是犯人。',
        options: [
            { text: 'やはり', reason: '「やはり」表示「果然」，語意相反。' },
            { text: 'まさか', reason: '正確！「まさか」表示想不到、不敢相信。' },
            { text: 'さすが', reason: '「さすが」表示「不愧是」，語意不合。' },
            { text: 'いつの間{ま}にか', reason: '「いつの間にか」表示「不知不覺」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「まさか」表示不敢相信的驚訝',
            analysis: '「まさか」表示出乎意料，說話者覺得不可能發生的事卻發生了。',
            comparisons: ['まさか：沒想到（不敢相信）', 'やはり：果然（如預期）'],
            commonMistakes: ['○ まさか犯人だとは思わなかった / × やはり犯人だとは思わなかった → 「やはり」表示預料之中'],
        },
    },
    // ━━━ なかなか～ない (not easily / not readily) ━━━
    {
        id: 'g_n3_305', category: 'grammar', level: 'N3', tags: ['adverb', 'difficulty'],
        stem: 'この問題{もんだい}は___解{と}けない。',
        stemZh: '這個問題怎麼也解不出來。',
        options: [
            { text: 'なかなか', reason: '正確！「なかなか～ない」表示「怎麼也不」。' },
            { text: 'めったに', reason: '「めったに～ない」表示「很少」，語意不同。' },
            { text: 'ちっとも', reason: '「ちっとも～ない」表示「完全不」，語意不同。' },
            { text: '決{けっ}して', reason: '「決して～ない」表示「絕不」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なかなか～ない」表示努力了但做不到',
            analysis: '「なかなか～ない」表示雖然想做但怎麼也做不到，暗示有嘗試過。',
            comparisons: ['なかなか～ない：怎麼也不（嘗試了但不行）', 'めったに～ない：很少（頻率低）'],
            commonMistakes: ['○ なかなか解けない / × めったに解けない → 「めったに」偏頻率'],
        },
    },
    // ━━━ めったに～ない (rarely) ━━━
    {
        id: 'g_n3_306', category: 'grammar', level: 'N3', tags: ['adverb', 'frequency'],
        stem: '彼{かれ}は___怒{おこ}らない。',
        stemZh: '他很少生氣。',
        options: [
            { text: 'なかなか', reason: '「なかなか」表示「怎麼也不」，語感不同。' },
            { text: 'ちっとも', reason: '「ちっとも」表示「完全不」，語意太強。' },
            { text: 'めったに', reason: '正確！「めったに～ない」表示「很少」。' },
            { text: '全然{ぜんぜん}', reason: '「全然～ない」表示「完全不」，語意太強。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「めったに～ない」表示頻率極低',
            analysis: '「めったに～ない」表示某事幾乎不發生，頻率非常低。',
            comparisons: ['めったに～ない：很少（頻率極低）', 'なかなか～ない：怎麼也不（努力但不行）'],
            commonMistakes: ['○ めったに怒らない / × なかなか怒らない → 後者暗示想讓他生氣但做不到'],
        },
    },
    // ━━━ 決して～ない (never / absolutely not) ━━━
    {
        id: 'g_n3_307', category: 'grammar', level: 'N3', tags: ['adverb', 'negation'],
        stem: 'あの人{ひと}は___約束{やくそく}を破{やぶ}らない。',
        stemZh: '那個人絕對不會違背約定。',
        options: [
            { text: '決{けっ}して', reason: '正確！「決して～ない」表示「絕對不」。' },
            { text: 'めったに', reason: '「めったに」表示「很少」，否定程度不夠。' },
            { text: 'なかなか', reason: '「なかなか」表示「怎麼也不」，語感不同。' },
            { text: '別{べつ}に', reason: '「別に」表示「並不特別」，語氣太弱。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「決して～ない」表示強烈的否定決心',
            analysis: '「決して～ない」表示說話者堅定的否定態度，強調「絕對不會」。',
            comparisons: ['決して～ない：絕不（堅定否定）', 'めったに～ない：很少（頻率低）'],
            commonMistakes: ['○ 決して約束を破らない / × めったに約束を破らない → 「決して」更有決心感'],
        },
    },
    // ━━━ わざと (on purpose) ━━━
    {
        id: 'g_n3_308', category: 'grammar', level: 'N3', tags: ['adverb', 'intention'],
        stem: '彼{かれ}は___間違{まちが}えたのではなく、本当{ほんとう}に知{し}らなかったのだ。',
        stemZh: '他不是故意弄錯的，是真的不知道。',
        options: [
            { text: 'わざと', reason: '正確！「わざと」表示「故意」。句中否定了故意性。' },
            { text: 'わざわざ', reason: '「わざわざ」表示「特地」，語意不同。' },
            { text: 'つい', reason: '「つい」表示「不小心」，語意不同。' },
            { text: 'ふと', reason: '「ふと」表示「突然」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「わざと」表示故意、有意地做某事',
            analysis: '「わざと」表示行為是有意識的，故意做的。此句否定了故意性。',
            comparisons: ['わざと：故意（有意識）', 'わざわざ：特地（不辭辛勞）'],
            commonMistakes: ['○ わざと間違えた / × わざわざ間違えた → 「わざわざ」不用於負面行為'],
        },
    },
    // ━━━ わざわざ (go out of one's way) ━━━
    {
        id: 'g_n3_309', category: 'grammar', level: 'N3', tags: ['adverb', 'effort'],
        stem: '___来{き}てくれて、ありがとうございます。',
        stemZh: '特地前來，非常感謝。',
        options: [
            { text: 'わざわざ', reason: '正確！「わざわざ」表示「特地」，強調對方的辛勞。' },
            { text: 'わざと', reason: '「わざと」表示「故意」，語意不同。' },
            { text: 'ついに', reason: '「ついに」表示「終於」，語意不合。' },
            { text: 'たまたま', reason: '「たまたま」表示「碰巧」，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「わざわざ」表示「特地」、不辭辛勞',
            analysis: '「わざわざ」強調對方付出額外的努力或時間，常用於感謝場合。',
            comparisons: ['わざわざ：特地（感謝對方的辛勞）', 'わざと：故意（有意為之）'],
            commonMistakes: ['○ わざわざ来てくれた / × わざと来てくれた → 「わざと」帶有負面語意'],
        },
    },
    // ━━━ つい (unintentionally / couldn't help) ━━━
    {
        id: 'g_n3_310', category: 'grammar', level: 'N3', tags: ['adverb', 'involuntary'],
        stem: 'ダイエット中{ちゅう}なのに、___ケーキを食{た}べてしまった。',
        stemZh: '明明在減肥，卻不小心吃了蛋糕。',
        options: [
            { text: 'わざと', reason: '「わざと」表示「故意」，語意相反。' },
            { text: 'つい', reason: '正確！「つい」表示「不自覺地」「忍不住」。' },
            { text: 'ふと', reason: '「ふと」表示「突然想到」，語感不同。' },
            { text: '思{おも}わず', reason: '「思わず」也可以，表示「不由自主」。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「つい」表示不自覺地做了某事',
            analysis: '「つい」表示雖然不應該做但忍不住做了，帶有後悔語感。',
            comparisons: ['つい：不小心（忍不住）', 'わざと：故意（有意）'],
            commonMistakes: ['○ ついケーキを食べた / × わざとケーキを食べた → 「わざと」表示故意'],
        },
    },
    // ━━━ ふと (suddenly / by chance) ━━━
    {
        id: 'g_n3_311', category: 'grammar', level: 'N3', tags: ['adverb', 'spontaneous'],
        stem: '___窓{まど}の外{そと}を見{み}たら、雪{ゆき}が降{ふ}っていた。',
        stemZh: '偶然看向窗外，發現在下雪。',
        options: [
            { text: 'ふと', reason: '正確！「ふと」表示「偶然」「不經意地」。' },
            { text: 'つい', reason: '「つい」表示「忍不住」，語感不同。' },
            { text: 'わざと', reason: '「わざと」表示「故意」，語意不合。' },
            { text: 'きっと', reason: '「きっと」表示「一定」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ふと」表示無意間、偶然地',
            analysis: '「ふと」表示沒有特別意圖就做了某事或想到了某事。',
            comparisons: ['ふと：偶然（無意間）', 'つい：忍不住（控制不了）'],
            commonMistakes: ['○ ふと窓の外を見た / × つい窓の外を見た → 「つい」帶有自責感'],
        },
    },
    // ━━━ せいぜい (at most / at best) ━━━
    {
        id: 'g_n3_312', category: 'grammar', level: 'N3', tags: ['adverb', 'limitation'],
        stem: 'この仕事{しごと}は___3日{みっか}で終{お}わるだろう。',
        stemZh: '這個工作最多三天就能結束吧。',
        options: [
            { text: 'せいぜい', reason: '正確！「せいぜい」表示「頂多」「最多」。' },
            { text: '少{すく}なくとも', reason: '「少なくとも」表示「至少」，語意相反。' },
            { text: 'できるだけ', reason: '「できるだけ」表示「盡量」，語意不同。' },
            { text: 'なるべく', reason: '「なるべく」表示「盡可能」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「せいぜい」表示上限「最多不超過」',
            analysis: '「せいぜい」表示充其量也就是那個程度，暗示不會更多。',
            comparisons: ['せいぜい：最多（上限）', '少なくとも：至少（下限）'],
            commonMistakes: ['○ せいぜい3日で終わる / × 少なくとも3日で終わる → 「少なくとも」是下限'],
        },
    },
    // ━━━ むしろ (rather / instead) ━━━
    {
        id: 'g_n3_313', category: 'grammar', level: 'N3', tags: ['adverb', 'preference'],
        stem: '電車{でんしゃ}で行{い}くより、___歩{ある}いたほうが早{はや}い。',
        stemZh: '比起搭電車，寧可走路還比較快。',
        options: [
            { text: 'むしろ', reason: '正確！「むしろ」表示「寧可」「倒不如」。' },
            { text: 'つまり', reason: '「つまり」表示「也就是說」，語意不合。' },
            { text: 'やはり', reason: '「やはり」表示「果然」，語意不同。' },
            { text: 'さらに', reason: '「さらに」表示「更加」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「むしろ」表示比較後的偏好「倒不如」',
            analysis: '「むしろ」用於在兩個選擇中表示後者更好的判斷。',
            comparisons: ['むしろ：寧可（偏好後者）', 'というより：與其說（修正表述）'],
            commonMistakes: ['○ むしろ歩いたほうが早い / × つまり歩いたほうが早い → 「つまり」是歸納'],
        },
    },
    // ━━━ なるべく (as much as possible) ━━━
    {
        id: 'g_n3_314', category: 'grammar', level: 'N3', tags: ['adverb', 'effort'],
        stem: '___早{はや}く返事{へんじ}をお願{ねが}いします。',
        stemZh: '請盡量早點回覆。',
        options: [
            { text: 'なるべく', reason: '正確！「なるべく」表示「盡量」。' },
            { text: 'どうしても', reason: '「どうしても」表示「無論如何」，語氣太強。' },
            { text: '必{かなら}ず', reason: '「必ず」表示「一定要」，語氣太強。' },
            { text: 'せいぜい', reason: '「せいぜい」表示「充其量」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なるべく」表示在可能範圍內盡量',
            analysis: '「なるべく」語氣柔和，表示希望對方在可能的情況下盡量做到。',
            comparisons: ['なるべく：盡量（委婉）', 'できるだけ：盡可能（同義）'],
            commonMistakes: ['○ なるべく早く / ○ できるだけ早く → 兩者可互換'],
        },
    },
    // ━━━ すでに (already) ━━━
    {
        id: 'g_n3_315', category: 'grammar', level: 'N3', tags: ['adverb', 'completion'],
        stem: 'その情報{じょうほう}は___古{ふる}くなっている。',
        stemZh: '那個資訊已經過時了。',
        options: [
            { text: 'すでに', reason: '正確！「すでに」表示「已經」，書面語。' },
            { text: 'まだ', reason: '「まだ」表示「還」，語意相反。' },
            { text: 'やっと', reason: '「やっと」表示「好不容易」，語意不合。' },
            { text: 'ついに', reason: '「ついに」表示「終於」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「すでに」是「もう」的書面語，表示「已經」',
            analysis: '「すでに」用於書面語或正式場合，相當於口語的「もう」。',
            comparisons: ['すでに：已經（書面語）', 'もう：已經（口語）'],
            commonMistakes: ['○ すでに古くなっている / ○ もう古くなっている → 前者更正式'],
        },
    },
    // ━━━ ついに (finally / at last) ━━━
    {
        id: 'g_n3_316', category: 'grammar', level: 'N3', tags: ['adverb', 'completion'],
        stem: '5年間{ねんかん}の研究{けんきゅう}の末{すえ}、___新薬{しんやく}が完成{かんせい}した。',
        stemZh: '經過五年的研究，新藥終於完成了。',
        options: [
            { text: 'ついに', reason: '正確！「ついに」表示經過長時間「終於」。' },
            { text: 'すでに', reason: '「すでに」表示「已經」，不含等待的語感。' },
            { text: 'やっぱり', reason: '「やっぱり」表示「果然」，語意不合。' },
            { text: 'さっそく', reason: '「さっそく」表示「立刻」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ついに」表示經過漫長過程「終於」',
            analysis: '「ついに」強調經過長時間的等待或努力，終於達成某事。',
            comparisons: ['ついに：終於（漫長等待後）', 'やっと：好不容易（辛苦後）'],
            commonMistakes: ['○ ついに新薬が完成した / ○ やっと新薬が完成した → 兩者語感接近'],
        },
    },
    // ━━━ さらに (furthermore / even more) ━━━
    {
        id: 'g_n3_317', category: 'grammar', level: 'N3', tags: ['conjunction', 'addition'],
        stem: '日本語{にほんご}だけでなく、___中国語{ちゅうごくご}も勉強{べんきょう}したい。',
        stemZh: '不僅是日語，還想進一步學習中文。',
        options: [
            { text: 'さらに', reason: '正確！「さらに」表示「進一步」「而且」。' },
            { text: 'つまり', reason: '「つまり」表示「也就是說」，語意不合。' },
            { text: 'ところが', reason: '「ところが」表示「然而」，語意不合。' },
            { text: 'しかし', reason: '「しかし」表示「但是」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「さらに」表示追加或程度加深',
            analysis: '「さらに」用於在既有基礎上追加更多內容或加深程度。',
            comparisons: ['さらに：進一步（追加）', 'しかも：而且（追加強調）'],
            commonMistakes: ['○ さらに中国語も勉強したい / × つまり中国語も勉強したい → 「つまり」是歸納'],
        },
    },
    // ━━━ 確かに (certainly / indeed) ━━━
    {
        id: 'g_n3_318', category: 'grammar', level: 'N3', tags: ['adverb', 'agreement'],
        stem: '___、その意見{いけん}は正{ただ}しい。しかし、別{べつ}の方法{ほうほう}もある。',
        stemZh: '確實，那個意見是正確的。但是，也有其他方法。',
        options: [
            { text: '確{たし}かに', reason: '正確！「確かに」表示認同後接轉折。' },
            { text: 'もちろん', reason: '「もちろん」表示「當然」，語感不同。' },
            { text: 'きっと', reason: '「きっと」表示「一定」，語意不同。' },
            { text: 'おそらく', reason: '「おそらく」表示「大概」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「確かに」表示認同對方觀點',
            analysis: '「確かに」用於先承認對方的意見正確，之後常接轉折提出不同看法。',
            comparisons: ['確かに：確實（認同+轉折）', 'もちろん：當然（完全認同）'],
            commonMistakes: ['○ 確かに正しい。しかし... / × もちろん正しい。しかし... → 「もちろん」後面轉折不太自然'],
        },
    },
    // ━━━ もしかしたら (perhaps / maybe) ━━━
    {
        id: 'g_n3_319', category: 'grammar', level: 'N3', tags: ['adverb', 'possibility'],
        stem: '___、彼{かれ}はもう帰{かえ}ったかもしれない。',
        stemZh: '說不定他已經回去了。',
        options: [
            { text: 'もしかしたら', reason: '正確！「もしかしたら」表示「說不定」。' },
            { text: 'きっと', reason: '「きっと」表示「一定」，確信度太高。' },
            { text: '確{たし}かに', reason: '「確かに」表示「確實」，語意不同。' },
            { text: '当然{とうぜん}', reason: '「当然」表示「當然」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「もしかしたら」表示不確定的推測',
            analysis: '「もしかしたら」常與「かもしれない」搭配，表示某種可能性。',
            comparisons: ['もしかしたら：說不定（不確定）', 'きっと：一定（確信）'],
            commonMistakes: ['○ もしかしたら帰ったかもしれない / × きっと帰ったかもしれない → 「きっと」和「かもしれない」矛盾'],
        },
    },
    // ━━━ それとも (or) ━━━
    {
        id: 'g_n3_320', category: 'grammar', level: 'N3', tags: ['conjunction', 'choice'],
        stem: 'コーヒーにしますか。___、紅茶{こうちゃ}にしますか。',
        stemZh: '要咖啡嗎？還是要紅茶呢？',
        options: [
            { text: 'それとも', reason: '正確！「それとも」用於疑問句中提出另一選項。' },
            { text: 'または', reason: '「または」也表示「或者」，但不用於疑問句的選擇。' },
            { text: 'あるいは', reason: '「あるいは」偏書面語，不常用於口語選擇疑問。' },
            { text: 'しかも', reason: '「しかも」表示「而且」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「それとも」用於疑問句中提出另一個選項',
            analysis: '「それとも」專門用於選擇疑問句，連接兩個疑問選項。',
            comparisons: ['それとも：還是（疑問選擇）', 'または：或者（陳述選擇）'],
            commonMistakes: ['○ コーヒーにしますか。それとも紅茶？ / × コーヒーにしますか。または紅茶？ → 「または」不自然'],
        },
    },
    // ━━━ なぜなら (because / the reason is) ━━━
    {
        id: 'g_n3_321', category: 'grammar', level: 'N3', tags: ['conjunction', 'reason'],
        stem: '彼{かれ}の提案{ていあん}に賛成{さんせい}だ。___、一番{いちばん}現実的{げんじつてき}だからだ。',
        stemZh: '我贊成他的提案。因為那是最現實的方案。',
        options: [
            { text: 'なぜなら', reason: '正確！「なぜなら」用於說明前述判斷的理由。' },
            { text: 'つまり', reason: '「つまり」表示「也就是說」，語意不合。' },
            { text: 'ところが', reason: '「ところが」表示「然而」，語意不合。' },
            { text: 'したがって', reason: '「したがって」表示「因此」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なぜなら」用於解釋前面結論的理由',
            analysis: '「なぜなら」先陳述結論，再用「なぜなら」引出理由，常以「からだ」結尾。',
            comparisons: ['なぜなら：因為（先結論後理由）', 'だから：所以（先理由後結論）'],
            commonMistakes: ['○ 賛成だ。なぜなら現実的だからだ / × 賛成だ。だから現実的だ → 語序不同'],
        },
    },
    // ━━━ その結果 (as a result) ━━━
    {
        id: 'g_n3_322', category: 'grammar', level: 'N3', tags: ['conjunction', 'consequence'],
        stem: '毎日{まいにち}練習{れんしゅう}した。___、試合{しあい}に勝{か}つことができた。',
        stemZh: '每天練習。結果，贏得了比賽。',
        options: [
            { text: 'その結果{けっか}', reason: '正確！「その結果」表示「結果是」。' },
            { text: 'ところが', reason: '「ところが」表示意外結果，此處是預期結果。' },
            { text: 'なぜなら', reason: '「なぜなら」表示理由，語意不合。' },
            { text: 'そのために', reason: '「そのために」表示「為此」，語意接近但方向不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「その結果」表示前述原因帶來的結果',
            analysis: '「その結果」用於客觀陳述前因後果的關係。',
            comparisons: ['その結果：結果是（客觀）', 'そのため：因此（原因→目的/結果）'],
            commonMistakes: ['○ 練習した。その結果勝てた / × 練習した。ところが勝てた → 「ところが」表示意外'],
        },
    },
    // ━━━ そのために (for that reason / because of that) ━━━
    {
        id: 'g_n3_323', category: 'grammar', level: 'N3', tags: ['conjunction', 'purpose'],
        stem: '来年{らいねん}留学{りゅうがく}したい。___、毎日{まいにち}英語{えいご}を勉強{べんきょう}している。',
        stemZh: '想明年留學。為此，每天都在學英語。',
        options: [
            { text: 'なぜなら', reason: '「なぜなら」表示原因說明，語意不同。' },
            { text: 'そのために', reason: '正確！「そのために」表示「為此」。' },
            { text: 'その結果{けっか}', reason: '「その結果」表示結果，順序相反。' },
            { text: 'ところで', reason: '「ところで」表示轉換話題，語意不合。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「そのために」表示為了前述目標而採取行動',
            analysis: '「そのために」表示先陳述目標，再說明為達成目標而做的事。',
            comparisons: ['そのために：為此（目標→行動）', 'その結果：結果（原因→結果）'],
            commonMistakes: ['○ 留学したい。そのために勉強している / × 留学したい。その結果勉強している → 因果順序不同'],
        },
    },
    // ━━━ はもちろん (not only ~ but also / of course) ━━━
    {
        id: 'g_n3_324', category: 'grammar', level: 'N3', tags: ['expression', 'addition'],
        stem: '日本語{にほんご}___、英語{えいご}も話{はな}せます。',
        stemZh: '日語自不用說，英語也會說。',
        options: [
            { text: 'だけでなく', reason: '「だけでなく」也可以，但「はもちろん」更自然。' },
            { text: 'はもちろん', reason: '正確！「はもちろん」表示「不用說...也...」。' },
            { text: 'について', reason: '「について」表示主題，語意不合。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對...」，語意不合。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「はもちろん」表示「不用說...也...」',
            analysis: '「はもちろん」先提出理所當然的事物，再追加更多內容。',
            comparisons: ['はもちろん：不用說...也（追加）', 'だけでなく：不僅...而且（並列）'],
            commonMistakes: ['○ 日本語はもちろん英語も / ○ 日本語だけでなく英語も → 前者更強調理所當然'],
        },
    },
    // ━━━ ばかりでなく (not only ~ but also) ━━━
    {
        id: 'g_n3_325', category: 'grammar', level: 'N3', tags: ['expression', 'addition'],
        stem: '彼{かれ}は成績{せいせき}がいい___、スポーツも得意{とくい}だ。',
        stemZh: '他不僅成績好，運動也擅長。',
        options: [
            { text: 'ばかりでなく', reason: '正確！「ばかりでなく」表示「不僅...而且」。' },
            { text: 'ばかりで', reason: '「ばかりで」表示「淨是...（負面）」，語意不同。' },
            { text: 'ばかりに', reason: '「ばかりに」表示「就因為」，語意不同。' },
            { text: 'ばかりか', reason: '「ばかりか」也可以，語意接近但更驚訝。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ばかりでなく」表示「不僅A而且B」',
            analysis: '「ばかりでなく」用於追加列舉，表示超出預期的多面性。',
            comparisons: ['ばかりでなく：不僅...而且（追加）', 'ばかりか：不僅...甚至（更強）'],
            commonMistakes: ['○ 成績がいいばかりでなくスポーツも / × 成績がいいばかりでスポーツも → 「ばかりで」是負面'],
        },
    },
    // ━━━ 上に (in addition to / on top of) ━━━
    {
        id: 'g_n3_326', category: 'grammar', level: 'N3', tags: ['conjunction', 'addition'],
        stem: 'この部屋{へや}は広{ひろ}い___、家賃{やちん}も安{やす}い。',
        stemZh: '這個房間不僅寬敞，房租也便宜。',
        options: [
            { text: '上{うえ}に', reason: '正確！「上に」表示「不僅...而且...」。' },
            { text: 'ために', reason: '「ために」表示原因或目的，語意不合。' },
            { text: 'わけで', reason: '「わけで」表示結論，語意不合。' },
            { text: 'ところで', reason: '「ところで」表示轉換話題，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「上に」表示在某基礎上追加更多',
            analysis: '「上に」用於在已經很好（或很差）的基礎上，追加同方向的要素。',
            comparisons: ['上に：不僅...而且（同方向追加）', 'その上：而且（接續詞形式）'],
            commonMistakes: ['○ 広い上に家賃も安い / × 広いために家賃も安い → 「ために」不表示追加'],
        },
    },
    // ━━━ 上で (after doing / upon) ━━━
    {
        id: 'g_n3_327', category: 'grammar', level: 'N3', tags: ['expression', 'sequence'],
        stem: 'よく考{かんが}えた___、お返事{へんじ}します。',
        stemZh: '仔細考慮之後再回覆。',
        options: [
            { text: '後{あと}で', reason: '「後で」也可以，但「上で」更正式。' },
            { text: '上{うえ}で', reason: '正確！「上で」表示「做完A之後再做B」。' },
            { text: 'ついでに', reason: '「ついでに」表示「順便」，語意不合。' },
            { text: '際{さい}に', reason: '「際に」表示「在...之時」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「上で」表示做完某事後再進行下一步',
            analysis: '「た上で」表示在完成前一步驟後，再進行後續動作。語氣正式。',
            comparisons: ['上で：做完後（正式）', '後で：之後（一般）'],
            commonMistakes: ['○ 考えた上で返事する / ○ 考えた後で返事する → 前者更正式'],
        },
    },
    // ━━━ は別として (aside from / apart from) ━━━
    {
        id: 'g_n3_328', category: 'grammar', level: 'N3', tags: ['expression', 'exception'],
        stem: '冗談{じょうだん}___、この問題{もんだい}は真剣{しんけん}に考{かんが}えるべきだ。',
        stemZh: '玩笑姑且不論，這個問題應該認真思考。',
        options: [
            { text: 'は別{べつ}として', reason: '正確！「は別として」表示「姑且不論」。' },
            { text: 'はもちろん', reason: '「はもちろん」表示「不用說」，語意不同。' },
            { text: 'について', reason: '「について」表示主題，語意不合。' },
            { text: 'としても', reason: '「としても」表示「即使」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「は別として」表示暫時不考慮某事',
            analysis: '「は別として」用於將某個不重要或不相關的事先擱置，轉向重要的議題。',
            comparisons: ['は別として：姑且不論（擱置）', 'はともかく：不管怎樣（同義，口語）'],
            commonMistakes: ['○ 冗談は別として真剣に / × 冗談はもちろん真剣に → 「はもちろん」語意不同'],
        },
    },
    // ━━━ からには (since / now that) ━━━
    {
        id: 'g_n3_329', category: 'grammar', level: 'N3', tags: ['conjunction', 'determination'],
        stem: '約束{やくそく}した___、最後{さいご}まで頑張{がんば}らなければならない。',
        stemZh: '既然約定了，就必須堅持到最後。',
        options: [
            { text: 'からには', reason: '正確！「からには」表示「既然...就...」，含決心。' },
            { text: 'からこそ', reason: '「からこそ」表示「正因為」，語意不同。' },
            { text: 'からといって', reason: '「からといって」表示「雖然...但不代表」，語意不同。' },
            { text: 'から見{み}ると', reason: '「から見ると」表示「從...來看」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「からには」表示「既然...就一定要...」',
            analysis: '「からには」表示既然做了某事或決定了某事，就要承擔相應的責任或行動。',
            comparisons: ['からには：既然（決心）', 'からこそ：正因為（強調原因）'],
            commonMistakes: ['○ 約束したからには頑張る / × 約束したからこそ頑張る → 「からこそ」不含義務感'],
        },
    },
    // ━━━ からといって (just because ~ doesn't mean) ━━━
    {
        id: 'g_n3_330', category: 'grammar', level: 'N3', tags: ['expression', 'contrast'],
        stem: 'お金{かね}がある___、幸{しあわ}せだとは限{かぎ}らない。',
        stemZh: '不能因為有錢就認定是幸福的。',
        options: [
            { text: 'からには', reason: '「からには」表示「既然」，語意不同。' },
            { text: 'からこそ', reason: '「からこそ」表示「正因為」，語意不同。' },
            { text: 'からといって', reason: '正確！「からといって」表示「不能因為...就...」。' },
            { text: 'ことから', reason: '「ことから」表示原因事實，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「からといって」表示不能僅因某理由就下結論',
            analysis: '「からといって」常與「とは限らない」「わけではない」搭配，否定不當推論。',
            comparisons: ['からといって：不能因為...就（否定推論）', 'からには：既然（肯定決心）'],
            commonMistakes: ['○ お金があるからといって幸せとは限らない / × お金があるからには幸せだ → 語意完全不同'],
        },
    },
    // ━━━ ことは～が (it is true that ~ but) ━━━
    {
        id: 'g_n3_331', category: 'grammar', level: 'N3', tags: ['expression', 'concession'],
        stem: '行{い}きたい___行{い}きたいが、時間{じかん}がない。',
        stemZh: '想去是想去，但是沒有時間。',
        options: [
            { text: 'ことは', reason: '正確！「ことは～が」表示「...是...，但是...」。' },
            { text: 'ものは', reason: '「ものは」文法不通。' },
            { text: 'わけは', reason: '「わけは」文法不通。' },
            { text: 'ところは', reason: '「ところは」文法不通。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことは～が」用於承認某事但接轉折',
            analysis: '「Vことは Vが」先承認某事實，再用「が」轉折表示不同的實際狀況。',
            comparisons: ['ことは～が：...是...，但是（先承認後轉折）', 'にしても：即使...也（讓步）'],
            commonMistakes: ['○ 行きたいことは行きたいが / × 行きたいことが行きたい → 語法不通'],
        },
    },
    // ━━━ 的 (typical / ~like) ━━━
    {
        id: 'g_n3_332', category: 'grammar', level: 'N3', tags: ['suffix', 'adjective'],
        stem: 'これは日本{にほん}___な考{かんが}え方{かた}だ。',
        stemZh: '這是典型的日式思維方式。',
        options: [
            { text: '的{てき}', reason: '正確！「日本的」表示「日本式的」「典型日本的」。' },
            { text: 'っぽい', reason: '「日本っぽい」表示「像日本的」，語感較口語。' },
            { text: '向{む}き', reason: '「日本向き」表示「適合日本的」，語意不同。' },
            { text: '風{ふう}', reason: '「日本風」也可以但「的」更正式。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「的」接在名詞後構成な形容詞',
            analysis: '「的」將名詞轉換為な形容詞，表示「...的」「...式的」。',
            comparisons: ['的：...的（正式形容詞化）', 'っぽい：像...的（口語傾向）'],
            commonMistakes: ['○ 日本的な考え方 / × 日本っぽい考え方 → 前者更正式'],
        },
    },
    // ━━━ から～にかけて (from ~ to / stretching from ~ to) ━━━
    {
        id: 'g_n3_333', category: 'grammar', level: 'N3', tags: ['compound-particle', 'range'],
        stem: '6月{がつ}___7月{がつ}___、日本{にほん}は梅雨{つゆ}の季節{きせつ}だ。',
        stemZh: '從六月到七月這段期間，日本是梅雨季節。',
        options: [
            { text: 'から/にかけて', reason: '正確！「から～にかけて」表示「從...到...」。' },
            { text: 'から/まで', reason: '「から～まで」表示明確起止點，「にかけて」更模糊。' },
            { text: 'から/にわたって', reason: '「にわたって」表示跨越，語感不同。' },
            { text: 'から/において', reason: '「において」表示場所，語法不通。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「から～にかけて」表示時間或空間的大致範圍',
            analysis: '「から～にかけて」不像「から～まで」那樣精確，表示大致的範圍。',
            comparisons: ['から～にかけて：從...到（大致範圍）', 'から～まで：從...到（精確起止）'],
            commonMistakes: ['○ 6月から7月にかけて / ○ 6月から7月まで → 前者更模糊'],
        },
    },
    // ━━━ にわたって (over / throughout) ━━━
    {
        id: 'g_n3_334', category: 'grammar', level: 'N3', tags: ['compound-particle', 'span'],
        stem: '工事{こうじ}は3か月{げつ}___行{おこな}われた。',
        stemZh: '工程進行了三個月之久。',
        options: [
            { text: 'にわたって', reason: '正確！「にわたって」表示「跨越」長期間。' },
            { text: 'にかけて', reason: '「にかけて」表示「從...到」，語意不同。' },
            { text: 'を通{つう}じて', reason: '「を通じて」表示「透過」或「整個期間」，語感不同。' },
            { text: 'において', reason: '「において」表示場所或時點，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にわたって」表示跨越長時間或廣範圍',
            analysis: '「にわたって」強調某事持續了很長時間或覆蓋了很大範圍。',
            comparisons: ['にわたって：跨越（強調持續）', 'を通じて：整個期間（全程）'],
            commonMistakes: ['○ 3か月にわたって行われた / × 3か月を通じて行われた → 兩者可互換但語感不同'],
        },
    },
    // ━━━ ばかりに (just because / simply because) ━━━
    {
        id: 'g_n3_335', category: 'grammar', level: 'N3', tags: ['expression', 'regret'],
        stem: '一言{ひとこと}余計{よけい}なことを言{い}った___、友達{ともだち}と喧嘩{けんか}になった。',
        stemZh: '就因為多說了一句話，和朋友吵架了。',
        options: [
            { text: 'ばかりに', reason: '正確！「ばかりに」表示「就因為」導致不好的結果。' },
            { text: 'ために', reason: '「ために」也可以但不含後悔語氣。' },
            { text: 'せいで', reason: '「せいで」也表示負面原因，語感接近。' },
            { text: 'ので', reason: '「ので」是中性原因，不含後悔感。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ばかりに」表示「就因為」某小事導致大問題',
            analysis: '「ばかりに」帶有後悔語氣，強調因一個小原因而產生不好的結果。',
            comparisons: ['ばかりに：就因為（後悔）', 'せいで：都因為（歸咎）'],
            commonMistakes: ['○ 言ったばかりに喧嘩になった / ○ 言ったせいで喧嘩になった → 前者更強調後悔'],
        },
    },
    // ━━━ ても始まらない (even if ~ it's pointless) ━━━
    {
        id: 'g_n3_336', category: 'grammar', level: 'N3', tags: ['expression', 'futility'],
        stem: '今{いま}さら後悔{こうかい}___。前{まえ}を向{む}こう。',
        stemZh: '現在後悔也沒用了。向前看吧。',
        options: [
            { text: 'しても始{はじ}まらない', reason: '正確！「ても始まらない」表示做了也沒用。' },
            { text: 'してもしかたがない', reason: '「してもしかたがない」也可以，語意接近。' },
            { text: 'するわけがない', reason: '「するわけがない」表示不可能，語意不同。' },
            { text: 'することはない', reason: '「することはない」表示沒必要，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ても始まらない」表示做了也沒有意義',
            analysis: '「ても始まらない」用於建議對方不要浪費時間做無意義的事。',
            comparisons: ['ても始まらない：做了也沒用（徒勞）', 'てもしかたがない：做了也沒辦法（同義）'],
            commonMistakes: ['○ 後悔しても始まらない / ○ 後悔してもしかたがない → 兩者可互換'],
        },
    },
    // ━━━ ても構わない (it's okay even if / don't mind if) ━━━
    {
        id: 'g_n3_337', category: 'grammar', level: 'N3', tags: ['expression', 'permission'],
        stem: '多少{たしょう}時間{じかん}がかかっ___。丁寧{ていねい}にやってください。',
        stemZh: '花一些時間也沒關係。請仔細地做。',
        options: [
            { text: 'てもいい', reason: '「てもいい」也可以但「ても構わない」更正式。' },
            { text: 'ても構{かま}わない', reason: '正確！「ても構わない」表示「...也沒關係」。' },
            { text: 'てはいけない', reason: '「てはいけない」表示「不可以」，語意相反。' },
            { text: 'てもしかたがない', reason: '「てもしかたがない」表示「做了也沒辦法」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ても構わない」表示「即使...也不介意」',
            analysis: '「ても構わない」比「てもいい」更正式，表示不在意某事發生。',
            comparisons: ['ても構わない：也無妨（正式許可）', 'てもいい：也可以（一般許可）'],
            commonMistakes: ['○ 時間がかかっても構わない / ○ 時間がかかってもいい → 前者更正式'],
        },
    },
    // ━━━ てしょうがない (can't help / extremely) ━━━
    {
        id: 'g_n3_338', category: 'grammar', level: 'N3', tags: ['expression', 'degree'],
        stem: '明日{あした}の旅行{りょこう}が楽{たの}しみ___。',
        stemZh: '期待明天的旅行期待得不得了。',
        options: [
            { text: 'でしょうがない', reason: '正確！「でしょうがない」表示「...得不得了」。' },
            { text: 'でたまらない', reason: '「でたまらない」也可以，語意相同。' },
            { text: 'にすぎない', reason: '「にすぎない」表示「僅僅」，語意不合。' },
            { text: 'にちがいない', reason: '「にちがいない」表示「一定是」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てしょうがない」表示程度極深',
            analysis: '「てしょうがない」「てしかたがない」「てたまらない」三者意思接近，表示感情或感覺的程度極深。',
            comparisons: ['てしょうがない：...得不得了（口語）', 'てたまらない：...得受不了（同義）'],
            commonMistakes: ['○ 楽しみでしょうがない / ○ 楽しみでたまらない → 兩者可互換'],
        },
    },
    // ━━━ たて (just done / freshly done) ━━━
    {
        id: 'g_n3_339', category: 'grammar', level: 'N3', tags: ['suffix', 'freshness'],
        stem: '焼{や}き___のパンはとても美味{おい}しい。',
        stemZh: '剛烤好的麵包非常好吃。',
        options: [
            { text: 'たて', reason: '正確！「たて」表示「剛...完的」，新鮮狀態。' },
            { text: 'がち', reason: '「がち」表示傾向，語意不合。' },
            { text: '気味{ぎみ}', reason: '「気味」表示「有點」，語意不合。' },
            { text: 'っぽい', reason: '「っぽい」表示「像...的」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たて」表示「剛剛做完」的新鮮狀態',
            analysis: '「たて」接在動詞連用形後，表示動作完成不久的狀態。常用於好的語感。',
            comparisons: ['たて：剛做好的（新鮮感）', 'ばかり：才剛做完（時間短）'],
            commonMistakes: ['○ 焼きたてのパン / × 焼いたばかりのパン → 兩者接近，「たて」更強調新鮮感'],
        },
    },
    // ━━━ すなわち (namely / that is) ━━━
    {
        id: 'g_n3_340', category: 'grammar', level: 'N3', tags: ['conjunction', 'definition'],
        stem: '彼{かれ}は私{わたし}の母{はは}の兄{あに}、___伯父{おじ}だ。',
        stemZh: '他是我母親的哥哥，也就是伯父。',
        options: [
            { text: 'すなわち', reason: '正確！「すなわち」表示「也就是」，用於定義或釐清。' },
            { text: 'つまり', reason: '「つまり」也可以但「すなわち」更正式。' },
            { text: 'ところで', reason: '「ところで」表示「話說」，語意不合。' },
            { text: 'ところが', reason: '「ところが」表示「然而」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「すなわち」用於精確的定義或釐清',
            analysis: '「すなわち」比「つまり」更正式，用於邏輯上的等同關係。',
            comparisons: ['すなわち：即（正式定義）', 'つまり：也就是說（概括）'],
            commonMistakes: ['○ すなわち伯父だ / ○ つまり伯父だ → 前者更精確'],
        },
    },
    // ━━━ 代わりに (instead of / in exchange for) ━━━
    {
        id: 'g_n3_341', category: 'grammar', level: 'N3', tags: ['expression', 'exchange'],
        stem: '手伝{てつだ}ってあげる。その___、今度{こんど}ご飯{はん}をおごってね。',
        stemZh: '我幫你忙。作為交換，下次你請我吃飯。',
        options: [
            { text: '代{か}わりに', reason: '正確！「代わりに」表示「作為交換」。' },
            { text: 'ために', reason: '「ために」表示目的，語意不合。' },
            { text: '結果{けっか}', reason: '「結果」表示結果，語意不合。' },
            { text: 'おかげで', reason: '「おかげで」表示「多虧」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「代わりに」表示交換條件',
            analysis: '「代わりに」除了「代替」之外，也可以表示「作為交換條件」。',
            comparisons: ['代わりに：作為交換（條件）', 'にかわって：代替（代理）'],
            commonMistakes: ['○ 手伝う代わりにおごって / × 手伝うためにおごって → 「ために」不表交換'],
        },
    },
    // ━━━ てはじめて (only after doing ~ for the first time) ━━━
    {
        id: 'g_n3_342', category: 'grammar', level: 'N3', tags: ['expression', 'realization'],
        stem: '外国{がいこく}に住{す}んで___、日本{にほん}のよさがわかった。',
        stemZh: '住到國外之後，才了解到日本的好處。',
        options: [
            { text: 'はじめて', reason: '正確！「てはじめて」表示「做了...才第一次...」。' },
            { text: 'から', reason: '「てから」表示「之後」，不含「才第一次」的語意。' },
            { text: 'みて', reason: '「てみて」表示「試了之後」，語意不同。' },
            { text: 'すぐ', reason: '「てすぐ」表示「做完馬上」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てはじめて」表示「做了...之後才第一次...」',
            analysis: '「てはじめて」強調經歷某事後才有某種新的認知或體驗。',
            comparisons: ['てはじめて：做了才...（新認知）', 'てから：做了之後...（時間序列）'],
            commonMistakes: ['○ 住んではじめてわかった / × 住んでからわかった → 後者不含「第一次」的語意'],
        },
    },
    // ━━━ てからでないと (unless ~ first) ━━━
    {
        id: 'g_n3_343', category: 'grammar', level: 'N3', tags: ['expression', 'prerequisite'],
        stem: '実際{じっさい}に見{み}___、判断{はんだん}できない。',
        stemZh: '不先親眼看過的話，無法判斷。',
        options: [
            { text: 'てからでないと', reason: '正確！「てからでないと」表示「不先做...就不能...」。' },
            { text: 'ないと', reason: '「見ないと」也可以但不如「てからでないと」精確。' },
            { text: 'てからは', reason: '「てからは」表示「自從做了之後」，語意不同。' },
            { text: 'てしまうと', reason: '「てしまうと」表示「做了就...」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てからでないと」表示必須先做A才能做B',
            analysis: '「てからでないと」強調某個前提條件必須先滿足。',
            comparisons: ['てからでないと：不先做...就不能（前提條件）', 'てから：做了之後（時序）'],
            commonMistakes: ['○ 見てからでないと判断できない / × 見てから判断できない → 後者語法不通，需要「判断する」'],
        },
    },
    // ━━━ ている場合じゃない (this is no time for) ━━━
    {
        id: 'g_n3_344', category: 'grammar', level: 'N3', tags: ['expression', 'urgency'],
        stem: '締{し}め切{き}りが明日{あした}なのに、遊{あそ}んで___。',
        stemZh: '截止日期就是明天了，現在不是在玩的時候。',
        options: [
            { text: 'いる場合{ばあい}じゃない', reason: '正確！「ている場合じゃない」表示「不是做...的時候」。' },
            { text: 'いるわけがない', reason: '「わけがない」表示不可能，語意不同。' },
            { text: 'いるはずがない', reason: '「はずがない」表示不應該，語意不同。' },
            { text: 'いることはない', reason: '「ことはない」表示沒必要，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ている場合じゃない」表示情勢緊急不允許做某事',
            analysis: '「ている場合じゃない」用於批評或催促，表示當前不是做某事的適當時機。',
            comparisons: ['ている場合じゃない：不是做...的時候（緊急）', 'ているわけにはいかない：不能做（義務）'],
            commonMistakes: ['○ 遊んでいる場合じゃない / × 遊んでいるわけがない → 後者表示不可能在玩'],
        },
    },
    // ━━━ か何か (~ or something) ━━━
    {
        id: 'g_n3_345', category: 'grammar', level: 'N3', tags: ['expression', 'vague'],
        stem: 'コーヒー___飲{の}みませんか。',
        stemZh: '要不要喝杯咖啡之類的？',
        options: [
            { text: 'か何{なに}か', reason: '正確！「か何か」表示「...或什麼的」，模糊建議。' },
            { text: 'なんて', reason: '「なんて」表示「什麼的」，語感不同。' },
            { text: 'とか', reason: '「とか」也可列舉，但「か何か」更適合此處。' },
            { text: 'でも', reason: '「コーヒーでも」也可以表示提議，但語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「か何か」表示模糊的建議或列舉',
            analysis: '「か何か」用於不確定地提出選項，相當於「...或什麼的」。',
            comparisons: ['か何か：...或什麼的（模糊）', 'でも：...什麼的（提議）'],
            commonMistakes: ['○ コーヒーか何か飲みませんか / ○ コーヒーでも飲みませんか → 兩者都自然'],
        },
    },
    // ━━━ は～で有名 (famous for ~) ━━━
    {
        id: 'g_n3_346', category: 'grammar', level: 'N3', tags: ['expression', 'description'],
        stem: '京都{きょうと}はお寺{てら}___有名{ゆうめい}だ。',
        stemZh: '京都以寺廟聞名。',
        options: [
            { text: 'が', reason: '「が有名」也可以但「で有名」更表原因。' },
            { text: 'で', reason: '正確！「で有名」表示「以...而聞名」。' },
            { text: 'に', reason: '「に有名」文法不通。' },
            { text: 'を', reason: '「を有名」文法不通。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「は～で有名」表示「以...而聞名」',
            analysis: '「で」在此表示原因或理由，「で有名」表示因為某事物而出名。',
            comparisons: ['で有名：以...聞名（原因）', 'が有名：...很有名（主語）'],
            commonMistakes: ['○ お寺で有名 / × お寺に有名 → 「に」不適用於此語法'],
        },
    },
    // ━━━ ような気がする (feel like / have a feeling that) ━━━
    {
        id: 'g_n3_347', category: 'grammar', level: 'N3', tags: ['expression', 'intuition'],
        stem: '前{まえ}にもこの映画{えいが}を見{み}た___。',
        stemZh: '覺得以前也看過這部電影。',
        options: [
            { text: 'ような気{き}がする', reason: '正確！「ような気がする」表示「覺得好像...」。' },
            { text: 'ように見{み}える', reason: '「ように見える」表示「看起來像」，語意不同。' },
            { text: 'ようにする', reason: '「ようにする」表示「努力做到」，語意不合。' },
            { text: 'ようになる', reason: '「ようになる」表示「變得能...」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ような気がする」表示主觀的感覺或直覺',
            analysis: '「ような気がする」表示說話者不太確定但有一種感覺。',
            comparisons: ['ような気がする：覺得好像（直覺）', 'ように見える：看起來像（外觀判斷）'],
            commonMistakes: ['○ 見たような気がする / × 見たように見える → 「ように見える」不用於回憶'],
        },
    },
    // ━━━ ように言う (tell someone to) ━━━
    {
        id: 'g_n3_348', category: 'grammar', level: 'N3', tags: ['expression', 'instruction'],
        stem: '医者{いしゃ}に毎日{まいにち}運動{うんどう}する___言{い}われた。',
        stemZh: '被醫生叮嚀每天要運動。',
        options: [
            { text: 'ように', reason: '正確！「ように言う」表示「叮嚀做...」。' },
            { text: 'ために', reason: '「ために」表示目的，語法不通。' },
            { text: 'ことに', reason: '「ことに言う」不存在。' },
            { text: 'わけに', reason: '「わけに言う」不存在。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ように言う」表示叮嚀或指示某人做某事',
            analysis: '「ように言う」用於轉述指示或叮嚀，不直接引用而是間接表達。',
            comparisons: ['ように言う：叮嚀做（間接指示）', 'と言う：說（直接引用）'],
            commonMistakes: ['○ 運動するように言われた / × 運動すると言われた → 後者是直接引用'],
        },
    },
    // ━━━ とみえる (it seems that / apparently) ━━━
    {
        id: 'g_n3_349', category: 'grammar', level: 'N3', tags: ['expression', 'inference'],
        stem: '彼{かれ}は疲{つか}れている___、もう寝{ね}てしまった。',
        stemZh: '他看來很累，已經睡著了。',
        options: [
            { text: 'とみえて', reason: '正確！「とみえて」表示「看來是...」，推測原因。' },
            { text: 'とすると', reason: '「とすると」表示「如果是」，語意不同。' },
            { text: 'というと', reason: '「というと」表示「說到」，語意不合。' },
            { text: 'ところが', reason: '「ところが」表示「然而」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とみえて」表示從現象推測原因',
            analysis: '「とみえて」表示根據後文的結果推測出的原因或狀況。',
            comparisons: ['とみえて：看來是（推測原因）', 'ように見える：看起來像（外觀判斷）'],
            commonMistakes: ['○ 疲れているとみえて寝てしまった / × 疲れているように見えて寝てしまった → 「とみえて」更自然'],
        },
    },
    // ━━━ しばらく (for a while / in a long time) ━━━
    {
        id: 'g_n3_350', category: 'grammar', level: 'N3', tags: ['adverb', 'time'],
        stem: '___お待{ま}ちください。すぐ戻{もど}ります。',
        stemZh: '請稍等一下。馬上回來。',
        options: [
            { text: 'しばらく', reason: '正確！「しばらく」表示「暫時」「一會兒」。' },
            { text: 'ちょっと', reason: '「ちょっと」也可以但「しばらく」更正式。' },
            { text: 'ずっと', reason: '「ずっと」表示「一直」，語意不同。' },
            { text: 'やっと', reason: '「やっと」表示「好不容易」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「しばらく」表示「暫時」或「好久」',
            analysis: '「しばらく」有兩個用法：1. 暫時（請稍等）；2. 好久（許久不見）。',
            comparisons: ['しばらく：暫時/好久', 'ちょっと：一下（口語）'],
            commonMistakes: ['○ しばらくお待ちください / ○ 少々お待ちください → 兩者都正式'],
        },
    },
    // ━━━ 込む (deeply / into) ━━━
    {
        id: 'g_n3_351', category: 'grammar', level: 'N3', tags: ['suffix', 'depth'],
        stem: '彼{かれ}は部屋{へや}に閉{と}じ___って、出{で}てこない。',
        stemZh: '他把自己關在房間裡，不出來。',
        options: [
            { text: 'こもっ', reason: '「閉じこもって」也正確但不是「込む」系列。' },
            { text: '込{こ}', reason: '正確！「閉じ込もる」→「閉じこもって」中的「込む」表示深入封閉。' },
            { text: 'かけ', reason: '「閉じかけて」表示「快關上」，語意不同。' },
            { text: '切{き}', reason: '「閉じ切って」表示「完全關閉」，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「込む」表示深入、進入某狀態',
            analysis: '「込む」接在動詞連用形後，表示深入或持續某狀態。「閉じ込もる」= 把自己關在裡面。',
            comparisons: ['込む：深入/進入（深度）', '出す：開始（起始）'],
            commonMistakes: ['○ 閉じ込もって出てこない / × 閉じ切って出てこない → 「切る」是完全關閉'],
        },
    },
    // ━━━ 直す (redo / do again properly) ━━━
    {
        id: 'g_n3_352', category: 'grammar', level: 'N3', tags: ['suffix', 'redo'],
        stem: 'レポートに間違{まちが}いが多{おお}いので、書{か}き___してください。',
        stemZh: '報告裡錯誤太多了，請重寫。',
        options: [
            { text: '直{なお}', reason: '正確！「書き直す」表示「重新寫」。' },
            { text: '込{こ}み', reason: '「書き込む」表示「寫入」，語意不同。' },
            { text: '出{だ}', reason: '「書き出す」表示「開始寫」，語意不同。' },
            { text: '続{つづ}け', reason: '「書き続ける」表示「繼續寫」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「直す」表示重新做一遍或修正',
            analysis: '「直す」接在動詞連用形後，表示將做錯的事重新做一遍。',
            comparisons: ['直す：重新做（修正）', '返す：再做一次（重複）'],
            commonMistakes: ['○ 書き直す / × 書き返す → 「返す」不常用於「重做」'],
        },
    },
    // ━━━ 通す (do thoroughly / persist) ━━━
    {
        id: 'g_n3_353', category: 'grammar', level: 'N3', tags: ['suffix', 'persistence'],
        stem: '最後{さいご}まで自分{じぶん}の意見{いけん}を言{い}い___した。',
        stemZh: '堅持到最後說出了自己的意見。',
        options: [
            { text: '通{とお}', reason: '正確！「言い通す」表示「堅持說到底」。' },
            { text: '切{き}っ', reason: '「言い切った」表示「斷言」，語意不同。' },
            { text: '出{だ}', reason: '「言い出した」表示「開始說」，語意不同。' },
            { text: '直{なお}', reason: '「言い直した」表示「重說」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「通す」表示堅持到底',
            analysis: '「通す」接在動詞連用形後，表示堅持某行為直到結束。',
            comparisons: ['通す：堅持到底（貫徹）', '切る：做完（徹底完成）'],
            commonMistakes: ['○ 言い通した / × 言い切った → 前者是堅持，後者是斷言'],
        },
    },
    // ━━━ 合う (do mutually / together) ━━━
    {
        id: 'g_n3_354', category: 'grammar', level: 'N3', tags: ['suffix', 'mutual'],
        stem: 'この問題{もんだい}について、みんなで話{はな}し___いましょう。',
        stemZh: '大家一起來討論這個問題吧。',
        options: [
            { text: '合{あ}', reason: '正確！「話し合う」表示「互相討論」。' },
            { text: '込{こ}み', reason: '「話し込む」表示「聊得入迷」，語意不同。' },
            { text: '出{だ}し', reason: '「話し出す」表示「開始說」，語意不同。' },
            { text: '続{つづ}け', reason: '「話し続ける」表示「繼續說」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「合う」表示互相進行某動作',
            analysis: '「合う」接在動詞連用形後，表示雙方互相進行的動作。',
            comparisons: ['合う：互相（雙方共同）', '込む：深入（深度）'],
            commonMistakes: ['○ 話し合う / × 話し込む → 前者是討論，後者是聊得忘我'],
        },
    },
    // ━━━ 上げる (finish / complete) ━━━
    {
        id: 'g_n3_355', category: 'grammar', level: 'N3', tags: ['suffix', 'completion'],
        stem: 'やっとレポートを書{か}き___た。',
        stemZh: '終於把報告寫完了。',
        options: [
            { text: '上{あ}げ', reason: '正確！「書き上げる」表示「寫完」，帶有完成感。' },
            { text: '終{お}わっ', reason: '「書き終わった」也可以但「上げる」更有成就感。' },
            { text: '出{だ}し', reason: '「書き出した」表示「開始寫」，語意相反。' },
            { text: '直{なお}し', reason: '「書き直した」表示「重寫」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「上げる」表示完成某項工作',
            analysis: '「上げる」接在動詞連用形後，表示徹底完成，帶有成就感。',
            comparisons: ['上げる：完成（有成就感）', '終わる：結束（自然結束）'],
            commonMistakes: ['○ 書き上げた / ○ 書き終わった → 前者更有達成感'],
        },
    },
    // ━━━ ずつ (each / at a time) ━━━
    {
        id: 'g_n3_356', category: 'grammar', level: 'N3', tags: ['particle', 'distribution'],
        stem: '一人{ひとり}に2個{こ}___配{くば}ってください。',
        stemZh: '請每人發兩個。',
        options: [
            { text: 'ずつ', reason: '正確！「ずつ」表示「每人各...」的均等分配。' },
            { text: 'ごとに', reason: '「ごとに」表示「每隔」，語意不同。' },
            { text: 'だけ', reason: '「だけ」表示「只有」，語意不同。' },
            { text: 'ばかり', reason: '「ばかり」表示「大約」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ずつ」表示均等分配「每個各...」',
            analysis: '「ずつ」用於表示均等地分配數量。',
            comparisons: ['ずつ：各...（均等分配）', 'ごとに：每隔（間隔）'],
            commonMistakes: ['○ 2個ずつ配る / × 2個ごとに配る → 「ごとに」不用於分配'],
        },
    },
    // ━━━ こと (must do - instruction) ━━━
    {
        id: 'g_n3_357', category: 'grammar', level: 'N3', tags: ['expression', 'instruction'],
        stem: 'レポートは来週{らいしゅう}の月曜日{げつようび}までに提出{ていしゅつ}する___。',
        stemZh: '報告必須在下週一之前繳交。',
        options: [
            { text: 'こと', reason: '正確！「こと」用於規則或指示，表示「必須」。' },
            { text: 'べきだ', reason: '「べきだ」也表示「應該」，但「こと」用於書面指示。' },
            { text: 'ものだ', reason: '「ものだ」表示常理，語意不同。' },
            { text: 'わけだ', reason: '「わけだ」表示結論，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「こと」在規則或指示中表示「必須」',
            analysis: '「こと」放在句尾用於書面的規定、指示、告示等，相當於命令。',
            comparisons: ['こと：必須（書面指示）', 'べきだ：應該（義務建議）'],
            commonMistakes: ['○ 提出すること / ○ 提出するべきだ → 前者更有命令感'],
        },
    },
    // ━━━ ものだ (it's natural that / the way things are) ━━━
    {
        id: 'g_n3_358', category: 'grammar', level: 'N3', tags: ['expression', 'general-truth'],
        stem: '人{ひと}は誰{だれ}でも間違{まちが}いをする___。',
        stemZh: '人都是會犯錯的。',
        options: [
            { text: 'ものだ', reason: '正確！「ものだ」表示「一般常理」。' },
            { text: 'わけだ', reason: '「わけだ」表示推理結論，語意不同。' },
            { text: 'ことだ', reason: '「ことだ」表示建議，語意不同。' },
            { text: 'はずだ', reason: '「はずだ」表示推測，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ものだ」表示一般道理或常識',
            analysis: '「ものだ」用於陳述一般性的道理，表示「事情本來就是這樣的」。',
            comparisons: ['ものだ：本來就是這樣（常理）', 'ことだ：應該做（建議）'],
            commonMistakes: ['○ 間違いをするものだ / × 間違いをすることだ → 後者是「應該犯錯」，不合理'],
        },
    },
    // ━━━ ようになる (come to / become able to) ━━━
    {
        id: 'g_n3_359', category: 'grammar', level: 'N3', tags: ['expression', 'change'],
        stem: '毎日{まいにち}練習{れんしゅう}したら、泳{およ}げる___。',
        stemZh: '每天練習的話，就能變得會游泳了。',
        options: [
            { text: 'ようになる', reason: '正確！「ようになる」表示「變得能做...」。' },
            { text: 'ようにする', reason: '「ようにする」表示「努力做到」，語意不同。' },
            { text: 'ことになる', reason: '「ことになる」表示被決定，語意不合。' },
            { text: 'ことにする', reason: '「ことにする」表示自己決定，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようになる」表示能力或狀態的變化',
            analysis: '「ようになる」用於表示從「不能做」變成「能做」，或習慣的改變。',
            comparisons: ['ようになる：變得能做（變化）', 'ようにする：努力做到（主動）'],
            commonMistakes: ['○ 泳げるようになる / × 泳げるようにする → 後者是努力的過程'],
        },
    },
    // ━━━ ようにする (try to / make sure to) ━━━
    {
        id: 'g_n3_360', category: 'grammar', level: 'N3', tags: ['expression', 'effort'],
        stem: '毎日{まいにち}野菜{やさい}を食{た}べる___。',
        stemZh: '盡量每天吃蔬菜。',
        options: [
            { text: 'ようにしている', reason: '正確！「ようにしている」表示努力做到某個習慣。' },
            { text: 'ようになっている', reason: '「ようになっている」表示已經變成那樣，語意不同。' },
            { text: 'ことにしている', reason: '「ことにしている」也可以但「ようにする」更強調努力。' },
            { text: 'ことになっている', reason: '「ことになっている」表示規定，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようにする」表示努力做到某事',
            analysis: '「ようにしている」表示持續努力保持某習慣，比「ことにしている」更強調努力過程。',
            comparisons: ['ようにする：努力做到（過程）', 'ことにする：決定做（決定）'],
            commonMistakes: ['○ 食べるようにしている / ○ 食べることにしている → 前者強調努力'],
        },
    },
    // ━━━ のでしょうか (I wonder if) ━━━
    {
        id: 'g_n3_361', category: 'grammar', level: 'N3', tags: ['expression', 'polite-question'],
        stem: 'どうすればいい___。',
        stemZh: '該怎麼辦才好呢？',
        options: [
            { text: 'のでしょうか', reason: '正確！「のでしょうか」是委婉的疑問表達。' },
            { text: 'のだろうか', reason: '「のだろうか」也可以，但較不正式。' },
            { text: 'わけですか', reason: '「わけですか」表示確認，語感不同。' },
            { text: 'ものですか', reason: '「ものですか」表示反問，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「のでしょうか」是委婉的疑問句式',
            analysis: '「のでしょうか」比「ですか」更委婉，常用於正式場合的提問。',
            comparisons: ['のでしょうか：...呢？（委婉正式）', 'のだろうか：...吧？（自問）'],
            commonMistakes: ['○ どうすればいいのでしょうか / ○ どうすればいいのだろうか → 前者更禮貌'],
        },
    },
    // ━━━ そうもない / そうにない (unlikely to) ━━━
    {
        id: 'g_n3_362', category: 'grammar', level: 'N3', tags: ['expression', 'unlikelihood'],
        stem: 'この仕事{しごと}は今日中{きょうじゅう}に終{お}わり___。',
        stemZh: '這份工作今天之內看來不可能完成。',
        options: [
            { text: 'そうもない', reason: '正確！「そうもない」表示「看來不太可能」。' },
            { text: 'そうだ', reason: '「そうだ」表示「好像會」，語意相反。' },
            { text: 'にちがいない', reason: '「にちがいない」表示「一定」，語意相反。' },
            { text: 'かもしれない', reason: '「かもしれない」表示「也許」，不確定性不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「そうもない」表示從外觀判斷不太可能',
            analysis: '「そうもない」「そうにない」都表示看起來不太可能實現。',
            comparisons: ['そうもない：看來不可能（否定推測）', 'そうだ：好像會（肯定推測）'],
            commonMistakes: ['○ 終わりそうもない / × 終わりそうだ → 語意完全相反'],
        },
    },
    // ━━━ つもりだった (had intended to) ━━━
    {
        id: 'g_n3_363', category: 'grammar', level: 'N3', tags: ['expression', 'intention'],
        stem: '今日{きょう}は早{はや}く寝{ね}る___が、つい夜更{よふ}かしをしてしまった。',
        stemZh: '本來打算今天早點睡，卻不小心熬夜了。',
        options: [
            { text: 'つもりだった', reason: '正確！「つもりだった」表示「原本打算...但沒做到」。' },
            { text: 'つもりだ', reason: '「つもりだ」表示現在的打算，語意不同。' },
            { text: 'はずだった', reason: '「はずだった」表示「本來應該」，語感不同。' },
            { text: 'ことだった', reason: '「ことだった」不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「つもりだった」表示過去的打算（但未實現）',
            analysis: '「つもりだった」表示過去有某個意圖但最終沒有實現。',
            comparisons: ['つもりだった：原本打算（未實現）', 'はずだった：本來應該（推測未實現）'],
            commonMistakes: ['○ 寝るつもりだったが / × 寝るつもりだが → 後者是現在的打算'],
        },
    },
    // ━━━ つもりで (with the intention of / believing that) ━━━
    {
        id: 'g_n3_364', category: 'grammar', level: 'N3', tags: ['expression', 'mindset'],
        stem: '旅行{りょこう}に行{い}った___で、この映画{えいが}を見{み}てください。',
        stemZh: '請當作是去旅行的心情來看這部電影。',
        options: [
            { text: 'つもり', reason: '正確！「つもりで」表示「帶著...的心情」。' },
            { text: 'ため', reason: '「ために」表示目的，語意不同。' },
            { text: 'よう', reason: '「ように」語法不通。' },
            { text: 'こと', reason: '「ことで」語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「つもりで」表示帶著某種心態或假設',
            analysis: '「つもりで」用於假設某種情境或帶著某種心態去做某事。',
            comparisons: ['つもりで：當作是...（假設心態）', 'ために：為了（目的）'],
            commonMistakes: ['○ 旅行に行ったつもりで / × 旅行に行ったために → 「ために」不表示假設'],
        },
    },
    // ━━━ に慣れる (get used to) ━━━
    {
        id: 'g_n3_365', category: 'grammar', level: 'N3', tags: ['expression', 'adaptation'],
        stem: 'やっと日本{にほん}の生活{せいかつ}___。',
        stemZh: '終於習慣了日本的生活。',
        options: [
            { text: 'に慣{な}れた', reason: '正確！「に慣れた」表示「習慣了...」。' },
            { text: 'を慣{な}れた', reason: '「を慣れた」助詞錯誤，應用「に」。' },
            { text: 'が慣{な}れた', reason: '「が慣れた」助詞錯誤。' },
            { text: 'で慣{な}れた', reason: '「で慣れた」助詞錯誤。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に慣れる」表示習慣某事物',
            analysis: '「に慣れる」的「に」表示習慣的對象，是固定搭配。',
            comparisons: ['に慣れる：習慣...（適應）', 'に飽きる：厭煩...（厭倦）'],
            commonMistakes: ['○ 生活に慣れた / × 生活を慣れた → 「慣れる」搭配「に」'],
        },
    },
    // ━━━ には (in order to / to) ━━━
    {
        id: 'g_n3_366', category: 'grammar', level: 'N3', tags: ['particle', 'purpose'],
        stem: 'この試験{しけん}に合格{ごうかく}する___、もっと勉強{べんきょう}しなければならない。',
        stemZh: '要通過這個考試，必須更加努力學習。',
        options: [
            { text: 'には', reason: '正確！「には」表示「要做到A就必須B」。' },
            { text: 'ために', reason: '「ために」也可以但「には」更自然。' },
            { text: 'ように', reason: '「ように」接非意志動詞或否定形。' },
            { text: 'として', reason: '「として」表示「作為」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「には」用於表示達成目標所需的條件',
            analysis: '「Vには」表示「要做到V」就必須滿足某條件。語氣簡潔有力。',
            comparisons: ['には：要...就（條件簡潔）', 'ために：為了（目的正式）'],
            commonMistakes: ['○ 合格するにはもっと勉強が必要 / ○ 合格するためにもっと勉強する → 兩者可互換'],
        },
    },
    // ━━━ ようとしたら (just when about to) ━━━
    {
        id: 'g_n3_367', category: 'grammar', level: 'N3', tags: ['expression', 'timing'],
        stem: '出{で}かけ___、電話{でんわ}が鳴{な}った。',
        stemZh: '正要出門的時候，電話響了。',
        options: [
            { text: 'ようとしたら', reason: '正確！「ようとしたら」表示「正要做...的時候」。' },
            { text: 'ようとした', reason: '「ようとした」只表示試圖做，不含時間感。' },
            { text: 'ているうちに', reason: '「ているうちに」表示「趁著在做...」，語意不同。' },
            { text: 'たとたんに', reason: '「たとたんに」表示「一做就」，語意接近但語法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようとしたら」表示正要做某事時發生了另一件事',
            analysis: '「ようとしたら」用於表示剛要開始做某事的瞬間，另一件事打斷了。',
            comparisons: ['ようとしたら：正要做時（被打斷）', 'たとたんに：做完的瞬間（剛完成）'],
            commonMistakes: ['○ 出かけようとしたら電話が鳴った / × 出かけたとたんに電話が鳴った → 後者是已經出門了'],
        },
    },
    // ━━━ て済む (can get by with / be settled with) ━━━
    {
        id: 'g_n3_368', category: 'grammar', level: 'N3', tags: ['expression', 'sufficiency'],
        stem: '謝{あやま}っ___ことではない。責任{せきにん}を取{と}るべきだ。',
        stemZh: '光道歉是解決不了的。應該負起責任。',
        options: [
            { text: 'て済{す}む', reason: '正確！「て済む」表示「做...就能解決」，此處否定。' },
            { text: 'てもいい', reason: '「てもいい」表示「做也可以」，語意不同。' },
            { text: 'てしまう', reason: '「てしまう」表示「做完了」，語意不同。' },
            { text: 'ていい', reason: '「ていい」表示許可，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「て済む」表示做某事就能解決問題',
            analysis: '「て済む」用於表示某個簡單的動作就能解決問題。否定形「て済むことではない」表示不夠。',
            comparisons: ['て済む：做...就行了（解決）', 'て済まない：做...也不夠（不足以解決）'],
            commonMistakes: ['○ 謝って済むことではない / × 謝ってもいいことではない → 語意不同'],
        },
    },
    // ━━━ 結局 (after all / in the end) ━━━
    {
        id: 'g_n3_369', category: 'grammar', level: 'N3', tags: ['adverb', 'conclusion'],
        stem: 'いろいろ考{かんが}えたが、___元{もと}の計画{けいかく}に戻{もど}った。',
        stemZh: '想了很多，結果還是回到了原來的計劃。',
        options: [
            { text: '結局{けっきょく}', reason: '正確！「結局」表示「最後」「結果」。' },
            { text: 'ついに', reason: '「ついに」表示「終於」，語感不同。' },
            { text: 'やはり', reason: '「やはり」表示「果然」，語感接近但不同。' },
            { text: 'つまり', reason: '「つまり」表示「也就是說」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「結局」表示經過周折後的最終結果',
            analysis: '「結局」用於表示經過各種考量或周折後，最終的結果。',
            comparisons: ['結局：結果（周折後）', 'ついに：終於（長時間後）'],
            commonMistakes: ['○ 結局元に戻った / × ついに元に戻った → 「ついに」偏正面的達成'],
        },
    },
    // ━━━ 別に～ない (not particularly) ━━━
    {
        id: 'g_n3_370', category: 'grammar', level: 'N3', tags: ['adverb', 'indifference'],
        stem: '___行{い}きたくない。どっちでもいい。',
        stemZh: '並不特別想去。都無所謂。',
        options: [
            { text: '別{べつ}に', reason: '正確！「別に～ない」表示「並不特別...」。' },
            { text: '全然{ぜんぜん}', reason: '「全然～ない」表示「完全不」，否定太強。' },
            { text: 'めったに', reason: '「めったに～ない」表示「很少」，語意不同。' },
            { text: '決{けっ}して', reason: '「決して～ない」表示「絕對不」，語意太強。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「別に～ない」表示沒有特別的感受',
            analysis: '「別に～ない」表示對某事沒有特別的意願或感覺，語氣淡漠。',
            comparisons: ['別に～ない：沒什麼特別（淡漠）', '全然～ない：完全不（強否定）'],
            commonMistakes: ['○ 別に行きたくない / × 全然行きたくない → 後者否定太強'],
        },
    },
    // ━━━ とても～ない (cannot possibly / no way) ━━━
    {
        id: 'g_n3_371', category: 'grammar', level: 'N3', tags: ['expression', 'impossibility'],
        stem: 'この量{りょう}は___食{た}べられない。',
        stemZh: '這個份量怎麼也吃不完。',
        options: [
            { text: 'とても', reason: '正確！「とても～ない」表示「怎麼也不能」。' },
            { text: 'なかなか', reason: '「なかなか」表示「怎麼也不」，語感接近但程度不同。' },
            { text: 'めったに', reason: '「めったに」表示「很少」，語意不同。' },
            { text: '全然{ぜんぜん}', reason: '「全然」表示「完全不」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とても～ない」表示「根本無法」',
            analysis: '「とても～ない」表示主觀上認為完全做不到。注意「とても」搭配否定時意思不同。',
            comparisons: ['とても～ない：怎麼也不能（主觀判斷）', 'なかなか～ない：怎麼也不能（嘗試後）'],
            commonMistakes: ['○ とても食べられない / ○ なかなか食べられない → 前者更強調完全不可能'],
        },
    },
    // ━━━ だけでなく (not only ~ but also) ━━━
    {
        id: 'g_n3_372', category: 'grammar', level: 'N3', tags: ['expression', 'addition'],
        stem: 'この店{みせ}は味{あじ}がいい___、サービスもいい。',
        stemZh: '這家店不僅味道好，服務也好。',
        options: [
            { text: 'だけでなく', reason: '正確！「だけでなく」表示「不僅...而且」。' },
            { text: 'だけで', reason: '「だけで」表示「僅僅」，語意不同。' },
            { text: 'だけに', reason: '「だけに」表示「正因為」，語意不同。' },
            { text: 'だけあって', reason: '「だけあって」表示「不愧是」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「だけでなく」表示不僅A而且B',
            analysis: '「だけでなく」用於列舉多個面向，表示不止一方面好。',
            comparisons: ['だけでなく：不僅...而且（追加）', 'ばかりでなく：不僅（同義）'],
            commonMistakes: ['○ 味がいいだけでなくサービスもいい / ○ 味がいいばかりでなくサービスもいい → 可互換'],
        },
    },
    // ━━━ だけあって (as expected of / it's worth ~) ━━━
    {
        id: 'g_n3_373', category: 'grammar', level: 'N3', tags: ['expression', 'expectation'],
        stem: '有名{ゆうめい}なシェフが作{つく}った___、とても美味{おい}しい。',
        stemZh: '不愧是有名的主廚做的，非常好吃。',
        options: [
            { text: 'だけあって', reason: '正確！「だけあって」表示「不愧是...」。' },
            { text: 'だけでなく', reason: '「だけでなく」表示「不僅」，語意不同。' },
            { text: 'だけに', reason: '「だけに」也可以表示「正因為」，語感接近。' },
            { text: 'だけで', reason: '「だけで」表示「僅僅」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「だけあって」表示「不愧是」，結果符合預期',
            analysis: '「だけあって」用於表示因為有某種背景或條件，所以結果理所當然地好。',
            comparisons: ['だけあって：不愧是（名副其實）', 'だけに：正因為（因果）'],
            commonMistakes: ['○ 有名なシェフが作っただけあって美味しい / × 有名なシェフが作っただけで美味しい → 語意不同'],
        },
    },
    // ━━━ ために (because of / for the purpose of) ━━━
    {
        id: 'g_n3_374', category: 'grammar', level: 'N3', tags: ['expression', 'purpose-cause'],
        stem: '大雨{おおあめ}の___、電車{でんしゃ}が止{と}まった。',
        stemZh: '因為大雨，電車停駛了。',
        options: [
            { text: 'せいで', reason: '「せいで」也可以但「ために」更中性。' },
            { text: 'おかげで', reason: '「おかげで」用於正面結果，此處是負面。' },
            { text: 'ために', reason: '正確！「ために」表示原因（中性）。' },
            { text: 'ばかりに', reason: '「ばかりに」表示「就因為」，帶後悔感。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ために」表示中性的原因',
            analysis: '「ために」有兩個用法：1. 目的（意志動詞前）；2. 原因（名詞/非意志動詞前）。此處是原因。',
            comparisons: ['ために：因為（中性）', 'せいで：因為（負面歸咎）', 'おかげで：多虧（正面感謝）'],
            commonMistakes: ['○ 大雨のために電車が止まった / ○ 大雨のせいで電車が止まった → 前者更客觀'],
        },
    },
    // ━━━ ようにする (make sure to / try to) - challenge ━━━
    {
        id: 'g_n3_375', category: 'grammar', level: 'N3', tags: ['expression', 'complex'],
        stem: '子供{こども}に早{はや}く寝{ね}る___した。',
        stemZh: '叮嚀孩子早點睡。',
        options: [
            { text: 'ように', reason: '正確！「ように言う/する」表示叮嚀做某事。' },
            { text: 'ために', reason: '「ために」表示目的，語法不通。' },
            { text: 'ことに', reason: '「ことにした」表示決定，但語法需要「ことに」。' },
            { text: 'はずに', reason: '「はずにした」不存在。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようにする」也可指讓他人做到某事',
            analysis: '「ようにする」不只是自己努力做，也可以是讓別人做到。此處是叮嚀孩子。',
            comparisons: ['ようにする：讓做到（指導/叮嚀）', 'ように言う：叮嚀做（口頭指示）'],
            commonMistakes: ['○ 寝るようにした / × 寝るためにした → 「ために」不接「する」表叮嚀'],
        },
    },
    // ━━━ Complex: わけ系列混合 ━━━
    {
        id: 'g_n3_376', category: 'grammar', level: 'N3', tags: ['wake', 'complex'],
        stem: '日本{にほん}に5年{ねん}住{す}んでいるからといって、日本語{にほんご}がペラペラな___。',
        stemZh: '不能因為在日本住了五年就認定日語很流利。',
        options: [
            { text: 'わけだ', reason: '「わけだ」表示結論，語意相反。' },
            { text: 'わけにはいかない', reason: '「わけにはいかない」表示不能做，語意不同。' },
            { text: 'わけではない', reason: '正確！「わけではない」表示「並非一定」。' },
            { text: 'わけがない', reason: '「わけがない」表示不可能，語意太強。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「からといって～わけではない」是常見固定搭配',
            analysis: '「からといって～わけではない」表示不能因為某理由就做出某判斷。',
            comparisons: ['わけではない：並非（部分否定）', 'わけがない：不可能（完全否定）'],
            commonMistakes: ['○ ペラペラなわけではない / × ペラペラなわけがない → 後者太絕對'],
        },
    },
    // ━━━ Complex: 時間表達混合 ━━━
    {
        id: 'g_n3_377', category: 'grammar', level: 'N3', tags: ['time', 'complex'],
        stem: '料理{りょうり}を作{つく}っている___、友達{ともだち}が遊{あそ}びに来{き}た。',
        stemZh: '正在做菜的時候，朋友來了。',
        options: [
            { text: '最中{さいちゅう}に', reason: '正確！「最中に」表示正在做某事時發生突發事件。' },
            { text: '途中{とちゅう}で', reason: '「途中で」偏「中途」，不如「最中に」強調正在進行。' },
            { text: 'うちに', reason: '「うちに」表示「趁著」，語意不同。' },
            { text: '際{さい}に', reason: '「際に」較正式，此處不太適合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '區分「最中に」「途中で」的使用場景',
            analysis: '正在做某事（高峰期）時的突發事件用「最中に」，移動過程或做到一半用「途中で」。',
            comparisons: ['最中に：正在做的高峰期（突發）', '途中で：過程中途（進行中）'],
            commonMistakes: ['○ 料理を作っている最中に / ○ 料理を作っている途中で → 前者更強調突然感'],
        },
    },
    // ━━━ Complex: 傾向表達混合 ━━━
    {
        id: 'g_n3_378', category: 'grammar', level: 'N3', tags: ['suffix', 'complex'],
        stem: '最近{さいきん}太{ふと}り___なので、運動{うんどう}を始{はじ}めた。',
        stemZh: '最近有點發胖的傾向，所以開始運動了。',
        options: [
            { text: 'っぽい', reason: '「太りっぽい」不自然。' },
            { text: '気味{ぎみ}', reason: '正確！「太り気味」表示「有點發胖」。' },
            { text: 'がち', reason: '「太りがち」也可以，表示「容易發胖」。' },
            { text: 'だらけ', reason: '「太りだらけ」不存在。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「気味」表示輕微的傾向或狀態',
            analysis: '「太り気味」表示有一點點發胖的傾向，程度比「がち」更輕。',
            comparisons: ['気味：有點...（輕微）', 'がち：容易...（經常性）', 'っぽい：像...的（特徵）'],
            commonMistakes: ['○ 太り気味 / ○ 太りがち → 前者是目前輕微的狀態，後者是經常性傾向'],
        },
    },
    // ━━━ Complex: ことにする vs ことになる ━━━
    {
        id: 'g_n3_379', category: 'grammar', level: 'N3', tags: ['koto', 'complex'],
        stem: '会社{かいしゃ}の方針{ほうしん}で、来月{らいげつ}からリモートワークを導入{どうにゅう}する___。',
        stemZh: '根據公司方針，從下個月起將引進遠距工作。',
        options: [
            { text: 'ことにした', reason: '「ことにした」表示自己的決定，公司方針不是個人決定。' },
            { text: 'ことになった', reason: '正確！「ことになった」表示外部決定的結果。' },
            { text: 'ことにしている', reason: '「ことにしている」表示個人習慣，語意不合。' },
            { text: 'ことはない', reason: '「ことはない」表示沒必要，語意不合。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '公司方針屬於外部決定，用「ことになった」',
            analysis: '分辨「ことにする」和「ことになる」的關鍵在於是否為自己的意志決定。',
            comparisons: ['ことになった：被決定了（外部）', 'ことにした：決定了（自己）'],
            commonMistakes: ['○ 導入することになった / × 導入することにした → 公司方針非個人決定'],
        },
    },
    // ━━━ Complex: おかげで vs せいで ━━━
    {
        id: 'g_n3_380', category: 'grammar', level: 'N3', tags: ['cause-effect', 'complex'],
        stem: '隣{となり}の部屋{へや}がうるさい___、全然{ぜんぜん}眠{ねむ}れなかった。',
        stemZh: '都是因為隔壁房間太吵，完全睡不著。',
        options: [
            { text: 'おかげで', reason: '「おかげで」用於正面結果，此處是負面。' },
            { text: 'せいで', reason: '正確！「せいで」表示負面結果的原因。' },
            { text: 'ために', reason: '「ために」較中性，此處有歸咎語氣。' },
            { text: 'ことで', reason: '「ことで」表示就某事而言，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '負面結果且帶歸咎語氣用「せいで」',
            analysis: '有明確的歸咎對象且結果是負面的時候，用「せいで」最合適。',
            comparisons: ['せいで：都因為（負面歸咎）', 'おかげで：多虧（正面感謝）', 'ために：因為（中性）'],
            commonMistakes: ['○ うるさいせいで眠れない / × うるさいおかげで眠れない → 「おかげで」不用於負面'],
        },
    },
    // ━━━ Complex: によって multiple meanings ━━━
    {
        id: 'g_n3_381', category: 'grammar', level: 'N3', tags: ['compound-particle', 'complex'],
        stem: 'この小説{しょうせつ}は夏目{なつめ}漱石{そうせき}___書{か}かれた。',
        stemZh: '這篇小說是由夏目漱石寫的。',
        options: [
            { text: 'によって', reason: '正確！「によって」在被動句中表示動作者「由...」。' },
            { text: 'について', reason: '「について」表示主題，語意不合。' },
            { text: 'にとって', reason: '「にとって」表示立場，語意不合。' },
            { text: 'において', reason: '「において」表示場所，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「によって」在被動句中表示動作的主體',
            analysis: '「によって」有多種用法：1. 原因；2. 手段；3. 被動句中的動作者（由...做）。',
            comparisons: ['によって書かれた：由...寫的（動作者）', 'によって異なる：因...而不同（原因）'],
            commonMistakes: ['○ 夏目漱石によって書かれた / × 夏目漱石について書かれた → 「について」表示主題'],
        },
    },
    // ━━━ Complex: に対して multiple uses ━━━
    {
        id: 'g_n3_382', category: 'grammar', level: 'N3', tags: ['compound-particle', 'complex'],
        stem: '兄{あに}は内向的{ないこうてき}だ。それ___、弟{おとうと}は社交的{しゃこうてき}だ。',
        stemZh: '哥哥很內向。相對地，弟弟很外向。',
        options: [
            { text: 'に対{たい}して', reason: '正確！「それに対して」表示「相對地」，用於對比。' },
            { text: 'について', reason: '「について」表示主題，語意不合。' },
            { text: 'によって', reason: '「によって」表示原因，語意不合。' },
            { text: 'にとって', reason: '「にとって」表示立場，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に対して」也可表示對比',
            analysis: '「に対して」除了「對...」之外，也可以表示兩者的對比「相對地」。',
            comparisons: ['に対して：對...（對象）/ 相對地（對比）', '一方で：另一方面（對比）'],
            commonMistakes: ['○ それに対して弟は社交的 / ○ 一方で弟は社交的 → 兩者都可表對比'],
        },
    },
    // ━━━ Complex: において場合選擇 ━━━
    {
        id: 'g_n3_383', category: 'grammar', level: 'N3', tags: ['compound-particle', 'complex'],
        stem: '現代{げんだい}社会{しゃかい}___、コミュニケーション能力{のうりょく}は重要{じゅうよう}だ。',
        stemZh: '在現代社會中，溝通能力很重要。',
        options: [
            { text: 'において', reason: '正確！「において」表示「在...中」（領域/場面）。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，語感不同。' },
            { text: 'について', reason: '「について」表示主題，語法不同。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對...」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「において」表示某個領域或場合',
            analysis: '「において」除了物理場所外，也可以表示抽象的領域或場合。',
            comparisons: ['において：在...中（場所/領域）', 'にとって：對...而言（立場）'],
            commonMistakes: ['○ 現代社会においてコミュニケーション能力は重要 / × 現代社会にとってコミュニケーション能力は重要 → 後者語感不同'],
        },
    },
    // ━━━ 中 (during / in the middle of) ━━━
    {
        id: 'g_n3_384', category: 'grammar', level: 'N3', tags: ['suffix', 'duration'],
        stem: '現在{げんざい}、工事{こうじ}___です。ご迷惑{めいわく}をおかけします。',
        stemZh: '目前正在施工中。造成不便敬請見諒。',
        options: [
            { text: '中{ちゅう}', reason: '正確！「工事中」表示「施工中」。' },
            { text: '最中{さいちゅう}', reason: '「最中」也表示正在進行，但不用於告示。' },
            { text: '途中{とちゅう}', reason: '「途中」表示中途，不用於表示持續狀態。' },
            { text: '内{ない}', reason: '「工事内」不存在。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「中」接在名詞後表示「正在...中」',
            analysis: '「中」讀作「ちゅう」，接在名詞後表示某事正在進行的狀態。常用於告示。',
            comparisons: ['中：...中（狀態標示）', '最中：正當...（突發）'],
            commonMistakes: ['○ 工事中 / × 工事最中 → 告示用「中」更自然'],
        },
    },
    // ━━━ だけ (as much as / to the extent of) ━━━
    {
        id: 'g_n3_385', category: 'grammar', level: 'N3', tags: ['particle', 'extent'],
        stem: '好{す}きな___食{た}べてください。',
        stemZh: '想吃多少就吃多少。',
        options: [
            { text: 'だけ', reason: '正確！「好きなだけ」表示「想要多少就多少」。' },
            { text: 'ほど', reason: '「好きなほど」不自然。' },
            { text: 'くらい', reason: '「好きなくらい」不自然。' },
            { text: 'まで', reason: '「好きなまで」不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「だけ」表示「盡量...」「想要多少就多少」',
            analysis: '「～だけ～」的重複結構表示不設限制，盡情地做。',
            comparisons: ['好きなだけ：想要多少就多少', 'できるだけ：盡可能（努力最大化）'],
            commonMistakes: ['○ 好きなだけ食べて / × 好きなほど食べて → 「ほど」不適用'],
        },
    },
    // ━━━ いくら～ても (no matter how much) ━━━
    {
        id: 'g_n3_386', category: 'grammar', level: 'N3', tags: ['expression', 'concession'],
        stem: '___待{ま}っても、バスが来{こ}ない。',
        stemZh: '不管等多久，公車都不來。',
        options: [
            { text: 'いくら', reason: '正確！「いくら～ても」表示「不管多少...也」。' },
            { text: 'どんなに', reason: '「どんなに」也可以，語感接近。' },
            { text: 'たとえ', reason: '「たとえ」偏假設，語感不同。' },
            { text: 'もし', reason: '「もし」表示「如果」，不表讓步。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「いくら～ても」表示不管程度或數量多少',
            analysis: '「いくら～ても」強調即使付出了很多努力或時間，結果仍然不變。',
            comparisons: ['いくら～ても：不管多少（數量讓步）', 'どんなに～ても：無論多麼（程度讓步）'],
            commonMistakes: ['○ いくら待ってもバスが来ない / ○ どんなに待ってもバスが来ない → 兩者可互換'],
        },
    },
    // ━━━ もしも～たら (what if / supposing) ━━━
    {
        id: 'g_n3_387', category: 'grammar', level: 'N3', tags: ['expression', 'hypothesis'],
        stem: '___宝{たから}くじに当{あ}たったら、何{なに}をしますか。',
        stemZh: '萬一中了彩券的話，你會做什麼？',
        options: [
            { text: 'もしも', reason: '正確！「もしも～たら」表示「萬一...的話」，強調假設性。' },
            { text: 'もし', reason: '「もし」也可以，但「もしも」更強調假設。' },
            { text: 'たとえ', reason: '「たとえ」表示讓步，語感不同。' },
            { text: 'まさか', reason: '「まさか」表示不敢相信，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「もしも」比「もし」更強調假設的不確實性',
            analysis: '「もしも」用於強調假設情境發生的可能性很低。',
            comparisons: ['もしも：萬一（假設性更強）', 'もし：如果（一般假設）'],
            commonMistakes: ['○ もしも当たったら / ○ もし当たったら → 前者更戲劇性'],
        },
    },
    // ━━━ も～ば～も (both ~ and ~) ━━━
    {
        id: 'g_n3_388', category: 'grammar', level: 'N3', tags: ['expression', 'listing'],
        stem: 'あの店{みせ}は味{あじ}___良{よ}ければ、値段{ねだん}___安{やす}い。',
        stemZh: '那家店味道也好，價格也便宜。',
        options: [
            { text: 'も/も', reason: '正確！「も～ば～も」表示「既...又...」。' },
            { text: 'が/が', reason: '「が」不用於此結構。' },
            { text: 'は/は', reason: '「は」不用於此結構。' },
            { text: 'で/で', reason: '「で」不用於此結構。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「も～ば～も」表示兼具兩種特質',
            analysis: '「も～ば～も」用於強調同時具備多種好的（或壞的）特質。',
            comparisons: ['も～ば～も：既...又...（並列）', 'だけでなく：不僅...而且（追加）'],
            commonMistakes: ['○ 味も良ければ値段も安い / × 味が良ければ値段が安い → 後者是條件句'],
        },
    },
    // ━━━ 例えば (for example) ━━━
    {
        id: 'g_n3_389', category: 'grammar', level: 'N3', tags: ['conjunction', 'example'],
        stem: '日本{にほん}の伝統{でんとう}文化{ぶんか}には、___茶道{さどう}や華道{かどう}がある。',
        stemZh: '日本的傳統文化有，例如茶道和花道。',
        options: [
            { text: '例{たと}えば', reason: '正確！「例えば」用於舉例。' },
            { text: 'つまり', reason: '「つまり」表示「也就是說」，語意不同。' },
            { text: 'すなわち', reason: '「すなわち」表示「即」，語意不同。' },
            { text: 'ところで', reason: '「ところで」表示「話說」，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「例えば」用於舉出具體的例子',
            analysis: '「例えば」放在要列舉的例子之前，幫助對方理解抽象概念。',
            comparisons: ['例えば：例如（舉例）', 'つまり：也就是說（歸納）'],
            commonMistakes: ['○ 例えば茶道や華道 / × つまり茶道や華道 → 「つまり」不是舉例'],
        },
    },
    // ━━━ じゃない (isn't it? / right?) ━━━
    {
        id: 'g_n3_390', category: 'grammar', level: 'N3', tags: ['expression', 'confirmation'],
        stem: 'これ、昨日{きのう}言{い}ったこと___。',
        stemZh: '這不就是昨天說的事嗎。',
        options: [
            { text: 'じゃない', reason: '正確！「じゃない」用於確認或強調，口語表達。' },
            { text: 'ではない', reason: '「ではない」是否定，不用於確認。' },
            { text: 'だろう', reason: '「だろう」表示推測，語感不同。' },
            { text: 'かな', reason: '「かな」表示自問，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「じゃない」用於口語確認或強調',
            analysis: '「じゃない」升調時表示確認，降調時表示否定。此處升調表確認。',
            comparisons: ['じゃない↑：不是嗎？（確認）', 'じゃない↓：不是（否定）'],
            commonMistakes: ['○ 言ったことじゃない↑ / × 言ったことではない → 後者是正式否定'],
        },
    },
    // ━━━ んだって (I heard that / they say) ━━━
    {
        id: 'g_n3_391', category: 'grammar', level: 'N3', tags: ['expression', 'hearsay'],
        stem: '来月{らいげつ}、田中{たなか}さん結婚{けっこん}する___。',
        stemZh: '聽說田中先生下個月要結婚了。',
        options: [
            { text: 'んだって', reason: '正確！「んだって」是口語的傳聞表達。' },
            { text: 'そうだ', reason: '「そうだ」也表傳聞，但較正式。' },
            { text: 'らしい', reason: '「らしい」表示推測或傳聞。' },
            { text: 'ということだ', reason: '「ということだ」表示傳聞，更正式。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「んだって」是口語化的傳聞表達',
            analysis: '「んだって」是「のだそうだ」的口語縮略形，用於非正式場合轉述聽來的消息。',
            comparisons: ['んだって：聽說（口語）', 'そうだ：據說（稍正式）'],
            commonMistakes: ['○ 結婚するんだって / ○ 結婚するそうだ → 前者更口語'],
        },
    },
    // ━━━ たって (even if - casual) ━━━
    {
        id: 'g_n3_392', category: 'grammar', level: 'N3', tags: ['expression', 'casual-concession'],
        stem: '急{いそ}いだ___、もう間{ま}に合{あ}わないよ。',
        stemZh: '就算趕也來不及了。',
        options: [
            { text: 'って', reason: '「急いだって」是「ても」的口語形。' },
            { text: 'たって', reason: '正確！「たって」是「ても」的口語縮略形。' },
            { text: 'から', reason: '「から」表示原因，語意不同。' },
            { text: 'のに', reason: '「のに」表示遺憾逆接，語感不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「たって」是「ても」的口語形式',
            analysis: '「たって」用於口語，表示「即使...也...」，語氣輕鬆。',
            comparisons: ['たって：即使（口語）', 'ても：即使（一般）'],
            commonMistakes: ['○ 急いだって間に合わない / ○ 急いでも間に合わない → 前者更口語'],
        },
    },
    // ━━━ ないと (must / have to - casual) ━━━
    {
        id: 'g_n3_393', category: 'grammar', level: 'N3', tags: ['expression', 'casual-obligation'],
        stem: '早{はや}く行{い}か___。遅刻{ちこく}するよ。',
        stemZh: '得快點走了。會遲到的。',
        options: [
            { text: 'ないと', reason: '正確！「ないと」是口語的「必須做」。' },
            { text: 'なければ', reason: '「なければ」是正式的條件形。' },
            { text: 'なくて', reason: '「なくて」表示原因，語意不同。' },
            { text: 'ないで', reason: '「ないで」表示「不做」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ないと」是「なければならない」的口語縮略',
            analysis: '「ないと」省略了後半部分，但表達「必須做」的意思。口語非常常用。',
            comparisons: ['ないと：必須（口語）', 'なければならない：必須（正式）'],
            commonMistakes: ['○ 行かないと / ○ 行かなければならない → 前者輕鬆口語'],
        },
    },
    // ━━━ 数量 + は (at least ~) ━━━
    {
        id: 'g_n3_394', category: 'grammar', level: 'N3', tags: ['particle', 'minimum'],
        stem: 'この仕事{しごと}には3日{みっか}___かかる。',
        stemZh: '這份工作至少要花三天。',
        options: [
            { text: 'は', reason: '正確！數量＋「は」表示「至少」。' },
            { text: 'も', reason: '「も」表示「竟然」，強調多。' },
            { text: 'しか', reason: '「しか」表示「只有」，需接否定。' },
            { text: 'ぐらい', reason: '「ぐらい」表示「大約」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '數量＋「は」表示「至少...」的最低數量',
            analysis: '數量詞後面加「は」表示那是最低限度，實際可能更多。',
            comparisons: ['は：至少（最低限度）', 'も：竟然（驚訝地多）'],
            commonMistakes: ['○ 3日はかかる / × 3日もかかる → 「も」是驚訝語氣'],
        },
    },
    // ━━━ よりも (more than / rather than) ━━━
    {
        id: 'g_n3_395', category: 'grammar', level: 'N3', tags: ['particle', 'comparison'],
        stem: '品質{ひんしつ}は値段{ねだん}___大切{たいせつ}だ。',
        stemZh: '品質比價格更重要。',
        options: [
            { text: 'よりも', reason: '正確！「よりも」表示比較「比...更」。' },
            { text: 'ほど', reason: '「ほど」表示程度，不用於此。' },
            { text: 'だけ', reason: '「だけ」表示限定，語意不合。' },
            { text: 'くらい', reason: '「くらい」表示程度，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「よりも」是「より」的強調形，表示比較',
            analysis: '「よりも」比「より」更強調差異，表示「比...更加」。',
            comparisons: ['よりも：比...更（強調比較）', 'より：比...（一般比較）'],
            commonMistakes: ['○ 値段よりも大切 / ○ 値段より大切 → 前者強調程度'],
        },
    },
    // ━━━ Complex: 混合文法 - challenge ━━━
    {
        id: 'g_n3_396', category: 'grammar', level: 'N3', tags: ['complex', 'challenge'],
        stem: '努力{どりょく}した___報{むく}われるとは限{かぎ}らないが、努力{どりょく}しなければ成功{せいこう}する___。',
        stemZh: '努力了不一定會有回報，但不努力的話就不可能成功。',
        options: [
            { text: 'からといって/わけがない', reason: '正確！前半用「からといって～とは限らない」，後半用「わけがない」。' },
            { text: 'からには/わけだ', reason: '「からには」表示「既然」，語意不合。' },
            { text: 'ことから/ことはない', reason: '語法不通。' },
            { text: 'ために/はずがない', reason: '「ために」語法不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '混合使用多種「わけ」句型的挑戰題',
            analysis: '「からといって～とは限らない」+ 「わけがない」構成完整的對比論述。',
            comparisons: ['からといって～とは限らない：不能因為...就認定', 'わけがない：不可能'],
            commonMistakes: ['○ 努力したからといって報われるとは限らないが、努力しなければ成功するわけがない → 完整句型'],
        },
    },
    // ━━━ Complex: 逆接表達 - challenge ━━━
    {
        id: 'g_n3_397', category: 'grammar', level: 'N3', tags: ['complex', 'challenge'],
        stem: '彼{かれ}は若{わか}い___、会社{かいしゃ}の中{なか}で最{もっと}も優秀{ゆうしゅう}な社員{しゃいん}だ。',
        stemZh: '儘管他很年輕，卻是公司裡最優秀的員工。',
        options: [
            { text: 'にもかかわらず', reason: '正確！「にもかかわらず」表示「儘管...卻...」。' },
            { text: 'にしては', reason: '「にしては」表示「以...來說」，語感不同。' },
            { text: 'ながらも', reason: '「ながらも」也可以但不如「にもかかわらず」正式。' },
            { text: 'くせに', reason: '「くせに」帶責備語氣，不適合讚美語境。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '根據語境選擇合適的逆接表達',
            analysis: '讚美語境中用「にもかかわらず」最自然，「くせに」帶責備不適合。',
            comparisons: ['にもかかわらず：儘管（正式中性）', 'くせに：明明...卻（責備）', 'にしては：以...來說（超預期）'],
            commonMistakes: ['○ 若いにもかかわらず優秀 / × 若いくせに優秀 → 「くせに」帶負面語氣'],
        },
    },
    // ━━━ Complex: 比較程度 - challenge ━━━
    {
        id: 'g_n3_398', category: 'grammar', level: 'N3', tags: ['complex', 'challenge'],
        stem: '日本語{にほんご}は勉強{べんきょう}すれば___面白{おもしろ}くなる。',
        stemZh: '日語越學越有趣。',
        options: [
            { text: 'する', reason: '「すれば」需要「ほど」來構成比例關係。' },
            { text: 'した', reason: '「すればした」文法不通。' },
            { text: 'するほど', reason: '正確！「すればするほど」表示「越...越...」。' },
            { text: 'しても', reason: '「すればしても」文法不通。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「～ば～ほど」表示「越...越...」的比例關係',
            analysis: '「すればするほど」是「ば～ほど」的完整形式，表示隨著程度增加結果也增加。',
            comparisons: ['～ば～ほど：越...越...', '～につれて：隨著...'],
            commonMistakes: ['○ 勉強すればするほど面白くなる / × 勉強すれば面白くなる → 後者缺少比例關係'],
        },
    },
    // ━━━ Complex: 決定表達 - challenge ━━━
    {
        id: 'g_n3_399', category: 'grammar', level: 'N3', tags: ['complex', 'challenge'],
        stem: 'お酒{さけ}は飲{の}まない___いるが、たまに友達{ともだち}と飲{の}むこともある。',
        stemZh: '我一直決定不喝酒，但偶爾也會和朋友喝。',
        options: [
            { text: 'ことにして', reason: '正確！「ことにしている」表示自己決定的持續習慣。' },
            { text: 'ことになって', reason: '「ことになっている」表示外部規定，語意不合。' },
            { text: 'わけにはいかないで', reason: '語法不通。' },
            { text: 'ようにして', reason: '「ようにしている」也可以，表示努力做到。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '個人自主決定的持續習慣用「ことにしている」',
            analysis: '自己決定不喝酒並一直遵守的習慣，用「ことにしている」最合適。',
            comparisons: ['ことにしている：自己決定的習慣', 'ことになっている：外部規定的規則'],
            commonMistakes: ['○ 飲まないことにしている / × 飲まないことになっている → 後者暗示是外部規定'],
        },
    },
    // ━━━ Complex: 理由・根拠の使い分け ━━━
    {
        id: 'g_n3_400', category: 'grammar', level: 'N3', tags: ['complex', 'challenge'],
        stem: '専門家{せんもんか}の調査{ちょうさ}___、この地域{ちいき}は地震{じしん}のリスクが高{たか}い。',
        stemZh: '根據專家的調查，這個地區地震風險很高。',
        options: [
            { text: 'によると', reason: '正確！「によると」表示引用資訊的來源。' },
            { text: 'に基{もと}づいて', reason: '「に基づいて」表示「基於...」，但此處是引用。' },
            { text: 'によって', reason: '「によって」表示手段或原因，語意不同。' },
            { text: 'について', reason: '「について」表示主題，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '引用資訊來源用「によると」，以...為基礎用「に基づいて」',
            analysis: '「によると」後面常接傳聞（そうだ/ということだ），表示消息來源。',
            comparisons: ['によると：根據（引用來源）', 'に基づいて：基於（以...為根據）'],
            commonMistakes: ['○ 調査によるとリスクが高い / × 調査に基づいてリスクが高い → 後者語法需要接動作'],
        },
    },
]
