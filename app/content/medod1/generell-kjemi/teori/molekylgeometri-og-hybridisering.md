---
title: Molekylgeometri, hybridisering og σ/π-bindinger
summary: VSEPR – elektrongrupper rundt et atom søker lengst mulig fra hverandre (2 lineær, 3 trigonal plan, 4 tetraeder). Hybridisering sp/sp²/sp³ forklarer geometrien; σ-binding = motstående overlapp, π-binding = sidelengs overlapp av p-orbitaler. Enkel = σ, dobbel = σ + π, trippel = σ + 2π.
order: 3
tags: [VSEPR, molekylgeometri, hybridorbitaler, sp3, sp2, sp, sigma-binding, pi-binding, tetraeder, valensbindingsteori]
related:
  - generell-kjemi/teori/kjemiske-bindinger
  - generell-kjemi/teori/intermolekylaere-krefter
  - organisk-kjemi/grunnlag/karbon-og-hybridisering
  - proteiner/aminosyrer/metionin
sources:
  - file: medod1/material/generell-kjemi/forelesning1-2026--7993417.pdf
    pages: "52-70"
  - file: medod1/material/generell-kjemi/material-om-hybridorbitaler--page-374182.html
  - file: medod1/exercises/hjemmearbeid-fra-forelesning-1--page-374125.html
  - file: medod1/exercises/hybrid-ladning--8002180.pdf
  - file: medod1/exercises/oppgavesett-1-2026--8017863.pdf
  - file: medod1/exercises/fasit-oppgavesett1-2026ny-1--8047271.pdf
  - file: medod1/exercises/kollokvium1-losningsforslag-2026--8121960.pdf
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2024-medod1-h2024-med-svar--7298977.pdf
  - file: medod1/exams/2022-medod1-h2022-med-svar--4750110.pdf
---

## Hvorfor geometri?

Når vi vet antall **bindende og frie elektronpar** kan vi forutsi formen på små molekyler. Funksjonen til enzymer og legemidler bygger på molekylær størrelse og form. For makromolekyler (tusenvis av atomer) må formen bestemmes eksperimentelt.

## VSEPR-modellen

**V**alence **S**hell **E**lectron **P**air **R**epulsion: elektrongruppene i ytterste skall søker **lengst mulig vekk fra hverandre** på grunn av elektrostatisk frastøtning.

- **Elektrongruppe** = en binding (enkel, dobbel og trippel teller som **én** gruppe) **eller** et fritt elektronpar.
- **Plassbehov:** fritt elektronpar > trippelbinding > dobbelbinding > enkeltbinding.
- Se på **hvert sentralatom for seg**.

| Elektrongrupper | Elektrongeometri | Ideell vinkel | Ingen frie par | 1 fritt par | 2 frie par |
|---|---|---|---|---|---|
| 2 | lineær | 180° | CO₂, HC≡CH | – | – |
| 3 | trigonal plan | 120° | H₂C=O, BF₃ | – | – |
| 4 | tetraeder | 109,5° | CH₄ | NH₃: trigonal pyramide (~107°) | H₂O: **bøyd** (~104,5°) |

:::husk
**Vann er ikke lineært – rundt O er det en tetraeder** (2 bindinger + 2 frie par). Molekylformen (bare atomene) er **bøyd/vinklet**. De frie parene presser bindingene sammen (104,5° < 109,5°).
CO₂ har også to bindinger rundt sentralatomet, men **ingen frie par** → lineær.
:::

## Hybridorbitaler

s- og p-orbitaler på samme atom kan **blande seg** til like store hybridorbitaler med energi mellom s og p. Dette forklarer geometrien (VSEPR gjelder også for hybridorbitaler).

| Hybridisering | Blandes | Antall hybridorbitaler | Geometri | Uhybridiserte p | Bindingsmønster (C, N, O) |
|---|---|---|---|---|---|
| **sp³** | 1 s + 3 p | 4 | tetraeder, 109,5° | 0 | **bare enkeltbindinger** |
| **sp²** | 1 s + 2 p | 3 | trigonal plan, 120° | 1 (90° på planet) | **én dobbelbinding** |
| **sp** | 1 s + 1 p | 2 | lineær, 180° | 2 | **trippelbinding eller to dobbelbindinger** |

Frie elektronpar sitter også i hybridorbitaler (O i vann og N i ammoniakk regnes som sp³).

:::eksempel[Hjemmeoppgave: metanol, formaldehyd, karbonmonoksid]
| Molekyl | C danner | Hybridisering | Geometri rundt C |
|---|---|---|---|
| Metanol, CH₃OH | 4 enkeltbindinger | sp³ | tetraeder |
| Formaldehyd, H₂C=O | 1 dobbel + 2 enkle | sp² | trigonal plan |
| Karbonmonoksid, C≡O | trippelbinding (+ fritt par) | sp | lineær |
:::

```smiles-row
CO | Metanol (sp³-C)
C=O | Formaldehyd (sp²-C)
[C-]#[O+] | Karbonmonoksid (sp-C)
```

## σ- og π-bindinger (valensbindingsteori)

Kovalente bindinger dannes ved **overlapp av halvfulle atomorbitaler** i valensskallet; den nye molekylorbitalen deles av atomene. **Jo mer overlapp, jo sterkere binding.**

- **σ-binding (sigma):** overlapp mellom **motstående** orbitaler langs bindingsaksen – kan være s, p eller hybridorbitaler (H₂: 1s+1s; F₂: 2p+2p; HCl: 1s+3p; C–H: sp³+1s).
- **π-binding (pi):** **sidelengs** overlapp av to parallelle, **uhybridiserte p-orbitaler** på sp²- eller sp-hybridiserte atomer. Ligger over og under bindingsaksen.

