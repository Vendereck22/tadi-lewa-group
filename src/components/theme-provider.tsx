"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// next-themes insère un <script> qui applique le thème avant l'affichage (pas de flash blanc).
// Rendu par le serveur, il s'exécute au chargement. Recréé côté navigateur (changement de langue,
// qui remonte le layout [locale]), React 19 le signale comme script jamais exécuté : côté client,
// on lui donne un type inerte, ce que React accepte (bloc de données). Le thème est déjà appliqué.
const scriptProps = {
  type: typeof window === "undefined" ? "text/javascript" : "text/plain",
} as const;

// ThemeProvider de shadcn/ui (next-themes) : mode clair, sombre ou selon le système
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider scriptProps={scriptProps} {...props}>
      {children}
    </NextThemesProvider>
  );
}
