---
title: Aromater (benzen og arener)
summary: Plane, sykliske forbindelser med et delokalisert π-system (benzen C₆H₆). Svært stabile; reagerer ved elektrofil aromatisk substitusjon (EAS), ikke addisjon. Substituerte benzener navngis med -benzen, fenyl- som substituent og 1,2/1,3/1,4 (orto/meta/para).
category: hydrokarboner
order: 4
tags: [aromat, benzen, resonans, EAS, fenyl, orto, meta, para]
fields:
  Formel benzen: C₆H₆
  Hybridisering: sp², plan
  Typisk reaksjon: elektrofil aromatisk substitusjon
  Substituentnavn: fenyl- (C₆H₅–)
related:
  - organisk-kjemi/grunnlag/resonans-syrer-og-baser
  - organisk-kjemi/funksjonelle-grupper/fenoler
  - organisk-kjemi/funksjonelle-grupper/aminer
  - organisk-kjemi/navnsetting/aromatiske-forbindelser
  - organisk-kjemi/reaksjoner/elektrofil-aromatisk-substitusjon
  - proteiner/aminosyrer/fenylalanin
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-1--8106129.pdf
    pages: "63-71"
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-3b--8116859.pdf
    pages: "11-17"
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
---

## Struktur og gjenkjenning

- Seksring av sp²-karbon; hvert C har ett p-orbital som overlapper med naboene → **delokalisert π-system** med 6 π-elektroner over hele ringen.
- Tegnes som én av to resonansstrukturer (vekslende enkelt/dobbelt) eller med en sirkel i ringen. Alle C–C-bindinger er like lange (mellom enkelt- og dobbeltbinding).
- Kjennetegn: **syklisk, plan, sammenhengende p-orbitaler, delokaliserte π-elektroner, høy stabilitet**.
- Heteroaromater: ringatom kan være N (pyridin, pyrrol, imidazol, purin og pyrimidin i DNA/RNA).

```smiles-row
c1ccccc1 | Benzen
Cc1ccccc1 | Toluen (metylbenzen)
c1ccncc1 | Pyridin
```

## Navnsetting

- Substituert benzen: substituent + **benzen**: klorbenzen, nitrobenzen, metylbenzen (toluen).
- Benzen som substituent: **fenyl-** (C₆H₅–).
- Disubstituerte: lokanter **1,2- (orto, o-)**, **1,3- (meta, m-)**, **1,4- (para, p-)**. Systematisk IUPAC bruker tall (2-klorfenol, ikke *orto*-klorfenol).
- Beholdte navn: fenol, benzaldehyd, benzosyre, anilin, toluen.
Se [Aromatiske forbindelser](/medod1/organisk-kjemi/navnsetting/aromatiske-forbindelser).

```smiles-row
Clc1ccccc1Cl | 1,2-diklorbenzen (orto)
Clc1cccc(Cl)c1 | 1,3-diklorbenzen (meta)
Clc1ccc(Cl)cc1 | 1,4-diklorbenzen (para)
```

## Egenskaper

- Upolare (benzen), hydrofobe; kjente for lukt («aromatisk»: vanillin, benzaldehyd).
- **Stor termodynamisk stabilitet** (aromatisk stabilisering) → lite tilbøyelig til addisjon.
- Ringen påvirker nabogruppers egenskaper: fenol er surere enn alkoholer, anilin svakere base enn alkylaminer (elektronparet delokaliseres inn i ringen).

## Typiske reaksjoner

**Elektrofil aromatisk substitusjon (EAS):** $\ce{Ar-H + E+ -> Ar-E + H+}$ – et H byttes ut, aromatisiteten bevares.

| EAS-reaksjon | Elektrofil/reagens | Produkt |
|---|---|---|
| Halogenering | Br₂/Cl₂ + katalysator | halogenbenzen |
| Nitrering | HNO₃ (+ H₂SO₄) → NO₂⁺ | nitrobenzen (TNT = 2-metyl-1,3,5-trinitrobenzen) |
| Sulfonering | SO₃/H₂SO₄ | benzensulfonsyre |
| Friedel–Crafts-alkylering | R–Cl + AlCl₃ | alkylbenzen |
| Friedel–Crafts-acylering | RCOCl + AlCl₃ | aryl-keton |

**Dirigerende effekt** (nitrering, forelesning): CH₃ i toluen dirigerer til **orto/para (1,2- og 1,4-)** (59 % orto, 37 % para, 4 % meta). NO₂ i nitrobenzen dirigerer til **meta (1,3-)** (93 % meta).

Mekanisme: [Elektrofil aromatisk substitusjon](/medod1/organisk-kjemi/reaksjoner/elektrofil-aromatisk-substitusjon).

:::eksamen
v2026: «Hvorfor reagerer benzen hovedsakelig ved substitusjon og ikke addisjon?» → addisjon ville ødelegge den aromatiske resonansstabiliseringen. h2025: kjenne igjen orto/meta/para på figur. v2026: pyrrol er mye svakere base enn pyridin fordi N-elektronparet inngår i det aromatiske π-systemet.
:::

## I biologien

- Aminosyrer: [fenylalanin](/medod1/proteiner/aminosyrer/fenylalanin), [tyrosin](/medod1/proteiner/aminosyrer/tyrosin), [tryptofan](/medod1/proteiner/aminosyrer/tryptofan) (og [histidin](/medod1/proteiner/aminosyrer/histidin) med imidazolring).
- Nukleobaser: purin- og pyrimidinringer (heteroaromater) i DNA/RNA.
- Signalstoffer: dopamin, adrenalin, noradrenalin (katekolaminer), histamin.
- Legemidler: aspirin (2-acetyloksybenzosyre), ibuprofen, paracetamol (*N*-(4-hydroksyfenyl)acetamid), lidokain.
- Naturstoffer: vanillin, benzaldehyd (mandel/kirsebærlukt).

```smiles-row
CC(=O)Nc1ccc(O)cc1 | Paracetamol
NCCc1ccc(O)c(O)c1 | Dopamin
```

## Test deg selv

:::sjekk[Hvilke fire strukturelle krav må være oppfylt for at en ring skal være aromatisk (forelesningens definisjon)?]
Syklisk og plan, et sammenhengende system av overlappende p-orbitaler (alle ringatomer sp²), og π-elektroner delokalisert over hele ringen – noe som gir høy stabilitet.
:::

:::sjekk[Hva er hovedproduktet ved nitrering av nitrobenzen, og hvorfor er det annerledes for toluen?]
1,3-dinitrobenzen (meta). NO₂ er elektrontrekkende og meta-dirigerende. CH₃ er elektrondonerende og orto/para-dirigerende, så toluen gir hovedsakelig 2- og 4-nitrotoluen.
:::

:::sjekk[Hva betyr «para» og hva er tilsvarende lokant?]
Para = substituentene står rett overfor hverandre, 1,4-stilling. Orto = 1,2, meta = 1,3.
:::

:::sjekk[Er fenylgruppe og benzylgruppe det samme?]
Nei. Fenyl er C₆H₅– (ringen er bundet direkte). Benzyl er C₆H₅CH₂– (ringen via en CH₂). Benzylalkohol er derfor en vanlig (primær) alkohol, mens fenol har OH direkte på ringen.
:::
