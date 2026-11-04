"use client";

import { Expand } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { PhotoViewer, type ViewerPhoto } from "@/components/shared/photo-viewer";
import { SectionHeader } from "@/components/shared/section-header";
import { realisations } from "@/lib/data/realisations";

// Galerie « Nos réalisations » : grille régulière (même disposition que la galerie des
// entrepreneurs), chaque photo s'ouvre en grand dans la visionneuse
export function RealisationsGallery() {
  const t = useTranslations("realisations");
  const [viewer, setViewer] = useState<number | null>(null);

  const viewerPhotos: ViewerPhoto[] = realisations.map((item) => ({
    src: item.src,
    alt: t(`items.${item.id}.alt`),
    title: t(`items.${item.id}.title`),
    subtitle: t(`items.${item.id}.category`),
  }));

  return (
    <section aria-labelledby="realisations-titre" className="bg-muted py-16 md:py-24">
      <div className="container-site">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          align="center"
          titleId="realisations-titre"
        />

        {/* Grille régulière : cartes de même format (2 / 3 / 4 par ligne), dernière ligne centrée */}
        <ul
          aria-label={t("galleryLabel")}
          className="mt-10 flex flex-wrap justify-center gap-3 md:mt-14 md:gap-5"
        >
          {realisations.map((item, index) => (
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
                  {t(`items.${item.id}.category`)}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute top-3 right-3 grid size-8 place-items-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur transition group-hover:opacity-100"
                >
                  <Expand className="size-3.5" />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-3.5 font-heading text-sm font-bold text-white md:p-4 md:text-base">
                  {t(`items.${item.id}.title`)}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <PhotoViewer
        photos={viewerPhotos}
        index={viewer}
        onIndexChange={setViewer}
        onClose={() => setViewer(null)}
      />
    </section>
  );
}
