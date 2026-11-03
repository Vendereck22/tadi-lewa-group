import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { QuickContactForm } from "@/components/sections/quick-contact-form";
import { IconCircle } from "@/components/shared/icon-circle";
import { InlineLink } from "@/components/shared/inline-link";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";
import { contactInfo, telHref } from "@/lib/data/site";

export function ContactSection() {
  return (
    <section className="container-site grid gap-12 pb-16 md:pb-24 lg:grid-cols-2 lg:gap-12">
      <div>
        <SectionHeader
          eyebrow="Contacts"
          title="Venez nous rencontrer"
          description="Ensemble, construisons un avenir meilleur à travers l'innovation et le partenariat durable."
        />

        <ul className="mt-8 space-y-6">
          <li className="flex gap-4">
            <IconCircle icon={MapPin} size="lg" />
            <div>
              <p className="font-semibold text-brand">Adresse</p>
              <address className="mt-0.5 not-italic">
                {contactInfo.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <IconCircle icon={Mail} size="lg" />
            <div>
              <p className="font-semibold text-brand">Email</p>
              <InlineLink href={`mailto:${contactInfo.email}`} className="mt-0.5 break-all">
                {contactInfo.email}
              </InlineLink>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <IconCircle icon={Phone} size="lg" />
            <div>
              <p className="font-semibold text-brand">Téléphone</p>
              <p className="mt-0.5">
                {contactInfo.phones.map((phone, i) => (
                  <span key={phone}>
                    {i > 0 && <span aria-hidden="true"> · </span>}
                    <InlineLink href={telHref(phone)} className="inline whitespace-nowrap">
                      {phone}
                    </InlineLink>
                  </span>
                ))}
              </p>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <IconCircle icon={Clock} size="lg" />
            <div>
              <p className="font-semibold text-brand">Horaires</p>
              <p className="mt-0.5">{contactInfo.hours}</p>
            </div>
          </li>
        </ul>
      </div>

      <Card className="gap-0 rounded-3xl p-6 shadow-[0_14px_40px_rgba(10,42,102,0.08)] md:p-10">
        <h3 className="mb-6 text-2xl font-bold">Envoyez-nous un message</h3>
        <QuickContactForm />
      </Card>
    </section>
  );
}
