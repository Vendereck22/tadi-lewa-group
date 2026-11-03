import type { Metadata } from "next";
import { FaqSection } from "@/components/sections/faq-section";
import { MethodSection } from "@/components/sections/method-section";
import { ServiceDetails } from "@/components/sections/service-details";
import { TrainingTopics } from "@/components/sections/training-topics";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { photos } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "Nos services",
  description:
    "Conseil, formation, solutions pour entreprises et partenariats : un accompagnement complet, de l'idée jusqu'à la croissance.",
};

// Ancres vers les sections de la page
const anchors = [
  { href: "#entrepreneurs", label: "Entrepreneurs" },
  { href: "#entreprises", label: "Entreprises" },
  { href: "#partenariats", label: "Partenariats" },
  { href: "#formation", label: "Formation" },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        crumb="Services"
        title={
          <>
            Des services pour <span className="text-brand">faire grandir vos projets</span>
          </>
        }
        description="Conseil, formation, solutions pour entreprises et partenariats : un accompagnement complet, de l'idée jusqu'à la croissance."
        image={photos.servicesHeader}
      >
        <nav aria-label="Accès rapide aux services" className="mt-7">
          <ul className="flex flex-wrap gap-2.5">
            {anchors.map((anchor) => (
              <li key={anchor.href}>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="h-10 bg-card px-4 font-semibold shadow-none"
                >
                  <a href={anchor.href}>{anchor.label}</a>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>
      <ServiceDetails />
      <MethodSection />
      <TrainingTopics />
      <FaqSection />
      <CtaBand
        title={"Quel service vous correspond ?"}
        description="Un premier échange permet de définir ensemble l'accompagnement adapté à votre projet."
      />
    </main>
  );
}
