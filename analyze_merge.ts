
import { n5Details } from './src/data/details/n5';
import { n5PdfContent } from './src/data/details/n5_pdf_content';
import * as fs from 'fs';
import * as path from 'path';

// Function to normalize strings for comparison (remove spaces, punctuation)
function normalize(str: string): string {
    return str.replace(/[\s・\/\(\)]/g, '').toLowerCase();
}

async function mergeGrammar() {
    const n5Path = path.resolve('./src/data/details/n5.ts');
    let fileContent = fs.readFileSync(n5Path, 'utf-8');

    // Parse the file content roughly to find where the object ends or how to insert
    // Ideally we would load the object, modify it, and write it back.
    // But since it's a TS file exporting an object, we can't easily "write it back" as JSON.
    // We will parse the file content as text and use regex/replacement.

    // Better approach:
    // 1. Read existing keys.
    // 2. Map new content grammar names to existing keys.
    // 3. Construct a "patch" or simply append new data if it' s hard to insert.
    // 
    // Actually, since I am a coding agent, I can use my specialized tools to update the file properly.
    // I will output a LOG of what to change, and then I will apply the changes using `replace_file_content` or similar.

    console.log("Matching grammar points...");

    const matchedPoints = [];
    const newPoints = [];

    const existingKeys = Object.keys(n5Details);

    for (const item of n5PdfContent) {
        // Try to find a match
        let match = existingKeys.find(key => {
            const detail = n5Details[key];
            // Compare normalized pattens
            return normalize(detail.pattern).includes(normalize(item.grammar)) ||
                normalize(item.grammar).includes(normalize(detail.pattern));
        });

        if (match) {
            console.log(`Matched '${item.grammar}' to existing ID '${match}'`);
            matchedPoints.push({ id: match, item });
        } else {
            console.log(`No match for '${item.grammar}'`);
            newPoints.push(item);
        }
    }

    // Output instructions for the agent (Me) to follow
    console.log("\n--- MERGE INSTRUCTIONS ---");
    console.log(JSON.stringify({ matched: matchedPoints, new: newPoints }, null, 2));
}

mergeGrammar();
