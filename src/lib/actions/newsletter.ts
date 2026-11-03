"use server";

import type { ActionResult } from "@/lib/actions/contact";
import { newsletterSchema, type NewsletterValues } from "@/lib/schemas/contact";

export async function subscribeNewsletter(values: NewsletterValues): Promise<ActionResult> {
  const parsed = newsletterSchema.safeParse(values);
  if (!parsed.success) {
    return { ok: false, error: "emailInvalid" };
  }

  // TODO : brancher un vrai service d'emailing (Brevo, Mailchimp, Resend…). Pour l'instant
  // l'inscription est seulement journalisée côté serveur.
  console.info("[newsletter] nouvelle inscription", parsed.data.email);
  return { ok: true };
}
