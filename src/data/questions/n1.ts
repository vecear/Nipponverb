import { StaticQuestion } from './types'

export const n1Questions: StaticQuestion[] = [
    // --- Advanced Idioms ---
    {
        id: 'n1_idiom_1',
        prob: '無辜{むこ}の市民{しみん}を攻撃{こうげき}するとは、断{だん}じて許{ゆる}し______。',
        prob_zh: '竟然攻擊無辜市民，實在令人 *難以* 原諒。',
        level: 'N1',
        options: [
            { text: 'がたい', reason: '正確！表示在道理或情感上難以接受。' },
            { text: 'にくい', reason: '錯誤：表示物理難度。' },
            { text: 'かねる', reason: '錯誤：表示婉拒或能力上辦不到。' },
            { text: 'づらい', reason: '錯誤：表示肉體或心情上的痛苦 (如 食べづらい)。' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '【～がたい】接動詞ます形。表示「從心理、社會通念來看很難...」。常搭配「許す」「信じる」「想像する」。'
    },
    // --- Keigo (Highest Level) ---
    {
        id: 'n1_keigo_1',
        prob: '会場{かいじょう}には、誰{だれ}も______。',
        prob_zh: '會場裡誰都沒有 *蒞臨* (尊稱)。',
        level: 'N1',
        options: [
            { text: 'お見{み}えになりませんでした', reason: '正確！「来る」的高級尊敬語表現。' },
            { text: '拝見{はいけん}しませんでした', reason: '錯誤：這是謙讓語 (看)。' },
            { text: 'お越{こ}ししませんでした', reason: '錯誤：お越しする 是錯誤語法 (混淆了謙讓形式)。' },
            { text: '参{まい}りませんでした', reason: '錯誤：謙讓語 (來/去)。' }
        ],
        correctIndex: 0,
        tag: 'keigo',
        correctRule: '【お見えになる】是「来る」的尊敬語，比「いらっしゃる」更具鄭重感。經常用於接待場合。'
    },
    // --- Grammar: ~zaru wo enai ---
    {
        id: 'n1_grammar_2',
        prob: '社長{しゃちょう}の命令{めいれい}とあっては、______ざるを得{え}ない。',
        prob_zh: '既然是社長的命令，就不得不 *服從*。',
        level: 'N1',
        options: [
            { text: '従{したが}わ', reason: '正確！「～ざるを得ない」接動詞未然形 (ない形去nai)。' },
            { text: '従{したが}う', reason: '錯誤：接續形式錯誤。' },
            { text: '従{したが}え', reason: '錯誤：命令形。' },
            { text: '従{したが}っ', reason: '錯誤：促音便錯誤。' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '【～ざるを得ない】接動詞未然形 (不規則動詞「する」應變為「せ」)。表示「違背本意但不得不做」。'
    },
    // --- Manually Generated AI Questions (High Quality) ---
    // Azamuku (欺く)
    {
        id: 'n1_gen_azamuku_1',
        prob: '敵{てき}を______には、まず味方{みかた}から。',
        prob_zh: '要 *欺騙* 敵人，先從自家人開始。',
        level: 'N1',
        options: [
            { text: '欺{あざむ}く', reason: '正確！「敵を欺く」是慣用搭配。文法上「～には」前接辭書形。' },
            { text: '欺{あざむ}いた', reason: '錯誤：時態不對。' },
            { text: '欺{あざむ}ける', reason: '錯誤：這是可能形。' },
            { text: '欺{あざむ}いて', reason: '錯誤：這是TE形。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '【語彙】「欺く (あざむく)」意為欺騙、迷惑。常用句「敵を欺くにはまず味方から」(要騙過敵人，先從自家人開始)。'
    },
    {
        id: 'n1_gen_azamuku_2',
        prob: '彼女{かのじょ}は、花{はな}を______ごとき美{うつく}しさだ。',
        prob_zh: '她的美麗簡直 *羞煞* 花朵。',
        level: 'N1',
        options: [
            { text: '欺{あざむ}く', reason: '正確！「花を欺く」是形容美貌的慣用句 (閉月羞花)。' },
            { text: '散{ち}らす', reason: '錯誤：讓花凋謝。' },
            { text: '愛{め}でる', reason: '錯誤：愛惜花朵。' },
            { text: '咲{さ}かせる', reason: '錯誤：讓花開。' }
        ],
        correctIndex: 0,
        tag: 'idiom',
        correctRule: '【慣用句】「花を欺く」並非真的欺騙花，而是指美貌讓花都感到羞愧 (比花還美)。N1常考的譬喻表現。'
    },
    // Unagasu (促す)
    {
        id: 'n1_gen_unagasu_1',
        prob: '司会者{しかいしゃ}が発言{はつげん}を______。',
        prob_zh: '司會者 *促請* 發言。',
        level: 'N1',
        options: [
            { text: '促{うなが}した', reason: '正確！促使對方做某動作。' },
            { text: '脅{おど}かした', reason: '錯誤：威脅。' },
            { text: '施{ほどこ}した', reason: '錯誤：施行。' },
            { text: '催{もよお}した', reason: '錯誤：舉辦。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '【語彙】「促す (うながす)」意為推動、催促、引起注意。例如「注意を促す (引起注意)」。'
    },
    {
        id: 'n1_gen_unagasu_2',
        prob: '植物{しょくぶつ}の成長{せいちょう}を______ために、肥料{ひりょう}をやる。',
        prob_zh: '為了 *促進* 植物生長而施肥。',
        level: 'N1',
        options: [
            { text: '促{うなが}す', reason: '正確！表示推動某種進程。' },
            { text: '迫{せま}る', reason: '錯誤：逼近。' },
            { text: '謀{はか}る', reason: '錯誤：謀求、企圖。' },
            { text: '免{まぬが}れる', reason: '錯誤：避免。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '【語彙】「成長を促す」(促進成長) 是固定搭配，表示促進發展。'
    },
    // Hodokosu (施す)
    {
        id: 'n1_gen_hodokosu_1',
        prob: '怪我人{けがにん}に応急{おうきゅう}手当{てあ}てを______。',
        prob_zh: '給傷者 *實施* 應急處置。',
        level: 'N1',
        options: [
            { text: '施{ほどこ}した', reason: '正確！進行某種處置或恩惠。' },
            { text: '設{もう}けた', reason: '錯誤：設置。' },
            { text: '挙{あ}げた', reason: '錯誤：舉起。' },
            { text: '企{くわだ}てた', reason: '錯誤：企劃。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '【語彙】「施す (ほどこす)」常用於「手術を施す」(動手術)、「手当を施す」(進行處置)、「恩恵を施す」(施恩)。'
    },
    {
        id: 'n1_gen_hodokosu_2',
        prob: 'もう手{て}の______ようがない。',
        prob_zh: '已經 *無計可施* 了 (沒救了)。',
        level: 'N1',
        options: [
            { text: '施{ほどこ}し', reason: '正確！「手の施しようがない」是慣用句。' },
            { text: '尽{つ}くし', reason: '錯誤：手を尽くす是盡力，但這裡接「ようがない」。' },
            { text: '下{くだ}し', reason: '錯誤：手下 (te no kudashi) 語意不通。' },
            { text: '加{くわ}え', reason: '錯誤：手を加える (加工)。' }
        ],
        correctIndex: 0,
        tag: 'idiom',
        correctRule: '【慣用句】「手の施しようがない」(無計可施) 表示病情或狀況惡化到無法處置的地步。這裡使用動詞的masu形轉名詞用法。'
    },
    // Moyoosu (催す)
    {
        id: 'n1_gen_moyoosu_1',
        prob: '食後{しょくご}に眠気{ねむけ}を______。',
        prob_zh: '飯後 *感到* 睡意。',
        level: 'N1',
        options: [
            { text: '催{もよお}した', reason: '正確！指生理現象發生。' },
            { text: '促{うなが}した', reason: '錯誤：催促。' },
            { text: '誘{いざな}った', reason: '錯誤：邀請、誘惑。' },
            { text: '伴{ともな}った', reason: '錯誤：伴隨。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '【語彙】「催す (もよおす)」有兩個意思：1. 舉辦 (會を催す) 2. 感到生理現象 (便意、眠気を催す)。'
    },
    {
        id: 'n1_gen_moyoosu_2',
        prob: '歓迎会{かんげいかい}を______。',
        prob_zh: ' *舉辦* 歡迎會。',
        level: 'N1',
        options: [
            { text: '催{もよお}す', reason: '正確！舉辦 (較鄭重的說法)。' },
            { text: '閉{と}じる', reason: '錯誤：閉會。' },
            { text: '営{いとな}む', reason: '錯誤：經營。' },
            { text: '著{あらわ}す', reason: '錯誤：著書。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '【語彙】「会を催す」(舉辦聚會) 是舉辦聚會的正式說法。「開く」也可以，但在 N1 考試中通常考「催す」的讀音或用法。'
    },
    // Horobiru (滅びる)
    {
        id: 'n1_gen_horobiru_1',
        prob: 'ローマ帝国{ていこく}はなぜ______のか。',
        prob_zh: '羅馬帝國為什麼 *滅亡* 了呢？',
        level: 'N1',
        options: [
            { text: '滅{ほろ}びた', reason: '正確！國家、文明等消亡。' },
            { text: '栄{さか}えた', reason: '錯誤：繁榮 (相反詞)。' },
            { text: '枯{か}れた', reason: '錯誤：植物枯萎。' },
            { text: '廃{すた}れた', reason: '錯誤：流行、習俗等廢弛/過時，不用於國家滅亡。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '【語彙】「滅びる (ほろびる)」指滅亡、絕種。區分：「廃れる (sutareru)」(廢弛/過時) 是指流行過時。'
    },
    {
        id: 'n1_gen_horobiru_2',
        prob: '肉体{にくたい}は______とも、精神{せいしん}は死{し}なない。',
        prob_zh: '即使肉體 *消亡* ，精神也不死。',
        level: 'N1',
        options: [
            { text: '滅{ほろ}びる', reason: '正確！' },
            { text: '絶{た}える', reason: '錯誤：斷絕。' },
            { text: '衰{おとろ}える', reason: '錯誤：衰弱。' },
            { text: '消{き}える', reason: '錯誤：消失(語氣不夠莊重)。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '即使肉體消亡，精神也不死。 \n【語彙】「滅びる」(horobiru) 用於描述生命、文明或物質的徹底消滅。常用的搭配有「肉体は滅びるとも」(即使肉體消亡)。'
    },
    // --- SOP Expanded N1 Batch ---
    // 1. 顧みる (Kaerimiru)
    {
        id: 'n1_gen_kaerimiru_1',
        prob: '自分{じぶん}のこれまでの人生{じんせい}を ______。',
        prob_zh: ' *回顧* 自己至今的人事。',
        level: 'N1',
        options: [
            { text: '顧{かえり}みる', reason: '正確！回首往事、省察。' },
            { text: '省{かえり}みる', reason: '正確！(備註: 通常指反省，回顧過去多用顧)' },
            { text: '振{ふ}り返{かえ}る', reason: '正確！(備註: N1 考試中顧みる更具文學氣息)' },
            { text: '見直{みなお}す', reason: '錯誤：重新審視。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '回顧自己至今的人事。 \n【慣用語】「顧みる」(kaerimiru) 常用於文學或自傳中，表示對過去行為的深思或回望。'
    },
    {
        id: 'n1_gen_kaerimiru_2',
        prob: '危険{きけん}を ______ 、火{ひ}の中{なか}へ飛{と}び込{こ}んだ。',
        prob_zh: ' *不顧* 危險地跳入了火中。',
        level: 'N1',
        options: [
            { text: '顧{かえり}みず', reason: '正確！不顧、不考慮。' },
            { text: '顧{かえり}みて', reason: '錯誤：考慮了危險才跳？邏輯相反。' },
            { text: '顧{かえり}みない', reason: '錯誤：語法接續不自然。' },
            { text: '顧{かえり}みられ', reason: '錯誤：受身。' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '不顧危險地跳入了火中。 \n【助詞搭配】「～を顧みず」是一個固定搭配，表示無視危險、名聲等而採取行動。'
    },
    // 2. 廃れる (Sutaru)
    {
        id: 'n1_gen_sutaru_1',
        prob: '流行{りゅうこう}はすぐに ______。',
        prob_zh: '流行很快就會 *過時(衰落)*。',
        level: 'N1',
        options: [
            { text: '廢{すた}れる', reason: '正確！指制度、習俗或流行不再盛行。' },
            { text: '終{お}わる', reason: '錯誤：結束。' },
            { text: '消{き}える', reason: '錯誤：消失。' },
            { text: '廃{はい}止{し}する', reason: '錯誤：廢止(他動詞)。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '流行很快就會過時(衰落)。 \n【活用】「廢れる」(sutaru) 是一段動詞。常見於討論文化變遷或時尚過時。'
    },
    {
        id: 'n1_gen_sutaru_2',
        prob: '古{ふる}いしきたりが ______ ゆく。',
        prob_zh: '古老的習俗正在逐漸 *沒落*。',
        level: 'N1',
        options: [
            { text: '廢{すた}れて', reason: '正確！TE形 + ゆく 表示持續的趨勢。' },
            { text: '廢{すた}れ', reason: '正確！(中頓用法，但ゆく通常接te)' },
            { text: '廢{はい}し', reason: '錯誤：變化錯誤。' },
            { text: '廢{はい}れ', reason: '錯誤：變化錯誤。' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '古老的習俗正在逐漸沒落。 \n【語態】「～てゆく」(在此讀作 yuku) 表示事物向著遠離現在或消失的方向發展。'
    },
    // 3. 諮る (Hakaru)
    {
        id: 'n1_gen_hakaru_1',
        prob: 'この案{あん}を審議{しんぎ}に ______。',
        prob_zh: '將此案 *提交* 審議。',
        level: 'N1',
        options: [
            { text: '諮{はか}る', reason: '正確！徵詢意見、提交商討。' },
            { text: '計{はか}る', reason: '錯誤：計畫、測量。' },
            { text: '圖{はか}る', reason: '錯誤：謀略。' },
            { text: '量{はか}る', reason: '錯誤：秤重。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '將此案提交審議。 \n【同音異義詞】「はかる」在日文中有多種漢字。N1 考點之一就是區分「諮る」(諮詢/提交商討)、「計る/測る/量る」(測量) 與 「図る」(圖謀) 的差異。'
    },
    {
        id: 'n1_gen_hakaru_2',
        prob: '委員會{いいんかい}に ______ 決定{けってい}する。',
        prob_zh: ' *諮詢* 委員會後再決定。',
        level: 'N1',
        options: [
            { text: '諮{はか}って', reason: '正確！五段動詞促音便。' },
            { text: '諮{はか}り', reason: '錯誤：變化不接續。' },
            { text: '諮{はか}らないで', reason: '錯誤：不諮詢。' },
            { text: '諮{はか}れば', reason: '錯誤：假設形。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '諮詢委員會後再決定。 \n【用法】「諮る」通常搭配助詞「に」，表示向某個機構或團體尋求意見。'
    },
    // 4. 尊ぶ (Tattobu)
    {
        id: 'n1_gen_tattobu_1',
        prob: '伝統{でんとう}を ______。',
        prob_zh: ' *尊重* 傳統。',
        level: 'N1',
        options: [
            { text: '尊{たっと}ぶ', reason: '正確！尊敬、珍視。' },
            { text: '尊{とうと}ぶ', reason: '正確！(備註: 兩種讀音皆可，習慣上たっとぶ較常用於N1)' },
            { text: '尊敬{そんけい}する', reason: '正確！(備註: 但尊ぶ更具文學感)' },
            { text: '馬鹿{ばか}にする', reason: '錯誤：瞧不起。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '尊重傳統。 \n【讀音】「尊ぶ」有「tattobu」和「toutobu」兩種讀音，原意為珍視某些高尚的特質或傳統。'
    },
    {
        id: 'n1_gen_tattobu_2',
        prob: '個性{こせい}が ______ 世{よ}の中{なか}になった。',
        prob_zh: '這是一個個性被 *看重* 的時代。',
        level: 'N1',
        options: [
            { text: '尊{たっと}ばれる', reason: '正確！五段動詞受身形。' },
            { text: '尊{たっと}んだ', reason: '錯誤：主體不對。' },
            { text: '尊{たっと}ばせる', reason: '錯誤：使役形。' },
            { text: '尊{とうと}ばれ', reason: '正確！(但此題考變化)' }
        ],
        correctIndex: 0,
        tag: 'passive',
        correctRule: '這是一個個性被看重的時代。 \n【語態】「尊ばれる」表示某種價值觀被社會廣泛接受和珍視。'
    },
    // 5. 慈しむ (Itsukushimu)
    {
        id: 'n1_gen_itsukushimu_1',
        prob: '幼{おさな}い命{いのち}を ______。',
        prob_zh: ' *慈愛* 地照料年幼的生命。',
        level: 'N1',
        options: [
            { text: '慈{いつく}しむ', reason: '正確！慈愛、珍視。' },
            { text: '愛{あい}する', reason: '正確！(一般愛)' },
            { text: '可愛{かわい}がる', reason: '正確！(疼愛，但慈しむ帶有憐愛感)' },
            { text: '苦{くる}しめる', reason: '錯誤：折磨。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '慈愛地照料年幼的生命。 \n【語感】「慈しむ」(itsukushimu) 強調對弱小者的深切憐愛與照顧。'
    },
    {
        id: 'n1_gen_itsukushimu_2',
        prob: '母{はは}は子{こ}を ______ 育{そだ}てた。',
        prob_zh: '母親 *慈愛地* 把孩子養大。',
        level: 'N1',
        options: [
            { text: '慈{いつく}しんで', reason: '正確！五段動詞撥音便。' },
            { text: '慈{いつく}しみ', reason: '錯誤：接續錯誤。' },
            { text: '慈{いつく}しまれて', reason: '錯誤：受身。' },
            { text: '慈{いつく}しまない', reason: '錯誤：不慈愛。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '母親慈愛地把孩子養大。 \n【音便】五段動詞字尾 mu 發生撥音便變成「んで」。'
    },
    // 6. 貶める (Otoshimeru)
    {
        id: 'n1_gen_otoshimeru_1',
        prob: '他人{たにん}を ______ 言動{げんどう}。',
        prob_zh: ' *貶低* 他人的言行。',
        level: 'N1',
        options: [
            { text: '貶{おとし}める', reason: '正確！卑視、使之低賤。' },
            { text: '落{おと}す', reason: '錯誤：使落下。' },
            { text: '高{たか}める', reason: '錯誤：使提高。' },
            { text: '褒{ほ}める', reason: '錯誤：褒獎。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '貶低他人的言行。 \n【語義】「貶める」(otoshimeru) 常用於政治或道德語境，表示將某人的地位或人格降格。'
    },
    {
        id: 'n1_gen_otoshimeru_2',
        prob: '自分{じぶん}を ______ ようなまねはするな。',
        prob_zh: '不要做那種 *貶低* 自己人格的事。',
        level: 'N1',
        options: [
            { text: '貶{おとし}める', reason: '正確！一段動詞辭書形修飾名詞。' },
            { text: '貶{おとし}め', reason: '錯誤：變化不對。' },
            { text: '貶{おとし}められる', reason: '錯誤：可能/受身。' },
            { text: '貶{おとし}める', reason: '正確！(重複確認)' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '不要做那種貶低自己人格的事。 \n【用法】常見搭配有「自分を貶める」(自貶) 或 「品位を貶める」(貶低品位)。'
    },
    // 7. 蘇る (Yomigaeru)
    {
        id: 'n1_gen_yomigaeru_1',
        prob: '死{し}んだ英雄{えいゆう}が ______。',
        prob_zh: '死去的英雄 *復活* 了。',
        level: 'N1',
        options: [
            { text: '蘇{よみがえ}った', reason: '正確！五段動詞促音便過去式。' },
            { text: '蘇{よみがえ}れた', reason: '錯誤：可能過去式。' },
            { text: '蘇{よみがえ}ら', reason: '錯誤：變化不對。' },
            { text: '死{し}んだら', reason: '錯誤：如果死了。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '死去的英雄復活了。 \n【變遷】「蘇る」(yomigaeru) 常用於表示失去的事物(記憶、力量、身體)重新恢復生機。'
    },
    {
        id: 'n1_gen_yomigaeru_2',
        prob: '昔{むかし}の記憶{きおく}が鮮{あざ}やかに ______。',
        prob_zh: '昔日的記憶鮮明地 *浮現* 了。',
        level: 'N1',
        options: [
            { text: '蘇{よみがえ}ってきた', reason: '正確！TE形 + くる 表示由遠及近或從過去到現在。' },
            { text: '蘇{よみがえ}り', reason: '錯誤：接續不對。' },
            { text: '蘇{よみがえ}ら', reason: '錯誤：接續不對。' },
            { text: '蘇{よみがえ}ろう', reason: '錯誤：意向形。' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '昔日的記憶鮮明地浮現了。 \n【比喻】「記憶が蘇る」是 N1 常見的常用句型，表示記憶重現。'
    },
    // 8. 潤う (Uruou)
    {
        id: 'n1_gen_uruou_1',
        prob: '雨{あめ}で大地{だいち}が ______。',
        prob_zh: '大地因雨而 *滋潤*。',
        level: 'N1',
        options: [
            { text: '潤{うるお}った', reason: '正確！五段動詞促音便過去式。' },
            { text: '潤{うるお}した', reason: '錯誤：這表示「滋潤了某物」(他動詞)。' },
            { text: '潤{うるお}れた', reason: '錯誤：變化不對。' },
            { text: '潤{うるお}い', reason: '錯誤：名詞。' }
        ],
        correctIndex: 0,
        tag: 'transitive',
        correctRule: '大地因雨而滋潤。 \n【自他動詞】「潤う」(uruou，自，溼潤/充裕) vs 「潤す」(uruosu，他，使之溼潤)。大地自己變溼，用自動詞。'
    },
    {
        id: 'n1_gen_uruou_2',
        prob: '臨時{りんじ}收入{しゅうにゅう}でお財布{さいふ}が ______。',
        prob_zh: '因為臨時收入，錢包變得 *充裕* 了。',
        level: 'N1',
        options: [
            { text: '潤{うるお}って', reason: '正確！TE形，在此表示狀態的改變。' },
            { text: '潤{うるお}し', reason: '錯誤：他動詞。' },
            { text: '潤{うるお}わ', reason: '錯誤：變化不接續。' },
            { text: '潤{うるお}う', reason: '正確！(辭書形)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '因為臨時收入，錢包變得充裕了。 \n【引申義】「潤う」除了表示水分充足，也可引申為經濟上的寬裕或受益。'
    },
    // 9. 煽る (Aoru)
    {
        id: 'n1_gen_aoru_1',
        prob: '不服{ふふく}を ______ ような言動{げんどう}。',
        prob_zh: '企圖 *煽動* 不滿的言行。',
        level: 'N1',
        options: [
            { text: '煽{あお}る', reason: '正確！扇風、煽動。' },
            { text: '扇{あお}ぐ', reason: '錯誤：扇風(物理上的)。' },
            { text: '押{お}す', reason: '錯誤：推。' },
            { text: '怒{おこ}る', reason: '錯誤：生氣。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '企圖煽動不滿的言行。 \n【語義】「煽る」(aoru) 原意為火被風扇大，引申為刺激情緒、煽動輿論。'
    },
    {
        id: 'n1_gen_aoru_2',
        prob: '風{かぜ}に ______ 火{ひ}が強{つよ}くなる。',
        prob_zh: ' *受到* 風的 *吹動(煽動)*，火勢變強了。',
        level: 'N1',
        options: [
            { text: '煽{あお}られて', reason: '正確！五段動詞受身形。' },
            { text: '煽{あお}って', reason: '錯誤：火去煽動風？不合邏輯。' },
            { text: '煽{あお}り', reason: '錯誤：變化不對。' },
            { text: '煽{あお}らせ', reason: '錯誤：使役形。' }
        ],
        correctIndex: 0,
        tag: 'passive',
        correctRule: '受到風的吹動(煽動)，火勢變強了。 \n【受身】在此表示受到自然力(風)的影響。'
    },
    // 10. 紛れる (Magireru)
    {
        id: 'n1_gen_magireru_1',
        prob: '忙{いそが}しさに ______ 忘{わす}れていた。',
        prob_zh: ' *忙碌之餘(混亂之中)* 竟然忘記了。',
        level: 'N1',
        options: [
            { text: '紛{まぎ}れて', reason: '正確！混雜在某種狀態中而被忽視。' },
            { text: '紛{まぎ}らわ', reason: '錯誤：這通常是形容詞用法(容易搞混)。' },
            { text: '紛{まぎ}れ', reason: '錯誤：變化不全。' },
            { text: '紛{まぎ}らさ', reason: '錯誤：他動詞(使之分心)。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '忙碌之餘(混亂之中)竟然忘記了。 \n【用法】「～に紛れて」常用於表示因為周遭環境的混亂或自己的忙碌，導致注意不到某事。'
    },
    {
        id: 'n1_gen_magireru_2',
        prob: '本物{ほんもの}と ______ ような偽物{にせもの}。',
        prob_zh: '足以與真貨 *混淆* 的假貨。',
        level: 'N1',
        options: [
            { text: '紛{まぎ}れる', reason: '正確！混淆、難以分辨。' },
            { text: '紛{まぎ}らわ', reason: '錯誤：這是使之分心。' },
            { text: '紛{まぎ}らし', reason: '錯誤：相同字根。' },
            { text: '紛{まぎ}らかな', reason: '錯誤：非動詞。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '足以與真貨混淆的假貨。 \n【語義】「紛れる」表示兩者極其相似，以至於在群體中無法分辨出來。'
    }
]
