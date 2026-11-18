const TABS = [
{
  id: "napoje", label: "Nápojový lístek", theme: "pink",
  cover: { pre: "NÁPOJOVÝ", img: "listek" },
  sections: [
    { id: "kava", nav: "Káva", blocks: [
      { k: "head", deco: "KÁVA", sub: "podle velikosti" },
      { k: "list", label: "malá", unit: "Kč", items: [["Ristretto","",59],["Espresso","",59],["Espresso Macchiato","",65]] },
      { k: "list", label: "střední", unit: "Kč", items: [["Lungo","",59],["Cappuccino","",65],["Doppio","",72],["Flat White","",89],["Espresso Tonic","",89]] },
      { k: "list", label: "velká", unit: "Kč", items: [["Caffè Latte","",75],["Ochucené Latte","",89],["Iced Latte","",89],["Iced Latte s příchutí","",99]] },
      { k: "box", img: "neco_navic", alt: "něco navíc", foot: "beans", blocks: [
        { k: "list", items: [["příchuť do kávy","","+15"],["ochucená mléčná pěna","","+15"],["ochucená šlehačka","","+20"]] },
        { k: "dots", color: "orange", items: ["pistácie","čokoláda","kokos","karamel","vanilka"] }
      ]}
    ]},
    { id: "kavove-koktejly", nav: "Kávové koktejly", blocks: [
      { k: "head", serif: "kávové koktejly", tip: true, price: "155 Kč", line: true },
      { k: "center", items: [
        ["Espresso Martini","vodka, espresso, kávový likér"],
        ["White Russian","vodka, espresso, kávový likér, mléko / smetana"],
        ["Irish Coffee","whiskey, horká káva, třtinový cukr, šlehačka"],
        ["Caramel Coffee Cocktail","rum, espresso, karamel, mléčná pěna"],
        ["Coconut Espresso Rum","rum, espresso, kokos, led"],
        ["Pistachio Coffee Cream","vodka, espresso, pistácie, smetana"] ] }
    ]},
    { id: "matcha", nav: "Matcha & ledová káva", blocks: [
      { k: "box", title: "MATCHA", blocks: [
        { k: "center", items: [["Matcha Latte","",89],["Coconut Matcha Latte","",99],["Iced Matcha Latte","",99]] }
      ]},
      { k: "head", deco: "LEDOVÁ A OVOCNÁ KÁVA", price: "99 Kč", ribbon: "orange" },
      { k: "center", items: [["Raspberry Iced Latte"],["Coconut Iced Latte"],["Espresso Tonic Citrus"]] }
    ]},
    { id: "nealko", nav: "Nealko", blocks: [
      { k: "head", deco: "NEALKO", color: "orange" },
      { k: "list", unit: ["0,2 l","0,3 l"], items: [["Točená Kofola","",[39,49]],["Vinea Frizzante","",[39,49]],["Tonic Targa","",[39,49]],["Crown Royal","",[39,49]],["Orange Juice","",[39,49]],["Orange Strip","",[39,49]]] },
      { k: "list", unit: "Kč", items: [["Kombucha plech 0,33 l","",59],["Pink Tonic plech","",55],["Lemon Tonic plech","",55],["Evian 0,33 l","",59],["Voda DiVini 0,5 l","",24],["Voda k vínu 0,5 l","",30]] },
      { k: "feature", title: "Nealko koktejl Vinea Frizzante", color: "orange", price: "0,3 l · 99 Kč" }
    ]},
    { id: "limonady", nav: "Limonády", blocks: [
      { k: "head", serif: "domácí limonády", price: "0,3 l · 79 Kč", line: true },
      { k: "dots", items: ["malina","mango","levandule","kokos","banán","jahoda","višeň","růžový grep","citron & limetka","mojito","hugo bezinka","okurka","trnka se skořicí","lesní ovoce"] },
      { k: "head", deco: "PRÉMIOVÉ LIMONÁDY Z PYRÉ", color: "red", price: "0,3 l · 89 Kč", line: true, small: true },
      { k: "dots", color: "orange", items: ["malina","mango","levandule","kokos","banán"] }
    ]},
    { id: "pivo", nav: "Pivo", blocks: [
      { k: "intro", title: "ALKOHOLICKÉ NÁPOJE", text: ["Naši nabídku nápojů neustále doplňujeme.","Zeptejte se obsluhy, co Vám dnes doporučí."], img: "hand_down" },
      { k: "list", label: "pivo", unit: "Kč", items: [["Řemeslné pivo 0,4 l","",69],["Ovocné pivo 0,4 l","",79],["Cider (plech)","",66]] }
    ]},
    { id: "gin", nav: "Gin", blocks: [
      { k: "head", deco: "GIN", dots: true },
      { k: "list", label: "klasický", unit: "4 cl / Kč", items: [["Beefeater London Dry","",120],["Bombay Sapphire","",120],["Tanqueray London Dry","",120]] },
      { k: "list", label: "premium", unit: "4 cl / Kč", items: [["Tanqueray No. Ten","",180],["Hendrick’s","",180],["The Botanist","",180],["Gin Mare","",180],["Citadelle Original","",180]] },
      { k: "head", deco: "GIN ULTRA PREMIUM", color: "red", small: true },
      { k: "center", items: [["Monkey 47","4 cl","250 Kč"]] },
      { k: "img", img: "orange" },
      { k: "head", deco: "FEVER-TREE TONIKY", color: "orange", small: true },
      { k: "list", items: [["Indian Tonic 0,2 l","","85 Kč"],["Mediterranean Tonic 0,2 l","","85 Kč"],["Ginger-Beer 0,2 l","","85 Kč"]] },
      { k: "box", title: "DOPORUČENÉ SERVÍROVÁNÍ", titleColor: "red", tip: true, blocks: [
        { k: "center", items: [["Premium Gin & Tonic","4 cl + Fever-Tree 0,2 l","265 Kč"],["Monkey 47 & Tonic","4 cl + Fever-Tree 0,2 l","335 Kč"]] },
        { k: "head", deco: "GIN COMBO", line: true, small: true },
        { k: "center", items: [["Celá láhev ginu + 8× Fever-Tree Tonic","","2 200 Kč"]] }
      ]}
    ]},
    { id: "rum", nav: "Rum", blocks: [
      { k: "head", deco: "RUM", dots: true },
      { k: "list", label: "klasický", unit: "4 cl / Kč", items: [["Bacardi Carta Blanca","",120],["Havana Club","",120]] },
      { k: "list", label: "premium", unit: "4 cl / Kč", items: [["Havana Club 7 Años","",180],["Diplomático Reserva Exclusiva","",180],["Santos Dumont XO Elixir","",180],["Doorly’s XO Gold","",180],["Appleton Estate Signature","",180]] },
      { k: "list", label: "ultra premium", unit: "4 cl / Kč", items: [["Zacapa 23","",250],["Plantation XO 20th Anniversary","",250],["A. H. Riise","",250],["Další nabídky dle výběru","",250]] }
    ]},
    { id: "whisky", nav: "Whisky", blocks: [
      { k: "head", deco: "WHISKY BOURBON" },
      { k: "list", label: "základ", unit: "4 cl / Kč", items: [["Tullamore D.E.W.","",140],["Jameson","",140],["Johnnie Walker","",150]] },
      { k: "list", label: "premium", unit: "4 cl / Kč", items: [["Chivas Regal","",180],["Glenfiddich 12","",200],["Maker’s Mark","",180],["Woodford Reserve","",200],["Macallan 12","",250]] },
      { k: "list", label: "bourbon / tennessee", unit: "4 cl / Kč", items: [["Jack Daniel’s","",180],["Jack Daniel’s Honey","",180]] }
    ]},
    { id: "vodka", nav: "Vodka", blocks: [
      { k: "head", deco: "VODKA", dots: true },
      { k: "list", label: "základ", unit: "4 cl / Kč", items: [["Finlandia","",120],["Absolut","",130]] },
      { k: "list", label: "premium", unit: "4 cl / Kč", items: [["Ketel One","",120],["Tito’s","",120],["Belvedere","",200],["Grey Goose","",220]] }
    ]},
    { id: "tequila", nav: "Tequila", blocks: [
      { k: "head", deco: "TEQUILA", dots: true },
      { k: "list", label: "základ", unit: "5 cl / Kč", items: [["Olmeca Silver","",120],["Olmeca Gold","",120],["José Cuervo Especial Silver","",130],["José Cuervo Especial Reposado","",140]] },
      { k: "list", label: "premium", unit: "4 cl / Kč", items: [["Patrón Silver","",200],["Casamigos Blanco","",220],["Don Julio Blanco","",230]] }
    ]},
    { id: "vino-bubliny", nav: "Víno & bubliny", blocks: [
      { k: "box", img: "vino_bubliny", alt: "víno a bubliny", foot: "glasses", blocks: [
        { k: "center", items: [["Glera Frizzante 0,18 l","","89 Kč"],["Stracchetto Extra Dry 0,15 l","","80 Kč"],["Karafa 0,5 l / 1 l","","149 Kč / 279 Kč"]] }
      ]},
      { k: "link", text: "Širokou nabídku vín a bublin naleznete ve vinném lístku", to: "vina" }
    ]}
  ]
},
{
  id: "koktejly", label: "Koktejly", theme: "mint",
  cover: { pre: "KOKTEJLY", img: "mixbar" },
  sections: [
    { id: "akce", nav: "Akce", blocks: [
      { k: "promo", flag: "akce!", title: "Čím více objednáte, tím méně zaplatíte!", deal: "3× VIBE COCKTAIL", off: "−20 %" }
    ]},
    { id: "vibe-cocktail", nav: "Vibe Cocktail", blocks: [
      { k: "box", title: "VIBE COCKTAIL", titleColor: "red", price: "119 Kč", ribbon: "navy", blocks: [
        { k: "center", items: [["Stracchetto Frizzante, soda, ovocná příchuť"]] },
        { k: "dots", items: ["růžový grep","mango premium","francouzská levandule","růže z Montmartru","hugo bezinka","višeň","mojito","trnka se skořicí"] }
      ]}
    ]},
    { id: "passion", nav: "Passion", blocks: [
      { k: "center", caps: true, items: [
        ["Tequila Paloma Vibe","tequila blanco, grep, limeta, soda, grepový led, špetka soli"],
        ["Vodka & Passion","Tito’s, maracuja, grep, soda"],
        ["Rum & Passion","bílý nebo zlatý rum, maracuja, limeta, soda, led, máta"],
        ["Tequila & Passion","Don Julio Blanco, maracuja, grep, soda"] ] },
      { k: "price", text: "195 Kč" }
    ]},
    { id: "nealko-koktejl", nav: "Nealko", blocks: [
      { k: "head", deco: "NEALKO", color: "red", tip: true, small: true },
      { k: "center", caps: true, items: [["Ginger Tonic","tonic, zázvorový sirup, citron","89 Kč"]] }
    ]},
    { id: "vlastni-vibe", nav: "Vlastní Vibe", blocks: [
      { k: "head", deco: "VLASTNÍ VIBE", dots: true, sub: "co si můžeš namíchat" },
      { k: "center", caps: true, rules: true, items: [["Vodka","soda, příchuť"],["Gin","tonic, příchuť"],["Rum","soda nebo cola, příchuť"]] },
      { k: "box", title: "VYBER SI PŘÍCHUŤ", titleColor: "orange", price: "155 Kč", ribbon: "dark", blocks: [
        { k: "stack", items: ["růžový grep","mango premium","francouzská levandule","hugo bezinka","růže z Montmartru","višeň","mojito","trnka se skořicí","borůvka","zázvor","karamel","yuzu","citron & limetka","malina","jahoda","lesní ovoce","maracuja","hruška & zázvor"] }
      ]},
      { k: "note", color: "orange", text: "Vše připravujeme z ovocných koncentrátů a sirupů s ovocným podílem 50–95 %." }
    ]},
    { id: "zakladni", nav: "Základní", blocks: [
      { k: "head", deco: "DOPORUČENÉ KOMBINACE", color: "red" },
      { k: "head", spaced: "ZÁKLADNÍ", color: "red", price: "155 Kč", ribbon: "orange", small: true },
      { k: "center", caps: true, items: [
        ["Gin Tonic","gin, tonic, citron / grep"],
        ["Cuba Libre","Bacardi Carta Blanca, cola, limeta"],
        ["Mojito","bílý rum, limeta, máta, cukr, soda"],
        ["Caipirinha","Cachaça, limeta, třtinový cukr, led"],
        ["Skinny Bitch","vodka, limeta, soda"],
        ["Vodka Lemon","vodka, citronová limonáda, citron"],
        ["Vodka Tonic","vodka, tonic, citron"],
        ["Moscow Mule","vodka, čerstvá limeta, ginger beer, máta"],
        ["Kentucky Mule","bourbon, limeta, ginger beer, máta"],
        ["Paloma","tequila, grapefruit, limeta, soda, sůl"],
        ["Pornstar Martini","vodka, maracuja, vanilka, limeta, Prosecco"] ] }
    ]},
    { id: "premium", nav: "Premium", blocks: [
      { k: "head", spaced: "PREMIUM", color: "red", price: "222 Kč", ribbon: "orange", small: true },
      { k: "center", caps: true, items: [
        ["Vodka Rose","Ketel One, růže, citron, soda"],
        ["Vodka Passion","Tito’s, maracuja, grep, soda"],
        ["HIMYM","Tanqueray No. Ten, růžový grep, rozmarýn, Cava Nature Brut"],
        ["Gin Grape Ice","Hendrick’s, Fever-Tree Mediterranean, grep, velká kostka ledu"],
        ["Gin Basil","Hendrick’s, bazalka, citron, Fever-Tree Indian"],
        ["Cuban Ginger","Havana Club 7 Años, ginger, vanilka, bitters"],
        ["Rum Orange","Diplomático Reserva Exclusiva, pomeranč, skořice, soda"],
        ["Rum Passion","Diplomático Reserva Exclusiva, maracuja, grep, soda"],
        ["Tequila Grape","Casamigos Blanco, čerstvý grep, limeta, soda"],
        ["Tequila Passion","Don Julio Blanco, grep, maracuja, soda"] ] },
      { k: "img", img: "cocktail" }
    ]},
    { id: "koktejly-198", nav: "Koktejly", blocks: [
      { k: "head", img: "koktejly", alt: "koktejly", price: "198 Kč", ribbon: "dark" },
      { k: "center", caps: true, items: [
        ["Piña Colada","bílý rum, kokos, ananas, smetana"],
        ["Mango Colada","bílý rum, mango, kokos, smetana"],
        ["Strawberry Colada","bílý rum, jahoda, kokos, smetana"],
        ["Espresso Martini","vodka, kávový likér, espresso"],
        ["Chocolate Coffee","Becherovka, lískooříškový likér, káva, čokoláda"] ] }
    ]},
    { id: "frozen", nav: "S ledovou tříští", blocks: [
      { k: "head", deco: "S LEDOVOU TŘÍŠTÍ", price: "165 Kč", line: true },
      { k: "center", caps: true, items: [
        ["Frozen Mango","vodka, mango, citrus, ledová tříšť"],
        ["Frozen Kokos","vodka, mango, citrus, ledová tříšť"],
        ["Frozen Passion","vodka, maracuja, limeta, ledová tříšť"],
        ["Frozen Strawberry","vodka, jahoda, limeta, ledová tříšť"],
        ["Frozen Daiquiri","bílý rum, limeta, cukr, ledová tříšť"],
        ["Frozen Margarita","tequila, limeta, citrus, ledová tříšť"] ] },
      { k: "intro", title: "NEVÍTE, NA CO MÁTE CHUŤ?", plain: true, text: ["Zeptejte se obsluhy, rádi Vám něco namícháme!"], img: "hand_down" }
    ]}
  ]
},
{
  id: "delikatesy", label: "Delikatesy", theme: "peach",
  cover: { pre: "DELIKATESY", img: "tapas" },
  sections: [
    { id: "syry", photo: "syry", photoAlt: "Sýrové prkénko", nav: "Sýry", blocks: [
      { k: "head", deco: "SÝRY", color: "red", line: true },
      { k: "dish", items: [
        { n: "Základní sýrové prkénko", d: "výběr sýrů dle denní nabídky", rows: [["pro jednoho","129 Kč"],["pro dva","235 Kč"]] },
        { n: "Výběrové sýry dle denní nabídky", rows: [["100 g","159 Kč"]] },
        { n: "Mix výběrových sýrů", d: "výběr sýrů, croissantové chipsy, rozmarýn, čerstvě mletý pepř, extra panenský olivový olej", rows: [["","199 Kč"]] } ] }
    ]},
    { id: "croissanty", photo: "croissanty", photoAlt: "Slané croissanty", nav: "Slané croissanty", blocks: [
      { k: "head", spaced: "SLANÉ CROISSANTY", line: true },
      { k: "list", unit: "Kč", rich: true, items: [
        ["Prosciutto & mozzarella","prosciutto cotto, mozzarella, rukola, olivový olej",109],
        ["Prosciutto crudo & stracchetto","prosciutto cotto, stracchetto, rukola, olivový olej",109],
        ["Salámový","italský salám, pecorino, rukola, olivový olej",109],
        ["Sýrový","pecorino romano, mozzarella, parmigiano reggiano, rukola, olivový olej",109],
        ["Mortadella","mortadella, stracchetto, pistácie, rukola",109],
        ["Dle denní nabídky","podle aktuální dostupnosti",109] ] },
      { k: "img", img: "croissant" },
      { k: "box", title: "MIX DLE PŘÁNÍ", titleColor: "red", tip: true, tipColor: "orange", blocks: [
        { k: "center", items: [["Sestavte si svůj croissant podle chuti!","","119 Kč"]] }
      ]}
    ]},
    { id: "pinsa", photo: "pinsa", photoAlt: "Pinsa", nav: "Pinsa", blocks: [
      { k: "head", img: "pinsa", alt: "pinsa" },
      { k: "list", label: "základ zapečený s mozzarelou", unit: "Kč", rich: true, items: [
        ["Šunková","",350],["Mortadella","",350],["Prosciutto crudo","rukola",350],["Salámový mix","výběr italských salámů",350],
        ["Picante","pikantní salám a olivy",350],["Sýrový mix","výběr sýrů",350],["Sýrová s olivami","výběr sýrů, zelené a černé olivy",350] ] }
    ]},
    { id: "prkenka", photo: "prkenka", photoAlt: "Obložené prkénko", nav: "Prkénka", blocks: [
      { k: "box", title: "OBLOŽENÁ PRKÉNKA", titleColor: "orange", spaced: true, blocks: [
        { k: "note", text: "Prosciutto Cotto, Prosciutto Crudo, Mortadella, italské a španělské salámy, výběrové sýry, olivy, croissantové chipsy" },
        { k: "center", red: true, items: [["Malé — pro jednoho","","199 Kč"],["Velké — pro dva","","379 Kč"]] }
      ]}
    ]},
    { id: "tapas", photo: "tapas", photoAlt: "Tapas a olivy", nav: "Tapas & olivy", blocks: [
      { k: "head", spaced: "TAPAS", line: true, sub: "dle aktuální nabídky" },
      { k: "note", text: "Rádi Vám doporučíme naše aktuální speciality." },
      { k: "head", img: "olivy", alt: "olivy" },
      { k: "list", items: [["miska oliv","černé / zelené / mix","49 Kč"],["jako příloha k pinse","","35 Kč"]], rich: true }
    ]},
    { id: "speciality", photo: "speciality", photoAlt: "Hovězí carpaccio a tatarský biftek", nav: "Speciality", blocks: [
      { k: "head", serif: "SPECIALITY", color: "red", big: true, sub: "dle aktuální nabídky" },
      { k: "dish", spacedNames: true, items: [
        { n: "Hovězí carpaccio Black Angus", d: "rukola, parmigiano reggiano, kapary, extra panenský olivový olej, čerstvě mletý pepř", rows: [["100 g","299 Kč"]] },
        { n: "Tatarský biftek Black Angus", d: "extra panenský olivový olej, kapary, jemně sušená bílá cibule, česnek, čerstvě mletý pepř", small: "Podáváme s česnekovými toasty nebo zapečenými croissantovými chipsy.", rows: [["100 g","349 Kč"]] } ] }
    ]}
  ]
},
{
  id: "vina", label: "Vinný lístek", theme: "cream",
  cover: { pre: "VINNÝ", img: "listek", quote: "Wine is the answer, what was the question?" },
  sections: [
    { id: "o-vinech", nav: "Úvod", blocks: [
      { k: "box", img: "grapes", alt: "", tip: true, blocks: [
        { k: "center", items: [["Každý týden nabízíme vybraná rozmanitá vína na skleničku z vinařství z celého světa."],["Rádi doporučíme víno podle chuti, jídla i nálady."],["Nabídka se může měnit podle aktuální dostupnosti a ročníků."],["U vybraných lahví pomůžeme s dárkovým výběrem nebo láhví domů."]], plain: true }
      ]}
    ]},
    { id: "rozlevana", nav: "Rozlévaná", blocks: [
      { k: "head", deco: "ROZLÉVANÁ VÍNA", line: true, sub2: ["dle aktuální nabídky","VINAŘSTVÍ STRACHOTÍN"] },
      { k: "prices", cols: [["0,18 l","65 Kč"],["0,5 l","149 Kč"],["1,0 l","279 Kč"]] },
      { k: "center", spacedNames: true, items: [["Vinný střik","suchý / polosuchý","0,3 l · 75 Kč"]] },
      { k: "head", img: "bila", alt: "bílá vína" },
      { k: "center", items: [["Irsai Oliver","11 % | polosladké | Maďarsko"],["Grüner Veltliner","12 % | suché | Rakousko"],["Pinot Gris","12 % | suché | Maďarsko"],["Chardonnay","11,5 % | polosuché | Maďarsko"],["Tramín červený","12 % | polosuché | Maďarsko"]] },
      { k: "head", img: "cervena", alt: "červená vína" },
      { k: "center", items: [["Primitivo","13,5 % | suché | Itálie"],["Merlot","13 % | suché | Španělsko"],["Cabernet Sauvignon","13 % | suché | Španělsko"]] }
    ]},
    { id: "stracchetto", nav: "Čepované bubliny", blocks: [
      { k: "box", title: "STRACCHETTO GLERA FRIZZANTE", deco: true, foot: "glasses", blocks: [
        { k: "prices", cols: [["0,18 l","89 Kč"],["0,5 l","175 Kč"],["1,0 l","299 Kč"]], bare: true },
        { k: "note", text: "ITALSKÉ ČEPOVANÉ BUBLINY", caps: true }
      ]},
      { k: "box", title: "NERO PROSECCO", deco: true, badge: "NEALKO", blocks: [
        { k: "note", text: "NEALKO BUBLINY · 0 %", caps: true },
        { k: "list", items: [["0,15 l","","90 Kč"],["0,75 l","","400 Kč"]] }
      ]}
    ]},
    { id: "bila-vina", nav: "Bílá vína", blocks: [
      { k: "head", spaced: "BÍLÁ VÍNA", dotline: true },
      { k: "wine", items: [
        ["Chablis 1er Cru Côte de Lechet 2022", "Domaine Fourrey", "Burgundsko, Francie", ["Chardonnay s výraznou svěžestí a dlouhým závěrem.","Chuťově: minerální, citrusy, bílá broskev. Vhodné k rybám a mořským plodům."], "1 690 Kč"],
        ["Pouilly-Fuissé 1er Cru", "André Goichot", "Burgundsko, Francie", ["Plné a komplexní Chardonnay s tóny zralého ovoce a jemným dotekem dubu.","Chuťově: plné, broskev, oříšky, máslo. Vhodné k drůbeži a krémovým jídlům."], "2 490 Kč"],
        ["Châteauneuf-du-Pape Blanc 2023", "Domaine des Sénéchaux", "Rhône, Francie", ["Výrazně aromatické víno s krásnou strukturou a dlouhým závěrem.","Chuťově: aromatické, hruška, med, byliny. Vhodné k rybám, drůbeži a jemné kuchyni."], "2 590 Kč"],
        ["Riesling Smaragd 2022", "Weingut Eder", "Wachau, Rakousko", ["Koncentrovaný a elegantní Riesling s tóny meruňky a výraznou mineralitou.","Vhodné k rybám a asijské kuchyni."], "1 390 Kč"],
        ["Sangiovese Bianco Toscana", "Capanna", "Toskánsko, Itálie", ["Svěží a originální bílá varianta Sangiovese s tóny bílého ovoce a květin.","Vhodné k těstovinám, risottu a lehkým jídlům."], "1 290 Kč"] ] }
    ]},
    { id: "cervene-vino", nav: "Červené víno", blocks: [
      { k: "head", spaced: "ČERVENÉ VÍNO", dotline: true },
      { k: "wine", items: [
        ["Perricone Talia BIO", "Tenute Mokarta", "Sicílie, Itálie", ["Plné a sametové červené víno s tóny tmavého ovoce a koření. BIO produkce.","Chuťově: plné, tmavé ovoce, koření. Vhodné k hovězímu, zvěřině a těstovinám."], "739 Kč"] ] },
      { k: "note", text: "DALŠÍ VÍNA DLE AKTUÁLNÍ NABÍDKY", caps: true }
    ]},
    { id: "moravska", nav: "Moravská", blocks: [
      { k: "head", spaced: "MORAVSKÁ VÍNA", line: true },
      { k: "wine", compact: true, items: [
        ["Krásná Hora", "", "biodynamické vinařství", ["Ryzlink vlašský, Chardonnay, Sauvignon, Rulandské šedé, Pinot"], "590 Kč"],
        ["Nestarec Natural Selection", "", "organické a biodynamické vinařství", ["Vesper, Dopamin, Umami"], "890 Kč"],
        ["Vinařství Kubík", "", "", ["Sauvignon, Tramín červený, Chardonnay, Rulandské šedé, Veltlínské zelené, Ryzlink vlašský, Ryzlink rýnský, Frankovka, Pálava, Merlot, Frizzante bílé, Cuvée Freshuvka"], "490 Kč"],
        ["Vinařství Ilias", "", "organická vína", ["Pinot Gris (Rulandské šedé), Ryzlink vlašský, Veltlínské zelené, Cabernet Rossé"], "590 Kč"],
        ["Pet Nat 2025", "", "", [], "890 Kč"] ] }
    ]},
    { id: "sumiva", nav: "Šumivá & prosecco", blocks: [
      { k: "head", spaced: "ŠUMIVÁ VÍNA", img2: "cava", spaced2: "& PROSECCO" },
      { k: "list", unit: "Kč", items: [
        ["Stracchetto Extra Dry","",360],["La Cavea Prosecco Brut","",390],["Prosecco Andrea Biasiotto","",390],["Prosecco Andrea Biasiotto Rosado","",390],["Prosecco Andrea Biasiotto bez cukru","",390],["Prosecco Rosé Stracchetto","",390],["Gran Cuvée Spumante La Casada","",260],["Prosecco DOC Spumante Brut Le Rive","",590],["Prosecco Emma DOCG","",690],["Prosecco Valdobbiadene DOCG Campo del Passo","",550],
        ["Spumante Pinot Bianco Brut","",550],["Otello Ceci Color (Lambrusco)","",550],["Prosecco Valdobbiadene DOCG","",550],["Follador Zero Sugar","",650],["Follador Brut","",650],["Prosecco DOC Brut Le Rive","",550],["Prosecco Brut Emma DOCG","",550],["Crémant de Limoux Blanc / Rosé","",550],["Benito Escudero Nature Brut","",690],["Becquer Semi Seco","",550],["Varias Genui Brut Nature","",390],["Varias Genui Brut","",390],["Berral Miró Brut Nature Reserva","",550],["Becquer Rosado Brut","",550] ] },
      { k: "note", color: "red", text: "NABÍDKA VÍN SE MŮŽE LIŠIT", caps: true }
    ]},
    { id: "champagne", nav: "Champagne", blocks: [
      { k: "head", spaced: "CHAMPAGNE", dotline: true },
      { k: "wine", items: [
        ["André Clouet", "", "Grande Réserve • Grand Cru • Brut • 100 % Pinot Noir", ["Plné, elegantní Champagne s tóny citrusů, ovoce a briošky."], "2 290 Kč"],
        ["Joseph Perrier", "", "Cuvée Royale • Brut", ["Svěží a elegantní Champagne s tóny jablka, hrušky a broskve."], "2 590 Kč"],
        ["Franck Bonville", "", "Unisson • Grand Cru • Blanc de Blancs • 100 % Chardonnay", ["Jemné, krémové Champagne s tóny citrusů, briošky a mandlí."], "3 290 Kč"],
        ["Marguet", "", "Shaman 22 • Grand Cru • Extra Brut", ["Výrazné a suché Champagne s tóny citrusů, koření a minerality."], "3 490 Kč"],
        ["Benoît Lahaye", "", "Blanc de Noirs • Grand Cru • 100 % Pinot Noir", ["Komplexní, minerální Champagne s ovocem a dlouhým svěžím závěrem."], "3 490 Kč"] ] }
    ]},
    { id: "italie", nav: "Itálie", blocks: [
      { k: "head", deco: "ITÁLIE", color: "red", line: true },
      { k: "list", label: "italská vína · oblast", unit: "Kč", rich: true, items: [
        ["Pinot Grigio Santa Sofia DOC","Veneto",390],["Sangiovese Bianco Duca di Saragnano","Toscana",490],["Chardonnay Duca di Saragnano","Toscana",450],["Pinot Grigio Garda","Veneto",350],["Bardolino DOC Cantina del Garda","Veneto",390],["Aglianico Primitivo","Puglia",450] ] }
    ]},
    { id: "spanelsko", nav: "Španělsko", blocks: [
      { k: "head", deco: "ŠPANĚLSKO", color: "red", line: true },
      { k: "list", label: "španělská vína · oblast", unit: "Kč", rich: true, items: [
        ["Las Camelias Sauvignon Blanc","Vino de la Tierra de Castilla",390],["Pardina Las Guardias","Vino de la Tierra de Castilla",250],["Rioja Heredad Bienzoval Blanco","Rioja DOCa",350],["Rioja Heredad Bienzoval Rosado","Rioja DOCa",350],["Las Camelias Cabernet Sauvignon","Vino de la Tierra de Castilla",390],["Tempranillo Las Guardias","Vino de la Tierra de Castilla",390],["Rioja Heredad Bienzoval Tinto","Rioja DOCa",350] ] }
    ]},
    { id: "family-gil", nav: "Family Gil", blocks: [
      { k: "head", img: "family", alt: "Family Gil", big: true },
      { k: "list", label: "španělská vína · oblast", unit: "Kč", rich: true, items: [
        ["Pedrera Blanco 2023","Jumilla DO",350],["Juan Gil Moscatel 2023","Jumilla DO",350],["Disfrutando 0 % Espumoso","Jumilla DO",370,"NEALKO"],["Vidilla 2023","Jumilla DO",330],["Shaya Verdejo ECO 2023","Rueda DO",490],["Arindo Verdejo 2022","Rueda DO",350],["Disfrutando 0 % Rosé","Jumilla DO",390,"NEALKO"],["Honoro Vera Rosado 2023","Jumilla DO",390],["El Vigia de la Atalaya 2023","Almansa DO",390],["Alto De Rana 2022","Yecla DO",359],
        ["Juan Gil Etiqueta Azul 2022","Jumilla DO",650],["Al Amat 2022","Almansa DO",359],["Aya 2022 Caja","Jumilla DO",300],["Salto de Rana 2022 ECO","Jumilla DO",390],["Honoro Vera Garnacha 2022","Valencia DO",350],["Comoloco Bajo Histaminas ECO","Valencia DO",330],["Juan Gil Etiqueta Plata 2021 ECO","Jumilla DO",450],["La Atalaya 2021","Almansa DO",350],["Rosario Vera 2019","Jumilla DO",450],["Atteca 2021","Calatayud DO",450],["Tridente Tempranillo 2020","Castilla y León",500],["La Atalaya del Camino","Almansa DO",890],["Alaya Tierra","Almansa DO","1 200"],["Godina","Campo de Borja DO","1 250"],["Biloba de Vera","Rioja DOCa","1 500"],["Clar del Bosc 2020","Montsant DO","1 900"],
        ["Atteca Armas 2021","Calatayud DO","1 900"],["Morca","D.O. Campo de Borja","2 100"],["Rejón 2020","Jumilla DO","2 190"],["Juan Gil Blue Label 2018","Jumilla DO","3 700"] ] }
    ]},
    { id: "evropska", nav: "Evropská vína", blocks: [
      { k: "head", deco: "EVROPSKÁ VÍNA", color: "red", sub: "Francie | Itálie | Rakousko | Německo" },
      { k: "list", label: "oblast", unit: "Kč", rich: true, items: [
        ["Chardonnay Luc Pirlet","Francie – Languedoc",469],["Sauvignon Luc Pirlet","Francie – Languedoc",469],["Toscana Bianco Sangiovese","Itálie – Toscana",469],["Michel Lynch Sauvignon Blanc","Francie – Bordeaux",649],["Grüner Veltliner Weingut Kellner","Rakousko – Weinviertel",519],["Riesling trocken Mineralgestein Weingut Manz","Německo – Rheinhessen",698],["Pinot Grigio Antichello Santa Sofia","Itálie – Veneto",471],
        ["Rivaner Weingut Gentsch","Německo – Mosel",626],["Petit Chablis Domaine Fourrey","Francie – Bourgogne","1 107"],["Primitivo Rosé Paolo Leo","Itálie – Puglia",469],["Syrah Rosé Luc Pirlet","Francie – Languedoc",469],["Toscana Sangiovese Duca di Saragnano","Itálie – Toscana",469],["Pinot Noir Reserve Luc Pirlet","Francie – Languedoc",649] ] },
      { k: "thanks", title: "DĚKUJEME,", text: "že podporujete kvalitní vína & atmosféru našeho klubu." }
    ]}
  ]
}
];
