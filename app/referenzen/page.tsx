import Link from "next/link";

import { reviews } from "@/content/reviews";
import { BeforeAfterSlider } from "@/components/references/before-after-slider";
import { GalleryGrid } from "@/components/references/gallery-grid";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Referenzen",
  description:
    "Einblick in Projekte von GlasKlar: Galerie, Vorher-Nachher-Vergleiche und Kundenstimmen aus Wertheim und Umgebung.",
  path: "/referenzen",
});

export default function ReferencesPage() {
  return (
    <>
      <PageHero
        description="Entdecken Sie echte Projekte aus unterschiedlichen Leistungsbereichen - von Büroobjekten bis zu Bauendreinigungen."
        eyebrow="Referenzen"
        title="Projektvielfalt aus der Praxis"
      />

      <section className="bg-white py-section">
        <Container>
          <SectionHeading align="left" title="Projektgalerie" />
          <GalleryGrid />
        </Container>
      </section>

      <section className="bg-gray-light py-section">
        <Container>
          <SectionHeading
            align="left"
            description="Vergleichen Sie ausgewählte Projekte direkt mit dem interaktiven Vorher/Nachher-Regler."
            title="Vorher / Nachher"
          />
          <BeforeAfterSlider />
        </Container>
      </section>

      <section className="bg-white py-section">
        <Container>
          <SectionHeading align="left" title="Kundenstimmen" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {reviews.slice(0, 3).map((review) => (
              <article className="rounded-card border border-slate-200 bg-white p-5 shadow-card" key={review.id}>
                <p className="text-sm text-slate-500">Google Bewertung</p>
                <p className="mt-3 text-slate-700">&bdquo;{review.quote}&ldquo;</p>
                <p className="mt-4 font-semibold text-navy">{review.name}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-amber py-12">
        <Container className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-extrabold text-slate-950">Ihr Projekt als nächstes?</h2>
            <p className="mt-3 text-slate-900/85">Jetzt unverbindlich anfragen und innerhalb von 24 Stunden Rueckmeldung erhalten.</p>
          </div>
          <Button asChild variant="navy">
            <Link href="/kontakt">Angebot anfordern</Link>
          </Button>
        </Container>
      </section>
    </>
  );
}
