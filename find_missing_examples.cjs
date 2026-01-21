const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/verbs_imported.ts');
const content = fs.readFileSync(filePath, 'utf8');

// A very simple parser assuming the structure is consistent
// We'll extract the array content
const arrayMatch = content.match(/export const importedVerbs: Verb\[] = (\[[\s\S]*?\]);/);
if (!arrayMatch) {
    console.error("Could not find importedVerbs array");
    process.exit(1);
}

let verbs;
try {
    // Try to parse it. Note: this might fail if there are complex expressions, 
    // but the file seems to be a static JSON-like array.
    // However, it's a .ts file, so it might have imports or non-JSON parts.
    // Let's try a more robust manual extraction if JSON.parse fails.
    const jsonStr = arrayMatch[1]
        .replace(/\/\/.*$/gm, '') // remove comments
        .replace(/,\s*\]/g, ']') // remove trailing commas
        .replace(/,\s*\}/g, '}');

    // Actually, since it's a TS file, it's easier to just use a script that imports it if we have ts-node,
    // or just regex if it's strictly formatted.
    // Given the size, regex might be safer for a quick scan.
} catch (e) {
    console.error("Failed to parse JSON", e);
}

// Robust scanning with regex
const verbBlocks = content.match(/\{\s*"dictionary":[\s\S]*?\}\s*(?=,|\s*\])/g);

const results = [];
if (verbBlocks) {
    verbBlocks.forEach(block => {
        try {
            // Minimal cleanup to make it look like JSON
            const cleanBlock = block.replace(/\n\s*/g, ' ');
            const dictionaryMatch = cleanBlock.match(/"dictionary":\s*"([^"]+)"/);
            const levelMatch = cleanBlock.match(/"level":\s*"([^"]+)"/);
            const examplesMatch = cleanBlock.match(/"native_examples":\s*\[([\s\S]*?)\]/);

            if (dictionaryMatch && levelMatch) {
                const dictionary = dictionaryMatch[1];
                const level = levelMatch[1];

                if (level === 'N1' || level === 'N2') {
                    let exampleCount = 0;
                    if (examplesMatch) {
                        const exampleContent = examplesMatch[1].trim();
                        if (exampleContent) {
                            // count { ... } blocks
                            exampleCount = (exampleContent.match(/\{/g) || []).length;
                        }
                    }

                    if (exampleCount < 3) {
                        results.push({ dictionary, level, exampleCount });
                    }
                }
            }
        } catch (e) { }
    });
}

console.log(JSON.stringify(results, null, 2));
