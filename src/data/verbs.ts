// Common Japanese verbs with conjugation patterns
import { importedVerbs } from './verbs_imported.ts';

export type Verb = VerbData;
// Based on real-world usage patterns

export interface VerbContext {
    ja: string // e.g. "寿司を", "学校へ"
    zh: string // e.g. "壽司", "學校" (suffix/object usually)
    en: string // e.g. "sushi", "to school"
}

export interface VerbData {
    dictionary: string // 辞書形
    reading: string // ふりがな (Hiragana)
    meaning: string
    meaning_zh: string // Traditional Chinese meaning
    type: 'godan' | 'ichidan' | 'irregular'
    group?: string // For godan: う, く, ぐ, す, つ, ぬ, ぶ, む, る
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'
    transitivity?: 'transitive' | 'intransitive' // Helpful for example generation
    context?: VerbContext
    native_examples?: { ja: string, zh: string }[]
    dictionary_definition?: string[]
}

export const manualVerbs: VerbData[] = [
    // N5 Verbs
    { dictionary: '行く', reading: 'いく', meaning: 'to go', meaning_zh: '去', type: 'godan', group: 'く', level: 'N5', transitivity: 'intransitive', context: { ja: '学校へ', zh: '學校', en: 'to school' }, native_examples: [{ ja: '昨日家族と食事に行きました。', zh: '昨天和家人一起去吃飯了。' }, { ja: '来年から小学校に行く。', zh: '明年開始上小學。' }, { ja: '仕事がうまく行きました。', zh: '工作進展順利。' }], dictionary_definition: ['(1) 去。到。赴。表示從一個地方移動到另一個地方。', '(2) 表示事物的進展、時間的流逝。', '(3) 到達某種程度或狀態。'] },
    { dictionary: '見る', reading: 'みる', meaning: 'to see/watch', meaning_zh: '看', type: 'ichidan', level: 'N5', transitivity: 'transitive', context: { ja: '映画を', zh: '電影', en: 'a movie' }, native_examples: [{ ja: '見るに見かねて彼に忠告する', zh: '實在看不下去，向他進行勸告。' }, { ja: '新聞を見る', zh: '看報。' }], dictionary_definition: ['(1) 用眼睛感覺物體的形狀、顏色等。看。', '(2) 瀏覽。觀看。閱覽。看。', '(3) 查看。看。', '(4) 醫生診察患者的身體。診。看。', '(5) 判斷。評價。看。估計。看待。', '(6) 照看。看。照料。處理。', '(7) 自身嘗受。經受。遭受。受。', '以“…てみる”的形式，表示“試着做…”。…看。'] },
    { dictionary: '数える', reading: 'かぞえる', meaning: 'to count', meaning_zh: '數', type: 'ichidan', level: 'N5', transitivity: 'transitive', context: { ja: 'お金{かね}を', zh: '錢', en: 'money' }, native_examples: [{ ja: '数{かず}を数{かぞ}える', zh: '數數。' }, { ja: 'スポーツが万能{ばんのう}であることも、彼{かれ}の長所{ちょうしょ}に数{かぞ}えることができる', zh: '體育全能也可以算作他的長處。' }], dictionary_definition: ['(1) 弄清楚是幾個、多少或第幾號等。數。', '(2) 通過評價，作爲其中的一個。算。算作。'] },
    { dictionary: '聞く', reading: 'きく', meaning: 'to listen', meaning_zh: '聽', type: 'godan', group: 'く', level: 'N5', transitivity: 'transitive', context: { ja: '音楽{おんがく}を', zh: '音樂', en: 'music' }, native_examples: [{ ja: '音楽{おんがく}を聞{き}く。', zh: '聽音樂。' }, { ja: '先生{せんせい}に聞{き}く。', zh: '問老師。' }, { ja: '人{ひと}の話{はなし}をよく聞{き}く。', zh: '認真聽別人說話。' }], dictionary_definition: ['(1) 聽；聽見。指用耳朵接收聲音。', '(2) 問；詢問；打聽。', '(3) 聽從；答應。', '(4) 嗅；聞（香）。'] },
    { dictionary: '食べる', reading: 'たべる', meaning: 'to eat', meaning_zh: '吃', type: 'ichidan', level: 'N5', transitivity: 'transitive', context: { ja: '寿司{すし}を', zh: '壽司', en: 'sushi' }, native_examples: [{ ja: 'なんとか食{た}べていくだけの収入{しゅうにゅう}はある', zh: '只有勉強夠維持生活的收入。' }], dictionary_definition: ['(1) 把食物放到嘴裏，咀嚼，嚥下去。喫。', '(2) 維持生活。'] },
    { dictionary: '話す', reading: 'はなす', meaning: 'to speak', meaning_zh: '說', type: 'godan', group: 'す', level: 'N5', transitivity: 'transitive', context: { ja: '日本語{にほんご}を', zh: '日語', en: 'Japanese' }, native_examples: [{ ja: '事情{じじょう}を話{はな}す', zh: '談情況。' }, { ja: 'そのことについて先生{せんせい}に話{はな}してみよう', zh: '把那件事跟老師商量一下吧。' }], dictionary_definition: ['(1) 用有聲語言傳達事情或自己的想法。說。談。講。', '(2) 相互交換意見。交談。商量。'] },
    { dictionary: '買う', reading: 'かう', meaning: 'to buy', meaning_zh: '買', type: 'godan', group: 'う', level: 'N5', transitivity: 'transitive', context: { ja: '車{くるま}を', zh: '車子', en: 'a car' }, native_examples: [{ ja: 'ノートを買{か}う', zh: '買筆記本。' }, { ja: 'うらみを買{か}う', zh: '招人怨恨。得罪人。' }], dictionary_definition: ['(1) 支付金錢，把物品或權利變爲自己的。買。', '(2) 承受某種結果。招致。', '(3) 較高地評價。讚許。', '(4) 願意接受。主動承擔。'] },
    { dictionary: '書く', reading: 'かく', meaning: 'to write', meaning_zh: '寫', type: 'godan', group: 'く', level: 'N5', transitivity: 'transitive', context: { ja: '手紙{てがみ}を', zh: '信', en: 'a letter' }, native_examples: [{ ja: '日記{にっき}を書{か}く。', zh: '寫日記。' }, { ja: '絵{え}を書{か}く。', zh: '畫畫兒。' }, { ja: '彼{かれ}に手紙{てがみ}を書{か}く。', zh: '給他寫信。' }], dictionary_definition: ['(1) 寫。記下文字或文章。', '(2) 畫。描繪圖畫或圖形。'] },
    { dictionary: '泳ぐ', reading: 'およぐ', meaning: 'to swim', meaning_zh: '游泳', type: 'godan', group: 'ぐ', level: 'N5', transitivity: 'intransitive', context: { ja: '海{うみ}で', zh: '在海裡', en: 'in the sea' }, native_examples: [{ ja: '川{かわ}を泳{およ}いで渡{わた}る', zh: '遊過河去。' }, { ja: '政界{せいかい}を泳{およ}ぐ', zh: '在政界周旋。' }], dictionary_definition: ['(1) 用手腳划水前進。游泳。', '(2) 巧妙的處世。周旋。', '(3) 向前打趔趄。', '(4) 分開人羣向前走。'] },
    { dictionary: '待つ', reading: 'まつ', meaning: 'to wait', meaning_zh: '等', type: 'godan', group: 'つ', level: 'N5', transitivity: 'transitive', context: { ja: '友達{ともだち}を', zh: '朋友', en: 'my friend' }, native_examples: [{ ja: '人{ひと}を待{ま}つ', zh: '等人。' }, { ja: 'バスを待{ま}つ', zh: '等公共汽車。' }], dictionary_definition: ['(1) 盼望人、事物的到來。盼望早日實現。等。等待。等候。', '(2) 使對方暫停要做的事。等等。', '(3) 直到明確對方的反應和態度爲止，什麼也不做。靜等。', '(4) 以“…に待つ”的形式表示期待。有待於…。有賴於…。對…寄予希望。期望。'] },
    { dictionary: '飲む', reading: 'のむ', meaning: 'to drink', meaning_zh: '喝', type: 'godan', group: 'む', level: 'N5', transitivity: 'transitive', context: { ja: 'お茶{ちゃ}を', zh: '茶', en: 'tea' }, native_examples: [{ ja: '水{みず}を飲{の}む', zh: '喝水。' }, { ja: 'うらみを飲{の}む', zh: '飲恨。' }], dictionary_definition: ['(1) 使進入口中的東西，隨即咽入體內。喝。飲。', '(2) 把要冒出來的東西抑制住。飲。吞。咽。', '(3) 勉強接受。不得已接受。', '(4) 壓倒。吞沒。', '(5) 藏在懷裏。暗藏。暗帶。'] },
    { dictionary: '呼ぶ', reading: 'よぶ', meaning: 'to call', meaning_zh: '呼叫', type: 'godan', group: 'ぶ', level: 'N5', transitivity: 'transitive', context: { ja: 'タクシーを', zh: '計程車', en: 'a taxi' }, native_examples: [{ ja: '名{な}まえを呼{よ}ぶ', zh: '招呼名字。' }, { ja: '医者{いしゃ}を呼{よ}ぶ', zh: '請醫生。' }], dictionary_definition: ['(1) 爲引起對方注意而呼喚。呼喚。招呼。', '(2) 叫過來。呼喚。', '(3) 招待。邀請。', '(4) 叫做。稱爲。', '(5) 吸引。引起。'] },
    { dictionary: '帰る', reading: 'かえる', meaning: 'to return', meaning_zh: '回家', type: 'godan', group: 'る', level: 'N5', transitivity: 'intransitive', context: { ja: '家{うち}に', zh: '回家', en: 'home' }, native_examples: [{ ja: '家{うち}に帰{かえ}る。', zh: '回家。' }, { ja: '国{くに}に帰{かえ}る。', zh: '回國。' }, { ja: '彼{かれ}は昨日{きのう}、故郷{こきょう}に帰{かえ}った。', zh: '他昨天回老家了。' }], dictionary_definition: ['(1) 回家；返回。回到出發點或原處。', '(2) 指客人離開、歸去。'] },
    { dictionary: '会う', reading: 'あう', meaning: 'to meet', meaning_zh: '見面', type: 'godan', group: 'う', level: 'N5', transitivity: 'intransitive', context: { ja: '先生{せんせい}に', zh: '老師', en: 'the teacher' }, native_examples: [{ ja: '来週{らいしゅう}彼{かれ}と会{あ}う予定{よてい}です。', zh: '預計下週和他見面。' }, { ja: '運命{うんめい}の人{ひと}に出会{であ}う。', zh: '遇到命運之人。' }, { ja: '明日{あした}、あなたに会{あ}うことができますか？', zh: '明天我能見你嗎？' }], dictionary_definition: ['(1) 見面；相會；面會。指人與人對面。', '(2) 偶然遇到；遭遇。'] },
    { dictionary: '来る', reading: 'くる', meaning: 'to come', meaning_zh: '來', type: 'irregular', level: 'N5', transitivity: 'intransitive', context: { ja: 'ここへ', zh: '這裡', en: 'here' }, native_examples: [{ ja: '電車{でんしゃ}が来{く}る', zh: '電車來了。' }, { ja: '春{はる}が来{く}るとさくらの花{はな}が咲{さ}く', zh: '一到春天櫻花就開。' }], dictionary_definition: ['(1) 某種事物在空間或時間上朝自己所在的方向接近。來。來到。', '(2) 到了某時期或某時間。到。', '(3) 發生某種狀態。發生。', '(4) 以某事爲原因而發生。多用於發生了不好的事情。引起。發生。', '(5) 用“…ときたら”、“…とくると”、“…ときては”的形式，表示特別強調前面的詞語。提起…。說起…。特別是…。', '(1) 朝這個方向接近。向這邊…來。', '(2) 完成該動作後返回。回來。', '(3) 逐漸變成某種狀態。…起來。', '(4) 表示該動作或作用持續到現在。一直在…。'] },
    { dictionary: 'する', reading: 'する', meaning: 'to do', meaning_zh: '做', type: 'irregular', level: 'N5', transitivity: 'transitive', context: { ja: '宿題{しゅくだい}を', zh: '功課', en: 'homework' }, native_examples: [{ ja: '毎日{まいにち}、日本語{にほんご}を勉強{べんきょう}する。', zh: '每天學習日語。' }, { ja: '部屋{へや}をきれいに掃除{そうじ}する。', zh: '把房間打掃乾淨。' }, { ja: '今日{きょう}の夕食{ゆうしょく}はハンバーグにしよう。', zh: '今天的晚餐就決定吃漢堡排吧。' }], dictionary_definition: ['(1) 做；進行；從事某種行為。', '(2) 將名詞動詞化（如：勉強する）。', '(3) 決定某事；處於某種狀態。'] },
    { dictionary: 'ある', reading: 'ある', meaning: 'to exist', meaning_zh: '有', type: 'godan', group: 'る', level: 'N5', transitivity: 'intransitive', context: { ja: '問題{もんだい}が', zh: '問題', en: 'a problem' }, native_examples: [{ ja: '電話{でんわ}がある。', zh: '有電話（在那裡）。' }, { ja: '私{わたし}に辞書{じしょ}がある。', zh: '我有一本字典。' }, { ja: 'この薬{くすり}は効{き}き目{め}がある。', zh: '這種藥有效。' }], dictionary_definition: ['(1) 有；在；存在。用於非生物、無生命物體。', '(2) 擁有；具有。', '(3) 發生；舉行。'] },
    { dictionary: 'いる', reading: 'いる', meaning: 'to exist', meaning_zh: '有', type: 'ichidan', level: 'N5', transitivity: 'intransitive', context: { ja: '猫{ねこ}が', zh: '貓', en: 'a cat' }, native_examples: [{ ja: '部屋{へや}に人{ひと}がいる。', zh: '房間裡有人。' }, { ja: '猫{ねこ}が庭{にわ}にいる。', zh: '院子裡有貓。' }, { ja: '彼{かれ}は今{いま}、日本{にほん}にいる。', zh: '他現在在日本。' }], dictionary_definition: ['(1) 有；在；居。用於人、動物等生物的存在。', '(2) 居住；逗留。', '(3) 作為補助動詞表示正在進行（〜ている）。'] },
    { dictionary: '死ぬ', reading: 'しぬ', meaning: 'to die', meaning_zh: '死', type: 'godan', group: 'ぬ', level: 'N5', transitivity: 'intransitive', context: { ja: '', zh: '', en: '' }, native_examples: [{ ja: '死{し}ぬ気{き}でやれば、なんでもできる', zh: '以拼死的精神去做，沒有辦不到的。' }, { ja: '目{め}が死{し}んでいる', zh: '目中無神。' }], dictionary_definition: ['(1) 失去生命。因病或事故喪失生命。死。', '(2) 以“死んでいる”的形式，表示沒有生氣。', '(3) 終於未能有效利用。廢置。成廢物。', '(4) 棒球指出局。', '(5) 圍棋指被對方圍住喫掉棋子。成死棋。'] },
    { dictionary: '遊ぶ', reading: 'あそぶ', meaning: 'to play', meaning_zh: '玩', type: 'godan', group: 'ぶ', level: 'N5', transitivity: 'intransitive', context: { ja: '公園{こうえん}で', zh: '在公園', en: 'in the park' }, native_examples: [{ ja: '表{おもて}で遊{あそ}ぶ', zh: '在門口玩。' }, { ja: '会社{かいしゃ}をやめて家{いえ}で遊{あそ}んでいる', zh: '辭去公司，在家賦閒。' }], dictionary_definition: ['(1) 爲使精神愉快，做輕鬆的活動。玩。遊戲。', '(2) 不做工作，閒待著。賦閒。閒居。', '(3) 機器、工具、處所等沒被有效地使用。閒着。閒置。'] },
    { dictionary: '読む', reading: 'よむ', meaning: 'to read', meaning_zh: '讀', type: 'godan', group: 'む', level: 'N5', transitivity: 'transitive', context: { ja: '本{ほん}を', zh: '書', en: 'a book' }, native_examples: [{ ja: '彼{かれ}は毎日新聞{まいにちしんぶん}を読{よ}みます。', zh: '他每天讀報紙。' }, { ja: '子供{こども}に本{ほん}を読{よ}んでやる。', zh: '讀書給孩子聽。' }, { ja: '相手{あいて}の手{て}の内{うち}を読{よ}む。', zh: '推測對方的意圖（看穿底牌）。' }], dictionary_definition: ['(1) 讀；閱讀。看文字、文章等並理解其內容。', '(2) 朗讀；唸誦。出聲讀出文字。', '(3) 推測；預測；看穿。從表面跡象推斷隱藏的意義或未來的發展（如：讀取空氣/氣氛）。', '(4) 計算；數數（如：票を読む）。'] },
    { dictionary: '分かる', reading: 'わかる', meaning: 'to understand', meaning_zh: '明白', type: 'godan', group: 'る', level: 'N5', transitivity: 'intransitive', context: { ja: '英語が', zh: '英語', en: 'English' }, native_examples: [{ ja: '意味がわかる', zh: '明白意思。' }, { ja: '英語がわかる', zh: '懂英語。' }], dictionary_definition: ['(1) 知道意思。懂。懂得。明白。知道。瞭解。', '(2) 不曾清楚的事情，弄清楚了。知道。瞭解。清楚。', '(3) 理解人的心情和人情。懂。懂得。理解。瞭解。'] },
    { dictionary: '歩く', reading: 'あるく', meaning: 'to walk', meaning_zh: '走路', type: 'godan', group: 'く', level: 'N5', transitivity: 'intransitive', context: { ja: '道{みち}を', zh: '路上', en: 'the street' }, native_examples: [{ ja: '駅{えき}までは歩{ある}いて10分{じゅっぷん}くらいで行{い}ける', zh: '到車站，步行10分左右能到。' }, { ja: '歩道{ほどう}を歩{ある}く', zh: '走人行道。' }], dictionary_definition: ['(1) 用腳行路。走。步行。', '(2) 到各處去。到各地巡迴做些什麼。也指使用交通工具の移動。(到處)走。轉。走遍。巡行。', '(3) 經歷。度過。涉足。'] },
    { dictionary: '走る', reading: 'はしる', meaning: 'to run', meaning_zh: '跑', type: 'godan', group: 'る', level: 'N5', transitivity: 'intransitive', context: { ja: '速{はや}く', zh: '快', en: 'fast' }, native_examples: [{ ja: 'ピストルの音{おと}とともに一齊{いっせい}に走{はし}り出{だ}した', zh: '槍聲一響，一齊起跑。' }, { ja: '汽車{きしゃ}は北{きた}に向{む}かって走{はし}る', zh: '火車向北奔馳。' }], dictionary_definition: ['(1) 人或動物以比步行快的速度移動腳步前進。跑。', '(2) 人和動物以外的物體以高速移動。奔馳。行駛。駛。', '(3) 道路和河流等細長物通向某一方向。通向。走向。', '(4) 某種感覺或感情突然出現，又立即消失。閃現。忽覺。', '(5) 思想和行動傾向於某個方向。偏重。偏向。走向。'] },
    { dictionary: '座る', reading: 'すわる', meaning: 'to sit', meaning_zh: '坐', type: 'godan', group: 'る', level: 'N5', transitivity: 'intransitive', context: { ja: '椅子{いす}に', zh: '椅子上', en: 'on the chair' }, native_examples: [{ ja: 'どうぞおかけください。', zh: '請坐下。' }, { ja: '彼女{かのじょ}は床{ゆか}に座{すわ}っている。', zh: '她坐在地板上。' }, { ja: '社長{しゃちょう}の座{ざ}に座{すわ}る。', zh: '坐在社長的位子上。' }], dictionary_definition: ['(1) 坐下；就座。指彎曲膝蓋坐下。', '(2) 佔據某個地位 or 職位。', '(3) 定住；穩定。'] },
    { dictionary: '送る', reading: 'おくる', meaning: 'to send', meaning_zh: '寄', type: 'godan', group: 'る', level: 'N5', transitivity: 'transitive', context: { ja: 'メールを', zh: '郵件', en: 'email' }, native_examples: [{ ja: '荷をおくる', zh: '送貨。' }, { ja: 'お金をおくってきた', zh: '寄錢來了。' }], dictionary_definition: ['(1) 把東西從某處轉送到離開該地的別處。送。寄。', '(2) 爲了送行或引路，陪同別人到某處去。送。送行。', '(3) 度過時光。度。過。度過。', '(4) 順次地向下一個位置移動。挪。串。傳。挪動。', '(5) 把人派遣到某處。派。派遣。', '(6) 標送假名。標。標出。'] },
    { dictionary: '洗う', reading: 'あらう', meaning: 'to wash', meaning_zh: '洗', type: 'godan', group: 'う', level: 'N5', transitivity: 'transitive', context: { ja: '手を', zh: '手', en: 'hands' }, native_examples: [{ ja: '洗たく機であらう', zh: '用洗衣機洗。' }, { ja: 'きれいにあらう', zh: '洗乾淨。' }], dictionary_definition: ['(1) 用水和洗滌劑等去污。洗。', '(2) 水或波浪等衝擊。衝擊。沖刷。', '(3) 把隱蔽的東西調查清楚。調查。清查。查明。', '(4) 停止做壞遊戲或不好的事。洗(手)。'] },

    // N4 Verbs
    { dictionary: '決める', reading: 'きめる', meaning: 'to decide', meaning_zh: '決定', type: 'ichidan', level: 'N4', transitivity: 'transitive', context: { ja: '日程{にってい}を', zh: '日程', en: 'the schedule' }, native_examples: [{ ja: '卒業後{そつぎょうご}の仕事{しごと}をまだ決{き}めていない。', zh: '畢業後的工作還沒確定下來。' }, { ja: '話{はなし}を決{き}める。', zh: '說定。' }, { ja: '運命{うんめい}は自分自身{じぶんじしん}で決{き}める。', zh: '命運要由自己決定。' }], dictionary_definition: ['(1) 決定；定下；確定。得出最後的結果或結論。', '(2) 規定；制定（如規則、計劃等）。', '(3) 決心；斷定。'] },
    { dictionary: '調べる', reading: 'しらべる', meaning: 'to investigate/check', meaning_zh: '調查/查閱', type: 'ichidan', level: 'N4', transitivity: 'transitive', context: { ja: '原因{げんいん}を', zh: '原因', en: 'the cause' }, native_examples: [{ ja: 'この意味{いみ}を辞書{じしょ}で調{しら}べる。', zh: '用字典查這個意思。' }, { ja: '関係資料{かんけいしりょう}を調{しら}べる。', zh: '查閱相關資料。' }], dictionary_definition: ['(1) 調查；查詢；翻閱。為了了解情況而進行考察。', '(2) 檢查；審查。', '(3) 研究；探討其規律。', '(4) 演奏；撥弄（樂器）。'] },
    { dictionary: '捨てる', reading: 'すてる', meaning: 'to throw away', meaning_zh: '丟掉', type: 'ichidan', level: 'N4', transitivity: 'transitive', context: { ja: 'ゴミを', zh: '垃圾', en: 'trash' }, native_examples: [{ ja: 'ごみを捨{す}てる。', zh: '扔垃圾。' }, { ja: '希望{きぼう}を捨{す}てる。', zh: '放棄希望。' }, { ja: 'いらない服{ふく}や本{ほん}を捨{す}てました。', zh: '把不需要的衣服和書都丟了。' }], dictionary_definition: ['(1) 拋棄；扔掉；丟棄。將不需要的東西手放開。', '(2) 放棄；割捨；斷絕關係。', '(3) 犧牲（生命等）。'] },
    { dictionary: '始める', reading: 'はじめる', meaning: 'to begin', meaning_zh: '開始', type: 'ichidan', level: 'N4', transitivity: 'transitive', context: { ja: '授業{じゅぎょう}を', zh: '上課', en: 'class' }, native_examples: [{ ja: '荷造{にづくり}を始{はじ}める。', zh: '開始打包。' }, { ja: '授業{じゅぎょう}を始{はじ}める。', zh: '開始上課。' }, { ja: '明日{あした}から実験{じっけん}を始{はじ}める予定{よてい}だ。', zh: '預計明天開始實驗。' }], dictionary_definition: ['(1) 開始；著手；啟動。從某一點起進行某項活動。', '(2) 作為補助動詞，接在動詞連用形之後，表示該動作開始（〜し始める）。'] },
    { dictionary: '終わる', reading: 'おわる', meaning: 'to end', meaning_zh: '結束', type: 'godan', group: 'る', level: 'N4', transitivity: 'intransitive', context: { ja: '夏{なつ}が', zh: '夏天', en: 'summer' }, native_examples: [{ ja: '授業{じゅぎょう}が終{お}わった。', zh: '下課了。' }, { ja: '今日{きょう}の仕事{しごと}はもう終{お}わった。', zh: '今天的工作已經結束了。' }, { ja: '会議{かいぎ}が終{お}わる。', zh: '會議結束。' }], dictionary_definition: ['(1) 結束；完畢；終了。事情發展到最後階段，不再繼續。', '(2) 使結束；完成。', '(3) 表示失敗或完蛋（如：もう終わった）。'] },
    { dictionary: '止まる', reading: 'とまる', meaning: 'to stop', meaning_zh: '停止', type: 'godan', group: 'る', level: 'N4', transitivity: 'intransitive', context: { ja: '足{あし}が', zh: '腳步', en: 'feet' }, native_examples: [{ ja: '電車{でんしゃ}が止{と}まる。', zh: '電車停下來了。' }, { ja: '時計{とけい}が止{と}まった。', zh: '時鐘停了。' }, { ja: '木{き}の枝{えだ}に小鳥{ことり}がとまる。', zh: '小鳥落在樹枝上。' }], dictionary_definition: ['(1) 停止；停下。指正在移動的物體停住。', '(2) 止住；固定。', '(3) 棲息；停在（如鳥停在枝頭）。'] },
    { dictionary: '泊まる', reading: 'とまる', meaning: 'to stay overnight', meaning_zh: '住宿/過夜', type: 'godan', group: 'る', level: 'N4', transitivity: 'intransitive', context: { ja: 'ホテルに', zh: '住飯店', en: 'at a hotel' }, native_examples: [{ ja: '友人{ゆうじん}の家{いえ}に泊{と}まる。', zh: '住在朋友家。' }, { ja: '旅館{りょかん}に泊{と}まる。', zh: '在旅店住宿。' }, { ja: '今夜{こんや}はどこに泊{と}まるの？', zh: '今晚住在（寄宿在）哪裡？' }], dictionary_definition: ['(1) 住宿；過夜；投宿。在自己家以外的地方暫住。', '(2) （船）停泊。'] },
    { dictionary: '乗る', reading: 'のる', meaning: 'to ride', meaning_zh: '乘坐', type: 'godan', group: 'る', level: 'N4', transitivity: 'intransitive', context: { ja: '電車{でんしゃ}に', zh: '搭電車', en: 'on the train' }, native_examples: [{ ja: '毎日{まいにち}電車{でんしゃ}に乗{の}って通勤{つうきん}している。', zh: '每天搭電車通勤。' }, { ja: '馬{うま}に乗{の}る。', zh: '騎馬。' }, { ja: 'その話{はなし}に一口{ひとくち}乗{の}る。', zh: '加入那件事一份。' }], dictionary_definition: ['(1) 乘坐；搭。指登上交通工具。', '(2) 騎。跨在動物或自行車上。', '(3) 順應（節奏、趨勢等）；參加（計畫等）。', '(4) 被騙；上當（如甘言に乗る）。'] },
    { dictionary: '降りる', reading: 'おりる', meaning: 'to get off', meaning_zh: '下車', type: 'ichidan', level: 'N4', transitivity: 'intransitive', context: { ja: 'バスを', zh: '公車', en: 'the bus' }, native_examples: [{ ja: '電車{でんしゃ}を降{お}りる。', zh: '下電車。' }, { ja: '階段{かいだん}を降{お}りる。', zh: '下樓梯。' }, { ja: '候補{こうほ}から降{お}りる。', zh: '退出候選。' }], dictionary_definition: ['(1) 下車；下船。從交通工具上下來。', '(2) 下來；下去。從高處移向低處。', '(3) 退出；放棄（職位、競選、競爭等）。'] },
    { dictionary: '借りる', reading: 'かりる', meaning: 'to borrow', meaning_zh: '借入', type: 'ichidan', level: 'N4', transitivity: 'transitive', context: { ja: 'ペンを', zh: '筆', en: 'a pen' }, native_examples: [{ ja: '部屋{へや}を借{か}りる。', zh: '租房間。' }, { ja: '彼{かれ}からお金{かね}を借{か}りる。', zh: '從他那裡借錢。' }, { ja: '本{ほん}を借{か}りる。', zh: '借書。' }], dictionary_definition: ['(1) 借入；借用。在約定以後返還的條件下使用他人的東西。', '(2) 租用；租賃。', '(3) 藉助（知識、力量、能力等）。'] },
    { dictionary: '貸す', reading: 'かす', meaning: 'to lend', meaning_zh: '借出', type: 'godan', group: 'す', level: 'N4', transitivity: 'transitive', context: { ja: 'お金{かね}を', zh: '錢', en: 'money' }, native_examples: [{ ja: '本{ほん}を貸{か}す。', zh: '借書。' }, { ja: '力{ちから}を貸{か}す。', zh: '幫忙（出點力）。' }, { ja: '私{わたし}は彼{かれ}に本{ほん}を貸{か}しています。', zh: '我把書借給他。' }], dictionary_definition: ['(1) 借出；借給。以以後歸還為條件，讓他人使用自己的東西。', '(2) 出租。', '(3) 提供（幫助、知識、能力等）。'] },
    { dictionary: '返す', reading: 'かえす', meaning: 'to return', meaning_zh: '歸還', type: 'godan', group: 'す', level: 'N4', transitivity: 'transitive', context: { ja: '本{ほん}を', zh: '書', en: 'a book' }, native_examples: [{ ja: '読{よ}み終{お}わった本{ほん}を棚{たな}に返{かえ}す。', zh: '把讀完的書放回書架。' }, { ja: 'お金{かね}を返{かえ}す。', zh: '還錢。' }, { ja: '恩{おん}を返{かえ}す。', zh: '報恩。' }], dictionary_definition: ['(1) 歸還；還回。把接受或借來的東西交還給原主。', '(2) 送回；還原。使事物回到原處或原狀。', '(3) 回報；報答。同樣做對方對自己所做的事。', '(4) 翻轉；翻過來。'] },
    { dictionary: '急ぐ', reading: 'いそぐ', meaning: 'to hurry', meaning_zh: '趕快', type: 'godan', group: 'ぐ', level: 'N4', transitivity: 'intransitive', context: { ja: '駅{えき}へ', zh: '去車站', en: 'to the station' }, native_examples: [{ ja: '勝{か}ちを急{いそ}ぐ。', zh: '急於取勝（求勝心切）。' }, { ja: '急{いそ}いで書{か}く。', zh: '急急忙忙地寫。' }, { ja: '道{みち}を急{いそ}ぐ。', zh: '趕路。' }], dictionary_definition: ['(1) 趕快；急忙；抓緊。加快速度以便儘快完成某事。', '(2) 著急；焦急。'] },
    { dictionary: '手伝う', reading: 'てつだう', meaning: 'to help/assist', meaning_zh: '幫忙', type: 'godan', group: 'う', level: 'N4', transitivity: 'transitive', context: { ja: '母{はは}を', zh: '媽媽', en: 'mother' }, native_examples: [{ ja: '家事{かじ}を手伝{てつだ}う。', zh: '幫忙做家務。' }, { ja: '彼{かれ}の引{ひ}っ越{こ}しを手伝{てつだ}う。', zh: '幫他搬家。' }, { ja: '仕事{しごと}を手伝{てつだ}う。', zh: '協助工作。' }], dictionary_definition: ['(1) 幫忙；協助；輔助。對別人的工作等出力或出力。', '(2) 因素湊巧；再加之。'] },
    { dictionary: '働く', reading: 'はたらく', meaning: 'to work', meaning_zh: '工作', type: 'godan', group: 'く', level: 'N4', transitivity: 'intransitive', context: { ja: '会社{かいしゃ}で', zh: '在公司', en: 'at the company' }, native_examples: [{ ja: '一{いち}日{にち}8時間{はちじかん}働{はたら}く。', zh: '一天工作八小時。' }, { ja: '彼{かれ}は頭{あたま}のよく働{はたら}く人{ひと}だ。', zh: '他是個腦筋轉得快（善於動腦）的人。' }, { ja: '車{くるま}の工場{こうじょう}で働{はたら}く。', zh: '在汽車工廠工作。' }], dictionary_definition: ['(1) 工作；勞動；幹活。進行生產或業務活動。', '(2) 大腦活動；起作用。', '(3) 幹（壞事）；行（惡）。'] },
    { dictionary: '探す', reading: 'さがす', meaning: 'to look for', meaning_zh: '尋找', type: 'godan', group: 'す', level: 'N4', transitivity: 'transitive', context: { ja: '鍵{かぎ}を', zh: '鑰匙', en: 'keys' }, native_examples: [{ ja: '鍵{かぎ}を探{さが}しています。', zh: '我在找鑰匙。' }, { ja: '仕事先{しごとさき}を探{さが}す。', zh: '尋找工作地點。' }, { ja: '部屋{へや}の中{なか}をよく探{さが}した。', zh: '仔細找過房間了。' }], dictionary_definition: ['(1) 尋找；搜尋；尋求。為了找到某人、某物或資訊而努力。'] },
    { dictionary: '笑う', reading: 'わらう', meaning: 'to laugh/smile', meaning_zh: '笑', type: 'godan', group: 'う', level: 'N4', transitivity: 'intransitive', context: { ja: '大声{おおごえ}で', zh: '大聲', en: 'loudly' }, native_examples: [{ ja: '彼女{かのじょ}はにっこりと笑{わら}った。', zh: '她微微地笑了。' }, { ja: '大声{おおごえ}で笑{わら}う。', zh: '大聲地笑。' }, { ja: '笑{わら}うことは、心{こころ}の健康{けんこう}に良{よ}い。', zh: '笑對心理健康有益。' }], dictionary_definition: ['(1) 笑。因高興或覺得有趣而露出表情或發出聲音。', '(2) 嘲笑；譏笑。', '(3) 果實成熟裂開。'] },
    { dictionary: '泣く', reading: 'なく', meaning: 'to cry', meaning_zh: '哭', type: 'godan', group: 'く', level: 'N4', transitivity: 'intransitive', context: { ja: '感動{かんどう}して', zh: '因為感動而', en: 'moved to tears' }, native_examples: [{ ja: '赤ちゃんが泣{な}く。', zh: '嬰兒哭了。' }, { ja: '彼女{かのじょ}は突然{とつぜん}泣{な}き出した。', zh: '她突然哭了起來。' }, { ja: '喜{よろこ}びに泣{な}いた。', zh: '喜極而泣。' }], dictionary_definition: ['(1) 哭；流淚。指因痛苦、悲傷或感動流淚。', '(2) 鳥、獸、昆蟲鳴叫。', '(3) 感到困惑、懊悔。'] },
    { dictionary: '怒る', reading: 'おこる', meaning: 'to get angry', meaning_zh: '生氣', type: 'godan', group: 'る', level: 'N4', transitivity: 'intransitive', context: { ja: 'ひどく', zh: '非常', en: 'furiously' }, native_examples: [{ ja: '彼{かれ}はすぐ怒{おこ}る。', zh: '他馬上就會生氣（很容易生氣）。' }, { ja: '僕{ぼく}はひどく怒{おこ}った。', zh: '我很生氣。' }, { ja: '先生{せんせい}に怒{おこ}られた。', zh: '被老師責備了（被罵了）。' }], dictionary_definition: ['(1) 生氣；發火；憤怒。因不滿或被冒犯而產生憤怒情緒。', '(2) 責備；訓斥；申斥（如前輩對後輩）。'] },
    { dictionary: '信じる', reading: 'しんじる', meaning: 'to believe/trust', meaning_zh: '相信', type: 'ichidan', level: 'N4', transitivity: 'transitive', context: { ja: '未来{みらい}を', zh: '未來', en: 'the future' }, native_examples: [{ ja: '君{きみ}なら成功{せいこう}すると信{しん}じている。', zh: '我相信你一定會成功。' }, { ja: '自分自身{じぶんじしん}を信{しん}じる。', zh: '相信你自己。' }, { ja: '彼{かれ}の言{い}うことを信{しん}じる。', zh: '相信他所說的話。' }], dictionary_definition: ['(1) 相信；認定為事實。', '(2) 信任；信賴。認為對方不會欺騙。', '(3) 信仰（宗教、理論等）。'] },
    { dictionary: '考える', reading: 'かんがえる', meaning: 'to think/consider', meaning_zh: '思考', type: 'ichidan', level: 'N4', transitivity: 'transitive', context: { ja: '方法{ほうほう}を', zh: '方法', en: 'a way' }, native_examples: [{ ja: '下{した}を向{む}いてじっと考{かんが}える。', zh: '低著頭靜靜地思考。' }, { ja: '将来{しょうらい}のことを考{かんが}える。', zh: '考慮將來的事情。' }, { ja: 'どうすれば良{よ}いか考{かんが}えてください。', zh: '請想一想該怎麼辦。' }], dictionary_definition: ['(1) 思考；思索；考慮。運用腦力對事物分析、判斷、推理。', '(2) 研究；想出（如想方法）。', '(3) 認為；預測。'] },
    { dictionary: '着る', reading: 'きる', meaning: 'to wear', meaning_zh: '穿', type: 'ichidan', level: 'N4', transitivity: 'transitive', context: { ja: 'スーツを', zh: '西裝', en: 'a suit' }, native_examples: [{ ja: '白{しろ}い服{ふく}を着{き}る。', zh: '穿白色的衣服。' }, { ja: '和服{わふく}を着{き}ている。', zh: '穿著和服。' }, { ja: '新{あたら}しい洋服{ようふく}を着{き}て出{で}かける。', zh: '穿著新衣服出門。' }], dictionary_definition: ['(1) 穿；著。將衣服、飾品等穿在身上。', '(2) 承擔（罪名、恩情等）。'] },
    { dictionary: '脱ぐ', reading: 'ぬぐ', meaning: 'to take off', meaning_zh: '脫', type: 'godan', group: 'ぐ', level: 'N4', transitivity: 'transitive', context: { ja: '靴{くつ}を', zh: '鞋子', en: 'shoes' }, native_examples: [{ ja: '玄関{げんかん}で靴{くつ}を脱{ぬ}ぐ。', zh: '在玄關脫鞋。' }, { ja: '帽子{ぼうし}を脱{ぬ}ぐ。', zh: '脫掉（摘掉）帽子。' }, { ja: '上着{うわぎ}を脱{ぬ}いでリラックスする。', zh: '脫掉外套放鬆一下。' }], dictionary_definition: ['(1) 脫下；摘掉。去掉身上穿戴的衣物、鞋帽等。'] },
    { dictionary: '晴れる', reading: 'はれる', meaning: 'to clear up', meaning_zh: '晴朗', type: 'ichidan', level: 'N4', transitivity: 'intransitive', context: { ja: '空{そら}が', zh: '天空', en: 'the sky' }, native_examples: [{ ja: '明日{あした}は晴{は}れるでしょうか。', zh: '明天會放晴嗎？' }, { ja: '空{そら}がきれいに晴{は}れ渡{わた}っている。', zh: '天空一片晴朗。' }, { ja: '疑{うたが}いが晴{は}れる。', zh: '疑慮消散。' }], dictionary_definition: ['(1) 晴朗；放晴；消散。雲霧散去，露出晴空。', '(2) （疑慮、鬱悶等）消失；消釋。'] },
    { dictionary: '曇る', reading: 'くもる', meaning: 'to become cloudy', meaning_zh: '變陰天', type: 'godan', group: 'る', level: 'N4', transitivity: 'intransitive', context: { ja: '空{そら}が', zh: '天空', en: 'the sky' }, native_examples: [{ ja: '明日{あした}は曇{くも}りになるかもしれない。', zh: '明天也許會變陰天。' }, { ja: '熱気{ねっき}で鏡{かがみ}が曇{くも}る。', zh: '熱氣使鏡子變得朦朧（模糊）。' }, { ja: '表情{ひょうじょう}が曇{くも}る。', zh: '表情變得陰沈（憂鬱）。' }], dictionary_definition: ['(1) 陰天；多雲。天空被雲遮蔽。', '(2) 模糊；朦朧。器物表面被水氣、灰塵等覆蓋。', '(3) 憂鬱；不開朗。'] },
    { dictionary: '直す', reading: 'なおす', meaning: 'to fix', meaning_zh: '修理', type: 'godan', group: 'す', level: 'N4', transitivity: 'transitive', context: { ja: '時計{とけい}を', zh: '時鐘', en: 'the clock' }, native_examples: [{ ja: 'カメラを直{なお}す。', zh: '修理相機。' }, { ja: '間違いを直{なお}す。', zh: '改正錯誤。' }, { ja: '気分{きぶん}を直{なお}す。', zh: '恢復心情。' }], dictionary_definition: ['(1) 修理；修復。將損壞的東西恢復原狀。', '(2) 修改；改正；訂正。將錯誤或不適當的狀態改好。', '(3) 改變；轉換。', '(4) 作為補助動詞表示重新做（〜し直す）。'] },
    { dictionary: '治る', reading: 'なおる', meaning: 'to be cured', meaning_zh: '治好', type: 'godan', group: 'る', level: 'N4', transitivity: 'intransitive', context: { ja: '病気{びょうき}が', zh: '病', en: 'illness' }, native_examples: [{ ja: '風邪{かぜ}が治{なお}る。', zh: '感冒好了。', }, { ja: '傷{きず}が早{はや}く治{なお}る。', zh: '傷口很快就癒合。', }, { ja: 'この病気{びょうき}はいつ治{なお}るのだろうか。', zh: '這種病什麼時候能治好呢？' }], dictionary_definition: ['(1) 痊癒；治好。疾病或傷口恢復健康狀態。', '(2) 故障修好；復原（多用自動詞形式）。'] },

    // N3 Verbs
    { dictionary: '超える', reading: 'こえる', meaning: 'to exceed', meaning_zh: '超過', type: 'ichidan', level: 'N3', transitivity: 'intransitive', context: { ja: '国境{こっきょう}を', zh: '國境', en: 'the border' }, native_examples: [{ ja: '予算{よさん}を超{こ}える。', zh: '超出預算。' }, { ja: '期待{きたい}を超{こ}える。', zh: '超出期待。' }, { ja: '人口{じんこう}が100万人{ひゃくまんにん}を超{こ}えた。', zh: '人口超過了100萬人。' }], dictionary_definition: ['(1) 超越；超過；超出。指數量、基準、限度或能力上超過某個水平。'] },
    { dictionary: '加える', reading: 'くわえる', meaning: 'to add', meaning_zh: '增加/加上', type: 'ichidan', level: 'N3', transitivity: 'transitive', context: { ja: '２に３を', zh: '2加3', en: '3 to 2' }, native_examples: [{ ja: '2に3を加{くわ}えると5になる。', zh: '二加三等於五。' }, { ja: 'スープに塩{しお}を加{くわ}える。', zh: '往湯裡加鹽。' }, { ja: '新しいメンバーを加{くわ}える。', zh: '增加新成員。' }], dictionary_definition: ['(1) 增加；添加。在原有的基礎上再放入、加上。', '(2) 附加；加上（如加上註解）。', '(3) 施加（如施加壓力、速度、力量等）。', '(4) 包含；列入。'] },
    { dictionary: '比べる', reading: 'くらべる', meaning: 'to compare', meaning_zh: '比較', type: 'ichidan', level: 'N3', transitivity: 'transitive', context: { ja: '機能{きのう}を', zh: '功能', en: 'functions' }, native_examples: [{ ja: '去年{きょねん}と比{くら}べて、今年は暑{あつ}い。', zh: '與去年相比，今年很熱。' }, { ja: 'AとBの性能{せいのう}を比{くら}べる。', zh: '比較A和B的性能。' }, { ja: '背{せ}を比{くら}べる。', zh: '比高矮。' }], dictionary_definition: ['(1) 比較；對比。將兩個或以上的事物放在一起辨別異同。', '(2) 較量；競爭。比試高低。'] },
    { dictionary: '守る', reading: 'まもる', meaning: 'to protect/keep', meaning_zh: '保護/遵守', type: 'godan', group: 'る', level: 'N3', transitivity: 'transitive', context: { ja: '約束{やくそく}を', zh: '約定', en: 'a promise' }, native_examples: [{ ja: '家族{かぞく}を守{まも}る。', zh: '保護家人。' }, { ja: '規則{きそく}を守{まも}る。', zh: '遵守規則。' }, { ja: '時間{じかん}を守{まも}ってください。', zh: '請遵守時間（準時）。' }], dictionary_definition: ['(1) 保護；保衛；防護。使免受侵害或損害。', '(2) 遵守；信守。不違反規則、法律、約定等。', '(3) 看守；守衛。'] },
    { dictionary: '殺す', reading: 'ころす', meaning: 'to kill', meaning_zh: '殺', type: 'godan', group: 'す', level: 'N3', transitivity: 'transitive', context: { ja: '虫{むし}を', zh: '昆蟲', en: 'a bug' }, native_examples: [{ ja: '害虫{がいちゅう}を殺{ころ}す。', zh: '殺死害蟲。' }, { ja: '人命{じんめい}を殺{ころ}さない。', zh: '不殺害人命。' }, { ja: '感情{かんじょう}を殺{ころ}す。', zh: '壓抑感情。' }], dictionary_definition: ['(1) 殺；殺死；弄死。結束生命。', '(2) 扼殺；抑制；壓抑（如抑制感情、聲音等）。', '(3) 使消亡；使無效。'] },
    { dictionary: '戦う', reading: 'たたかう', meaning: 'to fight', meaning_zh: '戰鬥', type: 'godan', group: 'う', level: 'N3', transitivity: 'intransitive', context: { ja: '敵{てき}と', zh: '與敵人', en: 'with the enemy' }, native_examples: [{ ja: '敵{てき}と戦{たたか}う。', zh: '與敵人戰鬥。' }, { ja: '優勝{ゆうしょう}をかけて戦{たたか}う。', zh: '為了爭奪冠軍而戰。' }, { ja: '病気{びょうき}と戦{たたか}う。', zh: '與疾病抗爭。' }], dictionary_definition: ['(1) 戰鬥；戰爭。指使用武器或武力衝突。', '(2) 競爭；比賽。指能力、技術的較量。', '(3) 鬥爭；抗爭。指與困難、疾病或不公義的事物對抗。'] },
    { dictionary: '負ける', reading: 'まける', meaning: 'to lose', meaning_zh: '輸', type: 'ichidan', level: 'N3', transitivity: 'intransitive', context: { ja: '勝負{しょうぶ}に', zh: '勝負', en: 'the match' }, native_examples: [{ ja: '試合{しあい}に負{ま}ける。', zh: '比賽輸了。' }, { ja: '自分{じぶん}に負{ま}けない。', zh: '不要輸給自己。' }, { ja: '値段{ねだん}を負{ま}けてもらう。', zh: '讓對方減價（算便宜一點）。' }], dictionary_definition: ['(1) 輸；失敗；被擊敗。在勝負、競爭中處於下風。', '(2) 屈服；經受不住（如誘惑、壓力等）。', '(3) （單價）減價；讓價。'] },
    { dictionary: '勝つ', reading: 'かつ', meaning: 'to win', meaning_zh: '贏', type: 'godan', group: 'つ', level: 'N3', transitivity: 'intransitive', context: { ja: '最後{さいご}に', zh: '最後', en: 'in the end' }, native_examples: [{ ja: '敵{てき}に勝{か}つ。', zh: '戰勝敵人。' }, { ja: '試合{しあい}に勝{か}って喜{よろこ}ぶ。', zh: '贏得比賽感到高興。' }, { ja: '官司{かんし}に勝{か}つ。', zh: '打贏官司。' }], dictionary_definition: ['(1) 贏；勝利；戰勝。在勝負、競爭中獲勝。', '(2) 勝過；優於。性能或特徵更出色。'] },
    { dictionary: '選ぶ', reading: 'えらぶ', meaning: 'to choose', meaning_zh: '選擇', type: 'godan', group: 'ぶ', level: 'N3', transitivity: 'transitive', context: { ja: '答{こた}えを', zh: '答案', en: 'the answer' }, native_examples: [{ ja: '正{ただ}しい答{こた}えを選{えら}ぶ。', zh: '選擇正確的答案。' }, { ja: 'よい品{しな}を選{えら}ぶ。', zh: '挑選好的商品。' }, { ja: '自分{じぶん}の道{みち}を自分{じぶん}で選{えら}ぶ。', zh: '自己的路自己選。' }], dictionary_definition: ['(1) 選擇；挑選；選取。從多個對象中挑出符合條件的一個或多個。', '(2) 選舉。'] },
    { dictionary: '喜ぶ', reading: 'よろこぶ', meaning: 'to be happy', meaning_zh: '高興', type: 'godan', group: 'ぶ', level: 'N3', transitivity: 'intransitive', context: { ja: '結果{けっか}に', zh: '對結果', en: 'with the result' }, native_examples: [{ ja: '合格{ごうかく}を喜{よろこ}ぶ。', zh: '為合格感到高興。' }, { ja: '贈り物{おくりもの}を喜{よろこ}ぶ。', zh: '為收到禮物感到高興。' }, { ja: '彼{かれ}はなんでも喜{よろこ}んで引き受{ひきう}ける。', zh: '他無論什麼事都欣然接受。' }], dictionary_definition: ['(1) 高興；歡喜；喜悅。感到愉快、滿足。', '(2) 欣然接受；歡迎（如某個提議）。'] },
    { dictionary: '増える', reading: 'ふえる', meaning: 'to increase', meaning_zh: '增加', type: 'ichidan', level: 'N3', transitivity: 'intransitive', context: { ja: '体重{たいじゅう}が', zh: '體重', en: 'weight' }, native_examples: [{ ja: '人口{じんこう}が増{ふ}える。', zh: '人口增加。' }, { ja: '貯金{ちょきん}が増{ふ}える。', zh: '存款增加。' }, { ja: '水{みず}かさが増{ふ}えた。', zh: '水位升高了。' }], dictionary_definition: ['(1) 增加；增多。指數量、分量或程度變多。'] },
    { dictionary: '減る', reading: 'へる', meaning: 'to decrease', meaning_zh: '減少', type: 'godan', group: 'る', level: 'N3', transitivity: 'intransitive', context: { ja: '人口{じんこう}が', zh: '人口', en: 'the population' }, native_examples: [{ ja: '体重{たいじゅう}が3キロ減{へ}った。', zh: '體重減輕了三公斤。' }, { ja: '収入{しゅうにゅう}が減{へ}って困{こま}っている。', zh: '收入減少感到困擾。' }, { ja: '腹{はら}が減{へ}った。', zh: '肚子餓了。' }], dictionary_definition: ['(1) 減少；變少；下降。數量、程度等變低。', '(2) 磨損；磨去（如鞋底磨損）。', '(3) 肚子餓（用於腹が減る）。'] },
    { dictionary: '変わる', reading: 'かわる', meaning: 'to change', meaning_zh: '改變', type: 'godan', group: 'る', level: 'N3', transitivity: 'intransitive', context: { ja: '季節{きせつ}が', zh: '季節', en: 'the season' }, native_examples: [{ ja: '季節{きせつ}が変{か}わる。', zh: '季節變化。' }, { ja: '考えが変{か}わる。', zh: '想法改變。' }, { ja: '地域{ちいき}によって習慣{しゅうかん}が変{か}わる。', zh: '習慣因地區而異。' }], dictionary_definition: ['(1) 改變；變化；變動。變成與以前不同的狀態。', '(2) 更替；被更換（如值班更替）。', '(3) 不同；特別（如変わった人）。'] },
    { dictionary: '頼む', reading: 'たのむ', meaning: 'to request/ask', meaning_zh: '請求', type: 'godan', group: 'む', level: 'N3', transitivity: 'transitive', context: { ja: '仕事{しごと}を', zh: '工作', en: 'a job' }, native_examples: [{ ja: '母{はは}に留守番{るすばん}を頼{たの}む。', zh: '拜託母親看家。' }, { ja: 'タクシーを頼{たの}んでください。', zh: '請叫一輛計程車。' }, { ja: 'この荷物{にもつ}を頼{たの}みます。', zh: '這件行李拜託你了。' }], dictionary_definition: ['(1) 請求；拜託；託付。希望對方為自己做某事。', '(2) 委託；委派（如託人辦理手續）。', '(3) 依靠；信賴。'] },
    { dictionary: '断る', reading: 'ことわる', meaning: 'to refuse/decline', meaning_zh: '拒絕', type: 'godan', group: 'る', level: 'N3', transitivity: 'transitive', context: { ja: '誘{さそ}いを', zh: '邀請', en: 'the invitation' }, native_examples: [{ ja: '人{ひと}の頼{たの}みを断{ことわ}る。', zh: '拒絕別人的請求。' }, { ja: '誘{さそ}いを断{ことわ}る。', zh: '拒絕邀請。' }, { ja: '返品{へんぴん}はお断{ことわ}りしています。', zh: '謝絕退貨。' }], dictionary_definition: ['(1) 拒絕；推辭；謝絕。不接受對方的請求、邀請等。', '(2) 事先告知；預先說明（如請假、預告）。', '(3) 禁止（如謝絕參觀）。'] },
    { dictionary: '育てる', reading: 'そだてる', meaning: 'to raise/bring up', meaning_zh: '養育/培育', type: 'ichidan', level: 'N3', transitivity: 'transitive', context: { ja: '子供{こども}を', zh: '孩子', en: 'children' }, native_examples: [{ ja: '子{こ}どもを立派{りっぱ}に育{そだ}てる。', zh: '把孩子撫養成人。' }, { ja: '花{はな}を育{そだ}てるのが好{す}きだ。', zh: '喜歡培育花草。' }, { ja: '弟子{でし}を育{そだ}てる。', zh: '培養徒弟。' }], dictionary_definition: ['(1) 養育；撫養；培育（人、動植物）。使其成長。', '(2) 培養；教育（人才、能力等）。'] },
    { dictionary: '助ける', reading: 'たすける', meaning: 'to help/save', meaning_zh: '幫助/救助', type: 'ichidan', level: 'N3', transitivity: 'transitive', context: { ja: '困{こま}っている人を', zh: '困擾的人', en: 'someone in trouble' }, native_examples: [{ ja: '困{こま}っている人を助{たす}ける。', zh: '幫助有困難的人。' }, { ja: '怪我人{けがにん}を助{たす}ける。', zh: '救助受傷的人。' }, { ja: '父{ちち}の仕事{しごと}を助{たす}ける。', zh: '協助父親的工作。' }], dictionary_definition: ['(1) 幫助；協助；支撐。對他人出力或資助。', '(2) 救助；救命。使生命或危急狀態脫險。'] },
    { dictionary: '受ける', reading: 'うける', meaning: 'to receive', meaning_zh: '接受', type: 'ichidan', level: 'N3', transitivity: 'transitive', context: { ja: '影響{えいきょう}を', zh: '影響', en: 'influence' }, native_examples: [{ ja: '説明{せつめい}を受{う}ける。', zh: '聽取說明。' }, { ja: '試験{しけん}を受{う}ける。', zh: '參加考試。' }, { ja: '恩恵{おんけい}を受{う}ける。', zh: '受惠。' }], dictionary_definition: ['(1) 接受；收到（東西、提議等）。', '(2) 遭受；受到（損害、影響等）。', '(3) 聽從；承擔（工作等）。', '(4) 參加（考試、面試等）。', '(5) 受到歡迎；受好評。'] },
    { dictionary: '落ちる', reading: 'おちる', meaning: 'to fall/drop', meaning_zh: '掉落', type: 'ichidan', level: 'N3', transitivity: 'intransitive', context: { ja: '木{き}の葉{は}が', zh: '樹葉', en: 'leaves' }, native_examples: [{ ja: '木{き}の葉{は}が落{お}ちる。', zh: '樹葉落下。' }, { ja: '試験{しけん}に落{お}ちる。', zh: '考試不及格（落榜）。' }, { ja: 'この布{ぬの}は色{いろ}が落{お}ちる。', zh: '這塊布會褪色。' }], dictionary_definition: ['(1) 落下；掉落；墜落。從高處移向低處。', '(2) （考試、競選等）不合格；落選。', '(3) 褪色；洗掉。', '(4) 遺漏；漏掉。'] },
    { dictionary: '届く', reading: 'とどく', meaning: 'to reach/be delivered', meaning_zh: '送達/達到', type: 'godan', group: 'く', level: 'N3', transitivity: 'intransitive', context: { ja: '荷物{にもつ}が', zh: '包裹', en: 'the package' }, native_examples: [{ ja: '荷物{にもつ}が届{とど}く。', zh: '包裹送達。' }, { ja: '目標{もくひょう}に届{とど}く。', zh: '達到目標。' }, { ja: '声{こえ}が届{とど}かない。', zh: '聲音傳達不到。' }], dictionary_definition: ['(1) 送達；抵達；傳到。物品或訊息到達目的地。', '(2) 夠得著。達到（某個範圍或高度）。', '(3) 達到（願望、目標）。', '(4) 周到；細緻（如気配りが届く）。'] },
    { dictionary: '通う', reading: 'かよう', meaning: 'to commute', meaning_zh: '通勤', type: 'godan', group: 'う', level: 'N3', transitivity: 'intransitive', context: { ja: '学校{がっこう}に', zh: '去上學', en: 'to school' }, native_examples: [{ ja: '毎日{まいにち}学校{がっこう}に通{かよ}う。', zh: '每天去學校。' }, { ja: '電車{でんしゃ}で会社{かいしゃ}に通{かよ}っている。', zh: '搭電車去公司上班。' }, { ja: '彼{かれ}とは心{こころ}が通{かよ}い合{あ}っている。', zh: '他和我心靈相通。' }], dictionary_definition: ['(1) 通勤；通學；定期往返（某處）。', '(2) 通向；連接。', '(3) 心靈相通；流通。'] },

    // N2 Verbs
    { dictionary: '甘やかす', reading: 'あまやかす', meaning: 'to spoil', meaning_zh: '溺愛', type: 'godan', group: 'す', level: 'N2', transitivity: 'transitive', context: { ja: '子供を', zh: '小孩', en: 'the child' }, native_examples: [{ ja: '子どもをあまやかしてだめにした', zh: '把孩子嬌慣壞了。' }, { ja: 'あまやかされて育つ', zh: '慣大了。' }], dictionary_definition: ['對孩子或部下不嚴格，容許其肆意行動。寵。慣。嬌慣。嬌縱。'] },
    { dictionary: '疑う', reading: 'うたがう', meaning: 'to doubt', meaning_zh: '懷疑', type: 'godan', group: 'う', level: 'N2', transitivity: 'transitive', context: { ja: '目を', zh: '眼睛', en: 'my eyes' }, native_examples: [{ ja: '自分の耳(目を)うたがう', zh: '懷疑自己的耳朵(眼睛)。' }, { ja: '新聞記事をうたがう', zh: '懷疑新聞報導(的真實性)。' }], dictionary_definition: ['(1) 覺得不確實。覺得奇怪。懷疑。', '(2) 對於壞事，總覺得恐怕是那樣。懷疑。'] },
    { dictionary: '敬う', reading: 'うやまう', meaning: 'to respect', meaning_zh: '尊敬', type: 'godan', group: 'う', level: 'N2', transitivity: 'transitive', context: { ja: '神を', zh: '神', en: 'God' }, native_examples: [{ ja: '師とうやまう', zh: '敬爲師長。' }, { ja: '老人をうやまう', zh: '尊敬老人。' }], dictionary_definition: ['認爲尊貴，而慎重對待。恭敬。尊敬。'] },
    { dictionary: '占う', reading: 'うらなう', meaning: 'to fortune-tell', meaning_zh: '占卜', type: 'godan', group: 'う', level: 'N2', transitivity: 'transitive', context: { ja: '運勢を', zh: '運勢', en: 'fortune' }, native_examples: [{ ja: '運勢をうらなう', zh: '算命。' }, { ja: '吉凶をうらなう', zh: '占卜吉凶。' }], dictionary_definition: ['(1) 根據某種前兆推測人的命運。占卜。算命。', '(2) 根據事物的預兆來判斷其發展趨勢和結果。預測。'] },
    { dictionary: '補う', reading: 'おぎなう', meaning: 'to compensate', meaning_zh: '補償', type: 'godan', group: 'う', level: 'N2', transitivity: 'transitive', context: { ja: '欠点を', zh: '缺點', en: 'defects' }, native_examples: [{ ja: '欠損をおぎなう', zh: '彌補虧損。' }, { ja: '欠員をおぎなう', zh: '彌補缺額。' }], dictionary_definition: ['彌補不足的或受損害的部分。補充。彌補。'] },
    { dictionary: '恐れる', reading: 'おそれる', meaning: 'to fear', meaning_zh: '恐懼', type: 'ichidan', level: 'N2', transitivity: 'transitive', context: { ja: '失敗を', zh: '失敗', en: 'failure' }, native_examples: [{ ja: 'けものをおそれる', zh: '怕野獸。' }, { ja: '何もおそれない', zh: '無所畏懼。' }], dictionary_definition: ['(1) 害怕。感到恐懼。怕。懼怕。', '(2) 擔心是否要發生壞事。怕。擔心。', '(3) 感到敬畏、惶恐。敬畏。'] },
    { dictionary: '抱える', reading: 'かかえる', meaning: 'to hold', meaning_zh: '抱/承擔', type: 'ichidan', level: 'N2', transitivity: 'transitive', context: { ja: '荷物を', zh: '行李', en: 'luggage' }, native_examples: [{ ja: '包みをかかえる', zh: '夾着包。' }, { ja: '病人をかかえる', zh: '家裏有病人。' }], dictionary_definition: ['(1) 用胳膊抱着或夾着東西。抱。夾。', '(2) 擔負必須予以照料的事物。', '(3) 僱用。陳舊的詞。'] },
    { dictionary: '震える', reading: 'ふるえる', meaning: 'to shiver', meaning_zh: '發抖', type: 'ichidan', level: 'N2', transitivity: 'intransitive', context: { ja: '寒さで', zh: '因為冷', en: 'from cold' }, native_examples: [{ ja: '大地がふるえる', zh: '大地顫動。' }, { ja: '声がふるえる', zh: '聲音顫抖。' }], dictionary_definition: ['(1) 物體短促而連續地震動。顫動。震動。', '(2) 由於寒冷、恐懼或疾病等，身體的一部分短促地抖動。顫抖。發抖。哆嗦。'] },
    { dictionary: '優れる', reading: 'すぐれる', meaning: 'to excel/be superior', meaning_zh: '優秀/出色', type: 'ichidan', level: 'N2', transitivity: 'intransitive', context: { ja: '性能{せいのう}が', zh: '性能', en: 'performance' }, native_examples: [{ ja: '性能{せいのう}が優{すぐ}れている。', zh: '性能優越。' }, { ja: '健康{けんこう}が優{すぐ}れない。', zh: '身體欠安（不舒服）。' }, { ja: '成績{せいせき}が優{すぐ}れている学生{がくせい}。', zh: '成績優秀的學生。' }], dictionary_definition: ['(1) 優秀；出色；優越。指在能力、品質或狀態上勝過他人或一般水平。', '(2) （常以「優れない」的形式）不舒服；欠安。'] },
    { dictionary: '恵まれる', reading: 'めぐまれる', meaning: 'to be blessed', meaning_zh: '受惠', type: 'ichidan', level: 'N2', transitivity: 'intransitive', context: { ja: '才能に', zh: '天賦', en: 'with talent' }, native_examples: [{ ja: '日光にめぐまれる', zh: '陽光充足。' }, { ja: '天気にめぐまれる', zh: '遇上好天氣。' }], dictionary_definition: ['(1) 由於自然的照顧，享受到好的事物。遇上。豐富。充足。', '(2) 幸運。幸福。'] },
    { dictionary: '頼る', reading: 'たよる', meaning: 'to rely on', meaning_zh: '依賴', type: 'godan', group: 'る', level: 'N2', transitivity: 'intransitive', context: { ja: '親に', zh: '父母', en: 'parents' }, native_examples: [{ ja: '親にたよる', zh: '依靠父母。' }, { ja: '兄をたよって上京する', zh: '靠哥哥的關係進京。' }], dictionary_definition: ['指望能夠成爲依靠的力量。靠。依靠。藉助。'] },
    { dictionary: '努める', reading: 'つとめる', meaning: 'to endeavor/strive', meaning_zh: '努力/盡力', type: 'ichidan', level: 'N2', transitivity: 'intransitive', context: { ja: '解決{かいけつ}に', zh: '解決', en: 'to solve' }, native_examples: [{ ja: '問題{もんだい}の解決{かいけつ}に努{つと}める。', zh: '努力解決問題。' }, { ja: 'サービス向上{こうじょう}に努{つと}めます。', zh: '我們會努力提升服務。' }, { ja: '冷静{れいせい}を保{たも}つよう努{つと}める。', zh: '努力保持冷靜。' }], dictionary_definition: ['(1) 努力；盡力；勤奮。為了達成某個目標而盡心盡力。'] },
    { dictionary: '務める', reading: 'つとめる', meaning: 'to serve/play a role', meaning_zh: '擔任/擔當', type: 'ichidan', level: 'N2', transitivity: 'intransitive', context: { ja: '議長{ぎちょう}を', zh: '議長', en: 'chairman' }, native_examples: [{ ja: '司会{しかい}を務{つと}める。', zh: '擔任主持人。' }, { ja: '主役{しゅやく}を務{つと}める。', zh: '擔任主角。' }, { ja: '議長{ぎちょう}を務{つと}める。', zh: '擔任議長。' }], dictionary_definition: ['(1) 擔任；擔當；充任。指承擔某種職務或角色，並履行其職責。'] },
    { dictionary: '攻める', reading: 'せめる', meaning: 'to attack', meaning_zh: '攻擊', type: 'ichidan', level: 'N2', transitivity: 'transitive', context: { ja: '城を', zh: '城堡', en: 'the castle' }, native_examples: [{ ja: '城をせめる', zh: '攻城。' }, { ja: '敵軍がせめ寄せてきた', zh: '敵軍攻上來了。' }], dictionary_definition: ['(1) 向敵人或對手發起進攻。攻。攻打。攻擊。進攻。', '(2) 爲達到目的積極地施加影響。進攻。發動攻勢。'] },
    { dictionary: '眺める', reading: 'ながめる', meaning: 'to gaze', meaning_zh: '眺望', type: 'ichidan', level: 'N2', transitivity: 'transitive', context: { ja: '海を', zh: '海', en: 'the sea' }, native_examples: [{ ja: '古い写真をながめていると、いろいろのことが思い出される', zh: '凝視昔日的照片，想起各種往事。' }, { ja: '星をながめる', zh: '遙望星星。' }], dictionary_definition: ['(1) 好像心情被該事物吸引住似地，定睛地看。凝視。', '(2) 悠然地看遠處事物。遠眺。遠望。遙望。'] },
    { dictionary: '縮む', reading: 'ちぢむ', meaning: 'to shrink', meaning_zh: '縮水', type: 'godan', group: 'む', level: 'N2', transitivity: 'intransitive', context: { ja: 'セーターが', zh: '毛衣', en: 'sweater' }, native_examples: [{ ja: 'セーターがちぢむ', zh: '毛衣抽了。' }, { ja: '寿命がちぢむ', zh: '壽命縮短。' }], dictionary_definition: ['(1) 東西的長度變短。東西變小。縮。抽。縮短。縮小。', '(2) 由於緊張或恐懼而收縮。抽縮。惶恐。'] },
    { dictionary: '沈む', reading: 'しずむ', meaning: 'to sink', meaning_zh: '沉沒', type: 'godan', group: 'む', level: 'N2', transitivity: 'intransitive', context: { ja: '日が', zh: '太陽', en: 'the sun' }, native_examples: [{ ja: '船がしずむ', zh: '船沉了。' }, { ja: '日がしずむ', zh: '太陽落了。' }], dictionary_definition: ['(1) 向水中深處移動。沉。', '(2) 高處看到的物體向下方移動。落。', '(3) 因煩惱或擔心，精神不振。消沉。低沉。', '(4) 生活陷入慘境。沉淪。'] },
    { dictionary: '学ぶ', reading: 'まなぶ', meaning: 'to learn', meaning_zh: '學習', type: 'godan', group: 'ぶ', level: 'N2', transitivity: 'transitive', context: { ja: '歴史を', zh: '歷史', en: 'history' }, native_examples: [{ ja: '日本語をまなぶ', zh: '學習日語。' }, { ja: 'スキーをまなぶ', zh: '學滑雪。' }], dictionary_definition: ['(1) 接受教育。學。學習。', '(2) 求學。用功。學習。', '(3) 照榜樣學。學。學習。'] },
    { dictionary: '叫ぶ', reading: 'さけぶ', meaning: 'to shout', meaning_zh: '大叫', type: 'godan', group: 'ぶ', level: 'N2', transitivity: 'intransitive', context: { ja: '助けを', zh: '求救', en: 'for help' }, native_examples: [{ ja: '再軍備反対をさけぶ', zh: '大聲呼籲反對重新武裝。' }], dictionary_definition: ['(1) 大聲喊。喊。叫感。', '(2) 向社會大聲疾呼。呼籲。'] },
    { dictionary: '望む', reading: 'のぞむ', meaning: 'to desire', meaning_zh: '期望', type: 'godan', group: 'む', level: 'N2', transitivity: 'transitive', context: { ja: '平和を', zh: '和平', en: 'peace' }, native_examples: [{ ja: '平和をのぞむ', zh: '希望和平。' }, { ja: '心からのぞんでいる', zh: '從心裏盼望着。' }], dictionary_definition: ['(1) 希望能那樣。希望。期望。盼望。', '(2) 從遠處看。望。遙望。遠望。'] },

    // N1 Verbs
    { dictionary: '承る', reading: 'うけたまわる', meaning: 'to hear/receive/listen (humble)', meaning_zh: '承蒙/聽受/明白', type: 'godan', group: 'る', level: 'N1', transitivity: 'transitive', context: { ja: 'ご依頼{いらい}を', zh: '您的委託', en: 'your request' }, native_examples: [{ ja: 'ご意見{いけん}を承{うけたまわ}る。', zh: '聽取您的意見。' }, { ja: '返品{へんぴん}を承{うけたまわ}ることはできません。', zh: '我們無法辦理退貨。' }, { ja: '注文{ちゅうもん}を承{うけたまわ}りました。', zh: '已經受理了您的訂單。' }], dictionary_definition: ['(1) （「聞く」「受ける」「引き受ける」的謙譲語）聽候；接受；明白。', '(2) 承蒙；收受。', '(3) 繼承；接任。'] },
    { dictionary: '著す', reading: 'あらわす', meaning: 'to write/publish', meaning_zh: '著述/出版', type: 'godan', group: 'す', level: 'N1', transitivity: 'transitive', context: { ja: '本{ほん}を', zh: '著書', en: 'a book' }, native_examples: [{ ja: '自分{じぶん}の考{かんが}えを本{ほん}に著{あらわ}す。', zh: '將自己的想法著書立說。' }, { ja: '彼{かれ}は生涯{しょうがい}で多{おお}くの良書{りょうしょ}を著{あらわ}した。', zh: '他一生著述了許多好書。' }], dictionary_definition: ['(1) 著述；寫作；出版。指編寫書籍或文章並發表。'] },
    { dictionary: '促す', reading: 'うながす', meaning: 'to urge/prompt/stimulate', meaning_zh: '促使/提醒', type: 'godan', group: 'す', level: 'N1', transitivity: 'transitive', context: { ja: '注意{ちゅうい}を', zh: '注意', en: 'attention' }, native_examples: [{ ja: '成長{せいちょう}を促{うなが}す。', zh: '促進成長。' }, { ja: '返事{へんじ}を促{うなが}す。', zh: '催促答覆。' }, { ja: '注意{ちゅうい}を促{うなが}す。', zh: '提醒（促使）注意。' }], dictionary_definition: ['(1) 促使；促進；推動。加快事物進展。', '(2) 催促；提醒。使人採取某種行動。'] },
    { dictionary: '潤う', reading: 'うるおう', meaning: 'to be moist/prosper', meaning_zh: '濕潤/受惠', type: 'godan', group: 'う', level: 'N1', transitivity: 'intransitive', context: { ja: '家計{かけい}が', zh: '家計', en: 'household finances' }, native_examples: [{ ja: '恵{めぐ}みの雨{あめ}で大地{だいち}が潤{うるお}う。', zh: '及時雨滋潤了大。' }, { ja: '新商品{しんしょうひん}のヒットで、会社{かいしゃ}の財政{ざいせい}が潤{うるお}った。', zh: '隨新產品熱賣，公司的財政充裕了起來（受惠）。' }, { ja: '心{こころ}が潤{うるお}う。', zh: '心靈得到滋潤。' }], dictionary_definition: ['(1) 濕潤；滋潤。帶有水分。', '(2) 受惠；寬裕；繁榮。得到利益或恩澤。', '(3) 心靈充實。'] },
    { dictionary: '漂う', reading: 'ただよう', meaning: 'to drift/float', meaning_zh: '漂浮/洋溢', type: 'godan', group: 'う', level: 'N1', transitivity: 'intransitive', context: { ja: '香り{かおり}が', zh: '香氣', en: 'a fragrance' }, native_examples: [{ ja: '樹葉{きは}が湖面{こめん}に漂{ただよ}っている。', zh: '樹葉在湖面漂浮著。' }, { ja: 'コーヒーのいい香り{かおり}が漂{ただよ}ってくる。', zh: '飄過來咖啡的好香。' }, { ja: '不穏{ふおん}な空気{くうき}が漂{ただよ}う。', zh: '瀰漫著一股不安的氣氛。' }], dictionary_definition: ['(1) 漂浮；漂流。在水面或空中搖晃浮動。', '(2) 飄蕩；洋溢；瀰漫。香氣、氣氛等充滿空間。', '(3) 彷徨；流浪。'] },
    { dictionary: '繕う', reading: 'つくろう', meaning: 'to mend', meaning_zh: '修補', type: 'godan', group: 'う', level: 'N1', transitivity: 'transitive', context: { ja: '服を', zh: '衣服', en: 'clothes' }, native_examples: [{ ja: '着物のかぎざきをつくろう', zh: '修補衣服剮的口子。' }, { ja: '屋根をつくろって雨もりをなくす', zh: '修繕屋頂，防止漏雨。' }], dictionary_definition: ['(1) 修補衣服等的破綻。修補。修繕。', '(2) 爲了給人以良好的印象，使外表體面些。修飾。裝飾。裝。擺。', '(3) 隱瞞失敗和缺點等，當場巧妙地矇混過去。掩飾。遮掩。'] },
    { dictionary: '償う', reading: 'つぐなう', meaning: 'to compensate', meaning_zh: '補償/贖罪', type: 'godan', group: 'う', level: 'N1', transitivity: 'transitive', context: { ja: '罪{つみ}を', zh: '罪', en: 'sin' }, native_examples: [{ ja: '罪{つみ}を償{つぐな}う。', zh: '贖罪。' }, { ja: '損害{そんがい}を償{つぐな}う。', zh: '賠償損失。' }, { ja: '過{あやま}ちを償{つぐな}う。', zh: '彌補過失。' }], dictionary_definition: ['(1) 補償；賠償。彌補因自己的行為給他人造成的損失。', '(2) 贖罪。通過努力或犧牲來彌補過錯。'] },
    { dictionary: '養う', reading: 'やしなう', meaning: 'to support/cultivate', meaning_zh: '養育/培養', type: 'godan', group: 'う', level: 'N1', transitivity: 'transitive', context: { ja: '家族{かぞく}を', zh: '家人', en: 'family' }, native_examples: [{ ja: '家族{かぞく}を養{やしな}う。', zh: '養家。' }, { ja: '体力{たいりょく}を養{やしな}う。', zh: '培養體力。' }, { ja: '知識{ちしき}を養{やしな}う。', zh: '增長知識。' }], dictionary_definition: ['(1) 養育；撫養。照顧並使其成長。', '(2) 培養；養成。使其具備某種能力或習慣。', '(3) 滋養；保養。'] },
    { dictionary: '省みる', reading: 'かえりみる', meaning: 'to reflect on', meaning_zh: '反省', type: 'ichidan', level: 'N1', transitivity: 'transitive', context: { ja: '過去{かこ}を', zh: '過去', en: 'the past' }, native_examples: [{ ja: '過{あやま}ちを省{かえり}みる。', zh: '反省錯誤。' }, { ja: '過去{かこ}を省{かえり}みて、将来{しょうらい}の糧{かて}にする。', zh: '反思過去，作為將來的借鑒。' }], dictionary_definition: ['(1) 反省；回顧；反思。指回頭審視自己的行為或過去。'] },
    { dictionary: '顧みる', reading: 'かえりみる', meaning: 'to look back', meaning_zh: '回顧', type: 'ichidan', level: 'N1', transitivity: 'transitive', context: { ja: '過去{かこ}を', zh: '過去', en: 'the past' }, native_examples: [{ ja: '歴史{れきし}を顧{かえり}みる。', zh: '回顧歷史。' }, { ja: '顧{かえり}みて他{た}を言{い}う。', zh: '顧左右而言他。' }, { ja: '家庭{かてい}を顧{かえり}みない。', zh: '不顧家。' }], dictionary_definition: ['(1) 回頭看；回顧。', '(2) 顧慮；照顧；關心。', '(3) 回想。'] },
    { dictionary: '率いる', reading: 'ひきいる', meaning: 'to lead/head', meaning_zh: '率領', type: 'ichidan', level: 'N1', transitivity: 'transitive', context: { ja: 'チームを', zh: '團隊', en: 'the team' }, native_examples: [{ ja: '彼{かれ}は部下{ぶか}を率{ひき}いて出発{しゅっぱつ}した。', zh: '他帶領部下出發了。' }, { ja: '大軍{たいぐん}を率{ひき}いる。', zh: '率領大軍。' }, { ja: '抗戦期間{こうせんきかん}、彼{かれ}はこのチームを率{ひき}いた。', zh: '抗戰期間，他帶領過這支隊伍。' }], dictionary_definition: ['(1) 率領；帶領；統帥。站在團體的最前面引導。', '(2) 帶領（人）；伴隨。'] },
    { dictionary: '強いる', reading: 'しいる', meaning: 'to force/compel', meaning_zh: '強迫/強加', type: 'ichidan', level: 'N1', transitivity: 'transitive', context: { ja: '参加{さんか}を', zh: '參加', en: 'participation' }, native_examples: [{ ja: '人{ひと}に無理{むり}を強{し}いる。', zh: '強人所難。' }, { ja: '寄付{きふ}を強{し}いる。', zh: '強迫捐款。' }, { ja: '沈黙{ちんもく}を強{し}いる。', zh: '強迫沉默。' }], dictionary_definition: ['(1) 強迫；強加。不顧對方意願，強制其做某事。', '(2) 勉強；硬要。'] },
    { dictionary: '老いる', reading: 'おいる', meaning: 'to age/grow old', meaning_zh: '衰老/變老', type: 'ichidan', level: 'N1', transitivity: 'intransitive', context: { ja: '体{からだ}が', zh: '身體', en: 'body' }, native_examples: [{ ja: '人{ひと}は誰{だれ}でも老{お}いる。', zh: '人人都會變老。' }, { ja: '老{お}いてもなお盛{さか}ん。', zh: '老當益壯。' }, { ja: '老{お}いては子{こ}に従{したが}え。', zh: '年老應順從子女。' }], dictionary_definition: ['(1) 變老；衰老。年齡增長，身體機能衰退。', '(2) （事物）陳舊；老化。'] },
    { dictionary: '強まる', reading: 'つよまる', meaning: 'to become strong/increase', meaning_zh: '加強/增強', type: 'godan', group: 'る', level: 'N1', transitivity: 'intransitive', context: { ja: '風{かぜ}が', zh: '風', en: 'the wind' }, native_examples: [{ ja: '雨{あめ}が一段{いちだん}と強{つよ}まる。', zh: '雨勢進一步加強了。' }, { ja: '批判{ひはん}の声{こえ}が強{つよ}まる。', zh: '批判的聲音日益高漲。' }, { ja: '効果{こうか}が強{つよ}まる。', zh: '效果增強。' }], dictionary_definition: ['(1) 加強；增強；變強。程度或力量變大。'] },
    { dictionary: '強める', reading: 'つよめる', meaning: 'to strengthen/intensify', meaning_zh: '加強/強化', type: 'ichidan', level: 'N1', transitivity: 'transitive', context: { ja: '火{ひ}を', zh: '火', en: 'the fire' }, native_examples: [{ ja: '警戒{けいかい}を強{つよ}める。', zh: '加強警戒。' }, { ja: '語気{ごき}を強{つよ}める。', zh: '加重語氣。' }, { ja: '絆{きずな}を強{つよ}める。', zh: '加深絆。' }], dictionary_definition: ['(1) 加強；強化；使變強。人為地使程度或力量變大。'] },
    { dictionary: '弱まる', reading: 'よわまる', meaning: 'to weaken/subside', meaning_zh: '減弱/變弱', type: 'godan', group: 'る', level: 'N1', transitivity: 'intransitive', context: { ja: '勢{いきお}いが', zh: '勢頭', en: 'momentum' }, native_examples: [{ ja: '雨{あめ}が弱{よわ}まってきた。', zh: '雨勢變弱了。' }, { ja: '影響力{えいきょうりょく}が弱{よわ}まる。', zh: '影響力減弱。' }, { ja: '火{ひ}が弱{よわ}まる。', zh: '火勢變弱。' }], dictionary_definition: ['(1) 減弱；變弱。程度或力量變小。'] },
    { dictionary: '弱める', reading: 'よわめる', meaning: 'to weaken/turn down', meaning_zh: '使減弱/削弱', type: 'ichidan', level: 'N1', transitivity: 'transitive', context: { ja: '火{ひ}を', zh: '火', en: 'the fire' }, native_examples: [{ ja: '敵{てき}の勢力{せいりょく}を弱{よわ}める。', zh: '削弱敵人的勢力。' }, { ja: '語気{ごき}を弱{よわ}める。', zh: '放低語氣（減弱語氣）。' }, { ja: '火{ひ}を弱{よわ}める。', zh: '把火關小（減弱火勢）。' }], dictionary_definition: ['(1) 使減弱；削弱；放低。人為地使程度或力量變小。'] },
    { dictionary: '懲りる', reading: 'こりる', meaning: 'to learn a lesson', meaning_zh: '記取教訓/吃過苦頭', type: 'ichidan', level: 'N1', transitivity: 'intransitive', context: { ja: '失敗{しっぱい}に', zh: '對失敗', en: 'from failure' }, native_examples: [{ ja: '一度{いちど}の失敗{しっぱい}に懲{こ}りる。', zh: '因一次失敗而記取教訓（吃過苦頭）。' }, { ja: '彼{かれ}は何度{なんど}失敗{しっぱい}しても懲{こ}りない。', zh: '他無論失敗多少次都不知悔改（不記取教訓）。' }], dictionary_definition: ['(1) 記取教訓；吃過苦頭而不敢再嘗試。因之前的失敗或痛苦體驗而心生戒備。'] },
    { dictionary: '朽ちる', reading: 'くちる', meaning: 'to rot/decay', meaning_zh: '腐朽', type: 'ichidan', level: 'N1', transitivity: 'intransitive', context: { ja: '木{き}が', zh: '樹木', en: 'wood' }, native_examples: [{ ja: '朽{く}ちて壊{こわ}れそうな家{いえ}。', zh: '腐朽得快要倒塌的房子。' }, { ja: 'いつまでも朽{く}ちることのない名声{めいせい}。', zh: '永垂不朽的名聲。' }, { ja: '木{き}が朽{く}ちる。', zh: '木頭腐朽。' }], dictionary_definition: ['(1) 腐朽；腐爛。因腐爛而毀壞。', '(2) 埋沒；默默無聞地死去。', '(3) 永垂不朽（用於名聲等，常用否定式）。'] },
    { dictionary: '帯びる', reading: 'おびる', meaning: 'to wear/have characteristics', meaning_zh: '佩帶/帶有', type: 'ichidan', level: 'N1', transitivity: 'transitive', context: { ja: '熱{ねつ}を', zh: '熱', en: 'heat' }, native_examples: [{ ja: '勲章{くんしょう}を帯{お}びる。', zh: '佩帶勳章。' }, { ja: '剣{けん}を帯{お}びている。', zh: '佩帶著劍。' }, { ja: '赤{あか}みを帯{お}びた空{そら}。', zh: '帶有紅色的天空（霞光）。' }], dictionary_definition: ['(1) 佩帶；攜帶。將物品帶在身上。', '(2) 帶有；含有。具備某種性質、色彩、氣氛或成分。', '(3) 擔負；承擔。'] },
    { dictionary: '綻びる', reading: 'ほころびる', meaning: 'to come apart', meaning_zh: '綻開', type: 'ichidan', level: 'N1', transitivity: 'intransitive', context: { ja: '顔が', zh: '表情', en: 'face (smile)' }, native_examples: [{ ja: '着物がほころびる', zh: '衣服開線了。' }, { ja: '梅がほころびる', zh: '梅花綻開。' }, { ja: '高{たか}く評価{ひょうか}されて、顔{かお}が綻{ほころ}びる。', zh: '受到高度評價，臉上綻放出笑容。' }], dictionary_definition: ['(1) 綻開；開線。縫合處裂開。', '(2) （花蕾）綻放；初開。', '(3) （表情）緩和；露出笑容。'] },
    { dictionary: '滅びる', reading: 'ほろびる', meaning: 'to perish', meaning_zh: '滅亡', type: 'ichidan', level: 'N1', transitivity: 'intransitive', context: { ja: '国{くに}が', zh: '國家', en: 'the country' }, native_examples: [{ ja: '国{くに}が滅{ほろ}びる。', zh: '國家滅亡。' }, { ja: '悪{あく}はいつか滅{ほろ}びるものだ。', zh: '邪惡終究會滅亡。' }, { ja: '伝統文化{でんとうぶんか}が滅{ほろ}びつつある。', zh: '傳統文化正在逐漸消亡。' }], dictionary_definition: ['(1) 滅亡；消亡；敗落。指原本存在的勢力、家系、國家、物種等消失。'] },
    { dictionary: '葬る', reading: 'ほうむる', meaning: 'to bury/conceal', meaning_zh: '埋葬/掩蓋', type: 'godan', group: 'る', level: 'N1', transitivity: 'transitive', context: { ja: '闇{やみ}に', zh: '在黑暗中', en: 'in darkness' }, native_examples: [{ ja: '亡{な}き父{ちち}を墓{はか}に葬{ほうむ}る。', zh: '將亡父安葬在墓地。' }, { ja: '事件{じけん}を闇{やみ}に葬{ほうむ}る。', zh: '將事件暗中掩蓋。' }, { ja: '葬{ほうむ}り去{さ}る。', zh: '拋棄；忘卻。' }], dictionary_definition: ['(1) 埋葬；安葬。將遺體或遺骨放入墓穴。', '(2) 掩飾；掩蓋。不公開而隱瞞起來。', '(3) 拋棄；使不能再在社會上活動。'] },
    { dictionary: '奉る', reading: 'たてまつる', meaning: 'to offer/revere (humble)', meaning_zh: '奉獻/敬獻', type: 'godan', group: 'る', level: 'N1', transitivity: 'transitive', context: { ja: '神{かみ}を', zh: '神', en: 'god' }, native_examples: [{ ja: '神{かみ}に供え物{そなえもの}を奉{たてまつ}る。', zh: '向神敬獻供品。' }, { ja: '幣{ぬさ}を奉{たてまつ}る。', zh: '奉獻幣帛。' }, { ja: '会長{かいちょう}に奉{たてまつ}る。', zh: '抬舉（他）做會長。' }], dictionary_definition: ['(1) 奉獻；進獻。向神佛或長輩呈遞物品。', '(2) 抬舉；奉。形式上給予某種地位使其高興。', '(3) （作為補助動詞）恭敬地...。'] },
]

