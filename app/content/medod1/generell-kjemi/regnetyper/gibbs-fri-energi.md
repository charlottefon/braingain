---
title: ΔG = ΔH − TΔS og spontanitet
summary: Avgjør om en reaksjon er spontan (ΔG < 0) ut fra ΔH og ΔS ved en gitt temperatur, og finn temperaturen der fortegnet på ΔG skifter (T = ΔH/ΔS). Husk Kelvin og at ΔS vanligvis oppgis i J, ΔH i kJ.
category: termo
order: 1
tags: [gibbs fri energi, entalpi, entropi, spontanitet, eksergon, endergon, eksoterm, endoterm]
related:
  - generell-kjemi/teori/termodynamikk
  - generell-kjemi/regnetyper/reaksjonsverdier-fra-tabell
  - generell-kjemi/regnetyper/fri-energi-og-likevekt
  - proteiner/teori/enzymkatalyse
sources:
  - file: medod1/material/generell-kjemi/forelesning5-del1-2026--8063675.pdf
    pages: "3-17"
  - file: medod1/material/generell-kjemi/termo-1--7793971.pdf
  - file: medod1/info/formelhefte--7793986.pdf
    pages: "5"
  - file: medod1/exercises/oppgavesett3-2026--8066331.pdf
  - file: medod1/exercises/oppgavesett3-2026-fasit--8081616.pdf
  - file: medod1/exercises/oppgavesett-4-fasit-2026--8204433.pdf
  - file: medod1/exams/2025-medod1-ny-v2025-med-svar--7269873.pdf
  - file: medod1/exams/2024-medod1-h2024-med-svar--7298977.pdf
  - file: medod1/exams/2023-medod1-h2023-med-svar--5670979.pdf
fields:
  Formel: ΔG = ΔH − TΔS
  Spontan: ΔG < 0 (eksergon)
  Temperaturgrense: T = ΔH/ΔS (når ΔH og ΔS har samme fortegn)
  I formelheftet: Ja
---

## Når brukes den

- Du får **ΔH og ΔS** (eller fortegnene deres) og skal avgjøre om reaksjonen er **spontan**, **eksergon/endergon** og **eksoterm/endoterm**.
- Du skal finne **ved hvilken temperatur** en reaksjon blir spontan.
- Rene fortegnsoppgaver: «ΔH < 0 og ΔS < 0 – når er reaksjonen spontan?»

Gibbs fri energi kombinerer entalpi og entropi. Fortegnet på ΔG avgjør spontanitet. ΔG sier **ingenting om hastigheten** (forelesning 5).

## Formler

$$\Delta G = \Delta H - T\Delta S$$

| ΔG | Betydning |
|---|---|
| < 0 | spontan (eksergon) |
| > 0 | ikke spontan (endergon), men den motsatte reaksjonen er spontan |
| = 0 | likevekt |

| ΔH | ΔS | −TΔS | ΔG = ΔH − TΔS | Spontan? |
|---|---|---|---|---|
| − | + | − | − ved alle T | alltid |
| + | − | + | + ved alle T | aldri |
| − | − | + | − ved lav T, + ved høy T | ved **lav** T |
| + | + | − | + ved lav T, − ved høy T | ved **høy** T |

Når ΔH og ΔS har samme fortegn, skifter ΔG fortegn ved

$$T = \frac{\Delta H}{\Delta S}$$

Begreper:
- **Eksoterm**: ΔH < 0 (varme avgis).
- **Endoterm**: ΔH > 0.
- **Eksergon**: ΔG < 0.
- **Endergon**: ΔG > 0.

Entropien øker når fast stoff → væske → gass, når antall gassmolekyler øker, når et stoff løses opp og når temperaturen øker.

## Fremgangsmåte

1. Sett ΔH og ΔS på **samme energienhet**. ΔS er ofte gitt i J/(mol·K) eller cal/(mol·K), mens ΔH er gitt i kJ/mol eller kcal/mol. Del ΔS på 1000.
2. Gjør temperaturen om til **Kelvin**: T(K) = t(°C) + 273 (25 °C ≈ 298 K, 37 °C ≈ 310 K).
3. Regn ut ΔG = ΔH − TΔS og vurder fortegnet.
4. Temperaturgrensen: sett ΔG = 0, slik at T = ΔH/ΔS. Avgjør med tabellen om reaksjonen er spontan over eller under grensen.
5. Ved rene fortegnsoppgaver trenger du ingen tall. Bruk tabellen.

## Regneeksempel

:::eksempel[Oppgavesett 3, oppg. 10: ΔH° = 100 kJ/mol og ΔS° = 250 J/(mol·K)]
**Er reaksjonen spontan ved romtemperatur?**

Gjør ΔS om til kJ: ΔS = 0,250 kJ/(mol·K). Romtemperatur gir T = 298 K.

$$\Delta G = 100 - 298 \cdot 0{,}250 = 100 - 74{,}5 = +25{,}5\ \text{kJ/mol}$$

ΔG > 0, så reaksjonen er **ikke spontan** ved 25 °C.

**Når blir den spontan?** ΔH > 0 og ΔS > 0, så den blir spontan ved **høy** T:

$$T > \frac{\Delta H}{\Delta S} = \frac{100\ \text{kJ/mol}}{0{,}250\ \text{kJ/(mol·K)}} = 400\ \text{K}\ (\approx 127\ °\text{C})$$

