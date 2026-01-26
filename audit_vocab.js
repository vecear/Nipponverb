const fs = require('fs');
const path = require('path');

const n4Files = [
    'c:/Users/vecea/Desktop/Code/Nipponverb/src/data/raw/n4_vocab_1.ts',
    'c:/Users/vecea/Desktop/Code/Nipponverb/src/data/raw/n4_vocab_2.ts',
    'c:/Users/vecea/Desktop/Code/Nipponverb/src/data/raw/n4_vocab_3.ts'
];
const n3File = 'c:/Users/vecea/Desktop/Code/Nipponverb/src/data/raw/n3_vocab.ts';

function getWords(file) {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(/word: '(.*?)'/g);
    return matches ? matches.map(m => m.match(/'(.*?)'/)[1]) : [];
}

const n4Words = n4Files.flatMap(getWords);
const n3Words = getWords(n3File);

console.log('N4_COUNT:' + n4Words.length);
console.log('N3_COUNT:' + n3Words.length);

fs.writeFileSync('c:/Users/vecea/Desktop/Code/Nipponverb/current_n4.txt', n4Words.join('\n'));
fs.writeFileSync('c:/Users/vecea/Desktop/Code/Nipponverb/current_n3.txt', n3Words.join('\n'));
