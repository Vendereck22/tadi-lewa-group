import Image from "next/image";
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
const gallery = [
  { ...sitePhotos.newsConference, caption: "Foire entrepreneuriale" },
  { ...sitePhotos.newsTraining, caption: "Préparation des entrepreneurs" },
  { ...sitePhotos.newsSpeakers, caption: "Nos intervenants" },
  { ...sitePhotos.newsFair, caption: "MADE IN CONGO" },
  { ...sitePhotos.newsTeam, caption: "Présentation de l'équipe" },
];

const teamValues = [
  { title: "Esprit d'équipe", text: "Chaque réussite est collective." },
  { title: "Proximité", text: "À l'écoute de chaque entrepreneur." },
  { title: "Exigence", text: "Un travail sérieux et professionnel." },
  { title: "Engagement", text: "Pour un Congo prospère." },
];

const arrowClass = "static size-11 translate-y-0 border-input bg-card text-primary";

export function TeamInAction() {
  return (
    <section className="container-site py-16 md:py-24">
      <Carousel opts={{ align: "start" }} aria-label="Photos de l'équipe sur le terrain">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader eyebrow="Sur le terrain" title="L'équipe en action" />
          <div className="flex gap-2">
            <CarouselPrevious className={arrowClass} />
            <CarouselNext className={arrowClass} />
          </div>
        </div>

        <CarouselContent className="mt-10 -ml-5 md:mt-12 md:-ml-6">
          {gallery.map((photo) => (
            <CarouselItem key={photo.caption} className="pl-5 sm:basis-1/2 md:pl-6 lg:basis-1/3">
              <figure>
                <AspectRatio ratio={16 / 10} className="overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <figcaption className="absolute bottom-4 left-4">
                    <Badge className="rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-primary">
                      {photo.caption}
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
          label="Nos valeurs d'équipe"
          items={teamValues.map((value) => ({
            key: value.title,
            content: (
              <>
                <p className="font-heading text-lg font-bold">{value.title}</p>
                <p className="mt-1.5 text-muted-foreground">{value.text}</p>
              </>
            ),
          }))}
        />
      </div>
    </section>
  );
}
