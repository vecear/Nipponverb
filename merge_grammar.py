
import json
import re
import os

n5_path = r'c:\Users\vecea\Desktop\Code\Nipponverb\src\data\details\n5.ts'
new_content_path = r'c:\Users\vecea\Desktop\Code\Nipponverb\n5_pdf_content.json'

with open(n5_path, 'r', encoding='utf-8') as f:
    n5_content = f.read()

with open(new_content_path, 'r', encoding='utf-8') as f:
    new_data = json.load(f)

# Helper to normalize strings for matching
def normalize(s):
    return re.sub(r'[\s・\/\(\)]', '', s).lower()

# Find existing patterns in n5.ts
# We look for: pattern: '...'
# This is a bit fragile but works if format is consistent
pattern_regex = re.compile(r"pattern:\s*'([^']+)'")

# Identify keys/IDs for each pattern in the file (approximate location)
# Actually, we can just iterate the new data and try to find where to insert.
# But we need to find the specific ENTRY for that grammar.

for item in new_data:
    grammar = item['grammar']
    norm_grammar = normalize(grammar)
    
    # Try to find the grammar point in the file
    # We look for a line like "pattern: '...'" that matches our grammar
    
    match_found = False
    
    # Iterate through all pattern matches in the file
    for match in pattern_regex.finditer(n5_content):
        file_pattern = match.group(1)
        norm_file_pattern = normalize(file_pattern)
        
        if norm_grammar in norm_file_pattern or norm_file_pattern in norm_grammar:
            # Found a match!
            print(f"Matched '{grammar}' ~ '{file_pattern}'")
            match_found = True
            
            # Now we need to insert the examples.
            # We want to find the LAST example for this grammar point and append after it.
            # OR finding the "explanation: [" block and the LAST "examples: [" block inside it.
            
            # This is complex with regex. A simpler approach is to find the START of this grammar point definition,
            # then find the closing brace of its 'examples' array?
            
            # Let's locate the 'examples: [' that follows this pattern match.
            # We assume the structure:
            # pattern: '...'
            # ...
            # examples: [
            
            remaining_content = n5_content[match.end():]
            examples_start = remaining_content.find('examples: [')
            
            if examples_start != -1:
                abs_examples_start = match.end() + examples_start
                # Find the closing bracket ']' corresponding to this examples array
                # We can search for the first ']' after examples_start? No, arrays might be nested or contain strings with ]
                # But examples usually contain objects { japanese: ..., chinese: ... }
                
                # Let's verify if there is an examples block nearby (within 500 chars)
                if examples_start < 1000:
                    # Look for the closing ']' of this examples array
                    # We can iterate until we find ']' that balances.
                    # Or just search for the next ']' followed by whitespace/newline/comma/brace
                    
                    # Assuming simple structure without nested arrays in examples objects
                    closing_bracket_offset = remaining_content[examples_start:].find(']')
                    
                    if closing_bracket_offset != -1:
                        insertion_point = match.end() + examples_start + closing_bracket_offset
                        
                        # Prepare strings to insert
                        to_insert = ""
                        for ex in item['examples']:
                            jp = ex['japanese']
                            cn = ex['chinese']
                            # Check if this example already exists
                            if jp not in n5_content:
                                to_insert += f",\n                    {{ japanese: '{jp}', chinese: '{cn}' }}"
                        
                        if to_insert:
                            # Insert before the closing bracket
                            n5_content = n5_content[:insertion_point] + to_insert + n5_content[insertion_point:]
                            print(f"  -> Added {len(item['examples'])} examples")
                        else:
                            print("  -> No new unique examples to add")
            
            break # Stop after first match for this grammar point
    
    if not match_found:
        print(f"Warning: Could not find match for '{grammar}'")

with open(n5_path, 'w', encoding='utf-8') as f:
    f.write(n5_content)

print("Finished merging.")
