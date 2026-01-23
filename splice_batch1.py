
import re

# Read current n4.ts
with open('src/data/questions/n4.ts', 'r', encoding='utf-8') as f:
    current_content = f.read()

# Read new batch 1
with open('src/data/questions/n4_batch1.ts', 'r', encoding='utf-8') as f:
    batch1_content = f.read()

# Parse Batch 1 questions to get their IDs/Verbs
# We want to REPLACE the verbs in current_content that match batch1 verbs.
# Batch 1 verbs: ageru, atsumaru, atsumeru, au, ayamaru, erabu, fueru, fumu(skip?), furidasu, futoru, goranninaru, hajimeru, hakobu, harau, hieru, hikaru, hikidasu, hikkosu.
# Wait, Fumu was #9 in my new list, and also #9 in batch1 list? 
# In the file `n4_batch1.ts` I generated, I included Fumu (#9).
# In the PREVIOUS step, I said Fumu was compliant.
# But I regenerated it anyway in `n4_batch1.ts` to be safe and consistent.
# So I will replace ALL these verbs.

# Strategy:
# 1. Identify where these verbs start and end in `n4.ts`.
# 2. But `n4.ts` is a big list.
# 3. Construct a NEW list.
# 4. Use `assemble_n4.py` logic but modified.

# Let's extract the "Rest" of the questions (Batch 2+).
# Batch 2 starts roughly after Hikkosu.
# Look for "id: 'n4_gen_hikkosu_2'" in n4.ts and find the end of that object.

start_marker = "export const n4Questions: StaticQuestion[] = ["

# Find end of Hikkosu in n4.ts
# It's safer to parse all, replace specific verbs, and dump.
# I'll reuse `assemble_n4.py` logic for robustness.

def robust_parse(content):
    qs = []
    current_lines = []
    in_question = False
    lines = content.split('\n')
    for line in lines:
        if re.search(r"^\s*\{\s*$", line) or re.search(r"^\s*\{\s*//.*", line): 
             # Check lookahead for id
             is_q = True # Simplified assumption for speed, assuming clean file
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

# Parse Original
current_qs = robust_parse(current_content)
# Parse New Batch 1
new_qs = robust_parse(batch1_content)

# Map verb -> qs
q_map = {}
order = []

def get_verb(q_txt):
    match = re.search(r"id:\s*'n4_gen_([a-zA-Z]+)_\d'", q_txt)
    if match: return match.group(1)
    return None

# Load Batch 1 into map first
for q in new_qs:
    v = get_verb(q)
    if not v: continue
    if v not in q_map:
        q_map[v] = []
        order.append(v)
    q_map[v].append(q)

# Load Original, but SKIP if already in map (because Batch 1 supercedes)
# Also Skip the garbage "n4_gen_1_1"
for q in current_qs:
    v = get_verb(q)
    if not v: continue
    if v == '1': continue # Garbage
    
    if v not in q_map:
        q_map[v] = []
        order.append(v)
        q_map[v].append(q)
    # If v IS in map (meaning it's in Batch 1), we SKIP the original version.

# Generate File
output = []
output.append("import { StaticQuestion } from './types'")
output.append("")
output.append("export const n4Questions: StaticQuestion[] = [")

for i, v in enumerate(order):
    qs = q_map[v]
    # Sort by ID (1, then 2)
    qs.sort(key=lambda x: x)
    
    output.append(f"    // {i+1}. {v.capitalize()}")
    for k, q in enumerate(qs):
        # Renumber ID to ensure consistency
        new_id = f"n4_gen_{v}_{k+1}"
        q = re.sub(r"id:\s*'[^']+'", f"id: '{new_id}'", q)
        
        # Comma handling
        if k == len(qs)-1 and i == len(order)-1:
             # Last question of last verb
             q = q.rstrip(',') 
        else:
             if not q.strip().endswith(','):
                 q += ","
        output.append(q)

output.append("];")

with open('src/data/questions/n4.ts', 'w', encoding='utf-8') as f:
    f.write("\n".join(output))

print(f"Updated n4.ts with {len(order)} verbs.")
