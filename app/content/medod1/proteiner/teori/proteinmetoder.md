---
title: Metoder for rensing og analyse av proteiner
summary: Celleekstrakt og sentrifugering, utsalting og dialyse, gelfiltrering, ionebytte- og affinitetskromatografi, SDS-PAGE, isoelektrisk fokusering, 2D-PAGE, massespektrometri, antistoffmetoder (ELISA, Western, immunfluorescens) og strukturbestemmelse.
order: 7
tags: [proteinrensing, gelfiltrering, ionebytte, affinitetskromatografi, SDS-PAGE, isoelektrisk fokusering, massespektrometri, ELISA, Western blot]
related:
  - proteiner/teori/aminosyrer
  - proteiner/teori/proteinstruktur
  - proteiner/aminosyrer/tryptofan
  - proteiner/aminosyrer/cystein
  - proteiner/teori/folding-og-modifisering
sources:
  - file: medod1/material/proteiner/proteiner-3-am-2026--8203206.pdf
    pages: "3-34"
  - file: medod1/exercises/kollokvieoppgaver-enzymologi-og-enzym-2025--7794057.pdf
    pages: "2"
---

## Hvorfor og hvorfra

For å karakterisere et protein må det **isoleres** fra andre proteiner og makromolekyler. Kilde: naturlig (organ/vev, cellekultur, bakterier – proteinet utgjør ofte < 1 %) eller **rekombinant** (overuttrykt i E. coli, gjær-, insekt- eller pattedyrceller – kan bli det mest uttrykte proteinet).

Egenskaper som utnyttes: **løselighet, ladning, størrelse og bindingsaffinitet**. Renseprosedyren må optimaliseres for hvert protein; rekkefølge og antall trinn varierer.

## Første trinn

1. **Celleekstrakt:** bryt cellemembranen (sonikering, mekanisk skjærkraft, milde detergenter) → homogenat med alle cellekomponenter.
2. **Differensialsentrifugering** ved økende hastighet: tunge komponenter (kjerner, organeller) i pellet, lette i supernatant. Løselige proteiner finnes vanligvis i cytosol.
3. **Identifiser fraksjonen** med målproteinet ved aktivitetsmåling (enzymer) eller spesifikke antistoffer.

**Utsalting (salting out):** de fleste proteiner blir mindre løselige ved høy saltkonsentrasjon, og toleransen varierer (fibrinogen felles ved 0,8 M, serumalbumin ved 2,4 M ammoniumsulfat). Ved lav saltkonsentrasjon øker løseligheten (salting in).

**Dialyse:** semipermeabel membran – salt og små molekyler diffunderer ut, proteiner holdes igjen. (Brukt av Anfinsen for å fjerne urea.)

## Kolonnekromatografi

| Metode | Skiller på | Prinsipp | Eluering |
|---|---|---|---|
| **Gelfiltrering** (størrelseseksklusjon) | **Størrelse** | Porøse kuler: små proteiner går inn i porene og bruker lengre tid | **Største først**, minste sist |
| **Ionebytte** | **Ladning** | Ladde grupper på kulene fanger proteiner med motsatt ladning | Økende **saltkonsentrasjon** (saltioner konkurrerer); høyere nettoladning → sterkere binding |
| **Affinitet** | **Spesifikk binding** | Kuler med ligand målproteinet binder (f.eks. glukose) | Tilsett **fri ligand** |

### Ionebytte i detalj

- **Kationbytter** = negativt ladd matrise (f.eks. karboksymetyl, CM) → binder **positive** (kationiske) proteiner.
- **Anionbytter** = positivt ladd matrise (f.eks. dietylaminoetyl, DEAE) → binder **negative** (anioniske) proteiner.
- Ladningen bestemmes av **pI og bufferens pH**: pH > pI → negativ; pH < pI → positiv; pH = pI → netto 0 (binder ikke).

:::eksempel[Myoglobin (pI 7,29)]
Buffer pH 8 → pH > pI → myoglobin er **negativt** → binder **anionbytter**.
Buffer pH 6 → pH < pI → **positivt** → binder **kationbytter**.
:::

:::eksempel[Valg av metode (forelesningen)]
A: pI 9, 14 kDa (monomer). B: pI 7, 17 kDa (monomer). C: pI 6, 208 kDa (tetramer av 52 kDa).

