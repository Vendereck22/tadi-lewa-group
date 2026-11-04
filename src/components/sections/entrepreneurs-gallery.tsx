"use client";

import { Expand } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { PhotoViewer, type ViewerPhoto } from "@/components/shared/photo-viewer";
import { SectionHeader } from "@/components/shared/section-header";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  entrepreneurProducts,
  entrepreneurSectors,
  type EntrepreneurSector,
} from "@/lib/data/entrepreneurs";

type Filter = EntrepreneurSector | "all";

const filters: Filter[] = ["all", ...entrepreneurSectors];

// Grille des entrepreneurs et de leurs produits, filtrable par secteur ;
// chaque photo est recadrée sur son sujet et s'ouvre en grand dans la visionneuse
export function EntrepreneursGallery() {
  const t = useTranslations("entrepreneursGallery");
  const [filter, setFilter] = useState<Filter>("all");
  const [viewer, setViewer] = useState<number | null>(null);

  const items = entrepreneurProducts.filter(
    (item) => filter === "all" || item.sector === filter,
  );

  const viewerPhotos: ViewerPhoto[] = items.map((item) => ({
    src: item.src,
    alt: t(`items.${item.id}.alt`),
    title: item.brand ?? t(`items.${item.id}.title`),
    subtitle: t(`sectors.${item.sector}`),
  }));

  return (
    <section aria-labelledby="entrepreneurs-titre" className="container-site py-16 md:py-24">
      <SectionHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        align="center"
        titleId="entrepreneurs-titre"
      />

      <ToggleGroup
        type="single"
        spacing={2}
        value={filter}
        onValueChange={(value) => {
          // Un clic sur le filtre actif ne doit pas vider la mosaïque
          if (value) setFilter(value as Filter);
        }}
        aria-label={t("filterLabel")}
        className="mx-auto mt-8 flex-wrap justify-center md:mt-10"
      >
        {filters.map((f) => (
          <ToggleGroupItem
            key={f}
            value={f}
            className="h-10 rounded-full border bg-card px-4 font-semibold text-foreground hover:bg-accent hover:text-foreground data-[state=on]:border-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
          >
            {f === "all" ? t("allFilter") : t(`sectors.${f}`)}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      {/* Grille régulière : cartes de même format (2 / 3 / 4 par ligne), dernière ligne centrée */}
      <ul aria-live="polite" className="mt-10 flex flex-wrap justify-center gap-3 md:mt-12 md:gap-5">
        {items.map((item, index) => (
          <li
            key={item.id}
            className="w-[calc((100%-0.75rem)/2)] sm:w-[calc((100%-1.5rem)/3)] md:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-3.75rem)/4)]"
          >
            <button
              type="button"
              onClick={() => setViewer(index)}
              className="group relative block aspect-[4/5] w-full overflow-hidden text-left outline-none focus-visible:ring-[3px] focus-visible:ring-ring/60"
            >
              <Image
                src={item.src}
                alt={t(`items.${item.id}.alt`)}
                fill
                sizes="(min-width: 1024px) 290px, (min-width: 640px) 33vw, 50vw"
                style={{ objectPosition: item.position }}
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 via-45% to-transparent transition group-hover:from-black/85" />
              <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-primary backdrop-blur md:text-xs">
                {t(`sectors.${item.sector}`)}
              </span>
              <span
                aria-hidden="true"
                className="absolute top-3 right-3 grid size-8 place-items-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur transition group-hover:opacity-100"
              >
                <Expand className="size-3.5" />
              </span>
              <span className="absolute inset-x-0 bottom-0 p-3.5 text-white md:p-4">
                <span className="block font-heading text-sm font-bold md:text-base">
                  {item.brand ?? t(`items.${item.id}.title`)}
                </span>
                {/* Description dévoilée au survol : la photo reste dégagée au repos */}
                <span className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100">
                  <span className="overflow-hidden">
                    <span className="block pt-0.5 text-xs leading-snug text-white/80">
                      {t(`items.${item.id}.text`)}
                    </span>
                  </span>
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <PhotoViewer
        photos={viewerPhotos}
        index={viewer}
        onIndexChange={setViewer}
        onClose={() => setViewer(null)}
      />
    </section>
  );
}
