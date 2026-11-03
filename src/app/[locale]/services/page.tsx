import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";
import { FaqSection } from "@/components/sections/faq-section";
import { MethodSection } from "@/components/sections/method-section";
import { ServiceDetails } from "@/components/sections/service-details";
import { TrainingTopics } from "@/components/sections/training-topics";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { photos } from "@/lib/data/images";

export async function generateMetadata({ params }: PageProps<"/[locale]/services">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "servicesPage.meta" });
  return { title: t("title"), description: t("description") };
}

// Ancres vers les sections de la page
const anchors = ["entrepreneurs", "entreprises", "partenariats", "formation"];

export default function ServicesPage({ params }: PageProps<"/[locale]/services">) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("servicesPage");
  const tCta = useTranslations("cta.services");
  const ti = useTranslations("images");

  return (
    <main>
      <PageHeader
        crumb={t("header.crumb")}
        title={
          <>
            {t("header.titleStart")}{" "}
            <span className="text-brand">{t("header.titleHighlight")}</span>
          </>
        }
        description={t("header.description")}
        image={{ src: photos.servicesHeader.src, alt: ti("servicesHeader") }}
      >
        <nav aria-label={t("anchorsLabel")} className="mt-7">
          <ul className="flex flex-wrap gap-2.5">
            {anchors.map((anchor) => (
              <li key={anchor}>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="h-10 bg-card px-4 font-semibold shadow-none"
                >
                  <a href={`#${anchor}`}>{t(`anchors.${anchor}`)}</a>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>
      <ServiceDetails />
      <MethodSection />
      <TrainingTopics />
      <FaqSection />
      <CtaBand title={tCta("title")} description={tCta("description")} />
    </main>
  );
}
