---
title: Buffer etter tilsetning av sterk syre eller base
summary: "Tilsatt H₃O⁺ omdanner A⁻ til HA, og tilsatt OH⁻ omdanner HA til A⁻, mol for mol og fullstendig. Regn nye mmol først, deretter pH med Henderson–Hasselbalch; pH endres lite så lenge begge formene finnes."
category: buffer
order: 2
tags: [buffer, bufferkapasitet, Henderson-Hasselbalch, tilsetning, HCl, NaOH, pentansyre, åpent system, lukket system, blod]
related:
  - generell-kjemi/regnetyper/henderson-hasselbalch
  - generell-kjemi/regnetyper/titrering-svak-syre
  - generell-kjemi/teori/buffere
  - generell-kjemi/teori/karbonsyre-og-blodets-ph
  - cellebiologi/sammensatte-tema/blodets-ph-regulering-og-hyperventilering
sources:
  - file: medod1/material/generell-kjemi/forelesning-4-2026--8041090.pdf
    pages: "2-6"
  - file: medod1/exercises/oppgavesett2-2026--8047637.pdf
  - file: medod1/exercises/oppgavesett2-2026-fasit--8047656.pdf
    pages: "9-10"
  - file: medod1/material/generell-kjemi/hyperventilering--7794027.pdf
    pages: "17-20"
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2025-medod1-ny-v2025-med-svar--7269873.pdf
fields:
  Tilsatt syre: "A⁻ + H₃O⁺ → HA + H₂O"
  Tilsatt base: "HA + OH⁻ → A⁻ + H₂O"
  Nøkkel: "Støkiometri i mmol først, så HH"
---

## Når brukes den

- En buffer (HA + A⁻) tilsettes en **sterk** syre (HCl) eller **sterk** base (NaOH), og du skal finne ny pH.
- Du skal vise at en buffer «motstår pH-endring», eller sammenligne med ubufret vann.
- Når du skal forklare hvorfor blodets CO₂/HCO₃⁻-buffer virker så godt (åpent system).

## Formler

Reaksjonene går fullstendig (sterk syre/base mot svak base/syre):

$$\ce{A- + H3O+ -> HA + H2O} \qquad \ce{HA + OH- -> A- + H2O}$$

Med $n$ = mmol tilsatt sterk syre eller base:

$$\text{tilsatt syre: } \text{pH} = \text{p}K_a + \log\frac{n_{\ce{A-}} - n}{n_{\ce{HA}} + n} \qquad \text{tilsatt base: } \text{pH} = \text{p}K_a + \log\frac{n_{\ce{A-}} + n}{n_{\ce{HA}} - n}$$

Gyldig så lenge begge formene finnes. Overskrides kapasiteten, er det overskuddet av sterk syre eller base som bestemmer pH.

## Fremgangsmåte

1. Regn mmol HA og mmol A⁻ i bufferen (M × mL).
2. Regn mmol tilsatt H₃O⁺ eller OH⁻.
3. Lag en tabell: før, endring, etter. Tilsatt syre: A⁻ − n, HA + n. Tilsatt base: HA − n, A⁻ + n.
4. Er begge > 0: HH med de nye mmol-tallene (volumet forkortes).
5. Er én av dem brukt opp: regn på overskuddet av sterk syre/base (eller på ren svak syre/base).

## Regneeksempel

:::eksempel[Regneeksempel: pentansyre (valeriansyre), oppgavesett 2, oppg. 21]
pKa = 4,84.

**a) 0,259 M pentansyre alene:** pH = ½(4,84 − log 0,259) = ½(4,84 + 0,587) = **2,71**.

**b) Buffer: 0,259 M syre + 0,210 M natriumpentanat:**
pH = 4,84 + log(0,210/0,259) = 4,84 − 0,091 = **4,75**.

**c) 8,00 mL 0,100 M HCl til 75,0 mL buffer:**
- HA: 0,259 × 75,0 = 19,43 mmol. A⁻: 0,210 × 75,0 = 15,75 mmol. H₃O⁺: 0,100 × 8,00 = 0,800 mmol.
- Etter: A⁻ = 15,75 − 0,80 = 14,95 mmol, HA = 19,43 + 0,80 = 20,23 mmol.
- pH = 4,84 + log(14,95/20,23) = 4,84 − 0,131 = **4,71**.

