
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_FILE = path.join(__dirname, '../voc/JLPT_Vocabulary by Bluskyo.json');
const OUTPUT_FILE = path.join(__dirname, '../src/data/verbs_imported.ts');

async function run() {
    console.log(`Reading from: ${INPUT_FILE}`);
    if (!fs.existsSync(INPUT_FILE)) {
        console.error('Input file not found!');
        return;
    }

    const rawData = fs.readFileSync(INPUT_FILE, 'utf-8');
    const vocabMap = JSON.parse(rawData);

    const verbs = [];
    const keys = Object.keys(vocabMap);
    console.log(`Total words in file: ${keys.length}`);

    for (const word of keys) {
        // Filter verbs (heuristic: ends in u-row kana)
        const lastChar = word.slice(-1);
        const isLikelyVerb = /[うくぐすつぬぶむる]$/.test(lastChar);
        if (!isLikelyVerb) continue;

        const level = vocabMap[word];

        // Simple heuristic for type/group
        let type = 'godan';
        let group = 'る';

        if (word === 'する' || word === 'くる' || word === '来る') {
            type = 'irregular';
            group = '';
        } else if (!word.endsWith('る')) {
            group = word.slice(-1);
            type = 'godan';
        } else {
            // Default to godan for 'ru' ending if unknown reading
            type = 'godan';
            group = 'る';
        }

        verbs.push({
            dictionary: word,
            reading: word, // Placeholder: Use Kanji as reading temporarily
            meaning: '', // Pending translation
            meaning_zh: '', // Pending translation
            type: type,
            group: group,
            level: level,
            transitivity: 'intransitive',
            context: { ja: '', zh: '', en: '' },
            native_examples: [],
            dictionary_definition: []
        });
    }

    console.log(`\nProcessed ${verbs.length} verbs.`);

    // Sort by Level (N5 -> N1)
    const levelOrder = { 'N5': 1, 'N4': 2, 'N3': 3, 'N2': 4, 'N1': 5 };
    verbs.sort((a, b) => (levelOrder[a.level] || 99) - (levelOrder[b.level] || 99));

    const fileContent = `import { Verb } from './verbs';\n\nexport const importedVerbs: Verb[] = ${JSON.stringify(verbs, null, 2)};`;

    fs.writeFileSync(OUTPUT_FILE, fileContent);
    console.log(`Saved to ${OUTPUT_FILE}`);
}

run();
