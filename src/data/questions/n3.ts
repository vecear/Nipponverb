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
