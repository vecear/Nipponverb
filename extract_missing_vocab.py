import re
from collections import Counter

def extract_missing():
    with open('audit_report_utf8.txt', 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Regex to capture "Content: ..." lines
    # Then extract Kanji words not followed by {
    
    words = []
    
    # Iterate lines
    for line in content.split('\n'):
        if line.strip().startswith("Content:"):
            text = line.replace("Content:", "").strip()
            
            # Find Kanji blocks
            # Pattern: ([一-龯]+)(?!\{) 
            # Note: This is simplified. "一昨日" -> "一昨日"
            matches = re.finditer(r'([一-龯々]+)(?!\{)', text)
            for m in matches:
                words.append(m.group(1))
                
    # Count
    counter = Counter(words)
    
    print("\nTop 50 Missing Furigana Words:")
    for word, count in counter.most_common(50):
        print(f"{word}: {count}")

if __name__ == "__main__":
    extract_missing()
