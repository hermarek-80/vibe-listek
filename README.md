# Vibe Zlín – online nápojový lístek

Mobilní lístek pro QR kód: Nápojový lístek, Koktejly, Delikatesy, Vinný lístek.

- `index.html` – hotová stránka (vše v jednom souboru, včetně grafiky)
- `src/data.js` – obsah lístků (položky, ceny) – **tady se dělají úpravy**
- `src/template.html` – vzhled a logika
- `src/assets/` – grafika vyříznutá z tiskových lístků

Po úpravě `data.js` nebo `template.html` spusť `python3 src/build.py` a commitni nový `index.html`.

Přímé odkazy na lístky: `#napoje`, `#koktejly`, `#delikatesy`, `#vina`.
