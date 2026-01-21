#!/usr/bin/env python3
"""
Script to fill in missing meaning_zh values in verbs_imported.ts
by looking up definitions in the Japanese-Chinese dictionary.
Also converts all Chinese text to Traditional Chinese.
"""

import re
import json
import os

try:
    from opencc import OpenCC
    cc = OpenCC('s2t')  # Simplified to Traditional Chinese
    print("Using OpenCC for Simplified to Traditional Chinese conversion.")
except ImportError:
    print("Warning: opencc not installed. Using passthrough for Chinese conversion.")
    class DummyCC:
        def convert(self, text):
            return text
    cc = DummyCC()

# Configuration
VERBS_FILE = 'src/data/verbs_imported.ts'
DICT_FILE = 'dictionary_extraction/20231101.mdx.txt'
OUTPUT_FILE = 'src/data/verbs_imported.ts'  # Overwrite in place


def parse_dictionary(dict_path):
    """Parse dictionary and build a lookup table."""
    print(f"Reading dictionary from {dict_path}...")

    entries = {}
    links = {}  # Map from short key to full key
    reading_to_keys = {}  # Map from reading to list of full keys

    current_key = None
    current_definitions = []
    current_examples = []
    current_stem = None

    with open(dict_path, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()

            # Track link entries for later resolution
            if line.startswith('@@@LINK='):
                target = line[8:]  # Remove @@@LINK=
                if current_key:
                    links[current_key] = target
                continue

            # Check if this is a new entry key (not HTML, not delimiter)
            if line and not line.startswith('<') and line != '</>':
                # Save previous entry
                if current_key and (current_definitions or current_examples):
                    entries[current_key] = {
                        'definitions': current_definitions.copy(),
                        'examples': current_examples.copy()
                    }

                    # Also index by reading (part before 【)
                    match = re.match(r'^([^【]+)', current_key)
                    if match:
                        reading = match.group(1)
                        if reading not in reading_to_keys:
                            reading_to_keys[reading] = []
                        reading_to_keys[reading].append(current_key)

                current_key = line
                current_definitions = []
                current_examples = []
                current_stem = None
                continue

            # Parse stem from head tag
            if '<p class="head">' in line:
                m = re.search(r'〚(.*?)〛', line)
                if m:
                    content = m.group(1)
                    if '・' in content:
                        current_stem = content.split('・')[0]
                    else:
                        current_stem = content

            # Parse definitions
            if '<dfzh>' in line:
                m = re.search(r'<dfzh>(.*?)</dfzh>', line)
                if m:
                    definition = m.group(1)
                    definition = cc.convert(definition)
                    current_definitions.append(definition)

            # Parse examples
            if '<exjp>' in line and '<exzh>' in line:
                m_jp = re.search(r'<exjp>(.*?)</exjp>', line)
                m_zh = re.search(r'<exzh>(.*?)</exzh>', line)

                if m_jp and m_zh:
                    ja = m_jp.group(1)
                    zh = m_zh.group(1)
                    zh = cc.convert(zh)

                    if current_stem:
                        ja = ja.replace('〜・', current_stem)
                        ja = ja.replace('〜', current_stem)

                    ja = ja.replace('・', '')
                    current_examples.append({'ja': ja, 'zh': zh})

        # Save last entry
        if current_key and (current_definitions or current_examples):
            entries[current_key] = {
                'definitions': current_definitions.copy(),
                'examples': current_examples.copy()
            }

            match = re.match(r'^([^【]+)', current_key)
            if match:
                reading = match.group(1)
                if reading not in reading_to_keys:
                    reading_to_keys[reading] = []
                reading_to_keys[reading].append(current_key)

    print(f"Parsed {len(entries)} dictionary entries.")
    print(f"Created {len(reading_to_keys)} reading-to-key mappings.")
    print(f"Found {len(links)} link entries.")

    return entries, links, reading_to_keys


def extract_short_meaning(definitions):
    """Extract a short meaning from the definitions list."""
    if not definitions:
        return None

    # Get first definition and clean it up
    first_def = definitions[0]

    # Split by common delimiters and take first few items
    parts = re.split(r'[。；;]', first_def)
    short_parts = []

    for part in parts:
        part = part.strip()
        if not part:
            continue

        # Further split by Chinese punctuation
        sub_parts = re.split(r'[，,、]', part)
        for sp in sub_parts[:3]:  # Take up to 3 meanings
            sp = sp.strip()
            if sp and len(sp) < 10:  # Keep it short
                short_parts.append(sp)

        if len(short_parts) >= 3:
            break

    if short_parts:
        return '。'.join(short_parts[:3])

    # Fallback: just return first 20 chars
    return first_def[:20] if len(first_def) > 20 else first_def


def load_verbs_json(filepath):
    """Load verbs from TypeScript file and parse as JSON."""
    print(f"Reading verbs from {filepath}...")

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract the array part (handle both typed and untyped exports)
    # First, find where the array starts
    start_match = re.search(r'export const importedVerbs(?:: Verb\[\])?\s*=\s*\[', content)
    if not start_match:
        print("Error: Could not find importedVerbs array start.")
        return None, content

    # Find the matching closing bracket by counting brackets
    start_pos = start_match.end() - 1  # Position of opening [
    bracket_count = 0
    end_pos = start_pos

    for i, char in enumerate(content[start_pos:]):
        if char == '[':
            bracket_count += 1
        elif char == ']':
            bracket_count -= 1
            if bracket_count == 0:
                end_pos = start_pos + i + 1
                break

    json_str = content[start_pos:end_pos]

    if not json_str:
        print("Error: Could not extract importedVerbs array.")
        return None, content

    # Parse JSON
    try:
        verbs = json.loads(json_str)
        return verbs, content
    except json.JSONDecodeError as e:
        print(f"Error parsing JSON: {e}")
        return None, content


def save_verbs(filepath, verbs):
    """Save verbs back to TypeScript file."""
    print(f"Saving verbs to {filepath}...")

    # Create TypeScript content
    # Use @ts-nocheck to avoid TS2590 error with large arrays
    content = "// @ts-nocheck\n"
    content += "import { Verb } from './verbs';\n\n"
    content += "export const importedVerbs: Verb[] = "
    content += json.dumps(verbs, ensure_ascii=False, indent=2)
    content += ";\n"

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)


