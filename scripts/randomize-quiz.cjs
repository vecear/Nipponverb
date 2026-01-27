/**
 * Quiz Answer Randomizer Script
 *
 * This script randomizes quiz answer positions in TypeScript data files
 * while preserving the exact formatting and all other content.
 *
 * What it does:
 * 1. Finds all quiz objects in n5.ts and n4.ts files
 * 2. Shuffles the options array randomly using Fisher-Yates algorithm
 * 3. Updates correctIndex to point to the new position of the correct answer
 * 4. Reorders the 'wrong' array in explanation to match the new order of wrong options
 * 5. Distributes answers more evenly (approximately 25% for each position)
 *
 * Usage: node scripts/randomize-quiz.cjs
 *
 * Note: This script uses .cjs extension because the project uses ES modules.
 */

const fs = require('fs');
const path = require('path');

// Files to process
const FILES = [
    path.join(__dirname, '..', 'src', 'data', 'details', 'n5.ts'),
    path.join(__dirname, '..', 'src', 'data', 'details', 'n4.ts'),
    path.join(__dirname, '..', 'src', 'data', 'details', 'n3.ts'),
    path.join(__dirname, '..', 'src', 'data', 'details', 'n1.ts')
];

/**
 * Fisher-Yates shuffle algorithm that returns both the shuffled array
 * and the mapping of original indices to new positions
 */
function shuffleWithMapping(array) {
    const shuffled = [...array];
    const mapping = array.map((_, i) => i); // Track original indices

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        // Swap mapping
        [mapping[i], mapping[j]] = [mapping[j], mapping[i]];
    }

    return { shuffled, mapping };
}

/**
 * Given original index and mapping array, find the new index
 * mapping[newIndex] = originalIndex
 */
function findNewIndex(originalIndex, mapping) {
    return mapping.indexOf(originalIndex);
}

/**
 * Reorder wrong explanations to match new option order
 */
function reorderWrongExplanations(wrongArray, originalCorrectIndex, mapping) {
    if (!wrongArray || wrongArray.length === 0) return wrongArray;

    // Build original wrong option indices (all indices except correctIndex)
    const originalWrongIndices = [];
    for (let i = 0; i < 4; i++) {
        if (i !== originalCorrectIndex) {
            originalWrongIndices.push(i);
        }
    }

    // Create a map: originalOptionIndex -> wrong explanation
    const wrongByOriginalIndex = {};
    originalWrongIndices.forEach((optIndex, wrongArrIndex) => {
        wrongByOriginalIndex[optIndex] = wrongArray[wrongArrIndex];
    });

    // Find new correct index
    const newCorrectIndex = findNewIndex(originalCorrectIndex, mapping);

    // Build new wrong array in new order (skip the new correct position)
    const newWrongArray = [];
    for (let newPos = 0; newPos < 4; newPos++) {
        if (newPos === newCorrectIndex) continue;
        const originalOptIndex = mapping[newPos];
        newWrongArray.push(wrongByOriginalIndex[originalOptIndex]);
    }

    return newWrongArray;
}

/**
 * Parse a string from TypeScript source, handling escapes correctly
 * Returns the unescaped value
 */
function parseQuotedString(str) {
    // Remove surrounding quotes
    const inner = str.slice(1, -1);
    // Unescape: \' -> ', \\ -> \, \n -> newline, etc.
    let result = '';
    let i = 0;
    while (i < inner.length) {
        if (inner[i] === '\\' && i + 1 < inner.length) {
            const next = inner[i + 1];
            if (next === 'n') {
                result += '\n';
            } else if (next === 't') {
                result += '\t';
            } else if (next === '\\') {
                result += '\\';
            } else if (next === "'") {
                result += "'";
            } else if (next === '"') {
                result += '"';
            } else {
                result += next;
            }
            i += 2;
        } else {
            result += inner[i];
            i++;
        }
    }
    return result;
}

/**
 * Escape a string for TypeScript single-quoted string
 */
function escapeForOutput(str) {
    return str
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'")
        .replace(/\n/g, '\\n')
        .replace(/\t/g, '\\t');
}

/**
 * Parse a string array from TypeScript source
 * Returns array of raw quoted strings (including quotes)
 */
function parseStringArray(content) {
    const items = [];
    let i = 0;

    while (i < content.length) {
        // Skip whitespace and commas
        while (i < content.length && /[\s,]/.test(content[i])) i++;
        if (i >= content.length) break;

        // Check for quote
        if (content[i] !== "'" && content[i] !== '"') {
            i++;
            continue;
        }

        const quoteChar = content[i];
        const startPos = i;
        i++; // Move past opening quote

        while (i < content.length) {
            if (content[i] === '\\' && i + 1 < content.length) {
                i += 2; // Skip escaped char
            } else if (content[i] === quoteChar) {
                i++; // Move past closing quote
                break;
            } else {
                i++;
            }
        }

        items.push(content.slice(startPos, i));
    }

    return items;
}

