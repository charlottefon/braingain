---
title: Titrering av toprotisk aminosyre (pH ved vilkårlig volum NaOH)
summary: Fullt protonert aminosyre (H₂A⁺) titreres med NaOH i to trinn, H₂A⁺ → HA → A⁻. Tell mmol OH⁻ mot mmol aminosyre for å finne riktig område. Bufferområde 1 bruker pKa₁, 1. ekvivalenspunkt gir pH = (pKa₁ + pKa₂)/2 = pI, bufferområde 2 bruker pKa₂, og 2. ekvivalenspunkt er en svak base. Alaninoppgaven (50 mL + 70 mL → 9,52) går igjen på eksamen.
category: buffer
order: 4
tags: [titrering, aminosyre, toprotisk, flerprotisk, alanin, valin, metionin, ekvivalenspunkt, amfolyttlikningen, Henderson-Hasselbalch]
related:
  - generell-kjemi/teori/flerprotiske-syrer-og-aminosyrer
  - generell-kjemi/regnetyper/titrering-svak-syre
  - generell-kjemi/regnetyper/isoelektrisk-punkt
  - generell-kjemi/regnetyper/henderson-hasselbalch
  - generell-kjemi/regnetyper/ph-svak-base-og-salt
  - lab/ovelser/titrering-aminosyrer
  - proteiner/teori/aminosyrer
  - proteiner/aminosyrer/alanin
sources:
  - file: medod1/material/generell-kjemi/titrering-revidert-petri2020-1-1--7794025.pdf
    pages: "1-4"
  - file: medod1/material/generell-kjemi/forelesning-4-2026--8041090.pdf
    pages: "8-9, 17-22"
  - file: medod1/exercises/oppgavesett2-2026--8047637.pdf
  - file: medod1/exercises/oppgavesett2-2026-fasit--8047656.pdf
    pages: "2"
  - file: medod1/exercises/kollokvium1-2026--8066247.pdf
  - file: medod1/exercises/kollokvium1-losningsforslag-2026--8121960.pdf
    pages: "2, 5-6"
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2024-medod1-ny-v2024-med-svar--5897534.pdf
  - file: medod1/exams/2023-medod1-h2023-med-svar--5670979.pdf
fields:
  Alanin (labhefte): "Ka₁ = 4,6·10⁻³ (pKa₁ 2,34); Ka₂ = 2,0·10⁻¹⁰ (pKa₂ 9,70)"
  1. ekvivalenspunkt: "pH = (pKa₁ + pKa₂)/2 = pI (amfolyttlikningen)"
  Klassiker: "50 mL 0,1 M H₂A⁺ + 70 mL 0,1 M NaOH → pH 9,52"
---

## Når brukes den

- En aminosyre uten syre/base-aktiv sidekjede ([alanin](/medod1/proteiner/aminosyrer/alanin), [glysin](/medod1/proteiner/aminosyrer/glysin), [valin](/medod1/proteiner/aminosyrer/valin), [metionin](/medod1/proteiner/aminosyrer/metionin), [fenylalanin](/medod1/proteiner/aminosyrer/fenylalanin)) starter i **fullt protonert form H₂A⁺** og titreres med NaOH.
- Spørsmål av typen «beregn pH etter tilsetning av x mL NaOH».
- Labøvelsen [Titreranalyse av aminosyrer](/medod1/lab/ovelser/titrering-aminosyrer).

## Formler

$$\ce{H2A+ <=>[K_{a1}] HA <=>[K_{a2}] A-}$$

(H₂A⁺: ⁺H₃N–CHR–COOH; HA: zwitterionet ⁺H₃N–CHR–COO⁻; A⁻: H₂N–CHR–COO⁻)

Med $n_0$ = mmol aminosyre og $n$ = mmol OH⁻ tilsatt:

| Område | Betingelse | Formler |
|---|---|---|
| Start | $n = 0$ | svak syre: $[\ce{H3O+}] = \sqrt{K_{a1}c}$ (eller andregradslikningen) |
| Bufferområde 1 | $0 < n < n_0$ | $\text{pH} = \text{p}K_{a1} + \log\dfrac{n}{n_0 - n}$ |
| 1. ekv.punkt (pI) | $n = n_0$ | $\text{pH} = \dfrac{\text{p}K_{a1} + \text{p}K_{a2}}{2}$ (amfolyttlikningen) |
| Bufferområde 2 | $n_0 < n < 2n_0$ | $\text{pH} = \text{p}K_{a2} + \log\dfrac{n - n_0}{2n_0 - n}$ |
| 2. ekv.punkt | $n = 2n_0$ | svak base A⁻: $K_b = K_w/K_{a2}$, $[\ce{OH-}] = \sqrt{K_b c_{\ce{A-}}}$ |
| Etter | $n > 2n_0$ | overskudd OH⁻: $[\ce{OH-}] = (n - 2n_0)/V_{\text{tot}}$ |

