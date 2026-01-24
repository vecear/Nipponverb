
import re

html_path = 'temp_grammar/n5_1.html'
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

print(f"File size: {len(content)}")
rows = content.split('<tr class=jl-row>')
print(f"Split count: {len(rows)}")

if len(rows) > 1:
    row = rows[1]
    print(f"Sample Row: {row[:200]}...")
    
    # Test regexes
    romaji_match = re.search(r'<td class="jl-td-gr.*?<a.*?>(.*?)</a>', row, re.DOTALL)
    print(f"Romaji match: {romaji_match.group(1) if romaji_match else 'None'}")
    
    grammar_match = re.search(r'<td class="jl-td-gj.*?<a.*?>(.*?)</a>', row, re.DOTALL)
    print(f"Grammar match: {grammar_match.group(1) if grammar_match else 'None'}")
    
    meaning_match = re.search(r'<td class="jl-td-gm.*?>(.*?)</td>', row, re.DOTALL)
    print(f"Meaning match: {meaning_match.group(1) if meaning_match else 'None'}")
