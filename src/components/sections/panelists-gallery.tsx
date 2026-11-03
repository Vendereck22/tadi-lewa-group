"use client";

import { Mic } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { PhotoViewer, type ViewerPhoto } from "@/components/shared/photo-viewer";
import { SectionHeader } from "@/components/shared/section-header";
import { panelists } from "@/lib/data/panelists";

// Galerie des panélistes et intervenants : mosaïque de portraits, chacun s'ouvre en grand
export function PanelistsGallery() {
  const t = useTranslations("panelists");
  const [viewer, setViewer] = useState<number | null>(null);

  const viewerPhotos: ViewerPhoto[] = panelists.map((item) => ({
    src: item.src,
    alt: t(`items.${item.id}`),
    title: item.name ?? t("defaultName"),
    subtitle: item.role ?? t("event"),
  }));

  return (
    <section
      id="intervenants"
      aria-labelledby="panelistes-titre"
      className="scroll-mt-20 bg-muted py-16 md:py-24"
    >
      <div className="container-site">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          align="center"
          titleId="panelistes-titre"
        />

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:mt-14 md:gap-5 lg:grid-cols-4">
          {panelists.map((item, index) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setViewer(index)}
                className="group relative block aspect-[4/5] w-full overflow-hidden text-left outline-none focus-visible:ring-[3px] focus-visible:ring-ring/60"
              >
                <Image
                  src={item.src}
                  alt={t(`items.${item.id}`)}
                  fill
                  sizes="(min-width: 1024px) 290px, (min-width: 640px) 33vw, 50vw"
                  style={{ objectPosition: item.position }}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 flex items-end gap-2.5 p-3.5 text-white md:p-5">
                  <span
                    aria-hidden="true"
                    className="grid size-8 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground md:size-9"
                  >
                    <Mic className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-heading text-sm font-bold md:text-base">
                      {item.name ?? t("defaultName")}
                    </span>
                    <span className="block text-xs leading-snug text-white/75">
                      {item.role ?? t("event")}
                    </span>
                  </span>
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
