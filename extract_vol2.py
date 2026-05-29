import fitz
import os

pdf_path = r"C:\Users\jacep\OneDrive\Desktop\MangaGeek\assets\images\Death note Volume 2\998673257-Death-Note-Volume-2.pdf"
output_dir = r"C:\Users\jacep\OneDrive\Desktop\MangaGeek\assets\images\Death note Volume 2"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

doc = fitz.open(pdf_path)
total_pages = len(doc)

chapters = {}
start_chapter = 18

print(f"Extracting {total_pages} pages...")
for i in range(total_pages):
    page = doc.load_page(i)
    mat = fitz.Matrix(2, 2)
    pix = page.get_pixmap(matrix=mat)
    
    page_num = i + 1
    filename = f"Page_Vol2_{page_num:03d}.jpg"
    out_path = os.path.join(output_dir, filename)
    
    pix.save(out_path)
    
    chapter_idx = i // 12
    chapter_key = start_chapter + chapter_idx
    
    if chapter_key not in chapters:
        chapters[chapter_key] = []
        
    rel_path = f"assets/images/Death note Volume 2/{filename}"
    chapters[chapter_key].append(rel_path)
    
    if (i+1) % 20 == 0:
        print(f"Extracted {i+1} pages")

js_data = ""
for chap_key, pages in chapters.items():
    start_page = (chap_key - start_chapter) * 12 + 1
    end_page = min((chap_key - start_chapter + 1) * 12, total_pages)
    title = f"Vol 2: Page {start_page}-{end_page}"
    js_data += f"        {chap_key}: {{\n"
    js_data += f"            title: \"{title}\",\n"
    js_data += "            pages: [\n"
    for p in pages:
        js_data += f"                \"{p}\",\n"
    js_data += "            ]\n"
    js_data += "        },\n"

with open("vol2_chapters.txt", "w") as f:
    f.write(js_data)

print(f"Done! Wrote JS data to vol2_chapters.txt")
doc.close()
