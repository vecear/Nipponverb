// Common Japanese verbs with conjugation patterns
// Based on real-world usage patterns

export interface VerbData {
    dictionary: string // 辞書形
    reading: string // ふりがな (Hiragana)
    meaning: string
    meaning_zh: string // Traditional Chinese meaning
    type: 'godan' | 'ichidan' | 'irregular'
    group?: string // For godan: う, く, ぐ, す, つ, ぬ, ぶ, む, る
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'
    transitivity?: 'transitive' | 'intransitive' // Helpful for example generation
}

export const commonVerbs: VerbData[] = [
    // N5 Verbs
    { dictionary: '行く', reading: 'いく', meaning: 'to go', meaning_zh: '去', type: 'godan', group: 'く', level: 'N5', transitivity: 'intransitive' },
    { dictionary: '見る', reading: 'みる', meaning: 'to see/watch', meaning_zh: '看', type: 'ichidan', level: 'N5', transitivity: 'transitive' },
    { dictionary: '数える', reading: 'かぞえる', meaning: 'to count', meaning_zh: '數', type: 'ichidan', level: 'N5', transitivity: 'transitive' },
    { dictionary: '聞く', reading: 'きく', meaning: 'to listen/ask', meaning_zh: '聽/問', type: 'godan', group: 'く', level: 'N5', transitivity: 'transitive' },
    { dictionary: '食べる', reading: 'たべる', meaning: 'to eat', meaning_zh: '吃', type: 'ichidan', level: 'N5', transitivity: 'transitive' },
    { dictionary: '話す', reading: 'はなす', meaning: 'to speak', meaning_zh: '說', type: 'godan', group: 'す', level: 'N5', transitivity: 'transitive' },
    { dictionary: '買う', reading: 'かう', meaning: 'to buy', meaning_zh: '買', type: 'godan', group: 'う', level: 'N5', transitivity: 'transitive' },
    { dictionary: '書く', reading: 'かく', meaning: 'to write', meaning_zh: '寫', type: 'godan', group: 'く', level: 'N5', transitivity: 'transitive' },
    { dictionary: '泳ぐ', reading: 'およぐ', meaning: 'to swim', meaning_zh: '游泳', type: 'godan', group: 'ぐ', level: 'N5', transitivity: 'intransitive' },
    { dictionary: '待つ', reading: 'まつ', meaning: 'to wait', meaning_zh: '等', type: 'godan', group: 'つ', level: 'N5', transitivity: 'transitive' },
    { dictionary: '飲む', reading: 'のむ', meaning: 'to drink', meaning_zh: '喝', type: 'godan', group: 'む', level: 'N5', transitivity: 'transitive' },
    { dictionary: '呼ぶ', reading: 'よぶ', meaning: 'to call', meaning_zh: '呼叫', type: 'godan', group: 'ぶ', level: 'N5', transitivity: 'transitive' },
    { dictionary: '帰る', reading: 'かえる', meaning: 'to return', meaning_zh: '回家', type: 'godan', group: 'る', level: 'N5', transitivity: 'intransitive' },
    { dictionary: '会う', reading: 'あう', meaning: 'to meet', meaning_zh: '見面', type: 'godan', group: 'う', level: 'N5', transitivity: 'intransitive' },
    { dictionary: '来る', reading: 'くる', meaning: 'to come', meaning_zh: '來', type: 'irregular', level: 'N5', transitivity: 'intransitive' },
    { dictionary: 'する', reading: 'する', meaning: 'to do', meaning_zh: '做', type: 'irregular', level: 'N5', transitivity: 'transitive' },
    { dictionary: 'ある', reading: 'ある', meaning: 'to exist (inanimate)', meaning_zh: '有/在(物品)', type: 'godan', group: 'る', level: 'N5', transitivity: 'intransitive' },
    { dictionary: 'いる', reading: 'いる', meaning: 'to exist (animate)', meaning_zh: '有/在(生物)', type: 'ichidan', level: 'N5', transitivity: 'intransitive' },
    { dictionary: '死ぬ', reading: 'しぬ', meaning: 'to die', meaning_zh: '死', type: 'godan', group: 'ぬ', level: 'N5', transitivity: 'intransitive' },
    { dictionary: '遊ぶ', reading: 'あそぶ', meaning: 'to play', meaning_zh: '玩', type: 'godan', group: 'ぶ', level: 'N5', transitivity: 'intransitive' },
    { dictionary: '読む', reading: 'よむ', meaning: 'to read', meaning_zh: '讀', type: 'godan', group: 'む', level: 'N5', transitivity: 'transitive' },
    { dictionary: '分かる', reading: 'わかる', meaning: 'to understand', meaning_zh: '明白', type: 'godan', group: 'る', level: 'N5', transitivity: 'intransitive' },
    { dictionary: '歩く', reading: 'あるく', meaning: 'to walk', meaning_zh: '走路', type: 'godan', group: 'く', level: 'N5', transitivity: 'intransitive' },
    { dictionary: '走る', reading: 'はしる', meaning: 'to run', meaning_zh: '跑', type: 'godan', group: 'る', level: 'N5', transitivity: 'intransitive' },
    { dictionary: '座る', reading: 'すわる', meaning: 'to sit', meaning_zh: '坐', type: 'godan', group: 'る', level: 'N5', transitivity: 'intransitive' },
    { dictionary: '立つ', reading: 'たつ', meaning: 'to stand', meaning_zh: '站立', type: 'godan', group: 'つ', level: 'N5', transitivity: 'intransitive' },
    { dictionary: '寝る', reading: 'ねる', meaning: 'to sleep', meaning_zh: '睡覺', type: 'ichidan', level: 'N5', transitivity: 'intransitive' },
    { dictionary: '起きる', reading: 'おきる', meaning: 'to wake up', meaning_zh: '起床', type: 'ichidan', level: 'N5', transitivity: 'intransitive' },
    { dictionary: '教える', reading: 'おしえる', meaning: 'to teach', meaning_zh: '教導', type: 'ichidan', level: 'N5', transitivity: 'transitive' },
    { dictionary: '入れる', reading: 'いれる', meaning: 'to put in', meaning_zh: '放入', type: 'ichidan', level: 'N5', transitivity: 'transitive' },
    { dictionary: '出る', reading: 'でる', meaning: 'to exit', meaning_zh: '出去', type: 'ichidan', level: 'N5', transitivity: 'intransitive' },
    { dictionary: '覚える', reading: 'おぼえる', meaning: 'to remember', meaning_zh: '記住', type: 'ichidan', level: 'N5', transitivity: 'transitive' },
    { dictionary: '忘れる', reading: 'わすれる', meaning: 'to forget', meaning_zh: '忘記', type: 'ichidan', level: 'N5', transitivity: 'transitive' },
    { dictionary: '送る', reading: 'おくる', meaning: 'to send', meaning_zh: '送/寄', type: 'godan', group: 'る', level: 'N5', transitivity: 'transitive' },
    { dictionary: '洗う', reading: 'あらう', meaning: 'to wash', meaning_zh: '洗', type: 'godan', group: 'う', level: 'N5', transitivity: 'transitive' },

    // N4 Verbs
    { dictionary: '決める', reading: 'きめる', meaning: 'to decide', meaning_zh: '決定', type: 'ichidan', level: 'N4', transitivity: 'transitive' },
    { dictionary: '調べる', reading: 'しらべる', meaning: 'to investigate', meaning_zh: '調查', type: 'ichidan', level: 'N4', transitivity: 'transitive' },
    { dictionary: '捨てる', reading: 'すてる', meaning: 'to throw away', meaning_zh: '丟掉', type: 'ichidan', level: 'N4', transitivity: 'transitive' },
    { dictionary: '始める', reading: 'はじめる', meaning: 'to begin (something)', meaning_zh: '開始', type: 'ichidan', level: 'N4', transitivity: 'transitive' },
    { dictionary: '終わる', reading: 'おわる', meaning: 'to end', meaning_zh: '結束', type: 'godan', group: 'る', level: 'N4', transitivity: 'intransitive' },
    { dictionary: '止まる', reading: 'とまる', meaning: 'to stop', meaning_zh: '停止', type: 'godan', group: 'る', level: 'N4', transitivity: 'intransitive' },
    { dictionary: '泊まる', reading: 'とまる', meaning: 'to stay overnight', meaning_zh: '過夜', type: 'godan', group: 'る', level: 'N4', transitivity: 'intransitive' },
    { dictionary: '乗る', reading: 'のる', meaning: 'to ride', meaning_zh: '乘坐', type: 'godan', group: 'る', level: 'N4', transitivity: 'intransitive' },
    { dictionary: '降りる', reading: 'おりる', meaning: 'to get off', meaning_zh: '下車', type: 'ichidan', level: 'N4', transitivity: 'intransitive' },
    { dictionary: '借りる', reading: 'かりる', meaning: 'to borrow', meaning_zh: '借入', type: 'ichidan', level: 'N4', transitivity: 'transitive' },
    { dictionary: '貸す', reading: 'かす', meaning: 'to lend', meaning_zh: '借出', type: 'godan', group: 'す', level: 'N4', transitivity: 'transitive' },
    { dictionary: '返す', reading: 'かえす', meaning: 'to return (something)', meaning_zh: '歸還', type: 'godan', group: 'す', level: 'N4', transitivity: 'transitive' },
    { dictionary: '急ぐ', reading: 'いそぐ', meaning: 'to hurry', meaning_zh: '趕快', type: 'godan', group: 'ぐ', level: 'N4', transitivity: 'intransitive' },
    { dictionary: '手伝う', reading: 'てつだう', meaning: 'to help', meaning_zh: '幫忙', type: 'godan', group: 'う', level: 'N4', transitivity: 'transitive' },
    { dictionary: '働く', reading: 'はたらく', meaning: 'to work', meaning_zh: '工作', type: 'godan', group: 'く', level: 'N4', transitivity: 'intransitive' },
    { dictionary: '探す', reading: 'さがす', meaning: 'to look for', meaning_zh: '尋找', type: 'godan', group: 'す', level: 'N4', transitivity: 'transitive' },
    { dictionary: '笑う', reading: 'わらう', meaning: 'to laugh', meaning_zh: '笑', type: 'godan', group: 'う', level: 'N4', transitivity: 'intransitive' },
    { dictionary: '泣く', reading: 'なく', meaning: 'to cry', meaning_zh: '哭', type: 'godan', group: 'く', level: 'N4', transitivity: 'intransitive' },
    { dictionary: '怒る', reading: 'おこる', meaning: 'to get angry', meaning_zh: '生氣', type: 'godan', group: 'る', level: 'N4', transitivity: 'intransitive' },
    { dictionary: '信じる', reading: 'しんじる', meaning: 'to believe', meaning_zh: '相信', type: 'ichidan', level: 'N4', transitivity: 'transitive' },
    { dictionary: '考える', reading: 'かんがえる', meaning: 'to think', meaning_zh: '思考', type: 'ichidan', level: 'N4', transitivity: 'transitive' },
    { dictionary: '着る', reading: 'きる', meaning: 'to wear', meaning_zh: '穿', type: 'ichidan', level: 'N4', transitivity: 'transitive' },
    { dictionary: '脱ぐ', reading: 'ぬぐ', meaning: 'to take off (clothes)', meaning_zh: '脫', type: 'godan', group: 'ぐ', level: 'N4', transitivity: 'transitive' },
    { dictionary: '晴れる', reading: 'はれる', meaning: 'to clear up', meaning_zh: '放晴', type: 'ichidan', level: 'N4', transitivity: 'intransitive' },
    { dictionary: '曇る', reading: 'くもる', meaning: 'to become cloudy', meaning_zh: '變陰天', type: 'godan', group: 'る', level: 'N4', transitivity: 'intransitive' },
    { dictionary: '直す', reading: 'なおす', meaning: 'to fix', meaning_zh: '修理', type: 'godan', group: 'す', level: 'N4', transitivity: 'transitive' },
    { dictionary: '治る', reading: 'なおる', meaning: 'to be cured', meaning_zh: '治好', type: 'godan', group: 'る', level: 'N4', transitivity: 'intransitive' },

    // N3 Verbs
    { dictionary: '超える', reading: 'こえる', meaning: 'to exceed', meaning_zh: '超過', type: 'ichidan', level: 'N3', transitivity: 'intransitive' },
    { dictionary: '加える', reading: 'くわえる', meaning: 'to add', meaning_zh: '增加', type: 'ichidan', level: 'N3', transitivity: 'transitive' },
    { dictionary: '比べる', reading: 'くらべる', meaning: 'to compare', meaning_zh: '比較', type: 'ichidan', level: 'N3', transitivity: 'transitive' },
    { dictionary: '守る', reading: 'まもる', meaning: 'to protect', meaning_zh: '保護', type: 'godan', group: 'る', level: 'N3', transitivity: 'transitive' },
    { dictionary: '殺す', reading: 'ころす', meaning: 'to kill', meaning_zh: '殺', type: 'godan', group: 'す', level: 'N3', transitivity: 'transitive' },
    { dictionary: '戦う', reading: 'たたかう', meaning: 'to fight', meaning_zh: '戰鬥', type: 'godan', group: 'う', level: 'N3', transitivity: 'intransitive' },
    { dictionary: '負ける', reading: 'まける', meaning: 'to lose', meaning_zh: '輸', type: 'ichidan', level: 'N3', transitivity: 'intransitive' },
    { dictionary: '勝つ', reading: 'かつ', meaning: 'to win', meaning_zh: '贏', type: 'godan', group: 'つ', level: 'N3', transitivity: 'intransitive' },
    { dictionary: '選ぶ', reading: 'えらぶ', meaning: 'to choose', meaning_zh: '選擇', type: 'godan', group: 'ぶ', level: 'N3', transitivity: 'transitive' },
    { dictionary: '喜ぶ', reading: 'よろこぶ', meaning: 'to be happy', meaning_zh: '高興', type: 'godan', group: 'ぶ', level: 'N3', transitivity: 'intransitive' },
    { dictionary: '増える', reading: 'ふえる', meaning: 'to increase', meaning_zh: '增加', type: 'ichidan', level: 'N3', transitivity: 'intransitive' },
    { dictionary: '減る', reading: 'へる', meaning: 'to decrease', meaning_zh: '減少', type: 'godan', group: 'る', level: 'N3', transitivity: 'intransitive' },
    { dictionary: '変わる', reading: 'かわる', meaning: 'to change', meaning_zh: '改變', type: 'godan', group: 'る', level: 'N3', transitivity: 'intransitive' },
    { dictionary: '頼む', reading: 'たのむ', meaning: 'to request', meaning_zh: '請求', type: 'godan', group: 'む', level: 'N3', transitivity: 'transitive' },
    { dictionary: '断る', reading: 'ことわる', meaning: 'to refuse', meaning_zh: '拒絕', type: 'godan', group: 'る', level: 'N3', transitivity: 'transitive' },
    { dictionary: '育てる', reading: 'そだてる', meaning: 'to raise/rear', meaning_zh: '養育', type: 'ichidan', level: 'N3', transitivity: 'transitive' },
    { dictionary: '助ける', reading: 'たすける', meaning: 'to save/help', meaning_zh: '幫助', type: 'ichidan', level: 'N3', transitivity: 'transitive' },
    { dictionary: '受ける', reading: 'うける', meaning: 'to receive/take (exam)', meaning_zh: '接受', type: 'ichidan', level: 'N3', transitivity: 'transitive' },
    { dictionary: '落ちる', reading: 'おちる', meaning: 'to fall', meaning_zh: '掉落', type: 'ichidan', level: 'N3', transitivity: 'intransitive' },
    { dictionary: '届く', reading: 'とどく', meaning: 'to arrive/reach', meaning_zh: '送達', type: 'godan', group: 'く', level: 'N3', transitivity: 'intransitive' },
    { dictionary: '通う', reading: 'かよう', meaning: 'to commute', meaning_zh: '通勤/通學', type: 'godan', group: 'う', level: 'N3', transitivity: 'intransitive' },

    // N2 Verbs
    { dictionary: '甘やかす', reading: 'あまやかす', meaning: 'to spoil (a child)', meaning_zh: '溺愛', type: 'godan', group: 'す', level: 'N2', transitivity: 'transitive' },
    { dictionary: '疑う', reading: 'うたがう', meaning: 'to doubt', meaning_zh: '懷疑', type: 'godan', group: 'う', level: 'N2', transitivity: 'transitive' },
    { dictionary: '敬う', reading: 'うやまう', meaning: 'to respect', meaning_zh: '尊敬', type: 'godan', group: 'う', level: 'N2', transitivity: 'transitive' },
    { dictionary: '占う', reading: 'うらなう', meaning: 'to tell fortunes', meaning_zh: '占卜', type: 'godan', group: 'う', level: 'N2', transitivity: 'transitive' },
    { dictionary: '補う', reading: 'おぎなう', meaning: 'to compensate for', meaning_zh: '補償', type: 'godan', group: 'う', level: 'N2', transitivity: 'transitive' },
    { dictionary: '恐れる', reading: 'おそれる', meaning: 'to fear', meaning_zh: '恐懼', type: 'ichidan', level: 'N2', transitivity: 'transitive' },
    { dictionary: '抱える', reading: 'かかえる', meaning: 'to hold/carry', meaning_zh: '抱/承擔', type: 'ichidan', level: 'N2', transitivity: 'transitive' },
    { dictionary: '震える', reading: 'ふるえる', meaning: 'to shiver', meaning_zh: '發抖', type: 'ichidan', level: 'N2', transitivity: 'intransitive' },
    { dictionary: '優れる', reading: 'すぐれる', meaning: 'to excel', meaning_zh: '優秀', type: 'ichidan', level: 'N2', transitivity: 'intransitive' },
    { dictionary: '恵まれる', reading: 'めぐまれる', meaning: 'to be blessed with', meaning_zh: '受惠', type: 'ichidan', level: 'N2', transitivity: 'intransitive' },
    { dictionary: '頼る', reading: 'たよる', meaning: 'to rely on', meaning_zh: '依賴', type: 'godan', group: 'る', level: 'N2', transitivity: 'intransitive' },
    { dictionary: '努める', reading: 'つとめる', meaning: 'to endeavor', meaning_zh: '努力', type: 'ichidan', level: 'N2', transitivity: 'intransitive' },
    { dictionary: '務める', reading: 'つとめる', meaning: 'to serve/work', meaning_zh: '擔任', type: 'ichidan', level: 'N2', transitivity: 'intransitive' },
    { dictionary: '攻める', reading: 'せめる', meaning: 'to attack', meaning_zh: '攻擊', type: 'ichidan', level: 'N2', transitivity: 'transitive' },
    { dictionary: '眺める', reading: 'ながめる', meaning: 'to gaze at', meaning_zh: '眺望', type: 'ichidan', level: 'N2', transitivity: 'transitive' },
    { dictionary: '縮む', reading: 'ちぢむ', meaning: 'to shrink', meaning_zh: '縮水', type: 'godan', group: 'む', level: 'N2', transitivity: 'intransitive' },
    { dictionary: '沈む', reading: 'しずむ', meaning: 'to sink', meaning_zh: '沉沒', type: 'godan', group: 'む', level: 'N2', transitivity: 'intransitive' },
    { dictionary: '学ぶ', reading: 'まなぶ', meaning: 'to learn', meaning_zh: '學習', type: 'godan', group: 'ぶ', level: 'N2', transitivity: 'transitive' },
    { dictionary: '叫ぶ', reading: 'さけぶ', meaning: 'to shout', meaning_zh: '大叫', type: 'godan', group: 'ぶ', level: 'N2', transitivity: 'intransitive' },
    { dictionary: '望む', reading: 'のぞむ', meaning: 'to desire', meaning_zh: '期望', type: 'godan', group: 'む', level: 'N2', transitivity: 'transitive' },

    // N1 Verbs
    { dictionary: '承る', reading: 'うけたまわる', meaning: 'to acknowledge/hear (humble)', meaning_zh: '承蒙/遵從', type: 'godan', group: 'る', level: 'N1', transitivity: 'transitive' },
    { dictionary: '著す', reading: 'あらわす', meaning: 'to publish/write', meaning_zh: '著述/寫書', type: 'godan', group: 'す', level: 'N1', transitivity: 'transitive' },
    { dictionary: '促す', reading: 'うながす', meaning: 'to urge/prompt', meaning_zh: '催促', type: 'godan', group: 'す', level: 'N1', transitivity: 'transitive' },
    { dictionary: '潤う', reading: 'うるおう', meaning: 'to be moist/enriched', meaning_zh: '滋潤/寬裕', type: 'godan', group: 'う', level: 'N1', transitivity: 'intransitive' },
    { dictionary: '漂う', reading: 'ただよう', meaning: 'to drift', meaning_zh: '漂浮', type: 'godan', group: 'う', level: 'N1', transitivity: 'intransitive' },
    { dictionary: '繕う', reading: 'つくろう', meaning: 'to mend/repair', meaning_zh: '修補', type: 'godan', group: 'う', level: 'N1', transitivity: 'transitive' },
    { dictionary: '償う', reading: 'つぐなう', meaning: 'to compensate/atone', meaning_zh: '補償/贖罪', type: 'godan', group: 'う', level: 'N1', transitivity: 'transitive' },
    { dictionary: '養う', reading: 'やしなう', meaning: 'to support/feed', meaning_zh: '養育/扶養', type: 'godan', group: 'う', level: 'N1', transitivity: 'transitive' },
    { dictionary: '省みる', reading: 'かえりみる', meaning: 'to reflect upon', meaning_zh: '反省', type: 'ichidan', level: 'N1', transitivity: 'transitive' },
    { dictionary: '顧みる', reading: 'かえりみる', meaning: 'to look back', meaning_zh: '回顧', type: 'ichidan', level: 'N1', transitivity: 'transitive' },
    { dictionary: '率いる', reading: 'ひきいる', meaning: 'to lead', meaning_zh: '率領', type: 'ichidan', level: 'N1', transitivity: 'transitive' },
    { dictionary: '強いる', reading: 'しいる', meaning: 'to force', meaning_zh: '強迫', type: 'ichidan', level: 'N1', transitivity: 'transitive' },
    { dictionary: '老いる', reading: 'おいる', meaning: 'to age', meaning_zh: '衰老', type: 'ichidan', level: 'N1', transitivity: 'intransitive' },
    { dictionary: '懲りる', reading: 'こりる', meaning: 'to learn a lesson', meaning_zh: '記取教訓', type: 'ichidan', level: 'N1', transitivity: 'intransitive' },
    { dictionary: '朽ちる', reading: 'くちる', meaning: 'to rot', meaning_zh: '腐朽', type: 'ichidan', level: 'N1', transitivity: 'intransitive' },
    { dictionary: '帯びる', reading: 'おびる', meaning: 'to wear/have a trace of', meaning_zh: '佩帶/帶有', type: 'ichidan', level: 'N1', transitivity: 'transitive' },
    { dictionary: '綻びる', reading: 'ほころびる', meaning: 'to come apart at seams', meaning_zh: '綻開/破洞', type: 'ichidan', level: 'N1', transitivity: 'intransitive' },
    { dictionary: '滅びる', reading: 'ほろびる', meaning: 'to perish', meaning_zh: '滅亡', type: 'ichidan', level: 'N1', transitivity: 'intransitive' },
    { dictionary: '葬る', reading: 'ほうむる', meaning: 'to bury', meaning_zh: '埋葬', type: 'godan', group: 'る', level: 'N1', transitivity: 'transitive' },
    { dictionary: '奉る', reading: 'たてまつる', meaning: 'to offer/dedicate', meaning_zh: '奉獻', type: 'godan', group: 'る', level: 'N1', transitivity: 'transitive' },
]

