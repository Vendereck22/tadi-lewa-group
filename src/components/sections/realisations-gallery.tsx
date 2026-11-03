"use client";

import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { PhotoViewer, type ViewerPhoto } from "@/components/shared/photo-viewer";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { realisations } from "@/lib/data/realisations";
import { cn } from "@/lib/utils";

const arrowClass = "size-11 rounded-full border-input bg-card text-primary";

// Galerie « Nos réalisations » : carrousel centré et en boucle (glisser, flèches, points),
// la photo centrale s'ouvre en grand dans la visionneuse partagée
export function RealisationsGallery() {
  const t = useTranslations("realisations");
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [viewer, setViewer] = useState<number | null>(null);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  const count = realisations.length;

  // Dans la visionneuse, changer de photo fait aussi avancer le carrousel en dessous
  function showInViewer(index: number) {
    setViewer(index);
    api?.scrollTo(index);
  }

  const viewerPhotos: ViewerPhoto[] = realisations.map((item) => ({
    src: item.src,
    alt: t(`items.${item.id}.alt`),
    title: t(`items.${item.id}.title`),
    subtitle: t(`items.${item.id}.category`),
  }));

  return (
    <section aria-labelledby="realisations-titre" className="overflow-hidden bg-muted py-16 md:py-24">
      <div className="container-site">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          align="center"
          titleId="realisations-titre"
        />
      </div>

      <Carousel
        setApi={setApi}
        opts={{ align: "center", loop: true }}
        aria-label={t("galleryLabel")}
        className="mt-10 md:mt-14"
      >
        <CarouselContent className="-ml-4 md:-ml-6">
          {realisations.map((item, index) => (
            <CarouselItem
              key={item.id}
              aria-label={t("slideLabel", { number: index + 1, total: count })}
              className="basis-[82%] pl-4 sm:basis-[60%] md:pl-6 lg:basis-[44%] xl:basis-[38%]"
            >
              <button
                type="button"
                onClick={() => (index === current ? setViewer(index) : api?.scrollTo(index))}
                className={cn(
                  "group relative block aspect-[4/3] w-full overflow-hidden text-left transition duration-500 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/60",
                  index === current ? "scale-100 opacity-100" : "scale-[0.92] opacity-60 hover:opacity-80",
                )}
              >
                <Image
                  src={item.src}
                  alt={t(`items.${item.id}.alt`)}
                  fill
                  sizes="(min-width: 1280px) 38vw, (min-width: 1024px) 44vw, (min-width: 640px) 60vw, 82vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white md:p-6">
                  <span>
                    <span className="block text-xs font-semibold tracking-[0.15em] text-white/75 uppercase">
                      {t(`items.${item.id}.category`)}
                    </span>
                    <span className="mt-1 block font-heading text-lg font-bold md:text-xl">
                      {t(`items.${item.id}.title`)}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "grid size-10 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur transition",
                      index === current ? "opacity-100" : "opacity-0",
                    )}
                  >
                    <Expand className="size-4" />
                  </span>
                </span>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="container-site mt-8 flex items-center justify-center gap-5">
        <Button
          variant="outline"
          size="icon"
          className={arrowClass}
          onClick={() => api?.scrollPrev()}
        >
          <ChevronLeft />
          <span className="sr-only">{t("previous")}</span>
        </Button>
        <div className="flex items-center gap-2">
          {realisations.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => api?.scrollTo(index)}
              aria-label={t("goTo", { number: index + 1 })}
              aria-current={index === current}
              className={cn(
                "h-2 rounded-full transition-all",
                index === current ? "w-7 bg-primary" : "w-2 bg-primary/25 hover:bg-primary/50",
              )}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className={arrowClass}
          onClick={() => api?.scrollNext()}
        >
          <ChevronRight />
          <span className="sr-only">{t("next")}</span>
        </Button>
      </div>

      <PhotoViewer
        photos={viewerPhotos}
        index={viewer}
        onIndexChange={showInViewer}
        onClose={() => setViewer(null)}
      />
    </section>
  );
}
