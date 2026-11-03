import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  className?: string;
};

// Pilier de valeur : icône, titre, sous-titre
export function ValueItem({ icon: Icon, title, subtitle, className }: Props) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Icon aria-hidden="true" className="size-7 shrink-0 text-brand" strokeWidth={2} />
      <div>
        <p className="font-heading text-base font-bold md:text-lg">{title}</p>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
}
