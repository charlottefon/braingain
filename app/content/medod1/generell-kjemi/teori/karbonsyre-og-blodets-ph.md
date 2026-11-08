---
title: Karbonsyre som buffer i kroppen – blodets pH og hyperventilering
summary: CO₂ + H₂O ⇌ H₂CO₃ ⇌ HCO₃⁻ + H₃O⁺ er blodets viktigste buffer (pKa 6,1 ved 37 °C). Med [HCO₃⁻] = 24 mM og [CO₂] = 1,2 mM gir Henderson–Hasselbalch pH 7,4. Systemet er åpent fordi lungene holder pCO₂ konstant, og derfor bufrer det langt bedre enn et lukket system. Hyperventilering fjerner CO₂, likevekten forskyves mot venstre og pH stiger (respiratorisk alkalose), med høyere O₂-affinitet for Hb og lavere fritt Ca²⁺.
order: 12
tags: [karbonsyre, hydrogenkarbonat, bikarbonat, CO2, blod-pH, hyperventilering, respiratorisk alkalose, acidose, åpent system, Henrys lov, karbonsyreanhydrase, Bohr-effekt, albumin, kalsium]
related:
  - generell-kjemi/teori/buffere
  - generell-kjemi/teori/flerprotiske-syrer-og-aminosyrer
  - generell-kjemi/teori/kjemisk-likevekt
  - generell-kjemi/regnetyper/henderson-hasselbalch
  - generell-kjemi/regnetyper/buffer-tilsatt-syre-eller-base
  - cellebiologi/sammensatte-tema/blodets-ph-regulering-og-hyperventilering
  - proteiner/teori/myoglobin-og-hemoglobin
sources:
  - file: medod1/material/generell-kjemi/hyperventilering--7794027.pdf
  - file: medod1/material/generell-kjemi/videomaterialer-om-blodets-ph-regulering-og-hyperventilering--page-374273.html
  - file: medod1/material/generell-kjemi/forelesning-4-2026--8041090.pdf
    pages: "4, 10-15"
  - file: medod1/material/generell-kjemi/forelesning2-2026--7998527.pdf
    pages: "28-29"
  - file: medod1/material/cellebiologi/celle1-hovedside--page-374070.html
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
  - file: medod1/exams/2026-sensorveiledning-langsvar-medod1-ny-v2026--7644058.docx
  - file: medod1/exams/2024-medod1-h2024-med-svar--7298977.pdf
  - file: medod1/exams/2023-medod1-ny-v2023-med-svar--5194537.pdf
  - file: medod1/exams/2022-medod1-h2022-med-svar--4750110.pdf
---

## Hvorfor dette er et eget læringsmål

Læringsmålet lyder: **«Kunne forklare korleis karbonsyre fungerer som buffer i kroppen.»** Lærestoffet (forelesning 4 og videoene om blodets pH og hyperventilering) knytter sammen fem kjemiske prinsipper:
1. CO₂-systemet (flerprotisk syre),
2. Henderson–Hasselbalch,
3. Le Châteliers prinsipp,
4. åpent kontra lukket system,
5. Henrys lov.

Videoen er uttrykkelig pensum. Den fysiologiske siden (kompensasjon, symptomer) er samlet i [blodets pH-regulering og hyperventilering](/medod1/cellebiologi/sammensatte-tema/blodets-ph-regulering-og-hyperventilering).

## Blodets pH

| | pH | [H⁺] |
|---|---|---|
| Arterielt blod, referanseområde | 7,35–7,45 (7,35–7,43) | ca. 40 nM ved 7,4 |
| Ytre grenser forenlig med liv | 6,8–7,8 | 160–16 nM |

Variasjoner på noen tideler av en pH-enhet gir alvorlige symptomer. Oksygentransporten krever at pH ikke varierer mer enn ca. 0,1.

Kroppens tre buffersystemer er **karbonsyre/hydrogenkarbonat** (viktigst i blod), **fosfat** og **proteiner** (se [buffere](/medod1/generell-kjemi/teori/buffere)).

## CO₂-systemet

