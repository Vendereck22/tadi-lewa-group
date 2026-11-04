import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { partners, type Partner } from "@/lib/data/partners";
import { appointmentHref } from "@/lib/data/site";
import { cn } from "@/lib/utils";

// Fondu sur les bords de la piste, pour que les logos apparaissent et disparaissent en douceur
const fadeEdges =
  "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]";

function PartnerLogo({ partner }: { partner: Partner }) {
  return (
    <div
      style={{ "--logo": partner.color } as React.CSSProperties}
      className="group flex h-16 shrink-0 items-center gap-3 rounded-2xl border bg-card px-6 transition-colors hover:border-brand/40 md:h-20 md:px-8"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={cn(
          "shrink-0 fill-current text-muted-foreground transition-colors group-hover:text-(--logo)",
          partner.logoOnly === "wide" && "size-16 md:size-20",
          partner.logoOnly === "round" && "size-10 md:size-11",
          !partner.logoOnly && "size-7 md:size-8",
        )}
      >
        <path d={partner.path} />
      </svg>
      <span
        className={cn(
          "font-heading text-lg font-bold whitespace-nowrap text-muted-foreground transition-colors group-hover:text-foreground md:text-xl",
          partner.logoOnly && "sr-only",
        )}
      >
        {partner.name}
      </span>
    </div>
  );
}

// Une rangée qui défile en continu : la liste est rendue deux fois pour boucler sans saut
function MarqueeRow({ items, reverse, label }: { items: Partner[]; reverse?: boolean; label?: string }) {
  return (
    <div className={cn("overflow-hidden", fadeEdges)}>
      <div
        className={cn(
          "flex w-max gap-4 hover:[animation-play-state:paused] md:gap-5",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
      >
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-label={copy === 0 ? label : undefined}
            aria-hidden={copy === 1 ? true : undefined}
            className="flex gap-4 md:gap-5"
          >
            {items.map((partner) => (
              <li key={partner.name}>
                <PartnerLogo partner={partner} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function PartnersSection() {
  const t = useTranslations("partnersSection");
  const half = Math.ceil(partners.length / 2);

  return (
    <section aria-labelledby="partenaires-titre" className="py-16 md:py-24">
      <div className="container-site">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
          align="center"
          titleId="partenaires-titre"
        />
      </div>

      {/* Deux rangées en sens opposés ; en mouvement réduit, une grille fixe les remplace */}
      <div className="mt-10 space-y-4 md:mt-14 md:space-y-5 motion-reduce:hidden">
        <MarqueeRow items={partners.slice(0, half)} label={t("listLabel")} />
        <MarqueeRow items={partners.slice(half)} reverse label={t("listLabel")} />
      </div>
      <ul
        aria-label={t("listLabel")}
        className="container-site mt-10 hidden flex-wrap justify-center gap-4 motion-reduce:flex"
      >
        {partners.map((partner) => (
          <li key={partner.name}>
            <PartnerLogo partner={partner} />
          </li>
        ))}
      </ul>

      <div className="container-site mt-10 flex flex-col items-center gap-4 text-center md:mt-14">
        <p className="text-muted-foreground">{t("joinText")}</p>
        <Button asChild size="xl">
          <Link href={appointmentHref}>
            {t("joinCta")}
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
