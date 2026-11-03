import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** id du titre, pour une section reliée par aria-labelledby */
  titleId?: string;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  titleId,
  className,
}: Props) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className)}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand">{eyebrow}</p>
      )}
      <h2 id={titleId} className="text-3xl leading-tight font-extrabold md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && <p className="mt-4 text-muted-foreground">{description}</p>}
    </div>
  );
}
