import { createContext, useContext, useState, ReactNode } from 'react'
import { BookOpen, Lightbulb, HelpCircle, List, LucideIcon } from 'lucide-react'

export interface NavItem {
    id: string
    label: string
    icon: LucideIcon
    isLink?: boolean
    to?: string
    onClick?: () => void
}

interface NavContextType {
    customNavItems: NavItem[] | null
    setCustomNavItems: (items: NavItem[] | null) => void
    activeSection: string
    setActiveSection: (section: string) => void
}

const NavContext = createContext<NavContextType | undefined>(undefined)

export const NavProvider = ({ children }: { children: ReactNode }) => {
    const [customNavItems, setCustomNavItems] = useState<NavItem[] | null>(null)
    const [activeSection, setActiveSection] = useState('usage')

    return (
        <NavContext.Provider value={{ customNavItems, setCustomNavItems, activeSection, setActiveSection }}>
            {children}
        </NavContext.Provider>
    )
}

export const useNav = () => {
    const context = useContext(NavContext)
    if (!context) {
        throw new Error('useNav must be used within a NavProvider')
    }
    return context
}

// Helper to create grammar detail nav items
export const createGrammarNavItems = (
    hasAnalysis: boolean,
    hasQuiz: boolean,
    scrollToSection: (id: string) => void
): NavItem[] => {
    const items: NavItem[] = [
        { id: 'list', label: '回列表', icon: List, isLink: true, to: '/grammar' },
        { id: 'usage', label: '用法解析', icon: BookOpen, onClick: () => scrollToSection('usage') },
    ]

    if (hasAnalysis) {
        items.push({ id: 'analysis', label: '比較分析', icon: Lightbulb, onClick: () => scrollToSection('analysis') })
    }

    if (hasQuiz) {
        items.push({ id: 'quiz', label: '隨堂測驗', icon: HelpCircle, onClick: () => scrollToSection('quiz') })
    }

    return items
}
