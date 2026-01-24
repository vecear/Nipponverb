
import re
import sys

# Read current n4.ts
with open('src/data/questions/n4.ts', 'r', encoding='utf-8') as f:
    current_content = f.read()

# Read new batch 7b
with open('src/data/questions/n4_batch7b.ts', 'r', encoding='utf-8') as f:
    batch_content = f.read()

def robust_parse(content):
    qs = []
    current_lines = []
    in_question = False
    lines = content.split('\n')
    for line in lines:
        if re.search(r"^\s*\{\s*$", line) or re.search(r"^\s*\{\s*//.*", line): 
             if in_question: 
                 qs.append("\n".join(current_lines))
                 current_lines = []
             in_question = True
        
        if in_question:
            current_lines.append(line)
            if re.search(r"^\s*\},?,?\s*$", line):
                qs.append("\n".join(current_lines))
                current_lines = []
                in_question = False
    return qs

current_qs = robust_parse(current_content)
new_qs = robust_parse(batch_content)

q_map = {}
order = []

def get_verb(q_txt):
    match = re.search(r"id:\s*'n4_gen_([a-zA-Z]+)_\d+'", q_txt)
    if match: return match.group(1)
    return None

# Load Batch (Override)
for q in new_qs:
    v = get_verb(q)
    if not v: continue
    if v not in q_map:
        q_map[v] = []
        if v not in order: order.append(v) # Wait, order should be global?
    q_map[v].append(q)

# Load Original (Keep if not in override)
# Important: Preserve Order from Original File!
# The `order` list currently only has new batch verbs.
# We want the Global Order from current_qs.

final_map = {}
global_order = []

for q in current_qs:
    v = get_verb(q)
    if not v: continue
    if v == '1': continue
    
    if v not in global_order:
        global_order.append(v)
        final_map[v] = []
        
    # If this verb is IN the new batch, ignore the original Q
    # If this verb is NOT in the new batch, keep original Q
    
    # Check if v is in new_qs verbs
    is_in_batch = False
    for nq in new_qs:
        if get_verb(nq) == v:
            is_in_batch = True
            break
            
    if not is_in_batch:
        final_map[v].append(q)

# Now inject New Batch Qs into final_map
for q in new_qs:
    v = get_verb(q)
    if not v: continue
    if v not in final_map:
        # Should not happen if we are REPLACING. 
        # If it's a new verb insert, we append?
        # Assuming replace.
        # If v was not in current_qs, append to end?
        global_order.append(v)
        final_map[v] = []
    else:
        # Clear legacy Qs if we haven't already (we did check is_in_batch above, but that was item by item)
        # Wait, the logic above: "If is_in_batch, don't append original".
        # So final_map[v] is empty now.
        pass
        
    final_map[v].append(q)

# Construct Output
output = []
output.append("import { StaticQuestion } from './types'")
output.append("")
output.append("export const n4Questions: StaticQuestion[] = [")

for i, v in enumerate(global_order):
    qs = final_map[v]
    qs.sort(key=lambda x: x)
    
    output.append(f"    // {i+1}. {v.capitalize()}")
    for k, q in enumerate(qs):
        new_id = f"n4_gen_{v}_{k+1}"
        q = re.sub(r"id:\s*'[^']+'", f"id: '{new_id}'", q)
        
        if k == len(qs)-1 and i == len(global_order)-1:
             q = q.rstrip(',') 
        else:
             if not q.strip().endswith(','):
                 q += ","
        output.append(q)

output.append("];")

with open('src/data/questions/n4.ts', 'w', encoding='utf-8') as f:
    f.write("\n".join(output))

print(f"Updated n4.ts with {len(global_order)} verbs.")
