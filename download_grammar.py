
import os
import requests
import time

# Define pages count based on website info
pages_map = {
    'n5': 3,
    'n4': 4,
    'n3': 5,
    'n2': 5,
    'n1': 7,
}

output_dir = 'temp_grammar'
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

for level, count in pages_map.items():
    print(f"Downloading {level.upper()} ({count} pages)...")
    for page in range(1, count + 1):
        if page == 1:
            url = f'https://jlptsensei.com/jlpt-{level}-grammar-list/'
        else:
            url = f'https://jlptsensei.com/jlpt-{level}-grammar-list/page/{page}/'
        
        filename = f'{output_dir}/{level}_{page}.html'
        
        try:
            print(f"  Fetching page {page}...", end='\r')
            response = requests.get(url, headers=headers)
            response.raise_for_status()
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(response.text)
            time.sleep(1) # Be polite
        except Exception as e:
            print(f"\n  Failed to download {level} page {page}: {e}")
    print(f"\nCompleted {level.upper()}")
