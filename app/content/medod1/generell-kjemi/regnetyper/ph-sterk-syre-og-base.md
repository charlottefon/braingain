---
title: pH i sterk syre / sterk base
summary: Sterke syrer (HCl, HBr, HNO₃) og sterke baser (NaOH, KOH, Ca(OH)₂) protolyseres 100 %. Da er [H₃O⁺] = c(syre) og [OH⁻] = c(base) × antall OH⁻ per formelenhet. Regn så pH direkte, for baser via pOH.
category: syre-base
order: 2
tags: [sterk syre, sterk base, pH, pOH, fullstendig protolyse, HCl, NaOH, Ca(OH)2]
related:
  - generell-kjemi/teori/syrer-baser-og-ph
  - generell-kjemi/regnetyper/ph-og-h3o-omregning
  - generell-kjemi/regnetyper/noytralisering-sterk-syre-base
  - generell-kjemi/regnetyper/ph-svak-syre
sources:
  - file: medod1/material/generell-kjemi/forelesning3-del1-3-2026--8030911.pdf
    pages: "23-28"
  - file: medod1/exercises/oppgavesett2-2026--8047637.pdf
  - file: medod1/exercises/oppgavesett2-2026-fasit--8047656.pdf
    pages: "7"
  - file: medod1/exams/2025-medod1-ny-v2025-med-svar--7269873.pdf
  - file: medod1/exams/2024-medod1-h2024-med-svar--7298977.pdf
  - file: medod1/exams/2023-medod1-ny-v2023-med-svar--5194537.pdf
fields:
  Sterke syrer (typiske): "HCl, HBr, HI, HNO₃, H₂SO₄ (1. trinn), HClO₄"
  Sterke baser (typiske): "NaOH, KOH, Ca(OH)₂"
  Nøkkel: "100 % protolyse – ingen likevektsberegning"
---

## Når brukes den

- Løsningen inneholder **én sterk syre eller én sterk base** i vann (ingen buffer, ingen svak syre).
- Gjenkjenn de sterke: HCl, HBr, HI, $\ce{HNO3}$, $\ce{HClO4}$, $\ce{H2SO4}$ (første trinn), og hydroksider av alkali-/jordalkalimetaller (NaOH, KOH, $\ce{Ca(OH)2}$).
- Er syren/basen **svak** (Ka/Kb oppgitt, karboksylsyre, $\ce{NH3}$): bruk [pH i svak syre](/medod1/generell-kjemi/regnetyper/ph-svak-syre) eller [pH i svak base](/medod1/generell-kjemi/regnetyper/ph-svak-base-og-salt).
- Blandes sterk syre og sterk base: [Blanding av sterk syre og sterk base](/medod1/generell-kjemi/regnetyper/noytralisering-sterk-syre-base).

## Formler

Sterk syre HA (monoprotisk): $\ce{HA + H2O -> H3O+ + A-}$ (100 %)

$$[\ce{H3O+}] = c_{\text{syre}} \qquad \text{pH} = -\log c_{\text{syre}}$$

Sterk base $\ce{M(OH)_n}$: $\ce{M(OH)_n -> M^{n+} + n\,OH-}$

$$[\ce{OH-}] = n \cdot c_{\text{base}} \qquad \text{pOH} = -\log[\ce{OH-}] \qquad \text{pH} = 14 - \text{pOH}$$

## Fremgangsmåte

1. Avgjør om stoffet er sterk syre eller sterk base (se lista over).
2. Skriv dissosiasjonen og tell hvor mange $\ce{H3O+}$/$\ce{OH-}$ hver formelenhet gir.
3. $[\ce{H3O+}]$ eller $[\ce{OH-}]$ = startkonsentrasjon × antall.
4. Syre: pH = −log[H₃O⁺]. Base: pOH = −log[OH⁻], så pH = 14 − pOH.
5. Sjekk at svaret er rimelig: syre < 7, base > 7.

## Regneeksempel

