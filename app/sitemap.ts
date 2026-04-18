import { MetadataRoute } from "next";

import { services } from "@/content/services";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/dienstleistungen",
    "/ueber-uns",
    "/referenzen",
    "/kontakt",
    "/impressum",
    "/datenschutz",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: now,
    })),
    ...services.map((service) => ({
      url: `${siteConfig.url}/dienstleistungen/${service.slug}`,
      lastModified: now,
    })),
  ];
}
