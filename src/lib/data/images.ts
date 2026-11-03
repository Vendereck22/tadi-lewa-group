// Photos du site : Unsplash, licence gratuite (usage commercial autorisé, crédit facultatif).
// Images d'illustration en attendant les vraies photos de TADI LEWA GROUP : il suffit de remplacer
// `src` par un chemin local (ex. "/images/siege.webp") pour changer une photo partout.

// Le texte alternatif de chaque photo est traduit : clé « images.<nom de la photo> »
export type SitePhoto = {
  src: string;
  /** Photographe Unsplash */
  author: string;
};

// Source en haute définition (assez large pour les écrans Retina) : l'optimiseur de Next
// la redimensionne ensuite à la taille réellement affichée et la sert en AVIF/WebP
function unsplash(id: string, width = 2400) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=90`;
}

export const photos = {
  // Accueil
  hero: {
    src: unsplash("photo-1655720357872-ce227e4164ba", 3200),
    author: "Iwaria Inc.",
  },
  vision: {
    src: unsplash("photo-1621831337128-35676ca30868"),
    author: "Kenrick Baksh",
  },
  teamEvent: {
    src: unsplash("photo-1644174547761-de211415598e"),
    author: "Andrea Qoqonga",
  },
  teamSpeaker: {
    src: unsplash("photo-1679579664878-2c025e3f87b0", 1600),
    author: "Jametlene Reskp",
  },
  teamPresentation: {
    src: unsplash("photo-1715960350190-2ed0a812962d", 1600),
    author: "Jametlene Reskp",
  },

  // À propos
  aboutHeader: {
    src: unsplash("photo-1739302750702-e26a61113758"),
    author: "Ninthgrid",
  },
  aboutMain: {
    src: unsplash("photo-1573164574397-dd250bc8a598", 1600),
    author: "Christina @ wocintechchat.com",
  },
  aboutSecondary: {
    src: unsplash("photo-1573164574511-73c773193279", 1600),
    author: "Christina @ wocintechchat.com",
  },

  // Services
  servicesHeader: {
    src: unsplash("photo-1573164574572-cb89e39749b4"),
    author: "Christina @ wocintechchat.com",
  },
  serviceEntrepreneurs: {
    src: unsplash("photo-1657449036184-4fb912035102", 1600),
    author: "Francis Odeyemi",
  },
  serviceEntreprises: {
    src: unsplash("photo-1653566031486-dc4ead13a35d", 1600),
    author: "UK Black Tech",
  },
  servicePartenariats: {
    src: unsplash("photo-1521791136064-7986c2920216", 1600),
    author: "Cytonn Photography",
  },

  // Contact
  contactHeader: {
    src: unsplash("photo-1686771416282-3888ddaf249b"),
    author: "Mina Rad",
  },

  // Actualités (et galerie « L'équipe en action »)
  newsTeam: {
    src: unsplash("photo-1739298061757-7a3339cee982"),
    author: "Ninthgrid",
  },
  newsFair: {
    src: unsplash("photo-1737649507334-92c9fa4beb7c", 1600),
    author: "Eyo Archibong",
  },
  newsTraining: {
    src: unsplash("photo-1694286067026-a8aa654481f7", 1600),
    author: "Michael Ali",
  },
  newsSpeakers: {
    src: unsplash("photo-1778877032995-4ab6cd8fe106", 1600),
    author: "Ufoma Ojo",
  },
  newsConference: {
    src: unsplash("photo-1778876091112-f7e985acdb01", 1600),
    author: "Ufoma Ojo",
  },
  newsArchives: {
    src: unsplash("photo-1761666519915-857c3656b856", 1600),
    author: "Random Institute",
  },
  newsUpcoming: {
    src: unsplash("photo-1532622785990-d2c36a76f5a6", 1600),
    author: "Kaleidico",
  },
} satisfies Record<string, SitePhoto>;

export type PhotoKey = keyof typeof photos;