def convert_to_traditional(text):
    """Convert text to Traditional Chinese."""
    if text:
        return cc.convert(text)
    return text


def lookup_verb(dictionary, reading, entries, links, reading_to_keys):
    """Look up a verb in the dictionary with multiple strategies."""

    # Generate variant readings (ずる → じる)
    readings_to_try = [reading]
    if reading.endswith('ずる'):
        readings_to_try.append(reading[:-2] + 'じる')
    if reading.endswith('する'):
        # Also try without する for compound verbs
        readings_to_try.append(reading[:-2])

    for r in readings_to_try:
        # Strategy 1: Exact match with reading【dictionary】
        key1 = f"{r}【{dictionary}】"
        if key1 in entries:
            return entries[key1]

        # Strategy 2: Follow link if exists
        if key1 in links:
            target = links[key1]
            if target in entries:
                return entries[target]

        # Strategy 3: Look up by reading only, pick first matching entry
        if r in reading_to_keys:
            for key in reading_to_keys[r]:
                if key in entries and entries[key].get('definitions'):
                    return entries[key]

        # Strategy 4: Check if reading itself is a link
        if r in links:
            target = links[r]
            if target in entries:
                return entries[target]

    # Strategy 5: Direct dictionary form lookup
    if dictionary in entries:
        return entries[dictionary]

    # Strategy 6: Dictionary as link
    if dictionary in links:
        target = links[dictionary]
        if target in entries:
            return entries[target]

    # Strategy 7: Try with variant kanji (ずる → じる in kanji too)
    if dictionary.endswith('ずる'):
        alt_dict = dictionary[:-2] + 'じる'
        for r in readings_to_try:
            key = f"{r}【{alt_dict}】"
            if key in entries:
                return entries[key]
            if key in links and links[key] in entries:
                return entries[links[key]]

    return None


def main():
    # Parse dictionary
    entries, links, reading_to_keys = parse_dictionary(DICT_FILE)

    # Load verbs
    verbs, _ = load_verbs_json(VERBS_FILE)
    if verbs is None:
        return

    print(f"Loaded {len(verbs)} verbs.")

    # Track stats
    updated_meaning_zh = 0
    updated_examples = 0
    updated_definitions = 0
    converted_to_traditional = 0
    verbs_found_in_dict = 0

    # Update each verb
    for verb in verbs:
        dictionary = verb.get('dictionary', '')
        reading = verb.get('reading', '')
        meaning_zh = verb.get('meaning_zh', '')

        # Convert existing meaning_zh to Traditional Chinese
        if meaning_zh:
            new_meaning_zh = convert_to_traditional(meaning_zh)
            if new_meaning_zh != meaning_zh:
                verb['meaning_zh'] = new_meaning_zh
                converted_to_traditional += 1

        # Look up every verb in dictionary (not just those missing data)
        entry = lookup_verb(dictionary, reading, entries, links, reading_to_keys)

        if entry:
            verbs_found_in_dict += 1
            definitions = entry.get('definitions', [])
            examples = entry.get('examples', [])

            # Update meaning_zh if empty
            if not verb.get('meaning_zh') and definitions:
                short_meaning = extract_short_meaning(definitions)
                if short_meaning:
                    verb['meaning_zh'] = short_meaning
                    updated_meaning_zh += 1

            # Always update native_examples from dictionary (overwrite if exists)
            if examples:
                verb['native_examples'] = examples[:3]  # Take up to 3 examples
                updated_examples += 1

            # Always update dictionary_definition from dictionary (overwrite if exists)
            if definitions:
                verb['dictionary_definition'] = definitions[:6]  # Take up to 6 definitions
                updated_definitions += 1

    # Save updated verbs
    save_verbs(OUTPUT_FILE, verbs)

    print(f"\nUpdate summary:")
    print(f"  - Verbs found in dictionary: {verbs_found_in_dict}")
    print(f"  - Converted to Traditional: {converted_to_traditional}")
    print(f"  - Updated meaning_zh: {updated_meaning_zh}")
    print(f"  - Updated native_examples: {updated_examples}")
    print(f"  - Updated dictionary_definition: {updated_definitions}")
    print(f"\nDone!")


if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    main()
