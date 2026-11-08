---
title: Standard cellepotensial E°celle
summary: Kombiner to halvreaksjoner. Den med høyest E° reduseres (katode), den andre snus (anode, E° får motsatt fortegn). E°celle = E°katode − E°anode, og E° ganges aldri med koeffisienter. E°celle > 0 betyr at reaksjonen er spontan og at ΔG° < 0.
category: elektro
order: 1
tags: [reduksjonspotensial, galvanisk celle, katode, anode, oksidasjonsmiddel, reduksjonsmiddel, spenningsrekke]
related:
  - generell-kjemi/teori/elektrokjemi
  - generell-kjemi/regnetyper/nernst-likning
  - generell-kjemi/regnetyper/fri-energi-og-cellepotensial
  - generell-kjemi/regnetyper/konsentrasjonscelle-og-membranpotensial
  - cellebiologi/organeller/mitokondrier
sources:
  - file: medod1/material/generell-kjemi/forelesning5-del2-2026-1--8069233.pdf
    pages: "3-13"
  - file: medod1/material/generell-kjemi/elektro-1--7793974.pdf
  - file: medod1/exercises/oppgavesett3-2026--8066331.pdf
  - file: medod1/exercises/oppgavesett3-2026-fasit--8081616.pdf
  - file: medod1/exercises/oppgavesett-4-2026--8204427.pdf
  - file: medod1/exercises/oppgavesett-4-fasit-2026--8204433.pdf
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2023-medod1-h2023-med-svar--5670979.pdf
fields:
  Formel: E°celle = E°katode − E°anode (= E°red + E°oks)
  Katode: reduksjon (høyest E°)
  Anode: oksidasjon (lavest E°)
  Standardbetingelser: 1 M, 1 atm, 25 °C
---

## Når brukes den

- Du får to **standard reduksjonspotensialer** fra en tabell (spenningsrekken) og skal finne E°celle for en galvanisk celle eller en redoksreaksjon.
- Du skal avgjøre om en redoksreaksjon er **spontan som skrevet** under standardbetingelser, og hva fortegnet på ΔG° og størrelsen på K blir.
- Du skal identifisere **oksidasjonsmiddel**, **reduksjonsmiddel**, **anode** og **katode**.

## Formler

Standard halvcellepotensialer oppgis **alltid som reduksjon**. Potensialet for oksidasjonen er det samme tallet med motsatt fortegn.

Forelesningens skrivemåte:

$$E^\circ_{celle} = E^\circ_{red} + E^\circ_{oks}, \qquad E^\circ_{oks} = -E^\circ_{red}(\text{den snudde halvreaksjonen})$$

Det er det samme som

$$E^\circ_{celle} = E^\circ_{katode} - E^\circ_{anode}$$

- **Katode:** reduksjon, halvreaksjonen med **høyest** E°. Stoffet som reduseres er det **sterkeste oksidasjonsmiddelet**.
- **Anode:** oksidasjon, halvreaksjonen med **lavest** E°, som snus. Stoffet som oksideres er **reduksjonsmiddelet**.
- Standardbetingelser: 1 M, gasser 1 atm, 25 °C. Hydrogenelektroden er definert med E° = 0 V.

| E°celle | ΔG° | K | Reaksjonen som skrevet |
|---|---|---|---|
| > 0 | < 0 | > 1 | spontan |
| < 0 | > 0 | < 1 | ikke spontan (den motsatte er spontan) |

## Fremgangsmåte

1. Skriv begge halvreaksjonene som reduksjoner med sine E°-verdier.
2. Bestem retningen:
   - **Fri celle:** halvreaksjonen med høyest E° er reduksjonen. Snu den andre og bytt fortegn på dens E°.
   - **Gitt totalreaksjon:** les av hvilken som faktisk reduseres i reaksjonen slik den er skrevet. Regn E°celle = E°(den som reduseres) − E°(den som oksideres). Et negativt svar betyr at reaksjonen ikke er spontan som skrevet.
3. Gang halvreaksjonene med faktorer slik at antall elektroner blir likt. Legg dem sammen. **E° skal ikke ganges.**
4. Fortegnet på E°celle gir fortegnet på ΔG° og om K er større eller mindre enn 1.

## Regneeksempel

:::eksempel[Forelesning 5, eksempel 2: Cu(s) | Cu²⁺ (1 M) ‖ Ag⁺ (1 M) | Ag(s)]
Halvreaksjonene:
- Ag⁺ + e⁻ → Ag, med E° = 0,80 V
- Cu²⁺ + 2e⁻ → Cu, med E° = 0,34 V

Ag⁺ har høyest E°, så Ag⁺ er det sterkeste oksidasjonsmiddelet og reduseres. Cu-halvreaksjonen snus.

Reduksjon (×2): $\ce{2Ag+ + 2e- -> 2Ag}$, med E° = 0,80 V (**ikke** ganget med 2)

Oksidasjon: $\ce{Cu -> Cu^2+ + 2e-}$, med E° = −0,34 V

Totalreaksjon: $\ce{Cu(s) + 2Ag+ -> Cu^2+ + 2Ag(s)}$

$$E^\circ_{celle} = 0{,}80 + (-0{,}34) = 0{,}46\ \text{V}$$

E° > 0, så reaksjonen er spontan.
:::

:::eksempel[Oppgavesett 4, oppg. 2: Zn(s) + Cu²⁺ → Zn²⁺ + Cu(s)]
E°(Zn²⁺/Zn) = −0,76 V og E°(Cu²⁺/Cu) = +0,34 V.

