---
title: Syre-base-forstyrrelser og blodgass
summary: Blodgass tolkes fra pH, pCO₂ (respiratorisk komponent) og base excess/HCO₃⁻ (metabolsk komponent). Fire primære forstyrrelser – respiratorisk og metabolsk acidose/alkalose. Lungene kompenserer metabolske forstyrrelser raskt, nyrene kompenserer respiratoriske langsomt (dager). I Siggaard-Andersen-diagrammet gir pH og pCO₂ et punkt; de skrå linjene gir BE, og feltene viser akutt/kronisk forstyrrelse.
category: tema
tags: [blodgass, base excess, Siggaard-Andersen, respiratorisk acidose, metabolsk acidose, kompensasjon, KOLS, anion gap, posthyperkapnisk alkalose, Henderson-Hasselbalch]
related:
  - cellebiologi/sammensatte-tema/blodets-ph-regulering-og-hyperventilering
  - generell-kjemi/teori/karbonsyre-og-blodets-ph
  - generell-kjemi/regnetyper/henderson-hasselbalch
  - generell-kjemi/regnetyper/ph-og-h3o-omregning
  - generell-kjemi/teori/buffere
  - generell-kjemi/teori/kjemisk-likevekt
  - proteiner/teori/myoglobin-og-hemoglobin
  - cellebiologi/sammensatte-tema/multippel-sklerose-og-myelin
  - cellebiologi/sammensatte-tema/jern-sporstoffer-og-oksygentoksisitet
sources:
  - file: medod1/exams/2015-medod1-h2015-med-svar--455761.pdf
  - file: medod1/exams/2016-medod1-h2016-med-svar--1419947.pdf
    pages: "18"
  - file: medod1/exams/2016-medod1-ny-v2016-med-svar--455763.pdf
  - file: medod1/exams/2017-medod1-h2017-med-svar--705807.pdf
  - file: medod1/exams/2017-medod1-ny-v2017-med-svar--862603.pdf
    pages: "51-53"
  - file: medod1/exams/2018-medod1-ny-v2018-med-svar--1194843.pdf
  - file: medod1/exams/2023-medod1-ny-v2023-med-svar--5194537.pdf
  - file: medod1/material/generell-kjemi/hyperventilering--7794027.pdf
  - file: medod1/material/cellebiologi/sammensatte-tema--page-374222.html
---

## Hvorfor dette temaet

Dette er den kliniske forlengelsen av sammensatt tema [blodets pH-regulering og hyperventilering](/medod1/cellebiologi/sammensatte-tema/blodets-ph-regulering-og-hyperventilering): samme likevekt ($\ce{CO2 + H2O <=> H2CO3 <=> H+ + HCO3-}$), men nå brukt til å **tolke en arteriell blodgass**. I 2015–2018 fikk studentene **Siggaard-Andersen-diagrammet** som vedlegg og skulle anslå BE og navngi forstyrrelsen. KOLS-oppgaven kom igjen i V2023 (uten diagram – pH og pCO₂ holder).

:::eksamen
- **Langsvar H2015 (10 p):** KOLS-røyker, pH 7,34, pCO₂ 9,3 kPa → anslå BE (≈ **+10**), navngi forstyrrelsen (**kronisk respiratorisk acidose med metabolsk kompensasjon**), årsak (KOLS + infeksjon), forklar pH-fallet med likevekten, «hyperventilerer pasienten?» (**nei – høy pCO₂ = hypoventilering**).
- **Langsvar V2016 (15 min):** vis sammenhengen respirasjon ↔ syre-base med ligning, de **4 forstyrrelsene** med eksempel, og hva **kompensasjon** er.
- **Flervalgsserier H2017 (5.40–5.45), V2017 (Q76), V2018 (4.65–4.67), V2023 (Q43):** anslå BE fra diagrammet, navngi forstyrrelse og kompensasjon, finn årsak (diaré, KOLS), vurder utvikling og hva som skjer når pCO₂ normaliseres raskt.
- **H2016:** økt anion gap ved metabolsk acidose → **opphopning av organiske syrer**.
:::

## Basalfaget

