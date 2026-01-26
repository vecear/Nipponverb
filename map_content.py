
import json
import re

docx_path = r'c:\Users\vecea\Desktop\Code\Nipponverb\n5_docx_parsed.json'
ids_path = r'c:\Users\vecea\Desktop\Code\Nipponverb\n5_id_map.json'
output_path = r'c:\Users\vecea\Desktop\Code\Nipponverb\n5_mapped_ready.json'

with open(docx_path, 'r', encoding='utf-8') as f:
    docx_items = json.load(f)

with open(ids_path, 'r', encoding='utf-8') as f:
    system_items = json.load(f)

# Helper to normalize strings for comparison
def normalize(s):
    # Remove chars that are often inconsistent: ・ / parens / spaces
    s = re.sub(r'[・/()（）\s]', '', s)
    return s.lower()

mapped_data = []
unmapped_docx = []

# Create a lookup for system items
# We might need to match "cha ikenai" to "chaikenai" etc.
# But docx has "ちゃいけない", system has "ちゃいけない・じゃいけない"

for doc_item in docx_items:
    doc_grammar = doc_item['grammar']
    doc_norm = normalize(doc_grammar)
    
    match_found = None
    
    # Try finding in system items
    for sys_item in system_items:
        sys_pattern = sys_item['pattern']
        sys_norm = normalize(sys_pattern)
        
        # Check if one contains the other or exact match
        if doc_norm == sys_norm:
            match_found = sys_item
            break
        if doc_norm in sys_norm and len(doc_norm) > 1:
            match_found = sys_item
            break
        if sys_norm in doc_norm and len(sys_norm) > 1:
            match_found = sys_item
            break
            
    if match_found:
        mapped_data.append({
            "id": match_found['id'],
            "pattern": match_found['pattern'],
            "docx_grammar": doc_grammar,
            "meaning_eng": doc_item['meaning_eng'],
            "usage_eng": doc_item['usage_eng'],
            "examples": doc_item['examples']
        })
    else:
        unmapped_docx.append(doc_grammar)

with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(mapped_data, f, ensure_ascii=False, indent=4)

print(f"Mapped {len(mapped_data)} items. Unmapped DOCX items: {len(unmapped_docx)}")
if unmapped_docx:
    print("Unmapped samples:", unmapped_docx[:5])
