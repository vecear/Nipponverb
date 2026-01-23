import re, json

def strip_furigana(text):
    # Matches {kanji}{furigana}
    text = re.sub(r'\{([^}]+)\}\{([^}]+)\}', r'\1', text)
    # Matches {kanji|furigana}
    text = re.sub(r'\{([^|}]+)\|([^}]+)\}', r'\1', text)
    # Matches {furigana} - my style?
    # Actually my style is 教{おそ}わる -> {kanji is outside?} No.
    # n2.ts has: '先生{せんせい}に' -> {kanji}{furigana}? No, it's {furigana} after kanji?
    # Wait, '先生{せんせい}' means kanji is 先生 and furigana is せんせい?
    # If I strip {せんせい}, I get '先生'.
    return re.sub(r'\{[^}]+\}', '', text)

def get_verbs():
    data = open('src/data/verbs_imported.ts', 'r', encoding='utf-8').read()
    # Find the array content
    start = data.find('verbs_imported = [') + len('verbs_imported = [')
    end = data.rfind('];')
    # This is still not clean JSON... but let's try a simple regex for dictionary forms
    content = data[start:end]
    verbs = []
    # Find all objects
    for m in re.finditer(r'\{\s*"dictionary":\s*"([^"]+)",[^}]+ "level":\s*"N2"[^}]*\}', content, re.DOTALL):
        v_dict = m.group(1)
        # Find romaji in same block
        romaji_match = re.search(r'"romaji":\s*"([^"]+)"', m.group(0))
        romaji = romaji_match.group(1) if romaji_match else ""
        verbs.append({'dictionary': v_dict, 'romaji': romaji, 'level': 'N2'})
    return verbs

raw_n2 = open('src/data/questions/n2.ts', 'r', encoding='utf-8').read()
ids = set(re.findall(r"id:\s*['\"]([^'\"]+)['\"]", raw_n2))
stripped = strip_furigana(raw_n2)

verbs = get_verbs()
covered = []
for v in verbs:
    id_slug = f"v1399_{v['romaji']}"
    is_found = False
    for q_id in ids:
        if id_slug in q_id:
            is_found = True
            break
    if not is_found and v['dictionary'] in stripped:
        is_found = True
    
    if is_found:
        covered.append(v['dictionary'])

print(f"Total N2 verbs in DB: {len(verbs)}")
print(f"Total N2 verbs covered: {len(covered)}")
# Print first 10 covered
print(f"Sample covered: {covered[:10]}")
# Check if one from Batch 15 is there
print(f"Is '教わる' covered? {'教わる' in covered}")
