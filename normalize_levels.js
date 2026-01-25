
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, 'n1_database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let count = 0;

Object.keys(db).forEach(key => {
    // If level is not exactly N1, N2, N3, N4, N5
    // Force it to N1 since this is N1 database? 
    // Or try to map "N2/N1" to "N1".
    const validLevels = ['N1', 'N2', 'N3', 'N4', 'N5'];
    if (!validLevels.includes(db[key].level)) {
        console.log(`Normalizing level for ${key}: "${db[key].level}" -> "N1"`);
        db[key].level = 'N1';
        count++;
    }
});

if (count > 0) {
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
    console.log(`Normalized ${count} items.`);
} else {
    console.log('All levels are valid.');
}
