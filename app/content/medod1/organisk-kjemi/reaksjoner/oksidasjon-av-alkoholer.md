---
title: Oksidasjon av alkoholer
summary: Primære alkoholer oksideres til aldehyd og videre til karboksylsyre, sekundære til keton, tertiære oksideres ikke (ingen H på karbinolkarbonet). I kroppen katalyseres det av dehydrogenaser med NAD⁺ som akseptor – etanol → acetaldehyd → acetat.
category: redoks
tags: [oksidasjon, alkohol, aldehyd, keton, karboksylsyre, ADH, NAD+, dikromat, alkotest]
related:
  - organisk-kjemi/reaksjoner/oksidasjon-av-aldehyder
  - organisk-kjemi/reaksjoner/reduksjon-av-aldehyder-og-ketoner
  - organisk-kjemi/reaksjoner/dehydrering-av-alkoholer
  - lab/ovelser/enzymkinetikk-adh
  - proteiner/teori/enzymregulering
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-3a--8116858.pdf
    pages: "4, 10-11, 15-21"
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-4a-3--8190320.pdf
    pages: "14"
  - file: medod1/exercises/oppgaver-alkoholer-fenoler-etere--8156711.pdf
  - file: medod1/exercises/kollokvier-organisk-kjemi--7794158.pdf
  - file: medod1/exercises/kollokvie-organisk-kjemi-medod1-losningsforslag-2024--8157258.doc
  - file: medod1/exams/2024-medod1-h2024-med-svar--7298977.pdf
  - file: medod1/exams/2024-medod1-ny-v2024-med-svar--5897534.pdf
fields:
  Type: Oksidasjon (dehydrogenering)
  Primær alkohol: aldehyd → karboksylsyre
  Sekundær alkohol: keton
  Tertiær alkohol: ingen reaksjon
  Biologisk: dehydrogenase + NAD⁺
---

## Oversikt

**Organisk oksidasjon** = flere C–O-bindinger og/eller færre C–H-bindinger. Ved oksidasjon av en alkohol fjernes H fra O–H og H fra karbinolkarbonet (C–OH); det dannes C=O. Netto «–H₂» – skrives ofte [O]:

$$\ce{R-CH(OH)-R' ->[[O]] R-CO-R'}$$

| Alkohol | Produkt | Eksempel |
|---|---|---|
| **Primær** (RCH₂OH) | **aldehyd** → med mer [O] **karboksylsyre** | butan-1-ol → butanal → butansyre |
| **Sekundær** (R₂CHOH) | **keton** (stopper der) | propan-2-ol → propanon; sykloheksanol → sykloheksanon |
| **Tertiær** (R₃COH) | **ingen reaksjon** | – |
| Metanol | metanal (formaldehyd) → metansyre | regnes som primær |

```smiles-row
CCCCO | butan-1-ol
CCCC=O | butanal
CCCC(=O)O | butansyre
CC(O)C | propan-2-ol
CC(=O)C | propanon
CC(C)(C)O | 2-metylpropan-2-ol (oksideres ikke)
```

## Mekanisme

I pensum vises oksidasjonen som tap av to H (ikke trinnvis mekanisme). Logikken:

1. H fra O–H og H fra C–OH fjernes (som H⁺ + H⁻ til NAD⁺, eller til et uorganisk oksidasjonsmiddel).
2. Elektronparet fra C–H-bindingen danner π-bindingen i C=O.

Biologisk (dehydrogenase):

$$\ce{CH3CH2OH + NAD^+ -> CH3CHO + NADH + H^+}$$

Alkoholen **oksideres**, NAD⁺ **reduseres** til NADH (tar imot et hydridion, H⁻). Aldehyd → syre skjer ved at et aldehydhydrat oksideres på samme måte (se [oksidasjon av aldehyder](/medod1/organisk-kjemi/reaksjoner/oksidasjon-av-aldehyder)).

## Betingelser og faktorer

- **Primær alkohol:** forsiktig kontrollerte betingelser stopper ved aldehyd; overskudd av oksidasjonsmiddel gir karboksylsyre.
- **Tertiær alkohol** har ingen H på karbinolkarbonet – C kan ikke danne C=O uten å bryte en C–C-binding → «Det finnes ikke!» (forelesningen).
- Oksidasjonsmidler: dikromat (Cr₂O₇²⁻) i sur løsning, i kroppen NAD⁺/NADP⁺ via dehydrogenaser.

