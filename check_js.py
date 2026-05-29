import re
import subprocess
import os

with open("reader.html", "r", encoding="utf-8") as f:
    content = f.read()

scripts = re.findall(r"<script>([\s\S]*?)</script>", content)
js_content = "\n".join(scripts)

with open("temp_check.js", "w", encoding="utf-8") as f:
    f.write(js_content)

try:
    res = subprocess.run(["node", "-c", "temp_check.js"], capture_output=True, text=True)
    if res.returncode == 0:
        print("SUCCESS: No syntax errors in reader.html scripts!")
    else:
        print("ERROR: Syntax errors found:")
        print(res.stderr)
finally:
    if os.path.exists("temp_check.js"):
        os.remove("temp_check.js")
