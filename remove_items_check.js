
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, 'n1_database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let count = 0;

Object.keys(db).forEach(key => {
    if (db[key].tips && db[key].tips.items_check) {
        delete db[key].tips.items_check;
        console.log(`Removed items_check from ${key}`);
        count++;
    }
});

if (count > 0) {
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
    console.log(`Cleaned ${count} items.`);
} else {
    console.log('No items_check found.');
}
