import re

def strip_furigana(text):
    return re.sub(r'\{([^}]+)\}\{([^}]+)\}', r'\1', text)

raw = open('src/data/questions/n2.ts', 'r', encoding='utf-8').read()
ids = set(re.findall(r"id:\s*['\"]([^'\"]+)['\"]", raw))
stripped = strip_furigana(raw)

# Test osowaru
verb_romaji = "osowaru"
verb_dict = "教わる"
id_slug = f"v1399_{verb_romaji}"

is_found_id = any(id_slug in q_id for q_id in ids)
is_found_dict = verb_dict in stripped

print(f"ID Slug: {id_slug} found: {is_found_id}")
print(f"Dict Form: {verb_dict} found in stripped: {is_found_dict}")

# Print count of v1399_ IDs
v1399_ids = [q_id for q_id in ids if 'v1399_' in q_id]
print(f"Total unique v1399_ IDs in N2: {len(v1399_ids)}")
unique_v1399_verbs = set(re.findall(r"v1399_([a-z_]*)", ' '.join(v1399_ids)))
print(f"Total unique verbs by v1399_ in N2: {len(unique_v1399_verbs)}")
