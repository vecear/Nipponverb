
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import vm from 'vm';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'src/data/details/n1.ts.bak');
const outputPath = path.join(__dirname, 'n1_database.json');

try {
    const content = fs.readFileSync(inputPath, 'utf8');
    const db = {};

    // Regex to match blocks assuming consistent indentation (4 spaces)
    // defined in patch_n1.js: `    ${key}: {` ... `    },`
    const regex = /^\s{4}(n1_[a-zA-Z0-9_]+): \{([\s\S]*?)^\s{4}\},/gm;

    let match;
    let successCount = 0;
    let failCount = 0;

    while ((match = regex.exec(content)) !== null) {
        const key = match[1];
        const body = match[2];
        const fullBlock = `{ ${body} }`; // Wrap to make it an object

        try {
            // Evaluate carefully
            const sandbox = {};
            vm.createContext(sandbox);
            // We need to handle single quotes and unquoted keys if present in body
            // The body is likely "id: '...', pattern: '...', ..."
            // So wrapping in { } creates a valid JS object literal
            const code = `result = { ${body} }`;
            vm.runInContext(code, sandbox);

            db[key] = sandbox.result;
            successCount++;
        } catch (e) {
            console.warn(`Failed to parse block for ${key}:`, e.message);
            failCount++;
        }
    }

    console.log(`Rescued ${successCount} items. Failed ${failCount}.`);

    fs.writeFileSync(outputPath, JSON.stringify(db, null, 2), 'utf8');

} catch (err) {
    console.error('Error:', err);
}
