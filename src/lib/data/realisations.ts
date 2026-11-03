// Galerie « Nos réalisations » de l'accueil : photos des activités déjà menées.
// Titre, catégorie et texte alternatif traduits : « realisations.items.<id> »
export type Realisation = {
  id: string;
  src: string;
};

export const realisations: Realisation[] = [
  { id: "awards", src: "/Images/evenements/remise-de-prix/remise-de-prix-21.jpeg" },
  { id: "panels", src: "/Images/evenements/conferences-panels/conferences-panels-13.jpeg" },
  { id: "fair", src: "/Images/entrepreneuriat/stands-exposants/stands-exposants-28.jpeg" },
  { id: "workshops", src: "/Images/formations-ateliers/formations-ateliers-07.jpeg" },
  { id: "culture", src: "/Images/evenements/ambiance-decor/ambiance-decor-03.jpeg" },
  { id: "audience", src: "/Images/hero-section/hero-section-03.jpeg" },
  { id: "innovation", src: "/Images/entrepreneuriat/stands-exposants/stands-exposants-18.jpeg" },
  { id: "localProducts", src: "/Images/entrepreneuriat/stands-exposants/stands-exposants-23.jpeg" },
  { id: "health", src: "/Images/entrepreneuriat/stands-exposants/stands-exposants-43.jpeg" },
  { id: "networking", src: "/Images/evenements/networking/networking-06.jpeg" },
  { id: "winners", src: "/Images/evenements/remise-de-prix/remise-de-prix-09.jpeg" },
];
