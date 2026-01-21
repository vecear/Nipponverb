const fs = require('fs');
const readline = require('readline');

async function test() {
    const fileStream = fs.createReadStream('src/data/verbs_imported.ts');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let currentVerb = null;
    let currentLevel = null;
    let inExamples = false;
    let exampleCount = 0;
    let verbsSeen = 0;

    for await (const line of rl) {
        const dictMatch = line.match(/"dictionary":\s*"([^"]+)"/);
        if (dictMatch) {
            currentVerb = dictMatch[1];
            currentLevel = null;
            exampleCount = 0;
            inExamples = false;
            continue;
        }

        const levelMatch = line.match(/"level":\s*"([^"]+)"/);
        if (levelMatch) {
            currentLevel = levelMatch[1];
            continue;
        }

        if (line.includes('"native_examples": [')) {
            inExamples = true;
            if (line.includes(']')) inExamples = false;
            continue;
        }

        if (inExamples) {
            if (line.includes('{')) exampleCount++;
            if (line.includes(']')) {
                inExamples = false;
                if (currentLevel === 'N1') {
                    console.log(`Verb: ${currentVerb}, Level: ${currentLevel}, Examples: ${exampleCount}`);
                    verbsSeen++;
                }
            }
        }

        if (verbsSeen > 10) break;
    }
}

test();
