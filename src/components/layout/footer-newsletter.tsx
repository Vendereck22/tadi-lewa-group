"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { subscribeNewsletter } from "@/lib/actions/newsletter";
import { newsletterSchema, type NewsletterValues } from "@/lib/schemas/contact";

// Inscription à la newsletter, version compacte du pied de page (même action que la page Actualités)
export function FooterNewsletter() {
  const t = useTranslations("newsletter");
  const tf = useTranslations("form.errors");
  const form = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });
  const error = form.formState.errors.email;

  async function onSubmit(values: NewsletterValues) {
    const result = await subscribeNewsletter(values);
    if (result.ok) {
      toast.success(t("success"), { description: t("successText") });
      form.reset();
    } else {
      toast.error(tf(result.error));
    }
  }

  return (
    <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="mt-5">
      <Field data-invalid={!!error} className="gap-2">
        <FieldLabel htmlFor="footer-newsletter-email" className="sr-only">
          {t("label")}
        </FieldLabel>
        {/* Côte à côte seulement si la colonne est assez large (container query), sinon empilés */}
        <div className="@container">
          <div className="flex flex-col gap-2.5 @[22rem]:flex-row">
            <Input
              {...form.register("email")}
              id="footer-newsletter-email"
              type="email"
              autoComplete="email"
              placeholder={t("placeholder")}
              aria-invalid={!!error}
              className="h-11 rounded-lg border-white/25 @[22rem]:flex-1 bg-white/5 px-4 text-base text-white placeholder:text-white/55 focus-visible:border-white/60 focus-visible:ring-white/20 md:text-[15px] dark:bg-white/5"
            />
            <Button
              type="submit"
              variant="inverse"
              disabled={form.formState.isSubmitting}
              className="h-11 rounded-lg px-5 font-semibold"
            >
              {form.formState.isSubmitting && (
                <Loader2 className="animate-spin" />
              )}
              {t("submit")}
            </Button>
          </div>
        </div>
        {error?.message && (
          <FieldError
            errors={[{ message: tf(error.message) }]}
            className="text-red-300"
          />
        )}
      </Field>
    </form>
  );
}
