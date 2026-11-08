---
title: Løselighet med fellesion
summary: "Når en av saltets ioner allerede finnes i løsningen, forskyves løselighetslikevekten mot venstre og løseligheten synker. Regn med [fellesion] ≈ tilsatt konsentrasjon og løs Ksp for s. Sjekk etterpå at tilnærmingen x ≪ c holder."
category: likevekt
order: 5
tags: [fellesioneffekt, løselighet, Ksp, Le Chatelier, pH og løselighet]
related:
  - generell-kjemi/regnetyper/loselighetsprodukt
  - generell-kjemi/regnetyper/kompleksdannelse-og-loselighet
  - generell-kjemi/regnetyper/henderson-hasselbalch
  - generell-kjemi/teori/loselighet-og-komplekser
  - cellebiologi/sammensatte-tema/saliva-og-salivas-kjemi
sources:
  - file: medod1/material/generell-kjemi/forelesning-4-2026--8041090.pdf
    pages: "50-52"
  - file: medod1/exercises/oppgavesett2-2026-fasit--8047656.pdf
    pages: "1-2, 8"
  - file: medod1/exercises/oppgavesett3-2026-fasit--8081616.pdf
    pages: "6, 8"
  - file: medod1/exercises/oppgavesett-4-fasit-2026--8204433.pdf
    pages: "6-7"
  - file: medod1/exercises/kollokvium1-losningsforslag-2026--8121960.pdf
    pages: "4"
  - file: medod1/material/generell-kjemi/sporretime1-2026-v2--8130558.pdf
    pages: "32"
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2024-medod1-h2024-med-svar--7298977.pdf
fields:
  Formel: "AB: s = Ksp / [B⁻]₀;  AB₂ med fellesion B⁻: s = Ksp / [B⁻]₀²"
  Tilnærming: "[fellesion] = c₀ + (bidrag fra s) ≈ c₀ når s ≪ c₀"
---

## Når brukes den

- Løselighet av et tungtløselig salt i en løsning som **allerede inneholder** ett av ionene (AgCl i NaCl, BaSO₄ i BaCl₂, MgF₂ i KF).
- Løselighet når konsentrasjonen av ett ion **holdes fast** av noe annet, f.eks. [OH⁻] i en buffer.
- Kvalitativt: hvordan endres løseligheten når man tilsetter ulike stoffer (Le Châtelier)?

## Formler

Samme Ksp-uttrykk som i vann, men med fellesionets startkonsentrasjon $c_0$:

| Salt | Fellesion | Uttrykk | Med tilnærming ($s \ll c_0$) |
|---|---|---|---|
| AB | B⁻ (c₀) | $K_{sp} = s(c_0 + s)$ | $s = K_{sp}/c_0$ |
| AB₂ | A²⁺ (c₀) | $K_{sp} = (c_0 + s)(2s)^2$ | $s = \sqrt{K_{sp}/(4c_0)}$ |
| AB₂ | B⁻ (c₀) | $K_{sp} = s(c_0 + 2s)^2$ | $s = K_{sp}/c_0^2$ |

**Tilnærmingen må sjekkes.** Er $s$ (eller $2s$) mer enn ca. 5 % av $c_0$, må du løse likningen eksakt (andregradslikning). Petri påpeker at du ikke skal trenge å løse tredjegradslikninger på eksamen.

**pH-effekt (kvalitativ):** et salt med **basisk anion** (CO₃²⁻, PO₄³⁻, OH⁻, F⁻, S²⁻, oksalat) blir **mer** løselig ved lav pH, fordi H₃O⁺ fjerner anionet (Le Châtelier). Salter av sterke syrer (AgCl, AgBr) påvirkes ikke av pH.

## Fremgangsmåte

1. Skriv oppløsningslikningen og Ksp-uttrykket.
2. Finn fellesionets konsentrasjon fra det tilsatte stoffet (KF → F⁻, BaCl₂ → Ba²⁺, Na₂SO₄ → SO₄²⁻).
3. Sett opp likevekt: ukjent ion = $s$ (eller $2s$), fellesion = $c_0 + s$ (eller $c_0 + 2s$).
4. Tilnærm $c_0 + s \approx c_0$ og løs for $s$.
5. **Kontroller:** er $s \ll c_0$? Hvis ikke, løs eksakt.
6. Sammenlign gjerne med løseligheten i rent vann. Den skal være lavere.

## Regneeksempel

