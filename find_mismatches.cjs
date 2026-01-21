const fs = require('fs');
const readline = require('readline');

async function checkMismatches() {
    const fileStream = fs.createReadStream('src/data/verbs_imported.ts');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let currentVerb = null;
    let currentLevel = null;
    let inExamples = false;
    let mismatches = [];

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
            inExamples = true;
            continue;
        }

        if (inExamples) {
            const jaMatch = line.match(/"ja":\s*"([^"]+)"/);
            if (jaMatch) {
                const ja = jaMatch[1];
                const cleanJa = ja.replace(/<[^>]+>/g, '');
                const kanji = currentVerb.replace(/[（\(\)].*$/, '').replace(/[あ-んア-ン]/g, ''); // Extract kanji

                if (kanji && !cleanJa.includes(kanji)) {
                    mismatches.push({ verb: currentVerb, example: cleanJa, level: currentLevel });
                }
            }
            if (line.includes(']')) {
                inExamples = false;
            }
        }
    }

    fs.writeFileSync('mismatched_examples.json', JSON.stringify(mismatches, null, 2));
    console.log('Found', mismatches.length, 'mismatched examples.');
    console.log('First 10:', mismatches.slice(0, 10));
}

checkMismatches();
