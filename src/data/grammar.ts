// JLPT Grammar Questions — UnifiedQuestion format
// All questions have structured explanations with 【考點】【解析】【相關詞比較】【易錯點】

import { UnifiedQuestion } from './questions/types'
import { unifiedToQuestion } from '../utils/questionAdapters'

export const grammarQuestions: UnifiedQuestion[] = [
    // ─── N5 Level ───
    {
        id: 'g_n5_001',
        category: 'grammar',
        level: 'N5',
        stem: '明日{あした}、学校{がっこう}___行{い}きます。',
        stemZh: '明天要去學校。',
        options: [
            { text: 'へ', reason: '正確！「へ」表示移動的方向。' },
            { text: 'に', reason: '「に」也可表示目的地，但「へ」更強調方向感。兩者在此可互換。' },
            { text: 'で', reason: '「で」表示動作發生的場所（如：学校で勉強する），不表示目的地。' },
            { text: 'を', reason: '「を」是受詞助詞（如：本を読む），不用於目的地。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '方向助詞「へ」的用法',
            analysis: '「へ」用於表示移動的方向或目的地，接在場所名詞後面。',
            comparisons: [
                '学校{がっこう}へ行{い}く：去學校（強調方向）',
                '学校{がっこう}に行{い}く：去學校（強調到達點）',
                '学校{がっこう}で勉強{べんきょう}する：在學校念書（動作場所）',
            ],
            commonMistakes: [
                '○ 学校へ行きます / × 学校を行きます → 「を」不能接移動動詞表目的地',
            ],
        },
        tags: ['particle', 'direction'],
    },
    {
        id: 'g_n5_002',
        category: 'grammar',
        level: 'N5',
        stem: '毎日{まいにち}、図書館{としょかん}___勉強{べんきょう}します。',
        stemZh: '每天在圖書館念書。',
        options: [
            { text: 'で', reason: '正確！「で」表示動作進行的場所。' },
            { text: 'に', reason: '「に」表示存在地點或目的地，不用於動作場所。' },
            { text: 'へ', reason: '「へ」表示移動方向，但「勉強する」不是移動動詞。' },
            { text: 'を', reason: '「を」是受詞助詞，不表示場所。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '場所助詞「で」的用法',
            analysis: '「で」表示動作進行的場所，用在「做某事的地方」。',
            comparisons: [
                '図書館{としょかん}で勉強{べんきょう}する：在圖書館念書（動作場所）',
                '図書館{としょかん}に本{ほん}がある：圖書館裡有書（存在地點用「に」）',
            ],
            commonMistakes: [
                '○ 図書館で勉強する / × 図書館に勉強する → 動作場所用「で」不用「に」',
                '存在的場所用「に」：机{つくえ}の上{うえ}に本がある',
            ],
        },
        tags: ['particle', 'location'],
    },
    {
        id: 'g_n5_003',
        category: 'grammar',
        level: 'N5',
        stem: '日本語{にほんご}___難{むずか}しいですが、面白{おもしろ}いです。',
        stemZh: '日語雖然困難，但很有趣。',
        options: [
            { text: 'は', reason: '正確！「は」標示句子的主題（話題）。' },
            { text: 'が', reason: '「が」用於新資訊或主語強調，此處是對已知話題評論，用「は」。' },
            { text: 'を', reason: '「を」是受詞助詞，這裡不是受詞關係。' },
            { text: 'に', reason: '「に」不用於主題標示。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '主題助詞「は」vs 主語助詞「が」',
            analysis: '「は」標示句子的主題（Topic），用於已知資訊或對比。「が」標示主語，用於新資訊或疑問。',
            comparisons: [
                '日本語は難しい：日語（這個話題）很難（已知話題的評論）',
                '誰{だれ}が来{き}ましたか：誰來了？（疑問＝新資訊用「が」）',
            ],
            commonMistakes: [
                '○ 日本語は難しい / × 日本語が難しい → 已知話題用「は」',
                '「が」的典型場景：初次提及、疑問詞、存在句',
            ],
        },
        tags: ['particle', 'topic'],
    },
    {
        id: 'g_n5_004',
        category: 'grammar',
        level: 'N5',
        stem: '昨日{きのう}、友達{ともだち}___会{あ}いました。',
        stemZh: '昨天見了朋友。',
        options: [
            { text: 'に', reason: '正確！「会う」搭配「に」表示會面的對象。' },
            { text: 'を', reason: '「を」是受詞助詞，「会う」不接「を」。' },
            { text: 'と', reason: '「と」表示一起做某事（如：友達と遊ぶ），但「会う」固定搭配「に」。' },
            { text: 'で', reason: '「で」表示場所或手段，不表示會面對象。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「〜に会{あ}う」的助詞搭配',
            analysis: '「会{あ}う」是自動詞，搭配助詞「に」表示會面的對象。這是固定搭配。',
            comparisons: [
                '友達{ともだち}に会{あ}う：見朋友（固定搭配）',
                '友達{ともだち}と遊{あそ}ぶ：和朋友玩（「と」=一起）',
                '友達{ともだち}を呼{よ}ぶ：叫朋友（他動詞接「を」）',
            ],
            commonMistakes: [
                '○ 友達に会う / × 友達を会う → 「会う」是自動詞，不接「を」',
            ],
        },
        tags: ['particle', 'verb-collocation'],
    },
    {
        id: 'g_n5_005',
        category: 'grammar',
        level: 'N5',
        stem: 'コーヒー___紅茶{こうちゃ}、どちらが好{す}きですか。',
        stemZh: '咖啡和紅茶，你比較喜歡哪個？',
        options: [
            { text: 'と', reason: '正確！「AとB、どちら」是比較兩者的固定句型。' },
            { text: 'や', reason: '「や」列舉多個事物中的部分（如：りんごやみかん），不用於二擇一比較。' },
            { text: 'か', reason: '「か」用於「A か B」表示「或者」，但與「どちら」搭配時用「と」。' },
            { text: 'も', reason: '「も」表示「也」（如：コーヒーも好き），不用於比較句型。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '比較句型「AとB、どちら」',
            analysis: '比較兩者時使用「AとB、どちらが〜ですか」。「と」連接兩個比較對象。',
            comparisons: [
                'AとB、どちらが好き：A和B哪個喜歡（二擇一比較）',
                'AやBなど：A啦B啦等等（部分列舉）',
                'AかB：A或者B（選擇）',
            ],
            commonMistakes: [
                '○ コーヒーと紅茶、どちら / × コーヒーや紅茶、どちら',
                '「や」是模糊列舉，「と」是全部列出',
            ],
        },
        tags: ['particle', 'comparison'],
    },

    // ─── N4 Level ───
    {
        id: 'g_n4_001',
        category: 'grammar',
        level: 'N4',
        stem: '雨{あめ}が降{ふ}って___、試合{しあい}は中止{ちゅうし}になった。',
        stemZh: '因為下了雨，比賽就取消了。',
        options: [
            { text: 'しまった', reason: '正確！「〜てしまう」表示遺憾或完了，這裡表達不如意的結果。' },
            { text: 'いた', reason: '「〜ていた」表示持續狀態（一直在下雨），但句意是「結果取消了」，強調結果用「しまう」。' },
            { text: 'おいた', reason: '「〜ておく」表示事前準備，語意不合。' },
            { text: 'みた', reason: '「〜てみる」表示嘗試做某事，雨不能「嘗試下」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '補助動詞「〜てしまう」（遺憾/完了）',
            analysis: '「〜てしまう」有兩個含義：①表示遺憾的結果 ②表示動作的完了。本句表達「（不幸地）下了雨，結果比賽取消了」。',
            comparisons: [
                '〜てしまう：遺憾/完了（降ってしまった＝不幸下了雨）',
                '〜ている：持續/狀態（降っている＝正在下雨）',
                '〜ておく：事先準備（買っておく＝先買好）',
                '〜てみる：嘗試（食べてみる＝吃吃看）',
            ],
            commonMistakes: [
                '口語常縮約：〜てしまう → 〜ちゃう（食べちゃった）',
                '〜でしまう → 〜じゃう（飲んじゃった）',
            ],
        },
        tags: ['auxiliary-verb', 'te-form'],
    },
    {
        id: 'g_n4_002',
        category: 'grammar',
        level: 'N4',
        stem: '先生{せんせい}に___もらいました。',
        stemZh: '請老師教了我。',
        options: [
            { text: '教{おし}えて', reason: '正確！「〜てもらう」接動詞て形，表示得到別人的恩惠。' },
            { text: '教{おし}えられて', reason: '「教えられる」是被動形。「被教」語感不同，「もらう」強調感恩。' },
            { text: '教{おし}えさせて', reason: '「教えさせる」是使役形，意思變成「讓（某人）教」。' },
            { text: '教{おし}えて', reason: '正確！「〜てもらう」接動詞て形，表示得到別人的恩惠。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '授受動詞「〜てもらう」',
            analysis: '「〜てもらう」表示接受別人為自己做某事的恩惠。施惠者用「に」標示。',
            comparisons: [
                '〜てもらう：接受恩惠（先生に教えてもらう＝請老師教）',
                '〜てくれる：對方主動給恩惠（先生が教えてくれた＝老師教了我）',
                '〜てあげる：給予恩惠（友達に教えてあげる＝教朋友）',
            ],
            commonMistakes: [
                '○ 先生に教えてもらう / × 先生が教えてもらう → 施惠者用「に」',
            ],
        },
        tags: ['giving-receiving', 'te-form'],
    },
    {
        id: 'g_n4_003',
        category: 'grammar',
        level: 'N4',
        stem: '日本{にほん}に___ことがありますか。',
        stemZh: '你去過日本嗎？',
        options: [
            { text: '行{い}った', reason: '正確！「〜たことがある」用動詞た形，表示過去的經驗。' },
            { text: '行{い}く', reason: '「行くことがある」表示「有時候會去」（習慣），不是經驗。' },
            { text: '行{い}って', reason: '「行って」是て形，不能直接接「ことがある」。' },
            { text: '行{い}っている', reason: '「行っていることがある」語法不自然，經驗用た形。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '經驗句型「〜たことがある」',
            analysis: '「動詞た形＋ことがある」表示過去曾經有過某種經驗。否定為「〜たことがない」。',
            comparisons: [
                '日本に行ったことがある：去過日本（經驗）',
                '日本に行くことがある：有時候會去日本（習慣頻率）',
            ],
            commonMistakes: [
                '○ 行ったことがある（經驗） / × 行くことがある（頻率）',
                '否定：行ったことがない＝沒去過',
            ],
        },
        tags: ['experience', 'ta-form'],
    },
    {
        id: 'g_n4_004',
        category: 'grammar',
        level: 'N4',
        stem: '宿題{しゅくだい}を___ながら、音楽{おんがく}を聞{き}いています。',
        stemZh: '一邊做功課，一邊聽音樂。',
        options: [
            { text: 'し', reason: '正確！「〜ながら」接動詞ます形去掉「ます」。「します」→「し」。' },
            { text: 'する', reason: '「する」是辭書形，「ながら」需要ます形詞幹（去ます）。' },
            { text: 'して', reason: '「して」是て形，不能接「ながら」。' },
            { text: 'した', reason: '「した」是た形（過去），「ながら」表示同時進行，不接過去式。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '同時進行「〜ながら」',
            analysis: '「動詞ます形詞幹＋ながら」表示兩個動作同時進行。主要動作放在後面。',
            comparisons: [
                'し＋ながら：一邊做…（します→し）',
                '食{た}べ＋ながら：一邊吃…（食べます→食べ）',
                '聞{き}き＋ながら：一邊聽…（聞きます→聞き）',
            ],
            commonMistakes: [
                '○ しながら / × するながら / × してながら',
                '接續：ます形去掉「ます」＋ながら',
            ],
        },
        tags: ['simultaneous', 'masu-form'],
    },

    // ─── N3 Level ───
    {
        id: 'g_n3_001',
        category: 'grammar',
        level: 'N3',
        stem: '彼{かれ}は優{やさ}しい___、時々{ときどき}厳{きび}しい。',
        stemZh: '他很溫柔，但有時候很嚴格。',
        options: [
            { text: 'が', reason: '正確！「が」用於對比轉折，前後句形成對照。' },
            { text: 'けど', reason: '「けど」也表轉折，但較口語化。書面或正式場合更常用「が」。' },
            { text: 'のに', reason: '「のに」帶有不滿或意外感（明明…卻…），此句只是平靜對比。' },
            { text: 'ものの', reason: '「ものの」是更書面的轉折，且常接事實判斷，此處用「が」更自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '轉折接續「が」的用法',
            analysis: '「が」作為接續助詞，用於連接兩個對比或轉折的內容。語氣中性，不帶情感。',
            comparisons: [
                '〜が：中性轉折（優しいが、厳しい＝溫柔但嚴格）',
                '〜けど：口語轉折（優しいけど、厳しい）',
                '〜のに：帶不滿/意外（優しいのに、怒った＝明明很溫柔卻生氣了）',
            ],
            commonMistakes: [
                '「が」：平靜對比 / 「のに」：帶有意外或不滿的語氣',
            ],
        },
        tags: ['conjunction', 'contrast'],
    },
    {
        id: 'g_n3_002',
        category: 'grammar',
        level: 'N3',
        stem: '雨{あめ}が降{ふ}りそう___、傘{かさ}を持{も}って行{い}きましょう。',
        stemZh: '好像要下雨了，帶傘去吧。',
        options: [
            { text: 'だから', reason: '正確！「だから」表示因果關係（因為…所以…）。' },
            { text: 'なのに', reason: '「なのに」表示意外轉折（明明…卻…），這裡是因果不是轉折。' },
            { text: 'ても', reason: '「ても」表示讓步（即使…也…），語意不合。' },
            { text: 'ば', reason: '「ば」是條件（如果…），但「降りそうば」語法錯誤。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '因果接續「だから」',
            analysis: '「だから」表示前句是原因、後句是結果或建議。可用於句首或句中。',
            comparisons: [
                'だから：因此（原因→結果）',
                'なのに：明明…卻…（期待→落空）',
                'ても：即使…也…（讓步）',
            ],
            commonMistakes: [
                '「だから」前接名詞/な形容詞；「から」前接動詞/い形容詞',
                '○ 雨だから / ○ 降るから / × 雨から',
            ],
        },
        tags: ['conjunction', 'cause-effect'],
    },
    {
        id: 'g_n3_003',
        category: 'grammar',
        level: 'N3',
        stem: '彼女{かのじょ}は日本語{にほんご}が話{はな}せる___、漢字{かんじ}は読{よ}めない。',
        stemZh: '她會說日語，但不會讀漢字。',
        options: [
            { text: 'が', reason: '正確！「が」表示對比轉折：能說但不能讀。' },
            { text: 'し', reason: '「し」是並列理由（…而且…），這裡是轉折不是並列。' },
            { text: 'のに', reason: '「のに」帶意外語氣（明明會說卻不會讀），但此處只是陳述事實。' },
            { text: 'ても', reason: '「ても」表讓步（即使會說也不會讀），語感不同於單純對比。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '能力對比中的「が」',
            analysis: '「が」連接兩個對比的能力描述，表達客觀的事實對照。',
            comparisons: [
                '話せるが、読めない：會說但不會讀（事實對比）',
                '話せるのに、読めない：明明會說卻不會讀（意外）',
                '話せるし、読める：會說而且會讀（並列）',
            ],
        },
        tags: ['conjunction', 'contrast', 'ability'],
    },

    // ─── N2 Level ───
    {
        id: 'g_n2_001',
        category: 'grammar',
        level: 'N2',
        stem: '努力{どりょく}した___、合格{ごうかく}できなかった。',
        stemZh: '儘管努力了，還是沒能合格。',
        options: [
            { text: 'にもかかわらず', reason: '正確！「にもかかわらず」表示逆接（儘管…卻…）。' },
            { text: 'おかげで', reason: '「おかげで」表示正面原因（多虧了…），語意完全相反。' },
            { text: 'ために', reason: '「ために」表示目的或原因，不表示逆接。' },
            { text: 'ことに', reason: '「ことに」用於「〜ことに（は）」表示感嘆，搭配方式不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '逆接表現「にもかかわらず」',
            analysis: '「にもかかわらず」意為「儘管…卻…」，強調前後句的矛盾。較書面化。',
            comparisons: [
                'にもかかわらず：儘管…卻…（正式書面）',
                'のに：明明…卻…（日常口語）',
                'けれども：雖然…但是…（中性）',
            ],
            commonMistakes: [
                '接續：名詞/動詞普通形＋にもかかわらず',
                '○ 努力したにもかかわらず / ○ 雨にもかかわらず',
            ],
        },
        tags: ['conjunction', 'adversative', 'formal'],
    },
    {
        id: 'g_n2_002',
        category: 'grammar',
        level: 'N2',
        stem: '彼{かれ}は忙{いそが}しい___、手伝{てつだ}ってくれた。',
        stemZh: '他雖然很忙，還是幫了我。',
        options: [
            { text: 'にもかかわらず', reason: '正確！「にもかかわらず」表示逆接（儘管忙卻幫忙了）。' },
            { text: 'ばかりか', reason: '「ばかりか」意為「不僅…而且…」，是遞進不是逆接。' },
            { text: 'うえに', reason: '「うえに」意為「而且/加上」，是添加不是逆接。' },
            { text: 'わりに', reason: '「わりに」意為「以…來說算是…」，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '逆接「にもかかわらず」（正面結果）',
            analysis: '「にもかかわらず」不一定接負面結果，也可用於正面意外（忙卻還是幫忙了）。',
            comparisons: [
                'にもかかわらず：儘管…（可接正面或負面結果）',
                'ばかりか：不僅…而且…（遞進）',
                'わりに(は)：以…來說算是…（超出預期）',
            ],
        },
        tags: ['conjunction', 'adversative', 'formal'],
    },

    // ─── N1 Level ───
    {
        id: 'g_n1_001',
        category: 'grammar',
        level: 'N1',
        stem: '彼{かれ}の態度{たいど}___、許{ゆる}すことができない。',
        stemZh: '對於他的態度，無法原諒。',
        options: [
            { text: 'には', reason: '正確！「には」強調主題＋對象，表示「對於…」。' },
            { text: 'では', reason: '「では」表示場所或條件（在…），不合此處語意。' },
            { text: 'とは', reason: '「とは」表示定義或驚訝（所謂…/竟然…），不合語境。' },
            { text: 'からは', reason: '「からは」表示「既然…就…」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '強調助詞「には」的主題標示',
            analysis: '「には」是「に」+「は」的組合。「に」表示對象/基準，「は」提升為主題並帶有對比語感。',
            comparisons: [
                'には：對於…（強調對象主題）',
                'では：在…的情況下/用…（場所/手段主題化）',
                'とは：所謂…是…/竟然…（定義或驚訝）',
                'からは：既然…就…（義務/決心）',
            ],
            commonMistakes: [
                '「には」常見搭配：〜には〜ない（對於…無法…）',
                '「には」vs「にとって」：にとって 更明確表示「對某人而言」',
            ],
        },
        tags: ['particle', 'emphasis', 'formal'],
    },
]

// ─── Public API (backward compatible) ───

function formatGrammarAsQuestion(question: UnifiedQuestion) {
    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5)
    const newCorrectIndex = shuffledOptions.findIndex(
        o => o.text === question.options[question.correctIndex].text
    )
    return unifiedToQuestion({
        ...question,
        options: shuffledOptions,
        correctIndex: newCorrectIndex,
    })
}

export function generateGrammarQuestion(level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1' = 'N5') {
    const levelQuestions = grammarQuestions.filter(q => q.level === level)
    if (levelQuestions.length === 0) {
        return generateGrammarQuestion('N5')
    }

    const question = levelQuestions[Math.floor(Math.random() * levelQuestions.length)]
    return formatGrammarAsQuestion(question)
}

export function getGrammarQuestionBank(level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1') {
    return grammarQuestions.filter(q => q.level === level).map(formatGrammarAsQuestion)
}

export function getGrammarQuestionCount(level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'): number {
    return grammarQuestions.filter(q => q.level === level).length
}
