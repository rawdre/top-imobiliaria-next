import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow next/image to load property photos from the Top Imobiliaria Supabase bucket.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "agnpgfqugurxtplxljaw.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  async redirects() {
    return [
      // Legacy static pages link "Voltar para o Site Principal" -> /index.html.
      // Next.js serves the homepage at /. Redirect /index.html -> /
      // so back-to-home links do not 404.
      { source: "/index.html", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
