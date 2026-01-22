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
    },
    // --- SOP Expanded N2 Batch 3 ---
    // 1. 仰ぐ (Aogu)
    {
        id: 'n2_v1399_aogu_1',
        prob: '夜空{よぞら}を ______ 星{ほし}を眺{なが}める。',
        prob_zh: ' *仰望* 夜空眺望星星。',
        level: 'N2',
        options: [
            { text: '仰{あお}いで', reason: '正確！五段動詞 g 濁音便。' },
            { text: '仰{あお}ぎ', reason: '正確！(連用)' },
            { text: '見{み}上げて', reason: '正確！(但 aogu 語感較莊重)' },
            { text: '仰{あお}が', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '仰望夜空眺望星星。 \n【活用】五段動詞結尾「ぐ」變為「いで」。'
    },
    {
        id: 'n2_v1399_aogu_2',
        prob: '指導{しどう}を ______。',
        prob_zh: ' *請求* 指導。',
        level: 'N2',
        options: [
            { text: '仰{あお}ぐ', reason: '正確！「仰ぐ」也可用於仰仗、請求尊長的消息或指導。' },
            { text: '頼{たの}む', reason: '正確！(但仰ぐ用於地位高低明顯時)' },
            { text: '仰{あお}ぎ', reason: '正確！(連用)' },
            { text: '請{う}ける', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '請求指導。 \n【語義】在此表示對上位者的尊崇與依賴。'
    },
    // 2. 嘆く (Nageku)
    {
        id: 'n2_v1399_nageku_1',
        prob: '不運{ふうん}を ______。',
        prob_zh: ' *哀嘆* 不幸。',
        level: 'N2',
        options: [
            { text: '嘆{なげ}く', reason: '正確！五段動詞。' },
            { text: '悲{かな}しむ', reason: '正確！(悲傷，但嘆く包含說出來或表現出的感嘆)' },
            { text: '嘆{なげ}き', reason: '正確！(名詞/連用)' },
            { text: '嘆{なげ}い', reason: '錯誤：音便。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '哀嘆不幸。 \n【語義】「嘆く」指感嘆不正義、不合理或不幸的事實。'
    },
    {
        id: 'n2_v1399_nageku_2',
        prob: '若者{わかもの}の教育{きょういく}不足{ぶそく}を ______。',
        prob_zh: '為年輕人的教育不足而 *感嘆*。',
        level: 'N2',
        options: [
            { text: '嘆{なげ}いている', reason: '正確！表示持持續的憂慮或感嘆心情。' },
            { text: '嘆{なげ}く', reason: '正確！(一般動詞)' },
            { text: '嘆{なげ}か', reason: '錯誤：否定。' },
            { text: '嘆{なげ}け', reason: '錯誤：命令。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '為年輕人的教育不足而感嘆。 \n【活用】五段動詞「嘆く」。'
    },
    // 4. 慎む (Tsutsushimu)
    {
        id: 'n2_v1399_tsutsushimu_1',
        prob: '不謹慎{ふきんしん}な言動{げんどう}は ______ べきだ。',
        prob_zh: '應該 *謹慎* 言行不檢的行為(克制)。',
        level: 'N2',
        options: [
            { text: '慎{つつ}しむ', reason: '正確！五段動詞。表示克制欲望或注意言行。' },
            { text: '注意{ちゅうい}する', reason: '正確！' },
            { text: '慎{つつ}しみ', reason: '正確！(連用)' },
            { text: '慎{つつ}しま', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '應該謹慎言行不檢的行為。 \n【語義】「慎む」常用於提醒他人要注意禮節或保持莊重。'
    },
    {
        id: 'n2_v1399_tsutsushimu_2',
        prob: 'お酒{さけ}を ______ います。',
        prob_zh: '正在 *節制* 飲酒。',
        level: 'N2',
        options: [
            { text: '慎{つつ}しんで', reason: '正確！五段撥音便。表示為了健康或修養而克制欲望。' },
            { text: '慎{つつ}しみ', reason: '錯誤：連用。' },
            { text: '控{ひか}えて', reason: '正確！(節制、避開)' },
            { text: '避{さ}けて', reason: '錯誤：避免。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '正在節制飲酒。 \n【活用】「慎む」撥音便。'
    },
    // 6. 励ます (Hagemasu)
    {
        id: 'n2_v1399_hagemasu_1',
        prob: '落ち込んでいる友人{ゆうじん}を ______。',
        prob_zh: ' *鼓勵* 沮喪的朋友。',
        level: 'N2',
        options: [
            { text: '励{はげ}ます', reason: '正確！五段他動詞。表示讓人振作起來。' },
            { text: '励{はげ}ま', reason: '錯誤：否定。' },
            { text: '励{はげ}み', reason: '錯誤：自動詞連用。' },
            { text: '励{はげ}まそう', reason: '正確！(意向形)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '鼓勵沮喪的朋友。 \n【自他動詞】「励む」(自，自己努力) vs 「励ます」(他，鼓勵別人)。'
    },
    {
        id: 'n2_v1399_hagemasu_2',
        prob: '声{こえ}をかけて ______。',
        prob_zh: '出聲 *加油/鼓勵*。',
        level: 'N2',
        options: [
            { text: '励{はげ}ました', reason: '正確！五段過去式。' },
            { text: '励{はげ}んでいた', reason: '錯誤：自己在努力。' },
            { text: '励{はげ}まし', reason: '正確！(連用)' },
            { text: '応援{おうえん}した', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '出聲加油/鼓勵。 \n【活用】他動詞用法。'
    },
    // 7. 慰める (Nagameru)
    {
        id: 'n2_v1399_nagameru_1',
        prob: '泣いている子{こ}を ______。',
        prob_zh: ' *安撫* 哭泣的孩子。',
        level: 'N2',
        options: [
            { text: '慰{なぐさ}める', reason: '正確！一段動詞。表示減輕他人的痛苦或不安。' },
            { text: '慰{なぐさ}め', reason: '正確！(連用/名詞)' },
            { text: '慰{なぐさ}めて', reason: '正確！(TE形)' },
            { text: '慰{なぐさ}めよう', reason: '正確！(意向)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '安撫哭泣的孩子。 \n【語義】「慰める」是用言語或行為讓對方的心情平靜。'
    },
    {
        id: 'n2_v1399_nagameru_2',
        prob: '音楽{おんがく}に心{こころ}を ______。',
        prob_zh: '被音樂 *療癒* (的心靈)。',
        level: 'N2',
        options: [
            { text: '慰{なぐさ}められる', reason: '正確！一段受身/可能。在此表示被感動或療癒的狀態。' },
            { text: '慰{なぐさ}める', reason: '錯誤：主動。' },
            { text: '癒{い}やされる', reason: '正確！(療癒)' },
            { text: '慰{なぐさ}めた', reason: '錯誤：時態。' }
        ],
        correctIndex: 0,
        tag: 'passive',
        correctRule: '被音樂療癒。 \n【活用】一段動詞受身形。'
    },
    // 8. 労わる (Itawaru)
    {
        id: 'n2_v1399_itawaru_1',
        prob: 'お年寄{としよ}りを ______。',
        prob_zh: ' *體恤* 長者。',
        level: 'N2',
        options: [
            { text: '労{いたわ}る', reason: '正確！五段動詞。表示體貼或體恤勞苦。' },
            { text: '労{いたわ}り', reason: '正確！(連用/名詞)' },
            { text: '大事{だいじ}にする', reason: '正確！' },
            { text: '労{いたわ}ら', reason: '錯誤：否定。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '體恤長者。 \n【語義】「労わる」通常對象是弱小者、長者或辛勤工作的人。'
    },
    {
        id: 'n2_v1399_itawaru_2',
        prob: '体{からだ}を ______ ください。',
        prob_zh: '請 *保重* 身體。',
        level: 'N2',
        options: [
            { text: '労{いたわ}って', reason: '正確！五段及促音便。書信中常用的慰問。' },
            { text: '大事{だいじ}にして', reason: '正確！' },
            { text: '労{いたわ}り', reason: '錯誤：接續。' },
            { text: '休{やす}めて', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請保重身體。 \n【活用】五段促音便。'
    },
    // 9. 敬う (Uyamau)
    {
        id: 'n2_v1399_uyamau_1',
        prob: '神{かみ}を ______。',
        prob_zh: ' *敬奉* 神明。',
        level: 'N2',
        options: [
            { text: '敬{うやま}う', reason: '正確！五段動詞。表示心理上的崇敬。' },
            { text: '尊敬{そんけい}する', reason: '正確！(漢字詞)' },
            { text: '崇{あが}める', reason: '正確！(崇拜)' },
            { text: '敬{うやま}い', reason: '正確！(連用)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '敬奉神明。 \n【語義】「敬う」是對象為神、佛、長輩等的心理尊崇。'
    },
    {
        id: 'n2_v1399_uyamau_2',
        prob: '目上{めうえ}の人{ひと}を ______ 態度{たいど}。',
        prob_zh: ' *尊敬* 長輩的態度。',
        level: 'N2',
        options: [
            { text: '敬{うやま}う', reason: '正確！辭書形修飾。' },
            { text: '敬{うやま}い', reason: '正確！' },
            { text: '敬{うやま}って', reason: '正確！' },
            { text: '尊敬{そんけい}のある', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '尊敬長輩的態度。 \n【活用】五段動詞。'
    },
    // 10. 崇める (Agameru)
    {
        id: 'n2_v1399_agameru_1',
        prob: '指導者{しどうしゃ}として ______。',
        prob_zh: ' *推崇* 為領導者。',
        level: 'N2',
        options: [
            { text: '崇{あが}める', reason: '正確！一段動詞。表示極度尊崇或崇拜。' },
            { text: '崇{あが}め', reason: '正確！(連用)' },
            { text: '崇{あが}めて', reason: '正確！(TE形)' },
            { text: '敬{うやま}う', reason: '正確！(但 agameru 程度更強)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '推崇為領導者。 \n【語義】「崇める」帶有一種將對方視為神聖或極高地位的語感。'
    },
    {
        id: 'n2_v1399_agameru_2',
        prob: '英雄{えいゆう}と ______ られています。',
        prob_zh: '被 *崇拜* 為英雄。',
        level: 'N2',
        options: [
            { text: '崇{あが}め', reason: '正確！一段受身/尊敬。' },
            { text: '崇{あが}める', reason: '錯誤：主動。' },
            { text: '崇{あが}ま', reason: '錯誤：變化。' },
            { text: '崇{あが}めた', reason: '錯誤：時態。' }
        ],
        correctIndex: 0,
        tag: 'passive',
        correctRule: '被崇拜為英雄。 \n【活用】一段動詞受身形。'
    },
    // --- SOP Expanded N2 Batch 4 ---
    // 1. 蓄える (Takaeru/Takuwaeru)
    {
        id: 'n2_v1399_takuwaeru_1',
        prob: '将来{しょうらい}のために資金{しきん}を ______。',
        prob_zh: '為了將來而 *儲備* 資金。',
        level: 'N2',
        options: [
            { text: '蓄{たくわ}える', reason: '正確！一段動詞。表示儲備、積蓄。' },
            { text: '蓄{たくわ}え', reason: '正確！(連用/名詞)' },
            { text: '貯{た}める', reason: '正確！(存錢)' },
            { text: '蓄{たくわ}えて', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '為了將來而儲備資金。 \n【語義】「蓄える」(takuwaeru) 用於儲備錢財、力量、知識或長鬍鬚。'
    },
    {
        id: 'n2_v1399_takuwaeru_2',
        prob: '実力{じつりょく}を ______。',
        prob_zh: ' *積蓄* 實力。',
        level: 'N2',
        options: [
            { text: '蓄{たくわ}える', reason: '正確！一段動詞。' },
            { text: '力{ちから}をつける', reason: '正確！(增強力量)' },
            { text: '蓄{たくわ}え', reason: '正確！' },
            { text: '蓄{たくわ}えられ', reason: '錯誤：受身。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '積蓄實力。 \n【活用】一段動詞。'
    },
    // 2. 整える (Totonoeru)
    {
        id: 'n2_v1399_totonoeru_1',
        prob: '身{み}なりを ______。',
        prob_zh: ' *整理* 儀容。',
        level: 'N2',
        options: [
            { text: '整{ととの}える', reason: '正確！一段他動詞。表示整頓、備齊。' },
            { text: '整{ととの}う', reason: '錯誤：那是自動詞(整齊了)。' },
            { text: '直{なお}す', reason: '正確！(改正/修理)' },
            { text: '整{ととの}え', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'transitive',
        correctRule: '整理儀容。 \n【自他動詞】「整える」(他動) vs 「整う」(自動)。'
    },
    {
        id: 'n2_v1399_totonoeru_2',
        prob: '準備{じゅんび}を ______ 待{ま}つ。',
        prob_zh: ' *備妥* 準備並等待。',
        level: 'N2',
        options: [
            { text: '整{ととの}えて', reason: '正確！一段語尾去「る」加「て」。' },
            { text: '備{そな}えて', reason: '正確！(準備應對)' },
            { text: '整{ととの}い', reason: '錯誤：接續。' },
            { text: '整{ととの}う', reason: '錯誤：自動詞。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '備妥準備並等待。 \n【語義】「整える」強調使事物達到完整的預備狀態或和諧狀態。'
    },
    // 3. 控える (Hikaeru)
    {
        id: 'n2_v1399_hikaeru_1',
        prob: '塩分{えんぶん}を ______。',
        prob_zh: ' *節制* 鹽分。',
        level: 'N2',
        options: [
            { text: '控{ひか}える', reason: '正確！一段動詞。表示節制、拉住、等待或記錄。' },
            { text: '控{ひか}え', reason: '正確！' },
            { text: '慎{つつ}しむ', reason: '正確！(謹慎/節制)' },
            { text: '控{ひか}えな', reason: '錯誤：變化錯誤。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '節制鹽分。 \n【語義】「控える」(hikaeru) 在健康語境下指減少攝取量。'
    },
    {
        id: 'n2_v1399_hikaeru_2',
        prob: '選挙{せんきょ}を目前{もくぜん}に ______ います。',
        prob_zh: '選舉就在 *眼前(迫在眉睫)*。',
        level: 'N2',
        options: [
            { text: '控{ひか}えて', reason: '正確！表示在時間或空間上臨近。' },
            { text: '待{ま}って', reason: '正確！(等待)' },
            { text: '控{ひか}え', reason: '錯誤：接續。' },
            { text: '目前{もくぜん}だ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '選舉就在眼前。 \n【用法】「～を目前に控える」是形容重大事件即將到來的經典句型。'
    },
    // 4. 鍛える (Kitaeru)
    {
        id: 'n2_v1399_kitaeru_1',
        prob: '体{からだ}を ______。',
        prob_zh: ' *鍛鍊* 身體。',
        level: 'N2',
        options: [
            { text: '鍛{きた}える', reason: '正確！一段動詞。' },
            { text: '鍛{きた}え', reason: '正確！(連用/名詞)' },
            { text: '磨{みが}く', reason: '正確！(磨練)' },
            { text: '鍛{きた}えて', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '鍛鍊身體。 \n【活用】「鍛える」(kitaeru) 是一段動詞。'
    },
    {
        id: 'n2_v1399_kitaeru_2',
        prob: '精神{せいしん}を ______ 直{なお}す。',
        prob_zh: '重新 *磨礪* 精神。',
        level: 'N2',
        options: [
            { text: '鍛{きた}え', reason: '正確！一段連用形。' },
            { text: '鍛{きた}え', reason: '正確！' },
            { text: '鍛{きた}えられ', reason: '錯誤：受身。' },
            { text: '鍛{きた}えな', reason: '錯誤：變化。' }
        ],
        correctIndex: 0,
        tag: 'conjugation',
        correctRule: '重新磨礪精神。 \n【活用】一段動詞連用形。'
    },
    // 5. 唱える (Tonaeru)
    {
        id: 'n2_v1399_tonaeru_1',
        prob: '異議{いぎ}を ______。',
        prob_zh: ' *提出* 異議。',
        level: 'N2',
        options: [
            { text: '唱{とな}える', reason: '正確！一段動詞。表示提倡、誦讀或提出主張。' },
            { text: '申{もう}し立{た}てる', reason: '正確！(法律上的申訴)' },
            { text: '唱{とな}え', reason: '正確！' },
            { text: '唱{とな}えない', reason: '正確！(不提倡)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '提出異議。 \n【語義】「唱える」(tonaeru) 指大聲說出或正式提出某種觀點。'
    },
    {
        id: 'n2_v1399_tonaeru_2',
        prob: '念仏{ねんぶつ}を ______。',
        prob_zh: ' *念* 佛。',
        level: 'N2',
        options: [
            { text: '唱{とな}える', reason: '正確！誦經、念咒的標準動詞。' },
            { text: '読{よ}む', reason: '正確！(讀)' },
            { text: '言{い}う', reason: '正確！(說)' },
            { text: '唱{とな}え', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '念佛。 \n【語義】在此指宗教上的誦讀。'
    },
    // 6. 踏まえる (Fumaeru)
    {
        id: 'n2_v1399_fumaeru_1',
        prob: '事実{じじつ}を ______ 議論{ぎろん}する。',
        prob_zh: ' *基於* 事實進行討論。',
        level: 'N2',
        options: [
            { text: '踏{ふ}まえて', reason: '正確！一段語尾去「る」加「て」。表示以此為前提。' },
            { text: '踏{ふ}まえ', reason: '正確！' },
            { text: '基{もと}づいて', reason: '正確！(根據)' },
            { text: '考{かんが}えて', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '基於事實進行討論。 \n【語義】「踏まえる」(fumaeru) 比喻腳踩在某處站穩，引申為立足於某種基礎之上。'
    },
    {
        id: 'n2_v1399_fumaeru_2',
        prob: '過去{かこ}の失敗{しっぱい}を ______。',
        prob_zh: ' *有鑑於(基於)* 過去的失敗。',
        level: 'N2',
        options: [
            { text: '踏{ふ}まえ', reason: '正確！一段連用形。' },
            { text: '踏{ふ}まえて', reason: '正確！' },
            { text: '踏{ふ}まえない', reason: '錯誤：否定。' },
            { text: '活{い}かして', reason: '正確！(活用)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '有鑑於過去的失敗。 \n【活用】常用「～を踏まえて」的形式。'
    },
    // 7. 抑える (Osaeru)
    {
        id: 'n2_v1399_osaeru_1',
        prob: '怒{いか}りを ______。',
        prob_zh: ' *壓抑* 怒火。',
        level: 'N2',
        options: [
            { text: '抑{おさ}える', reason: '正確！一段動詞。表示壓制、按住。' },
            { text: '押{お}さえる', reason: '正確！(通常指向下按物理物品)' },
            { text: '抑{おさ}え', reason: '正確！' },
            { text: 'ガマンする', reason: '正確！(忍耐)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '壓抑怒火。 \n【漢字辨析】「抑える」(osaeru, 心理或勢力的壓制) vs 「押さえる」(osaeru, 物理上的按壓)。'
    },
    {
        id: 'n2_v1399_osaeru_2',
        prob: '出費{しゅっぴ}を ______。',
        prob_zh: ' *抑制* 支出。',
        level: 'N2',
        options: [
            { text: '抑{おさ}える', reason: '正確！抑制數量或事態。' },
            { text: '控{ひか}える', reason: '正確！(節制)' },
            { text: '減{へ}らす', reason: '正確！(減少)' },
            { text: '抑{おさ}え', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '抑制支出。 \n【活用】一段動詞。'
    },
    // 8. 堪える (Kotaeru - endure)
    {
        id: 'n2_v1399_kotaeru_e_1',
        prob: '寒{さむ}さに ______。',
        prob_zh: ' *忍受* 寒冷。',
        level: 'N2',
        options: [
            { text: '堪{こた}える', reason: '正確！一段動詞。表示承受艱難。' },
            { text: '耐{た}える', reason: '正確！(通常對象是壓力、物理力量)' },
            { text: '堪{こた}え', reason: '正確！' },
            { text: '我慢{がまん}する', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '忍受寒冷。 \n【漢字辨析】「堪える」(kotaeru) 強調內在的身心忍耐，常與「こらえきれない」(忍不住) 相關。'
    },
    {
        id: 'n2_v1399_kotaeru_e_2',
        prob: ' ______ られないほど嬉{うれ}しい。',
        prob_zh: '高興到無法 *忍住(喜悅)*。',
        level: 'N2',
        options: [
            { text: '堪{こた}え', reason: '正確！一段可能形否定。' },
            { text: '堪{こた}え', reason: '正確！' },
            { text: '答{こた}え', reason: '錯誤：那是回答。' },
            { text: '堪{こた}えられ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'potential',
        correctRule: '高興到無法忍住。 \n【活用】一段動詞可能形為「堪えられる」。'
    },
    // 9. 構える (Kamaeru)
    {
        id: 'n2_v1399_kamaeru_1',
        prob: '都心{としん}に店{みせ}を ______。',
        prob_zh: '在市中心 *開設* 店鋪。',
        level: 'N2',
        options: [
            { text: '構{かま}える', reason: '正確！一段動詞。表示設店、安家或擺出架勢。' },
            { text: '開{ひら}く', reason: '正確！(開展)' },
            { text: '構{かま}え', reason: '正確！' },
            { text: '立{た}てる', reason: '正確！(建立)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '在市中心開設店鋪。 \n【語義】「構える」(kamaeru) 帶有正式設置、具備規模的語感。'
    },
    {
        id: 'n2_v1399_kamaeru_2',
        prob: 'のん気に ______ いてはいけない。',
        prob_zh: '不能 *擺出* 悠閒自在的樣子(太過放鬆)。',
        level: 'N2',
        options: [
            { text: '構{かま}えて', reason: '正確！一段語尾變位。表示某種態度或架勢。' },
            { text: '休{やす}んで', reason: '正確！(休息)' },
            { text: '構{かま}い', reason: '錯誤：接續。' },
            { text: '構{かま}わ', reason: '錯誤：那是「沒關係」。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '不能太過放鬆(擺出悠閒架勢)。 \n【活用】一段動詞變位。'
    },
    // 10. 補う (Oginau)
    {
        id: 'n2_v1399_oginau_1',
        prob: '不足{ふそく}分{ぶん}を ______。',
        prob_zh: ' *補充* 不足的部分。',
        level: 'N2',
        options: [
            { text: '補{おぎな}う', reason: '正確！五段動詞。表示填補空缺。' },
            { text: '補充{ほじゅう}する', reason: '正確！' },
            { text: '補{おぎな}い', reason: '正確！' },
            { text: '補{おぎな}って', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '補充不足的部分。 \n【活用】「補う」(oginau) 是五段動詞。'
    },
    {
        id: 'n2_v1399_oginau_2',
        prob: '欠点{けってん}を ______。',
        prob_zh: ' *彌補* 缺點。',
        level: 'N2',
        options: [
            { text: '補{おぎな}う', reason: '正確！用於彌補抽象的損失或不足。' },
            { text: '補{おぎな}って', reason: '正確！' },
            { text: '助{たす}ける', reason: '正確！(幫助)' },
            { text: '埋{う}める', reason: '正確！(填補)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '彌補缺點。 \n【活用】五段動詞。'
    },
    // --- SOP Expanded N2 Batch 5 ---
    // 1. 改める (Aratameru)
    {
        id: 'n2_v1399_aratameru_1',
        prob: '間違{まちが}いを ______。',
        prob_zh: ' ______ 錯誤。 (改正/修正)',
        level: 'N2',
        options: [
            { text: '改{あらた}めます', reason: '正確！一段動詞。表示改進或重新審視。' },
            { text: '改{あらた}まります', reason: '錯誤：那是自動詞(改變/莊重)。' },
            { text: '直{なお}します', reason: '正確！(修理/改正)' },
            { text: '正{ただ}し', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '改正錯誤。 \n【自他動詞】「改める」(他動詞，人主動去改) 對應的自動詞為 「改まる」(自動詞，物體或態勢改變)。助詞「を」選他動詞。'
    },
    {
        id: 'n2_v1399_aratameru_2',
        prob: '日{ひ}を ______ 出直{でなお}します。',
        prob_zh: ' ______ 日期後再過來。 (改日/另選)',
        level: 'N2',
        options: [
            { text: '改{あらた}めて', reason: '正確！一段動詞去る加て。在此作副詞用法，表示「重新」。' },
            { text: '變{か}えて', reason: '正確！(改變日期)' },
            { text: '改{あらた}まり', reason: '錯誤：連用接續不符。' },
            { text: '直{なお}して', reason: '正確！(修正，但改期常用重新aratamete)' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '另選日期後再過來。 \n【用法】「改めて」是 N2 常見用法，表示不延續現狀，而是重新找機會或重新進行。'
    },
    // 2. 甘やかす (Amayakasu)
    {
        id: 'n2_v1399_amayakasu_1',
        prob: '子供{こども}を ______ はいけない。',
        prob_zh: '不可以 ______ 小孩。 (溺愛/縱容)',
        level: 'N2',
        options: [
            { text: '甘{あま}やかして', reason: '正確！五段サ行變「して」。' },
            { text: '甘{あま}えて', reason: '錯誤：那是小孩向大人「撒嬌」。' },
            { text: '甘{あま}くして', reason: '錯誤：那是把味道變甜。' },
            { text: '可愛{かわい}がり', reason: '正確！(疼愛，但常用於正面)' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '不可以溺愛小孩。 \n【自他動詞】「甘える」(自動詞，主體撒嬌) vs 「甘やかす」(他動詞，主體嬌慣他人)。此處動作主體是大人，對象是小孩。'
    },
    {
        id: 'n2_v1399_amayakasu_2',
        prob: '孫{まご}を ______ すぎる。',
        prob_zh: '太過 ______ 孫子了。 (寵溺)',
        level: 'N2',
        options: [
            { text: '甘{あま}やかし', reason: '正確！五段連用形。' },
            { text: '甘{あま}え', reason: '錯誤：語法與語義方向相反。' },
            { text: '甘{あま}やかす', reason: '正確！' },
            { text: '甘{あま}やかせ', reason: '錯誤：命令/可能變位。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '太過溺愛孫子了。 \n【活用】動詞連用形「甘やかし」搭配「～すぎる」表示程度過頭。'
    },
    // 3. 謝る (Ayamaru)
    {
        id: 'n2_v1399_ayamaru_1',
        prob: '素直{すなお}に ______ べきだ。',
        prob_zh: '應該坦率地 ______。 (道歉)',
        level: 'N2',
        options: [
            { text: '謝{あや}まる', reason: '正確！五段動詞辭書形。' },
            { text: '謝{あや}まり', reason: '錯誤：名詞或連用形。' },
            { text: '誤{あやま}る', reason: '錯誤：漢字用法不同(弄錯/出錯)。' },
            { text: '謝罪{しゃざい}する', reason: '正確！(漢字詞)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '應該坦率地道歉。 \n【漢字辨析】「謝る」(apologize) vs 「誤る」(make a mistake)。兩者讀音相同，N2 考試常考漢字寫法。'
    },
    {
        id: 'n2_v1399_ayamaru_2',
        prob: '相手{あいて}に ______ ましたか？',
        prob_zh: '向對方 ______ 了嗎？ (賠罪/道歉)',
        level: 'N2',
        options: [
            { text: '謝{あや}まり', reason: '正確！五段連用形。' },
            { text: '謝{あや}まって', reason: '正確！(正在道歉)' },
            { text: '誤{あやま}り', reason: '錯誤：漢字意義不同。' },
            { text: '言{い}い', reason: '錯誤：語義不明確。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '向對方道歉了嗎？ \n【活用】「謝る」為五段動詞，ます形須將「る」變為「り」。'
    },
    // 4. 争う (Arasou)
    {
        id: 'n2_v1399_arasou_1',
        prob: '土地{とち}をめぐって ______。',
        prob_zh: '圍繞著土地進行 ______。 (爭執/爭奪)',
        level: 'N2',
        options: [
            { text: '争{あらそ}う', reason: '正確！五段動詞。' },
            { text: '戰{たたか}う', reason: '正確！(戰鬥，層次更高)' },
            { text: '争{あらそ}い', reason: '正確！(連用/名詞)' },
            { text: '洗{あら}う', reason: '錯誤：讀音及漢字錯誤(洗)。' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '圍繞著土地爭執。 \n【語義】「争う」(arasou) 表示為了物資、權力、名譽而進行的競爭、爭奪或口角。'
    },
    {
        id: 'n2_v1399_arasou_2',
        prob: '優劣{ゆうれつ}を ______ 必要{ひつよう}はない。',
        prob_zh: '沒有必要 ______ 優劣。 (競爭/爭論)',
        level: 'N2',
        options: [
            { text: '争{あらそ}う', reason: '正確！五段辭書形。' },
            { text: '競{きそ}う', reason: '正確！(競逐/比賽)' },
            { text: '争{あらそ}わ', reason: '錯誤：否定接續。' },
            { text: '比{くら}べる', reason: '正確！(比較)' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '沒有必要競爭優劣。 \n【用法】常用於比較能力、等級或地位的高低。'
    },
    // 5. 改まる (Aratamaru)
    {
        id: 'n2_v1399_aratamaru_1',
        prob: '正月{しょうがつ}になって、気持{きも}ちが ______。',
        prob_zh: '到了正月，心情也 ______ 了。 (煥然一新)',
        level: 'N2',
        options: [
            { text: '改{あらた}まりました', reason: '正確！五段自動詞。表示事物內容或心情改變。' },
            { text: '改{あらた}めました', reason: '錯誤：那是他動詞(人去修改)。' },
            { text: '變{か}わりました', reason: '正確！(通用)' },
            { text: '新{あたら}しく', reason: '錯誤：變位不完整。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '到了正月，心情也煥然一新了。 \n【自他動詞】「改まる」(自動詞，自然發生改變) 對應其他動詞 「改める」(修正/重新)。心情轉變通常用自動詞。'
    },
    {
        id: 'n2_v1399_aratamaru_2',
        prob: 'そんなに ______ ないでください。',
        prob_zh: '請不要那麼 ______。 (莊重/拘謹)',
        level: 'N2',
        options: [
            { text: '改{あらた}まら', reason: '正確！五段未然形。指態度突然變得非常正經。' },
            { text: '改{あらた}め', reason: '錯誤：方向不對(修改)。' },
            { text: '緊張{きんちょう}し', reason: '正確！(雖然意思相近，但題目考 aratamaru)' },
            { text: '改{あらた}まって', reason: '正確！(但此處接否定)' }
        ],
        correctIndex: 0,
        tag: 'negative',
        correctRule: '請不要那麼拘謹。 \n【語義】「改まる」在 N2 文法中常指態度變得端莊、有禮到讓人感到有距離感的程度。'
    },
    // 6. 表す (Arawasu)
    {
        id: 'n2_v1399_arawasu_1',
        prob: '感謝{かんしゃ}の気持{きも}ちを言辞{ことば}に ______。',
        prob_zh: '用言語 ______ 感謝的心情。 (表達)',
        level: 'N2',
        options: [
            { text: '表{あらわ}します', reason: '正確！五段動詞。表示內心或抽象意義的呈現。' },
            { text: '現{あらわ}します', reason: '錯誤：漢字用法不同(顯現/現身)。' },
            { text: '著{あらわ}します', reason: '錯誤：漢字用法不同(寫書/著作)。' },
            { text: '表現{ひょうげん}し', reason: '正確！(漢字詞)' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '用言語表達感謝之情。 \n【漢字辨析】「表す」(express，表達/代表) vs 「現れる」(appear，現身/露面) vs 「著す」(write a book)。'
    },
    {
        id: 'n2_v1399_arawasu_2',
        prob: 'このマークは何{なに}を ______ いますか。',
        prob_zh: '這個標誌 ______ 著什麼？ (象徵/代表)',
        level: 'N2',
        options: [
            { text: '表{あらわ}して', reason: '正確！五段サ行變「して」。指圖案所含的意義。' },
            { text: '示{しめ}して', reason: '正確！(指示)' },
            { text: '意味{いみ}し', reason: '正確！(意味著)' },
            { text: '現{あらわ}して', reason: '錯誤：漢字意義不同。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '這個標誌象徵著什麼？ \n【活用】五段動詞「表す」。常用於解釋標誌、顏色或詞語所代表的具體或抽象含義。'
    },
    // 7. 現れる (Arawareru)
    {
        id: 'n2_v1399_arawareru_1',
        prob: '太陽{たいよう}が雲{くも}の間{あいだ}から ______。',
        prob_zh: '太陽從雲縫中 ______ 了出來。 (顯現)',
        level: 'N2',
        options: [
            { text: '現{あらわ}れました', reason: '正確！一段自動詞。' },
            { text: '表{あらわ}しました', reason: '錯誤：那是他動詞(人去展現)。' },
            { text: '出{出}てき', reason: '正確！' },
            { text: '消{き}え', reason: '錯誤：語義相反(消失)。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '太陽從雲縫中顯現了出來。 \n【活用】「現れる」是一段二類動詞。表示原本隱藏或看不見的東西變得清晰可見。'
    },
    {
        id: 'n2_v1399_arawareru_2',
        prob: 'ついに真実{しんじつ}が姿{すがた}を ______。',
        prob_zh: '真相終於 ______ 了。 (現形/浮現)',
        level: 'N2',
        options: [
            { text: '現{あらわ}した', reason: '正確！在此作為他動性質使用(露出了面目)。' },
            { text: '現{あらわ}れた', reason: '正確！(真相顯現了)' },
            { text: '見{み}つかった', reason: '正確！(找到了)' },
            { text: '現{あらわ}れ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '真相終於現身了。 \n【語義】在此指抽象的真相變得明朗化。注意「姿を現す」是常用慣用語。'
    },
    // 8. 合わせる (Awaseru)
    {
        id: 'n2_v1399_awaseru_1',
        prob: '手{て}を ______ 祈{いの}る。',
        prob_zh: ' ______ 雙手祈禱。 (合起)',
        level: 'N2',
        options: [
            { text: '合{あ}わせて', reason: '正確！一段動詞。使兩者碰在一起。' },
            { text: '合{あ}って', reason: '錯誤：那是自動詞(契合/處於狀態)。' },
            { text: '合{あ}わせ', reason: '正確！' },
            { text: '付{つ}けて', reason: '正確！(附加/沾上)' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '合起雙手祈禱。 \n【自他動詞】「合う」(自動詞，重合/合適) 對應的他動詞為 「合わせる」(使...合在一起)。'
    },
    {
        id: 'n2_v1399_awaseru_2',
        prob: 'スケジュールを ______ おきます。',
        prob_zh: '我會預先 ______ 大家的行程。 (調整/配合)',
        level: 'N2',
        options: [
            { text: '合{あ}わせて', reason: '正確！一段去る加て。' },
            { text: '調整{ちょうせい}して', reason: '正確！(漢字詞)' },
            { text: '合{あ}わ', reason: '錯誤：未然形不足。' },
            { text: '合{あ}い', reason: '錯誤：自動詞。' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '我會預先調整行程。 \n【語義】「合わせる」也常用於調整不同的事務使之達成一致或配合。'
    },
    // 9. あわてる (Awateru)
    {
        id: 'n2_v1399_awateru_1',
        prob: '時間{じかん}がないので ______。',
        prob_zh: '因為沒時間，感到很 ______。 (慌張)',
        level: 'N2',
        options: [
            { text: 'あわてました', reason: '正確！一段動詞。指動作或心情的忙亂。' },
            { text: '焦{あせ}りました', reason: '正確！(焦急，更強調內心灼急)' },
            { text: '急{いそ}ぎ', reason: '正確！(趕路/急忙)' },
            { text: 'あわてて', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '因為沒時間而慌慌張張。 \n【活用】「あわてる」(awateru) 是二類一段動詞。表示因事出突然而手忙腳亂。'
    },
    {
        id: 'n2_v1399_awateru_2',
        prob: '火事{かじ}の時{とき}は、 ______ ずに逃{に}げてください。',
        prob_zh: '火災時，請不要 ______ 地逃生。 (慌張)',
        level: 'N2',
        options: [
            { text: 'あわて', reason: '正確！一段未然形。搭配「ずに」表示否定狀態。' },
            { text: 'あわてて', reason: '錯誤：那變成慌忙地逃。' },
            { text: '落{お}ち著{つ}か', reason: '錯誤：不要冷靜。' },
            { text: 'あわてら', reason: '錯誤：五段化錯誤。' }
        ],
        correctIndex: 0,
        tag: 'negative',
        correctRule: '火災時，請不要慌張地逃生。 \n【を活用】一段動詞變位。保持冷靜是重點，故選否定後的接續。'
    },
    // 10. 生かす (Ikasu)
    {
        id: 'n2_v1399_ikasu_1',
        prob: '自分{じぶん}の經驗{けいけん}を仕事{しごと}に ______。',
        prob_zh: '在工作中 ______ 自己的經驗。 (活用/發揮)',
        level: 'N2',
        options: [
            { text: '生{い}かします', reason: '正確！五段動詞ます形。' },
            { text: '生{い}きて', reason: '錯誤：那是自動詞(人活著)。' },
            { text: '活用{かつよう}し', reason: '正確！(漢字詞)' },
            { text: '活{い}かし', reason: '正確！(活也是通用漢字)' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '在工作中活用經驗。 \n【自他動詞】「生きる」(自動詞，生存) 對應的他動詞為 「生かす」(發揮/活用)。助詞「を」選他動詞。'
    },
    {
        id: 'n2_v1399_ikasu_2',
        prob: '彼{かれ}の才能{さいのう}を ______ られる場所{ばしょ}。',
        prob_zh: '能讓他的才能得以 ______ 的場所。 (展現/活用)',
        level: 'N2',
        options: [
            { text: '生{い}かせ', reason: '正確！五段可能形「生かせる」。在此修飾場所。' },
            { text: '生{い}き', reason: '錯誤：自動詞。' },
            { text: '生{い}かさ', reason: '錯誤：未然形。' },
            { text: '生{い}かし', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'potential',
        correctRule: '能發揮他的才能的場所。 \n【活用】五段動詞「生かす」的可能形為「生かせる」。此處表示在該場所有能力展現。'
    },
    // --- SOP Expanded N2 Batch 6 (Systematic Coverage) ---
    // 1. 重なる (Kasanaru)
    {
        id: 'n2_v1399_kasanaru_1',
        prob: '不幸{ふこう}が ______。',
        prob_zh: '不幸的事 ______ 而至。 (重疊)',
        level: 'N2',
        options: [
            { text: '重{かさ}なりました', reason: '正確！五段自動詞。' },
            { text: '重{かさ}ねました', reason: '錯誤：他動詞(疊放)。' },
            { text: '合{あ}いました', reason: '錯誤：符合。' },
            { text: '重{かさ}なり', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '不幸的事重疊發生。 \n【活用】五段自動詞「重なる」。'
    },
    {
        id: 'n2_v1399_kasanaru_2',
        prob: '予定{よてい}が ______ しまって、行けません。',
        prob_zh: '預定 ______ 了，所以不能去。',
        level: 'N2',
        options: [
            { text: '重{かさ}なって', reason: '正確！五段促音便。' },
            { text: '重{かさ}なり', reason: '正確！' },
            { text: '重{かさ}ねて', reason: '錯誤：他動詞。' },
            { text: '重{かさ}なら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '行程重疊了。 \n【活用】五段動詞。'
    },
    // 2. 擦る (Kosuru)
    {
        id: 'n2_v1399_kosuru_1',
        prob: '目{め}を ______ ないでください。',
        prob_zh: '請不要 ______ 眼睛。 (搓/揉)',
        level: 'N2',
        options: [
            { text: '擦{こす}ら', reason: '正確！五段動詞未然形。' },
            { text: '擦{こす}り', reason: '正確！' },
            { text: '擦{こす}れ', reason: '正確！' },
            { text: '擦{こす}る', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'negative',
        correctRule: '不要揉眼睛。 \n【活用】五段動詞「擦る」。'
    },
    {
        id: 'n2_v1399_kosuru_2',
        prob: '汗{あせ}をタオルで ______。',
        prob_zh: '用毛巾 ______ 汗。 (擦拭/搓)',
        level: 'N2',
        options: [
            { text: '擦{こす}る', reason: '正確！五段辭書形。' },
            { text: '拭{ふ}く', reason: '正確！(擦拭，更常用於吸乾)' },
            { text: '擦{こす}り', reason: '正確！' },
            { text: '擦{こす}っ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '搓汗。 \n【活用】五段動詞。'
    },
    // 3. 傾く (Katamuku)
    {
        id: 'n2_v1399_katamuku_1',
        prob: '日{ひ}が西{にし}に ______。',
        prob_zh: '太陽向西 ______。 (傾斜/西沉)',
        level: 'N2',
        options: [
            { text: '傾{かたむ}いています', reason: '正確！五段イ音便持續。' },
            { text: '傾{かたむ}け', reason: '錯誤：他動詞(傾斜某物)。' },
            { text: '沈{しず}んで', reason: '正確！(沉下)' },
            { text: '傾{かたむ}き', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '斜陽。 \n【を活用】五段自動詞「傾く」。'
    },
    {
        id: 'n2_v1399_katamuku_2',
        prob: '経営{けいえい}が ______。',
        prob_zh: '經營 ______。 (傾斜/衰敗)',
        level: 'N2',
        options: [
            { text: '傾{かたむ}きました', reason: '正確！五段動詞。' },
            { text: '傾{かたむ}き', reason: '正確！' },
            { text: '傾{かたむ}け', reason: '錯誤：他動詞。' },
            { text: '傾{かたむ}か', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '公司經營不善（趨於衰落）。 \n【活用】五段動詞。'
    },
    // 4. 潜る (Moguru)
    {
        id: 'n2_v1399_moguru_1',
        prob: '海{うみ}に ______。',
        prob_zh: ' ______ 入海中。 (潛水/鑽入)',
        level: 'N2',
        options: [
            { text: '潜{もぐ}ります', reason: '正確！五段動詞。' },
            { text: '潜{もぐ}って', reason: '正確！' },
            { text: '潜{ひそ}んで', reason: '錯誤：那是潜伏/隱藏(HISOMU)。' },
            { text: '潜{もぐ}ら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '在海裡潛水。 \n【活用】五段動詞「潜る」。'
    },
    {
        id: 'n2_v1399_moguru_2',
        prob: '布団{ふとん}に ______。',
        prob_zh: ' ______ 進被窩。 (鑽入)',
        level: 'N2',
        options: [
            { text: '潜{もぐ}る', reason: '正確！辭書形。' },
            { text: '潜{もぐ}り', reason: '正確！' },
            { text: '入{はい}る', reason: '正確！(進入)' },
            { text: '潜{もぐ}れ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '鑽進被窩。 \n【活用】五段動詞。'
    },
    // 5. 汚す (Kegasu)
    {
        id: 'n2_v1399_kegasu_1',
        prob: '名前{なまえ}を ______。',
        prob_zh: ' ______ 名稱/汙名。 (玷汙)',
        level: 'N2',
        options: [
            { text: '汚{けが}しました', reason: '正確！五段他動詞。多用於抽象玷汙。' },
            { text: '汚{よご}しました', reason: '正確！(一般弄髒，常用語境為衣服)' },
            { text: '汚{けが}れ', reason: '錯誤：那是自動詞。' },
            { text: '汚{けが}し', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '玷汙名聲。 \n【を活用】五段動詞「汚す」。'
    },
    {
        id: 'n2_v1399_kegasu_2',
        prob: '神聖{しんせい}な場所{ばしょ}を ______ てはならない。',
        prob_zh: '絕不可 ______ 神聖的地方。 (褻瀆)',
        level: 'N2',
        options: [
            { text: '汚{けが}し', reason: '正確！五段他動詞。' },
            { text: '汚{けが}さ', reason: '正確！' },
            { text: '汚{よご}し', reason: '正確！(物理上弄髒)' },
            { text: '汚{けが}す', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '褻瀆聖地。 \n【活用】五段動詞。'
    },
    // 6. 盛る (Moru)
    {
        id: 'n2_v1399_moru_1',
        prob: '器{うつわ}に料理{りょうり}を ______。',
        prob_zh: '在器皿裡 ______ 料理。 (盛/裝)',
        level: 'N2',
        options: [
            { text: '盛{も}ります', reason: '正確！五段動詞。' },
            { text: '盛{も}って', reason: '正確！' },
            { text: '入{い}れます', reason: '正確！(放入)' },
            { text: '盛{さ}かり', reason: '錯誤：那是旺季/最高潮。' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '將料理盛在碗裡。 \n【を活用】五段動詞「盛る」。'
    },
    {
        id: 'n2_v1399_moru_2',
        prob: '山{やま}のように ______ られた砂{すな}。',
        prob_zh: '堆成山一樣的 ______ 的沙子。 (堆積/盛)',
        level: 'N2',
        options: [
            { text: '盛{も}ま', reason: '錯誤：受身形詞幹。' },
            { text: '盛{も}ら', reason: '正確！五段受身形詞幹。' },
            { text: '盛{も}り', reason: '錯誤：連用形。' },
            { text: '盛{も}っ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'passive',
        correctRule: '堆高的沙子。 \n【活用】五段動詞受身形「盛られる」。'
    },
    // 7. 背負う (Seou)
    {
        id: 'n2_v1399_seou_1',
        prob: 'リュックを ______。',
        prob_zh: ' ______ 背包。 (揹/擔負)',
        level: 'N2',
        options: [
            { text: '背負{せお}います', reason: '正確！五段動詞。' },
            { text: '背負{せお}って', reason: '正確！' },
            { text: '持{も}ち', reason: '正確！(拿)' },
            { text: '背負{せお}わ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '揹背包。 \n【を活用】五段動詞「背負う」。'
    },
    {
        id: 'n2_v1399_seou_2',
        prob: '責任{せきにん}を ______。',
        prob_zh: ' ______ 責任。 (負擔)',
        level: 'N2',
        options: [
            { text: '背負{せお}う', reason: '正確！辭書形。常用比喻用法。' },
            { text: '負{お}う', reason: '正確！(負擔)' },
            { text: '背負{せお}い', reason: '正確！' },
            { text: '背負{せお}わ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '承擔責任。 \n【活用】五段動詞。'
    },
    // 8. 退く (Shirizoku)
    {
        id: 'n2_v1399_shirizoku_1',
        prob: '一歩{いっぽ} ______。',
        prob_zh: ' ______ 一步。 (後退/退下)',
        level: 'N2',
        options: [
            { text: '退{しりぞ}きます', reason: '正確！五段自動詞。' },
            { text: '退{しりぞ}け', reason: '錯誤：他動詞(擊退/拒絕)。' },
            { text: '退{しりぞ}い', reason: '正確！' },
            { text: '退{しりぞ}け', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '後退一步。 \n【を活用】五段自動詞「退く」。'
    },
    {
        id: 'n2_v1399_shirizoku_2',
        prob: '第一線{だいいっせん}から ______。',
        prob_zh: '從第一線 ______。 (引退)',
        level: 'N2',
        options: [
            { text: '退{しりぞ}く', reason: '正確！辭書形。常用於地位、職位。' },
            { text: '引退{いんたい}する', reason: '正確！(引退)' },
            { text: '退{しりぞ}き', reason: '正確！' },
            { text: '退{しりぞ}か', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '退居二線。 \n【活用】五段動詞。'
    },
    // 9. 退ける (Shirizokeru)
    {
        id: 'n2_v1399_shirizokeru_1',
        prob: '敵{てき}を ______。',
        prob_zh: ' ______ 敵人。 (擊退)',
        level: 'N2',
        options: [
            { text: '退{しりぞ}けました', reason: '正確！下一段他動詞。' },
            { text: '退{しりぞ}きました', reason: '錯誤：自動詞(後退)。' },
            { text: '退{しりぞ}け', reason: '正確！' },
            { text: '退{しりぞ}けな', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '擊退敵人。 \n【を活用】下一段他動詞「退ける」。'
    },
    {
        id: 'n2_v1399_shirizokeru_2',
        prob: '要求{ようきゅう}を ______。',
        prob_zh: ' ______ 要求。 (拒絕/排除)',
        level: 'N2',
        options: [
            { text: '退{しりぞ}ける', reason: '正確！辭書形。' },
            { text: '断{ことわ}る', reason: '正確！(拒絕)' },
            { text: '拒否{きょひ}する', reason: '正確！(拒絕)' },
            { text: '退{しりぞ}け', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '駁回/拒絕要求。 \n【活用】一段動詞。'
    },
    // 10. 剃る (Soru)
    {
        id: 'n2_v1399_soru_1',
        prob: '髭{ひげ}を ______。',
        prob_zh: ' ______ 鬍子。 (刮/剃)',
        level: 'N2',
        options: [
            { text: '剃{そ}ります', reason: '正確！五段動詞。' },
            { text: '剃{そ}って', reason: '正確！' },
            { text: '剃{そ}ら', reason: '正確！' },
            { text: '剃{そ}り', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '刮鬍子。 \n【を活用】五段動詞「剃る」。'
    },
    {
        id: 'n2_v1399_soru_2',
        prob: '頭{あたま}を ______。',
        prob_zh: ' ______ 頭/剃頭。',
        level: 'N2',
        options: [
            { text: '剃{そ}りました', reason: '正確！五段動詞。' },
            { text: '切{き}り', reason: '正確！(剪)' },
            { text: '剃{そ}っ', reason: '正確！' },
            { text: '剃{そ}り', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '剃光頭。 \n【活用】五段動詞。'
    },
    // 11. 造る (Tsukuru)
    {
        id: 'n2_v1399_tsukuru_1',
        prob: '酒{さけ}を ______。',
        prob_zh: ' ______ 酒。 (釀造/製造)',
        level: 'N2',
        options: [
            { text: '造{つく}っています', reason: '正確！五段促音便持續。常用於大規模製造或釀造。' },
            { text: '作{つく}って', reason: '正確！(一般製造，雖然造更適合釀造語境)' },
            { text: '造{つく}り', reason: '正確！' },
            { text: '造{つく}れ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '釀酒中。 \n【活用】五段動詞「造る」。針對酒、船、大型建築等常用「造」。'
    },
    {
        id: 'n2_v1399_tsukuru_2',
        prob: '船{ふね}を ______ 会社{かいしゃ}。',
        prob_zh: ' ______ 船的公司。',
        level: 'N2',
        options: [
            { text: '造{つく}る', reason: '正確！辭書形修飾。' },
            { text: '作{つく}る', reason: '正確！' },
            { text: '造{つく}り', reason: '正確！' },
            { text: '造{つく}っ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '造船公司。 \n【活用】五段動詞。'
    },
    // 12. 突く (Tsuku)
    {
        id: 'n2_v1399_tsuku_1',
        prob: '杖{つえ}を ______。',
        prob_zh: ' ______ 拐杖。 (拄/插/頂)',
        level: 'N2',
        options: [
            { text: '突{つ}きます', reason: '正確！五段動詞。' },
            { text: '突{つ}いて', reason: '正確！' },
            { text: '点{つ}き', reason: '錯誤：漢字用法不同。' },
            { text: '突{つ}か', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '拄拐杖。 \n【を活用】五段動詞「突く」。'
    },
    {
        id: 'n2_v1399_tsuku_2',
        prob: '核心{かくしん}を ______。',
        prob_zh: ' ______ 核心/中肯。 (直搗/揭露)',
        level: 'N2',
        options: [
            { text: '突{つ}く', reason: '正確！辭書形。比喻性地指出真相。' },
            { text: '指摘{してき}する', reason: '正確！(指出)' },
            { text: '突{つ}き', reason: '正確！' },
            { text: '突{つ}っ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '切中核心。 \n【活用】五段動詞。'
    },
    // 13. あきれる (Akireru)
    {
        id: 'n2_v1399_akireru_1',
        prob: '彼{かれ}の態度{たいど}に ______。',
        prob_zh: '對他的態度 ______。 (愕然/吃驚/無語)',
        level: 'N2',
        options: [
            { text: 'あきれました', reason: '正確！下一段動詞。常用於負面驚訝。' },
            { text: '驚{おどろ}きました', reason: '正確！(吃驚，一般語境)' },
            { text: 'あきれ', reason: '正確！' },
            { text: 'あきれら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '對他的態度感到無語/吃驚。 \n【を活用】下一段自動詞「あきれる」。'
    },
    {
        id: 'n2_v1399_akireru_2',
        prob: ' ______ て物{もの}も言{い}えない。',
        prob_zh: ' ______ 到話都說不出來。',
        level: 'N2',
        options: [
            { text: 'あきれ', reason: '正確！て形連用。' },
            { text: 'あきれ', reason: '正確！' },
            { text: 'あきれ', reason: '正確！' },
            { text: 'あきれ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '驚得啞口無言。 \n【活用】一段動詞。'
    },
    // 14. 揚げる (Ageru)
    {
        id: 'n2_v1399_ageru_揚_1',
        prob: '天{てん}ぷらを ______。',
        prob_zh: ' ______ 天婦羅。 (炸)',
        level: 'N2',
        options: [
            { text: '揚{あ}げます', reason: '正確！下一段他動詞。' },
            { text: '揚{あ}げて', reason: '正確！' },
            { text: '焼{や}き', reason: '錯誤：烤。' },
            { text: '揚{あ}げ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '炸天婦羅。 \n【活用】下一段他動詞「揚げる」。'
    },
    {
        id: 'n2_v1399_ageru_揚_2',
        prob: '旗{はた}を ______。',
        prob_zh: ' ______ 旗子。 (升起)',
        level: 'N2',
        options: [
            { text: '揚{あ}げる', reason: '正確！辭書形。' },
            { text: '上{あ}げる', reason: '正確！(音同，但升旗常用揚)' },
            { text: '揚{あ}げ', reason: '正確！' },
            { text: '揚{あ}げら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '升旗。 \n【活用】一段動詞。'
    },
    // 15. 挙げる (Ageru)
    {
        id: 'n2_v1399_ageru_挙_1',
        prob: '手{て}を ______ ください。',
        prob_zh: '請 ______ 手。 (舉起)',
        level: 'N2',
        options: [
            { text: '挙{あ}げて', reason: '正確！下一段他動詞。' },
            { text: '挙{あ}げ', reason: '正確！' },
            { text: '上{あ}げて', reason: '正確！(音同，通)' },
            { text: '挙{あ}げら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請舉手。 \n【活用】下一段他動詞「挙げる」。用於舉手、舉例、舉行。'
    },
    {
        id: 'n2_v1399_ageru_挙_2',
        prob: '例{れい}を ______。',
        prob_zh: ' ______ 例子。 (列舉)',
        level: 'N2',
        options: [
            { text: '挙{あ}げる', reason: '正確！' },
            { text: '挙{あ}げ', reason: '正確！' },
            { text: '並{なら}べる', reason: '正確！(排列)' },
            { text: '挙{あ}げら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '舉例。 \n【活用】一段動詞。'
    },
    // 16. 憧れる (Akogareru)
    {
        id: 'n2_v1399_akogareru_1',
        prob: '都会{とかい}の生活{せいかつ}に ______。',
        prob_zh: ' ______ 城市生活。 (憧憬/嚮往)',
        level: 'N2',
        options: [
            { text: '憧{あこが}れています', reason: '正確！一段自動詞持續。' },
            { text: '憧{あこが}れ', reason: '正確！' },
            { text: '望{のぞ}んで', reason: '正確！(期望)' },
            { text: '夢見{ゆめみ}て', reason: '正確！(夢想)' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '嚮往城市生活。 \n【活用】一段自動詞「憧れる」。'
    },
    {
        id: 'n2_v1399_akogareru_2',
        prob: ' ______ れていた先輩{せんぱい}。',
        prob_zh: '曾經 ______ 的學長/前輩。',
        level: 'N2',
        options: [
            { text: '憧{あこが}れ', reason: '正確！一段受身/尊敬/自發(此處為一般修飾)。' },
            { text: '憧{あこが}ら', reason: '錯誤：一段動詞不變詞幹音。' },
            { text: '憧{あこが}れる', reason: '正確！' },
            { text: '憧{あこが}れら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'passive',
        correctRule: '令人嚮往的前輩。 \n【活用】一段動詞。'
    },
    // 17. 味わう (Ajiwau)
    {
        id: 'n2_v1399_ajiwau_1',
        prob: 'ゆっくり ______ ください。',
        prob_zh: '請慢慢 ______。 (品嚐/體會)',
        level: 'N2',
        options: [
            { text: '味{あじ}わって', reason: '正確！五段動詞促音便。' },
            { text: '味{あじ}わい', reason: '正確！' },
            { text: '食{た}べて', reason: '正確！(吃)' },
            { text: '味{あじ}わ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請品嚐。 \n【活用】五段動詞「味わう」。'
    },
    {
        id: 'n2_v1399_ajiwau_2',
        prob: '勝利{しょうり}を ______。',
        prob_zh: ' ______ 勝利的滋味。 (體會)',
        level: 'N2',
        options: [
            { text: '味{あじ}わう', reason: '正確！辭書形。' },
            { text: '感{かん}じる', reason: '正確！(感覺到了)' },
            { text: '味{あじ}わい', reason: '正確！' },
            { text: '味{あじ}わっ', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '品嚐勝利。 \n【活用】五段動詞。'
    },
    // 18. 預かる (Azukaru)
    {
        id: 'n2_v1399_azukaru_1',
        prob: '荷物{にもつ}を ______。',
        prob_zh: ' ______ 行利。 (保管/收存)',
        level: 'N2',
        options: [
            { text: '預{あず}かりました', reason: '正確！五段動詞。' },
            { text: '預{あず}けました', reason: '錯誤：那是交給別人保管(預ける)。' },
            { text: '預{あず}かり', reason: '正確！' },
            { text: '預{あず}か', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '代為保管行李。 \n【自他動詞】「預かる」(收存/保管) vs 「預ける」(寄存/寄託)。'
    },
    {
        id: 'n2_v1399_azukaru_2',
        prob: '留守番{るすばん}を ______。',
        prob_zh: ' ______ 看家任務。 (承接/擔當)',
        level: 'N2',
        options: [
            { text: '預{あず}かる', reason: '正確！辭書形。常用比喻用法，代替別人看管。' },
            { text: 'する', reason: '正確！(做)' },
            { text: '預{あず}かり', reason: '正確！' },
            { text: '預{あず}かって', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'vocab',
        correctRule: '負責看家。 \n【活用】五段動詞。'
    },
    // 19. 暖まる (Atatamaru)
    {
        id: 'n2_v1399_atatamaru_1',
        prob: 'スープで体{からだ}が ______。',
        prob_zh: '喝了湯身體 ______ 了。 (暖和/溫暖起來)',
        level: 'N2',
        options: [
            { text: '暖{あたた}まりました', reason: '正確！五段自動詞。' },
            { text: '暖{あたた}めました', reason: '錯誤：他動詞(使其暖和)。' },
            { text: '温{あたた}まりました', reason: '正確！(溫和通用，通常暖指環境暖，溫指溫度上升)' },
            { text: '暖{あたた}まり', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'masu',
        correctRule: '身體暖和了。 \n【自他動詞】「暖まる」(自動詞，變暖) vs 「暖める」(他動詞，加熱/使變暖)。'
    },
    {
        id: 'n2_v1399_atatamaru_2',
        prob: '部屋{へや}が ______ きた。',
        prob_zh: '房間逐漸 ______ 了起來。',
        level: 'N2',
        options: [
            { text: '暖{あたた}まって', reason: '正確！五段促音便。' },
            { text: '暖{あたた}まり', reason: '正確！' },
            { text: '暖{あたた}め', reason: '錯誤：他動詞。' },
            { text: '暖{あたた}まら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '房間變暖了。 \n【活用】五段自動詞。'
    },
    // 20. 暖める (Atatameru)
    {
        id: 'n2_v1399_atatameru_1',
        prob: '弁当{べんとう}を ______ ください。',
        prob_zh: '請 ______ 便當。 (加熱/使熱)',
        level: 'N2',
        options: [
            { text: '暖{あたた}めて', reason: '正確！一段他動詞。' },
            { text: '温{あたた}めて', reason: '正確！(溫常用於液物或小東西)' },
            { text: '暖{あたた}め', reason: '正確！' },
            { text: '暖{あたた}めら', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '請加熱便當。 \n【活用】一段他動詞「暖める」。'
    },
    {
        id: 'n2_v1399_atatameru_2',
        prob: 'スープを ______ て飲{の}む。',
        prob_zh: ' ______ 湯來喝。',
        level: 'N2',
        options: [
            { text: '暖{あたた}め', reason: '正確！一段連用形。' },
            { text: '温{あたた}め', reason: '正確！' },
            { text: '暖{あたた}め', reason: '正確！' },
            { text: '暖{あたた}め', reason: '正確！' }
        ],
        correctIndex: 0,
        tag: 'te',
        correctRule: '把湯熱一下喝。 \n【活用】一段他動詞。'
    }
];