Halvveis i hvert bufferområde ($n = n_0/2$ og $n = 1{,}5\,n_0$) er pH = pKa₁ og pKa₂.

## Fremgangsmåte

1. Regn om Ka til pKa ($\text{p}K_a = -\log K_a$).
2. Regn $n_0$ (mmol aminosyre) og $n$ (mmol NaOH). Tegn gjerne en skisse av kurven med 0, $n_0$ og $2n_0$ på x-aksen.
3. Bestem området fra tabellen.
4. Den første $n_0$ mmol OH⁻ går med til H₂A⁺ → HA. Bare det som er igjen, går til HA → A⁻.
5. Sett inn i riktig formel. I bufferområdene forkortes volumet. Ved 2. ekvivalenspunkt og etterpå trengs totalvolumet.

## Regneeksempel

:::eksempel[Regneeksempel: alanin, 50,0 mL 0,1 M H2A+ + 70 mL 0,1 M NaOH (oppgavesett 2 oppg. 3; eksamen H2025, V2025, H2024, H2023, H2022)]
Ka₁ = 4,6·10⁻³ ⇒ pKa₁ = 2,34. Ka₂ = 2,0·10⁻¹⁰ ⇒ pKa₂ = 9,70.

1. $n_0 = 0{,}1 \cdot 50{,}0 = 5{,}0$ mmol H₂A⁺. $n = 0{,}1\cdot70 = 7{,}0$ mmol OH⁻.
2. De første 5,0 mmol OH⁻ gjør all H₂A⁺ til HA (vi passerer 1. ekvivalenspunkt).
3. De resterende 2,0 mmol OH⁻ gjør 2,0 mmol HA om til A⁻ ⇒ HA = 3,0 mmol, A⁻ = 2,0 mmol (bufferområde 2).
4. pH = pKa₂ + log(2,0/3,0) = 9,70 − 0,18 = **9,52**.

Alternativene var 9,88 / 2,71 / 2,16 / 9,52. 9,88 får du hvis brøken snus, og 2,16/2,71 hvis du bruker pKa₁.
:::

:::eksempel[Regneeksempel: samme alanin, bare 30 mL NaOH (eksamen V2024)]
$n = 3{,}0$ mmol < $n_0 = 5{,}0$ ⇒ bufferområde 1: HA = 3,0 mmol, H₂A⁺ = 2,0 mmol.
pH = 2,34 + log(3,0/2,0) = 2,34 + 0,18 = **2,52**. (Samme forbehold som for valin under: i bufferområde 1 er protolysen av H₂A⁺ ikke neglisjerbar, og en eksakt beregning gir ca. 2,6 – men eksamen forventer HH-svaret 2,52.)
:::

:::eksempel[Regneeksempel: valin, hele kurven (kollokvium 1, oppg. 6)]
40,0 mL 0,0250 M valin (H₂A⁺) ⇒ $n_0 = 1{,}00$ mmol. Titrant 0,100 M NaOH. Ka₁ = 4,8·10⁻³ (pKa₁ 2,32), Ka₂ = 2,4·10⁻¹⁰ (pKa₂ 9,62).

**a) 3,0 mL** = 0,30 mmol OH⁻ ⇒ HA 0,30, H₂A⁺ 0,70 mmol
pH = 2,32 + log(0,30/0,70) = 2,32 − 0,37 = **1,95** (løsningsforslagets svar).

Forbehold: valinløsningen alene har pH ≈ 2,05, og tilsatt base kan ikke senke pH. Så nær pKa₁ og ved så lav konsentrasjon er [H₃O⁺] (~5·10⁻³ M) på størrelse med [HA] (7·10⁻³ M) og [H₂A⁺] (1,6·10⁻² M), og Henderson–Hasselbalch blir upålitelig. En full beregning gir pH ≈ 2,3. På eksamen er HH-svaret det som forventes.

