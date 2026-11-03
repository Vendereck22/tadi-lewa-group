import { SectionHeader } from "@/components/shared/section-header";
import { ServiceCard } from "@/components/shared/service-card";
import { services } from "@/lib/data/services";

export function ServicesGrid() {
  return (
    <section className="container-site py-16 md:py-24">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <SectionHeader eyebrow="Nos services" title="Des solutions pour faire grandir vos projets" />
        <p className="max-w-md text-muted-foreground lg:pb-2">
          Conseil, formation, appui et mise en relation : nous intervenons à chaque étape de votre
          parcours entrepreneurial.
        </p>
      </div>

      {/* Sur tablette (2 colonnes), la 3e carte prend toute la largeur */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:[&>*:last-child:nth-child(odd)]:col-span-2 md:mt-12 md:gap-6 lg:grid-cols-3 lg:[&>*:last-child:nth-child(odd)]:col-span-1">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
