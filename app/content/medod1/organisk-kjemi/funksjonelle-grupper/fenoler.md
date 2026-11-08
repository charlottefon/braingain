---
title: Fenoler
summary: Ar–OH – OH bundet direkte til en aromatisk ring (sp²-C). Ikke en alkohol. Mye surere enn alkoholer (pKa ≈ 10 mot ≈ 16) fordi fenoksidionet er resonansstabilisert; elektrontrekkende substituenter øker surheten, elektrondonerende senker den.
category: oksygen
order: 2
tags: [fenol, fenoksid, surhet, resonans, induktiv effekt, aromat]
fields:
  Funksjonell gruppe: –OH på aromatisk ring
  Navn: fenol (C1 = C–OH), benzen-1,2-diol …
  pKa (fenol): 10,0
  Konjugert base: fenoksid (resonansstabilisert)
related:
  - organisk-kjemi/funksjonelle-grupper/alkoholer
  - organisk-kjemi/funksjonelle-grupper/aromater
  - organisk-kjemi/grunnlag/resonans-syrer-og-baser
  - organisk-kjemi/navnsetting/aromatiske-forbindelser
  - proteiner/aminosyrer/tyrosin
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-3a--8116858.pdf
    pages: "22-26"
  - file: medod1/exercises/oppgaver-alkoholer-fenoler-etere--8156711.pdf
  - file: medod1/exams/2023-medod1-ny-v2023-med-svar--5194537.pdf
  - file: medod1/exams/2024-medod1-ny-v2024-med-svar--5897534.pdf
  - file: medod1/exams/2019-medod1-ny-v2019-med-svar--2098874.pdf
  - file: medod1/exams/2018-medod1-h2018-med-svar--2098434.pdf
  - file: medod1/exams/2021-medod1-h2021-med-svar--3944361.pdf
---

## Struktur og gjenkjenning

- **OH direkte på en aromatisk ring** (sp²-karbon): Ar–OH. Fenol = C₆H₅OH.
- En fenol er **ikke** en alkohol (alkohol = OH på sp³-C). Benzylalkohol (C₆H₅CH₂OH) er derimot en alkohol.

```smiles-row
Oc1ccccc1 | Fenol
Cc1cccc(O)c1 | 3-metylfenol
Oc1ccccc1O | Benzen-1,2-diol (katekol)
```

## Navnsetting

- **Fenol** er foretrukket IUPAC-navn (ikke hydroksybenzen). Karbonet med OH er automatisk **C1**; nummerer slik at andre substituenter får lavest lokant.
- Bruk tall, ikke o/m/p: **2-klorfenol** (ikke *orto*-klorfenol), **4-metylfenol** (ikke *para*-metylfenol), **3-metylfenol**.
- Flere OH: **benzen-1,2-diol**, benzen-1,3-diol (forelesningen skriver også «bensen»).
- Er en høyere prioritert gruppe til stede, blir OH prefiks: **3-hydroksybenzosyre**.

## Egenskaper

- H-binding som alkoholer (donor + akseptor); fenol er moderat vannløselig.
- **Surere enn alkoholer**: pKa fenol 10,0 vs etanol ~16. Fenoksidionets negative ladning er **delokalisert inn i ringen** (resonans), så det er mer stabilt enn et alkoksidion.
- **Substituenteffekter**: elektrontrekkende grupper (NO₂, Cl) stabiliserer fenoksid → **sterkere syre**; elektrondonerende grupper (CH₃, alkyl) destabiliserer → **svakere syre**.
- Fortsatt svak syre – mye svakere enn karboksylsyrer (pKa 4–5).

$$\ce{C6H5OH + H2O <=> C6H5O- + H3O+}\qquad pK_a = 10$$

## Syrestyrke: resonans og induktiv effekt

To ulike effekter stabiliserer anionet – hold dem fra hverandre:

| Effekt | Virker gjennom | Eksempel | Styrke |
|---|---|---|---|
| **Resonans** | π-systemet (delokalisering) | fenoksid: ladning på O + orto/para-C; NO₂ i para tar ladningen helt ut på nitro-O | stor (pKa-sprang på flere enheter) |
| **Induktiv effekt (−I)** | σ-bindingene (elektronegativt atom trekker elektroner) | Cl i 2-klorsykloheksanol, 2-kloretanol (14,3 mot etanol 15,9) | mindre; avtar raskt med avstanden, summeres for flere Cl |
| **Elektrondonor (+I)** | σ-bindingene | CH₃ i *p*-metylfenol, alkylgrupper i tert-butanol (18,0) | destabiliserer anionet → svakere syre |

En alkohol kan bare stabiliseres **induktivt** (O⁻ sitter på sp³-C, ingen resonans – se [regler for resonansstrukturer](/medod1/organisk-kjemi/grunnlag/resonans-syrer-og-baser)). Derfor blir selv en klorert alkohol aldri så sur som fenol: 2,2,2-trikloretanol (tre Cl) har pKa 12,2, fenol 10,0.

