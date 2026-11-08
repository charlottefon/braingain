---
title: E2-reaksjon
summary: Bimolekylær eliminasjon i ett trinn – en sterk base fjerner et β-H samtidig som den utgående gruppen forlater, og det dannes en C=C-dobbeltbinding. Andre ordens kinetikk; typisk for 2° og 3° alkylhalider med sterk base ved høy temperatur.
category: eliminasjon
tags: [eliminasjon, alken, sterk base, bimolekylær, beta-hydrogen]
related:
  - organisk-kjemi/reaksjoner/e1-reaksjon
  - organisk-kjemi/reaksjoner/sn2-reaksjon
  - organisk-kjemi/reaksjoner/sn1-reaksjon
  - organisk-kjemi/reaksjoner/dehydrering-av-alkoholer
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-2b-3--8128218.pdf
    pages: "3, 18-20, 22-24"
  - file: medod1/exercises/oppgaver-sn1-sn2-e1-e2-med-losninger--8122254.pdf
  - file: medod1/exams/2026-medod1-ny-v2026-med-svar--7644066.pdf
  - file: medod1/exams/2025-medod1-ny-v2025-med-svar--7269873.pdf
  - file: medod1/exams/2024-medod1-ny-v2024-med-svar--5897534.pdf
  - file: medod1/exams/2024-medod1-h2024-med-svar--7298977.pdf
fields:
  Type: Eliminasjon
  Trinn: 1 (konsertert)
  Kinetikk: 2. orden, k[RX][base]
  Substrat: 2°, 3°
  Reagens: sterk base (OH⁻, RO⁻, t-BuO⁻)
  Produkt: Alken (mest substituerte)
---

## Oversikt

I en eliminasjon fjernes den elektronegative gruppen (X) **sammen med et H fra nabokarbonet** (β-karbonet), og det dannes en dobbeltbinding. Produktet er et **alken** + HB + X⁻:

$$\ce{RCH2CH2X + B^- -> RCH=CH2 + HB + X^-}$$

Forelesningens eksempel (2-brom-2-metylpropan + OH⁻):

$$\ce{(CH3)3C-Br + OH^- -> CH2=C(CH3)2 + H2O + Br^-}$$

## Mekanisme

Ett konsertert trinn, tre samtidige elektronforflytninger:

1. Basen (OH⁻) bruker et ledig elektronpar til å ta et **proton fra β-karbonet** (karbonet ved siden av C–X).
2. Elektronparet fra den brutte C–H-bindingen flyttes inn mellom α- og β-karbonet og blir π-bindingen.
3. Fordi karbon ikke kan ha mer enn fire bindinger, forlater halogenet samtidig og tar med seg bindingselektronene (Br⁻).

Ingen karbokation – derfor ingen omleiring.

```smiles-row
CC(C)(C)Br | 2-brom-2-metylpropan
C=C(C)C | 2-metylpropen
```

## Betingelser og faktorer

- **Substrat:** typisk 2° eller 3°.
- **Base:** sterk base – OH⁻, alkoksid RO⁻, tert-butoksid (t-BuO⁻). t-BuO⁻ er sterk men sterisk hindret → dårlig nukleofil, god til E2.
- **Temperatur:** høy temperatur favoriserer eliminasjon.
- **Løsemiddel:** mindre avgjørende enn for SN1/SN2; basestyrke, substrat og temperatur er hovedfaktorene.

$$\text{hastighet} = k[\text{alkylhalid}][\text{base}]$$

## Produkt og stereokjemi

- Når flere β-H finnes, er hovedproduktet som regel **det mest substituerte alkenet** (flest alkylgrupper på C=C; «Zaitsevs regel» i lærebøker):
  - 2-brombutan + sterk base → **but-2-en** (hovedprodukt; E/Z-blanding) > but-1-en.
  - 2-brompropan → propen.
  - 2-brom-2-metylpropan → 2-metylpropen.
- Alkener med to ulike grupper på hvert sp²-karbon kan gi cis/trans (E/Z)-isomerer.
- Lærebokstoff (ikke i forelesningen): i E2 står H og X helst **anti-periplanart** (motsatt side, i samme plan). En voluminøs base (t-BuO⁻) kan gi mer av det **minst** substituerte alkenet, fordi den lettest når et ytre H.

:::husk
Eliminasjon fjerner **H + X fra nabokarboner** → C=C. Substitusjon bytter X ut med Nu. Spør deg: oppfører reagenset seg som **base** (tar H⁺) eller **nukleofil** (angriper C)?
:::

## Biologiske eksempler

Enzymatiske eliminasjoner (dehydrataser) fjerner H og OH fra nabokarboner: **fumarase** omdanner malat ⇌ fumarat + H₂O i sitronsyresyklusen. Se [dehydrering av alkoholer](/medod1/organisk-kjemi/reaksjoner/dehydrering-av-alkoholer).

## Sammenlign med

- [E1](/medod1/organisk-kjemi/reaksjoner/e1-reaksjon): samme produkt, men to trinn via karbokation, svak base, 1. orden.
- [SN2](/medod1/organisk-kjemi/reaksjoner/sn2-reaksjon): samme kinetikk og ett trinn, men nukleofilen angriper karbonet. Med 3° substrat er SN2 umulig → sterk base gir E2.

:::eksamen
- V2026: tertiært alkylhalid + sterk base OH⁻ → **primært E2**.
- H2024: tert-butylbromid + sterk base → mekanisme **E2**, produkt **2-metylpropen** (metylpropen).
- V2025/V2024: «E2: sterk base, ett trinn» / «samtidig fjerning av H og halogen fra nabokarboner gir dobbeltbinding».
:::

## Test deg selv

:::sjekk[Hvorfor er E2 en bimolekylær reaksjon?]
Både alkylhalidet og basen inngår i det ene, hastighetsbestemmende trinnet: hastighet = k[RX][base].
:::

:::sjekk[Hvilket alken blir hovedprodukt når 2-brombutan behandles med sterk base og varme?]
But-2-en (CH₃CH=CHCH₃), det mest substituerte alkenet. But-1-en dannes i mindre mengde.
:::

:::sjekk[Hvorfor gir tert-butoksid E2 heller enn SN2 med et 2° alkylhalid?]
t-BuO⁻ er en sterk base, men så voluminøs at den ikke kommer til baksiden av karbonet (dårlig nukleofil). Den når lettere et ytre β-H.
:::

:::sjekk[Kan E2 gi omleirede produkter? Begrunn.]
Nei – det dannes aldri et fritt karbokation; H fjernes og X forlater samtidig.
:::
