---
title: Hydratisering av alkener
summary: Syrekatalysert addisjon av vann til en C=C-dobbeltbinding gir en alkohol. Følger Markovnikovs regel – OH havner på det mest substituerte karbonet (propen → propan-2-ol). Motsatt reaksjon av dehydrering.
category: addisjon
tags: [addisjon, hydratisering, alkohol, Markovnikov, syrekatalyse, fumarase]
related:
  - organisk-kjemi/reaksjoner/hydrohalogenering
  - organisk-kjemi/reaksjoner/dehydrering-av-alkoholer
  - organisk-kjemi/reaksjoner/hydrogenering
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-1--8106129.pdf
    pages: "55, 61"
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-3a--8116858.pdf
    pages: "14"
  - file: medod1/exercises/oppgaver-til-forlesning-oc1-organiske-reaksjoner--8112303.pdf
fields:
  Type: Elektrofil addisjon
  Reagens: H₂O + syre (H₂SO₄)
  Regioselektivitet: Markovnikov
  Produkt: Alkohol
---

## Oversikt

$$\text{alken} + \ce{H2O} \xrightarrow{\ce{H2SO4}} \text{alkohol (H og OH på hvert sitt tidligere C=C-karbon)}$$

$$\ce{CH2=CH2 + H2O ->[H2SO4] CH3CH2OH}\qquad\ce{CH3CH=CH2 + H2O ->[H^+] CH3CH(OH)CH3}$$

Eten → **etanol**; propen → **propan-2-ol** (Markovnikov – ikke propan-1-ol).

## Mekanisme

Lærebokmekanisme (omvendt av E1-dehydreringen):

1. π-elektronene angriper H⁺ (fra H₃O⁺) → det mest stabile **karbokationet** (Markovnikov).
2. H₂O angriper karbokationet med et ledig elektronpar → **protonert alkohol** (R–OH₂⁺).
3. Et vannmolekyl tar H⁺ → alkohol; H₃O⁺ gjenvinnes (katalysator).

```smiles-row
CC=C | propen
C[CH+]C | 2°-karbokation
CC(C)[OH2+] | protonert alkohol
CC(C)O | propan-2-ol
```

## Betingelser og faktorer

- Syrekatalysator (H₂SO₄); syren forbrukes ikke.
- Likevekt: mye vann og lavere temperatur → alkohol (hydratisering); varme og fjerning av vann → alken ([dehydrering](/medod1/organisk-kjemi/reaksjoner/dehydrering-av-alkoholer)).

## Produkt og stereokjemi

- OH på det mest substituerte karbonet (Markovnikov).
- Dannes et nytt stereosenter fra et plant karbokation (f.eks. but-1-en → butan-2-ol), blir produktet racemisk.

## Biologiske eksempler

Enzymatiske hydratiseringer adderer vann til C=C, f.eks. **fumarat + H₂O ⇌ L-malat** (fumarase) i sitronsyresyklusen. Enzymet gir ett enantiomer (L-malat), i motsetning til den racemiske laboratoriereaksjonen.

## Sammenlign med

- [Hydrohalogenering](/medod1/organisk-kjemi/reaksjoner/hydrohalogenering): samme mekanisme og Markovnikov, men X⁻ i stedet for H₂O.
- [Dehydrering](/medod1/organisk-kjemi/reaksjoner/dehydrering-av-alkoholer): reversen.
- [Hydrogenering](/medod1/organisk-kjemi/reaksjoner/hydrogenering): adderer H₂, gir alkan.

## Test deg selv

:::sjekk[Hva blir hovedproduktet ved syrekatalysert hydratisering av propen, og hvorfor?]
Propan-2-ol. H⁺ adderes til CH₂-enden slik at et sekundært karbokation dannes; vann binder seg til C2.
:::

:::sjekk[Hvorfor kalles H₂SO₄ en katalysator her?]
H⁺ brukes i trinn 1, men frigjøres igjen i siste trinn – syren forbrukes ikke netto.
:::

:::sjekk[Hvordan kan samme reaksjon (alken ⇌ alkohol) drives i hver retning?]
Overskudd av vann (og moderat temperatur) gir alkohol; høy temperatur og fjerning av vann gir alken (Le Châteliers prinsipp).
:::
