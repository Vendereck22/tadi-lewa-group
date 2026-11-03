import type { PhotoKey } from "@/lib/data/images";
import { socialLinks } from "@/lib/data/site";

// Libellés traduits : clé « news.categories.<catégorie> »
export const newsCategories = ["evenement", "formation", "projet-a-venir", "archives"] as const;

export type NewsCategory = (typeof newsCategories)[number];

// Titre et résumé traduits : clé « news.items.<id> »
export type NewsItem = {
  id: string;
  /** Date ISO (AAAA-MM-JJ), ou null si elle n'est pas encore connue */
  date: string | null;
  category: NewsCategory;
  image: PhotoKey;
  /** Lien vers la publication Facebook (par défaut : la page Facebook) */
  facebookUrl: string;
  featured?: boolean;
};

export const news: NewsItem[] = [
  {
    id: "presentation-equipe",
    date: "2026-01-27",
    category: "evenement",
    image: "newsTeam",
    facebookUrl: socialLinks.facebook,
    featured: true,
  },
  {
    id: "made-in-congo-2",
    date: "2026-01-16",
    category: "evenement",
    image: "newsFair",
    facebookUrl: socialLinks.facebook,
  },
  {
    id: "preparation-entrepreneurs",
    date: "2026-01-26",
    category: "formation",
    image: "newsTraining",
    facebookUrl: socialLinks.facebook,
  },
  {
    id: "intervenants",
    date: "2026-01-27",
    category: "evenement",
    image: "newsSpeakers",
    facebookUrl: socialLinks.facebook,
  },
  {
    id: "foire-conference",
    date: "2026-01-27",
    category: "evenement",
    image: "newsConference",
    facebookUrl: socialLinks.facebook,
  },
  {
    id: "merci-equipe",
    date: "2026-01-27",
    category: "archives",
    image: "newsArchives",
    facebookUrl: socialLinks.facebook,
  },
  {
    id: "prochain-projet",
    date: null,
    category: "projet-a-venir",
    image: "newsUpcoming",
    facebookUrl: socialLinks.facebook,
  },
];

// Date courte dans la langue de la page (« 27 janv. 2026 » / « Jan 27, 2026 »)
export function formatShortDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
