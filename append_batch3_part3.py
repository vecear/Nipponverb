
import json
import os

n5_path = r'c:\Users\vecea\Desktop\Code\Nipponverb\src\data\details\n5.ts'
json_path = r'c:\Users\vecea\Desktop\Code\Nipponverb\n5_batch3_part3_detailed.json'

with open(n5_path, 'r', encoding='utf-8') as f:
    content = f.read()

with open(json_path, 'r', encoding='utf-8') as f:
    new_items = json.load(f)

new_block = "\n\n// ===== Batch 3 Part 3: no_ga_jouzu - yo (FINISH) =====\nObject.assign(n5Details, {\n"

for item in new_items:
    # Construct explanation string
    explanation_str = "[\n"
    for exp in item.get('explanation', []):
        explanation_str += "            {\n"
        explanation_str += f"                usageId: {exp['usageId']},\n"
        explanation_str += f"                title: '{exp['title']}',\n"
        explanation_str += f"                description: '{exp['description']}',\n"
        explanation_str += "                examples: [\n"
        for ex in exp.get('examples', []):
            explanation_str += f"                    {{ japanese: '{ex['japanese']}', chinese: '{ex['chinese']}' }},\n"
        explanation_str += "                ]\n"
        explanation_str += "            },\n"
    explanation_str += "        ]"

    # Construct quiz string
    quiz_str = "[\n"
    for q in item.get('quiz', []):
        curr_opts = q['options']
        opts_str = ", ".join([f"'{o}'" for o in curr_opts])
        
        quiz_str += "            {\n"
        quiz_str += f"                id: '{q['id']}',\n"
        quiz_str += f"                sentence: '{q['sentence']}',\n"
        quiz_str += f"                options: [{opts_str}],\n"
        quiz_str += f"                correctIndex: {q['correctIndex']},\n"
        
        q_exp = q['explanation']
        correct_txt = q_exp['correct']
        wrong_txt = "',\n                        '".join(q_exp['wrong'])
        
        quiz_str += "                explanation: {\n"
        quiz_str += f"                    correct: '{correct_txt}',\n"
        quiz_str += "                    wrong: [\n"
        quiz_str += f"                        '{wrong_txt}'\n"
        quiz_str += "                    ]\n"
        quiz_str += "                }\n"
        quiz_str += "            },\n"
    quiz_str += "        ]"

    # Main entry string
    entry_str = f"""    {item['id']}: {{
        id: '{item['id']}',
        pattern: '{item['grammar']}',
        connection: '',
        translation: '{item['meaning']}',
        level: 'N5',
        explanation: {explanation_str},
        quiz: {quiz_str}
    }},
"""
    new_block += entry_str

new_block += "});\n"

# Append to file
with open(n5_path, 'a', encoding='utf-8') as f:
    f.write(new_block)

print(f"Appended {len(new_items)} items to {n5_path}")
