"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// ThemeProvider de shadcn/ui (next-themes) : mode clair, sombre ou selon le système
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
