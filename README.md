# GlasKlar Website

Neue Next.js 15 Website fuer **GlasKlar Gebaeudereinigung** mit B2B-Fokus, 3-Schritt-Formular, Service-Landingpages, Blog (MDX + ISR), Referenzen und SEO-Grundsetup.

## Stack

- Next.js 15 (App Router)
- Tailwind CSS v4
- TypeScript
- Lucide React
- React Hook Form + Zod
- Resend (Kontaktformular)
- gray-matter + MDX-Content
- Framer Motion (minimal)

## Projektstart

```bash
npm install
cp .env.example .env.local
npm run dev
```

App laeuft dann auf `http://localhost:3000`.

## Wichtige Skripte

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Content-Struktur

- `content/services.ts` - Service-Daten fuer Uebersicht/Detailseiten
- `content/reviews.ts` - Google-Review-Seed-Daten
- `content/references.ts` - Galerie + Before/After Daten
- `content/blog/*.mdx` - Blogartikel mit Frontmatter

## Kontaktformular / Resend

Die API-Route liegt unter `app/api/contact/route.ts`.

Erforderliche Variablen:

- `RESEND_API_KEY`
- `CONTACT_FROM`
- `CONTACT_RECIPIENT`

Hinweis: Ohne `RESEND_API_KEY` wird im Development-Modus kein Versand ausgefuehrt (Anfrage wird trotzdem mit `ok` beantwortet).

## Vercel Deployment

1. Projekt in Vercel importieren.
2. Build Command: `npm run build`.
3. Environment Variables in Vercel setzen:
   - `NEXT_PUBLIC_SITE_URL`
   - `RESEND_API_KEY`
   - `CONTACT_FROM`
   - `CONTACT_RECIPIENT`
4. Deploy ausfuehren.

Nach dem Deploy laufen statische Seiten via SSG, Blogseiten via ISR und die Formularverarbeitung ueber die API-Route.
