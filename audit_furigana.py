import re
import os

files_to_check = [
    'src/data/details/n5.ts',
    'src/data/questions/n5.ts'
]

# Regex to find Kanji (Unicode range 4E00-9FBF and 3005 for 々)
# We want to find Kanji that are NOT followed by {
# But we need to be careful.
# If we have "紅茶{こうちゃ}", "紅" is followed by "茶", not "{".
# So we simply look for any Kanji character.
# Check if it falls within a "Kanji...{" pattern?
# Better approach:
# 1. Remove all valid "Kanji...{...}" blocks.
# 2. Look for any remaining Kanji.

def audit_files():
    total_issues = 0
    
    for file_path in files_to_check:
        if not os.path.exists(file_path):
            print(f"File not found: {file_path}")
            continue
            
        print(f"Checking {file_path}...")
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            
        file_issues = 0
        for i, line in enumerate(lines):
            # Skip comments (simple check)
            if line.strip().startswith('//'):
                continue
                
            original_line = line
            
            # Remove valid Kanji{Reading} blocks
            # Pattern: [Kanji]+{...}
            # Kanji range: \u4e00-\u9faf and \u3005 (々)
            # We replace them with placeholders or empty strings
            cleaned_line = re.sub(r'[一-龯々]+{[^}]+}', '', line)
            
            # Now search for any remaining Kanji
            match = re.search(r'[一-龯々]', cleaned_line)
            if match:
                # Found a Kanji that wasn't part of a valid block
                # However, we need to check if it's in a comment at the end of line?
                # Simplify: Strip // comments from line first?
                line_no_comment = re.sub(r'//.*', '', cleaned_line)
                
                if re.search(r'[一-龯々]', line_no_comment):
                    print(f"Line {i+1}: Found unannotated Kanji")
                    print(f"  Original: {original_line.strip()}")
                    print(f"  Cleaned:  {line_no_comment.strip()}")
                    file_issues += 1
                    total_issues += 1
                    
        print(f"Found {file_issues} issues in {file_path}\n")

    print(f"Total issues found: {total_issues}")

if __name__ == "__main__":
    audit_files()
