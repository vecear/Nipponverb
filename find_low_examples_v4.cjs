const fs = require('fs');
const readline = require('readline');

async function findZero() {
    const fileStream = fs.createReadStream('src/data/verbs_imported.ts');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let currentVerb = null;
    let currentLevel = null;
    let inExamples = false;
    let exampleCount = 0;
    const missing = [];

    for await (const line of rl) {
        const dictMatch = line.match(/"dictionary":\s*"([^"]+)"/);
        if (dictMatch) {
            currentVerb = dictMatch[1];
            continue;
        }

        const levelMatch = line.match(/"level":\s*"([^"]+)"/);
        if (levelMatch) {
            currentLevel = levelMatch[1];
            continue;
        }

        if (line.includes('"native_examples": [')) {
            exampleCount = 0;
            if (line.includes(']')) {
                // native_examples: []
                if ((currentLevel === 'N1' || currentLevel === 'N2')) {
                    missing.push({ name: currentVerb, count: 0, level: currentLevel });
                }
                inExamples = false;
            } else {
                inExamples = true;
            }
            continue;
        }

        if (inExamples) {
            if (line.includes('{')) {
                exampleCount++;
            }
            if (line.includes(']')) {
                inExamples = false;
                if ((currentLevel === 'N1' || currentLevel === 'N2') && exampleCount < 3) {
                    missing.push({ name: currentVerb, count: exampleCount, level: currentLevel });
                }
            }
        }
    }

    fs.writeFileSync('missing_examples_v4.json', JSON.stringify(missing, null, 2));
    console.log('Found', missing.length, 'problematic verbs.');
    console.log('First 10:', missing.slice(0, 10));
}

findZero();
