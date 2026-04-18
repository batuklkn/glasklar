"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { services } from "@/content/services";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ServiceIcon } from "@/components/ui/service-icon";
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
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-navy md:hidden"
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Backdrop */}
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
        {/* Header – navy */}
        <div className="flex shrink-0 items-center justify-between bg-navy px-6 py-5">
          <div>
            <p className="font-heading text-lg font-extrabold leading-none text-white">GlasKlar</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan">Gebäudereinigung</p>
          </div>
          <button
            aria-label="Menü schließen"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white hover:bg-white/20"
            onClick={() => setOpen(false)}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable nav */}
        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5">
          {/* Main links */}
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <Link
                className={cn(
                  "block rounded-xl px-4 py-3 text-base font-semibold transition-colors",
                  pathname === link.href
                    ? "bg-navy/10 text-navy"
                    : "text-slate-700 hover:bg-slate-100 hover:text-navy",
                )}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="my-4 border-t border-slate-100" />

          {/* Services */}
          <p className="mb-2 px-4 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
            Leistungen
          </p>
          <ul className="space-y-0.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-navy"
                  href={`/dienstleistungen/${service.slug}`}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-navy text-white">
                    <ServiceIcon className="h-3.5 w-3.5" name={service.icon} strokeWidth={2} />
                  </span>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo footer */}
        <div className="shrink-0 flex items-center justify-center border-t border-slate-100 bg-slate-50 py-4">
          <Image
            alt="GlasKlar Logo"
            className="h-20 w-auto object-contain"
            height={120}
            src="/images/logo.png"
            width={120}
          />
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
