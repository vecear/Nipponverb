# Data Seeding Scripts

This directory contains Python scripts for processing Japanese corpus data and uploading it to Firebase Firestore.

## Setup

1. Install Python 3.8 or higher

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Get Firebase Admin SDK credentials:
   - Go to Firebase Console > Project Settings > Service Accounts
   - Click "Generate new private key"
   - Save the file as `serviceAccountKey.json` in this directory

## Usage

### Seed Sample Data

To upload sample questions to your Firestore database:

```bash
python seed_data.py
```

This will create:
- Verb questions in `drills/verbs/n5/`
- Kanji questions in `drills/kanji/n5/`
- Grammar questions in `drills/grammar/n5/`
- Sample stage in `stages/`

## Future Data Processing Scripts

The following scripts should be created to process authentic corpus data:

### 1. Process JDD Corpus (`process_jdd.py`)
- Extract verb forms from Japanese Daily Dialogue corpus
- Generate realistic distractors
- Tag by JLPT level
- Output questions with context

### 2. Process CEJC Corpus (`process_cejc.py`)
- Parse CEJC XML files
- Extract sentences with specific grammar patterns
- Create fill-in-the-blank questions

### 3. Generate Kanji Questions (`generate_kanji.py`)
- Use JmdictFurigana for kanji-reading pairs
- Create similar-looking kanji distractors
- Generate both kanji→reading and reading→kanji questions

### 4. Create Exam Data (`create_exams.py`)
- Compile questions by JLPT level
- Create balanced sections (vocab, grammar, reading)
- Set appropriate time limits

## Data Quality Guidelines

1. **Distractors**: Should be grammatically plausible but contextually wrong
2. **Context**: Include source sentences from corpus
3. **Variety**: Mix question types and difficulty within each level
4. **Authenticity**: Prefer real corpus examples over generated text

## Security Notes

- **Never commit** `serviceAccountKey.json` to version control
- The `.gitignore` file should exclude this file
- Keep Firebase credentials secure