- Oksidasjon: Zn → Zn²⁺ + 2e⁻. Zn er reduksjonsmiddel og anode.
- Reduksjon: Cu²⁺ + 2e⁻ → Cu. Cu²⁺ er oksidasjonsmiddel og katode.

$$E^\circ_{celle} = E^\circ_{katode} - E^\circ_{anode} = 0{,}34 - (-0{,}76) = +1{,}10\ \text{V}$$

E° > 0 gir ΔG° < 0. Reaksjonen er **spontan**, og K ≫ 1.
:::

:::eksempel[Eksamen (V2026, H2025, V2024, H2021): H₂O₂ og Fe²⁺]
Halvreaksjonene:
- $\ce{H2O2 + 2H+ + 2e- -> 2H2O}$, med E° = +1,763 V
- $\ce{Fe^3+ + e- -> Fe^2+}$, med E° = +0,769 V

Totalreaksjonen er $\ce{H2O2 + 2H+ + 2Fe^2+ -> 2H2O + 2Fe^3+}$.

H₂O₂ reduseres og Fe²⁺ oksideres:

$$E^\circ_{celle} = 1{,}763 - 0{,}769 = \mathbf{+0{,}994\ V}$$

Feilalternativene på eksamen:
- +2,532 V: de to reduksjonspotensialene summert uten å snu Fe-halvreaksjonen (1,763 + 0,769).
- +0,225 V: 1,763 − 2·0,769.
- +3,301 V: Fe-potensialet ganget med 2 og summert uten å snu (1,763 + 2·0,769).
:::

:::eksempel[Eksamen, fortegnsoppgave (V2026, H2025, H2024, H2023, H2022)]
Halvreaksjonene:
- A⁺ + e⁻ → A(s), med E° = +0,373 V
- B²⁺ + 2e⁻ → B(s), med E° = −0,241 V

Reaksjonen er $\ce{2A+ + B(s) -> 2A(s) + B^2+}$. A⁺ reduseres og B oksideres:

$$E^\circ_{celle} = 0{,}373 - (-0{,}241) = +0{,}614\ \text{V} > 0 \Rightarrow \Delta G^\circ < 0$$

Varianter av samme oppgave:
- E° = +0,188 og −0,425 V gir +0,613 V.
- E° = −0,133 og −0,241 V gir +0,108 V (V2026).

Alle har svaret **E° > 0 og ΔG° < 0**.
:::

:::eksamen
**E°celle-oppgaver kommer på nesten hver eksamen:**
- Fortegnet på E°celle og ΔG° fra to halvreaksjoner (5 av 9 eksamener).
- H₂O₂/Fe²⁺ = +0,994 V (4 eksamener).
- Å identifisere hva som oksideres og reduseres. I cellerespirasjonen (i [mitokondriene](/medod1/cellebiologi/organeller/mitokondrier)) er O₂ oksidasjonsmiddel og glukose reduksjonsmiddel (oppgavesett 4, oppg. 15).
:::

## Vanlige feil

:::feil
- **Ganger E° med koeffisienten.** E° er en intensiv størrelse (volt) og ganges aldri, selv om halvreaksjonen ganges for å balansere elektronene. ΔG° ganges derimot med n.
- **Summerer to reduksjonspotensialer uten å snu det ene.** Da får du for eksempel 1,763 + 0,769 i stedet for differansen.
- **Snur feil halvreaksjon.** Det er halvreaksjonen med **lavest** E° som snus, altså oksideres, når cellen går spontant.
- **Gitt reaksjon som går «feil vei».** Da blir E°celle negativ. Det er riktig svar og betyr at reaksjonen ikke er spontan som skrevet. Ikke snu den for å få et positivt tall.
- **Blander oksidasjonsmiddel og reduksjonsmiddel.** Oksidasjonsmiddelet **reduseres** selv.
:::

## Test deg selv

:::sjekk[Fe²⁺/Fe har E° = −0,44 V og Ag⁺/Ag har E° = +0,80 V. Hva er E°celle for Fe + 2Ag⁺ → Fe²⁺ + 2Ag?]
E°celle = 0,80 − (−0,44) = **+1,24 V**. Ag⁺-verdien skal ikke ganges med 2. Reaksjonen er spontan, ΔG° < 0 og K > 1.
:::

:::sjekk[Hvorfor er Zn anode i en Zn/Cu-celle?]
Zn²⁺/Zn har lavere reduksjonspotensial (−0,76 V) enn Cu²⁺/Cu (+0,34 V). Zn gir derfor fra seg elektroner, oksideres, og oksidasjon skjer ved anoden.
:::

:::sjekk[Er reaksjonen Co(s) + Fe²⁺ → Co²⁺ + Fe(s) spontan under standardbetingelser? Bruk E°(Fe²⁺/Fe) = −0,447 V og E°(Co²⁺/Co) = −0,28 V.]
I reaksjonen reduseres Fe²⁺ og Co oksideres. E°celle = −0,447 − (−0,28) = **−0,17 V** < 0, så reaksjonen er **ikke spontan** som skrevet. Det er oppgavesett 3, oppg. 8.
:::

:::sjekk[Hva betyr det at H₂-elektroden har E° = 0 V?]
Det er en definisjon. Alle andre standard reduksjonspotensialer er målt relativt til standard hydrogenelektrode (H₂ 1 atm, [H⁺] = 1 M). Eksempel: H₂ | H⁺ ‖ Cu²⁺ | Cu måles til 0,34 V, og da er E°(Cu²⁺/Cu) = +0,34 V.
:::