Kontroll ved 500 K: ΔG = 100 − 500 · 0,250 = −25 kJ/mol < 0. ✓
:::

:::eksempel[Eksamen (V2023, V2025): ΔH = −13,2 kcal/mol, ΔS = +44 cal/(mol·K)]
- ΔH < 0, så reaksjonen er **eksoterm**.
- ΔS > 0, så −TΔS < 0 ved alle T. Da er ΔG < 0 ved alle T, og reaksjonen er **eksergon**.

Tallkontroll ved 37 °C (310 K), med ΔS = 0,044 kcal/(mol·K):

$$\Delta G = -13{,}2 - 310 \cdot 0{,}044 = -13{,}2 - 13{,}6 = -26{,}8\ \text{kcal/mol}$$

Svar: **eksergon og eksoterm**.

Samme mal (V2024): ΔH = +17,5 kcal/mol og ΔS = −3,8 cal/(mol·K). Begge leddene er ugunstige, så reaksjonen er **endergon og endoterm** ved alle T. Ved 298 K blir ΔG = 17,5 + 298 · 0,0038 ≈ +18,6 kcal/mol.

Alle variantene fra 2022–2025:

| Eksamen | ΔH (kcal/mol) | ΔS (cal/(mol·K)) | Svar |
|---|---|---|---|
| H2022 | +8,0 | −28 | endergon og endoterm |
| V2023, V2025 | −13,2 | +44 | eksergon og eksoterm |
| H2023 | −7,2 | +28 | eksergon og eksoterm |
| V2024 | +17,5 | −3,8 | endergon og endoterm |
| H2024 | −8,5 | +18 | eksergon og eksoterm |

Fortegnskombinasjonen har hver gang vært (−, +) eller (+, −), så svaret følger direkte av fortegnstabellen, uten regning.
:::

:::eksempel[Fortegnsoppgave (H2023, V2023): ΔH < 0 og ΔS < 0]
- −TΔS er positiv og vokser med T.
- Ved lav T dominerer ΔH < 0, så ΔG < 0 og reaksjonen er spontan.
- Ved høy T dominerer −TΔS, så ΔG > 0.

Svar: **spontan ved lav temperatur, ikke ved høy**. Eksempel: vann som fryser er spontant under 0 °C. Prosessen har ΔH < 0 og ΔS < 0.
:::

:::eksamen
Gjengangere på eksamen:
- «ΔH = … kcal/mol, ΔS = … cal/(mol·K): er reaksjonen eksergon/endergon og eksoterm/endoterm?» (6 av 9 eksamener 2021–2026: H2022, V2023, H2023, V2024, H2024, V2025).
- Fortegnskombinasjoner og temperatur (4 eksamener).
- «En eksoterm reaksjon har alltid …» → ΔH < 0.
- «Varme frigjøres og uorden øker» → ΔG < 0.
- Svette, $\ce{H2O(l) -> H2O(g)}$, er **endoterm**.
- $\ce{CO2(g) -> CO2(s)}$ gir **lavere** entropi.
:::

## Vanlige feil

:::feil
- **Enhetsblanding.** ΔH i kJ og ΔS i J: ΔS må deles på 1000. Ellers blir TΔS 1000 ganger for stor.
- **°C i stedet for K.** T må alltid være i Kelvin.
- **Eksoterm ≠ eksergon.** Eksoterm gjelder ΔH, eksergon gjelder ΔG. En endoterm reaksjon kan godt være spontan hvis ΔS er stor nok og T er høy.
- **ΔG < 0 betyr ikke «rask».** Hastigheten avhenger av aktiveringsenergien. ΔG sier ingenting om den.
- Ved temperaturgrensen: sjekk retningen med tabellen. «+/+» er spontan **over** grensen, «−/−» er spontan **under** grensen.
:::

## Test deg selv

:::sjekk[En reaksjon har ΔH = +40 kJ/mol og ΔS = +100 J/(mol·K). Over hvilken temperatur er den spontan?]
T > ΔH/ΔS = 40 kJ/mol / 0,100 kJ/(mol·K) = **400 K**. Begge fortegnene er positive, så reaksjonen er spontan ved høy T.
:::

:::sjekk[Hvorfor kan en endoterm reaksjon likevel være spontan?]
Fordi ΔG = ΔH − TΔS. Når ΔS > 0 og T er høy nok, blir −TΔS mer negativ enn ΔH er positiv. Da blir ΔG < 0 selv om ΔH > 0. Et eksempel er at is smelter over 0 °C.
:::

:::sjekk[ΔH = −8,5 kcal/mol og ΔS = +18 cal/(mol·K) (H2024). Hvordan karakteriseres reaksjonen?]
**Eksoterm** (ΔH < 0) og **eksergon** ved alle T, siden ΔS > 0 gjør −TΔS negativ. Ved 298 K blir ΔG = −8,5 − 298 · 0,018 ≈ −13,9 kcal/mol.
:::

:::sjekk[Hva skjer med ΔG for en reaksjon med ΔH < 0 og ΔS < 0 når temperaturen økes?]
ΔG blir mindre negativ og til slutt positiv, fordi −TΔS > 0 vokser med T. Reaksjonen er altså bare spontan under T = ΔH/ΔS.
:::
