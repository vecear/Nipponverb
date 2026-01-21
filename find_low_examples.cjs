const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/verbs_imported.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Try a more flexible split or just regex for each dictionary entry
const dictEntries = content.match(/"dictionary":\s*"[^"]+"/g);
console.log("Total dictionary entries found:", dictEntries ? dictEntries.length : 0);

// Let's find verbs with empty native_examples
const emptyExamples = [];
const blocks = content.split(/\n\s*\{\s*\n\s*"dictionary"/);

console.log("Total blocks found:", blocks.length);

// Skip block 0 as it's the header
for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];
    const dictionaryMatch = block.match(/:\s*"([^"]+)"/);
    const levelMatch = block.match(/"level":\s*"([^"]+)"/);
    const examplesMatch = block.match(/"native_examples":\s*\[([\s\S]*?)\]/);

    if (dictionaryMatch && levelMatch) {
        const dictionary = dictionaryMatch[1];
        const level = levelMatch[1];

        if (level === 'N1' || level === 'N2') {
            let exampleCount = 0;
            if (examplesMatch) {
                const exampleContent = examplesMatch[1].trim();
                exampleCount = (exampleContent.match(/\{/g) || []).length;
            }
            if (exampleCount < 3) {
                emptyExamples.push({ dictionary, level, exampleCount });
            }
        }
    }
}

console.log(JSON.stringify(emptyExamples, null, 2));
