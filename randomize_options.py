import re
import random
import os

def randomize_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find each question block
    # This assumes questions start with { and end with } and contain an options array and correctIndex
    # We use a non-greedy match for the contents.
    pattern = re.compile(r'(\s+\{\s+id:\s+[\'"].*?[\'"],.*?options:\s+\[)(.*?)(\],\s+correctIndex:\s+)(\d+)(,.*?tag:\s+[\'"].*?[\'"].*?\})', re.DOTALL)

    def shuffle_options(match):
        prefix = match.group(1)
        options_blob = match.group(2)
        middle = match.group(3)
        old_idx = int(match.group(4))
        suffix = match.group(5)

        # Parse options
        # Options are like { text: '...', reason: '...' },
        option_pattern = re.compile(r'(\s*\{\s*text:\s*[\'"].*?[\'"],\s*reason:\s*[\'"].*?[\'"]\s*\})', re.DOTALL)
        options = option_pattern.findall(options_blob)
        
        if not options:
            return match.group(0) # Should not happen

        # Guard against index out of range (though unlikely)
        if old_idx >= len(options):
            return match.group(0)

        correct_option = options[old_idx]
        
        # Shuffle
        random.shuffle(options)
        
        # Find new index
        new_idx = options.index(correct_option)
        
        # Join options back
        new_options_blob = ",".join(options)
        
        return f"{prefix}{new_options_blob}{middle}{new_idx}{suffix}"

    new_content = pattern.sub(shuffle_options, content)

    # Note: Regex above might be slightly fragile if formatting varies too much.
    # Let's try a safer approach if the above doesn't match well.
    # Actually, the TS files I saw use a very consistent format.

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Randomized {filepath}")

if __name__ == "__main__":
    files = [
        "src/data/questions/n5.ts",
        "src/data/questions/n4.ts",
        "src/data/questions/n3.ts",
        "src/data/questions/n2.ts",
        "src/data/questions/n1.ts"
    ]
    for f in files:
        if os.path.exists(f):
            randomize_file(f)
        else:
            print(f"File not found: {f}")
