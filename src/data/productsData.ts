import img33 from "../assets/products/micro-onduleur-iq8hc-enphase-energy-3.jpg"
import img32 from "../assets/products/micro-onduleur-iq8hc-enphase-energy-2.jpg"
import img31 from "../assets/products/micro-onduleur-iq8hc-enphase-energy-1.jpg"
import img30 from "../assets/products/micro-onduleur-iq8hc-enphase-energy.jpg"
import img29 from "../assets/products/onduleur-de-stockage-couple-ac-3kw-me-3000sp-sofar-solar-2.jpg"
import img28 from "../assets/products/onduleur-de-stockage-couple-ac-3kw-me-3000sp-sofar-solar-1.jpg"
import img27 from "../assets/products/onduleur-de-stockage-couple-ac-3kw-me-3000sp-sofar-solar.jpg"
import img26 from "../assets/products/onduleur-reseau-hybride-6kw-lxp-luxpower-2.jpg"
import img25 from "../assets/products/onduleur-reseau-hybride-6kw-lxp-luxpower-1.jpg"
import img24 from "../assets/products/sigenstor-systeme-5-en-1-onduleur-chargeur-ev-pcs-batterie-ems.jpg"
import img23 from "../assets/products/kit-solaire-6kw-monophase-tout-en-un-sigenstor-sigenergy.jpg"
import img22 from "../assets/products/micro-onduleur-1000w-2-in-1-sigenmicro-sigenergy-2.jpg"
import img21 from "../assets/products/micro-onduleur-1000w-2-in-1-sigenmicro-sigenergy-1.jpg"
import img20 from "../assets/products/micro-onduleur-1000w-2-in-1-sigenmicro-sigenergy.jpg"
import img19 from "../assets/products/onduleur-hybride-hyx-h6k-hs-hyxipower-2.jpg"
import img18 from "../assets/products/onduleur-hybride-hyx-h6k-hs-hyxipower-1.jpg"
import img17 from "../assets/products/onduleur-hybride-hyx-h6k-hs-hyxipower.jpg"
import img16 from "../assets/products/onduleur-hybride-5kw-48v-mppt-100a-spf5000-es-wifi-inclus-growatt-8.jpg";
import img15 from "../assets/products/onduleur-hybride-5kw-48v-mppt-100a-spf5000-es-wifi-inclus-growatt-7.jpg";
import img14 from "../assets/products/onduleur-hybride-5kw-48v-mppt-100a-spf5000-es-wifi-inclus-growatt-6.jpg";
import img13 from "../assets/products/onduleur-hybride-5kw-48v-mppt-100a-spf5000-es-wifi-inclus-growatt-5.jpg";
import img12 from "../assets/products/onduleur-hybride-5kw-48v-mppt-100a-spf5000-es-wifi-inclus-growatt-4.jpg";
import img11 from "../assets/products/onduleur-hybride-5kw-48v-mppt-100a-spf5000-es-wifi-inclus-growatt-3.jpg";
import img10 from "../assets/products/onduleur-hybride-5kw-48v-mppt-100a-spf5000-es-wifi-inclus-growatt-2.jpg";
import img9 from "../assets/products/onduleur-hybride-5kw-48v-mppt-100a-spf5000-es-wifi-inclus-growatt-1.jpg";
import img8 from "../assets/products/onduleur-hybride-5kw-48v-mppt-100a-spf5000-es-wifi-inclus-growatt.jpg";
import img7 from "../assets/products/onduleur-hybride-sun-5000w-48v-lp6-deye.jpg";
import img6 from "../assets/products/onduleur-hybride-sun-5000w-48v-lp5-deye.jpg";
import img5 from "../assets/products/onduleur-hybride-sun-5000w-48v-lp4-deye.jpg";
import img4 from "../assets/products/onduleur-hybride-sun-5000w-48v-lp3-deye.jpg";
import img3 from "../assets/products/onduleur-hybride-sun-5000w-48v-lp2-deye.jpg";
import img2 from "../assets/products/onduleur-hybride-sun-5000w-48v-lp1-deye.jpg";
import img1 from "../assets/products/onduleur-reseau-5kw-double-mppt-sg50rs-sungrow.jpg";


