// Galerie « Nos entrepreneurs et leurs produits » : exposants de la foire Made in Congo.
// Titre, description et texte alternatif traduits : « entrepreneurs.items.<id> ».
// `brand` : nom de la marque, seulement quand il est lisible sur la photo (pancarte du stand).
export const entrepreneurSectors = ["alimentation", "beaute", "mode"] as const;

export type EntrepreneurSector = (typeof entrepreneurSectors)[number];

export type EntrepreneurProduct = {
  id: string;
  src: string;
  /** Dimensions d'origine, pour garder les proportions dans la mosaïque */
  width: number;
  height: number;
  sector: EntrepreneurSector;
  brand?: string;
};

export const entrepreneurProducts: EntrepreneurProduct[] = [
  { id: "liqueur", src: "/Images/entrepreneuriat/produits-locaux/produits-locaux-02.jpeg", width: 722, height: 1080, sector: "alimentation" },
  { id: "munkoyo", src: "/Images/entrepreneuriat/produits-locaux/produits-locaux-01.jpeg", width: 722, height: 1080, sector: "alimentation", brand: "Munkoyo" },
  { id: "tropikin", src: "/Images/entrepreneuriat/stands-exposants/stands-exposants-22.jpeg", width: 724, height: 1080, sector: "alimentation", brand: "Tropikin" },
  { id: "mkCocktail", src: "/Images/entrepreneuriat/produits-locaux/produits-locaux-16.jpeg", width: 1080, height: 724, sector: "alimentation", brand: "MK Cocktail" },
  { id: "freewoman", src: "/Images/entrepreneuriat/stands-exposants/stands-exposants-25.jpeg", width: 724, height: 1080, sector: "beaute", brand: "Freewoman" },
  { id: "cosmetics", src: "/Images/entrepreneuriat/stands-exposants/stands-exposants-14.jpeg", width: 1080, height: 724, sector: "beaute" },
  { id: "skincare", src: "/Images/entrepreneuriat/produits-locaux/produits-locaux-23.jpeg", width: 1080, height: 718, sector: "beaute" },
  { id: "perfumes", src: "/Images/entrepreneuriat/produits-locaux/produits-locaux-03.jpeg", width: 1080, height: 724, sector: "beaute" },
  { id: "wax", src: "/Images/entrepreneuriat/stands-exposants/stands-exposants-39.jpeg", width: 1080, height: 718, sector: "mode" },
  { id: "kendoWax", src: "/Images/entrepreneuriat/produits-locaux/produits-locaux-21.jpeg", width: 718, height: 1080, sector: "mode", brand: "Kendo Wax" },
  { id: "bridal", src: "/Images/entrepreneuriat/produits-locaux/produits-locaux-13.jpeg", width: 1080, height: 720, sector: "mode" },
  { id: "jewellery", src: "/Images/entrepreneuriat/produits-locaux/produits-locaux-17.jpeg", width: 1080, height: 724, sector: "mode" },
  { id: "shoes", src: "/Images/entrepreneuriat/produits-locaux/produits-locaux-11.jpeg", width: 1080, height: 720, sector: "mode" },
  { id: "tshirts", src: "/Images/merchandising/merchandising-08.jpeg", width: 1080, height: 718, sector: "mode" },
];
