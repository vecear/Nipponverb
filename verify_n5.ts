import { n5Vocabulary } from './src/data/vocabulary';

console.log(`Total Vocabulary Items: ${n5Vocabulary.length}`);
const sample = n5Vocabulary[0];
console.log('Sample:', JSON.stringify(sample, null, 2));
const last = n5Vocabulary[n5Vocabulary.length - 1];
console.log('Last:', JSON.stringify(last, null, 2));