CO₂ dannes ved forbrenning i cellene. I røde blodceller hydratiseres det raskt av enzymet **karbonsyreanhydrase** (ca. 10⁶ reaksjoner per sekund). HCO₃⁻ transporteres ut av erytrocytten i bytte mot Cl⁻ (klorid–bikarbonat-antiport).

$$\ce{CO2(g) <=> CO2(aq) + H2O <=> H2CO3 <=> HCO3- + H3O+}$$

CO₂(g) står for gassen i lungene, og karbonsyreanhydrase katalyserer CO₂(aq) + H₂O ⇌ H₂CO₃.

| Trinn | Likevekt | K |
|---|---|---|
| (1) | $\ce{CO2(aq) + H2O <=> H2CO3}$ | $3{,}7\cdot10^{-3}$ (det meste foreligger som CO₂(aq)) |
| (2) | $\ce{H2CO3 + H2O <=> HCO3- + H3O+}$ | $K_{a1}' = 1{,}2\cdot10^{-4}$ |
| (1)+(2) | $\ce{CO2 + 2H2O <=> HCO3- + H3O+}$ | $K_{a1} = K\cdot K_{a1}' \approx 4{,}4\cdot10^{-7}$ (tabellverdi $4{,}46\cdot10^{-7}$, pKa 6,35) |
| Andre trinn | $\ce{HCO3- + H2O <=> CO3^2- + H3O+}$ | $K_{a2} = 5{,}6\cdot10^{-11}$ (uten betydning i blod) |

Trinn (1) og (2) slås sammen, og «syren» i bufferen regnes som **løst CO₂**. Dette er regelen om at summerte reaksjoner gir $K = K_1K_2$.

Konstantene avhenger av ionestyrke og temperatur:

| Betingelser | pKa1 | pKa2 |
|---|---|---|
| Ionestyrke 0, 25 °C | 6,35 | 10,25 |
| Ionestyrke 0,2 M, 25 °C | 6,24 | 10,01 |
| **Fysiologisk, 37 °C** | **6,1** | – |

Forelesning 4 bruker 6,38 og 10,32 i protolyttdiagrammet.

### Henrys lov kobler pCO₂ til [CO₂(aq)]

**Løseligheten til en gass er proporsjonal med partialtrykket.** I alveolene er $p_{CO_2} \approx 5{,}3$ kPa, mens vanlig luft har ca. 0,02 kPa. **[CO₂(aq)] og dermed [H₂CO₃] bestemmes av pCO₂**, og pH i blod bestemmes derfor av **pCO₂ og [HCO₃⁻]**.

:::eksempel[pH i rent vann i likevekt med luft]
[CO₂] = 7·10⁻⁶ M og $K_{a1} = 4{,}46\cdot10^{-7}$:
$[H_3O^+] = \sqrt{(7\cdot10^{-6})(4{,}46\cdot10^{-7})} = 1{,}77\cdot10^{-6}$ M, som gir **pH ≈ 5,8**.
Destillert vann som står åpent, blir altså svakt surt. Det forklarer også eksamensspørsmålet om at vann som har stått over natten, smaker annerledes: CO₂ er løst, og pH har sunket (H2024).
:::

## pH i blod med Henderson–Hasselbalch

$$pH = pK_a + \log\frac{[HCO_3^-]}{[CO_2(aq)]}$$

:::eksempel[Normalt arterieblod: [HCO₃⁻] = 24 mM, [CO₂(aq)] = 1,2 mM, pKa = 6,1]
$$pH = 6{,}1 + \log\frac{24}{1{,}2} = 6{,}1 + \log 20 = 6{,}1 + 1{,}3 = \mathbf{7{,}4}$$
Forholdet [HCO₃⁻]/[CO₂] = **20 : 1** gir pH 7,4.
:::

En mye brukt klinisk form setter inn partialtrykket direkte: $[CO_2(aq)] \approx 0{,}23\ \tfrac{\text{mM}}{\text{kPa}}\cdot p_{CO_2}$. Med 5,3 kPa gir det 1,2 mM:

$$pH = 6{,}1 + \log\frac{[HCO_3^-]}{0{,}23\cdot p_{CO_2}}$$

### Et rart buffervalg?

