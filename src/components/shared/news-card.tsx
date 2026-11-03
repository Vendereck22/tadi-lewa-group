import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { FacebookIcon } from "@/components/shared/brand-icons";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { photos } from "@/lib/data/images";
import { formatShortDate, type NewsItem } from "@/lib/data/news";

// Textes d'une publication dans la langue de la page
function useNewsText(item: NewsItem) {
  const t = useTranslations("news");
  const tc = useTranslations("common");
  const ti = useTranslations("images");
  return {
    title: t(`items.${item.id}.title`),
    excerpt: t(`items.${item.id}.excerpt`),
    category: t(`categories.${item.category}`),
    featured: t("featured"),
    seeOnFacebook: tc("seeOnFacebook"),
    newTab: tc("newTab"),
    image: { src: photos[item.image].src, alt: ti(item.image) },
  };
}

function NewsDate({ date }: { date: string | null }) {
  const locale = useLocale();
  const t = useTranslations("news");

  return (
    <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
      <Calendar aria-hidden="true" className="size-4" />
      {date ? <time dateTime={date}>{formatShortDate(date, locale)}</time> : t("noDate")}
    </p>
  );
}

// Squelette animé sous l'image : visible tant qu'elle se charge, recouvert ensuite
function NewsImageSkeleton() {
  return <Skeleton aria-hidden="true" className="absolute inset-0 rounded-none" />;
}

// Carte d'actualité compacte : image, titre, date, lien Facebook
export function NewsCard({ item }: { item: NewsItem }) {
  const text = useNewsText(item);

  return (
    <Card className="h-full gap-0 overflow-hidden rounded-none py-0 shadow-none">
      <AspectRatio ratio={14 / 9}>
        <NewsImageSkeleton />
        <Image
          src={text.image.src}
          alt={text.image.alt}
          fill
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </AspectRatio>
      <div className="flex flex-1 flex-col gap-5 p-5 md:p-6">
        <h3 className="text-base leading-snug font-bold">{text.title}</h3>
        <div className="mt-auto flex items-center justify-between gap-3">
          <NewsDate date={item.date} />
          <Button
            asChild
            variant="link"
            className="h-auto gap-1 p-0 font-semibold text-brand has-[>svg]:px-0"
          >
            <a href={item.facebookUrl} target="_blank" rel="noopener noreferrer">
              Facebook
              <span className="sr-only"> : {text.title} {text.newTab}</span>
              <ArrowRight aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}

// Carte d'actualité complète (page Actualités) : catégorie sur l'image, résumé, bouton Facebook
export function NewsGridCard({ item }: { item: NewsItem }) {
  const text = useNewsText(item);

  return (
    <Card className="h-full gap-0 overflow-hidden rounded-none py-0 shadow-none">
      <AspectRatio ratio={16 / 9}>
        <NewsImageSkeleton />
        <Image
          src={text.image.src}
          alt={text.image.alt}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <Badge className="absolute top-3 left-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary">
          {text.category}
        </Badge>
      </AspectRatio>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="text-lg leading-snug font-bold">{text.title}</h3>
        <p className="mt-2 text-[15px] text-muted-foreground">{text.excerpt}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
          <NewsDate date={item.date} />
          <Button asChild size="sm" className="h-9 px-4 font-semibold">
            <a href={item.facebookUrl} target="_blank" rel="noopener noreferrer">
              <FacebookIcon className="size-3.5" />
              {text.seeOnFacebook}
              <span className="sr-only"> : {text.title} {text.newTab}</span>
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}

// Publication à la une : grande image à gauche, contenu à droite
export function FeaturedNewsCard({
  item,
  showFeaturedBadge = false,
  headingLevel = "h3",
  preload = false,
}: {
  item: NewsItem;
  /** Badge « À la une » (page Actualités) */
  showFeaturedBadge?: boolean;
  headingLevel?: "h2" | "h3";
  /** Image en haut de page : chargée en priorité */
  preload?: boolean;
}) {
  const Heading = headingLevel;
  const text = useNewsText(item);

  return (
    <Card className="gap-0 overflow-hidden rounded-none py-0 shadow-[0_14px_40px_rgba(10,42,102,0.08)] md:grid md:grid-cols-[1.1fr_1fr]">
      <div className="relative aspect-[16/10] md:aspect-auto md:min-h-80">
        <Image
          src={text.image.src}
          alt={text.image.alt}
          fill
          preload={preload}
          sizes="(min-width: 1024px) 640px, (min-width: 768px) 55vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-start justify-center p-6 md:p-10 lg:p-12">
        <div className="flex flex-wrap gap-2">
          {showFeaturedBadge && (
            <Badge className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-foreground">
              {text.featured}
            </Badge>
          )}
          <Badge className="rounded-full px-3 py-1 text-xs font-semibold">
            {text.category}
          </Badge>
        </div>
        <Heading className="mt-4 text-2xl font-extrabold md:text-3xl">{text.title}</Heading>
        <p className="mt-4 text-muted-foreground">{text.excerpt}</p>
        <div className="mt-4">
          <NewsDate date={item.date} />
        </div>
        <Button asChild size="lg" className="mt-6 px-6 font-semibold">
          <a href={item.facebookUrl} target="_blank" rel="noopener noreferrer">
            <FacebookIcon className="size-4" />
            {text.seeOnFacebook}
            <span className="sr-only"> {text.newTab}</span>
          </a>
        </Button>
      </div>
    </Card>
  );
}
