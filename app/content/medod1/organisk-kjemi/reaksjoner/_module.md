---
title: Reaksjoner
type: catalog
order: 3
summary: Alle reaksjonstypene i pensum – substitusjon, eliminasjon, addisjon, redoks, karbonyl- og syrederivatreaksjoner – med mekanisme, betingelser, produkt, stereokjemi og biologiske eksempler.
categories:
  - { id: substitusjon, title: Substitusjon }
  - { id: eliminasjon, title: Eliminasjon }
  - { id: addisjon, title: Addisjon }
  - { id: redoks, title: Oksidasjon og reduksjon }
  - { id: karbonyl, title: Karbonylreaksjoner }
  - { id: syrederivater, title: Karboksylsyrederivater }
template: [Oversikt, Mekanisme, Betingelser og faktorer, Produkt og stereokjemi, Biologiske eksempler, Sammenlign med, Test deg selv]
---

## Slik bruker du katalogen

Hver reaksjon har samme oppbygning: **hva skjer** (Oversikt) → **hvordan** (Mekanisme, med elektronflyt i ord, likninger og SMILES av nøkkelspecies) → **når** (Betingelser og faktorer) → **hva kommer ut** (Produkt og stereokjemi) → **hvor i kroppen** (Biologiske eksempler) → **hva den forveksles med** (Sammenlign med).

Grunnbegreper som går igjen:

- **Nukleofil** = elektronpardonor, elektronrik (OH⁻, Cl⁻, NH₃, H₂O). **Elektrofil** = elektronparakseptor, elektronfattig (H⁺, karbokationer R₃C⁺, δ⁺-karbonet i C–X og C=O).
- **Utgående gruppe** (leaving group): jo svakere base, jo bedre: I⁻ > Br⁻ > Cl⁻ > F⁻; H₂O er god, OH⁻ er dårlig (derfor må alkoholer protoneres først).
- **Karbokationstabilitet**: 3° > 2° > 1° > metyl.
- **Organisk oksidasjon**: flere C–O-bindinger og/eller færre C–H-bindinger. **Reduksjon**: omvendt.
- **Kondensasjon**: to molekyler kobles og H₂O avspaltes (ester, amid, glykosid, peptid). **Hydrolyse**: det motsatte – vann spalter bindingen.

Funksjonelle grupper og navn: se [Funksjonelle grupper](/medod1/organisk-kjemi/funksjonelle-grupper) og [Navnsetting](/medod1/organisk-kjemi/navnsetting).

## SN1 vs SN2 vs E1 vs E2

| | SN2 | SN1 | E2 | E1 |
|---|---|---|---|---|
| Hva skjer | Nu erstatter X | Nu erstatter X | H og X fjernes → alken | H og X fjernes → alken |
| Antall trinn | 1 (konsertert) | 2 (karbokation) | 1 (konsertert) | 2 (karbokation) |
| Hastighetslov | $k[\text{RX}][\text{Nu}]$ – 2. orden | $k[\text{RX}]$ – 1. orden | $k[\text{RX}][\text{base}]$ – 2. orden | $k[\text{RX}]$ – 1. orden |
| Substrat | metyl > 1° > 2° (aldri 3°) | 3° > 2° | 2°, 3° | 3° > 2° |
| Reagens | sterk nukleofil (OH⁻, I⁻, CN⁻) | svak nukleofil (H₂O, ROH, NH₃) | **sterk base** (OH⁻, RO⁻, t-BuO⁻) | svak base (H₂O, ROH) |
| Løsemiddel | polart **aprotisk** (aceton, DMSO) | polart **protisk** (H₂O, metanol, etanol) | mindre avgjørende | polart protisk |
| Temperatur | lav/moderat | lav favoriserer substitusjon | høy | høy |
| Stereokjemi / produkt | **inversjon** (f.eks. (R) → (S)), ett enantiomer | racemisering (begge konfigurasjoner, typisk 50–70 % invertert) | alken – mest substituerte dominerer | alken – mest substituerte dominerer |
| Karbokation-intermediat | nei | ja | nei | ja |
| Omleiring mulig* | nei | ja | nei | ja |
| Utgående gruppe | I⁻ > Br⁻ > Cl⁻ > F⁻ | I⁻ > Br⁻ > Cl⁻ > F⁻ | samme | samme |

*Omleiring (rearrangement) av karbokationer er ikke gjennomgått i forelesningen, men følger av at SN1/E1 går via et fritt karbokation. Ikke forvent eksamensspørsmål om det.

Felles for **SN1 ↔ E1**: unimolekylære, samme karbokation – lav temperatur og nukleofilt angrep gir substitusjon, høy temperatur gir eliminasjon. Felles for **SN2 ↔ E2**: bimolekylære, ingen karbokation – god nukleofil og lite sterisk hindring gir substitusjon, sterk base og høy temperatur gir eliminasjon.

