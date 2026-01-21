import re

file_path = "src/data/verbs_imported.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Pattern to match a verb object
verb_pattern = re.compile(r'\{\s*"dictionary":\s*"([^"]+)",[\s\S]*?"native_examples":\s*\[([\s\S]*?)\]', re.MULTILINE)

target_verbs = ["つとめる", "努める", "務める", "勤める"]

for match in verb_pattern.finditer(content):
    dictionary = match.group(1)
    if dictionary in target_verbs:
        print(f"Found entry for: {dictionary}")
        start_pos = match.start()
        # Find line number
        line_num = content.count('\n', 0, start_pos) + 1
        print(f"Line: {line_num}")
        print(f"Examples text: {match.group(2).strip()}")
        print("-" * 40)
