const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/verbs_imported.ts');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

const targets = [
    "老ける", "踏まえる", "震わせる", "ぶら下げる", "隔たる",
    "謙る", "經る", "報じる", "報ずる", "葬る"
];

const results = [];
let currentVerb = null;
let currentLevel = null;
let startLine = 0;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const dictMatch = line.match(/"dictionary":\s*"([^"]+)"/);
    if (dictMatch) {
        currentVerb = dictMatch[1];
        startLine = i + 1;
    }
    const levelMatch = line.match(/"level":\s*"([^"]+)"/);
    if (levelMatch) {
        currentLevel = levelMatch[1];
    }

    if (line.includes('},')) {
        if (targets.includes(currentVerb)) {
            results.push({ dictionary: currentVerb, level: currentLevel, line: startLine });
        }
        currentVerb = null;
        currentLevel = null;
    }
}

console.log(JSON.stringify(results, null, 2));
