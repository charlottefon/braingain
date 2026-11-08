---
title: Isoelektrisk punkt (pI)
summary: pI er pH der molekylet har netto ladning 0. For en toprotisk aminosyre er pI = (pKa₁ + pKa₂)/2. Med flere pKa-verdier skriver du opp alle protolyttformene med ladning, finner den nøytrale formen og tar gjennomsnittet av de to pKa-verdiene som omgir den. Over pI er molekylet negativt, under pI positivt.
category: buffer
order: 5
tags: [isoelektrisk punkt, pI, aminosyre, histidin, zwitterion, amfolytt, proteinladning, flerprotisk]
related:
  - generell-kjemi/teori/flerprotiske-syrer-og-aminosyrer
  - generell-kjemi/regnetyper/titrering-aminosyre
  - generell-kjemi/regnetyper/protolyttfordeling
  - lab/ovelser/titrering-aminosyrer
  - proteiner/teori/aminosyrer
  - proteiner/aminosyrer/histidin
  - proteiner/teori/proteinmetoder
  - cellebiologi/sammensatte-tema/multippel-sklerose-og-myelin
sources:
  - file: medod1/material/generell-kjemi/forelesning-4-2026--8041090.pdf
    pages: "9, 20-28"
  - file: medod1/material/generell-kjemi/titrering-revidert-petri2020-1-1--7794025.pdf
    pages: "1-4"
  - file: medod1/material/generell-kjemi/aminosyrenes-struktur-v25--8211293.pdf
  - file: medod1/material/generell-kjemi/sporretime1-2026-v2--8130558.pdf
    pages: "5"
  - file: medod1/exercises/oppgavesett2-2026--8047637.pdf
  - file: medod1/exercises/oppgavesett2-2026-fasit--8047656.pdf
    pages: "8, 11"
  - file: medod1/exercises/kollokvium1-losningsforslag-2026--8121960.pdf
    pages: "1-2"
  - file: medod1/exams/2022-medod1-h2022-med-svar--4750110.pdf
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2024-medod1-h2024-med-svar--7298977.pdf
fields:
  Toprotisk: "pI = (pKa₁ + pKa₂)/2"
  Med ioniserbar sidekjede: "pI = snittet av de to pKa-ene på hver side av den nøytrale formen"
  Ladning: "pH < pI → positiv; pH > pI → negativ"
---

## Når brukes den

- Beregne pI for en aminosyre ut fra pKa-verdier, med eller uten ioniserbar sidekjede.
- Forutsi **ladningen** til en aminosyre eller et protein ved en gitt pH ut fra pI (f.eks. binding til negativt ladde membraner, elektroforese).
- Merke av pI i en skisse av protolyttfordeling eller titreringskurve (kollokvium, lab).

## Formler

Definisjon (spørretime 1): pI er den pH der molekylet **totalt sett** har elektrisk ladning 0. Zwitterionet kan fortsatt ha ladde grupper (+ og −), men de opphever hverandre.

Toprotisk aminosyre (amfolyttlikningen, forelesning 4):
$$\text{pI} = \frac{\text{p}K_{a1} + \text{p}K_{a2}}{2}$$

Ved pI er [H₂A⁺] = [A⁻] (begge små), og den nøytrale formen HA er på topp.

Generelt (flere pKa):
$$\text{pI} = \frac{\text{p}K_{\text{under nøytral form}} + \text{p}K_{\text{over nøytral form}}}{2}$$

Typiske pKa i frie aminosyrer: α-COOH ≈ 2, α-NH₃⁺ ≈ 9–10. Sidekjeder: His ≈ 6, Asp/Glu ≈ 4, Lys ≈ 10,5, Arg ≈ 12,5.

## Fremgangsmåte

1. Sorter pKa-verdiene stigende. Den laveste deprotoneres først.
2. Skriv opp alle formene fra fullt protonert til fullt deprotonert med ladningen deres. Hvert trinn senker ladningen med 1.
3. Finn formen med netto ladning **0**.
4. pI = snittet av pKa-verdien som **danner** denne formen og pKa-verdien som **fjerner** den.
5. Rimelighetssjekk: sure sidekjeder gir lav pI, basiske sidekjeder høy pI.

## Regneeksempel

:::eksempel[Regneeksempel: alanin (labhefte titrering)]
pKa₁ = 2,34 (α-COOH), pKa₂ = 9,69 (α-NH₃⁺; labheftet; fra Ka₂ = 2,0·10⁻¹⁰ blir det 9,70). Former: H₂A⁺ (+1) → HA (0) → A⁻ (−1).
pI = (2,34 + 9,69)/2 = **6,02**, som også er pH ved 1. ekvivalenspunkt i titreringen.
:::

