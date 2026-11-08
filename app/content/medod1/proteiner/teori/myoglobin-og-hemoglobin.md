---
title: Myoglobin og hemoglobin
summary: O₂-binding til hem, P50 og bindingskurver, kooperativitet og T/R-tilstander, 2,3-BPG, Bohr-effekten, føtalt Hb, sigdcelleanemi og thalassemi.
order: 6
tags: [myoglobin, hemoglobin, hem, kooperativitet, allosteri, 2,3-BPG, Bohr-effekten, HbF, sigdcelleanemi, thalassemi]
related:
  - proteiner/teori/homologi-og-evolusjon
  - proteiner/teori/enzymregulering
  - proteiner/aminosyrer/histidin
  - proteiner/aminosyrer/valin
  - proteiner/aminosyrer/glutamat
  - generell-kjemi/teori/karbonsyre-og-blodets-ph
  - cellebiologi/sammensatte-tema/blodets-ph-regulering-og-hyperventilering
sources:
  - file: medod1/material/proteiner/proteiner-2-am-2026--8198447.pdf
    pages: "10-29"
  - file: medod1/material/proteiner/intro-forelesning--7794102.pdf
    pages: "8-10"
  - file: medod1/exercises/kollokvieoppgaver-enzymologi-og-enzym-2025--7794057.pdf
    pages: "3"
---

## Hvorfor to O₂-bindende proteiner?

O₂ er lite løselig i vann, og diffusjon alene er for langsomt i store organismer → kretsløp med en **transportør** (Hb) og en **lagrings-/diffusjonsprotein** i muskel (Mb). pO₂: lunge ~100 mmHg, kapillærer ~20, celler < 20 (1 torr = 1 mmHg).

## Felles: hem som prostetisk gruppe

- Både Mb og Hb er kompakte, **globulære** proteiner; hver kjede har **8 α-helikser** (prolin avslutter 4 av dem) som danner en upolar lomme for hem.
- **Hem** = protoporfyrin IX + **Fe²⁺** i midten. Fe er koordinert til **4 N i porfyrinringen + proksimal His (F8)**; O₂ binder på den sjette plassen.
- Bare **Fe²⁺** (ferro-form) binder O₂: deoksy → oksy.
- **Distal His (E7)** H-binder O₂, hindrer at Fe²⁺–O₂ går over til Fe³⁺-superoksid, og setter **steriske begrensninger for CO** (CO konkurrerer med O₂ og er toksisk).
- Funksjonsfordeling: hem binder O₂; **proteinet gjør bindingen reversibel**.
- Hem gir rødfargen.

Når O₂ binder, **trekkes Fe inn i porfyrinplanet**, og His F8 og hele F-heliksen flytter seg.

## Forskjeller

| | Myoglobin (Mb) | Hemoglobin (Hb) |
|---|---|---|
| Hvor | Muskel | Røde blodceller |
| Funksjon | Lagrer O₂, fasiliterer diffusjon til mitokondriene | Transporterer O₂ lunge → vev, og CO₂ + H⁺ tilbake |
| Struktur | 1 kjede | Tetramer (α₁β₁)(α₂β₂) – kvartærstruktur |
| O₂ per molekyl | 1 | 4 |
| Bindingskurve | **Hyperbol** | **Sigmoid** (kooperativ) |
| P50 | **2 torr** (høy affinitet) | **26 torr** (lavere affinitet) |
| Allosteri | Nei | Ja (O₂, H⁺, CO₂, 2,3-BPG) |

**P50** = pO₂ ved 50 % metning. **Lav P50 = høy affinitet.**

## Kooperativitet og T/R-tilstander

