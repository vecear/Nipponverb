import { readFileSync } from 'fs';

// Strip furigana like 漢字{かんじ} → 漢字
function stripFurigana(text) {
  return text.replace(/\{[^}]+\}/g, '');
}

// Parse a lesson file and extract lesson definitions
function parseLessonFile(filePath) {
  const content = readFileSync(filePath, 'utf-8');

  // Find the exported array
  const exportMatch = content.match(/export const \w+Lessons:\s*LessonDefinition\[\]\s*=\s*\[/);
  if (!exportMatch) return [];

  const startIdx = exportMatch.index + exportMatch[0].length;
  const exportContent = content.substring(startIdx);

  // Find lesson blocks by id pattern: id: 'n4_uX_lY'
  const lessonIdRegex = /id:\s*'(n4_u\d+_l\d+)'/g;
  let match;
  const lessonStarts = [];

  while ((match = lessonIdRegex.exec(exportContent)) !== null) {
    lessonStarts.push({
      offset: match.index,
      id: match[1]
    });
  }

  const lessons = [];
  for (let i = 0; i < lessonStarts.length; i++) {
    const lessonStart = lessonStarts[i].offset;
    const lessonEnd = i < lessonStarts.length - 1
      ? lessonStarts[i + 1].offset
      : exportContent.length;

    const lessonContent = exportContent.substring(lessonStart, lessonEnd);

    // Extract titleZh
    const titleMatch = lessonContent.match(/titleZh:\s*'([^']+)'/);
    const title = titleMatch ? titleMatch[1] : '(unknown)';

    // Extract vocabulary words
    const vocabWords = [];
    const vocabSection = lessonContent.match(/vocabulary:\s*\[([\s\S]*?)(?:\],\s*grammar|\],\s*$)/);
    if (vocabSection) {
      const wordRegex = /word:\s*'([^']+)'/g;
      let wm;
      while ((wm = wordRegex.exec(vocabSection[1])) !== null) {
        vocabWords.push(stripFurigana(wm[1]));
      }
    }

    // Extract grammar patterns (only from grammarSummaries)
    const grammarPatterns = [];
    const grammarSection = lessonContent.match(/grammarSummaries:\s*\[([\s\S]*?)(?:\],\s*dialogue)/);
    if (grammarSection) {
      const patternRegex = /pattern:\s*'([^']+)'/g;
      let pm;
      while ((pm = patternRegex.exec(grammarSection[1])) !== null) {
        grammarPatterns.push(pm[1]);
      }
    }

    // Extract dialogue japanese lines
    const dialogueLines = [];
    const dialogueSection = lessonContent.match(/dialogue:\s*\[([\s\S]*?)(?:\],\s*quiz|\],\s*$)/);
    if (dialogueSection) {
      const dialogueRegex = /japanese:\s*'([^']+)'/g;
      let dm;
      while ((dm = dialogueRegex.exec(dialogueSection[1])) !== null) {
        dialogueLines.push(stripFurigana(dm[1]));
      }
    }

    lessons.push({
      id: lessonStarts[i].id,
      title: title,
      vocabWords,
      grammarPatterns,
      dialogueLines,
      dialogueText: dialogueLines.join(' ')
    });
  }

  return lessons;
}

// Extract distinctive search terms from a grammar pattern
function getPatternSearchTerms(pattern) {
  // First strip furigana
  let cleaned = stripFurigana(pattern);
  // Remove 〜, ～ markers
  cleaned = cleaned.replace(/[〜～]/g, '').trim();
  // Remove things in parentheses (both Japanese and ASCII)
  cleaned = cleaned.replace(/[（(][^）)]*[）)]/g, '').trim();

  // Split by ・ or / or space
  let parts = cleaned.split(/[・\/\s]+/).filter(p => p.length >= 2);

  // Also try removing A/B placeholders
  if (parts.length === 0 && cleaned.length >= 2) {
    let nab = cleaned.replace(/[AB]/g, '').trim();
    if (nab.length >= 2) parts = [nab];
  }
  if (parts.length === 0 && cleaned.length >= 2) {
    parts = [cleaned];
  }

  return parts;
}

