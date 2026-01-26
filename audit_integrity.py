import re
import os

files_to_check = [
    'src/data/details/n5.ts',
    # 'src/data/details/n4.ts' # Uncomment when ready or check existence
]

if os.path.exists('src/data/details/n4.ts'):
    files_to_check.append('src/data/details/n4.ts')

def audit_integrity():
    total_errors = 0
    
    for file_path in files_to_check:
        print(f"Checking {file_path} for structural integrity...")

    
    with open('audit_results_utf8.txt', 'w', encoding='utf-8') as f:
        f.write(f"Total structural errors found: {total_errors}\n")
        # Rerun check to write to file (efficient enough)
        for file_path in files_to_check:
            with open(file_path, 'r', encoding='utf-8') as src:
                lines = src.readlines()
            for i, line in enumerate(lines):
                 # Broaden regex to capture ID better
                 if "id:" in line and ("n5_" in line or "n4_" in line):
                    match = re.search(r"id:\s*['`\"](.*?)['`\"]", line)
                    if match:
                        current_id = match.group(1)
                        
                        # Scan context to classify object type
                        context_lines = lines[i:min(i+30, len(lines))]
                        context_str = "".join(context_lines)
                        
                        # Is it a Grammar Point?
                        if "level:" in context_str or "pattern:" in context_str:
                            continue # Skip grammar points
                            
                        # Is it an Explanation?
                        if "usageId:" in context_str or "japanese:" in context_str:
                            # Note: Questions also have 'japanese' in examples sometimes? 
                            # But questions usually don't have usageId.
                            # Also questions have 'sentence'. 
                            # If it has sentence, it's a question.
                            if "sentence:" not in context_str:
                                continue # Likely explanation or example
                        
                        # If we are here, it MIGHT be a question.
                        # It MUST have 'sentence' if it is a question.
                        # If it has 'correctIndex', it definitely is a question.
                        
                        is_question = "correctIndex:" in context_str or "sentence:" in context_str
                        
                        # If it looks like a question (has sentence OR correctIndex), check strictly.
                        # If it has NEITHER, but has an ID like "..._1", warn?
                        
                        # Heuristic: IDs ending in _\d+ are likely questions.
                        if re.search(r"_\d+$", current_id):
                            is_question = True
                            
                        if is_question:
                            found_keys = set()
                            for subline in context_lines:
                                if "sentence:" in subline: found_keys.add("sentence")
                                if "options:" in subline: found_keys.add("options")
                                if "correctIndex:" in subline: found_keys.add("correctIndex")
                                if "explanation:" in subline: found_keys.add("explanation")
                                if "}," in subline: # End of object
                                    break
                            
                            missing = []
                            if "sentence" not in found_keys: missing.append("sentence")
                            if "options" not in found_keys: missing.append("options")
                            # correctIndex is sometimes optional? No, usually required.
                            if "correctIndex" not in found_keys: missing.append("correctIndex")
                            if "explanation" not in found_keys: missing.append("explanation")
                            
                            if missing:
                                msg = f"  [ERROR] {current_id} (line {i+1}) is missing: {', '.join(missing)}\n"
                                f.write(msg)
                                total_errors += 1

if __name__ == "__main__":
    audit_integrity()