- **T-tilstand** («tense», deoksy-Hb): lav O₂-affinitet.
- **R-tilstand** («relaxed», oksy-Hb): høy affinitet; bindingssetene er mindre rigide.
- O₂ på én subenhet → Fe inn i planet → His F8 og F-heliksen beveger seg → endring i grenseflaten α₁β₁/α₂β₂ → de to αβ-parene **roterer ~15°** i forhold til hverandre → de andre subenhetene får høyere affinitet. Og omvendt: **når O₂ forlater én subenhet, synker affiniteten i de andre.**
- Dette er **allosteri**: binding på ett sete påvirker et annet sete via konformasjonsendring.

### Hvorfor kooperativitet er nyttig

| | Avgitt O₂ fra lunge (100 torr) til vev (20 torr) |
|---|---|
| Myoglobin | ~7 % |
| Hypotetisk ikke-kooperativt Hb | 38 % |
| **Hemoglobin** | **66 %** |

Hb i muskel i hvile (40 torr): 98 % → 77 % metning, avgir **21 %**. Ved trening (20 torr): → 32 %, avgir **66 %**. O₂ avgis mest effektivt når vi går fra hvile til aktivitet – den bratte delen av den sigmoide kurven ligger i vevenes pO₂-område.

## 2,3-bisfosfoglyserat (2,3-BPG)

- Finnes i røde blodceller i omtrent **samme konsentrasjon som Hb**.
- **Allosterisk effektor**: binder et annet sete enn O₂ – **ett sete per tetramer**, i en **positivt ladd lomme mellom β-kjedene** (bl.a. Lys82, His2, His143).
- Binder **bare T-tilstanden** → stabiliserer T → **senker O₂-affiniteten** → mer O₂ avgis i vev.
- Rent Hb (uten BPG) avgir bare **8 %** ved 20 torr, mot **66 %** i røde blodceller.

```smiles 2,3-bisfosfoglyserat (uten stereokjemi)
OC(=O)C(OP(=O)(O)O)COP(=O)(O)O
```

## Bohr-effekten

**Lav pH og høy CO₂ → lavere O₂-affinitet → mer O₂ frigjøres i aktivt vev** (kurven forskyves mot høyre).

- CO₂ fra respirasjon hydreres av **karbonsyreanhydrase** (se [karbonsyre og blodets pH](/medod1/generell-kjemi/teori/karbonsyre-og-blodets-ph)): $\ce{CO2 + H2O <=> H2CO3 <=> HCO3- + H+}$
- H⁺ tas opp av deoksy-Hb: protonert **β-His146** danner saltbro med β-Asp94 → **stabiliserer T**. Ca. 1 H⁺ tas opp per 2 O₂ som frigjøres.
- CO₂ bindes også direkte som **karbamat** til N-terminal Val i alle fire subenheter; H⁺ frigjøres og bidrar til Bohr-effekten.
- I lungene (høy pO₂, lavere CO₂) går det motsatt vei.

## Føtalt hemoglobin (HbF)

- HbF = **α₂γ₂** (HbA = α₂β₂). En aminosyreforskjell i γ-kjeden ligger i **bindingssetet for 2,3-BPG**.
- HbF **binder 2,3-BPG dårligere** → går lettere til R → **høyere O₂-affinitet** enn mors HbA → fosteret «stjeler» O₂ over morkaken.
- HbF erstattes av HbA i løpet av første leveår.

## Hemoglobinsykdommer

Ca. 7 % av verdens befolkning er bærere av en hemoglobinsykdom.

**Sigdcelleanemi (HbS):** **Glu6Val** i β-kjeden. Negativt ladd overflaterest → hydrofob valin → deoksy-HbS **aggregerer til fibrer** → sigdformede erytrocytter som tetter små blodårer: smertefull hevelse, høy risiko for **slag** og bakterieinfeksjoner, anemi. Homozygote (HbS/HbS) blir syke; **heterozygote bærere** (HbA + HbS) er vanligvis friske og **mer resistente mot malaria** (P. falciparum vokser dårligere i celler med HbS) → høy allelfrekvens i malariaområder (heterozygotfordel).

