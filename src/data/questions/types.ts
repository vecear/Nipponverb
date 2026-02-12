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

// ─── 統一題目格式 ───

/** 統一選項格式 */
export interface UnifiedOption {
    text: string    // 選項文字（含振假名標記）
    reason: string  // 必填：為何正確/錯誤
}

/** 結構化詳解 */
export interface StructuredExplanation {
    keyPoint: string           // 【考點】考什麼
    analysis: string           // 【解析】核心解釋
    comparisons?: string[]     // 【相關詞比較】每項為一行比較
    commonMistakes?: string[]  // 【易錯點】每項：「○ 正確 / × 錯誤 → 原因」
    trapNote?: string          // 陷阱說明（陷阱題用）
    relatedRules?: string[]    // 相關文法/音變規則
    furiganaNote?: string      // 讀音補充標註
}

/** 統一題目格式（所有類別共用） */
export interface UnifiedQuestion {
    id: string
    category: 'gojuon' | 'verbs' | 'grammar' | 'kanji' | 'vocabulary' | 'dates'
    subcategory?: string       // e.g., 'masu', 'counters', 'hiragana'
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'
    tags?: string[]            // e.g., ['conjugation', 'te-form']

    // 題目內容
    stem: string               // 日文題幹（含振假名 {kanji}{reading}）
    stemZh: string             // 中文翻譯

    // 選項
    options: UnifiedOption[]
    correctIndex: number

    // 結構化詳解
    explanation: StructuredExplanation

    // 可選
    dialogue?: { speakerA: string; speakerB: string }
    source?: string
}
