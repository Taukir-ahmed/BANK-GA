"""Preserve page-indexed source text and hashes for future mock sets."""
from pathlib import Path
import hashlib
import json
import re
from pypdf import PdfReader

root = Path(__file__).resolve().parents[1]
out = root / 'docs' / 'pdf-extractions'
out.mkdir(parents=True, exist_ok=True)
manifest = []
news = []
for pdf in sorted((root / 'pdfs').glob('*.pdf')):
    month = re.search(r'\((\w+ 2026)\)', pdf.name).group(1)
    slug = month.lower().replace(' ', '-')
    pages = [p.extract_text() or '' for p in PdfReader(pdf).pages]
    for page, content in enumerate(pages, 1):
        for item, body in re.findall(r'News\s*[-–:]?\s*(\d+)\s*\n(.*?)(?=News\s*[-–:]?\s*\d+\s*\n|\Z)', content, re.S):
            news.append({'month': slug, 'page': page, 'item': int(item), 'text': body.strip()})
    (out / f'{slug}.md').write_text(
        f'# {month} - source extraction\n\nSource: `{pdf.relative_to(root).as_posix()}`\n'
        'Page numbers below are physical PDF pages, starting at 1. Text is unedited extraction, not verified news.\n\n'
        + '\n\n'.join(f'## PDF page {i}\n\n{text}' for i, text in enumerate(pages, 1)), encoding='utf-8')
    manifest.append({'month': month, 'file': pdf.relative_to(root).as_posix(), 'pages': len(pages),
                     'sha256': hashlib.sha256(pdf.read_bytes()).hexdigest(),
                     'extraction': f'docs/pdf-extractions/{slug}.md'})
(out / 'manifest.json').write_text(json.dumps(manifest, indent=2) + '\n', encoding='utf-8')
print(json.dumps(manifest, indent=2))
(out / 'news-index.json').write_text(json.dumps(news, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
