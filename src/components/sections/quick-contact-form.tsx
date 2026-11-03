"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2 } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
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
  objet: contactSubjects[0],
  message: "",
};

// Texte toujours en bleu marine : seuls la bordure, le libellé et le message passent en rouge
const inputClass = "h-12 rounded-md bg-background px-4 text-base text-foreground md:text-[15px]";

// Formulaire court de l'accueil (nom, téléphone, email, objet, message)
export function QuickContactForm() {
  const form = useForm<QuickContactValues>({
    resolver: zodResolver(quickContactSchema),
    defaultValues,
  });

  async function onSubmit(values: QuickContactValues) {
    const result = await sendQuickContact(values);
    if (result.ok) {
      toast.success("Merci, votre message est envoyé", {
        description: "Notre équipe vous répond au plus vite.",
      });
      form.reset(defaultValues);
    } else {
      toast.error(result.error);
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
                  Nom complet
                </FieldLabel>
                <Input
                  {...field}
                  id="quick-nom"
                  autoComplete="name"
                  placeholder="Votre nom"
                  aria-invalid={fieldState.invalid}
                  className={inputClass}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name="telephone"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-2">
                <FieldLabel htmlFor="quick-telephone" className="font-semibold">
                  Téléphone
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
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
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
                Email
              </FieldLabel>
              <Input
                {...field}
                id="quick-email"
                type="email"
                autoComplete="email"
                placeholder="vous@exemple.com"
                aria-invalid={fieldState.invalid}
                className={inputClass}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="objet"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-2">
              <FieldLabel htmlFor="quick-objet" className="font-semibold">
                Objet
              </FieldLabel>
              <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  id="quick-objet"
                  aria-invalid={fieldState.invalid}
                  className={`w-full data-[size=default]:h-12 ${inputClass}`}
                >
                  <SelectValue placeholder="Choisissez un objet" />
                </SelectTrigger>
                <SelectContent>
                  {contactSubjects.map((subject) => (
                    <SelectItem key={subject} value={subject}>
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-2">
              <FieldLabel htmlFor="quick-message" className="font-semibold">
                Message
              </FieldLabel>
              <Textarea
                {...field}
                id="quick-message"
                placeholder="Parlez-nous de votre projet..."
                aria-invalid={fieldState.invalid}
                className="min-h-32 rounded-md bg-background px-4 py-3 text-base text-foreground md:text-[15px]"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
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
            Envoi en cours…
          </>
        ) : (
          <>
            Envoyer le message
            <ArrowRight />
          </>
        )}
      </Button>
    </form>
  );
}
