---
title: Esterhydrolyse og forsåpning
summary: Vann spalter en ester til karboksylsyre og alkohol. Sur hydrolyse er reversibel (omvendt forestring); basisk hydrolyse (forsåpning) med NaOH/KOH er irreversibel og gir karboksylatsalt – av fett får man glyserol og såpe. I kroppen gjøres det av esteraser og lipaser.
category: syrederivater
tags: [hydrolyse, ester, forsåpning, såpe, lipase, esterase, aspirin]
related:
  - organisk-kjemi/reaksjoner/forestring
  - organisk-kjemi/reaksjoner/amiddannelse-og-hydrolyse
  - organisk-kjemi/biomolekyler/lipider
  - generell-kjemi/teori/kjemisk-likevekt
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-4b--8131296.pdf
    pages: "12-15"
  - file: medod1/exercises/kollokvier-organisk-kjemi--7794158.pdf
fields:
  Type: Nukleofil acylsubstitusjon
  Sur hydrolyse: reversibel, H⁺-katalysert
  Basisk (forsåpning): irreversibel, forbruker OH⁻
  Produkter: karboksylsyre/karboksylat + alkohol
---

## Oversikt

**Sur hydrolyse** (omvendt [forestring](/medod1/organisk-kjemi/reaksjoner/forestring)):

$$\ce{R-COOR' + H2O <=>[H^+] R-COOH + R'OH}$$

**Basisk hydrolyse = forsåpning:**

$$\ce{R-COOR' + OH^- -> R-COO^- + R'OH}$$

Kollokvieeksempel: benzyl-2-metylbutanoat + H₂O (H⁺) → **2-metylbutansyre + benzylalkohol** (fenylmetanol).

NB: Selve begrepet forsåpning og basemekanismen er standard lærebokstoff; forelesningen viser esterdannelse og at esteraser hydrolyserer aspirin.

## Mekanisme

**Basisk (forsåpning):**

1. OH⁻ angriper esterens karbonylkarbon → tetraedrisk alkoksid-intermediat.
2. C=O gjenoppstår og **R′O⁻ forlater** (alkoksid).
3. Syre-base: R′O⁻ (sterk base) tar H⁺ fra karboksylsyren → **karboksylat** + alkohol. Dette trinnet er praktisk talt irreversibelt og driver reaksjonen fullstendig.

**Sur:** samme trinn som forestringen baklengs (protonering → vann angriper → protonoverføring → R′OH forlater → deprotonering). Alle trinn er likevekter.

```smiles-row
CCCC(=O)OCC | etylbutanoat
CCCC(=O)[O-] | butanoat
CCO | etanol
```

## Betingelser og faktorer

| | Sur hydrolyse | Basisk hydrolyse (forsåpning) |
|---|---|---|
| Reagens | H₂O, H⁺ (katalytisk) | NaOH/KOH (støkiometrisk), varme |
| Reversibel? | ja (likevekt) | nei |
| Syreprodukt | karboksylsyre R–COOH | karboksylatsalt R–COO⁻ Na⁺ |

## Produkt og stereokjemi

Karboksylsyre (eller karboksylat) + alkohol. Konfigurasjonen i alkoholdelen beholdes, fordi C–O-bindingen som brytes er acyl–O-bindingen, ikke O–R′-bindingen.

## Biologiske eksempler

- **Forsåpning av fett:** triacylglyserol + 3 NaOH → glyserol + 3 natriumsalter av fettsyrer = **såpe**. Såpe er amfipatisk (polart karboksylathode, upolar hale) og danner miceller rundt fett.
- **Lipaser** hydrolyserer triacylglyseroler i tarmen (fordøyelse) og i fettvev (frigjøring av fettsyrer).
- **Esteraser** hydrolyserer aspirin til salisylsyre + eddiksyre. **Acetylkolinesterase** spalter acetylkolin (en ester) til kolin + acetat.

```smiles-row
CCCCCCCCCCCCCCCC(=O)OCC(OC(=O)CCCCCCCCCCCCCCC)COC(=O)CCCCCCCCCCCCCCC | tripalmitin (triacylglyserol)
CCCCCCCCCCCCCCCC(=O)[O-].[Na+] | natriumpalmitat (såpe)
```

## Sammenlign med

- [Forestring](/medod1/organisk-kjemi/reaksjoner/forestring): motsatt retning.
- [Amidhydrolyse](/medod1/organisk-kjemi/reaksjoner/amiddannelse-og-hydrolyse): amider er mye mer motstandsdyktige (resonans) og krever sterk syre/base og varme eller enzymer (proteaser).
- Glykosidhydrolyse ([acetal](/medod1/organisk-kjemi/reaksjoner/acetal-og-ketal)): skjer i syre, ikke i base – motsatt av estere, som spaltes lett i base.

## Test deg selv

:::sjekk[Hvorfor er forsåpning irreversibel, mens sur esterhydrolyse er en likevekt?]
I base blir karboksylsyren deprotonert til karboksylat. Karboksylatet er resonansstabilisert og ikke elektrofilt nok til å reagere med alkohol igjen – likevekten trekkes helt over.
:::

:::sjekk[Hva får man når et triacylglyserol kokes med NaOH?]
Glyserol + tre natriumkarboksylater (fettsyresalter) = såpe.
:::

:::sjekk[Hvilke produkter gir sur hydrolyse av benzyl-2-metylbutanoat?]
2-metylbutansyre og benzylalkohol (fenylmetanol).
:::

:::sjekk[Hvorfor virker såpe rensende?]
Fettsyresaltene er amfipatiske: den upolare hydrokarbonhalen løser seg i fett, det ladde karboksylathodet vender mot vann; det dannes miceller som holder fettet suspendert.
:::
