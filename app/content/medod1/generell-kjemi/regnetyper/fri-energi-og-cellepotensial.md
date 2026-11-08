---
title: ΔG° = −nFE° og K fra E°
summary: Kobler cellepotensial, fri energi og likevekt. ΔG° = −nFE° = −RT ln K, og ved 25 °C er log K = n·E°/0,0592 V. Brukes til å finne energien fra elektrontransport (NADH → O₂ gir −220 kJ/mol) og til å avgjøre K og spontanitet ut fra E°.
category: elektro
order: 4
tags: [fri energi, cellepotensial, faradays konstant, likevektskonstant, elektrontransportkjeden, NADH]
related:
  - generell-kjemi/teori/elektrokjemi
  - generell-kjemi/teori/termodynamikk
  - generell-kjemi/regnetyper/standard-cellepotensial
  - generell-kjemi/regnetyper/fri-energi-og-likevekt
  - generell-kjemi/regnetyper/nernst-likning
  - cellebiologi/organeller/mitokondrier
  - cellebiologi/cellen/energi-og-eukaryotenes-opprinnelse
sources:
  - file: medod1/material/generell-kjemi/forelesning5-del2-2026-1--8069233.pdf
    pages: "14-19, 29-30"
  - file: medod1/material/generell-kjemi/sporretime1-2026-v2--8130558.pdf
    pages: "22-24"
  - file: medod1/exercises/oppgavesett-4-2026--8204427.pdf
  - file: medod1/exercises/oppgavesett-4-fasit-2026--8204433.pdf
  - file: medod1/exercises/oppgavesett3-2026-fasit--8081616.pdf
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
fields:
  Formel: ΔG = −nFE, ΔG° = −nFE°
  F: 96 485 C/mol = 96,485 kJ/(V·mol)
  K fra E° (25 °C): K = 10^(n·E°/0,0592)
  Sammenheng: ΔG° = −nFE° = −RT ln K
---

## Når brukes den

- Du kjenner **E°celle** og skal finne **ΔG°**, for eksempel energien som frigjøres i elektrontransportkjeden.
- Du skal finne **K** fra E°, eller E° fra K.
- Kvalitative spørsmål om sammenhengen mellom fortegnet på E°, fortegnet på ΔG° og størrelsen på K. Denne typen spørsmål kommer svært ofte.

:::husk
Formelen ΔG° = −nFE° gjennomgås og brukes i forelesning 5 og i spørretimen. Fasiten til oppgavesett 4 sier at det ikke er pensum å *huske* selve likningen. Det som må sitte er **fortegnssammenhengen**: E° > 0 ⇔ ΔG° < 0 ⇔ K > 1. Er tall og formel gitt, skal du kunne regne.
:::

## Formler

$$\Delta G = -nFE \qquad \Delta G^\circ = -nFE^\circ$$

Symboler:
- n = antall mol elektroner overført i den balanserte reaksjonen.
- F = 96 485 J/(V·mol) = 96,485 kJ/(V·mol). Faradays konstant er ladningen til 1 mol elektroner.
- E i volt (V). Siden 1 V · 1 C = 1 J, blir ΔG i J/mol.

Kombinert med ΔG° = −RT ln K:

$$\Delta G^\circ = -nFE^\circ = -RT\ln K \quad\Rightarrow\quad E^\circ = \frac{RT}{nF}\ln K = \frac{0{,}0592\ \text{V}}{n}\log K \ \ (25\ °\text{C})$$

$$K = 10^{\,nE^\circ/0{,}0592\ \text{V}}$$

| E° | ΔG° | K |
|---|---|---|
| > 0 | < 0 | > 1 (produkter favorisert) |
| = 0 | = 0 | = 1 |
| < 0 | > 0 | < 1 (reaktanter favorisert) |

Ved likevekt er E = 0, ΔG = 0 og Q = K.

## Fremgangsmåte

1. Finn E°celle. Se [standard cellepotensial](/medod1/generell-kjemi/regnetyper/standard-cellepotensial).
2. Finn **n** fra den balanserte totalreaksjonen. For NADH → O₂ er n = 2.
3. Regn ut ΔG° = −n · F · E°. Med F = 96,485 kJ/(V·mol) får du svaret direkte i kJ/mol.
4. For K: log K = n·E°/0,0592, og K = 10^(log K).
5. Sjekk fortegnet: positiv E° skal gi negativ ΔG° og K > 1.

## Regneeksempel

:::eksempel[Forelesning 5: elektrontransport fra NADH til O₂]
Halvreaksjonene:
- $\ce{NAD+ + H+ + 2e- -> NADH}$, med E° = −0,32 V. Denne snus (×(−1)).
- $\ce{1/2O2 + 2H+ + 2e- -> H2O}$, med E° = +0,82 V.

Totalreaksjonen er $\ce{1/2O2 + NADH + H+ -> H2O + NAD+}$:

