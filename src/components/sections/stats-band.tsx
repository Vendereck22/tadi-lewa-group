import { useTranslations } from "next-intl";
import { CountUp } from "@/components/shared/count-up";
import { stats } from "@/lib/data/stats";

// Bandeau des chiffres clés : libellé avec puce, puis grand nombre animé
export function StatsBand() {
  const t = useTranslations("statsSection");

  return (
    <section aria-label={t("label")} className="container-site pb-16 md:pb-24">
      <dl className="grid grid-cols-2 gap-x-6 gap-y-10 rounded-[30px] bg-primary px-6 py-12 text-primary-foreground md:px-12 md:py-16 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={stat.id} className="flex flex-col items-center text-center">
            <dt className="text-xs font-bold tracking-[0.08em] text-balance text-primary-foreground/75 uppercase md:text-sm">
              {/* Puce jaune, clin d'œil au drapeau de la RDC (reste en début de ligne si le libellé passe sur deux lignes) */}
              <span aria-hidden="true" className="mr-2 inline-block size-2 rounded-full bg-[#f7d618] align-middle" />
              {t(`items.${stat.id}`)}
            </dt>
            <dd className="mt-3 font-heading text-5xl leading-none font-extrabold tracking-tight md:text-6xl">
              {/* Les compteurs démarrent l'un après l'autre */}
              <CountUp value={stat.value} delay={index * 150} />
              {stat.suffix && (
                <span className="ml-1 align-top text-3xl md:text-4xl">{stat.suffix}</span>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
