import { Eye, Globe, Target } from "lucide-react";
import { useTranslations } from "next-intl";
import { IconCircle } from "@/components/shared/icon-circle";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const items = [
  { key: "mission", icon: Target },
  { key: "vision", icon: Eye, highlighted: true },
  { key: "ambition", icon: Globe },
];

export function PurposeSection() {
  const t = useTranslations("about.purpose");

  return (
    <section className="border-y bg-muted py-16 md:py-24">
      <div className="container-site">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          align="center"
        />

        <ul className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
          {items.map(({ key, icon, highlighted }) => (
            <li key={key}>
              {/* La carte du milieu (vision) est mise en avant en bleu marine */}
              <Card
                className={cn(
                  "h-full gap-0 rounded-3xl p-7 shadow-none md:p-8",
                  highlighted && "border-primary bg-primary text-primary-foreground",
                )}
              >
                <IconCircle
                  icon={icon}
                  size="lg"
                  className={cn(highlighted && "bg-white text-primary")}
                />
                <h3 className="mt-6 text-xl font-bold">{t(`${key}.title`)}</h3>
                <p
                  className={cn(
                    "mt-3",
                    highlighted ? "text-primary-foreground/85" : "text-muted-foreground",
                  )}
                >
                  {t(`${key}.text`)}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
