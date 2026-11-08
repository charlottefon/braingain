---
title: Kiralitet og R/S-konfigurasjon (CIP)
summary: Et stereogent (kiralt) karbon har fire ulike grupper. R/S bestemmes med Cahn–Ingold–Prelog – ranger etter atomnummer, se med laveste prioritet bakover, og les 1→2→3 med klokka (R) eller mot klokka (S). Inkluderer kiletegninger og Fischer-projeksjon.
order: 5
tags: [kiralitet, stereosenter, CIP, R/S, Fischer, kiler]
related:
  - organisk-kjemi/grunnlag/enantiomerer-diastereomerer-meso
  - organisk-kjemi/grunnlag/isomeri-og-konformasjon
  - organisk-kjemi/navnsetting/stereodeskriptorer
  - organisk-kjemi/funksjonelle-grupper/halogenalkaner
  - organisk-kjemi/biomolekyler/monosakkarider
  - organisk-kjemi/reaksjoner/sn2-reaksjon
  - proteiner/aminosyrer/glysin
sources:
  - file: medod1/exams/2026-sensorveiledning-langsvar-medod1-ny-v2026--7644058.docx
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-2a-3--8116857.pdf
    pages: "6-24"
  - file: medod1/exercises/r-og-s-konfigurasjon-oppgaver-med-losninger--8122255.pdf
  - file: medod1/exercises/kollokvier-organisk-kjemi--7794158.pdf
  - file: medod1/exercises/kollokvie-organisk-kjemi-medod1-losningsforslag-2024--8157258.doc
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-5--8135969.pdf
    pages: "5-7"
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2023-medod1-ny-v2023-med-svar--5194537.pdf
---

## Kiralitet

- **Kiral**: et objekt/molekyl som **ikke** kan legges over (er ikke-overlappbart med) speilbildet sitt – som venstre og høyre hånd.
- **Akiral**: kan legges over speilbildet (en kule; molekyler med et symmetriplan).
- **Stereogent senter (kiralt senter, asymmetrisk karbon)**: et atom der bytte av to grupper gir en annen stereoisomer. I pensum: et **sp³-karbon med fire ulike grupper**.
- Et molekyl med **ett** stereogent senter er alltid kiralt og finnes som to **enantiomerer**.

### Slik finner du stereogene karbon
1. Se bare på sp³-karbon (C=C, C=O, aromatiske C er aldri stereogene).
2. Hopp over CH₃, CH₂ og C med to like grupper.
3. Sjekk at alle fire grupper er ulike – sammenlign **hele** gruppen, ikke bare første atom (etyl ≠ metyl).

```smiles-row
CC(Cl)CC | 2-klorbutan – C2 er stereogent (H, Cl, CH₃, C₂H₅)
CCC(Cl)CC | 3-klorpentan – ikke stereogent (to etyl)
CC(C)CO | 2-metylpropan-1-ol – ingen (to CH₃ på C2)
```

:::eksamen
«Hvor mange kirale karbonatomer finnes i strukturen?» kommer jevnlig (v2025, h2025) – ofte med et legemiddel, et sukker eller en ring. Husk at ring-C kan være stereogene når «veien rundt ringen» er ulik i de to retningene. Kollokvium: «Hvor mange stereoisomerer er mulige?» – tell stereosentre *n* og bruk 2ⁿ (3 sentre → 8).
:::

## CIP-prioritet (Cahn–Ingold–Prelog)

1. **Atomnummer** på atomet direkte bundet til stereosenteret: høyere atomnummer → høyere prioritet.
   **I > Br > Cl > S > P > F > O > N > C > H** – merk at S (16) og P (15) slår F (9) og O (8): det er atomnummeret som teller, ikke elektronegativiteten.
2. **Uavgjort?** Sammenlign settet av atomer bundet til det første atomet, i synkende rekkefølge – første forskjell avgjør. Eks.: –CH₂CH₃ [C,H,H] > –CH₃ [H,H,H]; –COOH [O,O,O] > –CH₂OH [O,H,H].
3. **Dobbelt- og trippelbindinger** telles som om atomet er bundet til to (eller tre) slike atomer: C=O → C har [O,O,…].
4. CIP rangerer **atomer**, ikke hele funksjonelle grupper. For vanlige substituenter gir det f.eks. **–Br > –OH > –NH₂ > –COOH > –CH₃ > –H**.

