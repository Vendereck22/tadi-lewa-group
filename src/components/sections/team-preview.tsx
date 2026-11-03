import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { photos } from "@/lib/data/images";

const poles = ["Direction", "Programmes", "Événements", "Communication"];

export function TeamPreview() {
  return (
    <section className="container-site grid items-center gap-10 pb-16 md:pt-2 md:pb-24 lg:grid-cols-[minmax(0,1.07fr)_minmax(0,1fr)] lg:gap-16">
      {/* Mosaïque : une grande photo, deux petites dessous */}
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        <div className="col-span-2">
          <AspectRatio ratio={725 / 321} className="overflow-hidden">
            <Image
              src={photos.teamEvent.src}
              alt={photos.teamEvent.alt}
              fill
              sizes="(min-width: 1024px) 620px, 100vw"
              className="object-cover"
            />
          </AspectRatio>
        </div>
        <AspectRatio ratio={353 / 194} className="overflow-hidden">
          <Image
            src={photos.teamSpeaker.src}
            alt={photos.teamSpeaker.alt}
            fill
            sizes="(min-width: 1024px) 300px, 50vw"
            className="object-cover"
          />
        </AspectRatio>
        <AspectRatio ratio={353 / 194} className="overflow-hidden">
          <Image
            src={photos.teamPresentation.src}
            alt={photos.teamPresentation.alt}
            fill
            sizes="(min-width: 1024px) 300px, 50vw"
            className="object-cover"
          />
        </AspectRatio>
      </div>

      <div>
        <SectionHeader eyebrow="Notre équipe" title="Derrière chaque succès, une équipe extraordinaire" />
        <p className="mt-5 max-w-xl text-muted-foreground">
          Une équipe dynamique et engagée pour porter plus loin la vision de TADI LEWA GROUP
          SARLU : direction, programmes, événements et communication, au service des
          entrepreneurs.
        </p>

        <ul className="mt-6 flex flex-wrap gap-2.5">
          {poles.map((pole) => (
            <li key={pole}>
              <Badge variant="secondary" className="rounded-full px-4 py-2 text-sm font-semibold">
                {pole}
              </Badge>
            </li>
          ))}
        </ul>

        <Button asChild size="xl" className="mt-8">
          <Link href="/a-propos#equipe">
            Rencontrer l&apos;équipe
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