pH 7,4 ligger **1,3 enheter over pKa (6,1)**, altså utenfor det klassiske bufferområdet (pKa ± 1). I et lukket kar ville systemet bufret dårlig mot syre. At det likevel er blodets viktigste buffer, skyldes at det er **åpent**.

| | Lukket system | Åpent system (kroppen) |
|---|---|---|
| Tilsetter 12 mM HCl | HCO₃⁻: 24 → 12 mM; CO₂: 1,2 → **13,2 mM** | HCO₃⁻: 24 → 12 mM; CO₂ pustes ut og **holdes på 1,2 mM** |
| pH | $6{,}1 + \log\frac{12}{13{,}2} = \mathbf{6{,}1}$ – dødelig | $6{,}1 + \log\frac{12}{1{,}2} = \mathbf{7{,}1}$ – ganske stabilt |

Lungene fjerner CO₂ kontinuerlig og holder pCO₂ konstant (Le Châtelier: produktet fjernes). Nyrene regulerer [HCO₃⁻] over tid. pH styres altså av **to uavhengige «knotter»**: respirasjon (CO₂) og metabolisme/nyre (HCO₃⁻).

## Acidose og alkalose

| Tilstand | Årsak | Primærendring |
|---|---|---|
| **Respiratorisk acidose** | redusert respirasjon (hypoventilering, KOLS) | CO₂ hopes opp, og pH synker |
| **Respiratorisk alkalose** | **hyperventilering** | for mye CO₂ fjernes, og pH stiger |
| Metabolsk acidose | overskudd av andre syrer (f.eks. ketosyrer) | HCO₃⁻ forbrukes, og pH synker |
| Metabolsk alkalose | tap av syre eller tilførsel av base | HCO₃⁻ øker, og pH stiger |

:::eksempel[Eksamen H2024: hypoventilering – [H₂CO₃] stiger fra 1,2 til 3,0 mM, [HCO₃⁻] = 24 mM, pKa 6,1]
$pH = 6{,}1 + \log\frac{24}{3{,}0} = 6{,}1 + \log 8 = 6{,}1 + 0{,}90 = \mathbf{7{,}0}$
:::

:::eksempel[Eksamen V2023: KOLS-pasient med pH 7,29 og pCO₂ 9,0 kPa]
pCO₂ er høy (normalt ca. 5,3 kPa), og pH er lav. Det er **respiratorisk acidose**. Regner man ut [HCO₃⁻] = 0,23·9,0·10^(7,29−6,1) ≈ 32 mM, er den forhøyet (normalt 24 mM). Nyrene har altså holdt tilbake HCO₃⁻: det er **metabolsk kompensasjon**.
:::

## Hyperventilering – kjemien steg for steg

1. Rask, dyp pusting **senker pCO₂** i alveolene.
2. Etter Henrys lov synker **[CO₂(aq)]** i blodet.
3. Likevekten $\ce{CO2 + H2O <=> H2CO3 <=> HCO3- + H3O+}$ forskyves **mot venstre** (Le Châtelier): H₃O⁺ og HCO₃⁻ danner CO₂ som pustes ut.
4. **[H₃O⁺] synker, og pH stiger.** Det er respiratorisk alkalose. I HH-likningen øker forholdet [HCO₃⁻]/[CO₂].

Med regnetall: faller pCO₂ til 3 kPa ([CO₂] ≈ 0,69 mM) mens [HCO₃⁻] er 24 mM, blir pH ≈ 6,1 + log(24/0,69) ≈ 7,64.

### Følgene

- **Hemoglobin binder O₂ sterkere** ved høy pH og lav CO₂ ([Bohr-effekten](/medod1/proteiner/teori/myoglobin-og-hemoglobin)). O₂ slippes dårligere i vevet, og cellene opplever O₂-mangel til tross for mye pusting. Kroppen signaliserer at den trenger mer O₂, personen puster enda raskere, og det blir en ond sirkel.
- **Fritt Ca²⁺ i plasma synker.** Serumalbumin er en «flerprotisk syre» med ca. 600 aminosyrer. Når pH stiger, deprotoneres flere sidekjeder, proteinet blir mer negativt og **binder mer Ca²⁺**.
- Lavt fritt Ca²⁺ gjør nerver mer eksitable (de er mer følsomme enn muskel). Det gir spontane aksjonspotensialer: **prikking og nummenhet** i afferente fibre og **kramper/tetani** i efferente fibre (f.eks. Chvosteks tegn).
- Andre symptomer: følelse av ikke å få puste, svimmelhet, angst, brystsmerter.

