import { Globe, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import { DividedRow } from "@/components/shared/divided-row";
import { ValueItem } from "@/components/shared/value-item";

const values = [
  { key: "innovation", icon: TrendingUp },
  { key: "partnership", icon: Users },
  { key: "commitment", icon: ShieldCheck },
  { key: "development", icon: Globe },
];

export function ValuesStrip() {
  const t = useTranslations("values");

  return (
    // Chevauche le bas du Hero (image de fond) pour faire la transition avec la suite
    <section aria-label={t("label")} className="container-site relative z-10 -mt-14 md:-mt-16">
      <div className="rounded-3xl shadow-[0_14px_40px_rgba(10,42,102,0.08)]">
        <DividedRow
          items={values.map(({ key, icon }) => ({
            key,
            content: (
              <ValueItem
                icon={icon}
                title={t(`items.${key}.title`)}
                subtitle={t(`items.${key}.subtitle`)}
              />
            ),
          }))}
        />
      </div>
    </section>
  );
}
