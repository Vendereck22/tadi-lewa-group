import { Minus, Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/shared/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Questions et réponses traduites : « servicesPage.faq.items.<id> »
// (réponses entre crochets : à compléter par l'entreprise)
const faqs = ["beneficiaires", "premier-rendez-vous", "tarifs", "evenements"];

export function FaqSection() {
  const t = useTranslations("servicesPage.faq");

  return (
    <section className="pb-16 md:pb-24">
      <div className="container-site max-w-[860px]">
        <SectionHeader title={t("title")} align="center" />

        <Accordion
          type="single"
          collapsible
          defaultValue={faqs[0]}
          className="mt-10 space-y-3 md:mt-12"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq}
              value={faq}
              className="rounded-2xl border bg-card px-5 last:border-b md:px-6"
            >
              {/* Icône + / − de la maquette à la place du chevron de shadcn */}
              <AccordionTrigger className="group items-center py-5 text-base font-semibold hover:no-underline [&>svg:last-child]:hidden">
                {t(`items.${faq}.question`)}
                <span aria-hidden="true" className="shrink-0 text-brand">
                  <Plus className="size-5 group-data-[state=open]:hidden" />
                  <Minus className="hidden size-5 group-data-[state=open]:block" />
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[15px] text-muted-foreground">
                {t(`items.${faq}.answer`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
