import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Danke für Ihre Anfrage",
  description: "Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden.",
  path: "/kontakt/danke",
});

export default function ContactSuccessPage() {
  return (
    <section className="bg-gray-light pb-28 pt-44">
      <Container className="max-w-3xl">
        <article className="rounded-card border border-slate-200 bg-white p-10 text-center shadow-card">
          <CheckCircle2 className="mx-auto h-12 w-12 text-cyan" />
          <h1 className="mt-5 font-heading text-4xl font-extrabold text-navy">Danke für Ihre Anfrage!</h1>
          <p className="mt-4 text-lg text-slate-700">Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.</p>
          <Button asChild className="mt-8" variant="navy">
            <Link href="/">Zur Startseite</Link>
          </Button>
        </article>
      </Container>
    </section>
  );
}
