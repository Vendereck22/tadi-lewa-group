// Galerie « Nos entrepreneurs et leurs produits » : exposants de la foire Made in Congo.
// Titre, description et texte alternatif traduits : « entrepreneurs.items.<id> ».
// `brand` : nom de la marque, seulement quand il est lisible sur la photo (pancarte du stand).
export const entrepreneurSectors = ["alimentation", "beaute", "mode"] as const;

export type EntrepreneurSector = (typeof entrepreneurSectors)[number];

export type EntrepreneurProduct = {
  id: string;
  src: string;
  /** Cadrage dans la carte (CSS object-position), pour garder le sujet visible */
  position: string;
  sector: EntrepreneurSector;
  brand?: string;
};

export const entrepreneurProducts: EntrepreneurProduct[] = [
  { id: "liqueur", src: "/Images/entrepreneuriat/produits-locaux/produits-locaux-02.jpeg", position: "50% 30%", sector: "alimentation" },
  { id: "munkoyo", src: "/Images/entrepreneuriat/produits-locaux/produits-locaux-01.jpeg", position: "45% 50%", sector: "alimentation", brand: "Munkoyo" },
  { id: "tropikin", src: "/Images/entrepreneuriat/stands-exposants/stands-exposants-22.jpeg", position: "50% 50%", sector: "alimentation", brand: "Tropikin" },
  { id: "mkCocktail", src: "/Images/entrepreneuriat/produits-locaux/produits-locaux-16.jpeg", position: "55% 50%", sector: "alimentation", brand: "MK Cocktail" },
  { id: "freewoman", src: "/Images/entrepreneuriat/stands-exposants/stands-exposants-25.jpeg", position: "50% 35%", sector: "beaute", brand: "Freewoman" },
  { id: "cosmetics", src: "/Images/entrepreneuriat/stands-exposants/stands-exposants-14.jpeg", position: "40% 50%", sector: "beaute" },
  { id: "skincare", src: "/Images/entrepreneuriat/produits-locaux/produits-locaux-23.jpeg", position: "50% 50%", sector: "beaute" },
  { id: "perfumes", src: "/Images/entrepreneuriat/produits-locaux/produits-locaux-03.jpeg", position: "40% 50%", sector: "beaute" },
  { id: "wax", src: "/Images/entrepreneuriat/stands-exposants/stands-exposants-39.jpeg", position: "50% 50%", sector: "mode" },
  { id: "kendoWax", src: "/Images/entrepreneuriat/produits-locaux/produits-locaux-21.jpeg", position: "50% 40%", sector: "mode", brand: "Kendo Wax" },
  { id: "bridal", src: "/Images/entrepreneuriat/produits-locaux/produits-locaux-13.jpeg", position: "35% 50%", sector: "mode" },
  { id: "jewellery", src: "/Images/entrepreneuriat/produits-locaux/produits-locaux-17.jpeg", position: "45% 50%", sector: "mode" },
];
