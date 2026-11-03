import type { Metadata } from "next";
import { Suspense } from "react";
import { NewsList } from "@/components/sections/news-list";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { FeaturedNewsCard } from "@/components/shared/news-card";
import { PageHeader } from "@/components/shared/page-header";
import { news } from "@/lib/data/news";

export const metadata: Metadata = {
  title: "Actualités & Publications",
  description: "Restez informés des activités, événements et réalisations de TADI LEWA GROUP SARLU.",
};

export default function ActualitesPage() {
  const featured = news.find((item) => item.featured);

  return (
    <main>
      <PageHeader
        crumb="Actualités"
        title={
          <>
            Actualités <span className="text-brand">&amp;</span> Publications
          </>
        }
        description="Restez informés de nos activités, événements et réalisations."
      />

      {featured && (
        <section aria-label="Publication à la une" className="container-site pt-12 md:pt-16">
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
