
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const detailsPath = path.join(__dirname, 'src/data/details/n1.ts');

try {
    const content = fs.readFileSync(detailsPath, 'utf8');

    // We look for keys where the explanation contains "暫無詳細解說"
    // The structure is:
    // key: {
    //    ...
    //    custom field... "暫無詳細解說"
    // }

    // Let's use a regex that captures the key and checks for the string in its block.
    // Since we know the stubs were generated uniformly, we can just search for:
    //   id: 'n1_...',
    //   ...
    //   description: '此文法項目的詳細內容正在製作中。'

    const regex = /id:\s*'(n1_[^']+)',[\s\S]*?description:\s*'此文法項目的詳細內容正在製作中。'/g;

    let match;
    const stubs = [];
    while ((match = regex.exec(content)) !== null) {
        stubs.push(match[1]);
    }

    fs.writeFileSync(path.join(__dirname, 'stubs.json'), JSON.stringify(stubs, null, 2), 'utf8');
    console.log('Written ' + stubs.length + ' stubs to stubs.json');

} catch (err) {
    console.error(err);
}
