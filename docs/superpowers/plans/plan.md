# GlasKlar Gebäudereinigung — Implementierungsplan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Neue Next.js 15 Website für GlasKlar Gebäudereinigung — Authority-First, B2B-fokussiert, mit 3-Schritt-Anfrageformular, Blog/SEO und Google-Reviews-Integration.

**Architecture:** SSG für alle statischen Seiten, ISR für Blog-Artikel, API Route für Formular-Verarbeitung via Resend. Content als TypeScript-Dateien und MDX im `/content`-Ordner, keine Datenbank.

**Tech Stack:** Next.js 15 (App Router) · Tailwind CSS v4 · TypeScript · Lucide React · shadcn/ui · React Hook Form + Zod · Resend · Framer Motion (minimal) · Vercel

---

## 24 Tasks in 8 Phasen

---

## Phase 1 — Foundation

- [x] Task 1: Next.js 15 + Tailwind v4 + TypeScript Setup

- [x] Task 2: Design System (CSS-Variablen, Fonts, globals.css)

- [x] Task 3: Shared Types + Service-Content-Daten

---

## Phase 2 — Layout

- [x] Task 4: Navbar (Desktop + Scroll-Verhalten)

- [x] Task 5: MobileNav + Floating Bottom CTA

- [x] Task 6: Footer

---

## Phase 3 — Homepage

- [x] Task 7: Hero Section

- [x] Task 8: TrustBar

- [x] Task 9: ServicesGrid

- [x] Task 10: ReviewsCarousel

- [x] Task 11: AboutTeaser + ConversionBanner + BlogPreview

- [x] Task 12: Homepage page.tsx Komposition

---

## Phase 4 — Innenseiten

- [x] Task 13: Dienstleistungen Übersichtsseite

- [x] Task 14: Service-Detailseiten ([slug])

- [x] Task 15: Über-uns-Seite

- [x] Task 16: Kontakt + 3-Schritt-Formular

- [x] Task 17: Contact API Route (Resend)

---

## Phase 5 — Blog

- [x] Task 18: MDX Setup + gray-matter

- [x] Task 19: Blog-Listingseite

- [x] Task 20: Blog-Artikelseite

---

## Phase 6 — Referenzen

- [x] Task 21: Galerie + Before/After Slider

---

## Phase 7 — SEO + Legal

- [x] Task 22: Metadata + Sitemap + Schema.org

- [x] Task 23: Impressum + Datenschutz

---

## Phase 8 — Deploy

- [x] Task 24: Env-Variablen + Vercel Deployment