- **A og B** (nesten lik størrelse, ulik pI): ionebytte. Ved pH 7 er A positiv (binder kationbytter), B nøytral.
- **B og C** (svært ulik størrelse): gelfiltrering (C kommer først). Ved pH 7 er C negativ (binder anionbytter), B binder ingen.
- **A og C**: begge virker; ved pH 7 binder A kationbytter og C anionbytter.
:::

## Elektroforese

Ladde molekyler vandrer i et elektrisk felt gjennom en porøs **polyakrylamidgel**:

$$v = \frac{E\,z}{f}$$

v = migrasjonshastighet, E = feltstyrke, z = nettoladning, f = friksjonskoeffisient (øker med størrelse og viskositet).

### SDS-PAGE

- **SDS** (natriumdodekylsulfat, anionisk detergent) **denaturerer** og binder ca. **ett SDS per to aminosyrer** → alle proteiner får **samme ladning-til-masse-forhold** og blir negative.
- **β-merkaptoetanol** bryter disulfidbroer.
- Proteinene vandrer mot **+ (anoden)** og skilles **kun på kjedelengde/størrelse**: **minste går lengst**, største kortest. log(masse) er lineær mot relativ mobilitet.
- Farges med Coomassie Blue.
- Viser **subenheter**: tetrameren C (208 kDa) gir ett bånd på **52 kDa**.
- Uten SDS: proteiner skilles på både ladning og størrelse.

:::husk
**Gelfiltrering + SDS-PAGE sammen gir kvartærstruktur:** gelfiltrering måler det native proteinet (208 kDa), SDS-PAGE subenhetene (52 kDa) → 208/52 = tetramer.
:::

### Isoelektrisk fokusering (IEF)

- Skiller **ikke-denaturerte** proteiner etter **pI** i en **pH-gradient** laget med **amfolytter** (molekyler som kan virke både som syre og base).
- pH < pI → positiv → vandrer mot **katoden (−)**; pH > pI → negativ → mot **anoden (+)**; ved pH = pI er z = 0 → **v = 0, proteinet stopper**.
- pI for proteiner ligger typisk mellom 3 og 10.

### 2D-elektroforese (2D-PAGE)

**IEF i første dimensjon + SDS-PAGE i andre** → hvert protein blir en flekk bestemt av pI og Mw. Brukes til å sammenligne biologiske tilstander (f.eks. normal tarmslimhinne vs kolorektal tumor → biomarkører). Gir ikke identiteten – den bestemmes med **MS eller antistoffer**.

## Måle rensegrad

Etter hvert trinn: total protein, total aktivitet, **spesifikk aktivitet** (enheter/mg), **utbytte (%)** og **rensefaktor**. Total aktivitet og utbytte synker, mens spesifikk aktivitet og renhet øker. Aktivitetsmåling krever at proteinet er et enzym.

:::eksempel[Rensetabellen i forelesningen]
Homogenat: 15 000 mg protein, 150 000 U → spesifikk aktivitet 150 000/15 000 = **10 U/mg** (utbytte 100 %, rensefaktor 1).
Etter affinitetskromatografi: 1,75 mg, 52 500 U → 52 500/1,75 = **30 000 U/mg**.
Utbytte = 52 500/150 000 = **35 %**. Rensefaktor = 30 000/10 = **3000**.
:::

## Massespektrometri (MS)

- Måler **masse/ladning (m/z)** svært nøyaktig og følsomt – detekterer proteiner i svært små mengder i komplekse blandinger.
- MALDI-TOF: protein ioniseres med laser → ionene akselereres i et elektrisk felt → **time-of-flight**: lettest/minst ion når detektoren først.
- Spekteret er et **«fingeravtrykk»** som sammenlignes med databaser for å identifisere proteinet.

## Antistoffbaserte metoder

- Et **antistoff** (IgG: 2 tunge + 2 lette kjeder, disulfidbroer, Fab-domener med bindingsseter, Fc-domene) gjenkjenner en **epitop** på antigenet med komplementær form.
- **Polyklonale** antistoffer: blanding av ulike antistoffer mot **ulike epitoper** på samme antigen. **Monoklonale**: identiske antistoffer mot **én epitop**.

