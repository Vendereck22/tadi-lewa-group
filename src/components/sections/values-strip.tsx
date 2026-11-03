import { Globe, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { DividedRow } from "@/components/shared/divided-row";
import { ValueItem } from "@/components/shared/value-item";

const values = [
  { icon: TrendingUp, title: "Innovation", subtitle: "au service du progrès" },
  { icon: Users, title: "Partenariat", subtitle: "pour un impact durable" },
  { icon: ShieldCheck, title: "Engagement", subtitle: "pour la société" },
  { icon: Globe, title: "Développement", subtitle: "pour un Congo prospère" },
];

export function ValuesStrip() {
  return (
    // Chevauche le bas du Hero (image de fond) pour faire la transition avec la suite
    <section aria-label="Nos valeurs" className="container-site relative z-10 -mt-14 md:-mt-16">
      <div className="rounded-3xl shadow-[0_14px_40px_rgba(10,42,102,0.08)]">
        <DividedRow
          items={values.map((value) => ({ key: value.title, content: <ValueItem {...value} /> }))}
        />
      </div>
    </section>
  );
}
