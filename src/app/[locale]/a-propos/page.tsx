import type { Metadata } from "next";
import { Send } from "lucide-react";
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

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez qui nous sommes, ce qui nous anime et l'équipe qui porte chaque jour la vision de TADI LEWA GROUP SARLU.",
};

export default function AProposPage() {
  return (
    <main>
      <PageHeader
        crumb="À propos"
        title={
          <>
            Bâtir ensemble un avenir{" "}
            <span className="text-brand">entrepreneurial et prospère</span>
          </>
        }
        description="Découvrez qui nous sommes, ce qui nous anime et l'équipe qui porte chaque jour la vision de TADI LEWA GROUP SARLU."
        image={photos.aboutHeader}
      />
      <AboutIntro />
      <PurposeSection />
      <ValuesCards />
      {/* L'équipe (ancienne page /equipe) : lien « Équipe » de la navbar → /a-propos#equipe */}
      <div id="equipe" className="scroll-mt-20 border-t">
        <FounderMessage />
        <MembersSection />
        <TeamInAction />
        <CtaBand
          title={"Envie de rejoindre l'équipe ?"}
          description="Stages, bénévolat ou collaborations : envoyez-nous votre candidature et parlez-nous de votre motivation."
          ctaLabel="Envoyer ma candidature"
          ctaHref={`mailto:${contactInfo.email}?subject=${encodeURIComponent("Candidature – TADI LEWA GROUP")}`}
          ctaIcon={Send}
          secondary={{ label: "Nous contacter", href: "/contact" }}
        />
      </div>
      <HistorySection />
      <CtaBand
        title="Rejoignez l'aventure TADI LEWA"
        description="Entrepreneur, entreprise ou partenaire : construisons ensemble les réussites de demain."
      />
    </main>
  );
}
