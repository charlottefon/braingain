---
title: Blodets pH-regulering og hyperventilering
summary: Blodets pH (7,35–7,45) holdes av karbonsyre/bikarbonat i et åpent system der lungene styrer CO₂ – pH = 6,1 + log([HCO₃⁻]/[CO₂]) = 6,1 + log 20 = 7,4. Hyperventilering blåser ut CO₂ → likevekten går mot venstre → pH stiger (respiratorisk alkalose); hemoglobin binder O₂ tettere og albumin binder mer Ca²⁺ (prikking, tetani).
category: tema
tags: [hyperventilering, karbonsyre, bikarbonat, buffer, Henderson-Hasselbalch, respiratorisk alkalose, åpent system, Henrys lov, Bohr-effekt, kalsium, albumin]
related:
  - cellebiologi/sammensatte-tema/saliva-og-salivas-kjemi
  - cellebiologi/sammensatte-tema/multippel-sklerose-og-myelin
  - cellebiologi/sammensatte-tema/syre-base-forstyrrelser-og-blodgass
  - cellebiologi/cellen/membraner-og-membrantransport
  - generell-kjemi/teori/karbonsyre-og-blodets-ph
  - generell-kjemi/teori/buffere
  - generell-kjemi/regnetyper/henderson-hasselbalch
  - generell-kjemi/teori/kjemisk-likevekt
  - proteiner/teori/myoglobin-og-hemoglobin
  - proteiner/aminosyrer/histidin
sources:
  - file: medod1/material/generell-kjemi/hyperventilering--7794027.pdf
  - file: medod1/material/generell-kjemi/videomaterialer-om-blodets-ph-regulering-og-hyperventilering--page-374273.html
  - file: medod1/material/cellebiologi/sammensatte-tema--page-374222.html
  - file: medod1/exams/2026-sensorveiledning-langsvar-medod1-ny-v2026--7644058.docx
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2023-medod1-ny-v2023-med-svar--5194537.pdf
  - file: medod1/exams/2022-medod1-h2022-med-svar--4750110.pdf
  - file: medod1/exams/2022-medod2-ny-v2022-med-svar--8068332.pdf
  - file: medod1/exams/2021-medod1-h2021-med-svar--3944361.pdf
---

## Hvorfor dette temaet

Hyperventilering er et vanlig klinisk bilde (angst, smerte, pasient på legekontoret) og et perfekt eksempel på **kjemisk likevekt i kroppen**. Læringsmålet «**forklare hvordan karbonsyre fungerer som buffer i kroppen**» testes direkte. Temaet gis digitalt (video + presentasjon av Petri Kursula, og en pasientsamtale-video) – og «ja, det er pensum».

Kjemiske hovedpunkter: **CO₂-systemet, Henderson–Hasselbalch, Le Châtelier, åpent vs. lukket system, Henrys lov**.

:::eksamen
- **Kortsvar V2026 (4 p):** «Forklar kort, i maks 5 setninger, kjemien av hvordan hyperventilering påvirker blodets pH.» Sensorveiledningen krever:
  1. pH i blodet buffres av **karbonsyresystemet**.
  2. **CO₂ omdannes til karbonsyre (H₂CO₃)**, som danner en buffer med **bikarbonat (HCO₃⁻)**.
  3. Ved hyperventilering **pustes mye CO₂ ut** → **karbonsyrekonsentrasjonen i blodet synker**.
  4. Dette gir **økt pH** i blodet.
- **Kortsvar H2025 (3 p):** «Navngi de tre viktigste biologiske buffersystemene» → **karbonsyre/bikarbonat, fosfat (H₂PO₄⁻/HPO₄²⁻), proteiner**.
- **Flervalg:** «Hyperventilering kan forårsake …» → **respiratorisk alkalose** (H2022). «Hva skjer i professorens blod?» → **[CO₂] minker** / **blodets pH øker** (H2021, V2022). Feil: «[fritt Ca²⁺] øker» (det **minker**), «hemoglobin binder ikke lenger O₂» (det binder **tettere**).
- «Hyperventilering endrer albumin og hemoglobin» → **albumin binder mer kalsium, og hemoglobin har høyere affinitet for oksygen** (V2023).
- **Regneoppgave (H2024):** hypoventilering øker [H₂CO₃] fra 1,2 til 3,0 mM, [HCO₃⁻] = 24 mM, pKₐ 6,1 → pH = 6,1 + log(24/3,0) = 6,1 + 0,90 = **7,0**.
- «Med Henderson–Hasselbalch kan vi beregne …» → **blodets pH** (V2024, H2025) – ikke løselighet, E° eller ΔG.
:::

