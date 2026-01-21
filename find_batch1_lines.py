import re

file_path = "src/data/verbs_imported.ts"
target_verbs = ["重なる", "擦る", "傾く", "潜る", "汚す", "盛る", "背負う", "退く", "退ける", "剃る"]

with open(file_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    for verb in target_verbs:
        if f'"dictionary": "{verb}"' in line:
            print(f"Found {verb} at line {i+1}")
