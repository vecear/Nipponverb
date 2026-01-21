// Common Japanese verbs with conjugation patterns
// Based on real-world usage patterns

export interface VerbData {
    dictionary: string // 辞書形
    meaning: string
    type: 'godan' | 'ichidan' | 'irregular'
    group?: string // For godan: う, く, ぐ, す, つ, ぬ, ぶ, む, る
}

export const commonVerbs: VerbData[] = [
    // Godan verbs (五段動詞)
    { dictionary: '行く', meaning: 'to go', type: 'godan', group: 'く' },
    { dictionary: '書く', meaning: 'to write', type: 'godan', group: 'く' },
    { dictionary: '聞く', meaning: 'to listen/ask', type: 'godan', group: 'く' },
    { dictionary: '泳ぐ', meaning: 'to swim', type: 'godan', group: 'ぐ' },
    { dictionary: '話す', meaning: 'to speak', type: 'godan', group: 'す' },
    { dictionary: '待つ', meaning: 'to wait', type: 'godan', group: 'つ' },
    { dictionary: '死ぬ', meaning: 'to die', type: 'godan', group: 'ぬ' },
    { dictionary: '遊ぶ', meaning: 'to play', type: 'godan', group: 'ぶ' },
    { dictionary: '読む', meaning: 'to read', type: 'godan', group: 'む' },
    { dictionary: '買う', meaning: 'to buy', type: 'godan', group: 'う' },
    { dictionary: '会う', meaning: 'to meet', type: 'godan', group: 'う' },
    { dictionary: '帰る', meaning: 'to return', type: 'godan', group: 'る' },
    { dictionary: '作る', meaning: 'to make', type: 'godan', group: 'る' },
    { dictionary: '分かる', meaning: 'to understand', type: 'godan', group: 'る' },
    { dictionary: '飲む', meaning: 'to drink', type: 'godan', group: 'む' },
    { dictionary: '持つ', meaning: 'to hold', type: 'godan', group: 'つ' },
    { dictionary: '立つ', meaning: 'to stand', type: 'godan', group: 'つ' },
    { dictionary: '座る', meaning: 'to sit', type: 'godan', group: 'る' },
    { dictionary: '歩く', meaning: 'to walk', type: 'godan', group: 'く' },
    { dictionary: '走る', meaning: 'to run', type: 'godan', group: 'る' },

    // Ichidan verbs (一段動詞)
    { dictionary: '食べる', meaning: 'to eat', type: 'ichidan' },
    { dictionary: '見る', meaning: 'to see/watch', type: 'ichidan' },
    { dictionary: '起きる', meaning: 'to wake up', type: 'ichidan' },
    { dictionary: '寝る', meaning: 'to sleep', type: 'ichidan' },
    { dictionary: '教える', meaning: 'to teach', type: 'ichidan' },
    { dictionary: '考える', meaning: 'to think', type: 'ichidan' },
    { dictionary: '着る', meaning: 'to wear', type: 'ichidan' },
    { dictionary: '開ける', meaning: 'to open', type: 'ichidan' },
    { dictionary: '閉める', meaning: 'to close', type: 'ichidan' },
    { dictionary: '忘れる', meaning: 'to forget', type: 'ichidan' },
    { dictionary: '覚える', meaning: 'to remember', type: 'ichidan' },
    { dictionary: '出る', meaning: 'to exit', type: 'ichidan' },
    { dictionary: '入れる', meaning: 'to put in', type: 'ichidan' },

    // Irregular verbs (不規則動詞)
    { dictionary: 'する', meaning: 'to do', type: 'irregular' },
    { dictionary: '来る', meaning: 'to come', type: 'irregular' },
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

// Generate tricky verb conjugation questions
export function generateVerbQuestion(level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1' = 'N5') {
    const verb = commonVerbs[Math.floor(Math.random() * commonVerbs.length)]

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
        const randomVerb = commonVerbs[Math.floor(Math.random() * commonVerbs.length)]
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
