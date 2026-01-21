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
    let results = [];

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

                // Extract only kanji
                const kanji = currentVerb.replace(/[（\(\)].*$/, '').replace(/[あ-んア-ン]/g, '');

                if (kanji && (currentLevel === 'N1' || currentLevel === 'N2')) {
                    // Check if ANY of the kanji from dictionary form is missing
                    let missing = false;
                    for (let char of kanji) {
                        if (!cleanJa.includes(char)) {
                            missing = true;
                            break;
                        }
                    }

                    if (missing) {
                        results.push({ verb: currentVerb, example: cleanJa, level: currentLevel });
                    }
                }
            }
            if (line.includes(']')) {
                inExamples = false;
            }
        }
    }

    // Group by verb
    const grouped = {};
    results.forEach(m => {
        if (!grouped[m.verb]) grouped[m.verb] = [];
        grouped[m.verb].push(m.example);
    });

    const final = Object.keys(grouped).map(k => ({ verb: k, count: grouped[k].length, examples: grouped[k] }));
    fs.writeFileSync('mismatches_n1_n2.json', JSON.stringify(final, null, 2));
    console.log('Found', final.length, 'verbs with potential mismatches in N1/N2.');
}

checkMismatches();
