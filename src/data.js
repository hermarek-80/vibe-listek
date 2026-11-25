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
      ]},
      { k: "note", text: "Ceny lahví jsou uvedeny za láhev 0,75 l, není-li uvedeno jinak." }
    ]},
    { id: "vyber-vibe", nav: "Výběr Vibe", blocks: [
      { k: "head", deco: "VÝBĚR VIBE", color: "red", sub: "10 vín s příběhem", line: true },
      { k: "wine", items: [
        ["Chablis 1er Cru Côte de Lechet 2022", "Domaine Fourrey", "Burgundsko, Francie", ["Chardonnay s výraznou svěžestí a dlouhým závěrem.", "Chuť: citrusy / bílé ovoce / mineralita", "Vhodné k rybám a mořským plodům."], "1 690 Kč"],
        ["Châteauneuf-du-Pape Blanc 2023", "Domaine des Sénéchaux", "Rhône, Francie", ["Výrazně aromatické víno s krásnou strukturou a dlouhým závěrem.", "Chuť: bílá broskev / bylinky / květy", "Vhodné k rybám, drůbeži a jemné kuchyni."], "2 590 Kč"],
        ["Riesling Smaragd 2022", "Weingut Eder", "Wachau, Rakousko", ["Koncentrovaný a elegantní Riesling s výraznou mineralitou.", "Chuť: meruňka / citrus / minerální závěr", "Vhodné k rybám a asijské kuchyni."], "1 390 Kč"],
        ["André Clouet Grande Réserve Grand Cru Brut", "André Clouet", "Champagne, Francie", ["Plné, elegantní Champagne ze 100 % Pinot Noir.", "Chuť: zralé jablko / brioška / citrus"], "2 290 Kč"],
        ["Franck Bonville Unisson Grand Cru Blanc de Blancs", "Franck Bonville", "Champagne, Francie", ["Jemné, krémové Champagne ze 100 % Chardonnay.", "Chuť: citrusy / brioška / mandle"], "3 290 Kč"],
        ["Alaya Tierra", "Bodegas Atalaya", "Almansa, Španělsko", ["Chuť: černé ovoce / síla / dlouhý závěr"], "1 200 Kč"],
        ["Juan Gil Blue Label 2018", "Juan Gil", "Jumilla, Španělsko", ["Chuť: tmavé ovoce / koření / dub"], "3 700 Kč"],
        ["Colle al Vento Quatro Venti Primitivo Rosato 2025", "Cantine Andreas Mazzei", "Salento, Itálie", ["Chuť: jahody / maliny / svěžest"], "590 Kč"],
        ["Grans-Fassian Trittenheimer Apotheke GG 2019", "Grans-Fassian", "Mosel, Německo", ["Chuť: broskev / citrus / břidlice"], "2 490 Kč"],
        ["Guido Manara Rosso Veneto IGP 2018", "Manara", "Veneto, Itálie", ["Chuť: švestka / třešeň / kakao / koření"], "2 290 Kč"] ] }
    ]},
    { id: "velka-bila", nav: "Velká bílá", blocks: [
      { k: "head", img: "bila", alt: "bílá vína", sub: "velká bílá vína" },
      { k: "wine", items: [
        ["Pouilly-Fuissé 1er Cru", "André Goichot", "Burgundsko, Francie", ["Plné a komplexní Chardonnay s tóny zralého ovoce a jemným dotekem dubu.", "Chuť: broskev / oříšky / máslo", "Vhodné k drůbeži a krémovým jídlům."], "2 490 Kč"],
        ["Sangiovese Bianco Toscana", "Capanna", "Toskánsko, Itálie", ["Svěží a originální bílá varianta Sangiovese s tóny bílého ovoce a květin.", "Vhodné k těstovinám, risottu a lehkým jídlům."], "1 290 Kč"] ] }
    ]},
    { id: "cervena", nav: "Červená", blocks: [
      { k: "head", img: "cervena", alt: "červená vína", sub: "vybraná červená vína" },
      { k: "wine", items: [
        ["Perricone Talia BIO", "Tenute Mokarta", "Sicílie, Itálie", ["Plné a sametové červené víno z BIO produkce.", "Chuť: tmavé ovoce / koření", "Vhodné k hovězímu, zvěřině a těstovinám."], "739 Kč"] ] }
    ]},
    { id: "moravska", nav: "Moravská & naturální", blocks: [
      { k: "head", spaced: "MORAVSKÁ", spaced2: "A NATURÁLNÍ VÍNA", line: true },
      { k: "wine", compact: true, items: [
        ["Krásná Hora", "", "biodynamické vinařství · Morava", ["Výběr odrůd: Ryzlink vlašský, Chardonnay, Sauvignon, Rulandské šedé, Pinot"], "590 Kč"],
        ["Nestarec Natural Selection", "Milan Nestarec", "organické a biodynamické vinařství · Morava", ["Výběr: Vesper, Dopamin, Umami"], "890 Kč"],
        ["Vinařství Kubík", "", "Morava", ["Výběr odrůd: Sauvignon, Tramín červený, Chardonnay, Rulandské šedé, Veltlínské zelené, Ryzlink vlašský, Ryzlink rýnský, Frankovka, Pálava, Merlot, Frizzante bílé, Cuvée Freshuvka"], "490 Kč"],
        ["Vinařství Ilias", "", "organická vína · Morava", ["Výběr odrůd: Pinot Gris (Rulandské šedé), Ryzlink vlašský, Veltlínské zelené, Cabernet Rosé"], "590 Kč"],
        ["Pet Nat 2025", "", "Morava", [], "890 Kč"] ] }
    ]},
    { id: "bubliny", nav: "Prosecco & bubliny", blocks: [
      { k: "head", spaced: "PROSECCO", img2: "cava", spaced2: "A DALŠÍ BUBLINY" },
      { k: "list", unit: "Kč", rich: true, items: [
        ["Stracchetto Extra Dry","Itálie",360],["La Cavea Prosecco Brut","Itálie",390],["Prosecco Andrea Biasiotto","Itálie",390],["Prosecco Andrea Biasiotto Rosado","Itálie",390],["Prosecco Andrea Biasiotto bez cukru","Itálie",390],["Prosecco Rosé Stracchetto","Itálie",390],
        ["Gran Cuvée Spumante La Casada","Itálie",260],["Prosecco DOC Spumante Brut Le Rive","Itálie",590],["Prosecco Emma DOCG","Itálie",690],["Prosecco Valdobbiadene DOCG Campo del Passo","Itálie",550],["Spumante Pinot Bianco Brut","Itálie",550],["Otello Ceci Color (Lambrusco)","Itálie",550],
        ["Prosecco Valdobbiadene DOCG","Itálie",550],["Follador Zero Sugar","Follador · Itálie",650],["Follador Brut","Follador · Itálie",650],["Prosecco DOC Brut Le Rive","Le Rive · Itálie",550],["Prosecco Brut Emma DOCG","Itálie",550],["Crémant de Limoux Blanc / Rosé","Francie",550],
        ["Benito Escudero Nature Brut","Familia Escudero · Španělsko",690],["Becquer Semi Seco","Familia Escudero · Španělsko",550],["Varias Genui Brut Nature","Varias · Španělsko",390],["Varias Genui Brut","Varias · Španělsko",390],["Berral Miró Brut Nature Reserva","Berral i Miró · Španělsko",550],["Becquer Rosado Brut","Familia Escudero · Španělsko",550] ] }
    ]},
    { id: "champagne", nav: "Champagne", blocks: [
      { k: "head", spaced: "CHAMPAGNE", dotline: true },
      { k: "wine", items: [
        ["Joseph Perrier Cuvée Royale Brut", "Joseph Perrier", "Champagne, Francie", ["Svěží a elegantní Champagne s tóny jablka, hrušky a broskve."], "2 590 Kč"],
        ["Marguet Shaman 22 Grand Cru Extra Brut", "Marguet", "Champagne, Francie", ["Výrazné a suché Champagne s tóny citrusů, koření a minerality."], "3 490 Kč"],
        ["Benoît Lahaye Blanc de Noirs Grand Cru", "Benoît Lahaye", "Champagne, Francie", ["Komplexní, minerální Champagne ze 100 % Pinot Noir s ovocem a dlouhým svěžím závěrem."], "3 490 Kč"] ] },
      { k: "note", text: "André Clouet a Franck Bonville najdete ve Výběru Vibe." }
    ]},
    { id: "italie", nav: "Itálie", blocks: [
      { k: "head", deco: "ITALSKÁ VÍNA", color: "red", line: true },
      { k: "list", unit: "Kč", rich: true, items: [
        ["Pinot Grigio Santa Sofia DOC","Santa Sofia · Veneto, Itálie",390],["Sangiovese Bianco Duca di Saragnano","Duca di Saragnano · Toskánsko, Itálie",490],["Chardonnay Duca di Saragnano","Duca di Saragnano · Toskánsko, Itálie",450],["Pinot Grigio Garda","Veneto, Itálie",350],["Bardolino DOC Cantina del Garda","Cantina del Garda · Veneto, Itálie",390],["Aglianico Primitivo","Apulie, Itálie",450] ] }
    ]},
    { id: "spanelsko", nav: "Španělsko", blocks: [
      { k: "head", deco: "ŠPANĚLSKÁ VÍNA", color: "red", line: true },
      { k: "list", unit: "Kč", rich: true, items: [
        ["Las Camelias Sauvignon Blanc","Castilla, Španělsko",390],["Pardina Las Guardias","Castilla, Španělsko",250],["Rioja Heredad Bienzoval Blanco","Heredad Bienzoval · Rioja, Španělsko",350],["Rioja Heredad Bienzoval Rosado","Heredad Bienzoval · Rioja, Španělsko",350],["Las Camelias Cabernet Sauvignon","Castilla, Španělsko",390],["Tempranillo Las Guardias","Castilla, Španělsko",390],["Rioja Heredad Bienzoval Tinto","Heredad Bienzoval · Rioja, Španělsko",350] ] }
    ]},
    { id: "family-gil", nav: "Gil Family Estates", blocks: [
      { k: "head", img: "family", alt: "Family Gil", big: true, sub: "Španělsko – Gil Family Estates" },
      { k: "list", unit: "Kč", rich: true, items: [
        ["Pedrera Blanco 2023","Jumilla, Španělsko",350],["Juan Gil Moscatel 2023","Juan Gil · Jumilla, Španělsko",350],["Disfrutando 0 % Espumoso","Jumilla, Španělsko",370,"NEALKO"],["Vidilla 2023","Jumilla, Španělsko",330],["Shaya Verdejo ECO 2023","Shaya · Rueda, Španělsko",490],["Arindo Verdejo 2022","Rueda, Španělsko",350],["Disfrutando 0 % Rosé","Jumilla, Španělsko",390,"NEALKO"],
        ["Honoro Vera Rosado 2023","Honoro Vera · Jumilla, Španělsko",390],["El Vigia de la Atalaya 2023","Bodegas Atalaya · Almansa, Španělsko",390],["Alto De Rana 2022","Yecla, Španělsko",359],["Juan Gil Etiqueta Azul 2022","Juan Gil · Jumilla, Španělsko",650],["Al Amat 2022","Almansa, Španělsko",359],["Aya 2022 Caja","Jumilla, Španělsko",300],["Salto de Rana 2022 ECO","Jumilla, Španělsko",390],
        ["Honoro Vera Garnacha 2022","Honoro Vera · Valencia, Španělsko",350],["Comoloco Bajo Histaminas ECO","Valencia, Španělsko",330],["Juan Gil Etiqueta Plata 2021 ECO","Juan Gil · Jumilla, Španělsko",450],["La Atalaya 2021","Bodegas Atalaya · Almansa, Španělsko",350],["Rosario Vera 2019","Jumilla, Španělsko",450],["Atteca 2021","Atteca · Calatayud, Španělsko",450],["Tridente Tempranillo 2020","Tridente · Castilla y León, Španělsko",500],
        ["La Atalaya del Camino","Bodegas Atalaya · Almansa, Španělsko",890],["Godina","Campo de Borja, Španělsko","1 250"],["Biloba de Vera","Rioja, Španělsko","1 500"],["Clar del Bosc 2020","Montsant, Španělsko","1 900"],["Atteca Armas 2021","Atteca · Calatayud, Španělsko","1 900"],["Morca","Campo de Borja, Španělsko","2 100"],["Rejón 2020","Jumilla, Španělsko","2 190"] ] }
    ]},
    { id: "evropsky-vyber", nav: "Evropský výběr", blocks: [
      { k: "head", deco: "EVROPSKÝ VÝBĚR", color: "red", sub: "Francie | Itálie | Rakousko | Německo" },
      { k: "list", unit: "Kč", rich: true, items: [
        ["Chardonnay Luc Pirlet","Luc Pirlet · Languedoc, Francie",469],["Sauvignon Luc Pirlet","Luc Pirlet · Languedoc, Francie",469],["Toscana Bianco Sangiovese","Toskánsko, Itálie",469],["Michel Lynch Sauvignon Blanc","Michel Lynch · Bordeaux, Francie",649],["Grüner Veltliner Weingut Kellner","Weingut Kellner · Weinviertel, Rakousko",519],["Riesling trocken Mineralgestein Weingut Manz","Weingut Manz · Rheinhessen, Německo",698],["Pinot Grigio Antichello Santa Sofia","Santa Sofia · Veneto, Itálie",471],
        ["Rivaner Weingut Gentsch","Weingut Gentsch · Mosel, Německo",626],["Petit Chablis Domaine Fourrey","Domaine Fourrey · Burgundsko, Francie","1 107"],["Primitivo Rosé Paolo Leo","Paolo Leo · Apulie, Itálie",469],["Syrah Rosé Luc Pirlet","Luc Pirlet · Languedoc, Francie",469],["Toscana Sangiovese Duca di Saragnano","Duca di Saragnano · Toskánsko, Itálie",469],["Pinot Noir Reserve Luc Pirlet","Luc Pirlet · Languedoc, Francie",649] ] }
    ]},
    { id: "rozlevana", nav: "Rozlévaná", blocks: [
      { k: "head", deco: "ROZLÉVANÁ VÍNA", line: true, sub2: ["dle aktuální nabídky","VINAŘSTVÍ STRACHOTÍN"] },
      { k: "prices", cols: [["0,18 l","65 Kč"],["0,5 l","149 Kč"],["1 l","279 Kč"]] },
      { k: "center", spacedNames: true, items: [["Vinný střik","suchý / polosuchý","0,3 l · 75 Kč"]] },
      { k: "head", img: "bila", alt: "bílá vína" },
      { k: "center", items: [["Irsai Oliver","Maďarsko · 11 % · polosladké"],["Grüner Veltliner","Rakousko · 12 % · suché"],["Pinot Gris","Maďarsko · 12 % · suché"],["Chardonnay","Maďarsko · 11,5 % · polosuché"],["Tramín červený","Maďarsko · 12 % · polosuché"]] },
      { k: "head", img: "cervena", alt: "červená vína" },
      { k: "center", items: [["Primitivo","Itálie · 13,5 % · suché"],["Merlot","Španělsko · 13 % · suché"],["Cabernet Sauvignon","Španělsko · 13 % · suché"]] }
    ]},
    { id: "cepovane", nav: "Čepované bubliny", blocks: [
      { k: "box", title: "STRACCHETTO GLERA FRIZZANTE", deco: true, foot: "glasses", blocks: [
        { k: "prices", cols: [["0,18 l","89 Kč"],["0,5 l","175 Kč"],["1 l","299 Kč"]], bare: true },
        { k: "note", text: "ITALSKÉ ČEPOVANÉ BUBLINY", caps: true }
      ]},
      { k: "box", title: "NERO PROSECCO 0 %", deco: true, badge: "NEALKO", blocks: [
        { k: "note", text: "NEALKO BUBLINY", caps: true },
        { k: "list", items: [["0,15 l","","90 Kč"],["0,75 l","","400 Kč"]] }
      ]},
      { k: "thanks", title: "DĚKUJEME,", text: "že podporujete kvalitní vína & atmosféru našeho klubu." }
    ]}
  ]
}
];
