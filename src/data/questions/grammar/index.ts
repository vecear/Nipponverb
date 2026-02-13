import { UnifiedQuestion } from '../types'

export { grammarN5 } from './n5'
export { grammarN4 } from './n4'
export { grammarN3 } from './n3'
export { grammarN2 } from './n2'
export { grammarN1 } from './n1'

import { grammarN5 } from './n5'
import { grammarN4 } from './n4'
import { grammarN3 } from './n3'
import { grammarN2 } from './n2'
import { grammarN1 } from './n1'

type Level = 'N5' | 'N4' | 'N3' | 'N2' | 'N1'

const grammarBanks: Record<Level, UnifiedQuestion[]> = {
    N5: grammarN5,
    N4: grammarN4,
    N3: grammarN3,
    N2: grammarN2,
    N1: grammarN1,
}

export const allGrammarQuestions: UnifiedQuestion[] = [
    ...grammarN5,
    ...grammarN4,
    ...grammarN3,
    ...grammarN2,
    ...grammarN1,
]

export function getGrammarBankByLevel(level: Level): UnifiedQuestion[] {
    return grammarBanks[level]
}