// Filter out imported verbs that are already in manual list (by dictionary form)
const manualDicts = new Set(manualVerbs.map(v => v.dictionary));
const filteredImported = importedVerbs.filter(v => !manualDicts.has(v.dictionary));

export const commonVerbs: VerbData[] = [...manualVerbs, ...filteredImported];

export function conjugateVerb(verb: VerbData, form: string): string {
    const dict = verb.dictionary

    if (verb.type === 'irregular') {
        if (dict === 'する') {
            const irregularForms: Record<string, string> = {
                'masu': 'します',
                'te': 'して',
                'ta': 'した',
                'nai': 'しない',
                'potential': 'できる',
                'passive': 'される',
                'causative': 'させる',
                'volitional': 'しよう',
            }
            return irregularForms[form] || dict
        }
        if (dict === '来る') {
            const irregularForms: Record<string, string> = {
                'masu': '来ます',
                'te': '来て',
                'ta': '来た',
                'nai': '来ない',
                'potential': '来られる',
                'passive': '来られる',
                'causative': '来させる',
                'volitional': '来よう',
            }
            return irregularForms[form] || dict
        }
    }

    if (verb.type === 'ichidan') {
        const stem = dict.slice(0, -1) // Remove る
        const forms: Record<string, string> = {
            'masu': stem + 'ます',
            'te': stem + 'て',
            'ta': stem + 'た',
            'nai': stem + 'ない',
            'potential': stem + 'られる',
            'passive': stem + 'られる',
            'causative': stem + 'させる',
            'volitional': stem + 'よう',
        }
        return forms[form] || dict
    }

    if (verb.type === 'godan') {
        const stem = dict.slice(0, -1)
        const ending = dict.slice(-1)

        // Godan conjugation mappings
        const godanMap: Record<string, Record<string, string>> = {
            'う': { i: 'い', a: 'わ', e: 'え', o: 'お', te: 'って', ta: 'った' },
            'く': { i: 'き', a: 'か', e: 'け', o: 'こ', te: 'いて', ta: 'いた' },
            'ぐ': { i: 'ぎ', a: 'が', e: 'げ', o: 'ご', te: 'いで', ta: 'いだ' },
            'す': { i: 'し', a: 'さ', e: 'せ', o: 'そ', te: 'して', ta: 'した' },
            'つ': { i: 'ち', a: 'た', e: 'て', o: 'と', te: 'って', ta: 'った' },
            'ぬ': { i: 'に', a: 'な', e: 'ね', o: 'の', te: 'んで', ta: 'んだ' },
            'ぶ': { i: 'び', a: 'ば', e: 'べ', o: 'ぼ', te: 'んで', ta: 'んだ' },
            'む': { i: 'み', a: 'ま', e: 'め', o: 'も', te: 'んで', ta: 'んだ' },
            'る': { i: 'り', a: 'ら', e: 'れ', o: 'ろ', te: 'って', ta: 'った' },
        }

        const map = godanMap[ending]
        if (!map) return dict

        const forms: Record<string, string> = {
            'masu': stem + map.i + 'ます',
            'te': stem + map.te,
            'ta': stem + map.ta,
            'nai': stem + map.a + 'ない',
            'potential': stem + map.e + 'る',
            'passive': stem + map.a + 'れる',
            'causative': stem + map.a + 'せる',
            'volitional': stem + map.o + 'う',
        }

        return forms[form] || dict
    }

    return dict
}

