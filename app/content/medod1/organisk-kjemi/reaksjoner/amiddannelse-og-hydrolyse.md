---
title: Amiddannelse og amidhydrolyse (peptidbinding)
summary: Karboksylsyre + amin gir amid + vann ved oppvarming (kondensasjon); peptidbindingen er en amidbinding. Resonans gir C–N-bindingen delvis dobbeltbindingskarakter – plan, ikke-roterbar og lite reaktiv – og amider er svært svake baser. Hydrolyse krever sterk syre/base eller enzymer (proteaser).
category: syrederivater
tags: [amid, peptidbinding, kondensasjon, hydrolyse, resonans, protease, delvis dobbeltbinding]
related:
  - organisk-kjemi/reaksjoner/forestring
  - organisk-kjemi/reaksjoner/esterhydrolyse-og-forsaapning
  - organisk-kjemi/reaksjoner/imindannelse
  - proteiner/teori/peptidbindingen
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-4b--8131296.pdf
    pages: "2, 6, 8, 16"
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-3b--8116859.pdf
    pages: "10, 15"
  - file: medod1/exercises/oppgaver-karboksylsyrer-estere-amider--8156716.pdf
  - file: medod1/exams/2025-medod1-ny-v2025-med-svar--7269873.pdf
  - file: medod1/exams/2024-medod1-h2024-med-svar--7298977.pdf
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
fields:
  Type: Nukleofil acylsubstitusjon (kondensasjon)
  Reagens: karboksylsyre + amin, varme
  Biprodukt: H₂O
  Amidbinding: plan, delvis dobbeltbinding
  Hydrolyse: sterk syre/base + varme, eller protease
---

## Oversikt

$$\ce{R-COOH + H-NR'2 ->[\Delta] R-CONR'2 + H2O}$$

–OH i syren erstattes av –NR′₂ fra aminet. Med to aminosyrer: –COOH i den ene + –NH₂ i den andre → **peptidbinding** + H₂O (f.eks. Ala-Gly).

**Hydrolyse** (omvendt):

$$\ce{R-CONHR' + H2O ->[H^+ \text{ eller } OH^-, \Delta] R-COOH + H2NR'}$$

```smiles-row
C[C@@H](C(=O)NCC(=O)[O-])[NH3+] | Ala-Gly (dipeptid)
CC(=O)N | acetamid (etanamid)
CCC(=O)N(C)C | N,N-dimetylpropanamid
```

## Mekanisme

Nukleofil acylsubstitusjon: aminets ledige elektronpar på N angriper karbonylkarbonet → tetraedrisk intermediat → C=O gjenoppstår og vann (fra –OH) forlater. I praksis reagerer syre og amin først til et salt (R–COO⁻ ⁺H₃N–R′), derfor trengs **varme** for å drive ut vann; i cellen aktiveres karboksylgruppen først (aminoacyl-tRNA i ribosomet).

**Amidresonans:** nitrogenets ledige elektronpar delokaliseres inn i karbonylgruppen:

$$\ce{R-C(=O)-NH2 <-> R-C(-O^-)=NH2^+}$$

## Betingelser og faktorer

- Konsekvenser av resonansen:
  - **Delvis dobbeltbindingskarakter** i C–N → **minimal rotasjon**, peptidgruppen er **plan**.
  - Amider er **lite reaktive** og **svært svake baser** (N-elektronparet er ikke tilgjengelig for protonering; amider er mindre basiske enn aminer).
- Hydrolyse er derfor langsom og krever sterk syre/base + varme – eller enzymer.
- Primære amider (RCONH₂) danner mange hydrogenbindinger → høyere kokepunkt enn tilsvarende syrer (acetamid 222 °C, eddiksyre 118 °C, N-metylacetamid 206 °C, N,N-dimetylacetamid 165 °C – tertiære amider har ingen N–H).

## Produkt og stereokjemi

- Amid + vann; peptidbindingen foreligger normalt i trans-konfigurasjon (lærebok).
- Rotasjonen i proteinryggraden skjer rundt bindingene på hver side av peptidbindingen (N–Cα og Cα–C), ikke rundt C–N.

## Biologiske eksempler

- **[Peptidbinding](/medod1/proteiner/teori/peptidbindingen)** i proteiner – dannes i ribosomet ved kondensasjon (vann frigjøres), spaltes ved hydrolyse av **proteaser** (pepsin, trypsin, chymotrypsin).
- Legemidler med amidbinding: paracetamol (N-(4-hydroksyfenyl)acetamid), lidokain.
- Kitin (N-acetylglukosamin) inneholder amidbindinger (N-acetylgruppe).

## Sammenlign med

| | Ester | Amid |
|---|---|---|
| Dannes av | syre + alkohol (H⁺) | syre + amin (varme) |
| Resonans | svak | sterk (N mer villig til å donere) |
| Hydrolyse | lett (base, esteraser) | vanskelig (proteaser) |
| H-bindinger seg imellom | nei | ja (1° og 2° amider) |

[Imindannelse](/medod1/organisk-kjemi/reaksjoner/imindannelse): amin + aldehyd/keton → C=N (karbonyl-O går ut som vann).

:::eksamen
- V2025: peptidbindingen har **delvis dobbeltbindingskarakter** (riktig). H2024: ved dannelse av peptidbinding **frigjøres et vannmolekyl**.
- V2026 Q67 spurte hva som begrenser rotasjonen i peptidbindingen; kjemisk riktig svar er resonans/delvis dobbeltbindingskarakter (fasiten i dokumentet ser ut til å peke på steriske R-grupper – kjenn forklaringen og argumenter for resonans).
:::

## Test deg selv

:::sjekk[Hvorfor er rotasjonen rundt C–N i en peptidbinding begrenset?]
Nitrogenets ledige elektronpar delokaliseres mot karbonyl-O (resonans), så C–N får delvis dobbeltbindingskarakter. Peptidgruppen blir plan og kan ikke rotere fritt.
:::

:::sjekk[Hvorfor er amider mye svakere baser enn aminer?]
I amidet er N-elektronparet delokalisert inn i karbonylgruppen og er lite tilgjengelig for å binde H⁺. I aminet er elektronparet lokalisert på N.
:::

:::sjekk[Hva er forskjellen på dannelse og spalting av en peptidbinding?]
Dannelse er kondensasjon (H₂O frigjøres); spalting er hydrolyse (H₂O forbrukes), katalysert av proteaser.
:::

:::sjekk[Hvorfor har acetamid høyere kokepunkt enn N,N-dimetylacetamid?]
Acetamid (primært amid) har to N–H og danner et nettverk av hydrogenbindinger; det tertiære amidet har ingen N–H og kan bare akseptere hydrogenbindinger.
:::
