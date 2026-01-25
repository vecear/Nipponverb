
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'n1_database.json');
let db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let modified = false;

// 1. Audit for keys with spaces or weird names
function checkKeys(obj, path = '') {
    if (!obj || typeof obj !== 'object') return;
    Object.keys(obj).forEach(key => {
        if (key.includes(' ') || key === 'items check' || key === 'quiz' && path.includes('analysis')) {
            console.log(`Found suspicious key: "${key}" at ${path}`);
            // Fix "items check"
            if (key === 'items check') {
                console.log('Fixing "items check" -> "items"');
                obj['items'] = obj[key];
                delete obj[key];
                modified = true;
            }
        }
        checkKeys(obj[key], path + '.' + key);
    });
}

// 2. Audit for nested 'quiz' inside 'analysis' or 'tips'
Object.values(db).forEach(item => {
    if (item.analysis && item.analysis.quiz) {
        console.log(`Found quiz in analysis for ${item.id}. Moving/Deleting...`);
        // Usually if it's in analysis it might be a mistake or duplicate.
        // If top level quiz is missing, move it.
        if (!item.quiz) {
            item.quiz = item.analysis.quiz;
        }
        delete item.analysis.quiz;
        modified = true;
    }
    if (item.tips && item.tips.quiz) {
        console.log(`Found quiz in tips for ${item.id}. Moving/Deleting...`);
        if (!item.quiz) {
            item.quiz = item.tips.quiz;
        }
        delete item.tips.quiz;
        modified = true;
    }
});

checkKeys(db);

if (modified) {
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
    console.log('Database fixed and saved.');
} else {
    console.log('No structural issues found requiring fix.');
}
