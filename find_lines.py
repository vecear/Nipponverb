import re

file_path = "src/data/verbs_imported.ts"

with open(file_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

target_verbs = ["勤める", "務める", "努める"]

for i, line in enumerate(lines):
    for verb in target_verbs:
        if f'"dictionary": "{verb}"' in line:
            print(f"Found {verb} at line {i+1}")
