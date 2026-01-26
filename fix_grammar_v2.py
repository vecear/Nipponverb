
import re

n5_path = r'c:\Users\vecea\Desktop\Code\Nipponverb\src\data\details\n5.ts'

with open(n5_path, 'r', encoding='utf-8') as f:
    content = f.read()

# We look for the patterns we inserted.
# They look like:
# ,\n                    { japanese: '

signature = ",\n                    { japanese: '"

# We want to find this signature.
# And ensure that before it, there is a `]`.
# if so, we verify it's the `]` we want to remove.
# We will use regex to find the indices.

matches = list(re.finditer(re.escape(signature), content))

print(f"Found {len(matches)} insertions.")

# We process in reverse order to avoid shifting indices.
changes_made = 0
new_content = list(content)

for match in reversed(matches):
    start_idx = match.start()
    
    # scan backwards from start_idx to find the first non-whitespace char
    curr = start_idx - 1
    while curr >= 0 and content[curr].isspace():
        curr -= 1
        
    if curr >= 0 and content[curr] == ']':
        # Found the bracket!
        print(f"Removing bracket at index {curr}")
        # Replace matches with space to preserve length if we were doing in-place, 
        # but here we are modifying a list characters, so we just nullify it?
        # Better: construct string slices.
        
        # We want to keep the content but remove the `]`.
        new_content[curr] = ' ' # Replace with space to be safe
        changes_made += 1

if changes_made > 0:
    content = "".join(new_content)
    with open(n5_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Fixed {changes_made} errors.")
else:
    print("No errors found or could not locate brackets.")
