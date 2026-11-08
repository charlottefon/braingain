---
title: Oksidasjon av aldehyder (Tollens og Benedict)
summary: Aldehyder oksideres lett til karboksylsyrer (H på karbonylkarbonet byttes med OH); ketoner oksideres ikke. Tollens (Ag⁺ → sølvspeil) og Benedict (Cu²⁺ → rødt Cu₂O) påviser aldehyder og reduserende sukker.
category: redoks
tags: [oksidasjon, aldehyd, Tollens, Benedict, Barfoed, reduserende sukker, karboksylsyre]
related:
  - organisk-kjemi/reaksjoner/oksidasjon-av-alkoholer
  - organisk-kjemi/reaksjoner/reduksjon-av-aldehyder-og-ketoner
  - organisk-kjemi/reaksjoner/keto-enol-tautomeri
  - organisk-kjemi/reaksjoner/hemiacetal-og-hemiketal
  - organisk-kjemi/biomolekyler/glykosidbindinger-og-disakkarider
  - lab/ovelser/karbohydrater
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-4a-3--8190320.pdf
    pages: "22-23"
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-5--8135969.pdf
    pages: "19-20"
  - file: medod1/exercises/forelesning-labovelse-ny2025--7794056.pdf
  - file: medod1/exercises/oppgaver-aldehyder-og-ketoner--8156662.pdf
  - file: medod1/exercises/karbohydrater-oppgaver--8155388.pdf
  - file: medod1/exams/2024-medod1-h2024-med-svar--7298977.pdf
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
fields:
  Type: Oksidasjon
  Substrat: Aldehyd (ikke keton)
  Produkt: Karboksylsyre / karboksylat
  Påvisning: Tollens (Ag⁺), Benedict (Cu²⁺)
---

## Oversikt

H-atomet på karbonylkarbonet i et aldehyd erstattes av –OH:

$$\ce{R-CHO ->[[O]] R-COOH}\qquad\ce{C6H5-CHO -> C6H5-COOH}\ \text{(benzaldehyd → benzosyre)}$$

**Ketoner** har ingen H på karbonylkarbonet → **ingen reaksjon** med milde oksidasjonsmidler. Dette er den viktigste kjemiske forskjellen mellom aldehyder og ketoner.

## Mekanisme

Pensum viser netto redoks: aldehydet oksideres (C går fra oksidasjonstrinn +1 til +3 i R–COOH), og metallionet reduseres. (Lærebok: i vann adderes H₂O til C=O og gir et hydrat R–CH(OH)₂, som oksideres som en alkohol.)

**Tollens' test** – Ag⁺ i ammoniakk reduseres til metallisk sølv:

$$\ce{RCHO + [Ag(NH3)2]^+ ->[NH3, H2O] RCOO^- + NH4^+ + Ag(s)}\quad\text{(ubalansert)}$$

Positiv: **sølvspeil** på glasset (reagenset er fargeløst).

**Benedicts test** – Cu²⁺ (blå) reduseres til Cu⁺, som felles ut som rødt/oransje Cu₂O:

$$\ce{RCHO + 2Cu^{2+} + 2H2O -> RCOOH + Cu2O(s) + 4H^+}$$

Positiv: blå → **gult til rødt bunnfall** (Cu₂O; fargen avhenger av mengden reduserende sukker).

## Betingelser og faktorer

- **Sukker:** bare den **åpne kjedeformen** av en aldose har fri aldehydgruppe. En syklisk aldose kan reagere fordi hemiacetalet åpnes i likevekt (reduserende sukker). Glukose → D-glukonat.
- **Ketoser** (fruktose) gir likevel positiv Benedict: i basisk løsning omdannes de via et endiol til aldoser ([keto–enol-tautomeri](/medod1/organisk-kjemi/reaksjoner/keto-enol-tautomeri)).
- **Barfoeds test** (Cu²⁺ ved lavere pH, kort oppvarming ≤ 3 min) skiller **monosakkarider** (positiv) fra **reduserende disakkarider** (negativ/treg). Cu₂O påvises med fosformolybdensyre (blå farge).

