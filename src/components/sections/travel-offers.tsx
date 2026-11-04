import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { IconCircle } from "@/components/shared/icon-circle";
import { SectionHeader } from "@/components/shared/section-header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { appointmentHref } from "@/lib/data/site";
import { travelOffers } from "@/lib/data/travel";

// Les trois formules de voyage : tourisme, affaires & entrepreneuriat, études
export function TravelOffers() {
  const t = useTranslations("travelPage.offers");

  return (
    <section className="container-site py-16 md:py-24">
      <SectionHeader eyebrow={t("eyebrow")} title={t("title")} description={t("intro")} align="center" />

      <ul className="mt-10 grid gap-6 md:mt-14 lg:grid-cols-3">
        {travelOffers.map((offer) => (
          <li key={offer.id} id={offer.id} className="scroll-mt-28">
            <Card className="h-full gap-0 overflow-hidden rounded-3xl py-0 shadow-none">
              <AspectRatio ratio={4 / 3}>
                <Image
                  src={offer.image}
                  alt={t(`items.${offer.id}.alt`)}
                  fill
                  sizes="(min-width: 1024px) 390px, 100vw"
                  className="object-cover"
                />
              </AspectRatio>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className="flex items-center gap-3">
                  <IconCircle icon={offer.icon} variant="light" size="sm" className="rounded-xl" />
                  <p className="text-xs font-semibold tracking-[0.15em] text-brand uppercase">
                    {t(`items.${offer.id}.label`)}
                  </p>
                </div>
                <h3 className="mt-4 text-xl font-bold md:text-2xl">{t(`items.${offer.id}.title`)}</h3>
                <p className="mt-3 text-muted-foreground">{t(`items.${offer.id}.text`)}</p>

                <ul className="mt-5 space-y-2.5">
                  {(t.raw(`items.${offer.id}.features`) as string[]).map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-[15px] font-medium">
                      <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button asChild className="mt-7 h-11 self-start px-5 font-semibold">
                  <Link href={appointmentHref}>
                    {t(`items.${offer.id}.cta`)}
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