:::eksempel[AgCl i 0,1 M NaCl (forelesning 4)]
I vann: $s = 1{,}3\cdot10^{-5}$ M ($K_{sp} = 1{,}8\cdot10^{-10}$).
I 0,1 M NaCl: [Cl⁻] = 0,1 + s ≈ 0,1 (fordi 1,3·10⁻⁵ ≪ 0,1)
$K_{sp} = s\cdot0{,}1 = 1{,}8\cdot10^{-10}$ ⇒ $s = 1{,}8\cdot10^{-9}$ M

Løseligheten synker omtrent 7000 ganger.
:::

:::eksempel[MgF₂ + KF (eksamen V2023, H2025, H2021)]
I mettet MgF₂ ved 18 °C er [Mg²⁺] = 1,21·10⁻³ M. Så tilsettes 0,100 mol KF til 1,000 L. Finn ny [Mg²⁺].

1. Ksp fra vannløsningen: [F⁻] = 2 · 1,21·10⁻³ = 2,42·10⁻³ M
   $K_{sp} = (1{,}21\cdot10^{-3})(2{,}42\cdot10^{-3})^2 = 7{,}09\cdot10^{-9}$
2. Med fellesion: [F⁻] = 0,100 + 2s ≈ 0,100 M
   $s = \dfrac{K_{sp}}{[\ce{F-}]^2} = \dfrac{7{,}09\cdot10^{-9}}{(0{,}100)^2} = 7{,}09\cdot10^{-7}$ M
3. Kontroll: 2s = 1,4·10⁻⁶ ≪ 0,100 ✓

Svar: **7,09·10⁻⁷ M**. Distraktoren 7,09·10⁻⁹ er Ksp selv.

*Oppgavesett 3 oppg. 21 har bare 0,010 mol KF. Tilnærmingen gir 7,09·10⁻⁵ M, men da er 2s ≈ 1,4 % av 0,010, og fasiten viser at eksakt løsning gir 6,90·10⁻⁵ M. Konklusjon: jo lavere fellesionkonsentrasjon, desto mer forsiktig må du være med tilnærmingen.*
:::

:::eksempel[Når tilnærmingen ikke holder: CaSO₄ i 0,01 M Na₂SO₄ (oppgavesett 4, oppg. 11)]
$K_{sp} = 2{,}4\cdot10^{-5}$.
- **Med tilnærming:** $s = 2{,}4\cdot10^{-5}/0{,}01 = 2{,}4\cdot10^{-3}$ M. Det er 24 % av 0,01, så tilnærmingen er **ugyldig**.
- **Eksakt:** $s(0{,}01 + s) = 2{,}4\cdot10^{-5}$ ⇒ $s^2 + 0{,}01s - 2{,}4\cdot10^{-5} = 0$
  $s = \dfrac{-0{,}01 + \sqrt{(0{,}01)^2 + 4\cdot2{,}4\cdot10^{-5}}}{2} = \dfrac{-0{,}01 + 0{,}014}{2} = 2{,}0\cdot10^{-3}$ M

Tilnærmingen ga 20 % feil.
:::

:::eksempel[Ca(OH)₂ med fellesion på hver side (oppgavesett 2, oppg. 18)]
$K_{sp} = 6{,}5\cdot10^{-6}$.

**a) 0,10 M CaCl₂** (fellesion Ca²⁺): $(0{,}10)(2s)^2 = 0{,}4s^2 = 6{,}5\cdot10^{-6}$ ⇒ $s = 4{,}0\cdot10^{-3}$ M
**b) 0,10 M NaOH** (fellesion OH⁻): $s(0{,}10)^2 = 6{,}5\cdot10^{-6}$ ⇒ $s = 6{,}5\cdot10^{-4}$ M

OH⁻ står i andre potens, så fellesion OH⁻ senker løseligheten mest.
:::

:::eksempel[Buffer som holder [OH⁻] fast: Al(OH)₃ i acetatbuffer (oppgavesett 2, oppg. 1b)]
Bufferen er 0,100 M eddiksyre + 0,100 M acetat, så pH = pKa = 4,74 og pOH = 9,26.
$[\ce{OH-}] = 10^{-9{,}26} = 5{,}5\cdot10^{-10}$ M, og bufferen holder denne verdien konstant.
$K_{sp} = s[\ce{OH-}]^3$ ⇒ $s = \dfrac{2\cdot10^{-32}}{(5{,}5\cdot10^{-10})^3} = 1{,}2\cdot10^{-4}$ M

