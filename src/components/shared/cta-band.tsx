import Link from "next/link";
import { CalendarCheck, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { appointmentHref } from "@/lib/data/site";

type Action = { label: string; href: string };

type Props = {
  title: React.ReactNode;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaIcon?: LucideIcon;
  /** Second bouton, en contour blanc */
  secondary?: Action;
};

// Les liens mailto: ou tel: ne passent pas par le routeur Next
// (les props reçues de Button asChild — classes, data-slot… — sont transmises au lien)
function ActionLink({ href, ...props }: React.ComponentProps<"a"> & { href: string }) {
  return href.startsWith("/") ? <Link href={href} {...props} /> : <a href={href} {...props} />;
}

// Bandeau bleu marine d'appel à l'action (« Vous avez un projet ? Parlons-en. »…)
export function CtaBand({
  title,
  description,
  ctaLabel = "Prendre rendez-vous",
  ctaHref = appointmentHref,
  ctaIcon: CtaIcon = CalendarCheck,
  secondary,
}: Props) {
  return (
    <section className="container-site pb-16 md:pb-24">
      <div className="flex flex-col items-start gap-8 rounded-[30px] bg-primary px-7 py-10 text-primary-foreground md:flex-row md:items-center md:justify-between md:px-14 md:py-14">
        <div className="max-w-2xl">
          <h2 className="text-3xl leading-tight font-extrabold md:text-4xl">{title}</h2>
          <p className="mt-3 text-primary-foreground/80 md:text-lg">{description}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Button asChild variant="inverse" size="xl" className="font-semibold">
            <ActionLink href={ctaHref}>
              <CtaIcon />
              {ctaLabel}
            </ActionLink>
          </Button>
          {secondary && (
            <Button
              asChild
              variant="outline"
              size="xl"
              className="border-[1.5px] border-white/70 bg-transparent font-semibold text-white shadow-none hover:bg-white/10 hover:text-white"
            >
              <ActionLink href={secondary.href}>{secondary.label}</ActionLink>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
