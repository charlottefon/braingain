---
title: Termodynamikk – entalpi, entropi og Gibbs fri energi
summary: ΔG = ΔH − TΔS avgjør om en reaksjon er spontan (ΔG < 0, eksergonisk), ikke-spontan (ΔG > 0, endergonisk) eller i likevekt (ΔG = 0). Fortegnene til ΔH og ΔS gir fire tilfeller for temperaturavhengighet. ΔG = ΔG° + RT ln Q og ΔG° = −RT ln K kobler fri energi til likevekt. ΔG sier ingenting om hastighet, som styres av aktiveringsenergien (enzymer senker den). Ugunstige reaksjoner drives ved kobling til ATP-hydrolyse.
order: 14
tags: [termodynamikk, entalpi, entropi, Gibbs fri energi, spontan, eksoterm, endoterm, eksergonisk, endergonisk, ΔG°, likevekt, aktiveringsenergi, reaksjonshastighet, ATP, kobling, Hess]
related:
  - generell-kjemi/regnetyper/gibbs-fri-energi
  - generell-kjemi/regnetyper/reaksjonsverdier-fra-tabell
  - generell-kjemi/regnetyper/fri-energi-og-likevekt
  - generell-kjemi/teori/kjemisk-likevekt
  - generell-kjemi/teori/elektrokjemi
  - proteiner/teori/enzymkatalyse
  - lab/ovelser/enzymkinetikk-adh
  - cellebiologi/cellen/energi-og-eukaryotenes-opprinnelse
sources:
  - file: medod1/material/generell-kjemi/forelesning5-del1-2026--8063675.pdf
  - file: medod1/material/generell-kjemi/forelesning5-del1-2024-13-14--7794043.pdf
  - file: medod1/material/generell-kjemi/termo-1--7793971.pdf
  - file: medod1/material/generell-kjemi/forelesning-5-termodynamikk-og-elektrokjemi-24-9-2026--page-374111.html
  - file: medod1/info/formelhefte--7793986.pdf
  - file: medod1/exercises/oppgavesett3-2026--8066331.pdf
  - file: medod1/exercises/oppgavesett3-2026-fasit--8081616.pdf
  - file: medod1/exercises/oppgavesett-4-fasit-2026--8204433.pdf
  - file: medod1/exams/2025-medod1-ny-v2025-med-svar--7269873.pdf
  - file: medod1/exams/2024-medod1-ny-v2024-med-svar--5897534.pdf
  - file: medod1/exams/2023-medod1-h2023-med-svar--5670979.pdf
---

## Begreper

- **Termodynamikk** handler om energiforandringer ved kjemiske reaksjoner, og formålet er å forstå hvilken vei reaksjoner går. SI-enheten for energi er joule; **1 cal = 4,184 J**. Mange eksamensoppgaver bruker kcal.
- **Katabolske** prosesser (nedbrytning) gir energi. **Anabolske** prosesser (biosyntese) krever energi.
- **Tilstandsfunksjoner** (H, S, G) avhenger bare av start- og slutttilstand, ikke av veien. Derfor er ΔG uavhengig av reaksjonsveien, og «to veier gir likt energiutbytte».

## Entalpi, ΔH – reaksjonsvarme

| | Fortegn | Betydning |
|---|---|---|
| **Eksoterm** | ΔH < 0 | frigjør varme til omgivelsene (forbrenning, cellerespirasjon) |
| **Endoterm** | ΔH > 0 | tar opp varme (fordampning, fotosyntese) |

Regler for ΔH (forelesning 5):
1. Multipliserer man reaksjonen, multipliseres ΔH med samme faktor: $\ce{CH4 + 2O2 -> CO2 + 2H2O(g)}$ har ΔH = −802 kJ/mol, og ×3 gir −2406 kJ.
2. Den omvendte reaksjonen har samme ΔH med motsatt fortegn, +802 kJ/mol. Den omvendte av en eksoterm reaksjon er endoterm.
3. ΔH avhenger av tilstanden til reaktanter og produkter. Med H₂O(l) blir ΔH = −890 kJ/mol, fordi $\ce{2H2O(g) -> 2H2O(l)}$ har ΔH = −88 kJ/mol.

**Standard dannelsesentalpi** $\Delta H_f^\circ$ er entalpiendringen når 1 mol stoff dannes i standardtilstand fra grunnstoffene i deres standardtilstand. Grunnstoffer i standardtilstand har $\Delta H_f^\circ = 0$.

