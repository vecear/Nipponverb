import re

file_path = "src/data/verbs_imported.ts"

with open(file_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

chinese_term = "在單位工作"
for i, line in enumerate(lines):
    if chinese_term in line:
        print(f"Found '{chinese_term}' at line {i+1}")
        # Show surrounding lines
        start = max(0, i - 10)
        end = min(len(lines), i + 40)
        for j in range(start, end):
            print(f"{j+1}: {lines[j].strip()}")

# Also search for "ようにに" or just "にに"
typo_term = "ようにに"
for i, line in enumerate(lines):
    if typo_term in line:
        print(f"Found typo '{typo_term}' at line {i+1}")

typo_term_2 = "にに"
for i, line in enumerate(lines):
    if typo_term_2 in line:
        print(f"Found typo '{typo_term_2}' at line {i+1}: {line.strip()}")
