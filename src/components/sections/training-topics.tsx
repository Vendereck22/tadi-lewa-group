import { GraduationCap } from "lucide-react";
import { IconCircle } from "@/components/shared/icon-circle";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";

const topics = [
  { title: "Entrepreneuriat", text: "Passer de l'idée au projet viable." },
  { title: "Gestion & finances", text: "Tenir ses comptes et piloter son activité." },
  { title: "Marketing & vente", text: "Trouver et fidéliser ses clients." },
  { title: "Communication digitale", text: "Gagner en visibilité sur les réseaux sociaux." },
  { title: "Leadership", text: "Animer et motiver une équipe." },
  { title: "Recherche de financement", text: "Préparer un dossier convaincant." },
];

export function TrainingTopics() {
  return (
    // id « formation » : cible de la pilule de l'en-tête et de la tuile Explorer de l'accueil
    <section id="formation" className="container-site scroll-mt-28 py-16 md:py-24">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <SectionHeader eyebrow="Formation" title="Nos thématiques de formation" />
        <p className="max-w-md text-muted-foreground lg:pb-2">
          Des sessions pratiques, en groupe ou en entreprise. [Précisez les dates, durées et
          tarifs.]
        </p>
      </div>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
        {topics.map((topic) => (
          <li key={topic.title}>
            <Card className="h-full flex-row items-start gap-4 rounded-3xl p-6 shadow-none">
              <IconCircle icon={GraduationCap} variant="light" size="sm" className="rounded-xl" />
              <div>
                <h3 className="font-bold">{topic.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{topic.text}</p>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
