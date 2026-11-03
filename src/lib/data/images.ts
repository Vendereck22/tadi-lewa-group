// Photos du site : vraies photos de TADI LEWA GROUP, rangées par catégorie dans
// public/Images (hero-section, evenements, entrepreneuriat, formations-ateliers…).
// Changer `src` ici remplace la photo partout où elle apparaît.

// Le texte alternatif de chaque photo est traduit : clé « images.<nom de la photo> »
export type SitePhoto = {
  src: string;
};

export const photos = {
  // Accueil
  hero: { src: "/Images/hero-section/hero-section-02.jpeg" },
  vision: { src: "/Images/hero-section/hero-section-05.jpeg" },
  // Section « Notre équipe » : l'équipe d'organisation (les intervenants ont leur propre galerie)
  teamEvent: { src: "/Images/evenements/networking/networking-11.jpeg" },
  teamStand: { src: "/Images/entrepreneuriat/stands-exposants/stands-exposants-41.jpeg" },
  teamWelcome: { src: "/Images/evenements/networking/networking-16.jpeg" },

  // À propos
  aboutHeader: { src: "/Images/entrepreneuriat/stands-exposants/stands-exposants-19.jpeg" },
  aboutMain: { src: "/Images/formations-ateliers/formations-ateliers-06.jpeg" },
  aboutSecondary: { src: "/Images/formations-ateliers/formations-ateliers-02.jpeg" },

  // Services
  servicesHeader: { src: "/Images/formations-ateliers/formations-ateliers-05.jpeg" },
  serviceEntrepreneurs: { src: "/Images/entrepreneuriat/produits-locaux/produits-locaux-02.jpeg" },
  serviceEntreprises: { src: "/Images/formations-ateliers/formations-ateliers-04.jpeg" },
  servicePartenariats: { src: "/Images/partenariats/partenariats-01.jpeg" },

  // Contact
  contactHeader: { src: "/Images/merchandising/merchandising-09.jpeg" },

  // Actualités (et galerie « L'équipe en action »)
  newsTeam: { src: "/Images/evenements/remise-de-prix/remise-de-prix-01.jpeg" },
  newsMadeInCongo: { src: "/Images/evenements/ambiance-decor/ambiance-decor-07.jpeg" },
  newsFair: { src: "/Images/entrepreneuriat/stands-exposants/stands-exposants-32.jpeg" },
  newsTraining: { src: "/Images/formations-ateliers/formations-ateliers-01.jpeg" },
  newsSpeakers: { src: "/Images/evenements/conferences-panels/conferences-panels-30.jpeg" },
  newsConference: { src: "/Images/hero-section/hero-section-06.jpeg" },
  newsArchives: { src: "/Images/evenements/remise-de-prix/remise-de-prix-26.jpeg" },
  newsUpcoming: { src: "/Images/hero-section/hero-section-08.jpeg" },
} satisfies Record<string, SitePhoto>;

export type PhotoKey = keyof typeof photos;