### Tre tall – to komponenter

| Måling | Hva den sier | Referanse (arterielt) |
|---|---|---|
| **pH** | Resultatet – acidemi eller alkalemi? | **7,35–7,45** ([H⁺] ≈ 45–35 nmol/L) |
| **pCO₂** | **Respiratorisk komponent** – styres av ventilasjonen | **4,7–6,0 kPa** (35–45 mmHg); 5,3 kPa = 40 mmHg |
| **BE** (base excess) eller **[HCO₃⁻]** | **Metabolsk komponent** – styres av nyrene og av syrer/baser som tilføres eller tapes | BE **−3 til +3 mmol/L**; [HCO₃⁻] ≈ 24 mmol/L (22–26) |
| pO₂ | Oksygenering (ikke syre-base) | 11–14 kPa |

Henderson–Hasselbalch med pCO₂ i kPa (0,23 mmol/(L·kPa) er løselighetskoeffisienten for CO₂, se [Henrys lov](/medod1/generell-kjemi/teori/karbonsyre-og-blodets-ph)):

$$\mathrm{pH} = 6{,}1 + \log\frac{[\ce{HCO3-}]}{0{,}23 \cdot p\ce{CO2}} \qquad \text{normalt: } 6{,}1 + \log\frac{24}{0{,}23\cdot 5{,}3} = 6{,}1 + \log 20 = 7{,}4$$

pH bestemmes av **forholdet** mellom telleren (nyrene, «metabolsk») og nevneren (lungene, «respiratorisk»).

### Base excess (BE)

**BE = mengden sterk syre (mmol per liter ekstracellulærvæske) som må til for å titrere tilbake til pH 7,40 ved pCO₂ 5,3 kPa og 37 °C.** Negativ BE kalles baseunderskudd (base deficit).

- Fordi BE er definert ved **normal pCO₂**, er den **uavhengig av respirasjonen** – et rent mål på den metabolske komponenten.
- **BE < −3:** for lite base → metabolsk acidose (eller metabolsk kompensasjon av respiratorisk alkalose).
- **BE > +3:** for mye base → metabolsk alkalose (eller metabolsk kompensasjon av respiratorisk acidose).

:::feil
Ved **akutt** endring i pCO₂ endres [HCO₃⁻] litt (CO₂ + H₂O → H⁺ + HCO₃⁻, H⁺ buffres av hemoglobin), men **BE forblir ≈ 0**. Eksempel V2017: pH 7,58, pCO₂ 2,95 kPa gir [HCO₃⁻] ≈ 0,23 · 2,95 · 10^1,48 ≈ 20 mmol/L, men BE ≈ 0. Derfor er BE et bedre mål på den metabolske komponenten enn aktuelt bikarbonat.
:::

### De fire primære forstyrrelsene

| Forstyrrelse | Primær endring | pH | Kompensasjon | Eksempler |
|---|---|---|---|---|
| **Respiratorisk acidose** | pCO₂ ↑ (hypoventilering) | ↓ | Nyrene holder tilbake HCO₃⁻ og skiller ut H⁺ → **BE ↑** (dager) | KOLS, lungebetennelse hos KOLS-pasient, svak respirasjonsmuskulatur (f.eks. langtkommen MS), opioid-/sovemiddelforgiftning |
| **Respiratorisk alkalose** | pCO₂ ↓ (hyperventilering) | ↑ | Nyrene skiller ut HCO₃⁻ → **BE ↓** (dager) | Angst/panikk, smerte, høyde |
| **Metabolsk acidose** | HCO₃⁻ ↓, **BE negativ** | ↓ | Lungene hyperventilerer (dyp, rask Kussmaul-respirasjon) → **pCO₂ ↓** (minutter–timer) | Diabetisk ketoacidose, laktacidose (sjokk), nyresvikt, **langvarig diaré** (tap av HCO₃⁻) |
| **Metabolsk alkalose** | HCO₃⁻ ↑, **BE positiv** | ↑ | Lungene hypoventilerer → **pCO₂ ↑** | **Langvarige brekninger** (tap av HCl fra magen), diuretika, **posthyperkapnisk** |

