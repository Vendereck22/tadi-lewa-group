import Image from "next/image";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { photos } from "@/lib/data/images";

export function VisionSection() {
  const t = useTranslations("vision");
  const ti = useTranslations("images");
  const highlights = t.raw("highlights") as string[];

  return (
    <section className="border-y bg-muted py-16 md:py-24">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <AspectRatio ratio={4 / 3} className="overflow-hidden">
          <Image
            src={photos.vision.src}
            alt={ti("vision")}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
        </AspectRatio>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">{t("eyebrow")}</p>
          <h2 className="mt-3 text-3xl leading-tight font-extrabold md:text-4xl lg:text-[2.75rem]">
            {t("title")}
          </h2>
          <span aria-hidden="true" className="mt-5 block h-1 w-12 rounded-full bg-brand" />

          <p className="mt-6 text-lg font-semibold md:text-xl">
            {t("lead")}
          </p>
          <p className="mt-4 text-muted-foreground">{t("text")}</p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex min-h-14 items-center gap-3 rounded-2xl border bg-card px-5 py-3 text-[15px] font-semibold"
              >
                <Check aria-hidden="true" className="size-5 shrink-0 text-brand" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
