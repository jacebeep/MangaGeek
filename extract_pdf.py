import fitz
import os
import sys
import json

pdf_path = sys.argv[1]
output_dir = sys.argv[2]
json_out = sys.argv[3]

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

doc = fitz.open(pdf_path)
total_pages = len(doc)

chapters = {}

print(f"Extracting {total_pages} pages...")
for i in range(total_pages):
    page = doc.load_page(i)
    mat = fitz.Matrix(2, 2)
    pix = page.get_pixmap(matrix=mat)
    
    page_num = i + 1
    filename = f"Page_{page_num:03d}.jpg"
    out_path = os.path.join(output_dir, filename)
    
    pix.save(out_path)
    
    chapter_idx = i // 12
    chapter_key = chapter_idx + 1
    
    if chapter_key not in chapters:
        chapters[chapter_key] = []
        
    rel_path = f"assets/images/Death note/{filename}"
    chapters[chapter_key].append(rel_path)
    
    if (i+1) % 20 == 0:
        print(f"Extracted {i+1} pages")

js_data = "const deathNoteData = {\n"
js_data += "    title: \"Death Note\",\n"
js_data += "    chapters: {\n"

for chap_key, pages in chapters.items():
    start_page = (chap_key - 1) * 12 + 1
    end_page = min(chap_key * 12, total_pages)
    title = f"Page {start_page}-{end_page}"
    js_data += f"        {chap_key}: {{\n"
    js_data += f"            title: \"{title}\",\n"
    js_data += "            pages: [\n"
    for p in pages:
        js_data += f"                \"{p}\",\n"
    js_data += "            ]\n"
    js_data += "        },\n"
js_data += "    }\n"
js_data += "};\n"

with open(json_out, "w") as f:
    f.write(js_data)

print(f"Done! Wrote JS data to {json_out}")
doc.close()
