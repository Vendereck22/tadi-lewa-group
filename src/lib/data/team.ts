import { contactInfo, socialLinks } from "@/lib/data/site";

// Le mot du fondateur : nom, rôle et message traduits (clé « team.founder »)
export const founder = {
  /** Portrait 4:5, ex. "/images/equipe/fondateur.webp" */
  photo: undefined as string | undefined,
};

// Libellés traduits : clé « team.poles.<pôle> »
export const teamPoles = ["direction", "programmes", "evenements", "communication"] as const;

export type TeamPole = (typeof teamPoles)[number];

// Nom, rôle et présentation traduits : clé « team.members.<id> »
export type TeamMember = {
  id: string;
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
  { id: "fondateur", pole: "direction", ...defaults },
  { id: "operations", pole: "direction", ...defaults },
  { id: "accompagnement", pole: "programmes", ...defaults },
  { id: "formation", pole: "programmes", ...defaults },
  { id: "evenements", pole: "evenements", ...defaults },
  { id: "partenariats", pole: "evenements", ...defaults },
  { id: "communication", pole: "communication", ...defaults },
  { id: "photo-video", pole: "communication", ...defaults },
];
