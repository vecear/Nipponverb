const fs = require('fs');
const readline = require('readline');

async function findVerb(target) {
    const fileStream = fs.createReadStream('src/data/verbs_imported.ts');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let found = false;
    let linesToPrint = 0;
    let lineNum = 0;

    for await (const line of rl) {
        lineNum++;
        if (line.includes(`"dictionary": "${target}"`)) {
            found = true;
            linesToPrint = 25;
        }
        if (linesToPrint > 0) {
            console.log(`${lineNum}: ${line}`);
            linesToPrint--;
        }
    }
}

findVerb('持て成す');
findVerb('漏らす');
findVerb('催す');
