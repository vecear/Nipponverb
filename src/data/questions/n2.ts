import { StaticQuestion } from './types'

export const n2Questions: StaticQuestion[] = [
    // --- Keigo (Business) ---
    {
        id: 'n2_keigo_1',
        prob: '資料{しりょう}を______。',
        prob_zh: '我看過資料了 (謙讓語)。',
        level: 'N2',
        options: [
            { text: '拝見{はいけん}しました', reason: '正確！「見る」的謙讓語。' },
            { text: 'ご覧{らん}になりました', reason: '錯誤：這是「看」的尊敬語 (請對方看)。' },
            { text: 'お見{み}えになりました', reason: '錯誤：這是「來」的尊敬語。' },
            { text: '見{み}られました', reason: '錯誤：這是被動或尊敬，不是謙讓。' }
        ],
        correctIndex: 0,
        tag: 'keigo',
        correctRule: '【謙讓語】在商務場合表示自己的動作「看」時，使用「拝見する」。這表示自己地位較低，看對方的資料。'
    },
    {
        id: 'n2_keigo_2',
        prob: '駅{えき}まで______ましょうか。',
        prob_zh: '我送您到車站吧？ (謙讓語)',
        level: 'N2',
        options: [
            { text: 'お送{おく}りし', reason: '正確！「お～する」是標準謙讓語句型。' },
            { text: 'お送{おく}りになり', reason: '錯誤：這是尊敬語 (對方送)。' },
            { text: '送{おく}られ', reason: '錯誤：被動或尊敬。' },
            { text: '送{おく}らせて', reason: '錯誤：使役 (讓我送)，語氣稍強，不如選項1自然。' }
        ],
        correctIndex: 0,
        tag: 'keigo',
        correctRule: '【謙讓語】「お＋動詞ます形去masu＋する」是標準謙讓語，用於「我為您做某事」。'
    },
    // --- Passive (Attributes) ---
    {
        id: 'n2_passive_1',
        prob: 'このお寺{てら}は、600年{ねん}前{まえ}に______。',
        prob_zh: '這座寺廟是600年前______ (被建造的)。',
        level: 'N2',
        options: [
            { text: '建{た}てられました', reason: '正確！客觀事實的受身形。' },
            { text: '建{た}てさせました', reason: '錯誤：使役形 (讓某人建)。' },
            { text: '建{た}ててありました', reason: '錯誤：狀態存續，語意不精確。' },
            { text: '建{た}ちました', reason: '錯誤：自動詞 (蓋好了)，重點在建造者不明的被動。' }
        ],
        correctIndex: 0,
        tag: 'passive',
        correctRule: '【客觀受身】當主語是無生物 (如建築物)，且不強調動作主時，動詞使用受身形「建てられる」來描述歷史事實。'
    },
    // --- Advanced Grammar ---
    {
        id: 'n2_grammar_1',
        prob: '彼{かれ}なら、必{かなら}ず成功{せいこう}______。',
        prob_zh: '如果是他的話，______會成功吧 (斷定)。',
        level: 'N2',
        options: [
            { text: 'するに違{ちが}いない', reason: '正確！表示強烈的確信。' },
            { text: 'するはずがない', reason: '錯誤：表示「不可能成功」。' },
            { text: 'するわけではない', reason: '錯誤：表示「並非成功」。' },
            { text: 'するに決{き}まらない', reason: '錯誤：語法錯誤，應該是「決まっている」。' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '【に違いない】接在動詞/名詞/形容詞後，表示說話者根據根據做出的強烈推測，「一定是...」。'
    },
    {
        id: 'n2_grammar_2',
        prob: '勉強{べんきょう}しないことには、合格{ごうかく}______。',
        prob_zh: '如果不唸書的話，______合格。',
        level: 'N2',
        options: [
            { text: 'できない', reason: '正確！「～ないことには...ない」是後項否定的慣用句。' },
            { text: 'できる', reason: '錯誤：語意矛盾。' },
            { text: 'できそうだ', reason: '錯誤：語意矛盾。' },
            { text: 'してしまう', reason: '錯誤：不知所云。' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '【～ないことには～ない】這是一個 N2 必考句型，意思是「如果不（做前項），就無法（後項）」。後句必須接否定或消極的結果。'
    }
]
