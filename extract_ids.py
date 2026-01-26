
import re
import json

n5_path = r'c:\Users\vecea\Desktop\Code\Nipponverb\src\data\details\n5.ts'
output_json = r'c:\Users\vecea\Desktop\Code\Nipponverb\n5_id_map.json'

with open(n5_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

mapping = []

current_id = None
current_pattern = None
brace_depth = 0

# Regex for start of a main entry
# matches "    n5_xxx: {"
key_regex = re.compile(r"^\s*\'?(n5_[a-zA-Z0-9_]+)\'?:\s*\{\s*$")

for line in lines:
    stripped = line.strip()
    
    # Check for key start
    m = key_regex.match(line)
    if m:
        current_id = m.group(1)
        brace_depth = 1 # We are inside the object
        current_pattern = None
        continue
        
    if current_id:
        # Track braces to know when we exit the object
        brace_depth += stripped.count('{')
        brace_depth -= stripped.count('}')
        
        # Look for pattern only at depth 1 (immediate child)
        if brace_depth == 1:
            # Check for pattern: '...'
            # allow for pattern: "..."
            pat_m = re.search(r"pattern:\s*['\"]([^'\"]+)['\"]", line)
            if pat_m:
                current_pattern = pat_m.group(1)
        
        if brace_depth == 0:
            # End of object
            if current_id and current_pattern:
                 mapping.append({
                     "id": current_id,
                     "pattern": current_pattern
                 })
            current_id = None
            current_pattern = None

with open(output_json, 'w', encoding='utf-8') as f:
    json.dump(mapping, f, ensure_ascii=False, indent=4)

print(f"Extracted {len(mapping)} verified items.")