Med likevekten: høy pCO₂ driver $\ce{CO2 + H2O <=> H2CO3 <=> H+ + HCO3-}$ **mot høyre** → [H⁺] ↑. Lav pCO₂ driver den **mot venstre** → [H⁺] ↓. Syre som tilføres forbruker HCO₃⁻ (H⁺ + HCO₃⁻ → H₂CO₃ → CO₂ + H₂O, som pustes ut). Tap av HCO₃⁻ (diaré) gir samme resultat.

### Kompensasjon

**Kompensasjon** = kroppen endrer **den andre** komponenten i samme retning som den primære, slik at **forholdet** [HCO₃⁻]/pCO₂ og dermed pH trekkes tilbake mot normalt.

- **Respiratorisk kompensasjon** av metabolske forstyrrelser: rask (minutter–timer).
- **Metabolsk (renal) kompensasjon** av respiratoriske forstyrrelser: langsom (**dager**). Derfor skilles det mellom **akutt** (ukompensert, BE ≈ 0) og **kronisk** (kompensert, BE forskjøvet) respiratorisk forstyrrelse.
- Kompensasjonen er normalt **ufullstendig** – pH går mot 7,4, men **ikke forbi**. En KOLS-pasient med respiratorisk acidose har derfor sjelden pH > 7,4.
- Kompensasjon gjør at **både** pCO₂ og BE blir unormale. Er de forskjøvet i **samme** «sure» (eller «basiske») retning – f.eks. høy pCO₂ **og** negativ BE – er det en **kombinert** forstyrrelse, ikke kompensasjon.

:::husk
**Tolkning i fire trinn:**
1. **pH** – acidemi (< 7,35) eller alkalemi (> 7,45)?
2. **Hvilken komponent forklarer pH-avviket?** Høy pCO₂ forklarer lav pH; lav pCO₂ forklarer høy pH. Negativ BE forklarer lav pH; positiv BE forklarer høy pH. Den som forklarer pH, er den **primære**.
3. **Er den andre komponenten forskjøvet motsatt vei av hva pH tilsier?** Da er det **kompensasjon**. Normal = ukompensert (akutt).
4. **Klinikken** avgjør årsaken (KOLS, diaré, angst, diabetes …).
:::

### Siggaard-Andersen-diagrammet

Diagrammet (vedlegg på eksamen 2015–2018) er et **pH–pCO₂-diagram**:

- **Vannrett akse (nederst):** pH i arterieplasma, ca. 6,9–7,7. Under står tilsvarende [H⁺] i nmol/L (140 → 20) og ordene *acidemia – normal – alkalemia*.
- **Loddrett akse (høyre):** pCO₂ i arterieblod, **logaritmisk**, i mmHg og kPa (ca. 1,5–20 kPa), delt i *hypocapnia – normal – hypercapnia*.
- **Skrå, parallelle linjer:** linjer med **konstant base excess** (ekstracellulærvæske), fra −30 til +30 mmol/L med 5 mmol/L mellomrom. Verdien leses på skalaen **øverst til venstre** (*base deficit – normal – base excess*). Langs én slik linje endres bare pCO₂ – det er slik blodet oppfører seg ved en **akutt** respiratorisk endring.
- En skala for **plasma-[HCO₃⁻]** langs den vannrette linjen ved pCO₂ = 5,3 kPa (40 mmHg).
- **Felt** som viser hvor pasienter med typiske forstyrrelser havner: *normal area* (ellipse rundt pH 7,4/5,3 kPa), **acute hypercapnia** og **acute hypocapnia** (langs BE = 0-linjen, opp-venstre og ned-høyre), **chronic hypercapnia** (forskjøvet mot høyere BE og mer normal pH), **chronic hypocapnia**, **acute base deficit** (lav pH ved normal pCO₂ – ukompensert metabolsk acidose), **chronic base deficit** (lav pH **og** lav pCO₂ – metabolsk acidose med respiratorisk kompensasjon) og **chronic base excess** (høy pH og høy pCO₂ – kompensert metabolsk alkalose).

