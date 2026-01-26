
import re

n5_path = r'c:\Users\vecea\Desktop\Code\Nipponverb\src\data\details\n5.ts'

with open(n5_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern: ] followed by , then { japanese:
# We want to remove the ]
# We need to capture the indentation to keep it clean, maybe.
# regex: (\])\s*(,)\s*(\{ japanese:)
# We replace group 1 with empty string?
# But we need to ensure we keep the comma.

# Regex explanation:
# \]\s*, : matches ] followed by comma and whitespace (including newlines)
# (\s*\{ japanese:) : captures the following object start
# We want to replace "]\s*," with "," basically, but keep the whitespace structure or just simplify.
# Actually, the inserted text starts with ",\n { ...".
# So the file content is: " ... }] \n \s* , \n \s* { japanese: ..."
# We want to merge this.
# Result we want: " ... } , \n \s* { japanese: ..."

# So we match: \]\s*,\s*(\{ japanese:)
# And replace with: ,\n                    $1  (ignoring the group index for now)

# Let's try simple replacement first.
# Replace "]\s*,\s*{" with ", {" ?
# No, indentation matters for readability, but formatting can be fixed later.
# The previous lines end with "}\n                ]"
# My insertion starts with ",\n                    {"

# So we have: "\n                ]\n                    ,\n                    {"
# We want: "\n                ,\n                    {" (Wait, no, we want comma after previous item)
# Previous item ends with "}".
# So we want: "}\n                ,\n                    {"
# The "]" should be removed.

fixed_content = re.sub(r'\]\s*,\s*\{\s*japanese:', r', { japanese:', content)

# Check if it worked
if content == fixed_content:
    print("No changes made. Regex might be wrong.")
    # Debug: print snippet
    # find where "japanese:" occurs after "],"
    idx = content.find("],\n                    { japanese:")
    if idx != -1:
        print("Found pattern at", idx)
        print(content[idx-20:idx+50])
else:
    print("Fixed content.")

with open(n5_path, 'w', encoding='utf-8') as f:
    f.write(fixed_content)
