import re

file_path = "src/data/verbs_imported.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Search for the typo
typo = "ようにに"
typo_indices = [m.start() for m in re.finditer(typo, content)]

if typo_indices:
    print(f"Found typo '{typo}' at positions: {typo_indices}")
    for idx in typo_indices:
        # Show some context around the typo
        start = max(0, idx - 100)
        end = min(len(content), idx + 100)
        print(f"Context: {content[start:end]}")

# Search for "つとめる" as meaning_zh or dictionary
search_term = "つとめる"
if search_term in content:
    print(f"Found '{search_term}' in the file.")
else:
    print(f"'{search_term}' not found in the file.")

# Search for the Chinese meaning "在單位工作"
chinese_term = "在單位工作"
if chinese_term in content:
    print(f"Found '{chinese_term}' in the file.")
else:
    print(f"'{chinese_term}' not found in the file.")
