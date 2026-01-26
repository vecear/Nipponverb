
import re

target_file = 'src/data/details/n4.ts'

# Dictionary of N4 compounds to split
# Pattern: "Compound": ["Comp", "ound", "read", "ing"]
# Or simpler: "Compound": "C{r}o{r}"
replacements = {
    # Time/Period
    "時間": "時{じ}間{かん}",
    "授業": "授{じゅ}業{ぎょう}",
    "夏休み": "夏{なつ}休{やす}み",
    "毎日": "毎{まい}日{にち}",
    "日曜日": "日{にち}曜{よう}日{び}",
    "今週": "今{こん}週{しゅう}",
    "来週": "来{らい}週{しゅう}",
    "先週": "先{せん}週{しゅう}",
    "今年": "今{こ}年{とし}",
    "来年": "来{らい}年{ねん}",
    "去年": "去{きょ}年{ねん}",
    
    # Places
    "学校": "学{がっ}校{こう}",
    "教室": "教{きょう}室{しつ}",
    "部屋": "部{へ}屋{や}",
    "駅前": "駅{えき}前{まえ}",
    "銀行": "銀{ぎん}行{こう}",
    "病院": "病{びょう}院{いん}",
    "台所": "台{だい}所{どころ}",
    "図書館": "図{と}書{しょ}館{かん}",
    "映画館": "映{えい}画{が}館{かん}",
    
    # People
    "先生": "先{せん}生{せい}",
    "学生": "学{がく}生{せい}",
    "友達": "友{とも}達{だち}",
    "自分": "自{じ}分{ぶん}",
    "家族": "家{か}族{ぞく}",
    "兄弟": "兄{きょう}弟{だい}",
    "両親": "両{りょう}親{しん}",
    "子供": "子{こ}供{とも}",
    
    # Actions/Nouns
    "勉強": "勉{べん}強{きょう}",
    "練習": "練{れん}習{しゅう}",
    "掃除": "掃{そう}除{じ}",
    "洗濯": "洗{せん}濯{たく}",
    "料理": "料{りょう}理{り}",
    "食事": "食{しょく}事{じ}",
    "散歩": "散{さん}歩{ぽ}",
    "買い物": "買{か}い物{もの}",
    "旅行": "旅{りょ}行{こう}",
    "準備": "準{じゅん}備{び}",
    "説明": "説{せつ}明{めい}",
    "意味": "意{い}味{み}",
    "意見": "意{い}見{けん}",
    "経験": "経{けい}験{けん}",
    "約束": "約{やく}束{そく}",
    "連絡": "連{れん}絡{らく}",
    "電話": "電{でん}話{わ}",
    "電車": "電{でん}車{しゃ}",
    "自転車": "自{じ}転{てん}車{しゃ}",
    "自動車": "自{じ}動{どう}車{しゃ}",
    "地下鉄": "地{ち}下{か}鉄{てつ}",
    "飛行機": "飛{ひ}行{こう}機{き}",
    "新幹線": "新{しん}幹{かん}線{せん}",
    
    # Adjectives/Adverbs
    "有名": "有{ゆう}名{めい}",
    "親切": "親{しん}切{せつ}",
    "元気": "元{げん}気{き}",
    "病気": "病{びょう}気{き}",
    "本当": "本{ほん}当{とう}",
    "全部": "全{ぜん}部{ぶ}",
    "全然": "全{ぜん}然{ぜん}",
    "多分": "多{た}分{ぶん}",
    "最近": "最{さい}近{きん}",
    "最初": "最{さい}初{しょ}",
    "最後": "最{さい}後{ご}",
    
    # Verbs (suru nouns above, others here)
    "説明": "説{せつ}明{めい}",
}

