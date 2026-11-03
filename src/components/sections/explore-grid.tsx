import Link from "next/link";
import { IconCircle } from "@/components/shared/icon-circle";
import { SectionHeader } from "@/components/shared/section-header";
import { Card } from "@/components/ui/card";
import { exploreLinks as tiles } from "@/lib/data/site";

export function ExploreGrid() {
  return (
    <section className="container-site py-16 md:py-24">
      <SectionHeader
        eyebrow="Explorer"
        title="Tout TADI LEWA GROUP en un coup d'œil"
        align="center"
        className="max-w-none"
      />

      <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mt-12 lg:grid-cols-6 lg:gap-5">
        {tiles.map((tile) => (
          <li key={tile.label}>
            <Card className="h-full rounded-3xl py-0 shadow-none transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-card has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50">
              <Link
                href={tile.href}
                className="flex h-full flex-col items-center justify-center gap-4 px-4 py-7 text-center text-base font-semibold outline-none md:py-8"
              >
                <IconCircle icon={tile.icon} variant="light" size="lg" />
                {tile.label}
              </Link>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
