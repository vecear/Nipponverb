
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const listPath = path.join(__dirname, 'src/data/grammarList.ts');
const detailsPath = path.join(__dirname, 'src/data/details/n1.ts');

try {
    const listContent = fs.readFileSync(listPath, 'utf8');
    let detailsContent = fs.readFileSync(detailsPath, 'utf8');

    // 1. Parse Grammar List
    // Match structure: { id: 'n1_...', level: 'N1', grammar: '...', meaning: '...' }
    // Regex needs to be robust for single/double quotes and newlines
    const listRegex = /\{\s*id:\s*'([^']+)',\s*level:\s*'N1',\s*grammar:\s*'([^']*)',\s*meaning:\s*'([^']*)'/g;

    const allN1Items = [];
    let match;
    while ((match = listRegex.exec(listContent)) !== null) {
        allN1Items.push({
            id: match[1],
            grammar: match[2],
            meaning: match[3]
        });
    }

    console.log(`Found ${allN1Items.length} N1 items in grammarList.ts`);

    // 2. Find existing keys in n1.ts
    const detailsRegex = /([a-zA-Z0-9_]+):\s*\{/g;
    const existingKeys = new Set();
    while ((match = detailsRegex.exec(detailsContent)) !== null) {
        existingKeys.add(match[1]);
    }
    console.log(`Found ${existingKeys.size} existing items in n1.ts`);

    // 3. Identify missing items
    const missingItems = allN1Items.filter(item => !existingKeys.has(item.id));
    console.log(`Generating stubs for ${missingItems.length} missing items...`);

    if (missingItems.length === 0) {
        console.log('No missing items found. Exiting.');
        process.exit(0);
    }

    // 4. Generate Stubs
    let newContent = '';

    missingItems.forEach((item, index) => {
        const isFirst = index === 0;
        // Check if we need a comma before (we'll handle comma logic in the replacement)

        newContent += `    ${item.id}: {
        id: '${item.id}',
        pattern: '${item.grammar.replace(/'/g, "\\'")}',
        connection: '${item.grammar.replace(/'/g, "\\'")} (接續方式待補)',
        translation: '${item.meaning.replace(/'/g, "\\'")}',
        level: 'N1',
        explanation: [
            {
                usageId: 1,
                title: '暫無詳細解說',
                description: '此文法項目的詳細內容正在製作中。',
                examples: []
            }
        ],
        analysis: {
            title: '${item.grammar.replace(/'/g, "\\'")}',
            description: '待補充',
            points: [],
            summary: ''
        },
        tips: {
            title: '小提醒',
            items: []
        },
        quiz: []
    },\n`;
    });

    // 5. Append to file
    // Find the last "};" (ignoring whitespace)
    const lastBraceIndex = detailsContent.lastIndexOf('};');

    if (lastBraceIndex === -1) {
        throw new Error('Could not find closing "};" in n1.ts');
    }

    // We keep everything up to the last "};", add a comma if needed (assuming previous item didn't have one? Typescript objects usually separate by comma)
    // Looking at file, items end with "}," so we just need to append. 
    // BUT we need to make sure the previous item has a comma or we add it. 
    // The safely way is to replace `};` with `,\n${newContent}\n};`
    // However, if the list was empty or ended clean, comma might be tricky.
    // Let's assume standard formatting. 

    const contentBefore = detailsContent.substring(0, lastBraceIndex);
    const contentAfter = detailsContent.substring(lastBraceIndex); // "};..."

    // Check if contentBefore ends in a comma (ignoring whitespace)
    const trimmedBefore = contentBefore.trimRight();
    const needsComma = !trimmedBefore.endsWith(',') && !trimmedBefore.endsWith('{'); // { would mean empty object

    // Actually, n1.ts structure is `export const n1Details: Record... = { ... };` in Typescript.
    // We are inside the object.

    const finalOutput = contentBefore + (needsComma ? ',' : '') + '\n' + newContent + contentAfter;

    fs.writeFileSync(detailsPath, finalOutput, 'utf8');
    console.log('Successfully updated n1.ts');

} catch (err) {
    console.error('Error:', err);
}
