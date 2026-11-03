import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { IconCircle } from "@/components/shared/icon-circle";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { photos } from "@/lib/data/images";
import { services } from "@/lib/data/services";
import { appointmentHref } from "@/lib/data/site";
import { cn } from "@/lib/utils";

// Les 3 services détaillés, texte et photo en alternance
export function ServiceDetails() {
  const t = useTranslations("services");
  const tp = useTranslations("servicesPage");
  const ti = useTranslations("images");

  return (
    <div className="container-site space-y-16 py-16 md:space-y-24 md:py-24">
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          aria-labelledby={`${service.id}-titre`}
          className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <div className={cn(i % 2 === 1 && "lg:order-2")}>
            <IconCircle icon={service.pageIcon} size="lg" />
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
              {tp("serviceNumber", { number: String(i + 1).padStart(2, "0") })}
            </p>
            <h2
              id={`${service.id}-titre`}
              className="mt-3 text-3xl leading-tight font-extrabold md:text-4xl"
            >
              {t(`${service.id}.title`)}
            </h2>
            <p className="mt-4 text-muted-foreground">{t(`${service.id}.description`)}</p>

            <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {(t.raw(`${service.id}.features`) as string[]).map((feature) => (
                <li key={feature} className="flex gap-2.5 text-[15px] font-medium">
                  <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button asChild size="xl" className="mt-8">
              <Link href={appointmentHref}>
                {t(`${service.id}.cta`)}
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <AspectRatio ratio={4 / 3} className="overflow-hidden">
            <Image
              src={photos[service.image].src}
              alt={ti(service.image)}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </AspectRatio>
        </section>
      ))}
    </div>
  );
}
