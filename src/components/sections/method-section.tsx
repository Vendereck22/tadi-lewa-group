import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";

// Textes traduits : « servicesPage.method.steps.<clé> »
const steps = ["contact", "diagnosis", "plan", "followUp"];

export function MethodSection() {
  const t = useTranslations("servicesPage.method");

  return (
    <section className="border-y bg-muted py-16 md:py-24">
      <div className="container-site">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          align="center"
        />

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 md:gap-6 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step}>
              <Card className="h-full gap-0 rounded-3xl p-7 shadow-none">
                <span
                  aria-hidden="true"
                  className="flex size-10 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground"
                >
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold">{t(`steps.${step}.title`)}</h3>
                <p className="mt-2 text-muted-foreground">{t(`steps.${step}.text`)}</p>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
