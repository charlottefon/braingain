---
title: Osmolaritet, ekvivalenter og ionestyrke
summary: "Tre konsentrasjonsmål for løsninger med ioner. Osmolaritet = sum av alle oppløste partikler, ekvivalenter = mol ladning per ion, ionestyrke I = ½Σcᵢzᵢ². Eksempel: 0,2 M CaCl₂ gir 0,6 osmol/L, 0,4 Eq/L av hvert ion og I = 0,6 M."
category: grunnleggende
order: 3
tags: [osmolaritet, ekvivalenter, ionestyrke, elektrolytter, osmose, isotonisk]
related:
  - generell-kjemi/regnetyper/mol-og-konsentrasjon
  - generell-kjemi/regnetyper/fortynning-og-blanding
  - generell-kjemi/teori/losninger-og-konsentrasjon
  - cellebiologi/cellen/membraner-og-membrantransport
  - generell-kjemi/regnetyper/protolyttfordeling
sources:
  - file: medod1/material/generell-kjemi/forelesning2-2026--7998527.pdf
    pages: "30-38"
  - file: medod1/info/formelhefte--7793986.pdf
    pages: "5"
  - file: medod1/exercises/oppgavesett2-2026--8047637.pdf
  - file: medod1/exercises/oppgavesett2-2026-fasit--8047656.pdf
    pages: "4-5"
  - file: medod1/exercises/hjemmearbeid-fra-forelesning-2--page-374126.html
  - file: medod1/exercises/kollokvium1-losningsforslag-2026--8121960.pdf
fields:
  Ionestyrke: "I = ½ Σ cᵢ zᵢ²  (formelhefte)"
  Osmolaritet: "Σ c(alle partikler), osmol/L"
  Ekvivalenter: "Eq/L = c(ion) · |z|"
---

## Når brukes den

- **Osmolaritet:** når spørsmålet gjelder [osmose](/medod1/cellebiologi/cellen/membraner-og-membrantransport), osmotisk trykk, iso-/hypo-/hypertoniske løsninger og infusjonsvæsker. Alle oppløste partikler teller, også uladede som glukose.
- **Ekvivalenter (Eq, mEq):** elektrolyttkonsentrasjoner i klinisk kjemi (f.eks. Na⁺ i blod = 140 mEq/L).
- **Ionestyrke (I):** mål på den totale ione-«belastningen». Ladningen teller kvadrert, så toverdige ioner veier tungt. Ionestyrken påvirker syrekonstanter: biologiske pKa-verdier oppgis ved I ≈ 0,2 M, og fysiologisk ionestyrke er ca. 0,2 M.

## Formler

$$\text{Osmolaritet} = \sum_i c_i \quad(\text{alle oppløste partikler, osmol/L})$$

$$\text{Ekvivalentkonsentrasjon for ion } i = c_i \cdot |z_i| \quad(\text{Eq/L})$$

$$I = \frac{1}{2}\sum_{i=1}^{n} c_i z_i^2$$

| Symbol | Betydning | Enhet |
|---|---|---|
| $c_i$ | molar konsentrasjon av ion/partikkel $i$ (etter dissosiasjon) | mol/L |
| $z_i$ | ladningen til ionet (+1, −1, +2, …) | – |
| $I$ | ionestyrke | mol/L (M) |
| Eq | ekvivalent = 1 mol ladning; 1 Eq = 1000 mEq | – |

Ionestyrke står i formelheftet. Osmolaritet og ekvivalenter må du kunne fra definisjonen.

## Fremgangsmåte

1. **Dissosier saltene** fullstendig (sterke elektrolytter): $\ce{CaCl2 -> Ca^2+ + 2Cl-}$. Skriv opp konsentrasjonen av **hvert ion**.
2. Uladede stoffer (glukose, urea) gir partikler, men ingen ioner.
3. **Osmolaritet:** summer konsentrasjonene av alle partikler.
4. **Ekvivalenter:** for hvert ion, konsentrasjon × |ladning|. Summen av kation-ekvivalenter er lik summen av anion-ekvivalenter (elektronøytralitet).
5. **Ionestyrke:** for hvert ion, $c \cdot z^2$. Summer **alle** ioner (kationer og anioner) og del på 2.

## Regneeksempel

:::eksempel[0,2 M CaCl₂ med og uten glukose (oppgavesett 2, oppg. 9)]
$\ce{CaCl2 -> Ca^2+ + 2Cl-}$ ⇒ [Ca²⁺] = 0,2 M, [Cl⁻] = 0,4 M

- **Ionestyrke:** $I = \tfrac12\left(0{,}2\cdot 2^2 + 0{,}4\cdot 1^2\right) = \tfrac12(0{,}8 + 0{,}4) = 0{,}6$ M
- **Osmolaritet:** 0,2 + 0,4 = **0,6 osmol/L**
- **Ekvivalenter:** Ca²⁺: 0,2 · 2 = **0,4 Eq/L**; Cl⁻: 0,4 · 1 = **0,4 Eq/L**

