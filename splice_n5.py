import os
import re

# Base file with imports
base_content = """import { StaticQuestion } from './types'

export const n5Questions: StaticQuestion[] = [
"""

# Files to merge
files = [
    'src/data/questions/n5_batch1a.ts',
    'src/data/questions/n5_batch1b.ts',
    'src/data/questions/n5_batch1c.ts',
    'src/data/questions/n5_batch2a.ts',
    'src/data/questions/n5_batch2b.ts',
    'src/data/questions/n5_batch3.ts',
    'src/data/questions/n5_batch4.ts'
]

combined_questions = []

for file_path in files:
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            # Extract content between the first [ and the last ] after the '=' sign
            # This avoids picking up brackets in type annotations like StaticQuestion[]
            assignment_index = content.find('=')
            if assignment_index != -1:
                start_index = content.find('[', assignment_index)
                end_index = content.rfind(']')
                if start_index != -1 and end_index != -1 and start_index < end_index:
                    combined_questions.append(content[start_index + 1:end_index].strip())

# Join and close
final_content = base_content + ",\n".join(combined_questions) + "\n]\n"

with open('src/data/questions/n5.ts', 'w', encoding='utf-8') as f:
    f.write(final_content)

print(f"Merged {len(files)} files into n5.ts")
