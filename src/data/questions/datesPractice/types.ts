// 日期及數量詞練習題型別定義

export interface DatesPracticeQuestion {
    id: string;
    category: 'numbers' | 'timeDate' | 'counters' | 'questionCounters';
    subcategory: string;
    type: 'pronunciation' | 'sentence' | 'dialogue';
    isTrap: boolean;                      // 是否為陷阱題

    // 題目
    stem: string;                         // 日文題幹（含振假名標記）
    stem_zh: string;                      // 中文翻譯

    // 對話題額外欄位
    dialogue?: {
        speakerA: string;
        speakerB: string;
    };

    // 選項
    options: {
        text: string;                     // 選項文字（平假名）
        isCorrect: boolean;
        reason: string;                   // 詳細解說
    }[];

    correctIndex: number;

    // 詳解
    explanation: {
        correctRule: string;              // 正確答案的規則說明
        trapExplanation?: string;         // 陷阱說明（若為陷阱題）
        relatedRules: string[];           // 相關音變規則
        furiganaNote?: string;            // 漢字讀音標註
    };

    // 參考資料
    sourceItem: {
        value: string | number;
        kanji: string;
        reading: string;
    };
}

export interface PracticeCategory {
    id: string;
    title: string;
    titleZh: string;
    description: string;
    subcategories: PracticeSubcategory[];
    teachingLink: string;                 // 對應教學頁面錨點
}

export interface PracticeSubcategory {
    id: string;
    title: string;
    questionCount: number;
    questions: DatesPracticeQuestion[];
}
