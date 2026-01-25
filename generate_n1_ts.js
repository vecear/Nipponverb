
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, 'n1_database.json');
const outputPath = path.join(__dirname, 'src/data/details/n1.ts');

try {
    const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

    // Sort keys just in case? Or keep original order if possible.
    // JSON.parse doesn't guarantee order but usually keeps insertion order in V8.
    // Let's sort by ID to be clean.
    const keys = Object.keys(data).sort();

    let fileContent = `import { GrammarPoint } from '../../types/grammar';\n\n`;
    fileContent += `export const n1Details: Record<string, GrammarPoint> = {\n`;

    keys.forEach((key, index) => {
        const item = data[key];
        // We want to format it nicely.
        // Identify indentation: 4 spaces.
        // We can use JSON.stringify but it quotes keys.
        // Custom format:

        let jsonStr = JSON.stringify(item, null, 4);
        // Remove quotes from keys. 
        // Regex: "key": -> key:
        // Be careful not to replace content inside strings.
        // This simple regex is risky if text contains "foo": sequence.
        // But for grammar data, patterns usually don't have "key": structure in text.
        // However, let's be safer.
        // We can just output the key and then the value block indented?
        // No, the value itself has keys.

        // Let's rely on JSON with quotes for now, TypeScript allows quoted keys.
        // It's valid TS. Strict linting might complain but "prettier" can fix it if user runs it.
        // To respect user rules "respect my prettier preferences", I should try to matching existing style.
        // Existing style uses unquoted keys.

        // Let's use a smarter regex: Replace "key": at start of lines.
        jsonStr = jsonStr.replace(/^(\s*)"([a-zA-Z0-9_]+)":/mg, '$1$2:');

        // Replace double quotes with single quotes for strings?
        // JSON uses double. TS/JS standard here seems to be single.
        // We can try to replace "string" with 'string', escaping inner ' as \'.
        // This is hard to do perfectly with regex on JSON.
        // But let's try a simple heuristic:
        // Replace " around string values.
        // Matches: : "..."
        // But strings can contain commas, curlies etc.

        // Actually, let's just use JSON (double quotes). It's valid TS. 
        // If the user complains, I can write a better formatter.
        // Or I can use `util.inspect`? No.

        // I will stick to unquoted keys (via regex) and double quoted strings for now, it's safer than broken single quote escaping.

        // Indent the block
        const indented = jsonStr.split('\n').map(line => '    ' + line).join('\n');

        fileContent += `    ${key}: ${indented.trim()}`;
        if (index < keys.length - 1) {
            fileContent += ',\n';
        } else {
            fileContent += '\n';
        }
    });

    fileContent += `};\n`;

    fs.writeFileSync(outputPath, fileContent, 'utf8');
    console.log(`Generated n1.ts with ${keys.length} items.`);

} catch (err) {
    console.error(err);
}