$$\Delta H^\circ_{rxn} = \sum n\,\Delta H_f^\circ(\text{produkter}) - \sum n\,\Delta H_f^\circ(\text{reaktanter})$$

:::klinikk
**Kroppstemperatur.** Forbrenning av glukose, $\ce{C6H12O6 + 6O2 -> 6CO2 + 6H2O(l)}$, har ΔH = −2803 kJ/mol og gir varme. Fordampning av svette, $\ce{H2O(l) -> H2O(g)}$, har ΔH = +44 kJ/mol. Den er **endoterm** og tar varme fra huden, og det kjøler kroppen (V2024).
:::

## Entropi, ΔS – uorden

**Entropi (S)** er graden av tilfeldighet eller uorden i et system, målt i J/(mol·K). ΔS > 0 betyr at uorden øker. Entropien øker når
- væske dannes fra fast stoff,
- gass dannes fra fast stoff eller væske,
- antall gassmolekyler øker,
- temperaturen øker,
- et stoff løses, eller bindinger brytes.

$$\Delta S^\circ = \sum n\,S^\circ(\text{produkter}) - \sum n\,S^\circ(\text{reaktanter})$$

Standard molar entropi S° måles mot et absolutt nullpunkt (0 K), så **også grunnstoffer har S° ≠ 0**, i motsetning til $\Delta H_f^\circ$ og $\Delta G_f^\circ$.

:::eksempel[Forelesning 5: ΔS° for 2H₂(g) + O₂(g) → 2H₂O(l)]
S°: H₂(g) 130,6; O₂(g) 205; H₂O(l) 69,9 J/(K·mol).
$\Delta S^\circ = 2(69{,}9) - [2(130{,}6) + 205] = 139{,}8 - 466{,}2 = -326$ J/(K·mol) (lysbildet: −327).
Fortegnet er negativt fordi 3 mol gass blir til 2 mol væske, og uorden synker.
:::

## Gibbs fri energi, ΔG

$$G = H - TS \qquad \boxed{\Delta G = \Delta H - T\Delta S}\quad (T \text{ i kelvin})$$

«Fri» energi er den delen av energien som er tilgjengelig til å drive en spontan prosess.

| ΔG | Reaksjonen er … |
|---|---|
| < 0 | **spontan**, **eksergonisk** (frigjør fri energi) |
| > 0 | ikke spontan, **endergonisk** (krever energi); går spontant i motsatt retning |
| = 0 | i **likevekt** |

«Fri energi synker alltid i en spontan reaksjon.» Varmeavgivelse (ΔH < 0) og økt uorden (ΔS > 0) favoriserer begge spontanitet.

### Fire kombinasjoner av ΔH og ΔS

| ΔH | ΔS | −TΔS | ΔG = ΔH − TΔS | Spontan? |
|---|---|---|---|---|
| − | + | − | **− ved alle T** | alltid |
| + | − | + | **+ ved alle T** | aldri |
| + | + | − | − ved **høy** T, + ved lav T | når $T > \Delta H/\Delta S$ |
| − | − | + | − ved **lav** T, + ved høy T | når $T < \Delta H/\Delta S$ |

:::eksempel[Oppgavesett 3 oppg. 10: ΔH° = +100 kJ/mol og ΔS° = +250 J/(mol·K). Spontan ved romtemperatur?]
Ved 298 K: $\Delta G = 100\,000 - 298\cdot250 = +25\,500$ J/mol, så **ikke spontan**.
Grensen ligger ved ΔG = 0: $T = \Delta H/\Delta S = 100\,000/250 = 400$ K. Reaksjonen er spontan **over 400 K (127 °C)**.
Husk å gjøre om kJ og J til samme enhet.
:::

:::eksamen
Det vanligste termo-spørsmålet: oppgitt ΔH og ΔS i kcal/cal, avgjør om reaksjonen er ekser- eller endergonisk og ekso- eller endoterm.
- ΔH = −13,2 kcal/mol og ΔS = +44 cal/(mol·K) gir **eksergonisk og eksoterm** (V2025, V2023). Samme svar for −8,5/+18 (H2024) og −7,2/+28 (H2023): ΔH < 0 og ΔS > 0 gir alltid ΔG < 0.
- ΔH = +17,5 kcal/mol og ΔS = −3,8 cal/(mol·K) gir **endergonisk og endoterm** (V2024).
- ΔH < 0 og ΔS < 0 gir spontan ved **lav** T (H2023, V2023).
- «Reaksjonen frigjør varme og uorden øker» betyr ΔG < 0 (H2025).
- «En eksoterm reaksjon har alltid …» ΔH < 0 (V2023). «En endoterm reaksjon har alltid …» ΔH > 0 (H2021).
- CO₂(g) → CO₂(s): entropien **synker** (V2025).

