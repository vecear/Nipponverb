
import json
import re

n5_path = r'c:\Users\vecea\Desktop\Code\Nipponverb\src\data\details\n5.ts'
json_path = r'c:\Users\vecea\Desktop\Code\Nipponverb\n5_teaching_final_batch5.json'

with open(n5_path, 'r', encoding='utf-8') as f:
    ts_content = f.read()

with open(json_path, 'r', encoding='utf-8') as f:
    teaching_data = json.load(f)

# Helper to construct the explanation array string
def build_explanation_str(item):
    # First item is Connection/接續方式 (from root of json item)
    # Following items are in explanation list
    
    parts = []
    
    # Add "接續方式" as first explanation item
    conn_title = item.get('title', '接續方式')
    conn_desc = item.get('description', '').replace('\n', '\\n')
    
    parts.append(f"""            {{
                usageId: 1,
                title: '{conn_title}',
                description: '{conn_desc}',
                examples: []
            }}""")
            
    # Add other explanation items
    usage_id_counter = 2
    for exp in item.get('explanation', []):
        exp_title = exp.get('title', '')
        exp_desc = exp.get('description', '').replace('\n', '\\n')
        
        examples_str = ""
        if exp.get('examples'):
            ex_list = []
            for ex in exp['examples']:
                ex_list.append(f"                    {{ japanese: '{ex['japanese']}', chinese: '{ex['chinese']}' }}")
            examples_str = ",\n".join(ex_list)
            
        parts.append(f"""            {{
                usageId: {usage_id_counter},
                title: '{exp_title}',
                description: '{exp_desc}',
                examples: [
{examples_str}
                ]
            }}""")
        usage_id_counter += 1
        
    return ",\n".join(parts)

# Update each item in the TS file
for item in teaching_data:
    grammar_id = item['id']
    
    # Regex to find the 'explanation: [...]' block for this grammar_id
    # We look for: 'grammar_id': { ... explanation: [ ... ] ... }
    # This is tricky with regex. Better to find the start of the object and replace the explanation field.
    
    # 1. Find the start of the entry
    entry_pattern = re.compile(fr"'{grammar_id}':\s*{{", re.MULTILINE)
    match = entry_pattern.search(ts_content)
    
    if match:
        start_idx = match.end()
        
        # 2. Find the 'explanation: [' inside this entry
        # We search from start_idx
        exp_start_match = re.search(r"explanation:\s*\[", ts_content[start_idx:])
        
        if exp_start_match:
            exp_abs_start = start_idx + exp_start_match.start()
            exp_content_start = start_idx + exp_start_match.end()
            
            # 3. Find the matching closing bracket ']'
            # We count brackets
            bracket_count = 1
            curr_idx = exp_content_start
            while bracket_count > 0 and curr_idx < len(ts_content):
                if ts_content[curr_idx] == '[':
                    bracket_count += 1
                elif ts_content[curr_idx] == ']':
                    bracket_count -= 1
                curr_idx += 1
            
            exp_abs_end = curr_idx
            
            # 4. Construct new explanation block content
            new_exp_content = "\n" + build_explanation_str(item) + "\n        "
            
            # 5. Replace
            # Be careful not to mess up string indices if we do multiple replacements
            # But since we read the file once, we should replace in memory.
            # However, indices shift. So we should re-read or split/join.
            # Given we are iterating, let's use string replacement on the whole file, but unique IDs ensure safety.
            
            # Actually, standard string replace might be safer if we match exact substring?
            # No, content is variable.
            # Let's just do it one by one and update `ts_content` variable?
            # Yes, but we need to re-calculate indices.
            # Instead, let's split the file, modify, and rejoin? No.
            
            # Safer way: Use the regex to replace.
            
            # Re-find the exact block to replace in the CURRENT ts_content
            # Because previous replacements changed the length.
            
            # Let's encapsulate finding and replacing in a loop that ALWAYS searches from scratch or logic that handles shifts.
            pass

# Reread and rewrite loop for safety
final_content = ts_content
for item in teaching_data:
    grammar_id = item['id']
    
    # Find start of entry
    match = re.search(fr"('{grammar_id}'|{grammar_id}):\s*{{", final_content)
    if not match:
        print(f"Skipping {grammar_id}, not found.")
        continue
        
    entry_start = match.end()
    
    # Find 'explanation: [' after entry start
    exp_match = re.search(r"explanation:\s*\[", final_content[entry_start:])
    if not exp_match:
        print(f"Skipping {grammar_id}, simple explanation block not found.")
        continue
        
    exp_start = entry_start + exp_match.start()
    exp_inner_start = entry_start + exp_match.end()
    
    # Find closing bracket
    depth = 1
    pos = exp_inner_start
    while depth > 0 and pos < len(final_content):
        if final_content[pos] == '[':
            depth += 1
        elif final_content[pos] == ']':
            depth -= 1
        pos += 1
    
    if depth != 0:
        print(f"Error parse brackets for {grammar_id}")
        continue
        
    exp_end = pos
    
    # Build new string
    new_inner = "\n" + build_explanation_str(item) + "\n        "
    
    # Replace
    final_content = final_content[:exp_inner_start] + new_inner + final_content[exp_end-1:]

with open(n5_path, 'w', encoding='utf-8') as f:
    f.write(final_content)

print("Updated explanations.")
