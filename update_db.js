
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, 'n1_database.json');
const patchPath = path.join(__dirname, 'n1_patch.json');

try {
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    const patches = JSON.parse(fs.readFileSync(patchPath, 'utf8'));

    let count = 0;
    patches.forEach(patch => {
        if (patch.id && db[patch.id]) {
            // Update fields
            db[patch.id].pattern = patch.pattern;
            db[patch.id].connection = patch.connection;
            db[patch.id].translation = patch.translation;
            db[patch.id].level = patch.level;
            db[patch.id].explanation = patch.explanation;
            db[patch.id].analysis = patch.analysis;
            db[patch.id].tips = patch.tips;
            db[patch.id].quiz = patch.quiz;
            count++;
        } else {
            console.warn(`Patch ID ${patch.id} not found in DB or missing ID.`);
        }
    });

    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
    console.log(`Updated ${count} items in database.`);

} catch (err) {
    console.error(err);
}