Se [ΔG = ΔH − TΔS](/medod1/generell-kjemi/regnetyper/gibbs-fri-energi).
:::

### ΔG° fra tabellverdier

Standard fri energiforandring ΔG° gjelder når reaktanter i standardtilstand (1 M, 1 atm, 25 °C) omdannes til produkter i standardtilstand:

$$\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ \quad\text{eller}\quad \Delta G^\circ = \sum n\,\Delta G_f^\circ(\text{prod.}) - \sum n\,\Delta G_f^\circ(\text{reakt.})$$

:::eksempel[Forelesning 5: ΔG° ved 25 °C (ΔG°f: NO 86,6; H₂O(g) −228,6; NH₃ −16 kJ/mol; grunnstoffer 0)]
a) $\ce{4NH3 + 5O2 -> 4NO + 6H2O(g)}$: $[4(86{,}6) + 6(-228{,}6)] - [4(-16) + 0] = -961{,}2$ kJ, så reaksjonen er spontan.
b) $\ce{N2 + O2 -> 2NO}$: $2(86{,}6) - 0 = +173{,}2$ kJ (lysbildet: 173,3), så den er ikke spontan.

Har man nytte av en katalysator? I a) ja: reaksjonen er termodynamisk gunstig, men kan være treg, og en katalysator øker hastigheten. I b) nei: en katalysator kan ikke gjøre en reaksjon med ΔG° > 0 spontan.
:::

Utregning: [ΔH°, ΔS° og ΔG° fra tabell](/medod1/generell-kjemi/regnetyper/reaksjonsverdier-fra-tabell).

## Fri energi og likevekt

Under alle betingelser gjelder

$$\Delta G = \Delta G^\circ + RT\ln Q$$

Under standardbetingelser er alle konsentrasjoner 1 M, så Q = 1 og ln Q = 0, og ΔG = ΔG°. **Ved likevekt** er Q = K og ΔG = 0, slik at

$$\boxed{\Delta G^\circ = -RT\ln K} \qquad K = e^{-\Delta G^\circ/RT} \qquad R = 8{,}314\ \text{J/(mol·K)}$$

| ΔG° | K | Ved likevekt |
|---|---|---|
| < 0 | > 1 | produkter dominerer |
| = 0 | = 1 | |
| > 0 | < 1 | reaktanter dominerer |

**ΔG° bestemmer K. ΔG (med aktuelle konsentrasjoner) bestemmer retningen nå.** En reaksjon med ΔG° > 0 kan derfor være spontan i cellen hvis Q er lav nok, f.eks. fordi produktet fjernes fortløpende.

:::eksempel[Oppgavesett 3 oppg. 11: glykolyse, G6P ⇌ F6P, ΔG° = +1,7 kJ/mol, 37 °C]
a) ΔG° > 0, så reaksjonen er ikke spontan under standardbetingelser.
b) I cellen er [G6P] = 120 µM og [F6P] = 28 µM, T = 310 K:
$$\Delta G = 1700 + 8{,}314\cdot310\cdot\ln\frac{28}{120} = 1700 - 3751 = -2{,}05\ \text{kJ/mol}$$
ΔG < 0, så reaksjonen er **spontan under cellulære betingelser**.
:::

:::eksamen
ΔG°′ = −5,7 kJ/mol ved 25 °C gir $K'_{eq} = e^{5700/(8{,}314\cdot298)} \approx 10$, altså > 1 (H2025, proteindelen). Se [fri energi og likevekt](/medod1/generell-kjemi/regnetyper/fri-energi-og-likevekt).
:::

## Hastighet er noe annet enn spontanitet

