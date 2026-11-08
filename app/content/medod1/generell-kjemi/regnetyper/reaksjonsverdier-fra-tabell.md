---
title: ΔH°, ΔS° og ΔG° fra tabellverdier
summary: Regn ut ΔH°, ΔS° eller ΔG° for en reaksjon som Σ(produkter) − Σ(reaktanter), der hver tabellverdi ganges med sin støkiometriske koeffisient. Grunnstoffer i standardtilstand har ΔH°f = ΔG°f = 0, men S° ≠ 0.
category: termo
order: 2
tags: [dannelsesentalpi, standard entropi, fri dannelsesenergi, Hess, standardbetingelser]
related:
  - generell-kjemi/teori/termodynamikk
  - generell-kjemi/regnetyper/gibbs-fri-energi
  - generell-kjemi/regnetyper/fri-energi-og-likevekt
  - proteiner/teori/enzymkatalyse
sources:
  - file: medod1/material/generell-kjemi/forelesning5-del1-2026--8063675.pdf
    pages: "4-14"
  - file: medod1/material/generell-kjemi/forelesning5-del1-2024-13-14--7794043.pdf
  - file: medod1/exercises/oppgavesett3-2026--8066331.pdf
  - file: medod1/exercises/oppgavesett3-2026-fasit--8081616.pdf
fields:
  Formel: ΔX°rxn = Σ n·X°(produkter) − Σ n·X°(reaktanter)
  Gjelder: ΔH°f, S°, ΔG°f
  Standardbetingelser: 1 M, 1 atm, 25 °C (298 K)
---

## Når brukes den

- Oppgaven gir en tabell med **ΔH°f**, **S°** eller **ΔG°f** og ber om reaksjonens ΔH°, ΔS° eller ΔG°.
- Du skal manipulere en reaksjonsligning og finne den nye ΔH, for eksempel ved å gange opp, snu eller endre tilstand.
- Du skal kombinere resultatet med ΔG° = ΔH° − TΔS°. Se [ΔG = ΔH − TΔS](/medod1/generell-kjemi/regnetyper/gibbs-fri-energi).

## Formler

For $a\,\ce{A} + b\,\ce{B} -> c\,\ce{C} + d\,\ce{D}$:

$$\Delta H^\circ_{rxn} = [c\,\Delta H^\circ_f(\ce{C}) + d\,\Delta H^\circ_f(\ce{D})] - [a\,\Delta H^\circ_f(\ce{A}) + b\,\Delta H^\circ_f(\ce{B})]$$

$$\Delta S^\circ_{rxn} = \sum n\,S^\circ(\text{produkter}) - \sum m\,S^\circ(\text{reaktanter})$$

$$\Delta G^\circ = \sum n\,\Delta G^\circ_f(\text{produkter}) - \sum m\,\Delta G^\circ_f(\text{reaktanter}) \quad\text{eller}\quad \Delta G^\circ = \Delta H^\circ - T\Delta S^\circ$$

Regler for ΔH fra forelesningen (de gjelder også ΔG):
1. Ganger du reaksjonen med en faktor, ganges ΔH med samme faktor.
2. Den motsatte reaksjonen har samme ΔH med **motsatt fortegn**.
3. ΔH avhenger av **tilstanden** (g/l/s) til reaktanter og produkter.

Standardverdier:
- **ΔH°f og ΔG°f = 0** for grunnstoffer i sin standardtilstand, for eksempel O₂(g), N₂(g) og H₂(g).
- **S° er absolutt** (målt mot 0 K) og er **ikke** 0 for grunnstoffer.
- Enheter: ΔH og ΔG i kJ/mol, S i J/(mol·K).

## Fremgangsmåte

1. Balanser reaksjonen.
2. Slå opp verdien for hvert stoff, og pass på riktig **tilstand** (H₂O(l) eller H₂O(g)).
3. Gang hver verdi med koeffisienten.
4. Regn ut produkter minus reaktanter.
5. Sjekk enhetene. Hvis du skal kombinere ΔS med ΔH, gjør J om til kJ.

## Regneeksempel

:::eksempel[Forelesning 5: ΔS° for dannelse av vann]
$\ce{2H2(g) + O2(g) -> 2H2O(l)}$

Tabellverdier: S°(H₂, g) = 130,6, S°(O₂, g) = 205 og S°(H₂O, l) = 69,9 J/(K·mol).

$$\Delta S^\circ = 2(69{,}9) - [2(130{,}6) + 205] = 139{,}8 - 466{,}2 = -326{,}4\ \text{J/(K·mol)}$$

Forelesningen oppgir −327 J/(K·mol), som er en avrundingsforskjell.

Tolkning: 3 mol gass blir til 2 mol væske. Uorden minker, så ΔS < 0. Det stemmer med fortegnet.
:::

