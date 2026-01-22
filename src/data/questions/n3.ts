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
    // 8. 訪ねる (Tazuneru)
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
    // 9. 訪れる (Otozureru)
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
    // 10. 誘う (Sasou)
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
    // 11. 望む (Nozomu)
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
    // 12. 頼む (Tanomu)
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
    // 13. 頼る (Tayoru)
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
    // 14. 驚く (Odoroku)
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
    // 15. 焦る (Aseru)
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
    // 16. 悟る (Satoru)
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
    // 17. 信じる (Shinjiru)
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
    // 18. 通じる (Tsuujiru)
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
    // 19. 感じる (Kanjiru)
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
    // 20. 関わる (Kakawaru)
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
    // 21. 伝わる (Tsutawaru)
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
    // 22. 広がる (Hirogaru)
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
    // 23. 繋がる (Tsunagaru)
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
    // 24. 見つかる (Mitsukaru)
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
    // 25. 受かる (Ukaru)
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
    // 26. 配る (Kubaru)
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
    },
    // --- SOP Expanded N3 Batch 5 ---
    // 27. 預かる (Azakaru)
    {
        id: 'n3_v1399_azakaru_1',
        prob: '旅行{りょこう}のあいだ、ペットを ______。',
        prob_zh: '旅行期間， ______ 寵物。 (幫忙照看)',
        level: 'N3',
        options: [
            { text: '預{あず}かりました', reason: '正確！五段動詞。表示暫時保管、照看。' },
            { text: '預{あず}けました', reason: '錯誤：那是交給別人照看(他動詞)。' },
            { text: '世話{せわ}をしました', reason: '正確！(照料活動)' },
            { text: '預{あず}かり', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '旅行期間，幫忙照看了寵物。 \n【自他動詞】「預かる」(azakaru，受人之託照看) vs 「預ける」(azekeru，請託他人照看)。使用時需注意主體是誰。'
    },
    {
        id: 'n3_v1399_azakaru_2',
        prob: 'お荷物{にもつ}を ______ します。',
        prob_zh: '讓我為您 ______ 行李吧。 (保管)',
        level: 'N3',
        options: [
            { text: 'お預{あず}かり', reason: '正確！「お＋連用形＋します」謙讓語。' },
            { text: 'お預{あず}け', reason: '錯誤：層級與方向皆不對。' },
            { text: '保管{ほかん}し', reason: '正確！(但敬語用法較少用於口語提議)' },
            { text: '預{あず}か', reason: '錯誤：變化錯誤。' }
        ],
        correctIndex: 0,
        tag: 'keigo',
        correctRule: '我為您保管行李吧。 \n【謙讓語】客服或櫃檯人員主動為客人「保管/看管」物品時，標準謙讓表達為「お預かりします」。'
    },
    // 28. 預ける (Azekeru)
    {
        id: 'n3_v1399_azekeru_1',
        prob: '子供{こども}を保育園{ほいくえん}に ______。',
        prob_zh: '把小孩 ______ 在托兒所。 (寄託/交付)',
        level: 'N3',
        options: [
            { text: '預{あず}けます', reason: '正確！一段動詞。表示委託別人照顧。' },
            { text: '預{あず}かります', reason: '錯誤：那是幫別人照看。' },
            { text: '預{あず}け', reason: '正確！(連用)' },
            { text: '頼{たの}みます', reason: '正確！(拜託幫忙)' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '把小孩寄放在托兒所。 \n【自他動詞】「預ける」(azekeru) 與「預かる」成對，表示將所有物或責任交予他人管理。'
    },
    {
        id: 'n3_v1399_azekeru_2',
        prob: '銀行{ぎんこう}にお金{かせ}を ______。',
        prob_zh: '把錢 ______ 在銀行。 (存款/寄放)',
        level: 'N3',
        options: [
            { text: '預{あず}けました', reason: '正確！一段動詞。' },
            { text: '貯金{ちょきん}した', reason: '正確！(具體的存款行為)' },
            { text: '落{お}とした', reason: '錯誤：錢弄丟了。' },
            { text: '預{あず}けて', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '把錢存進了銀行。 \n【語義】「預ける」廣泛用於將貴重物品委託給專業機構(如銀行或保險箱)保管。'
    },
    // 29. 教わる (Osowaru)
    {
        id: 'n3_v1399_osowaru_1',
        prob: '先生{せんせい}に日本語{にほんご}を ______。',
        prob_zh: '向老師 ______ 日語。 (學習/受教)',
        level: 'N3',
        options: [
            { text: '教{おそ}わりました', reason: '正確！五段動詞。表示從他人那裡學習到位。' },
            { text: '教{おそ}わって', reason: '正確！(音便)' },
            { text: '教{おし}えました', reason: '錯誤：那是「教導」(他動詞)。' },
            { text: '教{おそ}わ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '向老師學習了日語。 \n【自他動詞】「教わる」(受教/學習) vs 「教える」(教導)。動作方向相反。'
    },
    {
        id: 'n3_v1399_osowaru_2',
        prob: '母{はは}から料理{りょうり}を ______ います。',
        prob_zh: '正在向母親 ______ 料理。',
        level: 'N3',
        options: [
            { text: '教{おそ}わって', reason: '正確！五段不規則(讀音)，促音便接持續。' },
            { text: '教{おそ}わり', reason: '正確！' },
            { text: '習{なら}って', reason: '正確！(學習，但教わる強調對象的授予)' },
            { text: '教{おそ}わ', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '正在向母親學習料理。 \n【活用】五段動詞「教わる」。'
    },
    // 30. 植える (Ueru)
    {
        id: 'n3_v1399_ueru_1',
        prob: '庭{にわ}に桜{さくら}の木{き}を ______。',
        prob_zh: '在庭院 ______ 櫻花樹。 (種植)',
        level: 'N3',
        options: [
            { text: '植{う}えました', reason: '正確！一段動詞。' },
            { text: '植{う}わりました', reason: '錯誤：自動詞(長在那裡或種在那裡)。' },
            { text: '植{う}え', reason: '正確！(去ru連用)' },
            { text: '埋{う}めました', reason: '錯誤：掩埋/填埋。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '在庭院種了櫻花樹。 \n【自他動詞】「植える」(他動詞，人去種) 的對應詞為 「植わる」(自動詞，物體被種著/長著)。'
    },
    {
        id: 'n3_v1399_ueru_2',
        prob: '畑{はたけ}に野菜{やさい}を ______。',
        prob_zh: '在田裡 ______ 蔬菜。 (種)',
        level: 'N3',
        options: [
            { text: '植{う}える', reason: '正確！一段動詞辭書形。' },
            { text: '育{そだ}てる', reason: '正確！(培育作物)' },
            { text: '植{う}え', reason: '正確！(連用)' },
            { text: '植{う}えな', reason: '錯誤：否定變位。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '在田裡種蔬菜。 \n【活用】一段(二類)動詞，其變位直接與「る」的有無掛鉤。'
    },
    // 31. 伺う (Ukagau)
    {
        id: 'n3_v1399_ukagau_1',
        prob: '明日{あした}、そちらへ ______。',
        prob_zh: '明天我會 ______ 您那邊。 (拜訪/去)',
        level: 'N3',
        options: [
            { text: '伺{うかが}います', reason: '正確！「行く/来る」的謙讓語。' },
            { text: '参{まい}ります', reason: '正確！(也是謙讓語，但伺う更強調拜訪對象的身分)' },
            { text: 'いらっしゃいます', reason: '錯誤：那是尊敬語(用於指對方的動作)。' },
            { text: '伺{うかが}い', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'keigo',
        correctRule: '明天我會去拜訪您。 \n【謙讓語】「伺う」是「去、來、聽、問」的謙讓語。在此表示去拜訪對方的場所，展現自謙。'
    },
    {
        id: 'n3_v1399_ukagau_2',
        prob: 'お話{はなし}を ______ ました。',
        prob_zh: '______ 了您的話。 (聽聞/請益)',
        level: 'N3',
        options: [
            { text: '伺{うかが}い', reason: '正確！「聞く」的謙讓語。' },
            { text: '聞{き}き', reason: '正確！(普通體的聽)' },
            { text: '仰{おっしゃ}い', reason: '錯誤：那是「說」的尊敬語。' },
            { text: '伺{うかが}っ', reason: '錯誤：音便形態不接ます。' }
        ],
        correctIndex: 0,
        tag: 'keigo',
        correctRule: '聽聞了您的話。 \n【謙讓語】向尊長請教或聽取教誨時，使用「伺う」來表達自己位階較低。'
    },
    // 32. 承る (Uketamawaru)
    {
        id: 'n3_v1399_uketamawaru_1',
        prob: 'ご注問{ちゅうもん}を ______。',
        prob_zh: '______ 您的訂單。 (受理)',
        level: 'N3',
        options: [
            { text: '承{うけたまわ}りました', reason: '正確！五段動詞謙讓語。' },
            { text: '引{ひ}き受{う}けました', reason: '正確！(承接/答應)' },
            { text: '聞{き}きました', reason: '正確！(只是聽到了)' },
            { text: '承{うけたまわ}ら', reason: '錯誤：否定態。' }
        ],
        correctIndex: 0,
        tag: 'keigo',
        correctRule: '受理了您的訂單。 \n【謙讓語】「承る」是「引き受ける、聞く、受ける」等極為正式的謙讓語，常見於客服對應。'
    },
    {
        id: 'n3_v1399_uketamawaru_2',
        prob: 'その件{けん}、確{たし}かに ______ ました。',
        prob_zh: '那件事，我確實 ______ 了。 (聽到了/承接了)',
        level: 'N3',
        options: [
            { text: '承{うけたまわ}り', reason: '正確！五段連用形。' },
            { text: '承{うけたまわ}っ', reason: '錯誤：音便形式不正確。' },
            { text: '伺{うかが}い', reason: '正確！(聽到了，語感稍弱)' },
            { text: '聞き入れ', reason: '錯誤：層次與語法不同。' }
        ],
        correctIndex: 0,
        tag: 'keigo',
        correctRule: '那件事，我確實聽到了。 \n【活用】「承る」為五段不規則動詞，ます形須將「る」變為「り」。'
    },
    // 33. 浮く (Uku)
    {
        id: 'n3_v1399_uku_1',
        prob: '水{みず}に木{き}が ______。',
        prob_zh: '木頭 ______ 在水面上。 (漂浮)',
        level: 'N3',
        options: [
            { text: '浮{う}いています', reason: '正確！五段動詞發生イ音便。' },
            { text: '浮{う}かんで', reason: '正確！(浮かぶ的狀態)' },
            { text: '沈{しず}んで', reason: '錯誤：下沉。' },
            { text: '浮{う}き', reason: '正確！(連用)' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '木頭浮在水面上。 \n【活用】五段動詞「浮く」(uku)，變位規則同「書く」。表示持續的物理狀態。'
    },
    {
        id: 'n3_v1399_uku_2',
        prob: 'チームから ______ しまった。',
        prob_zh: '從隊伍中 ______ 了。 (被孤立/浮現出)',
        level: 'N3',
        options: [
            { text: '浮{う}いて', reason: '正確！五段動詞「く」變「いて」。' },
            { text: '浮{う}き', reason: '正確！' },
            { text: '浮{う}か', reason: '錯誤：否定。' },
            { text: '離{はな}れて', reason: '正確！(遠離/脫離)' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '在隊伍中被孤立了。 \n【比喻】「浮く」除了物理漂浮，也常用於形容性格或表現與周遭「格格不入」。'
    },
    // 34. 訴える (Uttaeru)
    {
        id: 'n3_v1399_uttaeru_1',
        prob: '裁判所{さいばんしょ}に ______。',
        prob_zh: '向法院 ______。 (起訴/訴訟)',
        level: 'N3',
        options: [
            { text: '訴{うった}えます', reason: '正確！一段動詞。' },
            { text: '訴{うった}え', reason: '正確！(連用/名詞)' },
            { text: '裁判{さいばん}した', reason: '正確！(漢字詞)' },
            { text: '訴{うった}われ', reason: '錯誤：變位語法錯誤。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '向法院提出訴訟。 \n【語義】「訴える」指將不滿、爭議提交法律程序，或向他人傾吐痛苦。'
    },
    {
        id: 'n3_v1399_uttaeru_2',
        prob: '痛{いた}みを ______。',
        prob_zh: ' ______ 疼痛。 (訴說/表達)',
        level: 'N3',
        options: [
            { text: '訴{うった}える', reason: '正確！一段動詞。' },
            { text: '我慢{がまん}する', reason: '錯誤：那是忍耐。' },
            { text: '言{い}う', reason: '正確！(說法太一般)' },
            { text: '訴{うった}え', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '訴說疼痛。 \n【用法】在醫療語境下常用於患者向醫生表達身體不適、疼痛。'
    },
    // 35. 生む (Umu)
    {
        id: 'n3_v1399_umu_1',
        prob: '子供{こども}を ______。',
        prob_zh: ' ______ 小孩。 (生產)',
        level: 'N3',
        options: [
            { text: '生{う}みました', reason: '正確！五段動詞。' },
            { text: '生{う}まれた', reason: '錯誤：那是小孩「出生」。' },
            { text: '産{う}みました', reason: '正確！(漢字通用，但名單多標記為生む)' },
            { text: '生{う}み', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '生了小孩。 \n【自他動詞】「生む」(他動詞，人去生) 對應的自動詞/受身形為 「生まれる」(出生)。'
    },
    {
        id: 'n3_v1399_umu_2',
        prob: '努力{どりょく}が成功{せいこう}を ______。',
        prob_zh: '努力 ______ 了成功。 (孕育/產生)',
        level: 'N3',
        options: [
            { text: '生{う}みました', reason: '正確！五段動詞。' },
            { text: '出{だ}した', reason: '正確！(發揮了、做出了)' },
            { text: '生{う}み', reason: '正確！' },
            { text: '生{う}も', reason: '錯誤：變位未然意向不足。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '努力孕育了成功。 \n【比喻】「生む」除了生物學上的生育，也常用於「產生正面或負面結果」。'
    },
    // 36. 疑う (Utagau)
    {
        id: 'n3_v1399_utagau_1',
        prob: '彼{かれ}を ______ わけではない。',
        prob_zh: '並非是 ______ 他。 (懷疑)',
        level: 'N3',
        options: [
            { text: '疑{うたが}う', reason: '正確！五段動詞辭書形。' },
            { text: '疑{うたが}い', reason: '錯誤：接續。' },
            { text: '信{しん}じる', reason: '錯誤：相信。' },
            { text: '疑{うたが}わ', reason: '錯誤：否定變位。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '並非是懷疑他。 \n【語義】「疑う」表示對真實性或動機感到不肯定，常用於否定或猜測。'
    },
    {
        id: 'n3_v1399_utagau_2',
        prob: '犯人{はんにん}だと ______ れています。',
        prob_zh: '被 ______ 為犯人。 (懷疑)',
        level: 'N3',
        options: [
            { text: '疑{うたが}わ', reason: '正確！五段受身形未然。' },
            { text: '疑{うたが}われ', reason: '正確！(完整字根形態)' },
            { text: '疑{うたが}い', reason: '錯誤：連用接續錯誤。' },
            { text: '犯{はん}と', reason: '錯誤：語法不通。' }
        ],
        correctIndex: 0,
        tag: 'passive',
        correctRule: '被懷疑是犯人。 \n【活用】五段動詞「疑う」的受身形規則為：詞尾「う」變為「わ」加上「れる」。'
    },
    // --- SOP Expanded N3 Batch 6 (Systematic Coverage) ---
    // 37. 認める (Mitomeru)
    {
        id: 'n3_v1399_mitomeru_1',
        prob: '自分{じぶん}の失敗{しっぱい}を ______ ことは大切{たいせつ}です。',
        prob_zh: ' ______ 自己的失敗是很重要的。 (承認)',
        level: 'N3',
        options: [
            { text: '認{みと}める', reason: '正確！一段動詞辭書形。' },
            { text: '認{みと}め', reason: '正確！' },
            { text: '許{ゆる}す', reason: '錯誤：原諒。' },
            { text: '認{みと}めら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '承認自己的失敗。 \n【活用】一段動詞「認める」。'
    },
    // 38. 吐く (Haku)
    {
        id: 'n3_v1399_haku_1',
        prob: '深呼吸{しんこきゅう}して、息{いき}を ______ ください。',
        prob_zh: '請深呼吸，把氣 ______ 出來。 (呼氣)',
        level: 'N3',
        options: [
            { text: '吐{は}いて', reason: '正確！五段動詞イ音便。' },
            { text: '吐{は}き', reason: '正確！' },
            { text: '吸{す}って', reason: '錯誤：吸氣。' },
            { text: '吐{は}か', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請吐氣。 \n【自他動詞】「吐く」除了嘔吐，也指呼氣、說出(心裡話)。'
    },
    // 39. 留める (Tomeru)
    {
        id: 'n3_v1399_tomeru_1',
        prob: 'その話{はな}しを心{こころ}に ______ おいてください。',
        prob_zh: '請把那件事 ______ 在心裡。 (留心/記住)',
        level: 'N3',
        options: [
            { text: '留{と}めて', reason: '正確！下一段。常用於止住或留在某處。' },
            { text: '留{と}め', reason: '正確！' },
            { text: '止{や}めて', reason: '錯誤：停掉。' },
            { text: '留{と}まら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請記在心裡。 \n【語義】「留める」常用於「心に留める」(記在心裡)。'
    },
    // 40. 解く (Hodoku)
    {
        id: 'n3_v1399_hodoku_1',
        prob: '靴{くつ}のひもを ______。',
        prob_zh: ' ______ 鞋帶。 (解開/鬆開)',
        level: 'N3',
        options: [
            { text: '解{ほど}きます', reason: '正確！五段動詞。' },
            { text: '解{ほど}いて', reason: '正確！' },
            { text: '解{と}きます', reason: '正確！(音也通，但解開繩結多讀 hodoku)' },
            { text: '解{ほど}か', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '解開鞋帶。 \n【活用】五段動詞「解く」。指解開繩結、包裝。'
    },
    // 41. 愛する (Aisuru)
    {
        id: 'n3_v1399_aisuru_1',
        prob: '家族{かぞく}を ______ います。',
        prob_zh: ' ______ 著家人。 (愛)',
        level: 'N3',
        options: [
            { text: '愛{あい}して', reason: '正確！サ行變格動詞。' },
            { text: '愛{あい}し', reason: '正確！' },
            { text: '愛{あい}する', reason: '正確！' },
            { text: '愛{あい}さ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '深愛家人。 \n【活用】サ行變格「愛する」。變位同「する」。'
    },
    // 42. 諦める (Akirameru)
    {
        id: 'n3_v1399_akirameru_1',
        prob: '最後{さいご}まで ______ ないでください。',
        prob_zh: '到最後都請不要 ______。 (放棄/死心)',
        level: 'N3',
        options: [
            { text: '諦{あきら}め', reason: '正確！一段動詞。' },
            { text: '諦{あきら}めろ', reason: '正確！' },
            { text: '諦{あきら}めた', reason: '正確！' },
            { text: '諦{あきら}めら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'negative',
        correctRule: '請不要放棄。 \n【活用】一段動詞「諦める」。'
    },
    // 43. 飽きる (Akiru)
    {
        id: 'n3_v1399_akiru_1',
        prob: '毎日{まいにち}同{おな}じ料理{りょうり}で ______ ました。',
        prob_zh: '每天都一樣的料理，已經 ______ 了。 (厭倦/膩了)',
        level: 'N3',
        options: [
            { text: '飽{あ}き', reason: '正確！上一段。常用「～に飽きる」。' },
            { text: '飽{あ}い', reason: '錯誤：一段動詞不發生音便。' },
            { text: '飽{あ}く', reason: '正確！(古語/五段)' },
            { text: '飽{あ}きら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '膩了每天的料理。 \n【活用】一段動詞「飽きる」。'
    },
    // 44. 明ける (Akeru)
    {
        id: 'n3_v1399_akeru_1',
        prob: '夜{よ}が ______。',
        prob_zh: '天 ______ 了。 (黎明/亮)',
        level: 'N3',
        options: [
            { text: '明{あ}けました', reason: '正確！一段。常用於天亮、新年或期間結束。' },
            { text: '開{あ}けました', reason: '錯誤：打開。' },
            { text: '明{あ}け', reason: '正確！' },
            { text: '明{あ}けら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '天亮了。 \n【語義】「明ける」指黑暗結束亮起來，或新年到來、期限屆滿。'
    },
    // 45. 与える (Ataeru)
    {
        id: 'n3_v1399_ataeru_1',
        prob: '彼{かれ}にチャンスを ______。',
        prob_zh: ' ______ 他機會。 (給予)',
        level: 'N3',
        options: [
            { text: '与{あた}えます', reason: '正確！一段。用於抽象物或正式給予。' },
            { text: '与{あた}え', reason: '正確！' },
            { text: '与{あた}えて', reason: '正確！' },
            { text: '上{あ}げます', reason: '正確！(送給)' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '給他機會。 \n【語義】「与える」多用於給予抽象物（影響、印像、機會）。'
    },
    // 46. 当たる (Ataru)
    {
        id: 'n3_v1399_ataru_1',
        prob: '寶{たから}くじに ______。',
        prob_zh: ' ______ 彩券。 (中獎)',
        level: 'N3',
        options: [
            { text: '当{あ}たりました', reason: '正確！五段。常用引申為擊中、猜中、中獎。' },
            { text: '中{あ}たりました', reason: '錯誤：語法不通。' },
            { text: '当{あ}たり', reason: '正確！' },
            { text: '当{あ}たら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '中彩券。 \n【活用】五段動詞「当たる」。'
    },
    // 47. 扱う (Atsukau)
    {
        id: 'n3_v1399_atsukau_1',
        prob: '丁寧{ていねい}に ______ ください。',
        prob_zh: '請 ______ 仔細一點。 (對待/處理)',
        level: 'N3',
        options: [
            { text: '扱{あつか}って', reason: '正確！五段促音便。' },
            { text: '扱{あつか}い', reason: '正確！' },
            { text: '扱{あつか}う', reason: '正確！' },
            { text: '扱{あつか}わ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請小心搬運/對待。 \n【活用】五段動詞「扱う」。常用於對待人或處理物品。'
    },
    // 48. 当てる (Ateru)
    {
        id: 'n3_v1399_ateru_1',
        prob: '目{め}に手{て}を ______。',
        prob_zh: '手 ______ 在眼睛上。 (貼著/碰觸)',
        level: 'N3',
        options: [
            { text: '当{あ}てます', reason: '正確！一段他動詞。' },
            { text: '当{あ}たり', reason: '錯誤：自動詞。' },
            { text: '当{あ}て', reason: '正確！' },
            { text: '当{あ}てな', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '手摸著眼睛。 \n【自他動詞】「当てる」(他動詞，人去碰/去對準) 的對應詞為 「当たる」(自動詞)。'
    },
    // 49. 争う (Arasou)
    {
        id: 'n3_v1399_arasou_1',
        prob: '一位{いちい}を ______。',
        prob_zh: ' ______ 第一名。 (競爭/爭奪)',
        level: 'N3',
        options: [
            { text: '争{あらそ}っています', reason: '正確！五段促音便。' },
            { text: '争{あらそ}い', reason: '正確！' },
            { text: '喧嘩{けんか}して', reason: '錯誤：吵架(多指口角)' },
            { text: '争{あらそ}わ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '爭奪第一位。 \n【活用】五段動詞「争う」。指比賽競爭或爭論。'
    },
    // 50. 改める (Aratameru)
    {
        id: 'n3_v1399_aratameru_1',
        prob: '規則{きそく}を ______。',
        prob_zh: ' ______ 規則。 (修改/革新)',
        level: 'N3',
        options: [
            { text: '改{あらた}めます', reason: '正確！一段他動詞。' },
            { text: '改{あらた}まった', reason: '錯誤：自動詞(變正式/嚴肅)。' },
            { text: '換{か}えます', reason: '正確！(更換)' },
            { text: '改{あらた}め', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '修改規則。 \n【自他動詞】「改める」(他動詞，改變/革新) 的對應詞為 「改まる」(自動詞，莊重起來/嚴肅)。'
    },
    // 51. 表す (Arawasu)
    {
        id: 'n3_v1399_arawasu_1',
        prob: '感謝{かんしゃ}の気持{きも}ちを言{こと}葉{ば}で ______。',
        prob_zh: '用言語 ______ 感謝的心情。 (表達)',
        level: 'N3',
        options: [
            { text: '表{あらわ}します', reason: '正確！五段。常用於表達情感、數值、含義。' },
            { text: '現{あらわ}します', reason: '錯誤：那是顯示出實體。' },
            { text: '表{あらわ}し', reason: '正確！' },
            { text: '表{あらわ}さ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '用語言表達謝意。 \n【漢字】情感、數值、含義常用「表す」。'
    },
    // 52. 現す (Arawasu)
    {
        id: 'n3_v1399_arawasu_2',
        prob: '彼{かれ}はついに正体{しょうたい}を ______。',
        prob_zh: '他終於 ______ 了真面目。 (顯露/現出)',
        level: 'N3',
        options: [
            { text: '現{あらわ}しました', reason: '正確！五段他動詞。' },
            { text: '表{あらわ}しました', reason: '錯誤：漢字用法不同。' },
            { text: '現{あらわ}れました', reason: '錯誤：那是自動詞(出現)。' },
            { text: '現{あらわ}し', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '露出了原形。 \n【漢字】實體、影蹤顯現出來常用「現す」。'
    },
    // 53. 現れる (Arawareru)
    {
        id: 'n3_v1399_arawareru_1',
        prob: '太陽{たいよう}が ______。',
        prob_zh: '太陽 ______ 了。 (出現)',
        level: 'N3',
        options: [
            { text: '現{あらわ}れました', reason: '正確！一段自動詞。' },
            { text: '現{あらわ}れ', reason: '正確！' },
            { text: '出{で}て', reason: '正確！' },
            { text: '現{あらわ}れな', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '太陽出現了。 \n【自他動詞】「現れる」(自動詞，出現) 的對應詞為 「現す」(他動詞，顯露)。'
    },
    // 54. 有る (Aru)
    {
        id: 'n3_v1399_aru_1',
        prob: 'その可能性{かのうせい}は ______。',
        prob_zh: '那是 ______ 可能性。 (有的)',
        level: 'N3',
        options: [
            { text: '有{あ}ります', reason: '正確！五段。用於存在、擁有，或抽象權利義務。' },
            { text: 'いらっしゃいます', reason: '錯誤：人(尊敬語)。' },
            { text: '有{あ}り', reason: '正確！' },
            { text: '有{あ}ら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '有那個可能性。 \n【漢字】雖然通常寫假名，但表示擁有、存在時漢字為「有る/在る」。'
    },
    // 55. 合わせる (Awaseru)
    {
        id: 'n3_v1399_awaseru_1',
        prob: '手{て}を ______ お祈{いの}りする。',
        prob_zh: ' ______ 手祈禱。 (合起/配合)',
        level: 'N3',
        options: [
            { text: '合{あ}わせて', reason: '正確！一段他動詞。' },
            { text: '合{あ}って', reason: '錯誤：自動詞(合適/一致/準確)。' },
            { text: '合{あ}わせ', reason: '正確！' },
            { text: '合{あ}わせな', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '雙手合十祈禱。 \n【自他動詞】「合わせる」(他動詞，人使其合在一起、配合、核對) 的對應詞為 「合う」(自動詞)。'
    },
    // 56. 慌てる (Awateru)
    {
        id: 'n3_v1399_awateru_1',
        prob: ' ______ ないで、ゆっくり話{はな}してください。',
        prob_zh: '請不要 ______，慢慢說。 (慌張/匆忙)',
        level: 'N3',
        options: [
            { text: '慌{あわ}て', reason: '正確！一段動詞。' },
            { text: '慌{あわ}てろ', reason: '正確！' },
            { text: '慌{あわ}てて', reason: '正確！' },
            { text: '慌{あわ}てら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'negative',
        correctRule: '別慌，慢慢說。 \n【活用】一段動詞「慌てる」。描述失去冷靜、忙亂的樣子。'
    },
    // --- N3 Batch 6 - Second Questions ---
    {
        id: 'n3_v1399_mitomeru_2',
        prob: '会議{かいぎ}で案{あん}が ______ られた。',
        prob_zh: '提案在會議上被 ______ 了。 (認可)',
        level: 'N3',
        options: [
            { text: '認{みと}め', reason: '正確！一段受身形詞幹。' },
            { text: '認{みと}ま', reason: '錯誤：一段動詞受身形不變詞幹音。' },
            { text: '認{みと}めさ', reason: '錯誤：使役形。' },
            { text: '認{みと}めら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'passive',
        correctRule: '提案被認可了。 \n【活用】一段動詞受身形「認められる」。'
    },
    {
        id: 'n3_v1399_haku_2',
        prob: '酒{さけ}を飲{の}みすぎて ______ しまった。',
        prob_zh: '酒喝太多 ______ 了。 (嘔吐)',
        level: 'N3',
        options: [
            { text: '吐{は}いて', reason: '正確！五段イ音便。' },
            { text: '吐{は}き', reason: '正確！' },
            { text: '飲{の}んで', reason: '錯誤：那是喝。' },
            { text: '吐{は}か', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '喝多嘔吐了。 \n【活用】五段動詞「吐く」。'
    },
    {
        id: 'n3_v1399_tomeru_2',
        prob: '画鋲{がびょう}でポスターを ______。',
        prob_zh: '用圖釘 ______ 海報。 (固定)',
        level: 'N3',
        options: [
            { text: '留{と}める', reason: '正確！一段他動詞。' },
            { text: '留{と}まる', reason: '錯誤：自動詞。' },
            { text: '止{と}める', reason: '正確！(音同，但固定物品多用留める)' },
            { text: '留{と}め', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '用圖釘固定海報。 \n【漢字】「留める」用於固定位置或留在原處。'
    },
    {
        id: 'n3_v1399_hodoku_2',
        prob: '荷物{にもつ}の紐{ひも}を ______。',
        prob_zh: ' ______ 行李的繩子。 (解開)',
        level: 'N3',
        options: [
            { text: '解{ほど}いて', reason: '正確！五段イ音便。' },
            { text: '解{ほど}き', reason: '正確！' },
            { text: '解{と}いて', reason: '正確！(音也通，但解繩多讀 hodoku)' },
            { text: '結{むす}んで', reason: '錯誤：繫上。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '解開繩子。 \n【活用】五段動詞。'
    },
    {
        id: 'n3_v1399_aisuru_2',
        prob: '彼{かれ}は誰{だれ}からも ______ れている。',
        prob_zh: '他被所有人 ______ 著。 (愛)',
        level: 'N3',
        options: [
            { text: '愛{あい}さ', reason: '正確！サ行受身形未然。' },
            { text: '愛{あい}し', reason: '正確！' },
            { text: '愛{あい}せ', reason: '正確！' },
            { text: '愛{あい}しら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'passive',
        correctRule: '他深受大家喜愛。 \n【活用】「愛する」受身形為「愛される」。'
    },
    {
        id: 'n3_v1399_akirameru_2',
        prob: ' ______ くらいなら、最初{さいしょ}からやらない。',
        prob_zh: '與其 ______，不如從一開始就不做。 (放棄)',
        level: 'N3',
        options: [
            { text: '諦{あきら}める', reason: '正確！辭書形修飾くらい。' },
            { text: '諦{あきら}め', reason: '正確！' },
            { text: '諦{あきら}めら', reason: '正確！' },
            { text: '諦{あきら}めた', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '與其放棄。 \n【活用】一段動詞。'
    },
    {
        id: 'n3_v1399_akiru_2',
        prob: '遊{あそ}びに ______ たら帰{かえ}ります。',
        prob_zh: '玩 ______ 了的話就回家。 (厭倦)',
        level: 'N3',
        options: [
            { text: '飽{あ}き', reason: '正確！一段連用形。' },
            { text: '飽{あ}きら', reason: '正確！' },
            { text: '飽{あ}い', reason: '錯誤：變位錯誤。' },
            { text: '飽{あ}くれ', reason: '錯誤：變位錯誤。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '玩膩了。 \n【活用】一段動詞。'
    },
    {
        id: 'n3_v1399_akeru_2',
        prob: '新年{しんねん}あけましておめでとう ______。',
        prob_zh: '恭賀 ______。 (新春/天亮)',
        level: 'N3',
        options: [
            { text: 'ございます', reason: '正確！新年賀詞固定用法。' },
            { text: 'あります', reason: '錯誤：不合敬語法。' },
            { text: 'おります', reason: '錯誤：謙讓語不合此處。' },
            { text: 'みます', reason: '錯誤：語法不通。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '新年快樂。 \n【語義】「あける」在此指舊年結束，新年開始。'
    },
    {
        id: 'n3_v1399_ataeru_2',
        prob: '子供{こども}に食物{たべもの}を ______。',
        prob_zh: ' ______ 小孩食物。 (給予)',
        level: 'N3',
        options: [
            { text: '与{あた}える', reason: '正確！一段動詞。' },
            { text: 'もらう', reason: '錯誤：那是得到。' },
            { text: '食{た}べ', reason: '錯誤：那是吃。' },
            { text: '与{あた}え', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '給小孩食物。 \n【活用】一段動詞。'
    },
    {
        id: 'n3_v1399_ataru_2',
        prob: '日{ひ}の ______ ところに置いてください。',
        prob_zh: '請放在照得到 ______ 的地方。 (曬到/照射)',
        level: 'N3',
        options: [
            { text: '当{あ}たる', reason: '正確！五段辭書形。' },
            { text: '当{あ}たっ', reason: '正確！' },
            { text: '当{あ}たれ', reason: '正確！' },
            { text: '当{あ}たり', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '照得到陽光的地方。 \n【活用】五段動詞。'
    },
    {
        id: 'n3_v1399_atsukau_2',
        prob: 'デリケートな問題{もんだい}を ______。',
        prob_zh: ' ______ 微妙/敏感的問題。 (處理)',
        level: 'N3',
        options: [
            { text: '扱{あつか}う', reason: '正確！五段動詞。' },
            { text: '扱{あつか}い', reason: '正確！' },
            { text: '考{かんが}える', reason: '正確！(考慮)' },
            { text: '話{はな}す', reason: '正確！(說)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '處理敏感問題。 \n【語義】「扱う」是指對某些事情或物品進行處理、對待。'
    },
    {
        id: 'n3_v1399_ateru_2',
        prob: 'クイズの答えを ______ みてください。',
        prob_zh: '請試著 ______ 謎題的答案。 (猜測/對中)',
        level: 'N3',
        options: [
            { text: '当{あ}てて', reason: '正確！一段動詞。' },
            { text: '当{あ}たり', reason: '錯誤：自動詞。' },
            { text: '考{かんが}えて', reason: '正確！(思考)' },
            { text: '言{い}って', reason: '正確！(說)' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '猜猜看。 \n【活用】「当てる」在猜謎語境指「猜中」。'
    },
    {
        id: 'n3_v1399_arasou_2',
        prob: '兄弟{きょうだい}で ______ のはやめなさい。',
        prob_zh: '快停止兄弟間的 ______。 (爭執)',
        level: 'N3',
        options: [
            { text: '争{あらそ}う', reason: '正確！五段辭書形作名詞化修飾。' },
            { text: '喧嘩{けんか}する', reason: '正確！(吵架)' },
            { text: '争{あらそ}わ', reason: '正確！' },
            { text: '争{あらそ}い', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '別爭鬥了。 \n【活用】五段動詞。'
    },
    {
        id: 'n3_v1399_aratameru_2',
        prob: ' ______ て、また伺{うかが}います。',
        prob_zh: ' ______ 時間/改日我會再過來。 (重新來過/改日)',
        level: 'N3',
        options: [
            { text: '改{あらた}めて', reason: '正確！副詞用法，表示改天或重新。' },
            { text: '変{か}えて', reason: '正確！(改變)' },
            { text: 'また', reason: '正確！(再次)' },
            { text: '改{あらた}め', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '改日再訪。 \n【用法】一段動詞「改める」的て形常用作副詞「改めて」(改日、重新)。'
    },
    {
        id: 'n3_v1399_arawasu_3',
        prob: '図{ず}で ______。',
        prob_zh: '用圖表 ______。 (顯示/表達)',
        level: 'N3',
        options: [
            { text: '表{あらわ}します', reason: '正確！五段動詞。' },
            { text: '現{あらわ}します', reason: '錯誤：指顯現。' },
            { text: '見{み}せます', reason: '正確！(給人看)' },
            { text: '書{か}きます', reason: '正確！(畫/寫)' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '用圖表表示。 \n【活用】五段動詞。'
    },
    {
        id: 'n3_v1399_arawasu_4',
        prob: '姿{すがた}を ______。',
        prob_zh: ' ______ 了身姿。 (現出)',
        level: 'N3',
        options: [
            { text: '現{あらわ}しました', reason: '正確！五段動詞。' },
            { text: '表{あらわ}しました', reason: '錯誤：漢字用法不同。' },
            { text: '現{あらわ}れました', reason: '錯誤：自動詞。' },
            { text: '出{で}ました', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '現身。 \n【活用】五段他動詞。'
    },
    {
        id: 'n3_v1399_arawareru_2',
        prob: '顔{かお}に気持{きも}ちが ______ います。',
        prob_zh: '心情 ______ 在臉上。 (顯露/表露)',
        level: 'N3',
        options: [
            { text: '現{あらわ}れて', reason: '正確！一段動詞。常用於情緒流露。' },
            { text: '見{み}えて', reason: '正確！(看得到)' },
            { text: '書{か}いて', reason: '錯誤：心情不會寫在臉上(用此詞時)。' },
            { text: '現{あらわ}れら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '表露在臉上。 \n【活用】一段動詞。'
    },
    {
        id: 'n3_v1399_aru_2',
        prob: '経験{けいけん}が ______ 人を採用{さいよう}します。',
        prob_zh: '採用 ______ 經驗的人。 (有的)',
        level: 'N3',
        options: [
            { text: '有{あ}る', reason: '正確！五段動詞。' },
            { text: '持{も}つ', reason: '正確！(擁有)' },
            { text: 'いらっしゃる', reason: '錯誤：人(敬語)。' },
            { text: 'あ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '有經驗的人。 \n【活用】五段連體形。'
    },
    {
        id: 'n3_v1399_awaseru_2',
        prob: '力{ちから}を ______ 頑張{がんば}りましょう。',
        prob_zh: ' ______ 力量一起加油吧。 (合力)',
        level: 'N3',
        options: [
            { text: '合{あ}わせて', reason: '正確！一段動詞。' },
            { text: '出{だ}して', reason: '正確！(出力)' },
            { text: '合{あ}わ', reason: '正確！' },
            { text: '合{あ}わせら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '合力加油。 \n【活用】一段動詞。'
    },
    {
        id: 'n3_v1399_awateru_2',
        prob: ' ______ て外{そと}に飛{と}び出した。',
        prob_zh: ' ______ 地跑到了外面。 (慌張/匆忙)',
        level: 'N3',
        options: [
            { text: '慌{あわ}て', reason: '正確！一段動詞て形連用。' },
            { text: '急{いそ}いで', reason: '正確！(趕快)' },
            { text: '慌{あわ}てて', reason: '正確！' },
            { text: '慌{あわ}てら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '慌慌張張地跑出去。 \n【活用】一段動詞。'
    }
];
