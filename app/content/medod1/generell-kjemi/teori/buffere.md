---
title: Buffere og Henderson–Hasselbalch-likningen
summary: En buffer er en blanding av en svak syre og dens korresponderende base og motstår pH-endringer når litt syre eller base tilsettes. pH beregnes med Henderson–Hasselbalch, pH = pKa + log([A⁻]/[HA]). Bufferområdet er pKa ± 1, og bufferen er mest effektiv ved pH = pKa ([A⁻] = [HA]). De viktigste biologiske bufrene er hydrogenkarbonat, fosfat og proteiner.
order: 10
tags: [buffer, Henderson-Hasselbalch, bufferlikning, bufferområde, bufferkapasitet, pKa, fosfatbuffer, hydrogenkarbonat, proteinbuffer]
related:
  - generell-kjemi/regnetyper/henderson-hasselbalch
  - generell-kjemi/regnetyper/buffer-tilsatt-syre-eller-base
  - generell-kjemi/teori/flerprotiske-syrer-og-aminosyrer
  - generell-kjemi/teori/karbonsyre-og-blodets-ph
  - generell-kjemi/teori/syre-base-likevekter
  - cellebiologi/sammensatte-tema/saliva-og-salivas-kjemi
  - cellebiologi/sammensatte-tema/blodets-ph-regulering-og-hyperventilering
  - lab/ovelser/titrering-aminosyrer
sources:
  - file: medod1/material/generell-kjemi/forelesning-4-2026--8041090.pdf
    pages: "1-7"
  - file: medod1/material/generell-kjemi/titrering-revidert-petri2020-1-1--7794025.pdf
  - file: medod1/material/generell-kjemi/hyperventilering--7794027.pdf
    pages: "4-6"
  - file: medod1/info/formelhefte--7793986.pdf
  - file: medod1/exercises/oppgavesett2-2026-fasit--8047656.pdf
  - file: medod1/exercises/kollokvium1-losningsforslag-2026--8121960.pdf
  - file: medod1/exercises/oppgavesett-4-fasit-2026--8204433.pdf
  - file: medod1/exams/2024-sensorveiledning-medod1-ny-v2024--5897568.docx
  - file: medod1/exams/2025-sensorveiledning-langsvarsoppgaver-medod1-h2025--7454919.docx
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2023-medod1-ny-v2023-med-svar--5194537.pdf
---

## Hva er en buffer?

En **buffer** er en løsning av en **svak syre og dens korresponderende base** (et svakt korresponderende syre–base-par), f.eks. eddiksyre + acetat:

$$\ce{CH3COOH + H2O <=> CH3COO- + H3O+}$$

En buffer **motstår store pH-endringer**:

| Tilsettes | Hva skjer | Resultat |
|---|---|---|
| litt sterk base (OH⁻) | $\ce{CH3COOH + OH- -> CH3COO- + H2O}$: OH⁻ nøytraliseres av **syren** | pH øker bare litt |
| litt sterk syre (H₃O⁺) | $\ce{CH3COO- + H3O+ -> CH3COOH + H2O}$: H₃O⁺ nøytraliseres av **basen** | pH synker bare litt |

Bufferen fanger altså opp den tilsatte syren eller basen ved å omdanne den ene bufferkomponenten til den andre. Bare **forholdet** [A⁻]/[HA] endres litt.

:::eksamen
Acetatbuffer (0,10 M CH₃COOH + 0,20 M NaCH₃COO, eller omvendt): det riktige utsagnet er **«en liten mengde HCl senker pH bare litt»** (H2025, V2025, H2021). Distraktorer:
- «OH⁻ reagerer med CH₃COO⁻» er feil; OH⁻ reagerer med syren.
- «H⁺ reagerer med CH₃COOH» er feil; H⁺ reagerer med basen.
- «Mer CH₃COOH øker pH» er feil; pH synker.
:::

## Bufferlikningen og Henderson–Hasselbalch

Ka-uttrykket løses for [H₃O⁺]:

$$K_a = \frac{[H_3O^+][A^-]}{[HA]} \;\Rightarrow\; \textbf{Bufferlikning (I):}\quad [H_3O^+] = K_a\,\frac{[\text{syre}]}{[\text{base}]}$$

Tar man −log på begge sider, får man den logaritmiske formen:

$$\textbf{Bufferlikning (II), Henderson–Hasselbalch:}\quad pH = pK_a + \log\frac{[\text{base}]}{[\text{syre}]} = pK_a + \log\frac{[A^-]}{[HA]}$$

