import { UnifiedQuestion } from '../types'

import { vocabN5Part1 } from './n5_part1'
import { vocabN5Part2 } from './n5_part2'
import { vocabN5Part3 } from './n5_part3'
import { vocabN4Part1 } from './n4_part1'
import { vocabN4Part2 } from './n4_part2'
import { vocabN4Part3 } from './n4_part3'
import { vocabN3 } from './n3'
import { vocabN2 } from './n2'

type Level = 'N5' | 'N4' | 'N3' | 'N2' | 'N1'

export const vocabUnifiedN5: UnifiedQuestion[] = [...vocabN5Part1, ...vocabN5Part2, ...vocabN5Part3]
export const vocabUnifiedN4: UnifiedQuestion[] = [...vocabN4Part1, ...vocabN4Part2, ...vocabN4Part3]
export const vocabUnifiedN3: UnifiedQuestion[] = vocabN3
export const vocabUnifiedN2: UnifiedQuestion[] = vocabN2

export const allVocabQuestions: UnifiedQuestion[] = [
    ...vocabUnifiedN5,
    ...vocabUnifiedN4,
    ...vocabUnifiedN3,
    ...vocabUnifiedN2,
]

const vocabBanks: Partial<Record<Level, UnifiedQuestion[]>> = {
    N5: vocabUnifiedN5,
    N4: vocabUnifiedN4,
    N3: vocabUnifiedN3,
    N2: vocabUnifiedN2,
}

export function getVocabUnifiedBank(level: Level): UnifiedQuestion[] {
    return vocabBanks[level] || []
}

export { vocabN5Part1 } from './n5_part1'
export { vocabN5Part2 } from './n5_part2'
export { vocabN5Part3 } from './n5_part3'
export { vocabN4Part1 } from './n4_part1'
export { vocabN4Part2 } from './n4_part2'
export { vocabN4Part3 } from './n4_part3'
export { vocabN3 } from './n3'
export { vocabN2 } from './n2'
