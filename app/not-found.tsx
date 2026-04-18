import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFoundPage() {
  return (
    <section className="bg-gray-light pb-24 pt-44">
      <Container className="max-w-3xl">
        <article className="rounded-card border border-slate-200 bg-white p-10 text-center shadow-card">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">404</p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold text-navy">Seite nicht gefunden</h1>
          <p className="mt-4 text-slate-700">Die angeforderte Seite existiert nicht oder wurde verschoben.</p>
          <Button asChild className="mt-8" variant="navy">
            <Link href="/">Zur Startseite</Link>
          </Button>
        </article>
      </Container>
    </section>
  );
}
