import { VocabularyData } from './types';
import { n5VocabPart1 } from './raw/n5_vocab_1';
import { n5VocabPart2 } from './raw/n5_vocab_2';
import { n5VocabPart3 } from './raw/n5_vocab_3';
import { n4VocabPart1 } from './raw/n4_vocab_1';
import { n4VocabPart2 } from './raw/n4_vocab_2';
import { n4VocabPart3 } from './raw/n4_vocab_3';
import { n3Vocabulary as n3Raw } from './raw/n3_vocab';
import { n2Vocabulary as n2Raw } from './raw/n2_vocab';

export const n5Vocabulary: VocabularyData[] = [
    ...n5VocabPart1,
    ...n5VocabPart2,
    ...n5VocabPart3
];

export const n4Vocabulary: VocabularyData[] = [
    ...n4VocabPart1,
    ...n4VocabPart2,
    ...n4VocabPart3
];

export const n3Vocabulary: VocabularyData[] = n3Raw;

export const n2Vocabulary: VocabularyData[] = n2Raw;
