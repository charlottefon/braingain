---
title: Histidin
summary: Basisk aminosyre med imidazolring (pKa ≈ 6,0) – bare delvis protonert ved fysiologisk pH. Ideell syre-base-katalysator i aktive seter, og proksimal/distal His binder hem i Mb/Hb.
category: basisk
tags: [basisk, imidazol, aktivt sete, hemoglobin, Bohr-effekt]
related:
  - proteiner/teori/myoglobin-og-hemoglobin
  - proteiner/teori/enzymkatalyse
  - proteiner/aminosyrer/serin
  - proteiner/aminosyrer/lysin
  - generell-kjemi/regnetyper/isoelektrisk-punkt
  - lab/ovelser/titrering-aminosyrer
sources:
  - file: medod1/material/proteiner/proteiner-1-am-2026--8186375.pdf
    pages: "8, 12-13, 15"
  - file: medod1/material/proteiner/proteiner-2-am-2026--8198447.pdf
    pages: "11-13, 22-23"
  - file: medod1/exams/2024-medod1-h2024-med-svar--7298977.pdf
fields:
  Trebokstavkode: His
  Énbokstavkode: H
  Sidekjede (kort): –CH₂–imidazol
  pKa sidekjede: "6,0 (imidazol)"
  Gruppe i forelesningen: Positivt ladet (basisk), men bare delvis protonert ved pH 7,4
  Essensiell: ja
---

## Struktur

```smiles L-histidin
N[C@@H](Cc1c[nH]cn1)C(=O)O
```

## Sidekjeden

- **Imidazolring** (aromatisk, to N). pKa ≈ **6,0** – nær fysiologisk pH.
- Ved pH 7,4: [base]/[syre] = 10^(7,4−6,0) ≈ 25 → bare ca. 4 % protonert. «His kan være enten nøytral eller positiv under ulike betingelser.»
- Kan både **avgi og ta opp H⁺** ved fysiologisk pH, og koordinere metallioner (Fe i hem).

## Biologisk betydning

- **Aktive seter:** god generell syre/base-katalysator, f.eks. **His57** i chymotrypsins katalytiske triade (Ser195–His57–Asp102).
- **Myoglobin/hemoglobin:**
  - **Proksimal His (F8)** er femte ligand til Fe²⁺ i hem; når O₂ binder trekkes Fe inn i porfyrinplanet og His F8 + F-heliksen flytter seg → konformasjonsendringen bak kooperativiteten.
  - **Distal His (E7)** H-binder bundet O₂, hindrer oksidasjon til Fe³⁺-superoksid og gir steriske begrensninger for CO-binding.
- **Bohr-effekten:** β-**His146** tar opp H⁺ i deoksy-Hb og danner saltbro med Asp94 → stabiliserer T-tilstanden.
- 2,3-BPG-lommen inneholder β-His2 og β-His143.

:::eksamen
His i aktive seter: «pKa gjør at den kan veksle mellom protonert og deprotonert → god syre-base-katalysator ved fysiologisk pH» (H2024). His (pKa 6,0) ved pH 5,0 → **positiv** (H2025). Enzym som trenger én protonert og én deprotonert His (pKa 6) har optimum ved **pH 6** (V2023). pI for fri histidin (pKa 1,82 / 6,00 / 9,17) = (6,00 + 9,17)/2 = **7,59** (H2022) – se [Isoelektrisk punkt](/medod1/generell-kjemi/regnetyper/isoelektrisk-punkt).
:::

## Test deg selv

:::sjekk[Hvorfor er nettopp histidin så vanlig som syre/base-katalysator i enzymer?]
pKa ≈ 6 ligger nær fysiologisk pH, så en betydelig andel finnes både protonert og deprotonert, og gruppen kan raskt avgi eller ta opp H⁺ under katalysen.
:::

:::sjekk[Hva er forskjellen på proksimal og distal histidin i myoglobin?]
Proksimal His (F8) er kovalent koordinert til Fe i hem (5. ligand). Distal His (E7) binder ikke Fe, men H-binder O₂, stabiliserer oksy-formen og begrenser CO-binding sterisk.
:::

:::sjekk[Regn ut pI for histidin med pKa 1,82 (α-COOH), 6,00 (imidazol) og 9,17 (α-NH₃⁺).]
Nøytral form er mellom tapet av H⁺ fra imidazol og fra α-NH₃⁺: pI = (6,00 + 9,17)/2 = 7,59.
:::

:::sjekk[Hvordan bidrar His146 i β-kjeden til Bohr-effekten?]
Ved lav pH protoneres His146, som da danner en saltbro med Asp94 i deoksy-Hb. Det stabiliserer T-tilstanden (lav O₂-affinitet) og fremmer O₂-frigjøring i vev.
:::
