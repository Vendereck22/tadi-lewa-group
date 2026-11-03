import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

// Détecte la langue et gère le préfixe /en (Next 16 : « proxy » remplace « middleware »)
export default createMiddleware(routing);

export const config = {
  // Toutes les pages, sauf les fichiers, l'API et les ressources internes de Next
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
