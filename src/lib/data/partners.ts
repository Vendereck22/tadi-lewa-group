import {
  siAirtel,
  siApple,
  siCisco,
  siDell,
  siGoogle,
  siHp,
  siHuawei,
  siIntel,
  siMeta,
  siNvidia,
  siOrange,
  siPaypal,
  siSamsung,
  siShopify,
  siStripe,
  siZoom,
  type SimpleIcon,
} from "simple-icons";

// Logos partenaires affichés sur l'accueil.
// PROVISOIRE : grandes marques tech (icônes SVG simple-icons, licence CC0) en attendant les
// logos des vrais partenaires. Ces entreprises ne sont pas partenaires de TADI LEWA GROUP :
// remplacer cette liste avant la mise en ligne (ex. BGFI Bank, Securico, Panda Design…).
export type Partner = {
  name: string;
  /** Tracé SVG du logo, dans un carré de 24 × 24 */
  path: string;
  /** Couleur de la marque, révélée au survol */
  color: string;
  /**
   * Le logo contient déjà le nom : affiché seul, en plus grand.
   * "wide" pour un nom en ligne (Samsung…), "round" pour un badge rond (Dell)
   */
  logoOnly?: "wide" | "round";
};

// Logos qui sont déjà le nom de la marque
const logoOnly: Record<string, Partner["logoOnly"]> = {
  Samsung: "wide",
  Intel: "wide",
  Zoom: "wide",
  Cisco: "wide",
  Dell: "round",
};

// Les marques noires (Apple…) prennent la couleur du texte, pour rester visibles en mode nuit
function isNearBlack(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 40;
}

const fromIcon = (icon: SimpleIcon): Partner => ({
  name: icon.title,
  path: icon.path,
  color: isNearBlack(icon.hex) ? "var(--foreground)" : `#${icon.hex}`,
  logoOnly: logoOnly[icon.title],
});

export const partners: Partner[] = [
  siGoogle,
  siApple,
  siMeta,
  siNvidia,
  siSamsung,
  siIntel,
  siHuawei,
  siCisco,
  siDell,
  siHp,
  siZoom,
  siStripe,
  siPaypal,
  siShopify,
  siOrange,
  siAirtel,
].map(fromIcon);
