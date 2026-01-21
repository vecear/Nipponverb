const fs = require('fs');

const content = fs.readFileSync('src/data/verbs_imported.ts', 'utf8');
const arrayMatch = content.match(/export const importedVerbs: Verb\[] = (\[[\s\S]*?\]);/);
if (!arrayMatch) {
    console.error("Could not find array");
    process.exit(1);
}

// Since the file is very large and consistently formatted, we can use a simpler split if needed.
// But let's try reading objects one by one using a simple index-based parser or regex on chunks.
const data = arrayMatch[1];
const results = [];
const regex = /\{\s*"dictionary":\s*"([^"]+)",[\s\S]*?"level":\s*"(N1|N2)"[\s\S]*?"native_examples":\s*\[([\s\S]*?)\]/g;

let match;
while ((match = regex.exec(data)) !== null) {
    const dictionary = match[1];
    const level = match[2];
    const examplesText = match[3].trim();

    let count = 0;
    if (examplesText) {
        // count { ... }
        const exMatches = examplesText.match(/\{/g);
        count = exMatches ? exMatches.length : 0;
    }

    if (count < 3) {
        results.push({ dictionary, level, count });
    }
}

console.log(JSON.stringify(results.slice(0, 50), null, 2));
console.log("Total found:", results.length);
