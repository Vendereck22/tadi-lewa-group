import type { Metadata } from "next";
import { AppointmentForm } from "@/components/sections/appointment-form";
import { ContactAside } from "@/components/sections/contact-aside";
import { ContactCards } from "@/components/sections/contact-cards";
import { PageHeader } from "@/components/shared/page-header";
import { photos } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Une question, un projet ou une envie de partenariat ? Prenez rendez-vous avec TADI LEWA GROUP SARLU à Kinshasa.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        crumb="Contact"
        title={
          <>
            Parlons de <span className="text-brand">votre projet</span>
          </>
        }
        description="Une question, un projet ou une envie de partenariat ? Notre équipe vous répond et vous reçoit du lundi au samedi."
        image={photos.contactHeader}
      />
      <ContactCards />
      <section className="container-site grid items-start gap-6 py-12 md:py-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        <AppointmentForm />
        <ContactAside />
      </section>
    </main>
  );
}