- Mellom reaktanter og produkter ligger en **energibarriere**, aktiveringsenergien $E_a$. Jo lavere $E_a$, desto flere produktive kollisjoner og desto raskere reaksjon.
- **Aktiveringsenergien og ΔG er ikke relatert.** ΔG sier om reaksjonen *kan* skje, ikke hvor fort.
- **Katalysatorer og enzymer senker aktiveringsenergien** (ofte ved å stabilisere overgangstilstanden). Begge retninger går raskere, likevekten nås fortere, men **K og ΔG endres ikke**.
- For en ett-trinns reaksjon er $K = k_1/k_{-1}$ (forholdet mellom hastighetskonstantene). Mer om hvordan enzymer senker Ea: [enzymkatalyse](/medod1/proteiner/teori/enzymkatalyse) og [enzymkinetikk](/medod1/proteiner/enzymkinetikk). K, ΔG og hastighet måles i praksis i labøvelsen [enzymkinetikk – ADH](/medod1/lab/ovelser/enzymkinetikk-adh).

:::eksamen
- Enzymer påvirker **ikke** ΔG (V2025).
- «Hva forteller ΔG om en reaksjon?» Om den er **spontan** under gitte betingelser (V2026).
- Ved likevekt er ΔG = 0 (H2023, V2026).
:::

## Kobling av reaksjoner – ATP

Cellen driver ugunstige reaksjoner ved å **koble** dem til gunstige, slik at **total ΔG < 0**. Typisk skjer koblingen via et felles mellomprodukt (f.eks. et fosforylert intermediat):

$$\ce{A <=> B}\quad \Delta G^\circ > 0,\ K \ll 1$$
$$\ce{A + ATP + H2O <=> B + ADP + P_i}\quad \Delta G^\circ < 0,\ K \gg 1$$

**Høyenergetiske fosfatforbindelser** lagrer energi i bindinger med fosfatgrupper:
- $\ce{ATP -> ADP + P_i}$: ΔG°′ = **−30,5 kJ/mol** (−7,3 kcal/mol)
- $\ce{ATP -> AMP + PP_i}$: ΔG°′ = −45,6 kJ/mol (−10,9 kcal/mol)

Gunstige reaksjoner kan på samme måte kobles til **dannelse** av ATP, f.eks. i glykolysen og oksidativ fosforylering (se [elektrokjemi](/medod1/generell-kjemi/teori/elektrokjemi) og [cellens energi](/medod1/cellebiologi/cellen/energi-og-eukaryotenes-opprinnelse)). En metabolsk vei må ha **spesifikke** enkeltreaksjoner og være **termodynamisk gunstig totalt**.

## Test deg selv

:::sjekk[En reaksjon har ΔH > 0 og ΔS > 0. Er den spontan ved 25 °C?]
Det avhenger av tallene. ΔG = ΔH − TΔS blir negativ først når T > ΔH/ΔS. Reaksjonen er spontan ved høy temperatur og ikke ved lav. Isen som smelter over 0 °C er et klassisk eksempel.
:::

:::sjekk[Hvorfor kan en reaksjon med ΔG° = +1,7 kJ/mol likevel gå i cellen?]
Spontaniteten bestemmes av ΔG = ΔG° + RT ln Q, ikke av ΔG°. Holdes produktkonsentrasjonen lav i forhold til substratet (Q < K), blir RT ln Q så negativ at ΔG < 0. Produktet trekkes videre i neste trinn i veien.
:::

:::sjekk[En reaksjon har ΔG° = −50 kJ/mol, men går ikke merkbart ved romtemperatur. Hvordan er det mulig?]
ΔG° sier bare at likevekten ligger langt mot produktene (K ≫ 1), ikke noe om hastigheten. Høy aktiveringsenergi gjør reaksjonen treg. En katalysator eller et enzym kan få den til å gå raskere, uten å endre ΔG° eller K.
:::

:::sjekk[Hvorfor er Sº for O₂(g) ikke 0, når ΔH°f og ΔG°f for O₂(g) er 0?]
ΔH°f og ΔG°f er definert relativt til grunnstoffene i standardtilstand (de er referansepunktet). Entropi måles mot et absolutt nullpunkt ved 0 K, og et grunnstoff ved 298 K har bevegelse og uorden, så S° > 0.
:::

:::sjekk[Hva skjer med ΔG for en reaksjon idet den når likevekt, og hva er da forholdet mellom Q og K?]
ΔG = 0 og Q = K. Det finnes ingen netto drivkraft i noen retning, og det tilsvarer E = 0 i en elektrokjemisk celle.
:::
