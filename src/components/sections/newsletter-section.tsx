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

// Bloc « Ne manquez aucune actualité » : abonnement par email
export function NewsletterSection() {
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
    <section className="container-site pb-16 md:pb-24">
      <div className="flex flex-col gap-8 rounded-[28px] border bg-muted px-6 py-10 md:px-12 md:py-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-2xl font-extrabold md:text-3xl">{t("title")}</h2>
          <p className="mt-3 text-muted-foreground">{t("text")}</p>
        </div>

        <form
          noValidate
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full lg:max-w-md"
        >
          <Field data-invalid={!!error} className="gap-2">
            <FieldLabel htmlFor="newsletter-email" className="sr-only">
              {t("label")}
            </FieldLabel>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Input
                {...form.register("email")}
                id="newsletter-email"
                type="email"
                autoComplete="email"
                placeholder={t("placeholder")}
                aria-invalid={!!error}
                className="h-12 flex-1 rounded-full bg-background px-5 text-base text-foreground md:text-[15px]"
              />
              <Button
                type="submit"
                size="xl"
                disabled={form.formState.isSubmitting}
                className="font-semibold"
              >
                {form.formState.isSubmitting && <Loader2 className="animate-spin" />}
                {t("submit")}
              </Button>
            </div>
            {error?.message && (
              <FieldError errors={[{ message: tf(error.message) }]} className="pl-5" />
            )}
          </Field>
        </form>
      </div>
    </section>
  );
}
