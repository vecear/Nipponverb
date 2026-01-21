const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/verbs_imported.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Robust splitting by verb objects
// The verbs are in export const importedVerbs: Verb[] = [ ... ];
const startMarker = 'export const importedVerbs: Verb[] = [';
const startIndex = content.indexOf(startMarker);
const arrayContent = content.substring(startIndex + startMarker.length);

// Extract individual objects. Since they are consistently formatted, we can search for { ... }
// with a dictionary property.
const regex = /\{\s*"dictionary":[\s\S]*?\}\s*(?=,|\s*\])/g;
const matches = arrayContent.match(regex);

const issues = [];

if (matches) {
    matches.forEach(block => {
        const dictMatch = block.match(/"dictionary":\s*"([^"]+)"/);
        const levelMatch = block.match(/"level":\s*"([^"]+)"/);
        const meaningZhMatch = block.match(/"meaning_zh":\s*"([^"]*)"/);
        const examplesMatch = block.match(/"native_examples":\s*\[([\s\S]*?)\]/);

        if (dictMatch && levelMatch) {
            const dictionary = dictMatch[1];
            const level = levelMatch[1];
            const meaningZh = meaningZhMatch ? meaningZhMatch[1] : null;

            if (level === 'N1' || level === 'N2') {
                const examples = [];
                if (examplesMatch && examplesMatch[1].trim()) {
                    // split by { ... }
                    const exMatches = examplesMatch[1].match(/\{[\s\S]*?\}/g);
                    if (exMatches) {
                        exMatches.forEach(exBlock => {
                            const jaMatch = exBlock.match(/"ja":\s*"([^"]+)"/);
                            if (jaMatch) examples.push(jaMatch[1]);
                        });
                    }
                }

                let hasIssue = false;
                let reason = "";

                if (!meaningZh) {
                    hasIssue = true;
                    reason = "Empty meaning_zh";
                }

                if (examples.length < 3) {
                    hasIssue = true;
                    reason += (reason ? ", " : "") + "Fewer than 3 examples (" + examples.length + ")";
                }

                // Check for mismatching examples (e.g. 老ける having 更ける examples)
                // We'll check if the dictionary form (or a part of it) is present in the example text.
                // This is a bit tricky with ruby tags.
                const dictBase = dictionary.replace(/[（\(\)].*$/, ''); // remove bracketed parts
                const dictHead = dictBase.charAt(0);

                const mismatching = examples.filter(ex => {
                    const text = ex.replace(/<[^>]+>/g, '');
                    return !text.includes(dictBase) && !text.includes(dictionary);
                });

                if (mismatching.length > 0) {
                    // hasIssue = true; // Don't flag as error yet, but record it
                    // reason += (reason ? ", " : "") + "Mismatched examples: " + mismatching.length;
                }

                if (hasIssue || mismatching.length > 0) {
                    issues.push({ dictionary, level, meaningZh, exampleCount: examples.length, reason, mismatchCount: mismatching.length });
                }
            }
        }
    });
}

console.log(JSON.stringify(issues, null, 2));
