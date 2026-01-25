
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, 'n1_database.json');

try {
    const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    const stubs = [];

    Object.keys(data).forEach(key => {
        const item = data[key];
        // Check if explanation is placeholder
        // Usually explanation[0].description contains "暫無詳細解說" or "詳細内容は製作中"
        if (item.explanation && item.explanation.length > 0) {
            const desc = item.explanation[0].description || "";
            if (desc.includes('詳細内容は製作中') || desc.includes('暫無詳細解說')) {
                stubs.push(key);
            }
        } else {
            // If explanation is empty, treat as stub
            stubs.push(key);
        }
    });

    fs.writeFileSync(path.join(__dirname, 'stubs_remaining.json'), JSON.stringify(stubs, null, 2), 'utf8');
    console.log(`Remaining stubs: ${stubs.length}`);

} catch (err) {
    console.error(err);
}