**Slik leser du av:**
1. Finn pH på den vannrette aksen og gå loddrett opp.
2. Finn pCO₂ (kPa) på den høyre aksen og gå vannrett inn. Krysningspunktet er pasienten.
3. Følg den skrå BE-linjen gjennom punktet opp mot skalaen øverst til venstre og **les av BE** (interpoler mellom linjene).
4. Se **hvilket felt** punktet ligger i – det gir forstyrrelsen og om den er akutt eller kronisk (kompensert).

Diagrammet gjør grafisk det samme som Henderson–Hasselbalch. Uten diagram kan du regne ut [HCO₃⁻] og sammenligne med 24 mmol/L.

:::eksempel[Kontroll uten diagram (H2015: pH 7,34, pCO₂ 9,3 kPa)]
$[\ce{HCO3-}] = 0{,}23 \cdot p\ce{CO2} \cdot 10^{\,\mathrm{pH}-6{,}1} = 0{,}23 \cdot 9{,}3 \cdot 10^{1{,}24} \approx 2{,}14 \cdot 17{,}4 \approx 37$ mmol/L

Normalt 24 → klart forhøyet. Ved en akutt pCO₂-økning stiger [HCO₃⁻] bare noen få mmol/L, så resten må være renal tilbakeholdelse: **BE ≈ +10**. Et grovt estimat er BE ≈ 0,93 · ([HCO₃⁻] − 24,4 + 14,8 · (pH − 7,4)) = 0,93 · (37 − 24,4 − 0,9) ≈ **+11** (formelen er bare til kontroll, ikke pensum).

Uten kompensasjon (BE = 0) ville pCO₂ 9,3 kPa gitt pH ≈ 7,15–7,2.
:::

### Anion gap

$$\text{Anion gap} = [\ce{Na+}] - ([\ce{Cl-}] + [\ce{HCO3-}]) \approx 12 \pm 4\ \text{mmol/L}$$

Plasma er elektrisk nøytralt. «Gapet» er de **umålte anionene** (særlig albumin, fosfat, sulfat, organiske anioner).

| Metabolsk acidose med … | Mekanisme | Eksempler |
|---|---|---|
| **Økt anion gap** | En **organisk syre** tilføres/dannes. H⁺ forbruker HCO₃⁻, og syrens **anion** (laktat, acetoacetat, β-hydroksybutyrat …) blir igjen som umålt anion | **Ketoacidose** (diabetes, sult), **laktacidose** (sjokk, hypoksi), nyresvikt, forgiftning (metanol, etylenglykol, salisylat) |
| **Normalt anion gap** (hyperkloremisk) | **HCO₃⁻ tapes**, og Cl⁻ øker tilsvarende | **Diaré**, enkelte nyretubulussykdommer |

:::feil
Økt anion gap sier noe om **årsaken** til acidosen (organiske syrer), **ikke** om kompensasjon eller varighet (H2016).
:::

### Posthyperkapnisk metabolsk alkalose

En KOLS-pasient med kronisk respiratorisk acidose har høy BE (nyrene har holdt tilbake HCO₃⁻ over dager). Senkes pCO₂ **raskt** til 5,3 kPa (respirator), står det høye bikarbonatet igjen alene – nyrene trenger dager på å skille det ut. Resultatet er **metabolsk alkalose** (H2017 5.45).

:::eksempel[Regn på det (H2017 5.43–5.45)]
pH 7,29, pCO₂ 9,0 kPa → [HCO₃⁻] = 0,23 · 9,0 · 10^1,19 ≈ 32 mmol/L, BE ≈ +6. Respiratorisk acidose med metabolsk kompensasjon.

Normaliseres pCO₂ til 5,3 kPa (BE fortsatt ≈ +6, [HCO₃⁻] ≈ 30): pH ≈ 6,1 + log(30/1,22) ≈ **7,49** → metabolsk alkalose.
:::

## Klinisk sammenheng

### Eksamenskasusene – løst

