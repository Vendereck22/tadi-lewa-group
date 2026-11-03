import { useLocale, useTranslations } from "next-intl";
import { SectionHeader } from "@/components/shared/section-header";
import { Timeline, type TimelineItem } from "@/components/shared/timeline";
import { formatShortDate } from "@/lib/data/news";

// Étapes du parcours (textes traduits : « about.history.items.<clé> »)
const milestones: { key: string; date?: string; upcoming?: boolean }[] = [
  { key: "creation" },
  { key: "madeInCongo", date: "2026-01-16" },
  { key: "fair", date: "2026-01-27" },
  { key: "next", upcoming: true },
];

export function HistorySection() {
  const t = useTranslations("about.history");
  const locale = useLocale();

  const items: TimelineItem[] = milestones.map(({ key, date, upcoming }) => ({
    label: date ? formatShortDate(date, locale) : upcoming ? t("upcoming") : t("yearPlaceholder"),
    dateTime: date,
    title: t(`items.${key}.title`),
    text: t(`items.${key}.text`),
  }));

  return (
    <section className="container-site py-16 md:py-24">
      <SectionHeader eyebrow={t("eyebrow")} title={t("title")} />
      <div className="mt-10 md:mt-12">
        <Timeline items={items} />
      </div>
    </section>
  );
}
