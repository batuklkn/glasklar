import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Datenschutz",
  description: "Datenschutzerklärung von GlasKlar Gebäudereinigung.",
  path: "/datenschutz",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero description="Informationen zur Verarbeitung personenbezogener Daten" eyebrow="Rechtliches" title="Datenschutz" />

      <section className="bg-white py-section">
        <Container className="max-w-4xl space-y-8 text-slate-700">
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">1. Verantwortliche Stelle</h2>
            <p className="mt-3">{siteConfig.legalName}</p>
            <p>{siteConfig.address.street}</p>
            <p>
              {siteConfig.address.zip} {siteConfig.address.city}
            </p>
            <p>E-Mail: {siteConfig.email}</p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">2. Erhebung und Verarbeitung</h2>
            <p className="mt-3">
              Bei Nutzung des Kontaktformulars verarbeiten wir die von Ihnen uebermittelten Angaben zur Bearbeitung
              Ihrer Anfrage und für die damit verbundene Kommunikation.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">3. Rechtsgrundlage</h2>
            <p className="mt-3">
              Die Verarbeitung erfolgt nach Art. 6 Abs. 1 lit. b DSGVO zur Durchführung vorvertraglicher Maßnahmen
              sowie nach Art. 6 Abs. 1 lit. f DSGVO für berechtigte Interessen an einer effizienten Kommunikation.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">4. Versand von Kontaktanfragen</h2>
            <p className="mt-3">
              Für den E-Mail-Versand nutzen wir Resend als technischen Dienstleister. Die Datenverarbeitung erfolgt
              ausschliesslich für die Bearbeitung Ihrer Anfrage.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">5. Ihre Rechte</h2>
            <p className="mt-3">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie
              Datenübertragbarkeit gemäß DSGVO. Bei Fragen wenden Sie sich an {siteConfig.email}.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">6. Analyse und Tracking</h2>
            <p className="mt-3">
              Es wird kein klassisches Tracking mit zustimmungspflichtigen Cookies eingesetzt. Optional kann Vercel
              Analytics cookie-frei genutzt werden.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
