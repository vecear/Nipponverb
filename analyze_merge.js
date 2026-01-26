
const fs = require('fs');
const path = require('path');

// Normalize strings for loosely matching
function normalize(str) {
    if (!str) return '';
    // Remove spaces, dots, common punctuation, convert to lowercase
    return str.replace(/[\s\u3000\.\,\(\)（）]/g, '').toLowerCase();
}

async function analyze() {
    console.log('Reading files...');

    // Read n5.ts as text
    const n5Path = path.resolve('./src/data/details/n5.ts');
    const n5Content = fs.readFileSync(n5Path, 'utf-8');

    // Read new content
    const jsonPath = path.resolve('./n5_pdf_content.json');
    let pdfContent = [];
    try {
        pdfContent = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
    } catch (e) {
        console.error("Failed to parse JSON:", e.message);
        return;
    }

    console.log(`Found ${pdfContent.length} new items.`);

    // Extract existing keys and patterns from n5.ts using Regex
    // Looking for: 'key': { ... pattern: '...', ... }
    // This is a rough parser. 
    // We'll create a map of key -> pattern

    const existingItems = [];

    // Match structure: 'some_id': { ... pattern: 'some pattern'
    // We first split by key definitions roughly

    const keyRegex = /'([a-zA-Z0-9_]+)':\s*\{/g;
    let match;
    const indices = [];

    while ((match = keyRegex.exec(n5Content)) !== null) {
        indices.push({ key: match[1], index: match.index });
    }

    console.log(`Found ${indices.length} existing items in n5.ts`);

    // Now extract pattern for each
    for (let i = 0; i < indices.length; i++) {
        const start = indices[i].index;
        const end = (i + 1 < indices.length) ? indices[i + 1].index : n5Content.length;
        const block = n5Content.substring(start, end);

        // Find pattern
        const patternMatch = /pattern:\s*'([^']+)'/.exec(block);
        if (patternMatch) {
            existingItems.push({
                id: indices[i].key,
                pattern: patternMatch[1]
            });
        }
    }

    const matched = [];
    const unmatched = [];

    pdfContent.forEach(item => {
        const normItem = normalize(item.grammar);

        // Try exact loose match
        let bestMatch = null;

        // 1. Try to find if item.grammar is containd in existing pattern OR vice versa
        // We filter candidates
        const candidates = existingItems.filter(ex => {
            const normEx = normalize(ex.pattern);
            return normEx.includes(normItem) || normItem.includes(normEx);
        });

        if (candidates.length > 0) {
            // Pick best? just take first for now
            bestMatch = candidates[0];
        }

        if (bestMatch) {
            matched.push({
                newItem: item.grammar,
                existingId: bestMatch.id,
                existingPattern: bestMatch.pattern
            });
        } else {
            unmatched.push(item.grammar);
        }
    });

    console.log('\n--- MATCH REPORT ---');
    console.log(`matched: ${matched.length}`);
    console.log(`unmatched: ${unmatched.length}`);

    if (matched.length > 0) {
        console.log('\nMatches (First 5):');
        matched.slice(0, 5).forEach(m => console.log(`${m.newItem} -> ${m.existingId} (${m.existingPattern})`));
    }

    if (unmatched.length > 0) {
        console.log('\nUnmatched (First 5):');
        unmatched.slice(0, 5).forEach(u => console.log(u));
    }
}

analyze();
