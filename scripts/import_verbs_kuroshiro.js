
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Kuroshiro from 'kuroshiro';
import KuromojiAnalyzer from 'kuroshiro-analyzer-kuromoji';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_FILE = path.join(__dirname, '../voc/JLPT_Vocabulary by Bluskyo.json');
const OUTPUT_FILE = path.join(__dirname, '../src/data/verbs_imported.ts');

const kuroshiro = new Kuroshiro();

function guessType(dictionary, reading) {
    if (dictionary === 'する' || dictionary === 'くる' || dictionary === '来る') {
        return { type: 'irregular', group: '' };
    }
    // Very basic heuristic
    if (!dictionary.endsWith('る')) {
        const lastChar = dictionary.slice(-1);
        return { type: 'godan', group: lastChar };
    }
    // If ends in 'iru' or 'eru' (reading)
    if (reading.endsWith('いる') || reading.endsWith('える')) {
        // Exceptions would go here
        return { type: 'ichidan', group: '' };
    }
    return { type: 'godan', group: 'る' };
}

async function run() {
    console.log(`Reading from: ${INPUT_FILE}`);
    if (!fs.existsSync(INPUT_FILE)) {
        console.error('Input file not found!');
        return;
    }

    const rawData = fs.readFileSync(INPUT_FILE, 'utf-8');
    const vocabMap = JSON.parse(rawData);

    console.log('Initializing Kuroshiro...');
    try {
        await kuroshiro.init(new KuromojiAnalyzer({ dictPath: "./node_modules/kuromoji/dict" }));
    } catch (e) {
        console.error('Failed to init Kuroshiro:', e);
        return;
    }

    const verbs = [];
    let count = 0;
    const LIMIT = 50; // Safety limit for first run

    const keys = Object.keys(vocabMap);
    console.log(`Total words in file: ${keys.length}`);

    for (const word of keys) {
        // Filter verbs (heuristic: ends in u-row kana)
        const lastChar = word.slice(-1);
        const isLikelyVerb = /[うくぐすつぬぶむる]$/.test(lastChar);
        if (!isLikelyVerb) continue;

        // Skip purely Kana words if they are short? No, keep all.
        // Skip Suru compounds like "勉強" (ends in noun)? YES (our regex excludes them unless they have okurigana like 'る')

        // Generate reading
        const reading = await kuroshiro.convert(word, { to: 'hiragana' });

        // Skip if reading failed or is same as kanji (and kanji has kanji chars)
        // Actually kuroshiro returns hiragana.

        const { type, group } = guessType(word, reading);
        const level = vocabMap[word];

        verbs.push({
            dictionary: word,
            reading: reading,
            meaning: '', // Pending translation
            meaning_zh: '', // Pending translation
            type,
            group,
            level: level,
            transitivity: 'intransitive', // Default
            context: { ja: '', zh: '', en: '' },
            native_examples: [],
            dictionary_definition: []
        });

        process.stdout.write('.');
        count++;
        // if (count >= LIMIT) break; // Disable limit for real run
    }

    console.log(`\nProcessed ${verbs.length} verbs.`);

    const fileContent = `import { Verb } from './verbs';\n\nexport const importedVerbs: Verb[] = ${JSON.stringify(verbs, null, 2)};`;

    fs.writeFileSync(OUTPUT_FILE, fileContent);
    console.log(`Saved to ${OUTPUT_FILE}`);
}

run();
