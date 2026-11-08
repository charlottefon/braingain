---
title: Lipidkurs – bestemmelse av kolesterol
summary: Tre deler – presisjon med automatpipetter, diffusjon over erytrocyttmembranen målt som tid til hemolyse, og enzymatisk kolorimetrisk bestemmelse av totalkolesterol i serum (A505 + standardkurve).
category: ovelse
order: 1
tags: [lipider, kolesterol, membran, diffusjon, hemolyse, spektrofotometri, standardkurve, automatpipette, lipoproteiner]
related:
  - cellebiologi/cellen/membraner-og-membrantransport
  - cellebiologi/cellen/proteinsyntese-og-vesikkeltransport
  - cellebiologi/organeller/plasmamembranen
  - cellebiologi/organeller/endosomer
  - organisk-kjemi/biomolekyler/lipider
  - organisk-kjemi/funksjonelle-grupper/alkoholer
  - generell-kjemi/regnetyper/fortynning-og-blanding
  - generell-kjemi/teori/losninger-og-konsentrasjon
  - lab/ovelser/enzymkinetikk-adh
  - lab/ovelser/karbohydrater
sources:
  - file: medod1/material/cellebiologi/labhefte-medod1-262109--8060302.pdf
    pages: "9-19"
  - file: medod1/material/cellebiologi/lipidkurs-2021-introduksjon--7793892.pdf
  - file: medod1/material/cellebiologi/1-lipid-bestemmelse-av-kolesterol--page-374060.html
  - file: medod1/material/cellebiologi/laboratoriekursene--page-374176.html
  - file: medod1/exercises/erstatningsoppgave-lipid-bestemmelse-av-kolesterol--quiz-59816.html
  - file: medod1/exams/2023-medod1-h2023-med-svar--5670979.pdf
  - file: medod1/exams/2024-medod1-ny-v2024-med-svar--5897534.pdf
  - file: medod1/exams/2025-medod1-ny-v2025-med-svar--7269873.pdf
  - file: medod1/exams/2021-medod1-h2021-med-svar--3944361.pdf
  - file: medod1/exams/2022-medod1-h2022-med-svar--4750110.pdf
  - file: medod1/exams/2020-medod1-h2020-med-svar--3792252.pdf
fields:
  Øvelse nr: "1 (labhefte-modul 1)"
  Fag: Cellebiologi (Celle 1) – membraner og lipider
  Metode: Pipettering/veiing, hemolyse-test, enzymatisk kolorimetri (spektrofotometri 505 nm)
  Hva måles: Pipettepresisjon (SD), tid til hemolyse, totalkolesterol i serum (mmol/L)
---

## Formål

Labheftet: bli kjent med **automatpipetter** og grunnleggende teknikker, undersøke hvordan **molekylstørrelse** og **lipidløselighet** påvirker diffusjon over biologiske membraner, og bestemme **totalkolesterol i en serumprøve** med en enzymatisk analyse. Øvelsen knytter sammen membrantransport, lipiders funksjon og klinisk biokjemisk analyse.

| Del | Spørsmål | Måling |
|---|---|---|
| 1 Automatpipetter | Hvor presist pipetterer jeg? | Masse av pipettert vann (6 × 3 volumer) → gjennomsnitt og standardavvik |
| 2 Diffusjon | Hva bestemmer hvor raskt et stoff krysser membranen? | Tid til løsningen blir klar (hemolyse) |
| 3 Totalkolesterol | Hvor mye kolesterol er det i serum? | $A_{505}$ for kalibratorer og serum → standardkurve |

## Bakgrunn og teori

**Cellemembranen** er et fosfolipiddobbeltlag med innleirede proteiner – en selektiv barriere (se [membraner og membrantransport](/medod1/cellebiologi/cellen/membraner-og-membrantransport) og [plasmamembranen](/medod1/cellebiologi/organeller/plasmamembranen)). Permeabiliteten avhenger av molekylets **størrelse, ladning og lipidløselighet**.

- **Passiv transport** (diffusjon, osmose): ingen metabolsk energi, med konsentrasjonsgradienten.
- **Aktiv transport**: mot gradienten, krever energi (vanligvis ATP) og spesifikke membranproteiner.
- **Diffusjonshastighet** påvirkes av molekylstørrelse, temperatur, konsentrasjonsgradient og membranpermeabilitet. Små molekyler diffunderer generelt raskere – men for biologiske membraner er **lipidløselighet** svært viktig: fettløselige molekyler passerer lettere gjennom dobbeltlaget enn hydrofile.

