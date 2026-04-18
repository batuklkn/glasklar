"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { services } from "@/content/services";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        aria-label={open ? "Menue schliessen" : "Menue oeffnen"}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-navy md:hidden"
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-[2px] transition-opacity md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
      />

      <aside
        className={cn(
          "fixed right-0 top-0 z-50 flex h-dvh w-[88%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-100 px-6 py-4">
          <p className="font-heading text-lg font-extrabold text-navy">Navigation</p>
          <button
            aria-label="Menü schließen"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200"
            onClick={() => setOpen(false)}
            type="button"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable nav links */}
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <Link
                className={cn(
                  "block rounded-md px-3 py-2.5 text-base font-medium",
                  pathname === link.href ? "bg-slate-100 text-navy" : "text-slate-700 hover:bg-slate-50",
                )}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-4 rounded-md border border-slate-200 p-3">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Leistungen</p>
              <ul className="space-y-1">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      className="block rounded-md px-2 py-2 text-sm text-slate-700 hover:bg-slate-50"
                      href={`/dienstleistungen/${service.slug}`}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* Bottom CTAs */}
        <div className="shrink-0 grid gap-3 border-t border-slate-100 px-6 py-5">
          <Button asChild className="w-full" size="lg" variant="amber">
            <Link href="/kontakt">Angebot anfordern</Link>
          </Button>
          <Button asChild className="w-full" size="lg" variant="navy">
            <a href={siteConfig.phoneHref}>Anrufen: {siteConfig.phoneDisplay}</a>
          </Button>
        </div>
      </aside>
    </>
  );
}

export function FloatingBottomCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2">
        <a
          className="inline-flex h-11 items-center justify-center gap-2 rounded-[7px] border border-navy text-sm font-semibold text-navy"
          href={siteConfig.phoneHref}
        >
          <Phone className="h-4 w-4" />
          Anrufen
        </a>
        <Link
          className="inline-flex h-11 items-center justify-center rounded-[7px] bg-amber px-4 text-sm font-semibold text-slate-950"
          href="/kontakt"
        >
          Angebot anfordern
        </Link>
      </div>
    </div>
  );
}
