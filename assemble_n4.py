
import re
import os

# 1. Read Original file (for Batch questions)
with open('src/data/questions/n4.ts', 'r', encoding='utf-8') as f:
    orig_content = f.read()

# 2. Read New file (for generated questions)
with open('src/data/questions/n4_new.ts', 'r', encoding='utf-8') as f:
    new_content = f.read()

def robust_parse(content):
    qs = []
    current_lines = []
    in_question = False
    
    lines = content.split('\n')
    for i, line in enumerate(lines):
        if re.search(r"^\s*\{\s*$", line) or re.search(r"^\s*\{\s*//.*", line): # Start of object
            is_q = False
            for j in range(1, 5):
                if i+j < len(lines) and "id: '" in lines[i+j]:
                    is_q = True
                    break
            
            if is_q:
                if in_question: 
                    qs.append("\n".join(current_lines))
                    current_lines = []
                in_question = True
                current_lines.append(line)
                continue
        
        if in_question:
            current_lines.append(line)
            if re.search(r"^\s*\},?\s*$", line): # End of object
                qs.append("\n".join(current_lines))
                current_lines = []
                in_question = False
                
    return qs

batch_qs = robust_parse(orig_content)
new_qs = robust_parse(new_content)

print(f"Parsed {len(batch_qs)} from Original")
print(f"Parsed {len(new_qs)} from New")

questions_by_verb = {}

def get_id_and_verb(q_str):
    match = re.search(r"id:\s*'([^']+)'", q_str)
    if not match: return None, None, None
    qid = match.group(1)
    
    if qid.startswith('n4_pot') or qid.startswith('n4_pass') or qid.startswith('n4_caus') or qid.startswith('n4_trans'):
        return qid, 'LEGACY_TOPIC', None

    parts = qid.split('_')
    if len(parts) >= 3:
        verb = parts[2]
        return qid, verb, q_str
    return qid, None, None

# Load NEW questions first (Overrides)
for q in new_qs:
    qid, verb, txt = get_id_and_verb(q)
    if verb:
        if verb not in questions_by_verb: questions_by_verb[verb] = []
        questions_by_verb[verb].append(txt)

# Load ORIGINAL questions
for q in batch_qs:
    qid, verb, txt = get_id_and_verb(q)
    if verb == 'LEGACY_TOPIC': continue 
    if not verb: continue 
    
    # Fix Typo
    if 'ことこと' in txt:
        txt = txt.replace('ことこと', 'こと')
    
    # Check overlap with NEW verbs
    # The verbs I regenerated are: yomu, fumu, nusumu, taberu, suru, utau, tsuku, ireru, oshieru
    # I want to completely REPLACE the original questions for these verbs with my new ones.
    if verb in ['yomu', 'fumu', 'nusumu', 'taberu', 'suru', 'utau', 'tsuku', 'ireru', 'oshieru']:
        # Exception: For oshieru, I generated BOTH in the new file this time. So I can skip original entirely.
        continue
        
    if verb not in questions_by_verb: questions_by_verb[verb] = []
    questions_by_verb[verb].append(txt)

final_output = []
header = """import { StaticQuestion } from './types'

export const n4Questions: StaticQuestion[] = ["""

final_output.append(header)

sorted_verbs = sorted(questions_by_verb.keys())
counter = 1

for verb in sorted_verbs:
    qs = questions_by_verb[verb]
    qs = sorted(qs, key=lambda x: x) # sort by ID string
    
    verb_cap = verb.capitalize()
    final_output.append(f"    // {counter}. {verb_cap}")
    
    for i, q_txt in enumerate(qs):
        # Renumber and ensure comma
        new_id = f"n4_gen_{verb}_{i+1}"
        q_txt = re.sub(r"id:\s*'[^']+'", f"id: '{new_id}'", q_txt)
        
        if q_txt.strip().endswith(','):
             final_output.append(q_txt)
        else:
             final_output.append(q_txt + ",")
             
    counter += 1

final_output.append("];")

with open('src/data/questions/n4_final.ts', 'w', encoding='utf-8') as f:
    f.write("\n".join(final_output))

print(f"Generated n4_final.ts with {counter-1} verbs")
