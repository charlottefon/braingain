---
title: Hemiacetal- og hemiketaldannelse
summary: En alkohol adderes reversibelt til C=O i et aldehyd (→ hemiacetal) eller keton (→ hemiketal). Produktet har –OH og –OR på det tidligere karbonylkarbonet. Intramolekylært gir dette ringformen av monosakkarider – glukose (aldose) danner hemiacetal, fruktose (ketose) hemiketal.
category: karbonyl
tags: [hemiacetal, hemiketal, nukleofil addisjon, ringslutning, glukose, fruktose, anomer]
related:
  - organisk-kjemi/reaksjoner/acetal-og-ketal
  - organisk-kjemi/reaksjoner/nukleofil-addisjon-til-karbonyl
  - organisk-kjemi/biomolekyler/syklisering-og-anomerer
  - organisk-kjemi/reaksjoner/oksidasjon-av-aldehyder
sources:
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-4a-3--8190320.pdf
    pages: "24-28"
  - file: medod1/material/organisk-kjemi/organic-chemistry-lecture-5--8135969.pdf
    pages: "13-17"
  - file: medod1/exercises/oppgaver-aldehyder-og-ketoner--8156662.pdf
  - file: medod1/exercises/karbohydrater-oppgaver--8155388.pdf
  - file: medod1/exams/2023-medod1-h2023-med-svar--5670979.pdf
fields:
  Type: Nukleofil addisjon (reversibel)
  Reagens: 1 alkohol
  Aldehyd gir: hemiacetal
  Keton gir: hemiketal
  Kjennetegn: –OH + –OR på samme C
---

## Oversikt

Det negativt polariserte alkoholoksygenet adderes til det positivt polariserte karbonylkarbonet; alkoholens H går til karbonyloksygenet. Reaksjonen er **reversibel**.

$$\ce{CH3CHO + HOCH2CH3 <=> CH3CH(OH)OCH2CH3}\quad\text{(hemiacetal)}$$
$$\ce{CH3COCH3 + HOCH2CH3 <=> (CH3)2C(OH)OCH2CH3}\quad\text{(hemiketal)}$$

- **Hemiacetal:** én alkohollik –OH og én eterlik –OR på karbonet som var **aldehyd**karbonet (har også et H).
- **Hemiketal:** samme, men karbonet var **keton**karbonet (to C-grupper, ingen H).

```smiles-row
CC=O | acetaldehyd
CC(O)OCC | hemiacetal
CC(C)(O)OCC | hemiketal
```

## Mekanisme

1. Alkoholoksygenets ledige elektronpar angriper δ⁺-karbonylkarbonet; π-elektronene i C=O går til oksygenet (→ O⁻), og alkoholoksygenet blir positivt (R–O⁺H–).
2. Protonoverføring: H⁺ flyttes fra det positive alkoholoksygenet til O⁻ → –OH og –OR på samme karbon.

Kan katalyseres både av syre (protonerer C=O) og base. Intramolekylært (sukker) skjer det spontant i vann.

## Betingelser og faktorer

- Likevekt; åpne hemiacetaler fra to separate molekyler er vanligvis ustabile.
- **5- og 6-leddede ringer** dannes svært lett intramolekylært → sykliske hemiacetaler dominerer helt for monosakkarider (> 99 % ringform for glukose; åpen form 0,02 %).

## Produkt og stereokjemi

- Det tidligere karbonylkarbonet blir et **nytt stereosenter** – det **anomere karbonet**. Ringslutning gir derfor to **anomerer**: α og β.
- **D-glukose:** OH på C5 angriper aldehyd-C1 → syklisk **hemiacetal** (pyranose, 6-ring).
- **D-fruktose:** OH på C5 angriper keto-C2 → syklisk **hemiketal** (furanose, 5-ring).

```smiles-row
C([C@H]([C@H]([C@@H]([C@H](C=O)O)O)O)O)O | D-glukose (åpen)
C([C@@H]1[C@H]([C@@H]([C@H]([C@@H](O1)O)O)O)O)O | β-D-glukopyranose
```

Fordi hemiacetalet kan åpnes igjen, finnes en fri aldehydgruppe i likevekt → sukkeret er **reduserende** og kan **mutarotere** (α ⇌ åpen ⇌ β).

## Biologiske eksempler

- Alle frie monosakkarider (glukose, galaktose, mannose, ribose, fruktose) foreligger hovedsakelig som sykliske hemiacetaler/hemiketaler.
- I disakkarider som maltose og laktose er den ene enheten bundet som acetal, mens den andre har et **fritt hemiacetal** («reduserende ende»).

## Sammenlign med

| | Hemiacetal | Acetal |
|---|---|---|
| Grupper på C | –OH + –OR (+ H) | –OR + –OR (+ H) |
| Dannes av | 1 alkohol | hemiacetal + 1 alkohol, H⁺, – H₂O |
| Stabilitet | reversibel, åpner lett | stabil i base, hydrolyseres i syre |
| Sukker | reduserende, mutaroterer | ikke-reduserende, låst anomer |

Se [acetal og ketal](/medod1/organisk-kjemi/reaksjoner/acetal-og-ketal).

:::eksamen
Oppgavesett og eksamen: «glukose danner syklisk **hemiacetal**, fruktose syklisk **hemiketal**». H2023: «et hemiacetal har en OH og en OR på det tidligere karbonylkarbonet» (riktig).
:::

## Test deg selv

:::sjekk[Hva er forskjellen på et hemiacetal og et hemiketal?]
Begge har –OH og –OR på samme karbon. Hemiacetal kommer fra et aldehyd (karbonet har også et H), hemiketal fra et keton (karbonet har to C-grupper).
:::

:::sjekk[Hvorfor danner glukose et hemiacetal, mens fruktose danner et hemiketal?]
Glukose er en aldose (aldehyd på C1), fruktose en ketose (keton på C2). I begge angriper C5-OH karbonylkarbonet intramolekylært.
:::

:::sjekk[Hvorfor gir ringslutning av glukose to ulike produkter?]
Karbonylkarbonet er plant; C5-OH kan angripe fra begge sider. C1 blir et nytt stereosenter (anomert C), og det dannes α- og β-anomer.
:::

:::sjekk[Hvorfor gjør et fritt hemiacetal et sukker reduserende?]
Hemiacetalet kan åpnes reversibelt til aldehydform, og aldehydet kan oksideres (reduserer Cu²⁺/Ag⁺).
:::