I rent vann er s ≈ 5·10⁻⁹ M (forenklet verdi), så løseligheten er mye **høyere** i den sure bufferen. [OH⁻] er lavere enn i rent vann, og likevekten trekkes mot høyre. I bufferen er [OH⁻] fastlagt av bufferen, så her spiller vannets egendissosiasjon ingen rolle. Den spiller derimot inn for verdien i rent vann: 3s ≈ 1,5·10⁻⁸ M OH⁻ er mindre enn de 10⁻⁷ M vannet selv gir, og med [OH⁻] ≈ 10⁻⁷ M blir s ≈ 2·10⁻¹¹ M. Det var dette Petri pekte på i spørretime 1.
:::

## Vanlige feil

:::feil
- **Glemmer å kvadrere fellesionet** når det har koeffisient 2 (F⁻ i MgF₂, OH⁻ i Ca(OH)₂).
- **Bruker Ksp som svar.** Svaret er løseligheten s, ikke Ksp.
- **Bruker tilnærmingen blindt.** Sjekk alltid om s ≪ c₀ (CaSO₄-eksempelet).
- **Fellesion-tankegang i sur løsning:** tilsatt syre er ikke et fellesion for salter av svake syrer. Den **øker** løseligheten.
- **Tror nøytrale salter uten felles ion påvirker likevekten.** KClO₄ eller NaNO₃ har ingen effekt (oppgavesett 2 oppg. 2c, oppg. 20c).
:::

:::eksamen
- **MgF₂ + 0,100 mol KF ⇒ 7,09·10⁻⁷ M** har kommet tre ganger (H2021, V2023, H2025).
- «Hvor er Ag₃PO₄ mest løselig?» → i **0,1 M HNO₃**. Syren protonerer PO₄³⁻, mens AgNO₃ og Na₃PO₄ gir fellesioneffekt (H2024).
- «Hydroksyapatitt løses mest ved …» → **lav pH** (V2026, H2025, H2024). Se [saliva og salivas kjemi](/medod1/cellebiologi/sammensatte-tema/saliva-og-salivas-kjemi).
- Kvalitative tabelloppgaver (oppgavesett 2 oppg. 2 og 20). Fasiten for mettet CaHPO₄, oppgitt som (fast CaHPO₄, [Ca²⁺], [HPO₄²⁻]):
  - + CaCl₂: øker, øker, avtar (fellesion)
  - + HCl: avtar, øker, avtar (HPO₄²⁻ protoneres)
  - + NaOH: avtar, øker, avtar (HPO₄²⁻ reagerer med OH⁻ til PO₄³⁻)
  - + KClO₄: ingen effekt
  - + mer fast CaHPO₄: mer fast stoff, uendrede konsentrasjoner (løsningen er allerede mettet)
:::

## Test deg selv

:::sjekk[BaSO₄ har Ksp = 1,1·10⁻¹⁰. Hva er løseligheten i 0,1 M BaCl₂, og hva heter effekten? (kollokvium 1, oppg. 5b)]
s = 1,1·10⁻¹⁰/0,1 = 1,1·10⁻⁹ M, omtrent 10 000 ganger lavere enn i vann (1,05·10⁻⁵ M). Dette er fellesioneffekten.
:::

:::sjekk[Hvor mange gram AgBr (Ksp = 5,2·10⁻¹³, M = 188 g/mol) løses maksimalt i 1,00 L 0,0010 M NaBr? (oppgavesett 4, oppg. 10)]
s = 5,2·10⁻¹³/0,0010 = 5,2·10⁻¹⁰ M ⇒ 5,2·10⁻¹⁰ · 188 ≈ 9,8·10⁻⁸ g.
:::

:::sjekk[Hvilke av AgBr, BaF₂, Ca₃(PO₄)₂, ZnS og PbI₂ blir mer løselige i 0,01 M HClO₄? (oppgavesett 3, oppg. 16)]
BaF₂, Ca₃(PO₄)₂ og ZnS, fordi anionene deres er baser (fra svake syrer) som protoneres av H₃O⁺. AgBr og PbI₂ har anioner fra sterke syrer og påvirkes ikke.
:::

:::sjekk[PbI₂ (Ksp = 1,0·10⁻⁸) i 0,10 M KI: hva blir s?]
s = Ksp/[I⁻]² = 1,0·10⁻⁸/0,010 = 1,0·10⁻⁶ M, mot 1,36·10⁻³ M i vann.
:::
