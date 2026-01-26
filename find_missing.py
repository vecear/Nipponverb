#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys
import json
sys.stdout.reconfigure(encoding='utf-8')

# 從 docx 解析的文法點
with open(r'parsed_n5_grammar.json', 'r', encoding='utf-8') as f:
    docx_data = json.load(f)

docx_grammar = [g['original_name'] for g in docx_data['grammar_points']]

# n5.ts 中已有的文法 ID
n5_ids = [
    'n5_ato_de', 'n5_cha_ikenai', 'n5_da_desu', 'n5_dake', 'n5_darou', 'n5_de',
    'n5_de_place', 'n5_demo', 'n5_deshou', 'n5_donna', 'n5_doushite', 'n5_douyatte',
    'n5_e_he', 'n5_ga', 'n5_ga_arimasu', 'n5_ga_aru', 'n5_ga_hoshii', 'n5_ga_imasu',
    'n5_hou_ga_ii', 'n5_i_adjectives', 'n5_ichiban', 'n5_issho_ni', 'n5_itsumo',
    'n5_janai', 'n5_ka', 'n5_ka_ka', 'n5_kara', 'n5_kara_made', 'n5_kata', 'n5_kedo',
    'n5_keredo_mo', 'n5_keredomo', 'n5_koto_ga_dekiru', 'n5_mada', 'n5_mada_te_imasen',
    'n5_made', 'n5_mae_ni', 'n5_masen_ka', 'n5_mashou', 'n5_mashou_ka', 'n5_mashouka',
    'n5_mo', 'n5_mou', 'n5_na_adjectives', 'n5_naa', 'n5_nai_de_kudasai', 'n5_naide',
    'n5_naide_kudasai', 'n5_naito_ikenai', 'n5_naku_temo_ii', 'n5_nakucha',
    'n5_nakute_mo_ii', 'n5_nakute_wa_ikenai', 'n5_nakute_wa_naranai', 'n5_naru',
    'n5_ndesu', 'n5_ne', 'n5_ni', 'n5_ni_e', 'n5_ni_iku', 'n5_ni_naru', 'n5_ni_suru',
    'n5_no', 'n5_no_desu', 'n5_no_ga_heta', 'n5_no_ga_jouzu', 'n5_no_ga_suki',
    'n5_no_naka_de', 'n5_no_naka_de_a_ga_ichiban', 'n5_node', 'n5_o_go', 'n5_o_kudasai',
    'n5_o_wo', 'n5_shikashi', 'n5_sore_kara', 'n5_soshite', 'n5_sugiru',
    'n5_ta_koto_ga_aru', 'n5_tai', 'n5_tari_tari', 'n5_te_aru', 'n5_te_iru',
    'n5_te_kara', 'n5_te_kudasai', 'n5_te_wa_ikenai', 'n5_temo_ii', 'n5_temo_ii_desu',
    'n5_to', 'n5_toki', 'n5_totemo', 'n5_tsumori', 'n5_wa', 'n5_wa_dou_desu_ka',
    'n5_wa_topic_marker', 'n5_wa_yori', 'n5_ya', 'n5_yo', 'n5_yori', 'n5_yori_hou_ga'
]

# 映射 docx 名稱到 n5_id
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

# 找出 docx 中有但 mapping 中沒有的文法點 (未映射)
unmapped = []
for g in docx_data['grammar_points']:
    name = g['original_name']
    if name not in GRAMMAR_MAPPING:
        unmapped.append(name)

print("=" * 60)
print("Grammar points in docx but NOT MAPPED:")
print("=" * 60)
for name in unmapped:
    print(f"  - {name}")

print(f"\nTotal unmapped: {len(unmapped)}")

# 找出 n5.ts 中有但 docx 中沒有的
mapped_ids = set(GRAMMAR_MAPPING.values())
extra_in_n5 = [id for id in n5_ids if id not in mapped_ids]

print("\n" + "=" * 60)
print("Grammar points in n5.ts but NOT in docx:")
print("=" * 60)
for id in extra_in_n5:
    print(f"  - {id}")

print(f"\nTotal extra in n5.ts: {len(extra_in_n5)}")
