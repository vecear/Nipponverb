
import sys

filename = 'dictionary_extraction/20231101.mdx.txt'

try:
    with open('entry_taberu.html', 'w', encoding='utf-8') as out:
        with open(filename, 'r', encoding='utf-8') as f:
            target_prefixes = ['たべる【', 'みる【', 'いく【', 'はなす【']
            printing = False
            
            for line in f:
                line = line.strip()
                match = False
                for p in target_prefixes:
                    if line.startswith(p):
                        match = True
                        break
                
                if match:
                    printing = True
                    out.write(f"\n<!-- KEY: {line} -->\n")
                    continue
                
                if printing:
                    if line == '</>':
                        printing = False 
                        continue
                    out.write(line + "\n")
except Exception as e:
    print(f"Error: {e}")
