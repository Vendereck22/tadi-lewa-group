import { contactInfo, socialLinks } from "@/lib/data/site";

// Le mot du fondateur — contenus à fournir par l'entreprise
export const founder = {
  name: "[Nom du fondateur]",
  role: "Fondateur & Gérant, TADI LEWA GROUP SARLU",
  message:
    "[Le message du fondateur : sa conviction, pourquoi il a créé TADI LEWA GROUP et ce qu'il souhaite apporter aux entrepreneurs congolais.]",
  /** Portrait 4:5, ex. "/images/equipe/fondateur.webp" */
  photo: undefined as string | undefined,
};

export const teamPoles = {
  direction: "Direction",
  programmes: "Programmes",
  evenements: "Événements",
  communication: "Communication",
} as const;

export type TeamPole = keyof typeof teamPoles;

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  pole: TeamPole;
  /** Portrait 4:5 dans /public/images/equipe (un emplacement s'affiche sinon) */
  photo?: string;
  linkedin: string;
  email: string;
};

// Contenus à fournir par l'entreprise. En attendant les liens personnels, LinkedIn et email
// pointent vers la page LinkedIn et l'adresse générale de TADI LEWA GROUP.
const defaults = { linkedin: socialLinks.linkedin, email: contactInfo.email };

export const teamMembers: TeamMember[] = [
  {
    id: "fondateur",
    name: "[Nom et prénom]",
    role: "Fondateur & Gérant",
    bio: "[Parcours, expertise et rôle dans le groupe.]",
    pole: "direction",
    ...defaults,
  },
  {
    id: "operations",
    name: "[Nom et prénom]",
    role: "[Directeur(trice) des opérations]",
    bio: "[Parcours, expertise et rôle dans le groupe.]",
    pole: "direction",
    ...defaults,
  },
  {
    id: "accompagnement",
    name: "[Nom et prénom]",
    role: "[Responsable accompagnement]",
    bio: "[Suivi et coaching des entrepreneurs.]",
    pole: "programmes",
    ...defaults,
  },
  {
    id: "formation",
    name: "[Nom et prénom]",
    role: "[Formateur(trice)]",
    bio: "[Animation des sessions de formation.]",
    pole: "programmes",
    ...defaults,
  },
  {
    id: "evenements",
    name: "[Nom et prénom]",
    role: "[Responsable événements]",
    bio: "[Organisation de MADE IN CONGO et des foires.]",
    pole: "evenements",
    ...defaults,
  },
  {
    id: "partenariats",
    name: "[Nom et prénom]",
    role: "[Chargé(e) des partenariats]",
    bio: "[Relations avec les sponsors et partenaires.]",
    pole: "evenements",
    ...defaults,
  },
  {
    id: "communication",
    name: "[Nom et prénom]",
    role: "[Responsable communication]",
    bio: "[Réseaux sociaux, image et relations presse.]",
    pole: "communication",
    ...defaults,
  },
  {
    id: "photo-video",
    name: "[Nom et prénom]",
    role: "[Photographe / vidéaste]",
    bio: "[Couverture des événements et contenus.]",
    pole: "communication",
    ...defaults,
  },
];