export function conjugateVerbWithReading(verb: VerbData, form: string): { text: string, reading: string } {
    const text = conjugateVerb(verb, form)

    // For the text with furigana syntax for the conjugation itself, 
    // we need to be careful. However, the user specifically asked for "Kanji to have furigana".
    // For conjugated forms, the stem usually contains the Kanji.

    // Create a version of the text with furigana: 漢字{かんじ}
    let textWithFurigana = text;
    if (verb.dictionary !== verb.reading) {
        // Find the kanji part and the kana part
        // This is a simple heuristic: if dictionary and reading differ, wrap dictionary with reading.
        // But we want to only wrap the Kanji part.
        // e.g. 行く (iku) -> 行{い}く

        const dict = verb.dictionary;
        const read = verb.reading;

        let kanjiPart = '';
        let readingPart = '';
        let suffix = '';

        // Find trailing kana matches
        let i = dict.length - 1;
        let j = read.length - 1;
        while (i >= 0 && j >= 0 && dict[i] === read[j]) {
            suffix = dict[i] + suffix;
            i--;
            j--;
        }

        kanjiPart = dict.substring(0, i + 1);
        readingPart = read.substring(0, j + 1);

        if (kanjiPart) {
            // Apply the same split to the conjugated text
            // The conjugated text will have the same Kanji stem.
            const conjugatedSuffix = text.substring(kanjiPart.length);
            textWithFurigana = `${kanjiPart}{${readingPart}}${conjugatedSuffix}`;
        }
    }

    // For the reading, we treat the 'reading' field as a godan/ichidan verb in hiragana
    // and apply the same transformation rules.
    const readingVerb: VerbData = {
        ...verb,
        dictionary: verb.reading // Use reading as the dictionary form to conjugate it
    }

    // We need to be careful with irregulars like 'くる' (kuru) which is not explicitly 'reading' typed usually,
    // but our conjugateVerb function handles '来る' specifically.
    // We need to handle the hiragana version of irregulars manually here if conjugateVerb doesn't support inputting hiragana directly for irregulars.

    if (verb.type === 'irregular') {
        if (verb.dictionary === 'する') {
            const map: Record<string, string> = {
                'masu': 'します', 'te': 'して', 'ta': 'した', 'nai': 'しない',
                'potential': 'できる', 'passive': 'される', 'causative': 'させる', 'volitional': 'しよう'
            }
            return { text: textWithFurigana, reading: map[form] || verb.reading }
        }
        if (verb.dictionary === '来る') {
            const map: Record<string, string> = {
                'masu': 'きます', 'te': 'きて', 'ta': 'きた', 'nai': 'こない',
                'potential': 'こられる', 'passive': 'こられる', 'causative': 'こさせる', 'volitional': 'こよう'
            }
            return { text: textWithFurigana, reading: map[form] || verb.reading }
        }
    }

    // For regular verbs (Godan/Ichidan), passing the reading as 'dictionary' to conjugateVerb works 
    // because conjugateVerb splits based on the last character (which matches in hiragana too).
    // e.g. 書く(kaku) -> ku. かく(kaku) -> ku.
    // 泳ぐ(oyogu) -> gu. およぐ(oyogu) -> gu.
    // Only verify that godanMap keys (うくぐ...) match the Hiragana endings. Yes they do.

    const reading = conjugateVerb(readingVerb, form)
    return { text: textWithFurigana, reading }
}