| Kasus | Verdier | BE (diagram) | Tolkning |
|---|---|---|---|
| **H2015** 60 år, røykhoste, influensa | pH 7,34, pCO₂ 9,3 | ≈ **+10** | **Kronisk respiratorisk acidose** (metabolsk kompensert). KOLS + infeksjon. **Hypoventilerer** (pCO₂ høy), selv om han puster fort |
| **H2017 5.40–5.42** 60 år, tarminfeksjon i Syden | pH 7,13, pCO₂ 2,3 | ≈ **−22** | **Metabolsk acidose med respiratorisk kompensasjon**. Årsak: **langvarig diaré** (tap av HCO₃⁻) – ikke brekninger (gir alkalose) |
| **H2017 5.43 / V2023** 72 år, KOLS, lungebetennelse | pH 7,29, pCO₂ 9,0 | positiv | **Respiratorisk acidose med metabolsk kompensasjon** |
| **H2017 5.44** samme, etter O₂ + antibiotika | pH 7,24, pCO₂ 11,0 | uendret | **Respirasjonssvikten er forverret, men den metabolske kompensasjonen er uendret** – punktet har flyttet seg langs samme BE-linje |
| **H2017 5.45** pCO₂ raskt til 5,3 med respirator | – | fortsatt positiv | **Metabolsk alkalose** (posthyperkapnisk) |
| **V2017 Q76** nervøs pasient i tannlegestolen, prikking, rykninger | pH 7,58, pCO₂ 2,95 | ≈ **0** | **Respiratorisk alkalose, ingen kompensasjon** (akutt). Likevekten har gått **mot venstre** |
| **V2018 4.66** 62 år, langtkommen MS + luftveisinfeksjon | pH 7,11, pCO₂ 23,6, BE +24 | +24 | **Respiratorisk acidose, delvis metabolsk kompensert** (svak respirasjonsmuskulatur → hypoventilering) |
| **V2018 4.67** KOLS, pCO₂ 7,5 på romluft | – | **> 0** | Riktig: **BE > 0**. Feil: pH > 7,4 (ingen overkompensasjon), pO₂ > 12 (lav på romluft), «pCO₂ normaliseres med O₂» (O₂ kan tvert imot øke pCO₂ hos KOLS) |

:::feil
- **Pusting fort ≠ hyperventilering.** Hyperventilering er definert som ventilasjon større enn CO₂-produksjonen krever, altså **lav pCO₂**. En KOLS-pasient som puster fort og anstrengt, men har høy pCO₂, **hypoventilerer** (H2015).
- pH fra 7,6 til 7,3 betyr at **[H⁺] dobles** ($10^{0{,}3} \approx 2$; fra ca. 25 til 50 nmol/L). Hvordan BE og pCO₂ endret seg, kan ikke avgjøres fra pH alene (V2018 4.65).
- Respiratorisk acidose kompenseres av **nyrene** (metabolsk), ikke ved at pasienten «puster mer».
:::

### Symptomer

- **Alkalose** (særlig akutt respiratorisk): lavere fritt Ca²⁺ (albumin binder mer) → **prikking og tetani** – se [hyperventilering](/medod1/cellebiologi/sammensatte-tema/blodets-ph-regulering-og-hyperventilering).
- **Respiratorisk acidose / hyperkapni**: tretthet, uklarhet, nedsatt bevissthet ved høy pCO₂ (MS-pasienten i V2018 var ikke kontaktbar).
- **Metabolsk acidose**: dyp, rask respirasjon (Kussmaul) er selve kompensasjonen.

## Koblinger til resten av pensum

