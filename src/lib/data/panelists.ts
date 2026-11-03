// Galerie « Nos panélistes » : intervenants qui ont répondu présent aux activités de TADI LEWA GROUP.
// Texte alternatif traduit : « panelists.items.<id> ». Ajoutez `name` (et `role`) pour afficher
// le nom de l'intervenant à la place du libellé générique.
export type Panelist = {
  id: string;
  src: string;
  /** Cadrage du portrait dans la photo d'origine (CSS object-position) */
  position: string;
  name?: string;
  role?: string;
};

const panel = (n: string) => `/Images/evenements/conferences-panels/conferences-panels-${n}.jpeg`;

export const panelists: Panelist[] = [
  { id: "p01", src: panel("03"), position: "38% 30%" },
  { id: "p02", src: panel("04"), position: "55% 30%" },
  { id: "p03", src: panel("11"), position: "52% 30%" },
  { id: "p04", src: panel("12"), position: "50% 30%" },
  { id: "p05", src: panel("17"), position: "50% 30%" },
  { id: "p06", src: panel("20"), position: "38% 30%" },
  { id: "p07", src: panel("29"), position: "50% 30%" },
  { id: "p08", src: panel("32"), position: "45% 25%" },
  { id: "p09", src: panel("08"), position: "80% 30%" },
  { id: "p10", src: panel("21"), position: "60% 30%" },
  { id: "p11", src: panel("30"), position: "42% 25%" },
  { id: "p12", src: panel("19"), position: "35% 45%" },
];
