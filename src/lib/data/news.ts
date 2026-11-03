import { photos } from "@/lib/data/images";
import { socialLinks } from "@/lib/data/site";

export const newsCategories = {
  evenement: "Événement",
  formation: "Formation",
  "projet-a-venir": "Projet à venir",
  archives: "Archives",
} as const;

export type NewsCategory = keyof typeof newsCategories;

export type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  /** Date ISO (AAAA-MM-JJ), ou null si elle n'est pas encore connue */
  date: string | null;
  category: NewsCategory;
  image: string;
  imageAlt: string;
  /** Lien vers la publication Facebook (par défaut : la page Facebook) */
  facebookUrl: string;
  featured?: boolean;
};

export const news: NewsItem[] = [
  {
    id: "presentation-equipe",
    title: "Présentation de l'équipe",
    excerpt: "Une équipe dynamique et engagée pour porter plus loin la vision de TADI LEWA GROUP SARLU.",
    date: "2026-01-27",
    category: "evenement",
    image: photos.newsTeam.src,
    imageAlt: photos.newsTeam.alt,
    facebookUrl: socialLinks.facebook,
    featured: true,
  },
  {
    id: "made-in-congo-2",
    title: "MADE IN CONGO – 2e édition",
    excerpt: "La foire entrepreneuriale qui met en valeur le savoir-faire congolais.",
    date: "2026-01-16",
    category: "evenement",
    image: photos.newsFair.src,
    imageAlt: photos.newsFair.alt,
    facebookUrl: socialLinks.facebook,
  },
  {
    id: "preparation-entrepreneurs",
    title: "Préparation avec nos entrepreneurs",
    excerpt: "Séances de travail pour préparer les exposants à la foire.",
    date: "2026-01-26",
    category: "formation",
    image: photos.newsTraining.src,
    imageAlt: photos.newsTraining.alt,
    facebookUrl: socialLinks.facebook,
  },
  {
    id: "intervenants",
    title: "Nos intervenants",
    excerpt: "Des experts et personnalités engagés pour partager leur expérience.",
    date: "2026-01-27",
    category: "evenement",
    image: photos.newsSpeakers.src,
    imageAlt: photos.newsSpeakers.alt,
    facebookUrl: socialLinks.facebook,
  },
  {
    id: "foire-conference",
    title: "Foire entrepreneuriale & conférence : un succès collectif",
    excerpt: "Retour sur une journée riche en échanges, rencontres et opportunités.",
    date: "2026-01-27",
    category: "evenement",
    image: photos.newsConference.src,
    imageAlt: photos.newsConference.alt,
    facebookUrl: socialLinks.facebook,
  },
  {
    id: "merci-equipe",
    title: "Derrière chaque succès, une équipe extraordinaire",
    excerpt: "Merci à toute l'équipe qui a rendu ces événements possibles.",
    date: "2026-01-27",
    category: "archives",
    image: photos.newsArchives.src,
    imageAlt: photos.newsArchives.alt,
    facebookUrl: socialLinks.facebook,
  },
  {
    id: "prochain-projet",
    title: "[Titre du prochain projet]",
    excerpt: "[Présentez ici le prochain événement ou projet du groupe.]",
    date: null,
    category: "projet-a-venir",
    image: photos.newsUpcoming.src,
    imageAlt: photos.newsUpcoming.alt,
    facebookUrl: socialLinks.facebook,
  },
];

const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function formatNewsDate(date: string | null) {
  return date ? dateFormatter.format(new Date(`${date}T00:00:00Z`)) : "[Date]";
}
