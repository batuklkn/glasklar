import Link from "next/link";

import { services } from "@/content/services";
import { createMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ServiceIcon } from "@/components/ui/service-icon";
import { PageHero } from "@/components/sections/page-hero";

export const metadata = createMetadata({
  title: "Dienstleistungen",
  description:
    "Alle Leistungen von GlasKlar in Wertheim: Unterhaltsreinigung, Glasreinigung, Bauendreinigung, Grundreinigung, Sonderreinigung und Hausmeisterservice.",
  path: "/dienstleistungen",
});

export default function ServicesOverviewPage() {
  return (
    <>
      <PageHero
        description="Von der regelmäßigen Unterhaltsreinigung bis zu spezialisierten Sonderleistungen erhalten Sie bei GlasKlar alle Services aus einer Hand."
        eyebrow="Leistungen"
        title="Professionelle Reinigungsservices für Unternehmen und Privatkunden"
      />

      <section className="bg-gray-light py-section">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article className="rounded-card border border-slate-200 bg-white p-6 shadow-card" key={service.slug}>
                <ServiceIcon className="h-8 w-8 text-cyan" name={service.icon} />
                <h2 className="mt-6 font-heading text-2xl font-bold text-navy">{service.name}</h2>
                <p className="mt-4 text-slate-600">{service.shortDescription}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
                <Button asChild className="mt-6" variant="navy">
                  <Link href={`/dienstleistungen/${service.slug}`}>Mehr erfahren</Link>
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