| Gruppe | Atomer på første C | Rangering blant C-grupper |
|---|---|---|
| –COOH | (O,O,O) | høyest |
| –CHO | (O,O,H) | |
| –CH₂OH | (O,H,H) | |
| –CH₂NH₂ | (N,H,H) | |
| –C₆H₅ (fenyl) | (C,C,C) | |
| –CH=CH₂ | (C,C,H) | |
| –CH₂CH₃ | (C,H,H) | |
| –CH₃ | (H,H,H) | lavest |

## Bestemme R eller S – kiletegning

1. **Ranger** de fire gruppene 1–4.
2. Sørg for at gruppe **4 (lavest, ofte H) peker bakover** (stiplet kile).
3. Tegn pilen **1 → 2 → 3**:
   - med klokka → **R** (*rectus*, høyre)
   - mot klokka → **S** (*sinister*, venstre)
4. Står gruppe 4 **ikke** bakover: **bytt** gruppe 4 med gruppen som står bakover, bestem R/S – og **snu svaret** (ett bytte inverterer konfigurasjonen). Alternativt: står 4 mot deg (fylt kile), les pilen og ta det motsatte.
5. Skriv deskriptoren i parentes foran navnet med lokant: (2R)-2-brombutan, (2S)-butan-2-ol.

:::husk
**Fylt kile** = mot deg. **Stiplet kile** = bort fra deg. **Vanlig strek** = i papirplanet.
Laveste prioritet bakover → les direkte. Laveste prioritet mot deg/i planet → les og snu (eller gjør ett tenkt bytte og snu).
:::

```smiles-row
[C@H](Br)(CC)C | (R)-2-brombutan
[C@@H](Br)(CC)C | (S)-2-brombutan
[C@@H](O)(CC)C | (S)-butan-2-ol
```

:::eksempel[Oppgavesett R/S, a: (2R)-2-brompropansyre]
1. Prioritet: Br (1) > COOH (2: [O,O,O]) > CH₃ (3: [H,H,H]) > H (4).
2. I figuren ligger H i papirplanet. Tenkt bytte H ↔ CH₃ (som står bakover) plasserer H bakover.
3. Etter byttet går 1 → 2 → 3 mot klokka = S.
4. Ett bytte inverterer → original struktur er **R**.
5. Karboksylkarbonet er C1, stereosenteret C2 → **(2R)-2-brompropansyre**.
:::

```smiles (2R)-2-brompropansyre
[C@H](Br)(C(=O)O)C
```

:::eksempel[Oppgavesett R/S, b: (3R,4E)-hept-4-en-3-ol]
1. Hovedkjede 7 C, nummereres slik at OH får lavest lokant → C3; dobbeltbinding C4=C5.
2. Prioritet ved C3: OH (1) > CH=CH–… (2: [C,C,H] fordi dobbeltbindingen teller dobbelt) > CH₂CH₃ (3: [C,H,H]) > H (4).
3. H (ikke tegnet) peker bakover, OH mot deg; 1 → 2 → 3 går med klokka → **R**.
4. Dobbeltbindingen: høyest prioritet på hvert karbon på hver sin side → **E**.
5. Navn: **(3R,4E)-hept-4-en-3-ol**.
:::

```smiles (3R,4E)-hept-4-en-3-ol
[C@H](O)(/C=C/CC)CC
```

:::eksempel[Oppgavesett R/S, c: (2R)-2-brombutan]
Br (1) > CH₂CH₃ (2) > CH₃ (3) > H (4). Etyl slår metyl fordi [C,H,H] > [H,H,H]. H i planet; tenkt bytte H ↔ etyl gir S → original er **R**.
:::

:::eksamen
v2026 (kortsvar, 2 p): «Foreligger strukturene som R eller S?» Sensorveiledningen: i a) går 1→2→3 mot klokka, men laveste prioritet står ikke bakover – tenkt bytte H ↔ CH₃ gjør at svaret snus → **R** (ikke S). I b) står H bakover, rotasjonen går med klokka → **R**. Ellers flervalg: h2024/h2025/v2025 «Hvilke konfigurasjoner har de to forbindelsene?», h2023 «Hvilken figur viser (S)-2-klorbutan?», v2023 «(R)-2-brompentan / (S)-2-brombutan …» (sjekk kjedelengden også).
:::

