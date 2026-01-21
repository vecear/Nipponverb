// Common Japanese verbs with conjugation patterns
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

export const commonVerbs: VerbData[] = [
    // N5 Verbs
    { dictionary: '行く', reading: 'いく', meaning: 'to go', meaning_zh: '去', type: 'godan', group: 'く', level: 'N5', transitivity: 'intransitive', context: { ja: '学校へ', zh: '學校', en: 'to school' } },
    { dictionary: '見る', reading: 'みる', meaning: 'to see/watch', meaning_zh: '看', type: 'ichidan', level: 'N5', transitivity: 'transitive', context: { ja: '映画を', zh: '電影', en: 'a movie' }, native_examples: [{ ja: '見るに見かねて彼に忠告する', zh: '實在看不下去，向他進行勸告。' }, { ja: '新聞を見る', zh: '看報。' }], dictionary_definition: ['(1) 用眼睛感覺物體的形狀、顏色等。看。', '(2) 瀏覽。觀看。閱覽。看。', '(3) 查看。看。', '(4) 醫生診察患者的身體。診。看。', '(5) 判斷。評價。看。估計。看待。', '(6) 照看。看。照料。處理。', '(7) 自身嘗受。經受。遭受。受。', '以“…てみる”的形式，表示“試着做…”。…看。'] },
    { dictionary: '数える', reading: 'かぞえる', meaning: 'to count', meaning_zh: '數', type: 'ichidan', level: 'N5', transitivity: 'transitive', context: { ja: 'お金を', zh: '錢', en: 'money' }, native_examples: [{ ja: '数をかぞえる', zh: '數數。' }, { ja: 'スポーツが万能であることも、彼の長所にかぞえることができる', zh: '體育全能也可以算作他的長處。' }], dictionary_definition: ['(1) 弄清楚是幾個、多少或第幾號等。數。', '(2) 通過評價，作爲其中的一個。算。算作。'] },
    { dictionary: '聞く', reading: 'きく', meaning: 'to listen', meaning_zh: '聽', type: 'godan', group: 'く', level: 'N5', transitivity: 'transitive', context: { ja: '音楽を', zh: '音樂', en: 'music' } },
    { dictionary: '食べる', reading: 'たべる', meaning: 'to eat', meaning_zh: '吃', type: 'ichidan', level: 'N5', transitivity: 'transitive', context: { ja: '寿司を', zh: '壽司', en: 'sushi' }, native_examples: [{ ja: 'なんとかたべていくだけの収入はある', zh: '只有勉強夠維持生活的收入。' }], dictionary_definition: ['(1) 把食物放到嘴裏，咀嚼，嚥下去。喫。', '(2) 維持生活。'] },
    { dictionary: '話す', reading: 'はなす', meaning: 'to speak', meaning_zh: '說', type: 'godan', group: 'す', level: 'N5', transitivity: 'transitive', context: { ja: '日本語を', zh: '日語', en: 'Japanese' }, native_examples: [{ ja: '事情をはなす', zh: '談情況。' }, { ja: 'そのことについて先生にはなしてみよう', zh: '把那件事跟老師商量一下吧。' }], dictionary_definition: ['(1) 用有聲語言傳達事情或自己的想法。說。談。講。', '(2) 相互交換意見。交談。商量。'] },
    { dictionary: '買う', reading: 'かう', meaning: 'to buy', meaning_zh: '買', type: 'godan', group: 'う', level: 'N5', transitivity: 'transitive', context: { ja: '車を', zh: '車子', en: 'a car' }, native_examples: [{ ja: 'ノートをかう', zh: '買筆記本。' }, { ja: 'うらみをかう', zh: '招人怨恨。得罪人。' }], dictionary_definition: ['(1) 支付金錢，把物品或權利變爲自己的。買。', '(2) 承受某種結果。招致。', '(3) 較高地評價。讚許。', '(4) 願意接受。主動承擔。'] },
    { dictionary: '書く', reading: 'かく', meaning: 'to write', meaning_zh: '寫', type: 'godan', group: 'く', level: 'N5', transitivity: 'transitive', context: { ja: '手紙を', zh: '信', en: 'a letter' } },
    { dictionary: '泳ぐ', reading: 'およぐ', meaning: 'to swim', meaning_zh: '游泳', type: 'godan', group: 'ぐ', level: 'N5', transitivity: 'intransitive', context: { ja: '海で', zh: '在海裡', en: 'in the sea' }, native_examples: [{ ja: '川をおよいでわたる', zh: '遊過河去。' }, { ja: '政界をおよぐ', zh: '在政界周旋。' }], dictionary_definition: ['(1) 用手腳划水前進。游泳。', '(2) 巧妙的處世。周旋。', '(3) 向前打趔趄。', '(4) 分開人羣向前走。'] },
    { dictionary: '待つ', reading: 'まつ', meaning: 'to wait', meaning_zh: '等', type: 'godan', group: 'つ', level: 'N5', transitivity: 'transitive', context: { ja: '友達を', zh: '朋友', en: 'my friend' }, native_examples: [{ ja: '人をまつ', zh: '等人。' }, { ja: 'バスをまつ', zh: '等公共汽車。' }], dictionary_definition: ['(1) 盼望人、事物的到來。盼望早日實現。等。等待。等候。', '(2) 使對方暫停要做的事。等等。', '(3) 直到明確對方的反應和態度爲止，什麼也不做。靜等。', '(4) 以“…に待つ”的形式表示期待。有待於…。有賴於…。對…寄予希望。期望。'] },
    { dictionary: '飲む', reading: 'のむ', meaning: 'to drink', meaning_zh: '喝', type: 'godan', group: 'む', level: 'N5', transitivity: 'transitive', context: { ja: 'お茶を', zh: '茶', en: 'tea' }, native_examples: [{ ja: '水をのむ', zh: '喝水。' }, { ja: 'うらみをのむ', zh: '飲恨。' }], dictionary_definition: ['(1) 使進入口中的東西，隨即咽入體內。喝。飲。', '(2) 把要冒出來的東西抑制住。飲。吞。咽。', '(3) 勉強接受。不得已接受。', '(4) 壓倒。吞沒。', '(5) 藏在懷裏。暗藏。暗帶。'] },
    { dictionary: '呼ぶ', reading: 'よぶ', meaning: 'to call', meaning_zh: '呼叫', type: 'godan', group: 'ぶ', level: 'N5', transitivity: 'transitive', context: { ja: 'タクシーを', zh: '計程車', en: 'a taxi' }, native_examples: [{ ja: '名まえをよぶ', zh: '招呼名字。' }, { ja: '医者をよぶ', zh: '請醫生。' }], dictionary_definition: ['(1) 爲引起對方注意而呼喚。呼喚。招呼。', '(2) 叫過來。呼喚。', '(3) 招待。邀請。', '(4) 叫做。稱爲。', '(5) 吸引。引起。'] },
    { dictionary: '帰る', reading: 'かえる', meaning: 'to return', meaning_zh: '回家', type: 'godan', group: 'る', level: 'N5', transitivity: 'intransitive', context: { ja: '家に', zh: '回家', en: 'home' } },
    { dictionary: '会う', reading: 'あう', meaning: 'to meet', meaning_zh: '見面', type: 'godan', group: 'う', level: 'N5', transitivity: 'intransitive', context: { ja: '先生に', zh: '老師', en: 'the teacher' } },
    { dictionary: '来る', reading: 'くる', meaning: 'to come', meaning_zh: '來', type: 'irregular', level: 'N5', transitivity: 'intransitive', context: { ja: 'ここへ', zh: '這裡', en: 'here' }, native_examples: [{ ja: '電車が来る', zh: '電車來了。' }, { ja: '春が来るとさくらの花がさく', zh: '一到春天櫻花就開。' }], dictionary_definition: ['(1) 某種事物在空間或時間上朝自己所在的方向接近。來。來到。', '(2) 到了某時期或某時間。到。', '(3) 發生某種狀態。發生。', '(4) 以某事爲原因而發生。多用於發生了不好的事情。引起。發生。', '(5) 用“…ときたら”、“…とくると”、“…ときては”的形式，表示特別強調前面的詞語。提起…。說起…。特別是…。', '(1) 朝這個方向接近。向這邊…來。', '(2) 完成該動作後返回。回來。', '(3) 逐漸變成某種狀態。…起來。', '(4) 表示該動作或作用持續到現在。一直在…。'] },
    { dictionary: 'する', reading: 'する', meaning: 'to do', meaning_zh: '做', type: 'irregular', level: 'N5', transitivity: 'transitive', context: { ja: '宿題を', zh: '功課', en: 'homework' } },
    { dictionary: 'ある', reading: 'ある', meaning: 'to exist', meaning_zh: '有', type: 'godan', group: 'る', level: 'N5', transitivity: 'intransitive', context: { ja: '問題が', zh: '問題', en: 'a problem' } },
    { dictionary: 'いる', reading: 'いる', meaning: 'to exist', meaning_zh: '有', type: 'ichidan', level: 'N5', transitivity: 'intransitive', context: { ja: '猫が', zh: '貓', en: 'a cat' } },
    { dictionary: '死ぬ', reading: 'しぬ', meaning: 'to die', meaning_zh: '死', type: 'godan', group: 'ぬ', level: 'N5', transitivity: 'intransitive', context: { ja: '', zh: '', en: '' }, native_examples: [{ ja: 'しぬ気でやれば、なんでもできる', zh: '以拼死的精神去做，沒有辦不到的。' }, { ja: '目がしんでいる', zh: '目中無神。' }], dictionary_definition: ['(1) 失去生命。因病或事故喪失生命。死。', '(2) 以“死んでいる”的形式，表示沒有生氣。', '(3) 終於未能有效利用。廢置。成廢物。', '(4) 棒球指出局。', '(5) 圍棋指被對方圍住喫掉棋子。成死棋。'] },
    { dictionary: '遊ぶ', reading: 'あそぶ', meaning: 'to play', meaning_zh: '玩', type: 'godan', group: 'ぶ', level: 'N5', transitivity: 'intransitive', context: { ja: '公園で', zh: '在公園', en: 'in the park' }, native_examples: [{ ja: '表であそぶ', zh: '在門口玩。' }, { ja: '会社をやめて家であそんでいる', zh: '辭去公司，在家賦閒。' }], dictionary_definition: ['(1) 爲使精神愉快，做輕鬆的活動。玩。遊戲。', '(2) 不做工作，閒待著。賦閒。閒居。', '(3) 機器、工具、處所等沒被有效地使用。閒着。閒置。'] },
    { dictionary: '読む', reading: 'よむ', meaning: 'to read', meaning_zh: '讀', type: 'godan', group: 'む', level: 'N5', transitivity: 'transitive', context: { ja: '本を', zh: '書', en: 'a book' } },
    { dictionary: '分かる', reading: 'わかる', meaning: 'to understand', meaning_zh: '明白', type: 'godan', group: 'る', level: 'N5', transitivity: 'intransitive', context: { ja: '英語が', zh: '英語', en: 'English' }, native_examples: [{ ja: '意味がわかる', zh: '明白意思。' }, { ja: '英語がわかる', zh: '懂英語。' }], dictionary_definition: ['(1) 知道意思。懂。懂得。明白。知道。瞭解。', '(2) 不曾清楚的事情，弄清楚了。知道。瞭解。清楚。', '(3) 理解人的心情和人情。懂。懂得。理解。瞭解。'] },
    { dictionary: '歩く', reading: 'あるく', meaning: 'to walk', meaning_zh: '走路', type: 'godan', group: 'く', level: 'N5', transitivity: 'intransitive', context: { ja: '道を', zh: '路上', en: 'the street' }, native_examples: [{ ja: '駅まではあるいて10分くらいで行ける', zh: '到車站，步行10分左右能到。' }, { ja: '歩道をあるく', zh: '走人行道。' }], dictionary_definition: ['(1) 用腳行路。走。步行。', '(2) 到各處去。到各地巡迴做些什麼。也指使用交通工具的移動。(到處)走。轉。走遍。巡行。', '(3) 經歷。度過。涉足。'] },
    { dictionary: '走る', reading: 'はしる', meaning: 'to run', meaning_zh: '跑', type: 'godan', group: 'る', level: 'N5', transitivity: 'intransitive', context: { ja: '速く', zh: '快', en: 'fast' }, native_examples: [{ ja: 'ピストルの音とともに一齊にはしり出した', zh: '槍聲一響，一齊起跑。' }, { ja: '汽車は北に向かってはしる', zh: '火車向北奔馳。' }], dictionary_definition: ['(1) 人或動物以比步行快的速度移動腳步前進。跑。', '(2) 人和動物以外的物體以高速移動。奔馳。行駛。駛。', '(3) 道路和河流等細長物通向某一方向。通向。走向。', '(4) 某種感覺或感情突然出現，又立即消失。閃現。忽覺。', '(5) 思想和行動傾向於某個方向。偏重。偏向。走向。'] },
    { dictionary: '座る', reading: 'すわる', meaning: 'to sit', meaning_zh: '坐', type: 'godan', group: 'る', level: 'N5', transitivity: 'intransitive', context: { ja: '椅子に', zh: '椅子上', en: 'on the chair' } },
    { dictionary: '立つ', reading: 'たつ', meaning: 'to stand', meaning_zh: '站立', type: 'godan', group: 'つ', level: 'N5', transitivity: 'intransitive', context: { ja: 'ここに', zh: '這裡', en: 'here' }, native_examples: [{ ja: '庭にポプラの木が何本もたっている', zh: '庭院裏挺立着幾棵白楊樹。' }, { ja: '先頭にたつ', zh: '站在最前頭。' }], dictionary_definition: ['(1) 物體不離原地，呈豎立狀態。立。站。', '(2) 置身於某一位置或地位。處於。站在。', '(3) 紮上了帶尖的東西。扎。', '(4) 起身。起來。也指起身後從某處離開。離。離開。', '(5) 從下面向上升起。冒。起。揚起。', '(6) 出發。啓程。', '(7) 看到或感覺到某種事物。出現。起。', '(8) 失去了平穩，變成激烈狀態。起。', '(9) 發揮顯著的作用。好。高。有。', '(10) 不受損害，很好地保持。有。保持。維持。可以。', '(11) 時光流逝。過去。'] },
    { dictionary: '寝る', reading: 'ねる', meaning: 'to sleep', meaning_zh: '睡覺', type: 'ichidan', level: 'N5', transitivity: 'intransitive', context: { ja: '早く', zh: '早點', en: 'early' }, native_examples: [{ ja: 'あおむけに寝る', zh: '仰臥。' }, { ja: '稲が寝る', zh: '水稻倒伏了。' }], dictionary_definition: ['(1) 人類或動物使身體橫臥。躺下。躺臥。', '(2) 原來立着的東西，成了橫着倒下的狀態。倒。', '(3) 睡眠。就寢。睡。', '(4) 生病臥牀。臥病。', '(5) 錢或物不被利用，被擱置起來。閒置。積壓。'] },
    { dictionary: '起きる', reading: 'おきる', meaning: 'to wake up', meaning_zh: '起床', type: 'ichidan', level: 'N5', transitivity: 'intransitive', context: { ja: '早く', zh: '早點', en: 'early' }, native_examples: [{ ja: '倒れかかっていた稲がおきた', zh: '快要倒伏的稻子立起來了。' }, { ja: 'むっくりとおきる', zh: '猛然站起來。' }], dictionary_definition: ['(1) 躺着的人或物立起來。立起。站起。', '(2) 睡醒。醒着。醒。', '(3) 起牀。', '(4) 事件等發生。生。出。犯。', '(5) 火着起來。着起。燃起。'] },
    { dictionary: '教える', reading: 'おしえる', meaning: 'to teach', meaning_zh: '教導', type: 'ichidan', level: 'N5', transitivity: 'transitive', context: { ja: '数学を', zh: '數學', en: 'math' }, native_examples: [{ ja: '外国語をおしえる', zh: '教外語。' }, { ja: '互いにおしえ合い、学び合う', zh: '互教互學。' }], dictionary_definition: ['(1) 向對方傳授知識或技術等，使其掌握。教。教授。', '(2) 把自己知道的事情告訴別人。指出。告訴。', '(3) 給與教訓。教誨。指教。教導。'] },
    { dictionary: '入れる', reading: 'いれる', meaning: 'to put in', meaning_zh: '放入', type: 'ichidan', level: 'N5', transitivity: 'transitive', context: { ja: 'カバンに', zh: '包包裡', en: 'in the bag' }, native_examples: [{ ja: '口にいれる', zh: '放進嘴裏。' }, { ja: '部屋にいれる', zh: '放入房間。' }], dictionary_definition: ['(1) 從外向裏移。放入。送入。裝入。', '(2) 使新加入。新添。', '(3) 包括在一起。包括。包含。', '(4) 夾。插。', '(5) 加工。', '(6) 施加力量或作用。用。加。', '(7) 承認別的意見和想法是好的。採納。接受。', '(8) 用熱水衝飲料。沏。泡。衝。', '(9) 傳給對方。投寄。發。打。', '(10) 使移動。開動。'] },
    { dictionary: '出る', reading: 'でる', meaning: 'to exit', meaning_zh: '出去', type: 'ichidan', level: 'N5', transitivity: 'intransitive', context: { ja: '部屋を', zh: '房間', en: 'the room' }, native_examples: [{ ja: 'へやを出る', zh: '從屋裏出來。' }, { ja: '庭へ出る', zh: '去庭院。' }], dictionary_definition: ['(1) 從裏面向外面移動。出。去。出去。出來。', '(2) 超過某種標準或界限。超過。超出。出頭。', '(3) 爲了到別處去，從那裏離開。去。離開。出發。', '(4) 畢業。', '大學畢業後，進了研究生院。', '(5) 到達。走到。到。', '(6) 爲了從事特定的工作或活動，親臨某處或某方面。去。出席。上班。參加。', '(7) 裏面的東西或隱藏的東西，顯露到外面來。出。發。發生。露出。現出。', '(8) 成爲使人們廣泛看到的狀態。出。上。', '(9) 發生。產生。增加。起。發。', '(10) 出產。生產。出。', '(11) 向外溢出，流出。流。湧。湧出。', '(12) 通過思考或鑽研得出某種結果。產生。得出。出現。', '產生答案。', '(13) 被給與。發。出。發出。得到。', '(14) 好賣。', '(15) 採取某種態度。採取…態度。'] },
    { dictionary: '覚える', reading: 'おぼえる', meaning: 'to remember', meaning_zh: '記住', type: 'ichidan', level: 'N5', transitivity: 'transitive', context: { ja: '単語を', zh: '單字', en: 'vocabulary' }, native_examples: [{ ja: 'おぼえていない', zh: '沒記住。' }, { ja: '単語をおぼえる', zh: '記單詞。' }], dictionary_definition: ['(1) 記憶。記。', '(2) 學會。掌握。', '(3) 身、心有某種感覺。感覺。覺得。感到。'] },
    { dictionary: '忘れる', reading: 'わすれる', meaning: 'to forget', meaning_zh: '忘記', type: 'ichidan', level: 'N5', transitivity: 'transitive', context: { ja: '約束を', zh: '約定', en: 'the promise' }, native_examples: [{ ja: '恩をわすれる', zh: '忘恩。' }, { ja: 'もとをわすれる', zh: '忘本。' }], dictionary_definition: ['(1) 曾經記得的事，想不起來了。忘。忘記。忘掉。', '(2) 由於專心於某事而沒想到。忘。忘記。沒注意。', '(3) 本應該拿來的東西，由於疏忽落下了。忘。忘帶。', '(4) 應該做的事，由於疏忽，竟沒有做。忘。忘記。'] },
    { dictionary: '送る', reading: 'おくる', meaning: 'to send', meaning_zh: '寄', type: 'godan', group: 'る', level: 'N5', transitivity: 'transitive', context: { ja: 'メールを', zh: '郵件', en: 'email' }, native_examples: [{ ja: '荷をおくる', zh: '送貨。' }, { ja: 'お金をおくってきた', zh: '寄錢來了。' }], dictionary_definition: ['(1) 把東西從某處轉送到離開該地的別處。送。寄。', '(2) 爲了送行或引路，陪同別人到某處去。送。送行。', '(3) 度過時光。度。過。度過。', '(4) 順次地向下一個位置移動。挪。串。傳。挪動。', '(5) 把人派遣到某處。派。派遣。', '(6) 標送假名。標。標出。'] },
    { dictionary: '洗う', reading: 'あらう', meaning: 'to wash', meaning_zh: '洗', type: 'godan', group: 'う', level: 'N5', transitivity: 'transitive', context: { ja: '手を', zh: '手', en: 'hands' }, native_examples: [{ ja: '洗たく機であらう', zh: '用洗衣機洗。' }, { ja: 'きれいにあらう', zh: '洗乾淨。' }], dictionary_definition: ['(1) 用水和洗滌劑等去污。洗。', '(2) 水或波浪等衝擊。衝擊。沖刷。', '(3) 把隱蔽的東西調查清楚。調查。清查。查明。', '(4) 停止做壞遊戲或不好的事。洗(手)。'] },

    // N4 Verbs
    { dictionary: '決める', reading: 'きめる', meaning: 'to decide', meaning_zh: '決定', type: 'ichidan', level: 'N4', transitivity: 'transitive', context: { ja: '日程を', zh: '日程', en: 'the schedule' }, native_examples: [{ ja: '卒業後の仕事をまだきめていない', zh: '畢業後的工作還沒確定下來。' }, { ja: '話をきめる', zh: '說定。' }], dictionary_definition: ['(1) 得出最後的結果或結論。定。決定。規定。確定。', '(2) 確信。多用“…と決めている”、“…と決めてかかる”的形式。認定。斷定。'] },
    { dictionary: '調べる', reading: 'しらべる', meaning: 'to investigate', meaning_zh: '調查', type: 'ichidan', level: 'N4', transitivity: 'transitive', context: { ja: '原因を', zh: '原因', en: 'the cause' }, native_examples: [{ ja: '琴をしらべる', zh: '彈琴。' }], dictionary_definition: ['(1) 調查。研究。', '(2) 問清。', '(3) 查對。檢點。', '(4) 搜查。', '(5) 調整音律。合音。', '(6) 奏樂。演奏。'] },
    { dictionary: '捨てる', reading: 'すてる', meaning: 'to throw away', meaning_zh: '丟掉', type: 'ichidan', level: 'N4', transitivity: 'transitive', context: { ja: 'ゴミを', zh: '垃圾', en: 'trash' } },
    { dictionary: '始める', reading: 'はじめる', meaning: 'to begin', meaning_zh: '開始', type: 'ichidan', level: 'N4', transitivity: 'transitive', context: { ja: '授業を', zh: '上課', en: 'class' }, native_examples: [{ ja: '彼は商売をはじめた', zh: '他開始做生意了。' }, { ja: '降りはじめる', zh: '開始下。' }], dictionary_definition: ['開始行動。開始做…。開始。', '接在動詞連用形之後，表示該動作開始。'] },
    { dictionary: '終わる', reading: 'おわる', meaning: 'to end', meaning_zh: '結束', type: 'godan', group: 'る', level: 'N4', transitivity: 'intransitive', context: { ja: '夏が', zh: '夏天', en: 'summer' }, native_examples: [{ ja: '授業がおわった', zh: '下課了。' }, { ja: '仕事がおわる', zh: '工作結束。' }], dictionary_definition: ['完了。終了。結束。', '使結束。'] },
    { dictionary: '止まる', reading: 'とまる', meaning: 'to stop', meaning_zh: '停止', type: 'godan', group: 'る', level: 'N4', transitivity: 'intransitive', context: { ja: '足が', zh: '腳步', en: 'feet' } },
    { dictionary: '泊まる', reading: 'とまる', meaning: 'to stay overnight', meaning_zh: '過夜', type: 'godan', group: 'る', level: 'N4', transitivity: 'intransitive', context: { ja: 'ホテルに', zh: '住飯店', en: 'at a hotel' }, native_examples: [{ ja: '友人の家にとまる', zh: '住在朋友家。' }, { ja: '宿屋にとまる', zh: '在旅店投宿。' }], dictionary_definition: ['(1) 在自己家以外的什麼地方住宿。住宿。投宿。住下。過夜。', '(2) 船拋錨，停在港內。停泊。'] },
    { dictionary: '乗る', reading: 'のる', meaning: 'to ride', meaning_zh: '乘坐', type: 'godan', group: 'る', level: 'N4', transitivity: 'intransitive', context: { ja: '電車に', zh: '搭電車', en: 'on the train' } },
    { dictionary: '降りる', reading: 'おりる', meaning: 'to get off', meaning_zh: '下車', type: 'ichidan', level: 'N4', transitivity: 'intransitive', context: { ja: 'バスを', zh: '公車', en: 'the bus' } },
    { dictionary: '借りる', reading: 'かりる', meaning: 'to borrow', meaning_zh: '借入', type: 'ichidan', level: 'N4', transitivity: 'transitive', context: { ja: 'ペンを', zh: '筆', en: 'a pen' }, native_examples: [{ ja: '金をかりる', zh: '借錢。' }, { ja: 'へやをかりる', zh: '租房子。' }], dictionary_definition: ['(1) 在約定以後返還的條件下，使用他人的東西。借。租用。', '(2) 使別人的知識或能力爲己所用。藉助。'] },
    { dictionary: '貸す', reading: 'かす', meaning: 'to lend', meaning_zh: '借出', type: 'godan', group: 'す', level: 'N4', transitivity: 'transitive', context: { ja: 'お金を', zh: '錢', en: 'money' }, native_examples: [{ ja: '金をかす', zh: '借給錢。' }, { ja: 'ちえをかす', zh: '出主意。' }], dictionary_definition: ['(1) 以以後歸還爲條件，讓他人使用自己的東西。借給。借出。出租。', '(2) 讓自己的知識或能力有助於別人。幫助別人。出…。'] },
    { dictionary: '返す', reading: 'かえす', meaning: 'to return', meaning_zh: '歸還', type: 'godan', group: 'す', level: 'N4', transitivity: 'transitive', context: { ja: '本を', zh: '書', en: 'a book' }, native_examples: [{ ja: '読みおわった本をたなにかえす', zh: '把看完的書放回書架。' }, { ja: 'かりをかえす', zh: '還債。' }], dictionary_definition: ['(1) 返還原處。歸還。送回。', '(2) 把從別人接受或借來的東西，歸還給該人。送還。退回。', '(3) 自己同樣做對方對自己所做的事情。回答。報答。', '(4) 使已經變化的事物再一次回到原有的狀態。恢復原狀。', '(5) 使向某一方向移動的東西，向相反的方向移動。折回。返回。', '(6) 把東西的方向顛倒過來。把背面作正面或把上下顛倒過來。翻。翻轉。', '(7) 耕作。', '(1) 接在動詞之後，表示再一次做同一動作。', '(2) 自己也做出與來自對方的同樣動作。'] },
    { dictionary: '急ぐ', reading: 'いそぐ', meaning: 'to hurry', meaning_zh: '趕快', type: 'godan', group: 'ぐ', level: 'N4', transitivity: 'intransitive', context: { ja: '駅へ', zh: '去車站', en: 'to the station' }, native_examples: [{ ja: '勝ちをいそぐ', zh: '急於取勝。' }, { ja: '完成をいそぐ', zh: '急忙完成。' }], dictionary_definition: ['(1) 爲儘快做某事而加快速度。急於…。急忙。趕快。', '(2) 想快速前進而加快走路的速度。快步。快走。急速。'] },
    { dictionary: '手伝う', reading: 'てつだう', meaning: 'to help', meaning_zh: '幫忙', type: 'godan', group: 'う', level: 'N4', transitivity: 'transitive', context: { ja: '母を', zh: '媽媽', en: 'mother' }, native_examples: [{ ja: '家事をてつだう', zh: '幫做家務。' }, { ja: '友だちが来ててつだってくれる', zh: '朋友來幫忙。' }], dictionary_definition: ['對別人的工作等，出力或出錢進行幫助。幫。幫助。', '在某原因之外又加上別的原因。再(又)加上。'] },
    { dictionary: '働く', reading: 'はたらく', meaning: 'to work', meaning_zh: '工作', type: 'godan', group: 'く', level: 'N4', transitivity: 'intransitive', context: { ja: '会社で', zh: '在公司', en: 'at the company' }, native_examples: [{ ja: '一日8時間はたらく', zh: '一天工作8個小時。' }, { ja: '彼は頭のよくはたらく人だ', zh: '他是個善於動腦的人。' }], dictionary_definition: ['(1) 工作。勞動。幹活。', '(2) 大腦活動。動。活動。開動。', '(3) 起作用。', '做壞事。幹。行。搞。'] },
    { dictionary: '探す', reading: 'さがす', meaning: 'to look for', meaning_zh: '尋找', type: 'godan', group: 'す', level: 'N4', transitivity: 'transitive', context: { ja: '鍵を', zh: '鑰匙', en: 'keys' } },
    { dictionary: '笑う', reading: 'わらう', meaning: 'to laugh', meaning_zh: '笑', type: 'godan', group: 'う', level: 'N4', transitivity: 'intransitive', context: { ja: '大声で', zh: '大聲', en: 'loudly' }, native_examples: [{ ja: '大声でわらう', zh: '大聲地笑。' }, { ja: 'ひとりでにわらいが出る', zh: '不由自主地笑。' }], dictionary_definition: ['(1) 感到高興或可笑時，自然喜形於色或發出聲音。開。', '(2) 爲了給對方看或爲了掩飾而露出笑容。強作笑容。強顏。', '(3) 花蕾綻開。也指果實成熟，外皮裂開。開。', '(把對方)作爲嘲笑的對象。嘲笑。恥笑。譏笑。'] },
    { dictionary: '泣く', reading: 'なく', meaning: 'to cry', meaning_zh: '哭', type: 'godan', group: 'く', level: 'N4', transitivity: 'intransitive', context: { ja: '感動して', zh: '因為感動而', en: 'moved to tears' } },
    { dictionary: '怒る', reading: 'おこる', meaning: 'to get angry', meaning_zh: '生氣', type: 'godan', group: 'る', level: 'N4', transitivity: 'intransitive', context: { ja: 'ひどく', zh: '非常', en: 'furiously' }, native_examples: [{ ja: 'まっかになっておこる', zh: '氣得他面紅耳赤。' }, { ja: 'かんかんにおこる', zh: '大發雷霆。' }], dictionary_definition: ['(1) 因有不如意的事，而使心情控制不住。生氣。發怒。', '(2) 對後輩的不良行爲或態度嚴厲批評。說。斥責。訓斥。申斥。'] },
    { dictionary: '信じる', reading: 'しんじる', meaning: 'to believe', meaning_zh: '相信', type: 'ichidan', level: 'N4', transitivity: 'transitive', context: { ja: '未来を', zh: '未來', en: 'the future' }, native_examples: [{ ja: '母はむすこの生存をいまだにしんじている', zh: '母親仍相信兒子活着。' }, { ja: '神をしんじる', zh: '信神。' }], dictionary_definition: ['(1) 認定是真實的。相信。', '(2) 接受超人的巨大力量，把一切都交給它支配。信。信仰。', '(3) 認爲別人並不欺騙自己而不加戒備。信任。信賴。', '(4) 認爲有充分的能力或技術，把該方面託付給他。相信。'] },
    { dictionary: '考える', reading: 'かんがえる', meaning: 'to think', meaning_zh: '思考', type: 'ichidan', level: 'N4', transitivity: 'transitive', context: { ja: '方法を', zh: '方法', en: 'a way' }, native_examples: [{ ja: '問題をかんがえる', zh: '思考問題。' }, { ja: 'かんがえつく', zh: '想起。想到。' }], dictionary_definition: ['(1) 指根據知道的、感覺到的事物，去開動腦筋。也專指有條理地動腦筋。思索。思維。考慮。思考。', '(2) 想方設法做出來。想出。研究出。'] },
    { dictionary: '着る', reading: 'きる', meaning: 'to wear', meaning_zh: '穿', type: 'ichidan', level: 'N4', transitivity: 'transitive', context: { ja: 'スーツを', zh: '西裝', en: 'a suit' }, native_examples: [{ ja: 'うわぎを着る', zh: '穿上衣。' }, { ja: '罪を着る', zh: '承擔罪名。' }], dictionary_definition: ['(1) 穿衣服。穿。', '(2) 自己承擔。承受。承擔。'] },
    { dictionary: '脱ぐ', reading: 'ぬぐ', meaning: 'to take off', meaning_zh: '脫', type: 'godan', group: 'ぐ', level: 'N4', transitivity: 'transitive', context: { ja: '靴を', zh: '鞋子', en: 'shoes' }, native_examples: [{ ja: 'くつをぬぐ', zh: '脫鞋。' }], dictionary_definition: ['把衣服、鞋等穿在身上的東西去掉。脫。'] },
    { dictionary: '晴れる', reading: 'はれる', meaning: 'to clear up', meaning_zh: '放晴', type: 'ichidan', level: 'N4', transitivity: 'intransitive', context: { ja: '空が', zh: '天空', en: 'the sky' }, native_examples: [{ ja: '空がはれた', zh: '天晴了。' }, { ja: '盗みの疑いがはれた', zh: '偷竊的嫌疑消釋了。' }], dictionary_definition: ['(1) 雨或雪已停，雲或霧消失，露出晴空。晴。放晴。(雨、雪)住。(霧)散。', '(2) 心裏的鬱悶消失。消釋。消除。開朗。'] },
    { dictionary: '曇る', reading: 'くもる', meaning: 'to become cloudy', meaning_zh: '變陰天', type: 'godan', group: 'る', level: 'N4', transitivity: 'intransitive', context: { ja: '空が', zh: '天空', en: 'the sky' }, native_examples: [{ ja: '朝のうちはくもっていたが、ひるからはよい天気になった', zh: '早晨陰天來着，中午卻開始晴了。' }, { ja: 'めがねをかけたままでふろにはいると、めがねがくもって何も見えない', zh: '要是戴着眼鏡洗澡，眼鏡就模糊得什麼也看不見。' }], dictionary_definition: ['(1) 天空被雲彩遮蔽。陰天。', '(2) 由於水滴或污垢等，本來透明的物體卻看不清了。模糊。', '(3) 由於擔心等，表情或心情變得黯然。陰鬱。'] },
    { dictionary: '直す', reading: 'なおす', meaning: 'to fix', meaning_zh: '修理', type: 'godan', group: 'す', level: 'N4', transitivity: 'transitive', context: { ja: '時計を', zh: '時鐘', en: 'the clock' } },
    { dictionary: '治る', reading: 'なおる', meaning: 'to be cured', meaning_zh: '治好', type: 'godan', group: 'る', level: 'N4', transitivity: 'intransitive', context: { ja: '病気が', zh: '病', en: 'illness' } },

    // N3 Verbs
    { dictionary: '超える', reading: 'こえる', meaning: 'to exceed', meaning_zh: '超過', type: 'ichidan', level: 'N3', transitivity: 'intransitive', context: { ja: '国境を', zh: '國境', en: 'the border' } },
    { dictionary: '加える', reading: 'くわえる', meaning: 'to add', meaning_zh: '增加', type: 'ichidan', level: 'N3', transitivity: 'transitive', context: { ja: '塩を', zh: '鹽', en: 'salt' }, native_examples: [{ ja: '2に3をくわえると5になる', zh: '2加3等於5。' }, { ja: '何も悪いことをしない動物に害をくわえてはいけません', zh: '不要加害於無害的動物。' }], dictionary_definition: ['(1) 在已有的事物之上再進一步增添。加。增加。添加。', '(2) 施加某種行爲。加以。給予。'] },
    { dictionary: '比べる', reading: 'くらべる', meaning: 'to compare', meaning_zh: '比較', type: 'ichidan', level: 'N3', transitivity: 'transitive', context: { ja: '値段を', zh: '價格', en: 'prices' }, native_examples: [{ ja: '草食獣は、肉食獣にくらべて繁殖力が大きい', zh: '食草動物比肉食動物繁殖力強。' }], dictionary_definition: ['把二個以上的事物放在一起觀察，弄清二者的異同點。比。比較。'] },
    { dictionary: '守る', reading: 'まもる', meaning: 'to protect', meaning_zh: '保護', type: 'godan', group: 'る', level: 'N3', transitivity: 'transitive', context: { ja: '約束を', zh: '約定', en: 'the promise' }, native_examples: [{ ja: '試合のようすをまもる', zh: '注視着比賽場面。' }, { ja: '国をまもる', zh: '保衛國家。' }], dictionary_definition: ['(1) 不離眼地盯着。注視。', '(2) 進行防守，使其不受外來侵害。防守。守衛。保衛。保護。維護。', '(3) 服從規定。守。遵守。信守。'] },
    { dictionary: '殺す', reading: 'ころす', meaning: 'to kill', meaning_zh: '殺', type: 'godan', group: 'す', level: 'N3', transitivity: 'transitive', context: { ja: '虫を', zh: '蟲', en: 'an insect' }, native_examples: [{ ja: '彼は蟻一匹ころそうとしいなやさしい男だ', zh: '他是連一隻螞蟻也不肯弄死的心慈的人。' }, { ja: 'しめころす', zh: '勒死。扼殺。' }], dictionary_definition: ['(1) 奪去生物的，尤其是動物的生命。殺死。殺害。', '(2) 止住活動。控制其作用。抑制。取消。忍住。', '(3) 減弱勢頭。削弱。減低。', '(4) 棒球比賽中，使跑壘者出局。使出局。'] },
    { dictionary: '戦う', reading: 'たたかう', meaning: 'to fight', meaning_zh: '戰鬥', type: 'godan', group: 'う', level: 'N3', transitivity: 'intransitive', context: { ja: '敵と', zh: '與敵人', en: 'with the enemy' } },
    { dictionary: '負ける', reading: 'まける', meaning: 'to lose', meaning_zh: '輸', type: 'ichidan', level: 'N3', transitivity: 'intransitive', context: { ja: '試合に', zh: '比賽', en: 'the match' }, native_examples: [{ ja: '戦争にまける', zh: '戰敗。' }, { ja: '腕力では彼にまけない', zh: '在腕力上不次於他。' }], dictionary_definition: ['(1) 與對手交鋒而戰敗。負。敗。輸。', '(2) 抵不住而屈服。屈服。', '(3) 受到刺激等，皮膚髮生炎症。有過敏反應。', '(4) 被壓倒而失去活力。蔫。氣餒。', '在買賣商品時減價。讓價。減價。少算。'] },
    { dictionary: '勝つ', reading: 'かつ', meaning: 'to win', meaning_zh: '贏', type: 'godan', group: 'つ', level: 'N3', transitivity: 'intransitive', context: { ja: '試合に', zh: '比賽', en: 'the match' }, native_examples: [{ ja: '試合にかつ', zh: '比賽得勝。' }, { ja: 'おのれにかつ', zh: '戰勝自己。' }], dictionary_definition: ['(1) 打敗對方。明確地表現出比對方出色。勝。戰勝。得勝。', '(2) 與困難鬥爭，並克服它。戰勝。克服。', '(3) 該成分比別的成分引人注目。突出。顯眼。'] },
    { dictionary: '選ぶ', reading: 'えらぶ', meaning: 'to choose', meaning_zh: '選擇', type: 'godan', group: 'ぶ', level: 'N3', transitivity: 'transitive', context: { ja: '道を', zh: '道路', en: 'a path' }, native_examples: [{ ja: '代表をえらぶ', zh: '挑選代表。' }, { ja: '代表にえらぶ', zh: '選爲代表。' }], dictionary_definition: ['(1) 從一些東西中挑出好的、需要的、符合條件的。選擇。挑選。', '(2) 編輯成書。編輯。編選。編。'] },
    { dictionary: '喜ぶ', reading: 'よろこぶ', meaning: 'to be happy', meaning_zh: '高興', type: 'godan', group: 'ぶ', level: 'N3', transitivity: 'intransitive', context: { ja: '結果に', zh: '對結果', en: 'with the result' } },
    { dictionary: '増える', reading: 'ふえる', meaning: 'to increase', meaning_zh: '增加', type: 'ichidan', level: 'N3', transitivity: 'intransitive', context: { ja: '体重が', zh: '體重', en: 'weight' } },
    { dictionary: '減る', reading: 'へる', meaning: 'to decrease', meaning_zh: '減少', type: 'godan', group: 'る', level: 'N3', transitivity: 'intransitive', context: { ja: '貯金が', zh: '存款', en: 'savings' }, native_examples: [{ ja: '人口がへる', zh: '人口減少。' }, { ja: '体重がへる', zh: '體重減輕。' }], dictionary_definition: ['數量或程度變少。減。減少。減輕。'] },
    { dictionary: '変わる', reading: 'かわる', meaning: 'to change', meaning_zh: '改變', type: 'godan', group: 'る', level: 'N3', transitivity: 'intransitive', context: { ja: '季節が', zh: '季節', en: 'the season' }, native_examples: [{ ja: '考えがかわる', zh: '想法改變。' }, { ja: 'かわりはてる', zh: '徹底改變(一般用於指壞結果)。' }], dictionary_definition: ['(1) 變成與以前不同的狀態。變。變化。改變。', '(2) 與一般相當不同。與衆不同。特別。出奇。'] },
    { dictionary: '頼む', reading: 'たのむ', meaning: 'to request', meaning_zh: '請求', type: 'godan', group: 'む', level: 'N3', transitivity: 'transitive', context: { ja: '仕事を', zh: '工作', en: 'a job' }, native_examples: [{ ja: '用をたのむ', zh: '託人辦事。' }, { ja: '留守をたのむ', zh: '求(人)看家。' }], dictionary_definition: ['(1) 希望對方爲自己做某件事。求。託。', '(2) 當作依靠。靠。依靠。依仗。', '(3) 出錢僱用。僱。請。', '(4) 求人代爲看管什麼。請照看。'] },
    { dictionary: '断る', reading: 'ことわる', meaning: 'to refuse', meaning_zh: '拒絕', type: 'godan', group: 'る', level: 'N3', transitivity: 'transitive', context: { ja: '誘いを', zh: '邀請', en: 'the invitation' }, native_examples: [{ ja: '客をことわる', zh: '謝絕客人。' }, { ja: '申しでをことわる', zh: '拒絕要求。' }], dictionary_definition: ['(1) 不接受對方的請求或申請，予以拒絕。拒絕。謝絕。', '(2) 事先通知或得到允許。事先通知。得到允許。'] },
    { dictionary: '育てる', reading: 'そだてる', meaning: 'to raise', meaning_zh: '養育', type: 'ichidan', level: 'N3', transitivity: 'transitive', context: { ja: '花を', zh: '花', en: 'flowers' }, native_examples: [{ ja: 'なえをそだてる', zh: '育苗。' }, { ja: '子をそだてる', zh: '撫養孩子。' }], dictionary_definition: ['(1) 照料孩子或動物、植物等使其成長。培育。撫育。撫養。', '(2) 進行教育，使其成人。培養。培育。'] },
    { dictionary: '助ける', reading: 'たすける', meaning: 'to save', meaning_zh: '幫助', type: 'ichidan', level: 'N3', transitivity: 'transitive', context: { ja: '人を', zh: '人', en: 'someone' }, native_examples: [{ ja: '負傷者をたすける', zh: '救護傷員。' }, { ja: '消化をたすける', zh: '助消化。' }], dictionary_definition: ['(1) 使其擺脫危險狀態。救。救助。', '(2) 爲作某事，給予援助。助。幫助。'] },
    { dictionary: '受ける', reading: 'うける', meaning: 'to take', meaning_zh: '接受/參加', type: 'ichidan', level: 'N3', transitivity: 'transitive', context: { ja: '試験を', zh: '考試', en: 'an exam' } },
    { dictionary: '落ちる', reading: 'おちる', meaning: 'to fall', meaning_zh: '掉落', type: 'ichidan', level: 'N3', transitivity: 'intransitive', context: { ja: '葉が', zh: '葉子', en: 'leaves' }, native_examples: [{ ja: '雷がおちる', zh: '落雷。' }, { ja: '日がおちた', zh: '太陽落了。' }], dictionary_definition: ['(1) 從高處以自身的重量向下降落。落。掉。降落。塌落。', '(2) 陷入裏面。陷入。落入。', '(3) 附着在上面的東西消失了。掉。脫落。', '(4) 程度、質量或力量等下降。降。下降。降低。', '(5) 缺少。遺漏。漏。掉。', '(6) 落榜。落第。', '(7) 被攻陷。陷落。失陷。', '(8) 悄悄逃走。逃遁。'] },
    { dictionary: '届く', reading: 'とどく', meaning: 'to arrive', meaning_zh: '送達', type: 'godan', group: 'く', level: 'N3', transitivity: 'intransitive', context: { ja: '荷物が', zh: '包裹', en: 'package' }, native_examples: [{ ja: '手がとどく', zh: '手夠着了。' }, { ja: '光がとどく', zh: '光照到了。' }], dictionary_definition: ['(1) 伸出的東西達到。夠。到。', '(2) 寄去的東西，送到對方那裏。到。送到。寄到。', '(3) 連細小地方都注意到了。到。周到。', '(4) 願望等實現了。達到。'] },
    { dictionary: '通う', reading: 'かよう', meaning: 'to commute', meaning_zh: '通勤', type: 'godan', group: 'う', level: 'N3', transitivity: 'intransitive', context: { ja: '学校に', zh: '上學', en: 'to school' }, native_examples: [{ ja: '船がかよう', zh: '船舶往來。' }, { ja: '学校にかよう', zh: '上學。' }], dictionary_definition: ['(1) 定期地往來於同一場所。來往。通行。上學。上班。通勤。', '(2) 通過某物中間，到達該處。通。流通。循環。'] },

    // N2 Verbs
    { dictionary: '甘やかす', reading: 'あまやかす', meaning: 'to spoil', meaning_zh: '溺愛', type: 'godan', group: 'す', level: 'N2', transitivity: 'transitive', context: { ja: '子供を', zh: '小孩', en: 'the child' }, native_examples: [{ ja: '子どもをあまやかしてだめにした', zh: '把孩子嬌慣壞了。' }, { ja: 'あまやかされて育つ', zh: '慣大了。' }], dictionary_definition: ['對孩子或部下不嚴格，容許其肆意行動。寵。慣。嬌慣。嬌縱。'] },
    { dictionary: '疑う', reading: 'うたがう', meaning: 'to doubt', meaning_zh: '懷疑', type: 'godan', group: 'う', level: 'N2', transitivity: 'transitive', context: { ja: '目を', zh: '眼睛', en: 'my eyes' }, native_examples: [{ ja: '自分の耳(目を)うたがう', zh: '懷疑自己的耳朵(眼睛)。' }, { ja: '新聞記事をうたがう', zh: '懷疑新聞報導(的真實性)。' }], dictionary_definition: ['(1) 覺得不確實。覺得奇怪。懷疑。', '(2) 對於壞事，總覺得恐怕是那樣。懷疑。'] },
    { dictionary: '敬う', reading: 'うやまう', meaning: 'to respect', meaning_zh: '尊敬', type: 'godan', group: 'う', level: 'N2', transitivity: 'transitive', context: { ja: '神を', zh: '神', en: 'God' }, native_examples: [{ ja: '師とうやまう', zh: '敬爲師長。' }, { ja: '老人をうやまう', zh: '尊敬老人。' }], dictionary_definition: ['認爲尊貴，而慎重對待。恭敬。尊敬。'] },
    { dictionary: '占う', reading: 'うらなう', meaning: 'to fortune-tell', meaning_zh: '占卜', type: 'godan', group: 'う', level: 'N2', transitivity: 'transitive', context: { ja: '運勢を', zh: '運勢', en: 'fortune' }, native_examples: [{ ja: '運勢をうらなう', zh: '算命。' }, { ja: '吉凶をうらなう', zh: '占卜吉凶。' }], dictionary_definition: ['(1) 根據某種前兆推測人的命運。占卜。算命。', '(2) 根據事物的預兆來判斷其發展趨勢和結果。預測。'] },
    { dictionary: '補う', reading: 'おぎなう', meaning: 'to compensate', meaning_zh: '補償', type: 'godan', group: 'う', level: 'N2', transitivity: 'transitive', context: { ja: '欠点を', zh: '缺點', en: 'defects' }, native_examples: [{ ja: '欠損をおぎなう', zh: '彌補虧損。' }, { ja: '欠員をおぎなう', zh: '彌補缺額。' }], dictionary_definition: ['彌補不足的或受損害的部分。補充。彌補。'] },
    { dictionary: '恐れる', reading: 'おそれる', meaning: 'to fear', meaning_zh: '恐懼', type: 'ichidan', level: 'N2', transitivity: 'transitive', context: { ja: '失敗を', zh: '失敗', en: 'failure' }, native_examples: [{ ja: 'けものをおそれる', zh: '怕野獸。' }, { ja: '何もおそれない', zh: '無所畏懼。' }], dictionary_definition: ['(1) 害怕。感到恐懼。怕。懼怕。', '(2) 擔心是否要發生壞事。怕。擔心。', '(3) 感到敬畏、惶恐。敬畏。'] },
    { dictionary: '抱える', reading: 'かかえる', meaning: 'to hold', meaning_zh: '抱/承擔', type: 'ichidan', level: 'N2', transitivity: 'transitive', context: { ja: '荷物を', zh: '行李', en: 'luggage' }, native_examples: [{ ja: '包みをかかえる', zh: '夾着包。' }, { ja: '病人をかかえる', zh: '家裏有病人。' }], dictionary_definition: ['(1) 用胳膊抱着或夾着東西。抱。夾。', '(2) 擔負必須予以照料的事物。', '(3) 僱用。陳舊的詞。'] },
    { dictionary: '震える', reading: 'ふるえる', meaning: 'to shiver', meaning_zh: '發抖', type: 'ichidan', level: 'N2', transitivity: 'intransitive', context: { ja: '寒さで', zh: '因為冷', en: 'from cold' }, native_examples: [{ ja: '大地がふるえる', zh: '大地顫動。' }, { ja: '声がふるえる', zh: '聲音顫抖。' }], dictionary_definition: ['(1) 物體短促而連續地震動。顫動。震動。', '(2) 由於寒冷、恐懼或疾病等，身體的一部分短促地抖動。顫抖。發抖。哆嗦。'] },
    { dictionary: '優れる', reading: 'すぐれる', meaning: 'to excel', meaning_zh: '優秀', type: 'ichidan', level: 'N2', transitivity: 'intransitive', context: { ja: '性能が', zh: '性能', en: 'performance' } },
    { dictionary: '恵まれる', reading: 'めぐまれる', meaning: 'to be blessed', meaning_zh: '受惠', type: 'ichidan', level: 'N2', transitivity: 'intransitive', context: { ja: '才能に', zh: '天賦', en: 'with talent' }, native_examples: [{ ja: '日光にめぐまれる', zh: '陽光充足。' }, { ja: '天気にめぐまれる', zh: '遇上好天氣。' }], dictionary_definition: ['(1) 由於自然的照顧，享受到好的事物。遇上。豐富。充足。', '(2) 幸運。幸福。'] },
    { dictionary: '頼る', reading: 'たよる', meaning: 'to rely on', meaning_zh: '依賴', type: 'godan', group: 'る', level: 'N2', transitivity: 'intransitive', context: { ja: '親に', zh: '父母', en: 'parents' }, native_examples: [{ ja: '親にたよる', zh: '依靠父母。' }, { ja: '兄をたよって上京する', zh: '靠哥哥的關係進京。' }], dictionary_definition: ['指望能夠成爲依靠的力量。靠。依靠。藉助。'] },
    { dictionary: '努める', reading: 'つとめる', meaning: 'to endeavor', meaning_zh: '努力', type: 'ichidan', level: 'N2', transitivity: 'intransitive', context: { ja: '解決に', zh: '解決', en: 'to solve' } },
    { dictionary: '務める', reading: 'つとめる', meaning: 'to serve', meaning_zh: '擔任', type: 'ichidan', level: 'N2', transitivity: 'intransitive', context: { ja: '議長を', zh: '議長', en: 'chairman' } },
    { dictionary: '攻める', reading: 'せめる', meaning: 'to attack', meaning_zh: '攻擊', type: 'ichidan', level: 'N2', transitivity: 'transitive', context: { ja: '城を', zh: '城堡', en: 'the castle' }, native_examples: [{ ja: '城をせめる', zh: '攻城。' }, { ja: '敵軍がせめ寄せてきた', zh: '敵軍攻上來了。' }], dictionary_definition: ['(1) 向敵人或對手發起進攻。攻。攻打。攻擊。進攻。', '(2) 爲達到目的積極地施加影響。進攻。發動攻勢。'] },
    { dictionary: '眺める', reading: 'ながめる', meaning: 'to gaze', meaning_zh: '眺望', type: 'ichidan', level: 'N2', transitivity: 'transitive', context: { ja: '海を', zh: '海', en: 'the sea' }, native_examples: [{ ja: '古い写真をながめていると、いろいろのことが思い出される', zh: '凝視昔日的照片，想起各種往事。' }, { ja: '星をながめる', zh: '遙望星星。' }], dictionary_definition: ['(1) 好像心情被該事物吸引住似地，定睛地看。凝視。', '(2) 悠然地看遠處事物。遠眺。遠望。遙望。'] },
    { dictionary: '縮む', reading: 'ちぢむ', meaning: 'to shrink', meaning_zh: '縮水', type: 'godan', group: 'む', level: 'N2', transitivity: 'intransitive', context: { ja: 'セーターが', zh: '毛衣', en: 'sweater' }, native_examples: [{ ja: 'セーターがちぢむ', zh: '毛衣抽了。' }, { ja: '寿命がちぢむ', zh: '壽命縮短。' }], dictionary_definition: ['(1) 東西的長度變短。東西變小。縮。抽。縮短。縮小。', '(2) 由於緊張或恐懼而收縮。抽縮。惶恐。'] },
    { dictionary: '沈む', reading: 'しずむ', meaning: 'to sink', meaning_zh: '沉沒', type: 'godan', group: 'む', level: 'N2', transitivity: 'intransitive', context: { ja: '日が', zh: '太陽', en: 'the sun' }, native_examples: [{ ja: '船がしずむ', zh: '船沉了。' }, { ja: '日がしずむ', zh: '太陽落了。' }], dictionary_definition: ['(1) 向水中深處移動。沉。', '(2) 高處看到的物體向下方移動。落。', '(3) 因煩惱或擔心，精神不振。消沉。低沉。', '(4) 生活陷入慘境。沉淪。'] },
    { dictionary: '学ぶ', reading: 'まなぶ', meaning: 'to learn', meaning_zh: '學習', type: 'godan', group: 'ぶ', level: 'N2', transitivity: 'transitive', context: { ja: '歴史を', zh: '歷史', en: 'history' }, native_examples: [{ ja: '日本語をまなぶ', zh: '學習日語。' }, { ja: 'スキーをまなぶ', zh: '學滑雪。' }], dictionary_definition: ['(1) 接受教育。學。學習。', '(2) 求學。用功。學習。', '(3) 照榜樣學。學。學習。'] },
    { dictionary: '叫ぶ', reading: 'さけぶ', meaning: 'to shout', meaning_zh: '大叫', type: 'godan', group: 'ぶ', level: 'N2', transitivity: 'intransitive', context: { ja: '助けを', zh: '求救', en: 'for help' }, native_examples: [{ ja: '再軍備反対をさけぶ', zh: '大聲呼籲反對重新武裝。' }], dictionary_definition: ['(1) 大聲喊。喊。叫感。', '(2) 向社會大聲疾呼。呼籲。'] },
    { dictionary: '望む', reading: 'のぞむ', meaning: 'to desire', meaning_zh: '期望', type: 'godan', group: 'む', level: 'N2', transitivity: 'transitive', context: { ja: '平和を', zh: '和平', en: 'peace' }, native_examples: [{ ja: '平和をのぞむ', zh: '希望和平。' }, { ja: '心からのぞんでいる', zh: '從心裏盼望着。' }], dictionary_definition: ['(1) 希望能那樣。希望。期望。盼望。', '(2) 從遠處看。望。遙望。遠望。'] },

    // N1 Verbs
    { dictionary: '承る', reading: 'うけたまわる', meaning: 'to acknowledge', meaning_zh: '承蒙/接受', type: 'godan', group: 'る', level: 'N1', transitivity: 'transitive', context: { ja: '注文を', zh: '訂單', en: 'order' }, native_examples: [{ ja: 'ご用命たしかうけたまわりました', zh: '您的吩咐確已敬悉。' }], dictionary_definition: ['(1) “聞く”(聽)的謙辭。比“うかがう”的謙恭語氣更強。聆聽。恭聽。', '(2) “受ける”(接受)、“承知する”(知道)的謙辭。接受。聽從。敬悉。'] },
    { dictionary: '著す', reading: 'あらわす', meaning: 'to publish', meaning_zh: '著述', type: 'godan', group: 'す', level: 'N1', transitivity: 'transitive', context: { ja: '本を', zh: '書', en: 'a book' } },
    { dictionary: '促す', reading: 'うながす', meaning: 'to urge', meaning_zh: '催促', type: 'godan', group: 'す', level: 'N1', transitivity: 'transitive', context: { ja: '注意を', zh: '注意', en: 'attention' }, native_examples: [{ ja: '返事をうながす', zh: '催促答覆。' }, { ja: '出席するようにうながす', zh: '敦促參加。' }], dictionary_definition: ['催促。促進。促使。'] },
    { dictionary: '潤う', reading: 'うるおう', meaning: 'to be moist', meaning_zh: '滋潤', type: 'godan', group: 'う', level: 'N1', transitivity: 'intransitive', context: { ja: '肌が', zh: '肌膚', en: 'skin' }, native_examples: [{ ja: 'ひさしぶりの雨で田畑がうるおった', zh: '久旱之後的雨使田地溼潤了。' }, { ja: 'おかげでこちらもうるおった', zh: '託您的福，我也獲利了。' }], dictionary_definition: ['(1) 帶水分。溼潤。', '(2) 得利。獲利。', '(3) 心情寬暢了。寬舒起來。寬暢。'] },
    { dictionary: '漂う', reading: 'ただよう', meaning: 'to drift', meaning_zh: '漂浮', type: 'godan', group: 'う', level: 'N1', transitivity: 'intransitive', context: { ja: '香りが', zh: '香味', en: 'scent' }, native_examples: [{ ja: 'なみまをただよう', zh: '漂浮在波浪之間。' }, { ja: 'なごやかなふんいきがただよう', zh: '洋溢着和諧的氣氛。' }], dictionary_definition: ['(1) 在空中或水面漂浮，無目的地緩緩遊動。漂。漂浮。漂流。', '(2) 香氣或某種氣氛瀰漫在周圍。也指有這種感覺。充滿。洋溢。瀰漫。'] },
    { dictionary: '繕う', reading: 'つくろう', meaning: 'to mend', meaning_zh: '修補', type: 'godan', group: 'う', level: 'N1', transitivity: 'transitive', context: { ja: '服を', zh: '衣服', en: 'clothes' }, native_examples: [{ ja: '着物のかぎざきをつくろう', zh: '修補衣服剮的口子。' }, { ja: '屋根をつくろって雨もりをなくす', zh: '修繕屋頂，防止漏雨。' }], dictionary_definition: ['(1) 修補衣服等的破綻。修補。修繕。', '(2) 爲了給人以良好的印象，使外表體面些。修飾。裝飾。裝。擺。', '(3) 隱瞞失敗和缺點等，當場巧妙地矇混過去。掩飾。遮掩。'] },
    { dictionary: '償う', reading: 'つぐなう', meaning: 'to compensate', meaning_zh: '補償/贖罪', type: 'godan', group: 'う', level: 'N1', transitivity: 'transitive', context: { ja: '罪を', zh: '罪', en: 'sin' }, native_examples: [{ ja: '功を立てて罪をつぐなう', zh: '立功贖罪。' }, { ja: '罪をつぐなうに足る', zh: '足以贖罪。' }], dictionary_definition: ['以金錢、物品、勞動等來彌補給對方造成的損害。償。贖。賠償。補償。抵償。償還。彌補。'] },
    { dictionary: '養う', reading: 'やしなう', meaning: 'to support', meaning_zh: '養育', type: 'godan', group: 'う', level: 'N1', transitivity: 'transitive', context: { ja: '家族を', zh: '家人', en: 'family' }, native_examples: [{ ja: '孤児をやしなう', zh: '撫養孤兒。' }, { ja: '妻子をやしなう', zh: '養活妻子兒女。' }], dictionary_definition: ['(1) 撫養子女。養育。撫養。', '(2) 從經濟上予以支持，使其生活下去。養活。扶養。', '(3) 飼養照管動物。養。餵養。', '(4) 漸漸養成。培養。養成。', '(5) 保養。休養。養。'] },
    { dictionary: '省みる', reading: 'かえりみる', meaning: 'to reflect', meaning_zh: '反省', type: 'ichidan', level: 'N1', transitivity: 'transitive', context: { ja: '自らを', zh: '自己', en: 'oneself' } },
    { dictionary: '顧みる', reading: 'かえりみる', meaning: 'to look back', meaning_zh: '回顧', type: 'ichidan', level: 'N1', transitivity: 'transitive', context: { ja: '歴史を', zh: '歷史', en: 'history' } },
    { dictionary: '率いる', reading: 'ひきいる', meaning: 'to lead', meaning_zh: '率領', type: 'ichidan', level: 'N1', transitivity: 'transitive', context: { ja: 'チームを', zh: '團隊', en: 'team' }, native_examples: [{ ja: '選手団をひきいて行進する', zh: '率領體育代表隊行進。' }], dictionary_definition: ['帶領許多人前往。也指指揮許多人行動。率領。帶領。'] },
    { dictionary: '強いる', reading: 'しいる', meaning: 'to force', meaning_zh: '強迫', type: 'ichidan', level: 'N1', transitivity: 'transitive', context: { ja: '苦労を', zh: '苦勞', en: 'hardship' }, native_examples: [{ ja: '酒をしいる', zh: '強使人喝酒。' }], dictionary_definition: ['不管對方是否願意，強使人做什麼。強迫。強使。'] },
    { dictionary: '老いる', reading: 'おいる', meaning: 'to age', meaning_zh: '衰老', type: 'ichidan', level: 'N1', transitivity: 'intransitive', context: { ja: '体画', zh: '身體', en: 'body' }, native_examples: [{ ja: 'おいてますますさかん', zh: '老當益壯。' }, { ja: 'おいた松', zh: '老松樹。' }], dictionary_definition: ['(1) 上年紀。老。', '(2) 衰老。陳舊。老邁。'] },
    { dictionary: '懲りる', reading: 'こりる', meaning: 'to learn lesson', meaning_zh: '記取教訓', type: 'ichidan', level: 'N1', transitivity: 'intransitive', context: { ja: '失敗に', zh: '對失敗', en: 'from failure' }, native_examples: [{ ja: '失敗にこりる', zh: '嚐到失敗的苦頭，不想再幹。' }], dictionary_definition: ['由於失敗而喫了苦頭，再也不想幹了。不敢再幹。嚐到苦頭，不想再幹。'] },
    { dictionary: '朽ちる', reading: 'くちる', meaning: 'to rot', meaning_zh: '腐朽', type: 'ichidan', level: 'N1', transitivity: 'intransitive', context: { ja: '木が', zh: '樹木', en: 'wood' }, native_examples: [{ ja: 'いつまでもくちることのない名声', zh: '永垂不朽的名聲。' }], dictionary_definition: ['(1) 爛得不起作用了。朽。腐朽。腐爛。', '(2) 衰敗而消亡。朽。衰亡。磨滅。'] },
    { dictionary: '帯びる', reading: 'おびる', meaning: 'to wear/have', meaning_zh: '佩帶/帶有', type: 'ichidan', level: 'N1', transitivity: 'transitive', context: { ja: '熱を', zh: '熱', en: 'heat' }, native_examples: [{ ja: '勲章をおびる', zh: '佩帶勳章。' }, { ja: 'こしに剣をおびている', zh: '腰裏佩帶着劍。' }], dictionary_definition: ['(1) 帶在身上。帶。佩帶。', '(2) 自己承擔。承擔。負擔。', '(3) 含有某種性質或樣態。帶有。'] },
    { dictionary: '綻びる', reading: 'ほころびる', meaning: 'to come apart', meaning_zh: '綻開', type: 'ichidan', level: 'N1', transitivity: 'intransitive', context: { ja: '顔が', zh: '表情', en: 'face (smile)' }, native_examples: [{ ja: '着物がほころびる', zh: '衣服開線了。' }, { ja: '梅がほころびる', zh: '梅花綻開。' }], dictionary_definition: ['(1) 縫接處的線斷開，出現縫隙。開綻。開線。', '(2) 花蕾初開。綻開。', '(3) 高興得不覺露出笑容。露出笑容。微笑。'] },
    { dictionary: '滅びる', reading: 'ほろびる', meaning: 'to perish', meaning_zh: '滅亡', type: 'ichidan', level: 'N1', transitivity: 'intransitive', context: { ja: '国が', zh: '國家', en: 'nation' } },
    { dictionary: '葬る', reading: 'ほうむる', meaning: 'to bury', meaning_zh: '埋葬', type: 'godan', group: 'る', level: 'N1', transitivity: 'transitive', context: { ja: '闇に', zh: '在黑暗中', en: 'in darkness' }, native_examples: [{ ja: '墓にほうむる', zh: '葬入墳墓。' }, { ja: '事件をやみにほうむる', zh: '把事件暗暗掩蓋起來。' }], dictionary_definition: ['(1) 把遺體或遺骨埋入土中。葬。埋葬。', '(2) 暗中處理，不使人知道。掩蓋。隱瞞。', '(3) 使其不能再在社會上活動。葬送。拋棄。'] },
    { dictionary: '奉る', reading: 'たてまつる', meaning: 'to offer', meaning_zh: '奉獻', type: 'godan', group: 'る', level: 'N1', transitivity: 'transitive', context: { ja: '神を', zh: '神', en: 'god' }, native_examples: [{ ja: '会長にたてまつる', zh: '抬舉(他)作會長。' }], dictionary_definition: ['(1) 向神或長輩呈獻物品。奉獻。', '(2) 只是形式上給人以某種地位，使他高興。捧。抬舉。'] },
]

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
            return { text, reading: map[form] || verb.reading }
        }
        if (verb.dictionary === '来る') {
            const map: Record<string, string> = {
                'masu': 'きます', 'te': 'きて', 'ta': 'きた', 'nai': 'こない',
                'potential': 'こられる', 'passive': 'こられる', 'causative': 'こさせる', 'volitional': 'こよう'
            }
            return { text, reading: map[form] || verb.reading }
        }
    }

    // For regular verbs (Godan/Ichidan), passing the reading as 'dictionary' to conjugateVerb works 
    // because conjugateVerb splits based on the last character (which matches in hiragana too).
    // e.g. 書く(kaku) -> ku. かく(kaku) -> ku.
    // 泳ぐ(oyogu) -> gu. およぐ(oyogu) -> gu.
    // Only verify that godanMap keys (うくぐ...) match the Hiragana endings. Yes they do.

    const reading = conjugateVerb(readingVerb, form)
    return { text, reading }
}

