import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const jsonPath = 'nipponverb-firebase-adminsdk-fbsvc-bdd85bd203.json';

try {
    if (!fs.existsSync(jsonPath)) {
        console.error(`Error: ${jsonPath} not found in the root directory.`);
        process.exit(1);
    }

    const jsonContent = fs.readFileSync(jsonPath, 'utf8');
    console.log('\n--- Instructions ---');
    console.log('1. Ensure you have the GitHub CLI (gh) installed and logged in.');
    console.log('2. Run the following command in your terminal to set the secret:\n');

    // Windows PowerShell requires slightly different escaping sometimes, but standard string should work for gh CLI
    console.log(`gh secret set FIREBASE_SERVICE_ACCOUNT_NIPPONVERB --body '${jsonContent.replace(/'/g, "'\\''")}'`);
    console.log('\n--------------------\n');
} catch (err) {
    console.error('An error occurred:', err.message);
}