| Metode | Hva den gjør |
|---|---|
| **ELISA** | Antigen festet i brønn → spesifikt antistoff → enzymkoblet sekundærantistoff → substrat gir farget produkt; fargemengde ∝ mengde antistoff (f.eks. HIV-test) |
| **Western blot** | SDS-PAGE → overføring til membran → primært antistoff → enzymkoblet sekundært antistoff → deteksjon. Identifiserer et protein i en blanding, viser **størrelsen** og kan kvantifiseres med kontroller |
| **Immunfluorescens / immunhistokjemi** | Fluorescensmerkede antistoffer viser **lokalisering** (og mengde) av proteiner i celler/vev |

## Strukturbestemmelse (kort)

- **Røntgenkrystallografi:** krever proteinkrystaller (vanskelig, særlig for membranproteiner).
- **NMR:** i løsning; krever merking med ¹³C/¹⁵N; begrenset av proteinstørrelse.
- **Kryo-EM:** millioner av partikkelbilder (2D → 3D); Nobelpris 2017.
- **AlphaFold:** KI-prediksjon av struktur fra sekvens; Nobelpris 2024. Strukturer lagres i Protein Data Bank (PDB).

:::eksamen
Gjengangere: gelfiltrering – **største eluerer først** fordi de går utenom porene (rangér etter Mw; porer for store → alt eluerer samtidig). H2024: av albumin (68,5 kDa), RNA-polymerase (450 kDa), ribonuklease (13,7 kDa) og immunglobulin (145 kDa) eluerer **immunglobulin som nummer to**. V2026 spurte om et protein som «eluerer sent fra gelfiltrering, men vandrer raskt i SDS-PAGE»; fasiten var **en oligomer som dissosierer til subenheter i SDS** – logikken passer egentlig til et protein som eluerer *tidlig* (stort nativt) og vandrer raskt (små subenheter). SDS gir **likt ladning/masse-forhold** (H2022 fasit: «gjør proteinene negativt ladde»). Sent ut av gelfiltrering men raskt i SDS-PAGE? Tenk oligomer/subenheter. pI 6 renset ved pH 8 → **anionbytter** (H2025). Kationbytter binder positive, elueres med økende salt (H2024). Affinitet elueres med fri ligand (V2023). 2D = IEF + SDS-PAGE. Western vs ELISA: Western viser **størrelse** (H2025). Western, ELISA og immunhistokjemi bruker antistoffer – IEF gjør ikke (H2024). Immunhistokjemi viser **fordeling og mengde** av et protein i vev (V2023). MS: m/z-spekteret er et **fingeravtrykk** (V2026) og virker på små mengder fordi m/z måles svært nøyaktig og følsomt (H2025). Uten SDS skilles proteinene på både ladning og størrelse (V2025).
:::

## Test deg selv

:::sjekk[Kollokvie: rangér antitrypsin (45 kDa), cytokrom c (13,4), myoglobin (17), serumalbumin (69) og transferrin (90) fra topp til bunn i SDS-PAGE.]
Transferrin (90) – serumalbumin (69) – antitrypsin (45) – myoglobin (17) – cytokrom c (13,4). Størst vandrer kortest.
:::

:::sjekk[Samme proteiner ved IEF fra katode (pH 12) til anode (pH 3): pI 5,4 / 10,6 / 7,0 / 4,8 / 5,9. Rekkefølge?]
Hvert protein stopper der pH = pI: cytokrom c (10,6) nærmest katoden, så myoglobin (7,0), transferrin (5,9), antitrypsin (5,4) og serumalbumin (4,8) nærmest anoden.
:::

:::sjekk[Hvorfor skiller SDS-PAGE bare på størrelse?]
SDS denaturerer og gir alle proteiner samme negative ladning per masseenhet, så forskjeller i egenladning og form forsvinner; gelen siler etter størrelse.
:::

:::sjekk[Et protein eluerer tidlig fra gelfiltrering (~200 kDa) men gir ett bånd på 50 kDa i SDS-PAGE. Tolk.]
Det native proteinet er en oligomer – trolig en homotetramer av fire like 50 kDa-subenheter.
:::

:::sjekk[Hvordan løsner du et protein fra en ionebytterkolonne og fra en affinitetskolonne?]
Ionebytter: øk saltkonsentrasjonen (saltioner konkurrerer om de ladde gruppene). Affinitet: tilsett fri ligand som konkurrerer om proteinets bindingssete.
:::
