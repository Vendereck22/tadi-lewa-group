import {
  Calendar,
  Folder,
  GraduationCap,
  Newspaper,
  Rocket,
  Users,
  type LucideIcon,
} from "lucide-react";

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
] as const;

// Les boutons « Prendre rendez-vous » mènent directement au formulaire de la page Contact
export const appointmentHref = "/contact#rendez-vous";

// Raccourcis « Explorer » : tuiles de l'accueil et menu déroulant de la navbar
// (les catégories ?categorie=… sont lues par les filtres de la page Actualités)
export const exploreLinks: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "/actualites", label: "Actualité", icon: Newspaper },
  { href: "/actualites?categorie=evenement", label: "Événements", icon: Calendar },
  { href: "/services#formation", label: "Formation", icon: GraduationCap },
  { href: "/actualites?categorie=projet-a-venir", label: "Projets à venir", icon: Rocket },
  { href: "/actualites?categorie=archives", label: "Archives", icon: Folder },
  { href: "/services#partenariats", label: "Partenariats", icon: Users },
];

export const contactInfo = {
  addressLines: ["43 Bis, Avenue Colonel Mpia", "Joli-Parc, C/Ngaliema – Kinshasa"],
  email: "tadilewagabriel@gmail.com",
  phones: ["+243 89 026 7003", "+243 968 602 293"],
  hours: "Du lundi au samedi, 07h00 – 18h00",
  hoursLines: ["Lundi – samedi : 07h00 – 18h00", "Dimanche : fermé"],
  // Versions courtes pour la barre d'infos du haut
  shortAddress: "43 Bis, Av. Colonel Mpia, Joli-Parc, Ngaliema – Kinshasa",
  shortHours: "Lun – Sam : 07h00 – 18h00",
};

const mapsQuery = encodeURIComponent(
  "43 Bis, Avenue Colonel Mpia, Joli-Parc, Ngaliema, Kinshasa, RDC",
);

export const mapLinks = {
  embed: `https://maps.google.com/maps?q=${mapsQuery}&z=15&output=embed`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`,
};

// À confirmer : on suppose que le numéro principal est joignable sur WhatsApp
export const whatsappHref = `https://wa.me/${contactInfo.phones[0].replace(/\D/g, "")}`;

export function telHref(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

// À remplacer par les vraies URL des pages TADI LEWA GROUP
export const socialLinks = {
  facebook: "https://www.facebook.com/",
  linkedin: "https://www.linkedin.com/",
  youtube: "https://www.youtube.com/",
};

export function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}
