"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone } from "lucide-react";
import { useEffect, useState } from "react";

import { services } from "@/content/services";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ServiceIcon } from "@/components/ui/service-icon";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all",
        isScrolled ? "bg-white/95 py-3 shadow-lg backdrop-blur" : "bg-white/92 py-4 backdrop-blur",
      )}
    >
      <Container className="flex items-center justify-between gap-4">
        <Link className="group" href="/">
          <p className="font-heading text-xl font-extrabold leading-none text-navy">GlasKlar</p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan">Gebäudereinigung</p>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <div className="group relative">
            <button
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-medium transition-colors",
                pathname.startsWith("/dienstleistungen") ? "text-navy" : "text-slate-700 hover:text-navy",
              )}
              type="button"
            >
              Dienstleistungen
              <ChevronDown className="h-4 w-4" />
            </button>

            <div className="pointer-events-none absolute left-0 top-full w-80 pt-3 opacity-0 transition-all group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="rounded-2xl border border-slate-100 bg-white p-2 shadow-2xl">
                <ul className="space-y-0.5">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-navy"
                        href={`/dienstleistungen/${service.slug}`}
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy text-white">
                          <ServiceIcon className="h-4 w-4" name={service.icon} strokeWidth={2} />
                        </span>
                        <span className="font-medium">{service.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 border-t border-slate-100 pt-2">
                  <Link
                    className="flex items-center justify-center gap-1.5 rounded-xl bg-navy px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-navy/90"
                    href="/dienstleistungen"
                  >
                    Alle Leistungen ansehen
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {navLinks
            .filter((link) => link.href !== "/dienstleistungen")
            .map((link) => (
              <Link
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === link.href ? "text-navy" : "text-slate-700 hover:text-navy",
                )}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild size="sm" variant="ghost">
            <a className="gap-1.5" href={siteConfig.phoneHref}>
              <Phone className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </a>
          </Button>
          <Button asChild size="sm" variant="amber">
            <Link href="/kontakt">Angebot anfordern</Link>
          </Button>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
