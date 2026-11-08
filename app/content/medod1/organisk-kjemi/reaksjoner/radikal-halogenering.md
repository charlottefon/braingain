---
title: Radikal halogenering av alkaner
summary: Alkaner reagerer med Cl₂ eller Br₂ i UV-lys eller varme ved radikal kjedesubstitusjon – et H-atom byttes ut med et halogen. Tre faser – initiering, propagering, terminering. Eksempel – metan → klormetan → … → kloroform.
category: substitusjon
tags: [radikal, alkan, halogenering, kloroform, kjedereaksjon, UV-lys]
related:
  - organisk-kjemi/reaksjoner/forbrenning
  - organisk-kjemi/reaksjoner/halogenering-av-alkener
  - organisk-kjemi/reaksjoner/sn2-reaksjon
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-1--8106129.pdf
    pages: "37-45"
  - file: medod1/exercises/oppgaver-til-forlesning-oc1-organiske-reaksjoner--8112303.pdf
fields:
  Type: Radikal substitusjon
  Reagens: Cl₂ eller Br₂
  Betingelse: UV-lys (hν) eller varme
  Biprodukt: HCl / HBr
---

## Oversikt

Alkaner er lite reaktive (sterke C–C- og C–H-σ-bindinger, upolare). Med halogen og energi (lys/varme) skjer likevel en **radikal substitusjon**: en C–H-binding erstattes av en C–Cl-binding.

$$\ce{CH4 + Cl2 ->[h\nu] CH3Cl + HCl}$$

Produkt: **klormetan**. Reaksjonen fortsetter: CH₃Cl → CH₂Cl₂ → **CHCl₃ (triklormetan, kloroform)** → CCl₄. Nettolikning for kloroform:

$$\ce{CH4 + 3 Cl2 ->[h\nu] CHCl3 + 3 HCl}$$

## Mekanisme

Radikal kjedereaksjon – enkeltelektroner flyttes (homolytisk spalting), ikke elektronpar:

1. **Initiering:** lys/varme spalter Cl₂ **homolytisk** – hvert Cl-atom får ett elektron: $\ce{Cl2 ->[h\nu] 2 Cl^.}$
2. **Propagering** (kjeden holdes i gang):
   - Hydrogenabstraksjon: $\ce{R-H + Cl^. -> R^. + HCl}$
   - Alkylradikalet tar et Cl fra Cl₂ og danner et nytt Cl•: $\ce{R^. + Cl2 -> R-Cl + Cl^.}$
3. **Terminering** (to radikaler møtes og kjeden stopper): $\ce{Cl^. + Cl^. -> Cl2}$, $\ce{R^. + Cl^. -> R-Cl}$, $\ce{R^. + R^. -> R-R}$

```smiles-row
C | metan
[CH3] | metylradikal
CCl | klormetan
ClC(Cl)Cl | kloroform
```

## Betingelser og faktorer

- UV-lys (hν) eller varme for initieringen.
- Cl₂ eller Br₂.
- Produktet blir ofte en **blanding** (mono-, di-, tri-, tetrasubstituert) – vanskelig å stoppe på ett trinn. Overskudd av alkan gir mest monosubstitusjon.

## Produkt og stereokjemi

- Halogenalkaner (alkylhalider) + HX.
- Stereokjemi er ikke pensum for denne reaksjonen.
- Alkylhalidene er utgangsstoff for [SN1/SN2](/medod1/organisk-kjemi/reaksjoner/sn2-reaksjon) og [E1/E2](/medod1/organisk-kjemi/reaksjoner/e2-reaksjon).

## Biologiske eksempler

- **Kloroform** (CHCl₃) ble brukt som inhalasjonsanestetikum fra 1840-tallet (populært etter at dronning Victoria fødte under kloroform i 1853).
- Halogenerte alkaner/etere brukes fortsatt som anestetika (halotan = 2-brom-2-klor-1,1,1-trifluoretan), løsemidler og kjølemidler.
- Frie radikaler i kroppen (fra bl.a. etanolmetabolisme) skader lipider, proteiner og DNA via liknende kjedereaksjoner.

## Sammenlign med

- [Halogenering av alkener](/medod1/organisk-kjemi/reaksjoner/halogenering-av-alkener): **addisjon** av X₂ over C=C, trenger ikke lys, gir 1,2-dihalid og ingen HX.
- [Elektrofil aromatisk substitusjon](/medod1/organisk-kjemi/reaksjoner/elektrofil-aromatisk-substitusjon): også substitusjon av H, men via elektrofil og ioner, ikke radikaler.

## Test deg selv

:::sjekk[Hva er forskjellen på homolytisk og heterolytisk spalting?]
Homolytisk: hvert atom får ett av bindingselektronene → radikaler (Cl₂ → 2 Cl•). Heterolytisk: ett atom får begge elektronene → ioner (R–Br → R⁺ + Br⁻ i SN1).
:::

:::sjekk[Hvorfor kalles propagering en «kjede»?]
Hvert propageringstrinn forbruker ett radikal og danner et nytt (Cl• → R• → Cl•), så én initiering kan gi tusenvis av produktmolekyler til to radikaler møtes (terminering).
:::

:::sjekk[Balanser fullstendig klorering av metan til kloroform.]
CH₄ + 3 Cl₂ → CHCl₃ + 3 HCl.
:::
