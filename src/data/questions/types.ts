export interface StaticQuestion {
    id: string
    prob: string
    prob_zh: string
    options: {
        text: string
        reason?: string // Explanation for why this option is wrong (or right)
    }[]
    correctIndex: number
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'
    tag?: string // e.g. 'masu', 'te', 'potential'
    correctRule?: string // Detailed explanation for incorrect choices
}