**Lipidene i membranen** (Saraste, introduksjonsforelesningen): fosfolipider, glykolipider og kolesterol – alle **amfipatiske** (hydrofil + hydrofob del). Strukturene: se [lipider](/medod1/organisk-kjemi/biomolekyler/lipider).

| | Fosfolipid | Kolesterol |
|---|---|---|
| Hydrofil del | Fosfatholdig hodegruppe (ladet) | Én OH-gruppe |
| Hydrofob del | To fettsyrehaler (fleksible) | Stivt steroid-ringsystem + kort hydrokarbonhale |
| Rolle i membranen | Danner selve dobbeltlaget | Regulerer **fluiditet og stabilitet**; plasmamembranen har mye kolesterol (ca. 30 %, stiv), ER-membranen lite (ca. 5 %, mer flytende) |
| Andre funksjoner | – | Forløper for **steroidhormoner** (testis, binyrebark), **gallesyrer** (lever) og **vitamin D** (hud) |

```smiles Kolesterol (uten stereokjemi)
CC(C)CCCC(C)C1CCC2C1(CCC3C2CC=C4C3(CCC(C4)O)C)C
```

**Lipoproteiner**: kolesterol er lite vannløselig og transporteres bundet i lipoproteiner – hydrofil overflate (apolipoproteiner, fosfolipider, fritt kolesterol) og hydrofob kjerne (triglyserider og **kolesterolestere**). Ca. **70 %** av kolesterolet i lipoproteinene er kolesterolestere.

| Klasse | Funksjon (labheftet) |
|---|---|
| Kylomikroner | TG (og kostkolesterol) fra tarm til perifert vev og lever |
| VLDL | Syntetiseres i lever → omdannes til IDL → LDL |
| IDL | Mellomform VLDL → LDL |
| LDL («dårlig») | Kolesterol fra lever til perifert vev; tas opp via **reseptormediert endocytose** (LDL-reseptor) → endosom → lysosom ([proteinsyntese og vesikkeltransport](/medod1/cellebiologi/cellen/proteinsyntese-og-vesikkeltransport), [endosomer](/medod1/cellebiologi/organeller/endosomer)) |
| HDL («godt») | Overskuddskolesterol fra perifert vev tilbake til lever |

Hos friske voksne: ca. **60–70 %** av plasmakolesterolet i LDL, **25–35 %** i HDL, resten i VLDL og kylomikroner. Forhøyet LDL-kolesterol gir økt risiko for aterosklerotisk hjerte- og karsykdom.

## Prinsipp

**Del 1 – Gravimetrisk pipettekontroll.** Vann har tetthet ≈ 1,00 g/mL, så 1 mg vann ≈ 1 µL. Veiing av gjentatte pipetteringer gir **nøyaktighet** (gjennomsnitt vs. innstilt volum) og **presisjon** (standardavvik).

**Del 2 – Hemolyse som mål på diffusjon.** En dråpe helblod i en løsning av et stoff som **krysser membranen**: stoffet diffunderer inn i erytrocyttene → vann følger osmotisk etter ([osmose](/medod1/generell-kjemi/teori/losninger-og-konsentrasjon)) → cellene sveller og sprekker (**hemolyse**). Hemoglobinet frigjøres og løsningen går fra uklar (intakte celler sprer lys) til **klar rød**. Jo raskere stoffet krysser membranen, desto kortere tid til klar løsning.

**Del 3 – Enzymatisk kolorimetrisk kolesterolmåling** (reagens R1, Roche, inneholder alle tre enzymene):

1. Kolesterolesterase spalter esterne (ca. 70 % av kolesterolet er esterifisert):
$$\text{kolesterolester} + \ce{H2O} \xrightarrow{\text{kolesterolesterase}} \text{kolesterol} + \ce{RCOOH}\ (\text{fettsyre})$$
2. Kolesteroloksidase oksiderer fritt kolesterol og danner hydrogenperoksid:
$$\text{kolesterol} + \ce{O2} \xrightarrow{\text{kolesteroloksidase}} \text{kolest-4-en-3-on} + \ce{H2O2}$$
3. Peroksidase kobler $\ce{H2O2}$ til en fargereaksjon:
$$\ce{2H2O2} + \text{4-aminofenazon} + \text{fenol} \xrightarrow{\text{peroksidase}} \text{4-(p-benzokinon-monoimino)-fenazon (rødt)} + \ce{4H2O}$$

