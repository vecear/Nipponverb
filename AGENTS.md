# Nipponverb - AI Agent Guide

This is a Japanese language learning application built with React, TypeScript, and Firebase. The app teaches JLPT (N5-N1) content including vocabulary, grammar, verbs, and kanji.

## Project Overview

- **Frontend**: React 18 with TypeScript, Vite, and Tailwind CSS
- **Backend**: Firebase (Firestore for database, Firebase Auth)
- **State Management**: Zustand for global state, React Context for auth/navigation
- **Routing**: React Router v6
- **Internationalization**: i18next for multi-language support
- **Japanese Text Processing**: Kuroshiro with Kuromoji analyzer

## Build & Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npm run build  # Includes TypeScript compilation

# Linting
npm run lint

# Preview production build
npm run preview
```

**Single Test Execution**: This project does not have a formal test suite. For testing specific functionality:
- Use the development server (`npm run dev`)
- Test components manually by navigating to relevant routes
- For API testing, use browser dev tools or Firebase console

## Code Style Guidelines

### Import Organization
```typescript
// 1. React imports
import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// 2. Third-party libraries
import { create } from 'zustand'
import { doc, getDoc } from 'firebase/firestore'
import { useTranslation } from 'react-i18next'

// 3. Internal imports (use @ alias for src/ imports)
import { UserProfile } from '@/types'
import { userService } from '@/services/userService'
import FuriganaText from '@/components/FuriganaText'
```

### TypeScript Conventions
- Use `interface` for object shapes, `type` for unions/primitives
- Always type function parameters and return values
- Use optional properties (`?:`) instead of `| undefined` where appropriate
- Prefer strict TypeScript settings (already configured)

### Component Structure
```typescript
// Functional components with React.FC is optional
interface ComponentProps {
  title: string
  onSubmit: (data: FormData) => void
  optional?: boolean
}

const Component = ({ title, onSubmit, optional = false }: ComponentProps) => {
  // Hooks at the top
  const { t } = useTranslation()
  const [state, setState] = useState(initialValue)
  
  // Event handlers
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // handler logic
  }
  
  // Render
  return (
    <div className="appropriate-tailwind-classes">
      {/* JSX content */}
    </div>
  )
}

export default Component
```

### Tailwind CSS Usage
- Use the custom Japanese-inspired color palette from `tailwind.config.js`
- Prefer semantic color names: `wave-deep`, `foam`, `sumi`, `vermilion`, `washi`
- Use responsive prefixes: `sm:`, `md:`, `lg:`
- Follow the mobile-first approach
- Use custom utility classes like `shadow-ukiyo` for Japanese aesthetic

### Naming Conventions
- **Components**: PascalCase (e.g., `QuestionCard`, `FuriganaText`)
- **Files**: PascalCase for components (e.g., `QuestionCard.tsx`)
- **Services/Functions**: camelCase (e.g., `getUserProfile`, `createUserProgress`)
- **Constants**: UPPER_SNAKE_CASE for exported constants
- **Interfaces**: PascalCase with descriptive names (e.g., `UserProfile`, `Question`)

### State Management Patterns
- **Zustand Stores**: Create store files in `src/store/` with `use` prefix
- **Context**: Use for auth and navigation state that's needed globally
- **Local State**: Use React hooks for component-specific state

### Error Handling
```typescript
// Async functions with proper error handling
export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
  try {
    const userRef = doc(db, 'users', uid)
    const userSnap = await getDoc(userRef)
    
    if (userSnap.exists()) {
      return userSnap.data() as UserProfile
    }
    return null
  } catch (error) {
    console.error('Error getting user profile:', error)
    throw new Error('Failed to fetch user profile')
  }
}
```

### Firebase Integration
- Import Firestore functions from `firebase/firestore`
- Use the configured `db` instance from `@/config/firebase`
- Always handle async operations with try/catch
- Use proper TypeScript typing for Firestore documents

### Japanese Text Handling
- Use `FuriganaText` component for displaying text with furigana
- Use Kuroshiro for romaji conversion and kana processing
- Store Japanese text in its original form (kanji/kana)
- Handle multiple readings when necessary (e.g., for verbs)

### File Structure
```
src/
├── components/     # Reusable UI components
├── pages/          # Page components with routes
├── services/       # Firebase and API services
├── store/          # Zustand stores
├── contexts/       # React contexts
├── types/          # TypeScript type definitions
├── data/           # Static data (vocab, grammar, questions)
├── hooks/          # Custom React hooks
├── config/         # Configuration files (firebase, assets)
└── i18n/           # Internationalization configuration
```

### Route Protection
- Use `ProtectedRoute` for authenticated routes
- Use `AdminRoute` for admin-only routes
- Implement role-based access control in route components

### Data Modeling
- User profiles include progression system with levels and experience
- Questions support multiple types: 'multiple-choice', 'matching'
- All content is organized by JLPT levels (N5-N1)
- Include Chinese translations for vocabulary items

## Key Technical Decisions

1. **Path Aliases**: Use `@/` for `src/` imports (configured in vite.config.ts and tsconfig.json)
2. **Styling**: Tailwind with custom Japanese color palette and utility classes
3. **State**: Zustand for global state, Context for auth/navigation
4. **TypeScript**: Strict mode enabled with comprehensive type checking
5. **Build**: Vite for fast development and optimized production builds

## Development Tips

- Always run the linter before committing: `npm run lint`
- Use the development server for testing changes
- Check the Firebase console for database changes
- Test Japanese text rendering thoroughly
- Verify responsive design on different screen sizes
- Use browser dev tools to test different language settings

## Common Patterns

1. **Service Functions**: Async functions that interact with Firebase
2. **Store Updates**: Immutable updates in Zustand stores
3. **Component Props**: Destructure props with TypeScript interfaces
4. **Route Parameters**: Use React Router's `useParams` for dynamic routes
5. **Internationalization**: Use `useTranslation()` hook for text content