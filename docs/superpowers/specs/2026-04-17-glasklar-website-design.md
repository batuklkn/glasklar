# GlasKlar Gebäudereinigung — Website Design Spec

**Datum:** 2026-04-17  
**Unternehmen:** GlasKlar Gebäudereinigung, Inhaber Sinan Kaleli, 97877 Wertheim  
**Ziel:** Neue, professionellere Website die deutlich mehr B2B-Anfragen generiert als die bestehende

---

## 1. Zielgruppe & Positionierung

**Primär — B2B (ca. 80%):**  
Geschäftsführer, Facility Manager, Büroleitungen, Arztpraxen, Unternehmen in Wertheim und Umgebung. Diese Zielgruppe recherchiert vor der Anfrage ausführlich, braucht Vertrauen, Kompetenz-Belege und klare Kommunikation.

**Sekundär — B2C (ca. 20%):**  
Privathaushalte für Grundreinigung, Umzugsreinigung, Sonderreinigung. Werden nicht aktiv angesprochen, aber auch nicht abgeblockt.

**Positionierung:**  
GlasKlar ist der vertrauenswürdige, lokale Reinigungspartner in der Region Wertheim — inhabergeführt, seit über 10 Jahren, mit nachgewiesenen Google-Bewertungen und echtem Team.

**Alleinstellungsmerkmal (USP):**  
- Einziger lokaler Anbieter mit prominenten Google-Bewertungen auf der Website
- Persönlicher Inhaberkontakt (Sinan Kaleli)
- Vollständiges Leistungsspektrum aus einer Hand
- Echte Teamfotos und Projektdokumentation

---

## 2. Strategie — Authority-First

Die Website positioniert GlasKlar als die unangefochtene Autorität für Gebäudereinigung in der Region Wertheim. Jeder Seitenabschnitt baut Vertrauen auf, bevor er zur Conversion führt.

**Vertrauenspyramide:**
1. Zahlen (10+ Jahre, 200+ Kunden, 4,9 Google-Rating)
2. Soziale Beweise (Google-Reviews mit echten Namen)
3. Authentizität (Teamfotos, Inhaberphoto, echte Projektfotos)
4. Kompetenz (detaillierte Service-Seiten, Blog/Ratgeber)
5. Conversion (mehrstufiges Formular, prominente Telefonnummer)

---

## 3. Seitenarchitektur

### Hauptseiten

| Seite | Pfad | Rendering |
|-------|------|-----------|
| Home | `/` | SSG |
| Dienstleistungen (Übersicht) | `/dienstleistungen` | SSG |
| Unterhaltsreinigung | `/dienstleistungen/unterhaltsreinigung` | SSG |
| Glasreinigung | `/dienstleistungen/glasreinigung` | SSG |
| Bauendreinigung | `/dienstleistungen/bauendreinigung` | SSG |
| Grundreinigung | `/dienstleistungen/grundreinigung` | SSG |
| Sonderreinigung | `/dienstleistungen/sonderreinigung` | SSG |
| Hausmeisterservice | `/dienstleistungen/hausmeisterservice` | SSG |
| Über uns | `/ueber-uns` | SSG |
| Referenzen | `/referenzen` | SSG |
| Blog (Übersicht) | `/blog` | ISR |
| Blog-Artikel | `/blog/[slug]` | ISR |
| Kontakt / Angebot | `/kontakt` | SSG + API Route |
| Impressum | `/impressum` | SSG |
| Datenschutz | `/datenschutz` | SSG |

### Navigation (Fixed, immer sichtbar)

```
Logo | Dienstleistungen ▾ | Über uns | Blog | Kontakt    [📞 09342 3029778]  [Angebot anfordern →]
```

