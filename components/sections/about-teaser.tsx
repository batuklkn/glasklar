import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";

import { Container } from "@/components/ui/container";

const bullets = ["Inhabergeführt", "Persönlicher Kontakt", "Lokale Verwurzelung"];

export function AboutTeaser() {
  return (
    <section className="bg-gray-light py-section">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">Über uns</p>
            <h2 className="font-heading text-3xl font-extrabold text-navy sm:text-4xl">
              Ihr lokaler Partner seit über 10 Jahren
            </h2>
            <p className="mt-5 text-lg text-slate-700">
              Ich bin Sinan Kaleli und habe GlasKlar mit einem klaren Anspruch aufgebaut: zuverlässige,
              transparente und hochwertige Gebäudereinigung für Unternehmen in der Region Wertheim.
              Unser Team arbeitet mit festen Standards und direktem Draht zum Inhaber.
            </p>

            <ul className="mt-6 space-y-3">
              {bullets.map((bullet) => (
                <li className="flex items-center gap-3 text-slate-700" key={bullet}>
                  <BadgeCheck className="h-5 w-5 text-cyan" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <Link className="mt-8 inline-flex items-center gap-2 font-semibold text-navy hover:text-cyan" href="/ueber-uns">
              Mehr über uns
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-card border border-slate-200 bg-white p-3 shadow-card">
            <Image
              alt="Inhaber Sinan Kaleli mit Team"
              className="h-auto w-full rounded-xl"
              height={720}
              priority={false}
              src="/images/hero-team.webp"
              width={900}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
