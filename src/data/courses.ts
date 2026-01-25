import { BookOpen, MessageSquare, Calendar, Book, FileText, LucideIcon } from 'lucide-react'
// Image imports removed as they are no longer used

export interface Course {
    id: string
    titleKey: string
    descriptionKey: string
    icon: LucideIcon
    path: string
    color: string
    emoji: string
    // image: string // Removed unused image property
}

export const courses: Course[] = [
    {
        id: 'verbs',
        titleKey: 'nav.verbs',
        descriptionKey: 'courses.verbs.description',
        icon: BookOpen,
        path: '/verbs',
        color: 'from-orange-500 to-red-500',
        emoji: '🔤',
        // image: swordIcon,
    },
    {
        id: 'vocabulary',
        titleKey: 'nav.vocabulary',
        descriptionKey: 'courses.vocabulary.description',
        icon: Book,
        path: '/vocabulary',
        color: 'from-yellow-500 to-orange-500',
        emoji: 'abc',
        // image: bookIcon,
    },
    {
        id: 'grammar',
        titleKey: 'nav.grammar',
        descriptionKey: 'courses.grammar.description',
        icon: FileText,
        path: '/grammar',
        color: 'from-pink-500 to-purple-500',
        emoji: '📖',
        // image: lanternIcon,
    },
    {
        id: 'idioms',
        titleKey: 'nav.idioms',
        descriptionKey: 'courses.idioms.description',
        icon: MessageSquare,
        path: '/idioms',
        color: 'from-blue-500 to-cyan-500',
        emoji: '💬',
        // image: teaIcon,
    },
    {
        id: 'dateCounters',
        titleKey: 'nav.dateAndCounters',
        descriptionKey: 'courses.dateCounters.description',
        icon: Calendar,
        path: '/date-counters',
        color: 'from-green-500 to-teal-500',
        emoji: '📅',
        // image: abacusIcon,
    },
]
