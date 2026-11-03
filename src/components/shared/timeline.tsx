import { Separator } from "@/components/ui/separator";

export type TimelineItem = {
  /** Libellé affiché (« 16 janv. 2026 », « À venir »…) */
  label: string;
  /** Date ISO pour <time>, si elle est connue */
  dateTime?: string;
  title: string;
  text: string;
};

// Frise verticale : un trait bleu clair, une pastille marine par étape
export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      <Separator
        orientation="vertical"
        className="absolute top-2 bottom-2 left-[6px] rounded-full bg-input data-[orientation=vertical]:h-auto data-[orientation=vertical]:w-[3px]"
      />
      <ol className="space-y-10">
        {items.map((item) => (
          <li key={item.title} className="relative pl-10 md:pl-12">
            <span
              aria-hidden="true"
              className="absolute top-1 left-0 size-[15px] rounded-full border-[3px] border-background bg-primary"
            />
            <p className="font-heading text-sm font-bold text-brand">
              {item.dateTime ? <time dateTime={item.dateTime}>{item.label}</time> : item.label}
            </p>
            <h3 className="mt-1.5 text-lg font-bold md:text-xl">{item.title}</h3>
            <p className="mt-2 max-w-2xl text-muted-foreground">{item.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
