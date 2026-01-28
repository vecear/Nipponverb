const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const rawDir = path.join(rootDir, 'src', 'data', 'raw');
const outputFile = path.join(rootDir, 'docs', 'N5_VOCAB_PROGRESS.md');

// Files to read
const files = ['n5_vocab_1.ts', 'n5_vocab_2.ts', 'n5_vocab_3.ts'];

let allVocab = [];

// Regex to extract vocab objects
// Matches: { word: '...', reading: '...', ... }
const vocabRegex = /\{\s*word:\s*'([^']+)',\s*reading:\s*'([^']+)',[^}]+\}/g;

files.forEach(file => {
    const content = fs.readFileSync(path.join(rawDir, file), 'utf8');
    let match;
    while ((match = vocabRegex.exec(content)) !== null) {
        allVocab.push({
            word: match[1],
            reading: match[2],
            status: 'Pending'
        });
    }
});

// Mark first 10 as Completed
for (let i = 0; i < 10; i++) {
    if (allVocab[i]) {
        allVocab[i].status = 'Completed';
    }
}

// Generate Markdown
let mdContent = `# N5 Vocabulary Question Generation Progress

**Total Words:** ${allVocab.length}
**Completed:** 10
**Pending:** ${allVocab.length - 10}

## Next Action
**Resume from Word #11:** ${allVocab[10]?.word} (${allVocab[10]?.reading})

## Detailed Status

| # | Word | Reading | Status | Note |
|---|---|---|---|---|
`;

allVocab.forEach((v, index) => {
    const num = index + 1;
    const note = v.status === 'Completed' ? (num <= 5 ? 'Batch 1' : 'Batch 2') : '';
    mdContent += `| ${num} | ${v.word} | ${v.reading} | ${v.status} | ${note} |\n`;
});

// Ensure docs dir exists
if (!fs.existsSync(path.join(rootDir, 'docs'))) {
    fs.mkdirSync(path.join(rootDir, 'docs'));
}

fs.writeFileSync(outputFile, mdContent);
console.log(`Progress file generated at ${outputFile} with ${allVocab.length} words.`);