$$E^\circ = 0{,}82 - (-0{,}32) = +1{,}14\ \text{V}, \qquad n = 2$$

$$\Delta G^\circ = -nFE^\circ = -2 \cdot 96{,}48\ \tfrac{\text{kJ}}{\text{mol}\cdot\text{V}} \cdot 1{,}14\ \text{V} = \mathbf{-220\ kJ/mol}$$

Dette er energien som frigjøres når elektronene transporteres fra NADH til O₂. Den driver ATP-syntesen i oksidativ fosforylering (se [mitokondrier](/medod1/cellebiologi/organeller/mitokondrier)). Til sammenligning har ATP → ADP + Pᵢ en ΔG° på −30,5 kJ/mol.
:::

:::eksempel[Oppgavesett 4, oppg. 2c–d: Zn + Cu²⁺ → Zn²⁺ + Cu]
E° = +1,10 V og n = 2.

$$\Delta G^\circ = -2 \cdot 96{,}485 \cdot 1{,}10 = -212\ \text{kJ/mol}$$

$$\log K = \frac{2 \cdot 1{,}10}{0{,}0592} = 37{,}16 \quad\Rightarrow\quad K = 10^{37{,}16} \approx 1{,}5\times10^{37}$$

ΔG° er stor og negativ og K ≫ 1, så reaksjonen går i praksis fullstendig mot høyre.
:::

:::eksempel[Cu + 2Ag⁺ → Cu²⁺ + 2Ag (forelesning 5, E° = 0,46 V)]
n = 2.

$$\Delta G^\circ = -2 \cdot 96{,}485 \cdot 0{,}46 = -88{,}8\ \text{kJ/mol}$$

$$\log K = \frac{2 \cdot 0{,}46}{0{,}0592} = 15{,}54 \quad\Rightarrow\quad K = 10^{15{,}54} \approx 3{,}5\times10^{15}$$
:::

:::eksamen
Spørsmål som går igjen på eksamen:
- Fortegnet på E°celle og ΔG° fra to halvreaksjoner. Spørsmålet har kommet på 5 av 9 eksamener (H2022, H2023, H2024, H2025, V2026), alltid som «2A⁺ + B(s) → 2A(s) + B²⁺» med E° oppgitt for begge halvreaksjoner. Svaret har hver gang vært «E° > 0 og ΔG° < 0». Husk at E° for A⁺ ikke ganges med 2.
- Hva gjelder ved likevekt? ΔG = 0, E = 0 og Q = K, men **ikke** K = 0 (V2026).
- Oppgavesett 3, oppg. 6: Kc ≫ 1 gir ΔG° < 0 og E° > 0, men sier ingenting om hastigheten.
:::

## Vanlige feil

:::feil
- **n glemt.** ΔG° er proporsjonal med n. Den ganges med elektronantallet, i motsetning til E°.
- **J og kJ forvekslet.** Med F = 96 485 får du J/mol. Del på 1000 for å få kJ/mol.
- **Fortegnsfeil.** Det er minus i ΔG° = −nFE°. Positiv E° skal alltid gi negativ ΔG°.
- **0,0592 brukt ved andre temperaturer.** Faktoren gjelder bare ved 25 °C. Bruk ellers RT/nF · ln K.
- **E° ganget når reaksjonen ganges opp.** E° er uendret. Det er n, og dermed ΔG°, som endres.
- **Stor ΔG° tolket som rask reaksjon.** ΔG° og E° sier ingenting om reaksjonshastigheten.
:::

## Test deg selv

:::sjekk[En reaksjon har E°celle = −0,20 V. Hva kan du si om ΔG° og K?]
ΔG° = −nFE° > 0 og K < 1. Reaksjonen er ikke spontan som skrevet under standardbetingelser, men den motsatte reaksjonen er spontan.
:::

:::sjekk[Hvorfor er ΔG° for NADH → O₂ så mye mer negativ enn for ATP-hydrolyse, og hva betyr det biologisk?]
Det er stor potensialforskjell (1,14 V) mellom NAD⁺/NADH og O₂/H₂O, og det gir ΔG° ≈ −220 kJ/mol. Energien frigjøres trinnvis i elektrontransportkjeden og brukes til å bygge opp en protongradient. Gradienten driver ATP-syntase, slik at flere ATP (−30,5 kJ/mol hver) kan dannes per NADH.
:::

:::sjekk[Hva er E for et «tomt batteri», og hvordan henger det sammen med ΔG?]
E = 0. Da er ΔG = −nFE = 0, systemet er i likevekt og Q = K. Det kan ikke gjøres mer elektrisk arbeid.
:::

:::sjekk[En redoksreaksjon med n = 1 har K = 1,0 × 10⁵ ved 25 °C. Hva er E°?]
E° = (0,0592/1) · log(10⁵) = 0,0592 · 5 = **0,296 V**.
:::