| Sukker | Benedict | Barfoed | Hvorfor |
|---|---|---|---|
| Glukose, galaktose, mannose (mono) | + | + | fritt anomert C, monosakkarid |
| Fruktose (ketose) | + | + | omdannes til aldose i base |
| Maltose, laktose | + | − | reduserende disakkarid |
| Sukrose | − | − | begge anomere C bundet, intet hemiacetal |
| Stivelse, cellulose | − (praktisk talt) | − | ekstremt få frie reduserende ender |

## Produkt og stereokjemi

Karboksylsyre (i basisk løsning som karboksylat R–COO⁻). Stereosentrene i resten av molekylet påvirkes ikke.

```smiles-row
O=Cc1ccccc1 | benzaldehyd
OC(=O)c1ccccc1 | benzosyre
```

## Biologiske eksempler

- **ALDH** (aldehyddehydrogenase) oksiderer acetaldehyd → acetat med NAD⁺ i leveren.
- **Glukoseoksidase** (Combur-strimmel i [labkurset](/medod1/lab/ovelser/karbohydrater)): β-D-glukose + O₂ → D-glukono-1,5-lakton + H₂O₂; peroksidase bruker H₂O₂ til å gi en farge – spesifikk påvisning av glukose (f.eks. i urin).
- «Reduserende sukker» betyr at sukkeret **reduserer** Cu²⁺/Ag⁺ – selv blir sukkeret **oksidert**.

## Sammenlign med

- [Oksidasjon av alkoholer](/medod1/organisk-kjemi/reaksjoner/oksidasjon-av-alkoholer): primær alkohol → aldehyd → syre; aldehyd er mellomtrinnet.
- [Reduksjon](/medod1/organisk-kjemi/reaksjoner/reduksjon-av-aldehyder-og-ketoner): motsatt vei.

:::eksamen
- H2024: aldehyd + Tollens → **oksideres til karboksylsyre**; aldehyd vs. keton: aldehyder reagerer med Tollens, ketoner ikke. Positiv Benedict: **glukose** (ikke sukrose, stivelse, cellulose).
- V2026/V2025: aldehyd + oksidasjonsmiddel → karboksylsyre.
- H2025 langsvar (4,5 p): Benedict/Barfoed for maltose (+/−), mannose (+/+), sukrose (−/−) med forklaring (fritt anomert C, mono- vs disakkarid). V2024: positiv på begge → D-galaktose; V2025: negativ på begge → sukrose.
:::

## Test deg selv

:::sjekk[Hvorfor gir aldehyder positiv Tollens' test, men ikke ketoner?]
Aldehyder har et H på karbonylkarbonet og kan oksideres til karboksylsyre, mens Ag⁺ reduseres til Ag (sølvspeil). Ketoner har to C på karbonylkarbonet og oksideres ikke av milde oksidasjonsmidler.
:::

:::sjekk[Hva oksideres og hva reduseres i en positiv Benedict-test?]
Sukkeret (aldehydgruppen) oksideres til karboksylsyre/karboksylat; Cu²⁺ reduseres til Cu⁺, som felles som rødt Cu₂O.
:::

:::sjekk[Hvorfor er maltose positiv på Benedict, men negativ på Barfoed?]
Maltose har et fritt anomert C (hemiacetal) og er reduserende, men Barfoed er sur og kortvarig og gir bare utslag for monosakkarider; disakkarider reagerer for tregt.
:::

:::sjekk[Hvorfor kan glukose gi positiv Benedict selv om over 99 % foreligger som ring?]
Ringen (hemiacetal) står i likevekt med den åpne aldehydformen. Når den lille andelen aldehyd oksideres, dras likevekten mot åpen form (Le Châtelier) til alt har reagert.
:::
