# Contributing to Nipponverb

Thank you for your interest in contributing to Nipponverb! This document provides guidelines for contributing to the project.

## Development Setup

1. Fork the repository
2. Clone your fork:
```bash
git clone https://github.com/YOUR_USERNAME/Nipponverb.git
cd Nipponverb
```

3. Install dependencies:
```bash
npm install
```

4. Set up environment variables (see README.md)

5. Start development server:
```bash
npm run dev
```

## Code Style

- We use ESLint for code quality
- Run `npm run lint` before committing
- Follow TypeScript best practices
- Use meaningful variable and function names
- Add comments for complex logic

## Component Guidelines

### File Structure
```
ComponentName/
├── index.tsx          # Component logic
├── styles.module.css  # Component-specific styles (if needed)
└── types.ts          # Component-specific types
```

### Component Template
```typescript
import { motion } from 'framer-motion'

interface ComponentNameProps {
  // Props definition
}

const ComponentName = ({ ...props }: ComponentNameProps) => {
  // Component logic

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="..."
    >
      {/* Component JSX */}
    </motion.div>
  )
}

export default ComponentName
```

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example:
```bash
git commit -m "feat: add kanji practice mode"
git commit -m "fix: resolve authentication error on refresh"
```

## Pull Request Process

1. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit:
```bash
git add .
git commit -m "feat: description of your changes"
```

3. Push to your fork:
```bash
git push origin feature/your-feature-name
```

4. Open a Pull Request with:
   - Clear description of changes
   - Screenshots (if UI changes)
   - Testing steps
   - Related issue number (if applicable)

## Testing Guidelines

- Test all new features locally
- Check responsive design (mobile, tablet, desktop)
- Verify Firebase integration works
- Test authentication flow
- Ensure no console errors

## Areas for Contribution

### High Priority
- [ ] Implement Python data processing scripts for corpus data
- [ ] Add more question types and categories
- [ ] Improve mobile responsiveness
- [ ] Add audio playback for Japanese text
- [ ] Implement spaced repetition algorithm

### Medium Priority
- [ ] Add dark/light mode toggle
- [ ] Create more stages and scenarios
- [ ] Improve accessibility (ARIA labels, keyboard navigation)
- [ ] Add progress export/import feature
- [ ] Implement leaderboard system

### Low Priority
- [ ] Add customizable themes
- [ ] Create study plan generator
- [ ] Add social features (friend system)
- [ ] Implement achievements system
- [ ] Add study reminders/notifications

## Data Contribution

### Adding Questions
1. Follow the question format in `src/types/index.ts`
2. Ensure distractors are realistic
3. Provide clear explanations
4. Include source attribution
5. Test questions in the app

### Processing Corpus Data
1. Document your data source
2. Follow data quality guidelines
3. Include preprocessing steps
4. Validate output format
5. Upload sample data for review

## Design Guidelines

### Colors
- Primary: Deep Indigo (`#003366`)
- Accent: Sakura Pink (`#FFB7C5`)
- Accent: Electric Cyan (`#00D9FF`)
- Use gradients sparingly for emphasis

### Typography
- Headings: Zen Maru Gothic
- Body: Noto Sans JP
- Ensure Japanese text is readable

### Animations
- Keep animations smooth (60fps)
- Use Framer Motion for consistency
- Avoid excessive animations
- Ensure animations are accessible

## Questions?

- Open an issue for bugs or feature requests
- Tag issues appropriately (bug, enhancement, question, etc.)
- Be respectful and constructive

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Help others learn

Thank you for contributing to Nipponverb! 🎌