:::eksempel[Regneeksempel: 0,025 M HNO3 (forelesning 3)]
$\ce{HNO3}$ er sterk ⇒ $[\ce{H3O+}] = 0{,}025$ M.
pH = $-\log 0{,}025 = $ **1,60**.
:::

:::eksempel[Regneeksempel: oppgavesett 2, oppg. 14]
**a) 0,40 M HBr:** sterk syre ⇒ $[\ce{H3O+}] = 0{,}40$ M ⇒ pH = $-\log 0{,}40 = $ **0,40**.

**b) 3,7·10⁻⁴ M KOH:** sterk base ⇒ $[\ce{OH-}] = 3{,}7\cdot10^{-4}$ M.
pOH = $-\log(3{,}7\cdot10^{-4}) = 3{,}43$ ⇒ pH = 14 − 3,43 = **10,57**.
(Kontroll: $[\ce{H3O+}] = 10^{-14}/3{,}7\cdot10^{-4} = 2{,}7\cdot10^{-11}$ M.)

**c) 5·10⁻⁵ M Ca(OH)₂:** hver formelenhet gir **to** $\ce{OH-}$ ⇒ $[\ce{OH-}] = 2 \cdot 5\cdot10^{-5} = 1\cdot10^{-4}$ M.
pOH = 4 ⇒ pH = **10,0**.
:::

:::eksempel[Regneeksempel: 1 M NaOH (eksamen H2024)]
$[\ce{OH-}] = 1$ M ⇒ pOH = 0 ⇒ pH = **14**.
:::

## Vanlige feil

:::feil
- **Styrke ≠ konsentrasjon.** «Sterk» betyr fullstendig protolysert, ikke konsentrert. 5 mM HCl er en sterk syre, mens 3,0 M glutaminsyre og 750 mM fosforsyre er svake (eksamen V2025, V2024, V2023, H2021).
- **Glemme faktoren 2** for $\ce{Ca(OH)2}$ og andre hydroksider med flere OH⁻.
- **Svare med pOH** for en base.
- Bruke Ka-tabell eller andregradslikning for en sterk syre. Det trengs ikke.
- Ekstremt fortynnede sterke syrer (< 10⁻⁶ M) nærmer seg pH 7, ikke pH > 7. Vannets egenprotolyse kan ikke overses der (sjelden på eksamen).
:::

:::eksamen
«Hvilken er en sterk syre?» går igjen (V2025, V2024, V2023, H2021). Svaret er HCl (50 mM eller 5 mM) uansett konsentrasjon. Distraktorene er svake syrer i høy konsentrasjon (3,0 M / 0,3 M glutaminsyre, 750 mM / 1,3 M fosforsyre) og fortynnet NaOH (som er en base). «pH i 1 M NaOH» = 14 (H2024).
:::

## Test deg selv

:::sjekk[Hva er pH i 0,0010 M HCl?]
$[\ce{H3O+}] = 1{,}0\cdot10^{-3}$ M ⇒ pH = 3,0.
:::

:::sjekk[Hva er pH i 0,050 M Ba(OH)2?]
To OH⁻ per formelenhet: $[\ce{OH-}] = 0{,}10$ M ⇒ pOH = 1,0 ⇒ pH = 13,0.
:::

:::sjekk[Hvorfor har 0,10 M HCl lavere pH enn 0,10 M eddiksyre?]
HCl er sterk og protolyseres fullstendig, så $[\ce{H3O+}] = 0{,}10$ M og pH = 1. Eddiksyre er svak (Ka = 1,8·10⁻⁵) og protolyseres bare delvis, så $[\ce{H3O+}] \approx 1{,}3\cdot10^{-3}$ M og pH ≈ 2,9.
:::

:::sjekk[Er en svak syre det samme som en fortynnet sterk syre?]
Nei. En svak syre protolyseres bare delvis (likevekt, Ka), uansett konsentrasjon. En fortynnet sterk syre er fortsatt 100 % protolysert, bare i lav konsentrasjon.
:::
