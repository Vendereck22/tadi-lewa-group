import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { FeaturedNewsCard, NewsCard } from "@/components/shared/news-card";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { news } from "@/lib/data/news";

export function NewsSection() {
  const t = useTranslations("newsSection");
  const featured = news.find((item) => item.featured);
  const latest = news.filter((item) => !item.featured).slice(0, 4);

  return (
    <section className="container-site pb-16 md:pt-4 md:pb-24">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          className="max-w-3xl"
        />
        <Button
          asChild
          size="lg"
          variant="outline"
          className="self-start border-[1.5px] border-primary bg-transparent px-6 font-semibold text-primary shadow-none sm:self-auto"
        >
          <Link href="/actualites">
            {t("all")}
            <ArrowRight />
          </Link>
        </Button>
      </div>

      <div className="mt-10 space-y-5 md:mt-12 md:space-y-6">
        {featured && <FeaturedNewsCard item={featured} />}
        <ul className="grid gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {latest.map((item) => (
            <li key={item.id}>
              <NewsCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
