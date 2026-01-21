"""
Sample script for seeding Firestore with Japanese learning content.
This demonstrates how to upload questions to Firebase.

Requirements:
- pip install firebase-admin

Usage:
1. Download your Firebase service account key from Firebase Console
2. Save it as 'serviceAccountKey.json' in this directory
3. Run: python seed_data.py
"""

import firebase_admin
from firebase_admin import credentials, firestore
import json

# Initialize Firebase Admin SDK
cred = credentials.Certificate('serviceAccountKey.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

# Sample questions data
sample_verbs_n5 = [
    {
        "stem": "明日、学校へ___。",
        "correct": "行きます",
        "options": ["行きます", "行くい", "行った", "行いて"],
        "explanation": "Polite non-past form is required for future actions in formal contexts.",
        "level": "N5",
        "source": "JDD_001"
    },
    {
        "stem": "昨日、友達に___。",
        "correct": "会いました",
        "options": ["会いました", "会います", "会う", "会って"],
        "explanation": "Past tense polite form is needed for actions that already happened.",
        "level": "N5",
        "source": "CEJC_045"
    },
    {
        "stem": "毎日、日本語を___。",
        "correct": "勉強しています",
        "options": ["勉強しています", "勉強します", "勉強した", "勉強する"],
        "explanation": "Progressive form (~ています) is used for habitual actions.",
        "level": "N5",
        "source": "JDD_123"
    },
    {
        "stem": "昼ごはんを___から、散歩しました。",
        "correct": "食べた",
        "options": ["食べた", "食べる", "食べます", "食べて"],
        "explanation": "Plain past form is used before から to indicate completed action.",
        "level": "N5",
        "source": "CEJC_089"
    },
]

sample_kanji_n5 = [
    {
        "stem": "「学校」の読み方は?",
        "correct": "がっこう",
        "options": ["がっこう", "がくこう", "がっこ", "がくこ"],
        "explanation": "学校 (がっこう) means 'school'.",
        "level": "N5",
        "source": "JmdictFurigana"
    },
    {
        "stem": "「先生」の読み方は?",
        "correct": "せんせい",
        "options": ["せんせい", "せいせん", "さんせい", "せんさい"],
        "explanation": "先生 (せんせい) means 'teacher'.",
        "level": "N5",
        "source": "JmdictFurigana"
    },
]

sample_grammar_n5 = [
    {
        "stem": "日本語___勉強しています。",
        "correct": "を",
        "options": ["を", "が", "に", "で"],
        "explanation": "The particle を marks the direct object of an action.",
        "level": "N5",
        "source": "JLPT_Grammar_N5"
    },
    {
        "stem": "図書館___本を読みます。",
        "correct": "で",
        "options": ["で", "に", "を", "へ"],
        "explanation": "The particle で marks the location where an action takes place.",
        "level": "N5",
        "source": "JLPT_Grammar_N5"
    },
]

def upload_questions(category, level, questions):
    """Upload questions to Firestore."""
    print(f"Uploading {len(questions)} questions to drills/{category}/{level}/...")

    for i, question in enumerate(questions):
        doc_ref = db.collection('drills').document(category).collection(level).document()
        doc_ref.set(question)
        print(f"  [{i+1}/{len(questions)}] Uploaded question: {question['stem'][:30]}...")

    print(f"✅ Successfully uploaded {len(questions)} questions\n")

def create_sample_stage():
    """Create a sample stage with dialogue."""
    stage_data = {
        "id": "station_01",
        "title": "At the Station",
        "description": "Learn how to buy tickets and navigate transportation",
        "difficulty": "Beginner",
        "locked": False,
        "dialogue": [
            {"speaker": "Customer", "text": "すみません、新宿までいくらですか。"},
            {"speaker": "Staff", "text": "200円です。"},
            {"speaker": "Customer", "text": "じゃ、切符を一枚ください。"},
            {"speaker": "Staff", "text": "はい、200円です。"},
        ],
        "questions": [
            {
                "stem": "How much is the ticket to Shinjuku?",
                "correct": "200 yen",
                "options": ["100 yen", "200 yen", "300 yen", "500 yen"],
                "explanation": "The staff says '200円です' (200 yen desu).",
                "level": "N5"
            }
        ]
    }

    print("Creating sample stage...")
    db.collection('stages').document('station_01').set(stage_data)
    print("✅ Sample stage created\n")

def main():
    print("=" * 60)
    print("Firebase Firestore Data Seeding Script")
    print("=" * 60)
    print()

    # Upload verb questions
    upload_questions('verbs', 'n5', sample_verbs_n5)

    # Upload kanji questions
    upload_questions('kanji', 'n5', sample_kanji_n5)

    # Upload grammar questions
    upload_questions('grammar', 'n5', sample_grammar_n5)

    # Create sample stage
    create_sample_stage()

    print("=" * 60)
    print("✅ All data seeded successfully!")
    print("=" * 60)

if __name__ == "__main__":
    main()
