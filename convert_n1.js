
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import vm from 'vm';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'src/data/details/n1.ts.bak');
const outputPath = path.join(__dirname, 'n1_database.json');

try {
    let content = fs.readFileSync(inputPath, 'utf8');

    // Remove imports
    content = content.replace(/import .*?;/g, '');

    // Remove type annotation and export
    // export const n1Details: Record<string, GrammarPoint> = {
    // becomes
    // const n1Details = {
    content = content.replace(/export const n1Details:.*?=/, 'const n1Details =');

    // Evaluate in sandbox
    const sandbox = {};
    vm.createContext(sandbox);
    vm.runInContext(content, sandbox);

    const data = sandbox.n1Details;

    if (data) {
        fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`Successfully converted. Total items: ${Object.keys(data).length}`);

        // Check a random item to see if it's stub or full
        const checkId = 'n1_moshikuwa';
        if (data[checkId]) {
            if (data[checkId].explanation[0].description.includes('詳細内容は製作中')) {
                console.log(`${checkId} is STUB.`);
            } else {
                console.log(`${checkId} seems FULL.`);
            }
        }
    } else {
        console.error('Failed to extract object.');
    }

} catch (err) {
    console.error('Error during conversion:', err);
    // Print snippet of code if error
    // console.log(content.substring(0, 500));
}
