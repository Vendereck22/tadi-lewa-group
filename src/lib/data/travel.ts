import { Briefcase, GraduationCap, MapPinned, type LucideIcon } from "lucide-react";

// Page Voyages : textes traduits sous « travelPage » dans messages/*.json

/** Les trois formules ; `id` sert aussi d'ancre (#tourisme, #affaires, #etudes) */
export const travelOffers: { id: string; icon: LucideIcon; image: string }[] = [
  { id: "tourisme", icon: MapPinned, image: "/Images/kinshasa-divers/kinshasa-divers-01.jpeg" },
  { id: "affaires", icon: Briefcase, image: "/Images/partenariats/partenariats-01.jpeg" },
  { id: "etudes", icon: GraduationCap, image: "/Images/formations-ateliers/formations-ateliers-03.jpeg" },
];

/** Atouts : « travelPage.why.items.<clé> » */
export const travelStrengths = ["tailored", "paperwork", "network", "support"];

/** Étapes : « travelPage.steps.items.<clé> » */
export const travelSteps = ["listen", "program", "formalities", "onSite"];

/** Galerie « En images » : texte alternatif et légende sous « travelPage.gallery.items.<id> » */
export const travelPhotos: { id: string; src: string; width: number; height: number }[] = [
  { id: "lake", src: "/Images/equipe-portraits/equipe-portraits-02.jpeg", width: 1080, height: 1080 },
  { id: "cathedral", src: "/Images/kinshasa-divers/kinshasa-divers-01.jpeg", width: 1920, height: 2560 },
  { id: "hotel", src: "/Images/equipe-portraits/equipe-portraits-03.jpeg", width: 1080, height: 1080 },
  { id: "lodge", src: "/Images/equipe-portraits/equipe-portraits-04.jpeg", width: 1080, height: 1080 },
  { id: "businessVisit", src: "/Images/partenariats/partenariats-02.jpeg", width: 1920, height: 2560 },
  { id: "transport", src: "/Images/kinshasa-divers/kinshasa-divers-02.jpeg", width: 1078, height: 720 },
];
