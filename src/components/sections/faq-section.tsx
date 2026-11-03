import { Minus, Plus } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Réponses entre crochets : à compléter par l'entreprise
const faqs = [
  {
    id: "beneficiaires",
    question: "Qui peut bénéficier de vos services ?",
    answer:
      "Les porteurs de projets, les jeunes entrepreneurs, les PME et les organisations qui souhaitent se développer en RDC.",
  },
  {
    id: "premier-rendez-vous",
    question: "Comment se déroule le premier rendez-vous ?",
    answer:
      "Vous nous présentez votre projet, puis nous analysons ensemble vos besoins pour définir l'accompagnement adapté. [Précisez la durée et le lieu du rendez-vous.]",
  },
  {
    id: "tarifs",
    question: "Quels sont vos tarifs ?",
    answer:
      "[Indiquez ici vos tarifs ou votre façon de les établir.] Contactez-nous pour recevoir une offre adaptée à votre projet.",
  },
  {
    id: "evenements",
    question: "Comment participer à vos événements ?",
    answer:
      "Nos événements, comme la foire MADE IN CONGO, sont annoncés dans nos actualités et sur Facebook. [Précisez les modalités d'inscription.]",
  },
];

export function FaqSection() {
  return (
    <section className="pb-16 md:pb-24">
      <div className="container-site max-w-[860px]">
        <SectionHeader title="Questions fréquentes" align="center" />

        <Accordion
          type="single"
          collapsible
          defaultValue={faqs[0].id}
          className="mt-10 space-y-3 md:mt-12"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="rounded-2xl border bg-card px-5 last:border-b md:px-6"
            >
              {/* Icône + / − de la maquette à la place du chevron de shadcn */}
              <AccordionTrigger className="group items-center py-5 text-base font-semibold hover:no-underline [&>svg:last-child]:hidden">
                {faq.question}
                <span aria-hidden="true" className="shrink-0 text-brand">
                  <Plus className="size-5 group-data-[state=open]:hidden" />
                  <Minus className="hidden size-5 group-data-[state=open]:block" />
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[15px] text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
