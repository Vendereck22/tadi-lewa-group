// Partenaires de TADI LEWA GROUP affichés sur l'accueil.
// Logos d'origine dans public/Images/Partenaires ; versions web (recadrées, WebP) dans le
// sous-dossier « web ». Pour ajouter un partenaire : déposer son logo dans « web » puis l'ajouter ici.
export type Partner = {
  name: string;
  logo: string;
  /** Dimensions du fichier web, pour garder les proportions */
  width: number;
  height: number;
  /** Couleur de fond du logo (tuile assortie) ; blanc par défaut */
  background?: string;
  /** Logo réduit à un symbole : le nom est écrit à côté, dans cette couleur */
  nameColor?: string;
};

const logo = (slug: string) => `/Images/Partenaires/web/${slug}.webp`;

export const partners: Partner[] = [
  { name: "Univers du Crochet", logo: logo("univers-du-crochet"), width: 480, height: 174 },
  { name: "iRepair NextGen Tech", logo: logo("irepair"), width: 480, height: 227 },
  { name: "BGFI Bank", logo: logo("bgfi-bank"), width: 334, height: 240 },
  { name: "Vodacom", logo: logo("vodacom"), width: 381, height: 133 },
  { name: "Centre Hospitalier Initiative Plus", logo: logo("chip"), width: 480, height: 171 },
  { name: "Centre Hospitalier Universitaire du Cinquantenaire", logo: logo("chu-cinquantenaire"), width: 248, height: 240 },
  { name: "Secours Money", logo: logo("secours-money"), width: 403, height: 240 },
  { name: "MCE Centre de carrière", logo: logo("mce"), width: 480, height: 190 },
  { name: "OCPT", logo: logo("ocpt"), width: 429, height: 240, background: "#010101" },
  { name: "Innovo Care", logo: logo("innovo-care"), width: 455, height: 240 },
  { name: "Emosp", logo: logo("emosp"), width: 298, height: 240 },
  { name: "Marie Claire Mikobi Services", logo: logo("marie-claire-mikobi"), width: 480, height: 239 },
  { name: "Horizon Print", logo: logo("horizon-print"), width: 480, height: 202, background: "#f7f7f7" },
  { name: "Panda Design", logo: logo("panda-design"), width: 326, height: 240, background: "#e8e4e5" },
  { name: "Imany Juicy", logo: logo("imany-juicy"), width: 300, height: 240 },
  { name: "MK Cocktail", logo: logo("mk-cocktail"), width: 240, height: 240, background: "#000000" },
  { name: "Yumi", logo: logo("yumi"), width: 394, height: 240, background: "#f9a94a" },
  { name: "Luxury Oil by Tshupa", logo: logo("luxury-oil"), width: 241, height: 240 },
  { name: "A&E Allure Élégance & Glow", logo: logo("allure-elegance"), width: 242, height: 240, background: "#010101" },
  { name: "Gemme", logo: logo("gemme"), width: 440, height: 240 },
  { name: "Madone", logo: logo("madone"), width: 317, height: 240, background: "#000000" },
  { name: "Lou Pearls", logo: logo("lou-pearls"), width: 240, height: 240 },
  { name: "KB Shopping", logo: logo("kb-shopping"), width: 242, height: 240, background: "#e1e1e1" },
  { name: "Fluxion", logo: logo("fluxion"), width: 386, height: 240, nameColor: "#8f008b" },
];