:::feil
- **R/S sier ingenting om retningen på optisk dreiing.** (+)/(−) (eller *d*/*l*) måles i polarimeter; en R-forbindelse kan være (+) eller (−).
- Kiletypen bestemmer romlig orientering, ikke prioritet.
- Ikke ranger etter størrelse på hele gruppen. –CH₂Br [Br,H,H] slår –C(CH₃)₃ [C,C,C], fordi høyeste atom i settet sammenlignes først (Br > C). Det er **første forskjell** i det synkende sorterte settet som teller.
:::

## Fischer-projeksjon

Brukes mye for sukker og aminosyrer (se [Monosakkarider – Fischer og D/L](/medod1/organisk-kjemi/biomolekyler/monosakkarider)).

- Hvert kryss = et stereogent karbon.
- **Horisontale** bindinger peker **mot** deg, **vertikale** bindinger peker **bakover**.
- Hovedkjeden står vertikalt; for sukker står karbonylgruppen øverst (C1).

**R/S i Fischer-projeksjon:**
1. Ranger gruppene og les 1 → 2 → 3.
2. Står laveste prioritet på en **vertikal** binding (peker bakover): med klokka = **R**, mot klokka = **S** (les direkte).
3. Står laveste prioritet på en **horisontal** binding (peker mot deg): med klokka = **S**, mot klokka = **R** (snu).

**Lovlige/ulovlige operasjoner:**
- Rotasjon 180° i papirplanet: samme forbindelse.
- Rotasjon **90° eller 270°**: alle grupper bytter mellom horisontal og vertikal → **konfigurasjonen inverteres** (R ↔ S).
- Bytte av to grupper: inverterer; to bytter: tilbake til original.

**D/L** (Fischers eldre system for sukker og aminosyrer): OH (eller NH₂) på det stereogene karbonet **lengst fra karbonylgruppen** til **høyre = D**, til **venstre = L**. D/L og R/S er uavhengige systemer.

## Hvorfor kiralitet betyr noe biologisk

Kroppen er et **kiralt miljø** (proteiner bygget av L-aminosyrer; [glysin](/medod1/proteiner/aminosyrer/glysin) er den eneste akirale). Reseptorer og enzymer skiller mellom enantiomerer:
- Bare **(R)-adrenalin** aktiverer adrenerge reseptorer effektivt.
- **(S)-ibuprofen** står for den kliniske effekten (COX-hemming); gis som racemat, og noe R omdannes til S i kroppen. CIP ved stereosenteret: –COOH > 4-isobutylfenyl > –CH₃ > –H.
- **Karvon**: (R)-(−)-karvon lukter grønn mynte, (S)-(+)-karvon lukter karve – ulike luktreseptorer.

```smiles-row
CNC[C@H](O)c1ccc(O)c(O)c1 | (R)-adrenalin
CC(C)Cc1ccc(cc1)[C@H](C)C(=O)O | (S)-ibuprofen
```

## Test deg selv

:::sjekk[Ranger etter CIP-prioritet: –CH₂OH, –CH(CH₃)₂, –CHO, –OH.]
–OH (O, atomnummer 8) er høyest. Blant karbongruppene: –CHO [O,O,H] > –CH₂OH [O,H,H] > –CH(CH₃)₂ [C,C,H]. Rekkefølge: –OH > –CHO > –CH₂OH > –CH(CH₃)₂.
:::

:::sjekk[Du har bestemt rotasjonen 1→2→3 til «med klokka», men H peker mot deg (fylt kile). Hva er konfigurasjonen?]
S. Når laveste prioritet peker mot betrakteren, ser du rotasjonen «fra feil side», og deskriptoren må snus.
:::

:::sjekk[I en Fischer-projeksjon står H horisontalt, og 1→2→3 går mot klokka. R eller S?]
R. H horisontalt betyr at H peker mot deg, så avlest retning snus: mot klokka → R.
:::

:::sjekk[Hva skjer med konfigurasjonen hvis du roterer en Fischer-projeksjon 90°?]
Den inverteres (R ↔ S), fordi horisontale og vertikale bindinger bytter plass – det som pekte mot deg, peker nå bakover. 180° rotasjon gir derimot samme forbindelse.
:::

:::sjekk[Har 3-metylheksan et stereogent senter?]
Ja. C3 bærer H, CH₃, CH₂CH₃ og CH₂CH₂CH₃ – fire ulike grupper. (3-metylpentan har ikke, for der er to av gruppene etyl.)
:::
