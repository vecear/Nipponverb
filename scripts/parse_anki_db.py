import sqlite3
import json
import sys

# Set UTF-8 encoding for output
sys.stdout.reconfigure(encoding='utf-8')

# Connect to the database
conn = sqlite3.connect('eggrolls_extracted/collection.anki2')
cursor = conn.cursor()

# Count total notes
cursor.execute("SELECT COUNT(*) FROM notes;")
total_notes = cursor.fetchone()[0]
print(f"Total notes: {total_notes}")

# Get first 10 notes to see the structure
cursor.execute("SELECT id, mid, flds, tags FROM notes LIMIT 10;")
notes = cursor.fetchall()

print("\nSample notes:")
for i, note in enumerate(notes, 1):
    note_id, model_id, fields, tags = note
    print(f"\n=== Note {i} ===")
    print(f"ID: {note_id}")
    print(f"Tags: {tags}")
    
    # Split fields by \x1f separator
    field_list = fields.split('\x1f')
    print(f"Number of fields: {len(field_list)}")
    
    for j, field in enumerate(field_list):
        # Clean HTML tags for display
        clean_field = field.replace('<br>', ' ').replace('<div>', ' ').replace('</div>', '')
        if len(clean_field) > 100:
            clean_field = clean_field[:100] + "..."
        print(f"  Field {j}: {clean_field}")

conn.close()
