
import json
import re

input_file = r'c:\Users\vecea\Desktop\Code\Nipponverb\n5_docx_raw.txt'
output_json = r'c:\Users\vecea\Desktop\Code\Nipponverb\n5_docx_parsed.json'

with open(input_file, 'r', encoding='utf-8') as f:
    text = f.read()

# Split by "Learn Japanese grammar:" which seems to be a reliable header for each section
# Note: The first few pages are TOC, so we skip the beginning.
sections = re.split(r'(Learn Japanese grammar:.*)', text)

parsed_data = []

current_item = {}

# The split keeps the delimiter, so we process pairs (header, content)
# actually re.split with capturing group returns [pre-text, delimiter, post-text, delimiter, post-text...]
# So index 1, 3, 5... are the headers "Learn Japanese grammar: ..."
# index 2, 4, 6... are the content bodies.

for i in range(1, len(sections), 2):
    header = sections[i]
    body = sections[i+1]
    
    # Extract Title from header
    # Header format: "Learn Japanese grammar: ちゃいけない (cha ikenai) ... . Meaning: ..."
    # We want "ちゃいけない"
    
    # Simple regex for title
    title_match = re.search(r'Learn Japanese grammar:\s*(.*?)\s*\(', header)
    title = title_match.group(1).strip() if title_match else "Unknown"
    
    # Extract Meaning from header or start of body
    # Usually "Meaning: ... ."
    meaning_match = re.search(r'Meaning:\s*(.*?)(?:\.|$)', header.replace('\n', ' '))
    meaning = meaning_match.group(1).strip() if meaning_match else ""
    
    # Content parsing
    # 1. "How To Use" / "Connection"
    # The text immediately following the header usually describes usage or gives the table.
    # We look for "Example Sentences" to mark the end of the explanation/usage section.
    
    examples_start_idx = body.find("Example Sentences")
    if examples_start_idx == -1:
        # Try finding "Practice writing" if no examples
        examples_start_idx = body.find("Practice writing")
        
    if examples_start_idx != -1:
        usage_text_raw = body[:examples_start_idx].strip()
        examples_block = body[examples_start_idx:]
    else:
        usage_text_raw = body.strip()
        examples_block = ""
        
    # Clean up usage text
    # Remove large chunks of "MeaningHow To Use" or redundant table headers if present in raw text
    usage_lines = [line.strip() for line in usage_text_raw.split('\n') if line.strip()]
    usage_text_clean = "\n".join(usage_lines)
    
    # Parse Examples
    # Pattern: "1. Japanese sentence. romaji. English."
    # We can try to split by numbers like "1.", "2."
    # But note that the raw text has duplicates.
    
    examples = []
    # Split by pattern digit + dot (e.g. "1.")
    # valid for 1-99.
    ex_parts = re.split(r'\n(\d+\.)', examples_block)
    
    # ex_parts[0] is header "Example Sentences"
    # ex_parts[1] is "1.", ex_parts[2] is content, ex_parts[3] is "2.", ex_parts[4] is content...
    
    for k in range(1, len(ex_parts), 2):
        if k+1 >= len(ex_parts): break
        num = ex_parts[k] # "1."
        content_chunk = ex_parts[k+1]
        
        # The content chunk usually has Japanese line, Romaji line, English line.
        # Sometimes repeated.
        # Let's extract the Japanese line (first line usually) and English.
        lines = [l.strip() for l in content_chunk.split('\n') if l.strip()]
        
        if not lines: continue
        
        # Heuristic: First line is Japanese. Last line is English (or second to last).
        # Romaji is in between.
        
        japanese = lines[0]
        
        # Search for English line (contains English characters mostly)
        english = ""
        for l in reversed(lines):
            # Check if line has japanese chars
            has_jp = re.search(r'[\u3040-\u30ff\u4e00-\u9faf]', l)
            if not has_jp:
                english = l
                break
        
        # Deduplication check: sometimes extraction gets same sentence twice
        if examples and examples[-1]['japanese'] == japanese:
            continue
            
        examples.append({
            "japanese": japanese,
            "english": english
        })

    parsed_data.append({
        "grammar": title,
        "meaning_eng": meaning,
        "usage_eng": usage_text_clean,
        "examples": examples
    })

with open(output_json, 'w', encoding='utf-8') as f:
    json.dump(parsed_data, f, ensure_ascii=False, indent=4)

print(f"Parsed {len(parsed_data)} items.")
