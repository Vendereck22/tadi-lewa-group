// Chiffres clés de l'accueil ; libellés traduits : « statsSection.items.<id> ».
// Les éditions sont un fait (MADE IN CONGO en est à sa 2e édition) ; les autres valeurs sont
// des estimations tirées des photos de la foire, à confirmer par l'entreprise.
export type Stat = {
  id: string;
  value: number;
  /** Affiché après le nombre, en plus petit (« + », « m² »…) */
  suffix?: string;
};

export const stats: Stat[] = [
  { id: "editions", value: 2 },
  { id: "exhibitors", value: 700, suffix: "+" },
  { id: "speakers", value: 150, suffix: "+" },
  { id: "participants", value: 2000, suffix: "+" },
];
