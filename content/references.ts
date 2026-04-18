import { BeforeAfterItem, ReferenceProject } from "@/lib/types";

export const referenceProjects: ReferenceProject[] = [
  {
    id: "p1",
    title: "Bürozentrum Mainblick",
    category: "unterhaltsreinigung",
    description: "Regelreinigung für 4 Etagen inklusive Meeting- und Empfangsbereiche.",
    image: "/images/reference-office.svg",
  },
  {
    id: "p2",
    title: "Facharztpraxis Wertheim",
    category: "grundreinigung",
    description: "Tiefenreinigung sensibler Bereiche ausserhalb der Sprechzeiten.",
    image: "/images/reference-practice.svg",
  },
  {
    id: "p3",
    title: "Neubaugebiet am Tauberbogen",
    category: "bauendreinigung",
    description: "Bauendreinigung von 18 Wohneinheiten inkl. Fensterelementen.",
    image: "/images/reference-construction.svg",
  },
  {
    id: "p4",
    title: "Einzelhandel Altstadt",
    category: "glasreinigung",
    description: "Monatliche Schaufenster- und Fassadenreinigung.",
    image: "/images/reference-retail.svg",
  },
  {
    id: "p5",
    title: "Wohnanlage Mühlenweg",
    category: "hausmeisterservice",
    description: "Laufende Objektbetreuung mit Winter- und Aussenpflege.",
    image: "/images/reference-residential.svg",
  },
  {
    id: "p6",
    title: "Industriehalle Nordpark",
    category: "sonderreinigung",
    description: "Spezialreinigung nach Umbau bei laufendem Betrieb.",
    image: "/images/reference-industrial.svg",
  },
];

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: "ba1",
    title: "Treppenhaus nach Sanierung",
    description: "Entfernung von Staub, Schutzfolien und Zementschleier in 2 Etappen.",
    beforeImage: "/images/before-after-1-before.svg",
    afterImage: "/images/before-after-1-after.svg",
  },
  {
    id: "ba2",
    title: "Bürofläche mit starken Belagsrückständen",
    description: "Grundreinigung mit maschineller Nachpflege für gleichmäßiges Ergebnis.",
    beforeImage: "/images/before-after-2-before.svg",
    afterImage: "/images/before-after-2-after.svg",
  },
  {
    id: "ba3",
    title: "Glasfassade nach Bauphase",
    description: "Streifenfreie Reinigung von Glas, Rahmen und Falzen.",
    beforeImage: "/images/before-after-3-before.svg",
    afterImage: "/images/before-after-3-after.svg",
  },
];