Fargeintensiteten er **proporsjonal med kolesterolkonsentrasjonen** og måles ved **505 nm**. Etter Lambert–Beers lov ($A = \varepsilon b c$) er absorbansen lineær med konsentrasjonen, så en **standardkurve** fra kalibratorer med kjent konsentrasjon kan brukes til å finne den ukjente.

:::feil
Labheftets likning for peroksidasetrinnet skriver «+ 4 H₂O₂» på produktsiden – det er en skrivefeil. Produktet er **4 H₂O** (slik det står i introduksjonsforelesningen).
:::

## Utstyr og reagenser

| Del | Utstyr | Kjemikalier/prøvemateriale |
|---|---|---|
| 1 | Automatpipetter 5–40 µL (± 0,2 µL), 200 µL (± 0,6 µL), 1000 µL (± 2 µL); pipettespisser; begerglass; analysevekt og veieskåler (felles veierom) | dH₂O (grønn kran) |
| 2 | Transferpipette 3 mL; 6 Falcon-rør; reagensrørstativ; stoppeklokke; sprittusj | 1 Falcon-rør helblod; 0,5 M etylenglykol, 0,5 M glyserol, 0,5 M glukose; 3 M metanol, 3 M etanol, 3 M propanol |
| 3 | Automatpipetter og spisser; engangskyvetter i plast; plastfilm (parafilm); spektrofotometer | Kolesterolreagens R1 (Roche), 6 mL; kalibrator med enzymmiks «Cal», 50 µL (4,32 mmol/L); pasientprøve serum «S», 100 µL |

Blodet er testet etter blodgivernormen, men skal håndteres som **potensielt smittefarlig**: alt som har vært i kontakt med blod kastes i **gul beholder** for biologisk risikoavfall. Engangskyvetter har et **trekantmerke** på siden lyset går gjennom – hold kun øverst.

## Fremgangsmåte

### Del 1A – Bruk av automatpipette

1. Velg riktig pipette og pipettespiss.
2. Still inn volumet – kontroller at det er innenfor pipettens område.
3. Trykk stempelet ned til **første stopp**.
4. Før spissen 2–3 mm under væskeoverflaten.
5. Slipp stempelet rolig opp (væsken trekkes inn).
6. Kontroller at det ikke er luftbobler i spissen.
7. Før spissen langs innsiden av begerglasset.
8. Trykk til første stopp, deretter videre til **andre stopp** for å tømme helt.
9. Hold stempelet inne mens spissen trekkes ut.
10. Slipp stempelet rolig tilbake.
11. Kast spissen med utløserknappen i egnet avfall.

### Del 1B – Pipetteringsøvelse

1. Velg best egnet pipette for **10, 70 og 400 µL**.
2. Pipetter dH₂O **seks ganger** for hvert volum over i veieskål på analysevekten.
3. Registrer massen etter hver pipettering.
4. Beregn gjennomsnitt og standardavvik (Excel/GeoGebra) og sammenlign med pipettens oppgitte presisjon.

### Del 2A – Molekylstørrelse

1. Merk Falcon-rør 1, 2, 3.
2. Rør 1: **4 mL etylenglykol**; rør 2: **4 mL glyserol**; rør 3: **4 mL glukose** (alle 0,5 M).
3. Ett rør om gangen: tilsett **én dråpe helblod**, start stoppeklokken umiddelbart.
4. Sett på kork, vend forsiktig noen ganger – **ikke rist**.
5. Noter tiden når løsningen er så klar at du kan se gjennom den (f.eks. lese merkingen på motsatt side).
6. Gjenta for rør 2 og 3.

### Del 2B – Lipidløselighet

Som 2A, med rør 4: **4 mL metanol**, rør 5: **4 mL etanol**, rør 6: **4 mL propanol** (alle 3 M).

### Del 3 – Totalkolesterol

Spektrofotometeret: program **Photometric**, **505 nm**, måler kontinuerlig. Nullstill før første måling med en **tom kyvette** og **Auto Zero** (vent på to lydsignaler).

**A. Kalibratorer (standardkurve)**

1. Merk tre engangskyvetter A, B, C. Klargjør én prøve om gangen, rett før måling.
2. Pipetter R1, deretter kalibrator i samme kyvette etter tabellen.
3. Dekk med parafilm, vend forsiktig **tre ganger**.
4. Sett kyvetten **umiddelbart** i instrumentet med trekantmerket mot lyskilden, lukk lokket.
5. Noter $A_{505}$ når verdien har **stabilisert seg**.

