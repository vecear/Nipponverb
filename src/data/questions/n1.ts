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
        id: 'n1_v1399_magireru_2',
        prob: '本物{ほんもの}に ______ 偽物{にせもの}。',
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
    },
    // --- SOP Expanded N1 Batch 3 ---
    // 11. 遮る (Saegiru)
    {
        id: 'n1_v1399_saegiru_1',
        prob: 'カーテンで窓{まど}の外{そと}の光{ひかり}を ______。',
        prob_zh: '用窗簾 *遮斷* 窗外陽光。',
        level: 'N1',
        options: [
            { text: '遮{さえぎ}る', reason: '正確！五段動詞。表示阻擋光線、視線或聲音。' },
            { text: '遮{さえぎ}り', reason: '正確！(連用)' },
            { text: '遮{さえぎ}って', reason: '正確！(音便)' },
            { text: '遮{さえぎ}ら', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '用窗簾遮斷窗外陽光。 \n【語義】「遮る」(saegiru) 常用於物理上的阻隔或打斷他人說話。'
    },
    {
        id: 'n1_v1399_saegiru_2',
        prob: '人{ひと}の言葉{ことば}を ______。',
        prob_zh: ' *打斷* 他人的話。',
        level: 'N1',
        options: [
            { text: '遮{さえぎ}る', reason: '正確！常用搭配。' },
            { text: '遮{さえぎ}れば', reason: '正確！(假定)' },
            { text: '止{と}める', reason: '正確！(停止)' },
            { text: '邪魔{じゃま}する', reason: '正確！(妨礙)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '打斷他人的話。 \n【用法】在對話中突然介入或阻礙流程。'
    },
    // 12. 綻びる (Hokorobiru)
    {
        id: 'n1_v1399_hokorobiru_1',
        prob: '梅{うめ}のつぼみが ______。',
        prob_zh: '梅花的蕾 *綻放(綻裂)* 了。',
        level: 'N1',
        options: [
            { text: '綻{ほころ}びた', reason: '正確！一段動詞。常用於花蕾微開或縫線裂開。' },
            { text: '綻{ほころ}んだ', reason: '正確！(五段動詞綻ぶ的音便，語意相同)' },
            { text: '咲{さ}いた', reason: '正確！(開花)' },
            { text: '開{ひら}いた', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '梅花的蕾綻放了。 \n【語義】「綻びる」(hokorobiru) 指原本閉合的東西開始裂開出一點縫隙。'
    },
    {
        id: 'n1_v1399_hokorobiru_2',
        prob: '緊張{きんちょう}が解{と}けて、表情{ひょうじょう}が ______。',
        prob_zh: '緊張感消除，表情 *放鬆(露出笑意)*。',
        level: 'N1',
        options: [
            { text: '綻{ほころ}びた', reason: '正確！比喻表情變得柔和。' },
            { text: '緩{ゆる}んだ', reason: '正確！(鬆弛)' },
            { text: '和{なご}んだ', reason: '正確！(和緩)' },
            { text: '綻{ほころ}んだ', reason: '正確！(五段)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '緊張感消除，表情放鬆。 \n【用法】「顔が綻びる」是慣用句，指原本嚴肅的臉因喜悅或安心而放鬆。'
    },
    // 13. 聳える (Sobbieru)
    {
        id: 'n1_v1399_sobbieru_1',
        prob: '高岸{たかがい}に ______ 摩天楼{まてんろう}。',
        prob_zh: '在海岸上 *聳立* 的摩天大樓。',
        level: 'N1',
        options: [
            { text: '聳{そび}える', reason: '正確！一段動詞。形容高大建築物或山峰。' },
            { text: '聳{そび}え', reason: '正確！(連用)' },
            { text: '立{た}つ', reason: '正確！(普通豎立)' },
            { text: '建{た}つ', reason: '正確！(建築)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '在海岸上聳立的摩天大樓。 \n【語感】「聳える」帶有高度驚人、令人仰視的氣勢。'
    },
    {
        id: 'n1_v1399_sobbieru_2',
        prob: '雲{くも}の上{うえ}まで ______ 山{やま}。',
        prob_zh: ' *直插* 雲霄的山。',
        level: 'N1',
        options: [
            { text: '聳{そび}え立{た}つ', reason: '正確！複合動詞，強調巍然屹立。' },
            { text: '聳{そび}える', reason: '正確！' },
            { text: '突{つ}き刺{さ}す', reason: '正確！(刺穿)' },
            { text: '聳{そび}え', reason: '錯誤：接續。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '直插雲霄的山。 \n【語法】一段動詞修飾。'
    },
    // 14. 嘲笑う (Azawarau)
    {
        id: 'n1_v1399_azawarau_1',
        prob: '正義{せいぎ}を ______。',
        prob_zh: ' *嘲笑* 正義。',
        level: 'N1',
        options: [
            { text: '嘲笑{あざわら}う', reason: '正確！五段動詞。表示蔑視或嘲諷。' },
            { text: '嘲笑{あざわら}い', reason: '正確！(連用/名詞)' },
            { text: '笑{わら}う', reason: '正確！(但 azawarau 帶有惡意)' },
            { text: '莫迦{ばか}にする', reason: '正確！(瞧不起)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '嘲笑正義。 \n【語義】「嘲笑う」結合了嘲笑與輕視。'
    },
    {
        id: 'n1_v1399_azawarau_2',
        prob: '周囲{しゅうい}から ______ られても平気{へいき}だ。',
        prob_zh: '即使被周圍的人 *嘲笑* 也不在乎。',
        level: 'N1',
        options: [
            { text: '嘲笑{あざわら}わ', reason: '正確！五段受身未然形。' },
            { text: '嘲笑{あざわら}え', reason: '錯誤：可能。' },
            { text: '嘲笑{あざわら}い', reason: '錯誤：變化。' },
            { text: '笑{わら}わ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'passive',
        correctRule: '即使被周圍的人嘲笑也不在乎。 \n【活用】五段動詞「嘲笑う」(azawarau) 變為「嘲笑われる」。'
    },
    // 15. 凌ぐ (Shinogu)
    {
        id: 'n1_v1399_shinogu_1',
        prob: '飢{う}えを ______。',
        prob_zh: ' *忍受(度過)* 飢餓。',
        level: 'N1',
        options: [
            { text: '凌{しの}ぐ', reason: '正確！五段動詞。表示在艱難狀況下撐過去。' },
            { text: '耐{た}える', reason: '正確！(忍耐)' },
            { text: '凌{しの}ぎ', reason: '正確！(連用)' },
            { text: '凌{しの}いで', reason: '正確！(音便)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '忍受(度過)飢餓。 \n【語義】「凌ぐ」常用於度過飢荒、寒冷、暑熱等生理挑戰。'
    },
    {
        id: 'n1_v1399_shinogu_2',
        prob: '前作{ぜんさく}を遥{はる}かに ______ 出来栄{できば}え。',
        prob_zh: '遠遠 *超越* 前作的成品。',
        level: 'N1',
        options: [
            { text: '凌{しの}ぐ', reason: '正確！也可用於能力、數量上的超越。' },
            { text: '超{こ}える', reason: '正確！' },
            { text: '凌{しの}ぎ', reason: '正確！' },
            { text: '抜{ぬ}く', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '遠遠超越前作的成品。 \n【用法】比喻能力或性能的高越。'
    },
    // 16. 汚す (Kegasu)
    {
        id: 'n1_v1399_kegasu_1',
        prob: '先祖{せんぞ}の名{な}を ______。',
        prob_zh: ' *玷汙* 祖先的名聲。',
        level: 'N1',
        options: [
            { text: '汚{けが}す', reason: '正確！五段動詞。指玷汙名譽、清白等神聖事物。' },
            { text: '汚{よご}す', reason: '正確！(但 yogosu 多用於物理上的髒)' },
            { text: '汚{けが}さない', reason: '正確！(不玷汙)' },
            { text: '恥{はじ}をかく', reason: '錯誤：蒙受恥辱(主動行為)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '玷汙祖先的名聲。 \n【漢字辨析】「汚す」讀作 kegasu 時帶有強烈的精神、社會層面汙染感。'
    },
    {
        id: 'n1_v1399_kegasu_2',
        prob: '清{きよ}らかな大地{だいち}を ______。',
        prob_zh: ' *汙染* 純淨的大地。',
        level: 'N1',
        options: [
            { text: '汚{けが}す', reason: '正確！五段動詞。' },
            { text: '汚{けが}し', reason: '正確！(連用)' },
            { text: '汚染{おせん}する', reason: '正確！' },
            { text: '汚{よご}す', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '汙染純淨的大地。 \n【活用】五段動詞變位。'
    },
    // 17. 汚れる (Kegareru)
    {
        id: 'n1_v1399_kegareru_1',
        prob: '心{こころ}を ______。',
        prob_zh: '心靈 *汙穢* 了。',
        level: 'N1',
        options: [
            { text: '汚{けが}れた', reason: '正確！一段自動詞過去式。指喪失清白。' },
            { text: '汚{よご}れた', reason: '正確！(物理髒)' },
            { text: '汚{けが}れ', reason: '正確！(名詞/連用)' },
            { text: '醜{みにく}い', reason: '錯誤：醜陋。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '心靈汙穢了。 \n【自他動詞】「汚す」(他) vs 「汚れる」(自)。'
    },
    {
        id: 'n1_v1399_kegareru_2',
        prob: ' ______ ることのない愛{あい}。',
        prob_zh: '永不 *汙染(變質)* 的愛。',
        level: 'N1',
        options: [
            { text: '汚{けが}れ', reason: '正確！一段連用形接否定。' },
            { text: '汚{けが}れな', reason: '錯誤：未然。' },
            { text: '汚{よご}れ', reason: '正確！' },
            { text: '汚{けが}れる', reason: '錯誤：接續。' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '永不汙染的愛。 \n【活用】一段動詞。'
    },
    // 18. 汚らわす (Kegarawasu)
    {
        id: 'n1_v1399_kegarawasu_1',
        prob: '耳{みみ}を ______。',
        prob_zh: ' *汙染* 耳朵(聽到卑鄙或下流的話)。',
        level: 'N1',
        options: [
            { text: '汚{けが}らわす', reason: '正確！五段動詞。比 kegasu 語感更強烈，帶有厭惡感。' },
            { text: '汚{けが}す', reason: '正確！' },
            { text: '聞{き}きたくない', reason: '正確！' },
            { text: '汚{けが}らわし', reason: '正確！(連用)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '汙染耳朵。 \n【語義】「汚らわす」常與耳、目連用，指看到或聽到汙穢不潔的東西。'
    },
    {
        id: 'n1_v1399_kegarawasu_2',
        prob: '卑劣{ひれつ}な手段{しゅだん}でこの場{ば}を ______ べきではない。',
        prob_zh: '不應以卑劣手段 *玷汙* 這塊寶地(這個場合)。',
        level: 'N1',
        options: [
            { text: '汚{けが}らわす', reason: '正確！五段動詞。' },
            { text: '汚{けが}す', reason: '正確！' },
            { text: '汚{けが}らわし', reason: '正確！' },
            { text: '汚{けが}らわされる', reason: '錯誤：受身。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '不應以卑劣手段玷汙這塊寶地。 \n【活用】五段動詞變位。'
    },
    // 19. 賄う (Makanau)
    {
        id: 'n1_v1399_makanau_1',
        prob: '生活費{せいかつひ}をバイト代{だい}で ______。',
        prob_zh: '用打工費 *支付(湊足)* 生活費。',
        level: 'N1',
        options: [
            { text: '賄{まかな}う', reason: '正確！五段動詞。指提供物資、伙食或支付開銷。' },
            { text: '支払{しはら}う', reason: '正確！(支付)' },
            { text: '工面{くめん}する', reason: '正確！(籌錢)' },
            { text: '賄{まかな}い', reason: '正確！(名詞，伙食)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '用打工費支付生活費。 \n【語義】「賄う」特別強調「用有限的資源去cover某項支出」。'
    },
    {
        id: 'n1_v1399_makanau_2',
        prob: '合宿{がっしゅく}の食事{しょくじ}を ______。',
        prob_zh: ' *提供(張羅)* 集訓的伙食。',
        level: 'N1',
        options: [
            { text: '賄{まかな}う', reason: '正確！原意是張羅飯食。' },
            { text: '用意{ようい}する', reason: '正確！' },
            { text: '賄{まかな}って', reason: '正確！(音便)' },
            { text: '食{た}べる', reason: '錯誤：吃。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '提供集訓的伙食。 \n【用法】「(人)の(食)を賄う」是常見用法，名詞化後「賄い」專指供餐。'
    },
    // 20. 綻ぶ (Hokorobu)
    {
        id: 'n1_v1399_hokorobu_1',
        prob: '上着{うわぎ}の袖{そで}が ______。',
        prob_zh: '上衣的袖子 *開線* 了。',
        level: 'N1',
        options: [
            { text: '綻{ほころ}んだ', reason: '正確！五段自動詞音便。' },
            { text: '綻{ほころ}びた', reason: '正確！(一段動詞，語意相同)' },
            { text: '裂{さ}けた', reason: '正確！(撕裂)' },
            { text: '切{き}れた', reason: '正確！(斷裂)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '上衣的袖子開線了。 \n【漢字】「綻ぶ」(hokorobu) 與「綻びる」(hokorobiru) 二者並存，語義幾乎無差別。'
    },
    {
        id: 'n1_v1399_hokorobu_2',
        prob: '表情{ひょうじょう}が ______ 時{とき}。',
        prob_zh: '表情 *變柔和(放鬆)* 的時候。',
        level: 'N1',
        options: [
            { text: '綻{ほころ}ぶ', reason: '正確！五段動詞。' },
            { text: '綻{ほころ}びる', reason: '正確！(一段)' },
            { text: '綻{ほころ}んで', reason: '正確！' },
            { text: '綻{ほころ}ば', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '表情變柔和的時候。 \n【常用】比喻緊張感消失。'
    },
    // --- SOP Expanded N1 Batch 4 ---
    // 21. 重んじる (Omonjiru)
    {
        id: 'n1_v1399_omonjiru_1',
        prob: '伝統{でんとう}を ______。',
        prob_zh: ' *重視* 傳統。',
        level: 'N1',
        options: [
            { text: '重{おも}んじる', reason: '正確！一/サ變活用動詞。表示尊重、重視。' },
            { text: '軽{かろ}んじる', reason: '錯誤：那是輕視。' },
            { text: '重{おも}んじ', reason: '正確！' },
            { text: '重視{じゅうし}する', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '重視傳統。 \n【活用】「重んじる」(omonjiru) 是由「重み」+「じる」構成，具有上一段或サ變活用的特徵。'
    },
    {
        id: 'n1_v1399_omonjiru_2',
        prob: '個{こ}人{じん}の意志{いし}が ______ られている。',
        prob_zh: '個人的意志被 *重視*。',
        level: 'N1',
        options: [
            { text: '重{おも}んじ', reason: '正確！上一段受身形。' },
            { text: '重{おも}んじられ', reason: '正確！' },
            { text: '重{おも}んじ', reason: '正確！' },
            { text: '重{おも}んぜ', reason: '正確！(サ變受身形態)' }
        ],
        correctIndex: 0,
        tag: 'passive',
        correctRule: '個人的意志被重視。 \n【活用】「重んじる」的受身形常作「重んじられる」。'
    },
    // 22. 軽んじる (Karonjiru)
    {
        id: 'n1_v1399_karonjiru_1',
        prob: '命{いのち}を ______。',
        prob_zh: ' *輕視* 生命。',
        level: 'N1',
        options: [
            { text: '軽{かろ}んじる', reason: '正確！表示不當一回事、蔑視。' },
            { text: '重{おも}んじる', reason: '錯誤：那是重視。' },
            { text: '軽{かろ}んじ', reason: '正確！' },
            { text: '無視{むし}する', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '輕視生命。 \n【自他辨析】「重んじる」(重視) vs 「軽んじる」(輕視)。'
    },
    {
        id: 'n1_v1399_karonjiru_2',
        prob: '若{わか}いからといって ______ べきではない。',
        prob_zh: '不可因為年輕就 *輕視*。',
        level: 'N1',
        options: [
            { text: '軽{かろ}んじる', reason: '正確！辭書形接「べき」。' },
            { text: '軽{かろ}んじ', reason: '錯誤：接續。' },
            { text: '侮{あなど}る', reason: '正確！(侮辱)' },
            { text: '軽{かろ}んぜ', reason: '錯誤：サ變命體。' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '不可因為年輕就輕視。 \n【活用】維持辭書形接續。'
    },
    // 23. 重なる (Kasanaru)
    {
        id: 'n1_v1399_kasanaru_1',
        prob: '不幸{ふこう}が ______。',
        prob_zh: '不幸的事情 *重疊(接連發生)*。',
        level: 'N1',
        options: [
            { text: '重{かさ}なりました', reason: '正確！五段自動詞。表示重疊、重複。' },
            { text: '重{かさ}ねました', reason: '錯誤：那是人去堆疊(他動詞)。' },
            { text: '重{かさ}なって', reason: '正確！' },
            { text: '続{つづ}きました', reason: '正確！(持續)' }
        ],
        correctIndex: 0,
        tag: 'transitive',
        correctRule: '不幸的事情重疊(接連發生)。 \n【自他動詞】「重なる」(自) vs 「重ねる」(他)。'
    },
    {
        id: 'n1_v1399_kasanaru_2',
        prob: '予定{よてい}が ______ しまった。',
        prob_zh: '預定行程 *重疊(撞期)* 了。',
        level: 'N1',
        options: [
            { text: '重{かさ}なって', reason: '正確！五段促音便。用於行程衝突的常用語。' },
            { text: '重{かさ}なり', reason: '錯誤：接續。' },
            { text: '被{かぶ}って', reason: '正確！(俗語的撞期)' },
            { text: '重{かさ}ねて', reason: '錯誤：他動詞。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '預定行程重疊(撞期)了。 \n【音便】五段動詞結尾「る」變為「って」。'
    },
    // 24. 重ねる (Kasaneru)
    {
        id: 'n1_v1399_kasaneru_1',
        prob: '努力{どりょく}を ______。',
        prob_zh: ' *不斷(累積)* 努力。',
        level: 'N1',
        options: [
            { text: '重{かさ}ねる', reason: '正確！一段他動詞。表示重複進行、累積。' },
            { text: '重{かさ}なる', reason: '錯誤：那是事情自動重疊。' },
            { text: '重{かさ}ね', reason: '正確！' },
            { text: '積{つ}む', reason: '正確！(累積經驗)' }
        ],
        correctIndex: 0,
        tag: 'transitive',
        correctRule: '不斷努力。 \n【語義】「重ねる」常用於抽象的積累，如「失敗を重ねる」、「努力を重ねる」。'
    },
    {
        id: 'n1_v1399_kasaneru_2',
        prob: '皿{さら}を ______ 置{お}く。',
        prob_zh: '將盤子 *疊放*。',
        level: 'N1',
        options: [
            { text: '重{かさ}ねて', reason: '正確！一段語尾去「る」加「て」。物理上的堆疊。' },
            { text: '重{かさ}なって', reason: '錯誤：盤子自動重疊。' },
            { text: '積{つ}んで', reason: '正確！' },
            { text: '重{かさ}ね', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '將盤子疊放。 \n【活用】一段動詞變位。'
    },
    // 25. 省く (Habuku)
    {
        id: 'n1_v1399_habuku_1',
        prob: '無駄{むだ}を ______。',
        prob_zh: ' *省略(剔除)* 浪費。',
        level: 'N1',
        options: [
            { text: '省{はぶ}く', reason: '正確！五段動詞。表示消除多餘、削減。' },
            { text: '削{けず}る', reason: '正確！(削減)' },
            { text: '省{はぶ}き', reason: '正確！' },
            { text: '省{はぶ}いて', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '省略浪費。 \n【活用】「省く」(habuku) 是五段動詞。'
    },
    {
        id: 'n1_v1399_habuku_2',
        prob: '手間{てま}を ______。',
        prob_zh: ' *省去* 勞力。',
        level: 'N1',
        options: [
            { text: '省{はぶ}く', reason: '正確！用於免除不必要的程序。' },
            { text: '省{はぶ}き', reason: '正確！' },
            { text: '省略{しょうりゃく}する', reason: '正確！' },
            { text: '省{かえり}みる', reason: '錯誤：那是反省。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '省去勞力。 \n【語義】「省く」強調減少負擔或程序。'
    },
    // 26. 葬る (Houmuru)
    {
        id: 'n1_v1399_houmuru_1',
        prob: '遺体{いたい}を墓{はか}に ______。',
        prob_zh: '將遺體 *安葬* 於墓中。',
        level: 'N1',
        options: [
            { text: '葬{ほうむ}る', reason: '正確！五段動詞。表示埋葬。' },
            { text: '葬{ほうむ}り', reason: '正確！' },
            { text: '埋{う}める', reason: '正確！(埋起來)' },
            { text: '葬{ほうむ}って', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '將遺體安葬於墓中。 \n【活用】「葬る」(houmuru) 是五段動詞。'
    },
    {
        id: 'n1_v1399_houmuru_2',
        prob: '闇{やみ}に ______ 去{さ}る。',
        prob_zh: ' *埋沒(掩蓋)* 入黑暗中。',
        level: 'N1',
        options: [
            { text: '葬{ほうむ}り', reason: '正確！五段連用形。常用於比喻隱瞞真相。' },
            { text: '葬{ほうむ}る', reason: '錯誤：接續不當。' },
            { text: '葬{ほうむ}って', reason: '正確！' },
            { text: '隠{かく}し', reason: '正確！(隱瞞)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '埋沒入黑暗中。 \n【比喻】「闇に葬る」指將不光彩的事情徹底掩蓋。'
    },
    // 27. 奉る (Tatematsuru)
    {
        id: 'n1_v1399_tatematsuru_1',
        prob: '神{かみ}に供物{くもつ}を ______。',
        prob_zh: '向神 *奉獻* 供品。',
        level: 'N1',
        options: [
            { text: '奉{たてまつ}る', reason: '正確！五段動詞。表示獻上、供奉。' },
            { text: '差{さ}し上{あ}げる', reason: '正確！(謙讓語)' },
            { text: '奉{たてまつ}り', reason: '正確！' },
            { text: '奉{たてまつ}って', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '向神奉獻供品。 \n【用法】「奉る」(tatematsuru) 多用於宗教或對極高地位者的奉獻。'
    },
    {
        id: 'n1_v1399_tatematsuru_2',
        prob: '王{おう}として ______。',
        prob_zh: ' *擁戴* 為王。',
        level: 'N1',
        options: [
            { text: '奉{たてまつ}る', reason: '正確！在此表示尊崇、擁戴。' },
            { text: '崇{あが}める', reason: '正確！(崇敬)' },
            { text: '奉{たてまつ}り', reason: '正確！' },
            { text: '祭{まつ}る', reason: '正確！(供奉)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '擁戴為王。 \n【語義】除了獻物，也可指將某人置於尊貴位置。'
    },
    // 28. 司る (Tsukasadoru)
    {
        id: 'n1_v1399_tsukasadoru_1',
        prob: '祭政{さいせい}を ______。',
        prob_zh: ' *治理(掌管)* 祭祀與政務。',
        level: 'N1',
        options: [
            { text: '司{つかさど}る', reason: '正確！五段動詞。表示掌管、職掌。' },
            { text: '管理{かんり}する', reason: '正確！' },
            { text: '司{つかさど}り', reason: '正確！' },
            { text: '司{つかさど}って', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '治理祭祀與政務。 \n【活用】「司る」(tsukasadoru) 是五段動詞。'
    },
    {
        id: 'n1_v1399_tsukasadoru_2',
        prob: '肝臓{かんぞう}は解毒{げどく}を ______ います。',
        prob_zh: '肝臟 *掌管* 著解毒。',
        level: 'N1',
        options: [
            { text: '司{つかさど}って', reason: '正確！五段促音便。用於生理機能的職責。' },
            { text: '司{つかさど}り', reason: '錯誤：接續。' },
            { text: '担当{たんとう}して', reason: '正確！' },
            { text: '司{つかさど}る', reason: '錯誤：接續。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '肝臟掌管著解毒。 \n【語義】用於器官或組織的功能職掌。'
    },
    // 29. 携わる (Tazusawaru)
    {
        id: 'n1_v1399_tazusawaru_1',
        prob: '開発{かいはつ}に ______。',
        prob_zh: ' *從事(參與)* 開發工作。',
        level: 'N1',
        options: [
            { text: '携{たずさ}わる', reason: '正確！五段動詞。表示參與、從事。' },
            { text: '従事{じゅうじ}する', reason: '正確！' },
            { text: '携{たずさ}わり', reason: '正確！' },
            { text: '携{たずさ}わって', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '從事開發工作。 \n【用法】「携わる」(tazusawaru) 強調專業性的參與。'
    },
    {
        id: 'n1_v1399_tazusawaru_2',
        prob: '教育{きょういく}に ______ 仕事{しごと}。',
        prob_zh: ' *涉及(參與)* 教育的工作。',
        level: 'N1',
        options: [
            { text: '携{たずさ}わる', reason: '正確！動詞連體形修飾。' },
            { text: '携{たずさ}わった', reason: '正確！(過去參與的)' },
            { text: '関{かか}わる', reason: '正確！' },
            { text: '携{たずさ}わ', reason: '錯誤：變化。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '參與教育的工作。 \n【活用】五段動詞。'
    },
    // 30. 捗る (Hadoru/Hakodoru)
    {
        id: 'n1_v1399_hakodoru_1',
        prob: '仕事{しごと}が ______。',
        prob_zh: '工作 *進展順利*。',
        level: 'N1',
        options: [
            { text: '捗{はかど}ります', reason: '正確！五段動詞。表示進展順遂。' },
            { text: '進{すす}みます', reason: '正確！(前進)' },
            { text: '捗{はかど}り', reason: '正確！' },
            { text: '遅{おく}れます', reason: '錯誤：延誤。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '工作進展順利。 \n【活用】「捗る」(hakodoru) 是五段動詞. '
    },
    {
        id: 'n1_v1399_hakodoru_2',
        prob: '勉強{べんきょう}が ______ らない。',
        prob_zh: '學習 *進展不順*。',
        level: 'N1',
        options: [
            { text: '捗{はかど}', reason: '正確！五段未然形。' },
            { text: '進{すす}ま', reason: '正確！' },
            { text: '捗{はかど}り', reason: '錯誤：接續。' },
            { text: '捗{はかど}れ', reason: '錯誤：命令/可能。' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '學習進展不順。 \n【用法】「捗らない」是形容效率低下或受阻的常用說法。'
    },
    // --- SOP Expanded N1 Batch 5 ---
    // 31. 案じる (Anjiru)
    {
        id: 'n1_v1399_anjiru_1',
        prob: '両親{りょこう}の體{からだ}を ______。',
        prob_zh: ' ______ 父母的身體。 (擔心/掛念)',
        level: 'N1',
        options: [
            { text: '案{あん}じて', reason: '正確！一類(一段)動詞。語感較文雅，具深思熟慮的擔心。' },
            { text: '心配{しんぱい}して', reason: '正確！(一般日常詞彙)' },
            { text: '案{あん}じ', reason: '正確！(連用/中斷)' },
            { text: '案{あん}じられ', reason: '錯誤：受身形態。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '擔心父母的身體。 \n【語義】「案じる」常用於高雅或文學性語境，表示對某人的安危、健康或事情進展感到憂慮。'
    },
    {
        id: 'n1_v1399_anjiru_2',
        prob: '次{つぎ}の策{さく}を ______。',
        prob_zh: ' ______ 下一步的計策。 (盤算/思考)',
        level: 'N1',
        options: [
            { text: '案{あん}じる', reason: '正確！一段動詞。除了掛念，也有思考、擬定方案之意。' },
            { text: '考{かんが}える', reason: '正確！(普通思考)' },
            { text: '案{あん}じ', reason: '正確！(中斷)' },
            { text: '計{はか}る', reason: '正確！(謀劃)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '盤算下一步計策。 \n【活用】「案じる」源於「案ずる」，在此意指動用腦筋去周密考慮、設計某種計畫。'
    },
    // 32. 生じる (Shoujiru)
    {
        id: 'n1_v1399_shoujiru_1',
        prob: '摩擦{まさつ}が ______。',
        prob_zh: ' ______ 了摩擦。 (產生/發生)',
        level: 'N1',
        options: [
            { text: '生{しょう}じました', reason: '正確！一段動詞。日常指抽象的誤解、困難或物理的摩擦等。' },
            { text: '生{う}まれました', reason: '錯誤：通常指生命的誕生。' },
            { text: '起{お}きました', reason: '正確！(發生)' },
            { text: '出{で}きました', reason: '正確！(出現/達成)' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '產生了摩擦。 \n【語義】「生じる」(shoujiru) 多用於正式文件或學術描述問題、差距、利息等抽象事物的湧現。'
    },
    {
        id: 'n1_v1399_shoujiru_2',
        prob: '誤解{ごかい}の ______ おそれがある。',
        prob_zh: '有 ______ 誤解的疑慮。 (產生)',
        level: 'N1',
        options: [
            { text: '生{しょう}じる', reason: '正確！辭書形修飾。' },
            { text: '起{お}こす', reason: '錯誤：這是他動性質（引起）。' },
            { text: '發覺{はっかく}する', reason: '錯誤：那是事後敗露。' },
            { text: '現{あらわ}れる', reason: '錯誤：這是顯現。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '有產生誤解的疑慮。 \n【活用】在此作為自動性質，指因特定環境而自然誘發的問題。'
    },
    // 33. 演じる (Enjiru)
    {
        id: 'n1_v1399_enjiru_1',
        prob: '悲劇{ひげき}の主人公{しゅじんこう}を ______。',
        prob_zh: ' ______ 悲劇的主角。 (扮演/飾演)',
        level: 'N1',
        options: [
            { text: '演{えん}じる', reason: '正確！一段動詞辭書形。' },
            { text: '扮{ふん}する', reason: '正確！(打扮成)' },
            { text: '努{つと}める', reason: '正確！(擔當特定角色)' },
            { text: '偽{いつわ}る', reason: '錯誤：那是欺騙/謊稱。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '扮演悲劇的主角。 \n【活用】「演じる」指在舞台、電影或社會場景中扮演特定的身分。'
    },
    {
        id: 'n1_v1399_enjiru_2',
        prob: '自{みずか}ら看板{かんばん}を ______。',
        prob_zh: '親自 ______ 門面。 (充當/扮演)',
        level: 'N1',
        options: [
            { text: '演{えん}じる', reason: '正確！一段動詞。' },
            { text: '務{つと}める', reason: '正確！(擔任)' },
            { text: '擔{たん}う', reason: '正確！(承擔)' },
            { text: '演{えん}じ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '親自充當門面。 \n【比喻】「演じる」可用來形容在某種局勢或組織中展現特定功能。'
    },
    // 34. 準じる (Junjiru)
    {
        id: 'n1_v1399_junjiru_1',
        prob: '規則{きそく}に ______ 處理{しょり}。',
        prob_zh: ' ______ 規定的處置。 (比照/依照)',
        level: 'N1',
        options: [
            { text: '準{じゅん}じた', reason: '正確！一段動詞。以此標準進行對應。' },
            { text: '從{したが}った', reason: '正確！(遵從基準)' },
            { text: '則{のっと}った', reason: '正確！(遵循規範)' },
            { text: '準{じゅん}じ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '比照規定的處置。 \n【語義】「準じる」(junjiru) 是由「準ずる」衍生，意指動作或條件基準依照既有的規範進行。'
    },
    {
        id: 'n1_v1399_junjiru_2',
        prob: '本給{ほんきゅう}に ______ 手當{てあて}。',
        prob_zh: ' ______ 基本工資發給的津貼。 (比照/掛鉤)',
        level: 'N1',
        options: [
            { text: '準{じゅん}じる', reason: '正確！一段動詞。指津貼與底薪級距一致。' },
            { text: '含{ふく}む', reason: '錯誤：那是包含。' },
            { text: '基{もと}づく', reason: '正確！(根據)' },
            { text: '準{じゅん}じ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '比照基本工資的津貼。 \n【活用】常用於行政、人事等制度說明。'
    },
    // 35. 報じる (Houjiru)
    {
        id: 'n1_v1399_houjiru_1',
        prob: 'ニュースが事件{じけん}を ______。',
        prob_zh: '新聞 ______ 了事件。 (報導)',
        level: 'N1',
        options: [
            { text: '報{ほう}じました', reason: '正確！一段動詞。' },
            { text: '傳{つた}えました', reason: '正確！(廣泛的傳達)' },
            { text: '廣報{こうほう}した', reason: '正確！(官方宣傳)' },
            { text: '告{つ}げた', reason: '正確！(告知)' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '新聞報導了事件。 \n【活用】「報じる」(houjiru) 是「報ずる」的一段化形態，主要用於大型媒體或官方公告。'
    },
    {
        id: 'n1_v1399_houjiru_2',
        prob: '恩{おん}に ______。',
        prob_zh: ' ______ 恩情。 (報答/回報)',
        level: 'N1',
        options: [
            { text: '報{ほう}じる', reason: '正確！一段動詞。也可指回報恩怨。' },
            { text: '返{かえ}す', reason: '正確！(歸還/回敬)' },
            { text: '晴{は}らす', reason: '正確！(消除/報冤)' },
            { text: '報{ほう}じ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '回報恩情。 \n【語義】在此指對受到的待遇給予對應的反應或反擊。'
    },
    // 36. 強いる (Shiiru)
    {
        id: 'n1_v1399_shiiru_1',
        prob: '寄付{きふ}を ______。',
        prob_zh: ' ______ 捐款。 (強迫/硬要)',
        level: 'N1',
        options: [
            { text: '強{し}いました', reason: '正確！一段動詞。' },
            { text: '求{もと}めました', reason: '正確！(雖然是要求，但語氣溫和)' },
            { text: '命令{めいれい}した', reason: '正確！(命令)' },
            { text: '強{つよ}くし', reason: '錯誤：這是使之堅強。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '強迫捐款。 \n【語義】「強いる」(shiiru) 隱含不顧對方意志、橫加壓迫的主觀暴力感。'
    },
    {
        id: 'n1_v1399_shiiru_2',
        prob: '苦戰{くせん}を ______ られている。',
        prob_zh: '被迫陷於 ______。 (苦戰)',
        level: 'N1',
        options: [
            { text: '強{し}い', reason: '正確！一段未然形。表示外部壓力使己方陷入困局。' },
            { text: '求{もと}め', reason: '錯誤：追求。' },
            { text: '強{つよ}い', reason: '錯誤：這是形容詞讀音。' },
            { text: '強{し}い', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'passive',
        correctRule: '被迫陷入苦戰。 \n【活用】在軍事、賽事、商戰等報導中常用的高階被動句型。'
    },
    // 37. 率いる (Hikiiru)
    {
        id: 'n1_v1399_hikiiru_1',
        prob: '若手{わかて}を ______ 出場{しゅつじょう}。',
        prob_zh: ' ______ 年輕選手出場。 (率領/帶領)',
        level: 'N1',
        options: [
            { text: '率{ひき}いて', reason: '正確！一段動詞連用接續。' },
            { text: '連{つ}れて', reason: '正確！(一般性的帶人)' },
            { text: '引っ張って', reason: '正確！(帶頭衝)' },
            { text: '率{ひき}い', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '率領年輕選手出場。 \n【活用】「率いる」(hikiiru) 表示作為領導者主導團隊的行動方向。'
    },
    {
        id: 'n1_v1399_hikiiru_2',
        prob: '大軍{たいぐん}を ______。',
        prob_zh: ' ______ 大軍。 (統領)',
        level: 'N1',
        options: [
            { text: '率{ひき}いる', reason: '正確！一段動詞辭書形。' },
            { text: '指揮{しき}する', reason: '正確！(著重於下達命令)' },
            { text: '率{ひき}い', reason: '正確！' },
            { text: '束{たば}ねる', reason: '正確！(整合/捆綁)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '統領大軍。 \n【用法】通常指高級軍官、政治領袖帶領大門大戶或大型組織。'
    },
    // 38. 用いる (Mochiiru)
    {
        id: 'n1_v1399_mochiiru_1',
        prob: '最新{さいしん}の技術{ぎじゅつ}を ______。',
        prob_zh: ' ______ 最新的技術。 (採用/活用)',
        level: 'N1',
        options: [
            { text: '用{もち}います', reason: '正確！一段動詞ます形。' },
            { text: '使{つか}います', reason: '正確！(生活常用詞)' },
            { text: '採用{さいよう}した', reason: '正確！(組織決定採用)' },
            { text: '用{もち}い', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '採用最新的技術。 \n【語義】「用いる」(mochiiru) 語感較莊重，強調作為工具、手段或方針進行運用。'
    },
    {
        id: 'n1_v1399_mochiiru_2',
        prob: '語彙{ごい}を慎重{しんちょう}に ______ べきだ。',
        prob_zh: '應該慎重地 ______ 詞彙。 (運用的選用)',
        level: 'N1',
        options: [
            { text: '用{もち}いる', reason: '正確！一段動詞辭書形。' },
            { text: '撰{えら}ぶ', reason: '正確！(挑選)' },
            { text: '使{つか}う', reason: '正確！(使用)' },
            { text: '用{もち}い', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '應該慎重地運選詞彙。 \n【用法】指在寫作或演說中對特定用辭的權衡與選用。'
    },
    // 39. 顧みる (Kaerimiru)
    {
        id: 'n1_v1399_kaerimiru_1',
        prob: '過去{かこ}の步{あゆ}みを ______。',
        prob_zh: ' ______ 過去的足跡。 (回顧)',
        level: 'N1',
        options: [
            { text: '顧{かえり}みます', reason: '正確！一段動詞。' },
            { text: '振{ふ}り返{かえ}ります', reason: '正確！' },
            { text: '省{かえり}みます', reason: '錯誤：漢字用法不同(反省誤差)。' },
            { text: '顧{かえり}み', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '回顧過去的足跡。 \n【漢字辨析】「顧みる」側重於「回頭看」、「考慮到周遭」，而讀音相同的「省みる」則側重於「深刻的反省」。'
    },
    {
        id: 'n1_v1399_kaerimiru_2',
        prob: '危險{きけん}を ______ ない。',
        prob_zh: '不 ______ 危險。 (顧及/考慮)',
        level: 'N1',
        options: [
            { text: '顧{かえり}み', reason: '正確！一段未然形。表示不屑一顧或是奮不顧身。' },
            { text: '顧{かえり}み', reason: '正確！' },
            { text: '省{かえり}み', reason: '錯誤：漢字用途。' },
            { text: '省{かえり}み', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'negative',
        correctRule: '不顧危險。 \n【用法】常用於描述某人勇往直前而忽略了可能帶來的風險 or 負擔。'
    },
    // 40. 省みる (Kaerimiru)
    {
        id: 'n1_v1399_kaerimiru_3',
        prob: '自分{じぶん}の行{おこな}いを ______。',
        prob_zh: ' ______ 自己的行為。 (反省/檢討)',
        level: 'N1',
        options: [
            { text: '省{かえり}みる', reason: '正確！一段動詞辭書形。' },
            { text: '顧{かえり}みる', reason: '錯誤：那是單純的回想。' },
            { text: '反省{はんせい}する', reason: '正確！(日常詞彙)' },
            { text: '省{かえり}み', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '反省自己的行為。 \n【漢字辨析】「省みる」含有「回首自檢其過錯」的深刻意涵，是 N1 級別需精確掌握的漢字。'
    },
    {
        id: 'n1_v1399_kaerimiru_4',
        prob: '過{あやま}ちを ______ 勇氣{ゆうき}。',
        prob_zh: ' ______ 過錯的勇氣。 (檢討自省)',
        level: 'N1',
        options: [
            { text: '省{かえり}みる', reason: '正確！一段一段動詞。' },
            { text: '顧{かえり}みる', reason: '錯誤：漢字(考慮)。' },
            { text: '謝{あy}まって', reason: '錯誤：那是道歉。' },
            { text: '省{かえり}み', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '反省過錯的勇氣。 \n【活用】在此強調正視自己的疏失並從中學習。'
    },
    // --- SOP Expanded N1 Batch 6 (Systematic Coverage) ---
    // 41. 仰ぐ (Aogu)
    {
        id: 'n1_v1399_aogu_1',
        prob: '師{し}と ______。',
        prob_zh: ' ______ 某人為師。 (尊為/仰仗/仰望)',
        level: 'N1',
        options: [
            { text: '仰{あお}ぐ', reason: '正確！五段動詞。' },
            { text: '仰{あお}ぎ', reason: '正確！' },
            { text: '頼{たよ}る', reason: '正確！(依靠)' },
            { text: '仰{あお}が', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '奉為老師。 \n【活用】五段動詞「仰ぐ」。除了仰望，也指尊敬或尋求指導。'
    },
    {
        id: 'n1_v1399_aogu_2',
        prob: '指示{しじ}を ______。',
        prob_zh: ' ______ 指示。 (請求)',
        level: 'N1',
        options: [
            { text: '仰{あお}ぎました', reason: '正確！' },
            { text: '仰{あお}ぎ', reason: '正確！' },
            { text: '頼{たの}みました', reason: '正確！(請求)' },
            { text: '仰{あお}が', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '請求指示。 \n【語義】常用於請求上級 or 專家的教導、指示。'
    },
    // 42. 明かす (Akasu)
    {
        id: 'n1_v1399_akasu_1',
        prob: '秘密{ひみつ}を ______。',
        prob_zh: ' ______ 秘密。 (揭露/說出)',
        level: 'N1',
        options: [
            { text: '明{あ}かしました', reason: '正確！五段他動詞。' },
            { text: '話{はな}しました', reason: '正確！(說)' },
            { text: '隠{かく}しました', reason: '錯誤：隱藏。' },
            { text: '明{あ}かし', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '揭露秘密。 \n【を活用】五段他動詞「明かす」。'
    },
    {
        id: 'n1_v1399_akasu_2',
        prob: '夜{よ}を ______ 語り合う。',
        prob_zh: ' ______ 語/通宵談話。 (熬夜/度過)',
        level: 'N1',
        options: [
            { text: '明{あ}かして', reason: '正確！五段動詞。' },
            { text: '過{す}ごして', reason: '正確！(度過)' },
            { text: '起{お}きて', reason: '正確！(醒著)' },
            { text: '明{あ}かし', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '徹夜長談。 \n【語義】「夜を明かす」是固定搭配，指通宵。'
    },
    // 43. 赤らむ (Akaramu)
    {
        id: 'n1_v1399_akaramu_1',
        prob: '頰{ほお}が ______。',
        prob_zh: '臉頰 ______。 (變紅/發紅)',
        level: 'N1',
        options: [
            { text: '赤{あか}らんでいます', reason: '正確！五段自動詞 持續/狀態。' },
            { text: '赤{あか}くなっています', reason: '正確！(變紅了)' },
            { text: '赤{あか}らみ', reason: '正確！' },
            { text: '赤{あか}らま', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '臉紅了。 \n【活用】五段自動詞「赤らむ」。'
    },
    {
        id: 'n1_v1399_akaramu_2',
        prob: '空{そら}が ______ きた。',
        prob_zh: '天空逐漸 ______ 了。 (微紅)',
        level: 'N1',
        options: [
            { text: '赤{あか}らん', reason: '正確！五段撥音便。' },
            { text: '赤{あか}らみ', reason: '正確！' },
            { text: '赤{あか}らま', reason: '正確！' },
            { text: '赤{あか}らめ', reason: '錯誤：他動詞。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '天色微紅。 \n【活用】五段動詞。'
    },
    // 44. 上がる (Agaru)
    {
        id: 'n1_v1399_agaru_1',
        prob: 'ステージで ______ しまった。',
        prob_zh: '在舞台上 ______ 了。 (緊張/慌亂)',
        level: 'N1',
        options: [
            { text: '上{あ}がって', reason: '正確！五段自動詞促音便。指極度緊張。' },
            { text: '緊張{きんちょう}して', reason: '正確！(緊張)' },
            { text: '上{あ}がり', reason: '正確！' },
            { text: '上{あ}がら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '怯場了。 \n【語義】「上がる」在心理狀態上指因緊張而不知所措。'
    },
    {
        id: 'n1_v1399_agaru_2',
        prob: 'どうぞ、お ______ ください。',
        prob_zh: '請 ______。 (進來/進屋)',
        level: 'N1',
        options: [
            { text: '上{あ}がり', reason: '正確！尊他語固定用法，請進屋。' },
            { text: '入{はい}り', reason: '正確！' },
            { text: '上{あ}がれ', reason: '錯誤：命令形。' },
            { text: '上{あ}がら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '請進。 \n【敬語】「お上がりください」是請客人進入家門的常用禮貌語。'
    },
    // 45. 呆れる (Akireru)
    {
        id: 'n1_v1399_akireru_1',
        prob: 'あまりの酷{ひど}さに ______。',
        prob_zh: '因為太過過分而 ______。 (愕然/吃驚)',
        level: 'N1',
        options: [
            { text: '呆{あき}れました', reason: '正確！下一段動詞。' },
            { text: '驚{おどろ}きました', reason: '正確！' },
            { text: '呆{あき}れ', reason: '正確！' },
            { text: '呆{あき}れら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '令人無語。 \n【を活用】下一段自動詞「呆れる」。'
    },
    {
        id: 'n1_v1399_akireru_2',
        prob: ' ______ るほどの大食い。',
        prob_zh: '吃得讓人 ______ 的大胃王。',
        level: 'N1',
        options: [
            { text: '呆{あき}れ', reason: '正確！辭書形修飾ほど。' },
            { text: '呆{あき}れ', reason: '正確！' },
            { text: '呆{あき}れた', reason: '正確！' },
            { text: '呆{あき}れま', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '令人瞠目結舌。 \n【活用】一段動詞。'
    },
    // 46. 明くる (Akuru)
    {
        id: 'n1_v1399_akuru_1',
        prob: ' ______ 日{ひ}の朝{あさ}。',
        prob_zh: ' ______ 天早上。 (次/隔)',
        level: 'N1',
        options: [
            { text: '明{あ}くる', reason: '正確！連體詞用法。指次、隔。' },
            { text: '次{つぎ}の', reason: '正確！(次日的)' },
            { text: '明{あ}けた', reason: '正確！(天亮後的)' },
            { text: '明{あ}くる', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '隔天早晨。 \n【用法】「明くる」是「明ける」的連體形殘留，通常寫作假名。'
    },
    {
        id: 'n1_v1399_akuru_2',
        prob: ' ______ 年{とし}に結婚{けっこん}した。',
        prob_zh: ' ______ 年結婚了。 (次年)',
        level: 'N1',
        options: [
            { text: '明{あ}くる', reason: '正確！' },
            { text: '明{あ}け', reason: '正確！' },
            { text: '翌{よく}年', reason: '正確！(翌年)' },
            { text: '明{あ}き', reason: '錯誤：音不合。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '次年。 \n【漢字】雖然常用假名，但對應漢字為「明くる」。'
    },
    // 47. 焦る (Aseru)
    {
        id: 'n1_v1399_aseru_1',
        prob: '時間{じかん}がなくて ______。',
        prob_zh: '因為沒時間而 ______。 (焦躁/急躁)',
        level: 'N1',
        options: [
            { text: '焦{あせ}っています', reason: '正確！五段動詞持續。' },
            { text: '急{いそ}いで', reason: '正確！(趕時間)' },
            { text: '焦{あせ}り', reason: '正確！' },
            { text: '焦{あせ}ら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '心急火燎。 \n【活用】五段動詞「焦る」。注意它是五段動詞(aser-u)，不是一段。'
    },
    {
        id: 'n1_v1399_aseru_2',
        prob: ' ______ て失敗{しっぱい}した。',
        prob_zh: '因為 ______ 而失敗了。',
        level: 'N1',
        options: [
            { text: '焦{あせ}っ', reason: '正確！五段動詞促音便。' },
            { text: '焦{あせ}り', reason: '正確！' },
            { text: '焦{あせ}ら', reason: '正確！' },
            { text: '焦{あせ}る', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '因心急而失誤。 \n【活用】五段動詞。'
    },
    // 48. 値する (Ataisuru)
    {
        id: 'n1_v1399_ataisuru_1',
        prob: '稱賛{しょうさん}に ______。',
        prob_zh: ' ______ 稱讚。 (值得/夠得上)',
        level: 'N1',
        options: [
            { text: '値{あた}いします', reason: '正確！サ行變格動詞ます形。' },
            { text: '値{あた}いする', reason: '正確！(辭書形)' },
            { text: '足{た}りる', reason: '正確！(值得)' },
            { text: '値{あた}いし', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '值得稱讚。 \n【を活用】サ行變格「値する」。'
    },
    {
        id: 'n1_v1399_ataisuru_2',
        prob: '注目{ちゅうもく}に ______ ニュース。',
        prob_zh: ' ______ 矚目的新聞。',
        level: 'N1',
        options: [
            { text: '値{あた}いする', reason: '正確！辭書形修飾名詞。' },
            { text: '値{あた}い', reason: '正確！' },
            { text: '値{あた}いさ', reason: '正確！' },
            { text: '値{あた}いし', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '值得關注的新聞。 \n【活用】サ行變格。'
    },
    // 49. 集まる (Atsumaru)
    {
        id: 'n1_v1399_atsumaru_3',
        prob: '衆目{しゅうもく}が ______。',
        prob_zh: '眾目 ______。 (聚焦/聚集)',
        level: 'N1',
        options: [
            { text: '集{あつ}まりました', reason: '正確！五段自動詞。用於抽象目光、關注。' },
            { text: '集{あつ}めました', reason: '錯誤：他動詞(使其聚集)。' },
            { text: '集{あつ}まり', reason: '正確！' },
            { text: '集{あつ}まら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '眾目睽睽/聚焦。 \n【を活用】五段自動詞「集まる」。'
    },
    {
        id: 'n1_v1399_atsumaru_4',
        prob: '注目{ちゅうもく}が ______。',
        prob_zh: '備受 ______。 (聚集)',
        level: 'N1',
        options: [
            { text: '集{あつ}まる', reason: '正確！' },
            { text: '集{あつ}め', reason: '錯誤：他動詞。' },
            { text: '集{あつ}ま', reason: '正確！' },
            { text: '集{あつ}まり', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '受到關注。 \n【活用】五段動詞。'
    },
    // 50. 誂える (Atsuraeru)
    {
        id: 'n1_v1399_atsuraeru_1',
        prob: '服{ふく}を ______。',
        prob_zh: ' ______ 衣服。 (訂做/定製)',
        level: 'N1',
        options: [
            { text: '誂{あつら}えました', reason: '正確！下一段他動詞。' },
            { text: '作{つく}りました', reason: '正確！(製作)' },
            { text: '誂{あつら}え', reason: '正確！' },
            { text: '誂{あつら}えら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '定製衣服。 \n【を活用】下一段他動詞「誂える」。'
    },
    {
        id: 'n1_v1399_atsuraeru_2',
        prob: ' ______ 品{ひん}。',
        prob_zh: ' ______ 的物品。 (定製品)',
        level: 'N1',
        options: [
            { text: '誂{あつら}え', reason: '正確！連用形作名詞性修飾。' },
            { text: '誂{あつら}える', reason: '正確！(辭書形修飾)' },
            { text: '誂{あつら}えら', reason: '正確！' },
            { text: '誂{あつら}わ', reason: '錯誤：一段動詞不變詞幹音。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '定做品。 \n【活用】一段動詞。'
    },
    // 51. 当てはまる (Atehamaru)
    {
        id: 'n1_v1399_atehamaru_1',
        prob: 'この条件{じょうけん}に ______。',
        prob_zh: ' ______ 這個條件。 (符合/適用)',
        level: 'N1',
        options: [
            { text: '当てはまる', reason: '正確！五段自動詞。' },
            { text: '合{あ}う', reason: '正確！(符合)' },
            { text: '当てはめる', reason: '錯誤：他動詞(使其適用)。' },
            { text: '適{てき}する', reason: '正確！(適合)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '符合條件。 \n【活用】五段自動詞「当てはまる」。'
    },
    {
        id: 'n1_v1399_atehamaru_2',
        prob: '自分{じぶん}のケースには ______ ない。',
        prob_zh: '不 ______ 自己的情況。',
        level: 'N1',
        options: [
            { text: '当てはまら', reason: '正確！五段未然形。' },
            { text: '当てはまり', reason: '正確！' },
            { text: '当てはまって', reason: '正確！' },
            { text: '当てはめる', reason: '錯誤：他動詞。' }
        ],
        correctIndex: 0,
        tag: 'negative',
        correctRule: '不適用於自身。 \n【活用】五段動詞。'
    },
    // 52. 当てはめる (Atehameru)
    {
        id: 'n1_v1399_atehameru_1',
        prob: '理論{りろん}を現実{げんじつ}に ______。',
        prob_zh: '將理論 ______ 於現實。 (套用/使適用)',
        level: 'N1',
        options: [
            { text: '当てはめます', reason: '正確！下一段他動詞。' },
            { text: '当てはまります', reason: '錯誤：自動詞。' },
            { text: '当{あ}て', reason: '正確！' },
            { text: '当てはめ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '套用理論。 \n【自他動詞】「当てはまる」(自動詞，符合) vs 「当てはめる」(他動詞，套用/適用)。'
    },
    {
        id: 'n1_v1399_atehameru_2',
        prob: '枠{わく}に ______ て考{かんが}える。',
        prob_zh: ' ______ 在框框裡思考。',
        level: 'N1',
        options: [
            { text: '当てはめ', reason: '正確！一段連用形。' },
            { text: '当てはまり', reason: '錯誤：自動詞。' },
            { text: '当てはめ', reason: '正確！' },
            { text: '当てはめ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '套用框架思考。 \n【活用】一段動詞。'
    },
    // 53. 宛てる (Ateru)
    {
        id: 'n1_v1399_ateru_宛_1',
        prob: '友人{ゆうじん}に ______ 手紙{てがみ}。',
        prob_zh: ' ______ 朋友的信。 (寄給/發給)',
        level: 'N1',
        options: [
            { text: '宛{あ}てた', reason: '正確！下一段他動詞。指收件人。' },
            { text: '当{あ}てた', reason: '錯誤：漢字用法不同(碰觸/對準)。' },
            { text: '書{か}いた', reason: '正確！(寫的)' },
            { text: '宛{あ}て', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '寄給朋友的信。 \n【漢字】指明收件人或地址時常用「宛てる」。'
    },
    {
        id: 'n1_v1399_ateru_宛_2',
        prob: '私{わたし} ______ に荷物{にもつ}が届{とど}いた。',
        prob_zh: '寄 ______ 我的包裹寄到了。',
        level: 'N1',
        options: [
            { text: '宛{あ}て', reason: '正確！連用形作接尾語用法，表示「收件人是...」。' },
            { text: '向{む}け', reason: '正確！(面向...的)' },
            { text: '当{あ}て', reason: '錯誤：漢字錯誤。' },
            { text: '宛{あ}てら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '給我的包裹。 \n【語義】「～宛て」是接在人名或組織名後，表示收信人。'
    },
    // 54. 溢れる (Afureru)
    {
        id: 'n1_v1399_afureru_1',
        prob: '水{みず}がコップから ______。',
        prob_zh: '水從杯子裡 ______ 出來。 (溢出)',
        level: 'N1',
        options: [
            { text: '溢{あふ}れています', reason: '正確！下一段自動詞。' },
            { text: '溢{あふ}れ', reason: '正確！' },
            { text: 'こぼれて', reason: '正確！(灑出來)' },
            { text: '溢{あふ}ら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '水溢出來了。 \n【活用】一段自動詞「溢れる」。'
    },
    {
        id: 'n1_v1399_afureru_2',
        prob: '自信{じしん}に ______ 表情{ひょうじょう}。',
        prob_zh: ' ______ 自信的表情。 (充滿)',
        level: 'N1',
        options: [
            { text: '溢{あふ}れた', reason: '正確！引申為充滿。' },
            { text: '溢{あふ}れる', reason: '正確！' },
            { text: '満{み}ちた', reason: '正確！(充滿)' },
            { text: '溢{あふ}れ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '充滿自信。 \n【語義】除了液體溢出，也常用於抽象的情感或特質溢於言表。'
    },
    // 55. 炙る (Aburu)
    {
        id: 'n1_v1399_aburu_1',
        prob: '火{ひ}で ______。',
        prob_zh: '用火 ______。 (烤/烘)',
        level: 'N1',
        options: [
            { text: '炙{あぶ}ります', reason: '正確！五段動詞。' },
            { text: '乾{かわ}かします', reason: '正確！(弄乾)' },
            { text: '炙{あぶ}って', reason: '正確！' },
            { text: '炙{あぶ}ら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '用火烤。 \n【活用】五段動詞「炙る」。常用於烘乾或微烤食物。'
    },
    {
        id: 'n1_v1399_aburu_2',
        prob: '海苔{のり}を軽く ______。',
        prob_zh: '稍微 ______ 一下海苔。',
        level: 'N1',
        options: [
            { text: '炙{あぶ}る', reason: '正確！辭書形。' },
            { text: '焼{や}く', reason: '正確！(燒/烤)' },
            { text: '炙{あぶ}り', reason: '正確！' },
            { text: '炙{あぶ}っ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '烤海苔。 \n【活用】五段動詞。'
    },
    // 56. 甘える (Amaeru)
    {
        id: 'n1_v1399_amaeru_1',
        prob: '親{おや}に ______。',
        prob_zh: '向父母 ______。 (撒嬌)',
        level: 'N1',
        options: [
            { text: '甘{あま}えています', reason: '正確！一段自動詞。' },
            { text: '甘{あま}やかし', reason: '錯誤：他動詞(溺愛/縱容)。' },
            { text: '甘{あま}え', reason: '正確！' },
            { text: '甘{あま}えな', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '對父母撒嬌。 \n【自他動詞】「甘える」(自動詞，撒嬌) vs 「甘やかす」(他動詞，溺愛)。'
    },
    {
        id: 'n1_v1399_amaeru_2',
        prob: 'お言葉{ことば}に ______。',
        prob_zh: '恭敬不如從命(照您說的去做)。',
        level: 'N1',
        options: [
            { text: '甘{あま}えて', reason: '正確！慣用語「お言葉に甘えて」。' },
            { text: '甘{あま}えさ', reason: '錯誤：使役。' },
            { text: '甘{あま}えら', reason: '正確！' },
            { text: '甘{あま}え', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '承蒙您的好意。 \n【語義】這是不客氣地接受對方提議時的禮貌說法。'
    },
    // 57. 操る (Ayatsuru)
    {
        id: 'n1_v1399_ayatsuru_1',
        prob: '人形{にんぎょう}を ______。',
        prob_zh: ' ______ 木偶。 (操縱)',
        level: 'N1',
        options: [
            { text: '操{あやつ}ります', reason: '正確！五段動詞。' },
            { text: '動{うご}かします', reason: '正確！(移動)' },
            { text: '操{あやつ}って', reason: '正確！' },
            { text: '操{あやつ}ら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '操縱人偶。 \n【活用】五段動詞「操る」。除了物理操縱，也指掌握語言、駕馭人心。'
    },
    {
        id: 'n1_v1399_ayatsuru_2',
        prob: '三ヶ国語{さんかこくご}を自在{じざい}に ______。',
        prob_zh: '自由地 ______ 三種語言。 (掌握/運用)',
        level: 'N1',
        options: [
            { text: '操{あやつ}る', reason: '正確！' },
            { text: '話{はな}す', reason: '正確！(說)' },
            { text: '使{つか}う', reason: '正確！(使用)' },
            { text: '操{あやつ}り', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '精通三國語言。 \n【活用】五段動詞。'
    },
    // 58. 危ぶむ (Ayabumu)
    {
        id: 'n1_v1399_ayabumu_1',
        prob: '成功{せいこう}が ______ れている。',
        prob_zh: '成功被 ______。 (擔憂/恐有危險)',
        level: 'N1',
        options: [
            { text: '危{あや}ぶま', reason: '正確！五段受身形詞幹。' },
            { text: '危{あや}ぶみ', reason: '錯誤：連用形。' },
            { text: '心配{しんぱい}さ', reason: '正確！(令人擔心)' },
            { text: '危{あや}ぶめ', reason: '錯誤：可能形詞幹。' }
        ],
        correctIndex: 0,
        tag: 'passive',
        correctRule: '成功堪憂。 \n【活用】五段動詞「危ぶむ」的受身形。指對前途感到不安。'
    },
    {
        id: 'n1_v1399_ayabumu_2',
        prob: '存続{そんぞく}を ______。',
        prob_zh: ' ______ 存續。 (懷疑/擔心其無法持續)',
        level: 'N1',
        options: [
            { text: '危{あや}ぶむ', reason: '正確！辭書形。' },
            { text: '疑{うたが}う', reason: '正確！(懷疑)' },
            { text: '危{あや}ぶみ', reason: '正確！' },
            { text: '危{あや}ぶま', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '擔心能否存續。 \n【活用】五段動詞。'
    },
    // 59. 謝る (Ayamaru - 過る)
    {
        id: 'n1_v1399_ayamaru_過_1',
        prob: '判斷{はんだん}を ______。',
        prob_zh: '判定 ______。 (出錯/弄錯)',
        level: 'N1',
        options: [
            { text: '過{あやま}りました', reason: '正確！五段動詞「過る」。常用於判定、行動失誤。' },
            { text: '謝{あや}まりました', reason: '錯誤：那是道歉。' },
            { text: '間違{まちが}えました', reason: '正確！(弄錯了)' },
            { text: '過{あやま}り', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '判斷錯誤。 \n【漢字】指弄錯、出錯時漢字為「過る」。'
    },
    {
        id: 'n1_v1399_ayamaru_過_2',
        prob: '一歩{いっぽ} ______ と大変{たいへん}なことになる。',
        prob_zh: ' ______ 一步的話，後果將不堪設想。',
        level: 'N1',
        options: [
            { text: '過{あやま}る', reason: '正確！五段動詞辭書形。' },
            { text: '間違{まちが}える', reason: '正確！' },
            { text: '謝{あや}まる', reason: '錯誤：漢字錯誤。' },
            { text: '過{あやま}り', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '一步之錯。 \n【活用】五段動詞。'
    },
    // 60. 歩む (Ayumu)
    {
        id: 'n1_v1399_ayumu_1',
        prob: '別{べつ}の道{みち}を ______。',
        prob_zh: ' ______ 上不同的道路。 (行走/進展)',
        level: 'N1',
        options: [
            { text: '歩{あゆ}みます', reason: '正確！五段動詞。常用於抽象的人生道路或進展。' },
            { text: '歩{ある}きます', reason: '正確！(行走，通常指物理走動)' },
            { text: '進{すす}みます', reason: '正確！(前進)' },
            { text: '歩{あゆ}ん', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '走出不同的路。 \n【を活用】五段動詞「歩む」。'
    },
    {
        id: 'n1_v1399_ayumu_2',
        prob: '歴史{れきし}を ______ きた。',
        prob_zh: '一路 ______ 來了歷史。',
        level: 'N1',
        options: [
            { text: '歩{あゆ}ん', reason: '正確！五段撥音便。' },
            { text: '歩{歩}み', reason: '正確！' },
            { text: '歩{あゆ}ま', reason: '正確！' },
            { text: '歩{あゆ}め', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '走過的歷史。 \n【活用】五段動詞。'
    }
];
