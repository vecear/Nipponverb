
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const listPath = path.join(__dirname, 'src/data/grammarList.ts');
const detailsPath = path.join(__dirname, 'src/data/details/n1.ts');

try {
    const listContent = fs.readFileSync(listPath, 'utf8');
    const detailsContent = fs.readFileSync(detailsPath, 'utf8');

    // Extract N1 matches from list
    const listRegex = /id:\s*'n1_([^']+)'/g;
    const listIds = new Set();
    let match;
    while ((match = listRegex.exec(listContent)) !== null) {
        listIds.add('n1_' + match[1]);
    }

    // Extract keys from details
    // keys look like: n1_key: {
    const detailsRegex = /(n1_[a-zA-Z0-9_]+):\s*{/g;
    const detailsKeys = new Set();
    while ((match = detailsRegex.exec(detailsContent)) !== null) {
        detailsKeys.add(match[1]);
    }

    console.log(`Found ${listIds.size} N1 items in grammarList.ts`);
    console.log(`Found ${detailsKeys.size} keys in n1.ts`);

    const missingInDetails = [];
    for (const id of listIds) {
        if (!detailsKeys.has(id)) {
            missingInDetails.push(id);
        }
    }

    if (missingInDetails.length === 0) {
        console.log('SUCCESS: All N1 items in grammarList have corresponding details.');
    } else {
        console.log('ERROR: The following items are in grammarList but MISSING from n1.ts:');
        missingInDetails.forEach(id => console.log(' - ' + id));
    }

} catch (err) {
    console.error('Error:', err);
}
