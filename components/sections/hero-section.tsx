"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section className="relative min-h-[62svh] overflow-hidden pt-28 pb-16 text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-team.webp')" }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-navy/95 via-navy/80 to-navy/40" />

      <Container className="relative z-10">
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan"
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.35 }}
        >
          Gebäudereinigung Wertheim · Umgebung
        </motion.p>

        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl font-heading text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 14 }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          Sauberkeit, die begeistert.
        </motion.h1>

        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 max-w-2xl text-lg text-white/85 sm:text-xl"
          initial={{ opacity: 0, y: 14 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          Professionell · Zuverlässig · Seit über 10 Jahren. Ihr inhabergeführter Partner für
          Gebäudereinigung in Wertheim.
        </motion.p>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          <Button asChild size="lg" variant="amber">
            <Link href="/kontakt">Kostenloses Angebot anfordern</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={siteConfig.phoneHref}>
              <Phone className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </a>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
