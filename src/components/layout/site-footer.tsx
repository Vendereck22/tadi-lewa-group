import Link from "next/link";
import { FacebookIcon, LinkedinIcon, YoutubeIcon } from "@/components/shared/brand-icons";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { navLinks, socialLinks } from "@/lib/data/site";

const socials = [
  { label: "Facebook", href: socialLinks.facebook, icon: FacebookIcon },
  { label: "LinkedIn", href: socialLinks.linkedin, icon: LinkedinIcon },
  { label: "YouTube", href: socialLinks.youtube, icon: YoutubeIcon },
];

export function SiteFooter() {
  return (
    <footer className="bg-brand-deep text-brand-deep-foreground">
      <div className="container-site grid gap-10 pt-14 pb-10 md:grid-cols-[1fr_auto_auto] md:gap-x-20 md:pt-16">
        <div>
          <Logo variant="inverse" />
          <p className="mt-5 max-w-64 italic">Ensemble, construisons un avenir meilleur.</p>
        </div>

        <nav aria-label="Navigation du pied de page">
          <h2 className="font-sans text-base font-semibold tracking-normal text-white">Navigation</h2>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-base font-semibold tracking-normal text-white">Suivez-nous</h2>
          <ul className="mt-4 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      variant="inverse"
                      size="icon"
                      className="size-11 [&_svg:not([class*='size-'])]:size-5"
                    >
                      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (nouvel onglet)`}>
                        <Icon />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{label}</TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator className="bg-white/10" />
      <p className="container-site py-6 text-center text-sm">
        Copyright © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">TADI LEWA GROUP SARLU</span>. Tous droits réservés.
      </p>
    </footer>
  );
}
