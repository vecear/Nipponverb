
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RAW_DIR = path.join(__dirname, '../src/data/raw');
const OUTPUT_FILE = path.join(__dirname, '../src/data/verbs_imported.ts');

type Verb = {
    dictionary: string;
    reading: string;
    meaning: string;
    meaning_zh: string;
    type: 'godan' | 'ichidan' | 'irregular';
    group: string;
    level: string;
    transitivity: 'transitive' | 'intransitive' | 'both';
    context: {
        ja: string;
        zh: string;
        en: string;
    };
    native_examples: { ja: string; zh: string }[];
    dictionary_definition: string[];
};

function guessType(dictionary: string, reading: string): { type: Verb['type'], group: string } {
    if (dictionary === 'する' || dictionary === 'くる' || dictionary === '来る') {
        return { type: 'irregular', group: '' };
    }
    if (!dictionary.endsWith('る')) {
        const lastChar = dictionary.slice(-1);
        return { type: 'godan', group: lastChar };
    }
    // Simple heuristic for now: Ends in 'ru' could be ichidan or godan. 
    // Most datasets don't specify. Defaulting to godan usually safer, but we can try to refine later.
    // Actually, let's look at the reading. If reading ends in 'eru' or 'iru', likely Ichidan.
    // This is not 100% accurate (e.g., 帰る kaeru is godan), but a good start.
    if (reading.endsWith('える') || reading.endsWith('いる')) {
        // Exception list could be added here
        const exceptions = ['帰る', '入る', '走る', '知る', '切る', '要る', '滑る', '蹴る', '喋る'];
        if (exceptions.includes(dictionary)) {
            return { type: 'godan', group: 'る' };
        }
        return { type: 'ichidan', group: '' };
    }
    return { type: 'godan', group: 'る' };
}

async function importVerbs() {
    console.log('Starting verb import...');

    if (!fs.existsSync(RAW_DIR)) {
        console.error(`Raw directory not found: ${RAW_DIR}`);
        return;
    }

    const levels = ['n5', 'n4', 'n3', 'n2', 'n1'];
    const allVerbs: Verb[] = [];

    for (const level of levels) {
        const filePath = path.join(RAW_DIR, `${level}.json`);
        if (!fs.existsSync(filePath)) {
            console.warn(`File not found for ${level}: ${filePath}`);
            continue;
        }

        console.log(`Processing ${level}...`);
        const rawData = fs.readFileSync(filePath, 'utf-8');
        try {
            const items = JSON.parse(rawData);
            // Assuming format: array of { kanji, kana, mean, ... } or similar
            // Adapt based on specific dataset later. 
            // Generic fallback logic: check for common fields.

            for (const item of items) {
                // Filter for verbs? Many datasets mix vocabulary.
                // We need to check POS if available, or just guess.
                // If the item doesn't have a specific POS field, we assume it's a mix.
                // WE ONLY WANT VERBS.
                // Heuristic: Must end in u-sound character (u, ku, su, tsu, nu, fu, mu, ru, yu, gu, bu etc.)
                // AND likely have Kanji.

                // Let's assume we filter by "end with u-row kana" in reading or kanji.
                // Better: Look for 'verb' in 'mean' or 'tags' if available.

                const dictionary = item.vocab || item.kanji || item.word;
                const reading = item.kana || item.reading || item.furigana; // Check dataset specific fields
                const meaning = item.mean || item.meaning || item.english || '';

                if (!dictionary || !reading) continue;

                // Simple check: Is it a verb?
                const isVerb = dictionary.match(/[うくすつぬむるぐぶ]$/) || reading.match(/[うくすつぬむるぐぶ]$/);
                // Also exclude adjectives (i-adj ends in i, na-adj often not u-ending).
                // This is imperfect.
                if (!isVerb) continue;

                const { type, group } = guessType(dictionary, reading);

                allVerbs.push({
                    dictionary,
                    reading,
                    meaning,
                    meaning_zh: '', // To be filled
                    type,
                    group,
                    level: level.toUpperCase(),
                    transitivity: 'intransitive', // Default
                    context: { ja: '', zh: '', en: '' },
                    native_examples: [],
                    dictionary_definition: []
                });
            }

        } catch (e) {
            console.error(`Error parsing ${level}:`, e);
        }
    }

    console.log(`Total verbs imported: ${allVerbs.length}`);

    const fileContent = `import { Verb } from './verbs';\n\nexport const importedVerbs: Verb[] = ${JSON.stringify(allVerbs, null, 2)};`;

    fs.writeFileSync(OUTPUT_FILE, fileContent);
    console.log(`Saved to ${OUTPUT_FILE}`);
}

importVerbs();
