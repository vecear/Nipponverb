
import zipfile
import xml.etree.ElementTree as ET
import os

docx_path = r'c:\Users\vecea\Desktop\Code\Nipponverb\JLPT sensei\N5\JLPT N5 Grammar Master Ebok by JLPTsensei.com.docx'

def get_docx_text(path):
    try:
        document = zipfile.ZipFile(path)
        xml_content = document.read('word/document.xml')
        document.close()
        
        tree = ET.XML(xml_content)
        
        # Word XML namespace
        WORD_namespace = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
        PARA = WORD_namespace + 'p'
        TEXT = WORD_namespace + 't'
        
        paragraphs = []
        for paragraph in tree.iter(PARA):
            texts = [node.text for node in paragraph.iter(TEXT) if node.text]
            if texts:
                paragraphs.append(''.join(texts))
                
        return '\n'.join(paragraphs)
    except Exception as e:
        return f"Error reading docx: {str(e)}"

content = get_docx_text(docx_path)
print(f"Read {len(content)} characters.")
print("--- DUMP START ---")
print(content[:2000]) # Print first 2000 chars to verify
print("--- DUMP END ---")
