import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { ContactSection } from "@/components/sections/contact-section";
import { ExploreGrid } from "@/components/sections/explore-grid";
import { Hero } from "@/components/sections/hero";
import { NewsSection } from "@/components/sections/news-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { TeamPreview } from "@/components/sections/team-preview";
import { ValuesStrip } from "@/components/sections/values-strip";
import { VisionSection } from "@/components/sections/vision-section";
import { CtaBand } from "@/components/shared/cta-band";

export default function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("cta.home");

  return (
    <main>
      <Hero />
      <ValuesStrip />
      <ServicesGrid />
      <VisionSection />
      <ExploreGrid />
      <TeamPreview />
      <NewsSection />
      <CtaBand
        title={
          <>
            {t("titleStart")} <span className="whitespace-nowrap">{t("titleEnd")}</span>
          </>
        }
        description={t("description")}
      />
      <ContactSection />
    </main>
  );
}
