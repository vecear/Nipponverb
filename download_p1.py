import urllib.request
import ssl

# Ignore SSL certificate errors if any (common in some envs)
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = 'https://jlptsensei.com/jlpt-n5-vocabulary-list/page/1/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, context=ctx) as f:
        html = f.read().decode('utf-8')
        with open('n5_page1.html', 'w', encoding='utf-8') as out:
            out.write(html)
    print("Download complete.")
except Exception as e:
    print(f"Error: {e}")
