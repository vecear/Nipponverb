
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const detailsPath = path.join(__dirname, 'src/data/details/n1.ts');
const patchPath = path.join(__dirname, 'n1_patch.json');

try {
    let detailsContent = fs.readFileSync(detailsPath, 'utf8');

    if (!fs.existsSync(patchPath)) {
        console.error('Patch file not found!');
        process.exit(1);
    }

    const patchData = JSON.parse(fs.readFileSync(patchPath, 'utf8'));
    // patchData should be an array of GrammarPoint objects

    let updatedCount = 0;

    patchData.forEach(item => {
        const key = item.id;
        // Regex to find the specific key block. 
        // We assume valid JS object syntax in the file: key: { ... },
        // We want to replace everything from "key: {" down to the matching closing brace.
        // Since my stubs are regular, I can match them easily. 
        // But for safety, let's just match the key start and looks for the next key or end of object? 
        // No, matching braces with regex is hard.
        // However, I know EXACLTY how I wrote the stubs in fill_n1_gaps.js.
        // They look like:
        //     key: {
        //         id: 'key',
        //         ...
        //         quiz: []
        //     },

        // Let's construct the replacement string from the object.
        // We need to format it nicely to match the file style.
        const newBlock = formatGrammarPoint(item);

        // We need to find the existing block.
        // We can search for `    ${key}: {` and replace until `    },`
        // But regex `\s*${key}:\s*\{[\s\S]*?^\s*\},` (multiline) might work if indentation is consistent.

        const regex = new RegExp(`\\s*${key}:\\s*\\{[\\s\\S]*?^\\s*\\},`, 'm');

        // Check if exists
        if (regex.test(detailsContent)) {
            // Replace
            detailsContent = detailsContent.replace(regex, '\n' + newBlock + ',');
            updatedCount++;
        } else {
            console.warn(`Could not find stub for ${key} to replace.`);
        }
    });

    fs.writeFileSync(detailsPath, detailsContent, 'utf8');
    console.log(`Updated ${updatedCount} items in n1.ts`);

} catch (err) {
    console.error('Error:', err);
}

function formatGrammarPoint(item) {
    // Helper to print object as string with indentation
    // We can use JSON.stringify but it's ugly.
    // Let's do a custom recursive formatter or just JSON.stringify and then unquote keys?
    // Actually, for this code base, clean formatting is preferred.
    // But since I am the AI, I can just generate the string in the JSON payload? 
    // No, I'm passing a JSON object.

    // Let's use a simple JSON stringify with 4 spaces, then regex to remove quotes around keys where possible.
    // And fix indentation to 4 spaces context.

    const json = JSON.stringify(item, null, 4);
    // Remove quotes from keys
    const unquoted = json.replace(/"([^"]+)":/g, '$1:');
    // Fix single quotes (JSON uses double)
    // We want single quotes for strings usually in this codebase.
    const singleQuoted = unquoted.replace(/"/g, "'");

    // Indent everything by 4 spaces
    const lines = singleQuoted.split('\n');
    const indented = lines.map(line => '    ' + line).join('\n');

    // The first line "{" needs to be attached to the key "key: {"
    // But here we return just the value block? No, we return "key: { ... }"

    // We need to return "    key: {\n       ...\n    }"

    // Let's just return the formatted object body. 
    return `    ${item.id}: ${singleQuoted.replace(/\n/g, '\n    ')}`;
}
