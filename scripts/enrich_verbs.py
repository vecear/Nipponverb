
import re
import json
import os

from opencc import OpenCC

# Configuration
VERBS_FILE = 'src/data/verbs.ts'
DICT_FILE = 'dictionary_extraction/20231101.mdx.txt'
OUTPUT_FILE = 'src/data/verbs_updated.ts'

def load_verbs(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    return content

def parse_dictionary_entries(dict_path):
    print(f"Reading dictionary {dict_path}...")
    cc = OpenCC('s2t')
    entries = {}
    definitions = {}
    
    current_key = None
    current_stem = None
    current_examples = []
    
    with open(dict_path, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            
            is_key = False
            if line and not line.startswith('<') and not line.startswith('@@@') and line != '</>':
                is_key = True
            
            if is_key:
                if current_key and (current_examples or definitions.get(current_key)):
                    entries[current_key] = {
                        'examples': current_examples,
                        'definitions': definitions.get(current_key, [])
                    }
                
                current_key = line
                current_examples = []
                current_stem = None
                continue
            
            if line.startswith('<p class="head">'):
                m = re.search(r'〚(.*?)〛', line)
                if m:
                    content = m.group(1)
                    if '・' in content:
                        current_stem = content.split('・')[0]
                    else:
                        current_stem = content
            
            if line.startswith('<p class="exam">'):
                m_jp = re.search(r'<exjp>(.*?)</exjp>', line)
                m_zh = re.search(r'<exzh>(.*?)</exzh>', line)
                
                if m_jp and m_zh:
                    ja = m_jp.group(1)
                    zh = m_zh.group(1)
                    zh = cc.convert(zh)
                    
                    if current_stem:
                        ja = ja.replace('〜・', current_stem)
                        ja = ja.replace('〜', current_stem) 
                    
                    ja = ja.replace('・', '')
                    
                    current_examples.append({'ja': ja, 'zh': zh})
            
            if line.startswith('<p class="def') or line.startswith('<p class="def2"'):
                m_def = re.search(r'<dfzh>(.*?)</dfzh>', line)
                if m_def:
                    definition = m_def.group(1)
                    definition = cc.convert(definition)
                    # Check for number
                    m_num = re.search(r'<num>(.*?)</num>', line)
                    if m_num:
                        definition = f"{m_num.group(1)} {definition}"
                    
                    if current_key:
                        if current_key not in definitions:
                            definitions[current_key] = []
                        definitions[current_key].append(definition)

    if current_key and current_examples:
        entries[current_key] = {'examples': current_examples, 'definitions': definitions.get(current_key, [])}
        
    print(f"Parsed {len(entries)} entries.")
    return entries

def enrich_verbs():
    content = load_verbs(VERBS_FILE)
    if not content:
        return

    dict_data = parse_dictionary_entries(DICT_FILE)
    
    lines = content.split('\n')
    new_lines = []
    
    interface_updated = False
    
    for line in lines:
        if 'context?: VerbContext' in line and not interface_updated:
            new_lines.append(line)
            new_lines.append("    native_examples?: { ja: string, zh: string }[]")
            new_lines.append("    dictionary_definition?: string[]")
            interface_updated = True
            continue
            
        m = re.search(r"dictionary:\s*'([^']+)',\s*reading:\s*'([^']+)'", line)
        if m:
            dictionary = m.group(1)
            reading = m.group(2)
            
            key1 = f"{reading}【{dictionary}】"
            key2 = reading
            
            data = dict_data.get(key1) or dict_data.get(key2)
            
            if data:
                # Add examples
                examples = data['examples'][:2]
                ex_json = []
                for ex in examples:
                     safe_ja = ex['ja'].replace("'", "\\'")
                     safe_zh = ex['zh'].replace("'", "\\'")
                     ex_json.append(f"{{ ja: '{safe_ja}', zh: '{safe_zh}' }}")
                
                ex_str = ""
                if ex_json:
                    ex_str = f" native_examples: [{', '.join(ex_json)}]"
                
                # Add definitions
                defs = data['definitions']
                def_str = ""
                if defs:
                    # Escape quotes in definitions
                    safe_defs = [d.replace("'", "\\'") for d in defs]
                    def_str = f" dictionary_definition: ['{'\', \''.join(safe_defs)}']"

                # Remove existing fields if present to avoid duplication
                line = re.sub(r',\s*native_examples:\s*\[.*?\]', '', line)
                line = re.sub(r',\s*dictionary_definition:\s*\[.*?\]', '', line)
                
                # Append fields
                fields_to_add = []
                if ex_str: fields_to_add.append(ex_str.strip())
                if def_str: fields_to_add.append(def_str.strip())
                
                if fields_to_add:
                    combined = ", ".join(fields_to_add)
                    r_idx = line.rfind('}')
                    if r_idx != -1:
                        line = line[:r_idx] + ', ' + combined + line[r_idx:]
        
        new_lines.append(line)

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write('\n'.join(new_lines))
    
    print("Verbs updated.")

if __name__ == "__main__":
    enrich_verbs()
