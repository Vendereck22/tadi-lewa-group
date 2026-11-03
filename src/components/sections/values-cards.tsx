import { Layers, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";

const values = [
  { key: "innovation", icon: TrendingUp },
  { key: "partnership", icon: Users },
  { key: "commitment", icon: ShieldCheck },
  { key: "impact", icon: Layers },
];

export function ValuesCards() {
  const t = useTranslations("about.values");

  return (
    <section className="container-site py-16 md:py-24">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} />
        <p className="max-w-md text-muted-foreground lg:pb-2">
          {t("intro")}
        </p>
      </div>

      <ol className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 md:gap-6 lg:grid-cols-4">
        {values.map(({ key, icon: Icon }, i) => (
          <li key={key}>
            <Card className="h-full gap-0 rounded-3xl p-7 shadow-none md:p-8">
              <span className="font-heading text-sm font-bold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Icon aria-hidden="true" className="mt-4 size-8 text-primary" strokeWidth={1.75} />
              <h3 className="mt-4 text-xl font-bold">{t(`items.${key}.title`)}</h3>
              <p className="mt-3 text-muted-foreground">{t(`items.${key}.text`)}</p>
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
}