## Basalfaget

### Blodets pH og buffersystemer

| | Verdi |
|---|---|
| Arterielt blod, referanseområde | **pH 7,35–7,45** (klinisk lab: 7,35–7,43) |
| Yttergrenser (livstruende) | pH **6,8–7,8** |
| [H⁺] ved pH 6,8 / 7,4 / 7,8 | 160 nM / **40 nM** / 16 nM |

Små pH-endringer (noen tideler) gir alvorlige symptomer, fordi reaksjoner og likevekter (proteiners ladning!) er svært pH-sensitive.

**Tre buffersystemer i kroppsvæskene:**

1. **Karbonsyre–bikarbonat** – **det viktigste i blodet**
2. **Dihydrogenfosfat–hydrogenfosfat** ($\ce{H2PO4- <=> HPO4^2- + H+}$, pKₐ 7,2) – viktig intracellulært og i urin (og i hvilesaliva)
3. **Proteiner** – sidekjeder (særlig histidin) kan være protondonorer eller -akseptorer (hemoglobin, albumin)

### CO₂-systemet

$$\ce{CO2(g) <=> CO2(aq) + H2O <=>[\text{karbonsyreanhydrase}] H2CO3 <=> HCO3- + H3O+}$$

| Reaksjon | Konstant |
|---|---|
| (1) $\ce{CO2(aq) + H2O <=> H2CO3}$ | K = 3,7 · 10⁻³ (det meste forblir CO₂(aq)) |
| (2) $\ce{H2CO3 + H2O <=> HCO3- + H3O+}$ | Kₐ₁′ = 1,2 · 10⁻⁴ |
| (1) + (2): $\ce{CO2 + 2H2O <=> HCO3- + H3O+}$ | **Kₐ₁ = K · Kₐ₁′ = 4,46 · 10⁻⁷** (ionestyrke 0, 25 °C) |
| $\ce{HCO3- + H2O <=> CO3^2- + H3O+}$ | Kₐ₂ = 5,6 · 10⁻¹¹ – **kan sees bort fra** ved blodets pH |

Fordi H₂CO₃ er så lite i forhold til CO₂(aq), slås trinn (1) og (2) sammen, og «syren» i bufferen regnes som **løst CO₂**. **Ved 37 °C (fysiologisk ionestyrke) er pKₐ₁ = 6,1.**

- **Karbonsyreanhydrase** (i røde blodceller) gjør hydratiseringen av CO₂ ekstremt rask (~1 million ganger per sekund per enzym).
- CO₂ fra forbrenning i vevet diffunderer inn i **røde blodceller** → HCO₃⁻ + H⁺ → HCO₃⁻ byttes mot Cl⁻ via en **Cl⁻/HCO₃⁻-antiporter** («kloridskifte») og fraktes i plasma. I lungene går det motsatt vei, og CO₂ pustes ut.

### Henrys lov

**Løseligheten av en gass i en væske er proporsjonal med partialtrykket av gassen over væsken.**

| | Alveoleluft | Vanlig luft |
|---|---|---|
| $p_{\ce{CO2}}$ | **5,3 kPa** | 0,02 kPa |
| [CO₂] i vann i likevekt | **1,8 · 10⁻³ M** | 7 · 10⁻⁶ M |

Derfor bestemmes [CO₂(aq)] i blodet av **partialtrykket av CO₂ i lungene** – og dermed av **pustingen**.

