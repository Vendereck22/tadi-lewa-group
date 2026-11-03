import { ArrowRight, MessageCircle } from "lucide-react";
import { FacebookIcon } from "@/components/shared/brand-icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { contactInfo, mapLinks, socialLinks, whatsappHref } from "@/lib/data/site";

// Colonne de droite de la page Contact : carte et itinéraire, puis WhatsApp et Facebook
export function ContactAside() {
  return (
    <div className="flex flex-col gap-6">
      <Card className="gap-0 overflow-hidden rounded-3xl bg-accent py-0 shadow-none">
        <iframe
          src={mapLinks.embed}
          title="Carte : TADI LEWA GROUP SARLU, 43 Bis, Avenue Colonel Mpia, Kinshasa"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="aspect-[4/3] w-full border-0"
        />
        <div className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <address className="text-sm font-medium not-italic">
            {contactInfo.addressLines.join(", ")}
          </address>
          <Button asChild className="shrink-0 font-semibold">
            <a href={mapLinks.directions} target="_blank" rel="noopener noreferrer">
              Itinéraire
              <ArrowRight />
              <span className="sr-only"> (Google Maps, nouvel onglet)</span>
            </a>
          </Button>
        </div>
      </Card>

      <Card className="gap-0 rounded-3xl border-primary bg-primary p-7 text-primary-foreground shadow-none">
        <h2 className="text-xl font-bold">Écrivez-nous directement</h2>
        <p className="mt-2 text-primary-foreground/80">
          Pour une réponse rapide, contactez-nous sur WhatsApp ou suivez nos actualités.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button asChild variant="inverse" className="h-11 px-5 font-semibold">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle />
              WhatsApp
              <span className="sr-only"> (nouvel onglet)</span>
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-11 border-[1.5px] border-white/70 bg-transparent px-5 font-semibold text-white shadow-none hover:bg-white/10 hover:text-white"
          >
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
              Facebook
              <span className="sr-only"> (nouvel onglet)</span>
            </a>
          </Button>
        </div>
      </Card>
    </div>
  );
}
