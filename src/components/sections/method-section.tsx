import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";

const steps = [
  {
    title: "Prise de contact",
    text: "Vous nous présentez votre projet lors d'un premier rendez-vous.",
  },
  {
    title: "Diagnostic",
    text: "Nous analysons vos besoins, vos forces et les points à renforcer.",
  },
  {
    title: "Plan d'action",
    text: "Nous construisons ensemble une feuille de route claire et réaliste.",
  },
  {
    title: "Suivi",
    text: "Nous restons à vos côtés pour mesurer les progrès et ajuster.",
  },
];

export function MethodSection() {
  return (
    <section className="border-y bg-muted py-16 md:py-24">
      <div className="container-site">
        <SectionHeader
          eyebrow="Notre méthode"
          title="Comment nous travaillons avec vous"
          align="center"
        />

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 md:gap-6 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title}>
              <Card className="h-full gap-0 rounded-3xl p-7 shadow-none">
                <span
                  aria-hidden="true"
                  className="flex size-10 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground"
                >
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.text}</p>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
