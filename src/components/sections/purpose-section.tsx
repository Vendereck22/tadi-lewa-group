import { Eye, Globe, Target } from "lucide-react";
import { IconCircle } from "@/components/shared/icon-circle";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const items = [
  {
    icon: Target,
    title: "Notre mission",
    text: "Accompagner les entrepreneurs et les entreprises de la RDC par le conseil, la formation et l'appui, afin de transformer les idées en projets viables et durables.",
  },
  {
    icon: Eye,
    title: "Notre vision",
    text: "Être un partenaire de confiance pour le développement durable, et un acteur de référence de l'écosystème entrepreneurial congolais.",
    highlighted: true,
  },
  {
    icon: Globe,
    title: "Notre ambition",
    text: "Contribuer à un Congo prospère en multipliant les entreprises solides, créatrices d'emplois et de valeur pour leurs communautés.",
  },
];

export function PurposeSection() {
  return (
    <section className="border-y bg-muted py-16 md:py-24">
      <div className="container-site">
        <SectionHeader
          eyebrow="Notre raison d'être"
          title="Mission, vision et ambition"
          align="center"
        />

        <ul className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
          {items.map(({ icon, title, text, highlighted }) => (
            <li key={title}>
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
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p
                  className={cn(
                    "mt-3",
                    highlighted ? "text-primary-foreground/85" : "text-muted-foreground",
                  )}
                >
                  {text}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
