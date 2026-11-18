"""Sestaví index.html z template.html + data.js + obrázků v assets/ (vloží je jako data URI).
Spuštění z kořene repozitáře:  python3 src/build.py"""
import base64, glob, os, json
here = os.path.dirname(os.path.abspath(__file__))
t = open(os.path.join(here, 'template.html'), encoding='utf-8').read()
imgs = {}
for f in sorted(glob.glob(os.path.join(here, 'assets', '*.webp'))):
    imgs[os.path.basename(f)[:-5]] = 'data:image/webp;base64,' + base64.b64encode(open(f, 'rb').read()).decode()
t = t.replace('__IMGS__', json.dumps(imgs)).replace('__DATA__', open(os.path.join(here, 'data.js'), encoding='utf-8').read())
for k, v in imgs.items():
    t = t.replace(f'__IMG_{k}__', v)
open(os.path.join(here, '..', 'index.html'), 'w', encoding='utf-8').write(t)
print('index.html:', len(t) // 1024, 'KB')
