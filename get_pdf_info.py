import fitz  # PyMuPDF
import sys

def get_page_count(pdf_path):
    doc = fitz.open(pdf_path)
    print(f"Total pages: {len(doc)}")
    doc.close()

if __name__ == "__main__":
    get_page_count(sys.argv[1])
