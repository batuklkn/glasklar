import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { serviceMap, services } from "@/content/services";
import { createMetadata } from "@/lib/metadata";
import { ServiceSlug } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ServiceIcon } from "@/components/ui/service-icon";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: ServiceSlug }> }) {
  const { slug } = await params;
  const service = serviceMap[slug];

  if (!service) {
    return createMetadata({
      title: "Dienstleistung nicht gefunden",
      description: "Die angeforderte Leistung wurde nicht gefunden.",
      path: "/dienstleistungen",
    });
  }

  return createMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/dienstleistungen/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: ServiceSlug }>;
}) {
  const { slug } = await params;
  const service = serviceMap[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="bg-navy pb-16 pt-40 text-white">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">Dienstleistung</p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl font-extrabold sm:text-5xl">{service.name}</h1>
          <p className="mt-5 max-w-3xl text-lg text-white/85">{service.heroPromise}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="amber">
              <Link href="/kontakt">Kostenloses Angebot anfordern</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/dienstleistungen">Alle Leistungen ansehen</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-white py-section">
        <Container className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-heading text-3xl font-extrabold text-navy">Was ist {service.name}?</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">{service.definition}</p>

            <h3 className="mt-10 font-heading text-2xl font-bold text-navy">Unsere Dienstleistung im Detail</h3>
            <div className="mt-4 space-y-4 text-slate-700">
              {service.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </div>

            <h3 className="mt-10 font-heading text-2xl font-bold text-navy">Für wen geeignet?</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.targetGroups.map((targetGroup) => (
                <li className="rounded-lg border border-slate-200 bg-gray-light px-4 py-3 text-slate-700" key={targetGroup}>
                  {targetGroup}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <Image
              alt={`${service.name} in Wertheim`}
              className="w-full rounded-card border border-slate-200 shadow-card object-cover"
              height={620}
              src={service.image}
              width={860}
            />

            <div className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
              <h3 className="font-heading text-xl font-bold text-navy">3-Schritt-Prozess</h3>
              <ol className="mt-4 space-y-3">
                {service.process.map((step, index) => (
                  <li className="flex items-start gap-3" key={step}>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <span className="pt-1 text-slate-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </Container>
      </section>

      <section className="bg-gray-light py-section">
        <Container>
          <h2 className="font-heading text-3xl font-extrabold text-navy">Ihre Vorteile</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {service.benefits.map((benefit) => (
              <article className="rounded-card border border-slate-200 bg-white p-5 shadow-card" key={benefit.title}>
                <ServiceIcon className="h-7 w-7 text-cyan" name={benefit.icon} />
                <h3 className="mt-4 font-heading text-xl font-bold text-navy">{benefit.title}</h3>
                <p className="mt-3 text-slate-600">{benefit.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-section">
        <Container>
          <div className="rounded-card bg-amber p-8">
            <h2 className="font-heading text-3xl font-extrabold text-slate-950">
              Kostenloses Angebot für {service.name} anfordern
            </h2>
            <p className="mt-4 text-slate-900/85">Antwort innerhalb von 24 Stunden - unverbindlich und transparent.</p>
            <Button asChild className="mt-6" variant="navy">
              <Link href="/kontakt">Jetzt Anfrage starten</Link>
            </Button>
          </div>

          <div className="mt-12">
            <h3 className="font-heading text-2xl font-bold text-navy">Verwandte Leistungen</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {service.related.map((slug) => (
                <Link
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-cyan hover:text-navy"
                  href={`/dienstleistungen/${slug}`}
                  key={slug}
                >
                  {serviceMap[slug].name}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
