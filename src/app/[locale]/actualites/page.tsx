import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Suspense, use } from "react";
import { NewsList } from "@/components/sections/news-list";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { FeaturedNewsCard } from "@/components/shared/news-card";
import { PageHeader } from "@/components/shared/page-header";
import { news } from "@/lib/data/news";

export async function generateMetadata({ params }: PageProps<"/[locale]/actualites">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "newsPage.meta" });
  return { title: t("title"), description: t("description") };
}

export default function ActualitesPage({ params }: PageProps<"/[locale]/actualites">) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("newsPage.header");
  const tn = useTranslations("news");
  const featured = news.find((item) => item.featured);

  return (
    <main>
      <PageHeader
        crumb={t("crumb")}
        title={
          <>
            {t("titleStart")} <span className="text-brand">{t("titleHighlight")}</span>{" "}
            {t("titleEnd")}
          </>
        }
        description={t("description")}
      />

      {featured && (
        <section aria-label={tn("featuredLabel")} className="container-site pt-12 md:pt-16">
          <FeaturedNewsCard item={featured} showFeaturedBadge headingLevel="h2" preload />
        </section>
      )}

      {/* useSearchParams (filtre ?categorie=) impose une limite Suspense pour le rendu statique */}
      <Suspense>
        <NewsList />
      </Suspense>
      <NewsletterSection />
    </main>
  );
}
