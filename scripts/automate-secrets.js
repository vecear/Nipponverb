import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';

function setSecret(name, content) {
    const result = spawnSync('gh', ['secret', 'set', name.trim()], {
        input: content.trim(),
        encoding: 'utf8'
    });

    if (result.status === 0) {
        console.log(`✅ Successfully set secret: ${name}`);
    } else {
        throw new Error(`Failed to set secret ${name}: ${result.stderr || result.error}`);
    }
}

async function setupSecrets() {
    console.log('🚀 Starting automated GitHub Secrets setup...');

    try {
        // 1. Read .env file
        const envPath = path.resolve('.env');
        if (!fs.existsSync(envPath)) {
            throw new Error('.env file not found!');
        }
        const envContent = fs.readFileSync(envPath, 'utf8');
        const envVars = envContent.split(/\r?\n/)
            .filter(line => line.startsWith('VITE_FIREBASE_'))
            .map(line => {
                const parts = line.split('=');
                return [parts[0], parts.slice(1).join('=')];
            });

        // 2. Read Service Account JSON
        const files = fs.readdirSync('.');
        const saFile = files.find(f => f.startsWith('nipponverb-firebase-adminsdk') && f.endsWith('.json'));

        if (!saFile) {
            console.warn('⚠️ Firebase Service Account JSON not found. Will skip FIREBASE_SERVICE_ACCOUNT_NIPPONVERB.');
        } else {
            console.log(`📄 Found service account file: ${saFile}`);
            const saContent = fs.readFileSync(saFile, 'utf8');

            // Validate JSON
            try {
                JSON.parse(saContent);
                console.log('🔍 Service Account JSON validation passed.');
            } catch (e) {
                throw new Error(`Invalid JSON in ${saFile}: ${e.message}`);
            }

            console.log('📤 Setting FIREBASE_SERVICE_ACCOUNT_NIPPONVERB...');
            setSecret('FIREBASE_SERVICE_ACCOUNT_NIPPONVERB', saContent);
        }

        // 3. Set VITE_FIREBASE_* secrets
        for (const [key, value] of envVars) {
            if (key && value) {
                console.log(`📤 Setting ${key}...`);
                setSecret(key, value);
            }
        }

        console.log('\n✨ All secrets have been successfully updated! Your next deployment should be secure and stable.');
    } catch (error) {
        console.error(`\n❌ Error: ${error.message}`);
        process.exit(1);
    }
}

setupSecrets();
