---
title: Enzymer – egenskaper, spesifisitet og klassifisering
summary: Hva enzymer er, substrat- og gruppespesifisitet, EC-klassifiseringen (6 klasser), kofaktorer (metallioner, koenzymer), apo-/holoenzym, prostetisk gruppe vs kosubstrat, aktivitetsenheter og pH-/temperaturoptimum.
order: 8
tags: [enzymer, spesifisitet, EC-nummer, kofaktor, koenzym, apoenzym, holoenzym, spesifikk aktivitet]
related:
  - proteiner/teori/enzymkatalyse
  - proteiner/teori/enzymregulering
  - proteiner/teori/folding-og-modifisering
  - proteiner/aminosyrer/arginin
  - lab/ovelser/enzymkinetikk-adh
  - cellebiologi/organeller/peroksisomer
sources:
  - file: medod1/material/proteiner/enzym-2026-1--8215494.pdf
    pages: "2-13"
  - file: medod1/material/proteiner/intro-forelesning--7794102.pdf
    pages: "11-14"
---

## Generelt

- Enzymer er **proteiner** (unntak: **ribozymer**, som er RNA).
- **Biologiske katalysatorer** som virker under milde (fysiologiske) betingelser – de muliggjør liv ved kroppstemperatur; nesten alle metabolske reaksjoner er enzymkatalyserte.
- **Spesifikke** for substrat og/eller reaksjon → få uønskede biprodukter.
- **Effektive**: kan øke hastigheten > 10⁶ ganger (cyklofilin 10⁵, karbonsyreanhydrase 10⁶–10⁷, urease 10¹³, arginindekarboksylase 10¹⁹). Karbonsyreanhydrase hemmes av legemiddelet **acetazolamid** (bl.a. glaukom).
- **Karbonsyreanhydrase er standardeksempelet på et raskt enzym:** ett enzymmolekyl hydrerer ~**10⁶ CO₂ per sekund** (kcat ≈ 10⁶ s⁻¹; H2024). Ikke bland dette med *økningen* i hastighet (~10⁷ ganger raskere enn uten enzym). Se [kcat-tabellen](/medod1/proteiner/enzymkinetikk).
- **Kan reguleres** etter cellens behov.
- Navn ender på **-ase**. «Enzym» = gresk «i gjær».
- Omtrent **halvparten av legemidlene** virker på enzymer.

## Spesifisitet

Gitt av en **presis interaksjon** mellom substrat og enzym; 3D-struktur og **kiralitet** er avgjørende.

- **Absolutt/høy:** glutamatdekarboksylase omsetter glutamat (→ GABA), men ikke aspartat. Fosfoglyseratkinase binder fosfatgruppen med Arg-rester (komplementaritet).
- **Gruppespesifisitet:** enzymet gjenkjenner en funksjonell gruppe eller type binding, ikke hele substratet (H2025).
  - Heksokinase: fosforylerer aldoheksoser.
  - Proteaser med varierende spesifisitet: **subtilisin** – alle peptidbindinger; **trypsin** – etter **Lys/Arg** (karboksylsiden); **trombin** – sekvensen **Arg-Gly**.
  - Proteaser kan også hydrolysere **esterbindinger** (lignende reaksjon, men mindre effektivt).

## Klassifisering (EC-nummer)

| Klasse | Reaksjonstype | Eksempler |
|---|---|---|
| **1 Oksidoreduktaser** | Oksidasjon–reduksjon (overføring av H/O, elektroner) | Dehydrogenaser, oksidaser |
| **2 Transferaser** | Overføring av funksjonelle grupper (metyl, acyl, amino, fosforyl) | **Kinaser**, transaminaser |
| **3 Hydrolaser** | Spalting med vann → to produkter | Peptidaser/proteaser, lipaser |
| **4 Lyaser** | Spalting av C–C, C–O, C–N uten hydrolyse/oksidasjon | Dekarboksylaser |
| **5 Isomeraser** | Omorganisering innen molekylet | Isomeraser, mutaser |
| **6 Ligaser** | Danner C–C, C–O, C–S, C–N **med ATP-spalting** | Syntetaser |

:::eksempel[Heksokinase = EC 2.7.1.1]
ATP + D-glukose → ADP + D-glukose-6-fosfat.
**2** = transferase · **7** = fosfotransferase · **1** = OH-gruppe er akseptor · **1** = D-glukose er akseptor. Systematisk navn: ATP–glukose-fosfotransferase.
:::

## Kofaktorer

Noen enzymer er **rene proteiner** (lysozym, RNase). Andre trenger en **kofaktor**:

