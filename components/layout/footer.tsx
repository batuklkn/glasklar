import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { services } from "@/content/services";
import { navLinks, siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-navy pb-24 pt-16 text-slate-100 md:pb-12">
      <Container className="grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-heading text-2xl font-extrabold">GlasKlar</p>
          <p className="mt-4 max-w-sm text-slate-300">
            Inhabergeführte Gebäudereinigung für Wertheim und Umgebung. Zuverlässige Sauberkeit für
            Gewerbe und Privatkunden.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan">Navigation</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className="text-slate-200 hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
            {services.map((service) => (
              <li key={service.slug}>
                <Link className="text-slate-300 hover:text-white" href={`/dienstleistungen/${service.slug}`}>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan">Kontakt</p>
          <ul className="mt-4 space-y-3 text-slate-200">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-cyan" />
              <a className="hover:text-white" href={siteConfig.phoneHref}>
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-cyan" />
              <a className="hover:text-white" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-cyan" />
              <span>
                {siteConfig.address.street}, {siteConfig.address.zip} {siteConfig.address.city}
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <Container className="mt-12 border-t border-slate-700 pt-6 text-sm text-slate-300">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}
          </p>
          <div className="flex gap-4">
            <Link className="hover:text-white" href="/datenschutz">
              Datenschutz
            </Link>
            <Link className="hover:text-white" href="/impressum">
              Impressum
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
