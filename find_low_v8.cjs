const fs = require('fs');
const content = fs.readFileSync('src/data/verbs_imported.ts', 'utf8');

const entries = content.split(/^  \{$/m).slice(1);

const results = [];

for (const entry of entries) {
    const dictionaryMatch = entry.match(/"dictionary":\s*"([^"]+)"/);
    const levelMatch = entry.match(/"level":\s*"(N1|N2)"/);
    const examplesMatch = entry.match(/"native_examples":\s*\[([\s\S]*?)\]\s*(?:,|\s*\n\s*\}|,\s*"dictionary_definition")/);

    if (dictionaryMatch && levelMatch) {
        const dictionary = dictionaryMatch[1];
        const level = levelMatch[1];
        const examplesText = examplesMatch ? examplesMatch[1] : "";

        const exampleCount = (examplesText.match(/\{/g) || []).length;

        if (exampleCount < 3) {
            results.push({ dictionary, level, count: exampleCount });
        }
    }
}

console.log(JSON.stringify(results.slice(0, 50), null, 2));
console.log("Total found:", results.length);
