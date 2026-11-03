import { Layers, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";

const values = [
  {
    icon: TrendingUp,
    title: "Innovation",
    text: "Nous encourageons les idées nouvelles et les solutions adaptées aux réalités locales.",
  },
  {
    icon: Users,
    title: "Partenariat",
    text: "Nous croyons que les grandes réussites se construisent ensemble, dans la confiance.",
  },
  {
    icon: ShieldCheck,
    title: "Engagement",
    text: "Nous tenons nos promesses et restons aux côtés de nos entrepreneurs dans la durée.",
  },
  {
    icon: Layers,
    title: "Impact durable",
    text: "Chaque projet accompagné doit créer de la valeur pour la société et pour le pays.",
  },
];

export function ValuesCards() {
  return (
    <section className="container-site py-16 md:py-24">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <SectionHeader eyebrow="Nos valeurs" title="Ce qui guide chacune de nos actions" />
        <p className="max-w-md text-muted-foreground lg:pb-2">
          Quatre engagements que nous partageons avec nos entrepreneurs, nos partenaires et nos
          équipes.
        </p>
      </div>

      <ol className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 md:gap-6 lg:grid-cols-4">
        {values.map(({ icon: Icon, title, text }, i) => (
          <li key={title}>
            <Card className="h-full gap-0 rounded-3xl p-7 shadow-none md:p-8">
              <span className="font-heading text-sm font-bold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Icon aria-hidden="true" className="mt-4 size-8 text-primary" strokeWidth={1.75} />
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-muted-foreground">{text}</p>
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
}
