---
title: Forestring (Fischer-esterifisering)
summary: Karboksylsyre + alkohol gir ester + vann under syrekatalyse (H⁺). Kondensasjonsreaksjon og likevekt – OH fra syren byttes med OR′ fra alkoholen. Eksempler – etylbutanoat (ananas), etyletanoat, triacylglyserol, aspirin.
category: syrederivater
tags: [ester, forestring, esterifisering, kondensasjon, karboksylsyre, alkohol, triacylglyserol]
related:
  - organisk-kjemi/reaksjoner/esterhydrolyse-og-forsaapning
  - organisk-kjemi/reaksjoner/amiddannelse-og-hydrolyse
  - organisk-kjemi/reaksjoner/nukleofil-addisjon-til-karbonyl
  - organisk-kjemi/biomolekyler/lipider
  - generell-kjemi/teori/kjemisk-likevekt
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-4b--8131296.pdf
    pages: "2, 5, 12-15"
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-3a--8116858.pdf
    pages: "11"
  - file: medod1/exercises/oppgaver-alkoholer-fenoler-etere--8156711.pdf
  - file: medod1/exercises/oppgaver-karboksylsyrer-estere-amider--8156716.pdf
  - file: medod1/exams/2025-medod1-ny-v2025-med-svar--7269873.pdf
  - file: medod1/exams/2024-medod1-h2024-med-svar--7298977.pdf
fields:
  Type: Nukleofil acylsubstitusjon (kondensasjon)
  Reagens: karboksylsyre + alkohol, H⁺-katalysator
  Biprodukt: H₂O
  Likevekt: Ja (reversibel)
  Produkt: Ester R–COO–R′
---

## Oversikt

$$\ce{R-COOH + H-OR' <=>[H^+] R-COOR' + H2O}$$

–OH-gruppen i syren erstattes av –OR′ fra alkoholen. Det er en **kondensasjonsreaksjon** (H₂O avspaltes) og en **likevekt**.

$$\ce{CH3CH2CH2COOH + HOCH2CH3 <=>[H^+] CH3CH2CH2COOCH2CH3 + H2O}\quad\text{(etylbutanoat, i ananasolje)}$$
$$\ce{CH3COOH + CH3CH2OH <=>[H^+] CH3COOCH2CH3 + H2O}\quad\text{(etyletanoat = etylacetat)}$$

**Navn:** alkylgruppen fra alkoholen først, så syredelen med -oat: etyl + butanoat → etylbutanoat; CH₃CH₂COOCH₂CH₃ = etylpropanoat.

```smiles-row
CCCC(=O)O | butansyre
CCO | etanol
CCCC(=O)OCC | etylbutanoat
```

## Mekanisme

Fischer-esterifisering (lærebokmekanisme, forelesningen viser nettoreaksjonen):

1. **Protonering** av karbonyloksygenet → karbonylkarbonet blir sterkt elektrofilt.
2. **Nukleofilt angrep:** alkoholens O angriper karbonylkarbonet → **tetraedrisk intermediat**.
3. **Protonoverføring** fra det innkomne O til en av OH-gruppene → –OH₂⁺.
4. **Vann forlater**, C=O gjenopprettes (protonert).
5. **Deprotonering** → ester + H⁺ (katalysatoren tilbake).

Oksygenet i H₂O kommer fra **syren**; esteroksygenet (–O–R′) kommer fra **alkoholen**.

```smiles-row
CC(=[OH+])O | protonert syre
CC(O)(O)OCC | tetraedrisk intermediat
CC(=O)OCC | etyletanoat
```

## Betingelser og faktorer

- Syrekatalysator (H⁺, f.eks. H₂SO₄); reaksjonen er langsom uten.
- Likevekt: overskudd alkohol eller fjerning av vann gir mer ester ([Le Châtelier](/medod1/generell-kjemi/teori/kjemisk-likevekt)); overskudd vann gir [hydrolyse](/medod1/organisk-kjemi/reaksjoner/esterhydrolyse-og-forsaapning).

## Produkt og stereokjemi

- Ester + vann. Estere kan ikke danne hydrogenbindinger med hverandre → lavere kokepunkt enn syren (eddiksyre 118 °C, metylacetat 57 °C, etylacetat 77 °C).
- Stereosentre i syre eller alkohol berøres ikke.

## Biologiske eksempler

- **Triacylglyserol (triglyserid):** glyserol + 3 fettsyrer → 3 esterbindinger + 3 H₂O; energilager i fettceller.
- **Aspirin (acetylsalisylsyre):** ester av eddiksyre og den fenoliske –OH i salisylsyre; syntetiseres fra salisylsyre + eddiksyreanhydrid. Hemmer COX-1/COX-2 irreversibelt.
- Smaks- og luktstoffer (estere i øl og frukt).
- **Kolesterolestere** (lagringsform av kolesterol) og **fosforsyreestere** (fosfolipider, nukleotider, sukkerfosfater).

```smiles-row
CC(=O)Oc1ccccc1C(=O)O | aspirin
OCC(O)CO | glyserol
```

## Sammenlign med

- [Amiddannelse](/medod1/organisk-kjemi/reaksjoner/amiddannelse-og-hydrolyse): amin i stedet for alkohol; amidet er mye mer stabilt (resonans).
- [Acetaldannelse](/medod1/organisk-kjemi/reaksjoner/acetal-og-ketal): også syrekatalysert kondensasjon med alkohol, men på aldehyd/hemiacetal.
- [Esterhydrolyse](/medod1/organisk-kjemi/reaksjoner/esterhydrolyse-og-forsaapning): reversen.

:::eksamen
V2025: karboksylsyre + alkohol under sure betingelser → **ester**; «hva er et karboksylsyrederivat?» → etylacetat. H2024: etanol + eddiksyre + syrekatalysator → **etylacetat**.
:::

## Test deg selv

:::sjekk[Hva dannes når etansyre og etanol reagerer med syrekatalysator, og hva slags reaksjon er det?]
Etyletanoat (etylacetat) + H₂O. En kondensasjonsreaksjon (forestring) som er reversibel.
:::

:::sjekk[Hvordan kan man øke utbyttet av ester?]
Bruke overskudd av alkohol eller syre, eller fjerne vannet som dannes – likevekten forskyves mot produktene.
:::

:::sjekk[Hvorfor har etylacetat lavere kokepunkt enn eddiksyre?]
Estere har ingen O–H og kan ikke danne hydrogenbindinger med hverandre; karboksylsyrer danner sterke H-bundne dimerer.
:::

:::sjekk[Hvilke molekyler kondenseres for å lage et triacylglyserol, og hvor mange vann avspaltes?]
Glyserol + tre fettsyrer; tre esterbindinger dannes og tre H₂O avspaltes.
:::
