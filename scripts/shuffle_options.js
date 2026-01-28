/**
 * 將題庫檔案中的選項隨機重新排列
 * 確保正確答案不會總是在固定位置
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 設定隨機種子以確保可重現性（可選）
function seededRandom(seed) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

// Fisher-Yates 洗牌算法
function shuffleArray(array, seed) {
    const result = [...array];
    let currentSeed = seed;
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(seededRandom(currentSeed++) * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

// 處理單個題目
function processQuestion(questionStr, questionIndex) {
    // 找到 options 陣列
    const optionsMatch = questionStr.match(/options:\s*\[([\s\S]*?)\],\s*correctIndex/);
    if (!optionsMatch) {
        console.log(`  跳過：找不到 options 陣列`);
        return questionStr;
    }

    // 找到 correctIndex
    const correctIndexMatch = questionStr.match(/correctIndex:\s*(\d+)/);
    if (!correctIndexMatch) {
        console.log(`  跳過：找不到 correctIndex`);
        return questionStr;
    }

    const currentCorrectIndex = parseInt(correctIndexMatch[1]);

    // 解析選項 - 找到所有 { text: ..., reason: ... } 物件
    const optionsContent = optionsMatch[1];
    const optionRegex = /\{\s*text:\s*(['"`])([\s\S]*?)\1\s*,\s*reason:\s*(['"`])([\s\S]*?)\3\s*\}/g;

    const options = [];
    let match;
    while ((match = optionRegex.exec(optionsContent)) !== null) {
        options.push({
            text: match[2],
            reason: match[4],
            textQuote: match[1],
            reasonQuote: match[3],
            original: match[0]
        });
    }

    if (options.length !== 4) {
        console.log(`  跳過：選項數量不是 4（是 ${options.length}）`);
        return questionStr;
    }

    // 記錄正確答案
    const correctOption = options[currentCorrectIndex];

    // 使用題目索引作為種子來決定新的正確答案位置
    // 確保在整個題庫中分布均勻 (0, 1, 2, 3)
    const newCorrectIndex = questionIndex % 4;

    // 建立新的選項順序
    const wrongOptions = options.filter((_, i) => i !== currentCorrectIndex);

    // 洗牌錯誤選項
    const shuffledWrong = shuffleArray(wrongOptions, questionIndex * 100);

    // 插入正確答案到新位置
    const newOptions = [...shuffledWrong];
    newOptions.splice(newCorrectIndex, 0, correctOption);

    // 重建 options 字串
    const newOptionsStr = newOptions.map(opt => {
        return `            { text: '${opt.text.replace(/'/g, "\\'")}', reason: '${opt.reason.replace(/'/g, "\\'")}' }`;
    }).join(',\n');

    // 替換 options 陣列
    let result = questionStr.replace(
        /options:\s*\[([\s\S]*?)\],\s*correctIndex/,
        `options: [\n${newOptionsStr}\n        ],\n        correctIndex`
    );

    // 替換 correctIndex
    result = result.replace(
        /correctIndex:\s*\d+/,
        `correctIndex: ${newCorrectIndex}`
    );

    return result;
}

// 處理單個檔案
function processFile(filePath) {
    console.log(`\n處理檔案: ${filePath}`);

    let content = fs.readFileSync(filePath, 'utf8');

    // 分割出每個題目
    // 找到陣列開始
    const arrayStartMatch = content.match(/export const \w+Questions: StaticQuestion\[\] = \[/);
    if (!arrayStartMatch) {
        console.log('  找不到題目陣列');
        return;
    }

    const arrayStart = content.indexOf(arrayStartMatch[0]) + arrayStartMatch[0].length;

    // 找到陣列結束 (最後的 ];)
    let bracketCount = 1;
    let arrayEnd = arrayStart;
    for (let i = arrayStart; i < content.length; i++) {
        if (content[i] === '[') bracketCount++;
        if (content[i] === ']') bracketCount--;
        if (bracketCount === 0) {
            arrayEnd = i;
            break;
        }
    }

    const arrayContent = content.slice(arrayStart, arrayEnd);

    // 用正則分割題目 (每個 { id: ... } 物件)
    // 找到所有題目的起始位置
    const questionStarts = [];
    const idRegex = /\{\s*id:\s*['"`]/g;
    let idMatch;
    while ((idMatch = idRegex.exec(arrayContent)) !== null) {
        questionStarts.push(idMatch.index);
    }

    console.log(`  找到 ${questionStarts.length} 題`);

    // 處理每個題目
    let processedContent = arrayContent;
    let offset = 0;

    // 統計各位置的正確答案數量
    const positionCounts = [0, 0, 0, 0];

    for (let i = 0; i < questionStarts.length; i++) {
        const start = questionStarts[i];
        const end = i < questionStarts.length - 1 ? questionStarts[i + 1] : arrayContent.length;

        const questionStr = arrayContent.slice(start, end);
        const processed = processQuestion(questionStr, i);

        // 統計新的 correctIndex
        const newIndexMatch = processed.match(/correctIndex:\s*(\d+)/);
        if (newIndexMatch) {
            positionCounts[parseInt(newIndexMatch[1])]++;
        }

        // 更新內容
        processedContent = processedContent.slice(0, start + offset) +
                          processed +
                          processedContent.slice(end + offset);
        offset += processed.length - (end - start);
    }

    console.log(`  正確答案位置分布: [0]=${positionCounts[0]}, [1]=${positionCounts[1]}, [2]=${positionCounts[2]}, [3]=${positionCounts[3]}`);

    // 重建完整檔案
    const newContent = content.slice(0, arrayStart) + processedContent + content.slice(arrayEnd);

    // 寫回檔案
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`  ✓ 已更新檔案`);
}

// 主程式
const questionsDir = path.join(__dirname, '..', 'src', 'data', 'questions');
const files = ['n5.ts', 'n4.ts', 'n3.ts', 'n2.ts', 'n1.ts'];

console.log('開始隨機化題目選項順序...');

for (const file of files) {
    const filePath = path.join(questionsDir, file);
    if (fs.existsSync(filePath)) {
        processFile(filePath);
    } else {
        console.log(`檔案不存在: ${filePath}`);
    }
}

console.log('\n完成！');
