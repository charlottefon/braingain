---
title: Reduksjon av aldehyder og ketoner
summary: Et hydrid (H⁻) adderes til karbonylkarbonet og O⁻ protoneres – aldehyd gir primær alkohol, keton gir sekundær alkohol. Reduksjonsmidler – NaBH₄ (mild), LiAlH₄ (sterk, reduserer også estere og syrer), H₂/Ni-Pd-Pt, og biologisk NADH/NADPH (pyruvat → laktat).
category: redoks
tags: [reduksjon, hydrid, NaBH4, LiAlH4, NADH, laktatdehydrogenase, alkohol]
related:
  - organisk-kjemi/reaksjoner/oksidasjon-av-alkoholer
  - organisk-kjemi/reaksjoner/nukleofil-addisjon-til-karbonyl
  - organisk-kjemi/reaksjoner/hydrogenering
  - organisk-kjemi/reaksjoner/oksidasjon-av-aldehyder
  - organisk-kjemi/funksjonelle-grupper/ketoner
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-4a-3--8190320.pdf
    pages: "16, 19-21"
  - file: medod1/exercises/oppgaver-aldehyder-og-ketoner--8156662.pdf
fields:
  Type: Reduksjon (nukleofil addisjon av hydrid)
  Aldehyd: primær alkohol
  Keton: sekundær alkohol
  Reagens: NaBH₄, LiAlH₄, H₂/kat., NADH, NADPH
---

## Oversikt

$$\ce{R-CHO ->[1. H^-][2. H3O^+] R-CH2OH}\quad\text{(primær alkohol)}$$
$$\ce{R-CO-R' ->[1. H^-][2. H3O^+] R-CH(OH)-R'}\quad\text{(sekundær alkohol)}$$

Eksempler: butanal → butan-1-ol; propanon → **propan-2-ol** (sekundær alkohol).

## Mekanisme

To trinn – en [nukleofil addisjon](/medod1/organisk-kjemi/reaksjoner/nukleofil-addisjon-til-karbonyl) der nukleofilen er et hydridion:

1. **Hydridangrep:** reduksjonsmidlet leverer H⁻ (et elektronpar + H) til det δ⁺-karbonylkarbonet. π-elektronene i C=O skyves opp på oksygenet → **alkoksid** (R–CH₂–O⁻). Karbonet går fra sp² (plant) til sp³.
2. **Protonering:** O⁻ tar H⁺ fra H₃O⁺ (eller vann) → alkohol.

Det nye H-et på karbonet kommer fra hydridet; H-et på oksygenet kommer fra syren.

```smiles-row
CC(=O)C | propanon
CC([O-])C | alkoksid
CC(O)C | propan-2-ol
```

## Betingelser og faktorer

| Reduksjonsmiddel | Egenskap |
|---|---|
| NaBH₄ (natriumborhydrid) | mildt; reduserer aldehyder og ketoner |
| LiAlH₄ (litiumaluminiumhydrid) | sterkt; reduserer også estere og karboksylsyrer |
| H₂ / Ni, Pd eller Pt | katalytisk hydrogenering av C=O |
| NADH | biologisk reduksjonsmiddel i enzymreaksjoner |
| NADPH | biologisk, særlig i anabole (oppbyggende) prosesser |

## Produkt og stereokjemi

- Hydridet kan angripe det plane karbonylkarbonet fra begge sider. Fra et usymmetrisk keton (f.eks. butan-2-on) blir det et nytt stereosenter → racemat i laboratoriet; enzymer gir ett enantiomer (L-laktat).

## Biologiske eksempler

**Pyruvat → laktat** (laktatdehydrogenase, LDH) under anaerobe forhold – ketogruppen reduseres til sekundær alkohol, NADH oksideres til NAD⁺ (regenererer NAD⁺ til glykolysen):

$$\ce{CH3COCOO^- + NADH + H^+ <=> CH3CH(OH)COO^- + NAD^+}$$

**Alkoholgjæring** (gjær): pyruvat → (pyruvatdekarboksylase, **dekarboksylering**, CO₂ avspaltes) → acetaldehyd → (ADH, NADH) → etanol.

```smiles-row
CC(=O)C(=O)[O-] | pyruvat
C[C@H](O)C(=O)[O-] | L-laktat
CC=O | acetaldehyd
```

## Sammenlign med

- [Oksidasjon av alkoholer](/medod1/organisk-kjemi/reaksjoner/oksidasjon-av-alkoholer): motsatt retning; ADH og LDH katalyserer begge retninger avhengig av NAD⁺/NADH-forholdet.
- [Hemiacetal](/medod1/organisk-kjemi/reaksjoner/hemiacetal-og-hemiketal): også nukleofil addisjon til C=O, men nukleofilen er en alkohol, og karbonet beholder oksidasjonstrinnet.

## Test deg selv

:::sjekk[Hva blir produktet når propanon reduseres med NaBH₄?]
Propan-2-ol, en sekundær alkohol (CH₃CH(OH)CH₃).
:::

:::sjekk[Hvor kommer de to nye H-atomene fra i reduksjonen av et aldehyd med NaBH₄?]
H på karbonet kommer fra hydridet (H⁻); H på oksygenet kommer fra syre/vann ved protoneringen av alkoksidet.
:::

:::sjekk[Hvorfor brukes LiAlH₄ og ikke NaBH₄ for å redusere en ester?]
NaBH₄ er for mildt – det reduserer bare aldehyder og ketoner. LiAlH₄ er et sterkere hydriddonor og reduserer også estere og karboksylsyrer.
:::

:::sjekk[Hvorfor er pyruvat → laktat viktig for glykolysen under anaerobe forhold?]
Reduksjonen oksiderer NADH tilbake til NAD⁺, som glykolysen trenger (GAP-dehydrogenasetrinnet) for å fortsette å produsere ATP uten oksygen.
:::
