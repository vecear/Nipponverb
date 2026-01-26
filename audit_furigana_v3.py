import re
import os

files_to_check = [
    'src/data/details/n5.ts',
    'src/data/questions/n5.ts',

    'src/data/details/n4.ts',
    'src/data/questions/n4.ts'



# Keys to check
target_keys = ['japanese', 'sentence', 'prob', 'text']

def audit_files():
    total_issues = 0
    report_file = 'audit_report_utf8.txt'
    
    with open(report_file, 'w', encoding='utf-8') as report:
        for file_path in files_to_check:
            if not os.path.exists(file_path):
                report.write(f"File not found: {file_path}\n")
                continue
                
            print(f"Checking {file_path}...")
            report.write(f"--- Checking {file_path} ---\n")
            
            with open(file_path, 'r', encoding='utf-8') as f:
                lines = f.readlines()
                
            file_issues = 0
            current_id = "Unknown"
            
            for i, line in enumerate(lines):
                # Track ID
                id_match = re.search(r"id:\s*['`\"](.*?)['`\"]", line)
                if id_match:
                    current_id = id_match.group(1)
                
                # Check target keys
                for key in target_keys:
                    pattern = f"{key}:\\s*['`\"](.*?)['`\"]"
                    match = re.search(pattern, line)
                    if match:
                        content = match.group(1)
                        
                        # Remove valid Kanji{Reading} blocks
                        cleaned_content = re.sub(r'[一-龯々]+{[^}]+}', '', content)
                        
                        # Search for remaining Kanji
                        if re.search(r'[一-龯々]', cleaned_content):
                            msg = f"Line {i+1} [ID: {current_id}] ({key}): Found unannotated Kanji\n  Content: {content}\n  Cleaned: {cleaned_content}\n"
                            # print(msg) # Too noisy for terminal
                            report.write(msg + "\n")
                            file_issues += 1
                            total_issues += 1
                        
            report.write(f"Found {file_issues} issues in {file_path}\n\n")
            print(f"Found {file_issues} issues in {file_path}")

        print(f"Total issues found: {total_issues}")
        report.write(f"Total issues found: {total_issues}\n")

if __name__ == "__main__":
    audit_files()
