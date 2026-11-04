import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { TopBar } from "@/components/layout/top-bar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { routing } from "@/i18n/routing";
import "../globals.css";

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

// Pages générées à l'avance pour chaque langue
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: { default: t("title"), template: t("template") },
    description: t("description"),
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    // suppressHydrationWarning : next-themes ajoute la classe « dark » avant l'hydratation
    <html lang={locale} className={`${inter.variable} ${montserrat.variable}`} suppressHydrationWarning>
      {/* id « top » : cible du lien « Retour en haut » du pied de page */}
      <body id="top">
        <NextIntlClientProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <TooltipProvider>
              <TopBar />
              <SiteHeader />
              {children}
              <SiteFooter />
            </TooltipProvider>
            <Toaster position="top-center" richColors />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
