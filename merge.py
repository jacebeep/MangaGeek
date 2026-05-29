import json
import re

with open('dbs_data.js', 'r', encoding='utf-8') as f:
    dbs_content = f.read()

dbs_content = dbs_content.replace('const dbsChapters = ', '').replace(';', '')
dbs_content = re.sub(r'(\d+):\s*\[', r'"\1": [', dbs_content)

try:
    dbs_json = json.loads(dbs_content)
except Exception as e:
    print(e)
    
dbs_chapters = {}
for k, v in dbs_json.items():
    dbs_chapters[k] = {
        'title': f'Chapter {k}',
        'pages': v
    }

with open('death_note_data.js', 'r', encoding='utf-8') as f:
    dn_content = f.read()

with open('it_data.js', 'r', encoding='utf-8') as f:
    it_content = f.read()

with open('laws_data.js', 'r', encoding='utf-8') as f:
    laws_content = f.read()

with open('art_data.js', 'r', encoding='utf-8') as f:
    art_content = f.read()

with open('bible_data.js', 'r', encoding='utf-8') as f:
    bible_content = f.read()

with open('data.js', 'w', encoding='utf-8') as f:
    f.write('const mangaDatabase = {\n')
    f.write('    "dragon-ball-super": {\n')
    f.write('        title: "Dragon Ball Super",\n')
    f.write('        chapters: ' + json.dumps(dbs_chapters, indent=8) + '\n')
    f.write('    },\n')
    f.write('    "death-note": {\n')
    dn_content_inner = dn_content.replace('const deathNoteData = {\n', '')
    dn_content_inner = dn_content_inner.rsplit('};\n', 1)[0]
    f.write(dn_content_inner)
    f.write('\n    },\n')
    f.write('    "stephen-king-it": {\n')
    it_content_inner = it_content.replace('const itData = {\n', '')
    it_content_inner = it_content_inner.rsplit('};\n', 1)[0]
    f.write(it_content_inner)
    f.write('\n    },\n')
    f.write('    "the-48-laws-of-power": {\n')
    laws_content_inner = laws_content.replace('const lawsData = {\n', '')
    laws_content_inner = laws_content_inner.rsplit('};\n', 1)[0]
    f.write(laws_content_inner)
    f.write('\n    },\n')
    f.write('    "the-art-of-war": {\n')
    art_content_inner = art_content.replace('const artData = {\n', '')
    art_content_inner = art_content_inner.rsplit('};\n', 1)[0]
    f.write(art_content_inner)
    f.write('\n    },\n')
    f.write('    "holy-bible-kjv": {\n')
    bible_content_inner = bible_content.replace('const bibleData = {\n', '')
    bible_content_inner = bible_content_inner.rsplit('};\n', 1)[0]
    f.write(bible_content_inner)
    f.write('\n    }\n};\n')

print('Merged into data.js correctly')