**b) 10,0 mL** = 1,00 mmol = $n_0$ ⇒ 1. ekvivalenspunkt, bare HA (amfolytt)
pH = (2,32 + 9,62)/2 = **5,97** (= pI).

**c) 15,0 mL** = 1,50 mmol ⇒ 0,50 mmol går videre: HA 0,50, A⁻ 0,50 mmol
pH = pKa₂ = **9,62**.

**d) 20,0 mL** = 2,00 mmol = $2n_0$ ⇒ 2. ekvivalenspunkt, bare A⁻ (svak base)
- $c(\ce{A-}) = 1{,}00\ \text{mmol}/(40{,}0 + 20{,}0)\ \text{mL} = 0{,}0167$ M
- $K_b = 10^{-14}/2{,}4\cdot10^{-10} = 4{,}2\cdot10^{-5}$
- $[\ce{OH-}] = \sqrt{4{,}2\cdot10^{-5}\cdot0{,}0167} = 8{,}3\cdot10^{-4}$ M ⇒ pOH 3,08 ⇒ pH = **10,92** (andregradslikningen gir 10,91)
:::

:::eksempel[Regneeksempel: metionin ved 1. ekvivalenspunkt (kollokvium 1, oppg. 2)]
30,0 mL 0,0600 M metionin (H₂A⁺) = 1,80 mmol. 20,0 mL 0,0900 M NaOH = 1,80 mmol.
Like mengder ⇒ all H₂A⁺ er blitt HA, og vi er ved 1. ekvivalenspunkt.
pKa₁ = −log(5,2·10⁻³) = 2,28. pKa₂ = −log(6,2·10⁻¹⁰) = 9,21.
pH = (2,28 + 9,21)/2 = **5,75**, som også er metionins pI. Ved pH 7,4 dominerer HA (zwitterionet).
:::

## Vanlige feil

:::feil
- **Bruke pKa₁ etter 1. ekvivalenspunkt.** Når $n > n_0$ gjelder pKa₂ (fellen 2,16/2,71).
- **Glemme at de første $n_0$ mmol OH⁻ er «brukt opp»** på første trinn. Det er bare resten som lager A⁻.
- **Snu brøken** (A⁻/HA = 2/3, ikke 3/2) eller bare svare pKa₂ (9,70).
- **Regne pKa feil:** −log(4,6·10⁻³) = 2,34 (ikke 3,34, som står i en håndskrevet fasit).
- Ved 2. ekvivalenspunkt: glemme å regne Kb og totalvolum.
:::

:::eksamen
Alanin/fenylalanin-oppgaven med 50,0 mL 0,1 M H₂A⁺, Ka₁ 4,6·10⁻³, Ka₂ 2,0·10⁻¹⁰ og 70 mL NaOH (→ **9,52**) har kommet på minst seks eksamener (H2025, V2025, H2024, H2023 [5 mL + 7 mL], H2022, H2021). V2024 hadde 30 mL-varianten (→ 2,52). Skisse av protolyttfordeling og titreringskurve med pI markert er typisk kollokvie- og langsvarstoff.
:::

## Test deg selv

:::sjekk[50,0 mL 0,1 M alanin (H₂A⁺) tilsettes 25 mL 0,1 M NaOH. pH?]
2,5 mmol OH⁻ = halvparten av 5,0 mmol ⇒ halvveis til 1. ekvivalenspunkt ⇒ pH = pKa₁ = 2,34.
:::

:::sjekk[Samme løsning, men 50 mL NaOH. pH og dominerende form?]
5,0 mmol = $n_0$ ⇒ 1. ekvivalenspunkt. pH = (2,34 + 9,70)/2 = 6,02. HA (zwitterion) dominerer, og løsningen er ved pI.
:::

:::sjekk[Hvorfor brukes amfolyttlikningen og ikke HH ved 1. ekvivalenspunkt?]
Der finnes nesten bare HA, og [H₂A⁺] = [A⁻] er begge små. Det er ikke noe bufferpar å sette inn i HH. HA er en amfolytt, og pH blir gjennomsnittet av de to pKa-verdiene.
:::

:::sjekk[Hvor mange mL 0,1 M NaOH trengs for å nå 2. ekvivalenspunkt for 50,0 mL 0,1 M H₂A⁺?]
2 × 5,0 mmol = 10,0 mmol ⇒ 100 mL.
:::
