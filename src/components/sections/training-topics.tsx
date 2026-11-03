import { GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";
import { IconCircle } from "@/components/shared/icon-circle";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";

// Textes traduits : « servicesPage.training.topics.<clé> »
const topics = ["entrepreneurship", "finance", "marketing", "digital", "leadership", "funding"];

export function TrainingTopics() {
  const t = useTranslations("servicesPage.training");

  return (
    // id « formation » : cible de la pilule de l'en-tête et de la tuile Explorer de l'accueil
    <section id="formation" className="container-site scroll-mt-28 py-16 md:py-24">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} />
        <p className="max-w-md text-muted-foreground lg:pb-2">
          {t("intro")}
        </p>
      </div>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
        {topics.map((topic) => (
          <li key={topic}>
            <Card className="h-full flex-row items-start gap-4 rounded-3xl p-6 shadow-none">
              <IconCircle icon={GraduationCap} variant="light" size="sm" className="rounded-xl" />
              <div>
                <h3 className="font-bold">{t(`topics.${topic}.title`)}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{t(`topics.${topic}.text`)}</p>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
