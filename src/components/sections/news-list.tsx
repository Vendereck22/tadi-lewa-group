"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Newspaper } from "lucide-react";
import { useTranslations } from "next-intl";
import { NewsGridCard } from "@/components/shared/news-card";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { news, newsCategories, type NewsCategory } from "@/lib/data/news";

type Filter = NewsCategory | "tous";

const PAGE_SIZE = 9;

const filters: Filter[] = ["tous", ...newsCategories];

function isCategory(value: string | null): value is NewsCategory {
  return newsCategories.includes(value as NewsCategory);
}

// Filtres et grille des publications. La catégorie vit dans l'URL (?categorie=…) :
// les tuiles Explorer de l'accueil y mènent directement, et le lien reste partageable.
export function NewsList() {
  const t = useTranslations("news");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const param = searchParams.get("categorie");
  const filter: Filter = isCategory(param) ? param : "tous";

  const filtered = news.filter(
    (item) => !item.featured && (filter === "tous" || item.category === filter),
  );
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const page = Math.min(Math.max(1, Number(searchParams.get("page")) || 1), pageCount);
  const items = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function buildUrl(nextFilter: Filter, nextPage = 1) {
    const params = new URLSearchParams();
    if (nextFilter !== "tous") params.set("categorie", nextFilter);
    if (nextPage > 1) params.set("page", String(nextPage));
    const query = params.toString();
    return query ? `${pathname}?${query}` : pathname;
  }

  function selectFilter(value: string) {
    // Un clic sur le filtre actif ne doit pas laisser la liste sans filtre
    if (!value) return;
    // Changer de catégorie ramène à la première page
    router.replace(buildUrl(value as Filter), { scroll: false });
  }

  function goToPage(event: React.MouseEvent, nextPage: number) {
    event.preventDefault();
    router.push(buildUrl(filter, nextPage), { scroll: false });
    document.getElementById("publications-titre")?.parentElement?.scrollIntoView();
  }

  return (
    <section
      aria-labelledby="publications-titre"
      className="container-site scroll-mt-24 py-12 md:py-16"
    >
      <h2 id="publications-titre" className="sr-only">
        {t("listTitle")}
      </h2>

      <ToggleGroup
        type="single"
        spacing={2}
        value={filter}
        onValueChange={selectFilter}
        aria-label={t("filterLabel")}
        className="flex-wrap"
      >
        {filters.map((f) => (
          <ToggleGroupItem
            key={f}
            value={f}
            className="h-10 rounded-full border bg-card px-4 font-semibold text-foreground hover:bg-accent hover:text-foreground data-[state=on]:border-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
          >
            {f === "tous" ? t("allFilter") : t(`categories.${f}`)}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <div aria-live="polite" className="mt-8">
        {items.length > 0 ? (
          <ul className="grid gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {items.map((item) => (
              <li key={item.id}>
                <NewsGridCard item={item} />
              </li>
            ))}
          </ul>
        ) : (
          <Empty className="rounded-3xl border border-dashed bg-muted py-14">
            <EmptyHeader>
              <EmptyMedia variant="icon" className="bg-secondary text-primary">
                <Newspaper />
              </EmptyMedia>
              <EmptyTitle className="font-heading text-lg font-bold">
                {t("emptyTitle")}
              </EmptyTitle>
              <EmptyDescription>
                {t("emptyText")}
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        )}
      </div>

      {/* Affichée seulement au-delà de 9 publications */}
      {pageCount > 1 && (
        <Pagination className="mt-10">
          <PaginationContent>
            {page > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  href={buildUrl(filter, page - 1)}
                  onClick={(e) => goToPage(e, page - 1)}
                  className="rounded-full"
                />
              </PaginationItem>
            )}
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
              <PaginationItem key={n}>
                <PaginationLink
                  href={buildUrl(filter, n)}
                  isActive={n === page}
                  onClick={(e) => goToPage(e, n)}
                  className="rounded-full data-[active=true]:border-primary data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
                >
                  {n}
                </PaginationLink>
              </PaginationItem>
            ))}
            {page < pageCount && (
              <PaginationItem>
                <PaginationNext
                  href={buildUrl(filter, page + 1)}
                  onClick={(e) => goToPage(e, page + 1)}
                  className="rounded-full"
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </section>
  );
}
