import { readdirSync } from "fs";
import { join } from "path";
import type { MetadataRoute } from "next";
import { fetchActiveProperties } from "@/lib/property-data";
import { getPropertyAbsoluteUrl } from "@/lib/property-urls";

const SITE_URL = "https://www.topimobiliaria.com";
const PUBLIC_DIR = join(process.cwd(), "public");

const INDEXABLE_HTML_ROUTES = new Set([
  "/blog-index.html",
  "/blog-administracao-completa.html",
  "/blog-administracao-imovel.html",
  "/blog-administracao-tranquilidade.html",
  "/blog-aluguel-aguas-claras.html",
  "/blog-avaliar-imovel.html",
  "/blog-colocar-alugar.html",
  "/blog-colocar-vender.html",
  "/blog-como-alugar-rapido.html",
  "/blog-como-definir-aluguel.html",
  "/blog-documentos-locacao.html",
  "/blog-escolher-inquilino.html",
  "/blog-especialista-locacao.html",
  "/blog-imobiliaria-aguas-claras.html",
  "/blog-quanto-cobrar-aluguel.html",
  "/blog-quanto-cobrar-aluguel-2.html",
  "/blog-quanto-vale-imovel.html",
  "/blog-vender-ou-alugar.html",
  "/contato.html",
  "/sobre.html",
]);

function getPublicHtmlRoutes(): string[] {
  return readdirSync(PUBLIC_DIR, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".html"))
    .map((entry) => `/${entry.name}`)
    .filter((route) => INDEXABLE_HTML_ROUTES.has(route))
    .sort((left, right) => left.localeCompare(right, "pt-BR"));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const htmlRoutes = getPublicHtmlRoutes();
  const now = new Date();
  const properties = await fetchActiveProperties().catch(() => []);

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/imoveis`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/regioes/aguas-claras`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/regioes/cruzeiro`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.83,
    },
    {
      url: `${SITE_URL}/regioes/asa-norte`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${SITE_URL}/regioes/asa-sul`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${SITE_URL}/regioes/lago-sul`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${SITE_URL}/regioes/lago-norte`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${SITE_URL}/regioes/sobradinho`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.83,
    },
    {
      url: `${SITE_URL}/regioes/guara`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.83,
    },
    {
      url: `${SITE_URL}/regioes/taguatinga`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.83,
    },
    {
      url: `${SITE_URL}/regioes/planaltina`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${SITE_URL}/regioes/vicente-pires`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.83,
    },
    {
      url: `${SITE_URL}/regioes/sudoeste`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${SITE_URL}/regioes/noroeste`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/regioes/jardim-botanico`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/regioes/park-way`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/artigos/como-escolher-imobiliaria-administrar-imovel-brasilia`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.86,
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
    ...properties.map((property): MetadataRoute.Sitemap[number] => ({
      url: getPropertyAbsoluteUrl(property),
      lastModified: property.updated_at ? new Date(property.updated_at) : now,
      changeFrequency: "weekly",
      priority: property.is_featured ? 0.9 : 0.75,
    })),
  ];
}
