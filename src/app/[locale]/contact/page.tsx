import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";
import { AppointmentForm } from "@/components/sections/appointment-form";
import { ContactAside } from "@/components/sections/contact-aside";
import { ContactCards } from "@/components/sections/contact-cards";
import { PageHeader } from "@/components/shared/page-header";
import { photos } from "@/lib/data/images";

export async function generateMetadata({ params }: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contactPage.meta" });
  return { title: t("title"), description: t("description") };
}

export default function ContactPage({ params }: PageProps<"/[locale]/contact">) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("contactPage.header");
  const ti = useTranslations("images");

  return (
    <main>
      <PageHeader
        crumb={t("crumb")}
        title={
          <>
            {t("titleStart")} <span className="text-brand">{t("titleHighlight")}</span>
          </>
        }
        description={t("description")}
        image={{ src: photos.contactHeader.src, alt: ti("contactHeader") }}
      />
      <ContactCards />
      <section className="container-site grid items-start gap-6 py-12 md:py-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        <AppointmentForm />
        <ContactAside />
      </section>
    </main>
  );
}