// Check if grammar pattern appears in dialogue - improved with stem matching
function checkGrammarInDialogue(pattern, dialogueText) {
  const parts = getPatternSearchTerms(pattern);
  if (parts.length === 0) return { found: false, parts: [], foundParts: [] };

  const foundParts = [];
  for (const p of parts) {
    if (dialogueText.includes(p)) {
      foundParts.push(p);
      continue;
    }
    // Try stem matching for common conjugation patterns
    // e.g., てあげる → てあげ (stem appears in てあげます, てあげました, etc.)
    if (p.endsWith('る') && p.length >= 3) {
      const stem = p.slice(0, -1);
      if (dialogueText.includes(stem)) {
        foundParts.push(p + '(via stem: ' + stem + ')');
        continue;
      }
    }
    // Try removing final い for i-adj patterns
    if (p.endsWith('い') && p.length >= 3) {
      const stem = p.slice(0, -1);
      if (dialogueText.includes(stem)) {
        foundParts.push(p + '(via stem: ' + stem + ')');
        continue;
      }
    }
    // Try removing final だ
    if (p.endsWith('だ') && p.length >= 3) {
      const stem = p.slice(0, -1);
      if (dialogueText.includes(stem)) {
        foundParts.push(p + '(via stem: ' + stem + ')');
        continue;
      }
    }
  }

  return {
    found: foundParts.length > 0,
    parts,
    foundParts
  };
}

// Check vocab - also try stem matching for verbs
function checkVocabInDialogue(word, dialogueText) {
  if (word.length < 2) return { found: true, method: 'skip(<2)' };

  if (dialogueText.includes(word)) {
    return { found: true, method: 'exact' };
  }

  // Try stem matching for verbs (remove last char if it ends with る/す/く/ぐ/む/ぬ/ぶ/う/つ)
  const verbEndings = 'るすくぐむぬぶうつ';
  if (word.length >= 3 && verbEndings.includes(word[word.length - 1])) {
    const stem = word.slice(0, -1);
    if (stem.length >= 2 && dialogueText.includes(stem)) {
      return { found: true, method: 'stem(' + stem + ')' };
    }
  }

  // Try matching for い-adjectives
  if (word.endsWith('い') && word.length >= 3) {
    const stem = word.slice(0, -1);
    if (stem.length >= 2 && dialogueText.includes(stem)) {
      return { found: true, method: 'adj-stem(' + stem + ')' };
    }
  }

  return { found: false, method: 'not found' };
}

// Main
const files = [
  'src/data/courses/n4/lessons/u1.ts',
  'src/data/courses/n4/lessons/u2.ts',
  'src/data/courses/n4/lessons/u3.ts',
  'src/data/courses/n4/lessons/u4.ts',
  'src/data/courses/n4/lessons/u5.ts',
  'src/data/courses/n4/lessons/u6.ts',
];

let allLessons = [];
for (const f of files) {
  const lessons = parseLessonFile(f);
  allLessons.push(...lessons);
}

console.log(`\n${'='.repeat(120)}`);
console.log(`N4 LESSON DIALOGUE COVERAGE AUDIT - Total Lessons Found: ${allLessons.length}`);
console.log(`${'='.repeat(120)}\n`);

for (const lesson of allLessons) {
  console.log(`${'─'.repeat(120)}`);
  console.log(`LESSON: ${lesson.id} | ${lesson.title}`);
  console.log(`${'─'.repeat(120)}`);
  console.log(`Dialogue lines: ${lesson.dialogueLines.length}`);
  if (lesson.dialogueLines.length > 0) {
    console.log(`Dialogue text: ${lesson.dialogueText.substring(0, 300)}...`);
  }

  // Vocab analysis (only words with length >= 2)
  const vocabGe2 = lesson.vocabWords.filter(w => w.length >= 2);
  const vocabResults = vocabGe2.map(w => ({ word: w, ...checkVocabInDialogue(w, lesson.dialogueText) }));
  const vocabFound = vocabResults.filter(r => r.found);
  const vocabMissing = vocabResults.filter(r => !r.found);
  const vocabExact = vocabFound.filter(r => r.method === 'exact');
  const vocabStem = vocabFound.filter(r => r.method !== 'exact' && r.method !== 'skip(<2)');

  console.log(`\nVOCABULARY: ${vocabFound.length}/${vocabGe2.length} found (${vocabGe2.length > 0 ? Math.round(vocabFound.length/vocabGe2.length*100) : 0}%) [exact: ${vocabExact.length}, stem: ${vocabStem.length}]`);
  if (vocabExact.length > 0) {
    console.log(`  Exact match: ${vocabExact.map(r => r.word).join(', ')}`);
  }
  if (vocabStem.length > 0) {
    console.log(`  Stem match: ${vocabStem.map(r => r.word + ' ' + r.method).join(', ')}`);
  }
  if (vocabMissing.length > 0) {
    console.log(`  MISSING: ${vocabMissing.map(r => r.word).join(', ')}`);
  }

  // Grammar analysis
  const grammarResults = lesson.grammarPatterns.map(p => ({
    pattern: p,
    ...checkGrammarInDialogue(p, lesson.dialogueText)
  }));
  const grammarFound = grammarResults.filter(r => r.found);
  const grammarMissing = grammarResults.filter(r => !r.found);

  console.log(`\nGRAMMAR: ${grammarFound.length}/${lesson.grammarPatterns.length} found (${lesson.grammarPatterns.length > 0 ? Math.round(grammarFound.length/lesson.grammarPatterns.length*100) : 0}%)`);
  if (grammarFound.length > 0) {
    console.log(`  Found: ${grammarFound.map(g => `${g.pattern} [via: ${g.foundParts.join(',')}]`).join(' | ')}`);
  }
  if (grammarMissing.length > 0) {
    console.log(`  MISSING: ${grammarMissing.map(g => `${g.pattern} [searched: ${g.parts.join(',')}]`).join(' | ')}`);
  }

  console.log('');
}

