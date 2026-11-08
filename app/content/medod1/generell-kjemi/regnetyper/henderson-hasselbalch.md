---
title: Bufferens pH (Henderson–Hasselbalch)
summary: For en blanding av en svak syre og dens korresponderende base er pH = pKa + log([base]/[syre]). Forholdet kan regnes i mol eller konsentrasjon, siden volumet forkortes bort. Ved like mengder er pH = pKa, og bufferområdet er pKa ± 1. Brukes til blod-pH (pKa 6,1 for CO₂/HCO₃⁻).
category: buffer
order: 1
tags: [buffer, Henderson-Hasselbalch, pKa, bufferområde, blod-pH, bikarbonat, ammoniakk, maursyre, eddiksyre]
related:
  - generell-kjemi/teori/buffere
  - generell-kjemi/teori/karbonsyre-og-blodets-ph
  - generell-kjemi/regnetyper/buffer-tilsatt-syre-eller-base
  - generell-kjemi/regnetyper/titrering-aminosyre
  - generell-kjemi/regnetyper/protolyttfordeling
  - cellebiologi/sammensatte-tema/blodets-ph-regulering-og-hyperventilering
  - cellebiologi/sammensatte-tema/saliva-og-salivas-kjemi
  - lab/ovelser/titrering-aminosyrer
sources:
  - file: medod1/material/generell-kjemi/forelesning-4-2026--8041090.pdf
    pages: "2-7"
  - file: medod1/info/formelhefte--7793986.pdf
  - file: medod1/material/generell-kjemi/hyperventilering--7794027.pdf
    pages: "12-21"
  - file: medod1/exercises/oppgavesett-4-fasit-2026--8204433.pdf
    pages: "8"
  - file: medod1/exercises/oppgavesett2-2026--8047637.pdf
  - file: medod1/exercises/kollokvium1-losningsforslag-2026--8121960.pdf
    pages: "8"
  - file: medod1/exams/2024-medod1-h2024-med-svar--7298977.pdf
  - file: medod1/exams/2023-medod1-ny-v2023-med-svar--5194537.pdf
  - file: medod1/exams/2022-medod1-h2022-med-svar--4750110.pdf
  - file: medod1/exams/2024-sensorveiledning-medod1-ny-v2024--5897568.docx
fields:
  Formel: "pH = pKa + log([A⁻]/[HA])"
  Ved [A⁻] = [HA]: "pH = pKa (midt i bufferområdet)"
  Bufferområde: "pKa − 1 til pKa + 1 ([A⁻]/[HA] = 0,1–10)"
  Blod: "pH = 6,1 + log([HCO₃⁻]/[CO₂(aq)]) = 6,1 + log(24/1,2) = 7,4"
---

## Når brukes den

- Løsningen inneholder **både** en svak syre (HA) og dens korresponderende base (A⁻) i betydelige mengder: en **buffer**.
- Eksempler: eddiksyre/acetat, maursyre/formiat, $\ce{NH4+}/\ce{NH3}$, $\ce{H2PO4-}/\ce{HPO4^2-}$, CO₂/HCO₃⁻ i blod, H₂A⁺/HA og HA/A⁻ i en aminosyretitrering ([lab: titrering av aminosyrer](/medod1/lab/ovelser/titrering-aminosyrer)).
- Når du kjenner pH og pKa og skal finne **forholdet** [A⁻]/[HA].
- Eksamen: «HH kan brukes til å beregne … **blodets pH**».

## Formler

Bufferlikningen (I) fra Ka-uttrykket:
$$[\ce{H3O+}] = K_a\frac{[\ce{HA}]}{[\ce{A-}]}$$

Logaritmisk form (Henderson–Hasselbalch, formelheftet):
$$\boxed{\text{pH} = \text{p}K_a + \log\frac{[\text{base}]}{[\text{syre}]} = \text{p}K_a + \log\frac{[\ce{A-}]}{[\ce{HA}]}}$$

- I samme løsning er $\dfrac{[\ce{A-}]}{[\ce{HA}]} = \dfrac{n_{\ce{A-}}}{n_{\ce{HA}}}$, så du kan regne i mmol.
- Base-buffer ($\ce{NH3}/\ce{NH4+}$): bruk pKa for den **sure** formen, $\text{p}K_a = 14 - \text{p}K_b$.
- Blod (37 °C, kursets verdi): $\text{pH} = 6{,}1 + \log\dfrac{[\ce{HCO3-}]}{[\ce{CO2(aq)}]}$

| [A⁻]/[HA] | pH |
|---|---|
| 0,1 | pKa − 1 |
| 1 | pKa |
| 10 | pKa + 1 |

## Fremgangsmåte

1. Identifiser syre (HA) og korresponderende base (A⁻) og pKa for **dette** paret. For flerprotiske syrer: velg pKa for det trinnet der begge formene finnes.
2. Finn stoffmengdene (mmol = M × mL) eller konsentrasjonene av HA og A⁻ **etter** eventuelle reaksjoner.
3. Sett inn: pH = pKa + log(A⁻/HA).
4. Rimelighetssjekk: mer base enn syre gir pH > pKa, og omvendt.

## Regneeksempel

