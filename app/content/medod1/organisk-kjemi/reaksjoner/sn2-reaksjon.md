---
title: SN2-reaksjon
summary: Bimolekylær nukleofil substitusjon i ett konsertert trinn – nukleofilen angriper fra baksiden mens den utgående gruppen forlater. Andre ordens kinetikk, krever lite sterisk hindring (metyl > 1° > 2°) og gir inversjon av konfigurasjonen.
category: substitusjon
tags: [nukleofil substitusjon, alkylhalid, inversjon, bimolekylær, Walden-inversjon]
related:
  - organisk-kjemi/reaksjoner/sn1-reaksjon
  - organisk-kjemi/reaksjoner/e2-reaksjon
  - organisk-kjemi/reaksjoner/e1-reaksjon
  - organisk-kjemi/grunnlag/kiralitet-og-r-s
  - organisk-kjemi/funksjonelle-grupper/halogenalkaner
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-2b-3--8128218.pdf
    pages: "2-12, 17, 22-24"
  - file: medod1/exercises/oppgaver-sn1-sn2-e1-e2-med-losninger--8122254.pdf
  - file: medod1/exercises/kollokvier-organisk-kjemi--7794158.pdf
  - file: medod1/exercises/kollokvie-organisk-kjemi-medod1-losningsforslag-2024--8157258.doc
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
  - file: medod1/exams/2025-medod1-h2025-med-svar--7447077.pdf
  - file: medod1/exams/2024-medod1-ny-v2024-med-svar--5897534.pdf
fields:
  Type: Nukleofil substitusjon
  Trinn: 1 (konsertert)
  Kinetikk: 2. orden, k[RX][Nu]
  Substrat: metyl > 1° > 2° (ikke 3°)
  Løsemiddel: polart aprotisk
  Stereokjemi: Inversjon
---

## Oversikt

**S** = substitusjon, **N** = nukleofil, **2** = bimolekylær: *to* species (alkylhalid og nukleofil) deltar i det hastighetsbestemmende trinnet. En nukleofil (Nu⁻) erstatter et halogen (X) på et sp³-karbon:

$$\ce{Nu^- + R-X -> R-Nu + X^-}$$

Forelesningens eksempel:

$$\ce{HO^- + CH3-Br -> CH3-OH + Br^-}$$

Halogenet er elektronegativt og gjør C–X-bindingen polar (Cδ⁺–Xδ⁻); δ⁺-karbonet er elektrofilen.

## Mekanisme

Ett trinn – binding dannes og brytes **samtidig** (konsertert):

1. Nukleofilens ledige elektronpar angriper δ⁺-karbonet fra **baksiden**, 180° fra den utgående gruppen.
2. Mens C–Nu-bindingen dannes, svekkes C–X-bindingen; elektronparet i C–X går over til X.
3. **Overgangstilstand**: karbonet er *pentakoordinert* – fullt bundet til tre grupper som ligger i ett plan, og delvis bundet til både Nu og X: $[\ce{HO}^{\delta-}\cdots\ce{C}\cdots\ce{Br}^{\delta-}]^{\ddagger}$.
4. De tre andre substituentene «slår over» som en paraply i vind; når Br⁻ har forlatt, er karbonet tetraedrisk igjen – med motsatt konfigurasjon.

```smiles-row
C[C@@H](Br)CC | (R)-2-brombutan
C[C@H](O)CC | (S)-butan-2-ol
```

$$(R)\text{-}\ce{CH3CH(Br)CH2CH3 + OH- -> }(S)\text{-}\ce{CH3CH(OH)CH2CH3 + Br-}$$

Energidiagram: én topp (overgangstilstanden), ingen intermediat.

## Betingelser og faktorer

| Faktor | Favoriserer SN2 | Begrunnelse |
|---|---|---|
| Substrat | **metyl > 1° > 2°**; 3° reagerer ikke | Store grupper skjermer baksiden (sterisk hindring) |
| Nukleofil | sterk/god: OH⁻, I⁻, CN⁻ | Nukleofilen er med i hastighetsbestemmende trinn |
| Løsemiddel | **polart aprotisk** (aceton, DMSO, DMF, acetonitril) | Solvaterer kationer, men lar anionet være «naket» og reaktivt |
| Utgående gruppe | I⁻ > Br⁻ > Cl⁻ >> F⁻ | Jo svakere base, jo bedre utgående gruppe |

**Utgående gruppe** (relative hastigheter for HO⁻ + RCH₂X): I 30 000, Br 10 000, Cl 200, F 1 – parallelt med pKa for HX (−10, −9, −7, 3,2). I⁻ er svakest base fordi HI er sterkest syre. RF er for lite reaktivt til SN2.

