import type { PhotoKey } from "@/lib/data/images";
import { Briefcase, Handshake, Rocket, Users, type LucideIcon } from "lucide-react";

// Textes traduits : clé « services.<id> » (titre, résumé, description, points, bouton)
export type Service = {
  id: "entrepreneurs" | "entreprises" | "partenariats";
  /** Icône de la carte de l'accueil */
  icon: LucideIcon;
  /** Icône de la page Services (la maquette en utilise parfois une autre) */
  pageIcon: LucideIcon;
  image: PhotoKey;
};

// L'id sert d'ancre sur la page Services (/services#entrepreneurs…)
export const services: Service[] = [
  {
    id: "entrepreneurs",
    icon: Rocket,
    pageIcon: Rocket,
    image: "serviceEntrepreneurs",
  },
  {
    id: "entreprises",
    icon: Users,
    pageIcon: Briefcase,
    image: "serviceEntreprises",
  },
  {
    id: "partenariats",
    icon: Handshake,
    pageIcon: Handshake,
    image: "servicePartenariats",
  },
];