/**
 * Find the end of an array starting from position after opening bracket
 */
function findArrayEnd(content, startPos) {
    let depth = 1;
    let i = startPos;
    let inString = false;
    let stringChar = '';

    while (i < content.length && depth > 0) {
        const char = content[i];

        if (!inString) {
            if (char === "'" || char === '"') {
                inString = true;
                stringChar = char;
            } else if (char === '[') {
                depth++;
            } else if (char === ']') {
                depth--;
            }
        } else {
            if (char === '\\' && i + 1 < content.length) {
                i++; // Skip escaped char
            } else if (char === stringChar) {
                inString = false;
            }
        }
        i++;
    }

    return i; // Position after the closing ]
}

/**
 * Find all quiz objects in content and return their positions
 */
function findAllQuizzes(content) {
    const quizzes = [];

    // Find each 'options:' that's part of a quiz
    const optionsRegex = /options:\s*\[/g;
    let match;

    while ((match = optionsRegex.exec(content)) !== null) {
        const optionsKeywordStart = match.index;
        const optionsArrayStart = optionsKeywordStart + match[0].length; // Position after [
        const optionsArrayEnd = findArrayEnd(content, optionsArrayStart); // Position after ]

        const optionsContent = content.slice(optionsArrayStart, optionsArrayEnd - 1);
        const optionStrings = parseStringArray(optionsContent);

        // Only process if exactly 4 options
        if (optionStrings.length !== 4) continue;

        // Find correctIndex after options
        const afterOptions = content.slice(optionsArrayEnd);
        const correctIndexMatch = afterOptions.match(/^\s*,\s*correctIndex:\s*(\d+)/);

        if (!correctIndexMatch) continue;

        const correctIndexValueStart = optionsArrayEnd + correctIndexMatch[0].indexOf(correctIndexMatch[1]);
        const correctIndexValueEnd = correctIndexValueStart + correctIndexMatch[1].length;
        const originalCorrectIndex = parseInt(correctIndexMatch[1], 10);

        // Look for wrong array in explanation
        const searchAreaStart = optionsArrayEnd;
        const searchArea = content.slice(searchAreaStart, searchAreaStart + 3000);
        const wrongMatch = searchArea.match(/wrong:\s*\[/);

        let wrongArrayStart = null;
        let wrongArrayEnd = null;
        let wrongStrings = null;

        if (wrongMatch) {
            wrongArrayStart = searchAreaStart + wrongMatch.index + wrongMatch[0].length;
            wrongArrayEnd = findArrayEnd(content, wrongArrayStart);

            const wrongContent = content.slice(wrongArrayStart, wrongArrayEnd - 1);
            wrongStrings = parseStringArray(wrongContent);

            // Only use wrong array if it has exactly 3 items
            if (wrongStrings.length !== 3) {
                wrongArrayStart = null;
                wrongArrayEnd = null;
                wrongStrings = null;
            }
        }

        quizzes.push({
            optionsKeywordStart,
            optionsArrayStart,
            optionsArrayEnd,
            optionStrings,
            correctIndexValueStart,
            correctIndexValueEnd,
            originalCorrectIndex,
            wrongArrayStart,
            wrongArrayEnd,
            wrongStrings
        });
    }

    return quizzes;
}

/**
 * Detect indentation used in an array
 */
function detectIndentation(content, arrayStart) {
    // Look backwards from array start to find the line's indentation
    let lineStart = arrayStart;
    while (lineStart > 0 && content[lineStart - 1] !== '\n') {
        lineStart--;
    }

    // Find leading whitespace
    let indent = '';
    let i = lineStart;
    while (i < content.length && /\s/.test(content[i]) && content[i] !== '\n') {
        indent += content[i];
        i++;
    }

    return indent;
}

/**
 * Format array items with proper indentation
 */
function formatArrayItems(items, baseIndent) {
    // Add extra indentation for array items (typically 4 spaces more)
    const itemIndent = baseIndent + '    ';
    return items.map((item, i) => {
        const comma = i < items.length - 1 ? ',' : '';
        return `\n${itemIndent}${item}${comma}`;
    }).join('') + `\n${baseIndent}`;
}

/**
 * Process a single file
 */
function processFile(filePath) {
    console.log(`Processing: ${filePath}`);

    let content = fs.readFileSync(filePath, 'utf-8');

    // Find all quizzes
    const quizzes = findAllQuizzes(content);
    console.log(`  Found ${quizzes.length} quizzes`);

    // Process from end to beginning to avoid position shifts
    quizzes.sort((a, b) => b.optionsKeywordStart - a.optionsKeywordStart);

    let modifiedCount = 0;

    for (const quiz of quizzes) {
        // Parse option values
        const options = quiz.optionStrings.map(s => parseQuotedString(s));

        // Shuffle options
        const { shuffled: shuffledOptions, mapping } = shuffleWithMapping(options);
        const newCorrectIndex = findNewIndex(quiz.originalCorrectIndex, mapping);

        // Check if anything actually changed
        const optionsChanged = shuffledOptions.some((opt, i) => opt !== options[i]);
        if (!optionsChanged) continue;

        // === Replace wrong array if present ===
        if (quiz.wrongStrings && quiz.wrongArrayStart !== null) {
            // Parse wrong values
            const wrongValues = quiz.wrongStrings.map(s => parseQuotedString(s));
            const reorderedWrong = reorderWrongExplanations(wrongValues, quiz.originalCorrectIndex, mapping);

            // Create new quoted strings
            const newWrongStrings = reorderedWrong.map(v => `'${escapeForOutput(v)}'`);

            // Detect indentation
            const wrongIndent = detectIndentation(content, quiz.wrongArrayStart - 7); // back to 'wrong:'

            // Format new array content
            const newWrongContent = formatArrayItems(newWrongStrings, wrongIndent);

            // Replace wrong array content (between [ and ])
            content = content.slice(0, quiz.wrongArrayStart) +
                      newWrongContent +
                      content.slice(quiz.wrongArrayEnd - 1);
        }

        // === Replace correctIndex ===
        content = content.slice(0, quiz.correctIndexValueStart) +
                  newCorrectIndex.toString() +
                  content.slice(quiz.correctIndexValueEnd);

        // === Replace options ===
        // Create new quoted strings
        const newOptionStrings = shuffledOptions.map(v => `'${escapeForOutput(v)}'`);

        // Check if options are on single line or multiline
        const originalOptionsContent = content.slice(quiz.optionsArrayStart, quiz.optionsArrayEnd - 1);
        const isMultiline = originalOptionsContent.includes('\n');

        let newOptionsContent;
        if (isMultiline) {
            const optIndent = detectIndentation(content, quiz.optionsArrayStart - 9); // back to 'options:'
            newOptionsContent = formatArrayItems(newOptionStrings, optIndent);
        } else {
            // Single line format
            newOptionsContent = newOptionStrings.join(', ');
        }

        content = content.slice(0, quiz.optionsArrayStart) +
                  newOptionsContent +
                  content.slice(quiz.optionsArrayEnd - 1);

        modifiedCount++;
    }

    // Write back
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`  Randomized ${modifiedCount} quizzes`);

    return modifiedCount;
}

/**
 * Analyze distribution of correctIndex values in a file
 */
function analyzeDistribution(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const distribution = { 0: 0, 1: 0, 2: 0, 3: 0 };

    const regex = /correctIndex:\s*(\d+)/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        const index = parseInt(match[1], 10);
        if (index >= 0 && index <= 3) {
            distribution[index]++;
        }
    }

    return distribution;
}

