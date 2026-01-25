
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, 'n1_database.json');

try {
    const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    let fixedCount = 0;

    Object.keys(data).forEach(key => {
        const item = data[key];
        let modified = false;

        // Fix 1: Add missing quiz
        if (!item.quiz) {
            item.quiz = [];
            modified = true;
        }

        // Fix 2: Remove root description if present (it should be in explanation)
        if (item.description) {
            delete item.description;
            modified = true;
        }

        // Fix 3: Ensure explanation is array
        if (!Array.isArray(item.explanation)) {
            // If it's undefined
            if (!item.explanation) {
                item.explanation = [];
            }
            modified = true;
        }

        // Fix 4: Ensure analysis exists
        if (!item.analysis) {
            item.analysis = { title: item.pattern || '解説', summary: '' };
            modified = true;
        }

        if (modified) fixedCount++;
    });

    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Fixed ${fixedCount} items in database.`);

} catch (err) {
    console.error(err);
}
