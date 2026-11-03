import { Fragment } from "react";
import { Separator } from "@/components/ui/separator";

type Props = {
  items: { key: string; content: React.ReactNode }[];
  label?: string;
};

// Bande de piliers séparés par des Separator : verticaux sur ordinateur, horizontaux sur mobile
export function DividedRow({ items, label }: Props) {
  return (
    <div
      role="list"
      aria-label={label}
      className="flex flex-col overflow-hidden rounded-3xl border bg-card lg:flex-row"
    >
      {items.map((item, i) => (
        <Fragment key={item.key}>
          {i > 0 && (
            <>
              <Separator className="lg:hidden" />
              <Separator
                orientation="vertical"
                className="hidden self-stretch data-[orientation=vertical]:h-auto lg:block"
              />
            </>
          )}
          <div role="listitem" className="flex-1 px-6 py-6 md:px-7 md:py-7">
            {item.content}
          </div>
        </Fragment>
      ))}
    </div>
  );
}
