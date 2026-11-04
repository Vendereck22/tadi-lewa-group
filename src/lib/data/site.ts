import {
  Calendar,
  Folder,
  GraduationCap,
  Newspaper,
  Plane,
  Rocket,
  Users,
  type LucideIcon,
} from "lucide-react";

// Libellés traduits dans messages/*.json (clé « nav.<key> »)
export const navLinks = [
  { href: "/", key: "home" },
  { href: "/a-propos", key: "about" },
  { href: "/services", key: "services" },
  { href: "/actualites", key: "news" },
  { href: "/contact", key: "contact" },
] as const;

// Les boutons « Prendre rendez-vous » mènent directement au formulaire de la page Contact
export const appointmentHref = "/contact#rendez-vous";

// Raccourcis « Explorer » : tuiles de l'accueil et menu déroulant de la navbar
// (les catégories ?categorie=… sont lues par les filtres de la page Actualités)
// (libellés traduits : clé « explore.items.<key> »)
export const exploreLinks: { href: string; key: string; icon: LucideIcon }[] = [
  { href: "/actualites", key: "news", icon: Newspaper },
  { href: "/actualites?categorie=evenement", key: "events", icon: Calendar },
  { href: "/services#formation", key: "training", icon: GraduationCap },
  { href: "/actualites?categorie=projet-a-venir", key: "upcoming", icon: Rocket },
  { href: "/actualites?categorie=archives", key: "archives", icon: Folder },
  { href: "/services#partenariats", key: "partnerships", icon: Users },
  { href: "/voyages", key: "travel", icon: Plane },
];

// Adresse et horaires (textes traduits) : clé « contactInfo » de messages/*.json
export const contactInfo = {
  email: "tadilewagabriel@gmail.com",
  phones: ["+243 89 026 7003", "+243 968 602 293"],
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
