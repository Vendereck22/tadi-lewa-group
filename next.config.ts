import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Photos Unsplash (licence gratuite) servies via l'optimiseur d'images de Next
  images: {
    // Qualité 90 pour toutes les images (au lieu de 75 par défaut, trop compressé pour les photos)
    qualities: [90],
    // AVIF d'abord (plus léger à qualité égale), WebP pour les navigateurs plus anciens
    formats: ["image/avif", "image/webp"],
    // Forme objet sans `search` : autorise les paramètres ?auto=format&w=… d'Unsplash
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com", pathname: "/**" }],
  },
  // L'équipe est présentée dans la page À propos
  async redirects() {
    return [{ source: "/equipe", destination: "/a-propos#equipe", permanent: true }];
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

export default nextConfig;