:::eksempel[Regneeksempel: 0,2 M eddiksyre + 0,1 M natriumacetat (oppgavesett 4, oppg. 12)]
Ka = 1,8·10⁻⁵ ⇒ pKa = 4,74.
pH = 4,74 + log(0,1/0,2) = 4,74 + log 0,5 = 4,74 − 0,30 = **4,44**.
:::

:::eksempel[Regneeksempel: maursyre/formiat med fortynning (eksamen V2023)]
35 mL 0,20 M maursyre + 55 mL 0,10 M natriumformiat + 110 mL vann. pKa = 3,74.

1. $n(\ce{HCOOH}) = 35 \cdot 0{,}20 = 7{,}0$ mmol. $n(\ce{HCOO-}) = 55\cdot0{,}10 = 5{,}5$ mmol.
2. Volumet (200 mL) forkortes bort i forholdet.
3. pH = 3,74 + log(5,5/7,0) = 3,74 − 0,10 = **3,64**.

Alternativene var 3,44 / 4,04 / 3,74 / 3,64. Vannet endrer ikke pH.
:::

:::eksempel[Regneeksempel: NH3/NH4+-buffer (eksamen H2022)]
0,500 M $\ce{NH3}$ og 0,700 M $\ce{NH4+}$, Kb(NH₃) = 1,80·10⁻⁵.

1. pKb = 4,74 ⇒ pKa(NH₄⁺) = 14 − 4,74 = 9,26.
2. Base = NH₃, syre = NH₄⁺: pH = 9,26 + log(0,500/0,700) = 9,26 − 0,15 = **9,11**.

Fellen er pOH-svaret 4,89 (14 − 9,11) og 9,41 (forholdet snudd).
:::

:::eksempel[Regneeksempel: blod-pH normalt og ved hypoventilering (hyperventilerings-forelesningen; eksamen H2024)]
**Normalt:** $[\ce{HCO3-}] = 24$ mM, $[\ce{CO2(aq)}] = 1{,}2$ mM, pKa = 6,1:
pH = 6,1 + log(24/1,2) = 6,1 + log 20 = **7,4**.

**Hypoventilering:** CO₂ hoper seg opp, og $[\ce{H2CO3}]$/[CO₂] øker til 3,0 mM (HCO₃⁻ fortsatt 24 mM):
pH = 6,1 + log(24/3,0) = 6,1 + log 8 = 6,1 + 0,90 = **7,0** (respiratorisk acidose). Se [blodets pH-regulering og hyperventilering](/medod1/cellebiologi/sammensatte-tema/blodets-ph-regulering-og-hyperventilering).
:::

## Vanlige feil

:::feil
- **Snu brøken.** Det er **base over syre**. Sjekk alltid at mer base gir høyere pH.
- **Bruke pKb for en base-buffer.** HH bruker pKa for den sure formen ($\ce{NH4+}$: 9,26).
- **Bruke HH på en ren svak syre** (A⁻ = 0 gir log 0). Bruk da [pH i svak syre](/medod1/generell-kjemi/regnetyper/ph-svak-syre).
- **Tro at fortynning endrer bufferens pH.** Forholdet er uendret (bufferkapasiteten synker likevel).
- **Feil pKa for flerprotiske syrer.** Mellom 1. og 2. ekvivalenspunkt gjelder pKa₂.
:::

:::eksamen
«Henderson–Hasselbalch-likningen kan brukes til å beregne … **blodets pH**» (H2025, V2025, V2024, H2022). Distraktorer: løselighet, E° og ΔG. H2024 spurte hva pKa betyr i HH for blodet. Det holdbare alternativet var at pKa henger sammen med konsentrasjonene av bikarbonat og CO₂ (pH = pKa når de er like), ikke «−log [H⁺]».

Langsvar V2024 (5 p, sensorveiledning):
1. En buffer er en svak syre + dens korresponderende base.
2. Den motstår pH-endring ved tilsetning av syre eller base.
3. Bufferområdet er pKa ± 1.
4. pKa = −log Ka, og pH = pKa midt i bufferområdet.
5. pH beregnes med HH.

Også gitt: hypoventilering (H2024 → 7,0), maursyrebuffer (V2023 → 3,64) og NH₃/NH₄⁺ (H2022 → 9,11).
:::

## Test deg selv

:::sjekk[En buffer har pH = pKa − 1. Hva er forholdet [A⁻]/[HA]?]
log([A⁻]/[HA]) = −1 ⇒ [A⁻]/[HA] = 0,1. Det er ti ganger mer syre enn base.
:::

:::sjekk[Hvorfor er bufferen mest effektiv når [A⁻] ≈ [HA]?]
Da kan den nøytralisere både tilsatt syre (med A⁻) og tilsatt base (med HA) like godt, og log-leddet endrer seg minst for en gitt tilsetning. Vi er midt i bufferområdet, der pH = pKa.
:::

:::sjekk[Hva er forholdet [HCO₃⁻]/[CO₂(aq)] ved pH 7,4 når pKa = 6,1?]
log(forhold) = 1,3 ⇒ forhold = 10^1,3 ≈ 20.
:::

:::sjekk[Du vil lage en buffer med pH 7,0. Hvilket par passer best: eddiksyre/acetat (pKa 4,74), H₂PO₄⁻/HPO₄²⁻ (pKa 6,84) eller NH₄⁺/NH₃ (pKa 9,26)?]
Fosfatparet. Bare der ligger pH 7,0 innenfor pKa ± 1.
:::
