import { readdirSync } from "fs";
import { join } from "path";
import type { MetadataRoute } from "next";

const SITE_URL = "https://www.topimobiliaria.com";
const PUBLIC_DIR = join(process.cwd(), "public");

function getPublicHtmlRoutes(): string[] {
  return readdirSync(PUBLIC_DIR, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".html"))
    .map((entry) => `/${entry.name}`)
    .sort((left, right) => left.localeCompare(right, "pt-BR"));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const htmlRoutes = getPublicHtmlRoutes();
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...htmlRoutes.map((route): MetadataRoute.Sitemap[number] => {
      const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] =
        route === "/blog-index.html" ? "weekly" : "monthly";
      const priority =
        route === "/blog-index.html" ? 0.9 : route.startsWith("/blog-") ? 0.8 : 0.7;

      return {
        url: `${SITE_URL}${route}`,
        lastModified: now,
        changeFrequency,
        priority,
      };
    }),
  ];
}