// Conjugation rules
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

export function generateVerbExample(verb: VerbData, form: string, lang: 'en' | 'zh-TW' | string = 'en'): { sentence: string, translation: string } {
    const conjugated = conjugateVerb(verb, form)
    let sentence = ''
    let translation = ''

    // Check if the language is Chinese-variant
    const isZh = lang.startsWith('zh') || lang === 'zh-TW'
    const meaning = isZh ? verb.meaning_zh : verb.meaning.split('/')[0]

    if (isZh) {
        // Traditional Chinese Templates
        switch (form) {
            case 'masu':
                sentence = `私はよく${conjugated}。`
                translation = `我經常${meaning}。 (禮貌形)`
                break
            case 'te':
                sentence = `${conjugated}ください。`
                translation = `請${meaning}。`
                break
            case 'ta':
                sentence = `昨日、${conjugated}。`
                translation = `昨天，我${meaning}了。 (過去)`
                break
            case 'nai':
                sentence = `${conjugated}でください。`
                translation = `請不要${meaning}。`
                break
            case 'potential':
                sentence = `私は${conjugated}。`
                translation = `我${verb.dictionary === '行く' ? '能' : '能/會'}${meaning}。 (可能形)`
                break
            case 'passive':
                sentence = `私は${conjugated}。`
                translation = `我被${meaning}了。 (受身)`
                break
            case 'causative':
                sentence = `母は私に${conjugated}。`
                translation = `媽媽讓我${meaning}。 (使役)`
                break
            case 'volitional':
                sentence = `一緒に${conjugated}。`
                translation = `一起${meaning}吧。 (意向)`
                break
            default:
                sentence = conjugated
                translation = meaning
        }
    } else {
        // English Templates
        switch (form) {
            case 'masu':
                sentence = `私はよく${conjugated}。`
                translation = `I often ${meaning}. (Polite)`
                break
            case 'te':
                sentence = `${conjugated}ください。`
                translation = `Please ${meaning}.`
                break
            case 'ta':
                sentence = `昨日、${conjugated}。`
                translation = `Yesterday, I ${meaning} (past).`
                break
            case 'nai':
                sentence = `${conjugated}でください。`
                translation = `Please do not ${meaning}.`
                break
            case 'potential':
                sentence = `私は${conjugated}。`
                translation = `I can ${meaning}.`
                break
            case 'passive':
                sentence = `私は${conjugated}。`
                translation = `I was ${meaning} (passive).`
                break
            case 'causative':
                sentence = `母は私に${conjugated}。`
                translation = `Mother made me ${meaning}.`
                break
            case 'volitional':
                sentence = `一緒に${conjugated}。`
                translation = `Let's ${meaning} together.`
                break
            default:
                sentence = conjugated
                translation = meaning
        }
    }

    return { sentence, translation }
}

// Generate tricky verb conjugation questions
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
