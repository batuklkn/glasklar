import Image from "next/image";
import Link from "next/link";
import { MapPinned, ShieldCheck, Target, Users } from "lucide-react";

import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";

export const metadata = createMetadata({
  title: "Über uns",
  description:
    "Lernen Sie GlasKlar Gebäudereinigung kennen: inhabergeführt, lokal verwurzelt und seit über 10 Jahren in Wertheim aktiv.",
  path: "/ueber-uns",
});

const timeline = [
  { year: "2014", text: "Gründung von GlasKlar durch Sinan Kaleli in Wertheim." },
  { year: "2018", text: "Ausbau auf feste B2B-Betreuung für regionale Unternehmen." },
  { year: "2022", text: "Erweiterung um strukturierte Objektbetreuung und Hausmeisterservice." },
  { year: "Heute", text: "Etablierter Ansprechpartner für Gebäudereinigung in der Region." },
];

const strengths = [
  {
    icon: ShieldCheck,
    title: "Qualität",
    text: "Klare Prozesse, feste Standards und sichtbare Ergebnisse bei jedem Einsatz.",
  },
  {
    icon: Users,
    title: "Zuverlässigkeit",
    text: "Termintreue, verbindliche Kommunikation und konstante Betreuung.",
  },
  {
    icon: Target,
    title: "Kundenorientierung",
    text: "Lösungen, die zu Ihrem Objekt, Zeitfenster und Budget passen.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        description="Persönlich, transparent und regional: Wir betreuen Unternehmen und Privathaushalte in Wertheim und Umgebung seit über einem Jahrzehnt."
        eyebrow="Über uns"
        title="Ihr lokaler Partner seit über 10 Jahren"
      />

      <section className="bg-white py-section">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-extrabold text-navy">Unser Team</h2>
            <p className="mt-4 text-lg text-slate-700">
              GlasKlar wird von Sinan Kaleli inhabergeführt. Das sorgt für kurze Wege, direkte Erreichbarkeit
              und klare Verantwortung in jedem Projekt.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Individuelle Lösungen statt Standardpakete.</li>
              <li>• Transparente Preise und klare Leistungsumfänge.</li>
              <li>• Termintreue und saubere Dokumentation.</li>
            </ul>
          </div>

          <div className="rounded-card border border-slate-200 bg-gray-light p-3 shadow-card">
            <Image
              alt="GlasKlar Team und Inhaber"
              className="h-auto w-full rounded-xl"
              height={700}
              src="/images/owner-portrait.svg"
              width={1000}
            />
          </div>
        </Container>
      </section>

      <section className="bg-gray-light py-section">
        <Container>
          <h2 className="font-heading text-3xl font-extrabold text-navy">Unsere Geschichte</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {timeline.map((item) => (
              <article className="rounded-card border border-slate-200 bg-white p-5 shadow-card" key={item.year}>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan">{item.year}</p>
                <p className="mt-3 text-slate-700">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-section">
        <Container>
          <h2 className="font-heading text-3xl font-extrabold text-navy">Was uns besonders macht</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {strengths.map(({ icon: Icon, title, text }) => (
              <article className="rounded-card border border-slate-200 bg-white p-6 shadow-card" key={title}>
                <Icon className="h-8 w-8 text-cyan" />
                <h3 className="mt-4 font-heading text-2xl font-bold text-navy">{title}</h3>
                <p className="mt-3 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gray-light py-section">
        <Container>
          <div className="rounded-card border border-slate-200 bg-white p-8 shadow-card">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-heading text-3xl font-extrabold text-navy">Einsatzgebiet</h2>
                <p className="mt-3 flex items-center gap-2 text-slate-700">
                  <MapPinned className="h-5 w-5 text-cyan" />
                  {siteConfig.areas.join(", ")}
                </p>
              </div>
              <Button asChild variant="amber">
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
