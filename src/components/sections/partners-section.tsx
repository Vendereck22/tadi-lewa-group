import { ArrowRight } from "lucide-react";
import Image from "next/image";
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

// Tuile de logo : fond blanc, ou couleur d'origine du logo (noir, orange…) pour un rendu continu
function PartnerLogo({ partner }: { partner: Partner }) {
  return (
    <div
      style={{ backgroundColor: partner.background ?? "#ffffff" }}
      className="relative h-20 w-40 shrink-0 overflow-hidden rounded-2xl border border-black/5 shadow-[0_4px_16px_rgb(10_42_102/0.06)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgb(10_42_102/0.12)] md:h-24 md:w-48 dark:border-white/10"
    >
      {partner.nameColor ? (
        // Symbole seul : le nom est écrit à côté pour rester reconnaissable
        <div className="flex h-full items-center justify-center gap-2.5 px-4">
          <Image
            src={partner.logo}
            alt=""
            width={partner.width}
            height={partner.height}
            loading="eager"
            className="h-9 w-auto md:h-11"
          />
          <span
            style={{ color: partner.nameColor }}
            className="font-heading text-lg font-extrabold tracking-tight md:text-xl"
          >
            {partner.name}
          </span>
        </div>
      ) : (
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          sizes="(min-width: 768px) 192px, 160px"
          // Les tuiles arrivent par le côté en défilant : chargées d'avance pour ne jamais apparaître vides
          loading="eager"
          className="object-contain p-2"
        />
      )}
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