def fix_furigana():
    with open(target_file, 'r', encoding='utf-8') as f:
        content = f.read()

    count = 0
    
    # Iterate key-values. 
    # Use simple string replacement but be careful not to double replace.
    # Current bad pattern: "単語{たんご}" or "単語" (no furigana).
    # If "単語{たんご}" exists, replace with "単{たん}語{ご}".
    # If "単語" exists (unannotated), ignore here (that is job for add_furigana.py).
    
    # We must construct the "bad" pattern from the good one.
    # Good: "時{じ}間{かん}"
    # Bad: "時間{じかん}"
    
    for word, fixed in replacements.items():
        # Reconstruct group reading
        # fixed = "時{じ}間{かん}" -> parts "時", "じ", "間", "かん"
        # This is hard to reverse programmatically reliably without a dictionary of readings.
        # But I recall N5 script I hardcoded the mappings.
        # Let's just create a loop that looks for "{reading}" pattern.
        
        # Regex to find grouped furigana: Word{reading}
        # But reading varies.
        # Let's rely on specific replacements. 
        # I'll manually define the "Bad" -> "Good" mapping for these N4 words.
        pass
        
    # Redefine logic: Use a list of explicit fixes.
    # (Word, Reading) -> Split
    
    fix_list = [
        ("時間", "じかん"),
        ("授業", "じゅぎょう"),
        ("夏休み", "なつやすみ"), # "休み" is ok, but "夏{なつ}"? grouped usually "夏休み{なつやすみ}"?
        ("毎日", "まいにち"),
        ("日曜日", "にちようび"),
        ("今週", "こんしゅう"),
        ("来週", "らいしゅう"),
        ("先週", "せんしゅう"),
        ("今年", "ことし"),
        ("来年", "らいねん"),
        ("去年", "きょねん"),
        ("学校", "がっこう"),
        ("教室", "きょうしつ"),
        ("部屋", "へや"),
        ("駅前", "えきまえ"),
        ("銀行", "ぎんこう"),
        ("病院", "びょういん"),
        ("台所", "だいどころ"),
        ("図書館", "としょかん"),
        ("映画館", "えいがかん"),
        ("先生", "せんせい"),
        ("学生", "がくせい"),
        ("友達", "ともだち"),
        ("自分", "じぶん"),
        ("家族", "かぞく"),
        ("兄弟", "きょうだい"),
        ("両親", "りょうしん"),
        ("子供", "こども"),
        ("勉強", "べんきょう"),
        ("練習", "れんしゅう"),
        ("掃除", "そうじ"),
        ("洗濯", "せんたく"),
        ("料理", "りょうり"),
        ("食事", "しょくじ"),
        ("散歩", "さんぽ"),
        ("買い物", "かいもの"),
        ("旅行", "りょこう"),
        ("準備", "じゅんび"),
        ("説明", "せつめい"),
        ("意味", "いみ"),
        ("意見", "いけん"),
        ("経験", "けいけん"),
        ("約束", "やくそく"),
        ("連絡", "れんらく"),
        ("電話", "でんわ"),
        ("電車", "でんしゃ"),
        ("自転車", "じてんしゃ"),
        ("自動車", "じどうしゃ"),
        ("地下鉄", "ちかてつ"),
        ("飛行機", "ひこうき"),
        ("新幹線", "しんかんせん"),
        ("有名", "ゆうめい"),
        ("親切", "しんせつ"),
        ("元気", "げんき"),
        ("病気", "びょうき"),
        ("本当", "ほんとう"),
        ("全部", "ぜんぶ"),
        ("全然", "ぜんぜん"),
        ("多分", "たぶん"),
        ("最近", "さいきん"),
        ("最初", "さいしょ"),
        ("最後", "さいご"),
    ]
    
    for word, reading in fix_list:
        # Construct target: Word{reading}
        target = f"{word}{{{reading}}}"
        if target in content:
            # Get the split version from replacements dict if possible, or skip specific construction logic for now
            # and just use the dict I defined at top.
            if word in replacements:
                replacement = replacements[word]
                # Replace ALL occurrences
                content = content.replace(target, replacement)
                count += 1
                
    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Fixed {count} types of compound furigana issues.")

if __name__ == "__main__":
    fix_furigana()
