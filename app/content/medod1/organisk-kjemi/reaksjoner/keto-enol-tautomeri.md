---
title: Keto–enol-tautomeri (ketose ⇌ aldose)
summary: I basisk løsning flyttes et α-H og en dobbeltbinding slik at en ketose (fruktose) via et endiol omdannes til aldoser (glukose, mannose). Derfor gir fruktose positiv Benedict-test selv om den er en ketose.
category: karbonyl
tags: [tautomeri, enol, endiol, fruktose, ketose, Benedict, reduserende sukker]
related:
  - organisk-kjemi/reaksjoner/oksidasjon-av-aldehyder
  - organisk-kjemi/reaksjoner/hemiacetal-og-hemiketal
  - organisk-kjemi/biomolekyler/monosakkarider
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-5--8135969.pdf
    pages: "20"
  - file: medod1/exercises/karbohydrater-oppgaver--8155388.pdf
fields:
  Type: Tautomeri (isomerisering)
  Betingelse: basisk løsning (OH⁻ som katalysator)
  Intermediat: Endiol
  Konsekvens: Ketoser blir reduserende
---

## Oversikt

**Tautomerer** er konstitusjonsisomerer som raskt går over i hverandre ved at et H og en dobbeltbinding flytter seg. Keto-form (C=O med H på nabo-C) ⇌ enol-form (C=C–OH).

$$\text{D-fruktose} \xrightleftharpoons{\ce{OH-}} \text{endiol} \xrightleftharpoons{\ce{OH-}} \text{D-glukose (+ D-mannose)}$$

## Mekanisme

Fra forelesningen (D-fruktose → D-glukose):

1. OH⁻ fjerner et **H fra α-karbonet** (C1, nabo til karbonyl-C2).
2. Elektronparet danner C1=C2; samtidig flyttes π-elektronene i C2=O opp på O → enolat, som tar H⁺ → **endiol** (–C(OH)=C(OH)–, OH på begge dobbeltbindingskarbonene).
3. Omvendt prosess, men «speilet»: OH⁻ tar H⁺ fra **C1-OH**; elektronparet danner C1=O, og π-elektronene i C1=C2 flyttes til C2, som tar opp H⁺ (fra vann). C=O sitter nå på **C1** → aldehyd = **aldose**.

Fordi C2 blir et nytt stereosenter i trinn 3, kan H komme fra begge sider → både **D-glukose** og **D-mannose** (C2-epimerer) dannes.

```smiles-row
C([C@H]([C@H]([C@@H](C(=O)CO)O)O)O)O | D-fruktose (keto)
OC=C(O)C(O)C(O)C(O)CO | endiol (stereo ikke vist)
C([C@H]([C@H]([C@@H]([C@H](C=O)O)O)O)O)O | D-glukose (aldehyd)
```

## Betingelser og faktorer

- Basekatalysert (OH⁻). Benedicts reagens er basisk → fruktose isomeriseres under testen.
- Krever et H på α-karbonet.

## Produkt og stereokjemi

Blanding av aldoser som er C2-epimerer (glukose og mannose) + ketosen i likevekt. Stereosentrene C3–C5 påvirkes ikke.

## Biologiske eksempler

- Forklarer hvorfor **fruktose** er et **reduserende sukker** og gir positiv Benedict/Tollens.
- Samme kjemi (via endiol) brukes enzymatisk i glykolysen: glukose-6-fosfat ⇌ fruktose-6-fosfat (fosfoglukoseisomerase) og dihydroksyacetonfosfat ⇌ glyseraldehyd-3-fosfat (triosefosfatisomerase).

## Sammenlign med

- [Oksidasjon av aldehyder](/medod1/organisk-kjemi/reaksjoner/oksidasjon-av-aldehyder): det som faktisk gir positiv test – først må ketosen bli aldose.
- [Hemiacetal/hemiketal](/medod1/organisk-kjemi/reaksjoner/hemiacetal-og-hemiketal): ringåpning trengs også først for at fruktose skal kunne isomeriseres.

## Test deg selv

:::sjekk[Fruktose er en ketose. Hvorfor gir den positiv Benedict-test?]
I basisk løsning omdannes fruktose via et endiol-intermediat (keto–enol-tautomeri) til aldosene glukose og mannose, som har aldehydgruppe og oksideres; Cu²⁺ reduseres.
:::

:::sjekk[Hvilke to aldoser dannes fra D-fruktose under basiske betingelser, og hvorfor to?]
D-glukose og D-mannose. C2 får et nytt H fra en av to sider når C=O dannes på C1, så de to C2-epimerene dannes.
:::
