import { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "unterhaltsreinigung",
    name: "Unterhaltsreinigung",
    shortDescription:
      "Regelmäßige Reinigung für Büros, Praxen und Gewerbeflächen mit festen Qualitätsstandards.",
    heroPromise:
      "Saubere Arbeitsumgebungen, auf die sich Ihr Team jeden Tag verlassen kann.",
    icon: "building2",
    bullets: [
      "Flexible Reinigungspläne",
      "Feste Ansprechpartner",
      "Dokumentierte Qualitätskontrollen",
    ],
    definition:
      "Unterhaltsreinigung bedeutet planbare Sauberkeit im laufenden Betrieb. Für Unternehmen in Wertheim und Umgebung übernehmen wir die regelmäßige Reinigung von Arbeitsplätzen, Sanitärbereichen, Küchenzonen und Gemeinschaftsflächen. Dabei richten wir Frequenz, Uhrzeit und Umfang exakt auf Ihre Prozesse aus. So bleiben Arbeitsabläufe ungestört und die Wirkung Ihrer Räume professionell. Unsere Teams arbeiten nach klaren Checklisten, damit Hygiene und Erscheinungsbild dauerhaft auf hohem Niveau bleiben.",
    details: [
      "Wir erstellen gemeinsam mit Ihnen einen individuellen Leistungsplan inklusive Reinigungsintervallen, Prioritäten und Schlüsselbereichen.",
      "Jede Leistung wird transparent dokumentiert, damit Sie nachvollziehen können, was wann und in welchem Umfang gereinigt wurde.",
      "Bei Sonderterminen oder geänderten Nutzungszeiten reagieren wir schnell und passen den Ablauf kurzfristig an.",
    ],
    benefits: [
      {
        title: "Konstanter Eindruck",
        icon: "badgeCheck",
        text: "Ihre Räume wirken für Mitarbeitende, Kunden und Patienten jederzeit gepflegt.",
      },
      {
        title: "Planbare Kosten",
        icon: "calculator",
        text: "Durch feste Intervalle und klare Leistungspakete bleibt Ihr Budget kontrollierbar.",
      },
      {
        title: "Weniger Aufwand intern",
        icon: "clock3",
        text: "Ihr Team muss keine Reinigungskoordination übernehmen und kann sich auf Kernthemen fokussieren.",
      },
    ],
    targetGroups: [
      "Büros und Verwaltungsgebäude",
      "Arztpraxen und Therapiezentren",
      "Kanzleien und Agenturen",
      "Einzelhandel und Showrooms",
    ],
    process: ["Anfrage", "Objektbegehung", "Regelbetrieb mit Qualitätskontrolle"],
    related: ["grundreinigung", "glasreinigung", "hausmeisterservice"],
    image: "/images/unterhaltsreinigung.webp",
    seoTitle: "Unterhaltsreinigung Wertheim | GlasKlar Gebäudereinigung",
    seoDescription:
      "Professionelle Unterhaltsreinigung in Wertheim für Büros, Praxen und Gewerbe. Flexibel, dokumentiert und zuverlässig.",
  },
  {
    slug: "glasreinigung",
    name: "Glasreinigung",
    shortDescription:
      "Streifenfreie Glasflächen innen und außen für Schaufenster, Fassaden und Büroverglasungen.",
    heroPromise:
      "Klare Sicht und ein hochwertiger erster Eindruck für Ihr Unternehmen.",
    icon: "sparkles",
    bullets: [
      "Streifenfreie Ergebnisse",
      "Innen- und Außenreinigung",
      "Rahmen- und Falzpflege inklusive",
    ],
    definition:
      "Saubere Glasflächen sind ein direkter Qualitätsindikator für Ihr Unternehmen. Unsere Glasreinigung in Wertheim umfasst Fenster, Glasfassaden, Schaufenster und Trennwände inklusive Rahmen und Falze. Wir arbeiten mit abgestimmten Verfahren je nach Verschmutzungsgrad und Material, um klare Ergebnisse ohne Schlieren zu erzielen. Ob in festen Intervallen oder als Einzeltermin: GlasKlar sorgt dafür, dass Ihre Immobilie professionell auftritt.",
    details: [
      "Vor jeder Reinigung prüfen wir Zugangsmöglichkeiten, Materialtyp und Sicherheitsanforderungen.",
      "Je nach Objekt kombinieren wir klassische Einwascher-Technik mit entmineralisiertem Wasser für streifenfreie Resultate.",
      "Auch schwer erreichbare Glasbereiche werden mit passender Ausrüstung und gesicherten Arbeitsabläufen bearbeitet.",
    ],
    benefits: [
      {
        title: "Besseres Erscheinungsbild",
        icon: "star",
        text: "Kunden und Besucher nehmen Ihr Objekt sofort als gepflegt und professionell wahr.",
      },
      {
        title: "Werterhalt",
        icon: "shieldCheck",
        text: "Regelmäßige Pflege schützt Glasflächen und Rahmen vor dauerhaften Ablagerungen.",
      },
      {
        title: "Effiziente Durchführung",
        icon: "timer",
        text: "Unsere Teams arbeiten strukturiert und minimieren Störungen im Tagesbetrieb.",
      },
    ],
    targetGroups: [
      "Büro- und Verwaltungsgebäude",
      "Einzelhandel und Schaufensterflächen",
      "Praxen und Gesundheitszentren",
      "Privathaushalte mit hohen Glasanteilen",
    ],
    process: ["Anfrage", "Objektbegehung", "Reinigung nach Intervall oder Einzeltermin"],
    related: ["unterhaltsreinigung", "grundreinigung", "bauendreinigung"],
    image: "/images/glasreinigung.webp",
    seoTitle: "Glasreinigung Wertheim | Streifenfrei mit GlasKlar",
    seoDescription:
      "Professionelle Glasreinigung in Wertheim für Firmen und Privathaushalte. Innen, außen und inklusive Rahmenpflege.",
  },
  {
    slug: "bauendreinigung",
    name: "Bauendreinigung",
    shortDescription:
      "Bezugsfertige Sauberkeit nach Neu- und Umbauprojekten inklusive Feinstaub- und Schutzfolienentfernung.",
    heroPromise:
      "Wir übergeben Ihre Flächen sauber, sicher und bereit für den Start.",
    icon: "hardHat",
    bullets: [
      "Grob- und Feinreinigung",
      "Terminsicher zur Übergabe",
      "Koordination mit Bauleitung",
    ],
    definition:
      "Nach Bau- oder Sanierungsarbeiten bleiben Staub, Folienreste, Mörtelschleier und Schmutz in vielen Bereichen zurück. Unsere Bauendreinigung stellt sicher, dass Ihr Objekt zum Übergabetermin bezugsfertig ist. Wir arbeiten strukturiert nach Baufortschritt und stimmen uns eng mit Bauleitung und Gewerken ab. Dadurch werden Fristen eingehalten und Spätfolgen durch Restverschmutzungen vermieden.",
    details: [
      "In der Grobreinigung entfernen wir Bauschuttreste, Schutzmaterialien und grobe Verschmutzungen.",
      "Die Feinreinigung umfasst Oberflächen, Sanitärbereiche, Böden, Glasflächen und Einbauten bis zur bezugsfertigen Qualität.",
      "Auf Wunsch übernehmen wir Teilabnahmen pro Bauabschnitt, damit Ihre Endabnahme effizient vorbereitet ist.",
    ],
    benefits: [
      {
        title: "Sicherer Einzug",
        icon: "home",
        text: "Nutzer finden ein hygienisches und sofort nutzbares Objekt vor.",
      },
      {
        title: "Saubere Übergabe",
        icon: "clipboardCheck",
        text: "Dokumentierte Leistungen unterstützen eine reibungslose Abnahme.",
      },
      {
        title: "Weniger Nacharbeit",
        icon: "wrench",
        text: "Durch systematisches Vorgehen reduzieren wir Restarbeiten kurz vor dem Termin.",
      },
    ],
    targetGroups: [
      "Bauunternehmen und Projektentwickler",
      "Architekturbüros",
      "Gewerbliche Auftraggeber",
      "Privatpersonen nach Neubau oder Sanierung",
    ],
    process: ["Anfrage", "Baustellenbegehung", "Grob- und Feinreinigung"],
    related: ["grundreinigung", "glasreinigung", "sonderreinigung"],
    image: "/images/bauendreinigung.webp",
    seoTitle: "Bauendreinigung Wertheim | Bezugsfertig mit GlasKlar",
    seoDescription:
      "Bauendreinigung in Wertheim für Neu- und Umbauprojekte. Terminsicher, gründlich und abgestimmt mit Ihrer Bauleitung.",
  },
  {
    slug: "grundreinigung",
    name: "Grundreinigung",
    shortDescription:
      "Intensive Tiefenreinigung für stark beanspruchte Flächen, Beläge und schwer zugängliche Bereiche.",
    heroPromise:
      "Wenn reguläre Reinigung nicht mehr reicht, bringen wir Oberflächen nachhaltig auf Vordermann.",
    icon: "brushCleaning",
    bullets: [
      "Tiefenwirksame Verfahren",
      "Materialgerechte Reinigungsmittel",
      "Ideal vor Wiederinbetriebnahme",
    ],
    definition:
      "Die Grundreinigung entfernt hartnäckige Rückstände, Schichten und Ablagerungen, die sich im laufenden Betrieb aufbauen. Dazu zählen unter anderem Pflegefilme auf Böden, starke Verschmutzungen in Nasszellen oder langjährige Rückstände auf Oberflächen. GlasKlar plant die Reinigung auf Basis von Material, Nutzung und Zustand der Flächen. Das Ergebnis ist eine deutlich sichtbare Aufwertung, die auch die Wirkung anschließender Unterhaltsreinigung verbessert.",
    details: [
      "Wir analysieren vorab Oberflächen und Materialverträglichkeit, um das geeignete Verfahren auszuwählen.",
      "Je nach Bedarf kommen maschinelle Reinigungsprozesse, Schichtentfernung und Nachpflege zum Einsatz.",
      "Nach der Durchführung erhalten Sie Hinweise zur weiteren Pflege, damit das Ergebnis länger erhalten bleibt.",
    ],
    benefits: [
      {
        title: "Sichtbarer Effekt",
        icon: "sparkle",
        text: "Stark beanspruchte Bereiche wirken wieder gepflegt und hochwertig.",
      },
      {
        title: "Längere Lebensdauer",
        icon: "shield",
        text: "Materialgerechte Tiefenpflege reduziert vorzeitigen Verschleiß.",
      },
      {
        title: "Bessere Hygiene",
        icon: "cross",
        text: "Rückstände in sensiblen Zonen werden gründlich entfernt.",
      },
    ],
    targetGroups: [
      "Gewerbeobjekte mit hoher Flächennutzung",
      "Praxen und medizinische Einrichtungen",
      "Wohnanlagen und Treppenhäuser",
      "Objekte vor Neuvermietung oder Wiedereröffnung",
    ],
    process: ["Anfrage", "Zustandsanalyse", "Tiefenreinigung und Nachpflege"],
    related: ["unterhaltsreinigung", "sonderreinigung", "bauendreinigung"],
    image: "/images/grundreinigung.webp",
    seoTitle: "Grundreinigung Wertheim | Tiefenreinigung durch GlasKlar",
    seoDescription:
      "Professionelle Grundreinigung in Wertheim für stark beanspruchte Flächen. Materialgerecht, intensiv und nachhaltig.",
  },
  {
    slug: "sonderreinigung",
    name: "Sonderreinigung",
    shortDescription:
      "Spezialleistungen für besondere Anforderungen und außergewöhnliche Verschmutzungen.",
    heroPromise:
      "Individuelle Reinigungslösungen für Situationen, in denen Standardprozesse nicht ausreichen.",
    icon: "flaskConical",
    bullets: [
      "Individuell geplant",
      "Spezialverfahren nach Objektart",
      "Schnelle Einsatzbereitschaft",
    ],
    definition:
      "Nicht jede Reinigungsaufgabe lässt sich mit Standardleistungen lösen. Unsere Sonderreinigung deckt anspruchsvolle Einsatzfelder ab, zum Beispiel stark verschmutzte Bereiche nach Events, Geruchsneutralisierung, Reinigung nach Wasserschaden oder intensive Detailarbeiten in schwer erreichbaren Zonen. Wir entwickeln für jedes Objekt ein passendes Vorgehen inklusive Zeitplan, Sicherheitsaspekten und Materialschutz.",
    details: [
      "Jeder Auftrag beginnt mit einer kurzen technischen Einschätzung der Situation vor Ort.",
      "Wir definieren geeignete Verfahren und setzen nur auf Materialien, die zu Oberfläche und Nutzung passen.",
      "Bei dringenden Fällen koordinieren wir kurzfristige Termine, um Folgeschäden zu vermeiden.",
    ],
    benefits: [
      {
        title: "Maßgeschneiderte Lösung",
        icon: "slidersHorizontal",
        text: "Leistungsumfang und Methode werden exakt auf den Fall zugeschnitten.",
      },
      {
        title: "Schnelle Reaktion",
        icon: "alarmClock",
        text: "Gerade bei kritischen Situationen ist ein zügiger Einsatz entscheidend.",
      },
      {
        title: "Sicheres Vorgehen",
        icon: "shieldAlert",
        text: "Wir berücksichtigen Materialschutz und objektspezifische Risiken in jedem Schritt.",
      },
    ],
    targetGroups: [
      "Unternehmen mit Sonderflächen",
      "Veranstaltungsorte",
      "Eigentümer bei Schadenslagen",
      "Privat- und Gewerbekunden mit Spezialanforderungen",
    ],
    process: ["Anfrage", "Situationsanalyse", "Spezialreinigung"],
    related: ["grundreinigung", "bauendreinigung", "hausmeisterservice"],
    image: "/images/sonderreinigung.webp",
    seoTitle: "Sonderreinigung Wertheim | Individuelle Lösungen",
    seoDescription:
      "Sonderreinigung in Wertheim für spezielle Anforderungen. Schnell, strukturiert und objektgerecht umgesetzt.",
  },
  {
    slug: "hausmeisterservice",
    name: "Hausmeisterservice",
    shortDescription:
      "Zuverlässige Objektbetreuung für Wohn- und Gewerbeimmobilien aus einer Hand.",
    heroPromise:
      "Wir halten Ihre Immobilie funktional, gepflegt und professionell betreut.",
    icon: "keyRound",
    bullets: [
      "Regelmäßige Objektkontrollen",
      "Kleine technische Tätigkeiten",
      "Pflege von Außenanlagen",
    ],
    definition:
      "Unser Hausmeisterservice entlastet Eigentümer, Verwalter und Unternehmen bei der laufenden Objektbetreuung. Wir übernehmen regelmäßige Kontrollgänge, kleinere Instandhaltungsaufgaben, Pflegearbeiten und koordinierende Tätigkeiten rund um Ihre Immobilie. Damit bleiben Gebäude technisch und optisch in einem guten Zustand, ohne dass Sie mehrere Dienstleister steuern müssen.",
    details: [
      "Wir definieren feste Kontrollintervalle und dokumentieren Auffälligkeiten transparent.",
      "Kleinere Maßnahmen wie Lampenwechsel, Nachjustierungen oder saisonale Pflegearbeiten übernehmen wir direkt.",
      "Bei größeren Themen koordinieren wir die Weitergabe an Fachfirmen und halten Sie aktiv informiert.",
    ],
    benefits: [
      {
        title: "Rundumbetreuung",
        icon: "handHelping",
        text: "Ein Ansprechpartner für viele wiederkehrende Aufgaben am Objekt.",
      },
      {
        title: "Schneller Überblick",
        icon: "scanEye",
        text: "Regelmäßige Kontrollen machen Handlungsbedarf früh sichtbar.",
      },
      {
        title: "Entlastung für Verwaltung",
        icon: "briefcaseBusiness",
        text: "Weniger Koordinationsaufwand und klar strukturierte Kommunikation.",
      },
    ],
    targetGroups: [
      "Hausverwaltungen",
      "Eigentümer von Gewerbeobjekten",
      "Wohnanlagen",
      "Kleine und mittlere Unternehmen",
    ],
    process: ["Anfrage", "Objektbegehung", "Laufender Service mit Reporting"],
    related: ["unterhaltsreinigung", "sonderreinigung", "glasreinigung"],
    image: "/images/hausmeisterservice.webp",
    seoTitle: "Hausmeisterservice Wertheim | Zuverlässige Objektbetreuung",
    seoDescription:
      "Hausmeisterservice in Wertheim für Wohn- und Gewerbeobjekte. Regelmäßige Kontrollen, Pflege und Betreuung aus einer Hand.",
  },
];

export const serviceMap = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<(typeof services)[number]["slug"], Service>;
