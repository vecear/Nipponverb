
import re

file_path = r'c:\Users\wseu\Desktop\Code\Nipponverb\src\data\grammarList.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract items
# Format: { id: '...', level: '...', grammar: '...', romaji: '...', meaning: '...' },
pattern = r"\{ id: '([^']*)', level: '([^']*)', grammar: '([^']*)', romaji: '([^']*)', meaning: '([^']*)' \},"
matches = re.findall(pattern, content)

print(f"Total items found: {len(matches)}")

by_level = {'N5': [], 'N4': [], 'N3': [], 'N2': [], 'N1': []}
for m in matches:
    id, level, grammar, romaji, meaning = m
    by_level[level].append({'id': id, 'grammar': grammar, 'romaji': romaji, 'meaning': meaning})

for level in ['N5', 'N4', 'N3', 'N2', 'N1']:
    print(f"{level}: {len(by_level[level])} items")
    # sorted_romaji = sorted([x['romaji'] for x in by_level[level]])
    # print(f"First 3: {sorted_romaji[:3]}")
    # print(f"Last 3: {sorted_romaji[-3:]}")