export function generateVerbExample(verb: VerbData, form: string, lang: 'en' | 'zh-TW' | string = 'en'): { sentence: string, translation: string } {
    const conjugated = conjugateVerb(verb, form)
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
                sentence = `毎日、${jaRaw}${conjugated}。`
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
                sentence = `昨日、${jaRaw}${conjugated}。`
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
                sentence = `私は${jaRaw}${conjugated}。`
                translation = `我${verb.dictionary === '行く' ? '能' : '能'}${meaning}${zhObj}。 (可能形)`
                break
            case 'passive':
                // "みんなに 寿司を 食べられた。"
                if (verb.transitivity === 'transitive' && jaRaw) {
                    sentence = `みんなに${jaRaw}${conjugated}。`
                    translation = `被大家${meaning}了${zhObj}。 (受身)`
                } else {
                    sentence = `みんなに${conjugated}。`
                    translation = `被大家${meaning}。 (受身)`
                }
                break
            case 'causative':
                // "子供に 寿司を 食べさせる"
                if (verb.transitivity === 'transitive' && jaRaw) {
                    sentence = `先生は学生に${jaRaw}${conjugated}。`
                    translation = `老師讓學生${meaning}${zhObj}。 (使役)`
                } else {
                    sentence = `子供を${conjugated}。`
                    translation = `讓孩子${meaning}。 (使役)`
                }
                break
            case 'volitional':
                sentence = `一緒に${jaRaw}${conjugated}。`
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
                sentence = `毎日、${jaRaw}${conjugated}。`
                translation = `I ${meaning}${enObj} every day. (Polite)`
                break
            case 'te':
                sentence = `${jaRaw}${conjugated}ください。`
                translation = `Please ${meaning}${enObj}.`
                break
            case 'ta':
                sentence = `昨日、${jaRaw}${conjugated}。`
                translation = `I ${meaning}${enObj} yesterday. (Past)`
                break
            case 'nai':
                sentence = `${jaRaw}${conjugated}でください。`
                translation = `Please do not ${meaning}${enObj}.`
                break
            case 'potential':
                sentence = `私は${jaRaw}${conjugated}。`
                translation = `I can ${meaning}${enObj}.`
                break
            case 'passive':
                sentence = `私は${conjugated}。`
                translation = `I was ${meaning} (Passive).`
                break
            case 'causative':
                sentence = `母は私に${conjugated}。`
                translation = `Mother made me ${meaning}.`
                break
            case 'volitional':
                sentence = `一緒に${jaRaw}${conjugated}。`
                translation = `Let's ${meaning}${enObj} together.`
                break
            default:
                sentence = conjugated
                translation = meaning
        }
    }

    return { sentence, translation }
}

