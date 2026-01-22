const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'verbs_imported.ts');
const content = fs.readFileSync(filePath, 'utf8');

const dictionariesToRemove = new Set([
    // N5
    'どう', 'いくつ', 'いす', 'いつ', '九つ', '一つ', 'ほんとう', 'まっすぐ', '向こう', 'もう', 'よく',
    // N4
    'こう',
    // N3
    'あいにく', 'あらゆる', 'ありがとう', 'いわゆる', 'おめでとう'
]);

let result = "";
let i = 0;

// Skip until start of array
const arrayStart = content.indexOf('[');
result += content.slice(0, arrayStart + 1);
i = arrayStart + 1;

while (i < content.length) {
    if (content[i] === '{') {
        // Start of a potential verb object
        let startOfObject = i;
        let braceDepth = 0;
        let objectContent = "";

        // Extract the whole object by tracking braces
        let j = i;
        while (j < content.length) {
            if (content[j] === '{') braceDepth++;
            else if (content[j] === '}') braceDepth--;

            objectContent += content[j];

            if (braceDepth === 0) {
                // Peek for trailing comma
                let k = j + 1;
                while (k < content.length && (content[k] === ' ' || content[k] === '\n' || content[k] === '\r' || content[k] === '\t' || content[k] === ',')) {
                    objectContent += content[k];
                    if (content[k] === ',') {
                        k++;
                        break;
                    }
                    k++;
                }
                j = k - 1;
                break;
            }
            j++;
        }

        // Should we keep this object?
        const dictMatch = objectContent.match(/"dictionary":\s*"([^"]+)"/);
        if (dictMatch && dictionariesToRemove.has(dictMatch[1])) {
            console.log(`Removing: ${dictMatch[1]}`);
        } else {
            result += objectContent;
        }

        i = j + 1;
    } else {
        result += content[i];
        i++;
    }
}

fs.writeFileSync(filePath, result);
console.log("Cleanup complete.");