- **Kjemien bak:** CO₂-likevekten, Henrys lov, 0,23-faktoren og åpent system → [karbonsyre og blodets pH](/medod1/generell-kjemi/teori/karbonsyre-og-blodets-ph); [Henderson–Hasselbalch](/medod1/generell-kjemi/regnetyper/henderson-hasselbalch); [buffere](/medod1/generell-kjemi/teori/buffere); Le Châtelier → [kjemisk likevekt](/medod1/generell-kjemi/teori/kjemisk-likevekt).
- **pH ↔ [H⁺]** (logaritmeskalaen i diagrammet) → [pH og H₃O⁺-omregning](/medod1/generell-kjemi/regnetyper/ph-og-h3o-omregning).
- **Hemoglobin** som buffer (derfor endres HCO₃⁻ litt ved akutt pCO₂-endring) og Bohr-effekten → [myoglobin og hemoglobin](/medod1/proteiner/teori/myoglobin-og-hemoglobin).
- **Hyperventilering, Ca²⁺ og albumin** → [blodets pH-regulering og hyperventilering](/medod1/cellebiologi/sammensatte-tema/blodets-ph-regulering-og-hyperventilering).
- **MS** (V2018-kasuset) → [multippel sklerose og myelin](/medod1/cellebiologi/sammensatte-tema/multippel-sklerose-og-myelin).
- **Oksygen kan også skade** → [jern, sporstoffer og oksygentoksisitet](/medod1/cellebiologi/sammensatte-tema/jern-sporstoffer-og-oksygentoksisitet).

## Test deg selv

:::sjekk[pH 7,13, pCO₂ 2,3 kPa hos en kvinne med tarminfeksjon. Hva er forstyrrelsen, omtrentlig BE og sannsynlig årsak?]
Lav pH med lav pCO₂: pCO₂ kan ikke forklare acidosen, så den er metabolsk. [HCO₃⁻] = 0,23 · 2,3 · 10^1,03 ≈ 5,7 mmol/L → BE ≈ −22. Lav pCO₂ er respiratorisk kompensasjon (hyperventilering). Årsak: langvarig diaré – tarmsekret er rikt på HCO₃⁻.
:::

:::sjekk[Hvorfor blir en KOLS-pasient med kronisk høy pCO₂ alkalotisk hvis pCO₂ raskt normaliseres på respirator?]
Over dager har nyrene holdt tilbake HCO₃⁻ (positiv BE) for å kompensere for respiratorisk acidose. Den renale kompensasjonen forsvinner ikke på timer. Når pCO₂ blir normal, står det høye bikarbonatet igjen alene → metabolsk (posthyperkapnisk) alkalose.
:::

:::sjekk[Hva betyr base excess, og hvorfor er den bedre enn aktuelt bikarbonat for å vurdere den metabolske komponenten?]
BE er mengden sterk syre per liter (ekstracellulærvæske) som trengs for å titrere tilbake til pH 7,40 ved pCO₂ 5,3 kPa og 37 °C (negativ BE = baseunderskudd). Den er definert ved normal pCO₂ og påvirkes derfor ikke av akutte respiratoriske endringer. Aktuelt [HCO₃⁻] endres litt når pCO₂ endres akutt, selv uten metabolsk forstyrrelse.
:::

:::sjekk[Hvordan leser du BE i Siggaard-Andersen-diagrammet?]
Finn pH på den vannrette aksen og pCO₂ (logaritmisk, kPa/mmHg) på den loddrette. Krysningspunktet er pasienten. Følg den skrå linjen med konstant BE gjennom punktet opp til BE-skalaen øverst til venstre og les av (interpoler mellom linjene, som går med 5 mmol/L mellomrom). Feltet punktet ligger i viser forstyrrelse og om den er akutt eller kronisk.
:::

:::sjekk[En pasient med metabolsk acidose har økt anion gap. Hva tyder det på – og hva tyder normalt anion gap på?]
Økt anion gap: acidosen skyldes opphopning av organiske syrer (ketoacidose, laktacidose, forgiftning), der syrens anion blir igjen som umålt anion. Normalt anion gap: HCO₃⁻ er tapt (f.eks. diaré) og erstattet av Cl⁻.
:::

:::sjekk[Nevn de fire primære syre-base-forstyrrelsene med primær endring, kompensasjon og ett eksempel hver.]
Respiratorisk acidose: pCO₂ ↑, nyrene øker HCO₃⁻ (dager), KOLS. Respiratorisk alkalose: pCO₂ ↓, nyrene skiller ut HCO₃⁻, angst/hyperventilering. Metabolsk acidose: HCO₃⁻ ↓/BE negativ, lungene senker pCO₂ (Kussmaul), diabetisk ketoacidose eller diaré. Metabolsk alkalose: HCO₃⁻ ↑/BE positiv, lungene hypoventilerer, langvarige brekninger.
:::
