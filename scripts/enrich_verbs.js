
import fs from 'fs';
import path from 'path';
import { translate } from 'google-translate-api-x';

const FILE_PATH = path.join(process.cwd(), 'src', 'data', 'verbs_imported.ts');

async function enrichVerbs() {
    console.log(`Reading from ${FILE_PATH}...`);
    let content = fs.readFileSync(FILE_PATH, 'utf-8');

    // Extract the array part
    const match = content.match(/export const importedVerbs: Verb\[\] = (\[[\s\S]*\]);?/);
    if (!match) {
        console.error('Could not find importedVerbs array in file.');
        return;
    }

    let verbs;
    try {
        // Use eval to parse the object literals (since it might not be strict JSON)
        verbs = eval(match[1]);
    } catch (e) {
        console.error('Failed to parse verbs array:', e);
        return;
    }

    console.log(`Found ${verbs.length} verbs.`);


    let updatedCount = 0;
    const batchSize = 30;

    // Process in batches
    for (let i = 0; i < verbs.length; i += batchSize) {
        const batch = verbs.slice(i, i + batchSize);
        const promises = batch.map(async (verb, index) => {
            let changed = false;

            // Translate to English if missing
            if (!verb.meaning) {
                try {
                    const res = await translate(verb.dictionary, { to: 'en' });
                    verb.meaning = res.text;
                    changed = true;
                } catch (e) {
                    // console.error(`Failed to translate ${verb.dictionary} to EN:`, e.message);
                }
            }

            // Translate to Traditional Chinese (zh-TW) if missing
            if (!verb.meaning_zh) {
                try {
                    const res = await translate(verb.dictionary, { to: 'zh-TW' });
                    verb.meaning_zh = res.text;
                    changed = true;
                } catch (e) {
                    // console.error(`Failed to translate ${verb.dictionary} to ZH:`, e.message);
                }
            }

            if (changed) {
                updatedCount++;
                if (updatedCount % 50 === 0) {
                    process.stdout.write(`\rUpdated ${updatedCount} verbs...`);
                    // Incremental Save
                    const newContent = `import { Verb } from './verbs';

export const importedVerbs: Verb[] = ${JSON.stringify(verbs, null, 2)};`;
                    fs.writeFileSync(FILE_PATH, newContent, 'utf-8');
                }
            }
        });

        await Promise.all(promises);

        // Add a small delay between batches to be polite
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    console.log(`\nFinished! Updated ${updatedCount} verbs.`);

    // Write back to file (Final save)
    const newContent = `import { Verb } from './verbs';

export const importedVerbs: Verb[] = ${JSON.stringify(verbs, null, 2)};`;

    fs.writeFileSync(FILE_PATH, newContent, 'utf-8');
    console.log('File saved.');
}

enrichVerbs().catch(console.error);
