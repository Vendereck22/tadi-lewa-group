"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Controller, useForm, type FieldError as FormError } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { sendQuickContact } from "@/lib/actions/contact";
import {
  contactSubjects,
  quickContactSchema,
  type QuickContactValues,
} from "@/lib/schemas/contact";

const defaultValues: QuickContactValues = {
  nom: "",
  telephone: "",
  email: "",
  objet: "rendez-vous",
  message: "",
};

// Texte toujours en bleu marine : seuls la bordure, le libellé et le message passent en rouge
const inputClass = "h-12 rounded-md bg-background px-4 text-base text-foreground md:text-[15px]";

// Formulaire court de l'accueil (nom, téléphone, email, objet, message)
export function QuickContactForm() {
  const t = useTranslations("form");
  const tc = useTranslations("common");
  // Les messages de zod sont des clés : on les traduit à l'affichage
  const errors = (error?: FormError) =>
    error?.message ? [{ message: t(`errors.${error.message}`) }] : undefined;
  const form = useForm<QuickContactValues>({
    resolver: zodResolver(quickContactSchema),
    defaultValues,
  });

  async function onSubmit(values: QuickContactValues) {
    const result = await sendQuickContact(values);
    if (result.ok) {
      toast.success(t("messageSent"), { description: t("messageSentText") });
      form.reset(defaultValues);
    } else {
      toast.error(t(`errors.${result.error}`));
    }
  }

  return (
    <form noValidate onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup className="gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Controller
            name="nom"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-2">
                <FieldLabel htmlFor="quick-nom" className="font-semibold">
                  {t("name")}
                </FieldLabel>
                <Input
                  {...field}
                  id="quick-nom"
                  autoComplete="name"
                  placeholder={t("namePlaceholder")}
                  aria-invalid={fieldState.invalid}
                  className={inputClass}
                />
                {fieldState.invalid && <FieldError errors={errors(fieldState.error)} />}
              </Field>
            )}
          />
          <Controller
            name="telephone"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-2">
                <FieldLabel htmlFor="quick-telephone" className="font-semibold">
                  {t("phone")}
                </FieldLabel>
                <Input
                  {...field}
                  id="quick-telephone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+243 ..."
                  aria-invalid={fieldState.invalid}
                  className={inputClass}
                />
                {fieldState.invalid && <FieldError errors={errors(fieldState.error)} />}
              </Field>
            )}
          />
        </div>

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-2">
              <FieldLabel htmlFor="quick-email" className="font-semibold">
                {t("email")}
              </FieldLabel>
              <Input
                {...field}
                id="quick-email"
                type="email"
                autoComplete="email"
                placeholder={t("emailPlaceholder")}
                aria-invalid={fieldState.invalid}
                className={inputClass}
              />
              {fieldState.invalid && <FieldError errors={errors(fieldState.error)} />}
            </Field>
          )}
        />

        <Controller
          name="objet"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-2">
              <FieldLabel htmlFor="quick-objet" className="font-semibold">
                {t("subject")}
              </FieldLabel>
              <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  id="quick-objet"
                  aria-invalid={fieldState.invalid}
                  className={`w-full data-[size=default]:h-12 ${inputClass}`}
                >
                  <SelectValue placeholder={t("subjectPlaceholder")} />
                </SelectTrigger>
                <SelectContent>
                  {contactSubjects.map((subject) => (
                    <SelectItem key={subject} value={subject}>
                      {t(`subjects.${subject}`)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError errors={errors(fieldState.error)} />}
            </Field>
          )}
        />

        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-2">
              <FieldLabel htmlFor="quick-message" className="font-semibold">
                {t("message")}
              </FieldLabel>
              <Textarea
                {...field}
                id="quick-message"
                placeholder={t("messagePlaceholder")}
                aria-invalid={fieldState.invalid}
                className="min-h-32 rounded-md bg-background px-4 py-3 text-base text-foreground md:text-[15px]"
              />
              {fieldState.invalid && <FieldError errors={errors(fieldState.error)} />}
            </Field>
          )}
        />
      </FieldGroup>

      <Button
        type="submit"
        size="xl"
        disabled={form.formState.isSubmitting}
        className="mt-7 font-semibold"
      >
        {form.formState.isSubmitting ? (
          <>
            <Loader2 className="animate-spin" />
            {tc("sending")}
          </>
        ) : (
          <>
            {t("send")}
            <ArrowRight />
          </>
        )}
      </Button>
    </form>
  );
}
