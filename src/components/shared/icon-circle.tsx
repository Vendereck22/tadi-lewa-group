import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  icon: LucideIcon;
  variant?: "solid" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: "size-9 [&_svg]:size-4",
  md: "size-11 [&_svg]:size-5",
  lg: "size-14 [&_svg]:size-6",
};

// Pastille ronde bleu marine (ou bleu clair) qui contient une icône lucide
export function IconCircle({ icon: Icon, variant = "solid", size = "md", className }: Props) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full",
        variant === "solid" ? "bg-primary text-primary-foreground" : "bg-secondary text-primary",
        sizes[size],
        className,
      )}
    >
      {/* text-current : garde la couleur de la pastille même dans un DropdownMenu (qui grise les icônes) */}
      <Icon strokeWidth={2} className="text-current" />
    </span>
  );
}
