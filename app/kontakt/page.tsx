import { Mail, Phone } from "lucide-react";

import { ContactWizard } from "@/components/forms/contact-wizard";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Kontakt und Angebot",
  description:
    "Kontaktieren Sie GlasKlar für ein unverbindliches Angebot. Antwort innerhalb von 24 Stunden.",
  path: "/kontakt",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        description="Beschreiben Sie Ihr Objekt in drei Schritten. Wir melden uns innerhalb von 24 Stunden bei Ihnen."
        eyebrow="Kontakt"
        title="Kostenloses Angebot anfordern"
      />

      <section className="bg-gray-light py-section">
        <Container className="grid gap-8 xl:grid-cols-[1.55fr_1fr]">
          <ContactWizard />

          <aside className="space-y-5">
            <article className="rounded-card border border-slate-200 bg-white p-6 shadow-card">
              <h2 className="font-heading text-2xl font-bold text-navy">Direkter Kontakt</h2>
              <ul className="mt-5 space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-cyan" />
                  <div>
                    <p className="font-semibold">Telefon</p>
                    <a className="hover:text-navy" href={siteConfig.phoneHref}>
                      {siteConfig.phoneDisplay}
                    </a>
                    <p className="text-sm text-slate-500">Mo-Fr 07:00-18:00 Uhr</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-cyan" />
                  <div>
                    <p className="font-semibold">E-Mail</p>
                    <a className="hover:text-navy" href={`mailto:${siteConfig.email}`}>
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
              </ul>
            </article>

            <article className="rounded-card border border-slate-200 bg-white p-6 shadow-card">
              <h3 className="font-heading text-xl font-bold text-navy">Adresse</h3>
              <p className="mt-3 text-slate-700">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.zip} {siteConfig.address.city}
              </p>
            </article>

            <article className="rounded-card bg-navy p-6 text-white shadow-card">
              <h3 className="font-heading text-xl font-bold">Hinweis für Geschäftskunden</h3>
              <p className="mt-3 text-white/80">
                Für B2B-Kunden bieten wir individuelle Rahmenverträge mit klaren Leistungskennzahlen.
              </p>
            </article>
          </aside>
        </Container>
      </section>
    </>
  );
}
