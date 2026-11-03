"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { MemberCard } from "@/components/shared/member-card";
import { SectionHeader } from "@/components/shared/section-header";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { teamMembers, teamPoles, type TeamPole } from "@/lib/data/team";

type Filter = TeamPole | "tous";

const filters: Filter[] = ["tous", ...teamPoles];

export function MembersSection() {
  const t = useTranslations("about.members");
  const tp = useTranslations("team.poles");
  const [filter, setFilter] = useState<Filter>("tous");
  const members = filter === "tous" ? teamMembers : teamMembers.filter((m) => m.pole === filter);

  return (
    <section className="border-y bg-muted py-16 md:py-24">
      <div className="container-site">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} />

        <ToggleGroup
          type="single"
          spacing={2}
          value={filter}
          // Un clic sur le filtre actif ne doit pas laisser la liste sans filtre
          onValueChange={(value) => value && setFilter(value as Filter)}
          aria-label={t("filterLabel")}
          className="mt-8 flex-wrap"
        >
          {filters.map((f) => (
            <ToggleGroupItem
              key={f}
              value={f}
              className="h-10 rounded-full border bg-card px-4 font-semibold text-foreground hover:bg-accent hover:text-foreground data-[state=on]:border-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
            >
              {f === "tous" ? t("all") : tp(f)}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>

        <ul aria-live="polite" className="mt-8 grid gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {members.map((member) => (
            <li key={member.id}>
              <MemberCard member={member} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