export function generateVerbExample(verb: VerbData, form: string, lang: 'en' | 'zh-TW' | string = 'en'): { sentence: string, translation: string } {
    const { text: conjugated } = conjugateVerbWithReading(verb, form) // Use the one with furigana
    let sentence = ''
    let translation = ''

    // Check if the language is Chinese-variant
    const isZh = lang.startsWith('zh') || lang === 'zh-TW'
    const meaning = isZh ? verb.meaning_zh : verb.meaning.split('/')[0]

    const context = verb.context || { ja: 'よく', zh: '', en: '' }

    // Japanese Context (e.g. "寿司を")

    const jaRaw = context.ja || ''

    // Translation Context
    // EN: "eat" + " " + "sushi".
    // ZH: "吃" + "壽司".

    if (isZh) {
        const zhObj = context.zh || ''

        switch (form) {
            case 'masu':
                // "毎日、寿司を 食べます。"
                sentence = `毎日{まいにち}、${jaRaw}${conjugated}。`
                // "每天吃壽司。"
                translation = `每天${meaning}${zhObj}。 (禮貌形)`
                break
            case 'te':
                // "寿司を 食べてください。"
                sentence = `${jaRaw}${conjugated}ください。`
                // "請吃壽司。"
                translation = `請${meaning}${zhObj}。`
                break
            case 'ta':
                // "昨日、寿司を 食べた。"
                sentence = `昨日{きのう}、${jaRaw}${conjugated}。`
                // "昨天吃了壽司。"
                translation = `昨天${meaning}了${zhObj}。 (過去)`
                break
            case 'nai':
                // "寿司を 食べないでください。"
                sentence = `${jaRaw}${conjugated}でください。`
                // "請不要吃壽司。"
                translation = `請不要${meaning}${zhObj}。`
                break
            case 'potential':
                // "私は寿司が 食べられる。" 
                // Context with 'o' particle usually changes to 'ga' in potential, but 'o' is tolerated.
                // For educational clarity on drill, 'o' is often kept or user provided 'ga' in context if they knew.
                // We will use the provided context particle.
                sentence = `私{わたし}は${jaRaw}${conjugated}。`
                translation = `我${verb.dictionary === '行く' ? '能' : '能'}${meaning}${zhObj}。 (可能形)`
                break
            case 'passive':
                // "みんなに 寿司を 食べられた。"
                if (verb.transitivity === 'transitive' && jaRaw) {
                    sentence = `皆{みんな}に${jaRaw}${conjugated}。`
                    translation = `被大家${meaning}了${zhObj}。 (受身)`
                } else {
                    sentence = `皆{みんな}に${conjugated}。`
                    translation = `被大家${meaning}。 (受身)`
                }
                break
            case 'causative':
                // "子供に 寿司を 食べさせる"
                if (verb.transitivity === 'transitive' && jaRaw) {
                    sentence = `先生{せんせい}は学生{がくせい}に${jaRaw}${conjugated}。`
                    translation = `老師讓學生${meaning}${zhObj}。 (使役)`
                } else {
                    sentence = `子供{こども}を${conjugated}。`
                    translation = `讓孩子${meaning}。 (使役)`
                }
                break
            case 'volitional':
                sentence = `一緒{いっしょ}に${jaRaw}${conjugated}。`
                translation = `一起${meaning}${zhObj}吧。 (意向)`
                break
            default:
                sentence = conjugated
                translation = meaning
        }
    } else {
        const enObj = context.en ? (' ' + context.en) : ''

        switch (form) {
            case 'masu':
                sentence = `毎日{まいにち}、${jaRaw}${conjugated}。`
                translation = `I ${meaning}${enObj} every day. (Polite)`
                break
            case 'te':
                sentence = `${jaRaw}${conjugated}ください。`
                translation = `Please ${meaning}${enObj}.`
                break
            case 'ta':
                sentence = `昨日{きのう}、${jaRaw}${conjugated}。`
                translation = `I ${meaning}${enObj} yesterday. (Past)`
                break
            case 'nai':
                sentence = `${jaRaw}${conjugated}でください。`
                translation = `Please do not ${meaning}${enObj}.`
                break
            case 'potential':
                sentence = `私{わたし}は${jaRaw}${conjugated}。`
                translation = `I can ${meaning}${enObj}.`
                break
            case 'passive':
                sentence = `私{わたし}は${conjugated}。`
                translation = `I was ${meaning} (Passive).`
                break
            case 'causative':
                sentence = `母{はは}は私{わたし}に${conjugated}。`
                translation = `Mother made me ${meaning}.`
                break
            case 'volitional':
                sentence = `一緒{いっしょ}に${jaRaw}${conjugated}。`
                translation = `Let's ${meaning}${enObj} together.`
                break
            default:
                sentence = conjugated
                translation = meaning
        }
    }

    return { sentence, translation }
}

