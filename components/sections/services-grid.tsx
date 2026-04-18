import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { services } from "@/content/services";
import { ServiceIcon } from "@/components/ui/service-icon";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesGrid() {
  return (
    <section className="bg-gray-light py-section">
      <Container>
        <SectionHeading
          description="Von regelmäßiger Unterhaltsreinigung bis zu Spezialleistungen: Wir decken das komplette Spektrum für Gewerbe und Privatkunden ab."
          title="Unsere Leistungen"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              className="rounded-card bg-navy p-6 text-white shadow-card transition-transform duration-300 hover:-translate-y-0.5"
              key={service.slug}
            >
              <ServiceIcon className="h-8 w-8 text-cyan" name={service.icon} />
              <h3 className="mt-6 font-heading text-2xl font-bold">{service.name}</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/90">
                {service.bullets.map((bullet) => (
                  <li className="flex items-start gap-2" key={bullet}>
                    <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-cyan" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-white"
                href={`/dienstleistungen/${service.slug}`}
              >
                Mehr erfahren
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
