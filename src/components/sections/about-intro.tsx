import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { photos } from "@/lib/data/images";

export function AboutIntro() {
  const t = useTranslations("about.intro");
  const ti = useTranslations("images");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <section className="container-site grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
      {/* Composition : grande photo de l'équipe au travail, seconde photo en avant-plan */}
      <div className="relative mx-auto aspect-[295/237] w-full max-w-[560px]">
        <div className="absolute inset-y-0 left-0 w-[70%] overflow-hidden">
          <Image
            src={photos.aboutMain.src}
            alt={ti("aboutMain")}
            fill
            sizes="(min-width: 1024px) 400px, 70vw"
            className="object-cover"
          />
        </div>
        <div className="absolute top-[43.5%] right-0 h-[49%] w-[57.6%] overflow-hidden shadow-[0_14px_40px_rgba(10,42,102,0.08)]">
          <Image
            src={photos.aboutSecondary.src}
            alt={ti("aboutSecondary")}
            fill
            sizes="(min-width: 1024px) 330px, 58vw"
            className="object-cover"
          />
        </div>
      </div>

      <div>
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
        />
        <div className="mt-5 space-y-4 text-muted-foreground">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="xl">
            <Link href="/services">
              {t("services")}
              <ArrowRight />
            </Link>
          </Button>
          <Button
            asChild
            size="xl"
            variant="outline"
            className="border-[1.5px] border-primary bg-transparent text-primary shadow-none"
          >
            <Link href="/contact">{t("write")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