## Produkt og stereokjemi

- Stereosenteret i en sekundær alkohol forsvinner når karbonet blir plant (sp²) i ketonet.
- Aldehyd er mellomprodukt for primære alkoholer; keton er sluttprodukt for sekundære.

## Biologiske eksempler

**Etanolmetabolisme i leveren:**

$$\ce{CH3CH2OH ->[ADH][NAD^+ -> NADH] CH3CHO ->[ALDH][NAD^+ -> NADH] CH3COO^-}$$

Etanol → (alkoholdehydrogenase, ADH) → **acetaldehyd** → (aldehyddehydrogenase, ALDH) → **acetat** → acetyl-CoA (i muskel) → sitronsyresyklus. Acetaldehyd og frie radikaler er de viktigste toksiske produktene: acetaldehyd danner addukter med proteiner → fettlever, alkoholhepatitt, cirrhose; acetaldehyd er karsinogent.

**Metanolforgiftning:** CH₃OH + NAD⁺ → CH₂O (formaldehyd) + NADH + H⁺ (ADH). Små mengder (ca. 15 ml) kan gi blindhet, 100–250 ml kan være dødelig. **Etanol** er behandlingsalternativ – den konkurrerer om ADH ([kompetitiv hemming](/medod1/proteiner/teori/enzymregulering)) og bremser dannelsen av de toksiske metabolittene. ADH-kinetikk måles i [labøvelsen](/medod1/lab/ovelser/enzymkinetikk-adh).

**Alkotest (dikromat):** etanol i utåndingsluft oksideres av rød-oransje dikromat (Cr₂O₇²⁻) i sur løsning; kromet reduseres til grønt Cr³⁺:

$$\ce{CH3CH2OH + Cr2O7^{2-} ->[H^+] CH3COOH + Cr^{3+}}\quad\text{(ubalansert)}$$

Jo mer alkohol, jo lenger strekker den grønne fargen seg i røret.

:::klinikk
Metanol- og etylenglykolforgiftning behandles med ADH-hemmer (fomepizol) eller etanol, nettopp fordi toksisiteten skyldes oksidasjonsproduktene (formaldehyd/maursyre), ikke alkoholen selv.
:::

## Sammenlign med

- [Reduksjon av aldehyder/ketoner](/medod1/organisk-kjemi/reaksjoner/reduksjon-av-aldehyder-og-ketoner): den motsatte reaksjonen (aldehyd → 1° alkohol, keton → 2° alkohol).
- [Dehydrering](/medod1/organisk-kjemi/reaksjoner/dehydrering-av-alkoholer): fjerner H₂O og gir C=C; oksidasjon fjerner 2 H og gir C=O.

:::eksamen
- H2024: etanol + kaliumdikromat i sur løsning → **etansyre**; «hvilken er en primær alkohol?» → etanol.
- V2024: metanolforgiftning – etanol bremser omdannelsen fordi den konkurrerer om enzymene; ADH bruker NAD⁺ og Zn²⁺ som kofaktor.
- Oppgavesettet: ADH: «etanol oksideres til etanal; NAD⁺ reduseres til NADH».
:::

## Test deg selv

:::sjekk[Hvorfor kan ikke en tertiær alkohol oksideres?]
Karbinolkarbonet har ingen H. For å lage C=O måtte en C–C-binding brytes, noe vanlige oksidasjonsmidler ikke gjør.
:::

:::sjekk[Hva dannes ved kontrollert og ved fullstendig oksidasjon av butan-1-ol?]
Kontrollert: butanal (aldehyd). Fullstendig (overskudd oksidasjonsmiddel): butansyre.
:::

:::sjekk[I ADH-reaksjonen – hva oksideres og hva reduseres?]
Etanol oksideres til etanal (acetaldehyd); NAD⁺ reduseres til NADH (tar imot hydrid) + H⁺ frigjøres.
:::

:::sjekk[Hvorfor gir etanol fargeomslag i en dikromat-alkotest?]
Etanol oksideres (til eddiksyre), mens oransje Cr₂O₇²⁻ reduseres til grønt Cr³⁺.
:::

:::sjekk[Hvorfor brukes etanol ved metanolforgiftning?]
Etanol konkurrerer med metanol om ADH, slik at mindre metanol oksideres til toksisk formaldehyd (og videre maursyre); metanol skilles ut uomdannet.
:::