Fordi begge komponentene er i samme volum, kan man sette inn **stoffmengder (mol eller mmol)** i stedet for konsentrasjoner. Derfor **endrer fortynning med vann ikke bufferens pH** (innenfor rimelige grenser).

Konsentrasjonene som settes inn, er praktisk talt de som ble *blandet*. Fordi likevekten undertrykkes av den andre komponenten, endres [HA] og [A⁻] svært lite.

### pH = pKa

Når $[A^-] = [HA]$, er $\log 1 = 0$, og **pH = pKa** (og $[H_3O^+] = K_a$). Det er midt i bufferområdet, ved **halvtitrering**.

| pH | [A⁻]/[HA] | Andel protonert (HA) |
|---|---|---|
| pKa − 2 | 0,01 | 99 % |
| pKa − 1 | 0,1 | 91 % |
| **pKa** | **1** | **50 %** |
| pKa + 1 | 10 | 9 % |
| pKa + 2 | 100 | 1 % |

Tommelfingerregel: **pH < pKa** betyr at gruppen hovedsakelig er **protonert**, og **pH > pKa** at den hovedsakelig er **deprotonert** (V2024, V2025, H2024).

## Bufferområde og bufferkapasitet

- **Bufferområdet** er pH-området der pH endrer seg lite ved tilsetning av syre eller base. Det defineres som **pH = pKa ± 1**, tilsvarende [A⁻]/[HA] fra 0,1 til 10 (kollokvium 1, oppg. 9). Har et molekyl flere grupper med nesten like pKa, blir bufferområdet bredere.
- **Mest effektiv ved pH = pKa.** Med omtrent like mengder syre og base kan bufferen nøytralisere tilsatt syre og tilsatt base like godt (oppgavesett 2 oppg. 6). Velg derfor en buffer med pKa nær ønsket pH.
- **Bufferkapasiteten** er hvor mye syre eller base bufferen tåler før pH endres vesentlig. Den øker med **total konsentrasjon** av bufferkomponentene. Er den ene komponenten brukt opp, er bufferen «sprengt».

:::klinikk
**Saliva og tenner.** Spytt bufres hovedsakelig av **hydrogenkarbonat** og **fosfat** (V2026). Tyggegummi stimulerer stor spyttsekresjon med høy bufferkapasitet, slik at pH i munnhulen holdes stabil (gjentatt på 6 eksamener). Lav pH løser hydroksyapatitt i emaljen. Den verste kombinasjonen er **lav pH og høy bufferkapasitet** i en sur drikk, fordi syren da «holdes» lav lenge (V2023). Se [løselighet og komplekser](/medod1/generell-kjemi/teori/loselighet-og-komplekser) og [saliva og salivas kjemi](/medod1/cellebiologi/sammensatte-tema/saliva-og-salivas-kjemi).
:::

## Biologiske buffersystemer

pH i kroppsvæsker opprettholdes av tre viktige buffersystemer:

| System | Syre/base | Hvor viktig |
|---|---|---|
| **Karbonsyre/hydrogenkarbonat** | CO₂(aq)/H₂CO₃ / HCO₃⁻ (pKa ≈ 6,1 ved 37 °C) | **viktigste buffer i blod** (åpent system via lungene) |
| **Fosfat** | H₂PO₄⁻ / HPO₄²⁻ (pKa2 ≈ 6,8 ved I = 0,2 M) | intracellulært, i urin og saliva |
| **Proteiner** | sidekjeder (His, Asp/Glu, Lys …) som protondonorer/-akseptorer | intracellulært og i plasma (albumin, [hemoglobin](/medod1/proteiner/teori/myoglobin-og-hemoglobin)); His er viktigst nær pH 7 |

Oksygentransporten tåler ikke at blodets pH varierer mer enn ca. 0,1. Karbonsyresystemet og hyperventilering er beskrevet i [karbonsyre og blodets pH](/medod1/generell-kjemi/teori/karbonsyre-og-blodets-ph).

:::eksamen
- **Langsvar H2025** (3 p): nevn de tre viktigste biologiske buffersystemene: karbonsyre/bikarbonat, fosfat og protein. Andre forslag ga minuspoeng.
- **Langsvar V2024** (5 p) om buffere, ett poeng hver for:
  1. svak syre + korresponderende base;
  2. motstår pH-endring ved tilsetning av syre eller base;
  3. bufferområdet er pH = pKa ± 1;
  4. pKa = −log Ka, og pH = pKa midt i området;
  5. pH beregnes med Henderson–Hasselbalch.
