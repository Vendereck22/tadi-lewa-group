"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CalendarDays, Loader2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { enUS, fr } from "react-day-picker/locale";
import { Controller, useForm, type FieldError as FormError } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { sendAppointment } from "@/lib/actions/contact";
import {
  contactProfiles,
  contactSchema,
  contactSubjects,
  type ContactValues,
} from "@/lib/schemas/contact";
import { cn } from "@/lib/utils";

const defaultValues: ContactValues = {
  profil: "entrepreneur",
  nom: "",
  telephone: "",
  email: "",
  date: undefined,
  objet: "accompagnement",
  message: "",
};

// Texte toujours en bleu marine : seuls la bordure, le libellé et le message passent en rouge
const inputClass = "h-12 rounded-md bg-background px-4 text-base text-foreground md:text-[15px]";

// Formulaire de rendez-vous de la page Contact, validé par zod
export function AppointmentForm() {
  const t = useTranslations("form");
  const tc = useTranslations("common");
  const tp = useTranslations("contactPage");
  const locale = useLocale();
  const dateFormatter = new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "fr-FR", {
    dateStyle: "full",
  });
  const [calendarOpen, setCalendarOpen] = useState(false);
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  const errors = (error?: FormError) =>
    error?.message ? [{ message: t(`errors.${error.message}`) }] : undefined;

  async function onSubmit(values: ContactValues) {
    const result = await sendAppointment(values);
    if (result.ok) {
      toast.success(t("requestSent"), { description: t("requestSentText") });
      form.reset(defaultValues);
    } else {
      toast.error(t(`errors.${result.error}`));
    }
  }

  return (
    <Card
      id="rendez-vous"
      className="scroll-mt-28 gap-0 rounded-3xl p-6 shadow-[0_14px_40px_rgba(10,42,102,0.08)] md:p-10"
    >
      <h2 className="text-2xl font-bold md:text-3xl">{tp("formTitle")}</h2>
      <p className="mt-2 text-muted-foreground">{tp("formIntro")}</p>

      <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="mt-7">
        <FieldGroup className="gap-5">
          <Controller
            name="profil"
            control={form.control}
            render={({ field }) => (
              <FieldSet className="gap-3">
                <FieldLegend variant="label" className="mb-0 font-semibold">
                  {t("profile")}
                </FieldLegend>
                <RadioGroup
                  name={field.name}
                  value={field.value}
                  onValueChange={field.onChange}
                  className="flex flex-wrap gap-2.5"
                >
                  {contactProfiles.map((value) => (
                    <FieldLabel
                      key={value}
                      htmlFor={`profil-${value}`}
                      className={cn(
                        "h-11 cursor-pointer items-center gap-2.5 rounded-full border bg-background px-4 font-medium",
                        field.value === value && "border-primary bg-secondary",
                      )}
                    >
                      <RadioGroupItem id={`profil-${value}`} value={value} />
                      {t(`profiles.${value}`)}
                    </FieldLabel>
                  ))}
                </RadioGroup>
              </FieldSet>
            )}
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <Controller
              name="nom"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-2">
                  <FieldLabel htmlFor="rdv-nom" className="font-semibold">
                    {t("name")}
                  </FieldLabel>
                  <Input
                    {...field}
                    id="rdv-nom"
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
                  <FieldLabel htmlFor="rdv-telephone" className="font-semibold">
                    {t("phone")}
                  </FieldLabel>
                  <Input
                    {...field}
                    id="rdv-telephone"
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
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-2">
                  <FieldLabel htmlFor="rdv-email" className="font-semibold">
                    {t("email")}
                  </FieldLabel>
                  <Input
                    {...field}
                    id="rdv-email"
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
              name="date"
              control={form.control}
              render={({ field }) => (
                <Field className="gap-2">
                  <FieldLabel htmlFor="rdv-date" className="font-semibold">
                    {t("date")}
                  </FieldLabel>
                  <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        id="rdv-date"
                        type="button"
                        variant="outline"
                        className={cn(
                          inputClass,
                          "w-full justify-between rounded-md border-input font-normal shadow-none hover:bg-background",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        <span className="truncate">
                          {field.value ? dateFormatter.format(field.value) : t("datePlaceholder")}
                        </span>
                        <CalendarDays aria-hidden="true" className="text-muted-foreground" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                      {/* Pas de date passée, ni le dimanche (fermé) */}
                      <Calendar
                        mode="single"
                        locale={locale === "en" ? enUS : fr}
                        selected={field.value}
                        onSelect={(date) => {
                          field.onChange(date);
                          setCalendarOpen(false);
                        }}
                        disabled={[{ before: new Date() }, { dayOfWeek: [0] }]}
                        autoFocus
                      />
                    </PopoverContent>
                  </Popover>
                </Field>
              )}
            />
          </div>

          <Controller
            name="objet"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-2">
                <FieldLabel htmlFor="rdv-objet" className="font-semibold">
                  {t("subject")}
                </FieldLabel>
                <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    id="rdv-objet"
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
                <FieldLabel htmlFor="rdv-message" className="font-semibold">
                  {t("message")}
                </FieldLabel>
                <Textarea
                  {...field}
                  id="rdv-message"
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
              {t("sendRequest")}
              <ArrowRight />
            </>
          )}
        </Button>
      </form>
    </Card>
  );
}
