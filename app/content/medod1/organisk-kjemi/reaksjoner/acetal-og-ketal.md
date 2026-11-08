---
title: Acetal- og ketaldannelse (glykosidbinding)
summary: Et hemiacetal/hemiketal reagerer med enda en alkohol under syrekatalyse – OH byttes med OR og vann avspaltes – og gir et acetal/ketal med to eterlike –OR på samme karbon. For sukker heter produktet glykosid, og bindingen glykosidbinding; disakkarider og polysakkarider er acetaler.
category: karbonyl
tags: [acetal, ketal, glykosid, glykosidbinding, kondensasjon, hydrolyse, syrekatalyse]
related:
  - organisk-kjemi/reaksjoner/hemiacetal-og-hemiketal
  - organisk-kjemi/reaksjoner/nukleofil-addisjon-til-karbonyl
  - organisk-kjemi/biomolekyler/glykosidbindinger-og-disakkarider
  - organisk-kjemi/biomolekyler/polysakkarider
  - organisk-kjemi/reaksjoner/sn1-reaksjon
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-4a-3--8190320.pdf
    pages: "27-28"
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-5--8135969.pdf
    pages: "21-26"
  - file: medod1/exercises/karbohydrater-oppgaver--8155388.pdf
  - file: medod1/exams/2023-medod1-h2023-med-svar--5670979.pdf
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
fields:
  Type: Nukleofil substitusjon på hemiacetal (kondensasjon)
  Reagens: alkohol + syrekatalysator (H⁺)
  Biprodukt: H₂O
  Kjennetegn: to –OR på samme C
  Sukker: glykosid, ikke-reduserende ved det C-atomet
---

## Oversikt

$$\ce{R-CHO + R'OH <=>[H^+] R-CH(OH)OR' ->[R''OH, H^+] R-CH(OR'')OR' + H2O}$$

$$\ce{CH3CHO + 2 CH3CH2OH <=>[H^+] CH3CH(OCH2CH3)2 + H2O}\quad\text{(acetal)}$$
$$\ce{CH3COCH3 + 2 CH3CH2OH <=>[H^+] (CH3)2C(OCH2CH3)2 + H2O}\quad\text{(ketal)}$$

- **Acetal:** to eterlike –OR på samme karbon som en gang var et **aldehyd**karbon.
- **Ketal:** det samme fra et **keton**.

```smiles-row
CC(O)OCC | hemiacetal
CC(OCC)OCC | acetal (1,1-dietoksyetan)
```

## Mekanisme

Syrekatalysert, via et resonansstabilisert kation (lærebokmekanisme):

1. **Protonering** av –OH i hemiacetalet → –OH₂⁺ (god utgående gruppe).
2. **Vann forlater**; ledig elektronpar på naboens –OR-oksygen stabiliserer plussladningen → **oksokarbeniumion** (R–CH=O⁺R′). Dette er SN1-liknende.
3. **Alkoholen angriper** karbonet (nukleofilt).
4. **Deprotonering** → acetal + H⁺ tilbake.

For sukker: den anomere –OH byttes ut med –OR (nukleofil substitusjon på det anomere karbonet):

$$\alpha\text{-D-glukose} + \ce{CH3OH} \xrightleftharpoons{\ce{H+}} \text{metyl-}\alpha\text{-D-glukosid} + \ce{H2O}$$

```smiles-row
C([C@@H]1[C@H]([C@@H]([C@H]([C@H](O1)O)O)O)O)O | α-D-glukopyranose
C([C@@H]1[C@H]([C@@H]([C@H]([C@H](O1)OC)O)O)O)O | metyl-α-D-glukopyranosid
```

## Betingelser og faktorer

- Krever **syrekatalyse** (hemiacetaldannelsen gjør ikke).
- Likevekt: overskudd alkohol/fjerning av vann → acetal; overskudd vann + syre → **hydrolyse** tilbake til aldehyd + alkoholer.
- Acetaler er **stabile i nøytral og basisk løsning**, men spaltes av syre (eller enzymer – glykosidaser som amylase, laktase).

## Produkt og stereokjemi

- Acetalkarbonet har ingen fri –OH → kan **ikke åpnes** til aldehyd uten hydrolyse → **ikke-reduserende** og **mutaroterer ikke**. Anomerkonfigurasjonen (α eller β) er låst.
- Både α- og β-glykosid kan dannes kjemisk; enzymer lager ett bestemt.

## Biologiske eksempler

**Glykosidbinding** = binding mellom det anomere karbonet og en –OR-gruppe. Disakkarider dannes ved **kondensasjon** (H₂O avspaltes) og spaltes ved **hydrolyse**:

- **Maltose:** α-D-Glc(1→4)D-Glc – ett acetal + ett fritt hemiacetal → reduserende.
- **Laktose:** β-D-Gal(1→4)D-Glc – reduserende.
- **Sukrose:** α-D-Glc(1→2)β-D-Fru – begge anomere C bundet (acetal + ketal) → ikke-reduserende.
- **Stivelse, glykogen, cellulose** er polyacetaler.

Se [glykosidbindinger og disakkarider](/medod1/organisk-kjemi/biomolekyler/glykosidbindinger-og-disakkarider).

## Sammenlign med

- [Hemiacetal](/medod1/organisk-kjemi/reaksjoner/hemiacetal-og-hemiketal): ett –OR, reversibelt uten katalysator, reduserende.
- [Forestring](/medod1/organisk-kjemi/reaksjoner/forestring): også syrekatalysert kondensasjon med alkohol, men på en karboksylsyre (gir ester, ikke acetal).
- Eter (R–O–R′): bare ett O på karbonet; acetal har to O på samme C.

:::feil
«Et acetal har tre eterlike OR-grupper» er feil (H2023) – det har **to** OR på samme karbon. Aceton + overskudd etanol + syre gir et ketal (H2023: riktig utsagn).
:::

## Test deg selv

:::sjekk[Hva er forskjellen mellom et hemiacetal og et acetal strukturelt og i betingelser?]
Hemiacetal: –OH + –OR på samme C; dannes reversibelt av én alkohol uten katalysator. Acetal: –OR + –OR; krever en alkohol til, syrekatalyse, og vann avspaltes.
:::

:::sjekk[Hvorfor er metyl-α-D-glukosid ikke-reduserende, mens α-D-glukose er reduserende?]
I glykosidet er den anomere –OH byttet med –OCH₃ (acetal). Ringen kan ikke åpnes til aldehyd uten hydrolyse, så Cu²⁺/Ag⁺ reduseres ikke.
:::

:::sjekk[Hva kalles reaksjonen der to monosakkarider bindes sammen og vann avspaltes?]
Kondensasjonsreaksjon (glykosidbindingsdannelse). Den omvendte er hydrolyse.
:::

:::sjekk[Hvorfor spaltes glykosidbindinger lett i syre, men ikke i base?]
Spaltingen starter med protonering av et acetaloksygen slik at en god utgående gruppe dannes; i base finnes ingen slik aktivering, og –OR⁻ er en dårlig utgående gruppe.
:::
