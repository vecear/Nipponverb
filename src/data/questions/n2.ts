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
    },
    {
        id: 'n2_gen_keigo_2',
        prob: '明日{あした}の午前{ごぜん}中{ちゅう}に ______ 伺{うかが}います。',
        prob_zh: '明天上午我會 *去拜訪*。',
        level: 'N2',
        options: [
            { text: 'そちらへ', reason: '正確！配合謙讓語「伺う」使用方向詞。' },
            { text: 'こちらへ', reason: '錯誤：方向不對。' },
            { text: 'そこに', reason: '錯誤：不夠客氣。' },
            { text: 'あちらに', reason: '錯誤：方向不對。' }
        ],
        correctIndex: 0,
        tag: 'keigo-humble',
        correctRule: '明天上午我會去拜訪。 \n【謙讓語】「伺う」(ukagau) 是「行く、來る、聞く」的謙讓語，此處表示去拜訪對方的場所。'
    },
    // --- SOP Expanded N2 Batch 2 ---
    // 1. 防ぐ (Fusegu)
    {
        id: 'n2_v1399_fusegu_1',
        prob: '風邪{かぜ}を ______ ために、手{て}を洗{あら}います。',
        prob_zh: '為了 *預防* 感冒，要勤洗手。',
        level: 'N2',
        options: [
            { text: '防{ふせ}ぐ', reason: '正確！五段動詞辭書形。' },
            { text: '防{ふせ}ぎ', reason: '錯誤：連用形。' },
            { text: '防{ふせ}げ', reason: '錯誤：可能/命令。' },
            { text: '守{まも}る', reason: '錯誤：語義不同(保護)。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '為了預防感冒，要勤洗手。 \n【詞彙】「防ぐ」(fusegu) 表示在不好的事情發生前阻止它。'
    },
    {
        id: 'n2_v1399_fusegu_2',
        prob: '事故{じこ}を未然{みぜん}に ______。',
        prob_zh: '將事故 *防範* 於未然。',
        level: 'N2',
        options: [
            { text: '防{ふせ}ぎます', reason: '正確！五段動詞ます形。' },
            { text: '防{ふせ}いだ', reason: '正確！(過去式)' },
            { text: '防{ふせ}ごう', reason: '錯誤：意向。' },
            { text: '防{ふせ}げ', reason: '錯誤：命令。' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '將事故防範於未然。 \n【活用】五段動詞「防ぐ」變位。'
    },
    // 2. 励む (Hagemu)
    {
        id: 'n2_v1399_hagemu_1',
        prob: '学業{がくぎょう}に ______ んでいます。',
        prob_zh: '正致力於 *勤勉* 學習。',
        level: 'N2',
        options: [
            { text: '励{はげ}み', reason: '正確！五段動詞連用形。' },
            { text: '励{はげ}ま', reason: '錯誤：未然形。' },
            { text: '励{はげ}め', reason: '錯誤：可能。' },
            { text: '励{はげ}み', reason: '正確！(此處考連用接續)' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '正致力於勤勉學習。 \n【音便】五段動詞「励む」撥音便「励んでいる」。'
    },
    {
        id: 'n2_v1399_hagemu_2',
        prob: '日々{ひび}の練習{れんしゅう}に ______ ことが大切{たいせつ}だ。',
        prob_zh: '每天 *努力* 練習是很重要的。',
        level: 'N2',
        options: [
            { text: '励{はげ}む', reason: '正確！辭書形接名詞句。' },
            { text: '励{はげ}ます', reason: '錯誤：這是他動詞(鼓勵他人)。' },
            { text: '励{はげ}み', reason: '錯誤：連用。' },
            { text: '励{はげ}め', reason: '錯誤：命令。' }
        ],
        correctIndex: 0,
        tag: 'transitive',
        correctRule: '每天努力練習是很重要的。 \n【自他動詞】「励む」(自，自己努力) 與 「励ます」(他，鼓勵他人)。'
    },
    // 3. 恵む (Megumu)
    {
        id: 'n2_v1399_megumu_1',
        prob: '貧{まず}しい人{ひと}にお金{かね}を ______。',
        prob_zh: ' *施捨* 錢給窮人。',
        level: 'N2',
        options: [
            { text: '恵{めぐ}む', reason: '正確！「恵む」表示施予恩惠或財物。' },
            { text: '恵{めぐ}まれる', reason: '錯誤：此處為主動施捨(受惠用被動)。' },
            { text: '恵{めぐ}み', reason: '錯誤：連用。' },
            { text: '授{さず}ける', reason: '錯誤：層級不同(授與)。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '施捨錢給窮人。 \n【詞彙】「恵む」(megumu) 帶有一種上對下的施與感。'
    },
    {
        id: 'n2_v1399_megumu_2',
        prob: '自然{しぜん}の恵{めぐ}みに ______ います。',
        prob_zh: '深受自然恩惠之 *受惠*。',
        level: 'N2',
        options: [
            { text: '恵{めぐ}まれて', reason: '正確！表示受惠的狀態，用被動。' },
            { text: '恵{めぐ}んで', reason: '錯誤：這是主動施捨。' },
            { text: '恵{めぐ}み', reason: '錯誤：連用。' },
            { text: '恵{めぐ}まれ', reason: '正確！(連用)' }
        ],
        correctIndex: 0,
        tag: 'passive',
        correctRule: '深受自然恩惠之受惠。 \n【受身】「恵まれる」常用於表示天賦、環境優越。'
    },
    // 4. 悔やむ (Kuyamu)
    {
        id: 'n2_v1399_kuyamu_1',
        prob: '過去{かこ}の失敗{しっぱい}を ______ も始{はじ}まらない。',
        prob_zh: '即使 *後悔* 過去的失敗也無濟於事。',
        level: 'N2',
        options: [
            { text: '悔{く}やんで', reason: '正確！五段撥音便。' },
            { text: '悔{く}やみ', reason: '正確！(連用)' },
            { text: '悔{く}やま', reason: '錯誤：否定。' },
            { text: '悔{く}やし', reason: '錯誤：這是形容詞。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '即使後悔過去的失敗也無濟於事。 \n【活用】「悔やむ」為五段動詞。'
    },
    {
        id: 'n2_v1399_kuyamu_2',
        prob: 'あの時{とき}の決断{けつだん}を ______。',
        prob_zh: ' *後悔* 當初的決定。',
        level: 'N2',
        options: [
            { text: '悔{く}やんでいます', reason: '正確！表示持續的後悔。' },
            { text: '悔{く}やみました', reason: '錯誤：過去式，但語感不如進行式。' },
            { text: '悔{く}やむべきだ', reason: '錯誤：應該後悔。' },
            { text: '悔{く}やませる', reason: '錯誤：使役。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '後悔當初的決定。 \n【詞彙】「悔やむ」表示對過去的行為或決定感到後悔。'
    },
    // 5. 恨む (Uramu)
    {
        id: 'n2_v1399_uramu_1',
        prob: '彼{かれ}を ______ 気持ち{きもち}はない。',
        prob_zh: '沒有 *怨恨* 他的心情。',
        level: 'N2',
        options: [
            { text: '恨{うら}む', reason: '正確！辭書形修飾名詞。' },
            { text: '恨{うら}み', reason: '錯誤：連用形。' },
            { text: '恨{うら}んで', reason: '錯誤：音便。' },
            { text: '恨{うら}め', reason: '錯誤：命令。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '沒有怨恨他的心情。 \n【詞彙】「恨む」(uramu) 表示對某人懷有怨恨或不滿。'
    },
    {
        id: 'n2_v1399_uramu_2',
        prob: '人{ひと}を ______ よりも、自分{じぶん}を變えよう。',
        prob_zh: '與其 *怨恨* 別人，不如改變自己吧。',
        level: 'N2',
        options: [
            { text: '恨{うら}む', reason: '正確！辭書形。' },
            { text: '恨{うら}め', reason: '錯誤：命令。' },
            { text: '恨{うら}み', reason: '錯誤：連用。' },
            { text: '恨{うら}ま', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '與其怨恨別人，不如改變自己吧。 \n【詞彙】「恨む」(uramu) 表示對他人抱持強烈不滿。'
    },
    // 6. 羨む (Urayamu)
    {
        id: 'n2_v1399_urayamu_1',
        prob: '彼{かれ}の才能{さいのう}を ______。',
        prob_zh: ' *羨慕* 他的才能。',
        level: 'N2',
        options: [
            { text: '羨{うらや}みます', reason: '正確！五段動詞ます形。' },
            { text: '羨{うらや}ましい', reason: '錯誤：這是形容詞，通常不接名詞。' },
            { text: '羨{うらや}んで', reason: '錯誤：音便。' },
            { text: '羨{うらや}ま', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '羨慕他的才能。 \n【詞彙】注意動詞「羨む」與形容詞「羨ましい」的用法差異。'
    },
    {
        id: 'n2_v1399_urayamu_2',
        prob: '人{ひと}の成功{せいこう}を ______ な。',
        prob_zh: '不要 *羨慕* 別人的成功。',
        level: 'N2',
        options: [
            { text: '羨{うらや}む', reason: '正確！辭書形接否定命令。' },
            { text: '羨{うらや}ましい', reason: '錯誤：形容詞。' },
            { text: '羨{うらや}んで', reason: '錯誤：音便。' },
            { text: '羨{うらや}まない', reason: '錯誤：否定形。' }
        ],
        correctIndex: 0,
        tag: 'grammar',
        correctRule: '不要羨慕別人的成功。 \n【文法】「～な」表示禁止的命令形。'
    },
    // 7. 憎む (Nikumu)
    {
        id: 'n2_v1399_nikumu_1',
        prob: '嘘{うそ}を ______ 人{ひと}だ。',
        prob_zh: '是個 *憎恨* 謊言的人。',
        level: 'N2',
        options: [
            { text: '憎{にく}む', reason: '正確！辭書形修飾名詞。' },
            { text: '憎{にく}い', reason: '錯誤：形容詞(可惡的)。' },
            { text: '憎{にく}んで', reason: '錯誤：音便。' },
            { text: '憎{にく}み', reason: '錯誤：連用。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '是個憎恨謊言的人。 \n【詞彙】「憎む」(nikumu) 表示強烈的厭惡或憎恨。'
    },
    {
        id: 'n2_v1399_nikumu_2',
        prob: '戦争{せんそう}を ______ 心{こころ}を持{も}つ。',
        prob_zh: '抱持著 *憎恨* 戰爭的心。',
        level: 'N2',
        options: [
            { text: '憎{にく}む', reason: '正確！辭書形接名詞。' },
            { text: '憎{にく}い', reason: '錯誤：形容詞(可惡的)。' },
            { text: '憎{にく}み', reason: '正確！(名詞化)' },
            { text: '憎{にく}まれ', reason: '錯誤：被動。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '抱持著憎恨戰爭的心。 \n【詞彙】「憎む」(nikumu) 表示極度的厭惡或憤怒。'
    },
    // 8. 拝む (Ogamu)
    {
        id: 'n2_v1399_ogamu_1',
        prob: '初日{はつひ}の出{で}を ______。',
        prob_zh: ' *膜拜* 元旦的日出。',
        level: 'N2',
        options: [
            { text: '拝{おが}みます', reason: '正確！五段動詞。' },
            { text: '拝{おが}んで', reason: '正確！(撥音便)' },
            { text: '拝{おが}み', reason: '正確！(連用)' },
            { text: '拝{はい}し', reason: '錯誤：讀音錯誤。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '膜拜元旦的日出。 \n【詞彙】「拝む」(ogamu) 表示雙手合十祈禱或膜拜。'
    },
    {
        id: 'n2_v1399_ogamu_2',
        prob: '神社{じんじゃ}で手{て}を合わせて ______。',
        prob_zh: '在神社雙手合十 *祈禱*。',
        level: 'N2',
        options: [
            { text: '拝{おが}んだ', reason: '正確！五段過去式。' },
            { text: '拝{おが}いた', reason: '錯誤：音便錯誤。' },
            { text: '拝{おが}り', reason: '錯誤：變位錯誤。' },
            { text: '祈{いの}った', reason: '正確！(語義相同)' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '在神社雙手合十祈禱。 \n【音便】五段動詞結尾 mu 變為「んだ」。'
    },
    // 9. 叫ぶ (Sakebu)
    {
        id: 'n2_v1399_sakebu_1',
        prob: '助{たす}けを ______ 声{こえ}が聞{き}こえる。',
        prob_zh: '聽到 *求救* 的聲音。',
        level: 'N2',
        options: [
            { text: '叫{さけ}ぶ', reason: '正確！辭書形接名詞。' },
            { text: '叫{さけ}び', reason: '正確！(名詞用途)' },
            { text: '叫{さけ}んで', reason: '錯誤：接續錯誤。' },
            { text: '叫{さけ}べ', reason: '錯誤：命令。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '聽到求救的聲音。 \n【活用】在此使用動詞定語，修飾「聲」。'
    },
    {
        id: 'n2_v1399_sakebu_2',
        prob: '大声{おおごえ}で ______。',
        prob_zh: '大聲 *喊叫*。',
        level: 'N2',
        options: [
            { text: '叫{さけ}びました', reason: '正確！五段動詞。' },
            { text: '叫{さけ}んで', reason: '正確！(正在喊)' },
            { text: '叫{さけ}び', reason: '正確！(連用)' },
            { text: '叫{さけ}ぼう', reason: '正確！(意向形)' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '大聲喊叫。 \n【活用】五段動詞「叫ぶ」變位。'
    },
    // 10. 拝見する (Haiken suru)
    {
        id: 'n2_v1399_haiken_1',
        prob: 'お手紙{てがみ}を ______ ました。',
        prob_zh: '我已 *拜讀* 了您的來信。',
        level: 'N2',
        options: [
            { text: '拝見{はいけん}し', reason: '正確！「見る」的謙讓語。' },
            { text: '拝見{はいけん}され', reason: '錯誤：這是被動或尊敬(對自己用尊敬語是錯誤的)。' },
            { text: 'お見{み}えになり', reason: '錯誤：這是尊敬語。' },
            { text: '拝見{はいけん}し', reason: '正確！(suru動詞連用)' }
        ],
        correctIndex: 0,
        tag: 'keigo-humble',
        correctRule: '我已拜讀了您的來信。 \n【謙讓語】對前輩或長輩提供的東西做「看」的動作時，使用「拝見する」。'
    },
    {
        id: 'n2_v1399_haiken_2',
        prob: '資料{しりょう}を ______ よろしいでしょうか。',
        prob_zh: '可以讓我 *拜讀* 一下資料嗎？',
        level: 'N2',
        options: [
            { text: '拝見{はいけん}しても', reason: '正確！謙讓語 + 許可。' },
            { text: '見{み}ても', reason: '正確！(但此處考正式敬語)' },
            { text: 'ご覧{らん}になっても', reason: '錯誤：這是請對方看。' },
            { text: '拝見{はいけん}されても', reason: '錯誤：敬語誤用。' }
        ],
        correctIndex: 0,
        tag: 'keigo-humble',
        correctRule: '可以讓我拜讀一下資料嗎？ \n【敬語】「拝見する」縮小自己，提升對方尊嚴。'
    }
]
