import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

async function setupSecrets() {
    console.log('🚀 Starting automated GitHub Secrets setup...');

    try {
        // 1. Read .env file
        const envPath = path.resolve('.env');
        if (!fs.existsSync(envPath)) {
            throw new Error('.env file not found!');
        }
        const envContent = fs.readFileSync(envPath, 'utf8');
        const envVars = envContent.split('\n')
            .filter(line => line.startsWith('VITE_FIREBASE_'))
            .map(line => line.split('='));

        // 2. Read Service Account JSON
        const files = fs.readdirSync('.');
        const saFile = files.find(f => f.startsWith('nipponverb-firebase-adminsdk') && f.endsWith('.json'));

        if (!saFile) {
            console.warn('⚠️ Firebase Service Account JSON not found. Will skip FIREBASE_SERVICE_ACCOUNT_NIPPONVERB.');
        } else {
            console.log(`📄 Found service account file: ${saFile}`);
            const saContent = fs.readFileSync(saFile, 'utf8');

            console.log('📤 Setting FIREBASE_SERVICE_ACCOUNT_NIPPONVERB...');
            execSync(`gh secret set FIREBASE_SERVICE_ACCOUNT_NIPPONVERB --body "${saContent.replace(/"/g, '\\"')}"`);
        }

        // 3. Set VITE_FIREBASE_* secrets
        for (const [key, value] of envVars) {
            if (key && value) {
                console.log(`📤 Setting ${key}...`);
                execSync(`gh secret set ${key.trim()} --body "${value.trim().replace(/"/g, '\\"')}"`);
            }
        }

        console.log('\n✅ All secrets have been successfully set! Your next deployment should work.');
    } catch (error) {
        console.error(`\n❌ Error setting secrets: ${error.message}`);
        process.exit(1);
    }
}

setupSecrets();