// Summary table
console.log(`\n${'='.repeat(120)}`);
console.log('SUMMARY TABLE');
console.log(`${'='.repeat(120)}`);
console.log(`${'Lesson ID'.padEnd(15)} | ${'Title'.padEnd(14)} | ${'VocabExact'.padEnd(10)} | ${'VocabStem'.padEnd(10)} | ${'VocabTotal'.padEnd(10)} | ${'V%'.padEnd(6)} | ${'Grammar'.padEnd(10)} | ${'G%'.padEnd(6)} | ${'Lines'.padEnd(6)}`);
console.log(`${'-'.repeat(15)} | ${'-'.repeat(14)} | ${'-'.repeat(10)} | ${'-'.repeat(10)} | ${'-'.repeat(10)} | ${'-'.repeat(6)} | ${'-'.repeat(10)} | ${'-'.repeat(6)} | ${'-'.repeat(6)}`);

let totalVocab = 0, totalVocabFound = 0, totalGrammar = 0, totalGrammarFound = 0;

for (const lesson of allLessons) {
  const vocabGe2 = lesson.vocabWords.filter(w => w.length >= 2);
  const vocabResults = vocabGe2.map(w => ({ word: w, ...checkVocabInDialogue(w, lesson.dialogueText) }));
  const vocabFound = vocabResults.filter(r => r.found);
  const vocabExact = vocabFound.filter(r => r.method === 'exact');
  const vocabStem = vocabFound.filter(r => r.method !== 'exact' && r.method !== 'skip(<2)');
  const grammarResults = lesson.grammarPatterns.map(p => ({
    pattern: p,
    ...checkGrammarInDialogue(p, lesson.dialogueText)
  }));
  const grammarFound = grammarResults.filter(r => r.found);

  const vocabPct = vocabGe2.length > 0 ? Math.round(vocabFound.length/vocabGe2.length*100) : 0;
  const gramPct = lesson.grammarPatterns.length > 0 ? Math.round(grammarFound.length/lesson.grammarPatterns.length*100) : 0;

  totalVocab += vocabGe2.length;
  totalVocabFound += vocabFound.length;
  totalGrammar += lesson.grammarPatterns.length;
  totalGrammarFound += grammarFound.length;

  console.log(`${lesson.id.padEnd(15)} | ${lesson.title.substring(0,14).padEnd(14)} | ${(vocabExact.length + '/' + vocabGe2.length).padEnd(10)} | ${String(vocabStem.length).padEnd(10)} | ${(vocabFound.length + '/' + vocabGe2.length).padEnd(10)} | ${(vocabPct + '%').padEnd(6)} | ${(grammarFound.length + '/' + lesson.grammarPatterns.length).padEnd(10)} | ${(gramPct + '%').padEnd(6)} | ${String(lesson.dialogueLines.length).padEnd(6)}`);
}

console.log(`${'-'.repeat(15)} | ${'-'.repeat(14)} | ${'-'.repeat(10)} | ${'-'.repeat(10)} | ${'-'.repeat(10)} | ${'-'.repeat(6)} | ${'-'.repeat(10)} | ${'-'.repeat(6)} | ${'-'.repeat(6)}`);
const totalVocabPct = totalVocab > 0 ? Math.round(totalVocabFound/totalVocab*100) : 0;
const totalGramPct = totalGrammar > 0 ? Math.round(totalGrammarFound/totalGrammar*100) : 0;
console.log(`${'TOTAL'.padEnd(15)} | ${''.padEnd(14)} | ${''.padEnd(10)} | ${''.padEnd(10)} | ${(totalVocabFound + '/' + totalVocab).padEnd(10)} | ${(totalVocabPct + '%').padEnd(6)} | ${(totalGrammarFound + '/' + totalGrammar).padEnd(10)} | ${(totalGramPct + '%').padEnd(6)} | `);
