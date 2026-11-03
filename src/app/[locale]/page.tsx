import { ContactSection } from "@/components/sections/contact-section";
import { ExploreGrid } from "@/components/sections/explore-grid";
import { Hero } from "@/components/sections/hero";
import { NewsSection } from "@/components/sections/news-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { TeamPreview } from "@/components/sections/team-preview";
import { ValuesStrip } from "@/components/sections/values-strip";
import { VisionSection } from "@/components/sections/vision-section";
import { CtaBand } from "@/components/shared/cta-band";

export default function Home() {
  return (
    <main>
      <Hero />
      <ValuesStrip />
      <ServicesGrid />
      <VisionSection />
      <ExploreGrid />
      <TeamPreview />
      <NewsSection />
      <CtaBand
        title={
          <>
            Vous avez un projet{"\u00a0"}? <span className="whitespace-nowrap">Parlons-en.</span>
          </>
        }
        description="Prenez rendez-vous avec notre équipe et bâtissons ensemble un avenir entrepreneurial prospère."
      />
      <ContactSection />
    </main>
  );
}
