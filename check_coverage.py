
import os
import re

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
    dicts = re.findall(r'"dictionary":\s*"([^"]+)"', content)
    readings = re.findall(r'"reading":\s*"([^"]+)"', content)
    levels = re.findall(r'"level":\s*"([^"]+)"', content)
    verbs = []
    for d, r, l in zip(dicts, readings, levels):
        verbs.append({'dictionary': d.replace('\\', ''), 'reading': r, 'romaji': to_romaji(r), 'level': l})
    return verbs

def strip_furigana(text):
    return re.sub(r'\{[^}]+\}', '', text)

def main():
    verbs = get_verbs()
    questions_dir = r'c:\Users\vecea\Desktop\Code\Nipponverb\src\data\questions'
    files = ['n1.ts', 'n2.ts', 'n3.ts', 'n4.ts', 'n5.ts']
    lvl_data = {}
    for f in files:
        lvl = f.split('.')[0].upper()
        path = os.path.join(questions_dir, f)
        if os.path.exists(path):
            with open(path, 'r', encoding='utf-8') as file:
                raw = file.read()
                lvl_data[lvl] = {
                    'stripped': strip_furigana(raw),
                    'ids': set(re.findall(r"id:\s*['\"]([^'\"]+)['\"]", raw))
                }
        else:
            lvl_data[lvl] = {'stripped': '', 'ids': set()}

    stats = {lvl: {'total': 0, 'found': 0, 'missing': []} for lvl in ['N1', 'N2', 'N3', 'N4', 'N5']}
    for v in verbs:
        lvl = v['level']
        if lvl not in stats: continue
        stats[lvl]['total'] += 1
        
        # Check v1399 ID (strongest evidence)
        id_slug = f"v1399_{v['romaji']}"
        is_found = False
        for q_id in lvl_data[lvl]['ids']:
            if id_slug in q_id:
                is_found = True
                break
        
        # Check dictionary form in content (fallback)
        if not is_found and v['dictionary'] in lvl_data[lvl]['stripped']:
            is_found = True
            
        if is_found:
            stats[lvl]['found'] += 1
        else:
            stats[lvl]['missing'].append(v)

    with open('coverage_report.txt', 'w', encoding='utf-8') as out:
        out.write(f"Total Verbs: {len(verbs)}\n\n")
        for lvl in ['N1', 'N2', 'N3', 'N4', 'N5']:
            s = stats[lvl]
            perc = (s['found']/s['total'])*100 if s['total'] > 0 else 0
            out.write(f"{lvl}: {s['found']}/{s['total']} ({perc:.1f}%)\n")
            out.write(f"Missing (examples): {', '.join([f'{m['dictionary']}({m['reading']})' for m in s['missing'][:20]])}\n\n")
        
        out.write("--- FULL MISSING LIST ---\n")
        for lvl in ['N1', 'N2', 'N3', 'N4', 'N5']:
            out.write(f"[{lvl}]\n")
            for m in stats[lvl]['missing']:
                out.write(f"{m['dictionary']}, {m['reading']}, {m['romaji']}\n")

if __name__ == "__main__":
    main()
