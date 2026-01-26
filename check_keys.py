
import re

n5_path = r'c:\Users\vecea\Desktop\Code\Nipponverb\src\data\details\n5.ts'

with open(n5_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Regex to find keys in n5Details
# keys are like:     n5_ka: {
keys = re.findall(r'^\s*(n5_[a-zA-Z0-9_]+):', content, re.MULTILINE)

print("Existing keys:")
for k in keys:
    print(k)