:::eksamen
- **Langsvar V2026** (4 p, maks 5 setninger): «Forklar kjemien av hvordan hyperventilering påvirker blodets pH.» Sensorveiledningen krever fire punkter:
  1. blodets pH bufres av karbonsyresystemet;
  2. CO₂ omdannes til H₂CO₃, som danner buffer med HCO₃⁻;
  3. ved hyperventilering pustes mye CO₂ ut, og [H₂CO₃] i blodet synker;
  4. pH stiger.
- Flervalg:
  - «Hyperventilering gir» **respiratorisk alkalose** (H2022) og **økt pH** (H2021). «Økt CO₂» og «økt fritt Ca²⁺» er feil.
  - Effekt på albumin og Hb: albumin **binder mer** Ca²⁺, og Hb får **høyere** O₂-affinitet (V2023).
  - «Henderson–Hasselbalch brukes til å beregne» **blodets pH** (4 eksamener).
:::

:::feil
- Hyperventilering gir **ikke** mer O₂ til vevet. Hb holder bedre på O₂ ved høy pH.
- Ca²⁺ forsvinner ikke ut av kroppen. Det er **fritt (ionisert)** Ca²⁺ som synker, fordi mer bindes til albumin.
- Karbonsyrebufferen virker godt **fordi systemet er åpent**, ikke fordi pKa er nær 7,4.
:::

## Test deg selv

:::sjekk[Forklar med Le Châtelier hvorfor pH stiger ved hyperventilering.]
CO₂ pustes ut, så [CO₂(aq)] synker. Likevekten CO₂ + H₂O ⇌ H₂CO₃ ⇌ HCO₃⁻ + H₃O⁺ forskyves mot venstre for å erstatte CO₂, og det forbruker H₃O⁺. [H₃O⁺] synker, og pH stiger.
:::

:::sjekk[Hvorfor er det [CO₂(aq)] og ikke [H₂CO₃] som settes inn som «syre» i HH-likningen for blod?]
Hydratiseringen av CO₂ har K = 3,7·10⁻³, så nesten alt foreligger som CO₂(aq). De to trinnene slås sammen til én likevekt, CO₂ + 2H₂O ⇌ HCO₃⁻ + H₃O⁺, med samlet Ka1 (pKa 6,1 ved 37 °C). [CO₂(aq)] er dessuten den størrelsen som er knyttet til pCO₂ via Henrys lov.
:::

:::sjekk[Blod har pH 7,4 med HCO₃⁻/CO₂ = 20. Hva blir pH hvis HCO₃⁻ faller til 12 mM ved metabolsk acidose og lungene holder CO₂ på 1,2 mM? Og uten kompensasjon fra lungene i et lukket system?]
Åpent system: 6,1 + log(12/1,2) = **7,1**. Lukket system: HCl gjør HCO₃⁻ om til CO₂, slik at CO₂ blir 13,2 mM og pH = 6,1 + log(12/13,2) ≈ **6,1**.
:::

:::sjekk[Hvorfor får en som hyperventilerer prikking i fingrene og kramper?]
Høyere pH gjør albumin mer negativt ladet, og det binder mer Ca²⁺. Fritt Ca²⁺ synker (funksjonell hypokalsemi), nervecellene blir mer eksitable og fyrer spontane aksjonspotensialer. Det gir parestesier og muskelkramper (tetani).
:::

:::sjekk[Hvorfor blir destillert vann som står åpent, svakt surt (pH ≈ 5,8)?]
CO₂ fra luften løses i vannet (Henrys lov, ca. 7·10⁻⁶ M). Det danner H₂CO₃/HCO₃⁻ + H₃O⁺ (Ka1 = 4,46·10⁻⁷), som gir [H₃O⁺] ≈ 1,8·10⁻⁶ M.
:::
