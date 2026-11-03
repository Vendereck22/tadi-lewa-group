import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/shared/section-header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { photos } from "@/lib/data/images";
import { teamPoles } from "@/lib/data/team";

export function TeamPreview() {
  const t = useTranslations("teamPreview");
  const tp = useTranslations("team.poles");
  const ti = useTranslations("images");

  return (
    <section className="container-site grid items-center gap-10 pb-16 md:pt-2 md:pb-24 lg:grid-cols-[minmax(0,1.07fr)_minmax(0,1fr)] lg:gap-16">
      {/* Mosaïque : une grande photo, deux petites dessous */}
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        <div className="col-span-2">
          <AspectRatio ratio={725 / 321} className="overflow-hidden">
            <Image
              src={photos.teamEvent.src}
              alt={ti("teamEvent")}
              fill
              sizes="(min-width: 1024px) 620px, 100vw"
              className="object-cover"
            />
          </AspectRatio>
        </div>
        <AspectRatio ratio={353 / 194} className="overflow-hidden">
          <Image
            src={photos.teamSpeaker.src}
            alt={ti("teamSpeaker")}
            fill
            sizes="(min-width: 1024px) 300px, 50vw"
            className="object-cover"
          />
        </AspectRatio>
        <AspectRatio ratio={353 / 194} className="overflow-hidden">
          <Image
            src={photos.teamPresentation.src}
            alt={ti("teamPresentation")}
            fill
            sizes="(min-width: 1024px) 300px, 50vw"
            className="object-cover"
          />
        </AspectRatio>
      </div>

      <div>
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} />
        <p className="mt-5 max-w-xl text-muted-foreground">{t("text")}</p>

        <ul className="mt-6 flex flex-wrap gap-2.5">
          {teamPoles.map((pole) => (
            <li key={pole}>
              <Badge variant="secondary" className="rounded-full px-4 py-2 text-sm font-semibold">
                {tp(pole)}
              </Badge>
            </li>
          ))}
        </ul>

        <Button asChild size="xl" className="mt-8">
          <Link href="/a-propos#equipe">
            {t("cta")}
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
