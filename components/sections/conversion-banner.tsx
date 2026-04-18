import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function ConversionBanner() {
  return (
    <section className="bg-amber py-12">
      <Container className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <div>
          <h2 className="font-heading text-3xl font-extrabold text-slate-950">Jetzt kostenloses Angebot anfordern</h2>
          <p className="mt-3 text-base font-medium text-slate-900/85">
            Antwort innerhalb von 24 Stunden · Unverbindlich · Für Privat & Gewerbe
          </p>
        </div>

        <Button asChild size="lg" variant="navy">
          <Link href="/kontakt">Angebot anfordern</Link>
        </Button>
      </Container>
    </section>
  );
}