// Helper to generate a contextual stem with a blank
export function generateContextualStem(verb: VerbData, form: string, context: VerbContext): { stem: string, meaning: string, formHint: string } {
    const meaning = verb.meaning_zh
    const blank = '______'
    const { text: conjugated } = conjugateVerbWithReading(verb, form)
    // Strip furigana markers for simple matching in native examples
    const plainConjugated = conjugated.replace(/\{[^}]+\}/g, '')

    // 1. Try to find a Native Example that contains the conjugated form
    if (verb.native_examples && verb.native_examples.length > 0) {
        for (const ex of verb.native_examples) {
            if (ex.ja.includes(plainConjugated)) {
                const formHints: Record<string, string> = {
                    'masu': 'ます形 (丁寧語)',
                    'te': 'て形 (請求/連接)',
                    'ta': 'た形 (過去/完了)',
                    'nai': 'ない形 (否定)',
                    'potential': '可能形 (能力/許可)',
                    'passive': '受身形 (被動/敬語)',
                    'causative': '使役形 (強制/許可)',
                    'volitional': '意向形 (勸誘/意志)'
                }
                const regex = new RegExp(plainConjugated, 'g')
                const stemWithBlank = ex.ja.replace(regex, blank)
                if (stemWithBlank !== ex.ja) {
                    return {
                        stem: stemWithBlank,
                        meaning: ex.zh,
                        formHint: formHints[form] || '活用形'
                    }
                }
            }
        }
    }

    // 2. Fallback: Semantic-Aware Natural Templates
    const pick = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)]

    // Semantic Categories
    const stateVerbs = ['ある', 'いる', '要る', '分かる', 'わかる', 'できる', '出来る', '知る', '信じる', '似る']
    const movementVerbs = ['行く', 'くる', '来る', '帰る', '戻る', '出る', '入る', '走る', '歩く', '登る', '乗る', '降りる']
    const sensitiveVerbs = ['死ぬ', '殺す']

    const isState = stateVerbs.includes(verb.dictionary)
    const isMovement = movementVerbs.includes(verb.dictionary)
    const isSensitive = sensitiveVerbs.includes(verb.dictionary)

    // Context Strings (use empty if missing to fit into generic templates)
    // We try to make templates that work even without specific context objects
    const jaCtxt = context.ja || ''
    const zhCtxt = context.zh || ''

    switch (form) {
        case 'masu':
            if (isState) return {
                stem: `実{じつ}は、その事情{じじょう}を${jaCtxt} ${blank}。`,
                meaning: `其實，${zhCtxt}${meaning}那個情況。`,
                formHint: 'ます形 (狀態/敘述)',
            }
            return pick([
                {
                    stem: `私{わたし}は毎日{まいにち}、${jaCtxt} ${blank}。`,
                    meaning: `我每天都${meaning}${zhCtxt}。`,
                    formHint: 'ます形 (習慣)',
                },
                {
                    stem: `明日{あした}も、${jaCtxt} ${blank} 予定{よてい}です。`,
                    meaning: `明天也預定會${meaning}${zhCtxt}。`,
                    formHint: 'ます形 (預定)',
                },
                {
                    stem: `いつも、${jaCtxt} ${blank}。`,
                    meaning: `總是會${meaning}${zhCtxt}。`,
                    formHint: 'ます形 (習慣)',
                }
            ])
        case 'te':
            // CRITICAL FIX: State verbs in Te-form are usually "State Maintenance" or "Reason", NOT Request.
            // e.g. 知っていて (Knowing...), いて (Being...), わかって (Understanding...)
            if (isState) return pick([
                {
                    stem: `そのことについては、もう${jaCtxt} ${blank} います。`,
                    meaning: `關於那件事，我已經${meaning}${zhCtxt}了(狀態)。`,
                    formHint: 'て形 (狀態)',
                },
                {
                    stem: `事情{じじょう}がよく${jaCtxt} ${blank} 、安心{あんしん}しました。`,
                    meaning: `因為非常${meaning}${zhCtxt}狀況，所以放心了。`,
                    formHint: 'て形 (原因)',
                }
            ])

            if (isSensitive) return {
                stem: `悲{かな}しいニュースですが、主人公{しゅじんこう}が ${blank} 終わりました。`,
                meaning: `雖然是悲傷的消息，故事以主角${meaning}做為結束。`,
                formHint: 'て形 (敘述)',
            }

            if (isMovement) return {
                stem: `駅{えき}まで ${blank} から、電話{でんわ}するね。`,
                meaning: `等到${meaning}到車站後，我再打給你喔。`,
                formHint: 'て形 (順序)',
            }

            // Normal Action Verbs -> Request, Sequence, State
            return pick([
                {
                    stem: `すみませんが、ちょっと${jaCtxt} ${blank} ください。`,
                    meaning: `不好意思，請${meaning}一下${zhCtxt}。`,
                    formHint: 'て形 (請求)',
                },
                {
                    stem: `まずは、${jaCtxt} ${blank} から考{かんが}えましょう。`,
                    meaning: `先${meaning}${zhCtxt}之後，再來思考吧。`,
                    formHint: 'て形 (順序)',
                },
                {
                    stem: `今{いま}、${jaCtxt} ${blank} います。`,
                    meaning: `現在正在${meaning}${zhCtxt}。`,
                    formHint: 'て形 (進行)',
                }
            ])

        case 'ta':
            if (isSensitive) return {
                stem: `昔{むかし}、ここで多{おお}くの人{ひと}が ${blank} と言{い}われています。`,
                meaning: `據說很久以前，有很多人在這裡${meaning}了。`,
                formHint: 'た形 (傳聞/過去)',
            }
            return pick([
                {
                    stem: `昨日{きのう}、${jaCtxt} ${blank}。`,
                    meaning: `昨天${meaning}了${zhCtxt}。`,
                    formHint: 'た形 (過去)',
                },
                {
                    stem: `もう、${jaCtxt} ${blank} か？`,
                    meaning: `已經${meaning}${zhCtxt}了嗎？`,
                    formHint: 'た形 (確認)',
                },
                {
                    stem: `実{じつ}は一度{いちど}も、${jaCtxt} ${blank} ことがありません。`,
                    meaning: `其實，我一次都沒有${meaning}過${zhCtxt}。`,
                    formHint: 'た形 (經驗)',
                }
            ])

        case 'nai':
            // State verbs in Nai-form: "Not knowing", "Not existing"
            if (isState) return {
                stem: `全然{ぜんぜん}、${jaCtxt} ${blank} ので困{こま}っています。`,
                meaning: `因為完全不${meaning}${zhCtxt}，所以很困擾。`,
                formHint: 'ない形 (原因)',
            }

            return pick([
                {
                    stem: `まだ、${jaCtxt} ${blank} ほうがいい。`,
                    meaning: `還不要${meaning}${zhCtxt}比較好。`,
                    formHint: 'ない形 (建議)',
                },
                {
                    stem: `今日{きょう}は、${jaCtxt} ${blank} つもりです。`,
                    meaning: `今天不打算${meaning}${zhCtxt}。`,
                    formHint: 'ない形 (意志)',
                },
                {
                    stem: `ここては、${jaCtxt} ${blank} でください。`,
                    meaning: `請不要在這裡${meaning}${zhCtxt}。`,
                    formHint: 'ない形 (禁止)',
                }
            ])

        case 'potential':
            return pick([
                {
                    stem: `君{きみ}は、${jaCtxt} ${blank} ますか？`,
                    meaning: `你會${meaning}${zhCtxt}嗎？`, // "Can you...?"
                    formHint: '可能形 (詢問)',
                },
                {
                    stem: `やっと、${jaCtxt} ${blank} ようになりました。`,
                    meaning: `終於變得能${meaning}${zhCtxt}了。`,
                    formHint: '可能形 (變化)',
                }
            ])

        case 'passive':
            return pick([
                {
                    stem: `みんなに、${jaCtxt} ${blank} ました。`,
                    meaning: `被大家${meaning}了${zhCtxt}。`,
                    formHint: '受身形 (被動)',
                },
                {
                    stem: `知{し}らない人{ひと}に、${jaCtxt} ${blank} 、びっくりした。`,
                    meaning: `被不認識的人${meaning}${zhCtxt}，嚇了一跳。`,
                    formHint: '受身形 (被動)',
                }
            ])

        case 'causative':
            return pick([
                {
                    stem: `母{はは}に、${jaCtxt} ${blank} ました。`,
                    meaning: `被媽媽叫去${meaning}${zhCtxt}了。`,
                    formHint: '使役形 (強制/指示)',
                },
                {
                    stem: `部長{ぶちょう}は私{わたし}に、${jaCtxt} ${blank} ました。`,
                    meaning: `部長讓我去${meaning}${zhCtxt}了。`,
                    formHint: '使役形 (指示)',
                }
            ])

        case 'volitional':
            // State/Sensitive verbs usually don't have volitional forms in daily speech (I won't "let's exist").
            // We'll mask them or provide a very specific "I suppose" nuance if needed, but rarely tested.
            // If tested, we use "Default" for them?
            // Actually, "Let's die" is valid but dark. "Let's know" is weird ("Let's find out" -> 調べよう).
            if (isState) return { // 知ろう -> Let's try to know/understand
                stem: `もっと相手{あいて}のことを ${blank} としている。`,
                meaning: `正試著想要更${meaning}對方的事情。`,
                formHint: '意向形 (意志)',
            }

            return pick([
                {
                    stem: `一緒{いっしょ}に、${jaCtxt} ${blank}！`,
                    meaning: `一起${meaning}${zhCtxt}吧！`,
                    formHint: '意向形 (邀約)',
                },
                {
                    stem: `そろそろ、${jaCtxt} ${blank} か。`,
                    meaning: `差不多該${meaning}${zhCtxt}了吧。`,
                    formHint: '意向形 (提議)',
                }
            ])

        default:
            return {
                stem: `この動詞{どうし}を ${blank} 。`,
                meaning: `練習這個動詞的變化...`,
                formHint: '活用形',
            }
    }
}