- Dropdown bei Dienstleistungen zeigt alle 6 Services
- Telefonnummer als Click-to-Call
- "Angebot anfordern" in Amber-Farbe (#f59e0b) — höchste visuelle Priorität
- Bei Scroll: Navbar wird kompakter mit Box-Shadow

### Mobile Navigation

- Hamburger-Menü
- Floating Bottom Bar: `[📞 Anrufen]  [Angebot anfordern]` — immer sichtbar

---

## 4. Homepage — Seitenstruktur

### Section 1: Hero (Vollbild)
- **Hintergrund:** Echtes Teamfoto als Vollbild, mit dunklem Overlay (Navy-Gradient links)
- **Overline:** `GEBÄUDEREINIGUNG · WERTHEIM & UMGEBUNG` (Cyan, Uppercase, 12px)
- **Headline (H1):** `Sauberkeit, die begeistert.` (Plus Jakarta Sans 800, 56px, weiß)
- **Subline:** `Professionell · Zuverlässig · Seit über 10 Jahren` (Inter 400, weiß/75%)
- **CTAs:**
  - Primär: `Kostenloses Angebot anfordern →` (Amber #f59e0b, schwarz)
  - Sekundär: `📞 09342 3029778` (transparent, weißer Rand)
- **SEO-Keyword:** "Gebäudereinigung Wertheim" in H1 oder Overline

### Section 2: Trust Bar
- 4 Kennzahlen nebeneinander auf weißem Hintergrund mit Cyan-Toplinie
- `10+ Jahre Erfahrung` · `4,9 ⭐ Google Rating` · `200+ Zufriedene Kunden` · `6 Leistungsbereiche`
- Zahlen in Plus Jakarta Sans 800, Navy — Beschriftung in Inter, grau

### Section 3: Dienstleistungen
- Section-Titel: `Unsere Leistungen` (H2, zentriert)
- 3×2 Karten-Grid (auf Mobile: 1 Spalte)
- Jede Karte: Navy-Hintergrund, Lucide-Icon oben, Titel, 3 Bullet Points mit Cyan-Haken, `Mehr erfahren →`-Link
- Services: Unterhaltsreinigung, Glasreinigung, Bauendreinigung, Grundreinigung, Sonderreinigung, Hausmeisterservice

### Section 4: Google-Bewertungen
- Section-Titel: `Was unsere Kunden sagen` (H2, zentriert)
- Karussell mit 3 sichtbaren Karten gleichzeitig (auf Mobile: 1)
- Jede Karte: Sterne, Google-Badge, Zitat, Avatar-Icon + Name + Datum
- Border-Left: 3px Cyan
- CTA darunter: `Alle Bewertungen auf Google ansehen →` (Link zum Google-Profil)

### Section 5: Über uns Teaser
- 2-Spalten-Layout: links Text, rechts Foto des Inhabers
- Kurzer persönlicher Text (3–4 Sätze über Sinan Kaleli, Gründungsgeschichte)
- Bullet-Points: Inhabergeführt · Persönlicher Kontakt · Lokale Verwurzelung
- CTA: `Mehr über uns →`

### Section 6: Conversion Banner
- Voller Breite, Amber-Hintergrund (#f59e0b)
- Headline: `Jetzt kostenloses Angebot anfordern`
- Subline: `Antwort innerhalb von 24 Stunden · Unverbindlich · Für Privat & Gewerbe`
- CTA: `Angebot anfordern →` (Navy-Hintergrund, weiß)

### Section 7: Blog-Vorschau
- Section-Titel: `Ratgeber & Tipps` (H2)
- 3 neueste Blog-Artikel als Karten (Bild, Kategorie-Tag, Titel, Datum)
- CTA: `Alle Artikel lesen →`

### Footer
- Logo + Kurzbeschreibung (links)
- Navigation-Links (mitte)
- Kontaktdaten: Telefon, E-Mail, Adresse (rechts)
- Unterzeile: Copyright · Datenschutz · Impressum

---

## 5. Service-Detailseiten (×6)

Einheitliche Struktur:

1. **Hero:** Service-Name als H1, kurzes Versprechen, Foto, CTA
2. **Was ist [Service]?** — Definition und Nutzen (150–200 Wörter)
3. **Unsere Dienstleistung** — Detaillierte Beschreibung was GlasKlar macht
4. **Vorteile** — 3–4 Bullet Points mit Lucide Icons
5. **Für wen geeignet?** — Zielgruppen (Büros, Praxen, Industrie etc.)
6. **Prozess** — 3-Schritt-Ablauf (Anfrage → Besichtigung → Reinigung)
7. **CTA** — "Kostenloses Angebot für [Service] anfordern"
8. **Verwandte Leistungen** — Links zu anderen Services

---

## 6. Über-uns-Seite

1. **Hero:** Navy-Hintergrund, Teamfoto, Headline `Ihr lokaler Partner seit über 10 Jahren`
2. **Unser Team:** Foto von Sinan Kaleli + kurze persönliche Vorstellung
3. **Unsere Geschichte:** Timeline seit Gründung
4. **Was macht uns besonders:** 3 Spalten (Qualität, Zuverlässigkeit, Kundenorientierung) mit Lucide Icons
5. **Werte:** Individuelle Lösungen · Transparente Preise · Termintreue
6. **Einsatzgebiet:** Karte oder Text mit "Wertheim, Tauberbischofsheim, Bad Mergentheim, Umgebung"
7. **CTA:** Kontaktaufnahme

---

## 7. Referenzen-Seite

1. **Intro:** Kurzer Text über Projektvielfalt
2. **Projektgalerie:** Masonry-Grid mit echten Fotos, gefiltert nach Service-Kategorie
3. **Vorher/Nachher:** Slider-Komponente für 2–3 beeindruckende Projekte
4. **Kundenstimmen:** Erweiterte Review-Karten mit mehr Text
5. **CTA:** Angebot anfordern

---

## 8. Blog / Ratgeber

- Artikel-Übersicht: Karten-Grid mit Filter nach Kategorie
- Kategorien: Unterhaltsreinigung · Glasreinigung · Bauendreinigung · Grundreinigung · Tipps & Tricks
- Start-Artikel (für SEO):
  - "Wie oft sollte ein Büro gereinigt werden?" (Unterhaltsreinigung Wertheim)
  - "Was kostet eine Grundreinigung?" (Preise, lokaler Fokus)
  - "Bauendreinigung: Was gehört dazu?" (Bauendreinigung)
  - "Streifenfreie Glasreinigung — Tipps vom Profi" (Glasreinigung)
  - "Hausmeisterservice Wertheim — was wir anbieten" (lokales SEO)

---

## 9. Kontakt / Angebot-Seite

### 3-Schritt-Formular

**Schritt 1 — Service wählen:**  
Welche Leistung interessiert Sie? (6 Kacheln mit Icon + Name, anklickbar, Mehrfachauswahl möglich)

**Schritt 2 — Objekt beschreiben:**  
- Art des Objekts (Büro, Praxis, Wohnhaus, Neubau, Sonstiges)
- Ungefähre Fläche in m² (Dropdown: <100 / 100–300 / 300–1000 / >1000)
- Reinigungshäufigkeit (Einmalig, Wöchentlich, 2× pro Woche, Monatlich, Nach Bedarf)

**Schritt 3 — Kontaktdaten:**  
- Vorname, Nachname (Required)
- Telefon (Required)
- E-Mail (Optional)
- Wunschtermin / Anmerkungen
- Datenschutz-Checkbox (Required)

**Nach Absenden:**  
- Bestätigungsseite: "Danke! Wir melden uns innerhalb von 24 Stunden."
- E-Mail-Benachrichtigung an glasklar@gmail.com via Resend API

### Kontakt-Alternativen (neben Formular)
- Telefon: 09342 3029778 (Mo–Fr 7:00–18:00 Uhr)
- E-Mail: glasklar@gmail.com
- Adresse: Mühlenweg 14G, 97877 Wertheim
- B2B-Hinweis: "Für Geschäftskunden bieten wir individuelle Rahmenverträge an."

---

## 10. Design System

### Farben

| Token | Wert | Verwendung |
|-------|------|------------|
| `navy` | `#1e3a5f` | Headlines, Navigation, Dark Sections |
| `navy-mid` | `#2d6a9f` | Hero-Gradient, Hover-States |
| `cyan` | `#00b4d8` | Buttons, Links, Akzente, Border-Left |
| `amber` | `#f59e0b` | Primärer CTA-Button, Conversion-Banner |
| `amber-dark` | `#e07a00` | Amber Hover |
| `white` | `#ffffff` | Hintergründe, Karten |
| `gray-light` | `#f0f4f8` | Sekundäre Hintergründe |
| `text` | `#333333` | Fließtext |
| `text-muted` | `#666666` | Subtext, Labels |

### Typografie

| Rolle | Font | Weight | Größe |
|-------|------|--------|-------|
| H1 (Hero) | Plus Jakarta Sans | 800 | 48–64px |
| H2 (Section) | Plus Jakarta Sans | 800 | 32–40px |
| H3 (Card) | Plus Jakarta Sans | 700 | 20–24px |
| Body | Inter | 400/500 | 16–18px |
| Label/Tag | Inter | 600 | 11–12px, Uppercase |

### Icon-System
- **Bibliothek:** Lucide React (konsistent, MIT-Lizenz)
- **Stil:** Outline, stroke-width 1.8–2.0, keine Fills
- **Farbe:** Navy (#1e3a5f) für neutrale Icons, Cyan (#00b4d8) für Highlight-Icons

### Abstände & Radien
- Section-Padding: 80px vertikal (Mobile: 48px)
- Card-Radius: 12–14px
- Button-Radius: 7px
- Shadow: `0 4px 24px rgba(0,0,0,0.08)` für Cards

---

## 11. Tech-Stack

| Schicht | Technologie | Begründung |
|---------|-------------|------------|
| Framework | Next.js 15 (App Router) | SSG/ISR, optimales SEO, Server Components |
| Styling | Tailwind CSS v4 | Konsistentes Design-System, kein CSS-Bloat |
| Sprache | TypeScript | Typsicherheit, weniger Bugs |
| Icons | Lucide React | Professionell, konsistent, MIT |
| UI-Komponenten | shadcn/ui | Zugänglich, anpassbar |
| Formulare | React Hook Form + Zod | Validierung, DSGVO-konform |
| E-Mail | Resend API | Zuverlässige Formular-Benachrichtigungen |
| Bilder | next/image | WebP, lazy loading, Core Web Vitals |
| Hosting | Vercel | Kostenfrei, globales CDN, automatisches HTTPS |
| Animationen | Framer Motion (minimal) | Sanfte Scroll-Animationen, kein Overdesign |

---

## 12. SEO-Strategie

### Primäre Keywords
- "Gebäudereinigung Wertheim"
- "Reinigungsservice Wertheim"
- "Unterhaltsreinigung Wertheim"
- "Glasreinigung Wertheim"
- "Bauendreinigung Wertheim"
- "Hausmeisterservice Wertheim"

### Technische SEO
- `next/metadata` für dynamische Meta-Tags (Title, Description, OG-Tags) pro Seite
- Strukturierte Daten: `LocalBusiness` Schema.org auf Homepage
- Automatische `sitemap.xml` via Next.js
- `robots.txt` konfiguriert
- Canonical URLs auf allen Seiten
- Interne Verlinkung: jede Service-Seite ↔ Blog-Artikel ↔ Kontaktseite

### Local SEO
- NAP (Name, Adresse, Telefon) konsistent auf jeder Seite
- Google Business Profile-Link prominent (Reviews-Section)
- Ortsangaben in H1 auf Homepage und Service-Seiten
- Separate Erwähnung aller Einsatzgebiete (Wertheim, Tauberbischofsheim, Bad Mergentheim)

---

## 13. DSGVO & Rechtliches

- Kein Google Analytics ohne Consent-Banner
- Alternativ: Vercel Analytics (kein Cookie, DSGVO-konform)
- Kontaktformular: explizite Datenschutz-Checkbox (Required)
- Datenschutzerklärung und Impressum vollständig und verlinkt
- Google-Reviews: nur verlinken auf Google-Profil (kein Einbetten von Google-Widgets ohne Consent)
- Resend (E-Mail): Verarbeitung in der EU konfigurieren

---

## 14. Conversion-Architektur

**Primäres Ziel:** "Kostenloses Angebot anfordern" (3-Schritt-Formular)  
**Sekundäres Ziel:** Direktanruf (Click-to-Call)  
**Tertiäres Ziel:** E-Mail-Kontakt

**CTA-Hierarchie auf jeder Seite:**
1. Amber-Button "Angebot anfordern" (höchste Priorität, immer sichtbar im Nav)
2. Cyan-Button "Anrufen" (zweithöchste Priorität, im Nav und Hero)
3. Outline-Button "Mehr erfahren" (führt tiefer in die Website)

**Psychologische Trigger:**
- "Antwort innerhalb 24 Stunden" (senkt Hemmschwelle)
- "Unverbindlich" (kein Risiko)
- "Kostenlos" (kein finanzielles Risiko)
- Google-Rating 4,9⭐ (sozialer Beweis)
- "200+ Kunden" (sozialer Beweis)
- "Inhabergeführt" (Vertrauen, persönlicher Kontakt)