| Prøve | µL R1 | µL kalibrator | Totalt (µL) |
|---|---|---|---|
| A | 995 | 5 | 1000 |
| B | 990 | 10 | 1000 |
| C | 980 | 20 | 1000 |

**B. Serum i duplikat (U1, U2)**

1. To engangskyvetter: **990 µL R1 + 10 µL serum** i hver.
2. Parafilm, vend tre ganger, sett i instrumentet, lukk lokket.
3. Registrer stabil $A_{505}$. Gjenta for kyvette nr. 2.

**C. Beregning** – se under. Labheftet anbefaler å gjøre alt labarbeidet før standardkurven lages.

## Beregninger

:::eksempel[Del 1: gjennomsnitt og standardavvik (tenkte data, 10 µL)]
**Tenkte data** (oppdiktet eksempel, ikke fasit). Seks veiinger (mg): 10,1 – 9,9 – 10,0 – 10,2 – 9,8 – 10,0

- Gjennomsnitt: $\bar{x} = 60{,}0/6 = 10{,}0$ mg ≈ 10,0 µL (nøyaktig).
- Avvik fra snittet: 0,1; −0,1; 0; 0,2; −0,2; 0 → kvadratsum $= 0{,}10\ \text{mg}^2$
- Standardavvik (utvalg): $s = \sqrt{\dfrac{0{,}10}{6-1}} = \sqrt{0{,}020} = 0{,}14$ mg ≈ **0,14 µL**

Sammenligning: pipettens oppgitte presisjon er ± 0,2 µL → resultatet er innenfor (som forventet).
:::

:::eksempel[Del 3: kolesterol i kalibratorkyvettene – fortynningsloven]
([Fortynning og blanding](/medod1/generell-kjemi/regnetyper/fortynning-og-blanding).) $C_1V_1 = C_2V_2$ med $C_1 = 4{,}32$ mmol/L og $V_2 = 1000$ µL (volumenheten trenger ikke regnes om – bare forholdet teller):

| Prøve | $V_1$ (µL) | Fortynning | $C_2$ (mmol/L) |
|---|---|---|---|
| A | 5 | 1∶200 | $4{,}32 \cdot 5/1000 = 0{,}0216$ |
| B | 10 | 1∶100 | $0{,}0432$ |
| C | 20 | 1∶50 | $0{,}0864$ |
:::

:::eksempel[Del 3: standardkurve og serumkonsentrasjon (tenkte absorbanser)]
**Tenkte data** (oppdiktet eksempel – dine egne absorbanser blir andre): A = 0,105; B = 0,212; C = 0,420. Lineær regresjon av $A_{505}$ (y) mot $C$ (x):

$$A_{505} = 4{,}855 \cdot C + 0{,}001$$

Serum (duplikat, tenkte data): U1 = 0,240; U2 = 0,246

1. Konsentrasjon i kyvetten: $C_2 = \dfrac{A - 0{,}001}{4{,}855}$
   - U1: $0{,}239/4{,}855 = 0{,}0492$ mmol/L
   - U2: $0{,}245/4{,}855 = 0{,}0505$ mmol/L
2. Tilbake til ufortynnet serum (10 µL i 1000 µL = 1∶100): $C_1 = C_2 \cdot \dfrac{V_2}{V_1} = C_2 \cdot 100$
   - U1: **4,92 mmol/L**; U2: **5,05 mmol/L**
3. Gjennomsnitt: **≈ 5,0 mmol/L** – innenfor normalområdet 3–6 mmol/L oppgitt i introduksjonsforelesningen.

Kontroll med ettpunktsberegning: serum og kalibrator B har samme fortynning (10 µL), så $C_{\text{serum}} \approx 4{,}32 \cdot \dfrac{0{,}243}{0{,}212} \approx 4{,}95$ mmol/L.
:::

:::feil
Den vanligste feilen er å glemme å gange med fortynningsfaktoren (100) – da får man 0,05 mmol/L, som er konsentrasjonen **i kyvetten**, ikke i serum.
:::

## Forventede resultater og tolkning

**Del 2A – molekylstørrelse (0,5 M)**