:::eksempel[Forelesning 5: ΔG° ved 25 °C fra ΔG°f]
Tabellverdier i kJ/mol:
- ΔG°f(NO, g) = 86,6
- ΔG°f(H₂O, g) = −228,6
- ΔG°f(NH₃, g) = −16
- ΔG°f(O₂) = ΔG°f(N₂) = 0

**a)** $\ce{4NH3(g) + 5O2(g) -> 4NO(g) + 6H2O(g)}$

$$\Delta G^\circ = [4(86{,}6) + 6(-228{,}6)] - [4(-16) + 5(0)] = (346{,}4 - 1371{,}6) - (-64) = -961{,}2\ \text{kJ}$$

**b)** $\ce{N2(g) + O2(g) -> 2NO(g)}$

$$\Delta G^\circ = 2(86{,}6) - (0 + 0) = +173{,}2\ \text{kJ}$$

Lysarket viser 173,3, som skyldes avrunding av tabellverdien.

**Har en katalysator nytte?**
- I a) er ΔG° < 0. Reaksjonen er spontan, men kan være treg, så en katalysator kan øke hastigheten.
- I b) er ΔG° > 0. Reaksjonen er ikke spontan, og en katalysator endrer **ikke** ΔG, så den hjelper ikke. Det samme gjelder enzymer, se [enzymkatalyse](/medod1/proteiner/teori/enzymkatalyse).
:::

:::eksempel[Forelesning 5: regnereglene for ΔH]
$\ce{CH4(g) + 2O2(g) -> CO2(g) + 2H2O(g)}$ har ΔH = −802 kJ/mol.

- **Ganget med 3:** ΔH = 3 · (−802) = −2406 kJ.
- **Snudd:** $\ce{CO2 + 2H2O(g) -> CH4 + 2O2}$ har ΔH = +802 kJ.
- **Med H₂O(l) som produkt:** ΔH = −802 + (−88) = −890 kJ/mol. Kondensasjon av 2 mol vann frigjør 88 kJ (2 · 44 kJ).
:::

:::eksamen
Slike tabellberegninger er sjelden spurt med tall på MEDOD1-eksamen. Det som går igjen er **fortegnsforståelse**: hvordan antall gassmolekyler påvirker ΔS, at endoterm betyr ΔH > 0, og at en katalysator ikke endrer ΔG. Oppgavesett 3, oppg. 9 ber deg forutsi fortegnet på ΔS. Utfelling og færre mol gass gir ΔS < 0, flere mol gass gir ΔS > 0.

Nesten hvert år kommer «kalorimetri»-oppgaven: ΔH og ΔS er oppgitt (ofte i kcal/mol og cal/(mol·K)), og du skal avgjøre om reaksjonen er eksoterm/endoterm (fortegnet på ΔH) og eksergon/endergon (fortegnet på ΔG = ΔH − TΔS; gjør cal om til kcal før du regner). Eksempel: ΔH = −8,5 kcal/mol og ΔS = +18 cal/(mol·K) gir ΔG < 0 ved alle T – eksergon og eksoterm (H2024). Se [ΔG = ΔH − TΔS](/medod1/generell-kjemi/regnetyper/gibbs-fri-energi).
:::

## Vanlige feil

:::feil
- **Reaktanter minus produkter.** Det skal være produkter minus reaktanter.
- **Glemt koeffisient.** Hver tabellverdi skal ganges med koeffisienten i den balanserte ligningen.
- **S° = 0 for grunnstoffer.** Feil. Bare ΔH°f og ΔG°f er 0 for grunnstoffer i standardtilstand.
- **Feil tilstand.** H₂O(l) og H₂O(g) har ulike verdier.
- **J/kJ.** ΔS er i J/(mol·K). Del på 1000 før du setter inn i ΔG° = ΔH° − TΔS°.
:::

## Test deg selv

:::sjekk[Hvorfor er ΔH°f(O₂, g) = 0, mens S°(O₂, g) = 205 J/(K·mol)?]
ΔH°f er definert som entalpiendringen ved dannelse av stoffet fra grunnstoffene i standardtilstand. For et grunnstoff i standardtilstand er det ingen endring, så verdien er 0. S° er en absolutt størrelse målt mot 0 K, og alle stoffer har positiv entropi ved 298 K.
:::

:::sjekk[Forutsi fortegnet på ΔS for N₂(g) + 3H₂(g) → 2NH₃(g).]
**Negativt.** Antall mol gass går fra 4 til 2, og det gir mindre uorden.
:::

:::sjekk[ΔH for A → B er −50 kJ/mol. Hva er ΔH for 2B → 2A?]
+100 kJ. Når reaksjonen snus, skifter fortegnet. Når den dobles, dobles verdien.
:::

:::sjekk[Reaksjon b) N₂ + O₂ → 2NO har ΔG° = +173 kJ. Kan en katalysator gjøre den spontan?]
Nei. En katalysator senker bare aktiveringsenergien og endrer hastigheten i begge retninger. ΔG og K er uendret.
:::
