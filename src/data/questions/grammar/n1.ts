import { UnifiedQuestion } from '../types'

export const grammarN1: UnifiedQuestion[] = [
    // ━━━ べからず (must not - archaic) ━━━
    {
        id: 'g_n1_001', category: 'grammar', level: 'N1', tags: ['literary', 'archaic'],
        stem: '館内{かんない}では走{はし}る___。',
        stemZh: '館內禁止奔跑。',
        options: [
            { text: 'べからず', reason: '正確！「べからず」是古語禁止表現，常見於告示。' },
            { text: 'べきではない', reason: '意思相近但屬現代用法，古風告示用「べからず」。' },
            { text: 'べくもない', reason: '「べくもない」表示不可能，非禁止。' },
            { text: 'まじき', reason: '「まじき」接名詞表不該有的行為，非告示禁止。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '古語禁止「べからず」',
            analysis: '「べからず」是「べし」的否定形式，用於告示或格言，表示禁止。相當於現代的「〜てはいけない」。',
            comparisons: ['べからず：禁止（告示・古風）', 'べきではない：不應該（現代口語）'],
            commonMistakes: ['○ 走るべからず / × 走るべきからず → 「べからず」是固定形式'],
        },
    },
    {
        id: 'g_n1_002', category: 'grammar', level: 'N1', tags: ['literary', 'archaic'],
        stem: '初心{しょしん}忘{わす}る___。',
        stemZh: '不可忘記初衷。',
        options: [
            { text: 'べからず', reason: '正確！格言中常用「べからず」表示告誡。' },
            { text: 'べきだ', reason: '「べきだ」表示「應該」，與禁止語義相反。' },
            { text: 'まい', reason: '「まい」表推量否定或意志否定，非格言禁止。' },
            { text: 'ものか', reason: '「ものか」表反語，語氣不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '格言中的「べからず」',
            analysis: '「初心忘るべからず」是世阿弥的名言，「べからず」用於古風格言，表示深刻的告誡。',
            comparisons: ['べからず：不可（格言）', 'べきではない：不應該（一般建議）'],
            commonMistakes: ['○ 忘るべからず / × 忘れるべからず → 格言中常用文語動詞形'],
        },
    },
    // ━━━ べく (in order to) ━━━
    {
        id: 'g_n1_003', category: 'grammar', level: 'N1', tags: ['literary', 'purpose'],
        stem: '合格{ごうかく}す___、毎日{まいにち}勉強{べんきょう}している。',
        stemZh: '為了合格，每天都在念書。',
        options: [
            { text: 'べく', reason: '正確！「べく」表示目的，相當於「〜するために」。' },
            { text: 'べき', reason: '「べき」是連體形，後接名詞，不接逗號。' },
            { text: 'べからず', reason: '「べからず」是禁止，語義不合。' },
            { text: 'べくして', reason: '「べくして」表必然性，非目的。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「べく」表示目的',
            analysis: '「べく」是「べし」的連用形，接在動詞辭書形後，表示「為了〜」。語體較為書面化。',
            comparisons: ['べく：為了〜（書面）', 'ために：為了〜（一般）', 'ように：為了〜（非意志動詞）'],
            commonMistakes: ['○ 合格すべく / × 合格するべく → 「す」的文語形更自然'],
        },
    },
    // ━━━ べくもない (impossible) ━━━
    {
        id: 'g_n1_004', category: 'grammar', level: 'N1', tags: ['literary', 'impossibility'],
        stem: 'あの事故{じこ}の悲{かな}しみは想像{そうぞう}す___。',
        stemZh: '那場事故的悲痛無法想像。',
        options: [
            { text: 'べくもない', reason: '正確！「べくもない」表示完全不可能。' },
            { text: 'べからず', reason: '「べからず」是禁止，非不可能。' },
            { text: 'べきではない', reason: '「べきではない」是不應該，非不可能。' },
            { text: 'べくして', reason: '「べくして」表必然，語義相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「べくもない」表不可能',
            analysis: '「べくもない」是文語表現，表示「根本不可能〜」，常用於「想像すべくもない」「比べるべくもない」等。',
            comparisons: ['べくもない：不可能（文語）', 'はずがない：不可能（口語推量）'],
            commonMistakes: ['○ 想像すべくもない / × 想像するべくもない → 文語形「す」較自然'],
        },
    },
    // ━━━ べくして (inevitably) ━━━
    {
        id: 'g_n1_005', category: 'grammar', level: 'N1', tags: ['literary', 'inevitability'],
        stem: '彼{かれ}の成功{せいこう}はなる___なったものだ。',
        stemZh: '他的成功是必然的。',
        options: [
            { text: 'べくして', reason: '正確！「べくして」表示理所當然、必然如此。' },
            { text: 'べく', reason: '「べく」表目的，此處語義不合。' },
            { text: 'べからず', reason: '「べからず」表禁止，語義不合。' },
            { text: 'べきで', reason: '「べきで」表應該，非必然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「べくして」表必然性',
            analysis: '「〜べくして〜た」表示「理所當然地〜了」。常見搭配：「なるべくしてなった」「起きるべくして起きた」。',
            comparisons: ['べくして：必然地', 'べく：為了', 'べからず：不可'],
            commonMistakes: ['○ なるべくしてなった / × なるべくなった → 重複動詞形成固定句型'],
        },
    },
    // ━━━ ごとき / ごとく / ごとし (like - literary) ━━━
    {
        id: 'g_n1_006', category: 'grammar', level: 'N1', tags: ['literary', 'simile'],
        stem: '光陰{こういん}矢{や}の___し。',
        stemZh: '光陰如箭。',
        options: [
            { text: 'ごと', reason: '正確！「ごとし」是文語比喻表現，終止形為「ごとし」。' },
            { text: 'よう', reason: '「ようだ」是現代比喻，此處為文語格言。' },
            { text: 'みたい', reason: '「みたいだ」是口語比喻，與格言語體不合。' },
            { text: 'らしい', reason: '「らしい」表推量或典型，非比喻。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '文語比喻「ごとし」',
            analysis: '「ごとし」是古典日語的比喻表現，相當於現代的「〜のようだ」。活用：ごとき（連體）、ごとく（連用）、ごとし（終止）。',
            comparisons: ['ごとし：如同（文語）', 'ようだ：好像（書面）', 'みたいだ：好像（口語）'],
            commonMistakes: ['○ 矢のごとし / × 矢のごとき → 句末用終止形「ごとし」'],
        },
    },
    {
        id: 'g_n1_007', category: 'grammar', level: 'N1', tags: ['literary', 'simile'],
        stem: '嵐{あらし}の___激{はげ}しい攻撃{こうげき}が続{つづ}いた。',
        stemZh: '如暴風雨般猛烈的攻擊持續著。',
        options: [
            { text: 'ごとき', reason: '正確！「ごとき」是連體形，修飾後面的名詞。' },
            { text: 'ごとく', reason: '「ごとく」是連用形，修飾動詞，不接名詞。' },
            { text: 'ごとし', reason: '「ごとし」是終止形，用於句末。' },
            { text: 'ごとも', reason: '「ごとも」不存在此活用形。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ごとき」連體形用法',
            analysis: '「ごとき」是「ごとし」的連體形，後接名詞。「嵐のごとき攻撃」=「嵐のような攻撃」。',
            comparisons: ['ごとき＋名詞（連體）', 'ごとく＋動詞（連用）', 'ごとし（終止・句末）'],
            commonMistakes: ['○ 嵐のごとき攻撃 / × 嵐のごとく攻撃 → 修飾名詞用連體形「ごとき」'],
        },
    },
    // ━━━ ゆえに (because - formal) ━━━
    {
        id: 'g_n1_008', category: 'grammar', level: 'N1', tags: ['literary', 'reason'],
        stem: '貧困{びんこん}___、進学{しんがく}を諦{あきら}めざるを得{え}なかった。',
        stemZh: '因為貧困，不得不放棄升學。',
        options: [
            { text: 'ゆえに', reason: '正確！「ゆえに」是文語因果表現。' },
            { text: 'なので', reason: '「なので」是口語因果，語體不合。' },
            { text: 'だから', reason: '「だから」是口語，與書面語體不搭。' },
            { text: 'につき', reason: '「につき」多用於告示通知，非敘述。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '文語原因「ゆえに」',
            analysis: '「ゆえに」（故に）是書面語的因果表現，前接名詞/な形容詞（である）ゆえに、い形容詞/動詞普通形＋ゆえに。',
            comparisons: ['ゆえに：因此（文語）', 'ために：為了/因為（書面）', 'から：因為（口語）'],
            commonMistakes: ['○ 貧困ゆえに / × 貧困なゆえに → 名詞直接接「ゆえに」'],
        },
    },
    // ━━━ たりとも (not even one) ━━━
    {
        id: 'g_n1_009', category: 'grammar', level: 'N1', tags: ['literary', 'emphasis'],
        stem: '一秒{いちびょう}___無駄{むだ}にはできない。',
        stemZh: '一秒鐘都不能浪費。',
        options: [
            { text: 'たりとも', reason: '正確！「たりとも」表示「即使是〜也（不）」。' },
            { text: 'だけでも', reason: '「だけでも」表示「只要〜就」，語義不同。' },
            { text: 'ばかりか', reason: '「ばかりか」表示「不僅」，語法不合。' },
            { text: 'すら', reason: '「すら」表「連〜都」，但「一秒たりとも」是固定搭配。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たりとも」表極端否定',
            analysis: '「〜たりとも〜ない」表示「即使僅僅〜也不」，常與「一＋量詞」搭配，強調程度之極。',
            comparisons: ['たりとも〜ない：即使一點也不', 'すら〜ない：連〜都不'],
            commonMistakes: ['○ 一秒たりとも / × 一秒でもたりとも → 不重複使用限定助詞'],
        },
    },
    // ━━━ いかんにかかわらず (regardless of) ━━━
    {
        id: 'g_n1_010', category: 'grammar', level: 'N1', tags: ['formal', 'condition'],
        stem: '理由{りゆう}の___、遅刻{ちこく}は認{みと}められません。',
        stemZh: '無論理由如何，遲到都不被允許。',
        options: [
            { text: 'いかんにかかわらず', reason: '正確！「いかんにかかわらず」表示不論如何。' },
            { text: 'いかんによって', reason: '「いかんによって」表示根據〜而定，語義不同。' },
            { text: 'いかんでは', reason: '「いかんでは」表示視情況而定，非一概不論。' },
            { text: 'いかにも', reason: '「いかにも」是副詞，表示「果然」，用法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「いかんにかかわらず」表不論如何',
            analysis: '「名詞＋のいかんにかかわらず」表示「不管〜如何」。「いかん」（如何）是名詞，「にかかわらず」表示不論。',
            comparisons: ['いかんにかかわらず：不論如何', 'いかんによっては：視情況而定', 'いかんだ：取決於'],
            commonMistakes: ['○ 理由のいかんにかかわらず / × 理由いかんにかかわらず → 名詞後加「の」'],
        },
    },
    // ━━━ をもって (with/by means of) ━━━
    {
        id: 'g_n1_011', category: 'grammar', level: 'N1', tags: ['formal', 'means'],
        stem: '本日{ほんじつ}___閉店{へいてん}とさせていただきます。',
        stemZh: '以今天為止關門歇業。',
        options: [
            { text: 'をもって', reason: '正確！「をもって」表示以〜為界限或手段。' },
            { text: 'において', reason: '「において」表場所或場合，非界限。' },
            { text: 'にとって', reason: '「にとって」表對象的立場，語義不合。' },
            { text: 'に関して', reason: '「に関して」表關於，語義不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「をもって」表時間界限',
            analysis: '「をもって」可表示手段（〜で）或時間界限（〜を最後に）。此處表示以本日為界限結束營業。',
            comparisons: ['をもって：以〜（手段/界限）', 'によって：由於/藉由', 'で：用/在（一般）'],
            commonMistakes: ['○ 本日をもって / × 本日をもちまして → 兩者皆正確，後者更禮貌'],
        },
    },
    // ━━━ に即して (in accordance with) ━━━
    {
        id: 'g_n1_012', category: 'grammar', level: 'N1', tags: ['formal', 'accordance'],
        stem: '現実{げんじつ}___対策{たいさく}を考{かんが}えるべきだ。',
        stemZh: '應該根據現實來考慮對策。',
        options: [
            { text: 'に即して', reason: '正確！「に即して」表示根據事實或現狀。' },
            { text: 'に対して', reason: '「に対して」表對象，非依據。' },
            { text: 'について', reason: '「について」表關於，非依據。' },
            { text: 'にわたって', reason: '「にわたって」表範圍，語義不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に即して」表依據現實',
            analysis: '「に即して（にそくして）」表示根據實際情況、事實來行動。常搭配「現実」「実情」「法律」等。',
            comparisons: ['に即して：按照事實', 'に基づいて：基於', 'に沿って：沿著（方針）'],
            commonMistakes: ['○ 現実に即して / × 現実に即した → 「に即した」是連體形修飾名詞'],
        },
    },
    // ━━━ に至っては (when it comes to - extreme) ━━━
    {
        id: 'g_n1_013', category: 'grammar', level: 'N1', tags: ['formal', 'extreme'],
        stem: '兄{あに}も成績{せいせき}が悪{わる}いが、弟{おとうと}___もう手{て}がつけられない。',
        stemZh: '哥哥成績也很差，至於弟弟更是無可救藥。',
        options: [
            { text: 'に至っては', reason: '正確！「に至っては」表極端情況。' },
            { text: 'にとっては', reason: '「にとっては」表立場，非極端。' },
            { text: 'においては', reason: '「においては」表場所或場合。' },
            { text: 'に関しては', reason: '「に関しては」表關於，語義太輕。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に至っては」表極端事例',
            analysis: '「に至っては」用於舉出極端例子，常帶有負面語氣，表示「說到〜更是如何」。',
            comparisons: ['に至っては：至於〜更是（極端）', 'に至る：到達', 'に至るまで：甚至到'],
            commonMistakes: ['○ 弟に至っては / × 弟に至ると → 「に至っては」是固定用法'],
        },
    },
    // ━━━ たる (being - formal) ━━━
    {
        id: 'g_n1_014', category: 'grammar', level: 'N1', tags: ['literary', 'identity'],
        stem: '教師{きょうし}___者{もの}、常{つね}に模範{もはん}を示{しめ}すべきだ。',
        stemZh: '身為教師，應該時刻做出表率。',
        options: [
            { text: 'たる', reason: '正確！「たる」表示「作為〜的身份」。' },
            { text: 'なる', reason: '「なる」是古語，表示「是」，但不用於此句型。' },
            { text: 'である', reason: '「である」意思相近但不如「たる」正式。' },
            { text: 'としての', reason: '「としての」後接名詞，此處接「者」不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たる」表身份自覺',
            analysis: '「Nたる者」表示「身為N的人」，帶有強烈的身份自覺和責任感。多用於正式場合或訓示。',
            comparisons: ['たる者：身為〜的人（文語）', 'としての：作為〜的（現代）', 'である：是（斷定）'],
            commonMistakes: ['○ 教師たる者 / × 教師のたる者 → 名詞直接接「たる」'],
        },
    },
    // ━━━ なりに (in one's own way) ━━━
    {
        id: 'g_n1_015', category: 'grammar', level: 'N1', tags: ['expression', 'manner'],
        stem: '子供{こども}は子供{こども}___考{かんが}えている。',
        stemZh: '孩子有孩子自己的想法。',
        options: [
            { text: 'なりに', reason: '正確！「なりに」表示「以〜相應的方式」。' },
            { text: 'ながらに', reason: '「ながらに」表示維持狀態，語義不同。' },
            { text: 'ばかりに', reason: '「ばかりに」表原因，語義不合。' },
            { text: 'からには', reason: '「からには」表既然，語義不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なりに」表以自身方式',
            analysis: '「なりに」表示「以〜相應的程度或方式」，常用於肯定對方做了力所能及的努力。',
            comparisons: ['なりに：以自己的方式', 'ならでは：唯有〜才能', 'なりの：〜相應的（連體）'],
            commonMistakes: ['○ 子供なりに / × 子供のなりに → 名詞直接接「なりに」'],
        },
    },
    // ━━━ ようものなら (if one dares to) ━━━
    {
        id: 'g_n1_016', category: 'grammar', level: 'N1', tags: ['conditional', 'warning'],
        stem: '少{すこ}しでも油断{ゆだん}し___、大変{たいへん}なことになる。',
        stemZh: '只要稍有疏忽，就會出大事。',
        options: [
            { text: 'ようものなら', reason: '正確！「ようものなら」表示萬一〜的話會有嚴重後果。' },
            { text: 'ようとすると', reason: '「ようとすると」表試圖時，非警告。' },
            { text: 'ようにも', reason: '「ようにも〜ない」表想做也做不到。' },
            { text: 'ようがないから', reason: '「ようがない」表沒辦法，語法不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようものなら」表假設警告',
            analysis: '「Vようものなら」表示「萬一做了〜的話」，後句必定是嚴重的不良後果。帶有強烈的警告語氣。',
            comparisons: ['ようものなら：萬一〜（嚴重後果）', 'ようとすると：試圖〜時', 'たら：如果（一般）'],
            commonMistakes: ['○ 油断しようものなら / × 油断するようものなら → 使用意志形「しよう」'],
        },
    },
    // ━━━ ともなると (when it comes to) ━━━
    {
        id: 'g_n1_017', category: 'grammar', level: 'N1', tags: ['formal', 'level'],
        stem: '社長{しゃちょう}___、毎日{まいにち}が会議{かいぎ}の連続{れんぞく}だ。',
        stemZh: '到了社長這個級別，每天都是接連不斷的會議。',
        options: [
            { text: 'ともなると', reason: '正確！「ともなると」表示到了某個程度或地位。' },
            { text: 'となると', reason: '「となると」意思相近但缺乏「達到某種程度」的含義。' },
            { text: 'としたら', reason: '「としたら」表假設，語義不同。' },
            { text: 'にしたら', reason: '「にしたら」表從〜的立場，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ともなると」表達到某程度',
            analysis: '「ともなると/ともなれば」表示「一旦達到〜的程度/地位」，暗示與一般情況有很大不同。',
            comparisons: ['ともなると：到了〜級別', 'となると：要是〜的話', 'にもなると：也到了〜'],
            commonMistakes: ['○ 社長ともなると / × 社長でもなると → 「ともなると」是固定形式'],
        },
    },
    // ━━━ なくして(は) (without) ━━━
    {
        id: 'g_n1_018', category: 'grammar', level: 'N1', tags: ['formal', 'condition'],
        stem: '努力{どりょく}___成功{せいこう}はあり得{え}ない。',
        stemZh: '沒有努力就不可能成功。',
        options: [
            { text: 'なくしては', reason: '正確！「なくしては」表示如果沒有〜則不可能。' },
            { text: 'なしでは', reason: '「なしでは」意思相近但不如「なくしては」書面化。' },
            { text: 'がなければ', reason: '「がなければ」是一般條件，語體不合。' },
            { text: 'をぬきにして', reason: '「をぬきにして」表省去，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なくしては」表不可或缺',
            analysis: '「なくしては」（也寫作「なくして」）表示「如果沒有〜」，後句通常是否定結果，強調不可或缺。',
            comparisons: ['なくしては：如果沒有（書面強調）', 'なしでは：沒有的話', 'がなければ：如果沒有（一般）'],
            commonMistakes: ['○ 努力なくしては / × 努力がなくしては → 名詞直接接「なくしては」'],
        },
    },
    // ━━━ 極まりない (extremely) ━━━
    {
        id: 'g_n1_019', category: 'grammar', level: 'N1', tags: ['formal', 'degree'],
        stem: 'そのような発言{はつげん}は失礼{しつれい}___。',
        stemZh: '那樣的發言極其失禮。',
        options: [
            { text: '極まりない', reason: '正確！「極まりない」表示〜到了極點。' },
            { text: '極まる', reason: '「極まる」也可以，但「極まりない」更常見且語義相同。' },
            { text: '極めて', reason: '「極めて」是副詞，不能接在名詞後作謂語。' },
            { text: '極みだ', reason: '「の極みだ」才正確，「極みだ」直接接不合語法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「極まりない」表極端程度',
            analysis: '「な形容詞語幹＋極まりない/極まる」表示「〜到極點」。注意「極まりない」（否定形）反而表示肯定的極端程度。',
            comparisons: ['極まりない：極其〜', '極まる：極其〜', 'の極み：〜之極'],
            commonMistakes: ['○ 失礼極まりない / × 失礼な極まりない → 不加「な」直接接'],
        },
    },
    // ━━━ の至り (the height of) ━━━
    {
        id: 'g_n1_020', category: 'grammar', level: 'N1', tags: ['formal', 'degree'],
        stem: 'お目{め}にかかれて光栄{こうえい}___です。',
        stemZh: '能見到您是無上的光榮。',
        options: [
            { text: 'の至り', reason: '正確！「の至り」表示〜之至，極其〜。' },
            { text: 'の極み', reason: '「の極み」意思相近，但「光栄の至り」是固定搭配。' },
            { text: '極まりない', reason: '「光栄極まりない」語法可以但不如「の至り」自然。' },
            { text: 'の限り', reason: '「の限り」表示「盡〜」，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「の至り」表感情之極',
            analysis: '「の至り」用於表達感情達到頂點。常用搭配：「光栄の至り」「赤面の至り」「若気の至り」。',
            comparisons: ['の至り：〜之至（感情）', 'の極み：〜之極（程度）', '極まりない：極其〜（形容）'],
            commonMistakes: ['○ 光栄の至り / × 光栄な至り → 用「の」連接'],
        },
    },
    // ━━━ ならでは (unique to) ━━━
    {
        id: 'g_n1_021', category: 'grammar', level: 'N1', tags: ['expression', 'uniqueness'],
        stem: 'この味{あじ}は京都{きょうと}___のものだ。',
        stemZh: '這個味道是京都才有的。',
        options: [
            { text: 'ならでは', reason: '正確！「ならでは」表示唯有〜才有。' },
            { text: 'だけ', reason: '「だけ」表限定但缺乏「特有」的語感。' },
            { text: 'しか', reason: '「しか〜ない」表僅限，但用法不同。' },
            { text: 'こそ', reason: '「こそ」強調但不表「特有」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ならでは」表獨特性',
            analysis: '「ならでは」表示「只有〜才有」「唯〜獨有」，帶有正面評價，常用於讚美。',
            comparisons: ['ならでは：唯有〜才能', 'だけ：只有〜', 'しか〜ない：僅僅〜'],
            commonMistakes: ['○ 京都ならでは / × 京都のならでは → 名詞直接接「ならでは」'],
        },
    },
    // ━━━ にほかならない (nothing but) ━━━
    {
        id: 'g_n1_022', category: 'grammar', level: 'N1', tags: ['formal', 'assertion'],
        stem: 'この成果{せいか}は皆{みな}さんの努力{どりょく}の結果{けっか}___。',
        stemZh: '這個成果正是大家努力的結果。',
        options: [
            { text: 'にほかならない', reason: '正確！「にほかならない」表示正是〜、無非是〜。' },
            { text: 'にすぎない', reason: '「にすぎない」表僅僅是，語氣貶低。' },
            { text: 'にちがいない', reason: '「にちがいない」表一定是，推量用。' },
            { text: 'にきまっている', reason: '「にきまっている」表肯定是，較口語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にほかならない」表斷定',
            analysis: '「にほかならない」表示「正是〜」「無非是〜」，是強烈的斷定表現，常用於書面或演說。',
            comparisons: ['にほかならない：正是〜', 'にすぎない：僅僅是〜', 'にちがいない：一定是〜'],
            commonMistakes: ['○ 努力の結果にほかならない / × 努力の結果でほかならない → 用「に」非「で」'],
        },
    },
    // ━━━ までもない (no need to) ━━━
    {
        id: 'g_n1_023', category: 'grammar', level: 'N1', tags: ['expression', 'unnecessary'],
        stem: 'そんなことは言{い}う___。',
        stemZh: '那種事不用說也知道。',
        options: [
            { text: 'までもない', reason: '正確！「までもない」表示沒必要〜。' },
            { text: 'わけがない', reason: '「わけがない」表不可能，語義不同。' },
            { text: 'はずがない', reason: '「はずがない」表不應該有，語義不同。' },
            { text: 'ものではない', reason: '「ものではない」表不應該做，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「までもない」表不必要',
            analysis: '「Vまでもない」表示「不需要特意做〜」「沒必要〜」。常見搭配：「言うまでもない」。',
            comparisons: ['までもない：沒必要〜', 'ことはない：不必〜', 'には及ばない：不需要〜'],
            commonMistakes: ['○ 言うまでもない / × 言うまでない → 通常保留「も」'],
        },
    },
    // ━━━ に足る (worth) ━━━
    {
        id: 'g_n1_024', category: 'grammar', level: 'N1', tags: ['formal', 'worth'],
        stem: '彼{かれ}は信頼{しんらい}する___人物{じんぶつ}だ。',
        stemZh: '他是值得信賴的人物。',
        options: [
            { text: 'に足る', reason: '正確！「に足る」表示值得〜、足以〜。' },
            { text: 'に耐える', reason: '「に耐える」表經得起，語義不同。' },
            { text: 'に値する', reason: '「に値する」意思相近，但「信頼に足る」是更常見的搭配。' },
            { text: 'に堪えない', reason: '「に堪えない」表不堪〜，語義相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に足る」表值得',
            analysis: '「に足る」表示「值得〜」「足以〜」。常用搭配：「信頼に足る」「注目に足る」「取るに足らない」。',
            comparisons: ['に足る：值得（肯定）', 'に足らない：不值得（否定）', 'に値する：有〜的價值'],
            commonMistakes: ['○ 信頼するに足る / × 信頼にする足る → 「する」在「に」前'],
        },
    },
    // ━━━ かたわら (while also) ━━━
    {
        id: 'g_n1_025', category: 'grammar', level: 'N1', tags: ['formal', 'concurrent'],
        stem: '会社{かいしゃ}に勤{つと}める___、小説{しょうせつ}を書{か}いている。',
        stemZh: '在公司上班的同時，也在寫小說。',
        options: [
            { text: 'かたわら', reason: '正確！「かたわら」表示在做主要事情的同時。' },
            { text: 'ながら', reason: '「ながら」表同時但多用於短暫動作，此處為長期並行。' },
            { text: 'つつ', reason: '「つつ」表同時進行，但不如「かたわら」強調主副關係。' },
            { text: 'がてら', reason: '「がてら」表順便，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かたわら」表兼做',
            analysis: '「かたわら」表示在從事主要活動的同時，還兼做另一件事。前面是主要活動，後面是副業或兼職。',
            comparisons: ['かたわら：兼做（長期）', 'ながら：同時（短暫）', 'がてら：順便'],
            commonMistakes: ['○ 勤めるかたわら / × 勤めながらのかたわら → 不與「ながら」重複使用'],
        },
    },
    // ━━━ そばから (as soon as) ━━━
    {
        id: 'g_n1_026', category: 'grammar', level: 'N1', tags: ['expression', 'repetition'],
        stem: '片付{かたづ}ける___、子供{こども}が散{ち}らかす。',
        stemZh: '剛整理好，孩子又弄亂了。',
        options: [
            { text: 'そばから', reason: '正確！「そばから」表示剛做完就又恢復原狀。' },
            { text: 'なり', reason: '「なり」表一〜就〜，但不強調反復。' },
            { text: 'が早いか', reason: '「が早いか」表剛一〜就，但不強調徒勞。' },
            { text: 'や否や', reason: '「や否や」表一〜立刻，但不強調反復。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「そばから」表反復徒勞',
            analysis: '「そばから」表示每次做完某事，結果馬上就被推翻或恢復原狀。帶有徒勞感和無奈感。',
            comparisons: ['そばから：剛〜就又（徒勞反復）', 'なり：一〜就（即時）', 'たとたん：剛〜就（意外）'],
            commonMistakes: ['○ 片付けるそばから / × 片付けたそばから → 用辭書形或た形皆可'],
        },
    },
    // ━━━ ずにはすまない (cannot help but) ━━━
    {
        id: 'g_n1_027', category: 'grammar', level: 'N1', tags: ['formal', 'obligation'],
        stem: 'これだけの被害{ひがい}を出{だ}した以上{いじょう}、謝罪{しゃざい}せ___。',
        stemZh: '既然造成了這麼大的損害，就不能不道歉。',
        options: [
            { text: 'ずにはすまない', reason: '正確！「ずにはすまない」表示不做不行。' },
            { text: 'ずにはいられない', reason: '「ずにはいられない」表忍不住，側重情感衝動。' },
            { text: 'ずにはおかない', reason: '「ずにはおかない」表必然導致，非義務。' },
            { text: 'ざるを得ない', reason: '「ざるを得ない」意思相近但缺乏社會義務感。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ずにはすまない」表義務性必然',
            analysis: '「ずにはすまない」表示從社會道義上「不做的話交代不過去」。比「ざるを得ない」更強調道義責任。',
            comparisons: ['ずにはすまない：不做不行（道義）', 'ざるを得ない：不得不（無奈）', 'ずにはいられない：忍不住（情感）'],
            commonMistakes: ['○ 謝罪せずにはすまない / × 謝罪しないにはすまない → 使用「ず」形'],
        },
    },
    // ━━━ てやまない (ceaselessly) ━━━
    {
        id: 'g_n1_028', category: 'grammar', level: 'N1', tags: ['formal', 'emotion'],
        stem: '皆{みな}さまの今後{こんご}のご活躍{かつやく}を願{ねが}っ___。',
        stemZh: '衷心祝願各位今後大展身手。',
        options: [
            { text: 'てやまない', reason: '正確！「てやまない」表示衷心地、不停地。' },
            { text: 'てならない', reason: '「てならない」表自然而然地，不用於祝願。' },
            { text: 'てたまらない', reason: '「てたまらない」表受不了，語義不合。' },
            { text: 'てしかたない', reason: '「てしかたない」表沒辦法地，語義不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てやまない」表衷心不已',
            analysis: '「てやまない」表示感情持續不止，常用於「願ってやまない」「愛してやまない」等正式場合。',
            comparisons: ['てやまない：衷心地〜不已（正式）', 'てならない：自然而然地', 'てたまらない：〜得受不了'],
            commonMistakes: ['○ 願ってやまない / × 願いてやまない → 使用て形'],
        },
    },
    // ━━━ まみれ (covered in) ━━━
    {
        id: 'g_n1_029', category: 'grammar', level: 'N1', tags: ['expression', 'state'],
        stem: '子供{こども}たちは泥{どろ}___になって遊{あそ}んでいた。',
        stemZh: '孩子們渾身泥巴地在玩耍。',
        options: [
            { text: 'まみれ', reason: '正確！「まみれ」表示沾滿了髒東西。' },
            { text: 'だらけ', reason: '「だらけ」也表到處都是，但「泥まみれ」更自然。' },
            { text: 'ずくめ', reason: '「ずくめ」表全部都是，不用於髒污。' },
            { text: 'ぐるみ', reason: '「ぐるみ」表全體，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「まみれ」表沾滿污物',
            analysis: '「まみれ」表示表面沾滿不好的東西（泥、血、汗等）。只用於負面或骯髒的事物。',
            comparisons: ['まみれ：沾滿（髒東西）', 'だらけ：到處都是（缺點/多餘物）', 'ずくめ：全是（中性/正面也可）'],
            commonMistakes: ['○ 泥まみれ / × 花まみれ → 「まみれ」不用於正面事物'],
        },
    },
    // ━━━ ずくめ (entirely) ━━━
    {
        id: 'g_n1_030', category: 'grammar', level: 'N1', tags: ['expression', 'totality'],
        stem: '今年{ことし}はいいこと___の一年{いちねん}だった。',
        stemZh: '今年是滿滿好事的一年。',
        options: [
            { text: 'ずくめ', reason: '正確！「ずくめ」表示清一色全是〜。' },
            { text: 'まみれ', reason: '「まみれ」用於髒污，不用於抽象好事。' },
            { text: 'だらけ', reason: '「だらけ」帶負面語感，不用於好事。' },
            { text: 'ばかり', reason: '「ばかり」表只有，但缺乏「清一色」的語感。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ずくめ」表全部都是',
            analysis: '「ずくめ」表示「清一色都是〜」「全都是〜」。可用於正面也可用於中性事物。常見：「黒ずくめ」「いいことずくめ」。',
            comparisons: ['ずくめ：全是（可正面）', 'だらけ：到處是（負面）', 'まみれ：沾滿（髒污）'],
            commonMistakes: ['○ いいことずくめ / × いいことのずくめ → 名詞直接接「ずくめ」'],
        },
    },
    // ━━━ めく (to seem like) ━━━
    {
        id: 'g_n1_031', category: 'grammar', level: 'N1', tags: ['expression', 'appearance'],
        stem: '春{はる}___いた陽気{ようき}になってきた。',
        stemZh: '天氣開始帶有春天的氣息了。',
        options: [
            { text: 'め', reason: '正確！「めく」表示帶有〜的樣子，此處為「春めいた」的連用形。' },
            { text: 'らし', reason: '「らしい」表典型，但不接「いた」。' },
            { text: 'っぽ', reason: '「っぽい」表傾向，但不接「いた」。' },
            { text: 'がまし', reason: '「がましい」表貶義地像〜，語義不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「めく」表帶有〜氣息',
            analysis: '「めく」接在名詞後，表示「帶有〜的氣息/樣子」。活用為五段動詞：春めく→春めいた→春めいて。',
            comparisons: ['めく：帶有〜氣息', 'らしい：典型的〜', 'っぽい：有〜傾向'],
            commonMistakes: ['○ 春めいた / × 春めくた → 「めく」是五段動詞，た形為「めいた」'],
        },
    },
    // ━━━ がてら (while/on the occasion of) ━━━
    {
        id: 'g_n1_032', category: 'grammar', level: 'N1', tags: ['expression', 'occasion'],
        stem: '散歩{さんぽ}___、郵便局{ゆうびんきょく}に寄{よ}った。',
        stemZh: '散步順便去了一趟郵局。',
        options: [
            { text: 'がてら', reason: '正確！「がてら」表示順便、兼做。' },
            { text: 'かたわら', reason: '「かたわら」表兼職長期活動，不用於順便。' },
            { text: 'ついでに', reason: '「ついでに」意思相近但更口語。' },
            { text: 'かたがた', reason: '「かたがた」更正式，多用於拜訪。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「がてら」表順便做某事',
            analysis: '「がてら」表示在做某事的同時順便做另一件事。接在動詞ます形或動作名詞後。',
            comparisons: ['がてら：順便（口語略正式）', 'ついでに：順便（口語）', 'かたがた：順便（正式）'],
            commonMistakes: ['○ 散歩がてら / × 散歩をがてら → 名詞直接接「がてら」'],
        },
    },
    // ━━━ ものを (if only... would have) ━━━
    {
        id: 'g_n1_033', category: 'grammar', level: 'N1', tags: ['expression', 'regret'],
        stem: '早{はや}く言{い}ってくれれば手伝{てつだ}った___。',
        stemZh: '早點說的話我就幫忙了啊。',
        options: [
            { text: 'ものを', reason: '正確！「ものを」表示遺憾、責備。' },
            { text: 'ものの', reason: '「ものの」表雖然，語義不同。' },
            { text: 'ものだ', reason: '「ものだ」表感嘆或理應，語義不同。' },
            { text: 'ものなら', reason: '「ものなら」表萬一，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ものを」表遺憾責備',
            analysis: '「ものを」用於句末或中途，表示「明明〜卻」「如果〜就好了」的遺憾或責備語氣。',
            comparisons: ['ものを：明明〜卻（遺憾）', 'ものの：雖然〜但', 'ものなら：萬一〜的話'],
            commonMistakes: ['○ 手伝ったものを / × 手伝うものを → 前句用過去形表反事實'],
        },
    },
    // ━━━ ことなしに (without doing) ━━━
    {
        id: 'g_n1_034', category: 'grammar', level: 'N1', tags: ['formal', 'without'],
        stem: '許可{きょか}を得{え}る___、勝手{かって}に使{つか}ってはいけない。',
        stemZh: '不經過許可，不得擅自使用。',
        options: [
            { text: 'ことなしに', reason: '正確！「ことなしに」表示不做〜就。' },
            { text: 'ことなく', reason: '「ことなく」意思相近但語體不同。' },
            { text: 'ないで', reason: '「ないで」是一般否定，不夠正式。' },
            { text: 'ずに', reason: '「ずに」表不做〜地，但語體較一般。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことなしに」表不做某事就',
            analysis: '「ことなしに」是書面語，表示「不做〜就/地」。比「ないで」「ずに」更正式。',
            comparisons: ['ことなしに：不做〜就（書面）', 'ことなく：不〜地（書面）', 'ずに：不〜地（一般）'],
            commonMistakes: ['○ 得ることなしに / × 得ないことなしに → 用肯定辭書形接「ことなしに」'],
        },
    },
    // ━━━ をおいて (besides/other than) ━━━
    {
        id: 'g_n1_035', category: 'grammar', level: 'N1', tags: ['formal', 'exclusion'],
        stem: 'この仕事{しごと}を任{まか}せられるのは彼{かれ}___ほかにいない。',
        stemZh: '能託付這份工作的，除了他以外別無他人。',
        options: [
            { text: 'をおいて', reason: '正確！「をおいて〜ない」表示除〜之外別無。' },
            { text: 'をもって', reason: '「をもって」表手段或界限，語義不同。' },
            { text: 'をよそに', reason: '「をよそに」表不顧，語義不同。' },
            { text: 'を除いて', reason: '「を除いて」意思相近但「をおいて」更強調唯一性。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「をおいて〜ない」表唯一',
            analysis: '「をおいて〜ない」表示「除了〜之外（沒有其他）」，強調某人或某物的唯一性和不可替代性。',
            comparisons: ['をおいて〜ない：除〜之外別無（唯一性）', 'を除いて：除了〜以外', 'のほかに：除了〜'],
            commonMistakes: ['○ 彼をおいてほかにいない / × 彼をおいていない → 後接「ほかにいない」'],
        },
    },
    // ━━━ を皮切りに (starting with) ━━━
    {
        id: 'g_n1_036', category: 'grammar', level: 'N1', tags: ['formal', 'beginning'],
        stem: '東京{とうきょう}公演{こうえん}___、全国{ぜんこく}ツアーが始{はじ}まった。',
        stemZh: '以東京公演為起點，全國巡演開始了。',
        options: [
            { text: 'を皮切りに', reason: '正確！「を皮切りに」表示以〜為開端。' },
            { text: 'をきっかけに', reason: '「をきっかけに」表契機，不強調連鎖性。' },
            { text: 'を機に', reason: '「を機に」表趁機，不強調一連串。' },
            { text: 'を始めとして', reason: '「を始めとして」表以〜為首，列舉用。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を皮切りに」表以〜為開端',
            analysis: '「を皮切りに」表示以某事為起點，之後接連發生一系列類似的事情。',
            comparisons: ['を皮切りに：以〜為開端（連鎖）', 'をきっかけに：以〜為契機', 'を機に：趁〜機會'],
            commonMistakes: ['○ 東京公演を皮切りに / × 東京公演の皮切りに → 用「を」非「の」'],
        },
    },
    // ━━━ を余儀なくされる (be forced to) ━━━
    {
        id: 'g_n1_037', category: 'grammar', level: 'N1', tags: ['formal', 'compulsion'],
        stem: '台風{たいふう}の影響{えいきょう}で、計画{けいかく}の変更{へんこう}___。',
        stemZh: '受颱風影響，被迫變更計畫。',
        options: [
            { text: 'を余儀なくされた', reason: '正確！「を余儀なくされる」表被迫〜。' },
            { text: 'をやむを得なかった', reason: '「やむを得ない」是形容詞，不能這樣接。' },
            { text: 'を仕方なくした', reason: '語法不正確。' },
            { text: 'を強制された', reason: '「強制された」語義相近但不如「余儀なくされた」書面化。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を余儀なくされる」表被迫',
            analysis: '「を余儀なくされる」是被動表現，表示因外部因素被迫做某事。「余儀ない」意為「不得已」。',
            comparisons: ['を余儀なくされる：被迫（被動）', 'を余儀なくさせる：迫使（使役）', 'ざるを得ない：不得不'],
            commonMistakes: ['○ 変更を余儀なくされた / × 変更が余儀なくされた → 用「を」非「が」'],
        },
    },
    // ━━━ あっての (exists because of) ━━━
    {
        id: 'g_n1_038', category: 'grammar', level: 'N1', tags: ['expression', 'cause'],
        stem: 'お客{きゃく}さま___商売{しょうばい}です。',
        stemZh: '有了客人才有生意。',
        options: [
            { text: 'あっての', reason: '正確！「あっての」表示有了〜才有。' },
            { text: 'あるの', reason: '語法不正確，缺少て形。' },
            { text: 'のための', reason: '「のための」表目的，語義不同。' },
            { text: 'によっての', reason: '「によっての」語法不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「あっての」表不可或缺',
            analysis: '「AあってのB」表示「有了A才有B」，強調A是B存在的前提條件，A不可或缺。',
            comparisons: ['あっての：有了〜才有', 'ならではの：唯有〜才有的', 'があるからこそ：正因為有〜'],
            commonMistakes: ['○ お客さまあっての商売 / × お客さまがあっての商売 → 不加「が」'],
        },
    },
    // ━━━ ばこそ (precisely because) ━━━
    {
        id: 'g_n1_039', category: 'grammar', level: 'N1', tags: ['expression', 'reason'],
        stem: '君{きみ}のことを思{おも}え___、厳{きび}しく言{い}うのだ。',
        stemZh: '正因為在意你，才嚴厲地說。',
        options: [
            { text: 'ばこそ', reason: '正確！「ばこそ」表示正因為〜才。' },
            { text: 'ばかり', reason: '「ばかり」表只是，語義不同。' },
            { text: 'ばかりに', reason: '「ばかりに」表就因為〜（負面結果），語義不同。' },
            { text: 'ばいいのに', reason: '「ばいいのに」表要是〜就好了，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ばこそ」表正因為',
            analysis: '「ばこそ」表示「正因為〜才」，強調原因。用「こそ」加強語氣，表示真正的理由。',
            comparisons: ['ばこそ：正因為〜才', 'からこそ：正因為（更常見）', 'ばかりに：就因為〜（不好結果）'],
            commonMistakes: ['○ 思えばこそ / × 思うばこそ → 使用假定形「思えば」+ こそ'],
        },
    },
    // ━━━ ばそれまでだ (if... then it's all over) ━━━
    {
        id: 'g_n1_040', category: 'grammar', level: 'N1', tags: ['expression', 'resignation'],
        stem: 'やる気{き}がなけれ___、何{なに}を教{おし}えても無駄{むだ}だ。',
        stemZh: '如果沒有幹勁的話，教什麼都是白費。',
        options: [
            { text: 'ばそれまでだ', reason: '正確！「ばそれまでだ」表示要是〜就完了。' },
            { text: 'ばかりだ', reason: '「ばかりだ」表一直〜，語義不同。' },
            { text: 'ば済む', reason: '「ば済む」表做了就行，語義相反。' },
            { text: 'ばいい', reason: '「ばいい」表做〜就好，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ばそれまでだ」表一切徒勞',
            analysis: '「ばそれまでだ」表示「如果〜的話就到此為止了」「就完了」，帶有放棄或無奈的語氣。',
            comparisons: ['ばそれまでだ：要是〜就完了', 'たらそれまでだ：如果〜就完了', 'までだ：只好〜罷了'],
            commonMistakes: ['○ なければそれまでだ / × ないならそれまでだ → 使用假定形「〜ば」'],
        },
    },
    // ━━━ だに (even just) ━━━
    {
        id: 'g_n1_041', category: 'grammar', level: 'N1', tags: ['literary', 'emphasis'],
        stem: 'あの事故{じこ}は思{おも}い出{だ}す___恐{おそ}ろしい。',
        stemZh: '那場事故光是想起來就覺得可怕。',
        options: [
            { text: 'だに', reason: '正確！「だに」表示光是〜就〜。' },
            { text: 'さえ', reason: '「さえ」表連〜都，但「思い出すだに」是固定搭配。' },
            { text: 'すら', reason: '「すら」表連〜也，但此處用「だに」更文語。' },
            { text: 'でも', reason: '「でも」太口語，不符合文語語體。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「だに」表光是〜就',
            analysis: '「だに」是文語助詞，表示「光是〜就」「連〜都」。常見搭配：「想像するだに」「思い出すだに」。',
            comparisons: ['だに：光是〜就（文語）', 'さえ：連〜都', 'すら：連〜也'],
            commonMistakes: ['○ 思い出すだに / × 思い出してだに → 用辭書形接「だに」'],
        },
    },
    // ━━━ であれ (even if/regardless) ━━━
    {
        id: 'g_n1_042', category: 'grammar', level: 'N1', tags: ['formal', 'concession'],
        stem: 'たとえ王様{おうさま}___、法{ほう}の前{まえ}では平等{びょうどう}だ。',
        stemZh: '即使是國王，在法律面前也是平等的。',
        options: [
            { text: 'であれ', reason: '正確！「であれ」表示即使是〜也。' },
            { text: 'であって', reason: '「であって」表因為是，語義不同。' },
            { text: 'であるから', reason: '「であるから」表因為是，語義不同。' },
            { text: 'でありながら', reason: '「でありながら」表雖然是但，不如「であれ」強調讓步。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「であれ」表讓步',
            analysis: '「であれ」（「である」的命令形）用於讓步句，表示「即使是〜也」「不管是〜」。',
            comparisons: ['であれ：即使是（讓步）', 'であれ〜であれ：不管是〜還是〜', 'であろうと：即便是'],
            commonMistakes: ['○ 王様であれ / × 王様でもあれ → 不加「も」'],
        },
    },
    // ━━━ が早いか (as soon as) ━━━
    {
        id: 'g_n1_043', category: 'grammar', level: 'N1', tags: ['expression', 'immediacy'],
        stem: 'ベルが鳴{な}った___、生徒{せいと}たちは教室{きょうしつ}を飛{と}び出{だ}した。',
        stemZh: '鈴聲一響，學生們就衝出了教室。',
        options: [
            { text: 'が早いか', reason: '正確！「が早いか」表示剛一〜就立刻。' },
            { text: 'や否や', reason: '「や否や」意思相近，但「が早いか」更強調速度。' },
            { text: 'なり', reason: '「なり」也表即時，但語感不同。' },
            { text: 'とたんに', reason: '「とたんに」表剛〜就，但前接た形。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「が早いか」表瞬間動作',
            analysis: '「が早いか」表示「剛〜就立刻」，強調兩個動作幾乎同時發生，速度極快。接辭書形。',
            comparisons: ['が早いか：剛一〜就（強調速度）', 'や否や：一〜就（文語）', 'なり：一〜就（接主語動作）'],
            commonMistakes: ['○ 鳴ったが早いか / × 鳴るが早いか → 用た形或辭書形皆可'],
        },
    },
    // ━━━ や否や (as soon as) ━━━
    {
        id: 'g_n1_044', category: 'grammar', level: 'N1', tags: ['literary', 'immediacy'],
        stem: '合図{あいず}がある___、選手{せんしゅ}たちは一斉{いっせい}に走{はし}り出{だ}した。',
        stemZh: '信號一發出，選手們就一齊跑了出去。',
        options: [
            { text: 'や否や', reason: '正確！「や否や」表示一〜就立刻。' },
            { text: 'が早いか', reason: '「が早いか」意思相近但語體不同。' },
            { text: 'かと思うと', reason: '「かと思うと」表以為〜結果，語義不同。' },
            { text: 'につれて', reason: '「につれて」表隨著，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「や否や」表即時發生',
            analysis: '「や否や（やいなや）」表示動作剛發生就立刻接著另一個動作。書面語，接辭書形。',
            comparisons: ['や否や：一〜就（書面）', 'が早いか：剛一〜就（速度感）', 'なり：一〜就（同一主語）'],
            commonMistakes: ['○ あるや否や / × あったや否や → 用辭書形接「や否や」'],
        },
    },
    // ━━━ すら / ですら (even) ━━━
    {
        id: 'g_n1_045', category: 'grammar', level: 'N1', tags: ['literary', 'emphasis'],
        stem: '大人{おとな}___解{と}けないこの問題{もんだい}を、子供{こども}が解{と}いた。',
        stemZh: '連大人都解不開的這道題，孩子卻解開了。',
        options: [
            { text: 'ですら', reason: '正確！「ですら」表示連〜都/也。' },
            { text: 'だけが', reason: '「だけが」表只有，語義不同。' },
            { text: 'こそが', reason: '「こそが」強調主語，語義不同。' },
            { text: 'までが', reason: '「までが」表甚至到，但不如「ですら」自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ですら」表極端舉例',
            analysis: '「ですら」（名詞＋ですら）表示「連〜都/也」，舉出極端例子來強調程度。比「さえ」「でも」更書面。',
            comparisons: ['ですら：連〜都（書面）', 'さえ：連〜都（一般）', 'でも：即使〜也（口語）'],
            commonMistakes: ['○ 大人ですら / × 大人のすら → 名詞接「ですら」'],
        },
    },
    // ━━━ といえども (even though) ━━━
    {
        id: 'g_n1_046', category: 'grammar', level: 'N1', tags: ['literary', 'concession'],
        stem: 'プロ___、ミスをすることはある。',
        stemZh: '即使是專業人士，也會犯錯。',
        options: [
            { text: 'といえども', reason: '正確！「といえども」表示即使〜也。' },
            { text: 'といっても', reason: '「といっても」語體較口語。' },
            { text: 'としたって', reason: '「としたって」語體較口語且不如「といえども」正式。' },
            { text: 'といったら', reason: '「といったら」表提起〜，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「といえども」表讓步',
            analysis: '「といえども」是文語讓步表現，表示「雖說是〜」「即使是〜也」。比「としても」更書面。',
            comparisons: ['といえども：即使是（文語）', 'としても：即使（一般）', 'とはいえ：雖說如此'],
            commonMistakes: ['○ プロといえども / × プロだといえども → 名詞直接接「といえども」'],
        },
    },
    // ━━━ ともあろうものが (someone of such status) ━━━
    {
        id: 'g_n1_047', category: 'grammar', level: 'N1', tags: ['formal', 'criticism'],
        stem: '教授{きょうじゅ}___、そんな初歩的{しょほてき}なミスをするとは。',
        stemZh: '堂堂教授，竟然犯那麼初級的錯誤。',
        options: [
            { text: 'ともあろうものが', reason: '正確！「ともあろうものが」表示身為〜竟然。' },
            { text: 'としたことが', reason: '「としたことが」意思相近，都表驚訝批評。' },
            { text: 'にしてみれば', reason: '「にしてみれば」表從〜的立場，語義不同。' },
            { text: 'たるものが', reason: '「たるものが」表身為〜應該，但後接「が」較少見。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ともあろうものが」表失望批評',
            analysis: '「ともあろうものが」表示「身為那樣地位的人竟然」，帶有強烈的失望和批評。',
            comparisons: ['ともあろうものが：堂堂〜竟然（驚訝批評）', 'としたことが：〜竟然（驚訝）', 'たる者：身為〜（自覺）'],
            commonMistakes: ['○ 教授ともあろうものが / × 教授にもあろうものが → 用「と」非「に」'],
        },
    },
    // ━━━ ともすれば (apt to) ━━━
    {
        id: 'g_n1_048', category: 'grammar', level: 'N1', tags: ['formal', 'tendency'],
        stem: '___自分{じぶん}の利益{りえき}ばかり考{かんが}えがちだ。',
        stemZh: '動不動就容易只想到自己的利益。',
        options: [
            { text: 'ともすれば', reason: '正確！「ともすれば」表示動輒、往往。' },
            { text: 'ともなると', reason: '「ともなると」表到了某程度，語義不同。' },
            { text: 'ともなく', reason: '「ともなく」表無意識地，語義不同。' },
            { text: 'ともかく', reason: '「ともかく」表總之，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ともすれば」表容易傾向',
            analysis: '「ともすれば」表示「動不動就」「往往容易」，暗示不好的傾向。常與「がちだ」搭配。',
            comparisons: ['ともすれば：動輒（不好傾向）', 'ともすると：動不動就', 'ややもすると：往往容易'],
            commonMistakes: ['○ ともすれば〜がちだ / × ともすれば〜だろう → 後接表示傾向的表現'],
        },
    },
    // ━━━ んがために (in order to - strong purpose) ━━━
    {
        id: 'g_n1_049', category: 'grammar', level: 'N1', tags: ['literary', 'purpose'],
        stem: '夢{ゆめ}を実現{じつげん}せ___、彼{かれ}は全{すべ}てを犠牲{ぎせい}にした。',
        stemZh: '為了實現夢想，他犧牲了一切。',
        options: [
            { text: 'んがために', reason: '正確！「んがために」表強烈目的。' },
            { text: 'るために', reason: '「るために」是一般目的表現，語體不夠文語。' },
            { text: 'べく', reason: '「べく」也表目的，但「んがために」更強烈。' },
            { text: 'ようと', reason: '「ようと」表即使想〜，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「んがために」表強烈目的',
            analysis: '「んがために」是文語的目的表現，「ん」是意志助動詞「む」的音變。表示強烈的目的意識。',
            comparisons: ['んがために：為了〜（文語・強烈）', 'べく：為了〜（書面）', 'ために：為了〜（一般）'],
            commonMistakes: ['○ 実現せんがために / × 実現するんがために → 使用未然形接「ん」'],
        },
    },
    // ━━━ んばかりに (as if about to) ━━━
    {
        id: 'g_n1_050', category: 'grammar', level: 'N1', tags: ['expression', 'appearance'],
        stem: '彼女{かのじょ}は泣{な}き出{だ}さ___の表情{ひょうじょう}で立{た}っていた。',
        stemZh: '她帶著快要哭出來般的表情站在那裡。',
        options: [
            { text: 'んばかり', reason: '正確！「んばかりに」表示簡直要〜似的。' },
            { text: 'そうな', reason: '「そうな」表看起來要〜，但語體不如「んばかり」強烈。' },
            { text: 'かのような', reason: '「かのような」表好像〜，但語法接續不同。' },
            { text: 'ともすれば', reason: '「ともすれば」表動輒，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「んばかりに」表快要〜的樣子',
            analysis: '「んばかりに」表示「簡直就像要〜似的」，描述誇張的樣態。「ん」是意志助動詞「む」的音變。',
            comparisons: ['んばかりに：簡直要〜似的（誇張）', 'そうに：看起來要〜', 'かのように：好像〜一樣'],
            commonMistakes: ['○ 泣き出さんばかり / × 泣き出すんばかり → 使用未然形接「ん」'],
        },
    },
    // ━━━ ながらに (inherently / from the start) ━━━
    {
        id: 'g_n1_051', category: 'grammar', level: 'N1', tags: ['literary', 'state'],
        stem: '彼{かれ}は生{う}まれ___にして天才{てんさい}だった。',
        stemZh: '他與生俱來就是天才。',
        options: [
            { text: 'ながら', reason: '正確！「ながらに」表示一如既往、與生俱來。' },
            { text: 'つつ', reason: '「つつ」表同時進行，語義不同。' },
            { text: 'ままで', reason: '「ままで」表保持狀態，不如「ながらに」文語。' },
            { text: 'のまま', reason: '「のまま」表原樣，語體不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ながらに」表與生俱來',
            analysis: '「ながらに」表示「保持原有狀態」「與生俱來」。「生まれながらにして」是固定搭配，表天生。',
            comparisons: ['ながらに：照舊/天生（文語）', 'ながら：一邊〜一邊', 'まま：保持原狀'],
            commonMistakes: ['○ 生まれながらに / × 生まれてながらに → 直接接「ながらに」'],
        },
    },
    // ━━━ ないまでも (even if not to the extent of) ━━━
    {
        id: 'g_n1_052', category: 'grammar', level: 'N1', tags: ['expression', 'concession'],
        stem: '完璧{かんぺき}で___、せめて基本{きほん}はマスターしたい。',
        stemZh: '即使達不到完美，至少想掌握基本。',
        options: [
            { text: 'ないまでも', reason: '正確！「ないまでも」表示即便不到〜的程度，至少。' },
            { text: 'なくても', reason: '「なくても」是一般讓步，缺少「程度」的語感。' },
            { text: 'ないとしても', reason: '「ないとしても」意思相近但語體不同。' },
            { text: 'ないからといって', reason: '「ないからといって」表不能因為不〜就，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ないまでも」表最低程度讓步',
            analysis: '「ないまでも」表示「即使達不到〜的程度，至少要做到」。後句常有「せめて」「少なくとも」。',
            comparisons: ['ないまでも：即便不到（最低要求）', 'なくても：即使不（一般讓步）', 'ずとも：就算不〜也'],
            commonMistakes: ['○ 完璧でないまでも / × 完璧ではないまでも → 去掉「は」更自然'],
        },
    },
    // ━━━ ないものでもない (not impossible) ━━━
    {
        id: 'g_n1_053', category: 'grammar', level: 'N1', tags: ['expression', 'possibility'],
        stem: '条件{じょうけん}次第{しだい}では、協力{きょうりょく}でき___。',
        stemZh: '看條件的話，也不是不能合作。',
        options: [
            { text: 'ないものでもない', reason: '正確！「ないものでもない」表示也不是不可以。' },
            { text: 'ないことはない', reason: '「ないことはない」意思相近但語氣不同。' },
            { text: 'ないわけではない', reason: '「ないわけではない」也表雙重否定，但語體不同。' },
            { text: 'なくはない', reason: '「なくはない」較口語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ないものでもない」表婉轉肯定',
            analysis: '「ないものでもない」是雙重否定，表示「也不是完全不可以」，語氣委婉含蓄。',
            comparisons: ['ないものでもない：也不是不可以（婉轉）', 'ないことはない：不是不〜', 'なくはない：不是沒有'],
            commonMistakes: ['○ できないものでもない / × できるものでもない → 前接否定形'],
        },
    },
    // ━━━ ないものか (isn't there a way) ━━━
    {
        id: 'g_n1_054', category: 'grammar', level: 'N1', tags: ['expression', 'wish'],
        stem: 'もっと簡単{かんたん}にできる方法{ほうほう}は___。',
        stemZh: '有沒有更簡單的方法呢？',
        options: [
            { text: 'ないものか', reason: '正確！「ないものか」表示能不能〜呢（強烈期望）。' },
            { text: 'ないだろうか', reason: '「ないだろうか」是一般疑問，語氣較弱。' },
            { text: 'ないのか', reason: '「ないのか」是質問，不是期望。' },
            { text: 'なくないか', reason: '「なくないか」是確認，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ないものか」表強烈期望',
            analysis: '「ないものか/ないものだろうか」表示「能不能〜呢」「有沒有辦法〜呢」，帶有強烈的期望和渴望。',
            comparisons: ['ないものか：能不能〜（強烈期望）', 'ないだろうか：不是嗎（推測疑問）', 'ないかな：有沒有〜呢（口語）'],
            commonMistakes: ['○ ないものか / × ないものだか → 正確形式是「ないものか」或「ないものだろうか」'],
        },
    },
    // ━━━ ないとも限らない (might possibly) ━━━
    {
        id: 'g_n1_055', category: 'grammar', level: 'N1', tags: ['expression', 'possibility'],
        stem: '明日{あした}雨{あめ}が降{ふ}ら___から、傘{かさ}を持{も}っていこう。',
        stemZh: '明天也不見得不下雨，帶把傘去吧。',
        options: [
            { text: 'ないとも限らない', reason: '正確！「ないとも限らない」表示未必不會。' },
            { text: 'ないかもしれない', reason: '「ないかもしれない」表也許不會，語義相反。' },
            { text: 'ないに違いない', reason: '「ないに違いない」表一定不會，語義相反。' },
            { text: 'ないはずがない', reason: '「ないはずがない」表不可能不，語氣太強。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ないとも限らない」表可能性',
            analysis: '「ないとも限らない」表示「未必不會〜」「說不定會〜」，表達一種不排除某種可能的謹慎態度。',
            comparisons: ['ないとも限らない：未必不（謹慎）', 'かもしれない：也許（一般）', 'おそれがある：恐怕（擔憂）'],
            commonMistakes: ['○ 降らないとも限らない / × 降るないとも限らない → 動詞否定形接「とも限らない」'],
        },
    },
    // ━━━ に値する (worth) ━━━
    {
        id: 'g_n1_056', category: 'grammar', level: 'N1', tags: ['formal', 'evaluation'],
        stem: 'この作品{さくひん}は賞賛{しょうさん}___。',
        stemZh: '這部作品值得讚賞。',
        options: [
            { text: 'に値する', reason: '正確！「に値する」表示值得〜。' },
            { text: 'に足る', reason: '「に足る」意思相近，但「に値する」更常見於評價。' },
            { text: 'に耐える', reason: '「に耐える」表經得起，語義不同。' },
            { text: 'に堪える', reason: '「に堪える」表忍受得了，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に値する」表有〜的價值',
            analysis: '「に値する（にあたいする）」表示「值得〜」「有〜的價值」。常用於正式評價。',
            comparisons: ['に値する：值得（評價）', 'に足る：足以（資格）', 'に耐える：經得起（試煉）'],
            commonMistakes: ['○ 賞賛に値する / × 賞賛を値する → 用「に」非「を」'],
        },
    },
    // ━━━ にあって (in the situation of) ━━━
    {
        id: 'g_n1_057', category: 'grammar', level: 'N1', tags: ['formal', 'situation'],
        stem: '戦時中{せんじちゅう}___、人々{ひとびと}は食料{しょくりょう}不足{ぶそく}に苦{くる}しんだ。',
        stemZh: '在戰爭時期，人們飽受糧食不足之苦。',
        options: [
            { text: 'にあって', reason: '正確！「にあって」表示在〜的情況下。' },
            { text: 'において', reason: '「において」表場所場合，但不如「にあって」強調困境。' },
            { text: 'にとって', reason: '「にとって」表立場，語義不同。' },
            { text: 'に関して', reason: '「に関して」表關於，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にあって」表處境',
            analysis: '「にあって」表示「在〜的狀況/立場下」，常用於描述特殊或困難的處境。',
            comparisons: ['にあって：在〜情況下（特殊處境）', 'において：在〜（場所/場合）', 'では：在〜（一般）'],
            commonMistakes: ['○ 戦時中にあって / × 戦時中であって → 「にあって」非「であって」'],
        },
    },
    // ━━━ に引き換え (in contrast to) ━━━
    {
        id: 'g_n1_058', category: 'grammar', level: 'N1', tags: ['formal', 'contrast'],
        stem: '兄{あに}の真面目{まじめ}さ___、弟{おとうと}は遊{あそ}んでばかりだ。',
        stemZh: '相比哥哥的認真，弟弟只顧著玩。',
        options: [
            { text: 'に引き換え', reason: '正確！「に引き換え」表示與〜相反/相比。' },
            { text: 'に対して', reason: '「に対して」也表對比，但不如「に引き換え」強調反差。' },
            { text: 'に比べて', reason: '「に比べて」是一般比較，不強調反差。' },
            { text: 'に反して', reason: '「に反して」表違反，語義太強。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に引き換え」表強烈對比',
            analysis: '「に引き換え」表示兩者之間形成強烈反差或對比，常帶有對一方的不滿或感嘆。',
            comparisons: ['に引き換え：相比之下（強烈反差）', 'に対して：對比（客觀）', 'に比べて：比較（一般）'],
            commonMistakes: ['○ 真面目さに引き換え / × 真面目に引き換え → 名詞化後接「に引き換え」'],
        },
    },
    // ━━━ に至る (reach the point of) ━━━
    {
        id: 'g_n1_059', category: 'grammar', level: 'N1', tags: ['formal', 'result'],
        stem: '長年{ながねん}の交渉{こうしょう}の結果{けっか}、合意{ごうい}___。',
        stemZh: '經過長年的交涉，終於達成了共識。',
        options: [
            { text: 'に至った', reason: '正確！「に至る」表示到達〜的結果/地步。' },
            { text: 'になった', reason: '「になった」太一般，缺乏正式語感。' },
            { text: 'に達した', reason: '「に達した」表到達目標，但不如「に至った」書面化。' },
            { text: 'に及んだ', reason: '「に及んだ」表波及，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に至る」表發展結果',
            analysis: '「に至る」表示經過過程最終到達某個結果或地步，常用於書面語描述重要結果。',
            comparisons: ['に至る：發展到（書面結果）', 'になる：變成（一般）', 'に至るまで：甚至到'],
            commonMistakes: ['○ 合意に至った / × 合意まで至った → 用「に」非「まで」'],
        },
    },
    // ━━━ に言わせれば (if you ask someone) ━━━
    {
        id: 'g_n1_060', category: 'grammar', level: 'N1', tags: ['expression', 'viewpoint'],
        stem: '母{はは}___、もっと野菜{やさい}を食{た}べるべきだそうだ。',
        stemZh: '照我媽的說法，應該多吃蔬菜。',
        options: [
            { text: 'に言わせれば', reason: '正確！「に言わせれば」表示在〜看來。' },
            { text: 'によれば', reason: '「によれば」表根據消息來源，語義不同。' },
            { text: 'にしたら', reason: '「にしたら」表從〜的立場，語感較口語。' },
            { text: 'にとって', reason: '「にとって」表對〜來說，不強調「說法」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に言わせれば」表某人的看法',
            analysis: '「に言わせれば」表示「要是讓〜來說的話」「照〜的說法」，引述某人特有的意見或觀點。',
            comparisons: ['に言わせれば：照〜的說法', 'にしてみれば：從〜的角度', 'によると：根據〜'],
            commonMistakes: ['○ 母に言わせれば / × 母が言わせれば → 用「に」非「が」'],
        },
    },
    // ━━━ に限ったことではない (not limited to) ━━━
    {
        id: 'g_n1_061', category: 'grammar', level: 'N1', tags: ['expression', 'scope'],
        stem: '環境{かんきょう}問題{もんだい}は日本{にほん}___。',
        stemZh: '環境問題並不只限於日本。',
        options: [
            { text: 'に限ったことではない', reason: '正確！「に限ったことではない」表不限於。' },
            { text: 'に限らない', reason: '「に限らない」意思相近但「に限ったことではない」更強調普遍性。' },
            { text: 'だけではない', reason: '「だけではない」太一般。' },
            { text: 'ばかりではない', reason: '「ばかりではない」表不光是，語感較輕。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に限ったことではない」表非獨有',
            analysis: '「に限ったことではない」表示「不僅限於〜」「不只是〜的問題」，強調問題的普遍性。',
            comparisons: ['に限ったことではない：不限於（普遍性）', 'に限らず：不限（列舉）', 'だけではない：不只是'],
            commonMistakes: ['○ 日本に限ったことではない / × 日本だけに限ったことではない → 不加「だけ」'],
        },
    },
    // ━━━ にかかっては (when it comes to someone's skill) ━━━
    {
        id: 'g_n1_062', category: 'grammar', level: 'N1', tags: ['expression', 'ability'],
        stem: 'あのシェフ___、どんな食材{しょくざい}も美味{おい}しい料理{りょうり}に変{か}わる。',
        stemZh: '交到那位主廚手裡，任何食材都會變成美食。',
        options: [
            { text: 'にかかっては', reason: '正確！「にかかっては」表示交到〜手裡。' },
            { text: 'にとっては', reason: '「にとっては」表對〜而言，缺少「能力」的語感。' },
            { text: 'にしては', reason: '「にしては」表以〜來說（意外），語義不同。' },
            { text: 'においては', reason: '「においては」表在〜方面，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にかかっては」表仰仗能力',
            analysis: '「にかかっては/にかかったら」表示「交到〜手裡」「由〜來處理的話」，含有對某人特殊能力的認可。',
            comparisons: ['にかかっては：交到〜手裡（能力）', 'にかかっている：取決於', 'にとっては：對〜來說'],
            commonMistakes: ['○ シェフにかかっては / × シェフでかかっては → 用「に」非「で」'],
        },
    },
    // ━━━ にかこつけて (using as a pretext) ━━━
    {
        id: 'g_n1_063', category: 'grammar', level: 'N1', tags: ['expression', 'pretext'],
        stem: '出張{しゅっちょう}___、観光{かんこう}を楽{たの}しんでいるらしい。',
        stemZh: '聽說他借出差之名，在享受觀光。',
        options: [
            { text: 'にかこつけて', reason: '正確！「にかこつけて」表示以〜為藉口。' },
            { text: 'にかまけて', reason: '「にかまけて」表只顧著〜，語義不同。' },
            { text: 'をいいことに', reason: '「をいいことに」表趁機，語義相近但語感不同。' },
            { text: 'にかけては', reason: '「にかけては」表在〜方面，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にかこつけて」表找藉口',
            analysis: '「にかこつけて」表示「以〜為藉口」「假借〜的名義」。暗示真正目的與藉口不同。',
            comparisons: ['にかこつけて：以〜為藉口', 'をいいことに：趁〜之便', 'を口実にして：以〜為托詞'],
            commonMistakes: ['○ 出張にかこつけて / × 出張をかこつけて → 用「に」非「を」'],
        },
    },
    // ━━━ に難くない (not difficult to) ━━━
    {
        id: 'g_n1_064', category: 'grammar', level: 'N1', tags: ['formal', 'ease'],
        stem: '被災者{ひさいしゃ}の苦{くる}しみは想像{そうぞう}___。',
        stemZh: '災民的痛苦不難想像。',
        options: [
            { text: 'に難くない', reason: '正確！「に難くない」表示不難〜。' },
            { text: 'にたやすい', reason: '「にたやすい」語法不正確。' },
            { text: 'べくもない', reason: '「べくもない」表不可能，語義相反。' },
            { text: 'にすぎない', reason: '「にすぎない」表僅僅是，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に難くない」表不難',
            analysis: '「に難くない（にかたくない）」表示「不難〜」。常搭配「想像に難くない」「推察に難くない」。',
            comparisons: ['に難くない：不難〜（書面）', 'やすい：容易（一般）', 'にたやすい：輕易（不常見）'],
            commonMistakes: ['○ 想像に難くない / × 想像するに難くない → 名詞直接接「に難くない」'],
        },
    },
    // ━━━ にまつわる (related to) ━━━
    {
        id: 'g_n1_065', category: 'grammar', level: 'N1', tags: ['formal', 'relation'],
        stem: 'この城{しろ}___伝説{でんせつ}を聞{き}いたことがある。',
        stemZh: '聽過有關這座城堡的傳說。',
        options: [
            { text: 'にまつわる', reason: '正確！「にまつわる」表示與〜有關的。' },
            { text: 'に関する', reason: '「に関する」意思相近但「にまつわる」更有故事性。' },
            { text: 'についての', reason: '「についての」表關於，較一般。' },
            { text: 'にかけての', reason: '「にかけての」表在〜方面，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にまつわる」表有關聯',
            analysis: '「にまつわる」表示「與〜有關的」「圍繞〜的」，常用於故事、傳說、歷史等語境。',
            comparisons: ['にまつわる：與〜有關（故事性）', 'に関する：關於（正式）', 'についての：關於（一般）'],
            commonMistakes: ['○ 城にまつわる伝説 / × 城をまつわる伝説 → 用「に」非「を」'],
        },
    },
    // ━━━ に則って (in accordance with) ━━━
    {
        id: 'g_n1_066', category: 'grammar', level: 'N1', tags: ['formal', 'accordance'],
        stem: '法律{ほうりつ}___、適切{てきせつ}に対処{たいしょ}する。',
        stemZh: '按照法律，適當地處理。',
        options: [
            { text: 'に則って', reason: '正確！「に則って」表示遵照、按照。' },
            { text: 'に即して', reason: '「に即して」表結合實際，語義相近但側重不同。' },
            { text: 'に沿って', reason: '「に沿って」表沿著方針，語感較輕。' },
            { text: 'に応じて', reason: '「に応じて」表根據〜而變化，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に則って」表遵照規則',
            analysis: '「に則って（にのっとって）」表示「遵照」「依據」，常與法律、規則、傳統等搭配。',
            comparisons: ['に則って：遵照（法規/傳統）', 'に即して：根據（事實）', 'に基づいて：基於（資料）'],
            commonMistakes: ['○ 法律に則って / × 法律で則って → 用「に」非「で」'],
        },
    },
    // ━━━ に先駆けて (ahead of / pioneering) ━━━
    {
        id: 'g_n1_067', category: 'grammar', level: 'N1', tags: ['formal', 'precedence'],
        stem: '世界{せかい}___、日本{にほん}はこの技術{ぎじゅつ}を開発{かいはつ}した。',
        stemZh: '領先世界，日本開發了這項技術。',
        options: [
            { text: 'に先駆けて', reason: '正確！「に先駆けて」表示率先、先於。' },
            { text: 'に先立って', reason: '「に先立って」表在〜之前，語義相近但不強調領先。' },
            { text: 'に先んじて', reason: '「に先んじて」意思相同，但「に先駆けて」更常見。' },
            { text: 'より先に', reason: '「より先に」太口語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に先駆けて」表率先',
            analysis: '「に先駆けて（にさきがけて）」表示「率先於〜」「領先〜」，帶有先驅者的語感。',
            comparisons: ['に先駆けて：率先（先驅）', 'に先立って：在〜之前（時間）', 'に先んじて：搶先'],
            commonMistakes: ['○ 世界に先駆けて / × 世界を先駆けて → 用「に」非「を」'],
        },
    },
    // ━━━ に忍びない (cannot bear to) ━━━
    {
        id: 'g_n1_068', category: 'grammar', level: 'N1', tags: ['formal', 'emotion'],
        stem: '彼{かれ}の落{お}ち込{こ}んだ姿{すがた}は見{み}る___。',
        stemZh: '不忍心看到他沮喪的樣子。',
        options: [
            { text: 'に忍びない', reason: '正確！「に忍びない」表示不忍心〜。' },
            { text: 'に堪えない', reason: '「に堪えない」表不堪〜，語義不同。' },
            { text: 'に耐えない', reason: '「に耐えない」表忍受不了，側重忍耐。' },
            { text: 'にたまらない', reason: '「にたまらない」語法不正確。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に忍びない」表不忍',
            analysis: '「に忍びない（にしのびない）」表示「不忍心〜」「於心不忍」。常搭配「見る」「聞く」等感官動詞。',
            comparisons: ['に忍びない：不忍心（情感）', 'に堪えない：不堪（程度強烈）', 'に耐えない：忍受不了（忍耐）'],
            commonMistakes: ['○ 見るに忍びない / × 見ることに忍びない → 辭書形直接接「に忍びない」'],
        },
    },
    // ━━━ にしたところで (even for) ━━━
    {
        id: 'g_n1_069', category: 'grammar', level: 'N1', tags: ['formal', 'concession'],
        stem: '専門家{せんもんか}___、この問題{もんだい}の解決{かいけつ}は容易{ようい}ではない。',
        stemZh: '即使是專家，解決這個問題也不容易。',
        options: [
            { text: 'にしたところで', reason: '正確！「にしたところで」表示即使是〜也。' },
            { text: 'にしてみたら', reason: '「にしてみたら」表從〜的角度看，語義不同。' },
            { text: 'にしたって', reason: '「にしたって」意思相近但更口語。' },
            { text: 'にしろ', reason: '「にしろ」表即使，但語氣較輕。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にしたところで」表讓步',
            analysis: '「にしたところで」表示「即使是〜也（如此）」，舉出能力較高者也無法改變結果，強調困難。',
            comparisons: ['にしたところで：即使是〜也（書面）', 'にしたって：即使（口語）', 'としても：即使（一般）'],
            commonMistakes: ['○ 専門家にしたところで / × 専門家がしたところで → 用「に」非「が」'],
        },
    },
    // ━━━ にして (at the point of / being both) ━━━
    {
        id: 'g_n1_070', category: 'grammar', level: 'N1', tags: ['literary', 'dual'],
        stem: '彼{かれ}は政治家{せいじか}___実業家{じつぎょうか}でもある。',
        stemZh: '他既是政治家又是實業家。',
        options: [
            { text: 'にして', reason: '正確！「にして」表示既是〜又是〜。' },
            { text: 'として', reason: '「として」表身份但不表兼具。' },
            { text: 'であり', reason: '「であり」也可以但不如「にして」文語。' },
            { text: 'でもあり', reason: '「でもあり」較口語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にして」表兼具身份',
            analysis: '「にして」有多種用法：①既是〜又是（兼具）②在〜時候（時間）③連〜都（強調）。此處為①。',
            comparisons: ['にして：既是〜又是（文語）', 'であり：是〜且（書面）', 'で：是〜（口語）'],
            commonMistakes: ['○ 政治家にして実業家 / × 政治家としても実業家 → 「にして」表兼具'],
        },
    },
    // ━━━ に堪えない (unbearable / overwhelmed by) ━━━
    {
        id: 'g_n1_071', category: 'grammar', level: 'N1', tags: ['formal', 'emotion'],
        stem: 'ご支援{しえん}いただき、感謝{かんしゃ}___。',
        stemZh: '受到您的支持，感激不盡。',
        options: [
            { text: 'に堪えない', reason: '正確！「に堪えない」在此表示感情溢於言表。' },
            { text: 'に足りない', reason: '「に足りない」表不值得，語義相反。' },
            { text: 'にたまらない', reason: '「にたまらない」語法不正確。' },
            { text: 'に限りない', reason: '「に限りない」語法不正確。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に堪えない」表感情無法抑制',
            analysis: '「に堪えない」有兩個意思：①不堪〜（負面：見るに堪えない）②感激/感動到無法言喻（正面：感謝に堪えない）。',
            comparisons: ['感謝に堪えない：感激不盡（正面）', '見るに堪えない：不堪入目（負面）', 'に耐えない：忍受不了'],
            commonMistakes: ['○ 感謝に堪えない / × 感謝が堪えない → 用「に」非「が」'],
        },
    },
    // ━━━ に足らない (not worth) ━━━
    {
        id: 'g_n1_072', category: 'grammar', level: 'N1', tags: ['formal', 'dismissal'],
        stem: 'そんな噂{うわさ}は取{と}る___。',
        stemZh: '那種謠言不值一提。',
        options: [
            { text: 'に足らない', reason: '正確！「取るに足らない」表不值一提。' },
            { text: 'に値しない', reason: '「に値しない」也表不值，但「取るに足らない」是固定搭配。' },
            { text: 'に堪えない', reason: '「に堪えない」表不堪，語義不同。' },
            { text: 'に及ばない', reason: '「に及ばない」表不需要，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「取るに足らない」表不值一提',
            analysis: '「に足らない」表示「不值得〜」。「取るに足らない」是最常見的固定搭配，意為「不足取/不值一提」。',
            comparisons: ['に足らない：不值得（否定）', 'に足る：值得（肯定）', 'に値しない：沒有〜的價值'],
            commonMistakes: ['○ 取るに足らない / × 取るに足りらない → 正確否定形為「足らない」或「足りない」'],
        },
    },
    // ━━━ に照らして (in light of) ━━━
    {
        id: 'g_n1_073', category: 'grammar', level: 'N1', tags: ['formal', 'reference'],
        stem: '過去{かこ}の事例{じれい}___、今回{こんかい}の判断{はんだん}は妥当{だとう}だ。',
        stemZh: '對照過去的案例，這次的判斷是適當的。',
        options: [
            { text: 'に照らして', reason: '正確！「に照らして」表示對照、參照。' },
            { text: 'に基づいて', reason: '「に基づいて」表基於，不強調對照比較。' },
            { text: 'にしたがって', reason: '「にしたがって」表隨著，語義不同。' },
            { text: 'によって', reason: '「によって」表根據，太一般。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に照らして」表對照參考',
            analysis: '「に照らして（にてらして）」表示「對照〜來看」「以〜為參照」。常與法律、規則、先例等搭配。',
            comparisons: ['に照らして：對照（比較參考）', 'に基づいて：基於（根據）', 'に則って：遵照（遵從）'],
            commonMistakes: ['○ 事例に照らして / × 事例を照らして → 用「に」非「を」'],
        },
    },
    // ━━━ にとどまらず (not limited to) ━━━
    {
        id: 'g_n1_074', category: 'grammar', level: 'N1', tags: ['formal', 'extension'],
        stem: '被害{ひがい}はこの地域{ちいき}___、全国{ぜんこく}に広{ひろ}がった。',
        stemZh: '損害不僅限於這個地區，已擴展到全國。',
        options: [
            { text: 'にとどまらず', reason: '正確！「にとどまらず」表示不僅限於〜。' },
            { text: 'にかぎらず', reason: '「にかぎらず」表不限，但不如「にとどまらず」強調擴展。' },
            { text: 'だけでなく', reason: '「だけでなく」較口語。' },
            { text: 'のみならず', reason: '「のみならず」意思相近但語體不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にとどまらず」表超出範圍',
            analysis: '「にとどまらず」表示「不僅限於〜」，暗示事態已超出原有範圍繼續擴展。',
            comparisons: ['にとどまらず：不止於（擴展性）', 'にかぎらず：不限（一般）', 'のみならず：不僅（書面列舉）'],
            commonMistakes: ['○ この地域にとどまらず / × この地域だけにとどまらず → 不加「だけ」'],
        },
    },
    // ━━━ には無理がある (unreasonable) ━━━
    {
        id: 'g_n1_075', category: 'grammar', level: 'N1', tags: ['expression', 'judgment'],
        stem: '一日{いちにち}でこの仕事{しごと}を終{お}わらせる___。',
        stemZh: '一天內完成這份工作有些勉強。',
        options: [
            { text: 'には無理がある', reason: '正確！「には無理がある」表示〜有些勉強。' },
            { text: 'のは無理だ', reason: '「のは無理だ」太直接，「には無理がある」更委婉。' },
            { text: 'のは難しい', reason: '「のは難しい」表困難，但不如「には無理がある」強調不合理。' },
            { text: 'のは不可能だ', reason: '「のは不可能だ」太絕對。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「には無理がある」表勉強',
            analysis: '「には無理がある」表示「〜是有些勉強的」「做〜不太合理」，是委婉的否定判斷。',
            comparisons: ['には無理がある：有些勉強（委婉）', 'は無理だ：不可能（直接）', 'は難しい：很難（一般）'],
            commonMistakes: ['○ 終わらせるには無理がある / × 終わらせることには無理がある → 動詞直接接「には」'],
        },
    },
    // ━━━ にもほどがある (there's a limit) ━━━
    {
        id: 'g_n1_076', category: 'grammar', level: 'N1', tags: ['expression', 'criticism'],
        stem: '冗談{じょうだん}___！本気{ほんき}で怒{おこ}るよ。',
        stemZh: '開玩笑也該有個限度！我會真的生氣的。',
        options: [
            { text: 'にもほどがある', reason: '正確！「にもほどがある」表示太過分了。' },
            { text: 'にも限度がある', reason: '意思相近但「にもほどがある」更慣用。' },
            { text: 'すぎる', reason: '「すぎる」表過度，但語法接續不同。' },
            { text: 'にしすぎだ', reason: '「にしすぎだ」語法不正確。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にもほどがある」表有個限度',
            analysis: '「にもほどがある」表示「〜也該有個限度」「太過分了」，用於批評或抱怨。',
            comparisons: ['にもほどがある：有個限度（批評）', 'すぎる：太過（一般程度）', 'もいいかげんにしろ：適可而止'],
            commonMistakes: ['○ 冗談にもほどがある / × 冗談でもほどがある → 用「にも」非「でも」'],
        },
    },
    // ━━━ にも増して (more than ever) ━━━
    {
        id: 'g_n1_077', category: 'grammar', level: 'N1', tags: ['formal', 'comparison'],
        stem: '今年{ことし}は例年{れいねん}___暑{あつ}い夏{なつ}になった。',
        stemZh: '今年是比往年更加炎熱的夏天。',
        options: [
            { text: 'にも増して', reason: '正確！「にも増して」表示比〜更加。' },
            { text: 'に比べて', reason: '「に比べて」表比較但缺少「更甚」的語感。' },
            { text: 'よりも', reason: '「よりも」是一般比較，語體不夠。' },
            { text: 'に引き換え', reason: '「に引き換え」表相反對比，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にも増して」表更甚於',
            analysis: '「にも増して（にもまして）」表示「比〜更加」「超過〜」，常用於書面語。',
            comparisons: ['にも増して：比〜更加（書面）', 'よりも：比〜更（一般）', '以上に：以上地'],
            commonMistakes: ['○ 例年にも増して / × 例年よりにも増して → 不與「より」重複'],
        },
    },
    // ━━━ には当たらない (not worth / no need) ━━━
    {
        id: 'g_n1_078', category: 'grammar', level: 'N1', tags: ['formal', 'judgment'],
        stem: 'その程度{ていど}のことで驚{おどろ}く___。',
        stemZh: '那種程度的事不值得驚訝。',
        options: [
            { text: 'には当たらない', reason: '正確！「には当たらない」表示不必〜。' },
            { text: 'にはならない', reason: '「にはならない」表不會成為，語義不同。' },
            { text: 'はずがない', reason: '「はずがない」表不可能，語義太強。' },
            { text: 'わけがない', reason: '「わけがない」表不可能，語義太強。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「には当たらない」表不必',
            analysis: '「には当たらない（にはあたらない）」表示「沒必要〜」「不值得〜」，是委婉的否定判斷。',
            comparisons: ['には当たらない：不值得（委婉判斷）', 'には及ばない：不需要（謙虛）', 'までもない：沒必要（一般）'],
            commonMistakes: ['○ 驚くには当たらない / × 驚きには当たらない → 用辭書形接「には」'],
        },
    },
    // ━━━ には及ばない (no need / cannot match) ━━━
    {
        id: 'g_n1_079', category: 'grammar', level: 'N1', tags: ['formal', 'humility'],
        stem: 'お気{き}遣{づか}い___。大丈夫{だいじょうぶ}ですよ。',
        stemZh: '不需要擔心。沒事的。',
        options: [
            { text: 'には及びません', reason: '正確！「には及ばない」表示不需要。' },
            { text: 'にはなりません', reason: '「にはなりません」表不能成為，語義不同。' },
            { text: 'には足りません', reason: '「には足りません」表不夠，語義不同。' },
            { text: 'にはいたりません', reason: '「にはいたりません」表未到達，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「には及ばない」表不需要',
            analysis: '「には及ばない」有兩個意思：①不需要〜（謙虛婉拒）②比不上〜（能力比較）。此處為①。',
            comparisons: ['には及ばない：不必（謙虛）', 'には当たらない：不值得', 'までもない：沒必要'],
            commonMistakes: ['○ お気遣いには及びません / × お気遣いに及びません → 加「は」更自然'],
        },
    },
    // ━━━ を踏まえて (based on / considering) ━━━
    {
        id: 'g_n1_080', category: 'grammar', level: 'N1', tags: ['formal', 'basis'],
        stem: '調査{ちょうさ}結果{けっか}___、今後{こんご}の方針{ほうしん}を決定{けってい}する。',
        stemZh: '根據調查結果，決定今後的方針。',
        options: [
            { text: 'を踏まえて', reason: '正確！「を踏まえて」表示根據、考慮到。' },
            { text: 'を込めて', reason: '「を込めて」表包含（心意），語義不同。' },
            { text: 'を通じて', reason: '「を通じて」表透過，語義不同。' },
            { text: 'を巡って', reason: '「を巡って」表圍繞（議題），語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を踏まえて」表基於考量',
            analysis: '「を踏まえて（をふまえて）」表示「根據」「考慮到」「立足於」。常用於正式的決策或討論場合。',
            comparisons: ['を踏まえて：根據/考慮到', 'に基づいて：基於', 'を受けて：接受〜之後'],
            commonMistakes: ['○ 結果を踏まえて / × 結果に踏まえて → 用「を」非「に」'],
        },
    },
    // ━━━ を経て (through / via) ━━━
    {
        id: 'g_n1_081', category: 'grammar', level: 'N1', tags: ['formal', 'process'],
        stem: '数々{かずかず}の困難{こんなん}___、彼{かれ}はついに成功{せいこう}した。',
        stemZh: '經歷了種種困難，他終於成功了。',
        options: [
            { text: 'を経て', reason: '正確！「を経て」表示經過〜之後。' },
            { text: 'を通して', reason: '「を通して」表透過，不強調經歷。' },
            { text: 'を越えて', reason: '「を越えて」表超越，不強調過程。' },
            { text: 'を過ぎて', reason: '「を過ぎて」表經過（地點/時間），語義太具體。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を経て」表經歷過程',
            analysis: '「を経て（をへて）」表示「經歷〜之後」「經過〜」，強調漫長過程或重要階段。',
            comparisons: ['を経て：經歷（過程）', 'を通して：透過（手段）', 'を越えて：超越（界限）'],
            commonMistakes: ['○ 困難を経て / × 困難に経て → 用「を」非「に」'],
        },
    },
    // ━━━ を控えて (facing / with... approaching) ━━━
    {
        id: 'g_n1_082', category: 'grammar', level: 'N1', tags: ['formal', 'timing'],
        stem: '試験{しけん}___、彼{かれ}は毎日{まいにち}遅{おそ}くまで勉強{べんきょう}している。',
        stemZh: '面臨考試，他每天學到很晚。',
        options: [
            { text: 'を控えて', reason: '正確！「を控えて」表示面臨、即將到來。' },
            { text: 'を前にして', reason: '「を前にして」意思相近但語感不同。' },
            { text: 'を迎えて', reason: '「を迎えて」表迎接，已發生。' },
            { text: 'に際して', reason: '「に際して」表在〜之際，已開始。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を控えて」表面臨',
            analysis: '「を控えて（をひかえて）」表示「即將面臨〜」「〜迫在眉睫」，表示重要事件即將到來。',
            comparisons: ['を控えて：面臨/即將（未來）', 'を前にして：在〜面前', 'に先立って：在〜之前'],
            commonMistakes: ['○ 試験を控えて / × 試験に控えて → 用「を」非「に」'],
        },
    },
    // ━━━ をいいことに (taking advantage of) ━━━
    {
        id: 'g_n1_083', category: 'grammar', level: 'N1', tags: ['expression', 'criticism'],
        stem: '先生{せんせい}がいない___、生徒{せいと}たちは騒{さわ}いでいる。',
        stemZh: '趁著老師不在，學生們在吵鬧。',
        options: [
            { text: 'のをいいことに', reason: '正確！「をいいことに」表趁機利用。' },
            { text: 'のをきっかけに', reason: '「をきっかけに」表以〜為契機，不含批判。' },
            { text: 'のを理由に', reason: '「を理由に」表以〜為理由，太中性。' },
            { text: 'のをいいわけに', reason: '「をいいわけに」語法不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「をいいことに」表趁機',
            analysis: '「をいいことに」表示「趁著〜」「利用〜有利條件」，通常帶有批判的語氣。',
            comparisons: ['をいいことに：趁機（批判）', 'にかこつけて：以〜為藉口', 'のをきっかけに：以〜為契機（中性）'],
            commonMistakes: ['○ いないのをいいことに / × いないをいいことに → 動詞句加「の」名詞化'],
        },
    },
    // ━━━ を顧みず (regardless of / without regard to) ━━━
    {
        id: 'g_n1_084', category: 'grammar', level: 'N1', tags: ['formal', 'disregard'],
        stem: '危険{きけん}___、消防士{しょうぼうし}たちは建物{たてもの}に飛{と}び込{こ}んだ。',
        stemZh: '不顧危險，消防員們衝進了建築物。',
        options: [
            { text: 'を顧みず', reason: '正確！「を顧みず」表示不顧、不在乎。' },
            { text: 'をよそに', reason: '「をよそに」也表不顧，但側重無關痛癢。' },
            { text: 'をものともせず', reason: '「をものともせず」也表不畏，但更強調蔑視。' },
            { text: 'にかかわらず', reason: '「にかかわらず」表不論，不強調不顧。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を顧みず」表不顧',
            analysis: '「を顧みず（をかえりみず）」表示「不顧〜」「不在意〜」，常用於描述勇敢或犧牲的行為。',
            comparisons: ['を顧みず：不顧（勇敢）', 'をものともせずに：不畏（蔑視困難）', 'をよそに：不管（漠不關心）'],
            commonMistakes: ['○ 危険を顧みず / × 危険に顧みず → 用「を」非「に」'],
        },
    },
    // ━━━ を限りに (as of / last time) ━━━
    {
        id: 'g_n1_085', category: 'grammar', level: 'N1', tags: ['formal', 'limit'],
        stem: '今日{きょう}___、タバコをやめることにした。',
        stemZh: '以今天為限，決定戒煙。',
        options: [
            { text: 'を限りに', reason: '正確！「を限りに」表示以〜為界限。' },
            { text: 'をもって', reason: '「をもって」也表以〜為限，但更正式。' },
            { text: 'を最後に', reason: '「を最後に」意思相近但不如「を限りに」書面化。' },
            { text: 'から', reason: '「から」太口語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を限りに」表時間界限',
            analysis: '「を限りに（をかぎりに）」表示「以〜為最後」「到〜為止」，常用於表達決心。',
            comparisons: ['を限りに：到〜為止（決心）', 'をもって：以〜為限（正式通知）', 'を最後に：以〜為最後'],
            commonMistakes: ['○ 今日を限りに / × 今日が限りに → 用「を」非「が」'],
        },
    },
    // ━━━ を禁じ得ない (cannot help but feel) ━━━
    {
        id: 'g_n1_086', category: 'grammar', level: 'N1', tags: ['formal', 'emotion'],
        stem: '彼{かれ}の行動{こうどう}には驚{おどろ}き___。',
        stemZh: '對他的行為不禁感到驚訝。',
        options: [
            { text: 'を禁じ得ない', reason: '正確！「を禁じ得ない」表示禁不住〜。' },
            { text: 'を感じない', reason: '「を感じない」表感受不到，語義相反。' },
            { text: 'を隠せない', reason: '「を隠せない」表無法隱藏，語義相近但不如「を禁じ得ない」正式。' },
            { text: 'を抑えない', reason: '「を抑えられない」才正確，此處語法有誤。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を禁じ得ない」表無法抑制',
            analysis: '「を禁じ得ない（をきんじえない）」表示「禁不住〜」「不由自主地感到〜」，用於正式書面語。',
            comparisons: ['を禁じ得ない：禁不住（書面）', 'てやまない：不停地（衷心）', 'ずにはいられない：忍不住'],
            commonMistakes: ['○ 驚きを禁じ得ない / × 驚くを禁じ得ない → 前接名詞'],
        },
    },
    // ━━━ をものともせずに (in defiance of) ━━━
    {
        id: 'g_n1_087', category: 'grammar', level: 'N1', tags: ['formal', 'defiance'],
        stem: '周囲{しゅうい}の反対{はんたい}___、彼女{かのじょ}は夢{ゆめ}を追{お}い続{つづ}けた。',
        stemZh: '不畏周圍的反對，她繼續追逐夢想。',
        options: [
            { text: 'をものともせずに', reason: '正確！「をものともせずに」表示不畏、蔑視。' },
            { text: 'を顧みずに', reason: '「を顧みず」也表不顧，但「をものともせずに」更強調蔑視困難。' },
            { text: 'にもかかわらず', reason: '「にもかかわらず」表儘管，語氣較輕。' },
            { text: 'を無視して', reason: '「を無視して」表無視，太直接。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「をものともせずに」表不畏',
            analysis: '「をものともせずに」表示「不把〜當回事」「不畏〜」，強調面對困難毫不退縮。',
            comparisons: ['をものともせずに：不畏（蔑視困難）', 'を顧みず：不顧（不在乎）', 'にもかかわらず：儘管（讓步）'],
            commonMistakes: ['○ 反対をものともせずに / × 反対にものともせずに → 用「を」非「に」'],
        },
    },
    // ━━━ をよそに (in spite of / ignoring) ━━━
    {
        id: 'g_n1_088', category: 'grammar', level: 'N1', tags: ['expression', 'disregard'],
        stem: '親{おや}の心配{しんぱい}___、息子{むすこ}は海外{かいがい}へ旅立{たびだ}った。',
        stemZh: '不顧父母的擔心，兒子出發到海外去了。',
        options: [
            { text: 'をよそに', reason: '正確！「をよそに」表示不管、不顧。' },
            { text: 'を顧みず', reason: '「を顧みず」表不顧，但不如「をよそに」表達漠不關心。' },
            { text: 'をもとに', reason: '「をもとに」表以〜為基礎，語義完全不同。' },
            { text: 'をめぐって', reason: '「をめぐって」表圍繞，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「をよそに」表漠不關心',
            analysis: '「をよそに」表示「不管〜」「撇在一邊」，暗示對他人的感受或情況漠不關心。',
            comparisons: ['をよそに：不管（漠不關心）', 'を顧みず：不顧（勇敢）', 'をものともせず：不畏（蔑視）'],
            commonMistakes: ['○ 心配をよそに / × 心配にもよそに → 用「を」，不加「にも」'],
        },
    },
    // ━━━ を前提として (on the premise that) ━━━
    {
        id: 'g_n1_089', category: 'grammar', level: 'N1', tags: ['formal', 'premise'],
        stem: '結婚{けっこん}___付{つ}き合{あ}っている。',
        stemZh: '以結婚為前提在交往。',
        options: [
            { text: 'を前提として', reason: '正確！「を前提として」表示以〜為前提。' },
            { text: 'を目的として', reason: '「を目的として」表以〜為目的，語義不同。' },
            { text: 'を条件として', reason: '「を条件として」表以〜為條件，語義不同。' },
            { text: 'を基本として', reason: '「を基本として」表以〜為基本，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を前提として」表以〜為前提',
            analysis: '「を前提として（をぜんていとして）」表示「以〜為前提」「假設〜」。常用於正式場合。',
            comparisons: ['を前提として：以〜為前提', 'を条件として：以〜為條件', 'を踏まえて：考慮到'],
            commonMistakes: ['○ 結婚を前提として / × 結婚の前提として → 用「を〜として」'],
        },
    },
    // ━━━ かと思いきや (contrary to expectation) ━━━
    {
        id: 'g_n1_090', category: 'grammar', level: 'N1', tags: ['expression', 'surprise'],
        stem: '合格{ごうかく}した___、実{じつ}は不合格{ふごうかく}だった。',
        stemZh: '原以為合格了，結果竟然不合格。',
        options: [
            { text: 'かと思いきや', reason: '正確！「かと思いきや」表示原以為〜結果。' },
            { text: 'かと思ったら', reason: '「かと思ったら」意思相近但不如前者文語。' },
            { text: 'かと思えば', reason: '「かと思えば」表剛〜就〜，語義不同。' },
            { text: 'かのように', reason: '「かのように」表好像，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かと思いきや」表出乎意料',
            analysis: '「かと思いきや」表示「原以為〜（結果出乎意料）」，「きや」是古語反語。',
            comparisons: ['かと思いきや：原以為（反轉）', 'かと思ったら：以為是〜結果', 'にもかかわらず：儘管'],
            commonMistakes: ['○ 合格したかと思いきや / × 合格するかと思いきや → 用た形接'],
        },
    },
    // ━━━ 限りだ (extremely / feels like) ━━━
    {
        id: 'g_n1_091', category: 'grammar', level: 'N1', tags: ['expression', 'emotion'],
        stem: '久{ひさ}しぶりに友人{ゆうじん}に会{あ}えて、嬉{うれ}しい___。',
        stemZh: '好久不見能見到朋友，開心極了。',
        options: [
            { text: '限りだ', reason: '正確！「限りだ」表示〜極了、非常〜。' },
            { text: '限りない', reason: '「限りない」表無限的，用法不同。' },
            { text: '極みだ', reason: '「の極みだ」才正確，此處不用「の」。' },
            { text: '至りだ', reason: '「の至りだ」才正確，且多用於固定搭配。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「限りだ」表感情之極',
            analysis: '「い形容詞＋限りだ」「な形容詞な＋限りだ」表示「非常〜」「〜極了」，用於表達強烈感情。',
            comparisons: ['限りだ：極其（感情）', '極まりない：極其（評價）', 'てたまらない：〜得受不了'],
            commonMistakes: ['○ 嬉しい限りだ / × 嬉しいの限りだ → い形容詞直接接「限りだ」'],
        },
    },
    // ━━━ 甲斐もなく (in vain) ━━━
    {
        id: 'g_n1_092', category: 'grammar', level: 'N1', tags: ['expression', 'futility'],
        stem: '努力{どりょく}した___、試験{しけん}に落{お}ちてしまった。',
        stemZh: '努力白費了，還是沒考上。',
        options: [
            { text: '甲斐もなく', reason: '正確！「甲斐もなく」表示白費、徒勞。' },
            { text: 'かいあって', reason: '「かいあって」表辛苦沒白費（正面），語義相反。' },
            { text: 'ものの', reason: '「ものの」表雖然，不強調徒勞。' },
            { text: 'にもかかわらず', reason: '「にもかかわらず」表儘管，不強調徒勞感。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「甲斐もなく」表徒勞',
            analysis: '「甲斐もなく（かいもなく）」表示「白費了」「徒勞無功」。前接「た形」或名詞。',
            comparisons: ['甲斐もなく：白費（徒勞）', '甲斐あって：辛苦有了回報（正面）', '甲斐がある：值得'],
            commonMistakes: ['○ 努力した甲斐もなく / × 努力する甲斐もなく → 用た形'],
        },
    },
    // ━━━ からある (as much as) ━━━
    {
        id: 'g_n1_093', category: 'grammar', level: 'N1', tags: ['expression', 'quantity'],
        stem: '100キロ___荷物{にもつ}を一人{ひとり}で運{はこ}んだ。',
        stemZh: '一個人搬了足足100公斤的行李。',
        options: [
            { text: 'からある', reason: '正確！「からある」表示多達〜。' },
            { text: 'もある', reason: '「もある」也表多達，但「からある」更強調驚訝。' },
            { text: 'ほどの', reason: '「ほどの」表大約，不如「からある」強調數量大。' },
            { text: 'ばかりの', reason: '「ばかりの」表大約，不強調多。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「からある」表數量之大',
            analysis: '「數量＋からある」表示「多達〜」「足足有〜」，強調數量之大令人驚訝。類似用法：「からする」（金額）。',
            comparisons: ['からある：多達（重量/長度）', 'からする：多達（金額）', 'からの：多達（人數）'],
            commonMistakes: ['○ 100キロからある / × 100キロからの荷物 → 「からある」後接名詞用「からある」'],
        },
    },
    // ━━━ かたがた (while also / for the purpose of) ━━━
    {
        id: 'g_n1_094', category: 'grammar', level: 'N1', tags: ['formal', 'dual-purpose'],
        stem: 'お礼{れい}___、先生{せんせい}のお宅{たく}を訪問{ほうもん}した。',
        stemZh: '順便致謝，拜訪了老師的家。',
        options: [
            { text: 'かたがた', reason: '正確！「かたがた」表示順便、兼做。' },
            { text: 'がてら', reason: '「がてら」也表順便，但「かたがた」更正式。' },
            { text: 'ついでに', reason: '「ついでに」太口語。' },
            { text: 'を兼ねて', reason: '「を兼ねて」表兼做，但接續不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かたがた」表正式的兼做',
            analysis: '「かたがた」表示「順便〜」「兼帶〜」，比「がてら」「ついでに」更正式，常用於拜訪、致意等場合。',
            comparisons: ['かたがた：順便（正式）', 'がてら：順便（一般）', 'ついでに：順便（口語）'],
            commonMistakes: ['○ お礼かたがた / × お礼をかたがた → 名詞直接接「かたがた」'],
        },
    },
    // ━━━ かつて (once / formerly) ━━━
    {
        id: 'g_n1_095', category: 'grammar', level: 'N1', tags: ['expression', 'time'],
        stem: 'この地{ち}には___大{おお}きな湖{みずうみ}があったという。',
        stemZh: '據說這個地方曾經有一個大湖。',
        options: [
            { text: 'かつて', reason: '正確！「かつて」表示曾經。' },
            { text: 'いつか', reason: '「いつか」表某天/曾經，但更口語。' },
            { text: 'いまだに', reason: '「いまだに」表至今仍，語義不同。' },
            { text: 'もはや', reason: '「もはや」表已經不再，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かつて」表曾經',
            analysis: '「かつて」表示「曾經」「以前」，用於書面語。否定形「かつて〜ない」表示「前所未有」。',
            comparisons: ['かつて：曾經（書面）', 'むかし：從前（一般）', 'かつてない：前所未有'],
            commonMistakes: ['○ かつて大きな湖があった / × かつての大きな湖があった → 「かつて」後不加「の」修飾動詞'],
        },
    },
    // ━━━ 嫌いがある (have a tendency to) ━━━
    {
        id: 'g_n1_096', category: 'grammar', level: 'N1', tags: ['formal', 'tendency'],
        stem: '彼{かれ}は物事{ものごと}を大{おお}げさに言{い}う___。',
        stemZh: '他有誇大其詞的毛病。',
        options: [
            { text: '嫌いがある', reason: '正確！「嫌いがある」表示有〜的毛病/傾向。' },
            { text: '傾向がある', reason: '「傾向がある」意思相近但較中性。' },
            { text: 'きらいだ', reason: '「きらいだ」表討厭，語義完全不同。' },
            { text: '癖がある', reason: '「癖がある」表有〜習慣，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「嫌いがある」表不好的傾向',
            analysis: '「嫌いがある（きらいがある）」表示「有〜的傾向/毛病」，注意此處「嫌い」不是「討厭」的意思。',
            comparisons: ['嫌いがある：有毛病（書面負面）', '傾向がある：有傾向（中性）', 'がちだ：容易〜（一般）'],
            commonMistakes: ['○ 言う嫌いがある / × 言うの嫌いがある → 辭書形直接接「嫌いがある」'],
        },
    },
    // ━━━ きっての (the best of / foremost) ━━━
    {
        id: 'g_n1_097', category: 'grammar', level: 'N1', tags: ['expression', 'superlative'],
        stem: '彼女{かのじょ}はこの学校{がっこう}___秀才{しゅうさい}だ。',
        stemZh: '她是這所學校首屈一指的才女。',
        options: [
            { text: 'きっての', reason: '正確！「きっての」表示〜當中最出色的。' },
            { text: 'ならではの', reason: '「ならではの」表唯有〜的，語義不同。' },
            { text: 'にかけての', reason: '「にかけての」表在〜方面，語義不同。' },
            { text: 'における', reason: '「における」表在〜之中，太一般。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「きっての」表最頂尖',
            analysis: '「きっての」表示「〜當中首屈一指的」「最出色的」。前接團體或範圍名詞。',
            comparisons: ['きっての：首屈一指（最高評價）', 'ならではの：獨有的（唯一性）', '一番の：第一（一般）'],
            commonMistakes: ['○ 学校きっての秀才 / × 学校のきっての秀才 → 不加「の」'],
        },
    },
    // ━━━ こそあれ (although there is) ━━━
    {
        id: 'g_n1_098', category: 'grammar', level: 'N1', tags: ['literary', 'concession'],
        stem: '多少{たしょう}の不満{ふまん}___、この仕事{しごと}には満足{まんぞく}している。',
        stemZh: '雖然有些許不滿，但對這份工作感到滿意。',
        options: [
            { text: 'こそあれ', reason: '正確！「こそあれ」表示雖然有〜但。' },
            { text: 'こそすれ', reason: '「こそすれ」表只會〜絕不〜，語義不同。' },
            { text: 'があっても', reason: '「があっても」意思相近但太口語。' },
            { text: 'はあるが', reason: '「はあるが」意思相近但不如「こそあれ」文語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「こそあれ」表雖有但',
            analysis: '「こそあれ」表示「雖然有〜（但那不重要）」。「こそ」強調後半的讓步，整體帶有「雖然〜但更重要的是」的語感。',
            comparisons: ['こそあれ：雖有〜但（讓步）', 'こそすれ：只會〜不會（對比）', 'はあるものの：雖有（一般）'],
            commonMistakes: ['○ 不満こそあれ / × 不満がこそあれ → 不加「が」'],
        },
    },
    // ━━━ こそすれ (may... but never) ━━━
    {
        id: 'g_n1_099', category: 'grammar', level: 'N1', tags: ['literary', 'contrast'],
        stem: '感謝{かんしゃ}___、恨{うら}むことはない。',
        stemZh: '只會感謝，絕不會怨恨。',
        options: [
            { text: 'こそすれ', reason: '正確！「こそすれ」表示只會〜絕不〜。' },
            { text: 'こそあれ', reason: '「こそあれ」表雖有但，語義不同。' },
            { text: 'はしても', reason: '「はしても」表即使做也，語義不同。' },
            { text: 'だけして', reason: '「だけして」語法不正確。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「こそすれ」表斷然對比',
            analysis: '「こそすれ」表示「只會做A，絕對不會做B」。「こそ」強調A，「すれ」（已然形）構成讓步。',
            comparisons: ['こそすれ：只會A不會B', 'こそあれ：雖然有A但（讓步）', 'はしても：即使做也'],
            commonMistakes: ['○ 感謝こそすれ / × 感謝をこそすれ → 名詞直接接「こそすれ」'],
        },
    },
    // ━━━ ことこの上ない (nothing more... than) ━━━
    {
        id: 'g_n1_100', category: 'grammar', level: 'N1', tags: ['literary', 'degree'],
        stem: 'あの映画{えいが}は退屈{たいくつ}___。',
        stemZh: '那部電影無聊到了極點。',
        options: [
            { text: 'この上ない', reason: '正確！「この上ない」表示再沒有比這更〜的了。' },
            { text: '極まりない', reason: '「極まりない」意思相近，也可以使用。' },
            { text: 'の至りだ', reason: '「の至りだ」多用於感情，不適合「退屈」。' },
            { text: 'に他ならない', reason: '「に他ならない」表正是，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「この上ない」表極致',
            analysis: '「この上ない（このうえない）」表示「再沒有比這更〜」「〜到了極點」。前接な形容詞或い形容詞。',
            comparisons: ['この上ない：極致（最高程度）', '極まりない：極其（書面評價）', 'てたまらない：〜得受不了（身體感受）'],
            commonMistakes: ['○ 退屈この上ない / × 退屈なこの上ない → な形容詞去掉「な」直接接'],
        },
    },
    // ━━━ こともあって (partly because) ━━━
    {
        id: 'g_n1_101', category: 'grammar', level: 'N1', tags: ['expression', 'reason'],
        stem: '天気{てんき}がいい___、公園{こうえん}は人{ひと}でいっぱいだ。',
        stemZh: '也因為天氣好，公園裡滿是人。',
        options: [
            { text: 'こともあって', reason: '正確！「こともあって」表示也有〜的原因。' },
            { text: 'こともあるから', reason: '語法不正確。' },
            { text: 'ことだから', reason: '「ことだから」表正因為是〜，語義不同。' },
            { text: 'ことにより', reason: '「ことにより」表由於，太正式且不強調「也因為」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「こともあって」表附加原因',
            analysis: '「こともあって」表示「也有〜的因素」，暗示原因不只一個，〜是其中之一。',
            comparisons: ['こともあって：也因為（附加原因）', 'ために：因為（主要原因）', 'おかげで：多虧（正面原因）'],
            commonMistakes: ['○ 天気がいいこともあって / × 天気がいいのこともあって → 動詞/形容詞普通形直接接'],
        },
    },
    // ━━━ こととて (because / since) ━━━
    {
        id: 'g_n1_102', category: 'grammar', level: 'N1', tags: ['literary', 'reason'],
        stem: '不慣{ふな}れな___、ご迷惑{めいわく}をおかけして申{もう}し訳{わけ}ありません。',
        stemZh: '因為不熟悉，給您添麻煩了真是抱歉。',
        options: [
            { text: 'こととて', reason: '正確！「こととて」表示因為〜。' },
            { text: 'ことから', reason: '「ことから」表由此（原因），語感不同。' },
            { text: 'ことだから', reason: '「ことだから」表正因為（人的特質），語義不同。' },
            { text: 'ことゆえ', reason: '「ことゆえ」語法不正確。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「こととて」表原因（文語）',
            analysis: '「こととて」是書面語，表示「因為〜」「既然是〜」，常用於道歉或請求諒解的場合。',
            comparisons: ['こととて：因為（道歉/諒解）', 'ことだから：正因為是（人的特質）', 'ものですから：因為（辯解）'],
            commonMistakes: ['○ 不慣れなこととて / × 不慣れのこととて → な形容詞用「な」接「こととて」'],
        },
    },
    // ━━━ くらいなら (rather than) ━━━
    {
        id: 'g_n1_103', category: 'grammar', level: 'N1', tags: ['expression', 'preference'],
        stem: 'あんな会社{かいしゃ}で働{はたら}く___、自分{じぶん}で起業{きぎょう}したほうがいい。',
        stemZh: '與其在那種公司工作，不如自己創業。',
        options: [
            { text: 'くらいなら', reason: '正確！「くらいなら」表示與其〜不如。' },
            { text: 'ぐらいで', reason: '「ぐらいで」表程度，語義不同。' },
            { text: 'よりも', reason: '「よりも」表比較，不如「くらいなら」強調嫌惡。' },
            { text: 'かわりに', reason: '「かわりに」表代替，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「くらいなら」表與其（嫌惡）',
            analysis: '「くらいなら」表示「與其做〜那種討厭的事，不如」。帶有對前者強烈的否定和嫌惡。',
            comparisons: ['くらいなら：與其（嫌惡）', 'よりも：比起（中性比較）', 'より：比（一般）'],
            commonMistakes: ['○ 働くくらいなら / × 働いたくらいなら → 用辭書形接'],
        },
    },
    // ━━━ くらいのものだ (about the only one) ━━━
    {
        id: 'g_n1_104', category: 'grammar', level: 'N1', tags: ['expression', 'limitation'],
        stem: 'こんな難問{なんもん}が解{と}けるのは彼{かれ}___。',
        stemZh: '能解開這種難題的也就只有他了。',
        options: [
            { text: 'くらいのものだ', reason: '正確！「くらいのものだ」表示也就只有〜了。' },
            { text: 'くらいだ', reason: '「くらいだ」表程度，不強調唯一性。' },
            { text: 'だけだ', reason: '「だけだ」表只有，但缺少語感。' },
            { text: 'ばかりだ', reason: '「ばかりだ」表淨是，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「くらいのものだ」表唯一',
            analysis: '「くらいのものだ」表示「也就只有〜了」「大概只有〜」，暗示範圍極其有限。',
            comparisons: ['くらいのものだ：也就只有（限定）', 'しかいない：只有（直接）', 'をおいてほかにない：除了別無'],
            commonMistakes: ['○ 彼くらいのものだ / × 彼だけくらいのものだ → 不與「だけ」重複'],
        },
    },
    // ━━━ までだ (just / simply / will just have to) ━━━
    {
        id: 'g_n1_105', category: 'grammar', level: 'N1', tags: ['expression', 'resolution'],
        stem: 'バスが来{こ}なければ、歩{ある}いて行{い}く___。',
        stemZh: '公車不來的話，走路去就是了。',
        options: [
            { text: 'までだ', reason: '正確！「までだ」表示大不了就〜。' },
            { text: 'まだだ', reason: '「まだだ」表還沒，語義完全不同。' },
            { text: 'ものだ', reason: '「ものだ」表理應/感嘆，語義不同。' },
            { text: 'わけだ', reason: '「わけだ」表也就是說，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「までだ」表覺悟決心',
            analysis: '「までだ」有兩個意思：①大不了就〜（覺悟）②只是〜而已（謙虛說明）。此處為①。',
            comparisons: ['までだ：大不了就（覺悟）', 'までのことだ：只好〜罷了', 'しかない：只能'],
            commonMistakes: ['○ 歩いて行くまでだ / × 歩いて行ったまでだ → 用辭書形表覺悟'],
        },
    },
    // ━━━ まじき (unbecoming of) ━━━
    {
        id: 'g_n1_106', category: 'grammar', level: 'N1', tags: ['literary', 'criticism'],
        stem: 'それは教育者{きょういくしゃ}として許{ゆる}す___行為{こうい}だ。',
        stemZh: '那是身為教育者不可饒恕的行為。',
        options: [
            { text: 'まじき', reason: '正確！「まじき」表示不該有的、不可以的。' },
            { text: 'べからざる', reason: '「べからざる」意思相近但語感不同。' },
            { text: 'べきではない', reason: '「べきではない」較現代但不能修飾名詞。' },
            { text: 'まいか', reason: '「まいか」表難道不〜嗎，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「まじき」表不該有的',
            analysis: '「まじき」是「まじ」（不應該）的連體形，修飾名詞。表示「不應有的」「不該做的」。',
            comparisons: ['まじき：不該有的（文語修飾）', 'べからざる：不可的（文語修飾）', 'べきではない：不應該（現代）'],
            commonMistakes: ['○ 許すまじき行為 / × 許さないまじき行為 → 辭書形接「まじき」'],
        },
    },
    // ━━━ まくる (keep doing non-stop) ━━━
    {
        id: 'g_n1_107', category: 'grammar', level: 'N1', tags: ['expression', 'continuation'],
        stem: '彼{かれ}は試合{しあい}で走{はし}り___、ついに倒{たお}れた。',
        stemZh: '他在比賽中不停地跑，終於倒下了。',
        options: [
            { text: 'まくって', reason: '正確！「まくる」表示不停地做〜。' },
            { text: 'つづけて', reason: '「つづけて」表持續，但不如「まくる」強調瘋狂程度。' },
            { text: 'ぬいて', reason: '「ぬいて」表做到底，但不如「まくる」強調反復。' },
            { text: 'きって', reason: '「きって」表做完，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「まくる」表不停地做',
            analysis: '「Vます形＋まくる」表示「不停地做〜」「瘋狂地做〜」。五段活用：まくる→まくって→まくった。',
            comparisons: ['まくる：不停做（瘋狂）', '続ける：持續做（一般）', '通す：做到底（貫徹）'],
            commonMistakes: ['○ 走りまくる / × 走るまくる → 接ます形去「ます」'],
        },
    },
    // ━━━ もはや (already / no longer) ━━━
    {
        id: 'g_n1_108', category: 'grammar', level: 'N1', tags: ['expression', 'finality'],
        stem: '___手遅{ておく}れだ。今{いま}さら後悔{こうかい}しても仕方{しかた}がない。',
        stemZh: '已經來不及了。事到如今後悔也沒用。',
        options: [
            { text: 'もはや', reason: '正確！「もはや」表示已經、事到如今。' },
            { text: 'まだ', reason: '「まだ」表還，語義相反。' },
            { text: 'やっと', reason: '「やっと」表好不容易，語義不同。' },
            { text: 'とうとう', reason: '「とうとう」表終於，不強調「已經來不及」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「もはや」表既成事實',
            analysis: '「もはや」表示「已經」「事到如今」，強調無法改變的既成事實，常接否定意義的內容。',
            comparisons: ['もはや：已經（無法挽回）', 'すでに：已經（客觀事實）', 'とっくに：早就（口語）'],
            commonMistakes: ['○ もはや手遅れだ / × もうはや手遅れだ → 「もはや」是一個詞，不拆開'],
        },
    },
    // ━━━ ものとする (shall / it is assumed) ━━━
    {
        id: 'g_n1_109', category: 'grammar', level: 'N1', tags: ['formal', 'rule'],
        stem: '会員{かいいん}は年会費{ねんかいひ}を納{おさ}める___。',
        stemZh: '會員應繳納年費。',
        options: [
            { text: 'ものとする', reason: '正確！「ものとする」表示應當、規定。' },
            { text: 'ものだ', reason: '「ものだ」表理應，但不如「ものとする」正式。' },
            { text: 'べきだ', reason: '「べきだ」表應該，但不如「ものとする」用於規定。' },
            { text: 'ことにする', reason: '「ことにする」表決定，非規定。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ものとする」表規章規定',
            analysis: '「ものとする」用於法律、規章、契約等，表示「應當〜」「視為〜」。是極正式的規定用語。',
            comparisons: ['ものとする：應當（規章）', 'こととする：規定（決議）', 'べきである：應該（一般建議）'],
            commonMistakes: ['○ 納めるものとする / × 納めるものにする → 「ものとする」是固定形式'],
        },
    },
    // ━━━ もさることながら (not to mention... but also) ━━━
    {
        id: 'g_n1_110', category: 'grammar', level: 'N1', tags: ['formal', 'addition'],
        stem: '彼{かれ}の才能{さいのう}___、努力{どりょく}も並{なみ}ではない。',
        stemZh: '他的才能自不待言，努力程度也非同一般。',
        options: [
            { text: 'もさることながら', reason: '正確！「もさることながら」表示〜自不待言。' },
            { text: 'はもちろん', reason: '「はもちろん」表當然，但不如前者書面化。' },
            { text: 'はさておき', reason: '「はさておき」表暫且不論，語義不同。' },
            { text: 'もそうだが', reason: '「もそうだが」太口語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「もさることながら」表不僅〜更是',
            analysis: '「もさることながら」表示「〜自不待言，更重要的是」。「さること」意為「理所當然之事」。',
            comparisons: ['もさることながら：自不待言（書面）', 'はもちろん：當然（一般）', 'はもとより：不用說（正式）'],
            commonMistakes: ['○ 才能もさることながら / × 才能がさることながら → 用「も」非「が」'],
        },
    },
    // ━━━ ものを (if only... but) ━━━
    {
        id: 'g_n1_111', category: 'grammar', level: 'N1', tags: ['expression', 'regret'],
        stem: '素直{すなお}に謝{あやま}ればいい___、彼{かれ}は意地{いじ}を張{は}った。',
        stemZh: '明明坦率地道歉就好了，他卻固執己見。',
        options: [
            { text: 'ものを', reason: '正確！「ものを」表示明明〜卻（遺憾/責備）。' },
            { text: 'ものの', reason: '「ものの」表雖然，不帶責備語氣。' },
            { text: 'ものだから', reason: '「ものだから」表因為，語義不同。' },
            { text: 'もので', reason: '「もので」表因為（辯解），語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ものを」表遺憾責備（中斷用法）',
            analysis: '「ものを」放在句中表示「明明〜卻」，帶有遺憾和責備的語氣。',
            comparisons: ['ものを：明明〜卻（責備）', 'ものの：雖然（讓步）', 'のに：明明〜卻（一般）'],
            commonMistakes: ['○ 謝ればいいものを / × 謝るといいものを → 使用假定形'],
        },
    },
    // ━━━ もしくは (or) ━━━
    {
        id: 'g_n1_112', category: 'grammar', level: 'N1', tags: ['formal', 'choice'],
        stem: '申込{もうしこみ}は電話{でんわ}、___メールにて受{う}け付{つ}けます。',
        stemZh: '報名以電話或電子郵件方式受理。',
        options: [
            { text: 'もしくは', reason: '正確！「もしくは」是正式的「或者」。' },
            { text: 'または', reason: '「または」也表或者，但「もしくは」更正式。' },
            { text: 'それとも', reason: '「それとも」用於疑問句選擇，此處不適用。' },
            { text: 'あるいは', reason: '「あるいは」也表或者，但側重不確定。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「もしくは」表正式的或者',
            analysis: '「もしくは」是最正式的「或者」，常用於法律、規章、公文等。比「または」「あるいは」更正式。',
            comparisons: ['もしくは：或者（法律/公文）', 'または：或者（一般書面）', 'あるいは：或者（稍帶不確定）'],
            commonMistakes: ['○ 電話、もしくはメール / × 電話もしくはとメール → 不與「と」重複'],
        },
    },
    // ━━━ なり (as soon as) ━━━
    {
        id: 'g_n1_113', category: 'grammar', level: 'N1', tags: ['expression', 'immediacy'],
        stem: '彼{かれ}は家{いえ}に帰{かえ}る___、ソファに倒{たお}れ込{こ}んだ。',
        stemZh: '他一回到家，就倒在了沙發上。',
        options: [
            { text: 'なり', reason: '正確！「なり」表示一〜就立刻。' },
            { text: 'や否や', reason: '「や否や」意思相近但前後主語可不同。' },
            { text: 'が早いか', reason: '「が早いか」意思相近但強調速度。' },
            { text: 'とたんに', reason: '「とたんに」表剛〜就，但前接た形。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なり」表即時動作',
            analysis: '「なり」表示「一〜就立刻」，前後主語通常相同。接辭書形。',
            comparisons: ['なり：一〜就（同一主語）', 'や否や：一〜就（主語可不同）', 'が早いか：剛一〜就（強調速度）'],
            commonMistakes: ['○ 帰るなり / × 帰ったなり → 用辭書形接「なり」'],
        },
    },
    // ━━━ なりとも (at least / even if just) ━━━
    {
        id: 'g_n1_114', category: 'grammar', level: 'N1', tags: ['formal', 'minimum'],
        stem: '少{すこ}し___お役{やく}に立{た}てれば幸{さいわ}いです。',
        stemZh: '哪怕只是一點點，如果能派上用場就好了。',
        options: [
            { text: 'なりとも', reason: '正確！「なりとも」表示哪怕是〜也。' },
            { text: 'でも', reason: '「でも」表即使，但不如「なりとも」正式。' },
            { text: 'だけでも', reason: '「だけでも」表只要〜就，語感不同。' },
            { text: 'ばかり', reason: '「ばかり」表大約/只有，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なりとも」表最低程度',
            analysis: '「なりとも」表示「哪怕是一點點也」「至少〜」，常與「少し」「一つ」等最小量詞搭配。',
            comparisons: ['なりとも：哪怕〜也（正式）', 'でも：即使（一般）', 'だけでも：只要〜就'],
            commonMistakes: ['○ 少しなりとも / × 少しもなりとも → 不加「も」'],
        },
    },
    // ━━━ なり〜なり (either... or) ━━━
    {
        id: 'g_n1_115', category: 'grammar', level: 'N1', tags: ['expression', 'suggestion'],
        stem: '電話{でんわ}する___メールする___、とにかく連絡{れんらく}してください。',
        stemZh: '打電話也好發郵件也好，總之請聯繫我。',
        options: [
            { text: 'なり…なり', reason: '正確！「なり〜なり」表示〜也好〜也好。' },
            { text: 'とか…とか', reason: '「とか〜とか」表列舉但不含建議語氣。' },
            { text: 'やら…やら', reason: '「やら〜やら」表又〜又〜（困惑），語氣不同。' },
            { text: 'だの…だの', reason: '「だの〜だの」表又〜又〜（列舉批評），語氣不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なり〜なり」表選擇建議',
            analysis: '「なり〜なり」表示「〜也好〜也好」，提出幾個選項作為建議，讓對方選擇。',
            comparisons: ['なり〜なり：〜也好〜也好（建議）', 'にしろ〜にしろ：不管〜還是〜', 'であれ〜であれ：無論〜還是〜'],
            commonMistakes: ['○ 電話するなりメールするなり / × 電話なりメールなり → 動詞用辭書形接「なり」'],
        },
    },
    // ━━━ なしに / なしで (without) ━━━
    {
        id: 'g_n1_116', category: 'grammar', level: 'N1', tags: ['expression', 'absence'],
        stem: '断{ことわ}り___、人{ひと}の物{もの}を使{つか}ってはいけない。',
        stemZh: '未經允許，不可以使用別人的東西。',
        options: [
            { text: 'なしに', reason: '正確！「なしに」表示沒有〜地。' },
            { text: 'ないで', reason: '「ないで」是一般否定，語體不夠。' },
            { text: 'なくて', reason: '「なくて」表原因否定，語義不同。' },
            { text: 'ずとも', reason: '「ずとも」表即使不〜也，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なしに」表不做就',
            analysis: '「なしに/なしで」接在名詞後，表示「沒有〜」「不做〜就」。比「ないで」更書面。',
            comparisons: ['なしに：沒有〜地（書面）', 'ことなしに：不做〜就（更正式）', 'ないで：不〜地（口語）'],
            commonMistakes: ['○ 断りなしに / × 断らなしに → 名詞接「なしに」'],
        },
    },
    // ━━━ に堪える / に堪えない (worth / not worth) ━━━
    {
        id: 'g_n1_117', category: 'grammar', level: 'N1', tags: ['formal', 'evaluation'],
        stem: 'この映画{えいが}は鑑賞{かんしょう}___作品{さくひん}だ。',
        stemZh: '這部電影是值得鑑賞的作品。',
        options: [
            { text: 'に堪える', reason: '正確！「に堪える」表示值得〜。' },
            { text: 'に耐える', reason: '「に耐える」表經得起，語義不同。' },
            { text: 'に足る', reason: '「に足る」也表值得，可以互換。' },
            { text: 'に値する', reason: '「に値する」也表值得，語義相近。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に堪える」表值得（正面評價）',
            analysis: '「に堪える（にたえる）」表示「值得〜」「經得起〜」。常搭配「鑑賞」「批評」「使用」等。',
            comparisons: ['に堪える：值得（正面）', 'に堪えない：不堪（負面/感情溢出）', 'に足る：值得/足以'],
            commonMistakes: ['○ 鑑賞に堪える / × 鑑賞を堪える → 用「に」非「を」'],
        },
    },
    // ━━━ に即した (based on actual) ━━━
    {
        id: 'g_n1_118', category: 'grammar', level: 'N1', tags: ['formal', 'accordance'],
        stem: '実情{じつじょう}___対応{たいおう}が求{もと}められている。',
        stemZh: '被要求做出符合實際情況的應對。',
        options: [
            { text: 'に即した', reason: '正確！「に即した」是「に即して」的連體形。' },
            { text: 'に基づく', reason: '「に基づく」表基於，但不如「に即した」強調貼合實際。' },
            { text: 'に沿った', reason: '「に沿った」表沿著方針，側重不同。' },
            { text: 'に準じた', reason: '「に準じた」表按照標準，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に即した」表符合實際',
            analysis: '「に即した（にそくした）」是「に即して」的連體形，修飾名詞，表示「符合〜」「切合〜」。',
            comparisons: ['に即した：切合（實際/現狀）', 'に基づいた：基於', 'に応じた：根據〜相應的'],
            commonMistakes: ['○ 実情に即した対応 / × 実情に即しての対応 → 連體形用「に即した」'],
        },
    },
    // ━━━ ても差し支えない (no problem even if) ━━━
    {
        id: 'g_n1_119', category: 'grammar', level: 'N1', tags: ['formal', 'permission'],
        stem: 'この部屋{へや}では飲食{いんしょく}し___。',
        stemZh: '在這個房間裡飲食也無妨。',
        options: [
            { text: 'ても差し支えない', reason: '正確！「ても差し支えない」表示即使〜也沒關係。' },
            { text: 'てもかまわない', reason: '「てもかまわない」意思相近但較口語。' },
            { text: 'てもいい', reason: '「てもいい」太口語。' },
            { text: 'ても仕方ない', reason: '「ても仕方ない」表也沒辦法，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ても差し支えない」表無妨',
            analysis: '「ても差し支えない（てもさしつかえない）」是「てもいい」的正式說法，表示「即使〜也沒問題」。',
            comparisons: ['ても差し支えない：無妨（正式）', 'てもかまわない：沒關係（一般）', 'てもいい：可以（口語）'],
            commonMistakes: ['○ 飲食しても差し支えない / × 飲食しても差し支えがない → 不加「が」'],
        },
    },
    // ━━━ ても知らない (I don't care if) ━━━
    {
        id: 'g_n1_120', category: 'grammar', level: 'N1', tags: ['expression', 'warning'],
        stem: 'そんなに食{た}べたら、お腹{なか}を壊{こわ}し___よ。',
        stemZh: '吃那麼多的話，肚子壞了我可不管喔。',
        options: [
            { text: 'ても知らない', reason: '正確！「ても知らない」表示我不管、後果自負。' },
            { text: 'てもいい', reason: '「てもいい」表可以，語義相反。' },
            { text: 'ても平気', reason: '「ても平気」表沒問題，語義不同。' },
            { text: 'ても構わない', reason: '「ても構わない」表不在意，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ても知らない」表後果自負',
            analysis: '「ても知らない（てもしらない）」表示「即使〜我也不管」「後果自負」，用於警告對方。',
            comparisons: ['ても知らない：我不管（警告）', 'ても構わない：沒關係（允許）', 'ても平気：不在乎'],
            commonMistakes: ['○ 壊しても知らない / × 壊れても知らない → 「壊す」（他動詞）的て形'],
        },
    },
    // ━━━ と相まって (combined with) ━━━
    {
        id: 'g_n1_121', category: 'grammar', level: 'N1', tags: ['formal', 'combination'],
        stem: '円安{えんやす}___、観光客{かんこうきゃく}が増{ふ}えている。',
        stemZh: '加上日圓貶值，觀光客增加了。',
        options: [
            { text: 'と相まって', reason: '正確！「と相まって」表示與〜相結合。' },
            { text: 'とともに', reason: '「とともに」表同時，不強調互相影響。' },
            { text: 'と同時に', reason: '「と同時に」表同時，時間性。' },
            { text: 'と合わせて', reason: '「と合わせて」表加上，太口語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「と相まって」表互相結合',
            analysis: '「と相まって（とあいまって）」表示「與〜互相結合/影響」，表兩個因素共同作用。',
            comparisons: ['と相まって：互相結合（兩因素共同作用）', 'に加えて：加上', 'とともに：同時'],
            commonMistakes: ['○ 円安と相まって / × 円安に相まって → 用「と」非「に」'],
        },
    },
    // ━━━ とあれば (if it's the case that) ━━━
    {
        id: 'g_n1_122', category: 'grammar', level: 'N1', tags: ['formal', 'condition'],
        stem: '子供{こども}のため___、どんな苦労{くろう}もいとわない。',
        stemZh: '如果是為了孩子，任何辛苦都不在話下。',
        options: [
            { text: 'とあれば', reason: '正確！「とあれば」表示如果是〜的話。' },
            { text: 'となれば', reason: '「となれば」意思相近但「とあれば」更強調條件。' },
            { text: 'とすれば', reason: '「とすれば」表假設，語氣較輕。' },
            { text: 'としたら', reason: '「としたら」表如果，太一般。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とあれば」表特殊條件',
            analysis: '「とあれば」表示「如果是〜的話」，暗示在這個特殊條件下，願意做出特別的行動。',
            comparisons: ['とあれば：如果是〜的話（特殊條件）', 'となれば：一旦〜的話', 'とすれば：假設（推理）'],
            commonMistakes: ['○ ためとあれば / × ためにとあれば → 不加多餘的「に」'],
        },
    },
    // ━━━ とあって (because of the fact that) ━━━
    {
        id: 'g_n1_123', category: 'grammar', level: 'N1', tags: ['formal', 'reason'],
        stem: '連休{れんきゅう}最終日{さいしゅうび}___、道路{どうろ}は大渋滞{だいじゅうたい}だ。',
        stemZh: '因為是連假最後一天，道路大塞車。',
        options: [
            { text: 'とあって', reason: '正確！「とあって」表示因為〜（特殊狀況）。' },
            { text: 'だから', reason: '「だから」太口語。' },
            { text: 'なので', reason: '「なので」較口語。' },
            { text: 'であるから', reason: '「であるから」語法正確但不如「とあって」自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とあって」表特殊原因',
            analysis: '「とあって」表示「因為（某特殊情況）」，用於解釋某個不尋常現象的原因。',
            comparisons: ['とあって：因為（特殊狀況）', 'だけに：正因為', 'こともあって：也因為'],
            commonMistakes: ['○ 最終日とあって / × 最終日なとあって → 名詞直接接「とあって」'],
        },
    },
    // ━━━ とばかりに (as if to say) ━━━
    {
        id: 'g_n1_124', category: 'grammar', level: 'N1', tags: ['expression', 'manner'],
        stem: '彼{かれ}は「もう知{し}らない」___、部屋{へや}を出{で}ていった。',
        stemZh: '他一副「我不管了」的樣子離開了房間。',
        options: [
            { text: 'とばかりに', reason: '正確！「とばかりに」表示顯出〜的樣子。' },
            { text: 'と言って', reason: '「と言って」表說了然後，太直接。' },
            { text: 'と思って', reason: '「と思って」表想著，語義不同。' },
            { text: 'とかで', reason: '「とかで」表聽說，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とばかりに」表仿佛要說',
            analysis: '「とばかりに」表示「彷彿在說〜似的」「顯出〜的態度」，描述誇張的態度或動作。',
            comparisons: ['とばかりに：彷彿在說（態度描寫）', 'かのように：好像（比喻）', 'んばかりに：幾乎要（誇張）'],
            commonMistakes: ['○ 「知らない」とばかりに / × 知らないとばかりに → 常加引號強調'],
        },
    },
    // ━━━ といい〜といい (whether... or) ━━━
    {
        id: 'g_n1_125', category: 'grammar', level: 'N1', tags: ['expression', 'evaluation'],
        stem: '味{あじ}___、見{み}た目{め}___、この料理{りょうり}は完璧{かんぺき}だ。',
        stemZh: '不論是味道還是外觀，這道菜都是完美的。',
        options: [
            { text: 'といい…といい', reason: '正確！「といい〜といい」表示不論〜還是〜都。' },
            { text: 'とか…とか', reason: '「とか〜とか」表列舉，不含評價。' },
            { text: 'にしろ…にしろ', reason: '「にしろ〜にしろ」表不管〜還是〜，讓步用。' },
            { text: 'やら…やら', reason: '「やら〜やら」表又〜又〜，帶困惑。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「といい〜といい」表全面評價',
            analysis: '「AといいBといい」表示「不論是A還是B」，列舉多個方面進行整體評價。',
            comparisons: ['といい〜といい：不論〜還是〜（評價）', 'にしろ〜にしろ：不管〜還是〜（讓步）', 'であれ〜であれ：無論（正式）'],
            commonMistakes: ['○ 味といい見た目といい / × 味がといい見た目がといい → 名詞直接接「といい」'],
        },
    },
    // ━━━ といったらない (extremely) ━━━
    {
        id: 'g_n1_126', category: 'grammar', level: 'N1', tags: ['expression', 'degree'],
        stem: '夏{なつ}の東京{とうきょう}の暑{あつ}さ___。',
        stemZh: '東京夏天的炎熱簡直無法形容。',
        options: [
            { text: 'といったらない', reason: '正確！「といったらない」表示〜極了。' },
            { text: 'というものだ', reason: '「というものだ」表所謂的，語義不同。' },
            { text: 'といっても', reason: '「といっても」表雖說，語義不同。' },
            { text: 'というか', reason: '「というか」表與其說，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「といったらない」表程度極端',
            analysis: '「といったらない/といったらありはしない」表示「〜極了」「〜得不得了」，表達無法用言語形容的程度。',
            comparisons: ['といったらない：極了（口語強調）', 'この上ない：無以復加（書面）', '極まりない：極其（書面）'],
            commonMistakes: ['○ 暑さといったらない / × 暑いといったらない → 名詞形接「といったらない」'],
        },
    },
    // ━━━ というところだ (about / roughly) ━━━
    {
        id: 'g_n1_127', category: 'grammar', level: 'N1', tags: ['expression', 'approximation'],
        stem: '完成{かんせい}までにはあと一週間{いっしゅうかん}___。',
        stemZh: '到完成大概還需要一個星期左右。',
        options: [
            { text: 'というところだ', reason: '正確！「というところだ」表示大致上是〜。' },
            { text: 'ということだ', reason: '「ということだ」表就是說，語義不同。' },
            { text: 'というわけだ', reason: '「というわけだ」表也就是說，語義不同。' },
            { text: 'というものだ', reason: '「というものだ」表就是，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「というところだ」表大致估算',
            analysis: '「というところだ/といったところだ」表示「大致上是〜」「充其量也就是〜」，用於概略估算。',
            comparisons: ['というところだ：大約（估算）', 'ぐらいだ：大約（一般）', 'くらいのものだ：也就只有'],
            commonMistakes: ['○ 一週間というところだ / × 一週間のというところだ → 不加「の」'],
        },
    },
    // ━━━ といわず〜といわず (whether... or - everywhere) ━━━
    {
        id: 'g_n1_128', category: 'grammar', level: 'N1', tags: ['expression', 'totality'],
        stem: '顔{かお}___、手{て}___、全身{ぜんしん}泥{どろ}だらけだ。',
        stemZh: '不分臉還是手，全身都是泥。',
        options: [
            { text: 'といわず…といわず', reason: '正確！「といわず〜といわず」表示不分〜還是〜。' },
            { text: 'といい…といい', reason: '「といい〜といい」表評價列舉，語義不同。' },
            { text: 'にしろ…にしろ', reason: '「にしろ〜にしろ」表不管〜還是〜，語義不同。' },
            { text: 'であれ…であれ', reason: '「であれ〜であれ」表無論，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「といわず〜といわず」表無一處例外',
            analysis: '「AといわずBといわず」表示「不分A也不分B，到處都」，強調全面性，不只限於A和B。',
            comparisons: ['といわず〜といわず：不分〜也不分〜（全面）', 'といい〜といい：不論〜還是〜（評價）', 'を問わず：不論'],
            commonMistakes: ['○ 顔といわず手といわず / × 顔やら手やら → 「といわず」是固定句型'],
        },
    },
    // ━━━ ときている (moreover / what's more) ━━━
    {
        id: 'g_n1_129', category: 'grammar', level: 'N1', tags: ['expression', 'addition'],
        stem: '彼{かれ}は頭{あたま}がいい。おまけに性格{せいかく}もいい___。',
        stemZh: '他頭腦好。而且性格也好。',
        options: [
            { text: 'ときている', reason: '正確！「ときている」表示而且還〜。' },
            { text: 'としている', reason: '「としている」表在做，語義不同。' },
            { text: 'とされている', reason: '「とされている」表被認為，語義不同。' },
            { text: 'といっている', reason: '「といっている」表在說，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ときている」表追加特點',
            analysis: '「ときている」表示「而且還〜」「加上又〜」，用於追加說明某個令人印象深刻的特點。',
            comparisons: ['ときている：而且還（追加特點）', 'うえに：加上', 'おまけに：而且'],
            commonMistakes: ['○ いいときている / × いくときている → 形容詞/動詞普通形接「ときている」'],
        },
    },
    // ━━━ と見るや (the moment one sees) ━━━
    {
        id: 'g_n1_130', category: 'grammar', level: 'N1', tags: ['expression', 'immediacy'],
        stem: '敵{てき}が弱{よわ}った___、一気{いっき}に攻{せ}め込{こ}んだ。',
        stemZh: '一看到敵人虛弱，就一口氣進攻了。',
        options: [
            { text: 'と見るや', reason: '正確！「と見るや」表示一看到〜就立刻。' },
            { text: 'と見ると', reason: '「と見ると」也可以但不如「と見るや」強調即時性。' },
            { text: 'を見て', reason: '「を見て」太一般。' },
            { text: 'と思うと', reason: '「と思うと」表以為，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「と見るや」表瞬間判斷行動',
            analysis: '「と見るや（とみるや）」表示「一看到〜就立刻（行動）」，強調判斷後的迅速反應。',
            comparisons: ['と見るや：一看到就（即時判斷）', 'や否や：一〜就（動作連接）', 'が早いか：剛〜就（速度）'],
            commonMistakes: ['○ 弱ったと見るや / × 弱いと見るや → 用た形描述看到的狀態'],
        },
    },
    // ━━━ となると / となれば (when it comes to) ━━━
    {
        id: 'g_n1_131', category: 'grammar', level: 'N1', tags: ['expression', 'supposition'],
        stem: '引{ひ}っ越{こ}す___、いろいろ準備{じゅんび}が必要{ひつよう}だ。',
        stemZh: '一旦要搬家，就需要各種準備。',
        options: [
            { text: 'となると', reason: '正確！「となると」表示一旦要〜的話。' },
            { text: 'としたら', reason: '「としたら」表假設，但不如「となると」強調現實性。' },
            { text: 'とすると', reason: '「とすると」表如果假設，語氣較輕。' },
            { text: 'というと', reason: '「というと」表說到，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「となると」表面臨新狀況',
            analysis: '「となると/となれば」表示「一旦〜的話」「真到了〜的時候」，暗示面臨的狀況比想像中複雜。',
            comparisons: ['となると：一旦〜的話（現實感）', 'としたら：如果（假設）', 'ともなると：到了〜級別'],
            commonMistakes: ['○ 引っ越すとなると / × 引っ越しとなると → 動詞辭書形接'],
        },
    },
    // ━━━ とされる (is considered to be) ━━━
    {
        id: 'g_n1_132', category: 'grammar', level: 'N1', tags: ['formal', 'hearsay'],
        stem: 'この遺跡{いせき}は約{やく}2000年前{ねんまえ}のもの___。',
        stemZh: '這個遺跡被認為是大約2000年前的東西。',
        options: [
            { text: 'とされている', reason: '正確！「とされる」表示被認為是。' },
            { text: 'となっている', reason: '「となっている」表變成了，語義不同。' },
            { text: 'とみている', reason: '「とみている」表看作，主觀性太強。' },
            { text: 'とした', reason: '「とした」表假定為，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とされる」表普遍認知',
            analysis: '「とされる/とされている」表示「被認為是」「一般認為」，用於客觀敘述普遍的看法或學術觀點。',
            comparisons: ['とされる：被認為（客觀）', 'と言われている：據說', 'と考えられている：被認為（思考）'],
            commonMistakes: ['○ ものとされている / × ものをされている → 用「と」非「を」'],
        },
    },
    // ━━━ ときたら (when it comes to... - dissatisfaction) ━━━
    {
        id: 'g_n1_133', category: 'grammar', level: 'N1', tags: ['expression', 'criticism'],
        stem: 'うちの息子{むすこ}___、毎日{まいにち}ゲームばかりしている。',
        stemZh: '說到我兒子，每天只會打電動。',
        options: [
            { text: 'ときたら', reason: '正確！「ときたら」表說到〜（不滿）。' },
            { text: 'といえば', reason: '「といえば」表說到，但不含不滿。' },
            { text: 'というと', reason: '「というと」表說到，中性。' },
            { text: 'にしては', reason: '「にしては」表以〜來說（意外），語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ときたら」表帶有不滿的提起',
            analysis: '「ときたら」表示「說起〜」，通常帶有不滿、批評或無奈的語氣。',
            comparisons: ['ときたら：說到（不滿）', 'といえば：說到（中性/聯想）', 'ったら：說到（口語/親暱抱怨）'],
            commonMistakes: ['○ 息子ときたら / × 息子がときたら → 名詞直接接「ときたら」'],
        },
    },
    // ━━━ ところを (at the very moment / despite) ━━━
    {
        id: 'g_n1_134', category: 'grammar', level: 'N1', tags: ['formal', 'timing'],
        stem: 'お忙{いそが}しい___申{もう}し訳{わけ}ございませんが、お願{ねが}いがあります。',
        stemZh: '百忙之中打擾您了，有件事想拜託您。',
        options: [
            { text: 'ところを', reason: '正確！「ところを」表示正當〜之際（打擾）。' },
            { text: 'ところに', reason: '「ところに」表正好在〜時候，但不用於客套。' },
            { text: 'ところで', reason: '「ところで」表即使，語義不同。' },
            { text: 'ところが', reason: '「ところが」表然而，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ところを」表打擾客套',
            analysis: '「ところを」表示「正當〜的時候（打擾了）」，常用於請求或道歉的客套語。',
            comparisons: ['ところを：正值〜（客套打擾）', 'ところに：正好在〜時', 'ところへ：正好在〜時（有人來）'],
            commonMistakes: ['○ お忙しいところを / × お忙しいのところを → い形容詞直接接「ところを」'],
        },
    },
    // ━━━ ともなく / ともなしに (without intention) ━━━
    {
        id: 'g_n1_135', category: 'grammar', level: 'N1', tags: ['expression', 'manner'],
        stem: 'テレビを見{み}る___見{み}ていたら、面白{おもしろ}い番組{ばんぐみ}がやっていた。',
        stemZh: '漫不經心地看著電視，發現有個有趣的節目。',
        options: [
            { text: 'ともなく', reason: '正確！「ともなく」表示無意識地、漫不經心地。' },
            { text: 'つもりなく', reason: '語法不正確。' },
            { text: 'わけなく', reason: '「わけなく」表輕而易舉，語義不同。' },
            { text: 'こともなく', reason: '「こともなく」表不〜，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ともなく」表無意識動作',
            analysis: '「Vともなく/ともなしに」表示「漫不經心地」「無意識地」。常見：「見るともなく見る」「聞くともなく聞く」。',
            comparisons: ['ともなく：無意識地（重複動詞）', 'ともなしに：漫不經心地', 'なんとなく：不知怎地'],
            commonMistakes: ['○ 見るともなく見る / × 見ないともなく → 用辭書形重複'],
        },
    },
    // ━━━ とも〜とも (neither... nor clear) ━━━
    {
        id: 'g_n1_136', category: 'grammar', level: 'N1', tags: ['expression', 'ambiguity'],
        stem: '彼{かれ}の返事{へんじ}はイエス___ノー___つかない曖昧{あいまい}なものだった。',
        stemZh: '他的回答模稜兩可，分不清是好還是壞。',
        options: [
            { text: 'とも…とも', reason: '正確！「とも〜とも」表示不清楚是〜還是〜。' },
            { text: 'でも…でも', reason: '「でも〜でも」表即使〜也，語義不同。' },
            { text: 'やら…やら', reason: '「やら〜やら」表不知是〜是〜，但語感不同。' },
            { text: 'か…か', reason: '「か〜か」是直接疑問，不含模糊感。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とも〜とも」表模糊不清',
            analysis: '「Aとも Bとも つかない」表示「分不清是A還是B」「模糊不清」。',
            comparisons: ['とも〜ともつかない：分不清（模糊）', 'やら〜やら：不知是〜是〜（困惑）', 'か〜か：是〜還是（疑問）'],
            commonMistakes: ['○ イエスともノーともつかない / × イエスかノーかつかない → 用「とも」非「か」'],
        },
    },
    // ━━━ とりわけ (especially / particularly) ━━━
    {
        id: 'g_n1_137', category: 'grammar', level: 'N1', tags: ['expression', 'emphasis'],
        stem: '日本{にほん}の食{た}べ物{もの}はどれも美味{おい}しいが、___寿司{すし}が最高{さいこう}だ。',
        stemZh: '日本的食物都很好吃，尤其壽司最棒。',
        options: [
            { text: 'とりわけ', reason: '正確！「とりわけ」表示格外、尤其。' },
            { text: 'さすがに', reason: '「さすがに」表不愧是，語義不同。' },
            { text: 'あくまで', reason: '「あくまで」表始終，語義不同。' },
            { text: 'いわば', reason: '「いわば」表可以說是，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とりわけ」表特別地',
            analysis: '「とりわけ」是副詞，表示「格外地」「尤其」「特別地」。比「特に」更書面。',
            comparisons: ['とりわけ：格外（書面）', '特に：特別（一般）', 'なかでも：其中（列舉）'],
            commonMistakes: ['○ とりわけ寿司が / × とりわけの寿司が → 副詞不加「の」'],
        },
    },
    // ━━━ としたことが (someone like... surprisingly) ━━━
    {
        id: 'g_n1_138', category: 'grammar', level: 'N1', tags: ['expression', 'surprise'],
        stem: 'ベテランの彼{かれ}___、こんな簡単{かんたん}なミスをするとは。',
        stemZh: '老練的他竟然犯了這麼簡單的錯誤。',
        options: [
            { text: 'としたことが', reason: '正確！「としたことが」表示〜竟然。' },
            { text: 'ともあろうものが', reason: '「ともあろうものが」意思相近，也表驚訝批評。' },
            { text: 'にしたところで', reason: '「にしたところで」表即使是，語義不同。' },
            { text: 'にしてみれば', reason: '「にしてみれば」表從〜角度看，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「としたことが」表意外失誤',
            analysis: '「としたことが」表示「〜竟然（做了不該做的事）」，表達對某人犯下意外失誤的驚訝。',
            comparisons: ['としたことが：竟然（失誤驚訝）', 'ともあろうものが：堂堂〜竟然（批評）', 'にしては：以〜來說（意外）'],
            commonMistakes: ['○ 彼としたことが / × 彼がしたことが → 「としたことが」是固定句型'],
        },
    },
    // ━━━ とて (even / although) ━━━
    {
        id: 'g_n1_139', category: 'grammar', level: 'N1', tags: ['literary', 'concession'],
        stem: 'いくら努力{どりょく}した___、結果{けっか}が出{で}ないこともある。',
        stemZh: '即使再怎麼努力，也有時候看不到結果。',
        options: [
            { text: 'とて', reason: '正確！「とて」表示即使〜也。' },
            { text: 'として', reason: '「として」表作為，語義不同。' },
            { text: 'とても', reason: '「とても」是副詞「非常」，語義不同。' },
            { text: 'とこそ', reason: '「とこそ」語法不正確。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とて」表讓步（文語）',
            analysis: '「とて」是文語讓步表現，相當於「としても」「とは言え」。表示「即使〜也」。',
            comparisons: ['とて：即使（文語）', 'としても：即使（一般）', 'とは言え：雖說'],
            commonMistakes: ['○ 努力したとて / × 努力するとて → 多用た形接「とて」'],
        },
    },
    // ━━━ とはいえ (although / having said that) ━━━
    {
        id: 'g_n1_140', category: 'grammar', level: 'N1', tags: ['expression', 'concession'],
        stem: '春{はる}になった___、まだ寒{さむ}い日{ひ}もある。',
        stemZh: '雖說已經是春天了，但還是有寒冷的日子。',
        options: [
            { text: 'とはいえ', reason: '正確！「とはいえ」表示雖說如此。' },
            { text: 'といえば', reason: '「といえば」表說到，語義不同。' },
            { text: 'というのに', reason: '「というのに」表明明，語義不同。' },
            { text: 'といったら', reason: '「といったら」表說到/極了，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とはいえ」表雖說如此',
            analysis: '「とはいえ/とは言え」表示「雖說〜」「話雖如此」，承認前提但提出不同觀點。',
            comparisons: ['とはいえ：雖說（轉折）', 'とはいうものの：雖說如此', 'ものの：雖然'],
            commonMistakes: ['○ なったとはいえ / × なるとはいえ → 用た形接更自然'],
        },
    },
    // ━━━ とは打って変わって (completely different from) ━━━
    {
        id: 'g_n1_141', category: 'grammar', level: 'N1', tags: ['expression', 'contrast'],
        stem: '昨日{きのう}の雨{あめ}___、今日{きょう}は快晴{かいせい}だ。',
        stemZh: '跟昨天的雨完全不同，今天是大晴天。',
        options: [
            { text: 'とは打って変わって', reason: '正確！「とは打って変わって」表示與〜截然不同。' },
            { text: 'と比べて', reason: '「と比べて」表比較，不強調反差。' },
            { text: 'とは違って', reason: '「とは違って」表不同，但不如前者強調戲劇性反差。' },
            { text: 'に引き換え', reason: '「に引き換え」也表反差，但語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とは打って変わって」表截然不同',
            analysis: '「とは打って変わって（とはうってかわって）」表示「與〜截然不同」「突然大改變」。',
            comparisons: ['とは打って変わって：截然不同（戲劇性）', 'とは違って：不同', 'に引き換え：相比之下'],
            commonMistakes: ['○ 昨日の雨とは打って変わって / × 昨日とは打って変わった → 用「変わって」非「変わった」接後句'],
        },
    },
    // ━━━ 尽くす (to do thoroughly) ━━━
    {
        id: 'g_n1_142', category: 'grammar', level: 'N1', tags: ['expression', 'completion'],
        stem: '彼{かれ}は持{も}てる力{ちから}を出{だ}し___、勝利{しょうり}を掴{つか}んだ。',
        stemZh: '他竭盡全力，取得了勝利。',
        options: [
            { text: '尽くして', reason: '正確！「尽くす」表示竭盡。' },
            { text: '切って', reason: '「切る」表做完，但不如「尽くす」強調竭盡。' },
            { text: '抜いて', reason: '「抜く」表做到底，語感不同。' },
            { text: '果たして', reason: '「果たす」表完成任務，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「尽くす」表竭盡',
            analysis: '「尽くす（つくす）」接在動詞ます形後，表示「做盡」「竭盡」。也可獨立使用。',
            comparisons: ['尽くす：竭盡（全力）', '切る：做完（完了）', '抜く：做到底（堅持）'],
            commonMistakes: ['○ 出し尽くす / × 出る尽くす → 接ます形去「ます」'],
        },
    },
    // ━━━ つ〜つ (alternately doing) ━━━
    {
        id: 'g_n1_143', category: 'grammar', level: 'N1', tags: ['literary', 'alternation'],
        stem: '二人{ふたり}は持{も}ち___持{も}たれ___の関係{かんけい}だ。',
        stemZh: '兩人是互相扶持的關係。',
        options: [
            { text: 'つ…つ', reason: '正確！「つ〜つ」表示時而〜時而〜。' },
            { text: 'たり…たり', reason: '「たり〜たり」表又〜又〜，但不如「つ〜つ」文語。' },
            { text: 'ながら…ながら', reason: '語法不正確。' },
            { text: 'て…て', reason: '「て〜て」是一般連接，不表交替。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「つ〜つ」表交替動作',
            analysis: '「Vます形＋つ＋Vます形＋つ」表示兩個相反動作交替進行。常見：「持ちつ持たれつ」「行きつ戻りつ」。',
            comparisons: ['つ〜つ：交替（文語固定搭配）', 'たり〜たり：又〜又〜（一般）', 'つつ：一邊（同時）'],
            commonMistakes: ['○ 持ちつ持たれつ / × 持つつ持たれつ → 接ます形'],
        },
    },
    // ━━━ ってば / ったら (I said...! / speaking of) ━━━
    {
        id: 'g_n1_144', category: 'grammar', level: 'N1', tags: ['expression', 'impatience'],
        stem: 'もう行{い}くよ___！早{はや}くして！',
        stemZh: '我說要走了啦！快一點！',
        options: [
            { text: 'ってば', reason: '正確！「ってば」表示不耐煩地重複。' },
            { text: 'って', reason: '「って」是引用，不帶不耐煩語氣。' },
            { text: 'とか', reason: '「とか」表聽說，語義不同。' },
            { text: 'というのに', reason: '「というのに」表明明，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ってば」表不耐煩',
            analysis: '「ってば/ったら」用於句末，表示已經說過了但對方不聽，帶有不耐煩的語氣。',
            comparisons: ['ってば：我說了（不耐煩）', 'ったら：說到〜（親暱抱怨）', 'って：引用/傳聞'],
            commonMistakes: ['○ 行くよってば / × 行くってばよ → 「ってば」放在句末'],
        },
    },
    // ━━━ うちに入らない (doesn't count as) ━━━
    {
        id: 'g_n1_145', category: 'grammar', level: 'N1', tags: ['expression', 'minimization'],
        stem: 'その程度{ていど}の運動{うんどう}は運動{うんどう}の___。',
        stemZh: '那種程度的運動還算不上是運動。',
        options: [
            { text: 'うちに入らない', reason: '正確！「うちに入らない」表示算不上。' },
            { text: 'うちに入る', reason: '「うちに入る」表算得上，語義相反。' },
            { text: 'なかに入らない', reason: '「なかに入らない」語法不自然。' },
            { text: 'ことにならない', reason: '「ことにならない」表不能算，但不如前者自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「うちに入らない」表算不上',
            analysis: '「うちに入らない（うちにはいらない）」表示「算不上〜」「不值一提」，否定某事物的程度。',
            comparisons: ['うちに入らない：算不上（否定程度）', 'に足りない：不值得', 'とは言えない：不能說是'],
            commonMistakes: ['○ 運動のうちに入らない / × 運動にうちに入らない → 用「の」連接'],
        },
    },
    // ━━━ はおろか (let alone) ━━━
    {
        id: 'g_n1_146', category: 'grammar', level: 'N1', tags: ['expression', 'extreme'],
        stem: '漢字{かんじ}___、ひらがなさえ読{よ}めない。',
        stemZh: '別說漢字了，連平假名都不會讀。',
        options: [
            { text: 'はおろか', reason: '正確！「はおろか」表示別說〜連〜都。' },
            { text: 'はもちろん', reason: '「はもちろん」表當然，不強調極端。' },
            { text: 'ばかりか', reason: '「ばかりか」表不僅，語氣較輕。' },
            { text: 'だけでなく', reason: '「だけでなく」表不只，太一般。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「はおろか」表更不用說',
            analysis: '「はおろか」表示「更不用說〜」「別說〜了」，先提出困難的，再提出更基本的也做不到。',
            comparisons: ['はおろか：別說（極端對比）', 'はもとより：不用說（正式）', 'ばかりか：不僅（遞進）'],
            commonMistakes: ['○ 漢字はおろか / × 漢字がおろか → 用「は」非「が」'],
        },
    },
    // ━━━ はさておき (putting aside) ━━━
    {
        id: 'g_n1_147', category: 'grammar', level: 'N1', tags: ['expression', 'digression'],
        stem: '冗談{じょうだん}___、本題{ほんだい}に入{はい}りましょう。',
        stemZh: '玩笑暫且不說，我們進入正題吧。',
        options: [
            { text: 'はさておき', reason: '正確！「はさておき」表示暫且不論。' },
            { text: 'はともかく', reason: '「はともかく」意思相近但不如前者正式。' },
            { text: 'は別として', reason: '「は別として」表另當別論，語感不同。' },
            { text: 'はおいて', reason: '語法不正確，應為「をおいて」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「はさておき」表暫且擱置',
            analysis: '「はさておき」表示「暫且不談〜」「先把〜放一邊」，用於轉換話題。',
            comparisons: ['はさておき：暫且不論（正式）', 'はともかく：先不管（一般）', 'は別として：另當別論'],
            commonMistakes: ['○ 冗談はさておき / × 冗談のさておき → 用「は」非「の」'],
        },
    },
    // ━━━ はそっちのけで (neglecting / ignoring) ━━━
    {
        id: 'g_n1_148', category: 'grammar', level: 'N1', tags: ['expression', 'neglect'],
        stem: '宿題{しゅくだい}___、子供{こども}たちは外{そと}で遊{あそ}んでいる。',
        stemZh: '把作業丟在一旁，孩子們在外面玩。',
        options: [
            { text: 'はそっちのけで', reason: '正確！「はそっちのけで」表示把〜丟在一旁。' },
            { text: 'をよそに', reason: '「をよそに」也表不管，但語感不同。' },
            { text: 'はおろか', reason: '「はおろか」表別說，語義不同。' },
            { text: 'はもちろん', reason: '「はもちろん」表當然，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「はそっちのけで」表置之不理',
            analysis: '「はそっちのけで」表示「把〜丟在一旁不管」「完全忽視」，帶有批評語氣。',
            comparisons: ['はそっちのけで：丟在一旁（批評）', 'をよそに：不顧（漠不關心）', 'を無視して：無視'],
            commonMistakes: ['○ 宿題はそっちのけで / × 宿題をそっちのけに → 常用「は〜で」'],
        },
    },
    // ━━━ わ〜わで (what with... and) ━━━
    {
        id: 'g_n1_149', category: 'grammar', level: 'N1', tags: ['expression', 'complaint'],
        stem: '子供{こども}は泣{な}く___、電話{でんわ}は鳴{な}る___、大変{たいへん}だった。',
        stemZh: '孩子又哭，電話又響，真是忙得不可開交。',
        options: [
            { text: 'わ…わで', reason: '正確！「わ〜わで」表示又〜又〜（煩人事）。' },
            { text: 'し…し', reason: '「し〜し」表列舉，但不如前者強調煩躁。' },
            { text: 'たり…たりで', reason: '語法不自然。' },
            { text: 'やら…やらで', reason: '「やら〜やら」意思相近但語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「わ〜わで」表不堪其擾',
            analysis: '「わ〜わで」列舉多個令人煩躁的事情，表示「又〜又〜（所以很慘）」。',
            comparisons: ['わ〜わで：又〜又〜（煩躁）', 'やら〜やら：又〜又〜（困惑列舉）', 'し〜し：而且（列舉原因）'],
            commonMistakes: ['○ 泣くわ鳴るわで / × 泣くわ、鳴るわ、で → 「で」放在最後一個「わ」之後'],
        },
    },
    // ━━━ やしない (absolutely not) ━━━
    {
        id: 'g_n1_150', category: 'grammar', level: 'N1', tags: ['expression', 'negation'],
        stem: 'あんな難{むずか}しい問題{もんだい}、解{と}け___。',
        stemZh: '那麼難的問題，根本解不開。',
        options: [
            { text: 'やしない', reason: '正確！「やしない」表示根本不〜。' },
            { text: 'はしない', reason: '「はしない」意思相近但「やしない」語氣更強。' },
            { text: 'ようがない', reason: '「ようがない」表沒辦法〜，語義不同。' },
            { text: 'わけがない', reason: '「わけがない」表不可能，不如前者口語化。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「やしない」表強烈否定',
            analysis: '「Vます形＋やしない」表示「根本不〜」「怎麼可能〜」，是強烈的否定表現，帶有情感。',
            comparisons: ['やしない：根本不（強烈口語）', 'はしない：不會（一般強調）', 'ようがない：沒辦法'],
            commonMistakes: ['○ 解けやしない / × 解くやしない → 接ます形去「ます」+ やしない'],
        },
    },
    // ━━━ べからず (must not) ━━━
    {
        id: 'g_n1_151', category: 'grammar', level: 'N1', tags: ['literary', 'prohibition'],
        stem: '図書館{としょかん}内{ない}では飲食{いんしょく}する___。',
        stemZh: '圖書館內禁止飲食。',
        options: [
            { text: 'べからず', reason: '正確！「べからず」表示禁止、不應該做。' },
            { text: 'べきではない', reason: '「べきではない」語義相近但不如「べからず」正式。' },
            { text: 'はずがない', reason: '「はずがない」表不可能，語義不同。' },
            { text: 'わけにはいかない', reason: '「わけにはいかない」表不能做，但語境不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「べからず」表禁止（文語）',
            analysis: '「Vる＋べからず」是文語表現，用於規定、告示等，表示「不准做〜」「不應該做〜」。',
            comparisons: ['べからず：不准（文語、告示用）', 'べきではない：不應該（現代口語）', 'てはいけない：不可以（一般禁止）'],
            commonMistakes: ['○ するべからず / × するべからない → 否定形是「べからず」不是「べからない」'],
        },
    },
    // ━━━ べく (in order to) ━━━
    {
        id: 'g_n1_152', category: 'grammar', level: 'N1', tags: ['literary', 'purpose'],
        stem: '問題{もんだい}を解決{かいけつ}す___、会議{かいぎ}が開{ひら}かれた。',
        stemZh: '為了解決問題，召開了會議。',
        options: [
            { text: 'るために', reason: '「ために」表目的，但此處考查文語「べく」。' },
            { text: 'べく', reason: '正確！「べく」表示「為了〜」的文語用法。' },
            { text: 'ように', reason: '「ように」表目的但用於非意志動詞。' },
            { text: 'ことで', reason: '「ことで」表示原因，不表目的。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「べく」表目的（文語）',
            analysis: '「Vる＋べく」是文語表現，表示「為了〜」的目的。常用於書面語及正式場合。',
            comparisons: ['べく：為了（文語）', 'ために：為了（一般）', 'ように：為了（非意志動詞）'],
            commonMistakes: ['○ 解決すべく / × 解決するべく → 「する」接「べく」時可寫作「すべく」'],
        },
    },
    // ━━━ ごとく (like) ━━━
    {
        id: 'g_n1_153', category: 'grammar', level: 'N1', tags: ['literary', 'comparison'],
        stem: '光陰{こういん}矢{や}の___過{す}ぎ去{さ}る。',
        stemZh: '光陰如箭般逝去。',
        options: [
            { text: 'ように', reason: '「ように」也表比喻，但語感不如「ごとく」正式。' },
            { text: 'みたいに', reason: '「みたいに」是口語比喻，語體不合。' },
            { text: 'ごとく', reason: '正確！「ごとく」表示「如同〜一般」。' },
            { text: 'ばかりに', reason: '「ばかりに」表原因，不表比喻。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ごとく」表比喻（文語）',
            analysis: '「N＋の＋ごとく」是文語表現，表示「如同〜一般」，常見於慣用表現及諺語。',
            comparisons: ['ごとく：如同（文語）', 'ように：好像（一般書面語）', 'みたいに：好像（口語）'],
            commonMistakes: ['○ 矢のごとく / × 矢がごとく → 名詞接「ごとく」時用「の」'],
        },
    },
    // ━━━ ゆえに (because) ━━━
    {
        id: 'g_n1_154', category: 'grammar', level: 'N1', tags: ['literary', 'reason'],
        stem: '経験{けいけん}不足{ぶそく}___、多{おお}くのミスを犯{おか}してしまった。',
        stemZh: '由於經驗不足，犯了許多錯誤。',
        options: [
            { text: 'なので', reason: '「なので」表原因但為口語。' },
            { text: 'だから', reason: '「だから」表原因但為口語。' },
            { text: 'のせいで', reason: '「のせいで」表歸咎，語感不同。' },
            { text: 'ゆえに', reason: '正確！「ゆえに」表示「因為〜」的文語用法。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「ゆえに」表原因（文語）',
            analysis: '「Nゆえに」「Naなるがゆえに」「Vがゆえに」是文語表現，表示「因為〜所以〜」，用於書面語。',
            comparisons: ['ゆえに：因此（文語）', 'ために：因為（一般書面語）', 'から・ので：因為（口語/書面語）'],
            commonMistakes: ['○ 不足ゆえに / × 不足なゆえに → 名詞可直接接「ゆえに」'],
        },
    },
    // ━━━ たりとも (not even one) ━━━
    {
        id: 'g_n1_155', category: 'grammar', level: 'N1', tags: ['literary', 'emphasis'],
        stem: '一秒{いちびょう}___無駄{むだ}にしたくない。',
        stemZh: '一秒鐘都不想浪費。',
        options: [
            { text: 'たりとも', reason: '正確！「たりとも」表示「即使一〜也（不）」。' },
            { text: 'だけでも', reason: '「だけでも」表示「至少」，語義不同。' },
            { text: 'ほども', reason: '「ほども」表程度，不如前者自然。' },
            { text: 'さえも', reason: '「さえも」表「甚至」，但與「一秒」不如「たりとも」搭配。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たりとも」表「即使一〜也（不）」',
            analysis: '「一＋助數詞＋たりとも〜ない」表示「哪怕一〜也不〜」，強調絕對程度的否定。',
            comparisons: ['たりとも：即使一個也不（強烈否定）', 'さえ：連〜都', 'すら：甚至〜也'],
            commonMistakes: ['○ 一秒たりとも / × 一秒もたりとも → 不需要加「も」'],
        },
    },
    // ━━━ いかんにかかわらず (regardless) ━━━
    {
        id: 'g_n1_156', category: 'grammar', level: 'N1', tags: ['formal', 'condition'],
        stem: '理由{りゆう}の___、遅刻{ちこく}は認{みと}められない。',
        stemZh: '無論理由為何，遲到都不被允許。',
        options: [
            { text: 'いかんにかかわらず', reason: '正確！「いかんにかかわらず」表示「不論〜如何」。' },
            { text: 'いかんでは', reason: '「いかんでは」表「視〜而定」，語義不同。' },
            { text: 'いかんで', reason: '「いかんで」表「取決於」，語義不同。' },
            { text: 'いかんなく', reason: '「いかんなく」表「充分發揮」，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「いかんにかかわらず」表「無論如何」',
            analysis: '「N＋の＋いかんにかかわらず」表示「不管〜如何都〜」，是非常正式的書面表現。',
            comparisons: ['いかんにかかわらず：不管如何（正式否定條件）', 'いかんによっては：視〜而定', 'いかんで：取決於〜'],
            commonMistakes: ['○ 理由のいかんにかかわらず / × 理由いかんにかかわらず → 名詞後加「の」'],
        },
    },
    // ━━━ をもって (by means of) ━━━
    {
        id: 'g_n1_157', category: 'grammar', level: 'N1', tags: ['formal', 'means'],
        stem: '本日{ほんじつ}___閉店{へいてん}とさせていただきます。',
        stemZh: '今日起停止營業。',
        options: [
            { text: 'で', reason: '「で」表時間但語體不夠正式。' },
            { text: 'から', reason: '「から」表起點但不夠正式。' },
            { text: 'をもって', reason: '正確！「をもって」表示以某時間為界限。' },
            { text: 'において', reason: '「において」表場所或時間，但語義不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「をもって」表手段或界限',
            analysis: '「N＋をもって」可表示手段「用〜」或時間界限「以〜為限」。此處為時間界限用法。',
            comparisons: ['をもって：以〜（正式界限/手段）', 'で：用（一般手段）', 'により：藉由（正式手段）'],
            commonMistakes: ['○ 本日をもって / × 本日をもちて → 固定用法「をもって」'],
        },
    },
    // ━━━ に即して (in accordance with) ━━━
    {
        id: 'g_n1_158', category: 'grammar', level: 'N1', tags: ['formal', 'basis'],
        stem: '現実{げんじつ}___計画{けいかく}を立{た}てるべきだ。',
        stemZh: '應該根據現實制定計劃。',
        options: [
            { text: 'に対して', reason: '「に対して」表對象，不表依據。' },
            { text: 'について', reason: '「について」表關於，不表依據。' },
            { text: 'によって', reason: '「によって」表手段或原因。' },
            { text: 'に即して', reason: '正確！「に即して」表示「根據〜、結合〜」。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「に即して」表「依據事實」',
            analysis: '「N＋に即して」表示「根據（事實、現狀等）」、「結合（實際情況）」，用於書面語。',
            comparisons: ['に即して：根據事實', 'に基づいて：基於', 'に則って：遵照（規則）'],
            commonMistakes: ['○ 現実に即して / × 現実を即して → 助詞用「に」不用「を」'],
        },
    },
    // ━━━ たる (being) ━━━
    {
        id: 'g_n1_159', category: 'grammar', level: 'N1', tags: ['literary', 'identity'],
        stem: '教師{きょうし}___もの、常{つね}に模範{もはん}を示{しめ}すべきだ。',
        stemZh: '身為教師，應當時常做出表率。',
        options: [
            { text: 'たる', reason: '正確！「たるもの」表示「身為〜的人」。' },
            { text: 'なる', reason: '「なる」是文語「である」的意思，接法不同。' },
            { text: 'としての', reason: '「としての」也表身分但不如「たる」正式。' },
            { text: 'である', reason: '「である」表斷定，但此處需文語體。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たるもの」表身分自覺',
            analysis: '「N＋たるもの」是文語表現，表示「作為〜身分的人，應該要〜」，常用於訓誡或期許。',
            comparisons: ['たるもの：身為〜（文語、帶責任感）', 'として：作為（一般）', 'としての：身為〜的（修飾名詞）'],
            commonMistakes: ['○ 教師たるもの / × 教師のたるもの → 名詞直接接「たる」'],
        },
    },
    // ━━━ なりに (in one's own way) ━━━
    {
        id: 'g_n1_160', category: 'grammar', level: 'N1', tags: ['expression', 'manner'],
        stem: '子{こ}どもは子{こ}ども___考{かんが}えている。',
        stemZh: '孩子有孩子自己的想法。',
        options: [
            { text: 'として', reason: '「として」表角色，但不強調自身的程度。' },
            { text: 'ながらも', reason: '「ながらも」表逆接，語義不同。' },
            { text: 'なりに', reason: '正確！「なりに」表示「以〜的方式」、「以〜自己的程度」。' },
            { text: 'だけに', reason: '「だけに」表正因如此，語義不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「なりに」表以自身程度',
            analysis: '「N＋なりに」表示「以〜相應的方式」「以〜自己的程度」。暗示雖然水準不一定高，但有其自身的努力或想法。',
            comparisons: ['なりに：以自己的方式', 'として：作為', 'ながらも：雖然〜但是'],
            commonMistakes: ['○ 子どもなりに / × 子どもにはなりに → 直接接「なりに」'],
        },
    },
    // ━━━ ようものなら (if one dares) ━━━
    {
        id: 'g_n1_161', category: 'grammar', level: 'N1', tags: ['expression', 'conditional'],
        stem: 'あの上司{じょうし}に逆{さか}らお___、すぐにクビにされる。',
        stemZh: '如果膽敢違抗那個上司，馬上就會被開除。',
        options: [
            { text: 'うとすれば', reason: '「うとすれば」表嘗試的條件，語氣較弱。' },
            { text: 'うものなら', reason: '正確！「ようものなら」表示「如果膽敢〜的話（後果很嚴重）」。' },
            { text: 'うとしたら', reason: '「うとしたら」表嘗試的假定，語氣較弱。' },
            { text: 'うにも', reason: '「ようにも」表「想〜也辦不到」，語義不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ようものなら」表嚴重後果的假設',
            analysis: '「V意向形＋ものなら」表示「萬一膽敢〜的話（會有嚴重後果）」，帶有警告或威嚇語氣。',
            comparisons: ['ようものなら：萬一〜的話（嚴重後果）', 'ものなら：如果可以〜的話', 'ようとすれば：嘗試〜的話'],
            commonMistakes: ['○ 逆らおうものなら / × 逆らうものなら → 用意向形「おう」不是辭書形'],
        },
    },
    // ━━━ ともなると (when it comes to) ━━━
    {
        id: 'g_n1_162', category: 'grammar', level: 'N1', tags: ['expression', 'degree'],
        stem: '部長{ぶちょう}___、責任{せきにん}も重{おも}くなる。',
        stemZh: '一旦當上部長，責任也就重了。',
        options: [
            { text: 'になると', reason: '「になると」表變化，但不如「ともなると」強調身分差異。' },
            { text: 'だとしたら', reason: '「だとしたら」表假設，語義不同。' },
            { text: 'ともなると', reason: '正確！「ともなると」表示「一旦到了〜那種程度/地位」。' },
            { text: 'であっても', reason: '「であっても」表讓步，語義不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ともなると」表程度或地位的變化',
            analysis: '「N＋ともなると」表示「一旦到了〜的程度/地位，情況就不同了」，暗示高程度帶來的變化。',
            comparisons: ['ともなると：到了〜地位就不同（強調差異）', 'になると：變成〜的話', 'ともなれば：同「ともなると」'],
            commonMistakes: ['○ 部長ともなると / × 部長にともなると → 名詞直接接「ともなると」'],
        },
    },
    // ━━━ なくして(は) (without) ━━━
    {
        id: 'g_n1_163', category: 'grammar', level: 'N1', tags: ['literary', 'condition'],
        stem: '努力{どりょく}___成功{せいこう}はあり得{え}ない。',
        stemZh: '沒有努力就不可能成功。',
        options: [
            { text: 'がなければ', reason: '「がなければ」語義相近但不如「なくして」正式。' },
            { text: 'なしでは', reason: '「なしでは」語義相近但口語化。' },
            { text: 'を抜きに', reason: '「を抜きに」表省略，語義不同。' },
            { text: 'なくして', reason: '正確！「なくして(は)」表示「沒有〜的話（就不能）」。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「なくして(は)」表不可或缺的條件',
            analysis: '「N＋なくして(は)」表示「如果沒有〜就不行」，強調某事物是不可缺少的條件。',
            comparisons: ['なくして(は)：沒有〜就不行（文語）', 'なしに(は)：沒有〜地（較口語）', 'なければ：如果沒有〜'],
            commonMistakes: ['○ 努力なくして / × 努力がなくして → 名詞直接接「なくして」'],
        },
    },
    // ━━━ ないことには (unless) ━━━
    {
        id: 'g_n1_164', category: 'grammar', level: 'N1', tags: ['expression', 'condition'],
        stem: '実際{じっさい}にやって___、うまくいくかどうかわからない。',
        stemZh: '不實際做做看的話，不知道順不順利。',
        options: [
            { text: 'みないことには', reason: '正確！「ないことには」表示「如果不〜的話（就不知道/不行）」。' },
            { text: 'みなければ', reason: '「みなければ」語義相近但較為普通。' },
            { text: 'みないと', reason: '「みないと」語義相近但為口語。' },
            { text: 'みずに', reason: '「みずに」表「不做」但不表條件。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ないことには」表前提條件',
            analysis: '「V ない形＋ことには」表示「如果不〜的話，就無法〜」。後面通常接否定性的結論。',
            comparisons: ['ないことには：不〜的話就無法（書面語）', 'なければ：不〜的話（一般）', 'ないと：不〜的話（口語）'],
            commonMistakes: ['○ やってみないことには / × やってみることには → 必須用否定形「ない」'],
        },
    },
    // ━━━ 極まりない (extremely) ━━━
    {
        id: 'g_n1_165', category: 'grammar', level: 'N1', tags: ['expression', 'degree'],
        stem: 'あの政治家{せいじか}の発言{はつげん}は不謹慎{ふきんしん}___。',
        stemZh: '那位政治家的發言極其不謹慎。',
        options: [
            { text: '極まる', reason: '「極まる」也可以但接法不同：「不謹慎極まる」。' },
            { text: 'の極みだ', reason: '「の極みだ」表極致但接法不同。' },
            { text: '極まりない', reason: '正確！「極まりない」表示「極其〜」「〜到了極點」。' },
            { text: 'この上ない', reason: '「この上ない」表示「再也沒有比〜更」，但接法不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「極まりない」表達到極限',
            analysis: '「Na＋極まりない」表示「〜到了極點」「非常〜」，是強烈的書面表現，常用於負面評價。',
            comparisons: ['極まりない：〜到了極點（Na接續）', '極まる：極其〜（Na接續）', 'の極み：〜之極（N接續）'],
            commonMistakes: ['○ 不謹慎極まりない / × 不謹慎な極まりない → 去掉「な」直接接'],
        },
    },
    // ━━━ の至り (height of) ━━━
    {
        id: 'g_n1_166', category: 'grammar', level: 'N1', tags: ['literary', 'degree'],
        stem: 'このような賞{しょう}をいただき、光栄{こうえい}___です。',
        stemZh: '能獲得這樣的獎項，不勝榮幸。',
        options: [
            { text: 'の極みで', reason: '「の極みで」也可以但「の至り」更為慣用。' },
            { text: '極まりないこと', reason: '「極まりないこと」語法不自然。' },
            { text: 'の至り', reason: '正確！「の至り」表示「〜之至」，用於謙遜或感嘆。' },
            { text: 'の限り', reason: '「の限り」表示「盡〜」，語義不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「の至り」表感情之至',
            analysis: '「N＋の至り」表示「〜之至」，用於表達極度的感情，多為正式場合的謙遜用語。',
            comparisons: ['の至り：〜之至（謙遜/感嘆）', 'の極み：〜之極（極致）', '極まりない：極其〜'],
            commonMistakes: ['○ 光栄の至り / × 光栄な至り → 用「の」不用「な」'],
        },
    },
    // ━━━ ならでは (unique to) ━━━
    {
        id: 'g_n1_167', category: 'grammar', level: 'N1', tags: ['expression', 'exclusivity'],
        stem: 'この味{あじ}は京都{きょうと}___味{あじ}わえない。',
        stemZh: '這個味道只有京都才能品嚐到。',
        options: [
            { text: 'でしか', reason: '「でしか」表「只在」但不如「ならでは」強調獨特性。' },
            { text: 'ならではの', reason: '「ならではの」修飾名詞時用，此處需副詞用法。' },
            { text: 'ならでは', reason: '正確！「ならでは」表示「只有〜才有」「唯有〜」。' },
            { text: 'にしかない', reason: '「にしかない」語法不自然。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ならでは」表獨一無二',
            analysis: '「N＋ならでは（の）」表示「只有〜才有的」「〜獨特的」，含有讚美的語氣。',
            comparisons: ['ならでは：只有〜才有（讚美）', 'でしか〜ない：只在〜', 'に限って：偏偏〜'],
            commonMistakes: ['○ 京都ならでは / × 京都のならでは → 名詞直接接「ならでは」'],
        },
    },
    // ━━━ にほかならない (nothing but) ━━━
    {
        id: 'g_n1_168', category: 'grammar', level: 'N1', tags: ['expression', 'assertion'],
        stem: '彼{かれ}の成功{せいこう}は日々{ひび}の努力{どりょく}の結果{けっか}___。',
        stemZh: '他的成功正是日常努力的結果。',
        options: [
            { text: 'に違いない', reason: '「に違いない」表推測的確信，語義稍不同。' },
            { text: 'に決まっている', reason: '「に決まっている」表斷定，帶有偏見感。' },
            { text: 'だろう', reason: '「だろう」表推測，語氣太弱。' },
            { text: 'にほかならない', reason: '正確！「にほかならない」表示「正是〜」「無非是〜」。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「にほかならない」表強烈斷定',
            analysis: '「N＋にほかならない」表示「無非就是〜」「正是〜」，用於對原因或本質的強烈斷定。',
            comparisons: ['にほかならない：正是〜（強調本質）', 'に違いない：一定是〜（推測確信）', 'に決まっている：肯定是〜（口語斷定）'],
            commonMistakes: ['○ 結果にほかならない / × 結果のほかならない → 助詞用「に」不用「の」'],
        },
    },
    // ━━━ までもない (no need to) ━━━
    {
        id: 'g_n1_169', category: 'grammar', level: 'N1', tags: ['expression', 'unnecessary'],
        stem: 'そんな簡単{かんたん}なことは、言{い}う___。',
        stemZh: '那麼簡單的事，不用說也知道。',
        options: [
            { text: 'はずがない', reason: '「はずがない」表不可能，語義不同。' },
            { text: 'わけがない', reason: '「わけがない」表不可能，語義不同。' },
            { text: 'までもない', reason: '正確！「までもない」表示「沒必要〜」「不用〜」。' },
            { text: 'ことはない', reason: '「ことはない」也表不必要但語感不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「までもない」表沒必要',
            analysis: '「V辭書形＋までもない」表示「沒有必要特意做〜」「不用〜也〜」。',
            comparisons: ['までもない：沒必要〜（書面語）', 'ことはない：不用〜（一般）', 'に及ばない：不需要〜（正式）'],
            commonMistakes: ['○ 言うまでもない / × 言わないまでもない → 用辭書形接「までもない」'],
        },
    },
    // ━━━ に足る (worth) ━━━
    {
        id: 'g_n1_170', category: 'grammar', level: 'N1', tags: ['literary', 'evaluation'],
        stem: '彼{かれ}は信頼{しんらい}する___人物{じんぶつ}だ。',
        stemZh: '他是值得信賴的人物。',
        options: [
            { text: 'に足る', reason: '正確！「に足る」表示「值得〜」「足以〜」。' },
            { text: 'にたえる', reason: '「にたえる」表「值得」或「經得起」，接法不同。' },
            { text: 'に値する', reason: '「に値する」表「值得」，但接法不同。' },
            { text: 'にふさわしい', reason: '「にふさわしい」表「適合」，語義稍不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に足る」表值得、足以',
            analysis: '「V辭書形＋に足る」表示「值得〜」「足以〜」，是正式的書面表現。',
            comparisons: ['に足る：值得（書面語）', 'に値する：值得（書面語）', 'にたえる：經得起/值得'],
            commonMistakes: ['○ 信頼するに足る / × 信頼に足る → 動詞辭書形接「に足る」'],
        },
    },
    // ━━━ かたわら (while also) ━━━
    {
        id: 'g_n1_171', category: 'grammar', level: 'N1', tags: ['formal', 'parallel'],
        stem: '教授{きょうじゅ}は大学{だいがく}で教{おし}える___、研究{けんきゅう}も続{つづ}けている。',
        stemZh: '教授一邊在大學教書，一邊也持續做研究。',
        options: [
            { text: 'ながら', reason: '「ながら」表同時進行，但不如「かたわら」正式。' },
            { text: 'かたわら', reason: '正確！「かたわら」表示「在做〜的同時還做」。' },
            { text: 'ついでに', reason: '「ついでに」表順便，語義不同。' },
            { text: 'がてら', reason: '「がてら」表順便，但接法不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「かたわら」表兼做兩件事',
            analysis: '「V辭書形/N＋の＋かたわら」表示「在做主業的同時還做副業」，多用於長期持續的行為。',
            comparisons: ['かたわら：一邊〜一邊（長期、正式）', 'ながら：一邊〜一邊（一般）', 'がてら：順便（短期）'],
            commonMistakes: ['○ 教えるかたわら / × 教えながらかたわら → 不與「ながら」併用'],
        },
    },
    // ━━━ そばから (as soon as) ━━━
    {
        id: 'g_n1_172', category: 'grammar', level: 'N1', tags: ['expression', 'repetition'],
        stem: '片付{かたづ}ける___、子{こ}どもが散{ち}らかす。',
        stemZh: '才剛收拾好，孩子又弄亂了。',
        options: [
            { text: 'そばから', reason: '正確！「そばから」表示「剛〜就（反復發生令人困擾的事）」。' },
            { text: 'や否や', reason: '「や否や」表「一〜就」但不強調反復。' },
            { text: 'が早いか', reason: '「が早いか」表「一〜就」但不強調反復。' },
            { text: 'なり', reason: '「なり」表「一〜就」但只用於一次性動作。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「そばから」表反復發生令人困擾之事',
            analysis: '「V辭書形/た形＋そばから」表示「剛一〜就又〜」，強調某事反復發生令人感到困擾或無奈。',
            comparisons: ['そばから：剛〜就又〜（反復、困擾）', 'や否や：剛〜就（一次性）', 'が早いか：一〜就（迅速）'],
            commonMistakes: ['○ 片付けるそばから / × 片付けたそばから → 辭書形和た形都可接'],
        },
    },
    // ━━━ ずにはすまない (cannot help but) ━━━
    {
        id: 'g_n1_173', category: 'grammar', level: 'N1', tags: ['expression', 'obligation'],
        stem: '相手{あいて}に迷惑{めいわく}をかけた以上{いじょう}、謝{あやま}ら___。',
        stemZh: '既然給對方添了麻煩，就不能不道歉。',
        options: [
            { text: 'ないわけにはいかない', reason: '「ないわけにはいかない」語義相近但冗長。' },
            { text: 'なければならない', reason: '「なければならない」表義務但語感不同。' },
            { text: 'ずにはすまない', reason: '正確！「ずにはすまない」表示「不〜的話過意不去」。' },
            { text: 'ないではおかない', reason: '「ないではおかない」表「必然會」，語義不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ずにはすまない」表道義上的必須',
            analysis: '「V ない形（去い）＋ずにはすまない」表示「不做〜的話在道義上說不過去」「不得不〜」。',
            comparisons: ['ずにはすまない：不做不行（道義上）', 'ないわけにはいかない：不得不（社會壓力）', 'なければならない：必須（規則義務）'],
            commonMistakes: ['○ 謝らずにはすまない / × 謝らないにはすまない → 用「ず」不用「ない」'],
        },
    },
    // ━━━ てやまない (ceaselessly) ━━━
    {
        id: 'g_n1_174', category: 'grammar', level: 'N1', tags: ['literary', 'emotion'],
        stem: '皆様{みなさま}のご健康{けんこう}をお祈{いの}り___。',
        stemZh: '衷心祈禱各位健康平安。',
        options: [
            { text: 'してやまない', reason: '語法不自然，此處已有「お祈り」。' },
            { text: 'しております', reason: '「しております」表謙讓但不如「てやまない」強烈。' },
            { text: 'してやまない', reason: '正確！「てやまない」表示「衷心地〜不已」。' },
            { text: 'しています', reason: '「しています」過於平淡。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「てやまない」表衷心不已',
            analysis: '「Vて形＋やまない」表示「始終〜不已」「衷心〜」，用於願望、祈禱等場合，是正式的書面表現。',
            comparisons: ['てやまない：衷心〜不已（文語）', 'てならない：很〜（自然產生的感情）', 'てたまらない：〜得受不了'],
            commonMistakes: ['○ 祈ってやまない / × 祈りやまない → 用て形接「やまない」'],
        },
    },
    // ━━━ まみれ (covered in) ━━━
    {
        id: 'g_n1_175', category: 'grammar', level: 'N1', tags: ['expression', 'state'],
        stem: '工事{こうじ}現場{げんば}から泥{どろ}___の作業員{さぎょういん}が出{で}てきた。',
        stemZh: '滿身泥巴的工人從工地走了出來。',
        options: [
            { text: 'だらけ', reason: '「だらけ」表「到處都是」，用法類似但不完全相同。' },
            { text: 'まみれ', reason: '正確！「まみれ」表示「（表面）沾滿〜」。' },
            { text: 'ずくめ', reason: '「ずくめ」表全部是，但用於不同語境。' },
            { text: 'がち', reason: '「がち」表容易〜，語義不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「まみれ」表沾滿（黏在表面）',
            analysis: '「N＋まみれ」表示「沾滿〜」「滿是〜」，用於黏附在表面的髒物（泥、血、汗等）。',
            comparisons: ['まみれ：沾滿（黏附表面的穢物）', 'だらけ：到處都是（髒物/錯誤）', 'ずくめ：全部是（抽象或衣物顏色）'],
            commonMistakes: ['○ 泥まみれ / × 泥のまみれ → 名詞直接接「まみれ」'],
        },
    },
    // ━━━ ずくめ (entirely) ━━━
    {
        id: 'g_n1_176', category: 'grammar', level: 'N1', tags: ['expression', 'totality'],
        stem: '今日{きょう}はいいこと___の一日{いちにち}だった。',
        stemZh: '今天是盡是好事的一天。',
        options: [
            { text: 'ばかり', reason: '「ばかり」表「盡是」但不如「ずくめ」書面化。' },
            { text: 'だらけ', reason: '「だらけ」多用於負面事物。' },
            { text: 'まみれ', reason: '「まみれ」用於黏附物，語義不同。' },
            { text: 'ずくめ', reason: '正確！「ずくめ」表示「全部都是〜」「淨是〜」。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「ずくめ」表全部都是',
            analysis: '「N＋ずくめ」表示「全部都是〜」「淨是〜」，可用於正面或負面。常見搭配：「黒ずくめ」「いいことずくめ」。',
            comparisons: ['ずくめ：全部都是（抽象/顏色）', 'だらけ：到處都是（多負面）', 'まみれ：沾滿（黏附物）'],
            commonMistakes: ['○ いいことずくめ / × いいことのずくめ → 名詞直接接「ずくめ」'],
        },
    },
    // ━━━ めく (to seem) ━━━
    {
        id: 'g_n1_177', category: 'grammar', level: 'N1', tags: ['expression', 'appearance'],
        stem: '彼女{かのじょ}の謎{なぞ}___言動{げんどう}が気{き}になる。',
        stemZh: '她那謎一般的言行令人在意。',
        options: [
            { text: 'めいた', reason: '正確！「めく→めいた」表示「帶有〜氣息的」。' },
            { text: 'らしい', reason: '「らしい」表推測或典型，語義不同。' },
            { text: 'っぽい', reason: '「っぽい」表傾向，口語化。' },
            { text: 'がかった', reason: '「がかった」表帶有〜色彩，接法有限。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「めく」表帶有某種氣息',
            analysis: '「N＋めく」表示「帶有〜的氣息」「像〜似的」，活用為五段動詞。修飾名詞時用「めいた」。',
            comparisons: ['めく/めいた：帶有〜氣息（書面語）', 'らしい：像〜的（典型）', 'っぽい：有〜傾向的（口語）'],
            commonMistakes: ['○ 謎めいた / × 謎がめいた → 名詞直接接「めく」'],
        },
    },
    // ━━━ がてら (on the occasion of) ━━━
    {
        id: 'g_n1_178', category: 'grammar', level: 'N1', tags: ['expression', 'parallel'],
        stem: '散歩{さんぽ}___、コンビニに寄{よ}ってきた。',
        stemZh: '順便散步時去了趟便利商店。',
        options: [
            { text: 'ついでに', reason: '「ついでに」表順便但語感不同。' },
            { text: 'がてら', reason: '正確！「がてら」表示「順便做〜」「趁著做〜」。' },
            { text: 'かたわら', reason: '「かたわら」表長期兼做，語義不同。' },
            { text: 'かたがた', reason: '「かたがた」語義相近但更正式。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「がてら」表順便、趁著',
            analysis: '「Vます形/N＋がてら」表示「趁著做〜的機會順便做別的事」。',
            comparisons: ['がてら：趁著〜順便（書面語）', 'ついでに：順便（一般）', 'かたがた：兼帶（正式）'],
            commonMistakes: ['○ 散歩がてら / × 散歩のがてら → 名詞直接接「がてら」'],
        },
    },
    // ━━━ ものを (if only) ━━━
    {
        id: 'g_n1_179', category: 'grammar', level: 'N1', tags: ['expression', 'regret'],
        stem: 'もう少{すこ}し早{はや}く来{き}ていれば間{ま}に合{あ}った___。',
        stemZh: '如果再早一點來就趕上了，真是的。',
        options: [
            { text: 'のに', reason: '「のに」表遺憾但不如「ものを」強調不滿。' },
            { text: 'けど', reason: '「けど」表轉折但語氣太弱。' },
            { text: 'ものを', reason: '正確！「ものを」表示「明明〜卻〜」的遺憾和不滿。' },
            { text: 'くせに', reason: '「くせに」表責備但接法不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ものを」表遺憾不滿',
            analysis: '「V/Adj＋ものを」表示「明明〜就好了，卻偏偏不這樣」，帶有遺憾、惋惜或不滿的語氣。',
            comparisons: ['ものを：明明〜卻（遺憾/不滿）', 'のに：卻（遺憾）', 'くせに：明明〜卻（責備）'],
            commonMistakes: ['○ 間に合ったものを / × 間に合ったのものを → 直接接「ものを」'],
        },
    },
    // ━━━ ことなしに (without) ━━━
    {
        id: 'g_n1_180', category: 'grammar', level: 'N1', tags: ['formal', 'negation'],
        stem: '許可{きょか}を得{え}る___、勝手{かって}に使{つか}ってはならない。',
        stemZh: '不經過許可，不得擅自使用。',
        options: [
            { text: 'ことなく', reason: '「ことなく」也可以但語感略有不同。' },
            { text: 'ことなしに', reason: '正確！「ことなしに」表示「不做〜地」「不經過〜」。' },
            { text: 'ないで', reason: '「ないで」表不做但過於口語。' },
            { text: 'ずして', reason: '「ずして」表不做但接法不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ことなしに」表未做某事',
            analysis: '「V辭書形＋ことなしに」表示「不經過〜」「在不做〜的情況下」，是正式的書面表現。',
            comparisons: ['ことなしに：不經過〜地（正式書面語）', 'ことなく：不〜地（書面語）', 'ないで：不〜地（口語）'],
            commonMistakes: ['○ 得ることなしに / × 得ないことなしに → 用辭書形接「ことなしに」'],
        },
    },
    // ━━━ をおいて (besides) ━━━
    {
        id: 'g_n1_181', category: 'grammar', level: 'N1', tags: ['expression', 'exclusivity'],
        stem: 'この仕事{しごと}を任{まか}せられるのは、彼{かれ}___ほかにいない。',
        stemZh: '能託付這份工作的人，除了他之外別無他人。',
        options: [
            { text: 'をおいて', reason: '正確！「をおいて〜ない」表示「除了〜之外沒有」。' },
            { text: 'をはじめ', reason: '「をはじめ」表「以〜為首」，語義不同。' },
            { text: 'はともかく', reason: '「はともかく」表暫且不論，語義不同。' },
            { text: 'はさておき', reason: '「はさておき」表暫時不談，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「をおいて〜ない」表唯一',
            analysis: '「N＋をおいて＋ほかにない」表示「除了〜之外沒有別的」「唯有〜」，用於強調唯一性。',
            comparisons: ['をおいてない：除〜之外別無（強調唯一）', 'しか〜ない：只有', 'こそ：正是（強調）'],
            commonMistakes: ['○ 彼をおいてほかにいない / × 彼をおいてほかにある → 後面必須接否定'],
        },
    },
    // ━━━ を皮切りに (starting with) ━━━
    {
        id: 'g_n1_182', category: 'grammar', level: 'N1', tags: ['expression', 'starting_point'],
        stem: '東京{とうきょう}公演{こうえん}___、全国{ぜんこく}ツアーが始{はじ}まった。',
        stemZh: '以東京公演為起點，全國巡演開始了。',
        options: [
            { text: 'をきっかけに', reason: '「をきっかけに」表契機但不強調系列展開。' },
            { text: 'を始めに', reason: '「を始めに」語法不自然。' },
            { text: 'を皮切りに', reason: '正確！「を皮切りに」表示「以〜為開端」展開一系列活動。' },
            { text: 'を機に', reason: '「を機に」表藉機但不強調系列展開。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「を皮切りに」表以某事為開端',
            analysis: '「N＋を皮切りに」表示「以〜為開端，之後接連展開一系列活動」。',
            comparisons: ['を皮切りに：以〜為開端（連續展開）', 'をきっかけに：以〜為契機（單一變化）', 'を機に：藉〜之機'],
            commonMistakes: ['○ 東京公演を皮切りに / × 東京公演が皮切りに → 助詞用「を」'],
        },
    },
    // ━━━ を余儀なくされる (forced to) ━━━
    {
        id: 'g_n1_183', category: 'grammar', level: 'N1', tags: ['formal', 'compulsion'],
        stem: '台風{たいふう}の影響{えいきょう}で、計画{けいかく}の変更{へんこう}を___。',
        stemZh: '受颱風影響，被迫變更計劃。',
        options: [
            { text: 'させられた', reason: '「させられた」表被迫但不夠正式。' },
            { text: '余儀なくされた', reason: '正確！「を余儀なくされる」表示「被迫〜」。' },
            { text: 'しなければならなかった', reason: '「しなければならなかった」表必須，不強調被迫。' },
            { text: '強いられた', reason: '「強いられた」意思相近但接法不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「を余儀なくされる」表被迫',
            analysis: '「N＋を余儀なくされる」表示「不得已被迫做〜」，是非常正式的書面表現。',
            comparisons: ['を余儀なくされる：被迫〜（正式）', 'を強いられる：被強制〜', 'させられる：被迫做〜（一般使役被動）'],
            commonMistakes: ['○ 変更を余儀なくされた / × 変更が余儀なくされた → 助詞用「を」'],
        },
    },
    // ━━━ にたえない (unbearable / worthy of) ━━━
    {
        id: 'g_n1_184', category: 'grammar', level: 'N1', tags: ['literary', 'emotion'],
        stem: '被災者{ひさいしゃ}の苦{くる}しみを思{おも}うと、同情{どうじょう}___。',
        stemZh: '想到災民的痛苦，不禁深表同情。',
        options: [
            { text: 'に堪えない', reason: '正確！「に堪えない」表示「禁不住〜」「不勝〜」。' },
            { text: 'してやまない', reason: '「てやまない」表衷心但語義稍不同。' },
            { text: 'を禁じ得ない', reason: '「を禁じ得ない」也可以但接法不同。' },
            { text: 'でたまらない', reason: '「でたまらない」表受不了但過於口語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に堪えない」表忍不住（感情）',
            analysis: '「N＋に堪えない」有兩個意思：①表示「忍不住〜」（感情自然流露）②表示「不值得〜」（否定評價）。此處為感情用法。',
            comparisons: ['に堪えない：禁不住（感情/否定評價）', 'を禁じ得ない：禁不住（感情）', 'てやまない：衷心〜不已'],
            commonMistakes: ['○ 同情に堪えない / × 同情が堪えない → 助詞用「に」'],
        },
    },
    // ━━━ ともあろうものが (of all people) ━━━
    {
        id: 'g_n1_185', category: 'grammar', level: 'N1', tags: ['expression', 'surprise'],
        stem: '医者{いしゃ}___、タバコを吸{す}うとは信{しん}じられない。',
        stemZh: '堂堂一個醫生竟然抽煙，真令人難以置信。',
        options: [
            { text: 'としたことが', reason: '「としたことが」也表驚訝但語氣不同。' },
            { text: 'ともあろうものが', reason: '正確！「ともあろうものが」表示「身為〜竟然」的驚訝和批判。' },
            { text: 'ほどのものが', reason: '語法不自然。' },
            { text: 'たるものが', reason: '「たるものが」也可以但不如前者強調意外。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ともあろうものが」表對身分不符行為的批判',
            analysis: '「N＋ともあろうものが」表示「身為〜地位的人竟然做出〜的事」，帶有驚訝和批判語氣。',
            comparisons: ['ともあろうものが：堂堂〜竟然（批判/驚訝）', 'としたことが：〜居然（自我反省/驚訝）', 'たるもの：身為〜（訓誡）'],
            commonMistakes: ['○ 医者ともあろうものが / × 医者がともあろうものが → 名詞直接接'],
        },
    },
    // ━━━ ないまでも (even if not) ━━━
    {
        id: 'g_n1_186', category: 'grammar', level: 'N1', tags: ['expression', 'concession'],
        stem: '全額{ぜんがく}返金{へんきん}し___、せめて半分{はんぶん}は返{かえ}してほしい。',
        stemZh: '即使不能全額退款，至少也希望退一半。',
        options: [
            { text: 'ないとしても', reason: '「ないとしても」表假設讓步但不如「ないまでも」簡潔。' },
            { text: 'なくても', reason: '「なくても」表讓步但語體不夠正式。' },
            { text: 'ないまでも', reason: '正確！「ないまでも」表示「即使不到〜的程度，至少也〜」。' },
            { text: 'ないにしろ', reason: '「ないにしろ」表不管是否但語義稍不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ないまでも」表退而求其次',
            analysis: '「V ない形＋までも」表示「即便達不到〜的程度，至少也要〜」，後面常接退一步的要求或期望。',
            comparisons: ['ないまでも：即使不〜至少也（退而求其次）', 'ないとしても：假設不〜也', 'なくても：即使不〜也'],
            commonMistakes: ['○ 返金しないまでも / × 返金しなくまでも → 用「ない」形不用「なく」形'],
        },
    },
    // ━━━ とあって (because of) ━━━
    {
        id: 'g_n1_187', category: 'grammar', level: 'N1', tags: ['expression', 'reason'],
        stem: '連休{れんきゅう}___、どこの観光地{かんこうち}も混{こ}んでいた。',
        stemZh: '因為是連假，哪個觀光景點都很擠。',
        options: [
            { text: 'なので', reason: '「なので」表原因但過於口語。' },
            { text: 'とあって', reason: '正確！「とあって」表示「因為是〜的情況所以」。' },
            { text: 'ともなると', reason: '「ともなると」表到達某程度，語義不同。' },
            { text: 'だけあって', reason: '「だけあって」表不愧是，語義不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「とあって」表特殊原因',
            analysis: '「N/文＋とあって」表示「因為是〜的特殊情況，所以（自然地）」，多用於新聞報導或書面語。',
            comparisons: ['とあって：因為是〜情況所以（書面語）', 'だけあって：不愧是（讚美）', 'こともあって：也因為〜'],
            commonMistakes: ['○ 連休とあって / × 連休だとあって → 名詞直接接「とあって」'],
        },
    },
    // ━━━ だに (even) ━━━
    {
        id: 'g_n1_188', category: 'grammar', level: 'N1', tags: ['literary', 'emphasis'],
        stem: 'あの恐{おそ}ろしい事故{じこ}は、思{おも}い出{だ}す___身震{みぶる}いがする。',
        stemZh: '那場可怕的事故，光是想起來就令人發抖。',
        options: [
            { text: 'だけで', reason: '「だけで」表「只要」但不如「だに」文語。' },
            { text: 'だに', reason: '正確！「だに」表示「連〜都」「光是〜就」。' },
            { text: 'さえ', reason: '「さえ」表「甚至」但語感不同。' },
            { text: 'すら', reason: '「すら」表「連〜都」但接法不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「だに」表連〜都（文語）',
            analysis: '「V辭書形＋だに」表示「光是〜就〜」「連〜都〜」，是古風的文語表現。常見搭配：「想像するだに」「思い出すだに」。',
            comparisons: ['だに：光是〜就（文語）', 'さえ：甚至〜都（一般書面語）', 'すら：連〜也（文語）'],
            commonMistakes: ['○ 思い出すだに / × 思い出してだに → 用辭書形接「だに」'],
        },
    },
    // ━━━ すら (even - literary) ━━━
    {
        id: 'g_n1_189', category: 'grammar', level: 'N1', tags: ['literary', 'emphasis'],
        stem: '彼{かれ}は自分{じぶん}の名前{なまえ}___書{か}けなかった。',
        stemZh: '他連自己的名字都寫不出來。',
        options: [
            { text: 'も', reason: '「も」表「也」但強調不足。' },
            { text: 'さえ', reason: '「さえ」表「連〜都」但不如「すら」文語。' },
            { text: 'すら', reason: '正確！「すら」表示「連〜都（不）」（文語）。' },
            { text: 'だに', reason: '「だに」接法不同，多接動詞辭書形。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「すら」表連〜都（文語強調）',
            analysis: '「N＋すら」表示「連〜都〜」，是「さえ」的文語表現，語氣更為強烈。',
            comparisons: ['すら：連〜都（文語）', 'さえ：連〜都（一般）', 'だに：光是〜就（文語、接動詞）'],
            commonMistakes: ['○ 名前すら / × 名前がすら → 直接接「すら」，不加「が」'],
        },
    },
    // ━━━ べくもない (impossible) ━━━
    {
        id: 'g_n1_190', category: 'grammar', level: 'N1', tags: ['literary', 'negation'],
        stem: '彼{かれ}の才能{さいのう}は凡人{ぼんじん}には想像{そうぞう}す___。',
        stemZh: '他的才能是凡人無法想像的。',
        options: [
            { text: 'べくもない', reason: '正確！「べくもない」表示「不可能〜」「沒法〜」。' },
            { text: 'べきではない', reason: '「べきではない」表不應該，語義不同。' },
            { text: 'るはずがない', reason: '「はずがない」表不可能但語體不同。' },
            { text: 'ようがない', reason: '「ようがない」表沒辦法但接法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「べくもない」表不可能（文語）',
            analysis: '「Vる＋べくもない」是文語表現，表示「根本不可能〜」「沒法〜」。常見搭配：「比べるべくもない」「想像すべくもない」。',
            comparisons: ['べくもない：根本不可能（文語）', 'ようがない：沒辦法〜', 'はずがない：不可能〜（推測）'],
            commonMistakes: ['○ 想像すべくもない / × 想像するべくもない → 「する」變為「す」'],
        },
    },
    // ━━━ べくして (inevitably) ━━━
    {
        id: 'g_n1_191', category: 'grammar', level: 'N1', tags: ['literary', 'inevitability'],
        stem: 'あれだけ練習{れんしゅう}したのだから、勝{か}つ___勝{か}った試合{しあい}だ。',
        stemZh: '練習了那麼多，是一場注定要贏的比賽。',
        options: [
            { text: 'から', reason: '「から」表原因但不表必然。' },
            { text: 'ために', reason: '「ために」表目的或原因，語義不同。' },
            { text: 'べくして', reason: '正確！「べくして」表示「理所當然地〜」「注定〜」。' },
            { text: 'として', reason: '「として」表身分或角度，語義不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「べくして」表必然、注定',
            analysis: '「V＋べくして＋同一V」表示「理所當然地〜」「注定會〜」。常見用法：「起こるべくして起こった」「勝つべくして勝った」。',
            comparisons: ['べくして：注定〜（必然）', 'からこそ：正因為所以', 'にきまっている：肯定（口語斷定）'],
            commonMistakes: ['○ 勝つべくして勝った / × 勝ったべくして → 前後用同一動詞'],
        },
    },
    // ━━━ ばこそ (precisely because) ━━━
    {
        id: 'g_n1_192', category: 'grammar', level: 'N1', tags: ['literary', 'reason'],
        stem: '君{きみ}のことを思{おも}え___、厳{きび}しいことを言{い}うのだ。',
        stemZh: '正是因為為你著想，才說嚴厲的話。',
        options: [
            { text: 'ばこそ', reason: '正確！「ばこそ」表示「正因為〜才〜」。' },
            { text: 'ばいい', reason: '「ばいい」表做了〜就好，語義不同。' },
            { text: 'ば', reason: '「ば」表條件但不強調原因。' },
            { text: 'からこそ', reason: '「からこそ」也表正因為但接法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ばこそ」表正因為如此才',
            analysis: '「Vば形＋こそ」表示「正是因為〜才〜」，強調真正的原因，常用於辯解或說服。',
            comparisons: ['ばこそ：正因為〜才（文語/強調）', 'からこそ：正因為〜才（一般強調）', 'ば：如果（條件）'],
            commonMistakes: ['○ 思えばこそ / × 思うばこそ → 用ば形'],
        },
    },
    // ━━━ ばそれまでだ (if... then that's it) ━━━
    {
        id: 'g_n1_193', category: 'grammar', level: 'N1', tags: ['expression', 'resignation'],
        stem: 'どんなに努力{どりょく}しても、運{うん}がなけれ___。',
        stemZh: '無論多努力，如果沒有運氣就沒辦法了。',
        options: [
            { text: 'ば仕方がない', reason: '「ば仕方がない」也可以但不如「ばそれまでだ」簡潔。' },
            { text: 'ばどうしようもない', reason: '「ばどうしようもない」語義相近但冗長。' },
            { text: 'ばそれまでだ', reason: '正確！「ばそれまでだ」表示「如果〜的話那就完了」。' },
            { text: 'ば終わりだ', reason: '「ば終わりだ」表結束但不是固定用法。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ばそれまでだ」表就此結束',
            analysis: '「V ば形＋それまでだ」表示「如果〜的話那就沒辦法了」「那就到此為止了」，帶有放棄或無奈感。',
            comparisons: ['ばそれまでだ：那就完了（放棄/無奈）', 'たらそれまでだ：同上（用たら形）', 'までだ：只是〜而已'],
            commonMistakes: ['○ なければそれまでだ / × なかったらそれまでだ → 「ば」「たら」都可接'],
        },
    },
    // ━━━ であれ (even if) ━━━
    {
        id: 'g_n1_194', category: 'grammar', level: 'N1', tags: ['literary', 'concession'],
        stem: 'どんな理由{りゆう}___、暴力{ぼうりょく}は許{ゆる}されない。',
        stemZh: '無論什麼理由，暴力都不被允許。',
        options: [
            { text: 'でも', reason: '「でも」表讓步但過於口語。' },
            { text: 'であろうと', reason: '「であろうと」也表讓步但接法不同。' },
            { text: 'であっても', reason: '「であっても」也表讓步但不如「であれ」正式。' },
            { text: 'であれ', reason: '正確！「であれ」表示「不管是〜都」。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「であれ」表無論是何（讓步）',
            analysis: '「N＋であれ」表示「不管是〜」「即便是〜」，是正式的文語讓步表現。',
            comparisons: ['であれ：不管是〜（文語讓步）', 'であっても：即使是（一般讓步）', 'でも：即使（口語讓步）'],
            commonMistakes: ['○ どんな理由であれ / × どんな理由がであれ → 名詞直接接「であれ」'],
        },
    },
    // ━━━ かと思いきや (contrary to expectation) ━━━
    {
        id: 'g_n1_195', category: 'grammar', level: 'N1', tags: ['expression', 'surprise'],
        stem: '合格{ごうかく}した___、実{じつ}は不合格{ふごうかく}だった。',
        stemZh: '本以為合格了，結果竟然不合格。',
        options: [
            { text: 'と思ったら', reason: '「と思ったら」表意外但不如「かと思いきや」書面化。' },
            { text: 'かと思いきや', reason: '正確！「かと思いきや」表示「原以為〜結果卻」。' },
            { text: 'のに', reason: '「のに」表遺憾但不表意外發現。' },
            { text: 'かと思えば', reason: '「かと思えば」表「剛〜就〜」，語義不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「かと思いきや」表出乎意料',
            analysis: '「V/文＋かと思いきや」表示「本以為〜，結果卻完全相反」，帶有驚訝的語氣。',
            comparisons: ['かと思いきや：原以為〜結果（驚訝/書面語）', 'と思ったら：以為〜結果（口語）', 'かと思えば：剛〜就〜（變化快）'],
            commonMistakes: ['○ 合格したかと思いきや / × 合格するかと思いきや → 用た形'],
        },
    },
    // ━━━ 限りだ (extremely) ━━━
    {
        id: 'g_n1_196', category: 'grammar', level: 'N1', tags: ['expression', 'emotion'],
        stem: '久{ひさ}しぶりに故郷{こきょう}に帰{かえ}れて、嬉{うれ}しい___。',
        stemZh: '好久沒回故鄉了，高興極了。',
        options: [
            { text: '限りだ', reason: '正確！「限りだ」表示「〜極了」「無比〜」。' },
            { text: 'に違いない', reason: '「に違いない」表推測確信，語義不同。' },
            { text: 'ばかりだ', reason: '「ばかりだ」表一直〜，語義不同。' },
            { text: 'ことだ', reason: '「ことだ」表建議或感嘆，此處不太合適。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「限りだ」表感情至極',
            analysis: '「Adj/Na＋限りだ」表示「〜極了」「無比〜」，用於表達強烈的感情，多為書面語。',
            comparisons: ['限りだ：〜極了（書面語感情表達）', '極まりない：〜到極點（書面語）', 'てたまらない：〜得受不了（口語）'],
            commonMistakes: ['○ 嬉しい限りだ / × 嬉しく限りだ → い形容詞直接接「限りだ」'],
        },
    },
    // ━━━ 甲斐もなく (in vain) ━━━
    {
        id: 'g_n1_197', category: 'grammar', level: 'N1', tags: ['expression', 'result'],
        stem: '必死{ひっし}に看病{かんびょう}した___、祖父{そふ}は亡{な}くなった。',
        stemZh: '儘管拼命照顧，祖父還是去世了。',
        options: [
            { text: 'にもかかわらず', reason: '「にもかかわらず」表逆接但不強調徒勞。' },
            { text: 'のに', reason: '「のに」表遺憾但不如「甲斐もなく」書面化。' },
            { text: '甲斐もなく', reason: '正確！「甲斐もなく」表示「白費了〜」「枉費了〜」。' },
            { text: 'けれども', reason: '「けれども」表轉折但語氣太弱。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「甲斐もなく」表徒勞無功',
            analysis: '「Vた形＋甲斐もなく」表示「做了〜也白費」「枉費了〜」，結果令人遺憾。',
            comparisons: ['甲斐もなく：白費了〜（徒勞）', '甲斐あって：多虧了〜（有成效）', 'にもかかわらず：儘管〜卻'],
            commonMistakes: ['○ 看病した甲斐もなく / × 看病する甲斐もなく → 用た形接「甲斐もなく」'],
        },
    },
    // ━━━ からある (as much as) ━━━
    {
        id: 'g_n1_198', category: 'grammar', level: 'N1', tags: ['expression', 'quantity'],
        stem: '100キロ___荷物{にもつ}を一人{ひとり}で運{はこ}んだ。',
        stemZh: '一個人搬了足足有一百公斤的行李。',
        options: [
            { text: 'もの', reason: '「もの」表驚訝但接法不同。' },
            { text: 'もある', reason: '「もある」也表「多達」但不如「からある」書面化。' },
            { text: 'ほどの', reason: '「ほどの」表「〜左右的」，語義略弱。' },
            { text: 'からある', reason: '正確！「からある」表示「多達〜」「足有〜」。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「からある」表數量之多',
            analysis: '「數量詞＋からある」表示「多達〜」「足足有〜」，強調數量之大令人驚訝。',
            comparisons: ['からある：多達〜（數量大、驚訝）', 'もある：也有〜（一般強調）', 'ほど：〜左右（概數）'],
            commonMistakes: ['○ 100キロからある / × 100キロがからある → 直接接「からある」'],
        },
    },
    // ━━━ きっての (the best of) ━━━
    {
        id: 'g_n1_199', category: 'grammar', level: 'N1', tags: ['expression', 'evaluation'],
        stem: '彼女{かのじょ}は社内{しゃない}___秀才{しゅうさい}だ。',
        stemZh: '她是公司裡數一數二的人才。',
        options: [
            { text: 'での', reason: '「での」表範圍內但不強調頂尖。' },
            { text: 'の中で一番の', reason: '「の中で一番の」表最〜但冗長。' },
            { text: 'きっての', reason: '正確！「きっての」表示「〜當中最出色的」。' },
            { text: 'における', reason: '「における」表範圍但不強調最高評價。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「きっての」表首屈一指',
            analysis: '「N（場所/集團）＋きっての＋N」表示「在〜當中最出色的」「首屈一指的」。',
            comparisons: ['きっての：〜當中最出色的（限定評價）', '一番の：最〜的（一般最高級）', 'ならではの：只有〜才有的'],
            commonMistakes: ['○ 社内きっての / × 社内のきっての → 名詞直接接「きっての」'],
        },
    },
    // ━━━ こそすれ (only... never) ━━━
    {
        id: 'g_n1_200', category: 'grammar', level: 'N1', tags: ['literary', 'contrast'],
        stem: '彼{かれ}の行動{こうどう}は称賛{しょうさん}___、非難{ひなん}されるべきではない。',
        stemZh: '他的行為只值得稱讚，不應該被批評。',
        options: [
            { text: 'されこそすれ', reason: '語法不自然。' },
            { text: 'こそあれ', reason: '「こそあれ」表「雖然有」，語義不同。' },
            { text: 'こそすれ', reason: '正確！「こそすれ」表示「只會〜絕不會〜」。' },
            { text: 'こそだが', reason: '語法不自然。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「こそすれ」表只會〜絕不〜',
            analysis: '「N/V＋こそすれ」表示「只會〜，絕不會做相反的事」，強調某事只有正面意義，不會有負面。',
            comparisons: ['こそすれ：只會〜絕不（對比強調）', 'こそあれ：雖然有〜但（讓步）', 'ばこそ：正因為〜才'],
            commonMistakes: ['○ 称賛こそすれ / × 称賛がこそすれ → 名詞直接接「こそすれ」'],
        },
    },
    // ━━━ こそあれ (although there is) ━━━
    {
        id: 'g_n1_201', category: 'grammar', level: 'N1', tags: ['literary', 'concession'],
        stem: '多少{たしょう}の不満{ふまん}___、全体的{ぜんたいてき}には満足{まんぞく}している。',
        stemZh: '雖然有些不滿，但整體上很滿意。',
        options: [
            { text: 'はあるが', reason: '「はあるが」語義相近但不如「こそあれ」書面化。' },
            { text: 'こそあれ', reason: '正確！「こそあれ」表示「雖然有〜，但是」。' },
            { text: 'こそすれ', reason: '「こそすれ」表「只會〜絕不」，語義不同。' },
            { text: 'があっても', reason: '「があっても」表讓步但語體較口語。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「こそあれ」表讓步（雖然有〜但）',
            analysis: '「N＋こそあれ」表示「雖然確實有〜，但是（整體來說）」，是文語讓步表現。',
            comparisons: ['こそあれ：雖然有〜但（讓步/文語）', 'こそすれ：只會〜絕不（對比）', 'はあるものの：雖然有（書面語）'],
            commonMistakes: ['○ 不満こそあれ / × 不満がこそあれ → 名詞直接接「こそあれ」'],
        },
    },
    // ━━━ ことごとく (entirely) ━━━
    {
        id: 'g_n1_202', category: 'grammar', level: 'N1', tags: ['literary', 'totality'],
        stem: '提出{ていしゅつ}した企画{きかく}は___却下{きゃっか}された。',
        stemZh: '提出的企劃全部被駁回了。',
        options: [
            { text: '全部', reason: '「全部」表全部但不如「ことごとく」書面化。' },
            { text: 'ことごとく', reason: '正確！「ことごとく」表示「全部」「悉數」。' },
            { text: 'すっかり', reason: '「すっかり」表完全但用於狀態變化。' },
            { text: 'まるごと', reason: '「まるごと」表整個但語義不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ことごとく」表全部無一例外',
            analysis: '「ことごとく」是副詞，表示「全部」「悉數」「無一例外」，多用於書面語，強調毫無遺漏。',
            comparisons: ['ことごとく：全部（書面語/強調無遺漏）', '全部：全部（一般）', '残らず：一個不剩地'],
            commonMistakes: ['○ ことごとく却下された / × ことごとくに却下された → 作為副詞直接修飾動詞'],
        },
    },
    // ━━━ この上ない (incomparably) ━━━
    {
        id: 'g_n1_203', category: 'grammar', level: 'N1', tags: ['literary', 'degree'],
        stem: '彼女{かのじょ}との出会{であ}いは___幸{しあわ}せだった。',
        stemZh: '與她的相遇是無比的幸福。',
        options: [
            { text: 'この上なく', reason: '正確！「この上なく」表示「再也沒有比〜更〜」。' },
            { text: '極めて', reason: '「極めて」表極其但不如前者強調最高級。' },
            { text: '非常に', reason: '「非常に」表非常但語氣較弱。' },
            { text: 'とても', reason: '「とても」表非常但過於口語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「この上なく」表最高程度',
            analysis: '「この上なく」是副詞用法，表示「再也沒有比這更〜」「無以復加地〜」。形容詞用法為「この上ない」。',
            comparisons: ['この上なく：最〜不過了（副詞）', 'この上ない：最〜（形容詞）', '極まりない：〜到極點'],
            commonMistakes: ['○ この上なく幸せ / × この上ない幸せ → 修飾形容詞時用「この上なく」'],
        },
    },
    // ━━━ こともあって (also because) ━━━
    {
        id: 'g_n1_204', category: 'grammar', level: 'N1', tags: ['expression', 'reason'],
        stem: '天気{てんき}がよかった___、公園{こうえん}は大勢{おおぜい}の人{ひと}で賑{にぎ}わっていた。',
        stemZh: '也因為天氣好，公園裡擠滿了人。',
        options: [
            { text: 'こともあって', reason: '正確！「こともあって」表示「也有〜的原因」。' },
            { text: 'せいで', reason: '「せいで」表歸咎但此處無負面語感。' },
            { text: 'おかげで', reason: '「おかげで」表幸好但不暗示另有原因。' },
            { text: 'ために', reason: '「ために」表原因但不暗示另有原因。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「こともあって」表原因之一',
            analysis: '「文＋こともあって」表示「也有〜的因素」「加上〜的原因」，暗示原因不止一個。',
            comparisons: ['こともあって：也因為〜（原因之一）', 'おかげで：多虧了〜', 'ために：因為〜（主要原因）'],
            commonMistakes: ['○ よかったこともあって / × よいこともあって → 常用た形接續'],
        },
    },
    // ━━━ くらいなら (rather than) ━━━
    {
        id: 'g_n1_205', category: 'grammar', level: 'N1', tags: ['expression', 'comparison'],
        stem: 'あんな会社{かいしゃ}で働{はたら}く___、辞{や}めた方{ほう}がましだ。',
        stemZh: '與其在那種公司工作，不如辭職算了。',
        options: [
            { text: 'より', reason: '「より」表比較但不如「くらいなら」強調極端。' },
            { text: 'くらいなら', reason: '正確！「くらいなら」表示「與其〜不如〜」。' },
            { text: 'としたら', reason: '「としたら」表假設，語義不同。' },
            { text: 'ところで', reason: '「ところで」表轉折，語義不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「くらいなら」表極端的比較選擇',
            analysis: '「Vる＋くらいなら、〜方がましだ」表示「與其做〜這種令人不快的事，還不如做〜」，含有強烈嫌惡感。',
            comparisons: ['くらいなら：與其（極端比較/嫌惡）', 'より：比〜（一般比較）', 'かわりに：代替'],
            commonMistakes: ['○ 働くくらいなら / × 働いたくらいなら → 用辭書形接「くらいなら」'],
        },
    },
    // ━━━ くらいのものだ (only about) ━━━
    {
        id: 'g_n1_206', category: 'grammar', level: 'N1', tags: ['expression', 'limitation'],
        stem: 'こんな無茶{むちゃ}なことをするのは、彼{かれ}___。',
        stemZh: '會做這種瘋狂事的人，大概也就只有他了。',
        options: [
            { text: 'しかいない', reason: '「しかいない」表限定但不如「くらいのものだ」語氣委婉。' },
            { text: 'だけだ', reason: '「だけだ」表只有但語氣太直接。' },
            { text: 'ぐらいだ', reason: '「ぐらいだ」表程度但不如「くらいのものだ」自然。' },
            { text: 'くらいのものだ', reason: '正確！「くらいのものだ」表示「大概也就只有〜了」。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「くらいのものだ」表「也就只有〜了」',
            analysis: '「N/文＋くらいのものだ」表示「大概也就只有〜了」「頂多也就是〜」，帶有限定或輕視的語氣。',
            comparisons: ['くらいのものだ：也就只有〜了（委婉限定）', 'しかいない：只有（斷定限定）', 'だけだ：只是（單純限定）'],
            commonMistakes: ['○ 彼くらいのものだ / × 彼がくらいのものだ → 名詞直接接「くらいのものだ」'],
        },
    },
    // ━━━ までだ (just have to) ━━━
    {
        id: 'g_n1_207', category: 'grammar', level: 'N1', tags: ['expression', 'resignation'],
        stem: 'ダメだったら、もう一度{いちど}やり直{なお}す___。',
        stemZh: '如果不行的話，大不了再做一次。',
        options: [
            { text: 'しかない', reason: '「しかない」表只能但語感不同。' },
            { text: 'までだ', reason: '正確！「までだ」表示「大不了就〜」「只是〜而已」。' },
            { text: 'ばかりだ', reason: '「ばかりだ」表一直〜，語義不同。' },
            { text: 'ものだ', reason: '「ものだ」表感嘆或常理，語義不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「までだ」表覺悟或輕視',
            analysis: '「V辭書形＋までだ」有兩個意思：①「大不了就〜」（覺悟/決心）②「只是〜而已」（輕視程度）。',
            comparisons: ['までだ：大不了就〜/只是〜而已', 'までのことだ：同上（強調）', 'しかない：只能〜'],
            commonMistakes: ['○ やり直すまでだ / × やり直したまでだ → 表覺悟時用辭書形'],
        },
    },
    // ━━━ まじき (should not) ━━━
    {
        id: 'g_n1_208', category: 'grammar', level: 'N1', tags: ['literary', 'prohibition'],
        stem: 'それは教育者{きょういくしゃ}として許{ゆる}す___行為{こうい}だ。',
        stemZh: '那是作為教育者不可饒恕的行為。',
        options: [
            { text: 'べきではない', reason: '「べきではない」語義相近但語體不同。' },
            { text: 'まじき', reason: '正確！「まじき」表示「不該做的」「不可饒恕的」。' },
            { text: 'べからざる', reason: '「べからざる」也表禁止但接法不同。' },
            { text: 'ざる', reason: '「ざる」表否定但不表「不應該」。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「まじき」表不該有的',
            analysis: '「V辭書形＋まじき＋N」表示「不該做的〜」「作為某身分不應有的〜」，是文語表現。',
            comparisons: ['まじき：不該有的（文語/修飾名詞）', 'べからず：不准（文語/句末）', 'べきではない：不應該（一般）'],
            commonMistakes: ['○ 許すまじき / × 許さないまじき → 用辭書形接「まじき」'],
        },
    },
    // ━━━ まくる (do non-stop) ━━━
    {
        id: 'g_n1_209', category: 'grammar', level: 'N1', tags: ['expression', 'continuation'],
        stem: '試験{しけん}前{まえ}は毎日{まいにち}勉強{べんきょう}し___。',
        stemZh: '考試前每天拼命念書。',
        options: [
            { text: 'まくった', reason: '正確！「まくる」表示「不停地做〜」「一直做〜」。' },
            { text: '続けた', reason: '「続けた」表繼續但不如前者強調拼命。' },
            { text: 'っぱなしだった', reason: '「っぱなしだった」表放著不管，語義不同。' },
            { text: 'っきりだった', reason: '「っきりだった」表一直保持某狀態，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「まくる」表不停地做',
            analysis: '「Vます形＋まくる」表示「拼命地做〜」「不停地做〜」，帶有誇張語氣，口語中很常用。',
            comparisons: ['まくる：不停地〜（拼命/口語）', '続ける：持續做〜（一般）', 'っぱなし：〜著不管（放置）'],
            commonMistakes: ['○ 勉強しまくった / × 勉強するまくった → 接ます形去「ます」'],
        },
    },
    // ━━━ もはや (already / no longer) ━━━
    {
        id: 'g_n1_210', category: 'grammar', level: 'N1', tags: ['literary', 'time'],
        stem: '事態{じたい}は___取{と}り返{かえ}しがつかない。',
        stemZh: '事態已經無可挽回了。',
        options: [
            { text: 'もう', reason: '「もう」表「已經」但過於口語。' },
            { text: 'すでに', reason: '「すでに」表「已經」但不如「もはや」絕望感強。' },
            { text: 'もはや', reason: '正確！「もはや」表示「事到如今已經」「已然」。' },
            { text: 'とうに', reason: '「とうに」表「早就」，時間感不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「もはや」表事已至此',
            analysis: '「もはや」是副詞，表示「事到如今已經〜」「已然〜」，帶有無法改變的語氣，多與否定搭配。',
            comparisons: ['もはや：已然（帶無奈/絕望）', 'すでに：已經（客觀陳述）', 'もう：已經（口語）'],
            commonMistakes: ['○ もはや取り返しがつかない / × もはや取り返しがついた → 常接否定或不可逆的表現'],
        },
    },
    // ━━━ ものを (regret/reproach) - advanced ━━━
    {
        id: 'g_n1_211', category: 'grammar', level: 'N1', tags: ['expression', 'regret'],
        stem: '聞{き}けば教{おし}えてあげた___、なぜ黙{だま}っていたんだ。',
        stemZh: '問的話我就告訴你了，你幹嘛不說呢。',
        options: [
            { text: 'のに', reason: '「のに」表遺憾但不如「ものを」帶有責備語氣。' },
            { text: 'ものの', reason: '「ものの」表讓步，語義不同。' },
            { text: 'ものを', reason: '正確！「ものを」表示「明明〜卻沒有（責備/遺憾）」。' },
            { text: 'ものだから', reason: '「ものだから」表原因辯解，語義不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ものを」表責備和遺憾',
            analysis: '「V/Adj＋ものを」表示「明明〜就好了（卻沒有這樣做）」，帶有對對方的責備或自己的遺憾。',
            comparisons: ['ものを：明明〜卻（責備/遺憾）', 'のに：〜卻（一般遺憾）', 'ものの：雖然〜但是（讓步）'],
            commonMistakes: ['○ 教えてあげたものを / × 教えてあげるものを → 常用た形表反事實'],
        },
    },
    // ━━━ ものとする (shall / consider as) ━━━
    {
        id: 'g_n1_212', category: 'grammar', level: 'N1', tags: ['formal', 'regulation'],
        stem: '会員{かいいん}は年会費{ねんかいひ}を支払{しはら}う___。',
        stemZh: '會員應當繳納年費。',
        options: [
            { text: 'ことにする', reason: '「ことにする」表決定但不夠正式。' },
            { text: 'べきだ', reason: '「べきだ」表應該但不是法規用語。' },
            { text: 'ものとする', reason: '正確！「ものとする」表示「應當〜」（法規用語）。' },
            { text: 'ことになっている', reason: '「ことになっている」表規定已存在，語義稍不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ものとする」表法規條文中的義務',
            analysis: '「V辭書形＋ものとする」是法律、規章等正式文書中的用語，表示「應當〜」「視為〜」。',
            comparisons: ['ものとする：應當（法規用語）', 'べきだ：應該（一般建議）', 'なければならない：必須（義務）'],
            commonMistakes: ['○ 支払うものとする / × 支払いものとする → 用辭書形接續'],
        },
    },
    // ━━━ んばかりに (as if about to) ━━━
    {
        id: 'g_n1_213', category: 'grammar', level: 'N1', tags: ['literary', 'manner'],
        stem: '彼{かれ}は泣{な}か___の表情{ひょうじょう}で訴{うった}えた。',
        stemZh: '他幾乎要哭出來似的表情在訴說。',
        options: [
            { text: 'そうな', reason: '「そうな」表樣態但不如「んばかりの」書面化。' },
            { text: 'んばかり', reason: '正確！「んばかりに」表示「簡直就要〜似的」。' },
            { text: 'ようとする', reason: '「ようとする」表嘗試，語義不同。' },
            { text: 'げな', reason: '「げな」表帶有某種神情，語義稍不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「んばかりに」表彷彿就要',
            analysis: '「V（ない形去い）＋んばかりに」表示「簡直就要〜似的」「眼看就要〜」，是誇張的文語表現。',
            comparisons: ['んばかりに：簡直要〜似的（誇張/文語）', 'そうに：看起來要〜（樣態）', 'かのように：彷彿〜似的'],
            commonMistakes: ['○ 泣かんばかり / × 泣くんばかり → 用ない形去「い」加「ん」'],
        },
    },
    // ━━━ んがために (in order to - strong) ━━━
    {
        id: 'g_n1_214', category: 'grammar', level: 'N1', tags: ['literary', 'purpose'],
        stem: '勝{か}た___、選手{せんしゅ}たちは必死{ひっし}に練習{れんしゅう}した。',
        stemZh: '為了獲勝，選手們拼命練習。',
        options: [
            { text: 'んがために', reason: '正確！「んがために」表示「為了〜」（強烈目的）。' },
            { text: 'ために', reason: '「ために」表目的但不如前者強烈。' },
            { text: 'べく', reason: '「べく」也表目的但接法不同。' },
            { text: 'ように', reason: '「ように」表目的但用於非意志動詞。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「んがために」表強烈目的（文語）',
            analysis: '「V（ない形去い）＋んがために」是文語表現，表示強烈的目的意識「為了〜」。',
            comparisons: ['んがために：為了〜（文語/強烈目的）', 'べく：為了〜（文語/一般目的）', 'ために：為了〜（一般）'],
            commonMistakes: ['○ 勝たんがために / × 勝つんがために → 用ない形去「い」加「ん」'],
        },
    },
    // ━━━ ながらに(して) (from birth / as it is) ━━━
    {
        id: 'g_n1_215', category: 'grammar', level: 'N1', tags: ['literary', 'state'],
        stem: '彼{かれ}は生{う}まれ___にして天才{てんさい}だった。',
        stemZh: '他與生俱來就是天才。',
        options: [
            { text: 'つき', reason: '「つき」表與生俱來但接法不同。' },
            { text: 'ながら', reason: '正確！「ながらにして」表示「與生俱來」「保持原樣」。' },
            { text: 'たまま', reason: '「たまま」表保持狀態但語義不同。' },
            { text: 'のまま', reason: '「のまま」表保持狀態但語義不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ながらにして」表與生俱來或原封不動',
            analysis: '「N＋ながらに(して)」表示「一如既往」「與生俱來」。常見搭配：「生まれながらに」「涙ながらに」。',
            comparisons: ['ながらにして：與生俱來/保持原樣（文語）', 'のまま：保持〜狀態（一般）', 'ながらも：雖然〜但是'],
            commonMistakes: ['○ 生まれながらにして / × 生まれるながらにして → 用ます形接'],
        },
    },
    // ━━━ ないものでもない (not impossible) ━━━
    {
        id: 'g_n1_216', category: 'grammar', level: 'N1', tags: ['expression', 'possibility'],
        stem: '条件{じょうけん}次第{しだい}では、引{ひ}き受{う}け___。',
        stemZh: '視條件而定，也不是不能接受。',
        options: [
            { text: 'られる', reason: '「られる」表可能但不表「也不是不能」。' },
            { text: 'ないものでもない', reason: '正確！「ないものでもない」表示「也不是不可以」。' },
            { text: 'るかもしれない', reason: '「るかもしれない」表也許但語氣不同。' },
            { text: 'ないこともない', reason: '「ないこともない」也可以但「ないものでもない」更書面化。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ないものでもない」表消極肯定',
            analysis: '「V ない形＋ものでもない」表示「也並非不可以〜」「也不是不能〜」，用雙重否定來表示消極的肯定。',
            comparisons: ['ないものでもない：也不是不能（消極肯定/書面語）', 'ないこともない：也不是不能（一般）', 'なくもない：也不是沒有（口語）'],
            commonMistakes: ['○ 引き受けないものでもない / × 引き受けるものでもない → 必須用否定形'],
        },
    },
    // ━━━ ないものか (isn't there a way) ━━━
    {
        id: 'g_n1_217', category: 'grammar', level: 'N1', tags: ['expression', 'wish'],
        stem: 'もっと簡単{かんたん}にできる方法{ほうほう}はない___。',
        stemZh: '沒有更簡單的方法嗎。',
        options: [
            { text: 'だろうか', reason: '「だろうか」表疑問但不如「ものか」強調願望。' },
            { text: 'ものか', reason: '正確！「ないものか」表示「難道沒有辦法〜嗎」的願望。' },
            { text: 'のか', reason: '「のか」表疑問但不含願望。' },
            { text: 'はずか', reason: '語法不自然。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ないものか」表強烈願望',
            analysis: '「V ない形＋ものか/ものだろうか」表示「能不能〜呢」「要是能〜就好了」，帶有切實的願望。',
            comparisons: ['ないものか：能不能〜呢（強烈願望）', 'ないだろうか：不能〜嗎（疑問/願望）', 'たいものだ：希望〜（願望）'],
            commonMistakes: ['○ ないものか / × なくものか → 用「ない」形不用「なく」'],
        },
    },
    // ━━━ ないとも限らない (might possibly) ━━━
    {
        id: 'g_n1_218', category: 'grammar', level: 'N1', tags: ['expression', 'possibility'],
        stem: '地震{じしん}はいつ起{お}き___から、備{そな}えが必要{ひつよう}だ。',
        stemZh: '地震隨時都可能發生，所以需要防備。',
        options: [
            { text: 'るかわからない', reason: '「るかわからない」表不知道何時但不如前者書面化。' },
            { text: 'ないとも限らない', reason: '正確！「ないとも限らない」表示「也未必不會〜」。' },
            { text: 'るかもしれない', reason: '「るかもしれない」表也許但語氣不同。' },
            { text: 'ないとは言えない', reason: '「ないとは言えない」語義相近但接法不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ないとも限らない」表不能斷言不會',
            analysis: '「V ない形＋とも限らない」表示「未必不會〜」「也許會〜」，用於提醒可能性存在。',
            comparisons: ['ないとも限らない：未必不會（提醒可能性）', 'かもしれない：也許（一般推測）', 'ないとは言えない：不能說不會'],
            commonMistakes: ['○ 起きないとも限らない / × 起きるとも限らない → 必須用否定形'],
        },
    },
    // ━━━ なくしては (without) ━━━
    {
        id: 'g_n1_219', category: 'grammar', level: 'N1', tags: ['literary', 'condition'],
        stem: '国民{こくみん}の理解{りかい}___、この改革{かいかく}は実現{じつげん}しない。',
        stemZh: '沒有國民的理解，這場改革就無法實現。',
        options: [
            { text: 'がなければ', reason: '「がなければ」語義相近但語體較普通。' },
            { text: 'なくしては', reason: '正確！「なくしては」表示「沒有〜就不能」（正式書面語）。' },
            { text: 'を除いては', reason: '「を除いては」表除了，語義不同。' },
            { text: 'なしでは', reason: '「なしでは」語義相近但口語化。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「なくしては」表不可或缺（文語）',
            analysis: '「N＋なくしては」表示「如果沒有〜的話，就不能〜」，強調某事物是不可或缺的，為正式書面語。',
            comparisons: ['なくしては：沒有〜就不行（文語）', 'なくして：沒有〜地（文語）', 'なしには：沒有〜的話'],
            commonMistakes: ['○ 理解なくしては / × 理解がなくしては → 名詞直接接「なくしては」'],
        },
    },
    // ━━━ にもほどがある (there's a limit) ━━━
    {
        id: 'g_n1_220', category: 'grammar', level: 'N1', tags: ['expression', 'criticism'],
        stem: '冗談{じょうだん}___、それは言{い}いすぎだ。',
        stemZh: '開玩笑也要有個限度，那說得太過分了。',
        options: [
            { text: 'にしても', reason: '「にしても」表讓步但不強調限度。' },
            { text: 'だとしても', reason: '「だとしても」表假設讓步，語義不同。' },
            { text: 'にもほどがある', reason: '正確！「にもほどがある」表示「〜也該有個限度」。' },
            { text: 'でも', reason: '「でも」表讓步但語氣太弱。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「にもほどがある」表過分批判',
            analysis: '「N/V辭書形＋にもほどがある」表示「〜也該有個限度」「太過分了」，用於強烈批評。',
            comparisons: ['にもほどがある：也該有個限度（強烈批評）', 'にも限度がある：也有極限（較客觀）', 'すぎる：太〜（一般程度）'],
            commonMistakes: ['○ 冗談にもほどがある / × 冗談のにもほどがある → 名詞直接接'],
        },
    },
    // ━━━ にも増して (more than ever) ━━━
    {
        id: 'g_n1_221', category: 'grammar', level: 'N1', tags: ['expression', 'comparison'],
        stem: '今年{ことし}は去年{きょねん}___忙{いそが}しい。',
        stemZh: '今年比去年更加忙碌。',
        options: [
            { text: 'より', reason: '「より」表比較但不如「にも増して」正式。' },
            { text: 'にも増して', reason: '正確！「にも増して」表示「比〜更加」。' },
            { text: 'に比べて', reason: '「に比べて」表比較但不強調更甚。' },
            { text: 'ほど', reason: '「ほど」表程度但接法不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「にも増して」表更甚於',
            analysis: '「N＋にも増して」表示「比〜更加」「超過〜」，是正式的比較表現。',
            comparisons: ['にも増して：比〜更加（正式）', 'より（も）：比〜（一般比較）', 'に引き換え：與〜相反'],
            commonMistakes: ['○ 去年にも増して / × 去年よりにも増して → 不與「より」併用'],
        },
    },
    // ━━━ には当たらない (not worth) ━━━
    {
        id: 'g_n1_222', category: 'grammar', level: 'N1', tags: ['formal', 'evaluation'],
        stem: 'その程度{ていど}のことで驚{おどろ}く___。',
        stemZh: '那種程度的事不值得驚訝。',
        options: [
            { text: 'ことはない', reason: '「ことはない」表不必但語體不同。' },
            { text: 'には当たらない', reason: '正確！「には当たらない」表示「不值得〜」「沒必要〜」。' },
            { text: 'はずがない', reason: '「はずがない」表不可能，語義不同。' },
            { text: 'わけがない', reason: '「わけがない」表不可能，語義不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「には当たらない」表不值得',
            analysis: '「V辭書形＋には当たらない」表示「不值得〜」「沒必要〜」，用於冷靜評判。',
            comparisons: ['には当たらない：不值得〜（冷靜評判）', 'には及ばない：不需要〜（正式謙遜）', 'までもない：沒必要〜'],
            commonMistakes: ['○ 驚くには当たらない / × 驚きには当たらない → 用辭書形'],
        },
    },
    // ━━━ には及ばない (no need / cannot match) ━━━
    {
        id: 'g_n1_223', category: 'grammar', level: 'N1', tags: ['formal', 'evaluation'],
        stem: 'わざわざお越{こ}しいただく___。こちらから伺{うかが}います。',
        stemZh: '不必特地前來，我這邊過去。',
        options: [
            { text: 'には及びません', reason: '正確！「には及ばない」表示「不需要〜」。' },
            { text: 'までもありません', reason: '「までもない」也表不必要但接法不同。' },
            { text: 'ことはありません', reason: '「ことはない」表不必但不夠正式。' },
            { text: 'にはなりません', reason: '語法不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「には及ばない」表不需要或趕不上',
            analysis: '「V辭書形＋には及ばない」有兩個意思：①「不需要〜」「不必勞駕」②「趕不上〜」「比不上〜」。',
            comparisons: ['には及ばない：不必/比不上（正式）', 'には当たらない：不值得（評判）', 'までもない：沒必要'],
            commonMistakes: ['○ お越しいただくには及びません / × お越しには及びません → 動詞接「には及ばない」'],
        },
    },
    // ━━━ ぐるみ (including all) ━━━
    {
        id: 'g_n1_224', category: 'grammar', level: 'N1', tags: ['expression', 'totality'],
        stem: 'あの事件{じけん}は組織{そしき}___の犯罪{はんざい}だった。',
        stemZh: '那起事件是全組織參與的犯罪。',
        options: [
            { text: '全体の', reason: '「全体の」表全體但不如「ぐるみ」簡潔有力。' },
            { text: 'ぐるみ', reason: '正確！「ぐるみ」表示「全〜」「連同〜一起」。' },
            { text: 'ごと', reason: '「ごと」表連同但接法不同。' },
            { text: 'じゅう', reason: '「じゅう」表整個但用途不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ぐるみ」表全體動員',
            analysis: '「N＋ぐるみ」表示「全〜」「連同〜整體」，多用於集團性行為。常見搭配：「町ぐるみ」「家族ぐるみ」。',
            comparisons: ['ぐるみ：全〜一起（集團整體）', 'ごと：連同（一起帶走）', 'じゅう：整個〜中'],
            commonMistakes: ['○ 組織ぐるみ / × 組織のぐるみ → 名詞直接接「ぐるみ」'],
        },
    },
    // ━━━ 羽目になる (end up in a bad situation) ━━━
    {
        id: 'g_n1_225', category: 'grammar', level: 'N1', tags: ['expression', 'result'],
        stem: '遅刻{ちこく}したせいで、タクシーに乗{の}る___。',
        stemZh: '因為遲到，結果不得不坐計程車。',
        options: [
            { text: 'ことになった', reason: '「ことになった」表結果但不含負面語感。' },
            { text: '羽目になった', reason: '正確！「羽目になる」表示「落得〜下場」「不得不〜」。' },
            { text: 'ようになった', reason: '「ようになった」表變化但不含負面語感。' },
            { text: 'わけになった', reason: '語法不自然。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「羽目になる」表不好的結果',
            analysis: '「V辭書形＋羽目になる」表示「落得〜的下場」「結果不得不〜」，帶有負面、不願意的語氣。',
            comparisons: ['羽目になる：落得〜下場（負面結果）', 'ことになる：結果〜（中性結果）', '始末だ：最後竟〜（負面結局）'],
            commonMistakes: ['○ 乗る羽目になった / × 乗った羽目になった → 用辭書形接'],
        },
    },
    // ━━━ ほどのことではない (not that big a deal) ━━━
    {
        id: 'g_n1_226', category: 'grammar', level: 'N1', tags: ['expression', 'evaluation'],
        stem: '少{すこ}し転{ころ}んだだけで、病院{びょういん}に行{い}く___。',
        stemZh: '只是摔了一下而已，還不至於要去醫院。',
        options: [
            { text: 'ほどのことではない', reason: '正確！「ほどのことではない」表示「不至於〜」。' },
            { text: 'までもない', reason: '「までもない」也可以但語感略有不同。' },
            { text: 'ことはない', reason: '「ことはない」也表不必但較為普通。' },
            { text: 'はずがない', reason: '「はずがない」表不可能，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ほどのことではない」表沒那麼嚴重',
            analysis: '「V辭書形＋ほどのことではない」表示「不致於需要〜」「沒那麼嚴重」。',
            comparisons: ['ほどのことではない：不至於〜（沒那麼嚴重）', 'までもない：沒必要〜', 'ことはない：不必〜'],
            commonMistakes: ['○ 行くほどのことではない / × 行ったほどのことではない → 用辭書形'],
        },
    },
    // ━━━ ほうがましだ (better to) ━━━
    {
        id: 'g_n1_227', category: 'grammar', level: 'N1', tags: ['expression', 'comparison'],
        stem: 'あんな人{ひと}と結婚{けっこん}するくらいなら、一生{いっしょう}独身{どくしん}の___。',
        stemZh: '與其跟那種人結婚，還不如一輩子單身。',
        options: [
            { text: 'ほうがいい', reason: '「ほうがいい」表建議但不如「ほうがましだ」極端。' },
            { text: 'ほうがましだ', reason: '正確！「ほうがましだ」表示「還不如〜」（兩害取其輕）。' },
            { text: 'ほうだ', reason: '語法不自然。' },
            { text: 'のがいい', reason: '「のがいい」表建議但語體不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ほうがましだ」表兩害取其輕',
            analysis: '「〜くらいなら、N/V＋ほうがましだ」表示「與其做那種可怕的事，還不如〜」，兩者都不好但選較不壞的。',
            comparisons: ['ほうがましだ：還不如〜（兩害取其輕）', 'ほうがいい：〜比較好（一般建議）', 'くらいなら：與其〜不如'],
            commonMistakes: ['○ 独身のほうがましだ / × 独身がほうがましだ → 用「の」連接'],
        },
    },
    // ━━━ 放題 (as much as one likes) ━━━
    {
        id: 'g_n1_228', category: 'grammar', level: 'N1', tags: ['expression', 'freedom'],
        stem: 'このレストランは食{た}べ___だから、好{す}きなだけ食{た}べてください。',
        stemZh: '這家餐廳是吃到飽的，請盡量吃。',
        options: [
            { text: '放題', reason: '正確！「放題」表示「任意〜」「盡情〜」。' },
            { text: '自由', reason: '「自由」表自由但不是固定語法。' },
            { text: '勝手', reason: '「勝手」表隨意但帶有負面語感。' },
            { text: '好き', reason: '語法不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「放題」表任意、盡情',
            analysis: '「Vます形＋放題」表示「任意〜」「盡情〜」。常見搭配：「食べ放題」「飲み放題」「言いたい放題」。',
            comparisons: ['放題：盡情〜（任意/不受限制）', '三昧：沉浸於〜（陶醉）', 'まくる：不停地〜（拼命做）'],
            commonMistakes: ['○ 食べ放題 / × 食べる放題 → 用ます形去「ます」接「放題」'],
        },
    },
    // ━━━ いかんだ (depends on) ━━━
    {
        id: 'g_n1_229', category: 'grammar', level: 'N1', tags: ['formal', 'condition'],
        stem: '合否{ごうひ}は試験{しけん}の結果{けっか}___。',
        stemZh: '合格與否取決於考試結果。',
        options: [
            { text: '次第だ', reason: '「次第だ」也表取決於但不如「いかんだ」正式。' },
            { text: 'いかんだ', reason: '正確！「いかんだ」表示「取決於〜」「視〜而定」。' },
            { text: 'による', reason: '「による」表取決於但不如前者正式。' },
            { text: 'にかかっている', reason: '「にかかっている」也表取決於但接法不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「いかんだ」表取決於',
            analysis: '「N＋（の）いかんだ」表示「視〜而定」「全憑〜」，是非常正式的書面表現。',
            comparisons: ['いかんだ：視〜而定（最正式）', '次第だ：取決於〜（正式）', 'による：取決於〜（一般書面語）'],
            commonMistakes: ['○ 結果いかんだ / × 結果のいかんだ → 「の」可加可不加'],
        },
    },
    // ━━━ いかなる (whatever kind of) ━━━
    {
        id: 'g_n1_230', category: 'grammar', level: 'N1', tags: ['literary', 'universal'],
        stem: '___困難{こんなん}にも屈{くっ}しない覚悟{かくご}だ。',
        stemZh: '做好了不管什麼困難都不屈服的覺悟。',
        options: [
            { text: 'どんな', reason: '「どんな」表什麼樣但不如「いかなる」正式。' },
            { text: 'いかなる', reason: '正確！「いかなる」表示「任何〜」「怎樣的〜」。' },
            { text: 'あらゆる', reason: '「あらゆる」表所有但語義稍不同。' },
            { text: 'どのような', reason: '「どのような」表什麼樣但不如「いかなる」文語化。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「いかなる」表任何（文語疑問/全稱）',
            analysis: '「いかなる＋N」是文語表現，表示「任何〜」「怎樣的〜」，常用於莊嚴或正式的場合。',
            comparisons: ['いかなる：任何（文語/最正式）', 'どんな：什麼樣的（一般）', 'あらゆる：所有的（全部強調）'],
            commonMistakes: ['○ いかなる困難 / × いかなるの困難 → 直接修飾名詞'],
        },
    },
    // ━━━ いかに (how / how much) ━━━
    {
        id: 'g_n1_231', category: 'grammar', level: 'N1', tags: ['literary', 'degree'],
        stem: '___努力{どりょく}しても、報{むく}われないこともある。',
        stemZh: '無論怎麼努力，也有不被回報的時候。',
        options: [
            { text: 'どんなに', reason: '「どんなに」表無論多麼但不如「いかに」正式。' },
            { text: 'いくら', reason: '「いくら」表無論多少但口語化。' },
            { text: 'いかに', reason: '正確！「いかに」表示「如何」「多麼」。' },
            { text: 'どれほど', reason: '「どれほど」表多麼但不如「いかに」文語化。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「いかに」表程度或方式（文語）',
            analysis: '「いかに」是文語副詞，表示「如何」「多麼」。常與「ても」搭配表示「無論多麼〜也」。',
            comparisons: ['いかに：如何/多麼（文語）', 'どんなに：無論多麼（一般）', 'いくら：無論多少（口語）'],
            commonMistakes: ['○ いかに努力しても / × いかに努力しても → 此句都正確，但「いかに」更書面化'],
        },
    },
    // ━━━ いかにも (indeed) ━━━
    {
        id: 'g_n1_232', category: 'grammar', level: 'N1', tags: ['expression', 'appearance'],
        stem: '彼{かれ}は___学者{がくしゃ}らしい風貌{ふうぼう}をしている。',
        stemZh: '他的確有一副學者的風貌。',
        options: [
            { text: 'まるで', reason: '「まるで」表彷彿但不強調典型。' },
            { text: 'いかにも', reason: '正確！「いかにも」表示「的確」「確實像〜」。' },
            { text: 'さも', reason: '「さも」表好像但帶有假裝感。' },
            { text: 'まさに', reason: '「まさに」表正是但不如「いかにも」強調外表。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「いかにも」表確實如此',
            analysis: '「いかにも」是副詞，表示「確實」「的確」「一看就像」，強調外表或行為符合預期。',
            comparisons: ['いかにも：的確像（確實符合）', 'さも：好像（可能是假裝）', 'まるで：彷彿（比喻）'],
            commonMistakes: ['○ いかにも学者らしい / × いかにもの学者 → 「いかにも」是副詞不是連體詞'],
        },
    },
    // ━━━ いずれにしても (in any case) ━━━
    {
        id: 'g_n1_233', category: 'grammar', level: 'N1', tags: ['expression', 'conclusion'],
        stem: '賛成{さんせい}か反対{はんたい}か、___結論{けつろん}を出{だ}さなければならない。',
        stemZh: '贊成還是反對，無論如何都必須做出結論。',
        options: [
            { text: 'とにかく', reason: '「とにかく」表總之但過於口語。' },
            { text: 'いずれにしても', reason: '正確！「いずれにしても」表示「無論如何」「反正」。' },
            { text: 'それはさておき', reason: '「それはさておき」表暫且不談，語義不同。' },
            { text: 'どちらにしろ', reason: '「どちらにしろ」也可以但不如前者正式。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「いずれにしても」表無論如何',
            analysis: '「いずれにしても」表示「不管是哪種情況」「無論如何」「反正」，用於導出最終結論。',
            comparisons: ['いずれにしても：無論如何（正式）', 'どちらにしても：不管哪個（一般）', 'とにかく：總之（口語）'],
            commonMistakes: ['○ いずれにしても / × いずれにしても → 也可寫作「いずれにせよ」「いずれにしろ」'],
        },
    },
    // ━━━ じみた (like / resembling) ━━━
    {
        id: 'g_n1_234', category: 'grammar', level: 'N1', tags: ['expression', 'appearance'],
        stem: '彼{かれ}の言{い}い訳{わけ}は嘘{うそ}___話{はなし}ばかりだ。',
        stemZh: '他的藉口盡是些像謊言一樣的話。',
        options: [
            { text: 'くさい', reason: '「くさい」表有某種嫌疑但接法不同。' },
            { text: 'じみた', reason: '正確！「じみた」表示「像〜似的」「帶有〜的氣息」。' },
            { text: 'っぽい', reason: '「っぽい」表傾向但口語化。' },
            { text: 'がかった', reason: '「がかった」接法有限。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「じみた」表帶有某種不好的氣息',
            analysis: '「N＋じみた」表示「帶有〜的氣息」「像〜似的」，多用於負面評價。常見搭配：「年寄りじみた」「嘘じみた」。',
            comparisons: ['じみた：帶有〜氣息（多負面）', 'めいた：帶有〜氣息（較中性）', 'くさい：有〜的嫌疑（口語/負面）'],
            commonMistakes: ['○ 嘘じみた / × 嘘のじみた → 名詞直接接「じみた」'],
        },
    },
    // ━━━ か否か (whether or not) ━━━
    {
        id: 'g_n1_235', category: 'grammar', level: 'N1', tags: ['formal', 'question'],
        stem: '参加{さんか}する___は、各自{かくじ}の判断{はんだん}に委{ゆだ}ねる。',
        stemZh: '是否參加，交由各自判斷。',
        options: [
            { text: 'かどうか', reason: '「かどうか」表是否但不如「か否か」正式。' },
            { text: 'か否か', reason: '正確！「か否か」表示「是否」（正式書面語）。' },
            { text: 'かないか', reason: '語法不自然。' },
            { text: 'のか', reason: '「のか」表疑問但不表二選一。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「か否か」表是否（正式）',
            analysis: '「V辭書形＋か否か」是「かどうか」的正式書面表現，表示「是否〜」。',
            comparisons: ['か否か：是否（正式書面語）', 'かどうか：是否（一般）', 'か〜ないか：是否（口語）'],
            commonMistakes: ['○ 参加するか否か / × 参加か否か → 動詞用辭書形接'],
        },
    },
    // ━━━ 嫌いがある (tendency to) ━━━
    {
        id: 'g_n1_236', category: 'grammar', level: 'N1', tags: ['expression', 'tendency'],
        stem: '彼{かれ}は物事{ものごと}を楽観的{らっかんてき}に見{み}すぎる___。',
        stemZh: '他有把事情看得太樂觀的傾向。',
        options: [
            { text: '嫌いがある', reason: '正確！「嫌いがある」表示「有〜的傾向」（負面）。' },
            { text: 'きらいだ', reason: '「きらいだ」表討厭，語義不同。' },
            { text: '傾向がある', reason: '「傾向がある」也表傾向但較中性。' },
            { text: 'がちだ', reason: '「がちだ」表容易但語體不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「嫌いがある」表不好的傾向',
            analysis: '「V辭書形＋嫌いがある」表示「有〜的毛病」「有〜的傾向」，專用於指出不好的傾向。',
            comparisons: ['嫌いがある：有〜的毛病/傾向（負面/書面語）', '傾向がある：有〜的傾向（中性）', 'がちだ：容易〜（負面傾向）'],
            commonMistakes: ['○ 見すぎる嫌いがある / × 見すぎた嫌いがある → 用辭書形'],
        },
    },
    // ━━━ 切りがない (endless) ━━━
    {
        id: 'g_n1_237', category: 'grammar', level: 'N1', tags: ['expression', 'infinity'],
        stem: '欲{ほ}しいものを数{かぞ}えたら___。',
        stemZh: '如果數起想要的東西來就沒完沒了。',
        options: [
            { text: '切りがない', reason: '正確！「切りがない」表示「沒完沒了」「無止境」。' },
            { text: '限りがない', reason: '「限りがない」表無限但語感不同。' },
            { text: '際限がない', reason: '「際限がない」也表無止境但較書面化。' },
            { text: '終わりがない', reason: '「終わりがない」表沒有結束但語義稍不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「切りがない」表沒完沒了',
            analysis: '「V たら/V ば＋切りがない」表示「如果做〜的話就沒完沒了」「永遠做不完」。',
            comparisons: ['切りがない：沒完沒了（慣用表現）', '際限がない：無止境（書面語）', '限りがない：無限'],
            commonMistakes: ['○ 数えたら切りがない / × 数えるなら切りがない → 常用「たら」或「ば」接'],
        },
    },
    // ━━━ 極まる (extremely) ━━━
    {
        id: 'g_n1_238', category: 'grammar', level: 'N1', tags: ['literary', 'degree'],
        stem: 'あのドライバーの運転{うんてん}は危険{きけん}___。',
        stemZh: '那個司機的駕駛極其危險。',
        options: [
            { text: '極まりない', reason: '「極まりない」也正確，是同義表現。' },
            { text: '極まる', reason: '正確！「極まる」表示「極其〜」「〜到了極點」。' },
            { text: 'の極みだ', reason: '「の極みだ」也表極致但接法不同。' },
            { text: '至極だ', reason: '「至極だ」表極致但較古風。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「極まる」表達到極限',
            analysis: '「Na＋極まる」表示「〜到了極點」「極其〜」，是強烈的書面表現。也可用「極まりない」。',
            comparisons: ['極まる：極其〜（=極まりない）', '極まりない：〜到極點', 'の極み：〜之極（接名詞）'],
            commonMistakes: ['○ 危険極まる / × 危険な極まる → 去掉「な」直接接'],
        },
    },
    // ━━━ とばかりに (as if to say) ━━━
    {
        id: 'g_n1_239', category: 'grammar', level: 'N1', tags: ['expression', 'manner'],
        stem: '彼{かれ}は「もう知{し}らない」___、部屋{へや}を出{で}て行{い}った。',
        stemZh: '他彷彿在說「我不管了」一樣，走出了房間。',
        options: [
            { text: 'と言って', reason: '「と言って」表實際說了，但此處是比喻。' },
            { text: 'とばかりに', reason: '正確！「とばかりに」表示「彷彿在說〜似的」。' },
            { text: 'かのように', reason: '「かのように」表彷彿但用法不同。' },
            { text: 'と言わんばかりに', reason: '「と言わんばかりに」也可以，語義相近。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「とばかりに」表彷彿在說',
            analysis: '「引用文＋とばかり(に)」表示「彷彿在說〜似的」「一副〜的樣子」，用於描述態度或行為。',
            comparisons: ['とばかりに：彷彿在說〜似的', 'と言わんばかりに：簡直要說〜（更強調）', 'かのように：彷彿〜'],
            commonMistakes: ['○ 「知らない」とばかりに / × 知らないとばかりに → 引用時加引號更自然'],
        },
    },
    // ━━━ といえども (even though) ━━━
    {
        id: 'g_n1_240', category: 'grammar', level: 'N1', tags: ['literary', 'concession'],
        stem: '大人{おとな}___、ルールを守{まも}らなければならない。',
        stemZh: '即使是大人，也必須遵守規則。',
        options: [
            { text: 'であっても', reason: '「であっても」也表讓步但不如「といえども」正式。' },
            { text: 'といえども', reason: '正確！「といえども」表示「即使是〜也」（文語）。' },
            { text: 'にしろ', reason: '「にしろ」表即使但不夠正式。' },
            { text: 'としても', reason: '「としても」表假設讓步，語義稍不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「といえども」表即使是（文語讓步）',
            analysis: '「N＋といえども」是文語表現，表示「即使是〜也〜」「雖然是〜但也」，用於正式書面語。',
            comparisons: ['といえども：即使是〜也（文語）', 'であっても：即使是（一般書面語）', 'でも：即使（口語）'],
            commonMistakes: ['○ 大人といえども / × 大人がといえども → 名詞直接接'],
        },
    },
    // ━━━ といい〜といい (both... and...) ━━━
    {
        id: 'g_n1_241', category: 'grammar', level: 'N1', tags: ['expression', 'listing'],
        stem: 'デザイン___品質{ひんしつ}___、この製品{せいひん}は素晴{すば}らしい。',
        stemZh: '不論是設計還是品質，這個產品都很棒。',
        options: [
            { text: 'も…も', reason: '「も〜も」表也但不如「といい〜といい」正式。' },
            { text: 'にしろ…にしろ', reason: '「にしろ〜にしろ」也表列舉但語氣不同。' },
            { text: 'といい…といい', reason: '正確！「といい〜といい」表示「不論是〜還是〜」。' },
            { text: 'にせよ…にせよ', reason: '「にせよ〜にせよ」也表列舉但語氣不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「といい〜といい」表列舉評價',
            analysis: '「N＋といい＋N＋といい」表示「不論是〜還是〜（都〜）」，用於列舉兩個方面來做整體評價。',
            comparisons: ['といい〜といい：不論〜還是（整體評價）', 'にしろ〜にしろ：不管〜還是（讓步列舉）', 'も〜も：〜也〜也（一般列舉）'],
            commonMistakes: ['○ デザインといい品質といい / × デザインがといい → 名詞直接接「といい」'],
        },
    },
    // ━━━ といったらない (extremely) ━━━
    {
        id: 'g_n1_242', category: 'grammar', level: 'N1', tags: ['expression', 'degree'],
        stem: '真夏{まなつ}の暑{あつ}さ___。',
        stemZh: '盛夏的炎熱簡直無法形容。',
        options: [
            { text: 'といったらない', reason: '正確！「といったらない」表示「〜得不得了」「無法形容」。' },
            { text: 'と言えない', reason: '「と言えない」表不能說，語義不同。' },
            { text: 'というほどでもない', reason: '「というほどでもない」表也不至於，語義相反。' },
            { text: 'と言ってもいい', reason: '「と言ってもいい」表可以說是，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「といったらない」表無以言喻的程度',
            analysis: '「N/Adj＋といったらない」表示「〜得不得了」「〜得無法形容」，強調程度之甚。',
            comparisons: ['といったらない：〜得不得了', 'といったらありはしない：同上（更強調）', 'ことこの上ない：無以復加'],
            commonMistakes: ['○ 暑さといったらない / × 暑いといったらない → 名詞接「といったらない」更自然'],
        },
    },
    // ━━━ というものだ (that's what... is) ━━━
    {
        id: 'g_n1_243', category: 'grammar', level: 'N1', tags: ['expression', 'assertion'],
        stem: '友人{ゆうじん}の成功{せいこう}を妬{ねた}むのは、大人気{おとなげ}ない___。',
        stemZh: '嫉妒朋友的成功，這才叫不成熟。',
        options: [
            { text: 'ことだ', reason: '「ことだ」表建議或感嘆，語義不同。' },
            { text: 'わけだ', reason: '「わけだ」表理所當然，語義稍不同。' },
            { text: 'というものだ', reason: '正確！「というものだ」表示「這才叫〜」「正是〜」。' },
            { text: 'ものだ', reason: '「ものだ」表感嘆或常理，語義稍不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「というものだ」表本質判斷',
            analysis: '「〜というものだ」表示「這才叫做〜」「正是〜」，用於對事物本質的判斷或評價。',
            comparisons: ['というものだ：這才叫〜（本質判斷）', 'ものだ：〜啊（感嘆/常理）', 'わけだ：難怪（理解/推論）'],
            commonMistakes: ['○ 大人気ないというものだ / × 大人気なくというものだ → 用終止形接'],
        },
    },
    // ━━━ というところだ (at most) ━━━
    {
        id: 'g_n1_244', category: 'grammar', level: 'N1', tags: ['expression', 'estimation'],
        stem: '今{いま}の実力{じつりょく}では、合格{ごうかく}は五分五分{ごぶごぶ}___。',
        stemZh: '以現在的實力來看，合格率充其量也就五五開。',
        options: [
            { text: 'というところだ', reason: '正確！「というところだ」表示「大致上就是〜」。' },
            { text: 'に違いない', reason: '「に違いない」表確信，語義不同。' },
            { text: 'かもしれない', reason: '「かもしれない」表也許，語氣太弱。' },
            { text: 'ということだ', reason: '「ということだ」表據說或總結，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「というところだ」表大致估計',
            analysis: '「〜というところだ/といったところだ」表示「充其量也就是〜」「大致上就是〜」，用於謙虛或客觀的估計。',
            comparisons: ['というところだ：充其量就是（估計/謙虛）', 'ということだ：據說/也就是說', 'というわけだ：也就是說（推論）'],
            commonMistakes: ['○ 五分五分というところだ / × 五分五分だというところだ → 名詞可直接接'],
        },
    },
    // ━━━ といわず〜といわず (whether... or...) ━━━
    {
        id: 'g_n1_245', category: 'grammar', level: 'N1', tags: ['expression', 'totality'],
        stem: '手{て}___足{あし}___、全身{ぜんしん}泥{どろ}だらけだ。',
        stemZh: '不管是手還是腳，全身都是泥巴。',
        options: [
            { text: 'も…も', reason: '「も〜も」表也〜也但不如「といわず」書面化。' },
            { text: 'といわず…といわず', reason: '正確！「といわず〜といわず」表示「不論是〜還是〜（全部）」。' },
            { text: 'にしろ…にしろ', reason: '「にしろ〜にしろ」表列舉但不強調全面性。' },
            { text: 'であれ…であれ', reason: '「であれ〜であれ」表讓步列舉，語義稍不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「といわず〜といわず」表不分〜全部',
            analysis: '「N＋といわず＋N＋といわず」表示「不分〜也不分〜，全部都〜」，強調遍及所有部分。',
            comparisons: ['といわず〜といわず：不分〜全部（遍及）', 'といい〜といい：不論〜還是（評價）', 'も〜も：也〜也（一般列舉）'],
            commonMistakes: ['○ 手といわず足といわず / × 手をといわず → 名詞直接接'],
        },
    },
    // ━━━ ときている (and on top of that) ━━━
    {
        id: 'g_n1_246', category: 'grammar', level: 'N1', tags: ['expression', 'addition'],
        stem: '彼{かれ}は頭{あたま}がいい上{うえ}に、性格{せいかく}もいい___。',
        stemZh: '他不僅聰明，而且性格也好。',
        options: [
            { text: 'ものだ', reason: '「ものだ」表感嘆但不強調追加。' },
            { text: 'ことだ', reason: '「ことだ」表建議，語義不同。' },
            { text: 'ときている', reason: '正確！「ときている」表示「而且還〜」「更是〜」。' },
            { text: 'というわけだ', reason: '「というわけだ」表推論，語義不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ときている」表雪上加霜或錦上添花',
            analysis: '「〜ときている」表示「而且更是〜」，用於列舉追加特徵，可用於正面或負面。',
            comparisons: ['ときている：而且還〜（追加特徵）', '上に：而且（追加/一般）', 'その上：此外（連接詞）'],
            commonMistakes: ['○ 性格もいいときている / × 性格もいくときている → 用終止形接'],
        },
    },
    // ━━━ と見るや (as soon as seeing) ━━━
    {
        id: 'g_n1_247', category: 'grammar', level: 'N1', tags: ['literary', 'sequence'],
        stem: '泥棒{どろぼう}は警察{けいさつ}の姿{すがた}を見{み}る___、逃{に}げ出{だ}した。',
        stemZh: '小偷一看到警察的身影就逃跑了。',
        options: [
            { text: 'や', reason: '正確！「と見るや」表示「一看到就〜」。' },
            { text: 'なり', reason: '「なり」也表一〜就但接法不同。' },
            { text: 'が早いか', reason: '「が早いか」也表一〜就但接法不同。' },
            { text: 'や否や', reason: '「や否や」也表一〜就但接法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「と見るや」表一看到就',
            analysis: '「〜と見るや」表示「一看到〜就立刻〜」「眼看〜就〜」，強調看到某情況後的迅速行動。',
            comparisons: ['と見るや：一看到就（視覺判斷→行動）', 'や否や：剛〜就（一般迅速反應）', 'が早いか：一〜就（幾乎同時）'],
            commonMistakes: ['○ 見ると見るや → 「と見るや」是固定表現'],
        },
    },
    // ━━━ となると / となれば (when it comes to) ━━━
    {
        id: 'g_n1_248', category: 'grammar', level: 'N1', tags: ['expression', 'conditional'],
        stem: '海外{かいがい}赴任{ふにん}___、準備{じゅんび}が大変{たいへん}だ。',
        stemZh: '如果要到海外赴任的話，準備工作可不簡單。',
        options: [
            { text: 'になると', reason: '「になると」表條件但不如「となると」強調事態重大。' },
            { text: 'となると', reason: '正確！「となると」表示「一旦〜的話（情況就大不同）」。' },
            { text: 'だとしたら', reason: '「だとしたら」表假設但不如前者正式。' },
            { text: 'であれば', reason: '「であれば」表條件但不如前者強調重大性。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「となると」表面臨重大情況',
            analysis: '「N/文＋となると/となれば」表示「一旦面臨〜的話」，暗示情況重大，後面多接需要特別對應的內容。',
            comparisons: ['となると：一旦〜的話（重大情況）', 'になると：到了〜的話（一般條件）', 'としたら：假設〜的話'],
            commonMistakes: ['○ 赴任となると / × 赴任だとなると → 名詞直接接「となると」'],
        },
    },
    // ━━━ としたことが (someone like... would) ━━━
    {
        id: 'g_n1_249', category: 'grammar', level: 'N1', tags: ['expression', 'surprise'],
        stem: 'あなた___、こんな初歩的{しょほてき}なミスをするなんて。',
        stemZh: '連你居然都犯這種低級錯誤。',
        options: [
            { text: 'ともあろうものが', reason: '「ともあろうものが」也可以但「としたことが」更常用於驚訝。' },
            { text: 'としたことが', reason: '正確！「としたことが」表示「像〜這樣的人竟然」。' },
            { text: 'たるものが', reason: '「たるものが」表身分自覺，語義稍不同。' },
            { text: 'にしたら', reason: '「にしたら」表從〜立場看，語義不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「としたことが」表對某人失誤的驚訝',
            analysis: '「N＋としたことが」表示「像〜那樣（優秀/可靠的人）竟然〜」，帶有驚訝和意外感。',
            comparisons: ['としたことが：〜竟然（驚訝自己或熟人的失誤）', 'ともあろうものが：堂堂〜竟然（批判較強）', 'たるもの：身為〜（訓誡）'],
            commonMistakes: ['○ あなたとしたことが / × あなたがとしたことが → 名詞直接接'],
        },
    },
    // ━━━ とて (even / because) ━━━
    {
        id: 'g_n1_250', category: 'grammar', level: 'N1', tags: ['literary', 'concession'],
        stem: 'プロ___、失敗{しっぱい}することはある。',
        stemZh: '即使是專家，也有失敗的時候。',
        options: [
            { text: 'でも', reason: '「でも」表讓步但過於口語。' },
            { text: 'であっても', reason: '「であっても」也表讓步但不如「とて」簡潔。' },
            { text: 'とて', reason: '正確！「とて」表示「即使是〜也」（文語）。' },
            { text: 'だって', reason: '「だって」表即使但非常口語。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「とて」表即使是（文語讓步）',
            analysis: '「N＋とて」是文語表現，表示「即使是〜也〜」。也可表原因「因為〜」。',
            comparisons: ['とて：即使/因為（文語）', 'であっても：即使是（一般書面語）', 'といえども：即使是〜也（文語）'],
            commonMistakes: ['○ プロとて / × プロがとて → 名詞直接接「とて」'],
        },
    },
    // ━━━ とはいえ (having said that) ━━━
    {
        id: 'g_n1_251', category: 'grammar', level: 'N1', tags: ['expression', 'concession'],
        stem: '春{はる}になった___、まだ寒{さむ}い日{ひ}もある。',
        stemZh: '雖說已經到了春天，但還是有冷的日子。',
        options: [
            { text: 'とはいえ', reason: '正確！「とはいえ」表示「雖然〜但是」。' },
            { text: 'としても', reason: '「としても」表假設讓步，語義不同。' },
            { text: 'にしても', reason: '「にしても」表讓步但接法不同。' },
            { text: 'ものの', reason: '「ものの」也表讓步但語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とはいえ」表承認事實但補充轉折',
            analysis: '「文＋とはいえ」表示「雖然〜但是」「雖說如此」，承認前述事實後提出相反或補充的觀點。',
            comparisons: ['とはいえ：雖說（承認後轉折）', 'ものの：雖然（書面語讓步）', 'とはいうものの：雖然是這樣說'],
            commonMistakes: ['○ なったとはいえ / × なるとはいえ → 常用た形或現在形接續'],
        },
    },
    // ━━━ ところを (just when / despite) ━━━
    {
        id: 'g_n1_252', category: 'grammar', level: 'N1', tags: ['formal', 'timing'],
        stem: 'お忙{いそが}しい___、お越{こ}しいただきありがとうございます。',
        stemZh: '百忙之中撥冗前來，非常感謝。',
        options: [
            { text: 'のに', reason: '「のに」表遺憾但不如「ところを」正式。' },
            { text: 'ところを', reason: '正確！「ところを」表示「正當〜之際」「儘管〜」。' },
            { text: 'にもかかわらず', reason: '「にもかかわらず」表儘管但接法不同。' },
            { text: 'けれども', reason: '「けれども」表轉折但語氣太弱。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ところを」表在某狀況下',
            analysis: '「Adj/V＋ところを」表示「正當〜之際」「儘管處於〜狀況」，用於正式的感謝或道歉。',
            comparisons: ['ところを：正當〜之際（正式感謝/道歉）', 'のに：儘管〜卻（遺憾）', 'にもかかわらず：儘管（書面語）'],
            commonMistakes: ['○ お忙しいところを / × お忙しくところを → 用終止形接「ところを」'],
        },
    },
    // ━━━ ともすれば (apt to) ━━━
    {
        id: 'g_n1_253', category: 'grammar', level: 'N1', tags: ['expression', 'tendency'],
        stem: '人間{にんげん}は___自分{じぶん}の都合{つごう}のいいように解釈{かいしゃく}しがちだ。',
        stemZh: '人往往容易把事情往對自己有利的方向解讀。',
        options: [
            { text: 'ついつい', reason: '「ついつい」表不知不覺但過於口語。' },
            { text: 'ともすれば', reason: '正確！「ともすれば」表示「動輒」「往往」。' },
            { text: 'どうしても', reason: '「どうしても」表無論如何但語義稍不同。' },
            { text: 'ややもすると', reason: '「ややもすると」也表容易但不如「ともすれば」常見。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ともすれば」表容易陷入',
            analysis: '「ともすれば」是副詞，表示「動輒〜」「一不注意就容易〜」，多用於指出不好的傾向。',
            comparisons: ['ともすれば：動輒（容易陷入/書面語）', 'ややもすると：稍不注意就（同義/更書面化）', 'ついつい：不知不覺（口語）'],
            commonMistakes: ['○ ともすれば〜がちだ / × ともすると〜がちだ → 「ともすれば」「ともすると」都可以'],
        },
    },
    // ━━━ とりわけ (especially) ━━━
    {
        id: 'g_n1_254', category: 'grammar', level: 'N1', tags: ['expression', 'emphasis'],
        stem: '日本{にほん}の文化{ぶんか}の中{なか}で、___茶道{さどう}に興味{きょうみ}がある。',
        stemZh: '在日本文化中，我對茶道格外感興趣。',
        options: [
            { text: '特に', reason: '「特に」表特別但不如「とりわけ」書面化。' },
            { text: 'とりわけ', reason: '正確！「とりわけ」表示「尤其」「格外」。' },
            { text: 'なかでも', reason: '「なかでも」表其中但不如前者書面化。' },
            { text: 'ことに', reason: '「ことに」表特別但較古風。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「とりわけ」表格外、尤其',
            analysis: '「とりわけ」是副詞，表示「尤其」「格外」「特別是」，比「特に」更書面化。',
            comparisons: ['とりわけ：尤其（書面語/正式）', '特に：特別（一般）', 'なかでも：其中最（一般）'],
            commonMistakes: ['○ とりわけ茶道に / × とりわけの茶道に → 「とりわけ」是副詞不是連體詞'],
        },
    },
    // ━━━ とっさに (instantly) ━━━
    {
        id: 'g_n1_255', category: 'grammar', level: 'N1', tags: ['expression', 'speed'],
        stem: '地震{じしん}が来{き}た時{とき}、___テーブルの下{した}に潜{もぐ}り込{こ}んだ。',
        stemZh: '地震來的時候，瞬間就鑽到了桌子下面。',
        options: [
            { text: 'すぐに', reason: '「すぐに」表馬上但不如「とっさに」強調瞬間反應。' },
            { text: 'たちまち', reason: '「たちまち」表轉眼間但用途不同。' },
            { text: 'とっさに', reason: '正確！「とっさに」表示「一瞬間」「來不及思考就」。' },
            { text: 'いきなり', reason: '「いきなり」表突然但不強調反射動作。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「とっさに」表瞬間反應',
            analysis: '「とっさに」是副詞，表示「一瞬間」「來不及細想就做了」，強調反射性的快速反應。',
            comparisons: ['とっさに：瞬間（反射反應）', 'すぐに：馬上（一般迅速）', 'いきなり：突然（意料之外）'],
            commonMistakes: ['○ とっさに潜り込んだ / × とっさで潜り込んだ → 用「に」不用「で」'],
        },
    },
    // ━━━ つ〜つ (alternately) ━━━
    {
        id: 'g_n1_256', category: 'grammar', level: 'N1', tags: ['literary', 'alternation'],
        stem: '二人{ふたり}は抜{ぬ}き___抜{ぬ}かれ___のデッドヒートを繰{く}り広{ひろ}げた。',
        stemZh: '兩人展開了你追我趕的白熱化競爭。',
        options: [
            { text: 'つ…つ', reason: '正確！「つ〜つ」表示「時而〜時而〜」的交替。' },
            { text: 'たり…たり', reason: '「たり〜たり」也表交替但不如前者書面化。' },
            { text: 'ながら…ながら', reason: '語法不自然。' },
            { text: 'て…て', reason: '語法不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「つ〜つ」表交替反復',
            analysis: '「Vます形＋つ＋Vます形＋つ」表示「時而〜時而〜」，用於表示兩個相反動作交替進行。常見：「抜きつ抜かれつ」「持ちつ持たれつ」。',
            comparisons: ['つ〜つ：時而〜時而〜（文語/交替）', 'たり〜たり：做〜做〜（一般交替）', 'ながら：一邊〜一邊（同時）'],
            commonMistakes: ['○ 抜きつ抜かれつ / × 抜くつ抜かれつ → 用ます形去「ます」'],
        },
    },
    // ━━━ ってば / ったら (I told you) ━━━
    {
        id: 'g_n1_257', category: 'grammar', level: 'N1', tags: ['expression', 'impatience'],
        stem: 'もう行{い}くよ___！早{はや}くして！',
        stemZh: '我說了要走了啦！快一點！',
        options: [
            { text: 'って', reason: '「って」表引用但不如「ってば」強調不耐煩。' },
            { text: 'ってば', reason: '正確！「ってば」表示「我都說了〜」（不耐煩）。' },
            { text: 'だってば', reason: '「だってば」也可以但接法不同。' },
            { text: 'と言っただろう', reason: '「と言っただろう」表不是說過了嗎但太冗長。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ってば」表不耐煩的重複',
            analysis: '「文＋ってば」表示「我都說了〜」「〜啦！」，用於因對方不聽而不耐煩地重複說的時候。',
            comparisons: ['ってば：我說了〜（不耐煩/強調）', 'ったら：說起〜/〜你真是（不耐煩/親暱）', 'と言った：說了（客觀引用）'],
            commonMistakes: ['○ 行くよってば / × 行くってば → 「ってば」常接在句末語氣詞後'],
        },
    },
    // ━━━ うちに入らない (doesn't count as) ━━━
    {
        id: 'g_n1_258', category: 'grammar', level: 'N1', tags: ['expression', 'evaluation'],
        stem: '一回{いっかい}や二回{にかい}の失敗{しっぱい}は失敗{しっぱい}の___。',
        stemZh: '一兩次失敗根本算不上失敗。',
        options: [
            { text: 'うちに入らない', reason: '正確！「うちに入らない」表示「算不上〜」。' },
            { text: 'はずがない', reason: '「はずがない」表不可能，語義不同。' },
            { text: 'わけがない', reason: '「わけがない」表不可能，語義不同。' },
            { text: 'ものではない', reason: '「ものではない」表不應該，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「うちに入らない」表不算〜',
            analysis: '「N＋の＋うちに入らない」表示「算不上〜」「不值一提」「還稱不上〜」。',
            comparisons: ['うちに入らない：算不上〜（輕視程度）', 'にはならない：不能成為〜', 'とは言えない：不能說是〜'],
            commonMistakes: ['○ 失敗のうちに入らない / × 失敗にうちに入らない → 用「の」連接'],
        },
    },
    // ━━━ はおろか (let alone) ━━━
    {
        id: 'g_n1_259', category: 'grammar', level: 'N1', tags: ['expression', 'emphasis'],
        stem: '漢字{かんじ}___、ひらがな___書{か}けない。',
        stemZh: '別說漢字了，連平假名都寫不了。',
        options: [
            { text: 'はおろか…すら', reason: '正確！「はおろか〜すら」表示「別說〜連〜都」。' },
            { text: 'はもちろん…も', reason: '「はもちろん〜も」表當然但不強調極端。' },
            { text: 'ばかりか…も', reason: '「ばかりか〜も」表不僅但語感不同。' },
            { text: 'どころか…さえ', reason: '「どころか〜さえ」也可以但接法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「はおろか」表別說（更不用提）',
            analysis: '「N＋はおろか＋N＋すら/さえ/も」表示「別說〜，連更基本的〜都〜」，用於強調程度之甚。',
            comparisons: ['はおろか：別說（強調極端程度）', 'どころか：哪裡（意外程度）', 'はもちろん：當然也（追加強調）'],
            commonMistakes: ['○ 漢字はおろか / × 漢字がおろか → 助詞用「は」'],
        },
    },
    // ━━━ はさておき (putting aside) ━━━
    {
        id: 'g_n1_260', category: 'grammar', level: 'N1', tags: ['expression', 'topic_shift'],
        stem: '冗談{じょうだん}___、本題{ほんだい}に入{はい}りましょう。',
        stemZh: '玩笑暫且不談，我們進入正題吧。',
        options: [
            { text: 'はさておき', reason: '正確！「はさておき」表示「暫且不論〜」「撇開〜不談」。' },
            { text: 'はともかく', reason: '「はともかく」也表暫且不論但語感不同。' },
            { text: 'は別として', reason: '「は別として」表除了〜之外但不如前者書面化。' },
            { text: 'を抜きにして', reason: '「を抜きにして」表省略但語義稍不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「はさておき」表暫且不論',
            analysis: '「N＋はさておき」表示「暫時把〜擱在一邊」「先不談〜」，用於轉換話題。',
            comparisons: ['はさておき：暫且不論（轉換話題/書面語）', 'はともかく：暫且不論（一般）', 'は別として：先不管〜'],
            commonMistakes: ['○ 冗談はさておき / × 冗談をさておき → 助詞用「は」'],
        },
    },
    // ━━━ はそっちのけで (ignoring) ━━━
    {
        id: 'g_n1_261', category: 'grammar', level: 'N1', tags: ['expression', 'neglect'],
        stem: '宿題{しゅくだい}___、ゲームばかりしている。',
        stemZh: '把作業丟在一邊，光顧著打遊戲。',
        options: [
            { text: 'を忘れて', reason: '「を忘れて」表忘記但不強調刻意忽略。' },
            { text: 'はそっちのけで', reason: '正確！「はそっちのけで」表示「把〜丟在一邊」。' },
            { text: 'はともかく', reason: '「はともかく」表暫且不論，語義不同。' },
            { text: 'を無視して', reason: '「を無視して」表無視但語感過強。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「はそっちのけで」表置之不理',
            analysis: '「N＋はそっちのけで」表示「把〜丟在一邊不管」「把〜置之不理」，帶有批判語氣。',
            comparisons: ['はそっちのけで：丟在一邊（批判/忽略）', 'を抜きにして：不算〜', 'はさておき：暫且不論（中性）'],
            commonMistakes: ['○ 宿題はそっちのけで / × 宿題をそっちのけ → 助詞用「は」或「を」都可以'],
        },
    },
    // ━━━ や否や (as soon as) ━━━
    {
        id: 'g_n1_262', category: 'grammar', level: 'N1', tags: ['literary', 'sequence'],
        stem: 'ベルが鳴{な}る___、生徒{せいと}たちは教室{きょうしつ}を飛{と}び出{だ}した。',
        stemZh: '鈴聲一響，學生們就飛奔出教室。',
        options: [
            { text: 'と同時に', reason: '「と同時に」表同時但不如「や否や」強調迅速。' },
            { text: 'や否や', reason: '正確！「や否や」表示「剛一〜就〜」。' },
            { text: 'たとたん', reason: '「たとたん」也表一〜就但接法不同。' },
            { text: 'てすぐ', reason: '「てすぐ」表做了之後馬上但過於口語。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「や否や」表剛一〜就（文語）',
            analysis: '「V辭書形＋や否や」表示「剛一〜就立刻〜」，強調前後動作幾乎同時發生。',
            comparisons: ['や否や：剛〜就（文語/極迅速）', 'が早いか：一〜就（文語/迅速）', 'たとたんに：一〜就（一般）'],
            commonMistakes: ['○ 鳴るや否や / × 鳴ったや否や → 用辭書形接「や否や」'],
        },
    },
    // ━━━ やれ〜やれ (again this, again that) ━━━
    {
        id: 'g_n1_263', category: 'grammar', level: 'N1', tags: ['expression', 'listing'],
        stem: '___仕事{しごと}だ___会議{かいぎ}だと、休{やす}む暇{ひま}がない。',
        stemZh: '又是工作又是會議的，根本沒有休息的空檔。',
        options: [
            { text: 'やれ…やれ', reason: '正確！「やれ〜やれ」表示「又是〜又是〜」（煩雜列舉）。' },
            { text: 'だの…だの', reason: '「だの〜だの」也表列舉但語感不同。' },
            { text: 'とか…とか', reason: '「とか〜とか」表列舉但不如前者強調煩雜。' },
            { text: 'なり…なり', reason: '「なり〜なり」表或者但語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「やれ〜やれ」表煩不勝煩的列舉',
            analysis: '「やれ〜やれ〜と」表示「又是〜又是〜」，用於列舉令人感到煩雜、無奈的事情。',
            comparisons: ['やれ〜やれ：又是〜又是（煩雜/無奈）', 'だの〜だの：〜啦〜啦（隨意列舉）', 'わ〜わで：又〜又（不堪其擾）'],
            commonMistakes: ['○ やれ仕事だやれ会議だ / × やれ仕事、やれ会議 → 後面通常接「と」'],
        },
    },
    // ━━━ ようが〜ようが (no matter whether) ━━━
    {
        id: 'g_n1_264', category: 'grammar', level: 'N1', tags: ['literary', 'concession'],
        stem: '雨{あめ}が降{ふ}ろ___風{かぜ}が吹{ふ}こ___、毎日{まいにち}走{はし}る。',
        stemZh: '不管下雨還是刮風，每天都跑步。',
        options: [
            { text: 'うが…うが', reason: '正確！「ようが〜ようが」表示「不管〜還是〜」。' },
            { text: 'うと…うと', reason: '「ようと〜ようと」也正確，是同義表現。' },
            { text: 'うとも…うとも', reason: '「ようとも」語法可以但不如「ようが」常見。' },
            { text: 'うなら…うなら', reason: '語法不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようが〜ようが」表無論如何',
            analysis: '「V意向形＋が/と＋V意向形＋が/と」表示「不管是〜還是〜」，表示強烈的讓步。',
            comparisons: ['ようが〜ようが：不管〜還是〜（讓步）', 'ても〜ても：即使〜即使（一般讓步）', 'にしろ〜にしろ：不管〜還是'],
            commonMistakes: ['○ 降ろうが吹こうが / × 降るうが吹くうが → 用意向形'],
        },
    },
    // ━━━ ようによっては (depending on how) ━━━
    {
        id: 'g_n1_265', category: 'grammar', level: 'N1', tags: ['expression', 'condition'],
        stem: '薬{くすり}は使{つか}い___、毒{どく}にもなる。',
        stemZh: '藥物的使用方式不同的話，也會變成毒藥。',
        options: [
            { text: 'ようによっては', reason: '正確！「ようによっては」表示「視做法而定」。' },
            { text: '方次第では', reason: '「方次第では」也可以但不如前者自然。' },
            { text: '方法では', reason: '「方法では」過於直接。' },
            { text: 'ようでは', reason: '「ようでは」表示「如果〜的話（不好）」，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようによっては」表取決於做法',
            analysis: '「Vます形＋ようによっては」表示「視做法/方式而定」「看怎麼〜」。',
            comparisons: ['ようによっては：視做法而定', 'ようでは：如果那樣〜的話（不好）', '次第では：取決於〜'],
            commonMistakes: ['○ 使いようによっては / × 使うようによっては → 用ます形去「ます」接「よう」'],
        },
    },
    // ━━━ ようにも〜ない (want to but can't) ━━━
    {
        id: 'g_n1_266', category: 'grammar', level: 'N1', tags: ['expression', 'inability'],
        stem: '足{あし}を怪我{けが}して、歩{ある}こ___歩{ある}けない。',
        stemZh: '腳受了傷，想走也走不了。',
        options: [
            { text: 'うにも', reason: '正確！「ようにも〜ない」表示「想〜也辦不到」。' },
            { text: 'うとしても', reason: '「うとしても」表嘗試也但不如前者強調無力感。' },
            { text: 'うものなら', reason: '「うものなら」表萬一〜的話，語義不同。' },
            { text: 'うとも', reason: '「うとも」表即使但語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようにも〜ない」表想做也做不到',
            analysis: '「V意向形＋にも＋同V可能形否定」表示「想做〜也做不到」，強調無可奈何的無力感。',
            comparisons: ['ようにも〜ない：想〜也辦不到（無力感）', 'うとしても：嘗試也（讓步）', 'たくても〜ない：想〜也不能'],
            commonMistakes: ['○ 歩こうにも歩けない / × 歩くにも歩けない → 用意向形'],
        },
    },
    // ━━━ ようと〜まいと (whether or not) ━━━
    {
        id: 'g_n1_267', category: 'grammar', level: 'N1', tags: ['literary', 'concession'],
        stem: '彼{かれ}が来{こ}よ___来{こ}___、計画{けいかく}は変{か}わらない。',
        stemZh: '不管他來不來，計劃都不變。',
        options: [
            { text: 'うと…まいと', reason: '正確！「ようと〜まいと」表示「不管是否〜」。' },
            { text: 'うが…まいが', reason: '「ようが〜まいが」也正確，是同義表現。' },
            { text: 'ても…なくても', reason: '「ても〜なくても」也表不管但不夠正式。' },
            { text: 'うに…まいに', reason: '語法不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようと〜まいと」表不管是否',
            analysis: '「V意向形＋と/が＋V辭書形/ます形＋まいと/まいが」表示「不管做不做〜」「無論是否〜」。',
            comparisons: ['ようと〜まいと：不管是否（文語）', 'ても〜なくても：不管〜不〜（一般）', 'にしろ〜にしろ：不管〜還是'],
            commonMistakes: ['○ 来ようと来まいと / × 来るようと来まいと → 用意向形「来よう」'],
        },
    },
    // ━━━ ずじまい (ended up not doing) ━━━
    {
        id: 'g_n1_268', category: 'grammar', level: 'N1', tags: ['expression', 'result'],
        stem: '結局{けっきょく}、彼{かれ}には会{あ}わ___だった。',
        stemZh: '結果還是沒能見到他。',
        options: [
            { text: 'ないまま', reason: '「ないまま」表沒做的狀態但不如「ずじまい」強調遺憾。' },
            { text: 'ずじまい', reason: '正確！「ずじまい」表示「終究沒能〜」。' },
            { text: 'ないで終わり', reason: '「ないで終わり」語法可以但不如前者簡潔。' },
            { text: 'ずに', reason: '「ずに」表不做但不表「終究」。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ずじまい」表終究沒做成',
            analysis: '「V ない形（去い）＋ずじまい」表示「終究沒能做〜就結束了」，帶有遺憾語氣。',
            comparisons: ['ずじまい：終究沒能〜（遺憾）', 'ないまま：沒做〜的狀態', 'そびれる：錯過機會做〜'],
            commonMistakes: ['○ 会わずじまい / × 会えずじまい → 用ない形去「い」加「ず」'],
        },
    },
    // ━━━ ずにはおかない (compelled to) ━━━
    {
        id: 'g_n1_269', category: 'grammar', level: 'N1', tags: ['literary', 'inevitability'],
        stem: 'この映画{えいが}は観{み}る者{もの}を感動{かんどう}させ___。',
        stemZh: '這部電影一定會令觀眾感動。',
        options: [
            { text: 'るに違いない', reason: '「に違いない」表推測但不如「ずにはおかない」強調必然。' },
            { text: 'てやまない', reason: '「てやまない」表衷心但語義不同。' },
            { text: 'ずにはおかない', reason: '正確！「ずにはおかない」表示「必然會〜」「非〜不可」。' },
            { text: 'ないではいられない', reason: '「ないではいられない」表忍不住但主語不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ずにはおかない」表必然會引起',
            analysis: '「V ない形（去い）＋ずにはおかない」表示「一定會〜」「非〜不可」，強調某事必然發生或引起某種效果。',
            comparisons: ['ずにはおかない：必然會（引起效果/文語）', 'ないではおかない：同上（較口語）', 'ないではいられない：忍不住（主觀）'],
            commonMistakes: ['○ 感動させずにはおかない / × 感動しずにはおかない → 使役形「させ」接「ず」'],
        },
    },
    // ━━━ ずとも (even without) ━━━
    {
        id: 'g_n1_270', category: 'grammar', level: 'N1', tags: ['literary', 'concession'],
        stem: '言{い}わ___、あなたの気持{きも}ちはわかっている。',
        stemZh: '就算你不說，我也知道你的心情。',
        options: [
            { text: 'なくても', reason: '「なくても」表即使不但不如「ずとも」文語化。' },
            { text: 'ないでも', reason: '「ないでも」表不做也但語體不同。' },
            { text: 'ずとも', reason: '正確！「ずとも」表示「就算不〜也」（文語）。' },
            { text: 'まいとも', reason: '語法不自然。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ずとも」表即使不做也（文語）',
            analysis: '「V ない形（去い）＋ずとも」是文語表現，表示「就算不〜也〜」。',
            comparisons: ['ずとも：就算不〜也（文語）', 'なくても：即使不〜也（一般）', 'ないでも：不做也（口語）'],
            commonMistakes: ['○ 言わずとも / × 言わないずとも → 用「ず」不用「ない」'],
        },
    },
    // ━━━ さも (as if) ━━━
    {
        id: 'g_n1_271', category: 'grammar', level: 'N1', tags: ['expression', 'appearance'],
        stem: '彼{かれ}は___知{し}っているかのように話{はな}していた。',
        stemZh: '他說得好像真的很了解似的。',
        options: [
            { text: 'まるで', reason: '「まるで」表彷彿但不如「さも」強調裝腔作勢。' },
            { text: 'さも', reason: '正確！「さも」表示「好像真的〜似的」。' },
            { text: 'いかにも', reason: '「いかにも」表確實像但不如「さも」帶有假裝感。' },
            { text: 'あたかも', reason: '「あたかも」表彷彿但更書面化。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「さも」表好像真的（可能是裝的）',
            analysis: '「さも＋〜そうに/ように」表示「好像真的〜似的」「一副〜的樣子」，常帶有「其實不是那樣但裝成那樣」的含意。',
            comparisons: ['さも：好像（可能是裝的）', 'いかにも：確實（看起來典型）', 'あたかも：彷彿（書面語/比喻）'],
            commonMistakes: ['○ さも知っているかのように / × さもの知っている → 「さも」是副詞'],
        },
    },
    // ━━━ さもないと (otherwise) ━━━
    {
        id: 'g_n1_272', category: 'grammar', level: 'N1', tags: ['expression', 'warning'],
        stem: '早{はや}く出{で}なさい。___、遅刻{ちこく}するよ。',
        stemZh: '快出門。不然的話會遲到喔。',
        options: [
            { text: 'でないと', reason: '「でないと」也表否則但不如「さもないと」正式。' },
            { text: 'さもないと', reason: '正確！「さもないと」表示「否則」「不然的話」。' },
            { text: 'そうでなければ', reason: '「そうでなければ」也表否則但冗長。' },
            { text: 'それとも', reason: '「それとも」表或者，語義不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「さもないと」表否則（警告）',
            analysis: '「さもないと」表示「否則」「不那樣做的話」，常用於警告或提醒，後面接不好的結果。',
            comparisons: ['さもないと：否則（警告/書面語）', 'でないと：不然（一般）', 'そうしないと：不那樣做的話（口語）'],
            commonMistakes: ['○ さもないと / × さもなくと → 固定用法「さもないと」'],
        },
    },
    // ━━━ さぞ (surely / must be) ━━━
    {
        id: 'g_n1_273', category: 'grammar', level: 'N1', tags: ['expression', 'empathy'],
        stem: '合格{ごうかく}おめでとう。ご両親{りょうしん}も___お喜{よろこ}びでしょう。',
        stemZh: '恭喜合格。令尊令堂想必也很高興吧。',
        options: [
            { text: 'さぞ', reason: '正確！「さぞ」表示「想必」「一定」。' },
            { text: 'きっと', reason: '「きっと」表一定但不如「さぞ」強調同理心。' },
            { text: 'おそらく', reason: '「おそらく」表大概但語氣太弱。' },
            { text: 'たぶん', reason: '「たぶん」表也許但過於口語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「さぞ」表推測他人感受',
            analysis: '「さぞ＋〜でしょう/だろう」表示「想必〜吧」「一定很〜吧」，用於推測他人的感受，帶有同理心。',
            comparisons: ['さぞ：想必（推測感受/同理心）', 'きっと：一定（確信推測）', 'おそらく：大概（不確定推測）'],
            commonMistakes: ['○ さぞお喜びでしょう / × さぞ喜んだ → 常與「でしょう」「だろう」搭配'],
        },
    },
    // ━━━ 始末だ (end up / what a mess) ━━━
    {
        id: 'g_n1_274', category: 'grammar', level: 'N1', tags: ['expression', 'result'],
        stem: '最初{さいしょ}は冗談{じょうだん}だったのに、最後{さいご}には喧嘩{けんか}する___。',
        stemZh: '一開始只是開玩笑，最後居然吵起架來了。',
        options: [
            { text: '始末だ', reason: '正確！「始末だ」表示「落到〜的地步」（負面結局）。' },
            { text: 'ことになった', reason: '「ことになった」表結果但不含批判。' },
            { text: '羽目になった', reason: '「羽目になった」表落得〜下場但語感稍不同。' },
            { text: 'わけだ', reason: '「わけだ」表難怪但不含批判。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「始末だ」表事態惡化到不好的結局',
            analysis: '「V辭書形＋始末だ」表示「最後竟然〜」「落到〜的地步」，用於批判事態惡化的結局。',
            comparisons: ['始末だ：落到〜地步（批判/負面結局）', '羽目になる：落得〜下場（不願意的結果）', 'ことになる：結果〜（中性）'],
            commonMistakes: ['○ 喧嘩する始末だ / × 喧嘩した始末だ → 用辭書形'],
        },
    },
    // ━━━ そびれる (miss the chance) ━━━
    {
        id: 'g_n1_275', category: 'grammar', level: 'N1', tags: ['expression', 'failure'],
        stem: '言{い}い___タイミングを逃{のが}してしまった。',
        stemZh: '錯過了說的時機。',
        options: [
            { text: 'そびれて', reason: '正確！「そびれる」表示「錯過〜的機會」。' },
            { text: '損ねて', reason: '「損ねる」也表沒做成但語感不同。' },
            { text: '忘れて', reason: '「忘れて」表忘記，不表錯過時機。' },
            { text: '遅れて', reason: '「遅れて」表來晚了，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「そびれる」表錯過時機',
            analysis: '「Vます形＋そびれる」表示「錯過了做〜的機會」「沒能做成〜」，帶有遺憾感。',
            comparisons: ['そびれる：錯過時機做〜', '損ねる：沒做成〜/損害', 'ずじまい：終究沒能做〜'],
            commonMistakes: ['○ 言いそびれる / × 言うそびれる → 用ます形去「ます」接「そびれる」'],
        },
    },
    // ━━━ 損なう (fail to / harm) ━━━
    {
        id: 'g_n1_276', category: 'grammar', level: 'N1', tags: ['expression', 'failure'],
        stem: '大事{だいじ}なチャンスを逃{のが}し___。',
        stemZh: '差點錯過了重要的機會。',
        options: [
            { text: '損ねた', reason: '語義相近，「損ねる」也表沒做成。' },
            { text: '損なった', reason: '正確！「損なう」表示「差點沒做成」「損害了」。' },
            { text: 'そびれた', reason: '「そびれた」也可以但「損なう」更強調差一點。' },
            { text: 'かけた', reason: '「かけた」表差點但接法不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「損なう」表差點沒做成或損害',
            analysis: '「Vます形＋損なう」有兩個意思：①「差點沒做成〜」②「損害了〜」。',
            comparisons: ['損なう：差點沒做成/損害', '損ねる：同上（同義）', 'そびれる：錯過機會做〜'],
            commonMistakes: ['○ 逃し損なった / × 逃す損なった → 用ます形去「ます」接「損なう」'],
        },
    },
    // ━━━ 術がない (no way to) ━━━
    {
        id: 'g_n1_277', category: 'grammar', level: 'N1', tags: ['literary', 'inability'],
        stem: '証拠{しょうこ}がない以上{いじょう}、彼{かれ}を救{すく}う___。',
        stemZh: '既然沒有證據，就無計可施去救他。',
        options: [
            { text: 'すべがない', reason: '正確！「術がない」表示「沒有辦法〜」。' },
            { text: '方法がない', reason: '「方法がない」也可以但不如「術がない」書面化。' },
            { text: 'ようがない', reason: '「ようがない」也表沒辦法但接法不同。' },
            { text: 'わけにはいかない', reason: '「わけにはいかない」表不能做，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「術がない」表無計可施',
            analysis: '「V辭書形＋術がない」表示「無計可施」「沒有辦法〜」，是書面語表現。',
            comparisons: ['術がない：無計可施（書面語）', 'ようがない：沒辦法〜（一般）', '手段がない：沒有手段（一般）'],
            commonMistakes: ['○ 救うすべがない / × 救うの術がない → 辭書形直接接「術がない」'],
        },
    },
    // ━━━ た弾みに (in the momentum of) ━━━
    {
        id: 'g_n1_278', category: 'grammar', level: 'N1', tags: ['expression', 'accidental'],
        stem: '立{た}ち上{あ}がった___、コップを落{お}としてしまった。',
        stemZh: '站起來的那一瞬間，不小心打翻了杯子。',
        options: [
            { text: '弾みに', reason: '正確！「た弾みに」表示「在做〜的那個勢頭上（意外地）」。' },
            { text: '途端に', reason: '「途端に」也表一〜就但不如前者強調偶然性。' },
            { text: '瞬間に', reason: '「瞬間に」表瞬間但不強調意外。' },
            { text: 'ついでに', reason: '「ついでに」表順便，語義完全不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「た弾みに」表因某動作而意外發生',
            analysis: '「Vた形＋弾みに」表示「在做〜的那個勢頭上，意外地發生了〜」，強調偶然性和意外性。',
            comparisons: ['た弾みに：趁勢意外地（偶然/意外）', 'た拍子に：同上（同義）', 'た途端に：一〜就（一般迅速）'],
            commonMistakes: ['○ 立ち上がった弾みに / × 立ち上がる弾みに → 必須用た形'],
        },
    },
    // ━━━ たところで (even if) ━━━
    {
        id: 'g_n1_279', category: 'grammar', level: 'N1', tags: ['expression', 'futility'],
        stem: '今{いま}さら後悔{こうかい}した___、どうにもならない。',
        stemZh: '事到如今就算後悔也於事無補。',
        options: [
            { text: 'ところで', reason: '正確！「たところで」表示「即使做了〜也沒用」。' },
            { text: 'としても', reason: '「としても」表假設讓步但不如前者強調徒勞。' },
            { text: 'にしても', reason: '「にしても」表讓步但不強調無用。' },
            { text: 'からには', reason: '「からには」表既然，語義完全不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たところで」表即使做了也沒用',
            analysis: '「Vた形＋ところで」表示「即使〜也沒有意義」「做了〜也白費」，後面接否定性結論。',
            comparisons: ['たところで：即使〜也沒用（徒勞感）', 'としても：即使（一般假設讓步）', 'ても：即使（一般讓步）'],
            commonMistakes: ['○ 後悔したところで / × 後悔するところで → 用た形接「ところで」'],
        },
    },
    // ━━━ たら最後 (once... it's over) ━━━
    {
        id: 'g_n1_280', category: 'grammar', level: 'N1', tags: ['expression', 'warning'],
        stem: 'あのゲームを始{はじ}め___、止{や}められなくなる。',
        stemZh: '一旦開始玩那個遊戲就停不下來了。',
        options: [
            { text: 'たが最後', reason: '正確！「たが最後」表示「一旦〜就完了」。' },
            { text: 'たら', reason: '「たら」表條件但不如前者強調不可挽回。' },
            { text: 'ると', reason: '「ると」表條件但不強調嚴重後果。' },
            { text: 'てからは', reason: '「てからは」表之後但不強調不可逆。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たが最後」表一旦〜就完了',
            analysis: '「Vたら最後/Vたが最後」表示「一旦做了〜就不可收拾」「只要〜了就完了」，帶有警告語氣。',
            comparisons: ['たら最後/たが最後：一旦〜就完了（不可逆/警告）', 'たら：如果〜的話（一般條件）', 'てからというもの：自從〜以後'],
            commonMistakes: ['○ 始めたが最後 / × 始めるが最後 → 用た形接「が最後」'],
        },
    },
    // ━━━ ただ〜のみだ (only) ━━━
    {
        id: 'g_n1_281', category: 'grammar', level: 'N1', tags: ['literary', 'limitation'],
        stem: '今{いま}はただ回復{かいふく}を祈{いの}る___。',
        stemZh: '現在唯有祈禱康復。',
        options: [
            { text: 'のみだ', reason: '正確！「ただ〜のみだ」表示「唯有〜」「只能〜」。' },
            { text: 'だけだ', reason: '「だけだ」表只有但不如「のみだ」書面化。' },
            { text: 'ばかりだ', reason: '「ばかりだ」表一直但語義不同。' },
            { text: 'ほかない', reason: '「ほかない」也表只能但接法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ただ〜のみだ」表唯有（文語）',
            analysis: '「ただ＋V辭書形＋のみだ」是文語表現，表示「唯有〜」「只能〜」，強調別無選擇。',
            comparisons: ['ただ〜のみだ：唯有（文語/強調限定）', 'だけだ：只是（一般限定）', 'しかない：只能（消極限定）'],
            commonMistakes: ['○ ただ祈るのみだ / × ただ祈るのみ → 可以省略「だ」'],
        },
    },
    // ━━━ ためしがない (never happened) ━━━
    {
        id: 'g_n1_282', category: 'grammar', level: 'N1', tags: ['expression', 'negation'],
        stem: 'あの人{ひと}が約束{やくそく}を守{まも}った___。',
        stemZh: '那個人從來沒有遵守過約定。',
        options: [
            { text: 'ことがない', reason: '「ことがない」表沒有經驗但不如「ためしがない」強調。' },
            { text: 'ためしがない', reason: '正確！「ためしがない」表示「從來沒有過」「前所未有」。' },
            { text: 'はずがない', reason: '「はずがない」表不可能，語義不同。' },
            { text: 'わけがない', reason: '「わけがない」表不可能，語義不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ためしがない」表從未有過先例',
            analysis: '「Vた形＋ためしがない」表示「從來沒有做過〜」「前所未有」，比「ことがない」語氣更強。',
            comparisons: ['ためしがない：從來沒有（強調/批判）', 'ことがない：沒有〜過（一般經驗）', 'はずがない：不可能（推測）'],
            commonMistakes: ['○ 守ったためしがない / × 守るためしがない → 用た形'],
        },
    },
    // ━━━ て敵わない (unbearably) ━━━
    {
        id: 'g_n1_283', category: 'grammar', level: 'N1', tags: ['expression', 'degree'],
        stem: '夏{なつ}は暑{あつ}く___。',
        stemZh: '夏天熱得受不了。',
        options: [
            { text: 'てたまらない', reason: '「てたまらない」也表受不了但「てかなわない」更口語化。' },
            { text: 'てならない', reason: '「てならない」表自然產生但不如前者強調受不了。' },
            { text: 'てかなわない', reason: '正確！「てかなわない」表示「〜得受不了」。' },
            { text: 'てしかたない', reason: '「てしかたない」表沒辦法但語氣不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「てかなわない」表受不了',
            analysis: '「Vて形/Adj＋くて＋かなわない」表示「〜得受不了」「〜得吃不消」，多用於不滿或困擾。',
            comparisons: ['てかなわない：〜得受不了（不滿/困擾）', 'てたまらない：〜得不得了（程度極大）', 'てならない：自然地〜（無法抑制）'],
            commonMistakes: ['○ 暑くてかなわない / × 暑いてかなわない → い形容詞用「くて」接'],
        },
    },
    // ━━━ てからというもの (ever since) ━━━
    {
        id: 'g_n1_284', category: 'grammar', level: 'N1', tags: ['expression', 'change'],
        stem: '子{こ}どもが生{う}まれ___、生活{せいかつ}が一変{いっぺん}した。',
        stemZh: '自從孩子出生以後，生活徹底改變了。',
        options: [
            { text: 'てから', reason: '「てから」表之後但不強調持續變化。' },
            { text: 'てからというもの', reason: '正確！「てからというもの」表示「自從〜以後（一直）」。' },
            { text: 'て以来', reason: '「て以来」也表自從但不如前者強調變化。' },
            { text: 'た途端に', reason: '「た途端に」表一〜就但不表持續。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「てからというもの」表自從以後劇變',
            analysis: '「Vて形＋からというもの」表示「自從〜以後（狀況就一直不同了）」，強調某事之後持續的變化。',
            comparisons: ['てからというもの：自從〜以後一直（強調持續變化）', 'て以来：自從〜以來（一般）', 'てから：〜之後（時序）'],
            commonMistakes: ['○ 生まれてからというもの / × 生まれるからというもの → 用て形接「からというもの」'],
        },
    },
    // ━━━ てみせる (do and show / will definitely) ━━━
    {
        id: 'g_n1_285', category: 'grammar', level: 'N1', tags: ['expression', 'determination'],
        stem: '必{かなら}ず合格{ごうかく}し___！',
        stemZh: '我一定會考上給你看！',
        options: [
            { text: 'てみせる', reason: '正確！「てみせる」表示「一定要做到〜給人看」。' },
            { text: 'てみる', reason: '「てみる」表嘗試但不表決心。' },
            { text: 'てやる', reason: '「てやる」表為你做但不如前者強調決心。' },
            { text: 'てみたい', reason: '「てみたい」表想嘗試，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てみせる」表決心做給人看',
            analysis: '「Vて形＋みせる」表示「一定要做到〜」「做〜給你看」，帶有強烈的決心和自信。',
            comparisons: ['てみせる：一定做到（決心/自信）', 'てみる：嘗試做（試試看）', 'てやる：為你做/一定做（決心/口語）'],
            commonMistakes: ['○ 合格してみせる / × 合格をしてみせる → 用て形接「みせる」'],
        },
    },
    // ━━━ てしかるべきだ (should rightfully) ━━━
    {
        id: 'g_n1_286', category: 'grammar', level: 'N1', tags: ['literary', 'obligation'],
        stem: 'このような問題{もんだい}はもっと早{はや}く対処{たいしょ}し___。',
        stemZh: '這樣的問題理應更早處理才對。',
        options: [
            { text: 'てしかるべきだ', reason: '正確！「てしかるべきだ」表示「理應〜」。' },
            { text: 'るべきだ', reason: '「るべきだ」表應該但不如前者強調理所當然。' },
            { text: 'なければならない', reason: '「なければならない」表必須但不表理應。' },
            { text: 'てもよさそうだ', reason: '「てもよさそうだ」表也該〜但語氣太弱。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てしかるべきだ」表理所當然應該',
            analysis: '「Vて形＋しかるべきだ」是文語表現，表示「理應〜」「本該〜才對」。',
            comparisons: ['てしかるべきだ：理應（文語/強調理所當然）', 'るべきだ：應該（一般義務）', 'て当然だ：〜是理所當然的'],
            commonMistakes: ['○ 対処してしかるべきだ / × 対処するしかるべきだ → 用て形接'],
        },
    },
    // ━━━ て済むことではない (can't be settled by) ━━━
    {
        id: 'g_n1_287', category: 'grammar', level: 'N1', tags: ['expression', 'insufficiency'],
        stem: '人{ひと}の命{いのち}に関{かか}わることだ。謝{あやま}っ___。',
        stemZh: '這關乎人命。不是道個歉就能了事的。',
        options: [
            { text: 'て済むことではない', reason: '正確！「て済むことではない」表示「不是〜就能了事的」。' },
            { text: 'てはいけない', reason: '「てはいけない」表不可以，語義不同。' },
            { text: 'ても仕方がない', reason: '「ても仕方がない」表〜也沒用但語義不同。' },
            { text: 'てもいい', reason: '「てもいい」表可以，語義完全不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「て済むことではない」表不能草率了事',
            analysis: '「Vて形＋済むことではない」表示「不是做了〜就能了事的」「不能僅靠〜來解決」。',
            comparisons: ['て済むことではない：不是〜就能了事（事態嚴重）', 'では済まない：光〜不行（不夠）', 'てもどうにもならない：〜也無濟於事'],
            commonMistakes: ['○ 謝って済むことではない / × 謝ること済むことではない → 用て形接'],
        },
    },
    // ━━━ 手前 (in front of / considering) ━━━
    {
        id: 'g_n1_288', category: 'grammar', level: 'N1', tags: ['expression', 'face'],
        stem: '皆{みな}に宣言{せんげん}した___、途中{とちゅう}で諦{あきら}めるわけにはいかない。',
        stemZh: '既然在大家面前宣言了，就不能半途而廢。',
        options: [
            { text: '手前', reason: '正確！「手前」表示「考慮到面子」「在〜面前說了所以」。' },
            { text: '以上', reason: '「以上」表既然但不強調面子。' },
            { text: 'からには', reason: '「からには」表既然但不強調面子。' },
            { text: 'だけに', reason: '「だけに」表正因為但語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「手前」表顧及面子或立場',
            analysis: '「Vた形/N＋の＋手前」表示「考慮到在〜面前（說了/做了的事），所以不得不〜」。',
            comparisons: ['手前：考慮到面子（在人前做了所以）', '以上：既然（一般義務）', 'からには：既然（決心/責任）'],
            commonMistakes: ['○ 宣言した手前 / × 宣言する手前 → 常用た形接'],
        },
    },
    // ━━━ ても差し支えない (it's fine even if) ━━━
    {
        id: 'g_n1_289', category: 'grammar', level: 'N1', tags: ['formal', 'permission'],
        stem: 'この書類{しょるい}はコピーし___。',
        stemZh: '這份文件影印也沒關係。',
        options: [
            { text: 'ても差し支えない', reason: '正確！「ても差し支えない」表示「即使〜也沒關係」。' },
            { text: 'てもいい', reason: '「てもいい」也表可以但不夠正式。' },
            { text: 'ても構わない', reason: '「ても構わない」也表無妨但不如前者正式。' },
            { text: 'てはいけない', reason: '「てはいけない」表不可以，語義相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ても差し支えない」表無妨（正式許可）',
            analysis: '「Vて形＋も差し支えない」是非常正式的表現，表示「即使做了〜也沒問題」「〜也無妨」。',
            comparisons: ['ても差し支えない：無妨（最正式）', 'ても構わない：無妨（正式）', 'てもいい：可以（一般）'],
            commonMistakes: ['○ コピーしても差し支えない / × コピーして差し支えない → 必須有「も」'],
        },
    },
    // ━━━ と相まって (combined with) ━━━
    {
        id: 'g_n1_290', category: 'grammar', level: 'N1', tags: ['formal', 'combination'],
        stem: '好天気{こうてんき}___、イベントは大盛況{だいせいきょう}だった。',
        stemZh: '加上好天氣，活動盛況空前。',
        options: [
            { text: 'と相まって', reason: '正確！「と相まって」表示「與〜相結合」。' },
            { text: 'と合わせて', reason: '「と合わせて」表合計但語義不同。' },
            { text: 'とともに', reason: '「とともに」表同時但不如前者強調相互作用。' },
            { text: 'に加えて', reason: '「に加えて」表加上但不如前者強調相乘效果。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「と相まって」表相互結合產生效果',
            analysis: '「N＋と相まって」表示「與〜相結合」「加上〜的效果」，強調兩者結合產生更大的效果。',
            comparisons: ['と相まって：與〜相結合（相乘效果）', 'に加えて：加上（追加）', 'とともに：同時/隨著'],
            commonMistakes: ['○ 好天気と相まって / × 好天気が相まって → 助詞用「と」'],
        },
    },
    // ━━━ とあれば (if it is the case that) ━━━
    {
        id: 'g_n1_291', category: 'grammar', level: 'N1', tags: ['expression', 'conditional'],
        stem: '子{こ}どものため___、どんな苦労{くろう}もいとわない。',
        stemZh: '如果是為了孩子，什麼辛苦都不怕。',
        options: [
            { text: 'であれば', reason: '「であれば」也表條件但不如「とあれば」強調覺悟。' },
            { text: 'とあれば', reason: '正確！「とあれば」表示「如果是〜的話（那就）」。' },
            { text: 'ならば', reason: '「ならば」表假設但不如前者強調特殊性。' },
            { text: 'としたら', reason: '「としたら」表假設但語氣不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「とあれば」表如果是那種情況的話',
            analysis: '「N/文＋とあれば」表示「如果是〜的話（那就什麼都可以做）」，後面常接表示覺悟或決心的內容。',
            comparisons: ['とあれば：如果是〜的話（覺悟/決心）', 'であれば：如果是（一般條件）', 'とあって：因為是〜所以（原因）'],
            commonMistakes: ['○ ためとあれば / × ためにとあれば → 直接接「とあれば」'],
        },
    },
    // ━━━ にしたところで (even for) ━━━
    {
        id: 'g_n1_292', category: 'grammar', level: 'N1', tags: ['expression', 'concession'],
        stem: '専門家{せんもんか}___、この問題{もんだい}は簡単{かんたん}ではない。',
        stemZh: '即使對專家來說，這個問題也不簡單。',
        options: [
            { text: 'にとっても', reason: '「にとっても」表對〜來說也但不如前者正式。' },
            { text: 'にしたところで', reason: '正確！「にしたところで」表示「即使是〜也」。' },
            { text: 'としたら', reason: '「としたら」表假設，語義不同。' },
            { text: 'にしたって', reason: '「にしたって」也可以但較口語。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「にしたところで」表即使是某人也',
            analysis: '「N＋にしたところで」表示「即使是〜的人也〜」「就算站在〜的立場也〜」，是正式的讓步表現。',
            comparisons: ['にしたところで：即使是〜也（正式讓步）', 'にしても：即使（一般讓步）', 'としたところで：即使那樣也（更正式）'],
            commonMistakes: ['○ 専門家にしたところで / × 専門家がにしたところで → 名詞直接接'],
        },
    },
    // ━━━ にして (at the point of / both) ━━━
    {
        id: 'g_n1_293', category: 'grammar', level: 'N1', tags: ['literary', 'time'],
        stem: '40歳{さい}___初{はじ}めてその道理{どうり}がわかった。',
        stemZh: '到了四十歲才第一次明白那個道理。',
        options: [
            { text: 'になって', reason: '「になって」表變成了但不如「にして」文語化。' },
            { text: 'にして', reason: '正確！「にして」表示「到了〜的時候才」。' },
            { text: 'のとき', reason: '「のとき」表〜的時候但語體太普通。' },
            { text: 'ではじめて', reason: '語法不自然。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「にして」表到了某時點才',
            analysis: '「N（時間/年齡）＋にして」表示「到了〜才〜」。也可表「既是〜又是〜」或「連〜都」。',
            comparisons: ['にして：到了〜才/既是〜又是（文語）', 'になって：變成〜之後（一般）', 'で：在〜歲時（口語）'],
            commonMistakes: ['○ 40歳にして / × 40歳をにして → 名詞直接接「にして」'],
        },
    },
    // ━━━ に堪える (worthy of) ━━━
    {
        id: 'g_n1_294', category: 'grammar', level: 'N1', tags: ['literary', 'evaluation'],
        stem: 'この作品{さくひん}は鑑賞{かんしょう}___価値{かち}がある。',
        stemZh: '這部作品有值得欣賞的價值。',
        options: [
            { text: 'するに値する', reason: '「に値する」也表值得但接法不同。' },
            { text: 'にたえる', reason: '正確！「にたえる」表示「值得〜」「經得起〜」。' },
            { text: 'に足る', reason: '「に足る」也表值得但語感不同。' },
            { text: 'にふさわしい', reason: '「にふさわしい」表適合但語義稍不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「にたえる」表值得（正面評價）',
            analysis: '「N＋にたえる」表示「值得〜」「經得起〜」（正面意義）。與「にたえない」（不堪/忍不住）區別。',
            comparisons: ['にたえる：值得/經得起（正面）', 'にたえない：不堪/忍不住（負面/感情）', 'に値する：值得（書面語）'],
            commonMistakes: ['○ 鑑賞にたえる / × 鑑賞をたえる → 助詞用「に」'],
        },
    },
    // ━━━ に足らない (not worth) ━━━
    {
        id: 'g_n1_295', category: 'grammar', level: 'N1', tags: ['literary', 'evaluation'],
        stem: 'そんな些細{ささい}なことは取{と}り上{あ}げる___。',
        stemZh: '那種瑣碎的事不值得拿出來討論。',
        options: [
            { text: 'に足らない', reason: '正確！「に足らない」表示「不值得〜」。' },
            { text: 'に値しない', reason: '「に値しない」也表不值得但接法不同。' },
            { text: 'までもない', reason: '「までもない」表沒必要但語感不同。' },
            { text: 'に及ばない', reason: '「に及ばない」表不需要但語義稍不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に足らない」表不值一提',
            analysis: '「V辭書形＋に足らない/に足りない」表示「不值得〜」「不足以〜」「微不足道」，是書面語表現。',
            comparisons: ['に足らない：不值得（書面語/否定評價）', 'に足る：值得（肯定評價）', 'に値しない：不值得（書面語）'],
            commonMistakes: ['○ 取り上げるに足らない / × 取り上げに足らない → 用辭書形接'],
        },
    },
    // ━━━ に照らして (in light of) ━━━
    {
        id: 'g_n1_296', category: 'grammar', level: 'N1', tags: ['formal', 'basis'],
        stem: '法律{ほうりつ}___、その行為{こうい}は違法{いほう}だ。',
        stemZh: '對照法律來看，那個行為是違法的。',
        options: [
            { text: 'によると', reason: '「によると」表根據但不如前者正式。' },
            { text: 'に照らして', reason: '正確！「に照らして」表示「對照〜」「參照〜」。' },
            { text: 'に基づいて', reason: '「に基づいて」表基於但語義稍不同。' },
            { text: 'に即して', reason: '「に即して」表結合事實但語義稍不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「に照らして」表對照基準判斷',
            analysis: '「N＋に照らして」表示「對照〜來看」「參照〜來判斷」，用於以某基準或規範為依據。',
            comparisons: ['に照らして：對照〜判斷（基準/規範）', 'に基づいて：基於〜（根據/事實）', 'に即して：結合〜（現實/實際）'],
            commonMistakes: ['○ 法律に照らして / × 法律を照らして → 助詞用「に」'],
        },
    },
    // ━━━ にとどまらず (not limited to) ━━━
    {
        id: 'g_n1_297', category: 'grammar', level: 'N1', tags: ['formal', 'expansion'],
        stem: '彼{かれ}の影響力{えいきょうりょく}は国内{こくない}___、海外{かいがい}にまで及{およ}んでいる。',
        stemZh: '他的影響力不僅限於國內，還延伸到了海外。',
        options: [
            { text: 'だけでなく', reason: '「だけでなく」表不僅但不如前者正式。' },
            { text: 'にとどまらず', reason: '正確！「にとどまらず」表示「不僅限於〜」。' },
            { text: 'ばかりか', reason: '「ばかりか」表不僅但語體不同。' },
            { text: 'のみならず', reason: '「のみならず」也可以，是同義的正式表現。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「にとどまらず」表不僅限於',
            analysis: '「N＋にとどまらず」表示「不僅限於〜」「不止〜」，後面常接更大範圍或更高程度的內容。',
            comparisons: ['にとどまらず：不僅限於（正式/擴展範圍）', 'のみならず：不僅（文語/同義）', 'だけでなく：不僅（一般）'],
            commonMistakes: ['○ 国内にとどまらず / × 国内がとどまらず → 助詞用「に」'],
        },
    },
    // ━━━ には無理がある (unreasonable) ━━━
    {
        id: 'g_n1_298', category: 'grammar', level: 'N1', tags: ['expression', 'evaluation'],
        stem: '彼{かれ}一人{ひとり}でこのプロジェクトを完成{かんせい}させるの___。',
        stemZh: '要他一個人完成這個專案有點勉強。',
        options: [
            { text: 'は難しい', reason: '「は難しい」表困難但不如「には無理がある」強調不合理。' },
            { text: 'には無理がある', reason: '正確！「には無理がある」表示「有些勉強」「不太可能」。' },
            { text: 'は不可能だ', reason: '「は不可能だ」表不可能但過於絕對。' },
            { text: 'には限界がある', reason: '「には限界がある」表有極限但語義稍不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「には無理がある」表有些勉強',
            analysis: '「N/V辭書形＋の＋には無理がある」表示「〜有些勉強」「〜不太可能」，委婉地指出某事不合理。',
            comparisons: ['には無理がある：有些勉強（委婉否定）', 'は不可能だ：不可能（直接否定）', 'には限界がある：有極限（客觀指出）'],
            commonMistakes: ['○ 完成させるのには無理がある / × 完成するには無理がある → 用「の」名詞化'],
        },
    },
    // ━━━ によらず (regardless of) ━━━
    {
        id: 'g_n1_299', category: 'grammar', level: 'N1', tags: ['formal', 'universal'],
        stem: '年齢{ねんれい}___、誰{だれ}でも参加{さんか}できる。',
        stemZh: '不論年齡，任何人都可以參加。',
        options: [
            { text: 'を問わず', reason: '「を問わず」也表不論但接法不同。' },
            { text: 'にかかわらず', reason: '「にかかわらず」也表不論但語氣不同。' },
            { text: 'によらず', reason: '正確！「によらず」表示「不論〜」「不管〜」。' },
            { text: 'にもかかわらず', reason: '「にもかかわらず」表儘管但語義不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「によらず」表不論（方法/條件）',
            analysis: '「N＋によらず」表示「不論〜如何」「不管〜」，多用於正式書面語。',
            comparisons: ['によらず：不論（方法/條件/正式）', 'を問わず：不問（性別/年齡等）', 'にかかわらず：不管（一般正式）'],
            commonMistakes: ['○ 年齢によらず / × 年齢がよらず → 助詞用「に」'],
        },
    },
    // ━━━ を踏まえて (based on) ━━━
    {
        id: 'g_n1_300', category: 'grammar', level: 'N1', tags: ['formal', 'basis'],
        stem: '過去{かこ}の経験{けいけん}___、新{あたら}しい計画{けいかく}を立{た}てた。',
        stemZh: '基於過去的經驗，制定了新計劃。',
        options: [
            { text: 'を踏まえて', reason: '正確！「を踏まえて」表示「基於〜」「考慮到〜」。' },
            { text: 'に基づいて', reason: '「に基づいて」也表基於但語感不同。' },
            { text: 'をもとに', reason: '「をもとに」表以〜為根據但不如前者正式。' },
            { text: 'を通じて', reason: '「を通じて」表透過，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を踏まえて」表基於、考慮到',
            analysis: '「N＋を踏まえて」表示「基於〜」「立足於〜」「考慮到〜」，多用於正式的決策或計劃場合。',
            comparisons: ['を踏まえて：基於/考慮到（正式決策）', 'に基づいて：基於（規則/數據）', 'をもとに：以〜為根據（一般）'],
            commonMistakes: ['○ 経験を踏まえて / × 経験に踏まえて → 助詞用「を」'],
        },
    },
    // ━━━ を経て (through / via) ━━━
    {
        id: 'g_n1_301', category: 'grammar', level: 'N1', tags: ['formal', 'process'],
        stem: '長{なが}い交渉{こうしょう}___、ようやく合意{ごうい}に達{たっ}した。',
        stemZh: '經過漫長的談判，終於達成了共識。',
        options: [
            { text: 'を経て', reason: '正確！「を経て」表示「經過〜」「經由〜」。' },
            { text: 'を通して', reason: '「を通して」表透過但不強調過程。' },
            { text: 'の末に', reason: '「の末に」表經過後但接法不同。' },
            { text: 'を超えて', reason: '「を超えて」表超越，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を経て」表經過過程',
            analysis: '「N＋を経て」表示「經過〜」「經由〜」，強調過程或階段。',
            comparisons: ['を経て：經過（過程/階段）', 'を通して：透過（手段/方式）', 'の末に：經過〜之後（結果）'],
            commonMistakes: ['○ 交渉を経て / × 交渉に経て → 助詞用「を」'],
        },
    },
    // ━━━ を控えて (facing / on the verge of) ━━━
    {
        id: 'g_n1_302', category: 'grammar', level: 'N1', tags: ['formal', 'timing'],
        stem: '卒業{そつぎょう}___、学生{がくせい}たちは就職活動{しゅうしょくかつどう}に追{お}われている。',
        stemZh: '面臨畢業，學生們正忙於求職活動。',
        options: [
            { text: 'を前にして', reason: '「を前にして」也表面臨但不如「を控えて」正式。' },
            { text: 'を控えて', reason: '正確！「を控えて」表示「面臨〜」「〜迫在眉睫」。' },
            { text: 'に際して', reason: '「に際して」表在〜之際但不如前者強調迫近。' },
            { text: 'に先立って', reason: '「に先立って」表在〜之前但語義不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「を控えて」表重要事件迫近',
            analysis: '「N＋を控えて」表示「即將迎來〜」「〜迫在眉睫」，用於重要事件或日期即將到來。',
            comparisons: ['を控えて：面臨/迫近（正式）', 'を前にして：面對（一般）', 'に際して：在〜之際（正式）'],
            commonMistakes: ['○ 卒業を控えて / × 卒業が控えて → 助詞用「を」'],
        },
    },
    // ━━━ をいいことに (taking advantage of) ━━━
    {
        id: 'g_n1_303', category: 'grammar', level: 'N1', tags: ['expression', 'criticism'],
        stem: '親{おや}がいない___、子{こ}どもたちはお菓子{かし}を食{た}べ放題{ほうだい}だ。',
        stemZh: '趁著父母不在，孩子們零食吃個不停。',
        options: [
            { text: 'をいいことに', reason: '正確！「をいいことに」表示「趁著〜之便」（批判語氣）。' },
            { text: 'を利用して', reason: '「を利用して」表利用但不含批判。' },
            { text: 'をきっかけに', reason: '「をきっかけに」表以〜為契機，語義不同。' },
            { text: 'だからといって', reason: '「だからといって」表即便如此但語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「をいいことに」表趁機（批判）',
            analysis: '「N/文＋をいいことに」表示「利用〜為藉口」「趁著〜之便」，帶有批判語氣。',
            comparisons: ['をいいことに：趁著〜之便（批判）', 'にかこつけて：以〜為藉口（批判）', 'を利用して：利用（中性）'],
            commonMistakes: ['○ いないのをいいことに / × いないをいいことに → 常用「の」名詞化'],
        },
    },
    // ━━━ を顧みず (regardless of / ignoring) ━━━
    {
        id: 'g_n1_304', category: 'grammar', level: 'N1', tags: ['literary', 'disregard'],
        stem: '危険{きけん}___、消防士{しょうぼうし}は建物{たてもの}に突入{とつにゅう}した。',
        stemZh: '不顧危險，消防員衝進了建築物。',
        options: [
            { text: 'にもかかわらず', reason: '「にもかかわらず」表儘管但不如「を顧みず」強調不顧。' },
            { text: 'を顧みず', reason: '正確！「を顧みず」表示「不顧〜」「不在乎〜」。' },
            { text: 'に反して', reason: '「に反して」表違反但語義不同。' },
            { text: 'をよそに', reason: '「をよそに」也表不顧但語感不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「を顧みず」表不顧一切',
            analysis: '「N＋を顧みず」表示「不顧〜」「不在乎〜」，帶有勇敢或無畏的語感。',
            comparisons: ['を顧みず：不顧（勇敢/書面語）', 'をよそに：不管（冷淡/不理會）', 'をものともせずに：蔑視（勇敢/挑戰）'],
            commonMistakes: ['○ 危険を顧みず / × 危険が顧みず → 助詞用「を」'],
        },
    },
    // ━━━ を限りに (as of / limited to) ━━━
    {
        id: 'g_n1_305', category: 'grammar', level: 'N1', tags: ['formal', 'deadline'],
        stem: '本日{ほんじつ}___、この店{みせ}は閉店{へいてん}いたします。',
        stemZh: '今日起，本店停止營業。',
        options: [
            { text: 'をもって', reason: '「をもって」也表以〜為界限但語感略不同。' },
            { text: 'を限りに', reason: '正確！「を限りに」表示「以〜為最後」。' },
            { text: 'をもちまして', reason: '「をもちまして」是「をもって」的敬語形式。' },
            { text: 'から', reason: '「から」表從〜開始但語體太口語。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「を限りに」表以某時為界限',
            analysis: '「N（時間）＋を限りに」表示「以〜為最後」「到〜為止」，多用於宣布結束或中止。',
            comparisons: ['を限りに：以〜為限（宣布結束）', 'をもって：以〜（正式界限）', 'まで：到〜為止（一般）'],
            commonMistakes: ['○ 本日を限りに / × 本日が限りに → 助詞用「を」'],
        },
    },
    // ━━━ を兼ねて (also serving as) ━━━
    {
        id: 'g_n1_306', category: 'grammar', level: 'N1', tags: ['expression', 'dual_purpose'],
        stem: '運動{うんどう}___、毎朝{まいあさ}会社{かいしゃ}まで歩{ある}いている。',
        stemZh: '兼作運動，每天早上走路去公司。',
        options: [
            { text: 'を兼ねて', reason: '正確！「を兼ねて」表示「兼做〜」「同時也是〜」。' },
            { text: 'がてら', reason: '「がてら」表順便但接法不同。' },
            { text: 'ついでに', reason: '「ついでに」表順便但不強調兼具目的。' },
            { text: 'かたがた', reason: '「かたがた」表兼帶但更正式。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を兼ねて」表一舉兩得',
            analysis: '「N＋を兼ねて」表示「兼做〜」「同時也當作〜」，強調一個行為具有多重目的。',
            comparisons: ['を兼ねて：兼做（雙重目的）', 'がてら：順便做（附帶目的）', 'かたがた：兼帶（正式/雙重目的）'],
            commonMistakes: ['○ 運動を兼ねて / × 運動に兼ねて → 助詞用「を」'],
        },
    },
    // ━━━ を機に (taking the opportunity) ━━━
    {
        id: 'g_n1_307', category: 'grammar', level: 'N1', tags: ['expression', 'opportunity'],
        stem: '転職{てんしょく}___、地方{ちほう}に引{ひ}っ越{こ}した。',
        stemZh: '藉著換工作的機會，搬到了鄉下。',
        options: [
            { text: 'をきっかけに', reason: '「をきっかけに」也表契機但接法不同。' },
            { text: 'を機に', reason: '正確！「を機に」表示「藉著〜的機會」。' },
            { text: 'を境に', reason: '「を境に」表以〜為界但語義不同。' },
            { text: 'を皮切りに', reason: '「を皮切りに」表以〜為開端，語義不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「を機に」表藉機',
            analysis: '「N＋を機に」表示「藉著〜的機會」「以〜為契機」，多用於積極的改變。',
            comparisons: ['を機に：藉著機會（積極改變）', 'をきっかけに：以〜為契機（一般觸發）', 'を境に：以〜為分界（轉折點）'],
            commonMistakes: ['○ 転職を機に / × 転職で機に → 助詞用「を」'],
        },
    },
    // ━━━ を禁じ得ない (cannot help feeling) ━━━
    {
        id: 'g_n1_308', category: 'grammar', level: 'N1', tags: ['literary', 'emotion'],
        stem: '彼{かれ}の無責任{むせきにん}な態度{たいど}に怒{いか}り___。',
        stemZh: '對他不負責任的態度禁不住感到憤怒。',
        options: [
            { text: 'を禁じ得ない', reason: '正確！「を禁じ得ない」表示「禁不住〜」。' },
            { text: 'が止まらない', reason: '「が止まらない」表停不了但接法不同。' },
            { text: 'でいっぱいだ', reason: '「でいっぱいだ」表充滿但語感不同。' },
            { text: 'に堪えない', reason: '「に堪えない」也表禁不住但接法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を禁じ得ない」表抑制不住感情',
            analysis: '「N（感情）＋を禁じ得ない」表示「禁不住〜」「忍不住〜」，是正式的書面表現。',
            comparisons: ['を禁じ得ない：禁不住（感情/書面語）', 'に堪えない：不堪/忍不住', 'てやまない：衷心〜不已'],
            commonMistakes: ['○ 怒りを禁じ得ない / × 怒りが禁じ得ない → 助詞用「を」'],
        },
    },
    // ━━━ をものともせずに (in defiance of) ━━━
    {
        id: 'g_n1_309', category: 'grammar', level: 'N1', tags: ['literary', 'courage'],
        stem: '嵐{あらし}___、漁師{りょうし}たちは海{うみ}に出{で}た。',
        stemZh: '不畏暴風雨，漁夫們出海了。',
        options: [
            { text: 'をものともせずに', reason: '正確！「をものともせずに」表示「不把〜當回事」。' },
            { text: 'を顧みず', reason: '「を顧みず」也表不顧但「をものともせずに」更強調蔑視困難。' },
            { text: 'にもかかわらず', reason: '「にもかかわらず」表儘管但不如前者帶有勇氣感。' },
            { text: 'を押して', reason: '「を押して」表頂著但語感稍不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「をものともせずに」表不畏懼',
            analysis: '「N＋をものともせずに」表示「不把〜當回事」「不畏懼〜」，帶有勇敢挑戰的正面語感。',
            comparisons: ['をものともせずに：不畏懼（勇敢挑戰）', 'を顧みず：不顧（不在乎）', 'を押して：頂著（排除阻礙）'],
            commonMistakes: ['○ 嵐をものともせずに / × 嵐がものともせずに → 助詞用「を」'],
        },
    },
    // ━━━ をおいて〜ない (no one/nothing but) ━━━
    {
        id: 'g_n1_310', category: 'grammar', level: 'N1', tags: ['expression', 'exclusivity'],
        stem: 'この問題{もんだい}を解決{かいけつ}できるのは、彼女{かのじょ}___。',
        stemZh: '能解決這個問題的人，除了她之外沒有別人了。',
        options: [
            { text: 'しかいない', reason: '「しかいない」表只有但不如「をおいてない」正式。' },
            { text: 'だけだ', reason: '「だけだ」表只是但語氣太弱。' },
            { text: 'をおいてほかにない', reason: '正確！「をおいてほかにない」表示「除了〜別無他選」。' },
            { text: '以外にはない', reason: '「以外にはない」也可以但不如前者正式。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「をおいてほかにない」表唯一選擇',
            analysis: '「N＋をおいて＋ほかにない/いない」表示「除了〜之外別無他選」，強調某人/某物的不可替代性。',
            comparisons: ['をおいてない：除〜之外別無（強調唯一/正式）', 'しかない：只有（一般限定）', 'こそ：正是（強調）'],
            commonMistakes: ['○ 彼女をおいてほかにない / × 彼女がおいてほかにない → 助詞用「を」'],
        },
    },
    // ━━━ を境に (as a turning point) ━━━
    {
        id: 'g_n1_311', category: 'grammar', level: 'N1', tags: ['expression', 'change'],
        stem: 'あの事件{じけん}___、彼{かれ}の人生{じんせい}は大{おお}きく変{か}わった。',
        stemZh: '以那起事件為分水嶺，他的人生大幅改變了。',
        options: [
            { text: 'を境に', reason: '正確！「を境に」表示「以〜為界」「從〜起大有改觀」。' },
            { text: 'をきっかけに', reason: '「をきっかけに」表契機但不如前者強調前後差異。' },
            { text: 'を機に', reason: '「を機に」表藉機但不如前者強調分界點。' },
            { text: 'から', reason: '「から」表從〜但語體太口語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を境に」表以某事為分界',
            analysis: '「N＋を境に」表示「以〜為界」「從〜起完全不同」，強調前後的巨大差異。',
            comparisons: ['を境に：以〜為界（前後差異大）', 'をきっかけに：以〜為契機（觸發變化）', 'を機に：藉〜機會（積極改變）'],
            commonMistakes: ['○ 事件を境に / × 事件が境に → 助詞用「を」'],
        },
    },
    // ━━━ をよそに (ignoring) ━━━
    {
        id: 'g_n1_312', category: 'grammar', level: 'N1', tags: ['expression', 'disregard'],
        stem: '周囲{しゅうい}の心配{しんぱい}___、彼{かれ}は一人{ひとり}で旅{たび}に出{で}た。',
        stemZh: '不顧周圍的擔心，他一個人去旅行了。',
        options: [
            { text: 'をよそに', reason: '正確！「をよそに」表示「不顧〜」「置之不理」。' },
            { text: 'を顧みず', reason: '「を顧みず」也表不顧但語感較英雄化。' },
            { text: 'にもかかわらず', reason: '「にもかかわらず」表儘管但不如前者帶有冷淡感。' },
            { text: 'を無視して', reason: '「を無視して」表無視但過於直接。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「をよそに」表不顧（冷淡）',
            analysis: '「N＋をよそに」表示「不顧〜」「把〜丟在一邊」，帶有對他人感受冷淡不理的語氣。',
            comparisons: ['をよそに：不顧（冷淡/不理會）', 'を顧みず：不顧（勇敢/無畏）', 'をものともせずに：不把〜當回事'],
            commonMistakes: ['○ 心配をよそに / × 心配がよそに → 助詞用「を」'],
        },
    },
    // ━━━ を前提として (on the premise of) ━━━
    {
        id: 'g_n1_313', category: 'grammar', level: 'N1', tags: ['formal', 'basis'],
        stem: '結婚{けっこん}___付{つ}き合{あ}ってほしい。',
        stemZh: '希望以結婚為前提交往。',
        options: [
            { text: 'を前提として', reason: '正確！「を前提として」表示「以〜為前提」。' },
            { text: 'を条件に', reason: '「を条件に」表以〜為條件但語感不同。' },
            { text: 'を目的として', reason: '「を目的として」表以〜為目的但語義不同。' },
            { text: 'をもとに', reason: '「をもとに」表以〜為根據但語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を前提として」表以〜為前提',
            analysis: '「N＋を前提として/に」表示「以〜為前提」「在〜的條件下」，用於正式場合。',
            comparisons: ['を前提として：以〜為前提（正式條件設定）', 'を条件に：以〜為條件（交換條件）', 'を踏まえて：基於〜（考慮因素）'],
            commonMistakes: ['○ 結婚を前提として / × 結婚の前提として → 助詞用「を」'],
        },
    },
    // ━━━ 折に (on the occasion of) ━━━
    {
        id: 'g_n1_314', category: 'grammar', level: 'N1', tags: ['formal', 'timing'],
        stem: 'お会{あ}いした___、改{あらた}めてご挨拶{あいさつ}させていただきます。',
        stemZh: '見面的時候，再正式向您打聲招呼。',
        options: [
            { text: '時に', reason: '「時に」表〜的時候但不如「折に」正式。' },
            { text: '折に', reason: '正確！「折に」表示「在〜的時候」「趁〜之際」。' },
            { text: '際に', reason: '「際に」也表之際但接法不同。' },
            { text: 'ついでに', reason: '「ついでに」表順便，語義不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「折に」表適當時機',
            analysis: '「Vた形/V辭書形＋折に」表示「在〜的時候」「趁〜之際」，是較為正式禮貌的表現。',
            comparisons: ['折に：在〜時候（正式/禮貌）', '時に：〜的時候（一般）', '際に：〜之際（正式）'],
            commonMistakes: ['○ お会いした折に / × お会いの折に → 動詞用た形接「折に」'],
        },
    },
    // ━━━ およそ (approximately / generally) ━━━
    {
        id: 'g_n1_315', category: 'grammar', level: 'N1', tags: ['expression', 'estimation'],
        stem: 'こんな結果{けっか}は___予想{よそう}もしなかった。',
        stemZh: '這樣的結果完全沒有預料到。',
        options: [
            { text: 'まったく', reason: '「まったく」表完全但不如「およそ」書面化。' },
            { text: 'およそ', reason: '正確！「およそ」與否定搭配表「完全不〜」。' },
            { text: 'ほとんど', reason: '「ほとんど」表幾乎但語義稍不同。' },
            { text: 'あまり', reason: '「あまり」表不太但語氣太弱。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「およそ＋否定」表完全不',
            analysis: '「およそ」有兩個意思：①大約、大體上（肯定）②完全不（與否定搭配）。此處為否定用法。',
            comparisons: ['およそ〜ない：完全不〜（書面語/否定）', 'およそ：大約（肯定/概數）', 'まったく〜ない：完全不（一般）'],
            commonMistakes: ['○ およそ予想もしなかった / × およそで予想もしなかった → 直接作為副詞使用'],
        },
    },
    // ━━━ にかこつけて (using as a pretext) ━━━
    {
        id: 'g_n1_316', category: 'grammar', level: 'N1', tags: ['expression', 'criticism'],
        stem: '出張{しゅっちょう}___、遊{あそ}びに行{い}っているだけだ。',
        stemZh: '不過是以出差為藉口去玩罷了。',
        options: [
            { text: 'にかこつけて', reason: '正確！「にかこつけて」表示「以〜為藉口」。' },
            { text: 'をいいことに', reason: '「をいいことに」表趁著但語感不同。' },
            { text: 'を口実に', reason: '「を口実に」也表以〜為藉口但不如前者慣用。' },
            { text: 'をきっかけに', reason: '「をきっかけに」表以〜為契機，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にかこつけて」表以〜為藉口',
            analysis: '「N＋にかこつけて」表示「以〜為藉口」「托〜之名」，帶有批判語氣，暗示真正目的是別的。',
            comparisons: ['にかこつけて：以〜為藉口（批判/暗示）', 'をいいことに：趁著〜之便（批判）', 'を口実に：以〜為藉口（直接）'],
            commonMistakes: ['○ 出張にかこつけて / × 出張をかこつけて → 助詞用「に」'],
        },
    },
    // ━━━ にかまけて (too busy with) ━━━
    {
        id: 'g_n1_317', category: 'grammar', level: 'N1', tags: ['expression', 'neglect'],
        stem: '仕事{しごと}___、家族{かぞく}との時間{じかん}を疎{おろそ}かにしてしまった。',
        stemZh: '只顧著工作，疏忽了與家人相處的時間。',
        options: [
            { text: 'にかまけて', reason: '正確！「にかまけて」表示「只顧著〜而忽略其他」。' },
            { text: 'に夢中で', reason: '「に夢中で」表沉迷但不強調忽略。' },
            { text: 'ばかりで', reason: '「ばかりで」表光是但不如前者書面化。' },
            { text: 'に追われて', reason: '「に追われて」表被〜追著但不強調疏忽。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にかまけて」表顧此失彼',
            analysis: '「N＋にかまけて」表示「只顧著〜」「專注於〜而忽略其他」，帶有反省或批判語氣。',
            comparisons: ['にかまけて：只顧著〜（忽略其他/反省）', 'に夢中で：沉迷於〜（熱衷）', 'に追われて：被〜追著（忙碌）'],
            commonMistakes: ['○ 仕事にかまけて / × 仕事をかまけて → 助詞用「に」'],
        },
    },
    // ━━━ に難くない (not difficult to) ━━━
    {
        id: 'g_n1_318', category: 'grammar', level: 'N1', tags: ['literary', 'ease'],
        stem: '彼{かれ}の苦{くる}しみは想像{そうぞう}___。',
        stemZh: '他的痛苦不難想像。',
        options: [
            { text: 'に難くない', reason: '正確！「に難くない」表示「不難〜」。' },
            { text: 'しやすい', reason: '「しやすい」表容易但語體不同。' },
            { text: 'できる', reason: '「できる」表能夠但語體太口語。' },
            { text: 'に足る', reason: '「に足る」表值得但語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に難くない」表不難想像/理解',
            analysis: '「V辭書形＋に難くない」表示「不難〜」，主要與「想像する」「理解する」「推察する」等詞搭配。',
            comparisons: ['に難くない：不難〜（書面語/限定搭配）', 'やすい：容易〜（一般）', 'にたえる：值得/經得起'],
            commonMistakes: ['○ 想像に難くない / × 想像するに難くない → 多省略「する」'],
        },
    },
    // ━━━ にまつわる (related to) ━━━
    {
        id: 'g_n1_319', category: 'grammar', level: 'N1', tags: ['formal', 'relation'],
        stem: 'この土地{とち}___伝説{でんせつ}が数多{かずおお}くある。',
        stemZh: '有許多與這片土地相關的傳說。',
        options: [
            { text: 'に関する', reason: '「に関する」表關於但不如「にまつわる」帶有故事性。' },
            { text: 'にまつわる', reason: '正確！「にまつわる」表示「與〜有關的」「圍繞〜的」。' },
            { text: 'についての', reason: '「についての」表關於但不如前者書面化。' },
            { text: 'における', reason: '「における」表在〜中但語義不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「にまつわる」表與〜相關（故事性）',
            analysis: '「N＋にまつわる＋N」表示「與〜有關的」「圍繞〜的」，常用於故事、傳說、逸話等。',
            comparisons: ['にまつわる：與〜有關的（故事性/書面語）', 'に関する：關於〜（一般正式）', 'についての：關於（一般）'],
            commonMistakes: ['○ 土地にまつわる / × 土地のまつわる → 助詞用「に」'],
        },
    },
    // ━━━ に則って (in accordance with) ━━━
    {
        id: 'g_n1_320', category: 'grammar', level: 'N1', tags: ['formal', 'compliance'],
        stem: '法令{ほうれい}___、適切{てきせつ}に処理{しょり}する。',
        stemZh: '遵照法令妥善處理。',
        options: [
            { text: 'に基づいて', reason: '「に基づいて」表基於但不如「に則って」強調遵從。' },
            { text: 'に則って', reason: '正確！「に則って」表示「遵照〜」「按照〜」。' },
            { text: 'に従って', reason: '「に従って」表遵循但不如前者正式。' },
            { text: 'に沿って', reason: '「に沿って」表沿著但語義稍不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「に則って」表嚴格遵照',
            analysis: '「N＋に則って」表示「遵照〜」「按照〜」，用於嚴格遵從規則、法律、傳統等。',
            comparisons: ['に則って：遵照（嚴格遵從/正式）', 'に基づいて：基於（依據/正式）', 'に従って：遵循（順從/一般）'],
            commonMistakes: ['○ 法令に則って / × 法令を則って → 助詞用「に」'],
        },
    },
    // ━━━ に先駆けて (ahead of) ━━━
    {
        id: 'g_n1_321', category: 'grammar', level: 'N1', tags: ['formal', 'precedence'],
        stem: '発売{はつばい}___、特別{とくべつ}試写会{ししゃかい}が開{ひら}かれた。',
        stemZh: '在發售之前，舉辦了特別試映會。',
        options: [
            { text: 'に先立って', reason: '「に先立って」也表事前但語感不同。' },
            { text: 'に先駆けて', reason: '正確！「に先駆けて」表示「率先〜」「先於〜」。' },
            { text: 'の前に', reason: '「の前に」表之前但不如前者正式。' },
            { text: 'に際して', reason: '「に際して」表在〜之際但不表事前。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「に先駆けて」表率先、先於他人',
            analysis: '「N＋に先駆けて」表示「率先〜」「先於〜」，強調走在前面或搶先一步。',
            comparisons: ['に先駆けて：率先/搶先（積極/書面語）', 'に先立って：在〜之前（時間順序/正式）', 'の前に：在〜之前（一般）'],
            commonMistakes: ['○ 発売に先駆けて / × 発売を先駆けて → 助詞用「に」'],
        },
    },
    // ━━━ に忍びない (cannot bear to) ━━━
    {
        id: 'g_n1_322', category: 'grammar', level: 'N1', tags: ['literary', 'emotion'],
        stem: '老{お}いた愛犬{あいけん}を安楽死{あんらくし}させるのは見{み}る___。',
        stemZh: '看著老邁的愛犬被安樂死，於心不忍。',
        options: [
            { text: 'に忍びない', reason: '正確！「に忍びない」表示「不忍心〜」。' },
            { text: 'に堪えない', reason: '「に堪えない」表不堪但語感不同。' },
            { text: 'がたい', reason: '「がたい」表難以但接法不同。' },
            { text: 'かねる', reason: '「かねる」表難以但不如前者帶有同情。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に忍びない」表不忍心',
            analysis: '「V辭書形＋に忍びない」表示「不忍心〜」「於心不忍」，帶有同情和不捨的感情。',
            comparisons: ['に忍びない：不忍心（同情/不捨）', 'に堪えない：不堪/忍不住（程度/感情）', 'かねる：難以〜（顧慮/為難）'],
            commonMistakes: ['○ 見るに忍びない / × 見に忍びない → 用辭書形接「に忍びない」'],
        },
    },
    // ━━━ に言わせれば (if you ask someone) ━━━
    {
        id: 'g_n1_323', category: 'grammar', level: 'N1', tags: ['expression', 'viewpoint'],
        stem: '母{はは}___、私{わたし}の料理{りょうり}はまだまだだそうだ。',
        stemZh: '依我母親來看，我的廚藝還差得遠。',
        options: [
            { text: 'に言わせれば', reason: '正確！「に言わせれば」表示「在〜看來」「照〜的說法」。' },
            { text: 'によれば', reason: '「によれば」表據〜說但不如前者帶有主觀感。' },
            { text: 'にとっては', reason: '「にとっては」表對〜來說但不如前者強調個人意見。' },
            { text: 'に聞けば', reason: '「に聞けば」表問了之後但語法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に言わせれば」表某人的看法',
            analysis: '「N（人）＋に言わせれば」表示「要讓〜來說的話」「照〜的說法」，帶有「那是他個人的看法」的語感。',
            comparisons: ['に言わせれば：照〜的說法（主觀看法）', 'によれば：據〜說（引用消息源）', 'にとって：對〜來說（立場）'],
            commonMistakes: ['○ 母に言わせれば / × 母が言わせれば → 助詞用「に」'],
        },
    },
    // ━━━ に限ったことではない (not limited to) ━━━
    {
        id: 'g_n1_324', category: 'grammar', level: 'N1', tags: ['expression', 'universality'],
        stem: 'ストレスを感{かん}じるのは大人{おとな}___。',
        stemZh: '感到壓力的不僅限於大人。',
        options: [
            { text: 'だけではない', reason: '「だけではない」表不僅但不如前者正式。' },
            { text: 'に限ったことではない', reason: '正確！「に限ったことではない」表示「不僅限於〜」。' },
            { text: 'ばかりではない', reason: '「ばかりではない」表不只是但語感不同。' },
            { text: 'のみではない', reason: '「のみではない」也可以但不如前者慣用。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「に限ったことではない」表不僅僅是',
            analysis: '「N＋に限ったことではない」表示「不僅限於〜」「不只是〜的問題」，指出問題或現象的普遍性。',
            comparisons: ['に限ったことではない：不僅限於（普遍性/書面語）', 'だけではない：不僅（一般）', 'に限らず：不限於（正式）'],
            commonMistakes: ['○ 大人に限ったことではない / × 大人だけに限ったことではない → 不需要加「だけ」'],
        },
    },
    // ━━━ にかかっている (depends on) ━━━
    {
        id: 'g_n1_325', category: 'grammar', level: 'N1', tags: ['expression', 'dependence'],
        stem: 'チームの勝敗{しょうはい}は、エースの活躍{かつやく}___。',
        stemZh: '隊伍的勝敗取決於王牌的表現。',
        options: [
            { text: '次第だ', reason: '「次第だ」也表取決於但接法不同。' },
            { text: 'にかかっている', reason: '正確！「にかかっている」表示「全靠〜」「取決於〜」。' },
            { text: 'による', reason: '「による」表因〜而異但語感不同。' },
            { text: 'いかんだ', reason: '「いかんだ」也表取決於但最為正式。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「にかかっている」表取決於某人/某事',
            analysis: '「N＋にかかっている」表示「全靠〜」「取決於〜」，強調某事的成敗完全取決於某因素。',
            comparisons: ['にかかっている：全靠〜（強調依賴）', '次第だ：取決於（正式）', 'いかんだ：視〜而定（最正式）'],
            commonMistakes: ['○ 活躍にかかっている / × 活躍がかかっている → 助詞用「に」'],
        },
    },
    // ━━━ に引き換え (in contrast to) ━━━
    {
        id: 'g_n1_326', category: 'grammar', level: 'N1', tags: ['expression', 'contrast'],
        stem: '姉{あね}は優秀{ゆうしゅう}なの___、弟{おとうと}は全{まった}く勉強{べんきょう}しない。',
        stemZh: '姐姐很優秀，相比之下弟弟完全不念書。',
        options: [
            { text: 'に引き換え', reason: '正確！「に引き換え」表示「與〜相反」「與〜相比」。' },
            { text: 'に比べて', reason: '「に比べて」表比較但不如前者強調反差。' },
            { text: 'に対して', reason: '「に対して」表對比但語感不同。' },
            { text: 'と違って', reason: '「と違って」表不同但不如前者正式。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に引き換え」表強烈對比反差',
            analysis: '「N/文＋に引き換え」表示「與〜相反」「相比之下」，強調兩者之間的巨大反差，常帶有評價。',
            comparisons: ['に引き換え：與〜相反（強調反差/評價）', 'に比べて：比〜（一般比較）', 'に対して：對〜/相對（對比）'],
            commonMistakes: ['○ 姉に引き換え / × 姉と引き換え → 助詞用「に」'],
        },
    },
    // ━━━ に至る (reach the point of) ━━━
    {
        id: 'g_n1_327', category: 'grammar', level: 'N1', tags: ['formal', 'development'],
        stem: '長年{ながねん}の研究{けんきゅう}がようやく成功{せいこう}___。',
        stemZh: '多年的研究終於達成了成功。',
        options: [
            { text: 'した', reason: '「した」表做了但不如「に至った」正式。' },
            { text: 'に至った', reason: '正確！「に至る」表示「發展到〜」「達到〜」。' },
            { text: 'になった', reason: '「になった」表變成但不如前者書面化。' },
            { text: 'を達成した', reason: '「を達成した」表達成但接法不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「に至る」表發展至某階段',
            analysis: '「N＋に至る」表示「發展到〜的地步」「達到〜」，是正式的書面表現。',
            comparisons: ['に至る：發展到〜（正式/過程結果）', 'になる：變成〜（一般）', 'に達する：達到〜（數量/水準）'],
            commonMistakes: ['○ 成功に至った / × 成功を至った → 助詞用「に」'],
        },
    },
    // ━━━ に至るまで (even down to) ━━━
    {
        id: 'g_n1_328', category: 'grammar', level: 'N1', tags: ['formal', 'extent'],
        stem: '大{おお}きな家具{かぐ}から小{ちい}さな雑貨{ざっか}___、すべて手作{てづく}りだ。',
        stemZh: '從大型傢具到小雜貨，全部都是手工製作的。',
        options: [
            { text: 'まで', reason: '「まで」表到〜但不如「に至るまで」書面化。' },
            { text: 'に至るまで', reason: '正確！「に至るまで」表示「甚至到〜」「直到〜」。' },
            { text: 'にかけて', reason: '「にかけて」表到〜但不如前者強調包含。' },
            { text: 'に渡って', reason: '「に渡って」表跨越但語義不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「に至るまで」表範圍之廣',
            analysis: '「N＋に至るまで」表示「甚至到〜的地步」「直到〜都」，強調範圍之廣或程度之深。',
            comparisons: ['に至るまで：甚至到〜（範圍廣/正式）', 'まで：到〜（一般）', 'にわたって：遍及〜（範圍/期間）'],
            commonMistakes: ['○ 雑貨に至るまで / × 雑貨まで至る → 固定用法「に至るまで」'],
        },
    },
    // ━━━ もさることながら (not to mention) ━━━
    {
        id: 'g_n1_329', category: 'grammar', level: 'N1', tags: ['expression', 'emphasis'],
        stem: '味{あじ}___、見{み}た目{め}も素晴{すば}らしい料理{りょうり}だ。',
        stemZh: '味道自不在話下，外觀也很出色的料理。',
        options: [
            { text: 'はもちろん', reason: '「はもちろん」表當然但不如「もさることながら」正式。' },
            { text: 'もさることながら', reason: '正確！「もさることながら」表示「〜自不待言，〜更是」。' },
            { text: 'だけでなく', reason: '「だけでなく」表不僅但語體太普通。' },
            { text: 'ばかりか', reason: '「ばかりか」表不僅但語感不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「もさることながら」表前者自不待言',
            analysis: '「N＋もさることながら」表示「〜自不待言」「〜固然不錯，更值得注目的是」。',
            comparisons: ['もさることながら：〜自不待言（強調後者更值得注意）', 'はもちろん：當然〜也（一般追加）', 'のみならず：不僅（文語追加）'],
            commonMistakes: ['○ 味もさることながら / × 味がさることながら → 助詞用「も」'],
        },
    },
    // ━━━ もしくは (or) ━━━
    {
        id: 'g_n1_330', category: 'grammar', level: 'N1', tags: ['formal', 'choice'],
        stem: '申込書{もうしこみしょ}は郵送{ゆうそう}___ファックスで送{おく}ってください。',
        stemZh: '申請表請用郵寄或傳真的方式寄送。',
        options: [
            { text: 'または', reason: '「または」也表或者但不如「もしくは」正式。' },
            { text: 'あるいは', reason: '「あるいは」也表或者但語體不同。' },
            { text: 'もしくは', reason: '正確！「もしくは」表示「或者」（法律/正式文書用語）。' },
            { text: 'それとも', reason: '「それとも」表還是但用於疑問句。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「もしくは」表或者（最正式）',
            analysis: '「もしくは」表示「或者」「還是」，是最正式的選擇連接詞，常見於法律文書。',
            comparisons: ['もしくは：或者（最正式/法律用語）', 'または：或者（正式）', 'あるいは：或者（書面語）'],
            commonMistakes: ['○ 郵送もしくはファックス / × 郵送もしくはかファックス → 直接連接兩個名詞'],
        },
    },
    // ━━━ ないでは済まない (must do) ━━━
    {
        id: 'g_n1_331', category: 'grammar', level: 'N1', tags: ['expression', 'obligation'],
        stem: '借{か}りたお金{かね}は返{かえ}さ___。',
        stemZh: '借的錢不還不行。',
        options: [
            { text: 'ないでは済まない', reason: '正確！「ないでは済まない」表示「不〜不行」。' },
            { text: 'ずにはすまない', reason: '「ずにはすまない」是同義的文語表現。' },
            { text: 'ないわけにはいかない', reason: '「ないわけにはいかない」也可以但語感不同。' },
            { text: 'なければならない', reason: '「なければならない」表必須但不強調道義。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ないでは済まない」表道義上不能不做',
            analysis: '「V ない形＋では済まない」表示「不做〜的話在道義上過不去」「不得不〜」。',
            comparisons: ['ないでは済まない：不做不行（道義上）', 'ずにはすまない：同上（文語）', 'なければならない：必須（規則）'],
            commonMistakes: ['○ 返さないでは済まない / × 返すないでは済まない → 用ない形'],
        },
    },
    // ━━━ なり (as soon as) ━━━
    {
        id: 'g_n1_332', category: 'grammar', level: 'N1', tags: ['literary', 'sequence'],
        stem: '彼{かれ}は部屋{へや}に入{はい}る___、ソファに倒{たお}れ込{こ}んだ。',
        stemZh: '他一進房間就倒在沙發上了。',
        options: [
            { text: 'なり', reason: '正確！「なり」表示「一〜就立刻」。' },
            { text: 'や否や', reason: '「や否や」也表一〜就但語感不同。' },
            { text: 'が早いか', reason: '「が早いか」也表一〜就但接法不同。' },
            { text: 'とたん', reason: '「とたん」也表一〜就但接法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なり」表一〜就立刻（同一主語）',
            analysis: '「V辭書形＋なり」表示「一做〜就立刻〜」，前後主語必須相同，且後面多為意外的動作。',
            comparisons: ['なり：一〜就（同一主語/意外動作）', 'や否や：一〜就（主語可不同）', 'が早いか：一〜就（幾乎同時）'],
            commonMistakes: ['○ 入るなり / × 入ったなり → 用辭書形接「なり」'],
        },
    },
    // ━━━ なり〜なり (either... or...) ━━━
    {
        id: 'g_n1_333', category: 'grammar', level: 'N1', tags: ['expression', 'suggestion'],
        stem: '電話{でんわ}する___メールする___、とにかく連絡{れんらく}してください。',
        stemZh: '打電話也好發郵件也好，總之請聯繫。',
        options: [
            { text: 'なり…なり', reason: '正確！「なり〜なり」表示「〜也好〜也好」（建議選擇）。' },
            { text: 'とか…とか', reason: '「とか〜とか」表列舉但不強調建議。' },
            { text: 'か…か', reason: '「か〜か」表或者但語感不同。' },
            { text: 'でも…でも', reason: '「でも〜でも」表也〜也但接法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なり〜なり」表建議選擇',
            analysis: '「Vなり＋Vなり」表示「做〜也好做〜也好」，用於建議對方選擇其中之一。',
            comparisons: ['なり〜なり：〜也好〜也好（建議選擇）', 'にしろ〜にしろ：不管〜還是（讓步）', 'であれ〜であれ：不論〜還是（文語讓步）'],
            commonMistakes: ['○ 電話するなりメールするなり / × 電話なりメールなり → 動詞用辭書形接'],
        },
    },
    // ━━━ なりとも (even a little) ━━━
    {
        id: 'g_n1_334', category: 'grammar', level: 'N1', tags: ['literary', 'minimality'],
        stem: '少{すこ}し___お役{やく}に立{た}てればと思{おも}います。',
        stemZh: '希望能多少有些幫助。',
        options: [
            { text: 'でも', reason: '「でも」表即使也但不如「なりとも」正式。' },
            { text: 'なりとも', reason: '正確！「なりとも」表示「哪怕一點點也」。' },
            { text: 'だけでも', reason: '「だけでも」表至少但語感不同。' },
            { text: 'くらいは', reason: '「くらいは」表至少但不如前者正式。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「なりとも」表哪怕一點點也',
            analysis: '「少し/一〜＋なりとも」表示「哪怕一點點也」「至少〜」，是正式的文語表現。',
            comparisons: ['なりとも：哪怕一點也（文語/正式）', 'でも：即使（一般）', 'だけでも：至少（一般）'],
            commonMistakes: ['○ 少しなりとも / × 少しがなりとも → 直接接「なりとも」'],
        },
    },
    // ━━━ なしに (without) ━━━
    {
        id: 'g_n1_335', category: 'grammar', level: 'N1', tags: ['expression', 'absence'],
        stem: '断{ことわ}り___、人{ひと}のものを使{つか}ってはいけない。',
        stemZh: '不事先告知就使用別人的東西是不行的。',
        options: [
            { text: 'なしに', reason: '正確！「なしに」表示「沒有〜地」「不經過〜」。' },
            { text: 'なくて', reason: '「なくて」表沒有但接法不同。' },
            { text: 'ずに', reason: '「ずに」表不做但接法不同。' },
            { text: 'ことなく', reason: '「ことなく」表不做但接法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なしに」表在沒有〜的情況下',
            analysis: '「N＋なしに/なしで」表示「沒有〜地」「不經過〜」。',
            comparisons: ['なしに：沒有〜地（名詞接續）', 'なくして：沒有就不行（必要條件/文語）', 'ことなしに：不做〜地（動詞接續）'],
            commonMistakes: ['○ 断りなしに / × 断りのなしに → 名詞直接接「なしに」'],
        },
    },
    // ━━━ だの〜だの (things like... and...) ━━━
    {
        id: 'g_n1_336', category: 'grammar', level: 'N1', tags: ['expression', 'listing'],
        stem: '彼{かれ}は忙{いそが}しい___疲{つか}れた___言{い}って、全然{ぜんぜん}手伝{てつだ}わない。',
        stemZh: '他說什麼忙啊累的，完全不幫忙。',
        options: [
            { text: 'だの…だの', reason: '正確！「だの〜だの」表示「啦〜啦〜」（不滿的列舉）。' },
            { text: 'とか…とか', reason: '「とか〜とか」也表列舉但不帶不滿。' },
            { text: 'やら…やら', reason: '「やら〜やら」也表列舉但語感不同。' },
            { text: 'なり…なり', reason: '「なり〜なり」表建議選擇，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「だの〜だの」表不滿的列舉',
            analysis: '「〜だの〜だの」表示「啦〜啦〜」，用於不滿或輕蔑地列舉別人的言行。',
            comparisons: ['だの〜だの：啦〜啦（不滿/輕蔑）', 'やら〜やら：啦〜啦（困惑/不確定）', 'とか〜とか：〜之類的（中性列舉）'],
            commonMistakes: ['○ 忙しいだの疲れただの / × 忙しいだの、疲れただの → 不需要加逗號'],
        },
    },
    // ━━━ だろうに (and yet) ━━━
    {
        id: 'g_n1_337', category: 'grammar', level: 'N1', tags: ['expression', 'regret'],
        stem: '言{い}えば手伝{てつだ}ってあげた___、なぜ黙{だま}っていたの。',
        stemZh: '明明說了的話就幫你了，幹嘛不說呢。',
        options: [
            { text: 'のに', reason: '「のに」表遺憾但不如「だろうに」帶有推測感。' },
            { text: 'ものを', reason: '「ものを」也表遺憾但語感不同。' },
            { text: 'だろうに', reason: '正確！「だろうに」表示「明明〜的說（卻不這樣做）」。' },
            { text: 'はずなのに', reason: '「はずなのに」表應該但語義稍不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「だろうに」表遺憾的推測',
            analysis: '「〜だろうに」表示「明明〜的說（卻偏偏不是這樣）」，帶有對未實現事態的遺憾和惋惜。',
            comparisons: ['だろうに：明明〜的說（遺憾/惋惜）', 'のに：卻（一般遺憾）', 'ものを：明明〜卻（不滿/遺憾）'],
            commonMistakes: ['○ 手伝ってあげただろうに / × 手伝ってあげるだろうに → 常用た形表反事實'],
        },
    },
    // ━━━ でなくてなんだろう (what else could it be) ━━━
    {
        id: 'g_n1_338', category: 'grammar', level: 'N1', tags: ['literary', 'assertion'],
        stem: 'これが奇跡{きせき}___。',
        stemZh: '這不是奇蹟又是什麼呢。',
        options: [
            { text: 'でなくてなんだろう', reason: '正確！「でなくてなんだろう」表示「不是〜又是什麼」。' },
            { text: 'ではないか', reason: '「ではないか」表不是嗎但語氣不同。' },
            { text: 'にほかならない', reason: '「にほかならない」表正是但反問語氣不同。' },
            { text: 'に違いない', reason: '「に違いない」表一定是但語體不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「でなくてなんだろう」表反問強調',
            analysis: '「N＋でなくてなんだろう」表示「如果這不是〜，那什麼才是〜」，用反問句來強調斷定。',
            comparisons: ['でなくてなんだろう：不是〜又是什麼（反問強調）', 'にほかならない：正是〜（直接斷定）', 'でなくてなんであろう：同上（更文語）'],
            commonMistakes: ['○ 奇跡でなくてなんだろう / × 奇跡がなくてなんだろう → 用「で」不用「が」'],
        },
    },
    // ━━━ ではあるまいか (isn't it) ━━━
    {
        id: 'g_n1_339', category: 'grammar', level: 'N1', tags: ['literary', 'rhetorical'],
        stem: 'それは危険{きけん}___。',
        stemZh: '那不是很危險嗎。',
        options: [
            { text: 'ではないか', reason: '「ではないか」也可以但不如「ではあるまいか」書面化。' },
            { text: 'ではあるまいか', reason: '正確！「ではあるまいか」表示「難道不是〜嗎」。' },
            { text: 'ではなかろうか', reason: '「ではなかろうか」也可以，是同義表現。' },
            { text: 'のではないか', reason: '「のではないか」也可以但語體不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ではあるまいか」表文語反問',
            analysis: '「〜ではあるまいか」是「ではないか」的文語表現，表示「難道不是〜嗎」，用於正式書面語。',
            comparisons: ['ではあるまいか：難道不是〜嗎（文語反問）', 'ではないか：不是〜嗎（一般反問）', 'ではなかろうか：恐怕是〜吧（推測）'],
            commonMistakes: ['○ 危険ではあるまいか / × 危険のではあるまいか → 名詞/Na直接接'],
        },
    },
    // ━━━ ではあるまいし (it's not like) ━━━
    {
        id: 'g_n1_340', category: 'grammar', level: 'N1', tags: ['expression', 'criticism'],
        stem: '子{こ}ども___、泣{な}くのはやめなさい。',
        stemZh: '又不是小孩子，別哭了。',
        options: [
            { text: 'じゃないんだから', reason: '「じゃないんだから」也可以但過於口語。' },
            { text: 'ではあるまいし', reason: '正確！「ではあるまいし」表示「又不是〜」（批判/勸告）。' },
            { text: 'ではないのに', reason: '「ではないのに」表明明不是但語感不同。' },
            { text: 'でもないのに', reason: '「でもないのに」也可以但語體不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ではあるまいし」表又不是（批判）',
            analysis: '「N＋ではあるまいし」表示「又不是〜」「既然不是〜」，用於批判或勸告對方不應做出與身分不符的行為。',
            comparisons: ['ではあるまいし：又不是〜（書面語/批判）', 'じゃあるまいし：同上（稍口語）', 'じゃないんだから：又不是〜（口語）'],
            commonMistakes: ['○ 子どもではあるまいし / × 子どものではあるまいし → 名詞直接接'],
        },
    },
    // ━━━ では済まない (won't get away with just) ━━━
    {
        id: 'g_n1_341', category: 'grammar', level: 'N1', tags: ['expression', 'severity'],
        stem: 'ただの謝罪{しゃざい}___。責任{せきにん}を取{と}ってもらう。',
        stemZh: '光道歉是不夠的。要你負責任。',
        options: [
            { text: 'では済まない', reason: '正確！「では済まない」表示「光靠〜是不夠的」。' },
            { text: 'では足りない', reason: '「では足りない」表不夠但語感不同。' },
            { text: 'だけでは不十分だ', reason: '「だけでは不十分だ」語義相近但冗長。' },
            { text: 'では終わらない', reason: '「では終わらない」表不會結束但語義稍不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「では済まない」表不能就此了事',
            analysis: '「N＋では済まない」表示「光靠〜是不行的」「不能僅靠〜就了事」，表示事態嚴重。',
            comparisons: ['では済まない：光〜不行（事態嚴重）', 'て済むことではない：不是〜就能了事的', 'では足りない：不夠'],
            commonMistakes: ['○ 謝罪では済まない / × 謝罪が済まない → 用「では」'],
        },
    },
    // ━━━ どうにも〜ない (no matter what, can't) ━━━
    {
        id: 'g_n1_342', category: 'grammar', level: 'N1', tags: ['expression', 'inability'],
        stem: '彼{かれ}の考{かんが}えが___理解{りかい}できない。',
        stemZh: '他的想法怎樣也理解不了。',
        options: [
            { text: 'どうにも', reason: '正確！「どうにも〜ない」表示「怎樣也不能〜」。' },
            { text: 'どうしても', reason: '「どうしても」也表無論如何但語感不同。' },
            { text: 'まったく', reason: '「まったく」表完全但不如前者強調無可奈何。' },
            { text: 'ぜんぜん', reason: '「ぜんぜん」表完全不但過於口語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「どうにも〜ない」表無論如何也不能',
            analysis: '「どうにも＋V否定形」表示「無論如何也不能〜」「怎樣也無法〜」，帶有無可奈何的語氣。',
            comparisons: ['どうにも〜ない：怎樣也不能（無可奈何）', 'どうしても〜ない：無論如何也不（一般）', 'まったく〜ない：完全不'],
            commonMistakes: ['○ どうにも理解できない / × どうにも理解しない → 常接可能形否定或狀態動詞否定'],
        },
    },
    // ━━━ が早いか (no sooner than) ━━━
    {
        id: 'g_n1_343', category: 'grammar', level: 'N1', tags: ['literary', 'sequence'],
        stem: '目覚{めざ}まし時計{どけい}が鳴{な}る___、彼{かれ}は飛{と}び起{お}きた。',
        stemZh: '鬧鐘一響，他就跳了起來。',
        options: [
            { text: 'が早いか', reason: '正確！「が早いか」表示「一〜就立刻」。' },
            { text: 'や否や', reason: '「や否や」也表一〜就但語感稍不同。' },
            { text: 'なり', reason: '「なり」也表一〜就但限定同一主語。' },
            { text: 'かと思うと', reason: '「かと思うと」表剛〜就但語義不完全相同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「が早いか」表幾乎同時發生',
            analysis: '「V辭書形＋が早いか」表示「一〜就立刻〜」，強調前後動作幾乎同時發生。',
            comparisons: ['が早いか：一〜就（幾乎同時/文語）', 'や否や：一〜就（迅速反應/文語）', 'なり：一〜就（同一主語）'],
            commonMistakes: ['○ 鳴るが早いか / × 鳴ったが早いか → 用辭書形接'],
        },
    },
    // ━━━ が/も〜なら、〜も〜だ (both bad) ━━━
    {
        id: 'g_n1_344', category: 'grammar', level: 'N1', tags: ['expression', 'criticism'],
        stem: '親{おや}___親{おや}なら、子{こ}___子{こ}だ。',
        stemZh: '父母不像樣，孩子也不像樣。',
        options: [
            { text: 'も…も', reason: '正確！「が/も〜なら〜も〜だ」表示「上樑不正下樑歪」。' },
            { text: 'と…と', reason: '語法不自然。' },
            { text: 'が…が', reason: '語法不自然。' },
            { text: 'は…は', reason: '語法不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「も〜なら〜も〜だ」表兩者都不好',
            analysis: '「AもAなら、BもBだ」表示「A也不怎麼樣，B也不怎麼樣」，用於批評兩者都有問題。',
            comparisons: ['も〜なら〜も〜だ：兩者都有問題（批判）', 'も〜も：〜也〜也（一般列舉）', 'にしろ〜にしろ：不管〜還是'],
            commonMistakes: ['○ 親も親なら子も子だ / × 親が親なら子が子だ → 用「も」不用「が」（第二個也可用「も」）'],
        },
    },
    // ━━━ がましい (unpleasant, suggestive of) ━━━
    {
        id: 'g_n1_345', category: 'grammar', level: 'N1', tags: ['expression', 'appearance'],
        stem: '彼{かれ}の言{い}い方{かた}はいつも押{お}し付{つ}け___。',
        stemZh: '他的說法總是帶有強迫感。',
        options: [
            { text: 'がましい', reason: '正確！「がましい」表示「帶有〜的感覺」（多負面）。' },
            { text: 'っぽい', reason: '「っぽい」表傾向但過於口語。' },
            { text: 'めいた', reason: '「めいた」表帶有〜氣息但語感不同。' },
            { text: 'らしい', reason: '「らしい」表像〜的但語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「がましい」表帶有某種令人不快的感覺',
            analysis: '「N＋がましい」表示「帶有〜的感覺」「像〜似的」，多用於負面評價。常見：「押し付けがましい」「恩着せがましい」。',
            comparisons: ['がましい：帶有〜感（多負面/書面語）', 'めいた：帶有〜氣息（較中性）', 'じみた：像〜似的（多負面）'],
            commonMistakes: ['○ 押し付けがましい / × 押し付けのがましい → 直接接「がましい」'],
        },
    },
    // ━━━ ぶる (to pretend) ━━━
    {
        id: 'g_n1_346', category: 'grammar', level: 'N1', tags: ['expression', 'pretense'],
        stem: '彼{かれ}はいつも知{し}った___をしている。',
        stemZh: '他總是一副裝作什麼都知道的樣子。',
        options: [
            { text: 'ぶり', reason: '「ぶり」表樣子但語義稍不同。' },
            { text: 'かぶり', reason: '語法不自然。' },
            { text: 'ふり', reason: '「ふり」表假裝但接法不同。' },
            { text: 'かぶり', reason: '語法不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ぶる」表裝腔作勢',
            analysis: '「N/Adj＋ぶる」表示「擺出〜的架子」「裝作〜」。常見：「偉ぶる」「知ったかぶり」「大人ぶる」。',
            comparisons: ['ぶる：裝作〜（批判/負面）', 'ふりをする：假裝〜（一般）', 'めかす：打扮成〜'],
            commonMistakes: ['○ 知ったかぶり / × 知ったかぶる → 名詞化用「ぶり」，動詞用「ぶる」'],
        },
    },
    // ━━━ びる (to look like) ━━━
    {
        id: 'g_n1_347', category: 'grammar', level: 'N1', tags: ['expression', 'appearance'],
        stem: '彼女{かのじょ}は年齢{ねんれい}の割{わり}に大人{おとな}___ている。',
        stemZh: '她相較於年齡顯得很成熟。',
        options: [
            { text: 'びて', reason: '正確！「びる」表示「帶有〜的樣子」。' },
            { text: 'ぶって', reason: '「ぶって」表裝作但語義不同。' },
            { text: 'めいて', reason: '「めいて」也表帶有但接法不同。' },
            { text: 'らしく', reason: '「らしく」表像〜地但語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「びる」表自然地帶有某種樣子',
            analysis: '「N＋びる」表示「帶有〜的樣子」「像〜似的」。與「ぶる」（裝的）不同，「びる」較為自然。常見：「大人びる」「古びる」。',
            comparisons: ['びる：自然地像〜（不是裝的）', 'ぶる：裝成〜（裝腔作勢）', 'めく：帶有〜氣息'],
            commonMistakes: ['○ 大人びている / × 大人をびている → 名詞直接接「びる」'],
        },
    },
    // ━━━ ぶり / っぷり (manner / style) ━━━
    {
        id: 'g_n1_348', category: 'grammar', level: 'N1', tags: ['expression', 'manner'],
        stem: '彼{かれ}の食{た}べ___は豪快{ごうかい}だ。',
        stemZh: '他吃東西的樣子很豪邁。',
        options: [
            { text: 'っぷり', reason: '正確！「っぷり」表示「〜的樣子」「〜的方式」。' },
            { text: '方', reason: '「方」表做法但不如「っぷり」帶有評價感。' },
            { text: 'ぶり', reason: '「ぶり」也可以但「っぷり」更強調方式。' },
            { text: 'さま', reason: '「さま」表樣子但較書面化。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「っぷり」表行為的樣子/風格',
            analysis: '「Vます形＋っぷり」表示「做〜的樣子」「做〜的風格」，帶有評價的語氣。常見：「食べっぷり」「飲みっぷり」。',
            comparisons: ['っぷり：〜的樣子/風格（帶評價）', 'ぶり：〜的方式/隔〜之後', '方：做〜的方法（一般）'],
            commonMistakes: ['○ 食べっぷり / × 食べるっぷり → 用ます形去「ます」接「っぷり」'],
        },
    },
    // ━━━ かたがた (while also / for the purpose of) ━━━
    {
        id: 'g_n1_349', category: 'grammar', level: 'N1', tags: ['formal', 'dual_purpose'],
        stem: 'お礼{れい}___、先日{せんじつ}お世話{せわ}になった方{かた}を訪{たず}ねた。',
        stemZh: '順便致謝，拜訪了前幾天受照顧的人。',
        options: [
            { text: 'かたがた', reason: '正確！「かたがた」表示「順便〜」「兼帶〜」。' },
            { text: 'がてら', reason: '「がてら」也表順便但不如前者正式。' },
            { text: 'ついでに', reason: '「ついでに」表順便但過於口語。' },
            { text: 'を兼ねて', reason: '「を兼ねて」表兼做但接法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かたがた」表兼帶目的（正式）',
            analysis: '「N＋かたがた」表示「兼帶〜」「順便〜」，是非常正式禮貌的表現，常用於書信或正式拜訪。',
            comparisons: ['かたがた：兼帶（最正式/書信常用）', 'がてら：順便（書面語）', 'ついでに：順便（口語）'],
            commonMistakes: ['○ お礼かたがた / × お礼のかたがた → 名詞直接接「かたがた」'],
        },
    },
    // ━━━ かつて (once / formerly) ━━━
    {
        id: 'g_n1_350', category: 'grammar', level: 'N1', tags: ['expression', 'time'],
        stem: 'ここは___湖{みずうみ}だったそうだ。',
        stemZh: '據說這裡以前曾是一片湖泊。',
        options: [
            { text: '昔', reason: '「昔」表以前但不如「かつて」書面化。' },
            { text: 'かつて', reason: '正確！「かつて」表示「曾經」「以前」。' },
            { text: '以前', reason: '「以前」表以前但語體太普通。' },
            { text: '前に', reason: '「前に」表之前但語體太口語。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「かつて」表曾經（書面語）',
            analysis: '「かつて」是副詞，表示「曾經」「以前」。也可用於否定：「かつてない」＝「前所未有的」。',
            comparisons: ['かつて：曾經（書面語/文學性）', '昔：以前（一般）', 'かつてない：前所未有的（否定用法）'],
            commonMistakes: ['○ かつて湖だった / × かつては湖だった → 加「は」也可以但不加更自然'],
        },
    },
    // ━━━ こととて (since / because) ━━━
    {
        id: 'g_n1_351', category: 'grammar', level: 'N1', tags: ['literary', 'reason'],
        stem: '不慣{ふな}れな___、失礼{しつれい}がありましたらお許{ゆる}しください。',
        stemZh: '因為還不熟悉，如有失禮之處請見諒。',
        options: [
            { text: 'こととて', reason: '正確！「こととて」表示「因為是〜所以」（文語）。' },
            { text: 'ことで', reason: '「ことで」也表原因但不如前者書面化。' },
            { text: 'ことから', reason: '「ことから」表因為但接法不同。' },
            { text: 'ことだから', reason: '「ことだから」表因為（某人一貫的個性），語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「こととて」表原因（文語）',
            analysis: '「N/文＋こととて」是文語表現，表示「因為是〜的情況」，常用於道歉或辯解的場合。',
            comparisons: ['こととて：因為是〜（文語/道歉常用）', 'ことで：因為〜（一般）', 'ことだから：因為（某人的性格/習慣）'],
            commonMistakes: ['○ 不慣れなこととて / × 不慣れこととて → な形容詞加「な」'],
        },
    },
    // ━━━ ことのないように (so that... doesn't happen) ━━━
    {
        id: 'g_n1_352', category: 'grammar', level: 'N1', tags: ['formal', 'prevention'],
        stem: '遅刻{ちこく}する___、早{はや}めに出{で}かけてください。',
        stemZh: '為了不遲到，請提早出門。',
        options: [
            { text: 'ことのないように', reason: '正確！「ことのないように」表示「為了不讓〜發生」。' },
            { text: 'ないように', reason: '「ないように」也可以但不如前者正式。' },
            { text: 'ことがないように', reason: '「ことがないように」也可以但「ことのないように」更書面化。' },
            { text: 'ないために', reason: '「ないために」語法不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことのないように」表防止發生',
            analysis: '「V辭書形＋ことのないように」表示「為了不讓〜發生」「以免〜」，是正式的注意事項表現。',
            comparisons: ['ことのないように：為了不〜（正式注意事項）', 'ないように：為了不〜（一般）', 'ことのないよう：同上（省略「に」）'],
            commonMistakes: ['○ 遅刻することのないように / × 遅刻しないことのないように → 用辭書形'],
        },
    },
    // ━━━ ときたら (speaking of - with dissatisfaction) ━━━
    {
        id: 'g_n1_353', category: 'grammar', level: 'N1', tags: ['expression', 'criticism'],
        stem: 'うちの息子{むすこ}___、毎日{まいにち}ゲームばかりしている。',
        stemZh: '說起我家兒子，每天就只顧著打遊戲。',
        options: [
            { text: 'ときたら', reason: '正確！「ときたら」表示「說起〜（含不滿）」。' },
            { text: 'といえば', reason: '「といえば」表說到但不含不滿。' },
            { text: 'というと', reason: '「というと」表說到但不含不滿。' },
            { text: 'ったら', reason: '「ったら」也表不滿但更口語化。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ときたら」表提及某人時的不滿',
            analysis: '「N＋ときたら」表示「說起〜」，帶有對該人或事的不滿、抱怨語氣。',
            comparisons: ['ときたら：說起〜（不滿/抱怨）', 'といえば：說到〜（中性聯想）', 'ったら：說起〜（不滿/口語）'],
            commonMistakes: ['○ 息子ときたら / × 息子がときたら → 名詞直接接「ときたら」'],
        },
    },
    // ━━━ ともなく (unconsciously) ━━━
    {
        id: 'g_n1_354', category: 'grammar', level: 'N1', tags: ['expression', 'unconscious'],
        stem: '窓{まど}の外{そと}を見{み}る___見{み}ていると、雨{あめ}が降{ふ}り出{だ}した。',
        stemZh: '漫不經心地看著窗外，就下起雨來了。',
        options: [
            { text: 'ともなく', reason: '正確！「ともなく」表示「無意識地〜」。' },
            { text: 'こともなく', reason: '語法不自然。' },
            { text: 'ないで', reason: '「ないで」表不做而但語義不同。' },
            { text: 'ながら', reason: '「ながら」表一邊但不強調無意識。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ともなく」表漫不經心地',
            analysis: '「V辭書形＋ともなく/ともなしに」表示「無意識地〜」「漫不經心地〜」。常見：「聞くともなく」「見るともなく」。',
            comparisons: ['ともなく：漫不經心地（無意識）', 'ともなしに：同上', 'ながら：一邊〜一邊（有意識的同時進行）'],
            commonMistakes: ['○ 見るともなく見ていると / × 見ないともなく → 用辭書形重複同一動詞'],
        },
    },
    // ━━━ とも〜とも (can't tell which) ━━━
    {
        id: 'g_n1_355', category: 'grammar', level: 'N1', tags: ['expression', 'ambiguity'],
        stem: '彼{かれ}の表情{ひょうじょう}は笑{わら}っている___泣{な}いている___つかない。',
        stemZh: '他的表情分不出是在笑還是在哭。',
        options: [
            { text: 'とも…とも', reason: '正確！「とも〜とも」表示「分不出是〜還是〜」。' },
            { text: 'か…か', reason: '「か〜か」表或者但不如前者強調不確定。' },
            { text: 'やら…やら', reason: '「やら〜やら」也表不確定但接法不同。' },
            { text: 'のか…のか', reason: '「のか〜のか」表疑問但接法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とも〜とも」表無法判別',
            analysis: '「〜とも〜ともつかない」表示「分不清是〜還是〜」「似〜非〜」，用於描述曖昧不明的狀態。',
            comparisons: ['とも〜ともつかない：分不出是〜還是（曖昧）', 'か〜かわからない：不知道是〜還是', 'やら〜やら：不知是〜還是'],
            commonMistakes: ['○ 笑っているとも泣いているともつかない / × 笑いとも泣きとも → 用動詞終止形'],
        },
    },
    // ━━━ とされる (is considered to be) ━━━
    {
        id: 'g_n1_356', category: 'grammar', level: 'N1', tags: ['formal', 'assertion'],
        stem: 'この遺跡{いせき}は約{やく}3000年前{ねんまえ}のもの___。',
        stemZh: '這個遺跡據認為是大約三千年前的。',
        options: [
            { text: 'だそうだ', reason: '「だそうだ」表聽說但不夠學術化。' },
            { text: 'とされる', reason: '正確！「とされる」表示「被認為是〜」。' },
            { text: 'と言われている', reason: '「と言われている」也可以但不如前者學術化。' },
            { text: 'らしい', reason: '「らしい」表好像但語體太口語。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「とされる」表學術性的認定',
            analysis: '「〜とされる/とされている」表示「被認為是〜」「被視為〜」，是學術論文和新聞報導中常見的客觀表述。',
            comparisons: ['とされる：被認為是（學術/客觀）', 'と言われている：據說（傳聞）', 'と見られている：被看作（推測）'],
            commonMistakes: ['○ ものとされる / × ものだとされる → 名詞接「とされる」時不加「だ」'],
        },
    },
    // ━━━ ても知らない (I won't care) ━━━
    {
        id: 'g_n1_357', category: 'grammar', level: 'N1', tags: ['expression', 'warning'],
        stem: 'そんなに食{た}べたら、お腹{なか}を壊{こわ}し___。',
        stemZh: '吃那麼多的話，肚子壞掉了我可不管。',
        options: [
            { text: 'ても知らないよ', reason: '正確！「ても知らない」表示「〜了我可不管」。' },
            { text: 'たら大変だよ', reason: '「たら大変だよ」表不得了但不是固定表現。' },
            { text: 'てはいけない', reason: '「てはいけない」表不可以，語義不同。' },
            { text: 'ないで', reason: '「ないで」表不要但語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ても知らない」表後果自負的警告',
            analysis: '「Vて形＋も知らない(よ/ぞ)」表示「即使〜了我也不管」「後果自負」，用於警告。',
            comparisons: ['ても知らない：我可不管（警告/責任外推）', 'ても構わない：即使也無妨（許可）', 'ても平気だ：即使也沒關係'],
            commonMistakes: ['○ 壊しても知らないよ / × 壊すても知らないよ → 用て形接'],
        },
    },
    // ━━━ といったところだ (at best) - contextual ━━━
    {
        id: 'g_n1_358', category: 'grammar', level: 'N1', tags: ['expression', 'estimation'],
        stem: '毎月{まいつき}の貯金{ちょきん}は、せいぜい三万円{さんまんえん}___。',
        stemZh: '每個月的存款，充其量也就三萬日圓。',
        options: [
            { text: 'といったところだ', reason: '正確！「といったところだ」表示「大致就是〜」。' },
            { text: 'というわけだ', reason: '「というわけだ」表也就是說但語義不同。' },
            { text: 'というものだ', reason: '「というものだ」表這才叫但語義不同。' },
            { text: 'に過ぎない', reason: '「に過ぎない」表只不過但語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「といったところだ」表謙虛估計',
            analysis: '「〜といったところだ」表示「充其量就是〜程度」「大致就是〜」，帶有謙虛或客觀的估量。',
            comparisons: ['といったところだ：充其量（謙虛估計）', 'くらいのものだ：也就只有〜了', 'に過ぎない：只不過是'],
            commonMistakes: ['○ 三万円といったところだ / × 三万円だといったところだ → 名詞直接接'],
        },
    },
    // ━━━ というわけだ (that's why) ━━━
    {
        id: 'g_n1_359', category: 'grammar', level: 'N1', tags: ['expression', 'conclusion'],
        stem: '彼{かれ}は日本{にほん}に10年{ねん}住{す}んでいた。___日本語{にほんご}が上手{じょうず}な___。',
        stemZh: '他在日本住了十年。難怪日語那麼好。',
        options: [
            { text: 'だから…わけだ', reason: '「だから〜わけだ」也可以但不如「というわけだ」簡潔。' },
            { text: 'それで…というわけだ', reason: '正確！「というわけだ」表示「也就是說」「難怪」。' },
            { text: 'そのため…のだ', reason: '「のだ」也表解釋但語感不同。' },
            { text: 'だから…はずだ', reason: '「はずだ」表應該但語義稍不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「というわけだ」表恍然大悟的推論',
            analysis: '「〜というわけだ」表示「也就是說〜」「難怪〜」，用於根據前面的資訊得出結論。',
            comparisons: ['というわけだ：也就是說/難怪（推論/領悟）', 'ということだ：意思是/據說', 'わけだ：難怪（自然推論）'],
            commonMistakes: ['○ 上手なわけだ / × 上手わけだ → な形容詞加「な」'],
        },
    },
    // ━━━ というわけではない (it doesn't mean that) ━━━
    {
        id: 'g_n1_360', category: 'grammar', level: 'N1', tags: ['expression', 'partial_negation'],
        stem: '嫌{きら}い___。ただ今{いま}は食{た}べたくないだけだ。',
        stemZh: '並不是討厭。只是現在不想吃而已。',
        options: [
            { text: 'というわけではない', reason: '正確！「というわけではない」表示「並不是說〜」。' },
            { text: 'ではない', reason: '「ではない」表不是但過於直接。' },
            { text: 'とは限らない', reason: '「とは限らない」表未必但語義不同。' },
            { text: 'わけがない', reason: '「わけがない」表不可能，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「というわけではない」表部分否定',
            analysis: '「〜というわけではない」表示「並不是說〜」「也不見得〜」，用於部分否定或澄清誤解。',
            comparisons: ['というわけではない：並不是說（部分否定）', 'わけではない：並非（部分否定）', 'とは限らない：未必（不一定）'],
            commonMistakes: ['○ 嫌いというわけではない / × 嫌いだというわけではない → 名詞/Na可直接接'],
        },
    },
    // ━━━ ても差し支えない (advanced context) ━━━
    {
        id: 'g_n1_361', category: 'grammar', level: 'N1', tags: ['formal', 'permission'],
        stem: 'ご質問{しつもん}がございましたら、いつでもお電話{でんわ}いただい___。',
        stemZh: '如有疑問，隨時來電也沒關係。',
        options: [
            { text: 'てもよろしいです', reason: '「てもよろしいです」也表可以但不如前者正式。' },
            { text: 'ても差し支えございません', reason: '正確！「ても差し支えない」的敬語形式，表「無妨」。' },
            { text: 'てもかまいません', reason: '「てもかまいません」也表可以但不如前者正式。' },
            { text: 'てください', reason: '「てください」表請做但語義不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ても差し支えございません」表最高敬語的許可',
            analysis: '「ても差し支えございません」是「ても差し支えない」的最高敬語形式，用於極其正式的商務場合。',
            comparisons: ['ても差し支えございません：無妨（最高敬語）', 'ても差し支えありません：無妨（敬語）', 'ても構いません：無妨（一般敬語）'],
            commonMistakes: ['○ いただいても差し支えございません / × いただいて差し支えございません → 必須有「も」'],
        },
    },
    // ━━━ ともあろう者が (advanced) ━━━
    {
        id: 'g_n1_362', category: 'grammar', level: 'N1', tags: ['expression', 'reproach'],
        stem: '大臣{だいじん}___、公{おおやけ}の場{ば}で不適切{ふてきせつ}な発言{はつげん}をするとは。',
        stemZh: '堂堂大臣竟然在公開場合說出不恰當的話。',
        options: [
            { text: 'ともあろう者が', reason: '正確！「ともあろう者が」表示「堂堂〜竟然」。' },
            { text: 'としたことが', reason: '「としたことが」表驚訝但語氣較弱。' },
            { text: 'たるものが', reason: '「たるものが」也可以但不如前者強調批判。' },
            { text: 'といえども', reason: '「といえども」表即使但語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ともあろう者が」表對高位者的批判',
            analysis: '「N＋ともあろう者が」表示「身為〜地位的人竟然」，用於批判地位高的人做出不符身分的事。',
            comparisons: ['ともあろう者が：堂堂〜竟然（強烈批判）', 'としたことが：〜居然（驚訝）', 'たるものが：身為〜竟然（文語批判）'],
            commonMistakes: ['○ 大臣ともあろう者が / × 大臣のともあろう者が → 名詞直接接'],
        },
    },
    // ━━━ に至っては (as for... it's even worse) ━━━
    {
        id: 'g_n1_363', category: 'grammar', level: 'N1', tags: ['expression', 'extremity'],
        stem: '兄{あに}の成績{せいせき}もひどいが、弟{おとうと}___赤点{あかてん}だらけだ。',
        stemZh: '哥哥的成績也夠糟的了，至於弟弟更是紅字連連。',
        options: [
            { text: 'に至っては', reason: '正確！「に至っては」表示「至於〜更是」（極端情況）。' },
            { text: 'に関しては', reason: '「に関しては」表關於但不強調更嚴重。' },
            { text: 'については', reason: '「については」表關於但不強調極端。' },
            { text: 'になると', reason: '「になると」表到〜的話但不強調更甚。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に至っては」表極端例子',
            analysis: '「N＋に至っては」表示「至於〜更是（嚴重）」，用於提出最極端的例子。',
            comparisons: ['に至っては：至於〜更是（極端化）', 'に至る：發展到〜', 'に至るまで：甚至到〜（範圍）'],
            commonMistakes: ['○ 弟に至っては / × 弟が至っては → 助詞用「に」'],
        },
    },
    // ━━━ に至っても (even when reaching) ━━━
    {
        id: 'g_n1_364', category: 'grammar', level: 'N1', tags: ['formal', 'persistence'],
        stem: 'ここ___、彼{かれ}は自分{じぶん}の非{ひ}を認{みと}めない。',
        stemZh: '即使到了這個地步，他依然不承認自己的錯。',
        options: [
            { text: 'に至っても', reason: '正確！「に至っても」表示「即使到了〜的地步也」。' },
            { text: 'になっても', reason: '「になっても」表即使成為但不如前者正式。' },
            { text: 'に達しても', reason: '「に達しても」表達到但語感不同。' },
            { text: 'まで来ても', reason: '「まで来ても」語義相近但冗長。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に至っても」表到了極端地步依然',
            analysis: '「N＋に至っても」表示「即使到了〜的地步也〜」，強調某種狀態的持續令人驚訝。',
            comparisons: ['に至っても：即使到了〜地步（驚訝/批判）', 'になっても：即使成為（一般讓步）', 'に至る：發展到（中性描述）'],
            commonMistakes: ['○ ここに至っても / × ここが至っても → 助詞用「に」'],
        },
    },
    // ━━━ あっての (owes to) ━━━
    {
        id: 'g_n1_365', category: 'grammar', level: 'N1', tags: ['expression', 'gratitude'],
        stem: 'ファン___アイドルだ。感謝{かんしゃ}の気持{きも}ちを忘{わす}れてはいけない。',
        stemZh: '有了粉絲才有偶像。不可以忘記感恩的心情。',
        options: [
            { text: 'あっての', reason: '正確！「あっての」表示「有了〜才有」。' },
            { text: 'があるから', reason: '「があるから」語義相近但不如前者簡潔。' },
            { text: 'のおかげの', reason: '語法不自然。' },
            { text: 'なしでは', reason: '「なしでは」表沒有但接法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「あっての」表有了〜才有',
            analysis: '「N＋あっての＋N」表示「有了A才有B」「正因為有A才能有B」，強調A的不可或缺性。',
            comparisons: ['あっての：有了〜才有（感謝/因果）', 'なくしては：沒有〜就不行（反面表述）', 'のおかげで：多虧了〜'],
            commonMistakes: ['○ ファンあってのアイドル / × ファンがあってのアイドル → 不加「が」'],
        },
    },
    // ━━━ 敢えて (dare to) ━━━
    {
        id: 'g_n1_366', category: 'grammar', level: 'N1', tags: ['expression', 'determination'],
        stem: '反対{はんたい}されることを承知{しょうち}の上{うえ}で、___言{い}わせてもらう。',
        stemZh: '明知會被反對，還是硬要說。',
        options: [
            { text: 'あえて', reason: '正確！「あえて」表示「硬要〜」「敢於〜」。' },
            { text: 'わざと', reason: '「わざと」表故意但不如前者帶有勇氣感。' },
            { text: 'あくまで', reason: '「あくまで」表始終但語義不同。' },
            { text: 'しいて', reason: '「しいて」表勉強的話但語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「あえて」表敢於、硬要',
            analysis: '「あえて」是副詞，表示「明知可能不好但仍然硬要〜」「敢於〜」，帶有覺悟或勇氣的語感。',
            comparisons: ['あえて：硬要/敢於（有覺悟的決定）', 'わざと：故意（有意為之）', 'あくまで：始終/徹底'],
            commonMistakes: ['○ あえて言わせてもらう / × あえてに言わせてもらう → 直接修飾動詞'],
        },
    },
    // ━━━ あくまでも (to the very end) ━━━
    {
        id: 'g_n1_367', category: 'grammar', level: 'N1', tags: ['expression', 'persistence'],
        stem: '彼{かれ}は___自分{じぶん}の意見{いけん}を主張{しゅちょう}し続{つづ}けた。',
        stemZh: '他始終堅持自己的意見。',
        options: [
            { text: 'あくまでも', reason: '正確！「あくまでも」表示「始終」「徹底地」。' },
            { text: 'ずっと', reason: '「ずっと」表一直但不如前者強調堅持。' },
            { text: 'いつまでも', reason: '「いつまでも」表永遠但不強調態度堅決。' },
            { text: 'どこまでも', reason: '「どこまでも」表到哪裡都但語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「あくまでも」表徹底堅持',
            analysis: '「あくまでも」是副詞，表示「始終」「到底」「徹底地」，強調不妥協的態度。',
            comparisons: ['あくまでも：始終/徹底（堅持不讓步）', 'ずっと：一直（時間的持續）', 'どこまでも：到哪裡都（不限範圍）'],
            commonMistakes: ['○ あくまでも主張し続けた / × あくまで主張し続けた → 加「も」語氣更強'],
        },
    },
    // ━━━ 案の定 (as expected) ━━━
    {
        id: 'g_n1_368', category: 'grammar', level: 'N1', tags: ['expression', 'expectation'],
        stem: '天気予報{てんきよほう}通{どお}り、___雨{あめ}が降{ふ}ってきた。',
        stemZh: '正如天氣預報所說，果然下起雨來了。',
        options: [
            { text: '案の定', reason: '正確！「案の定」表示「果然」「不出所料」。' },
            { text: 'やはり', reason: '「やはり」也表果然但不如前者書面化。' },
            { text: '思った通り', reason: '「思った通り」表如預想但不如前者簡潔。' },
            { text: '結局', reason: '「結局」表結果但不表預料之中。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「案の定」表不出所料',
            analysis: '「案の定」是副詞，表示「果然」「不出所料」，用於預料之中的事情果然發生。',
            comparisons: ['案の定：果然（書面語/預料之中）', 'やはり：果然（一般）', '思った通り：如預想的（一般）'],
            commonMistakes: ['○ 案の定降ってきた / × 案の定に降ってきた → 直接修飾動詞不加「に」'],
        },
    },
    // ━━━ あらかじめ (in advance) ━━━
    {
        id: 'g_n1_369', category: 'grammar', level: 'N1', tags: ['formal', 'preparation'],
        stem: '___ご予約{よやく}いただければ、お待{ま}たせしません。',
        stemZh: '如果事先預約的話，就不會讓您久等。',
        options: [
            { text: '前もって', reason: '「前もって」也表事先但不如「あらかじめ」正式。' },
            { text: 'あらかじめ', reason: '正確！「あらかじめ」表示「預先」「事前」。' },
            { text: '先に', reason: '「先に」表先但過於口語。' },
            { text: '事前に', reason: '「事前に」也可以但不如前者書面化。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「あらかじめ」表預先準備',
            analysis: '「あらかじめ」是副詞，表示「預先」「事前」，用於正式場合的事前準備或通知。',
            comparisons: ['あらかじめ：預先（書面語/正式）', '前もって：事先（一般）', '事前に：事前（一般正式）'],
            commonMistakes: ['○ あらかじめご予約 / × あらかじめにご予約 → 直接修飾動詞不加「に」'],
        },
    },
    // ━━━ 何しろ (after all / because) ━━━
    {
        id: 'g_n1_370', category: 'grammar', level: 'N1', tags: ['expression', 'emphasis'],
        stem: '___初{はじ}めてのことだから、うまくいかなくても仕方{しかた}がない。',
        stemZh: '畢竟是第一次做，做不好也沒辦法。',
        options: [
            { text: '何しろ', reason: '正確！「何しろ」表示「畢竟」「不管怎麼說」。' },
            { text: 'なにせ', reason: '「なにせ」也可以，是同義的口語表現。' },
            { text: 'とにかく', reason: '「とにかく」表總之但語義稍不同。' },
            { text: 'だって', reason: '「だって」表因為但過於口語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「何しろ」表提出理由來辯解',
            analysis: '「何しろ」是副詞，表示「不管怎麼說」「畢竟」，用於提出理由來為某事做辯解或強調。',
            comparisons: ['何しろ：畢竟/不管怎麼說（強調理由）', 'なにせ：同上（較口語）', 'とにかく：總之（轉換話題）'],
            commonMistakes: ['○ 何しろ初めてだから / × 何しろに初めてだから → 直接修飾後面的句子'],
        },
    },
    // ━━━ ならいざしらず (if it were... that's another matter) ━━━
    {
        id: 'g_n1_371', category: 'grammar', level: 'N1', tags: ['expression', 'comparison'],
        stem: '子{こ}ども___、大人{おとな}がそんなことをするとは信{しん}じられない。',
        stemZh: '如果是小孩子也就罷了，大人做出那種事真令人難以置信。',
        options: [
            { text: 'ならいざしらず', reason: '正確！「ならいざしらず」表示「如果是〜也就罷了」。' },
            { text: 'ならともかく', reason: '「ならともかく」也可以但不如前者書面化。' },
            { text: 'はさておき', reason: '「はさておき」表暫且不論但語義不同。' },
            { text: 'だったら', reason: '「だったら」表條件但不含「另當別論」的語氣。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ならいざしらず」表如果是〜另當別論',
            analysis: '「N＋ならいざしらず」表示「如果是〜的話還另當別論」「如果是〜也就罷了」，用於對比強調。',
            comparisons: ['ならいざしらず：如果是〜另當別論（書面語）', 'ならともかく：如果是〜也就算了（一般）', 'ならまだしも：如果是〜還好'],
            commonMistakes: ['○ 子どもならいざしらず / × 子どもがならいざしらず → 名詞接「なら」'],
        },
    },
    // ━━━ に値する (worthy of) ━━━
    {
        id: 'g_n1_372', category: 'grammar', level: 'N1', tags: ['formal', 'evaluation'],
        stem: 'この研究{けんきゅう}は注目{ちゅうもく}___。',
        stemZh: '這項研究值得關注。',
        options: [
            { text: 'に値する', reason: '正確！「に値する」表示「值得〜」。' },
            { text: 'に足る', reason: '「に足る」也表值得但接法不同。' },
            { text: 'にたえる', reason: '「にたえる」表經得起但語義稍不同。' },
            { text: 'にふさわしい', reason: '「にふさわしい」表適合但語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に値する」表有〜的價值',
            analysis: '「N＋に値する」表示「值得〜」「有〜的價值」，是正式的書面表現。',
            comparisons: ['に値する：值得（名詞接續/正式）', 'に足る：值得（動詞辭書形接續/文語）', 'にたえる：經得起/值得'],
            commonMistakes: ['○ 注目に値する / × 注目を値する → 助詞用「に」'],
        },
    },
    // ━━━ にあって (in the situation of) ━━━
    {
        id: 'g_n1_373', category: 'grammar', level: 'N1', tags: ['formal', 'situation'],
        stem: '困難{こんなん}な状況{じょうきょう}___、彼{かれ}は冷静{れいせい}だった。',
        stemZh: '在困難的狀況下，他保持了冷靜。',
        options: [
            { text: 'にあって', reason: '正確！「にあって」表示「在〜的情況下」。' },
            { text: 'において', reason: '「において」表在〜中但不如前者強調特殊狀況。' },
            { text: 'にいて', reason: '語法不自然。' },
            { text: 'の中で', reason: '「の中で」表在〜中但語體太普通。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にあって」表處於某特殊狀況',
            analysis: '「N＋にあって」表示「在〜的情況下」「處於〜的立場」，用於正式場合描述特殊狀況。',
            comparisons: ['にあって：在〜的情況下（特殊/正式）', 'において：在〜中（場所/時間/正式）', 'で：在〜（一般）'],
            commonMistakes: ['○ 困難な状況にあって / × 困難な状況があって → 注意「にあって」與「があって」不同'],
        },
    },
    // ━━━ もので (because - excuse) ━━━
    {
        id: 'g_n1_374', category: 'grammar', level: 'N1', tags: ['expression', 'excuse'],
        stem: 'すみません、道{みち}が混{こ}んでいた___、遅{おく}れてしまいました。',
        stemZh: '不好意思，因為路上塞車所以遲到了。',
        options: [
            { text: 'もので', reason: '正確！「もので」表示「因為〜」（辯解語氣）。' },
            { text: 'ので', reason: '「ので」表原因但不如「もので」帶有辯解感。' },
            { text: 'から', reason: '「から」表因為但過於口語。' },
            { text: 'ために', reason: '「ために」表因為但不帶辯解語氣。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「もので」表辯解的原因',
            analysis: '「文＋もので/ものですから」表示「因為〜」，帶有辯解、說明理由的語氣。',
            comparisons: ['もので：因為（辯解/口語）', 'ものだから：因為（辯解/口語）', 'ので：因為（客觀原因）'],
            commonMistakes: ['○ 混んでいたもので / × 混んでいるもので → 常用た形表已發生的事'],
        },
    },
    // ━━━ ものと思われる (it is thought that) ━━━
    {
        id: 'g_n1_375', category: 'grammar', level: 'N1', tags: ['formal', 'estimation'],
        stem: '被害額{ひがいがく}は数億円{すうおくえん}に上{のぼ}る___。',
        stemZh: '損失金額估計達數億日圓。',
        options: [
            { text: 'ものと思われる', reason: '正確！「ものと思われる」表示「一般認為〜」。' },
            { text: 'と思う', reason: '「と思う」表我認為但過於主觀。' },
            { text: 'らしい', reason: '「らしい」表好像但過於口語。' },
            { text: 'に違いない', reason: '「に違いない」表一定是但過於主觀。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ものと思われる」表客觀推測',
            analysis: '「〜ものと思われる」表示「一般認為〜」「被看作〜」，是新聞報導和學術文章中常見的客觀推測表現。',
            comparisons: ['ものと思われる：一般認為（客觀推測/正式）', 'ものと見られる：被看作（客觀推測/正式）', 'と考えられる：被認為（學術）'],
            commonMistakes: ['○ 上るものと思われる / × 上ったものと思われる → 常用辭書形表推測'],
        },
    },
    // ━━━ を押して (in spite of / braving) ━━━
    {
        id: 'g_n1_376', category: 'grammar', level: 'N1', tags: ['literary', 'perseverance'],
        stem: '病{やまい}___出席{しゅっせき}してくれた。',
        stemZh: '帶著病出席了。',
        options: [
            { text: 'を押して', reason: '正確！「を押して」表示「不顧〜」「頂著〜」。' },
            { text: 'をものともせず', reason: '「をものともせず」也表不顧但語感較勇敢。' },
            { text: 'を顧みず', reason: '「を顧みず」也表不顧但語感不同。' },
            { text: 'にもかかわらず', reason: '「にもかかわらず」表儘管但不如前者強調克服。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を押して」表克服困難而做',
            analysis: '「N＋を押して」表示「不顧〜」「頂著〜」「排除〜的阻礙」，帶有克服困難的語感。',
            comparisons: ['を押して：頂著/不顧（克服困難）', 'を押し切って：不顧反對（排除反對）', 'をものともせず：蔑視〜（勇敢挑戰）'],
            commonMistakes: ['○ 病を押して / × 病が押して → 助詞用「を」'],
        },
    },
    // ━━━ ても どうにもならない (useless even if) ━━━
    {
        id: 'g_n1_377', category: 'grammar', level: 'N1', tags: ['expression', 'futility'],
        stem: '今{いま}さら泣{な}い___。',
        stemZh: '事到如今哭也沒有用。',
        options: [
            { text: 'てもどうにもならない', reason: '正確！「てもどうにもならない」表示「即使〜也無濟於事」。' },
            { text: 'ても仕方がない', reason: '「ても仕方がない」也可以但「どうにもならない」更強調無力。' },
            { text: 'ても無駄だ', reason: '「ても無駄だ」表白費但不如前者書面化。' },
            { text: 'ても意味がない', reason: '「ても意味がない」表沒意義但語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てもどうにもならない」表完全無濟於事',
            analysis: '「Vて形＋もどうにもならない」表示「即使做了〜也無濟於事」「怎麼〜也不行」。',
            comparisons: ['てもどうにもならない：即使也無濟於事（絕望/強調）', 'ても仕方がない：即使也沒辦法（無奈）', 'ても無駄だ：即使也白費'],
            commonMistakes: ['○ 泣いてもどうにもならない / × 泣くてもどうにもならない → 用て形'],
        },
    },
    // ━━━ とはいうものの (having said that) ━━━
    {
        id: 'g_n1_378', category: 'grammar', level: 'N1', tags: ['expression', 'concession'],
        stem: '健康{けんこう}に気{き}をつけている___、ときどき夜更{よふ}かしをしてしまう。',
        stemZh: '雖說注意著健康，但有時還是會熬夜。',
        options: [
            { text: 'とはいうものの', reason: '正確！「とはいうものの」表示「雖然是這樣說但」。' },
            { text: 'とはいえ', reason: '「とはいえ」也可以但「とはいうものの」更強調反差。' },
            { text: 'ものの', reason: '「ものの」也表讓步但接法不同。' },
            { text: 'けれども', reason: '「けれども」表轉折但語氣太弱。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とはいうものの」表承認但補充相反情況',
            analysis: '「〜とはいうものの」表示「雖然是這樣說」「話雖如此但」，承認前述事實後補充相反的實際情況。',
            comparisons: ['とはいうものの：話雖如此但（強調反差）', 'とはいえ：雖說（一般讓步）', 'ものの：雖然（書面語讓步）'],
            commonMistakes: ['○ 気をつけているとはいうものの / × 気をつけるとはいうものの → 常用ている形'],
        },
    },
    // ━━━ とは打って変わって (completely changed from) ━━━
    {
        id: 'g_n1_379', category: 'grammar', level: 'N1', tags: ['expression', 'contrast'],
        stem: '昨日{きのう}___、今日{きょう}は素晴{すば}らしい天気{てんき}だ。',
        stemZh: '跟昨天完全不同，今天天氣非常好。',
        options: [
            { text: 'と違って', reason: '「と違って」表不同但不如前者強調突變。' },
            { text: 'とは打って変わって', reason: '正確！「とは打って変わって」表示「與〜判若兩人/完全不同」。' },
            { text: 'に比べて', reason: '「に比べて」表比較但不如前者強調劇變。' },
            { text: 'に引き換え', reason: '「に引き換え」表對比但不如前者強調突變。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「とは打って変わって」表突然完全不同',
            analysis: '「N＋とは打って変わって」表示「與〜完全不同」「一改以往」，強調突然的巨大變化。',
            comparisons: ['とは打って変わって：完全不同（突變/強調）', 'と違って：不同（一般對比）', 'に引き換え：與〜相反（評價性對比）'],
            commonMistakes: ['○ 昨日とは打って変わって / × 昨日が打って変わって → 用「とは」'],
        },
    },
    // ━━━ 尽くす (to exhaust / do thoroughly) ━━━
    {
        id: 'g_n1_380', category: 'grammar', level: 'N1', tags: ['expression', 'completeness'],
        stem: '彼{かれ}は人生{じんせい}の苦{くる}しみを味{あじ}わい___。',
        stemZh: '他嚐遍了人生的苦楚。',
        options: [
            { text: '尽くした', reason: '正確！「尽くす」表示「竭盡」「嚐遍」。' },
            { text: '切った', reason: '「切った」表做完但不如前者強調徹底。' },
            { text: '抜いた', reason: '「抜いた」表堅持到底但語感不同。' },
            { text: '通した', reason: '「通した」表貫徹但語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「尽くす」表徹底地做完',
            analysis: '「Vます形＋尽くす」表示「徹底地做〜」「做盡〜」。常見：「味わい尽くす」「知り尽くす」「やり尽くす」。',
            comparisons: ['尽くす：做盡/竭盡（徹底完成）', '切る：做完/完全（做到極限）', '抜く：堅持到底（克服困難）'],
            commonMistakes: ['○ 味わい尽くす / × 味わう尽くす → 用ます形去「ます」接「尽くす」'],
        },
    },
    // ━━━ ところを見ると (judging from) ━━━
    {
        id: 'g_n1_381', category: 'grammar', level: 'N1', tags: ['expression', 'inference'],
        stem: '電気{でんき}がついている___、まだ起{お}きているようだ。',
        stemZh: '從燈還亮著來看，似乎還醒著。',
        options: [
            { text: 'ところを見ると', reason: '正確！「ところを見ると」表示「從〜來判斷」。' },
            { text: 'ことから', reason: '「ことから」表從〜來看但不如前者自然。' },
            { text: 'ので', reason: '「ので」表因為但不表推測。' },
            { text: 'から見て', reason: '「から見て」也表從〜來看但接法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ところを見ると」表根據觀察推測',
            analysis: '「〜ところを見ると」表示「從〜（的狀況）來判斷」「看〜的樣子」，用於根據觀察做出推測。',
            comparisons: ['ところを見ると：從〜來判斷（觀察推測）', 'ことから：從〜可知（根據事實）', 'からすると：從〜來看（立場推測）'],
            commonMistakes: ['○ ついているところを見ると / × つくところを見ると → 常用ている形'],
        },
    },
    // ━━━ たことにする (pretend that) ━━━
    {
        id: 'g_n1_382', category: 'grammar', level: 'N1', tags: ['expression', 'pretense'],
        stem: '今{いま}の話{はなし}は聞{き}かなかった___してください。',
        stemZh: '剛才的話就當作沒聽到吧。',
        options: [
            { text: 'ことに', reason: '正確！「たことにする」表示「就當作〜」。' },
            { text: 'ように', reason: '語法不自然。' },
            { text: 'ものに', reason: '語法不自然。' },
            { text: 'ふりを', reason: '「ふりをする」表假裝但接法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たことにする」表當作某事',
            analysis: '「Vた形＋ことにする」表示「就當作〜」「假裝〜」，用於將事實以不同的方式處理。',
            comparisons: ['たことにする：當作〜（人為設定）', 'たことになる：結果被當作〜（自然結果）', 'ふりをする：假裝〜（表面行為）'],
            commonMistakes: ['○ 聞かなかったことにする / × 聞かないことにする → 用た形表已發生的反事實'],
        },
    },
    // ━━━ たつもりはない (didn't intend to) ━━━
    {
        id: 'g_n1_383', category: 'grammar', level: 'N1', tags: ['expression', 'denial'],
        stem: '悪{わる}いことをし___が、結果的{けっかてき}に迷惑{めいわく}をかけてしまった。',
        stemZh: '我沒有打算做壞事，但結果給人添了麻煩。',
        options: [
            { text: 'たつもりはない', reason: '正確！「たつもりはない」表示「並沒有打算〜」。' },
            { text: 'ないつもりだ', reason: '「ないつもりだ」表打算不做，語義不同。' },
            { text: 'たわけではない', reason: '「たわけではない」也可以但語感不同。' },
            { text: 'たはずがない', reason: '「たはずがない」表不可能做過，語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たつもりはない」表無意、非本意',
            analysis: '「Vた形＋つもりはない」表示「並沒有打算〜」「不是故意〜的」，用於否認某意圖。',
            comparisons: ['たつもりはない：沒打算〜（否認意圖）', 'つもりはない：不打算〜（否定未來意圖）', 'たわけではない：並非〜（否認事實）'],
            commonMistakes: ['○ したつもりはない / × するつもりはない → 表否認過去意圖用た形'],
        },
    },
    // ━━━ に先立って (prior to) ━━━
    {
        id: 'g_n1_384', category: 'grammar', level: 'N1', tags: ['formal', 'sequence'],
        stem: '会議{かいぎ}___、資料{しりょう}を配{くば}った。',
        stemZh: '在會議之前分發了資料。',
        options: [
            { text: 'に先立って', reason: '正確！「に先立って」表示「在〜之前」。' },
            { text: 'に先駆けて', reason: '「に先駆けて」表率先但語義不同。' },
            { text: 'の前に', reason: '「の前に」表之前但不夠正式。' },
            { text: 'に際して', reason: '「に際して」表在〜之際但不表事前。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に先立って」表在〜之前（正式）',
            analysis: '「N＋に先立って/に先立ち」表示「在〜之前」，用於正式場合的事前準備或程序。',
            comparisons: ['に先立って：在〜之前（正式程序）', 'に先駆けて：率先/搶先（積極領先）', 'の前に：在〜之前（一般）'],
            commonMistakes: ['○ 会議に先立って / × 会議を先立って → 助詞用「に」'],
        },
    },
    // ━━━ ものとして (assuming that) ━━━
    {
        id: 'g_n1_385', category: 'grammar', level: 'N1', tags: ['formal', 'assumption'],
        stem: '全員{ぜんいん}参加{さんか}する___、計画{けいかく}を立{た}てよう。',
        stemZh: '就假設全員參加來制定計劃吧。',
        options: [
            { text: 'ものとして', reason: '正確！「ものとして」表示「假設為〜」「作為〜來考慮」。' },
            { text: 'として', reason: '「として」表作為但不如前者強調假設。' },
            { text: 'と仮定して', reason: '「と仮定して」也表假設但不如前者簡潔。' },
            { text: 'つもりで', reason: '「つもりで」表打算但語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ものとして」表以某假設為前提',
            analysis: '「〜ものとして」表示「假設〜」「將〜視為前提來考慮」，用於正式的計劃或討論。',
            comparisons: ['ものとして：假設為/作為前提（正式）', 'と仮定して：假設（一般）', 'として：作為（身分/角度）'],
            commonMistakes: ['○ 参加するものとして / × 参加するものにして → 固定搭配「ものとして」'],
        },
    },
    // ━━━ まるっきり (completely) ━━━
    {
        id: 'g_n1_386', category: 'grammar', level: 'N1', tags: ['expression', 'totality'],
        stem: '彼{かれ}の説明{せつめい}は___理解{りかい}できなかった。',
        stemZh: '他的說明完全聽不懂。',
        options: [
            { text: 'まったく', reason: '「まったく」表完全但不如「まるっきり」口語化。' },
            { text: 'まるっきり', reason: '正確！「まるっきり」表示「完全」「全然」。' },
            { text: 'ぜんぜん', reason: '「ぜんぜん」表完全不但更口語。' },
            { text: 'さっぱり', reason: '「さっぱり」表完全不懂但語感不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「まるっきり」表完全（口語化的強調）',
            analysis: '「まるっきり」是副詞，表示「完全」「全然」，是「まるで」「まったく」的口語化加強版，常與否定搭配。',
            comparisons: ['まるっきり：完全（口語化/強調）', 'まったく：完全（一般）', 'さっぱり：完全（特別指不理解）'],
            commonMistakes: ['○ まるっきり理解できない / × まるっきりに理解できない → 直接修飾動詞'],
        },
    },
    // ━━━ も同然だ (practically the same as) ━━━
    {
        id: 'g_n1_387', category: 'grammar', level: 'N1', tags: ['expression', 'equivalence'],
        stem: 'あと一歩{いっぽ}で完成{かんせい}だ。もう完成{かんせい}した___。',
        stemZh: '再差一步就完成了。跟完成了差不多。',
        options: [
            { text: 'も同然だ', reason: '正確！「も同然だ」表示「和〜一樣」「無異於〜」。' },
            { text: 'みたいだ', reason: '「みたいだ」表好像但過於口語。' },
            { text: 'ようなものだ', reason: '「ようなものだ」也可以但不如前者書面化。' },
            { text: 'と同じだ', reason: '「と同じだ」表一樣但不如前者強調實質等同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「も同然だ」表實質上等同',
            analysis: '「N/Vた形＋も同然だ」表示「和〜一樣」「無異於〜」「簡直就是〜」，強調實質上的等同。',
            comparisons: ['も同然だ：和〜一樣（實質等同/書面語）', 'ようなものだ：像〜一樣的東西（比喻）', 'に等しい：等於（書面語）'],
            commonMistakes: ['○ 完成したも同然だ / × 完成しても同然だ → 用た形不是て形'],
        },
    },
    // ━━━ もしないで (without even doing) ━━━
    {
        id: 'g_n1_388', category: 'grammar', level: 'N1', tags: ['expression', 'criticism'],
        stem: '彼{かれ}は挨拶{あいさつ}___帰{かえ}ってしまった。',
        stemZh: '他連打個招呼都不做就回去了。',
        options: [
            { text: 'もしないで', reason: '正確！「もしないで」表示「連〜都不做」。' },
            { text: 'もせずに', reason: '「もせずに」也正確，是文語形式。' },
            { text: 'しないで', reason: '「しないで」表不做但不如前者強調。' },
            { text: 'なしに', reason: '「なしに」表沒有但接法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「もしないで」表連〜都不做（批判）',
            analysis: '「N＋もしないで/もせずに」表示「連〜都不做就〜」，帶有批判語氣。',
            comparisons: ['もしないで：連〜都不做（批判）', 'もせずに：同上（文語）', 'しないで：不做（一般否定）'],
            commonMistakes: ['○ 挨拶もしないで / × 挨拶をもしないで → 助詞用「も」不用「を」'],
        },
    },
    // ━━━ に重ねて (repeatedly / on top of) ━━━
    {
        id: 'g_n1_389', category: 'grammar', level: 'N1', tags: ['formal', 'repetition'],
        stem: '議論{ぎろん}に議論{ぎろん}___、ようやく結論{けつろん}が出{で}た。',
        stemZh: '經過反覆討論，終於得出了結論。',
        options: [
            { text: 'を重ねて', reason: '正確！「に〜を重ねて」表示「反覆〜」「一再地〜」。' },
            { text: 'を繰り返して', reason: '「を繰り返して」也表反覆但不如前者書面化。' },
            { text: 'を続けて', reason: '「を続けて」表持續但不如前者強調堆疊。' },
            { text: 'の上で', reason: '「の上で」表在〜之上但語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に〜を重ねて」表反覆累積',
            analysis: '「N＋に＋N＋を重ねて」表示「反覆地〜」「一再地〜」，用同一名詞重複以強調累積。',
            comparisons: ['に〜を重ねて：反覆〜（強調累積）', 'を繰り返して：反覆做（一般反覆）', 'に次ぐ：接連（一個接一個）'],
            commonMistakes: ['○ 議論に議論を重ねて / × 議論と議論を重ねて → 用「に」不用「と」'],
        },
    },
    // ━━━ のなんのって (extremely - spoken) ━━━
    {
        id: 'g_n1_390', category: 'grammar', level: 'N1', tags: ['expression', 'degree'],
        stem: '昨日{きのう}の試験{しけん}は難{むずか}しい___。',
        stemZh: '昨天的考試難得不得了。',
        options: [
            { text: 'のなんのって', reason: '正確！「のなんのって」表示「別提有多〜了」。' },
            { text: 'ったらない', reason: '「ったらない」也表極其但接法不同。' },
            { text: 'ことこの上ない', reason: '「ことこの上ない」也表極其但不如前者口語化。' },
            { text: 'の何のって', reason: '與正確答案相同的漢字版本。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「のなんのって」表別提有多〜了',
            analysis: '「Adj/V＋のなんのって」表示「別提有多〜了」「〜得不得了」，是口語化的強調表現。',
            comparisons: ['のなんのって：別提有多〜了（口語/強調）', 'ったらない：〜極了（感嘆）', 'ことこの上ない：無以復加（書面語）'],
            commonMistakes: ['○ 難しいのなんのって / × 難しくのなんのって → 用終止形接'],
        },
    },
    // ━━━ のやら〜のやら (not sure if... or...) ━━━
    {
        id: 'g_n1_391', category: 'grammar', level: 'N1', tags: ['expression', 'uncertainty'],
        stem: '嬉{うれ}しい___悲{かな}しい___、複雑{ふくざつ}な気持{きも}ちだ。',
        stemZh: '不知是高興還是悲傷，心情很複雜。',
        options: [
            { text: 'のやら…のやら', reason: '正確！「のやら〜のやら」表示「不知是〜還是〜」。' },
            { text: 'のか…のか', reason: '「のか〜のか」也表不知是但語感不同。' },
            { text: 'とも…とも', reason: '「とも〜とも」也表分不出但接法不同。' },
            { text: 'やら…やら', reason: '「やら〜やら」也可以但不如「のやら」自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「のやら〜のやら」表不確定的困惑',
            analysis: '「〜のやら〜のやら」表示「不知道是〜還是〜」，帶有困惑或茫然的語氣。',
            comparisons: ['のやら〜のやら：不知是〜還是（困惑）', 'とも〜とも：分不出是〜還是（曖昧）', 'のか〜のか：是〜還是（疑問）'],
            commonMistakes: ['○ 嬉しいのやら悲しいのやら / × 嬉しいやら悲しいやら → 加「の」更自然'],
        },
    },
    // ━━━ とは比べものにならない (incomparable) ━━━
    {
        id: 'g_n1_392', category: 'grammar', level: 'N1', tags: ['expression', 'comparison'],
        stem: 'プロの技術{ぎじゅつ}は素人{しろうと}___。',
        stemZh: '專業人士的技術跟外行人根本沒法比。',
        options: [
            { text: 'とは比べものにならない', reason: '正確！「とは比べものにならない」表示「沒法相比」。' },
            { text: 'とは違う', reason: '「とは違う」表不同但不如前者強調差距。' },
            { text: 'より上だ', reason: '「より上だ」表更好但不如前者強調。' },
            { text: 'に勝る', reason: '「に勝る」表勝過但不如前者簡潔。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とは比べものにならない」表天差地別',
            analysis: '「N＋とは比べものにならない」表示「跟〜根本沒法比」「天壤之別」，強調差距極大。',
            comparisons: ['とは比べものにならない：沒法比（差距極大）', 'とは違う：不同（一般差異）', 'に及ばない：比不上（程度差異）'],
            commonMistakes: ['○ 素人とは比べものにならない / × 素人が比べものにならない → 用「とは」'],
        },
    },
    // ━━━ ならではの (unique to) - contextual ━━━
    {
        id: 'g_n1_393', category: 'grammar', level: 'N1', tags: ['expression', 'exclusivity'],
        stem: 'これは手作{てづく}り___温{あたた}かみだ。',
        stemZh: '這是手工製作才有的溫暖感。',
        options: [
            { text: 'ならではの', reason: '正確！「ならではの」表示「只有〜才有的」。' },
            { text: 'だけの', reason: '「だけの」表只有但不如前者強調獨特性。' },
            { text: 'だからこその', reason: '「だからこその」也可以但冗長。' },
            { text: 'にしかない', reason: '語法不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ならではの」修飾名詞表獨特',
            analysis: '「N＋ならではの＋N」表示「只有〜才有的」「〜特有的」，含有讚美語氣。',
            comparisons: ['ならではの：只有〜才有的（讚美/修飾名詞）', 'ならでは：只有〜才（述語用法）', 'だけの：只有的（一般限定）'],
            commonMistakes: ['○ 手作りならではの / × 手作りにならではの → 名詞直接接「ならではの」'],
        },
    },
    // ━━━ にかかっては (when it comes to - ability) ━━━
    {
        id: 'g_n1_394', category: 'grammar', level: 'N1', tags: ['expression', 'ability'],
        stem: '彼{かれ}の手{て}___、どんな故障{こしょう}も直{なお}せる。',
        stemZh: '經他的手的話，什麼故障都修得好。',
        options: [
            { text: 'にかかっては', reason: '正確！「にかかっては」表示「交給〜的話」（讚美能力）。' },
            { text: 'に任せれば', reason: '「に任せれば」也可以但不如前者慣用。' },
            { text: 'にとっては', reason: '「にとっては」表對〜來說但不如前者強調能力。' },
            { text: 'にかけては', reason: '「にかけては」表在〜方面但語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にかかっては」表交給某人就能辦到',
            analysis: '「N＋にかかっては/にかかったら」表示「交給〜的話」「經〜之手的話」，讚美某人的特殊能力。',
            comparisons: ['にかかっては：交給〜就能（讚美能力）', 'にかけては：在〜方面（擅長領域）', 'にかかっている：取決於〜（依賴）'],
            commonMistakes: ['○ 彼の手にかかっては / × 彼にかかっては → 「彼の手に」更自然'],
        },
    },
    // ━━━ に限ったことではない - complex context ━━━
    {
        id: 'g_n1_395', category: 'grammar', level: 'N1', tags: ['expression', 'universality'],
        stem: 'いじめの問題{もんだい}は日本{にほん}___、世界{せかい}中{じゅう}で起{お}きている。',
        stemZh: '霸凌問題不僅限於日本，全世界都有發生。',
        options: [
            { text: 'に限ったことではなく', reason: '正確！「に限ったことではなく」表示「不僅限於〜」。' },
            { text: 'だけでなく', reason: '「だけでなく」也可以但不如前者正式。' },
            { text: 'のみならず', reason: '「のみならず」也可以但語感不同。' },
            { text: 'ばかりではなく', reason: '「ばかりではなく」也可以但不如前者書面化。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に限ったことではなく」表不僅限於（展開論述）',
            analysis: '「N＋に限ったことではなく」表示「不僅限於〜而且」，後面接更廣範圍的內容。',
            comparisons: ['に限ったことではなく：不僅限於（後接擴展）', 'に限ったことではない：不僅限於（句末結束）', 'だけでなく：不僅（一般）'],
            commonMistakes: ['○ 日本に限ったことではなく / × 日本だけに限ったことではなく → 不需要加「だけ」'],
        },
    },
    // ━━━ にかけては (when it comes to) ━━━
    {
        id: 'g_n1_396', category: 'grammar', level: 'N1', tags: ['expression', 'expertise'],
        stem: '料理{りょうり}___、彼女{かのじょ}の右{みぎ}に出{で}る者{もの}はいない。',
        stemZh: '說到做菜，沒有人比得過她。',
        options: [
            { text: 'にかけては', reason: '正確！「にかけては」表示「在〜方面」（自豪/讚美）。' },
            { text: 'に関しては', reason: '「に関しては」表關於但不如前者帶有讚美感。' },
            { text: 'については', reason: '「については」表關於但不帶評價。' },
            { text: 'にかかっては', reason: '「にかかっては」表交給但語義不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にかけては」表在某方面很厲害',
            analysis: '「N＋にかけては」表示「在〜方面」「說到〜的話」，常用於讚美某人在某領域的出色能力。',
            comparisons: ['にかけては：在〜方面（讚美擅長）', 'に関しては：關於〜（中性）', 'にかかっては：交給〜的話（讚美能力）'],
            commonMistakes: ['○ 料理にかけては / × 料理をかけては → 助詞用「に」'],
        },
    },
    // ━━━ ことこの上ない (beyond measure) ━━━
    {
        id: 'g_n1_397', category: 'grammar', level: 'N1', tags: ['literary', 'degree'],
        stem: '彼{かれ}の無礼{ぶれい}な態度{たいど}は不愉快{ふゆかい}な___。',
        stemZh: '他無禮的態度讓人極其不愉快。',
        options: [
            { text: 'ことこの上ない', reason: '正確！「ことこの上ない」表示「無以復加」。' },
            { text: '極まりない', reason: '「極まりない」也表極其但接法不同。' },
            { text: 'の至りだ', reason: '「の至りだ」表〜之至但用於感嘆。' },
            { text: 'の極みだ', reason: '「の極みだ」表〜之極但接法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことこの上ない」表最高程度',
            analysis: '「Na＋なこと(は)この上ない」表示「〜到了極點」「再也沒有比這更〜的了」。',
            comparisons: ['ことこの上ない：無以復加（書面語/最高級）', '極まりない：〜到極點（書面語）', 'この上ない：最〜不過了（形容詞用法）'],
            commonMistakes: ['○ 不愉快なことこの上ない / × 不愉快ことこの上ない → な形容詞加「な」'],
        },
    },
    // ━━━ を禁じ得ない - advanced context ━━━
    {
        id: 'g_n1_398', category: 'grammar', level: 'N1', tags: ['literary', 'emotion'],
        stem: '災害{さいがい}の映像{えいぞう}を見{み}て、涙{なみだ}___。',
        stemZh: '看到災害的影像，禁不住流下了眼淚。',
        options: [
            { text: 'が止まらなかった', reason: '「が止まらなかった」表停不了但不如前者正式。' },
            { text: 'を禁じ得なかった', reason: '正確！「を禁じ得ない」表示「禁不住〜」。' },
            { text: 'が出てきた', reason: '「が出てきた」表流出但過於口語。' },
            { text: 'を堪えられなかった', reason: '「を堪えられなかった」表忍不住但語法不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「を禁じ得ない」表抑制不住',
            analysis: '「N＋を禁じ得ない」表示「禁不住〜」「抑制不住〜」，用於感情自然流露的正式表達。',
            comparisons: ['を禁じ得ない：禁不住（正式書面語）', 'を抑えきれない：抑制不住（一般）', 'に堪えない：不堪/忍不住'],
            commonMistakes: ['○ 涙を禁じ得なかった / × 涙に禁じ得なかった → 助詞用「を」'],
        },
    },
    // ━━━ 思いをする (to experience a feeling) ━━━
    {
        id: 'g_n1_399', category: 'grammar', level: 'N1', tags: ['expression', 'experience'],
        stem: '海外{かいがい}で辛{つら}い___をしたことがある。',
        stemZh: '在國外有過辛苦的經歷。',
        options: [
            { text: '経験', reason: '「経験」也可以但「思い」更強調感受。' },
            { text: '思い', reason: '正確！「思いをする」表示「有〜的感受/經歷」。' },
            { text: '気持ち', reason: '「気持ち」表心情但不如「思い」搭配「をする」自然。' },
            { text: '目', reason: '「目に遭う」也表遭遇但接法不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「思いをする」表經歷某種感受',
            analysis: '「〜思いをする」表示「有〜的感受」「經歷了〜」。常見搭配：「辛い思いをする」「嫌な思いをする」「怖い思いをする」。',
            comparisons: ['思いをする：經歷某感受', '目に遭う：遭遇（負面）', '経験をする：有〜經驗'],
            commonMistakes: ['○ 辛い思いをした / × 辛い思いがした → 「思いをする」助詞用「を」'],
        },
    },
    // ━━━ なんと / なんという (how / what) ━━━
    {
        id: 'g_n1_400', category: 'grammar', level: 'N1', tags: ['expression', 'exclamation'],
        stem: '___美{うつく}しい景色{けしき}だろう。',
        stemZh: '多麼美麗的景色啊。',
        options: [
            { text: 'なんて', reason: '「なんて」也可以但較口語。' },
            { text: 'なんと', reason: '正確！「なんと」表示「多麼〜啊」（感嘆）。' },
            { text: 'どんなに', reason: '「どんなに」表無論多麼但不用於感嘆。' },
            { text: 'いかに', reason: '「いかに」表多麼但過於文語。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「なんと」表感嘆',
            analysis: '「なんと＋Adj/Na＋〜だろう」表示「多麼〜啊」，用於對眼前事物的感嘆。',
            comparisons: ['なんと：多麼〜啊（書面語/感嘆）', 'なんて：多麼〜啊（口語/感嘆）', 'なんという：好一個〜啊（強調名詞）'],
            commonMistakes: ['○ なんと美しい景色だろう / × なんと美しいだろう景色 → 「なんと」放在形容詞前'],
        },
    },
    // ━━━ ずにはおかない (cannot help but; inevitably) ━━━
    {
        id: 'g_n1_401', category: 'grammar', level: 'N1', tags: ['expression', 'inevitability'],
        stem: 'あの映画{えいが}は観客{かんきゃく}を感動{かんどう}さ___。',
        stemZh: '那部電影必定會讓觀眾感動。',
        options: [
            { text: 'せずにはおかない', reason: '正確！「せずにはおかない」表示「必定會使（某人）〜」，使役＋ずにはおかない。' },
            { text: 'せないではいられない', reason: '「ないではいられない」表自己忍不住，不接使役形表對他人的作用。' },
            { text: 'せずにはいられない', reason: '「ずにはいられない」表自己忍不住做某事，主語不同。' },
            { text: 'せざるを得ない', reason: '「ざるを得ない」表不得不做，含無奈，與「必然讓人〜」語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ずにはおかない」表必然引起某結果',
            analysis: '「ずにはおかない」意為「不可能不〜」「必然會〜」，常與使役形連用表示「必定使人〜」。與「ないではおかない」意思相同。',
            comparisons: ['ずにはおかない：必然會〜（書面語）', 'ないではおかない：必然會〜（略口語）', 'ずにはいられない：忍不住〜（自身感受）'],
            commonMistakes: ['○ 感動させずにはおかない / × 感動せずにはおかない → 使役形「させ」＋ずにはおかない'],
        },
    },
    // ━━━ ないではいられない (cannot help but) ━━━
    {
        id: 'g_n1_402', category: 'grammar', level: 'N1', tags: ['expression', 'emotion'],
        stem: '彼{かれ}の苦労{くろう}を思{おも}うと、同情{どうじょう}___。',
        stemZh: '一想到他的辛苦，就忍不住同情。',
        options: [
            { text: 'せざるを得ない', reason: '「ざるを得ない」表不得不，語意偏無奈而非情感自發。' },
            { text: 'しないではいられない', reason: '正確！「ないではいられない」表心情上忍不住要做某事。' },
            { text: 'するまでもない', reason: '「までもない」表沒必要，語意完全不同。' },
            { text: 'しかねない', reason: '「しかねない」表有可能做出（壞事），非情感不自禁。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ないではいられない」表情感上無法抑制',
            analysis: '「ないではいられない」表示某種情感或衝動無法壓抑，「忍不住〜」。動詞ない形＋ではいられない。',
            comparisons: ['ないではいられない：忍不住〜（情感）', 'ずにはいられない：忍不住〜（同義文語形式）', 'ざるを得ない：不得不〜（理性判斷）'],
            commonMistakes: ['○ 同情しないではいられない / × 同情ないではいられない → サ変動詞用「しない」'],
        },
    },
    // ━━━ たが最後 (once...there's no turning back) ━━━
    {
        id: 'g_n1_403', category: 'grammar', level: 'N1', tags: ['expression', 'consequence'],
        stem: 'あの人{ひと}に秘密{ひみつ}を話{はな}し___、すぐに広{ひろ}まってしまう。',
        stemZh: '一旦把秘密告訴那個人，馬上就會傳開。',
        options: [
            { text: 'たら最後', reason: '正確！「たら最後」表示一旦做了就會產生無法挽回的結果。' },
            { text: 'た途端', reason: '「途端」表剛一做就〜，但不含「無法挽回」的語意。' },
            { text: 'たところで', reason: '「たところで」表即使做了也〜（否定結果），文法結構不同。' },
            { text: 'たからには', reason: '「からには」表既然〜就〜，非「一旦〜就完了」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たら最後」表一旦做了就完了',
            analysis: '「たら最後」「たが最後」表示一旦做了某事，就會產生不可逆的（通常是負面的）結果。語氣強烈，多用於警告。',
            comparisons: ['たら最後：一旦〜就完了', 'た途端（に）：剛一〜就〜', 'が早いか：一〜立刻就〜'],
            commonMistakes: ['○ 話したら最後 / × 話すたら最後 → 用動詞た形＋ら最後'],
        },
    },
    // ━━━ が早いか (no sooner...than) ━━━
    {
        id: 'g_n1_404', category: 'grammar', level: 'N1', tags: ['literary', 'time'],
        stem: 'ベルが鳴{な}る___、生徒{せいと}たちは教室{きょうしつ}を飛{と}び出{だ}した。',
        stemZh: '鈴聲一響，學生們就衝出了教室。',
        options: [
            { text: 'や否や', reason: '「や否や」也表剛〜就〜，但接辞書形，此處文脈兩者皆可但選項有更佳答案。' },
            { text: 'が早いか', reason: '正確！「が早いか」表示剛一〜幾乎同時就〜，辞書形＋が早いか。' },
            { text: 'なり', reason: '「なり」表一〜立刻就〜，但接辞書形且主語需一致。' },
            { text: 'たとたんに', reason: '「たとたんに」也表剛一〜就〜，但語感較中性，且接た形。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「が早いか」表幾乎同時發生',
            analysis: '「が早いか」接辞書形，表示前一動作幾乎與後一動作同時發生，含「迫不及待」之意。常用於描述快速連續的動作。',
            comparisons: ['が早いか：一〜就〜（迅速、書面語）', 'や否や：一〜就〜（文語）', 'なり：一〜就〜（主語限定同一人）'],
            commonMistakes: ['○ 鳴るが早いか / × 鳴ったが早いか → 「が早いか」接辞書形'],
        },
    },
    // ━━━ や否や (as soon as) ━━━
    {
        id: 'g_n1_405', category: 'grammar', level: 'N1', tags: ['literary', 'time'],
        stem: '扉{とびら}を開{あ}ける___、猫{ねこ}が飛{と}び出{だ}してきた。',
        stemZh: '一打開門，貓就飛奔出來了。',
        options: [
            { text: 'や否や', reason: '正確！「や否や」接辞書形，表示剛一〜就〜。' },
            { text: 'か否か', reason: '「か否か」表是否〜，為疑問表現，非時間表現。' },
            { text: 'ともなく', reason: '「ともなく」表無意識地〜，與時間先後無關。' },
            { text: 'にもまして', reason: '「にもまして」表比〜更甚，為程度表現。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「や否や」表剛一做就立即發生',
            analysis: '「や否や」接動詞辞書形，表示前一動作剛發生後一動作緊接著發生。書面語色彩濃厚，多用於敘述文。',
            comparisons: ['や否や：一〜就〜（文語、客觀描述）', 'が早いか：一〜就〜（強調快速）', 'なり：一〜就〜（主語同一）'],
            commonMistakes: ['○ 開けるや否や / × 開けたや否や → 「や否や」接辞書形'],
        },
    },
    // ━━━ なり (as soon as) ━━━
    {
        id: 'g_n1_406', category: 'grammar', level: 'N1', tags: ['literary', 'time'],
        stem: '彼{かれ}は家{いえ}に帰{かえ}る___、ソファに倒{たお}れ込{こ}んだ。',
        stemZh: '他一回到家就倒在沙發上。',
        options: [
            { text: 'とたんに', reason: '「とたんに」表剛〜就〜，但接た形。' },
            { text: 'ところを', reason: '「ところを」表正當〜之際，非瞬間連續。' },
            { text: 'なり', reason: '正確！「なり」接辞書形，表一做完某動作馬上就〜，主語同一人。' },
            { text: 'ながら', reason: '「ながら」表同時做兩件事，非先後順序。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「なり」表一〜馬上就〜',
            analysis: '「なり」接動詞辞書形，表示做完前一動作後緊接著做後一動作。特點是前後主語必須相同，且後項多為意外或非預期的行為。',
            comparisons: ['なり：一〜就〜（主語同一、意外）', 'や否や：一〜就〜（主語可不同）', 'が早いか：一〜就〜（強調幾乎同時）'],
            commonMistakes: ['○ 帰るなり / × 帰ったなり → 「なり」接辞書形'],
        },
    },
    // ━━━ ともなく / ともなしに (without intending) ━━━
    {
        id: 'g_n1_407', category: 'grammar', level: 'N1', tags: ['expression', 'unintentional'],
        stem: 'テレビを見{み}る___見ていたら、面白{おもしろ}い番組{ばんぐみ}がやっていた。',
        stemZh: '漫不經心地看著電視，結果發現有個有趣的節目。',
        options: [
            { text: 'こともなく', reason: '「こともなく」表不曾〜，語意不同。' },
            { text: 'ともなく', reason: '正確！「Vともなく＋同一V」表無意識地做某事。' },
            { text: 'までもなく', reason: '「までもなく」表不必〜就〜，非無意識。' },
            { text: 'わけもなく', reason: '「わけもなく」表無緣無故，非此處語意。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ともなく」表漫不經心地〜',
            analysis: '「V＋ともなく＋同一V」或「V＋ともなしに」表示無意識地、不經意地做某事。常見搭配：「見るともなく見る」「聞くともなく聞く」。',
            comparisons: ['ともなく：無意識地〜', 'ともなしに：無意識地〜（同義）', 'とはなしに：同上的口語形'],
            commonMistakes: ['○ 見るともなく見る / × 見たともなく見た → 用辞書形'],
        },
    },
    // ━━━ ならでは (unique to; only possible with) ━━━
    {
        id: 'g_n1_408', category: 'grammar', level: 'N1', tags: ['expression', 'exclusivity'],
        stem: 'この繊細{せんさい}な味{あじ}は京都{きょうと}___の料理{りょうり}だ。',
        stemZh: '這細膩的味道是只有京都才有的料理。',
        options: [
            { text: 'ならでは', reason: '正確！「ならでは」表只有〜才有的、〜特有的。' },
            { text: 'だからこその', reason: '「だからこそ」表正因為〜才〜，但接法不同。' },
            { text: 'にかぎった', reason: '「に限った」表限定，但語意不含「特有」之意。' },
            { text: 'をおいての', reason: '「をおいて」表除了〜沒有，但後接否定。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ならでは」表〜特有的',
            analysis: '「ならでは」接名詞，表示「只有〜才有的」「〜獨特的」，帶有正面評價的語感。常見於讚美某地、某人的獨特之處。',
            comparisons: ['ならでは：只有〜才有（正面）', 'をおいて（他に）ない：除了〜沒有別的', 'こそ：正是〜（強調）'],
            commonMistakes: ['○ 京都ならではの料理 / × 京都のならでは料理 → 「ならでは」接在名詞後面'],
        },
    },
    // ━━━ をおいて〜ない (no one/nothing but) ━━━
    {
        id: 'g_n1_409', category: 'grammar', level: 'N1', tags: ['expression', 'exclusivity'],
        stem: 'このプロジェクトを任{まか}せられるのは、彼女{かのじょ}___他{ほか}にいない。',
        stemZh: '能託付這個項目的，除了她沒有別人。',
        options: [
            { text: 'ならでは', reason: '「ならでは」表〜特有的，後面不接「他にいない」。' },
            { text: 'をもって', reason: '「をもって」表以〜、憑藉〜，語意不同。' },
            { text: 'をおいて', reason: '正確！「をおいて〜ない」表除了〜之外沒有。' },
            { text: 'にして', reason: '「にして」表在〜時候、連〜都〜，此處不適合。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「をおいて〜ない」表除了〜沒有其他',
            analysis: '「をおいて（他に）〜ない」表示除了前項之外沒有其他合適的選擇。帶有強烈肯定前項的語氣。',
            comparisons: ['をおいて〜ない：除了〜沒有（強調唯一）', 'ならでは：只有〜才有（稱讚特色）', 'しか〜ない：只有〜（一般限定）'],
            commonMistakes: ['○ 彼女をおいて他にいない / × 彼女をおいていない → 需要「他に」或否定形式'],
        },
    },
    // ━━━ にひきかえ (in contrast to) ━━━
    {
        id: 'g_n1_410', category: 'grammar', level: 'N1', tags: ['expression', 'contrast'],
        stem: '兄{あに}の勤勉{きんべん}さ___、弟{おとうと}は怠{なま}けてばかりいる。',
        stemZh: '與哥哥的勤奮相比，弟弟總是在偷懶。',
        options: [
            { text: 'にもかかわらず', reason: '「にもかかわらず」表儘管〜，但不強調對比。' },
            { text: 'にひきかえ', reason: '正確！「にひきかえ」表與〜相反、與〜截然不同。' },
            { text: 'にくらべて', reason: '「にくらべて」表與〜相比，語意中性，不含「截然相反」。' },
            { text: 'にしては', reason: '「にしては」表以〜來說〜（出乎意料），非對比。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「にひきかえ」表截然相反的對比',
            analysis: '「にひきかえ」接名詞，表示與前項形成鮮明對比，多含負面評價。常用於一褒一貶的比較。',
            comparisons: ['にひきかえ：與〜截然相反（含褒貶）', 'に比べて：與〜相比（中性）', 'に反して：與〜相反（較客觀）'],
            commonMistakes: ['○ 兄にひきかえ / × 兄のにひきかえ → 名詞直接＋にひきかえ'],
        },
    },
    // ━━━ をものともせず (in defiance of; undaunted by) ━━━
    {
        id: 'g_n1_411', category: 'grammar', level: 'N1', tags: ['expression', 'determination'],
        stem: '彼{かれ}は周囲{しゅうい}の反対{はんたい}___、新事業{しんじぎょう}を立{た}ち上{あ}げた。',
        stemZh: '他不顧周圍的反對，創辦了新事業。',
        options: [
            { text: 'をよそに', reason: '「をよそに」表不顧〜，但語感偏「置之不理」。' },
            { text: 'をものともせず', reason: '正確！「をものともせず」表不畏〜、不把〜當回事，含勇敢語意。' },
            { text: 'もかまわず', reason: '「もかまわず」表不在乎〜，語感較輕。' },
            { text: 'をかえりみず', reason: '「をかえりみず」表不顧〜，但偏「不回頭看」之意。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「をものともせず」表不畏困難、勇往直前',
            analysis: '「をものともせず（に）」表示面對困難、障礙不退縮，含正面評價。前接困難或障礙相關的名詞。',
            comparisons: ['をものともせず：不畏〜（正面、勇敢）', 'をよそに：不顧〜（冷漠）', 'をかえりみず：不顧〜（不在乎後果）'],
            commonMistakes: ['○ 反対をものともせず / × 反対にものともせず → 助詞用「を」'],
        },
    },
    // ━━━ すら / ですら (even) ━━━
    {
        id: 'g_n1_412', category: 'grammar', level: 'N1', tags: ['particle', 'emphasis'],
        stem: '専門家{せんもんか}___解{と}けないほど難{むずか}しい問題{もんだい}だ。',
        stemZh: '連專家都解不開的高難度問題。',
        options: [
            { text: 'でも', reason: '「でも」也表連〜都〜，但較口語且不夠強調。' },
            { text: 'すら', reason: '正確！「すら」表連〜都〜，書面語，強調極端例子。' },
            { text: 'さえ', reason: '「さえ」也表連〜都〜，但N2程度，此處考N1的「すら」。' },
            { text: 'こそ', reason: '「こそ」表正是〜，為強調助詞，非「連〜都〜」。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「すら」是「さえ」的文語形式',
            analysis: '「すら」接名詞，表示連極端的例子都〜，含「何況其他」之意。比「さえ」更書面、更正式。「ですら」用於名詞後接續。',
            comparisons: ['すら：連〜都〜（文語）', 'さえ：連〜都〜（一般書面語）', 'でも：連〜都〜（口語）'],
            commonMistakes: ['○ 専門家すら / ○ 専門家ですら / × 専門家がすら → 「すら」直接接名詞或用「ですら」'],
        },
    },
    // ━━━ だに (even just; merely) ━━━
    {
        id: 'g_n1_413', category: 'grammar', level: 'N1', tags: ['literary', 'emphasis'],
        stem: 'あの事故{じこ}のことは、想像{そうぞう}する___恐{おそ}ろしい。',
        stemZh: '那場事故，光是想像就覺得可怕。',
        options: [
            { text: 'だに', reason: '正確！「想像するだに」表光是想像就〜，用於極端情感表達。' },
            { text: 'すら', reason: '「すら」表連〜都〜，但不接動詞辞書形。' },
            { text: 'さえ', reason: '「さえ」表連〜都〜，但「想像するさえ」不自然。' },
            { text: 'のみ', reason: '「のみ」表只有〜，非「光是〜就〜」之意。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「だに」表光是〜就〜',
            analysis: '「だに」是高度文語表現，常見搭配：「想像するだに恐ろしい」「思い出すだに辛い」。表示僅僅做某事就會引起強烈感受。',
            comparisons: ['だに：光是〜就〜（古語、限定搭配）', 'すら：連〜都〜（文語）', 'さえ：連〜都〜（一般）'],
            commonMistakes: ['○ 想像するだに / × 想像だに → 「だに」接「想像する」的辞書形（但「夢にだに」接名詞也可）'],
        },
    },
    // ━━━ ならいざしらず (if it were...that would be different) ━━━
    {
        id: 'g_n1_414', category: 'grammar', level: 'N1', tags: ['expression', 'contrast'],
        stem: '子供{こども}___、大人{おとな}がそんなことをするのは恥{は}ずかしい。',
        stemZh: '如果是小孩也就算了，大人做那種事太丟人了。',
        options: [
            { text: 'ならまだしも', reason: '「ならまだしも」也表如果是〜還好，但語感略不同。此處兩者皆可但考慮另一選項。' },
            { text: 'ならいざしらず', reason: '正確！「ならいざしらず」表如果是〜還另當別論，語氣更強。' },
            { text: 'ならともかく', reason: '「ならともかく」表如果是〜暫且不論，語感偏N2。' },
            { text: 'なればこそ', reason: '「なればこそ」表正因為是〜才〜，語意完全不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ならいざしらず」表如果是〜另當別論',
            analysis: '「ならいざしらず」提出一個可以勉強接受的條件，然後強調實際情況不可接受。「いざしらず」是古語「いざ知らず」（且不論）。',
            comparisons: ['ならいざしらず：如果是〜另當別論（文語、語氣強）', 'ならまだしも：如果是〜還好（口語化）', 'ならともかく：如果是〜暫且不論（一般）'],
            commonMistakes: ['○ 子供ならいざしらず / × 子供がならいざしらず → 名詞直接＋ならいざしらず'],
        },
    },
    // ━━━ ならまだしも (if it were...it would still be acceptable) ━━━
    {
        id: 'g_n1_415', category: 'grammar', level: 'N1', tags: ['expression', 'contrast'],
        stem: '一回{いっかい}の失敗{しっぱい}___、同{おな}じミスを何度{なんど}も繰{く}り返{かえ}すのは問題{もんだい}だ。',
        stemZh: '如果只是失敗一次還好，但同樣的錯誤重複犯就有問題了。',
        options: [
            { text: 'ならまだしも', reason: '正確！「ならまだしも」表如果是〜還好，但實際更嚴重。' },
            { text: 'とはいえ', reason: '「とはいえ」表雖然如此，但不含「〜還好」之意。' },
            { text: 'のみならず', reason: '「のみならず」表不僅〜，為遞進而非對比。' },
            { text: 'どころか', reason: '「どころか」表不僅〜反而〜，為否定預期。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ならまだしも」表如果是〜還可以接受',
            analysis: '「ならまだしも」提出一個較輕微的情況表示尚可接受，再引出實際上更嚴重的情況加以批評。',
            comparisons: ['ならまだしも：如果是〜還好（略口語）', 'ならいざしらず：如果是〜另當別論（文語）', 'ならともかく：如果是〜暫且不論（中性）'],
            commonMistakes: ['○ 一回ならまだしも / × 一回のならまだしも → 名詞＋ならまだしも'],
        },
    },
    // ━━━ とあって (because of the special occasion/situation) ━━━
    {
        id: 'g_n1_416', category: 'grammar', level: 'N1', tags: ['expression', 'reason'],
        stem: '連休{れんきゅう}前{まえ}___、空港{くうこう}は大変{たいへん}な混雑{こんざつ}ぶりだった。',
        stemZh: '因為是連假前夕，機場非常擁擠。',
        options: [
            { text: 'ともなると', reason: '「ともなると」表一到〜的程度，非原因。' },
            { text: 'とあって', reason: '正確！「とあって」表因為是〜（特殊情況），所以〜。' },
            { text: 'としても', reason: '「としても」表即使〜，為讓步條件。' },
            { text: 'だけあって', reason: '「だけあって」表不愧是〜，強調結果合理。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「とあって」表因特殊狀況而〜',
            analysis: '「とあって」接句子或名詞，表示因為處於某種特殊情況，所以產生相應結果。多用於新聞報導或客觀敘述。',
            comparisons: ['とあって：因為是〜所以〜（特殊情況）', 'だけあって：不愧是〜（能力相稱）', 'こともあって：也有〜的原因'],
            commonMistakes: ['○ 連休前とあって / × 連休前だとあって → 名詞後直接＋とあって'],
        },
    },
    // ━━━ とあれば (if it is the case that) ━━━
    {
        id: 'g_n1_417', category: 'grammar', level: 'N1', tags: ['expression', 'condition'],
        stem: '子供{こども}のため___、どんな苦労{くろう}もいとわない。',
        stemZh: '如果是為了孩子，任何辛苦都不在乎。',
        options: [
            { text: 'とあれば', reason: '正確！「とあれば」表如果是〜的情況，就會〜，含決心語氣。' },
            { text: 'であれば', reason: '「であれば」表如果是〜，較一般。' },
            { text: 'ならでは', reason: '「ならでは」表只有〜才有的，非條件。' },
            { text: 'としたら', reason: '「としたら」表假設〜的話，語感較弱。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とあれば」表如果是〜就會全力以赴',
            analysis: '「とあれば」表示如果是某種特殊情況，就會採取相應行動。常帶有決心、覺悟的語氣。',
            comparisons: ['とあれば：如果是〜（含決心）', 'とあって：因為是〜（原因）', 'であれば：如果是〜（一般條件）'],
            commonMistakes: ['○ 子供のためとあれば / × 子供のためだとあれば → 直接接「とあれば」'],
        },
    },
    // ━━━ ときたら (speaking of; when it comes to) ━━━
    {
        id: 'g_n1_418', category: 'grammar', level: 'N1', tags: ['expression', 'criticism'],
        stem: 'うちの息子{むすこ}___、毎日{まいにち}ゲームばかりしている。',
        stemZh: '說到我兒子，每天只知道打遊戲。',
        options: [
            { text: 'ときたら', reason: '正確！「ときたら」表說到〜（多含不滿或抱怨）。' },
            { text: 'といえば', reason: '「といえば」表說到〜，較中性。' },
            { text: 'というと', reason: '「というと」表一說到〜，為聯想。' },
            { text: 'とくれば', reason: '「とくれば」表說到〜就一定〜，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ときたら」表說到〜（含不滿）',
            analysis: '「ときたら」接名詞（多為人），表示提到某話題時帶有不滿、抱怨或嘆息的語氣。與「ったら」類似但更正式。',
            comparisons: ['ときたら：說到〜（不滿）', 'といえば：說到〜（中性聯想）', 'ったら：說到〜（口語、不滿或驚訝）'],
            commonMistakes: ['○ 息子ときたら / × 息子がときたら → 名詞直接＋ときたら'],
        },
    },
    // ━━━ まじき (unbecoming of; should not) ━━━
    {
        id: 'g_n1_419', category: 'grammar', level: 'N1', tags: ['literary', 'criticism'],
        stem: '教師{きょうし}にある___行為{こうい}だと非難{ひなん}された。',
        stemZh: '被指責是作為教師不該有的行為。',
        options: [
            { text: 'べからざる', reason: '「べからざる」表不可〜，但接法不同。' },
            { text: 'まじき', reason: '正確！「まじき」接「名詞＋にあるまじき」表不該有的。' },
            { text: 'ならぬ', reason: '「ならぬ」表不行，但不與「にある」搭配。' },
            { text: 'なからぬ', reason: '「なからぬ」表不少的，語意完全不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「まじき」表不該有的行為',
            analysis: '「まじき」是古語助動詞「まじ」的連體形，常見搭配「〜にあるまじき（行為/発言）」表示作為〜不該有的行為。',
            comparisons: ['まじき：不該有的（文語、批判）', 'べからざる：不可〜的（禁止）', 'べきではない：不應該〜（現代語）'],
            commonMistakes: ['○ 教師にあるまじき / × 教師にまじき → 需要「ある」連接'],
        },
    },
    // ━━━ ぬく (to do thoroughly; to the end) ━━━
    {
        id: 'g_n1_420', category: 'grammar', level: 'N1', tags: ['compound-verb', 'completion'],
        stem: '42キロのマラソンを最後{さいご}まで走{はし}り___。',
        stemZh: '跑完了42公里的馬拉松全程。',
        options: [
            { text: '抜いた', reason: '正確！「走り抜いた」表跑到底、堅持跑完。' },
            { text: '通した', reason: '「走り通した」也可表跑到底，但「抜く」更強調克服困難。' },
            { text: '切った', reason: '「走り切った」表全部跑完，但較中性，不如「抜く」強調耐力。' },
            { text: '果たした', reason: '「果たした」表完成，但不與「走り」搭配。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「〜抜く」表克服困難徹底完成',
            analysis: '「V連用形＋抜く」表示克服困難堅持到底。帶有「很辛苦但堅持下來了」的語感。',
            comparisons: ['抜く：堅持到底（強調克服困難）', '通す：從頭到尾做完', '切る：完全做完（中性）'],
            commonMistakes: ['○ 走り抜いた / × 走って抜いた → V連用形直接＋抜く'],
        },
    },
    // ━━━ がてら (while doing; on the occasion of) ━━━
    {
        id: 'g_n1_421', category: 'grammar', level: 'N1', tags: ['expression', 'simultaneous'],
        stem: '散歩{さんぽ}___、近所{きんじょ}のパン屋{や}に寄{よ}った。',
        stemZh: '順便散步的時候，去了附近的麵包店。',
        options: [
            { text: 'かたがた', reason: '「かたがた」也表順便〜，但更正式且接名詞。' },
            { text: 'がてら', reason: '正確！「がてら」表順便〜、藉〜之便。' },
            { text: 'かたわら', reason: '「かたわら」表在做〜之餘，含長期之意。' },
            { text: 'ついでに', reason: '「ついでに」也表順便，但較口語且非N1。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「がてら」表順便做某事',
            analysis: '「がてら」接名詞或動詞連用形，表示做某事的同時順便做另一件事。主要動作和附帶動作都是自發的。',
            comparisons: ['がてら：順便〜（日常行動）', 'かたがた：順便〜（正式場合）', 'ついでに：順便〜（口語）'],
            commonMistakes: ['○ 散歩がてら / × 散歩のがてら → 名詞直接＋がてら'],
        },
    },
    // ━━━ かたがた (incidentally; for the purpose of) ━━━
    {
        id: 'g_n1_422', category: 'grammar', level: 'N1', tags: ['expression', 'formal'],
        stem: 'お礼{れい}___、先日{せんじつ}お世話{せわ}になった方{かた}を訪問{ほうもん}した。',
        stemZh: '順便表達感謝，拜訪了前幾天受過照顧的人。',
        options: [
            { text: 'がてら', reason: '「がてら」較日常，此處用正式場合的「かたがた」更適合。' },
            { text: 'を兼ねて', reason: '「を兼ねて」表兼做〜，但接法不同。' },
            { text: 'かたがた', reason: '正確！「かたがた」表順便〜，用於正式、禮貌場合。' },
            { text: 'ついでに', reason: '「ついでに」表順便，但太口語不適合此語境。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「かたがた」表順便（正式場合）',
            analysis: '「かたがた」接名詞，表示順便做某事。多用於正式的人際交往場合，如拜訪、問候等。',
            comparisons: ['かたがた：順便〜（正式、書面）', 'がてら：順便〜（日常）', 'を兼ねて：兼做〜（目的並列）'],
            commonMistakes: ['○ お礼かたがた / × お礼のかたがた → 名詞直接＋かたがた'],
        },
    },
    // ━━━ を皮切りに (starting with; beginning from) ━━━
    {
        id: 'g_n1_423', category: 'grammar', level: 'N1', tags: ['expression', 'beginning'],
        stem: '東京{とうきょう}公演{こうえん}___、全国{ぜんこく}ツアーが始{はじ}まった。',
        stemZh: '以東京演出為開端，全國巡演開始了。',
        options: [
            { text: 'をきっかけに', reason: '「をきっかけに」表以〜為契機，強調起因而非起點。' },
            { text: 'を皮切りに', reason: '正確！「を皮切りに」表以〜為開端，一連串的活動隨之展開。' },
            { text: 'を契機に', reason: '「を契機に」表以〜為契機，強調轉變的機會。' },
            { text: 'を境に', reason: '「を境に」表以〜為界，強調前後的變化。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「を皮切りに」表以〜為開端',
            analysis: '「を皮切りに（して）」表示以某事為第一個開始，接著同類事物陸續展開。常用於活動、事業的描述。',
            comparisons: ['を皮切りに：以〜為開端（一連串）', 'を契機に：以〜為契機（轉變）', 'を境に：以〜為界（前後不同）'],
            commonMistakes: ['○ 東京公演を皮切りに / × 東京公演で皮切りに → 助詞用「を」'],
        },
    },
    // ━━━ を限りに (as of; no more after) ━━━
    {
        id: 'g_n1_424', category: 'grammar', level: 'N1', tags: ['expression', 'deadline'],
        stem: '今日{きょう}___、この店{みせ}は閉店{へいてん}いたします。',
        stemZh: '以今天為限，本店歇業。',
        options: [
            { text: 'を最後に', reason: '「を最後に」也表以〜為最後，但「を限りに」更正式。' },
            { text: 'をもって', reason: '「をもって」也可表以〜為期，但此處「を限りに」更合適。' },
            { text: 'を限りに', reason: '正確！「を限りに」表以〜為限、到〜為止。' },
            { text: 'を機に', reason: '「を機に」表以〜為契機，不含截止之意。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「を限りに」表以〜為最後的期限',
            analysis: '「を限りに」表示以某個時間為截止點，之後不再做某事。常用於宣布結束、終止。',
            comparisons: ['を限りに：以〜為限（正式宣告）', 'をもって：以〜（正式、時間截止）', 'を最後に：以〜為最後（一般）'],
            commonMistakes: ['○ 今日を限りに / × 今日の限りに → 助詞用「を」'],
        },
    },
    // ━━━ を契機に (taking the opportunity of) ━━━
    {
        id: 'g_n1_425', category: 'grammar', level: 'N1', tags: ['expression', 'turning-point'],
        stem: '結婚{けっこん}___、タバコをやめた。',
        stemZh: '以結婚為契機，戒了菸。',
        options: [
            { text: 'を契機に', reason: '正確！「を契機に」表以〜為契機，強調人生轉折點。' },
            { text: 'をきっかけに', reason: '「をきっかけに」也表以〜為契機，但較口語。' },
            { text: 'を皮切りに', reason: '「を皮切りに」表以〜為開端（一連串），此處只是一個轉變。' },
            { text: 'を通じて', reason: '「を通じて」表通過〜、經由〜，非契機。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を契機に」表以重要事件為轉折點',
            analysis: '「を契機に（して）」表示以某個重要事件為轉折點，之後發生了變化。比「きっかけ」更正式。',
            comparisons: ['を契機に：以〜為契機（正式、重大事件）', 'をきっかけに：以〜為契機（一般）', 'を機に：以〜為機會（略正式）'],
            commonMistakes: ['○ 結婚を契機に / × 結婚が契機に → 助詞用「を」'],
        },
    },
    // ━━━ にたえる / にたえない (worthy of / unbearable) ━━━
    {
        id: 'g_n1_426', category: 'grammar', level: 'N1', tags: ['expression', 'evaluation'],
        stem: 'この作品{さくひん}は鑑賞{かんしょう}___立派{りっぱ}な出来{でき}だ。',
        stemZh: '這部作品是值得鑑賞的出色之作。',
        options: [
            { text: 'にたえる', reason: '正確！「にたえる」表值得〜、經得起〜。' },
            { text: 'にたえない', reason: '「にたえない」表不堪〜或忍不住〜，與此處「值得」相反。' },
            { text: 'にかたくない', reason: '「にかたくない」表不難〜（想像等），非評價。' },
            { text: 'にあたいする', reason: '「に値する」也表值得〜，但讀音不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にたえる」表值得、經得起',
            analysis: '「に耐える」有兩個意思：①值得〜（鑑賞に耐える）②承受得住〜。常見搭配：「鑑賞に耐える」「批判に耐える」「使用に耐える」。',
            comparisons: ['にたえる：值得〜（正面評價）', 'にたえない：不堪〜 / 忍不住〜', 'に値する：值得〜（較正式）'],
            commonMistakes: ['○ 鑑賞にたえる / × 鑑賞をたえる → 助詞用「に」'],
        },
    },
    // ━━━ にかたくない (not difficult to) ━━━
    {
        id: 'g_n1_427', category: 'grammar', level: 'N1', tags: ['expression', 'inference'],
        stem: '被災者{ひさいしゃ}たちの苦労{くろう}は想像{そうぞう}___。',
        stemZh: '受災者的辛苦不難想像。',
        options: [
            { text: 'するまでもない', reason: '「するまでもない」表不必做，非「不難想像」。' },
            { text: 'にかたくない', reason: '正確！「想像にかたくない」表不難想像。' },
            { text: 'にたえない', reason: '「にたえない」表不堪〜，非「不難」。' },
            { text: 'しかねない', reason: '「しかねない」表有可能做出〜，非「不難」。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「にかたくない」表不難〜',
            analysis: '「にかたくない」（に難くない）表示不難做某事。常見搭配：「想像にかたくない」「推察にかたくない」「理解にかたくない」。',
            comparisons: ['にかたくない：不難〜（書面語）', 'にたえない：不堪〜', 'にたりない：不值得〜'],
            commonMistakes: ['○ 想像にかたくない / × 想像がかたくない → 助詞用「に」'],
        },
    },
    // ━━━ 極まりない / 極まる (extremely; utmost) ━━━
    {
        id: 'g_n1_428', category: 'grammar', level: 'N1', tags: ['expression', 'degree'],
        stem: '彼{かれ}の態度{たいど}は失礼{しつれい}___。',
        stemZh: '他的態度極其失禮。',
        options: [
            { text: '極まりない', reason: '正確！「失礼極まりない」表極其失禮、失禮至極。' },
            { text: 'この上ない', reason: '「この上ない」也表極其〜，但多用於正面評價。' },
            { text: '限りだ', reason: '「限りだ」表感到非常〜，但用於表達自身感受。' },
            { text: 'に至る', reason: '「に至る」表到達〜的地步，非程度表現。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「極まりない」表〜到了極點',
            analysis: '「極まりない」接ナ形容詞語幹，表示程度到了極點。常用於負面評價：「失礼極まりない」「不愉快極まりない」「危険極まりない」。',
            comparisons: ['極まりない：〜至極（多負面）', 'この上ない：再也沒有比〜更〜（多正面）', '限りだ：感到非常〜（自身感受）'],
            commonMistakes: ['○ 失礼極まりない / × 失礼な極まりない → ナ形容詞語幹直接＋極まりない'],
        },
    },
    // ━━━ この上ない (the utmost; nothing more than) ━━━
    {
        id: 'g_n1_429', category: 'grammar', level: 'N1', tags: ['expression', 'degree'],
        stem: '娘{むすめ}の結婚{けっこん}は喜{よろこ}ばしい___。',
        stemZh: '女兒結婚是無比喜悅之事。',
        options: [
            { text: '限りだ', reason: '「限りだ」也表非常〜，但此處「この上ない」更合適。' },
            { text: 'この上ない', reason: '正確！「この上ない」表再也沒有比這更〜，用於正面評價。' },
            { text: '極まりない', reason: '「極まりない」多用於負面評價。' },
            { text: 'に違いない', reason: '「に違いない」表一定是〜，非程度表現。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「この上ない」表無以復加的程度（正面）',
            analysis: '「この上ない」（この上なく）表示再也沒有比這更好的了。多用於表達正面的極致感受。',
            comparisons: ['この上ない：再也沒有比〜更好的（正面）', '極まりない：〜到了極點（多負面）', 'に堪えない：忍不住〜（感動等）'],
            commonMistakes: ['○ 喜ばしいこの上ない / ○ この上ない喜び / × この上なく喜び → 修飾名詞時用「この上ない」，修飾動詞用「この上なく」'],
        },
    },
    // ━━━ 限りだ (feel extremely) ━━━
    {
        id: 'g_n1_430', category: 'grammar', level: 'N1', tags: ['expression', 'emotion'],
        stem: '長年{ながねん}の夢{ゆめ}が叶{かな}って、嬉{うれ}しい___。',
        stemZh: '多年的夢想實現了，高興極了。',
        options: [
            { text: '限りだ', reason: '正確！「嬉しい限りだ」表高興極了，用於表達自身的強烈感受。' },
            { text: 'ものだ', reason: '「ものだ」表感慨，但非極度感受。' },
            { text: 'ほどだ', reason: '「ほどだ」表到了〜的程度，語意不夠強烈。' },
            { text: 'ことだ', reason: '「ことだ」表建議或感嘆，接法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「限りだ」表感到非常〜',
            analysis: '「限りだ」接イ形容詞或ナ形容詞＋な，表示某種感情達到極點。常見：「嬉しい限りだ」「心強い限りだ」「残念な限りだ」。',
            comparisons: ['限りだ：感到非常〜（自身感受）', 'この上ない：再也沒有更〜的（客觀評價）', '極まりない：〜至極（多批評）'],
            commonMistakes: ['○ 嬉しい限りだ / × 嬉しく限りだ → イ形容詞原形＋限りだ'],
        },
    },
    // ━━━ もさることながら (not only...but also) ━━━
    {
        id: 'g_n1_431', category: 'grammar', level: 'N1', tags: ['expression', 'addition'],
        stem: '味{あじ}___、この店{みせ}は雰囲気{ふんいき}も素晴{すば}らしい。',
        stemZh: '味道自不待言，這家店的氛圍也很棒。',
        options: [
            { text: 'はもとより', reason: '「はもとより」也表〜自不必說，但語感略不同。' },
            { text: 'もさることながら', reason: '正確！「もさることながら」表〜自然不在話下，但〜更是如此。' },
            { text: 'はおろか', reason: '「はおろか」表不用說〜連〜都〜，帶否定驚訝。' },
            { text: 'のみならず', reason: '「のみならず」表不僅〜，為一般遞進。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「もさることながら」表〜自不必說，另一方面也〜',
            analysis: '「もさることながら」表示前者固然〜，但後者更值得一提。帶有「兩者皆好，但更想強調後者」的語感。',
            comparisons: ['もさることながら：〜自不待言…更…（書面語）', 'はもとより：〜自不必說…也…', 'のみならず：不僅〜…還…（一般遞進）'],
            commonMistakes: ['○ 味もさることながら / × 味がさることながら → 助詞用「も」'],
        },
    },
    // ━━━ はおろか (let alone; not to mention) ━━━
    {
        id: 'g_n1_432', category: 'grammar', level: 'N1', tags: ['expression', 'degree'],
        stem: '漢字{かんじ}___、ひらがな___書{か}けない。',
        stemZh: '不用說漢字了，連平假名都不會寫。',
        options: [
            { text: 'はおろか / すら', reason: '正確！「はおろか〜すら」表不用說〜連〜都〜。' },
            { text: 'はもとより / でも', reason: '「はもとより」表〜自不必說，但不含「程度這麼差」之意。' },
            { text: 'のみならず / まで', reason: '「のみならず」表不僅〜，為遞進而非強調程度低。' },
            { text: 'ばかりか / しか', reason: '「ばかりか」表不僅〜，但接法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「はおろか」表不用說〜連〜都〜',
            analysis: '「はおろか」提出一個難度高的事物，再提出更基本的事物也做不到，表示程度之低。後常接「も/すら/さえ〜ない」。',
            comparisons: ['はおろか：不用說〜連〜都〜（強調程度低）', 'はもとより：〜自不必說…也…（中性遞進）', 'ばかりか：不僅〜還〜（遞進）'],
            commonMistakes: ['○ 漢字はおろか / × 漢字をおろか → 助詞用「は」'],
        },
    },
    // ━━━ はもとより (not to mention; of course) ━━━
    {
        id: 'g_n1_433', category: 'grammar', level: 'N1', tags: ['expression', 'addition'],
        stem: '国内{こくない}___、海外{かいがい}からも多{おお}くの観光客{かんこうきゃく}が訪{おとず}れる。',
        stemZh: '不僅國內，連海外也有很多遊客前來。',
        options: [
            { text: 'ばかりでなく', reason: '「ばかりでなく」也表不僅〜，但較口語。' },
            { text: 'はおろか', reason: '「はおろか」表不用說〜連〜都〜，含「程度低」之意，此處不適合。' },
            { text: 'はもとより', reason: '正確！「はもとより」表〜自不必說，〜也〜。正面遞進。' },
            { text: 'に限らず', reason: '「に限らず」表不限於〜，語感較中性。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「はもとより」表〜自然不用說',
            analysis: '「はもとより」接名詞，表示前者理所當然，後者也同樣如此。含正面遞進的語感。',
            comparisons: ['はもとより：〜自不必說（正面遞進）', 'はおろか：不用說〜連〜都〜（強調意外）', 'のみならず：不僅〜（書面遞進）'],
            commonMistakes: ['○ 国内はもとより / × 国内がもとより → 助詞用「は」'],
        },
    },
    // ━━━ べからず (must not - archaic prohibition) ━━━
    {
        id: 'g_n1_434', category: 'grammar', level: 'N1', tags: ['literary', 'archaic'],
        stem: '此処{ここ}にゴミを捨{す}てる___。',
        stemZh: '此處禁止丟棄垃圾。',
        options: [
            { text: 'べからず', reason: '正確！「べからず」用於公告、告示的古語禁止表現。' },
            { text: 'まじ', reason: '「まじ」表不該〜，但不用於告示。' },
            { text: 'なかれ', reason: '「なかれ」也表禁止但多見於格言，較少見。' },
            { text: 'べきではない', reason: '「べきではない」是現代語表達，非告示體。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「べからず」用於告示禁止',
            analysis: '「べからず」是「べし」的否定古語形式，常見於公共場所的禁止告示。動詞辞書形＋べからず。',
            comparisons: ['べからず：不准〜（告示體）', 'べきではない：不應該〜（現代語）', 'てはならない：不可以〜（規則）'],
            commonMistakes: ['○ 捨てるべからず / × 捨てべからず → 動詞辞書形＋べからず'],
        },
    },
    // ━━━ ごとし / ごとく / ごとき (like; as if) ━━━
    {
        id: 'g_n1_435', category: 'grammar', level: 'N1', tags: ['literary', 'archaic'],
        stem: '光陰{こういん}矢{や}の___。',
        stemZh: '光陰如箭。',
        options: [
            { text: 'ようだ', reason: '「ようだ」是現代語「像〜」，非古語格言體。' },
            { text: 'ごとし', reason: '正確！「ごとし」是古語「如〜一般」，用於格言、諺語。' },
            { text: 'みたいだ', reason: '「みたいだ」是口語「像〜」，不適合格言。' },
            { text: 'そうだ', reason: '「そうだ」表看起來〜或聽說〜，非比喻。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ごとし」是古語比喻表現',
            analysis: '「ごとし」是文語助動詞，表示「如同〜」。活用：ごとし（終止）、ごとく（連用）、ごとき（連體）。常見於格言、成語。',
            comparisons: ['ごとし：如〜一般（文語終止形）', 'ごとく：如〜一般地（文語連用形）', 'ごとき：如〜一般的（文語連體形）'],
            commonMistakes: ['○ 矢のごとし / × 矢ごとし → 名詞＋の＋ごとし'],
        },
    },
    // ━━━ たりとも (even; not even one) ━━━
    {
        id: 'g_n1_436', category: 'grammar', level: 'N1', tags: ['literary', 'emphasis'],
        stem: '一秒{いちびょう}___無駄{むだ}にはできない。',
        stemZh: '一秒鐘都不能浪費。',
        options: [
            { text: 'だけでも', reason: '「だけでも」表哪怕只〜，非「一〜也不」。' },
            { text: 'たりとも', reason: '正確！「たりとも〜ない」表即使一〜也不能〜。' },
            { text: 'でさえ', reason: '「でさえ」表連〜都〜，但不含「一〜也不」之意。' },
            { text: 'といえども', reason: '「といえども」表雖然〜，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「たりとも〜ない」表一〜也不能〜',
            analysis: '「たりとも」接最小數量詞（一秒、一歩、一円等），後接否定，表示即使是最小的量也不允許。語氣強烈，書面語。',
            comparisons: ['たりとも〜ない：一〜也不〜（文語強調）', 'すら〜ない：連〜都不〜（一般強調）', 'でさえ〜ない：連〜都不〜'],
            commonMistakes: ['○ 一秒たりとも / × 一秒がたりとも → 數量詞直接＋たりとも'],
        },
    },
    // ━━━ ものを (although; and yet - regret) ━━━
    {
        id: 'g_n1_437', category: 'grammar', level: 'N1', tags: ['expression', 'regret'],
        stem: '早{はや}く言{い}ってくれれば助{たす}けてあげた___。',
        stemZh: '你早說的話我就幫你了（你卻不說……）。',
        options: [
            { text: 'ものの', reason: '「ものの」表雖然〜但〜，不含惋惜語氣。' },
            { text: 'ものを', reason: '正確！「ものを」表明明可以〜卻〜，含惋惜、遺憾。' },
            { text: 'ものだ', reason: '「ものだ」表感嘆或一般真理，非惋惜。' },
            { text: 'ものか', reason: '「ものか」表怎麼可能〜，為反語。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ものを」表惋惜、遺憾',
            analysis: '「ものを」接在假定形或可能形後，表示「明明可以〜（卻沒這樣做）」，含說話者的惋惜、不滿。句末常省略。',
            comparisons: ['ものを：明明〜卻〜（惋惜）', 'ものの：雖然〜但〜（轉折）', 'ものなら：如果能〜的話（假設）'],
            commonMistakes: ['○ 助けてあげたものを / × 助けてあげるものを → 用過去形＋ものを（反事實）'],
        },
    },
    // ━━━ ずにはすまない (cannot avoid doing) ━━━
    {
        id: 'g_n1_438', category: 'grammar', level: 'N1', tags: ['expression', 'obligation'],
        stem: 'これだけの損害{そんがい}を出{だ}した以上{いじょう}、責任者{せきにんしゃ}は謝罪{しゃざい}___。',
        stemZh: '既然造成了這麼大的損失，負責人不能不道歉。',
        options: [
            { text: 'せずにはすまない', reason: '正確！「ずにはすまない」表不〜就過不去、不能不〜。' },
            { text: 'せずにはおかない', reason: '「ずにはおかない」表必然會〜，為自然趨勢而非義務。' },
            { text: 'せざるを得ない', reason: '「ざるを得ない」表不得不〜，較一般性。' },
            { text: 'しないわけにはいかない', reason: '「わけにはいかない」也表不能不〜，但較一般。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ずにはすまない」表出於社會道義不能不〜',
            analysis: '「ずにはすまない」表示從社會道德或道義上來說不做某事就無法了結。含「不做就交代不過去」之意。',
            comparisons: ['ずにはすまない：不〜不行（道義上）', 'ずにはおかない：必然會〜（趨勢）', 'ざるを得ない：不得不〜（客觀）'],
            commonMistakes: ['○ 謝罪せずにはすまない / × 謝罪しずにはすまない → サ変動詞用「せず」'],
        },
    },
    // ━━━ べくして (as was meant to be) ━━━
    {
        id: 'g_n1_439', category: 'grammar', level: 'N1', tags: ['literary', 'inevitability'],
        stem: '彼{かれ}の成功{せいこう}は、成功{せいこう}す___成功{せいこう}したと言{い}える。',
        stemZh: '他的成功可以說是必然會成功的。',
        options: [
            { text: 'べくして', reason: '正確！「べくして」表理所當然地、命中注定地。' },
            { text: 'べきにして', reason: '不存在「べきにして」的用法。' },
            { text: 'べきとして', reason: '不存在「べきとして」的用法。' },
            { text: 'べしとして', reason: '不存在「べしとして」的用法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「べくして」表必然、理所當然',
            analysis: '「べくして」表示某事的發生是必然的、命中注定的。常見句型：「〜べくして〜した」。',
            comparisons: ['べくして：命中注定地〜', 'べく：為了〜（目的）', 'べき：應該〜'],
            commonMistakes: ['○ 成功すべくして成功した / × 成功するべくして成功した → 「す」是「する」的文語形'],
        },
    },
    // ━━━ べくもない (cannot possibly) ━━━
    {
        id: 'g_n1_440', category: 'grammar', level: 'N1', tags: ['literary', 'impossibility'],
        stem: '彼女{かのじょ}の悲{かな}しみは、察{さっ}する___。',
        stemZh: '她的悲傷是無法測度的。',
        options: [
            { text: 'べくもない', reason: '正確！「察するべくもない」表無法推測、不可能推測。' },
            { text: 'べきではない', reason: '「べきではない」表不應該〜，非不可能。' },
            { text: 'までもない', reason: '「までもない」表不必〜，非不可能。' },
            { text: 'わけがない', reason: '「わけがない」表不可能〜，但較口語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「べくもない」表不可能〜',
            analysis: '「べくもない」是高度文語表現，表示「完全不可能做到」。常見搭配：「比べるべくもない」「知るべくもない」「察するべくもない」。',
            comparisons: ['べくもない：不可能〜（文語、強調）', 'はずがない：不可能〜（一般）', 'わけがない：不可能〜（口語）'],
            commonMistakes: ['○ 察するべくもない / × 察すべくもない → 動詞辞書形＋べくもない'],
        },
    },
    // ━━━ んがために (in order to) ━━━
    {
        id: 'g_n1_441', category: 'grammar', level: 'N1', tags: ['literary', 'purpose'],
        stem: '勝{か}た___、厳{きび}しい練習{れんしゅう}に耐{た}えてきた。',
        stemZh: '為了獲勝，忍受了嚴酷的訓練。',
        options: [
            { text: 'んがために', reason: '正確！「んがために」表為了〜（文語、強烈目的意識）。' },
            { text: 'ために', reason: '「ために」也表為了〜，但較一般。' },
            { text: 'べく', reason: '「べく」也表為了〜，但語感不同。' },
            { text: 'ようと', reason: '「ようと」表打算〜但，非目的。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「んがために」表強烈的目的',
            analysis: '「んがために」是文語表現，表示為了達到某目的而付出努力。動詞未然形＋んがために。「する→せんがために」。',
            comparisons: ['んがために：為了〜（文語、強烈決心）', 'ために：為了〜（一般）', 'べく：為了〜（書面語）'],
            commonMistakes: ['○ 勝たんがために / × 勝つんがために → 動詞未然形＋ん'],
        },
    },
    // ━━━ んばかりに (as if about to) ━━━
    {
        id: 'g_n1_442', category: 'grammar', level: 'N1', tags: ['expression', 'appearance'],
        stem: '彼女{かのじょ}は泣{な}か___の表情{ひょうじょう}で訴{うった}えた。',
        stemZh: '她帶著幾乎要哭出來的表情訴說。',
        options: [
            { text: 'そうな', reason: '「そうな」也表快要〜的樣子，但較一般。' },
            { text: 'んばかり', reason: '正確！「んばかり」表簡直要〜似的，程度誇張。' },
            { text: 'まいとする', reason: '「まいとする」表打算不〜，語意相反。' },
            { text: 'ようとする', reason: '「ようとする」表試圖〜，非外觀描述。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「んばかりに」表幾乎要〜的樣子',
            analysis: '「んばかりに」接動詞未然形，表示「簡直要〜似的」「眼看就要〜」，用於誇張描述某人的樣子或狀態。',
            comparisons: ['んばかりに：簡直要〜似的（誇張）', 'そうに：快要〜的樣子（一般描述）', 'かのように：好像〜似的（比喻）'],
            commonMistakes: ['○ 泣かんばかり / × 泣くんばかり → 動詞未然形＋ん'],
        },
    },
    // ━━━ ながらに (from the very beginning; as born) ━━━
    {
        id: 'g_n1_443', category: 'grammar', level: 'N1', tags: ['expression', 'inherent'],
        stem: '彼{かれ}は生{う}まれ___にしてリーダーの資質{ししつ}を持{も}っていた。',
        stemZh: '他與生俱來就有領導者的資質。',
        options: [
            { text: 'ながら', reason: '正確！「生まれながらにして」表與生俱來，天生就有。' },
            { text: 'つつ', reason: '「つつ」表一邊〜一邊〜，非天生之意。' },
            { text: 'がてら', reason: '「がてら」表順便〜，語意完全不同。' },
            { text: 'かたわら', reason: '「かたわら」表在〜之餘，非天生之意。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ながらにして」表與生俱來',
            analysis: '「ながらに（して）」表示某種狀態從最初就一直持續。「生まれながらに」表天生就〜。也可用於「涙ながらに」（含淚地）。',
            comparisons: ['ながらに：與生俱來（持續狀態）', 'ながらも：雖然〜但〜（逆接）', 'ながら：一邊〜一邊〜（同時）'],
            commonMistakes: ['○ 生まれながらにして / × 生まれるながらにして → 連用形「生まれ」＋ながら'],
        },
    },
    // ━━━ ばこそ (precisely because) ━━━
    {
        id: 'g_n1_444', category: 'grammar', level: 'N1', tags: ['expression', 'emphasis'],
        stem: '君{きみ}のことを思{おも}え___厳{きび}しいことを言{い}うのだ。',
        stemZh: '正因為為你著想才說嚴厲的話。',
        options: [
            { text: 'ばこそ', reason: '正確！「ばこそ」表正因為〜才〜，強調原因。' },
            { text: 'ばかりに', reason: '「ばかりに」表就因為〜（而導致壞結果），含後悔。' },
            { text: 'からこそ', reason: '「からこそ」也表正因為〜，但「ばこそ」更文語。' },
            { text: 'ばこそだ', reason: '「ばこそ」後面不接「だ」，接主句。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ばこそ」表正因為〜才〜（文語強調）',
            analysis: '「ばこそ」是「からこそ」的文語形式，表示正因為〜才會〜。動詞ば形＋こそ。語氣莊重。',
            comparisons: ['ばこそ：正因為〜（文語、莊重）', 'からこそ：正因為〜（一般強調）', 'ばかりに：就因為〜（後悔）'],
            commonMistakes: ['○ 思えばこそ / × 思うばこそ → 用ば形（條件形）'],
        },
    },
    // ━━━ こそすれ (only; never) ━━━
    {
        id: 'g_n1_445', category: 'grammar', level: 'N1', tags: ['literary', 'emphasis'],
        stem: '彼{かれ}の努力{どりょく}には感謝{かんしゃ}___、恨{うら}むことはない。',
        stemZh: '對他的努力只有感謝，絕不會怨恨。',
        options: [
            { text: 'するからこそ', reason: '「するからこそ」表正因為〜才〜，語意不同。' },
            { text: 'こそすれ', reason: '正確！「こそすれ」表只會〜，絕不〜。' },
            { text: 'こそあれ', reason: '「こそあれ」表雖然有〜但〜，含轉折。' },
            { text: 'するばかりか', reason: '「ばかりか」表不僅〜還〜，為遞進。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「こそすれ」表只會〜絕不〜',
            analysis: '「こそすれ」接在名詞或動詞連用形後，表示「只會〜，絕不會〜（相反的事）」。後接否定句。',
            comparisons: ['こそすれ：只會〜絕不〜', 'こそあれ：雖然有〜但不〜', 'ばこそ：正因為〜才〜'],
            commonMistakes: ['○ 感謝こそすれ / × 感謝をこそすれ → 名詞直接＋こそすれ'],
        },
    },
    // ━━━ こそあれ (although there is) ━━━
    {
        id: 'g_n1_446', category: 'grammar', level: 'N1', tags: ['literary', 'concession'],
        stem: '多少{たしょう}の不満{ふまん}___、全体{ぜんたい}としては満足{まんぞく}している。',
        stemZh: '雖然有些不滿，但整體而言是滿意的。',
        options: [
            { text: 'こそあれ', reason: '正確！「こそあれ」表雖然有〜，但〜。' },
            { text: 'こそすれ', reason: '「こそすれ」表只會〜絕不〜，非讓步。' },
            { text: 'とはいえ', reason: '「とはいえ」表雖然如此，但接法不同。' },
            { text: 'があるにせよ', reason: '「にせよ」表即使〜，但較一般。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「こそあれ」表雖然有〜但不影響',
            analysis: '「こそあれ」表示承認某事的存在，但強調不影響整體判斷。「〜こそあれ、〜ない」的形式。',
            comparisons: ['こそあれ：雖然有〜但不〜（文語讓步）', 'こそすれ：只會〜絕不〜', 'とはいえ：雖然如此（一般讓步）'],
            commonMistakes: ['○ 不満こそあれ / × 不満がこそあれ → 名詞直接＋こそあれ'],
        },
    },
    // ━━━ ともすれば (apt to; liable to) ━━━
    {
        id: 'g_n1_447', category: 'grammar', level: 'N1', tags: ['expression', 'tendency'],
        stem: '人間{にんげん}は___自分{じぶん}に都合{つごう}のいい情報{じょうほう}だけを信{しん}じがちだ。',
        stemZh: '人往往容易只相信對自己有利的資訊。',
        options: [
            { text: 'ともすれば', reason: '正確！「ともすれば」表動輒〜、往往容易〜（負面傾向）。' },
            { text: 'もしかすると', reason: '「もしかすると」表也許〜，為推測。' },
            { text: 'ひょっとすると', reason: '「ひょっとすると」表說不定〜，為推測。' },
            { text: 'ところが', reason: '「ところが」表然而〜，為轉折。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ともすれば」表容易〜的傾向',
            analysis: '「ともすれば」（ともすると）表示容易產生某種（多為不好的）傾向。常與「がち」「やすい」等搭配。',
            comparisons: ['ともすれば：動輒〜（負面傾向）', 'ともなると：一到〜的程度', 'ともあろう：身為〜竟然〜'],
            commonMistakes: ['○ ともすれば〜がちだ / × ともすれば〜だ → 常搭配表傾向的表達'],
        },
    },
    // ━━━ といえども (even though; although) ━━━
    {
        id: 'g_n1_448', category: 'grammar', level: 'N1', tags: ['literary', 'concession'],
        stem: 'いかなる理由{りゆう}が___、暴力{ぼうりょく}は許{ゆる}されない。',
        stemZh: '無論有什麼理由，暴力都是不被允許的。',
        options: [
            { text: 'あろうとも', reason: '「あろうとも」也表即使有〜也〜，但接法不同。' },
            { text: 'あるといえども', reason: '正確！「といえども」表即使是〜也〜，語氣莊重。' },
            { text: 'あるとしても', reason: '「としても」表即使〜也〜，較一般。' },
            { text: 'あるにせよ', reason: '「にせよ」表即使〜，語感較弱。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「といえども」表即使〜也不能〜',
            analysis: '「といえども」是文語表現，表示即使是〜也不例外。常用於法律、規則等嚴肅場合。',
            comparisons: ['といえども：即使〜（文語、莊重）', 'としても：即使〜（一般）', 'にせよ：即使〜（書面語）'],
            commonMistakes: ['○ 理由があるといえども / × 理由があるとはいえども → 「といえども」不含「は」'],
        },
    },
    // ━━━ ともあろうものが (someone of such standing) ━━━
    {
        id: 'g_n1_449', category: 'grammar', level: 'N1', tags: ['expression', 'criticism'],
        stem: '大学{だいがく}教授{きょうじゅ}___、こんな初歩的{しょほてき}なミスをするとは。',
        stemZh: '堂堂大學教授，竟然犯這種初級錯誤。',
        options: [
            { text: 'たるものが', reason: '「たるものが」也表身為〜竟然〜，但語感略不同。' },
            { text: 'ともあろうものが', reason: '正確！「ともあろうものが」表身為〜（這樣的人物）竟然〜，含強烈批判。' },
            { text: 'としたことが', reason: '「としたことが」表身為〜竟然〜，語感較溫和。' },
            { text: 'にしたところで', reason: '「にしたところで」表即使是〜也〜，非批判。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ともあろうものが」表身為〜竟然（強烈批判）',
            analysis: '「ともあろうものが」接在身份、地位高的名詞後，表示對這樣的人做出不相稱的行為感到驚訝和批判。',
            comparisons: ['ともあろうものが：身為〜竟然〜（強烈批判）', 'としたことが：身為〜竟然〜（溫和驚訝）', 'たるものが：作為〜竟然〜（莊重批判）'],
            commonMistakes: ['○ 教授ともあろうものが / × 教授がともあろうものが → 名詞直接＋ともあろうものが'],
        },
    },
    // ━━━ たる (as; being) ━━━
    {
        id: 'g_n1_450', category: 'grammar', level: 'N1', tags: ['literary', 'status'],
        stem: '指導者{しどうしゃ}___もの、常{つね}に冷静{れいせい}でなければならない。',
        stemZh: '身為領導者，必須時刻保持冷靜。',
        options: [
            { text: 'たる', reason: '正確！「たるもの」表作為〜的人，後接應有的態度或行為。' },
            { text: 'なる', reason: '「なる」是古語「の」，非此處用法。' },
            { text: 'である', reason: '「である」也表是〜，但「たる」更文語莊重。' },
            { text: 'としての', reason: '「としての」表作為〜，較一般，非文語體。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たる」表作為〜（文語身份表現）',
            analysis: '「たる」接名詞（身份、角色），表示「作為〜的人」。後常接義務、規範。常見：「教師たるもの」「リーダーたるもの」。',
            comparisons: ['たるもの：作為〜的人（文語、規範）', 'としての：作為〜（一般）', 'である以上：既然是〜（理由）'],
            commonMistakes: ['○ 指導者たるもの / × 指導者のたるもの → 名詞直接＋たる'],
        },
    },
    // ━━━ てやまない (ceaselessly; from the bottom of one's heart) ━━━
    {
        id: 'g_n1_451', category: 'grammar', level: 'N1', tags: ['expression', 'emotion'],
        stem: '皆様{みなさま}のご健康{けんこう}とご活躍{かつやく}を願{ねが}っ___。',
        stemZh: '衷心祝願各位身體健康、事業有成。',
        options: [
            { text: 'てやまない', reason: '正確！「願ってやまない」表衷心祝願、由衷希望。' },
            { text: 'てならない', reason: '「てならない」表非常〜（不自覺的感受），非祝願。' },
            { text: 'てたまらない', reason: '「てたまらない」表〜得受不了，非祝願。' },
            { text: 'てかなわない', reason: '「てかなわない」表受不了〜，非祝願。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てやまない」表由衷地、不斷地〜',
            analysis: '「てやまない」表示某種強烈的感情持續不斷。常見搭配：「願ってやまない」「愛してやまない」「尊敬してやまない」。多用於正式場合。',
            comparisons: ['てやまない：由衷地〜（正式）', 'てならない：非常〜（不自覺）', 'てたまらない：〜得受不了（口語）'],
            commonMistakes: ['○ 願ってやまない / × 願いてやまない → 動詞て形＋やまない'],
        },
    },
    // ━━━ てからというもの (ever since) ━━━
    {
        id: 'g_n1_452', category: 'grammar', level: 'N1', tags: ['expression', 'time'],
        stem: '子供{こども}が生{う}まれ___、生活{せいかつ}が一変{いっぺん}した。',
        stemZh: '自從孩子出生以後，生活完全改變了。',
        options: [
            { text: 'てからというもの', reason: '正確！「てからというもの」表自從〜以後（一直如此），強調持續變化。' },
            { text: 'てからは', reason: '「てからは」也表自從〜以後，但不如前者強調持續。' },
            { text: 'て以来', reason: '「て以来」表〜以來，較客觀。' },
            { text: 'たところで', reason: '「たところで」表即使〜也〜，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てからというもの」表自從〜以來（一直如此）',
            analysis: '「てからというもの（は）」強調自從某個時間點之後，狀態一直持續到現在。含「前後判若兩人」之意。',
            comparisons: ['てからというもの：自從〜以來（強調持續變化）', 'て以来：〜以來（客觀敘述）', 'てからは：自從〜以後（一般）'],
            commonMistakes: ['○ 生まれてからというもの / × 生まれたからというもの → 用て形＋からというもの'],
        },
    },
    // ━━━ てみせる (I will definitely; show by doing) ━━━
    {
        id: 'g_n1_453', category: 'grammar', level: 'N1', tags: ['expression', 'determination'],
        stem: '今度{こんど}こそ試験{しけん}に合格{ごうかく}し___。',
        stemZh: '這次一定要考過給你們看。',
        options: [
            { text: 'てみせる', reason: '正確！「してみせる」表一定要做到（展現決心）。' },
            { text: 'てみる', reason: '「てみる」表試試看，語氣弱。' },
            { text: 'てやる', reason: '「てやる」表做給〜（口語），不如「てみせる」正式。' },
            { text: 'てほしい', reason: '「てほしい」表希望（別人）做〜，主語不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てみせる」表決心做到（展現給人看）',
            analysis: '「てみせる」表示說話者強烈的決心和意志，「一定要做到讓人看」。含誇耀和自信的語氣。',
            comparisons: ['てみせる：一定要做到（決心）', 'てみる：試試看（嘗試）', 'てやる：做給你看（口語、挑釁語氣）'],
            commonMistakes: ['○ 合格してみせる / × 合格をしてみせる → 動詞て形直接＋みせる'],
        },
    },
    // ━━━ そばから (as soon as...it's undone) ━━━
    {
        id: 'g_n1_454', category: 'grammar', level: 'N1', tags: ['expression', 'repetition'],
        stem: '片付{かたづ}ける___、子供{こども}が散{ち}らかす。',
        stemZh: '剛收拾完，孩子就又弄亂了。',
        options: [
            { text: 'そばから', reason: '正確！「そばから」表剛做完就被復原，含無奈感。' },
            { text: 'が早いか', reason: '「が早いか」表一〜就立刻〜，但不含「反覆」之意。' },
            { text: 'や否や', reason: '「や否や」表剛〜就〜，但不含「白費力氣」之意。' },
            { text: 'たとたんに', reason: '「たとたんに」表剛〜就〜，非反覆。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「そばから」表做了也白做的反覆',
            analysis: '「そばから」表示一做完某事，效果馬上就消失或被抵消，含「徒勞」「做了也白做」的語氣。常用於抱怨。',
            comparisons: ['そばから：剛〜就〜（白費、反覆）', 'が早いか：一〜就〜（迅速）', 'や否や：一〜就〜（瞬間）'],
            commonMistakes: ['○ 片付けるそばから / × 片付けたそばから → 用辞書形＋そばから'],
        },
    },
    // ━━━ をよそに (in disregard of) ━━━
    {
        id: 'g_n1_455', category: 'grammar', level: 'N1', tags: ['expression', 'disregard'],
        stem: '親{おや}の心配{しんぱい}___、息子{むすこ}は一人{ひとり}で海外{かいがい}に旅立{たびだ}った。',
        stemZh: '不顧父母的擔心，兒子獨自去了海外。',
        options: [
            { text: 'をよそに', reason: '正確！「をよそに」表不顧〜，將〜置之不理。' },
            { text: 'をものともせず', reason: '「をものともせず」表不畏〜（困難），含勇氣。' },
            { text: 'をかえりみず', reason: '「をかえりみず」也表不顧〜，但偏「不回頭看」。' },
            { text: 'にもかかわらず', reason: '「にもかかわらず」表儘管〜，較客觀。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「をよそに」表不顧他人的感受',
            analysis: '「をよそに」表示對他人的擔心、反對等視若無睹。含「冷漠」「置之不理」的語感，多含負面評價。',
            comparisons: ['をよそに：不顧〜（冷漠地無視）', 'をものともせず：不畏〜（勇敢地面對）', 'をかえりみず：不顧〜（不在乎後果）'],
            commonMistakes: ['○ 心配をよそに / × 心配によそに → 助詞用「を」'],
        },
    },
    // ━━━ を余儀なくされる (to be forced to) ━━━
    {
        id: 'g_n1_456', category: 'grammar', level: 'N1', tags: ['expression', 'compulsion'],
        stem: '地震{じしん}の影響{えいきょう}で、住民{じゅうみん}は避難{ひなん}___。',
        stemZh: '受地震影響，居民被迫避難。',
        options: [
            { text: 'せざるを得なかった', reason: '「ざるを得ない」也表不得不〜，但主語是行為者主動。' },
            { text: 'を余儀なくされた', reason: '正確！「を余儀なくされる」表被外力迫使不得不〜。' },
            { text: 'しなければならなかった', reason: '「なければならない」表必須〜，但不含「被迫」之意。' },
            { text: 'するほかなかった', reason: '「するほかない」表別無選擇只能〜，但非被動。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「を余儀なくされる」表被迫〜',
            analysis: '「を余儀なくされる」表示因外部原因被迫做某事。名詞＋を余儀なくされる。帶有「不情願但無法抗拒」之意。',
            comparisons: ['を余儀なくされる：被迫〜（外力造成）', 'ざるを得ない：不得不〜（情勢所迫）', 'しかない：只能〜（別無選擇）'],
            commonMistakes: ['○ 避難を余儀なくされた / × 避難が余儀なくされた → 助詞用「を」'],
        },
    },
    // ━━━ をもって (by means of; as of) ━━━
    {
        id: 'g_n1_457', category: 'grammar', level: 'N1', tags: ['expression', 'formal'],
        stem: '本日{ほんじつ}___、当店{とうてん}は閉店{へいてん}いたします。',
        stemZh: '本日起，本店歇業。',
        options: [
            { text: 'をもって', reason: '正確！「をもって」表以〜（正式宣告時間截止）。' },
            { text: 'において', reason: '「において」表在〜，非截止。' },
            { text: 'にあたり', reason: '「にあたり」表值此之際，非截止。' },
            { text: 'にかけて', reason: '「にかけて」表到〜為止（期間），非瞬間截止。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「をもって」表以〜為期限',
            analysis: '「をもって」有兩個主要用法：①以〜（手段）②以〜（時間截止）。表時間截止時多用於正式通知。',
            comparisons: ['をもって：以〜為期限（正式）', 'を限りに：以〜為限（一般）', 'で：在〜（口語截止）'],
            commonMistakes: ['○ 本日をもって / × 本日でもって → 表截止用「をもって」，「でもって」表手段（口語）'],
        },
    },
    // ━━━ にあって (in the situation of) ━━━
    {
        id: 'g_n1_458', category: 'grammar', level: 'N1', tags: ['expression', 'situation'],
        stem: '戦時中{せんじちゅう}___、人々{ひとびと}は食料{しょくりょう}の確保{かくほ}に苦労{くろう}した。',
        stemZh: '在戰時的狀況下，人們為確保食物而辛苦。',
        options: [
            { text: 'において', reason: '「において」表在〜，但不強調困難處境。' },
            { text: 'にあって', reason: '正確！「にあって」表處於〜的狀況下（強調特殊處境）。' },
            { text: 'にかけて', reason: '「にかけて」表在〜方面，語意不同。' },
            { text: 'にわたって', reason: '「にわたって」表涉及〜範圍，非處境。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「にあって」表處於某種特殊狀況下',
            analysis: '「にあって」接名詞（多為特殊時期、困難處境），強調在那種處境下如何應對。比「において」更強調處境的特殊性。',
            comparisons: ['にあって：處於〜（強調特殊處境）', 'において：在〜（中性場所/時間）', 'に際して：在〜之際（時機）'],
            commonMistakes: ['○ 戦時中にあって / × 戦時中であって → 「にあって」不同於「であって」'],
        },
    },
    // ━━━ に即して (in accordance with; based on) ━━━
    {
        id: 'g_n1_459', category: 'grammar', level: 'N1', tags: ['expression', 'formal'],
        stem: '現実{げんじつ}___対策{たいさく}を立{た}てるべきだ。',
        stemZh: '應該根據現實來制定對策。',
        options: [
            { text: 'に即して', reason: '正確！「に即して」表根據〜、結合〜（事實），制定方案。' },
            { text: 'に基づいて', reason: '「に基づいて」也表根據〜，但「に即して」更強調貼近實際。' },
            { text: 'によって', reason: '「によって」表根據〜，但較一般。' },
            { text: 'にわたって', reason: '「にわたって」表涉及〜，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に即して」表貼近〜實際情況',
            analysis: '「に即して」表示結合實際情況、現實來處理問題。比「に基づいて」更強調「貼合實際」「因地制宜」。',
            comparisons: ['に即して：結合〜實際（強調貼合）', 'に基づいて：根據〜（客觀依據）', 'に則って：遵照〜（規則制度）'],
            commonMistakes: ['○ 現実に即して / × 現実を即して → 助詞用「に」'],
        },
    },
    // ━━━ に則って (in accordance with rules) ━━━
    {
        id: 'g_n1_460', category: 'grammar', level: 'N1', tags: ['expression', 'formal'],
        stem: '法律{ほうりつ}___適正{てきせい}に処理{しょり}しなければならない。',
        stemZh: '必須按照法律妥善處理。',
        options: [
            { text: 'に則って', reason: '正確！「に則って」表遵照〜（法規、規範）行事。' },
            { text: 'に即して', reason: '「に即して」表結合〜實際，偏「貼合實際」。' },
            { text: 'に準じて', reason: '「に準じて」表比照〜、參照〜處理。' },
            { text: 'に応じて', reason: '「に応じて」表根據〜（程度）來調整。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に則って」表遵照規範',
            analysis: '「に則って（のっとって）」表示嚴格按照法規、慣例、規範行事。前接「法律」「規則」「伝統」等。',
            comparisons: ['に則って：遵照〜（規則、傳統）', 'に即して：結合〜（實際情況）', 'に基づいて：根據〜（資料、依據）'],
            commonMistakes: ['○ 法律に則って / × 法律を則って → 助詞用「に」'],
        },
    },
    // ━━━ に照らして (in light of; in comparison with) ━━━
    {
        id: 'g_n1_461', category: 'grammar', level: 'N1', tags: ['expression', 'formal'],
        stem: '過去{かこ}の事例{じれい}___判断{はんだん}すると、今回{こんかい}も同様{どうよう}の結果{けっか}になるだろう。',
        stemZh: '對照過去的案例來判斷，這次也會有同樣的結果吧。',
        options: [
            { text: 'に照らして', reason: '正確！「に照らして」表對照〜、參照〜來判斷。' },
            { text: 'によると', reason: '「によると」表根據〜（消息來源），非對照。' },
            { text: 'にしたがって', reason: '「にしたがって」表隨著〜、按照〜，語意不同。' },
            { text: 'をふまえて', reason: '「をふまえて」表基於〜（考慮到），語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に照らして」表對照〜進行判斷',
            analysis: '「に照らして」表示以某個標準、先例為參照來判斷。常見搭配：「法律に照らして」「常識に照らして」「前例に照らして」。',
            comparisons: ['に照らして：對照〜（標準、先例）', 'に基づいて：根據〜（資料）', 'をふまえて：基於〜（考慮到）'],
            commonMistakes: ['○ 事例に照らして / × 事例を照らして → 助詞用「に」'],
        },
    },
    // ━━━ を踏まえて (based on; taking into account) ━━━
    {
        id: 'g_n1_462', category: 'grammar', level: 'N1', tags: ['expression', 'formal'],
        stem: 'これまでの議論{ぎろん}___、最終的{さいしゅうてき}な方針{ほうしん}を決定{けってい}する。',
        stemZh: '基於目前為止的討論，決定最終方針。',
        options: [
            { text: 'を踏まえて', reason: '正確！「を踏まえて」表基於〜、立足於〜來行動。' },
            { text: 'を持って', reason: '「を持って」表以〜，但語感不同。' },
            { text: 'に伴って', reason: '「に伴って」表伴隨著〜，非「基於」。' },
            { text: 'を経て', reason: '「を経て」表經過〜（時間或階段）。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を踏まえて」表基於〜考慮而行動',
            analysis: '「を踏まえて」表示將某事作為基礎或前提來考慮後續行動。常用於會議、決策場合。',
            comparisons: ['を踏まえて：基於〜（考慮而行動）', 'に基づいて：根據〜（依據規範）', 'を受けて：承接〜（回應）'],
            commonMistakes: ['○ 議論を踏まえて / × 議論に踏まえて → 助詞用「を」'],
        },
    },
    // ━━━ を禁じ得ない (cannot help feeling) ━━━
    {
        id: 'g_n1_463', category: 'grammar', level: 'N1', tags: ['expression', 'emotion'],
        stem: 'この悲惨{ひさん}な事件{じけん}に対{たい}して、怒{いか}り___。',
        stemZh: '對這起悲慘事件，不禁感到憤怒。',
        options: [
            { text: 'を禁じ得ない', reason: '正確！「を禁じ得ない」表禁不住〜、不禁感到〜。' },
            { text: 'をおさえきれない', reason: '「をおさえきれない」表壓抑不住〜，較口語。' },
            { text: 'でならない', reason: '「でならない」表非常〜（自發感受），但接法不同。' },
            { text: 'をかくせない', reason: '「をかくせない」表隱藏不了〜，語意略不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を禁じ得ない」表不禁感到〜',
            analysis: '「を禁じ得ない」表示對某事無法控制自己的情感。常見搭配：「怒りを禁じ得ない」「涙を禁じ得ない」「驚きを禁じ得ない」。',
            comparisons: ['を禁じ得ない：不禁〜（正式書面語）', 'てならない：非常〜（一般書面語）', 'てたまらない：〜得受不了（口語）'],
            commonMistakes: ['○ 怒りを禁じ得ない / × 怒りが禁じ得ない → 助詞用「を」'],
        },
    },
    // ━━━ を顧みず (regardless of; without considering) ━━━
    {
        id: 'g_n1_464', category: 'grammar', level: 'N1', tags: ['expression', 'disregard'],
        stem: '消防士{しょうぼうし}は自{みずか}らの危険{きけん}___、火{ひ}の中{なか}に飛{と}び込{こ}んだ。',
        stemZh: '消防員不顧自身的危險，衝進了火場。',
        options: [
            { text: 'をかえりみず', reason: '正確！「を顧みず」表不顧〜、不考慮〜（自身安危等）。' },
            { text: 'をよそに', reason: '「をよそに」表不顧〜，但偏「無視他人感受」。' },
            { text: 'にもかかわらず', reason: '「にもかかわらず」表儘管〜，較客觀。' },
            { text: 'をものともせず', reason: '「をものともせず」表不畏〜，但偏「不當回事」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を顧みず」表不顧（自身安危等）',
            analysis: '「を顧みず（も顧みず）」表示不顧及自身的安全、利益、名聲等。含「犧牲自我」的語感，多為正面評價。',
            comparisons: ['を顧みず：不顧自身〜（正面、犧牲）', 'をよそに：不顧他人〜（冷漠）', 'をものともせず：不畏〜（勇敢）'],
            commonMistakes: ['○ 危険を顧みず / × 危険に顧みず → 助詞用「を」'],
        },
    },
    // ━━━ をいいことに (taking advantage of) ━━━
    {
        id: 'g_n1_465', category: 'grammar', level: 'N1', tags: ['expression', 'criticism'],
        stem: '先生{せんせい}がいない___、学生{がくせい}たちは騒{さわ}いでいる。',
        stemZh: '趁老師不在，學生們在吵鬧。',
        options: [
            { text: 'のを', reason: '「のを」表〜（的事），接法不同。' },
            { text: 'をいいことに', reason: '正確！「をいいことに」表利用〜為藉口，做不好的事。' },
            { text: 'のをきっかけに', reason: '「きっかけに」表以〜為契機，非「利用」。' },
            { text: 'ことをいいに', reason: '不存在「ことをいいに」的用法。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「をいいことに」表趁機利用〜（負面）',
            analysis: '「をいいことに」表示利用某個有利條件來做不好的事情。含「可乘之機」的負面語感。',
            comparisons: ['をいいことに：利用〜做壞事（批評）', 'にかこつけて：以〜為藉口（批評）', 'をきっかけに：以〜為契機（中性）'],
            commonMistakes: ['○ 先生がいないのをいいことに / × 先生がいないをいいことに → 動詞句需用「の」名詞化'],
        },
    },
    // ━━━ にかこつけて (using as a pretext) ━━━
    {
        id: 'g_n1_466', category: 'grammar', level: 'N1', tags: ['expression', 'criticism'],
        stem: '出張{しゅっちょう}___、観光{かんこう}を楽{たの}しんでいるようだ。',
        stemZh: '看來他是借出差之名去享受觀光了。',
        options: [
            { text: 'にかこつけて', reason: '正確！「にかこつけて」表以〜為藉口，實際做另一件事。' },
            { text: 'をいいことに', reason: '「をいいことに」表趁〜做壞事，但非「藉口」。' },
            { text: 'を兼ねて', reason: '「を兼ねて」表兼做〜，非藉口。' },
            { text: 'がてら', reason: '「がてら」表順便〜，非藉口。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にかこつけて」表以〜為藉口',
            analysis: '「にかこつけて」表示表面上是做某事，實際是以此為藉口去做真正想做的事。含批評語氣。',
            comparisons: ['にかこつけて：以〜為藉口（批評）', 'をいいことに：利用〜為有利條件（批評）', 'を口実に：以〜為理由（更直接）'],
            commonMistakes: ['○ 出張にかこつけて / × 出張をかこつけて → 助詞用「に」'],
        },
    },
    // ━━━ にかまけて (being absorbed in; neglecting because) ━━━
    {
        id: 'g_n1_467', category: 'grammar', level: 'N1', tags: ['expression', 'criticism'],
        stem: '仕事{しごと}___、家族{かぞく}との時間{じかん}を疎{おろそ}かにしてはいけない。',
        stemZh: '不能只顧著工作而忽略和家人的時間。',
        options: [
            { text: 'にかまけて', reason: '正確！「にかまけて」表只顧著〜而忽略其他。' },
            { text: 'にかこつけて', reason: '「にかこつけて」表以〜為藉口，語意不同。' },
            { text: 'にこだわって', reason: '「にこだわって」表拘泥於〜，不含「忽略」。' },
            { text: 'に追われて', reason: '「に追われて」表被〜追著跑，含忙碌但非批評。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にかまけて」表只顧著〜而忽略',
            analysis: '「にかまけて」表示專注於某事而忽略了更重要的事。含負面評價，批評過度沉迷。',
            comparisons: ['にかまけて：只顧著〜（忽略他事）', 'にかこつけて：以〜為藉口', 'に追われて：被〜忙得不可開交'],
            commonMistakes: ['○ 仕事にかまけて / × 仕事をかまけて → 助詞用「に」'],
        },
    },
    // ━━━ の至り (the utmost; extremely - humble/formal) ━━━
    {
        id: 'g_n1_468', category: 'grammar', level: 'N1', tags: ['expression', 'formal'],
        stem: 'お招{まね}きいただき、光栄{こうえい}___です。',
        stemZh: '承蒙邀請，深感榮幸之至。',
        options: [
            { text: 'の至り', reason: '正確！「光栄の至り」表榮幸之至，正式謙遜表達。' },
            { text: 'の極み', reason: '「の極み」也表極致，但不如「の至り」謙遜。' },
            { text: '限りだ', reason: '「限りだ」表非常〜，但用於自身感受，不夠正式。' },
            { text: 'そのものだ', reason: '「そのものだ」表正是〜本身，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「の至り」表〜之至（正式謙遜）',
            analysis: '「の至り」接名詞，表示某種感情到了極點。常見於正式場合的謙遜表達：「光栄の至り」「赤面の至り」「若気の至り」。',
            comparisons: ['の至り：〜之至（正式謙遜）', 'の極み：〜之極（強烈感受）', '限りだ：非常〜（自身感受）'],
            commonMistakes: ['○ 光栄の至りです / × 光栄な至りです → 名詞＋の至り'],
        },
    },
    // ━━━ の極み (the pinnacle of; the height of) ━━━
    {
        id: 'g_n1_469', category: 'grammar', level: 'N1', tags: ['expression', 'degree'],
        stem: 'この上{うえ}ない贅沢{ぜいたく}___を味{あじ}わった。',
        stemZh: '品嚐到了極致的奢華。',
        options: [
            { text: 'の極み', reason: '正確！「贅沢の極み」表奢華之極致。' },
            { text: 'の至り', reason: '「の至り」多用於情感的正式表達，非「奢華」。' },
            { text: 'の限り', reason: '「の限り」表〜的範圍內，非極致。' },
            { text: 'のあまり', reason: '「のあまり」表因過度〜而〜，非極致。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「の極み」表〜的極致',
            analysis: '「の極み」接名詞，表示達到某種狀態的最高點。可正面可負面：「贅沢の極み」「感激の極み」「疲労の極み」。',
            comparisons: ['の極み：〜的極致（正負皆可）', 'の至り：〜之至（謙遜、正式）', '極まりない：〜至極（ナ形容詞接續）'],
            commonMistakes: ['○ 贅沢の極み / × 贅沢な極み → 名詞＋の極み'],
        },
    },
    // ━━━ にも増して (more than ever; even more than) ━━━
    {
        id: 'g_n1_470', category: 'grammar', level: 'N1', tags: ['expression', 'comparison'],
        stem: '今年{ことし}は例年{れいねん}___暑{あつ}い夏{なつ}になった。',
        stemZh: '今年比往年更熱。',
        options: [
            { text: 'に比べて', reason: '「に比べて」表與〜相比，語感較中性。' },
            { text: 'にもまして', reason: '正確！「にもまして」表比〜更甚，含「超出預想」之意。' },
            { text: 'よりも', reason: '「よりも」表比〜，較一般。' },
            { text: 'にひきかえ', reason: '「にひきかえ」表與〜截然相反，非程度比較。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「にもまして」表比〜更加',
            analysis: '「にもまして」（にも増して）表示比以往或比對比物更甚。含「超越」「更勝一籌」之意。',
            comparisons: ['にもまして：比〜更甚（超越）', 'に比べて：與〜相比（中性）', 'にひきかえ：與〜截然相反'],
            commonMistakes: ['○ 例年にもまして / × 例年よりにもまして → 「にもまして」不與「より」連用'],
        },
    },
    // ━━━ には当たらない (not worth; no need to) ━━━
    {
        id: 'g_n1_471', category: 'grammar', level: 'N1', tags: ['expression', 'evaluation'],
        stem: 'それくらいのことで驚{おどろ}く___。',
        stemZh: '那種程度的事沒什麼好驚訝的。',
        options: [
            { text: 'には当たらない', reason: '正確！「には当たらない」表不值得〜、沒必要〜。' },
            { text: 'には及ばない', reason: '「には及ばない」也表不必〜，但偏「不需要」。' },
            { text: 'までもない', reason: '「までもない」表不用〜就〜，但接法不同。' },
            { text: 'にはあたらない', reason: '此即「には当たらない」的假名寫法，與選項A相同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「には当たらない」表不值得〜',
            analysis: '「には当たらない」表示某事不值得做某種反應。常見搭配：「驚くには当たらない」「非難するには当たらない」「同情するには当たらない」。',
            comparisons: ['には当たらない：不值得〜（評價）', 'には及ばない：不必〜（行動）', 'までもない：不用〜（程度）'],
            commonMistakes: ['○ 驚くには当たらない / × 驚きには当たらない → 動詞辞書形＋には当たらない'],
        },
    },
    // ━━━ にもほどがある (there's a limit to) ━━━
    {
        id: 'g_n1_472', category: 'grammar', level: 'N1', tags: ['expression', 'criticism'],
        stem: '冗談{じょうだん}___。いい加減{かげん}にしろ。',
        stemZh: '開玩笑也該有個限度。給我適可而止。',
        options: [
            { text: 'にもほどがある', reason: '正確！「にもほどがある」表〜也該有個限度，含強烈不滿。' },
            { text: 'にもかぎりがある', reason: '「にも限りがある」表〜也有限度，但較客觀。' },
            { text: 'にしてはいけない', reason: '不自然的表達。' },
            { text: 'ではすまない', reason: '「ではすまない」表不能只靠〜了事，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にもほどがある」表太過分了',
            analysis: '「にもほどがある」表示某種行為太過分，超過了可容忍的限度。含強烈的批評和不滿。',
            comparisons: ['にもほどがある：太過分了（強烈批評）', 'すぎる：太〜了（一般程度）', 'にも限りがある：也有限度（客觀）'],
            commonMistakes: ['○ 冗談にもほどがある / × 冗談がほどがある → 助詞用「にも」'],
        },
    },
    // ━━━ ずくめ (entirely; all) ━━━
    {
        id: 'g_n1_473', category: 'grammar', level: 'N1', tags: ['expression', 'totality'],
        stem: '今年{ことし}は良{よ}いこと___の一年{いちねん}だった。',
        stemZh: '今年是盡是好事的一年。',
        options: [
            { text: 'ずくめ', reason: '正確！「ずくめ」表全都是〜、淨是〜。' },
            { text: 'まみれ', reason: '「まみれ」表沾滿〜（髒物），非此處語意。' },
            { text: 'だらけ', reason: '「だらけ」表到處都是〜（多負面），非此處語感。' },
            { text: 'ぐるみ', reason: '「ぐるみ」表全體一起〜，非「淨是」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ずくめ」表全都是〜',
            analysis: '「ずくめ」接名詞，表示全都是某種事物。可正面可負面：「いいことずくめ」「黒ずくめ」「規則ずくめ」。',
            comparisons: ['ずくめ：全都是〜（整體）', 'だらけ：到處都是〜（多負面）', 'まみれ：沾滿〜（表面髒物）'],
            commonMistakes: ['○ いいことずくめ / × いいことのずくめ → 名詞直接＋ずくめ'],
        },
    },
    // ━━━ まみれ (covered with; smeared with) ━━━
    {
        id: 'g_n1_474', category: 'grammar', level: 'N1', tags: ['expression', 'state'],
        stem: '泥{どろ}___になりながら、子供{こども}たちは元気{げんき}に遊{あそ}んでいた。',
        stemZh: '孩子們渾身沾滿泥巴，精神十足地在玩耍。',
        options: [
            { text: 'まみれ', reason: '正確！「泥まみれ」表沾滿泥巴。' },
            { text: 'だらけ', reason: '「だらけ」也可表到處是泥，但「まみれ」更強調沾附在身上。' },
            { text: 'ずくめ', reason: '「ずくめ」表全都是〜，但不表物理附著。' },
            { text: 'ぐるみ', reason: '「ぐるみ」表全體〜，語意完全不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「まみれ」表沾滿〜（表面黏附）',
            analysis: '「まみれ」接名詞，表示表面沾滿了不潔或不好的東西。常見：「血まみれ」「汗まみれ」「泥まみれ」「借金まみれ」。',
            comparisons: ['まみれ：沾滿〜（表面附著）', 'だらけ：到處都是〜（散布）', 'ずくめ：全都是〜（整體構成）'],
            commonMistakes: ['○ 泥まみれ / × 泥のまみれ → 名詞直接＋まみれ'],
        },
    },
    // ━━━ ぐるみ (the whole; together with) ━━━
    {
        id: 'g_n1_475', category: 'grammar', level: 'N1', tags: ['expression', 'totality'],
        stem: 'この犯罪{はんざい}は組織{そしき}___で行{おこな}われたものだ。',
        stemZh: '這起犯罪是整個組織共同犯下的。',
        options: [
            { text: 'ぐるみ', reason: '正確！「組織ぐるみ」表全組織一起〜。' },
            { text: 'ずくめ', reason: '「ずくめ」表全都是〜，非「全員參與」。' },
            { text: 'まるごと', reason: '「まるごと」表整個〜，但不接「で」表共同行動。' },
            { text: 'ごと', reason: '「ごと」表連同〜一起，但語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ぐるみ」表全體一起〜',
            analysis: '「ぐるみ」接集團名詞，表示整個集團都參與。常見：「町ぐるみ」「会社ぐるみ」「家族ぐるみ」「国ぐるみ」。',
            comparisons: ['ぐるみ：全體一起〜（集團行動）', 'ずくめ：全都是〜（構成）', 'ごと：連同〜一起（附帶）'],
            commonMistakes: ['○ 組織ぐるみ / × 組織のぐるみ → 名詞直接＋ぐるみ'],
        },
    },
    // ━━━ めく (to show signs of; to seem like) ━━━
    {
        id: 'g_n1_476', category: 'grammar', level: 'N1', tags: ['suffix', 'appearance'],
        stem: '暖{あたた}かい風{かぜ}が吹{ふ}き、春{はる}___いてきた。',
        stemZh: '暖風吹來，充滿了春天的氣息。',
        options: [
            { text: 'めいて', reason: '正確！「春めく」表帶有春天的氣息、像春天。' },
            { text: 'びて', reason: '「びる」表像〜的樣子，但「春びる」不自然。' },
            { text: 'がかって', reason: '「がかる」表帶有〜色彩，但「春がかる」不自然。' },
            { text: 'じみて', reason: '「じみる」表像〜似的（多負面），「春じみる」不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「めく」表帶有〜的氣息',
            analysis: '「めく」接名詞，表示呈現出〜的跡象或氣息。常見：「春めく」「秋めく」「皮肉めく」「謎めく」。活用為五段動詞。',
            comparisons: ['めく：帶有〜的氣息（季節、氛圍）', 'びる：像〜的樣子（外觀）', 'じみる：像〜似的（多負面）'],
            commonMistakes: ['○ 春めいてきた / × 春めくてきた → 五段動詞て形「めいて」'],
        },
    },
    // ━━━ がましい (smacking of; suggestive of) ━━━
    {
        id: 'g_n1_477', category: 'grammar', level: 'N1', tags: ['suffix', 'appearance'],
        stem: '彼{かれ}の言{い}い訳{わけ}___態度{たいど}が気{き}に入{い}らない。',
        stemZh: '他那副帶有辯解意味的態度讓人不悅。',
        options: [
            { text: 'がましい', reason: '正確！「言い訳がましい」表帶有辯解色彩的。' },
            { text: 'めいた', reason: '「めく」表帶有〜氣息，但「言い訳めいた」語感略不同。' },
            { text: 'じみた', reason: '「じみた」表像〜似的，但「言い訳じみた」較少用。' },
            { text: 'っぽい', reason: '「っぽい」表像〜的，較口語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「がましい」表帶有〜色彩（多負面）',
            analysis: '「がましい」接名詞，表示帶有某種令人不快的色彩。多用於負面評價。常見：「言い訳がましい」「押し付けがましい」「恩着せがましい」。',
            comparisons: ['がましい：帶有〜色彩（負面）', 'めく：帶有〜氣息（中性）', 'じみた：像〜似的（較輕度負面）'],
            commonMistakes: ['○ 言い訳がましい / × 言い訳ながましい → 名詞直接＋がましい'],
        },
    },
    // ━━━ びる / びた (to look like; to have an air of) ━━━
    {
        id: 'g_n1_478', category: 'grammar', level: 'N1', tags: ['suffix', 'appearance'],
        stem: '彼{かれ}は年齢{ねんれい}の割{わり}に大人{おとな}___ている。',
        stemZh: '他相對於年齡來說顯得很成熟。',
        options: [
            { text: 'びて', reason: '正確！「大人びている」表顯得像大人、老成。' },
            { text: 'めいて', reason: '「めく」表帶有〜氣息，但「大人めく」不自然。' },
            { text: 'ぶって', reason: '「ぶる」表裝作〜，含虛偽感，非自然流露。' },
            { text: 'がかって', reason: '「がかる」表帶有〜色彩，「大人がかる」不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「びる」表自然地呈現出〜的樣子',
            analysis: '「びる」接名詞，表示自然而然地呈現出某種樣子。常見：「大人びる」「古びる」「田舎びる」「荒びる」。活用為上一段動詞。',
            comparisons: ['びる：自然呈現〜的樣子', 'ぶる：故意裝作〜（虛偽）', 'めく：帶有〜的氣息（季節等）'],
            commonMistakes: ['○ 大人びている / × 大人びっている → 上一段動詞，「びて」不促音'],
        },
    },
    // ━━━ ぶる (to pretend; to act as if) ━━━
    {
        id: 'g_n1_479', category: 'grammar', level: 'N1', tags: ['suffix', 'pretense'],
        stem: '彼女{かのじょ}はいつも偉{えら}___いるが、実力{じつりょく}は大{たい}したことない。',
        stemZh: '她總是擺出了不起的架子，但實力也不過如此。',
        options: [
            { text: 'がって', reason: '「がる」表表現出〜的樣子，但不含「裝腔作勢」。' },
            { text: 'ぶって', reason: '正確！「偉ぶる」表擺架子、裝大。' },
            { text: 'びて', reason: '「びる」表自然呈現〜，非故意裝作。' },
            { text: 'めいて', reason: '「めく」表帶有〜氣息，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ぶる」表故意裝出〜的樣子',
            analysis: '「ぶる」接形容詞語幹或名詞，表示故意裝出某種樣子。含批評語氣。常見：「偉ぶる」「知ったかぶる」「利口ぶる」。',
            comparisons: ['ぶる：故意裝作〜（批評）', 'びる：自然呈現〜', 'がる：表現出〜的樣子（客觀）'],
            commonMistakes: ['○ 偉ぶっている / × 偉いぶっている → イ形容詞去「い」＋ぶる'],
        },
    },
    // ━━━ ことなしに (without doing) ━━━
    {
        id: 'g_n1_480', category: 'grammar', level: 'N1', tags: ['expression', 'condition'],
        stem: '努力{どりょく}する___、成功{せいこう}は得{え}られない。',
        stemZh: '不努力就無法獲得成功。',
        options: [
            { text: 'ことなしに', reason: '正確！「ことなしに」表不做〜就不能〜。' },
            { text: 'ことなく', reason: '「ことなく」表不〜地、沒有〜就，較一般。' },
            { text: 'ことなしで', reason: '不存在「ことなしで」的用法。' },
            { text: 'までもなく', reason: '「までもなく」表不必〜就〜，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことなしに（は）」表不做〜就無法〜',
            analysis: '「ことなしに（は）〜ない」表示如果不做某事，就無法實現後項。帶有「這是必要條件」的語感。',
            comparisons: ['ことなしに：不做〜就不能〜（書面語）', 'ことなく：不〜地（一般）', 'なくして（は）：沒有〜就不〜（強調）'],
            commonMistakes: ['○ 努力することなしに / × 努力のことなしに → 動詞辞書形＋ことなしに'],
        },
    },
    // ━━━ なくしては / なしには (without) ━━━
    {
        id: 'g_n1_481', category: 'grammar', level: 'N1', tags: ['expression', 'condition'],
        stem: '市民{しみん}の協力{きょうりょく}___、この計画{けいかく}は実現{じつげん}できない。',
        stemZh: '沒有市民的合作，這個計劃就無法實現。',
        options: [
            { text: 'なくしては', reason: '正確！「なくしては」表如果沒有〜就不能〜。' },
            { text: 'なければ', reason: '「なければ」也表如果沒有〜，但較一般。' },
            { text: 'なしでは', reason: '「なしでは」也可表沒有〜就〜，但不如「なくしては」正式。' },
            { text: 'がなくて', reason: '「がなくて」表沒有〜，但非條件句型。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なくしては」表如果沒有〜就不行',
            analysis: '「なくしては（なくして）」接名詞，表示某事物是不可或缺的條件。後接否定，表示沒有它就無法實現。',
            comparisons: ['なくしては：沒有〜就不行（書面語）', 'なしには：沒有〜就不行（同義）', 'なければ：如果沒有〜（一般條件）'],
            commonMistakes: ['○ 協力なくしては / × 協力がなくしては → 名詞直接＋なくしては'],
        },
    },
    // ━━━ にとどまらず (not limited to; going beyond) ━━━
    {
        id: 'g_n1_482', category: 'grammar', level: 'N1', tags: ['expression', 'expansion'],
        stem: 'その問題{もんだい}は国内{こくない}___、国際的{こくさいてき}にも議論{ぎろん}されている。',
        stemZh: '那個問題不僅限於國內，在國際上也有討論。',
        options: [
            { text: 'にとどまらず', reason: '正確！「にとどまらず」表不僅限於〜，範圍更廣。' },
            { text: 'のみならず', reason: '「のみならず」也表不僅〜，但語感略不同。' },
            { text: 'ばかりか', reason: '「ばかりか」表不僅〜還〜，較口語。' },
            { text: 'に限らず', reason: '「に限らず」表不限於〜，較一般。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にとどまらず」表不僅限於〜',
            analysis: '「にとどまらず」表示範圍不限於前項，還擴展到更廣的範圍。含「影響力擴大」之意。',
            comparisons: ['にとどまらず：不僅限於〜（範圍擴展）', 'のみならず：不僅〜（書面遞進）', 'ばかりか：不僅〜（口語遞進）'],
            commonMistakes: ['○ 国内にとどまらず / × 国内でとどまらず → 助詞用「に」'],
        },
    },
    // ━━━ に先駆けて (ahead of; before others) ━━━
    {
        id: 'g_n1_483', category: 'grammar', level: 'N1', tags: ['expression', 'precedence'],
        stem: '他社{たしゃ}___、新製品{しんせいひん}を発表{はっぴょう}した。',
        stemZh: '在其他公司之前發表了新產品。',
        options: [
            { text: 'に先駆けて', reason: '正確！「に先駆けて」表率先〜、領先於〜。' },
            { text: 'に先立って', reason: '「に先立って」表在〜之前（事前準備），非「搶先」。' },
            { text: 'より先に', reason: '「より先に」表比〜早，較一般。' },
            { text: 'に先んじて', reason: '「に先んじて」也表搶先〜，但較正式。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に先駆けて」表率先、領先',
            analysis: '「に先駆けて」表示在他人之前率先做某事。含「開拓者」「先驅」的正面語感。',
            comparisons: ['に先駆けて：率先〜（開拓、正面）', 'に先立って：在〜之前（準備工作）', 'に先んじて：搶先〜（競爭）'],
            commonMistakes: ['○ 他社に先駆けて / × 他社を先駆けて → 助詞用「に」'],
        },
    },
    // ━━━ を経て (through; after going through) ━━━
    {
        id: 'g_n1_484', category: 'grammar', level: 'N1', tags: ['expression', 'process'],
        stem: '長年{ながねん}の研究{けんきゅう}___、ようやく新薬{しんやく}が完成{かんせい}した。',
        stemZh: '經過多年研究，終於完成了新藥。',
        options: [
            { text: 'を経て', reason: '正確！「を経て」表經過〜（時間或過程）。' },
            { text: 'を通じて', reason: '「を通じて」表透過〜、在〜期間內，語意略不同。' },
            { text: 'をもとに', reason: '「をもとに」表以〜為基礎，非過程。' },
            { text: 'を受けて', reason: '「を受けて」表承接〜，非過程。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を経て」表經過〜過程',
            analysis: '「を経て」表示經過某段時間或某個過程後達到結果。常見搭配：「長年の研究を経て」「審査を経て」「困難を経て」。',
            comparisons: ['を経て：經過〜（過程）', 'を通じて：透過〜（手段/期間）', 'を踏まえて：基於〜（考慮）'],
            commonMistakes: ['○ 研究を経て / × 研究に経て → 助詞用「を」'],
        },
    },
    // ━━━ を控えて (with...approaching; facing) ━━━
    {
        id: 'g_n1_485', category: 'grammar', level: 'N1', tags: ['expression', 'time'],
        stem: '試験{しけん}___、毎日{まいにち}必死{ひっし}で勉強{べんきょう}している。',
        stemZh: '考試在即，每天拼命學習。',
        options: [
            { text: 'を控えて', reason: '正確！「を控えて」表面臨〜、〜即將來臨。' },
            { text: 'を前にして', reason: '「を前にして」也表面對〜，但語感偏「在〜面前」。' },
            { text: 'に際して', reason: '「に際して」表在〜之際，偏「當時」而非「將來臨」。' },
            { text: 'にあたって', reason: '「にあたって」表值此之際，偏正式場合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を控えて」表即將面臨〜',
            analysis: '「を控えて」表示某個重要事件即將到來。含「迫在眉睫」的緊迫感。常見搭配：「試験を控えて」「出発を控えて」「引退を控えて」。',
            comparisons: ['を控えて：面臨〜（即將到來）', 'を前にして：在〜面前（當場）', 'に際して：在〜之際（正式）'],
            commonMistakes: ['○ 試験を控えて / × 試験に控えて → 助詞用「を」'],
        },
    },
    // ━━━ を境に (from the point of; marking the boundary) ━━━
    {
        id: 'g_n1_486', category: 'grammar', level: 'N1', tags: ['expression', 'turning-point'],
        stem: 'あの事件{じけん}___、彼{かれ}の人生{じんせい}は大{おお}きく変{か}わった。',
        stemZh: '以那起事件為界，他的人生產生了巨大的變化。',
        options: [
            { text: 'を境に', reason: '正確！「を境に」表以〜為分界，前後發生顯著變化。' },
            { text: 'を契機に', reason: '「を契機に」表以〜為契機，但不強調「分界」。' },
            { text: 'をきっかけに', reason: '「をきっかけに」表以〜為契機，較口語。' },
            { text: 'を皮切りに', reason: '「を皮切りに」表以〜為開端（一連串），非分界。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「を境に」表以〜為分界前後不同',
            analysis: '「を境に（して）」表示以某個事件或時間為分界線，之前和之後形成明顯對比。強調「前後判若兩人」。',
            comparisons: ['を境に：以〜為界（前後對比）', 'を契機に：以〜為契機（轉變）', 'を皮切りに：以〜為開端（連續）'],
            commonMistakes: ['○ 事件を境に / × 事件の境に → 助詞用「を」'],
        },
    },
    // ━━━ といわず〜といわず (whether...or; both...and) ━━━
    {
        id: 'g_n1_487', category: 'grammar', level: 'N1', tags: ['expression', 'totality'],
        stem: '手{て}___足{あし}___、泥{どろ}だらけだ。',
        stemZh: '不管是手還是腳，全身都沾滿了泥。',
        options: [
            { text: 'といわず / といわず', reason: '正確！「AといわずBといわず」表A也好B也好（全部）。' },
            { text: 'といい / といい', reason: '「AといいBといい」也表A也好B也好，但語感略不同。' },
            { text: 'やら / やら', reason: '「やら〜やら」表又〜又〜，但較口語。' },
            { text: 'だの / だの', reason: '「だの〜だの」表〜啦〜啦，較口語且含不滿。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「といわず〜といわず」表不論哪裡都〜',
            analysis: '「AといわずBといわず」列舉兩個具體例子，暗示其他部分也同樣如此。強調「全面」「無一例外」。',
            comparisons: ['といわず〜といわず：不論〜都〜（全面）', 'といい〜といい：〜也好〜也好（評價）', 'にしろ〜にしろ：不管〜還是〜（讓步）'],
            commonMistakes: ['○ 手といわず足といわず / × 手をといわず足をといわず → 名詞直接＋といわず'],
        },
    },
    // ━━━ だの〜だの (things like...and) ━━━
    {
        id: 'g_n1_488', category: 'grammar', level: 'N1', tags: ['expression', 'listing'],
        stem: '彼{かれ}は暑{あつ}い___寒{さむ}い___、文句{もんく}ばかり言{い}っている。',
        stemZh: '他又說熱啦又說冷啦，淨是在抱怨。',
        options: [
            { text: 'だの / だの', reason: '正確！「だの〜だの」表列舉幾個例子（含不滿語氣）。' },
            { text: 'とか / とか', reason: '「とか〜とか」也表列舉，但較中性口語。' },
            { text: 'やら / やら', reason: '「やら〜やら」表又〜又〜，但不一定含不滿。' },
            { text: 'なり / なり', reason: '「なり〜なり」表〜也好〜也好（建議），非抱怨。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「だの〜だの」表列舉（含不滿）',
            analysis: '「だの〜だの」列舉幾個例子，帶有不耐煩、批評的語氣。「熱いだの寒いだの」暗示說話者對這些抱怨感到厭煩。',
            comparisons: ['だの〜だの：〜啦〜啦（不滿列舉）', 'やら〜やら：又〜又〜（困惑列舉）', 'とか〜とか：〜什麼的（中性列舉）'],
            commonMistakes: ['○ 暑いだの寒いだの / × 暑いのだの寒いのだの → 直接接在述語後面'],
        },
    },
    // ━━━ なり〜なり (either...or; whether...or) ━━━
    {
        id: 'g_n1_489', category: 'grammar', level: 'N1', tags: ['expression', 'suggestion'],
        stem: '電話{でんわ}する___メールする___、とにかく連絡{れんらく}しなさい。',
        stemZh: '打電話也好發郵件也好，總之要聯繫。',
        options: [
            { text: 'なり / なり', reason: '正確！「なり〜なり」表〜也好〜也好（建議選擇）。' },
            { text: 'だの / だの', reason: '「だの〜だの」表列舉（含不滿），非建議。' },
            { text: 'といい / といい', reason: '「といい〜といい」表〜也好〜也好（評價），非建議。' },
            { text: 'やら / やら', reason: '「やら〜やら」表又〜又〜（困惑），非建議。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なり〜なり」表〜也好〜也好（提供選擇）',
            analysis: '「なり〜なり」列舉選項供對方選擇，帶有「至少做其中一個」的建議語氣。',
            comparisons: ['なり〜なり：〜也好〜也好（建議選擇）', 'でも〜でも：〜也好〜也好（口語選擇）', 'にしろ〜にしろ：不管〜還是〜（讓步）'],
            commonMistakes: ['○ 電話するなりメールするなり / × 電話なりメールなり → 動詞辞書形＋なり〜なり'],
        },
    },
    // ━━━ であれ〜であれ (whether...or) ━━━
    {
        id: 'g_n1_490', category: 'grammar', level: 'N1', tags: ['literary', 'concession'],
        stem: '男{おとこ}___女{おんな}___、この仕事{しごと}に性別{せいべつ}は関係{かんけい}ない。',
        stemZh: '不管是男是女，這份工作與性別無關。',
        options: [
            { text: 'であれ / であれ', reason: '正確！「であれ〜であれ」表不管是〜還是〜。' },
            { text: 'でも / でも', reason: '「でも〜でも」也可表不管〜，但較口語。' },
            { text: 'にしろ / にしろ', reason: '「にしろ〜にしろ」也表不管〜還是〜，但語感較弱。' },
            { text: 'だろうと / だろうと', reason: '「だろうと〜だろうと」也可，但較口語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「であれ〜であれ」表不管是A還是B',
            analysis: '「であれ〜であれ」接名詞，表示無論是哪種情況都一樣。文語表現，常用於正式場合。',
            comparisons: ['であれ〜であれ：不管〜還是〜（文語）', 'にしろ〜にしろ：不管〜還是〜（書面語）', 'でも〜でも：不管〜還是〜（口語）'],
            commonMistakes: ['○ 男であれ女であれ / × 男がであれ女がであれ → 名詞直接＋であれ'],
        },
    },
    // ━━━ ようが〜ようが / ようと〜ようと (no matter whether...or) ━━━
    {
        id: 'g_n1_491', category: 'grammar', level: 'N1', tags: ['expression', 'concession'],
        stem: '雨{あめ}が降{ふ}ろう___風{かぜ}が吹{ふ}こう___、マラソンは予定{よてい}通{どお}り実施{じっし}する。',
        stemZh: '不管下雨還是刮風，馬拉松都會按計劃舉行。',
        options: [
            { text: 'が / が', reason: '正確！「ようが〜ようが」表無論〜還是〜都〜。' },
            { text: 'と / と', reason: '「ようと〜ようと」也可，與「ようが」同義。此處兩者皆可但選A。' },
            { text: 'にも / にも', reason: '「ようにも」表想〜也〜不了，語意不同。' },
            { text: 'では / では', reason: '不存在「ようでは〜ようでは」的列舉用法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようが〜ようが」表無論如何都〜',
            analysis: '「ようが〜ようが」列舉兩種極端情況，表示無論哪種都不影響結果。動詞意向形＋が/と。',
            comparisons: ['ようが〜ようが：無論〜還是〜（強調）', 'ても〜ても：即使〜也〜（一般）', 'にしろ〜にしろ：不管〜還是〜（書面語）'],
            commonMistakes: ['○ 降ろうが / × 降るようが → 用意向形「降ろう」＋が'],
        },
    },
    // ━━━ ようと〜まいと (whether...or not) ━━━
    {
        id: 'g_n1_492', category: 'grammar', level: 'N1', tags: ['expression', 'concession'],
        stem: '彼{かれ}が来{こ}よう___来{こ}まい___、会議{かいぎ}は始{はじ}める。',
        stemZh: '不管他來不來，會議都要開始。',
        options: [
            { text: 'と / と', reason: '正確！「ようと〜まいと」表無論做不做〜都〜。' },
            { text: 'が / が', reason: '「ようが〜まいが」也可，同義。' },
            { text: 'か / か', reason: '不存在「ようか〜まいか」的讓步用法。' },
            { text: 'とも / とも', reason: '不存在「ようとも〜まいとも」的用法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようと〜まいと」表不管做不做都〜',
            analysis: '「ようと〜まいと」表示無論做某事還是不做都不影響。「意向形＋と＋辞書形/未然形＋まいと」。',
            comparisons: ['ようと〜まいと：不管做不做（文語讓步）', 'ても〜なくても：即使〜不〜也〜（一般）', 'にしろ〜にしろ：不管〜還是〜'],
            commonMistakes: ['○ 来ようと来まいと / × 来ようと来ないまいと → 「まい」本身就是否定'],
        },
    },
    // ━━━ かと思いきや (contrary to what one expected) ━━━
    {
        id: 'g_n1_493', category: 'grammar', level: 'N1', tags: ['expression', 'surprise'],
        stem: '試合{しあい}に負{ま}ける___、見事{みごと}な逆転{ぎゃくてん}勝{が}ちを収{おさ}めた。',
        stemZh: '原以為會輸掉比賽，結果漂亮地逆轉取勝了。',
        options: [
            { text: 'かと思いきや', reason: '正確！「かと思いきや」表本以為〜，結果卻〜。' },
            { text: 'かと思ったら', reason: '「かと思ったら」也表以為〜結果〜，但較口語。' },
            { text: 'にもかかわらず', reason: '「にもかかわらず」表儘管〜，非「意料之外」。' },
            { text: 'ところが', reason: '「ところが」表然而〜，為轉折但非文型。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かと思いきや」表出乎意料的結果',
            analysis: '「かと思いきや」表示原本以為會是某種結果，實際卻完全相反。含「大出意料」的驚訝語感。',
            comparisons: ['かと思いきや：本以為〜結果〜（強烈驚訝）', 'かと思ったら：以為〜結果〜（口語）', 'ところが：然而〜（一般轉折）'],
            commonMistakes: ['○ 負けるかと思いきや / × 負けたかと思いきや → 用辞書形或基本形'],
        },
    },
    // ━━━ にかかっている (depend on) ━━━
    {
        id: 'g_n1_494', category: 'grammar', level: 'N1', tags: ['expression', 'dependence'],
        stem: 'プロジェクトの成否{せいひ}は、チームの団結力{だんけつりょく}___。',
        stemZh: '項目的成敗取決於團隊的凝聚力。',
        options: [
            { text: 'にかかっている', reason: '正確！「にかかっている」表全靠〜、取決於〜。' },
            { text: 'によっている', reason: '「によっている」不自然，應用「による」。' },
            { text: 'に基づいている', reason: '「に基づいている」表基於〜，非「取決於」。' },
            { text: 'にわたっている', reason: '「にわたっている」表遍及〜，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にかかっている」表取決於〜',
            analysis: '「にかかっている」表示某事的成敗或結果全部取決於某個因素。含「關鍵在此」的語感。',
            comparisons: ['にかかっている：取決於〜（關鍵因素）', 'による：根據〜而定（一般）', 'いかんだ：視〜而定（文語）'],
            commonMistakes: ['○ 団結力にかかっている / × 団結力がかかっている → 助詞用「に」'],
        },
    },
    // ━━━ に忍びない (cannot bear to) ━━━
    {
        id: 'g_n1_495', category: 'grammar', level: 'N1', tags: ['expression', 'emotion'],
        stem: '長年{ながねん}使{つか}ってきたこの家{いえ}を手放{てばな}すのは忍{しの}び___。',
        stemZh: '實在不忍心放棄住了多年的房子。',
        options: [
            { text: 'がたい', reason: '「がたい」表難以〜，但「忍びがたい」不如「忍びない」自然。' },
            { text: 'ない', reason: '正確！「忍びない」表不忍心〜、於心不忍。' },
            { text: 'かねる', reason: '「かねる」表難以〜，但接法不同。' },
            { text: 'えない', reason: '「えない」表不可能〜，但「忍びえない」不自然。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「忍びない」表不忍心〜',
            analysis: '「に忍びない」或「V＋のは忍びない」表示不忍心做某事，含同情或不捨之情。',
            comparisons: ['忍びない：不忍心〜（感情）', 'がたい：難以〜（客觀困難）', 'かねる：難以〜（為難）'],
            commonMistakes: ['○ 見るに忍びない / × 見るが忍びない → 助詞用「に」'],
        },
    },
    // ━━━ ではすまない (cannot get away with; not enough) ━━━
    {
        id: 'g_n1_496', category: 'grammar', level: 'N1', tags: ['expression', 'consequence'],
        stem: 'これだけの被害{ひがい}が出{で}た以上{いじょう}、謝{あやま}っただけ___。',
        stemZh: '既然造成了這麼大的損害，光道歉是不夠的。',
        options: [
            { text: 'ではすまない', reason: '正確！「ではすまない」表光靠〜是了結不了的。' },
            { text: 'ではいけない', reason: '「ではいけない」表不可以〜，非「不夠」。' },
            { text: 'ではならない', reason: '「ではならない」表不可以〜，較正式。' },
            { text: 'ではおかない', reason: '「ではおかない」表不能就此罷休，語意略不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ではすまない」表光靠〜是不行的',
            analysis: '「では済まない」表示某種處理方式不足以解決問題，需要更進一步的對應。',
            comparisons: ['ではすまない：光靠〜不夠（要求更多）', 'ではいけない：不可以〜（禁止）', 'ずにはすまない：不〜不行（道義）'],
            commonMistakes: ['○ 謝っただけではすまない / × 謝りだけではすまない → 動詞た形＋だけではすまない'],
        },
    },
    // ━━━ ほどのことではない (not worth; not a big deal) ━━━
    {
        id: 'g_n1_497', category: 'grammar', level: 'N1', tags: ['expression', 'evaluation'],
        stem: 'ちょっとした風邪{かぜ}だから、心配{しんぱい}する___。',
        stemZh: '只是小感冒，不值得擔心。',
        options: [
            { text: 'ほどのことではない', reason: '正確！「ほどのことではない」表不至於到〜的程度、沒什麼大不了。' },
            { text: 'ことはない', reason: '「ことはない」也表不必〜，但語感略不同。' },
            { text: 'までもない', reason: '「までもない」表不用〜就〜，但接法不同。' },
            { text: 'には当たらない', reason: '「には当たらない」表不值得〜，但更正式。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ほどのことではない」表沒什麼大不了的',
            analysis: '「ほどのことではない」表示事情沒到那種程度，不值得過度反應。帶有安慰或輕描淡寫的語氣。',
            comparisons: ['ほどのことではない：沒什麼大不了（安慰）', 'には当たらない：不值得〜（評價）', 'ことはない：不必〜（建議）'],
            commonMistakes: ['○ 心配するほどのことではない / × 心配のほどのことではない → 動詞辞書形＋ほどのことではない'],
        },
    },
    // ━━━ ほうがましだ (would rather; is preferable to) ━━━
    {
        id: 'g_n1_498', category: 'grammar', level: 'N1', tags: ['expression', 'preference'],
        stem: 'あんな会社{かいしゃ}で働{はたら}くくらいなら、無職{むしょく}の___。',
        stemZh: '與其在那種公司工作，還不如失業。',
        options: [
            { text: 'ほうがいい', reason: '「ほうがいい」表〜比較好，但語氣不夠強烈。' },
            { text: 'ほうがましだ', reason: '正確！「ほうがましだ」表還不如〜、〜反而好得多。含極度不滿。' },
            { text: 'ほうがよかった', reason: '「ほうがよかった」表做〜比較好（過去後悔），非比較偏好。' },
            { text: 'ことだ', reason: '「ことだ」表應該〜（建議），語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ほうがましだ」表寧可〜也不願〜',
            analysis: '「ほうがましだ」表示相比極端不好的選項，另一個雖然也不好但「還好一些」。含強烈不滿和誇張。常與「くらいなら」搭配。',
            comparisons: ['ほうがましだ：還不如〜（極度不滿）', 'ほうがいい：〜比較好（一般建議）', 'くらいなら：與其〜不如〜（極端比較）'],
            commonMistakes: ['○ 無職のほうがましだ / × 無職がましだ → 需要「ほうが」構成比較'],
        },
    },
    // ━━━ としたことが (someone like...would never) ━━━
    {
        id: 'g_n1_499', category: 'grammar', level: 'N1', tags: ['expression', 'surprise'],
        stem: 'ベテランの彼{かれ}___、こんなミスをするとは信{しん}じられない。',
        stemZh: '身為老手的他竟然犯這種錯，真是難以置信。',
        options: [
            { text: 'としたことが', reason: '正確！「としたことが」表身為〜竟然〜（溫和驚訝）。' },
            { text: 'ともあろうものが', reason: '「ともあろうものが」也表身為〜竟然〜，但語氣更強烈。' },
            { text: 'たるものが', reason: '「たるものが」表作為〜竟然〜，偏規範批判。' },
            { text: 'にしたところで', reason: '「にしたところで」表即使是〜也〜，非驚訝。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「としたことが」表意外驚訝',
            analysis: '「としたことが」接在人名或身份後，表示對該人做出不相稱行為的溫和驚訝。比「ともあろうものが」語氣輕。',
            comparisons: ['としたことが：身為〜竟然〜（溫和驚訝）', 'ともあろうものが：身為〜竟然〜（強烈批判）', 'たるものが：作為〜竟然〜（規範批判）'],
            commonMistakes: ['○ 彼としたことが / × 彼がしたことが → 固定句型「としたことが」'],
        },
    },
    // ━━━ にしたところで (even if it is) ━━━
    {
        id: 'g_n1_500', category: 'grammar', level: 'N1', tags: ['expression', 'concession'],
        stem: '社長{しゃちょう}___、一人{ひとり}で全{すべ}てを決{き}めることはできない。',
        stemZh: '即使是社長，也不能一個人決定所有事情。',
        options: [
            { text: 'にしたところで', reason: '正確！「にしたところで」表即使是〜也不能〜。' },
            { text: 'としたことが', reason: '「としたことが」表身為〜竟然〜，非讓步。' },
            { text: 'だからといって', reason: '「だからといって」表就算如此也不〜，語感偏因果。' },
            { text: 'であるからこそ', reason: '「であるからこそ」表正因為是〜才〜，非讓步。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にしたところで」表即使是〜也〜',
            analysis: '「にしたところで」表示即使是某種特殊身份或情況也不例外。含「連那樣的人也一樣」之意。',
            comparisons: ['にしたところで：即使是〜也〜（讓步）', 'としたところで：即使假設〜也〜', 'にしても：即使〜也〜（一般）'],
            commonMistakes: ['○ 社長にしたところで / × 社長がにしたところで → 名詞直接＋にしたところで'],
        },
    },
    // ━━━ といったらない (extremely; indescribably) ━━━
    {
        id: 'g_n1_501', category: 'grammar', level: 'N1', tags: ['expression', 'degree'],
        stem: '初{はじ}めて富士山{ふじさん}を見{み}た時{とき}の感動{かんどう}___。',
        stemZh: '第一次看到富士山時的感動簡直無法形容。',
        options: [
            { text: 'ったらない', reason: '「ったらない」是「といったらない」的口語形，此處書面語用下選項。' },
            { text: 'といったらない', reason: '正確！「といったらない」表〜得無法形容、〜極了。' },
            { text: 'ときたら', reason: '「ときたら」表說到〜（不滿），語意完全不同。' },
            { text: 'というものだ', reason: '「というものだ」表就是〜、真正的〜，非程度。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「といったらない」表〜到了極點',
            analysis: '「といったらない」（といったらありはしない）表示程度之深無法用言語形容。可正面可負面。',
            comparisons: ['といったらない：〜極了（無法形容）', 'この上ない：再也沒有比〜更〜的', '極まりない：〜到了極點（多負面）'],
            commonMistakes: ['○ 感動といったらない / × 感動がといったらない → 名詞直接＋といったらない'],
        },
    },
    // ━━━ とは打って変わって (completely different from) ━━━
    {
        id: 'g_n1_502', category: 'grammar', level: 'N1', tags: ['expression', 'contrast'],
        stem: '昨日{きのう}の悪天候{あくてんこう}___、今日{きょう}は見事{みごと}な快晴{かいせい}だ。',
        stemZh: '與昨天的壞天氣完全不同，今天是晴空萬里。',
        options: [
            { text: 'とは打って変わって', reason: '正確！「とは打って変わって」表與〜完全不同、一改以往。' },
            { text: 'にひきかえ', reason: '「にひきかえ」也表對比，但含褒貶評價。' },
            { text: 'に反して', reason: '「に反して」表與〜相反，較客觀。' },
            { text: 'とはいえ', reason: '「とはいえ」表雖然如此，非對比。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とは打って変わって」表一改以往',
            analysis: '「とは打って変わって」表示與之前的狀態形成戲劇性的對比。強調「前後判若兩人」「突然改變」。',
            comparisons: ['とは打って変わって：一改以往（戲劇性對比）', 'にひきかえ：與〜相反（含褒貶）', 'に反して：與〜相反（客觀）'],
            commonMistakes: ['○ 昨日とは打って変わって / × 昨日には打って変わって → 助詞用「とは」'],
        },
    },
    // ━━━ ないものか (isn't there a way to; I wish) ━━━
    {
        id: 'g_n1_503', category: 'grammar', level: 'N1', tags: ['expression', 'wish'],
        stem: 'もう少{すこ}し簡単{かんたん}にできる方法{ほうほう}は___。',
        stemZh: '有沒有更簡單一點的方法呢。',
        options: [
            { text: 'ないものか', reason: '正確！「ないものか」表希望有〜、能不能〜（期盼語氣）。' },
            { text: 'ないことか', reason: '不存在「ないことか」的用法。' },
            { text: 'ないものだ', reason: '「ないものだ」表感慨沒有〜，語意略不同。' },
            { text: 'ないわけか', reason: '不自然的表達。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ないものか」表期盼、渴望',
            analysis: '「ないものか」（ないものだろうか）表示說話者強烈希望能實現某事，帶有「想要但不確定能否實現」的語氣。',
            comparisons: ['ないものか：能不能〜呢（期盼）', 'ないだろうか：難道不〜嗎（推測）', 'ないのか：不是〜嗎（質問）'],
            commonMistakes: ['○ できる方法はないものか / × できる方法がないものか → 此處「は」表主題'],
        },
    },
    // ━━━ ないものでもない (not entirely impossible) ━━━
    {
        id: 'g_n1_504', category: 'grammar', level: 'N1', tags: ['expression', 'possibility'],
        stem: '条件{じょうけん}次第{しだい}では、契約{けいやく}に応{おう}じ___。',
        stemZh: '視條件而定，也不是不能答應合約。',
        options: [
            { text: 'ないものでもない', reason: '正確！「ないものでもない」表也不是不〜、也有可能〜。' },
            { text: 'ないわけではない', reason: '「ないわけではない」也表並非不〜，但較一般。' },
            { text: 'なくはない', reason: '「なくはない」也表不是沒有〜，但較口語。' },
            { text: 'ないとも言えない', reason: '「ないとも言えない」表不能說不〜，語感偏推測。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ないものでもない」表有餘地可商量',
            analysis: '「ないものでもない」用雙重否定表示消極的肯定，暗示有可能性但需要條件。含「勉強可以」的語感。',
            comparisons: ['ないものでもない：也不是不可以（有餘地）', 'ないわけではない：並非不〜（部分肯定）', 'なくはない：不是沒有〜（口語）'],
            commonMistakes: ['○ 応じないものでもない / × 応じないものではない → 「でもない」非「ではない」'],
        },
    },
    // ━━━ ないとも限らない (it is not certain that...won't) ━━━
    {
        id: 'g_n1_505', category: 'grammar', level: 'N1', tags: ['expression', 'possibility'],
        stem: '油断{ゆだん}していると、事故{じこ}が起{お}き___。',
        stemZh: '如果疏忽大意，也未必不會發生事故。',
        options: [
            { text: 'ないとも限らない', reason: '正確！「ないとも限らない」表也未必不會〜、說不定會〜。' },
            { text: 'かねない', reason: '「かねない」也表有可能〜，但語感更強烈。' },
            { text: 'ないものでもない', reason: '「ないものでもない」表也不是不〜，但偏主觀意願。' },
            { text: 'ないではおかない', reason: '「ないではおかない」表必然會〜，非「可能性」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ないとも限らない」表也許會〜（警告）',
            analysis: '「ないとも限らない」表示雖然可能性不大，但不能完全排除。常用於提醒注意、警告。',
            comparisons: ['ないとも限らない：未必不會〜（可能性提醒）', 'かねない：有可能〜（較強烈警告）', 'おそれがある：恐怕會〜（正式警告）'],
            commonMistakes: ['○ 起きないとも限らない / × 起きないとは限らない → 「とも」非「とは」，但實際上兩者都可使用'],
        },
    },
]
