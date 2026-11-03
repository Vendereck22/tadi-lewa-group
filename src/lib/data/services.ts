import { photos } from "@/lib/data/images";
import { Briefcase, Handshake, Rocket, Users, type LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  /** Icône de la carte de l'accueil */
  icon: LucideIcon;
  /** Icône de la page Services (la maquette en utilise parfois une autre) */
  pageIcon: LucideIcon;
  title: string;
  /** Résumé court (cartes de l'accueil) */
  summary: string;
  /** Texte détaillé (page Services) */
  description: string;
  features: string[];
  cta: string;
  image: { src: string; alt: string };
};

// L'id sert d'ancre sur la page Services (/services#entrepreneurs…)
export const services: Service[] = [
  {
    id: "entrepreneurs",
    icon: Rocket,
    pageIcon: Rocket,
    title: "Accompagnement des entrepreneurs",
    summary:
      "Conseil, formation et appui pour faire grandir vos projets, de l'idée jusqu'au lancement.",
    description:
      "Vous avez une idée ou une jeune entreprise ? Nous vous aidons à structurer votre projet, à gagner en compétences et à franchir chaque étape avec méthode.",
    features: [
      "Conseil et diagnostic du projet",
      "Élaboration du business plan",
      "Coaching et suivi personnalisé",
      "Préparation aux foires et concours",
    ],
    cta: "Être accompagné",
    image: photos.serviceEntrepreneurs,
  },
  {
    id: "entreprises",
    icon: Users,
    pageIcon: Briefcase,
    title: "Solutions pour les entreprises",
    summary: "Des services adaptés pour structurer, développer et booster votre activité.",
    description:
      "Des services adaptés pour structurer votre organisation, renforcer vos équipes et booster votre activité sur le marché congolais.",
    features: [
      "Conseil en gestion et stratégie",
      "Formation des équipes",
      "Visibilité et communication",
      "Organisation d'événements",
    ],
    cta: "Demander une offre",
    image: photos.serviceEntreprises,
  },
  {
    id: "partenariats",
    icon: Handshake,
    pageIcon: Handshake,
    title: "Partenariats et opportunités",
    summary:
      "Ensemble pour créer plus d'opportunités : mise en relation, événements et réseaux d'affaires.",
    description:
      "Ensemble pour créer plus d'opportunités : nous connectons entrepreneurs, entreprises, institutions et investisseurs autour de projets concrets.",
    features: [
      "Mise en relation d'affaires",
      "Sponsoring d'événements",
      "Projets communs à impact",
      "Réseau d'experts et intervenants",
    ],
    cta: "Devenir partenaire",
    image: photos.servicePartenariats,
  },
];
