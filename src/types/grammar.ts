export interface GrammarExample {
    japanese: string;
    chinese: string;
    note?: string;
    grammarRef?: string;
}

export interface GrammarUsage {
    usageId: number;
    title?: string;
    description: string;
    examples: GrammarExample[];
}

export interface AnalysisPoint {
    rule: string;
    example?: GrammarExample;
    examples?: GrammarExample[];
}

export interface GrammarAnalysis {
    title: string;
    description?: string;
    points?: AnalysisPoint[];
    examples?: GrammarExample[];
    additionalNote?: string;
    comparison?: {
        point: string;
        correct?: { sentence: string; note: string };
        incorrect?: { sentence: string; note: string };
    }[];
}

export interface QuizQuestion {
    id: string;
    sentence: string;
    options: string[];
    correctIndex: number;
    grammarRef?: string;
    explanation?: string;
}

export interface GrammarPoint {
    id: string;
    pattern: string;
    connection: string;
    translation: string;
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
    explanation: GrammarUsage[];
    analysis?: GrammarAnalysis;
    quiz: QuizQuestion[];
}

export interface UnitTest {
    unitNumber: number;
    unitTitle: string;
    questions: (QuizQuestion & { tag?: string })[];
}
