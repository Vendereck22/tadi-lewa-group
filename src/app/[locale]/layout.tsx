import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { TopBar } from "@/components/layout/top-bar";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TADI LEWA GROUP SARLU",
    template: "%s | TADI LEWA GROUP",
  },
  description:
    "TADI LEWA GROUP SARLU : accompagnement des entrepreneurs, solutions pour les entreprises, partenariats et formation à Kinshasa.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <TooltipProvider>
          <TopBar />
          <SiteHeader />
          {children}
          <SiteFooter />
        </TooltipProvider>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