- «Henderson–Hasselbalch kan brukes til å beregne …» har svaret **blodets pH**. Distraktorene er løselighet, E° og ΔG (4 eksamener).
:::

## Eksempler

:::eksempel[Oppgavesett 4 oppg. 12: 0,2 M eddiksyre + 0,1 M natriumacetat, Ka = 1,8·10⁻⁵]
pKa = −log(1,8·10⁻⁵) = 4,74.
$pH = 4{,}74 + \log\frac{0{,}1}{0{,}2} = 4{,}74 - 0{,}30 = 4{,}44$.
:::

:::eksempel[Eksamen V2023: 35 mL 0,20 M maursyre + 55 mL 0,10 M formiat + 110 mL vann, pKa 3,74]
n(HCOOH) = 35·0,20 = 7,0 mmol og n(HCOO⁻) = 55·0,10 = 5,5 mmol. Vannet påvirker ikke forholdet.
$pH = 3{,}74 + \log\frac{5{,}5}{7{,}0} = 3{,}74 - 0{,}105 = 3{,}64$.
:::

:::eksempel[Buffer etter tilsetning av sterk syre (oppgavesett 2 oppg. 21c)]
0,259 M pentansyre og 0,210 M natriumpentanat (pKa 4,84), 75,0 mL. Tilsetter 8,00 mL 0,100 M HCl.
- n(HA) = 75,0·0,259 = 19,43 mmol; n(A⁻) = 75,0·0,210 = 15,75 mmol; n(H⁺) = 0,800 mmol.
- H⁺ reagerer med A⁻: A⁻ = 15,75 − 0,80 = 14,95 mmol og HA = 19,43 + 0,80 = 20,23 mmol.
- $pH = 4{,}84 + \log\frac{14{,}95}{20{,}23} = 4{,}84 - 0{,}131 = 4{,}71$ (før tilsetning: 4,75).
:::

Flere utregninger: [Henderson–Hasselbalch](/medod1/generell-kjemi/regnetyper/henderson-hasselbalch) og [buffer etter tilsatt syre eller base](/medod1/generell-kjemi/regnetyper/buffer-tilsatt-syre-eller-base). Titrering av aminosyrer, der bufferområdene er lab-relevante, finnes i [flerprotiske syrer og aminosyrer](/medod1/generell-kjemi/teori/flerprotiske-syrer-og-aminosyrer) og labøvelsen [titreranalyse av aminosyrer](/medod1/lab/ovelser/titrering-aminosyrer).

## Test deg selv

:::sjekk[Hvorfor er en blanding av HCl og NaCl ikke en buffer?]
Cl⁻ er basen til en sterk syre og er så svak at den ikke tar opp H⁺. Tilsatt syre blir ikke fanget opp, så det finnes ingen likevekt som kan bufre. En buffer krever et svakt syre–base-par.
:::

:::sjekk[En buffer har pH = pKa + 1. Hvilken retning bufrer den best, og hvorfor?]
[A⁻]/[HA] = 10, så det er mye base og lite syre. Den tåler tilsatt sterk **syre** best, men har liten kapasitet mot tilsatt base fordi syrekomponenten snart er brukt opp.
:::

:::sjekk[Hva skjer med pH i en acetatbuffer hvis den fortynnes 10 ganger med vann? Og med bufferkapasiteten?]
pH er praktisk talt uendret, fordi forholdet [A⁻]/[HA] er det samme. Bufferkapasiteten synker derimot omtrent 10 ganger, fordi det er færre mol buffer per liter som kan nøytralisere tilsatt syre eller base.
:::

:::sjekk[Ved hvilken pH er 91 % av en gruppe med pKa 6,0 protonert?]
91 % protonert betyr [A⁻]/[HA] = 0,1, altså pH = pKa − 1 = **5,0**.
:::

:::sjekk[Hvorfor er fosfat (pKa2 ≈ 6,8) en bedre intracellulær buffer enn eddiksyre/acetat?]
pKa2 ligger nær cellens pH (~7), slik at fosfat er midt i bufferområdet og har like mengder H₂PO₄⁻ og HPO₄²⁻. Eddiksyre (pKa 4,74) er over to pH-enheter unna og bufrer nesten ikke ved pH 7.
:::