:::eksempel[pH i rent vann i likevekt med luft]
[CO₂] = 7 · 10⁻⁶ M, Kₐ₁ = 4,46 · 10⁻⁷. Sett x = [H₃O⁺] = [HCO₃⁻]:
$$\frac{x^2}{7\cdot 10^{-6}} = 4{,}46\cdot 10^{-7} \Rightarrow x = \sqrt{(7\cdot10^{-6})(4{,}46\cdot10^{-7})} = 1{,}77\cdot 10^{-6}\ \text{M}$$
$$pH = 5{,}8$$
Vann som står åpent mot luft er altså svakt surt.
:::

### Henderson–Hasselbalch for blod

$$pH = pK_a + \log\frac{[\text{base}]}{[\text{syre}]} = 6{,}1 + \log\frac{[\ce{HCO3-}]}{[\ce{CO2(aq)}]}$$

:::eksempel[pH i blod]
[HCO₃⁻] = 24 mM, [CO₂(aq)] = 1,2 mM, pKₐ = 6,1.
$$pH = 6{,}1 + \log\frac{24}{1{,}2} = 6{,}1 + \log 20 = 6{,}1 + 1{,}3 = 7{,}4$$
**Forholdet [HCO₃⁻] : [CO₂] = 20 : 1 gir pH 7,4.**
:::

Klinisk brukes en form der [CO₂(aq)] erstattes med partialtrykket (Henrys lov, løselighetskoeffisient ~0,0307 mmol/(L·mmHg)):

$$pH = 6{,}1 + \log\frac{[\ce{HCO3-}]}{0{,}0307 \times p_{\ce{CO2}}}$$

### Åpent vs. lukket system – hvorfor bufferen virker selv om pH ≠ pKₐ

pH 7,4 ligger langt fra pKₐ 6,1 (utenfor det klassiske bufferområdet pKₐ ± 1). Likevel er bufferen svært effektiv – fordi systemet er **åpent**.

:::eksempel[Tilsett 12 mmol HCl til 1 L blod]
H₃O⁺ reagerer med HCO₃⁻: [HCO₃⁻] = 24 − 12 = **12 mM**.

**Lukket system** (CO₂ kan ikke unnslippe): [CO₂(aq)] = 1,2 + 12 = 13,2 mM
$$pH = 6{,}1 + \log\frac{12}{13{,}2} = 6{,}1 \quad\text{(dødelig!)}$$

**Åpent system** (lungene puster ut overskuddet; [CO₂(aq)] holdes konstant av $p_{\ce{CO2}}$): [CO₂(aq)] = 1,2 mM
$$pH = 6{,}1 + \log\frac{12}{1{,}2} = 6{,}1 + 1 = 7{,}1$$
pH holder seg **ganske stabil**.
:::

:::husk
Kroppen har et **åpent system**: [CO₂(aq)] bestemmes av lungene (pusting), [HCO₃⁻] av nyrene (metabolsk komponent). pH bestemmes av **partialtrykket av CO₂ og [HCO₃⁻]**.
:::

### Hva skjer ved hyperventilering? (Le Châtelier)

1. Rask og dyp pusting → **partialtrykket av CO₂ i lungene synker**.
2. Henrys lov → **[CO₂(aq)] i blodet synker** (og dermed [H₂CO₃]).
3. Le Châtelier → likevekten $\ce{CO2 + H2O <=> H2CO3 <=> HCO3- + H3O+}$ **drives mot venstre** (H₃O⁺ + HCO₃⁻ → H₂CO₃ → CO₂ + H₂O).
4. **[H₃O⁺] synker → pH stiger** → **respiratorisk alkalose**.

Med HH: forholdet [HCO₃⁻]/[CO₂] blir større enn 20 → pH > 7,4.

### Acidose og alkalose

| Tilstand | Årsak | Effekt |
|---|---|---|
| **Respiratorisk acidose** | Redusert pusting (hypoventilering) → CO₂ hoper seg opp | pH ↓ |
| **Respiratorisk alkalose** | **Hyperventilering** → for mye CO₂ blåses ut | pH ↑ |
| **Metabolsk acidose** | Overskudd av andre syrer (f.eks. melkesyre, ketonlegemer) forbruker HCO₃⁻ | pH ↓ |
| Metabolsk alkalose | Tap av syre (f.eks. oppkast) eller overskudd av base | pH ↑ |