**Tilsett 0,5 M glukose:** glukose danner ikke ioner, så ionestyrke og ekvivalenter er uendret. Osmolariteten blir 0,6 + 0,5 = **1,1 osmol/L**.
:::

:::eksempel[Ionestyrke i 0,1 M NaCl, MgCl₂ og MgSO₄ (forelesning 2)]
| Løsning | Ioner | $\tfrac12\sum c z^2$ | I |
|---|---|---|---|
| 0,1 M NaCl | 0,1 Na⁺, 0,1 Cl⁻ | ½(0,1·1 + 0,1·1) | **0,1 M** |
| 0,1 M MgCl₂ | 0,1 Mg²⁺, 0,2 Cl⁻ | ½(0,1·4 + 0,2·1) | **0,3 M** |
| 0,1 M MgSO₄ | 0,1 Mg²⁺, 0,1 SO₄²⁻ | ½(0,1·4 + 0,1·4) | **0,4 M** |

Alle tre har samme saltkonsentrasjon, men MgSO₄ har fire ganger så høy ionestyrke som NaCl, fordi begge ionene er toverdige.
:::

:::eksempel[Sjøvann og intracellulær væske (oppgavesett 2, oppg. 7d–e)]
**Sjøvann:** 0,54 M Cl⁻, 0,46 M Na⁺, 0,05 M Mg²⁺, 0,03 M SO₄²⁻, 0,01 M Ca²⁺, 0,01 M K⁺

$I = \tfrac12(0{,}54 + 0{,}46 + 0{,}05\cdot4 + 0{,}03\cdot4 + 0{,}01\cdot4 + 0{,}01) = \tfrac12(1{,}37) = 0{,}685$ M

**Intracellulær væske:** 12 mM Na⁺, 5 mM Cl⁻, 12 mM HCO₃⁻, 150 mM K⁺, 100 mM HPO₄²⁻, 8 mM Ca²⁺, 35 mM Mg²⁺

$I = \tfrac12(12 + 5 + 12 + 150 + 100\cdot4 + 8\cdot4 + 35\cdot4)\ \text{mM} = \tfrac12(751) = 375{,}5\ \text{mM} \approx 0{,}38$ M
:::

## Vanlige feil

:::feil
- **Glemmer å kvadrere ladningen** i ionestyrken (Mg²⁺ teller 4 ganger, ikke 2).
- **Glemmer ½** foran summen, eller glemmer anionene.
- **Bruker saltkonsentrasjonen i stedet for ionekonsentrasjonene.** Dissosier først.
- **Tar med glukose i ionestyrken.** Uladede molekyler teller i osmolariteten, men ikke i ionestyrke eller ekvivalenter.
- **Blander molaritet og osmolaritet.** 0,154 M NaCl er ≈ 0,31 osmol/L.
- Oppgavesett 2 oppg. 7c (0,1 M Al(OH)₃ → I = 0,6 M) er bare et regneeksempel. Petri påpeker selv at Al(OH)₃ er tungtløselig, så en slik løsning finnes ikke i praksis.
:::

:::eksamen
På flervalg spørres det om **definisjonen**: «osmolaritet = mol oppløste partikler per liter» (V2025, H2021) og «isotoniske løsninger har samme **osmolaritet**» (H2023, H2022). I «hvilket utsagn er *ikke* sant?»-oppgaven (V2024, V2023) er «osmotisk trykk påvirkes av både oppløste ioner og alle molekyler i løsningen» et **sant** utsagn. I kollokvium og oppgavesett må du kunne forklare forskjellen mellom molar konsentrasjon, osmolaritet, ekvivalenter og ionestyrke (hjemmearbeid forelesning 2).
:::

## Test deg selv

:::sjekk[Hva er ionestyrken i 0,2 M KCl og i 0,2 M CaCl₂?]
KCl: ½(0,2 + 0,2) = 0,2 M. CaCl₂: ½(0,2·4 + 0,4·1) = 0,6 M.
:::

:::sjekk[Hvorfor er 0,9 % NaCl (0,154 M) omtrent isotonisk med blod?]
NaCl gir 2 partikler: 2 · 0,154 ≈ 0,31 osmol/L, som tilsvarer plasmaets osmolaritet (ca. 0,3 osmol/L).
:::

:::sjekk[Normal [Na⁺] i blod er 140 mEq/L. Hva er det i mmol/L? Hva hadde 2,5 mmol/L Ca²⁺ tilsvart i mEq/L?]
Na⁺ er enverdig: 140 mmol/L. Ca²⁺ er toverdig: 2,5 · 2 = 5,0 mEq/L.
:::

:::sjekk[En løsning inneholder 0,1 M Na₂SO₄ og 0,3 M urea. Finn osmolaritet og ionestyrke.]
Osmolaritet: 0,2 (Na⁺) + 0,1 (SO₄²⁻) + 0,3 (urea) = 0,6 osmol/L. Ionestyrke: ½(0,2·1 + 0,1·4) = 0,3 M. Urea teller ikke, fordi det er uladet.
:::
