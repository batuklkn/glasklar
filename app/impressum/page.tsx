import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Impressum",
  description: "Impressum der GlasKlar Gebäudereinigung in Wertheim.",
  path: "/impressum",
});

export default function ImprintPage() {
  return (
    <>
      <PageHero description="Pflichtangaben gemäß § 5 TMG" eyebrow="Rechtliches" title="Impressum" />

      <section className="bg-white py-section">
        <Container className="max-w-4xl space-y-8 text-slate-700">
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">Anbieter</h2>
            <p className="mt-3">{siteConfig.legalName}</p>
            <p>{siteConfig.address.street}</p>
            <p>
              {siteConfig.address.zip} {siteConfig.address.city}
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">Kontakt</h2>
            <p className="mt-3">Telefon: {siteConfig.phoneDisplay}</p>
            <p>E-Mail: {siteConfig.email}</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">Umsatzsteuer-ID</h2>
            <p className="mt-3">Wird bei Bedarf ergänzt.</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">Verantwortlich für Inhalte</h2>
            <p className="mt-3">Sinan Kaleli, Anschrift wie oben.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
