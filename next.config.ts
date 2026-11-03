import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Traductions FR/EN : lit la configuration de src/i18n/request.ts
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Photos locales (public/Images) servies via l'optimiseur d'images de Next
  images: {
    // Qualité 90 pour toutes les images (au lieu de 75 par défaut, trop compressé pour les photos)
    qualities: [90],
    // AVIF d'abord (plus léger à qualité égale), WebP pour les navigateurs plus anciens
    formats: ["image/avif", "image/webp"],
  },
  // L'équipe est présentée dans la page À propos
  async redirects() {
    return [
      { source: "/equipe", destination: "/a-propos#equipe", permanent: true },
      { source: "/en/equipe", destination: "/en/a-propos#equipe", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default withNextIntl(nextConfig);
