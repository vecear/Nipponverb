import re

def list_n2_verbs(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    ids = re.findall(r"id:\s*'n2_v\d+_(\w+)_\d+'", content)
    unique_verbs = sorted(list(set(ids)))
    for v in unique_verbs:
        print(v)

if __name__ == "__main__":
    list_n2_verbs(r'c:\Users\vecea\Desktop\Code\Nipponverb\src\data\questions\n2.ts')
