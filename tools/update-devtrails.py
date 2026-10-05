#!/usr/bin/env python3
"""Copy Emberhold's active editor time from DevTrails into index.html.

Usage: python3 tools/update-devtrails.py [path/to/UserStats_project.asset]
"""
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
DEFAULT_ASSET = pathlib.Path.home() / "Documents/git/_Unity/What-lies-below/UserSettings/UserStats_project.asset"

asset = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_ASSET
match = re.search(r"^\s*activeUseTime:\s*(\d+)", asset.read_text(encoding="utf-8"), re.M)
if not match:
    sys.exit(f"activeUseTime not found in {asset}")

hours = round(int(match.group(1)) / 3600)
page = ROOT / "index.html"
html, count = re.subn(r"(<b data-devtrails>)[^<]*(</b>)", rf"\g<1>~{hours} h\g<2>", page.read_text(encoding="utf-8"))
if count != 1:
    sys.exit(f"expected one <b data-devtrails> in index.html, found {count}")

page.write_text(html, encoding="utf-8")
print(f"Emberhold dev time: ~{hours} h active")
