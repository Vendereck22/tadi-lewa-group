import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { photos } from "@/lib/data/images";

const heroImage = photos.hero;

export function Hero() {
  const t = useTranslations("hero");
  const ti = useTranslations("images");
  const highlights = t.raw("highlights") as string[];

  return (
    <section className="relative isolate overflow-hidden bg-brand-deep text-white">
      <Image
        src={heroImage.src}
        alt={ti("hero")}
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center]"
      />
      {/* Voile bleu nuit : plein à gauche pour la lisibilité du texte, plus léger à droite */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-deep via-brand-deep/85 to-brand-deep/40 lg:via-brand-deep/75 lg:to-brand-deep/10"
      />

      <div className="container-site flex min-h-[560px] flex-col justify-center pt-16 pb-28 md:min-h-[640px] md:pt-24 md:pb-36">
        <div className="max-w-2xl">
          <Badge className="gap-2 rounded-full border-white/20 bg-white/10 px-3.5 py-1.5 text-[13px] font-semibold text-white backdrop-blur">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-chart-3" />
            {t("badge")}
          </Badge>

          <h1 className="mt-6 text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            {t("titleStart")} <span className="text-chart-3">{t("titleHighlight")}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/85">
            {t("description")}
          </p>

          <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold text-white/90">
            {highlights.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className="size-1 rounded-full bg-white/40" />}
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="xl" variant="brand">
              <Link href="/a-propos">
                {t("primary")}
                <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="border-[1.5px] border-white/70 bg-transparent text-white shadow-none hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">{t("secondary")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
