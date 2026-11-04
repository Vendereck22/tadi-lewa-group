import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";
import { TravelGallery } from "@/components/sections/travel-gallery";
import { TravelOffers } from "@/components/sections/travel-offers";
import { TravelSteps } from "@/components/sections/travel-steps";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { travelOffers } from "@/lib/data/travel";

export async function generateMetadata({ params }: PageProps<"/[locale]/voyages">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "travelPage.meta" });
  return { title: t("title"), description: t("description") };
}

export default function VoyagesPage({ params }: PageProps<"/[locale]/voyages">) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("travelPage");

  return (
    <main>
      <PageHeader
        crumb={t("header.crumb")}
        title={
          <>
            {t("header.titleStart")} <span className="text-brand">{t("header.titleHighlight")}</span>
          </>
        }
        description={t("header.description")}
        image={{ src: "/Images/equipe-portraits/equipe-portraits-02.jpeg", alt: t("header.imageAlt") }}
      >
        {/* Raccourcis vers les trois formules */}
        <nav aria-label={t("header.anchorsLabel")} className="mt-7">
          <ul className="flex flex-wrap gap-2.5">
            {travelOffers.map((offer) => (
              <li key={offer.id}>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="h-10 bg-card px-4 font-semibold shadow-none"
                >
                  <a href={`#${offer.id}`}>{t(`offers.items.${offer.id}.label`)}</a>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>
      <TravelOffers />
      <TravelSteps />
      <TravelGallery />
      <CtaBand title={t("cta.title")} description={t("cta.description")} ctaLabel={t("cta.button")} />
    </main>
  );
}
