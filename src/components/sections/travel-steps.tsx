import { useTranslations } from "next-intl";
import { DividedRow } from "@/components/shared/divided-row";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";
import { travelSteps, travelStrengths } from "@/lib/data/travel";

// Atouts de l'accompagnement, puis les 4 étapes d'un voyage organisé avec nous
export function TravelSteps() {
  const t = useTranslations("travelPage");

  return (
    <section className="border-y bg-muted py-16 md:py-24">
      <div className="container-site">
        <DividedRow
          label={t("why.label")}
          items={travelStrengths.map((key) => ({
            key,
            content: (
              <>
                <p className="font-heading text-lg font-bold">{t(`why.items.${key}.title`)}</p>
                <p className="mt-1.5 text-muted-foreground">{t(`why.items.${key}.text`)}</p>
              </>
            ),
          }))}
        />

        <SectionHeader
          eyebrow={t("steps.eyebrow")}
          title={t("steps.title")}
          align="center"
          className="mt-16 md:mt-24"
        />

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 md:gap-6 lg:grid-cols-4">
          {travelSteps.map((step, i) => (
            <li key={step}>
              <Card className="h-full gap-0 rounded-3xl p-7 shadow-none">
                <span
                  aria-hidden="true"
                  className="flex size-10 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground"
                >
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold">{t(`steps.items.${step}.title`)}</h3>
                <p className="mt-2 text-muted-foreground">{t(`steps.items.${step}.text`)}</p>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