**d) 8,00 mL 0,100 M NaOH i stedet:**
- A⁻ = 15,75 + 0,80 = 16,55 mmol, HA = 19,43 − 0,80 = 18,63 mmol.
- pH = 4,84 + log(16,55/18,63) = 4,84 − 0,051 = **4,79**.

pH endres bare ±0,04. Den samme mengden HCl i 83 mL rent vann ville gitt pH ≈ 2,0.
:::

:::eksempel[Regneeksempel: blodets CO2-buffer – lukket mot åpent system (hyperventilerings-forelesningen)]
Utgangspunkt: $[\ce{HCO3-}] = 24$ mM, $[\ce{CO2(aq)}] = 1{,}2$ mM, pKa = 6,1 ⇒ pH 7,4. Tilsett 12 mmol HCl per liter.

**Lukket system (tenkt):** HCO₃⁻ = 24 − 12 = 12 mM, CO₂ = 1,2 + 12 = 13,2 mM
pH = 6,1 + log(12/13,2) = 6,1 − 0,04 = **6,06**. Dette ville vært dødelig.

**Åpent system (kroppen):** CO₂ som dannes, pustes ut, og [CO₂(aq)] holdes på 1,2 mM av partialtrykket (Henrys lov):
pH = 6,1 + log(12/1,2) = 6,1 + 1 = **7,1**.

Lungene gjør altså bufferen mye mer effektiv enn pKa = 6,1 alene skulle tilsi. Fysiologien bak: [blodets pH-regulering og hyperventilering](/medod1/cellebiologi/sammensatte-tema/blodets-ph-regulering-og-hyperventilering).
:::

## Vanlige feil

:::feil
- **Sette tilsatt HCl inn i HH direkte** som en konsentrasjon av «syre». HCl reagerer først med A⁻ og blir til HA.
- **Feil retning:** tilsatt syre øker HA og minker A⁻ (ikke omvendt).
- **Blande konsentrasjoner før og etter blanding.** Bruk mmol, så slipper du volumproblemet.
- **Glemme at kapasiteten kan sprenges.** Tilsettes mer sterk syre enn det finnes A⁻, er bufferen oppbrukt.
- Påstanden «OH⁻ reagerer med CH₃COO⁻» er feil. OH⁻ reagerer med syreformen CH₃COOH.
:::

:::eksamen
Gjenganger (H2025, V2025, H2021): eddiksyre/acetatbuffer. Riktig påstand er «tilsetter man litt HCl, synker pH bare litt». Feil påstander er «OH⁻ reagerer med CH₃COO⁻», «H⁺ reagerer med CH₃COOH» og «mer CH₃COOH gir høyere pH». Langsvar om hyperventilering og blodbuffer (V2026, maks 5 setninger): se [karbonsyre og blodets pH](/medod1/generell-kjemi/teori/karbonsyre-og-blodets-ph).
:::

## Test deg selv

:::sjekk[1,0 L buffer med 0,100 M eddiksyre og 0,100 M acetat (pKa 4,74) tilsettes 0,010 mol HCl. Ny pH?]
A⁻ = 0,090 mol, HA = 0,110 mol ⇒ pH = 4,74 + log(0,090/0,110) = 4,74 − 0,09 = 4,65. I 1 L vann ville den samme HCl-mengden gitt pH 2.
:::

:::sjekk[Hvilken komponent i bufferen tar hånd om tilsatt NaOH, og hva dannes?]
Syreformen HA: $\ce{HA + OH- -> A- + H2O}$. Det dannes mer A⁻, og pH stiger litt.
:::

:::sjekk[Hvorfor holder pH i blodet seg mye bedre enn i et lukket CO₂/HCO₃⁻-system når det tilføres syre?]
CO₂ som dannes, pustes ut i lungene, så [CO₂(aq)] (nevneren i HH) holdes konstant av partialtrykket. Bare [HCO₃⁻] synker.
:::
