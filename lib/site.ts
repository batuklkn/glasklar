const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const siteConfig = {
  name: "GlasKlar Gebäudereinigung",
  legalName: "GlasKlar Gebäudereinigung - Inh. Sinan Kaleli",
  description:
    "GlasKlar ist Ihr inhabergeführter Partner für professionelle Gebäudereinigung in Wertheim und Umgebung.",
  url: siteUrl,
  email: "glasklar@gmail.com",
  phoneDisplay: "09342 3029778",
  phoneHref: "tel:+4993423029778",
  address: {
    street: "Mühlenweg 14G",
    zip: "97877",
    city: "Wertheim",
    country: "DE",
  },
  areas: ["Wertheim", "Tauberbischofsheim", "Bad Mergentheim", "Umgebung"],
  googleReviewsUrl: "https://g.page/r/CQ-example/review",
  blogRevalidateSeconds: 3600,
};

export const navLinks = [
  { href: "/dienstleistungen", label: "Dienstleistungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];
