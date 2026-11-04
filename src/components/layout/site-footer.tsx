import { ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { FooterNewsletter } from "@/components/layout/footer-newsletter";
import { FacebookIcon, LinkedinIcon, YoutubeIcon } from "@/components/shared/brand-icons";
import { Logo } from "@/components/shared/logo";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Link } from "@/i18n/navigation";
import { navLinks, socialLinks } from "@/lib/data/site";

const socials = [
  { label: "Facebook", href: socialLinks.facebook, icon: FacebookIcon },
  { label: "LinkedIn", href: socialLinks.linkedin, icon: LinkedinIcon },
  { label: "YouTube", href: socialLinks.youtube, icon: YoutubeIcon },
];

// Colonne « Nos activités » : libellés traduits « footer.activities.<clé> »
const activityLinks = [
  { href: "/services#entrepreneurs", key: "entrepreneurs" },
  { href: "/services#entreprises", key: "companies" },
  { href: "/services#formation", key: "training" },
  { href: "/services#partenariats", key: "partnerships" },
  { href: "/voyages", key: "travel" },
  { href: "/actualites?categorie=evenement", key: "events" },
];

const headingClass = "font-sans text-base font-semibold tracking-normal text-white";
const linkClass =
  "rounded-sm transition-colors outline-none hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-white/40";

function LinkColumn({
  title,
  label,
  links,
}: {
  title: string;
  label: string;
  links: { href: string; key: string; text: string }[];
}) {
  return (
    <nav aria-label={label}>
      <h2 className={headingClass}>{title}</h2>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.key}>
            <Link href={link.href} className={linkClass}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Pied de page pleine largeur : logo et slogan, deux colonnes de liens, newsletter et
// réseaux sociaux ; barre basse avec copyright et retour en haut
export function SiteFooter() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");
  const tc = useTranslations("common");
  const tl = useTranslations("newsletter");

  return (
    <footer className="bg-brand-deep text-brand-deep-foreground dark:border-t dark:border-white/10">
      <div className="container-site grid grid-cols-2 gap-x-8 gap-y-12 py-14 md:grid-cols-3 md:py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.8fr)_minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-x-12">
        {/* Logo et slogan */}
        <div className="col-span-2 md:col-span-1">
          <Logo variant="inverse" />
          <p className="mt-5 max-w-64 italic">{t("slogan")}</p>
        </div>

        <LinkColumn
          title={t("navigation")}
          label={tn("footer")}
          links={navLinks.map((link) => ({ ...link, text: tn(link.key) }))}
        />
        <LinkColumn
          title={t("activitiesTitle")}
          label={t("activitiesTitle")}
          links={activityLinks.map((link) => ({ ...link, text: t(`activities.${link.key}`) }))}
        />

        {/* Newsletter et réseaux sociaux */}
        <div className="col-span-2 md:col-span-3 lg:col-span-1">
          <h2 className={headingClass}>{t("newsletterTitle")}</h2>
          <p className="mt-5 max-w-md">{tl("text")}</p>
          <div className="max-w-md">
            <FooterNewsletter />
          </div>

          <h2 className={`${headingClass} mt-8`}>{t("follow")}</h2>
          <ul className="mt-4 flex gap-2.5">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label} ${tc("newTab")}`}
                      className="grid size-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors outline-none hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 [&_svg]:size-4.5"
                    >
                      <Icon />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>{label}</TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator className="bg-white/10" />

      <div className="container-site flex flex-col items-center justify-between gap-4 py-6 text-sm sm:flex-row">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">TADI LEWA GROUP SARLU</span>. {t("rights")}
        </p>
        <a href="#top" className={`inline-flex items-center gap-2 font-medium ${linkClass}`}>
          {t("backToTop")}
          <ArrowUp aria-hidden="true" className="size-4" />
        </a>
      </div>
    </footer>
  );
}
