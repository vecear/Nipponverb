const fs = require('fs');

const content = fs.readFileSync('src/data/verbs_imported.ts', 'utf8');

// Use a more robust regex to find each verb object
// Verbs are objects in an array: { ... }
const verbRegex = /\{\s*"dictionary":\s*"([^"]+)",[\s\S]*?"level":\s*"(N1|N2)"[\s\S]*?"native_examples":\s*\[([\s\S]*?)\][\s\S]*?\}/g;

const results = [];
let match;

while ((match = verbRegex.exec(content)) !== null) {
    const dictionary = match[1];
    const level = match[2];
    const examplesText = match[3];

    // Count example objects { ... }
    const exampleCount = (examplesText.match(/\{/g) || []).length;

    if (exampleCount < 3) {
        results.push({ dictionary, level, count: exampleCount });
    }
}

console.log(JSON.stringify(results.slice(0, 50), null, 2));
console.log("Total found:", results.length);
