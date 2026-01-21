
import re

DICT_FILE = 'dictionary_extraction/20231101.mdx.txt'
TARGET_KEY = 'たべる【食べる】'

def find_entry():
    with open(DICT_FILE, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    for i, line in enumerate(lines):
        if line.strip() == TARGET_KEY:
            print(f"Found at line {i+1}")
            # Print next 20 lines
            for j in range(i, i+20):
                if j < len(lines):
                    print(lines[j].strip())
            return

if __name__ == "__main__":
    find_entry()
