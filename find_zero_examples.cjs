const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/verbs_imported.ts');
const content = fs.readFileSync(filePath, 'utf8');

const regex = /\{\s*"dictionary":\s*"([^"]+)",[\s\S]*?"level":\s*"(N1|N2)",[\s\S]*?"native_examples":\s*\[\s*\]/g;
const missing = [];
let match;
while ((match = regex.exec(content)) !== null) {
    missing.push(match[1]);
}

fs.writeFileSync('missing_examples.txt', missing.join('\n'));
console.log('Found', missing.length, 'verbs with 0 examples.');
console.log('First 20:', missing.slice(0, 20).join(', '));
