const fs = require('fs');
const path = require('path');

const paths = ['node_modules', 'package-lock.json'];

paths.forEach(p => {
    const fullPath = path.resolve(__dirname, p);
    if (fs.existsSync(fullPath)) {
        console.log(`Removing ${fullPath}...`);
        try {
            fs.rmSync(fullPath, { recursive: true, force: true });
            console.log(`Removed ${p}`);
        } catch (e) {
            console.error(`Error removing ${p}:`, e.message);
        }
    } else {
        console.log(`${p} does not exist.`);
    }
});
console.log('Cleanup complete.');
