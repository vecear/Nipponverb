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
        title: 'At the Station',
        description: 'Buying a train ticket at the station',
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
                stem: 'Where does the customer want to go?',
                correct: 'Tokyo',
                options: ['Tokyo', 'Osaka', 'Kyoto', 'Nagoya'],
                explanation: 'The customer says "東京まで" (to Tokyo)',
                level: 'N5',
            },
            {
                id: 'stage_001_q2',
                stem: 'What type of ticket did the customer buy?',
                correct: 'Round-trip',
                options: ['One-way', 'Round-trip', 'Monthly pass', 'Day pass'],
                explanation: 'The customer says "往復でお願いします" (round-trip please)',
                level: 'N5',
            },
            {
                id: 'stage_001_q3',
                stem: 'How much does the ticket cost?',
                correct: '3,000 yen',
                options: ['2,000 yen', '3,000 yen', '4,000 yen', '5,000 yen'],
                explanation: 'The staff says "三千円になります" (it will be 3,000 yen)',
                level: 'N5',
            },
        ],
    },
    {
        id: 'stage_002',
        title: 'At a Restaurant',
        description: 'Ordering food at a Japanese restaurant',
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
                stem: 'What food did the customer order?',
                correct: 'Ramen and gyoza',
                options: ['Ramen and gyoza', 'Sushi and tempura', 'Udon and rice', 'Curry and salad'],
                explanation: 'The customer says "ラーメンとギョーザ" (ramen and gyoza)',
                level: 'N5',
            },
            {
                id: 'stage_002_q2',
                stem: 'What did the customer order to drink?',
                correct: 'Water',
                options: ['Water', 'Tea', 'Coffee', 'Juice'],
                explanation: 'The customer says "水で大丈夫です" (water is fine)',
                level: 'N5',
            },
        ],
    },
    {
        id: 'stage_003',
        title: 'Meeting a Friend',
        description: 'Making plans with a friend',
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
                stem: 'What are Yuki and Takeshi planning to do?',
                correct: 'Watch a movie',
                options: ['Watch a movie', 'Go shopping', 'Eat dinner', 'Play sports'],
                explanation: 'Yuki suggests "映画を見に行かない？" (shall we go see a movie?)',
                level: 'N4',
            },
            {
                id: 'stage_003_q2',
                stem: 'What genre of movie do they want to see?',
                correct: 'Action',
                options: ['Action', 'Comedy', 'Romance', 'Horror'],
                explanation: 'Yuki mentions "アクション映画" (action movie)',
                level: 'N4',
            },
            {
                id: 'stage_003_q3',
                stem: 'When and where will they meet?',
                correct: 'Saturday at 2 PM at the station',
                options: [
                    'Saturday at 2 PM at the station',
                    'Sunday at 3 PM at the cinema',
                    'Saturday at 1 PM at the restaurant',
                    'Sunday at 2 PM at the park',
                ],
                explanation: 'They agree on "土曜日の午後" (Saturday afternoon) and "二時に駅で" (at 2 at the station)',
                level: 'N4',
            },
        ],
    },
    {
        id: 'stage_004',
        title: 'At the Doctor',
        description: 'Visiting a doctor for a checkup',
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
                stem: 'What symptoms does the patient have?',
                correct: 'Headache, fever, and sore throat',
                options: [
                    'Headache, fever, and sore throat',
                    'Only a headache',
                    'Stomachache and nausea',
                    'Cough and runny nose',
                ],
                explanation: 'The patient mentions "頭が痛くて、熱もあります" (headache and fever) and "のども痛い" (throat hurts)',
                level: 'N4',
            },
            {
                id: 'stage_004_q2',
                stem: 'What is the diagnosis?',
                correct: 'A cold',
                options: ['A cold', 'The flu', 'Allergies', 'Food poisoning'],
                explanation: 'The doctor says "風邪ですね" (it\'s a cold)',
                level: 'N4',
            },
        ],
    },
    {
        id: 'stage_005',
        title: 'Job Interview',
        description: 'Participating in a job interview',
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
                stem: 'What did the applicant study at university?',
                correct: 'Economics',
                options: ['Economics', 'Business', 'Engineering', 'Literature'],
                explanation: 'The applicant says "経済学を専攻しました" (I majored in economics)',
                level: 'N3',
            },
            {
                id: 'stage_005_q2',
                stem: 'Why is the applicant interested in the company?',
                correct: 'International business development',
                options: [
                    'International business development',
                    'High salary',
                    'Good location',
                    'Company culture',
                ],
                explanation: 'The applicant mentions "国際的な事業展開" (international business development)',
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
