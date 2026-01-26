#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Merge grammar examples from JLPT sensei docx into n5.ts
This script reads the parsed JSON and updates n5.ts with additional examples
"""

import sys
import json
import re
sys.stdout.reconfigure(encoding='utf-8')

# 映射 docx 文法名稱到 n5.ts 中的 ID
GRAMMAR_MAPPING = {
    'だ (da) & です (desu)': 'n5_da_desu',
    'だけ (dake)': 'n5_dake',
    'だろう (darou)': 'n5_darou',
    'で (de) has various meanings, including in; at; on; by; with; via; and even because': 'n5_de',
    'でも (demo)': 'n5_demo',
    'でしょう (deshou)': 'n5_deshou',
    'どんな (donna)': 'n5_donna',
    'どうして (doushite)': 'n5_doushite',
    'どうやって (douyatte)': 'n5_douyatte',
    'が (ga)': 'n5_ga',
    'があります (ga arimasu) & がある (ga aru)': 'n5_ga_arimasu',
    'がほしい / が欲しい (ga hoshii)': 'n5_ga_hoshii',
    'がいます (ga imasu) & がいる (ga iru)': 'n5_ga_imasu',
    '⽅がいい / (ほうがいい) (hou ga ii)': 'n5_hou_ga_ii',
    'い-adjectives (i-adjectives), also known as い形容詞 (i keiyoushi)': 'n5_i_adjectives',
    '⼀ 「いちばん」 (ichiban)': 'n5_ichiban',
    '⼀緒に「いっしょに」 (issho ni)': 'n5_issho_ni',
    'いつも (itsumo)': 'n5_itsumo',
    'じゃない (janai) & ではない (dewa nai)': 'n5_janai',
    'か (ka)': 'n5_ka',
    'か〜か (ka~ka)': 'n5_ka_ka',
    'から (kara)': 'n5_kara',
    '⽅ [かた] (kata)': 'n5_kata',
    'けど (kedo)': 'n5_kedo',
    'けれども (keredo mo)': 'n5_keredo_mo',
    'まだ (mada)': 'n5_mada',
    'まだ〜ていません (mada ~te imasen)': 'n5_mada_te_imasen',
    'まで (made)': 'n5_made',
    '前に 【まえに】 (mae ni)': 'n5_mae_ni',
    'ませんか (masen ka)': 'n5_masen_ka',
    'ましょう (mashou)': 'n5_mashou',
    'ましょうか (mashouka)': 'n5_mashou_ka',
    'も (mo)': 'n5_mo',
    'もう (mou)': 'n5_mou',
    'な-adjectives (na-adjectives), also known as な形容詞 (na keiyoushi)': 'n5_na_adjectives',
    'なあ (naa)': 'n5_naa',
    'ないで (naide)': 'n5_naide',
    'ないでくだあい (naide kudasai)': 'n5_naide_kudasai',
    'なくてもいい (naku temo ii)': 'n5_naku_temo_ii',
    'なくちゃ (nakucha) / なくちゃダメ (nakucha dame)': 'n5_nakucha',
    'なくてはいけない (nakute wa ikenai) / なくてはいけません (nakute wa ikemasen)': 'n5_nakute_wa_ikenai',
    'なくてはならない (nakute wa naranai) / なくてはなりません (nakute wa narimasen)': 'n5_nakute_wa_naranai',
    'になる・くなる (ni naru / ku naru)': 'n5_ni_naru',
    'んです (ndesu) & んだ (nda)': 'n5_ndesu',
    'ね (ne)': 'n5_ne',
    'に (ni)': 'n5_ni',
    'に⾏く 【にいく】(ni iku)': 'n5_ni_iku',
    'にする (ni suru) / にします (ni shimasu)': 'n5_ni_suru',
    'に (ni) & へ (e)': 'n5_ni_e',
    'の (no)': 'n5_no',
    'のです (no desu) & のだ (noda)': 'n5_no_desu',
    'のが下⼿ 【のがへた】(no ga heta)': 'n5_no_ga_heta',
    'のが上⼿ / のがじょうずです (no ga jouzu desu)': 'n5_no_ga_jouzu',
    'のが好き 【のがすきです】(no ga suki desu)': 'n5_no_ga_suki',
    'の中で[A]が⼀ 【のなかで[A]がいちばん】 (no naka de [A] ga ichiban)': 'n5_no_naka_de',
    'ので (node)': 'n5_node',
    'を (o / wo)': 'n5_o_wo',
    'をください (o kudasai)': 'n5_o_kudasai',
    'しかし (shikashi)': 'n5_shikashi',
    'すぎる (sugiru)': 'n5_sugiru',
    'たことがある (ta koto ga aru)': 'n5_ta_koto_ga_aru',
    'たい (tai)': 'n5_tai',
    'たり〜たり (tari~tari)': 'n5_tari_tari',
    'てある (te aru)': 'n5_te_aru',
    'ている (te iru)': 'n5_te_iru',
    'てから (te kara)': 'n5_te_kara',
    'てください (te kudasai)': 'n5_te_kudasai',
    'てはいけない (te wa ikenai) / てはいけません (te wa ikemasen)': 'n5_te_wa_ikenai',
    'てもいい (temo ii) & てもいいです（か） (temo ii desu ka)': 'n5_temo_ii',
    'と (to)': 'n5_to',
    '時 【とき】(toki)': 'n5_toki',
    'とても (totemo)': 'n5_totemo',
    'つもり (tsumori)': 'n5_tsumori',
    'は (wa)': 'n5_wa',
    'は〜より・・・です (wa ~yori… desu)': 'n5_wa_yori',
    'はどうですか (wa dou desu ka)': 'n5_wa_dou_desu_ka',
    'や (ya)': 'n5_ya',
    'よ (yo)': 'n5_yo',
    'より〜ほうが (yori ~hou ga)': 'n5_yori_hou_ga',
}

def clean_japanese(text):
    """清理日文文字，修復常見的編碼問題"""
    # 替換一些常見的異體字
    replacements = {
        '⼀': '一',
        '⼆': '二',
        '⼈': '人',
        '⼦': '子',
        '⼥': '女',
        '⾏': '行',
        '⾒': '見',
        '⾔': '言',
        '⾞': '車',
        '⾦': '金',
        '⾷': '食',
        '⽇': '日',
        '⽉': '月',
        '⽔': '水',
        '⽕': '火',
        '⽊': '木',
        '⼟': '土',
        '⽅': '方',
        '⽣': '生',
        '⽤': '用',
        '⽬': '目',
        '⽩': '白',
        '⽴': '立',
        '⾜': '足',
        '⾝': '身',
        '⾬': '雨',
        '⾳': '音',
        '⾷': '食',
        '⾸': '首',
        '⻑': '長',
        '⻘': '青',
        '⻄': '西',
        '⾼': '高',
        '⿂': '魚',
        '⿃': '鳥',
        '⿊': '黒',
        '⾍': '虫',
        '⺟': '母',
        '⽝': '犬',
        '⽴': '立',
        '⾃': '自',
        '⽩': '白',
        '⽿': '耳',
        '⼿': '手',
        '⼝': '口',
        '⼼': '心',
        '⼤': '大',
        '⼩': '小',
        '⼭': '山',
        '川': '川',
        '⾨': '門',
        '⽥': '田',
        '⽯': '石',
        '⽵': '竹',
        '⽷': '糸',
        '⽶': '米',
        '⾐': '衣',
        '⾙': '貝',
        '⾞': '車',
        '⾣': '酉',
        '⾦': '金',
        '⽻': '羽',
        '⾓': '角',
        '⾔': '言',
        '⾕': '谷',
        '⽾': '豆',
        '⾖': '豆',
        '⽪': '皮',
        '⽬': '目',
        '⽲': '禾',
        '⽳': '穴',
        '⽸': '缶',
        '⺼': '肉',
        '⺮': '竹',
        '⺾': '草',
        '⻌': '辶',
        '⻏': '邑',
        '⻖': '阝',
        '⻗': '雨',
    }

    for old, new in replacements.items():
        text = text.replace(old, new)

    return text

def generate_typescript_examples(examples):
    """將例句轉換為 TypeScript 格式"""
    if not examples:
        return ''

    lines = []
    for ex in examples:
        jp = clean_japanese(ex.get('japanese', ''))
        # 嘗試從 romaji 或 english 提取中文翻譯
        # 由於原始資料沒有中文，我們暫時使用英文
        en = ex.get('english', '')

        if jp:
            lines.append(f"                    {{ japanese: '{jp}', chinese: '{en}' }}")

    return ',\n'.join(lines)

def main():
    # 讀取解析的 JSON
    with open('parsed_n5_grammar.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    grammar_points = data['grammar_points']

    # 輸出更新摘要
    print("Grammar points from JLPT sensei docx:")
    print("=" * 60)

    mapped_count = 0
    unmapped = []

    for g in grammar_points:
        name = g['original_name']
        examples = g['examples']

        if name in GRAMMAR_MAPPING:
            ts_id = GRAMMAR_MAPPING[name]
            mapped_count += 1
            print(f"✓ {name}")
            print(f"  -> {ts_id}")
            print(f"  Examples: {len(examples)}")

            # 顯示例句
            for ex in examples[:2]:
                jp = clean_japanese(ex.get('japanese', ''))
                en = ex.get('english', '')
                print(f"    - {jp}")
                if en:
                    print(f"      {en}")
        else:
            unmapped.append(name)

    print("\n" + "=" * 60)
    print(f"Mapped: {mapped_count}/{len(grammar_points)}")

    if unmapped:
        print(f"\nUnmapped grammar points ({len(unmapped)}):")
        for name in unmapped:
            print(f"  - {name}")

    # 生成可以添加到 n5.ts 的例句代碼
    print("\n" + "=" * 60)
    print("TypeScript code snippets for examples:")
    print("=" * 60)

    for g in grammar_points[:5]:  # 只顯示前5個作為示例
        name = g['original_name']
        examples = g['examples']

        if name in GRAMMAR_MAPPING and examples:
            ts_id = GRAMMAR_MAPPING[name]
            print(f"\n// {ts_id}")
            print("examples: [")
            for ex in examples:
                jp = clean_japanese(ex.get('japanese', ''))
                en = ex.get('english', '')
                print(f"    {{ japanese: '{jp}', chinese: '{en}' }},")
            print("]")

if __name__ == '__main__':
    main()
