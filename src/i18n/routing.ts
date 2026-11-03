import { defineRouting } from "next-intl/routing";

// Français par défaut (sans préfixe : /services), anglais sous /en (/en/services)
export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
