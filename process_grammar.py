
import os
import re
import html

# --- 1. Parse Existing Grammar List ---
ts_file_path = r'c:\Users\wseu\Desktop\Code\Nipponverb\src\data\grammarList.ts'
with open(ts_file_path, 'r', encoding='utf-8') as f:
    ts_content = f.read()

item_pattern = r"\{ id: '([^']*)', level: '([^']*)', grammar: '([^']*)', romaji: '([^']*)', meaning: '(.*?)' \}"
existing_items = []
ids = set()
grammars = set() 

for match in re.finditer(item_pattern, ts_content):
    id_val, level, grammar, romaji, meaning = match.groups()
    existing_items.append({
        'id': id_val,
        'level': level,
        'grammar': grammar,
        'romaji': romaji,
        'meaning': meaning
    })
    ids.add(id_val)
    # Normalize comparison key: Level + Romaji (alphanumeric) + Grammar (no symbols)
    norm_key = f"{level}_{re.sub(r'[^a-z0-9]', '', romaji.lower())}_{re.sub(r'[\s\u3000\u30fb/・]', '', grammar)}"
    grammars.add(norm_key)

print(f"Loaded {len(existing_items)} existing items.")

# --- 2. Parse HTML Files ---
pages_map = {
    'n5': 3,
    'n4': 4,
    'n3': 5,
    'n2': 5,
    'n1': 7,
}
new_entries = []
duplicates_count = 0

for level, count in pages_map.items():
    for page in range(1, count + 1):
        html_path = f'temp_grammar/{level}_{page}.html'
        if not os.path.exists(html_path):
            print(f"Warning: {html_path} not found.")
            continue
        
        with open(html_path, 'r', encoding='utf-8') as f:
            html_content = f.read()
        
        rows = html_content.split('<tr class=jl-row>')
        
        for row in rows[1:]: 
            try:
                # Extract Romaji
                romaji_match = re.search(r'<td class="jl-td-gr.*?<a.*?>(.*?)</a>', row, re.DOTALL)
                if not romaji_match: continue
                romaji = html.unescape(romaji_match.group(1)).strip()
                
                # Extract Grammar
                grammar_match = re.search(r'<td class="jl-td-gj.*?<a.*?>(.*?)</a>', row, re.DOTALL)
                if not grammar_match: continue
                grammar = html.unescape(grammar_match.group(1)).strip()
                
                # Extract Meaning - Robust for missing </td>
                # Match until </td> OR start of next tag OR end of string
                # Note: row string stops at next <tr class=jl-row>, but might contain other tags like <tbody> </table> if at end.
                meaning_match = re.search(r'<td class="jl-td-gm.*?>(.*?)(?:</td>|<)', row, re.DOTALL)
                if not meaning_match:
                    # Fallback: take everything
                    meaning_match = re.search(r'<td class="jl-td-gm.*?>(.*)', row, re.DOTALL)
                
                if meaning_match:
                    meaning = html.unescape(meaning_match.group(1)).strip()
                    # Cleanup formatting if any
                    meaning = re.sub(r'<[^>]*>', '', meaning).strip()
                else:
                    meaning = "" # Should not happen with fallback
                
                # Normalize Key
                norm_key = f"{level.upper()}_{re.sub(r'[^a-z0-9]', '', romaji.lower())}_{re.sub(r'[\s\u3000\u30fb/・]', '', grammar)}"
                
                if norm_key in grammars:
                    duplicates_count += 1
                    continue # Already exists
                
                # New Item
                safe_romaji = re.sub(r'[^a-zA-Z0-9]', '_', romaji).lower()
                safe_romaji = re.sub(r'_+', '_', safe_romaji).strip('_')
                if not safe_romaji: safe_romaji = "item"
                
                new_id = f"{level}_{safe_romaji}"
                
                # Ensure ID uniqueness
                suffix = 1
                base_id = new_id
                while new_id in ids:
                    new_id = f"{base_id}_{suffix}"
                    suffix += 1
                
                ids.add(new_id)
                grammars.add(norm_key)
                
                new_entry = {
                    'id': new_id,
                    'level': level.upper(),
                    'grammar': grammar.replace("'", "\\'"),
                    'romaji': romaji.replace("'", "\\'"),
                    'meaning': meaning.replace("'", "\\'")
                }
                new_entries.append(new_entry)
                
            except Exception as e:
                print(f"Error parsing row: {e}")

print(f"Found {len(new_entries)} new entries. (Skipped {duplicates_count} duplicates)")

# --- 3. Reconstruct TS File ---
all_items = existing_items + new_entries

# Sort order
level_order = {'N5': 0, 'N4': 1, 'N3': 2, 'N2': 3, 'N1': 4}
all_items.sort(key=lambda x: (level_order.get(x['level'], 5), x['romaji'].lower()))

new_ts_content = """export interface GrammarPointItem {
    id: string;
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
    grammar: string;
    romaji: string;
    meaning: string;
}

export const grammarList: GrammarPointItem[] = [
"""

current_level = None
for item in all_items:
    if item['level'] != current_level:
        current_level = item['level']
        new_ts_content += f"    // {current_level}\n"
    
    line = f"    {{ id: '{item['id']}', level: '{item['level']}', grammar: '{item['grammar']}', romaji: '{item['romaji']}', meaning: '{item['meaning']}' }},\n"
    new_ts_content += line

new_ts_content += "];\n"

if len(all_items) < len(existing_items):
    print("Error: Somehow lost items!")
else:
    with open(ts_file_path, 'w', encoding='utf-8') as f:
        f.write(new_ts_content)
    print("Updated grammarList.ts successfully.")
