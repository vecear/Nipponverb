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
    }
]