| Binding | Består av | Eksempel |
|---|---|---|
| Enkeltbinding | 1 σ | etan, C–C |
| Dobbelbinding | 1 σ + 1 π | eten H₂C=CH₂ (sp²) |
| Trippelbinding | 1 σ + 2 π | etyn HC≡CH, N≡N (sp) |

:::eksempel[Hvorfor er ikke C≡C tre ganger så sterk som C–C?]
Bindingsenergi C–C ≈ 347 kJ/mol, C≡C ≈ 839 kJ/mol (bare ≈ 2,4 ganger). Trippelbindingen er **1 σ + 2 π**, og π-bindinger er **svakere** enn σ fordi sidelengs overlapp er mindre enn motstående overlapp.
:::

:::eksempel[Oppgavesett 1: «N₂ har tre π-bindinger»?]
Nei. N≡N er en trippelbinding: begge N er **sp-hybridisert**. **Én σ-binding** (sp + sp) og **to π-bindinger** fra de to uhybridiserte p-orbitalene på hvert atom. Hvert N har i tillegg ett fritt par i den andre sp-orbitalen.
:::

:::eksempel[Acetonitril, H₃C–C≡N]
- CH₃-karbonet: sp³ (σ-bindinger med sp³-orbitaler).
- Det sentrale C: sp (σ til CH₃ og til N med sp-orbitaler).
- N: sp (fritt par i sp-orbital).
- De **to π-bindingene** C≡N dannes av sidelengs overlapp mellom 2p på C og 2p på N.
:::

```smiles Acetonitril
CC#N
```

:::eksempel[Metionin, CH₃SCH₂CH₂CH(NH₂)COOH]
([Metionin](/medod1/proteiner/aminosyrer/metionin).) Alle C med bare enkeltbindinger (CH₃, de to CH₂ og α-C) er **sp³**. **S** (2 bindinger + 2 frie par) og **N** (3 bindinger + 1 fritt par) er sp³. **Karboksyl-C** er **sp²**, karbonyl-O (=O) er **sp²**, og OH-oksygenet er **sp³**.
:::

```smiles Metionin
CSCCC(N)C(=O)O
```

:::eksamen
Gjengangere (fra flere år):
- «En trippelbinding består av …» → **1 σ og 2 π** (H2021, V2023, H2023, V2025).
- «En π-binding er resultatet av …» → **sidelengs overlapp av to parallelle p-orbitaler** (V2026).
- «Et C-atom med fire enkeltbindinger er …» → **sp³** (H2023, H2024, H2025). C i et **alkyn** → sp og lineær.
- Hybridisering av C i maursyre HCOOH → **sp²** (H2022, V2024).
- «Hvilket molekyl er lineært?» → **CO₂** (V2023, H2025). «Hvilket er *ikke* tetraedrisk rundt sentralatomet?» → CO₂ (NH₃, H₃O⁺ og H₂O er tetraedriske).
- «Usant om vann»: **lineær geometri** og «danner normalt 2 H-bindinger» er feil. Vann er sp³, tetraedrisk (elektronpar), bøyd molekyl, amfolytt, 4 H-bindinger.
- «Tetraedrisk» betyr bindingsvinkler på **109,5°**.

Karbonets hybridisering i organiske molekyler (alkaner, alkener, alkyner, aromater) er utdypet i [karbon og hybridisering](/medod1/organisk-kjemi/grunnlag/karbon-og-hybridisering).
:::

:::feil
- Å telle dobbelbinding som to elektrongrupper i VSEPR. En multippelbinding er **én** gruppe.
- Å glemme frie elektronpar: H₂O og CO₂ har begge to bindinger på sentralatomet, men bare vann har frie par.
- π-bindinger dannes **ikke** av hybridorbitaler, men av de uhybridiserte p-orbitalene.
:::

## Test deg selv

:::sjekk[Bruk VSEPR til å forklare hvorfor CO₂ er lineær mens H₂O er bøyd.]
C i CO₂ har to elektrongrupper (to dobbelbindinger) og ingen frie par → 180°. O i H₂O har fire elektrongrupper (to bindinger + to frie par) → tetraedrisk elektrongeometri, men molekylet blir bøyd (~104,5°) fordi bare to av retningene har atomer.
:::

:::sjekk[Hvilken hybridisering har karbonet i formaldehyd, og hvordan er π-bindingen bygd opp?]
sp² (tre elektrongrupper, trigonal plan). Den uhybridiserte 2p-orbitalen på C overlapper sidelengs med en p-orbital på O → π-binding, i tillegg til σ-bindingen C–O.
:::

:::sjekk[Hvor mange σ- og π-bindinger har acetylen (HC≡CH)?]
3 σ (to C–H og én C–C) og 2 π (i trippelbindingen). Begge C er sp.
:::

:::sjekk[Hvorfor er en σ-binding sterkere enn en π-binding?]
σ dannes ved motstående (aksial) overlapp med større overlapp. π dannes ved sidelengs overlapp av p-orbitaler med mindre overlapp. Mer overlapp gir sterkere binding.
:::

:::sjekk[Hvordan kan du raskt avgjøre hybridiseringen til et C-, N- eller O-atom?]
Tell elektrongrupper (bindinger + frie par): 4 → sp³, 3 → sp², 2 → sp. Kortversjon: bare enkeltbindinger → sp³, én dobbelbinding → sp², trippel eller to dobbelbindinger → sp.
:::