**Thalassemier:** mutasjoner som gir **redusert mengde eller mangel på α- eller β-kjeder** → færre Hb-tetramerer og feil kombinasjon av kjeder.

- **α-thalassemi:** for få α → tetramerer av bare β (**HbH**) med **høy O₂-affinitet og ingen kooperativitet** → lite O₂ avgis i vev.
- **β-thalassemi** (thalassemia major vanligst): for få β → overskudd av α-kjeder danner uløselige aggregater → tap av røde blodceller, **mikrocytose**.

:::eksamen
Gjengangere: 2,3-BPG **stabiliserer T** og **senker** affiniteten (fellen er «R-tilstand» eller «øker affinitet») – nesten hvert år. HbF binder BPG **dårligere** (H2025). Bohr: protonering av β-His146 stabiliserer T (H2025). Mb binder **1** O₂ og har nesten bare upolare rester inni. Hyperventilering (alkalose) → **høyere** O₂-affinitet og albumin binder mer Ca²⁺ (V2023; se [blodets pH og hyperventilering](/medod1/cellebiologi/sammensatte-tema/blodets-ph-regulering-og-hyperventilering)). Når O₂ forlater én subenhet, **synker** affiniteten i de andre (V2025). Sigdcelle: høy slagrisiko fordi cellene tetter kar; mutasjonen er Glu→Val, ikke omvendt.
:::

:::feil
Thalassemi handler primært om **redusert mengde funksjonelt Hb / feil kjedesammensetning**. HbH ved α-thalassemi binder O₂ for sterkt – det er én del av forklaringen, ikke hele. Fasiten i V2026 (oppg. 76) markerte likevel «tetramerer med muterte kjeder binder O₂ for sterkt og avgir det ikke i vev», ikke «redusert mengde funksjonelt Hb». Kjenn begge forklaringene.
:::

## Test deg selv

:::sjekk[Hvorfor er myoglobin (P50 = 2 torr) en dårlig O₂-transportør?]
Mb er nesten fullt mettet også ved vevenes pO₂ (~20 torr), så det avgir bare ~7 % av O₂ mellom lunge og vev. En transportør må binde i lungene og slippe i vevet.
:::

:::sjekk[Forklar kooperativiteten i Hb strukturelt.]
O₂-binding trekker Fe inn i hemplanet, proksimal His F8 og F-heliksen flytter seg, og grenseflaten mellom αβ-dimerene endres slik at hele tetrameren går fra T til R. Det øker affiniteten i de andre subenhetene.
:::

:::sjekk[Hvordan påvirker 2,3-BPG O₂-bindingskurven, og hvorfor?]
Kurven forskyves mot høyre (høyere P50). Negativt ladd 2,3-BPG binder den positive lommen mellom β-kjedene bare i T-tilstand og stabiliserer den; mer O₂ må bindes før Hb går til R.
:::

:::sjekk[Hvordan klarer fosteret å «stjele» O₂ fra mor?]
HbF (α₂γ₂) binder 2,3-BPG dårligere enn HbA, fordi γ-kjeden har en endret aminosyre i BPG-setet. HbF har derfor høyere O₂-affinitet, og O₂ flyter fra mors oksy-HbA til fosterets deoksy-HbF.
:::

:::sjekk[Hvorfor avgir Hb mer O₂ i en muskel som arbeider hardt?]
Lav pO₂ (bratt del av den sigmoide kurven), og høy CO₂/lav pH gir Bohr-effekten: H⁺ (β-His146) og karbamat stabiliserer T-tilstanden og senker affiniteten.
:::

:::sjekk[Hvorfor er heterozygote bærere av HbS overrepresentert i malariaområder?]
De er vanligvis friske, men mer motstandsdyktige mot malaria fordi parasitten vokser dårligere i celler med HbS. Det gir heterozygotfordel, selv om homozygote avkom får sigdcelleanemi.
:::
