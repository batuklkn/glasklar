import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { FloatingBottomCta } from "@/components/layout/mobile-nav";
import { Navbar } from "@/components/layout/navbar";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "GlasKlar Gebäudereinigung Wertheim",
    template: "%s | GlasKlar Gebäudereinigung",
  },
  description:
    "Professionelle Gebäudereinigung in Wertheim für Unternehmen und Privatkunden. Unterhaltsreinigung, Glasreinigung, Bauendreinigung und mehr.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${plusJakartaSans.variable} ${inter.variable}`} lang="de">
      <body className="bg-white font-sans text-text antialiased">
        <Navbar />
        <main className="flex min-h-screen flex-col">{children}</main>
        <Footer />
        <FloatingBottomCta />
      </body>
    </html>
  );
}
