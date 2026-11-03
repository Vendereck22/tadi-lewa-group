import Image from "next/image";
import { useTranslations } from "next-intl";
import { DividedRow } from "@/components/shared/divided-row";
import { SectionHeader } from "@/components/shared/section-header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { photos as sitePhotos } from "@/lib/data/images";

// Galerie de photos d'événements
// (légendes traduites : « about.inAction.captions.<clé> »)
const gallery = [
  { key: "conference", photo: "newsConference" },
  { key: "training", photo: "newsTraining" },
  { key: "speakers", photo: "newsSpeakers" },
  { key: "fair", photo: "newsFair" },
  { key: "team", photo: "newsTeam" },
] as const;

const teamValues = ["spirit", "proximity", "rigour", "commitment"];

const arrowClass = "static size-11 translate-y-0 border-input bg-card text-primary";

export function TeamInAction() {
  const t = useTranslations("about.inAction");
  const ti = useTranslations("images");

  return (
    <section className="container-site py-16 md:py-24">
      <Carousel opts={{ align: "start" }} aria-label={t("galleryLabel")}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader eyebrow={t("eyebrow")} title={t("title")} />
          <div className="flex gap-2">
            <CarouselPrevious className={arrowClass} />
            <CarouselNext className={arrowClass} />
          </div>
        </div>

        <CarouselContent className="mt-10 -ml-5 md:mt-12 md:-ml-6">
          {gallery.map(({ key, photo }) => (
            <CarouselItem key={key} className="pl-5 sm:basis-1/2 md:pl-6 lg:basis-1/3">
              <figure>
                <AspectRatio ratio={16 / 10} className="overflow-hidden">
                  <Image
                    src={sitePhotos[photo].src}
                    alt={ti(photo)}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <figcaption className="absolute bottom-4 left-4">
                    <Badge className="rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-primary">
                      {t(`captions.${key}`)}
                    </Badge>
                  </figcaption>
                </AspectRatio>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-12 md:mt-16">
        <DividedRow
          label={t("valuesLabel")}
          items={teamValues.map((key) => ({
            key,
            content: (
              <>
                <p className="font-heading text-lg font-bold">{t(`values.${key}.title`)}</p>
                <p className="mt-1.5 text-muted-foreground">{t(`values.${key}.text`)}</p>
              </>
            ),
          }))}
        />
      </div>
    </section>
  );
}
