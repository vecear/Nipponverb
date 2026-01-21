import zipfile
import sqlite3
import json
import os

# Extract apkg
with zipfile.ZipFile('eggrolls.apkg', 'r') as zip_ref:
    zip_ref.extractall('eggrolls_extracted')

print("Extracted files:")
for file in os.listdir('eggrolls_extracted'):
    print(f"  - {file}")

# Connect to the collection database
db_path = 'eggrolls_extracted/collection.anki2'
if not os.path.exists(db_path):
    db_path = 'eggrolls_extracted/collection.anki21'

if os.path.exists(db_path):
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # Get table schema
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
    tables = cursor.fetchall()
    print("\nTables in database:")
    for table in tables:
        print(f"  - {table[0]}")
    
    # Get notes structure
    cursor.execute("PRAGMA table_info(notes);")
    columns = cursor.fetchall()
    print("\nNotes table columns:")
    for col in columns:
        print(f"  - {col[1]} ({col[2]})")
    
    # Get first 3 notes to understand structure
    cursor.execute("SELECT * FROM notes LIMIT 3;")
    notes = cursor.fetchall()
    print("\nFirst 3 notes:")
    for i, note in enumerate(notes, 1):
        print(f"\nNote {i}:")
        print(f"  ID: {note[0]}")
        print(f"  Fields: {note[6][:200]}...")  # flds column
    
    conn.close()
else:
    print("No collection database found!")
