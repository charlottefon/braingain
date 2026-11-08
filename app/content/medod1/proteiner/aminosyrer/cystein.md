---
title: Cystein
summary: Polar aminosyre med tiol (–SH, pKa ≈ 8,3). Eneste aminosyre som danner kovalente disulfidbroer, og eneste L-aminosyre med R-konfigurasjon.
category: polar
tags: [polar, tiol, disulfidbro, kiralitet]
related:
  - proteiner/teori/proteinstruktur
  - proteiner/teori/folding-og-modifisering
  - proteiner/aminosyrer/metionin
  - organisk-kjemi/funksjonelle-grupper/tioler
  - organisk-kjemi/grunnlag/kiralitet-og-r-s
sources:
  - file: medod1/material/proteiner/proteiner-1-am-2026--8186375.pdf
    pages: "5, 8, 15, 21, 34, 35"
  - file: medod1/material/proteiner/proteiner-3-am-2026--8203206.pdf
    pages: "17"
fields:
  Trebokstavkode: Cys
  Énbokstavkode: C
  Sidekjede (kort): –CH₂–SH (tiol)
  pKa sidekjede: "8,3 (tiol)"
  Gruppe i forelesningen: Polar, uladet
  Konfigurasjon: L = R (unntak)
  Essensiell: nei (lages fra Met)
---

## Struktur

```smiles L-cystein
N[C@@H](CS)C(=O)O
```

To cysteiner oksidert til **cystin** (disulfid):

```smiles Cystin
N[C@@H](CSSC[C@H](N)C(=O)O)C(=O)O
```

## Sidekjeden

- **[Tiolgruppe](/medod1/organisk-kjemi/funksjonelle-grupper/tioler) (sulfhydryl, –SH)**, pKa ≈ 8,3 → stort sett protonert ved pH 7,4, men en del kan foreligge som tiolat (–S⁻).
- L-cystein har **R**-konfigurasjon ([CIP-regler](/medod1/organisk-kjemi/grunnlag/kiralitet-og-r-s); S i sidekjeden gir CH₂SH høyere CIP-prioritet enn COO⁻) – unntaket fra «L = S».
- Oksidasjon av to –SH gir en **disulfidbro (–S–S–)** + 2 H⁺ + 2 e⁻; reduksjon (f.eks. med **β-merkaptoetanol**) bryter den.

## Biologisk betydning

- Disulfidbroer er **kovalente** og stabiliserer **tertiær- og kvartærstruktur** (Miesfeld & McEvoy; noen bøker regner dem til primærstrukturen). De kan gå innen én kjede eller mellom kjeder.
- **Insulin:** A- og B-kjeden holdes sammen av to disulfidbroer.
- **α-keratin:** mange disulfidbroer → stivt (horn, klover); færre → fleksibelt (hår, ull).
- **Anfinsens forsøk** (ribonuklease) og **SDS-PAGE**: β-merkaptoetanol reduserer disulfidbroene så kjedene skilles helt.

:::eksamen
«Cystein er unik blant de polare fordi …» → sidekjeden kan danne **kovalente bindinger (disulfidbroer)** (H2025). «Hvilken forbindelse har en tiol?» → cystein (V2025).
:::

## Test deg selv

:::sjekk[Hvorfor er L-cystein R, når alle andre kirale L-aminosyrer er S?]
CIP-prioritet avgjøres av atomnummer. S (Z = 16) i CH₂SH gir sidekjeden høyere prioritet enn COO⁻ (O, Z = 8), så rekkefølgen og dermed bokstaven snus selv om den romlige oppbygningen er den samme.
:::

:::sjekk[Er dannelse av en disulfidbro en oksidasjon eller reduksjon? Hva bryter den?]
Oksidasjon (to –SH → –S–S– + 2H⁺ + 2e⁻). Reduksjonsmidler som β-merkaptoetanol bryter den.
:::

:::sjekk[Et protein gir ett bånd på 100 kDa i SDS-PAGE uten β-merkaptoetanol, men to bånd (60 og 40 kDa) med. Tolk.]
Proteinet består av to ulike kjeder (60 + 40 kDa) holdt sammen av disulfidbro(er); β-merkaptoetanol reduserer broene.
:::

:::sjekk[Hvorfor er hår mer fleksibelt enn horn, selv om begge er α-keratin?]
Horn har mange disulfidbroer mellom heliksene og blir stivt; hår har færre.
:::
