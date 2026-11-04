"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { PhotoViewer, type ViewerPhoto } from "@/components/shared/photo-viewer";
import { SectionHeader } from "@/components/shared/section-header";
import { travelPhotos } from "@/lib/data/travel";

// Galerie « Nos voyages en images » : mosaïque, chaque photo s'ouvre dans la visionneuse
export function TravelGallery() {
  const t = useTranslations("travelPage.gallery");
  const [viewer, setViewer] = useState<number | null>(null);

  const viewerPhotos: ViewerPhoto[] = travelPhotos.map((photo) => ({
    src: photo.src,
    alt: t(`items.${photo.id}.alt`),
    title: t(`items.${photo.id}.title`),
    subtitle: t(`items.${photo.id}.place`),
  }));

  return (
    <section aria-labelledby="voyages-galerie-titre" className="container-site py-16 md:py-24">
      <SectionHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        align="center"
        titleId="voyages-galerie-titre"
      />

      <ul className="mt-10 columns-2 gap-3 md:mt-12 md:columns-3 md:gap-5">
        {travelPhotos.map((photo, index) => (
          <li key={photo.id} className="mb-3 break-inside-avoid md:mb-5">
            <button
              type="button"
              onClick={() => setViewer(index)}
              className="group relative block w-full overflow-hidden text-left outline-none focus-visible:ring-[3px] focus-visible:ring-ring/60"
            >
              <Image
                src={photo.src}
                alt={t(`items.${photo.id}.alt`)}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 768px) 390px, 50vw"
                className="h-auto w-full transition duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 via-45% to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-3.5 text-white md:p-5">
                <span className="block font-heading text-sm font-bold md:text-lg">
                  {t(`items.${photo.id}.title`)}
                </span>
                <span className="block text-xs text-white/80 md:text-sm">
                  {t(`items.${photo.id}.place`)}
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