**Kompensasjon:** ved en respiratorisk forstyrrelse justerer nyrene [HCO₃⁻] (metabolsk kompensasjon, tar dager); ved en metabolsk forstyrrelse justerer lungene pCO₂ (respiratorisk kompensasjon, minutter). Normal arteriell pCO₂ ≈ 4,7–6,0 kPa (alveoleluft ~5,3 kPa).

:::eksamen
V2023: KOLS-pasient med pH 7,29 og pCO₂ 9,0 kPa → **respiratorisk acidose med metabolsk kompensasjon** (lav pH + høy pCO₂ = respiratorisk acidose; ved kronisk sykdom holder nyrene tilbake HCO₃⁻, så pH faller mindre enn ventet).
Full gjennomgang av blodgasstolkning, base excess og Siggaard-Andersen-diagrammet: [syre-base-forstyrrelser og blodgass](/medod1/cellebiologi/sammensatte-tema/syre-base-forstyrrelser-og-blodgass).
:::

## Klinisk sammenheng

### Symptomer

Følelse av å ikke få puste (lufthunger), svimmelhet, **nummenhet og prikking** (rundt munnen, i fingre), **«kramper»** (tetani, f.eks. i hender), angst, brystsmerter.

### Hvorfor «oksygenmangel» når man puster mer? – hemoglobin

Hemoglobins O₂-binding påvirkes av **pH, pO₂, temperatur og 2,3-BPG**. **Bohr-effekten:** lav pH og høy CO₂ gjør at hemoglobin slipper O₂ lettere; omvendt:

- Ved hyperventilering (lav CO₂, **høy pH**) binder hemoglobin O₂ **tettere** (dissosiasjonskurven forskyves mot venstre) og **slipper O₂ dårligere ut til vevet**.
- Cellene får mindre O₂ → kroppen signaliserer behov for mer → personen puster enda raskere → enda mindre CO₂ → **ond sirkel**.

### Hvorfor prikking og kramper? – albumin og Ca²⁺

1. **Serumalbumin** er et plasmaprotein (~600 aminosyrer) som binder og transporterer ioner m.m. – en **«flerprotisk syre»**.
2. Når pH **øker**, avgir sidekjedene H⁺ → albumin blir **mer negativt ladet**.
3. Albumin **binder mer Ca²⁺** → **fritt (ionisert) Ca²⁺ i blodet synker**.
4. Lavt ekstracellulært Ca²⁺ gjør nervecellemembranene **lettere eksiterbare**: spenningen over membranen endres slik at det oftere oppstår **spontane aksjonspotensialer**. Nerver er mer følsomme for Ca²⁺-endring enn muskler.
5. I **afferente** (sensoriske) fibre → **prikking/nummenhet**. I **efferente** (motoriske) fibre → **spontane muskelkontraksjoner** (hypokalsemisk **tetani**; f.eks. Chvosteks tegn). Musklene trekker seg sammen fordi motornevronene fyrer, ikke fordi muskelcellene selv er irritable.

Ca²⁺ er også et viktig intracellulært signal (kalmodulin som Ca²⁺-sensor, muskelkontraksjon, synaptisk transmisjon).

:::feil
- Fritt Ca²⁺ **synker** ved hyperventilering (totalt kalsium er uendret – det er bindingen til albumin som øker).
- Hemoglobin binder **ikke mindre** O₂ – det binder **tettere** og avgir mindre til vevet.
- Hyperventilering gir **alkalose**, ikke acidose.
:::

## Koblinger til resten av pensum