**Polart protisk løsemiddel** (H₂O, metanol, etanol) danner hydrogenbindinger rundt anioniske nukleofiler og **bremser** SN2.

$$\text{hastighet} = k[\text{alkylhalid}][\text{nukleofil}]$$

Dobling av [Nu] dobler hastigheten – i motsetning til SN1.

## Produkt og stereokjemi

- Produktet har nukleofilen der halogenet satt (OH⁻ → alkohol, CN⁻ → nitril, NH₃ → amin).
- **Inversjon av konfigurasjonen** (Walden-inversjon) på stereosenteret: (R)-2-brombutan → **(S)**-butan-2-ol. Produktet er optisk aktivt – ett enantiomer, ikke racemat.
- NB: R/S-bokstaven følger [CIP-prioritet](/medod1/organisk-kjemi/grunnlag/kiralitet-og-r-s); inversjon av romlig arrangement gir som regel, men ikke alltid, bytte R ↔ S. I pensumeksemplene (Br → OH) byttes bokstaven.

:::feil
«SN2 gir racemisk blanding» er feil – det er SN1. SN2 gir **ett** produkt med invertert konfigurasjon fordi angrepet bare kan skje fra baksiden.
:::

## Biologiske eksempler

- Enzymatiske **metyloverføringer** (f.eks. fra S-adenosylmetionin) er biologiske SN2-reaksjoner på et metylkarbon – metyl er det beste SN2-substratet (lærebokkunnskap, ikke vist i forelesningen).
- Dannelse av **kvartære ammoniumioner** (som i kolin, acetylkolin) skjer ved at nitrogenets ledige elektronpar angriper et alkylkarbon – nukleofil substitusjon.
- Alkylerende cellegift og karsinogener angriper nukleofile N i DNA-baser på samme måte.

## Sammenlign med

- [SN1](/medod1/organisk-kjemi/reaksjoner/sn1-reaksjon): to trinn via karbokation, 1. orden, 3° substrat, protisk løsemiddel, racemisering.
- [E2](/medod1/organisk-kjemi/reaksjoner/e2-reaksjon): samme bimolekylære kinetikk, men reagenset virker som **base** og tar et β-H → alken. Sterk/sterisk hindret base (t-BuO⁻) og varme gir E2; god nukleofil som er svak base (I⁻) gir SN2.
- Se tabellen og beslutningsguiden i [modulen](/medod1/organisk-kjemi/reaksjoner).

:::eksamen
- V2026: «Hva kjennetegner SN2?» → ett trinn og inversjon.
- H2025: (R)-2-brombutan + OH⁻ (SN2) → **(S)**-butan-2-ol; «SN2 favoriseres av primært alkylhalid».
- V2024: «SN2-hastigheten øker med flere alkylgrupper» er **feil** (sterisk hindring senker den).
:::

## Test deg selv

:::sjekk[Hvorfor gir SN2 inversjon av konfigurasjonen?]
Nukleofilen må angripe fra baksiden, motsatt den utgående gruppen. I overgangstilstanden ligger de tre andre substituentene i ett plan, og når X forlater, «vipper» de over til motsatt side – som en paraply som vrenges.
:::

:::sjekk[Hvorfor reagerer ikke 2-brom-2-metylpropan via SN2?]
Det er et tertiært alkylhalid: tre metylgrupper skjermer baksiden av karbonet, så nukleofilen kommer ikke til. Tertiære alkylhalider går via SN1/E1 (svak base) eller E2 (sterk base).
:::

:::sjekk[Hva skjer med hastigheten i en SN2-reaksjon hvis konsentrasjonen av nukleofilen dobles?]
Den dobles, fordi hastighet = k[RX][Nu] – nukleofilen inngår i det hastighetsbestemmende (eneste) trinnet.
:::

:::sjekk[Hvorfor er aceton et bedre løsemiddel enn vann for SN2 med OH⁻?]
Aceton er polart aprotisk – det kan ikke donere hydrogenbindinger og omgir derfor ikke anionet med et solvatskall. Nukleofilen forblir reaktiv. Vann (protisk) solvaterer OH⁻ sterkt og bremser angrepet.
:::

:::sjekk[Ranger CH₃I, CH₃Br, CH₃Cl og CH₃F etter SN2-reaktivitet, og begrunn.]
CH₃I > CH₃Br > CH₃Cl > CH₃F. Jo svakere base den utgående gruppen er (jo sterkere konjugert syre HX), jo lettere forlater den. I⁻ er svakest base, F⁻ sterkest – CH₃F er praktisk talt ureaktiv.
:::