## Hvilken reaksjon skjer?

**Alkylhalid (R–X) + reagens:**

1. **Hva slags karbon bærer X?**
   - Metyl eller **1°** → **SN2** (med sterk/god nukleofil).
   - **3°** → aldri SN2. Sterk base → **E2**. Svak nukleofil/base i polart protisk løsemiddel → **SN1/E1** (varme → E1).
   - **2°** → konkurranse: sterk base → **E2**; god nukleofil som er svak base (I⁻) → **SN2**; svak nukleofil i protisk løsemiddel → SN1/E1.
2. **Er reagenset en sterk base eller en god nukleofil?** I⁻ (NaI) = god nukleofil, svak base → SN2. tert-butoksid (t-BuO⁻) = sterk, sterisk hindret base → E2.
3. **Løsemiddel?** Polart protisk stabiliserer ioner → SN1/E1. Polart aprotisk lar anionisk nukleofil være «naken» og reaktiv → SN2.
4. **Temperatur?** Høy temperatur favoriserer eliminasjon.

**Andre utgangsstoffer:**

| Utgangsstoff + reagens | Reaksjon |
|---|---|
| Alkan + Cl₂/Br₂, UV-lys/varme | [Radikal halogenering](/medod1/organisk-kjemi/reaksjoner/radikal-halogenering) |
| Alkan + O₂ | [Forbrenning](/medod1/organisk-kjemi/reaksjoner/forbrenning) |
| Alken + H₂ (Ni/Pd/Pt) | [Hydrogenering](/medod1/organisk-kjemi/reaksjoner/hydrogenering) |
| Alken + Cl₂/Br₂ | [Halogenering av alkener](/medod1/organisk-kjemi/reaksjoner/halogenering-av-alkener) |
| Alken + HBr/HCl | [Hydrohalogenering](/medod1/organisk-kjemi/reaksjoner/hydrohalogenering) (Markovnikov) |
| Alken + H₂O, H⁺ | [Hydratisering](/medod1/organisk-kjemi/reaksjoner/hydratisering) (Markovnikov) |
| Mange alkenmolekyler | [Polymerisering](/medod1/organisk-kjemi/reaksjoner/polymerisering) |
| Benzen + HNO₃/H₂SO₄ (eller annen E⁺) | [Elektrofil aromatisk substitusjon](/medod1/organisk-kjemi/reaksjoner/elektrofil-aromatisk-substitusjon) |
| Alkohol + sterk syre, varme | [Dehydrering](/medod1/organisk-kjemi/reaksjoner/dehydrering-av-alkoholer) (eliminasjon → alken) |
| Alkohol + oksidasjonsmiddel / NAD⁺ | [Oksidasjon av alkoholer](/medod1/organisk-kjemi/reaksjoner/oksidasjon-av-alkoholer) |
| Aldehyd + oksidasjonsmiddel (Tollens, Benedict) | [Oksidasjon av aldehyder](/medod1/organisk-kjemi/reaksjoner/oksidasjon-av-aldehyder) |
| Aldehyd/keton + NaBH₄, LiAlH₄, H₂/kat., NADH | [Reduksjon](/medod1/organisk-kjemi/reaksjoner/reduksjon-av-aldehyder-og-ketoner) |
| Aldehyd/keton + 1 alkohol | [Hemiacetal/hemiketal](/medod1/organisk-kjemi/reaksjoner/hemiacetal-og-hemiketal) |
| Hemiacetal + alkohol, H⁺ | [Acetal/ketal, glykosid](/medod1/organisk-kjemi/reaksjoner/acetal-og-ketal) |
| Aldehyd + primært amin | [Imindannelse](/medod1/organisk-kjemi/reaksjoner/imindannelse) |
| Ketose i base | [Keto–enol-tautomeri](/medod1/organisk-kjemi/reaksjoner/keto-enol-tautomeri) |
| Karboksylsyre + alkohol, H⁺ | [Forestring](/medod1/organisk-kjemi/reaksjoner/forestring) |
| Ester + vann (H⁺ eller OH⁻) | [Esterhydrolyse og forsåpning](/medod1/organisk-kjemi/reaksjoner/esterhydrolyse-og-forsaapning) |
| Karboksylsyre + amin | [Amiddannelse og amidhydrolyse](/medod1/organisk-kjemi/reaksjoner/amiddannelse-og-hydrolyse) |

:::eksamen
SN1/SN2/E1/E2 kommer med 2–4 spørsmål på nesten hver eksamen (V2026, H2025, V2025, V2024, H2024, H2023): «hvilket utsagn er riktig/feil», substrat + reagens → mekanisme, og produkt med stereokjemi ((R)-2-brombutan + OH⁻ via SN2 → (S)-butan-2-ol). HBr + propen/1-buten (Markovnikov) kommer på **hver** eksamen.
:::
