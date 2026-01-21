const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/verbs_imported.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Split by the pattern that marks the end of a verb object at the top level
// Usually: 
//   },
//   {
// Or the end of the array:
//   }
// ]
const verbBlocks = content.split(/\n  \},\s*\n  \{/);

// Handle the first and last blocks specially if needed
if (verbBlocks.length > 0) {
    verbBlocks[0] = verbBlocks[0].substring(verbBlocks[0].indexOf('{'));
    const lastIndex = verbBlocks[verbBlocks.length - 1].lastIndexOf('}');
    verbBlocks[verbBlocks.length - 1] = verbBlocks[verbBlocks.length - 1].substring(0, lastIndex + 1);
}

const results = [];
verbBlocks.forEach((block, index) => {
    try {
        const dictionaryMatch = block.match(/"dictionary":\s*"([^"]+)"/);
        const levelMatch = block.match(/"level":\s*"([^"]+)"/);
        const examplesMatch = block.match(/"native_examples":\s*\[([\s\S]*?)\]/);

        if (dictionaryMatch && levelMatch) {
            const dictionary = dictionaryMatch[1];
            const level = levelMatch[1];

            if (level === 'N1' || level === 'N2') {
                let exampleCount = 0;
                if (examplesMatch) {
                    const exampleContent = examplesMatch[1].trim();
                    if (exampleContent) {
                        // count { ... } blocks
                        exampleCount = (exampleContent.match(/\{/g) || []).length;
                    }
                }

                if (exampleCount < 3) {
                    results.push({ dictionary, level, exampleCount, index });
                }
            }
        }
    } catch (e) { }
});

console.log(JSON.stringify(results, null, 2));
