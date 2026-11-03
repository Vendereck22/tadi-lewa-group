import { z } from "zod";

export const contactSubjects = [
  "Prendre rendez-vous",
  "Accompagnement entrepreneur",
  "Solution entreprise",
  "Partenariat",
  "Formation",
  "Autre",
] as const;

export const contactProfiles = {
  entrepreneur: "Entrepreneur",
  entreprise: "Entreprise",
  partenaire: "Partenaire",
  autre: "Autre",
} as const;

export const contactSchema = z.object({
  profil: z.enum(["entrepreneur", "entreprise", "partenaire", "autre"]),
  nom: z.string().trim().min(2, "Indiquez votre nom"),
  telephone: z.string().trim().min(9, "Numéro trop court"),
  email: z.email("Adresse email invalide"),
  date: z.date().optional(),
  objet: z.string().min(1, "Choisissez un objet"),
  message: z.string().trim().min(10, "Message trop court"),
});

export type ContactValues = z.infer<typeof contactSchema>;

// Formulaire court de l'accueil : sans profil ni date
export const quickContactSchema = contactSchema.pick({
  nom: true,
  telephone: true,
  email: true,
  objet: true,
  message: true,
});

export type QuickContactValues = z.infer<typeof quickContactSchema>;

export const newsletterSchema = z.object({
  email: z.email("Adresse email invalide"),
});

export type NewsletterValues = z.infer<typeof newsletterSchema>;
