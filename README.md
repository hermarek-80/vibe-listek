# Vibe Zlín – online nápojový lístek

Mobilní lístek pro QR kód: Nápojový lístek, Koktejly, Delikatesy, Vinný lístek.

- `index.html` – hotová stránka (vše v jednom souboru, včetně grafiky)
- `src/data.js` – obsah lístků (položky, ceny) – **tady se dělají úpravy**
- `src/template.html` – vzhled a logika
- `src/assets/` – grafika vyříznutá z tiskových lístků
- `src/photos/` – zdrojové fotky kategorií (Delikatesy). Název souboru = kategorie:
  `syry`, `croissanty`, `pinsa`, `prkenka`, `tapas`, `speciality` (.jpg / .png / .webp).
  Build je zmenší na šířku 900 px (vyšší než 4:5 ořízne) a uloží do `photos/`. Kategorie bez fotky se zobrazí bez ní.

Po úpravě spusť `python3 src/build.py` (potřebuje Pillow) a commitni `index.html` i `photos/`.

Přímé odkazy na lístky: `#napoje`, `#koktejly`, `#delikatesy`, `#vina`.
