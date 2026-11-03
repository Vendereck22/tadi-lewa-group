"use server";

import {
  contactSchema,
  quickContactSchema,
  type ContactValues,
  type QuickContactValues,
} from "@/lib/schemas/contact";

export type ActionResult = { ok: true } | { ok: false; error: string };

export async function sendQuickContact(values: QuickContactValues): Promise<ActionResult> {
  const parsed = quickContactSchema.safeParse(values);
  if (!parsed.success) {
    return { ok: false, error: "Certains champs sont invalides." };
  }

  // TODO : brancher l'envoi réel (email via Resend, WhatsApp…). Pour l'instant le message
  // est seulement journalisé côté serveur.
  console.info("[contact] nouveau message", parsed.data);
  return { ok: true };
}

// Formulaire complet de la page Contact (profil et date souhaitée en plus)
export async function sendAppointment(values: ContactValues): Promise<ActionResult> {
  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    return { ok: false, error: "Certains champs sont invalides." };
  }

  // TODO : même branchement que sendQuickContact (email, WhatsApp…).
  console.info("[contact] nouvelle demande de rendez-vous", parsed.data);
  return { ok: true };
}
