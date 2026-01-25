const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src/data/details/n1.ts');
const fileContent = fs.readFileSync(filePath, 'utf8');
const lines = fileContent.split('\n');

// Keep first 9663 lines (0 to 9662 index)
const newContent = lines.slice(0, 9663).join('\n');

fs.writeFileSync(filePath, newContent, 'utf8');
console.log(`Truncated n1.ts to ${newContent.split('\n').length} lines.`);