- **Metallioner** (tabell 7.2): Zn²⁺ (karbonsyreanhydrase; [alkoholdehydrogenase](/medod1/lab/ovelser/enzymkinetikk-adh) – hjelper å binde substratet), Mg²⁺ (heksokinase – binder ATP), Fe²⁺ (cytokromoksidase), Cu²⁺ (nitrittreduktase), Mn²⁺ (ribonukleotidreduktase), Ni²⁺ (urease), K⁺ (pyruvatkinase), Se (glutationperoksidase), Mo (xantinoksidase). Fe, Cu, Mn, Se og Mo inngår i redoksreaksjoner.
- **Koenzymer:** komplekse organiske molekyler, ofte fra **vitaminer**:

| Koenzym | Vitamin | Rolle | Eksempel |
|---|---|---|---|
| NAD⁺/NADH | B₃ (niacin) | Redoks | Laktatdehydrogenase |
| FAD/FADH₂ | B₂ | Redoks | Suksinatdehydrogenase |
| Tiaminpyrofosfat (TPP) | B₁ | Aldehydgruppe-overføring | Pyruvatdehydrogenase |
| Biotin | B₇ | Karboksylering | Pyruvatkarboksylase |
| Koenzym A | Pantotensyre | Acylgruppe-overføring | Acetyl-CoA-karboksylase |
| Tetrahydrofolat | Folat | Én-karbon-overføring | Tymidylatsyntase |
| Pyridoksalfosfat (PLP) | B₆ | Aminogruppe-overføring | Aspartataminotransferase |
| Lipoamid | Liponsyre | Overføring av to-karbon-enheter | Pyruvatdehydrogenase |
| Kobalamin | B₁₂ | Alkylgruppe-overføring | Metylmalonyl-CoA-mutase |

### Begreper

| Begrep | Betydning |
|---|---|
| **Apoenzym** | Proteindelen alene (inaktiv uten kofaktor) |
| **Holoenzym** | Apoenzym + kofaktor = funksjonelt enzym |
| **Prostetisk gruppe** | Kofaktor **sterkt (ofte permanent) bundet** til enzymet |
| **Kosubstrat** | Kofaktor **løst bundet**; går inn og ut som et substrat (f.eks. NAD⁺ i ADH) |

:::eksamen
Fyll-inn «kofaktor; apoenzym; holoenzym» (H2022, V2024). «En prostetisk gruppe er en sterkt bundet kofaktor» (H2025; felle: «kosubstrat er sterkt bundet», «holoenzym virker uten kofaktor»). Zn²⁺ i ADH (ikke omsatt, ikke beskrevet som sterkt bundet) = **kofaktor**; NAD⁺ = kosubstrat (V2024). «Prostetisk gruppe = ikke-protein-komponent som er permanent festet» (V2025). «Apoenzym = proteindelen som trenger kofaktor for å være funksjonell» (V2023). Merk: H2023 markerte «prostetisk gruppe er en form for koenzym» (et organisk koenzym som er fast bundet, f.eks. FAD, *er* en prostetisk gruppe – derav fasiten).
:::

## Måling av aktivitet

- **Aktivitet:** µmol produkt/min. **1 enhet (U) = 1 µmol produkt per minutt.**
- **Spesifikk aktivitet:** U/mg protein – oppgis ved definert pH og temperatur; øker under rensing.

## Struktur, pH og temperatur

3D-strukturen er essensiell. Aktiviteten avtar ved utbytting av kritiske aminosyrer (mutasjoner) eller **denaturering** (høy temperatur, feil pH eller ionestyrke).

- **Temperatur:** aktiviteten øker først (raskere molekyler), så faller den brått over optimum pga. **denaturering** (H2023). Humane enzymer ~37–40 °C; termofile (Taq-polymerase) ~80 °C.
- **pH-optimum** varierer med miljøet: pepsin ~1,5 (magesekk), katalase 7,6, trypsin 7,7, fumarase og ribonuklease 7,8, arginase 9,7. pH påvirker ioniseringen av aminosyrer i aktivt sete og i strukturen.

## Test deg selv

:::sjekk[Hvilken EC-klasse tilhører en kinase, en protease og en dekarboksylase?]
Kinase: 2 (transferase). Protease: 3 (hydrolase). Dekarboksylase: 4 (lyase).
:::

:::sjekk[Hva skiller en prostetisk gruppe fra et kosubstrat?]
Prostetisk gruppe er sterkt/permanent bundet og blir på enzymet (f.eks. hem); kosubstrat er løst bundet, bindes og slippes i hver syklus og endres kjemisk (f.eks. NAD⁺ → NADH).
:::

:::sjekk[Hvorfor stopper aktiviteten å øke med temperaturen over et visst punkt?]
Enzymet denatureres – de svake bindingene som holder 3D-strukturen og det aktive setet brytes.
:::

:::sjekk[Hvorfor har pepsin pH-optimum ~2 og trypsin ~8?]
Pepsin virker i magesekken (sur), trypsin i tynntarmen (svakt basisk). Ioniseringen av aminosyrene i deres aktive seter er tilpasset hvert sitt miljø.
:::
