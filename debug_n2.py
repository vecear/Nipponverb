import os, re

KANA_ROMAN = {
    'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
    'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
    'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
    'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
    'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
    'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
    'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
    'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
    'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
    'わ': 'wa', 'を': 'o', 'ん': 'n',
    'が': 'ga', 'ぎ': 'gi', 'ぐ': 'gu', 'げ': 'ge', 'ご': 'go',
    'ざ': 'za', 'じ': 'ji', 'ず': 'zu', 'ぜ': 'ze', 'ぞ': 'zo',
    'だ': 'da', 'ぢ': 'ji', 'づ': 'zu', 'で': 'de', 'ど': 'do',
    'ば': 'ba', 'び': 'bi', 'ぶ': 'bu', 'べ': 'be', 'ぼ': 'bo',
    'ぱ': 'pa', 'ぴ': 'pi', 'ぷ': 'pu', 'ぺ': 'pe', 'ぽ': 'po',
    'きゃ': 'kya', 'きゅ': 'kyu', 'きょ': 'kyo',
    'しゃ': 'sha', 'しゅ': 'shu', 'しょ': 'sho',
    'ちゃ': 'cha', 'ちゅ': 'chu', 'ちょ': 'cho',
    'にゃ': 'nya', 'にゅ': 'nyu', 'にょ': 'nyo',
    'ひゃ': 'hya', 'ひゅ': 'hyu', 'ひょ': 'hyo',
    'みゃ': 'mya', 'みゅ': 'myu', 'みょ': 'myo',
    'りゃ': 'rya', 'りゅ': 'ryu', 'りょ': 'ryo',
    'ぎゃ': 'gya', 'ぎゅ': 'gyu', 'ぎょ': 'gyo',
    'じゃ': 'ja', 'じゅ': 'ju', 'じょ': 'jo',
    'びゃ': 'bya', 'びゅ': 'byu', 'びょ': 'byo',
    'ぴゃ': 'pya', 'ぴゅ': 'pyu', 'ぴょ': 'pyo'
}

def to_romaji(kana):
    res = ""
    i = 0
    while i < len(kana):
        if i + 1 < len(kana) and kana[i:i+2] in KANA_ROMAN:
            res += KANA_ROMAN[kana[i:i+2]]
            i += 2
        elif kana[i] == 'っ':
            i += 1
            if i < len(kana):
                n_r = to_romaji(kana[i])
                if n_r: res += n_r[0]
        elif kana[i] in KANA_ROMAN:
            res += KANA_ROMAN[kana[i]]
            i += 1
        else:
            res += kana[i]
            i += 1
    return res

def get_verbs():
    verbs_path = r'c:\Users\vecea\Desktop\Code\Nipponverb\src\data\verbs_imported.ts'
    with open(verbs_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Use finditer to keep objects together
    verbs = []
    # This regex is a bit loose but should capture dictionary and level
    pattern = r'\{[^{}]*"dictionary":\s*"([^"]+)"[^{}]*"reading":\s*"([^"]+)"[^{}]*"level":\s*"([^"]+)"[^{}]*\}'
    for m in re.finditer(pattern, content, re.DOTALL):
        d = m.group(1).replace('\\', '')
        r = m.group(2)
        l = m.group(3)
        verbs.append({'dictionary': d, 'reading': r, 'romaji': to_romaji(r), 'level': l})
    return verbs

def strip_furigana(text):
    return re.sub(r'\{[^}]+\}', '', text)

def main():
    verbs = get_verbs()
    path = r'c:\Users\vecea\Desktop\Code\Nipponverb\src\data\questions\n2.ts'
    with open(path, 'r', encoding='utf-8') as file:
        raw = file.read()
    
    ids = set(re.findall(r"id:\s*['\"]([^'\"]+)['\"]", raw))
    stripped = strip_furigana(raw)
    
    n2_verbs = [v for v in verbs if v['level'] == 'N2']
    found = []
    for v in n2_verbs:
        id_slug = f"v1399_{v['romaji']}"
        is_found = False
        for q_id in ids:
            if id_slug in q_id:
                is_found = True
                break
        if not is_found and v['dictionary'] in stripped:
            is_found = True
        
        if is_found:
            found.append(v)

    print(f"Total N2 verbs in DB: {len(n2_verbs)}")
    print(f"Found N2 verbs: {len(found)}")
    
    # Check Batch 15 verbs specifically
    batch_15 = ["教わる", "驚かす", "帰す", "代える", "掻く", "重ねる", "片付く", "固まる", "片寄る", "枯れる", "かわいがる", "乾かす", "渇く", "代わる", "感ずる", "着せる", "斬る", "気を付ける", "区切る", "崩れる"]
    missing_from_batch = [b for b in batch_15 if b not in [f['dictionary'] for f in found]]
    print(f"Missing from Batch 15: {missing_from_batch}")

if __name__ == "__main__":
    main()
