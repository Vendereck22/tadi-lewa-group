import type { Metadata } from "next";
import { Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";
import { AboutIntro } from "@/components/sections/about-intro";
import { FounderMessage } from "@/components/sections/founder-message";
import { HistorySection } from "@/components/sections/history-section";
import { MembersSection } from "@/components/sections/members-section";
import { PurposeSection } from "@/components/sections/purpose-section";
import { TeamInAction } from "@/components/sections/team-in-action";
import { ValuesCards } from "@/components/sections/values-cards";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHeader } from "@/components/shared/page-header";
import { photos } from "@/lib/data/images";
import { contactInfo } from "@/lib/data/site";

export async function generateMetadata({ params }: PageProps<"/[locale]/a-propos">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.meta" });
  return { title: t("title"), description: t("description") };
}

export default function AProposPage({ params }: PageProps<"/[locale]/a-propos">) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("about.header");
  const tCta = useTranslations("cta");
  const tc = useTranslations("common");
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
        image={{ src: photos.aboutHeader.src, alt: ti("aboutHeader") }}
      />
      <AboutIntro />
      <PurposeSection />
      <ValuesCards />
      {/* L'équipe (ancienne page /equipe) : lien « Rencontrer l'équipe » → /a-propos#equipe */}
      <div id="equipe" className="scroll-mt-20 border-t">
        <FounderMessage />
        <MembersSection />
        <TeamInAction />
        <CtaBand
          title={tCta("join.title")}
          description={tCta("join.description")}
          ctaLabel={tCta("join.cta")}
          ctaHref={`mailto:${contactInfo.email}?subject=${encodeURIComponent(tCta("join.subject"))}`}
          ctaIcon={Send}
          secondary={{ label: tc("contactUs"), href: "/contact" }}
        />
      </div>
      <HistorySection />
      <CtaBand title={tCta("about.title")} description={tCta("about.description")} />
    </main>
  );
}
