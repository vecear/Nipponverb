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
    // ━━━ ば〜ほど ━━━
    {
        id: 'g_n4_151', category: 'grammar', level: 'N4', tags: ['conditional', 'ba-hodo'],
        stem: '練習{れんしゅう}すれ___するほど、上手{じょうず}になる。',
        stemZh: '越練習就越拿手。',
        options: [
            { text: 'ば', reason: '正確！「すればするほど」表示越做越…。' },
            { text: 'たら', reason: '「たら」不搭配「ほど」構成遞進句型。' },
            { text: 'と', reason: '「すると」表示一旦做了就…，不表遞進。' },
            { text: 'なら', reason: '「なら」表假設前提，不構成遞進句型。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ば〜ほど」表示越…越…',
            analysis: '同一動詞重複使用，前用ば形後加ほど，表示程度隨動作增加。',
            comparisons: ['練習すればするほど上手になる：越練習越拿手', '食べれば食べるほど太る：越吃越胖'],
            commonMistakes: ['○ すればするほど / × したらするほど → 必須用ば形'],
        },
    },
    // ━━━ ばいい ━━━
    {
        id: 'g_n4_152', category: 'grammar', level: 'N4', tags: ['conditional', 'ba-ii'],
        stem: 'パスワードを忘{わす}れたら、どうす___いいですか。',
        stemZh: '如果忘了密碼，該怎麼辦才好？',
        options: [
            { text: 'れば', reason: '正確！「どうすればいい」表示該怎麼做才好。' },
            { text: 'ると', reason: '「どうすると」不構成建議句型。' },
            { text: 'るなら', reason: '「どうするなら」語法不自然。' },
            { text: 'ったら', reason: '「どうしたらいい」也可以，但此處空格在「す」後，應填「れば」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ばいい」表示只要做…就好',
            analysis: '「Vば＋いい」表示建議或最佳做法。疑問句中常用「どうすればいい」。',
            comparisons: ['どうすればいい：該怎麼做才好', 'どうしたらいい：該怎麼做才好（較口語）'],
            commonMistakes: ['「ばいい」和「たらいい」意思相近，但「ばいい」稍正式'],
        },
    },
    // ━━━ 場合は ━━━
    {
        id: 'g_n4_153', category: 'grammar', level: 'N4', tags: ['conditional', 'baai-wa'],
        stem: '地震{じしん}の___は、すぐにテーブルの下{した}に隠{かく}れてください。',
        stemZh: '發生地震的情況下，請立刻躲到桌子下面。',
        options: [
            { text: '場合{ばあい}', reason: '正確！「場合は」表示在某種情況下。' },
            { text: '時{とき}', reason: '「時」也可以，但此處考點是「場合は」。' },
            { text: 'ところ', reason: '「ところ」表示正在…，不適合此語境。' },
            { text: 'うち', reason: '「うち」表示趁著…，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「場合は」表示假設某種狀況',
            analysis: '「場合」比「時」更強調「萬一」或「特定情況」的語感。',
            comparisons: ['地震の場合は：地震的情況下（強調萬一）', '地震の時は：地震的時候（一般時間）'],
            commonMistakes: ['「場合」多用於規則說明或正式場合'],
        },
    },
    // ━━━ てあげる ━━━
    {
        id: 'g_n4_154', category: 'grammar', level: 'N4', tags: ['giving-receiving', 'te-ageru'],
        stem: '友達{ともだち}が道{みち}に迷{まよ}っていたので、駅{えき}まで送{おく}って___。',
        stemZh: '因為朋友迷路了，所以送他到車站。',
        options: [
            { text: 'あげた', reason: '正確！「てあげる」表示為他人做某事。' },
            { text: 'くれた', reason: '「くれた」表示他人為我做某事，方向相反。' },
            { text: 'もらった', reason: '「もらった」表示請別人做某事，主語不合。' },
            { text: 'おいた', reason: '「ておく」表示事先準備，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てあげる」表示為他人做事',
            analysis: '主語（我）為他人做事時用「てあげる」，恩惠的方向是從我到對方。',
            comparisons: ['送ってあげた：（我）送了他', '送ってくれた：（他）送了我', '送ってもらった：請他送（我）'],
            commonMistakes: ['○ 友達に教えてあげた / × 先生に教えてあげた → 對上位者用「てあげる」失禮'],
        },
    },
    // ━━━ てくれる ━━━
    {
        id: 'g_n4_155', category: 'grammar', level: 'N4', tags: ['giving-receiving', 'te-kureru'],
        stem: '母{はは}が毎朝{まいあさ}お弁当{べんとう}を作{つく}って___。',
        stemZh: '媽媽每天早上幫我做便當。',
        options: [
            { text: 'もらう', reason: '「もらう」的主語是受益者，但此句主語是母。' },
            { text: 'くれる', reason: '正確！「てくれる」表示他人為我做事，帶有感謝。' },
            { text: 'あげる', reason: '「あげる」表示我為他人做事，方向相反。' },
            { text: 'おく', reason: '「ておく」表示事先準備，不表恩惠。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「てくれる」表示他人為我做事',
            analysis: '當主語是他人、受益者是我（或我方）時，用「てくれる」表示感謝。',
            comparisons: ['母が作ってくれる：媽媽為我做（感謝）', '母に作ってもらう：請媽媽做（我是主語）'],
            commonMistakes: ['「くれる」主語是給予者 / 「もらう」主語是接受者'],
        },
    },
    // ━━━ てもらう ━━━
    {
        id: 'g_n4_156', category: 'grammar', level: 'N4', tags: ['giving-receiving', 'te-morau'],
        stem: '日本語{にほんご}の作文{さくぶん}を先生{せんせい}に直{なお}して___。',
        stemZh: '請老師幫我修改了日語作文。',
        options: [
            { text: 'あげた', reason: '「あげた」表示我為老師做事，方向相反。' },
            { text: 'くれた', reason: '「くれた」也可以，但此句用「先生に」表示請他人做。' },
            { text: 'もらった', reason: '正確！「Aに〜てもらう」表示請A幫忙做某事。' },
            { text: 'みた', reason: '「てみる」表示嘗試，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「てもらう」表示請他人幫忙做事',
            analysis: '「（人）に〜てもらう」表示請某人為我做某事，主語是受益者。',
            comparisons: ['先生に直してもらった：請老師修改（主語＝我）', '先生が直してくれた：老師幫我修改（主語＝老師）'],
            commonMistakes: ['「に〜てもらう」的「に」標記動作者，不是方向'],
        },
    },
    // ━━━ てしまう ━━━
    {
        id: 'g_n4_157', category: 'grammar', level: 'N4', tags: ['auxiliary', 'te-shimau'],
        stem: '大切{たいせつ}な写真{しゃしん}を間違{まちが}えて消{け}して___。',
        stemZh: '不小心把重要的照片刪掉了。',
        options: [
            { text: 'おいた', reason: '「ておく」表示事先做好，不表後悔。' },
            { text: 'みた', reason: '「てみる」表示嘗試，語意不同。' },
            { text: 'しまった', reason: '正確！「てしまう」表示不小心做了、遺憾。' },
            { text: 'いた', reason: '「ていた」表示持續狀態，語感不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「てしまう」表示遺憾或完了',
            analysis: '「てしまう」有兩個含義：①動作完了 ②不小心做了（遺憾）。此處表後悔。',
            comparisons: ['消してしまった：不小心刪了（後悔）', '食べてしまった：吃完了（完了）'],
            commonMistakes: ['口語中常縮略為「ちゃう/ちゃった」：消しちゃった'],
        },
    },
    // ━━━ ておく ━━━
    {
        id: 'g_n4_158', category: 'grammar', level: 'N4', tags: ['auxiliary', 'te-oku'],
        stem: '明日{あした}テストがあるので、今夜{こんや}は復習{ふくしゅう}して___。',
        stemZh: '因為明天有考試，今晚要先複習好。',
        options: [
            { text: 'おく', reason: '正確！「ておく」表示為之後做準備。' },
            { text: 'しまう', reason: '「てしまう」表示完了或遺憾，不表準備。' },
            { text: 'みる', reason: '「てみる」表示嘗試，語意不同。' },
            { text: 'ある', reason: '「てある」表示結果狀態，此處不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ておく」表示事先準備',
            analysis: '「ておく」表示為了將來的目的而事先做好某事。',
            comparisons: ['復習しておく：先複習好（為明天準備）', '復習してしまう：複習完了（完了）'],
            commonMistakes: ['口語中「ておく」常縮略為「とく」：復習しとく'],
        },
    },
    // ━━━ てみる ━━━
    {
        id: 'g_n4_159', category: 'grammar', level: 'N4', tags: ['auxiliary', 'te-miru'],
        stem: 'この料理{りょうり}、おいしそうだから食{た}べて___。',
        stemZh: '這道菜看起來好吃，試著吃吃看。',
        options: [
            { text: 'おく', reason: '「ておく」表示事先準備，語感不同。' },
            { text: 'しまう', reason: '「てしまう」表示完了或遺憾，語意不同。' },
            { text: 'ある', reason: '「てある」表示狀態，不接在此語境。' },
            { text: 'みる', reason: '正確！「てみる」表示嘗試做看看。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「てみる」表示嘗試',
            analysis: '「てみる」表示試著做某事，看看結果如何。',
            comparisons: ['食べてみる：吃吃看（嘗試）', '食べておく：先吃好（準備）'],
            commonMistakes: ['「てみる」強調嘗試新事物的體驗感'],
        },
    },
    // ━━━ 出す ━━━
    {
        id: 'g_n4_160', category: 'grammar', level: 'N4', tags: ['auxiliary', 'dasu'],
        stem: '急{きゅう}に雨{あめ}が降{ふ}り___。',
        stemZh: '突然下起雨來了。',
        options: [
            { text: '出{だ}した', reason: '正確！「〜出す」表示突然開始某動作。' },
            { text: '始{はじ}めた', reason: '「始める」表示開始，但不強調突然性。' },
            { text: '続{つづ}けた', reason: '「続ける」表示持續，語意不同。' },
            { text: '終{お}わった', reason: '「終わる」表示結束，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「〜出す」表示突然開始',
            analysis: '「V ます形＋出す」表示動作突然發生或開始，帶有出乎意料的語感。',
            comparisons: ['降り出した：突然開始下（意外）', '降り始めた：開始下了（客觀描述）'],
            commonMistakes: ['「出す」：突然開始（主觀/意外） / 「始める」：有意識地開始'],
        },
    },
    // ━━━ 続ける ━━━
    {
        id: 'g_n4_161', category: 'grammar', level: 'N4', tags: ['auxiliary', 'tsuzukeru'],
        stem: '彼{かれ}は10年間{ねんかん}ずっと日本語{にほんご}を勉強{べんきょう}し___いる。',
        stemZh: '他持續學了十年日語。',
        options: [
            { text: '続{つづ}けて', reason: '正確！「〜続ける」表示持續做某事。' },
            { text: '始{はじ}めて', reason: '「始めて」表示開始做，不表持續。' },
            { text: '出{だ}して', reason: '「出して」表示突然開始，不表持續。' },
            { text: '終{お}わって', reason: '「終わって」表示結束，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「〜続ける」表示持續',
            analysis: '「V ます形＋続ける」表示長時間持續某動作。',
            comparisons: ['勉強し続ける：持續學習', '勉強し始める：開始學習'],
            commonMistakes: ['○ 走り続ける / × 走る続ける → 接ます形，不接辭書形'],
        },
    },
    // ━━━ 始める ━━━
    {
        id: 'g_n4_162', category: 'grammar', level: 'N4', tags: ['auxiliary', 'hajimeru'],
        stem: '桜{さくら}が咲{さ}き___。',
        stemZh: '櫻花開始綻放了。',
        options: [
            { text: '出{だ}した', reason: '「出した」表示突然開始，但此處無意外語感。' },
            { text: '続{つづ}けた', reason: '「続けた」表示持續，不表開始。' },
            { text: '始{はじ}めた', reason: '正確！「〜始める」表示開始做某事。' },
            { text: '終{お}わった', reason: '「終わった」表示結束，語意相反。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「〜始める」表示開始',
            analysis: '「V ます形＋始める」表示有意識或自然地開始某動作。',
            comparisons: ['咲き始めた：開始開花（自然開始）', '咲き出した：突然開花（強調突然）'],
            commonMistakes: ['「始める」：自然地開始 / 「出す」：突然開始'],
        },
    },
    // ━━━ そうだ（様態） ━━━
    {
        id: 'g_n4_163', category: 'grammar', level: 'N4', tags: ['conjecture', 'sou-da-looks'],
        stem: 'このケーキはとてもおいし___だ。',
        stemZh: '這個蛋糕看起來很好吃。',
        options: [
            { text: 'そう', reason: '正確！い形容詞去「い」加「そうだ」表外觀推測。' },
            { text: 'らしい', reason: '「らしい」接在「おいしい」後表傳聞，不去い。' },
            { text: 'みたい', reason: '「みたい」接在「おいしい」後，不去い。' },
            { text: 'よう', reason: '「ようだ」接在「おいしい」後，不去い。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「そうだ（様態）」表示看起來…',
            analysis: 'い形容詞去「い」加「そうだ」表示根據外觀判斷。',
            comparisons: ['おいしそうだ：看起來好吃（様態）', 'おいしいそうだ：聽說好吃（傳聞）'],
            commonMistakes: ['○ おいしそう / × おいしいそう → 様態去い，傳聞不去い'],
        },
    },
    // ━━━ そうだ（伝聞） ━━━
    {
        id: 'g_n4_164', category: 'grammar', level: 'N4', tags: ['conjecture', 'sou-da-hearsay'],
        stem: '天気{てんき}予報{よほう}によると、明日{あした}は雨{あめ}が降{ふ}る___だ。',
        stemZh: '根據天氣預報，明天聽說會下雨。',
        options: [
            { text: 'よう', reason: '「ようだ」表推測，但不搭配「によると」。' },
            { text: 'みたい', reason: '「みたいだ」表推測，較口語。' },
            { text: 'そう', reason: '正確！「普通形＋そうだ」表示傳聞。' },
            { text: 'らしい', reason: '「らしい」也表傳聞，但此處考「そうだ」。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「そうだ（伝聞）」表示聽說…',
            analysis: '動詞・形容詞普通形直接加「そうだ」表示傳聞，常搭配「によると」。',
            comparisons: ['降るそうだ：聽說會下雨（傳聞）', '降りそうだ：看起來要下雨（様態）'],
            commonMistakes: ['傳聞：普通形＋そうだ / 様態：ます形去ます＋そうだ'],
        },
    },
    // ━━━ ようだ ━━━
    {
        id: 'g_n4_165', category: 'grammar', level: 'N4', tags: ['conjecture', 'you-da'],
        stem: '彼{かれ}は何{なに}か隠{かく}している___だ。',
        stemZh: '他好像在隱瞞什麼。',
        options: [
            { text: 'そう', reason: '「そう」接普通形表傳聞，但此處是推測。' },
            { text: 'よう', reason: '正確！「ようだ」表示根據觀察的推測。' },
            { text: 'はず', reason: '「はず」表確信推測，此處無根據確信。' },
            { text: 'べき', reason: '「べきだ」表應該做，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ようだ」表示根據觀察的推測',
            analysis: '「ようだ」表示說話者根據某種跡象做出的主觀推測。',
            comparisons: ['隠しているようだ：好像在隱瞞（主觀推測）', '隠しているらしい：好像在隱瞞（客觀推測）'],
            commonMistakes: ['「ようだ」：主觀推測 / 「らしい」：客觀推測'],
        },
    },
    // ━━━ らしい ━━━
    {
        id: 'g_n4_166', category: 'grammar', level: 'N4', tags: ['conjecture', 'rashii'],
        stem: 'あの店{みせ}はとても人気{にんき}がある___。',
        stemZh: '那家店好像很受歡迎。',
        options: [
            { text: 'らしい', reason: '正確！「らしい」表示根據他人資訊的推測。' },
            { text: 'そうだ', reason: '「そうだ」表傳聞也可，但此處考「らしい」。' },
            { text: 'ようだ', reason: '「ようだ」表自己觀察的推測，但「らしい」更合語境。' },
            { text: 'はずだ', reason: '「はず」表確信的推測，語感太強。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「らしい」表示客觀推測',
            analysis: '「らしい」表示根據聽到的信息或客觀根據做出的推測。',
            comparisons: ['人気があるらしい：好像很受歡迎（聽說的）', '人気があるようだ：好像很受歡迎（自己觀察的）'],
            commonMistakes: ['「らしい」：根據間接資訊 / 「ようだ」：根據直接觀察'],
        },
    },
    // ━━━ みたいだ ━━━
    {
        id: 'g_n4_167', category: 'grammar', level: 'N4', tags: ['conjecture', 'mitai-da'],
        stem: '外{そと}は寒{さむ}い___だね。みんなコートを着{き}ているよ。',
        stemZh: '外面好像很冷呢，大家都穿著外套。',
        options: [
            { text: 'よう', reason: '「ようだ」較正式，此句口語語感更合「みたい」。' },
            { text: 'そう', reason: '「寒いそうだ」表傳聞，不合此語境。' },
            { text: 'らしい', reason: '「らしい」表客觀推測，不適合直接觀察。' },
            { text: 'みたい', reason: '正確！「みたいだ」是「ようだ」的口語形。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「みたいだ」是「ようだ」的口語形',
            analysis: '「みたいだ」在日常會話中常代替「ようだ」使用，接續方式相同。',
            comparisons: ['寒いみたいだ：好像很冷（口語）', '寒いようだ：好像很冷（書面語）'],
            commonMistakes: ['「みたいだ」：口語 / 「ようだ」：書面語，意思相同'],
        },
    },
    // ━━━ かもしれない ━━━
    {
        id: 'g_n4_168', category: 'grammar', level: 'N4', tags: ['conjecture', 'kamo-shirenai'],
        stem: '彼女{かのじょ}はもう家{いえ}に帰{かえ}った___。',
        stemZh: '她可能已經回家了。',
        options: [
            { text: 'はずだ', reason: '「はずだ」表確信推測，語感太強。' },
            { text: 'にちがいない', reason: '「にちがいない」表一定，確信度最高。' },
            { text: 'かもしれない', reason: '正確！「かもしれない」表示不確定的推測。' },
            { text: 'べきだ', reason: '「べきだ」表應該，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「かもしれない」表示也許',
            analysis: '「かもしれない」表示可能性，確信度較低，意為「說不定」。',
            comparisons: ['帰ったかもしれない：可能回家了（不確定）', '帰ったはずだ：應該回家了（有根據）'],
            commonMistakes: ['確信度：にちがいない ＞ はず ＞ ようだ ＞ かもしれない'],
        },
    },
    // ━━━ はずだ ━━━
    {
        id: 'g_n4_169', category: 'grammar', level: 'N4', tags: ['conjecture', 'hazu-da'],
        stem: '電車{でんしゃ}は3時{じ}に着{つ}く___なのに、まだ来{こ}ない。',
        stemZh: '電車應該三點到的，卻還沒來。',
        options: [
            { text: 'はず', reason: '正確！「はずだ」表示根據道理推測應該如此。' },
            { text: 'つもり', reason: '「つもり」表示打算，用於人的意志。' },
            { text: 'よう', reason: '「ようだ」表推測，但不適合搭配「なのに」。' },
            { text: 'そう', reason: '「そうだ」表外觀推測或傳聞，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「はず」表示合理推測',
            analysis: '「はず」表示根據已知事實或道理做出的推測。常搭配「のに」表意外。',
            comparisons: ['着くはずだ：應該會到（有根據的推測）', '着くかもしれない：可能會到（不確定的推測）'],
            commonMistakes: ['「はず」是推測 / 「つもり」是意志，不可混用'],
        },
    },
    // ━━━ はずがない ━━━
    {
        id: 'g_n4_170', category: 'grammar', level: 'N4', tags: ['conjecture', 'hazu-ga-nai'],
        stem: 'あんなに優{やさ}しい人{ひと}がそんなひどいことをする___。',
        stemZh: '那麼溫柔的人不可能做那種過分的事。',
        options: [
            { text: 'わけだ', reason: '「わけだ」表示難怪，語意不同。' },
            { text: 'はずがない', reason: '正確！「はずがない」表示不可能。' },
            { text: 'かもしれない', reason: '「かもしれない」表也許，不表否定。' },
            { text: 'ところだ', reason: '「ところだ」表示正要/正在，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「はずがない」表示不可能',
            analysis: '「はずがない」表示從道理上判斷，不可能發生某事。',
            comparisons: ['するはずがない：不可能做（強否定）', 'するわけがない：沒道理做（更強否定）'],
            commonMistakes: ['「はずがない」＝不可能 / 「はずだ」＝應該'],
        },
    },
    // ━━━ でございます ━━━
    {
        id: 'g_n4_171', category: 'grammar', level: 'N4', tags: ['keigo', 'de-gozaimasu'],
        stem: '「いらっしゃいませ。こちらが本日{ほんじつ}のメニュー___。」',
        stemZh: '「歡迎光臨。這是今天的菜單。」',
        options: [
            { text: 'です', reason: '「です」是丁寧語，但不如「でございます」正式。' },
            { text: 'だ', reason: '「だ」是普通體，不適合服務場合。' },
            { text: 'でございます', reason: '正確！「でございます」是「です」的鄭重語。' },
            { text: 'でいらっしゃいます', reason: '「でいらっしゃいます」用於對方，不用於事物。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「でございます」是最鄭重的「です」',
            analysis: '「でございます」用於服務業或非常正式的場合，比「です」更加禮貌。',
            comparisons: ['メニューだ（普通體）', 'メニューです（丁寧語）', 'メニューでございます（鄭重語）'],
            commonMistakes: ['「でございます」多用於服務業，日常使用顯得太正式'],
        },
    },
    // ━━━ お〜になる ━━━
    {
        id: 'g_n4_172', category: 'grammar', level: 'N4', tags: ['keigo', 'o-ni-naru'],
        stem: '先生{せんせい}はもうお帰{かえ}り___なりましたか。',
        stemZh: '老師已經回去了嗎？（敬語）',
        options: [
            { text: 'に', reason: '正確！「お＋V ます形＋になる」是尊敬語。' },
            { text: 'を', reason: '「お帰りをなる」不合語法。' },
            { text: 'が', reason: '「お帰りがなる」不合語法。' },
            { text: 'で', reason: '「お帰りでなる」不合語法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「お〜になる」是尊敬語',
            analysis: '「お＋V ます形＋になる」用於表達對上位者行為的尊敬。',
            comparisons: ['帰る→お帰りになる（尊敬語）', '帰る→お帰りする（自謙語）'],
            commonMistakes: ['尊敬語：お＋V＋になる / 自謙語：お＋V＋する'],
        },
    },
    // ━━━ お〜する ━━━
    {
        id: 'g_n4_173', category: 'grammar', level: 'N4', tags: ['keigo', 'o-suru'],
        stem: '荷物{にもつ}をお持{も}ち___。',
        stemZh: '我來幫您拿行李。（自謙語）',
        options: [
            { text: 'になります', reason: '「お持ちになる」是尊敬語，用於對方的動作。' },
            { text: 'します', reason: '正確！「お〜する」是自謙語，表示自己為對方服務。' },
            { text: 'ください', reason: '「お持ちください」是請對方拿的意思。' },
            { text: 'です', reason: '「お持ちです」表示持有狀態，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「お〜する」是自謙語',
            analysis: '「お＋V ます形＋する」用於表示自己謙遜地為對方做某事。',
            comparisons: ['お持ちします：我幫您拿（自謙語）', 'お持ちになります：您拿（尊敬語）'],
            commonMistakes: ['自謙語用於自己的動作，尊敬語用於對方的動作'],
        },
    },
    // ━━━ ようにする ━━━
    {
        id: 'g_n4_174', category: 'grammar', level: 'N4', tags: ['you-ni-suru'],
        stem: '健康{けんこう}のために、毎日{まいにち}運動{うんどう}する___している。',
        stemZh: '為了健康，我努力做到每天運動。',
        options: [
            { text: 'ことに', reason: '「ことにする」表決定，不表努力。' },
            { text: 'ように', reason: '正確！「ようにする/している」表示努力做到。' },
            { text: 'ために', reason: '「ためにする」不構成慣用句型。' },
            { text: 'つもりに', reason: '「つもりにする」不構成慣用句型。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ようにする」表示努力做到',
            analysis: '「ようにしている」表示習慣性地努力去做某事。',
            comparisons: ['運動するようにしている：努力做到運動（習慣）', '運動することにした：決定運動（決定）'],
            commonMistakes: ['「ようにする」：努力做到 / 「ことにする」：做出決定'],
        },
    },
    // ━━━ ようになる ━━━
    {
        id: 'g_n4_175', category: 'grammar', level: 'N4', tags: ['you-ni-naru'],
        stem: '毎日{まいにち}練習{れんしゅう}したら、漢字{かんじ}が読{よ}める___なった。',
        stemZh: '每天練習之後，變得能讀漢字了。',
        options: [
            { text: 'ように', reason: '正確！「ようになる」表示能力或狀態的變化。' },
            { text: 'ことに', reason: '「ことになる」表示決定（被動），語意不同。' },
            { text: 'ために', reason: '「ためになる」表示有用，不表能力變化。' },
            { text: 'みたいに', reason: '「みたいになる」表變得像…，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようになる」表示變得能做',
            analysis: '「V 辭書形/可能形＋ようになる」表示能力或習慣的變化。',
            comparisons: ['読めるようになった：變得能讀（能力變化）', '読むようになった：變得會讀（習慣變化）'],
            commonMistakes: ['「ようになる」：自然變化 / 「ようにする」：主動努力'],
        },
    },
    // ━━━ ことにする ━━━
    {
        id: 'g_n4_176', category: 'grammar', level: 'N4', tags: ['koto-ni-suru'],
        stem: '来月{らいげつ}から毎朝{まいあさ}ジョギングする___した。',
        stemZh: '決定從下個月開始每天早上慢跑。',
        options: [
            { text: 'ように', reason: '「ようにした」表努力做到，不表決定。' },
            { text: 'ために', reason: '「ためにした」不構成慣用句型。' },
            { text: 'ことに', reason: '正確！「ことにする」表示自己做出決定。' },
            { text: 'はずに', reason: '「はずにする」不構成慣用句型。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ことにする」表示主動決定',
            analysis: '「V辭書形＋ことにする」表示自己主動做出某個決定。',
            comparisons: ['ジョギングすることにした：決定慢跑（自主決定）', 'ジョギングすることになった：決定慢跑（客觀決定）'],
            commonMistakes: ['「ことにする」：自己決定 / 「ことになる」：被決定或自然決定'],
        },
    },
    // ━━━ ことになる ━━━
    {
        id: 'g_n4_177', category: 'grammar', level: 'N4', tags: ['koto-ni-naru'],
        stem: '来年{らいねん}、東京{とうきょう}に転勤{てんきん}する___なった。',
        stemZh: '明年要調到東京工作了。',
        options: [
            { text: 'ことに', reason: '正確！「ことになる」表示被決定或客觀決定。' },
            { text: 'ように', reason: '「ようになる」表能力變化，不表被決定。' },
            { text: 'ために', reason: '「ためになる」表有用，語意不同。' },
            { text: 'つもりに', reason: '「つもりになる」不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことになる」表示被決定',
            analysis: '「ことになる」表示由他人或環境決定的結果，非自己意志。',
            comparisons: ['転勤することになった：被決定調職（非自願）', '転勤することにした：決定調職（自願）'],
            commonMistakes: ['「ことになる」常暗示說話者無法控制的決定'],
        },
    },
    // ━━━ ために（目的） ━━━
    {
        id: 'g_n4_178', category: 'grammar', level: 'N4', tags: ['tame-ni', 'purpose'],
        stem: '日本{にほん}に留学{りゅうがく}する___、お金{かね}を貯{た}めている。',
        stemZh: '為了去日本留學，正在存錢。',
        options: [
            { text: 'のに', reason: '「のに」表逆接或目的（用途），此處應用「ために」。' },
            { text: 'ために', reason: '正確！「ために」表示目的。' },
            { text: 'ように', reason: '「ように」表方式或希望，不直接表目的。' },
            { text: 'として', reason: '「として」表身份或資格，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ために」表示為了某目的',
            analysis: '「V辭書形＋ために」表示為了達成某個目的而做某事。',
            comparisons: ['留学するために：為了留學（目的）', '留学できるように：為了能留學（間接目的）'],
            commonMistakes: ['「ために」接意志動詞 / 「ように」接非意志動詞或可能形'],
        },
    },
    // ━━━ のに（逆接） ━━━
    {
        id: 'g_n4_179', category: 'grammar', level: 'N4', tags: ['noni', 'contrast'],
        stem: 'たくさん勉強{べんきょう}した___、テストに落{お}ちてしまった。',
        stemZh: '明明讀了很多書，卻沒通過考試。',
        options: [
            { text: 'ので', reason: '「ので」表原因，語意相反。' },
            { text: 'から', reason: '「から」表原因，不表逆接。' },
            { text: 'けど', reason: '「けど」也表逆接，但「のに」更強調不滿。' },
            { text: 'のに', reason: '正確！「のに」表逆接，帶有不滿或意外。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「のに」表示明明…卻…',
            analysis: '「のに」表示逆接，帶有說話者的不滿、遺憾或意外感。',
            comparisons: ['勉強したのに落ちた：明明讀了卻沒過（不滿）', '勉強したけど落ちた：雖然讀了但沒過（客觀）'],
            commonMistakes: ['「のに」帶感情色彩 / 「けど」較客觀'],
        },
    },
    // ━━━ ところ ━━━
    {
        id: 'g_n4_180', category: 'grammar', level: 'N4', tags: ['tokoro'],
        stem: '今{いま}から出{で}かける___です。',
        stemZh: '我正要出門。',
        options: [
            { text: 'ところ', reason: '正確！「V辭書形＋ところ」表示正要做某事。' },
            { text: 'ばかり', reason: '「ばかり」表剛做完，不表正要做。' },
            { text: 'まま', reason: '「まま」表保持狀態，語意不同。' },
            { text: 'うち', reason: '「うちに」表趁著，不合此語境。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ところ」表示時間階段',
            analysis: '「ところ」根據接續不同表示不同階段：辭書形＝正要、ている＝正在、た＝剛剛。',
            comparisons: ['出かけるところ：正要出門', '出かけているところ：正在出門中', '出かけたところ：剛出門'],
            commonMistakes: ['辭書形＋ところ：正要 / た形＋ところ：剛剛'],
        },
    },
    // ━━━ ばかり ━━━
    {
        id: 'g_n4_181', category: 'grammar', level: 'N4', tags: ['bakari'],
        stem: 'さっきご飯{はん}を食{た}べた___なのに、もうお腹{なか}が空{す}いた。',
        stemZh: '明明剛吃完飯，肚子又餓了。',
        options: [
            { text: 'ところ', reason: '「たところ」也表剛剛，但此處更適合「ばかり」。' },
            { text: 'ばかり', reason: '正確！「たばかり」表示剛剛做完不久。' },
            { text: 'まま', reason: '「まま」表保持狀態，語意不同。' },
            { text: 'うち', reason: '「うち」表範圍或趁著，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「たばかり」表示剛做完不久',
            analysis: '「た形＋ばかり」表示動作剛完成不久，強調時間的短暫。',
            comparisons: ['食べたばかり：剛吃完（強調時間短）', '食べたところ：剛吃完（客觀描述）'],
            commonMistakes: ['「ばかり」比「ところ」更強調「才剛做完」的語感'],
        },
    },
    // ━━━ ながら ━━━
    {
        id: 'g_n4_182', category: 'grammar', level: 'N4', tags: ['nagara'],
        stem: '音楽{おんがく}を聞{き}き___勉強{べんきょう}するのが好{す}きだ。',
        stemZh: '我喜歡一邊聽音樂一邊念書。',
        options: [
            { text: 'ながら', reason: '正確！「ながら」表示同時進行兩個動作。' },
            { text: 'つつ', reason: '「つつ」也表同時，但較文語，不適合口語。' },
            { text: 'たり', reason: '「たり」表列舉動作，不表同時。' },
            { text: 'ても', reason: '「ても」表即使，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ながら」表示同時進行',
            analysis: '「V ます形＋ながら」表示兩個動作同時進行，後句是主要動作。',
            comparisons: ['聞きながら勉強する：一邊聽一邊讀（主要動作是讀書）', '聞いて勉強する：聽了之後讀書（先後順序）'],
            commonMistakes: ['「ながら」的主語必須相同，不能是不同的人'],
        },
    },
    // ━━━ ていく ━━━
    {
        id: 'g_n4_183', category: 'grammar', level: 'N4', tags: ['te-iku'],
        stem: 'これからも日本語{にほんご}の勉強{べんきょう}を続{つづ}けて___つもりだ。',
        stemZh: '今後也打算繼續學日語下去。',
        options: [
            { text: 'いく', reason: '正確！「ていく」表示從現在往未來持續。' },
            { text: 'くる', reason: '「てくる」表示從過去到現在的變化。' },
            { text: 'おく', reason: '「ておく」表事先準備，語意不同。' },
            { text: 'みる', reason: '「てみる」表嘗試，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ていく」表示往未來發展',
            analysis: '「ていく」表示從現在開始往未來方向的持續或變化。',
            comparisons: ['続けていく：繼續下去（往未來）', '続けてきた：持續到現在（從過去）'],
            commonMistakes: ['「ていく」：往未來 / 「てくる」：從過去到現在'],
        },
    },
    // ━━━ てくる ━━━
    {
        id: 'g_n4_184', category: 'grammar', level: 'N4', tags: ['te-kuru'],
        stem: '最近{さいきん}、日本語{にほんご}が分{わ}かるように___。',
        stemZh: '最近漸漸能理解日語了。',
        options: [
            { text: 'なっていった', reason: '「なっていった」表從某時點往後變化。' },
            { text: 'なってきた', reason: '正確！「てくる」表示變化從過去延續到現在。' },
            { text: 'なっておいた', reason: '「なっておいた」語法不自然。' },
            { text: 'なってみた', reason: '「なってみた」語法不自然。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「てくる」表示從過去到現在的變化',
            analysis: '「てくる」用於描述從過去某時點漸漸變化到現在的狀態。',
            comparisons: ['分かるようになってきた：漸漸能理解了（到現在）', '分かるようになっていく：會漸漸理解（往未來）'],
            commonMistakes: ['「てくる」強調說話者感受到的變化過程'],
        },
    },
    // ━━━ まま ━━━
    {
        id: 'g_n4_185', category: 'grammar', level: 'N4', tags: ['mama'],
        stem: '電気{でんき}をつけた___寝{ね}てしまった。',
        stemZh: '開著燈就睡著了。',
        options: [
            { text: 'ばかり', reason: '「ばかり」表剛做完，不表維持狀態。' },
            { text: 'ところ', reason: '「ところ」表時間階段，不表維持狀態。' },
            { text: 'うちに', reason: '「うちに」表趁著，語意不同。' },
            { text: 'まま', reason: '正確！「まま」表示維持某狀態不變。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「まま」表示維持狀態',
            analysis: '「た形＋まま」表示前一動作的狀態被維持著，做了後面的動作。',
            comparisons: ['つけたまま寝た：開著燈睡了（狀態維持）', 'つけて寝た：開了燈然後睡了（順序）'],
            commonMistakes: ['「まま」：維持狀態 / 「て形」：動作順序'],
        },
    },
    // ━━━ 中（ちゅう/じゅう） ━━━
    {
        id: 'g_n4_186', category: 'grammar', level: 'N4', tags: ['chuu'],
        stem: '今{いま}、会議{かいぎ}___なので、後{あと}で電話{でんわ}します。',
        stemZh: '現在正在開會，等一下再打電話。',
        options: [
            { text: '中{ちゅう}', reason: '正確！「〜中」表示正在進行中。' },
            { text: 'のところ', reason: '「のところ」不自然。' },
            { text: 'のまま', reason: '「のまま」表維持狀態，語意不同。' },
            { text: 'ばかり', reason: '「ばかり」表剛做完或光是，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「〜中」表示進行中',
            analysis: '「N＋中（ちゅう）」表示某事正在進行中。「N＋中（じゅう）」表整個範圍。',
            comparisons: ['会議中：正在開會', '一日中：整天', '世界中：全世界'],
            commonMistakes: ['「ちゅう」：進行中 / 「じゅう」：整個範圍'],
        },
    },
    // ━━━ という ━━━
    {
        id: 'g_n4_187', category: 'grammar', level: 'N4', tags: ['to-iu'],
        stem: '「鬼滅{きめつ}の刃{やいば}」___アニメを知{し}っていますか。',
        stemZh: '你知道一部叫做「鬼滅之刃」的動畫嗎？',
        options: [
            { text: 'という', reason: '正確！「という」用於說明名稱。' },
            { text: 'といった', reason: '「といった」用於列舉，語意不同。' },
            { text: 'としての', reason: '「としての」表身份，語意不同。' },
            { text: 'に関{かん}する', reason: '「に関する」表關於，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「という」用於介紹名稱',
            analysis: '「AというB」表示叫做A的B，用於介紹名稱或說明。',
            comparisons: ['「鬼滅の刃」というアニメ：叫做鬼滅之刃的動畫', '日本語を勉強しているという人：聽說在學日語的人'],
            commonMistakes: ['「という」也可表示傳聞內容：來るという話だ'],
        },
    },
    // ━━━ ように ━━━
    {
        id: 'g_n4_188', category: 'grammar', level: 'N4', tags: ['you-ni', 'purpose'],
        stem: '忘{わす}れない___、メモを取{と}っておいた。',
        stemZh: '為了不忘記，先做了筆記。',
        options: [
            { text: 'ために', reason: '「ために」用於意志動詞，「忘れない」非意志。' },
            { text: 'ように', reason: '正確！「ように」用於非意志動詞或否定形。' },
            { text: 'のに', reason: '「のに」表逆接或用途，不合此語境。' },
            { text: 'ことに', reason: '「ことに」不構成目的句型。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ように」表示間接目的',
            analysis: '非意志動詞或否定形表目的時用「ように」，不用「ために」。',
            comparisons: ['忘れないように：為了不忘記（非意志/否定）', '勉強するために：為了學習（意志動詞）'],
            commonMistakes: ['意志動詞→ために / 非意志・否定→ように'],
        },
    },
    // ━━━ として ━━━
    {
        id: 'g_n4_189', category: 'grammar', level: 'N4', tags: ['to-shite'],
        stem: '彼{かれ}は留学生{りゅうがくせい}___日本{にほん}に来{き}た。',
        stemZh: '他以留學生的身份來了日本。',
        options: [
            { text: 'として', reason: '正確！「として」表示身份或資格。' },
            { text: 'にとって', reason: '「にとって」表對…而言，語意不同。' },
            { text: 'について', reason: '「について」表關於，語意不同。' },
            { text: 'によって', reason: '「によって」表根據或因為，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「として」表示身份或立場',
            analysis: '「Nとして」表示以某種身份、資格或立場來做某事。',
            comparisons: ['留学生として：以留學生的身份', '教師として：以教師的身份'],
            commonMistakes: ['「として」：身份/資格 / 「にとって」：從某人的角度看'],
        },
    },
    // ━━━ ことがある ━━━
    {
        id: 'g_n4_190', category: 'grammar', level: 'N4', tags: ['koto-ga-aru'],
        stem: '仕事{しごと}が忙{いそが}しくて、朝{あさ}ご飯{はん}を食{た}べない___がある。',
        stemZh: '因為工作忙，有時候不吃早餐。',
        options: [
            { text: 'はず', reason: '「はず」表推測，不表有時候。' },
            { text: 'わけ', reason: '「わけ」表道理，不表有時候。' },
            { text: 'つもり', reason: '「つもり」表打算，不表有時候。' },
            { text: 'こと', reason: '正確！「V辭書形＋ことがある」表示有時候會。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「ことがある」表示有時候會',
            analysis: '「V辭書形＋ことがある」表示偶爾發生的事。注意與「たことがある（經驗）」的區別。',
            comparisons: ['食べないことがある：有時候不吃（偶爾）', '食べたことがある：吃過（經驗）'],
            commonMistakes: ['辭書形＋ことがある：偶爾 / た形＋ことがある：經驗'],
        },
    },
    // ━━━ ことができる ━━━
    {
        id: 'g_n4_191', category: 'grammar', level: 'N4', tags: ['koto-ga-dekiru'],
        stem: 'この図書館{としょかん}では無料{むりょう}でインターネットを使{つか}う___できる。',
        stemZh: '在這個圖書館可以免費使用網路。',
        options: [
            { text: 'のが', reason: '「のができる」語法不自然。' },
            { text: 'ことが', reason: '正確！「V辭書形＋ことができる」表示能夠做。' },
            { text: 'ように', reason: '「ように」不接「できる」構成能力句。' },
            { text: 'ために', reason: '「ために」表目的，不表能力。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ことができる」表示能力或可能',
            analysis: '「V辭書形＋ことができる」等於可能形，表示能夠做某事。',
            comparisons: ['使うことができる＝使える：可以使用', '泳ぐことができる＝泳げる：會游泳'],
            commonMistakes: ['「ことができる」較正式，口語多用可能形'],
        },
    },
    // ━━━ てほしい ━━━
    {
        id: 'g_n4_192', category: 'grammar', level: 'N4', tags: ['te-hoshii'],
        stem: '子供{こども}にはもっと野菜{やさい}を食{た}べて___。',
        stemZh: '希望孩子多吃蔬菜。',
        options: [
            { text: 'ほしい', reason: '正確！「てほしい」表示希望別人做某事。' },
            { text: 'たい', reason: '「たい」表自己想做，不表希望別人做。' },
            { text: 'もらいたい', reason: '「てもらいたい」也可，但此處考「てほしい」。' },
            { text: 'あげたい', reason: '「てあげたい」表想為他人做，方向不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てほしい」表示希望他人做某事',
            analysis: '「（人に）Vて＋ほしい」表示希望某人做某事。',
            comparisons: ['食べてほしい：希望他吃（我的希望）', '食べたい：我想吃（自己的願望）'],
            commonMistakes: ['「てほしい」用於希望他人做 / 「たい」用於自己想做'],
        },
    },
    // ━━━ やすい ━━━
    {
        id: 'g_n4_193', category: 'grammar', level: 'N4', tags: ['yasui'],
        stem: 'この本{ほん}は字{じ}が大{おお}きくて、読{よ}み___。',
        stemZh: '這本書字很大，很好讀。',
        options: [
            { text: 'にくい', reason: '「にくい」表難以，與語境相反。' },
            { text: 'づらい', reason: '「づらい」表難以（心理上），語意相反。' },
            { text: 'やすい', reason: '正確！「やすい」表示容易做某事。' },
            { text: 'がたい', reason: '「がたい」表極難做到，N2語法。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「やすい」表示容易做',
            analysis: '「V ます形＋やすい」表示做某動作很容易。',
            comparisons: ['読みやすい：容易讀', '読みにくい：難以讀'],
            commonMistakes: ['「やすい」：容易 / 「にくい」：困難'],
        },
    },
    // ━━━ にくい ━━━
    {
        id: 'g_n4_194', category: 'grammar', level: 'N4', tags: ['nikui'],
        stem: 'この靴{くつ}はデザインはいいが、歩{ある}き___。',
        stemZh: '這雙鞋設計好看，但很難走路。',
        options: [
            { text: 'やすい', reason: '「やすい」表容易，與「が」轉折不合。' },
            { text: 'にくい', reason: '正確！「にくい」表示動作難以進行。' },
            { text: 'たい', reason: '「たい」表想做，語意不同。' },
            { text: 'すぎる', reason: '「すぎる」表過度，語法接續不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「にくい」表示難以做到',
            analysis: '「V ます形＋にくい」表示做某動作很困難。',
            comparisons: ['歩きにくい：難走', '歩きやすい：好走'],
            commonMistakes: ['「にくい」：客觀上困難 / 「づらい」：心理上困難'],
        },
    },
    // ━━━ 受身形（られる） ━━━
    {
        id: 'g_n4_195', category: 'grammar', level: 'N4', tags: ['passive', 'ukemi'],
        stem: '電車{でんしゃ}の中{なか}で足{あし}を踏{ふ}ま___。',
        stemZh: '在電車裡被踩了腳。',
        options: [
            { text: 'せた', reason: '「踏ませた」是使役形，不是被動。' },
            { text: 'れた', reason: '正確！「踏まれた」是受身形（被動）。' },
            { text: 'した', reason: '「踏ました」語法不正確。' },
            { text: 'せられた', reason: '「踏ませられた」是使役被動，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '受身形（被動）表示被…做某事',
            analysis: '五段動詞的受身形：將語尾改為あ段＋れる。踏む→踏まれる。',
            comparisons: ['踏まれた：被踩了（被動）', '踏ませた：讓他踩（使役）'],
            commonMistakes: ['五段動詞被動：あ段＋れる / 一段動詞被動：去る＋られる'],
        },
    },
    // ━━━ 使役形（させる） ━━━
    {
        id: 'g_n4_196', category: 'grammar', level: 'N4', tags: ['causative', 'shieki'],
        stem: '先生{せんせい}は学生{がくせい}に教科書{きょうかしょ}を読{よ}ま___。',
        stemZh: '老師讓學生讀課本。',
        options: [
            { text: 'れた', reason: '「読まれた」是受身形，不是使役。' },
            { text: 'せた', reason: '正確！「読ませた」是使役形。' },
            { text: 'された', reason: '「読まされた」是使役被動，語意不同。' },
            { text: 'ないた', reason: '「読まないた」語法不正確。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '使役形表示讓/使某人做',
            analysis: '五段動詞使役形：將語尾改為あ段＋せる。読む→読ませる。',
            comparisons: ['読ませた：讓他讀（使役）', '読まれた：被讀了（被動）'],
            commonMistakes: ['五段動詞使役：あ段＋せる / 一段動詞使役：去る＋させる'],
        },
    },
    // ━━━ ようとする ━━━
    {
        id: 'g_n4_197', category: 'grammar', level: 'N4', tags: ['you-to-suru'],
        stem: 'ドアを開{あ}け___としたが、鍵{かぎ}がかかっていた。',
        stemZh: '正要打開門，但門鎖著。',
        options: [
            { text: 'よう', reason: '正確！「Vよう＋とする」表示正要做或試圖做。' },
            { text: 'たい', reason: '「たいとする」不構成慣用句型。' },
            { text: 'る', reason: '「開けるとした」語法不正確。' },
            { text: 'て', reason: '「開けてとした」語法不正確。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようとする」表示正要做或試圖',
            analysis: '「V意向形＋とする」表示正要做某事或試圖做某事。',
            comparisons: ['開けようとした：正要開（動作前一刻）', '開けようとしている：正在試圖開'],
            commonMistakes: ['「ようとしたが」常表示試圖但未成功'],
        },
    },
    // ━━━ たら（條件） ━━━
    {
        id: 'g_n4_198', category: 'grammar', level: 'N4', tags: ['conditional', 'tara'],
        stem: '駅{えき}に着{つ}い___、電話{でんわ}してください。',
        stemZh: '到了車站之後請打電話。',
        options: [
            { text: 'たら', reason: '正確！「たら」表示完成某動作後。' },
            { text: 'ても', reason: '「ても」表即使，語意不同。' },
            { text: 'ては', reason: '「ては」表反復或不可以，語意不同。' },
            { text: 'ので', reason: '「ので」表原因，接續不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たら」表示前項完成後做後項',
            analysis: '「たら」既可表假設條件，也可表示時間順序（做完後）。',
            comparisons: ['着いたら電話して：到了之後打電話（時間）', '雨が降ったら行かない：如果下雨就不去（假設）'],
            commonMistakes: ['「たら」後句可以是命令/請求，「ば」較不自然'],
        },
    },
    // ━━━ と（條件） ━━━
    {
        id: 'g_n4_199', category: 'grammar', level: 'N4', tags: ['conditional', 'to'],
        stem: 'このボタンを押{お}す___、ドアが開{ひら}きます。',
        stemZh: '按下這個按鈕，門就會開。',
        options: [
            { text: 'と', reason: '正確！「と」表示自然因果或必然結果。' },
            { text: 'ば', reason: '「ば」也可以，但「と」更適合機械操作。' },
            { text: 'たら', reason: '「たら」也可以，但「と」更強調必然。' },
            { text: 'なら', reason: '「なら」表假設前提，不適合操作說明。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「と」表示自然因果/必然結果',
            analysis: '「V辭書形＋と」表示一旦做了前項，後項必然發生。常用於操作說明、自然現象。',
            comparisons: ['ボタンを押すと開く：按就開（必然）', 'ボタンを押せば開く：按的話就開（假設）'],
            commonMistakes: ['「と」後句不能用意志表現（命令、請求等）'],
        },
    },
    // ━━━ なら ━━━
    {
        id: 'g_n4_200', category: 'grammar', level: 'N4', tags: ['conditional', 'nara'],
        stem: '日本{にほん}に行{い}く___、京都{きょうと}がおすすめだよ。',
        stemZh: '如果要去日本的話，推薦京都喔。',
        options: [
            { text: 'と', reason: '「と」表必然因果，不適合建議。' },
            { text: 'ば', reason: '「行けば」也可以，但不如「なら」自然。' },
            { text: 'たら', reason: '「行ったら」也可以，但「なら」更強調前提。' },
            { text: 'なら', reason: '正確！「なら」表示針對對方的話題給予建議。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「なら」表示以對方的話題為前提',
            analysis: '「なら」用於接收對方的信息後，提出建議或意見。',
            comparisons: ['行くなら京都：要去的話推薦京都（建議）', '行ったら連絡して：去了之後聯絡我（時間）'],
            commonMistakes: ['「なら」常用於給建議的場景'],
        },
    },
    // ━━━ ほど〜ない ━━━
    {
        id: 'g_n4_201', category: 'grammar', level: 'N4', tags: ['comparison', 'hodo-nai'],
        stem: '東京{とうきょう}は大阪{おおさか}___人{ひと}が多{おお}くない。',
        stemZh: '東京沒有大阪那麼多人。（反義示例句）',
        options: [
            { text: 'より', reason: '「より」表比較，但此句用否定，應用「ほど」。' },
            { text: 'ほど', reason: '正確！「AはBほど〜ない」表示A不如B。' },
            { text: 'くらい', reason: '「くらい」表程度，但不構成否定比較。' },
            { text: 'まで', reason: '「まで」表到…為止，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ほど〜ない」表示不如…那麼…',
            analysis: '「AはBほど〜ない」表示A的程度不如B。注意：此為語法示例。',
            comparisons: ['大阪ほど多くない：沒有大阪那麼多', '大阪より少ない：比大阪少'],
            commonMistakes: ['「ほど〜ない」＝否定比較 / 「より」＝肯定比較'],
        },
    },
    // ━━━ ほかに ━━━
    {
        id: 'g_n4_202', category: 'grammar', level: 'N4', tags: ['hoka-ni'],
        stem: '日本語{にほんご}の___、英語{えいご}も話{はな}せます。',
        stemZh: '除了日語之外，也會說英語。',
        options: [
            { text: 'ほかに', reason: '正確！「Nのほかに」表示除了…之外還有。' },
            { text: '以外{いがい}に', reason: '「以外に」表除了…之外（排除），語感不同。' },
            { text: 'について', reason: '「について」表關於，語意不同。' },
            { text: 'に対{たい}して', reason: '「に対して」表對於，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ほかに」表示除此之外還有',
            analysis: '「Nのほかに」表示除了N之外還有其他，是追加的語感。',
            comparisons: ['日本語のほかに英語も：除了日語還有英語（追加）', '日本語以外に英語も：日語之外還有英語（排除＋追加）'],
            commonMistakes: ['「ほかに」：追加語感較強 / 「以外」：排除語感較強'],
        },
    },
    // ━━━ 以外 ━━━
    {
        id: 'g_n4_203', category: 'grammar', level: 'N4', tags: ['igai'],
        stem: '肉{にく}___は何{なん}でも食{た}べられます。',
        stemZh: '除了肉以外什麼都能吃。',
        options: [
            { text: 'のほかに', reason: '「ほかに」表追加，此處是排除。' },
            { text: '以外{いがい}', reason: '正確！「以外」表示除了…之外都…。' },
            { text: 'だけ', reason: '「だけ」表只有，語意不同。' },
            { text: 'しか', reason: '「しか」需搭配否定，語法不合。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「以外」表示排除',
            analysis: '「N以外（は）」表示除了N之外的所有，排除語感。',
            comparisons: ['肉以外は食べられる：除了肉都能吃（排除肉）', '肉のほかにも食べられない：除了肉還有不能吃的（追加）'],
            commonMistakes: ['「以外」後面常搭配全面性的表達（全部、什麼都等）'],
        },
    },
    // ━━━ にとって ━━━
    {
        id: 'g_n4_204', category: 'grammar', level: 'N4', tags: ['ni-totte'],
        stem: '私{わたし}___、家族{かぞく}が一番{いちばん}大切{たいせつ}だ。',
        stemZh: '對我來說，家人最重要。',
        options: [
            { text: 'にとって', reason: '正確！「にとって」表示從某人的立場來看。' },
            { text: 'について', reason: '「について」表關於，語意不同。' },
            { text: 'として', reason: '「として」表身份，語意不同。' },
            { text: 'に対{たい}して', reason: '「に対して」表對於（對象），語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にとって」表示從某立場看',
            analysis: '「Nにとって」表示從某人的角度或立場來評價。',
            comparisons: ['私にとって大切だ：對我來說很重要', '私について話す：談關於我的事'],
            commonMistakes: ['「にとって」：立場/觀點 / 「について」：話題/主題'],
        },
    },
    // ━━━ について ━━━
    {
        id: 'g_n4_205', category: 'grammar', level: 'N4', tags: ['ni-tsuite'],
        stem: '日本{にほん}の文化{ぶんか}___レポートを書{か}いた。',
        stemZh: '寫了一篇關於日本文化的報告。',
        options: [
            { text: 'にとって', reason: '「にとって」表立場，不表話題。' },
            { text: 'について', reason: '正確！「について」表示關於某話題。' },
            { text: 'に対{たい}して', reason: '「に対して」表對於，語感不同。' },
            { text: 'によって', reason: '「によって」表根據或因為，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「について」表示關於',
            analysis: '「Nについて」表示以N為話題或主題。',
            comparisons: ['文化について書いた：寫了關於文化的（話題）', '文化に対して意見を言う：對文化提出意見（對象）'],
            commonMistakes: ['「について」：話題 / 「に対して」：對象（有對立語感）'],
        },
    },
    // ━━━ によると ━━━
    {
        id: 'g_n4_206', category: 'grammar', level: 'N4', tags: ['ni-yoru-to'],
        stem: 'ニュース___、明日{あした}は台風{たいふう}が来{く}るそうだ。',
        stemZh: '根據新聞，聽說明天颱風會來。',
        options: [
            { text: 'について', reason: '「について」表話題，不表資訊來源。' },
            { text: 'にとって', reason: '「にとって」表立場，不表資訊來源。' },
            { text: 'によると', reason: '正確！「によると」表示資訊來源。' },
            { text: 'に対{たい}して', reason: '「に対して」表對於，不表資訊來源。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「によると」表示消息來源',
            analysis: '「Nによると」表示根據某資訊來源。常搭配「そうだ」「ということだ」。',
            comparisons: ['ニュースによると：根據新聞', '先生によると：根據老師說'],
            commonMistakes: ['「によると」後面常接傳聞表達（そうだ/ということだ）'],
        },
    },
    // ━━━ おかげで ━━━
    {
        id: 'g_n4_207', category: 'grammar', level: 'N4', tags: ['okage-de'],
        stem: '先生{せんせい}の___、日本語{にほんご}が上手{じょうず}になった。',
        stemZh: '多虧了老師，日語變好了。',
        options: [
            { text: 'せいで', reason: '「せいで」用於負面結果，此處是正面。' },
            { text: 'おかげで', reason: '正確！「おかげで」表正面原因（多虧）。' },
            { text: 'ために', reason: '「ために」表目的或原因，但不表感謝。' },
            { text: 'わりに', reason: '「わりに」表出乎意料，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「おかげで」表示正面原因',
            analysis: '「おかげで」表示由於某正面原因，產生好的結果（多虧）。',
            comparisons: ['先生のおかげで：多虧老師（正面）', '先生のせいで：都怪老師（負面）'],
            commonMistakes: ['「おかげで」：正面（感謝）/ 「せいで」：負面（抱怨）'],
        },
    },
    // ━━━ せいで ━━━
    {
        id: 'g_n4_208', category: 'grammar', level: 'N4', tags: ['sei-de'],
        stem: '雨{あめ}の___、試合{しあい}が中止{ちゅうし}になった。',
        stemZh: '都怪下雨，比賽被取消了。',
        options: [
            { text: 'おかげで', reason: '「おかげで」用於正面結果，此處是負面。' },
            { text: 'ために', reason: '「ために」表目的或客觀原因，不帶抱怨。' },
            { text: 'せいで', reason: '正確！「せいで」表負面原因（都怪）。' },
            { text: 'ので', reason: '「ので」表客觀原因，不帶怨氣。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「せいで」表示負面原因',
            analysis: '「せいで」表示因為某個負面原因導致壞結果，帶有抱怨語氣。',
            comparisons: ['雨のせいで中止：都怪雨被取消（抱怨）', '雨のおかげで涼しい：多虧雨涼快了（感謝）'],
            commonMistakes: ['「せいで」：負面歸因 / 「おかげで」：正面感謝'],
        },
    },
    // ━━━ し ━━━
    {
        id: 'g_n4_209', category: 'grammar', level: 'N4', tags: ['shi'],
        stem: 'あの店{みせ}は安{やす}い___、おいしいし、よく行{い}く。',
        stemZh: '那家店又便宜又好吃，常去。',
        options: [
            { text: 'し', reason: '正確！「し」表示列舉多個理由。' },
            { text: 'て', reason: '「て」表順序或原因，不表列舉理由。' },
            { text: 'から', reason: '「から」表單一原因，不適合列舉。' },
            { text: 'ので', reason: '「ので」表單一原因，不適合列舉。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「し」表示列舉理由',
            analysis: '「し」用於列舉多個並列的理由，帶有「不僅如此」的語感。',
            comparisons: ['安いし、おいしい：又便宜又好吃（列舉理由）', '安くて、おいしい：既便宜又好吃（並列描述）'],
            commonMistakes: ['「し」可以只列一個理由，暗示還有其他理由'],
        },
    },
    // ━━━ しか〜ない ━━━
    {
        id: 'g_n4_210', category: 'grammar', level: 'N4', tags: ['shika-nai'],
        stem: '財布{さいふ}に100円{えん}___ない。',
        stemZh: '錢包裡只有100日圓。',
        options: [
            { text: 'だけ', reason: '「だけ」表只有，但後面不用否定。' },
            { text: 'しか', reason: '正確！「しか＋ない」表示只有（帶不足語感）。' },
            { text: 'ばかり', reason: '「ばかり」表光是，語意不同。' },
            { text: 'まで', reason: '「まで」表到…為止，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「しか〜ない」表示只有（感嘆少）',
            analysis: '「しか」必須搭配否定形，表示數量少、只有這些的不足感。',
            comparisons: ['100円しかない：只有100圓（不夠）', '100円だけある：只有100圓（客觀）'],
            commonMistakes: ['「しか」：只有（不足感）+ 否定 / 「だけ」：只有（客觀）+ 肯定'],
        },
    },
    // ━━━ だけ ━━━
    {
        id: 'g_n4_211', category: 'grammar', level: 'N4', tags: ['dake'],
        stem: '必要{ひつよう}な分{ぶん}___持{も}っていけばいい。',
        stemZh: '只帶需要的部分就好。',
        options: [
            { text: 'だけ', reason: '正確！「だけ」表示限定範圍。' },
            { text: 'しか', reason: '「しか」需搭配否定，此句肯定。' },
            { text: 'ばかり', reason: '「ばかり」表光是，語意不同。' },
            { text: 'ほど', reason: '「ほど」表程度，不表限定。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「だけ」表示限定',
            analysis: '「だけ」表示限定在某範圍內，客觀地表示只有那些。',
            comparisons: ['必要な分だけ：只有需要的部分（客觀限定）', '必要な分しかない：只有需要的部分（不足感）'],
            commonMistakes: ['「だけ」接肯定或否定皆可 / 「しか」必須接否定'],
        },
    },
    // ━━━ ても ━━━
    {
        id: 'g_n4_212', category: 'grammar', level: 'N4', tags: ['temo'],
        stem: 'いくら説明{せつめい}し___、彼{かれ}は分{わ}かってくれない。',
        stemZh: '無論怎麼說明，他都不懂。',
        options: [
            { text: 'ても', reason: '正確！「ても」表示即使…也…。' },
            { text: 'たら', reason: '「たら」表條件，不表讓步。' },
            { text: 'ので', reason: '「ので」表原因，語意不同。' },
            { text: 'から', reason: '「から」表原因，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ても」表示即使…也…',
            analysis: '「ても」表示讓步，即使前項成立，後項的結果不變。',
            comparisons: ['説明しても分からない：即使說明也不懂（讓步）', '説明したら分かった：說明之後就懂了（條件）'],
            commonMistakes: ['「いくら〜ても」是強調型讓步：無論多少都…'],
        },
    },
    // ━━━ ようと思う ━━━
    {
        id: 'g_n4_213', category: 'grammar', level: 'N4', tags: ['you-to-omou'],
        stem: '来年{らいねん}は日本{にほん}に旅行{りょこう}に行{い}こう___思{おも}っている。',
        stemZh: '明年打算去日本旅行。',
        options: [
            { text: 'と', reason: '正確！「意向形＋と思う/思っている」表打算。' },
            { text: 'か', reason: '「行こうか思っている」語法不正確。' },
            { text: 'に', reason: '「行こうに思っている」語法不正確。' },
            { text: 'で', reason: '「行こうで思っている」語法不正確。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようと思う」表示打算',
            analysis: '「V意向形＋と思う」表示即時決定，「と思っている」表持續的打算。',
            comparisons: ['行こうと思う：我想去（即時）', '行こうと思っている：打算去（持續計劃）'],
            commonMistakes: ['「と思う」：當下決定 / 「と思っている」：一直打算'],
        },
    },
    // ━━━ つもり ━━━
    {
        id: 'g_n4_214', category: 'grammar', level: 'N4', tags: ['tsumori'],
        stem: '卒業{そつぎょう}したら、大学院{だいがくいん}に進{すす}む___だ。',
        stemZh: '畢業後打算念研究所。',
        options: [
            { text: 'はず', reason: '「はず」表推測，不表意志。' },
            { text: 'つもり', reason: '正確！「つもりだ」表示自己的計畫或打算。' },
            { text: 'よう', reason: '「ようだ」表推測，不表意志。' },
            { text: 'そう', reason: '「そうだ」表外觀推測或傳聞，不表打算。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「つもり」表示打算、計畫',
            analysis: '「V辭書形＋つもりだ」表示已經決定好的計畫。',
            comparisons: ['進むつもりだ：打算升學（已決定）', '進もうと思っている：想升學（還在考慮）'],
            commonMistakes: ['「つもり」比「ようと思う」確定度更高'],
        },
    },
    // ━━━ 予定 ━━━
    {
        id: 'g_n4_215', category: 'grammar', level: 'N4', tags: ['yotei'],
        stem: '来週{らいしゅう}の月曜日{げつようび}に会議{かいぎ}をする___です。',
        stemZh: '預定下週一開會。',
        options: [
            { text: 'つもり', reason: '「つもり」表個人打算，不適合正式安排。' },
            { text: '予定{よてい}', reason: '正確！「予定」表示已安排好的計畫。' },
            { text: 'はず', reason: '「はず」表推測，不表安排。' },
            { text: 'こと', reason: '「することだ」語法不自然。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「予定」表示已安排的計畫',
            analysis: '「V辭書形＋予定だ」表示已經安排好、預定要做的事。',
            comparisons: ['会議をする予定：預定開會（已安排）', '会議をするつもり：打算開會（個人意志）'],
            commonMistakes: ['「予定」用於正式安排 / 「つもり」用於個人打算'],
        },
    },
    // ━━━ かどうか ━━━
    {
        id: 'g_n4_216', category: 'grammar', level: 'N4', tags: ['ka-dou-ka'],
        stem: '明日{あした}来{く}る___、教{おし}えてください。',
        stemZh: '請告訴我是否明天會來。',
        options: [
            { text: 'かどうか', reason: '正確！「かどうか」表示是否。' },
            { text: 'かと', reason: '「かと」不構成此句型。' },
            { text: 'かを', reason: '「かを」語法不自然。' },
            { text: 'かに', reason: '「かに」語法不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かどうか」表示是否',
            analysis: '「V普通形＋かどうか」表示不確定是A還是非A。',
            comparisons: ['来るかどうか：是否來', '来るか来ないか：來還是不來（較長的說法）'],
            commonMistakes: ['「かどうか」是「か〜ないか」的簡略形'],
        },
    },
    // ━━━ ように言う ━━━
    {
        id: 'g_n4_217', category: 'grammar', level: 'N4', tags: ['you-ni-iu'],
        stem: '医者{いしゃ}にお酒{さけ}を飲{の}まない___言{い}われた。',
        stemZh: '被醫生說要我不要喝酒。',
        options: [
            { text: 'ために', reason: '「ために」表目的，不表間接命令。' },
            { text: 'ように', reason: '正確！「ように言う」表示間接轉述命令或請求。' },
            { text: 'として', reason: '「として」表身份，語意不同。' },
            { text: 'ことに', reason: '「ことに」不構成間接引用。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ように言う」表示間接命令',
            analysis: '「Vように言う/言われる」用於間接引用命令或建議。',
            comparisons: ['飲まないように言われた：被叮嚀不要喝', '飲むなと言われた：被說不准喝（直接引用）'],
            commonMistakes: ['「ように言う」：間接引用（較柔和）/ 「と言う」：直接引用'],
        },
    },
    // ━━━ ていただけませんか ━━━
    {
        id: 'g_n4_218', category: 'grammar', level: 'N4', tags: ['keigo', 'te-itadakemasen-ka'],
        stem: 'すみません、この漢字{かんじ}の読{よ}み方{かた}を教{おし}えて___か。',
        stemZh: '不好意思，可以請您教我這個漢字的讀法嗎？',
        options: [
            { text: 'くれません', reason: '「くれませんか」也可以，但不夠禮貌。' },
            { text: 'もらえません', reason: '「もらえませんか」也可以，禮貌度中等。' },
            { text: 'いただけません', reason: '正確！「ていただけませんか」是最禮貌的請求。' },
            { text: 'ください', reason: '「ください」是請求，但不如「いただけませんか」禮貌。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ていただけませんか」是最禮貌的請求',
            analysis: '禮貌程度：てください ＜ てくれませんか ＜ てもらえませんか ＜ ていただけませんか。',
            comparisons: ['教えてください：請教我（普通）', '教えていただけませんか：能否請您教我（最禮貌）'],
            commonMistakes: ['「いただく」是「もらう」的自謙語'],
        },
    },
    // ━━━ させてください ━━━
    {
        id: 'g_n4_219', category: 'grammar', level: 'N4', tags: ['causative', 'sasete-kudasai'],
        stem: 'ぜひ私{わたし}にも参加{さんか}___ください。',
        stemZh: '請務必也讓我參加。',
        options: [
            { text: 'して', reason: '「参加してください」是請對方參加，方向不同。' },
            { text: 'させて', reason: '正確！「させてください」表示請讓我做某事。' },
            { text: 'されて', reason: '「参加されてください」語法不自然。' },
            { text: 'できて', reason: '「参加できてください」語法不正確。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「させてください」表示請讓我做',
            analysis: '「V使役形＋てください」表示請求對方允許自己做某事。',
            comparisons: ['参加させてください：請讓我參加', '参加してください：請您參加'],
            commonMistakes: ['「させてください」用於請求許可，不是命令對方'],
        },
    },
    // ━━━ させられる（使役被動） ━━━
    {
        id: 'g_n4_220', category: 'grammar', level: 'N4', tags: ['causative-passive', 'saserareru'],
        stem: '子供{こども}の頃{ころ}、毎日{まいにち}ピアノを練習{れんしゅう}___。',
        stemZh: '小時候每天被迫練鋼琴。',
        options: [
            { text: 'させた', reason: '「させた」是使役，表讓別人做。' },
            { text: 'された', reason: '「された」是被動，但不含被迫的語感。' },
            { text: 'させられた', reason: '正確！「させられる」是使役被動，表被迫做。' },
            { text: 'してもらった', reason: '「してもらった」表請別人做，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「させられる」表示被迫做某事',
            analysis: '使役被動形結合使役（讓做）和被動（被），表示被迫做不情願的事。',
            comparisons: ['練習させられた：被迫練習（不情願）', '練習させた：讓他練習（命令者視角）'],
            commonMistakes: ['五段動詞常縮略：飲ませられる→飲まされる'],
        },
    },
    // ━━━ たり〜たり ━━━
    {
        id: 'g_n4_221', category: 'grammar', level: 'N4', tags: ['tari-tari'],
        stem: '休{やす}みの日{ひ}は映画{えいが}を見{み}___、買{か}い物{もの}をしたりする。',
        stemZh: '假日會看看電影、逛逛街之類的。',
        options: [
            { text: 'たり', reason: '正確！「たり〜たりする」表示列舉動作。' },
            { text: 'たら', reason: '「たら」表條件，不表列舉。' },
            { text: 'ながら', reason: '「ながら」表同時進行，不表列舉。' },
            { text: 'ても', reason: '「ても」表即使，不表列舉。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たり〜たりする」表示列舉動作',
            analysis: '「V1たり、V2たりする」表示從多個動作中列舉幾個代表，暗示還有其他。',
            comparisons: ['映画を見たり買い物をしたりする：看電影、逛街之類', '映画を見て買い物をする：看了電影然後逛街（順序）'],
            commonMistakes: ['「たり〜たり」結尾必須加「する」'],
        },
    },
    // ━━━ ところに ━━━
    {
        id: 'g_n4_222', category: 'grammar', level: 'N4', tags: ['tokoro-ni'],
        stem: '出{で}かけようとした___、友達{ともだち}が来{き}た。',
        stemZh: '正要出門的時候，朋友來了。',
        options: [
            { text: 'ときに', reason: '「ときに」也表時間，但「ところに」更強調剛好那時。' },
            { text: 'まえに', reason: '「まえに」表之前，不表剛好那時。' },
            { text: 'ところに', reason: '正確！「ところに」表示正當那個時刻。' },
            { text: 'うちに', reason: '「うちに」表趁著，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ところに」表示正當那時',
            analysis: '「V ところに/へ」表示正在某個時間點時，發生了另一件事。',
            comparisons: ['出かけようとしたところに：正要出門那時', '出かけるときに：出門的時候'],
            commonMistakes: ['「ところに」比「ときに」更強調巧合感'],
        },
    },
    // ━━━ うちに ━━━
    {
        id: 'g_n4_223', category: 'grammar', level: 'N4', tags: ['uchi-ni'],
        stem: '温{あたた}かい___、食{た}べてください。',
        stemZh: '請趁熱吃。',
        options: [
            { text: 'あいだに', reason: '「あいだに」表期間，但不如「うちに」強調趁著。' },
            { text: 'ときに', reason: '「ときに」表時候，不強調趁著。' },
            { text: 'まえに', reason: '「まえに」表之前，語意不同。' },
            { text: 'うちに', reason: '正確！「うちに」表示趁著某狀態還在的時候。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「うちに」表示趁著',
            analysis: '「うちに」表示趁著某狀態還維持著的時候趕快做某事。',
            comparisons: ['温かいうちに食べる：趁熱吃（狀態會改變）', '温かいときに食べる：熱的時候吃（單純時間）'],
            commonMistakes: ['「うちに」暗示狀態會改變，要趁早行動'],
        },
    },
    // ━━━ 間（あいだ） ━━━
    {
        id: 'g_n4_224', category: 'grammar', level: 'N4', tags: ['aida'],
        stem: '子供{こども}が寝{ね}ている___、掃除{そうじ}をした。',
        stemZh: '趁孩子睡覺的期間打掃了。',
        options: [
            { text: '間{あいだ}', reason: '正確！「間」表示在整段期間持續做。' },
            { text: '間{あいだ}に', reason: '「間に」表在期間內做完某件事，此處是持續打掃。' },
            { text: 'うちに', reason: '「うちに」表趁著，但此處強調整段期間。' },
            { text: 'ときに', reason: '「ときに」表時候，不強調期間。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「間」vs「間に」',
            analysis: '「間」表示在整段期間持續做某事，「間に」表在期間內某一刻做完。',
            comparisons: ['寝ている間、掃除をした：睡覺的期間一直在打掃', '寝ている間に、掃除をした：趁睡覺時打掃完了'],
            commonMistakes: ['「間」：持續性動作 / 「間に」：瞬間性或完成性動作'],
        },
    },
    // ━━━ 前に ━━━
    {
        id: 'g_n4_225', category: 'grammar', level: 'N4', tags: ['mae-ni'],
        stem: '寝{ね}る___、歯{は}を磨{みが}きます。',
        stemZh: '睡覺之前刷牙。',
        options: [
            { text: '前{まえ}に', reason: '正確！「V辭書形＋前に」表示在做某事之前。' },
            { text: '後{あと}で', reason: '「後で」表之後，語意相反。' },
            { text: 'ときに', reason: '「ときに」表時候，不明確表示先後。' },
            { text: 'までに', reason: '「までに」表期限，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「前に」表示之前',
            analysis: '「V辭書形＋前に」表示在做某動作之前。注意前面必須用辭書形。',
            comparisons: ['寝る前に：睡覺之前', '寝た後で：睡了之後'],
            commonMistakes: ['○ 寝る前に / × 寝た前に → 「前に」前面用辭書形'],
        },
    },
    // ━━━ 後で ━━━
    {
        id: 'g_n4_226', category: 'grammar', level: 'N4', tags: ['ato-de'],
        stem: 'ご飯{はん}を食{た}べた___、散歩{さんぽ}に行{い}った。',
        stemZh: '吃完飯之後去散步了。',
        options: [
            { text: '前{まえ}に', reason: '「前に」表之前，語意相反。' },
            { text: '後{あと}で', reason: '正確！「Vた形＋後で」表示之後。' },
            { text: 'ときに', reason: '「ときに」表時候，不表先後。' },
            { text: 'うちに', reason: '「うちに」表趁著，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「後で」表示之後',
            analysis: '「Vた形＋後で」表示完成前項動作之後做後項。',
            comparisons: ['食べた後で散歩した：吃完後散步', '食べてから散歩した：吃完之後散步（強調先後）'],
            commonMistakes: ['「後で」＝較輕鬆的先後 / 「てから」＝更強調必須先完成'],
        },
    },
    // ━━━ までに ━━━
    {
        id: 'g_n4_227', category: 'grammar', level: 'N4', tags: ['made-ni'],
        stem: '金曜日{きんようび}___にレポートを出{だ}してください。',
        stemZh: '請在星期五之前交報告。',
        options: [
            { text: 'まで', reason: '「まで」表持續到那個時間，不表期限。' },
            { text: 'までに', reason: '正確！「までに」表示在某時間點之前完成。' },
            { text: 'から', reason: '「から」表從…開始，語意不同。' },
            { text: 'ごろ', reason: '「ごろ」表大約…時候，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「までに」表示期限',
            analysis: '「までに」表示在某個時間點之前必須完成某事。',
            comparisons: ['金曜日までに出す：星期五之前交（期限）', '金曜日まで待つ：等到星期五（持續）'],
            commonMistakes: ['「までに」：期限（動作瞬間完成）/ 「まで」：持續到那時'],
        },
    },
    // ━━━ とおり ━━━
    {
        id: 'g_n4_228', category: 'grammar', level: 'N4', tags: ['toori'],
        stem: '先生{せんせい}が言{い}った___にやってみてください。',
        stemZh: '請按照老師說的做看看。',
        options: [
            { text: 'ように', reason: '「ように」表方式，但「とおり」更強調完全一樣。' },
            { text: 'とおり', reason: '正確！「とおり」表示完全按照。' },
            { text: 'みたいに', reason: '「みたいに」表像…一樣，語感不同。' },
            { text: 'ために', reason: '「ために」表目的，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「とおり」表示按照',
            analysis: '「Vた形/Nの＋とおり」表示完全按照某方式去做。',
            comparisons: ['言ったとおりにやる：按照說的做', '言ったようにやる：像說的那樣做'],
            commonMistakes: ['「とおり」比「ように」更強調完全一致'],
        },
    },
    // ━━━ わけだ ━━━
    {
        id: 'g_n4_229', category: 'grammar', level: 'N4', tags: ['wake-da'],
        stem: '彼{かれ}は5年間{ねんかん}日本{にほん}に住{す}んでいた。日本語{にほんご}が上手{じょうず}な___だ。',
        stemZh: '他在日本住了五年，難怪日語這麼好。',
        options: [
            { text: 'はず', reason: '「はず」表推測，不表恍然大悟。' },
            { text: 'わけ', reason: '正確！「わけだ」表示難怪、也就是說。' },
            { text: 'こと', reason: '「ことだ」表建議，語意不同。' },
            { text: 'もの', reason: '「ものだ」表感嘆，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「わけだ」表示恍然大悟',
            analysis: '「わけだ」表示了解原因後恍然大悟：「難怪」「原來如此」。',
            comparisons: ['上手なわけだ：難怪這麼好（恍然大悟）', '上手なはずだ：應該很好（推測）'],
            commonMistakes: ['「わけだ」：理解了原因 / 「はずだ」：根據道理推測'],
        },
    },
    // ━━━ わけではない ━━━
    {
        id: 'g_n4_230', category: 'grammar', level: 'N4', tags: ['wake-dewa-nai'],
        stem: '日本語{にほんご}が好{す}きじゃない___、ただ時間{じかん}がないだけだ。',
        stemZh: '並不是不喜歡日語，只是沒有時間而已。',
        options: [
            { text: 'わけではない', reason: '正確！「わけではない」表示部分否定。' },
            { text: 'はずがない', reason: '「はずがない」表不可能，語意太強。' },
            { text: 'ことはない', reason: '「ことはない」表沒必要，語意不同。' },
            { text: 'ものではない', reason: '「ものではない」表不應該，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「わけではない」表示並非如此',
            analysis: '「わけではない」用於部分否定或修正對方的誤解。',
            comparisons: ['好きじゃないわけではない：並非不喜歡（部分否定）', '好きなはずがない：不可能喜歡（完全否定）'],
            commonMistakes: ['「わけではない」：部分否定 / 「わけがない」：完全否定'],
        },
    },
    // ━━━ わけがない ━━━
    {
        id: 'g_n4_231', category: 'grammar', level: 'N4', tags: ['wake-ga-nai'],
        stem: 'こんな簡単{かんたん}な問題{もんだい}が分{わ}からない___。',
        stemZh: '不可能不懂這麼簡單的問題。',
        options: [
            { text: 'はずだ', reason: '「はずだ」表推測，不表斷定否定。' },
            { text: 'わけだ', reason: '「わけだ」表恍然大悟，語意不同。' },
            { text: 'ことだ', reason: '「ことだ」表建議，語意不同。' },
            { text: 'わけがない', reason: '正確！「わけがない」表示不可能，沒道理。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「わけがない」表示沒道理、不可能',
            analysis: '「わけがない」表示從道理上判斷絕對不可能。比「はずがない」更強烈。',
            comparisons: ['分からないわけがない：不可能不懂（強烈否定）', '分からないはずがない：不應該不懂（推測否定）'],
            commonMistakes: ['否定強度：わけがない ＞ はずがない ＞ ないだろう'],
        },
    },
    // ━━━ ようにしてください ━━━
    {
        id: 'g_n4_232', category: 'grammar', level: 'N4', tags: ['you-ni-shite-kudasai'],
        stem: '遅刻{ちこく}しない___してください。',
        stemZh: '請注意不要遲到。',
        options: [
            { text: 'ように', reason: '正確！「ようにしてください」表示請注意做到。' },
            { text: 'ために', reason: '「ためにしてください」不構成慣用句型。' },
            { text: 'ことに', reason: '「ことにしてください」語法不自然。' },
            { text: 'みたいに', reason: '「みたいにしてください」表示像…一樣做，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようにしてください」表示請注意做到',
            analysis: '「Vないように/Vるようにしてください」是柔和的請求或叮嚀。',
            comparisons: ['遅刻しないようにしてください：請注意不要遲到', '遅刻しないでください：請不要遲到（較直接）'],
            commonMistakes: ['「ようにしてください」比「ないでください」更委婉'],
        },
    },
    // ━━━ がる ━━━
    {
        id: 'g_n4_233', category: 'grammar', level: 'N4', tags: ['garu'],
        stem: '弟{おとうと}はいつも新{あたら}しいおもちゃを欲{ほ}し___。',
        stemZh: '弟弟總是想要新玩具。',
        options: [
            { text: 'がる', reason: '正確！「がる」用於描述第三人稱的心理狀態。' },
            { text: 'い', reason: '「ほしい」用於第一人稱或疑問句。' },
            { text: 'そうだ', reason: '「ほしそうだ」表看起來想要，語感不同。' },
            { text: 'らしい', reason: '「ほしいらしい」表聽說想要，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「がる」用於第三人稱心理描述',
            analysis: '「い形容詞去い＋がる」用於客觀描述第三人稱的感情或願望。',
            comparisons: ['欲しがる：（他）想要（第三人稱）', '欲しい：（我）想要（第一人稱）'],
            commonMistakes: ['「がる」用於：怖がる（害怕）、嫌がる（討厭）、欲しがる（想要）等'],
        },
    },
    // ━━━ たがる ━━━
    {
        id: 'g_n4_234', category: 'grammar', level: 'N4', tags: ['tagaru'],
        stem: '子供{こども}はいつも外{そと}で遊{あそ}び___。',
        stemZh: '小孩總是想在外面玩。',
        options: [
            { text: 'たがる', reason: '正確！「たがる」用於描述第三人稱的願望。' },
            { text: 'たい', reason: '「たい」用於第一人稱，不用於第三人稱。' },
            { text: 'そうだ', reason: '「遊びそうだ」表看起來要玩，語意不同。' },
            { text: 'らしい', reason: '「遊びらしい」語法不正確。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たがる」表示第三人稱想做某事',
            analysis: '「V ます形＋たがる」用於客觀描述第三人稱想做某動作。',
            comparisons: ['遊びたがる：（他）想玩（第三人稱）', '遊びたい：（我）想玩（第一人稱）'],
            commonMistakes: ['「たい」：自己想做 / 「たがる」：他人想做'],
        },
    },
    // ━━━ すぎる ━━━
    {
        id: 'g_n4_235', category: 'grammar', level: 'N4', tags: ['sugiru'],
        stem: 'ゆうべ食{た}べ___、お腹{なか}が痛{いた}い。',
        stemZh: '昨晚吃太多了，肚子好痛。',
        options: [
            { text: 'すぎて', reason: '正確！「すぎる」表示過度，此處用て形連接。' },
            { text: 'ながら', reason: '「ながら」表同時進行，語意不同。' },
            { text: 'たくて', reason: '「食べたくて」表想吃，不表過度。' },
            { text: 'ないで', reason: '「食べないで」表不吃，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「すぎる」表示太過、過度',
            analysis: '「V ます形＋すぎる」表示做某事過度了。也可接形容詞。',
            comparisons: ['食べすぎた：吃太多了', '高すぎる：太貴了', '静かすぎる：太安靜了'],
            commonMistakes: ['動詞用ます形：食べすぎる / い形去い：高すぎる / な形去な：静かすぎる'],
        },
    },
    // ━━━ 方（かた） ━━━
    {
        id: 'g_n4_236', category: 'grammar', level: 'N4', tags: ['kata'],
        stem: 'この機械{きかい}の使{つか}い___を教{おし}えてください。',
        stemZh: '請教我這台機器的使用方法。',
        options: [
            { text: '方{かた}', reason: '正確！「V ます形＋方」表示做某事的方法。' },
            { text: 'よう', reason: '「使いよう」存在但較文語。' },
            { text: '具合{ぐあい}', reason: '「使い具合」表使用感受，語意不同。' },
            { text: 'ところ', reason: '「使いところ」語法不正確。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「方（かた）」表示方法',
            analysis: '「V ます形＋方」表示做某動作的方法或方式。',
            comparisons: ['使い方：使用方法', '読み方：讀法', '書き方：寫法'],
            commonMistakes: ['○ 使い方 / × 使う方 → 必須用ます形'],
        },
    },
    // ━━━ おきに ━━━
    {
        id: 'g_n4_237', category: 'grammar', level: 'N4', tags: ['oki-ni'],
        stem: 'この薬{くすり}は4時間{じかん}___に飲{の}んでください。',
        stemZh: '這個藥請每隔四小時吃一次。',
        options: [
            { text: 'おき', reason: '正確！「おきに」表示每隔…。' },
            { text: 'ごと', reason: '「ごとに」表每…，語感稍不同。' },
            { text: 'ずつ', reason: '「ずつ」表每次…，語意不同。' },
            { text: 'だけ', reason: '「だけに」不構成間隔句型。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「おきに」表示每隔',
            analysis: '「N＋おきに」表示每隔固定間隔做某事。',
            comparisons: ['4時間おきに：每隔4小時', '4時間ごとに：每4小時（意思相近）'],
            commonMistakes: ['「おきに」和「ごとに」在時間上常可互換'],
        },
    },
    // ━━━ ずっと ━━━
    {
        id: 'g_n4_238', category: 'grammar', level: 'N4', tags: ['zutto'],
        stem: '子供{こども}の頃{ころ}から___ピアノを弾{ひ}いている。',
        stemZh: '從小時候就一直在彈鋼琴。',
        options: [
            { text: 'ずっと', reason: '正確！「ずっと」表示一直持續。' },
            { text: 'だんだん', reason: '「だんだん」表漸漸，不表一直。' },
            { text: 'そろそろ', reason: '「そろそろ」表差不多該，語意不同。' },
            { text: 'やっと', reason: '「やっと」表終於，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ずっと」表示一直、持續',
            analysis: '「ずっと」表示從某時點到現在或將來一直持續。',
            comparisons: ['ずっと弾いている：一直在彈（持續）', 'やっと弾けた：終於會彈了（達成）'],
            commonMistakes: ['「ずっと」也可以表比較：ずっと大きい＝大得多'],
        },
    },
    // ━━━ やっと ━━━
    {
        id: 'g_n4_239', category: 'grammar', level: 'N4', tags: ['yatto'],
        stem: '3年{ねん}かかって___日本語能力{にほんごのうりょく}試験{しけん}に合格{ごうかく}した。',
        stemZh: '花了三年終於通過了日語能力考試。',
        options: [
            { text: 'やっと', reason: '正確！「やっと」表示花了很長時間終於達成。' },
            { text: 'ずっと', reason: '「ずっと」表一直，不表達成。' },
            { text: 'もう', reason: '「もう」表已經，不強調努力過程。' },
            { text: 'まだ', reason: '「まだ」表還沒，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「やっと」表示終於',
            analysis: '「やっと」表示經過長時間努力終於達成目標。',
            comparisons: ['やっと合格した：終於合格了（強調努力）', 'ついに合格した：終於合格了（強調結果）'],
            commonMistakes: ['「やっと」：強調努力過程 / 「ついに」：強調最終結果'],
        },
    },
    // ━━━ そろそろ ━━━
    {
        id: 'g_n4_240', category: 'grammar', level: 'N4', tags: ['sorosoro'],
        stem: '___帰{かえ}らないと、終電{しゅうでん}に間{ま}に合{あ}わない。',
        stemZh: '差不多該回去了，不然趕不上末班車。',
        options: [
            { text: 'もう', reason: '「もう」表已經，不表差不多該。' },
            { text: 'まだ', reason: '「まだ」表還沒，語意不同。' },
            { text: 'そろそろ', reason: '正確！「そろそろ」表示差不多該做某事了。' },
            { text: 'やっと', reason: '「やっと」表終於，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「そろそろ」表示差不多該…了',
            analysis: '「そろそろ」表示時間接近，差不多該做某事的時候了。',
            comparisons: ['そろそろ帰る：差不多該回去了', 'もう帰る：已經要回去了'],
            commonMistakes: ['「そろそろ」帶有從容的語感，「もう」較急迫'],
        },
    },
    // ━━━ とか〜とか ━━━
    {
        id: 'g_n4_241', category: 'grammar', level: 'N4', tags: ['toka-toka'],
        stem: '趣味{しゅみ}は読書{どくしょ}___旅行{りょこう}とかです。',
        stemZh: '興趣是看書啦、旅行之類的。',
        options: [
            { text: 'とか', reason: '正確！「とか〜とか」表示列舉例子。' },
            { text: 'やら', reason: '「やら」也表列舉，但較文語。' },
            { text: 'たり', reason: '「たり」用於動詞列舉，不直接接名詞。' },
            { text: 'など', reason: '「など」可以，但「とか」更口語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とか〜とか」表示舉例',
            analysis: '「NとかNとか」用於口語中列舉幾個例子，暗示還有其他。',
            comparisons: ['読書とか旅行とか：看書啦旅行之類（口語）', '読書や旅行など：看書和旅行等（書面語）'],
            commonMistakes: ['「とか」：口語列舉 / 「や」「など」：書面語列舉'],
        },
    },
    // ━━━ って ━━━
    {
        id: 'g_n4_242', category: 'grammar', level: 'N4', tags: ['tte'],
        stem: '「さくら」___名前{なまえ}のレストランを知{し}ってる？',
        stemZh: '你知道一家叫「さくら」的餐廳嗎？',
        options: [
            { text: 'って', reason: '正確！「って」是「という」的口語形。' },
            { text: 'との', reason: '「との」較書面語。' },
            { text: 'っていう', reason: '「っていう」也正確，但「って」更簡略。' },
            { text: 'だの', reason: '「だの」表列舉，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「って」是「という」的口語縮略',
            analysis: '口語中「という」常縮略為「って」或「っていう」。',
            comparisons: ['「さくら」というレストラン：叫做さくら的餐廳（正式）', '「さくら」ってレストラン：叫さくら的餐廳（口語）'],
            commonMistakes: ['「って」＝「という」＝「っていう」意思相同，口語程度不同'],
        },
    },
    // ━━━ ということ ━━━
    {
        id: 'g_n4_243', category: 'grammar', level: 'N4', tags: ['to-iu-koto'],
        stem: '彼{かれ}が来{こ}ない___は、何{なに}かあったのだろう。',
        stemZh: '他不來這件事，一定發生了什麼吧。',
        options: [
            { text: 'こと', reason: '「こと」也可以，但「ということ」更強調引用。' },
            { text: 'ということ', reason: '正確！「ということ」將前面的事實名詞化。' },
            { text: 'もの', reason: '「もの」表事物，不適合此語境。' },
            { text: 'ところ', reason: '「ところ」表場所或時間點，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ということ」將事實名詞化',
            analysis: '「ということ」用於將一件事情或信息轉化為名詞，便於進一步說明。',
            comparisons: ['来ないということは：不來這件事表示…', '来ないことは知っている：知道他不來'],
            commonMistakes: ['「ということは」後面常接推論或判斷'],
        },
    },
    // ━━━ と言われている ━━━
    {
        id: 'g_n4_244', category: 'grammar', level: 'N4', tags: ['to-iwarete-iru'],
        stem: '日本{にほん}は安全{あんぜん}な国{くに}だ___いる。',
        stemZh: '日本據說是安全的國家。',
        options: [
            { text: 'と思{おも}って', reason: '「と思っている」表個人想法，不表公認。' },
            { text: 'と言{い}われて', reason: '正確！「と言われている」表被公認、據說。' },
            { text: 'と聞{き}いて', reason: '「と聞いている」表聽說過，個人資訊。' },
            { text: 'と知{し}られて', reason: '「と知られている」表廣為人知，語感略不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「と言われている」表示被公認',
            analysis: '「と言われている」表示廣泛流傳的說法或公認的事實。',
            comparisons: ['安全だと言われている：據說安全（公認）', '安全だと聞いている：我聽說安全（個人）'],
            commonMistakes: ['「と言われている」：社會共識 / 「と聞いた」：個人消息'],
        },
    },
    // ━━━ ていた ━━━
    {
        id: 'g_n4_245', category: 'grammar', level: 'N4', tags: ['te-ita'],
        stem: '昨日{きのう}の3時{じ}に電話{でんわ}した時{とき}、彼女{かのじょ}は本{ほん}を読{よ}んで___。',
        stemZh: '昨天三點打電話時，她正在看書。',
        options: [
            { text: 'いた', reason: '正確！「ていた」表過去某時正在進行。' },
            { text: 'いる', reason: '「ている」表現在進行，此處是過去。' },
            { text: 'おいた', reason: '「ておいた」表事先準備，語意不同。' },
            { text: 'あった', reason: '「てあった」表結果狀態，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ていた」表過去進行',
            analysis: '「ていた」是「ている」的過去形，表過去某時正在進行的動作。',
            comparisons: ['読んでいた：過去某時正在讀', '読んでいる：現在正在讀'],
            commonMistakes: ['「ていた」也可表過去的持續狀態：住んでいた＝過去住在'],
        },
    },
    // ━━━ ているところ ━━━
    {
        id: 'g_n4_246', category: 'grammar', level: 'N4', tags: ['te-iru-tokoro'],
        stem: '今{いま}ちょうど夕飯{ゆうはん}を作{つく}っている___なので、後{あと}でかけ直{なお}します。',
        stemZh: '現在正好在做晚餐，等一下再回電。',
        options: [
            { text: 'ところ', reason: '正確！「ているところ」表示正在做某事的當下。' },
            { text: 'ばかり', reason: '「ばかり」表剛做完，不表正在做。' },
            { text: 'まま', reason: '「まま」表維持狀態，語意不同。' },
            { text: 'うち', reason: '「うち」表範圍，此處不適合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ているところ」表示正在進行',
            analysis: '「ているところ」比「ている」更強調此時此刻正在做的狀態。',
            comparisons: ['作っているところだ：正好在做（強調當下）', '作っている：正在做（一般描述）'],
            commonMistakes: ['「ところ」的三階段：するところ→しているところ→したところ'],
        },
    },
    // ━━━ たところ ━━━
    {
        id: 'g_n4_247', category: 'grammar', level: 'N4', tags: ['ta-tokoro'],
        stem: '先生{せんせい}に聞{き}いた___、やはり試験{しけん}は来週{らいしゅう}だそうだ。',
        stemZh: '問了老師之後，果然考試是下週。',
        options: [
            { text: 'ところ', reason: '正確！「たところ」表示做了某事之後得到的結果。' },
            { text: 'ばかり', reason: '「ばかり」表剛做完，不強調結果。' },
            { text: 'あとで', reason: '「あとで」表之後，不強調因果。' },
            { text: 'まえに', reason: '「まえに」表之前，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たところ」表示做了之後發現',
            analysis: '「Vた＋ところ」表示做了某動作之後，發現或得到某結果。',
            comparisons: ['聞いたところ：問了之後（發現…）', '聞いたばかり：剛問過（不強調結果）'],
            commonMistakes: ['「たところ」後面常接意外發現或新資訊'],
        },
    },
    // ━━━ のに（目的） ━━━
    {
        id: 'g_n4_248', category: 'grammar', level: 'N4', tags: ['noni', 'purpose'],
        stem: 'この道具{どうぐ}は木{き}を切{き}る___使{つか}います。',
        stemZh: '這個工具用來切木頭。',
        options: [
            { text: 'のに', reason: '正確！「のに」表示用途或目的。' },
            { text: 'ために', reason: '「ために」表目的，但不適合描述工具用途。' },
            { text: 'ように', reason: '「ように」表間接目的，不表用途。' },
            { text: 'として', reason: '「として」表身份，不表用途。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「のに」表示用途',
            analysis: '「V辭書形＋のに」表示某物用於某目的或用途。',
            comparisons: ['切るのに使う：用來切（用途）', '切るために買った：為了切而買（目的）'],
            commonMistakes: ['「のに」用途 ≠ 「のに」逆接，要根據語境判斷'],
        },
    },
    // ━━━ かわりに ━━━
    {
        id: 'g_n4_249', category: 'grammar', level: 'N4', tags: ['kawari-ni'],
        stem: '今日{きょう}は田中{たなか}さんの___、私{わたし}が発表{はっぴょう}します。',
        stemZh: '今天由我代替田中先生發表。',
        options: [
            { text: 'ために', reason: '「ために」表目的，不表代替。' },
            { text: 'かわりに', reason: '正確！「かわりに」表示代替。' },
            { text: 'ように', reason: '「ように」表方式，語意不同。' },
            { text: 'として', reason: '「として」表身份，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「かわりに」表示代替',
            analysis: '「Nのかわりに」表示代替某人或某物。也可接動詞表交換條件。',
            comparisons: ['田中さんのかわりに：代替田中先生', '電車のかわりにバスで行く：不坐電車改坐公車'],
            commonMistakes: ['「かわりに」也可表交換：手伝うかわりに、昼ご飯をおごって'],
        },
    },
    // ━━━ なかなか〜ない ━━━
    {
        id: 'g_n4_250', category: 'grammar', level: 'N4', tags: ['nakanaka'],
        stem: 'この問題{もんだい}は___解{と}けない。',
        stemZh: '這個問題怎麼都解不開。',
        options: [
            { text: 'ぜんぜん', reason: '「ぜんぜん」表完全不，語感太絕對。' },
            { text: 'あまり', reason: '「あまり」表不太，程度不夠。' },
            { text: 'なかなか', reason: '正確！「なかなか〜ない」表不容易做到。' },
            { text: 'ほとんど', reason: '「ほとんど」表幾乎不，語感不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「なかなか〜ない」表示不容易',
            analysis: '「なかなか」搭配否定表示費力仍做不到。搭配肯定則表相當好。',
            comparisons: ['なかなか解けない：怎麼都解不開（否定＝困難）', 'なかなかいい：相當好（肯定＝讚賞）'],
            commonMistakes: ['「なかなか」＋否定：不容易 / ＋肯定：相當（好）'],
        },
    },
    // ━━━ ぜんぜん ━━━
    {
        id: 'g_n4_251', category: 'grammar', level: 'N4', tags: ['zenzen'],
        stem: '昨日{きのう}の試験{しけん}は___分{わ}からなかった。',
        stemZh: '昨天的考試完全不懂。',
        options: [
            { text: 'なかなか', reason: '「なかなか」表不容易，不表完全不。' },
            { text: 'あまり', reason: '「あまり」表不太，程度不夠。' },
            { text: 'ぜんぜん', reason: '正確！「ぜんぜん〜ない」表完全不。' },
            { text: 'ちょっと', reason: '「ちょっと」表稍微，程度不夠。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ぜんぜん」表示完全不',
            analysis: '「ぜんぜん＋否定」表示完全、一點也不。',
            comparisons: ['ぜんぜん分からない：完全不懂（0%）', 'あまり分からない：不太懂（30%左右）'],
            commonMistakes: ['否定程度：ちょっと ＜ あまり ＜ なかなか ＜ ぜんぜん ＜ まったく'],
        },
    },
    // ━━━ あまり〜ない ━━━
    {
        id: 'g_n4_252', category: 'grammar', level: 'N4', tags: ['amari-nai'],
        stem: '最近{さいきん}は___テレビを見{み}ない。',
        stemZh: '最近不太看電視。',
        options: [
            { text: 'ぜんぜん', reason: '「ぜんぜん」表完全不，程度太強。' },
            { text: 'あまり', reason: '正確！「あまり〜ない」表示不太、不怎麼。' },
            { text: 'たくさん', reason: '「たくさん」搭配否定不自然。' },
            { text: 'よく', reason: '「よく見ない」語法不太自然。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「あまり〜ない」表示不太',
            analysis: '「あまり＋否定」表示程度不高，不怎麼做某事。',
            comparisons: ['あまり見ない：不太看', 'ぜんぜん見ない：完全不看'],
            commonMistakes: ['「あまり」必須搭配否定 / 「あまりに」搭配肯定表太過'],
        },
    },
    // ━━━ さえ ━━━
    {
        id: 'g_n4_253', category: 'grammar', level: 'N4', tags: ['sae'],
        stem: 'お金{かね}___あれば、世界{せかい}中{じゅう}を旅行{りょこう}したい。',
        stemZh: '只要有錢，就想環遊世界。',
        options: [
            { text: 'さえ', reason: '正確！「さえ〜ば」表示只要…就…。' },
            { text: 'でも', reason: '「でも」表即使，語感不同。' },
            { text: 'だけ', reason: '「だけ」表只有，不搭配ば形。' },
            { text: 'しか', reason: '「しか」搭配否定，語法不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「さえ〜ば」表示只要…就…',
            analysis: '「さえ〜ば」表示只要滿足一個最低條件，後面就能成立。',
            comparisons: ['お金さえあれば：只要有錢就…（最低條件）', 'お金があれば：如果有錢就…（一般條件）'],
            commonMistakes: ['「さえ」也可表連…都…：子供さえ知っている＝連小孩都知道'],
        },
    },
    // ━━━ こそ ━━━
    {
        id: 'g_n4_254', category: 'grammar', level: 'N4', tags: ['koso'],
        stem: '「ありがとうございます。」「いいえ、こちら___。」',
        stemZh: '「謝謝。」「不，我才要感謝。」',
        options: [
            { text: 'こそ', reason: '正確！「こそ」表示正是、才是，強調。' },
            { text: 'でも', reason: '「でも」表但是，語意不同。' },
            { text: 'だけ', reason: '「だけ」表只有，不適合此語境。' },
            { text: 'まで', reason: '「まで」表到…為止，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「こそ」表示強調「正是」',
            analysis: '「こそ」用於強調某事物才是重點，常用於回應感謝。',
            comparisons: ['こちらこそ：我才要（感謝/道歉）', '今年こそ合格する：今年一定要合格'],
            commonMistakes: ['「こそ」後面常省略動詞：こちらこそ（ありがとうございます）'],
        },
    },
    // ━━━ けれど/けど ━━━
    {
        id: 'g_n4_255', category: 'grammar', level: 'N4', tags: ['keredo'],
        stem: '日本語{にほんご}は難{むずか}しい___、とても面白{おもしろ}い。',
        stemZh: '日語雖然很難，但非常有趣。',
        options: [
            { text: 'のに', reason: '「のに」帶不滿語氣，此處無不滿。' },
            { text: 'けど', reason: '正確！「けど」表逆接，客觀陳述。' },
            { text: 'から', reason: '「から」表原因，不表逆接。' },
            { text: 'し', reason: '「し」表列舉，不表逆接。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「けど/けれど」表示逆接',
            analysis: '「けど」是「けれども」的口語縮略，表客觀的逆接。',
            comparisons: ['難しいけど面白い：雖然難但有趣（客觀）', '難しいのに面白くない：明明難卻不有趣（不滿）'],
            commonMistakes: ['禮貌程度：けど ＜ けれど ＜ けれども ＜ が'],
        },
    },
    // ━━━ ので ━━━
    {
        id: 'g_n4_256', category: 'grammar', level: 'N4', tags: ['node'],
        stem: '体{からだ}の調子{ちょうし}が悪{わる}い___、今日{きょう}は休{やす}みます。',
        stemZh: '因為身體不舒服，今天請假。',
        options: [
            { text: 'から', reason: '「から」也表原因，但較主觀。' },
            { text: 'ので', reason: '正確！「ので」表客觀原因，較禮貌。' },
            { text: 'のに', reason: '「のに」表逆接，語意不同。' },
            { text: 'けど', reason: '「けど」表逆接，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ので」表示客觀原因',
            analysis: '「ので」比「から」更客觀禮貌，常用於正式場合或請求。',
            comparisons: ['調子が悪いので休みます：因為不舒服所以請假（禮貌）', '調子が悪いから休む：因為不舒服所以休息（隨意）'],
            commonMistakes: ['「ので」：客觀/禮貌 / 「から」：主觀/隨意'],
        },
    },
    // ━━━ なければならない ━━━
    {
        id: 'g_n4_257', category: 'grammar', level: 'N4', tags: ['nakereba-naranai'],
        stem: '明日{あした}までにレポートを出{だ}さ___ならない。',
        stemZh: '必須在明天之前交報告。',
        options: [
            { text: 'なければ', reason: '正確！「なければならない」表示必須。' },
            { text: 'ないと', reason: '「ないといけない」也表必須，但接續不同。' },
            { text: 'なくて', reason: '「なくてはならない」語法可以但此處不合。' },
            { text: 'ずに', reason: '「ずに」表不做就…，語法不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なければならない」表示義務',
            analysis: '「Vない形去い＋なければならない」表示必須做某事。',
            comparisons: ['出さなければならない：必須交（正式）', '出さないといけない：必須交（較口語）', '出さなきゃ：必須交（口語縮略）'],
            commonMistakes: ['口語常縮略為「なきゃ」：出さなきゃ'],
        },
    },
    // ━━━ てもいい ━━━
    {
        id: 'g_n4_258', category: 'grammar', level: 'N4', tags: ['temo-ii'],
        stem: 'ここで写真{しゃしん}を撮{と}っ___いいですか。',
        stemZh: '可以在這裡拍照嗎？',
        options: [
            { text: 'ても', reason: '正確！「てもいい」表示許可。' },
            { text: 'ては', reason: '「てはいけない」表不可以，語意相反。' },
            { text: 'たら', reason: '「たらいい」表建議，不表許可。' },
            { text: 'ので', reason: '「のでいい」語法不正確。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てもいい」表示許可',
            analysis: '「VてもいいV」表示允許做某事。疑問形式用於請求許可。',
            comparisons: ['撮ってもいい：可以拍（許可）', '撮ってはいけない：不可以拍（禁止）'],
            commonMistakes: ['「てもいい」：許可 / 「てはいけない」：禁止'],
        },
    },
    // ━━━ てはいけない ━━━
    {
        id: 'g_n4_259', category: 'grammar', level: 'N4', tags: ['tewa-ikenai'],
        stem: '図書館{としょかん}で大{おお}きな声{こえ}を出{だ}し___いけません。',
        stemZh: '在圖書館不可以大聲說話。',
        options: [
            { text: 'ても', reason: '「てもいけません」語法不正確。' },
            { text: 'ては', reason: '正確！「てはいけない」表示禁止。' },
            { text: 'たら', reason: '「たらいけません」也表禁止，但接續不同。' },
            { text: 'ので', reason: '「のでいけません」語法不正確。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「てはいけない」表示禁止',
            analysis: '「Vてはいけない」表示禁止某動作，常用於規則說明。',
            comparisons: ['出してはいけない：不可以發出（禁止）', '出してもいい：可以發出（許可）'],
            commonMistakes: ['口語常說「ちゃだめ/ちゃいけない」：出しちゃだめ'],
        },
    },
    // ━━━ なさい ━━━
    {
        id: 'g_n4_260', category: 'grammar', level: 'N4', tags: ['nasai'],
        stem: '早{はや}く宿題{しゅくだい}をし___。',
        stemZh: '快點寫作業！',
        options: [
            { text: 'なさい', reason: '正確！「Vます形＋なさい」是柔和的命令。' },
            { text: 'てください', reason: '「してください」是請求，不是命令。' },
            { text: 'ろ', reason: '「しろ」是粗魯的命令形。' },
            { text: 'ましょう', reason: '「しましょう」是邀約，不是命令。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なさい」是柔和命令',
            analysis: '「Vます形＋なさい」比命令形溫和，常用於父母對子女或老師對學生。',
            comparisons: ['しなさい：快做（柔和命令）', 'しろ：做！（粗魯命令）', 'してください：請做（禮貌請求）'],
            commonMistakes: ['命令語氣強度：てください ＜ なさい ＜ 命令形（しろ/しなさい）'],
        },
    },
    // ━━━ ぜひ ━━━
    {
        id: 'g_n4_261', category: 'grammar', level: 'N4', tags: ['zehi'],
        stem: '___一度{いちど}日本{にほん}に来{き}てください。',
        stemZh: '請務必來日本一次。',
        options: [
            { text: 'たぶん', reason: '「たぶん」表大概，語意不同。' },
            { text: 'きっと', reason: '「きっと」表一定，但不用於邀請。' },
            { text: 'ぜひ', reason: '正確！「ぜひ」表示務必，用於強烈邀請或推薦。' },
            { text: 'もし', reason: '「もし」表假如，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「ぜひ」表示務必',
            analysis: '「ぜひ」用於強烈邀請、推薦或希望，帶有誠意。',
            comparisons: ['ぜひ来てください：務必請來（強烈邀請）', 'きっと来てね：一定要來喔（期望）'],
            commonMistakes: ['「ぜひ」常搭配「てください」「たいと思います」'],
        },
    },
    // ━━━ きっと ━━━
    {
        id: 'g_n4_262', category: 'grammar', level: 'N4', tags: ['kitto'],
        stem: '___明日{あした}は晴{は}れるだろう。',
        stemZh: '明天一定會放晴吧。',
        options: [
            { text: 'たぶん', reason: '「たぶん」表大概，確信度低。' },
            { text: 'もしかしたら', reason: '「もしかしたら」表說不定，確信度更低。' },
            { text: 'きっと', reason: '正確！「きっと」表示一定、必定。' },
            { text: 'ちょっと', reason: '「ちょっと」表稍微，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「きっと」表示確信的推測',
            analysis: '「きっと」表示說話者非常確信某事會發生。',
            comparisons: ['きっと晴れる：一定會晴（確信）', 'たぶん晴れる：大概會晴（不太確定）'],
            commonMistakes: ['確信度：きっと ＞ たぶん ＞ もしかしたら'],
        },
    },
    // ━━━ もし ━━━
    {
        id: 'g_n4_263', category: 'grammar', level: 'N4', tags: ['moshi'],
        stem: '___時間{じかん}があったら、映画{えいが}を見{み}に行{い}きませんか。',
        stemZh: '如果有時間的話，要不要去看電影？',
        options: [
            { text: 'もし', reason: '正確！「もし」加強假設語氣。' },
            { text: 'きっと', reason: '「きっと」表一定，不表假設。' },
            { text: 'ぜひ', reason: '「ぜひ」表務必，不表假設。' },
            { text: 'やっぱり', reason: '「やっぱり」表果然，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「もし」加強假設條件',
            analysis: '「もし」放在句首強調假設語氣，常搭配「ば/たら/なら」。',
            comparisons: ['もし時間があったら：如果有時間的話（加強假設）', '時間があったら：有時間的話（一般假設）'],
            commonMistakes: ['「もし」只是加強語氣，不能單獨使用，必須搭配條件形'],
        },
    },
    // ━━━ やはり/やっぱり ━━━
    {
        id: 'g_n4_264', category: 'grammar', level: 'N4', tags: ['yahari'],
        stem: '考{かんが}えたけど、___行{い}かないことにした。',
        stemZh: '想了想，果然還是決定不去。',
        options: [
            { text: 'やっぱり', reason: '正確！「やっぱり」表果然、還是。' },
            { text: 'まさか', reason: '「まさか」表難道，語意不同。' },
            { text: 'たしか', reason: '「たしか」表如果沒記錯，語意不同。' },
            { text: 'そろそろ', reason: '「そろそろ」表差不多該，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「やっぱり」表示果然、到底還是',
            analysis: '「やっぱり」有兩個含義：①果然如預期 ②考慮後還是決定…。',
            comparisons: ['やっぱり行かない：果然還是不去（最終決定）', 'やっぱり美味しい：果然好吃（如預期）'],
            commonMistakes: ['「やっぱり」＝「やはり」口語形'],
        },
    },
    // ━━━ さすが ━━━
    {
        id: 'g_n4_265', category: 'grammar', level: 'N4', tags: ['sasuga'],
        stem: '___プロだ。歌{うた}がとても上手{じょうず}だ。',
        stemZh: '不愧是專業的，唱歌非常好聽。',
        options: [
            { text: 'さすが', reason: '正確！「さすが」表不愧是、果然。' },
            { text: 'まさか', reason: '「まさか」表難道，語意不同。' },
            { text: 'なかなか', reason: '「なかなか」表相當，但不表讚嘆「不愧是」。' },
            { text: 'やっと', reason: '「やっと」表終於，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「さすが」表示不愧是',
            analysis: '「さすが」用於讚嘆某人符合其名聲或地位，表示敬佩。',
            comparisons: ['さすがプロだ：不愧是專業的（讚嘆）', 'やっぱりプロだ：果然是專業的（預期）'],
            commonMistakes: ['「さすが」：讚嘆（正面評價）/ 「やっぱり」：如預期（中性）'],
        },
    },
    // ━━━ それで ━━━
    {
        id: 'g_n4_266', category: 'grammar', level: 'N4', tags: ['sorede'],
        stem: '電車{でんしゃ}が止{と}まった。___、会社{かいしゃ}に遅{おく}れた。',
        stemZh: '電車停了。所以上班遲到了。',
        options: [
            { text: 'それで', reason: '正確！「それで」表因果關係。' },
            { text: 'それでも', reason: '「それでも」表即使如此，語意相反。' },
            { text: 'しかし', reason: '「しかし」表但是，語意不同。' },
            { text: 'それに', reason: '「それに」表而且，不表因果。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「それで」表示因此、所以',
            analysis: '「それで」連接前因後果，表示自然的因果關係。',
            comparisons: ['電車が止まった。それで遅れた：電車停了，所以遲到', '電車が止まった。それでも行った：電車停了，即使如此還是去了'],
            commonMistakes: ['「それで」：因果 / 「それでも」：讓步 / 「それに」：追加'],
        },
    },
    // ━━━ それに ━━━
    {
        id: 'g_n4_267', category: 'grammar', level: 'N4', tags: ['sore-ni'],
        stem: 'このレストランは安{やす}い。___、料理{りょうり}もおいしい。',
        stemZh: '這家餐廳便宜。而且菜也好吃。',
        options: [
            { text: 'それで', reason: '「それで」表因果，不表追加。' },
            { text: 'しかし', reason: '「しかし」表但是，語意不同。' },
            { text: 'それに', reason: '正確！「それに」表追加信息。' },
            { text: 'だから', reason: '「だから」表所以，表因果。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「それに」表示追加、而且',
            analysis: '「それに」用於追加同方向的信息，表示「不僅如此，而且…」。',
            comparisons: ['安い。それにおいしい：便宜而且好吃（追加正面）', '安い。それで行く：便宜所以去（因果）'],
            commonMistakes: ['「それに」：追加 / 「それで」：因果 / 「それでも」：讓步'],
        },
    },
    // ━━━ しかし ━━━
    {
        id: 'g_n4_268', category: 'grammar', level: 'N4', tags: ['shikashi'],
        stem: '彼{かれ}は頭{あたま}がいい。___、運動{うんどう}は苦手{にがて}だ。',
        stemZh: '他很聰明。但是不擅長運動。',
        options: [
            { text: 'しかし', reason: '正確！「しかし」表正式的逆接。' },
            { text: 'それで', reason: '「それで」表因果，語意不同。' },
            { text: 'それに', reason: '「それに」表追加，語意不同。' },
            { text: 'だから', reason: '「だから」表所以，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「しかし」表示轉折',
            analysis: '「しかし」用於正式場合表示逆接、轉折。比「でも」正式。',
            comparisons: ['しかし：但是（正式）', 'でも：但是（口語）', 'けれども：雖然…但（連接）'],
            commonMistakes: ['正式程度：しかし ＞ けれども ＞ だけど ＞ でも'],
        },
    },
    // ━━━ そして ━━━
    {
        id: 'g_n4_269', category: 'grammar', level: 'N4', tags: ['soshite'],
        stem: '朝{あさ}ご飯{はん}を食{た}べた。___、学校{がっこう}に行{い}った。',
        stemZh: '吃了早餐。然後去了學校。',
        options: [
            { text: 'しかし', reason: '「しかし」表轉折，語意不同。' },
            { text: 'だから', reason: '「だから」表因果，語意不同。' },
            { text: 'それに', reason: '「それに」表追加，不表時間順序。' },
            { text: 'そして', reason: '正確！「そして」表示順序、接著。' },
        ],
        correctIndex: 3,
        explanation: {
            keyPoint: '「そして」表示然後、接著',
            analysis: '「そして」用於連接兩個事件，表示時間上的順序或追加。',
            comparisons: ['食べた。そして行った：吃了然後去了（順序）', '食べた。それから行った：吃了之後去了（順序，更口語）'],
            commonMistakes: ['「そして」較正式 / 「それから」較口語'],
        },
    },
    // ━━━ ちゃんと ━━━
    {
        id: 'g_n4_270', category: 'grammar', level: 'N4', tags: ['chanto'],
        stem: '宿題{しゅくだい}を___やりなさい。',
        stemZh: '好好地寫作業。',
        options: [
            { text: 'ちゃんと', reason: '正確！「ちゃんと」表示好好地、確實地。' },
            { text: 'だいたい', reason: '「だいたい」表大概，語意不同。' },
            { text: 'そろそろ', reason: '「そろそろ」表差不多該，語意不同。' },
            { text: 'ちょっと', reason: '「ちょっと」表稍微，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ちゃんと」表示確實、好好地',
            analysis: '「ちゃんと」表示按照標準好好地做，不偷懶不馬虎。',
            comparisons: ['ちゃんとやる：好好地做', 'きちんとやる：整齊地做（更正式）'],
            commonMistakes: ['「ちゃんと」較口語 / 「きちんと」較正式，意思相近'],
        },
    },
    // ━━━ ちょっと ━━━
    {
        id: 'g_n4_271', category: 'grammar', level: 'N4', tags: ['chotto'],
        stem: '「明日{あした}、パーティーに来{き}ない？」「明日{あした}は___…。」',
        stemZh: '「明天要不要來派對？」「明天有點…。」',
        options: [
            { text: 'ちょっと', reason: '正確！「ちょっと」用於委婉拒絕。' },
            { text: 'ぜんぜん', reason: '「ぜんぜん」表完全，太直接。' },
            { text: 'ぜひ', reason: '「ぜひ」表務必，語意不同。' },
            { text: 'きっと', reason: '「きっと」表一定，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ちょっと」用於委婉拒絕',
            analysis: '「ちょっと」除了表示稍微，也常用於委婉拒絕，暗示不方便。',
            comparisons: ['ちょっと…：有點不方便…（委婉拒絕）', 'ちょっと待って：等一下（稍微）'],
            commonMistakes: ['「ちょっと」後面的拒絕理由通常被省略'],
        },
    },
    // ━━━ がする ━━━
    {
        id: 'g_n4_272', category: 'grammar', level: 'N4', tags: ['ga-suru'],
        stem: 'キッチンからいい匂{にお}い___する。',
        stemZh: '從廚房傳來好聞的味道。',
        options: [
            { text: 'が', reason: '正確！「匂いがする」表感覺到氣味。' },
            { text: 'を', reason: '「匂いをする」語法不正確。' },
            { text: 'に', reason: '「匂いにする」語法不正確。' },
            { text: 'で', reason: '「匂いでする」語法不正確。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「がする」表感覺到',
            analysis: '「N＋がする」用於感官感受：氣味、聲音、味道、感覺等。',
            comparisons: ['匂いがする：聞到味道', '音がする：聽到聲音', '味がする：嚐到味道'],
            commonMistakes: ['「がする」的主語是感覺對象，不是人'],
        },
    },
    // ━━━ にみえる ━━━
    {
        id: 'g_n4_273', category: 'grammar', level: 'N4', tags: ['ni-mieru'],
        stem: '彼女{かのじょ}は若{わか}く___。',
        stemZh: '她看起來很年輕。',
        options: [
            { text: '見{み}える', reason: '正確！「〜く見える」表看起來像…。' },
            { text: '見{み}せる', reason: '「見せる」表展示給別人看，語意不同。' },
            { text: '見{み}る', reason: '「若く見る」語法不正確。' },
            { text: '見{み}つかる', reason: '「見つかる」表被找到，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に見える/く見える」表看起來',
            analysis: 'い形容詞用「く見える」，な形容詞/名詞用「に見える」。',
            comparisons: ['若く見える：看起來年輕（い形）', '元気に見える：看起來健康（な形）', '学生に見える：看起來像學生（名詞）'],
            commonMistakes: ['「見える」＝看起來（自然感受）/ 「見せる」＝展示（主動讓人看）'],
        },
    },
    // ━━━ にする ━━━
    {
        id: 'g_n4_274', category: 'grammar', level: 'N4', tags: ['ni-suru'],
        stem: '飲{の}み物{もの}は何{なに}___しますか。',
        stemZh: '飲料要選什麼？',
        options: [
            { text: 'に', reason: '正確！「にする」表決定選擇。' },
            { text: 'を', reason: '「を」不搭配「する」表選擇。' },
            { text: 'が', reason: '「が」不適合此語境。' },
            { text: 'で', reason: '「で」不搭配「する」表選擇。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にする」表示決定選擇',
            analysis: '「Nにする」表示在多個選項中決定選擇N。',
            comparisons: ['コーヒーにする：選咖啡', 'コーヒーになる：變成咖啡（自然變化）'],
            commonMistakes: ['「にする」：主動選擇 / 「になる」：自然變化'],
        },
    },
    // ━━━ さ（名詞化） ━━━
    {
        id: 'g_n4_275', category: 'grammar', level: 'N4', tags: ['sa-nominalizer'],
        stem: 'この山{やま}の高{たか}___は3000メートルだ。',
        stemZh: '這座山的高度是三千公尺。',
        options: [
            { text: 'さ', reason: '正確！「い形容詞去い＋さ」名詞化。' },
            { text: 'み', reason: '「高み」表高處，語意不同。' },
            { text: 'く', reason: '「高く」是副詞形，不是名詞。' },
            { text: 'い', reason: '「高い」是形容詞，不能接數值。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「さ」將い形容詞名詞化',
            analysis: 'い形容詞去「い」加「さ」變成名詞，表示程度或量。',
            comparisons: ['高さ：高度', '長さ：長度', '広さ：面積', '深さ：深度'],
            commonMistakes: ['「さ」表可測量的程度 / 「み」表感受性的狀態'],
        },
    },
    // ━━━ こと（名詞化） ━━━
    {
        id: 'g_n4_276', category: 'grammar', level: 'N4', tags: ['koto-nominalization'],
        stem: '外国語{がいこくご}を学{まな}ぶ___は楽{たの}しい。',
        stemZh: '學外語這件事很有趣。',
        options: [
            { text: 'こと', reason: '正確！「V辭書形＋こと」將動詞名詞化。' },
            { text: 'もの', reason: '「もの」表具體事物，不適合抽象動作。' },
            { text: 'ところ', reason: '「ところ」表場所或時間，語意不同。' },
            { text: 'わけ', reason: '「わけ」表原因，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「こと」將動詞名詞化',
            analysis: '「V辭書形＋こと」將動作變成名詞，用作主語或賓語。',
            comparisons: ['学ぶことは楽しい：學是有趣的', '学ぶのは楽しい：學是有趣的（「の」也可名詞化）'],
            commonMistakes: ['「こと」較正式/抽象 / 「の」較口語/具體'],
        },
    },
    // ━━━ 必要がある ━━━
    {
        id: 'g_n4_277', category: 'grammar', level: 'N4', tags: ['hitsuyou-ga-aru'],
        stem: 'この書類{しょるい}にはサインする___がある。',
        stemZh: '這份文件有必要簽名。',
        options: [
            { text: '必要{ひつよう}', reason: '正確！「V辭書形＋必要がある」表有必要做。' },
            { text: 'こと', reason: '「ことがある」表偶爾，語意不同。' },
            { text: 'はず', reason: '「はずがある」語法不正確。' },
            { text: 'つもり', reason: '「つもりがある」語法不正確。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「必要がある」表示有必要',
            analysis: '「V辭書形＋必要がある」表示有必要做某事，較正式。',
            comparisons: ['サインする必要がある：有必要簽名（正式）', 'サインしなければならない：必須簽名（義務）'],
            commonMistakes: ['「必要がある」較客觀 / 「なければならない」較強制'],
        },
    },
    // ━━━ くする ━━━
    {
        id: 'g_n4_278', category: 'grammar', level: 'N4', tags: ['ku-suru'],
        stem: 'テレビの音{おと}をもう少{すこ}し小{ちい}さ___してください。',
        stemZh: '請把電視音量調小一點。',
        options: [
            { text: 'く', reason: '正確！「い形去い＋くする」表使變成某狀態。' },
            { text: 'に', reason: '「に」用於な形容詞：静かにする。' },
            { text: 'い', reason: '「小さいする」語法不正確。' },
            { text: 'で', reason: '「小さでする」語法不正確。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「くする」使い形容詞狀態改變',
            analysis: 'い形容詞去「い」加「くする」表示人為地使某物變成某狀態。',
            comparisons: ['小さくする：使變小（い形）', '静かにする：使安靜（な形）'],
            commonMistakes: ['い形→くする / な形→にする / 名詞→にする'],
        },
    },
    // ━━━ 急に ━━━
    {
        id: 'g_n4_279', category: 'grammar', level: 'N4', tags: ['kyuu-ni'],
        stem: '___雨{あめ}が降{ふ}ってきた。',
        stemZh: '突然下起雨來了。',
        options: [
            { text: 'だんだん', reason: '「だんだん」表漸漸，語意相反。' },
            { text: '急{きゅう}に', reason: '正確！「急に」表突然。' },
            { text: 'そろそろ', reason: '「そろそろ」表差不多，語意不同。' },
            { text: 'やっと', reason: '「やっと」表終於，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「急に」表示突然',
            analysis: '「急に」表示毫無預兆地突然發生。',
            comparisons: ['急に降ってきた：突然下起來了', 'だんだん降ってきた：漸漸下起來了'],
            commonMistakes: ['「急に」：突然 / 「だんだん」：漸漸 / 「いきなり」：冷不防'],
        },
    },
    // ━━━ さっき ━━━
    {
        id: 'g_n4_280', category: 'grammar', level: 'N4', tags: ['sakki'],
        stem: '___電話{でんわ}があったよ。田中{たなか}さんからだった。',
        stemZh: '剛才有電話喔，是田中先生打來的。',
        options: [
            { text: 'さっき', reason: '正確！「さっき」表剛才。' },
            { text: 'もうすぐ', reason: '「もうすぐ」表快要，指未來。' },
            { text: 'やっと', reason: '「やっと」表終於，語意不同。' },
            { text: 'そろそろ', reason: '「そろそろ」表差不多，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「さっき」表示剛才',
            analysis: '「さっき」表示不久前發生的事，比「さきほど」口語。',
            comparisons: ['さっき：剛才（口語）', 'さきほど：剛才（正式）', 'ついさっき：就在剛才（強調）'],
            commonMistakes: ['「さっき」：口語 / 「先ほど」：正式/書面語'],
        },
    },
    // ━━━ ていく（方向） ━━━
    {
        id: 'g_n4_281', category: 'grammar', level: 'N4', tags: ['te-iku', 'direction'],
        stem: '傘{かさ}を持{も}って___ほうがいいよ。午後{ごご}は雨{あめ}だから。',
        stemZh: '帶把傘去比較好喔，因為下午會下雨。',
        options: [
            { text: 'いった', reason: '正確！「持っていく」表帶去。' },
            { text: 'きた', reason: '「持ってくる」表帶來，方向不同。' },
            { text: 'おいた', reason: '「持っておいた」表事先準備好，語意不同。' },
            { text: 'みた', reason: '「持ってみた」表試著拿，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ていく」表示帶離說話者',
            analysis: '「ていく」表示動作離開說話者的位置方向發展。',
            comparisons: ['持っていく：帶走（離開）', '持ってくる：帶來（靠近）'],
            commonMistakes: ['「ていく」：遠離 / 「てくる」：接近'],
        },
    },
    // ━━━ てくる（方向） ━━━
    {
        id: 'g_n4_282', category: 'grammar', level: 'N4', tags: ['te-kuru', 'direction'],
        stem: 'ちょっとコンビニに行{い}って、お弁当{べんとう}を買{か}って___ね。',
        stemZh: '去便利商店買個便當回來。',
        options: [
            { text: 'いく', reason: '「買っていく」表買了帶走，不回來。' },
            { text: 'くる', reason: '正確！「買ってくる」表去買了再回來。' },
            { text: 'おく', reason: '「買っておく」表事先買好，語意不同。' },
            { text: 'みる', reason: '「買ってみる」表試著買，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「てくる」表示去做了再回來',
            analysis: '「V＋てくる」表示去某處做了某事後再回到說話者身邊。',
            comparisons: ['買ってくる：去買回來（回到這裡）', '買っていく：買了帶去（離開這裡）'],
            commonMistakes: ['「行ってくる」：去了回來 / 「行っていく」不常用'],
        },
    },
    // ━━━ たらどう ━━━
    {
        id: 'g_n4_283', category: 'grammar', level: 'N4', tags: ['tara-dou'],
        stem: '疲{つか}れているなら、少{すこ}し休{やす}ん___？',
        stemZh: '如果累了的話，休息一下如何？',
        options: [
            { text: 'だら', reason: '「休んだら」不完整。' },
            { text: 'だらどう', reason: '正確！「たらどう」表建議。' },
            { text: 'だのに', reason: '「休んだのに」表逆接，語意不同。' },
            { text: 'でから', reason: '「休んでから」表之後，語意不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「たらどう」表示建議',
            analysis: '「Vたら＋どう」用於輕鬆地向對方提出建議。',
            comparisons: ['休んだらどう：休息一下如何（建議）', '休んだほうがいい：最好休息（較強建議）'],
            commonMistakes: ['「たらどう」比「ほうがいい」語氣更輕鬆'],
        },
    },
    // ━━━ たらいいですか ━━━
    {
        id: 'g_n4_284', category: 'grammar', level: 'N4', tags: ['tara-ii-desu-ka'],
        stem: '空港{くうこう}にはどうやって行{い}っ___いいですか。',
        stemZh: '去機場該怎麼去才好？',
        options: [
            { text: 'たら', reason: '正確！「Vたらいいですか」用於詢問建議。' },
            { text: 'ても', reason: '「行ってもいいですか」表許可，不是詢問方法。' },
            { text: 'ては', reason: '「行ってはいけない」表禁止，語意不同。' },
            { text: 'たり', reason: '「行ったりいいですか」語法不正確。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たらいいですか」詢問該怎麼做',
            analysis: '「V たらいいですか」用於向他人詢問最佳做法。',
            comparisons: ['どう行ったらいいですか：該怎麼去（詢問）', 'どう行けばいいですか：怎麼去才好（同義）'],
            commonMistakes: ['「たらいいですか」和「ばいいですか」意思幾乎相同'],
        },
    },
    // ━━━ 〜方がいい ━━━
    {
        id: 'g_n4_285', category: 'grammar', level: 'N4', tags: ['hou-ga-ii'],
        stem: '風邪{かぜ}を引{ひ}いたら、薬{くすり}を飲{の}んだ___がいい。',
        stemZh: '感冒的話，最好吃藥。',
        options: [
            { text: 'ほう', reason: '正確！「Vた＋ほうがいい」表建議。' },
            { text: 'こと', reason: '「飲んだことがいい」語法不正確。' },
            { text: 'もの', reason: '「飲んだものがいい」語法不正確。' },
            { text: 'わけ', reason: '「飲んだわけがいい」語法不正確。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たほうがいい」表示建議',
            analysis: '「Vた形＋ほうがいい」用於向他人提出建議，語氣較強。',
            comparisons: ['飲んだほうがいい：最好吃（肯定建議）', '飲まないほうがいい：最好不要吃（否定建議）'],
            commonMistakes: ['肯定用「た形」：飲んだほうがいい / 否定用「ない形」：飲まないほうがいい'],
        },
    },
    // ━━━ ことはない ━━━
    {
        id: 'g_n4_286', category: 'grammar', level: 'N4', tags: ['koto-wa-nai'],
        stem: 'そんなに心配{しんぱい}する___はない。',
        stemZh: '不必那麼擔心。',
        options: [
            { text: 'わけ', reason: '「わけはない」表不可能，語感不同。' },
            { text: 'こと', reason: '正確！「ことはない」表沒必要。' },
            { text: 'はず', reason: '「はずはない」表不應該，語意不同。' },
            { text: 'もの', reason: '「ものはない」語法不常見。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ことはない」表示沒必要',
            analysis: '「V辭書形＋ことはない」表示沒有必要做某事。',
            comparisons: ['心配することはない：不需要擔心（沒必要）', '心配するわけがない：不可能擔心（不可能）'],
            commonMistakes: ['「ことはない」：沒必要 / 「わけがない」：不可能'],
        },
    },
    // ━━━ ではないか ━━━
    {
        id: 'g_n4_287', category: 'grammar', level: 'N4', tags: ['dewa-nai-ka'],
        stem: 'これは君{きみ}のペンじゃ___。',
        stemZh: '這不是你的筆嗎？',
        options: [
            { text: 'ないか', reason: '正確！「じゃないか」表反問確認。' },
            { text: 'ないよ', reason: '「じゃないよ」表否定，語意不同。' },
            { text: 'なかった', reason: '「じゃなかった」表過去否定，語意不同。' },
            { text: 'なくて', reason: '「じゃなくて」表不是…而是，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ではないか/じゃないか」表反問',
            analysis: '「じゃないか」用於確認或反問，意為「不是…嗎？/對吧？」。',
            comparisons: ['ペンじゃないか：不是筆嗎？（確認）', 'ペンじゃない：不是筆（否定）'],
            commonMistakes: ['「じゃないか」：反問/確認 / 「じゃない」：否定'],
        },
    },
    // ━━━ どころか ━━━
    {
        id: 'g_n4_288', category: 'grammar', level: 'N4', tags: ['dokoro-ka'],
        stem: '漢字{かんじ}___、ひらがなも読{よ}めない。',
        stemZh: '別說漢字了，連平假名都不會讀。',
        options: [
            { text: 'ばかりか', reason: '「ばかりか」也表不僅如此，但語感稍不同。' },
            { text: 'どころか', reason: '正確！「どころか」表別說…連…都。' },
            { text: 'だけでなく', reason: '「だけでなく」表不僅，語感較弱。' },
            { text: 'はもちろん', reason: '「はもちろん」表當然，語感不同。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「どころか」表示別說…連…都',
            analysis: '「Aどころか、Bも〜ない」表示A做不到，更別說更簡單的B了。',
            comparisons: ['漢字どころかひらがなも：別說漢字連平假名都…', '漢字だけでなくひらがなも：不僅漢字連平假名都…'],
            commonMistakes: ['「どころか」用於強調反差，通常後面接意外結果'],
        },
    },
    // ━━━ かしら ━━━
    {
        id: 'g_n4_289', category: 'grammar', level: 'N4', tags: ['kashira'],
        stem: '明日{あした}は天気{てんき}がいい___。',
        stemZh: '明天天氣好不好呢。',
        options: [
            { text: 'かしら', reason: '正確！「かしら」用於自問或柔和疑問（多為女性用語）。' },
            { text: 'かな', reason: '「かな」也表自問，但較中性。' },
            { text: 'だろう', reason: '「だろう」表推測，不表自問。' },
            { text: 'ですか', reason: '「ですか」是直接疑問，語感不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かしら」表示柔和的疑問',
            analysis: '「かしら」是女性較常用的句尾，表示自問或柔和的疑問。',
            comparisons: ['いいかしら：好不好呢（女性用語）', 'いいかな：好不好呢（中性）'],
            commonMistakes: ['「かしら」主要是女性用語 / 「かな」男女皆可'],
        },
    },
    // ━━━ かな ━━━
    {
        id: 'g_n4_290', category: 'grammar', level: 'N4', tags: ['kana'],
        stem: 'あの映画{えいが}、面白{おもしろ}い___。見{み}てみようかな。',
        stemZh: '那部電影有趣嗎，試著看看好了。',
        options: [
            { text: 'だろう', reason: '「だろう」較客觀推測。' },
            { text: 'ですか', reason: '「ですか」是直接問句。' },
            { text: 'かな', reason: '正確！「かな」表自問自答。' },
            { text: 'のか', reason: '「のか」較強烈疑問。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「かな」表示自問',
            analysis: '「かな」用於自言自語或輕輕地向自己提問。',
            comparisons: ['面白いかな：有趣嗎（自問）', '面白いかしら：有趣嗎（女性自問）'],
            commonMistakes: ['「かな」用於自問 / 「ですか」用於問他人'],
        },
    },
    // ━━━ と聞いた ━━━
    {
        id: 'g_n4_291', category: 'grammar', level: 'N4', tags: ['to-kiita'],
        stem: '来月{らいげつ}から給料{きゅうりょう}が上{あ}がる___。',
        stemZh: '我聽說下個月開始薪水會漲。',
        options: [
            { text: 'と聞{き}いた', reason: '正確！「と聞いた」表示個人聽到的消息。' },
            { text: 'と言{い}った', reason: '「と言った」表他直接說了，不表傳聞。' },
            { text: 'と思{おも}った', reason: '「と思った」表自己的想法，不表傳聞。' },
            { text: 'と決{き}めた', reason: '「と決めた」表決定，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「と聞いた」表示聽說',
            analysis: '「と聞いた/聞いている」表示從某處聽到的消息。',
            comparisons: ['上がると聞いた：我聽說會漲（個人消息）', '上がるそうだ：聽說會漲（一般傳聞）'],
            commonMistakes: ['「と聞いた」：有明確消息來源 / 「そうだ」：不明確消息來源'],
        },
    },
    // ━━━ と言ってもいい ━━━
    {
        id: 'g_n4_292', category: 'grammar', level: 'N4', tags: ['to-ittemo-ii'],
        stem: '彼{かれ}は天才{てんさい}だ___いい。',
        stemZh: '可以說他是天才。',
        options: [
            { text: 'と言{い}っても', reason: '正確！「と言ってもいい」表可以說是。' },
            { text: 'と思{おも}っても', reason: '「と思ってもいい」表可以認為，但較不自然。' },
            { text: 'と聞{き}いても', reason: '「と聞いてもいい」表可以聽，語意不同。' },
            { text: 'と言{い}われても', reason: '「と言われてもいい」表被說也沒關係，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「と言ってもいい」表示可以說是',
            analysis: '「と言ってもいい」用於將某事歸納為某種評價。',
            comparisons: ['天才だと言ってもいい：可以說是天才', '天才だと言える：可以稱為天才（更確定）'],
            commonMistakes: ['「と言ってもいい」比「と言える」更委婉'],
        },
    },
    // ━━━ てよかった ━━━
    {
        id: 'g_n4_293', category: 'grammar', level: 'N4', tags: ['te-yokatta'],
        stem: '傘{かさ}を持{も}って来{き}___。雨{あめ}が降{ふ}ってきた。',
        stemZh: '幸好帶了傘來。下雨了。',
        options: [
            { text: 'てよかった', reason: '正確！「てよかった」表慶幸。' },
            { text: 'てしまった', reason: '「てしまった」表遺憾或完了，語意不同。' },
            { text: 'ておいた', reason: '「ておいた」表事先準備，但不表慶幸。' },
            { text: 'てみた', reason: '「てみた」表嘗試，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てよかった」表示幸好',
            analysis: '「Vて＋よかった」表示慶幸做了某事，結果是好的。',
            comparisons: ['持ってきてよかった：幸好帶來了（慶幸）', '持ってこなくてよかった：幸好沒帶來（慶幸沒做）'],
            commonMistakes: ['肯定：てよかった / 否定：なくてよかった'],
        },
    },
    // ━━━ てすみません ━━━
    {
        id: 'g_n4_294', category: 'grammar', level: 'N4', tags: ['te-sumimasen'],
        stem: '遅{おく}れ___すみません。',
        stemZh: '遲到了真對不起。',
        options: [
            { text: 'て', reason: '正確！「Vて＋すみません」表為某動作道歉。' },
            { text: 'ので', reason: '「遅れのですみません」語法不正確。' },
            { text: 'から', reason: '「遅れからすみません」語法不正確。' },
            { text: 'のに', reason: '「遅れのにすみません」語法不正確。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てすみません」為動作道歉',
            analysis: '「Vて＋すみません/ごめんなさい」用於為已做的動作道歉。',
            comparisons: ['遅れてすみません：遲到了抱歉', '遅れてしまってすみません：不小心遲到了抱歉（更歉疚）'],
            commonMistakes: ['「すみません」較正式 / 「ごめんなさい」較口語'],
        },
    },
    // ━━━ ば条件形（進階） ━━━
    {
        id: 'g_n4_295', category: 'grammar', level: 'N4', tags: ['conditional', 'ba-form', 'advanced'],
        stem: '安{やす}けれ___安{やす}いほど、品質{ひんしつ}が心配{しんぱい}になる。',
        stemZh: '越便宜就越擔心品質。',
        options: [
            { text: 'ば', reason: '正確！「ば〜ほど」表示越…越…。' },
            { text: 'たら', reason: '「たら」不構成遞進句型。' },
            { text: 'と', reason: '「と」不構成遞進句型。' },
            { text: 'なら', reason: '「なら」不構成遞進句型。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: 'い形容詞的「ば〜ほど」',
            analysis: 'い形容詞：去い＋ければ＋い形容詞原形＋ほど，表越…越…。',
            comparisons: ['安ければ安いほど：越便宜越…', '高ければ高いほど：越貴越…'],
            commonMistakes: ['い形容詞ば形：去い＋ければ / 動詞ば形：え段＋ば'],
        },
    },
    // ━━━ たら条件形（進階） ━━━
    {
        id: 'g_n4_296', category: 'grammar', level: 'N4', tags: ['conditional', 'tara', 'advanced'],
        stem: '家{いえ}に帰{かえ}っ___、誰{だれ}もいなかった。',
        stemZh: '回到家之後，發現沒有人在。',
        options: [
            { text: 'たら', reason: '正確！「たら」表時間順序，做了之後。' },
            { text: 'ても', reason: '「ても」表即使，語意不同。' },
            { text: 'ば', reason: '「帰れば」不適合表示意外發現。' },
            { text: 'と', reason: '「帰ると」也可以，但「たら」更適合意外發現。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たら」表示做了之後的發現',
            analysis: '「たら」用於過去已發生的事時，常表示意外發現。',
            comparisons: ['帰ったら誰もいなかった：回到家發現沒人（意外）', '帰ると誰もいない：一回家就沒人（必然）'],
            commonMistakes: ['過去的「たら」＝做了之後發現… / 未來的「たら」＝如果'],
        },
    },
    // ━━━ と条件形（進階） ━━━
    {
        id: 'g_n4_297', category: 'grammar', level: 'N4', tags: ['conditional', 'to', 'advanced'],
        stem: '春{はる}になる___、桜{さくら}が咲{さ}く。',
        stemZh: '一到春天，櫻花就會開。',
        options: [
            { text: 'と', reason: '正確！「と」表自然規律。' },
            { text: 'ば', reason: '「なれば」也可以，但「と」更適合自然現象。' },
            { text: 'たら', reason: '「なったら」也可以，但「と」更強調必然。' },
            { text: 'なら', reason: '「なら」不適合描述自然規律。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「と」用於自然規律',
            analysis: '「と」最適合表示自然現象、習慣、機械操作等必然結果。',
            comparisons: ['春になると咲く：一到春天就開花（規律）', '春になれば咲く：如果到春天就開花（假設）'],
            commonMistakes: ['自然規律/習慣最適合用「と」'],
        },
    },
    // ━━━ 對話題：てくれない？ ━━━
    {
        id: 'g_n4_298', category: 'grammar', level: 'N4', tags: ['giving-receiving', 'dialogue'],
        stem: '「ねえ、この荷物{にもつ}、ちょっと持{も}って___？」「いいよ。」',
        stemZh: '「欸，幫我拿一下這個行李好嗎？」「好啊。」',
        options: [
            { text: 'あげない', reason: '「てあげない？」不自然，不能請求自己施惠。' },
            { text: 'もらえない', reason: '「てもらえない？」也可以，但「てくれない？」更直接。' },
            { text: 'くれない', reason: '正確！「てくれない？」是口語的請求表現。' },
            { text: 'みない', reason: '「てみない？」表要不要試，語意不同。' },
        ],
        correctIndex: 2,
        explanation: {
            keyPoint: '「てくれない？」口語請求',
            analysis: '「てくれない？」是口語中常用的請求，比「てください」更親密。',
            comparisons: ['持ってくれない？：幫我拿一下？（口語請求）', '持ってもらえませんか：能請您幫我拿嗎？（禮貌請求）'],
            commonMistakes: ['親密程度：てくれない？ ＞ てくれませんか ＞ ていただけませんか'],
        },
    },
    // ━━━ 對話題：ようと思う ━━━
    {
        id: 'g_n4_299', category: 'grammar', level: 'N4', tags: ['you-to-omou', 'dialogue'],
        stem: '「来年{らいねん}はどうする？」「日本{にほん}に留学{りゅうがく}し___と思{おも}っている。」',
        stemZh: '「明年打算怎麼辦？」「打算去日本留學。」',
        options: [
            { text: 'たい', reason: '「したいと思う」也可以，但此處用意向形。' },
            { text: 'よう', reason: '正確！「しよう＋と思っている」表持續的打算。' },
            { text: 'る', reason: '「すると思っている」表推測別人會做。' },
            { text: 'ない', reason: '「しないと思っている」表推測不會做。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「意向形＋と思っている」表打算',
            analysis: '「意向形＋と思っている」表示一直以來的計畫或打算。',
            comparisons: ['留学しようと思っている：打算留學（持續想法）', '留学しようと思う：想留學（此刻決定）'],
            commonMistakes: ['「と思う」：此刻心念 / 「と思っている」：持續想法'],
        },
    },
    // ━━━ 複合題：ておいたほうがいい ━━━
    {
        id: 'g_n4_300', category: 'grammar', level: 'N4', tags: ['te-oku', 'hou-ga-ii', 'complex'],
        stem: '明日{あした}は寒{さむ}くなるから、暖{あたた}かい服{ふく}を準備{じゅんび}して___ほうがいい。',
        stemZh: '明天會變冷，最好事先準備好暖和的衣服。',
        options: [
            { text: 'おいた', reason: '正確！「ておいたほうがいい」表事先做好比較好。' },
            { text: 'みた', reason: '「てみたほうがいい」表試著做比較好，不強調事先。' },
            { text: 'しまった', reason: '「てしまったほうがいい」不自然。' },
            { text: 'いる', reason: '「ているほうがいい」表保持某狀態比較好。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ておいたほうがいい」結合準備與建議',
            analysis: '「ておく」（事先準備）＋「たほうがいい」（建議），表示建議事先做好。',
            comparisons: ['準備しておいたほうがいい：最好事先準備', '準備したほうがいい：最好準備（不強調事先）'],
            commonMistakes: ['「ておいたほうがいい」比「たほうがいい」多了「事先」的語感'],
        },
    },
    // ━━━ 間に・間（あいだに・あいだ） ━━━
    {
        id: 'g_n4_301', category: 'grammar', level: 'N4', tags: ['aida-ni', 'time'],
        stem: '母{はは}が買{か}い物{もの}に行{い}っている___、部屋{へや}を掃除{そうじ}した。',
        stemZh: '趁媽媽去買東西的期間，打掃了房間。',
        options: [
            { text: '間に', reason: '正確！「間に」表示在某段期間內完成了某事。' },
            { text: '間', reason: '「間」表示整個期間持續做某事，但打掃是完成性動作，用「間に」較適當。' },
            { text: 'うちに', reason: '「うちに」也可表趁某時做某事，但此處考的是「間に」的用法。' },
            { text: 'ながら', reason: '「ながら」表同時做兩件事，主語需相同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「間に」vs「間」的區別',
            analysis: '「間に」表示在某段時間內發生或完成了某事（瞬間或完成性動作）；「間」表示在整個期間持續做某事。',
            comparisons: ['寝ている間に泥棒が入った：睡覺期間小偷進來了', '寝ている間ずっと雨が降っていた：睡覺期間一直在下雨'],
            commonMistakes: ['○ 間に掃除した（完成性）/ × 間掃除した → 完成性動作用「間に」'],
        },
    },
    {
        id: 'g_n4_302', category: 'grammar', level: 'N4', tags: ['aida', 'time'],
        stem: '電車{でんしゃ}に乗{の}っている___、ずっと本{ほん}を読{よ}んでいた。',
        stemZh: '坐電車的期間，一直在看書。',
        options: [
            { text: '間', reason: '正確！「間」表示整段期間持續做某事。' },
            { text: '間に', reason: '「間に」表示在期間內完成某事，但這裡是持續行為。' },
            { text: 'とき', reason: '「とき」表某個時間點，不強調持續期間。' },
            { text: 'まで', reason: '「まで」表到某時為止，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「間」表持續期間',
            analysis: '「間」後面接持續性行為，表示在整個期間內一直做某事。',
            comparisons: ['乗っている間、本を読んでいた：搭車期間一直在看書', '乗っている間に、本を一冊読んだ：搭車期間看完了一本書'],
            commonMistakes: ['○ 間ずっと読んでいた / × 間に読んでいた → 持續動作用「間」'],
        },
    },
    {
        id: 'g_n4_303', category: 'grammar', level: 'N4', tags: ['aida-ni', 'time', 'advanced'],
        stem: '子{こ}どもが寝{ね}ている___、晩{ばん}ご飯{はん}の準備{じゅんび}をしてしまおう。',
        stemZh: '趁孩子在睡覺，把晚餐準備好吧。',
        options: [
            { text: '間に', reason: '正確！趁孩子睡覺期間完成準備，用「間に」。' },
            { text: '間', reason: '「間」表持續做，但「してしまおう」是完成性表達。' },
            { text: 'ところに', reason: '「ところに」表正當某時，不表期間。' },
            { text: 'ために', reason: '「ために」表目的或原因，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「間に」搭配完成性表達',
            analysis: '「てしまおう」表打算完成某事，是完成性表達，所以搭配「間に」。',
            comparisons: ['寝ている間に準備をしてしまおう：趁睡覺時做完準備', '寝ている間ゲームをしていた：睡覺期間一直在玩遊戲'],
            commonMistakes: ['「してしまう」是完成性的，所以前面用「間に」不用「間」'],
        },
    },
    // ━━━ あまり・あまりに ━━━
    {
        id: 'g_n4_304', category: 'grammar', level: 'N4', tags: ['amari', 'degree'],
        stem: 'この映画{えいが}は___面白{おもしろ}くなかった。',
        stemZh: '這部電影不太有趣。',
        options: [
            { text: 'あまり', reason: '正確！「あまり～ない」表示不太、不怎麼。' },
            { text: 'とても', reason: '「とても」表非常，與否定形不搭配此意。' },
            { text: 'ぜんぜん', reason: '「ぜんぜん～ない」表完全不，程度比「あまり」強。' },
            { text: 'すごく', reason: '「すごく」表非常、很，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「あまり～ない」表程度不高',
            analysis: '「あまり」與否定形搭配，表示「不太」「不怎麼」，是部分否定。',
            comparisons: ['あまり面白くなかった：不太有趣', 'ぜんぜん面白くなかった：完全不有趣'],
            commonMistakes: ['○ あまり面白くない / × あまり面白い → 「あまり」通常搭配否定'],
        },
    },
    {
        id: 'g_n4_305', category: 'grammar', level: 'N4', tags: ['amari-ni', 'degree', 'advanced'],
        stem: '___嬉{うれ}しくて、涙{なみだ}が出{で}てきた。',
        stemZh: '太高興了，眼淚都流出來了。',
        options: [
            { text: 'あまりに', reason: '正確！「あまりに＋肯定形」表程度過高，太…了。' },
            { text: 'あまり', reason: '「あまり」後接否定形時表不太，此處是肯定形。' },
            { text: 'とても', reason: '「とても」只表非常，不含「過度」的語感。' },
            { text: 'ちょっと', reason: '「ちょっと」表稍微，與語境不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「あまりに」表過度',
            analysis: '「あまりに」接肯定形時表示程度過高，常導致某種結果。',
            comparisons: ['あまりに嬉しくて泣いた：太高興了哭了', 'あまり嬉しくない：不太高興'],
            commonMistakes: ['「あまりに＋肯定」表過度 / 「あまり＋否定」表不太'],
        },
    },
    // ━━━ 後で（あとで） ━━━
    {
        id: 'g_n4_306', category: 'grammar', level: 'N4', tags: ['ato-de', 'time-sequence'],
        stem: '宿題{しゅくだい}を___後{あと}で、友達{ともだち}と遊{あそ}びに行{い}った。',
        stemZh: '做完作業之後，和朋友去玩了。',
        options: [
            { text: 'した', reason: '正確！「た形＋後で」表做完某事之後。' },
            { text: 'して', reason: '「して」是て形，不是「後で」前的正確接續。' },
            { text: 'する', reason: '「する後で」不合文法，「後で」前要用た形。' },
            { text: 'しよう', reason: '「しよう」是意向形，不接「後で」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「た形＋後で」表時間先後',
            analysis: '「後で」前面接動詞た形，表示某動作完成之後再做另一件事。',
            comparisons: ['食べた後で歯を磨く：吃完之後刷牙', '食べてから歯を磨く：吃了之後刷牙（順序更嚴格）'],
            commonMistakes: ['○ した後で / × する後で → 「後で」前要用た形'],
        },
    },
    // ━━━ ば形條件 ━━━
    {
        id: 'g_n4_307', category: 'grammar', level: 'N4', tags: ['conditional', 'ba-form', 'advanced'],
        stem: '値段{ねだん}が安{やす}けれ___、買{か}いたいと思{おも}います。',
        stemZh: '如果價格便宜的話，我想買。',
        options: [
            { text: 'ば', reason: '正確！い形容詞「安い」→去い加ければ：安ければ。' },
            { text: 'たら', reason: '「安けたら」不合文法，い形容詞條件用「安ければ」或「安かったら」。' },
            { text: 'と', reason: '「安けと」不合文法。' },
            { text: 'なら', reason: '「安けなら」不合文法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: 'い形容詞的ば形',
            analysis: 'い形容詞去掉「い」加「ければ」：安い→安ければ。空格在「安けれ」後，填「ば」。',
            comparisons: ['安ければ買う：如果便宜就買', '安かったら買う：如果便宜了就買'],
            commonMistakes: ['○ 安ければ / × 安いば → い形容詞需去い加ければ'],
        },
    },
    {
        id: 'g_n4_308', category: 'grammar', level: 'N4', tags: ['conditional', 'ba-hodo', 'advanced'],
        stem: '練習{れんしゅう}すれ___するほど、上手{じょうず}になる。',
        stemZh: '越練習越熟練。',
        options: [
            { text: 'ば', reason: '正確！「ば〜ほど」表越…越…。' },
            { text: 'たら', reason: '「たら〜ほど」不是固定句型。' },
            { text: 'と', reason: '「と〜ほど」不是正確的句型。' },
            { text: 'なら', reason: '「なら〜ほど」不是正確的句型。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ば〜ほど」表越…越…',
            analysis: '「動詞ば形＋同一動詞辞書形＋ほど」表示做得越多，結果越明顯。',
            comparisons: ['練習すればするほど上手になる：越練越好', '食べれば食べるほど太る：越吃越胖'],
            commonMistakes: ['○ すればするほど / × するとするほど → 此句型固定用ば形'],
        },
    },
    // ━━━ ばいい ━━━
    {
        id: 'g_n4_309', category: 'grammar', level: 'N4', tags: ['ba-ii', 'advice'],
        stem: 'パスワードを忘{わす}れたら、リセットボタンを押{お}せ___いいですよ。',
        stemZh: '如果忘了密碼，按重設按鈕就好了。',
        options: [
            { text: 'ば', reason: '正確！「ば形＋いい」表只要…就好了。' },
            { text: 'たら', reason: '「押せたら」變成可能條件，語意不同。' },
            { text: 'と', reason: '「押せと」變成命令形，語意不同。' },
            { text: 'から', reason: '「押せから」不合文法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ばいい」表建議',
            analysis: '「動詞ば形＋いい」表示「只要做…就好了」，用於給建議。',
            comparisons: ['押せばいい：按就好了', '押したらいい：按了就好了（也可）'],
            commonMistakes: ['○ 押せばいい / × 押すばいい → 五段動詞要變え段加ば'],
        },
    },
    // ━━━ 場合は（ばあいは） ━━━
    {
        id: 'g_n4_310', category: 'grammar', level: 'N4', tags: ['baai-wa', 'conditional'],
        stem: '地震{じしん}の___は、すぐにテーブルの下{した}に隠{かく}れてください。',
        stemZh: '地震的情況下，請立刻躲到桌子下面。',
        options: [
            { text: '場合{ばあい}', reason: '正確！「場合は」表在某種情況下。' },
            { text: '時{とき}', reason: '「時」也可表時機，但此處強調「情況」更自然。' },
            { text: 'ところ', reason: '「ところ」表時間點或場所，不表假設情況。' },
            { text: 'せい', reason: '「せい」表負面原因，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「場合は」表假設情況',
            analysis: '「場合は」用於假設某種情況，說明該情況下的對應行為。常用於說明、規則。',
            comparisons: ['地震の場合は避難する：地震的情況下要避難', '火事の場合は119に電話する：火災時打119'],
            commonMistakes: ['「場合」比「とき」更正式，常用於規定和說明'],
        },
    },
    // ━━━ ばかり ━━━
    {
        id: 'g_n4_311', category: 'grammar', level: 'N4', tags: ['bakari', 'emphasis'],
        stem: '弟{おとうと}はゲーム___していて、全然{ぜんぜん}勉強{べんきょう}しない。',
        stemZh: '弟弟光是在玩遊戲，完全不讀書。',
        options: [
            { text: 'ばかり', reason: '正確！「ばかり」表光是、只做某事。' },
            { text: 'だけ', reason: '「だけ」也表只，但「ばかり」含批判語氣。' },
            { text: 'しか', reason: '「しか」後需接否定形。' },
            { text: 'まで', reason: '「まで」表到…為止或甚至，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ばかり」表反覆、偏重',
            analysis: '「ばかり」接在動詞て形後表示「光是…」「老是…」，常帶有不滿或批評的語氣。',
            comparisons: ['ゲームばかりしている：光玩遊戲', 'ゲームだけしている：只玩遊戲（中性語氣）'],
            commonMistakes: ['「ばかり」帶批判語氣 / 「だけ」較中性客觀'],
        },
    },
    // ━━━ 出す（だす）/ 始める（はじめる）/ 続ける（つづける） ━━━
    {
        id: 'g_n4_312', category: 'grammar', level: 'N4', tags: ['dasu', 'compound-verb'],
        stem: '急{きゅう}に雨{あめ}が降{ふ}り___。',
        stemZh: '突然下起雨來了。',
        options: [
            { text: '出{だ}した', reason: '正確！「動詞ます形＋出す」表突然開始。' },
            { text: '始{はじ}めた', reason: '「始める」表有意識地開始，不強調突然性。' },
            { text: '続{つづ}けた', reason: '「続ける」表繼續做，不表開始。' },
            { text: '終{お}わった', reason: '「終わる」表結束，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「出す」表突然開始',
            analysis: '「ます形＋出す」表示某事突然發生或開始，常用於自然現象或情感爆發。',
            comparisons: ['降り出した：突然下起來', '降り始めた：開始下（不強調突然）'],
            commonMistakes: ['「出す」強調突然性 / 「始める」不強調突然性'],
        },
    },
    {
        id: 'g_n4_313', category: 'grammar', level: 'N4', tags: ['hajimeru', 'compound-verb'],
        stem: '来月{らいげつ}から日本語{にほんご}を勉強{べんきょう}し___。',
        stemZh: '從下個月開始學日語。',
        options: [
            { text: '始{はじ}める', reason: '正確！「し始める」表開始做某事。' },
            { text: '出{だ}す', reason: '「出す」表突然開始，但這裡是計劃性的開始。' },
            { text: '続{つづ}ける', reason: '「続ける」表繼續做，不表開始。' },
            { text: '終{お}わる', reason: '「終わる」表結束。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「始める」表有意地開始',
            analysis: '「ます形＋始める」表示有計劃地、有意識地開始做某事。',
            comparisons: ['勉強し始める：開始學習（計劃性）', '泣き出す：突然哭出來（突然性）'],
            commonMistakes: ['「始める」用於有意識的行為 / 「出す」用於突發事件'],
        },
    },
    {
        id: 'g_n4_314', category: 'grammar', level: 'N4', tags: ['tsuzukeru', 'compound-verb'],
        stem: '疲{つか}れても走{はし}り___。',
        stemZh: '即使累了也繼續跑。',
        options: [
            { text: '続{つづ}けた', reason: '正確！「走り続ける」表繼續跑。' },
            { text: '出{だ}した', reason: '「走り出す」表突然跑起來。' },
            { text: '始{はじ}めた', reason: '「走り始める」表開始跑。' },
            { text: '終{お}わった', reason: '「走り終わる」表跑完了。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「続ける」表持續行為',
            analysis: '「ます形＋続ける」表示持續做某事，不中斷。',
            comparisons: ['走り続けた：繼續跑', '走り出した：突然跑起來', '走り始めた：開始跑'],
            commonMistakes: ['○ 走り続ける / × 走る続ける → 要用ます形去「ます」接「続ける」'],
        },
    },
    // ━━━ でございます ━━━
    {
        id: 'g_n4_315', category: 'grammar', level: 'N4', tags: ['de-gozaimasu', 'keigo', 'advanced'],
        stem: 'お客様{きゃくさま}、こちらが新{あたら}しいメニュー___。',
        stemZh: '客人，這是新的菜單。',
        options: [
            { text: 'でございます', reason: '正確！「でございます」是「です」的鄭重語。' },
            { text: 'です', reason: '「です」也正確但不夠鄭重，對客人應用「でございます」。' },
            { text: 'だ', reason: '「だ」是常體，對客人不適當。' },
            { text: 'である', reason: '「である」是書面語，口頭對客人不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「でございます」是最鄭重的「です」',
            analysis: '「でございます」是「です」的丁寧語最高級，用於服務業、正式場合。',
            comparisons: ['こちらがメニューでございます（鄭重）', 'こちらがメニューです（一般丁寧）'],
            commonMistakes: ['服務業對客人用「でございます」而非「です」'],
        },
    },
    // ━━━ と（條件） ━━━
    {
        id: 'g_n4_316', category: 'grammar', level: 'N4', tags: ['to-conditional', 'conditional'],
        stem: 'このボタンを押{お}す___、ドアが開{あ}きます。',
        stemZh: '一按這個按鈕，門就會打開。',
        options: [
            { text: 'と', reason: '正確！「と」條件表必然結果：一做就…。' },
            { text: 'ば', reason: '「ば」也可表條件，但「と」更強調自然結果。' },
            { text: 'たら', reason: '「たら」表假設條件，但「と」更適合恆常事實。' },
            { text: 'なら', reason: '「なら」表假設前提，不表必然結果。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「と」條件表必然結果',
            analysis: '「辞書形＋と」表示一做某事就必然發生某結果，常用於機械操作、自然規律。',
            comparisons: ['ボタンを押すとドアが開く：按按鈕門就開', '春になると花が咲く：一到春天花就開'],
            commonMistakes: ['「と」後面不能接意志表達（命令、請求等）'],
        },
    },
    {
        id: 'g_n4_317', category: 'grammar', level: 'N4', tags: ['to-conditional', 'advanced'],
        stem: 'まっすぐ行{い}く___、右{みぎ}に郵便局{ゆうびんきょく}があります。',
        stemZh: '一直走的話，右邊有郵局。',
        options: [
            { text: 'と', reason: '正確！指路時用「と」表示必然到達的結果。' },
            { text: 'ば', reason: '「ば」可用但不如「と」自然，指路常用「と」。' },
            { text: 'のに', reason: '「のに」表逆接，語意不合。' },
            { text: 'ので', reason: '「ので」表原因，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '指路場景用「と」條件',
            analysis: '指路時常用「と」條件，表示沿某方向走就必然看到目標。',
            comparisons: ['まっすぐ行くと右にある：一直走右邊就有', '角を曲がると見える：轉角就看得到'],
            commonMistakes: ['指路常用「と」不用「ば」「たら」「なら」'],
        },
    },
    // ━━━ とか ━━━
    {
        id: 'g_n4_318', category: 'grammar', level: 'N4', tags: ['toka', 'listing'],
        stem: '休{やす}みの日{ひ}は映画{えいが}を見{み}る___、買{か}い物{もの}に行{い}く___している。',
        stemZh: '休假的日子會看看電影之類的，或去買東西之類的。',
        options: [
            { text: 'とか…とか', reason: '正確！「とか〜とか」表列舉幾個例子。' },
            { text: 'たり…たり', reason: '「たり〜たり」也可列舉，但接續不同：「見たり」。' },
            { text: 'や…など', reason: '「や〜など」用於名詞列舉，不用於動詞。' },
            { text: 'し…し', reason: '「し〜し」表並列原因，不是單純列舉。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とか〜とか」列舉例子',
            analysis: '「とか」接在動詞辞書形或名詞後面，列舉幾個有代表性的例子，含有「之類的」語感。',
            comparisons: ['映画を見るとか買い物するとか：看電影之類的、買東西之類的', '映画を見たり買い物したりする：看電影或買東西（較正式）'],
            commonMistakes: ['「とか」比「たり」更口語隨意'],
        },
    },
    // ━━━ ために ━━━
    {
        id: 'g_n4_319', category: 'grammar', level: 'N4', tags: ['tame-ni', 'purpose'],
        stem: '日本{にほん}で働{はたら}く___、日本語{にほんご}を勉強{べんきょう}しています。',
        stemZh: '為了在日本工作，正在學日語。',
        options: [
            { text: 'ために', reason: '正確！「辞書形＋ために」表目的。' },
            { text: 'ように', reason: '「ように」用於無意志動詞或可能形，此處「働く」是意志動詞。' },
            { text: 'から', reason: '「から」表原因，不表目的。' },
            { text: 'のに', reason: '「のに」表逆接，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ために」vs「ように」表目的',
            analysis: '「ために」用於意志動詞（自己能控制的動作）；「ように」用於無意志動詞或可能形。',
            comparisons: ['働くために勉強する：為了工作而學習', '話せるようになるために勉強する：為了能說而學習'],
            commonMistakes: ['意志動詞用「ために」/ 無意志動詞・可能形用「ように」'],
        },
    },
    {
        id: 'g_n4_320', category: 'grammar', level: 'N4', tags: ['tame-ni', 'cause', 'advanced'],
        stem: '台風{たいふう}の___、電車{でんしゃ}が止{と}まっている。',
        stemZh: '因為颱風，電車停了。',
        options: [
            { text: 'ために', reason: '正確！「名詞＋のために」表原因。' },
            { text: 'ように', reason: '「ように」不接名詞表原因。' },
            { text: 'せいで', reason: '「せいで」也可表負面原因，但此處測驗「ために」的原因用法。' },
            { text: 'おかげで', reason: '「おかげで」表正面原因（託…的福）。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ために」的原因用法',
            analysis: '「名詞＋のために」或「動詞た形＋ために」可表原因（中性或書面語）。',
            comparisons: ['台風のために電車が止まった：因為颱風電車停了', '台風のせいで電車が止まった：都怪颱風電車停了（負面語氣更強）'],
            commonMistakes: ['「ために」原因用法較中性 / 「せいで」帶負面語氣'],
        },
    },
    // ━━━ たばかり ━━━
    {
        id: 'g_n4_321', category: 'grammar', level: 'N4', tags: ['ta-bakari', 'time'],
        stem: '日本{にほん}に来{き}た___なので、まだ日本語{にほんご}があまり分{わ}かりません。',
        stemZh: '因為剛來日本，日語還不太懂。',
        options: [
            { text: 'ばかり', reason: '正確！「た形＋ばかり」表剛剛完成某事。' },
            { text: 'ところ', reason: '「たところ」也表剛做完，但後面接「なので」時用「ばかり」更自然。' },
            { text: 'だけ', reason: '「だけ」表只、僅僅，語意不同。' },
            { text: 'まで', reason: '「まで」表到…為止，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たばかり」表剛做完',
            analysis: '「た形＋ばかり」表示某動作剛完成不久，強調時間短。',
            comparisons: ['来たばかり：剛來', '来たところ：剛到（更強調此刻）'],
            commonMistakes: ['「たばかり」可接「なので」「だから」/「たところ」更強調「剛剛此刻」'],
        },
    },
    // ━━━ ようにする ━━━
    {
        id: 'g_n4_322', category: 'grammar', level: 'N4', tags: ['you-ni-suru', 'effort'],
        stem: '健康{けんこう}のために、毎日{まいにち}野菜{やさい}を食{た}べる___している。',
        stemZh: '為了健康，努力每天吃蔬菜。',
        options: [
            { text: 'ようにしている', reason: '正確！「ようにしている」表一直努力做到。但空格只需填「ように」。' },
            { text: 'ように', reason: '正確！「食べるようにしている」表努力保持某習慣。' },
            { text: 'ことに', reason: '「ことにしている」表自己決定的習慣，但此處強調努力。' },
            { text: 'ために', reason: '「ために」表目的，前面已有「ために」，重複不自然。' },
        ],
        correctIndex: 1,
        explanation: {
            keyPoint: '「ようにする」表努力做到',
            analysis: '「ようにする」表努力做到某事；「ようにしている」表一直在保持某習慣。',
            comparisons: ['食べるようにしている：努力保持吃（習慣）', '食べることにしている：決定要吃（決定）'],
            commonMistakes: ['「ようにする」強調努力 / 「ことにする」強調決定'],
        },
    },
    // ━━━ ようになる ━━━
    {
        id: 'g_n4_323', category: 'grammar', level: 'N4', tags: ['you-ni-naru', 'change'],
        stem: '毎日{まいにち}練習{れんしゅう}したら、漢字{かんじ}が読{よ}める___なった。',
        stemZh: '每天練習之後，變得能讀漢字了。',
        options: [
            { text: 'ように', reason: '正確！「可能形＋ようになる」表變得能夠…。' },
            { text: 'ことに', reason: '「ことになる」表被決定，語意不同。' },
            { text: 'ために', reason: '「ために」表目的或原因，不表變化。' },
            { text: 'みたいに', reason: '「みたいに」表像…一樣，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようになる」表能力或狀態的變化',
            analysis: '「可能形＋ようになる」表示從不能做到能做的變化。',
            comparisons: ['読めるようになった：變得能讀了', '話せるようになりたい：想變得能說'],
            commonMistakes: ['○ 読めるようになる / × 読むようになる → 要用可能形'],
        },
    },
    // ━━━ ようとする ━━━
    {
        id: 'g_n4_324', category: 'grammar', level: 'N4', tags: ['you-to-suru', 'attempt'],
        stem: '窓{まど}を開{あ}けよう___したら、鍵{かぎ}がかかっていた。',
        stemZh: '正要開窗戶時，發現鎖著了。',
        options: [
            { text: 'と', reason: '正確！「意向形＋とする」表正要做或試圖做。' },
            { text: 'に', reason: '「ように」表為了，與意向形搭配不合。' },
            { text: 'で', reason: '「ようで」不合文法。' },
            { text: 'か', reason: '「ようか」表要不要做，是不同用法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようとする」表試圖或正要',
            analysis: '「意向形＋とする」表示「正要做某事」或「試圖做某事」。',
            comparisons: ['開けようとしたら鍵がかかっていた：正要開就發現鎖了', '出かけようとしたとき電話が鳴った：正要出門時電話響了'],
            commonMistakes: ['○ 開けようとした / × 開けるとした → 要用意向形'],
        },
    },
    // ━━━ られる（可能） ━━━
    {
        id: 'g_n4_325', category: 'grammar', level: 'N4', tags: ['rareru-potential', 'potential'],
        stem: '辛{から}い物{もの}が苦手{にがて}で、キムチが食{た}べ___。',
        stemZh: '不擅長吃辣的東西，不能吃泡菜。',
        options: [
            { text: 'られない', reason: '正確！一段動詞「食べる」的可能否定是「食べられない」。' },
            { text: 'れない', reason: '「食べれない」是「ら抜き言葉」，口語可見但文法考試用「られない」。' },
            { text: 'ない', reason: '「食べない」是否定，但不表不能。' },
            { text: 'たくない', reason: '「食べたくない」表不想吃，不是不能吃。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '一段動詞的可能形',
            analysis: '一段動詞去「る」加「られる」表可能：食べる→食べられる。否定為「食べられない」。',
            comparisons: ['食べられない：不能吃', '食べたくない：不想吃', '食べない：不吃'],
            commonMistakes: ['○ 食べられない / △ 食べれない（ら抜き，口語）'],
        },
    },
    // ━━━ られる（受身） ━━━
    {
        id: 'g_n4_326', category: 'grammar', level: 'N4', tags: ['rareru-passive', 'passive'],
        stem: '電車{でんしゃ}の中{なか}で足{あし}を踏{ふ}ま___。',
        stemZh: '在電車上被踩了腳。',
        options: [
            { text: 'れた', reason: '正確！五段動詞「踏む」的被動是「踏まれる」。' },
            { text: 'された', reason: '「踏まされた」是使役被動，語意不同。' },
            { text: 'せた', reason: '「踏ませた」是使役，語意不同。' },
            { text: 'った', reason: '「踏まった」不合文法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '五段動詞的被動形',
            analysis: '五段動詞將語尾變為「あ段＋れる」：踏む→踏まれる。',
            comparisons: ['足を踏まれた：被踩了腳', '先生に褒められた：被老師稱讚了'],
            commonMistakes: ['○ 踏まれた / × 踏まされた → 被動是「れる」，使役被動是「される」'],
        },
    },
    // ━━━ させる（使役） ━━━
    {
        id: 'g_n4_327', category: 'grammar', level: 'N4', tags: ['saseru', 'causative'],
        stem: '母{はは}は弟{おとうと}に野菜{やさい}を食{た}べ___。',
        stemZh: '媽媽讓弟弟吃蔬菜。',
        options: [
            { text: 'させた', reason: '正確！一段動詞「食べる」的使役是「食べさせる」。' },
            { text: 'られた', reason: '「食べられた」是被動或可能，不是使役。' },
            { text: 'たがった', reason: '「食べたがった」表想吃的樣子。' },
            { text: 'てもらった', reason: '「食べてもらった」表請別人吃。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '一段動詞的使役形',
            analysis: '一段動詞去「る」加「させる」：食べる→食べさせる。表示讓或使某人做某事。',
            comparisons: ['食べさせた：讓（他）吃了', '食べられた：被吃了/能吃了'],
            commonMistakes: ['○ 食べさせる（使役）/ ○ 食べられる（被動・可能）'],
        },
    },
    {
        id: 'g_n4_328', category: 'grammar', level: 'N4', tags: ['saseru', 'causative', 'advanced'],
        stem: '先生{せんせい}は学生{がくせい}に作文{さくぶん}を書{か}___。',
        stemZh: '老師讓學生寫作文。',
        options: [
            { text: 'かせた', reason: '正確！五段動詞「書く」的使役是「書かせる」。' },
            { text: 'かれた', reason: '「書かれた」是被動形。' },
            { text: 'いた', reason: '「書いた」是普通過去形。' },
            { text: 'ける', reason: '「書ける」是可能形。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '五段動詞的使役形',
            analysis: '五段動詞將語尾變為「あ段＋せる」：書く→書かせる。',
            comparisons: ['書かせる：讓（他）寫（使役）', '書かれる：被寫（被動）', '書ける：能寫（可能）'],
            commonMistakes: ['○ 書かせる（使役）/ ○ 書かれる（被動）→ 注意「せる」和「れる」的區別'],
        },
    },
    // ━━━ てしまう ━━━
    {
        id: 'g_n4_329', category: 'grammar', level: 'N4', tags: ['te-shimau', 'completion'],
        stem: '大事{だいじ}な書類{しょるい}をなくして___。',
        stemZh: '把重要的文件弄丟了。',
        options: [
            { text: 'しまった', reason: '正確！「てしまう」表遺憾或不小心做了某事。' },
            { text: 'おいた', reason: '「ておく」表事先做好，語意不合。' },
            { text: 'みた', reason: '「てみる」表嘗試，語意不合。' },
            { text: 'あった', reason: '「てある」表某物被放置的狀態。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てしまう」表遺憾',
            analysis: '「てしまう」的遺憾用法表示不小心做了不好的事，或不希望發生的事發生了。',
            comparisons: ['なくしてしまった：不小心弄丟了', 'なくした：弄丟了（中性）'],
            commonMistakes: ['「てしまう」有兩種意思：① 完成 ② 遺憾'],
        },
    },
    {
        id: 'g_n4_330', category: 'grammar', level: 'N4', tags: ['te-shimau', 'completion', 'advanced'],
        stem: 'この本{ほん}は面白{おもしろ}くて、一日{いちにち}で全部{ぜんぶ}読{よ}んで___。',
        stemZh: '這本書太有趣了，一天就全部讀完了。',
        options: [
            { text: 'しまった', reason: '正確！此處「てしまう」表完全做完（完成）。' },
            { text: 'おいた', reason: '「ておく」表事先準備。' },
            { text: 'あった', reason: '「てある」不接自動詞。' },
            { text: 'いった', reason: '「ていく」表漸漸…下去。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てしまう」表完成',
            analysis: '「てしまう」的完成用法表示某事徹底做完了。',
            comparisons: ['読んでしまった：讀完了（徹底完成）', '食べてしまった：吃完了/不小心吃了（視語境）'],
            commonMistakes: ['「てしまう」完成義不帶遺憾，純粹表徹底做完'],
        },
    },
    // ━━━ ておく ━━━
    {
        id: 'g_n4_331', category: 'grammar', level: 'N4', tags: ['te-oku', 'preparation'],
        stem: 'パーティーの前{まえ}に、飲{の}み物{もの}を買{か}って___。',
        stemZh: '派對之前，先買好飲料。',
        options: [
            { text: 'おいた', reason: '正確！「ておく」表事先準備好。' },
            { text: 'しまった', reason: '「てしまう」表完成或遺憾，不強調事先。' },
            { text: 'みた', reason: '「てみる」表嘗試。' },
            { text: 'あった', reason: '「てある」表結果狀態。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ておく」表事先準備',
            analysis: '「ておく」表示為了某目的事先做好準備。口語常縮為「とく」。',
            comparisons: ['買っておいた：事先買好了', '買ってしまった：買完了/不小心買了'],
            commonMistakes: ['「ておく」口語→「とく」：買っとく＝買っておく'],
        },
    },
    // ━━━ てもらう／てくれる／てあげる ━━━
    {
        id: 'g_n4_332', category: 'grammar', level: 'N4', tags: ['te-morau', 'giving-receiving'],
        stem: '友達{ともだち}に宿題{しゅくだい}を手伝{てつだ}って___。',
        stemZh: '請朋友幫忙做了作業。',
        options: [
            { text: 'もらった', reason: '正確！「てもらう」表從他人那裡獲得幫助。' },
            { text: 'くれた', reason: '「てくれる」表他人主動為我做。「友達に」搭配「てもらう」。' },
            { text: 'あげた', reason: '「てあげる」表我為他人做。' },
            { text: 'おいた', reason: '「ておく」表事先準備。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てもらう」表請人幫忙',
            analysis: '「人に＋動詞て形＋もらう」表示請某人做某事或獲得某人的幫助。',
            comparisons: ['友達に手伝ってもらった：請朋友幫忙了', '友達が手伝ってくれた：朋友（主動）幫了我'],
            commonMistakes: ['「に＋てもらう」/ 「が＋てくれる」→ 助詞不同'],
        },
    },
    {
        id: 'g_n4_333', category: 'grammar', level: 'N4', tags: ['te-kureru', 'giving-receiving'],
        stem: '姉{あね}が駅{えき}まで送{おく}って___。',
        stemZh: '姐姐送我到了車站。',
        options: [
            { text: 'くれた', reason: '正確！「てくれる」表他人（為說話者或其親近的人）做某事。' },
            { text: 'もらった', reason: '「てもらう」需要「に」標記動作者：姉に送ってもらった。' },
            { text: 'あげた', reason: '「てあげる」表為他人做，但此處姐姐為「我」做。' },
            { text: 'みた', reason: '「てみる」表嘗試。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てくれる」表他人為我做',
            analysis: '「てくれる」表示他人為說話者或說話者親近的人做某事，帶感恩語氣。',
            comparisons: ['姉が送ってくれた：姐姐（主動為我）送了', '姉に送ってもらった：（我請）姐姐送了'],
            commonMistakes: ['「てくれる」主語用「が」/「てもらう」動作者用「に」'],
        },
    },
    {
        id: 'g_n4_334', category: 'grammar', level: 'N4', tags: ['te-ageru', 'giving-receiving'],
        stem: '道{みち}に迷{まよ}っている人{ひと}に、地図{ちず}を見{み}せて___。',
        stemZh: '給迷路的人看了地圖。',
        options: [
            { text: 'あげた', reason: '正確！「てあげる」表為他人做某事。' },
            { text: 'くれた', reason: '「てくれる」表他人為我做，此處是我為他人做。' },
            { text: 'もらった', reason: '「てもらう」表請人幫忙。' },
            { text: 'おいた', reason: '「ておく」表事先準備。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てあげる」表為他人做',
            analysis: '「てあげる」表示說話者為他人做某事，帶有施恩的語氣。',
            comparisons: ['見せてあげた：給（他人）看了', '見せてくれた：（他人）給我看了', '見せてもらった：請（他人）給我看了'],
            commonMistakes: ['注意：「てあげる」有時聽起來像自誇，對長輩慎用'],
        },
    },
    // ━━━ ことにする／ことになる ━━━
    {
        id: 'g_n4_335', category: 'grammar', level: 'N4', tags: ['koto-ni-suru', 'decision'],
        stem: '来年{らいねん}から毎朝{まいあさ}ジョギングをする___にした。',
        stemZh: '決定從明年開始每天早上慢跑。',
        options: [
            { text: 'こと', reason: '正確！「ことにする」表自己做決定。' },
            { text: 'よう', reason: '「ようにする」表努力做到，不是一次性決定。' },
            { text: 'ため', reason: '「ために」表目的，語法不合。' },
            { text: 'はず', reason: '「はず」表推測應該，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことにする」表自主決定',
            analysis: '「ことにする」表示自己主動做出決定。',
            comparisons: ['ジョギングをすることにした：（自己）決定慢跑', 'ジョギングをすることになった：（被動地）決定要慢跑'],
            commonMistakes: ['「ことにする」自主決定 / 「ことになる」被動決定或自然結果'],
        },
    },
    {
        id: 'g_n4_336', category: 'grammar', level: 'N4', tags: ['koto-ni-naru', 'decision'],
        stem: '来月{らいげつ}から大阪{おおさか}に転勤{てんきん}する___になった。',
        stemZh: '從下個月開始要調到大阪了。',
        options: [
            { text: 'こと', reason: '正確！「ことになる」表被決定或自然形成的結果。' },
            { text: 'よう', reason: '「ようになる」表能力或習慣的變化。' },
            { text: 'はず', reason: '「はず」表推測，不合語境。' },
            { text: 'つもり', reason: '「つもり」表打算。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことになる」表被動決定',
            analysis: '「ことになる」表示不是自己的意志，而是公司等外部決定的結果。',
            comparisons: ['転勤することになった：（被公司決定）要調動了', '転勤することにした：（自己決定）要調動'],
            commonMistakes: ['「ことになる」常用於公司決定、規定等非自主的情況'],
        },
    },
    // ━━━ はずだ ━━━
    {
        id: 'g_n4_337', category: 'grammar', level: 'N4', tags: ['hazu-da', 'expectation'],
        stem: '彼{かれ}はもう家{いえ}を出{で}た___だから、もうすぐ着{つ}くだろう。',
        stemZh: '他應該已經出門了，所以快要到了吧。',
        options: [
            { text: 'はず', reason: '正確！「はずだ」表根據某根據推測應該如此。' },
            { text: 'つもり', reason: '「つもり」表打算，不表推測。' },
            { text: 'そう', reason: '「そうだ」表看起來或聽說，不合此處。' },
            { text: 'よう', reason: '「ようだ」表似乎，推測根據不明確。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「はずだ」表有根據的推測',
            analysis: '「はずだ」表示根據某個理由或事實，推測某事應該如此。',
            comparisons: ['出たはずだ：應該出門了（有根據的推測）', '出たようだ：似乎出門了（不太確定）'],
            commonMistakes: ['「はず」有根據的推測 / 「よう」不太確定的推測'],
        },
    },
    {
        id: 'g_n4_338', category: 'grammar', level: 'N4', tags: ['hazu-ga-nai', 'expectation', 'advanced'],
        stem: 'あんなに優{やさ}しい人{ひと}がそんなことをする___がない。',
        stemZh: '那麼溫柔的人不可能做那種事。',
        options: [
            { text: 'はず', reason: '正確！「はずがない」表不可能、不應該。' },
            { text: 'わけ', reason: '「わけがない」也表不可能，但此處考「はずがない」。' },
            { text: 'こと', reason: '「ことがない」表沒有做過。' },
            { text: 'もの', reason: '「ものがない」不合文法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「はずがない」表不可能',
            analysis: '「はずがない」表根據道理或事實判斷，某事不可能發生。',
            comparisons: ['するはずがない：不可能做', 'するわけがない：怎麼可能做（語氣更強）'],
            commonMistakes: ['「はずがない」= 不可能 / 「はずだ」= 應該'],
        },
    },
    // ━━━ ところ ━━━
    {
        id: 'g_n4_339', category: 'grammar', level: 'N4', tags: ['tokoro', 'time-aspect'],
        stem: '今{いま}ちょうどご飯{はん}を食{た}べている___です。',
        stemZh: '現在正在吃飯。',
        options: [
            { text: 'ところ', reason: '正確！「ている＋ところ」表正在做某事的當下。' },
            { text: 'ばかり', reason: '「ばかり」表剛做完。' },
            { text: 'はず', reason: '「はず」表推測。' },
            { text: 'つもり', reason: '「つもり」表打算。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ているところ」表正在進行',
            analysis: '「ている＋ところ」強調正在做某事的那個瞬間。',
            comparisons: ['食べるところ：正要吃', '食べているところ：正在吃', '食べたところ：剛吃完'],
            commonMistakes: ['辞書形＋ところ（正要）/ ている＋ところ（正在）/ た形＋ところ（剛完）'],
        },
    },
    {
        id: 'g_n4_340', category: 'grammar', level: 'N4', tags: ['tokoro', 'time-aspect', 'advanced'],
        stem: '出{で}かけよう___ところに、電話{でんわ}がかかってきた。',
        stemZh: '正要出門的時候，電話打來了。',
        options: [
            { text: 'とした', reason: '正確！「ようとしたところに」表正要…的時候。' },
            { text: 'とする', reason: '「ようとするところに」不自然，需用過去形。' },
            { text: 'としている', reason: '「ようとしているところに」雖可，但不如「とした」簡潔。' },
            { text: 'の', reason: '「出かけようのところに」不合文法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようとしたところに」表正要做某事時',
            analysis: '「意向形＋とした＋ところに」表示正要做某事的瞬間，另一件事發生了。',
            comparisons: ['出かけようとしたところに電話が来た：正要出門時電話來了', '食べようとしたところに客が来た：正要吃時客人來了'],
            commonMistakes: ['「ところに」表時間巧合，常用「ようとしたところに」'],
        },
    },
    // ━━━ つもり ━━━
    {
        id: 'g_n4_341', category: 'grammar', level: 'N4', tags: ['tsumori', 'intention'],
        stem: '夏休{なつやす}みにヨーロッパを旅行{りょこう}する___です。',
        stemZh: '打算暑假去歐洲旅行。',
        options: [
            { text: 'つもり', reason: '正確！「つもりだ」表打算做某事。' },
            { text: 'はず', reason: '「はずだ」表推測，不是自己的打算。' },
            { text: 'ところ', reason: '「ところ」表時間相位。' },
            { text: 'ばかり', reason: '「ばかり」表光是或剛剛。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「つもりだ」表打算',
            analysis: '「辞書形＋つもりだ」表示自己的意圖或計劃。',
            comparisons: ['旅行するつもりだ：打算旅行', '旅行するはずだ：應該會旅行（推測）'],
            commonMistakes: ['「つもり」是自己的打算 / 「はず」是對別人或事態的推測'],
        },
    },
    // ━━━ お〜になる（尊敬語） ━━━
    {
        id: 'g_n4_342', category: 'grammar', level: 'N4', tags: ['o-ni-naru', 'keigo', 'honorific'],
        stem: '先生{せんせい}はもうこの本{ほん}をお読{よ}み___か。',
        stemZh: '老師已經讀了這本書了嗎？',
        options: [
            { text: 'になりました', reason: '正確！「お＋ます形＋になる」是尊敬語。' },
            { text: 'しました', reason: '「お読みしました」是自謙語，不用於對老師。' },
            { text: 'ました', reason: '「お読みました」不合文法。' },
            { text: 'くださいました', reason: '「お読みくださいました」表請您讀了，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「お〜になる」尊敬語',
            analysis: '「お＋動詞ます形＋になる」是尊敬語，用於抬高對方的行為。',
            comparisons: ['お読みになる（尊敬）：讀（抬高對方）', 'お読みする（自謙）：讀（降低自己）'],
            commonMistakes: ['「お〜になる」尊敬語 / 「お〜する」自謙語 → 方向相反'],
        },
    },
    // ━━━ お〜する（自謙語） ━━━
    {
        id: 'g_n4_343', category: 'grammar', level: 'N4', tags: ['o-suru', 'keigo', 'humble'],
        stem: '荷物{にもつ}をお持{も}ち___。',
        stemZh: '我來幫您拿行李。',
        options: [
            { text: 'します', reason: '正確！「お＋ます形＋する」是自謙語。' },
            { text: 'になります', reason: '「お持ちになります」是尊敬語，用於對方的動作。' },
            { text: 'ください', reason: '「お持ちください」表請您拿，語意不同。' },
            { text: 'でございます', reason: '「お持ちでございます」不合文法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「お〜する」自謙語',
            analysis: '「お＋動詞ます形＋する」是自謙語，用於降低自己的行為以表敬意。',
            comparisons: ['お持ちします（自謙）：我來拿', 'お持ちになります（尊敬）：您拿'],
            commonMistakes: ['「お〜する」是自謙語，主語一定是「我」方'],
        },
    },
    // ━━━ そうだ（傳聞） ━━━
    {
        id: 'g_n4_344', category: 'grammar', level: 'N4', tags: ['sou-da-hearsay', 'hearsay'],
        stem: '天気{てんき}予報{よほう}によると、明日{あした}は雨{あめ}が降{ふ}る___だ。',
        stemZh: '根據天氣預報，聽說明天會下雨。',
        options: [
            { text: 'そう', reason: '正確！「普通形＋そうだ」表傳聞：聽說…。' },
            { text: 'よう', reason: '「ようだ」表推測：好像…。' },
            { text: 'らしい', reason: '「らしい」也可表傳聞，但此處考「そうだ」。' },
            { text: 'みたい', reason: '「みたい」表好像，較口語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '傳聞「そうだ」接在普通形後',
            analysis: '「普通形＋そうだ」表傳聞，表示從別處聽來的訊息。注意接續：辞書形＋そうだ。',
            comparisons: ['降るそうだ（傳聞）：聽說會下雨', '降りそうだ（様態）：看起來要下雨'],
            commonMistakes: ['傳聞：普通形＋そうだ / 様態：ます形去ます＋そうだ'],
        },
    },
    // ━━━ そうだ（様態） ━━━
    {
        id: 'g_n4_345', category: 'grammar', level: 'N4', tags: ['sou-da-appearance', 'appearance'],
        stem: 'あの子{こ}は泣{な}き___な顔{かお}をしている。',
        stemZh: '那個孩子一副快要哭的表情。',
        options: [
            { text: 'そう', reason: '正確！「ます形去ます＋そうだ」表看起來快要…。' },
            { text: 'たい', reason: '「泣きたい」表想哭，語意不同。' },
            { text: 'やすい', reason: '「泣きやすい」表容易哭。' },
            { text: 'にくい', reason: '「泣きにくい」表難以哭。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '様態「そうだ」表外觀判斷',
            analysis: '「ます形去ます＋そうだ」表根據外觀判斷快要或看起來。',
            comparisons: ['泣きそうだ：看起來快哭了（様態）', '泣くそうだ：聽說會哭（傳聞）'],
            commonMistakes: ['様態：ます形去ます＋そう / 傳聞：辞書形＋そう'],
        },
    },
    // ━━━ ようだ ━━━
    {
        id: 'g_n4_346', category: 'grammar', level: 'N4', tags: ['you-da', 'conjecture'],
        stem: '音{おと}がしないから、もう寝{ね}た___だ。',
        stemZh: '沒有聲音了，好像已經睡了。',
        options: [
            { text: 'よう', reason: '正確！「ようだ」表根據某跡象做出的推測。' },
            { text: 'そう', reason: '「そうだ」接在普通形後是傳聞；接在ます形後是様態。此處不合。' },
            { text: 'はず', reason: '「はず」表有根據的推測（應該），語氣較確定。' },
            { text: 'つもり', reason: '「つもり」表打算。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようだ」表推測',
            analysis: '「ようだ」表根據觀察到的跡象做出推測：好像…、似乎…。',
            comparisons: ['寝たようだ：好像睡了（根據觀察推測）', '寝たらしい：似乎睡了（根據傳聞或間接證據）'],
            commonMistakes: ['「ようだ」根據直接觀察 / 「らしい」根據間接資訊'],
        },
    },
    // ━━━ らしい ━━━
    {
        id: 'g_n4_347', category: 'grammar', level: 'N4', tags: ['rashii', 'conjecture'],
        stem: '田中{たなか}さんは来月{らいげつ}結婚{けっこん}する___。',
        stemZh: '聽說田中下個月要結婚。',
        options: [
            { text: 'らしい', reason: '正確！「らしい」表根據間接資訊推測：聽說…、好像…。' },
            { text: 'そうだ', reason: '「そうだ」也可表傳聞，但此處考「らしい」。' },
            { text: 'ようだ', reason: '「ようだ」表直接觀察的推測。' },
            { text: 'みたい', reason: '「みたい」較口語，也可表推測。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「らしい」表間接資訊推測',
            analysis: '「らしい」表示根據聽說的話或間接證據推測。接續：普通形＋らしい。',
            comparisons: ['結婚するらしい：好像要結婚（間接資訊）', '結婚するそうだ：聽說要結婚（引用來源）'],
            commonMistakes: ['「らしい」不明確引用來源 / 「そうだ」常搭配「によると」引用來源'],
        },
    },
    // ━━━ 複合題：ても ━━━
    {
        id: 'g_n4_348', category: 'grammar', level: 'N4', tags: ['temo', 'concession', 'challenge'],
        stem: 'いくら説明{せつめい}し___、彼{かれ}は分{わ}かって___。',
        stemZh: '不管怎麼解釋，他都不明白。',
        options: [
            { text: 'ても…くれない', reason: '正確！「ても」表即使…；「てくれない」表不肯為我做。' },
            { text: 'たら…くれる', reason: '「たら」是條件，語意不合。' },
            { text: 'ても…しまう', reason: '「てしまう」表完成或遺憾，不合語境。' },
            { text: 'ば…もらう', reason: '「ば〜もらう」搭配不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ても」＋授受表現的組合',
            analysis: '「ても」表讓步：即使…也…；「てくれない」表對方不肯為我做。兩者結合表示無論怎麼做都沒用。',
            comparisons: ['説明しても分かってくれない：怎麼解釋都不明白', '説明したら分かってくれた：解釋了就明白了'],
            commonMistakes: ['「ても」＋否定表無論如何都不… 是常見考法'],
        },
    },
    // ━━━ 複合題：たら〜のに ━━━
    {
        id: 'g_n4_349', category: 'grammar', level: 'N4', tags: ['tara-noni', 'regret', 'challenge'],
        stem: 'もっと早{はや}く起{お}き___、電車{でんしゃ}に間{ま}に合{あ}った___。',
        stemZh: '如果早點起床的話，就趕得上電車了。',
        options: [
            { text: 'たら…のに', reason: '正確！「たら〜のに」表對過去事實的遺憾假設。' },
            { text: 'ば…のに', reason: '「ば〜のに」也可表遺憾，但「たら」更口語自然。' },
            { text: 'たら…から', reason: '「たら〜から」表如果…那是因為，語意不合。' },
            { text: 'ても…のに', reason: '「ても」表讓步，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たら〜のに」表遺憾假設',
            analysis: '「たら〜のに」表示如果當時做了就好了（但實際沒做），表達後悔。',
            comparisons: ['起きたら間に合ったのに：如果起床了就趕上了（遺憾）', '起きれば間に合ったのに：同義，較書面'],
            commonMistakes: ['「のに」結尾表遺憾、惋惜，相當於「可是卻…」'],
        },
    },
    // ━━━ 複合題：ば〜ほど ━━━
    {
        id: 'g_n4_350', category: 'grammar', level: 'N4', tags: ['ba-hodo', 'degree', 'challenge'],
        stem: '日本語{にほんご}は勉強{べんきょう}すれ___する___、難{むずか}しくなる。',
        stemZh: '日語越學越覺得難。',
        options: [
            { text: 'ば…ほど', reason: '正確！「ば〜ほど」表越…越…。' },
            { text: 'ば…だけ', reason: '「ば〜だけ」不是固定句型。' },
            { text: 'たら…ほど', reason: '「たら〜ほど」不合文法。' },
            { text: 'と…ほど', reason: '「と〜ほど」不是標準句型。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ば〜ほど」表遞進變化',
            analysis: '「ば形＋同一動詞辞書形＋ほど」表示做得越多，結果越明顯。',
            comparisons: ['勉強すればするほど難しくなる：越學越難', '考えれば考えるほど分からなくなる：越想越不明白'],
            commonMistakes: ['○ すればするほど / × するとするほど → 必須用ば形'],
        },
    },
    // ━━━ てほしい ━━━
    {
        id: 'g_n4_351', category: 'grammar', level: 'N4', tags: ['te-hoshii', 'request'],
        stem: '静{しず}かにして___んですが。',
        stemZh: '希望你安靜一點。',
        options: [
            { text: 'ほしい', reason: '正確！「て形＋ほしい」表希望對方做某事。' },
            { text: 'もらいたい', reason: '「てもらいたい」也可，但此處考「てほしい」。' },
            { text: 'あげたい', reason: '「てあげたい」表想為別人做，語意不同。' },
            { text: 'みたい', reason: '「てみたい」表想試試。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てほしい」表希望他人做某事',
            analysis: '「て形＋ほしい」表示說話者希望對方做某事。較直接，常加「んですが」緩和語氣。',
            comparisons: ['静かにしてほしい：希望你安靜', '静かにしてもらいたい：想請你安靜（較正式）'],
            commonMistakes: ['「てほしい」用於希望他人做 / 「たい」用於自己想做'],
        },
    },
    {
        id: 'g_n4_352', category: 'grammar', level: 'N4', tags: ['te-hoshii', 'request', 'advanced'],
        stem: '子{こ}どもには元気{げんき}に育{そだ}って___。',
        stemZh: '希望孩子健康長大。',
        options: [
            { text: 'ほしい', reason: '正確！對小孩的期望也用「てほしい」。' },
            { text: 'もらう', reason: '「てもらう」需要具體請求對象做某事。' },
            { text: 'くれる', reason: '「てくれる」表他人主動做。' },
            { text: 'いる', reason: '「ている」表持續狀態。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てほしい」表對他人的期望',
            analysis: '「てほしい」不僅用於請求，也可表達對他人的期望和願望。',
            comparisons: ['元気に育ってほしい：希望健康長大', '元気に育ってもらいたい：想請（他）健康長大（不太自然）'],
            commonMistakes: ['「てほしい」可表願望和期望，不一定是直接請求'],
        },
    },
    // ━━━ ていく ━━━
    {
        id: 'g_n4_353', category: 'grammar', level: 'N4', tags: ['te-iku', 'direction'],
        stem: 'これから日本語{にほんご}をもっと勉強{べんきょう}して___つもりです。',
        stemZh: '今後打算繼續更加努力學日語。',
        options: [
            { text: 'いく', reason: '正確！「ていく」表從現在往未來持續做某事。' },
            { text: 'くる', reason: '「てくる」表從過去到現在持續。' },
            { text: 'おく', reason: '「ておく」表事先準備。' },
            { text: 'しまう', reason: '「てしまう」表完成或遺憾。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ていく」表朝未來持續',
            analysis: '「ていく」表示從現在開始往未來方向持續進行的變化或行為。',
            comparisons: ['勉強していく：繼續學下去（朝未來）', '勉強してきた：一直在學（從過去到現在）'],
            commonMistakes: ['「ていく」朝未來 / 「てくる」從過去到現在'],
        },
    },
    // ━━━ てくる ━━━
    {
        id: 'g_n4_354', category: 'grammar', level: 'N4', tags: ['te-kuru', 'direction'],
        stem: '最近{さいきん}、日本語{にほんご}が少{すこ}しずつ分{わ}かって___。',
        stemZh: '最近日語漸漸地開始懂了。',
        options: [
            { text: 'きた', reason: '正確！「てくる」表從過去到現在的漸進變化。' },
            { text: 'いった', reason: '「ていく」表從現在往未來。' },
            { text: 'しまった', reason: '「てしまう」表完成或遺憾。' },
            { text: 'おいた', reason: '「ておく」表事先準備。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てくる」表漸進變化',
            analysis: '「てくる」表示到目前為止的漸進變化：「漸漸…起來了」。',
            comparisons: ['分かってきた：漸漸懂了（至今的變化）', '分かっていく：會越來越懂（今後的變化）'],
            commonMistakes: ['「てきた」從過去到現在的變化 / 「ていく」從現在到未來的變化'],
        },
    },
    // ━━━ てみる ━━━
    {
        id: 'g_n4_355', category: 'grammar', level: 'N4', tags: ['te-miru', 'attempt'],
        stem: '初{はじ}めて納豆{なっとう}を食{た}べて___が、おいしかった。',
        stemZh: '第一次試吃了納豆，很好吃。',
        options: [
            { text: 'みた', reason: '正確！「てみる」表嘗試做某事。' },
            { text: 'おいた', reason: '「ておく」表事先準備。' },
            { text: 'しまった', reason: '「てしまう」表完成或遺憾。' },
            { text: 'もらった', reason: '「てもらう」表請人幫忙。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てみる」表嘗試',
            analysis: '「て形＋みる」表示嘗試做某事，看看結果如何。',
            comparisons: ['食べてみた：試吃了', '着てみた：試穿了'],
            commonMistakes: ['「てみる」用於第一次嘗試或想知道結果時'],
        },
    },
    // ━━━ ても ━━━
    {
        id: 'g_n4_356', category: 'grammar', level: 'N4', tags: ['temo', 'concession'],
        stem: '雨{あめ}が降{ふ}って___、サッカーの試合{しあい}は行{おこな}われます。',
        stemZh: '即使下雨，足球比賽也會舉行。',
        options: [
            { text: 'も', reason: '正確！「ても」表即使…也…。' },
            { text: 'から', reason: '「てから」表之後，語意不同。' },
            { text: 'は', reason: '「ては」表如果…就不行，語意不同。' },
            { text: 'ばかり', reason: '「てばかり」表光是，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ても」表讓步',
            analysis: '「ても」表示即使某條件成立，結果也不受影響。',
            comparisons: ['雨が降っても試合はある：即使下雨比賽也有', '雨が降ったら試合は中止だ：如果下雨比賽就取消'],
            commonMistakes: ['「ても」讓步（不影響結果）/ 「たら」條件（影響結果）'],
        },
    },
    // ━━━ かどうか ━━━
    {
        id: 'g_n4_357', category: 'grammar', level: 'N4', tags: ['ka-dou-ka', 'indirect-question'],
        stem: '明日{あした}パーティーに行{い}ける___、まだ分{わ}からない。',
        stemZh: '還不知道明天能不能去派對。',
        options: [
            { text: 'かどうか', reason: '正確！「かどうか」表是否…，用於間接疑問。' },
            { text: 'かもしれない', reason: '「かもしれない」表也許，但此處需間接疑問。' },
            { text: 'か', reason: '「か」單獨也可，但「かどうか」更完整表示二擇一。' },
            { text: 'のに', reason: '「のに」表逆接。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かどうか」表是否',
            analysis: '「普通形＋かどうか」表示「是否…」，用於不確定yes/no的間接疑問。',
            comparisons: ['行けるかどうか分からない：不知道能不能去', '何時に行くか分からない：不知道幾點去（疑問詞用「か」即可）'],
            commonMistakes: ['yes/no疑問用「かどうか」/ 疑問詞疑問用「か」'],
        },
    },
    // ━━━ かもしれない ━━━
    {
        id: 'g_n4_358', category: 'grammar', level: 'N4', tags: ['kamo-shirenai', 'possibility'],
        stem: '明日{あした}は雪{ゆき}が降{ふ}る___。',
        stemZh: '明天也許會下雪。',
        options: [
            { text: 'かもしれない', reason: '正確！「かもしれない」表也許、說不定。' },
            { text: 'はずだ', reason: '「はずだ」表應該，確信度更高。' },
            { text: 'にちがいない', reason: '「にちがいない」表一定是，確信度最高。' },
            { text: 'わけがない', reason: '「わけがない」表不可能。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かもしれない」表可能性',
            analysis: '「かもしれない」表示某事有可能發生，語氣不確定。',
            comparisons: ['降るかもしれない：也許會下（不確定）', '降るはずだ：應該會下（有根據）', '降るにちがいない：一定會下（確信）'],
            commonMistakes: ['確信度：かもしれない ＜ はずだ ＜ にちがいない'],
        },
    },
    // ━━━ ながら ━━━
    {
        id: 'g_n4_359', category: 'grammar', level: 'N4', tags: ['nagara', 'simultaneous'],
        stem: '音楽{おんがく}を聞{き}き___、勉強{べんきょう}するのが好{す}きです。',
        stemZh: '我喜歡邊聽音樂邊讀書。',
        options: [
            { text: 'ながら', reason: '正確！「ます形去ます＋ながら」表一邊…一邊…。' },
            { text: 'つつ', reason: '「つつ」也表同時做，但較書面語，N4通常考「ながら」。' },
            { text: 'ても', reason: '「ても」表即使，語意不同。' },
            { text: 'たり', reason: '「たり」表列舉，不表同時進行。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ながら」表同時進行',
            analysis: '「ます形去ます＋ながら」表示同一主語同時做兩件事。後面的動詞是主要動作。',
            comparisons: ['聞きながら勉強する：邊聽邊學（主要動作是學習）', '食べながら話す：邊吃邊說'],
            commonMistakes: ['「ながら」主語必須相同 / 後面是主要動作'],
        },
    },
    // ━━━ なければならない ━━━
    {
        id: 'g_n4_360', category: 'grammar', level: 'N4', tags: ['nakereba-naranai', 'obligation'],
        stem: '明日{あした}までにレポートを出{だ}さ___ならない。',
        stemZh: '必須在明天之前交報告。',
        options: [
            { text: 'なければ', reason: '正確！「なければならない」表必須做某事。' },
            { text: 'なくても', reason: '「なくてもいい」表不做也可以，語意相反。' },
            { text: 'ないで', reason: '「ないで」表不做…地，不合文法。' },
            { text: 'なくて', reason: '「なくて」表因為沒有，不合此處。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なければならない」表義務',
            analysis: '「動詞ない形去い＋ければならない」表示必須做某事。口語常說「なきゃ」。',
            comparisons: ['出さなければならない：必須交', '出さなくてもいい：不交也可以'],
            commonMistakes: ['口語縮約：なければならない→なきゃならない→なきゃ'],
        },
    },
    // ━━━ なら ━━━
    {
        id: 'g_n4_361', category: 'grammar', level: 'N4', tags: ['nara', 'conditional'],
        stem: '日本{にほん}に行{い}く___、京都{きょうと}がおすすめですよ。',
        stemZh: '如果要去日本的話，推薦京都喔。',
        options: [
            { text: 'なら', reason: '正確！「なら」表若是…的話，用於回應對方的話題。' },
            { text: 'と', reason: '「と」表必然條件，不合此語境。' },
            { text: 'ば', reason: '「行けば」可用但不如「なら」自然。' },
            { text: 'のに', reason: '「のに」表逆接，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なら」表提議回應',
            analysis: '「なら」常用於回應對方提到的話題，提出建議或提供資訊。',
            comparisons: ['行くなら京都がいい：要去的話京都好', '行ったら京都に寄ってね：去了的話順便去京都'],
            commonMistakes: ['「なら」常用於回應對方話題給建議'],
        },
    },
    // ━━━ のに（逆接） ━━━
    {
        id: 'g_n4_362', category: 'grammar', level: 'N4', tags: ['noni', 'contrast'],
        stem: '約束{やくそく}した___、彼{かれ}は来{こ}なかった。',
        stemZh: '明明約好了，他卻沒來。',
        options: [
            { text: 'のに', reason: '正確！「のに」表逆接：明明…卻…。' },
            { text: 'から', reason: '「から」表原因，語意不合。' },
            { text: 'ので', reason: '「ので」表原因，語意不合。' },
            { text: 'し', reason: '「し」表並列原因。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「のに」表逆接、不滿',
            analysis: '「のに」表示與預期相反的結果，常帶不滿、遺憾語氣。',
            comparisons: ['約束したのに来なかった：明明約了卻沒來（不滿）', '約束したけど来なかった：約了但沒來（中性）'],
            commonMistakes: ['「のに」比「けど」語氣更強，帶不滿或惋惜'],
        },
    },
    // ━━━ おかげで ━━━
    {
        id: 'g_n4_363', category: 'grammar', level: 'N4', tags: ['okage-de', 'cause'],
        stem: '先生{せんせい}の___、試験{しけん}に合格{ごうかく}できました。',
        stemZh: '多虧了老師，考試及格了。',
        options: [
            { text: 'おかげで', reason: '正確！「おかげで」表正面原因：多虧…。' },
            { text: 'せいで', reason: '「せいで」表負面原因：都怪…。' },
            { text: 'ために', reason: '「ために」表目的或原因（中性）。' },
            { text: 'から', reason: '「から」表原因，但缺少感恩語氣。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「おかげで」表正面原因',
            analysis: '「おかげで」表示因為某正面因素而有好結果，帶感謝語氣。',
            comparisons: ['先生のおかげで合格した：多虧老師及格了（感謝）', '先生のせいで不合格だった：都怪老師沒及格（責怪）'],
            commonMistakes: ['「おかげで」正面（感謝）/ 「せいで」負面（責怪）'],
        },
    },
    // ━━━ せいで ━━━
    {
        id: 'g_n4_364', category: 'grammar', level: 'N4', tags: ['sei-de', 'cause', 'negative'],
        stem: '寝坊{ねぼう}した___、会議{かいぎ}に遅刻{ちこく}してしまった。',
        stemZh: '都怪睡過頭，會議遲到了。',
        options: [
            { text: 'せいで', reason: '正確！「せいで」表負面原因。' },
            { text: 'おかげで', reason: '「おかげで」表正面原因（感謝）。' },
            { text: 'ように', reason: '「ように」表目的或比喻。' },
            { text: 'ところ', reason: '「ところ」表時間相位。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「せいで」表負面原因',
            analysis: '「せいで」表示因某負面因素導致壞結果，帶責怪語氣。',
            comparisons: ['寝坊したせいで遅刻した：都怪睡過頭遲到了', '寝坊したおかげで遅刻した：（不自然，因結果是負面的）'],
            commonMistakes: ['正面結果用「おかげで」/ 負面結果用「せいで」'],
        },
    },
    // ━━━ し（並列） ━━━
    {
        id: 'g_n4_365', category: 'grammar', level: 'N4', tags: ['shi', 'listing-reasons'],
        stem: 'この店{みせ}は安{やす}い___、おいしい___、よく行{い}きます。',
        stemZh: '這家店又便宜又好吃，所以常去。',
        options: [
            { text: 'し…し', reason: '正確！「し〜し」表列舉多個理由。' },
            { text: 'て…て', reason: '「て〜て」是て形連接，不是列舉理由。' },
            { text: 'たり…たり', reason: '「たり〜たり」用於列舉動作，不適合形容詞。' },
            { text: 'けど…けど', reason: '「けど〜けど」表逆接，不是列舉理由。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「し」列舉多個理由',
            analysis: '「し」用於列舉多個理由或特點，常暗示還有其他理由。',
            comparisons: ['安いし、おいしいし：又便宜又好吃（還有其他理由）', '安くておいしい：便宜又好吃（單純連接）'],
            commonMistakes: ['「し」暗示理由不止一個 / 「て」單純連接形容詞'],
        },
    },
    // ━━━ しか〜ない ━━━
    {
        id: 'g_n4_366', category: 'grammar', level: 'N4', tags: ['shika-nai', 'limitation'],
        stem: '財布{さいふ}に百{ひゃく}円{えん}___ない。',
        stemZh: '錢包裡只有一百日圓。',
        options: [
            { text: 'しか', reason: '正確！「しか〜ない」表只有…。' },
            { text: 'だけ', reason: '「だけ」也表只，但後面不接否定。' },
            { text: 'ばかり', reason: '「ばかり」表光是，語意不同。' },
            { text: 'まで', reason: '「まで」表到…為止。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「しか〜ない」表限定',
            analysis: '「しか」搭配否定形使用，表示「只有…」，帶有不足的語氣。',
            comparisons: ['百円しかない：只有一百圓（覺得不夠）', '百円だけある：只有一百圓（中性）'],
            commonMistakes: ['「しか」必須搭配否定 / 「だけ」搭配肯定或否定都可'],
        },
    },
    // ━━━ にとって ━━━
    {
        id: 'g_n4_367', category: 'grammar', level: 'N4', tags: ['ni-totte', 'perspective'],
        stem: '私{わたし}___、家族{かぞく}が一番{いちばん}大切{たいせつ}だ。',
        stemZh: '對我來說，家人最重要。',
        options: [
            { text: 'にとって', reason: '正確！「にとって」表對…而言。' },
            { text: 'について', reason: '「について」表關於…。' },
            { text: 'にたいして', reason: '「にたいして」表對…（態度或方向）。' },
            { text: 'によって', reason: '「によって」表根據或由於。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にとって」表立場觀點',
            analysis: '「にとって」表示從某人的立場或觀點來看。',
            comparisons: ['私にとって大切だ：對我來說重要', '子どもにとって難しい：對小孩來說很難'],
            commonMistakes: ['「にとって」觀點 / 「について」話題 / 「にたいして」對象'],
        },
    },
    // ━━━ について ━━━
    {
        id: 'g_n4_368', category: 'grammar', level: 'N4', tags: ['ni-tsuite', 'topic'],
        stem: '日本{にほん}の文化{ぶんか}___レポートを書{か}いた。',
        stemZh: '寫了一篇關於日本文化的報告。',
        options: [
            { text: 'について', reason: '正確！「について」表關於某話題。' },
            { text: 'にとって', reason: '「にとって」表對…而言，語意不合。' },
            { text: 'にたいして', reason: '「にたいして」表對…（態度），語意不合。' },
            { text: 'によると', reason: '「によると」表根據…，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「について」表話題',
            analysis: '「について」表示關於某主題或話題。',
            comparisons: ['文化についてレポートを書いた：寫了關於文化的報告', '文化について話した：談了關於文化的話題'],
            commonMistakes: ['「について」＝ about / 「にとって」＝ for（某人立場）'],
        },
    },
    // ━━━ によると ━━━
    {
        id: 'g_n4_369', category: 'grammar', level: 'N4', tags: ['ni-yoru-to', 'source'],
        stem: 'ニュース___、明日{あした}は台風{たいふう}が来{く}るそうだ。',
        stemZh: '根據新聞，聽說明天有颱風要來。',
        options: [
            { text: 'によると', reason: '正確！「によると」表資訊來源。' },
            { text: 'について', reason: '「について」表關於，語意不合。' },
            { text: 'にとって', reason: '「にとって」表對…而言，語意不合。' },
            { text: 'のために', reason: '「のために」表為了或因為。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「によると」表資訊來源',
            analysis: '「によると」表示引用某資訊來源，常搭配「そうだ」「らしい」等傳聞表達。',
            comparisons: ['ニュースによると台風が来るそうだ：據新聞說颱風要來', '天気予報によると雨が降るらしい：據天氣預報好像會下雨'],
            commonMistakes: ['「によると」常搭配「そうだ」「らしい」'],
        },
    },
    // ━━━ やすい・にくい ━━━
    {
        id: 'g_n4_370', category: 'grammar', level: 'N4', tags: ['yasui', 'ease'],
        stem: 'この辞書{じしょ}は字{じ}が大{おお}きくて、読{よ}み___。',
        stemZh: '這本字典字很大，很容易看。',
        options: [
            { text: 'やすい', reason: '正確！「ます形去ます＋やすい」表容易做。' },
            { text: 'にくい', reason: '「にくい」表難以做，語意相反。' },
            { text: 'たい', reason: '「たい」表想做。' },
            { text: 'そう', reason: '「そう」表看起來。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「やすい」表容易做',
            analysis: '「ます形去ます＋やすい」表示容易做某事。活用像い形容詞。',
            comparisons: ['読みやすい：容易讀', '読みにくい：難以讀'],
            commonMistakes: ['「やすい」容易 / 「にくい」難以 → 意思相反'],
        },
    },
    {
        id: 'g_n4_371', category: 'grammar', level: 'N4', tags: ['nikui', 'difficulty'],
        stem: 'この靴{くつ}は歩{ある}き___。',
        stemZh: '這雙鞋很難走路。',
        options: [
            { text: 'にくい', reason: '正確！「にくい」表難以做某事。' },
            { text: 'やすい', reason: '「やすい」表容易做，語意相反。' },
            { text: 'たくない', reason: '「たくない」表不想做。' },
            { text: 'すぎる', reason: '「すぎる」表過度。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にくい」表難以做',
            analysis: '「ます形去ます＋にくい」表示某事不容易做到。',
            comparisons: ['歩きにくい：難走', '歩きやすい：好走'],
            commonMistakes: ['「にくい」表客觀上的困難度，不帶感情色彩'],
        },
    },
    // ━━━ すぎる ━━━
    {
        id: 'g_n4_372', category: 'grammar', level: 'N4', tags: ['sugiru', 'excess'],
        stem: '昨日{きのう}お酒{さけ}を飲{の}み___て、頭{あたま}が痛{いた}い。',
        stemZh: '昨天喝太多了，頭痛。',
        options: [
            { text: 'すぎ', reason: '正確！「ます形去ます＋すぎる」表做得太過。' },
            { text: 'たく', reason: '「飲みたくて」表想喝，語意不同。' },
            { text: 'やすく', reason: '「飲みやすくて」表好喝。' },
            { text: 'にくく', reason: '「飲みにくくて」表難喝。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「すぎる」表過度',
            analysis: '「ます形去ます＋すぎる」或「い形去い＋すぎる」表示程度過高。',
            comparisons: ['飲みすぎた：喝太多了', '食べすぎた：吃太多了', '高すぎる：太貴了'],
            commonMistakes: ['動詞：ます形去ます＋すぎる / い形容詞：去い＋すぎる'],
        },
    },
    // ━━━ ことがある ━━━
    {
        id: 'g_n4_373', category: 'grammar', level: 'N4', tags: ['koto-ga-aru', 'occasional'],
        stem: '朝{あさ}ごはんを食{た}べない___がある。',
        stemZh: '有時候不吃早餐。',
        options: [
            { text: 'こと', reason: '正確！「辞書形／ない形＋ことがある」表有時候會…。' },
            { text: 'わけ', reason: '「わけがある」不自然。' },
            { text: 'はず', reason: '「はずがある」不合文法。' },
            { text: 'もの', reason: '「ものがある」不合此處。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「辞書形＋ことがある」表有時候',
            analysis: '「辞書形/ない形＋ことがある」表示某事有時會發生。注意和「た形＋ことがある」（經驗）的區別。',
            comparisons: ['食べないことがある：有時不吃', '食べたことがある：吃過（經驗）'],
            commonMistakes: ['辞書形＋ことがある（有時候）/ た形＋ことがある（曾經）'],
        },
    },
    // ━━━ と言う（引用） ━━━
    {
        id: 'g_n4_374', category: 'grammar', level: 'N4', tags: ['to-iu', 'quotation'],
        stem: '田中{たなか}さんは「明日{あした}は来{こ}られない」___言{い}っていた。',
        stemZh: '田中說「明天不能來」。',
        options: [
            { text: 'と', reason: '正確！「と言う」表引用某人的話。' },
            { text: 'って', reason: '「って」是口語的引用助詞，也可但「と」較正式。' },
            { text: 'に', reason: '「に言う」表對某人說，不是引用。' },
            { text: 'で', reason: '「で言う」不合文法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「と」引用助詞',
            analysis: '「と言う」用於引述某人說的話。直接引用用「」括號，間接引用不用。',
            comparisons: ['「来られない」と言った：說了「不能來」（直接引用）', '来られないと言った：說了不能來（間接引用）'],
            commonMistakes: ['「と」正式 / 「って」口語：田中さんが来ないって'],
        },
    },
    // ━━━ という（定義・説明） ━━━
    {
        id: 'g_n4_375', category: 'grammar', level: 'N4', tags: ['to-iu', 'definition'],
        stem: '「すみません」___日本語{にほんご}は英語{えいご}で何{なに}ですか。',
        stemZh: '「すみません」這個日語用英語怎麼說？',
        options: [
            { text: 'という', reason: '正確！「という」表叫做…的意思。' },
            { text: 'との', reason: '「との」是引用＋の，此處不合。' },
            { text: 'とか', reason: '「とか」表之類的，語意不同。' },
            { text: 'としての', reason: '「としての」表作為…的，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「という」表定義或名稱',
            analysis: '「という」用於介紹名稱或定義：叫做…、所謂的…。',
            comparisons: ['「すみません」という日本語：「すみません」這個日語', '東京タワーという建物：叫做東京鐵塔的建築物'],
            commonMistakes: ['「という」接名詞修飾 / 「と言う」引用發言'],
        },
    },
    // ━━━ 方（かた） ━━━
    {
        id: 'g_n4_376', category: 'grammar', level: 'N4', tags: ['kata', 'method'],
        stem: 'この漢字{かんじ}の読{よ}み___が分{わ}かりません。',
        stemZh: '不知道這個漢字的讀法。',
        options: [
            { text: '方{かた}', reason: '正確！「ます形去ます＋方」表做某事的方法。' },
            { text: '所{ところ}', reason: '「読みところ」不合文法。' },
            { text: '物{もの}', reason: '「読み物」表讀物，語意不同。' },
            { text: '事{こと}', reason: '「読みこと」不合文法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「方」表方法',
            analysis: '「ます形去ます＋方」表示做某事的方法、方式。',
            comparisons: ['読み方：讀法', '書き方：寫法', '使い方：用法'],
            commonMistakes: ['○ 読み方 / × 読む方 → 要用ます形去ます接「方」'],
        },
    },
    // ━━━ かわりに ━━━
    {
        id: 'g_n4_377', category: 'grammar', level: 'N4', tags: ['kawari-ni', 'substitute'],
        stem: '病気{びょうき}の田中{たなか}さんの___に、私{わたし}が会議{かいぎ}に出{で}た。',
        stemZh: '代替生病的田中，我出席了會議。',
        options: [
            { text: 'かわり', reason: '正確！「かわりに」表代替…。' },
            { text: 'ため', reason: '「ために」表為了或因為。' },
            { text: 'おかげ', reason: '「おかげで」表託…的福。' },
            { text: 'せい', reason: '「せいで」表都怪…。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かわりに」表代替',
            analysis: '「人のかわりに」表示代替某人做某事。',
            comparisons: ['田中さんのかわりに出席した：代替田中出席了', 'コーヒーのかわりにお茶を飲む：代替咖啡喝茶'],
            commonMistakes: ['「かわりに」也可表「作為交換」：手伝うかわりに昼ご飯をおごって'],
        },
    },
    // ━━━ みたいだ ━━━
    {
        id: 'g_n4_378', category: 'grammar', level: 'N4', tags: ['mitai-da', 'appearance'],
        stem: '彼女{かのじょ}は女優{じょゆう}___きれいだ。',
        stemZh: '她像女演員一樣漂亮。',
        options: [
            { text: 'みたいに', reason: '正確！「みたいに」修飾形容詞或動詞。' },
            { text: 'みたいだ', reason: '「みたいだ」用於句末。' },
            { text: 'ようだ', reason: '「ようだ」較書面，且接續不同：女優のように。' },
            { text: 'らしい', reason: '「らしい」表推測或典型性。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「みたいに」修飾用法',
            analysis: '「名詞＋みたいに」修飾動詞或形容詞，表示像…一樣地。',
            comparisons: ['女優みたいにきれいだ：像女演員一樣漂亮', '子どもみたいに泣いた：像小孩一樣地哭'],
            commonMistakes: ['「みたいに」（口語）= 「のように」（書面語）'],
        },
    },
    // ━━━ まま ━━━
    {
        id: 'g_n4_379', category: 'grammar', level: 'N4', tags: ['mama', 'state'],
        stem: '電気{でんき}をつけた___寝{ね}てしまった。',
        stemZh: '開著燈就睡著了。',
        options: [
            { text: 'まま', reason: '正確！「た形＋まま」表保持某狀態。' },
            { text: 'ところ', reason: '「ところ」表時間相位。' },
            { text: 'ばかり', reason: '「ばかり」表剛剛。' },
            { text: 'あと', reason: '「あと」表之後。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「まま」表保持狀態',
            analysis: '「た形＋まま」表示在某狀態沒有改變的情況下做了另一件事。',
            comparisons: ['つけたまま寝た：開著燈睡了', '靴を履いたまま入った：穿著鞋進去了'],
            commonMistakes: ['「まま」表「沒有回到原來的狀態就…」'],
        },
    },
    // ━━━ ほど ━━━
    {
        id: 'g_n4_380', category: 'grammar', level: 'N4', tags: ['hodo', 'degree'],
        stem: '死{し}ぬ___疲{つか}れた。',
        stemZh: '累得要死。',
        options: [
            { text: 'ほど', reason: '正確！「ほど」表到…的程度。' },
            { text: 'くらい', reason: '「くらい」也可表程度，但「ほど」更強調極端。' },
            { text: 'まで', reason: '「まで」表到…為止，語意不同。' },
            { text: 'だけ', reason: '「だけ」表只，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ほど」表程度',
            analysis: '「辞書形＋ほど」表示到達某種極端的程度，常用於誇張表達。',
            comparisons: ['死ぬほど疲れた：累得要死', '泣くほど嬉しかった：高興得要哭'],
            commonMistakes: ['「ほど」比「くらい」語氣更強'],
        },
    },
    // ━━━ ほど〜ない ━━━
    {
        id: 'g_n4_381', category: 'grammar', level: 'N4', tags: ['hodo-nai', 'comparison'],
        stem: '東京{とうきょう}は大阪{おおさか}___人{ひと}が多{おお}くない。',
        stemZh: '東京沒有大阪那麼多人。',
        options: [
            { text: 'ほど', reason: '正確！「AはBほど〜ない」表A沒有B那麼…。' },
            { text: 'より', reason: '「より」用於「AはBより〜」表A比B更…。' },
            { text: 'みたいに', reason: '「みたいに」表像…一樣。' },
            { text: 'くらい', reason: '「くらい」也可但「ほど〜ない」是固定句型。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ほど〜ない」表否定比較',
            analysis: '「AはBほど〜ない」表示A沒有B那麼…，是比較的否定表達。',
            comparisons: ['東京は大阪ほど人が多くない：東京沒大阪那麼多人', '東京は大阪より人が多い：東京比大阪人多'],
            commonMistakes: ['「ほど〜ない」否定比較 / 「より〜」肯定比較'],
        },
    },
    // ━━━ ほかに ━━━
    {
        id: 'g_n4_382', category: 'grammar', level: 'N4', tags: ['hoka-ni', 'addition'],
        stem: '日本語{にほんご}の___に、英語{えいご}も勉強{べんきょう}している。',
        stemZh: '除了日語之外，也在學英語。',
        options: [
            { text: 'ほか', reason: '正確！「ほかに」表除了…之外還有。' },
            { text: '以外{いがい}', reason: '「以外に」也可表除了…之外，但接續不同。' },
            { text: 'かわり', reason: '「かわりに」表代替。' },
            { text: 'ため', reason: '「ために」表為了或因為。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ほかに」表追加',
            analysis: '「AのほかにBも」表示除了A之外還有B。',
            comparisons: ['日本語のほかに英語も勉強している：除了日語還學英語', '日本語以外に英語も勉強している：日語以外也學英語'],
            commonMistakes: ['「ほかに」≈「以外に」但「ほかに」更口語自然'],
        },
    },
    // ━━━ うちに ━━━
    {
        id: 'g_n4_383', category: 'grammar', level: 'N4', tags: ['uchi-ni', 'time-limit'],
        stem: '暗{くら}くならない___に帰{かえ}りましょう。',
        stemZh: '趁還沒天黑回家吧。',
        options: [
            { text: 'うち', reason: '正確！「ない形＋うちに」表趁還沒…的時候。' },
            { text: '間{あいだ}', reason: '「間に」也表期間內，但「うちに」更強調趁機。' },
            { text: 'まで', reason: '「までに」表在…之前，可用但語感不同。' },
            { text: 'ところ', reason: '「ところ」不合此處。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「うちに」表趁…之際',
            analysis: '「うちに」表示趁某狀態還持續的時候做某事。常搭配「ない形」表趁還沒…。',
            comparisons: ['暗くならないうちに帰る：趁還沒天黑回家', '若いうちに旅行する：趁年輕旅行'],
            commonMistakes: ['「うちに」強調「趁現在」/ 「間に」只表期間內'],
        },
    },
    // ━━━ までに ━━━
    {
        id: 'g_n4_384', category: 'grammar', level: 'N4', tags: ['made-ni', 'deadline'],
        stem: '金曜日{きんようび}___にレポートを提出{ていしゅつ}してください。',
        stemZh: '請在星期五之前提交報告。',
        options: [
            { text: 'まで', reason: '正確！「までに」表截止期限。' },
            { text: 'から', reason: '「から」表從…開始。' },
            { text: 'ごろ', reason: '「ごろ」表大約…時候。' },
            { text: 'のうち', reason: '「のうち」表在…之中。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「までに」表截止期限',
            analysis: '「までに」表示在某期限之前必須完成某事。',
            comparisons: ['金曜日までに出す：星期五之前交（截止期限）', '金曜日まで働く：工作到星期五（持續到那時）'],
            commonMistakes: ['「までに」截止期限（之前完成）/ 「まで」持續到那時'],
        },
    },
    // ━━━ わけだ ━━━
    {
        id: 'g_n4_385', category: 'grammar', level: 'N4', tags: ['wake-da', 'conclusion', 'advanced'],
        stem: '毎日{まいにち}三{さん}時間{じかん}練習{れんしゅう}しているのか。上手{じょうず}な___だ。',
        stemZh: '每天練習三小時嗎？難怪很厲害。',
        options: [
            { text: 'わけ', reason: '正確！「わけだ」表恍然大悟：難怪…。' },
            { text: 'はず', reason: '「はずだ」表推測應該。' },
            { text: 'こと', reason: '「ことだ」表建議或忠告。' },
            { text: 'もの', reason: '「ものだ」表感嘆或一般道理。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「わけだ」表理解原因',
            analysis: '「わけだ」表示了解了原因後的恍然大悟：難怪…、也就是說…。',
            comparisons: ['上手なわけだ：難怪很厲害', '上手なはずだ：應該很厲害'],
            commonMistakes: ['「わけだ」恍然大悟 / 「はずだ」有根據的推測'],
        },
    },
    // ━━━ わけではない ━━━
    {
        id: 'g_n4_386', category: 'grammar', level: 'N4', tags: ['wake-dewa-nai', 'partial-negation', 'advanced'],
        stem: '日本語{にほんご}が嫌{きら}いな___ではない。ただ難{むずか}しいだけだ。',
        stemZh: '並不是討厭日語。只是很難而已。',
        options: [
            { text: 'わけ', reason: '正確！「わけではない」表部分否定：並不是…。' },
            { text: 'はず', reason: '「はずではない」表不應該。' },
            { text: 'こと', reason: '「ことではない」不自然。' },
            { text: 'もの', reason: '「ものではない」表不該。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「わけではない」表部分否定',
            analysis: '「わけではない」表示否認某種推測或結論：並不是…、未必…。',
            comparisons: ['嫌いなわけではない：並不是討厭', '嫌いではない：不討厭（直接否定）'],
            commonMistakes: ['「わけではない」是婉轉否認 / 直接否定語氣較強'],
        },
    },
    // ━━━ わけがない ━━━
    {
        id: 'g_n4_387', category: 'grammar', level: 'N4', tags: ['wake-ga-nai', 'impossibility', 'advanced'],
        stem: 'あんな高{たか}い車{くるま}が買{か}える___がない。',
        stemZh: '怎麼可能買得起那麼貴的車。',
        options: [
            { text: 'わけ', reason: '正確！「わけがない」表不可能、沒有道理。' },
            { text: 'はず', reason: '「はずがない」也表不可能，但「わけがない」語氣更強。' },
            { text: 'こと', reason: '「ことがない」表從來沒有做過。' },
            { text: 'もの', reason: '「ものがない」不合文法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「わけがない」表強烈否定',
            analysis: '「わけがない」表示從道理上來說不可能，語氣強烈。',
            comparisons: ['買えるわけがない：怎麼可能買得起（語氣最強）', '買えるはずがない：不可能買得起', '買えないだろう：大概買不起'],
            commonMistakes: ['強度：わけがない ＞ はずがない ＞ ないだろう'],
        },
    },
    // ━━━ やはり・やっぱり ━━━
    {
        id: 'g_n4_388', category: 'grammar', level: 'N4', tags: ['yahari', 'as-expected'],
        stem: '天気{てんき}予報{よほう}の通{とお}り、___雨{あめ}が降{ふ}ってきた。',
        stemZh: '如天氣預報所說，果然下雨了。',
        options: [
            { text: 'やっぱり', reason: '正確！「やっぱり」表果然、還是。' },
            { text: 'たぶん', reason: '「たぶん」表大概、也許。' },
            { text: 'きっと', reason: '「きっと」表一定，用於預測。' },
            { text: 'もちろん', reason: '「もちろん」表當然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「やっぱり」表符合預期',
            analysis: '「やっぱり」（「やはり」的口語）表示事情如預期發展：果然…。',
            comparisons: ['やっぱり雨が降った：果然下雨了', 'やっぱり日本料理が好きだ：還是喜歡日本菜'],
            commonMistakes: ['「やっぱり」口語 = 「やはり」書面語'],
        },
    },
    // ━━━ 予定（よてい） ━━━
    {
        id: 'g_n4_389', category: 'grammar', level: 'N4', tags: ['yotei', 'plan'],
        stem: '来週{らいしゅう}東京{とうきょう}に出張{しゅっちょう}する___です。',
        stemZh: '預定下週去東京出差。',
        options: [
            { text: '予定{よてい}', reason: '正確！「予定だ」表預定計劃。' },
            { text: 'つもり', reason: '「つもり」表個人打算。' },
            { text: 'はず', reason: '「はず」表推測應該。' },
            { text: 'ところ', reason: '「ところ」表時間相位。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「予定だ」表預定安排',
            analysis: '「辞書形＋予定だ」表示已經安排好的計劃或日程。',
            comparisons: ['出張する予定だ：預定出差（已安排）', '出張するつもりだ：打算出差（個人意圖）'],
            commonMistakes: ['「予定」已確定的安排 / 「つもり」個人的打算'],
        },
    },
    // ━━━ ようと思う ━━━
    {
        id: 'g_n4_390', category: 'grammar', level: 'N4', tags: ['you-to-omou', 'intention'],
        stem: '来年{らいねん}は留学{りゅうがく}し___と思{おも}っている。',
        stemZh: '一直打算明年去留學。',
        options: [
            { text: 'よう', reason: '正確！「意向形＋と思っている」表一直以來的打算。' },
            { text: 'たい', reason: '「したいと思っている」也可，但此處考意向形接法。' },
            { text: 'る', reason: '「すると思っている」表推測別人會做。' },
            { text: 'ない', reason: '「しないと思っている」表認為不會做。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようと思っている」表持續的打算',
            analysis: '「意向形＋と思っている」表示一直以來的打算或計劃。「と思う」則是此刻的決定。',
            comparisons: ['留学しようと思っている：一直打算留學', '留学しようと思う：（此刻）想留學'],
            commonMistakes: ['「と思う」此刻想法 / 「と思っている」持續想法'],
        },
    },
    // ━━━ 複合題：ないでほしい ━━━
    {
        id: 'g_n4_391', category: 'grammar', level: 'N4', tags: ['te-hoshii', 'negative-request', 'challenge'],
        stem: 'ここでタバコを吸{す}わ___ほしいんですが。',
        stemZh: '希望你不要在這裡抽菸。',
        options: [
            { text: 'ないで', reason: '正確！「ないでほしい」表希望對方不要做。' },
            { text: 'なくて', reason: '「なくてほしい」不合文法。' },
            { text: 'ずに', reason: '「ずにほしい」不合文法。' },
            { text: 'なければ', reason: '「なければほしい」不合文法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ないでほしい」表否定請求',
            analysis: '「ない形去い＋ないでほしい」表示希望對方不要做某事。',
            comparisons: ['吸わないでほしい：希望不要抽菸', '吸ってほしい：希望抽菸'],
            commonMistakes: ['○ 吸わないでほしい / × 吸わなくてほしい → 用「ないで」不用「なくて」'],
        },
    },
    // ━━━ なさい（命令） ━━━
    {
        id: 'g_n4_392', category: 'grammar', level: 'N4', tags: ['nasai', 'command'],
        stem: '早{はや}く宿題{しゅくだい}をし___。',
        stemZh: '快去做作業！',
        options: [
            { text: 'なさい', reason: '正確！「ます形去ます＋なさい」表命令。' },
            { text: 'ください', reason: '「してください」是請求，較禮貌。' },
            { text: 'てほしい', reason: '「してほしい」表希望。' },
            { text: 'たほうがいい', reason: '「したほうがいい」表建議。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なさい」表上對下命令',
            analysis: '「ます形去ます＋なさい」是較柔和的命令形，常用於父母對小孩、老師對學生。',
            comparisons: ['しなさい：做！（命令）', 'してください：請做（請求）', 'しろ：做！（粗魯命令形）'],
            commonMistakes: ['「なさい」柔和命令 / 命令形（しろ）粗魯命令'],
        },
    },
    // ━━━ ずっと ━━━
    {
        id: 'g_n4_393', category: 'grammar', level: 'N4', tags: ['zutto', 'continuity'],
        stem: '彼女{かのじょ}のことを___好{す}きでした。',
        stemZh: '一直喜歡她。',
        options: [
            { text: 'ずっと', reason: '正確！「ずっと」表一直、始終。' },
            { text: 'もっと', reason: '「もっと」表更加。' },
            { text: 'きっと', reason: '「きっと」表一定。' },
            { text: 'やっと', reason: '「やっと」表終於。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ずっと」表時間上的持續',
            analysis: '「ずっと」表示從某時開始一直持續到現在或長期持續。也可表「…得多」用於比較。',
            comparisons: ['ずっと好きだった：一直喜歡', 'ずっと大きい：大得多（比較）'],
            commonMistakes: ['「ずっと」① 一直（持續）② …得多（比較程度）'],
        },
    },
    // ━━━ やっと ━━━
    {
        id: 'g_n4_394', category: 'grammar', level: 'N4', tags: ['yatto', 'finally'],
        stem: '三年{さんねん}かかって、___日本語能力試験{にほんごのうりょくしけん}に合格{ごうかく}した。',
        stemZh: '花了三年，終於通過了日語能力考試。',
        options: [
            { text: 'やっと', reason: '正確！「やっと」表經過努力終於實現。' },
            { text: 'ずっと', reason: '「ずっと」表一直。' },
            { text: 'きっと', reason: '「きっと」表一定（推測）。' },
            { text: 'もっと', reason: '「もっと」表更加。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「やっと」表費力後終於',
            analysis: '「やっと」表示經過長時間或努力，終於達成。帶有如釋重負的語氣。',
            comparisons: ['やっと合格した：終於合格了', 'ようやく合格した：好不容易合格了（同義）'],
            commonMistakes: ['「やっと」≈「ようやく」表終於 / 「とうとう」可用於正面或負面'],
        },
    },
    // ━━━ 複合題：させてもらう ━━━
    {
        id: 'g_n4_395', category: 'grammar', level: 'N4', tags: ['saseru', 'te-morau', 'challenge'],
        stem: '先{さき}に帰{かえ}ら___もらってもいいですか。',
        stemZh: '可以讓我先回去嗎？',
        options: [
            { text: 'せて', reason: '正確！「させてもらう」表請求許可讓自己做。' },
            { text: 'れて', reason: '「帰られてもらう」不合文法。' },
            { text: 'して', reason: '「帰してもらう」是他動詞用法，此處需使役。' },
            { text: 'なくて', reason: '「帰らなくてもらう」不合文法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「させてもらう」表請求許可',
            analysis: '「使役形＋てもらう」表示請求對方允許自己做某事，非常禮貌的表達。',
            comparisons: ['帰らせてもらう：請允許我回去', '帰らせてください：請讓我回去'],
            commonMistakes: ['「させてもらう」比「させてください」更客氣'],
        },
    },
    // ━━━ 複合題：ているところに ━━━
    {
        id: 'g_n4_396', category: 'grammar', level: 'N4', tags: ['tokoro', 'te-iru', 'challenge'],
        stem: 'お風呂{ふろ}に入{はい}っている___に、電話{でんわ}が鳴{な}った。',
        stemZh: '正在洗澡的時候，電話響了。',
        options: [
            { text: 'ところ', reason: '正確！「ているところに」表正在做某事時。' },
            { text: 'あいだ', reason: '「ている間に」也可，但「ところに」更強調恰好此刻。' },
            { text: 'うち', reason: '「ているうちに」強調趁…之際。' },
            { text: 'ばかり', reason: '「ているばかり」表一直在做。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ているところに」表巧合時點',
            analysis: '「ているところに」表示正在做某事的瞬間，另一件事意外發生。',
            comparisons: ['入っているところに電話が鳴った：正在洗澡時電話響了', '入っている間に電話が鳴った：洗澡期間電話響了'],
            commonMistakes: ['「ところに」強調巧合的瞬間 / 「間に」強調期間'],
        },
    },
    // ━━━ 複合題：なければいけない ━━━
    {
        id: 'g_n4_397', category: 'grammar', level: 'N4', tags: ['nakereba-ikenai', 'obligation', 'advanced'],
        stem: '明日{あした}は朝{あさ}六時{ろくじ}に起{お}き___いけない。',
        stemZh: '明天早上六點必須起床。',
        options: [
            { text: 'なければ', reason: '正確！「なければいけない」表必須做。' },
            { text: 'なくては', reason: '「なくてはいけない」也正確，但此處空格後是「いけない」，選「なければ」。' },
            { text: 'ないと', reason: '「ないといけない」是口語，也可但此處考書面形。' },
            { text: 'なくても', reason: '「なくてもいい」表不做也行，語意相反。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なければいけない」表義務',
            analysis: '「なければいけない」和「なければならない」都表必須做某事。「いけない」較口語。',
            comparisons: ['起きなければいけない：必須起來', '起きなければならない：必須起來（較正式）', '起きなきゃ：必須起來（口語省略）'],
            commonMistakes: ['ならない ≈ いけない，「ならない」較正式'],
        },
    },
    // ━━━ おきに ━━━
    {
        id: 'g_n4_398', category: 'grammar', level: 'N4', tags: ['oki-ni', 'interval'],
        stem: 'この薬{くすり}は四{よ}時間{じかん}___に飲{の}んでください。',
        stemZh: '這個藥請每隔四小時吃一次。',
        options: [
            { text: 'おき', reason: '正確！「おきに」表每隔…。' },
            { text: 'ごと', reason: '「ごとに」表每…，語意稍有不同。' },
            { text: 'まで', reason: '「までに」表在…之前。' },
            { text: 'くらい', reason: '「くらいに」表大約。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「おきに」表間隔',
            analysis: '「數量＋おきに」表每隔一定間隔做某事。',
            comparisons: ['四時間おきに飲む：每隔四小時吃一次', '四時間ごとに飲む：每四小時吃一次'],
            commonMistakes: ['「おきに」強調間隔 / 「ごとに」強調每一次'],
        },
    },
    // ━━━ 複合題：させられる（使役被動） ━━━
    {
        id: 'g_n4_399', category: 'grammar', level: 'N4', tags: ['saseru', 'rareru', 'causative-passive', 'challenge'],
        stem: '子{こ}どもの頃{ころ}、毎日{まいにち}ピアノを練習{れんしゅう}___。',
        stemZh: '小時候每天被迫練鋼琴。',
        options: [
            { text: 'させられた', reason: '正確！「させられる」表被迫做某事（使役被動）。' },
            { text: 'させた', reason: '「させた」表讓別人做（使役）。' },
            { text: 'された', reason: '「された」是被動，但「練習する」的被動不自然。' },
            { text: 'してもらった', reason: '「してもらった」表請別人幫忙做。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '使役被動「させられる」表被迫',
            analysis: '「させられる」是使役＋被動的複合形，表示被某人強迫做某事。',
            comparisons: ['練習させられた：被迫練習', '練習させた：讓（別人）練習', '練習した：練習了'],
            commonMistakes: ['使役被動表被迫做不想做的事，常帶不滿語氣'],
        },
    },
    // ━━━ 複合題：ていただけませんか ━━━
    {
        id: 'g_n4_400', category: 'grammar', level: 'N4', tags: ['te-morau', 'keigo', 'challenge'],
        stem: 'すみません、この漢字{かんじ}の読{よ}み方{かた}を教{おし}えて___か。',
        stemZh: '不好意思，能否教我這個漢字的讀法？',
        options: [
            { text: 'いただけません', reason: '正確！「ていただけませんか」是最鄭重的請求。' },
            { text: 'もらえません', reason: '「てもらえませんか」也是請求，但沒那麼鄭重。' },
            { text: 'くれません', reason: '「てくれませんか」也可請求，較不正式。' },
            { text: 'ください', reason: '「てください」是一般請求。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ていただけませんか」最鄭重的請求',
            analysis: '「ていただけませんか」是「てもらう」的尊敬語否定疑問，是最禮貌的請求方式。',
            comparisons: ['教えていただけませんか：能否請您教（最鄭重）', '教えてもらえませんか：能不能請你教', '教えてくれませんか：能教我嗎', '教えてください：請教我'],
            commonMistakes: ['鄭重度：いただけませんか ＞ もらえませんか ＞ くれませんか ＞ ください'],
        },
    },
    // ━━━ とおり ━━━
    {
        id: 'g_n4_401', category: 'grammar', level: 'N4', tags: ['toori', 'manner'],
        stem: '先生{せんせい}が言{い}った___にやってください。',
        stemZh: '請照老師說的做。',
        options: [
            { text: 'とおり', reason: '正確！「た形＋とおりに」表按照…地做。' },
            { text: 'まま', reason: '「まま」表保持狀態，語意不同。' },
            { text: 'ように', reason: '「ように」表為了或像…一樣，語感不同。' },
            { text: 'ところ', reason: '「ところ」表時間相位。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「とおりに」表按照',
            analysis: '「た形／名詞の＋とおりに」表示按照某方式或某人說的去做。',
            comparisons: ['言ったとおりにやる：照說的做', '説明書のとおりに作る：照說明書做'],
            commonMistakes: ['「とおりに」後接動作 / 「とおりだ」表確實如此'],
        },
    },
    // ━━━ だけで ━━━
    {
        id: 'g_n4_402', category: 'grammar', level: 'N4', tags: ['dake-de', 'sufficiency'],
        stem: '見{み}る___で、作{つく}り方{かた}が分{わ}かった。',
        stemZh: '光看就知道怎麼做了。',
        options: [
            { text: 'だけ', reason: '正確！「だけで」表光是…就…。' },
            { text: 'ばかり', reason: '「ばかり」表光是做（帶批判），語意不同。' },
            { text: 'しか', reason: '「しか」後需否定。' },
            { text: 'まで', reason: '「まで」表甚至，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「だけで」表僅憑…就…',
            analysis: '「だけで」表示僅僅做某事就達成了某結果，不需要更多。',
            comparisons: ['見るだけで分かった：光看就懂了', '見ただけで分かった：只看了一下就懂了'],
            commonMistakes: ['「辞書形＋だけで」和「た形＋だけで」語感略不同'],
        },
    },
    // ━━━ ぜんぜん ━━━
    {
        id: 'g_n4_403', category: 'grammar', level: 'N4', tags: ['zenzen', 'negation'],
        stem: 'この映画{えいが}は___面白{おもしろ}くなかった。',
        stemZh: '這部電影完全不有趣。',
        options: [
            { text: 'ぜんぜん', reason: '正確！「ぜんぜん〜ない」表完全不…。' },
            { text: 'あまり', reason: '「あまり〜ない」表不太…，程度較弱。' },
            { text: 'すこし', reason: '「少し」表稍微，不搭配否定。' },
            { text: 'たいてい', reason: '「たいてい」表大多。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ぜんぜん〜ない」表全面否定',
            analysis: '「ぜんぜん」搭配否定形表示完全不…。程度比「あまり〜ない」更強。',
            comparisons: ['ぜんぜん面白くない：完全不有趣', 'あまり面白くない：不太有趣'],
            commonMistakes: ['「ぜんぜん」全面否定 / 「あまり」部分否定'],
        },
    },
    // ━━━ ぜひ ━━━
    {
        id: 'g_n4_404', category: 'grammar', level: 'N4', tags: ['zehi', 'emphasis'],
        stem: '日本{にほん}に来{き}たら、___京都{きょうと}に行{い}ってください。',
        stemZh: '來日本的話，請務必去京都。',
        options: [
            { text: 'ぜひ', reason: '正確！「ぜひ」表務必、一定要。' },
            { text: 'きっと', reason: '「きっと」表一定（推測），不合請求語境。' },
            { text: 'たぶん', reason: '「たぶん」表大概。' },
            { text: 'もし', reason: '「もし」表如果。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ぜひ」表強烈推薦',
            analysis: '「ぜひ」用於強烈推薦或請求，表示務必、一定要。',
            comparisons: ['ぜひ行ってください：務必去', 'ぜひ来てください：務必來'],
            commonMistakes: ['「ぜひ」常搭配「てください」表強烈推薦'],
        },
    },
    // ━━━ 中（ちゅう／じゅう） ━━━
    {
        id: 'g_n4_405', category: 'grammar', level: 'N4', tags: ['chuu', 'ongoing'],
        stem: '会議{かいぎ}___なので、後{あと}で電話{でんわ}します。',
        stemZh: '正在開會，所以等一下再打電話。',
        options: [
            { text: '中{ちゅう}', reason: '正確！「名詞＋中」表正在進行中。' },
            { text: 'の間{あいだ}', reason: '「の間」表期間，但「中」更自然。' },
            { text: 'のところ', reason: '「のところ」不太自然。' },
            { text: 'の後{あと}', reason: '「の後」表之後，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「中」表進行中',
            analysis: '「名詞＋中（ちゅう）」表某事正在進行中。「中（じゅう）」表整個範圍。',
            comparisons: ['会議中：正在開會', '一日中：整天', '世界中：全世界'],
            commonMistakes: ['「ちゅう」表進行中 / 「じゅう」表整個範圍'],
        },
    },
    // ━━━ くする（い形容詞使役變化） ━━━
    {
        id: 'g_n4_406', category: 'grammar', level: 'N4', tags: ['ku-suru', 'adjective-change'],
        stem: 'テレビの音{おと}を小{ちい}さ___してください。',
        stemZh: '請把電視的聲音調小。',
        options: [
            { text: 'く', reason: '正確！い形容詞去い加く＋する：小さくする。' },
            { text: 'に', reason: '「に」用於な形容詞：静かにする。' },
            { text: 'で', reason: '「小さでする」不合文法。' },
            { text: 'と', reason: '「小さとする」不合文法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: 'い形容詞＋くする',
            analysis: 'い形容詞去い加「く」再接「する」表示使之變成某狀態。',
            comparisons: ['小さくする：弄小', '大きくする：弄大', '静かにする：弄安靜（な形容詞）'],
            commonMistakes: ['い形容詞：〜くする / な形容詞：〜にする'],
        },
    },
    // ━━━ にする（決定） ━━━
    {
        id: 'g_n4_407', category: 'grammar', level: 'N4', tags: ['ni-suru', 'decision'],
        stem: '飲{の}み物{もの}はコーヒー___します。',
        stemZh: '飲料我選咖啡。',
        options: [
            { text: 'に', reason: '正確！「名詞＋にする」表決定選擇。' },
            { text: 'を', reason: '「を」是受詞助詞，但選擇用「にする」。' },
            { text: 'が', reason: '「が」不合此處。' },
            { text: 'で', reason: '「で」表手段或場所。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「にする」表選擇決定',
            analysis: '「名詞＋にする」表示從多個選項中決定選某一個。',
            comparisons: ['コーヒーにする：決定喝咖啡', 'これにします：我選這個'],
            commonMistakes: ['點餐常用「〜にします」表選擇'],
        },
    },
    // ━━━ がする ━━━
    {
        id: 'g_n4_408', category: 'grammar', level: 'N4', tags: ['ga-suru', 'sensation'],
        stem: 'この花{はな}はいい匂{にお}い___する。',
        stemZh: '這朵花有好聞的味道。',
        options: [
            { text: 'が', reason: '正確！「匂いがする」表散發出氣味。' },
            { text: 'を', reason: '「匂いをする」不合文法。' },
            { text: 'に', reason: '「匂いにする」語意不同。' },
            { text: 'で', reason: '「匂いでする」不合文法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「がする」表感知',
            analysis: '「匂い/味/音/声/感じ＋がする」表感覺到某種氣味、味道、聲音等。',
            comparisons: ['いい匂いがする：有好聞的味道', '変な音がする：有奇怪的聲音', '甘い味がする：有甜味'],
            commonMistakes: ['感知類名詞固定搭配「がする」不用「をする」'],
        },
    },
    // ━━━ がる ━━━
    {
        id: 'g_n4_409', category: 'grammar', level: 'N4', tags: ['garu', 'appearance'],
        stem: '弟{おとうと}はいつも新{あたら}しいおもちゃを欲{ほ}し___。',
        stemZh: '弟弟總是表現出想要新玩具的樣子。',
        options: [
            { text: 'がる', reason: '正確！「がる」表第三人稱表現出某種感覺。' },
            { text: 'い', reason: '「欲しい」只用於第一人稱。' },
            { text: 'そうだ', reason: '「欲しそうだ」表看起來想要。' },
            { text: 'みたい', reason: '「欲しみたい」不合文法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「がる」表第三人稱的感情外顯',
            analysis: '「い形容詞去い＋がる」用於描述第三人稱的感情或慾望的外在表現。',
            comparisons: ['欲しがる：表現出想要', '怖がる：表現出害怕', '寂しがる：表現出寂寞'],
            commonMistakes: ['「たい」「ほしい」用於第一人稱 / 「がる」用於第三人稱'],
        },
    },
    // ━━━ さえ ━━━
    {
        id: 'g_n4_410', category: 'grammar', level: 'N4', tags: ['sae', 'emphasis', 'advanced'],
        stem: 'この問題{もんだい}は子{こ}ども___解{と}ける。',
        stemZh: '這個問題連小孩都能解。',
        options: [
            { text: 'でさえ', reason: '正確！「でさえ」表連…都…。' },
            { text: 'でも', reason: '「でも」也可表連…都…，但「でさえ」更強調。' },
            { text: 'だけ', reason: '「だけ」表只有。' },
            { text: 'しか', reason: '「しか」搭配否定，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「さえ」表極端例子',
            analysis: '「でさえ」表示連最不可能的例子都…，用於強調。',
            comparisons: ['子どもでさえ解ける：連小孩都能解', '子どもでも解ける：即使小孩也能解'],
            commonMistakes: ['「さえ」比「でも」語氣更強，更強調意外性'],
        },
    },
    // ━━━ ように言う ━━━
    {
        id: 'g_n4_411', category: 'grammar', level: 'N4', tags: ['you-ni-iu', 'indirect-command'],
        stem: '医者{いしゃ}にお酒{さけ}を飲{の}まない___言{い}われた。',
        stemZh: '被醫生告誡不要喝酒。',
        options: [
            { text: 'ように', reason: '正確！「ように言う」表間接轉述命令或請求。' },
            { text: 'ために', reason: '「ために」表目的。' },
            { text: 'ことに', reason: '「ことに」不合此處。' },
            { text: 'みたいに', reason: '「みたいに」表像…一樣。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ように言う」表間接命令',
            analysis: '「ように言う」用於轉述某人的命令、請求或忠告。',
            comparisons: ['飲まないように言われた：被告誡不要喝', '飲まないでと言われた：被說不要喝（直接引用）'],
            commonMistakes: ['「ように言う」間接引用指示 / 「と言う」直接引用'],
        },
    },
    // ━━━ ようにしてください ━━━
    {
        id: 'g_n4_412', category: 'grammar', level: 'N4', tags: ['you-ni-suru', 'request', 'advanced'],
        stem: '遅刻{ちこく}しない___してください。',
        stemZh: '請注意不要遲到。',
        options: [
            { text: 'ように', reason: '正確！「ようにしてください」表請務必做到…。' },
            { text: 'ことに', reason: '「ことにしてください」不太自然。' },
            { text: 'ために', reason: '「ためにしてください」不合文法。' },
            { text: 'はずに', reason: '「はずにしてください」不合文法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようにしてください」表請求注意',
            analysis: '「ようにしてください」表示請對方注意做到某事或避免某事。',
            comparisons: ['遅刻しないようにしてください：請注意不要遲到', '遅刻しないでください：請不要遲到（較直接）'],
            commonMistakes: ['「ようにしてください」比「ないでください」語氣更柔和'],
        },
    },
    // ━━━ いらっしゃる（尊敬語） ━━━
    {
        id: 'g_n4_413', category: 'grammar', level: 'N4', tags: ['irassharu', 'keigo', 'honorific'],
        stem: '社長{しゃちょう}は今{いま}会議室{かいぎしつ}に___。',
        stemZh: '社長現在在會議室。',
        options: [
            { text: 'いらっしゃいます', reason: '正確！「いらっしゃる」是「いる」的尊敬語。' },
            { text: 'おります', reason: '「おります」是「いる」的自謙語。' },
            { text: 'います', reason: '「います」是一般丁寧語，對社長不夠尊敬。' },
            { text: 'おられます', reason: '「おられます」有地域差異，標準語用「いらっしゃいます」。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「いらっしゃる」尊敬語',
            analysis: '「いらっしゃる」是「いる・行く・来る」的尊敬語，用於抬高對方。',
            comparisons: ['いらっしゃいます（尊敬）：在', 'おります（自謙）：在', 'います（一般）：在'],
            commonMistakes: ['「いらっしゃる」可替代「いる」「行く」「来る」三個動詞'],
        },
    },
    // ━━━ いたします（自謙語） ━━━
    {
        id: 'g_n4_414', category: 'grammar', level: 'N4', tags: ['itashimasu', 'keigo', 'humble'],
        stem: '私{わたし}が案内{あんない}___。',
        stemZh: '由我來帶路。',
        options: [
            { text: 'いたします', reason: '正確！「いたします」是「します」的自謙語。' },
            { text: 'なさいます', reason: '「なさいます」是「します」的尊敬語。' },
            { text: 'します', reason: '「します」是一般丁寧語。' },
            { text: 'されます', reason: '「されます」是被動或尊敬語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「いたす」是「する」的自謙語',
            analysis: '「いたします」是「します」的自謙語，用於降低自己以表敬意。',
            comparisons: ['案内いたします（自謙）：我來帶路', '案内なさいます（尊敬）：您帶路', '案内します（一般）：帶路'],
            commonMistakes: ['「いたす」自謙語 / 「なさる」尊敬語 → 方向相反'],
        },
    },
    // ━━━ お〜ください ━━━
    {
        id: 'g_n4_415', category: 'grammar', level: 'N4', tags: ['o-kudasai', 'keigo', 'honorific'],
        stem: 'どうぞこちらにお掛{か}け___。',
        stemZh: '請坐這裡。',
        options: [
            { text: 'ください', reason: '正確！「お＋ます形＋ください」是尊敬的請求。' },
            { text: 'します', reason: '「お掛けします」是自謙語。' },
            { text: 'になります', reason: '「お掛けになります」是陳述，不是請求。' },
            { text: 'いたします', reason: '「お掛けいたします」是自謙語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「お〜ください」尊敬請求',
            analysis: '「お＋動詞ます形＋ください」是尊敬語的請求表達，比「てください」更鄭重。',
            comparisons: ['お掛けください：請坐（尊敬）', '座ってください：請坐（一般）'],
            commonMistakes: ['「お〜ください」比「て形＋ください」更鄭重'],
        },
    },
    // ━━━ られる（尊敬） ━━━
    {
        id: 'g_n4_416', category: 'grammar', level: 'N4', tags: ['rareru-sonkei', 'keigo', 'honorific', 'advanced'],
        stem: '部長{ぶちょう}は何時{なんじ}に来{こ}___か。',
        stemZh: '部長幾點來？',
        options: [
            { text: 'られます', reason: '正確！「られる」可作尊敬語使用。' },
            { text: 'ます', reason: '「来ます」是一般丁寧語，不夠尊敬。' },
            { text: 'させます', reason: '「来させます」是使役，語意不同。' },
            { text: 'ておきます', reason: '「来ておきます」語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「られる」的尊敬語用法',
            analysis: '被動形「られる」也可作尊敬語使用，是最簡單的尊敬語形式。',
            comparisons: ['来られます（尊敬語・られる）', 'いらっしゃいます（尊敬語・特殊動詞）', '来ます（一般丁寧語）'],
            commonMistakes: ['「られる」有三種意思：被動、可能、尊敬 → 靠語境判斷'],
        },
    },
    // ━━━ ことができる ━━━
    {
        id: 'g_n4_417', category: 'grammar', level: 'N4', tags: ['koto-ga-dekiru', 'ability'],
        stem: 'このアプリを使{つか}えば、簡単{かんたん}に予約{よやく}する___できる。',
        stemZh: '用這個APP的話，可以輕鬆預約。',
        options: [
            { text: 'ことが', reason: '正確！「辞書形＋ことができる」表能夠做。' },
            { text: 'のが', reason: '「するのができる」不自然。' },
            { text: 'ように', reason: '「するようにできる」不合文法。' },
            { text: 'ために', reason: '「するためにできる」不合文法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことができる」表能力或可能',
            analysis: '「辞書形＋ことができる」表示能夠做某事，比可能形更正式。',
            comparisons: ['予約することができる：可以預約（正式）', '予約できる：可以預約（口語）'],
            commonMistakes: ['「ことができる」較書面正式 / 可能形較口語簡潔'],
        },
    },
    // ━━━ なかなか ━━━
    {
        id: 'g_n4_418', category: 'grammar', level: 'N4', tags: ['nakanaka', 'difficulty'],
        stem: '日本語{にほんご}の敬語{けいご}は___覚{おぼ}えられない。',
        stemZh: '日語的敬語怎麼也記不住。',
        options: [
            { text: 'なかなか', reason: '正確！「なかなか〜ない」表怎麼也不…、很難…。' },
            { text: 'ぜんぜん', reason: '「ぜんぜん〜ない」表完全不，語氣太強。' },
            { text: 'あまり', reason: '「あまり〜ない」表不太，程度不同。' },
            { text: 'ちっとも', reason: '「ちっとも〜ない」表一點也不，語氣較強。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なかなか〜ない」表不容易',
            analysis: '「なかなか」搭配否定形表示雖然努力但怎麼也無法達成。帶有焦慮或遺憾語氣。',
            comparisons: ['なかなか覚えられない：怎麼也記不住', 'ぜんぜん覚えられない：完全記不住'],
            commonMistakes: ['「なかなか＋否定」表困難 / 「なかなか＋肯定」表相當好'],
        },
    },
    // ━━━ きっと ━━━
    {
        id: 'g_n4_419', category: 'grammar', level: 'N4', tags: ['kitto', 'certainty'],
        stem: '毎日{まいにち}練習{れんしゅう}すれば、___上手{じょうず}になりますよ。',
        stemZh: '如果每天練習的話，一定會變好的。',
        options: [
            { text: 'きっと', reason: '正確！「きっと」表一定、必定。' },
            { text: 'たぶん', reason: '「たぶん」表大概，確信度較低。' },
            { text: 'もしかしたら', reason: '「もしかしたら」表也許，不確定。' },
            { text: 'ぜんぜん', reason: '「ぜんぜん」搭配否定，語意不合。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「きっと」表確信推測',
            analysis: '「きっと」表說話者堅信某事一定會發生，確信度很高。',
            comparisons: ['きっと上手になる：一定會變好', 'たぶん上手になる：大概會變好', 'もしかしたら上手になるかも：也許會變好'],
            commonMistakes: ['確信度：きっと ＞ たぶん ＞ もしかしたら'],
        },
    },
    // ━━━ そろそろ ━━━
    {
        id: 'g_n4_420', category: 'grammar', level: 'N4', tags: ['sorosoro', 'timing'],
        stem: '___帰{かえ}らないと、終電{しゅうでん}に間{ま}に合{あ}わない。',
        stemZh: '差不多該回去了，不然趕不上末班車。',
        options: [
            { text: 'そろそろ', reason: '正確！「そろそろ」表差不多該…了。' },
            { text: 'もうすぐ', reason: '「もうすぐ」表快要…了，不表「該做」。' },
            { text: 'やっと', reason: '「やっと」表終於。' },
            { text: 'とうとう', reason: '「とうとう」表終於（結果已定）。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「そろそろ」表時機到了',
            analysis: '「そろそろ」表示差不多到了該做某事的時候了。',
            comparisons: ['そろそろ帰らないと：差不多該回去了', 'そろそろ始めましょう：差不多開始吧'],
            commonMistakes: ['「そろそろ」暗示「時間快到了，應該行動了」'],
        },
    },
    // ━━━ 複合題：ことにしている ━━━
    {
        id: 'g_n4_421', category: 'grammar', level: 'N4', tags: ['koto-ni-suru', 'habit', 'challenge'],
        stem: '健康{けんこう}のために、毎日{まいにち}三十{さんじゅう}分{ぷん}歩{ある}く___にしている。',
        stemZh: '為了健康，規定自己每天走三十分鐘。',
        options: [
            { text: 'こと', reason: '正確！「ことにしている」表自己決定並持續執行的習慣。' },
            { text: 'よう', reason: '「ようにしている」表努力做到，不如「ことにしている」確定。' },
            { text: 'はず', reason: '「はずにしている」不合文法。' },
            { text: 'つもり', reason: '「つもりにしている」不合文法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことにしている」表自定規則',
            analysis: '「ことにしている」表示自己決定了某個規則或習慣並持續執行。',
            comparisons: ['歩くことにしている：規定自己走路（自定規則）', '歩くようにしている：努力走路（未必每次做到）'],
            commonMistakes: ['「ことにしている」確定的規則 / 「ようにしている」努力的目標'],
        },
    },
    // ━━━ 複合題：ことになっている ━━━
    {
        id: 'g_n4_422', category: 'grammar', level: 'N4', tags: ['koto-ni-naru', 'rule', 'challenge'],
        stem: 'この学校{がっこう}では、携帯電話{けいたいでんわ}を使{つか}ってはいけない___になっている。',
        stemZh: '在這所學校，規定不能使用手機。',
        options: [
            { text: 'こと', reason: '正確！「ことになっている」表規定或慣例。' },
            { text: 'よう', reason: '「ようになっている」表能力或狀態的變化。' },
            { text: 'はず', reason: '「はずになっている」不合文法。' },
            { text: 'わけ', reason: '「わけになっている」不合文法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ことになっている」表規定',
            analysis: '「ことになっている」表示某個規則、規定或慣例已經存在並被遵守。',
            comparisons: ['使ってはいけないことになっている：規定不能用', '使わないことにしている：自己決定不用'],
            commonMistakes: ['「ことになっている」外部規定 / 「ことにしている」自定規則'],
        },
    },
    // ━━━ 複合題：てある ━━━
    {
        id: 'g_n4_423', category: 'grammar', level: 'N4', tags: ['te-aru', 'resultant-state', 'advanced'],
        stem: '壁{かべ}にきれいな絵{え}が掛{か}けて___。',
        stemZh: '牆上掛著一幅漂亮的畫。',
        options: [
            { text: 'ある', reason: '正確！「てある」表某人做了某事之後的結果狀態。' },
            { text: 'いる', reason: '「ている」表持續，但此處強調結果狀態。' },
            { text: 'おく', reason: '「ておく」表事先準備。' },
            { text: 'しまう', reason: '「てしまう」表完成或遺憾。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てある」表結果狀態',
            analysis: '「他動詞て形＋ある」表示某人有意地做了某事，其結果狀態持續著。',
            comparisons: ['絵が掛けてある：畫掛著（某人掛的）', '絵が掛かっている：畫掛著（描述狀態）'],
            commonMistakes: ['「てある」用他動詞，暗示有人做了 / 「ている」用自動詞，描述狀態'],
        },
    },
    // ━━━ たり〜たり ━━━
    {
        id: 'g_n4_424', category: 'grammar', level: 'N4', tags: ['tari-tari', 'listing-actions'],
        stem: '日曜日{にちようび}は本{ほん}を読{よ}ん___、映画{えいが}を見{み}___している。',
        stemZh: '星期天會看看書、看看電影之類的。',
        options: [
            { text: 'だり…たり', reason: '正確！「たり〜たりする」表列舉數個動作。' },
            { text: 'で…て', reason: '「て形」是按順序連接，不是列舉。' },
            { text: 'ても…ても', reason: '「ても」表即使，語意不同。' },
            { text: 'たら…たら', reason: '「たら〜たら」不是列舉句型。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たり〜たりする」表列舉動作',
            analysis: '「たり〜たりする」列舉幾個有代表性的動作，暗示還有其他動作。最後要加「する」。',
            comparisons: ['読んだり見たりする：看書或看電影之類的', '読んだり見たりした：看了書和電影之類的'],
            commonMistakes: ['「たり〜たり」最後一定要加「する」'],
        },
    },
    // ━━━ ちょっと ━━━
    {
        id: 'g_n4_425', category: 'grammar', level: 'N4', tags: ['chotto', 'softening'],
        stem: 'すみません、___お願{ねが}いがあるんですが。',
        stemZh: '不好意思，有一點小事想請你幫忙。',
        options: [
            { text: 'ちょっと', reason: '正確！「ちょっと」表稍微，用於緩和語氣。' },
            { text: 'とても', reason: '「とても」表非常。' },
            { text: 'ぜんぜん', reason: '「ぜんぜん」表完全。' },
            { text: 'たいへん', reason: '「たいへん」表非常、嚴重。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ちょっと」緩和請求',
            analysis: '「ちょっと」除了表「稍微」外，還常用於緩和請求或委婉拒絕。',
            comparisons: ['ちょっとお願いがある：有點事想請你幫忙', 'ちょっと…（不好意思）：用於委婉拒絕'],
            commonMistakes: ['「ちょっと…」結尾不說完是委婉拒絕的常見用法'],
        },
    },
    // ━━━ ちゃんと ━━━
    {
        id: 'g_n4_426', category: 'grammar', level: 'N4', tags: ['chanto', 'properly'],
        stem: '明日{あした}の準備{じゅんび}を___しておいてね。',
        stemZh: '明天的準備要好好做好喔。',
        options: [
            { text: 'ちゃんと', reason: '正確！「ちゃんと」表好好地、確實地做。' },
            { text: 'ちょっと', reason: '「ちょっと」表稍微。' },
            { text: 'ぜんぜん', reason: '「ぜんぜん」搭配否定。' },
            { text: 'やっと', reason: '「やっと」表終於。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ちゃんと」表確實做好',
            analysis: '「ちゃんと」表示按照應有的方式好好地、確實地做。',
            comparisons: ['ちゃんと準備する：好好準備', 'ちゃんと食べる：好好吃'],
            commonMistakes: ['「ちゃんと」≈「きちんと」但「ちゃんと」更口語'],
        },
    },
    // ━━━ こそ ━━━
    {
        id: 'g_n4_427', category: 'grammar', level: 'N4', tags: ['koso', 'emphasis', 'advanced'],
        stem: 'こちら___よろしくお願{ねが}いします。',
        stemZh: '我才要請您多多關照。',
        options: [
            { text: 'こそ', reason: '正確！「こそ」表正是、才是，強調主題。' },
            { text: 'は', reason: '「は」是一般主題助詞，不夠強調。' },
            { text: 'も', reason: '「も」表也，語意不同。' },
            { text: 'が', reason: '「が」是主格助詞。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「こそ」表強調',
            analysis: '「こそ」用於強調某詞，表示「正是…」「才是…」。',
            comparisons: ['こちらこそ：我才是（要感謝／請多關照）', '今年こそ頑張る：今年才要好好努力'],
            commonMistakes: ['「こちらこそ」是回應感謝或問候的常用語'],
        },
    },
    // ━━━ ようだ（比喻） ━━━
    {
        id: 'g_n4_428', category: 'grammar', level: 'N4', tags: ['you-da', 'simile', 'advanced'],
        stem: '彼{かれ}は魚{さかな}___泳{およ}ぐのが上手{じょうず}だ。',
        stemZh: '他游泳游得像魚一樣好。',
        options: [
            { text: 'のように', reason: '正確！「のように」表像…一樣地。' },
            { text: 'みたいに', reason: '「みたいに」也可，但較口語。' },
            { text: 'のそうに', reason: '「のそうに」不合文法。' },
            { text: 'のらしく', reason: '「のらしく」不合文法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ように」表比喻',
            analysis: '「名詞＋のように」表示像…一樣地，用於比喻。',
            comparisons: ['魚のように泳ぐ：像魚一樣地游', '子どものように笑う：像小孩一樣地笑'],
            commonMistakes: ['「のように」書面語 / 「みたいに」口語'],
        },
    },
    // ━━━ たしか ━━━
    {
        id: 'g_n4_429', category: 'grammar', level: 'N4', tags: ['tashika', 'uncertainty'],
        stem: '___、あの店{みせ}は火曜日{かようび}が定休日{ていきゅうび}だったと思{おも}う。',
        stemZh: '如果沒記錯的話，那家店星期二公休。',
        options: [
            { text: 'たしか', reason: '正確！「たしか」表如果沒記錯的話。' },
            { text: 'きっと', reason: '「きっと」表一定，確信度較高。' },
            { text: 'やっぱり', reason: '「やっぱり」表果然。' },
            { text: 'もちろん', reason: '「もちろん」表當然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たしか」表不確定回憶',
            analysis: '「たしか」表示「如果沒記錯的話」，用於對記憶不太確定時。',
            comparisons: ['たしか火曜日だったと思う：沒記錯的話是星期二', 'きっと火曜日だ：一定是星期二'],
            commonMistakes: ['「たしか」＝不太確定的回憶 / 「たしかに」＝確實（肯定）'],
        },
    },
    // ━━━ まさか ━━━
    {
        id: 'g_n4_430', category: 'grammar', level: 'N4', tags: ['masaka', 'disbelief', 'advanced'],
        stem: '___彼{かれ}が犯人{はんにん}だったとは信{しん}じられない。',
        stemZh: '難道他是犯人，真不敢相信。',
        options: [
            { text: 'まさか', reason: '正確！「まさか」表難以置信、不會吧。' },
            { text: 'やはり', reason: '「やはり」表果然，語意相反。' },
            { text: 'たしか', reason: '「たしか」表如果沒記錯。' },
            { text: 'もしかしたら', reason: '「もしかしたら」表也許。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「まさか」表驚訝不信',
            analysis: '「まさか」表示「不會吧」「難道」，用於對意外事情的驚訝。',
            comparisons: ['まさか犯人だったとは：沒想到竟然是犯人', 'まさか合格するとは：沒想到竟然及格了'],
            commonMistakes: ['「まさか〜とは」是常見搭配，表出乎意料'],
        },
    },
    // ━━━ どころか ━━━
    {
        id: 'g_n4_431', category: 'grammar', level: 'N4', tags: ['dokoro-ka', 'contrast', 'advanced'],
        stem: '漢字{かんじ}___、ひらがなも読{よ}めない。',
        stemZh: '別說漢字了，連平假名都不會讀。',
        options: [
            { text: 'どころか', reason: '正確！「どころか」表別說…了，連…都…。' },
            { text: 'だけでなく', reason: '「だけでなく」表不僅…還…，語氣不同。' },
            { text: 'ばかりか', reason: '「ばかりか」也可表不僅，但「どころか」更強調落差。' },
            { text: 'のに', reason: '「のに」表逆接。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「どころか」表強烈對比',
            analysis: '「どころか」表示別說某事了，連更基本的事都做不到，強調落差之大。',
            comparisons: ['漢字どころかひらがなも読めない：別說漢字了連平假名也不會', '暇どころか忙しくて死にそうだ：哪裡有空，忙得要死'],
            commonMistakes: ['「どころか」表現實與預期的巨大落差'],
        },
    },
    // ━━━ 必要がある ━━━
    {
        id: 'g_n4_432', category: 'grammar', level: 'N4', tags: ['hitsuyou-ga-aru', 'necessity'],
        stem: 'この書類{しょるい}にサインする___がある。',
        stemZh: '有必要在這份文件上簽名。',
        options: [
            { text: '必要{ひつよう}', reason: '正確！「辞書形＋必要がある」表有必要做。' },
            { text: 'こと', reason: '「ことがある」表有時候做。' },
            { text: 'はず', reason: '「はずがある」不合文法。' },
            { text: 'わけ', reason: '「わけがある」不自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「必要がある」表有必要',
            analysis: '「辞書形＋必要がある」表示做某事是必要的。否定為「必要はない」。',
            comparisons: ['サインする必要がある：有必要簽名', 'サインする必要はない：沒必要簽名'],
            commonMistakes: ['「必要がある」較正式 / 「なければならない」較一般'],
        },
    },
    // ━━━ 以外 ━━━
    {
        id: 'g_n4_433', category: 'grammar', level: 'N4', tags: ['igai', 'exclusion'],
        stem: '肉{にく}___は何{なん}でも食{た}べられます。',
        stemZh: '除了肉以外什麼都能吃。',
        options: [
            { text: '以外{いがい}', reason: '正確！「以外」表除了…之外。' },
            { text: 'ほか', reason: '「ほか」也可表除了…之外。' },
            { text: 'だけ', reason: '「だけ」表只有，語意不同。' },
            { text: 'まで', reason: '「まで」表到…為止。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「以外」表排除',
            analysis: '「名詞＋以外」表示排除某項，其餘都可以。',
            comparisons: ['肉以外は食べられる：除了肉都能吃', '肉のほかは食べられる：除了肉以外都能吃'],
            commonMistakes: ['「以外」排除某項 / 「ほかに」追加某項'],
        },
    },
    // ━━━ 意向形 ━━━
    {
        id: 'g_n4_434', category: 'grammar', level: 'N4', tags: ['ikou-kei', 'volitional'],
        stem: '一緒{いっしょ}に昼{ひる}ごはんを食{た}べ___。',
        stemZh: '一起吃午飯吧。',
        options: [
            { text: 'よう', reason: '正確！一段動詞「食べる」的意向形是「食べよう」。' },
            { text: 'ましょう', reason: '「食べましょう」也是邀請形，但此處考意向形。' },
            { text: 'たい', reason: '「食べたい」表想吃，不是邀請。' },
            { text: 'ないか', reason: '「食べないか」也是邀請，但空格在「食べ」後。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '意向形表邀請或意志',
            analysis: '一段動詞去「る」加「よう」為意向形，用於邀請或表意志。',
            comparisons: ['食べよう：吃吧（意向形）', '食べましょう：吃吧（丁寧語意向形）'],
            commonMistakes: ['一段動詞：去る加よう / 五段動詞：う段變お段加う'],
        },
    },
    // ━━━ じゃないか ━━━
    {
        id: 'g_n4_435', category: 'grammar', level: 'N4', tags: ['janai-ka', 'confirmation'],
        stem: 'それ、私{わたし}のペン___。',
        stemZh: '那是我的筆不是嗎？',
        options: [
            { text: 'じゃないか', reason: '正確！「じゃないか」表確認或輕微驚訝。' },
            { text: 'ではないだろうか', reason: '「ではないだろうか」較正式書面語。' },
            { text: 'かもしれない', reason: '「かもしれない」表也許。' },
            { text: 'らしい', reason: '「らしい」表好像。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「じゃないか」表確認',
            analysis: '「じゃないか」用於確認某事或表示輕微的驚訝：不是…嗎？',
            comparisons: ['私のペンじゃないか：不是我的筆嗎？', '元気じゃないか：你不是很精神嗎？'],
            commonMistakes: ['「じゃないか」口語確認 / 「ではないか」書面語確認'],
        },
    },
    // ━━━ かしら ━━━
    {
        id: 'g_n4_436', category: 'grammar', level: 'N4', tags: ['kashira', 'wonder'],
        stem: '明日{あした}の天気{てんき}は晴{は}れる___。',
        stemZh: '明天天氣會放晴嗎（不知道呢）。',
        options: [
            { text: 'かしら', reason: '正確！「かしら」表自言自語的疑問（主要女性用語）。' },
            { text: 'かな', reason: '「かな」也表自問，較中性。' },
            { text: 'だろう', reason: '「だろう」表推測。' },
            { text: 'でしょう', reason: '「でしょう」是「だろう」的丁寧形。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「かしら」表自問',
            analysis: '「かしら」用於自言自語式的疑問，傳統上主要是女性用語。',
            comparisons: ['晴れるかしら：會放晴嗎？（主要女性用）', '晴れるかな：會放晴嗎？（中性）'],
            commonMistakes: ['「かしら」主要女性用語 / 「かな」男女都用'],
        },
    },
    // ━━━ ので（原因） ━━━
    {
        id: 'g_n4_437', category: 'grammar', level: 'N4', tags: ['node', 'reason'],
        stem: '体{からだ}の調子{ちょうし}が悪{わる}い___、今日{きょう}は休{やす}みます。',
        stemZh: '因為身體不舒服，今天請假。',
        options: [
            { text: 'ので', reason: '正確！「ので」表客觀的原因理由。' },
            { text: 'から', reason: '「から」也表原因但較主觀，此處「ので」更客觀禮貌。' },
            { text: 'のに', reason: '「のに」表逆接。' },
            { text: 'けど', reason: '「けど」表逆接。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ので」表客觀原因',
            analysis: '「ので」表示客觀的原因理由，語氣較柔和禮貌。',
            comparisons: ['調子が悪いので休みます：身體不好所以請假（禮貌）', '調子が悪いから休みます：因為身體不好請假（直接）'],
            commonMistakes: ['「ので」較客觀禮貌 / 「から」較主觀直接'],
        },
    },
    // ━━━ から（原因） ━━━
    {
        id: 'g_n4_438', category: 'grammar', level: 'N4', tags: ['kara-reason', 'reason'],
        stem: '危{あぶ}ない___、気{き}をつけてね。',
        stemZh: '因為危險，要小心喔。',
        options: [
            { text: 'から', reason: '正確！「から」表主觀的原因。' },
            { text: 'ので', reason: '「ので」也可但「から」後接命令更自然。' },
            { text: 'けど', reason: '「けど」表逆接。' },
            { text: 'し', reason: '「し」表列舉理由。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「から」搭配命令或請求',
            analysis: '「から」表原因時，後面可接命令、請求、意志等主觀表達。「ので」較難搭配。',
            comparisons: ['危ないから気をつけて：因為危險所以要小心', '危ないので気をつけてください：因為危險請小心（較正式）'],
            commonMistakes: ['「から」後可接命令 / 「ので」後接命令較不自然'],
        },
    },
    // ━━━ 複合題：のは〜だ ━━━
    {
        id: 'g_n4_439', category: 'grammar', level: 'N4', tags: ['no-wa-da', 'emphasis', 'challenge'],
        stem: '私{わたし}が日本語{にほんご}を勉強{べんきょう}している___は、日本{にほん}で働{はたら}きたいからだ。',
        stemZh: '我學日語的原因是因為想在日本工作。',
        options: [
            { text: 'の', reason: '正確！「のは〜だ」是強調句型。' },
            { text: 'こと', reason: '「ことは」也可接「〜だ」但此處「のは」更自然。' },
            { text: 'わけ', reason: '「わけは」也可但語意偏向「原因是」。' },
            { text: 'ため', reason: '「ためは」不合文法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「のは〜からだ」強調原因',
            analysis: '「のは〜からだ」是強調原因的句型：做…的原因是因為…。',
            comparisons: ['勉強しているのは働きたいからだ：學的原因是想工作', '働きたいから勉強している：因為想工作所以在學（普通語序）'],
            commonMistakes: ['「のは〜からだ」將原因放在句末強調'],
        },
    },
    // ━━━ 頃（ころ／ごろ） ━━━
    {
        id: 'g_n4_440', category: 'grammar', level: 'N4', tags: ['koro', 'approximate-time'],
        stem: '子{こ}どもの___は毎日{まいにち}公園{こうえん}で遊{あそ}んでいた。',
        stemZh: '小時候每天在公園玩。',
        options: [
            { text: '頃{ころ}', reason: '正確！「頃」表大約的時期。' },
            { text: '時{とき}', reason: '「時」也可，但「頃」更表「那個時期」的懷念感。' },
            { text: '間{あいだ}', reason: '「間」表期間，語感不同。' },
            { text: '後{あと}', reason: '「後」表之後。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「頃」表大約的時期',
            analysis: '「頃」表某個大概的時期或時間，常用於回憶。',
            comparisons: ['子どもの頃：小時候', '三時ごろ：三點左右', '学生の頃：學生時期'],
            commonMistakes: ['「ころ」接在時期後 / 「ごろ」接在具體時間後'],
        },
    },
    // ━━━ 急に（きゅうに） ━━━
    {
        id: 'g_n4_441', category: 'grammar', level: 'N4', tags: ['kyuu-ni', 'sudden'],
        stem: '___雨{あめ}が降{ふ}り出{だ}した。',
        stemZh: '突然下起雨來了。',
        options: [
            { text: '急{きゅう}に', reason: '正確！「急に」表突然。' },
            { text: 'ゆっくり', reason: '「ゆっくり」表慢慢地，語意相反。' },
            { text: 'だんだん', reason: '「だんだん」表漸漸地。' },
            { text: 'そろそろ', reason: '「そろそろ」表差不多該…了。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「急に」表突然發生',
            analysis: '「急に」表示事情毫無預兆地突然發生。',
            comparisons: ['急に降り出した：突然下起來', '急に走り出した：突然跑起來'],
            commonMistakes: ['「急に」≈「突然」，但「急に」更口語'],
        },
    },
    // ━━━ 複合題：ないで ━━━
    {
        id: 'g_n4_442', category: 'grammar', level: 'N4', tags: ['naide', 'without', 'advanced'],
        stem: '朝{あさ}ごはんを食{た}べ___学校{がっこう}に来{き}た。',
        stemZh: '沒吃早餐就來學校了。',
        options: [
            { text: 'ないで', reason: '正確！「ないで」表不做某事地做另一事。' },
            { text: 'なくて', reason: '「なくて」表因為沒有…（原因），語意不同。' },
            { text: 'ずに', reason: '「ずに」也表不做…地，但較書面語。' },
            { text: 'なければ', reason: '「なければ」表如果不…，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ないで」表不做…就…',
            analysis: '「ないで」表示不做某事便做了另一件事，強調伴隨狀態。',
            comparisons: ['食べないで来た：沒吃就來了（伴隨狀態）', '食べなくて困った：因為沒吃所以困擾（原因）'],
            commonMistakes: ['「ないで」伴隨狀態 / 「なくて」原因'],
        },
    },
    // ━━━ 複合題：ても + conditional ━━━
    {
        id: 'g_n4_443', category: 'grammar', level: 'N4', tags: ['temo', 'conditional', 'challenge'],
        stem: 'いくらお金{かね}が___、幸{しあわ}せになれるとは限{かぎ}らない。',
        stemZh: '不管有多少錢，也未必能幸福。',
        options: [
            { text: 'あっても', reason: '正確！「ても」表讓步：即使有…也…。' },
            { text: 'あったら', reason: '「あったら」表條件：如果有的話。' },
            { text: 'あれば', reason: '「あれば」表條件：如果有的話。' },
            { text: 'あるから', reason: '「あるから」表原因：因為有。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「いくら〜ても」表無論多少',
            analysis: '「いくら〜ても」表示無論程度多高，結果都不變。',
            comparisons: ['いくらお金があっても：不管有多少錢', 'いくら勉強しても：不管怎麼學'],
            commonMistakes: ['「いくら〜ても」是常見讓步搭配，表無論如何'],
        },
    },
    // ━━━ て形（原因） ━━━
    {
        id: 'g_n4_444', category: 'grammar', level: 'N4', tags: ['te-form-reason', 'cause'],
        stem: '財布{さいふ}をなくし___、とても困{こま}った。',
        stemZh: '因為丟了錢包，非常困擾。',
        options: [
            { text: 'て', reason: '正確！て形可表原因：因為…所以…。' },
            { text: 'たら', reason: '「たら」表條件，語意不同。' },
            { text: 'ても', reason: '「ても」表讓步。' },
            { text: 'ば', reason: '「なくせば」語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: 'て形表原因',
            analysis: 'て形除了表順序，也可表示原因：因為做了…所以…。常搭配感情表達。',
            comparisons: ['なくして困った：因為丟了所以困擾', '遅れてすみません：因為遲到了抱歉'],
            commonMistakes: ['て形原因通常搭配感情或無法控制的結果'],
        },
    },
    // ━━━ たとしても ━━━
    {
        id: 'g_n4_445', category: 'grammar', level: 'N4', tags: ['temo', 'hypothetical', 'challenge'],
        stem: '失敗{しっぱい}した___、もう一度{いちど}やり直{なお}せばいい。',
        stemZh: '即使失敗了，再重做一次就好了。',
        options: [
            { text: 'としても', reason: '正確！「たとしても」表即使假設…也…。' },
            { text: 'のに', reason: '「のに」表逆接遺憾。' },
            { text: 'から', reason: '「から」表原因。' },
            { text: 'ので', reason: '「ので」表客觀原因。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「としても」表假設讓步',
            analysis: '「としても」表示即使假設某事成立，結果也不變。比「ても」更強調假設性。',
            comparisons: ['失敗したとしても大丈夫：即使失敗了也沒關係', '失敗しても大丈夫：即使失敗也沒關係'],
            commonMistakes: ['「としても」比「ても」更強調假設情境'],
        },
    },
    // ━━━ はず + 否定 ━━━
    {
        id: 'g_n4_446', category: 'grammar', level: 'N4', tags: ['hazu', 'negative-expectation', 'advanced'],
        stem: 'メールを送{おく}った___なのに、返事{へんじ}が来{こ}ない。',
        stemZh: '明明應該已經寄了郵件，卻沒有回信。',
        options: [
            { text: 'はず', reason: '正確！「はずなのに」表應該…卻…。' },
            { text: 'つもり', reason: '「つもりなのに」表打算做了卻…。' },
            { text: 'わけ', reason: '「わけなのに」不太自然。' },
            { text: 'ところ', reason: '「ところなのに」語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「はずなのに」表預期落空',
            analysis: '「はずなのに」表示根據判斷應該如此，但結果卻不是，帶不解或不滿。',
            comparisons: ['送ったはずなのに返事が来ない：應該寄了卻沒回信', '届いたはずなのに見てくれない：應該到了卻不看'],
            commonMistakes: ['「はず＋なのに」將推測和逆接結合，表不解'],
        },
    },
    // ━━━ つもりだった ━━━
    {
        id: 'g_n4_447', category: 'grammar', level: 'N4', tags: ['tsumori', 'past-intention', 'advanced'],
        stem: '五時{ごじ}に起{お}きる___だったが、寝坊{ねぼう}してしまった。',
        stemZh: '本來打算五點起床，但睡過頭了。',
        options: [
            { text: 'つもり', reason: '正確！「つもりだった」表過去的打算（未實現）。' },
            { text: 'はず', reason: '「はずだった」表應該…（推測落空）。' },
            { text: 'よう', reason: '「ようだった」表好像。' },
            { text: '予定{よてい}', reason: '「予定だった」也可但強調已安排。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「つもりだった」表未實現的打算',
            analysis: '「つもりだった」表示過去有某個打算但實際上沒有做到。',
            comparisons: ['起きるつもりだった：本來打算起床（但沒起）', '起きるつもりだ：打算起床（未來計劃）'],
            commonMistakes: ['「つもりだった」＝ 過去打算但未實現'],
        },
    },
    // ━━━ ように（目的） ━━━
    {
        id: 'g_n4_448', category: 'grammar', level: 'N4', tags: ['you-ni-goal', 'purpose', 'advanced'],
        stem: '忘{わす}れない___、メモを取{と}っておこう。',
        stemZh: '為了不忘記，先做個備忘錄吧。',
        options: [
            { text: 'ように', reason: '正確！「ない形＋ように」表為了不…。' },
            { text: 'ために', reason: '「ために」用於意志動詞，「忘れない」不用「ために」。' },
            { text: 'のに', reason: '「のに」表逆接。' },
            { text: 'ことに', reason: '「ことに」語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ように」表無意志動詞的目的',
            analysis: '「ように」用於無意志動詞或否定形表目的：為了能夠…、為了不…。',
            comparisons: ['忘れないように：為了不忘記', '聞こえるように大声で話す：為了聽得見大聲說'],
            commonMistakes: ['否定形（ない形）的目的用「ように」不用「ために」'],
        },
    },
    // ━━━ たらいい ━━━
    {
        id: 'g_n4_449', category: 'grammar', level: 'N4', tags: ['tara-ii', 'advice'],
        stem: 'どの本{ほん}を買{か}っ___いいですか。',
        stemZh: '買哪本書好呢？',
        options: [
            { text: 'たら', reason: '正確！「たらいい」表做…就好了，用於徵求建議。' },
            { text: 'ば', reason: '「買えばいい」也可但「たらいい」更口語。' },
            { text: 'ても', reason: '「買ってもいい」表可以買（許可），語意不同。' },
            { text: 'ので', reason: '「買ったのでいい」不合文法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たらいい」表建議或詢問',
            analysis: '「たらいい」用於給建議或徵求建議：做…就好了。疑問形式表「該怎麼做好呢」。',
            comparisons: ['買ったらいい：買就好了（建議）', 'どれを買ったらいい？：該買哪個好呢？'],
            commonMistakes: ['「たらいい」比「ばいい」更口語'],
        },
    },
    // ━━━ にみえる ━━━
    {
        id: 'g_n4_450', category: 'grammar', level: 'N4', tags: ['ni-mieru', 'appearance', 'advanced'],
        stem: 'あの人{ひと}は若{わか}く___。',
        stemZh: '那個人看起來很年輕。',
        options: [
            { text: '見{み}える', reason: '正確！「く見える」表看起來…（い形容詞）。' },
            { text: '見{み}せる', reason: '「見せる」表展示給別人看。' },
            { text: '見{み}る', reason: '「見る」表看。' },
            { text: '見{み}られる', reason: '「見られる」表能看或被看。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「に見える」表外觀印象',
            analysis: '「い形容詞く＋見える」或「な形容詞に＋見える」表示看起來…。',
            comparisons: ['若く見える：看起來年輕', '元気に見える：看起來精神', '学生に見える：看起來像學生'],
            commonMistakes: ['い形容詞：く見える / な形容詞・名詞：に見える'],
        },
    },
    // ━━━ だけ ━━━
    {
        id: 'g_n4_451', category: 'grammar', level: 'N4', tags: ['dake', 'limitation'],
        stem: '食{た}べたい___食{た}べてください。',
        stemZh: '想吃多少就吃多少。',
        options: [
            { text: 'だけ', reason: '正確！「たい＋だけ」表想要多少就多少。' },
            { text: 'ほど', reason: '「ほど」表程度，不合此結構。' },
            { text: 'しか', reason: '「しか」需搭配否定。' },
            { text: 'ばかり', reason: '「ばかり」表光是。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たいだけ」表盡情地',
            analysis: '「動詞たい形＋だけ＋同一動詞」表示想做多少就做多少，盡情地做。',
            comparisons: ['食べたいだけ食べる：想吃多少就吃多少', '寝たいだけ寝る：想睡多久就睡多久'],
            commonMistakes: ['「たいだけ」表不受限制，盡情做'],
        },
    },
    // ━━━ でも（助詞：無論） ━━━
    {
        id: 'g_n4_452', category: 'grammar', level: 'N4', tags: ['demo-particle', 'any'],
        stem: '何{なに}___いいから、食{た}べてください。',
        stemZh: '什麼都好，請吃吧。',
        options: [
            { text: 'でも', reason: '正確！「疑問詞＋でも」表無論什麼都…。' },
            { text: 'も', reason: '「何も」搭配否定表什麼也不。' },
            { text: 'か', reason: '「何か」表某個東西。' },
            { text: 'が', reason: '「何が」表什麼（主格）。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「疑問詞＋でも」表任何',
            analysis: '「疑問詞＋でも」表示無論哪個都可以：何でも（什麼都）、誰でも（誰都）、いつでも（隨時）。',
            comparisons: ['何でもいい：什麼都好', '誰でも参加できる：誰都能參加', 'いつでも来てください：隨時來'],
            commonMistakes: ['何でも（什麼都）/ 何も＋否定（什麼也不）/ 何か（某個東西）'],
        },
    },
    // ━━━ ではないか（確認） ━━━
    {
        id: 'g_n4_453', category: 'grammar', level: 'N4', tags: ['dewa-nai-ka', 'confirmation', 'advanced'],
        stem: '久{ひさ}しぶりだね。田中{たなか}さん___。',
        stemZh: '好久不見。這不是田中嗎？',
        options: [
            { text: 'ではないか', reason: '正確！「ではないか」表驚訝的確認。' },
            { text: 'ですか', reason: '「ですか」是一般疑問。' },
            { text: 'らしい', reason: '「らしい」表推測。' },
            { text: 'そうだ', reason: '「そうだ」表傳聞或外觀。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ではないか」表驚訝確認',
            analysis: '「ではないか」用於意外遇到或發現某事時的驚訝確認：這不是…嗎！',
            comparisons: ['田中さんではないか：不是田中嗎！', '田中さんですか：是田中嗎？（普通提問）'],
            commonMistakes: ['「ではないか」帶驚訝語氣 / 口語用「じゃないか」'],
        },
    },
    // ━━━ として ━━━
    {
        id: 'g_n4_454', category: 'grammar', level: 'N4', tags: ['toshite', 'role'],
        stem: '彼{かれ}はリーダー___みんなをまとめている。',
        stemZh: '他作為領導者把大家團結在一起。',
        options: [
            { text: 'として', reason: '正確！「として」表以…的身分、角色。' },
            { text: 'にとって', reason: '「にとって」表對…而言。' },
            { text: 'について', reason: '「について」表關於。' },
            { text: 'のように', reason: '「のように」表像…一樣。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「として」表身分角色',
            analysis: '「として」表示以某種身分或立場做某事。',
            comparisons: ['リーダーとして：作為領導者', '留学生として日本に来た：以留學生身分來日本'],
            commonMistakes: ['「として」表身分 / 「にとって」表觀點'],
        },
    },
    // ━━━ もし ━━━
    {
        id: 'g_n4_455', category: 'grammar', level: 'N4', tags: ['moshi', 'hypothetical'],
        stem: '___時間{じかん}があったら、一緒{いっしょ}に映画{えいが}を見{み}ませんか。',
        stemZh: '如果有時間的話，要不要一起看電影？',
        options: [
            { text: 'もし', reason: '正確！「もし」強調後面是假設。' },
            { text: 'きっと', reason: '「きっと」表一定。' },
            { text: 'たしか', reason: '「たしか」表如果沒記錯。' },
            { text: 'まさか', reason: '「まさか」表難以置信。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「もし」引導假設條件',
            analysis: '「もし」放在條件句前面，強調後面是假設情境。常搭配「たら」「ば」「なら」。',
            comparisons: ['もし時間があったら：如果有時間的話', 'もし暇なら：如果有空的話'],
            commonMistakes: ['「もし」不是必須的，但加上去更明確表示假設'],
        },
    },
    // ━━━ もう ━━━
    {
        id: 'g_n4_456', category: 'grammar', level: 'N4', tags: ['mou', 'already'],
        stem: 'この本{ほん}は___読{よ}みましたか。',
        stemZh: '這本書已經讀了嗎？',
        options: [
            { text: 'もう', reason: '正確！「もう」表已經。' },
            { text: 'まだ', reason: '「まだ」表還沒。' },
            { text: 'やっと', reason: '「やっと」表終於。' },
            { text: 'ずっと', reason: '「ずっと」表一直。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「もう」表已完成',
            analysis: '「もう」表示某事已經完成或已經變成某狀態。',
            comparisons: ['もう読みました：已經讀了', 'まだ読んでいません：還沒讀'],
            commonMistakes: ['「もう」已經 / 「まだ」還沒 → 常成對出現'],
        },
    },
    // ━━━ まだ ━━━
    {
        id: 'g_n4_457', category: 'grammar', level: 'N4', tags: ['mada', 'not-yet'],
        stem: 'レポートは___書{か}き終{お}わっていない。',
        stemZh: '報告還沒寫完。',
        options: [
            { text: 'まだ', reason: '正確！「まだ〜ていない」表還沒…。' },
            { text: 'もう', reason: '「もう」表已經。' },
            { text: 'ぜんぜん', reason: '「ぜんぜん」表完全不。' },
            { text: 'ほとんど', reason: '「ほとんど」表幾乎。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「まだ〜ていない」表未完成',
            analysis: '「まだ」搭配否定表示某事至今尚未完成或實現。',
            comparisons: ['まだ書き終わっていない：還沒寫完', 'もう書き終わった：已經寫完了'],
            commonMistakes: ['「まだ＋ている」表仍然 / 「まだ＋ていない」表還沒'],
        },
    },
    // ━━━ 複合題：たらよかった ━━━
    {
        id: 'g_n4_458', category: 'grammar', level: 'N4', tags: ['tara', 'regret', 'challenge'],
        stem: 'もっと勉強{べんきょう}し___よかった。',
        stemZh: '要是更用功讀書就好了。',
        options: [
            { text: 'たら', reason: '正確！「たらよかった」表對過去的後悔。' },
            { text: 'ば', reason: '「すればよかった」也可表後悔。' },
            { text: 'ても', reason: '「してもよかった」表做了也可以，語意不同。' },
            { text: 'から', reason: '「したからよかった」表因為做了所以好，語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たらよかった」表後悔',
            analysis: '「たらよかった」表示如果當時那樣做就好了，用於表達後悔。',
            comparisons: ['勉強したらよかった：要是學了就好了', '勉強すればよかった：要是學了就好了（同義）'],
            commonMistakes: ['「たらよかった」≈「ばよかった」都表後悔'],
        },
    },
    // ━━━ 複合題：てくれてありがとう ━━━
    {
        id: 'g_n4_459', category: 'grammar', level: 'N4', tags: ['te-kureru', 'gratitude', 'challenge'],
        stem: '手伝{てつだ}って___ありがとう。',
        stemZh: '謝謝你幫忙。',
        options: [
            { text: 'くれて', reason: '正確！「てくれてありがとう」表感謝別人為我做。' },
            { text: 'もらって', reason: '「てもらってありがとう」不太自然。' },
            { text: 'あげて', reason: '「てあげてありがとう」不合文法。' },
            { text: 'おいて', reason: '「ておいてありがとう」不太自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てくれてありがとう」表感謝',
            analysis: '「てくれてありがとう」是感謝別人為自己做某事的常用表達。',
            comparisons: ['手伝ってくれてありがとう：謝謝你幫忙', '来てくれてありがとう：謝謝你來'],
            commonMistakes: ['感謝表達固定用「てくれて」不用「てもらって」'],
        },
    },
    // ━━━ 終わる ━━━
    {
        id: 'g_n4_460', category: 'grammar', level: 'N4', tags: ['owaru', 'completion'],
        stem: '宿題{しゅくだい}をやり___ら、遊{あそ}びに行{い}こう。',
        stemZh: '做完作業就去玩吧。',
        options: [
            { text: '終{お}わった', reason: '正確！「やり終わる」表做完。' },
            { text: '始{はじ}めた', reason: '「やり始める」表開始做。' },
            { text: '出{だ}した', reason: '「やり出す」表突然開始做。' },
            { text: '続{つづ}けた', reason: '「やり続ける」表繼續做。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「終わる」表動作完成',
            analysis: '「ます形去ます＋終わる」表示某動作做完、完成。',
            comparisons: ['やり終わったら：做完了的話', '食べ終わったら：吃完了的話'],
            commonMistakes: ['○ やり終わる / × やる終わる → 要用ます形去ます'],
        },
    },
    // ━━━ 複合題：なくてもいい ━━━
    {
        id: 'g_n4_461', category: 'grammar', level: 'N4', tags: ['nakutemo-ii', 'permission', 'advanced'],
        stem: '明日{あした}は日曜日{にちようび}だから、早{はや}く起{お}き___もいい。',
        stemZh: '明天是星期天，不早起也可以。',
        options: [
            { text: 'なくて', reason: '正確！「なくてもいい」表不做也可以。' },
            { text: 'なければ', reason: '「なければ」接「ならない」表必須。' },
            { text: 'ないで', reason: '「ないでもいい」不太自然。' },
            { text: 'なくは', reason: '「なくはない」表並非不…。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なくてもいい」表不必',
            analysis: '「なくてもいい」表示不做某事也沒關係、不需要做。',
            comparisons: ['起きなくてもいい：不起也行', '起きなければならない：必須起'],
            commonMistakes: ['「なくてもいい」（不必）↔ 「なければならない」（必須）'],
        },
    },
    // ━━━ 複合題：ていただく ━━━
    {
        id: 'g_n4_462', category: 'grammar', level: 'N4', tags: ['te-morau', 'keigo', 'humble', 'advanced'],
        stem: '先生{せんせい}に推薦状{すいせんじょう}を書{か}いて___。',
        stemZh: '請老師寫了推薦信。',
        options: [
            { text: 'いただいた', reason: '正確！「ていただく」是「てもらう」的謙讓語。' },
            { text: 'くださった', reason: '「てくださった」是「てくれる」的尊敬語，也可但主語用法不同。' },
            { text: 'もらった', reason: '「てもらった」正確但不夠鄭重。' },
            { text: 'さしあげた', reason: '「てさしあげた」表為別人做（謙讓語）。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ていただく」是「てもらう」的謙讓語',
            analysis: '「ていただく」用於向長輩或尊敬的人表達獲得幫助，是最鄭重的請求結果表達。',
            comparisons: ['書いていただいた（謙讓）：請（老師）寫了', '書いてもらった（一般）：請（人）寫了'],
            commonMistakes: ['「ていただく」謙讓語 / 「てくださる」尊敬語'],
        },
    },
    // ━━━ こと（名詞化） ━━━
    {
        id: 'g_n4_463', category: 'grammar', level: 'N4', tags: ['koto', 'nominalization'],
        stem: '外国語{がいこくご}を学{まな}ぶ___は楽{たの}しい。',
        stemZh: '學外語是一件快樂的事。',
        options: [
            { text: 'こと', reason: '正確！「辞書形＋こと」將動詞名詞化。' },
            { text: 'の', reason: '「の」也可名詞化，但此處「こと」更自然。' },
            { text: 'もの', reason: '「もの」表具體物品。' },
            { text: 'ところ', reason: '「ところ」表場所或時間相位。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「こと」名詞化',
            analysis: '「動詞辞書形＋こと」將動詞轉為名詞，用於主語或受詞。',
            comparisons: ['学ぶことは楽しい：學習是快樂的', '泳ぐことが好きだ：喜歡游泳'],
            commonMistakes: ['「こと」較抽象概念 / 「の」較具體感受場面'],
        },
    },
    // ━━━ 複合題：てはいけない＋ことになっている ━━━
    {
        id: 'g_n4_464', category: 'grammar', level: 'N4', tags: ['tewa-ikenai', 'koto-ni-naru', 'challenge'],
        stem: '図書館{としょかん}では大{おお}きな声{こえ}を出{だ}して______になっている。',
        stemZh: '圖書館規定不能大聲說話。',
        options: [
            { text: 'はいけないこと', reason: '正確！「てはいけないことになっている」表規定禁止。' },
            { text: 'もいいこと', reason: '「てもいいことになっている」表規定可以，語意相反。' },
            { text: 'はいけないわけ', reason: '「わけになっている」不太自然。' },
            { text: 'もいいわけ', reason: '「わけになっている」不太自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てはいけないことになっている」表禁止規定',
            analysis: '「てはいけない」（禁止）＋「ことになっている」（規定）結合表示規定不能做某事。',
            comparisons: ['出してはいけないことになっている：規定不能出大聲', '使ってもいいことになっている：規定可以用'],
            commonMistakes: ['此為複合句型，理解「てはいけない」和「ことになっている」的個別含義即可'],
        },
    },
    // ━━━ 複合題：ているうちに ━━━
    {
        id: 'g_n4_465', category: 'grammar', level: 'N4', tags: ['te-iru', 'uchi-ni', 'challenge'],
        stem: '本{ほん}を読{よ}んでいる___に、いつの間{ま}にか寝{ね}てしまった。',
        stemZh: '看書看著看著，不知不覺就睡著了。',
        options: [
            { text: 'うち', reason: '正確！「ているうちに」表在持續做某事的過程中。' },
            { text: '間{あいだ}', reason: '「間に」也可但「うちに」更強調不知不覺。' },
            { text: 'ところ', reason: '「ところに」強調恰好此刻。' },
            { text: 'まま', reason: '「まま」表保持狀態。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ているうちに」表不知不覺',
            analysis: '「ているうちに」表示在做某事的過程中，不知不覺發生了變化。',
            comparisons: ['読んでいるうちに寝てしまった：看著看著就睡了', '話しているうちに仲良くなった：聊著聊著就熟了'],
            commonMistakes: ['「ているうちに」常搭配「いつの間にか」表不知不覺'],
        },
    },
    // ━━━ くらい・ぐらい ━━━
    {
        id: 'g_n4_466', category: 'grammar', level: 'N4', tags: ['kurai-gurai', 'approximation'],
        stem: '駅{えき}から十{じゅっ}分{ぷん}___歩{ある}きます。',
        stemZh: '從車站走大約十分鐘。',
        options: [
            { text: 'ぐらい', reason: '正確！「ぐらい」表大約、左右。' },
            { text: 'ごろ', reason: '「ごろ」接在時刻後面，不接在時間量後面。' },
            { text: 'まで', reason: '「まで」表到…為止。' },
            { text: 'ほど', reason: '「ほど」也可表大約，但「ぐらい」更口語。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ぐらい」表大約',
            analysis: '「數量＋ぐらい/くらい」表大約某個數量。',
            comparisons: ['十分ぐらい：大約十分鐘', '三時ごろ：三點左右（時刻）'],
            commonMistakes: ['時間量用「ぐらい」/ 時刻用「ごろ」'],
        },
    },
    // ━━━ 前に（まえに） ━━━
    {
        id: 'g_n4_467', category: 'grammar', level: 'N4', tags: ['mae-ni', 'before'],
        stem: '寝{ね}る___に、歯{は}を磨{みが}きます。',
        stemZh: '睡覺前刷牙。',
        options: [
            { text: '前{まえ}', reason: '正確！「辞書形＋前に」表做某事之前。' },
            { text: '後{あと}', reason: '「後に」表之後。' },
            { text: '間{あいだ}', reason: '「間に」表期間。' },
            { text: 'うち', reason: '「うちに」表趁…之際。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「前に」表時間先後',
            analysis: '「辞書形＋前に」表示在做某事之前做另一件事。注意：前面用辞書形，不用た形。',
            comparisons: ['寝る前に歯を磨く：睡前刷牙', '食べる前に手を洗う：吃飯前洗手'],
            commonMistakes: ['○ 寝る前に / × 寝た前に → 「前に」前用辞書形'],
        },
    },
    // ━━━ と思う ━━━
    {
        id: 'g_n4_468', category: 'grammar', level: 'N4', tags: ['to-omou', 'opinion'],
        stem: '日本{にほん}の食{た}べ物{もの}はおいしい___思{おも}います。',
        stemZh: '我覺得日本的食物很好吃。',
        options: [
            { text: 'と', reason: '正確！「と思う」表自己的意見或想法。' },
            { text: 'って', reason: '「って」是口語引用，也可但「と」較正式。' },
            { text: 'に', reason: '「に思う」不合文法。' },
            { text: 'で', reason: '「で思う」不合文法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「と思う」表個人意見',
            analysis: '「普通形＋と思う」表示自己認為…、覺得…。',
            comparisons: ['おいしいと思う：我覺得好吃', 'おいしいと思います：我覺得好吃（丁寧）'],
            commonMistakes: ['第一人稱用「と思う」/ 第三人稱用「と思っている」'],
        },
    },
    // ━━━ 複合題：ばよかった ━━━
    {
        id: 'g_n4_469', category: 'grammar', level: 'N4', tags: ['ba-ii', 'regret', 'challenge'],
        stem: '傘{かさ}を持{も}って___よかった。',
        stemZh: '要是帶傘就好了。',
        options: [
            { text: 'くれば', reason: '正確！「ば形＋よかった」表對過去的後悔。' },
            { text: 'きたら', reason: '「きたらよかった」也表後悔。' },
            { text: 'きても', reason: '「きてもよかった」表即使帶了也行。' },
            { text: 'くると', reason: '「くるとよかった」不太自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ばよかった」表後悔',
            analysis: '「ば形＋よかった」表示如果當時做了就好了，表達後悔。',
            comparisons: ['持ってくればよかった：要是帶來就好了', '持ってきたらよかった：要是帶來就好了（同義）'],
            commonMistakes: ['「ばよかった」和「たらよかった」都表後悔，可互換'],
        },
    },
    // ━━━ 複合題：させてください ━━━
    {
        id: 'g_n4_470', category: 'grammar', level: 'N4', tags: ['saseru', 'request', 'challenge'],
        stem: 'この仕事{しごと}は私{わたし}に___ください。',
        stemZh: '這份工作請讓我做。',
        options: [
            { text: 'やらせて', reason: '正確！「させてください」表請讓我做。' },
            { text: 'やって', reason: '「やってください」表請你做，語意不同。' },
            { text: 'やられて', reason: '「やられてください」不合文法。' },
            { text: 'やれて', reason: '「やれてください」不合文法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「させてください」表請求許可',
            analysis: '「使役形＋てください」表示請讓我做某事，請求對方給予許可。',
            comparisons: ['やらせてください：請讓我做', 'やってください：請你做'],
            commonMistakes: ['「させてください」主語是「我」/ 「てください」主語是「你」'],
        },
    },
    // ━━━ 複合題：ながらも ━━━
    {
        id: 'g_n4_471', category: 'grammar', level: 'N4', tags: ['nagara', 'contrast', 'challenge'],
        stem: '彼{かれ}は知{し}ってい___、何{なに}も言{い}わなかった。',
        stemZh: '他雖然知道，卻什麼也沒說。',
        options: [
            { text: 'ながら', reason: '正確！「ながら（も）」表雖然…卻…（逆接）。' },
            { text: 'ても', reason: '「ても」也表讓步，但接續不同。' },
            { text: 'のに', reason: '「のに」也表逆接，但接續不同。' },
            { text: 'けど', reason: '「けど」表但是，接續不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ながら（も）」的逆接用法',
            analysis: '「ながら」除了表同時做兩事外，還可表逆接：雖然…卻…。此用法較書面。',
            comparisons: ['知っていながら言わなかった：雖然知道卻沒說', '残念ながら参加できません：遺憾的是無法參加'],
            commonMistakes: ['「ながら」① 同時做（一邊…一邊…）② 逆接（雖然…卻…）'],
        },
    },
    // ━━━ ても + 疑問詞 ━━━
    {
        id: 'g_n4_472', category: 'grammar', level: 'N4', tags: ['temo', 'interrogative', 'advanced'],
        stem: '何{なに}を食{た}べ___おいしいと思{おも}わない。',
        stemZh: '吃什麼都覺得不好吃。',
        options: [
            { text: 'ても', reason: '正確！「疑問詞＋ても」表無論…都…。' },
            { text: 'たら', reason: '「食べたら」表條件。' },
            { text: 'ば', reason: '「食べれば」表條件。' },
            { text: 'と', reason: '「食べると」表必然結果。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「疑問詞＋ても」表無論',
            analysis: '「疑問詞＋ても」表示無論什麼／誰／哪裡…都不改變結果。',
            comparisons: ['何を食べてもおいしくない：吃什麼都不好吃', '誰に聞いても知らない：問誰都不知道'],
            commonMistakes: ['疑問詞＋ても表全面讓步：何を〜ても、誰が〜ても、どこへ〜ても'],
        },
    },
    // ━━━ など（列舉） ━━━
    {
        id: 'g_n4_473', category: 'grammar', level: 'N4', tags: ['nado', 'example'],
        stem: '東京{とうきょう}や大阪{おおさか}___の大{おお}きい都市{とし}に住{す}みたい。',
        stemZh: '想住在東京或大阪等大城市。',
        options: [
            { text: 'など', reason: '正確！「など」表…等等、之類的。' },
            { text: 'とか', reason: '「とか」也可但較口語。' },
            { text: 'でも', reason: '「でも」表即使，語意不同。' },
            { text: 'だけ', reason: '「だけ」表只有。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「など」表列舉例子',
            analysis: '「名詞＋など」表示列舉幾個例子，暗示還有其他。',
            comparisons: ['東京や大阪などの都市：東京和大阪等城市', '本やノートなどを買った：買了書和筆記本之類的'],
            commonMistakes: ['「など」較正式 / 「とか」較口語'],
        },
    },
    // ━━━ 時（とき） ━━━
    {
        id: 'g_n4_474', category: 'grammar', level: 'N4', tags: ['toki', 'time', 'advanced'],
        stem: '日本{にほん}に行{い}った___、お土産{みやげ}をたくさん買{か}った。',
        stemZh: '去日本的時候，買了很多伴手禮。',
        options: [
            { text: '時{とき}', reason: '正確！「た形＋時」表做完某事的時候。' },
            { text: '間{あいだ}', reason: '「間」表期間。' },
            { text: '前{まえ}', reason: '「前」表之前。' },
            { text: '後{あと}', reason: '「後」表之後。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「た形＋時」vs「辞書形＋時」',
            analysis: '「た形＋時」表動作已完成後的時候；「辞書形＋時」表動作之前或同時的時候。',
            comparisons: ['行った時買った：去了（到達後）買的', '行く時買う：去的時候（途中）買'],
            commonMistakes: ['「た形＋時」已完成 / 「辞書形＋時」尚未完成或同時'],
        },
    },
    // ━━━ とき（辞書形） ━━━
    {
        id: 'g_n4_475', category: 'grammar', level: 'N4', tags: ['toki', 'time'],
        stem: '日本{にほん}に行{い}く___、パスポートが必要{ひつよう}だ。',
        stemZh: '去日本的時候需要護照。',
        options: [
            { text: '時{とき}', reason: '正確！「辞書形＋時」表做某事之際需要的準備。' },
            { text: '前{まえ}', reason: '「前に」也可但「時」更自然。' },
            { text: 'ため', reason: '「ために」表目的。' },
            { text: '間{あいだ}', reason: '「間」表期間。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「辞書形＋時」表去之前',
            analysis: '「辞書形＋時」表動作尚未完成時的狀態，此處指出發前需要護照。',
            comparisons: ['行く時パスポートが要る：去的時候（出發前）要護照', '行った時パスポートを見せた：去了的時候出示了護照'],
            commonMistakes: ['辞書形＝去之前 / た形＝到了之後'],
        },
    },
    // ━━━ 複合題：てほしくない ━━━
    {
        id: 'g_n4_476', category: 'grammar', level: 'N4', tags: ['te-hoshii', 'negative', 'advanced'],
        stem: 'あの人{ひと}にはパーティーに来{き}て___。',
        stemZh: '不希望那個人來派對。',
        options: [
            { text: 'ほしくない', reason: '正確！「てほしくない」表不希望他做。' },
            { text: 'ほしい', reason: '「てほしい」表希望他做，語意相反。' },
            { text: 'もらいたくない', reason: '「てもらいたくない」也可但較不直接。' },
            { text: 'くれない', reason: '「てくれない」表他不為我做。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てほしくない」表不希望',
            analysis: '「てほしくない」是「てほしい」的否定形，表示不希望對方做某事。',
            comparisons: ['来てほしくない：不希望他來', '来ないでほしい：希望他不要來'],
            commonMistakes: ['「てほしくない」和「ないでほしい」語意相近但語氣不同'],
        },
    },
    // ━━━ 複合題：たことがある ━━━
    {
        id: 'g_n4_477', category: 'grammar', level: 'N4', tags: ['koto-ga-aru', 'experience'],
        stem: '北海道{ほっかいどう}に行{い}った___がありますか。',
        stemZh: '去過北海道嗎？',
        options: [
            { text: 'こと', reason: '正確！「た形＋ことがある」表有過…的經驗。' },
            { text: 'わけ', reason: '「わけがある」不自然。' },
            { text: 'はず', reason: '「はずがある」不合文法。' },
            { text: 'もの', reason: '「ものがある」表有某種感受。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たことがある」表經驗',
            analysis: '「た形＋ことがある」表示曾經有過某經驗。否定為「たことがない」。',
            comparisons: ['行ったことがある：去過', '行ったことがない：沒去過'],
            commonMistakes: ['「た形＋ことがある」（經驗）/ 「辞書形＋ことがある」（有時候）'],
        },
    },
    // ━━━ 複合題：ばいいのに ━━━
    {
        id: 'g_n4_478', category: 'grammar', level: 'N4', tags: ['ba-ii', 'noni', 'challenge'],
        stem: '素直{すなお}に謝{あやま}れ___いいのに。',
        stemZh: '如果坦率道歉就好了（但他不道歉）。',
        options: [
            { text: 'ば', reason: '正確！「ばいいのに」表惋惜：如果…就好了。' },
            { text: 'たら', reason: '「たらいいのに」也可但此處空格接「ばいい」。' },
            { text: 'ても', reason: '「てもいいのに」表即使做了也行，語意不同。' },
            { text: 'と', reason: '「といいのに」也可。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ばいいのに」表惋惜',
            analysis: '「ばいいのに」表如果做了就好了，但對方沒做，帶遺憾和惋惜。',
            comparisons: ['謝ればいいのに：道歉就好了（但不道歉）', '来ればいいのに：來就好了（但不來）'],
            commonMistakes: ['「ばいいのに」對別人的行為感到惋惜'],
        },
    },
    // ━━━ 複合題：てからでないと ━━━
    {
        id: 'g_n4_479', category: 'grammar', level: 'N4', tags: ['te-kara', 'condition', 'challenge'],
        stem: '予約{よやく}して___でないと、この店{みせ}には入{はい}れない。',
        stemZh: '不先預約的話進不了這家店。',
        options: [
            { text: 'から', reason: '正確！「てからでないと」表不先做…就不能…。' },
            { text: 'しまって', reason: '「てしまってでないと」不太自然。' },
            { text: 'おいて', reason: '「ておいてでないと」不太自然。' },
            { text: 'みて', reason: '「てみてでないと」不太自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てからでないと〜ない」表前提條件',
            analysis: '「てからでないと〜ない」表示不先做某事就無法做另一件事。',
            comparisons: ['予約してからでないと入れない：不預約就進不了', '食べてからでないと出かけない：不吃了就不出門'],
            commonMistakes: ['「てからでないと」＝ 不先…就不能…'],
        },
    },
    // ━━━ 複合題：のに（用途） ━━━
    {
        id: 'g_n4_480', category: 'grammar', level: 'N4', tags: ['noni', 'purpose', 'advanced'],
        stem: 'この道具{どうぐ}は料理{りょうり}を作{つく}る___便利{べんり}だ。',
        stemZh: '這個工具做料理時很方便。',
        options: [
            { text: 'のに', reason: '正確！「のに」表用途：做…的時候方便。' },
            { text: 'ために', reason: '「ために」表目的，但此處是用途評價。' },
            { text: 'には', reason: '「には」也可表用途，但「のに」更自然。' },
            { text: 'ことに', reason: '「ことに」不合此處。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「のに」表用途',
            analysis: '「辞書形＋のに」接「便利だ」「いい」等評價詞，表示做某事時很方便或有用。',
            comparisons: ['料理を作るのに便利だ：做菜時很方便', '日本語を勉強するのにいい本だ：學日語用的好書'],
            commonMistakes: ['「のに」用途評價 ≠ 「のに」逆接'],
        },
    },
    // ━━━ 複合題：ているところだ ━━━
    {
        id: 'g_n4_481', category: 'grammar', level: 'N4', tags: ['tokoro', 'progressive', 'advanced'],
        stem: 'A：「もう宿題{しゅくだい}終{お}わった？」B：「今{いま}やっている___。」',
        stemZh: 'A：「作業做完了嗎？」B：「現在正在做。」',
        options: [
            { text: 'ところだ', reason: '正確！「ているところだ」表正在做。' },
            { text: 'ばかりだ', reason: '「ばかりだ」表剛做完。' },
            { text: 'はずだ', reason: '「はずだ」表推測。' },
            { text: 'つもりだ', reason: '「つもりだ」表打算。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ているところだ」表當下正在做',
            analysis: '「ているところだ」強調此刻正在做某事。',
            comparisons: ['やっているところだ：正在做', 'やるところだ：正要做', 'やったところだ：剛做完'],
            commonMistakes: ['辞書形＋ところ（正要）/ ている＋ところ（正在）/ た形＋ところ（剛完）'],
        },
    },
    // ━━━ 複合題：させてもらえませんか ━━━
    {
        id: 'g_n4_482', category: 'grammar', level: 'N4', tags: ['saseru', 'te-morau', 'keigo', 'challenge'],
        stem: '少{すこ}し考{かんが}え___もらえませんか。',
        stemZh: '能讓我想一下嗎？',
        options: [
            { text: 'させて', reason: '正確！「させてもらえませんか」是禮貌地請求許可。' },
            { text: 'て', reason: '「考えてもらえませんか」表請你想想，主語不同。' },
            { text: 'られて', reason: '「考えられてもらう」不合文法。' },
            { text: 'ないで', reason: '「考えないでもらう」表請你不要想。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「させてもらえませんか」禮貌許可請求',
            analysis: '「させてもらえませんか」是使役＋授受＋否定疑問的組合，表非常禮貌地請求許可。',
            comparisons: ['考えさせてもらえませんか：能讓我想想嗎（最禮貌）', '考えさせてください：請讓我想想', '考えさせてもらってもいいですか：可以讓我想想嗎'],
            commonMistakes: ['「させてもらえませんか」是商務場合常用的禮貌表達'],
        },
    },
    // ━━━ 複合題：ないことには ━━━
    {
        id: 'g_n4_483', category: 'grammar', level: 'N4', tags: ['nai-koto-ni-wa', 'condition', 'challenge'],
        stem: '実際{じっさい}にやってみ___ことには、分{わ}からない。',
        stemZh: '不實際試試看的話，不會知道。',
        options: [
            { text: 'ない', reason: '正確！「ないことには〜ない」表不做就不能。' },
            { text: 'る', reason: '「ることには」不合此句型。' },
            { text: 'た', reason: '「たことには」語意不同。' },
            { text: 'ている', reason: '「ていることには」語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ないことには〜ない」表不做就不行',
            analysis: '「ない形＋ことには〜ない」表示不做前面的事就無法達成後面的結果。',
            comparisons: ['やってみないことには分からない：不試就不知道', '食べてみないことには味が分からない：不吃就不知道味道'],
            commonMistakes: ['前後都用否定形：「ないことには〜ない」'],
        },
    },
    // ━━━ 複合題：としたら ━━━
    {
        id: 'g_n4_484', category: 'grammar', level: 'N4', tags: ['to-shitara', 'hypothetical', 'challenge'],
        stem: '百万{ひゃくまん}円{えん}あった___、何{なに}に使{つか}いますか。',
        stemZh: '如果有一百萬日圓的話，你會花在什麼上？',
        options: [
            { text: 'としたら', reason: '正確！「としたら」表假設：如果假設…的話。' },
            { text: 'とすると', reason: '「とすると」也可表假設，但「としたら」更口語。' },
            { text: 'といえば', reason: '「といえば」表說到…。' },
            { text: 'としても', reason: '「としても」表即使假設…也。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「としたら」表假設性問題',
            analysis: '「としたら」用於提出假設性的情境，詢問對方在那種情況下會怎樣。',
            comparisons: ['あったとしたら何に使う？：如果有的話用在哪？', 'あったとしても使わない：即使有也不用'],
            commonMistakes: ['「としたら」問假設 / 「としても」讓步假設'],
        },
    },
    // ━━━ けれど／けど ━━━
    {
        id: 'g_n4_485', category: 'grammar', level: 'N4', tags: ['keredo', 'contrast'],
        stem: '高{たか}い___、品質{ひんしつ}がいいです。',
        stemZh: '雖然貴，但品質好。',
        options: [
            { text: 'けど', reason: '正確！「けど」表逆接：雖然…但是…。' },
            { text: 'から', reason: '「から」表原因。' },
            { text: 'ので', reason: '「ので」表原因。' },
            { text: 'し', reason: '「し」表列舉理由。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「けど」表逆接',
            analysis: '「けど」（口語）/「けれども」（書面）表示前後矛盾的逆接關係。',
            comparisons: ['高いけど品質がいい：雖然貴但品質好', '高いのに品質が悪い：明明貴品質卻差（不滿語氣）'],
            commonMistakes: ['「けど」中性逆接 / 「のに」帶不滿逆接'],
        },
    },
    // ━━━ それに ━━━
    {
        id: 'g_n4_486', category: 'grammar', level: 'N4', tags: ['sore-ni', 'addition'],
        stem: 'この部屋{へや}は広{ひろ}い。___、家賃{やちん}も安{やす}い。',
        stemZh: '這個房間很寬敞。而且，房租也便宜。',
        options: [
            { text: 'それに', reason: '正確！「それに」表追加：而且、再說。' },
            { text: 'しかし', reason: '「しかし」表但是。' },
            { text: 'それで', reason: '「それで」表所以。' },
            { text: 'ところが', reason: '「ところが」表然而。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「それに」表追加資訊',
            analysis: '「それに」用於追加同方向的資訊：而且、再說。',
            comparisons: ['広い。それに安い：寬敞，而且便宜', '広い。しかし高い：寬敞，但是貴'],
            commonMistakes: ['「それに」追加同方向 / 「しかし」逆接相反方向'],
        },
    },
    // ━━━ それで ━━━
    {
        id: 'g_n4_487', category: 'grammar', level: 'N4', tags: ['sorede', 'consequence'],
        stem: '電車{でんしゃ}が遅{おく}れた。___、会議{かいぎ}に遅刻{ちこく}した。',
        stemZh: '電車誤點了。所以會議遲到了。',
        options: [
            { text: 'それで', reason: '正確！「それで」表因此、所以。' },
            { text: 'しかし', reason: '「しかし」表但是。' },
            { text: 'それに', reason: '「それに」表而且。' },
            { text: 'ところが', reason: '「ところが」表然而。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「それで」表因果結果',
            analysis: '「それで」連接原因和結果：所以、因此。',
            comparisons: ['電車が遅れた。それで遅刻した：電車誤點所以遲到', '電車が遅れた。しかし間に合った：電車誤點但趕上了'],
            commonMistakes: ['「それで」因果 / 「それに」追加 / 「それでも」讓步'],
        },
    },
    // ━━━ しかし ━━━
    {
        id: 'g_n4_488', category: 'grammar', level: 'N4', tags: ['shikashi', 'contrast'],
        stem: '日本語{にほんご}は難{むずか}しい。___、面白{おもしろ}い。',
        stemZh: '日語很難。但是，很有趣。',
        options: [
            { text: 'しかし', reason: '正確！「しかし」表但是、然而。' },
            { text: 'それで', reason: '「それで」表所以。' },
            { text: 'それに', reason: '「それに」表而且。' },
            { text: 'そして', reason: '「そして」表然後。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「しかし」表正式逆接',
            analysis: '「しかし」是正式的逆接連接詞，表但是、然而。',
            comparisons: ['しかし：但是（正式）', 'でも：但是（口語）', 'けれども：雖然（介於兩者間）'],
            commonMistakes: ['正式度：しかし ＞ けれども ＞ でも ＞ けど'],
        },
    },
    // ━━━ そして ━━━
    {
        id: 'g_n4_489', category: 'grammar', level: 'N4', tags: ['soshite', 'sequence'],
        stem: '朝{あさ}ごはんを食{た}べた。___、学校{がっこう}に行{い}った。',
        stemZh: '吃了早餐。然後去了學校。',
        options: [
            { text: 'そして', reason: '正確！「そして」表然後、於是。' },
            { text: 'しかし', reason: '「しかし」表但是。' },
            { text: 'それで', reason: '「それで」表因此。' },
            { text: 'それに', reason: '「それに」表而且。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「そして」表時間順序',
            analysis: '「そして」連接按時間順序發生的事件：然後、於是。',
            comparisons: ['食べた。そして行った：吃了然後去了', '食べた。それから行った：吃了之後去了（同義）'],
            commonMistakes: ['「そして」≈「それから」但「そして」語氣較正式'],
        },
    },
    // ━━━ 複合題：ておけばよかった ━━━
    {
        id: 'g_n4_490', category: 'grammar', level: 'N4', tags: ['te-oku', 'ba-ii', 'regret', 'challenge'],
        stem: 'もっと早{はや}く予約{よやく}して___よかった。',
        stemZh: '要是更早預約就好了。',
        options: [
            { text: 'おけば', reason: '正確！「ておけばよかった」表後悔沒事先做。' },
            { text: 'おいたら', reason: '「ておいたらよかった」也可表後悔。' },
            { text: 'しまえば', reason: '「てしまえばよかった」不自然。' },
            { text: 'みれば', reason: '「てみればよかった」表要是試過就好了。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ておけばよかった」表後悔沒準備',
            analysis: '「ておく」（事先準備）＋「ばよかった」（後悔），表後悔當時沒有事先做好。',
            comparisons: ['予約しておけばよかった：要是事先預約就好了', '勉強しておけばよかった：要是事先學了就好了'],
            commonMistakes: ['「ておけばよかった」是複合後悔句型，強調「事先」'],
        },
    },
    // ━━━ 複合題：てもかまわない ━━━
    {
        id: 'g_n4_491', category: 'grammar', level: 'N4', tags: ['temo', 'permission', 'advanced'],
        stem: 'ここに車{くるま}を止{と}めて___。',
        stemZh: '把車停在這裡也沒關係。',
        options: [
            { text: 'もかまわない', reason: '正確！「てもかまわない」表做了也沒關係。' },
            { text: 'もいい', reason: '「てもいい」也表可以，但「かまわない」更正式。' },
            { text: 'はいけない', reason: '「てはいけない」表不可以，語意相反。' },
            { text: 'おく', reason: '「ておく」表事先準備。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てもかまわない」表許可',
            analysis: '「てもかまわない」表示做了也沒問題，是「てもいい」的正式說法。',
            comparisons: ['止めてもかまわない：停也沒關係（正式）', '止めてもいい：停也可以（一般）'],
            commonMistakes: ['「てもかまわない」比「てもいい」更正式鄭重'],
        },
    },
    // ━━━ 複合題：ようとしても ━━━
    {
        id: 'g_n4_492', category: 'grammar', level: 'N4', tags: ['you-to-suru', 'temo', 'challenge'],
        stem: '寝{ね}___としても、全然{ぜんぜん}眠{ねむ}れない。',
        stemZh: '即使想睡也完全睡不著。',
        options: [
            { text: 'よう', reason: '正確！「ようとしても」表即使試圖…也…。' },
            { text: 'る', reason: '「るとしても」不合文法。' },
            { text: 'た', reason: '「たとしても」語意不同。' },
            { text: 'ない', reason: '「ないとしても」語意不同。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ようとしても」表努力但無法',
            analysis: '「意向形＋としても＋否定」表示即使試圖做某事也做不到。',
            comparisons: ['寝ようとしても眠れない：想睡也睡不著', '忘れようとしても忘れられない：想忘也忘不了'],
            commonMistakes: ['「ようとしても〜ない」是表無能為力的常見表達'],
        },
    },
    // ━━━ 複合題：のはいつですか ━━━
    {
        id: 'g_n4_493', category: 'grammar', level: 'N4', tags: ['no-wa', 'question', 'advanced'],
        stem: '試験{しけん}がある___はいつですか。',
        stemZh: '考試是什麼時候？',
        options: [
            { text: 'の', reason: '正確！「のは」將句子名詞化作為主題。' },
            { text: 'こと', reason: '「ことは」也可但「のは」更自然。' },
            { text: 'はず', reason: '「はずは」不合此處。' },
            { text: 'よう', reason: '「ようは」不合此處。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「のは」名詞化提問',
            analysis: '「動詞普通形＋のは」將事情名詞化，用於提問或說明。',
            comparisons: ['試験があるのはいつですか：考試是什麼時候', '彼が来たのは昨日だ：他來的是昨天'],
            commonMistakes: ['「のは〜だ」句型可強調時間、場所、原因等'],
        },
    },
    // ━━━ 複合題：てしまってから ━━━
    {
        id: 'g_n4_494', category: 'grammar', level: 'N4', tags: ['te-shimau', 'te-kara', 'challenge'],
        stem: '全部{ぜんぶ}食{た}べて___から後悔{こうかい}した。',
        stemZh: '全部吃完之後後悔了。',
        options: [
            { text: 'しまって', reason: '正確！「てしまってから」表做完（遺憾地）之後。' },
            { text: 'おいて', reason: '「ておいてから」表準備好之後。' },
            { text: 'みて', reason: '「てみてから」表試了之後。' },
            { text: 'いて', reason: '「ていてから」不太自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てしまってから」表遺憾的完成後',
            analysis: '「てしまう」（遺憾地做完）＋「てから」（之後），表不小心做完了某事之後。',
            comparisons: ['食べてしまってから後悔した：吃完後後悔了', '言ってしまってから気づいた：說完後才注意到'],
            commonMistakes: ['「てしまってから」常帶後悔或遺憾語氣'],
        },
    },
    // ━━━ 複合題：てもらえると助かる ━━━
    {
        id: 'g_n4_495', category: 'grammar', level: 'N4', tags: ['te-morau', 'request', 'challenge'],
        stem: '手伝{てつだ}って___と助{たす}かるんですが。',
        stemZh: '如果能幫忙的話就太好了。',
        options: [
            { text: 'もらえる', reason: '正確！「てもらえると助かる」表如果能幫忙就好了。' },
            { text: 'くれる', reason: '「てくれると助かる」也可。' },
            { text: 'あげる', reason: '「てあげる」表為別人做，語意不同。' },
            { text: 'おく', reason: '「ておく」表事先準備。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てもらえると助かる」婉轉請求',
            analysis: '「てもらえると助かる」是非常婉轉的請求方式：如果能幫忙就太好了。',
            comparisons: ['手伝ってもらえると助かる：能幫忙的話就好了', '手伝ってくれると助かる：你幫忙的話就好了'],
            commonMistakes: ['「てもらえると助かる」比「てください」更委婉'],
        },
    },
    // ━━━ 複合題：たとたん ━━━
    {
        id: 'g_n4_496', category: 'grammar', level: 'N4', tags: ['totan', 'immediate', 'challenge'],
        stem: 'ドアを開{あ}けた___、猫{ねこ}が飛{と}び出{だ}してきた。',
        stemZh: '一打開門，貓就飛了出來。',
        options: [
            { text: 'とたん', reason: '正確！「たとたん（に）」表一…就…（瞬間）。' },
            { text: 'ところ', reason: '「たところ」也可表發現，但不強調瞬間性。' },
            { text: 'ばかり', reason: '「たばかり」表剛剛做完。' },
            { text: 'あと', reason: '「たあと」表之後。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たとたん」表瞬間連續',
            analysis: '「た形＋とたん（に）」表示一做完某事就立刻發生了另一件事，強調時間極短。',
            comparisons: ['開けたとたん猫が飛び出した：一開門貓就飛出來', '席に着いたとたん電話が鳴った：一坐下電話就響了'],
            commonMistakes: ['「とたん」強調意外且瞬間 / 「途端」是漢字寫法'],
        },
    },
    // ━━━ 複合題：ずにはいられない ━━━
    {
        id: 'g_n4_497', category: 'grammar', level: 'N4', tags: ['zuni', 'compulsion', 'challenge'],
        stem: 'あの映画{えいが}を見{み}たら、泣{な}か___にはいられない。',
        stemZh: '看了那部電影就忍不住會哭。',
        options: [
            { text: 'ず', reason: '正確！「ずにはいられない」表忍不住…。' },
            { text: 'ないで', reason: '「ないではいられない」也可，同義。' },
            { text: 'なくて', reason: '「なくてはいられない」不太自然。' },
            { text: 'なければ', reason: '「なければいられない」不合此句型。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ずにはいられない」表無法抑制',
            analysis: '「ない形去ない＋ずにはいられない」表示無法控制自己不去做某事。',
            comparisons: ['泣かずにはいられない：忍不住要哭', '笑わずにはいられない：忍不住要笑'],
            commonMistakes: ['「ずにはいられない」= 「ないではいられない」意思相同'],
        },
    },
    // ━━━ 複合題：からといって ━━━
    {
        id: 'g_n4_498', category: 'grammar', level: 'N4', tags: ['kara-to-itte', 'concession', 'challenge'],
        stem: '日本語{にほんご}が上手{じょうず}だ___、日本{にほん}の文化{ぶんか}を理解{りかい}しているとは限{かぎ}らない。',
        stemZh: '就算日語好，也不見得了解日本文化。',
        options: [
            { text: 'からといって', reason: '正確！「からといって」表不能因為…就…。' },
            { text: 'から', reason: '「から」只表原因，不含讓步語氣。' },
            { text: 'ので', reason: '「ので」表原因。' },
            { text: 'けど', reason: '「けど」表逆接。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「からといって」表不能以…為理由',
            analysis: '「からといって」表示不能僅因為某個理由就得出某結論，常搭配「とは限らない」。',
            comparisons: ['上手だからといって理解しているとは限らない：好就代表了解嗎不見得', '高いからといっていいとは限らない：貴不代表好'],
            commonMistakes: ['「からといって〜とは限らない」是常見搭配'],
        },
    },
    // ━━━ 複合題：ておいてほしい ━━━
    {
        id: 'g_n4_499', category: 'grammar', level: 'N4', tags: ['te-oku', 'te-hoshii', 'challenge'],
        stem: '会議{かいぎ}の前{まえ}に、資料{しりょう}をコピーして___ほしい。',
        stemZh: '希望開會前先把資料影印好。',
        options: [
            { text: 'おいて', reason: '正確！「ておいてほしい」表希望事先做好。' },
            { text: 'しまって', reason: '「てしまってほしい」不自然。' },
            { text: 'みて', reason: '「てみてほしい」表希望試試看。' },
            { text: 'あって', reason: '「てあってほしい」不太自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ておいてほしい」表希望事先做好',
            analysis: '「ておく」（事先準備）＋「てほしい」（希望），表示希望對方事先做好某事。',
            comparisons: ['コピーしておいてほしい：希望先影印好', 'コピーしてほしい：希望影印（不強調事先）'],
            commonMistakes: ['「ておいてほしい」比「てほしい」多了事先準備的意味'],
        },
    },
    // ━━━ 複合題：たほうがよかった ━━━
    {
        id: 'g_n4_500', category: 'grammar', level: 'N4', tags: ['hou-ga-ii', 'regret', 'challenge'],
        stem: 'タクシーに乗{の}った___がよかった。',
        stemZh: '搭計程車比較好（後悔沒搭）。',
        options: [
            { text: 'ほう', reason: '正確！「たほうがよかった」表做了會比較好（後悔）。' },
            { text: 'こと', reason: '「たことがよかった」不合文法。' },
            { text: 'ため', reason: '「たためがよかった」不合文法。' },
            { text: 'わけ', reason: '「たわけがよかった」不合文法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たほうがよかった」表後悔的建議',
            analysis: '「た形＋ほうがよかった」表示回顧過去，覺得當時那樣做會更好。',
            comparisons: ['乗ったほうがよかった：搭了比較好（後悔沒搭）', '乗ったほうがいい：搭比較好（現在的建議）'],
            commonMistakes: ['「たほうがよかった」過去後悔 / 「たほうがいい」現在建議'],
        },
    },
    // ━━━ 複合題：ているはずだ ━━━
    {
        id: 'g_n4_501', category: 'grammar', level: 'N4', tags: ['te-iru', 'hazu', 'challenge'],
        stem: '彼{かれ}は今{いま}ごろ飛行機{ひこうき}に乗{の}って___はずだ。',
        stemZh: '他現在應該已經在飛機上了。',
        options: [
            { text: 'いる', reason: '正確！「ているはずだ」表應該正在…。' },
            { text: 'ある', reason: '「てあるはずだ」語意不同。' },
            { text: 'おく', reason: '「ておくはずだ」不太自然。' },
            { text: 'しまう', reason: '「てしまうはずだ」不太自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「ているはずだ」表推測某狀態',
            analysis: '「ている＋はずだ」表示根據某根據推測某人現在應該處於某狀態。',
            comparisons: ['乗っているはずだ：應該在坐（推測現在狀態）', '乗ったはずだ：應該搭了（推測過去動作）'],
            commonMistakes: ['「ているはず」推測現在狀態 / 「たはず」推測過去動作'],
        },
    },
    // ━━━ 複合題：てからにする ━━━
    {
        id: 'g_n4_502', category: 'grammar', level: 'N4', tags: ['te-kara', 'ni-suru', 'challenge'],
        stem: '手{て}を洗{あら}って___にしましょう。',
        stemZh: '洗了手再（吃）吧。',
        options: [
            { text: 'から', reason: '正確！「てからにする」表做完再…。' },
            { text: 'しまって', reason: '「てしまってにする」不合文法。' },
            { text: 'おいて', reason: '「ておいてにする」不合文法。' },
            { text: 'みて', reason: '「てみてにする」不太自然。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てからにする」表先做再…',
            analysis: '「てからにする」表示先完成某事再做後面的事。',
            comparisons: ['洗ってからにしよう：洗了再說吧', '食べてからにしよう：吃了再說吧'],
            commonMistakes: ['「てからにする」比「てから〜する」更簡潔委婉'],
        },
    },
    // ━━━ 複合題：なければよかった ━━━
    {
        id: 'g_n4_503', category: 'grammar', level: 'N4', tags: ['nakereba', 'regret', 'challenge'],
        stem: 'あんなこと言{い}わ___よかった。',
        stemZh: '要是沒說那種話就好了。',
        options: [
            { text: 'なければ', reason: '正確！「なければよかった」表後悔做了某事。' },
            { text: 'なくても', reason: '「なくてもよかった」表不說也行。' },
            { text: 'ないで', reason: '「ないでよかった」表沒說太好了。' },
            { text: 'なくて', reason: '「なくてよかった」表沒說太好了。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「なければよかった」表後悔做了',
            analysis: '「なければよかった」表示後悔做了某事：要是沒做就好了。',
            comparisons: ['言わなければよかった：要是沒說就好了（後悔說了）', '言わなくてよかった：還好沒說（慶幸沒說）'],
            commonMistakes: ['「なければよかった」後悔 / 「なくてよかった」慶幸'],
        },
    },
    // ━━━ 複合題：てくるようになる ━━━
    {
        id: 'g_n4_504', category: 'grammar', level: 'N4', tags: ['te-kuru', 'you-ni-naru', 'challenge'],
        stem: '日本{にほん}に住{す}んで半年{はんとし}たったら、日本{にほん}の生活{せいかつ}に慣{な}れて___ようになった。',
        stemZh: '住在日本半年後，漸漸習慣了日本的生活。',
        options: [
            { text: 'きた', reason: '正確！「てくるようになった」表漸漸變得…起來了。' },
            { text: 'いった', reason: '「ていくようになった」不太自然。' },
            { text: 'しまった', reason: '「てしまったようになった」不合文法。' },
            { text: 'おいた', reason: '「ておいたようになった」不合文法。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「てきたようになる」表漸進變化的結果',
            analysis: '「てくる」（漸漸…起來）＋「ようになる」（變得…），表示經過一段時間漸漸變得如此。',
            comparisons: ['慣れてきたようになった：漸漸習慣了', '分かってきたようになった：漸漸懂了'],
            commonMistakes: ['「てくる」表過去到現在的漸進 →搭配「ようになる」表變化結果'],
        },
    },
    // ━━━ 複合題：たところで ━━━
    {
        id: 'g_n4_505', category: 'grammar', level: 'N4', tags: ['tokoro-de', 'futility', 'challenge'],
        stem: '今{いま}から急{いそ}いだ___で、もう間{ま}に合{あ}わないだろう。',
        stemZh: '就算現在趕也來不及了吧。',
        options: [
            { text: 'ところ', reason: '正確！「たところで」表即使做了也沒用。' },
            { text: 'ばかり', reason: '「たばかりで」表剛做完就。' },
            { text: 'はず', reason: '「たはずで」表應該做了。' },
            { text: 'つもり', reason: '「たつもりで」表以為做了。' },
        ],
        correctIndex: 0,
        explanation: {
            keyPoint: '「たところで」表做了也白費',
            analysis: '「た形＋ところで」表示即使做了某事也不會有好結果，強調徒勞無功。',
            comparisons: ['急いだところで間に合わない：即使趕了也來不及', '頼んだところで無駄だ：即使拜託了也沒用'],
            commonMistakes: ['「たところで」表徒勞 / 「たところ」表做了之後（發現）'],
        },
    },
]
