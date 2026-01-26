import re
import os

files_to_check = [
    'src/data/details/n5.ts',
    'src/data/questions/n5.ts'
]

# Keys to check for Kanji without Furigana
target_keys = ['japanese', 'sentence', 'prob']

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
            # Check if line contains one of the target keys
            # Simple string check first
            key_match = None
            content_start = -1
            
            for key in target_keys:
                # Look for "key: '...'" or "key: `...`"
                # Regex to capture the content inside quotes
                # Handle single quotes and backticks
                pattern = f"{key}:\\s*['`\"](.*?)['`\"]"
                match = re.search(pattern, line)
                if match:
                    content = match.group(1)
                    
                    # Remove valid Kanji{Reading} blocks
                    cleaned_content = re.sub(r'[一-龯々]+{[^}]+}', '', content)
                    
                    # Search for any remaining Kanji
                    if re.search(r'[一-龯々]', cleaned_content):
                        print(f"Line {i+1} ({key}): Found unannotated Kanji")
                        print(f"  Content: {content}")
                        print(f"  Cleaned: {cleaned_content}")
                        file_issues += 1
                        total_issues += 1
                    
        print(f"Found {file_issues} issues in {file_path}\n")

    print(f"Total issues found: {total_issues}")
    
    # Also write to file
    with open('audit_report_utf8.txt', 'w', encoding='utf-8') as f:
        f.write(f"Total issues found: {total_issues}\n")
        f.write("See stdout for details (re-run if needed) or I can modify checking loop to write here.")

if __name__ == "__main__":
    audit_files()