:::eksempel[Eksamen v2019 (og v2018, h2018, h2021): ranger etter økende syrestyrke – p-metylfenol, sykloheksanol, fenol, p-nitrofenol, 2-klorsykloheksanol]
**Trinn 1 – del i stoffklasser** (resonans avgjør grovsorteringen):
- Alkoholer (ingen resonans i anionet): sykloheksanol, 2-klorsykloheksanol → svakest.
- Fenoler (resonansstabilisert fenoksid): p-metylfenol, fenol, p-nitrofenol → sterkest.

**Trinn 2 – ranger innenfor hver klasse** (substituenteffekter):
- Alkoholene: Cl på nabokarbonet trekker elektroner induktivt (−I) og stabiliserer alkoksidet → **sykloheksanol < 2-klorsykloheksanol** (jf. etanol 15,9 → 2-kloretanol 14,3).
- Fenolene: CH₃ er elektrondonerende og destabiliserer fenoksidet; NO₂ i para er sterkt elektrontrekkende (induktivt **og** ved resonans) → **p-metylfenol < fenol < p-nitrofenol** (pKa ca. 10,3 / 10,0 / 7,2).

**Svar: sykloheksanol < 2-klorsykloheksanol < p-metylfenol < fenol < p-nitrofenol.**
:::

```smiles-row
OC1CCCCC1 | Sykloheksanol – svakest
OC1CCCCC1Cl | 2-klorsykloheksanol
Cc1ccc(O)cc1 | p-metylfenol (4-metylfenol)
Oc1ccccc1 | Fenol
Oc1ccc(cc1)[N+](=O)[O-] | p-nitrofenol – sterkest
```

:::feil
- Å sette 2-klorsykloheksanol over fenolene fordi «Cl er sterkt elektrontrekkende»: induktiv effekt fra én Cl er langt svakere enn resonansstabilisering av fenoksid.
- Å tro at p-metylfenol er surere enn fenol: CH₃ **donerer** elektroner → svakere syre. Distraktoren «… < p-nitrofenol < p-metylfenol» går nettopp i denne fella.
- «Synkende syrestyrke» (h2018, h2021) betyr sterkest først – snu rekkefølgen: p-nitrofenol > fenol > p-metylfenol > 2-klorsykloheksanol > sykloheksanol.
:::

## Typiske reaksjoner

- **Syre–base**: reagerer med sterke baser (NaOH) og danner fenoksid (vannløselig salt).
- **Esterdannelse** på fenolisk OH: salisylsyre + eddiksyreanhydrid → acetylsalisylsyre (aspirin).
- Ringen aktiveres for **elektrofil aromatisk substitusjon** (OH er orto/para-dirigerende).
- Fenoler oksideres lett (antioksidanter).

## I biologien

- **[Tyrosin](/medod1/proteiner/aminosyrer/tyrosin)** (aminosyre) har fenolsidekjede; **katekolaminer** (dopamin, noradrenalin, adrenalin) har en benzen-1,2-diol (katekol)-ring.
- **Paracetamol** og **salisylsyre/aspirin** er fenolderivater; vanillin (4-hydroksy-3-metoksybenzaldehyd).
- **Historie**: Runge isolerte fenol fra steinkulltjære (1837); Joseph Lister brukte fenol («karbolsyre») som antiseptikum ved sårbehandling.

```smiles-row
N[C@@H](Cc1ccc(O)cc1)C(=O)O | L-tyrosin
COc1cc(C=O)ccc1O | Vanillin
```

:::eksamen
v2023: «P-metylfenol er en sterkere syre enn fenol» er **feil** (CH₃ er elektrondonerende → svakere). Fenol er sterkere syre enn sykloheksanol og enn 2-klorsykloheksanol. v2024: fenol er surere fordi fenolat-anionet stabiliseres ved resonans med ringen.
:::

## Test deg selv

:::sjekk[Hvorfor er fenol ca. en million ganger surere enn etanol?]
pKa 10 mot ~16 (6 enheter = 10⁶). I fenoksid er den negative ladningen delokalisert over O og orto/para-karbonene i ringen (resonans). I etoksid er ladningen lokalisert på O. Mer stabil konjugert base → sterkere syre.
:::

:::sjekk[Ranger etter økende syrestyrke: 4-nitrofenol, fenol, 4-metylfenol.]
4-metylfenol < fenol < 4-nitrofenol. Metyl donerer elektroner (destabiliserer fenoksid), nitro trekker elektroner (stabiliserer fenoksid).
:::

:::sjekk[Hvorfor er 2-klorsykloheksanol en sterkere syre enn sykloheksanol, men svakere enn fenol?]
Cl trekker elektrontetthet gjennom σ-bindingene (induktiv effekt) og stabiliserer alkoksidet litt. Men O⁻ sitter på et sp³-karbon og kan ikke delokaliseres; i fenoksid spres ladningen ved resonans over ringen, som er en mye større stabilisering.
:::

:::sjekk[Hva er IUPAC-navnet på en metylfenol med CH₃ i meta-stilling?]
3-metylfenol. OH-karbonet er C1, metyl på C3; systematisk navn bruker tall i stedet for «meta».
:::
