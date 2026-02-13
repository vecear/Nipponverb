import { UnifiedQuestion } from '../types'

export const grammarN4: UnifiedQuestion[] = [
    // ━━━ 條件形「ば」 ━━━
    {
        id: 'g_n4_001', category: 'grammar', level: 'N4', tags: ['conditional', 'ba-form'],
        stem: '天気{てんき}がよけ___、公園{こうえん}に行{い}きましょう。',
        stemZh: '如果天氣好的話，去公園吧。',
        options: [
            { text: 'れば', reason: '正確！い形容詞「よい」的ば形是「よければ」。' },
            { text: 'たら', reason: '「たら」是另一種條件形，但此處空格在「よけ」後面，應填「れば」。' },
            { text: 'ると', reason: '「と」條件形接在辭書形後面，不接在「よけ」後。' },
            { text: 'なら', reason: '「なら」不接在い形容詞的活用語尾後面。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: 'い形容詞的ば形變化',
            analysis: 'い形容詞去掉「い」加上「ければ」：よい→よければ。ば形表示假設條件。',
            comparisons: ['よければ（如果好的話）', 'よかったら（如果好的話，較委婉）'],
            commonMistakes: ['○ よければ / × よいば → い形容詞要去「い」加「ければ」'],
        },
    },
    {
        id: 'g_n4_002', category: 'grammar', level: 'N4', tags: ['conditional', 'ba-form'],
        stem: '薬{くすり}を飲{の}め___、すぐ元気{げんき}になりますよ。',
        stemZh: '只要吃藥的話，馬上就會好起來喔。',
        options: [
            { text: 'ば', reason: '正確！五段動詞「飲む」的ば形是「飲めば」。' },
            { text: 'たら', reason: '「飲め」後面接「たら」不合語法，「たら」接在「飲ん」後。' },
            { text: 'と', reason: '「と」接在辭書形後面：飲むと。不接在「飲め」後。' },
            { text: 'なら', reason: '「なら」接在普通形後：飲むなら。不接在「飲め」後。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '五段動詞的ば形變化',
            analysis: '五段動詞將語尾的「う段」變為「え段」再加「ば」：飲む→飲めば。',
            comparisons: ['飲めば（如果喝的話）', '飲んだら（如果喝了的話）', '飲むと（一喝就...）'],
            commonMistakes: ['○ 飲めば / × 飲むば → 五段動詞要變え段再加ば'],
        },
    },
    {
        id: 'g_n4_003', category: 'grammar', level: 'N4', tags: ['conditional', 'ba-form'],
        stem: '早{はや}く起{お}き___、朝{あさ}ご飯{はん}が食{た}べられます。',
        stemZh: '如果早起的話，就能吃早餐。',
        options: [
            { text: 'れば', reason: '正確！一段動詞「起きる」的ば形是「起きれば」。' },
            { text: 'ば', reason: '一段動詞去掉「る」加「れば」，不是直接加「ば」。' },
            { text: 'たら', reason: '「たら」形是「起きたら」，不接在「起き」後面直接加「たら」。' },
            { text: 'ると', reason: '「と」形是「起きると」，要用辭書形。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '一段動詞的ば形變化',
            analysis: '一段動詞去掉「る」加「れば」：起きる→起きれば。',
            comparisons: ['起きれば（如果起床的話）', '起きたら（如果起床了的話）'],
            commonMistakes: ['○ 起きれば / × 起きば → 一段動詞去「る」加「れば」'],
        },
    },
    // ━━━ ば〜ほど ━━━
    {
        id: 'g_n4_004', category: 'grammar', level: 'N4', tags: ['conditional', 'ba-hodo'],
        stem: '日本語{にほんご}は勉強{べんきょう}すれば___ほど面白{おもしろ}くなる。',
        stemZh: '日語越學越有趣。',
        options: [
            { text: 'する', reason: '正確！「ば〜ほど」句型中，ほど前面接同一動詞的辭書形。' },
            { text: 'して', reason: '「して」是て形，「ば〜ほど」中ほど前面要用辭書形。' },
            { text: 'した', reason: '「した」是過去形，此句型不用過去形。' },
            { text: 'すれば', reason: '不需要重複ば形，ほど前面用辭書形。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ば〜ほど」（越...越...）的句型',
            analysis: '句型為「V-ば V-辭書形 ほど」，表示程度隨動作增加。如：勉強すればするほど。',
            comparisons: ['勉強すればするほど：越學越...', '読めば読むほど：越讀越...'],
            commonMistakes: ['○ すればするほど / × すればしたほど → ほど前面用辭書形'],
        },
    },
    {
        id: 'g_n4_005', category: 'grammar', level: 'N4', tags: ['conditional', 'ba-hodo'],
        stem: 'この本{ほん}は読{よ}め___読{よ}むほど好{す}きになる。',
        stemZh: '這本書越讀越喜歡。',
        options: [
            { text: 'ば', reason: '正確！「ば〜ほど」句型：読めば読むほど。' },
            { text: 'たら', reason: '「ば〜ほど」句型固定用ば形，不用たら。' },
            { text: 'と', reason: '「と〜ほど」不是正確的句型。' },
            { text: 'なら', reason: '「なら〜ほど」不是正確的句型。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ば〜ほど」句型的前半結構',
            analysis: '「V-ばV-辭書形ほど」：前半用ば形，後半用辭書形+ほど。',
            comparisons: ['読めば読むほど：越讀越...', '見れば見るほど：越看越...'],
            commonMistakes: ['○ 読めば読むほど / × 読んだら読むほど → 此句型固定用ば形'],
        },
    },
    // ━━━ ばいい ━━━
    {
        id: 'g_n4_006', category: 'grammar', level: 'N4', tags: ['conditional', 'ba-ii'],
        stem: 'どうすれ___いいですか。',
        stemZh: '該怎麼做才好呢？',
        options: [
            { text: 'ば', reason: '正確！「ばいい」表示「只要...就好」，どうすればいい＝該怎麼做。' },
            { text: 'たら', reason: '「どうしたらいい」也正確，但此處空格在「すれ」後面，應填「ば」。' },
            { text: 'と', reason: '「どうすると」表示自然結果，不適合徵求建議。' },
            { text: 'で', reason: '語法錯誤，「すれ」後面不接「で」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ばいい」表示建議或尋求建議',
            analysis: '「V-ばいい」意為「只要做...就好了」，常用於給建議或詢問方法。',
            comparisons: ['どうすればいい：該怎麼做', 'どうしたらいい：該怎麼做（意思相近）'],
            commonMistakes: ['○ すればいい / × するといい → 「ばいい」更強調「只要...就好」'],
        },
    },
    // ━━━ 場合は ━━━
    {
        id: 'g_n4_007', category: 'grammar', level: 'N4', tags: ['conditional', 'baai'],
        stem: '地震{じしん}の___は、すぐに机{つくえ}の下{した}に隠{かく}れてください。',
        stemZh: '地震的時候，請馬上躲到桌子下面。',
        options: [
            { text: '場合{ばあい}', reason: '正確！「場合は」表示「在...的情況下」。' },
            { text: '時{とき}', reason: '「時」也可以表示時間，但此處強調假設情況，「場合」更適合。' },
            { text: 'ところ', reason: '「ところ」表示正在做某事的時候，不適合假設情況。' },
            { text: 'うちに', reason: '「うちに」表示趁著某段時間，不適合假設災害情況。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「場合は」表示假設情況',
            analysis: '「場合は」用於假設某種情況發生時的應對方式，比「時」更正式、更強調假設。',
            comparisons: ['地震の場合は：地震的情況下（假設）', '地震の時：地震的時候（時間）'],
            commonMistakes: ['○ 場合は → 假設性情況 / ○ 時は → 一般性時間描述'],
        },
    },
    // ━━━ たら ━━━
    {
        id: 'g_n4_008', category: 'grammar', level: 'N4', tags: ['conditional', 'tara'],
        stem: '駅{えき}に着{つ}い___、電話{でんわ}してください。',
        stemZh: '到車站之後，請打電話。',
        options: [
            { text: 'たら', reason: '正確！「たら」表示「...之後」，着いたら＝到了之後。' },
            { text: 'ても', reason: '「着いても」表示「即使到了」，語意不合。' },
            { text: 'て', reason: '「着いて」是接續形，不表示條件或時間先後。' },
            { text: 'ると', reason: '「着くと」表示一到就...，但「着い」後面不能接「ると」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たら」表示確定的先後條件',
            analysis: '「たら」除了表假設，還可表示確定會發生的先後關係：「做了A之後，就做B」。',
            comparisons: ['着いたら電話して：到了之後打電話', '着いたとき電話して：到的時候打電話'],
            commonMistakes: ['「たら」用於確定先後 vs「ば」用於一般假設條件'],
        },
    },
    {
        id: 'g_n4_009', category: 'grammar', level: 'N4', tags: ['conditional', 'tara'],
        stem: '安{やす}かっ___、買{か}いたいです。',
        stemZh: '如果便宜的話，想買。',
        options: [
            { text: 'たら', reason: '正確！い形容詞「安い」的たら形是「安かったら」。' },
            { text: 'ければ', reason: '「安ければ」也正確，但此處空格在「安かっ」後面，應填「たら」。' },
            { text: 'て', reason: '語法錯誤，「安かって」不正確。' },
            { text: 'ば', reason: '「安かっば」不正確，ば形是「安ければ」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: 'い形容詞的たら形變化',
            analysis: 'い形容詞去掉「い」加「かったら」：安い→安かったら。',
            comparisons: ['安かったら：如果便宜的話', '安ければ：如果便宜的話（意思相近）'],
            commonMistakes: ['○ 安かったら / × 安いたら → い形容詞要去「い」加「かったら」'],
        },
    },
    // ━━━ と（条件） ━━━
    {
        id: 'g_n4_010', category: 'grammar', level: 'N4', tags: ['conditional', 'to'],
        stem: 'このボタンを押{お}す___、ドアが開{あ}きます。',
        stemZh: '按下這個按鈕，門就會開。',
        options: [
            { text: 'と', reason: '正確！「と」表示自然的因果關係或必然結果。' },
            { text: 'ば', reason: '「押せば」語法上可以，但「と」更適合描述機械的必然結果。' },
            { text: 'たら', reason: '「押したら」也可以，但「と」更強調每次都會發生的結果。' },
            { text: 'なら', reason: '「押すなら」意為「如果要按的話」，不表示必然結果。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「と」表示必然結果',
            analysis: '「と」用於描述每次都會發生的自然結果或習慣性動作，如機器操作。',
            comparisons: ['押すと開く：一按就開（必然）', '押したら開いた：按了之後就開了（一次經驗）'],
            commonMistakes: ['「と」：自然必然結果 / 「たら」：一次性或假設結果'],
        },
    },
    {
        id: 'g_n4_011', category: 'grammar', level: 'N4', tags: ['conditional', 'to'],
        stem: '春{はる}になる___、桜{さくら}が咲{さ}きます。',
        stemZh: '一到春天，櫻花就會開。',
        options: [
            { text: 'と', reason: '正確！「と」表示自然現象的必然關係。' },
            { text: 'ば', reason: '「なれば」語法上可以，但描述自然現象用「と」更自然。' },
            { text: 'たら', reason: '「なったら」較為假設，自然現象的必然用「と」更適合。' },
            { text: 'ので', reason: '「ので」表示原因，不是條件形。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「と」用於描述自然現象',
            analysis: '自然規律或每年必然發生的事情，用「と」最為自然。',
            comparisons: ['春になると桜が咲く：一到春天櫻花就開（自然規律）', '春になったら花見に行こう：春天來了就去賞花（計劃）'],
            commonMistakes: ['自然規律用「と」/ 個人計劃用「たら」或「ば」'],
        },
    },
    // ━━━ なら ━━━
    {
        id: 'g_n4_012', category: 'grammar', level: 'N4', tags: ['conditional', 'nara'],
        stem: '日本{にほん}へ行{い}く___、京都{きょうと}がおすすめです。',
        stemZh: '如果要去日本的話，推薦京都。',
        options: [
            { text: 'なら', reason: '正確！「なら」表示「如果說到...的話」，用於針對對方的話題給建議。' },
            { text: 'と', reason: '「行くと」表示必然結果，不適合給建議。' },
            { text: 'ば', reason: '「行けば」表示假設條件，但「なら」更適合回應對方的意圖。' },
            { text: 'たら', reason: '「行ったら」強調時間先後，此處是針對意圖給建議，用「なら」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なら」表示回應對方的話題',
            analysis: '「なら」用於聽到對方的意圖或話題後，給予建議或評論。',
            comparisons: ['行くなら京都がいい：要去的話推薦京都（針對意圖）', '行ったら京都に寄って：去了之後順便去京都（時間先後）'],
            commonMistakes: ['「なら」：回應對方意圖 / 「たら」：假設或時間先後'],
        },
    },
    // ━━━ てあげる ━━━
    {
        id: 'g_n4_013', category: 'grammar', level: 'N4', tags: ['giving-receiving', 'te-ageru'],
        stem: '友達{ともだち}に日本語{にほんご}を教{おし}え___。',
        stemZh: '我教朋友日語（為朋友做的事）。',
        options: [
            { text: 'てあげた', reason: '正確！「てあげる」表示為他人做某事（好意）。' },
            { text: 'てくれた', reason: '「てくれる」表示他人為我做某事，方向相反。' },
            { text: 'てもらった', reason: '「てもらう」表示請人為我做某事，主語不同。' },
            { text: 'てみた', reason: '「てみる」表示嘗試做某事，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てあげる」表示為他人做事',
            analysis: '「てあげる」表示說話者或主語為他人做某事，帶有好意的行為。',
            comparisons: ['教えてあげた：（我）教了（他人）', '教えてくれた：（他人）教了（我）', '教えてもらった：（我）請人教了'],
            commonMistakes: ['てあげる：我→他人 / てくれる：他人→我 / てもらう：請他人為我做'],
        },
    },
    // ━━━ てくれる ━━━
    {
        id: 'g_n4_014', category: 'grammar', level: 'N4', tags: ['giving-receiving', 'te-kureru'],
        stem: '母{はは}がお弁当{べんとう}を作{つく}っ___。',
        stemZh: '媽媽為我做了便當。',
        options: [
            { text: 'てくれた', reason: '正確！「てくれる」表示他人為我做某事（感激）。' },
            { text: 'てあげた', reason: '「てあげる」表示為他人做事，主語是「我」而非「母」。' },
            { text: 'てもらった', reason: '「てもらう」的主語是受益者（我），但此處主語是「母」。' },
            { text: 'てしまった', reason: '「てしまう」表示完成或遺憾，不是授受表現。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てくれる」表示他人為我方做事',
            analysis: '「てくれる」的主語是動作者（他人），含有對對方的感激之意。',
            comparisons: ['母が作ってくれた：媽媽為我做了（感激）', '母に作ってもらった：請媽媽為我做了（我是主語）'],
            commonMistakes: ['○ 母が作ってくれた / × 母が作ってあげた → 「あげる」是我為他人做'],
        },
    },
    // ━━━ てもらう ━━━
    {
        id: 'g_n4_015', category: 'grammar', level: 'N4', tags: ['giving-receiving', 'te-morau'],
        stem: '先生{せんせい}に作文{さくぶん}を直{なお}し___。',
        stemZh: '我請老師幫我改作文。',
        options: [
            { text: 'てもらった', reason: '正確！「てもらう」表示請他人為我做某事。' },
            { text: 'てくれた', reason: '「てくれた」主語是老師，但此處「先生に」用「に」表示動作者，主語是「我」。' },
            { text: 'てあげた', reason: '「てあげた」表示為老師做某事，語意相反。' },
            { text: 'ておいた', reason: '「ておく」表示事先準備，不是授受表現。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てもらう」表示請人為我做事',
            analysis: '「てもらう」的主語是受益者（我），動作者用「に」標示。表示受益於他人的行為。',
            comparisons: ['先生に直してもらった：請老師改了（我是主語）', '先生が直してくれた：老師幫我改了（老師是主語）'],
            commonMistakes: ['○ 先生に〜てもらう / × 先生が〜てもらう → 動作者用「に」不用「が」'],
        },
    },
    // ━━━ てしまう ━━━
    {
        id: 'g_n4_016', category: 'grammar', level: 'N4', tags: ['auxiliary', 'te-shimau'],
        stem: '大事{だいじ}な書類{しょるい}をなくし___。',
        stemZh: '（不小心）把重要文件弄丟了。',
        options: [
            { text: 'てしまった', reason: '正確！「てしまう」表示遺憾或不期望的結果。' },
            { text: 'ておいた', reason: '「ておく」表示事先做好，語意不合。' },
            { text: 'てみた', reason: '「てみる」表示嘗試，不適合遺憾的語境。' },
            { text: 'てあった', reason: '「てある」表示人為的結果狀態，語法不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てしまう」表示遺憾',
            analysis: '「てしまう」有兩個意思：(1) 完全做完 (2) 遺憾/不小心。此處表示遺憾。',
            comparisons: ['なくしてしまった：（不小心）弄丟了（遺憾）', '食べてしまった：吃完了（完了）/ 不小心吃了（遺憾）'],
            commonMistakes: ['口語中「てしまう」→「ちゃう」：なくしちゃった'],
        },
    },
    {
        id: 'g_n4_017', category: 'grammar', level: 'N4', tags: ['auxiliary', 'te-shimau'],
        stem: 'ケーキを全部{ぜんぶ}食{た}べ___。',
        stemZh: '把蛋糕全部吃完了。',
        options: [
            { text: 'てしまった', reason: '正確！「てしまう」此處表示完全做完。' },
            { text: 'ておいた', reason: '「ておく」表示事先做好或保留，不適合「全部吃完」。' },
            { text: 'てあった', reason: '「てある」表示人為狀態，主語通常是物。' },
            { text: 'てきた', reason: '「てくる」表示漸漸或做了回來，不適合完了語意。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てしまう」表示完了',
            analysis: '「てしまう」在此表示動作已經完全結束，強調「全部做完了」。',
            comparisons: ['食べてしまった：吃完了（完了）', '食べちゃった：吃完了/不小心吃了（口語）'],
            commonMistakes: ['「てしまう」的兩個含義：完了 vs 遺憾，需靠語境判斷'],
        },
    },
    // ━━━ ておく ━━━
    {
        id: 'g_n4_018', category: 'grammar', level: 'N4', tags: ['auxiliary', 'te-oku'],
        stem: '旅行{りょこう}の前{まえ}にホテルを予約{よやく}し___。',
        stemZh: '旅行之前先預訂好飯店。',
        options: [
            { text: 'ておいた', reason: '正確！「ておく」表示事先做好準備。' },
            { text: 'てしまった', reason: '「てしまう」表示完了或遺憾，不是準備的語意。' },
            { text: 'てみた', reason: '「てみる」表示嘗試，此處是明確的準備行為。' },
            { text: 'てあった', reason: '「てある」表示已完成的狀態，語法上主語應為物。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ておく」表示事先準備',
            analysis: '「ておく」表示為了將來某事而事先做好準備。口語常說「とく」。',
            comparisons: ['予約しておいた：事先預訂好了（準備）', '予約してあった：已經預訂好了（狀態）'],
            commonMistakes: ['口語中「ておく」→「とく」：予約しとく'],
        },
    },
    // ━━━ てみる ━━━
    {
        id: 'g_n4_019', category: 'grammar', level: 'N4', tags: ['auxiliary', 'te-miru'],
        stem: '新{あたら}しいレストランに行{い}っ___。',
        stemZh: '試著去新的餐廳看看。',
        options: [
            { text: 'てみた', reason: '正確！「てみる」表示嘗試做某事。' },
            { text: 'ておいた', reason: '「ておく」表示事先準備，不是嘗試的語意。' },
            { text: 'てしまった', reason: '「てしまう」表示完了或遺憾，不是嘗試。' },
            { text: 'てきた', reason: '「てくる」表示做了回來，不是嘗試。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てみる」表示嘗試',
            analysis: '「てみる」表示帶著好奇心或實驗的心態去嘗試做某事。',
            comparisons: ['行ってみた：試著去了（嘗試）', '行ってきた：去了回來了'],
            commonMistakes: ['「てみる」強調嘗試新事物，不用於習慣性動作'],
        },
    },
    // ━━━ 出す ━━━
    {
        id: 'g_n4_020', category: 'grammar', level: 'N4', tags: ['auxiliary', 'dasu'],
        stem: '急{きゅう}に雨{あめ}が降{ふ}り___。',
        stemZh: '突然下起雨來。',
        options: [
            { text: '出{だ}した', reason: '正確！「出す」接在動詞連用形後，表示突然開始。' },
            { text: '始{はじ}めた', reason: '「始める」也表示開始，但不強調突然性。' },
            { text: '続{つづ}けた', reason: '「続ける」表示繼續做，語意不合。' },
            { text: '終{お}わった', reason: '「終わる」表示結束，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「出す」表示突然開始',
            analysis: '「V連用形＋出す」表示動作突然開始，強調意外性。',
            comparisons: ['降り出した：突然下起來（突然）', '降り始めた：開始下了（開始）'],
            commonMistakes: ['「出す」：突然開始（意外）/ 「始める」：有意識地開始'],
        },
    },
    // ━━━ 続ける ━━━
    {
        id: 'g_n4_021', category: 'grammar', level: 'N4', tags: ['auxiliary', 'tsuzukeru'],
        stem: '毎日{まいにち}三{さん}時間{じかん}日本語{にほんご}を勉強{べんきょう}し___。',
        stemZh: '每天持續學三個小時的日語。',
        options: [
            { text: '続{つづ}けている', reason: '正確！「続ける」表示持續做某事。' },
            { text: '出{だ}している', reason: '「出す」表示突然開始，不表示持續。' },
            { text: '始{はじ}めている', reason: '「始める」表示剛開始做，不強調持續。' },
            { text: '終{お}わっている', reason: '「終わる」表示結束，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「続ける」表示持續',
            analysis: '「V連用形＋続ける」表示持續不斷地做某事。',
            comparisons: ['勉強し続ける：持續學習', '勉強し始める：開始學習'],
            commonMistakes: ['○ 勉強し続ける / × 勉強を続ける → 後者也可以但意思略有不同'],
        },
    },
    // ━━━ 始める ━━━
    {
        id: 'g_n4_022', category: 'grammar', level: 'N4', tags: ['auxiliary', 'hajimeru'],
        stem: '子供{こども}たちが歌{うた}を歌{うた}い___。',
        stemZh: '孩子們開始唱歌了。',
        options: [
            { text: '始{はじ}めた', reason: '正確！「始める」表示開始做某事。' },
            { text: '出{だ}した', reason: '「出す」強調突然開始，此處是有意識的開始。' },
            { text: '続{つづ}けた', reason: '「続ける」表示繼續做，不是開始。' },
            { text: '終{お}わった', reason: '「終わる」表示結束，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「始める」表示有意識地開始',
            analysis: '「V連用形＋始める」表示有意識、有計劃地開始做某事。',
            comparisons: ['歌い始めた：開始唱了（有意識）', '歌い出した：突然唱起來了（突然）'],
            commonMistakes: ['「始める」：有意識開始 / 「出す」：突然開始（意外）'],
        },
    },
    // ━━━ そうだ（様態） ━━━
    {
        id: 'g_n4_023', category: 'grammar', level: 'N4', tags: ['conjecture', 'sou-da-looks'],
        stem: 'あの料理{りょうり}はおいし___ですね。',
        stemZh: '那道菜看起來很好吃呢。',
        options: [
            { text: 'そう', reason: '正確！い形容詞去「い」加「そう」表示看起來的樣子。' },
            { text: 'らしい', reason: '「おいしいらしい」表示聽說，不是外觀判斷。' },
            { text: 'みたい', reason: '「おいしいみたい」表示像是，不接在去掉「い」後。' },
            { text: 'よう', reason: '「おいしいようだ」表示似乎，接法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「そうだ（様態）」表示外觀推測',
            analysis: 'い形容詞去掉「い」加「そうだ」：おいしい→おいしそうだ，表示看起來的樣子。',
            comparisons: ['おいしそう：看起來好吃（自己觀察）', 'おいしいそうだ：聽說好吃（傳聞）'],
            commonMistakes: ['○ おいしそう / × おいしいそう → 様態そう要去掉「い」'],
        },
    },
    {
        id: 'g_n4_024', category: 'grammar', level: 'N4', tags: ['conjecture', 'sou-da-looks'],
        stem: '雨{あめ}が降{ふ}り___だ。',
        stemZh: '看起來快下雨了。',
        options: [
            { text: 'そう', reason: '正確！動詞連用形加「そうだ」表示看起來快要...。' },
            { text: 'らしい', reason: '「降るらしい」表示聽說，不是外觀判斷。' },
            { text: 'みたい', reason: '「降るみたい」表示好像，接法不同。' },
            { text: 'ようだ', reason: '「降るようだ」表示似乎，接法不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '動詞的「そうだ（様態）」',
            analysis: '動詞連用形（ます形去ます）加「そうだ」：降り→降りそうだ，表示看起來快要...。',
            comparisons: ['降りそうだ：看起來快下雨（自己觀察）', '降るそうだ：聽說要下雨（傳聞）'],
            commonMistakes: ['動詞様態：降りそう（連用形）/ 動詞傳聞：降るそう（辭書形）'],
        },
    },
    // ━━━ そうだ（伝聞） ━━━
    {
        id: 'g_n4_025', category: 'grammar', level: 'N4', tags: ['conjecture', 'sou-da-hearsay'],
        stem: '天気{てんき}予報{よほう}によると、明日{あした}は雨{あめ}が降{ふ}る___です。',
        stemZh: '根據天氣預報，聽說明天會下雨。',
        options: [
            { text: 'そう', reason: '正確！辭書形加「そうだ」表示傳聞（聽說...）。' },
            { text: 'らしい', reason: '「降るらしい」也表示傳聞，但此處有「によると」，通常搭配「そうだ」。' },
            { text: 'みたい', reason: '「みたい」較為口語，不常與「によると」搭配。' },
            { text: 'よう', reason: '「ようだ」表示推測，不是傳聞。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「そうだ（伝聞）」表示聽說',
            analysis: '「普通形＋そうだ」表示從別處聽來的消息。常搭配「〜によると」。',
            comparisons: ['降るそうだ：聽說要下雨（傳聞）', '降りそうだ：看起來要下雨（様態）'],
            commonMistakes: ['傳聞：辭書形＋そうだ / 様態：連用形＋そうだ → 接續不同意思不同'],
        },
    },
    // ━━━ ようだ ━━━
    {
        id: 'g_n4_026', category: 'grammar', level: 'N4', tags: ['conjecture', 'you-da'],
        stem: '彼{かれ}は何{なに}か心配{しんぱい}している___だ。',
        stemZh: '他似乎在擔心什麼。',
        options: [
            { text: 'よう', reason: '正確！「ようだ」接在普通形後面，表示根據觀察的推測。' },
            { text: 'そう', reason: '「しているそうだ」是傳聞（聽說），不是觀察推測。' },
            { text: 'らしい', reason: '「らしい」接在普通形後面，但不需要加「だ」。' },
            { text: 'みたい', reason: '「みたい」接在普通形後面，較口語，但不加「だ」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようだ」表示根據觀察的推測',
            analysis: '「ようだ」表示說話者根據自己觀察到的線索進行推測，比較書面語。',
            comparisons: ['心配しているようだ：似乎在擔心（觀察推測）', '心配しているらしい：好像在擔心（間接資訊）'],
            commonMistakes: ['「ようだ」：自己觀察推測 / 「らしい」：從別處得知'],
        },
    },
    // ━━━ らしい ━━━
    {
        id: 'g_n4_027', category: 'grammar', level: 'N4', tags: ['conjecture', 'rashii'],
        stem: '田中{たなか}さんは来月{らいげつ}結婚{けっこん}する___。',
        stemZh: '聽說田中先生下個月要結婚。',
        options: [
            { text: 'らしい', reason: '正確！「らしい」接在普通形後面，表示從別處聽來的消息或推測。' },
            { text: 'そうだ', reason: '「するそうだ」也表示傳聞，但「らしい」更帶有不確定感。' },
            { text: 'ようだ', reason: '「するようだ」表示自己觀察的推測，不是傳聞。' },
            { text: 'みたいだ', reason: '「するみたいだ」也可以，但較口語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「らしい」表示傳聞或推測',
            analysis: '「らしい」接在普通形後面，表示從別人那裡聽來的消息，或根據間接資訊的推測。',
            comparisons: ['結婚するらしい：聽說/好像要結婚', '結婚するそうだ：聽說要結婚（更確定）'],
            commonMistakes: ['「らしい」帶有不確定感 / 「そうだ（伝聞）」較為客觀轉述'],
        },
    },
    // ━━━ みたいだ ━━━
    {
        id: 'g_n4_028', category: 'grammar', level: 'N4', tags: ['conjecture', 'mitai-da'],
        stem: '彼女{かのじょ}は怒{おこ}っている___だ。',
        stemZh: '她好像在生氣。',
        options: [
            { text: 'みたい', reason: '正確！「みたいだ」是口語版的「ようだ」，表示推測。' },
            { text: 'よう', reason: '「ようだ」意思相同但較書面，此處用口語形式。' },
            { text: 'そう', reason: '「怒っているそうだ」是傳聞，不是觀察推測。' },
            { text: 'らしい', reason: '「怒っているらしい」可以，但不需要加「だ」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「みたいだ」口語版推測',
            analysis: '「みたいだ」是「ようだ」的口語版，意思相同但較為隨意。',
            comparisons: ['怒っているみたいだ：好像在生氣（口語）', '怒っているようだ：似乎在生氣（書面語）'],
            commonMistakes: ['「みたいだ」口語 / 「ようだ」書面語 → 意思相同'],
        },
    },
    // ━━━ かもしれない ━━━
    {
        id: 'g_n4_029', category: 'grammar', level: 'N4', tags: ['conjecture', 'kamoshirenai'],
        stem: '明日{あした}は雪{ゆき}が降{ふ}る___。',
        stemZh: '明天也許會下雪。',
        options: [
            { text: 'かもしれない', reason: '正確！「かもしれない」表示可能性（也許、說不定）。' },
            { text: 'はずだ', reason: '「はずだ」表示應該，確信度更高。' },
            { text: 'に違{ちが}いない', reason: '「に違いない」表示一定是，確信度最高。' },
            { text: 'わけだ', reason: '「わけだ」表示理所當然，不表示可能性。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かもしれない」表示可能性',
            analysis: '「かもしれない」表示50%左右的可能性，語氣較為謹慎。',
            comparisons: ['降るかもしれない：也許會下（50%）', '降るはずだ：應該會下（80%）', '降るに違いない：一定會下（95%）'],
            commonMistakes: ['可能性排序：かもしれない < はずだ < に違いない'],
        },
    },
    // ━━━ はずだ ━━━
    {
        id: 'g_n4_030', category: 'grammar', level: 'N4', tags: ['conjecture', 'hazu-da'],
        stem: '彼{かれ}はもう家{いえ}に着{つ}いている___だ。',
        stemZh: '他應該已經到家了。',
        options: [
            { text: 'はず', reason: '正確！「はずだ」表示根據道理應該如此。' },
            { text: 'わけ', reason: '「わけだ」表示「難怪」，用於解釋已知的結果。' },
            { text: 'よう', reason: '「ようだ」表示推測，不是邏輯推理。' },
            { text: 'みたい', reason: '「みたいだ」表示好像，確信度較「はず」低。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「はずだ」表示邏輯推理',
            analysis: '「はずだ」表示根據已知事實或道理，推論出應該如此的結果。',
            comparisons: ['着いているはずだ：應該到了（邏輯推理）', '着いているようだ：似乎到了（觀察推測）'],
            commonMistakes: ['「はずだ」：邏輯上應該如此 / 「ようだ」：感覺上似乎如此'],
        },
    },
    // ━━━ はずがない ━━━
    {
        id: 'g_n4_031', category: 'grammar', level: 'N4', tags: ['conjecture', 'hazu-ga-nai'],
        stem: 'あんなに優{やさ}しい人{ひと}がそんなひどいことをする___。',
        stemZh: '那麼溫柔的人不可能做那種過分的事。',
        options: [
            { text: 'はずがない', reason: '正確！「はずがない」表示邏輯上不可能。' },
            { text: 'わけがない', reason: '「わけがない」也表示不可能，但更口語更強調不合理。' },
            { text: 'かもしれない', reason: '「かもしれない」表示也許，與「不可能」語意相反。' },
            { text: 'に違{ちが}いない', reason: '「に違いない」表示一定是，與「不可能」語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「はずがない」表示不可能',
            analysis: '「はずがない」表示根據道理邏輯判斷，某事不可能發生。',
            comparisons: ['するはずがない：不可能做（邏輯上）', 'するわけがない：沒理由做（強調不合理）'],
            commonMistakes: ['「はずがない」：邏輯否定 / 「わけがない」：強調不合理'],
        },
    },
    // ━━━ に違いない ━━━
    {
        id: 'g_n4_032', category: 'grammar', level: 'N4', tags: ['conjecture', 'ni-chigainai'],
        stem: 'こんなに上手{じょうず}に描{か}けるのは、プロ___。',
        stemZh: '能畫得這麼好，一定是專業的。',
        options: [
            { text: 'に違{ちが}いない', reason: '正確！「に違いない」表示說話者的強烈確信。' },
            { text: 'かもしれない', reason: '「かもしれない」確信度太低，不符合語境。' },
            { text: 'はずだ', reason: '「はずだ」也表示推測，但「に違いない」更強調確信。' },
            { text: 'らしい', reason: '「らしい」表示傳聞或推測，確信度不夠高。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に違いない」表示強烈確信',
            analysis: '「に違いない」是確信度最高的推測表現，意為「一定是」「肯定是」。',
            comparisons: ['プロに違いない：一定是專業的（95%確信）', 'プロかもしれない：也許是專業的（50%）'],
            commonMistakes: ['確信度：かもしれない（低）< らしい < はずだ < に違いない（高）'],
        },
    },
    // ━━━ ながら ━━━
    {
        id: 'g_n4_033', category: 'grammar', level: 'N4', tags: ['conjunction', 'nagara'],
        stem: '音楽{おんがく}を聞{き}き___、勉強{べんきょう}しています。',
        stemZh: '一邊聽音樂一邊讀書。',
        options: [
            { text: 'ながら', reason: '正確！「ながら」表示同時進行兩個動作。' },
            { text: 'つつ', reason: '「つつ」也表示同時，但較書面語且多為N2。' },
            { text: 'ている', reason: '「聞いている」表示正在聽，但不表示同時做另一件事。' },
            { text: 'たり', reason: '「聞いたり」表示列舉，不是同時進行。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ながら」表示同時進行兩個動作',
            analysis: '「V連用形＋ながら」表示一邊做A一邊做B，B是主要動作。',
            comparisons: ['聞きながら勉強する：一邊聽一邊學（學習是主動作）', '勉強しながら聞く：一邊學一邊聽（聽是主動作）'],
            commonMistakes: ['「ながら」後面的動作是主要動作'],
        },
    },
    // ━━━ たばかり ━━━
    {
        id: 'g_n4_034', category: 'grammar', level: 'N4', tags: ['time', 'ta-bakari'],
        stem: '日本{にほん}に来{き}た___で、まだ日本語{にほんご}があまり話{はな}せません。',
        stemZh: '剛來日本，日語還不太會說。',
        options: [
            { text: 'ばかり', reason: '正確！「たばかり」表示某動作剛剛完成不久。' },
            { text: 'ところ', reason: '「たところ」也表示剛做完，但「ばかり」更強調時間很短。' },
            { text: 'あと', reason: '「たあと」表示之後，不強調「剛剛」。' },
            { text: 'とき', reason: '「たとき」表示做了的時候，不表示「剛剛」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たばかり」表示剛剛做完',
            analysis: '「た形＋ばかり」表示某動作剛剛完成，強調時間不久。',
            comparisons: ['来たばかり：剛來（時間短）', '来たところ：剛剛來（更強調瞬間）'],
            commonMistakes: ['「たばかり」可用於較長的時間段（剛來一個月）/ 「たところ」更強調剛剛這一刻'],
        },
    },
    // ━━━ ていく ━━━
    {
        id: 'g_n4_035', category: 'grammar', level: 'N4', tags: ['auxiliary', 'te-iku'],
        stem: 'これから日本語{にほんご}をもっと勉強{べんきょう}し___つもりです。',
        stemZh: '今後打算更加學習日語（繼續下去）。',
        options: [
            { text: 'ていく', reason: '正確！「ていく」表示從現在往未來持續發展。' },
            { text: 'てくる', reason: '「てくる」表示從過去到現在的變化，方向相反。' },
            { text: 'ておく', reason: '「ておく」表示事先準備，不是持續發展。' },
            { text: 'てみる', reason: '「てみる」表示嘗試，不是持續發展。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ていく」表示從現在往未來的發展',
            analysis: '「ていく」表示某種變化或動作從現在起往未來持續發展。',
            comparisons: ['勉強していく：繼續學下去（現在→未來）', '勉強してきた：一直學到現在（過去→現在）'],
            commonMistakes: ['「ていく」：現在→未來 / 「てくる」：過去→現在'],
        },
    },
    // ━━━ てくる ━━━
    {
        id: 'g_n4_036', category: 'grammar', level: 'N4', tags: ['auxiliary', 'te-kuru'],
        stem: '最近{さいきん}、日本語{にほんご}が少{すこ}しずつ分{わ}かっ___。',
        stemZh: '最近漸漸開始懂日語了。',
        options: [
            { text: 'てきた', reason: '正確！「てくる」表示變化從過去持續到現在。' },
            { text: 'ていった', reason: '「ていく」表示往未來發展，此處是到現在為止的變化。' },
            { text: 'ておいた', reason: '「ておく」表示事先準備，語意不合。' },
            { text: 'てしまった', reason: '「てしまう」表示完了或遺憾，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てくる」表示從過去到現在的漸變',
            analysis: '「てくる」表示某種狀態或變化從過去某時開始，持續到現在。',
            comparisons: ['分かってきた：漸漸懂了（過去→現在）', '分かっていく：會漸漸懂的（現在→未來）'],
            commonMistakes: ['「てきた」：過去→現在的變化 / 「ていく」：現在→未來的變化'],
        },
    },
    // ━━━ まま ━━━
    {
        id: 'g_n4_037', category: 'grammar', level: 'N4', tags: ['state', 'mama'],
        stem: '電気{でんき}をつけた___寝{ね}てしまった。',
        stemZh: '開著燈就睡著了。',
        options: [
            { text: 'まま', reason: '正確！「まま」表示保持某狀態不變。' },
            { text: 'ながら', reason: '「ながら」表示同時進行，但開燈不是動作。' },
            { text: 'うちに', reason: '「うちに」表示趁著某段時間，語意不合。' },
            { text: 'ところ', reason: '「ところ」表示正當某時，語法不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「まま」表示保持某狀態',
            analysis: '「た形＋まま」表示某狀態持續不變地做另一件事。',
            comparisons: ['つけたまま寝た：開著燈睡了（燈一直開著）', 'つけながら寝た：邊開邊睡（語法不自然）'],
            commonMistakes: ['「まま」：保持狀態 / 「ながら」：同時進行兩個動作'],
        },
    },
    // ━━━ ところ ━━━
    {
        id: 'g_n4_038', category: 'grammar', level: 'N4', tags: ['time', 'tokoro'],
        stem: '今{いま}、出{で}かける___です。',
        stemZh: '現在正要出門。',
        options: [
            { text: 'ところ', reason: '正確！「辭書形＋ところ」表示正要做某事。' },
            { text: 'ばかり', reason: '「たばかり」表示剛做完，不是正要做。' },
            { text: 'はず', reason: '「はず」表示應該，不表示正要做。' },
            { text: 'つもり', reason: '「つもり」表示打算，不表示正在那個時刻。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ところ」表示動作的時間點',
            analysis: '「V辭書形＋ところ」＝正要做、「Vている＋ところ」＝正在做、「Vた＋ところ」＝剛做完。',
            comparisons: ['出かけるところ：正要出門', '出かけているところ：正在出門中', '出かけたところ：剛出門'],
            commonMistakes: ['辭書形＋ところ：正要 / ている＋ところ：正在 / た＋ところ：剛做完'],
        },
    },
    // ━━━ ために ━━━
    {
        id: 'g_n4_039', category: 'grammar', level: 'N4', tags: ['purpose', 'tame-ni'],
        stem: '日本{にほん}で働{はたら}く___、日本語{にほんご}を勉強{べんきょう}しています。',
        stemZh: '為了在日本工作，正在學日語。',
        options: [
            { text: 'ために', reason: '正確！「ために」表示目的（為了...）。' },
            { text: 'ように', reason: '「ように」也表目的，但接在可能形或否定形前。' },
            { text: 'のに', reason: '「のに」可表目的或轉折，但此處語境適合「ために」。' },
            { text: 'から', reason: '「から」表示原因，不是目的。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ために」表示目的',
            analysis: '「V辭書形＋ために」表示為了某個目的而做某事。主語前後一致。',
            comparisons: ['働くために勉強する：為了工作而學（意志動詞）', '働けるように勉強する：為了能工作而學（可能形）'],
            commonMistakes: ['「ために」：接意志動詞 / 「ように」：接非意志動詞或可能形'],
        },
    },
    // ━━━ のに（逆接） ━━━
    {
        id: 'g_n4_040', category: 'grammar', level: 'N4', tags: ['contrast', 'noni'],
        stem: 'たくさん勉強{べんきょう}した___、試験{しけん}に落{お}ちてしまった。',
        stemZh: '明明學了很多，卻考試沒通過。',
        options: [
            { text: 'のに', reason: '正確！「のに」表示逆接（明明...卻...），帶有遺憾不滿。' },
            { text: 'けど', reason: '「けど」也表示轉折，但「のに」更強調遺憾語氣。' },
            { text: 'から', reason: '「から」表示原因，不是轉折。' },
            { text: 'ので', reason: '「ので」表示原因，不是轉折。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「のに」表示逆接（帶遺憾）',
            analysis: '「のに」表示前後矛盾，帶有說話者的不滿、遺憾或驚訝。',
            comparisons: ['勉強したのに落ちた：明明學了卻沒考上（遺憾）', '勉強したけど落ちた：學了但沒考上（客觀陳述）'],
            commonMistakes: ['「のに」：帶感情色彩的逆接 / 「けど」：客觀的轉折'],
        },
    },
    // ━━━ ようにする ━━━
    {
        id: 'g_n4_041', category: 'grammar', level: 'N4', tags: ['effort', 'you-ni-suru'],
        stem: '毎日{まいにち}野菜{やさい}を食{た}べる___しています。',
        stemZh: '我在努力做到每天吃蔬菜。',
        options: [
            { text: 'ように', reason: '正確！「ようにする」表示努力做到某事。' },
            { text: 'ことに', reason: '「ことにする」表示決定做某事，不是努力。' },
            { text: 'ために', reason: '「ために」表示目的，不接「している」。' },
            { text: 'つもりに', reason: '「つもりにする」不是正確的表達。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようにする」表示努力做到',
            analysis: '「ようにする」表示為了養成某種習慣而持續努力。',
            comparisons: ['食べるようにしている：努力做到吃（持續努力）', '食べることにしている：決定了要吃（決定）'],
            commonMistakes: ['「ようにする」：努力 / 「ことにする」：決定'],
        },
    },
    // ━━━ ようになる ━━━
    {
        id: 'g_n4_042', category: 'grammar', level: 'N4', tags: ['change', 'you-ni-naru'],
        stem: '半年{はんとし}勉強{べんきょう}して、日本語{にほんご}が話{はな}せる___なりました。',
        stemZh: '學了半年之後，變得能說日語了。',
        options: [
            { text: 'ように', reason: '正確！「ようになる」表示能力或狀態的變化。' },
            { text: 'ことに', reason: '「ことになる」表示被決定，不是能力變化。' },
            { text: 'ために', reason: '「ためになる」表示有益，語意不同。' },
            { text: 'はずに', reason: '「はずになる」不是正確的表達。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようになる」表示變化',
            analysis: '「V辭書形/可能形＋ようになる」表示從不能到能、從不做到做的變化。',
            comparisons: ['話せるようになった：變得能說了（能力變化）', '話すようになった：變得會說了（習慣變化）'],
            commonMistakes: ['「ようになる」：自然變化 / 「ようにする」：有意識的努力'],
        },
    },
    // ━━━ ことにする ━━━
    {
        id: 'g_n4_043', category: 'grammar', level: 'N4', tags: ['decision', 'koto-ni-suru'],
        stem: '来年{らいねん}から毎朝{まいあさ}ジョギングする___しました。',
        stemZh: '決定從明年開始每天早上慢跑。',
        options: [
            { text: 'ことに', reason: '正確！「ことにする」表示自己做出決定。' },
            { text: 'ように', reason: '「ようにする」表示努力做到，不是決定。' },
            { text: 'はずに', reason: '「はずにする」不是正確的表達。' },
            { text: 'つもりに', reason: '「つもりにする」不是正確的表達。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことにする」表示自己決定',
            analysis: '「ことにする」表示說話者自主做出的決定。',
            comparisons: ['ジョギングすることにした：（我）決定慢跑', 'ジョギングすることになった：（被決定）要慢跑'],
            commonMistakes: ['「ことにする」：自主決定 / 「ことになる」：外部決定或自然結果'],
        },
    },
    // ━━━ ことになる ━━━
    {
        id: 'g_n4_044', category: 'grammar', level: 'N4', tags: ['decision', 'koto-ni-naru'],
        stem: '来月{らいげつ}から大阪{おおさか}で働{はたら}く___なりました。',
        stemZh: '從下個月起（被公司安排）要在大阪工作了。',
        options: [
            { text: 'ことに', reason: '正確！「ことになる」表示外部決定或規定。' },
            { text: 'ように', reason: '「ようになる」表示變化，不是決定。' },
            { text: 'はずに', reason: '「はずになる」不是正確的表達。' },
            { text: 'わけに', reason: '「わけになる」不是正確的表達。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことになる」表示外部決定',
            analysis: '「ことになる」表示不是自己做的決定，而是公司、規定等外部因素決定的。',
            comparisons: ['働くことになった：（被安排）要工作了', '働くことにした：（自己）決定要工作'],
            commonMistakes: ['「ことになる」：被動決定 / 「ことにする」：主動決定'],
        },
    },
    // ━━━ ばかり ━━━
    {
        id: 'g_n4_045', category: 'grammar', level: 'N4', tags: ['limitation', 'bakari'],
        stem: '弟{おとうと}はゲーム___している。',
        stemZh: '弟弟淨是在打遊戲。',
        options: [
            { text: 'ばかり', reason: '正確！「ばかり」表示「只」「淨是」，帶有不滿語氣。' },
            { text: 'だけ', reason: '「だけ」表示「只有」，但較客觀，不帶不滿。' },
            { text: 'しか', reason: '「しか」後面要接否定：ゲームしかしない。' },
            { text: 'ほど', reason: '「ほど」表示程度，語法不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ばかり」表示「淨是」「光是」',
            analysis: '「ばかり」接在動詞或名詞後面，表示只做某事，通常帶有不滿或批評語氣。',
            comparisons: ['ゲームばかりしている：淨是打遊戲（不滿）', 'ゲームだけしている：只打遊戲（客觀）'],
            commonMistakes: ['「ばかり」：帶不滿情緒 / 「だけ」：客觀限定'],
        },
    },
    // ━━━ 中（ちゅう/じゅう） ━━━
    {
        id: 'g_n4_046', category: 'grammar', level: 'N4', tags: ['time', 'chuu'],
        stem: '今{いま}、会議{かいぎ}___なので、後{あと}で電話{でんわ}します。',
        stemZh: '現在正在開會，之後再打電話。',
        options: [
            { text: '中{ちゅう}', reason: '正確！「～中」表示正在進行某事。' },
            { text: 'の間{あいだ}', reason: '「の間」表示期間，但「会議中」更自然簡潔。' },
            { text: 'のとき', reason: '「のとき」表示某時候，不如「中」直接。' },
            { text: 'の後{あと}', reason: '「の後」表示之後，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「～中（ちゅう）」表示正在進行',
            analysis: '「名詞＋中（ちゅう）」表示某事正在進行中。「じゅう」則表示整個範圍。',
            comparisons: ['会議中：正在開會（ちゅう）', '一日中：整天（いちにちじゅう）'],
            commonMistakes: ['「ちゅう」：進行中 / 「じゅう」：整個範圍（一日中、世界中）'],
        },
    },
    // ━━━ という ━━━
    {
        id: 'g_n4_047', category: 'grammar', level: 'N4', tags: ['quotation', 'to-iu'],
        stem: '「富士山{ふじさん}」___山{やま}を知{し}っていますか。',
        stemZh: '你知道叫做「富士山」的山嗎？',
        options: [
            { text: 'という', reason: '正確！「という」表示「叫做...的」。' },
            { text: 'との', reason: '「との」表示引用內容，不用於命名。' },
            { text: 'とか', reason: '「とか」表示列舉，不用於命名。' },
            { text: 'ての', reason: '「ての」不是正確的助詞組合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「という」表示名稱',
            analysis: '「Aという B」表示「叫做A的B」，用於介紹名稱或說明概念。',
            comparisons: ['富士山という山：叫做富士山的山', '行くということ：去這件事'],
            commonMistakes: ['「という」可縮約為「って」（口語）：富士山って山'],
        },
    },
    // ━━━ として ━━━
    {
        id: 'g_n4_048', category: 'grammar', level: 'N4', tags: ['role', 'to-shite'],
        stem: '彼{かれ}はボランティア___病院{びょういん}で働{はたら}いている。',
        stemZh: '他以志工的身份在醫院工作。',
        options: [
            { text: 'として', reason: '正確！「として」表示以某種身份或角色。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，語意不同。' },
            { text: 'について', reason: '「について」表示「關於」，語意不同。' },
            { text: 'によって', reason: '「によって」表示根據或原因，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「として」表示身份角色',
            analysis: '「N＋として」表示以某種身份、立場、角色來做某事。',
            comparisons: ['ボランティアとして：以志工身份', '先生として：以老師身份'],
            commonMistakes: ['「として」：身份 / 「にとって」：對...而言 / 「について」：關於'],
        },
    },
    // ━━━ にとって ━━━
    {
        id: 'g_n4_049', category: 'grammar', level: 'N4', tags: ['perspective', 'ni-totte'],
        stem: '外国人{がいこくじん}___、敬語{けいご}は一番{いちばん}難{むずか}しいです。',
        stemZh: '對外國人來說，敬語是最難的。',
        options: [
            { text: 'にとって', reason: '正確！「にとって」表示「對...而言」。' },
            { text: 'として', reason: '「として」表示身份，不是觀點。' },
            { text: 'について', reason: '「について」表示「關於」，語意不同。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對...」（對象），此處不適合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にとって」表示「對...而言」',
            analysis: '「Nにとって」表示從某人的立場或觀點來看。',
            comparisons: ['外国人にとって：對外國人而言', '外国人として：以外國人身份'],
            commonMistakes: ['「にとって」：觀點立場 / 「として」：身份角色'],
        },
    },
    // ━━━ について ━━━
    {
        id: 'g_n4_050', category: 'grammar', level: 'N4', tags: ['topic', 'ni-tsuite'],
        stem: '日本{にほん}の文化{ぶんか}___レポートを書{か}きました。',
        stemZh: '寫了一份關於日本文化的報告。',
        options: [
            { text: 'について', reason: '正確！「について」表示「關於...」。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，語意不同。' },
            { text: 'に対{たい}して', reason: '「に対して」表示針對某對象，不是「關於」。' },
            { text: 'として', reason: '「として」表示身份，不是「關於」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「について」表示「關於」',
            analysis: '「Nについて」表示關於某個話題或主題，常搭配報告、研究、討論等。',
            comparisons: ['文化について書く：寫關於文化（話題）', '文化に対して意見を言う：對文化表達意見（對象）'],
            commonMistakes: ['「について」：關於（話題）/ 「に対して」：對（對象）'],
        },
    },
    // ━━━ によると ━━━
    {
        id: 'g_n4_051', category: 'grammar', level: 'N4', tags: ['source', 'ni-yoru-to'],
        stem: 'ニュース___、来週{らいしゅう}から電車{でんしゃ}の運賃{うんちん}が上{あ}がるそうだ。',
        stemZh: '根據新聞，聽說下週起電車票價會漲。',
        options: [
            { text: 'によると', reason: '正確！「によると」表示資訊來源（根據...）。' },
            { text: 'について', reason: '「について」表示「關於」，不是資訊來源。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，語意不同。' },
            { text: 'に対{たい}して', reason: '「に対して」表示「對...」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「によると」表示資訊來源',
            analysis: '「Nによると」表示消息來源，常搭配「そうだ」「らしい」「ということだ」。',
            comparisons: ['ニュースによると：根據新聞', '天気予報によると：根據天氣預報'],
            commonMistakes: ['「によると」後面通常接傳聞表現：そうだ、らしい等'],
        },
    },
    // ━━━ おかげで ━━━
    {
        id: 'g_n4_052', category: 'grammar', level: 'N4', tags: ['cause', 'okage-de'],
        stem: '先生{せんせい}の___、試験{しけん}に合格{ごうかく}できました。',
        stemZh: '多虧了老師，考試及格了。',
        options: [
            { text: 'おかげで', reason: '正確！「おかげで」表示正面原因（多虧了...）。' },
            { text: 'せいで', reason: '「せいで」表示負面原因（都怪...），語意相反。' },
            { text: 'ために', reason: '「ために」表示目的或原因，但不帶感謝語氣。' },
            { text: 'によって', reason: '「によって」表示根據或原因，太客觀。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「おかげで」表示正面原因',
            analysis: '「おかげで」表示由於某個正面原因而得到好結果，帶有感謝之意。',
            comparisons: ['先生のおかげで合格した：多虧老師才及格（感謝）', '先生のせいで落ちた：都怪老師才落榜（責備）'],
            commonMistakes: ['「おかげで」：正面原因（感謝）/ 「せいで」：負面原因（責備）'],
        },
    },
    // ━━━ せいで ━━━
    {
        id: 'g_n4_053', category: 'grammar', level: 'N4', tags: ['cause', 'sei-de'],
        stem: '雨{あめ}の___、試合{しあい}が中止{ちゅうし}になった。',
        stemZh: '因為下雨，比賽取消了。',
        options: [
            { text: 'せいで', reason: '正確！「せいで」表示負面原因（都怪...）。' },
            { text: 'おかげで', reason: '「おかげで」表示正面原因，但比賽取消是壞事。' },
            { text: 'ために', reason: '「ために」表示目的或客觀原因，不帶負面語氣。' },
            { text: 'ので', reason: '「雨ので」語法錯誤，名詞後應為「なので」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「せいで」表示負面原因',
            analysis: '「せいで」表示由於某個原因導致不好的結果，帶有責備語氣。',
            comparisons: ['雨のせいで中止になった：都怪下雨才取消', '雨のおかげで涼しい：多虧下雨才涼快'],
            commonMistakes: ['「せいで」：壞結果（責備）/ 「おかげで」：好結果（感謝）'],
        },
    },
    // ━━━ し ━━━
    {
        id: 'g_n4_054', category: 'grammar', level: 'N4', tags: ['conjunction', 'shi'],
        stem: 'この店{みせ}は安{やす}い___、おいしいし、よく行{い}きます。',
        stemZh: '這家店又便宜又好吃，所以常去。',
        options: [
            { text: 'し', reason: '正確！「し」表示列舉多個理由或特點。' },
            { text: 'から', reason: '「から」表示單一原因，不能列舉多個。' },
            { text: 'けど', reason: '「けど」表示轉折，不是列舉。' },
            { text: 'のに', reason: '「のに」表示逆接，不是列舉。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「し」表示列舉理由',
            analysis: '「し」用於列舉多個理由或特點，常用「A し、B し」的形式。',
            comparisons: ['安いし、おいしい：既便宜又好吃（列舉）', '安いから行く：因為便宜所以去（單一原因）'],
            commonMistakes: ['「し」可列舉多個理由，「から」「ので」通常只接一個原因'],
        },
    },
    // ━━━ でございます ━━━
    {
        id: 'g_n4_055', category: 'grammar', level: 'N4', tags: ['keigo', 'de-gozaimasu'],
        stem: 'こちらは会議室{かいぎしつ}___。',
        stemZh: '這裡是會議室（鄭重語）。',
        options: [
            { text: 'でございます', reason: '正確！「でございます」是「です」的鄭重語。' },
            { text: 'です', reason: '「です」是普通丁寧語，不是鄭重語。' },
            { text: 'であります', reason: '「であります」較為軍用語，日常不常用。' },
            { text: 'になります', reason: '「になります」常被誤用為鄭重語，其實表示變化。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「でございます」鄭重語',
            analysis: '「でございます」是「です」的最鄭重表現，用於接待客人、商務場合等。',
            comparisons: ['会議室です：是會議室（丁寧）', '会議室でございます：是會議室（鄭重）'],
            commonMistakes: ['○ でございます / × になります → 「になります」是變化，不是鄭重的「です」'],
        },
    },
    // ━━━ お〜になる ━━━
    {
        id: 'g_n4_056', category: 'grammar', level: 'N4', tags: ['keigo', 'o-ni-naru'],
        stem: '先生{せんせい}はもうこの本{ほん}を___になりましたか。',
        stemZh: '老師已經讀過這本書了嗎？（尊敬語）',
        options: [
            { text: 'お読{よ}み', reason: '正確！「お＋V連用形＋になる」是尊敬語形式。' },
            { text: 'お読{よ}んで', reason: '「お読んで」語法錯誤，「お〜になる」中間接連用形。' },
            { text: '読{よ}まれ', reason: '「読まれる」是被動式尊敬語，但不接「になる」。' },
            { text: 'お読{よ}む', reason: '「お読む」語法錯誤，要用連用形「読み」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「お〜になる」尊敬語',
            analysis: '「お＋動詞連用形＋になる」是尊敬語，用於描述長輩或上級的動作。',
            comparisons: ['お読みになる：讀（尊敬語）', '読まれる：讀（被動式尊敬語）'],
            commonMistakes: ['「お〜になる」中間接連用形（ます形去ます）：読み、書き、話し'],
        },
    },
    // ━━━ お〜する ━━━
    {
        id: 'g_n4_057', category: 'grammar', level: 'N4', tags: ['keigo', 'o-suru'],
        stem: '荷物{にもつ}を___しましょうか。',
        stemZh: '我來幫您拿行李吧？（自謙語）',
        options: [
            { text: 'お持{も}ち', reason: '正確！「お＋V連用形＋する」是自謙語形式。' },
            { text: 'お持{も}って', reason: '「お持って」語法錯誤，「お〜する」中間接連用形。' },
            { text: 'お持{も}つ', reason: '「お持つ」語法錯誤，要用連用形。' },
            { text: 'ご持{も}ち', reason: '和語動詞用「お」，不用「ご」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「お〜する」自謙語',
            analysis: '「お＋動詞連用形＋する」是自謙語，用於描述自己為對方做的事。',
            comparisons: ['お持ちする：幫您拿（自謙語）', 'お持ちになる：您拿（尊敬語）'],
            commonMistakes: ['和語動詞：「お」（お持ちする）/ 漢語動詞：「ご」（ご案内する）'],
        },
    },
    // ━━━ られる（尊敬） ━━━
    {
        id: 'g_n4_058', category: 'grammar', level: 'N4', tags: ['keigo', 'rareru-sonkei'],
        stem: '社長{しゃちょう}は何時{なんじ}に来{こ}___ますか。',
        stemZh: '社長幾點來？（尊敬語）',
        options: [
            { text: 'られ', reason: '正確！「来る」的尊敬語可用「来られる」（被動形式）。' },
            { text: 'て', reason: '「来て」是て形，不是尊敬語。' },
            { text: 'させ', reason: '「来させる」是使役形，不是尊敬語。' },
            { text: 'れ', reason: '「来る」是一段動詞，被動形用「られる」不是「れる」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '被動形作為尊敬語',
            analysis: '被動形（られる）可以當作尊敬語使用，是比較簡便的尊敬表現。',
            comparisons: ['来られる：來（尊敬語/被動形）', 'いらっしゃる：來（特別尊敬語）'],
            commonMistakes: ['「来られる」既可以是尊敬語也可以是可能形，需靠語境判斷'],
        },
    },
    // ━━━ いらっしゃる ━━━
    {
        id: 'g_n4_059', category: 'grammar', level: 'N4', tags: ['keigo', 'irassharu'],
        stem: '田中{たなか}部長{ぶちょう}は今{いま}どちらに___か。',
        stemZh: '田中部長現在在哪裡？（尊敬語）',
        options: [
            { text: 'いらっしゃいます', reason: '正確！「いらっしゃる」是「いる」「行く」「来る」的尊敬語。' },
            { text: 'います', reason: '「います」是普通丁寧語，對上級用尊敬語更適合。' },
            { text: 'おります', reason: '「おります」是「いる」的自謙語，不用於描述上級。' },
            { text: 'あります', reason: '「あります」用於無生命物，不用於人。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「いらっしゃる」特別尊敬語',
            analysis: '「いらっしゃる」是「いる」「行く」「来る」三個動詞的尊敬語形式。',
            comparisons: ['いらっしゃる：在/去/來（尊敬語）', 'おる：在（自謙語）'],
            commonMistakes: ['「いらっしゃる」用於上級 / 「おる」用於自己'],
        },
    },
    // ━━━ いたします ━━━
    {
        id: 'g_n4_060', category: 'grammar', level: 'N4', tags: ['keigo', 'itashimasu'],
        stem: '私{わたくし}がご案内{あんない}___。',
        stemZh: '由我來為您帶路（自謙語）。',
        options: [
            { text: 'いたします', reason: '正確！「いたす」是「する」的自謙語。' },
            { text: 'します', reason: '「します」是普通丁寧語，不夠謙虛。' },
            { text: 'なさいます', reason: '「なさる」是「する」的尊敬語，不用於自己。' },
            { text: 'されます', reason: '「される」是被動/尊敬形，不是自謙語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「いたす」自謙語',
            analysis: '「いたす」是「する」的自謙語，用於在客人或上級面前描述自己的動作。',
            comparisons: ['いたします：做（自謙語）', 'なさいます：做（尊敬語）'],
            commonMistakes: ['「いたす」：自己做（自謙）/ 「なさる」：對方做（尊敬）'],
        },
    },
    // ━━━ させる（使役） ━━━
    {
        id: 'g_n4_061', category: 'grammar', level: 'N4', tags: ['causative', 'saseru'],
        stem: '母{はは}は子供{こども}に野菜{やさい}を食{た}べ___。',
        stemZh: '媽媽讓孩子吃蔬菜。',
        options: [
            { text: 'させた', reason: '正確！「食べさせる」是一段動詞「食べる」的使役形。' },
            { text: 'られた', reason: '「食べられた」是被動形或可能形，不是使役。' },
            { text: 'せた', reason: '一段動詞用「させる」不是「せる」。' },
            { text: 'てもらった', reason: '「食べてもらった」表示請人吃，主從關係不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '使役形「させる」',
            analysis: '一段動詞去「る」加「させる」：食べる→食べさせる。表示讓/使某人做某事。',
            comparisons: ['食べさせる：讓（他）吃', '食べられる：能吃 / 被吃'],
            commonMistakes: ['一段動詞：させる（食べさせる）/ 五段動詞：せる（書かせる）'],
        },
    },
    // ━━━ させられる ━━━
    {
        id: 'g_n4_062', category: 'grammar', level: 'N4', tags: ['causative-passive', 'saserareru'],
        stem: '部長{ぶちょう}に残業{ざんぎょう}___。',
        stemZh: '被部長要求加班。',
        options: [
            { text: 'させられた', reason: '正確！「させられる」是使役受身形，表示被迫做某事。' },
            { text: 'させた', reason: '「させた」是使役形，主語是命令者，不是被強迫的人。' },
            { text: 'された', reason: '「された」是被動形，「残業する」的被動語法不自然。' },
            { text: 'してもらった', reason: '「してもらった」表示請人幫忙，不是被迫。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '使役受身形「させられる」',
            analysis: '「させられる」表示被迫做某事，主語是被強迫的人。',
            comparisons: ['残業させられた：被迫加班（被害者視角）', '残業させた：讓人加班（命令者視角）'],
            commonMistakes: ['五段動詞可縮約：書かせられる→書かされる'],
        },
    },
    // ━━━ させてください ━━━
    {
        id: 'g_n4_063', category: 'grammar', level: 'N4', tags: ['causative', 'sasete-kudasai'],
        stem: 'ぜひこのプロジェクトに参加{さんか}___ください。',
        stemZh: '請務必讓我參加這個專案。',
        options: [
            { text: 'させて', reason: '正確！「させてください」表示請求允許做某事。' },
            { text: 'して', reason: '「してください」是請求對方做某事，不是請求允許。' },
            { text: 'されて', reason: '「されてください」語法錯誤。' },
            { text: 'できて', reason: '「できてください」語法錯誤。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「させてください」請求允許',
            analysis: '「Vさせてください」表示請求對方允許自己做某事，是禮貌的請求方式。',
            comparisons: ['参加させてください：請讓我參加（請求允許）', '参加してください：請您參加（請求對方做）'],
            commonMistakes: ['「させてください」：請讓我做 / 「してください」：請您做'],
        },
    },
    // ━━━ られる（受身） ━━━
    {
        id: 'g_n4_064', category: 'grammar', level: 'N4', tags: ['passive', 'rareru-ukemi'],
        stem: '電車{でんしゃ}の中{なか}で足{あし}を踏{ふ}ま___。',
        stemZh: '在電車裡被踩到腳了。',
        options: [
            { text: 'れた', reason: '正確！五段動詞「踏む」的被動形是「踏まれる」。' },
            { text: 'せた', reason: '「踏ませた」是使役形，語意不合。' },
            { text: 'された', reason: '「踏むされた」語法錯誤。' },
            { text: 'させた', reason: '「踏ませた」是使役形，不是被動。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '五段動詞被動形「れる」',
            analysis: '五段動詞被動形：將語尾變為「あ段」加「れる」：踏む→踏まれる。',
            comparisons: ['踏まれた：被踩了（被動）', '踏ませた：讓人踩（使役）'],
            commonMistakes: ['五段動詞被動：れる（踏まれる）/ 一段動詞被動：られる（食べられる）'],
        },
    },
    // ━━━ ても ━━━
    {
        id: 'g_n4_065', category: 'grammar', level: 'N4', tags: ['concession', 'temo'],
        stem: '雨{あめ}が降{ふ}っ___、サッカーの試合{しあい}は行{おこな}われます。',
        stemZh: '即使下雨，足球比賽也會照常舉行。',
        options: [
            { text: 'ても', reason: '正確！「ても」表示讓步（即使...也...）。' },
            { text: 'たら', reason: '「たら」表示條件，不是讓步。' },
            { text: 'て', reason: '「て」是接續形，不表示讓步。' },
            { text: 'ので', reason: '「ので」表示原因，不是讓步。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ても」表示讓步',
            analysis: '「ても」表示「即使...也...」，前半是假設，後半表示不受影響。',
            comparisons: ['降っても行う：即使下雨也舉行（讓步）', '降ったら中止する：如果下雨就取消（條件）'],
            commonMistakes: ['「ても」：讓步（即使也...）/ 「たら」：條件（如果的話）'],
        },
    },
    // ━━━ てほしい ━━━
    {
        id: 'g_n4_066', category: 'grammar', level: 'N4', tags: ['desire', 'te-hoshii'],
        stem: '父{ちち}にもっとゆっくり運転{うんてん}し___です。',
        stemZh: '我希望爸爸開車慢一點。',
        options: [
            { text: 'てほしい', reason: '正確！「てほしい」表示希望別人做某事。' },
            { text: 'たい', reason: '「したい」表示自己想做，不是希望別人做。' },
            { text: 'てもらいたい', reason: '「てもらいたい」也可以，但「てほしい」更直接。' },
            { text: 'たがる', reason: '「たがる」表示第三人稱想做，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てほしい」表示希望他人做某事',
            analysis: '「人に V-てほしい」表示說話者希望某人做某事。對象用「に」標示。',
            comparisons: ['してほしい：希望（你/他）做', 'したい：（我）想做'],
            commonMistakes: ['「てほしい」：希望他人做 / 「たい」：自己想做'],
        },
    },
    // ━━━ たがる ━━━
    {
        id: 'g_n4_067', category: 'grammar', level: 'N4', tags: ['desire', 'tagaru'],
        stem: '妹{いもうと}は新{あたら}しいスマホを買{か}い___いる。',
        stemZh: '妹妹很想買新手機。',
        options: [
            { text: 'たがって', reason: '正確！「たがる」表示第三人稱表現出想做某事的樣子。' },
            { text: 'たくて', reason: '「たい」直接用於第三人稱不自然，要用「たがる」。' },
            { text: 'たいと', reason: '「買いたいと言っている」可以，但空格不符。' },
            { text: 'てほしがって', reason: '「てほしがる」表示想要別人做，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たがる」表示第三人稱的願望',
            analysis: '「たがる」用於描述第三人稱外部表現出的願望，因為他人的內心無法直接知道。',
            comparisons: ['買いたがっている：（她）很想買（外部觀察）', '買いたい：（我）想買（自己的心情）'],
            commonMistakes: ['第一人稱用「たい」/ 第三人稱用「たがる」或「たいと言っている」'],
        },
    },
    // ━━━ がる ━━━
    {
        id: 'g_n4_068', category: 'grammar', level: 'N4', tags: ['emotion', 'garu'],
        stem: '弟{おとうと}は暗{くら}い所{ところ}を怖{こわ}___いる。',
        stemZh: '弟弟害怕黑暗的地方。',
        options: [
            { text: 'がって', reason: '正確！「がる」表示第三人稱表現出某種感情。' },
            { text: 'くて', reason: '「怖くて」是て形，不是描述他人感情的方式。' },
            { text: 'そうで', reason: '「怖そう」表示看起來可怕，不是人的感情表現。' },
            { text: 'かって', reason: '語法錯誤。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「がる」表示第三人稱的感情表現',
            analysis: 'い形容詞去掉「い」加「がる」：怖い→怖がる。用於描述他人表現出的感情。',
            comparisons: ['怖がっている：（他）害怕著（觀察他人）', '怖い：（我）害怕 / 可怕（自己感受或客觀描述）'],
            commonMistakes: ['第一人稱用原形：怖い / 第三人稱用「がる」：怖がる'],
        },
    },
    // ━━━ やすい ━━━
    {
        id: 'g_n4_069', category: 'grammar', level: 'N4', tags: ['ease', 'yasui'],
        stem: 'この辞書{じしょ}は使{つか}い___です。',
        stemZh: '這本字典很容易使用。',
        options: [
            { text: 'やすい', reason: '正確！「V連用形＋やすい」表示容易做某事。' },
            { text: 'にくい', reason: '「にくい」表示難以做某事，語意相反。' },
            { text: 'づらい', reason: '「づらい」也表示難以做某事，語意相反。' },
            { text: 'たい', reason: '「使いたい」表示想使用，不是容易使用。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「やすい」表示容易做某事',
            analysis: '「V連用形＋やすい」表示做某事很容易，變化成い形容詞。',
            comparisons: ['使いやすい：容易使用', '使いにくい：難以使用'],
            commonMistakes: ['「やすい」：容易 / 「にくい」「づらい」：難以'],
        },
    },
    // ━━━ にくい ━━━
    {
        id: 'g_n4_070', category: 'grammar', level: 'N4', tags: ['difficulty', 'nikui'],
        stem: 'この漢字{かんじ}は読{よ}み___です。',
        stemZh: '這個漢字很難讀。',
        options: [
            { text: 'にくい', reason: '正確！「V連用形＋にくい」表示難以做某事。' },
            { text: 'やすい', reason: '「やすい」表示容易做某事，語意相反。' },
            { text: 'たい', reason: '「読みたい」表示想讀，不是難以讀。' },
            { text: 'すぎる', reason: '「読みすぎる」表示讀太多，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にくい」表示難以做某事',
            analysis: '「V連用形＋にくい」表示客觀上做某事有困難。變化成い形容詞。',
            comparisons: ['読みにくい：難以閱讀（客觀困難）', '読みづらい：讀起來費力（心理感受）'],
            commonMistakes: ['「にくい」：客觀困難 / 「づらい」：主觀感到困難'],
        },
    },
    // ━━━ づらい ━━━
    {
        id: 'g_n4_071', category: 'grammar', level: 'N4', tags: ['difficulty', 'zurai'],
        stem: 'こんなことは言{い}い___ですが、正直{しょうじき}に言{い}います。',
        stemZh: '這種事很難說出口，但我還是老實說。',
        options: [
            { text: 'づらい', reason: '正確！「づらい」表示做某事在心理上感到困難。' },
            { text: 'にくい', reason: '「にくい」偏客觀困難，此處是心理上的困難。' },
            { text: 'たくない', reason: '「言いたくない」表示不想說，語意不同。' },
            { text: 'がたい', reason: '「がたい」表示幾乎不可能，語意過強。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「づらい」表示主觀上的困難',
            analysis: '「V連用形＋づらい」表示做某事在心理上或身體上感到困難、痛苦。',
            comparisons: ['言いづらい：難以啟齒（心理困難）', '言いにくい：不好說（客觀困難）'],
            commonMistakes: ['「づらい」：主觀心理困難 / 「にくい」：客觀困難'],
        },
    },
    // ━━━ すぎる ━━━
    {
        id: 'g_n4_072', category: 'grammar', level: 'N4', tags: ['excess', 'sugiru'],
        stem: 'お酒{さけ}を飲{の}み___て、頭{あたま}が痛{いた}い。',
        stemZh: '喝太多了，頭痛。',
        options: [
            { text: 'すぎ', reason: '正確！「V連用形＋すぎる」表示過度做某事。' },
            { text: 'たくて', reason: '「飲みたくて」表示想喝，語意不同。' },
            { text: 'ながら', reason: '「飲みながら」表示一邊喝一邊，語意不同。' },
            { text: 'やすくて', reason: '「飲みやすくて」表示容易喝，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「すぎる」表示過度',
            analysis: '「V連用形＋すぎる」表示動作過度；「い形去い＋すぎる」表示程度過度。',
            comparisons: ['飲みすぎる：喝太多', '高すぎる：太貴（い形容詞去「い」加「すぎる」）'],
            commonMistakes: ['動詞：飲みすぎる / い形：高すぎる / な形：静かすぎる'],
        },
    },
    // ━━━ 間 ━━━
    {
        id: 'g_n4_073', category: 'grammar', level: 'N4', tags: ['time', 'aida'],
        stem: '夏休{なつやす}みの___、毎日{まいにち}プールに行{い}きました。',
        stemZh: '暑假期間，每天去了游泳池。',
        options: [
            { text: '間{あいだ}', reason: '正確！「間」表示某段持續的時間，後面接持續性動作。' },
            { text: '間{あいだ}に', reason: '「間に」強調在某期間內發生某一次性事件，此處是「每天」持續動作。' },
            { text: 'うちに', reason: '「うちに」表示趁著，此處不強調趁機。' },
            { text: '中{なか}に', reason: '「中に」不是正確的時間表達。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「間」vs「間に」',
            analysis: '「間」：期間內持續做某事；「間に」：期間內完成某件事。',
            comparisons: ['夏休みの間、毎日行った：暑假期間每天去（持續）', '夏休みの間に、旅行した：暑假期間去了旅行（一次性）'],
            commonMistakes: ['「間」：持續動作 / 「間に」：一次性事件'],
        },
    },
    // ━━━ 間に ━━━
    {
        id: 'g_n4_074', category: 'grammar', level: 'N4', tags: ['time', 'aida-ni'],
        stem: '寝{ね}ている___、誰{だれ}かが来{き}たようだ。',
        stemZh: '睡覺的時候（期間內），好像有人來了。',
        options: [
            { text: '間{あいだ}に', reason: '正確！「間に」表示在某段期間內發生了一次性事件。' },
            { text: '間{あいだ}', reason: '「間」用於持續動作，但「來了」是一次性事件。' },
            { text: 'うちに', reason: '「うちに」也可以，但不如「間に」精確。' },
            { text: '時{とき}', reason: '「時」也可以，但「間に」更強調在某段持續期間中。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「間に」表示期間內發生的瞬間事件',
            analysis: '「間に」強調在某段持續期間裡，發生了某個一次性的事件。',
            comparisons: ['寝ている間に来た：睡覺期間有人來了（一次性）', '寝ている間ずっと雨が降っていた：睡覺期間一直在下雨（持續）'],
            commonMistakes: ['「間に」：一次性事件 / 「間」：持續性動作'],
        },
    },
    // ━━━ うちに ━━━
    {
        id: 'g_n4_075', category: 'grammar', level: 'N4', tags: ['time', 'uchi-ni'],
        stem: '暖{あたた}かい___食{た}べてください。',
        stemZh: '趁熱吃吧。',
        options: [
            { text: 'うちに', reason: '正確！「うちに」表示趁著某個狀態還在時。' },
            { text: '間{あいだ}に', reason: '「間に」強調期間內的事件，「うちに」更強調「趁著」。' },
            { text: 'ために', reason: '「ために」表示目的，語意不合。' },
            { text: 'ので', reason: '「ので」表示原因，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「うちに」表示「趁著」',
            analysis: '「うちに」表示趁著某個狀態還持續的時候趕快做某事，含有時間上的急迫感。',
            comparisons: ['暖かいうちに食べる：趁熱吃', '若いうちに旅行する：趁年輕旅行'],
            commonMistakes: ['「うちに」強調「趁著」：狀態會改變，要趕快行動'],
        },
    },
    // ━━━ 後で ━━━
    {
        id: 'g_n4_076', category: 'grammar', level: 'N4', tags: ['time', 'ato-de'],
        stem: '食事{しょくじ}の___、散歩{さんぽ}しましょう。',
        stemZh: '吃飯之後，去散步吧。',
        options: [
            { text: '後{あと}で', reason: '正確！「後で」表示在某事之後。' },
            { text: '前{まえ}に', reason: '「前に」表示在某事之前，語意相反。' },
            { text: '間{あいだ}に', reason: '「間に」表示期間內，不是之後。' },
            { text: 'うちに', reason: '「うちに」表示趁著，不是之後。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「後で」表示「之後」',
            analysis: '「N＋の後で」或「V-た後で」表示某事之後做另一件事。',
            comparisons: ['食事の後で散歩する：吃飯後散步', '食事の前に手を洗う：吃飯前洗手'],
            commonMistakes: ['名詞接「の後で」/ 動詞接「た後で」'],
        },
    },
    // ━━━ 前に ━━━
    {
        id: 'g_n4_077', category: 'grammar', level: 'N4', tags: ['time', 'mae-ni'],
        stem: '寝{ね}る___、歯{は}を磨{みが}きます。',
        stemZh: '睡覺之前刷牙。',
        options: [
            { text: '前{まえ}に', reason: '正確！「V辭書形＋前に」表示做某事之前。' },
            { text: '後{あと}で', reason: '「後で」表示之後，語意相反。' },
            { text: 'うちに', reason: '「うちに」表示趁著，不是之前。' },
            { text: 'ために', reason: '「ために」表示目的，不是時間先後。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「前に」表示「之前」',
            analysis: '動詞辭書形接「前に」表示在做某事之前，名詞接「の前に」。',
            comparisons: ['寝る前に：睡覺之前（V辭書形＋前に）', '食事の前に：吃飯之前（N＋の前に）'],
            commonMistakes: ['動詞用辭書形：○ 寝る前に / × 寝た前に'],
        },
    },
    // ━━━ までに ━━━
    {
        id: 'g_n4_078', category: 'grammar', level: 'N4', tags: ['time', 'made-ni'],
        stem: '金曜日{きんようび}___にレポートを出{だ}してください。',
        stemZh: '請在星期五之前交報告。',
        options: [
            { text: 'まで', reason: '正確！「までに」表示截止期限（在...之前完成）。' },
            { text: 'から', reason: '「から」表示從...開始，不是截止。' },
            { text: 'の前{まえ}', reason: '「の前に」也表示之前，但「までに」更強調期限。' },
            { text: 'の後{あと}', reason: '「の後で」表示之後，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「までに」表示截止期限',
            analysis: '「までに」表示在某個時間點之前完成某事，強調期限。',
            comparisons: ['金曜日までにレポートを出す：星期五之前交（期限）', '金曜日まで待つ：等到星期五（持續）'],
            commonMistakes: ['「までに」：截止期限（完成一次性動作）/ 「まで」：持續到某時間'],
        },
    },
    // ━━━ と思う ━━━
    {
        id: 'g_n4_079', category: 'grammar', level: 'N4', tags: ['opinion', 'to-omou'],
        stem: '来年{らいねん}、留学{りゅうがく}しよう___思{おも}っています。',
        stemZh: '我正想著明年要去留學。',
        options: [
            { text: 'と', reason: '正確！「Vよう＋と思う」表示打算做某事。' },
            { text: 'に', reason: '「ように思う」表示覺得，語意不同。' },
            { text: 'で', reason: '語法錯誤。' },
            { text: 'を', reason: '語法錯誤。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようと思う」表示打算',
            analysis: '「V意向形＋と思う」表示說話者的計劃或打算。「思っている」表示持續的想法。',
            comparisons: ['留学しようと思う：想去留學（當下的想法）', '留学しようと思っている：一直在想要去留學'],
            commonMistakes: ['「と思う」：當下判斷 / 「と思っている」：持續的想法或打算'],
        },
    },
    // ━━━ かどうか ━━━
    {
        id: 'g_n4_080', category: 'grammar', level: 'N4', tags: ['question', 'ka-dou-ka'],
        stem: '明日{あした}パーティーに行{い}く___まだ決{き}めていません。',
        stemZh: '還沒決定是否要去明天的派對。',
        options: [
            { text: 'かどうか', reason: '正確！「かどうか」表示「是否...」。' },
            { text: 'かもしれない', reason: '「かもしれない」表示也許，不是「是否」。' },
            { text: 'かということ', reason: '「かということ」較為正式，不如「かどうか」自然。' },
            { text: 'かしら', reason: '「かしら」表示疑問語氣，不能接在子句中。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かどうか」表示「是否」',
            analysis: '「V普通形＋かどうか」表示不確定某事是否為真，用於間接疑問。',
            comparisons: ['行くかどうか決めていない：還沒決定是否去', '行くか行かないか決めていない：去還是不去沒決定'],
            commonMistakes: ['「かどうか」前面用普通形，不用丁寧形'],
        },
    },
    // ━━━ とか〜とか ━━━
    {
        id: 'g_n4_081', category: 'grammar', level: 'N4', tags: ['listing', 'toka'],
        stem: '休{やす}みの日{ひ}は映画{えいが}を見{み}る___、買{か}い物{もの}をする___しています。',
        stemZh: '休假日會看電影啦、購物之類的。',
        options: [
            { text: 'とか…とか', reason: '正確！「とか〜とか」表示列舉幾個例子。' },
            { text: 'たり…たり', reason: '「たり〜たり」也可以列舉，但「とか」更口語。' },
            { text: 'や…や', reason: '「や」用於名詞列舉，不用於動詞。' },
            { text: 'し…し', reason: '「し」列舉理由，不完全是列舉活動。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とか〜とか」列舉例子',
            analysis: '「とか〜とか」用於口語中列舉幾個例子，暗示還有其他。',
            comparisons: ['映画を見るとか買い物をするとか：看電影啦購物之類的', '映画を見たり買い物をしたり：看看電影做做購物'],
            commonMistakes: ['「とか」：口語列舉 / 「たり〜たり」：較正式的列舉'],
        },
    },
    // ━━━ ように（目的） ━━━
    {
        id: 'g_n4_082', category: 'grammar', level: 'N4', tags: ['purpose', 'you-ni'],
        stem: '遅刻{ちこく}しない___、早{はや}く起{お}きました。',
        stemZh: '為了不遲到，早起了。',
        options: [
            { text: 'ように', reason: '正確！「ない＋ように」表示為了不...（否定目的）。' },
            { text: 'ために', reason: '「ために」接意志動詞，但「しない」是非意志否定。' },
            { text: 'のに', reason: '「のに」表示逆接或目的，但此處「ように」更自然。' },
            { text: 'から', reason: '「から」表示原因，不是目的。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ように」表示目的（接非意志動詞/否定）',
            analysis: '「ように」接非意志動詞或否定形表示目的：「為了能...」「為了不...」。',
            comparisons: ['遅刻しないように早く起きた：為了不遲到而早起（ように＋否定）', '日本で働くために勉強する：為了在日本工作而學（ために＋意志動詞）'],
            commonMistakes: ['否定目的用「ように」：○ しないように / × しないために'],
        },
    },
    // ━━━ わけだ ━━━
    {
        id: 'g_n4_083', category: 'grammar', level: 'N4', tags: ['reasoning', 'wake-da'],
        stem: '毎日{まいにち}10時間{じかん}も勉強{べんきょう}しているんですか。上手{じょうず}な___ですね。',
        stemZh: '每天學10個小時嗎？難怪這麼厲害。',
        options: [
            { text: 'わけ', reason: '正確！「わけだ」表示理所當然、難怪的結論。' },
            { text: 'はず', reason: '「はず」表示應該，不是「難怪」。' },
            { text: 'よう', reason: '「ようだ」表示推測，語意不同。' },
            { text: 'そう', reason: '「そうだ」表示傳聞或外觀，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「わけだ」表示「難怪」',
            analysis: '「わけだ」表示得知原因後恍然大悟，認為結果理所當然。',
            comparisons: ['上手なわけだ：難怪很厲害（恍然大悟）', '上手なはずだ：應該很厲害（邏輯推理）'],
            commonMistakes: ['「わけだ」：得知原因後的感嘆 / 「はずだ」：根據邏輯的推測'],
        },
    },
    // ━━━ わけではない ━━━
    {
        id: 'g_n4_084', category: 'grammar', level: 'N4', tags: ['negation', 'wake-dewa-nai'],
        stem: '日本{にほん}の食{た}べ物{もの}が嫌{きら}いな___ありません。ただ辛{から}いものが苦手{にがて}なだけです。',
        stemZh: '並不是討厭日本料理。只是不太能吃辣的而已。',
        options: [
            { text: 'わけでは', reason: '正確！「わけではない」表示部分否定（並不是...）。' },
            { text: 'はずでは', reason: '「はずではない」不是常見的表達。' },
            { text: 'ことでは', reason: '語法錯誤。' },
            { text: 'ようでは', reason: '「ようではない」語法不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「わけではない」部分否定',
            analysis: '「わけではない」表示並非完全如此，用於修正他人的誤解。',
            comparisons: ['嫌いなわけではない：並不是討厭（部分否定）', '嫌いではない：不討厭（完全否定）'],
            commonMistakes: ['「わけではない」：委婉部分否定 / 「ない」：直接否定'],
        },
    },
    // ━━━ わけがない ━━━
    {
        id: 'g_n4_085', category: 'grammar', level: 'N4', tags: ['negation', 'wake-ga-nai'],
        stem: 'そんな簡単{かんたん}な問題{もんだい}が分{わ}からない___。',
        stemZh: '那麼簡單的問題不可能不知道。',
        options: [
            { text: 'わけがない', reason: '正確！「わけがない」表示從道理上不可能。' },
            { text: 'はずがない', reason: '「はずがない」也表示不可能，但「わけがない」更強調不合理。' },
            { text: 'かもしれない', reason: '「かもしれない」表示也許，語意相反。' },
            { text: 'に違{ちが}いない', reason: '「に違いない」表示一定是，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「わけがない」表示不合理',
            analysis: '「わけがない」表示從道理上說不通，比「はずがない」更強調不合理性。',
            comparisons: ['分からないわけがない：不可能不知道（強調不合理）', '分からないはずがない：不可能不知道（邏輯推理）'],
            commonMistakes: ['「わけがない」更口語、更強調 / 「はずがない」較客觀'],
        },
    },
    // ━━━ ことがある ━━━
    {
        id: 'g_n4_086', category: 'grammar', level: 'N4', tags: ['frequency', 'koto-ga-aru'],
        stem: '日曜日{にちようび}に会社{かいしゃ}に行{い}く___もあります。',
        stemZh: '有時候星期天也會去公司。',
        options: [
            { text: 'こと', reason: '正確！「V辭書形＋ことがある」表示有時候會做某事。' },
            { text: 'もの', reason: '「ものだ」表示回憶或一般常識，語意不同。' },
            { text: 'はず', reason: '「はず」表示應該，語意不同。' },
            { text: 'ところ', reason: '「ところ」表示時間點，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことがある」表示有時候',
            analysis: '「V辭書形＋ことがある」表示某事偶爾發生。與「たことがある」（曾經）不同。',
            comparisons: ['行くことがある：有時候會去（偶爾）', '行ったことがある：曾經去過（經驗）'],
            commonMistakes: ['辭書形＋ことがある：有時候 / た形＋ことがある：曾經'],
        },
    },
    // ━━━ ことができる ━━━
    {
        id: 'g_n4_087', category: 'grammar', level: 'N4', tags: ['ability', 'koto-ga-dekiru'],
        stem: 'この図書館{としょかん}では本{ほん}を借{か}りる___できます。',
        stemZh: '在這個圖書館可以借書。',
        options: [
            { text: 'ことが', reason: '正確！「V辭書形＋ことができる」表示能夠做某事。' },
            { text: 'ように', reason: '「ように」表示目的，語法不合。' },
            { text: 'ために', reason: '「ために」表示目的，語法不合。' },
            { text: 'のが', reason: '「のが」用於「のが好き」等，不接「できる」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことができる」表示能力或可能',
            analysis: '「V辭書形＋ことができる」表示能夠做某事，與可能形意思相同。',
            comparisons: ['借りることができる：可以借（正式）', '借りられる：可以借（可能形）'],
            commonMistakes: ['「ことができる」較正式 / 可能形較口語'],
        },
    },
    // ━━━ ように言う ━━━
    {
        id: 'g_n4_088', category: 'grammar', level: 'N4', tags: ['instruction', 'you-ni-iu'],
        stem: '医者{いしゃ}にもっと運動{うんどう}する___言{い}われました。',
        stemZh: '被醫生說要多運動。',
        options: [
            { text: 'ように', reason: '正確！「ように言う」表示叫某人做某事。' },
            { text: 'ことに', reason: '「ことに言う」不是正確的表達。' },
            { text: 'と', reason: '「と言う」表示直接引用，「ように言う」表示間接指示。' },
            { text: 'ために', reason: '「ために言う」語意不通。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ように言う」表示間接指示',
            analysis: '「V辭書形/ない形＋ように言う」表示告訴某人要做/不要做某事。',
            comparisons: ['運動するように言われた：被告知要運動（間接）', '「運動しなさい」と言われた：被說「要運動」（直接引用）'],
            commonMistakes: ['「ように言う」：間接指示 / 「と言う」：直接引用'],
        },
    },
    // ━━━ ようとする ━━━
    {
        id: 'g_n4_089', category: 'grammar', level: 'N4', tags: ['attempt', 'you-to-suru'],
        stem: '窓{まど}を開{あ}けよう___した時{とき}、急{きゅう}に風{かぜ}が吹{ふ}いた。',
        stemZh: '正要打開窗戶的時候，突然刮起風了。',
        options: [
            { text: 'と', reason: '正確！「V意向形＋とする」表示正要做某事或試圖做。' },
            { text: 'に', reason: '語法錯誤。' },
            { text: 'で', reason: '語法錯誤。' },
            { text: 'が', reason: '語法錯誤。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようとする」表示正要或試圖',
            analysis: '「V意向形＋とする」表示正要做某事的瞬間，或試圖做某事。',
            comparisons: ['開けようとした：正要打開（瞬間）', '開けようと思った：想要打開（想法）'],
            commonMistakes: ['「ようとする」：正要/試圖 / 「ようと思う」：打算'],
        },
    },
    // ━━━ しか〜ない ━━━
    {
        id: 'g_n4_090', category: 'grammar', level: 'N4', tags: ['limitation', 'shika-nai'],
        stem: '財布{さいふ}に100円{えん}___ない。',
        stemZh: '錢包裡只有100日圓。',
        options: [
            { text: 'しか', reason: '正確！「しか〜ない」表示「只有」，帶有不足的語氣。' },
            { text: 'だけ', reason: '「だけ」也表示「只有」，但「しか」必須配合否定形。' },
            { text: 'ばかり', reason: '「ばかり」表示「淨是」，語意不同。' },
            { text: 'まで', reason: '「まで」表示「直到」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「しか〜ない」表示限定（不足感）',
            analysis: '「しか＋否定」表示只有某個數量或程度，強調不足。',
            comparisons: ['100円しかない：只有100圓（不夠）', '100円だけある：只有100圓（客觀）'],
            commonMistakes: ['「しか」必須搭配否定：○ しかない / × しかある'],
        },
    },
    // ━━━ だけ（N4） ━━━
    {
        id: 'g_n4_091', category: 'grammar', level: 'N4', tags: ['limitation', 'dake'],
        stem: '好{す}きな___食{た}べていいですよ。',
        stemZh: '喜歡的話盡量吃吧。',
        options: [
            { text: 'だけ', reason: '正確！「好きなだけ」表示想要多少就多少。' },
            { text: 'ばかり', reason: '「好きなばかり」語法不正確。' },
            { text: 'しか', reason: '「しか」必須配合否定，語法不合。' },
            { text: 'ほど', reason: '「好きなほど」語法不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「だけ」表示充分的量',
            analysis: '「好きなだけ」「欲しいだけ」表示隨意、想要多少就多少。',
            comparisons: ['好きなだけ食べる：想吃多少就吃多少', '3つだけ食べる：只吃3個（限定）'],
            commonMistakes: ['「好きなだけ」：盡情 / 「N＋だけ」：只有N（限定）'],
        },
    },
    // ━━━ ほど ━━━
    {
        id: 'g_n4_092', category: 'grammar', level: 'N4', tags: ['degree', 'hodo'],
        stem: '死{し}ぬ___疲{つか}れた。',
        stemZh: '累到快死了（累到那種程度）。',
        options: [
            { text: 'ほど', reason: '正確！「ほど」表示到...的程度。' },
            { text: 'くらい', reason: '「くらい」也可以表示程度，但「ほど」更書面。' },
            { text: 'まで', reason: '「まで」表示到某時間點，不是程度。' },
            { text: 'ばかり', reason: '「ばかり」表示淨是，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ほど」表示程度',
            analysis: '「Vほど」表示到達某個程度，常用於誇張表現。',
            comparisons: ['死ぬほど疲れた：累得快死（程度）', '死ぬくらい疲れた：累得快死（口語，意思相近）'],
            commonMistakes: ['「ほど」較書面 / 「くらい」較口語，都表示程度'],
        },
    },
    // ━━━ ほど〜ない ━━━
    {
        id: 'g_n4_093', category: 'grammar', level: 'N4', tags: ['comparison', 'hodo-nai'],
        stem: '東京{とうきょう}は大阪{おおさか}___大{おお}きくない。',
        stemZh: '東京沒有大阪那麼大。',
        options: [
            { text: 'ほど', reason: '正確！「AはBほど〜ない」表示A沒有B那麼...。' },
            { text: 'より', reason: '「より」表示比較：東京は大阪より大きい（東京比大阪大）。' },
            { text: 'くらい', reason: '「くらい」不常用於否定比較。' },
            { text: 'だけ', reason: '「だけ」表示僅限，語法不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ほど〜ない」否定比較',
            analysis: '「AはBほど〜ない」表示A不如B那樣，是比較級的否定形式。',
            comparisons: ['東京は大阪ほど大きくない：東京沒有大阪那麼大', '東京は大阪より大きい：東京比大阪大'],
            commonMistakes: ['「ほど〜ない」：A不如B / 「より」：A勝過B'],
        },
    },
    // ━━━ なければならない ━━━
    {
        id: 'g_n4_094', category: 'grammar', level: 'N4', tags: ['obligation', 'nakereba-naranai'],
        stem: '明日{あした}は早{はや}く起{お}き___ならない。',
        stemZh: '明天必須早起。',
        options: [
            { text: 'なければ', reason: '正確！「なければならない」表示必須做某事。' },
            { text: 'なくても', reason: '「なくてもいい」表示不必，語意相反。' },
            { text: 'ないと', reason: '「ないといけない」也可以，但此處空格後是「ならない」。' },
            { text: 'なくては', reason: '「なくてはならない」也正確，但此處空格後是「ならない」，要用「なければ」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なければならない」表示義務',
            analysis: '「V-ない形（去い加ければ）＋ならない」表示必須做某事，是正式表達。',
            comparisons: ['起きなければならない：必須起（正式）', '起きないといけない：必須起（口語）', '起きなくちゃ：必須起（很口語）'],
            commonMistakes: ['正式：なければならない / 口語：ないといけない / 很口語：なくちゃ'],
        },
    },
    // ━━━ ていただけませんか ━━━
    {
        id: 'g_n4_095', category: 'grammar', level: 'N4', tags: ['request', 'te-itadakemasen-ka'],
        stem: 'すみません、もう少{すこ}しゆっくり話{はな}し___か。',
        stemZh: '不好意思，可以請您說慢一點嗎？',
        options: [
            { text: 'ていただけません', reason: '正確！「ていただけませんか」是最禮貌的請求方式。' },
            { text: 'てもらえません', reason: '「てもらえませんか」也正確，但「いただく」更有禮貌。' },
            { text: 'てください', reason: '「てください」較直接，禮貌度不及「ていただけませんか」。' },
            { text: 'てくれません', reason: '「てくれませんか」也是請求，但禮貌度較低。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ていただけませんか」最禮貌的請求',
            analysis: '「ていただけませんか」是「てもらう」的敬語形式加否定疑問，是最禮貌的請求方式。',
            comparisons: ['ていただけませんか：可以請您嗎（最禮貌）', 'てもらえませんか：可以請你嗎（禮貌）', 'てくれませんか：可以請你嗎（一般）'],
            commonMistakes: ['禮貌度：てください < てくれませんか < てもらえませんか < ていただけませんか'],
        },
    },
    // ━━━ てよかった ━━━
    {
        id: 'g_n4_096', category: 'grammar', level: 'N4', tags: ['emotion', 'te-yokatta'],
        stem: '傘{かさ}を持{も}っ___よかった。',
        stemZh: '幸好帶了傘。',
        options: [
            { text: 'てきて', reason: '正確！「持ってきてよかった」表示帶來了真好。' },
            { text: 'って', reason: '「持ってよかった」表示持有了真好，語意略有不同。' },
            { text: 'たら', reason: '「持ったら」是條件形，語法不合。' },
            { text: 'ても', reason: '「持っても」表示即使持有，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てよかった」表示慶幸',
            analysis: '「V-てよかった」表示做了某事感到慶幸、真是太好了。',
            comparisons: ['持ってきてよかった：幸好帶來了', '来てよかった：來了真好'],
            commonMistakes: ['「てよかった」：慶幸做了 / 「なくてよかった」：慶幸沒做'],
        },
    },
    // ━━━ てすみません ━━━
    {
        id: 'g_n4_097', category: 'grammar', level: 'N4', tags: ['apology', 'te-sumimasen'],
        stem: '遅{おく}れ___すみません。',
        stemZh: '遲到了，對不起。',
        options: [
            { text: 'て', reason: '正確！「V-てすみません」表示因做了某事而道歉。' },
            { text: 'たら', reason: '「遅れたら」是條件形，不用於道歉。' },
            { text: 'ても', reason: '「遅れても」表示即使遲到，語意不合。' },
            { text: 'ながら', reason: '「遅れながら」語法錯誤。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てすみません」道歉',
            analysis: '「V-てすみません」表示因為做了某事而感到抱歉。',
            comparisons: ['遅れてすみません：遲到了對不起', '遅れて申し訳ありません：遲到了非常抱歉（更正式）'],
            commonMistakes: ['「てすみません」：一般道歉 / 「て申し訳ありません」：正式道歉'],
        },
    },
    // ━━━ たらどう ━━━
    {
        id: 'g_n4_098', category: 'grammar', level: 'N4', tags: ['suggestion', 'tara-dou'],
        stem: '疲{つか}れているなら、少{すこ}し休{やす}ん___。',
        stemZh: '如果累了的話，稍微休息一下如何？',
        options: [
            { text: 'だらどう', reason: '正確！「たらどう」表示建議（...怎麼樣？）。' },
            { text: 'でもいい', reason: '「休んでもいい」表示可以休息，不是建議。' },
            { text: 'ばいい', reason: '「休めばいい」表示只要休息就好，語氣不同。' },
            { text: 'たほうがいい', reason: '「休んだほうがいい」表示最好休息，語氣更強。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たらどう」表示建議',
            analysis: '「V-たらどう（ですか）」是溫和的建議方式，意為「...怎麼樣？」。',
            comparisons: ['休んだらどう：休息一下如何（溫和建議）', '休んだほうがいい：最好休息（較強建議）'],
            commonMistakes: ['「たらどう」：輕鬆建議 / 「たほうがいい」：較強建議'],
        },
    },
    // ━━━ ようにしてください ━━━
    {
        id: 'g_n4_099', category: 'grammar', level: 'N4', tags: ['instruction', 'you-ni-shite-kudasai'],
        stem: '毎日{まいにち}8時間{じかん}以上{いじょう}寝{ね}る___してください。',
        stemZh: '請務必每天睡8小時以上。',
        options: [
            { text: 'ように', reason: '正確！「ようにしてください」表示請務必做到...。' },
            { text: 'ことに', reason: '「ことにしてください」語法不自然。' },
            { text: 'ために', reason: '「ためにしてください」語法不正確。' },
            { text: 'のに', reason: '「のにしてください」語法不正確。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようにしてください」表示叮嚀',
            analysis: '「V-ようにしてください」是比「てください」更委婉的叮嚀，意為「請注意做到...」。',
            comparisons: ['寝るようにしてください：請注意要睡（委婉叮嚀）', '寝てください：請睡（直接請求）'],
            commonMistakes: ['「ようにしてください」較為委婉、叮嚀式 / 「てください」較為直接'],
        },
    },
    // ━━━ のは〜だ ━━━
    {
        id: 'g_n4_100', category: 'grammar', level: 'N4', tags: ['emphasis', 'no-wa-da'],
        stem: '私{わたし}が一番{いちばん}好{す}きな___は寿司{すし}です。',
        stemZh: '我最喜歡的是壽司。',
        options: [
            { text: 'の', reason: '正確！「のは〜だ」用於強調或說明。' },
            { text: 'こと', reason: '「ことは」也可以，但「の」更口語自然。' },
            { text: 'もの', reason: '「もの」表示東西，但此處「の」更自然。' },
            { text: 'ところ', reason: '「ところ」表示地點或時間，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「のは〜だ」強調結構',
            analysis: '「V/形容詞＋のは〜だ」用於強調或說明某事的核心內容。',
            comparisons: ['好きなのは寿司です：最喜歡的是壽司（強調寿司）', '寿司が好きです：喜歡壽司（一般陳述）'],
            commonMistakes: ['「のは〜だ」用於強調後面的部分'],
        },
    },
    // ━━━ かわりに ━━━
    {
        id: 'g_n4_101', category: 'grammar', level: 'N4', tags: ['substitute', 'kawari-ni'],
        stem: '田中{たなか}さんの___、私{わたし}が会議{かいぎ}に出{で}ます。',
        stemZh: '代替田中先生，我去開會。',
        options: [
            { text: 'かわりに', reason: '正確！「かわりに」表示代替某人做某事。' },
            { text: 'ために', reason: '「ために」表示目的，不是代替。' },
            { text: 'として', reason: '「として」表示以...身份，不是代替。' },
            { text: 'について', reason: '「について」表示關於，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かわりに」表示代替',
            analysis: '「Nのかわりに」表示代替某人做某事，或作為交換條件。',
            comparisons: ['田中さんのかわりに：代替田中（代替）', '手伝うかわりに、ご飯をおごって：幫忙的話，請我吃飯（交換）'],
            commonMistakes: ['「かわりに」有兩個意思：代替 / 交換條件'],
        },
    },
    // ━━━ なさい ━━━
    {
        id: 'g_n4_102', category: 'grammar', level: 'N4', tags: ['command', 'nasai'],
        stem: '早{はや}く宿題{しゅくだい}をし___。',
        stemZh: '快做作業！（命令）',
        options: [
            { text: 'なさい', reason: '正確！「V連用形＋なさい」是溫和的命令形式。' },
            { text: 'ろ', reason: '「しろ」是粗魯的命令形，「なさい」較溫和。' },
            { text: 'てください', reason: '「してください」是請求，不是命令。' },
            { text: 'ましょう', reason: '「しましょう」是邀約，不是命令。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なさい」溫和命令',
            analysis: '「V連用形＋なさい」是比命令形（しろ）溫和，但比「てください」強硬的命令方式。常用於父母對孩子。',
            comparisons: ['しなさい：做吧（溫和命令）', 'しろ：做！（粗魯命令）', 'してください：請做（請求）'],
            commonMistakes: ['強硬度：命令形（しろ）> なさい > てください'],
        },
    },
    // ━━━ こそ ━━━
    {
        id: 'g_n4_103', category: 'grammar', level: 'N4', tags: ['emphasis', 'koso'],
        stem: 'こちら___よろしくお願{ねが}いします。',
        stemZh: '我這邊才要拜託您呢。',
        options: [
            { text: 'こそ', reason: '正確！「こそ」表示強調「正是」「才是」。' },
            { text: 'も', reason: '「も」表示「也」，強調度不夠。' },
            { text: 'は', reason: '「は」是一般主題標示，不夠強調。' },
            { text: 'が', reason: '「が」是主語標示，不是強調。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「こそ」強調「正是」',
            analysis: '「こそ」用於強調前面的詞語，表示「正是」「才是」。',
            comparisons: ['こちらこそ：我這邊才是（強調回應）', 'これこそ本物だ：這才是真的（強調指定）'],
            commonMistakes: ['「こそ」常用於回應他人的感謝或道歉：こちらこそ'],
        },
    },
    // ━━━ さえ ━━━
    {
        id: 'g_n4_104', category: 'grammar', level: 'N4', tags: ['emphasis', 'sae'],
        stem: '漢字{かんじ}___読{よ}めれば、この本{ほん}は分{わ}かります。',
        stemZh: '只要能讀漢字，這本書就能懂。',
        options: [
            { text: 'さえ', reason: '正確！「さえ〜ば」表示「只要...就...」。' },
            { text: 'だけ', reason: '「だけ」表示限定，但不形成「只要...就」的條件句。' },
            { text: 'しか', reason: '「しか」搭配否定，語法不合。' },
            { text: 'まで', reason: '「まで」表示到...為止，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「さえ〜ば」表示最低條件',
            analysis: '「さえ〜ば」表示只要滿足這一個最低條件就可以了。',
            comparisons: ['漢字さえ読めれば：只要能讀漢字就好', '漢字も読める：也能讀漢字'],
            commonMistakes: ['「さえ」搭配「ば/たら」形成條件：さえ〜ば＝只要...就'],
        },
    },
    // ━━━ なかなか ━━━
    {
        id: 'g_n4_105', category: 'grammar', level: 'N4', tags: ['adverb', 'nakanaka'],
        stem: '日本語{にほんご}の文法{ぶんぽう}は___覚{おぼ}えられない。',
        stemZh: '日語文法怎麼也記不住。',
        options: [
            { text: 'なかなか', reason: '正確！「なかなか〜ない」表示不容易做到。' },
            { text: 'あまり', reason: '「あまり」表示不太...，程度較輕。' },
            { text: 'ぜんぜん', reason: '「ぜんぜん」表示完全不...，程度過強。' },
            { text: 'すこし', reason: '「すこし」表示一點，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なかなか〜ない」表示不容易',
            analysis: '「なかなか」搭配否定表示雖然努力但不容易達成。搭配肯定則表示「相當好」。',
            comparisons: ['なかなか覚えられない：怎麼也記不住（否定）', 'なかなかいい：相當好（肯定）'],
            commonMistakes: ['「なかなか＋否定」：不容易 / 「なかなか＋肯定」：相當好'],
        },
    },
    // ━━━ やはり/やっぱり ━━━
    {
        id: 'g_n4_106', category: 'grammar', level: 'N4', tags: ['adverb', 'yahari'],
        stem: '___日本{にほん}で食{た}べる寿司{すし}が一番{いちばん}おいしい。',
        stemZh: '果然在日本吃的壽司最好吃。',
        options: [
            { text: 'やっぱり', reason: '正確！「やっぱり」表示「果然」，符合預期的結果。' },
            { text: 'たぶん', reason: '「たぶん」表示大概，不是「果然」。' },
            { text: 'きっと', reason: '「きっと」表示一定，用於預測未來。' },
            { text: 'もちろん', reason: '「もちろん」表示當然，但不強調「如預期般」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「やっぱり」表示「果然」',
            analysis: '「やっぱり」（口語）＝「やはり」（書面語），表示結果與預期相符。',
            comparisons: ['やっぱりおいしい：果然好吃（如預期）', 'やっぱりやめる：還是不做了（改回原來的想法）'],
            commonMistakes: ['「やっぱり」有兩個意思：果然（如預期）/ 還是...（回歸原意）'],
        },
    },
    // ━━━ きっと ━━━
    {
        id: 'g_n4_107', category: 'grammar', level: 'N4', tags: ['adverb', 'kitto'],
        stem: '彼{かれ}は___来{く}ると思{おも}いますよ。',
        stemZh: '他一定會來的。',
        options: [
            { text: 'きっと', reason: '正確！「きっと」表示說話者的強烈確信（一定）。' },
            { text: 'たぶん', reason: '「たぶん」表示大概，確信度較低。' },
            { text: 'もしかしたら', reason: '「もしかしたら」表示也許，確信度更低。' },
            { text: 'ぜんぜん', reason: '「ぜんぜん」搭配否定表示完全不，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「きっと」表示確信',
            analysis: '「きっと」表示說話者有很高的確信度，相當於「一定」。',
            comparisons: ['きっと来る：一定會來（90%確信）', 'たぶん来る：大概會來（70%）', 'もしかしたら来る：也許會來（40%）'],
            commonMistakes: ['確信度：きっと > たぶん > もしかしたら'],
        },
    },
    // ━━━ ぜひ ━━━
    {
        id: 'g_n4_108', category: 'grammar', level: 'N4', tags: ['adverb', 'zehi'],
        stem: '___日本{にほん}に遊{あそ}びに来{き}てください。',
        stemZh: '請務必來日本玩。',
        options: [
            { text: 'ぜひ', reason: '正確！「ぜひ」表示強烈希望或推薦（務必、一定要）。' },
            { text: 'きっと', reason: '「きっと」表示確信預測，不用於邀請。' },
            { text: 'たぶん', reason: '「たぶん」表示大概，不用於強烈推薦。' },
            { text: 'もう', reason: '「もう」表示已經或再，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ぜひ」表示強烈推薦或希望',
            analysis: '「ぜひ」用於熱切地邀請或推薦，表示「務必」「一定要」。',
            comparisons: ['ぜひ来てください：務必來（強烈邀請）', '来てください：請來（一般請求）'],
            commonMistakes: ['「ぜひ」用於邀請、推薦 / 「きっと」用於預測'],
        },
    },
    // ━━━ そろそろ ━━━
    {
        id: 'g_n4_109', category: 'grammar', level: 'N4', tags: ['adverb', 'sorosoro'],
        stem: '___帰{かえ}らないと、最終{さいしゅう}電車{でんしゃ}に乗{の}れなくなります。',
        stemZh: '差不多該回去了，不然搭不上末班車。',
        options: [
            { text: 'そろそろ', reason: '正確！「そろそろ」表示差不多該做某事了。' },
            { text: 'やっと', reason: '「やっと」表示終於，語意不同。' },
            { text: 'すぐに', reason: '「すぐに」表示馬上，比「そろそろ」更急迫。' },
            { text: 'ずっと', reason: '「ずっと」表示一直，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「そろそろ」表示差不多該...',
            analysis: '「そろそろ」表示時間差不多到了，該開始做某事了。語氣溫和。',
            comparisons: ['そろそろ帰る：差不多該回去了（溫和）', 'すぐ帰る：馬上回去（急迫）'],
            commonMistakes: ['「そろそろ」：差不多該... / 「すぐに」：馬上'],
        },
    },
    // ━━━ やっと ━━━
    {
        id: 'g_n4_110', category: 'grammar', level: 'N4', tags: ['adverb', 'yatto'],
        stem: '3年{ねん}かかって___日本語{にほんご}能力{のうりょく}試験{しけん}N2に合格{ごうかく}した。',
        stemZh: '花了3年終於通過日語能力考N2。',
        options: [
            { text: 'やっと', reason: '正確！「やっと」表示經過很長時間終於達成。' },
            { text: 'そろそろ', reason: '「そろそろ」表示差不多該，不是「終於」。' },
            { text: 'ずっと', reason: '「ずっと」表示一直，不表示達成。' },
            { text: 'すぐに', reason: '「すぐに」表示馬上，與「3年」矛盾。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「やっと」表示「終於」',
            analysis: '「やっと」表示經過長時間的努力或等待後，終於實現了，帶有喜悅感。',
            comparisons: ['やっと合格した：終於及格了（喜悅）', 'ようやく合格した：好不容易及格了（較書面）'],
            commonMistakes: ['「やっと」＝「ようやく」意思相同，但「やっと」更口語'],
        },
    },
    // ━━━ ずっと ━━━
    {
        id: 'g_n4_111', category: 'grammar', level: 'N4', tags: ['adverb', 'zutto'],
        stem: '子供{こども}の時{とき}から___ピアノを弾{ひ}いている。',
        stemZh: '從小時候就一直在彈鋼琴。',
        options: [
            { text: 'ずっと', reason: '正確！「ずっと」表示持續不斷（一直）。' },
            { text: 'やっと', reason: '「やっと」表示終於，不是持續。' },
            { text: 'そろそろ', reason: '「そろそろ」表示差不多該，語意不同。' },
            { text: 'すぐに', reason: '「すぐに」表示馬上，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ずっと」表示「一直」',
            analysis: '「ずっと」表示從某個時間點起持續到現在，或程度上相差很多。',
            comparisons: ['ずっと弾いている：一直在彈（持續）', 'ずっと大きい：大得多（程度差）'],
            commonMistakes: ['「ずっと」有兩個意思：一直（時間持續）/ ...得多（程度差距）'],
        },
    },
    // ━━━ あまり〜ない ━━━
    {
        id: 'g_n4_112', category: 'grammar', level: 'N4', tags: ['adverb', 'amari-nai'],
        stem: '最近{さいきん}、___テレビを見{み}ません。',
        stemZh: '最近不太看電視。',
        options: [
            { text: 'あまり', reason: '正確！「あまり〜ない」表示不太...。' },
            { text: 'ぜんぜん', reason: '「ぜんぜん」表示完全不...，程度過強。' },
            { text: 'なかなか', reason: '「なかなか」表示怎麼也不...，強調困難。' },
            { text: 'きっと', reason: '「きっと」表示一定，不搭配否定表達頻率。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「あまり〜ない」表示「不太」',
            analysis: '「あまり」搭配否定表示頻率或程度不高。',
            comparisons: ['あまり見ない：不太看（稍微）', 'ぜんぜん見ない：完全不看（完全）'],
            commonMistakes: ['否定程度：あまり〜ない < ぜんぜん〜ない'],
        },
    },
    // ━━━ ぜんぜん ━━━
    {
        id: 'g_n4_113', category: 'grammar', level: 'N4', tags: ['adverb', 'zenzen'],
        stem: 'その映画{えいが}は___面白{おもしろ}くなかった。',
        stemZh: '那部電影完全不有趣。',
        options: [
            { text: 'ぜんぜん', reason: '正確！「ぜんぜん〜ない」表示完全不...。' },
            { text: 'あまり', reason: '「あまり」表示不太，程度較輕。' },
            { text: 'なかなか', reason: '「なかなか」表示不容易，語感不同。' },
            { text: 'ちょっと', reason: '「ちょっと」表示有點，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ぜんぜん〜ない」表示完全不',
            analysis: '「ぜんぜん」搭配否定表示完全否定。口語中也可搭配肯定表示「非常」。',
            comparisons: ['ぜんぜん面白くない：完全不有趣（否定）', 'ぜんぜん大丈夫：完全沒問題（口語肯定）'],
            commonMistakes: ['傳統用法搭配否定 / 口語可搭配肯定：ぜんぜんいい＝完全沒問題'],
        },
    },
    // ━━━ とおり ━━━
    {
        id: 'g_n4_114', category: 'grammar', level: 'N4', tags: ['manner', 'toori'],
        stem: '先生{せんせい}が言{い}った___にしてください。',
        stemZh: '請照老師說的做。',
        options: [
            { text: 'とおり', reason: '正確！「とおり」表示「按照...」。' },
            { text: 'ように', reason: '「ように」表示「像...一樣」，但「とおり」更精確。' },
            { text: 'ために', reason: '「ために」表示目的，語意不同。' },
            { text: 'まま', reason: '「まま」表示保持狀態，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とおり」表示「按照」',
            analysis: '「V-た＋とおりに」或「N＋のとおりに」表示按照某種方式或指示去做。',
            comparisons: ['言ったとおりにする：照說的做', '思ったとおりだ：果然如想像的'],
            commonMistakes: ['動詞接「た＋とおり」/ 名詞接「の＋とおり」'],
        },
    },
    // ━━━ ように / ような ━━━
    {
        id: 'g_n4_115', category: 'grammar', level: 'N4', tags: ['comparison', 'you-na'],
        stem: '彼女{かのじょ}は花{はな}の___きれいだ。',
        stemZh: '她像花一樣漂亮。',
        options: [
            { text: 'ように', reason: '正確！「ように」表示比喻（像...一樣）。' },
            { text: 'みたいに', reason: '「みたいに」也正確，但較口語。' },
            { text: 'とおりに', reason: '「とおりに」表示按照，不是比喻。' },
            { text: 'ために', reason: '「ために」表示目的，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ように」表示比喻',
            analysis: '「N＋のように」表示像某物一樣，用於比喻。修飾名詞用「ような」。',
            comparisons: ['花のようにきれい：像花一樣漂亮（修飾形容詞）', '花のような人：像花一樣的人（修飾名詞）'],
            commonMistakes: ['修飾動詞/形容詞：ように / 修飾名詞：ような'],
        },
    },
    // ━━━ みたいに ━━━
    {
        id: 'g_n4_116', category: 'grammar', level: 'N4', tags: ['comparison', 'mitai-ni'],
        stem: '子供{こども}___泣{な}かないでください。',
        stemZh: '請不要像小孩一樣哭。',
        options: [
            { text: 'みたいに', reason: '正確！「みたいに」是口語版的「ように」，表示「像...一樣」。' },
            { text: 'ように', reason: '「ように」也正確，但較書面語。' },
            { text: 'として', reason: '「として」表示身份，不是比喻。' },
            { text: 'にとって', reason: '「にとって」表示「對...而言」，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「みたいに」口語比喻',
            analysis: '「N＋みたいに」是「のように」的口語形式，用於比喻。',
            comparisons: ['子供みたいに：像小孩一樣（口語）', '子供のように：像小孩一樣（書面語）'],
            commonMistakes: ['「みたいに」口語 / 「のように」書面語 → 意思相同'],
        },
    },
    // ━━━ がする ━━━
    {
        id: 'g_n4_117', category: 'grammar', level: 'N4', tags: ['sensation', 'ga-suru'],
        stem: '隣{となり}の部屋{へや}からいい匂{にお}い___する。',
        stemZh: '隔壁房間傳來好聞的味道。',
        options: [
            { text: 'が', reason: '正確！「匂いがする」表示感覺到某種氣味。' },
            { text: 'を', reason: '「匂いをする」語法錯誤，感覺用「がする」。' },
            { text: 'に', reason: '「匂いにする」語法錯誤。' },
            { text: 'は', reason: '「匂いはする」可以用於對比，但基本形式用「が」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「がする」表示感覺到',
            analysis: '「N＋がする」用於感官感覺：聲音、氣味、味道、感覺等。',
            comparisons: ['匂いがする：聞到氣味', '音がする：聽到聲音', '味がする：嚐到味道'],
            commonMistakes: ['感官知覺用「がする」：○ 匂いがする / × 匂いをする'],
        },
    },
    // ━━━ にみえる ━━━
    {
        id: 'g_n4_118', category: 'grammar', level: 'N4', tags: ['appearance', 'ni-mieru'],
        stem: 'あの人{ひと}は若{わか}く___。',
        stemZh: '那個人看起來很年輕。',
        options: [
            { text: '見{み}える', reason: '正確！「Adj-く＋見える」表示看起來...。' },
            { text: '見{み}る', reason: '「見る」是看的動作，不是看起來。' },
            { text: '見{み}せる', reason: '「見せる」是給人看，不是看起來。' },
            { text: '見{み}える', reason: '重複選項' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「見える」表示看起來',
            analysis: '「い形容詞-く＋見える」或「な形容詞-に＋見える」表示外觀上看起來...。',
            comparisons: ['若く見える：看起來年輕（い形容詞）', '元気に見える：看起來有精神（な形容詞）'],
            commonMistakes: ['い形接「く見える」/ な形接「に見える」'],
        },
    },
    // ━━━ のに（目的） ━━━
    {
        id: 'g_n4_119', category: 'grammar', level: 'N4', tags: ['purpose', 'noni-purpose'],
        stem: 'この道具{どうぐ}は料理{りょうり}を作{つく}る___便利{べんり}です。',
        stemZh: '這個工具用來做菜很方便。',
        options: [
            { text: 'のに', reason: '正確！「のに」可表示用途或目的。' },
            { text: 'ために', reason: '「ために」也表目的，但此處強調用途，「のに」更自然。' },
            { text: 'ように', reason: '「ように」接非意志動詞，此處不適合。' },
            { text: 'から', reason: '「から」表示原因，不是用途。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「のに」表示用途',
            analysis: '「V辭書形＋のに」除了表示逆接，還可以表示用途（用來做...）。',
            comparisons: ['作るのに便利：用來做菜很方便（用途）', '作ったのに食べない：做了卻不吃（逆接）'],
            commonMistakes: ['「のに」：用途（...很方便/需要）vs 逆接（明明...卻）→ 靠語境判斷'],
        },
    },
    // ━━━ ちゃんと ━━━
    {
        id: 'g_n4_120', category: 'grammar', level: 'N4', tags: ['adverb', 'chanto'],
        stem: '出{で}かける前{まえ}に___戸締{とじ}まりをしてください。',
        stemZh: '出門前請好好地鎖門。',
        options: [
            { text: 'ちゃんと', reason: '正確！「ちゃんと」表示好好地、確實地做某事。' },
            { text: 'だいたい', reason: '「だいたい」表示大概，不是確實。' },
            { text: 'ちょっと', reason: '「ちょっと」表示稍微，語意不同。' },
            { text: 'なんとなく', reason: '「なんとなく」表示不知為何，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ちゃんと」表示確實地',
            analysis: '「ちゃんと」是口語副詞，表示好好地、確實地、認真地做某事。',
            comparisons: ['ちゃんとする：好好做', 'きちんとする：規矩地做（較正式）'],
            commonMistakes: ['「ちゃんと」口語 / 「きちんと」較正式 → 意思相近'],
        },
    },
    // ━━━ ちょっと ━━━
    {
        id: 'g_n4_121', category: 'grammar', level: 'N4', tags: ['adverb', 'chotto'],
        stem: 'すみません、今{いま}___忙{いそが}しいんですが。',
        stemZh: '不好意思，現在有點忙。（委婉拒絕）',
        options: [
            { text: 'ちょっと', reason: '正確！「ちょっと」用於委婉拒絕時表示「不太方便」。' },
            { text: 'とても', reason: '「とても」表示非常，語意不同。' },
            { text: 'あまり', reason: '「あまり」搭配否定，此處是肯定句。' },
            { text: 'ぜんぜん', reason: '「ぜんぜん」表示完全，語意過強。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ちょっと」委婉拒絕',
            analysis: '「ちょっと」除了表示「稍微」，也常用於委婉地拒絕或表示不方便。',
            comparisons: ['ちょっと忙しい：有點忙（委婉拒絕）', 'ちょっと待って：稍等（請求）'],
            commonMistakes: ['「ちょっと」用於委婉拒絕時，後面常省略理由'],
        },
    },
    // ━━━ 〜方（かた） ━━━
    {
        id: 'g_n4_122', category: 'grammar', level: 'N4', tags: ['method', 'kata'],
        stem: 'この機械{きかい}の使{つか}い___を教{おし}えてください。',
        stemZh: '請教我這台機器的使用方法。',
        options: [
            { text: '方{かた}', reason: '正確！「V連用形＋方」表示做某事的方法。' },
            { text: 'よう', reason: '「よう」表示樣子，不是方法。' },
            { text: 'ほう', reason: '「ほう」用於比較（ほうがいい），不是方法。' },
            { text: 'もの', reason: '「もの」表示東西，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「〜方」表示方法',
            analysis: '「V連用形＋方」表示做某事的方法或方式。讀作「かた」。',
            comparisons: ['使い方：使用方法', '読み方：讀法', '書き方：寫法'],
            commonMistakes: ['「方」讀「かた」表方法 / 「ほう」表方向或比較'],
        },
    },
    // ━━━ くらい/ぐらい ━━━
    {
        id: 'g_n4_123', category: 'grammar', level: 'N4', tags: ['approximation', 'kurai'],
        stem: '東京{とうきょう}から大阪{おおさか}まで新幹線{しんかんせん}で2時間{じかん}半{はん}___かかります。',
        stemZh: '從東京到大阪搭新幹線大約要2個半小時。',
        options: [
            { text: 'ぐらい', reason: '正確！「ぐらい」表示大約的程度或數量。' },
            { text: 'ほど', reason: '「ほど」也表示程度，但「ぐらい」更口語。' },
            { text: 'だけ', reason: '「だけ」表示僅僅，不是大約。' },
            { text: 'まで', reason: '「まで」表示到...為止，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「くらい/ぐらい」表示大約',
            analysis: '「くらい」「ぐらい」接在數量後面表示大約的數量或程度。',
            comparisons: ['2時間ぐらい：大約2小時', '2時間ほど：2小時左右（較書面）'],
            commonMistakes: ['「くらい」＝「ぐらい」意思相同，「ぐらい」更口語'],
        },
    },
    // ━━━ 頃 ━━━
    {
        id: 'g_n4_124', category: 'grammar', level: 'N4', tags: ['time', 'koro'],
        stem: '高校生{こうこうせい}の___、毎日{まいにち}サッカーをしていた。',
        stemZh: '高中的時候，每天都在踢足球。',
        options: [
            { text: '頃{ころ}', reason: '正確！「頃」表示大約某個時期。' },
            { text: '時{とき}', reason: '「時」也表示時候，但「頃」更強調回憶中的時期。' },
            { text: '間{あいだ}', reason: '「間」表示期間，語感不同。' },
            { text: '前{まえ}', reason: '「前」表示之前，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「頃」表示某個時期',
            analysis: '「N＋の頃」表示大約某個時期，常用於回憶過去。',
            comparisons: ['高校生の頃：高中的時候（回憶）', '高校生の時：高中的時候（一般）'],
            commonMistakes: ['「頃」常用於回憶 / 「時」較為一般性'],
        },
    },
    // ━━━ おきに ━━━
    {
        id: 'g_n4_125', category: 'grammar', level: 'N4', tags: ['interval', 'oki-ni'],
        stem: 'この薬{くすり}は4時間{じかん}___飲{の}んでください。',
        stemZh: '這個藥請每隔4個小時吃一次。',
        options: [
            { text: 'おきに', reason: '正確！「おきに」表示每隔...。' },
            { text: 'ごとに', reason: '「ごとに」表示每...，但此處是間隔。' },
            { text: 'までに', reason: '「までに」表示截止期限，語意不同。' },
            { text: 'くらい', reason: '「くらい」表示大約，不是間隔。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「おきに」表示每隔',
            analysis: '「數量＋おきに」表示每隔一定的時間或距離重複做某事。',
            comparisons: ['4時間おきに飲む：每隔4小時吃', '毎日飲む：每天吃'],
            commonMistakes: ['「おきに」：每隔... / 「ごとに」：每...'],
        },
    },
    // ━━━ ほかに ━━━
    {
        id: 'g_n4_126', category: 'grammar', level: 'N4', tags: ['addition', 'hoka-ni'],
        stem: '日本語{にほんご}の___、英語{えいご}も話{はな}せます。',
        stemZh: '除了日語之外，英語也會說。',
        options: [
            { text: 'ほかに', reason: '正確！「ほかに」表示除了...之外（還有）。' },
            { text: '以外{いがい}に', reason: '「以外に」表示除了...之外，語感略有不同。' },
            { text: 'について', reason: '「について」表示關於，語意不同。' },
            { text: 'にとって', reason: '「にとって」表示對...而言，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ほかに」表示除了...之外',
            analysis: '「Nのほかに」表示除了N之外還有其他的東西或能力。',
            comparisons: ['日本語のほかに英語も話せる：除了日語還會英語', '日本語以外に英語も話せる：日語以外還會英語'],
            commonMistakes: ['「ほかに」≈「以外に」意思相近，「ほかに」更口語'],
        },
    },
    // ━━━ 以外 ━━━
    {
        id: 'g_n4_127', category: 'grammar', level: 'N4', tags: ['exclusion', 'igai'],
        stem: '肉{にく}___は何{なん}でも食{た}べられます。',
        stemZh: '除了肉以外什麼都能吃。',
        options: [
            { text: '以外{いがい}', reason: '正確！「以外」表示除了...之外。' },
            { text: 'ほか', reason: '「ほか」也表示除了，但接法不同。' },
            { text: 'だけ', reason: '「だけ」表示只有，語意不同。' },
            { text: 'しか', reason: '「しか」搭配否定，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「以外」表示排除',
            analysis: '「N＋以外」表示把N排除在外，其他都包含在內。',
            comparisons: ['肉以外は食べられる：除了肉都能吃', '肉だけ食べられない：只有肉不能吃'],
            commonMistakes: ['「以外」：排除某項 / 「だけ」：限定某項'],
        },
    },
    // ━━━ など ━━━
    {
        id: 'g_n4_128', category: 'grammar', level: 'N4', tags: ['listing', 'nado'],
        stem: '休{やす}みの日{ひ}は映画{えいが}や読書{どくしょ}___をしています。',
        stemZh: '休假日會看電影、讀書等等。',
        options: [
            { text: 'など', reason: '正確！「など」表示列舉幾個例子，暗示還有其他。' },
            { text: 'だけ', reason: '「だけ」表示只有，不是列舉。' },
            { text: 'しか', reason: '「しか」搭配否定，語法不合。' },
            { text: 'ばかり', reason: '「ばかり」表示淨是，帶有不滿語氣。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「など」表示列舉（等等）',
            analysis: '「など」接在名詞後面表示舉出幾個例子，暗示還有其他類似的事物。',
            comparisons: ['映画や読書など：電影和讀書等（書面語）', '映画とか読書とか：電影啦讀書啦（口語）'],
            commonMistakes: ['「など」較書面 / 「とか」較口語'],
        },
    },
    // ━━━ 予定 ━━━
    {
        id: 'g_n4_129', category: 'grammar', level: 'N4', tags: ['plan', 'yotei'],
        stem: '来月{らいげつ}日本{にほん}に行{い}く___です。',
        stemZh: '預定下個月去日本。',
        options: [
            { text: '予定{よてい}', reason: '正確！「予定」表示預定的計劃。' },
            { text: 'つもり', reason: '「つもり」表示個人打算，「予定」更正式。' },
            { text: 'はず', reason: '「はず」表示應該，不是計劃。' },
            { text: 'ところ', reason: '「ところ」表示時間點，不是計劃。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「予定」表示預定計劃',
            analysis: '「V辭書形＋予定です」表示有預定的計劃或安排。',
            comparisons: ['行く予定です：預定要去（正式計劃）', '行くつもりです：打算要去（個人意圖）'],
            commonMistakes: ['「予定」：正式安排 / 「つもり」：個人打算'],
        },
    },
    // ━━━ つもり ━━━
    {
        id: 'g_n4_130', category: 'grammar', level: 'N4', tags: ['intention', 'tsumori'],
        stem: '今年{ことし}中{ちゅう}にN3に合格{ごうかく}する___です。',
        stemZh: '打算在今年內通過N3。',
        options: [
            { text: 'つもり', reason: '正確！「つもり」表示個人的打算或意圖。' },
            { text: '予定{よてい}', reason: '「予定」更正式，此處是個人決心，用「つもり」。' },
            { text: 'はず', reason: '「はず」表示應該，不是打算。' },
            { text: 'ところ', reason: '「ところ」表示時間點，不是打算。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「つもり」表示打算',
            analysis: '「V辭書形＋つもり」表示說話者的打算或意圖。否定用「V-ないつもり」。',
            comparisons: ['合格するつもりだ：打算考上（意圖）', '合格する予定だ：預定考上（安排）'],
            commonMistakes: ['○ 行かないつもりだ / × 行くつもりではない → 否定動詞＋つもり'],
        },
    },
    // ━━━ たり〜たり ━━━
    {
        id: 'g_n4_131', category: 'grammar', level: 'N4', tags: ['listing', 'tari-tari'],
        stem: '週末{しゅうまつ}は掃除{そうじ}し___、洗濯{せんたく}し___しています。',
        stemZh: '週末會做做打掃啦、洗衣服之類的。',
        options: [
            { text: 'たり…たり', reason: '正確！「たり〜たり」列舉代表性的動作。' },
            { text: 'て…て', reason: '「て形」是順序列舉，不是代表性列舉。' },
            { text: 'ながら…ながら', reason: '「ながら」是同時進行，不是列舉。' },
            { text: 'たら…たら', reason: '「たら」是條件形，不用於列舉。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たり〜たり」代表性列舉',
            analysis: '「V-たり V-たりする」列舉幾個代表性動作，暗示還有其他。',
            comparisons: ['掃除したり洗濯したりする：做做打掃做做洗衣等', '掃除して洗濯する：打掃然後洗衣（順序）'],
            commonMistakes: ['「たり〜たり」最後要加「する」'],
        },
    },
    // ━━━ ではないか ━━━
    {
        id: 'g_n4_132', category: 'grammar', level: 'N4', tags: ['confirmation', 'dewa-nai-ka'],
        stem: 'この料理{りょうり}、おいしい___。',
        stemZh: '這道菜，不是很好吃嗎？',
        options: [
            { text: 'ではないか', reason: '正確！「ではないか」表示確認或感嘆（不是...嗎？）。' },
            { text: 'かもしれない', reason: '「かもしれない」表示也許，不是確認。' },
            { text: 'らしい', reason: '「らしい」表示好像，不是確認。' },
            { text: 'そうだ', reason: '「そうだ」表示聽說或看起來，不是確認。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ではないか」確認或感嘆',
            analysis: '「ではないか」用於確認共識或表示驚訝的發現。口語用「じゃないか」。',
            comparisons: ['おいしいではないか：不是很好吃嗎（發現/確認）', 'おいしいじゃん：很好吃啊（口語感嘆）'],
            commonMistakes: ['書面語：ではないか / 口語：じゃないか / 很口語：じゃん'],
        },
    },
    // ━━━ 必要がある ━━━
    {
        id: 'g_n4_133', category: 'grammar', level: 'N4', tags: ['necessity', 'hitsuyou-ga-aru'],
        stem: 'ビザを延長{えんちょう}する___があります。',
        stemZh: '有必要延長簽證。',
        options: [
            { text: '必要{ひつよう}', reason: '正確！「V辭書形＋必要がある」表示有必要做某事。' },
            { text: 'つもり', reason: '「つもり」表示打算，不是必要。' },
            { text: '予定{よてい}', reason: '「予定」表示計劃，不是必要性。' },
            { text: 'こと', reason: '「ことがある」表示有時候，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「必要がある」表示有必要',
            analysis: '「V辭書形＋必要がある」表示需要做某事，較為正式的表達方式。',
            comparisons: ['延長する必要がある：有必要延長（正式）', '延長しなければならない：必須延長（義務）'],
            commonMistakes: ['「必要がある」：有必要（正式）/ 「なければならない」：必須（義務）'],
        },
    },
    // ━━━ 意向形 ━━━
    {
        id: 'g_n4_134', category: 'grammar', level: 'N4', tags: ['volitional', 'ikou-kei'],
        stem: '一緒{いっしょ}に映画{えいが}を見{み}___。',
        stemZh: '一起看電影吧。',
        options: [
            { text: 'よう', reason: '正確！一段動詞「見る」的意向形是「見よう」。' },
            { text: 'ましょう', reason: '「見ましょう」是丁寧版，但此處用普通形。' },
            { text: 'たい', reason: '「見たい」表示想看，不是邀約。' },
            { text: 'ろう', reason: '五段動詞才用「ろう」，一段動詞用「よう」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '意向形表示邀約或決心',
            analysis: '一段動詞去「る」加「よう」：見る→見よう。表示「一起...吧」或「我要...」。',
            comparisons: ['見よう：看吧（普通形意向）', '見ましょう：看吧（丁寧形意向）'],
            commonMistakes: ['一段動詞：よう（見よう）/ 五段動詞：おう段（行こう）/ する→しよう / 来る→来よう'],
        },
    },
    // ━━━ さ（名詞化） ━━━
    {
        id: 'g_n4_135', category: 'grammar', level: 'N4', tags: ['nominalization', 'sa'],
        stem: 'この山{やま}の高{たか}___は3776メートルです。',
        stemZh: '這座山的高度是3776公尺。',
        options: [
            { text: 'さ', reason: '正確！い形容詞去「い」加「さ」將其名詞化。' },
            { text: 'み', reason: '「高み」表示高處，不是數值的高度。' },
            { text: 'く', reason: '「高く」是副詞形式，不是名詞。' },
            { text: 'い', reason: '「高い」是形容詞原形，不是名詞。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「さ」將い形容詞名詞化',
            analysis: 'い形容詞去「い」加「さ」：高い→高さ。表示可測量的程度或數值。',
            comparisons: ['高さ：高度（數值）', '高み：高處（場所）', '長さ：長度', '広さ：面積'],
            commonMistakes: ['「さ」：可測量的數值（高さ、長さ）/ 「み」：感覺或場所（深み、高み）'],
        },
    },
    // ━━━ 終わる ━━━
    {
        id: 'g_n4_136', category: 'grammar', level: 'N4', tags: ['auxiliary', 'owaru'],
        stem: 'やっと宿題{しゅくだい}を書{か}き___。',
        stemZh: '終於把作業寫完了。',
        options: [
            { text: '終{お}わった', reason: '正確！「V連用形＋終わる」表示做完某事。' },
            { text: '始{はじ}めた', reason: '「始める」表示開始，語意相反。' },
            { text: '出{だ}した', reason: '「出す」表示突然開始，語意不同。' },
            { text: '続{つづ}けた', reason: '「続ける」表示繼續做，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「終わる」表示完成',
            analysis: '「V連用形＋終わる」表示某個動作完全結束。',
            comparisons: ['書き終わった：寫完了', '読み終わった：讀完了'],
            commonMistakes: ['「終わる」：結束（自然完成）/ 「てしまう」：完成（可能帶遺憾）'],
        },
    },
    // ━━━ こと（名詞化） ━━━
    {
        id: 'g_n4_137', category: 'grammar', level: 'N4', tags: ['nominalization', 'koto'],
        stem: '日本語{にほんご}を話{はな}す___は楽{たの}しい。',
        stemZh: '說日語很快樂。',
        options: [
            { text: 'こと', reason: '正確！「こと」將動詞名詞化，使其能當主語。' },
            { text: 'もの', reason: '「もの」指具體的東西，不適合動詞名詞化。' },
            { text: 'ところ', reason: '「ところ」表示地方或時間點，不是名詞化。' },
            { text: 'はず', reason: '「はず」表示應該，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「こと」動詞名詞化',
            analysis: '「V辭書形＋こと」將動詞短語名詞化，使其能作為句子的主語或受詞。',
            comparisons: ['話すことは楽しい：說話很快樂（名詞化）', '話すのは楽しい：說話很快樂（口語）'],
            commonMistakes: ['「こと」較正式 / 「の」較口語 → 名詞化功能相同'],
        },
    },
    // ━━━ と言ってもいい ━━━
    {
        id: 'g_n4_138', category: 'grammar', level: 'N4', tags: ['expression', 'to-ittemo-ii'],
        stem: '彼女{かのじょ}は天才{てんさい}だ___いいでしょう。',
        stemZh: '可以說她是天才吧。',
        options: [
            { text: 'と言{い}っても', reason: '正確！「と言ってもいい」表示「可以說是...」。' },
            { text: 'と言{い}えば', reason: '「と言えば」表示說到...，語意不同。' },
            { text: 'と言{い}ったら', reason: '「と言ったら」表示如果說，語意不同。' },
            { text: 'と言{い}って', reason: '「と言って」表示說了...之後，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「と言ってもいい」表示「可以說是」',
            analysis: '「と言ってもいい」表示用某種方式來概括或評價某事是合適的。',
            comparisons: ['天才だと言ってもいい：可以說是天才', '天才だと言われている：被稱為天才'],
            commonMistakes: ['「と言ってもいい」：主觀評價 / 「と言われている」：一般認知'],
        },
    },
    // ━━━ と言われている ━━━
    {
        id: 'g_n4_139', category: 'grammar', level: 'N4', tags: ['hearsay', 'to-iwarete-iru'],
        stem: '京都{きょうと}は日本{にほん}で一番{いちばん}美{うつく}しい町{まち}だ___いる。',
        stemZh: '京都被認為是日本最美的城市。',
        options: [
            { text: 'と言{い}われて', reason: '正確！「と言われている」表示一般性的看法（被認為...）。' },
            { text: 'と思{おも}われて', reason: '「と思われている」也可以，但「言われている」更常見。' },
            { text: 'と聞{き}いて', reason: '「と聞いている」表示聽說，但不是一般性認知。' },
            { text: 'と考{かんが}えて', reason: '「と考えている」表示正在思考，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「と言われている」表示普遍認知',
            analysis: '「と言われている」表示一般人普遍這樣認為，是客觀的傳達方式。',
            comparisons: ['と言われている：被認為是（普遍認知）', 'と聞いた：我聽說（個人所聞）'],
            commonMistakes: ['「と言われている」：普遍認知 / 「と言った」：某人說了'],
        },
    },
    // ━━━ と聞いた ━━━
    {
        id: 'g_n4_140', category: 'grammar', level: 'N4', tags: ['hearsay', 'to-kiita'],
        stem: '来週{らいしゅう}テストがある___聞{き}いたんですが、本当{ほんとう}ですか。',
        stemZh: '我聽說下週有考試，是真的嗎？',
        options: [
            { text: 'と', reason: '正確！「と聞いた」表示引用聽到的內容。' },
            { text: 'を', reason: '「を聞いた」語法不合，引用用「と」。' },
            { text: 'に', reason: '「に聞いた」表示向某人問，語法不同。' },
            { text: 'で', reason: '「で聞いた」表示在某處聽到，不是引用。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「と聞いた」表示聽說',
            analysis: '「〜と聞いた」表示從別人那裡聽到某個消息。',
            comparisons: ['テストがあると聞いた：聽說有考試（引用內容）', '友達に聞いた：向朋友問了（問的對象）'],
            commonMistakes: ['引用內容用「と聞いた」/ 詢問對象用「に聞いた」'],
        },
    },
    // ━━━ ということ ━━━
    {
        id: 'g_n4_141', category: 'grammar', level: 'N4', tags: ['explanation', 'to-iu-koto'],
        stem: '「N4に合格{ごうかく}した」___は、もう初級{しょきゅう}ではない___です。',
        stemZh: '「通過了N4」這件事，就是說已經不是初級了。',
        options: [
            { text: 'ということ…ということ', reason: '正確！「ということ」表示「就是說」「意味著」。' },
            { text: 'というの…というの', reason: '「というの」也可以，但「ということ」更正式。' },
            { text: 'と言って…と言って', reason: '語法不合。' },
            { text: 'と思って…と思って', reason: '「と思って」表示認為，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ということ」表示「就是說」',
            analysis: '「ということ」用於解釋或換句話說，表示某事的意義。',
            comparisons: ['合格したということは：通過了這件事意味著', '合格したということだ：據說通過了（傳聞）'],
            commonMistakes: ['「ということは」：意味著 / 「ということだ」：據說（傳聞）'],
        },
    },
    // ━━━ って（口語引用） ━━━
    {
        id: 'g_n4_142', category: 'grammar', level: 'N4', tags: ['quotation', 'tte'],
        stem: '田中{たなか}さんが明日{あした}来{く}る___。',
        stemZh: '田中先生說明天來。',
        options: [
            { text: 'って', reason: '正確！「って」是「と言っていた」的口語縮略形。' },
            { text: 'と', reason: '「と」需要後面接「言っていた」等動詞。' },
            { text: 'よ', reason: '「よ」是語氣助詞，不是引用。' },
            { text: 'ね', reason: '「ね」是確認助詞，不是引用。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「って」口語引用',
            analysis: '「って」是「と」的口語形式，可以代替「と言った」「と聞いた」等。',
            comparisons: ['来るって：（他）說要來（口語）', '来ると言っていた：（他）說要來（正式）'],
            commonMistakes: ['「って」是口語，正式場合用「と言った」「と聞いた」'],
        },
    },
    // ━━━ ても（讓步形容詞） ━━━
    {
        id: 'g_n4_143', category: 'grammar', level: 'N4', tags: ['concession', 'temo-adj'],
        stem: 'いくら高{たか}く___、あの時計{とけい}が欲{ほ}しい。',
        stemZh: '不管多貴，都想要那隻手錶。',
        options: [
            { text: 'ても', reason: '正確！「い形-くても」表示讓步（即使...也）。' },
            { text: 'たら', reason: '「高かったら」是條件，不是讓步。' },
            { text: 'て', reason: '「高くて」是原因或接續，不是讓步。' },
            { text: 'から', reason: '「高いから」表示原因，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: 'い形容詞的讓步「くても」',
            analysis: 'い形容詞去「い」加「くても」表示讓步：高い→高くても。',
            comparisons: ['高くても買う：即使貴也要買（讓步）', '高かったら買わない：如果貴就不買（條件）'],
            commonMistakes: ['い形：くても / な形：でも / 名詞：でも'],
        },
    },
    // ━━━ また/または ━━━
    {
        id: 'g_n4_144', category: 'grammar', level: 'N4', tags: ['conjunction', 'matawa'],
        stem: 'メール___電話{でんわ}でご連絡{れんらく}ください。',
        stemZh: '請用電子郵件或電話聯絡。',
        options: [
            { text: 'または', reason: '正確！「または」表示「或者」（二選一）。' },
            { text: 'そして', reason: '「そして」表示「然後」，不是選擇。' },
            { text: 'しかし', reason: '「しかし」表示「但是」，不是選擇。' },
            { text: 'それで', reason: '「それで」表示「所以」，不是選擇。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「または」表示「或者」',
            analysis: '「または」是書面語的「或者」，口語常用「か」。',
            comparisons: ['メールまたは電話：電子郵件或電話（書面語）', 'メールか電話：電子郵件或電話（口語）'],
            commonMistakes: ['「または」：書面語 / 「か」：口語 → 都表示「或者」'],
        },
    },
    // ━━━ それに ━━━
    {
        id: 'g_n4_145', category: 'grammar', level: 'N4', tags: ['conjunction', 'sore-ni'],
        stem: 'この店{みせ}は安{やす}い。___おいしい。',
        stemZh: '這家店便宜。而且好吃。',
        options: [
            { text: 'それに', reason: '正確！「それに」表示追加（而且）。' },
            { text: 'しかし', reason: '「しかし」表示轉折（但是），語意相反。' },
            { text: 'それで', reason: '「それで」表示因果（所以），語意不同。' },
            { text: 'でも', reason: '「でも」表示轉折（但是），語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「それに」表示追加',
            analysis: '「それに」用於追加同方向的資訊，表示「而且」「再說」。',
            comparisons: ['安い。それにおいしい：便宜。而且好吃（追加正面）', '安い。しかしまずい：便宜。但是難吃（轉折）'],
            commonMistakes: ['「それに」：追加同方向 / 「しかし」「でも」：轉折'],
        },
    },
    // ━━━ それで ━━━
    {
        id: 'g_n4_146', category: 'grammar', level: 'N4', tags: ['conjunction', 'sorede'],
        stem: '電車{でんしゃ}が遅{おく}れました。___遅刻{ちこく}しました。',
        stemZh: '電車誤點了。所以遲到了。',
        options: [
            { text: 'それで', reason: '正確！「それで」表示因此、所以。' },
            { text: 'それに', reason: '「それに」表示追加，不是因果。' },
            { text: 'しかし', reason: '「しかし」表示轉折，語意相反。' },
            { text: 'ところで', reason: '「ところで」表示轉換話題，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「それで」表示因果',
            analysis: '「それで」連接前後兩個句子，表示前者是原因、後者是結果。',
            comparisons: ['電車が遅れた。それで遅刻した：電車誤點。所以遲到了（因果）', '電車が遅れた。だから遅刻した：（同義）'],
            commonMistakes: ['「それで」≈「だから」：都表因果 / 「それで」較書面'],
        },
    },
    // ━━━ それでも ━━━
    {
        id: 'g_n4_147', category: 'grammar', level: 'N4', tags: ['conjunction', 'sore-demo'],
        stem: '何度{なんど}も失敗{しっぱい}した。___あきらめない。',
        stemZh: '失敗了很多次。即使如此也不放棄。',
        options: [
            { text: 'それでも', reason: '正確！「それでも」表示「即使如此」「儘管如此」。' },
            { text: 'それで', reason: '「それで」表示因果（所以），語意不同。' },
            { text: 'それに', reason: '「それに」表示追加（而且），語意不同。' },
            { text: 'そして', reason: '「そして」表示順序（然後），語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「それでも」表示讓步',
            analysis: '「それでも」表示即使前述的情況存在，後面的事情仍然不變。',
            comparisons: ['失敗した。それでもあきらめない：失敗了。即使如此不放棄', '失敗した。それで辞めた：失敗了。所以辭了'],
            commonMistakes: ['「それでも」：讓步（即使如此）/ 「それで」：因果（所以）'],
        },
    },
    // ━━━ に気がつく ━━━
    {
        id: 'g_n4_148', category: 'grammar', level: 'N4', tags: ['awareness', 'ni-ki-ga-tsuku'],
        stem: '家{いえ}を出{で}てから、財布{さいふ}を忘{わす}れた___に気{き}がついた。',
        stemZh: '出了家門之後才注意到忘了帶錢包。',
        options: [
            { text: 'こと', reason: '正確！「ことに気がつく」表示注意到某件事。' },
            { text: 'もの', reason: '「ものに」不自然，「こと」用於抽象事件。' },
            { text: 'ところ', reason: '「ところに」表示正當那時，語意不同。' },
            { text: 'はず', reason: '「はず」表示應該，語法不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に気がつく」表示注意到',
            analysis: '「N/ことに気がつく」表示發現或注意到某事。',
            comparisons: ['忘れたことに気がついた：注意到忘了', '忘れたことに気づいた：注意到忘了（縮略形）'],
            commonMistakes: ['「気がつく」＝「気づく」意思相同'],
        },
    },
    // ━━━ まさか ━━━
    {
        id: 'g_n4_149', category: 'grammar', level: 'N4', tags: ['surprise', 'masaka'],
        stem: '___あの人{ひと}が犯人{はんにん}だったとは思{おも}わなかった。',
        stemZh: '沒想到那個人居然是犯人。',
        options: [
            { text: 'まさか', reason: '正確！「まさか」表示「難道」「不會吧」，用於意想不到的事。' },
            { text: 'やっぱり', reason: '「やっぱり」表示果然如預期，語意相反。' },
            { text: 'たしか', reason: '「たしか」表示如果沒記錯，語意不同。' },
            { text: 'きっと', reason: '「きっと」表示一定，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「まさか」表示意外',
            analysis: '「まさか」表示某事完全出乎意料，常搭配否定或「とは」。',
            comparisons: ['まさか犯人だとは：沒想到是犯人（意外）', 'やっぱり犯人だった：果然是犯人（預期）'],
            commonMistakes: ['「まさか」：意外 / 「やっぱり」：如預期'],
        },
    },
    // ━━━ たしか ━━━
    {
        id: 'g_n4_150', category: 'grammar', level: 'N4', tags: ['memory', 'tashika'],
        stem: '___あの店{みせ}は駅{えき}の近{ちか}くにあったと思{おも}う。',
        stemZh: '如果沒記錯的話，那家店在車站附近。',
        options: [
            { text: 'たしか', reason: '正確！「たしか」表示「如果沒記錯」「好像是」。' },
            { text: 'まさか', reason: '「まさか」表示意外，語意不同。' },
            { text: 'きっと', reason: '「きっと」表示一定，確信度太高。' },
            { text: 'たぶん', reason: '「たぶん」表示大概，但不強調記憶。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たしか」表示不確定的記憶',
            analysis: '「たしか」表示根據記憶，但不太確定，意為「如果沒記錯的話」。',
            comparisons: ['たしか駅の近くだった：好像是車站附近（不確定記憶）', 'きっと駅の近くだ：一定在車站附近（確信）'],
            commonMistakes: ['「たしか」：不確定記憶 / 「きっと」：強烈確信'],
        },
    },
]