| Løsning | Formel | $M$ (g/mol) | Forventet tid til klar løsning |
|---|---|---|---|
| Etylenglykol | $\ce{C2H6O2}$ | 62 | Kortest |
| Glyserol | $\ce{C3H8O3}$ | 92 | Lengre |
| Glukose | $\ce{C6H12O6}$ | 180 | Lengst – ofte ingen tydelig hemolyse i løpet av øvelsen |

Tolkning: jo større molekyl, desto langsommere diffusjon over membranen → lengre tid til hemolyse. Stemmer med generaliseringen om at små molekyler diffunderer raskere. (Glukose er dessuten hydrofilt og krysser i praksis via transportproteiner, ikke fri diffusjon.)

**Del 2B – lipidløselighet (3 M)**

| Løsning | Formel | $M$ (g/mol) | Lipidløselighet | Forventet tid |
|---|---|---|---|---|
| Metanol | $\ce{CH3OH}$ | 32 | Lavest | Lengst |
| Etanol | $\ce{C2H5OH}$ | 46 | Middels | Middels |
| Propanol | $\ce{C3H7OH}$ | 60 | Høyest | Kortest |

Tolkning: lengre hydrokarbonkjede → mer lipidløselig (se [alkoholer](/medod1/organisk-kjemi/funksjonelle-grupper/alkoholer)) → raskere passasje gjennom dobbeltlaget, **selv om molekylet er større**. (Ved 3 M virker de mest fettløselige alkoholene også direkte løsende på membranen, noe som forsterker effekten.) Sammenligning A vs. B: innenfor disse seriene ser **lipidløselighet** ut til å ha størst betydning (propanol er større enn metanol, men går raskere).

```smiles-row
CO | Metanol
CCO | Etanol
CCCO | Propanol
```

**Del 3 – kolesterol**

- Standardkurven skal være en **rett linje**; absorbansene øker proporsjonalt med kalibratorvolumet (5 → 10 → 20 µL gir ca. dobling for hver). Skjæringspunktet med y-aksen er ikke nødvendigvis null, fordi instrumentet nullstilles mot en **tom** kyvette og reagenset har litt egenabsorbans – derfor brukes regresjonslikningen med konstantledd.
- Serumprøvens absorbans bør ligge **innenfor** kalibratorområdet (interpolering, ikke ekstrapolering).
- Spektrofotometeret måler **lystransmisjon** og regner om til absorbans ($A = -\log T$); absorbansen ved 505 nm er proporsjonal med mengden rødt fargestoff, som igjen er proporsjonal med totalkolesterol (via 1∶1-koblingen kolesterol → $\ce{H2O2}$ → farge).
- Duplikatene blir sjelden identiske – forskjellen er et mål på presisjonen.

**Forbedring av standardkurven** (spørsmål i heftet): flere kalibratorpunkter som spenner over et bredere område, paralleller (duplikat/triplikat) av hvert punkt, og en blindprøve (R1 uten kalibrator) som nullpunkt.

## Feilkilder

- **Pipettering**: feil pipette for volumet, luftbobler, spissen for dypt (væske på utsiden) eller for grunt (luft), ikke helt til andre stopp ved tømming, for rask stempelbevegelse, gjenbrukte spisser. Små volum (5–10 µL) gir størst relativ feil.
- **Veiing**: fordampning fra veieskålen, trekk, temperatur (tetthet), vekten ikke tarert.
- **Hemolyse**: subjektivt endepunkt («klar nok»), ulik dråpestørrelse, risting i stedet for vending, tid før stoppeklokke startes.
- **Kolesterol**: fingermerker/riper på kyvetten, trekantmerket feil vei, luftbobler, ufullstendig blanding, avlesning før absorbansen har stabilisert seg (reaksjonen ikke ferdig), instrumentet ikke nullstilt, bare tre kalibratorpunkter, feil i fortynningsberegningen.

## Klinisk relevans

- **Totalkolesterol** måles rutinemessig i klinisk biokjemi som del av pasientens lipidstatus. Den enzymatisk-kolorimetriske metoden med standardkurve er prinsippet bak mange automatiserte analyser.
- **Familiær hyperkolesterolemi (FH)**: mutasjoner i **LDL-reseptoren** → redusert opptak av LDL i cellene → svært høyt LDL-kolesterol i plasma og aterosklerose i ung alder.
- **Aterosklerose**: plakk dannes når LDL tas opp i karveggen og det dannes kolesterolkrystaller; høyt LDL-kolesterol øker risikoen.
- **Lipidløselighet og membranpassasje** forklarer hvorfor fettløselige stoffer (f.eks. alkoholer, mange legemidler) lett krysser membraner, mens glukose trenger transportproteiner.

