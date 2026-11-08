---
title: Dehydrering av alkoholer
summary: Syrekatalysert eliminasjon av vann fra en alkohol ved oppvarming – H og OH fjernes fra nabokarboner og det dannes et alken. 3° alkoholer går lettest (E1), 1° tregest (E2); rekkefølgen 3° > 2° > 1° følger karbokationstabiliteten.
category: eliminasjon
tags: [dehydrering, alkohol, alken, E1, syrekatalyse, fumarase]
related:
  - organisk-kjemi/reaksjoner/e1-reaksjon
  - organisk-kjemi/reaksjoner/e2-reaksjon
  - organisk-kjemi/reaksjoner/hydratisering
  - organisk-kjemi/reaksjoner/oksidasjon-av-alkoholer
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-3a--8116858.pdf
    pages: "11-14"
  - file: medod1/exercises/oppgaver-alkoholer-fenoler-etere--8156711.pdf
fields:
  Type: Eliminasjon (E1/E2)
  Reagens: sterk syre (H₂SO₄), varme
  Biprodukt: H₂O
  Reaktivitet: 3° > 2° > 1°
  Produkt: Alken
---

## Oversikt

Alkoholer mister vann (dehydrering, eng. *dehydration*) når de varmes med en sterk syrekatalysator. Ett H og én OH fjernes fra **nabokarboner** og danner en dobbeltbinding:

$$\ce{H-C-C-OH ->[H2SO4][\Delta] C=C + H2O}\quad\text{(H og OH fra nabokarboner)}$$

Eksempel: butan-2-ol → **but-2-en** (hovedprodukt, E/Z-blanding) + H₂O.

## Mekanisme

E1-mekanismen (3° og delvis 2° alkoholer):

1. **Protonering:** OH-gruppens oksygen bruker et ledig elektronpar til å binde H⁺ fra syren. –OH (dårlig utgående gruppe, OH⁻ er sterk base) blir –OH₂⁺ (god utgående gruppe, H₂O er svak base).
2. **Vann forlater:** C–O-bindingen brytes, elektronparet følger oksygenet → **karbokation** + H₂O (langsomt trinn).
3. **Tap av proton:** H₂O tar et H⁺ fra et β-karbon; elektronparet danner C=C → alken + H₃O⁺ (katalysatoren gjenvinnes).

```smiles-row
CC(C)(C)O | 2-metylpropan-2-ol
CC(C)(C)[OH2+] | protonert alkohol
C[C+](C)C | karbokation
C=C(C)C | 2-metylpropen
```

## Betingelser og faktorer

- Sterk syre (H₂SO₄) som **katalysator** + **varme**.
- **3° alkoholer** dehydreres raskest (E1), **2°** middels (både E1 og E2), **1°** langsomt (E2 – et primært karbokation er for ustabilt).
- Lett dehydrering: 3° > 2° > 1° – samme rekkefølge som karbokationstabilitet.

## Produkt og stereokjemi

- Hovedproduktet er det **mest substituerte alkenet** (butan-2-ol → but-2-en > but-1-en).
- But-2-en kan foreligge som E- og Z-isomer.
- Dehydrering er det motsatte av [hydratisering](/medod1/organisk-kjemi/reaksjoner/hydratisering): høy temperatur og fjerning av vann driver mot alken, mye vann driver mot alkohol.

## Biologiske eksempler

**Fumarase** (sitronsyresyklusen) katalyserer den reversible omdannelsen malat ⇌ fumarat + H₂O:

```smiles-row
OC(CC(=O)[O-])C(=O)[O-] | malat
[O-]C(=O)/C=C/C(=O)[O-] | fumarat (trans)
```

:::feil
Forelesningslysbildet om «dehydration reactions in the human body» nevner dehydrogenaser og NAD⁺/FAD. Hold begrepene fra hverandre: **dehydrering** = fjerning av **vann** (fumarase, en hydratase, malat ⇌ fumarat). **Dehydrogenering** = fjerning av **hydrogen** (oksidasjon, koblet til NAD⁺/FAD, f.eks. succinat → fumarat via succinatdehydrogenase og [oksidasjon av alkoholer](/medod1/organisk-kjemi/reaksjoner/oksidasjon-av-alkoholer)).
:::

## Sammenlign med

- [E1](/medod1/organisk-kjemi/reaksjoner/e1-reaksjon)/[E2](/medod1/organisk-kjemi/reaksjoner/e2-reaksjon) på alkylhalider: samme logikk, men der er X allerede en god utgående gruppe; alkoholer må først protoneres.
- [Hydratisering](/medod1/organisk-kjemi/reaksjoner/hydratisering): den omvendte reaksjonen (alken + H₂O → alkohol).
- [Oksidasjon av alkoholer](/medod1/organisk-kjemi/reaksjoner/oksidasjon-av-alkoholer): fjerner 2 H (ikke H₂O) og gir C=O, ikke C=C.

## Test deg selv

:::sjekk[Hvorfor trengs syre for å dehydrere en alkohol?]
OH⁻ er en sterk base og derfor en dårlig utgående gruppe. Protonering gir –OH₂⁺, som kan forlate som nøytralt H₂O.
:::

:::sjekk[Hvorfor dehydreres 2-metylpropan-2-ol lettere enn etanol?]
Den tertiære alkoholen gir et stabilt tertiært karbokation (E1). Etanol ville gitt et ustabilt primært kation og må gå via en tregere E2-vei.
:::

:::sjekk[Hva blir hovedproduktet når butan-2-ol varmes med H₂SO₄?]
But-2-en (CH₃CH=CHCH₃, E/Z-blanding) – det mest substituerte alkenet.
:::

:::sjekk[Er omdannelsen malat → fumarat en oksidasjon?]
Nei. Det fjernes et H₂O-molekyl (H og OH fra nabokarboner), ikke 2 H – det er en dehydrering, katalysert av fumarase uten NAD⁺.
:::