export function generateVerbQuestion(level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1' = 'N5') {
    // Filter verbs by level, or fallback to N5/N4 if none found for high levels
    let levelVerbs = commonVerbs.filter(v => v.level === level)
    if (levelVerbs.length === 0) {
        levelVerbs = commonVerbs.filter(v => v.level === 'N5' || v.level === 'N4')
    }

    const verb = levelVerbs[Math.floor(Math.random() * levelVerbs.length)]

    const forms = ['masu', 'te', 'ta', 'nai', 'potential', 'passive']
    const targetForm = forms[Math.floor(Math.random() * forms.length)]

    const correct = conjugateVerb(verb, targetForm)

    // Generate tricky distractors
    const distractors: string[] = []

    // Common mistake: ra-nuki (ら抜き) for potential
    if (targetForm === 'potential' && verb.type === 'ichidan') {
        const stem = verb.dictionary.slice(0, -1)
        distractors.push(stem + 'れる') // Wrong: 食べれる instead of 食べられる
    }

    // Wrong verb type conjugation
    if (verb.type === 'godan') {
        const stem = verb.dictionary.slice(0, -1)
        distractors.push(stem + 'て') // Ichidan-style mistake
    }

    // Add other random conjugations as distractors
    const otherForms = forms.filter(f => f !== targetForm)
    otherForms.forEach(f => {
        const wrongForm = conjugateVerb(verb, f)
        if (wrongForm !== correct && !distractors.includes(wrongForm)) {
            distractors.push(wrongForm)
        }
    })

    // Ensure we have exactly 3 distractors
    while (distractors.length < 3) {
        const randomVerb = levelVerbs[Math.floor(Math.random() * levelVerbs.length)]
        const randomForm = conjugateVerb(randomVerb, targetForm)
        if (randomForm !== correct && !distractors.includes(randomForm)) {
            distractors.push(randomForm)
        }
    }

    const formNames: Record<string, string> = {
        'masu': 'ます形',
        'te': 'て形',
        'ta': 'た形',
        'nai': 'ない形',
        'potential': '可能形',
        'passive': '受身形',
    }

    return {
        stem: `「${verb.dictionary}」を${formNames[targetForm]}に活用させてください。`,
        correct,
        options: [correct, ...distractors.slice(0, 3)].sort(() => Math.random() - 0.5),
        explanation: `「${verb.dictionary}」の${formNames[targetForm]}は「${correct}」です。`,
        level,
        source: 'verb_conjugation',
    }
}
