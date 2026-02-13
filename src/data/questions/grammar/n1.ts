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
]
