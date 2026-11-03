import { SectionHeader } from "@/components/shared/section-header";
import { Timeline, type TimelineItem } from "@/components/shared/timeline";

const milestones: TimelineItem[] = [
  {
    label: "[Année]",
    title: "Création de TADI LEWA GROUP SARLU",
    text: "[Racontez la naissance du projet et les premières actions menées.]",
  },
  {
    label: "16 janv. 2026",
    dateTime: "2026-01-16",
    title: "MADE IN CONGO – 2e édition",
    text: "La foire entrepreneuriale réunit entrepreneurs, intervenants et partenaires autour du savoir-faire congolais.",
  },
  {
    label: "27 janv. 2026",
    dateTime: "2026-01-27",
    title: "Foire entrepreneuriale & conférence",
    text: "Un succès collectif porté par nos entrepreneurs, nos intervenants et toute l'équipe.",
  },
  {
    label: "À venir",
    title: "[Prochain grand projet]",
    text: "[Présentez ici les prochaines étapes et ambitions du groupe.]",
  },
];

export function HistorySection() {
  return (
    <section className="container-site py-16 md:py-24">
      <SectionHeader eyebrow="Notre parcours" title="Les étapes qui nous ont construits" />
      <div className="mt-10 md:mt-12">
        <Timeline items={milestones} />
      </div>
    </section>
  );
}
