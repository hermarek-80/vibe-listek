"""Sestaví index.html z template.html + data.js + grafiky v assets/ (vloží ji jako data URI)
a připraví fotky kategorií: src/photos/<id>.jpg|png|webp -> photos/<id>.webp (šířka 900 px, poměr stran se zachová,
max. 4:5 na výšku – vyšší fotky se oříznou na střed).
Spuštění z kořene repozitáře:  python3 src/build.py"""
import base64, glob, os, json
from PIL import Image, ImageOps
here = os.path.dirname(os.path.abspath(__file__))
root = os.path.join(here, '..')

# fotky kategorií
out_dir = os.path.join(root, 'photos'); os.makedirs(out_dir, exist_ok=True)
photos = {}
for f in sorted(glob.glob(os.path.join(here, 'photos', '*'))):
    name, ext = os.path.splitext(os.path.basename(f))
    if ext.lower() not in ('.jpg', '.jpeg', '.png', '.webp'): continue
    im = ImageOps.exif_transpose(Image.open(f)).convert('RGB')
    if im.height / im.width > 1.25:
        im = ImageOps.fit(im, (im.width, round(im.width * 1.25)), Image.LANCZOS)
    w, h = 900, round(im.height * 900 / im.width)
    im = im.resize((w, h), Image.LANCZOS)
    im.save(os.path.join(out_dir, name + '.webp'), 'WEBP', quality=82, method=6)
    photos[name] = [w, h]
for f in glob.glob(os.path.join(out_dir, '*.webp')):
    if os.path.basename(f)[:-5] not in photos: os.remove(f)

t = open(os.path.join(here, 'template.html'), encoding='utf-8').read()
imgs = {}
for f in sorted(glob.glob(os.path.join(here, 'assets', '*.webp'))):
    imgs[os.path.basename(f)[:-5]] = 'data:image/webp;base64,' + base64.b64encode(open(f, 'rb').read()).decode()
t = (t.replace('__IMGS__', json.dumps(imgs)).replace('__PHOTOS__', json.dumps(photos))
      .replace('__DATA__', open(os.path.join(here, 'data.js'), encoding='utf-8').read()))
for k, v in imgs.items():
    t = t.replace(f'__IMG_{k}__', v)
open(os.path.join(root, 'index.html'), 'w', encoding='utf-8').write(t)
print('index.html:', len(t) // 1024, 'KB | fotky:', ', '.join(photos) or '–')