:::klinikk
Samme prinsipp – enzym som danner $\ce{H2O2}$, koblet til peroksidase og et fargestoff – brukes også i glukoseteststrimmelen i [karbohydratøvelsen](/medod1/lab/ovelser/karbohydrater) (glukoseoksidase). Lær koblingen én gang, bruk den to steder.
:::

## Typiske eksamensspørsmål

:::eksamen
Selve labprosedyren spørres sjelden direkte, men **lipoproteiner og kolesteroltransport** kommer igjen nesten hvert år:
- «Hvilken påstand om lipoproteiner er korrekt?» (v2019, h2021, h2022, h2023, v2024) – riktig: lipoproteiner er **vannløselige pakker** / tillater transport **pga. sin hydrofile karakter**. Feller: «mesteparten av kolesterolet er i VLDL/HDL» (feil – LDL), «HDL transporterer fra lever til perifert vev» (feil – motsatt), «lavt kolesterol/LDL gir aterosklerose/blodpropp» (feil), «hydrofobisitet» (feil).
- «Godt kolesterol» = **HDL** (v2019, h2023).
- Perifere celler får kolesterol via **reseptormediert endocytose** av LDL (v2020, h2021, h2022, v2025).
- FH skyldes mutasjoner i **LDL-reseptoren** (ikke VLDL-sekresjon); mesteparten av kolesterolet i LDL er **esterifisert** (h2020, h2021).
- Kortsvar-vinkler: forklar måleprinsippet (tre enzymtrinn → rødt fargestoff → $A_{505}$), bruk $C_1V_1 = C_2V_2$ og fortynningsfaktor, sammenlign fosfolipid og kolesterol, forklar hemolyseforsøket (størrelse vs. lipidløselighet).
:::

## Test deg selv

:::sjekk[Hvorfor blir blodløsningen klar når erytrocyttene hemolyserer?]
Intakte celler sprer lyset og gjør løsningen uklar. Når et membrangjennomtrengelig stoff diffunderer inn, følger vann etter osmotisk, cellene sveller og sprekker, og hemoglobinet løses i væsken – løsningen blir klar (rød). Tiden til klar løsning er derfor et indirekte mål på hvor raskt stoffet krysser membranen.
:::

:::sjekk[Propanol er større enn metanol, men gir raskere hemolyse. Hva viser det?]
At lipidløselighet betyr mer enn størrelse for disse molekylene. Den lengre hydrokarbonkjeden gjør propanol mer fettløselig, så det passerer lettere gjennom det hydrofobe indre av fosfolipiddobbeltlaget.
:::

:::sjekk[Hvorfor må R1 inneholde kolesterolesterase, og ikke bare kolesteroloksidase?]
Ca. 70 % av kolesterolet i lipoproteinene er esterifisert med en fettsyre. Kolesteroloksidase virker bare på fritt kolesterol, så esterne må spaltes først – ellers ville man bare måle ca. 30 % av totalkolesterolet.
:::

:::sjekk[Serumkyvetten (10 µL serum i 1000 µL) gir 0,047 mmol/L ut fra standardkurven. Hva er serumkonsentrasjonen?]
Fortynningen er 1∶100, så $C_{\text{serum}} = 0{,}047 \cdot 100 = 4{,}7$ mmol/L.
:::

:::sjekk[Hvorfor bruker man en standardkurve i stedet for å regne direkte med $A = \varepsilon b c$?]
ε for det røde fargestoffet under akkurat disse betingelsene er ikke kjent, og utbyttet av fargereaksjonen avhenger av reagens, tid og temperatur. Kalibratorer med kjent konsentrasjon som behandles likt som prøven, gir sammenhengen mellom absorbans og konsentrasjon direkte.
:::

:::sjekk[Pipetten for 5–40 µL oppgis med presisjon ± 0,2 µL. Du får SD = 0,6 µL på 10 µL. Nevn to sannsynlige årsaker.]
F.eks. luftbobler i spissen, ikke tømt til andre stopp, spissen for dypt (væske på utsiden), ujevn stempelhastighet eller fordampning under veiing. Standardavviket er langt over spesifikasjonen, så teknikken – ikke pipetten – er mest sannsynlig årsaken.
:::
