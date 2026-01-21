// Dialogue-based scenario stages
import { Question } from '../types'

export interface DialogueLine {
    speaker: string
    text: string
    translation?: string
}

export interface Stage {
    id: string
    title: string
    description: string
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'
    topic: 'daily_life' | 'school' | 'travel' | 'health' | 'entertainment'
    dialogue: DialogueLine[]
    questions: Question[]
    locked: boolean
}

// Sample stages based on common scenarios
export const stages: Stage[] = [
    {
        id: 'stage_001',
        title: '駅で',
        description: '駅で電車の切符を買う',
        level: 'N5',
        topic: 'travel',
        locked: false,
        dialogue: [
            {
                speaker: 'Customer',
                text: 'すみません、東京までの切符をください。',
                translation: 'Excuse me, a ticket to Tokyo please.',
            },
            {
                speaker: 'Staff',
                text: '片道ですか、往復ですか。',
                translation: 'One-way or round-trip?',
            },
            {
                speaker: 'Customer',
                text: '往復でお願いします。',
                translation: 'Round-trip please.',
            },
            {
                speaker: 'Staff',
                text: 'かしこまりました。三千円になります。',
                translation: 'Certainly. That will be 3,000 yen.',
            },
        ],
        questions: [
            {
                id: 'stage_001_q1',
                stem: '客はどこへ行きたいですか。',
                correct: '東京',
                options: ['東京', '大阪', '京都', '名古屋'],
                explanation: '客は「東京まで」と言っています。',
                level: 'N5',
            },
            {
                id: 'stage_001_q2',
                stem: '客はどの切符を買いましたか。',
                correct: '往復',
                options: ['片道', '往復', '定期券', '一日乗車券'],
                explanation: '客は「往復でお願いします」と言っています。',
                level: 'N5',
            },
            {
                id: 'stage_001_q3',
                stem: '切符はいくらですか。',
                correct: '三千円',
                options: ['二千円', '三千円', '四千円', '五千円'],
                explanation: '駅員は「三千円になります」と言っています。',
                level: 'N5',
            },
        ],
    },
    {
        id: 'stage_002',
        title: 'レストランで',
        description: '日本のレストランで料理を注文する',
        level: 'N5',
        topic: 'daily_life',
        locked: false,
        dialogue: [
            {
                speaker: 'Waiter',
                text: 'いらっしゃいませ。ご注文はお決まりですか。',
                translation: 'Welcome. Have you decided on your order?',
            },
            {
                speaker: 'Customer',
                text: 'はい、ラーメンとギョーザをお願いします。',
                translation: 'Yes, ramen and gyoza please.',
            },
            {
                speaker: 'Waiter',
                text: 'お飲み物はいかがですか。',
                translation: 'How about drinks?',
            },
            {
                speaker: 'Customer',
                text: '水で大丈夫です。',
                translation: 'Water is fine.',
            },
        ],
        questions: [
            {
                id: 'stage_002_q1',
                stem: '客は何を注文しましたか。',
                correct: 'ラーメンとギョーザ',
                options: ['ラーメンとギョーザ', '寿司と天ぷら', 'うどんとご飯', 'カレーとサラダ'],
                explanation: '客は「ラーメンとギョーザをお願いします」と言っています。',
                level: 'N5',
            },
            {
                id: 'stage_002_q2',
                stem: '飲み物は何を注文しましたか。',
                correct: '水',
                options: ['水', 'お茶', 'コーヒー', 'ジュース'],
                explanation: '客は「水で大丈夫です」と言っています。',
                level: 'N5',
            },
        ],
    },
    {
        id: 'stage_003',
        title: '友達と会う',
        description: '友達と予定を立てる',
        level: 'N4',
        topic: 'daily_life',
        locked: false,
        dialogue: [
            {
                speaker: 'Yuki',
                text: '今週末、映画を見に行かない？',
                translation: "Shall we go see a movie this weekend?",
            },
            {
                speaker: 'Takeshi',
                text: 'いいね！何を見たい？',
                translation: 'Sounds good! What do you want to see?',
            },
            {
                speaker: 'Yuki',
                text: '新しいアクション映画が面白そうだよ。',
                translation: 'The new action movie looks interesting.',
            },
            {
                speaker: 'Takeshi',
                text: 'じゃあ、土曜日の午後はどう？',
                translation: 'How about Saturday afternoon then?',
            },
            {
                speaker: 'Yuki',
                text: '完璧！じゃあ、二時に駅で会おう。',
                translation: "Perfect! Let's meet at the station at 2 o'clock.",
            },
        ],
        questions: [
            {
                id: 'stage_003_q1',
                stem: 'ユキさんとタケシさんは何をする予定ですか。',
                correct: '映画を見に行く',
                options: ['映画を見に行く', '買い物に行く', '晩ごはんを食べる', 'スポーツをする'],
                explanation: 'ユキさんが「映画を見に行かない？」と誘っています。',
                level: 'N4',
            },
            {
                id: 'stage_003_q2',
                stem: 'どんな種類の映画を見たいですか。',
                correct: 'アクション',
                options: ['アクション', 'コメディ', '恋愛', 'ホラー'],
                explanation: 'ユキさんが「アクション映画」と言っています。',
                level: 'N4',
            },
            {
                id: 'stage_003_q3',
                stem: 'いつ、どこで会いますか。',
                correct: '土曜日の午後二時に駅で',
                options: [
                    '土曜日の午後二時に駅で',
                    '日曜日の午後三時に映画館で',
                    '土曜日の午後一時にレストランで',
                    '日曜日の午後二時に公園で',
                ],
                explanation: '「土曜日の午後」に「二時に駅で」会うことにしました。',
                level: 'N4',
            },
        ],
    },
    {
        id: 'stage_004',
        title: '医者で',
        description: '病院へ行って診察を受ける',
        level: 'N4',
        topic: 'health',
        locked: false,
        dialogue: [
            {
                speaker: 'Doctor',
                text: 'どうされましたか。',
                translation: "What's wrong?",
            },
            {
                speaker: 'Patient',
                text: '昨日から頭が痛くて、熱もあります。',
                translation: "I've had a headache since yesterday and I also have a fever.",
            },
            {
                speaker: 'Doctor',
                text: 'そうですか。のども痛いですか。',
                translation: 'I see. Does your throat hurt too?',
            },
            {
                speaker: 'Patient',
                text: 'はい、少し痛いです。',
                translation: 'Yes, it hurts a little.',
            },
            {
                speaker: 'Doctor',
                text: '風邪ですね。薬を出しますから、ゆっくり休んでください。',
                translation: "It's a cold. I'll prescribe medicine, so please rest well.",
            },
        ],
        questions: [
            {
                id: 'stage_004_q1',
                stem: '患者にはどんな症状がありますか。',
                correct: '頭痛、熱、のどの痛み',
                options: [
                    '頭痛、熱、のどの痛み',
                    '頭痛だけ',
                    '腹痛と吐き気',
                    '咳と鼻水',
                ],
                explanation: '患者は「頭が痛くて、熱もあります」「のども痛い」と言っています。',
                level: 'N4',
            },
            {
                id: 'stage_004_q2',
                stem: '診断は何ですか。',
                correct: '風邪',
                options: ['風邪', 'インフルエンザ', 'アレルギー', '食中毒'],
                explanation: '医者が「風邪ですね」と言っています。',
                level: 'N4',
            },
        ],
    },
    {
        id: 'stage_005',
        title: '面接',
        description: '採用面接を受ける',
        level: 'N3',
        topic: 'school',
        locked: false,
        dialogue: [
            {
                speaker: 'Interviewer',
                text: '自己紹介をお願いします。',
                translation: 'Please introduce yourself.',
            },
            {
                speaker: 'Applicant',
                text: 'はい。田中太郎と申します。大学で経済学を専攻しました。',
                translation: "Yes. My name is Taro Tanaka. I majored in economics at university.",
            },
            {
                speaker: 'Interviewer',
                text: 'なぜ弊社を志望されましたか。',
                translation: 'Why did you apply to our company?',
            },
            {
                speaker: 'Applicant',
                text: '御社の国際的な事業展開に魅力を感じました。',
                translation: 'I was attracted to your company\'s international business development.',
            },
        ],
        questions: [
            {
                id: 'stage_005_q1',
                stem: '応募者は大学で何を勉強しましたか。',
                correct: '経済学',
                options: ['経済学', '経営学', '工学', '文学'],
                explanation: '応募者は「大学で経済学を専攻しました」と言っています。',
                level: 'N3',
            },
            {
                id: 'stage_005_q2',
                stem: '応募者はなぜこの会社に興味を持ちましたか。',
                correct: '国際的な事業展開',
                options: [
                    '国際的な事業展開',
                    '給料が高い',
                    '場所が良い',
                    '社風が良い',
                ],
                explanation: '応募者は「国際的な事業展開に魅力を感じました」と言っています。',
                level: 'N3',
            },
        ],
    },
]

// Get stages by level
export function getStagesByLevel(level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'): Stage[] {
    return stages.filter((stage) => stage.level === level)
}

// Get stage by ID
export function getStageById(id: string): Stage | undefined {
    return stages.find((stage) => stage.id === id)
}