:::eksempel[Regneeksempel: histidin, pKa 1,82 / 6,00 / 9,17 (eksamen H2022, H2021)]
Se også [histidin](/medod1/proteiner/aminosyrer/histidin) og [lab: titrering av aminosyrer](/medod1/lab/ovelser/titrering-aminosyrer).

1. Fullt protonert ved lav pH: COOH (0), imidazolium (+1), NH₃⁺ (+1), totalt **+2**.
2. pKa 1,82 (COOH): +2 → **+1**.
3. pKa 6,00 (sidekjede): +1 → **0** ← nøytral form.
4. pKa 9,17 (NH₃⁺): 0 → −1.
5. pI = (6,00 + 9,17)/2 = **7,59**.

Alternativene var 5,66 / 3,91 / 7,59 / 6,00. 3,91 = (1,82 + 6,00)/2 er fellen der man tar de to laveste.
:::

:::eksempel[Regneeksempel: treprotisk syre H3A2+ (oppgavesett 2, oppg. 22)]
Fullt protonert form H₃A²⁺, fullt deprotonert A⁻. pKa = 3,2; 6,5; 9,9.
Former: H₃A²⁺ (+2) →[3,2] H₂A⁺ (+1) →[6,5] **HA (0)** →[9,9] A⁻ (−1).
Den nøytrale formen HA ligger mellom pKa 6,5 og 9,9 ⇒ pI = (6,5 + 9,9)/2 = **8,2**.
:::

:::eksempel[Regneeksempel: ladning til proteiner ut fra pI (oppgavesett 2, oppg. 17; eksamen)]
Protein A har pI 4,09, og protein B har pI 10,9. Ved pH 7:
- A: pH > pI ⇒ **negativt** ladet.
- B: pH < pI ⇒ **positivt** ladet ⇒ B binder mest sannsynlig til negativt ladde lipidmembraner.

Eksamen: kalmodulin (pI ≈ 4,1) er negativ ved pH 7. Myelin basisk protein (MBP, pI ≈ 11–12) er positivt ved nøytral pH, se [multippel sklerose og myelin](/medod1/cellebiologi/sammensatte-tema/multippel-sklerose-og-myelin). Proteiner kan også skilles etter pI med isoelektrisk fokusering ([proteinmetoder](/medod1/proteiner/teori/proteinmetoder)).
:::

## Vanlige feil

:::feil
- **Ta gjennomsnittet av alle pKa-verdiene**, eller av de to laveste. For basiske aminosyrer (His, Lys, Arg) er det de to **høyeste**, og for sure (Asp, Glu) de to **laveste**.
- **Forveksle pI med pKa.** Ved pKa er det like mye av to former, mens ved pI er netto ladning 0.
- **Snu ladningsregelen.** Lav pH betyr mange protoner og dermed positiv ladning (pH < pI ⇒ +).
- Tro at zwitterionet har ladde grupper og derfor er «ladet». Netto ladning er 0.
- Peptider og proteiner: de frie α-gruppene finnes bare i endene. Ladningen bestemmes av **sidekjedene**, og pKa kan endres av miljøet (forelesning 4).
:::

:::eksamen
Definisjonen: «Ved det isoelektriske punktet er **elektrisk nettoladning = 0**» (V2023; distraktorer pH = pKa, Kc = 0, pH = 7). His-pI (7,59) kom på H2022 og H2021. Ladning ut fra pI kommer på nesten hver eksamen: CaM negativ ved pH 7 (V2025, H2024, V2024, H2023, V2023), MBP/myelin P2 positive (H2025, H2024), protein med pI 8,5 er positivt ved pH 7 (H2021), og His (pKa 6) er positiv ved pH 5 (H2025). Glysin ved pH 7 er et zwitterion (V2025, V2024, H2022).
:::

## Test deg selv

:::sjekk[Glysin har pKa 2,34 og 9,60. Hva er pI?]
(2,34 + 9,60)/2 = 5,97.
:::

:::sjekk[En aminosyre med sur sidekjede har pKa 2,1 (α-COOH), 3,9 (sidekjede) og 9,8 (α-NH₃⁺). Hva er pI?]
Former: +1 → 0 (etter 2,1) → −1 (etter 3,9) → −2. Nøytral form mellom 2,1 og 3,9 ⇒ pI = 3,0.
:::

:::sjekk[Hvilken netto ladning har et protein med pI 8,5 ved pH 7,4?]
Positiv, fordi pH < pI.
:::

:::sjekk[Hvorfor er pI for en toprotisk aminosyre lik pH ved 1. ekvivalenspunkt i titreringen?]
Ved 1. ekvivalenspunkt er all H₂A⁺ omdannet til HA, og de små mengdene H₂A⁺ og A⁻ er like store. Netto ladning er 0, og pH = (pKa₁ + pKa₂)/2.
:::
