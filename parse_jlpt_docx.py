#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Parse JLPT N5 Grammar Master docx and extract grammar content
"""

import sys
import json
import re
sys.stdout.reconfigure(encoding='utf-8')
from docx import Document

def main():
    doc = Document(r'JLPT sensei\N5\JLPT N5 Grammar Master Ebok by JLPTsensei.com.docx')

    # 收集所有段落文字
    all_text = []
    for para in doc.paragraphs:
        text = para.text.strip()
        if text:
            all_text.append(text)

    # 找出每個文法點的區段
    grammar_sections = []
    current_grammar = None
    current_content = []

    for text in all_text:
        if 'Learn Japanese grammar:' in text:
            # 儲存前一個文法
            if current_grammar:
                grammar_sections.append({
                    'name': current_grammar,
                    'content': current_content
                })

            # 開始新的文法
            start = text.find('Learn Japanese grammar:') + len('Learn Japanese grammar:')
            end = text.find('. Meaning:')
            if end == -1:
                end = text.find('.')
            if end > start:
                current_grammar = text[start:end].strip()
                current_content = [text]
        elif current_grammar:
            current_content.append(text)

    # 儲存最後一個
    if current_grammar:
        grammar_sections.append({
            'name': current_grammar,
            'content': current_content
        })

    # 解析每個文法點
    def extract_examples(content):
        """從內容中提取例句"""
        examples = []
        i = 0

        while i < len(content):
            line = content[i].strip()

            # 跳過某些行
            if not line or line == 'Practice writing your own sentences!' or 'How To Use' in line:
                i += 1
                continue

            # 檢查是否是編號例句
            # 格式: "2. 日文句子" 或 "2.	日文 romaji english"
            numbered_match = re.match(r'^(\d+)\.\s*(.+)$', line)

            if numbered_match:
                num = numbered_match.group(1)
                rest = numbered_match.group(2).strip()

                # 檢查是否包含日文
                has_japanese = bool(re.search(r'[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]', rest))

                if has_japanese:
                    # 嘗試分割日文、羅馬字、英文 (可能用 tab 或在同一行)
                    parts = rest.split('\t') if '\t' in rest else [rest]

                    japanese = parts[0].strip()
                    romaji = ''
                    english = ''

                    if len(parts) >= 2:
                        # 同一行有多個部分
                        romaji = parts[1].strip() if len(parts) > 1 else ''
                        english = parts[2].strip() if len(parts) > 2 else ''

                    # 如果羅馬字和英文在下一行
                    if not romaji and i + 1 < len(content):
                        next_line = content[i + 1].strip()
                        # 檢查是否全是羅馬字
                        if re.match(r'^[a-z\s\.\,\!\?\'\"\-\(\)]+$', next_line, re.IGNORECASE) and not next_line.startswith(tuple('0123456789')):
                            # 可能是 "romaji. english" 格式
                            if '. ' in next_line:
                                parts = next_line.split('. ', 1)
                                romaji = parts[0].strip()
                                english = parts[1].strip() if len(parts) > 1 else ''
                            else:
                                romaji = next_line
                            i += 1

                            # 檢查英文是否在再下一行
                            if not english and i + 1 < len(content):
                                next_next = content[i + 1].strip()
                                if not re.search(r'[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]', next_next) and not next_next.startswith(tuple('0123456789')):
                                    english = next_next
                                    i += 1

                    examples.append({
                        'japanese': japanese,
                        'romaji': romaji,
                        'english': english
                    })

            i += 1

        return examples

    def parse_grammar_section(section):
        """解析單個文法區段"""
        name = section['name']
        content = section['content']

        result = {
            'original_name': name,
            'meaning': '',
            'full_description': '',
            'examples': []
        }

        # 提取 meaning
        first_line = content[0] if content else ''
        if 'Meaning:' in first_line:
            meaning_start = first_line.find('Meaning:') + len('Meaning:')
            # 找到句號結尾
            rest = first_line[meaning_start:]
            meaning_end = rest.find('.')
            if meaning_end > 0:
                result['meaning'] = rest[:meaning_end].strip()

        # 整理完整描述
        result['full_description'] = '\n'.join(content[:20])  # 前20行作為描述

        # 提取例句
        result['examples'] = extract_examples(content)

        return result

    # 解析所有文法點
    parsed_grammar = []
    for section in grammar_sections:
        parsed = parse_grammar_section(section)
        parsed_grammar.append(parsed)

    # 輸出 JSON
    output = {
        'total': len(parsed_grammar),
        'grammar_points': parsed_grammar
    }

    with open('parsed_n5_grammar.json', 'w', encoding='utf-8') as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    print(f"Parsed {len(parsed_grammar)} grammar points")
    print("Output saved to parsed_n5_grammar.json")

    # 顯示摘要
    for g in parsed_grammar:
        ex_count = len(g['examples'])
        print(f"  - {g['original_name']}: {g['meaning']} ({ex_count} examples)")

if __name__ == '__main__':
    main()