/**
 * Main function
 */
function main() {
    console.log('Quiz Answer Randomizer');
    console.log('======================\n');

    // Show distribution before
    console.log('Distribution BEFORE randomization:');
    for (const file of FILES) {
        if (fs.existsSync(file)) {
            const dist = analyzeDistribution(file);
            const total = Object.values(dist).reduce((a, b) => a + b, 0);
            console.log(`  ${path.basename(file)}:`);
            console.log(`    Index 0: ${dist[0]} (${((dist[0]/total)*100).toFixed(1)}%)`);
            console.log(`    Index 1: ${dist[1]} (${((dist[1]/total)*100).toFixed(1)}%)`);
            console.log(`    Index 2: ${dist[2]} (${((dist[2]/total)*100).toFixed(1)}%)`);
            console.log(`    Index 3: ${dist[3]} (${((dist[3]/total)*100).toFixed(1)}%)`);
            console.log(`    Total quizzes: ${total}`);
        }
    }

    console.log('\nProcessing files...\n');

    let totalQuizzes = 0;
    for (const file of FILES) {
        if (fs.existsSync(file)) {
            totalQuizzes += processFile(file);
        } else {
            console.log(`File not found: ${file}`);
        }
    }

    console.log(`\nTotal quizzes randomized: ${totalQuizzes}`);

    // Show distribution after
    console.log('\nDistribution AFTER randomization:');
    for (const file of FILES) {
        if (fs.existsSync(file)) {
            const dist = analyzeDistribution(file);
            const total = Object.values(dist).reduce((a, b) => a + b, 0);
            console.log(`  ${path.basename(file)}:`);
            console.log(`    Index 0: ${dist[0]} (${((dist[0]/total)*100).toFixed(1)}%)`);
            console.log(`    Index 1: ${dist[1]} (${((dist[1]/total)*100).toFixed(1)}%)`);
            console.log(`    Index 2: ${dist[2]} (${((dist[2]/total)*100).toFixed(1)}%)`);
            console.log(`    Index 3: ${dist[3]} (${((dist[3]/total)*100).toFixed(1)}%)`);
            console.log(`    Total quizzes: ${total}`);
        }
    }

    console.log('\nDone!');
}

// Run the script
main();
