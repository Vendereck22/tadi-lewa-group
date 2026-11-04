import { z } from "zod";

// Valeurs stables envoyées par les formulaires ; libellés traduits : « form.subjects.<valeur> »
export const contactSubjects = [
  "rendez-vous",
  "accompagnement",
  "solution-entreprise",
  "partenariat",
  "formation",
  "voyage",
  "autre",
] as const;

// Libellés traduits : « form.profiles.<valeur> »
export const contactProfiles = ["entrepreneur", "entreprise", "partenaire", "autre"] as const;

// Les messages d'erreur sont des clés de traduction (« form.errors.<clé> »)
export const contactSchema = z.object({
  profil: z.enum(contactProfiles),
  nom: z.string().trim().min(2, "nameRequired"),
  telephone: z.string().trim().min(9, "phoneTooShort"),
  email: z.email("emailInvalid"),
  date: z.date().optional(),
  objet: z.string().min(1, "subjectRequired"),
  message: z.string().trim().min(10, "messageTooShort"),
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
  email: z.email("emailInvalid"),
});

export type NewsletterValues = z.infer<typeof newsletterSchema>;
