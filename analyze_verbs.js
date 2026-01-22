
const fs = require('fs');
const path = require('path');

function getMasterList() {
    const filePath = path.join('src', 'data', 'verbs_imported.ts');
    const content = fs.readFileSync(filePath, 'utf8');

    // Simple regex parsing to avoid TS compilation issues and dependency on structure

    const entries = [];
    const lines = content.split('\n');
    let currentVerb = {};

    for (const line of lines) {
        if (line.includes('"dictionary":')) {
            const match = line.match(/"dictionary":\s*"([^"]+)"/);
            if (match) currentVerb.dictionary = match[1];
        }
        if (line.includes('"reading":')) {
            const match = line.match(/"reading":\s*"([^"]+)"/);
            if (match) currentVerb.reading = match[1];
        }
        if (line.includes('"level":')) {
            const match = line.match(/"level":\s*"([^"]+)"/);
            if (match) {
                currentVerb.level = match[1];
                // We assume level comes after dictionary/reading in the object
                if (currentVerb.dictionary) {
                    entries.push({ ...currentVerb });
                    currentVerb = {}; // reset
                }
            }
        }
    }
    return entries;
}

function getExistingQuestions() {
    const questions = {}; // Map: level -> Map: verb -> count

    ['N1', 'N2', 'N3', 'N4', 'N5'].forEach(level => {
        const lower = level.toLowerCase();
        const filePath = path.join('src', 'data', 'questions', `${lower}.ts`);
        if (!fs.existsSync(filePath)) return;

        const content = fs.readFileSync(filePath, 'utf8');

        const lines = content.split('\n');
        let currentVerb = null;

        // Initialize level map
        if (!questions[level]) questions[level] = new Map();

        for (const line of lines) {
            // Regex for comments: // [0-9]+. VERB (ROMAJI) or // [0-9]+. VERB
            // The comments in n1.ts are like: // 6. 明くる (Akuru)
            // n5.ts: // 58. 返す (Kaesu)
            // We just need the Kanji part.
            // Match // Digits. Kanji (Romaji)
            // Capture Kanji.
            const commentMatch = line.match(/\/\/\s*\d+\.\s*([^\s(]+)/);
            if (commentMatch) {
                const verb = commentMatch[1];
                currentVerb = verb;
                if (!questions[level].has(verb)) {
                    questions[level].set(verb, 0);
                }
            }

            if (line.trim().startsWith('id:')) {
                if (currentVerb) {
                    questions[level].set(currentVerb, questions[level].get(currentVerb) + 1);
                }
            }
        }
    });
    return questions;
}

const master = getMasterList();
const existing = getExistingQuestions();

const result = {
    missing: {},
    insufficient: {}
};

['N1', 'N2', 'N3', 'N4', 'N5'].forEach(level => {
    result.missing[level] = [];
    result.insufficient[level] = [];

    // Filter master list for this level
    const levelVerbs = master.filter(v => v.level === level);

    const levelExisting = existing[level] || new Map();

    levelVerbs.forEach(v => {
        const verb = v.dictionary;
        const count = levelExisting.get(verb);

        if (count === undefined) {
            result.missing[level].push(v);
        } else if (count < 2) {
            result.insufficient[level].push({ verb, count, reading: v.reading });
        }
    });
});

console.log(JSON.stringify(result, null, 2));
