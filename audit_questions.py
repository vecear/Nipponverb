
import os
import re

import os
import re
from collections import Counter

files = ['n1.ts', 'n2.ts', 'n3.ts', 'n4.ts', 'n5.ts']
base_path = r'c:\Users\vecea\Desktop\Code\Nipponverb\src\data\questions'

all_ids = []
for f in files:
    full_path = os.path.join(base_path, f)
    with open(full_path, 'r', encoding='utf-8') as file:
        content = file.read()
        # Find blocks to check level
        blocks = re.findall(r"\{[^{}]*id:\s*['\"]([^'\"]+)['\"][^{}]*\}", content, re.DOTALL)
        ids = re.findall(r"id:\s*['\"]([^'\"]+)['\"]", content)
        
        # Check level per question block
        expected_level = f.split('.')[0].upper() # N1, N2...
        level_mismatches = 0
        matches = re.finditer(r"\{[^{}]*id:\s*['\"]([^'\"]+)['\"][^{}]*level:\s*['\"]([^'\"]+)['\"][^{}]*\}", content, re.DOTALL)
        for match in matches:
            id_val = match.group(1)
            level_val = match.group(2)
            if level_val != expected_level:
                print(f"  LEVEL MISMATCH: {id_val} has level {level_val} (expected {expected_level})")
                level_mismatches += 1
        
        v1399_ids = [i for i in ids if "v1399" in i]
        all_ids.extend(ids)
        print(f"{f}: {len(ids)} total, {len(v1399_ids)} v1399, {level_mismatches} level mismatches")

counts = Counter(all_ids)
duplicates = [item for item, count in counts.items() if count > 1]
if duplicates:
    print(f"\nDUPLICATE IDs FOUND ({len(duplicates)}):")
    for d in duplicates:
        print(f"  {d} appears {counts[d]} times")
else:
    print("\nNo duplicate IDs found.")

print(f"\nTotal unique IDs: {len(counts)}")
print(f"Total IDs counted: {len(all_ids)}")
