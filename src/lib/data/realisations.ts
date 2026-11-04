// Galerie « Nos réalisations » de l'accueil : photos des activités déjà menées.
// Titre, catégorie et texte alternatif traduits : « realisations.items.<id> »
// 12 photos : la grille tombe juste en 2, 3 ou 4 colonnes.
export type Realisation = {
  id: string;
  src: string;
  /** Cadrage dans la carte (CSS object-position), pour garder le sujet visible */
  position: string;
};

export const realisations: Realisation[] = [
  { id: "awards", src: "/Images/evenements/remise-de-prix/remise-de-prix-21.jpeg", position: "55% 50%" },
  { id: "panels", src: "/Images/evenements/conferences-panels/conferences-panels-13.jpeg", position: "30% 50%" },
  { id: "fair", src: "/Images/entrepreneuriat/stands-exposants/stands-exposants-28.jpeg", position: "50% 50%" },
  { id: "workshops", src: "/Images/formations-ateliers/formations-ateliers-07.jpeg", position: "50% 50%" },
  { id: "culture", src: "/Images/evenements/ambiance-decor/ambiance-decor-03.jpeg", position: "45% 50%" },
  { id: "audience", src: "/Images/hero-section/hero-section-03.jpeg", position: "50% 50%" },
  { id: "innovation", src: "/Images/entrepreneuriat/stands-exposants/stands-exposants-18.jpeg", position: "60% 50%" },
  { id: "localProducts", src: "/Images/entrepreneuriat/stands-exposants/stands-exposants-23.jpeg", position: "50% 40%" },
  { id: "health", src: "/Images/entrepreneuriat/stands-exposants/stands-exposants-43.jpeg", position: "55% 50%" },
  { id: "networking", src: "/Images/evenements/networking/networking-06.jpeg", position: "50% 40%" },
  { id: "winners", src: "/Images/evenements/remise-de-prix/remise-de-prix-09.jpeg", position: "50% 50%" },
  { id: "exhibition", src: "/Images/entrepreneuriat/stands-exposants/stands-exposants-16.jpeg", position: "50% 50%" },
];
