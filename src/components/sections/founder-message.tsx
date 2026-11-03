import Image from "next/image";
import { Quote, UserRound } from "lucide-react";
import { useTranslations } from "next-intl";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { founder } from "@/lib/data/team";

export function FounderMessage() {
  const t = useTranslations("about.founder");
  const tf = useTranslations("team.founder");
  const name = tf("name");

  return (
    <section className="container-site grid items-center gap-10 py-16 md:py-24 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-14">
      <div className="mx-auto w-full max-w-[280px] sm:max-w-sm lg:max-w-none">
        <AspectRatio ratio={4 / 5}>
          {founder.photo ? (
            <Image
              src={founder.photo}
              alt={t("portrait", { name })}
              fill
              sizes="(min-width: 1024px) 440px, 384px"
              className="object-cover"
            />
          ) : (
            // Emplacement en attendant le portrait du fondateur
            <Card className="h-full items-center justify-center gap-3 rounded-none bg-accent text-sm text-muted-foreground shadow-none">
              <UserRound aria-hidden="true" className="size-14 text-chart-4" strokeWidth={1.5} />
              {t("photoPlaceholder")}
            </Card>
          )}
        </AspectRatio>
      </div>

      <figure>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">
          {t("eyebrow")}
        </p>
        <Quote aria-hidden="true" className="mt-5 size-12 fill-secondary text-secondary" />
        <blockquote className="mt-4 font-heading text-xl leading-snug font-semibold md:text-2xl lg:text-[1.75rem]">
          {tf("message")}
        </blockquote>
        <figcaption className="mt-6">
          <p className="font-heading text-lg font-bold">{name}</p>
          <p className="mt-1 font-semibold text-brand">{tf("role")}</p>
        </figcaption>
      </figure>
    </section>
  );
}