export function generateVerbQuestion(level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1' = 'N5') {
    // Filter verbs by level, or fallback
    let levelVerbs = commonVerbs.filter(v => v.level === level)
    if (levelVerbs.length === 0) {
        levelVerbs = commonVerbs.filter(v => v.level === 'N5' || v.level === 'N4')
    }

    const verb = levelVerbs[Math.floor(Math.random() * levelVerbs.length)]

    // Focus on main conjugation forms for drills
    const forms = ['masu', 'te', 'ta', 'nai', 'potential']
    const targetForm = forms[Math.floor(Math.random() * forms.length)]

    const { text: correct } = conjugateVerbWithReading(verb, targetForm)

    // Generate Context
    const context = verb.context || { ja: 'よく', zh: '', en: '' }
    const { stem, meaning, formHint } = generateContextualStem(verb, targetForm, context)

    // --- Intelligent Distractor Generation ---
    const optionsWithReasons: { text: string, reason: string }[] = []

    // 1. Add Correct Answer
    // Check conjugation rule to generate the "Correct Rule" string
    let correctRule = ''
    if (verb.type === 'godan') {
        correctRule = `【${formHint}】「${verb.dictionary}」是第一類動詞 (五段)，字尾「${verb.group}」的變化規則是正確的。`
    } else if (verb.type === 'ichidan') {
        correctRule = `【${formHint}】「${verb.dictionary}」是第二類動詞 (一段)，去掉「る」直接變化。`
    } else {
        correctRule = `【${formHint}】「${verb.dictionary}」是第三類動詞 (不規則)，請死背。`
    }

    // 2. Distractor: Wrong Verb Group Logic
    // Special Trap: False Ichidan (Verbs that look like Ichidan but are Godan)
    const falseIchidan = ['帰る', '切る', '走る', '知る', '入る', '要る']
    const isFalseIchidan = falseIchidan.includes(verb.dictionary)

    let wrongGroupText = ''
    let wrongGroupReason = ''

    if (isFalseIchidan) {
        // Trap the user: conjugate it as if it WERE an Ichidan verb (just drop 'ru')
        const readingStem = verb.reading.slice(0, -1)
        const suffix = targetForm === 'te' ? 'て' : targetForm === 'ta' ? 'た' : targetForm === 'nai' ? 'ない' : 'ます'
        wrongGroupText = verifyFurigana(verb, readingStem + suffix)
        wrongGroupReason = `陷阱題！「${verb.dictionary}」雖然結尾是「iru/eru」，但它是「第一類動詞 (五段)」，不能像第二類動詞那樣直接去尾。`
    } else if (verb.type === 'godan') {
        // Regular Godan -> Pseudo-Ichidan distractor
        const readingStem = verb.reading.slice(0, -1)
        const suffix = targetForm === 'te' ? 'て' : targetForm === 'ta' ? 'た' : targetForm === 'nai' ? 'ない' : 'ます'
        wrongGroupText = verifyFurigana(verb, readingStem + suffix)
        wrongGroupReason = `錯誤地套用了「第二類動詞 (一段)」的規則 (直接去尾)。但這是第一類動詞。`
    } else if (verb.type === 'ichidan') {
        // Ichidan -> Pseudo-Godan (Treat 'ru' as Godan 'ru')
        const readingStem = verb.reading.slice(0, -1)
        let ending = ''

        if (targetForm === 'te') ending = 'って'
        else if (targetForm === 'ta') ending = 'った'
        else if (targetForm === 'nai') ending = 'らない'
        else if (targetForm === 'masu') ending = 'ります'
        else ending = 'られる'

        if (ending) {
            wrongGroupText = verifyFurigana(verb, readingStem + ending)
            wrongGroupReason = `錯誤地套用了「第一類動詞 (五段)」的規則。但這是第二類動詞。`
        }
    }

    if (wrongGroupText && wrongGroupText !== correct) {
        optionsWithReasons.push({ text: wrongGroupText, reason: wrongGroupReason })
    }

    // 3. Distractor: Wrong Onbin (Sound Change) - Specific for Te/Ta
    // e.g. Yomu -> Yote (Wrong) vs Yonde (Correct)
    if (verb.type === 'godan' && (targetForm === 'te' || targetForm === 'ta')) {
        // Generate a "Plain" append or "Wrong Onbin"
        // e.g. 飲む (mu) -> 飲んで. Distractor: 飲いて (k-style) or 飲って (r-style)
        const readingStem = verb.reading.slice(0, -1)

        const wrongSuffix = targetForm === 'te'
            ? (verb.group === 'く' ? 'って' : 'いて') // Swap ku/ru rules
            : (verb.group === 'く' ? 'った' : 'いた')

        const txt = verifyFurigana(verb, readingStem + wrongSuffix)
        optionsWithReasons.push({
            text: txt,
            reason: `音便規則錯誤。字尾「${verb.group}」不應該這樣變化。`
        })
    }

    // 4. Distractor: Wrong Form (e.g. Past instead of Present)
    // Asking for Te-form, give Ta-form
    let wrongFormType = ''
    if (targetForm === 'te') wrongFormType = 'ta'
    else if (targetForm === 'ta') wrongFormType = 'te'
    else if (targetForm === 'masu') wrongFormType = 'dictionary' // subtle
    else wrongFormType = 'masu'

    if (wrongFormType) {
        const { text: wForm } = conjugateVerbWithReading(verb, wrongFormType)
        if (wForm !== correct) {
            const label = wrongFormType === 'te' ? 'て形' : wrongFormType === 'ta' ? 'た形' : wrongFormType
            optionsWithReasons.push({
                text: wForm,
                reason: `這是「${label}」，不是題目要求的「${targetForm === 'te' ? 'て形' : targetForm === 'ta' ? 'た形' : targetForm}」。`
            })
        }
    }

    // 5. Filler Distractors (Random other verbs or forms)
    // Just simple manual construction to ensure we have 3 distractors
    while (optionsWithReasons.length < 3) {
        const randomSuffix = ['て', 'た', 'ます', 'ない'][Math.floor(Math.random() * 4)]
        const readingStem = verb.reading.slice(0, -1)

        // Just make a nonsense conjugation that looks real
        // e.g. 飲さ (nomu -> nomisa)
        const nonsense = verifyFurigana(verb, readingStem + ['さ', 'み', 'き', 'し'][Math.floor(Math.random() * 4)] + randomSuffix)

        if (nonsense !== correct && !optionsWithReasons.some(o => o.text === nonsense)) {
            optionsWithReasons.push({ text: nonsense, reason: '不存在的動詞變化形式。' })
        }
    }

    // Shuffle and pick 3 unique distractors + correct
    // We explicitly keep track of the explanations
    const finalOptions = [{ text: correct, reason: 'CORRECT' }, ...optionsWithReasons.slice(0, 3)]
    finalOptions.sort(() => Math.random() - 0.5)

    // Build the detailed explanation object
    const distractorsExpl = finalOptions
        .filter(o => o.text !== correct)
        .map(o => ({
            text: o.text,
            reason: o.reason
        }))

    return {
        id: `verb_${Date.now()}_${Math.random()}`,
        stem: stem + ` (${meaning})`, // Add meaning to stem for context
        correct,
        options: finalOptions.map(o => o.text),
        explanation: `正解は「${correct}」です。${correctRule}`,
        detailedExplanation: {
            correctRule: correctRule,
            distractors: distractorsExpl
        },
        level,
        source: 'Contextual Verb Drill',
    }
}

// Helper to attach kanji stem furigana to a manually built string
function verifyFurigana(verb: VerbData, combinedReading: string): string {
    // This is a simplified version of conjugateVerbWithReading's logic
    // We know the verb's kanji stem.
    // e.g. 帰る (akaeru) -> Kanji '帰', Reading 'かえ'
    // If combinedReading is 'かえって', we want '帰{かえ}って'

    if (verb.dictionary === verb.reading) return combinedReading;

    const dict = verb.dictionary;
    const read = verb.reading;

    // Find shared suffix to isolate stem
    let i = dict.length - 1;
    let j = read.length - 1;
    while (i >= 0 && j >= 0 && dict[i] === read[j]) {
        i--;
        j--;
    }

    const kanjiPart = dict.substring(0, i + 1);
    const readingStem = read.substring(0, j + 1);

    // If the combinedReading starts with the readingStem, we can wrap it
    if (combinedReading.startsWith(readingStem)) {
        return `${kanjiPart}{${readingStem}}${combinedReading.substring(readingStem.length)}`;
    }

    return combinedReading;
}
