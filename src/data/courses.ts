import { BookOpen, MessageSquare, Calendar, Book, FileText, LucideIcon } from 'lucide-react'

export interface Course {
    id: string
    titleKey: string
    descriptionKey: string
    icon: LucideIcon
    path: string
    color: string
    emoji: string
    image?: string // 浮世繪風格圖示路徑 (存放於 public/assets/icons/)
}

// 課程圖示路徑
// 圖片生成 Prompts 請參考: docs/image-prompts.md
const COURSE_IMAGES = {
    verbs: '/assets/icons/practice/practice-verbs.png',
    vocabulary: '/assets/icons/practice/practice-vocabulary.png',
    grammar: '/assets/icons/practice/practice-grammar.png',
    idioms: '/assets/icons/courses/course-idioms.png',
    dateCounters: '/assets/icons/courses/course-date-counters.png',
}

export const courses: Course[] = [
    {
        id: 'verbs',
        titleKey: 'nav.verbs',
        descriptionKey: 'courses.verbs.description',
        icon: BookOpen,
        path: '/verbs',
        color: 'from-orange-500 to-red-500',
        emoji: '✍️',
        image: COURSE_IMAGES.verbs,
    },
    {
        id: 'vocabulary',
        titleKey: 'nav.vocabulary',
        descriptionKey: 'courses.vocabulary.description',
        icon: Book,
        path: '/vocabulary',
        color: 'from-yellow-500 to-orange-500',
        emoji: '🔤',
        image: COURSE_IMAGES.vocabulary,
    },
    {
        id: 'grammar',
        titleKey: 'nav.grammar',
        descriptionKey: 'courses.grammar.description',
        icon: FileText,
        path: '/grammar',
        color: 'from-pink-500 to-purple-500',
        emoji: '📖',
        image: COURSE_IMAGES.grammar,
    },
    {
        id: 'idioms',
        titleKey: 'nav.idioms',
        descriptionKey: 'courses.idioms.description',
        icon: MessageSquare,
        path: '/idioms',
        color: 'from-blue-500 to-cyan-500',
        emoji: '💬',
        image: COURSE_IMAGES.idioms,
    },
    {
        id: 'dateCounters',
        titleKey: 'nav.dateAndCounters',
        descriptionKey: 'courses.dateCounters.description',
        icon: Calendar,
        path: '/date-counters',
        color: 'from-green-500 to-teal-500',
        emoji: '📅',
        image: COURSE_IMAGES.dateCounters,
    },
]