export const products = [
  {
    id: 0,
    name: "Onduleur réseau 5kW Double MPPT",
    image: img1,

    description: `
Cet onduleur réseau 5kW est conçu pour les installations photovoltaïques modernes. 
Il permet de convertir l'énergie solaire produite en électricité utilisable pour alimenter vos équipements ou l'injecter dans le réseau.

Grâce à sa technologie Double MPPT, il optimise la production énergétique même en cas d'ensoleillement variable. 
Sa conception robuste garantit une performance stable et durable dans différentes conditions.

Facile à installer et à utiliser, il intègre des fonctionnalités avancées de surveillance et de gestion de l'énergie. 
C'est une solution idéale pour améliorer l'efficacité énergétique et réduire les coûts d'électricité.
`,

    fiche: [
      { label: "Type", value: "On-Grid" },
      { label: "Puissance", value: "5000W" },
      { label: "MPPT", value: "Double MPPT" },
      { label: "Phases", value: "Monophasé" },
    ],

    downloads: [
      { name: "DS_SG3.0-6.0-RS_Sungrow", link: "../files/fichier-technique-sg3-0-6-0-rs-sungrow.pdf" },
{ name: "Manuel_SGxRS_Sungrow_FR", link: "/files/manuel-sgxrs-sungrow-fr.pdf" },
{ name: "Garantie_limitee_Sungrow_FR", link: "/files/garantie-limitee-sungrow-fr.pdf"},
{ name: "SUNGROW_Quick_Installation_Guide", link: "/files/sungrow-quick-installation-guide.pdf"},
{ name: "Certificat VDE Sungrow", link: "/files/certificat-vfr-2019-onduleur-sungrow.pdf"},
{ name: "Notice_Smart_Meter_mono_Sungrow", link: "/files/notice-smart-meter-mono-sungrow-en.pdf"},
{ name: "DS_Compteur_monophase_Sungrow", link: "/files/datasheet-compteur-energie-monophase-sungrow.pdf"},
{ name: "Certificat EN 50549", link: "/files/certificat-en50549-1-sgxrs-onduleur-sungrow-fr.pdf"}
    ],
  },

  {
    id: 1,
    name: "Onduleur Hybride 6kW",
    image: [img2, img3, img4, img5, img6, img7],

    description: `L’onduleur hybride DEYE SUN 6000W 48V LP1 est une solution performante conçue pour les systèmes solaires en autoconsommation ainsi que les installations autonomes hors réseau. Grâce à sa technologie avancée, il assure une alimentation stable et continue tout en optimisant la gestion de l’énergie.

Cet appareil multifonction combine un convertisseur, un contrôleur de charge solaire et un chargeur de batterie dans un seul équipement compact et efficace. Son interface LCD tactile couleur permet une configuration simple et intuitive pour un contrôle optimal du système.

Équipé d’une connexion WiFi intégrée, l’onduleur permet une surveillance à distance en temps réel. Il dispose également de deux trackers MPPT indépendants afin d’optimiser la production photovoltaïque et d’améliorer le rendement énergétique.

Compatible avec plusieurs batteries 48V comme Pylontech, Dyness et Aurora, il prend en charge une gestion intelligente de la charge et de la décharge avec jusqu’à 6 plages horaires programmables. Son système intelligent aide à réduire les pics de consommation et à limiter la dépendance au réseau électrique.

L’onduleur offre une sortie de secours de 6 kW, une protection contre les surcharges ainsi qu’un basculement ultra-rapide entre réseau et mode hors réseau en seulement 4 ms. Son indice de protection IP65 garantit une excellente résistance pour une utilisation durable.

Pour les installations de grande capacité, il est possible de connecter jusqu’à 16 unités en parallèle.
<br><br>

<h3>Points forts :</h3>

<ul>
<li>Surveillance et contrôle via WiFi</li>
<li>Double entrée MPPT haute performance</li>
<li>Compatible batteries basse tension 48V</li>
<li>Écran LCD tactile couleur</li>
<li>Gestion intelligente de l’énergie</li>
<li>Fonction backup en cas de coupure</li>
<li>Protection avancée contre les surcharges</li>
<li>Possibilité de fonctionnement parallèle jusqu’à 16 unités</li>
<li>Faible consommation propre</li>
</ul>
`,

    fiche: [
  { label: "Type de régulateur", value: "MPPT" },
  { label: "Poids Net", value: "25 KG" },
  { label: "Type d'onduleur", value: "Hybride Raccordé" },
  { label: "Garantie", value: "2 ans légales en magasin / 10 ans fabricant" },
  { label: "Tension de batterie", value: "48 V" },
  { label: "Puissance d'entrée Max (PV)", value: "7800W" },
  { label: "Tension de sortie AC", value: "230VAC ± 5%" },
  { label: "Tension d'entrée Max PV", value: "500 Vdc" },
  { label: "Puissance de sortie (AC)", value: "6000W" },
  { label: "Nombre MPPT", value: "2" },
  { label: "Courant de charge Max", value: "135A" },
  { label: "Courant de décharge DC max", value: "135A" },
  { label: "Dimensions", value: "580 x 330 x 232 mm" },
  { label: "Plage de tension MPP", value: "125 - 425 V" },
  { label: "PV courant max.", value: "13A + 13A" },
  { label: "Tension d'entrée AC", value: "230VAC" },
  {
    label: "Plage de tension",
    value:
      "170-280 Vac (ordinateurs) / 90-280 Vac (appareils ménagers)",
  },
  { label: "Fréquence", value: "50 Hz / 60 Hz (détection automatique)" },
  { label: "Puissance de crête", value: "12KVA" },
  { label: "Phases", value: "Monophasé" },
  { label: "Type de signal", value: "Pur Sinus" },
  { label: "Indice de protection", value: "IP65" },
],

    downloads: [
      { name: "DS_SUN_3.6-6k-SG03LP1_DEYE", link: "/files/ds-sun-3-6-6k-sg03lp1-deye.pdf" },
{ name: "Deye_Compa_LiBat", link: "/files/deye-compa-libat.pdf" },
{ name: "Manual_Hybrid inverter_mono_DEYE", link: "/files/manual-hybrid-inverter-mono-deye.pdf"},
{ name: "Cert. de conformité_EN_SUN_LP1", link: "/files/certificat-conformite-en50549-1-sun-lp1.pdf"},
{ name: "Fiche Technique FR", link: "/files/ft-deye-mono.pdf"},
{ name: "Manuel FR", link: "/files/manuel-deye-mono.pdf"},
{ name: "DS - 3.3-10k", link: "/files/sun-3-6-10k-sg05lp1-eu.pdf"}
    ],
  },
  {
    id: 2,
    name: "Onduleur hybride 5kW 48V",
    image: [img8, img9, img10, img11, img12, img13, img14, img15, img16],

    description: `
L’onduleur hybride Growatt SPF 5000 ES est une solution intelligente conçue pour les installations solaires autonomes et hybrides. Avec une puissance de 5kW, un régulateur MPPT 100A intégré et une compatibilité batterie 48V, il permet d’alimenter efficacement une habitation, un site isolé ou une installation de secours.

Grâce à sa large plage d’entrée photovoltaïque jusqu’à 450Vdc, il optimise la production solaire même en faible luminosité. Son système de gestion intelligent permet de basculer automatiquement entre l’énergie solaire, les batteries et le réseau électrique afin d’assurer une alimentation continue.

Cet onduleur fonctionne aussi bien en mode hors réseau (off-grid) qu’en mode secours UPS anti-coupure. Il protège ainsi les équipements sensibles en cas de panne électrique et garantit une alimentation stable avec une sortie Pur Sinus.

Le SPF 5000 ES intègre également un chargeur AC 80A, une connectivité WiFi pour la surveillance à distance et la possibilité d’extension en parallèle afin d’augmenter la puissance totale de l’installation.

Idéal pour :
• Les maisons équipées de panneaux solaires
• Les sites isolés sans réseau électrique
• Les installations de secours anti-coupure
• Les systèmes hybrides avec batteries 48V
`,

    fiche: [
  { label: "Type de régulateur", value: "MPPT" },
  { label: "Poids Net", value: "13 KG" },
  { label: "Type d'onduleur", value: "Hybride Non Raccordé" },
  { label: "Garantie", value: "2 ans légales en magasin" },
  { label: "Tension de batterie", value: "48 V" },
  { label: "Puissance d'entrée Max (PV)", value: "6000W" },
  { label: "Courant de charge AC", value: "80 A" },
  { label: "Tension de sortie AC", value: "230VAC ± 5%" },
  { label: "Tension d'entrée Max PV", value: "450 Vdc" },
  { label: "Puissance de sortie (AC)", value: "5000W" },
  { label: "Dimensions", value: "480 x 335 x 135 mm" },
  { label: "Plage de tension MPP", value: "120 - 430 Vdc" },
  { label: "PV courant max.", value: "100A" },
  { label: "Tension d'entrée AC", value: "230VAC" },
  { label: "Plage de tension", value: "170-280 Vac / 90-280 Vac" },
  { label: "Fréquence", value: "50 Hz / 60 Hz" },
  { label: "Puissance de crête", value: "10000W" },
  { label: "Phases", value: "Monophasé" },
  { label: "Type de signal", value: "Pur Sinus" },
  { label: "Tension de charge Float", value: "54Vdc" },
  { label: "Protection contre les surcharges", value: "63Vdc" },
  { label: "Réinjection réseau", value: "Non" },
],

    downloads: [
     { name: "Manuel SPF3000-5000 ES Growatt", link: "/files/manuel-onduleur-spf5000-es-growatt-fr.pdf" },
{ name: "DS_Growatt-SPF3500_5000-ES-FR", link: "/files/ds-spf-3500-5000-es-fr.pdf" },
{ name: "Param-Pylontech-Growatt-SPF", link: "/files/param-pylontech-growatt-spf.pdf"},
  ]},
  {
    id: 3,
    name: "Onduleur Hybride - HYX-H6K-HS",
    image: [img17, img18, img19],

    description: `
L’onduleur hybride HyxiPower HYX-H6K-HS est une solution de stockage solaire conçue pour les foyers recherchant un système fiable, performant et accessible. Il combine production solaire, stockage sur batterie et alimentation réseau afin d’assurer une continuité énergétique stable et intelligente.

Grâce à sa conception robuste, il intègre des protections avancées contre les surtensions AC/DC ainsi qu’une protection contre la foudre. Sa certification IP65 et sa résistance aux environnements difficiles lui permettent une utilisation durable en intérieur comme en extérieur.

Pensé pour la performance, il offre une large plage MPPT pour optimiser la production solaire même à faible ensoleillement, ainsi qu’une capacité de surcharge élevée pour répondre aux pics de consommation. Son système permet une charge et décharge rapide des batteries, améliorant l’efficacité globale de l’installation.

Facile à installer et à configurer, il peut être paramétré rapidement via une application mobile avec une interface intuitive. Il assure également une commutation instantanée entre réseau et batterie, garantissant une alimentation sans interruption de type UPS.

Enfin, il dispose de fonctionnalités intelligentes comme le diagnostic des panneaux, la surveillance en temps réel et le contrôle de dispositifs externes comme les générateurs ou pompes à chaleur.
`,
fiche: [
  { label: "Type de batterie", value: "LiTHIUM-LFP" },
  { label: "Garantie", value: "2 ans légales en magasin / 10 ans fabricant" },
  { label: "Courant de charge MPPT", value: "16 A / TRACKER" },
  { label: "Tension d'entrée Max PV", value: "600 Vdc" },
  { label: "Puissance de sortie (AC)", value: "6000W" },
  { label: "Nombre MPPT", value: "2" },
  { label: "Courant de court-circuit Isc", value: "24 A / TRACKER" },
  { label: "Plage de tension MPP", value: "80 - 560 Vdc" },
  { label: "Phases", value: "Monophasé" },
],
downloads: [
      { name: "Cer_HYXI_Hybrid_Mono", link: "/files/certificat-hyx-h3-8k-hs-en50549-1-fr.pdf" },
{ name: "DS_HYXI_DCS", link: "/files/ds-dcs-datasheet-v1-3-20250731-fr-1.pdf" },
{ name: "DS_HYXI_Hybrid_mono", link: "/files/ds-hyx-h3-8k-hs-datasheet-v1-3-20250731-fr.pdf"},
{ name: "DC_HYXI_BDU_BATTERIE", link: "/files/ds-hyx-e50-500-h2-datasheet-v1-1-20250718-fr3.pdf"},
{ name: "Manuel_HYXI_BDU_BAT", link: "/files/manuel-bdu-batterie-hyx-e50-500-h2-user-manual-v1-0-2025-fr.pdf"},
{ name: "Manuel_HYXI_Hybrid_Mono", link: "/files/manuel-onduleur-hyx-h3-8k-hs-user-manual-v1-4-202407-fr.pdf"},
{ name: "Schéma_HYXI_Hybrid", link: "/files/hyxipower-hybrid-6k-2stringpv.pdf"},
{ name: "Schéma_HYXI_Compteur", link: "/files/hyxipower-mono-compteur-2008-onduleur3-6k.pdf"}
    ],
  },
  {
    id: 4,
    name: "Micro Onduleur 1000W 2 in 1 - SigenMicro - Sigenergy",
    image: [img20, img21, img22],

    description: `
Les micro-onduleurs Sigenergy SigenMicro sont des solutions intelligentes et performantes conçues pour les installations photovoltaïques résidentielles, aussi bien pour les systèmes de balcon que pour les installations sur toiture ou en micro-réseau. Grâce à leur technologie MPPT intégrée, ils optimisent la production d’énergie de chaque panneau solaire afin d’assurer un rendement élevé et stable.

Développés avec une conception robuste et fiable, les micro-onduleurs SigenMicro garantissent des performances constantes même dans des conditions climatiques exigeantes. Leur certification IP67 assure une excellente protection contre la poussière et l’humidité, permettant une utilisation durable en extérieur.

Chaque micro-onduleur embarque un système intelligent de gestion de l’énergie (EMS), supprimant la nécessité d’utiliser une passerelle de communication externe. Cette technologie permet une gestion autonome et simplifiée du système solaire tout en améliorant la stabilité globale de l’installation.

La gamme SigenMicro intègre également une technologie de communication Wi-Fi Mesh innovante permettant aux appareils de communiquer entre eux de manière automatique et sécurisée. Le réseau s’auto-organise intelligemment afin d’assurer une connexion continue et fiable, même en cas de perturbation d’un appareil du système.
<br>
<p>
Les micro-onduleurs SigenMicro offrent une solution fiable et intelligente pour optimiser les performances des installations solaires résidentielles.
</p>

<ul>
<li>Gestion énergétique intelligente</li>
<li>Communication Wi-Fi Mesh stable et étendue</li>
<li>Installation simplifiée sans passerelle</li>
<li>Réseau auto-réparateur pour une meilleure fiabilité</li>
<li>Protection IP67 adaptée aux environnements extérieurs</li>
</ul>
`,

    fiche: [
  { label: "Garantie", value: "25 ans fabricant" },
  { label: "Puissance d'entrée Max (PV)", value: "670W x 2" },
  { label: "Puissance de sortie (AC)", value: "1000W" },
  { label: "Mode de communication", value: "WiFi" },
  { label: "Nombre MPPT", value: "2" },
  { label: "Type de sortie", value: "Monophasé 220-230/240 V" },
  { label: "Plage MPPT", value: "16 - 60 V" },
  { label: "Fréquence réseau", value: "50 / 60 Hz" },
  { label: "THDi", value: "< 3 % pleine puissance" },
  { label: "Facteur de puissance", value: "0,8 en retard à 0,8 en avance" },
  { label: "Rendement max", value: "97,5 %" },
  { label: "Refroidissement", value: "Convection naturelle" },
  { label: "Indice de protection", value: "IP67" },
],

    downloads: [
      { name: "DS_SigenMicro", link: "/files/ds-sigen-micro-inverter-compressed.pdf" },
{ name: "Manuel_SigenMicro", link: "/files/sigenmicro-installation-manual-compressed.pdf" },
{ name: "EN50549 SIGENMICRO", link: "/files/en-50549-sigenmicro-compressed.pdf"},
  ]},
  {
    id: 5,
    name: "Kit Solaire 6kW Monophasé - Tout-en-un Sigenstor - Sigenergy",
    image: [img23, img24],

    description: `
Le système tout-en-un SigenStor de Sigenergy est une solution énergétique intelligente conçue pour optimiser l’autoconsommation solaire, le stockage d’énergie et la recharge des véhicules électriques au sein d’une seule installation compacte et évolutive.
Ce système intègre plusieurs fonctions essentielles dans une architecture unique : onduleur photovoltaïque, gestionnaire d’énergie, stockage batterie lithium haute capacité, système de conversion de puissance ainsi que recharge pour véhicule électrique. Grâce à sa conception modulaire, il peut évoluer facilement selon les besoins énergétiques du foyer.
Pensé pour les installations résidentielles modernes, SigenStor permet de réduire la dépendance au réseau électrique tout en améliorant l’autonomie énergétique et les économies sur la facture d’électricité. Son design discret et son installation simplifiée facilitent son intégration dans différents environnements.
Le système offre également une gestion intelligente de l’énergie grâce à l’application mySigen, permettant de suivre en temps réel la production solaire, la consommation du logement, l’état des batteries et la recharge du véhicule électrique.
Grâce à sa technologie avancée et à ses protections intégrées, SigenStor garantit une utilisation fiable, sécurisée et performante au quotidien.
<h3>Points forts :</h3>
<ul>
<li>Système énergétique 5-en-1 entièrement intégré</li>
<li>Gestion intelligente de l’autoconsommation</li>
<li>Stockage batterie évolutif haute capacité</li>
<li>Compatibilité avec la recharge de véhicules électriques</li>
<li>Installation simplifiée grâce aux connexions rapides</li>
<li>Suivi et contrôle via l’application mySigen</li>
<li>Protection avancée et sécurité renforcée</li>
<li>Architecture modulaire et évolutive</li>
<li>Compatibilité V2H / V2G selon configuration</li>
</ul>
`,

    fiche: [
  { label: "Puissance de sortie (AC)", value: "6000W" },
  { label: "Puissance PV", value: "de 6000W à 12000W" },
  {label: "Sortie AC", value: "Monophase"},
  { label: "Mode", value: "Monophasé" },
],

    downloads: [
      { name: "FT Batteries SIGENERGY", link: "/files/sigen-battery-2.pdf" },
{ name: "DS_EC_SP_Monophasé_SIGENERGY", link: "/files/fiche-technique-sigen-energy-controller-sp.pdf" },
{ name: "DS_Gateway_HomeMax_SIGENERGY", link: "/files/fiche-technique-sigen-energy-gateway-homemax.pdf"},
{ name: "Flyer_Solution Sigenergy", link: "/files/en-50549-sigenmicro-compressed.pdf"},
{ name: "Garantie SigenStor 1", link: "/files/garantie-1.pdf"},
{ name: "Garantie SigenStor 2", link: "/files/garantie-2.pdf"},
{ name: "Garantie SigenStor 3", link: "/files/garantie-3.pdf"},
{ name: "Manuel SIGENSTOR Mono", link: "/files/manuel-utilisation-sigenstor-monophase.pdf"}
  ]},
  {
    id: 6,
    name: "Onduleur Réseau Hybride 6kW LXP - LUXPOWER",
    image: [img25, img26],

    description: `
L’onduleur hybride LUXPOWER LXP 6kW est une solution performante conçue pour les installations solaires photovoltaïques avec batteries de stockage. Idéal pour l’autoconsommation résidentielle, les systèmes hors réseau et les installations de secours, il permet d’optimiser l’utilisation de l’énergie solaire tout en réduisant la dépendance au réseau électrique.

Grâce à sa technologie hybride intelligente, cet onduleur solaire gère efficacement la production photovoltaïque, la charge des batteries et l’alimentation des équipements domestiques. L’énergie solaire produite peut être utilisée directement pour la consommation du logement, stockée dans les batteries ou injectée dans le réseau selon les besoins de l’installation.

Compatible avec différents modes de fonctionnement, le LUXPOWER LXP offre une gestion énergétique flexible et programmable. Il permet notamment de configurer les périodes de charge et de décharge des batteries afin d’optimiser les économies d’énergie et d’améliorer le rendement du système solaire.

L’onduleur intègre également une fonction zéro injection avec compteur fourni, permettant de limiter ou empêcher l’injection d’électricité vers le réseau public. Son mode de charge prioritaire favorise le stockage de l’énergie solaire avant l’alimentation du logement, ce qui en fait une solution idéale dans les zones où l’alimentation électrique est instable.

Fiable, évolutif et facile à intégrer dans une installation photovoltaïque moderne, le LUXPOWER LXP 6kW constitue une solution complète pour améliorer l’autonomie énergétique et sécuriser l’alimentation électrique du foyer.

<h3>Points forts :</h3> <ul> <li>Onduleur hybride solaire 6kW avec gestion intelligente</li> <li>Compatible autoconsommation, hors réseau et secours</li> <li>Optimisation du stockage batterie photovoltaïque</li> <li>Programmation des cycles de charge et décharge</li> <li>Fonction zéro injection avec compteur inclus</li> <li>Gestion avancée de l’énergie solaire résidentielle</li> <li>Protection des équipements en cas de coupure réseau</li> <li>Solution idéale pour installations photovoltaïques modernes</li> </ul>
`,

    fiche: [
  { label: "Poids net (Kg)", value: "25" },
  { label: "Type d'onduleur", value: "Hybride raccordé" },
  { label: "Garantie", value: "5 ans fabricant"},
  { label: "Tension de batterie", value: "48 V" },
  { label: "Puissance d'entrée Max (PV)", value: "8000W"},
  { label: "Puissance de sortie (AC)", value: "6000W"},
  { label: "Phases", value: "Monophasé"},
  { label: "Puissance EPS", value: "6000W"},
  { label: "Réinjection réseau", value: "Oui"}
],

    downloads: [
      { name: "Hybrid-Parallel-Connection", link: "/files/hybrid-parallel-connection.pdf" },
{ name: "Wifi_Quick_Guidance_LuxPower", link: "/files/wifi-quick-guidance-luxpower.pdf" },
{ name: "Compa_List_Batterie_LuxPower", link: "/files/luxpower-compatible-list-lxp-3-6ksna-acs3600-230826.pdf"},
{ name: "DS_LXP_3-6K_LuxPower", link: "/files/ds-lxp-3-6k-luxpower.pdf"},
{ name: "Cert_EN50549-1_EN_LuxPower_LXP", link: "/files/cert-en50549-1-en-lxp.pdf"},
{ name: "Cert_UTE_VDE_VFR_FR_LuxPower_LXP", link: "/files/cert-ute-c15-712-1-vde0126-vfr2019-fr-lxp.pdf"},
{ name: "LUXPOWER FR", link: "/files/luxpower-fr-1.pdf"}
  ]},
  {
    id: 7,
    name: "Onduleur de stockage couplé AC 3kW - ME-3000SP - SOFAR SOLAR",
    image: [img27, img28, img29],

    description: `
L’onduleur de stockage couplé AC SOFAR SOLAR ME-3000SP est une solution intelligente conçue pour ajouter un système de stockage batterie à une installation photovoltaïque existante, sans modifier l’installation solaire déjà en place. Compatible avec les systèmes équipés de micro-onduleurs ou d’onduleurs centraux, il permet d’optimiser l’utilisation de l’énergie solaire produite.

Grâce à sa technologie bidirectionnelle, le ME-3000SP gère automatiquement les flux d’énergie entre les panneaux solaires, les batteries et le réseau électrique. L’énergie solaire excédentaire produite pendant la journée est stockée dans les batteries afin d’être utilisée plus tard, notamment durant la nuit ou lors des périodes de forte consommation.

Cet onduleur de stockage améliore l’autoconsommation énergétique et contribue à réduire significativement la facture d’électricité. Il permet également d’assurer une alimentation de secours en cas de coupure du réseau, offrant une solution fiable pour alimenter les équipements essentiels du logement.

Le système propose différents modes de fonctionnement intelligents, incluant la gestion automatique, les heures creuses et les stratégies de charge/décharge programmables afin d’optimiser les performances énergétiques selon les besoins de l’utilisateur.

Compatible avec plusieurs batteries lithium reconnues telles que Sofar Solar GTX5000, Pylontech et Dyness, le ME-3000SP peut gérer une capacité de stockage importante pour répondre aux besoins résidentiels modernes.

Facile à installer et à configurer, il dispose également d’un système de surveillance intégré permettant de suivre en temps réel la production solaire, la consommation énergétique ainsi que l’état de charge des batteries.

<h3>Points forts :</h3> <ul> <li>Onduleur de stockage couplé AC pour installation photovoltaïque existante</li> <li>Gestion intelligente des flux d’énergie solaire et batterie</li> <li>Optimisation de l’autoconsommation et réduction des coûts énergétiques</li> <li>Fonction alimentation de secours en cas de coupure réseau</li> <li>Compatible avec batteries Sofar Solar, Pylontech et Dyness</li> <li>Modes automatiques et programmation charge/décharge</li> <li>Surveillance intégrée en temps réel</li> <li>Installation simple sans modification du système solaire existant</li> </ul>
`,

    fiche: [
  { label: "Poids Net", value: "21 KG" },
  { label: "Type d'onduleur", value: "Onduleur AC coupling" },
  { label: "Garantie", value: "5 ans fabricant" },
  { label: "Tension de batterie", value: "48 V" },
  { label: "Puissance de sortie (AC)", value: "3000W" },
  { label: "Dimensions", value: "566 × 394 × 173 mm" },
  { label: "Phases", value: "Monophasé" },
  { label: "Réinjection réseau", value: "Oui" },
],

    downloads: [
     { name: "Manuel-FR-ME3000SP-Sofar", link: "/files/manuel-utilisateur-me3000sp-sofar-1.pdf" },
{ name: "ME 3000SP_France_Cert", link: "/files/me-3000sp-certificate-en50549-1-2024-10-11-en-eu.pdf" },
{ name: "Datasheet_ME 3000-SP_FR", link: "/files/me-3000-sp-fr.pdf"},
  ]},
  {
    id: 8,
    name: "Micro Onduleur - IQ8HC - Enphase Energy",
    image: [img30, img31, img32, img33],

    description: `
Le micro-onduleur Enphase IQ8HC est une solution photovoltaïque haute performance conçue pour optimiser la production d’énergie solaire dans les installations résidentielles et commerciales. Développé pour les panneaux solaires de dernière génération à haute puissance, il permet une conversion intelligente et efficace du courant continu en courant alternatif avec un rendement optimisé pour chaque module solaire.

Grâce à la technologie MPPT indépendante intégrée, chaque panneau fonctionne de manière autonome afin de maximiser la production énergétique, même en présence d’ombre partielle, d’encrassement ou de différences de performance entre les modules photovoltaïques.

Le système IQ8HC intègre une communication intelligente permettant la surveillance en temps réel de la production solaire, les diagnostics à distance ainsi que les mises à jour automatiques du système. Cette technologie améliore la gestion énergétique globale tout en simplifiant la maintenance de l’installation photovoltaïque.

Conçu pour offrir une fiabilité maximale, le micro-onduleur bénéficie d’une protection IP67 contre l’humidité et la poussière ainsi qu’une architecture robuste sans point unique de défaillance. Cette conception garantit une excellente durabilité même dans des environnements exigeants.

L’Enphase IQ8HC apporte également une sécurité renforcée avec des fonctions avancées de protection réseau et une déconnexion automatique en cas de coupure électrique. Sa conception compacte Plug & Play facilite l’installation tout en réduisant le temps de câblage.

Compatible avec les réseaux intelligents modernes, il prend en charge les dernières exigences de gestion énergétique et les profils réseau avancés, tout en offrant des performances élevées pour les systèmes photovoltaïques nouvelle génération.

<h3>Points forts :</h3> <ul> <li>Micro-onduleur haute performance pour panneaux solaires haute puissance</li> <li>Technologie MPPT indépendante pour chaque panneau photovoltaïque</li> <li>Optimisation de la production solaire même en cas d’ombrage</li> <li>Communication intelligente et surveillance en temps réel</li> <li>Installation rapide grâce au système Plug & Play</li> <li>Protection IP67 contre poussière et humidité</li> <li>Fonctionnement sécurisé avec protections réseau avancées</li> <li>Mises à jour automatiques et gestion intelligente du système</li> <li>Compatible installations résidentielles et commerciales</li> <li>Garantie fabricant longue durée</li> </ul>
`,

    fiche: [
  { label: "Puissance de sortie (AC)", value: "380VA" },
  { label: "Modèle", value: "Enphase IQ8" },
],

    downloads: [
     { name: "DS-Micro-onduleur-Enphase-IQ8-FR", link: "/files/iq8se-ds-0074-01-fr-int-2023-03-29.pdf" },
{ name: "Schéma de branchement IQ8", link: "/files/schema-iq8.pdf" },
{ name: "Important_IQ8_Series_FR_DIGITAL", link: "/files/important-iq8-series-fr-digital.pdf"},
{ name: "IQ8PV 14A-MC4-Micro-Manual-FR", link: "/files/iq8pv-14a-mc4-micro-manual-fr.pdf"},
{ name: "IQ8PV-14A-QIG-FR-INT", link: "/files/iq8pv-14a-qig-fr-int.pdf"},
{ name: "IQ8SE-14A-DS-FR", link: "/files/iq8se-14a-ds-fr.pdf"},
{ name: "IQ8_Schema unifilaire_Enphase", link: "/files/iq8pv-14a-and-iq8x-sld-installation-manual-fr.pdf"},
  ]}
]