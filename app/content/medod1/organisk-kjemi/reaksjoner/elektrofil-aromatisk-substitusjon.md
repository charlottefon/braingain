---
title: Elektrofil aromatisk substitusjon (EAS)
summary: Aromater som benzen reagerer ved substitusjon, ikke addisjon – en elektrofil erstatter et H på ringen, og den aromatiske ringen gjenoppstår. Eksempel – nitrering (HNO₃/H₂SO₄ → nitrobenzen). Substituenter styrer – CH₃ er orto/para-, NO₂ meta-dirigerende.
category: substitusjon
tags: [aromat, benzen, nitrering, elektrofil, orto/para, meta]
related:
  - organisk-kjemi/reaksjoner/hydrohalogenering
  - organisk-kjemi/reaksjoner/radikal-halogenering
  - organisk-kjemi/reaksjoner/halogenering-av-alkener
  - organisk-kjemi/funksjonelle-grupper/aromater
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-1--8106129.pdf
    pages: "63-70"
  - file: medod1/exercises/oppgaver-til-forlesning-oc1-organiske-reaksjoner--8112303.pdf
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
fields:
  Type: Elektrofil substitusjon
  Substrat: Aromat (benzen)
  Generelt: Ar–H + E⁺ → Ar–E + H⁺
  Eksempel: Nitrering, HNO₃ + H₂SO₄
---

## Oversikt

Benzen har et delokalisert π-system (6 π-elektroner over en plan ring, alle C–C like lange) som gir **stor aromatisk stabilisering**. Addisjon ville ødelagt aromatisiteten – derfor gir aromater **substitusjon**:

$$\ce{Ar-H + E^+ -> Ar-E + H^+}$$

Kjente typer: halogenering, **nitrering**, sulfonering, Friedel–Crafts-alkylering og -acylering.

Nitrering (forelesningens eksempel):

$$\ce{C6H6 + HNO3 ->[H2SO4] C6H5NO2 + H2O}$$

## Mekanisme

Liknende addisjon til alkener, men aromaten gjenopprettes til slutt:

1. **Elektrofilt angrep:** to π-elektroner fra ringen danner binding til elektrofilen (Y⁺/E⁺). Det dannes et **karbokation** i ringen (resonansstabilisert, ikke lenger aromatisk; karbonet med E er sp³ og har også H).
2. **Deprotonering:** en base (X⁻) tar H⁺ fra karbonet som bærer E; elektronparet går tilbake inn i ringen → aromatisk ring gjenoppstår.

Ved nitrering virker H₂SO₄ som syrekatalysator og danner elektrofilen fra HNO₃.

```smiles-row
c1ccccc1 | benzen
[O-][N+](=O)c1ccccc1 | nitrobenzen
```

## Betingelser og faktorer

**Dirigerende effekt** av substituent som allerede sitter på ringen:

| Substituent | Styrer ny gruppe til | Eksempel (nitrering) |
|---|---|---|
| –CH₃ (elektrondonerende) | **orto/para** (1,2 og 1,4) | toluen → 59 % orto + 37 % para (+4 % meta) |
| –NO₂ (elektrontiltrekkende) | **meta** (1,3) | nitrobenzen → 93 % 1,3-dinitrobenzen (+7 % orto) |

## Produkt og stereokjemi

- Substituert aromat + HX/H₂O; ringen forblir plan og aromatisk.
- Toluen nitrert tre ganger → 2-metyl-1,3,5-trinitrobenzen (**TNT**).

```smiles-row
Cc1ccccc1[N+](=O)[O-] | 2-nitrotoluen
Cc1ccc(cc1)[N+](=O)[O-] | 4-nitrotoluen
[O-][N+](=O)c1cccc(c1)[N+](=O)[O-] | 1,3-dinitrobenzen
```

## Biologiske eksempler

Aromatiske ringer finnes i mange biomolekyler og legemidler (dopamin, adrenalin, paracetamol, aspirin, ibuprofen, lidokain); i kroppen modifiseres aromater enzymatisk (f.eks. hydroksylering av fenylalanin til tyrosin) – kjemisk sett også substitusjon på ringen.

## Sammenlign med

- [Elektrofil addisjon til alkener](/medod1/organisk-kjemi/reaksjoner/hydrohalogenering): samme første trinn (π-elektroner angriper E⁺ → karbokation), men alkenet fullfører med at et nukleofil adderes; aromaten mister i stedet H⁺ og blir aromatisk igjen.
- [Radikal halogenering](/medod1/organisk-kjemi/reaksjoner/radikal-halogenering): substitusjon på alkaner via radikaler.

:::eksamen
V2026: «Hvorfor gir benzen substitusjon og ikke addisjon?» → addisjon ville ødelagt den aromatiske resonansstabiliseringen.
:::

## Test deg selv

:::sjekk[Hvorfor gir benzen substitusjon heller enn addisjon med elektrofiler?]
Substitusjon bevarer det aromatiske, delokaliserte π-systemet og dermed den store stabiliseringsenergien. Addisjon ville gitt et ikke-aromatisk produkt.
:::

:::sjekk[Hvilke produkter dominerer når toluen nitreres, og hvorfor?]
2-nitrotoluen (orto) og 4-nitrotoluen (para). CH₃ er elektrondonerende og orto/para-dirigerende.
:::

:::sjekk[Hva er rollen til H₂SO₄ ved nitrering av benzen?]
Syrekatalysator – den hjelper til å danne den elektrofile nitrogruppen fra HNO₃. Produktene er nitrobenzen og vann.
:::
