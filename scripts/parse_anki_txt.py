import re
import sys

# Read first 1000 lines only
print("Reading first 1000 lines...")
with open('egg/eggrolls-JLPT10k-v3.txt', 'r', encoding='utf-8', errors='ignore') as f:
    lines = []
    for i, line in enumerate(f):
        if i >= 1000:
            break
        lines.append(line)

print(f"Read {len(lines)} lines")

# Skip header
data_lines = [l for l in lines if not l.startswith('#')]
print(f"Data lines: {len(data_lines)}")

# Check structure
print("\n=== Analyzing structure ===")
for i, line in enumerate(data_lines[:5]):
    parts = line.strip().split('\t')
    print(f"\nLine {i+1}: {len(parts)} fields")
    
    # Try to extract Japanese word
    # Look for patterns like <span class="Word">単語</span>
    word_match = re.search(r'class="Word">([^<]+)<', line)
    if word_match:
        print(f"  Word: {word_match.group(1)}")
    
    # Look for meanings
    meaning_match = re.search(r'class="Meaning">([^<]+)<', line)
    if meaning_match:
        print(f"  Meaning: {meaning_match.group(1)}")
    
    # Look for examples
    example_match = re.search(r'class="Example">([^<]+)<', line)
    if example_match:
        print(f"  Example: {example_match.group(1)[:100]}")