- **Samme stoff fra kjemisiden:** [karbonsyre og blodets pH](/medod1/generell-kjemi/teori/karbonsyre-og-blodets-ph).
- **Buffere og Henderson–Hasselbalch** → [buffere](/medod1/generell-kjemi/teori/buffere), regnetype [Henderson–Hasselbalch](/medod1/generell-kjemi/regnetyper/henderson-hasselbalch); **Le Châtelier** → [kjemisk likevekt](/medod1/generell-kjemi/teori/kjemisk-likevekt); **flerprotiske syrer** → [flerprotiske syrer og aminosyrer](/medod1/generell-kjemi/teori/flerprotiske-syrer-og-aminosyrer).
- **Samme bikarbonatbuffer i saliva** (karbonsyreanhydrase, stimulert saliva) → [saliva og salivas kjemi](/medod1/cellebiologi/sammensatte-tema/saliva-og-salivas-kjemi).
- **Hemoglobin, Bohr-effekt, 2,3-BPG** → [myoglobin og hemoglobin](/medod1/proteiner/teori/myoglobin-og-hemoglobin); **histidin som buffer** → [histidin](/medod1/proteiner/aminosyrer/histidin); albumin som flerprotisk syre → [aminosyrer](/medod1/proteiner/teori/aminosyrer). Karbonsyreanhydrase som et av de raskeste enzymene → [enzymkatalyse](/medod1/proteiner/teori/enzymkatalyse).
- **Membrantransport:** CO₂ diffunderer fritt gjennom membraner, HCO₃⁻ trenger Cl⁻/HCO₃⁻-antiporter → [membraner og membrantransport](/medod1/cellebiologi/cellen/membraner-og-membrantransport).
- **Titrering av flerprotiske syrer** i lab → [titrering av aminosyrer](/medod1/lab/ovelser/titrering-aminosyrer).
- **Kalmodulin og Ca²⁺** → [MS og myelin](/medod1/cellebiologi/sammensatte-tema/multippel-sklerose-og-myelin).

## Test deg selv

:::sjekk[Skriv et 4-poengs kortsvar: hvordan påvirker hyperventilering blodets pH?]
Blodets pH buffres av karbonsyresystemet. CO₂ reagerer med vann til karbonsyre (H₂CO₃), som danner en buffer med bikarbonat (CO₂ + H₂O ⇌ H₂CO₃ ⇌ HCO₃⁻ + H⁺). Ved hyperventilering pustes mye CO₂ ut, så [CO₂] og karbonsyrekonsentrasjonen i blodet synker. Likevekten forskyves mot venstre (Le Châtelier), [H⁺] synker og pH øker (respiratorisk alkalose).
:::

:::sjekk[Beregn blodets pH hvis [HCO₃⁻] = 24 mM og [CO₂(aq)] faller til 0,6 mM ved hyperventilering (pKₐ 6,1).]
pH = 6,1 + log(24/0,6) = 6,1 + log 40 = 6,1 + 1,6 = 7,7. Alkalose.
:::

:::sjekk[Hvorfor er karbonsyre/bikarbonat en god buffer i blodet selv om pKₐ (6,1) er langt fra 7,4?]
Systemet er åpent: lungene holder [CO₂(aq)] konstant ved å puste ut eller holde tilbake CO₂, og nyrene regulerer [HCO₃⁻]. Tilsatt syre omdannes til CO₂ som pustes ut, så forholdet base/syre endres lite. Eksempel: 12 mM HCl gir pH 7,1 i åpent system, men 6,1 i lukket.
:::

:::sjekk[Hvorfor får en person som hyperventilerer prikking i fingrene?]
Høyere pH gjør albumin mer negativt ladet, så det binder mer Ca²⁺. Fritt Ca²⁺ i plasma synker, nervemembranene blir lettere eksiterbare, og spontane aksjonspotensialer i sensoriske fibre oppleves som prikking (i motoriske fibre som kramper/tetani).
:::

:::sjekk[Hvorfor kan hyperventilering føles som oksygenmangel?]
Høy pH og lav CO₂ øker hemoglobins O₂-affinitet (omvendt Bohr-effekt). Hemoglobin slipper mindre O₂ til vevet, selv om blodet er godt oksygenert. Følelsen av lufthunger fører til mer pusting – en ond sirkel.
:::

:::sjekk[Nevn de tre viktigste biologiske buffersystemene.]
Karbonsyre/bikarbonat, fosfat (dihydrogenfosfat/hydrogenfosfat) og proteiner.
:::
