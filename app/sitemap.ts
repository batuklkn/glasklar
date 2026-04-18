import { MetadataRoute } from "next";

import { services } from "@/content/services";
import { getPostSlugs } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const slugs = await getPostSlugs();

  const staticRoutes = [
    "",
    "/dienstleistungen",
    "/ueber-uns",
    "/referenzen",
    "/blog",
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
    ...slugs.map((slug) => ({
      url: `${siteConfig.url}/blog/${slug}`,
      lastModified: now,
    })),
  ];
}
