import { StaticQuestion } from './types'

export const n3Questions: StaticQuestion[] = [
    // --- Passive Causative (Shieki Ukemi) ---
    {
        id: 'n3_caus_pass_1',
        prob: '子供{こども}のころ、母{はは}に野菜{やさい}を______。',
        prob_zh: '小時候，被媽媽逼著吃蔬菜。',
        level: 'N3',
        options: [
            { text: '食{た}べさせられた', reason: '正確！「食べる」的使役受身形 (被強迫吃)。' },
            { text: '食{た}べられた', reason: '錯誤：這是受身形 (被吃 / 能吃)。' },
            { text: '食{た}べさせた', reason: '錯誤：這是使役形 (我讓媽媽吃 / 我餵蔬菜)。' },
            { text: '食{た}べらされた', reason: '錯誤：五段動詞才有「らされる」，一段動詞沒有。' }
        ],
        correctIndex: 0,
        tag: 'causative-passive',
        correctRule: '【使役受身】表示「不情願地被迫做某事」。一段動詞規則：去掉る＋させられる。「食ベる」→「食べさせられる」 (口語常縮約為 食べさせられた)。'
    },
    // --- Keigo (Honorifics) ---
    {
        id: 'n3_keigo_1',
        prob: '先生{せんせい}はもう______か。',
        prob_zh: '老師已經______了嗎？ (回去/尊稱)',
        level: 'N3',
        options: [
            { text: '帰{かえ}られました', reason: '正確！「帰る」的受身形可作為尊敬語。' },
            { text: 'お帰{かえ}りしました', reason: '錯誤：這是謙讓語 (我回去了)。' },
            { text: '帰{かえ}らせました', reason: '錯誤：這是使役形 (讓老師回去)。' },
            { text: 'お帰{かえ}りました', reason: '錯誤：文法錯誤，沒有這種用法。' }
        ],
        correctIndex: 0,
        tag: 'keigo',
        correctRule: '【尊敬語】動詞的「受身形 (れる/られる)」可以作為輕微的尊敬語使用。此處「帰られました」表示對老師動作的尊敬。'
    },
    {
        id: 'n3_keigo_2',
        prob: '社長{しゃちょう}、いつ______か。',
        prob_zh: '社長，您什麼時候______？ (去/尊稱)',
        level: 'N3',
        options: [
            { text: 'いらっしゃいます', reason: '正確！「行く/来る/いる」的尊敬語。' },
            { text: '参{まい}ります', reason: '錯誤：這是謙讓語 (我去)。' },
            { text: '申{もう}します', reason: '錯誤：這是「說」的謙讓語。' },
            { text: 'いたしております', reason: '錯誤：這是「做」的謙讓語。' }
        ],
        correctIndex: 0,
        tag: 'keigo',
        correctRule: '【特殊尊敬語】「行く、来る、いる」的尊敬語都是「いらっしゃる」。面對長輩 (社長) 詢問行程時應使用此形。'
    },
    {
        id: 'n3_gen_odoroku_2',
        prob: 'あまりの速{はや}さに、皆{みんな} ______ います。',
        prob_zh: '因為太快了，大家都很 *驚訝*。',
        level: 'N3',
        options: [
            { text: '驚{おどろ}いて', reason: '正確！五段動詞i音便。表示狀態。' },
            { text: '驚{おどろ}かせて', reason: '錯誤：使役形(使驚訝)。' },
            { text: '驚{おどろ}き', reason: '正確！(名詞/連用)' },
            { text: '驚{おどろ}か', reason: '錯誤：未然形。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '因為太快了，大家都很驚訝。 \n【狀態】「～ている」在此表示受外部影響後持續的心理狀態。'
    },
    // --- SOP Expanded N3 Batch 2 ---
    // 1. 捕まえる / 捕まる (Tsukamaeru / Tsukamaru)
    {
        id: 'n3_v1399_tsukamaeru_1',
        prob: '警察{けいさつ}が泥棒{どろぼう}を ______。',
        prob_zh: '警察 *抓住* 了小偷。',
        level: 'N3',
        options: [
            { text: '捕{つか}まえ', reason: '正確！一段他動詞連用形。' },
            { text: '捕{つか}まり', reason: '錯誤：自動詞(被捕)。' },
            { text: '捕{つか}まえられ', reason: '錯誤：受身。' },
            { text: '捕{つか}まえ', reason: '正確！(去ru)' }
        ],
        correctIndex: 0,
        tag: 'transitive',
        correctRule: '警察抓住了小偷。 \n【自他動詞】「捕まえる」(他，抓) 與 「捕まる」(自，被抓)。助詞「を」選他動詞。'
    },
    {
        id: 'n3_v1399_tsukamaru_2',
        prob: '犯人{はんにん}がようやく ______ ました。',
        prob_zh: '犯人終於越 *被抓* 了。',
        level: 'N3',
        options: [
            { text: '捕{つか}まり', reason: '正確！五段自動詞連用形。' },
            { text: '捕{つか}まえ', reason: '錯誤：他動詞。' },
            { text: '捕{つか}まら', reason: '錯誤：否定。' },
            { text: '捕{つか}まって', reason: '錯誤：接續錯誤。' }
        ],
        correctIndex: 0,
        tag: 'transitive',
        correctRule: '犯人終於被抓了。 \n【活用】「捕まる」(tsukamaru) 是五段自動詞，常用於表示被捕。'
    },
    // 2. 片付ける (Katazukeru)
    {
        id: 'n3_v1399_katazukeru_1',
        prob: '部屋{へや}をきれいに ______ ください。',
        prob_zh: '請把房間 *收拾* 乾淨。',
        level: 'N3',
        options: [
            { text: '片付{かたづ}けて', reason: '正確！一段動詞變化。' },
            { text: '片付{かたづ}き', reason: '錯誤：自動詞。' },
            { text: '片付{かたづ}け', reason: '正確！(去ru)' },
            { text: '片付{かたづ}い', reason: '錯誤：變化錯誤。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請把房間收拾乾淨。 \n【活用】一段動詞「片付ける」去「る」加「て」。'
    },
    {
        id: 'n3_v1399_katazukeru_2',
        prob: '仕事{しごと}を ______ から帰{かえ}ります。',
        prob_zh: ' *處理完* 工作後再回去。',
        level: 'N3',
        options: [
            { text: '片付{かたづ}けて', reason: '正確！表示順序。' },
            { text: '片付{かたづ}き', reason: '錯誤：自動詞。' },
            { text: '片付{かたづ}け', reason: '正確！(一段動詞)' },
            { text: '片付{かたづ}き', reason: '正確！(自動詞則表示事態解決)' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '處理完工作後再回去。 \n【語義】「片付ける」除了收拾房間，也用於處理完結事情、工作。'
    },
    // 3. 間に合う (Maniau)
    {
        id: 'n3_v1399_maniau_1',
        prob: '急{いそ}げば、終電{しゅうでん}に ______ よ。',
        prob_zh: '趕快的話， *趕得上* 末班車喔。',
        level: 'N3',
        options: [
            { text: '間{ま}に合{あ}う', reason: '正確！辭書形表示未來預期。' },
            { text: '間{ま}に合{あ}い', reason: '錯誤：連用形。' },
            { text: '間{ま}に合{あ}わ', reason: '錯誤：否定。' },
            { text: '合{あ}う', reason: '錯誤：語義不同。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '趕快的話，趕得上末班車喔。 \n【慣用句】「間に合う」為一個複合動詞，表示趕得上。'
    },
    {
        id: 'n3_v1399_maniau_2',
        prob: '残念{ざんねん}ながら、締切{しめきり}に ______ かった。',
        prob_zh: '遺憾地， *沒趕上* 截止期限。',
        level: 'N3',
        options: [
            { text: '間{ま}に合{あ}わな', reason: '正確！五段動詞否定式。' },
            { text: '間{ま}に合{あ}い', reason: '錯誤：接續錯誤。' },
            { text: '間{ま}に合{あ}え', reason: '錯誤：可能。' },
            { text: '間{ま}に合{あ}っ', reason: '錯誤：促音便不接否定。' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '遺憾地，沒趕上截止期限。 \n【活用】「間に合う」最後是「う」，否定變為「わ」。'
    },
    // 4. 合う (Au)
    {
        id: 'n3_v1399_au_1',
        prob: 'サイズがちょうど ______。',
        prob_zh: '尺寸正好 *合適*。',
        level: 'N3',
        options: [
            { text: '合{あ}います', reason: '正確！五段動詞。' },
            { text: '合{あ}って', reason: '正確！(狀態)' },
            { text: '合{あ}わ', reason: '錯誤：否定。' },
            { text: '合{あ}い', reason: '正確！(連用)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '尺寸正好合適。 \n【詞彙】「合う」用於表示大小、味道、想法等符合。'
    },
    {
        id: 'n3_v1399_au_2',
        prob: '意見{いけん}が ______ ことが多{おお}いです。',
        prob_zh: '意見 *契合* 的時候很多。',
        level: 'N3',
        options: [
            { text: '合{あ}う', reason: '正確！常體接名詞句。' },
            { text: '合{あ}い', reason: '錯誤：連用。' },
            { text: '合{あ}わせる', reason: '錯誤：使役/他動(配合)。' },
            { text: '合{あ}う', reason: '正確！(五段)' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '意見契合的時候很多。 \n【活用】「合う」為五段動詞。'
    },
    // 5. 祈る / 願う / 祝う (Inoru / Negau / Iwau)
    {
        id: 'n3_v1399_inoru_1',
        prob: '合格{ごうかく}を ______ います。',
        prob_zh: '正在 *祈禱* 合格。',
        level: 'N3',
        options: [
            { text: '祈{いの}って', reason: '正確！五段促音便。' },
            { text: '祈{いの}り', reason: '正確！(連用)' },
            { text: '願{ねが}って', reason: '正確！(但常用詞性不同)' },
            { text: '祈{いの}ら', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '正在祈禱合格。 \n【音便】五段動詞「祈る」結尾「る」發生促音便。'
    },
    {
        id: 'n3_v1399_negau_2',
        prob: '平和{へいわ}を ______。',
        prob_zh: ' *祈求* 和平。',
        level: 'N3',
        options: [
            { text: '願{ねが}います', reason: '正確！五段動詞ます形。' },
            { text: '願{ねが}って', reason: '正確！(進行)' },
            { text: '願{ねが}い', reason: '正確！(連用)' },
            { text: '祈{いの}り', reason: '正確！(祈禱)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '祈求和平。 \n【活用】「願う」為五段動詞。'
    },
    // 6. 向かう (Mukau)
    {
        id: 'n3_v1399_mukau_1',
        prob: '駅{えき}に ______ 途中で友達に会った。',
        prob_zh: '在 *前往* 車站的途中遇到了朋友。',
        level: 'N3',
        options: [
            { text: '向{む}かう', reason: '正確！辭書形接名詞。' },
            { text: '向{む}かって', reason: '正確！(正在狀態)' },
            { text: '向{む}かい', reason: '錯誤：連用。' },
            { text: '向{む}かお', reason: '錯誤：語系。' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '在前往車站的途中遇到了朋友。 \n【活用】「向かう」為五段動詞。'
    },
    {
        id: 'n3_v1399_mukau_2',
        prob: '鏡{かがみ}に ______ 髪{かみ}を整{ととの}える。',
        prob_zh: ' *對著* 鏡子整理頭髮。',
        level: 'N3',
        options: [
            { text: '向{む}かって', reason: '正確！表示方向或動作目標。' },
            { text: '向{む}かい', reason: '正確！(書面體)' },
            { text: '向{む}か', reason: '錯誤：否定。' },
            { text: '向{む}い', reason: '錯誤：變位錯誤。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '對著鏡子整理頭髮。 \n【音便】五段動詞「向かう」結尾「う」發生促音便。'
    },
    // 7. 断る (Kotowaru)
    {
        id: 'n3_v1399_kotowaru_1',
        prob: '丁寧{ていねい}に ______ ました。',
        prob_zh: '委婉地 *拒絕* 了。',
        level: 'N3',
        options: [
            { text: '断{ことわ}り', reason: '正確！五段連用形。' },
            { text: '断{ことわ}っ', reason: '錯誤：接續錯誤。' },
            { text: '断{ことわ}ら', reason: '錯誤：否定。' },
            { text: '断{ことわ}れ', reason: '錯誤：命令。' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '委婉地拒絕了。 \n【活用】「斷る」為五段動詞。'
    },
    {
        id: 'n3_v1399_kotowaru_2',
        prob: '無理{むり}な頼{たの}みは ______ 方がいい。',
        prob_zh: '無理的請求還是 *拒絕* 比較好。',
        level: 'N3',
        options: [
            { text: '断{ことわ}った', reason: '正確！五段促音便過去式。' },
            { text: '断{ことわ}る', reason: '正確！(但建議語句常用た形)' },
            { text: '断{ことわ}り', reason: '錯誤：接續錯誤。' },
            { text: '斷{ことわ}ら', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '無理的請求還是拒絕比較好。 \n【建議】「～たほうがいい」接在動詞「た形」之後。'
    },
    // --- Grammar Patterns (Volitional + to omou) ---
    {
        id: 'n3_grammar_1',
        prob: '来年{らいねん}、日本{にほん}へ______と思{おも}っています。',
        prob_zh: '我打算明年______日本。',
        level: 'N3',
        options: [
            { text: '行{い}こう', reason: '正確！意向形＋と思っています表示打算。' },
            { text: '行{い}く', reason: '錯誤：行くと思っています 語意不自然 (覺得會去?)。' },
            { text: '行{い}った', reason: '錯誤：時態錯誤 (明年)。' },
            { text: '行{い}け', reason: '錯誤：命令形。' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '【意向形＋と思っています】表示說話者持續了一段時間的意志或打算。「行こう」(意向形) 搭配此句型是 N3 必考重點。'
    },
    // --- Transitive/Intransitive Pairs ---
    {
        id: 'n3_trans_1',
        prob: '授業{じゅぎょう}を______。',
        prob_zh: '______開始上課 (開始)。',
        level: 'N3',
        options: [
            { text: '始{はじ}めます', reason: '正確！「～を始める」是此動詞 (人為開始)。' },
            { text: '始{はじ}まります', reason: '錯誤：「～が始まる」是自動詞 (課程開始了)。' },
            { text: '初{はじ}めます', reason: '錯誤：漢字選字錯誤，這是「第一次」的意思。' },
            { text: '初{はじ}まります', reason: '錯誤：漢字選字錯誤。' }
        ],
        correctIndex: 0,
        tag: 'transitive',
        correctRule: '【自他動詞】助詞是「を」，表示有人為的動作，故選他動詞「始める」。若助詞是「が」，則選自動詞「始まる」。'
    },
    // --- Compound Verbs ---
    {
        id: 'n3_compound_1',
        prob: '雨{あめ}が降{ふ}り______。',
        prob_zh: '雨______下了起來 (開始)。',
        level: 'N3',
        options: [
            { text: '出{だ}した', reason: '正確！「～出す」接動詞ます形，表示「突然開始」。' },
            { text: '始{はじ}めた', reason: '錯誤：「降り始める」表示一般性的開始，不如「出す」有突發感。' },
            { text: '続{つづ}けた', reason: '錯誤：這是「持續」的意思。' },
            { text: '終{お}わった', reason: '錯誤：這是「結束」的意思。' }
        ],
        correctIndex: 0,
        tag: 'compound',
        correctRule: '【複合動詞】「ます形去masu + 出す」表示突發性的開始 (突然下起雨來)。雖然「始める」也是開始，但「雨が降り出した」是強調突發的慣用句。'
    },
    // --- SOP Expanded N3 Batch 3 ---
    // 1. 訪ねる (Tazuneru)
    {
        id: 'n3_v1399_tazuneru_1',
        prob: '京都{きょうと}の旧友{きゅうゆう}を ______。',
        prob_zh: ' *拜訪* 京都的老朋友。',
        level: 'N3',
        options: [
            { text: '訪{たず}ねる', reason: '正確！一段動詞。表示人為的拜訪、探訪。' },
            { text: '訪{おとず}れる', reason: '正確！(語感較正式、文學)' },
            { text: '尋{たず}ねる', reason: '錯誤：這是「詢問/尋找」。' },
            { text: '訪{たず}ね', reason: '正確！(連用)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '拜訪京都的老朋友。 \n【漢字辨析】「訪ねる」是拜訪人或地點，「尋ねる」是尋找或詢問。'
    },
    {
        id: 'n3_v1399_tazuneru_2',
        prob: '彼{かれ}を ______ 行{い}きましたが、留守{るす}でした。',
        prob_zh: '雖然去 *拜訪* 他，但他不在家。',
        level: 'N3',
        options: [
            { text: '訪{たず}ねに', reason: '正確！ます形去masu + に 表示目的。' },
            { text: '訪{たず}ねて', reason: '錯誤：接續錯誤。' },
            { text: '訪{おとず}れに', reason: '正確！' },
            { text: '訪{たず}ねな', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '雖然去拜訪他，但他不在家。 \n【活用】一段動詞「訪ねる」連用形。'
    },
    // 2. 訪れる (Otozureru)
    {
        id: 'n3_v1399_otozureru_1',
        prob: 'ついに、平和{へいわ}が ______。',
        prob_zh: '終於，和平 *到來* 了。',
        level: 'N3',
        options: [
            { text: '訪{おとず}れました', reason: '正確！一段動詞。常用於季節、時代或抽象事物的到來。' },
            { text: '訪{たず}ねました', reason: '錯誤：那是人為拜訪。' },
            { text: '来{き}ました', reason: '正確！(但訪れる語氣更莊重)' },
            { text: '始{はじ}まりました', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '終於，和平到來了。 \n【語義】「訪れる」常用於文學或新聞，表示某個時期或狀態的降臨。'
    },
    {
        id: 'n3_v1399_otozureru_2',
        prob: '春{はる}の ______ を感{かん}じる。',
        prob_zh: '感覺到春天的 *到來*。',
        level: 'N3',
        options: [
            { text: '訪{おとず}れ', reason: '正確！一段動詞連用形轉名詞。' },
            { text: '訪{たず}ね', reason: '錯誤：語義不符。' },
            { text: '来{く}る', reason: '正確！(但不如名詞訪れ通順)' },
            { text: '始{はじ}まり', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '感覺到春天的到來。 \n【用法】「季節の訪れ」是常用的固定搭配。'
    },
    // 3. 誘う (Sasou)
    {
        id: 'n3_v1399_sasou_1',
        prob: '彼女{かのじょ}を食事{しょくじ}に ______。',
        prob_zh: ' *邀請* 她去吃飯。',
        level: 'N3',
        options: [
            { text: '誘{さそ}う', reason: '正確！五段動詞。' },
            { text: '招待{しょうたい}する', reason: '正確！(較正式，誘う帶有相約感)' },
            { text: '誘{さそ}い', reason: '正確！(連用)' },
            { text: '誘{さそ}おう', reason: '正確！(想邀約)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '邀請她去吃飯。 \n【語法】「（人）を（目的）に誘う」是固定用法。'
    },
    {
        id: 'n3_v1399_sasou_2',
        prob: '友達{ともだち}に ______ 、映画{えいが}を見{み}に行{い}った。',
        prob_zh: ' *受* 朋友 *邀請*，去看了電影。',
        level: 'N3',
        options: [
            { text: '誘{さそ}われて', reason: '正確！五段受身形。' },
            { text: '誘{さそ}って', reason: '錯誤：主動邀請朋友。' },
            { text: '誘{さそ}い', reason: '錯誤：接續。' },
            { text: '誘{さそ}わせ', reason: '錯誤：使役形。' }
        ],
        correctIndex: 0,
        tag: 'passive',
        correctRule: '受朋友邀請，去看了電影。 \n【受身】五段動詞「誘う」(sasou) 變為「誘われる」(sasowareru)。'
    },
    // 5. 望む (Nozomu)
    {
        id: 'n3_v1399_nozomu_1',
        prob: '多{おお}くは ______ ません。',
        prob_zh: '不 *奢求* 太甚。',
        level: 'N3',
        options: [
            { text: '望{のぞ}み', reason: '正確！五段ます形否定。' },
            { text: '望{のぞ}ん', reason: '錯誤：音便。' },
            { text: '願{ねが}い', reason: '正確！(但望む帶有野心、展望感)' },
            { text: '望{のぞ}め', reason: '錯誤：命令。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '不奢求太甚。 \n【語義】「望む」(nozomu) 指對未來的期望、展望或要求。'
    },
    {
        id: 'n3_v1399_nozomu_2',
        prob: '海{うみ}を ______ 高台{たかだい}。',
        prob_zh: ' *望* 著海的高台。',
        level: 'N3',
        options: [
            { text: '望{のぞ}む', reason: '正確！五段辭書形。' },
            { text: '臨{のぞ}む', reason: '正確！(備註: 面臨、對著也讀作nozomu，漢字不同)' },
            { text: '見{み}る', reason: '正確！(普通看)' },
            { text: '望{のぞ}んだ', reason: '正確！(過去)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '望著海的高台。 \n【語感】在此指視覺上的眺望。'
    },
    // 6. 頼む (Tanomu)
    {
        id: 'n3_v1399_tanomu_1',
        prob: '仕事{しごと}を ______。',
        prob_zh: ' *拜託* 工作。',
        level: 'N3',
        options: [
            { text: '頼{たの}みます', reason: '正確！五段動詞。' },
            { text: '願{ねが}います', reason: '正確！(但頼む更有委託某特定任務感)' },
            { text: '頼{たの}み', reason: '正確！(連用)' },
            { text: '頼{たの}も', reason: '正確！(常體意向)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '拜託工作。 \n【語法】「(事)を(人)に頼む」是核心句型。'
    },
    {
        id: 'n3_v1399_tanomu_2',
        prob: '彼{かれ}に ______ ください。',
        prob_zh: '請向他 *拜託*。',
        level: 'N3',
        options: [
            { text: '頼{たの}んで', reason: '正確！五段撥音便。' },
            { text: '頼{たの}み', reason: '錯誤：接續錯誤。' },
            { text: '頼{たの}まえ', reason: '錯誤：變化錯誤。' },
            { text: '頼{たの}め', reason: '錯誤：命令。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請向他拜託。 \n【活用】五段動詞結尾「む」變為「んで」。'
    },
    // 7. 頼る (Tayoru)
    {
        id: 'n3_v1399_tayoru_1',
        prob: '親{おや}に ______。',
        prob_zh: ' *依賴* 父母。',
        level: 'N3',
        options: [
            { text: '頼{たよ}っています', reason: '正確！五段動詞，表示依賴的狀態。' },
            { text: '頼{たよ}ります', reason: '正確！(未來)' },
            { text: '依存{いぞん}する', reason: '正確！(較僵硬的學術詞彙)' },
            { text: '頼{たの}みます', reason: '錯誤：那是拜託。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '依賴父母。 \n【詞彙辨析】「頼る」(tayoru，依賴) 與 「頼む」(tanomu，拜託) 是 N3 常考區分點。'
    },
    {
        id: 'n3_v1399_tayoru_2',
        prob: '自分{じぶん}の力{ちから}を ______。',
        prob_zh: ' *依靠* 自己的力量。',
        level: 'N3',
        options: [
            { text: '頼{たよ}る', reason: '正確！五段動詞。' },
            { text: '信{しん}じる', reason: '正確！(相信，但依靠用頼る)' },
            { text: '頼{たよ}り', reason: '正確！(名詞/連用)' },
            { text: '頼{たよ}ら', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '依靠自己的力量。 \n【活用】「頼る」是五段動詞。'
    },
    // 8. 驚く (Odoroku)
    {
        id: 'n3_v1399_odoroku_1',
        prob: 'ニュースを聞{き}いて ______。',
        prob_zh: '聽了新聞後很 *驚訝*。',
        level: 'N3',
        options: [
            { text: '驚{おどろ}きました', reason: '正確！五段動詞。表示驚訝於此意外消息。' },
            { text: '驚{おどろ}せました', reason: '錯誤：使役(使人驚訝)。' },
            { text: '驚{おどろ}いた', reason: '正確！(音便)' },
            { text: 'びっくりしました', reason: '正確！(但 odoroku 較正式)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '聽了新聞後很驚訝。 \n【語義】「驚く」(odoroku) 是自動詞，表示主語感到驚訝。'
    },
    {
        id: 'n3_v1399_odoroku_2',
        prob: 'あまりに ______ 腰{こし}を抜{ぬ}かした。',
        prob_zh: '太過 *驚訝* 而嚇得癱軟。',
        level: 'N3',
        options: [
            { text: '驚{おどろ}いて', reason: '正確！五段 i 音便。' },
            { text: '驚{おどろ}き', reason: '正確！' },
            { text: '驚{おどろ}かせて', reason: '錯誤：他動詞。' },
            { text: '驚{おどろ}かないで', reason: '錯誤：不要驚訝。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '太過驚訝而嚇得癱軟。 \n【を活用】五段動詞結尾「く」變為「いて」。'
    },
    // 9. 焦る (Aseru)
    {
        id: 'n3_v1399_aseru_1',
        prob: '時間{じかん}がなくて ______。',
        prob_zh: '因為沒時間而 *焦急*。',
        level: 'N3',
        options: [
            { text: '焦{あせ}っています', reason: '正確！五段動詞，表示焦慮情緒持續。' },
            { text: '焦{あせ}ります', reason: '正確！(未來)' },
            { text: '急{いそ}いで', reason: '正確！(急著做，但心境焦熱用焦る)' },
            { text: '困{こま}って', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '因為沒時間而焦急。 \n【語義】「焦る」指心情浮躁、焦急。注意它是五段動詞(結尾是iru/eru但非一段)。'
    },
    {
        id: 'n3_v1399_aseru_2',
        prob: '______ は禁物{きんもつ}だ。',
        prob_zh: ' *焦躁* 是大忌。',
        level: 'N3',
        options: [
            { text: '焦{あせ}り', reason: '正確！五段連用形轉名詞。' },
            { text: '焦{あせ}る', reason: '正確！(但此處用名詞較自然)' },
            { text: '急{いそ}ぎ', reason: '正確！' },
            { text: '焦{あせ}ら', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '焦躁是大忌。 \n【活用】五段動詞連用形名詞化。'
    },
    // 10. 悟る (Satoru)
    {
        id: 'n3_v1399_satoru_1',
        prob: '自分{じぶん}の過{あやま}ちを ______。',
        prob_zh: ' *領悟* 到自己的過錯。',
        level: 'N3',
        options: [
            { text: '悟{さと}りました', reason: '正確！五段動詞。' },
            { text: '悟{さと}った', reason: '正確！(音便)' },
            { text: '氣{き}づきました', reason: '正確！(察覺，但悟る層次較深)' },
            { text: '分{わ}かりました', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '領悟到自己的過錯。 \n【語義】「悟る」(satoru) 指察覺到隱藏的真相或深刻領會道理。'
    },
    {
        id: 'n3_v1399_satoru_2',
        prob: '危険{きけん}を ______ 逃{に}げ出{だ}した。',
        prob_zh: ' *察覺* 到危險後逃跑了。',
        level: 'N3',
        options: [
            { text: '悟{さと}って', reason: '正確！五段促音便。' },
            { text: '悟{さと}り', reason: '錯誤：接續。' },
            { text: '感{かん}じて', reason: '正確！' },
            { text: '悟{さと}られ', reason: '錯誤：受身。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '察覺到危險後逃跑了。 \n【活用】五段動詞結尾「る」變為「って」。'
    },
    // --- SOP Expanded N3 Batch 4 ---
    // 1. 信じる (Shinjiru)
    {
        id: 'n3_v1399_shinjiru_1',
        prob: '自分{じぶん}の可能性{かのうせい}を ______。',
        prob_zh: ' *相信* 自己的可能性。',
        level: 'N3',
        options: [
            { text: '信{しん}じています', reason: '正確！一段動詞。表示持續的信念。' },
            { text: '信{しん}じます', reason: '正確！(未來/意志)' },
            { text: '信{しん}じ', reason: '正確！(連用)' },
            { text: '信{しん}じられたい', reason: '錯誤：想要被相信。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '相信自己的可能性。 \n【活用】「信じる」(shinjiru) 是一段動詞。'
    },
    {
        id: 'n3_v1399_shinjiru_2',
        prob: ' ______ られない話{はなし}。',
        prob_zh: '令人無法 *相信* 的話。',
        level: 'N3',
        options: [
            { text: '信{しん}じ', reason: '正確！一段可能形否定。' },
            { text: '信{しん}じられ', reason: '正確！(被動/可能)' },
            { text: '信{しん}じな', reason: '錯誤：變化錯誤。' },
            { text: '信{しん}じ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'potential',
        correctRule: '令人無法相信的話。 \n【活用】一段動詞可能形為「信じられる」。'
    },
    // 2. 通じる (Tsuujiru)
    {
        id: 'n3_v1399_tsuujiru_1',
        prob: '冗談{じょうだん}が ______。',
        prob_zh: '笑話 *被聽懂(通)* 了。',
        level: 'N3',
        options: [
            { text: '通{つう}じました', reason: '正確！一段動詞。表示意思傳達或被理解。' },
            { text: '通{つう}じ', reason: '正確！' },
            { text: '分{わ}かりました', reason: '正確！(理解了，但通じる強調流通感)' },
            { text: '通{つう}じない', reason: '正確！(不通)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '笑話被聽懂了。 \n【語義】「通じる」(tsuujiru) 常用於語言、語氣或邏輯的傳達成功。'
    },
    {
        id: 'n3_v1399_tsuujiru_2',
        prob: '一年{いちねん}を ______。',
        prob_zh: ' *透過(歷經)* 一整年。',
        level: 'N3',
        options: [
            { text: '通{つう}じて', reason: '正確！一段語尾去「る」加「て」。在此表示期間或媒介。' },
            { text: '通{つう}じて', reason: '正確！' },
            { text: '通{とお}って', reason: '正確！(通過空間)' },
            { text: '通{つう}じ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '透過一整年。 \n【用法】「～を通じて」是 N3 以上常見的文法句型。'
    },
    // 3. 感じる (Kanjiru)
    {
        id: 'n3_v1399_kanjiru_1',
        prob: '寒{さむ}さを ______。',
        prob_zh: ' *感到* 寒冷。',
        level: 'N3',
        options: [
            { text: '感{かん}じます', reason: '正確！一段動詞。' },
            { text: '感{かん}じて', reason: '正確！' },
            { text: '感{かん}じ', reason: '正確！' },
            { text: '寒{さむ}い', reason: '錯誤：形容詞。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '感到寒冷。 \n【活用】「感じる」(kanjiru) 是一段動詞。'
    },
    {
        id: 'n3_v1399_kanjiru_2',
        prob: '責任{せきにん}を ______ います。',
        prob_zh: '正在 *感(背負)* 到責任。',
        level: 'N3',
        options: [
            { text: '感{かん}じて', reason: '正確！表示心理狀態的持續。' },
            { text: '感{かん}じ', reason: '錯誤：接續。' },
            { text: '受{う}けて', reason: '正確！(承受)' },
            { text: '分{わ}かって', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '正在感覺到責任。 \n【活用】一段動詞變位。'
    },
    // 4. 関わる (Kakawaru)
    {
        id: 'n3_v1399_kakawaru_1',
        prob: '命{いのち}に ______ 問題{もんだい}。',
        prob_zh: ' *攸關* 性命的問題。',
        level: 'N3',
        options: [
            { text: '関{かか}わる', reason: '正確！五段動詞。表示關係重大、涉及到。' },
            { text: '関係{かんけい}する', reason: '正確！' },
            { text: '関{かか}わり', reason: '正確！(名詞/連用)' },
            { text: '関{かか}わって', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '攸關性命的問題。 \n【語義】「関わる」(kakawaru) 多用於強調影響重大或參與其中。'
    },
    {
        id: 'n3_v1399_kakawaru_2',
        prob: '事件{じけん}に ______。',
        prob_zh: ' *捲入(涉及)* 了事件。',
        level: 'N3',
        options: [
            { text: '関{かか}わりました', reason: '正確！五段過去式。' },
            { text: '関{かか}わって', reason: '正確！' },
            { text: '巻{ま}き込{こ}まれました', reason: '正確！(被捲入，但關聯也可以用關わる)' },
            { text: '関{かか}わ', reason: '錯誤：變化。' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '捲入(涉及)了事件。 \n【活用】五段動詞變位。'
    },
    // 5. 伝わる (Tsutawaru)
    {
        id: 'n3_v1399_tsutawaru_1',
        prob: '文化{ぶんか}が後世{こうせい}に ______。',
        prob_zh: '文化 *傳達* 到後世。',
        level: 'N3',
        options: [
            { text: '伝{つた}わります', reason: '正確！五段自動詞。' },
            { text: '伝{つた}えます', reason: '錯誤：那是人去傳達(他動詞)。' },
            { text: '伝{つた}わり', reason: '正確！' },
            { text: '広{ひろ}がります', reason: '正確！(傳播開來)' }
        ],
        correctIndex: 0,
        tag: 'transitive',
        correctRule: '文化傳達到後世。 \n【自他動詞】「伝わる」(自) vs 「伝える」(他)。'
    },
    {
        id: 'n3_v1399_tsutawaru_2',
        prob: '気持{きも}ちが彼{かれ}に ______。',
        prob_zh: '心情 *傳達(傳到)* 他那裡了。',
        level: 'N3',
        options: [
            { text: '伝{つた}わった', reason: '正確！五段過去式促音便。' },
            { text: '伝{つた}えた', reason: '錯誤：他動詞，語意不合。' },
            { text: '届{とど}いた', reason: '正確！(送達)' },
            { text: '伝{つた}わって', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '心情傳到他那裡了。 \n【活用】五段動詞結尾「る」變為「った」。'
    },
    // 6. 広がる (Hirogaru)
    {
        id: 'n3_v1399_hirogaru_1',
        prob: '噂{うわさ}がまちに ______。',
        prob_zh: '謠言在鎮上 *傳開*。',
        level: 'N3',
        options: [
            { text: '広{ひろ}がります', reason: '正確！五段自動詞。' },
            { text: '広{ひろ}げます', reason: '錯誤：那是人去展開(他動詞)。' },
            { text: '広{ひろ}が', reason: '正確！' },
            { text: '流{なが}れます', reason: '正確！(流傳)' }
        ],
        correctIndex: 0,
        tag: 'transitive',
        correctRule: '謠言在鎮上傳開。 \n【自他動詞】「広がる」(自) vs 「広げる」(他)。'
    },
    {
        id: 'n4_v1399_hirogaru_2',
        prob: '景色{けしき}が ______。',
        prob_zh: '景色 *展開(呈現)* 在眼前。',
        level: 'N3',
        options: [
            { text: '広{ひろ}がっている', reason: '正確！表示廣大空間的展開。' },
            { text: '広{ひろ}げている', reason: '錯誤：他動詞。' },
            { text: '広{ひろ}がる', reason: '正確！' },
            { text: '見{み}える', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '景色展開在眼前。 \n【活用】五段自動詞。'
    },
    // 7. 繋がる (Tsunagaru)
    {
        id: 'n3_v1399_tsunagaru_1',
        prob: '電話{でんわ}が ______。',
        prob_zh: '電話 *通(連接)* 了。',
        level: 'N3',
        options: [
            { text: '繋{つな}がりました', reason: '正確！五段自動詞。' },
            { text: '繋{つな}ぎました', reason: '錯誤：那是人去連接(他動詞)。' },
            { text: '繋{つな}がって', reason: '正確！' },
            { text: '通{つう}じました', reason: '正確！(通了)' }
        ],
        correctIndex: 0,
        tag: 'transitive',
        correctRule: '電話通了。 \n【自他動詞】「繋がる」(自) vs 「繋ぐ」(他)。'
    },
    {
        id: 'n3_v1399_tsunagaru_2',
        prob: '努力{どりょく}が成功{せいこう}に ______。',
        prob_zh: '努力 *連結* 到成功。',
        level: 'N3',
        options: [
            { text: '繋{つな}がる', reason: '正確！表示因果關係或路徑的連結。' },
            { text: '繋{つな}ぎ', reason: '正確！' },
            { text: '繋{つな}がって', reason: '正確！' },
            { text: '結{むす}び付{つ}く', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '努力連結到成功。 \n【活用】五段自動詞。'
    },
    // 8. 見つかる (Mitsukaru)
    {
        id: 'n3_v1399_mitsukaru_1',
        prob: '犯人{はんにん}が ______。',
        prob_zh: '犯人 *被找到* 了。',
        level: 'N3',
        options: [
            { text: '見{み}つかりました', reason: '正確！五段自動詞。' },
            { text: '見{み}つけました', reason: '錯誤：那是人找到了犯人(他動詞)。' },
            { text: '捕{つか}まえました', reason: '正確！(抓到了)' },
            { text: '見{み}つかり', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'transitive',
        correctRule: '犯人被找到了。 \n【自他動詞】「見つかる」(被發現/被找到) vs 「見つける」(人主動找)。'
    },
    {
        id: 'n3_v1399_mitsukaru_2',
        prob: 'いい仕事{しごと}が ______。',
        prob_zh: ' *找到了* 好工作。',
        level: 'N3',
        options: [
            { text: '見{み}つかった', reason: '正確！五段過去式促音便。' },
            { text: '見{み}つけた', reason: '正確！(但用自動詞強調事情本身的發生)' },
            { text: '決{き}まった', reason: '正確！(定下來了)' },
            { text: '見{み}つかり', reason: '錯誤：接續。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '找到了好工作。 \n【活用】五段動詞變位。'
    },
    // 9. 受かる (Ukaru)
    {
        id: 'n3_v1399_ukaru_1',
        prob: '第一志望{だいいちしぼう}に ______。',
        prob_zh: ' *考上* 第一志願。',
        level: 'N3',
        options: [
            { text: '受{う}かりました', reason: '正確！五段自動詞。表示考中、錄取。' },
            { text: '受{う}けました', reason: '錯誤：那是去參加考試。' },
            { text: '受{う}かって', reason: '正確！' },
            { text: '合格{ごうかく}した', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '考上第一志願。 \n【自他動詞】「受かる」(考上) vs 「受ける」(參加考試)。'
    },
    {
        id: 'n3_v1399_ukaru_2',
        prob: ' ______ ったと思{おも}います。',
        prob_zh: '我想應該是 *考上* 了。',
        level: 'N3',
        options: [
            { text: '受{う}か', reason: '正確！五段動詞過去式音便。' },
            { text: '受{う}け', reason: '錯誤：參加。' },
            { text: '受{う}か', reason: '正確！' },
            { text: '受{う}かり', reason: '錯誤：接續。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '我想應該是考上了。 \n【活用】五段動詞「受かる」促音便。'
    },
    // 10. 配る (Kubaru)
    {
        id: 'n3_v1399_kubaru_1',
        prob: 'チラシを ______。',
        prob_zh: ' *分發* 傳單。',
        level: 'N3',
        options: [
            { text: '配{くば}ります', reason: '正確！五段動詞。' },
            { text: '配{くば}って', reason: '正確！(音便)' },
            { text: '配{くば}り', reason: '正確！' },
            { text: '配{くば}ら', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '分發傳單。 \n【活用】「配る」(kubaru) 是五段動詞。'
    },
    {
        id: 'n3_v1399_kubaru_2',
        prob: '資料{しりょう}を ______ ください。',
        prob_zh: '請 *分發* 資料。',
        level: 'N3',
        options: [
            { text: '配{くば}って', reason: '正確！五段促音便。' },
            { text: '配{くば}り', reason: '錯誤：接續。' },
            { text: '渡{わた}して', reason: '正確！(交給)' },
            { text: '配{くば}ら', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請分發資料。 \n【活用】五段動詞結尾「る」變為「って」。'
    }
]

