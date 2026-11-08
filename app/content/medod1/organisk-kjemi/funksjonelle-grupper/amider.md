---
title: Amider
summary: R–C(=O)–NR₂ – karboksylsyrederivat fra syre + amin. Resonans gir C–N delvis dobbeltbindingskarakter → plan amidgruppe, hindret rotasjon og nesten ingen basisitet. Primære amider har svært høye kokepunkt. Peptidbindingen er en amidbinding.
category: karbonyl
order: 5
tags: [amid, peptidbinding, resonans, kokepunkt, hydrogenbinding]
fields:
  Funksjonell gruppe: –C(=O)–N<
  Endelse: -amid (N-substituenter med N-)
  C–N-binding: delvis dobbeltbinding, plan
  Basisitet: svært svak (mye svakere enn aminer)
related:
  - organisk-kjemi/funksjonelle-grupper/aminer
  - organisk-kjemi/funksjonelle-grupper/karboksylsyrer
  - organisk-kjemi/funksjonelle-grupper/estere
  - organisk-kjemi/grunnlag/resonans-syrer-og-baser
  - organisk-kjemi/grunnlag/polaritet-og-fysiske-egenskaper
  - organisk-kjemi/navnsetting/karboksylsyrer-og-derivater
  - organisk-kjemi/reaksjoner/amiddannelse-og-hydrolyse
  - proteiner/teori/peptidbindingen
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-4b--8131296.pdf
    pages: "6, 8, 16"
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-3b--8116859.pdf
    pages: "10"
  - file: medod1/exercises/oppgaver-karboksylsyrer-estere-amider--8156716.pdf
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2023-medod1-h2023-med-svar--5670979.pdf
---

## Struktur og gjenkjenning

- **Karbonyl-C bundet til N**: R–C(=O)–NH₂ (primært/usubstituert), R–C(=O)–NHR′ (sekundært/monosubstituert), R–C(=O)–NR′₂ (tertiært/disubstituert).
- Skill fra amin: amin har N på et C **uten** C=O.
- **Resonans**: N-elektronparet delokaliseres mot C=O → C–N får **delvis dobbeltbindingskarakter** → amidgruppen er **plan** og rotasjonen om C–N er sterkt hindret.

```smiles-row
CC(N)=O | Etanamid (acetamid)
CCCC(N)=O | Butanamid
CCC(=O)N(C)C | N,N-dimetylpropanamid
CN(C)C(=O)c1ccccc1 | N,N-dimetylbenzamid
```

## Navnsetting

Syrenavn **-syre → -amid**: etanamid, butanamid. Substituenter på N får prefikset **N-**: CH₃CH₂C(=O)N(CH₃)₂ = **N,N-dimetylpropanamid**; CH₃C(=O)N(CH₃)(C₂H₅) = **N-etyl-N-metyletanamid**; CH₃C(=O)NHCH₃ = **N-metylacetamid** (*N*-metyletanamid). Som substituent: karbamoyl-.

## Egenskaper

- **Kokepunkt**: primære amider har **høyere** smelte- og kokepunkt enn syrene de stammer fra – to N–H-donorer + C=O-akseptor gir et nettverk av H-bindinger. Sekundære amider kan fortsatt H-binde (én N–H); **tertiære amider kan ikke** donere → lavere kokepunkt.
- **Svært svake baser** (praktisk talt nøytrale): N-elektronparet er opptatt i resonansen. Amider protoneres ikke ved fysiologisk pH.
- **Lite reaktive** – stabile bindinger (proteiner holder lenge).

:::eksamen
h2025: «Hvilket av eddiksyre, acetamid, *N,N*-dimetylacetamid og etanol har høyest kokepunkt?» → **acetamid**. h2023: «Amin har høyere kokepunkt enn amid» – feil. v2026: «Amider er sterkere baser enn aminer» – feil. v2026 + øvingsoppgaver: peptidbindingens begrensede rotasjon skyldes **delvis dobbeltbindingskarakter** (resonans). v2024: navnevalg som *N*-metylacetamid.
:::

## Typiske reaksjoner

- **Dannelse** ([Amiddannelse og hydrolyse](/medod1/organisk-kjemi/reaksjoner/amiddannelse-og-hydrolyse)): karboksylsyre (eller aktivert derivat) + amin → amid + H₂O (kondensasjon). I cellen skjer peptidbindingsdannelsen på ribosomet med aktiverte aminosyrer (aminoacyl-tRNA).
- **Hydrolyse**: amid + H₂O → karboksylsyre + amin; krever sterk syre/base og varme, eller enzymer (**proteaser/peptidaser**).

$$\ce{R-COOH + H2N-R' -> R-CO-NH-R' + H2O}$$

## I biologien

- **Peptidbindingen** er en amidbinding mellom α-karboksyl og α-amino i aminosyrer. Den er **plan** (vanligvis *trans*), og rotasjon skjer bare om bindingene på hver side (φ og ψ) – avgjørende for α-heliks og β-flak (se [Peptidbindingen](/medod1/proteiner/teori/peptidbindingen)).
- Legemidler: **paracetamol** (*N*-(4-hydroksyfenyl)acetamid), **lidokain** (amid-lokalbedøvelse, viktig i odontologi), penicilliner (β-laktam = syklisk amid).
- Urea (urinstoff) er et diamid av karbonsyre.

```smiles-row
CC(=O)Nc1ccc(O)cc1 | Paracetamol
CCN(CC)CC(=O)Nc1c(C)cccc1C | Lidokain
NC(N)=O | Urea
```

## Test deg selv

:::sjekk[Hvorfor er amider nesten ikke basiske, mens aminer er det?]
I amider er N-elektronparet delokalisert til karbonyl-O (resonans) og er lite tilgjengelig for å binde H⁺. I aminer er elektronparet lokalisert på N.
:::

:::sjekk[Hvorfor har acetamid høyere kokepunkt enn *N,N*-dimetylacetamid, selv om det siste er større?]
Acetamid har to N–H som kan donere hydrogenbindinger. *N,N*-dimetylacetamid har ingen N–H og kan bare akseptere – sterkt redusert intermolekylær tiltrekning.
:::

:::sjekk[Hva er IUPAC-navnet på CH₃–CH₂–C(=O)–N(CH₃)₂?]
*N,N*-dimetylpropanamid: syredelen har 3 C (propanamid), to metylgrupper på N.
:::

:::sjekk[Hvilken betydning har den plane peptidbindingen for proteinstrukturen?]
Seks atomer (Cα, C, O, N, H, Cα) ligger i et plan og kan ikke rotere om C–N. Det begrenser hvilke konformasjoner kjeden kan ha, slik at foldingen bestemmes av rotasjonen om Cα-bindingene (φ, ψ) – grunnlaget for sekundærstruktur.
:::
